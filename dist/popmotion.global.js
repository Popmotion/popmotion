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
	exports.transformers = exports.unitType = exports.shadowType = exports.scaleType = exports.rgbType = exports.pxType = exports.positionsType = exports.hslType = exports.hexType = exports.complexType = exports.colorType = exports.axesType = exports.angleType = exports.alphaType = exports.setGlobalDilation = exports.combineTransformers = exports.utils = exports.calc = exports.easing = exports.svgPathAdapter = exports.svgAdapter = exports.cssAdapter = exports.attrAdapter = exports.adapter = exports.timeline = exports.stagger = exports.process = exports.input = exports.track = exports.physics = exports.tween = exports.actor = exports.Action = undefined;
	
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
	
	var _presetEasing = __webpack_require__(18);
	
	var _presetEasing2 = _interopRequireDefault(_presetEasing);
	
	var _calc2 = __webpack_require__(19);
	
	var _calc = _interopRequireWildcard(_calc2);
	
	var _utils = _interopRequireWildcard(_utils2);
	
	var _alpha = __webpack_require__(20);
	
	var _alpha2 = _interopRequireDefault(_alpha);
	
	var _angle = __webpack_require__(21);
	
	var _angle2 = _interopRequireDefault(_angle);
	
	var _axes = __webpack_require__(22);
	
	var _axes2 = _interopRequireDefault(_axes);
	
	var _color = __webpack_require__(23);
	
	var _color2 = _interopRequireDefault(_color);
	
	var _complex = __webpack_require__(24);
	
	var _complex2 = _interopRequireDefault(_complex);
	
	var _hex = __webpack_require__(25);
	
	var _hex2 = _interopRequireDefault(_hex);
	
	var _hsl = __webpack_require__(26);
	
	var _hsl2 = _interopRequireDefault(_hsl);
	
	var _positions = __webpack_require__(27);
	
	var _positions2 = _interopRequireDefault(_positions);
	
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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9wb3Btb3Rpb24uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OzttQkFrQ3FCLG1CQUFtQjs7Ozs7Ozs7O2tCQUMvQixpQkFBaUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7UUFsQ25CLE1BQU07Ozs7OztBQVlOLElBQU0sS0FBSyxXQUFMLEtBQUssR0FBRyxVQUFDLEtBQUs7U0FBSyxvQkFBVSxLQUFLLENBQUM7Q0FBQSxDQUFDO0FBQzFDLElBQU0sS0FBSyxXQUFMLEtBQUssR0FBRyxVQUFDLEtBQUs7U0FBSyxvQkFBVSxLQUFLLENBQUM7Q0FBQSxDQUFDO0FBQzFDLElBQU0sT0FBTyxXQUFQLE9BQU8sR0FBRyxVQUFDLEtBQUs7U0FBSyxzQkFBWSxLQUFLLENBQUM7Q0FBQSxDQUFDO0FBQzlDLElBQU0sS0FBSyxXQUFMLEtBQUssR0FBRztvQ0FBSSxJQUFJO0FBQUosUUFBSTs7OzJFQUFrQixJQUFJO0NBQUMsQ0FBQztBQUM5QyxJQUFNLEtBQUssV0FBTCxLQUFLLEdBQUc7cUNBQUksSUFBSTtBQUFKLFFBQUk7OzsyRUFBa0IsSUFBSTtDQUFDLENBQUM7QUFDOUMsSUFBTSxPQUFPLFdBQVAsT0FBTyxHQUFHO3FDQUFJLElBQUk7QUFBSixRQUFJOzs7NkVBQW9CLElBQUk7Q0FBQyxDQUFDO1FBQ2xELE9BQU87UUFDUCxRQUFROzs7O1FBR1IsT0FBTztRQUNQLFdBQVc7UUFDWCxVQUFVO1FBQ1YsVUFBVTtRQUNWLGNBQWM7Ozs7UUFHZCxNQUFNOzs7O1FBR0QsSUFBSTtRQUNKLEtBQUs7Ozs7UUFJVixTQUFTO1FBQ1QsU0FBUztRQUNULFFBQVE7UUFDUixTQUFTO1FBQ1QsV0FBVztRQUNYLE9BQU87UUFDUCxPQUFPO1FBQ1AsYUFBYTtRQUNiLE1BQU07UUFDTixPQUFPO1FBQ1AsU0FBUztRQUNULFVBQVU7UUFDVixRQUFROzs7O1FBR0gsWUFBWSIsImZpbGUiOiJwb3Btb3Rpb24uanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL01hdHRQZXJyeS9TaXRlcy9wb3Btb3Rpb24iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBBY3Rpb25zXG5leHBvcnQgQWN0aW9uIGZyb20gJy4vYWN0aW9ucy9BY3Rpb24nO1xuaW1wb3J0IEFjdG9yIGZyb20gJy4vYWN0aW9ucy9BY3Rvcic7XG5pbXBvcnQgVHdlZW4gZnJvbSAnLi9hY3Rpb25zL1R3ZWVuJztcbmltcG9ydCBQaHlzaWNzIGZyb20gJy4vYWN0aW9ucy9QaHlzaWNzJztcbmltcG9ydCBUcmFjayBmcm9tICcuL2FjdGlvbnMvVHJhY2snO1xuXG4vLyBQcm9jZXNzXG5pbXBvcnQgUHJvY2VzcyBmcm9tICcuL3Byb2Nlc3MvUHJvY2Vzcyc7XG5cbi8vIElucHV0XG5pbXBvcnQgSW5wdXQgZnJvbSAnLi9pbnB1dC9JbnB1dCc7XG5cbmV4cG9ydCBjb25zdCBhY3RvciA9IChwcm9wcykgPT4gbmV3IEFjdG9yKHByb3BzKTtcbmV4cG9ydCBjb25zdCB0d2VlbiA9IChwcm9wcykgPT4gbmV3IFR3ZWVuKHByb3BzKTtcbmV4cG9ydCBjb25zdCBwaHlzaWNzID0gKHByb3BzKSA9PiBuZXcgUGh5c2ljcyhwcm9wcyk7XG5leHBvcnQgY29uc3QgdHJhY2sgPSAoLi4uYXJncykgPT4gbmV3IFRyYWNrKC4uLmFyZ3MpO1xuZXhwb3J0IGNvbnN0IGlucHV0ID0gKC4uLmFyZ3MpID0+IG5ldyBJbnB1dCguLi5hcmdzKTtcbmV4cG9ydCBjb25zdCBwcm9jZXNzID0gKC4uLmFyZ3MpID0+IG5ldyBQcm9jZXNzKC4uLmFyZ3MpO1xuZXhwb3J0IHN0YWdnZXIgZnJvbSAnLi9pbmMvc3RhZ2dlcic7XG5leHBvcnQgdGltZWxpbmUgZnJvbSAnLi9pbmMvdGltZWxpbmUnO1xuXG4vLyBBZGFwdGVyc1xuZXhwb3J0IGFkYXB0ZXIgZnJvbSAnLi9hZGFwdGVyL2FkYXB0ZXInO1xuZXhwb3J0IGF0dHJBZGFwdGVyIGZyb20gJy4vYWRhcHRlci9hdHRyLWFkYXB0ZXInO1xuZXhwb3J0IGNzc0FkYXB0ZXIgZnJvbSAnLi9hZGFwdGVyL2Nzcy1hZGFwdGVyJztcbmV4cG9ydCBzdmdBZGFwdGVyIGZyb20gJy4vYWRhcHRlci9zdmctYWRhcHRlcic7XG5leHBvcnQgc3ZnUGF0aEFkYXB0ZXIgZnJvbSAnLi9hZGFwdGVyL3N2Zy1wYXRoLWFkYXB0ZXInO1xuXG4vLyBFYXNpbmdcbmV4cG9ydCBlYXNpbmcgZnJvbSAnLi9hY3Rpb25zL2Vhc2luZy9wcmVzZXQtZWFzaW5nJztcblxuLy8gVXRpbHNcbmV4cG9ydCAqIGFzIGNhbGMgZnJvbSAnLi9pbmMvY2FsYyc7XG5leHBvcnQgKiBhcyB1dGlscywgeyBjb21iaW5lVHJhbnNmb3JtZXJzIH0gZnJvbSAnLi9pbmMvdXRpbHMnO1xuZXhwb3J0IHsgc2V0R2xvYmFsRGlsYXRpb24gfSBmcm9tICcuL3Byb2Nlc3MvdGltZXInO1xuXG4vLyBWYWx1ZSB0eXBlc1xuZXhwb3J0IGFscGhhVHlwZSBmcm9tICcuL3ZhbHVlLXR5cGVzL2FscGhhJztcbmV4cG9ydCBhbmdsZVR5cGUgZnJvbSAnLi92YWx1ZS10eXBlcy9hbmdsZSc7XG5leHBvcnQgYXhlc1R5cGUgZnJvbSAnLi92YWx1ZS10eXBlcy9heGVzJztcbmV4cG9ydCBjb2xvclR5cGUgZnJvbSAnLi92YWx1ZS10eXBlcy9jb2xvcic7XG5leHBvcnQgY29tcGxleFR5cGUgZnJvbSAnLi92YWx1ZS10eXBlcy9jb21wbGV4JztcbmV4cG9ydCBoZXhUeXBlIGZyb20gJy4vdmFsdWUtdHlwZXMvaGV4JztcbmV4cG9ydCBoc2xUeXBlIGZyb20gJy4vdmFsdWUtdHlwZXMvaHNsJztcbmV4cG9ydCBwb3NpdGlvbnNUeXBlIGZyb20gJy4vdmFsdWUtdHlwZXMvcG9zaXRpb25zJztcbmV4cG9ydCBweFR5cGUgZnJvbSAnLi92YWx1ZS10eXBlcy9weCc7XG5leHBvcnQgcmdiVHlwZSBmcm9tICcuL3ZhbHVlLXR5cGVzL3JnYic7XG5leHBvcnQgc2NhbGVUeXBlIGZyb20gJy4vdmFsdWUtdHlwZXMvc2NhbGUnO1xuZXhwb3J0IHNoYWRvd1R5cGUgZnJvbSAnLi92YWx1ZS10eXBlcy9zaGFkb3cnO1xuZXhwb3J0IHVuaXRUeXBlIGZyb20gJy4vdmFsdWUtdHlwZXMvdW5pdCc7XG5cbi8vIFRyYW5zZm9ybWVyc1xuZXhwb3J0ICogYXMgdHJhbnNmb3JtZXJzIGZyb20gJy4vaW5jL3RyYW5zZm9ybWVycyc7Il19

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
	
	var _calc = __webpack_require__(19);
	
	var _utils = __webpack_require__(2);
	
	var _bindAdapter = __webpack_require__(35);
	
	var _bindAdapter2 = _interopRequireDefault(_bindAdapter);
	
	var _color = __webpack_require__(23);
	
	var _color2 = _interopRequireDefault(_color);
	
	var _complex = __webpack_require__(24);
	
	var _complex2 = _interopRequireDefault(_complex);
	
	var _unit = __webpack_require__(32);
	
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
	                            if (newValue.type.hasOwnProperty('split')) {
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
	
	                // Append unit
	                var valueForState = value.type && value.type.serialize ? value.type.serialize(value.current, value) : value.current;
	
	                // Add to state if this is not a child vaue
	                if (!value.parent) {
	                    this.state[key] = valueForState;
	                } else {
	                    this.values[value.parent].children[value.childKey] = valueForState;
	                }
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
	
	        if (this.onUpdate) {
	            this.onUpdate(this.state, this);
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
	//# sourceMappingURL=data:application/json;base64,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TyxDQUFDO2FBQy9EO1NBQ0o7S0FDSjs7Ozs7OztBQXhUZ0IsVUFBTSxXQStUdkIsZUFBZSw4QkFBRztBQUNkLGVBQU87QUFDSCxvQkFBUSxFQUFFLENBQUM7QUFDWCxpQkFBSyxFQUFFLEtBQUs7U0FDZixDQUFDO0tBQ0w7Ozs7Ozs7O0FBcFVnQixVQUFNLFdBNFV2QixtQkFBbUIsa0NBQUc7QUFDbEIsZUFBTyxZQUFZLENBQUM7S0FDdkI7O1dBOVVnQixNQUFNOzs7a0JBQU4sTUFBTSIsImZpbGUiOiJBY3Rpb24uanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL01hdHRQZXJyeS9TaXRlcy9wb3Btb3Rpb24iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUHJvY2VzcyBmcm9tICcuLi9wcm9jZXNzL1Byb2Nlc3MnO1xuaW1wb3J0IHsgc3BlZWRQZXJTZWNvbmQgfSBmcm9tICcuLi9pbmMvY2FsYyc7XG5pbXBvcnQgeyBpc051bSwgaXNPYmosIGlzU3RyaW5nIH0gZnJvbSAnLi4vaW5jL3V0aWxzJztcbmltcG9ydCBiaW5kQWRhcHRlciBmcm9tICcuLi9pbmMvYmluZC1hZGFwdGVyJztcbmltcG9ydCBjb2xvclR5cGUgZnJvbSAnLi4vdmFsdWUtdHlwZXMvY29sb3InO1xuaW1wb3J0IGNvbXBsZXhUeXBlIGZyb20gJy4uL3ZhbHVlLXR5cGVzL2NvbXBsZXgnO1xuaW1wb3J0IHVuaXRUeXBlIGZyb20gJy4uL3ZhbHVlLXR5cGVzL3VuaXQnO1xuXG5jb25zdCBERUZBVUxUX1BST1AgPSAnY3VycmVudCc7XG5jb25zdCBOVU1FUklDQUxfVkFMVUVTID0gW0RFRkFVTFRfUFJPUCwgJ2Zyb20nLCAndG8nLCAncHJldicsICd2ZWxvY2l0eSddO1xuY29uc3QgTlVNX05VTUVSSUNBTF9WQUxVRVMgPSBOVU1FUklDQUxfVkFMVUVTLmxlbmd0aDtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQWN0aW9uIGV4dGVuZHMgUHJvY2VzcyB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgcHJvcHMuc3RhdGUgPSB7fTtcbiAgICAgICAgcHJvcHMudmFsdWVLZXlzID0gW107XG4gICAgICAgIHByb3BzLnBhcmVudEtleXMgPSBbXTtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgIH1cblxuICAgIC8qXG4gICAgICAgICMgU2V0IEFjdGlvbiBwcm9wZXJ0aWVzXG4gICAgICAgICMjIFNldCB1c2VyLWRlZmluZWQgQWN0aW9uIHByb3BlcnRpZXNcblxuICAgICAgICBAcGFyYW0gW29iamVjdF1cbiAgICAgICAgQHJldHVybiBbQWN0aW9uXVxuICAgICovXG4gICAgc2V0KHByb3BzID0ge30pIHtcbiAgICAgICAgY29uc3QgeyB2YWx1ZXMsIG9uLCAuLi5wcm9wc1RvU2V0IH0gPSBwcm9wcztcbiAgICAgICAgY29uc3QgY3VycmVudFZhbHVlcyA9IHRoaXMudmFsdWVzID0gdGhpcy52YWx1ZXMgfHwge307XG4gICAgICAgIGNvbnN0IGRlZmF1bHRWYWx1ZSA9IHRoaXMuZ2V0RGVmYXVsdFZhbHVlKCk7XG4gICAgICAgIGNvbnN0IGluaGVyaXRhYmxlID0ge307XG5cbiAgICAgICAgLy8gMSkgU2V0IG5vbi1jb25zdW1lZCBwcm9wZXJ0aWVzXG4gICAgICAgIHN1cGVyLnNldChwcm9wc1RvU2V0KTtcblxuICAgICAgICAvLyAyKSBCaW5kIGBvbmAgdG8gYW4gYWRhcHRlciwgaWYgbm90IGFscmVhZHlcbiAgICAgICAgaWYgKG9uKSB7XG4gICAgICAgICAgICAvLyBEdWNrdHlwaXNoIGNoZWNrIGZvciBBZGFwdGVyXG4gICAgICAgICAgICB0aGlzLm9uID0gKCFvbi5zZXR0ZXIpID8gYmluZEFkYXB0ZXIob24pIDogb247XG4gICAgICAgIH1cblxuICAgICAgICAvLyAzKSBQcmltZSBhbiBvYmplY3QgdG8gaW5oZXJpdCBmcm9tLCB3aXRoIG9ubHkgYHZhbHVlYCBwcm9wZXJ0aWVzXG4gICAgICAgIGZvciAobGV0IGtleSBpbiBkZWZhdWx0VmFsdWUpIHtcbiAgICAgICAgICAgIGlmIChkZWZhdWx0VmFsdWUuaGFzT3duUHJvcGVydHkoa2V5KSAmJiBwcm9wc1RvU2V0Lmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICAgICAgICBpbmhlcml0YWJsZVtrZXldID0gcHJvcHNUb1NldFtrZXldO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gNCkgVXBkYXRlIGV4aXN0aW5nIHZhbHVlcyB3aXRoIGluaGVyaXRhYmxlIHByb3BlcnRpZXNcbiAgICAgICAgZm9yIChsZXQga2V5IGluIGN1cnJlbnRWYWx1ZXMpIHtcbiAgICAgICAgICAgIC8vIEV4Y2x1ZGUgdmFyaWFibGVzIHRvIGJlIHNldCwgYXMgd2UnbGwgZGVhbCB3aXRoIHRob3NlIHNlcGVyYXRlbHlcbiAgICAgICAgICAgIGlmIChjdXJyZW50VmFsdWVzLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICAgICAgICBjdXJyZW50VmFsdWVzW2tleV0gPSB7IC4uLmN1cnJlbnRWYWx1ZXNba2V5XSwgLi4uaW5oZXJpdGFibGUgfTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIDUpIFVwZGF0ZVxuICAgICAgICBpZiAodmFsdWVzKSB7XG4gICAgICAgICAgICB0aGlzLnNldFZhbHVlcyh2YWx1ZXMsIGluaGVyaXRhYmxlKTsgICBcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIHNldFZhbHVlcyh2YWx1ZXMsIGluaGVyaXRGcm9tKSB7XG4gICAgICAgIGNvbnN0IGN1cnJlbnRWYWx1ZXMgPSB0aGlzLnZhbHVlcztcbiAgICAgICAgY29uc3QgZGVmYXVsdFZhbHVlID0gdGhpcy5nZXREZWZhdWx0VmFsdWUoKTtcbiAgICAgICAgY29uc3QgZGVmYXVsdFZhbHVlUHJvcCA9IHRoaXMuZ2V0RGVmYXVsdFZhbHVlUHJvcCgpO1xuXG4gICAgICAgIC8vIDIpIExvb3Agb3ZlciBldmVyeSBpbmNvbWluZyBgdmFsdWVgIGFuZCBzZXRcbiAgICAgICAgZm9yIChsZXQga2V5IGluIHZhbHVlcykge1xuICAgICAgICAgICAgaWYgKHZhbHVlcy5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgICAgICAgbGV0IHZhbHVlID0ge307XG4gICAgICAgICAgICAgICAgbGV0IGNoaWxkcmVuID0ge307XG4gICAgICAgICAgICAgICAgbGV0IGhhc0NoaWxkcmVuID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgbGV0IGJhc2UgPSBjdXJyZW50VmFsdWVzW2tleV0gPyBjdXJyZW50VmFsdWVzW2tleV0gOiBkZWZhdWx0VmFsdWU7XG5cbiAgICAgICAgICAgICAgICAvLyBJZiB2YWx1ZXMgb3MgYW4gb2JqZWN0LCB1c2UgaXQgZGlyZWN0bHlcbiAgICAgICAgICAgICAgICBpZiAoaXNPYmoodmFsdWVzW2tleV0pKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlID0gdmFsdWVzW2tleV07XG5cbiAgICAgICAgICAgICAgICAvLyBPUiBzZXQgdG8gYSB0aGUgZGVmYXVsdCB2YWx1ZSBwcm9wZXJ0eSBvZiBhIGJsYW5rIG9iamVjdFxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlW2RlZmF1bHRWYWx1ZVByb3BdID0gdmFsdWVzW2tleV07XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgbGV0IG5ld1ZhbHVlID0geyAuLi5iYXNlLCAuLi5pbmhlcml0RnJvbSwgLi4udmFsdWUgfTtcblxuICAgICAgICAgICAgICAgIC8vIEdldCBjdXJyZW50IHZhbHVlIGlmIG5vbmUgaXMgZGVmaW5lZFxuICAgICAgICAgICAgICAgIGlmIChuZXdWYWx1ZS5jdXJyZW50ID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gSWYgd2UgaGF2ZSBhIGBmcm9tYCB2YWx1ZSBzZXQsIHRha2UgdGhhdFxuICAgICAgICAgICAgICAgICAgICBpZiAobmV3VmFsdWUuZnJvbSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBuZXdWYWx1ZS5jdXJyZW50ID0gbmV3VmFsdWUuZnJvbTtcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIC8vIE9yIGlmIHdlIGhhdmUgYW4gQWRhcHRlciwgZ2V0IGl0IGZyb20gdGhhdFxuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMub24gJiYgdGhpcy5vbi5nZXQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ld1ZhbHVlLmN1cnJlbnQgPSB0aGlzLm9uLmdldChrZXkpO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gSWYgaXQncyBzdGlsbCB1bmRlZmluZWQgbWFrZSBpdCBlcXVhbCAwPz9cbiAgICAgICAgICAgICAgICAgICAgaWYgKG5ld1ZhbHVlLmN1cnJlbnQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbmV3VmFsdWUuY3VycmVudCA9IDA7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAobmV3VmFsdWUuZnJvbSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgIG5ld1ZhbHVlLmZyb20gPSBuZXdWYWx1ZS5jdXJyZW50O1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC8vIElmIG91ciBBZGFwdGVyIGhhcyBhIGBnZXRWYWx1ZVR5cGVgIGZ1bmN0aW9uLCB0cnkgdG8gZ2V0IGEgYHR5cGVgIHdpdGggdGhlIHZhbHVlIGtleVxuICAgICAgICAgICAgICAgIGlmICghbmV3VmFsdWUudHlwZSAmJiB0aGlzLm9uICYmIHRoaXMub24uZ2V0VmFsdWVUeXBlKSB7XG4gICAgICAgICAgICAgICAgICAgIG5ld1ZhbHVlLnR5cGUgPSB0aGlzLm9uLmdldFZhbHVlVHlwZShrZXkpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC8vIGMpIExvb3AgdGhyb3VnaCBhbGwgbnVtZXJpY2FsIHByb3BlcnR5IHR5cGVzXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBOVU1fTlVNRVJJQ0FMX1ZBTFVFUzsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHByb3BOYW1lID0gTlVNRVJJQ0FMX1ZBTFVFU1tpXTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdmFsdWVQcm9wID0gbmV3VmFsdWVbcHJvcE5hbWVdO1xuXG4gICAgICAgICAgICAgICAgICAgIC8vIElmIHdlIGhhdmUgdGhpcyBraW5kIG9mIHByb3BlcnR5LCBwcm9jZXNzXG4gICAgICAgICAgICAgICAgICAgIGlmICh2YWx1ZVByb3AgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gSWYgd2UgZG9uJ3QgaGF2ZSBhIHR5cGUgc2V0IHRvIHRoaXMgdmFsdWUsIGZpbmQgb25lICh1bmxlc3MgaXQncyBhIHJhdyBudW1iZXIpXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIW5ld1ZhbHVlLnR5cGUgJiYgaXNTdHJpbmcodmFsdWVQcm9wKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh1bml0VHlwZS50ZXN0KHZhbHVlUHJvcCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3VmFsdWUudHlwZSA9IHVuaXRUeXBlO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChjb2xvclR5cGUudGVzdCh2YWx1ZVByb3ApKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ld1ZhbHVlLnR5cGUgPSBjb2xvclR5cGU7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGNvbXBsZXhUeXBlLnRlc3QodmFsdWVQcm9wKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXdWYWx1ZS50eXBlID0gY29tcGxleFR5cGU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobmV3VmFsdWUudHlwZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIElmIHdlJ3JlIGdvaW5nIHRvIHNwbGl0IHRoaXMgdmFsdWUgaW50byBjaGlsZCB2YWx1ZXNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAobmV3VmFsdWUudHlwZS5oYXNPd25Qcm9wZXJ0eSgnc3BsaXQnKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBzcGxpdFByb3AgPSBuZXdWYWx1ZS50eXBlLnNwbGl0KHZhbHVlUHJvcCk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgc3BsaXRLZXkgaW4gc3BsaXRQcm9wKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoc3BsaXRQcm9wLmhhc093blByb3BlcnR5KHNwbGl0S2V5KSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGNvbWJpbmVkS2V5ID0ga2V5ICsgc3BsaXRLZXk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWNoaWxkcmVuW2NvbWJpbmVkS2V5XSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBkZWZhdWx0VmFsdWUgPSAobmV3VmFsdWUudHlwZS5kZWZhdWx0UHJvcHMgJiYgbmV3VmFsdWUudHlwZS5kZWZhdWx0UHJvcHNbc3BsaXRLZXldKSA/IG5ld1ZhbHVlLnR5cGUuZGVmYXVsdFByb3BzW3NwbGl0S2V5XSA6IHt9O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGlsZHJlbltjb21iaW5lZEtleV0gPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuLi5uZXdWYWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC4uLmRlZmF1bHRWYWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhcmVudDoga2V5LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hpbGRLZXk6IHNwbGl0S2V5LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogdW5kZWZpbmVkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hpbGRyZW5bY29tYmluZWRLZXldW3Byb3BOYW1lXSA9IHNwbGl0UHJvcFtzcGxpdEtleV07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBJZiB0aGlzIGhhcyBhIGB0ZW1wbGF0ZWAgZnVuY3Rpb24sIGdlbmVyYXRlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghbmV3VmFsdWUudGVtcGxhdGUgJiYgbmV3VmFsdWUudHlwZS50ZW1wbGF0ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3VmFsdWUudGVtcGxhdGUgPSBuZXdWYWx1ZS50eXBlLnRlbXBsYXRlKG5ld1ZhbHVlW3Byb3BOYW1lXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoYXNDaGlsZHJlbiA9IHRydWU7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKG5ld1ZhbHVlLnR5cGUuZGVmYXVsdFByb3BzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ld1ZhbHVlID0geyAuLi5uZXdWYWx1ZSwgLi4ubmV3VmFsdWUudHlwZS5kZWZhdWx0UHJvcHMgfTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAobmV3VmFsdWUudHlwZS5wYXJzZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXdWYWx1ZVtwcm9wTmFtZV0gPSBuZXdWYWx1ZS50eXBlLnBhcnNlKG5ld1ZhbHVlW3Byb3BOYW1lXSwgbmV3VmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gLy8gRW5kIG51bWVyaWNhbCBwcm9wZXJ0eSBpdGVyYXRpb25cblxuICAgICAgICAgICAgICAgIC8vIFNldCBgcHJldmAgdG8gYGN1cnJlbnRgIGlmIGl0IGlzbid0IGFscmVhZHkgZGVmaW5lZFxuICAgICAgICAgICAgICAgIGlmIChuZXdWYWx1ZS5wcmV2ID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgbmV3VmFsdWUucHJldiA9IG5ld1ZhbHVlLmN1cnJlbnQ7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgY3VycmVudFZhbHVlc1trZXldID0gbmV3VmFsdWU7XG5cbiAgICAgICAgICAgICAgICAvLyBJZiB0aGlzIHZhbHVlIGRvZXNuJ3QgaGF2ZSBjaGlsZHJlbiwgYWRkIHRvIHZhbHVlS2V5c1xuICAgICAgICAgICAgICAgIGlmICghaGFzQ2hpbGRyZW4pIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMudmFsdWVLZXlzLmluZGV4T2Yoa2V5KSA9PT0gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudmFsdWVLZXlzLnB1c2goa2V5KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLy8gT3IgYWRkIHRvIHBhcmVudEtleXNcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBuZXdWYWx1ZS5jaGlsZHJlbiA9IG5ld1ZhbHVlLmNoaWxkcmVuIHx8IHt9O1xuXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnBhcmVudEtleXMuaW5kZXhPZihrZXkpID09PSAtMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wYXJlbnRLZXlzLnB1c2goa2V5KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0VmFsdWVzKGNoaWxkcmVuKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gLy8gRW5kIHZhbHVlIGl0ZXJhdGlvblxuXG4gICAgICAgIC8vIDMpIFByZWNvbXB1dGUgdmFsdWUga2V5IGFuZCBwYXJlbnQga2V5IGxlbmd0aCB0byBwcmV2ZW50IHBlci1mcmFtZSBtZWFzdXJlbWVudFxuICAgICAgICB0aGlzLm51bVZhbHVlS2V5cyA9IHRoaXMudmFsdWVLZXlzLmxlbmd0aDtcbiAgICAgICAgdGhpcy5udW1QYXJlbnRLZXlzID0gdGhpcy5wYXJlbnRLZXlzLmxlbmd0aDtcblxuICAgICAgICByZXR1cm4gdGhpcztcblxuICAgIH1cblxuICAgIC8qXG4gICAgICAgIERlY2lkZSB3aGV0aGVyIHRoaXMgQWN0aW9uIHdpbGwgcmVuZGVyIG9uIG5leHQgZnJhbWVcblxuICAgICAgICBAcGFyYW0gW0FjdGlvbl1cbiAgICAgICAgQHBhcmFtIFtudW1iZXJdXG4gICAgICAgIEBwYXJhbSBbbnVtYmVyXVxuICAgICAgICBAcmV0dXJuIFtib29sZWFuXTogUmV0dXJuIHRydWUgdG8gcmVuZGVyXG4gICAgKi9cbiAgICB3aWxsUmVuZGVyKGFjdGlvbiwgZnJhbWVTdGFtcCwgZWxhcHNlZCkge1xuICAgICAgICBsZXQgaGFzQ2hhbmdlZCA9IGZhbHNlO1xuXG4gICAgICAgIC8vIENoZWNrIGlmIGJhc2UgdmFsdWVzIGhhdmUgdXBkYXRlZCBcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLm51bVZhbHVlS2V5czsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCBrZXkgPSB0aGlzLnZhbHVlS2V5c1tpXTtcbiAgICAgICAgICAgIGNvbnN0IHZhbHVlID0gdGhpcy52YWx1ZXNba2V5XTtcblxuICAgICAgICAgICAgLy8gUnVuIHRyYW5zZm9ybSBmdW5jdGlvbiAoaWYgcHJlc2VudClcbiAgICAgICAgICAgIGlmICh2YWx1ZS50cmFuc2Zvcm0pIHtcbiAgICAgICAgICAgICAgICB2YWx1ZS5jdXJyZW50ID0gdmFsdWUudHJhbnNmb3JtKHZhbHVlLmN1cnJlbnQsIGtleSwgdGhpcyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIENhcCBtaW5pbXVtXG4gICAgICAgICAgICBpZiAoaXNOdW0odmFsdWUubWluKSkge1xuICAgICAgICAgICAgICAgIHZhbHVlLmN1cnJlbnQgPSBNYXRoLm1heCh2YWx1ZS5jdXJyZW50LCB2YWx1ZS5taW4pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBDYXAgbWF4aW11bVxuICAgICAgICAgICAgaWYgKGlzTnVtKHZhbHVlLm1heCkpIHtcbiAgICAgICAgICAgICAgICB2YWx1ZS5jdXJyZW50ID0gTWF0aC5taW4odmFsdWUuY3VycmVudCwgdmFsdWUubWF4KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gUm91bmQgbnVtYmVyXG4gICAgICAgICAgICBpZiAodmFsdWUucm91bmQpIHtcbiAgICAgICAgICAgICAgICB2YWx1ZS5jdXJyZW50ID0gTWF0aC5yb3VuZCh2YWx1ZS5jdXJyZW50KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdmFsdWUuZnJhbWVDaGFuZ2UgPSB2YWx1ZS5jdXJyZW50IC0gdmFsdWUucHJldjtcblxuICAgICAgICAgICAgLy8gVXBkYXRlIHZlbG9jaXR5XG4gICAgICAgICAgICBpZiAoIXRoaXMuY2FsY3VsYXRlc1ZlbG9jaXR5KSB7XG4gICAgICAgICAgICAgICAgdmFsdWUudmVsb2NpdHkgPSBzcGVlZFBlclNlY29uZCh2YWx1ZS5mcmFtZUNoYW5nZSwgZWxhcHNlZCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIElmIHRoaXMgdmFsdWUgaGFzIGNoYW5nZWRcbiAgICAgICAgICAgIGlmICh2YWx1ZS5wcmV2ICE9PSB2YWx1ZS5jdXJyZW50KSB7XG4gICAgICAgICAgICAgICAgaGFzQ2hhbmdlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgdmFsdWUucHJldiA9IHZhbHVlLmN1cnJlbnQ7XG5cbiAgICAgICAgICAgICAgICAvLyBBcHBlbmQgdW5pdFxuICAgICAgICAgICAgICAgIGNvbnN0IHZhbHVlRm9yU3RhdGUgPSAodmFsdWUudHlwZSAmJiB2YWx1ZS50eXBlLnNlcmlhbGl6ZSkgPyB2YWx1ZS50eXBlLnNlcmlhbGl6ZSh2YWx1ZS5jdXJyZW50LCB2YWx1ZSkgOiB2YWx1ZS5jdXJyZW50O1xuXG4gICAgICAgICAgICAgICAgLy8gQWRkIHRvIHN0YXRlIGlmIHRoaXMgaXMgbm90IGEgY2hpbGQgdmF1ZVxuICAgICAgICAgICAgICAgIGlmICghdmFsdWUucGFyZW50KSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGVba2V5XSA9IHZhbHVlRm9yU3RhdGU7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy52YWx1ZXNbdmFsdWUucGFyZW50XS5jaGlsZHJlblt2YWx1ZS5jaGlsZEtleV0gPSB2YWx1ZUZvclN0YXRlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLm9uRnJhbWUpIHtcbiAgICAgICAgICAgIHRoaXMub25GcmFtZSh0aGlzLnN0YXRlLCB0aGlzKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiAodGhpcy5vbkNsZWFudXApID8gdHJ1ZSA6IGhhc0NoYW5nZWQ7XG4gICAgfVxuXG4gICAgLypcbiAgICAgICAgSWYgd2UgYXJlIHJlbmRlcmluZywgcmVjb21iaW5lIHBhcmVudCB2YWx1ZXMgZmlyc3RcbiAgICAqL1xuICAgIG9uUHJlUmVuZGVyKCkge1xuICAgICAgICAvLyBVcGRhdGUgcGFyZW50IHZhbHVlc1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubnVtUGFyZW50S2V5czsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCBrZXkgPSB0aGlzLnBhcmVudEtleXNbaV07XG4gICAgICAgICAgICBjb25zdCB2YWx1ZSA9IHRoaXMudmFsdWVzW2tleV07XG5cbiAgICAgICAgICAgIHZhbHVlLmN1cnJlbnQgPSB2YWx1ZS50eXBlLmNvbWJpbmUodmFsdWUuY2hpbGRyZW4sIHZhbHVlLnRlbXBsYXRlKTtcblxuICAgICAgICAgICAgaWYgKHRoaXMuc3RhdGVba2V5XSAhPT0gdmFsdWUuY3VycmVudCkge1xuICAgICAgICAgICAgICAgIHRoaXMuc3RhdGVba2V5XSA9IHZhbHVlLmN1cnJlbnQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBvblJlbmRlcih7IHN0YXRlLCBvbiB9KSB7XG4gICAgICAgIGlmIChvbiAmJiBvbi5zZXQpIHtcbiAgICAgICAgICAgIG9uLnNldChzdGF0ZSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5vblVwZGF0ZSkge1xuICAgICAgICAgICAgdGhpcy5vblVwZGF0ZSh0aGlzLnN0YXRlLCB0aGlzKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHBhdXNlKCkge1xuICAgICAgICBzdXBlci5zdG9wKCk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIHJlc3VtZSgpIHtcbiAgICAgICAgc3VwZXIuc3RhcnQoKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgc3RhcnQoKSB7XG4gICAgICAgIGNvbnN0IHZhbHVlcyA9IHRoaXMudmFsdWVzO1xuICAgICAgICBzdXBlci5zdGFydCgpO1xuXG4gICAgICAgIGZvciAobGV0IGtleSBpbiB2YWx1ZXMpIHtcbiAgICAgICAgICAgIGlmICh2YWx1ZXMuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgICAgICAgIHZhbHVlc1trZXldLnByZXYgPSB2YWx1ZXNba2V5XS5vcmlnaW4gPSB2YWx1ZXNba2V5XS5jdXJyZW50O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLypcbiAgICAgICAgIyBHZXQgZGVmYXVsdCBBY3Rpb24gdmFsdWUgcHJvcGVydGllc1xuXG4gICAgICAgIEByZXR1cm4gW29iamVjdF1cbiAgICAqL1xuICAgIGdldERlZmF1bHRWYWx1ZSgpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHZlbG9jaXR5OiAwLFxuICAgICAgICAgICAgcm91bmQ6IGZhbHNlXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgLypcbiAgICAgICAgIyBHZXQgZGVmYXVsdCBBY3Rpb24gdmFsdWUgcHJvcGVydHkgbmFtZVxuICAgICAgICAjIyBTZXQgdGhpcyBgdmFsdWVgIHByb3BlcnR5IHdoZW4gc2V0IGFzIHZhbHVlIGluc3RlYWQgb2Ygb2JqZWN0XG5cbiAgICAgICAgQHJldHVybiBbc3RyaW5nXVxuICAgICovXG4gICAgZ2V0RGVmYXVsdFZhbHVlUHJvcCgpIHtcbiAgICAgICAgcmV0dXJuIERFRkFVTFRfUFJPUDtcbiAgICB9XG59XG4iXX0=

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	exports.__esModule = true;
	
	var _Action2 = __webpack_require__(4);
	
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
	
	    function Actor() {
	        _classCallCheck(this, Actor);
	
	        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	            args[_key] = arguments[_key];
	        }
	
	        var _this = _possibleConstructorReturn(this, _Action.call.apply(_Action, [this].concat(args)));
	
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
	//# sourceMappingURL=data:application/json;base64,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Q0FBQyxRQUFRLEVBQUU7QUFDekMsOEJBQU0sSUFBSSxLQUFBLE1BQUUsQ0FBQztTQUNoQjtLQUNKOztBQWhLZ0IsU0FBSyxXQWtLdEIsZUFBZSw4QkFBRztBQUNkLDRCQUNPLGtCQUFNLGVBQWUsS0FBQSxNQUFFO0FBQzFCLG1CQUFPLEVBQUUsRUFBRTtBQUNYLHNCQUFVLEVBQUUsQ0FBQztXQUNmO0tBQ0w7O1dBeEtnQixLQUFLOzs7a0JBQUwsS0FBSyIsImZpbGUiOiJBY3Rvci5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvTWF0dFBlcnJ5L1NpdGVzL3BvcG1vdGlvbiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBBY3Rpb24gZnJvbSAnLi4vYWN0aW9ucy9BY3Rpb24nO1xuaW1wb3J0IGdlbmVyYXRlQmxlbmRDdXJ2ZSBmcm9tICcuLi9pbmMvZ2VuZXJhdGUtYmxlbmQtY3VydmUnO1xuXG4vKlxuICAgIE1ldGhvZHMgYW5kIHByb3BlcnRpZXMgdG8gYWRkIHRvIGJvdW5kIEFjdGlvbnNcbiovXG5jb25zdCBib3VuZE9uU3RhcnQgPSAoYWN0aW9uKSA9PiBhY3Rpb24uYWN0b3IuYWN0aXZhdGVBY3Rpb24oYWN0aW9uLmlkLCBhY3Rpb24pO1xuY29uc3QgYm91bmRPblN0b3AgPSAoYWN0aW9uKSA9PiBhY3Rpb24uYWN0b3IuZGVhY3RpdmF0ZUFjdGlvbihhY3Rpb24uaWQpO1xuY29uc3QgYm91bmRQcm9wcyA9IChhY3RvcikgPT4gKHtcbiAgICBhY3RvcjogYWN0b3IsXG4gICAgaXNQcmlvcml0eTogdHJ1ZSxcbiAgICBvbjogYWN0b3Iub24sXG4gICAgX29uU3RhcnQ6IGJvdW5kT25TdGFydCxcbiAgICBfb25TdG9wOiBib3VuZE9uU3RvcCxcbiAgICBvblJlbmRlcjogdW5kZWZpbmVkXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQWN0b3IgZXh0ZW5kcyBBY3Rpb24ge1xuICAgIGNvbnN0cnVjdG9yKC4uLmFyZ3MpIHtcbiAgICAgICAgc3VwZXIoLi4uYXJncyk7XG4gICAgICAgIHRoaXMuYWN0aXZlQWN0aW9ucyA9IHt9O1xuICAgICAgICB0aGlzLm51bUFjdGl2ZUFjdGlvbnMgPSAwO1xuICAgIH1cblxuICAgIHNldChwcm9wcywgaW5zdGFudCkge1xuICAgICAgICBpZiAoaW5zdGFudCB8fCAhdGhpcy5iZWhhdmlvdXIpIHtcbiAgICAgICAgICAgIHN1cGVyLnNldChwcm9wcyk7XG4gICAgICAgICAgICB0aGlzLm9uY2UoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnN0IGFjdGlvbiA9IHRoaXMucmVkdWNlcihwcm9wcyk7XG4gICAgICAgICAgICBpZiAoYWN0aW9uKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zdGFydChhY3Rpb24pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLypcbiAgICAgICAgQmluZCBBY3Rpb24gdG8gQWN0b3JcbiAgICAqL1xuICAgIGJpbmQoYWN0aW9uKSB7XG4gICAgICAgIGNvbnN0IGluaGVyaXRlZEFjdGlvbiA9IGFjdGlvbi5pbmhlcml0KCk7XG4gICAgICAgIGxldCBuZXdWYWx1ZXMgPSB7fTtcbiAgICAgICAgbGV0IGhhc05ld1ZhbHVlcyA9IGZhbHNlO1xuXG4gICAgICAgIC8vIENyZWF0ZSB2YWx1ZXMgb24gYWN0b3IgdGhhdCBkb24ndCBleGlzdFxuICAgICAgICBmb3IgKGxldCBrZXkgaW4gaW5oZXJpdGVkQWN0aW9uLnZhbHVlcykge1xuICAgICAgICAgICAgaWYgKGluaGVyaXRlZEFjdGlvbi52YWx1ZXMuaGFzT3duUHJvcGVydHkoa2V5KSAmJiAhdGhpcy52YWx1ZXMuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgICAgICAgIG5ld1ZhbHVlc1trZXldID0gaW5oZXJpdGVkQWN0aW9uLnZhbHVlc1trZXldO1xuICAgICAgICAgICAgICAgIGhhc05ld1ZhbHVlcyA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoaGFzTmV3VmFsdWVzKSB7XG4gICAgICAgICAgICB0aGlzLnNldCh7IHZhbHVlczogbmV3VmFsdWVzIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGluaGVyaXRlZEFjdGlvbi5zZXQoYm91bmRQcm9wcyh0aGlzLCBpbmhlcml0ZWRBY3Rpb24pKTtcbiAgICB9XG5cbiAgICAvKlxuICAgICAgICBTdGFydCBBY3RvclxuXG4gICAgICAgIElmIEFjdGlvbiBpcyBwcm92aWRlZCwgYmluZCBpdCB0byB0aGlzIEFjdG9yIGFuZCBzdGFydFxuXG4gICAgICAgIEBwYXJhbSAob3B0aW9uYWwpIFtBY3Rpb25dXG4gICAgKi9cbiAgICBzdGFydChhY3Rpb24pIHtcbiAgICAgICAgc3VwZXIuc3RhcnQoKTtcblxuICAgICAgICBpZiAoYWN0aW9uKSB7XG4gICAgICAgICAgICBjb25zdCBib3VuZEFjdGlvbiA9IHRoaXMuYmluZChhY3Rpb24pO1xuICAgICAgICAgICAgYm91bmRBY3Rpb24uc3RhcnQoKTtcblxuICAgICAgICAgICAgcmV0dXJuIGJvdW5kQWN0aW9uO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZm9yIChsZXQga2V5IGluIHRoaXMuYWN0aXZlQWN0aW9ucykge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmFjdGl2ZUFjdGlvbnMuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBhY3Rpb24gPSB0aGlzLmFjdGl2ZUFjdGlvbnNba2V5XTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFhY3Rpb24uaXNBY3RpdmUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFjdGlvbi5zdGFydCgpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgc3RvcCgpIHtcbiAgICAgICAgc3VwZXIuc3RvcCgpO1xuXG4gICAgICAgIGZvciAobGV0IGtleSBpbiB0aGlzLmFjdGl2ZUFjdGlvbnMpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmFjdGl2ZUFjdGlvbnMuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgICAgICAgIHRoaXMuYWN0aXZlQWN0aW9uc1trZXldLnN0b3AoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIHdpbGxSZW5kZXIoYWN0b3IsIGZyYW1lU3RhbXAsIGVsYXBzZWQpIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLm51bVZhbHVlS2V5czsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCBrZXkgPSB0aGlzLnZhbHVlS2V5c1tpXTtcbiAgICAgICAgICAgIGNvbnN0IHZhbHVlID0gdGhpcy52YWx1ZXNba2V5XTtcbiAgICAgICAgICAgIGNvbnN0IGRyaXZlciA9IHZhbHVlLm51bURyaXZlcnMgPyB0aGlzLmFjdGl2ZUFjdGlvbnNbdmFsdWUuZHJpdmVyc1swXV0gOiBmYWxzZTtcbiAgICAgICAgICAgIGxldCBuZXdDdXJyZW50ID0gdmFsdWUubnVtRHJpdmVycyA/IGRyaXZlci52YWx1ZXNba2V5XS5jdXJyZW50IDogdmFsdWUuY3VycmVudDtcblxuICAgICAgICAgICAgaWYgKGRyaXZlci5ibGVuZEN1cnZlKSB7XG4gICAgICAgICAgICAgICAgbmV3Q3VycmVudCA9IGRyaXZlci5ibGVuZEN1cnZlKCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHZhbHVlLmN1cnJlbnQgPSBuZXdDdXJyZW50O1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHN1cGVyLndpbGxSZW5kZXIoYWN0b3IsIGZyYW1lU3RhbXAsIGVsYXBzZWQpO1xuICAgIH1cblxuICAgIC8qXG4gICAgICAgIEFkZCBhY3RpdmUgYWN0aW9uc1xuXG4gICAgICAgIEBwYXJhbSBbbnVtYmVyXVxuICAgICAgICBAcGFyYW0gW0FjdGlvbl1cbiAgICAqL1xuICAgIGFjdGl2YXRlQWN0aW9uKGlkLCBhY3Rpb24pIHtcbiAgICAgICAgdGhpcy5hY3RpdmVBY3Rpb25zW2lkXSA9IGFjdGlvbjtcbiAgICAgICAgdGhpcy5udW1BY3RpdmVBY3Rpb25zKys7XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhY3Rpb24ubnVtVmFsdWVLZXlzOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IGtleSA9IGFjdGlvbi52YWx1ZUtleXNbaV07XG4gICAgICAgICAgICBjb25zdCBhY3Rpb25WYWx1ZSA9IGFjdGlvbi52YWx1ZXNba2V5XTtcbiAgICAgICAgICAgIGNvbnN0IHZhbHVlID0gdGhpcy52YWx1ZXNba2V5XTtcblxuICAgICAgICAgICAgLy8gUGFzcyBBY3RvciB2YWx1ZSBwcm9wZXJ0aWVzIHRvIEFjdGlvblxuICAgICAgICAgICAgYWN0aW9uVmFsdWUudmVsb2NpdHkgPSB2YWx1ZS52ZWxvY2l0eTtcbiAgICAgICAgICAgIGFjdGlvblZhbHVlLmN1cnJlbnQgPSB2YWx1ZS5jdXJyZW50O1xuXG4gICAgICAgICAgICAvLyBJZiB3ZSdyZSBibGVuZGluZyB0aGlzIGFjdGlvbiwgYW5kIHRoZXJlJ3Mgb24gYWxyZWFkeSBpbiBwcm9ncmVzc1xuICAgICAgICAgICAgaWYgKGFjdGlvbi5ibGVuZCAmJiB2YWx1ZS5udW1Ecml2ZXJzKSB7XG4gICAgICAgICAgICAgICAgYWN0aW9uLmJsZW5kQ3VydmUgPSBnZW5lcmF0ZUJsZW5kQ3VydmUodGhpcy5hY3RpdmVBY3Rpb25zW3ZhbHVlLmRyaXZlcnNbMF1dLCBhY3Rpb24sIGtleSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHZhbHVlLmRyaXZlcnMgPSBbaWRdO1xuICAgICAgICAgICAgdmFsdWUubnVtRHJpdmVycyA9IHZhbHVlLmRyaXZlcnMubGVuZ3RoO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMubnVtQWN0aXZlQWN0aW9ucykge1xuICAgICAgICAgICAgc3VwZXIuc3RhcnQoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qXG4gICAgICAgIFJlbW92ZSBhY3RpdmUgYWN0aW9uc1xuXG4gICAgICAgIEBwYXJhbSBbbnVtYmVyXVxuICAgICovXG4gICAgZGVhY3RpdmF0ZUFjdGlvbihpZCkge1xuICAgICAgICBjb25zdCBhY3Rpb24gPSB0aGlzLmFjdGl2ZUFjdGlvbnNbaWRdO1xuXG4gICAgICAgIGlmIChhY3Rpb24pIHtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYWN0aW9uLm51bVZhbHVlS2V5czsgaSsrKSB7XG4gICAgICAgICAgICAgICAgY29uc3Qga2V5ID0gYWN0aW9uLnZhbHVlS2V5c1tpXTtcbiAgICAgICAgICAgICAgICBjb25zdCB2YWx1ZSA9IHRoaXMudmFsdWVzW2tleV07XG4gICAgICAgICAgICAgICAgY29uc3QgZHJpdmVySW5kZXggPSB2YWx1ZS5kcml2ZXJzLmluZGV4T2YoaWQpO1xuXG4gICAgICAgICAgICAgICAgaWYgKGRyaXZlckluZGV4ICE9PSAtMSkge1xuICAgICAgICAgICAgICAgICAgICB2YWx1ZS5kcml2ZXJzLnNwbGljZShkcml2ZXJJbmRleCwgMSk7XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlLm51bURyaXZlcnMtLTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGRlbGV0ZSB0aGlzLmFjdGl2ZUFjdGlvbnNbaWRdO1xuICAgICAgICAgICAgdGhpcy5udW1BY3RpdmVBY3Rpb25zLS07XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIXRoaXMubnVtQWN0aXZlQWN0aW9ucyAmJiB0aGlzLmlzQWN0aXZlKSB7XG4gICAgICAgICAgICBzdXBlci5zdG9wKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBnZXREZWZhdWx0VmFsdWUoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAuLi5zdXBlci5nZXREZWZhdWx0VmFsdWUoKSxcbiAgICAgICAgICAgIGRyaXZlcnM6IFtdLFxuICAgICAgICAgICAgbnVtRHJpdmVyczogMFxuICAgICAgICB9O1xuICAgIH1cbn0iXX0=

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	exports.__esModule = true;
	
	var _Action2 = __webpack_require__(4);
	
	var _Action3 = _interopRequireDefault(_Action2);
	
	var _presetEasing = __webpack_require__(18);
	
	var _presetEasing2 = _interopRequireDefault(_presetEasing);
	
	var _utils = __webpack_require__(2);
	
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
	            from: 0,
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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hY3Rpb25zL1R3ZWVuLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBVUEsSUFBTSxLQUFLLEdBQUcsT0FBTyxDQUFDO0FBQ3RCLElBQU0sVUFBVSxHQUFHO0FBQ2YsUUFBSSxFQUFFLFNBQVM7QUFDZixRQUFJLEVBQUUsU0FBUztBQUNmLFFBQUksRUFBRSxZQUFZO0NBQ3JCLENBQUM7O0lBRW1CLEtBQUs7Y0FBTCxLQUFLOzthQUFMLEtBQUs7OEJBQUwsS0FBSzs7Ozs7QUFBTCxTQUFLLFdBQ3RCLEtBQUssb0JBQUc7QUFDSiwwQkFBTSxLQUFLLEtBQUEsTUFBRSxDQUFDO0FBQ2QsWUFBSSxDQUFDLE9BQU8sR0FBRyxDQUFDLENBQUM7QUFDakIsWUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDOztBQUVyRCxlQUFPLElBQUksQ0FBQztLQUNmOztBQVBnQixTQUFLLFdBU3RCLFFBQVEscUJBQUMsS0FBSyxFQUFFLFVBQVUsRUFBRSxPQUFPLEVBQUU7QUFDakMsWUFBTSxjQUFjLEdBQUcsQUFBQyxJQUFJLENBQUMsYUFBYSxLQUFLLENBQUMsR0FBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDOztBQUUxRCxZQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQztBQUNsQixZQUFJLENBQUMsT0FBTyxJQUFJLEFBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxNQUFNLEdBQUksSUFBSSxDQUFDLGFBQWEsQ0FBQzs7QUFFN0QsYUFBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQyxFQUFFLEVBQUU7QUFDeEMsZ0JBQU0sR0FBRyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDOUIsZ0JBQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsR0FB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cnJ5L1NpdGVzL3BvcG1vdGlvbiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBBY3Rpb24gZnJvbSAnLi9BY3Rpb24nO1xuaW1wb3J0IGVhc2luZyBmcm9tICcuL2Vhc2luZy9wcmVzZXQtZWFzaW5nJztcbmltcG9ydCB7IGN1cnJlbnRUaW1lLCBpc051bSB9IGZyb20gJy4uL2luYy91dGlscyc7XG5pbXBvcnQge1xuICAgIGVhc2UsXG4gICAgcmVzdHJpY3QsXG4gICAgZ2V0UHJvZ3Jlc3NGcm9tVmFsdWUsXG4gICAgc3RlcFByb2dyZXNzXG59IGZyb20gJy4uL2luYy9jYWxjJztcblxuY29uc3QgQ09VTlQgPSAnQ291bnQnO1xuY29uc3QgTkVYVF9TVEVQUyA9IHtcbiAgICBsb29wOiAncmVzdGFydCcsXG4gICAgeW95bzogJ3JldmVyc2UnLFxuICAgIGZsaXA6ICdmbGlwVmFsdWVzJ1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVHdlZW4gZXh0ZW5kcyBBY3Rpb24ge1xuICAgIHN0YXJ0KCkge1xuICAgICAgICBzdXBlci5zdGFydCgpO1xuICAgICAgICB0aGlzLmVsYXBzZWQgPSAwO1xuICAgICAgICB0aGlzLmZsaXBDb3VudCA9IHRoaXMueW95b0NvdW50ID0gdGhpcy5sb29wQ291bnQgPSAwO1xuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIG9uVXBkYXRlKHR3ZWVuLCBmcmFtZVN0YW1wLCBlbGFwc2VkKSB7XG4gICAgICAgIGNvbnN0IHByb2dyZXNzVGFyZ2V0ID0gKHRoaXMucGxheURpcmVjdGlvbiA9PT0gMSkgPyAxIDogMDtcblxuICAgICAgICB0aGlzLmVuZGVkID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5lbGFwc2VkICs9IChlbGFwc2VkICogdGhpcy5kaWxhdGUpICogdGhpcy5wbGF5RGlyZWN0aW9uO1xuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5udW1WYWx1ZUtleXM7IGkrKykge1xuICAgICAgICAgICAgY29uc3Qga2V5ID0gdGhpcy52YWx1ZUtleXNbaV07XG4gICAgICAgICAgICBjb25zdCB2YWx1ZSA9IHRoaXMudmFsdWVzW2tleV07XG5cbiAgICAgICAgICAgIGxldCBwcm9ncmVzcyA9IHJlc3RyaWN0KGdldFByb2dyZXNzRnJvbVZhbHVlKHRoaXMuZWxhcHNlZCAtIHZhbHVlLmRlbGF5LCAwLCB2YWx1ZS5kdXJhdGlvbiksIDAsIDEpO1xuXG4gICAgICAgICAgICAvLyBNYXJrIFR3ZWVuIGFzIE5PVCBlbmRlZCBpZiBzdGlsbCBpbiBwcm9ncmVzc1xuICAgICAgICAgICAgaWYgKHByb2dyZXNzICE9PSBwcm9ncmVzc1RhcmdldCkge1xuICAgICAgICAgICAgICAgIHRoaXMuZW5kZWQgPSBmYWxzZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gU3RlcCBwcm9ncmVzcyBpZiB3ZSdyZSBzdGVwcGluZ1xuICAgICAgICAgICAgaWYgKHZhbHVlLnN0ZXBzKSB7XG4gICAgICAgICAgICAgICAgcHJvZ3Jlc3MgPSBzdGVwUHJvZ3Jlc3MocHJvZ3Jlc3MsIHZhbHVlLnN0ZXBzKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gRWFzZSBwcm9ncmVzc1xuICAgICAgICAgICAgdmFsdWUuY3VycmVudCA9IGVhc2UocHJvZ3Jlc3MsIHZhbHVlLmZyb20sIHZhbHVlLnRvLCB2YWx1ZS5lYXNlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG9uRnJhbWVFbmQoKSB7XG4gICAgICAgIGlmICh0aGlzLmVuZGVkKSB7XG4gICAgICAgICAgICBsZXQgc3RlcFRha2VuID0gZmFsc2U7XG5cbiAgICAgICAgICAgIGZvciAobGV0IGtleSBpbiBORVhUX1NURVBTKSB7XG4gICAgICAgICAgICAgICAgaWYgKE5FWFRfU1RFUFMuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBtYXhTdGVwcyA9IHRoaXNba2V5XTtcblxuICAgICAgICAgICAgICAgICAgICBpZiAobWF4U3RlcHMgPT09IHRydWUgfHwgKGlzTnVtKG1heFN0ZXBzKSAmJiBtYXhTdGVwcyA+IHRoaXNba2V5ICsgQ09VTlRdKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpc1trZXkgKyBDT1VOVF0rKztcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0ZXBUYWtlbiA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzW05FWFRfU1RFUFNba2V5XV0oKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKCFzdGVwVGFrZW4pIHtcbiAgICAgICAgICAgICAgICB0aGlzLnN0b3AoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZsaXBWYWx1ZXMoKSB7XG4gICAgICAgIGNvbnN0IHZhbHVlcyA9IHRoaXMudmFsdWVzO1xuXG4gICAgICAgIHRoaXMuZWxhcHNlZCA9IHRoaXMuZHVyYXRpb24gLSB0aGlzLmVsYXBzZWQ7XG5cbiAgICAgICAgZm9yIChsZXQga2V5IGluIHZhbHVlcykge1xuICAgICAgICAgICAgaWYgKHZhbHVlcy5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgdmFsdWUgPSB2YWx1ZXNba2V5XTtcbiAgICAgICAgICAgICAgICBbdmFsdWUudG8sIHZhbHVlLmZyb21dID0gW3ZhbHVlLmZyb20sIHZhbHVlLnRvXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIHJldmVyc2UoKSB7XG4gICAgICAgIHRoaXMucGxheURpcmVjdGlvbiAqPSAtMTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgcmVzdGFydCgpIHtcbiAgICAgICAgdGhpcy5lbGFwc2VkID0gKHRoaXMucGxheURpcmVjdGlvbiA9PT0gMSkgPyAwIDogdGhpcy5kdXJhdGlvbjtcbiAgICAgICAgdGhpcy5zdGFydGVkID0gY3VycmVudFRpbWUoKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgc2Vlayhwcm9ncmVzcykge1xuICAgICAgICB0aGlzLnNlZWtUaW1lKHRoaXMuZHVyYXRpb24gKiBwcm9ncmVzcyk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIHNlZWtUaW1lKGVsYXBzZWQpIHtcbiAgICAgICAgdGhpcy5vbmNlKCk7XG4gICAgICAgIHRoaXMuZWxhcHNlZCA9IGVsYXBzZWQ7XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIFxuICAgIGdldERlZmF1bHRQcm9wcygpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIC4uLnN1cGVyLmdldERlZmF1bHRQcm9wcygpLFxuICAgICAgICAgICAgYmxlbmQ6IHRydWUsXG4gICAgICAgICAgICBkZWxheTogMCxcbiAgICAgICAgICAgIGRpbGF0ZTogMSxcbiAgICAgICAgICAgIGR1cmF0aW9uOiAzMDAsXG4gICAgICAgICAgICBsb29wOiBmYWxzZSxcbiAgICAgICAgICAgIHlveW86IGZhbHNlLFxuICAgICAgICAgICAgZmxpcDogZmFsc2UsXG4gICAgICAgICAgICBwbGF5RGlyZWN0aW9uOiAxLFxuICAgICAgICAgICAgZW5kZWQ6IGZhbHNlLFxuICAgICAgICAgICAgZWxhcHNlZDogMFxuICAgICAgICB9O1xuICAgIH1cblxuICAgIGdldERlZmF1bHRWYWx1ZSgpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIC4uLnN1cGVyLmdldERlZmF1bHRWYWx1ZSgpLFxuICAgICAgICAgICAgZGVsYXk6IDAsXG4gICAgICAgICAgICBkdXJhdGlvbjogMzAwLFxuICAgICAgICAgICAgZWFzZTogZWFzaW5nLmVhc2VPdXQsXG4gICAgICAgICAgICBlbGFwc2VkOiAwLFxuICAgICAgICAgICAgc3RhZ2dlcjogMCxcbiAgICAgICAgICAgIHN0ZXBzOiAwLFxuICAgICAgICAgICAgZnJvbTogMCxcbiAgICAgICAgICAgIHRvOiAwLFxuICAgICAgICAgICAgcm91bmQ6IGZhbHNlXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgZ2V0RGVmYXVsdFZhbHVlUHJvcCgpIHtcbiAgICAgICAgcmV0dXJuICd0byc7XG4gICAgfVxufVxuIl19

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	exports.__esModule = true;
	
	var _Action2 = __webpack_require__(4);
	
	var _Action3 = _interopRequireDefault(_Action2);
	
	var _calc = __webpack_require__(19);
	
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
	
	var _Action2 = __webpack_require__(4);
	
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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hY3Rpb25zL1RyYWNrLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVVBLElBQU0saUJBQWlCLEdBQUcsVUFBQyxDQUFDO1dBQU07QUFDOUIsU0FBQyxFQUFFLENBQUMsQ0FBQyxLQUFLO0FBQ1YsU0FBQyxFQUFFLENBQUMsQ0FBQyxLQUFLO0tBQ2I7Q0FBQyxDQUFDOztBQUVILElBQU0saUJBQWlCLEdBQUc7UUFBRyxjQUFjLFFBQWQsY0FBYztXQUFRO0FBQy9DLFNBQUMsRUFBRSxjQUFjLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTztBQUM1QixTQUFDLEVBQUUsY0FBYyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU87S0FDL0I7Q0FBQyxDQUFDOztBQUVILElBQU0sYUFBYSxHQUFHLFVBQUMsQ0FBQztXQUFLLENBQUMsQ0FBQyxPQUFPLEdBQ2xDLHNCQUFZLGlCQUFpQixDQUFDLENBQUMsQ0FBQyxFQUFFLFdBQVcsRUFBRSxpQkFBaUIsQ0FBQyxHQUNqRSxzQkFBWSxpQkFBaUIsQ0FBQyxDQUFDLENBQUMsRUFBRSxXQUFXLEVBQUUsaUJBQWlCLENBQUM7Q0FBQSxDQUFDOztBQUV0RSxJQUFNLGNBQWMsR0FBRyxVQUFDLENBQUM7V0FBSyxDQUFDLENBQUMsYUFBYSxJQUFJLENBQUM7Q0FBQSxDQUFDOztJQUU5QixLQUFLO2NBQUwsS0FBSzs7YUFBTCxLQUFLOzhCQUFMLEtBQUs7Ozs7O0FBQUwsU0FBSyxXQUN0QixLQUFLLGtCQUFDLEtBQUssRUFBRTtBQUNULDBCQUFNLEtBQUssS0FBQSxNQUFFLENBQUM7O0FBRWQsWUFBSSxLQUFLLEVBQUU7QUFDUCxnQkFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUMsS0FBSyxHQUFHLEtBQUssR0FBRyxhQUFhLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7U0FDM0U7O0FBRUQsWUFBSSxDQUFDLFdBQVcsR0FBRyxFQUFFLENBQUM7QUFDdEIsWUFBSSxDQUFDLFdBQVcsZ0JBQVEsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUUsQ0FBQztBQUMzQyxZQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssRUFBRSxDQUFDO0tBQ3RCOztBQVhnQixTQUFLLFdBYXRCLElBQUksbUJBQUc7QUFDSCwwQkFBTSxJQUFJLEtBQUEsTUFBRSxDQUFDO0FBQ2IsWUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBQztLQUNyQjs7QUFoQmdCLFNBQUssV0FrQnRCLFFBQVEscUJBQUMsS0FBSyxFQUFFLFVBQVUsRUFBRSxPQUFPLEVBQUU7QUFDakMsWUFBSSxDQUFDLFdBQVcsR0FBRyxVQTNDVixNQUFNLEVBMkNXLElBQUksQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQzs7QUFFOUQsYUFBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQyxFQUFFLEVBQUU7QUFDeEMsZ0JBQU0sR0FBRyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUM7O0FBRTlCLGdCQUFJLElBQUksQ0FBQyxXQUFXLENBQUMsY0FBYyxDQUFDLEdBQUcsQ0FBQyxFQUFFO0FBQ3RDLG9CQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0FBQy9CLG9CQUFJLEtBQUssQ0FBQyxNQUFNLEVBQUU7QUFDZCx5QkFBSyxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztpQkFDekMsTUFBTTtBQUNILHlCQUFLLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsQ0FBQztpQkFDeEQ7OztBQUFBLEFBR0Qsb0JBQUksS0FBSyxDQUFDLE1BQU0sRUFBRTtBQUNkLHlCQUFLLENBQUMsT0FBTyxHQUFHLFVBMUQzQixNQUFNLEVBMEQ0QixLQUFLLENBQUMsT0FBTyxFQUFFLEtBQUssQ0FBQyxJQUFJLEVBQUUsT0FBTyxFQUFFLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQztpQkFDNUU7YUFDSjtTQUNKO0tBQ0o7O0FBdENnQixTQUFLLFdBd0N0QixlQUFlLDhCQUFHO0FBQ2QsNEJBQ08sa0JBQU0sZUFBZSxLQUFBLE1BQUU7QUFDMUIsZUFBRyxFQUFFLENBQUM7QUFDTixxQkFBUyxFQUFFLENBQUM7QUFDWixrQkFBTSxFQUFFLEtBQUs7V0FDZjtLQUNMOztXQS9DZ0IsS0FBSzs7O2tCQUFMLEtBQUsiLCJmaWxlIjoiVHJhY2suanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL01hdHRQZXJyeS9TaXRlcy9wb3Btb3Rpb24iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQWN0aW9uIGZyb20gJy4vQWN0aW9uJztcbmltcG9ydCBQb2ludGVyIGZyb20gJy4uL2lucHV0L1BvaW50ZXInO1xuaW1wb3J0IHsgc21vb3RoLCBvZmZzZXQgfSBmcm9tICcuLi9pbmMvY2FsYyc7XG5cbi8qXG4gICAgU2NyYXBlIHgveSBjb29yZGluYXRlcyBmcm9tIHByb3ZpZGVkIGV2ZW50XG5cbiAgICBAcGFyYW0gW2V2ZW50XVxuICAgIEByZXR1cm4gW29iamVjdF1cbiovXG5jb25zdCBtb3VzZUV2ZW50VG9Qb2ludCA9IChlKSA9PiAoe1xuICAgIHg6IGUucGFnZVgsXG4gICAgeTogZS5wYWdlWVxufSk7XG5cbmNvbnN0IHRvdWNoRXZlbnRUb1BvaW50ID0gKHsgY2hhbmdlZFRvdWNoZXMgfSkgPT4gKHtcbiAgICB4OiBjaGFuZ2VkVG91Y2hlc1swXS5jbGllbnRYLFxuICAgIHk6IGNoYW5nZWRUb3VjaGVzWzBdLmNsaWVudFlcbn0pO1xuXG5jb25zdCBjcmVhdGVQb2ludGVyID0gKGUpID0+IGUudG91Y2hlcyA/XG4gICAgbmV3IFBvaW50ZXIodG91Y2hFdmVudFRvUG9pbnQoZSksICd0b3VjaG1vdmUnLCB0b3VjaEV2ZW50VG9Qb2ludCkgOiBcbiAgICBuZXcgUG9pbnRlcihtb3VzZUV2ZW50VG9Qb2ludChlKSwgJ21vdXNlbW92ZScsIG1vdXNlRXZlbnRUb1BvaW50KTtcblxuY29uc3QgZ2V0QWN0dWFsRXZlbnQgPSAoZSkgPT4gZS5vcmlnaW5hbEV2ZW50IHx8IGU7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRyYWNrIGV4dGVuZHMgQWN0aW9uIHtcbiAgICBzdGFydChpbnB1dCkge1xuICAgICAgICBzdXBlci5zdGFydCgpO1xuXG4gICAgICAgIGlmIChpbnB1dCkge1xuICAgICAgICAgICAgdGhpcy5pbnB1dCA9IGlucHV0LnN0YXRlID8gaW5wdXQgOiBjcmVhdGVQb2ludGVyKGdldEFjdHVhbEV2ZW50KGlucHV0KSk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmlucHV0T2Zmc2V0ID0ge307XG4gICAgICAgIHRoaXMuaW5wdXRPcmlnaW4gPSB7IC4uLnRoaXMuaW5wdXQuc3RhdGUgfTtcbiAgICAgICAgdGhpcy5pbnB1dC5zdGFydCgpO1xuICAgIH1cblxuICAgIHN0b3AoKSB7XG4gICAgICAgIHN1cGVyLnN0b3AoKTtcbiAgICAgICAgdGhpcy5pbnB1dC5zdG9wKCk7XG4gICAgfVxuXG4gICAgb25VcGRhdGUodHJhY2ssIGZyYW1lU3RhbXAsIGVsYXBzZWQpIHtcbiAgICAgICAgdGhpcy5pbnB1dE9mZnNldCA9IG9mZnNldCh0aGlzLmlucHV0T3JpZ2luLCB0aGlzLmlucHV0LnN0YXRlKTtcblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubnVtVmFsdWVLZXlzOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IGtleSA9IHRoaXMudmFsdWVLZXlzW2ldO1xuXG4gICAgICAgICAgICBpZiAodGhpcy5pbnB1dE9mZnNldC5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgdmFsdWUgPSB0aGlzLnZhbHVlc1trZXldO1xuICAgICAgICAgICAgICAgIGlmICh2YWx1ZS5kaXJlY3QpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFsdWUuY3VycmVudCA9IHRoaXMuaW5wdXQuc3RhdGVba2V5XTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB2YWx1ZS5jdXJyZW50ID0gdmFsdWUub3JpZ2luICsgdGhpcy5pbnB1dE9mZnNldFtrZXldO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC8vIFNtb290aCB2YWx1ZSBpZiB3ZSBoYXZlIHNtb290aGluZ1xuICAgICAgICAgICAgICAgIGlmICh2YWx1ZS5zbW9vdGgpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFsdWUuY3VycmVudCA9IHNtb290aCh2YWx1ZS5jdXJyZW50LCB2YWx1ZS5wcmV2LCBlbGFwc2VkLCB2YWx1ZS5zbW9vdGgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGdldERlZmF1bHRWYWx1ZSgpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIC4uLnN1cGVyLmdldERlZmF1bHRWYWx1ZSgpLFxuICAgICAgICAgICAgYW1wOiAxLFxuICAgICAgICAgICAgZXNjYXBlQW1wOiAwLFxuICAgICAgICAgICAgZGlyZWN0OiBmYWxzZVxuICAgICAgICB9O1xuICAgIH1cbn1cbiJdfQ==

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _loop = __webpack_require__(36);
	
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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9wcm9jZXNzL1Byb2Nlc3MuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0lBQVksSUFBSTs7Ozs7Ozs7SUFFSyxPQUFPOzs7OztBQUl4QixhQUppQixPQUFPLENBSVosS0FBSyxFQUFFOzs7OEJBSkYsT0FBTzs7QUFLcEIsWUFBSSxDQUFDLEVBQUUsR0FBRyxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7O0FBRTlCLFlBQUksQ0FBQyxVQUFVLEdBQUcsWUFBTTtBQUNwQixrQkFBSyxJQUFJLEVBQUUsQ0FBQztBQUNaLGtCQUFLLFNBQVMsR0FBRyxTQUFTLENBQUM7U0FDOUIsQ0FBQzs7QUFFRixZQUFJLENBQUMsV0FBVyxHQUFHO21CQUFNLE1BQUssU0FBUyxHQUFHLE1BQUssVUFBVTtTQUFBLENBQUM7O0FBRTFELFlBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDLENBQUM7QUFDakMsWUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQzs7QUFFaEIsWUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7S0FDekI7O0FBbEJnQixXQUFPLFdBb0J4QixHQUFHLGdCQUFDLEtBQUssRUFBRTtBQUNQLGFBQUssSUFBSSxHQUFHLElBQUksS0FBSyxFQUFFO0FBQ25CLGdCQUFJLEtBQUssQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDLEVBQUU7QUFDM0Isb0JBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7YUFDMUI7U0FDSjs7QUFFRCxlQUFPLElBQUksQ0FBQztLQUNmOztBQTVCZ0IsV0FBTyxXQThCeEIsS0FBSyxvQkFBRztBQUNKLFlBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEVBQUUsRUFBRSxJQUFJLENBQUMsQ0FBQzs7QUFFN0IsWUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsVUFBVSxHQUFHLFNBQVM7OztBQUFDLEFBRzdDLFlBQUksSUFBSSxDQUFDLFFBQVEsRUFBRTtBQUNmLGdCQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQ3ZCOzs7QUFBQSxBQUdELFlBQUksSUFBSSxDQUFDLE9BQU8sRUFBRTtBQUNkLGdCQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQ3RCOztBQUVELGVBQU8sSUFBSSxDQUFDO0tBQ2Y7O0FBOUNnQixXQUFPLFdBZ0R4QixJQUFJLG1CQUFHO0FBQ0gsWUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDOzs7QUFBQyxBQUd6QixZQUFJLElBQUksQ0FBQyxPQUFPLEVBQUU7QUFDZCxnQkFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUN0Qjs7O0FBQUEsQUFHRCxZQUFJLElBQUksQ0FBQyxNQUFNLEVBQUU7QUFDYixnQkFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUNyQjs7QUFFRCxlQUFPLElBQUksQ0FBQztLQUNmOztBQTlEZ0IsV0FBTyxXQWdFeEIsSUFBSSxtQkFBRztBQUNILFlBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztBQUNiLFlBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQztBQUNuQyxlQUFPLElBQUksQ0FBQztLQUNmOzs7Ozs7O0FBcEVnQixXQUFPLFdBMkV4QixlQUFlLDhCQUFHO0FBQ2QsZUFBTyxFQUFFLENBQUM7S0FDYjs7Ozs7Ozs7O0FBN0VnQixXQUFPLFdBc0Z4QixPQUFPLG9CQUFDLEtBQUssRUFBRTtZQUNILEVBQUUsR0FBd0IsSUFBSSxDQUE5QixFQUFFOztZQUFLLGNBQWMsNEJBQUssSUFBSTs7QUFDdEMsWUFBTSxVQUFVLEdBQUcsSUFBSSxJQUFJLENBQUMsV0FBVyxDQUFDLGNBQWMsQ0FBQyxDQUFDO0FBQ3hELGVBQU8sVUFBVSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztLQUNoQzs7V0ExRmdCLE9BQU87OztrQkFBUCxPQUFPIiwiZmlsZSI6IlByb2Nlc3MuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL01hdHRQZXJyeS9TaXRlcy9wb3Btb3Rpb24iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBsb29wIGZyb20gJy4vbG9vcCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFByb2Nlc3Mge1xuICAgIC8qXG4gICAgICAgIFtvYmplY3RdOiBQcm9wZXJ0aWVzXG4gICAgKi9cbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICB0aGlzLmlkID0gbG9vcC5nZXRQcm9jZXNzSWQoKTtcblxuICAgICAgICB0aGlzLl9vbkNsZWFudXAgPSAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnN0b3AoKTtcbiAgICAgICAgICAgIHRoaXMub25DbGVhbnVwID0gdW5kZWZpbmVkO1xuICAgICAgICB9O1xuXG4gICAgICAgIHRoaXMuX29uQWN0aXZhdGUgPSAoKSA9PiB0aGlzLm9uQ2xlYW51cCA9IHRoaXMuX29uQ2xlYW51cDtcblxuICAgICAgICB0aGlzLnNldCh0aGlzLmdldERlZmF1bHRQcm9wcygpKTtcbiAgICAgICAgdGhpcy5zZXQocHJvcHMpO1xuXG4gICAgICAgIHRoaXMuaXNBY3RpdmUgPSBmYWxzZTtcbiAgICB9XG5cbiAgICBzZXQocHJvcHMpIHtcbiAgICAgICAgZm9yIChsZXQga2V5IGluIHByb3BzKSB7XG4gICAgICAgICAgICBpZiAocHJvcHMuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgICAgICAgIHRoaXNba2V5XSA9IHByb3BzW2tleV07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBzdGFydCgpIHtcbiAgICAgICAgbG9vcC5hY3RpdmF0ZSh0aGlzLmlkLCB0aGlzKTtcblxuICAgICAgICB0aGlzLm9uQ2xlYW51cCA9IHRoaXMub25BY3RpdmF0ZSA9IHVuZGVmaW5lZDtcblxuICAgICAgICAvLyBQcml2YXRlIGBvblN0YXJ0YFxuICAgICAgICBpZiAodGhpcy5fb25TdGFydCkge1xuICAgICAgICAgICAgdGhpcy5fb25TdGFydCh0aGlzKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFB1YmxpYyBgb25TdGFydGBcbiAgICAgICAgaWYgKHRoaXMub25TdGFydCkge1xuICAgICAgICAgICAgdGhpcy5vblN0YXJ0KHRoaXMpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgc3RvcCgpIHtcbiAgICAgICAgbG9vcC5kZWFjdGl2YXRlKHRoaXMuaWQpO1xuXG4gICAgICAgIC8vIFByaXZhdGUgYG9uU3RvcGBcbiAgICAgICAgaWYgKHRoaXMuX29uU3RvcCkge1xuICAgICAgICAgICAgdGhpcy5fb25TdG9wKHRoaXMpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gUHVibGljIGBvblN0b3BgXG4gICAgICAgIGlmICh0aGlzLm9uU3RvcCkge1xuICAgICAgICAgICAgdGhpcy5vblN0b3AodGhpcyk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBvbmNlKCkge1xuICAgICAgICB0aGlzLnN0YXJ0KCk7XG4gICAgICAgIHRoaXMub25BY3RpdmF0ZSA9IHRoaXMuX29uQWN0aXZhdGU7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIC8qXG4gICAgICAgICMgR2V0IGRlZmF1bHQgQWN0aW9uIHByb3BlcnRpZXNcblxuICAgICAgICBAcmV0dXJuIFtvYmplY3RdXG4gICAgKi9cbiAgICBnZXREZWZhdWx0UHJvcHMoKSB7XG4gICAgICAgIHJldHVybiB7fTtcbiAgICB9XG5cbiAgICAvKlxuICAgICAgICAjIEV4dGVuZCB0aGlzIFByb2Nlc3Mgd2l0aCBuZXcgcHJvcGVydGllc1xuICAgICAgICAjIyBSZXR1cm5zIG5ldyBpbnN0YW5jZSBvZiB0aGlzIFByb2Nlc3MncyBgcHJvdG90eXBlYCB3aXRoIGV4aXN0aW5nIGFuZCBuZXcgcHJvcGVydGllc1xuXG4gICAgICAgIEBwYXJhbSBbb2JqZWN0XSAob3B0aW9uYWwpXG4gICAgICAgIEByZXR1cm4gW1Byb2Nlc3NdXG4gICAgKi9cbiAgICBpbmhlcml0KHByb3BzKSB7XG4gICAgICAgIGNvbnN0IHsgaWQsIC4uLmluaGVyaXRlZFByb3BzIH0gPSB0aGlzO1xuICAgICAgICBjb25zdCBuZXdQcm9jZXNzID0gbmV3IHRoaXMuY29uc3RydWN0b3IoaW5oZXJpdGVkUHJvcHMpO1xuICAgICAgICByZXR1cm4gbmV3UHJvY2Vzcy5zZXQocHJvcHMpO1xuICAgIH1cbn0iXX0=

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
	
	var _presetEasing = __webpack_require__(18);
	
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
	
	var _presetEasing = __webpack_require__(18);
	
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
	    (0, _attrAdapter.setter)((0, _build2.default)(props, this.origin));
	}
	
	exports.default = function (element) {
	    var svgAdapter = (0, _adapter2.default)(element);
	    svgAdapter.stateMap = _stateMap2.default;
	    svgAdapter.valueTypeMap = _valueTypeMap2.default;
	    svgAdapter.getter = _attrAdapter.getter;
	    svgAdapter.setter = setter;
	
	    var bBox = element.getBBox();
	    var transformOriginY = 0;
	    var transformOriginX = 0;
	
	    svgAdapter.origin = {
	        x: bBox.width * (transformOriginX / 100) + bBox.x,
	        y: bBox.height * (transformOriginY / 100) + bBox.y
	    };
	
	    return svgAdapter;
	};
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hZGFwdGVyL3N2Zy1hZGFwdGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztRQU1nQixNQUFNLEdBQU4sTUFBTTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFmLFNBQVMsTUFBTSxDQUFDLEtBQUssRUFBRTtBQUMxQixxQkFKYSxNQUFNLEVBSVIscUJBQU0sS0FBSyxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO0NBQ3pDOztrQkFFYyxVQUFDLE9BQU8sRUFBSztBQUN4QixRQUFNLFVBQVUsR0FBRyx1QkFBUSxPQUFPLENBQUMsQ0FBQztBQUNwQyxjQUFVLENBQUMsUUFBUSxxQkFBVyxDQUFDO0FBQy9CLGNBQVUsQ0FBQyxZQUFZLHlCQUFlLENBQUM7QUFDdkMsY0FBVSxDQUFDLE1BQU0sZ0JBWFosTUFBTSxBQVdlLENBQUM7QUFDM0IsY0FBVSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7O0FBRTNCLFFBQU0sSUFBSSxHQUFHLE9BQU8sQ0FBQyxPQUFPLEVBQUUsQ0FBQztBQUMvQixRQUFNLGdCQUFnQixHQUFHLENBQUMsQ0FBQztBQUMzQixRQUFNLGdCQUFnQixHQUFHLENBQUMsQ0FBQzs7QUFFM0IsY0FBVSxDQUFDLE1BQU0sR0FBRztBQUNoQixTQUFDLEVBQUUsSUFBSSxDQUFDLEtBQUssSUFBSSxnQkFBZ0IsR0FBRyxHQUFHLENBQUEsQUFBQyxHQUFHLElBQUksQ0FBQyxDQUFDO0FBQ2pELFNBQUMsRUFBRSxJQUFJLENBQUMsTUFBTSxJQUFJLGdCQUFnQixHQUFHLEdBQUcsQ0FBQSxBQUFDLEdBQUcsSUFBSSxDQUFDLENBQUM7S0FDckQsQ0FBQzs7QUFFRixXQUFPLFVBQVUsQ0FBQztDQUNyQiIsImZpbGUiOiJzdmctYWRhcHRlci5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvTWF0dFBlcnJ5L1NpdGVzL3BvcG1vdGlvbiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdGF0ZU1hcCBmcm9tICcuL2Nzcy9zdGF0ZS1tYXAnO1xuaW1wb3J0IHZhbHVlVHlwZU1hcCBmcm9tICcuL3N2Zy92YWx1ZS10eXBlLW1hcCc7XG5pbXBvcnQgYnVpbGQgZnJvbSAnLi9zdmcvYnVpbGQnO1xuaW1wb3J0IHsgZ2V0dGVyLCBzZXR0ZXIgYXMgYXR0clNldHRlciB9IGZyb20gJy4vYXR0ci1hZGFwdGVyJztcbmltcG9ydCBhZGFwdGVyIGZyb20gJy4vYWRhcHRlcic7XG5cbmV4cG9ydCBmdW5jdGlvbiBzZXR0ZXIocHJvcHMpIHtcbiAgICBhdHRyU2V0dGVyKGJ1aWxkKHByb3BzLCB0aGlzLm9yaWdpbikpO1xufVxuXG5leHBvcnQgZGVmYXVsdCAoZWxlbWVudCkgPT4ge1xuICAgIGNvbnN0IHN2Z0FkYXB0ZXIgPSBhZGFwdGVyKGVsZW1lbnQpO1xuICAgIHN2Z0FkYXB0ZXIuc3RhdGVNYXAgPSBzdGF0ZU1hcDtcbiAgICBzdmdBZGFwdGVyLnZhbHVlVHlwZU1hcCA9IHZhbHVlVHlwZU1hcDtcbiAgICBzdmdBZGFwdGVyLmdldHRlciA9IGdldHRlcjtcbiAgICBzdmdBZGFwdGVyLnNldHRlciA9IHNldHRlcjtcblxuICAgIGNvbnN0IGJCb3ggPSBlbGVtZW50LmdldEJCb3goKTtcbiAgICBjb25zdCB0cmFuc2Zvcm1PcmlnaW5ZID0gMDtcbiAgICBjb25zdCB0cmFuc2Zvcm1PcmlnaW5YID0gMDtcblxuICAgIHN2Z0FkYXB0ZXIub3JpZ2luID0ge1xuICAgICAgICB4OiBiQm94LndpZHRoICogKHRyYW5zZm9ybU9yaWdpblggLyAxMDApICsgYkJveC54LFxuICAgICAgICB5OiBiQm94LmhlaWdodCAqICh0cmFuc2Zvcm1PcmlnaW5ZIC8gMTAwKSArIGJCb3gueVxuICAgIH07XG5cbiAgICByZXR1cm4gc3ZnQWRhcHRlcjtcbn07XG5cbiJdfQ==

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _build = __webpack_require__(45);
	
	var _build2 = _interopRequireDefault(_build);
	
	var _stateMap = __webpack_require__(46);
	
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
/* 19 */
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
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _defaultProps = __webpack_require__(48);
	
	exports.default = {
	    defaultProps: _defaultProps.opacity
	};
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy92YWx1ZS10eXBlcy9hbHBoYS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7a0JBRWU7QUFDWCxnQkFBWSxnQkFIUCxPQUFPLEFBR1M7Q0FDeEIiLCJmaWxlIjoiYWxwaGEuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL01hdHRQZXJyeS9TaXRlcy9wb3Btb3Rpb24iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBvcGFjaXR5IH0gZnJvbSAnLi9zZXR0aW5ncy9kZWZhdWx0LXByb3BzJztcblxuZXhwb3J0IGRlZmF1bHQge1xuICAgIGRlZmF1bHRQcm9wczogb3BhY2l0eVxufTsiXX0=

/***/ },
/* 21 */
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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy92YWx1ZS10eXBlcy9hbmdsZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O2tCQUVlO0FBQ1gsZ0JBQVksRUFBRTtBQUNWLFlBQUksRUFBRSxLQUFLO0FBQ1gsWUFBSSxnQkFBVTtLQUNqQjtDQUNKIiwiZmlsZSI6ImFuZ2xlLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9NYXR0UGVycnkvU2l0ZXMvcG9wbW90aW9uIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHVuaXRUeXBlIGZyb20gJy4vdW5pdCc7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBkZWZhdWx0UHJvcHM6IHtcbiAgICAgICAgdW5pdDogJ2RlZycsXG4gICAgICAgIHR5cGU6IHVuaXRUeXBlXG4gICAgfVxufTsiXX0=

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _utils = __webpack_require__(2);
	
	var _px = __webpack_require__(28);
	
	var _px2 = _interopRequireDefault(_px);
	
	var _dictionary = __webpack_require__(47);
	
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
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	exports.__esModule = true;
	
	var _rgb = __webpack_require__(29);
	
	var _rgb2 = _interopRequireDefault(_rgb);
	
	var _hsl = __webpack_require__(26);
	
	var _hsl2 = _interopRequireDefault(_hsl);
	
	var _hex = __webpack_require__(25);
	
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
/* 24 */
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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy92YWx1ZS10eXBlcy9jb21wbGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUVBLElBQU0sV0FBVyxHQUFHLGtCQUFrQixDQUFDO0FBQ3ZDLElBQU0sYUFBYSxHQUFHLFVBQUMsS0FBSztXQUFLLElBQUksR0FBRyxLQUFLLEdBQUcsR0FBRztDQUFBLENBQUM7O2tCQUVyQzs7QUFFWCxRQUFJLEVBQUUsVUFBQyxLQUFLLEVBQUs7QUFDYixZQUFNLE9BQU8sR0FBRyxLQUFLLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxDQUFDO0FBQ3pDLGVBQVEsV0FUUCxPQUFPLEVBU1EsT0FBTyxDQUFDLElBQUksT0FBTyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUU7S0FDbkQ7O0FBRUQsWUFBUSxFQUFFLFVBQUMsS0FBSyxFQUFLO0FBQ2pCLFlBQUksT0FBTyxHQUFHLENBQUMsQ0FBQztBQUNoQixlQUFPLEtBQUssQ0FBQyxPQUFPLENBQUMsV0FBVyxFQUFFO21CQUFNLGFBQWEsQ0FBQyxPQUFPLEVBQUUsQ0FBQztTQUFBLENBQUMsQ0FBQztLQUNyRTs7QUFFRCxTQUFLLEVBQUUsVUFBQyxLQUFLLEVBQUs7QUFDZCxZQUFNLFVBQVUsR0FBRyxFQUFFLENBQUM7O0FBRXRCLGFBQUssQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLENBQUMsT0FBTyxDQUFDLFVBQUMsS0FBSyxFQUFFLENBQUM7bUJBQUssVUFBVSxDQUFDLENBQUMsQ0FBQyxHQUFHLEtBQUs7U0FBQSxDQUFDLENBQUM7O0FBRXRFLGVBQU8sVUFBVSxDQUFDO0tBQ3JCOztBQUVELFdBQU8sRUFBRSxVQUFDLE1BQU0sRUFBRSxRQUFRLEVBQUs7QUFDM0IsYUFBSyxJQUFJLEdBQUcsSUFBSSxNQUFNLEVBQUU7QUFDcEIsZ0JBQUksTUFBTSxDQUFDLGNBQWMsQ0FBQyxHQUFHLENBQUMsRUFBRTtBQUM1Qix3QkFBUSxHQUFHLFFBQVEsQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxFQUFFLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO2FBQ2hFO1NBQ0o7O0FBRUQsZUFBTyxRQUFRLENBQUM7S0FDbkI7O0NBRUoiLCJmaWxlIjoiY29tcGxleC5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvTWF0dFBlcnJ5L1NpdGVzL3BvcG1vdGlvbiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGlzQXJyYXkgfSBmcm9tICcuLi9pbmMvdXRpbHMnO1xuXG5jb25zdCBGTE9BVF9SRUdFWCA9IC8oLSk/KFxcZFtcXGRcXC5dKikvZztcbmNvbnN0IGdlbmVyYXRlVG9rZW4gPSAodG9rZW4pID0+ICckeycgKyB0b2tlbiArICd9JztcblxuZXhwb3J0IGRlZmF1bHQge1xuXG4gICAgdGVzdDogKHZhbHVlKSA9PiB7XG4gICAgICAgIGNvbnN0IG1hdGNoZXMgPSB2YWx1ZS5tYXRjaChGTE9BVF9SRUdFWCk7XG4gICAgICAgIHJldHVybiAoaXNBcnJheShtYXRjaGVzKSAmJiBtYXRjaGVzLmxlbmd0aCA+IDEpO1xuICAgIH0sXG5cbiAgICB0ZW1wbGF0ZTogKHZhbHVlKSA9PiB7XG4gICAgICAgIGxldCBjb3VudGVyID0gMDtcbiAgICAgICAgcmV0dXJuIHZhbHVlLnJlcGxhY2UoRkxPQVRfUkVHRVgsICgpID0+IGdlbmVyYXRlVG9rZW4oY291bnRlcisrKSk7XG4gICAgfSxcblxuICAgIHNwbGl0OiAodmFsdWUpID0+IHtcbiAgICAgICAgY29uc3Qgc3BsaXRWYWx1ZSA9IHt9O1xuICAgICAgICBcbiAgICAgICAgdmFsdWUubWF0Y2goRkxPQVRfUkVHRVgpLmZvckVhY2goKHZhbHVlLCBpKSA9PiBzcGxpdFZhbHVlW2ldID0gdmFsdWUpO1xuXG4gICAgICAgIHJldHVybiBzcGxpdFZhbHVlO1xuICAgIH0sXG5cbiAgICBjb21iaW5lOiAodmFsdWVzLCB0ZW1wbGF0ZSkgPT4ge1xuICAgICAgICBmb3IgKGxldCBrZXkgaW4gdmFsdWVzKSB7XG4gICAgICAgICAgICBpZiAodmFsdWVzLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICAgICAgICB0ZW1wbGF0ZSA9IHRlbXBsYXRlLnJlcGxhY2UoZ2VuZXJhdGVUb2tlbihrZXkpLCB2YWx1ZXNba2V5XSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGVtcGxhdGU7XG4gICAgfVxuXG59OyJdfQ==

/***/ },
/* 25 */
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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy92YWx1ZS10eXBlcy9oZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztrQkFFZTtBQUNYLGdCQUFZLEVBQUUsY0FBSSxZQUFZOztBQUU5QixRQUFJLEVBQUUsVUFBQyxLQUFLO2VBQU0sS0FBSyxJQUFJLEtBQUssQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0tBQUM7O0FBRW5ELFNBQUssRUFBRSxVQUFDLEtBQUssRUFBSztBQUNkLFlBQUksQ0FBQyxZQUFBO1lBQUUsQ0FBQyxZQUFBO1lBQUUsQ0FBQyxZQUFBOzs7QUFBQyxBQUdaLFlBQUksS0FBSyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7QUFDbEIsYUFBQyxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0FBQ3ZCLGFBQUMsR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztBQUN2QixhQUFDLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDOzs7QUFBQyxTQUcxQixNQUFNO0FBQ0gsaUJBQUMsR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztBQUN2QixpQkFBQyxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0FBQ3ZCLGlCQUFDLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7QUFDdkIsaUJBQUMsSUFBSSxDQUFDLENBQUM7QUFDUCxpQkFBQyxJQUFJLENBQUMsQ0FBQztBQUNQLGlCQUFDLElBQUksQ0FBQyxDQUFDO2FBQ1Y7O0FBRUQsZUFBTztBQUNILGVBQUcsRUFBRSxRQUFRLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQztBQUNwQixpQkFBSyxFQUFFLFFBQVEsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDO0FBQ3RCLGdCQUFJLEVBQUUsUUFBUSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUM7QUFDckIsaUJBQUssRUFBRSxDQUFDO1NBQ1gsQ0FBQztLQUNMOztBQUVELFdBQU8sRUFBRSxVQUFDLE1BQU07ZUFBSyxjQUFJLE9BQU8sQ0FBQyxNQUFNLENBQUM7S0FBQTtDQUMzQyIsImZpbGUiOiJoZXguanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL01hdHRQZXJyeS9TaXRlcy9wb3Btb3Rpb24iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgcmdiIGZyb20gJy4vcmdiJztcblxuZXhwb3J0IGRlZmF1bHQge1xuICAgIGRlZmF1bHRQcm9wczogcmdiLmRlZmF1bHRQcm9wcyxcblxuICAgIHRlc3Q6ICh2YWx1ZSkgPT4gKHZhbHVlICYmIHZhbHVlLmluZGV4T2YoJyMnKSA+IC0xKSxcblxuICAgIHNwbGl0OiAodmFsdWUpID0+IHtcbiAgICAgICAgbGV0IHIsIGcsIGI7XG5cbiAgICAgICAgLy8gSWYgd2UgaGF2ZSA2IGNoYXJhY3RlcnMsIGllICNGRjAwMDBcbiAgICAgICAgaWYgKHZhbHVlLmxlbmd0aCA+IDQpIHtcbiAgICAgICAgICAgIHIgPSB2YWx1ZS5zdWJzdHIoMSwgMik7XG4gICAgICAgICAgICBnID0gdmFsdWUuc3Vic3RyKDMsIDIpO1xuICAgICAgICAgICAgYiA9IHZhbHVlLnN1YnN0cig1LCAyKTtcblxuICAgICAgICAvLyBPciB3ZSBoYXZlIDMgY2hhcmFjdGVycywgaWUgI0YwMFxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgciA9IHZhbHVlLnN1YnN0cigxLCAxKTtcbiAgICAgICAgICAgIGcgPSB2YWx1ZS5zdWJzdHIoMiwgMSk7XG4gICAgICAgICAgICBiID0gdmFsdWUuc3Vic3RyKDMsIDEpO1xuICAgICAgICAgICAgciArPSByO1xuICAgICAgICAgICAgZyArPSBnO1xuICAgICAgICAgICAgYiArPSBiO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIFJlZDogcGFyc2VJbnQociwgMTYpLFxuICAgICAgICAgICAgR3JlZW46IHBhcnNlSW50KGcsIDE2KSxcbiAgICAgICAgICAgIEJsdWU6IHBhcnNlSW50KGIsIDE2KSxcbiAgICAgICAgICAgIEFscGhhOiAxXG4gICAgICAgIH07XG4gICAgfSxcblxuICAgIGNvbWJpbmU6ICh2YWx1ZXMpID0+IHJnYi5jb21iaW5lKHZhbHVlcylcbn07Il19

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _defaultProps = __webpack_require__(48);
	
	var _dictionary = __webpack_require__(47);
	
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
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _dictionary = __webpack_require__(47);
	
	var _utils = __webpack_require__(2);
	
	var _px = __webpack_require__(28);
	
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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy92YWx1ZS10eXBlcy9weC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O2tCQUVlO0FBQ1gsZ0JBQVksRUFBRTtBQUNWLFlBQUksRUFBRSxJQUFJO0FBQ1YsWUFBSSxnQkFBVTtLQUNqQjtDQUNKIiwiZmlsZSI6InB4LmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9NYXR0UGVycnkvU2l0ZXMvcG9wbW90aW9uIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHVuaXRUeXBlIGZyb20gJy4vdW5pdCc7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBkZWZhdWx0UHJvcHM6IHtcbiAgICAgICAgdW5pdDogJ3B4JyxcbiAgICAgICAgdHlwZTogdW5pdFR5cGVcbiAgICB9XG59OyJdfQ==

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _utils = __webpack_require__(2);
	
	var _dictionary = __webpack_require__(47);
	
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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy92YWx1ZS10eXBlcy9yZ2IuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztrQkFJZTtBQUNYLGdCQUFZLEVBQUU7QUFDVixXQUFHLGdCQUpGLEdBQUcsQUFJVztBQUNmLGFBQUssZ0JBTEosR0FBRyxBQUthO0FBQ2pCLFlBQUksZ0JBTkgsR0FBRyxBQU1ZO0FBQ2hCLGFBQUssZ0JBUGUsT0FBTyxBQU9OO0tBQ3hCOztBQUVELFFBQUksRUFBRSxVQUFDLEtBQUs7ZUFBTSxLQUFLLElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7S0FBQzs7QUFFckQsU0FBSyxFQUFFLFVBQUMsS0FBSztlQUFLLFdBZDBCLGNBQWMsRUFjekIsS0FBSyxjQWJqQyxHQUFHLENBYXlDO0tBQUE7O0FBRWpELFdBQU8sRUFBRSxVQUFDLE1BQU07ZUFBSyxXQWhCQyxvQkFBb0IsRUFnQkEsV0FoQnJDLGVBQWUsRUFnQnNDLE1BQU0sY0FmM0QsR0FBRyxFQWVvRSxJQUFJLEVBQUUsQ0FBQyxDQUFDLEVBQUUsTUFBTSxDQUFDO0tBQUE7Q0FDaEciLCJmaWxlIjoicmdiLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9NYXR0UGVycnkvU2l0ZXMvcG9wbW90aW9uIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlRGVsaW1pdGVkLCBjcmVhdGVGdW5jdGlvblN0cmluZywgZ2V0Q29sb3JWYWx1ZXMgfSBmcm9tICcuLi9pbmMvdXRpbHMnO1xuaW1wb3J0IHsgcmdiIGFzIHJnYlRlcm1zIH0gZnJvbSAnLi9zZXR0aW5ncy9kaWN0aW9uYXJ5JztcbmltcG9ydCB7IHJnYiBhcyBkZWZhdWx0UkdCLCBvcGFjaXR5IGFzIGRlZmF1bHRPcGFjaXR5IH0gZnJvbSAnLi9zZXR0aW5ncy9kZWZhdWx0LXByb3BzJztcblxuZXhwb3J0IGRlZmF1bHQge1xuICAgIGRlZmF1bHRQcm9wczoge1xuICAgICAgICBSZWQ6IGRlZmF1bHRSR0IsXG4gICAgICAgIEdyZWVuOiBkZWZhdWx0UkdCLFxuICAgICAgICBCbHVlOiBkZWZhdWx0UkdCLFxuICAgICAgICBBbHBoYTogZGVmYXVsdE9wYWNpdHlcbiAgICB9LFxuXG4gICAgdGVzdDogKHZhbHVlKSA9PiAodmFsdWUgJiYgdmFsdWUuaW5kZXhPZigncmdiJykgPiAtMSksXG5cbiAgICBzcGxpdDogKHZhbHVlKSA9PiBnZXRDb2xvclZhbHVlcyh2YWx1ZSwgcmdiVGVybXMpLFxuXG4gICAgY29tYmluZTogKHZhbHVlcykgPT4gY3JlYXRlRnVuY3Rpb25TdHJpbmcoY3JlYXRlRGVsaW1pdGVkKHZhbHVlcywgcmdiVGVybXMsICcsICcsIDIpLCAncmdiYScpXG59OyJdfQ==

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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy92YWx1ZS10eXBlcy9zY2FsZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7a0JBQWU7QUFDWCxnQkFBWSxFQUFFO0FBQ1YsZUFBTyxFQUFFLENBQUM7S0FDYjtDQUNKIiwiZmlsZSI6InNjYWxlLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9NYXR0UGVycnkvU2l0ZXMvcG9wbW90aW9uIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQge1xuICAgIGRlZmF1bHRQcm9wczoge1xuICAgICAgICBjdXJyZW50OiAxXG4gICAgfVxufTsiXX0=

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	exports.__esModule = true;
	
	var _color = __webpack_require__(23);
	
	var _color2 = _interopRequireDefault(_color);
	
	var _px = __webpack_require__(28);
	
	var _dictionary = __webpack_require__(47);
	
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
/* 32 */
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
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports.circularMotion = exports.createMapper = undefined;
	
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
	    return (0, _calc.pointFromAngleAndDistance)({
	        x: values.originX.current,
	        y: values.originY.current
	    }, values.angle.current, values.distance.current)[key];
	};
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9pbmMvdHJhbnNmb3JtZXJzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFFTyxJQUFNLFlBQVksV0FBWixZQUFZLEdBQUcsVUFBQyxJQUFJLEVBQUUsRUFBRSxFQUFLO0FBQ3RDLFFBQU0sU0FBUyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUM7O0FBRTlCLFdBQU8sVUFBQyxLQUFLLEVBQUs7QUFDZCxhQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsU0FBUyxFQUFFLENBQUMsRUFBRSxFQUFFO0FBQ2hDLGdCQUFJLEtBQUssR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLFNBQVMsRUFBRTtBQUNwQyx1QkFBTyxVQVJRLG9CQUFvQixFQVFQLFVBUlMsUUFBUSxFQVFSLFVBUjVDLG9CQUFvQixFQVE2QyxLQUFLLEVBQUUsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQzthQUNwSDtTQUNKO0tBQ0osQ0FBQztDQUNMLENBQUM7O0FBRUssSUFBTSxjQUFjLFdBQWQsY0FBYyxHQUFHLFVBQUMsQ0FBQyxFQUFFLEdBQUc7UUFBSSxNQUFNLFFBQU4sTUFBTTtXQUMzQyxVQWYyRCx5QkFBeUIsRUFlMUQ7QUFDdEIsU0FBQyxFQUFFLE1BQU0sQ0FBQyxPQUFPLENBQUMsT0FBTztBQUN6QixTQUFDLEVBQUUsTUFBTSxDQUFDLE9BQU8sQ0FBQyxPQUFPO0tBQzVCLEVBQUUsTUFBTSxDQUFDLEtBQUssQ0FBQyxPQUFPLEVBQUUsTUFBTSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQyxHQUFHLENBQUM7Q0FBQSxDQUFDIiwiZmlsZSI6InRyYW5zZm9ybWVycy5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvTWF0dFBlcnJ5L1NpdGVzL3BvcG1vdGlvbiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGdldFByb2dyZXNzRnJvbVZhbHVlLCBnZXRWYWx1ZUZyb21Qcm9ncmVzcywgcmVzdHJpY3QsIHBvaW50RnJvbUFuZ2xlQW5kRGlzdGFuY2UgfSBmcm9tICcuLi9pbmMvY2FsYyc7XG5cbmV4cG9ydCBjb25zdCBjcmVhdGVNYXBwZXIgPSAoZnJvbSwgdG8pID0+IHtcbiAgICBjb25zdCBtYXBMZW5ndGggPSBmcm9tLmxlbmd0aDtcblxuICAgIHJldHVybiAodmFsdWUpID0+IHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPCBtYXBMZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKHZhbHVlIDwgZnJvbVtpXSB8fCBpID09PSBtYXBMZW5ndGgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZ2V0VmFsdWVGcm9tUHJvZ3Jlc3MocmVzdHJpY3QoZ2V0UHJvZ3Jlc3NGcm9tVmFsdWUodmFsdWUsIGZyb21baSAtIDFdLCBmcm9tW2ldKSwgMCwgMSksIHRvW2kgLSAxXSwgdG9baV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcbn07XG5cbmV4cG9ydCBjb25zdCBjaXJjdWxhck1vdGlvbiA9ICh2LCBrZXksIHsgdmFsdWVzIH0pID0+IFxuICAgIHBvaW50RnJvbUFuZ2xlQW5kRGlzdGFuY2Uoe1xuICAgICAgICB4OiB2YWx1ZXMub3JpZ2luWC5jdXJyZW50LFxuICAgICAgICB5OiB2YWx1ZXMub3JpZ2luWS5jdXJyZW50IFxuICAgIH0sIHZhbHVlcy5hbmdsZS5jdXJyZW50LCB2YWx1ZXMuZGlzdGFuY2UuY3VycmVudClba2V5XTtcblxuIl19

/***/ },
/* 34 */
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
	            if (blendProgress === 1) {
	                inAction.blendCurve = undefined;
	            }
	
	            return (0, _calc.ease)((0, _calc.restrict)((0, _calc.getProgressFromValue)(inAction.elapsed, blendCurve[0][0], blendCurve[1][0]), 0, 1), outValue.current, inValue.current, inValue.ease);
	        };
	    } else {
	        // Pass between tweens using bezier interpolation
	        return function () {
	            var blendProgress = (0, _calc.restrict)((0, _calc.getProgressFromValue)(inAction.elapsed, blendCurve[0][0], blendCurve[2][0]), 0, 1);
	            var aP = (0, _calc.getValueFromProgress)(blendProgress, blendCurve[0][1], blendCurve[1][1]);
	            var bP = (0, _calc.getValueFromProgress)(blendProgress, blendCurve[1][1], blendCurve[2][1]);
	            console.log(blendProgress);
	            if (blendProgress === 1) {
	                inAction.blendCurve = undefined;
	                return inValue.current;
	            }
	
	            return (0, _calc.getValueFromProgress)(blendProgress, aP, bP);
	        };
	    }
	};
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9pbmMvZ2VuZXJhdGUtYmxlbmQtY3VydmUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBRUEsSUFBTSxjQUFjLEdBQUcsRUFBRSxDQUFDOztrQkFFWCxVQUFDLFNBQVMsRUFBRSxRQUFRLEVBQUUsR0FBRyxFQUFLO0FBQ3pDLFFBQU0sUUFBUSxHQUFHLFNBQVMsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUM7O0FBRXZDLFFBQUksU0FBUyxDQUFDLE9BQU8sS0FBSyxTQUFTLElBQUksQ0FBQyxRQUFRLEVBQUU7QUFDOUMsZUFBTztLQUNWOztBQUVELFFBQU0sT0FBTyxHQUFHLFFBQVEsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUM7QUFDckMsUUFBTSxnQkFBZ0IsR0FBRyxRQUFRLENBQUMsS0FBSyxHQUFHLFFBQVEsQ0FBQyxRQUFRLENBQUM7QUFDNUQsUUFBTSxlQUFlLEdBQUcsZ0JBQWdCLEdBQUcsU0FBUyxDQUFDLE9BQU8sQ0FBQztBQUM3RCxRQUFNLGtCQUFrQixHQUFHLFVBZHNCLElBQUksRUFjckIsVUFkdUIsUUFBUSxFQWN0QixVQWRwQyxvQkFBb0IsRUFjcUMsZUFBZSxFQUFFLENBQUMsRUFBRSxPQUFPLENBQUMsS0FBSyxHQUFHLE9BQU8sQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsT0FBTyxDQUFDLElBQUksRUFBRSxPQUFPLENBQUMsRUFBRSxFQUFFLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUNwSyxRQUFNLHNCQUFzQixHQUFHLE9BQU8sQ0FBQyxJQUFJLEdBQUcsUUFBUSxDQUFDLE9BQU8sQ0FBQztBQUMvRCxRQUFNLG9CQUFvQixHQUFHLGtCQUFrQixHQUFHLFFBQVEsQ0FBQyxFQUFFLENBQUM7QUFDOUQsUUFBTSxlQUFlLEdBQUcsc0JBQXNCLEtBQUssb0JBQW9CLENBQUM7O0FBRXhFLFFBQU0sVUFBVSxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsUUFB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Q0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0FBQ2pILGdCQUFNLEVBQUUsR0FBRyxVQTdEUSxvQkFBb0IsRUE2RFAsYUFBYSxFQUFFLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUNuRixnQkFBTSxFQUFFLEdBQUcsVUE5RFEsb0JBQW9CLEVBOERQLGFBQWEsRUFBRSxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDL0YsbUJBQU8sQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLENBQUE7QUFDZCxnQkFBSSxhQUFhLEtBQUssQ0FBQyxFQUFFO0FBQ3JCLHdCQUFRLENBQUMsVUFBVSxHQUFHLFNBQVMsQ0FBQztBQUNoQyx1QkFBTyxPQUFPLENBQUMsT0FBTyxDQUFDO2FBQzFCOztBQUVELG1CQUFPLFVBckVZLG9CQUFvQixFQXFFWCxhQUFhLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDO1NBQ3RELENBQUM7S0FDTDtDQUNKIiwiZmlsZSI6ImdlbmVyYXRlLWJsZW5kLWN1cnZlLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9NYXR0UGVycnkvU2l0ZXMvcG9wbW90aW9uIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZ2V0UHJvZ3Jlc3NGcm9tVmFsdWUsIGdldFZhbHVlRnJvbVByb2dyZXNzLCBlYXNlLCByZXN0cmljdCB9IGZyb20gJy4vY2FsYyc7XG5cbmNvbnN0IEJMRU5EX0FDQ1VSQUNZID0gMTA7XG5cbmV4cG9ydCBkZWZhdWx0IChvdXRBY3Rpb24sIGluQWN0aW9uLCBrZXkpID0+IHtcbiAgICBjb25zdCBvdXRWYWx1ZSA9IG91dEFjdGlvbi52YWx1ZXNba2V5XTtcblxuICAgIGlmIChvdXRBY3Rpb24uZWxhcHNlZCA9PT0gdW5kZWZpbmVkIHx8ICFvdXRWYWx1ZSkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgaW5WYWx1ZSA9IGluQWN0aW9uLnZhbHVlc1trZXldO1xuICAgIGNvbnN0IG91dFRvdGFsRHVyYXRpb24gPSBvdXRWYWx1ZS5kZWxheSArIG91dFZhbHVlLmR1cmF0aW9uO1xuICAgIGNvbnN0IHRpbWVVbnRpbE91dEVuZCA9IG91dFRvdGFsRHVyYXRpb24gLSBvdXRBY3Rpb24uZWxhcHNlZDtcbiAgICBjb25zdCBpblBvc2l0aW9uQXRPdXRFbmQgPSBlYXNlKHJlc3RyaWN0KGdldFByb2dyZXNzRnJvbVZhbHVlKHRpbWVVbnRpbE91dEVuZCwgMCwgaW5WYWx1ZS5kZWxheSArIGluVmFsdWUuZHVyYXRpb24pLCAwLCAxKSwgaW5WYWx1ZS5mcm9tLCBpblZhbHVlLnRvLCBpblZhbHVlLmVhc2UpO1xuICAgIGNvbnN0IGluQmlnZ2VyVGhhbk91dEF0U3RhcnQgPSBpblZhbHVlLmZyb20gPiBvdXRWYWx1ZS5jdXJyZW50O1xuICAgIGNvbnN0IGluQmlnZ2VyVGhhbk91dEF0RW5kID0gaW5Qb3NpdGlvbkF0T3V0RW5kID4gb3V0VmFsdWUudG87XG4gICAgY29uc3QgdHdlZW5zSW50ZXJzZWN0ID0gaW5CaWdnZXJUaGFuT3V0QXRTdGFydCAhPT0gaW5CaWdnZXJUaGFuT3V0QXRFbmQ7XG5cbiAgICBjb25zdCBibGVuZEN1cnZlID0gW1swLCBvdXRWYWx1ZS5jdXJyZW50XSwgW3RpbWVVbnRpbE91dEVuZCwgaW5Qb3NpdGlvbkF0T3V0RW5kXV07XG5cbiAgICAvLyBJZiB0d2VlbnMgaW50ZXJzZWN0LCByZXNvbHZlIHR3ZWVucyBhdCBhIHJlc29sdXRpb24gdG8gZmluZCBleGFjdGx5IHdoZXJlXG4gICAgaWYgKHR3ZWVuc0ludGVyc2VjdCkge1xuICAgICAgICBjb25zdCB0aW1lU3RlcFRvVGVzdCA9IHRpbWVVbnRpbE91dEVuZCAvIEJMRU5EX0FDQ1VSQUNZO1xuICAgICAgICBsZXQgZm91bmRQMSA9IGZhbHNlO1xuICAgICAgICBsZXQgZm91bmRQMiA9IGZhbHNlO1xuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDw9IEJMRU5EX0FDQ1VSQUNZOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IHRpbWVTdGVwID0gaSAqIHRpbWVTdGVwVG9UZXN0O1xuICAgICAgICAgICAgY29uc3Qgb3V0QXRUaW1lID0gZWFzZShnZXRQcm9ncmVzc0Zyb21WYWx1ZShvdXRBY3Rpb24uZWxhcHNlZCArIHRpbWVTdGVwLCBvdXRWYWx1ZS5kZWxheSwgb3V0VmFsdWUuZHVyYXRpb24pLCBvdXRWYWx1ZS5mcm9tLCBvdXRWYWx1ZS50bywgb3V0VmFsdWUuZWFzZSk7XG4gICAgICAgICAgICBjb25zdCBpbkF0VGltZSA9IGVhc2UoZ2V0UHJvZ3Jlc3NGcm9tVmFsdWUoaW5BY3Rpb24uZWxhcHNlZCArIHRpbWVTdGVwLCBpblZhbHVlLmRlbGF5LCBpblZhbHVlLmR1cmF0aW9uKSwgaW5WYWx1ZS5mcm9tLCBpblZhbHVlLnRvLCBpblZhbHVlLmVhc2UpO1xuXG4gICAgICAgICAgICBpZiAoIWZvdW5kUDEgJiYgKChpbkJpZ2dlclRoYW5PdXRBdFN0YXJ0ICYmIGluQXRUaW1lIDwgb3V0QXRUaW1lKSB8fCAoIWluQmlnZ2VyVGhhbk91dEF0U3RhcnQgJiYgaW5BdFRpbWUgPiBvdXRBdFRpbWUpKSkge1xuICAgICAgICAgICAgICAgIGJsZW5kQ3VydmUuc3BsaWNlKDEsIDAsIFt0aW1lU3RlcCwgaW5BdFRpbWVdKTtcbiAgICAgICAgICAgICAgICBmb3VuZFAxID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGZvdW5kUDEgJiYgKChpbkJpZ2dlclRoYW5PdXRBdFN0YXJ0ICYmIGluQXRUaW1lIDwgb3V0VmFsdWUuY3VycmVudCkgfHwgKCFpbkJpZ2dlclRoYW5PdXRBdFN0YXJ0ICYmIGluQXRUaW1lID4gb3V0VmFsdWUuY3VycmVudCkpKSB7XG4gICAgICAgICAgICAgICAgYmxlbmRDdXJ2ZVsyXSA9IFt0aW1lU3RlcCwgaW5BdFRpbWVdO1xuICAgICAgICAgICAgICAgIGZvdW5kUDIgPSB0cnVlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoZm91bmRQMikge1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGJsZW5kQ3VydmUubGVuZ3RoID09PSAyKSB7XG4gICAgICAgIC8vIFBhc3MgYmV0d2VlbiB0d2VlbnMgdXNpbmcgaW5jb21pbmcgZWFzaW5nIGlmIGp1c3QgdHdvIHBvaW50c1xuICAgICAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgICAgICAgaWYgKGJsZW5kUHJvZ3Jlc3MgPT09IDEpIHtcbiAgICAgICAgICAgICAgICBpbkFjdGlvbi5ibGVuZEN1cnZlID0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gZWFzZShyZXN0cmljdChnZXRQcm9ncmVzc0Zyb21WYWx1ZShpbkFjdGlvbi5lbGFwc2VkLCBibGVuZEN1cnZlWzBdWzBdLCBibGVuZEN1cnZlWzFdWzBdKSwgMCwgMSksIG91dFZhbHVlLmN1cnJlbnQsIGluVmFsdWUuY3VycmVudCwgaW5WYWx1ZS5lYXNlKTtcbiAgICAgICAgfTtcbiAgICB9IGVsc2Uge1xuICAgICAgICAvLyBQYXNzIGJldHdlZW4gdHdlZW5zIHVzaW5nIGJlemllciBpbnRlcnBvbGF0aW9uXG4gICAgICAgIHJldHVybiAoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBibGVuZFByb2dyZXNzID0gcmVzdHJpY3QoZ2V0UHJvZ3Jlc3NGcm9tVmFsdWUoaW5BY3Rpb24uZWxhcHNlZCwgYmxlbmRDdXJ2ZVswXVswXSwgYmxlbmRDdXJ2ZVsyXVswXSksIDAsIDEpO1xuICAgICAgICAgICAgY29uc3QgYVAgPSBnZXRWYWx1ZUZyb21Qcm9ncmVzcyhibGVuZFByb2dyZXNzLCBibGVuZEN1cnZlWzBdWzFdLCBibGVuZEN1cnZlWzFdWzFdKTtcbiAgICAgICAgICAgIGNvbnN0IGJQID0gZ2V0VmFsdWVGcm9tUHJvZ3Jlc3MoYmxlbmRQcm9ncmVzcywgYmxlbmRDdXJ2ZVsxXVsxXSwgYmxlbmRDdXJ2ZVsyXVsxXSk7XG5jb25zb2xlLmxvZyhibGVuZFByb2dyZXNzKVxuICAgICAgICAgICAgaWYgKGJsZW5kUHJvZ3Jlc3MgPT09IDEpIHtcbiAgICAgICAgICAgICAgICBpbkFjdGlvbi5ibGVuZEN1cnZlID0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgICAgIHJldHVybiBpblZhbHVlLmN1cnJlbnQ7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBnZXRWYWx1ZUZyb21Qcm9ncmVzcyhibGVuZFByb2dyZXNzLCBhUCwgYlApO1xuICAgICAgICB9O1xuICAgIH1cbn07XG4iXX0=

/***/ },
/* 35 */
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
/* 36 */
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
/* 37 */
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
	
	var _angle = __webpack_require__(21);
	
	var _angle2 = _interopRequireDefault(_angle);
	
	var _alpha = __webpack_require__(20);
	
	var _alpha2 = _interopRequireDefault(_alpha);
	
	var _axes = __webpack_require__(22);
	
	var _axes2 = _interopRequireDefault(_axes);
	
	var _color = __webpack_require__(23);
	
	var _color2 = _interopRequireDefault(_color);
	
	var _scale = __webpack_require__(30);
	
	var _scale2 = _interopRequireDefault(_scale);
	
	var _shadow = __webpack_require__(31);
	
	var _shadow2 = _interopRequireDefault(_shadow);
	
	var _positions = __webpack_require__(27);
	
	var _positions2 = _interopRequireDefault(_positions);
	
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
	
	var _dictionary = __webpack_require__(47);
	
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
	
	var _alpha = __webpack_require__(20);
	
	var _alpha2 = _interopRequireDefault(_alpha);
	
	var _axes = __webpack_require__(22);
	
	var _axes2 = _interopRequireDefault(_axes);
	
	var _color = __webpack_require__(23);
	
	var _color2 = _interopRequireDefault(_color);
	
	var _complex = __webpack_require__(24);
	
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
	    transformOrigin: _axes2.default,
	    d: _complex2.default,
	    opacity: _alpha2.default,
	    fillOpacity: _alpha2.default,
	    strokeOpacity: _alpha2.default
	};
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hZGFwdGVyL3N2Zy92YWx1ZS10eXBlLW1hcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztrQkFNZTtBQUNYLFFBQUksaUJBQU87QUFDWCxVQUFNLGlCQUFPO0FBQ2IsU0FBSyxpQkFBTztBQUNaLFVBQU0saUJBQU87QUFDYixVQUFNLGlCQUFPO0FBQ2IsbUJBQWUsZ0JBQU07QUFDckIsS0FBQyxtQkFBUztBQUNWLFdBQU8saUJBQU87QUFDZCxlQUFXLGlCQUFPO0FBQ2xCLGlCQUFhLGlCQUFPO0NBQ3ZCIiwiZmlsZSI6InZhbHVlLXR5cGUtbWFwLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9NYXR0UGVycnkvU2l0ZXMvcG9wbW90aW9uIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGFscGhhIGZyb20gJy4uLy4uL3ZhbHVlLXR5cGVzL2FscGhhJztcbmltcG9ydCBheGVzIGZyb20gJy4uLy4uL3ZhbHVlLXR5cGVzL2F4ZXMnO1xuaW1wb3J0IGNvbG9yIGZyb20gJy4uLy4uL3ZhbHVlLXR5cGVzL2NvbG9yJztcbmltcG9ydCBjb21wbGV4IGZyb20gJy4uLy4uL3ZhbHVlLXR5cGVzL2NvbXBsZXgnO1xuaW1wb3J0IHNjYWxlIGZyb20gJy4uLy4uL3ZhbHVlLXR5cGVzL3NjYWxlJztcblxuZXhwb3J0IGRlZmF1bHQge1xuICAgIGZpbGw6IGNvbG9yLFxuICAgIHN0cm9rZTogY29sb3IsXG4gICAgc2NhbGU6IHNjYWxlLFxuICAgIHNjYWxlWDogc2NhbGUsXG4gICAgc2NhbGVZOiBzY2FsZSxcbiAgICB0cmFuc2Zvcm1PcmlnaW46IGF4ZXMsXG4gICAgZDogY29tcGxleCxcbiAgICBvcGFjaXR5OiBhbHBoYSxcbiAgICBmaWxsT3BhY2l0eTogYWxwaGEsXG4gICAgc3Ryb2tlT3BhY2l0eTogYWxwaGFcbn07Il19

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
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	exports.__esModule = true;
	
	var _stateMap = __webpack_require__(38);
	
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
/* 47 */
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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy92YWx1ZS10eXBlcy9zZXR0aW5ncy9kZWZhdWx0LXByb3BzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFPLElBQU0sR0FBRyxXQUFILEdBQUcsR0FBRztBQUNmLE9BQUcsRUFBRSxDQUFDO0FBQ04sT0FBRyxFQUFFLEdBQUc7QUFDUixTQUFLLEVBQUUsSUFBSTtDQUNkLENBQUM7O0FBRUssSUFBTSxPQUFPLFdBQVAsT0FBTyxHQUFHO0FBQ25CLE9BQUcsRUFBRSxDQUFDO0FBQ04sT0FBRyxFQUFFLENBQUM7Q0FDVCxDQUFDOztBQUVLLElBQU0sT0FBTyxXQUFQLE9BQU8sR0FBRztBQUNuQixPQUFHLEVBQUUsQ0FBQztBQUNOLE9BQUcsRUFBRSxHQUFHO0FBQ1IsUUFBSSxFQUFFLEdBQUc7Q0FDWixDQUFDIiwiZmlsZSI6ImRlZmF1bHQtcHJvcHMuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL01hdHRQZXJyeS9TaXRlcy9wb3Btb3Rpb24iLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgcmdiID0ge1xuICAgIG1pbjogMCxcbiAgICBtYXg6IDI1NSxcbiAgICByb3VuZDogdHJ1ZVxufTtcblxuZXhwb3J0IGNvbnN0IG9wYWNpdHkgPSB7XG4gICAgbWluOiAwLFxuICAgIG1heDogMVxufTtcblxuZXhwb3J0IGNvbnN0IHBlcmNlbnQgPSB7XG4gICAgbWluOiAwLFxuICAgIG1heDogMTAwLFxuICAgIHVuaXQ6ICclJ1xufTsiXX0=

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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hY3Rpb25zL2Vhc2luZy9jcmVhdGUtYmV6aWVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztrQkFtQ3dCLFdBQVc7Ozs7Ozs7Ozs7Ozs7Ozs7QUFwQm5DLElBQU0saUJBQWlCLEdBQUcsQ0FBQyxDQUFDO0FBQzVCLElBQU0sZ0JBQWdCLEdBQUcsS0FBSyxDQUFDO0FBQy9CLElBQU0scUJBQXFCLEdBQUcsU0FBUyxDQUFDO0FBQ3hDLElBQU0sMEJBQTBCLEdBQUcsRUFBRSxDQUFDO0FBQ3RDLElBQU0sbUJBQW1CLEdBQUcsRUFBRSxDQUFDO0FBQy9CLElBQU0sa0JBQWtCLEdBQUcsR0FBRyxJQUFJLG1CQUFtQixHQUFHLEdBQUcsQ0FBQSxBQUFDLENBQUM7QUFDN0QsSUFBTSxrQkFBa0IsR0FBSSxPQUFPLFlBQVksS0FBSyxXQUFXLEFBQUM7OztBQUFDLEFBR2pFLElBQU0sQ0FBQyxHQUFHLFVBQUMsRUFBRSxFQUFFLEVBQUU7V0FBSyxHQUFHLEdBQUcsR0FBRyxHQUFHLEVBQUUsR0FBRyxHQUFHLEdBQUcsRUFBRTtDQUFBLENBQUM7QUFDaEQsSUFBTSxDQUFDLEdBQUcsVUFBQyxFQUFFLEVBQUUsRUFBRTtXQUFLLEdBQUcsR0FBRyxFQUFFLEdBQUcsR0FBRyxHQUFHLEVBQUU7Q0FBQSxDQUFDO0FBQzFDLElBQU0sQ0FBQyxHQUFHLFVBQUMsRUFBRTtXQUFLLEdBQUcsR0FBRyxFQUFFO0NBQUEsQ0FBQzs7QUFFM0IsSUFBTSxRQUFRLEdBQUcsVUFBQyxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUU7V0FBSyxHQUFHLEdBQUcsQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDO0NBQUEsQ0FBQzs7QUFFdEYsSUFBTSxVQUFVLEdBQUcsVUFBQyxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUU7V0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQSxHQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUEsR0FBSSxDQUFDO0NBQUE7Ozs7O0FBQUMsQUFLakUsU0FBUyxXQUFXLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFO0FBQ3BELFFBQU0sWUFBWSxHQUFHLGtCQUFrQixHQUFHLElBQUksWUFBWSxDQUFDLG1CQUFtQixDQUFDLEdBQUcsSUFBSSxLQUFLLENBQUMsbUJBQW1CLENBQUMsQ0FBQztBQUNqSCxRQUFJLFlBQVksR0FBRyxLQUFLLENBQUM7O0FBRXpCLFFBQU0sZUFBZSxHQUFHLFVBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUs7QUFDcEMsWUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0FBQ1YsWUFBSSxRQUFRLFlBQUEsQ0FBQztBQUNiLFlBQUksUUFBUSxZQUFBLENBQUM7O0FBRWIsV0FBRztBQUNDLG9CQUFRLEdBQUcsRUFBRSxHQUFHLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQSxHQUFJLEdBQUcsQ0FBQztBQUNoQyxvQkFBUSxHQUFHLFVBQVUsQ0FBQyxRQUFRLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQyxHQUFHLEVBQUUsQ0FBQztBQUMvQyxnQkFBSSxRQUFRLEdBQUcsR0FBRyxFQUFFO0FBQ2hCLGtCQUFFLEdBQUcsUUFBUSxDQUFDO2FBQ2pCLE1BQU07QUFDSCxrQkFBRSxHQUFHLFFBQVEsQ0FBQzthQUNqQjtTQUNKLFFBQVEsSUFBSSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsR0FBRyxxQkFBcUIsSUFBSSxFQUFFLENBQUMsR0FBRywwQkFBMEIsRUFBRTs7QUFFekYsZUFBTyxRQUFRLENBQUM7S0FDbkIsQ0FBQzs7QUFFRixRQUFNLG9CQUFvQixHQUFHLFVBQUMsRUFBRSxFQUFFLE9BQU8sRUFBSztBQUMxQyxZQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7QUFDVixZQUFJLFlBQVksR0FBRyxDQUFDLENBQUM7QUFDckIsWUFBSSxRQUFRLFlBQUEsQ0FBQzs7QUFFYixlQUFPLENBQUMsR0FBRyxpQkFBaUIsRUFBRSxFQUFFLENBQUMsRUFBRTtBQUMvQix3QkFBWSxHQUFHLFFBQVEsQ0FBQyxPQUFPLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDOztBQUUzQyxnQkFBSSxZQUFZLEtBQUssR0FBRyxFQUFFO0FBQ3RCLHVCQUFPLE9BQU8sQ0FBQzthQUNsQjs7QUFFRCxvQkFBUSxHQUFHLFVBQVUsQ0FBQyxPQUFPLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQyxHQUFHLEVBQUUsQ0FBQztBQUM5QyxtQkFBTyxJQUFJLFFBQVEsR0FBRyxZQUFZLENBQUM7U0FDdEM7O0FBRUQsZUFBTyxPQUFPLENBQUM7S0FDbEIsQ0FBQzs7QUFFRixRQUFNLGdCQUFnQixHQUFHLFlBQU07QUFDM0IsYUFBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLG1CQUFtQixFQUFFLEVBQUUsQ0FBQyxFQUFFO0FBQzFDLHdCQUFZLENBQUMsQ0FBQyxDQUFDLEdBQUcsVUFBVSxDQUFDLENBQUMsR0FBRyxrQkFBa0IsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUM7U0FDbEU7S0FDSixDQUFDOztBQUVGLFFBQU0sUUFBUSxHQUFHLFVBQUMsRUFBRSxFQUFLO0FBQ3JCLFlBQUksYUFBYSxHQUFHLEdBQUcsQ0FBQztBQUN4QixZQUFJLGFBQWEsR0FBRyxDQUFDLENBQUM7QUFDdEIsWUFBSSxVQUFVLEdBQUcsbUJBQW1CLEdBQUcsQ0FBQyxDQUFDO0FBQ3pDLFlBQUksSUFBSSxHQUFHLEdBQUcsQ0FBQztBQUNmLFlBQUksU0FBUyxHQUFHLEdBQUcsQ0FBQztBQUNwQixZQUFJLFlBQVksR0FBRyxHQUFHLENBQUM7O0FBRXZCLGVBQU8sYUFBYSxJQUFJLFVBQVUsSUFBSSxZQUFZLENBQUMsYUFBYSxDQUFDLElBQUksRUFBRSxFQUFFLEVBQUUsYUFBYSxFQUFFO0FBQ3RGLHlCQUFhLElBQUksa0JBQWtCLENBQUM7U0FDdkM7O0FBRUQsVUFBRSxhQUFhLENBQUM7O0FBRWhCLFlBQUksR0FBRyxDQUFDLEVBQUUsR0FBRyxZQUFZLENBQUMsYUFBYSxDQUFDLENBQUEsSUFBSyxZQUFZLENBQUMsYUFBYSxHQUFDLENBQUMsQ0FBQyxHQUFHLFlBQVksQ0FBQyxhQUFhLENBQUMsQ0FBQSxBQUFDLENBQUM7QUFDMUcsaUJBQVMsR0FBRyxhQUFhLEdBQUcsSUFBSSxHQUFHLGtCQUFrQixDQUFDOztBQUV0RCxvQkFBWSxHQUFHLFFBQVEsQ0FBQyxTQUFTLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQzs7O0FBQUMsQUFHN0MsWUFBSSxZQUFZLElBQUksZ0JBQWdCLEVBQUU7QUFDbEMsbUJBQU8sb0JBQW9CLENBQUMsRUFBRSxFQUFFLFNBQVMsQ0FBQzs7QUFBQyxTQUU5QyxNQUFNLElBQUksWUFBWSxLQUFLLEdBQUcsRUFBRTtBQUM3Qix1QkFBTyxTQUFTOztBQUFDLGFBRXBCLE1BQU07QUFDSCwyQkFBTyxlQUFlLENBQUMsRUFBRSxFQUFFLGFBQWEsRUFBRSxhQUFhLEdBQUcsa0JBQWtCLENBQUMsQ0FBQztpQkFDakY7S0FDSixDQUFDOztBQUVGLFFBQU0sVUFBVSxHQUFHLFlBQU07QUFDckIsb0JBQVksR0FBRyxJQUFJLENBQUM7QUFDcEIsWUFBSSxHQUFHLElBQUksR0FBRyxJQUFJLEdBQUcsSUFBSSxHQUFHLEVBQUU7QUFDMUIsNEJBQWdCLEVBQUUsQ0FBQztTQUN0QjtLQUNKLENBQUM7O0FBRUYsUUFBTSxRQUFRLEdBQUcsVUFBQyxFQUFFLEVBQUs7QUFDckIsWUFBSSxXQUFXLFlBQUEsQ0FBQzs7QUFFaEIsWUFBSSxDQUFDLFlBQVksRUFBRTtBQUNmLHNCQUFVLEVBQUUsQ0FBQztTQUNoQjs7O0FBQUEsQUFHRCxZQUFJLEdBQUcsS0FBSyxHQUFHLElBQUksR0FBRyxLQUFLLEdBQUcsRUFBRTtBQUM1Qix1QkFBVyxHQUFHLEVBQUU7OztBQUFDLFNBR3BCLE1BQU0sSUFBSSxFQUFFLEtBQUssQ0FBQyxFQUFFO0FBQ2pCLDJCQUFXLEdBQUcsQ0FBQzs7O0FBQUMsYUFHbkIsTUFBTSxJQUFJLEVBQUUsS0FBSyxDQUFDLEVBQUU7QUFDakIsK0JBQVcsR0FBRyxDQUFDLENBQUM7aUJBRW5CLE1BQU07QUFDSCwrQkFBVyxHQUFHLFVBQVUsQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDO2lCQUNwRDs7QUFFRCxlQUFPLFdBQVcsQ0FBQztLQUN0QixDQUFDOztBQUVGLFdBQU8sUUFBUSxDQUFDO0NBQ25CIiwiZmlsZSI6ImNyZWF0ZS1iZXppZXIuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL01hdHRQZXJyeS9TaXRlcy9wb3Btb3Rpb24iLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICAgIEJlemllciBmdW5jdGlvbiBnZW5lcmF0b3JcbiAgICAgICAgXG4gICAgR2HDq3RhbiBSZW5hdWRlYXUncyBCZXppZXJFYXNpbmdcbiAgICBodHRwczovL2dpdGh1Yi5jb20vZ3JlL2Jlemllci1lYXNpbmcvYmxvYi9tYXN0ZXIvaW5kZXguanMgIFxuICAgIGh0dHBzOi8vZ2l0aHViLmNvbS9ncmUvYmV6aWVyLWVhc2luZy9ibG9iL21hc3Rlci9MSUNFTlNFXG4gICAgWW91J3JlIGEgaGVyb1xuICAgIFxuICAgIFVzZVxuICAgIFxuICAgICAgICB2YXIgZWFzZU91dCA9IG5ldyBCZXppZXIoLjE3LC42NywuODMsLjY3KSxcbiAgICAgICAgICAgIHggPSBlYXNlT3V0KDAuNSk7IC8vIHJldHVybnMgMC42MjcuLi5cbiovXG5cbi8vIENvbnN0YW50c1xuY29uc3QgTkVXVE9OX0lURVJBVElPTlMgPSA4O1xuY29uc3QgTkVXVE9OX01JTl9TTE9QRSA9IDAuMDAxO1xuY29uc3QgU1VCRElWSVNJT05fUFJFQ0lTSU9OID0gMC4wMDAwMDAxO1xuY29uc3QgU1VCRElWSVNJT05fTUFYX0lURVJBVElPTlMgPSAxMDtcbmNvbnN0IEtfU1BMSU5FX1RBQkxFX1NJWkUgPSAxMTtcbmNvbnN0IEtfU0FNUExFX1NURVBfU0laRSA9IDEuMCAvIChLX1NQTElORV9UQUJMRV9TSVpFIC0gMS4wKTtcbmNvbnN0IEZMT0FUXzMyX1NVUFBPUlRFRCA9ICh0eXBlb2YgRmxvYXQzMkFycmF5ICE9PSAndW5kZWZpbmVkJyk7XG5cbi8vIEhlbHBlciBtZXRob2RzXG5jb25zdCBhID0gKGExLCBhMikgPT4gMS4wIC0gMy4wICogYTIgKyAzLjAgKiBhMTtcbmNvbnN0IGIgPSAoYTEsIGEyKSA9PiAzLjAgKiBhMiAtIDYuMCAqIGExO1xuY29uc3QgYyA9IChhMSkgPT4gMy4wICogYTE7XG5cbmNvbnN0IGdldFNsb3BlID0gKHQsIGExLCBhMikgPT4gMy4wICogYShhMSwgYTIpICogdCAqIHQgKyAyLjAgKiBiKGExLCBhMikgKiB0ICsgYyhhMSk7XG5cbmNvbnN0IGNhbGNCZXppZXIgPSAodCwgYTEsIGEyKSA9PiAoKGEoYTEsIGEyKSAqIHQgKyBiKGExLCBhMikpICogdCArIGMoYTEpKSAqIHQ7XG5cbi8qXG4gICAgQ3JlYXRlIGEgY3ViaWMgYmV6aWVyIHJlc29sdmVyXG4qL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3ViaWNCZXppZXIobVgxLCBtWTEsIG1YMiwgbVkyKSB7XG4gICAgY29uc3Qgc2FtcGxlVmFsdWVzID0gRkxPQVRfMzJfU1VQUE9SVEVEID8gbmV3IEZsb2F0MzJBcnJheShLX1NQTElORV9UQUJMRV9TSVpFKSA6IG5ldyBBcnJheShLX1NQTElORV9UQUJMRV9TSVpFKTtcbiAgICBsZXQgX3ByZWNvbXB1dGVkID0gZmFsc2U7XG5cbiAgICBjb25zdCBiaW5hcnlTdWJkaXZpZGUgPSAoYVgsIGFBLCBhQikgPT4ge1xuICAgICAgICBsZXQgaSA9IDA7XG4gICAgICAgIGxldCBjdXJyZW50WDtcbiAgICAgICAgbGV0IGN1cnJlbnRUO1xuXG4gICAgICAgIGRvIHtcbiAgICAgICAgICAgIGN1cnJlbnRUID0gYUEgKyAoYUIgLSBhQSkgLyAyLjA7XG4gICAgICAgICAgICBjdXJyZW50WCA9IGNhbGNCZXppZXIoY3VycmVudFQsIG1YMSwgbVgyKSAtIGFYO1xuICAgICAgICAgICAgaWYgKGN1cnJlbnRYID4gMC4wKSB7XG4gICAgICAgICAgICAgICAgYUIgPSBjdXJyZW50VDtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgYUEgPSBjdXJyZW50VDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSB3aGlsZSAoTWF0aC5hYnMoY3VycmVudFgpID4gU1VCRElWSVNJT05fUFJFQ0lTSU9OICYmICsraSA8IFNVQkRJVklTSU9OX01BWF9JVEVSQVRJT05TKTtcblxuICAgICAgICByZXR1cm4gY3VycmVudFQ7XG4gICAgfTtcblxuICAgIGNvbnN0IG5ld3RvblJhcGhzb25JdGVyYXRlID0gKGFYLCBhR3Vlc3NUKSA9PiB7XG4gICAgICAgIGxldCBpID0gMDtcbiAgICAgICAgbGV0IGN1cnJlbnRTbG9wZSA9IDA7XG4gICAgICAgIGxldCBjdXJyZW50WDtcblxuICAgICAgICBmb3IgKDsgaSA8IE5FV1RPTl9JVEVSQVRJT05TOyArK2kpIHtcbiAgICAgICAgICAgIGN1cnJlbnRTbG9wZSA9IGdldFNsb3BlKGFHdWVzc1QsIG1YMSwgbVgyKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgaWYgKGN1cnJlbnRTbG9wZSA9PT0gMC4wKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGFHdWVzc1Q7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGN1cnJlbnRYID0gY2FsY0JlemllcihhR3Vlc3NULCBtWDEsIG1YMikgLSBhWDtcbiAgICAgICAgICAgIGFHdWVzc1QgLT0gY3VycmVudFggLyBjdXJyZW50U2xvcGU7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIHJldHVybiBhR3Vlc3NUO1xuICAgIH07XG5cbiAgICBjb25zdCBjYWxjU2FtcGxlVmFsdWVzID0gKCkgPT4ge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IEtfU1BMSU5FX1RBQkxFX1NJWkU7ICsraSkge1xuICAgICAgICAgICAgc2FtcGxlVmFsdWVzW2ldID0gY2FsY0JlemllcihpICogS19TQU1QTEVfU1RFUF9TSVpFLCBtWDEsIG1YMik7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgY29uc3QgZ2V0VEZvclggPSAoYVgpID0+IHtcbiAgICAgICAgbGV0IGludGVydmFsU3RhcnQgPSAwLjA7XG4gICAgICAgIGxldCBjdXJyZW50U2FtcGxlID0gMTtcbiAgICAgICAgbGV0IGxhc3RTYW1wbGUgPSBLX1NQTElORV9UQUJMRV9TSVpFIC0gMTtcbiAgICAgICAgbGV0IGRpc3QgPSAwLjA7XG4gICAgICAgIGxldCBndWVzc0ZvclQgPSAwLjA7XG4gICAgICAgIGxldCBpbml0aWFsU2xvcGUgPSAwLjA7XG4gICAgICAgICAgICBcbiAgICAgICAgZm9yICg7IGN1cnJlbnRTYW1wbGUgIT0gbGFzdFNhbXBsZSAmJiBzYW1wbGVWYWx1ZXNbY3VycmVudFNhbXBsZV0gPD0gYVg7ICsrY3VycmVudFNhbXBsZSkge1xuICAgICAgICAgICAgaW50ZXJ2YWxTdGFydCArPSBLX1NBTVBMRV9TVEVQX1NJWkU7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIC0tY3VycmVudFNhbXBsZTtcbiAgICAgICAgXG4gICAgICAgIGRpc3QgPSAoYVggLSBzYW1wbGVWYWx1ZXNbY3VycmVudFNhbXBsZV0pIC8gKHNhbXBsZVZhbHVlc1tjdXJyZW50U2FtcGxlKzFdIC0gc2FtcGxlVmFsdWVzW2N1cnJlbnRTYW1wbGVdKTtcbiAgICAgICAgZ3Vlc3NGb3JUID0gaW50ZXJ2YWxTdGFydCArIGRpc3QgKiBLX1NBTVBMRV9TVEVQX1NJWkU7XG4gICAgICAgIFxuICAgICAgICBpbml0aWFsU2xvcGUgPSBnZXRTbG9wZShndWVzc0ZvclQsIG1YMSwgbVgyKTtcbiAgICAgICAgXG4gICAgICAgIC8vIElmIHNsb3BlIGlzIGdyZWF0ZXIgdGhhbiBtaW5cbiAgICAgICAgaWYgKGluaXRpYWxTbG9wZSA+PSBORVdUT05fTUlOX1NMT1BFKSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3dG9uUmFwaHNvbkl0ZXJhdGUoYVgsIGd1ZXNzRm9yVCk7XG4gICAgICAgIC8vIFNsb3BlIGlzIGVxdWFsIHRvIG1pblxuICAgICAgICB9IGVsc2UgaWYgKGluaXRpYWxTbG9wZSA9PT0gMC4wKSB7XG4gICAgICAgICAgICByZXR1cm4gZ3Vlc3NGb3JUO1xuICAgICAgICAvLyBTbG9wZSBpcyBsZXNzIHRoYW4gbWluXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gYmluYXJ5U3ViZGl2aWRlKGFYLCBpbnRlcnZhbFN0YXJ0LCBpbnRlcnZhbFN0YXJ0ICsgS19TQU1QTEVfU1RFUF9TSVpFKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBjb25zdCBwcmVjb21wdXRlID0gKCkgPT4ge1xuICAgICAgICBfcHJlY29tcHV0ZWQgPSB0cnVlO1xuICAgICAgICBpZiAobVgxICE9IG1ZMSB8fCBtWDIgIT0gbVkyKSB7XG4gICAgICAgICAgICBjYWxjU2FtcGxlVmFsdWVzKCk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgY29uc3QgcmVzb2x2ZXIgPSAoYVgpID0+IHtcbiAgICAgICAgbGV0IHJldHVyblZhbHVlO1xuXG4gICAgICAgIGlmICghX3ByZWNvbXB1dGVkKSB7XG4gICAgICAgICAgICBwcmVjb21wdXRlKCk7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIC8vIElmIGxpbmVhciBncmFkaWVudCwgcmV0dXJuIFggYXMgVFxuICAgICAgICBpZiAobVgxID09PSBtWTEgJiYgbVgyID09PSBtWTIpIHtcbiAgICAgICAgICAgIHJldHVyblZhbHVlID0gYVg7XG4gICAgICAgICAgICBcbiAgICAgICAgLy8gSWYgYXQgc3RhcnQsIHJldHVybiAwXG4gICAgICAgIH0gZWxzZSBpZiAoYVggPT09IDApIHtcbiAgICAgICAgICAgIHJldHVyblZhbHVlID0gMDtcbiAgICAgICAgICAgIFxuICAgICAgICAvLyBJZiBhdCBlbmQsIHJldHVybiAxXG4gICAgICAgIH0gZWxzZSBpZiAoYVggPT09IDEpIHtcbiAgICAgICAgICAgIHJldHVyblZhbHVlID0gMTtcblxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuVmFsdWUgPSBjYWxjQmV6aWVyKGdldFRGb3JYKGFYKSwgbVkxLCBtWTIpO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICByZXR1cm4gcmV0dXJuVmFsdWU7XG4gICAgfTtcblxuICAgIHJldHVybiByZXNvbHZlcjtcbn1cbiJdfQ==

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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgODhlNGFiNjVjZGU1YjA1ODZkNGEiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xvYWQvZ2xvYmFsLmpzIiwid2VicGFjazovLy8uL3NyYy9wb3Btb3Rpb24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luYy91dGlscy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcHJvY2Vzcy90aW1lci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYWN0aW9ucy9BY3Rpb24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FjdGlvbnMvQWN0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FjdGlvbnMvVHdlZW4uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FjdGlvbnMvUGh5c2ljcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYWN0aW9ucy9UcmFjay5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcHJvY2Vzcy9Qcm9jZXNzLmpzIiwid2VicGFjazovLy8uL3NyYy9pbnB1dC9JbnB1dC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5jL3N0YWdnZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luYy90aW1lbGluZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYWRhcHRlci9hZGFwdGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9hZGFwdGVyL2F0dHItYWRhcHRlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYWRhcHRlci9jc3MtYWRhcHRlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYWRhcHRlci9zdmctYWRhcHRlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYWRhcHRlci9zdmctcGF0aC1hZGFwdGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9hY3Rpb25zL2Vhc2luZy9wcmVzZXQtZWFzaW5nLmpzIiwid2VicGFjazovLy8uL3NyYy9pbmMvY2FsYy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdmFsdWUtdHlwZXMvYWxwaGEuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZhbHVlLXR5cGVzL2FuZ2xlLmpzIiwid2VicGFjazovLy8uL3NyYy92YWx1ZS10eXBlcy9heGVzLmpzIiwid2VicGFjazovLy8uL3NyYy92YWx1ZS10eXBlcy9jb2xvci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdmFsdWUtdHlwZXMvY29tcGxleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdmFsdWUtdHlwZXMvaGV4LmpzIiwid2VicGFjazovLy8uL3NyYy92YWx1ZS10eXBlcy9oc2wuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZhbHVlLXR5cGVzL3Bvc2l0aW9ucy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdmFsdWUtdHlwZXMvcHguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZhbHVlLXR5cGVzL3JnYi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdmFsdWUtdHlwZXMvc2NhbGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZhbHVlLXR5cGVzL3NoYWRvdy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdmFsdWUtdHlwZXMvdW5pdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5jL3RyYW5zZm9ybWVycy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5jL2dlbmVyYXRlLWJsZW5kLWN1cnZlLmpzIiwid2VicGFjazovLy8uL3NyYy9pbmMvYmluZC1hZGFwdGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9wcm9jZXNzL2xvb3AuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2lucHV0L1BvaW50ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FkYXB0ZXIvY3NzL3N0YXRlLW1hcC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYWRhcHRlci9jc3MvdmFsdWUtdHlwZS1tYXAuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FkYXB0ZXIvY3NzL2J1aWxkLmpzIiwid2VicGFjazovLy8uL3NyYy9hZGFwdGVyL2Nzcy9wcmVmaXhlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYWRhcHRlci9jc3MvdHJhbnNmb3JtLXByb3BzLmpzIiwid2VicGFjazovLy8uL3NyYy9hZGFwdGVyL3N2Zy92YWx1ZS10eXBlLW1hcC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYWRhcHRlci9zdmcvYnVpbGQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FkYXB0ZXIvc3ZnLXBhdGgvYnVpbGQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FkYXB0ZXIvc3ZnLXBhdGgvc3RhdGUtbWFwLmpzIiwid2VicGFjazovLy8uL3NyYy92YWx1ZS10eXBlcy9zZXR0aW5ncy9kaWN0aW9uYXJ5LmpzIiwid2VicGFjazovLy8uL3NyYy92YWx1ZS10eXBlcy9zZXR0aW5ncy9kZWZhdWx0LXByb3BzLmpzIiwid2VicGFjazovLy8uL3NyYy9hY3Rpb25zL2Vhc2luZy9jcmVhdGUtZWFzaW5nLmpzIiwid2VicGFjazovLy8uL3NyYy9hY3Rpb25zL2Vhc2luZy9jcmVhdGUtYmV6aWVyLmpzIiwid2VicGFjazovLy8uL3NyYy9wcm9jZXNzL3RpY2suanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Byb2Nlc3MvbWFuYWdlci5qcyIsIndlYnBhY2s6Ly8vLi9+L3Byb2Nlc3MvYnJvd3Nlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdUJBQWU7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSx3Qzs7Ozs7OztBQ3RDQTs7QUFFQTs7QUFFQTs7QUFFQSx3Q0FBdUMsNkJBQTZCLFlBQVksRUFBRSxPQUFPLGlCQUFpQixtQkFBbUIsdUJBQXVCLDRFQUE0RSxFQUFFLEVBQUUsc0JBQXNCLGVBQWUsRUFBRTs7QUFFM1E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsNENBQTJDLG11Qjs7Ozs7O0FDZjNDOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUM7O0FBRUQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUM7O0FBRUQ7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUEsd0NBQXVDLDZCQUE2QixZQUFZLEVBQUUsT0FBTyxpQkFBaUIsbUJBQW1CLHVCQUF1Qiw0RUFBNEUsRUFBRSxFQUFFLHNCQUFzQixlQUFlLEVBQUU7O0FBRTNRLHVDQUFzQyx1Q0FBdUMsZ0JBQWdCOztBQUU3RixtQ0FBa0M7O0FBRWxDOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0VBQWlFLGFBQWE7QUFDOUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxxRUFBb0UsZUFBZTtBQUNuRjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHFFQUFvRSxlQUFlO0FBQ25GO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsNENBQTJDLCsxSDs7Ozs7O0FDaE8zQzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW1CLHFCQUFxQjtBQUN4QztBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsb0JBQW1CLGNBQWM7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFDO0FBQ0Q7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLG9CQUFtQixtQkFBbUI7QUFDdEM7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFD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QUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSx1RkFBc0YsYUFBYTtBQUNuRztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsNENBQTJDLCs2TDs7Ozs7O0FDMUczQzs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVB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O0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLDRDQUEyQyxta1I7Ozs7Ozs7QUNuSjNDOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBcUI7QUFDckI7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsNEJBQTJCO0FBQzNCO0FBQ0E7QUFDQTtBQUNBLDZCQUE0QixVQUFVIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGV4cG9ydHM6IHt9LFxuIFx0XHRcdGlkOiBtb2R1bGVJZCxcbiBcdFx0XHRsb2FkZWQ6IGZhbHNlXG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oMCk7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogd2VicGFjay9ib290c3RyYXAgODhlNGFiNjVjZGU1YjA1ODZkNGFcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbnZhciBfcG9wbW90aW9uID0gcmVxdWlyZSgnLi4vcG9wbW90aW9uJyk7XG5cbnZhciBwb3Btb3Rpb24gPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChfcG9wbW90aW9uKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQob2JqKSB7IGlmIChvYmogJiYgb2JqLl9fZXNNb2R1bGUpIHsgcmV0dXJuIG9iajsgfSBlbHNlIHsgdmFyIG5ld09iaiA9IHt9OyBpZiAob2JqICE9IG51bGwpIHsgZm9yICh2YXIga2V5IGluIG9iaikgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwga2V5KSkgbmV3T2JqW2tleV0gPSBvYmpba2V5XTsgfSB9IG5ld09iai5kZWZhdWx0ID0gb2JqOyByZXR1cm4gbmV3T2JqOyB9IH1cblxudmFyIFVJcmVmID0gd2luZG93Lm1vdGlvbjtcblxucG9wbW90aW9uLm5vQ29uZmxpY3QgPSBmdW5jdGlvbiAoKSB7XG4gICAgd2luZG93Lm1vdGlvbiA9IFVJcmVmO1xufTtcblxud2luZG93Lm1vdGlvbiA9IHdpbmRvdy5wb3Btb3Rpb24gPSBwb3Btb3Rpb247XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5OeVl5OXNiMkZrTDJkc2IySmhiQzVxY3lKZExDSnVZVzFsY3lJNlcxMHNJbTFoY0hCcGJtZHpJam9pT3pzN08wbEJRVmtzVTBGQlV6czdPenRCUVVWeVFpeEpRVUZOTEV0QlFVc3NSMEZCUnl4TlFVRk5MRU5CUVVNc1RVRkJUU3hEUVVGRE96dEJRVVUxUWl4VFFVRlRMRU5CUVVNc1ZVRkJWU3hIUVVGSExGbEJRVms3UVVGREwwSXNWVUZCVFN4RFFVRkRMRTFCUVUwc1IwRkJSeXhMUVVGTExFTkJRVU03UTBGRGVrSXNRMEZCUXpzN1FVRkZSaXhOUVVGTkxFTkJRVU1zVFVGQlRTeEhRVUZITEUxQlFVMHNRMEZCUXl4VFFVRlRMRWRCUVVjc1UwRkJVeXhEUVVGRElpd2labWxzWlNJNkltZHNiMkpoYkM1cWN5SXNJbk52ZFhKalpWSnZiM1FpT2lJdlZYTmxjbk12VFdGMGRGQmxjbko1TDFOcGRHVnpMM0J2Y0cxdmRHbHZiaUlzSW5OdmRYSmpaWE5EYjI1MFpXNTBJanBiSW1sdGNHOXlkQ0FxSUdGeklIQnZjRzF2ZEdsdmJpQm1jbTl0SUNjdUxpOXdiM0J0YjNScGIyNG5PMXh1WEc1amIyNXpkQ0JWU1hKbFppQTlJSGRwYm1SdmR5NXRiM1JwYjI0N1hHNWNibkJ2Y0cxdmRHbHZiaTV1YjBOdmJtWnNhV04wSUQwZ1puVnVZM1JwYjI0Z0tDa2dlMXh1SUNBZ0lIZHBibVJ2ZHk1dGIzUnBiMjRnUFNCVlNYSmxaanRjYm4wN1hHNWNibmRwYm1SdmR5NXRiM1JwYjI0Z1BTQjNhVzVrYjNjdWNHOXdiVzkwYVc5dUlEMGdjRzl3Ylc5MGFXOXVPeUpkZlE9PVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvbG9hZC9nbG9iYWwuanNcbiAqKiBtb2R1bGUgaWQgPSAwXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzLnRyYW5zZm9ybWVycyA9IGV4cG9ydHMudW5pdFR5cGUgPSBleHBvcnRzLnNoYWRvd1R5cGUgPSBleHBvcnRzLnNjYWxlVHlwZSA9IGV4cG9ydHMucmdiVHlwZSA9IGV4cG9ydHMucHhUeXBlID0gZXhwb3J0cy5wb3NpdGlvbnNUeXBlID0gZXhwb3J0cy5oc2xUeXBlID0gZXhwb3J0cy5oZXhUeXBlID0gZXhwb3J0cy5jb21wbGV4VHlwZSA9IGV4cG9ydHMuY29sb3JUeXBlID0gZXhwb3J0cy5heGVzVHlwZSA9IGV4cG9ydHMuYW5nbGVUeXBlID0gZXhwb3J0cy5hbHBoYVR5cGUgPSBleHBvcnRzLnNldEdsb2JhbERpbGF0aW9uID0gZXhwb3J0cy5jb21iaW5lVHJhbnNmb3JtZXJzID0gZXhwb3J0cy51dGlscyA9IGV4cG9ydHMuY2FsYyA9IGV4cG9ydHMuZWFzaW5nID0gZXhwb3J0cy5zdmdQYXRoQWRhcHRlciA9IGV4cG9ydHMuc3ZnQWRhcHRlciA9IGV4cG9ydHMuY3NzQWRhcHRlciA9IGV4cG9ydHMuYXR0ckFkYXB0ZXIgPSBleHBvcnRzLmFkYXB0ZXIgPSBleHBvcnRzLnRpbWVsaW5lID0gZXhwb3J0cy5zdGFnZ2VyID0gZXhwb3J0cy5wcm9jZXNzID0gZXhwb3J0cy5pbnB1dCA9IGV4cG9ydHMudHJhY2sgPSBleHBvcnRzLnBoeXNpY3MgPSBleHBvcnRzLnR3ZWVuID0gZXhwb3J0cy5hY3RvciA9IGV4cG9ydHMuQWN0aW9uID0gdW5kZWZpbmVkO1xuXG52YXIgX3V0aWxzMiA9IHJlcXVpcmUoJy4vaW5jL3V0aWxzJyk7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY29tYmluZVRyYW5zZm9ybWVycycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIF91dGlsczIuY29tYmluZVRyYW5zZm9ybWVycztcbiAgfVxufSk7XG5cbnZhciBfdGltZXIgPSByZXF1aXJlKCcuL3Byb2Nlc3MvdGltZXInKTtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdzZXRHbG9iYWxEaWxhdGlvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIF90aW1lci5zZXRHbG9iYWxEaWxhdGlvbjtcbiAgfVxufSk7XG5cbnZhciBfQWN0aW9uMiA9IHJlcXVpcmUoJy4vYWN0aW9ucy9BY3Rpb24nKTtcblxudmFyIF9BY3Rpb24zID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfQWN0aW9uMik7XG5cbnZhciBfQWN0b3IgPSByZXF1aXJlKCcuL2FjdGlvbnMvQWN0b3InKTtcblxudmFyIF9BY3RvcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9BY3Rvcik7XG5cbnZhciBfVHdlZW4gPSByZXF1aXJlKCcuL2FjdGlvbnMvVHdlZW4nKTtcblxudmFyIF9Ud2VlbjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9Ud2Vlbik7XG5cbnZhciBfUGh5c2ljcyA9IHJlcXVpcmUoJy4vYWN0aW9ucy9QaHlzaWNzJyk7XG5cbnZhciBfUGh5c2ljczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9QaHlzaWNzKTtcblxudmFyIF9UcmFjayA9IHJlcXVpcmUoJy4vYWN0aW9ucy9UcmFjaycpO1xuXG52YXIgX1RyYWNrMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX1RyYWNrKTtcblxudmFyIF9Qcm9jZXNzID0gcmVxdWlyZSgnLi9wcm9jZXNzL1Byb2Nlc3MnKTtcblxudmFyIF9Qcm9jZXNzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX1Byb2Nlc3MpO1xuXG52YXIgX0lucHV0ID0gcmVxdWlyZSgnLi9pbnB1dC9JbnB1dCcpO1xuXG52YXIgX0lucHV0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX0lucHV0KTtcblxudmFyIF9zdGFnZ2VyMiA9IHJlcXVpcmUoJy4vaW5jL3N0YWdnZXInKTtcblxudmFyIF9zdGFnZ2VyMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3N0YWdnZXIyKTtcblxudmFyIF90aW1lbGluZTIgPSByZXF1aXJlKCcuL2luYy90aW1lbGluZScpO1xuXG52YXIgX3RpbWVsaW5lMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3RpbWVsaW5lMik7XG5cbnZhciBfYWRhcHRlcjIgPSByZXF1aXJlKCcuL2FkYXB0ZXIvYWRhcHRlcicpO1xuXG52YXIgX2FkYXB0ZXIzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfYWRhcHRlcjIpO1xuXG52YXIgX2F0dHJBZGFwdGVyMiA9IHJlcXVpcmUoJy4vYWRhcHRlci9hdHRyLWFkYXB0ZXInKTtcblxudmFyIF9hdHRyQWRhcHRlcjMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9hdHRyQWRhcHRlcjIpO1xuXG52YXIgX2Nzc0FkYXB0ZXIyID0gcmVxdWlyZSgnLi9hZGFwdGVyL2Nzcy1hZGFwdGVyJyk7XG5cbnZhciBfY3NzQWRhcHRlcjMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jc3NBZGFwdGVyMik7XG5cbnZhciBfc3ZnQWRhcHRlcjIgPSByZXF1aXJlKCcuL2FkYXB0ZXIvc3ZnLWFkYXB0ZXInKTtcblxudmFyIF9zdmdBZGFwdGVyMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3N2Z0FkYXB0ZXIyKTtcblxudmFyIF9zdmdQYXRoQWRhcHRlcjIgPSByZXF1aXJlKCcuL2FkYXB0ZXIvc3ZnLXBhdGgtYWRhcHRlcicpO1xuXG52YXIgX3N2Z1BhdGhBZGFwdGVyMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3N2Z1BhdGhBZGFwdGVyMik7XG5cbnZhciBfcHJlc2V0RWFzaW5nID0gcmVxdWlyZSgnLi9hY3Rpb25zL2Vhc2luZy9wcmVzZXQtZWFzaW5nJyk7XG5cbnZhciBfcHJlc2V0RWFzaW5nMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3ByZXNldEVhc2luZyk7XG5cbnZhciBfY2FsYzIgPSByZXF1aXJlKCcuL2luYy9jYWxjJyk7XG5cbnZhciBfY2FsYyA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKF9jYWxjMik7XG5cbnZhciBfdXRpbHMgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChfdXRpbHMyKTtcblxudmFyIF9hbHBoYSA9IHJlcXVpcmUoJy4vdmFsdWUtdHlwZXMvYWxwaGEnKTtcblxudmFyIF9hbHBoYTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9hbHBoYSk7XG5cbnZhciBfYW5nbGUgPSByZXF1aXJlKCcuL3ZhbHVlLXR5cGVzL2FuZ2xlJyk7XG5cbnZhciBfYW5nbGUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfYW5nbGUpO1xuXG52YXIgX2F4ZXMgPSByZXF1aXJlKCcuL3ZhbHVlLXR5cGVzL2F4ZXMnKTtcblxudmFyIF9heGVzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2F4ZXMpO1xuXG52YXIgX2NvbG9yID0gcmVxdWlyZSgnLi92YWx1ZS10eXBlcy9jb2xvcicpO1xuXG52YXIgX2NvbG9yMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NvbG9yKTtcblxudmFyIF9jb21wbGV4ID0gcmVxdWlyZSgnLi92YWx1ZS10eXBlcy9jb21wbGV4Jyk7XG5cbnZhciBfY29tcGxleDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jb21wbGV4KTtcblxudmFyIF9oZXggPSByZXF1aXJlKCcuL3ZhbHVlLXR5cGVzL2hleCcpO1xuXG52YXIgX2hleDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9oZXgpO1xuXG52YXIgX2hzbCA9IHJlcXVpcmUoJy4vdmFsdWUtdHlwZXMvaHNsJyk7XG5cbnZhciBfaHNsMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2hzbCk7XG5cbnZhciBfcG9zaXRpb25zID0gcmVxdWlyZSgnLi92YWx1ZS10eXBlcy9wb3NpdGlvbnMnKTtcblxudmFyIF9wb3NpdGlvbnMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcG9zaXRpb25zKTtcblxudmFyIF9weCA9IHJlcXVpcmUoJy4vdmFsdWUtdHlwZXMvcHgnKTtcblxudmFyIF9weDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9weCk7XG5cbnZhciBfcmdiID0gcmVxdWlyZSgnLi92YWx1ZS10eXBlcy9yZ2InKTtcblxudmFyIF9yZ2IyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmdiKTtcblxudmFyIF9zY2FsZSA9IHJlcXVpcmUoJy4vdmFsdWUtdHlwZXMvc2NhbGUnKTtcblxudmFyIF9zY2FsZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9zY2FsZSk7XG5cbnZhciBfc2hhZG93ID0gcmVxdWlyZSgnLi92YWx1ZS10eXBlcy9zaGFkb3cnKTtcblxudmFyIF9zaGFkb3cyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfc2hhZG93KTtcblxudmFyIF91bml0ID0gcmVxdWlyZSgnLi92YWx1ZS10eXBlcy91bml0Jyk7XG5cbnZhciBfdW5pdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF91bml0KTtcblxudmFyIF90cmFuc2Zvcm1lcnMyID0gcmVxdWlyZSgnLi9pbmMvdHJhbnNmb3JtZXJzJyk7XG5cbnZhciBfdHJhbnNmb3JtZXJzID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQoX3RyYW5zZm9ybWVyczIpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChvYmopIHsgaWYgKG9iaiAmJiBvYmouX19lc01vZHVsZSkgeyByZXR1cm4gb2JqOyB9IGVsc2UgeyB2YXIgbmV3T2JqID0ge307IGlmIChvYmogIT0gbnVsbCkgeyBmb3IgKHZhciBrZXkgaW4gb2JqKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBrZXkpKSBuZXdPYmpba2V5XSA9IG9ialtrZXldOyB9IH0gbmV3T2JqLmRlZmF1bHQgPSBvYmo7IHJldHVybiBuZXdPYmo7IH0gfVxuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5leHBvcnRzLkFjdGlvbiA9IF9BY3Rpb24zLmRlZmF1bHQ7IC8vIEFjdGlvbnNcblxuLy8gUHJvY2Vzc1xuXG4vLyBJbnB1dFxuXG52YXIgYWN0b3IgPSBleHBvcnRzLmFjdG9yID0gZnVuY3Rpb24gKHByb3BzKSB7XG4gIHJldHVybiBuZXcgX0FjdG9yMi5kZWZhdWx0KHByb3BzKTtcbn07XG52YXIgdHdlZW4gPSBleHBvcnRzLnR3ZWVuID0gZnVuY3Rpb24gKHByb3BzKSB7XG4gIHJldHVybiBuZXcgX1R3ZWVuMi5kZWZhdWx0KHByb3BzKTtcbn07XG52YXIgcGh5c2ljcyA9IGV4cG9ydHMucGh5c2ljcyA9IGZ1bmN0aW9uIChwcm9wcykge1xuICByZXR1cm4gbmV3IF9QaHlzaWNzMi5kZWZhdWx0KHByb3BzKTtcbn07XG52YXIgdHJhY2sgPSBleHBvcnRzLnRyYWNrID0gZnVuY3Rpb24gKCkge1xuICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgIGFyZ3NbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gIH1cblxuICByZXR1cm4gbmV3IChGdW5jdGlvbi5wcm90b3R5cGUuYmluZC5hcHBseShfVHJhY2syLmRlZmF1bHQsIFtudWxsXS5jb25jYXQoYXJncykpKSgpO1xufTtcbnZhciBpbnB1dCA9IGV4cG9ydHMuaW5wdXQgPSBmdW5jdGlvbiAoKSB7XG4gIGZvciAodmFyIF9sZW4yID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IEFycmF5KF9sZW4yKSwgX2tleTIgPSAwOyBfa2V5MiA8IF9sZW4yOyBfa2V5MisrKSB7XG4gICAgYXJnc1tfa2V5Ml0gPSBhcmd1bWVudHNbX2tleTJdO1xuICB9XG5cbiAgcmV0dXJuIG5ldyAoRnVuY3Rpb24ucHJvdG90eXBlLmJpbmQuYXBwbHkoX0lucHV0Mi5kZWZhdWx0LCBbbnVsbF0uY29uY2F0KGFyZ3MpKSkoKTtcbn07XG52YXIgcHJvY2VzcyA9IGV4cG9ydHMucHJvY2VzcyA9IGZ1bmN0aW9uICgpIHtcbiAgZm9yICh2YXIgX2xlbjMgPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gQXJyYXkoX2xlbjMpLCBfa2V5MyA9IDA7IF9rZXkzIDwgX2xlbjM7IF9rZXkzKyspIHtcbiAgICBhcmdzW19rZXkzXSA9IGFyZ3VtZW50c1tfa2V5M107XG4gIH1cblxuICByZXR1cm4gbmV3IChGdW5jdGlvbi5wcm90b3R5cGUuYmluZC5hcHBseShfUHJvY2VzczIuZGVmYXVsdCwgW251bGxdLmNvbmNhdChhcmdzKSkpKCk7XG59O1xuZXhwb3J0cy5zdGFnZ2VyID0gX3N0YWdnZXIzLmRlZmF1bHQ7XG5leHBvcnRzLnRpbWVsaW5lID0gX3RpbWVsaW5lMy5kZWZhdWx0O1xuXG4vLyBBZGFwdGVyc1xuXG5leHBvcnRzLmFkYXB0ZXIgPSBfYWRhcHRlcjMuZGVmYXVsdDtcbmV4cG9ydHMuYXR0ckFkYXB0ZXIgPSBfYXR0ckFkYXB0ZXIzLmRlZmF1bHQ7XG5leHBvcnRzLmNzc0FkYXB0ZXIgPSBfY3NzQWRhcHRlcjMuZGVmYXVsdDtcbmV4cG9ydHMuc3ZnQWRhcHRlciA9IF9zdmdBZGFwdGVyMy5kZWZhdWx0O1xuZXhwb3J0cy5zdmdQYXRoQWRhcHRlciA9IF9zdmdQYXRoQWRhcHRlcjMuZGVmYXVsdDtcblxuLy8gRWFzaW5nXG5cbmV4cG9ydHMuZWFzaW5nID0gX3ByZXNldEVhc2luZzIuZGVmYXVsdDtcblxuLy8gVXRpbHNcblxuZXhwb3J0cy5jYWxjID0gX2NhbGM7XG5leHBvcnRzLnV0aWxzID0gX3V0aWxzO1xuXG4vLyBWYWx1ZSB0eXBlc1xuXG5leHBvcnRzLmFscGhhVHlwZSA9IF9hbHBoYTIuZGVmYXVsdDtcbmV4cG9ydHMuYW5nbGVUeXBlID0gX2FuZ2xlMi5kZWZhdWx0O1xuZXhwb3J0cy5heGVzVHlwZSA9IF9heGVzMi5kZWZhdWx0O1xuZXhwb3J0cy5jb2xvclR5cGUgPSBfY29sb3IyLmRlZmF1bHQ7XG5leHBvcnRzLmNvbXBsZXhUeXBlID0gX2NvbXBsZXgyLmRlZmF1bHQ7XG5leHBvcnRzLmhleFR5cGUgPSBfaGV4Mi5kZWZhdWx0O1xuZXhwb3J0cy5oc2xUeXBlID0gX2hzbDIuZGVmYXVsdDtcbmV4cG9ydHMucG9zaXRpb25zVHlwZSA9IF9wb3NpdGlvbnMyLmRlZmF1bHQ7XG5leHBvcnRzLnB4VHlwZSA9IF9weDIuZGVmYXVsdDtcbmV4cG9ydHMucmdiVHlwZSA9IF9yZ2IyLmRlZmF1bHQ7XG5leHBvcnRzLnNjYWxlVHlwZSA9IF9zY2FsZTIuZGVmYXVsdDtcbmV4cG9ydHMuc2hhZG93VHlwZSA9IF9zaGFkb3cyLmRlZmF1bHQ7XG5leHBvcnRzLnVuaXRUeXBlID0gX3VuaXQyLmRlZmF1bHQ7XG5cbi8vIFRyYW5zZm9ybWVyc1xuXG5leHBvcnRzLnRyYW5zZm9ybWVycyA9IF90cmFuc2Zvcm1lcnM7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5OeVl5OXdiM0J0YjNScGIyNHVhbk1pWFN3aWJtRnRaWE1pT2x0ZExDSnRZWEJ3YVc1bmN5STZJanM3T3pzN096czdPenR0UWtGclEzRkNMRzFDUVVGdFFqczdPenM3T3pzN08ydENRVU12UWl4cFFrRkJhVUk3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN1VVRnNRMjVDTEUxQlFVMDdPenM3T3p0QlFWbE9MRWxCUVUwc1MwRkJTeXhYUVVGTUxFdEJRVXNzUjBGQlJ5eFZRVUZETEV0QlFVczdVMEZCU3l4dlFrRkJWU3hMUVVGTExFTkJRVU03UTBGQlFTeERRVUZETzBGQlF6RkRMRWxCUVUwc1MwRkJTeXhYUVVGTUxFdEJRVXNzUjBGQlJ5eFZRVUZETEV0QlFVczdVMEZCU3l4dlFrRkJWU3hMUVVGTExFTkJRVU03UTBGQlFTeERRVUZETzBGQlF6RkRMRWxCUVUwc1QwRkJUeXhYUVVGUUxFOUJRVThzUjBGQlJ5eFZRVUZETEV0QlFVczdVMEZCU3l4elFrRkJXU3hMUVVGTExFTkJRVU03UTBGQlFTeERRVUZETzBGQlF6bERMRWxCUVUwc1MwRkJTeXhYUVVGTUxFdEJRVXNzUjBGQlJ6dHZRMEZCU1N4SlFVRkpPMEZCUVVvc1VVRkJTVHM3T3pKRlFVRnJRaXhKUVVGSk8wTkJRVU1zUTBGQlF6dEJRVU01UXl4SlFVRk5MRXRCUVVzc1YwRkJUQ3hMUVVGTExFZEJRVWM3Y1VOQlFVa3NTVUZCU1R0QlFVRktMRkZCUVVrN096c3lSVUZCYTBJc1NVRkJTVHREUVVGRExFTkJRVU03UVVGRE9VTXNTVUZCVFN4UFFVRlBMRmRCUVZBc1QwRkJUeXhIUVVGSE8zRkRRVUZKTEVsQlFVazdRVUZCU2l4UlFVRkpPenM3TmtWQlFXOUNMRWxCUVVrN1EwRkJReXhEUVVGRE8xRkJRMnhFTEU5QlFVODdVVUZEVUN4UlFVRlJPenM3TzFGQlIxSXNUMEZCVHp0UlFVTlFMRmRCUVZjN1VVRkRXQ3hWUVVGVk8xRkJRMVlzVlVGQlZUdFJRVU5XTEdOQlFXTTdPenM3VVVGSFpDeE5RVUZOT3pzN08xRkJSMFFzU1VGQlNUdFJRVU5LTEV0QlFVczdPenM3VVVGSlZpeFRRVUZUTzFGQlExUXNVMEZCVXp0UlFVTlVMRkZCUVZFN1VVRkRVaXhUUVVGVE8xRkJRMVFzVjBGQlZ6dFJRVU5ZTEU5QlFVODdVVUZEVUN4UFFVRlBPMUZCUTFBc1lVRkJZVHRSUVVOaUxFMUJRVTA3VVVGRFRpeFBRVUZQTzFGQlExQXNVMEZCVXp0UlFVTlVMRlZCUVZVN1VVRkRWaXhSUVVGUk96czdPMUZCUjBnc1dVRkJXU0lzSW1acGJHVWlPaUp3YjNCdGIzUnBiMjR1YW5NaUxDSnpiM1Z5WTJWU2IyOTBJam9pTDFWelpYSnpMMDFoZEhSUVpYSnllUzlUYVhSbGN5OXdiM0J0YjNScGIyNGlMQ0p6YjNWeVkyVnpRMjl1ZEdWdWRDSTZXeUl2THlCQlkzUnBiMjV6WEc1bGVIQnZjblFnUVdOMGFXOXVJR1p5YjIwZ0p5NHZZV04wYVc5dWN5OUJZM1JwYjI0bk8xeHVhVzF3YjNKMElFRmpkRzl5SUdaeWIyMGdKeTR2WVdOMGFXOXVjeTlCWTNSdmNpYzdYRzVwYlhCdmNuUWdWSGRsWlc0Z1puSnZiU0FuTGk5aFkzUnBiMjV6TDFSM1pXVnVKenRjYm1sdGNHOXlkQ0JRYUhsemFXTnpJR1p5YjIwZ0p5NHZZV04wYVc5dWN5OVFhSGx6YVdOekp6dGNibWx0Y0c5eWRDQlVjbUZqYXlCbWNtOXRJQ2N1TDJGamRHbHZibk12VkhKaFkyc25PMXh1WEc0dkx5QlFjbTlqWlhOelhHNXBiWEJ2Y25RZ1VISnZZMlZ6Y3lCbWNtOXRJQ2N1TDNCeWIyTmxjM012VUhKdlkyVnpjeWM3WEc1Y2JpOHZJRWx1Y0hWMFhHNXBiWEJ2Y25RZ1NXNXdkWFFnWm5KdmJTQW5MaTlwYm5CMWRDOUpibkIxZENjN1hHNWNibVY0Y0c5eWRDQmpiMjV6ZENCaFkzUnZjaUE5SUNod2NtOXdjeWtnUFQ0Z2JtVjNJRUZqZEc5eUtIQnliM0J6S1R0Y2JtVjRjRzl5ZENCamIyNXpkQ0IwZDJWbGJpQTlJQ2h3Y205d2N5a2dQVDRnYm1WM0lGUjNaV1Z1S0hCeWIzQnpLVHRjYm1WNGNHOXlkQ0JqYjI1emRDQndhSGx6YVdOeklEMGdLSEJ5YjNCektTQTlQaUJ1WlhjZ1VHaDVjMmxqY3lod2NtOXdjeWs3WEc1bGVIQnZjblFnWTI5dWMzUWdkSEpoWTJzZ1BTQW9MaTR1WVhKbmN5a2dQVDRnYm1WM0lGUnlZV05yS0M0dUxtRnlaM01wTzF4dVpYaHdiM0owSUdOdmJuTjBJR2x1Y0hWMElEMGdLQzR1TG1GeVozTXBJRDArSUc1bGR5QkpibkIxZENndUxpNWhjbWR6S1R0Y2JtVjRjRzl5ZENCamIyNXpkQ0J3Y205alpYTnpJRDBnS0M0dUxtRnlaM01wSUQwK0lHNWxkeUJRY205alpYTnpLQzR1TG1GeVozTXBPMXh1Wlhod2IzSjBJSE4wWVdkblpYSWdabkp2YlNBbkxpOXBibU12YzNSaFoyZGxjaWM3WEc1bGVIQnZjblFnZEdsdFpXeHBibVVnWm5KdmJTQW5MaTlwYm1NdmRHbHRaV3hwYm1Vbk8xeHVYRzR2THlCQlpHRndkR1Z5YzF4dVpYaHdiM0owSUdGa1lYQjBaWElnWm5KdmJTQW5MaTloWkdGd2RHVnlMMkZrWVhCMFpYSW5PMXh1Wlhod2IzSjBJR0YwZEhKQlpHRndkR1Z5SUdaeWIyMGdKeTR2WVdSaGNIUmxjaTloZEhSeUxXRmtZWEIwWlhJbk8xeHVaWGh3YjNKMElHTnpjMEZrWVhCMFpYSWdabkp2YlNBbkxpOWhaR0Z3ZEdWeUwyTnpjeTFoWkdGd2RHVnlKenRjYm1WNGNHOXlkQ0J6ZG1kQlpHRndkR1Z5SUdaeWIyMGdKeTR2WVdSaGNIUmxjaTl6ZG1jdFlXUmhjSFJsY2ljN1hHNWxlSEJ2Y25RZ2MzWm5VR0YwYUVGa1lYQjBaWElnWm5KdmJTQW5MaTloWkdGd2RHVnlMM04yWnkxd1lYUm9MV0ZrWVhCMFpYSW5PMXh1WEc0dkx5QkZZWE5wYm1kY2JtVjRjRzl5ZENCbFlYTnBibWNnWm5KdmJTQW5MaTloWTNScGIyNXpMMlZoYzJsdVp5OXdjbVZ6WlhRdFpXRnphVzVuSnp0Y2JseHVMeThnVlhScGJITmNibVY0Y0c5eWRDQXFJR0Z6SUdOaGJHTWdabkp2YlNBbkxpOXBibU12WTJGc1l5YzdYRzVsZUhCdmNuUWdLaUJoY3lCMWRHbHNjeXdnZXlCamIyMWlhVzVsVkhKaGJuTm1iM0p0WlhKeklIMGdabkp2YlNBbkxpOXBibU12ZFhScGJITW5PMXh1Wlhod2IzSjBJSHNnYzJWMFIyeHZZbUZzUkdsc1lYUnBiMjRnZlNCbWNtOXRJQ2N1TDNCeWIyTmxjM012ZEdsdFpYSW5PMXh1WEc0dkx5QldZV3gxWlNCMGVYQmxjMXh1Wlhod2IzSjBJR0ZzY0doaFZIbHdaU0JtY205dElDY3VMM1poYkhWbExYUjVjR1Z6TDJGc2NHaGhKenRjYm1WNGNHOXlkQ0JoYm1kc1pWUjVjR1VnWm5KdmJTQW5MaTkyWVd4MVpTMTBlWEJsY3k5aGJtZHNaU2M3WEc1bGVIQnZjblFnWVhobGMxUjVjR1VnWm5KdmJTQW5MaTkyWVd4MVpTMTBlWEJsY3k5aGVHVnpKenRjYm1WNGNHOXlkQ0JqYjJ4dmNsUjVjR1VnWm5KdmJTQW5MaTkyWVd4MVpTMTBlWEJsY3k5amIyeHZjaWM3WEc1bGVIQnZjblFnWTI5dGNHeGxlRlI1Y0dVZ1puSnZiU0FuTGk5MllXeDFaUzEwZVhCbGN5OWpiMjF3YkdWNEp6dGNibVY0Y0c5eWRDQm9aWGhVZVhCbElHWnliMjBnSnk0dmRtRnNkV1V0ZEhsd1pYTXZhR1Y0Snp0Y2JtVjRjRzl5ZENCb2MyeFVlWEJsSUdaeWIyMGdKeTR2ZG1Gc2RXVXRkSGx3WlhNdmFITnNKenRjYm1WNGNHOXlkQ0J3YjNOcGRHbHZibk5VZVhCbElHWnliMjBnSnk0dmRtRnNkV1V0ZEhsd1pYTXZjRzl6YVhScGIyNXpKenRjYm1WNGNHOXlkQ0J3ZUZSNWNHVWdabkp2YlNBbkxpOTJZV3gxWlMxMGVYQmxjeTl3ZUNjN1hHNWxlSEJ2Y25RZ2NtZGlWSGx3WlNCbWNtOXRJQ2N1TDNaaGJIVmxMWFI1Y0dWekwzSm5ZaWM3WEc1bGVIQnZjblFnYzJOaGJHVlVlWEJsSUdaeWIyMGdKeTR2ZG1Gc2RXVXRkSGx3WlhNdmMyTmhiR1VuTzF4dVpYaHdiM0owSUhOb1lXUnZkMVI1Y0dVZ1puSnZiU0FuTGk5MllXeDFaUzEwZVhCbGN5OXphR0ZrYjNjbk8xeHVaWGh3YjNKMElIVnVhWFJVZVhCbElHWnliMjBnSnk0dmRtRnNkV1V0ZEhsd1pYTXZkVzVwZENjN1hHNWNiaTh2SUZSeVlXNXpabTl5YldWeWMxeHVaWGh3YjNKMElDb2dZWE1nZEhKaGJuTm1iM0p0WlhKeklHWnliMjBnSnk0dmFXNWpMM1J5WVc1elptOXliV1Z5Y3ljN0lsMTlcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL3BvcG1vdGlvbi5qc1xuICoqIG1vZHVsZSBpZCA9IDFcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbnZhciBDQU1FTF9DQVNFX1BBVFRFUk4gPSAvKFthLXpdKShbQS1aXSkvZztcbnZhciBSRVBMQUNFX1RFTVBMQVRFID0gJyQxLSQyJztcbnZhciBIQVNfUEVSRk9STUFOQ0VfTk9XID0gdHlwZW9mIHBlcmZvcm1hbmNlICE9PSAndW5kZWZpbmVkJyAmJiBwZXJmb3JtYW5jZS5ub3c7XG5cbi8qXG4gICAgR2V0IHZhciB0eXBlIGFzIHN0cmluZ1xuICAgIFxuICAgIEBwYXJhbTogVmFyaWFibGUgdG8gdGVzdFxuICAgIEByZXR1cm4gW3N0cmluZ106IFJldHVybnMsIGZvciBpbnN0YW5jZSAnT2JqZWN0JyBpZiBbb2JqZWN0IE9iamVjdF1cbiovXG52YXIgdmFyVHlwZSA9IGZ1bmN0aW9uICh2YXJpYWJsZSkge1xuICAgIHJldHVybiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwodmFyaWFibGUpLnNsaWNlKDgsIC0xKTtcbn07XG5cbi8qXG4gICAgQ29udmVydCBjYW1lbENhc2UgdG8gZGFzaC1jYXNlXG5cbiAgICBAcGFyYW0gW3N0cmluZ11cbiAgICBAcmV0dXJuIFtzdHJpbmddXG4qL1xudmFyIGNhbWVsVG9EYXNoID0gZXhwb3J0cy5jYW1lbFRvRGFzaCA9IGZ1bmN0aW9uIChzdHJpbmcpIHtcbiAgICByZXR1cm4gc3RyaW5nLnJlcGxhY2UoQ0FNRUxfQ0FTRV9QQVRURVJOLCBSRVBMQUNFX1RFTVBMQVRFKS50b0xvd2VyQ2FzZSgpO1xufTtcblxuLypcbiAgICBDb21iaW5lIHRyYW5zZm9ybWVycyBpbnRvIG9uZSBmdW5jdGlvbiB0aGF0IGNhbGxzIGV2ZXJ5XG4gICAgdHJhbnNmb3JtZXIgaW4gdGhlIGFycmF5IGFuZCByZXR1cm5zIHRoZSByZXN1bHRcblxuICAgIEBwYXJhbSBbYXJyYXldXG4gICAgQHJldHVybiBbZnVuY3Rpb25dXG4qL1xudmFyIGNvbWJpbmVUcmFuc2Zvcm1lcnMgPSBleHBvcnRzLmNvbWJpbmVUcmFuc2Zvcm1lcnMgPSBmdW5jdGlvbiAodHJhbnNmb3JtZXJzKSB7XG4gICAgdmFyIG51bVRyYW5zZm9ybWVycyA9IHRyYW5zZm9ybWVycy5sZW5ndGg7XG4gICAgdmFyIGkgPSAwO1xuXG4gICAgLypcbiAgICAgICAgQHBhcmFtIFtudW1iZXJdXG4gICAgICAgIEBwYXJhbSBbc3RyaW5nXVxuICAgICAgICBAcGFyYW0gW0FjdGlvbl1cbiAgICAgICAgQHJldHVybiBbbnVtYmVyXVxuICAgICovXG4gICAgcmV0dXJuIGZ1bmN0aW9uICh2LCBrZXksIGEpIHtcbiAgICAgICAgZm9yIChpID0gMDsgaSA8IG51bVRyYW5zZm9ybWVyczsgaSsrKSB7XG4gICAgICAgICAgICB2ID0gdHJhbnNmb3JtZXJzW2ldKHYsIGtleSwgYSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdjtcbiAgICB9O1xufTtcblxudmFyIGNyZWF0ZURlbGltaXRlZCA9IGV4cG9ydHMuY3JlYXRlRGVsaW1pdGVkID0gZnVuY3Rpb24gKHZhbHVlcywgdGVybXMsIGRlbGltaXRlciwgY2hvcCkge1xuICAgIHZhciBudW1UZXJtcyA9IHRlcm1zLmxlbmd0aDtcbiAgICB2YXIgY29tYmluZWQgPSAnJztcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbnVtVGVybXM7IGkrKykge1xuICAgICAgICB2YXIgdGVybSA9IHRlcm1zW2ldO1xuICAgICAgICBpZiAodmFsdWVzLmhhc093blByb3BlcnR5KHRlcm0pKSB7XG4gICAgICAgICAgICBjb21iaW5lZCArPSB2YWx1ZXNbdGVybV0gKyBkZWxpbWl0ZXI7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoY2hvcCkge1xuICAgICAgICBjb21iaW5lZCA9IGNvbWJpbmVkLnNsaWNlKDAsIC1jaG9wKTtcbiAgICB9XG5cbiAgICByZXR1cm4gY29tYmluZWQ7XG59O1xuXG4vKlxuICAgIENyZWF0ZSBhIGZ1bmN0aW9uIHN0cmluZ1xuXG4gICAgJzIwcHgnLCAndHJhbnNsYXRlJyAtPiAndHJhbnNsYXRlKDIwcHgpJ1xuXG4gICAgQHBhcmFtIFtzdHJpbmddXG4gICAgQHBhcmFtIFtzdHJpbmddXG4gICAgQHJldHVybiBbc3RyaW5nXVxuKi9cbnZhciBjcmVhdGVGdW5jdGlvblN0cmluZyA9IGV4cG9ydHMuY3JlYXRlRnVuY3Rpb25TdHJpbmcgPSBmdW5jdGlvbiAodmFsdWUsIHByZWZpeCkge1xuICAgIHJldHVybiBwcmVmaXggKyAnKCcgKyB2YWx1ZSArICcpJztcbn07XG5cbi8qXG4gICAgR2VuZXJhdGUgY3VycmVudCB0aW1lc3RhbXBcbiAgICBcbiAgICBAcmV0dXJuIFt0aW1lc3RhbXBdOiBDdXJyZW50IFVOSVggdGltZXN0YW1wXG4qL1xudmFyIGN1cnJlbnRUaW1lID0gZXhwb3J0cy5jdXJyZW50VGltZSA9IEhBU19QRVJGT1JNQU5DRV9OT1cgPyBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHBlcmZvcm1hbmNlLm5vdygpO1xufSA6IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gbmV3IERhdGUoKS5nZXRUaW1lKCk7XG59O1xuXG4vKlxuICAgIFNwbGl0IGNvbG9yIHN0cmluZyBpbnRvIG1hcCBvZiBjb2xvciBwcm9wZXJ0aWVzXG5cbiAgICBcInJnYmEoMjU1LCAyNTUsIDI1NSwgMClcIiwgW1wiUmVkXCIsICdHcmVlblwiLCBcIkJsdWVcIiwgXCJBbHBoYVwiXVxuXG4gICAgeyBSZWQ6IDI1NS4uLiB9XG4qL1xudmFyIGdldENvbG9yVmFsdWVzID0gZXhwb3J0cy5nZXRDb2xvclZhbHVlcyA9IGZ1bmN0aW9uICh2YWx1ZSwgY29sb3JUZXJtcykge1xuICAgIHZhciBudW1Db2xvclRlcm1zID0gY29sb3JUZXJtcy5sZW5ndGg7XG4gICAgdmFyIGNvbG9yVmFsdWVzID0ge307XG4gICAgdmFyIGNvbG9ycyA9IHNwbGl0Q29tbWFEZWxpbWl0ZWQoZ2V0VmFsdWVGcm9tRnVuY3Rpb25TdHJpbmcodmFsdWUpKTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbnVtQ29sb3JUZXJtczsgaSsrKSB7XG4gICAgICAgIGNvbG9yVmFsdWVzW2NvbG9yVGVybXNbaV1dID0gY29sb3JzW2ldICE9PSB1bmRlZmluZWQgPyBjb2xvcnNbaV0gOiAxO1xuICAgIH1cblxuICAgIHJldHVybiBjb2xvclZhbHVlcztcbn07XG5cbi8qXG4gICAgR2V0IHZhbHVlIGZyb20gZnVuY3Rpb24gc3RyaW5nXG5cbiAgICBcInRyYW5zbGF0ZVgoMjBweClcIiAtPiBcIjIwcHhcIlxuKi9cbnZhciBnZXRWYWx1ZUZyb21GdW5jdGlvblN0cmluZyA9IGV4cG9ydHMuZ2V0VmFsdWVGcm9tRnVuY3Rpb25TdHJpbmcgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICByZXR1cm4gdmFsdWUuc3Vic3RyaW5nKHZhbHVlLmluZGV4T2YoJygnKSArIDEsIHZhbHVlLmxhc3RJbmRleE9mKCcpJykpO1xufTtcblxuLypcbiAgICBDaGVjayBpZiB0d28gb2JqZWN0cyBoYXZlIGNoYW5nZWQgZnJvbSBlYWNoIG90aGVyXG4gICAgXG4gICAgQHBhcmFtIFtvYmplY3RdOiBJbnB1dCBBXG4gICAgQHBhcmFtIFtvYmplY3RdOiBJbnB1dCBCXG4gICAgQHJldHVybiBbYm9vbGVhbl06IFRydWUgaWYgZGlmZmVyZW50XG4qL1xudmFyIGhhc0NoYW5nZWQgPSBleHBvcnRzLmhhc0NoYW5nZWQgPSBmdW5jdGlvbiAoYSwgYikge1xuICAgIHZhciBjaGFuZ2VkID0gZmFsc2U7XG5cbiAgICBmb3IgKHZhciBrZXkgaW4gYSkge1xuICAgICAgICBpZiAoYS5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgICBpZiAoaGFzUHJvcGVydHkoYiwga2V5KSkge1xuICAgICAgICAgICAgICAgIGlmIChhW2tleV0gIT09IGJba2V5XSkge1xuICAgICAgICAgICAgICAgICAgICBjaGFuZ2VkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNoYW5nZWQgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGNoYW5nZWQ7XG59O1xuXG4vKlxuICAgIENoZWNrIGlmIG9iamVjdCBoYXMgcHJvcGVydHkgYW5kIGl0IGlzbid0IHVuZGVmaW5lZFxuXG4gICAgQHBhcmFtIFtvYmplY3RdXG4gICAgQHBhcmFtIFtzdHJpbmddXG4gICAgQHJldHVybiBbYm9vbGVhbl1cbiovXG52YXIgaGFzUHJvcGVydHkgPSBleHBvcnRzLmhhc1Byb3BlcnR5ID0gZnVuY3Rpb24gKG9iamVjdCwgcHJvcGVydHlOYW1lKSB7XG4gICAgcmV0dXJuIG9iamVjdC5oYXNPd25Qcm9wZXJ0eShwcm9wZXJ0eU5hbWUpICYmIG9iamVjdFtwcm9wZXJ0eU5hbWVdICE9PSB1bmRlZmluZWQ7XG59O1xuXG4vKlxuICAgIElzIHV0aWxzIHZhciBhbiBhcnJheSA/IFxuICAgIFxuICAgIEBwYXJhbTogVmFyaWFibGUgdG8gdGVzdFxuICAgIEByZXR1cm4gW2Jvb2xlYW5dOiBSZXR1cm5zIHRydWUgaWYgdXRpbHMudmFyVHlwZSA9PT0gJ0FycmF5J1xuKi9cbnZhciBpc0FycmF5ID0gZXhwb3J0cy5pc0FycmF5ID0gZnVuY3Rpb24gKGFycikge1xuICAgIHJldHVybiB2YXJUeXBlKGFycikgPT09ICdBcnJheSc7XG59O1xuXG4vKlxuICAgIElzIHV0aWxzIHZhciBhIGZ1bmN0aW9uID8gXG4gICAgXG4gICAgQHBhcmFtOiBWYXJpYWJsZSB0byB0ZXN0XG4gICAgQHJldHVybiBbYm9vbGVhbl06IFJldHVybnMgdHJ1ZSBpZiB1dGlscy52YXJUeXBlID09PSAnRnVuY3Rpb24nXG4qL1xudmFyIGlzRnVuYyA9IGV4cG9ydHMuaXNGdW5jID0gZnVuY3Rpb24gKG9iaikge1xuICAgIHJldHVybiB2YXJUeXBlKG9iaikgPT09ICdGdW5jdGlvbic7XG59O1xuXG4vKlxuICAgIElzIHV0aWxzIHZhciBhIG51bWJlcj9cbiAgICBcbiAgICBAcGFyYW06IFZhcmlhYmxlIHRvIHRlc3RcbiAgICBAcmV0dXJuIFtib29sZWFuXTogUmV0dXJucyB0cnVlIGlmIHR5cGVvZiA9PT0gJ251bWJlcidcbiovXG52YXIgaXNOdW0gPSBleHBvcnRzLmlzTnVtID0gZnVuY3Rpb24gKG51bSkge1xuICAgIHJldHVybiB0eXBlb2YgbnVtID09PSAnbnVtYmVyJztcbn07XG5cbi8qXG4gICAgSXMgdXRpbHMgdmFyIGFuIG9iamVjdD9cbiAgICBcbiAgICBAcGFyYW06IFZhcmlhYmxlIHRvIHRlc3RcbiAgICBAcmV0dXJuIFtib29sZWFuXTogUmV0dXJucyB0cnVlIGlmIHR5cGVvZiA9PT0gJ29iamVjdCdcbiovXG52YXIgaXNPYmogPSBleHBvcnRzLmlzT2JqID0gZnVuY3Rpb24gKG9iaikge1xuICAgIHJldHVybiB0eXBlb2Ygb2JqID09PSAnb2JqZWN0Jztcbn07XG5cbi8qXG4gICAgSXMgdXRpbHMgYSByZWxhdGl2ZSB2YWx1ZSBhc3NpZ25tZW50P1xuICAgIFxuICAgIEBwYXJhbSBbc3RyaW5nXTogVmFyaWFibGUgdG8gdGVzdFxuICAgIEByZXR1cm4gW2Jvb2xlYW5dOiBJZiB1dGlscyBsb29rcyBsaWtlIGEgcmVsYXRpdmUgdmFsdWUgYXNzaWdubWVudFxuKi9cbnZhciBpc1JlbGF0aXZlVmFsdWUgPSBleHBvcnRzLmlzUmVsYXRpdmVWYWx1ZSA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgIHJldHVybiB2YWx1ZSAmJiB2YWx1ZS5pbmRleE9mICYmIHZhbHVlLmluZGV4T2YoJz0nKSA+IDAgPyB0cnVlIDogZmFsc2U7XG59O1xuXG4vKlxuICAgIElzIHV0aWxzIHZhciBhIHN0cmluZyA/IFxuICAgIFxuICAgIEBwYXJhbTogVmFyaWFibGUgdG8gdGVzdFxuICAgIEByZXR1cm4gW2Jvb2xlYW5dOiBSZXR1cm5zIHRydWUgaWYgdHlwZW9mIHN0ciA9PT0gJ3N0cmluZydcbiovXG52YXIgaXNTdHJpbmcgPSBleHBvcnRzLmlzU3RyaW5nID0gZnVuY3Rpb24gKHN0cikge1xuICAgIHJldHVybiB0eXBlb2Ygc3RyID09PSAnc3RyaW5nJztcbn07XG5cbi8qXG4gICAgQHBhcmFtIFtzdHJpbmcgfHwgTm9kZUxpc3RdOlxuICAgICAgICBJZiBzdHJpbmcsIHRyZWF0ZWQgYXMgc2VsZWN0b3IuXG4gICAgICAgIElmIG5vdCwgdHJlYXRlZCBhcyBwcmVleGlzdGluZyBOb2RlTGlzdFxuXG4gICAgQHJldHVybiBbQXJyYXldXG4qL1xudmFyIHNlbGVjdERvbSA9IGV4cG9ydHMuc2VsZWN0RG9tID0gZnVuY3Rpb24gKHNlbGVjdG9yKSB7XG4gICAgdmFyIG5vZGVzID0gdHlwZW9mIHNlbGVjdG9yID09PSAnc3RyaW5nJyA/IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoc2VsZWN0b3IpIDogc2VsZWN0b3I7XG4gICAgcmV0dXJuIG5vZGVzLmxlbmd0aCA/IFtdLnNsaWNlLmNhbGwobm9kZXMpIDogW10ucHVzaChub2Rlcyk7XG59O1xuXG4vKlxuICAgIFNwbGl0IGNvbW1hLWRlbGltaXRlZCBzdHJpbmdcblxuICAgIFwiZm9vLGJhclwiIC0+IFtcImZvb1wiLCBcImJhclwiXVxuXG4gICAgQHBhcmFtIFtzdHJpbmddXG4gICAgQHJldHVybiBbYXJyYXldXG4qL1xudmFyIHNwbGl0Q29tbWFEZWxpbWl0ZWQgPSBleHBvcnRzLnNwbGl0Q29tbWFEZWxpbWl0ZWQgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICByZXR1cm4gaXNTdHJpbmcodmFsdWUpID8gdmFsdWUuc3BsaXQoLyxcXHMqLykgOiBbdmFsdWVdO1xufTtcblxuLypcbiAgICBTcGxpdCBzcGFjZS1kZWxpbWl0ZWQgc3RyaW5nXG5cbiAgICBcImZvbyBiYXJcIiAtPiBbXCJmb29cIiwgXCJiYXJcIl1cblxuICAgIEBwYXJhbSBbc3RyaW5nXVxuICAgIEByZXR1cm4gW2FycmF5XVxuKi9cbnZhciBzcGxpdFNwYWNlRGVsaW1pdGVkID0gZXhwb3J0cy5zcGxpdFNwYWNlRGVsaW1pdGVkID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgcmV0dXJuIGlzU3RyaW5nKHZhbHVlKSA/IHZhbHVlLnNwbGl0KCcgJykgOiBbdmFsdWVdO1xufTtcblxuLypcbiAgICBDb252ZXJ0IG51bWJlciB0byB4IGRlY2ltYWwgcGxhY2VzXG5cbiAgICBAcGFyYW0gW251bWJlcl1cbiAgICBAcGFyYW0gW251bWJlcl1cbiAgICBAcmV0dXJuIFtudW1iZXJdXG4qL1xudmFyIHRvRGVjaW1hbCA9IGV4cG9ydHMudG9EZWNpbWFsID0gZnVuY3Rpb24gKG51bSkge1xuICAgIHZhciBwcmVjaXNpb24gPSBhcmd1bWVudHMubGVuZ3RoIDw9IDEgfHwgYXJndW1lbnRzWzFdID09PSB1bmRlZmluZWQgPyAyIDogYXJndW1lbnRzWzFdO1xuXG4gICAgcHJlY2lzaW9uID0gTWF0aC5wb3coMTAsIHByZWNpc2lvbik7XG4gICAgcmV0dXJuIE1hdGgucm91bmQobnVtICogcHJlY2lzaW9uKSAvIHByZWNpc2lvbjtcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5OeVl5OXBibU12ZFhScGJITXVhbk1pWFN3aWJtRnRaWE1pT2x0ZExDSnRZWEJ3YVc1bmN5STZJanM3TzBGQlFVRXNTVUZCVFN4clFrRkJhMElzUjBGQlJ5eHBRa0ZCYVVJc1EwRkJRenRCUVVNM1F5eEpRVUZOTEdkQ1FVRm5RaXhIUVVGSExFOUJRVThzUTBGQlF6dEJRVU5xUXl4SlFVRk5MRzFDUVVGdFFpeEhRVUZKTEU5QlFVOHNWMEZCVnl4TFFVRkxMRmRCUVZjc1NVRkJTU3hYUVVGWExFTkJRVU1zUjBGQlJ5eEJRVUZET3pzN096czdPenRCUVVGRExFRkJVWEJHTEVsQlFVMHNUMEZCVHl4SFFVRkhMRlZCUVVFc1VVRkJVVHRYUVVGSkxFMUJRVTBzUTBGQlF5eFRRVUZUTEVOQlFVTXNVVUZCVVN4RFFVRkRMRWxCUVVrc1EwRkJReXhSUVVGUkxFTkJRVU1zUTBGQlF5eExRVUZMTEVOQlFVTXNRMEZCUXl4RlFVRkZMRU5CUVVNc1EwRkJReXhEUVVGRE8wTkJRVUU3T3pzN096czdPMEZCUVVNc1FVRlJNMFVzU1VGQlRTeFhRVUZYTEZkQlFWZ3NWMEZCVnl4SFFVRkhMRlZCUVVNc1RVRkJUVHRYUVVGTExFMUJRVTBzUTBGQlF5eFBRVUZQTEVOQlFVTXNhMEpCUVd0Q0xFVkJRVVVzWjBKQlFXZENMRU5CUVVNc1EwRkJReXhYUVVGWExFVkJRVVU3UTBGQlFUczdPenM3T3pzN08wRkJRVU1zUVVGVGJrY3NTVUZCVFN4dFFrRkJiVUlzVjBGQmJrSXNiVUpCUVcxQ0xFZEJRVWNzVlVGQlF5eFpRVUZaTEVWQlFVczdRVUZEYWtRc1VVRkJUU3hsUVVGbExFZEJRVWNzV1VGQldTeERRVUZETEUxQlFVMHNRMEZCUXp0QlFVTTFReXhSUVVGSkxFTkJRVU1zUjBGQlJ5eERRVUZET3pzN096czdPenRCUVVGRExFRkJVVllzVjBGQlR5eFZRVUZETEVOQlFVTXNSVUZCUlN4SFFVRkhMRVZCUVVVc1EwRkJReXhGUVVGTE8wRkJRMnhDTEdGQlFVc3NRMEZCUXl4SFFVRkhMRU5CUVVNc1JVRkJSU3hEUVVGRExFZEJRVWNzWlVGQlpTeEZRVUZGTEVOQlFVTXNSVUZCUlN4RlFVRkZPMEZCUTJ4RExHRkJRVU1zUjBGQlJ5eFpRVUZaTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhGUVVGRkxFZEJRVWNzUlVGQlJTeERRVUZETEVOQlFVTXNRMEZCUXp0VFFVTnNRenM3UVVGRlJDeGxRVUZQTEVOQlFVTXNRMEZCUXp0TFFVTmFMRU5CUVVNN1EwRkRUQ3hEUVVGRE96dEJRVVZMTEVsQlFVMHNaVUZCWlN4WFFVRm1MR1ZCUVdVc1IwRkJSeXhWUVVGRExFMUJRVTBzUlVGQlJTeExRVUZMTEVWQlFVVXNVMEZCVXl4RlFVRkZMRWxCUVVrc1JVRkJTenRCUVVNdlJDeFJRVUZOTEZGQlFWRXNSMEZCUnl4TFFVRkxMRU5CUVVNc1RVRkJUU3hEUVVGRE8wRkJRemxDTEZGQlFVa3NVVUZCVVN4SFFVRkhMRVZCUVVVc1EwRkJRenM3UVVGRmJFSXNVMEZCU3l4SlFVRkpMRU5CUVVNc1IwRkJSeXhEUVVGRExFVkJRVVVzUTBGQlF5eEhRVUZITEZGQlFWRXNSVUZCUlN4RFFVRkRMRVZCUVVVc1JVRkJSVHRCUVVNdlFpeFpRVUZOTEVsQlFVa3NSMEZCUnl4TFFVRkxMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU03UVVGRGRFSXNXVUZCU1N4TlFVRk5MRU5CUVVNc1kwRkJZeXhEUVVGRExFbEJRVWtzUTBGQlF5eEZRVUZGTzBGQlF6ZENMRzlDUVVGUkxFbEJRVWtzVFVGQlRTeERRVUZETEVsQlFVa3NRMEZCUXl4SFFVRkhMRk5CUVZNc1EwRkJRenRUUVVONFF6dExRVU5LT3p0QlFVVkVMRkZCUVVrc1NVRkJTU3hGUVVGRk8wRkJRMDRzWjBKQlFWRXNSMEZCUnl4UlFVRlJMRU5CUVVNc1MwRkJTeXhEUVVGRExFTkJRVU1zUlVGQlJTeERRVUZETEVsQlFVa3NRMEZCUXl4RFFVRkRPMHRCUTNaRE96dEJRVVZFTEZkQlFVOHNVVUZCVVN4RFFVRkRPME5CUTI1Q096czdPenM3T3pzN096dEJRVUZETEVGQlYwc3NTVUZCVFN4dlFrRkJiMElzVjBGQmNFSXNiMEpCUVc5Q0xFZEJRVWNzVlVGQlF5eExRVUZMTEVWQlFVVXNUVUZCVFR0WFFVRlJMRTFCUVUwc1UwRkJTU3hMUVVGTE8wTkJRVWM3T3pzN096czdRVUZCUXl4QlFVOTBSU3hKUVVGTkxGZEJRVmNzVjBGQldDeFhRVUZYTEVkQlFVY3NiVUpCUVcxQ0xFZEJRVWM3VjBGQlRTeFhRVUZYTEVOQlFVTXNSMEZCUnl4RlFVRkZPME5CUVVFc1IwRkJSenRYUVVGTkxFbEJRVWtzU1VGQlNTeEZRVUZGTEVOQlFVTXNUMEZCVHl4RlFVRkZPME5CUVVFN096czdPenM3T3p0QlFVRkRMRUZCVXk5R0xFbEJRVTBzWTBGQll5eFhRVUZrTEdOQlFXTXNSMEZCUnl4VlFVRkRMRXRCUVVzc1JVRkJSU3hWUVVGVkxFVkJRVXM3UVVGRGFrUXNVVUZCVFN4aFFVRmhMRWRCUVVjc1ZVRkJWU3hEUVVGRExFMUJRVTBzUTBGQlF6dEJRVU40UXl4UlFVRk5MRmRCUVZjc1IwRkJSeXhGUVVGRkxFTkJRVU03UVVGRGRrSXNVVUZCVFN4TlFVRk5MRWRCUVVjc2JVSkJRVzFDTEVOQlFVTXNNRUpCUVRCQ0xFTkJRVU1zUzBGQlN5eERRVUZETEVOQlFVTXNRMEZCUXpzN1FVRkZkRVVzVTBGQlN5eEpRVUZKTEVOQlFVTXNSMEZCUnl4RFFVRkRMRVZCUVVVc1EwRkJReXhIUVVGSExHRkJRV0VzUlVGQlJTeERRVUZETEVWQlFVVXNSVUZCUlR0QlFVTndReXh0UWtGQlZ5eERRVUZETEZWQlFWVXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhIUVVGSExFRkJRVU1zVFVGQlRTeERRVUZETEVOQlFVTXNRMEZCUXl4TFFVRkxMRk5CUVZNc1IwRkJTU3hOUVVGTkxFTkJRVU1zUTBGQlF5eERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRPMHRCUXpGRk96dEJRVVZFTEZkQlFVOHNWMEZCVnl4RFFVRkRPME5CUTNSQ096czdPenM3TzBGQlFVTXNRVUZQU3l4SlFVRk5MREJDUVVFd1FpeFhRVUV4UWl3d1FrRkJNRUlzUjBGQlJ5eFZRVUZETEV0QlFVczdWMEZCU3l4TFFVRkxMRU5CUVVNc1UwRkJVeXhEUVVGRExFdEJRVXNzUTBGQlF5eFBRVUZQTEVOQlFVTXNSMEZCUnl4RFFVRkRMRWRCUVVjc1EwRkJReXhGUVVGRkxFdEJRVXNzUTBGQlF5eFhRVUZYTEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNN1EwRkJRVHM3T3pzN096czdPMEZCUVVNc1FVRlRPVWNzU1VGQlRTeFZRVUZWTEZkQlFWWXNWVUZCVlN4SFFVRkhMRlZCUVVNc1EwRkJReXhGUVVGRkxFTkJRVU1zUlVGQlN6dEJRVU5vUXl4UlFVRkpMRTlCUVU4c1IwRkJSeXhMUVVGTExFTkJRVU03TzBGQlJYQkNMRk5CUVVzc1NVRkJTU3hIUVVGSExFbEJRVWtzUTBGQlF5eEZRVUZGTzBGQlEyWXNXVUZCU1N4RFFVRkRMRU5CUVVNc1kwRkJZeXhEUVVGRExFZEJRVWNzUTBGQlF5eEZRVUZGTzBGQlEzWkNMR2RDUVVGSkxGZEJRVmNzUTBGQlF5eERRVUZETEVWQlFVVXNSMEZCUnl4RFFVRkRMRVZCUVVVN1FVRkRja0lzYjBKQlFVa3NRMEZCUXl4RFFVRkRMRWRCUVVjc1EwRkJReXhMUVVGTExFTkJRVU1zUTBGQlF5eEhRVUZITEVOQlFVTXNSVUZCUlR0QlFVTnVRaXd5UWtGQlR5eEhRVUZITEVsQlFVa3NRMEZCUXp0cFFrRkRiRUk3WVVGRFNpeE5RVUZOTzBGQlEwZ3NkVUpCUVU4c1IwRkJSeXhKUVVGSkxFTkJRVU03WVVGRGJFSTdVMEZEU2p0TFFVTktPenRCUVVWRUxGZEJRVThzVDBGQlR5eERRVUZETzBOQlEyeENPenM3T3pzN096czdRVUZCUXl4QlFWTkxMRWxCUVUwc1YwRkJWeXhYUVVGWUxGZEJRVmNzUjBGQlJ5eFZRVUZETEUxQlFVMHNSVUZCUlN4WlFVRlpPMWRCUVVzc1RVRkJUU3hEUVVGRExHTkJRV01zUTBGQlF5eFpRVUZaTEVOQlFVTXNTVUZCU1N4TlFVRk5MRU5CUVVNc1dVRkJXU3hEUVVGRExFdEJRVXNzVTBGQlV6dERRVUZCT3pzN096czdPenRCUVVGRExFRkJVWGhJTEVsQlFVMHNUMEZCVHl4WFFVRlFMRTlCUVU4c1IwRkJSeXhWUVVGRExFZEJRVWM3VjBGQlN5eFBRVUZQTEVOQlFVTXNSMEZCUnl4RFFVRkRMRXRCUVVzc1QwRkJUenREUVVGQk96czdPenM3T3p0QlFVRkRMRUZCVVd4RUxFbEJRVTBzVFVGQlRTeFhRVUZPTEUxQlFVMHNSMEZCUnl4VlFVRkRMRWRCUVVjN1YwRkJTeXhQUVVGUExFTkJRVU1zUjBGQlJ5eERRVUZETEV0QlFVc3NWVUZCVlR0RFFVRkJPenM3T3pzN096dEJRVUZETEVGQlVYQkVMRWxCUVUwc1MwRkJTeXhYUVVGTUxFdEJRVXNzUjBGQlJ5eFZRVUZETEVkQlFVYzdWMEZCU3l4UFFVRlBMRWRCUVVjc1MwRkJTeXhSUVVGUk8wTkJRVUU3T3pzN096czdPMEZCUVVNc1FVRlJMME1zU1VGQlRTeExRVUZMTEZkQlFVd3NTMEZCU3l4SFFVRkhMRlZCUVVNc1IwRkJSenRYUVVGTExFOUJRVThzUjBGQlJ5eExRVUZMTEZGQlFWRTdRMEZCUVRzN096czdPenM3UVVGQlF5eEJRVkV2UXl4SlFVRk5MR1ZCUVdVc1YwRkJaaXhsUVVGbExFZEJRVWNzVlVGQlF5eExRVUZMTzFkQlFVc3NRVUZCUXl4TFFVRkxMRWxCUVVrc1MwRkJTeXhEUVVGRExFOUJRVThzU1VGQlNTeExRVUZMTEVOQlFVTXNUMEZCVHl4RFFVRkRMRWRCUVVjc1EwRkJReXhIUVVGSExFTkJRVU1zUjBGQlNTeEpRVUZKTEVkQlFVY3NTMEZCU3p0RFFVRkJPenM3T3pzN096dEJRVUZETEVGQlVYSkhMRWxCUVUwc1VVRkJVU3hYUVVGU0xGRkJRVkVzUjBGQlJ5eFZRVUZETEVkQlFVYzdWMEZCU3l4UFFVRlBMRWRCUVVjc1MwRkJTeXhSUVVGUk8wTkJRVUU3T3pzN096czdPenRCUVVGRExFRkJVMnhFTEVsQlFVMHNVMEZCVXl4WFFVRlVMRk5CUVZNc1IwRkJSeXhWUVVGRExGRkJRVkVzUlVGQlN6dEJRVU51UXl4UlFVRk5MRXRCUVVzc1IwRkJSeXhCUVVGRExFOUJRVThzVVVGQlVTeExRVUZMTEZGQlFWRXNSMEZCU1N4UlFVRlJMRU5CUVVNc1owSkJRV2RDTEVOQlFVTXNVVUZCVVN4RFFVRkRMRWRCUVVjc1VVRkJVU3hEUVVGRE8wRkJRemxHTEZkQlFVOHNRVUZCUXl4TFFVRkxMRU5CUVVNc1RVRkJUU3hIUVVGSkxFVkJRVVVzUTBGQlF5eExRVUZMTEVOQlFVTXNTVUZCU1N4RFFVRkRMRXRCUVVzc1EwRkJReXhIUVVGSExFVkJRVVVzUTBGQlF5eEpRVUZKTEVOQlFVTXNTMEZCU3l4RFFVRkRMRU5CUVVNN1EwRkRha1U3T3pzN096czdPenM3UVVGQlF5eEJRVlZMTEVsQlFVMHNiVUpCUVcxQ0xGZEJRVzVDTEcxQ1FVRnRRaXhIUVVGSExGVkJRVU1zUzBGQlN6dFhRVUZMTEZGQlFWRXNRMEZCUXl4TFFVRkxMRU5CUVVNc1IwRkJSeXhMUVVGTExFTkJRVU1zUzBGQlN5eERRVUZETEUxQlFVMHNRMEZCUXl4SFFVRkhMRU5CUVVNc1MwRkJTeXhEUVVGRE8wTkJRVUU3T3pzN096czdPenM3UVVGQlF5eEJRVlYyUml4SlFVRk5MRzFDUVVGdFFpeFhRVUZ1UWl4dFFrRkJiVUlzUjBGQlJ5eFZRVUZETEV0QlFVczdWMEZCU3l4UlFVRlJMRU5CUVVNc1MwRkJTeXhEUVVGRExFZEJRVWNzUzBGQlN5eERRVUZETEV0QlFVc3NRMEZCUXl4SFFVRkhMRU5CUVVNc1IwRkJSeXhEUVVGRExFdEJRVXNzUTBGQlF6dERRVUZCT3pzN096czdPenM3UVVGQlF5eEJRVk53Uml4SlFVRk5MRk5CUVZNc1YwRkJWQ3hUUVVGVExFZEJRVWNzVlVGQlF5eEhRVUZITEVWQlFXOUNPMUZCUVd4Q0xGTkJRVk1zZVVSQlFVY3NRMEZCUXpzN1FVRkRlRU1zWVVGQlV5eFpRVUZITEVWQlFVVXNSVUZCU1N4VFFVRlRMRU5CUVVFc1EwRkJRenRCUVVNMVFpeFhRVUZQTEVsQlFVa3NRMEZCUXl4TFFVRkxMRU5CUVVNc1IwRkJSeXhIUVVGSExGTkJRVk1zUTBGQlF5eEhRVUZITEZOQlFWTXNRMEZCUXp0RFFVTnNSQ3hEUVVGRElpd2labWxzWlNJNkluVjBhV3h6TG1weklpd2ljMjkxY21ObFVtOXZkQ0k2SWk5VmMyVnljeTlOWVhSMFVHVnljbmt2VTJsMFpYTXZjRzl3Ylc5MGFXOXVJaXdpYzI5MWNtTmxjME52Ym5SbGJuUWlPbHNpWTI5dWMzUWdRMEZOUlV4ZlEwRlRSVjlRUVZSVVJWSk9JRDBnTHloYllTMTZYU2tvVzBFdFdsMHBMMmM3WEc1amIyNXpkQ0JTUlZCTVFVTkZYMVJGVFZCTVFWUkZJRDBnSnlReExTUXlKenRjYm1OdmJuTjBJRWhCVTE5UVJWSkdUMUpOUVU1RFJWOU9UMWNnUFNBb2RIbHdaVzltSUhCbGNtWnZjbTFoYm1ObElDRTlQU0FuZFc1a1pXWnBibVZrSnlBbUppQndaWEptYjNKdFlXNWpaUzV1YjNjcE8xeHVYRzR2S2x4dUlDQWdJRWRsZENCMllYSWdkSGx3WlNCaGN5QnpkSEpwYm1kY2JpQWdJQ0JjYmlBZ0lDQkFjR0Z5WVcwNklGWmhjbWxoWW14bElIUnZJSFJsYzNSY2JpQWdJQ0JBY21WMGRYSnVJRnR6ZEhKcGJtZGRPaUJTWlhSMWNtNXpMQ0JtYjNJZ2FXNXpkR0Z1WTJVZ0owOWlhbVZqZENjZ2FXWWdXMjlpYW1WamRDQlBZbXBsWTNSZFhHNHFMMXh1WTI5dWMzUWdkbUZ5Vkhsd1pTQTlJSFpoY21saFlteGxJRDArSUU5aWFtVmpkQzV3Y205MGIzUjVjR1V1ZEc5VGRISnBibWN1WTJGc2JDaDJZWEpwWVdKc1pTa3VjMnhwWTJVb09Dd2dMVEVwTzF4dVhHNHZLbHh1SUNBZ0lFTnZiblpsY25RZ1kyRnRaV3hEWVhObElIUnZJR1JoYzJndFkyRnpaVnh1WEc0Z0lDQWdRSEJoY21GdElGdHpkSEpwYm1kZFhHNGdJQ0FnUUhKbGRIVnliaUJiYzNSeWFXNW5YVnh1S2k5Y2JtVjRjRzl5ZENCamIyNXpkQ0JqWVcxbGJGUnZSR0Z6YUNBOUlDaHpkSEpwYm1jcElEMCtJSE4wY21sdVp5NXlaWEJzWVdObEtFTkJUVVZNWDBOQlUwVmZVRUZVVkVWU1Rpd2dVa1ZRVEVGRFJWOVVSVTFRVEVGVVJTa3VkRzlNYjNkbGNrTmhjMlVvS1R0Y2JseHVMeXBjYmlBZ0lDQkRiMjFpYVc1bElIUnlZVzV6Wm05eWJXVnljeUJwYm5SdklHOXVaU0JtZFc1amRHbHZiaUIwYUdGMElHTmhiR3h6SUdWMlpYSjVYRzRnSUNBZ2RISmhibk5tYjNKdFpYSWdhVzRnZEdobElHRnljbUY1SUdGdVpDQnlaWFIxY201eklIUm9aU0J5WlhOMWJIUmNibHh1SUNBZ0lFQndZWEpoYlNCYllYSnlZWGxkWEc0Z0lDQWdRSEpsZEhWeWJpQmJablZ1WTNScGIyNWRYRzRxTDF4dVpYaHdiM0owSUdOdmJuTjBJR052YldKcGJtVlVjbUZ1YzJadmNtMWxjbk1nUFNBb2RISmhibk5tYjNKdFpYSnpLU0E5UGlCN1hHNGdJQ0FnWTI5dWMzUWdiblZ0VkhKaGJuTm1iM0p0WlhKeklEMGdkSEpoYm5ObWIzSnRaWEp6TG14bGJtZDBhRHRjYmlBZ0lDQnNaWFFnYVNBOUlEQTdYRzVjYmlBZ0lDQXZLbHh1SUNBZ0lDQWdJQ0JBY0dGeVlXMGdXMjUxYldKbGNsMWNiaUFnSUNBZ0lDQWdRSEJoY21GdElGdHpkSEpwYm1kZFhHNGdJQ0FnSUNBZ0lFQndZWEpoYlNCYlFXTjBhVzl1WFZ4dUlDQWdJQ0FnSUNCQWNtVjBkWEp1SUZ0dWRXMWlaWEpkWEc0Z0lDQWdLaTljYmlBZ0lDQnlaWFIxY200Z0tIWXNJR3RsZVN3Z1lTa2dQVDRnZTF4dUlDQWdJQ0FnSUNCbWIzSWdLR2tnUFNBd095QnBJRHdnYm5WdFZISmhibk5tYjNKdFpYSnpPeUJwS3lzcElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUhZZ1BTQjBjbUZ1YzJadmNtMWxjbk5iYVYwb2Rpd2dhMlY1TENCaEtUdGNiaUFnSUNBZ0lDQWdmVnh1WEc0Z0lDQWdJQ0FnSUhKbGRIVnliaUIyTzF4dUlDQWdJSDA3WEc1OU8xeHVYRzVsZUhCdmNuUWdZMjl1YzNRZ1kzSmxZWFJsUkdWc2FXMXBkR1ZrSUQwZ0tIWmhiSFZsY3l3Z2RHVnliWE1zSUdSbGJHbHRhWFJsY2l3Z1kyaHZjQ2tnUFQ0Z2UxeHVJQ0FnSUdOdmJuTjBJRzUxYlZSbGNtMXpJRDBnZEdWeWJYTXViR1Z1WjNSb08xeHVJQ0FnSUd4bGRDQmpiMjFpYVc1bFpDQTlJQ2NuTzF4dVhHNGdJQ0FnWm05eUlDaHNaWFFnYVNBOUlEQTdJR2tnUENCdWRXMVVaWEp0Y3pzZ2FTc3JLU0I3WEc0Z0lDQWdJQ0FnSUdOdmJuTjBJSFJsY20wZ1BTQjBaWEp0YzF0cFhUdGNiaUFnSUNBZ0lDQWdhV1lnS0haaGJIVmxjeTVvWVhOUGQyNVFjbTl3WlhKMGVTaDBaWEp0S1NrZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnWTI5dFltbHVaV1FnS3owZ2RtRnNkV1Z6VzNSbGNtMWRJQ3NnWkdWc2FXMXBkR1Z5TzF4dUlDQWdJQ0FnSUNCOVhHNGdJQ0FnZlZ4dVhHNGdJQ0FnYVdZZ0tHTm9iM0FwSUh0Y2JpQWdJQ0FnSUNBZ1kyOXRZbWx1WldRZ1BTQmpiMjFpYVc1bFpDNXpiR2xqWlNnd0xDQXRZMmh2Y0NrN1hHNGdJQ0FnZlZ4dVhHNGdJQ0FnY21WMGRYSnVJR052YldKcGJtVmtPMXh1ZlR0Y2JseHVMeXBjYmlBZ0lDQkRjbVZoZEdVZ1lTQm1kVzVqZEdsdmJpQnpkSEpwYm1kY2JseHVJQ0FnSUNjeU1IQjRKeXdnSjNSeVlXNXpiR0YwWlNjZ0xUNGdKM1J5WVc1emJHRjBaU2d5TUhCNEtTZGNibHh1SUNBZ0lFQndZWEpoYlNCYmMzUnlhVzVuWFZ4dUlDQWdJRUJ3WVhKaGJTQmJjM1J5YVc1blhWeHVJQ0FnSUVCeVpYUjFjbTRnVzNOMGNtbHVaMTFjYmlvdlhHNWxlSEJ2Y25RZ1kyOXVjM1FnWTNKbFlYUmxSblZ1WTNScGIyNVRkSEpwYm1jZ1BTQW9kbUZzZFdVc0lIQnlaV1pwZUNrZ1BUNGdZQ1I3Y0hKbFptbDRmU2drZTNaaGJIVmxmU2xnTzF4dVhHNHZLbHh1SUNBZ0lFZGxibVZ5WVhSbElHTjFjbkpsYm5RZ2RHbHRaWE4wWVcxd1hHNGdJQ0FnWEc0Z0lDQWdRSEpsZEhWeWJpQmJkR2x0WlhOMFlXMXdYVG9nUTNWeWNtVnVkQ0JWVGtsWUlIUnBiV1Z6ZEdGdGNGeHVLaTljYm1WNGNHOXlkQ0JqYjI1emRDQmpkWEp5Wlc1MFZHbHRaU0E5SUVoQlUxOVFSVkpHVDFKTlFVNURSVjlPVDFjZ1B5QW9LU0E5UGlCd1pYSm1iM0p0WVc1alpTNXViM2NvS1NBNklDZ3BJRDArSUc1bGR5QkVZWFJsS0NrdVoyVjBWR2x0WlNncE8xeHVYRzR2S2x4dUlDQWdJRk53YkdsMElHTnZiRzl5SUhOMGNtbHVaeUJwYm5SdklHMWhjQ0J2WmlCamIyeHZjaUJ3Y205d1pYSjBhV1Z6WEc1Y2JpQWdJQ0JjSW5KblltRW9NalUxTENBeU5UVXNJREkxTlN3Z01DbGNJaXdnVzF3aVVtVmtYQ0lzSUNkSGNtVmxibHdpTENCY0lrSnNkV1ZjSWl3Z1hDSkJiSEJvWVZ3aVhWeHVYRzRnSUNBZ2V5QlNaV1E2SURJMU5TNHVMaUI5WEc0cUwxeHVaWGh3YjNKMElHTnZibk4wSUdkbGRFTnZiRzl5Vm1Gc2RXVnpJRDBnS0haaGJIVmxMQ0JqYjJ4dmNsUmxjbTF6S1NBOVBpQjdYRzRnSUNBZ1kyOXVjM1FnYm5WdFEyOXNiM0pVWlhKdGN5QTlJR052Ykc5eVZHVnliWE11YkdWdVozUm9PMXh1SUNBZ0lHTnZibk4wSUdOdmJHOXlWbUZzZFdWeklEMGdlMzA3WEc0Z0lDQWdZMjl1YzNRZ1kyOXNiM0p6SUQwZ2MzQnNhWFJEYjIxdFlVUmxiR2x0YVhSbFpDaG5aWFJXWVd4MVpVWnliMjFHZFc1amRHbHZibE4wY21sdVp5aDJZV3gxWlNrcE8xeHVYRzRnSUNBZ1ptOXlJQ2hzWlhRZ2FTQTlJREE3SUdrZ1BDQnVkVzFEYjJ4dmNsUmxjbTF6T3lCcEt5c3BJSHRjYmlBZ0lDQWdJQ0FnWTI5c2IzSldZV3gxWlhOYlkyOXNiM0pVWlhKdGMxdHBYVjBnUFNBb1kyOXNiM0p6VzJsZElDRTlQU0IxYm1SbFptbHVaV1FwSUQ4Z1kyOXNiM0p6VzJsZElEb2dNVHRjYmlBZ0lDQjlYRzVjYmlBZ0lDQnlaWFIxY200Z1kyOXNiM0pXWVd4MVpYTTdYRzU5TzF4dVhHNHZLbHh1SUNBZ0lFZGxkQ0IyWVd4MVpTQm1jbTl0SUdaMWJtTjBhVzl1SUhOMGNtbHVaMXh1WEc0Z0lDQWdYQ0owY21GdWMyeGhkR1ZZS0RJd2NIZ3BYQ0lnTFQ0Z1hDSXlNSEI0WENKY2Jpb3ZYRzVsZUhCdmNuUWdZMjl1YzNRZ1oyVjBWbUZzZFdWR2NtOXRSblZ1WTNScGIyNVRkSEpwYm1jZ1BTQW9kbUZzZFdVcElEMCtJSFpoYkhWbExuTjFZbk4wY21sdVp5aDJZV3gxWlM1cGJtUmxlRTltS0Njb0p5a2dLeUF4TENCMllXeDFaUzVzWVhOMFNXNWtaWGhQWmlnbktTY3BLVHRjYmx4dUx5cGNiaUFnSUNCRGFHVmpheUJwWmlCMGQyOGdiMkpxWldOMGN5Qm9ZWFpsSUdOb1lXNW5aV1FnWm5KdmJTQmxZV05vSUc5MGFHVnlYRzRnSUNBZ1hHNGdJQ0FnUUhCaGNtRnRJRnR2WW1wbFkzUmRPaUJKYm5CMWRDQkJYRzRnSUNBZ1FIQmhjbUZ0SUZ0dlltcGxZM1JkT2lCSmJuQjFkQ0JDWEc0Z0lDQWdRSEpsZEhWeWJpQmJZbTl2YkdWaGJsMDZJRlJ5ZFdVZ2FXWWdaR2xtWm1WeVpXNTBYRzRxTDF4dVpYaHdiM0owSUdOdmJuTjBJR2hoYzBOb1lXNW5aV1FnUFNBb1lTd2dZaWtnUFQ0Z2UxeHVJQ0FnSUd4bGRDQmphR0Z1WjJWa0lEMGdabUZzYzJVN1hHNWNiaUFnSUNCbWIzSWdLR3hsZENCclpYa2dhVzRnWVNrZ2UxeHVJQ0FnSUNBZ0lDQnBaaUFvWVM1b1lYTlBkMjVRY205d1pYSjBlU2hyWlhrcEtTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNCcFppQW9hR0Z6VUhKdmNHVnlkSGtvWWl3Z2EyVjVLU2tnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUdsbUlDaGhXMnRsZVYwZ0lUMDlJR0piYTJWNVhTa2dlMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCamFHRnVaMlZrSUQwZ2RISjFaVHRjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0I5WEc0Z0lDQWdJQ0FnSUNBZ0lDQjlJR1ZzYzJVZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lHTm9ZVzVuWldRZ1BTQjBjblZsTzF4dUlDQWdJQ0FnSUNBZ0lDQWdmVnh1SUNBZ0lDQWdJQ0I5WEc0Z0lDQWdmVnh1WEc0Z0lDQWdjbVYwZFhKdUlHTm9ZVzVuWldRN1hHNTlPMXh1WEc0dktseHVJQ0FnSUVOb1pXTnJJR2xtSUc5aWFtVmpkQ0JvWVhNZ2NISnZjR1Z5ZEhrZ1lXNWtJR2wwSUdsemJpZDBJSFZ1WkdWbWFXNWxaRnh1WEc0Z0lDQWdRSEJoY21GdElGdHZZbXBsWTNSZFhHNGdJQ0FnUUhCaGNtRnRJRnR6ZEhKcGJtZGRYRzRnSUNBZ1FISmxkSFZ5YmlCYlltOXZiR1ZoYmwxY2Jpb3ZYRzVsZUhCdmNuUWdZMjl1YzNRZ2FHRnpVSEp2Y0dWeWRIa2dQU0FvYjJKcVpXTjBMQ0J3Y205d1pYSjBlVTVoYldVcElEMCtJRzlpYW1WamRDNW9ZWE5QZDI1UWNtOXdaWEowZVNod2NtOXdaWEowZVU1aGJXVXBJQ1ltSUc5aWFtVmpkRnR3Y205d1pYSjBlVTVoYldWZElDRTlQU0IxYm1SbFptbHVaV1E3WEc1Y2JpOHFYRzRnSUNBZ1NYTWdkWFJwYkhNZ2RtRnlJR0Z1SUdGeWNtRjVJRDhnWEc0Z0lDQWdYRzRnSUNBZ1FIQmhjbUZ0T2lCV1lYSnBZV0pzWlNCMGJ5QjBaWE4wWEc0Z0lDQWdRSEpsZEhWeWJpQmJZbTl2YkdWaGJsMDZJRkpsZEhWeWJuTWdkSEoxWlNCcFppQjFkR2xzY3k1MllYSlVlWEJsSUQwOVBTQW5RWEp5WVhrblhHNHFMMXh1Wlhod2IzSjBJR052Ym5OMElHbHpRWEp5WVhrZ1BTQW9ZWEp5S1NBOVBpQjJZWEpVZVhCbEtHRnljaWtnUFQwOUlDZEJjbkpoZVNjN1hHNWNiaThxWEc0Z0lDQWdTWE1nZFhScGJITWdkbUZ5SUdFZ1puVnVZM1JwYjI0Z1B5QmNiaUFnSUNCY2JpQWdJQ0JBY0dGeVlXMDZJRlpoY21saFlteGxJSFJ2SUhSbGMzUmNiaUFnSUNCQWNtVjBkWEp1SUZ0aWIyOXNaV0Z1WFRvZ1VtVjBkWEp1Y3lCMGNuVmxJR2xtSUhWMGFXeHpMblpoY2xSNWNHVWdQVDA5SUNkR2RXNWpkR2x2YmlkY2Jpb3ZYRzVsZUhCdmNuUWdZMjl1YzNRZ2FYTkdkVzVqSUQwZ0tHOWlhaWtnUFQ0Z2RtRnlWSGx3WlNodlltb3BJRDA5UFNBblJuVnVZM1JwYjI0bk8xeHVYRzR2S2x4dUlDQWdJRWx6SUhWMGFXeHpJSFpoY2lCaElHNTFiV0psY2o5Y2JpQWdJQ0JjYmlBZ0lDQkFjR0Z5WVcwNklGWmhjbWxoWW14bElIUnZJSFJsYzNSY2JpQWdJQ0JBY21WMGRYSnVJRnRpYjI5c1pXRnVYVG9nVW1WMGRYSnVjeUIwY25WbElHbG1JSFI1Y0dWdlppQTlQVDBnSjI1MWJXSmxjaWRjYmlvdlhHNWxlSEJ2Y25RZ1kyOXVjM1FnYVhOT2RXMGdQU0FvYm5WdEtTQTlQaUIwZVhCbGIyWWdiblZ0SUQwOVBTQW5iblZ0WW1WeUp6dGNibHh1THlwY2JpQWdJQ0JKY3lCMWRHbHNjeUIyWVhJZ1lXNGdiMkpxWldOMFAxeHVJQ0FnSUZ4dUlDQWdJRUJ3WVhKaGJUb2dWbUZ5YVdGaWJHVWdkRzhnZEdWemRGeHVJQ0FnSUVCeVpYUjFjbTRnVzJKdmIyeGxZVzVkT2lCU1pYUjFjbTV6SUhSeWRXVWdhV1lnZEhsd1pXOW1JRDA5UFNBbmIySnFaV04wSjF4dUtpOWNibVY0Y0c5eWRDQmpiMjV6ZENCcGMwOWlhaUE5SUNodlltb3BJRDArSUhSNWNHVnZaaUJ2WW1vZ1BUMDlJQ2R2WW1wbFkzUW5PMXh1WEc0dktseHVJQ0FnSUVseklIVjBhV3h6SUdFZ2NtVnNZWFJwZG1VZ2RtRnNkV1VnWVhOemFXZHViV1Z1ZEQ5Y2JpQWdJQ0JjYmlBZ0lDQkFjR0Z5WVcwZ1czTjBjbWx1WjEwNklGWmhjbWxoWW14bElIUnZJSFJsYzNSY2JpQWdJQ0JBY21WMGRYSnVJRnRpYjI5c1pXRnVYVG9nU1dZZ2RYUnBiSE1nYkc5dmEzTWdiR2xyWlNCaElISmxiR0YwYVhabElIWmhiSFZsSUdGemMybG5ibTFsYm5SY2Jpb3ZYRzVsZUhCdmNuUWdZMjl1YzNRZ2FYTlNaV3hoZEdsMlpWWmhiSFZsSUQwZ0tIWmhiSFZsS1NBOVBpQW9kbUZzZFdVZ0ppWWdkbUZzZFdVdWFXNWtaWGhQWmlBbUppQjJZV3gxWlM1cGJtUmxlRTltS0NjOUp5a2dQaUF3S1NBL0lIUnlkV1VnT2lCbVlXeHpaVHRjYmx4dUx5cGNiaUFnSUNCSmN5QjFkR2xzY3lCMllYSWdZU0J6ZEhKcGJtY2dQeUJjYmlBZ0lDQmNiaUFnSUNCQWNHRnlZVzA2SUZaaGNtbGhZbXhsSUhSdklIUmxjM1JjYmlBZ0lDQkFjbVYwZFhKdUlGdGliMjlzWldGdVhUb2dVbVYwZFhKdWN5QjBjblZsSUdsbUlIUjVjR1Z2WmlCemRISWdQVDA5SUNkemRISnBibWNuWEc0cUwxeHVaWGh3YjNKMElHTnZibk4wSUdselUzUnlhVzVuSUQwZ0tITjBjaWtnUFQ0Z2RIbHdaVzltSUhOMGNpQTlQVDBnSjNOMGNtbHVaeWM3WEc1Y2JpOHFYRzRnSUNBZ1FIQmhjbUZ0SUZ0emRISnBibWNnZkh3Z1RtOWtaVXhwYzNSZE9seHVJQ0FnSUNBZ0lDQkpaaUJ6ZEhKcGJtY3NJSFJ5WldGMFpXUWdZWE1nYzJWc1pXTjBiM0l1WEc0Z0lDQWdJQ0FnSUVsbUlHNXZkQ3dnZEhKbFlYUmxaQ0JoY3lCd2NtVmxlR2x6ZEdsdVp5Qk9iMlJsVEdsemRGeHVYRzRnSUNBZ1FISmxkSFZ5YmlCYlFYSnlZWGxkWEc0cUwxeHVaWGh3YjNKMElHTnZibk4wSUhObGJHVmpkRVJ2YlNBOUlDaHpaV3hsWTNSdmNpa2dQVDRnZTF4dUlDQWdJR052Ym5OMElHNXZaR1Z6SUQwZ0tIUjVjR1Z2WmlCelpXeGxZM1J2Y2lBOVBUMGdKM04wY21sdVp5Y3BJRDhnWkc5amRXMWxiblF1Y1hWbGNubFRaV3hsWTNSdmNrRnNiQ2h6Wld4bFkzUnZjaWtnT2lCelpXeGxZM1J2Y2p0Y2JpQWdJQ0J5WlhSMWNtNGdLRzV2WkdWekxteGxibWQwYUNrZ1B5QmJYUzV6YkdsalpTNWpZV3hzS0c1dlpHVnpLU0E2SUZ0ZExuQjFjMmdvYm05a1pYTXBPMXh1ZlR0Y2JseHVMeXBjYmlBZ0lDQlRjR3hwZENCamIyMXRZUzFrWld4cGJXbDBaV1FnYzNSeWFXNW5YRzVjYmlBZ0lDQmNJbVp2Ynl4aVlYSmNJaUF0UGlCYlhDSm1iMjljSWl3Z1hDSmlZWEpjSWwxY2JseHVJQ0FnSUVCd1lYSmhiU0JiYzNSeWFXNW5YVnh1SUNBZ0lFQnlaWFIxY200Z1cyRnljbUY1WFZ4dUtpOWNibVY0Y0c5eWRDQmpiMjV6ZENCemNHeHBkRU52YlcxaFJHVnNhVzFwZEdWa0lEMGdLSFpoYkhWbEtTQTlQaUJwYzFOMGNtbHVaeWgyWVd4MVpTa2dQeUIyWVd4MVpTNXpjR3hwZENndkxGeGNjeW92S1NBNklGdDJZV3gxWlYwN1hHNWNiaThxWEc0Z0lDQWdVM0JzYVhRZ2MzQmhZMlV0WkdWc2FXMXBkR1ZrSUhOMGNtbHVaMXh1WEc0Z0lDQWdYQ0ptYjI4Z1ltRnlYQ0lnTFQ0Z1cxd2labTl2WENJc0lGd2lZbUZ5WENKZFhHNWNiaUFnSUNCQWNHRnlZVzBnVzNOMGNtbHVaMTFjYmlBZ0lDQkFjbVYwZFhKdUlGdGhjbkpoZVYxY2Jpb3ZYRzVsZUhCdmNuUWdZMjl1YzNRZ2MzQnNhWFJUY0dGalpVUmxiR2x0YVhSbFpDQTlJQ2gyWVd4MVpTa2dQVDRnYVhOVGRISnBibWNvZG1Gc2RXVXBJRDhnZG1Gc2RXVXVjM0JzYVhRb0p5QW5LU0E2SUZ0MllXeDFaVjA3WEc1Y2JpOHFYRzRnSUNBZ1EyOXVkbVZ5ZENCdWRXMWlaWElnZEc4Z2VDQmtaV05wYldGc0lIQnNZV05sYzF4dVhHNGdJQ0FnUUhCaGNtRnRJRnR1ZFcxaVpYSmRYRzRnSUNBZ1FIQmhjbUZ0SUZ0dWRXMWlaWEpkWEc0Z0lDQWdRSEpsZEhWeWJpQmJiblZ0WW1WeVhWeHVLaTljYm1WNGNHOXlkQ0JqYjI1emRDQjBiMFJsWTJsdFlXd2dQU0FvYm5WdExDQndjbVZqYVhOcGIyNGdQU0F5S1NBOVBpQjdYRzRnSUNBZ2NISmxZMmx6YVc5dUlEMGdNVEFnS2lvZ2NISmxZMmx6YVc5dU8xeHVJQ0FnSUhKbGRIVnliaUJOWVhSb0xuSnZkVzVrS0c1MWJTQXFJSEJ5WldOcGMybHZiaWtnTHlCd2NtVmphWE5wYjI0N1hHNTlPMXh1SWwxOVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvaW5jL3V0aWxzLmpzXG4gKiogbW9kdWxlIGlkID0gMlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0cy5zZXRHbG9iYWxEaWxhdGlvbiA9IHVuZGVmaW5lZDtcblxudmFyIF91dGlscyA9IHJlcXVpcmUoJy4uL2luYy91dGlscycpO1xuXG52YXIgTUFYX0VMQVBTRUQgPSAzMztcblxudmFyIGN1cnJlbnQgPSAwO1xudmFyIGVsYXBzZWQgPSAxNi43O1xudmFyIGRpbGF0aW9uID0gMTtcblxuZXhwb3J0cy5kZWZhdWx0ID0ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gKGZyYW1lc3RhbXApIHtcbiAgICAgICAgZWxhcHNlZCA9IE1hdGgubWF4KE1hdGgubWluKGZyYW1lc3RhbXAgLSBjdXJyZW50LCBNQVhfRUxBUFNFRCksIDEpICogZGlsYXRpb247XG4gICAgICAgIGN1cnJlbnQgPSBmcmFtZXN0YW1wO1xuICAgIH0sXG5cbiAgICBzdGFydDogZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gY3VycmVudCA9ICgwLCBfdXRpbHMuY3VycmVudFRpbWUpKCk7XG4gICAgfSxcblxuICAgIGdldEVsYXBzZWQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIGVsYXBzZWQ7XG4gICAgfVxufTtcbnZhciBzZXRHbG9iYWxEaWxhdGlvbiA9IGV4cG9ydHMuc2V0R2xvYmFsRGlsYXRpb24gPSBmdW5jdGlvbiAobmV3RGlsYXRpb24pIHtcbiAgICByZXR1cm4gZGlsYXRpb24gPSBuZXdEaWxhdGlvbjtcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5OeVl5OXdjbTlqWlhOekwzUnBiV1Z5TG1weklsMHNJbTVoYldWeklqcGJYU3dpYldGd2NHbHVaM01pT2lJN096czdPenM3UVVGRlFTeEpRVUZOTEZkQlFWY3NSMEZCUnl4RlFVRkZMRU5CUVVNN08wRkJSWFpDTEVsQlFVa3NUMEZCVHl4SFFVRkhMRU5CUVVNc1EwRkJRenRCUVVOb1FpeEpRVUZKTEU5QlFVOHNSMEZCUnl4SlFVRkpMRU5CUVVNN1FVRkRia0lzU1VGQlNTeFJRVUZSTEVkQlFVY3NRMEZCUXl4RFFVRkRPenRyUWtGRlJqdEJRVU5ZTEZWQlFVMHNSVUZCUlN4VlFVRkRMRlZCUVZVc1JVRkJTenRCUVVOd1FpeGxRVUZQTEVkQlFVY3NTVUZCU1N4RFFVRkRMRWRCUVVjc1EwRkJReXhKUVVGSkxFTkJRVU1zUjBGQlJ5eERRVUZETEZWQlFWVXNSMEZCUnl4UFFVRlBMRVZCUVVVc1YwRkJWeXhEUVVGRExFVkJRVVVzUTBGQlF5eERRVUZETEVkQlFVY3NVVUZCVVN4RFFVRkRPMEZCUXpsRkxHVkJRVThzUjBGQlJ5eFZRVUZWTEVOQlFVTTdTMEZEZUVJN08wRkJSVVFzVTBGQlN5eEZRVUZGTzJWQlFVMHNUMEZCVHl4SFFVRkhMRmRCWkd4Q0xGZEJRVmNzUjBGamIwSTdTMEZCUVRzN1FVRkZjRU1zWTBGQlZTeEZRVUZGTzJWQlFVMHNUMEZCVHp0TFFVRkJPME5CUXpWQ08wRkJSVTBzU1VGQlRTeHBRa0ZCYVVJc1YwRkJha0lzYVVKQlFXbENMRWRCUVVjc1ZVRkJReXhYUVVGWE8xZEJRVXNzVVVGQlVTeEhRVUZITEZkQlFWYzdRMEZCUVN4RFFVRkRJaXdpWm1sc1pTSTZJblJwYldWeUxtcHpJaXdpYzI5MWNtTmxVbTl2ZENJNklpOVZjMlZ5Y3k5TllYUjBVR1Z5Y25rdlUybDBaWE12Y0c5d2JXOTBhVzl1SWl3aWMyOTFjbU5sYzBOdmJuUmxiblFpT2xzaWFXMXdiM0owSUhzZ1kzVnljbVZ1ZEZScGJXVWdmU0JtY205dElDY3VMaTlwYm1NdmRYUnBiSE1uTzF4dVhHNWpiMjV6ZENCTlFWaGZSVXhCVUZORlJDQTlJRE16TzF4dVhHNXNaWFFnWTNWeWNtVnVkQ0E5SURBN1hHNXNaWFFnWld4aGNITmxaQ0E5SURFMkxqYzdYRzVzWlhRZ1pHbHNZWFJwYjI0Z1BTQXhPMXh1WEc1bGVIQnZjblFnWkdWbVlYVnNkQ0I3WEc0Z0lDQWdkWEJrWVhSbE9pQW9abkpoYldWemRHRnRjQ2tnUFQ0Z2UxeHVJQ0FnSUNBZ0lDQmxiR0Z3YzJWa0lEMGdUV0YwYUM1dFlYZ29UV0YwYUM1dGFXNG9abkpoYldWemRHRnRjQ0F0SUdOMWNuSmxiblFzSUUxQldGOUZURUZRVTBWRUtTd2dNU2tnS2lCa2FXeGhkR2x2Ymp0Y2JpQWdJQ0FnSUNBZ1kzVnljbVZ1ZENBOUlHWnlZVzFsYzNSaGJYQTdYRzRnSUNBZ2ZTeGNibHh1SUNBZ0lITjBZWEowT2lBb0tTQTlQaUJqZFhKeVpXNTBJRDBnWTNWeWNtVnVkRlJwYldVb0tTeGNibHh1SUNBZ0lHZGxkRVZzWVhCelpXUTZJQ2dwSUQwK0lHVnNZWEJ6WldSY2JuMDdYRzVjYm1WNGNHOXlkQ0JqYjI1emRDQnpaWFJIYkc5aVlXeEVhV3hoZEdsdmJpQTlJQ2h1WlhkRWFXeGhkR2x2YmlrZ1BUNGdaR2xzWVhScGIyNGdQU0J1WlhkRWFXeGhkR2x2YmpzaVhYMD1cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL3Byb2Nlc3MvdGltZXIuanNcbiAqKiBtb2R1bGUgaWQgPSAzXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbnZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfUHJvY2VzczIgPSByZXF1aXJlKCcuLi9wcm9jZXNzL1Byb2Nlc3MnKTtcblxudmFyIF9Qcm9jZXNzMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX1Byb2Nlc3MyKTtcblxudmFyIF9jYWxjID0gcmVxdWlyZSgnLi4vaW5jL2NhbGMnKTtcblxudmFyIF91dGlscyA9IHJlcXVpcmUoJy4uL2luYy91dGlscycpO1xuXG52YXIgX2JpbmRBZGFwdGVyID0gcmVxdWlyZSgnLi4vaW5jL2JpbmQtYWRhcHRlcicpO1xuXG52YXIgX2JpbmRBZGFwdGVyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2JpbmRBZGFwdGVyKTtcblxudmFyIF9jb2xvciA9IHJlcXVpcmUoJy4uL3ZhbHVlLXR5cGVzL2NvbG9yJyk7XG5cbnZhciBfY29sb3IyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY29sb3IpO1xuXG52YXIgX2NvbXBsZXggPSByZXF1aXJlKCcuLi92YWx1ZS10eXBlcy9jb21wbGV4Jyk7XG5cbnZhciBfY29tcGxleDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jb21wbGV4KTtcblxudmFyIF91bml0ID0gcmVxdWlyZSgnLi4vdmFsdWUtdHlwZXMvdW5pdCcpO1xuXG52YXIgX3VuaXQyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfdW5pdCk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhvYmosIGtleXMpIHsgdmFyIHRhcmdldCA9IHt9OyBmb3IgKHZhciBpIGluIG9iaikgeyBpZiAoa2V5cy5pbmRleE9mKGkpID49IDApIGNvbnRpbnVlOyBpZiAoIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGkpKSBjb250aW51ZTsgdGFyZ2V0W2ldID0gb2JqW2ldOyB9IHJldHVybiB0YXJnZXQ7IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoIXNlbGYpIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBjYWxsICYmICh0eXBlb2YgY2FsbCA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSA/IGNhbGwgOiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90IFwiICsgdHlwZW9mIHN1cGVyQ2xhc3MpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIGVudW1lcmFibGU6IGZhbHNlLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIDogc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzczsgfVxuXG52YXIgREVGQVVMVF9QUk9QID0gJ2N1cnJlbnQnO1xudmFyIE5VTUVSSUNBTF9WQUxVRVMgPSBbREVGQVVMVF9QUk9QLCAnZnJvbScsICd0bycsICdwcmV2JywgJ3ZlbG9jaXR5J107XG52YXIgTlVNX05VTUVSSUNBTF9WQUxVRVMgPSBOVU1FUklDQUxfVkFMVUVTLmxlbmd0aDtcblxudmFyIEFjdGlvbiA9IChmdW5jdGlvbiAoX1Byb2Nlc3MpIHtcbiAgICBfaW5oZXJpdHMoQWN0aW9uLCBfUHJvY2Vzcyk7XG5cbiAgICBmdW5jdGlvbiBBY3Rpb24ocHJvcHMpIHtcbiAgICAgICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIEFjdGlvbik7XG5cbiAgICAgICAgcHJvcHMuc3RhdGUgPSB7fTtcbiAgICAgICAgcHJvcHMudmFsdWVLZXlzID0gW107XG4gICAgICAgIHByb3BzLnBhcmVudEtleXMgPSBbXTtcbiAgICAgICAgcmV0dXJuIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIF9Qcm9jZXNzLmNhbGwodGhpcywgcHJvcHMpKTtcbiAgICB9XG5cbiAgICAvKlxuICAgICAgICAjIFNldCBBY3Rpb24gcHJvcGVydGllc1xuICAgICAgICAjIyBTZXQgdXNlci1kZWZpbmVkIEFjdGlvbiBwcm9wZXJ0aWVzXG4gICAgICAgICBAcGFyYW0gW29iamVjdF1cbiAgICAgICAgQHJldHVybiBbQWN0aW9uXVxuICAgICovXG5cbiAgICBBY3Rpb24ucHJvdG90eXBlLnNldCA9IGZ1bmN0aW9uIHNldCgpIHtcbiAgICAgICAgdmFyIHByb3BzID0gYXJndW1lbnRzLmxlbmd0aCA8PSAwIHx8IGFyZ3VtZW50c1swXSA9PT0gdW5kZWZpbmVkID8ge30gOiBhcmd1bWVudHNbMF07XG4gICAgICAgIHZhciB2YWx1ZXMgPSBwcm9wcy52YWx1ZXM7XG4gICAgICAgIHZhciBvbiA9IHByb3BzLm9uO1xuXG4gICAgICAgIHZhciBwcm9wc1RvU2V0ID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKHByb3BzLCBbJ3ZhbHVlcycsICdvbiddKTtcblxuICAgICAgICB2YXIgY3VycmVudFZhbHVlcyA9IHRoaXMudmFsdWVzID0gdGhpcy52YWx1ZXMgfHwge307XG4gICAgICAgIHZhciBkZWZhdWx0VmFsdWUgPSB0aGlzLmdldERlZmF1bHRWYWx1ZSgpO1xuICAgICAgICB2YXIgaW5oZXJpdGFibGUgPSB7fTtcblxuICAgICAgICAvLyAxKSBTZXQgbm9uLWNvbnN1bWVkIHByb3BlcnRpZXNcbiAgICAgICAgX1Byb2Nlc3MucHJvdG90eXBlLnNldC5jYWxsKHRoaXMsIHByb3BzVG9TZXQpO1xuXG4gICAgICAgIC8vIDIpIEJpbmQgYG9uYCB0byBhbiBhZGFwdGVyLCBpZiBub3QgYWxyZWFkeVxuICAgICAgICBpZiAob24pIHtcbiAgICAgICAgICAgIC8vIER1Y2t0eXBpc2ggY2hlY2sgZm9yIEFkYXB0ZXJcbiAgICAgICAgICAgIHRoaXMub24gPSAhb24uc2V0dGVyID8gKDAsIF9iaW5kQWRhcHRlcjIuZGVmYXVsdCkob24pIDogb247XG4gICAgICAgIH1cblxuICAgICAgICAvLyAzKSBQcmltZSBhbiBvYmplY3QgdG8gaW5oZXJpdCBmcm9tLCB3aXRoIG9ubHkgYHZhbHVlYCBwcm9wZXJ0aWVzXG4gICAgICAgIGZvciAodmFyIGtleSBpbiBkZWZhdWx0VmFsdWUpIHtcbiAgICAgICAgICAgIGlmIChkZWZhdWx0VmFsdWUuaGFzT3duUHJvcGVydHkoa2V5KSAmJiBwcm9wc1RvU2V0Lmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICAgICAgICBpbmhlcml0YWJsZVtrZXldID0gcHJvcHNUb1NldFtrZXldO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gNCkgVXBkYXRlIGV4aXN0aW5nIHZhbHVlcyB3aXRoIGluaGVyaXRhYmxlIHByb3BlcnRpZXNcbiAgICAgICAgZm9yICh2YXIga2V5IGluIGN1cnJlbnRWYWx1ZXMpIHtcbiAgICAgICAgICAgIC8vIEV4Y2x1ZGUgdmFyaWFibGVzIHRvIGJlIHNldCwgYXMgd2UnbGwgZGVhbCB3aXRoIHRob3NlIHNlcGVyYXRlbHlcbiAgICAgICAgICAgIGlmIChjdXJyZW50VmFsdWVzLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICAgICAgICBjdXJyZW50VmFsdWVzW2tleV0gPSBfZXh0ZW5kcyh7fSwgY3VycmVudFZhbHVlc1trZXldLCBpbmhlcml0YWJsZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyA1KSBVcGRhdGVcbiAgICAgICAgaWYgKHZhbHVlcykge1xuICAgICAgICAgICAgdGhpcy5zZXRWYWx1ZXModmFsdWVzLCBpbmhlcml0YWJsZSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xuXG4gICAgQWN0aW9uLnByb3RvdHlwZS5zZXRWYWx1ZXMgPSBmdW5jdGlvbiBzZXRWYWx1ZXModmFsdWVzLCBpbmhlcml0RnJvbSkge1xuICAgICAgICB2YXIgY3VycmVudFZhbHVlcyA9IHRoaXMudmFsdWVzO1xuICAgICAgICB2YXIgZGVmYXVsdFZhbHVlID0gdGhpcy5nZXREZWZhdWx0VmFsdWUoKTtcbiAgICAgICAgdmFyIGRlZmF1bHRWYWx1ZVByb3AgPSB0aGlzLmdldERlZmF1bHRWYWx1ZVByb3AoKTtcblxuICAgICAgICAvLyAyKSBMb29wIG92ZXIgZXZlcnkgaW5jb21pbmcgYHZhbHVlYCBhbmQgc2V0XG4gICAgICAgIGZvciAodmFyIGtleSBpbiB2YWx1ZXMpIHtcbiAgICAgICAgICAgIGlmICh2YWx1ZXMuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgICAgICAgIHZhciB2YWx1ZSA9IHt9O1xuICAgICAgICAgICAgICAgIHZhciBjaGlsZHJlbiA9IHt9O1xuICAgICAgICAgICAgICAgIHZhciBoYXNDaGlsZHJlbiA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIHZhciBiYXNlID0gY3VycmVudFZhbHVlc1trZXldID8gY3VycmVudFZhbHVlc1trZXldIDogZGVmYXVsdFZhbHVlO1xuXG4gICAgICAgICAgICAgICAgLy8gSWYgdmFsdWVzIG9zIGFuIG9iamVjdCwgdXNlIGl0IGRpcmVjdGx5XG4gICAgICAgICAgICAgICAgaWYgKCgwLCBfdXRpbHMuaXNPYmopKHZhbHVlc1trZXldKSkge1xuICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IHZhbHVlc1trZXldO1xuXG4gICAgICAgICAgICAgICAgICAgIC8vIE9SIHNldCB0byBhIHRoZSBkZWZhdWx0IHZhbHVlIHByb3BlcnR5IG9mIGEgYmxhbmsgb2JqZWN0XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlW2RlZmF1bHRWYWx1ZVByb3BdID0gdmFsdWVzW2tleV07XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHZhciBuZXdWYWx1ZSA9IF9leHRlbmRzKHt9LCBiYXNlLCBpbmhlcml0RnJvbSwgdmFsdWUpO1xuXG4gICAgICAgICAgICAgICAgLy8gR2V0IGN1cnJlbnQgdmFsdWUgaWYgbm9uZSBpcyBkZWZpbmVkXG4gICAgICAgICAgICAgICAgaWYgKG5ld1ZhbHVlLmN1cnJlbnQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICAvLyBJZiB3ZSBoYXZlIGEgYGZyb21gIHZhbHVlIHNldCwgdGFrZSB0aGF0XG4gICAgICAgICAgICAgICAgICAgIGlmIChuZXdWYWx1ZS5mcm9tICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ld1ZhbHVlLmN1cnJlbnQgPSBuZXdWYWx1ZS5mcm9tO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBPciBpZiB3ZSBoYXZlIGFuIEFkYXB0ZXIsIGdldCBpdCBmcm9tIHRoYXRcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLm9uICYmIHRoaXMub24uZ2V0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3VmFsdWUuY3VycmVudCA9IHRoaXMub24uZ2V0KGtleSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gSWYgaXQncyBzdGlsbCB1bmRlZmluZWQgbWFrZSBpdCBlcXVhbCAwPz9cbiAgICAgICAgICAgICAgICAgICAgaWYgKG5ld1ZhbHVlLmN1cnJlbnQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbmV3VmFsdWUuY3VycmVudCA9IDA7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAobmV3VmFsdWUuZnJvbSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgIG5ld1ZhbHVlLmZyb20gPSBuZXdWYWx1ZS5jdXJyZW50O1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC8vIElmIG91ciBBZGFwdGVyIGhhcyBhIGBnZXRWYWx1ZVR5cGVgIGZ1bmN0aW9uLCB0cnkgdG8gZ2V0IGEgYHR5cGVgIHdpdGggdGhlIHZhbHVlIGtleVxuICAgICAgICAgICAgICAgIGlmICghbmV3VmFsdWUudHlwZSAmJiB0aGlzLm9uICYmIHRoaXMub24uZ2V0VmFsdWVUeXBlKSB7XG4gICAgICAgICAgICAgICAgICAgIG5ld1ZhbHVlLnR5cGUgPSB0aGlzLm9uLmdldFZhbHVlVHlwZShrZXkpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC8vIGMpIExvb3AgdGhyb3VnaCBhbGwgbnVtZXJpY2FsIHByb3BlcnR5IHR5cGVzXG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBOVU1fTlVNRVJJQ0FMX1ZBTFVFUzsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBwcm9wTmFtZSA9IE5VTUVSSUNBTF9WQUxVRVNbaV07XG4gICAgICAgICAgICAgICAgICAgIHZhciB2YWx1ZVByb3AgPSBuZXdWYWx1ZVtwcm9wTmFtZV07XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gSWYgd2UgaGF2ZSB0aGlzIGtpbmQgb2YgcHJvcGVydHksIHByb2Nlc3NcbiAgICAgICAgICAgICAgICAgICAgaWYgKHZhbHVlUHJvcCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBJZiB3ZSBkb24ndCBoYXZlIGEgdHlwZSBzZXQgdG8gdGhpcyB2YWx1ZSwgZmluZCBvbmUgKHVubGVzcyBpdCdzIGEgcmF3IG51bWJlcilcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghbmV3VmFsdWUudHlwZSAmJiAoMCwgX3V0aWxzLmlzU3RyaW5nKSh2YWx1ZVByb3ApKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKF91bml0Mi5kZWZhdWx0LnRlc3QodmFsdWVQcm9wKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXdWYWx1ZS50eXBlID0gX3VuaXQyLmRlZmF1bHQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChfY29sb3IyLmRlZmF1bHQudGVzdCh2YWx1ZVByb3ApKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ld1ZhbHVlLnR5cGUgPSBfY29sb3IyLmRlZmF1bHQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChfY29tcGxleDIuZGVmYXVsdC50ZXN0KHZhbHVlUHJvcCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3VmFsdWUudHlwZSA9IF9jb21wbGV4Mi5kZWZhdWx0O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG5ld1ZhbHVlLnR5cGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBJZiB3ZSdyZSBnb2luZyB0byBzcGxpdCB0aGlzIHZhbHVlIGludG8gY2hpbGQgdmFsdWVzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG5ld1ZhbHVlLnR5cGUuaGFzT3duUHJvcGVydHkoJ3NwbGl0JykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHNwbGl0UHJvcCA9IG5ld1ZhbHVlLnR5cGUuc3BsaXQodmFsdWVQcm9wKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBzcGxpdEtleSBpbiBzcGxpdFByb3ApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzcGxpdFByb3AuaGFzT3duUHJvcGVydHkoc3BsaXRLZXkpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGNvbWJpbmVkS2V5ID0ga2V5ICsgc3BsaXRLZXk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWNoaWxkcmVuW2NvbWJpbmVkS2V5XSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgX2RlZmF1bHRWYWx1ZSA9IG5ld1ZhbHVlLnR5cGUuZGVmYXVsdFByb3BzICYmIG5ld1ZhbHVlLnR5cGUuZGVmYXVsdFByb3BzW3NwbGl0S2V5XSA/IG5ld1ZhbHVlLnR5cGUuZGVmYXVsdFByb3BzW3NwbGl0S2V5XSA6IHt9O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGlsZHJlbltjb21iaW5lZEtleV0gPSBfZXh0ZW5kcyh7fSwgbmV3VmFsdWUsIF9kZWZhdWx0VmFsdWUsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhcmVudDoga2V5LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hpbGRLZXk6IHNwbGl0S2V5LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogdW5kZWZpbmVkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoaWxkcmVuW2NvbWJpbmVkS2V5XVtwcm9wTmFtZV0gPSBzcGxpdFByb3Bbc3BsaXRLZXldO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gSWYgdGhpcyBoYXMgYSBgdGVtcGxhdGVgIGZ1bmN0aW9uLCBnZW5lcmF0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIW5ld1ZhbHVlLnRlbXBsYXRlICYmIG5ld1ZhbHVlLnR5cGUudGVtcGxhdGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ld1ZhbHVlLnRlbXBsYXRlID0gbmV3VmFsdWUudHlwZS50ZW1wbGF0ZShuZXdWYWx1ZVtwcm9wTmFtZV0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGFzQ2hpbGRyZW4gPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAobmV3VmFsdWUudHlwZS5kZWZhdWx0UHJvcHMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3VmFsdWUgPSBfZXh0ZW5kcyh7fSwgbmV3VmFsdWUsIG5ld1ZhbHVlLnR5cGUuZGVmYXVsdFByb3BzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAobmV3VmFsdWUudHlwZS5wYXJzZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXdWYWx1ZVtwcm9wTmFtZV0gPSBuZXdWYWx1ZS50eXBlLnBhcnNlKG5ld1ZhbHVlW3Byb3BOYW1lXSwgbmV3VmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gLy8gRW5kIG51bWVyaWNhbCBwcm9wZXJ0eSBpdGVyYXRpb25cblxuICAgICAgICAgICAgICAgIC8vIFNldCBgcHJldmAgdG8gYGN1cnJlbnRgIGlmIGl0IGlzbid0IGFscmVhZHkgZGVmaW5lZFxuICAgICAgICAgICAgICAgIGlmIChuZXdWYWx1ZS5wcmV2ID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgbmV3VmFsdWUucHJldiA9IG5ld1ZhbHVlLmN1cnJlbnQ7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgY3VycmVudFZhbHVlc1trZXldID0gbmV3VmFsdWU7XG5cbiAgICAgICAgICAgICAgICAvLyBJZiB0aGlzIHZhbHVlIGRvZXNuJ3QgaGF2ZSBjaGlsZHJlbiwgYWRkIHRvIHZhbHVlS2V5c1xuICAgICAgICAgICAgICAgIGlmICghaGFzQ2hpbGRyZW4pIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMudmFsdWVLZXlzLmluZGV4T2Yoa2V5KSA9PT0gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudmFsdWVLZXlzLnB1c2goa2V5KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIC8vIE9yIGFkZCB0byBwYXJlbnRLZXlzXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ld1ZhbHVlLmNoaWxkcmVuID0gbmV3VmFsdWUuY2hpbGRyZW4gfHwge307XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnBhcmVudEtleXMuaW5kZXhPZihrZXkpID09PSAtMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucGFyZW50S2V5cy5wdXNoKGtleSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0VmFsdWVzKGNoaWxkcmVuKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9IC8vIEVuZCB2YWx1ZSBpdGVyYXRpb25cblxuICAgICAgICAvLyAzKSBQcmVjb21wdXRlIHZhbHVlIGtleSBhbmQgcGFyZW50IGtleSBsZW5ndGggdG8gcHJldmVudCBwZXItZnJhbWUgbWVhc3VyZW1lbnRcbiAgICAgICAgdGhpcy5udW1WYWx1ZUtleXMgPSB0aGlzLnZhbHVlS2V5cy5sZW5ndGg7XG4gICAgICAgIHRoaXMubnVtUGFyZW50S2V5cyA9IHRoaXMucGFyZW50S2V5cy5sZW5ndGg7XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfTtcblxuICAgIC8qXG4gICAgICAgIERlY2lkZSB3aGV0aGVyIHRoaXMgQWN0aW9uIHdpbGwgcmVuZGVyIG9uIG5leHQgZnJhbWVcbiAgICAgICAgIEBwYXJhbSBbQWN0aW9uXVxuICAgICAgICBAcGFyYW0gW251bWJlcl1cbiAgICAgICAgQHBhcmFtIFtudW1iZXJdXG4gICAgICAgIEByZXR1cm4gW2Jvb2xlYW5dOiBSZXR1cm4gdHJ1ZSB0byByZW5kZXJcbiAgICAqL1xuXG4gICAgQWN0aW9uLnByb3RvdHlwZS53aWxsUmVuZGVyID0gZnVuY3Rpb24gd2lsbFJlbmRlcihhY3Rpb24sIGZyYW1lU3RhbXAsIGVsYXBzZWQpIHtcbiAgICAgICAgdmFyIGhhc0NoYW5nZWQgPSBmYWxzZTtcblxuICAgICAgICAvLyBDaGVjayBpZiBiYXNlIHZhbHVlcyBoYXZlIHVwZGF0ZWRcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLm51bVZhbHVlS2V5czsgaSsrKSB7XG4gICAgICAgICAgICB2YXIga2V5ID0gdGhpcy52YWx1ZUtleXNbaV07XG4gICAgICAgICAgICB2YXIgdmFsdWUgPSB0aGlzLnZhbHVlc1trZXldO1xuXG4gICAgICAgICAgICAvLyBSdW4gdHJhbnNmb3JtIGZ1bmN0aW9uIChpZiBwcmVzZW50KVxuICAgICAgICAgICAgaWYgKHZhbHVlLnRyYW5zZm9ybSkge1xuICAgICAgICAgICAgICAgIHZhbHVlLmN1cnJlbnQgPSB2YWx1ZS50cmFuc2Zvcm0odmFsdWUuY3VycmVudCwga2V5LCB0aGlzKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gQ2FwIG1pbmltdW1cbiAgICAgICAgICAgIGlmICgoMCwgX3V0aWxzLmlzTnVtKSh2YWx1ZS5taW4pKSB7XG4gICAgICAgICAgICAgICAgdmFsdWUuY3VycmVudCA9IE1hdGgubWF4KHZhbHVlLmN1cnJlbnQsIHZhbHVlLm1pbik7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIENhcCBtYXhpbXVtXG4gICAgICAgICAgICBpZiAoKDAsIF91dGlscy5pc051bSkodmFsdWUubWF4KSkge1xuICAgICAgICAgICAgICAgIHZhbHVlLmN1cnJlbnQgPSBNYXRoLm1pbih2YWx1ZS5jdXJyZW50LCB2YWx1ZS5tYXgpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBSb3VuZCBudW1iZXJcbiAgICAgICAgICAgIGlmICh2YWx1ZS5yb3VuZCkge1xuICAgICAgICAgICAgICAgIHZhbHVlLmN1cnJlbnQgPSBNYXRoLnJvdW5kKHZhbHVlLmN1cnJlbnQpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB2YWx1ZS5mcmFtZUNoYW5nZSA9IHZhbHVlLmN1cnJlbnQgLSB2YWx1ZS5wcmV2O1xuXG4gICAgICAgICAgICAvLyBVcGRhdGUgdmVsb2NpdHlcbiAgICAgICAgICAgIGlmICghdGhpcy5jYWxjdWxhdGVzVmVsb2NpdHkpIHtcbiAgICAgICAgICAgICAgICB2YWx1ZS52ZWxvY2l0eSA9ICgwLCBfY2FsYy5zcGVlZFBlclNlY29uZCkodmFsdWUuZnJhbWVDaGFuZ2UsIGVsYXBzZWQpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBJZiB0aGlzIHZhbHVlIGhhcyBjaGFuZ2VkXG4gICAgICAgICAgICBpZiAodmFsdWUucHJldiAhPT0gdmFsdWUuY3VycmVudCkge1xuICAgICAgICAgICAgICAgIGhhc0NoYW5nZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHZhbHVlLnByZXYgPSB2YWx1ZS5jdXJyZW50O1xuXG4gICAgICAgICAgICAgICAgLy8gQXBwZW5kIHVuaXRcbiAgICAgICAgICAgICAgICB2YXIgdmFsdWVGb3JTdGF0ZSA9IHZhbHVlLnR5cGUgJiYgdmFsdWUudHlwZS5zZXJpYWxpemUgPyB2YWx1ZS50eXBlLnNlcmlhbGl6ZSh2YWx1ZS5jdXJyZW50LCB2YWx1ZSkgOiB2YWx1ZS5jdXJyZW50O1xuXG4gICAgICAgICAgICAgICAgLy8gQWRkIHRvIHN0YXRlIGlmIHRoaXMgaXMgbm90IGEgY2hpbGQgdmF1ZVxuICAgICAgICAgICAgICAgIGlmICghdmFsdWUucGFyZW50KSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGVba2V5XSA9IHZhbHVlRm9yU3RhdGU7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy52YWx1ZXNbdmFsdWUucGFyZW50XS5jaGlsZHJlblt2YWx1ZS5jaGlsZEtleV0gPSB2YWx1ZUZvclN0YXRlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLm9uRnJhbWUpIHtcbiAgICAgICAgICAgIHRoaXMub25GcmFtZSh0aGlzLnN0YXRlLCB0aGlzKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzLm9uQ2xlYW51cCA/IHRydWUgOiBoYXNDaGFuZ2VkO1xuICAgIH07XG5cbiAgICAvKlxuICAgICAgICBJZiB3ZSBhcmUgcmVuZGVyaW5nLCByZWNvbWJpbmUgcGFyZW50IHZhbHVlcyBmaXJzdFxuICAgICovXG5cbiAgICBBY3Rpb24ucHJvdG90eXBlLm9uUHJlUmVuZGVyID0gZnVuY3Rpb24gb25QcmVSZW5kZXIoKSB7XG4gICAgICAgIC8vIFVwZGF0ZSBwYXJlbnQgdmFsdWVzXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5udW1QYXJlbnRLZXlzOyBpKyspIHtcbiAgICAgICAgICAgIHZhciBrZXkgPSB0aGlzLnBhcmVudEtleXNbaV07XG4gICAgICAgICAgICB2YXIgdmFsdWUgPSB0aGlzLnZhbHVlc1trZXldO1xuXG4gICAgICAgICAgICB2YWx1ZS5jdXJyZW50ID0gdmFsdWUudHlwZS5jb21iaW5lKHZhbHVlLmNoaWxkcmVuLCB2YWx1ZS50ZW1wbGF0ZSk7XG5cbiAgICAgICAgICAgIGlmICh0aGlzLnN0YXRlW2tleV0gIT09IHZhbHVlLmN1cnJlbnQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXRlW2tleV0gPSB2YWx1ZS5jdXJyZW50O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcblxuICAgIEFjdGlvbi5wcm90b3R5cGUub25SZW5kZXIgPSBmdW5jdGlvbiBvblJlbmRlcihfcmVmKSB7XG4gICAgICAgIHZhciBzdGF0ZSA9IF9yZWYuc3RhdGU7XG4gICAgICAgIHZhciBvbiA9IF9yZWYub247XG5cbiAgICAgICAgaWYgKG9uICYmIG9uLnNldCkge1xuICAgICAgICAgICAgb24uc2V0KHN0YXRlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLm9uVXBkYXRlKSB7XG4gICAgICAgICAgICB0aGlzLm9uVXBkYXRlKHRoaXMuc3RhdGUsIHRoaXMpO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIEFjdGlvbi5wcm90b3R5cGUucGF1c2UgPSBmdW5jdGlvbiBwYXVzZSgpIHtcbiAgICAgICAgX1Byb2Nlc3MucHJvdG90eXBlLnN0b3AuY2FsbCh0aGlzKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfTtcblxuICAgIEFjdGlvbi5wcm90b3R5cGUucmVzdW1lID0gZnVuY3Rpb24gcmVzdW1lKCkge1xuICAgICAgICBfUHJvY2Vzcy5wcm90b3R5cGUuc3RhcnQuY2FsbCh0aGlzKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfTtcblxuICAgIEFjdGlvbi5wcm90b3R5cGUuc3RhcnQgPSBmdW5jdGlvbiBzdGFydCgpIHtcbiAgICAgICAgdmFyIHZhbHVlcyA9IHRoaXMudmFsdWVzO1xuICAgICAgICBfUHJvY2Vzcy5wcm90b3R5cGUuc3RhcnQuY2FsbCh0aGlzKTtcblxuICAgICAgICBmb3IgKHZhciBrZXkgaW4gdmFsdWVzKSB7XG4gICAgICAgICAgICBpZiAodmFsdWVzLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICAgICAgICB2YWx1ZXNba2V5XS5wcmV2ID0gdmFsdWVzW2tleV0ub3JpZ2luID0gdmFsdWVzW2tleV0uY3VycmVudDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG5cbiAgICAvKlxuICAgICAgICAjIEdldCBkZWZhdWx0IEFjdGlvbiB2YWx1ZSBwcm9wZXJ0aWVzXG4gICAgICAgICBAcmV0dXJuIFtvYmplY3RdXG4gICAgKi9cblxuICAgIEFjdGlvbi5wcm90b3R5cGUuZ2V0RGVmYXVsdFZhbHVlID0gZnVuY3Rpb24gZ2V0RGVmYXVsdFZhbHVlKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgdmVsb2NpdHk6IDAsXG4gICAgICAgICAgICByb3VuZDogZmFsc2VcbiAgICAgICAgfTtcbiAgICB9O1xuXG4gICAgLypcbiAgICAgICAgIyBHZXQgZGVmYXVsdCBBY3Rpb24gdmFsdWUgcHJvcGVydHkgbmFtZVxuICAgICAgICAjIyBTZXQgdGhpcyBgdmFsdWVgIHByb3BlcnR5IHdoZW4gc2V0IGFzIHZhbHVlIGluc3RlYWQgb2Ygb2JqZWN0XG4gICAgICAgICBAcmV0dXJuIFtzdHJpbmddXG4gICAgKi9cblxuICAgIEFjdGlvbi5wcm90b3R5cGUuZ2V0RGVmYXVsdFZhbHVlUHJvcCA9IGZ1bmN0aW9uIGdldERlZmF1bHRWYWx1ZVByb3AoKSB7XG4gICAgICAgIHJldHVybiBERUZBVUxUX1BST1A7XG4gICAgfTtcblxuICAgIHJldHVybiBBY3Rpb247XG59KShfUHJvY2VzczMuZGVmYXVsdCk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IEFjdGlvbjtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbk55WXk5aFkzUnBiMjV6TDBGamRHbHZiaTVxY3lKZExDSnVZVzFsY3lJNlcxMHNJbTFoY0hCcGJtZHpJam9pT3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN08wRkJVVUVzU1VGQlRTeFpRVUZaTEVkQlFVY3NVMEZCVXl4RFFVRkRPMEZCUXk5Q0xFbEJRVTBzWjBKQlFXZENMRWRCUVVjc1EwRkJReXhaUVVGWkxFVkJRVVVzVFVGQlRTeEZRVUZGTEVsQlFVa3NSVUZCUlN4TlFVRk5MRVZCUVVVc1ZVRkJWU3hEUVVGRExFTkJRVU03UVVGRE1VVXNTVUZCVFN4dlFrRkJiMElzUjBGQlJ5eG5Ra0ZCWjBJc1EwRkJReXhOUVVGTkxFTkJRVU03TzBsQlJXaERMRTFCUVUwN1kwRkJUaXhOUVVGTk96dEJRVU4yUWl4aFFVUnBRaXhOUVVGTkxFTkJRMWdzUzBGQlN5eEZRVUZGT3poQ1FVUkdMRTFCUVUwN08wRkJSVzVDTEdGQlFVc3NRMEZCUXl4TFFVRkxMRWRCUVVjc1JVRkJSU3hEUVVGRE8wRkJRMnBDTEdGQlFVc3NRMEZCUXl4VFFVRlRMRWRCUVVjc1JVRkJSU3hEUVVGRE8wRkJRM0pDTEdGQlFVc3NRMEZCUXl4VlFVRlZMRWRCUVVjc1JVRkJSU3hEUVVGRE8yZEVRVU4wUWl4dlFrRkJUU3hMUVVGTExFTkJRVU03UzBGRFpqczdPenM3T3pzN1FVRkJRVHRCUVU1blFpeFZRVUZOTEZkQlpYWkNMRWRCUVVjc2EwSkJRV0U3V1VGQldpeExRVUZMTEhsRVFVRkhMRVZCUVVVN1dVRkRSaXhOUVVGTkxFZEJRWGRDTEV0QlFVc3NRMEZCYmtNc1RVRkJUVHRaUVVGRkxFVkJRVVVzUjBGQmIwSXNTMEZCU3l4RFFVRXpRaXhGUVVGRk96dFpRVUZMTEZWQlFWVXNORUpCUVVzc1MwRkJTenM3UVVGRE0wTXNXVUZCVFN4aFFVRmhMRWRCUVVjc1NVRkJTU3hEUVVGRExFMUJRVTBzUjBGQlJ5eEpRVUZKTEVOQlFVTXNUVUZCVFN4SlFVRkpMRVZCUVVVc1EwRkJRenRCUVVOMFJDeFpRVUZOTEZsQlFWa3NSMEZCUnl4SlFVRkpMRU5CUVVNc1pVRkJaU3hGUVVGRkxFTkJRVU03UVVGRE5VTXNXVUZCVFN4WFFVRlhMRWRCUVVjc1JVRkJSVHM3TzBGQlFVTXNRVUZIZGtJc01rSkJRVTBzUjBGQlJ5eExRVUZCTEU5QlFVTXNWVUZCVlN4RFFVRkRPenM3UVVGQlF5eEJRVWQwUWl4WlFVRkpMRVZCUVVVc1JVRkJSVHM3UVVGRlNpeG5Ra0ZCU1N4RFFVRkRMRVZCUVVVc1IwRkJSeXhCUVVGRExFTkJRVU1zUlVGQlJTeERRVUZETEUxQlFVMHNSMEZCU1N3eVFrRkJXU3hGUVVGRkxFTkJRVU1zUjBGQlJ5eEZRVUZGTEVOQlFVTTdVMEZEYWtRN096dEJRVUZCTEVGQlIwUXNZVUZCU3l4SlFVRkpMRWRCUVVjc1NVRkJTU3haUVVGWkxFVkJRVVU3UVVGRE1VSXNaMEpCUVVrc1dVRkJXU3hEUVVGRExHTkJRV01zUTBGQlF5eEhRVUZITEVOQlFVTXNTVUZCU1N4VlFVRlZMRU5CUVVNc1kwRkJZeXhEUVVGRExFZEJRVWNzUTBGQlF5eEZRVUZGTzBGQlEzQkZMREpDUVVGWExFTkJRVU1zUjBGQlJ5eERRVUZETEVkQlFVY3NWVUZCVlN4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRE8yRkJRM1JETzFOQlEwbzdPenRCUVVGQkxFRkJSMFFzWVVGQlN5eEpRVUZKTEVkQlFVY3NTVUZCU1N4aFFVRmhMRVZCUVVVN08wRkJSVE5DTEdkQ1FVRkpMR0ZCUVdFc1EwRkJReXhqUVVGakxFTkJRVU1zUjBGQlJ5eERRVUZETEVWQlFVVTdRVUZEYmtNc05rSkJRV0VzUTBGQlF5eEhRVUZITEVOQlFVTXNaMEpCUVZFc1lVRkJZU3hEUVVGRExFZEJRVWNzUTBGQlF5eEZRVUZMTEZkQlFWY3NRMEZCUlN4RFFVRkRPMkZCUTJ4Rk8xTkJRMG83T3p0QlFVRkJMRUZCUjBRc1dVRkJTU3hOUVVGTkxFVkJRVVU3UVVGRFVpeG5Ra0ZCU1N4RFFVRkRMRk5CUVZNc1EwRkJReXhOUVVGTkxFVkJRVVVzVjBGQlZ5eERRVUZETEVOQlFVTTdVMEZEZGtNN08wRkJSVVFzWlVGQlR5eEpRVUZKTEVOQlFVTTdTMEZEWmpzN1FVRnVSR2RDTEZWQlFVMHNWMEZ4UkhaQ0xGTkJRVk1zYzBKQlFVTXNUVUZCVFN4RlFVRkZMRmRCUVZjc1JVRkJSVHRCUVVNelFpeFpRVUZOTEdGQlFXRXNSMEZCUnl4SlFVRkpMRU5CUVVNc1RVRkJUU3hEUVVGRE8wRkJRMnhETEZsQlFVMHNXVUZCV1N4SFFVRkhMRWxCUVVrc1EwRkJReXhsUVVGbExFVkJRVVVzUTBGQlF6dEJRVU0xUXl4WlFVRk5MR2RDUVVGblFpeEhRVUZITEVsQlFVa3NRMEZCUXl4dFFrRkJiVUlzUlVGQlJUczdPMEZCUVVNc1FVRkhjRVFzWVVGQlN5eEpRVUZKTEVkQlFVY3NTVUZCU1N4TlFVRk5MRVZCUVVVN1FVRkRjRUlzWjBKQlFVa3NUVUZCVFN4RFFVRkRMR05CUVdNc1EwRkJReXhIUVVGSExFTkJRVU1zUlVGQlJUdEJRVU0xUWl4dlFrRkJTU3hMUVVGTExFZEJRVWNzUlVGQlJTeERRVUZETzBGQlEyWXNiMEpCUVVrc1VVRkJVU3hIUVVGSExFVkJRVVVzUTBGQlF6dEJRVU5zUWl4dlFrRkJTU3hYUVVGWExFZEJRVWNzUzBGQlN5eERRVUZETzBGQlEzaENMRzlDUVVGSkxFbEJRVWtzUjBGQlJ5eGhRVUZoTEVOQlFVTXNSMEZCUnl4RFFVRkRMRWRCUVVjc1lVRkJZU3hEUVVGRExFZEJRVWNzUTBGQlF5eEhRVUZITEZsQlFWazdPenRCUVVGRExFRkJSMnhGTEc5Q1FVRkpMRmRCTjBWS0xFdEJRVXNzUlVFMlJVc3NUVUZCVFN4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRExFVkJRVVU3UVVGRGNFSXNlVUpCUVVzc1IwRkJSeXhOUVVGTkxFTkJRVU1zUjBGQlJ5eERRVUZET3pzN1FVRkJReXhwUWtGSGRrSXNUVUZCVFR0QlFVTklMRFpDUVVGTExFTkJRVU1zWjBKQlFXZENMRU5CUVVNc1IwRkJSeXhOUVVGTkxFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTTdjVUpCUTNwRE96dEJRVVZFTEc5Q1FVRkpMRkZCUVZFc1owSkJRVkVzU1VGQlNTeEZRVUZMTEZkQlFWY3NSVUZCU3l4TFFVRkxMRU5CUVVVN096dEJRVUZETEVGQlIzSkVMRzlDUVVGSkxGRkJRVkVzUTBGQlF5eFBRVUZQTEV0QlFVc3NVMEZCVXl4RlFVRkZPenRCUVVWb1F5eDNRa0ZCU1N4UlFVRlJMRU5CUVVNc1NVRkJTU3hMUVVGTExGTkJRVk1zUlVGQlJUdEJRVU0zUWl4blEwRkJVU3hEUVVGRExFOUJRVThzUjBGQlJ5eFJRVUZSTEVOQlFVTXNTVUZCU1RzN08wRkJRVU1zY1VKQlIzQkRMRTFCUVUwc1NVRkJTU3hKUVVGSkxFTkJRVU1zUlVGQlJTeEpRVUZKTEVsQlFVa3NRMEZCUXl4RlFVRkZMRU5CUVVNc1IwRkJSeXhGUVVGRk8wRkJReTlDTEc5RFFVRlJMRU5CUVVNc1QwRkJUeXhIUVVGSExFbEJRVWtzUTBGQlF5eEZRVUZGTEVOQlFVTXNSMEZCUnl4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRE8zbENRVU4yUXpzN08wRkJRVUVzUVVGSFJDeDNRa0ZCU1N4UlFVRlJMRU5CUVVNc1QwRkJUeXhMUVVGTExGTkJRVk1zUlVGQlJUdEJRVU5vUXl4blEwRkJVU3hEUVVGRExFOUJRVThzUjBGQlJ5eERRVUZETEVOQlFVTTdjVUpCUTNoQ08ybENRVU5LT3p0QlFVVkVMRzlDUVVGSkxGRkJRVkVzUTBGQlF5eEpRVUZKTEV0QlFVc3NVMEZCVXl4RlFVRkZPMEZCUXpkQ0xEUkNRVUZSTEVOQlFVTXNTVUZCU1N4SFFVRkhMRkZCUVZFc1EwRkJReXhQUVVGUExFTkJRVU03YVVKQlEzQkRPenM3UVVGQlFTeEJRVWRFTEc5Q1FVRkpMRU5CUVVNc1VVRkJVU3hEUVVGRExFbEJRVWtzU1VGQlNTeEpRVUZKTEVOQlFVTXNSVUZCUlN4SlFVRkpMRWxCUVVrc1EwRkJReXhGUVVGRkxFTkJRVU1zV1VGQldTeEZRVUZGTzBGQlEyNUVMRFJDUVVGUkxFTkJRVU1zU1VGQlNTeEhRVUZITEVsQlFVa3NRMEZCUXl4RlFVRkZMRU5CUVVNc1dVRkJXU3hEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETzJsQ1FVTTNRenM3TzBGQlFVRXNRVUZIUkN4eFFrRkJTeXhKUVVGSkxFTkJRVU1zUjBGQlJ5eERRVUZETEVWQlFVVXNRMEZCUXl4SFFVRkhMRzlDUVVGdlFpeEZRVUZGTEVOQlFVTXNSVUZCUlN4RlFVRkZPMEZCUXpORExIZENRVUZOTEZGQlFWRXNSMEZCUnl4blFrRkJaMElzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXp0QlFVTnlReXgzUWtGQlRTeFRRVUZUTEVkQlFVY3NVVUZCVVN4RFFVRkRMRkZCUVZFc1EwRkJRenM3TzBGQlFVTXNRVUZIY2tNc2QwSkJRVWtzVTBGQlV5eExRVUZMTEZOQlFWTXNSVUZCUlRzN1FVRkZla0lzTkVKQlFVa3NRMEZCUXl4UlFVRlJMRU5CUVVNc1NVRkJTU3hKUVVGSkxGZEJla2gyUWl4UlFVRlJMRVZCZVVoM1FpeFRRVUZUTEVOQlFVTXNSVUZCUlR0QlFVTjJReXhuUTBGQlNTeGxRVUZUTEVsQlFVa3NRMEZCUXl4VFFVRlRMRU5CUVVNc1JVRkJSVHRCUVVNeFFpeDNRMEZCVVN4RFFVRkRMRWxCUVVrc2FVSkJRVmNzUTBGQlF6czJRa0ZGTlVJc1RVRkJUU3hKUVVGSkxHZENRVUZWTEVsQlFVa3NRMEZCUXl4VFFVRlRMRU5CUVVNc1JVRkJSVHRCUVVOc1F5eDNRMEZCVVN4RFFVRkRMRWxCUVVrc2EwSkJRVmtzUTBGQlF6czJRa0ZGTjBJc1RVRkJUU3hKUVVGSkxHdENRVUZaTEVsQlFVa3NRMEZCUXl4VFFVRlRMRU5CUVVNc1JVRkJSVHRCUVVOd1F5eDNRMEZCVVN4RFFVRkRMRWxCUVVrc2IwSkJRV01zUTBGQlF6czJRa0ZETDBJN2VVSkJRMG83TzBGQlJVUXNORUpCUVVrc1VVRkJVU3hEUVVGRExFbEJRVWtzUlVGQlJUczdRVUZGWml4blEwRkJTU3hSUVVGUkxFTkJRVU1zU1VGQlNTeERRVUZETEdOQlFXTXNRMEZCUXl4UFFVRlBMRU5CUVVNc1JVRkJSVHRCUVVOMlF5eHZRMEZCVFN4VFFVRlRMRWRCUVVjc1VVRkJVU3hEUVVGRExFbEJRVWtzUTBGQlF5eExRVUZMTEVOQlFVTXNVMEZCVXl4RFFVRkRMRU5CUVVNN08wRkJSV3BFTEhGRFFVRkxMRWxCUVVrc1VVRkJVU3hKUVVGSkxGTkJRVk1zUlVGQlJUdEJRVU0xUWl4M1EwRkJTU3hUUVVGVExFTkJRVU1zWTBGQll5eERRVUZETEZGQlFWRXNRMEZCUXl4RlFVRkZPMEZCUTNCRExEUkRRVUZOTEZkQlFWY3NSMEZCUnl4SFFVRkhMRWRCUVVjc1VVRkJVU3hEUVVGRE96dEJRVVZ1UXl3MFEwRkJTU3hEUVVGRExGRkJRVkVzUTBGQlF5eFhRVUZYTEVOQlFVTXNSVUZCUlR0QlFVTjRRaXhuUkVGQlRTeGhRVUZaTEVkQlFVY3NRVUZCUXl4UlFVRlJMRU5CUVVNc1NVRkJTU3hEUVVGRExGbEJRVmtzU1VGQlNTeFJRVUZSTEVOQlFVTXNTVUZCU1N4RFFVRkRMRmxCUVZrc1EwRkJReXhSUVVGUkxFTkJRVU1zUjBGQlNTeFJRVUZSTEVOQlFVTXNTVUZCU1N4RFFVRkRMRmxCUVZrc1EwRkJReXhSUVVGUkxFTkJRVU1zUjBGQlJ5eEZRVUZGTEVOQlFVTTdRVUZEZEVrc2IwUkJRVkVzUTBGQlF5eFhRVUZYTEVOQlFVTXNaMEpCUTJRc1VVRkJVU3hGUVVOU0xHRkJRVms3UVVGRFppeHpSRUZCVFN4RlFVRkZMRWRCUVVjN1FVRkRXQ3gzUkVGQlVTeEZRVUZGTEZGQlFWRTdRVUZEYkVJc2IwUkJRVWtzUlVGQlJTeFRRVUZUT3poRFFVTnNRaXhEUVVGRE8zbERRVU5NT3p0QlFVVkVMR2RFUVVGUkxFTkJRVU1zVjBGQlZ5eERRVUZETEVOQlFVTXNVVUZCVVN4RFFVRkRMRWRCUVVjc1UwRkJVeXhEUVVGRExGRkJRVkVzUTBGQlF5eERRVUZETzNGRFFVTjZSRHRwUTBGRFNqczdPMEZCUVVFc1FVRkhSQ3h2UTBGQlNTeERRVUZETEZGQlFWRXNRMEZCUXl4UlFVRlJMRWxCUVVrc1VVRkJVU3hEUVVGRExFbEJRVWtzUTBGQlF5eFJRVUZSTEVWQlFVVTdRVUZET1VNc05FTkJRVkVzUTBGQlF5eFJRVUZSTEVkQlFVY3NVVUZCVVN4RFFVRkRMRWxCUVVrc1EwRkJReXhSUVVGUkxFTkJRVU1zVVVGQlVTeERRVUZETEZGQlFWRXNRMEZCUXl4RFFVRkRMRU5CUVVNN2FVTkJRMnhGT3p0QlFVVkVMREpEUVVGWExFZEJRVWNzU1VGQlNTeERRVUZET3paQ1FVVjBRaXhOUVVGTkxFbEJRVWtzVVVGQlVTeERRVUZETEVsQlFVa3NRMEZCUXl4WlFVRlpMRVZCUVVVN1FVRkRia01zZDBOQlFWRXNaMEpCUVZFc1VVRkJVU3hGUVVGTExGRkJRVkVzUTBGQlF5eEpRVUZKTEVOQlFVTXNXVUZCV1N4RFFVRkZMRU5CUVVNN05rSkJRemRFT3p0QlFVVkVMR2REUVVGSkxGRkJRVkVzUTBGQlF5eEpRVUZKTEVOQlFVTXNTMEZCU3l4RlFVRkZPMEZCUTNKQ0xIZERRVUZSTEVOQlFVTXNVVUZCVVN4RFFVRkRMRWRCUVVjc1VVRkJVU3hEUVVGRExFbEJRVWtzUTBGQlF5eExRVUZMTEVOQlFVTXNVVUZCVVN4RFFVRkRMRkZCUVZFc1EwRkJReXhGUVVGRkxGRkJRVkVzUTBGQlF5eERRVUZET3paQ1FVTXhSVHQ1UWtGRFNqdHhRa0ZEU2p0cFFrRkRTanM3TzBGQlFVRXNRVUZIUkN4dlFrRkJTU3hSUVVGUkxFTkJRVU1zU1VGQlNTeExRVUZMTEZOQlFWTXNSVUZCUlR0QlFVTTNRaXcwUWtGQlVTeERRVUZETEVsQlFVa3NSMEZCUnl4UlFVRlJMRU5CUVVNc1QwRkJUeXhEUVVGRE8ybENRVU53UXpzN1FVRkZSQ3cyUWtGQllTeERRVUZETEVkQlFVY3NRMEZCUXl4SFFVRkhMRkZCUVZFN096dEJRVUZETEVGQlJ6bENMRzlDUVVGSkxFTkJRVU1zVjBGQlZ5eEZRVUZGTzBGQlEyUXNkMEpCUVVrc1NVRkJTU3hEUVVGRExGTkJRVk1zUTBGQlF5eFBRVUZQTEVOQlFVTXNSMEZCUnl4RFFVRkRMRXRCUVVzc1EwRkJReXhEUVVGRExFVkJRVVU3UVVGRGNFTXNORUpCUVVrc1EwRkJReXhUUVVGVExFTkJRVU1zU1VGQlNTeERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRPM0ZDUVVNMVFqczdPMEZCUVVFc2FVSkJSMG9zVFVGQlRUdEJRVU5JTEdkRFFVRlJMRU5CUVVNc1VVRkJVU3hIUVVGSExGRkJRVkVzUTBGQlF5eFJRVUZSTEVsQlFVa3NSVUZCUlN4RFFVRkRPenRCUVVVMVF5dzBRa0ZCU1N4SlFVRkpMRU5CUVVNc1ZVRkJWU3hEUVVGRExFOUJRVThzUTBGQlF5eEhRVUZITEVOQlFVTXNTMEZCU3l4RFFVRkRMRU5CUVVNc1JVRkJSVHRCUVVOeVF5eG5RMEZCU1N4RFFVRkRMRlZCUVZVc1EwRkJReXhKUVVGSkxFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTTdlVUpCUXpkQ096dEJRVVZFTERSQ1FVRkpMRU5CUVVNc1UwRkJVeXhEUVVGRExGRkJRVkVzUTBGQlF5eERRVUZETzNGQ1FVTTFRanRoUVVOS08xTkJRMG83T3p0QlFVRkJMRUZCUjBRc1dVRkJTU3hEUVVGRExGbEJRVmtzUjBGQlJ5eEpRVUZKTEVOQlFVTXNVMEZCVXl4RFFVRkRMRTFCUVUwc1EwRkJRenRCUVVNeFF5eFpRVUZKTEVOQlFVTXNZVUZCWVN4SFFVRkhMRWxCUVVrc1EwRkJReXhWUVVGVkxFTkJRVU1zVFVGQlRTeERRVUZET3p0QlFVVTFReXhsUVVGUExFbEJRVWtzUTBGQlF6dExRVVZtT3pzN096czdPenM3TzBGQmNrMW5RaXhWUVVGTkxGZEJLMDEyUWl4VlFVRlZMSFZDUVVGRExFMUJRVTBzUlVGQlJTeFZRVUZWTEVWQlFVVXNUMEZCVHl4RlFVRkZPMEZCUTNCRExGbEJRVWtzVlVGQlZTeEhRVUZITEV0QlFVczdPenRCUVVGRExFRkJSM1pDTEdGQlFVc3NTVUZCU1N4RFFVRkRMRWRCUVVjc1EwRkJReXhGUVVGRkxFTkJRVU1zUjBGQlJ5eEpRVUZKTEVOQlFVTXNXVUZCV1N4RlFVRkZMRU5CUVVNc1JVRkJSU3hGUVVGRk8wRkJRM2hETEdkQ1FVRk5MRWRCUVVjc1IwRkJSeXhKUVVGSkxFTkJRVU1zVTBGQlV5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRPMEZCUXpsQ0xHZENRVUZOTEV0QlFVc3NSMEZCUnl4SlFVRkpMRU5CUVVNc1RVRkJUU3hEUVVGRExFZEJRVWNzUTBGQlF6czdPMEZCUVVNc1FVRkhMMElzWjBKQlFVa3NTMEZCU3l4RFFVRkRMRk5CUVZNc1JVRkJSVHRCUVVOcVFpeHhRa0ZCU3l4RFFVRkRMRTlCUVU4c1IwRkJSeXhMUVVGTExFTkJRVU1zVTBGQlV5eERRVUZETEV0QlFVc3NRMEZCUXl4UFFVRlBMRVZCUVVVc1IwRkJSeXhGUVVGRkxFbEJRVWtzUTBGQlF5eERRVUZETzJGQlF6ZEVPenM3UVVGQlFTeEJRVWRFTEdkQ1FVRkpMRmRCZGs5UUxFdEJRVXNzUlVGMVQxRXNTMEZCU3l4RFFVRkRMRWRCUVVjc1EwRkJReXhGUVVGRk8wRkJRMnhDTEhGQ1FVRkxMRU5CUVVNc1QwRkJUeXhIUVVGSExFbEJRVWtzUTBGQlF5eEhRVUZITEVOQlFVTXNTMEZCU3l4RFFVRkRMRTlCUVU4c1JVRkJSU3hMUVVGTExFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTTdZVUZEZEVRN096dEJRVUZCTEVGQlIwUXNaMEpCUVVrc1YwRTFUMUFzUzBGQlN5eEZRVFJQVVN4TFFVRkxMRU5CUVVNc1IwRkJSeXhEUVVGRExFVkJRVVU3UVVGRGJFSXNjVUpCUVVzc1EwRkJReXhQUVVGUExFZEJRVWNzU1VGQlNTeERRVUZETEVkQlFVY3NRMEZCUXl4TFFVRkxMRU5CUVVNc1QwRkJUeXhGUVVGRkxFdEJRVXNzUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXp0aFFVTjBSRHM3TzBGQlFVRXNRVUZIUkN4blFrRkJTU3hMUVVGTExFTkJRVU1zUzBGQlN5eEZRVUZGTzBGQlEySXNjVUpCUVVzc1EwRkJReXhQUVVGUExFZEJRVWNzU1VGQlNTeERRVUZETEV0QlFVc3NRMEZCUXl4TFFVRkxMRU5CUVVNc1QwRkJUeXhEUVVGRExFTkJRVU03WVVGRE4wTTdPMEZCUlVRc2FVSkJRVXNzUTBGQlF5eFhRVUZYTEVkQlFVY3NTMEZCU3l4RFFVRkRMRTlCUVU4c1IwRkJSeXhMUVVGTExFTkJRVU1zU1VGQlNUczdPMEZCUVVNc1FVRkhMME1zWjBKQlFVa3NRMEZCUXl4SlFVRkpMRU5CUVVNc2EwSkJRV3RDTEVWQlFVVTdRVUZETVVJc2NVSkJRVXNzUTBGQlF5eFJRVUZSTEVkQlFVY3NWVUV4VUhoQ0xHTkJRV01zUlVFd1VIbENMRXRCUVVzc1EwRkJReXhYUVVGWExFVkJRVVVzVDBGQlR5eERRVUZETEVOQlFVTTdZVUZETDBRN096dEJRVUZCTEVGQlIwUXNaMEpCUVVrc1MwRkJTeXhEUVVGRExFbEJRVWtzUzBGQlN5eExRVUZMTEVOQlFVTXNUMEZCVHl4RlFVRkZPMEZCUXpsQ0xEQkNRVUZWTEVkQlFVY3NTVUZCU1N4RFFVRkRPMEZCUTJ4Q0xIRkNRVUZMTEVOQlFVTXNTVUZCU1N4SFFVRkhMRXRCUVVzc1EwRkJReXhQUVVGUE96czdRVUZCUXl4QlFVY3pRaXh2UWtGQlRTeGhRVUZoTEVkQlFVY3NRVUZCUXl4TFFVRkxMRU5CUVVNc1NVRkJTU3hKUVVGSkxFdEJRVXNzUTBGQlF5eEpRVUZKTEVOQlFVTXNVMEZCVXl4SFFVRkpMRXRCUVVzc1EwRkJReXhKUVVGSkxFTkJRVU1zVTBGQlV5eERRVUZETEV0QlFVc3NRMEZCUXl4UFFVRlBMRVZCUVVVc1MwRkJTeXhEUVVGRExFZEJRVWNzUzBGQlN5eERRVUZETEU5QlFVODdPenRCUVVGRExFRkJSM2hJTEc5Q1FVRkpMRU5CUVVNc1MwRkJTeXhEUVVGRExFMUJRVTBzUlVGQlJUdEJRVU5tTEhkQ1FVRkpMRU5CUVVNc1MwRkJTeXhEUVVGRExFZEJRVWNzUTBGQlF5eEhRVUZITEdGQlFXRXNRMEZCUXp0cFFrRkRia01zVFVGQlRUdEJRVU5JTEhkQ1FVRkpMRU5CUVVNc1RVRkJUU3hEUVVGRExFdEJRVXNzUTBGQlF5eE5RVUZOTEVOQlFVTXNRMEZCUXl4UlFVRlJMRU5CUVVNc1MwRkJTeXhEUVVGRExGRkJRVkVzUTBGQlF5eEhRVUZITEdGQlFXRXNRMEZCUXp0cFFrRkRkRVU3WVVGRFNqdFRRVU5LT3p0QlFVVkVMRmxCUVVrc1NVRkJTU3hEUVVGRExFOUJRVThzUlVGQlJUdEJRVU5rTEdkQ1FVRkpMRU5CUVVNc1QwRkJUeXhEUVVGRExFbEJRVWtzUTBGQlF5eExRVUZMTEVWQlFVVXNTVUZCU1N4RFFVRkRMRU5CUVVNN1UwRkRiRU03TzBGQlJVUXNaVUZCVHl4QlFVRkRMRWxCUVVrc1EwRkJReXhUUVVGVExFZEJRVWtzU1VGQlNTeEhRVUZITEZWQlFWVXNRMEZCUXp0TFFVTXZRenM3T3pzN08wRkJlRkZuUWl4VlFVRk5MRmRCTmxGMlFpeFhRVUZYTERCQ1FVRkhPenRCUVVWV0xHRkJRVXNzU1VGQlNTeERRVUZETEVkQlFVY3NRMEZCUXl4RlFVRkZMRU5CUVVNc1IwRkJSeXhKUVVGSkxFTkJRVU1zWVVGQllTeEZRVUZGTEVOQlFVTXNSVUZCUlN4RlFVRkZPMEZCUTNwRExHZENRVUZOTEVkQlFVY3NSMEZCUnl4SlFVRkpMRU5CUVVNc1ZVRkJWU3hEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETzBGQlF5OUNMR2RDUVVGTkxFdEJRVXNzUjBGQlJ5eEpRVUZKTEVOQlFVTXNUVUZCVFN4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRE96dEJRVVV2UWl4cFFrRkJTeXhEUVVGRExFOUJRVThzUjBGQlJ5eExRVUZMTEVOQlFVTXNTVUZCU1N4RFFVRkRMRTlCUVU4c1EwRkJReXhMUVVGTExFTkJRVU1zVVVGQlVTeEZRVUZGTEV0QlFVc3NRMEZCUXl4UlFVRlJMRU5CUVVNc1EwRkJRenM3UVVGRmJrVXNaMEpCUVVrc1NVRkJTU3hEUVVGRExFdEJRVXNzUTBGQlF5eEhRVUZITEVOQlFVTXNTMEZCU3l4TFFVRkxMRU5CUVVNc1QwRkJUeXhGUVVGRk8wRkJRMjVETEc5Q1FVRkpMRU5CUVVNc1MwRkJTeXhEUVVGRExFZEJRVWNzUTBGQlF5eEhRVUZITEV0QlFVc3NRMEZCUXl4UFFVRlBMRU5CUVVNN1lVRkRia003VTBGRFNqdExRVU5LT3p0QlFYcFNaMElzVlVGQlRTeFhRVEpTZGtJc1VVRkJVU3d5UWtGQlowSTdXVUZCWWl4TFFVRkxMRkZCUVV3c1MwRkJTenRaUVVGRkxFVkJRVVVzVVVGQlJpeEZRVUZGT3p0QlFVTm9RaXhaUVVGSkxFVkJRVVVzU1VGQlNTeEZRVUZGTEVOQlFVTXNSMEZCUnl4RlFVRkZPMEZCUTJRc1kwRkJSU3hEUVVGRExFZEJRVWNzUTBGQlF5eExRVUZMTEVOQlFVTXNRMEZCUXp0VFFVTnFRanM3UVVGRlJDeFpRVUZKTEVsQlFVa3NRMEZCUXl4UlFVRlJMRVZCUVVVN1FVRkRaaXhuUWtGQlNTeERRVUZETEZGQlFWRXNRMEZCUXl4SlFVRkpMRU5CUVVNc1MwRkJTeXhGUVVGRkxFbEJRVWtzUTBGQlF5eERRVUZETzFOQlEyNURPMHRCUTBvN08wRkJibE5uUWl4VlFVRk5MRmRCY1ZOMlFpeExRVUZMTEc5Q1FVRkhPMEZCUTBvc01rSkJRVTBzU1VGQlNTeExRVUZCTEUxQlFVVXNRMEZCUXp0QlFVTmlMR1ZCUVU4c1NVRkJTU3hEUVVGRE8wdEJRMlk3TzBGQmVGTm5RaXhWUVVGTkxGZEJNRk4yUWl4TlFVRk5MSEZDUVVGSE8wRkJRMHdzTWtKQlFVMHNTMEZCU3l4TFFVRkJMRTFCUVVVc1EwRkJRenRCUVVOa0xHVkJRVThzU1VGQlNTeERRVUZETzB0QlEyWTdPMEZCTjFOblFpeFZRVUZOTEZkQksxTjJRaXhMUVVGTExHOUNRVUZITzBGQlEwb3NXVUZCVFN4TlFVRk5MRWRCUVVjc1NVRkJTU3hEUVVGRExFMUJRVTBzUTBGQlF6dEJRVU16UWl3eVFrRkJUU3hMUVVGTExFdEJRVUVzVFVGQlJTeERRVUZET3p0QlFVVmtMR0ZCUVVzc1NVRkJTU3hIUVVGSExFbEJRVWtzVFVGQlRTeEZRVUZGTzBGQlEzQkNMR2RDUVVGSkxFMUJRVTBzUTBGQlF5eGpRVUZqTEVOQlFVTXNSMEZCUnl4RFFVRkRMRVZCUVVVN1FVRkROVUlzYzBKQlFVMHNRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJReXhKUVVGSkxFZEJRVWNzVFVGQlRTeERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRMRTFCUVUwc1IwRkJSeXhOUVVGTkxFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTXNUMEZCVHl4RFFVRkRPMkZCUXk5RU8xTkJRMG83UzBGRFNqczdPenM3T3p0QlFYaFVaMElzVlVGQlRTeFhRU3RVZGtJc1pVRkJaU3c0UWtGQlJ6dEJRVU5rTEdWQlFVODdRVUZEU0N4dlFrRkJVU3hGUVVGRkxFTkJRVU03UVVGRFdDeHBRa0ZCU3l4RlFVRkZMRXRCUVVzN1UwRkRaaXhEUVVGRE8wdEJRMHc3T3pzN096czdPMEZCY0ZWblFpeFZRVUZOTEZkQk5GVjJRaXh0UWtGQmJVSXNhME5CUVVjN1FVRkRiRUlzWlVGQlR5eFpRVUZaTEVOQlFVTTdTMEZEZGtJN08xZEJPVlZuUWl4TlFVRk5PenM3YTBKQlFVNHNUVUZCVFNJc0ltWnBiR1VpT2lKQlkzUnBiMjR1YW5NaUxDSnpiM1Z5WTJWU2IyOTBJam9pTDFWelpYSnpMMDFoZEhSUVpYSnllUzlUYVhSbGN5OXdiM0J0YjNScGIyNGlMQ0p6YjNWeVkyVnpRMjl1ZEdWdWRDSTZXeUpwYlhCdmNuUWdVSEp2WTJWemN5Qm1jbTl0SUNjdUxpOXdjbTlqWlhOekwxQnliMk5sYzNNbk8xeHVhVzF3YjNKMElIc2djM0JsWldSUVpYSlRaV052Ym1RZ2ZTQm1jbTl0SUNjdUxpOXBibU12WTJGc1l5YzdYRzVwYlhCdmNuUWdleUJwYzA1MWJTd2dhWE5QWW1vc0lHbHpVM1J5YVc1bklIMGdabkp2YlNBbkxpNHZhVzVqTDNWMGFXeHpKenRjYm1sdGNHOXlkQ0JpYVc1a1FXUmhjSFJsY2lCbWNtOXRJQ2N1TGk5cGJtTXZZbWx1WkMxaFpHRndkR1Z5Snp0Y2JtbHRjRzl5ZENCamIyeHZjbFI1Y0dVZ1puSnZiU0FuTGk0dmRtRnNkV1V0ZEhsd1pYTXZZMjlzYjNJbk8xeHVhVzF3YjNKMElHTnZiWEJzWlhoVWVYQmxJR1p5YjIwZ0p5NHVMM1poYkhWbExYUjVjR1Z6TDJOdmJYQnNaWGduTzF4dWFXMXdiM0owSUhWdWFYUlVlWEJsSUdaeWIyMGdKeTR1TDNaaGJIVmxMWFI1Y0dWekwzVnVhWFFuTzF4dVhHNWpiMjV6ZENCRVJVWkJWVXhVWDFCU1QxQWdQU0FuWTNWeWNtVnVkQ2M3WEc1amIyNXpkQ0JPVlUxRlVrbERRVXhmVmtGTVZVVlRJRDBnVzBSRlJrRlZURlJmVUZKUFVDd2dKMlp5YjIwbkxDQW5kRzhuTENBbmNISmxkaWNzSUNkMlpXeHZZMmwwZVNkZE8xeHVZMjl1YzNRZ1RsVk5YMDVWVFVWU1NVTkJURjlXUVV4VlJWTWdQU0JPVlUxRlVrbERRVXhmVmtGTVZVVlRMbXhsYm1kMGFEdGNibHh1Wlhod2IzSjBJR1JsWm1GMWJIUWdZMnhoYzNNZ1FXTjBhVzl1SUdWNGRHVnVaSE1nVUhKdlkyVnpjeUI3WEc0Z0lDQWdZMjl1YzNSeWRXTjBiM0lvY0hKdmNITXBJSHRjYmlBZ0lDQWdJQ0FnY0hKdmNITXVjM1JoZEdVZ1BTQjdmVHRjYmlBZ0lDQWdJQ0FnY0hKdmNITXVkbUZzZFdWTFpYbHpJRDBnVzEwN1hHNGdJQ0FnSUNBZ0lIQnliM0J6TG5CaGNtVnVkRXRsZVhNZ1BTQmJYVHRjYmlBZ0lDQWdJQ0FnYzNWd1pYSW9jSEp2Y0hNcE8xeHVJQ0FnSUgxY2JseHVJQ0FnSUM4cVhHNGdJQ0FnSUNBZ0lDTWdVMlYwSUVGamRHbHZiaUJ3Y205d1pYSjBhV1Z6WEc0Z0lDQWdJQ0FnSUNNaklGTmxkQ0IxYzJWeUxXUmxabWx1WldRZ1FXTjBhVzl1SUhCeWIzQmxjblJwWlhOY2JseHVJQ0FnSUNBZ0lDQkFjR0Z5WVcwZ1cyOWlhbVZqZEYxY2JpQWdJQ0FnSUNBZ1FISmxkSFZ5YmlCYlFXTjBhVzl1WFZ4dUlDQWdJQ292WEc0Z0lDQWdjMlYwS0hCeWIzQnpJRDBnZTMwcElIdGNiaUFnSUNBZ0lDQWdZMjl1YzNRZ2V5QjJZV3gxWlhNc0lHOXVMQ0F1TGk1d2NtOXdjMVJ2VTJWMElIMGdQU0J3Y205d2N6dGNiaUFnSUNBZ0lDQWdZMjl1YzNRZ1kzVnljbVZ1ZEZaaGJIVmxjeUE5SUhSb2FYTXVkbUZzZFdWeklEMGdkR2hwY3k1MllXeDFaWE1nZkh3Z2UzMDdYRzRnSUNBZ0lDQWdJR052Ym5OMElHUmxabUYxYkhSV1lXeDFaU0E5SUhSb2FYTXVaMlYwUkdWbVlYVnNkRlpoYkhWbEtDazdYRzRnSUNBZ0lDQWdJR052Ym5OMElHbHVhR1Z5YVhSaFlteGxJRDBnZTMwN1hHNWNiaUFnSUNBZ0lDQWdMeThnTVNrZ1UyVjBJRzV2YmkxamIyNXpkVzFsWkNCd2NtOXdaWEowYVdWelhHNGdJQ0FnSUNBZ0lITjFjR1Z5TG5ObGRDaHdjbTl3YzFSdlUyVjBLVHRjYmx4dUlDQWdJQ0FnSUNBdkx5QXlLU0JDYVc1a0lHQnZibUFnZEc4Z1lXNGdZV1JoY0hSbGNpd2dhV1lnYm05MElHRnNjbVZoWkhsY2JpQWdJQ0FnSUNBZ2FXWWdLRzl1S1NCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0F2THlCRWRXTnJkSGx3YVhOb0lHTm9aV05ySUdadmNpQkJaR0Z3ZEdWeVhHNGdJQ0FnSUNBZ0lDQWdJQ0IwYUdsekxtOXVJRDBnS0NGdmJpNXpaWFIwWlhJcElEOGdZbWx1WkVGa1lYQjBaWElvYjI0cElEb2diMjQ3WEc0Z0lDQWdJQ0FnSUgxY2JseHVJQ0FnSUNBZ0lDQXZMeUF6S1NCUWNtbHRaU0JoYmlCdlltcGxZM1FnZEc4Z2FXNW9aWEpwZENCbWNtOXRMQ0IzYVhSb0lHOXViSGtnWUhaaGJIVmxZQ0J3Y205d1pYSjBhV1Z6WEc0Z0lDQWdJQ0FnSUdadmNpQW9iR1YwSUd0bGVTQnBiaUJrWldaaGRXeDBWbUZzZFdVcElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUdsbUlDaGtaV1poZFd4MFZtRnNkV1V1YUdGelQzZHVVSEp2Y0dWeWRIa29hMlY1S1NBbUppQndjbTl3YzFSdlUyVjBMbWhoYzA5M2JsQnliM0JsY25SNUtHdGxlU2twSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCcGJtaGxjbWwwWVdKc1pWdHJaWGxkSUQwZ2NISnZjSE5VYjFObGRGdHJaWGxkTzF4dUlDQWdJQ0FnSUNBZ0lDQWdmVnh1SUNBZ0lDQWdJQ0I5WEc1Y2JpQWdJQ0FnSUNBZ0x5OGdOQ2tnVlhCa1lYUmxJR1Y0YVhOMGFXNW5JSFpoYkhWbGN5QjNhWFJvSUdsdWFHVnlhWFJoWW14bElIQnliM0JsY25ScFpYTmNiaUFnSUNBZ0lDQWdabTl5SUNoc1pYUWdhMlY1SUdsdUlHTjFjbkpsYm5SV1lXeDFaWE1wSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJQzh2SUVWNFkyeDFaR1VnZG1GeWFXRmliR1Z6SUhSdklHSmxJSE5sZEN3Z1lYTWdkMlVuYkd3Z1pHVmhiQ0IzYVhSb0lIUm9iM05sSUhObGNHVnlZWFJsYkhsY2JpQWdJQ0FnSUNBZ0lDQWdJR2xtSUNoamRYSnlaVzUwVm1Gc2RXVnpMbWhoYzA5M2JsQnliM0JsY25SNUtHdGxlU2twSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCamRYSnlaVzUwVm1Gc2RXVnpXMnRsZVYwZ1BTQjdJQzR1TG1OMWNuSmxiblJXWVd4MVpYTmJhMlY1WFN3Z0xpNHVhVzVvWlhKcGRHRmliR1VnZlR0Y2JpQWdJQ0FnSUNBZ0lDQWdJSDFjYmlBZ0lDQWdJQ0FnZlZ4dVhHNGdJQ0FnSUNBZ0lDOHZJRFVwSUZWd1pHRjBaVnh1SUNBZ0lDQWdJQ0JwWmlBb2RtRnNkV1Z6S1NCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0IwYUdsekxuTmxkRlpoYkhWbGN5aDJZV3gxWlhNc0lHbHVhR1Z5YVhSaFlteGxLVHNnSUNCY2JpQWdJQ0FnSUNBZ2ZWeHVYRzRnSUNBZ0lDQWdJSEpsZEhWeWJpQjBhR2x6TzF4dUlDQWdJSDFjYmx4dUlDQWdJSE5sZEZaaGJIVmxjeWgyWVd4MVpYTXNJR2x1YUdWeWFYUkdjbTl0S1NCN1hHNGdJQ0FnSUNBZ0lHTnZibk4wSUdOMWNuSmxiblJXWVd4MVpYTWdQU0IwYUdsekxuWmhiSFZsY3p0Y2JpQWdJQ0FnSUNBZ1kyOXVjM1FnWkdWbVlYVnNkRlpoYkhWbElEMGdkR2hwY3k1blpYUkVaV1poZFd4MFZtRnNkV1VvS1R0Y2JpQWdJQ0FnSUNBZ1kyOXVjM1FnWkdWbVlYVnNkRlpoYkhWbFVISnZjQ0E5SUhSb2FYTXVaMlYwUkdWbVlYVnNkRlpoYkhWbFVISnZjQ2dwTzF4dVhHNGdJQ0FnSUNBZ0lDOHZJRElwSUV4dmIzQWdiM1psY2lCbGRtVnllU0JwYm1OdmJXbHVaeUJnZG1Gc2RXVmdJR0Z1WkNCelpYUmNiaUFnSUNBZ0lDQWdabTl5SUNoc1pYUWdhMlY1SUdsdUlIWmhiSFZsY3lrZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnYVdZZ0tIWmhiSFZsY3k1b1lYTlBkMjVRY205d1pYSjBlU2hyWlhrcEtTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdiR1YwSUhaaGJIVmxJRDBnZTMwN1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2JHVjBJR05vYVd4a2NtVnVJRDBnZTMwN1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2JHVjBJR2hoYzBOb2FXeGtjbVZ1SUQwZ1ptRnNjMlU3WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnYkdWMElHSmhjMlVnUFNCamRYSnlaVzUwVm1Gc2RXVnpXMnRsZVYwZ1B5QmpkWEp5Wlc1MFZtRnNkV1Z6VzJ0bGVWMGdPaUJrWldaaGRXeDBWbUZzZFdVN1hHNWNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQXZMeUJKWmlCMllXeDFaWE1nYjNNZ1lXNGdiMkpxWldOMExDQjFjMlVnYVhRZ1pHbHlaV04wYkhsY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCcFppQW9hWE5QWW1vb2RtRnNkV1Z6VzJ0bGVWMHBLU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lIWmhiSFZsSUQwZ2RtRnNkV1Z6VzJ0bGVWMDdYRzVjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0F2THlCUFVpQnpaWFFnZEc4Z1lTQjBhR1VnWkdWbVlYVnNkQ0IyWVd4MVpTQndjbTl3WlhKMGVTQnZaaUJoSUdKc1lXNXJJRzlpYW1WamRGeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lIMGdaV3h6WlNCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJSFpoYkhWbFcyUmxabUYxYkhSV1lXeDFaVkJ5YjNCZElEMGdkbUZzZFdWelcydGxlVjA3WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnZlZ4dVhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2JHVjBJRzVsZDFaaGJIVmxJRDBnZXlBdUxpNWlZWE5sTENBdUxpNXBibWhsY21sMFJuSnZiU3dnTGk0dWRtRnNkV1VnZlR0Y2JseHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDOHZJRWRsZENCamRYSnlaVzUwSUhaaGJIVmxJR2xtSUc1dmJtVWdhWE1nWkdWbWFXNWxaRnh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJR2xtSUNodVpYZFdZV3gxWlM1amRYSnlaVzUwSUQwOVBTQjFibVJsWm1sdVpXUXBJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0x5OGdTV1lnZDJVZ2FHRjJaU0JoSUdCbWNtOXRZQ0IyWVd4MVpTQnpaWFFzSUhSaGEyVWdkR2hoZEZ4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQnBaaUFvYm1WM1ZtRnNkV1V1Wm5KdmJTQWhQVDBnZFc1a1pXWnBibVZrS1NCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCdVpYZFdZV3gxWlM1amRYSnlaVzUwSUQwZ2JtVjNWbUZzZFdVdVpuSnZiVHRjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQzh2SUU5eUlHbG1JSGRsSUdoaGRtVWdZVzRnUVdSaGNIUmxjaXdnWjJWMElHbDBJR1p5YjIwZ2RHaGhkRnh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCOUlHVnNjMlVnYVdZZ0tIUm9hWE11YjI0Z0ppWWdkR2hwY3k1dmJpNW5aWFFwSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUc1bGQxWmhiSFZsTG1OMWNuSmxiblFnUFNCMGFHbHpMbTl1TG1kbGRDaHJaWGtwTzF4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQjlYRzVjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0x5OGdTV1lnYVhRbmN5QnpkR2xzYkNCMWJtUmxabWx1WldRZ2JXRnJaU0JwZENCbGNYVmhiQ0F3UHo5Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdhV1lnS0c1bGQxWmhiSFZsTG1OMWNuSmxiblFnUFQwOUlIVnVaR1ZtYVc1bFpDa2dlMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdibVYzVm1Gc2RXVXVZM1Z5Y21WdWRDQTlJREE3WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lIMWNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQjlYRzVjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0JwWmlBb2JtVjNWbUZzZFdVdVpuSnZiU0E5UFQwZ2RXNWtaV1pwYm1Wa0tTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUc1bGQxWmhiSFZsTG1aeWIyMGdQU0J1WlhkV1lXeDFaUzVqZFhKeVpXNTBPMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJSDFjYmx4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUM4dklFbG1JRzkxY2lCQlpHRndkR1Z5SUdoaGN5QmhJR0JuWlhSV1lXeDFaVlI1Y0dWZ0lHWjFibU4wYVc5dUxDQjBjbmtnZEc4Z1oyVjBJR0VnWUhSNWNHVmdJSGRwZEdnZ2RHaGxJSFpoYkhWbElHdGxlVnh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJR2xtSUNnaGJtVjNWbUZzZFdVdWRIbHdaU0FtSmlCMGFHbHpMbTl1SUNZbUlIUm9hWE11YjI0dVoyVjBWbUZzZFdWVWVYQmxLU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lHNWxkMVpoYkhWbExuUjVjR1VnUFNCMGFHbHpMbTl1TG1kbGRGWmhiSFZsVkhsd1pTaHJaWGtwTzF4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUgxY2JseHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDOHZJR01wSUV4dmIzQWdkR2h5YjNWbmFDQmhiR3dnYm5WdFpYSnBZMkZzSUhCeWIzQmxjblI1SUhSNWNHVnpYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdabTl5SUNoc1pYUWdhU0E5SURBN0lHa2dQQ0JPVlUxZlRsVk5SVkpKUTBGTVgxWkJURlZGVXpzZ2FTc3JLU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lHTnZibk4wSUhCeWIzQk9ZVzFsSUQwZ1RsVk5SVkpKUTBGTVgxWkJURlZGVTF0cFhUdGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnWTI5dWMzUWdkbUZzZFdWUWNtOXdJRDBnYm1WM1ZtRnNkV1ZiY0hKdmNFNWhiV1ZkTzF4dVhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQzh2SUVsbUlIZGxJR2hoZG1VZ2RHaHBjeUJyYVc1a0lHOW1JSEJ5YjNCbGNuUjVMQ0J3Y205alpYTnpYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUdsbUlDaDJZV3gxWlZCeWIzQWdJVDA5SUhWdVpHVm1hVzVsWkNrZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0x5OGdTV1lnZDJVZ1pHOXVKM1FnYUdGMlpTQmhJSFI1Y0dVZ2MyVjBJSFJ2SUhSb2FYTWdkbUZzZFdVc0lHWnBibVFnYjI1bElDaDFibXhsYzNNZ2FYUW5jeUJoSUhKaGR5QnVkVzFpWlhJcFhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCcFppQW9JVzVsZDFaaGJIVmxMblI1Y0dVZ0ppWWdhWE5UZEhKcGJtY29kbUZzZFdWUWNtOXdLU2tnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lHbG1JQ2gxYm1sMFZIbHdaUzUwWlhOMEtIWmhiSFZsVUhKdmNDa3BJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdibVYzVm1Gc2RXVXVkSGx3WlNBOUlIVnVhWFJVZVhCbE8xeHVYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnZlNCbGJITmxJR2xtSUNoamIyeHZjbFI1Y0dVdWRHVnpkQ2gyWVd4MVpWQnliM0FwS1NCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUc1bGQxWmhiSFZsTG5SNWNHVWdQU0JqYjJ4dmNsUjVjR1U3WEc1Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQjlJR1ZzYzJVZ2FXWWdLR052YlhCc1pYaFVlWEJsTG5SbGMzUW9kbUZzZFdWUWNtOXdLU2tnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0J1WlhkV1lXeDFaUzUwZVhCbElEMGdZMjl0Y0d4bGVGUjVjR1U3WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2ZWeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2ZWeHVYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQnBaaUFvYm1WM1ZtRnNkV1V1ZEhsd1pTa2dlMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUM4dklFbG1JSGRsSjNKbElHZHZhVzVuSUhSdklITndiR2wwSUhSb2FYTWdkbUZzZFdVZ2FXNTBieUJqYUdsc1pDQjJZV3gxWlhOY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQnBaaUFvYm1WM1ZtRnNkV1V1ZEhsd1pTNW9ZWE5QZDI1UWNtOXdaWEowZVNnbmMzQnNhWFFuS1NrZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCamIyNXpkQ0J6Y0d4cGRGQnliM0FnUFNCdVpYZFdZV3gxWlM1MGVYQmxMbk53YkdsMEtIWmhiSFZsVUhKdmNDazdYRzVjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdabTl5SUNoc1pYUWdjM0JzYVhSTFpYa2dhVzRnYzNCc2FYUlFjbTl3S1NCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQnBaaUFvYzNCc2FYUlFjbTl3TG1oaGMwOTNibEJ5YjNCbGNuUjVLSE53YkdsMFMyVjVLU2tnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJR052Ym5OMElHTnZiV0pwYm1Wa1MyVjVJRDBnYTJWNUlDc2djM0JzYVhSTFpYazdYRzVjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQnBaaUFvSVdOb2FXeGtjbVZ1VzJOdmJXSnBibVZrUzJWNVhTa2dlMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0JqYjI1emRDQmtaV1poZFd4MFZtRnNkV1VnUFNBb2JtVjNWbUZzZFdVdWRIbHdaUzVrWldaaGRXeDBVSEp2Y0hNZ0ppWWdibVYzVm1Gc2RXVXVkSGx3WlM1a1pXWmhkV3gwVUhKdmNITmJjM0JzYVhSTFpYbGRLU0EvSUc1bGQxWmhiSFZsTG5SNWNHVXVaR1ZtWVhWc2RGQnliM0J6VzNOd2JHbDBTMlY1WFNBNklIdDlPMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0JqYUdsc1pISmxibHRqYjIxaWFXNWxaRXRsZVYwZ1BTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBdUxpNXVaWGRXWVd4MVpTeGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUM0dUxtUmxabUYxYkhSV1lXeDFaU3hjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lIQmhjbVZ1ZERvZ2EyVjVMRnh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ1kyaHBiR1JMWlhrNklITndiR2wwUzJWNUxGeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnZEhsd1pUb2dkVzVrWldacGJtVmtYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJSDA3WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdmVnh1WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdZMmhwYkdSeVpXNWJZMjl0WW1sdVpXUkxaWGxkVzNCeWIzQk9ZVzFsWFNBOUlITndiR2wwVUhKdmNGdHpjR3hwZEV0bGVWMDdYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0I5WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJSDFjYmx4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0F2THlCSlppQjBhR2x6SUdoaGN5QmhJR0IwWlcxd2JHRjBaV0FnWm5WdVkzUnBiMjRzSUdkbGJtVnlZWFJsWEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJR2xtSUNnaGJtVjNWbUZzZFdVdWRHVnRjR3hoZEdVZ0ppWWdibVYzVm1Gc2RXVXVkSGx3WlM1MFpXMXdiR0YwWlNrZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdibVYzVm1Gc2RXVXVkR1Z0Y0d4aGRHVWdQU0J1WlhkV1lXeDFaUzUwZVhCbExuUmxiWEJzWVhSbEtHNWxkMVpoYkhWbFczQnliM0JPWVcxbFhTazdYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lIMWNibHh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQm9ZWE5EYUdsc1pISmxiaUE5SUhSeWRXVTdYRzVjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCOUlHVnNjMlVnYVdZZ0tHNWxkMVpoYkhWbExuUjVjR1V1WkdWbVlYVnNkRkJ5YjNCektTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lHNWxkMVpoYkhWbElEMGdleUF1TGk1dVpYZFdZV3gxWlN3Z0xpNHVibVYzVm1Gc2RXVXVkSGx3WlM1a1pXWmhkV3gwVUhKdmNITWdmVHRjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCOVhHNWNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0JwWmlBb2JtVjNWbUZzZFdVdWRIbHdaUzV3WVhKelpTa2dlMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQnVaWGRXWVd4MVpWdHdjbTl3VG1GdFpWMGdQU0J1WlhkV1lXeDFaUzUwZVhCbExuQmhjbk5sS0c1bGQxWmhiSFZsVzNCeWIzQk9ZVzFsWFN3Z2JtVjNWbUZzZFdVcE8xeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJSDFjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJSDFjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2ZWeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lIMGdMeThnUlc1a0lHNTFiV1Z5YVdOaGJDQndjbTl3WlhKMGVTQnBkR1Z5WVhScGIyNWNibHh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQzh2SUZObGRDQmdjSEpsZG1BZ2RHOGdZR04xY25KbGJuUmdJR2xtSUdsMElHbHpiaWQwSUdGc2NtVmhaSGtnWkdWbWFXNWxaRnh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJR2xtSUNodVpYZFdZV3gxWlM1d2NtVjJJRDA5UFNCMWJtUmxabWx1WldRcElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnYm1WM1ZtRnNkV1V1Y0hKbGRpQTlJRzVsZDFaaGJIVmxMbU4xY25KbGJuUTdYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdmVnh1WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnWTNWeWNtVnVkRlpoYkhWbGMxdHJaWGxkSUQwZ2JtVjNWbUZzZFdVN1hHNWNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQXZMeUJKWmlCMGFHbHpJSFpoYkhWbElHUnZaWE51SjNRZ2FHRjJaU0JqYUdsc1pISmxiaXdnWVdSa0lIUnZJSFpoYkhWbFMyVjVjMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJR2xtSUNnaGFHRnpRMmhwYkdSeVpXNHBJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2FXWWdLSFJvYVhNdWRtRnNkV1ZMWlhsekxtbHVaR1Y0VDJZb2EyVjVLU0E5UFQwZ0xURXBJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJSFJvYVhNdWRtRnNkV1ZMWlhsekxuQjFjMmdvYTJWNUtUdGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnZlZ4dVhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0x5OGdUM0lnWVdSa0lIUnZJSEJoY21WdWRFdGxlWE5jYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0I5SUdWc2MyVWdlMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCdVpYZFdZV3gxWlM1amFHbHNaSEpsYmlBOUlHNWxkMVpoYkhWbExtTm9hV3hrY21WdUlIeDhJSHQ5TzF4dVhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJR2xtSUNoMGFHbHpMbkJoY21WdWRFdGxlWE11YVc1a1pYaFBaaWhyWlhrcElEMDlQU0F0TVNrZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2RHaHBjeTV3WVhKbGJuUkxaWGx6TG5CMWMyZ29hMlY1S1R0Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdmVnh1WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lIUm9hWE11YzJWMFZtRnNkV1Z6S0dOb2FXeGtjbVZ1S1R0Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCOVhHNGdJQ0FnSUNBZ0lDQWdJQ0I5WEc0Z0lDQWdJQ0FnSUgwZ0x5OGdSVzVrSUhaaGJIVmxJR2wwWlhKaGRHbHZibHh1WEc0Z0lDQWdJQ0FnSUM4dklETXBJRkJ5WldOdmJYQjFkR1VnZG1Gc2RXVWdhMlY1SUdGdVpDQndZWEpsYm5RZ2EyVjVJR3hsYm1kMGFDQjBieUJ3Y21WMlpXNTBJSEJsY2kxbWNtRnRaU0J0WldGemRYSmxiV1Z1ZEZ4dUlDQWdJQ0FnSUNCMGFHbHpMbTUxYlZaaGJIVmxTMlY1Y3lBOUlIUm9hWE11ZG1Gc2RXVkxaWGx6TG14bGJtZDBhRHRjYmlBZ0lDQWdJQ0FnZEdocGN5NXVkVzFRWVhKbGJuUkxaWGx6SUQwZ2RHaHBjeTV3WVhKbGJuUkxaWGx6TG14bGJtZDBhRHRjYmx4dUlDQWdJQ0FnSUNCeVpYUjFjbTRnZEdocGN6dGNibHh1SUNBZ0lIMWNibHh1SUNBZ0lDOHFYRzRnSUNBZ0lDQWdJRVJsWTJsa1pTQjNhR1YwYUdWeUlIUm9hWE1nUVdOMGFXOXVJSGRwYkd3Z2NtVnVaR1Z5SUc5dUlHNWxlSFFnWm5KaGJXVmNibHh1SUNBZ0lDQWdJQ0JBY0dGeVlXMGdXMEZqZEdsdmJsMWNiaUFnSUNBZ0lDQWdRSEJoY21GdElGdHVkVzFpWlhKZFhHNGdJQ0FnSUNBZ0lFQndZWEpoYlNCYmJuVnRZbVZ5WFZ4dUlDQWdJQ0FnSUNCQWNtVjBkWEp1SUZ0aWIyOXNaV0Z1WFRvZ1VtVjBkWEp1SUhSeWRXVWdkRzhnY21WdVpHVnlYRzRnSUNBZ0tpOWNiaUFnSUNCM2FXeHNVbVZ1WkdWeUtHRmpkR2x2Yml3Z1puSmhiV1ZUZEdGdGNDd2daV3hoY0hObFpDa2dlMXh1SUNBZ0lDQWdJQ0JzWlhRZ2FHRnpRMmhoYm1kbFpDQTlJR1poYkhObE8xeHVYRzRnSUNBZ0lDQWdJQzh2SUVOb1pXTnJJR2xtSUdKaGMyVWdkbUZzZFdWeklHaGhkbVVnZFhCa1lYUmxaQ0JjYmlBZ0lDQWdJQ0FnWm05eUlDaHNaWFFnYVNBOUlEQTdJR2tnUENCMGFHbHpMbTUxYlZaaGJIVmxTMlY1Y3pzZ2FTc3JLU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQmpiMjV6ZENCclpYa2dQU0IwYUdsekxuWmhiSFZsUzJWNWMxdHBYVHRjYmlBZ0lDQWdJQ0FnSUNBZ0lHTnZibk4wSUhaaGJIVmxJRDBnZEdocGN5NTJZV3gxWlhOYmEyVjVYVHRjYmx4dUlDQWdJQ0FnSUNBZ0lDQWdMeThnVW5WdUlIUnlZVzV6Wm05eWJTQm1kVzVqZEdsdmJpQW9hV1lnY0hKbGMyVnVkQ2xjYmlBZ0lDQWdJQ0FnSUNBZ0lHbG1JQ2gyWVd4MVpTNTBjbUZ1YzJadmNtMHBJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0IyWVd4MVpTNWpkWEp5Wlc1MElEMGdkbUZzZFdVdWRISmhibk5tYjNKdEtIWmhiSFZsTG1OMWNuSmxiblFzSUd0bGVTd2dkR2hwY3lrN1hHNGdJQ0FnSUNBZ0lDQWdJQ0I5WEc1Y2JpQWdJQ0FnSUNBZ0lDQWdJQzh2SUVOaGNDQnRhVzVwYlhWdFhHNGdJQ0FnSUNBZ0lDQWdJQ0JwWmlBb2FYTk9kVzBvZG1Gc2RXVXViV2x1S1NrZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lIWmhiSFZsTG1OMWNuSmxiblFnUFNCTllYUm9MbTFoZUNoMllXeDFaUzVqZFhKeVpXNTBMQ0IyWVd4MVpTNXRhVzRwTzF4dUlDQWdJQ0FnSUNBZ0lDQWdmVnh1WEc0Z0lDQWdJQ0FnSUNBZ0lDQXZMeUJEWVhBZ2JXRjRhVzExYlZ4dUlDQWdJQ0FnSUNBZ0lDQWdhV1lnS0dselRuVnRLSFpoYkhWbExtMWhlQ2twSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCMllXeDFaUzVqZFhKeVpXNTBJRDBnVFdGMGFDNXRhVzRvZG1Gc2RXVXVZM1Z5Y21WdWRDd2dkbUZzZFdVdWJXRjRLVHRjYmlBZ0lDQWdJQ0FnSUNBZ0lIMWNibHh1SUNBZ0lDQWdJQ0FnSUNBZ0x5OGdVbTkxYm1RZ2JuVnRZbVZ5WEc0Z0lDQWdJQ0FnSUNBZ0lDQnBaaUFvZG1Gc2RXVXVjbTkxYm1RcElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQjJZV3gxWlM1amRYSnlaVzUwSUQwZ1RXRjBhQzV5YjNWdVpDaDJZV3gxWlM1amRYSnlaVzUwS1R0Y2JpQWdJQ0FnSUNBZ0lDQWdJSDFjYmx4dUlDQWdJQ0FnSUNBZ0lDQWdkbUZzZFdVdVpuSmhiV1ZEYUdGdVoyVWdQU0IyWVd4MVpTNWpkWEp5Wlc1MElDMGdkbUZzZFdVdWNISmxkanRjYmx4dUlDQWdJQ0FnSUNBZ0lDQWdMeThnVlhCa1lYUmxJSFpsYkc5amFYUjVYRzRnSUNBZ0lDQWdJQ0FnSUNCcFppQW9JWFJvYVhNdVkyRnNZM1ZzWVhSbGMxWmxiRzlqYVhSNUtTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdkbUZzZFdVdWRtVnNiMk5wZEhrZ1BTQnpjR1ZsWkZCbGNsTmxZMjl1WkNoMllXeDFaUzVtY21GdFpVTm9ZVzVuWlN3Z1pXeGhjSE5sWkNrN1hHNGdJQ0FnSUNBZ0lDQWdJQ0I5WEc1Y2JpQWdJQ0FnSUNBZ0lDQWdJQzh2SUVsbUlIUm9hWE1nZG1Gc2RXVWdhR0Z6SUdOb1lXNW5aV1JjYmlBZ0lDQWdJQ0FnSUNBZ0lHbG1JQ2gyWVd4MVpTNXdjbVYySUNFOVBTQjJZV3gxWlM1amRYSnlaVzUwS1NCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2FHRnpRMmhoYm1kbFpDQTlJSFJ5ZFdVN1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2RtRnNkV1V1Y0hKbGRpQTlJSFpoYkhWbExtTjFjbkpsYm5RN1hHNWNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQXZMeUJCY0hCbGJtUWdkVzVwZEZ4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUdOdmJuTjBJSFpoYkhWbFJtOXlVM1JoZEdVZ1BTQW9kbUZzZFdVdWRIbHdaU0FtSmlCMllXeDFaUzUwZVhCbExuTmxjbWxoYkdsNlpTa2dQeUIyWVd4MVpTNTBlWEJsTG5ObGNtbGhiR2w2WlNoMllXeDFaUzVqZFhKeVpXNTBMQ0IyWVd4MVpTa2dPaUIyWVd4MVpTNWpkWEp5Wlc1ME8xeHVYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdMeThnUVdSa0lIUnZJSE4wWVhSbElHbG1JSFJvYVhNZ2FYTWdibTkwSUdFZ1kyaHBiR1FnZG1GMVpWeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lHbG1JQ2doZG1Gc2RXVXVjR0Z5Wlc1MEtTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUhSb2FYTXVjM1JoZEdWYmEyVjVYU0E5SUhaaGJIVmxSbTl5VTNSaGRHVTdYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdmU0JsYkhObElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnZEdocGN5NTJZV3gxWlhOYmRtRnNkV1V1Y0dGeVpXNTBYUzVqYUdsc1pISmxibHQyWVd4MVpTNWphR2xzWkV0bGVWMGdQU0IyWVd4MVpVWnZjbE4wWVhSbE8xeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lIMWNiaUFnSUNBZ0lDQWdJQ0FnSUgxY2JpQWdJQ0FnSUNBZ2ZWeHVYRzRnSUNBZ0lDQWdJR2xtSUNoMGFHbHpMbTl1Um5KaGJXVXBJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lIUm9hWE11YjI1R2NtRnRaU2gwYUdsekxuTjBZWFJsTENCMGFHbHpLVHRjYmlBZ0lDQWdJQ0FnZlZ4dVhHNGdJQ0FnSUNBZ0lISmxkSFZ5YmlBb2RHaHBjeTV2YmtOc1pXRnVkWEFwSUQ4Z2RISjFaU0E2SUdoaGMwTm9ZVzVuWldRN1hHNGdJQ0FnZlZ4dVhHNGdJQ0FnTHlwY2JpQWdJQ0FnSUNBZ1NXWWdkMlVnWVhKbElISmxibVJsY21sdVp5d2djbVZqYjIxaWFXNWxJSEJoY21WdWRDQjJZV3gxWlhNZ1ptbHljM1JjYmlBZ0lDQXFMMXh1SUNBZ0lHOXVVSEpsVW1WdVpHVnlLQ2tnZTF4dUlDQWdJQ0FnSUNBdkx5QlZjR1JoZEdVZ2NHRnlaVzUwSUhaaGJIVmxjMXh1SUNBZ0lDQWdJQ0JtYjNJZ0tHeGxkQ0JwSUQwZ01Ec2dhU0E4SUhSb2FYTXViblZ0VUdGeVpXNTBTMlY1Y3pzZ2FTc3JLU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQmpiMjV6ZENCclpYa2dQU0IwYUdsekxuQmhjbVZ1ZEV0bGVYTmJhVjA3WEc0Z0lDQWdJQ0FnSUNBZ0lDQmpiMjV6ZENCMllXeDFaU0E5SUhSb2FYTXVkbUZzZFdWelcydGxlVjA3WEc1Y2JpQWdJQ0FnSUNBZ0lDQWdJSFpoYkhWbExtTjFjbkpsYm5RZ1BTQjJZV3gxWlM1MGVYQmxMbU52YldKcGJtVW9kbUZzZFdVdVkyaHBiR1J5Wlc0c0lIWmhiSFZsTG5SbGJYQnNZWFJsS1R0Y2JseHVJQ0FnSUNBZ0lDQWdJQ0FnYVdZZ0tIUm9hWE11YzNSaGRHVmJhMlY1WFNBaFBUMGdkbUZzZFdVdVkzVnljbVZ1ZENrZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lIUm9hWE11YzNSaGRHVmJhMlY1WFNBOUlIWmhiSFZsTG1OMWNuSmxiblE3WEc0Z0lDQWdJQ0FnSUNBZ0lDQjlYRzRnSUNBZ0lDQWdJSDFjYmlBZ0lDQjlYRzVjYmlBZ0lDQnZibEpsYm1SbGNpaDdJSE4wWVhSbExDQnZiaUI5S1NCN1hHNGdJQ0FnSUNBZ0lHbG1JQ2h2YmlBbUppQnZiaTV6WlhRcElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUc5dUxuTmxkQ2h6ZEdGMFpTazdYRzRnSUNBZ0lDQWdJSDFjYmx4dUlDQWdJQ0FnSUNCcFppQW9kR2hwY3k1dmJsVndaR0YwWlNrZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnZEdocGN5NXZibFZ3WkdGMFpTaDBhR2x6TG5OMFlYUmxMQ0IwYUdsektUdGNiaUFnSUNBZ0lDQWdmVnh1SUNBZ0lIMWNibHh1SUNBZ0lIQmhkWE5sS0NrZ2UxeHVJQ0FnSUNBZ0lDQnpkWEJsY2k1emRHOXdLQ2s3WEc0Z0lDQWdJQ0FnSUhKbGRIVnliaUIwYUdsek8xeHVJQ0FnSUgxY2JseHVJQ0FnSUhKbGMzVnRaU2dwSUh0Y2JpQWdJQ0FnSUNBZ2MzVndaWEl1YzNSaGNuUW9LVHRjYmlBZ0lDQWdJQ0FnY21WMGRYSnVJSFJvYVhNN1hHNGdJQ0FnZlZ4dVhHNGdJQ0FnYzNSaGNuUW9LU0I3WEc0Z0lDQWdJQ0FnSUdOdmJuTjBJSFpoYkhWbGN5QTlJSFJvYVhNdWRtRnNkV1Z6TzF4dUlDQWdJQ0FnSUNCemRYQmxjaTV6ZEdGeWRDZ3BPMXh1WEc0Z0lDQWdJQ0FnSUdadmNpQW9iR1YwSUd0bGVTQnBiaUIyWVd4MVpYTXBJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lHbG1JQ2gyWVd4MVpYTXVhR0Z6VDNkdVVISnZjR1Z5ZEhrb2EyVjVLU2tnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUhaaGJIVmxjMXRyWlhsZExuQnlaWFlnUFNCMllXeDFaWE5iYTJWNVhTNXZjbWxuYVc0Z1BTQjJZV3gxWlhOYmEyVjVYUzVqZFhKeVpXNTBPMXh1SUNBZ0lDQWdJQ0FnSUNBZ2ZWeHVJQ0FnSUNBZ0lDQjlYRzRnSUNBZ2ZWeHVYRzRnSUNBZ0x5cGNiaUFnSUNBZ0lDQWdJeUJIWlhRZ1pHVm1ZWFZzZENCQlkzUnBiMjRnZG1Gc2RXVWdjSEp2Y0dWeWRHbGxjMXh1WEc0Z0lDQWdJQ0FnSUVCeVpYUjFjbTRnVzI5aWFtVmpkRjFjYmlBZ0lDQXFMMXh1SUNBZ0lHZGxkRVJsWm1GMWJIUldZV3gxWlNncElIdGNiaUFnSUNBZ0lDQWdjbVYwZFhKdUlIdGNiaUFnSUNBZ0lDQWdJQ0FnSUhabGJHOWphWFI1T2lBd0xGeHVJQ0FnSUNBZ0lDQWdJQ0FnY205MWJtUTZJR1poYkhObFhHNGdJQ0FnSUNBZ0lIMDdYRzRnSUNBZ2ZWeHVYRzRnSUNBZ0x5cGNiaUFnSUNBZ0lDQWdJeUJIWlhRZ1pHVm1ZWFZzZENCQlkzUnBiMjRnZG1Gc2RXVWdjSEp2Y0dWeWRIa2dibUZ0WlZ4dUlDQWdJQ0FnSUNBakl5QlRaWFFnZEdocGN5QmdkbUZzZFdWZ0lIQnliM0JsY25SNUlIZG9aVzRnYzJWMElHRnpJSFpoYkhWbElHbHVjM1JsWVdRZ2IyWWdiMkpxWldOMFhHNWNiaUFnSUNBZ0lDQWdRSEpsZEhWeWJpQmJjM1J5YVc1blhWeHVJQ0FnSUNvdlhHNGdJQ0FnWjJWMFJHVm1ZWFZzZEZaaGJIVmxVSEp2Y0NncElIdGNiaUFnSUNBZ0lDQWdjbVYwZFhKdUlFUkZSa0ZWVEZSZlVGSlBVRHRjYmlBZ0lDQjlYRzU5WEc0aVhYMD1cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2FjdGlvbnMvQWN0aW9uLmpzXG4gKiogbW9kdWxlIGlkID0gNFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9O1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX0FjdGlvbjIgPSByZXF1aXJlKCcuLi9hY3Rpb25zL0FjdGlvbicpO1xuXG52YXIgX0FjdGlvbjMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9BY3Rpb24yKTtcblxudmFyIF9nZW5lcmF0ZUJsZW5kQ3VydmUgPSByZXF1aXJlKCcuLi9pbmMvZ2VuZXJhdGUtYmxlbmQtY3VydmUnKTtcblxudmFyIF9nZW5lcmF0ZUJsZW5kQ3VydmUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZ2VuZXJhdGVCbGVuZEN1cnZlKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoIXNlbGYpIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBjYWxsICYmICh0eXBlb2YgY2FsbCA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSA/IGNhbGwgOiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90IFwiICsgdHlwZW9mIHN1cGVyQ2xhc3MpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIGVudW1lcmFibGU6IGZhbHNlLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIDogc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzczsgfVxuXG4vKlxuICAgIE1ldGhvZHMgYW5kIHByb3BlcnRpZXMgdG8gYWRkIHRvIGJvdW5kIEFjdGlvbnNcbiovXG52YXIgYm91bmRPblN0YXJ0ID0gZnVuY3Rpb24gKGFjdGlvbikge1xuICAgIHJldHVybiBhY3Rpb24uYWN0b3IuYWN0aXZhdGVBY3Rpb24oYWN0aW9uLmlkLCBhY3Rpb24pO1xufTtcbnZhciBib3VuZE9uU3RvcCA9IGZ1bmN0aW9uIChhY3Rpb24pIHtcbiAgICByZXR1cm4gYWN0aW9uLmFjdG9yLmRlYWN0aXZhdGVBY3Rpb24oYWN0aW9uLmlkKTtcbn07XG52YXIgYm91bmRQcm9wcyA9IGZ1bmN0aW9uIChhY3Rvcikge1xuICAgIHJldHVybiB7XG4gICAgICAgIGFjdG9yOiBhY3RvcixcbiAgICAgICAgaXNQcmlvcml0eTogdHJ1ZSxcbiAgICAgICAgb246IGFjdG9yLm9uLFxuICAgICAgICBfb25TdGFydDogYm91bmRPblN0YXJ0LFxuICAgICAgICBfb25TdG9wOiBib3VuZE9uU3RvcCxcbiAgICAgICAgb25SZW5kZXI6IHVuZGVmaW5lZFxuICAgIH07XG59O1xuXG52YXIgQWN0b3IgPSAoZnVuY3Rpb24gKF9BY3Rpb24pIHtcbiAgICBfaW5oZXJpdHMoQWN0b3IsIF9BY3Rpb24pO1xuXG4gICAgZnVuY3Rpb24gQWN0b3IoKSB7XG4gICAgICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBBY3Rvcik7XG5cbiAgICAgICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgICAgICAgIGFyZ3NbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgX3RoaXMgPSBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCBfQWN0aW9uLmNhbGwuYXBwbHkoX0FjdGlvbiwgW3RoaXNdLmNvbmNhdChhcmdzKSkpO1xuXG4gICAgICAgIF90aGlzLmFjdGl2ZUFjdGlvbnMgPSB7fTtcbiAgICAgICAgX3RoaXMubnVtQWN0aXZlQWN0aW9ucyA9IDA7XG4gICAgICAgIHJldHVybiBfdGhpcztcbiAgICB9XG5cbiAgICBBY3Rvci5wcm90b3R5cGUuc2V0ID0gZnVuY3Rpb24gc2V0KHByb3BzLCBpbnN0YW50KSB7XG4gICAgICAgIGlmIChpbnN0YW50IHx8ICF0aGlzLmJlaGF2aW91cikge1xuICAgICAgICAgICAgX0FjdGlvbi5wcm90b3R5cGUuc2V0LmNhbGwodGhpcywgcHJvcHMpO1xuICAgICAgICAgICAgdGhpcy5vbmNlKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB2YXIgYWN0aW9uID0gdGhpcy5yZWR1Y2VyKHByb3BzKTtcbiAgICAgICAgICAgIGlmIChhY3Rpb24pIHtcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXJ0KGFjdGlvbik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgLypcbiAgICAgICAgQmluZCBBY3Rpb24gdG8gQWN0b3JcbiAgICAqL1xuXG4gICAgQWN0b3IucHJvdG90eXBlLmJpbmQgPSBmdW5jdGlvbiBiaW5kKGFjdGlvbikge1xuICAgICAgICB2YXIgaW5oZXJpdGVkQWN0aW9uID0gYWN0aW9uLmluaGVyaXQoKTtcbiAgICAgICAgdmFyIG5ld1ZhbHVlcyA9IHt9O1xuICAgICAgICB2YXIgaGFzTmV3VmFsdWVzID0gZmFsc2U7XG5cbiAgICAgICAgLy8gQ3JlYXRlIHZhbHVlcyBvbiBhY3RvciB0aGF0IGRvbid0IGV4aXN0XG4gICAgICAgIGZvciAodmFyIGtleSBpbiBpbmhlcml0ZWRBY3Rpb24udmFsdWVzKSB7XG4gICAgICAgICAgICBpZiAoaW5oZXJpdGVkQWN0aW9uLnZhbHVlcy5oYXNPd25Qcm9wZXJ0eShrZXkpICYmICF0aGlzLnZhbHVlcy5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgICAgICAgbmV3VmFsdWVzW2tleV0gPSBpbmhlcml0ZWRBY3Rpb24udmFsdWVzW2tleV07XG4gICAgICAgICAgICAgICAgaGFzTmV3VmFsdWVzID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChoYXNOZXdWYWx1ZXMpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0KHsgdmFsdWVzOiBuZXdWYWx1ZXMgfSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gaW5oZXJpdGVkQWN0aW9uLnNldChib3VuZFByb3BzKHRoaXMsIGluaGVyaXRlZEFjdGlvbikpO1xuICAgIH07XG5cbiAgICAvKlxuICAgICAgICBTdGFydCBBY3RvclxuICAgICAgICAgSWYgQWN0aW9uIGlzIHByb3ZpZGVkLCBiaW5kIGl0IHRvIHRoaXMgQWN0b3IgYW5kIHN0YXJ0XG4gICAgICAgICBAcGFyYW0gKG9wdGlvbmFsKSBbQWN0aW9uXVxuICAgICovXG5cbiAgICBBY3Rvci5wcm90b3R5cGUuc3RhcnQgPSBmdW5jdGlvbiBzdGFydChhY3Rpb24pIHtcbiAgICAgICAgX0FjdGlvbi5wcm90b3R5cGUuc3RhcnQuY2FsbCh0aGlzKTtcblxuICAgICAgICBpZiAoYWN0aW9uKSB7XG4gICAgICAgICAgICB2YXIgYm91bmRBY3Rpb24gPSB0aGlzLmJpbmQoYWN0aW9uKTtcbiAgICAgICAgICAgIGJvdW5kQWN0aW9uLnN0YXJ0KCk7XG5cbiAgICAgICAgICAgIHJldHVybiBib3VuZEFjdGlvbjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGZvciAodmFyIGtleSBpbiB0aGlzLmFjdGl2ZUFjdGlvbnMpIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5hY3RpdmVBY3Rpb25zLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIF9hY3Rpb24gPSB0aGlzLmFjdGl2ZUFjdGlvbnNba2V5XTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFfYWN0aW9uLmlzQWN0aXZlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBfYWN0aW9uLnN0YXJ0KCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xuXG4gICAgQWN0b3IucHJvdG90eXBlLnN0b3AgPSBmdW5jdGlvbiBzdG9wKCkge1xuICAgICAgICBfQWN0aW9uLnByb3RvdHlwZS5zdG9wLmNhbGwodGhpcyk7XG5cbiAgICAgICAgZm9yICh2YXIga2V5IGluIHRoaXMuYWN0aXZlQWN0aW9ucykge1xuICAgICAgICAgICAgaWYgKHRoaXMuYWN0aXZlQWN0aW9ucy5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5hY3RpdmVBY3Rpb25zW2tleV0uc3RvcCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfTtcblxuICAgIEFjdG9yLnByb3RvdHlwZS53aWxsUmVuZGVyID0gZnVuY3Rpb24gd2lsbFJlbmRlcihhY3RvciwgZnJhbWVTdGFtcCwgZWxhcHNlZCkge1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubnVtVmFsdWVLZXlzOyBpKyspIHtcbiAgICAgICAgICAgIHZhciBrZXkgPSB0aGlzLnZhbHVlS2V5c1tpXTtcbiAgICAgICAgICAgIHZhciB2YWx1ZSA9IHRoaXMudmFsdWVzW2tleV07XG4gICAgICAgICAgICB2YXIgZHJpdmVyID0gdmFsdWUubnVtRHJpdmVycyA/IHRoaXMuYWN0aXZlQWN0aW9uc1t2YWx1ZS5kcml2ZXJzWzBdXSA6IGZhbHNlO1xuICAgICAgICAgICAgdmFyIG5ld0N1cnJlbnQgPSB2YWx1ZS5udW1Ecml2ZXJzID8gZHJpdmVyLnZhbHVlc1trZXldLmN1cnJlbnQgOiB2YWx1ZS5jdXJyZW50O1xuXG4gICAgICAgICAgICBpZiAoZHJpdmVyLmJsZW5kQ3VydmUpIHtcbiAgICAgICAgICAgICAgICBuZXdDdXJyZW50ID0gZHJpdmVyLmJsZW5kQ3VydmUoKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdmFsdWUuY3VycmVudCA9IG5ld0N1cnJlbnQ7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gX0FjdGlvbi5wcm90b3R5cGUud2lsbFJlbmRlci5jYWxsKHRoaXMsIGFjdG9yLCBmcmFtZVN0YW1wLCBlbGFwc2VkKTtcbiAgICB9O1xuXG4gICAgLypcbiAgICAgICAgQWRkIGFjdGl2ZSBhY3Rpb25zXG4gICAgICAgICBAcGFyYW0gW251bWJlcl1cbiAgICAgICAgQHBhcmFtIFtBY3Rpb25dXG4gICAgKi9cblxuICAgIEFjdG9yLnByb3RvdHlwZS5hY3RpdmF0ZUFjdGlvbiA9IGZ1bmN0aW9uIGFjdGl2YXRlQWN0aW9uKGlkLCBhY3Rpb24pIHtcbiAgICAgICAgdGhpcy5hY3RpdmVBY3Rpb25zW2lkXSA9IGFjdGlvbjtcbiAgICAgICAgdGhpcy5udW1BY3RpdmVBY3Rpb25zKys7XG5cbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhY3Rpb24ubnVtVmFsdWVLZXlzOyBpKyspIHtcbiAgICAgICAgICAgIHZhciBrZXkgPSBhY3Rpb24udmFsdWVLZXlzW2ldO1xuICAgICAgICAgICAgdmFyIGFjdGlvblZhbHVlID0gYWN0aW9uLnZhbHVlc1trZXldO1xuICAgICAgICAgICAgdmFyIHZhbHVlID0gdGhpcy52YWx1ZXNba2V5XTtcblxuICAgICAgICAgICAgLy8gUGFzcyBBY3RvciB2YWx1ZSBwcm9wZXJ0aWVzIHRvIEFjdGlvblxuICAgICAgICAgICAgYWN0aW9uVmFsdWUudmVsb2NpdHkgPSB2YWx1ZS52ZWxvY2l0eTtcbiAgICAgICAgICAgIGFjdGlvblZhbHVlLmN1cnJlbnQgPSB2YWx1ZS5jdXJyZW50O1xuXG4gICAgICAgICAgICAvLyBJZiB3ZSdyZSBibGVuZGluZyB0aGlzIGFjdGlvbiwgYW5kIHRoZXJlJ3Mgb24gYWxyZWFkeSBpbiBwcm9ncmVzc1xuICAgICAgICAgICAgaWYgKGFjdGlvbi5ibGVuZCAmJiB2YWx1ZS5udW1Ecml2ZXJzKSB7XG4gICAgICAgICAgICAgICAgYWN0aW9uLmJsZW5kQ3VydmUgPSAoMCwgX2dlbmVyYXRlQmxlbmRDdXJ2ZTIuZGVmYXVsdCkodGhpcy5hY3RpdmVBY3Rpb25zW3ZhbHVlLmRyaXZlcnNbMF1dLCBhY3Rpb24sIGtleSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHZhbHVlLmRyaXZlcnMgPSBbaWRdO1xuICAgICAgICAgICAgdmFsdWUubnVtRHJpdmVycyA9IHZhbHVlLmRyaXZlcnMubGVuZ3RoO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMubnVtQWN0aXZlQWN0aW9ucykge1xuICAgICAgICAgICAgX0FjdGlvbi5wcm90b3R5cGUuc3RhcnQuY2FsbCh0aGlzKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICAvKlxuICAgICAgICBSZW1vdmUgYWN0aXZlIGFjdGlvbnNcbiAgICAgICAgIEBwYXJhbSBbbnVtYmVyXVxuICAgICovXG5cbiAgICBBY3Rvci5wcm90b3R5cGUuZGVhY3RpdmF0ZUFjdGlvbiA9IGZ1bmN0aW9uIGRlYWN0aXZhdGVBY3Rpb24oaWQpIHtcbiAgICAgICAgdmFyIGFjdGlvbiA9IHRoaXMuYWN0aXZlQWN0aW9uc1tpZF07XG5cbiAgICAgICAgaWYgKGFjdGlvbikge1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhY3Rpb24ubnVtVmFsdWVLZXlzOyBpKyspIHtcbiAgICAgICAgICAgICAgICB2YXIga2V5ID0gYWN0aW9uLnZhbHVlS2V5c1tpXTtcbiAgICAgICAgICAgICAgICB2YXIgdmFsdWUgPSB0aGlzLnZhbHVlc1trZXldO1xuICAgICAgICAgICAgICAgIHZhciBkcml2ZXJJbmRleCA9IHZhbHVlLmRyaXZlcnMuaW5kZXhPZihpZCk7XG5cbiAgICAgICAgICAgICAgICBpZiAoZHJpdmVySW5kZXggIT09IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlLmRyaXZlcnMuc3BsaWNlKGRyaXZlckluZGV4LCAxKTtcbiAgICAgICAgICAgICAgICAgICAgdmFsdWUubnVtRHJpdmVycy0tO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZGVsZXRlIHRoaXMuYWN0aXZlQWN0aW9uc1tpZF07XG4gICAgICAgICAgICB0aGlzLm51bUFjdGl2ZUFjdGlvbnMtLTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghdGhpcy5udW1BY3RpdmVBY3Rpb25zICYmIHRoaXMuaXNBY3RpdmUpIHtcbiAgICAgICAgICAgIF9BY3Rpb24ucHJvdG90eXBlLnN0b3AuY2FsbCh0aGlzKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBBY3Rvci5wcm90b3R5cGUuZ2V0RGVmYXVsdFZhbHVlID0gZnVuY3Rpb24gZ2V0RGVmYXVsdFZhbHVlKCkge1xuICAgICAgICByZXR1cm4gX2V4dGVuZHMoe30sIF9BY3Rpb24ucHJvdG90eXBlLmdldERlZmF1bHRWYWx1ZS5jYWxsKHRoaXMpLCB7XG4gICAgICAgICAgICBkcml2ZXJzOiBbXSxcbiAgICAgICAgICAgIG51bURyaXZlcnM6IDBcbiAgICAgICAgfSk7XG4gICAgfTtcblxuICAgIHJldHVybiBBY3Rvcjtcbn0pKF9BY3Rpb24zLmRlZmF1bHQpO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBBY3Rvcjtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbk55WXk5aFkzUnBiMjV6TDBGamRHOXlMbXB6SWwwc0ltNWhiV1Z6SWpwYlhTd2liV0Z3Y0dsdVozTWlPaUk3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdRVUZOUVN4SlFVRk5MRmxCUVZrc1IwRkJSeXhWUVVGRExFMUJRVTA3VjBGQlN5eE5RVUZOTEVOQlFVTXNTMEZCU3l4RFFVRkRMR05CUVdNc1EwRkJReXhOUVVGTkxFTkJRVU1zUlVGQlJTeEZRVUZGTEUxQlFVMHNRMEZCUXp0RFFVRkJMRU5CUVVNN1FVRkRhRVlzU1VGQlRTeFhRVUZYTEVkQlFVY3NWVUZCUXl4TlFVRk5PMWRCUVVzc1RVRkJUU3hEUVVGRExFdEJRVXNzUTBGQlF5eG5Ra0ZCWjBJc1EwRkJReXhOUVVGTkxFTkJRVU1zUlVGQlJTeERRVUZETzBOQlFVRXNRMEZCUXp0QlFVTjZSU3hKUVVGTkxGVkJRVlVzUjBGQlJ5eFZRVUZETEV0QlFVczdWMEZCVFR0QlFVTXpRaXhoUVVGTExFVkJRVVVzUzBGQlN6dEJRVU5hTEd0Q1FVRlZMRVZCUVVVc1NVRkJTVHRCUVVOb1FpeFZRVUZGTEVWQlFVVXNTMEZCU3l4RFFVRkRMRVZCUVVVN1FVRkRXaXhuUWtGQlVTeEZRVUZGTEZsQlFWazdRVUZEZEVJc1pVRkJUeXhGUVVGRkxGZEJRVmM3UVVGRGNFSXNaMEpCUVZFc1JVRkJSU3hUUVVGVE8wdEJRM1JDTzBOQlFVTXNRMEZCUXpzN1NVRkZhMElzUzBGQlN6dGpRVUZNTEV0QlFVczdPMEZCUTNSQ0xHRkJSR2xDTEV0QlFVc3NSMEZEUkRzNFFrRkVTaXhMUVVGTE96c3dRMEZEVUN4SlFVRkpPMEZCUVVvc1owSkJRVWs3T3p0eFJFRkRaaXd3UTBGQlV5eEpRVUZKTEVWQlFVTTdPMEZCUTJRc1kwRkJTeXhoUVVGaExFZEJRVWNzUlVGQlJTeERRVUZETzBGQlEzaENMR05CUVVzc1owSkJRV2RDTEVkQlFVY3NRMEZCUXl4RFFVRkRPenRMUVVNM1FqczdRVUZNWjBJc1UwRkJTeXhYUVU5MFFpeEhRVUZITEdkQ1FVRkRMRXRCUVVzc1JVRkJSU3hQUVVGUExFVkJRVVU3UVVGRGFFSXNXVUZCU1N4UFFVRlBMRWxCUVVrc1EwRkJReXhKUVVGSkxFTkJRVU1zVTBGQlV5eEZRVUZGTzBGQlF6VkNMRGhDUVVGTkxFZEJRVWNzUzBGQlFTeFBRVUZETEV0QlFVc3NRMEZCUXl4RFFVRkRPMEZCUTJwQ0xHZENRVUZKTEVOQlFVTXNTVUZCU1N4RlFVRkZMRU5CUVVNN1UwRkRaaXhOUVVGTk8wRkJRMGdzWjBKQlFVMHNUVUZCVFN4SFFVRkhMRWxCUVVrc1EwRkJReXhQUVVGUExFTkJRVU1zUzBGQlN5eERRVUZETEVOQlFVTTdRVUZEYmtNc1owSkJRVWtzVFVGQlRTeEZRVUZGTzBGQlExSXNiMEpCUVVrc1EwRkJReXhMUVVGTExFTkJRVU1zVFVGQlRTeERRVUZETEVOQlFVTTdZVUZEZEVJN1UwRkRTanRMUVVOS096czdPenM3UVVGcVFtZENMRk5CUVVzc1YwRnpRblJDTEVsQlFVa3NhVUpCUVVNc1RVRkJUU3hGUVVGRk8wRkJRMVFzV1VGQlRTeGxRVUZsTEVkQlFVY3NUVUZCVFN4RFFVRkRMRTlCUVU4c1JVRkJSU3hEUVVGRE8wRkJRM3BETEZsQlFVa3NVMEZCVXl4SFFVRkhMRVZCUVVVc1EwRkJRenRCUVVOdVFpeFpRVUZKTEZsQlFWa3NSMEZCUnl4TFFVRkxPenM3UVVGQlF5eEJRVWQ2UWl4aFFVRkxMRWxCUVVrc1IwRkJSeXhKUVVGSkxHVkJRV1VzUTBGQlF5eE5RVUZOTEVWQlFVVTdRVUZEY0VNc1owSkJRVWtzWlVGQlpTeERRVUZETEUxQlFVMHNRMEZCUXl4alFVRmpMRU5CUVVNc1IwRkJSeXhEUVVGRExFbEJRVWtzUTBGQlF5eEpRVUZKTEVOQlFVTXNUVUZCVFN4RFFVRkRMR05CUVdNc1EwRkJReXhIUVVGSExFTkJRVU1zUlVGQlJUdEJRVU5vUml4NVFrRkJVeXhEUVVGRExFZEJRVWNzUTBGQlF5eEhRVUZITEdWQlFXVXNRMEZCUXl4TlFVRk5MRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU03UVVGRE4wTXNORUpCUVZrc1IwRkJSeXhKUVVGSkxFTkJRVU03WVVGRGRrSTdVMEZEU2pzN1FVRkZSQ3haUVVGSkxGbEJRVmtzUlVGQlJUdEJRVU5rTEdkQ1FVRkpMRU5CUVVNc1IwRkJSeXhEUVVGRExFVkJRVVVzVFVGQlRTeEZRVUZGTEZOQlFWTXNSVUZCUlN4RFFVRkRMRU5CUVVNN1UwRkRia003TzBGQlJVUXNaVUZCVHl4bFFVRmxMRU5CUVVNc1IwRkJSeXhEUVVGRExGVkJRVlVzUTBGQlF5eEpRVUZKTEVWQlFVVXNaVUZCWlN4RFFVRkRMRU5CUVVNc1EwRkJRenRMUVVOcVJUczdPenM3T3pzN1FVRjRRMmRDTEZOQlFVc3NWMEZwUkhSQ0xFdEJRVXNzYTBKQlFVTXNUVUZCVFN4RlFVRkZPMEZCUTFZc01FSkJRVTBzUzBGQlN5eExRVUZCTEUxQlFVVXNRMEZCUXpzN1FVRkZaQ3haUVVGSkxFMUJRVTBzUlVGQlJUdEJRVU5TTEdkQ1FVRk5MRmRCUVZjc1IwRkJSeXhKUVVGSkxFTkJRVU1zU1VGQlNTeERRVUZETEUxQlFVMHNRMEZCUXl4RFFVRkRPMEZCUTNSRExIVkNRVUZYTEVOQlFVTXNTMEZCU3l4RlFVRkZMRU5CUVVNN08wRkJSWEJDTEcxQ1FVRlBMRmRCUVZjc1EwRkJRenRUUVVOMFFpeE5RVUZOTzBGQlEwZ3NhVUpCUVVzc1NVRkJTU3hIUVVGSExFbEJRVWtzU1VGQlNTeERRVUZETEdGQlFXRXNSVUZCUlR0QlFVTm9ReXh2UWtGQlNTeEpRVUZKTEVOQlFVTXNZVUZCWVN4RFFVRkRMR05CUVdNc1EwRkJReXhIUVVGSExFTkJRVU1zUlVGQlJUdEJRVU40UXl4M1FrRkJUU3hQUVVGTkxFZEJRVWNzU1VGQlNTeERRVUZETEdGQlFXRXNRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJRenRCUVVOMlF5eDNRa0ZCU1N4RFFVRkRMRTlCUVUwc1EwRkJReXhSUVVGUkxFVkJRVVU3UVVGRGJFSXNLMEpCUVUwc1EwRkJReXhMUVVGTExFVkJRVVVzUTBGQlF6dHhRa0ZEYkVJN2FVSkJRMG83WVVGRFNqdFRRVU5LT3p0QlFVVkVMR1ZCUVU4c1NVRkJTU3hEUVVGRE8wdEJRMlk3TzBGQmNrVm5RaXhUUVVGTExGZEJkVVYwUWl4SlFVRkpMRzFDUVVGSE8wRkJRMGdzTUVKQlFVMHNTVUZCU1N4TFFVRkJMRTFCUVVVc1EwRkJRenM3UVVGRllpeGhRVUZMTEVsQlFVa3NSMEZCUnl4SlFVRkpMRWxCUVVrc1EwRkJReXhoUVVGaExFVkJRVVU3UVVGRGFFTXNaMEpCUVVrc1NVRkJTU3hEUVVGRExHRkJRV0VzUTBGQlF5eGpRVUZqTEVOQlFVTXNSMEZCUnl4RFFVRkRMRVZCUVVVN1FVRkRlRU1zYjBKQlFVa3NRMEZCUXl4aFFVRmhMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU1zU1VGQlNTeEZRVUZGTEVOQlFVTTdZVUZEYkVNN1UwRkRTanM3UVVGRlJDeGxRVUZQTEVsQlFVa3NRMEZCUXp0TFFVTm1PenRCUVdwR1owSXNVMEZCU3l4WFFXMUdkRUlzVlVGQlZTeDFRa0ZCUXl4TFFVRkxMRVZCUVVVc1ZVRkJWU3hGUVVGRkxFOUJRVThzUlVGQlJUdEJRVU51UXl4aFFVRkxMRWxCUVVrc1EwRkJReXhIUVVGSExFTkJRVU1zUlVGQlJTeERRVUZETEVkQlFVY3NTVUZCU1N4RFFVRkRMRmxCUVZrc1JVRkJSU3hEUVVGRExFVkJRVVVzUlVGQlJUdEJRVU40UXl4blFrRkJUU3hIUVVGSExFZEJRVWNzU1VGQlNTeERRVUZETEZOQlFWTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJRenRCUVVNNVFpeG5Ra0ZCVFN4TFFVRkxMRWRCUVVjc1NVRkJTU3hEUVVGRExFMUJRVTBzUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXp0QlFVTXZRaXhuUWtGQlRTeE5RVUZOTEVkQlFVY3NTMEZCU3l4RFFVRkRMRlZCUVZVc1IwRkJSeXhKUVVGSkxFTkJRVU1zWVVGQllTeERRVUZETEV0QlFVc3NRMEZCUXl4UFFVRlBMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUjBGQlJ5eExRVUZMTEVOQlFVTTdRVUZETDBVc1owSkJRVWtzVlVGQlZTeEhRVUZITEV0QlFVc3NRMEZCUXl4VlFVRlZMRWRCUVVjc1RVRkJUU3hEUVVGRExFMUJRVTBzUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXl4UFFVRlBMRWRCUVVjc1MwRkJTeXhEUVVGRExFOUJRVThzUTBGQlF6czdRVUZGTDBVc1owSkJRVWtzVFVGQlRTeERRVUZETEZWQlFWVXNSVUZCUlR0QlFVTnVRaXd3UWtGQlZTeEhRVUZITEUxQlFVMHNRMEZCUXl4VlFVRlZMRVZCUVVVc1EwRkJRenRoUVVOd1F6czdRVUZGUkN4cFFrRkJTeXhEUVVGRExFOUJRVThzUjBGQlJ5eFZRVUZWTEVOQlFVTTdVMEZET1VJN08wRkJSVVFzWlVGQlR5eHJRa0ZCVFN4VlFVRlZMRXRCUVVFc1QwRkJReXhMUVVGTExFVkJRVVVzVlVGQlZTeEZRVUZGTEU5QlFVOHNRMEZCUXl4RFFVRkRPMHRCUTNaRU96czdPenM3T3p0QlFXeEhaMElzVTBGQlN5eFhRVEJIZEVJc1kwRkJZeXd5UWtGQlF5eEZRVUZGTEVWQlFVVXNUVUZCVFN4RlFVRkZPMEZCUTNaQ0xGbEJRVWtzUTBGQlF5eGhRVUZoTEVOQlFVTXNSVUZCUlN4RFFVRkRMRWRCUVVjc1RVRkJUU3hEUVVGRE8wRkJRMmhETEZsQlFVa3NRMEZCUXl4blFrRkJaMElzUlVGQlJTeERRVUZET3p0QlFVVjRRaXhoUVVGTExFbEJRVWtzUTBGQlF5eEhRVUZITEVOQlFVTXNSVUZCUlN4RFFVRkRMRWRCUVVjc1RVRkJUU3hEUVVGRExGbEJRVmtzUlVGQlJTeERRVUZETEVWQlFVVXNSVUZCUlR0QlFVTXhReXhuUWtGQlRTeEhRVUZITEVkQlFVY3NUVUZCVFN4RFFVRkRMRk5CUVZNc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF6dEJRVU5vUXl4blFrRkJUU3hYUVVGWExFZEJRVWNzVFVGQlRTeERRVUZETEUxQlFVMHNRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJRenRCUVVOMlF5eG5Ra0ZCVFN4TFFVRkxMRWRCUVVjc1NVRkJTU3hEUVVGRExFMUJRVTBzUTBGQlF5eEhRVUZITEVOQlFVTTdPenRCUVVGRExFRkJSeTlDTEhWQ1FVRlhMRU5CUVVNc1VVRkJVU3hIUVVGSExFdEJRVXNzUTBGQlF5eFJRVUZSTEVOQlFVTTdRVUZEZEVNc2RVSkJRVmNzUTBGQlF5eFBRVUZQTEVkQlFVY3NTMEZCU3l4RFFVRkRMRTlCUVU4N096dEJRVUZETEVGQlIzQkRMR2RDUVVGSkxFMUJRVTBzUTBGQlF5eExRVUZMTEVsQlFVa3NTMEZCU3l4RFFVRkRMRlZCUVZVc1JVRkJSVHRCUVVOc1F5eHpRa0ZCVFN4RFFVRkRMRlZCUVZVc1IwRkJSeXhyUTBGQmJVSXNTVUZCU1N4RFFVRkRMR0ZCUVdFc1EwRkJReXhMUVVGTExFTkJRVU1zVDBGQlR5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRVZCUVVVc1RVRkJUU3hGUVVGRkxFZEJRVWNzUTBGQlF5eERRVUZETzJGQlF6ZEdPenRCUVVWRUxHbENRVUZMTEVOQlFVTXNUMEZCVHl4SFFVRkhMRU5CUVVNc1JVRkJSU3hEUVVGRExFTkJRVU03UVVGRGNrSXNhVUpCUVVzc1EwRkJReXhWUVVGVkxFZEJRVWNzUzBGQlN5eERRVUZETEU5QlFVOHNRMEZCUXl4TlFVRk5MRU5CUVVNN1UwRkRNME03TzBGQlJVUXNXVUZCU1N4SlFVRkpMRU5CUVVNc1owSkJRV2RDTEVWQlFVVTdRVUZEZGtJc09FSkJRVTBzUzBGQlN5eExRVUZCTEUxQlFVVXNRMEZCUXp0VFFVTnFRanRMUVVOS096czdPenM3TzBGQmJrbG5RaXhUUVVGTExGZEJNRWwwUWl4blFrRkJaMElzTmtKQlFVTXNSVUZCUlN4RlFVRkZPMEZCUTJwQ0xGbEJRVTBzVFVGQlRTeEhRVUZITEVsQlFVa3NRMEZCUXl4aFFVRmhMRU5CUVVNc1JVRkJSU3hEUVVGRExFTkJRVU03TzBGQlJYUkRMRmxCUVVrc1RVRkJUU3hGUVVGRk8wRkJRMUlzYVVKQlFVc3NTVUZCU1N4RFFVRkRMRWRCUVVjc1EwRkJReXhGUVVGRkxFTkJRVU1zUjBGQlJ5eE5RVUZOTEVOQlFVTXNXVUZCV1N4RlFVRkZMRU5CUVVNc1JVRkJSU3hGUVVGRk8wRkJRekZETEc5Q1FVRk5MRWRCUVVjc1IwRkJSeXhOUVVGTkxFTkJRVU1zVTBGQlV5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRPMEZCUTJoRExHOUNRVUZOTEV0QlFVc3NSMEZCUnl4SlFVRkpMRU5CUVVNc1RVRkJUU3hEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETzBGQlF5OUNMRzlDUVVGTkxGZEJRVmNzUjBGQlJ5eExRVUZMTEVOQlFVTXNUMEZCVHl4RFFVRkRMRTlCUVU4c1EwRkJReXhGUVVGRkxFTkJRVU1zUTBGQlF6czdRVUZGT1VNc2IwSkJRVWtzVjBGQlZ5eExRVUZMTEVOQlFVTXNRMEZCUXl4RlFVRkZPMEZCUTNCQ0xIbENRVUZMTEVOQlFVTXNUMEZCVHl4RFFVRkRMRTFCUVUwc1EwRkJReXhYUVVGWExFVkJRVVVzUTBGQlF5eERRVUZETEVOQlFVTTdRVUZEY2tNc2VVSkJRVXNzUTBGQlF5eFZRVUZWTEVWQlFVVXNRMEZCUXp0cFFrRkRkRUk3WVVGRFNqczdRVUZGUkN4dFFrRkJUeXhKUVVGSkxFTkJRVU1zWVVGQllTeERRVUZETEVWQlFVVXNRMEZCUXl4RFFVRkRPMEZCUXpsQ0xHZENRVUZKTEVOQlFVTXNaMEpCUVdkQ0xFVkJRVVVzUTBGQlF6dFRRVU16UWpzN1FVRkZSQ3haUVVGSkxFTkJRVU1zU1VGQlNTeERRVUZETEdkQ1FVRm5RaXhKUVVGSkxFbEJRVWtzUTBGQlF5eFJRVUZSTEVWQlFVVTdRVUZEZWtNc09FSkJRVTBzU1VGQlNTeExRVUZCTEUxQlFVVXNRMEZCUXp0VFFVTm9RanRMUVVOS096dEJRV2hMWjBJc1UwRkJTeXhYUVd0TGRFSXNaVUZCWlN3NFFrRkJSenRCUVVOa0xEUkNRVU5QTEd0Q1FVRk5MR1ZCUVdVc1MwRkJRU3hOUVVGRk8wRkJRekZDTEcxQ1FVRlBMRVZCUVVVc1JVRkJSVHRCUVVOWUxITkNRVUZWTEVWQlFVVXNRMEZCUXp0WFFVTm1PMHRCUTB3N08xZEJlRXRuUWl4TFFVRkxPenM3YTBKQlFVd3NTMEZCU3lJc0ltWnBiR1VpT2lKQlkzUnZjaTVxY3lJc0luTnZkWEpqWlZKdmIzUWlPaUl2VlhObGNuTXZUV0YwZEZCbGNuSjVMMU5wZEdWekwzQnZjRzF2ZEdsdmJpSXNJbk52ZFhKalpYTkRiMjUwWlc1MElqcGJJbWx0Y0c5eWRDQkJZM1JwYjI0Z1puSnZiU0FuTGk0dllXTjBhVzl1Y3k5QlkzUnBiMjRuTzF4dWFXMXdiM0owSUdkbGJtVnlZWFJsUW14bGJtUkRkWEoyWlNCbWNtOXRJQ2N1TGk5cGJtTXZaMlZ1WlhKaGRHVXRZbXhsYm1RdFkzVnlkbVVuTzF4dVhHNHZLbHh1SUNBZ0lFMWxkR2h2WkhNZ1lXNWtJSEJ5YjNCbGNuUnBaWE1nZEc4Z1lXUmtJSFJ2SUdKdmRXNWtJRUZqZEdsdmJuTmNiaW92WEc1amIyNXpkQ0JpYjNWdVpFOXVVM1JoY25RZ1BTQW9ZV04wYVc5dUtTQTlQaUJoWTNScGIyNHVZV04wYjNJdVlXTjBhWFpoZEdWQlkzUnBiMjRvWVdOMGFXOXVMbWxrTENCaFkzUnBiMjRwTzF4dVkyOXVjM1FnWW05MWJtUlBibE4wYjNBZ1BTQW9ZV04wYVc5dUtTQTlQaUJoWTNScGIyNHVZV04wYjNJdVpHVmhZM1JwZG1GMFpVRmpkR2x2YmloaFkzUnBiMjR1YVdRcE8xeHVZMjl1YzNRZ1ltOTFibVJRY205d2N5QTlJQ2hoWTNSdmNpa2dQVDRnS0h0Y2JpQWdJQ0JoWTNSdmNqb2dZV04wYjNJc1hHNGdJQ0FnYVhOUWNtbHZjbWwwZVRvZ2RISjFaU3hjYmlBZ0lDQnZiam9nWVdOMGIzSXViMjRzWEc0Z0lDQWdYMjl1VTNSaGNuUTZJR0p2ZFc1a1QyNVRkR0Z5ZEN4Y2JpQWdJQ0JmYjI1VGRHOXdPaUJpYjNWdVpFOXVVM1J2Y0N4Y2JpQWdJQ0J2YmxKbGJtUmxjam9nZFc1a1pXWnBibVZrWEc1OUtUdGNibHh1Wlhod2IzSjBJR1JsWm1GMWJIUWdZMnhoYzNNZ1FXTjBiM0lnWlhoMFpXNWtjeUJCWTNScGIyNGdlMXh1SUNBZ0lHTnZibk4wY25WamRHOXlLQzR1TG1GeVozTXBJSHRjYmlBZ0lDQWdJQ0FnYzNWd1pYSW9MaTR1WVhKbmN5azdYRzRnSUNBZ0lDQWdJSFJvYVhNdVlXTjBhWFpsUVdOMGFXOXVjeUE5SUh0OU8xeHVJQ0FnSUNBZ0lDQjBhR2x6TG01MWJVRmpkR2wyWlVGamRHbHZibk1nUFNBd08xeHVJQ0FnSUgxY2JseHVJQ0FnSUhObGRDaHdjbTl3Y3l3Z2FXNXpkR0Z1ZENrZ2UxeHVJQ0FnSUNBZ0lDQnBaaUFvYVc1emRHRnVkQ0I4ZkNBaGRHaHBjeTVpWldoaGRtbHZkWElwSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJSE4xY0dWeUxuTmxkQ2h3Y205d2N5azdYRzRnSUNBZ0lDQWdJQ0FnSUNCMGFHbHpMbTl1WTJVb0tUdGNiaUFnSUNBZ0lDQWdmU0JsYkhObElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUdOdmJuTjBJR0ZqZEdsdmJpQTlJSFJvYVhNdWNtVmtkV05sY2lod2NtOXdjeWs3WEc0Z0lDQWdJQ0FnSUNBZ0lDQnBaaUFvWVdOMGFXOXVLU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnZEdocGN5NXpkR0Z5ZENoaFkzUnBiMjRwTzF4dUlDQWdJQ0FnSUNBZ0lDQWdmVnh1SUNBZ0lDQWdJQ0I5WEc0Z0lDQWdmVnh1WEc0Z0lDQWdMeXBjYmlBZ0lDQWdJQ0FnUW1sdVpDQkJZM1JwYjI0Z2RHOGdRV04wYjNKY2JpQWdJQ0FxTDF4dUlDQWdJR0pwYm1Rb1lXTjBhVzl1S1NCN1hHNGdJQ0FnSUNBZ0lHTnZibk4wSUdsdWFHVnlhWFJsWkVGamRHbHZiaUE5SUdGamRHbHZiaTVwYm1obGNtbDBLQ2s3WEc0Z0lDQWdJQ0FnSUd4bGRDQnVaWGRXWVd4MVpYTWdQU0I3ZlR0Y2JpQWdJQ0FnSUNBZ2JHVjBJR2hoYzA1bGQxWmhiSFZsY3lBOUlHWmhiSE5sTzF4dVhHNGdJQ0FnSUNBZ0lDOHZJRU55WldGMFpTQjJZV3gxWlhNZ2IyNGdZV04wYjNJZ2RHaGhkQ0JrYjI0bmRDQmxlR2x6ZEZ4dUlDQWdJQ0FnSUNCbWIzSWdLR3hsZENCclpYa2dhVzRnYVc1b1pYSnBkR1ZrUVdOMGFXOXVMblpoYkhWbGN5a2dlMXh1SUNBZ0lDQWdJQ0FnSUNBZ2FXWWdLR2x1YUdWeWFYUmxaRUZqZEdsdmJpNTJZV3gxWlhNdWFHRnpUM2R1VUhKdmNHVnlkSGtvYTJWNUtTQW1KaUFoZEdocGN5NTJZV3gxWlhNdWFHRnpUM2R1VUhKdmNHVnlkSGtvYTJWNUtTa2dlMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJRzVsZDFaaGJIVmxjMXRyWlhsZElEMGdhVzVvWlhKcGRHVmtRV04wYVc5dUxuWmhiSFZsYzF0clpYbGRPMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJR2hoYzA1bGQxWmhiSFZsY3lBOUlIUnlkV1U3WEc0Z0lDQWdJQ0FnSUNBZ0lDQjlYRzRnSUNBZ0lDQWdJSDFjYmx4dUlDQWdJQ0FnSUNCcFppQW9hR0Z6VG1WM1ZtRnNkV1Z6S1NCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0IwYUdsekxuTmxkQ2g3SUhaaGJIVmxjem9nYm1WM1ZtRnNkV1Z6SUgwcE8xeHVJQ0FnSUNBZ0lDQjlYRzVjYmlBZ0lDQWdJQ0FnY21WMGRYSnVJR2x1YUdWeWFYUmxaRUZqZEdsdmJpNXpaWFFvWW05MWJtUlFjbTl3Y3loMGFHbHpMQ0JwYm1obGNtbDBaV1JCWTNScGIyNHBLVHRjYmlBZ0lDQjlYRzVjYmlBZ0lDQXZLbHh1SUNBZ0lDQWdJQ0JUZEdGeWRDQkJZM1J2Y2x4dVhHNGdJQ0FnSUNBZ0lFbG1JRUZqZEdsdmJpQnBjeUJ3Y205MmFXUmxaQ3dnWW1sdVpDQnBkQ0IwYnlCMGFHbHpJRUZqZEc5eUlHRnVaQ0J6ZEdGeWRGeHVYRzRnSUNBZ0lDQWdJRUJ3WVhKaGJTQW9iM0IwYVc5dVlXd3BJRnRCWTNScGIyNWRYRzRnSUNBZ0tpOWNiaUFnSUNCemRHRnlkQ2hoWTNScGIyNHBJSHRjYmlBZ0lDQWdJQ0FnYzNWd1pYSXVjM1JoY25Rb0tUdGNibHh1SUNBZ0lDQWdJQ0JwWmlBb1lXTjBhVzl1S1NCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0JqYjI1emRDQmliM1Z1WkVGamRHbHZiaUE5SUhSb2FYTXVZbWx1WkNoaFkzUnBiMjRwTzF4dUlDQWdJQ0FnSUNBZ0lDQWdZbTkxYm1SQlkzUnBiMjR1YzNSaGNuUW9LVHRjYmx4dUlDQWdJQ0FnSUNBZ0lDQWdjbVYwZFhKdUlHSnZkVzVrUVdOMGFXOXVPMXh1SUNBZ0lDQWdJQ0I5SUdWc2MyVWdlMXh1SUNBZ0lDQWdJQ0FnSUNBZ1ptOXlJQ2hzWlhRZ2EyVjVJR2x1SUhSb2FYTXVZV04wYVhabFFXTjBhVzl1Y3lrZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lHbG1JQ2gwYUdsekxtRmpkR2wyWlVGamRHbHZibk11YUdGelQzZHVVSEp2Y0dWeWRIa29hMlY1S1NrZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0JqYjI1emRDQmhZM1JwYjI0Z1BTQjBhR2x6TG1GamRHbDJaVUZqZEdsdmJuTmJhMlY1WFR0Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdhV1lnS0NGaFkzUnBiMjR1YVhOQlkzUnBkbVVwSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUdGamRHbHZiaTV6ZEdGeWRDZ3BPMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCOVhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2ZWeHVJQ0FnSUNBZ0lDQWdJQ0FnZlZ4dUlDQWdJQ0FnSUNCOVhHNWNiaUFnSUNBZ0lDQWdjbVYwZFhKdUlIUm9hWE03WEc0Z0lDQWdmVnh1WEc0Z0lDQWdjM1J2Y0NncElIdGNiaUFnSUNBZ0lDQWdjM1Z3WlhJdWMzUnZjQ2dwTzF4dVhHNGdJQ0FnSUNBZ0lHWnZjaUFvYkdWMElHdGxlU0JwYmlCMGFHbHpMbUZqZEdsMlpVRmpkR2x2Ym5NcElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUdsbUlDaDBhR2x6TG1GamRHbDJaVUZqZEdsdmJuTXVhR0Z6VDNkdVVISnZjR1Z5ZEhrb2EyVjVLU2tnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUhSb2FYTXVZV04wYVhabFFXTjBhVzl1YzF0clpYbGRMbk4wYjNBb0tUdGNiaUFnSUNBZ0lDQWdJQ0FnSUgxY2JpQWdJQ0FnSUNBZ2ZWeHVYRzRnSUNBZ0lDQWdJSEpsZEhWeWJpQjBhR2x6TzF4dUlDQWdJSDFjYmx4dUlDQWdJSGRwYkd4U1pXNWtaWElvWVdOMGIzSXNJR1p5WVcxbFUzUmhiWEFzSUdWc1lYQnpaV1FwSUh0Y2JpQWdJQ0FnSUNBZ1ptOXlJQ2hzWlhRZ2FTQTlJREE3SUdrZ1BDQjBhR2x6TG01MWJWWmhiSFZsUzJWNWN6c2dhU3NyS1NCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0JqYjI1emRDQnJaWGtnUFNCMGFHbHpMblpoYkhWbFMyVjVjMXRwWFR0Y2JpQWdJQ0FnSUNBZ0lDQWdJR052Ym5OMElIWmhiSFZsSUQwZ2RHaHBjeTUyWVd4MVpYTmJhMlY1WFR0Y2JpQWdJQ0FnSUNBZ0lDQWdJR052Ym5OMElHUnlhWFpsY2lBOUlIWmhiSFZsTG01MWJVUnlhWFpsY25NZ1B5QjBhR2x6TG1GamRHbDJaVUZqZEdsdmJuTmJkbUZzZFdVdVpISnBkbVZ5YzFzd1hWMGdPaUJtWVd4elpUdGNiaUFnSUNBZ0lDQWdJQ0FnSUd4bGRDQnVaWGREZFhKeVpXNTBJRDBnZG1Gc2RXVXViblZ0UkhKcGRtVnljeUEvSUdSeWFYWmxjaTUyWVd4MVpYTmJhMlY1WFM1amRYSnlaVzUwSURvZ2RtRnNkV1V1WTNWeWNtVnVkRHRjYmx4dUlDQWdJQ0FnSUNBZ0lDQWdhV1lnS0dSeWFYWmxjaTVpYkdWdVpFTjFjblpsS1NCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2JtVjNRM1Z5Y21WdWRDQTlJR1J5YVhabGNpNWliR1Z1WkVOMWNuWmxLQ2s3WEc0Z0lDQWdJQ0FnSUNBZ0lDQjlYRzVjYmlBZ0lDQWdJQ0FnSUNBZ0lIWmhiSFZsTG1OMWNuSmxiblFnUFNCdVpYZERkWEp5Wlc1ME8xeHVJQ0FnSUNBZ0lDQjlYRzVjYmlBZ0lDQWdJQ0FnY21WMGRYSnVJSE4xY0dWeUxuZHBiR3hTWlc1a1pYSW9ZV04wYjNJc0lHWnlZVzFsVTNSaGJYQXNJR1ZzWVhCelpXUXBPMXh1SUNBZ0lIMWNibHh1SUNBZ0lDOHFYRzRnSUNBZ0lDQWdJRUZrWkNCaFkzUnBkbVVnWVdOMGFXOXVjMXh1WEc0Z0lDQWdJQ0FnSUVCd1lYSmhiU0JiYm5WdFltVnlYVnh1SUNBZ0lDQWdJQ0JBY0dGeVlXMGdXMEZqZEdsdmJsMWNiaUFnSUNBcUwxeHVJQ0FnSUdGamRHbDJZWFJsUVdOMGFXOXVLR2xrTENCaFkzUnBiMjRwSUh0Y2JpQWdJQ0FnSUNBZ2RHaHBjeTVoWTNScGRtVkJZM1JwYjI1elcybGtYU0E5SUdGamRHbHZianRjYmlBZ0lDQWdJQ0FnZEdocGN5NXVkVzFCWTNScGRtVkJZM1JwYjI1ekt5czdYRzVjYmlBZ0lDQWdJQ0FnWm05eUlDaHNaWFFnYVNBOUlEQTdJR2tnUENCaFkzUnBiMjR1Ym5WdFZtRnNkV1ZMWlhsek95QnBLeXNwSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJR052Ym5OMElHdGxlU0E5SUdGamRHbHZiaTUyWVd4MVpVdGxlWE5iYVYwN1hHNGdJQ0FnSUNBZ0lDQWdJQ0JqYjI1emRDQmhZM1JwYjI1V1lXeDFaU0E5SUdGamRHbHZiaTUyWVd4MVpYTmJhMlY1WFR0Y2JpQWdJQ0FnSUNBZ0lDQWdJR052Ym5OMElIWmhiSFZsSUQwZ2RHaHBjeTUyWVd4MVpYTmJhMlY1WFR0Y2JseHVJQ0FnSUNBZ0lDQWdJQ0FnTHk4Z1VHRnpjeUJCWTNSdmNpQjJZV3gxWlNCd2NtOXdaWEowYVdWeklIUnZJRUZqZEdsdmJseHVJQ0FnSUNBZ0lDQWdJQ0FnWVdOMGFXOXVWbUZzZFdVdWRtVnNiMk5wZEhrZ1BTQjJZV3gxWlM1MlpXeHZZMmwwZVR0Y2JpQWdJQ0FnSUNBZ0lDQWdJR0ZqZEdsdmJsWmhiSFZsTG1OMWNuSmxiblFnUFNCMllXeDFaUzVqZFhKeVpXNTBPMXh1WEc0Z0lDQWdJQ0FnSUNBZ0lDQXZMeUJKWmlCM1pTZHlaU0JpYkdWdVpHbHVaeUIwYUdseklHRmpkR2x2Yml3Z1lXNWtJSFJvWlhKbEozTWdiMjRnWVd4eVpXRmtlU0JwYmlCd2NtOW5jbVZ6YzF4dUlDQWdJQ0FnSUNBZ0lDQWdhV1lnS0dGamRHbHZiaTVpYkdWdVpDQW1KaUIyWVd4MVpTNXVkVzFFY21sMlpYSnpLU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnWVdOMGFXOXVMbUpzWlc1a1EzVnlkbVVnUFNCblpXNWxjbUYwWlVKc1pXNWtRM1Z5ZG1Vb2RHaHBjeTVoWTNScGRtVkJZM1JwYjI1elczWmhiSFZsTG1SeWFYWmxjbk5iTUYxZExDQmhZM1JwYjI0c0lHdGxlU2s3WEc0Z0lDQWdJQ0FnSUNBZ0lDQjlYRzVjYmlBZ0lDQWdJQ0FnSUNBZ0lIWmhiSFZsTG1SeWFYWmxjbk1nUFNCYmFXUmRPMXh1SUNBZ0lDQWdJQ0FnSUNBZ2RtRnNkV1V1Ym5WdFJISnBkbVZ5Y3lBOUlIWmhiSFZsTG1SeWFYWmxjbk11YkdWdVozUm9PMXh1SUNBZ0lDQWdJQ0I5WEc1Y2JpQWdJQ0FnSUNBZ2FXWWdLSFJvYVhNdWJuVnRRV04wYVhabFFXTjBhVzl1Y3lrZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnYzNWd1pYSXVjM1JoY25Rb0tUdGNiaUFnSUNBZ0lDQWdmVnh1SUNBZ0lIMWNibHh1SUNBZ0lDOHFYRzRnSUNBZ0lDQWdJRkpsYlc5MlpTQmhZM1JwZG1VZ1lXTjBhVzl1YzF4dVhHNGdJQ0FnSUNBZ0lFQndZWEpoYlNCYmJuVnRZbVZ5WFZ4dUlDQWdJQ292WEc0Z0lDQWdaR1ZoWTNScGRtRjBaVUZqZEdsdmJpaHBaQ2tnZTF4dUlDQWdJQ0FnSUNCamIyNXpkQ0JoWTNScGIyNGdQU0IwYUdsekxtRmpkR2wyWlVGamRHbHZibk5iYVdSZE8xeHVYRzRnSUNBZ0lDQWdJR2xtSUNoaFkzUnBiMjRwSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJR1p2Y2lBb2JHVjBJR2tnUFNBd095QnBJRHdnWVdOMGFXOXVMbTUxYlZaaGJIVmxTMlY1Y3pzZ2FTc3JLU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnWTI5dWMzUWdhMlY1SUQwZ1lXTjBhVzl1TG5aaGJIVmxTMlY1YzF0cFhUdGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQmpiMjV6ZENCMllXeDFaU0E5SUhSb2FYTXVkbUZzZFdWelcydGxlVjA3WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnWTI5dWMzUWdaSEpwZG1WeVNXNWtaWGdnUFNCMllXeDFaUzVrY21sMlpYSnpMbWx1WkdWNFQyWW9hV1FwTzF4dVhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2FXWWdLR1J5YVhabGNrbHVaR1Y0SUNFOVBTQXRNU2tnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQjJZV3gxWlM1a2NtbDJaWEp6TG5Od2JHbGpaU2hrY21sMlpYSkpibVJsZUN3Z01TazdYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUhaaGJIVmxMbTUxYlVSeWFYWmxjbk10TFR0Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCOVhHNGdJQ0FnSUNBZ0lDQWdJQ0I5WEc1Y2JpQWdJQ0FnSUNBZ0lDQWdJR1JsYkdWMFpTQjBhR2x6TG1GamRHbDJaVUZqZEdsdmJuTmJhV1JkTzF4dUlDQWdJQ0FnSUNBZ0lDQWdkR2hwY3k1dWRXMUJZM1JwZG1WQlkzUnBiMjV6TFMwN1hHNGdJQ0FnSUNBZ0lIMWNibHh1SUNBZ0lDQWdJQ0JwWmlBb0lYUm9hWE11Ym5WdFFXTjBhWFpsUVdOMGFXOXVjeUFtSmlCMGFHbHpMbWx6UVdOMGFYWmxLU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQnpkWEJsY2k1emRHOXdLQ2s3WEc0Z0lDQWdJQ0FnSUgxY2JpQWdJQ0I5WEc1Y2JpQWdJQ0JuWlhSRVpXWmhkV3gwVm1Gc2RXVW9LU0I3WEc0Z0lDQWdJQ0FnSUhKbGRIVnliaUI3WEc0Z0lDQWdJQ0FnSUNBZ0lDQXVMaTV6ZFhCbGNpNW5aWFJFWldaaGRXeDBWbUZzZFdVb0tTeGNiaUFnSUNBZ0lDQWdJQ0FnSUdSeWFYWmxjbk02SUZ0ZExGeHVJQ0FnSUNBZ0lDQWdJQ0FnYm5WdFJISnBkbVZ5Y3pvZ01GeHVJQ0FnSUNBZ0lDQjlPMXh1SUNBZ0lIMWNibjBpWFgwPVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvYWN0aW9ucy9BY3Rvci5qc1xuICoqIG1vZHVsZSBpZCA9IDVcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxudmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF9BY3Rpb24yID0gcmVxdWlyZSgnLi9BY3Rpb24nKTtcblxudmFyIF9BY3Rpb24zID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfQWN0aW9uMik7XG5cbnZhciBfcHJlc2V0RWFzaW5nID0gcmVxdWlyZSgnLi9lYXNpbmcvcHJlc2V0LWVhc2luZycpO1xuXG52YXIgX3ByZXNldEVhc2luZzIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9wcmVzZXRFYXNpbmcpO1xuXG52YXIgX3V0aWxzID0gcmVxdWlyZSgnLi4vaW5jL3V0aWxzJyk7XG5cbnZhciBfY2FsYyA9IHJlcXVpcmUoJy4uL2luYy9jYWxjJyk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKCFzZWxmKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gY2FsbCAmJiAodHlwZW9mIGNhbGwgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikgPyBjYWxsIDogc2VsZjsgfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb24sIG5vdCBcIiArIHR5cGVvZiBzdXBlckNsYXNzKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCBlbnVtZXJhYmxlOiBmYWxzZSwgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LnNldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKSA6IHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7IH1cblxudmFyIENPVU5UID0gJ0NvdW50JztcbnZhciBORVhUX1NURVBTID0ge1xuICAgIGxvb3A6ICdyZXN0YXJ0JyxcbiAgICB5b3lvOiAncmV2ZXJzZScsXG4gICAgZmxpcDogJ2ZsaXBWYWx1ZXMnXG59O1xuXG52YXIgVHdlZW4gPSAoZnVuY3Rpb24gKF9BY3Rpb24pIHtcbiAgICBfaW5oZXJpdHMoVHdlZW4sIF9BY3Rpb24pO1xuXG4gICAgZnVuY3Rpb24gVHdlZW4oKSB7XG4gICAgICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBUd2Vlbik7XG5cbiAgICAgICAgcmV0dXJuIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIF9BY3Rpb24uYXBwbHkodGhpcywgYXJndW1lbnRzKSk7XG4gICAgfVxuXG4gICAgVHdlZW4ucHJvdG90eXBlLnN0YXJ0ID0gZnVuY3Rpb24gc3RhcnQoKSB7XG4gICAgICAgIF9BY3Rpb24ucHJvdG90eXBlLnN0YXJ0LmNhbGwodGhpcyk7XG4gICAgICAgIHRoaXMuZWxhcHNlZCA9IDA7XG4gICAgICAgIHRoaXMuZmxpcENvdW50ID0gdGhpcy55b3lvQ291bnQgPSB0aGlzLmxvb3BDb3VudCA9IDA7XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfTtcblxuICAgIFR3ZWVuLnByb3RvdHlwZS5vblVwZGF0ZSA9IGZ1bmN0aW9uIG9uVXBkYXRlKHR3ZWVuLCBmcmFtZVN0YW1wLCBlbGFwc2VkKSB7XG4gICAgICAgIHZhciBwcm9ncmVzc1RhcmdldCA9IHRoaXMucGxheURpcmVjdGlvbiA9PT0gMSA/IDEgOiAwO1xuXG4gICAgICAgIHRoaXMuZW5kZWQgPSB0cnVlO1xuICAgICAgICB0aGlzLmVsYXBzZWQgKz0gZWxhcHNlZCAqIHRoaXMuZGlsYXRlICogdGhpcy5wbGF5RGlyZWN0aW9uO1xuXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5udW1WYWx1ZUtleXM7IGkrKykge1xuICAgICAgICAgICAgdmFyIGtleSA9IHRoaXMudmFsdWVLZXlzW2ldO1xuICAgICAgICAgICAgdmFyIHZhbHVlID0gdGhpcy52YWx1ZXNba2V5XTtcblxuICAgICAgICAgICAgdmFyIHByb2dyZXNzID0gKDAsIF9jYWxjLnJlc3RyaWN0KSgoMCwgX2NhbGMuZ2V0UHJvZ3Jlc3NGcm9tVmFsdWUpKHRoaXMuZWxhcHNlZCAtIHZhbHVlLmRlbGF5LCAwLCB2YWx1ZS5kdXJhdGlvbiksIDAsIDEpO1xuXG4gICAgICAgICAgICAvLyBNYXJrIFR3ZWVuIGFzIE5PVCBlbmRlZCBpZiBzdGlsbCBpbiBwcm9ncmVzc1xuICAgICAgICAgICAgaWYgKHByb2dyZXNzICE9PSBwcm9ncmVzc1RhcmdldCkge1xuICAgICAgICAgICAgICAgIHRoaXMuZW5kZWQgPSBmYWxzZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gU3RlcCBwcm9ncmVzcyBpZiB3ZSdyZSBzdGVwcGluZ1xuICAgICAgICAgICAgaWYgKHZhbHVlLnN0ZXBzKSB7XG4gICAgICAgICAgICAgICAgcHJvZ3Jlc3MgPSAoMCwgX2NhbGMuc3RlcFByb2dyZXNzKShwcm9ncmVzcywgdmFsdWUuc3RlcHMpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBFYXNlIHByb2dyZXNzXG4gICAgICAgICAgICB2YWx1ZS5jdXJyZW50ID0gKDAsIF9jYWxjLmVhc2UpKHByb2dyZXNzLCB2YWx1ZS5mcm9tLCB2YWx1ZS50bywgdmFsdWUuZWFzZSk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgVHdlZW4ucHJvdG90eXBlLm9uRnJhbWVFbmQgPSBmdW5jdGlvbiBvbkZyYW1lRW5kKCkge1xuICAgICAgICBpZiAodGhpcy5lbmRlZCkge1xuICAgICAgICAgICAgdmFyIHN0ZXBUYWtlbiA9IGZhbHNlO1xuXG4gICAgICAgICAgICBmb3IgKHZhciBrZXkgaW4gTkVYVF9TVEVQUykge1xuICAgICAgICAgICAgICAgIGlmIChORVhUX1NURVBTLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIG1heFN0ZXBzID0gdGhpc1trZXldO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmIChtYXhTdGVwcyA9PT0gdHJ1ZSB8fCAoMCwgX3V0aWxzLmlzTnVtKShtYXhTdGVwcykgJiYgbWF4U3RlcHMgPiB0aGlzW2tleSArIENPVU5UXSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpc1trZXkgKyBDT1VOVF0rKztcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0ZXBUYWtlbiA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzW05FWFRfU1RFUFNba2V5XV0oKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKCFzdGVwVGFrZW4pIHtcbiAgICAgICAgICAgICAgICB0aGlzLnN0b3AoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBUd2Vlbi5wcm90b3R5cGUuZmxpcFZhbHVlcyA9IGZ1bmN0aW9uIGZsaXBWYWx1ZXMoKSB7XG4gICAgICAgIHZhciB2YWx1ZXMgPSB0aGlzLnZhbHVlcztcblxuICAgICAgICB0aGlzLmVsYXBzZWQgPSB0aGlzLmR1cmF0aW9uIC0gdGhpcy5lbGFwc2VkO1xuXG4gICAgICAgIGZvciAodmFyIGtleSBpbiB2YWx1ZXMpIHtcbiAgICAgICAgICAgIGlmICh2YWx1ZXMuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgICAgICAgIHZhciB2YWx1ZSA9IHZhbHVlc1trZXldO1xuICAgICAgICAgICAgICAgIHZhciBfcmVmID0gW3ZhbHVlLmZyb20sIHZhbHVlLnRvXTtcbiAgICAgICAgICAgICAgICB2YWx1ZS50byA9IF9yZWZbMF07XG4gICAgICAgICAgICAgICAgdmFsdWUuZnJvbSA9IF9yZWZbMV07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xuXG4gICAgVHdlZW4ucHJvdG90eXBlLnJldmVyc2UgPSBmdW5jdGlvbiByZXZlcnNlKCkge1xuICAgICAgICB0aGlzLnBsYXlEaXJlY3Rpb24gKj0gLTE7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH07XG5cbiAgICBUd2Vlbi5wcm90b3R5cGUucmVzdGFydCA9IGZ1bmN0aW9uIHJlc3RhcnQoKSB7XG4gICAgICAgIHRoaXMuZWxhcHNlZCA9IHRoaXMucGxheURpcmVjdGlvbiA9PT0gMSA/IDAgOiB0aGlzLmR1cmF0aW9uO1xuICAgICAgICB0aGlzLnN0YXJ0ZWQgPSAoMCwgX3V0aWxzLmN1cnJlbnRUaW1lKSgpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xuXG4gICAgVHdlZW4ucHJvdG90eXBlLnNlZWsgPSBmdW5jdGlvbiBzZWVrKHByb2dyZXNzKSB7XG4gICAgICAgIHRoaXMuc2Vla1RpbWUodGhpcy5kdXJhdGlvbiAqIHByb2dyZXNzKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfTtcblxuICAgIFR3ZWVuLnByb3RvdHlwZS5zZWVrVGltZSA9IGZ1bmN0aW9uIHNlZWtUaW1lKGVsYXBzZWQpIHtcbiAgICAgICAgdGhpcy5vbmNlKCk7XG4gICAgICAgIHRoaXMuZWxhcHNlZCA9IGVsYXBzZWQ7XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfTtcblxuICAgIFR3ZWVuLnByb3RvdHlwZS5nZXREZWZhdWx0UHJvcHMgPSBmdW5jdGlvbiBnZXREZWZhdWx0UHJvcHMoKSB7XG4gICAgICAgIHJldHVybiBfZXh0ZW5kcyh7fSwgX0FjdGlvbi5wcm90b3R5cGUuZ2V0RGVmYXVsdFByb3BzLmNhbGwodGhpcyksIHtcbiAgICAgICAgICAgIGJsZW5kOiB0cnVlLFxuICAgICAgICAgICAgZGVsYXk6IDAsXG4gICAgICAgICAgICBkaWxhdGU6IDEsXG4gICAgICAgICAgICBkdXJhdGlvbjogMzAwLFxuICAgICAgICAgICAgbG9vcDogZmFsc2UsXG4gICAgICAgICAgICB5b3lvOiBmYWxzZSxcbiAgICAgICAgICAgIGZsaXA6IGZhbHNlLFxuICAgICAgICAgICAgcGxheURpcmVjdGlvbjogMSxcbiAgICAgICAgICAgIGVuZGVkOiBmYWxzZSxcbiAgICAgICAgICAgIGVsYXBzZWQ6IDBcbiAgICAgICAgfSk7XG4gICAgfTtcblxuICAgIFR3ZWVuLnByb3RvdHlwZS5nZXREZWZhdWx0VmFsdWUgPSBmdW5jdGlvbiBnZXREZWZhdWx0VmFsdWUoKSB7XG4gICAgICAgIHJldHVybiBfZXh0ZW5kcyh7fSwgX0FjdGlvbi5wcm90b3R5cGUuZ2V0RGVmYXVsdFZhbHVlLmNhbGwodGhpcyksIHtcbiAgICAgICAgICAgIGRlbGF5OiAwLFxuICAgICAgICAgICAgZHVyYXRpb246IDMwMCxcbiAgICAgICAgICAgIGVhc2U6IF9wcmVzZXRFYXNpbmcyLmRlZmF1bHQuZWFzZU91dCxcbiAgICAgICAgICAgIGVsYXBzZWQ6IDAsXG4gICAgICAgICAgICBzdGFnZ2VyOiAwLFxuICAgICAgICAgICAgc3RlcHM6IDAsXG4gICAgICAgICAgICBmcm9tOiAwLFxuICAgICAgICAgICAgdG86IDAsXG4gICAgICAgICAgICByb3VuZDogZmFsc2VcbiAgICAgICAgfSk7XG4gICAgfTtcblxuICAgIFR3ZWVuLnByb3RvdHlwZS5nZXREZWZhdWx0VmFsdWVQcm9wID0gZnVuY3Rpb24gZ2V0RGVmYXVsdFZhbHVlUHJvcCgpIHtcbiAgICAgICAgcmV0dXJuICd0byc7XG4gICAgfTtcblxuICAgIHJldHVybiBUd2Vlbjtcbn0pKF9BY3Rpb24zLmRlZmF1bHQpO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBUd2Vlbjtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbk55WXk5aFkzUnBiMjV6TDFSM1pXVnVMbXB6SWwwc0ltNWhiV1Z6SWpwYlhTd2liV0Z3Y0dsdVozTWlPaUk3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPMEZCVlVFc1NVRkJUU3hMUVVGTExFZEJRVWNzVDBGQlR5eERRVUZETzBGQlEzUkNMRWxCUVUwc1ZVRkJWU3hIUVVGSE8wRkJRMllzVVVGQlNTeEZRVUZGTEZOQlFWTTdRVUZEWml4UlFVRkpMRVZCUVVVc1UwRkJVenRCUVVObUxGRkJRVWtzUlVGQlJTeFpRVUZaTzBOQlEzSkNMRU5CUVVNN08wbEJSVzFDTEV0QlFVczdZMEZCVEN4TFFVRkxPenRoUVVGTUxFdEJRVXM3T0VKQlFVd3NTMEZCU3pzN096czdRVUZCVEN4VFFVRkxMRmRCUTNSQ0xFdEJRVXNzYjBKQlFVYzdRVUZEU2l3d1FrRkJUU3hMUVVGTExFdEJRVUVzVFVGQlJTeERRVUZETzBGQlEyUXNXVUZCU1N4RFFVRkRMRTlCUVU4c1IwRkJSeXhEUVVGRExFTkJRVU03UVVGRGFrSXNXVUZCU1N4RFFVRkRMRk5CUVZNc1IwRkJSeXhKUVVGSkxFTkJRVU1zVTBGQlV5eEhRVUZITEVsQlFVa3NRMEZCUXl4VFFVRlRMRWRCUVVjc1EwRkJReXhEUVVGRE96dEJRVVZ5UkN4bFFVRlBMRWxCUVVrc1EwRkJRenRMUVVObU96dEJRVkJuUWl4VFFVRkxMRmRCVTNSQ0xGRkJRVkVzY1VKQlFVTXNTMEZCU3l4RlFVRkZMRlZCUVZVc1JVRkJSU3hQUVVGUExFVkJRVVU3UVVGRGFrTXNXVUZCVFN4alFVRmpMRWRCUVVjc1FVRkJReXhKUVVGSkxFTkJRVU1zWVVGQllTeExRVUZMTEVOQlFVTXNSMEZCU1N4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRE96dEJRVVV4UkN4WlFVRkpMRU5CUVVNc1MwRkJTeXhIUVVGSExFbEJRVWtzUTBGQlF6dEJRVU5zUWl4WlFVRkpMRU5CUVVNc1QwRkJUeXhKUVVGSkxFRkJRVU1zVDBGQlR5eEhRVUZITEVsQlFVa3NRMEZCUXl4TlFVRk5MRWRCUVVrc1NVRkJTU3hEUVVGRExHRkJRV0VzUTBGQlF6czdRVUZGTjBRc1lVRkJTeXhKUVVGSkxFTkJRVU1zUjBGQlJ5eERRVUZETEVWQlFVVXNRMEZCUXl4SFFVRkhMRWxCUVVrc1EwRkJReXhaUVVGWkxFVkJRVVVzUTBGQlF5eEZRVUZGTEVWQlFVVTdRVUZEZUVNc1owSkJRVTBzUjBGQlJ5eEhRVUZITEVsQlFVa3NRMEZCUXl4VFFVRlRMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU03UVVGRE9VSXNaMEpCUVUwc1MwRkJTeXhIUVVGSExFbEJRVWtzUTBGQlF5eE5RVUZOTEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNN08wRkJSUzlDTEdkQ1FVRkpMRkZCUVZFc1IwRkJSeXhWUVM5Q2RrSXNVVUZCVVN4RlFTdENkMElzVlVFNVFtaERMRzlDUVVGdlFpeEZRVGhDYVVNc1NVRkJTU3hEUVVGRExFOUJRVThzUjBGQlJ5eExRVUZMTEVOQlFVTXNTMEZCU3l4RlFVRkZMRU5CUVVNc1JVRkJSU3hMUVVGTExFTkJRVU1zVVVGQlVTeERRVUZETEVWQlFVVXNRMEZCUXl4RlFVRkZMRU5CUVVNc1EwRkJRenM3TzBGQlFVTXNRVUZIYmtjc1owSkJRVWtzVVVGQlVTeExRVUZMTEdOQlFXTXNSVUZCUlR0QlFVTTNRaXh2UWtGQlNTeERRVUZETEV0QlFVc3NSMEZCUnl4TFFVRkxMRU5CUVVNN1lVRkRkRUk3T3p0QlFVRkJMRUZCUjBRc1owSkJRVWtzUzBGQlN5eERRVUZETEV0QlFVc3NSVUZCUlR0QlFVTmlMSGRDUVVGUkxFZEJRVWNzVlVGMFEzWkNMRmxCUVZrc1JVRnpRM2RDTEZGQlFWRXNSVUZCUlN4TFFVRkxMRU5CUVVNc1MwRkJTeXhEUVVGRExFTkJRVU03WVVGRGJFUTdPenRCUVVGQkxFRkJSMFFzYVVKQlFVc3NRMEZCUXl4UFFVRlBMRWRCUVVjc1ZVRTNRM2hDTEVsQlFVa3NSVUUyUTNsQ0xGRkJRVkVzUlVGQlJTeExRVUZMTEVOQlFVTXNTVUZCU1N4RlFVRkZMRXRCUVVzc1EwRkJReXhGUVVGRkxFVkJRVVVzUzBGQlN5eERRVUZETEVsQlFVa3NRMEZCUXl4RFFVRkRPMU5CUTNCRk8wdEJRMG83TzBGQmJFTm5RaXhUUVVGTExGZEJiME4wUWl4VlFVRlZMSGxDUVVGSE8wRkJRMVFzV1VGQlNTeEpRVUZKTEVOQlFVTXNTMEZCU3l4RlFVRkZPMEZCUTFvc1owSkJRVWtzVTBGQlV5eEhRVUZITEV0QlFVc3NRMEZCUXpzN1FVRkZkRUlzYVVKQlFVc3NTVUZCU1N4SFFVRkhMRWxCUVVrc1ZVRkJWU3hGUVVGRk8wRkJRM2hDTEc5Q1FVRkpMRlZCUVZVc1EwRkJReXhqUVVGakxFTkJRVU1zUjBGQlJ5eERRVUZETEVWQlFVVTdRVUZEYUVNc2QwSkJRVTBzVVVGQlVTeEhRVUZITEVsQlFVa3NRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJRenM3UVVGRk0wSXNkMEpCUVVrc1VVRkJVU3hMUVVGTExFbEJRVWtzU1VGQlN5eFhRVE5FZUVJc1MwRkJTeXhGUVRKRWVVSXNVVUZCVVN4RFFVRkRMRWxCUVVrc1VVRkJVU3hIUVVGSExFbEJRVWtzUTBGQlF5eEhRVUZITEVkQlFVY3NTMEZCU3l4RFFVRkRMRUZCUVVNc1JVRkJSVHRCUVVONFJTdzBRa0ZCU1N4RFFVRkRMRWRCUVVjc1IwRkJSeXhMUVVGTExFTkJRVU1zUlVGQlJTeERRVUZETzBGQlEzQkNMR2xEUVVGVExFZEJRVWNzU1VGQlNTeERRVUZETzBGQlEycENMRFJDUVVGSkxFTkJRVU1zVlVGQlZTeERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRMRVZCUVVVc1EwRkJRenR4UWtGRE0wSTdhVUpCUTBvN1lVRkRTanM3UVVGRlJDeG5Ra0ZCU1N4RFFVRkRMRk5CUVZNc1JVRkJSVHRCUVVOYUxHOUNRVUZKTEVOQlFVTXNTVUZCU1N4RlFVRkZMRU5CUVVNN1lVRkRaanRUUVVOS08wdEJRMG83TzBGQmVFUm5RaXhUUVVGTExGZEJNRVIwUWl4VlFVRlZMSGxDUVVGSE8wRkJRMVFzV1VGQlRTeE5RVUZOTEVkQlFVY3NTVUZCU1N4RFFVRkRMRTFCUVUwc1EwRkJRenM3UVVGRk0wSXNXVUZCU1N4RFFVRkRMRTlCUVU4c1IwRkJSeXhKUVVGSkxFTkJRVU1zVVVGQlVTeEhRVUZITEVsQlFVa3NRMEZCUXl4UFFVRlBMRU5CUVVNN08wRkJSVFZETEdGQlFVc3NTVUZCU1N4SFFVRkhMRWxCUVVrc1RVRkJUU3hGUVVGRk8wRkJRM0JDTEdkQ1FVRkpMRTFCUVUwc1EwRkJReXhqUVVGakxFTkJRVU1zUjBGQlJ5eERRVUZETEVWQlFVVTdRVUZETlVJc2IwSkJRVTBzUzBGQlN5eEhRVUZITEUxQlFVMHNRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJRenN5UWtGRFJDeERRVUZETEV0QlFVc3NRMEZCUXl4SlFVRkpMRVZCUVVVc1MwRkJTeXhEUVVGRExFVkJRVVVzUTBGQlF6dEJRVUU1UXl4eFFrRkJTeXhEUVVGRExFVkJRVVU3UVVGQlJTeHhRa0ZCU3l4RFFVRkRMRWxCUVVrN1lVRkRlRUk3VTBGRFNqczdRVUZGUkN4bFFVRlBMRWxCUVVrc1EwRkJRenRMUVVObU96dEJRWFpGWjBJc1UwRkJTeXhYUVhsRmRFSXNUMEZCVHl4elFrRkJSenRCUVVOT0xGbEJRVWtzUTBGQlF5eGhRVUZoTEVsQlFVa3NRMEZCUXl4RFFVRkRMRU5CUVVNN1FVRkRla0lzWlVGQlR5eEpRVUZKTEVOQlFVTTdTMEZEWmpzN1FVRTFSV2RDTEZOQlFVc3NWMEU0UlhSQ0xFOUJRVThzYzBKQlFVYzdRVUZEVGl4WlFVRkpMRU5CUVVNc1QwRkJUeXhIUVVGSExFRkJRVU1zU1VGQlNTeERRVUZETEdGQlFXRXNTMEZCU3l4RFFVRkRMRWRCUVVrc1EwRkJReXhIUVVGSExFbEJRVWtzUTBGQlF5eFJRVUZSTEVOQlFVTTdRVUZET1VRc1dVRkJTU3hEUVVGRExFOUJRVThzUjBGQlJ5eFhRUzlHWkN4WFFVRlhMRWRCSzBablFpeERRVUZETzBGQlF6ZENMR1ZCUVU4c1NVRkJTU3hEUVVGRE8wdEJRMlk3TzBGQmJFWm5RaXhUUVVGTExGZEJiMFowUWl4SlFVRkpMR2xDUVVGRExGRkJRVkVzUlVGQlJUdEJRVU5ZTEZsQlFVa3NRMEZCUXl4UlFVRlJMRU5CUVVNc1NVRkJTU3hEUVVGRExGRkJRVkVzUjBGQlJ5eFJRVUZSTEVOQlFVTXNRMEZCUXp0QlFVTjRReXhsUVVGUExFbEJRVWtzUTBGQlF6dExRVU5tT3p0QlFYWkdaMElzVTBGQlN5eFhRWGxHZEVJc1VVRkJVU3h4UWtGQlF5eFBRVUZQTEVWQlFVVTdRVUZEWkN4WlFVRkpMRU5CUVVNc1NVRkJTU3hGUVVGRkxFTkJRVU03UVVGRFdpeFpRVUZKTEVOQlFVTXNUMEZCVHl4SFFVRkhMRTlCUVU4c1EwRkJRenM3UVVGRmRrSXNaVUZCVHl4SlFVRkpMRU5CUVVNN1MwRkRaanM3UVVFNVJtZENMRk5CUVVzc1YwRm5SM1JDTEdWQlFXVXNPRUpCUVVjN1FVRkRaQ3cwUWtGRFR5eHJRa0ZCVFN4bFFVRmxMRXRCUVVFc1RVRkJSVHRCUVVNeFFpeHBRa0ZCU3l4RlFVRkZMRWxCUVVrN1FVRkRXQ3hwUWtGQlN5eEZRVUZGTEVOQlFVTTdRVUZEVWl4clFrRkJUU3hGUVVGRkxFTkJRVU03UVVGRFZDeHZRa0ZCVVN4RlFVRkZMRWRCUVVjN1FVRkRZaXhuUWtGQlNTeEZRVUZGTEV0QlFVczdRVUZEV0N4blFrRkJTU3hGUVVGRkxFdEJRVXM3UVVGRFdDeG5Ra0ZCU1N4RlFVRkZMRXRCUVVzN1FVRkRXQ3g1UWtGQllTeEZRVUZGTEVOQlFVTTdRVUZEYUVJc2FVSkJRVXNzUlVGQlJTeExRVUZMTzBGQlExb3NiVUpCUVU4c1JVRkJSU3hEUVVGRE8xZEJRMW83UzBGRFREczdRVUU1UjJkQ0xGTkJRVXNzVjBGblNIUkNMR1ZCUVdVc09FSkJRVWM3UVVGRFpDdzBRa0ZEVHl4clFrRkJUU3hsUVVGbExFdEJRVUVzVFVGQlJUdEJRVU14UWl4cFFrRkJTeXhGUVVGRkxFTkJRVU03UVVGRFVpeHZRa0ZCVVN4RlFVRkZMRWRCUVVjN1FVRkRZaXhuUWtGQlNTeEZRVUZGTEhWQ1FVRlBMRTlCUVU4N1FVRkRjRUlzYlVKQlFVOHNSVUZCUlN4RFFVRkRPMEZCUTFZc2JVSkJRVThzUlVGQlJTeERRVUZETzBGQlExWXNhVUpCUVVzc1JVRkJSU3hEUVVGRE8wRkJRMUlzWjBKQlFVa3NSVUZCUlN4RFFVRkRPMEZCUTFBc1kwRkJSU3hGUVVGRkxFTkJRVU03UVVGRFRDeHBRa0ZCU3l4RlFVRkZMRXRCUVVzN1YwRkRaRHRMUVVOTU96dEJRVGRJWjBJc1UwRkJTeXhYUVN0SWRFSXNiVUpCUVcxQ0xHdERRVUZITzBGQlEyeENMR1ZCUVU4c1NVRkJTU3hEUVVGRE8wdEJRMlk3TzFkQmFrbG5RaXhMUVVGTE96czdhMEpCUVV3c1MwRkJTeUlzSW1acGJHVWlPaUpVZDJWbGJpNXFjeUlzSW5OdmRYSmpaVkp2YjNRaU9pSXZWWE5sY25NdlRXRjBkRkJsY25KNUwxTnBkR1Z6TDNCdmNHMXZkR2x2YmlJc0luTnZkWEpqWlhORGIyNTBaVzUwSWpwYkltbHRjRzl5ZENCQlkzUnBiMjRnWm5KdmJTQW5MaTlCWTNScGIyNG5PMXh1YVcxd2IzSjBJR1ZoYzJsdVp5Qm1jbTl0SUNjdUwyVmhjMmx1Wnk5d2NtVnpaWFF0WldGemFXNW5KenRjYm1sdGNHOXlkQ0I3SUdOMWNuSmxiblJVYVcxbExDQnBjMDUxYlNCOUlHWnliMjBnSnk0dUwybHVZeTkxZEdsc2N5YzdYRzVwYlhCdmNuUWdlMXh1SUNBZ0lHVmhjMlVzWEc0Z0lDQWdjbVZ6ZEhKcFkzUXNYRzRnSUNBZ1oyVjBVSEp2WjNKbGMzTkdjbTl0Vm1Gc2RXVXNYRzRnSUNBZ2MzUmxjRkJ5YjJkeVpYTnpYRzU5SUdaeWIyMGdKeTR1TDJsdVl5OWpZV3hqSnp0Y2JseHVZMjl1YzNRZ1EwOVZUbFFnUFNBblEyOTFiblFuTzF4dVkyOXVjM1FnVGtWWVZGOVRWRVZRVXlBOUlIdGNiaUFnSUNCc2IyOXdPaUFuY21WemRHRnlkQ2NzWEc0Z0lDQWdlVzk1YnpvZ0ozSmxkbVZ5YzJVbkxGeHVJQ0FnSUdac2FYQTZJQ2RtYkdsd1ZtRnNkV1Z6SjF4dWZUdGNibHh1Wlhod2IzSjBJR1JsWm1GMWJIUWdZMnhoYzNNZ1ZIZGxaVzRnWlhoMFpXNWtjeUJCWTNScGIyNGdlMXh1SUNBZ0lITjBZWEowS0NrZ2UxeHVJQ0FnSUNBZ0lDQnpkWEJsY2k1emRHRnlkQ2dwTzF4dUlDQWdJQ0FnSUNCMGFHbHpMbVZzWVhCelpXUWdQU0F3TzF4dUlDQWdJQ0FnSUNCMGFHbHpMbVpzYVhCRGIzVnVkQ0E5SUhSb2FYTXVlVzk1YjBOdmRXNTBJRDBnZEdocGN5NXNiMjl3UTI5MWJuUWdQU0F3TzF4dVhHNGdJQ0FnSUNBZ0lISmxkSFZ5YmlCMGFHbHpPMXh1SUNBZ0lIMWNibHh1SUNBZ0lHOXVWWEJrWVhSbEtIUjNaV1Z1TENCbWNtRnRaVk4wWVcxd0xDQmxiR0Z3YzJWa0tTQjdYRzRnSUNBZ0lDQWdJR052Ym5OMElIQnliMmR5WlhOelZHRnlaMlYwSUQwZ0tIUm9hWE11Y0d4aGVVUnBjbVZqZEdsdmJpQTlQVDBnTVNrZ1B5QXhJRG9nTUR0Y2JseHVJQ0FnSUNBZ0lDQjBhR2x6TG1WdVpHVmtJRDBnZEhKMVpUdGNiaUFnSUNBZ0lDQWdkR2hwY3k1bGJHRndjMlZrSUNzOUlDaGxiR0Z3YzJWa0lDb2dkR2hwY3k1a2FXeGhkR1VwSUNvZ2RHaHBjeTV3YkdGNVJHbHlaV04wYVc5dU8xeHVYRzRnSUNBZ0lDQWdJR1p2Y2lBb2JHVjBJR2tnUFNBd095QnBJRHdnZEdocGN5NXVkVzFXWVd4MVpVdGxlWE03SUdrckt5a2dlMXh1SUNBZ0lDQWdJQ0FnSUNBZ1kyOXVjM1FnYTJWNUlEMGdkR2hwY3k1MllXeDFaVXRsZVhOYmFWMDdYRzRnSUNBZ0lDQWdJQ0FnSUNCamIyNXpkQ0IyWVd4MVpTQTlJSFJvYVhNdWRtRnNkV1Z6VzJ0bGVWMDdYRzVjYmlBZ0lDQWdJQ0FnSUNBZ0lHeGxkQ0J3Y205bmNtVnpjeUE5SUhKbGMzUnlhV04wS0dkbGRGQnliMmR5WlhOelJuSnZiVlpoYkhWbEtIUm9hWE11Wld4aGNITmxaQ0F0SUhaaGJIVmxMbVJsYkdGNUxDQXdMQ0IyWVd4MVpTNWtkWEpoZEdsdmJpa3NJREFzSURFcE8xeHVYRzRnSUNBZ0lDQWdJQ0FnSUNBdkx5Qk5ZWEpySUZSM1pXVnVJR0Z6SUU1UFZDQmxibVJsWkNCcFppQnpkR2xzYkNCcGJpQndjbTluY21WemMxeHVJQ0FnSUNBZ0lDQWdJQ0FnYVdZZ0tIQnliMmR5WlhOeklDRTlQU0J3Y205bmNtVnpjMVJoY21kbGRDa2dlMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJSFJvYVhNdVpXNWtaV1FnUFNCbVlXeHpaVHRjYmlBZ0lDQWdJQ0FnSUNBZ0lIMWNibHh1SUNBZ0lDQWdJQ0FnSUNBZ0x5OGdVM1JsY0NCd2NtOW5jbVZ6Y3lCcFppQjNaU2R5WlNCemRHVndjR2x1WjF4dUlDQWdJQ0FnSUNBZ0lDQWdhV1lnS0haaGJIVmxMbk4wWlhCektTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdjSEp2WjNKbGMzTWdQU0J6ZEdWd1VISnZaM0psYzNNb2NISnZaM0psYzNNc0lIWmhiSFZsTG5OMFpYQnpLVHRjYmlBZ0lDQWdJQ0FnSUNBZ0lIMWNibHh1SUNBZ0lDQWdJQ0FnSUNBZ0x5OGdSV0Z6WlNCd2NtOW5jbVZ6YzF4dUlDQWdJQ0FnSUNBZ0lDQWdkbUZzZFdVdVkzVnljbVZ1ZENBOUlHVmhjMlVvY0hKdlozSmxjM01zSUhaaGJIVmxMbVp5YjIwc0lIWmhiSFZsTG5SdkxDQjJZV3gxWlM1bFlYTmxLVHRjYmlBZ0lDQWdJQ0FnZlZ4dUlDQWdJSDFjYmx4dUlDQWdJRzl1Um5KaGJXVkZibVFvS1NCN1hHNGdJQ0FnSUNBZ0lHbG1JQ2gwYUdsekxtVnVaR1ZrS1NCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0JzWlhRZ2MzUmxjRlJoYTJWdUlEMGdabUZzYzJVN1hHNWNiaUFnSUNBZ0lDQWdJQ0FnSUdadmNpQW9iR1YwSUd0bGVTQnBiaUJPUlZoVVgxTlVSVkJUS1NCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2FXWWdLRTVGV0ZSZlUxUkZVRk11YUdGelQzZHVVSEp2Y0dWeWRIa29hMlY1S1NrZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0JqYjI1emRDQnRZWGhUZEdWd2N5QTlJSFJvYVhOYmEyVjVYVHRjYmx4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQnBaaUFvYldGNFUzUmxjSE1nUFQwOUlIUnlkV1VnZkh3Z0tHbHpUblZ0S0cxaGVGTjBaWEJ6S1NBbUppQnRZWGhUZEdWd2N5QStJSFJvYVhOYmEyVjVJQ3NnUTA5VlRsUmRLU2tnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnZEdocGMxdHJaWGtnS3lCRFQxVk9WRjByS3p0Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUhOMFpYQlVZV3RsYmlBOUlIUnlkV1U3WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0IwYUdselcwNUZXRlJmVTFSRlVGTmJhMlY1WFYwb0tUdGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnZlZ4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUgxY2JpQWdJQ0FnSUNBZ0lDQWdJSDFjYmx4dUlDQWdJQ0FnSUNBZ0lDQWdhV1lnS0NGemRHVndWR0ZyWlc0cElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQjBhR2x6TG5OMGIzQW9LVHRjYmlBZ0lDQWdJQ0FnSUNBZ0lIMWNiaUFnSUNBZ0lDQWdmVnh1SUNBZ0lIMWNibHh1SUNBZ0lHWnNhWEJXWVd4MVpYTW9LU0I3WEc0Z0lDQWdJQ0FnSUdOdmJuTjBJSFpoYkhWbGN5QTlJSFJvYVhNdWRtRnNkV1Z6TzF4dVhHNGdJQ0FnSUNBZ0lIUm9hWE11Wld4aGNITmxaQ0E5SUhSb2FYTXVaSFZ5WVhScGIyNGdMU0IwYUdsekxtVnNZWEJ6WldRN1hHNWNiaUFnSUNBZ0lDQWdabTl5SUNoc1pYUWdhMlY1SUdsdUlIWmhiSFZsY3lrZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnYVdZZ0tIWmhiSFZsY3k1b1lYTlBkMjVRY205d1pYSjBlU2hyWlhrcEtTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdZMjl1YzNRZ2RtRnNkV1VnUFNCMllXeDFaWE5iYTJWNVhUdGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQmJkbUZzZFdVdWRHOHNJSFpoYkhWbExtWnliMjFkSUQwZ1czWmhiSFZsTG1aeWIyMHNJSFpoYkhWbExuUnZYVHRjYmlBZ0lDQWdJQ0FnSUNBZ0lIMWNiaUFnSUNBZ0lDQWdmVnh1WEc0Z0lDQWdJQ0FnSUhKbGRIVnliaUIwYUdsek8xeHVJQ0FnSUgxY2JseHVJQ0FnSUhKbGRtVnljMlVvS1NCN1hHNGdJQ0FnSUNBZ0lIUm9hWE11Y0d4aGVVUnBjbVZqZEdsdmJpQXFQU0F0TVR0Y2JpQWdJQ0FnSUNBZ2NtVjBkWEp1SUhSb2FYTTdYRzRnSUNBZ2ZWeHVYRzRnSUNBZ2NtVnpkR0Z5ZENncElIdGNiaUFnSUNBZ0lDQWdkR2hwY3k1bGJHRndjMlZrSUQwZ0tIUm9hWE11Y0d4aGVVUnBjbVZqZEdsdmJpQTlQVDBnTVNrZ1B5QXdJRG9nZEdocGN5NWtkWEpoZEdsdmJqdGNiaUFnSUNBZ0lDQWdkR2hwY3k1emRHRnlkR1ZrSUQwZ1kzVnljbVZ1ZEZScGJXVW9LVHRjYmlBZ0lDQWdJQ0FnY21WMGRYSnVJSFJvYVhNN1hHNGdJQ0FnZlZ4dVhHNGdJQ0FnYzJWbGF5aHdjbTluY21WemN5a2dlMXh1SUNBZ0lDQWdJQ0IwYUdsekxuTmxaV3RVYVcxbEtIUm9hWE11WkhWeVlYUnBiMjRnS2lCd2NtOW5jbVZ6Y3lrN1hHNGdJQ0FnSUNBZ0lISmxkSFZ5YmlCMGFHbHpPMXh1SUNBZ0lIMWNibHh1SUNBZ0lITmxaV3RVYVcxbEtHVnNZWEJ6WldRcElIdGNiaUFnSUNBZ0lDQWdkR2hwY3k1dmJtTmxLQ2s3WEc0Z0lDQWdJQ0FnSUhSb2FYTXVaV3hoY0hObFpDQTlJR1ZzWVhCelpXUTdYRzVjYmlBZ0lDQWdJQ0FnY21WMGRYSnVJSFJvYVhNN1hHNGdJQ0FnZlZ4dUlDQWdJRnh1SUNBZ0lHZGxkRVJsWm1GMWJIUlFjbTl3Y3lncElIdGNiaUFnSUNBZ0lDQWdjbVYwZFhKdUlIdGNiaUFnSUNBZ0lDQWdJQ0FnSUM0dUxuTjFjR1Z5TG1kbGRFUmxabUYxYkhSUWNtOXdjeWdwTEZ4dUlDQWdJQ0FnSUNBZ0lDQWdZbXhsYm1RNklIUnlkV1VzWEc0Z0lDQWdJQ0FnSUNBZ0lDQmtaV3hoZVRvZ01DeGNiaUFnSUNBZ0lDQWdJQ0FnSUdScGJHRjBaVG9nTVN4Y2JpQWdJQ0FnSUNBZ0lDQWdJR1IxY21GMGFXOXVPaUF6TURBc1hHNGdJQ0FnSUNBZ0lDQWdJQ0JzYjI5d09pQm1ZV3h6WlN4Y2JpQWdJQ0FnSUNBZ0lDQWdJSGx2ZVc4NklHWmhiSE5sTEZ4dUlDQWdJQ0FnSUNBZ0lDQWdabXhwY0RvZ1ptRnNjMlVzWEc0Z0lDQWdJQ0FnSUNBZ0lDQndiR0Y1UkdseVpXTjBhVzl1T2lBeExGeHVJQ0FnSUNBZ0lDQWdJQ0FnWlc1a1pXUTZJR1poYkhObExGeHVJQ0FnSUNBZ0lDQWdJQ0FnWld4aGNITmxaRG9nTUZ4dUlDQWdJQ0FnSUNCOU8xeHVJQ0FnSUgxY2JseHVJQ0FnSUdkbGRFUmxabUYxYkhSV1lXeDFaU2dwSUh0Y2JpQWdJQ0FnSUNBZ2NtVjBkWEp1SUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJQzR1TG5OMWNHVnlMbWRsZEVSbFptRjFiSFJXWVd4MVpTZ3BMRnh1SUNBZ0lDQWdJQ0FnSUNBZ1pHVnNZWGs2SURBc1hHNGdJQ0FnSUNBZ0lDQWdJQ0JrZFhKaGRHbHZiam9nTXpBd0xGeHVJQ0FnSUNBZ0lDQWdJQ0FnWldGelpUb2daV0Z6YVc1bkxtVmhjMlZQZFhRc1hHNGdJQ0FnSUNBZ0lDQWdJQ0JsYkdGd2MyVmtPaUF3TEZ4dUlDQWdJQ0FnSUNBZ0lDQWdjM1JoWjJkbGNqb2dNQ3hjYmlBZ0lDQWdJQ0FnSUNBZ0lITjBaWEJ6T2lBd0xGeHVJQ0FnSUNBZ0lDQWdJQ0FnWm5KdmJUb2dNQ3hjYmlBZ0lDQWdJQ0FnSUNBZ0lIUnZPaUF3TEZ4dUlDQWdJQ0FnSUNBZ0lDQWdjbTkxYm1RNklHWmhiSE5sWEc0Z0lDQWdJQ0FnSUgwN1hHNGdJQ0FnZlZ4dVhHNGdJQ0FnWjJWMFJHVm1ZWFZzZEZaaGJIVmxVSEp2Y0NncElIdGNiaUFnSUNBZ0lDQWdjbVYwZFhKdUlDZDBieWM3WEc0Z0lDQWdmVnh1ZlZ4dUlsMTlcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2FjdGlvbnMvVHdlZW4uanNcbiAqKiBtb2R1bGUgaWQgPSA2XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbnZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfQWN0aW9uMiA9IHJlcXVpcmUoJy4vQWN0aW9uJyk7XG5cbnZhciBfQWN0aW9uMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX0FjdGlvbjIpO1xuXG52YXIgX2NhbGMgPSByZXF1aXJlKCcuLi9pbmMvY2FsYycpO1xuXG52YXIgX3V0aWxzID0gcmVxdWlyZSgnLi4vaW5jL3V0aWxzJyk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKCFzZWxmKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gY2FsbCAmJiAodHlwZW9mIGNhbGwgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikgPyBjYWxsIDogc2VsZjsgfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb24sIG5vdCBcIiArIHR5cGVvZiBzdXBlckNsYXNzKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCBlbnVtZXJhYmxlOiBmYWxzZSwgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LnNldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKSA6IHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7IH1cblxudmFyIFBoeXNpY3MgPSAoZnVuY3Rpb24gKF9BY3Rpb24pIHtcbiAgICBfaW5oZXJpdHMoUGh5c2ljcywgX0FjdGlvbik7XG5cbiAgICBmdW5jdGlvbiBQaHlzaWNzKCkge1xuICAgICAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgUGh5c2ljcyk7XG5cbiAgICAgICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgICAgICAgIGFyZ3NbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgX3RoaXMgPSBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCBfQWN0aW9uLmNhbGwuYXBwbHkoX0FjdGlvbiwgW3RoaXNdLmNvbmNhdChhcmdzKSkpO1xuXG4gICAgICAgIF90aGlzLmluYWN0aXZlRnJhbWVzID0gMDtcbiAgICAgICAgX3RoaXMuY2FsY3VsYXRlc1ZlbG9jaXR5ID0gdHJ1ZTtcbiAgICAgICAgcmV0dXJuIF90aGlzO1xuICAgIH1cblxuICAgIFBoeXNpY3MucHJvdG90eXBlLm9uVXBkYXRlID0gZnVuY3Rpb24gb25VcGRhdGUocGh5c2ljcywgZnJhbWVTdGFtcCwgZWxhcHNlZCkge1xuICAgICAgICB0aGlzLmhhc0NoYW5nZWQgPSBmYWxzZTtcblxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubnVtVmFsdWVLZXlzOyBpKyspIHtcbiAgICAgICAgICAgIHZhciBrZXkgPSB0aGlzLnZhbHVlS2V5c1tpXTtcbiAgICAgICAgICAgIHZhciB2YWx1ZSA9IHRoaXMudmFsdWVzW2tleV07XG4gICAgICAgICAgICB2YXIgcHJldmlvdXNWYWx1ZSA9IHZhbHVlLnByZXY7XG5cbiAgICAgICAgICAgIC8vIEFwcGx5IGFjY2VsZXJhdGlvblxuICAgICAgICAgICAgdmFsdWUudmVsb2NpdHkgKz0gKDAsIF9jYWxjLnNwZWVkUGVyRnJhbWUpKHZhbHVlLmFjY2VsZXJhdGlvbiwgZWxhcHNlZCk7XG5cbiAgICAgICAgICAgIC8vIEFwcGx5IGZyaWN0aW9uXG4gICAgICAgICAgICB2YWx1ZS52ZWxvY2l0eSAqPSBNYXRoLnBvdygxIC0gdmFsdWUuZnJpY3Rpb24sIGVsYXBzZWQgLyAxMDApO1xuXG4gICAgICAgICAgICAvLyBBcHBseSBzcHJpbmdcbiAgICAgICAgICAgIGlmICh2YWx1ZS5zcHJpbmcgJiYgKDAsIF91dGlscy5pc051bSkodmFsdWUudG8pKSB7XG4gICAgICAgICAgICAgICAgdmFyIGRpc3RhbmNlVG9UYXJnZXQgPSB2YWx1ZS50byAtIHZhbHVlLmN1cnJlbnQ7XG4gICAgICAgICAgICAgICAgdmFsdWUudmVsb2NpdHkgKz0gZGlzdGFuY2VUb1RhcmdldCAqICgwLCBfY2FsYy5zcGVlZFBlckZyYW1lKSh2YWx1ZS5zcHJpbmcsIGVsYXBzZWQpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBBcHBseSBsYXRlc3QgdmVsb2NpdHlcbiAgICAgICAgICAgIHZhbHVlLmN1cnJlbnQgKz0gKDAsIF9jYWxjLnNwZWVkUGVyRnJhbWUpKHZhbHVlLnZlbG9jaXR5LCBlbGFwc2VkKTtcblxuICAgICAgICAgICAgLy8gQ2hlY2sgaWYgdmFsdWUgaGFzIGNoYW5nZWRcbiAgICAgICAgICAgIGlmICh2YWx1ZS5jdXJyZW50ICE9PSBwcmV2aW91c1ZhbHVlIHx8IE1hdGguYWJzKHZhbHVlLnZlbG9jaXR5KSA+PSB2YWx1ZS5zdG9wU3BlZWQgfHwgdmFsdWUuc3ByaW5nICYmIHZhbHVlLmN1cnJlbnQgIT09IHZhbHVlLnRvKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5oYXNDaGFuZ2VkID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBQaHlzaWNzLnByb3RvdHlwZS5vbkZyYW1lRW5kID0gZnVuY3Rpb24gb25GcmFtZUVuZCgpIHtcbiAgICAgICAgaWYgKHRoaXMuYXV0b0VuZCkge1xuICAgICAgICAgICAgdGhpcy5pbmFjdGl2ZUZyYW1lcyA9IHRoaXMuaGFzQ2hhbmdlZCA/IDEgOiB0aGlzLmluYWN0aXZlRnJhbWVzICsgMTtcblxuICAgICAgICAgICAgaWYgKHRoaXMuaW5hY3RpdmVGcmFtZXMgPj0gdGhpcy5tYXhJbmFjdGl2ZUZyYW1lcykge1xuICAgICAgICAgICAgICAgIHRoaXMuc3RvcCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcblxuICAgIC8qXG4gICAgICAgICMgR2V0IGRlZmF1bHQgU2ltdWxhdGUgcHJvcHNcbiAgICAgICAgIEByZXR1cm4gW29iamVjdF1cbiAgICAqL1xuXG4gICAgUGh5c2ljcy5wcm90b3R5cGUuZ2V0RGVmYXVsdFByb3BzID0gZnVuY3Rpb24gZ2V0RGVmYXVsdFByb3BzKCkge1xuICAgICAgICByZXR1cm4gX2V4dGVuZHMoe30sIF9BY3Rpb24ucHJvdG90eXBlLmdldERlZmF1bHRQcm9wcy5jYWxsKHRoaXMpLCB7XG4gICAgICAgICAgICBhdXRvRW5kOiB0cnVlLFxuICAgICAgICAgICAgbWF4SW5hY3RpdmVGcmFtZXM6IDNcbiAgICAgICAgfSk7XG4gICAgfTtcblxuICAgIC8qXG4gICAgICAgICMgR2V0IGRlZmF1bHQgU2ltdWxhdGUgdmFsdWUgcHJvcHNcbiAgICAgICAgIEByZXR1cm4gW29iamVjdF1cbiAgICAqL1xuXG4gICAgUGh5c2ljcy5wcm90b3R5cGUuZ2V0RGVmYXVsdFZhbHVlID0gZnVuY3Rpb24gZ2V0RGVmYXVsdFZhbHVlKCkge1xuICAgICAgICByZXR1cm4gX2V4dGVuZHMoe30sIF9BY3Rpb24ucHJvdG90eXBlLmdldERlZmF1bHRWYWx1ZS5jYWxsKHRoaXMpLCB7XG4gICAgICAgICAgICBhY2NlbGVyYXRpb246IDAsIC8vIFtudW1iZXJdOiBBY2NlbGVyYXRpb24gdG8gYXBwbHkgdG8gdmFsdWUsIGluIHVuaXRzIHBlciBzZWNvbmRcbiAgICAgICAgICAgIGJvdW5jZTogMCwgLy8gW251bWJlcl06IEZhY3RvciB0byBtdWx0aXBseSB2ZWxvY2l0eSBieSBvbiBib3VuY2VcbiAgICAgICAgICAgIHNwcmluZzogMCwgLy8gW251bWJlcl06IFNwcmluZyBzdHJlbmd0aCBkdXJpbmcgJ3N0cmluZydcbiAgICAgICAgICAgIHN0b3BTcGVlZDogMC4wMDAxLCAvLyBbbnVtYmVyXTogU3RvcCBzaW11bGF0aW9uIHVuZGVyIHRoaXMgc3BlZWRcbiAgICAgICAgICAgIGZyaWN0aW9uOiAwIC8vIFtudW1iZXJdOiBGcmljdGlvbiB0byBhcHBseSBwZXIgZnJhbWUsIDAtMVxuICAgICAgICB9KTtcbiAgICB9O1xuXG4gICAgLypcbiAgICAgICAgIyBHZXQgZGVmYXVsdCBTaW11bGF0ZSB2YWx1ZSBwcm9wZXJ0eSBuYW1lXG4gICAgICAgICMjIFNldCB2YWx1ZXMgdG8gdGhpcyB3aGVuIGEgYHZhbHVlYCBpcyBub3QgcHJvdmlkZWQgYXMgYW4gb2JqZWN0XG4gICAgICAgICBAcmV0dXJuIFtzdHJpbmddXG4gICAgKi9cblxuICAgIFBoeXNpY3MucHJvdG90eXBlLmdldERlZmF1bHRWYWx1ZVByb3AgPSBmdW5jdGlvbiBnZXREZWZhdWx0VmFsdWVQcm9wKCkge1xuICAgICAgICByZXR1cm4gJ3ZlbG9jaXR5JztcbiAgICB9O1xuXG4gICAgcmV0dXJuIFBoeXNpY3M7XG59KShfQWN0aW9uMy5kZWZhdWx0KTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gUGh5c2ljcztcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbk55WXk5aFkzUnBiMjV6TDFCb2VYTnBZM011YW5NaVhTd2libUZ0WlhNaU9sdGRMQ0p0WVhCd2FXNW5jeUk2SWpzN096czdPenM3T3pzN096czdPenM3T3pzN096dEpRVWx4UWl4UFFVRlBPMk5CUVZBc1QwRkJUenM3UVVGRmVFSXNZVUZHYVVJc1QwRkJUeXhIUVVWSU96aENRVVpLTEU5QlFVODdPekJEUVVWVUxFbEJRVWs3UVVGQlNpeG5Ra0ZCU1RzN08zRkVRVU5tTERCRFFVRlRMRWxCUVVrc1JVRkJRenM3UVVGRFpDeGpRVUZMTEdOQlFXTXNSMEZCUnl4RFFVRkRMRU5CUVVNN1FVRkRlRUlzWTBGQlN5eHJRa0ZCYTBJc1IwRkJSeXhKUVVGSkxFTkJRVU03TzB0QlEyeERPenRCUVU1blFpeFhRVUZQTEZkQlVYaENMRkZCUVZFc2NVSkJRVU1zVDBGQlR5eEZRVUZGTEZWQlFWVXNSVUZCUlN4UFFVRlBMRVZCUVVVN1FVRkRia01zV1VGQlNTeERRVUZETEZWQlFWVXNSMEZCUnl4TFFVRkxMRU5CUVVNN08wRkJSWGhDTEdGQlFVc3NTVUZCU1N4RFFVRkRMRWRCUVVjc1EwRkJReXhGUVVGRkxFTkJRVU1zUjBGQlJ5eEpRVUZKTEVOQlFVTXNXVUZCV1N4RlFVRkZMRU5CUVVNc1JVRkJSU3hGUVVGRk8wRkJRM2hETEdkQ1FVRk5MRWRCUVVjc1IwRkJSeXhKUVVGSkxFTkJRVU1zVTBGQlV5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRPMEZCUXpsQ0xHZENRVUZOTEV0QlFVc3NSMEZCUnl4SlFVRkpMRU5CUVVNc1RVRkJUU3hEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETzBGQlF5OUNMR2RDUVVGTkxHRkJRV0VzUjBGQlJ5eExRVUZMTEVOQlFVTXNTVUZCU1RzN08wRkJRVU1zUVVGSGFrTXNhVUpCUVVzc1EwRkJReXhSUVVGUkxFbEJRVWtzVlVGd1FuSkNMR0ZCUVdFc1JVRnZRbk5DTEV0QlFVc3NRMEZCUXl4WlFVRlpMRVZCUVVVc1QwRkJUeXhEUVVGRE96czdRVUZCUXl4QlFVYzNSQ3hwUWtGQlN5eERRVUZETEZGQlFWRXNZVUZCU3l4RFFVRkRMRWRCUVVjc1MwRkJTeXhEUVVGRExGRkJRVkVzUlVGQlRTeFBRVUZQTEVkQlFVY3NSMEZCUnl4RFFVRkRPenM3UVVGQlF5eEJRVWN4UkN4blFrRkJTU3hMUVVGTExFTkJRVU1zVFVGQlRTeEpRVUZKTEZkQmVrSjJRaXhMUVVGTExFVkJlVUozUWl4TFFVRkxMRU5CUVVNc1JVRkJSU3hEUVVGRExFVkJRVVU3UVVGRGFrTXNiMEpCUVUwc1owSkJRV2RDTEVkQlFVY3NTMEZCU3l4RFFVRkRMRVZCUVVVc1IwRkJSeXhMUVVGTExFTkJRVU1zVDBGQlR5eERRVUZETzBGQlEyeEVMSEZDUVVGTExFTkJRVU1zVVVGQlVTeEpRVUZKTEdkQ1FVRm5RaXhIUVVGSExGVkJOVUkxUXl4aFFVRmhMRVZCTkVJMlF5eExRVUZMTEVOQlFVTXNUVUZCVFN4RlFVRkZMRTlCUVU4c1EwRkJReXhEUVVGRE8yRkJRemRGT3pzN1FVRkJRU3hCUVVkRUxHbENRVUZMTEVOQlFVTXNUMEZCVHl4SlFVRkpMRlZCYUVOd1FpeGhRVUZoTEVWQlowTnhRaXhMUVVGTExFTkJRVU1zVVVGQlVTeEZRVUZGTEU5QlFVOHNRMEZCUXpzN08wRkJRVU1zUVVGSGVFUXNaMEpCUVVrc1MwRkJTeXhEUVVGRExFOUJRVThzUzBGQlN5eGhRVUZoTEVsQlFVa3NTVUZCU1N4RFFVRkRMRWRCUVVjc1EwRkJReXhMUVVGTExFTkJRVU1zVVVGQlVTeERRVUZETEVsQlFVa3NTMEZCU3l4RFFVRkRMRk5CUVZNc1NVRkJTeXhMUVVGTExFTkJRVU1zVFVGQlRTeEpRVUZKTEV0QlFVc3NRMEZCUXl4UFFVRlBMRXRCUVVzc1MwRkJTeXhEUVVGRExFVkJRVVVzUVVGQlF5eEZRVUZGTzBGQlEyaEpMRzlDUVVGSkxFTkJRVU1zVlVGQlZTeEhRVUZITEVsQlFVa3NRMEZCUXp0aFFVTXhRanRUUVVOS08wdEJRMG83TzBGQmNFTm5RaXhYUVVGUExGZEJjME40UWl4VlFVRlZMSGxDUVVGSE8wRkJRMVFzV1VGQlNTeEpRVUZKTEVOQlFVTXNUMEZCVHl4RlFVRkZPMEZCUTJRc1owSkJRVWtzUTBGQlF5eGpRVUZqTEVkQlFVY3NTVUZCU1N4RFFVRkRMRlZCUVZVc1IwRkJSeXhEUVVGRExFZEJRVWNzU1VGQlNTeERRVUZETEdOQlFXTXNSMEZCUnl4RFFVRkRMRU5CUVVNN08wRkJSWEJGTEdkQ1FVRkpMRWxCUVVrc1EwRkJReXhqUVVGakxFbEJRVWtzU1VGQlNTeERRVUZETEdsQ1FVRnBRaXhGUVVGRk8wRkJReTlETEc5Q1FVRkpMRU5CUVVNc1NVRkJTU3hGUVVGRkxFTkJRVU03WVVGRFpqdFRRVU5LTzB0QlEwbzdPenM3T3pzN1FVRTVRMmRDTEZkQlFVOHNWMEZ4UkhoQ0xHVkJRV1VzT0VKQlFVYzdRVUZEWkN3MFFrRkRUeXhyUWtGQlRTeGxRVUZsTEV0QlFVRXNUVUZCUlR0QlFVTXhRaXh0UWtGQlR5eEZRVUZGTEVsQlFVazdRVUZEWWl3MlFrRkJhVUlzUlVGQlJTeERRVUZETzFkQlEzUkNPMHRCUTB3N096czdPenM3UVVFelJHZENMRmRCUVU4c1YwRnJSWGhDTEdWQlFXVXNPRUpCUVVjN1FVRkRaQ3cwUWtGRFR5eHJRa0ZCVFN4bFFVRmxMRXRCUVVFc1RVRkJSVHRCUVVNeFFpeDNRa0ZCV1N4RlFVRkZMRU5CUVVNN1FVRkRaaXhyUWtGQlRTeEZRVUZGTEVOQlFVTTdRVUZEVkN4clFrRkJUU3hGUVVGRkxFTkJRVU03UVVGRFZDeHhRa0ZCVXl4RlFVRkZMRTFCUVUwN1FVRkRha0lzYjBKQlFWRXNSVUZCUlN4RFFVRkRPMEZCUVVFc1YwRkRZanRMUVVOTU96czdPenM3T3p0QlFUTkZaMElzVjBGQlR5eFhRVzFHZUVJc2JVSkJRVzFDTEd0RFFVRkhPMEZCUTJ4Q0xHVkJRVThzVlVGQlZTeERRVUZETzB0QlEzSkNPenRYUVhKR1owSXNUMEZCVHpzN08ydENRVUZRTEU5QlFVOGlMQ0ptYVd4bElqb2lVR2g1YzJsamN5NXFjeUlzSW5OdmRYSmpaVkp2YjNRaU9pSXZWWE5sY25NdlRXRjBkRkJsY25KNUwxTnBkR1Z6TDNCdmNHMXZkR2x2YmlJc0luTnZkWEpqWlhORGIyNTBaVzUwSWpwYkltbHRjRzl5ZENCQlkzUnBiMjRnWm5KdmJTQW5MaTlCWTNScGIyNG5PMXh1YVcxd2IzSjBJSHNnYzNCbFpXUlFaWEpHY21GdFpTQjlJR1p5YjIwZ0p5NHVMMmx1WXk5allXeGpKenRjYm1sdGNHOXlkQ0I3SUdselRuVnRJSDBnWm5KdmJTQW5MaTR2YVc1akwzVjBhV3h6Snp0Y2JseHVaWGh3YjNKMElHUmxabUYxYkhRZ1kyeGhjM01nVUdoNWMybGpjeUJsZUhSbGJtUnpJRUZqZEdsdmJpQjdYRzVjYmlBZ0lDQmpiMjV6ZEhKMVkzUnZjaWd1TGk1aGNtZHpLU0I3WEc0Z0lDQWdJQ0FnSUhOMWNHVnlLQzR1TG1GeVozTXBPMXh1SUNBZ0lDQWdJQ0IwYUdsekxtbHVZV04wYVhabFJuSmhiV1Z6SUQwZ01EdGNiaUFnSUNBZ0lDQWdkR2hwY3k1allXeGpkV3hoZEdWelZtVnNiMk5wZEhrZ1BTQjBjblZsTzF4dUlDQWdJSDFjYmx4dUlDQWdJRzl1VlhCa1lYUmxLSEJvZVhOcFkzTXNJR1p5WVcxbFUzUmhiWEFzSUdWc1lYQnpaV1FwSUh0Y2JpQWdJQ0FnSUNBZ2RHaHBjeTVvWVhORGFHRnVaMlZrSUQwZ1ptRnNjMlU3WEc1Y2JpQWdJQ0FnSUNBZ1ptOXlJQ2hzWlhRZ2FTQTlJREE3SUdrZ1BDQjBhR2x6TG01MWJWWmhiSFZsUzJWNWN6c2dhU3NyS1NCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0JqYjI1emRDQnJaWGtnUFNCMGFHbHpMblpoYkhWbFMyVjVjMXRwWFR0Y2JpQWdJQ0FnSUNBZ0lDQWdJR052Ym5OMElIWmhiSFZsSUQwZ2RHaHBjeTUyWVd4MVpYTmJhMlY1WFR0Y2JpQWdJQ0FnSUNBZ0lDQWdJR052Ym5OMElIQnlaWFpwYjNWelZtRnNkV1VnUFNCMllXeDFaUzV3Y21WMk8xeHVYRzRnSUNBZ0lDQWdJQ0FnSUNBdkx5QkJjSEJzZVNCaFkyTmxiR1Z5WVhScGIyNWNiaUFnSUNBZ0lDQWdJQ0FnSUhaaGJIVmxMblpsYkc5amFYUjVJQ3M5SUhOd1pXVmtVR1Z5Um5KaGJXVW9kbUZzZFdVdVlXTmpaV3hsY21GMGFXOXVMQ0JsYkdGd2MyVmtLVHRjYmx4dUlDQWdJQ0FnSUNBZ0lDQWdMeThnUVhCd2JIa2dabkpwWTNScGIyNWNiaUFnSUNBZ0lDQWdJQ0FnSUhaaGJIVmxMblpsYkc5amFYUjVJQ285SUNneElDMGdkbUZzZFdVdVpuSnBZM1JwYjI0cElDb3FJQ2hsYkdGd2MyVmtJQzhnTVRBd0tUdGNibHh1SUNBZ0lDQWdJQ0FnSUNBZ0x5OGdRWEJ3YkhrZ2MzQnlhVzVuWEc0Z0lDQWdJQ0FnSUNBZ0lDQnBaaUFvZG1Gc2RXVXVjM0J5YVc1bklDWW1JR2x6VG5WdEtIWmhiSFZsTG5SdktTa2dlMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJR052Ym5OMElHUnBjM1JoYm1ObFZHOVVZWEpuWlhRZ1BTQjJZV3gxWlM1MGJ5QXRJSFpoYkhWbExtTjFjbkpsYm5RN1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2RtRnNkV1V1ZG1Wc2IyTnBkSGtnS3owZ1pHbHpkR0Z1WTJWVWIxUmhjbWRsZENBcUlITndaV1ZrVUdWeVJuSmhiV1VvZG1Gc2RXVXVjM0J5YVc1bkxDQmxiR0Z3YzJWa0tUdGNiaUFnSUNBZ0lDQWdJQ0FnSUgxY2JseHVJQ0FnSUNBZ0lDQWdJQ0FnTHk4Z1FYQndiSGtnYkdGMFpYTjBJSFpsYkc5amFYUjVYRzRnSUNBZ0lDQWdJQ0FnSUNCMllXeDFaUzVqZFhKeVpXNTBJQ3M5SUhOd1pXVmtVR1Z5Um5KaGJXVW9kbUZzZFdVdWRtVnNiMk5wZEhrc0lHVnNZWEJ6WldRcE8xeHVJQ0FnSUNBZ0lDQWdJQ0FnWEc0Z0lDQWdJQ0FnSUNBZ0lDQXZMeUJEYUdWamF5QnBaaUIyWVd4MVpTQm9ZWE1nWTJoaGJtZGxaRnh1SUNBZ0lDQWdJQ0FnSUNBZ2FXWWdLSFpoYkhWbExtTjFjbkpsYm5RZ0lUMDlJSEJ5WlhacGIzVnpWbUZzZFdVZ2ZId2dUV0YwYUM1aFluTW9kbUZzZFdVdWRtVnNiMk5wZEhrcElENDlJSFpoYkhWbExuTjBiM0JUY0dWbFpDQjhmQ0FvZG1Gc2RXVXVjM0J5YVc1bklDWW1JSFpoYkhWbExtTjFjbkpsYm5RZ0lUMDlJSFpoYkhWbExuUnZLU2tnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUhSb2FYTXVhR0Z6UTJoaGJtZGxaQ0E5SUhSeWRXVTdYRzRnSUNBZ0lDQWdJQ0FnSUNCOVhHNGdJQ0FnSUNBZ0lIMWNiaUFnSUNCOVhHNWNiaUFnSUNCdmJrWnlZVzFsUlc1a0tDa2dlMXh1SUNBZ0lDQWdJQ0JwWmlBb2RHaHBjeTVoZFhSdlJXNWtLU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQjBhR2x6TG1sdVlXTjBhWFpsUm5KaGJXVnpJRDBnZEdocGN5NW9ZWE5EYUdGdVoyVmtJRDhnTVNBNklIUm9hWE11YVc1aFkzUnBkbVZHY21GdFpYTWdLeUF4TzF4dVhHNGdJQ0FnSUNBZ0lDQWdJQ0JwWmlBb2RHaHBjeTVwYm1GamRHbDJaVVp5WVcxbGN5QStQU0IwYUdsekxtMWhlRWx1WVdOMGFYWmxSbkpoYldWektTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdkR2hwY3k1emRHOXdLQ2s3WEc0Z0lDQWdJQ0FnSUNBZ0lDQjlYRzRnSUNBZ0lDQWdJSDFjYmlBZ0lDQjlYRzVjYmlBZ0lDQXZLbHh1SUNBZ0lDQWdJQ0FqSUVkbGRDQmtaV1poZFd4MElGTnBiWFZzWVhSbElIQnliM0J6WEc1Y2JpQWdJQ0FnSUNBZ1FISmxkSFZ5YmlCYmIySnFaV04wWFZ4dUlDQWdJQ292WEc0Z0lDQWdaMlYwUkdWbVlYVnNkRkJ5YjNCektDa2dlMXh1SUNBZ0lDQWdJQ0J5WlhSMWNtNGdlMXh1SUNBZ0lDQWdJQ0FnSUNBZ0xpNHVjM1Z3WlhJdVoyVjBSR1ZtWVhWc2RGQnliM0J6S0Nrc1hHNGdJQ0FnSUNBZ0lDQWdJQ0JoZFhSdlJXNWtPaUIwY25WbExGeHVJQ0FnSUNBZ0lDQWdJQ0FnYldGNFNXNWhZM1JwZG1WR2NtRnRaWE02SUROY2JpQWdJQ0FnSUNBZ2ZUdGNiaUFnSUNCOVhHNWNiaUFnSUNBdktseHVJQ0FnSUNBZ0lDQWpJRWRsZENCa1pXWmhkV3gwSUZOcGJYVnNZWFJsSUhaaGJIVmxJSEJ5YjNCelhHNWNiaUFnSUNBZ0lDQWdRSEpsZEhWeWJpQmJiMkpxWldOMFhWeHVJQ0FnSUNvdlhHNGdJQ0FnWjJWMFJHVm1ZWFZzZEZaaGJIVmxLQ2tnZTF4dUlDQWdJQ0FnSUNCeVpYUjFjbTRnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdMaTR1YzNWd1pYSXVaMlYwUkdWbVlYVnNkRlpoYkhWbEtDa3NYRzRnSUNBZ0lDQWdJQ0FnSUNCaFkyTmxiR1Z5WVhScGIyNDZJREFzSUM4dklGdHVkVzFpWlhKZE9pQkJZMk5sYkdWeVlYUnBiMjRnZEc4Z1lYQndiSGtnZEc4Z2RtRnNkV1VzSUdsdUlIVnVhWFJ6SUhCbGNpQnpaV052Ym1SY2JpQWdJQ0FnSUNBZ0lDQWdJR0p2ZFc1alpUb2dNQ3dnTHk4Z1cyNTFiV0psY2wwNklFWmhZM1J2Y2lCMGJ5QnRkV3gwYVhCc2VTQjJaV3h2WTJsMGVTQmllU0J2YmlCaWIzVnVZMlZjYmlBZ0lDQWdJQ0FnSUNBZ0lITndjbWx1WnpvZ01Dd2dMeThnVzI1MWJXSmxjbDA2SUZOd2NtbHVaeUJ6ZEhKbGJtZDBhQ0JrZFhKcGJtY2dKM04wY21sdVp5ZGNiaUFnSUNBZ0lDQWdJQ0FnSUhOMGIzQlRjR1ZsWkRvZ01DNHdNREF4TENBdkx5QmJiblZ0WW1WeVhUb2dVM1J2Y0NCemFXMTFiR0YwYVc5dUlIVnVaR1Z5SUhSb2FYTWdjM0JsWldSY2JpQWdJQ0FnSUNBZ0lDQWdJR1p5YVdOMGFXOXVPaUF3SUM4dklGdHVkVzFpWlhKZE9pQkdjbWxqZEdsdmJpQjBieUJoY0hCc2VTQndaWElnWm5KaGJXVXNJREF0TVZ4dUlDQWdJQ0FnSUNCOU8xeHVJQ0FnSUgxY2JseHVJQ0FnSUM4cVhHNGdJQ0FnSUNBZ0lDTWdSMlYwSUdSbFptRjFiSFFnVTJsdGRXeGhkR1VnZG1Gc2RXVWdjSEp2Y0dWeWRIa2dibUZ0WlZ4dUlDQWdJQ0FnSUNBakl5QlRaWFFnZG1Gc2RXVnpJSFJ2SUhSb2FYTWdkMmhsYmlCaElHQjJZV3gxWldBZ2FYTWdibTkwSUhCeWIzWnBaR1ZrSUdGeklHRnVJRzlpYW1WamRGeHVYRzRnSUNBZ0lDQWdJRUJ5WlhSMWNtNGdXM04wY21sdVoxMWNiaUFnSUNBcUwxeHVJQ0FnSUdkbGRFUmxabUYxYkhSV1lXeDFaVkJ5YjNBb0tTQjdYRzRnSUNBZ0lDQWdJSEpsZEhWeWJpQW5kbVZzYjJOcGRIa25PMXh1SUNBZ0lIMWNibjFjYmlKZGZRPT1cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2FjdGlvbnMvUGh5c2ljcy5qc1xuICoqIG1vZHVsZSBpZCA9IDdcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxudmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF9BY3Rpb24yID0gcmVxdWlyZSgnLi9BY3Rpb24nKTtcblxudmFyIF9BY3Rpb24zID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfQWN0aW9uMik7XG5cbnZhciBfUG9pbnRlciA9IHJlcXVpcmUoJy4uL2lucHV0L1BvaW50ZXInKTtcblxudmFyIF9Qb2ludGVyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX1BvaW50ZXIpO1xuXG52YXIgX2NhbGMgPSByZXF1aXJlKCcuLi9pbmMvY2FsYycpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmICghc2VsZikgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIGNhbGwgJiYgKHR5cGVvZiBjYWxsID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpID8gY2FsbCA6IHNlbGY7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgXCIgKyB0eXBlb2Ygc3VwZXJDbGFzcyk7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgZW51bWVyYWJsZTogZmFsc2UsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcykgOiBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzOyB9XG5cbi8qXG4gICAgU2NyYXBlIHgveSBjb29yZGluYXRlcyBmcm9tIHByb3ZpZGVkIGV2ZW50XG5cbiAgICBAcGFyYW0gW2V2ZW50XVxuICAgIEByZXR1cm4gW29iamVjdF1cbiovXG52YXIgbW91c2VFdmVudFRvUG9pbnQgPSBmdW5jdGlvbiAoZSkge1xuICAgIHJldHVybiB7XG4gICAgICAgIHg6IGUucGFnZVgsXG4gICAgICAgIHk6IGUucGFnZVlcbiAgICB9O1xufTtcblxudmFyIHRvdWNoRXZlbnRUb1BvaW50ID0gZnVuY3Rpb24gKF9yZWYpIHtcbiAgICB2YXIgY2hhbmdlZFRvdWNoZXMgPSBfcmVmLmNoYW5nZWRUb3VjaGVzO1xuICAgIHJldHVybiB7XG4gICAgICAgIHg6IGNoYW5nZWRUb3VjaGVzWzBdLmNsaWVudFgsXG4gICAgICAgIHk6IGNoYW5nZWRUb3VjaGVzWzBdLmNsaWVudFlcbiAgICB9O1xufTtcblxudmFyIGNyZWF0ZVBvaW50ZXIgPSBmdW5jdGlvbiAoZSkge1xuICAgIHJldHVybiBlLnRvdWNoZXMgPyBuZXcgX1BvaW50ZXIyLmRlZmF1bHQodG91Y2hFdmVudFRvUG9pbnQoZSksICd0b3VjaG1vdmUnLCB0b3VjaEV2ZW50VG9Qb2ludCkgOiBuZXcgX1BvaW50ZXIyLmRlZmF1bHQobW91c2VFdmVudFRvUG9pbnQoZSksICdtb3VzZW1vdmUnLCBtb3VzZUV2ZW50VG9Qb2ludCk7XG59O1xuXG52YXIgZ2V0QWN0dWFsRXZlbnQgPSBmdW5jdGlvbiAoZSkge1xuICAgIHJldHVybiBlLm9yaWdpbmFsRXZlbnQgfHwgZTtcbn07XG5cbnZhciBUcmFjayA9IChmdW5jdGlvbiAoX0FjdGlvbikge1xuICAgIF9pbmhlcml0cyhUcmFjaywgX0FjdGlvbik7XG5cbiAgICBmdW5jdGlvbiBUcmFjaygpIHtcbiAgICAgICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFRyYWNrKTtcblxuICAgICAgICByZXR1cm4gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgX0FjdGlvbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpKTtcbiAgICB9XG5cbiAgICBUcmFjay5wcm90b3R5cGUuc3RhcnQgPSBmdW5jdGlvbiBzdGFydChpbnB1dCkge1xuICAgICAgICBfQWN0aW9uLnByb3RvdHlwZS5zdGFydC5jYWxsKHRoaXMpO1xuXG4gICAgICAgIGlmIChpbnB1dCkge1xuICAgICAgICAgICAgdGhpcy5pbnB1dCA9IGlucHV0LnN0YXRlID8gaW5wdXQgOiBjcmVhdGVQb2ludGVyKGdldEFjdHVhbEV2ZW50KGlucHV0KSk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmlucHV0T2Zmc2V0ID0ge307XG4gICAgICAgIHRoaXMuaW5wdXRPcmlnaW4gPSBfZXh0ZW5kcyh7fSwgdGhpcy5pbnB1dC5zdGF0ZSk7XG4gICAgICAgIHRoaXMuaW5wdXQuc3RhcnQoKTtcbiAgICB9O1xuXG4gICAgVHJhY2sucHJvdG90eXBlLnN0b3AgPSBmdW5jdGlvbiBzdG9wKCkge1xuICAgICAgICBfQWN0aW9uLnByb3RvdHlwZS5zdG9wLmNhbGwodGhpcyk7XG4gICAgICAgIHRoaXMuaW5wdXQuc3RvcCgpO1xuICAgIH07XG5cbiAgICBUcmFjay5wcm90b3R5cGUub25VcGRhdGUgPSBmdW5jdGlvbiBvblVwZGF0ZSh0cmFjaywgZnJhbWVTdGFtcCwgZWxhcHNlZCkge1xuICAgICAgICB0aGlzLmlucHV0T2Zmc2V0ID0gKDAsIF9jYWxjLm9mZnNldCkodGhpcy5pbnB1dE9yaWdpbiwgdGhpcy5pbnB1dC5zdGF0ZSk7XG5cbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLm51bVZhbHVlS2V5czsgaSsrKSB7XG4gICAgICAgICAgICB2YXIga2V5ID0gdGhpcy52YWx1ZUtleXNbaV07XG5cbiAgICAgICAgICAgIGlmICh0aGlzLmlucHV0T2Zmc2V0Lmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICAgICAgICB2YXIgdmFsdWUgPSB0aGlzLnZhbHVlc1trZXldO1xuICAgICAgICAgICAgICAgIGlmICh2YWx1ZS5kaXJlY3QpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFsdWUuY3VycmVudCA9IHRoaXMuaW5wdXQuc3RhdGVba2V5XTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB2YWx1ZS5jdXJyZW50ID0gdmFsdWUub3JpZ2luICsgdGhpcy5pbnB1dE9mZnNldFtrZXldO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC8vIFNtb290aCB2YWx1ZSBpZiB3ZSBoYXZlIHNtb290aGluZ1xuICAgICAgICAgICAgICAgIGlmICh2YWx1ZS5zbW9vdGgpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFsdWUuY3VycmVudCA9ICgwLCBfY2FsYy5zbW9vdGgpKHZhbHVlLmN1cnJlbnQsIHZhbHVlLnByZXYsIGVsYXBzZWQsIHZhbHVlLnNtb290aCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcblxuICAgIFRyYWNrLnByb3RvdHlwZS5nZXREZWZhdWx0VmFsdWUgPSBmdW5jdGlvbiBnZXREZWZhdWx0VmFsdWUoKSB7XG4gICAgICAgIHJldHVybiBfZXh0ZW5kcyh7fSwgX0FjdGlvbi5wcm90b3R5cGUuZ2V0RGVmYXVsdFZhbHVlLmNhbGwodGhpcyksIHtcbiAgICAgICAgICAgIGFtcDogMSxcbiAgICAgICAgICAgIGVzY2FwZUFtcDogMCxcbiAgICAgICAgICAgIGRpcmVjdDogZmFsc2VcbiAgICAgICAgfSk7XG4gICAgfTtcblxuICAgIHJldHVybiBUcmFjaztcbn0pKF9BY3Rpb24zLmRlZmF1bHQpO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBUcmFjaztcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbk55WXk5aFkzUnBiMjV6TDFSeVlXTnJMbXB6SWwwc0ltNWhiV1Z6SWpwYlhTd2liV0Z3Y0dsdVozTWlPaUk3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3p0QlFWVkJMRWxCUVUwc2FVSkJRV2xDTEVkQlFVY3NWVUZCUXl4RFFVRkRPMWRCUVUwN1FVRkRPVUlzVTBGQlF5eEZRVUZGTEVOQlFVTXNRMEZCUXl4TFFVRkxPMEZCUTFZc1UwRkJReXhGUVVGRkxFTkJRVU1zUTBGQlF5eExRVUZMTzB0QlEySTdRMEZCUXl4RFFVRkRPenRCUVVWSUxFbEJRVTBzYVVKQlFXbENMRWRCUVVjN1VVRkJSeXhqUVVGakxGRkJRV1FzWTBGQll6dFhRVUZSTzBGQlF5OURMRk5CUVVNc1JVRkJSU3hqUVVGakxFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNUMEZCVHp0QlFVTTFRaXhUUVVGRExFVkJRVVVzWTBGQll5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRTlCUVU4N1MwRkRMMEk3UTBGQlF5eERRVUZET3p0QlFVVklMRWxCUVUwc1lVRkJZU3hIUVVGSExGVkJRVU1zUTBGQlF6dFhRVUZMTEVOQlFVTXNRMEZCUXl4UFFVRlBMRWRCUTJ4RExITkNRVUZaTEdsQ1FVRnBRaXhEUVVGRExFTkJRVU1zUTBGQlF5eEZRVUZGTEZkQlFWY3NSVUZCUlN4cFFrRkJhVUlzUTBGQlF5eEhRVU5xUlN4elFrRkJXU3hwUWtGQmFVSXNRMEZCUXl4RFFVRkRMRU5CUVVNc1JVRkJSU3hYUVVGWExFVkJRVVVzYVVKQlFXbENMRU5CUVVNN1EwRkJRU3hEUVVGRE96dEJRVVYwUlN4SlFVRk5MR05CUVdNc1IwRkJSeXhWUVVGRExFTkJRVU03VjBGQlN5eERRVUZETEVOQlFVTXNZVUZCWVN4SlFVRkpMRU5CUVVNN1EwRkJRU3hEUVVGRE96dEpRVVU1UWl4TFFVRkxPMk5CUVV3c1MwRkJTenM3WVVGQlRDeExRVUZMT3poQ1FVRk1MRXRCUVVzN096czdPMEZCUVV3c1UwRkJTeXhYUVVOMFFpeExRVUZMTEd0Q1FVRkRMRXRCUVVzc1JVRkJSVHRCUVVOVUxEQkNRVUZOTEV0QlFVc3NTMEZCUVN4TlFVRkZMRU5CUVVNN08wRkJSV1FzV1VGQlNTeExRVUZMTEVWQlFVVTdRVUZEVUN4blFrRkJTU3hEUVVGRExFdEJRVXNzUjBGQlJ5eExRVUZMTEVOQlFVTXNTMEZCU3l4SFFVRkhMRXRCUVVzc1IwRkJSeXhoUVVGaExFTkJRVU1zWTBGQll5eERRVUZETEV0QlFVc3NRMEZCUXl4RFFVRkRMRU5CUVVNN1UwRkRNMFU3TzBGQlJVUXNXVUZCU1N4RFFVRkRMRmRCUVZjc1IwRkJSeXhGUVVGRkxFTkJRVU03UVVGRGRFSXNXVUZCU1N4RFFVRkRMRmRCUVZjc1owSkJRVkVzU1VGQlNTeERRVUZETEV0QlFVc3NRMEZCUXl4TFFVRkxMRU5CUVVVc1EwRkJRenRCUVVNelF5eFpRVUZKTEVOQlFVTXNTMEZCU3l4RFFVRkRMRXRCUVVzc1JVRkJSU3hEUVVGRE8wdEJRM1JDT3p0QlFWaG5RaXhUUVVGTExGZEJZWFJDTEVsQlFVa3NiVUpCUVVjN1FVRkRTQ3d3UWtGQlRTeEpRVUZKTEV0QlFVRXNUVUZCUlN4RFFVRkRPMEZCUTJJc1dVRkJTU3hEUVVGRExFdEJRVXNzUTBGQlF5eEpRVUZKTEVWQlFVVXNRMEZCUXp0TFFVTnlRanM3UVVGb1FtZENMRk5CUVVzc1YwRnJRblJDTEZGQlFWRXNjVUpCUVVNc1MwRkJTeXhGUVVGRkxGVkJRVlVzUlVGQlJTeFBRVUZQTEVWQlFVVTdRVUZEYWtNc1dVRkJTU3hEUVVGRExGZEJRVmNzUjBGQlJ5eFZRVE5EVml4TlFVRk5MRVZCTWtOWExFbEJRVWtzUTBGQlF5eFhRVUZYTEVWQlFVVXNTVUZCU1N4RFFVRkRMRXRCUVVzc1EwRkJReXhMUVVGTExFTkJRVU1zUTBGQlF6czdRVUZGT1VRc1lVRkJTeXhKUVVGSkxFTkJRVU1zUjBGQlJ5eERRVUZETEVWQlFVVXNRMEZCUXl4SFFVRkhMRWxCUVVrc1EwRkJReXhaUVVGWkxFVkJRVVVzUTBGQlF5eEZRVUZGTEVWQlFVVTdRVUZEZUVNc1owSkJRVTBzUjBGQlJ5eEhRVUZITEVsQlFVa3NRMEZCUXl4VFFVRlRMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU03TzBGQlJUbENMR2RDUVVGSkxFbEJRVWtzUTBGQlF5eFhRVUZYTEVOQlFVTXNZMEZCWXl4RFFVRkRMRWRCUVVjc1EwRkJReXhGUVVGRk8wRkJRM1JETEc5Q1FVRk5MRXRCUVVzc1IwRkJSeXhKUVVGSkxFTkJRVU1zVFVGQlRTeERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRPMEZCUXk5Q0xHOUNRVUZKTEV0QlFVc3NRMEZCUXl4TlFVRk5MRVZCUVVVN1FVRkRaQ3g1UWtGQlN5eERRVUZETEU5QlFVOHNSMEZCUnl4SlFVRkpMRU5CUVVNc1MwRkJTeXhEUVVGRExFdEJRVXNzUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXp0cFFrRkRla01zVFVGQlRUdEJRVU5JTEhsQ1FVRkxMRU5CUVVNc1QwRkJUeXhIUVVGSExFdEJRVXNzUTBGQlF5eE5RVUZOTEVkQlFVY3NTVUZCU1N4RFFVRkRMRmRCUVZjc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF6dHBRa0ZEZUVRN096dEJRVUZCTEVGQlIwUXNiMEpCUVVrc1MwRkJTeXhEUVVGRExFMUJRVTBzUlVGQlJUdEJRVU5rTEhsQ1FVRkxMRU5CUVVNc1QwRkJUeXhIUVVGSExGVkJNVVF6UWl4TlFVRk5MRVZCTUVRMFFpeExRVUZMTEVOQlFVTXNUMEZCVHl4RlFVRkZMRXRCUVVzc1EwRkJReXhKUVVGSkxFVkJRVVVzVDBGQlR5eEZRVUZGTEV0QlFVc3NRMEZCUXl4TlFVRk5MRU5CUVVNc1EwRkJRenRwUWtGRE5VVTdZVUZEU2p0VFFVTktPMHRCUTBvN08wRkJkRU5uUWl4VFFVRkxMRmRCZDBOMFFpeGxRVUZsTERoQ1FVRkhPMEZCUTJRc05FSkJRMDhzYTBKQlFVMHNaVUZCWlN4TFFVRkJMRTFCUVVVN1FVRkRNVUlzWlVGQlJ5eEZRVUZGTEVOQlFVTTdRVUZEVGl4eFFrRkJVeXhGUVVGRkxFTkJRVU03UVVGRFdpeHJRa0ZCVFN4RlFVRkZMRXRCUVVzN1YwRkRaanRMUVVOTU96dFhRUzlEWjBJc1MwRkJTenM3TzJ0Q1FVRk1MRXRCUVVzaUxDSm1hV3hsSWpvaVZISmhZMnN1YW5NaUxDSnpiM1Z5WTJWU2IyOTBJam9pTDFWelpYSnpMMDFoZEhSUVpYSnllUzlUYVhSbGN5OXdiM0J0YjNScGIyNGlMQ0p6YjNWeVkyVnpRMjl1ZEdWdWRDSTZXeUpwYlhCdmNuUWdRV04wYVc5dUlHWnliMjBnSnk0dlFXTjBhVzl1Snp0Y2JtbHRjRzl5ZENCUWIybHVkR1Z5SUdaeWIyMGdKeTR1TDJsdWNIVjBMMUJ2YVc1MFpYSW5PMXh1YVcxd2IzSjBJSHNnYzIxdmIzUm9MQ0J2Wm1aelpYUWdmU0JtY205dElDY3VMaTlwYm1NdlkyRnNZeWM3WEc1Y2JpOHFYRzRnSUNBZ1UyTnlZWEJsSUhndmVTQmpiMjl5WkdsdVlYUmxjeUJtY205dElIQnliM1pwWkdWa0lHVjJaVzUwWEc1Y2JpQWdJQ0JBY0dGeVlXMGdXMlYyWlc1MFhWeHVJQ0FnSUVCeVpYUjFjbTRnVzI5aWFtVmpkRjFjYmlvdlhHNWpiMjV6ZENCdGIzVnpaVVYyWlc1MFZHOVFiMmx1ZENBOUlDaGxLU0E5UGlBb2UxeHVJQ0FnSUhnNklHVXVjR0ZuWlZnc1hHNGdJQ0FnZVRvZ1pTNXdZV2RsV1Z4dWZTazdYRzVjYm1OdmJuTjBJSFJ2ZFdOb1JYWmxiblJVYjFCdmFXNTBJRDBnS0hzZ1kyaGhibWRsWkZSdmRXTm9aWE1nZlNrZ1BUNGdLSHRjYmlBZ0lDQjRPaUJqYUdGdVoyVmtWRzkxWTJobGMxc3dYUzVqYkdsbGJuUllMRnh1SUNBZ0lIazZJR05vWVc1blpXUlViM1ZqYUdWeld6QmRMbU5zYVdWdWRGbGNibjBwTzF4dVhHNWpiMjV6ZENCamNtVmhkR1ZRYjJsdWRHVnlJRDBnS0dVcElEMCtJR1V1ZEc5MVkyaGxjeUEvWEc0Z0lDQWdibVYzSUZCdmFXNTBaWElvZEc5MVkyaEZkbVZ1ZEZSdlVHOXBiblFvWlNrc0lDZDBiM1ZqYUcxdmRtVW5MQ0IwYjNWamFFVjJaVzUwVkc5UWIybHVkQ2tnT2lCY2JpQWdJQ0J1WlhjZ1VHOXBiblJsY2lodGIzVnpaVVYyWlc1MFZHOVFiMmx1ZENobEtTd2dKMjF2ZFhObGJXOTJaU2NzSUcxdmRYTmxSWFpsYm5SVWIxQnZhVzUwS1R0Y2JseHVZMjl1YzNRZ1oyVjBRV04wZFdGc1JYWmxiblFnUFNBb1pTa2dQVDRnWlM1dmNtbG5hVzVoYkVWMlpXNTBJSHg4SUdVN1hHNWNibVY0Y0c5eWRDQmtaV1poZFd4MElHTnNZWE56SUZSeVlXTnJJR1Y0ZEdWdVpITWdRV04wYVc5dUlIdGNiaUFnSUNCemRHRnlkQ2hwYm5CMWRDa2dlMXh1SUNBZ0lDQWdJQ0J6ZFhCbGNpNXpkR0Z5ZENncE8xeHVYRzRnSUNBZ0lDQWdJR2xtSUNocGJuQjFkQ2tnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdkR2hwY3k1cGJuQjFkQ0E5SUdsdWNIVjBMbk4wWVhSbElEOGdhVzV3ZFhRZ09pQmpjbVZoZEdWUWIybHVkR1Z5S0dkbGRFRmpkSFZoYkVWMlpXNTBLR2x1Y0hWMEtTazdYRzRnSUNBZ0lDQWdJSDFjYmx4dUlDQWdJQ0FnSUNCMGFHbHpMbWx1Y0hWMFQyWm1jMlYwSUQwZ2UzMDdYRzRnSUNBZ0lDQWdJSFJvYVhNdWFXNXdkWFJQY21sbmFXNGdQU0I3SUM0dUxuUm9hWE11YVc1d2RYUXVjM1JoZEdVZ2ZUdGNiaUFnSUNBZ0lDQWdkR2hwY3k1cGJuQjFkQzV6ZEdGeWRDZ3BPMXh1SUNBZ0lIMWNibHh1SUNBZ0lITjBiM0FvS1NCN1hHNGdJQ0FnSUNBZ0lITjFjR1Z5TG5OMGIzQW9LVHRjYmlBZ0lDQWdJQ0FnZEdocGN5NXBibkIxZEM1emRHOXdLQ2s3WEc0Z0lDQWdmVnh1WEc0Z0lDQWdiMjVWY0dSaGRHVW9kSEpoWTJzc0lHWnlZVzFsVTNSaGJYQXNJR1ZzWVhCelpXUXBJSHRjYmlBZ0lDQWdJQ0FnZEdocGN5NXBibkIxZEU5bVpuTmxkQ0E5SUc5bVpuTmxkQ2gwYUdsekxtbHVjSFYwVDNKcFoybHVMQ0IwYUdsekxtbHVjSFYwTG5OMFlYUmxLVHRjYmx4dUlDQWdJQ0FnSUNCbWIzSWdLR3hsZENCcElEMGdNRHNnYVNBOElIUm9hWE11Ym5WdFZtRnNkV1ZMWlhsek95QnBLeXNwSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJR052Ym5OMElHdGxlU0E5SUhSb2FYTXVkbUZzZFdWTFpYbHpXMmxkTzF4dVhHNGdJQ0FnSUNBZ0lDQWdJQ0JwWmlBb2RHaHBjeTVwYm5CMWRFOW1abk5sZEM1b1lYTlBkMjVRY205d1pYSjBlU2hyWlhrcEtTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdZMjl1YzNRZ2RtRnNkV1VnUFNCMGFHbHpMblpoYkhWbGMxdHJaWGxkTzF4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUdsbUlDaDJZV3gxWlM1a2FYSmxZM1FwSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdkbUZzZFdVdVkzVnljbVZ1ZENBOUlIUm9hWE11YVc1d2RYUXVjM1JoZEdWYmEyVjVYVHRjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0I5SUdWc2MyVWdlMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCMllXeDFaUzVqZFhKeVpXNTBJRDBnZG1Gc2RXVXViM0pwWjJsdUlDc2dkR2hwY3k1cGJuQjFkRTltWm5ObGRGdHJaWGxkTzF4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUgxY2JseHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDOHZJRk50YjI5MGFDQjJZV3gxWlNCcFppQjNaU0JvWVhabElITnRiMjkwYUdsdVoxeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lHbG1JQ2gyWVd4MVpTNXpiVzl2ZEdncElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnZG1Gc2RXVXVZM1Z5Y21WdWRDQTlJSE50YjI5MGFDaDJZV3gxWlM1amRYSnlaVzUwTENCMllXeDFaUzV3Y21WMkxDQmxiR0Z3YzJWa0xDQjJZV3gxWlM1emJXOXZkR2dwTzF4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUgxY2JpQWdJQ0FnSUNBZ0lDQWdJSDFjYmlBZ0lDQWdJQ0FnZlZ4dUlDQWdJSDFjYmx4dUlDQWdJR2RsZEVSbFptRjFiSFJXWVd4MVpTZ3BJSHRjYmlBZ0lDQWdJQ0FnY21WMGRYSnVJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lDNHVMbk4xY0dWeUxtZGxkRVJsWm1GMWJIUldZV3gxWlNncExGeHVJQ0FnSUNBZ0lDQWdJQ0FnWVcxd09pQXhMRnh1SUNBZ0lDQWdJQ0FnSUNBZ1pYTmpZWEJsUVcxd09pQXdMRnh1SUNBZ0lDQWdJQ0FnSUNBZ1pHbHlaV04wT2lCbVlXeHpaVnh1SUNBZ0lDQWdJQ0I5TzF4dUlDQWdJSDFjYm4xY2JpSmRmUT09XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9hY3Rpb25zL1RyYWNrLmpzXG4gKiogbW9kdWxlIGlkID0gOFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX2xvb3AgPSByZXF1aXJlKCcuL2xvb3AnKTtcblxudmFyIGxvb3AgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChfbG9vcCk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKG9iaikgeyBpZiAob2JqICYmIG9iai5fX2VzTW9kdWxlKSB7IHJldHVybiBvYmo7IH0gZWxzZSB7IHZhciBuZXdPYmogPSB7fTsgaWYgKG9iaiAhPSBudWxsKSB7IGZvciAodmFyIGtleSBpbiBvYmopIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGtleSkpIG5ld09ialtrZXldID0gb2JqW2tleV07IH0gfSBuZXdPYmouZGVmYXVsdCA9IG9iajsgcmV0dXJuIG5ld09iajsgfSB9XG5cbmZ1bmN0aW9uIF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhvYmosIGtleXMpIHsgdmFyIHRhcmdldCA9IHt9OyBmb3IgKHZhciBpIGluIG9iaikgeyBpZiAoa2V5cy5pbmRleE9mKGkpID49IDApIGNvbnRpbnVlOyBpZiAoIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGkpKSBjb250aW51ZTsgdGFyZ2V0W2ldID0gb2JqW2ldOyB9IHJldHVybiB0YXJnZXQ7IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxudmFyIFByb2Nlc3MgPSAoZnVuY3Rpb24gKCkge1xuICAgIC8qXG4gICAgICAgIFtvYmplY3RdOiBQcm9wZXJ0aWVzXG4gICAgKi9cblxuICAgIGZ1bmN0aW9uIFByb2Nlc3MocHJvcHMpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcblxuICAgICAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgUHJvY2Vzcyk7XG5cbiAgICAgICAgdGhpcy5pZCA9IGxvb3AuZ2V0UHJvY2Vzc0lkKCk7XG5cbiAgICAgICAgdGhpcy5fb25DbGVhbnVwID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgX3RoaXMuc3RvcCgpO1xuICAgICAgICAgICAgX3RoaXMub25DbGVhbnVwID0gdW5kZWZpbmVkO1xuICAgICAgICB9O1xuXG4gICAgICAgIHRoaXMuX29uQWN0aXZhdGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gX3RoaXMub25DbGVhbnVwID0gX3RoaXMuX29uQ2xlYW51cDtcbiAgICAgICAgfTtcblxuICAgICAgICB0aGlzLnNldCh0aGlzLmdldERlZmF1bHRQcm9wcygpKTtcbiAgICAgICAgdGhpcy5zZXQocHJvcHMpO1xuXG4gICAgICAgIHRoaXMuaXNBY3RpdmUgPSBmYWxzZTtcbiAgICB9XG5cbiAgICBQcm9jZXNzLnByb3RvdHlwZS5zZXQgPSBmdW5jdGlvbiBzZXQocHJvcHMpIHtcbiAgICAgICAgZm9yICh2YXIga2V5IGluIHByb3BzKSB7XG4gICAgICAgICAgICBpZiAocHJvcHMuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgICAgICAgIHRoaXNba2V5XSA9IHByb3BzW2tleV07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xuXG4gICAgUHJvY2Vzcy5wcm90b3R5cGUuc3RhcnQgPSBmdW5jdGlvbiBzdGFydCgpIHtcbiAgICAgICAgbG9vcC5hY3RpdmF0ZSh0aGlzLmlkLCB0aGlzKTtcblxuICAgICAgICB0aGlzLm9uQ2xlYW51cCA9IHRoaXMub25BY3RpdmF0ZSA9IHVuZGVmaW5lZDtcblxuICAgICAgICAvLyBQcml2YXRlIGBvblN0YXJ0YFxuICAgICAgICBpZiAodGhpcy5fb25TdGFydCkge1xuICAgICAgICAgICAgdGhpcy5fb25TdGFydCh0aGlzKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFB1YmxpYyBgb25TdGFydGBcbiAgICAgICAgaWYgKHRoaXMub25TdGFydCkge1xuICAgICAgICAgICAgdGhpcy5vblN0YXJ0KHRoaXMpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfTtcblxuICAgIFByb2Nlc3MucHJvdG90eXBlLnN0b3AgPSBmdW5jdGlvbiBzdG9wKCkge1xuICAgICAgICBsb29wLmRlYWN0aXZhdGUodGhpcy5pZCk7XG5cbiAgICAgICAgLy8gUHJpdmF0ZSBgb25TdG9wYFxuICAgICAgICBpZiAodGhpcy5fb25TdG9wKSB7XG4gICAgICAgICAgICB0aGlzLl9vblN0b3AodGhpcyk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBQdWJsaWMgYG9uU3RvcGBcbiAgICAgICAgaWYgKHRoaXMub25TdG9wKSB7XG4gICAgICAgICAgICB0aGlzLm9uU3RvcCh0aGlzKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH07XG5cbiAgICBQcm9jZXNzLnByb3RvdHlwZS5vbmNlID0gZnVuY3Rpb24gb25jZSgpIHtcbiAgICAgICAgdGhpcy5zdGFydCgpO1xuICAgICAgICB0aGlzLm9uQWN0aXZhdGUgPSB0aGlzLl9vbkFjdGl2YXRlO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xuXG4gICAgLypcbiAgICAgICAgIyBHZXQgZGVmYXVsdCBBY3Rpb24gcHJvcGVydGllc1xuICAgICAgICAgQHJldHVybiBbb2JqZWN0XVxuICAgICovXG5cbiAgICBQcm9jZXNzLnByb3RvdHlwZS5nZXREZWZhdWx0UHJvcHMgPSBmdW5jdGlvbiBnZXREZWZhdWx0UHJvcHMoKSB7XG4gICAgICAgIHJldHVybiB7fTtcbiAgICB9O1xuXG4gICAgLypcbiAgICAgICAgIyBFeHRlbmQgdGhpcyBQcm9jZXNzIHdpdGggbmV3IHByb3BlcnRpZXNcbiAgICAgICAgIyMgUmV0dXJucyBuZXcgaW5zdGFuY2Ugb2YgdGhpcyBQcm9jZXNzJ3MgYHByb3RvdHlwZWAgd2l0aCBleGlzdGluZyBhbmQgbmV3IHByb3BlcnRpZXNcbiAgICAgICAgIEBwYXJhbSBbb2JqZWN0XSAob3B0aW9uYWwpXG4gICAgICAgIEByZXR1cm4gW1Byb2Nlc3NdXG4gICAgKi9cblxuICAgIFByb2Nlc3MucHJvdG90eXBlLmluaGVyaXQgPSBmdW5jdGlvbiBpbmhlcml0KHByb3BzKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXMuaWQ7XG5cbiAgICAgICAgdmFyIGluaGVyaXRlZFByb3BzID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKHRoaXMsIFsnaWQnXSk7XG5cbiAgICAgICAgdmFyIG5ld1Byb2Nlc3MgPSBuZXcgdGhpcy5jb25zdHJ1Y3Rvcihpbmhlcml0ZWRQcm9wcyk7XG4gICAgICAgIHJldHVybiBuZXdQcm9jZXNzLnNldChwcm9wcyk7XG4gICAgfTtcblxuICAgIHJldHVybiBQcm9jZXNzO1xufSkoKTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gUHJvY2Vzcztcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbk55WXk5d2NtOWpaWE56TDFCeWIyTmxjM011YW5NaVhTd2libUZ0WlhNaU9sdGRMQ0p0WVhCd2FXNW5jeUk2SWpzN096czdPMGxCUVZrc1NVRkJTVHM3T3pzN096czdTVUZGU3l4UFFVRlBPenM3T3p0QlFVbDRRaXhoUVVwcFFpeFBRVUZQTEVOQlNWb3NTMEZCU3l4RlFVRkZPenM3T0VKQlNrWXNUMEZCVHpzN1FVRkxjRUlzV1VGQlNTeERRVUZETEVWQlFVVXNSMEZCUnl4SlFVRkpMRU5CUVVNc1dVRkJXU3hGUVVGRkxFTkJRVU03TzBGQlJUbENMRmxCUVVrc1EwRkJReXhWUVVGVkxFZEJRVWNzV1VGQlRUdEJRVU53UWl4clFrRkJTeXhKUVVGSkxFVkJRVVVzUTBGQlF6dEJRVU5hTEd0Q1FVRkxMRk5CUVZNc1IwRkJSeXhUUVVGVExFTkJRVU03VTBGRE9VSXNRMEZCUXpzN1FVRkZSaXhaUVVGSkxFTkJRVU1zVjBGQlZ5eEhRVUZITzIxQ1FVRk5MRTFCUVVzc1UwRkJVeXhIUVVGSExFMUJRVXNzVlVGQlZUdFRRVUZCTEVOQlFVTTdPMEZCUlRGRUxGbEJRVWtzUTBGQlF5eEhRVUZITEVOQlFVTXNTVUZCU1N4RFFVRkRMR1ZCUVdVc1JVRkJSU3hEUVVGRExFTkJRVU03UVVGRGFrTXNXVUZCU1N4RFFVRkRMRWRCUVVjc1EwRkJReXhMUVVGTExFTkJRVU1zUTBGQlF6czdRVUZGYUVJc1dVRkJTU3hEUVVGRExGRkJRVkVzUjBGQlJ5eExRVUZMTEVOQlFVTTdTMEZEZWtJN08wRkJiRUpuUWl4WFFVRlBMRmRCYjBKNFFpeEhRVUZITEdkQ1FVRkRMRXRCUVVzc1JVRkJSVHRCUVVOUUxHRkJRVXNzU1VGQlNTeEhRVUZITEVsQlFVa3NTMEZCU3l4RlFVRkZPMEZCUTI1Q0xHZENRVUZKTEV0QlFVc3NRMEZCUXl4alFVRmpMRU5CUVVNc1IwRkJSeXhEUVVGRExFVkJRVVU3UVVGRE0wSXNiMEpCUVVrc1EwRkJReXhIUVVGSExFTkJRVU1zUjBGQlJ5eExRVUZMTEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNN1lVRkRNVUk3VTBGRFNqczdRVUZGUkN4bFFVRlBMRWxCUVVrc1EwRkJRenRMUVVObU96dEJRVFZDWjBJc1YwRkJUeXhYUVRoQ2VFSXNTMEZCU3l4dlFrRkJSenRCUVVOS0xGbEJRVWtzUTBGQlF5eFJRVUZSTEVOQlFVTXNTVUZCU1N4RFFVRkRMRVZCUVVVc1JVRkJSU3hKUVVGSkxFTkJRVU1zUTBGQlF6czdRVUZGTjBJc1dVRkJTU3hEUVVGRExGTkJRVk1zUjBGQlJ5eEpRVUZKTEVOQlFVTXNWVUZCVlN4SFFVRkhMRk5CUVZNN096dEJRVUZETEVGQlJ6ZERMRmxCUVVrc1NVRkJTU3hEUVVGRExGRkJRVkVzUlVGQlJUdEJRVU5tTEdkQ1FVRkpMRU5CUVVNc1VVRkJVU3hEUVVGRExFbEJRVWtzUTBGQlF5eERRVUZETzFOQlEzWkNPenM3UVVGQlFTeEJRVWRFTEZsQlFVa3NTVUZCU1N4RFFVRkRMRTlCUVU4c1JVRkJSVHRCUVVOa0xHZENRVUZKTEVOQlFVTXNUMEZCVHl4RFFVRkRMRWxCUVVrc1EwRkJReXhEUVVGRE8xTkJRM1JDT3p0QlFVVkVMR1ZCUVU4c1NVRkJTU3hEUVVGRE8wdEJRMlk3TzBGQk9VTm5RaXhYUVVGUExGZEJaMFI0UWl4SlFVRkpMRzFDUVVGSE8wRkJRMGdzV1VGQlNTeERRVUZETEZWQlFWVXNRMEZCUXl4SlFVRkpMRU5CUVVNc1JVRkJSU3hEUVVGRE96czdRVUZCUXl4QlFVZDZRaXhaUVVGSkxFbEJRVWtzUTBGQlF5eFBRVUZQTEVWQlFVVTdRVUZEWkN4blFrRkJTU3hEUVVGRExFOUJRVThzUTBGQlF5eEpRVUZKTEVOQlFVTXNRMEZCUXp0VFFVTjBRanM3TzBGQlFVRXNRVUZIUkN4WlFVRkpMRWxCUVVrc1EwRkJReXhOUVVGTkxFVkJRVVU3UVVGRFlpeG5Ra0ZCU1N4RFFVRkRMRTFCUVUwc1EwRkJReXhKUVVGSkxFTkJRVU1zUTBGQlF6dFRRVU55UWpzN1FVRkZSQ3hsUVVGUExFbEJRVWtzUTBGQlF6dExRVU5tT3p0QlFUbEVaMElzVjBGQlR5eFhRV2RGZUVJc1NVRkJTU3h0UWtGQlJ6dEJRVU5JTEZsQlFVa3NRMEZCUXl4TFFVRkxMRVZCUVVVc1EwRkJRenRCUVVOaUxGbEJRVWtzUTBGQlF5eFZRVUZWTEVkQlFVY3NTVUZCU1N4RFFVRkRMRmRCUVZjc1EwRkJRenRCUVVOdVF5eGxRVUZQTEVsQlFVa3NRMEZCUXp0TFFVTm1PenM3T3pzN08wRkJjRVZuUWl4WFFVRlBMRmRCTWtWNFFpeGxRVUZsTERoQ1FVRkhPMEZCUTJRc1pVRkJUeXhGUVVGRkxFTkJRVU03UzBGRFlqczdPenM3T3pzN08wRkJOMFZuUWl4WFFVRlBMRmRCYzBaNFFpeFBRVUZQTEc5Q1FVRkRMRXRCUVVzc1JVRkJSVHRaUVVOSUxFVkJRVVVzUjBGQmQwSXNTVUZCU1N4RFFVRTVRaXhGUVVGRk96dFpRVUZMTEdOQlFXTXNORUpCUVVzc1NVRkJTVHM3UVVGRGRFTXNXVUZCVFN4VlFVRlZMRWRCUVVjc1NVRkJTU3hKUVVGSkxFTkJRVU1zVjBGQlZ5eERRVUZETEdOQlFXTXNRMEZCUXl4RFFVRkRPMEZCUTNoRUxHVkJRVThzVlVGQlZTeERRVUZETEVkQlFVY3NRMEZCUXl4TFFVRkxMRU5CUVVNc1EwRkJRenRMUVVOb1F6czdWMEV4Um1kQ0xFOUJRVTg3T3p0clFrRkJVQ3hQUVVGUElpd2labWxzWlNJNklsQnliMk5sYzNNdWFuTWlMQ0p6YjNWeVkyVlNiMjkwSWpvaUwxVnpaWEp6TDAxaGRIUlFaWEp5ZVM5VGFYUmxjeTl3YjNCdGIzUnBiMjRpTENKemIzVnlZMlZ6UTI5dWRHVnVkQ0k2V3lKcGJYQnZjblFnS2lCaGN5QnNiMjl3SUdaeWIyMGdKeTR2Ykc5dmNDYzdYRzVjYm1WNGNHOXlkQ0JrWldaaGRXeDBJR05zWVhOeklGQnliMk5sYzNNZ2UxeHVJQ0FnSUM4cVhHNGdJQ0FnSUNBZ0lGdHZZbXBsWTNSZE9pQlFjbTl3WlhKMGFXVnpYRzRnSUNBZ0tpOWNiaUFnSUNCamIyNXpkSEoxWTNSdmNpaHdjbTl3Y3lrZ2UxeHVJQ0FnSUNBZ0lDQjBhR2x6TG1sa0lEMGdiRzl2Y0M1blpYUlFjbTlqWlhOelNXUW9LVHRjYmx4dUlDQWdJQ0FnSUNCMGFHbHpMbDl2YmtOc1pXRnVkWEFnUFNBb0tTQTlQaUI3WEc0Z0lDQWdJQ0FnSUNBZ0lDQjBhR2x6TG5OMGIzQW9LVHRjYmlBZ0lDQWdJQ0FnSUNBZ0lIUm9hWE11YjI1RGJHVmhiblZ3SUQwZ2RXNWtaV1pwYm1Wa08xeHVJQ0FnSUNBZ0lDQjlPMXh1WEc0Z0lDQWdJQ0FnSUhSb2FYTXVYMjl1UVdOMGFYWmhkR1VnUFNBb0tTQTlQaUIwYUdsekxtOXVRMnhsWVc1MWNDQTlJSFJvYVhNdVgyOXVRMnhsWVc1MWNEdGNibHh1SUNBZ0lDQWdJQ0IwYUdsekxuTmxkQ2gwYUdsekxtZGxkRVJsWm1GMWJIUlFjbTl3Y3lncEtUdGNiaUFnSUNBZ0lDQWdkR2hwY3k1elpYUW9jSEp2Y0hNcE8xeHVYRzRnSUNBZ0lDQWdJSFJvYVhNdWFYTkJZM1JwZG1VZ1BTQm1ZV3h6WlR0Y2JpQWdJQ0I5WEc1Y2JpQWdJQ0J6WlhRb2NISnZjSE1wSUh0Y2JpQWdJQ0FnSUNBZ1ptOXlJQ2hzWlhRZ2EyVjVJR2x1SUhCeWIzQnpLU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQnBaaUFvY0hKdmNITXVhR0Z6VDNkdVVISnZjR1Z5ZEhrb2EyVjVLU2tnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUhSb2FYTmJhMlY1WFNBOUlIQnliM0J6VzJ0bGVWMDdYRzRnSUNBZ0lDQWdJQ0FnSUNCOVhHNGdJQ0FnSUNBZ0lIMWNibHh1SUNBZ0lDQWdJQ0J5WlhSMWNtNGdkR2hwY3p0Y2JpQWdJQ0I5WEc1Y2JpQWdJQ0J6ZEdGeWRDZ3BJSHRjYmlBZ0lDQWdJQ0FnYkc5dmNDNWhZM1JwZG1GMFpTaDBhR2x6TG1sa0xDQjBhR2x6S1R0Y2JseHVJQ0FnSUNBZ0lDQjBhR2x6TG05dVEyeGxZVzUxY0NBOUlIUm9hWE11YjI1QlkzUnBkbUYwWlNBOUlIVnVaR1ZtYVc1bFpEdGNibHh1SUNBZ0lDQWdJQ0F2THlCUWNtbDJZWFJsSUdCdmJsTjBZWEowWUZ4dUlDQWdJQ0FnSUNCcFppQW9kR2hwY3k1ZmIyNVRkR0Z5ZENrZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnZEdocGN5NWZiMjVUZEdGeWRDaDBhR2x6S1R0Y2JpQWdJQ0FnSUNBZ2ZWeHVYRzRnSUNBZ0lDQWdJQzh2SUZCMVlteHBZeUJnYjI1VGRHRnlkR0JjYmlBZ0lDQWdJQ0FnYVdZZ0tIUm9hWE11YjI1VGRHRnlkQ2tnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdkR2hwY3k1dmJsTjBZWEowS0hSb2FYTXBPMXh1SUNBZ0lDQWdJQ0I5WEc1Y2JpQWdJQ0FnSUNBZ2NtVjBkWEp1SUhSb2FYTTdYRzRnSUNBZ2ZWeHVYRzRnSUNBZ2MzUnZjQ2dwSUh0Y2JpQWdJQ0FnSUNBZ2JHOXZjQzVrWldGamRHbDJZWFJsS0hSb2FYTXVhV1FwTzF4dVhHNGdJQ0FnSUNBZ0lDOHZJRkJ5YVhaaGRHVWdZRzl1VTNSdmNHQmNiaUFnSUNBZ0lDQWdhV1lnS0hSb2FYTXVYMjl1VTNSdmNDa2dlMXh1SUNBZ0lDQWdJQ0FnSUNBZ2RHaHBjeTVmYjI1VGRHOXdLSFJvYVhNcE8xeHVJQ0FnSUNBZ0lDQjlYRzVjYmlBZ0lDQWdJQ0FnTHk4Z1VIVmliR2xqSUdCdmJsTjBiM0JnWEc0Z0lDQWdJQ0FnSUdsbUlDaDBhR2x6TG05dVUzUnZjQ2tnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdkR2hwY3k1dmJsTjBiM0FvZEdocGN5azdYRzRnSUNBZ0lDQWdJSDFjYmx4dUlDQWdJQ0FnSUNCeVpYUjFjbTRnZEdocGN6dGNiaUFnSUNCOVhHNWNiaUFnSUNCdmJtTmxLQ2tnZTF4dUlDQWdJQ0FnSUNCMGFHbHpMbk4wWVhKMEtDazdYRzRnSUNBZ0lDQWdJSFJvYVhNdWIyNUJZM1JwZG1GMFpTQTlJSFJvYVhNdVgyOXVRV04wYVhaaGRHVTdYRzRnSUNBZ0lDQWdJSEpsZEhWeWJpQjBhR2x6TzF4dUlDQWdJSDFjYmx4dUlDQWdJQzhxWEc0Z0lDQWdJQ0FnSUNNZ1IyVjBJR1JsWm1GMWJIUWdRV04wYVc5dUlIQnliM0JsY25ScFpYTmNibHh1SUNBZ0lDQWdJQ0JBY21WMGRYSnVJRnR2WW1wbFkzUmRYRzRnSUNBZ0tpOWNiaUFnSUNCblpYUkVaV1poZFd4MFVISnZjSE1vS1NCN1hHNGdJQ0FnSUNBZ0lISmxkSFZ5YmlCN2ZUdGNiaUFnSUNCOVhHNWNiaUFnSUNBdktseHVJQ0FnSUNBZ0lDQWpJRVY0ZEdWdVpDQjBhR2x6SUZCeWIyTmxjM01nZDJsMGFDQnVaWGNnY0hKdmNHVnlkR2xsYzF4dUlDQWdJQ0FnSUNBakl5QlNaWFIxY201eklHNWxkeUJwYm5OMFlXNWpaU0J2WmlCMGFHbHpJRkJ5YjJObGMzTW5jeUJnY0hKdmRHOTBlWEJsWUNCM2FYUm9JR1Y0YVhOMGFXNW5JR0Z1WkNCdVpYY2djSEp2Y0dWeWRHbGxjMXh1WEc0Z0lDQWdJQ0FnSUVCd1lYSmhiU0JiYjJKcVpXTjBYU0FvYjNCMGFXOXVZV3dwWEc0Z0lDQWdJQ0FnSUVCeVpYUjFjbTRnVzFCeWIyTmxjM05kWEc0Z0lDQWdLaTljYmlBZ0lDQnBibWhsY21sMEtIQnliM0J6S1NCN1hHNGdJQ0FnSUNBZ0lHTnZibk4wSUhzZ2FXUXNJQzR1TG1sdWFHVnlhWFJsWkZCeWIzQnpJSDBnUFNCMGFHbHpPMXh1SUNBZ0lDQWdJQ0JqYjI1emRDQnVaWGRRY205alpYTnpJRDBnYm1WM0lIUm9hWE11WTI5dWMzUnlkV04wYjNJb2FXNW9aWEpwZEdWa1VISnZjSE1wTzF4dUlDQWdJQ0FnSUNCeVpYUjFjbTRnYm1WM1VISnZZMlZ6Y3k1elpYUW9jSEp2Y0hNcE8xeHVJQ0FnSUgxY2JuMGlYWDA9XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9wcm9jZXNzL1Byb2Nlc3MuanNcbiAqKiBtb2R1bGUgaWQgPSA5XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbnZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfUHJvY2VzczIgPSByZXF1aXJlKCcuLi9wcm9jZXNzL1Byb2Nlc3MnKTtcblxudmFyIF9Qcm9jZXNzMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX1Byb2Nlc3MyKTtcblxudmFyIF91dGlscyA9IHJlcXVpcmUoJy4uL2luYy91dGlscycpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmICghc2VsZikgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIGNhbGwgJiYgKHR5cGVvZiBjYWxsID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpID8gY2FsbCA6IHNlbGY7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgXCIgKyB0eXBlb2Ygc3VwZXJDbGFzcyk7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgZW51bWVyYWJsZTogZmFsc2UsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcykgOiBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzOyB9XG5cbnZhciBJbnB1dCA9IChmdW5jdGlvbiAoX1Byb2Nlc3MpIHtcbiAgICBfaW5oZXJpdHMoSW5wdXQsIF9Qcm9jZXNzKTtcblxuICAgIGZ1bmN0aW9uIElucHV0KGluaXRpYWxWYWx1ZXMsIHBvbGwpIHtcbiAgICAgICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIElucHV0KTtcblxuICAgICAgICB2YXIgX3RoaXMgPSBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCBfUHJvY2Vzcy5jYWxsKHRoaXMpKTtcblxuICAgICAgICBfdGhpcy5zdGF0ZSA9IGluaXRpYWxWYWx1ZXM7XG5cbiAgICAgICAgaWYgKCgwLCBfdXRpbHMuaXNGdW5jKShwb2xsKSkge1xuICAgICAgICAgICAgX3RoaXMub25GcmFtZVN0YXJ0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBfdGhpcy5sYXRlc3QoX3RoaXMucG9sbCgpKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIF90aGlzO1xuICAgIH1cblxuICAgIC8qXG4gICAgICAgIE1hbnVhbGx5IGFkZCBsYXRlc3QgdmFsdWVzXG4gICAgICAgICBAcGFyYW0gW29iamVjdF1cbiAgICAqL1xuXG4gICAgSW5wdXQucHJvdG90eXBlLmxhdGVzdCA9IGZ1bmN0aW9uIGxhdGVzdChwcm9wcykge1xuICAgICAgICB0aGlzLnN0YXRlID0gX2V4dGVuZHMoe30sIHRoaXMuc3RhdGUsIHByb3BzKTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIElucHV0O1xufSkoX1Byb2Nlc3MzLmRlZmF1bHQpO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBJbnB1dDtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbk55WXk5cGJuQjFkQzlKYm5CMWRDNXFjeUpkTENKdVlXMWxjeUk2VzEwc0ltMWhjSEJwYm1keklqb2lPenM3T3pzN096czdPenM3T3pzN096czdPenRKUVVkeFFpeExRVUZMTzJOQlFVd3NTMEZCU3pzN1FVRkRkRUlzWVVGRWFVSXNTMEZCU3l4RFFVTldMR0ZCUVdFc1JVRkJSU3hKUVVGSkxFVkJRVVU3T0VKQlJHaENMRXRCUVVzN08zRkVRVVZzUWl4dFFrRkJUenM3UVVGRFVDeGpRVUZMTEV0QlFVc3NSMEZCUnl4aFFVRmhMRU5CUVVNN08wRkJSVE5DTEZsQlFVa3NWMEZRU0N4TlFVRk5MRVZCVDBrc1NVRkJTU3hEUVVGRExFVkJRVVU3UVVGRFpDeHJRa0ZCU3l4WlFVRlpMRWRCUVVjN2RVSkJRVTBzVFVGQlN5eE5RVUZOTEVOQlFVTXNUVUZCU3l4SlFVRkpMRVZCUVVVc1EwRkJRenRoUVVGQkxFTkJRVU03VTBGRGRFUTdPMHRCUTBvN096czdPenRCUVVGQk8wRkJVbWRDTEZOQlFVc3NWMEZsZEVJc1RVRkJUU3h0UWtGQlF5eExRVUZMTEVWQlFVVTdRVUZEVml4WlFVRkpMRU5CUVVNc1MwRkJTeXhuUWtGQlVTeEpRVUZKTEVOQlFVTXNTMEZCU3l4RlFVRkxMRXRCUVVzc1EwRkJSU3hEUVVGRE8wdEJRelZET3p0WFFXcENaMElzUzBGQlN6czdPMnRDUVVGTUxFdEJRVXNpTENKbWFXeGxJam9pU1c1d2RYUXVhbk1pTENKemIzVnlZMlZTYjI5MElqb2lMMVZ6WlhKekwwMWhkSFJRWlhKeWVTOVRhWFJsY3k5d2IzQnRiM1JwYjI0aUxDSnpiM1Z5WTJWelEyOXVkR1Z1ZENJNld5SnBiWEJ2Y25RZ1VISnZZMlZ6Y3lCbWNtOXRJQ2N1TGk5d2NtOWpaWE56TDFCeWIyTmxjM01uTzF4dWFXMXdiM0owSUhzZ2FYTkdkVzVqSUgwZ1puSnZiU0FuTGk0dmFXNWpMM1YwYVd4ekp6dGNibHh1Wlhod2IzSjBJR1JsWm1GMWJIUWdZMnhoYzNNZ1NXNXdkWFFnWlhoMFpXNWtjeUJRY205alpYTnpJSHRjYmlBZ0lDQmpiMjV6ZEhKMVkzUnZjaWhwYm1sMGFXRnNWbUZzZFdWekxDQndiMnhzS1NCN1hHNGdJQ0FnSUNBZ0lITjFjR1Z5S0NrN1hHNGdJQ0FnSUNBZ0lIUm9hWE11YzNSaGRHVWdQU0JwYm1sMGFXRnNWbUZzZFdWek8xeHVYRzRnSUNBZ0lDQWdJR2xtSUNocGMwWjFibU1vY0c5c2JDa3BJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lIUm9hWE11YjI1R2NtRnRaVk4wWVhKMElEMGdLQ2tnUFQ0Z2RHaHBjeTVzWVhSbGMzUW9kR2hwY3k1d2IyeHNLQ2twTzF4dUlDQWdJQ0FnSUNCOVhHNGdJQ0FnZlZ4dVhHNGdJQ0FnTHlwY2JpQWdJQ0FnSUNBZ1RXRnVkV0ZzYkhrZ1lXUmtJR3hoZEdWemRDQjJZV3gxWlhOY2JseHVJQ0FnSUNBZ0lDQkFjR0Z5WVcwZ1cyOWlhbVZqZEYxY2JpQWdJQ0FxTDF4dUlDQWdJR3hoZEdWemRDaHdjbTl3Y3lrZ2UxeHVJQ0FnSUNBZ0lDQjBhR2x6TG5OMFlYUmxJRDBnZXlBdUxpNTBhR2x6TG5OMFlYUmxMQ0F1TGk1d2NtOXdjeUI5TzF4dUlDQWdJSDFjYm4xY2JpSmRmUT09XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9pbnB1dC9JbnB1dC5qc1xuICoqIG1vZHVsZSBpZCA9IDEwXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzLmRlZmF1bHQgPSBzdGFnZ2VyO1xuXG52YXIgX1R3ZWVuID0gcmVxdWlyZSgnLi4vYWN0aW9ucy9Ud2VlbicpO1xuXG52YXIgX1R3ZWVuMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX1R3ZWVuKTtcblxudmFyIF9wcmVzZXRFYXNpbmcgPSByZXF1aXJlKCcuLi9hY3Rpb25zL2Vhc2luZy9wcmVzZXQtZWFzaW5nJyk7XG5cbnZhciBfcHJlc2V0RWFzaW5nMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3ByZXNldEVhc2luZyk7XG5cbnZhciBfdXRpbHMgPSByZXF1aXJlKCcuL3V0aWxzJyk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbnZhciBERUZBVUxUX0lOVEVSVkFMID0gMTAwO1xuXG5mdW5jdGlvbiBzdGFnZ2VyKGFycmF5LCBjYWxsYmFjaywgcHJvcHMpIHtcbiAgICB2YXIgYXJyYXlMZW5ndGggPSBhcnJheS5sZW5ndGg7XG4gICAgdmFyIHByb3BzSXNJbnRlcnZhbCA9ICgwLCBfdXRpbHMuaXNOdW0pKHByb3BzKTtcbiAgICB2YXIgaW50ZXJ2YWwgPSBwcm9wc0lzSW50ZXJ2YWwgPyBwcm9wcyA6IHByb3BzLmludGVydmFsIHx8IERFRkFVTFRfSU5URVJWQUw7XG4gICAgdmFyIHByZXZJbmRleCA9IC0xO1xuXG4gICAgdmFyIHN0YWdnZXJUd2VlbiA9IG5ldyBfVHdlZW4yLmRlZmF1bHQoe1xuICAgICAgICBkdXJhdGlvbjogaW50ZXJ2YWwgKiBhcnJheUxlbmd0aCxcbiAgICAgICAgdmFsdWVzOiB7XG4gICAgICAgICAgICBpOiB7XG4gICAgICAgICAgICAgICAgZnJvbTogMCxcbiAgICAgICAgICAgICAgICB0bzogYXJyYXlMZW5ndGggLSAxLFxuICAgICAgICAgICAgICAgIHJvdW5kOiB0cnVlLFxuICAgICAgICAgICAgICAgIGVhc2U6IHByb3BzSXNJbnRlcnZhbCA/IF9wcmVzZXRFYXNpbmcyLmRlZmF1bHQubGluZWFyIDogcHJvcHMuZWFzZSB8fCBfcHJlc2V0RWFzaW5nMi5kZWZhdWx0LmxpbmVhclxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBvblJlbmRlcjogZnVuY3Rpb24gKHR3ZWVuKSB7XG4gICAgICAgICAgICB2YXIgaSA9IHR3ZWVuLnN0YXRlLmk7XG4gICAgICAgICAgICB2YXIgZ2FwSW5kZXggPSBwcmV2SW5kZXggKyAxO1xuXG4gICAgICAgICAgICBmb3IgKDsgZ2FwSW5kZXggPD0gaTsgZ2FwSW5kZXgrKykge1xuICAgICAgICAgICAgICAgIGNhbGxiYWNrKGFycmF5W2dhcEluZGV4XSwgZ2FwSW5kZXgpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBwcmV2SW5kZXggPSBpO1xuICAgICAgICB9LFxuICAgICAgICBvbkNvbXBsZXRlOiBwcm9wc0lzSW50ZXJ2YWwgPyB1bmRlZmluZWQgOiBwcm9wcy5vbkNvbXBsZXRlXG4gICAgfSk7XG5cbiAgICBzdGFnZ2VyVHdlZW4uc3RhcnQoKTtcblxuICAgIHJldHVybiBzdGFnZ2VyVHdlZW47XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5OeVl5OXBibU12YzNSaFoyZGxjaTVxY3lKZExDSnVZVzFsY3lJNlcxMHNJbTFoY0hCcGJtZHpJam9pT3pzN2EwSkJUWGRDTEU5QlFVODdPenM3T3pzN096czdPenM3TzBGQlJpOUNMRWxCUVUwc1owSkJRV2RDTEVkQlFVY3NSMEZCUnl4RFFVRkRPenRCUVVWa0xGTkJRVk1zVDBGQlR5eERRVUZETEV0QlFVc3NSVUZCUlN4UlFVRlJMRVZCUVVVc1MwRkJTeXhGUVVGRk8wRkJRM0JFTEZGQlFVMHNWMEZCVnl4SFFVRkhMRXRCUVVzc1EwRkJReXhOUVVGTkxFTkJRVU03UVVGRGFrTXNVVUZCVFN4bFFVRmxMRWRCUVVjc1YwRk9ia0lzUzBGQlN5eEZRVTF2UWl4TFFVRkxMRU5CUVVNc1EwRkJRenRCUVVOeVF5eFJRVUZOTEZGQlFWRXNSMEZCUnl4bFFVRmxMRWRCUVVjc1MwRkJTeXhIUVVGSExFdEJRVXNzUTBGQlF5eFJRVUZSTEVsQlFVa3NaMEpCUVdkQ0xFTkJRVU03UVVGRE9VVXNVVUZCU1N4VFFVRlRMRWRCUVVjc1EwRkJReXhEUVVGRExFTkJRVU03TzBGQlJXNUNMRkZCUVUwc1dVRkJXU3hIUVVGSExHOUNRVUZWTzBGQlF6TkNMR2RDUVVGUkxFVkJRVVVzVVVGQlVTeEhRVUZITEZkQlFWYzdRVUZEYUVNc1kwRkJUU3hGUVVGRk8wRkJRMG9zWVVGQlF5eEZRVUZGTzBGQlEwTXNiMEpCUVVrc1JVRkJSU3hEUVVGRE8wRkJRMUFzYTBKQlFVVXNSVUZCUlN4WFFVRlhMRWRCUVVjc1EwRkJRenRCUVVOdVFpeHhRa0ZCU3l4RlFVRkZMRWxCUVVrN1FVRkRXQ3h2UWtGQlNTeEZRVUZGTEdWQlFXVXNSMEZCUnl4MVFrRkJUeXhOUVVGTkxFZEJRVWNzUzBGQlN5eERRVUZETEVsQlFVa3NTVUZCU1N4MVFrRkJUeXhOUVVGTk8yRkJRM1JGTzFOQlEwbzdRVUZEUkN4blFrRkJVU3hGUVVGRkxGVkJRVU1zUzBGQlN5eEZRVUZMTzBGQlEycENMR2RDUVVGTkxFTkJRVU1zUjBGQlJ5eExRVUZMTEVOQlFVTXNTMEZCU3l4RFFVRkRMRU5CUVVNc1EwRkJRenRCUVVONFFpeG5Ra0ZCU1N4UlFVRlJMRWRCUVVjc1UwRkJVeXhIUVVGSExFTkJRVU1zUTBGQlF6czdRVUZGTjBJc2JVSkJRVThzVVVGQlVTeEpRVUZKTEVOQlFVTXNSVUZCUlN4UlFVRlJMRVZCUVVVc1JVRkJSVHRCUVVNNVFpeDNRa0ZCVVN4RFFVRkRMRXRCUVVzc1EwRkJReXhSUVVGUkxFTkJRVU1zUlVGQlJTeFJRVUZSTEVOQlFVTXNRMEZCUXp0aFFVTjJRenM3UVVGRlJDeHhRa0ZCVXl4SFFVRkhMRU5CUVVNc1EwRkJRenRUUVVOcVFqdEJRVU5FTEd0Q1FVRlZMRVZCUVVVc1pVRkJaU3hIUVVGSExGTkJRVk1zUjBGQlJ5eExRVUZMTEVOQlFVTXNWVUZCVlR0TFFVTTNSQ3hEUVVGRExFTkJRVU03TzBGQlJVZ3NaMEpCUVZrc1EwRkJReXhMUVVGTExFVkJRVVVzUTBGQlF6czdRVUZGY2tJc1YwRkJUeXhaUVVGWkxFTkJRVU03UTBGRGRrSWlMQ0ptYVd4bElqb2ljM1JoWjJkbGNpNXFjeUlzSW5OdmRYSmpaVkp2YjNRaU9pSXZWWE5sY25NdlRXRjBkRkJsY25KNUwxTnBkR1Z6TDNCdmNHMXZkR2x2YmlJc0luTnZkWEpqWlhORGIyNTBaVzUwSWpwYkltbHRjRzl5ZENCVWQyVmxiaUJtY205dElDY3VMaTloWTNScGIyNXpMMVIzWldWdUp6dGNibWx0Y0c5eWRDQmxZWE5wYm1jZ1puSnZiU0FuTGk0dllXTjBhVzl1Y3k5bFlYTnBibWN2Y0hKbGMyVjBMV1ZoYzJsdVp5YzdYRzVwYlhCdmNuUWdleUJwYzA1MWJTQjlJR1p5YjIwZ0p5NHZkWFJwYkhNbk8xeHVYRzVqYjI1emRDQkVSVVpCVlV4VVgwbE9WRVZTVmtGTUlEMGdNVEF3TzF4dVhHNWxlSEJ2Y25RZ1pHVm1ZWFZzZENCbWRXNWpkR2x2YmlCemRHRm5aMlZ5S0dGeWNtRjVMQ0JqWVd4c1ltRmpheXdnY0hKdmNITXBJSHRjYmlBZ0lDQmpiMjV6ZENCaGNuSmhlVXhsYm1kMGFDQTlJR0Z5Y21GNUxteGxibWQwYUR0Y2JpQWdJQ0JqYjI1emRDQndjbTl3YzBselNXNTBaWEoyWVd3Z1BTQnBjMDUxYlNod2NtOXdjeWs3WEc0Z0lDQWdZMjl1YzNRZ2FXNTBaWEoyWVd3Z1BTQndjbTl3YzBselNXNTBaWEoyWVd3Z1B5QndjbTl3Y3lBNklIQnliM0J6TG1sdWRHVnlkbUZzSUh4OElFUkZSa0ZWVEZSZlNVNVVSVkpXUVV3N1hHNGdJQ0FnYkdWMElIQnlaWFpKYm1SbGVDQTlJQzB4TzF4dVhHNGdJQ0FnWTI5dWMzUWdjM1JoWjJkbGNsUjNaV1Z1SUQwZ2JtVjNJRlIzWldWdUtIdGNiaUFnSUNBZ0lDQWdaSFZ5WVhScGIyNDZJR2x1ZEdWeWRtRnNJQ29nWVhKeVlYbE1aVzVuZEdnc1hHNGdJQ0FnSUNBZ0lIWmhiSFZsY3pvZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnYVRvZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lHWnliMjA2SURBc1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2RHODZJR0Z5Y21GNVRHVnVaM1JvSUMwZ01TeGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQnliM1Z1WkRvZ2RISjFaU3hjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0JsWVhObE9pQndjbTl3YzBselNXNTBaWEoyWVd3Z1B5QmxZWE5wYm1jdWJHbHVaV0Z5SURvZ2NISnZjSE11WldGelpTQjhmQ0JsWVhOcGJtY3ViR2x1WldGeVhHNGdJQ0FnSUNBZ0lDQWdJQ0I5WEc0Z0lDQWdJQ0FnSUgwc1hHNGdJQ0FnSUNBZ0lHOXVVbVZ1WkdWeU9pQW9kSGRsWlc0cElEMCtJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lHTnZibk4wSUdrZ1BTQjBkMlZsYmk1emRHRjBaUzVwTzF4dUlDQWdJQ0FnSUNBZ0lDQWdiR1YwSUdkaGNFbHVaR1Y0SUQwZ2NISmxka2x1WkdWNElDc2dNVHRjYmx4dUlDQWdJQ0FnSUNBZ0lDQWdabTl5SUNnN0lHZGhjRWx1WkdWNElEdzlJR2s3SUdkaGNFbHVaR1Y0S3lzcElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQmpZV3hzWW1GamF5aGhjbkpoZVZ0bllYQkpibVJsZUYwc0lHZGhjRWx1WkdWNEtUdGNiaUFnSUNBZ0lDQWdJQ0FnSUgxY2JseHVJQ0FnSUNBZ0lDQWdJQ0FnY0hKbGRrbHVaR1Y0SUQwZ2FUdGNiaUFnSUNBZ0lDQWdmU3hjYmlBZ0lDQWdJQ0FnYjI1RGIyMXdiR1YwWlRvZ2NISnZjSE5KYzBsdWRHVnlkbUZzSUQ4Z2RXNWtaV1pwYm1Wa0lEb2djSEp2Y0hNdWIyNURiMjF3YkdWMFpWeHVJQ0FnSUgwcE8xeHVYRzRnSUNBZ2MzUmhaMmRsY2xSM1pXVnVMbk4wWVhKMEtDazdYRzVjYmlBZ0lDQnlaWFIxY200Z2MzUmhaMmRsY2xSM1pXVnVPMXh1ZlNKZGZRPT1cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2luYy9zdGFnZ2VyLmpzXG4gKiogbW9kdWxlIGlkID0gMTFcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxudmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHMuZGVmYXVsdCA9IHRpbWVsaW5lO1xuXG52YXIgX1R3ZWVuID0gcmVxdWlyZSgnLi4vYWN0aW9ucy9Ud2VlbicpO1xuXG52YXIgX1R3ZWVuMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX1R3ZWVuKTtcblxudmFyIF9wcmVzZXRFYXNpbmcgPSByZXF1aXJlKCcuLi9hY3Rpb25zL2Vhc2luZy9wcmVzZXQtZWFzaW5nJyk7XG5cbnZhciBfcHJlc2V0RWFzaW5nMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3ByZXNldEVhc2luZyk7XG5cbnZhciBfY2FsYyA9IHJlcXVpcmUoJy4vY2FsYycpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG4vKlxuICAgIEBwYXJhbSBbYXJyYXldXG4gICAgICAgIFNlcXVlbnRpYWwgYXJyYXkgb2YgdHdlZW5zLCBlYWNoIGl0ZW0gY2FuIGJlIGEgdHdlZW4gb3IgZGVmaW5pdGlvbiBvYmo6XG5cbiAgICAgICAgW1xuICAgICAgICAgICAgbmV3IFR3ZWVuKCksXG4gICAgICAgICAgICBzdGFnZ2VyKCksXG4gICAgICAgICAgICB0aW1lbGluZSgpLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHR3ZWVuOiBuZXcgVHdlZW4oKSxcbiAgICAgICAgICAgICAgICBhdDogMTAwLFxuICAgICAgICAgICAgICAgIG9mZnNldDogXCIrPTEwMFwiXG4gICAgICAgICAgICB9XG4gICAgICAgIF1cbiovXG52YXIgYW5hbHl6ZSA9IGZ1bmN0aW9uIChkZWZzKSB7XG4gICAgdmFyIHRpbWVsaW5lID0gW107XG4gICAgdmFyIG51bURlZnMgPSBkZWZzLmxlbmd0aDtcbiAgICB2YXIgY3VycmVudFBsYXloZWFkID0gMDtcblxuICAgIHZhciBfbG9vcCA9IGZ1bmN0aW9uIChpKSB7XG4gICAgICAgIHZhciBkZWYgPSBkZWZzW2ldO1xuICAgICAgICB2YXIgZGVmSXNPYmogPSBkZWYudHdlZW4gPyB0cnVlIDogZmFsc2U7XG4gICAgICAgIHZhciB0d2VlbiA9IGRlZklzT2JqID8gZGVmLnR3ZWVuIDogZGVmO1xuXG4gICAgICAgIGN1cnJlbnRQbGF5aGVhZCArPSBkZWZJc09iaiAmJiBkZWYub2Zmc2V0ID8gZGVmLmF0IHx8ICgwLCBfY2FsYy5yZWxhdGl2ZVZhbHVlKShjdXJyZW50UGxheWhlYWQsIGRlZi5vZmZzZXQpIDogMDtcblxuICAgICAgICB2YXIgZHVyYXRpb24gPSAwO1xuICAgICAgICBmb3IgKHZhciBrZXkgaW4gdHdlZW4udmFsdWVzKSB7XG4gICAgICAgICAgICBpZiAodHdlZW4udmFsdWVzLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICAgICAgICB2YXIgdmFsdWUgPSB0d2Vlbi52YWx1ZXNba2V5XTtcbiAgICAgICAgICAgICAgICBkdXJhdGlvbiA9IE1hdGgubWF4KGR1cmF0aW9uLCB2YWx1ZS5kdXJhdGlvbik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB0aW1lbGluZS5wdXNoKHtcbiAgICAgICAgICAgIGZyb206IGN1cnJlbnRQbGF5aGVhZCxcbiAgICAgICAgICAgIGR1cmF0aW9uOiBkdXJhdGlvbixcbiAgICAgICAgICAgIGZpcmU6IGZ1bmN0aW9uICh0aW1lKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHR3ZWVuLnNlZWtUaW1lKHRpbWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICBjdXJyZW50UGxheWhlYWQgKz0gdHdlZW4uZHVyYXRpb247XG4gICAgfTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbnVtRGVmczsgaSsrKSB7XG4gICAgICAgIF9sb29wKGkpO1xuICAgIH1cblxuICAgIHJldHVybiB7IHRvdGFsVGltZTogY3VycmVudFBsYXloZWFkLCB0aW1lbGluZTogdGltZWxpbmUgfTtcbn07XG5cbnZhciBzZXRUd2VlbnMgPSBmdW5jdGlvbiAoX3JlZikge1xuICAgIHZhciBlbGFwc2VkID0gX3JlZi5lbGFwc2VkO1xuICAgIHZhciB0aW1lbGluZSA9IF9yZWYudGltZWxpbmU7XG4gICAgdmFyIHRpbWVsaW5lTGVuZ3RoID0gX3JlZi50aW1lbGluZUxlbmd0aDtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGltZWxpbmVMZW5ndGg7IGkrKykge1xuICAgICAgICB2YXIgX3R3ZWVuID0gdGltZWxpbmVbaV07XG4gICAgICAgIHZhciB0d2VlblRpbWUgPSBlbGFwc2VkIC0gX3R3ZWVuLmZyb207XG5cbiAgICAgICAgaWYgKHR3ZWVuVGltZSA+IDAgJiYgdHdlZW5UaW1lIDwgX3R3ZWVuLmR1cmF0aW9uKSB7XG4gICAgICAgICAgICBfdHdlZW4uZmlyZSh0d2VlblRpbWUpO1xuICAgICAgICB9XG4gICAgfVxufTtcblxuZnVuY3Rpb24gdGltZWxpbmUoZGVmKSB7XG4gICAgdmFyIHByb3BzID0gYXJndW1lbnRzLmxlbmd0aCA8PSAxIHx8IGFyZ3VtZW50c1sxXSA9PT0gdW5kZWZpbmVkID8ge30gOiBhcmd1bWVudHNbMV07XG5cbiAgICB2YXIgX2FuYWx5emUgPSBhbmFseXplKGRlZik7XG5cbiAgICB2YXIgdG90YWxUaW1lID0gX2FuYWx5emUudG90YWxUaW1lO1xuICAgIHZhciB0aW1lbGluZSA9IF9hbmFseXplLnRpbWVsaW5lO1xuXG4gICAgcmV0dXJuIG5ldyBfVHdlZW4yLmRlZmF1bHQoX2V4dGVuZHMoe30sIHByb3BzLCB7XG4gICAgICAgIGR1cmF0aW9uOiB0b3RhbFRpbWUsXG4gICAgICAgIGVhc2U6IF9wcmVzZXRFYXNpbmcyLmRlZmF1bHQubGluZWFyLFxuICAgICAgICB2YWx1ZXM6IHtcbiAgICAgICAgICAgIHA6IDFcbiAgICAgICAgfSxcbiAgICAgICAgdGltZWxpbmU6IHRpbWVsaW5lLFxuICAgICAgICB0aW1lbGluZUxlbmd0aDogdGltZWxpbmUubGVuZ3RoLFxuICAgICAgICBvblJlbmRlcjogc2V0VHdlZW5zXG4gICAgfSkpO1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluTnlZeTlwYm1NdmRHbHRaV3hwYm1VdWFuTWlYU3dpYm1GdFpYTWlPbHRkTENKdFlYQndhVzVuY3lJNklqczdPenM3YTBKQkswUjNRaXhSUVVGUk96czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096dEJRVFZEYUVNc1NVRkJUU3hQUVVGUExFZEJRVWNzVlVGQlF5eEpRVUZKTEVWQlFVczdRVUZEZEVJc1VVRkJUU3hSUVVGUkxFZEJRVWNzUlVGQlJTeERRVUZETzBGQlEzQkNMRkZCUVUwc1QwRkJUeXhIUVVGSExFbEJRVWtzUTBGQlF5eE5RVUZOTEVOQlFVTTdRVUZETlVJc1VVRkJTU3hsUVVGbExFZEJRVWNzUTBGQlF5eERRVUZET3pzd1FrRkZaaXhEUVVGRE8wRkJRMDRzV1VGQlRTeEhRVUZITEVkQlFVY3NTVUZCU1N4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRE8wRkJRM0JDTEZsQlFVMHNVVUZCVVN4SFFVRkhMRWRCUVVjc1EwRkJReXhMUVVGTExFZEJRVWNzU1VGQlNTeEhRVUZITEV0QlFVc3NRMEZCUXp0QlFVTXhReXhaUVVGTkxFdEJRVXNzUjBGQlJ5eEJRVUZETEZGQlFWRXNSMEZCU1N4SFFVRkhMRU5CUVVNc1MwRkJTeXhIUVVGSExFZEJRVWNzUTBGQlF6czdRVUZGTTBNc2RVSkJRV1VzU1VGQlN5eEJRVUZETEZGQlFWRXNTVUZCU1N4SFFVRkhMRU5CUVVNc1RVRkJUU3hIUVVOMlF5eEhRVUZITEVOQlFVTXNSVUZCUlN4SlFVRkpMRlZCTlVKaUxHRkJRV0VzUlVFMFFtTXNaVUZCWlN4RlFVRkZMRWRCUVVjc1EwRkJReXhOUVVGTkxFTkJRVU1zUjBGQlJ5eERRVUZETEVGQlFVTXNRMEZCUXpzN1FVRkZPVVFzV1VGQlNTeFJRVUZSTEVkQlFVY3NRMEZCUXl4RFFVRkRPMEZCUTJwQ0xHRkJRVXNzU1VGQlNTeEhRVUZITEVsQlFVa3NTMEZCU3l4RFFVRkRMRTFCUVUwc1JVRkJSVHRCUVVNeFFpeG5Ra0ZCU1N4TFFVRkxMRU5CUVVNc1RVRkJUU3hEUVVGRExHTkJRV01zUTBGQlF5eEhRVUZITEVOQlFVTXNSVUZCUlR0QlFVTnNReXh2UWtGQlRTeExRVUZMTEVkQlFVY3NTMEZCU3l4RFFVRkRMRTFCUVUwc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF6dEJRVU5vUXl4M1FrRkJVU3hIUVVGSExFbEJRVWtzUTBGQlF5eEhRVUZITEVOQlFVTXNVVUZCVVN4RlFVRkZMRXRCUVVzc1EwRkJReXhSUVVGUkxFTkJRVU1zUTBGQlF6dGhRVU5xUkR0VFFVTktPenRCUVVWRUxHZENRVUZSTEVOQlFVTXNTVUZCU1N4RFFVRkRPMEZCUTFZc1owSkJRVWtzUlVGQlJTeGxRVUZsTzBGQlEzSkNMRzlDUVVGUkxFVkJRVVVzVVVGQlVUdEJRVU5zUWl4blFrRkJTU3hGUVVGRkxGVkJRVU1zU1VGQlNUdDFRa0ZCU3l4TFFVRkxMRU5CUVVNc1VVRkJVU3hEUVVGRExFbEJRVWtzUTBGQlF6dGhRVUZCTzFOQlEzWkRMRU5CUVVNc1EwRkJRenM3UVVGRlNDeDFRa0ZCWlN4SlFVRkpMRXRCUVVzc1EwRkJReXhSUVVGUkxFTkJRVU03T3p0QlFYUkNkRU1zVTBGQlN5eEpRVUZKTEVOQlFVTXNSMEZCUnl4RFFVRkRMRVZCUVVVc1EwRkJReXhIUVVGSExFOUJRVThzUlVGQlJTeERRVUZETEVWQlFVVXNSVUZCUlR0alFVRjZRaXhEUVVGRE8wdEJkVUpVT3p0QlFVVkVMRmRCUVU4c1JVRkJSU3hUUVVGVExFVkJRVVVzWlVGQlpTeEZRVUZGTEZGQlFWRXNSVUZCVWl4UlFVRlJMRVZCUVVVc1EwRkJRenREUVVOdVJDeERRVUZET3p0QlFVVkdMRWxCUVUwc1UwRkJVeXhIUVVGSExHZENRVUV5UXp0UlFVRjRReXhQUVVGUExGRkJRVkFzVDBGQlR6dFJRVUZGTEZGQlFWRXNVVUZCVWl4UlFVRlJPMUZCUVVVc1kwRkJZeXhSUVVGa0xHTkJRV003TzBGQlEyeEVMRk5CUVVzc1NVRkJTU3hEUVVGRExFZEJRVWNzUTBGQlF5eEZRVUZGTEVOQlFVTXNSMEZCUnl4alFVRmpMRVZCUVVVc1EwRkJReXhGUVVGRkxFVkJRVVU3UVVGRGNrTXNXVUZCVFN4TlFVRkxMRWRCUVVjc1VVRkJVU3hEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETzBGQlF6RkNMRmxCUVUwc1UwRkJVeXhIUVVGSExFOUJRVThzUjBGQlJ5eE5RVUZMTEVOQlFVTXNTVUZCU1N4RFFVRkRPenRCUVVWMlF5eFpRVUZKTEZOQlFWTXNSMEZCUnl4RFFVRkRMRWxCUVVrc1UwRkJVeXhIUVVGSExFMUJRVXNzUTBGQlF5eFJRVUZSTEVWQlFVVTdRVUZETjBNc2EwSkJRVXNzUTBGQlF5eEpRVUZKTEVOQlFVTXNVMEZCVXl4RFFVRkRMRU5CUVVNN1UwRkRla0k3UzBGRFNqdERRVU5LTEVOQlFVTTdPMEZCUldFc1UwRkJVeXhSUVVGUkxFTkJRVU1zUjBGQlJ5eEZRVUZqTzFGQlFWb3NTMEZCU3l4NVJFRkJSeXhGUVVGRk96dHRRa0ZEV2l4UFFVRlBMRU5CUVVNc1IwRkJSeXhEUVVGRE96dFJRVUZ3UXl4VFFVRlRMRmxCUVZRc1UwRkJVenRSUVVGRkxGRkJRVkVzV1VGQlVpeFJRVUZST3p0QlFVVXpRaXhYUVVGUExHbERRVU5CTEV0QlFVczdRVUZEVWl4blFrRkJVU3hGUVVGRkxGTkJRVk03UVVGRGJrSXNXVUZCU1N4RlFVRkZMSFZDUVVGUExFMUJRVTA3UVVGRGJrSXNZMEZCVFN4RlFVRkZPMEZCUTBvc1lVRkJReXhGUVVGRkxFTkJRVU03VTBGRFVEdEJRVU5FTEdkQ1FVRlJMRVZCUVVVc1VVRkJVVHRCUVVOc1FpeHpRa0ZCWXl4RlFVRkZMRkZCUVZFc1EwRkJReXhOUVVGTk8wRkJReTlDTEdkQ1FVRlJMRVZCUVVVc1UwRkJVenRQUVVOeVFpeERRVUZETzBOQlEwNGlMQ0ptYVd4bElqb2lkR2x0Wld4cGJtVXVhbk1pTENKemIzVnlZMlZTYjI5MElqb2lMMVZ6WlhKekwwMWhkSFJRWlhKeWVTOVRhWFJsY3k5d2IzQnRiM1JwYjI0aUxDSnpiM1Z5WTJWelEyOXVkR1Z1ZENJNld5SnBiWEJ2Y25RZ1ZIZGxaVzRnWm5KdmJTQW5MaTR2WVdOMGFXOXVjeTlVZDJWbGJpYzdYRzVwYlhCdmNuUWdaV0Z6YVc1bklHWnliMjBnSnk0dUwyRmpkR2x2Ym5NdlpXRnphVzVuTDNCeVpYTmxkQzFsWVhOcGJtY25PMXh1YVcxd2IzSjBJSHNnY21Wc1lYUnBkbVZXWVd4MVpTQjlJR1p5YjIwZ0p5NHZZMkZzWXljN1hHNWNiaThxWEc0Z0lDQWdRSEJoY21GdElGdGhjbkpoZVYxY2JpQWdJQ0FnSUNBZ1UyVnhkV1Z1ZEdsaGJDQmhjbkpoZVNCdlppQjBkMlZsYm5Nc0lHVmhZMmdnYVhSbGJTQmpZVzRnWW1VZ1lTQjBkMlZsYmlCdmNpQmtaV1pwYm1sMGFXOXVJRzlpYWpwY2JseHVJQ0FnSUNBZ0lDQmJYRzRnSUNBZ0lDQWdJQ0FnSUNCdVpYY2dWSGRsWlc0b0tTeGNiaUFnSUNBZ0lDQWdJQ0FnSUhOMFlXZG5aWElvS1N4Y2JpQWdJQ0FnSUNBZ0lDQWdJSFJwYldWc2FXNWxLQ2tzWEc0Z0lDQWdJQ0FnSUNBZ0lDQjdYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdkSGRsWlc0NklHNWxkeUJVZDJWbGJpZ3BMRnh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJR0YwT2lBeE1EQXNYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdiMlptYzJWME9pQmNJaXM5TVRBd1hDSmNiaUFnSUNBZ0lDQWdJQ0FnSUgxY2JpQWdJQ0FnSUNBZ1hWeHVLaTljYm1OdmJuTjBJR0Z1WVd4NWVtVWdQU0FvWkdWbWN5a2dQVDRnZTF4dUlDQWdJR052Ym5OMElIUnBiV1ZzYVc1bElEMGdXMTA3WEc0Z0lDQWdZMjl1YzNRZ2JuVnRSR1ZtY3lBOUlHUmxabk11YkdWdVozUm9PMXh1SUNBZ0lHeGxkQ0JqZFhKeVpXNTBVR3hoZVdobFlXUWdQU0F3TzF4dVhHNGdJQ0FnWm05eUlDaHNaWFFnYVNBOUlEQTdJR2tnUENCdWRXMUVaV1p6T3lCcEt5c3BJSHRjYmlBZ0lDQWdJQ0FnWTI5dWMzUWdaR1ZtSUQwZ1pHVm1jMXRwWFR0Y2JpQWdJQ0FnSUNBZ1kyOXVjM1FnWkdWbVNYTlBZbW9nUFNCa1pXWXVkSGRsWlc0Z1B5QjBjblZsSURvZ1ptRnNjMlU3WEc0Z0lDQWdJQ0FnSUdOdmJuTjBJSFIzWldWdUlEMGdLR1JsWmtselQySnFLU0EvSUdSbFppNTBkMlZsYmlBNklHUmxaanRjYmx4dUlDQWdJQ0FnSUNCamRYSnlaVzUwVUd4aGVXaGxZV1FnS3owZ0tDaGtaV1pKYzA5aWFpQW1KaUJrWldZdWIyWm1jMlYwS1NBL1hHNGdJQ0FnSUNBZ0lDQWdJQ0JrWldZdVlYUWdmSHdnY21Wc1lYUnBkbVZXWVd4MVpTaGpkWEp5Wlc1MFVHeGhlV2hsWVdRc0lHUmxaaTV2Wm1aelpYUXBJRG9nTUNrN1hHNWNiaUFnSUNBZ0lDQWdiR1YwSUdSMWNtRjBhVzl1SUQwZ01EdGNiaUFnSUNBZ0lDQWdabTl5SUNoc1pYUWdhMlY1SUdsdUlIUjNaV1Z1TG5aaGJIVmxjeWtnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdhV1lnS0hSM1pXVnVMblpoYkhWbGN5NW9ZWE5QZDI1UWNtOXdaWEowZVNoclpYa3BLU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnWTI5dWMzUWdkbUZzZFdVZ1BTQjBkMlZsYmk1MllXeDFaWE5iYTJWNVhUdGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQmtkWEpoZEdsdmJpQTlJRTFoZEdndWJXRjRLR1IxY21GMGFXOXVMQ0IyWVd4MVpTNWtkWEpoZEdsdmJpazdYRzRnSUNBZ0lDQWdJQ0FnSUNCOVhHNGdJQ0FnSUNBZ0lIMWNibHh1SUNBZ0lDQWdJQ0IwYVcxbGJHbHVaUzV3ZFhOb0tIdGNiaUFnSUNBZ0lDQWdJQ0FnSUdaeWIyMDZJR04xY25KbGJuUlFiR0Y1YUdWaFpDeGNiaUFnSUNBZ0lDQWdJQ0FnSUdSMWNtRjBhVzl1T2lCa2RYSmhkR2x2Yml4Y2JpQWdJQ0FnSUNBZ0lDQWdJR1pwY21VNklDaDBhVzFsS1NBOVBpQjBkMlZsYmk1elpXVnJWR2x0WlNoMGFXMWxLVnh1SUNBZ0lDQWdJQ0I5S1R0Y2JseHVJQ0FnSUNBZ0lDQmpkWEp5Wlc1MFVHeGhlV2hsWVdRZ0t6MGdkSGRsWlc0dVpIVnlZWFJwYjI0N1hHNGdJQ0FnZlZ4dVhHNGdJQ0FnY21WMGRYSnVJSHNnZEc5MFlXeFVhVzFsT2lCamRYSnlaVzUwVUd4aGVXaGxZV1FzSUhScGJXVnNhVzVsSUgwN1hHNTlPMXh1WEc1amIyNXpkQ0J6WlhSVWQyVmxibk1nUFNBb2V5QmxiR0Z3YzJWa0xDQjBhVzFsYkdsdVpTd2dkR2x0Wld4cGJtVk1aVzVuZEdnZ2ZTa2dQVDRnZTF4dUlDQWdJR1p2Y2lBb2JHVjBJR2tnUFNBd095QnBJRHdnZEdsdFpXeHBibVZNWlc1bmRHZzdJR2tyS3lrZ2UxeHVJQ0FnSUNBZ0lDQmpiMjV6ZENCMGQyVmxiaUE5SUhScGJXVnNhVzVsVzJsZE8xeHVJQ0FnSUNBZ0lDQmpiMjV6ZENCMGQyVmxibFJwYldVZ1BTQmxiR0Z3YzJWa0lDMGdkSGRsWlc0dVpuSnZiVHRjYmx4dUlDQWdJQ0FnSUNCcFppQW9kSGRsWlc1VWFXMWxJRDRnTUNBbUppQjBkMlZsYmxScGJXVWdQQ0IwZDJWbGJpNWtkWEpoZEdsdmJpa2dlMXh1SUNBZ0lDQWdJQ0FnSUNBZ2RIZGxaVzR1Wm1seVpTaDBkMlZsYmxScGJXVXBPMXh1SUNBZ0lDQWdJQ0I5WEc0Z0lDQWdmVnh1ZlR0Y2JseHVaWGh3YjNKMElHUmxabUYxYkhRZ1puVnVZM1JwYjI0Z2RHbHRaV3hwYm1Vb1pHVm1MQ0J3Y205d2N5QTlJSHQ5S1NCN1hHNGdJQ0FnWTI5dWMzUWdleUIwYjNSaGJGUnBiV1VzSUhScGJXVnNhVzVsSUgwZ1BTQmhibUZzZVhwbEtHUmxaaWs3WEc1Y2JpQWdJQ0J5WlhSMWNtNGdibVYzSUZSM1pXVnVLSHRjYmlBZ0lDQWdJQ0FnTGk0dWNISnZjSE1zWEc0Z0lDQWdJQ0FnSUdSMWNtRjBhVzl1T2lCMGIzUmhiRlJwYldVc1hHNGdJQ0FnSUNBZ0lHVmhjMlU2SUdWaGMybHVaeTVzYVc1bFlYSXNYRzRnSUNBZ0lDQWdJSFpoYkhWbGN6b2dlMXh1SUNBZ0lDQWdJQ0FnSUNBZ2NEb2dNVnh1SUNBZ0lDQWdJQ0I5TEZ4dUlDQWdJQ0FnSUNCMGFXMWxiR2x1WlRvZ2RHbHRaV3hwYm1Vc1hHNGdJQ0FnSUNBZ0lIUnBiV1ZzYVc1bFRHVnVaM1JvT2lCMGFXMWxiR2x1WlM1c1pXNW5kR2dzWEc0Z0lDQWdJQ0FnSUc5dVVtVnVaR1Z5T2lCelpYUlVkMlZsYm5OY2JpQWdJQ0I5S1R0Y2JuMGlYWDA9XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9pbmMvdGltZWxpbmUuanNcbiAqKiBtb2R1bGUgaWQgPSAxMlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbi8qXG4gICAgIyBBZGFwdGVyIGNsYXNzXG4gICAgIyMgUHJvdmlkZXMgYSBnZXR0ZXIvc2V0dGVyIHdyYXBwZXIgYW5kIHByb3BlcnR5IGNhY2hlIGZvciBkaWZmZXJlbnQgZWxlbWVudCB0eXBlc1xuXG4gICAgT3ZlcnJpZGUgYGdldHRlcmAgYW5kIGBzZXR0ZXJgIHRvIHJlaW1wbGVtZW50IHRoZSBpbnRlcmZhY2UgZm9yIG5ldyBlbGVtZW50IHR5cGVzLlxuXG4gICAgU2V0IGBFeHRlbmRlZC5wcm90b3R5cGUuc3RhdGVNYXBgIGFzIGFuIG9iamVjdCBrZXkvdmFsdWUgbWFwIHRvIHRyYW5zbGF0ZSBpbmNvbWluZyBrZXlzIHRvXG4gICAgQVBJLXNwZWNpZmljIGtleXMuIEZvciBpbnN0YW5jZSwgeyB4OiAndHJhbnNsYXRlWCcgfS4gXG5cbiAgICBTZXQgYEV4dGVuZGVkLnByb3RvdHlwZS52YWx1ZVR5cGVNYXBgIGFzIGFuIG9iamVjdCBrZXkvdmFsdWUgbWFwIHRvIHJldHVybiBhIHZhbHVlIHR5cGUgd2l0aFxuICAgIGBnZXRWYWx1ZVR5cGUoa2V5KWAgKGtleSB3aWxsIGJlIG1hcHBlZCBhY2NvcmRpbmcgdG8gYHN0YXRlTWFwYClcbiovXG5cbnZhciBBZGFwdGVyID0gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBBZGFwdGVyKGVsZW1lbnQpIHtcbiAgICAgICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIEFkYXB0ZXIpO1xuXG4gICAgICAgIHRoaXMuZWxlbWVudCA9IGVsZW1lbnQ7XG4gICAgICAgIHRoaXMuY2FjaGUgPSB7fTtcbiAgICAgICAgdGhpcy5pbnRlcm5hbENhY2hlID0ge307XG4gICAgfVxuXG4gICAgLypcbiAgICAgICAgR2V0IGVsZW1lbnQgcHJvcGVydHlcbiAgICAgICAgIEBwYXJhbSBbc3RyaW5nXTogS2V5IHRvIHJlYWRcbiAgICAgICAgQHBhcmFtIFtib29sZWFuXTogSWYgYHRydWVgLCB3aWxsIG92ZXJyaWRlIGNhY2hlZCBwcm9wZXJ0eVxuICAgICovXG5cbiAgICBBZGFwdGVyLnByb3RvdHlwZS5nZXQgPSBmdW5jdGlvbiBnZXQoa2V5LCByZWZyZXNoKSB7XG4gICAgICAgIHZhciBtYXBwZWRLZXkgPSB0aGlzLm1hcFN0YXRlS2V5KGtleSk7XG5cbiAgICAgICAgaWYgKHJlZnJlc2ggfHwgIXRoaXMuY2FjaGUuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY2FjaGVba2V5XSA9IHRoaXMuZ2V0dGVyKG1hcHBlZEtleSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jYWNoZVtrZXldO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIC8qXG4gICAgICAgIFNldCBlbGVtZW50IHByb3BlcnRpZXNcbiAgICAgICAgIEBwYXJhbSBbb2JqZWN0XTogS2V5L3ZhbHVlIHByb3BlcnRpZXMgdG8gc2V0XG4gICAgKi9cblxuICAgIEFkYXB0ZXIucHJvdG90eXBlLnNldCA9IGZ1bmN0aW9uIHNldChwcm9wcykge1xuICAgICAgICAvLyBUcmFuc2xhdGUgcHJvcHNcbiAgICAgICAgZm9yICh2YXIga2V5IGluIHByb3BzKSB7XG4gICAgICAgICAgICBpZiAocHJvcHMuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgICAgICAgIHZhciBtYXBwZWRLZXkgPSB0aGlzLm1hcFN0YXRlS2V5KGtleSk7XG4gICAgICAgICAgICAgICAgdGhpcy5jYWNoZVtrZXldID0gdGhpcy5pbnRlcm5hbENhY2hlW21hcHBlZEtleV0gPSBwcm9wc1trZXldO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuc2V0dGVyKHRoaXMuaW50ZXJuYWxDYWNoZSk7XG4gICAgfTtcblxuICAgIC8qXG4gICAgICAgIE92ZXJyaWRhYmxlIGVsZW1lbnQgZ2V0dGVyIC0gZGVmYXVsdCBmb3IgcGxhaW4gb2JqZWN0IFxuICAgICovXG5cbiAgICBBZGFwdGVyLnByb3RvdHlwZS5nZXR0ZXIgPSBmdW5jdGlvbiBnZXR0ZXIoa2V5KSB7XG4gICAgICAgIHJldHVybiB0aGlzLmVsZW1lbnRba2V5XTtcbiAgICB9O1xuXG4gICAgLypcbiAgICAgICAgT3ZlcnJpZGFibGUgZWxlbWVudCBzZXR0ZXIgLSBkZWZhdWx0IGZvciBwbGFpbiBvYmplY3RcbiAgICAqL1xuXG4gICAgQWRhcHRlci5wcm90b3R5cGUuc2V0dGVyID0gZnVuY3Rpb24gc2V0dGVyKHByb3BzKSB7XG4gICAgICAgIGZvciAodmFyIGtleSBpbiBwcm9wcykge1xuICAgICAgICAgICAgaWYgKHByb3BzLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmVsZW1lbnRba2V5XSA9IHByb3BzW2tleV07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgLypcbiAgICAgICAgTWFwIHN0YXRlIGtleSBhcyBwZXIgYHN0YXRlTWFwYCwgaWYgcHJlc2VudFxuICAgICAgICAgQHBhcmFtIFtzdHJpbmddOiBLZXkgdG8gbWFwXG4gICAgICAgIEByZXR1cm4gW3N0cmluZ106IE1hcHBlZCBrZXksIG9yIG9yaWdpbmFsIGtleSBpZiBub25lIGZvdW5kXG4gICAgKi9cblxuICAgIEFkYXB0ZXIucHJvdG90eXBlLm1hcFN0YXRlS2V5ID0gZnVuY3Rpb24gbWFwU3RhdGVLZXkoa2V5KSB7XG4gICAgICAgIHJldHVybiB0aGlzLnN0YXRlTWFwID8gdGhpcy5zdGF0ZU1hcFtrZXldIHx8IGtleSA6IGtleTtcbiAgICB9O1xuXG4gICAgLypcbiAgICAgICAgR2V0IHZhbHVlVHlwZSBvZiBwcm92aWRlZCBrZXlcbiAgICAgICAgIEBwYXJhbSBbc3RyaW5nXTogTmFtZSBvZiBwcm9wZXJ0eSB0byBtYXBcbiAgICAgICAgQHJldHVybiBbdmFsdWVUeXBlXTogVmFsdWUgdHlwZSBvZiBwcm9wZXJ0eVxuICAgICovXG5cbiAgICBBZGFwdGVyLnByb3RvdHlwZS5nZXRWYWx1ZVR5cGUgPSBmdW5jdGlvbiBnZXRWYWx1ZVR5cGUoa2V5KSB7XG4gICAgICAgIHJldHVybiB0aGlzLnZhbHVlVHlwZU1hcCA/IHRoaXMudmFsdWVUeXBlTWFwW3RoaXMubWFwU3RhdGVLZXkoa2V5KV0gOiBmYWxzZTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIEFkYXB0ZXI7XG59KSgpO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbiAoZWxlbWVudCkge1xuICAgIHJldHVybiBuZXcgQWRhcHRlcihlbGVtZW50KTtcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5OeVl5OWhaR0Z3ZEdWeUwyRmtZWEIwWlhJdWFuTWlYU3dpYm1GdFpYTWlPbHRkTENKdFlYQndhVzVuY3lJNklqczdPenM3T3pzN096czdPenM3T3pzN096dEpRVmxOTEU5QlFVODdRVUZEVkN4aFFVUkZMRTlCUVU4c1EwRkRSeXhQUVVGUExFVkJRVVU3T0VKQlJHNUNMRTlCUVU4N08wRkJSVXdzV1VGQlNTeERRVUZETEU5QlFVOHNSMEZCUnl4UFFVRlBMRU5CUVVNN1FVRkRka0lzV1VGQlNTeERRVUZETEV0QlFVc3NSMEZCUnl4RlFVRkZMRU5CUVVNN1FVRkRhRUlzV1VGQlNTeERRVUZETEdGQlFXRXNSMEZCUnl4RlFVRkZMRU5CUVVNN1MwRkRNMEk3T3pzN096czdRVUZCUVR0QlFVeERMRmRCUVU4c1YwRmhWQ3hIUVVGSExHZENRVUZETEVkQlFVY3NSVUZCUlN4UFFVRlBMRVZCUVVVN1FVRkRaQ3haUVVGTkxGTkJRVk1zUjBGQlJ5eEpRVUZKTEVOQlFVTXNWMEZCVnl4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRE96dEJRVVY0UXl4WlFVRkpMRTlCUVU4c1NVRkJTU3hEUVVGRExFbEJRVWtzUTBGQlF5eExRVUZMTEVOQlFVTXNZMEZCWXl4RFFVRkRMRWRCUVVjc1EwRkJReXhGUVVGRk8wRkJRelZETEcxQ1FVRlBMRWxCUVVrc1EwRkJReXhMUVVGTExFTkJRVU1zUjBGQlJ5eERRVUZETEVkQlFVY3NTVUZCU1N4RFFVRkRMRTFCUVUwc1EwRkJReXhUUVVGVExFTkJRVU1zUTBGQlF6dFRRVU51UkN4TlFVRk5PMEZCUTBnc2JVSkJRVThzU1VGQlNTeERRVUZETEV0QlFVc3NRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJRenRUUVVNeFFqdExRVU5LT3pzN096czdPMEZCY2tKRExGZEJRVThzVjBFMFFsUXNSMEZCUnl4blFrRkJReXhMUVVGTExFVkJRVVU3TzBGQlJWQXNZVUZCU3l4SlFVRkpMRWRCUVVjc1NVRkJTU3hMUVVGTExFVkJRVVU3UVVGRGJrSXNaMEpCUVVrc1MwRkJTeXhEUVVGRExHTkJRV01zUTBGQlF5eEhRVUZITEVOQlFVTXNSVUZCUlR0QlFVTXpRaXh2UWtGQlRTeFRRVUZUTEVkQlFVY3NTVUZCU1N4RFFVRkRMRmRCUVZjc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF6dEJRVU40UXl4dlFrRkJTU3hEUVVGRExFdEJRVXNzUTBGQlF5eEhRVUZITEVOQlFVTXNSMEZCUnl4SlFVRkpMRU5CUVVNc1lVRkJZU3hEUVVGRExGTkJRVk1zUTBGQlF5eEhRVUZITEV0QlFVc3NRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJRenRoUVVOb1JUdFRRVU5LT3p0QlFVVkVMR1ZCUVU4c1NVRkJTU3hEUVVGRExFMUJRVTBzUTBGQlF5eEpRVUZKTEVOQlFVTXNZVUZCWVN4RFFVRkRMRU5CUVVNN1MwRkRNVU03T3pzN096dEJRWFJEUXl4WFFVRlBMRmRCTWtOVUxFMUJRVTBzYlVKQlFVTXNSMEZCUnl4RlFVRkZPMEZCUTFJc1pVRkJUeXhKUVVGSkxFTkJRVU1zVDBGQlR5eERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRPMHRCUXpWQ096czdPenM3UVVFM1EwTXNWMEZCVHl4WFFXdEVWQ3hOUVVGTkxHMUNRVUZETEV0QlFVc3NSVUZCUlR0QlFVTldMR0ZCUVVzc1NVRkJTU3hIUVVGSExFbEJRVWtzUzBGQlN5eEZRVUZGTzBGQlEyNUNMR2RDUVVGSkxFdEJRVXNzUTBGQlF5eGpRVUZqTEVOQlFVTXNSMEZCUnl4RFFVRkRMRVZCUVVVN1FVRkRNMElzYjBKQlFVa3NRMEZCUXl4UFFVRlBMRU5CUVVNc1IwRkJSeXhEUVVGRExFZEJRVWNzUzBGQlN5eERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRPMkZCUTJ4RE8xTkJRMG83UzBGRFNqczdPenM3T3pzN1FVRjRSRU1zVjBGQlR5eFhRV2RGVkN4WFFVRlhMSGRDUVVGRExFZEJRVWNzUlVGQlJUdEJRVU5pTEdWQlFVOHNRVUZCUXl4SlFVRkpMRU5CUVVNc1VVRkJVU3hIUVVGSkxFbEJRVWtzUTBGQlF5eFJRVUZSTEVOQlFVTXNSMEZCUnl4RFFVRkRMRWxCUVVrc1IwRkJSeXhIUVVGSExFZEJRVWNzUTBGQlF6dExRVU0xUkRzN096czdPenM3UVVGc1JVTXNWMEZCVHl4WFFUQkZWQ3haUVVGWkxIbENRVUZETEVkQlFVY3NSVUZCUlR0QlFVTmtMR1ZCUVU4c1FVRkJReXhKUVVGSkxFTkJRVU1zV1VGQldTeEhRVUZKTEVsQlFVa3NRMEZCUXl4WlFVRlpMRU5CUVVNc1NVRkJTU3hEUVVGRExGZEJRVmNzUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXl4SFFVRkhMRXRCUVVzc1EwRkJRenRMUVVOcVJqczdWMEUxUlVNc1QwRkJUenM3TzJ0Q1FTdEZSU3hWUVVGRExFOUJRVTg3VjBGQlN5eEpRVUZKTEU5QlFVOHNRMEZCUXl4UFFVRlBMRU5CUVVNN1EwRkJRU0lzSW1acGJHVWlPaUpoWkdGd2RHVnlMbXB6SWl3aWMyOTFjbU5sVW05dmRDSTZJaTlWYzJWeWN5OU5ZWFIwVUdWeWNua3ZVMmwwWlhNdmNHOXdiVzkwYVc5dUlpd2ljMjkxY21ObGMwTnZiblJsYm5RaU9sc2lMeXBjYmlBZ0lDQWpJRUZrWVhCMFpYSWdZMnhoYzNOY2JpQWdJQ0FqSXlCUWNtOTJhV1JsY3lCaElHZGxkSFJsY2k5elpYUjBaWElnZDNKaGNIQmxjaUJoYm1RZ2NISnZjR1Z5ZEhrZ1kyRmphR1VnWm05eUlHUnBabVpsY21WdWRDQmxiR1Z0Wlc1MElIUjVjR1Z6WEc1Y2JpQWdJQ0JQZG1WeWNtbGtaU0JnWjJWMGRHVnlZQ0JoYm1RZ1lITmxkSFJsY21BZ2RHOGdjbVZwYlhCc1pXMWxiblFnZEdobElHbHVkR1Z5Wm1GalpTQm1iM0lnYm1WM0lHVnNaVzFsYm5RZ2RIbHdaWE11WEc1Y2JpQWdJQ0JUWlhRZ1lFVjRkR1Z1WkdWa0xuQnliM1J2ZEhsd1pTNXpkR0YwWlUxaGNHQWdZWE1nWVc0Z2IySnFaV04wSUd0bGVTOTJZV3gxWlNCdFlYQWdkRzhnZEhKaGJuTnNZWFJsSUdsdVkyOXRhVzVuSUd0bGVYTWdkRzljYmlBZ0lDQkJVRWt0YzNCbFkybG1hV01nYTJWNWN5NGdSbTl5SUdsdWMzUmhibU5sTENCN0lIZzZJQ2QwY21GdWMyeGhkR1ZZSnlCOUxpQmNibHh1SUNBZ0lGTmxkQ0JnUlhoMFpXNWtaV1F1Y0hKdmRHOTBlWEJsTG5aaGJIVmxWSGx3WlUxaGNHQWdZWE1nWVc0Z2IySnFaV04wSUd0bGVTOTJZV3gxWlNCdFlYQWdkRzhnY21WMGRYSnVJR0VnZG1Gc2RXVWdkSGx3WlNCM2FYUm9YRzRnSUNBZ1lHZGxkRlpoYkhWbFZIbHdaU2hyWlhrcFlDQW9hMlY1SUhkcGJHd2dZbVVnYldGd2NHVmtJR0ZqWTI5eVpHbHVaeUIwYnlCZ2MzUmhkR1ZOWVhCZ0tWeHVLaTljYm1Oc1lYTnpJRUZrWVhCMFpYSWdlMXh1SUNBZ0lHTnZibk4wY25WamRHOXlLR1ZzWlcxbGJuUXBJSHRjYmlBZ0lDQWdJQ0FnZEdocGN5NWxiR1Z0Wlc1MElEMGdaV3hsYldWdWREdGNiaUFnSUNBZ0lDQWdkR2hwY3k1allXTm9aU0E5SUh0OU8xeHVJQ0FnSUNBZ0lDQjBhR2x6TG1sdWRHVnlibUZzUTJGamFHVWdQU0I3ZlR0Y2JpQWdJQ0I5WEc1Y2JpQWdJQ0F2S2x4dUlDQWdJQ0FnSUNCSFpYUWdaV3hsYldWdWRDQndjbTl3WlhKMGVWeHVYRzRnSUNBZ0lDQWdJRUJ3WVhKaGJTQmJjM1J5YVc1blhUb2dTMlY1SUhSdklISmxZV1JjYmlBZ0lDQWdJQ0FnUUhCaGNtRnRJRnRpYjI5c1pXRnVYVG9nU1dZZ1lIUnlkV1ZnTENCM2FXeHNJRzkyWlhKeWFXUmxJR05oWTJobFpDQndjbTl3WlhKMGVWeHVJQ0FnSUNvdlhHNGdJQ0FnWjJWMEtHdGxlU3dnY21WbWNtVnphQ2tnZTF4dUlDQWdJQ0FnSUNCamIyNXpkQ0J0WVhCd1pXUkxaWGtnUFNCMGFHbHpMbTFoY0ZOMFlYUmxTMlY1S0d0bGVTazdYRzVjYmlBZ0lDQWdJQ0FnYVdZZ0tISmxabkpsYzJnZ2ZId2dJWFJvYVhNdVkyRmphR1V1YUdGelQzZHVVSEp2Y0dWeWRIa29hMlY1S1NrZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnY21WMGRYSnVJSFJvYVhNdVkyRmphR1ZiYTJWNVhTQTlJSFJvYVhNdVoyVjBkR1Z5S0cxaGNIQmxaRXRsZVNrN1hHNGdJQ0FnSUNBZ0lIMGdaV3h6WlNCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0J5WlhSMWNtNGdkR2hwY3k1allXTm9aVnRyWlhsZE8xeHVJQ0FnSUNBZ0lDQjlYRzRnSUNBZ2ZWeHVYRzRnSUNBZ0x5cGNiaUFnSUNBZ0lDQWdVMlYwSUdWc1pXMWxiblFnY0hKdmNHVnlkR2xsYzF4dVhHNGdJQ0FnSUNBZ0lFQndZWEpoYlNCYmIySnFaV04wWFRvZ1MyVjVMM1poYkhWbElIQnliM0JsY25ScFpYTWdkRzhnYzJWMFhHNGdJQ0FnS2k5Y2JpQWdJQ0J6WlhRb2NISnZjSE1wSUh0Y2JpQWdJQ0FnSUNBZ0x5OGdWSEpoYm5Oc1lYUmxJSEJ5YjNCelhHNGdJQ0FnSUNBZ0lHWnZjaUFvYkdWMElHdGxlU0JwYmlCd2NtOXdjeWtnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdhV1lnS0hCeWIzQnpMbWhoYzA5M2JsQnliM0JsY25SNUtHdGxlU2twSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCamIyNXpkQ0J0WVhCd1pXUkxaWGtnUFNCMGFHbHpMbTFoY0ZOMFlYUmxTMlY1S0d0bGVTazdYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdkR2hwY3k1allXTm9aVnRyWlhsZElEMGdkR2hwY3k1cGJuUmxjbTVoYkVOaFkyaGxXMjFoY0hCbFpFdGxlVjBnUFNCd2NtOXdjMXRyWlhsZE8xeHVJQ0FnSUNBZ0lDQWdJQ0FnZlZ4dUlDQWdJQ0FnSUNCOVhHNWNiaUFnSUNBZ0lDQWdjbVYwZFhKdUlIUm9hWE11YzJWMGRHVnlLSFJvYVhNdWFXNTBaWEp1WVd4RFlXTm9aU2s3WEc0Z0lDQWdmVnh1WEc0Z0lDQWdMeXBjYmlBZ0lDQWdJQ0FnVDNabGNuSnBaR0ZpYkdVZ1pXeGxiV1Z1ZENCblpYUjBaWElnTFNCa1pXWmhkV3gwSUdadmNpQndiR0ZwYmlCdlltcGxZM1FnWEc0Z0lDQWdLaTljYmlBZ0lDQm5aWFIwWlhJb2EyVjVLU0I3WEc0Z0lDQWdJQ0FnSUhKbGRIVnliaUIwYUdsekxtVnNaVzFsYm5SYmEyVjVYVHRjYmlBZ0lDQjlYRzVjYmlBZ0lDQXZLbHh1SUNBZ0lDQWdJQ0JQZG1WeWNtbGtZV0pzWlNCbGJHVnRaVzUwSUhObGRIUmxjaUF0SUdSbFptRjFiSFFnWm05eUlIQnNZV2x1SUc5aWFtVmpkRnh1SUNBZ0lDb3ZYRzRnSUNBZ2MyVjBkR1Z5S0hCeWIzQnpLU0I3WEc0Z0lDQWdJQ0FnSUdadmNpQW9iR1YwSUd0bGVTQnBiaUJ3Y205d2N5a2dlMXh1SUNBZ0lDQWdJQ0FnSUNBZ2FXWWdLSEJ5YjNCekxtaGhjMDkzYmxCeWIzQmxjblI1S0d0bGVTa3BJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0IwYUdsekxtVnNaVzFsYm5SYmEyVjVYU0E5SUhCeWIzQnpXMnRsZVYwN1hHNGdJQ0FnSUNBZ0lDQWdJQ0I5WEc0Z0lDQWdJQ0FnSUgxY2JpQWdJQ0I5WEc1Y2JpQWdJQ0F2S2x4dUlDQWdJQ0FnSUNCTllYQWdjM1JoZEdVZ2EyVjVJR0Z6SUhCbGNpQmdjM1JoZEdWTllYQmdMQ0JwWmlCd2NtVnpaVzUwWEc1Y2JpQWdJQ0FnSUNBZ1FIQmhjbUZ0SUZ0emRISnBibWRkT2lCTFpYa2dkRzhnYldGd1hHNGdJQ0FnSUNBZ0lFQnlaWFIxY200Z1czTjBjbWx1WjEwNklFMWhjSEJsWkNCclpYa3NJRzl5SUc5eWFXZHBibUZzSUd0bGVTQnBaaUJ1YjI1bElHWnZkVzVrWEc0Z0lDQWdLaTljYmlBZ0lDQnRZWEJUZEdGMFpVdGxlU2hyWlhrcElIdGNiaUFnSUNBZ0lDQWdjbVYwZFhKdUlDaDBhR2x6TG5OMFlYUmxUV0Z3S1NBL0lIUm9hWE11YzNSaGRHVk5ZWEJiYTJWNVhTQjhmQ0JyWlhrZ09pQnJaWGs3WEc0Z0lDQWdmVnh1WEc0Z0lDQWdMeXBjYmlBZ0lDQWdJQ0FnUjJWMElIWmhiSFZsVkhsd1pTQnZaaUJ3Y205MmFXUmxaQ0JyWlhsY2JseHVJQ0FnSUNBZ0lDQkFjR0Z5WVcwZ1czTjBjbWx1WjEwNklFNWhiV1VnYjJZZ2NISnZjR1Z5ZEhrZ2RHOGdiV0Z3WEc0Z0lDQWdJQ0FnSUVCeVpYUjFjbTRnVzNaaGJIVmxWSGx3WlYwNklGWmhiSFZsSUhSNWNHVWdiMllnY0hKdmNHVnlkSGxjYmlBZ0lDQXFMMXh1SUNBZ0lHZGxkRlpoYkhWbFZIbHdaU2hyWlhrcElIdGNiaUFnSUNBZ0lDQWdjbVYwZFhKdUlDaDBhR2x6TG5aaGJIVmxWSGx3WlUxaGNDa2dQeUIwYUdsekxuWmhiSFZsVkhsd1pVMWhjRnQwYUdsekxtMWhjRk4wWVhSbFMyVjVLR3RsZVNsZElEb2dabUZzYzJVN1hHNGdJQ0FnZlZ4dWZWeHVYRzVsZUhCdmNuUWdaR1ZtWVhWc2RDQW9aV3hsYldWdWRDa2dQVDRnYm1WM0lFRmtZWEIwWlhJb1pXeGxiV1Z1ZENrN0lsMTlcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2FkYXB0ZXIvYWRhcHRlci5qc1xuICoqIG1vZHVsZSBpZCA9IDEzXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzLmdldHRlciA9IGdldHRlcjtcbmV4cG9ydHMuc2V0dGVyID0gc2V0dGVyO1xuXG52YXIgX2FkYXB0ZXIgPSByZXF1aXJlKCcuL2FkYXB0ZXInKTtcblxudmFyIF9hZGFwdGVyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2FkYXB0ZXIpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBnZXR0ZXIoa2V5KSB7XG4gICAgcmV0dXJuIHRoaXMuZWxlbWVudC5nZXRBdHRyaWJ1dGUoa2V5KTtcbn1cblxuZnVuY3Rpb24gc2V0dGVyKHByb3BzKSB7XG4gICAgZm9yICh2YXIga2V5IGluIHByb3BzKSB7XG4gICAgICAgIGlmIChwcm9wcy5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgICB0aGlzLmVsZW1lbnQuc2V0QXR0cmlidXRlKGtleSwgcHJvcHNba2V5XSk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uIChlbGVtZW50KSB7XG4gICAgdmFyIGF0dHJBZGFwdGVyID0gKDAsIF9hZGFwdGVyMi5kZWZhdWx0KShlbGVtZW50KTtcblxuICAgIGF0dHJBZGFwdGVyLmdldHRlciA9IGdldHRlcjtcbiAgICBhdHRyQWRhcHRlci5zZXR0ZXIgPSBzZXR0ZXI7XG5cbiAgICByZXR1cm4gYXR0ckFkYXB0ZXI7XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluTnlZeTloWkdGd2RHVnlMMkYwZEhJdFlXUmhjSFJsY2k1cWN5SmRMQ0p1WVcxbGN5STZXMTBzSW0xaGNIQnBibWR6SWpvaU96czdVVUZGWjBJc1RVRkJUU3hIUVVGT0xFMUJRVTA3VVVGSlRpeE5RVUZOTEVkQlFVNHNUVUZCVFRzN096czdPenM3UVVGS1ppeFRRVUZUTEUxQlFVMHNRMEZCUXl4SFFVRkhMRVZCUVVVN1FVRkRlRUlzVjBGQlR5eEpRVUZKTEVOQlFVTXNUMEZCVHl4RFFVRkRMRmxCUVZrc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF6dERRVU42UXpzN1FVRkZUU3hUUVVGVExFMUJRVTBzUTBGQlF5eExRVUZMTEVWQlFVVTdRVUZETVVJc1UwRkJTeXhKUVVGSkxFZEJRVWNzU1VGQlNTeExRVUZMTEVWQlFVVTdRVUZEYmtJc1dVRkJTU3hMUVVGTExFTkJRVU1zWTBGQll5eERRVUZETEVkQlFVY3NRMEZCUXl4RlFVRkZPMEZCUXpOQ0xHZENRVUZKTEVOQlFVTXNUMEZCVHl4RFFVRkRMRmxCUVZrc1EwRkJReXhIUVVGSExFVkJRVVVzUzBGQlN5eERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRMRU5CUVVNN1UwRkRPVU03UzBGRFNqdERRVU5LT3p0clFrRkZZeXhWUVVGRExFOUJRVThzUlVGQlN6dEJRVU40UWl4UlFVRk5MRmRCUVZjc1IwRkJSeXgxUWtGQlVTeFBRVUZQTEVOQlFVTXNRMEZCUXpzN1FVRkZja01zWlVGQlZ5eERRVUZETEUxQlFVMHNSMEZCUnl4TlFVRk5MRU5CUVVNN1FVRkROVUlzWlVGQlZ5eERRVUZETEUxQlFVMHNSMEZCUnl4TlFVRk5MRU5CUVVNN08wRkJSVFZDTEZkQlFVOHNWMEZCVnl4RFFVRkRPME5CUTNSQ0lpd2labWxzWlNJNkltRjBkSEl0WVdSaGNIUmxjaTVxY3lJc0luTnZkWEpqWlZKdmIzUWlPaUl2VlhObGNuTXZUV0YwZEZCbGNuSjVMMU5wZEdWekwzQnZjRzF2ZEdsdmJpSXNJbk52ZFhKalpYTkRiMjUwWlc1MElqcGJJbWx0Y0c5eWRDQmhaR0Z3ZEdWeUlHWnliMjBnSnk0dllXUmhjSFJsY2ljN1hHNWNibVY0Y0c5eWRDQm1kVzVqZEdsdmJpQm5aWFIwWlhJb2EyVjVLU0I3WEc0Z0lDQWdjbVYwZFhKdUlIUm9hWE11Wld4bGJXVnVkQzVuWlhSQmRIUnlhV0oxZEdVb2EyVjVLVHRjYm4xY2JseHVaWGh3YjNKMElHWjFibU4wYVc5dUlITmxkSFJsY2lod2NtOXdjeWtnZTF4dUlDQWdJR1p2Y2lBb2JHVjBJR3RsZVNCcGJpQndjbTl3Y3lrZ2UxeHVJQ0FnSUNBZ0lDQnBaaUFvY0hKdmNITXVhR0Z6VDNkdVVISnZjR1Z5ZEhrb2EyVjVLU2tnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdkR2hwY3k1bGJHVnRaVzUwTG5ObGRFRjBkSEpwWW5WMFpTaHJaWGtzSUhCeWIzQnpXMnRsZVYwcE8xeHVJQ0FnSUNBZ0lDQjlYRzRnSUNBZ2ZWeHVmVnh1WEc1bGVIQnZjblFnWkdWbVlYVnNkQ0FvWld4bGJXVnVkQ2tnUFQ0Z2UxeHVJQ0FnSUdOdmJuTjBJR0YwZEhKQlpHRndkR1Z5SUQwZ1lXUmhjSFJsY2lobGJHVnRaVzUwS1R0Y2JseHVJQ0FnSUdGMGRISkJaR0Z3ZEdWeUxtZGxkSFJsY2lBOUlHZGxkSFJsY2p0Y2JpQWdJQ0JoZEhSeVFXUmhjSFJsY2k1elpYUjBaWElnUFNCelpYUjBaWEk3WEc1Y2JpQWdJQ0J5WlhSMWNtNGdZWFIwY2tGa1lYQjBaWEk3WEc1OU8xeHVJbDE5XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9hZGFwdGVyL2F0dHItYWRhcHRlci5qc1xuICoqIG1vZHVsZSBpZCA9IDE0XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfc3RhdGVNYXAgPSByZXF1aXJlKCcuL2Nzcy9zdGF0ZS1tYXAnKTtcblxudmFyIF9zdGF0ZU1hcDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9zdGF0ZU1hcCk7XG5cbnZhciBfdmFsdWVUeXBlTWFwID0gcmVxdWlyZSgnLi9jc3MvdmFsdWUtdHlwZS1tYXAnKTtcblxudmFyIF92YWx1ZVR5cGVNYXAyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfdmFsdWVUeXBlTWFwKTtcblxudmFyIF9idWlsZCA9IHJlcXVpcmUoJy4vY3NzL2J1aWxkJyk7XG5cbnZhciBfYnVpbGQyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfYnVpbGQpO1xuXG52YXIgX3ByZWZpeGVyID0gcmVxdWlyZSgnLi9jc3MvcHJlZml4ZXInKTtcblxudmFyIF9wcmVmaXhlcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9wcmVmaXhlcik7XG5cbnZhciBfdHJhbnNmb3JtUHJvcHMgPSByZXF1aXJlKCcuL2Nzcy90cmFuc2Zvcm0tcHJvcHMnKTtcblxudmFyIF90cmFuc2Zvcm1Qcm9wczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF90cmFuc2Zvcm1Qcm9wcyk7XG5cbnZhciBfYWRhcHRlciA9IHJlcXVpcmUoJy4vYWRhcHRlcicpO1xuXG52YXIgX2FkYXB0ZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfYWRhcHRlcik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIGdldHRlcihrZXkpIHtcbiAgICByZXR1cm4gIV90cmFuc2Zvcm1Qcm9wczIuZGVmYXVsdFtrZXldID8gd2luZG93LmdldENvbXB1dGVkU3R5bGUodGhpcy5lbGVtZW50LCBudWxsKVsoMCwgX3ByZWZpeGVyMi5kZWZhdWx0KShrZXkpXSA6IF92YWx1ZVR5cGVNYXAyLmRlZmF1bHRba2V5XS5kZWZhdWx0UHJvcHMuY3VycmVudCB8fCAwO1xufVxuXG5mdW5jdGlvbiBzZXR0ZXIocHJvcHMpIHtcbiAgICB0aGlzLmVsZW1lbnQuc3R5bGUuY3NzVGV4dCArPSAoMCwgX2J1aWxkMi5kZWZhdWx0KShwcm9wcyk7XG59XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uIChlbGVtZW50KSB7XG4gICAgdmFyIGNzc0FkYXB0ZXIgPSAoMCwgX2FkYXB0ZXIyLmRlZmF1bHQpKGVsZW1lbnQpO1xuICAgIGNzc0FkYXB0ZXIuc3RhdGVNYXAgPSBfc3RhdGVNYXAyLmRlZmF1bHQ7XG4gICAgY3NzQWRhcHRlci52YWx1ZVR5cGVNYXAgPSBfdmFsdWVUeXBlTWFwMi5kZWZhdWx0O1xuICAgIGNzc0FkYXB0ZXIuZ2V0dGVyID0gZ2V0dGVyO1xuICAgIGNzc0FkYXB0ZXIuc2V0dGVyID0gc2V0dGVyO1xuXG4gICAgcmV0dXJuIGNzc0FkYXB0ZXI7XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluTnlZeTloWkdGd2RHVnlMMk56Y3kxaFpHRndkR1Z5TG1weklsMHNJbTVoYldWeklqcGJYU3dpYldGd2NHbHVaM01pT2lJN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096dEJRVTlCTEZOQlFWTXNUVUZCVFN4RFFVRkZMRWRCUVVjc1JVRkJSVHRCUVVOc1FpeFhRVUZQTEVGQlFVTXNRMEZCUXl4NVFrRkJaU3hIUVVGSExFTkJRVU1zUjBGRGVFSXNUVUZCVFN4RFFVRkRMR2RDUVVGblFpeERRVUZETEVsQlFVa3NRMEZCUXl4UFFVRlBMRVZCUVVVc1NVRkJTU3hEUVVGRExFTkJRVU1zZDBKQlFWTXNSMEZCUnl4RFFVRkRMRU5CUVVNc1IwRkRNVVFzZFVKQlFXRXNSMEZCUnl4RFFVRkRMRU5CUVVNc1dVRkJXU3hEUVVGRExFOUJRVThzU1VGQlNTeERRVUZETEVOQlFVTTdRMEZEYmtRN08wRkJSVVFzVTBGQlV5eE5RVUZOTEVOQlFVTXNTMEZCU3l4RlFVRkZPMEZCUTI1Q0xGRkJRVWtzUTBGQlF5eFBRVUZQTEVOQlFVTXNTMEZCU3l4RFFVRkRMRTlCUVU4c1NVRkJTU3h4UWtGQmIwSXNTMEZCU3l4RFFVRkRMRU5CUVVNN1EwRkROVVE3TzJ0Q1FVVmpMRlZCUVVNc1QwRkJUeXhGUVVGTE8wRkJRM2hDTEZGQlFVMHNWVUZCVlN4SFFVRkhMSFZDUVVGUkxFOUJRVThzUTBGQlF5eERRVUZETzBGQlEzQkRMR05CUVZVc1EwRkJReXhSUVVGUkxIRkNRVUZYTEVOQlFVTTdRVUZETDBJc1kwRkJWU3hEUVVGRExGbEJRVmtzZVVKQlFXVXNRMEZCUXp0QlFVTjJReXhqUVVGVkxFTkJRVU1zVFVGQlRTeEhRVUZITEUxQlFVMHNRMEZCUXp0QlFVTXpRaXhqUVVGVkxFTkJRVU1zVFVGQlRTeEhRVUZITEUxQlFVMHNRMEZCUXpzN1FVRkZNMElzVjBGQlR5eFZRVUZWTEVOQlFVTTdRMEZEY2tJaUxDSm1hV3hsSWpvaVkzTnpMV0ZrWVhCMFpYSXVhbk1pTENKemIzVnlZMlZTYjI5MElqb2lMMVZ6WlhKekwwMWhkSFJRWlhKeWVTOVRhWFJsY3k5d2IzQnRiM1JwYjI0aUxDSnpiM1Z5WTJWelEyOXVkR1Z1ZENJNld5SnBiWEJ2Y25RZ2MzUmhkR1ZOWVhBZ1puSnZiU0FuTGk5amMzTXZjM1JoZEdVdGJXRndKenRjYm1sdGNHOXlkQ0IyWVd4MVpWUjVjR1ZOWVhBZ1puSnZiU0FuTGk5amMzTXZkbUZzZFdVdGRIbHdaUzF0WVhBbk8xeHVhVzF3YjNKMElHSjFhV3hrVUhKdmNHVnlkSGxUZEhKcGJtY2dabkp2YlNBbkxpOWpjM012WW5WcGJHUW5PMXh1YVcxd2IzSjBJSEJ5WldacGVHVnlJR1p5YjIwZ0p5NHZZM056TDNCeVpXWnBlR1Z5Snp0Y2JtbHRjRzl5ZENCMGNtRnVjMlp2Y20xUWNtOXdjeUJtY205dElDY3VMMk56Y3k5MGNtRnVjMlp2Y20wdGNISnZjSE1uTzF4dWFXMXdiM0owSUdGa1lYQjBaWElnWm5KdmJTQW5MaTloWkdGd2RHVnlKenRjYmx4dVpuVnVZM1JwYjI0Z1oyVjBkR1Z5SUNoclpYa3BJSHRjYmlBZ0lDQnlaWFIxY200Z0tDRjBjbUZ1YzJadmNtMVFjbTl3YzF0clpYbGRLU0EvWEc0Z0lDQWdJQ0FnSUhkcGJtUnZkeTVuWlhSRGIyMXdkWFJsWkZOMGVXeGxLSFJvYVhNdVpXeGxiV1Z1ZEN3Z2JuVnNiQ2xiY0hKbFptbDRaWElvYTJWNUtWMGdPbHh1SUNBZ0lDQWdJQ0IyWVd4MVpWUjVjR1ZOWVhCYmEyVjVYUzVrWldaaGRXeDBVSEp2Y0hNdVkzVnljbVZ1ZENCOGZDQXdPMXh1ZlZ4dVhHNW1kVzVqZEdsdmJpQnpaWFIwWlhJb2NISnZjSE1wSUh0Y2JpQWdJQ0IwYUdsekxtVnNaVzFsYm5RdWMzUjViR1V1WTNOelZHVjRkQ0FyUFNCaWRXbHNaRkJ5YjNCbGNuUjVVM1J5YVc1bktIQnliM0J6S1R0Y2JuMWNibHh1Wlhod2IzSjBJR1JsWm1GMWJIUWdLR1ZzWlcxbGJuUXBJRDArSUh0Y2JpQWdJQ0JqYjI1emRDQmpjM05CWkdGd2RHVnlJRDBnWVdSaGNIUmxjaWhsYkdWdFpXNTBLVHRjYmlBZ0lDQmpjM05CWkdGd2RHVnlMbk4wWVhSbFRXRndJRDBnYzNSaGRHVk5ZWEE3WEc0Z0lDQWdZM056UVdSaGNIUmxjaTUyWVd4MVpWUjVjR1ZOWVhBZ1BTQjJZV3gxWlZSNWNHVk5ZWEE3WEc0Z0lDQWdZM056UVdSaGNIUmxjaTVuWlhSMFpYSWdQU0JuWlhSMFpYSTdYRzRnSUNBZ1kzTnpRV1JoY0hSbGNpNXpaWFIwWlhJZ1BTQnpaWFIwWlhJN1hHNWNiaUFnSUNCeVpYUjFjbTRnWTNOelFXUmhjSFJsY2p0Y2JuMDdYRzRpWFgwPVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvYWRhcHRlci9jc3MtYWRhcHRlci5qc1xuICoqIG1vZHVsZSBpZCA9IDE1XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzLnNldHRlciA9IHNldHRlcjtcblxudmFyIF9zdGF0ZU1hcCA9IHJlcXVpcmUoJy4vY3NzL3N0YXRlLW1hcCcpO1xuXG52YXIgX3N0YXRlTWFwMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3N0YXRlTWFwKTtcblxudmFyIF92YWx1ZVR5cGVNYXAgPSByZXF1aXJlKCcuL3N2Zy92YWx1ZS10eXBlLW1hcCcpO1xuXG52YXIgX3ZhbHVlVHlwZU1hcDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF92YWx1ZVR5cGVNYXApO1xuXG52YXIgX2J1aWxkID0gcmVxdWlyZSgnLi9zdmcvYnVpbGQnKTtcblxudmFyIF9idWlsZDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9idWlsZCk7XG5cbnZhciBfYXR0ckFkYXB0ZXIgPSByZXF1aXJlKCcuL2F0dHItYWRhcHRlcicpO1xuXG52YXIgX2FkYXB0ZXIgPSByZXF1aXJlKCcuL2FkYXB0ZXInKTtcblxudmFyIF9hZGFwdGVyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2FkYXB0ZXIpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBzZXR0ZXIocHJvcHMpIHtcbiAgICAoMCwgX2F0dHJBZGFwdGVyLnNldHRlcikoKDAsIF9idWlsZDIuZGVmYXVsdCkocHJvcHMsIHRoaXMub3JpZ2luKSk7XG59XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uIChlbGVtZW50KSB7XG4gICAgdmFyIHN2Z0FkYXB0ZXIgPSAoMCwgX2FkYXB0ZXIyLmRlZmF1bHQpKGVsZW1lbnQpO1xuICAgIHN2Z0FkYXB0ZXIuc3RhdGVNYXAgPSBfc3RhdGVNYXAyLmRlZmF1bHQ7XG4gICAgc3ZnQWRhcHRlci52YWx1ZVR5cGVNYXAgPSBfdmFsdWVUeXBlTWFwMi5kZWZhdWx0O1xuICAgIHN2Z0FkYXB0ZXIuZ2V0dGVyID0gX2F0dHJBZGFwdGVyLmdldHRlcjtcbiAgICBzdmdBZGFwdGVyLnNldHRlciA9IHNldHRlcjtcblxuICAgIHZhciBiQm94ID0gZWxlbWVudC5nZXRCQm94KCk7XG4gICAgdmFyIHRyYW5zZm9ybU9yaWdpblkgPSAwO1xuICAgIHZhciB0cmFuc2Zvcm1PcmlnaW5YID0gMDtcblxuICAgIHN2Z0FkYXB0ZXIub3JpZ2luID0ge1xuICAgICAgICB4OiBiQm94LndpZHRoICogKHRyYW5zZm9ybU9yaWdpblggLyAxMDApICsgYkJveC54LFxuICAgICAgICB5OiBiQm94LmhlaWdodCAqICh0cmFuc2Zvcm1PcmlnaW5ZIC8gMTAwKSArIGJCb3gueVxuICAgIH07XG5cbiAgICByZXR1cm4gc3ZnQWRhcHRlcjtcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5OeVl5OWhaR0Z3ZEdWeUwzTjJaeTFoWkdGd2RHVnlMbXB6SWwwc0ltNWhiV1Z6SWpwYlhTd2liV0Z3Y0dsdVozTWlPaUk3T3p0UlFVMW5RaXhOUVVGTkxFZEJRVTRzVFVGQlRUczdPenM3T3pzN096czdPenM3T3pzN096czdPenRCUVVGbUxGTkJRVk1zVFVGQlRTeERRVUZETEV0QlFVc3NSVUZCUlR0QlFVTXhRaXh4UWtGS1lTeE5RVUZOTEVWQlNWSXNjVUpCUVUwc1MwRkJTeXhGUVVGRkxFbEJRVWtzUTBGQlF5eE5RVUZOTEVOQlFVTXNRMEZCUXl4RFFVRkRPME5CUTNwRE96dHJRa0ZGWXl4VlFVRkRMRTlCUVU4c1JVRkJTenRCUVVONFFpeFJRVUZOTEZWQlFWVXNSMEZCUnl4MVFrRkJVU3hQUVVGUExFTkJRVU1zUTBGQlF6dEJRVU53UXl4alFVRlZMRU5CUVVNc1VVRkJVU3h4UWtGQlZ5eERRVUZETzBGQlF5OUNMR05CUVZVc1EwRkJReXhaUVVGWkxIbENRVUZsTEVOQlFVTTdRVUZEZGtNc1kwRkJWU3hEUVVGRExFMUJRVTBzWjBKQldGb3NUVUZCVFN4QlFWZGxMRU5CUVVNN1FVRkRNMElzWTBGQlZTeERRVUZETEUxQlFVMHNSMEZCUnl4TlFVRk5MRU5CUVVNN08wRkJSVE5DTEZGQlFVMHNTVUZCU1N4SFFVRkhMRTlCUVU4c1EwRkJReXhQUVVGUExFVkJRVVVzUTBGQlF6dEJRVU12UWl4UlFVRk5MR2RDUVVGblFpeEhRVUZITEVOQlFVTXNRMEZCUXp0QlFVTXpRaXhSUVVGTkxHZENRVUZuUWl4SFFVRkhMRU5CUVVNc1EwRkJRenM3UVVGRk0wSXNZMEZCVlN4RFFVRkRMRTFCUVUwc1IwRkJSenRCUVVOb1FpeFRRVUZETEVWQlFVVXNTVUZCU1N4RFFVRkRMRXRCUVVzc1NVRkJTU3huUWtGQlowSXNSMEZCUnl4SFFVRkhMRU5CUVVFc1FVRkJReXhIUVVGSExFbEJRVWtzUTBGQlF5eERRVUZETzBGQlEycEVMRk5CUVVNc1JVRkJSU3hKUVVGSkxFTkJRVU1zVFVGQlRTeEpRVUZKTEdkQ1FVRm5RaXhIUVVGSExFZEJRVWNzUTBGQlFTeEJRVUZETEVkQlFVY3NTVUZCU1N4RFFVRkRMRU5CUVVNN1MwRkRja1FzUTBGQlF6czdRVUZGUml4WFFVRlBMRlZCUVZVc1EwRkJRenREUVVOeVFpSXNJbVpwYkdVaU9pSnpkbWN0WVdSaGNIUmxjaTVxY3lJc0luTnZkWEpqWlZKdmIzUWlPaUl2VlhObGNuTXZUV0YwZEZCbGNuSjVMMU5wZEdWekwzQnZjRzF2ZEdsdmJpSXNJbk52ZFhKalpYTkRiMjUwWlc1MElqcGJJbWx0Y0c5eWRDQnpkR0YwWlUxaGNDQm1jbTl0SUNjdUwyTnpjeTl6ZEdGMFpTMXRZWEFuTzF4dWFXMXdiM0owSUhaaGJIVmxWSGx3WlUxaGNDQm1jbTl0SUNjdUwzTjJaeTkyWVd4MVpTMTBlWEJsTFcxaGNDYzdYRzVwYlhCdmNuUWdZblZwYkdRZ1puSnZiU0FuTGk5emRtY3ZZblZwYkdRbk8xeHVhVzF3YjNKMElIc2daMlYwZEdWeUxDQnpaWFIwWlhJZ1lYTWdZWFIwY2xObGRIUmxjaUI5SUdaeWIyMGdKeTR2WVhSMGNpMWhaR0Z3ZEdWeUp6dGNibWx0Y0c5eWRDQmhaR0Z3ZEdWeUlHWnliMjBnSnk0dllXUmhjSFJsY2ljN1hHNWNibVY0Y0c5eWRDQm1kVzVqZEdsdmJpQnpaWFIwWlhJb2NISnZjSE1wSUh0Y2JpQWdJQ0JoZEhSeVUyVjBkR1Z5S0dKMWFXeGtLSEJ5YjNCekxDQjBhR2x6TG05eWFXZHBiaWtwTzF4dWZWeHVYRzVsZUhCdmNuUWdaR1ZtWVhWc2RDQW9aV3hsYldWdWRDa2dQVDRnZTF4dUlDQWdJR052Ym5OMElITjJaMEZrWVhCMFpYSWdQU0JoWkdGd2RHVnlLR1ZzWlcxbGJuUXBPMXh1SUNBZ0lITjJaMEZrWVhCMFpYSXVjM1JoZEdWTllYQWdQU0J6ZEdGMFpVMWhjRHRjYmlBZ0lDQnpkbWRCWkdGd2RHVnlMblpoYkhWbFZIbHdaVTFoY0NBOUlIWmhiSFZsVkhsd1pVMWhjRHRjYmlBZ0lDQnpkbWRCWkdGd2RHVnlMbWRsZEhSbGNpQTlJR2RsZEhSbGNqdGNiaUFnSUNCemRtZEJaR0Z3ZEdWeUxuTmxkSFJsY2lBOUlITmxkSFJsY2p0Y2JseHVJQ0FnSUdOdmJuTjBJR0pDYjNnZ1BTQmxiR1Z0Wlc1MExtZGxkRUpDYjNnb0tUdGNiaUFnSUNCamIyNXpkQ0IwY21GdWMyWnZjbTFQY21sbmFXNVpJRDBnTUR0Y2JpQWdJQ0JqYjI1emRDQjBjbUZ1YzJadmNtMVBjbWxuYVc1WUlEMGdNRHRjYmx4dUlDQWdJSE4yWjBGa1lYQjBaWEl1YjNKcFoybHVJRDBnZTF4dUlDQWdJQ0FnSUNCNE9pQmlRbTk0TG5kcFpIUm9JQ29nS0hSeVlXNXpabTl5YlU5eWFXZHBibGdnTHlBeE1EQXBJQ3NnWWtKdmVDNTRMRnh1SUNBZ0lDQWdJQ0I1T2lCaVFtOTRMbWhsYVdkb2RDQXFJQ2gwY21GdWMyWnZjbTFQY21sbmFXNVpJQzhnTVRBd0tTQXJJR0pDYjNndWVWeHVJQ0FnSUgwN1hHNWNiaUFnSUNCeVpYUjFjbTRnYzNablFXUmhjSFJsY2p0Y2JuMDdYRzVjYmlKZGZRPT1cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2FkYXB0ZXIvc3ZnLWFkYXB0ZXIuanNcbiAqKiBtb2R1bGUgaWQgPSAxNlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX2J1aWxkID0gcmVxdWlyZSgnLi9zdmctcGF0aC9idWlsZCcpO1xuXG52YXIgX2J1aWxkMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2J1aWxkKTtcblxudmFyIF9zdGF0ZU1hcCA9IHJlcXVpcmUoJy4vc3ZnLXBhdGgvc3RhdGUtbWFwJyk7XG5cbnZhciBfc3RhdGVNYXAyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfc3RhdGVNYXApO1xuXG52YXIgX3N2Z0FkYXB0ZXIgPSByZXF1aXJlKCcuL3N2Zy1hZGFwdGVyJyk7XG5cbnZhciBfc3ZnQWRhcHRlcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9zdmdBZGFwdGVyKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gc2V0dGVyKHByb3BzKSB7XG4gICAgdGhpcy5zdmdTZXR0ZXIoKDAsIF9idWlsZDIuZGVmYXVsdCkocHJvcHMsIHRoaXMucGF0aExlbmd0aCkpO1xufVxuXG5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbiAoZWxlbWVudCkge1xuICAgIHZhciBhZGFwdGVyID0gKDAsIF9zdmdBZGFwdGVyMi5kZWZhdWx0KShlbGVtZW50KTtcblxuICAgIGFkYXB0ZXIuc3RhdGVNYXAgPSBfc3RhdGVNYXAyLmRlZmF1bHQ7XG4gICAgYWRhcHRlci5zZXR0ZXIgPSBzZXR0ZXI7XG4gICAgYWRhcHRlci5zdmdTZXR0ZXIgPSBfc3ZnQWRhcHRlci5zZXR0ZXI7XG4gICAgYWRhcHRlci5wYXRoTGVuZ3RoID0gZWxlbWVudC5nZXRUb3RhbExlbmd0aCgpO1xuXG4gICAgcmV0dXJuIGFkYXB0ZXI7XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluTnlZeTloWkdGd2RHVnlMM04yWnkxd1lYUm9MV0ZrWVhCMFpYSXVhbk1pWFN3aWJtRnRaWE1pT2x0ZExDSnRZWEJ3YVc1bmN5STZJanM3T3pzN096czdPenM3T3pzN096czdPMEZCU1VFc1UwRkJVeXhOUVVGTkxFTkJRVU1zUzBGQlN5eEZRVUZGTzBGQlEyNUNMRkZCUVVrc1EwRkJReXhUUVVGVExFTkJRVU1zY1VKQlFVMHNTMEZCU3l4RlFVRkZMRWxCUVVrc1EwRkJReXhWUVVGVkxFTkJRVU1zUTBGQlF5eERRVUZETzBOQlEycEVPenRyUWtGRll5eFZRVUZETEU5QlFVOHNSVUZCU3p0QlFVTjRRaXhSUVVGTkxFOUJRVThzUjBGQlJ5d3dRa0ZCVnl4UFFVRlBMRU5CUVVNc1EwRkJRenM3UVVGRmNFTXNWMEZCVHl4RFFVRkRMRkZCUVZFc2NVSkJRVmNzUTBGQlF6dEJRVU0xUWl4WFFVRlBMRU5CUVVNc1RVRkJUU3hIUVVGSExFMUJRVTBzUTBGQlF6dEJRVU40UWl4WFFVRlBMRU5CUVVNc1UwRkJVeXhsUVZoQkxFMUJRVTBzUVVGWFRTeERRVUZETzBGQlF6bENMRmRCUVU4c1EwRkJReXhWUVVGVkxFZEJRVWNzVDBGQlR5eERRVUZETEdOQlFXTXNSVUZCUlN4RFFVRkRPenRCUVVVNVF5eFhRVUZQTEU5QlFVOHNRMEZCUXp0RFFVTnNRaUlzSW1acGJHVWlPaUp6ZG1jdGNHRjBhQzFoWkdGd2RHVnlMbXB6SWl3aWMyOTFjbU5sVW05dmRDSTZJaTlWYzJWeWN5OU5ZWFIwVUdWeWNua3ZVMmwwWlhNdmNHOXdiVzkwYVc5dUlpd2ljMjkxY21ObGMwTnZiblJsYm5RaU9sc2lhVzF3YjNKMElHSjFhV3hrSUdaeWIyMGdKeTR2YzNabkxYQmhkR2d2WW5WcGJHUW5PMXh1YVcxd2IzSjBJSE4wWVhSbFRXRndJR1p5YjIwZ0p5NHZjM1puTFhCaGRHZ3ZjM1JoZEdVdGJXRndKenRjYm1sdGNHOXlkQ0J6ZG1kQlpHRndkR1Z5TENCN0lITmxkSFJsY2lCaGN5QnpkbWRUWlhSMFpYSWdmU0JtY205dElDY3VMM04yWnkxaFpHRndkR1Z5Snp0Y2JseHVablZ1WTNScGIyNGdjMlYwZEdWeUtIQnliM0J6S1NCN1hHNGdJQ0FnZEdocGN5NXpkbWRUWlhSMFpYSW9ZblZwYkdRb2NISnZjSE1zSUhSb2FYTXVjR0YwYUV4bGJtZDBhQ2twTzF4dWZWeHVYRzVsZUhCdmNuUWdaR1ZtWVhWc2RDQW9aV3hsYldWdWRDa2dQVDRnZTF4dUlDQWdJR052Ym5OMElHRmtZWEIwWlhJZ1BTQnpkbWRCWkdGd2RHVnlLR1ZzWlcxbGJuUXBPMXh1WEc0Z0lDQWdZV1JoY0hSbGNpNXpkR0YwWlUxaGNDQTlJSE4wWVhSbFRXRndPMXh1SUNBZ0lHRmtZWEIwWlhJdWMyVjBkR1Z5SUQwZ2MyVjBkR1Z5TzF4dUlDQWdJR0ZrWVhCMFpYSXVjM1puVTJWMGRHVnlJRDBnYzNablUyVjBkR1Z5TzF4dUlDQWdJR0ZrWVhCMFpYSXVjR0YwYUV4bGJtZDBhQ0E5SUdWc1pXMWxiblF1WjJWMFZHOTBZV3hNWlc1bmRHZ29LVHRjYmx4dUlDQWdJSEpsZEhWeWJpQmhaR0Z3ZEdWeU8xeHVmVHRjYmlKZGZRPT1cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2FkYXB0ZXIvc3ZnLXBhdGgtYWRhcHRlci5qc1xuICoqIG1vZHVsZSBpZCA9IDE3XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfY3JlYXRlRWFzaW5nID0gcmVxdWlyZSgnLi9jcmVhdGUtZWFzaW5nJyk7XG5cbnZhciBfY3JlYXRlRWFzaW5nMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NyZWF0ZUVhc2luZyk7XG5cbnZhciBfY3JlYXRlQmV6aWVyID0gcmVxdWlyZSgnLi9jcmVhdGUtYmV6aWVyJyk7XG5cbnZhciBfY3JlYXRlQmV6aWVyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NyZWF0ZUJlemllcik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbi8vIFZhbHVlc1xuLypcbiAgICBFYXNpbmcgZnVuY3Rpb25zXG4gICAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIFxuICAgIEdlbmVyYXRlcyBhbmQgcHJvdmlkZXMgZWFzaW5nIGZ1bmN0aW9ucyBiYXNlZCBvbiBiYXNlRnVuY3Rpb24gZGVmaW5pdGlvbnNcbiAgICBcbiAgICBBIGNhbGwgdG8gZWFzaW5nRnVuY3Rpb24uZ2V0KCdmdW5jdGlvbk5hbWUnKSByZXR1cm5zIGEgZnVuY3Rpb24gdGhhdCBjYW4gYmUgcGFzc2VkOlxuICAgICAgICBAcGFyYW0gW251bWJlcl06IFByb2dyZXNzIDAtMVxuICAgICAgICBAcGFyYW0gW251bWJlcl0gKG9wdGlvbmFsKTogQW1wIG1vZGlmaWVyLCBvbmx5IGFjY2VwdGVkIGluIHNvbWUgZWFzaW5nIGZ1bmN0aW9uc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYW5kIGlzIHVzZWQgdG8gYWRqdXN0IG92ZXJhbGwgc3RyZW5ndGhcbiAgICAgICAgQHJldHVybiBbbnVtYmVyXTogRWFzZWQgcHJvZ3Jlc3NcbiAgICAgICAgXG4gICAgV2UgY2FuIGdlbmVyYXRlIG5ldyBmdW5jdGlvbnMgYnkgc2VuZGluZyBhbiBlYXNpbmcgZnVuY3Rpb24gdGhyb3VnaCBlYXNpbmdGdW5jdGlvbi5leHRlbmQobmFtZSwgbWV0aG9kKS5cbiAgICBXaGljaCB3aWxsIG1ha2UgbmFtZUluLCBuYW1lT3V0IGFuZCBuYW1lSW5PdXQgZnVuY3Rpb25zIGF2YWlsYWJsZSB0byB1c2UuXG4gICAgICAgIFxuICAgIEVhc2luZyBmdW5jdGlvbnMgZnJvbSBSb2JlcnQgUGVubmVyXG4gICAgaHR0cDovL3d3dy5yb2JlcnRwZW5uZXIuY29tL2Vhc2luZy9cbiAgICAgICAgXG4gICAgQmV6aWVyIGN1cnZlIGludGVycHJldG9yIGNyZWF0ZWQgZnJvbSBHYcOrdGFuIFJlbmF1ZGVhdSdzIG9yaWdpbmFsIEJlemllckVhc2luZyAgXG4gICAgaHR0cHM6Ly9naXRodWIuY29tL2dyZS9iZXppZXItZWFzaW5nL2Jsb2IvbWFzdGVyL2luZGV4LmpzICBcbiAgICBodHRwczovL2dpdGh1Yi5jb20vZ3JlL2Jlemllci1lYXNpbmcvYmxvYi9tYXN0ZXIvTElDRU5TRVxuXG4gICAgQW50aWNpcGF0ZSBlYXNpbmcgY3JlYXRlZCBieSBFbGxpb3QgR2lub1xuICAgIGh0dHBzOi8vdHdpdHRlci5jb20vRWxsaW90R2Vub1xuKi9cbi8vIEltcG9ydHNcbnZhciBERUZBVUxUX0JBQ0tfU1RSRU5HVEggPSAxLjUyNTtcbnZhciBERUZBVUxUX1BPV19TVFJFTkdUSCA9IDI7XG5cbi8qXG4gICAgRWFjaCBvZiB0aGVzZSBiYXNlIGZ1bmN0aW9ucyBpcyBhbiBlYXNlSW5cbiAgICBcbiAgICBPbiBpbml0LCB3ZSB1c2UgLm1pcnJvciBhbmQgLnJldmVyc2UgdG8gZ2VuZXJhdGUgZWFzZUluT3V0IGFuZFxuICAgIGVhc2VPdXQgZnVuY3Rpb25zIHJlc3BlY3RpdmVseS5cbiovXG52YXIgYmFzZUVhc2luZyA9IHtcbiAgICBlYXNlOiBmdW5jdGlvbiAocHJvZ3Jlc3MpIHtcbiAgICAgICAgdmFyIHN0cmVuZ3RoID0gYXJndW1lbnRzLmxlbmd0aCA8PSAxIHx8IGFyZ3VtZW50c1sxXSA9PT0gdW5kZWZpbmVkID8gREVGQVVMVF9QT1dfU1RSRU5HVEggOiBhcmd1bWVudHNbMV07XG4gICAgICAgIHJldHVybiBNYXRoLnBvdyhwcm9ncmVzcywgc3RyZW5ndGgpO1xuICAgIH0sXG4gICAgY2lyYzogZnVuY3Rpb24gKHByb2dyZXNzKSB7XG4gICAgICAgIHJldHVybiAxIC0gTWF0aC5zaW4oTWF0aC5hY29zKHByb2dyZXNzKSk7XG4gICAgfSxcbiAgICBiYWNrOiBmdW5jdGlvbiAocHJvZ3Jlc3MpIHtcbiAgICAgICAgdmFyIHN0cmVuZ3RoID0gYXJndW1lbnRzLmxlbmd0aCA8PSAxIHx8IGFyZ3VtZW50c1sxXSA9PT0gdW5kZWZpbmVkID8gREVGQVVMVF9CQUNLX1NUUkVOR1RIIDogYXJndW1lbnRzWzFdO1xuICAgICAgICByZXR1cm4gcHJvZ3Jlc3MgKiBwcm9ncmVzcyAqICgoc3RyZW5ndGggKyAxKSAqIHByb2dyZXNzIC0gc3RyZW5ndGgpO1xuICAgIH1cbn07XG5cbi8vIFV0aWxpdHkgZnVuY3Rpb25zXG52YXIgZ2VuZXJhdGVQb3dlckVhc2luZyA9IGZ1bmN0aW9uIChzdHJlbmd0aCkge1xuICAgIHJldHVybiBmdW5jdGlvbiAocHJvZ3Jlc3MpIHtcbiAgICAgICAgcmV0dXJuIGJhc2VFYXNpbmcuZWFzZShwcm9ncmVzcywgc3RyZW5ndGgpO1xuICAgIH07XG59O1xuXG5bJ2N1YmljJywgJ3F1YXJ0JywgJ3F1aW50J10uZm9yRWFjaChmdW5jdGlvbiAoZWFzaW5nTmFtZSwgaSkge1xuICAgIHJldHVybiBiYXNlRWFzaW5nW2Vhc2luZ05hbWVdID0gZ2VuZXJhdGVQb3dlckVhc2luZyhpICsgMyk7XG59KTtcblxuLy8gR2VuZXJhdGUgaW4vb3V0L2luT3V0IHZhcmlhdGlvbnNcbmZvciAodmFyIGtleSBpbiBiYXNlRWFzaW5nKSB7XG4gICAgaWYgKGJhc2VFYXNpbmcuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICB2YXIgZWFzaW5nRnVuY3Rpb24gPSAoMCwgX2NyZWF0ZUVhc2luZzIuZGVmYXVsdCkoYmFzZUVhc2luZ1trZXldKTtcbiAgICAgICAgYmFzZUVhc2luZ1trZXkgKyAnSW4nXSA9IGVhc2luZ0Z1bmN0aW9uLmluO1xuICAgICAgICBiYXNlRWFzaW5nW2tleSArICdPdXQnXSA9IGVhc2luZ0Z1bmN0aW9uLm91dDtcbiAgICAgICAgYmFzZUVhc2luZ1trZXkgKyAnSW5PdXQnXSA9IGVhc2luZ0Z1bmN0aW9uLmluT3V0O1xuICAgIH1cbn1cblxuYmFzZUVhc2luZy5saW5lYXIgPSBmdW5jdGlvbiAocHJvZ3Jlc3MpIHtcbiAgICByZXR1cm4gcHJvZ3Jlc3M7XG59O1xuYmFzZUVhc2luZy5hbnRpY2lwYXRlID0gZnVuY3Rpb24gKHByb2dyZXNzKSB7XG4gICAgdmFyIHN0cmVuZ3RoID0gYXJndW1lbnRzLmxlbmd0aCA8PSAxIHx8IGFyZ3VtZW50c1sxXSA9PT0gdW5kZWZpbmVkID8gREVGQVVMVF9CQUNLX1NUUkVOR1RIIDogYXJndW1lbnRzWzFdO1xuICAgIHJldHVybiAocHJvZ3Jlc3MgKj0gMikgPCAxID8gMC41ICogYmFzZUVhc2luZy5iYWNrSW4ocHJvZ3Jlc3MsIHN0cmVuZ3RoKSA6IDAuNSAqICgyIC0gTWF0aC5wb3coMiwgLTEwICogKHByb2dyZXNzIC0gMSkpKTtcbn07XG5cbmJhc2VFYXNpbmcuZWFzaW5nRnVuY3Rpb24gPSBfY3JlYXRlRWFzaW5nMi5kZWZhdWx0O1xuYmFzZUVhc2luZy5jdWJpY0JlemllciA9IF9jcmVhdGVCZXppZXIyLmRlZmF1bHQ7XG5iYXNlRWFzaW5nLm1vZGlmeUVhc2UgPSBmdW5jdGlvbiAoZWFzaW5nKSB7XG4gICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBBcnJheShfbGVuID4gMSA/IF9sZW4gLSAxIDogMCksIF9rZXkgPSAxOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICAgIGFyZ3NbX2tleSAtIDFdID0gYXJndW1lbnRzW19rZXldO1xuICAgIH1cblxuICAgIHJldHVybiBmdW5jdGlvbiAocHJvZ3Jlc3MpIHtcbiAgICAgICAgcmV0dXJuIGVhc2luZy5hcHBseSh1bmRlZmluZWQsIFtwcm9ncmVzc10uY29uY2F0KGFyZ3MpKTtcbiAgICB9O1xufTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gYmFzZUVhc2luZztcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbk55WXk5aFkzUnBiMjV6TDJWaGMybHVaeTl3Y21WelpYUXRaV0Z6YVc1bkxtcHpJbDBzSW01aGJXVnpJanBiWFN3aWJXRndjR2x1WjNNaU9pSTdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3TzBGQk9FSkJMRWxCUVUwc2NVSkJRWEZDTEVkQlFVY3NTMEZCU3l4RFFVRkRPMEZCUTNCRExFbEJRVTBzYjBKQlFXOUNMRWRCUVVjc1EwRkJRenM3T3pzN096czdRVUZCUXl4QlFWRXZRaXhKUVVGTkxGVkJRVlVzUjBGQlJ6dEJRVU5tTEZGQlFVa3NSVUZCUlN4VlFVRkRMRkZCUVZFN1dVRkJSU3hSUVVGUkxIbEVRVUZITEc5Q1FVRnZRanQzUWtGQlN5eFJRVUZSTEVWQlFVa3NVVUZCVVR0TFFVRkJPMEZCUTNwRkxGRkJRVWtzUlVGQlJTeFZRVUZCTEZGQlFWRTdaVUZCU1N4RFFVRkRMRWRCUVVjc1NVRkJTU3hEUVVGRExFZEJRVWNzUTBGQlF5eEpRVUZKTEVOQlFVTXNTVUZCU1N4RFFVRkRMRkZCUVZFc1EwRkJReXhEUVVGRE8wdEJRVUU3UVVGRGJrUXNVVUZCU1N4RlFVRkZMRlZCUVVNc1VVRkJVVHRaUVVGRkxGRkJRVkVzZVVSQlFVY3NjVUpCUVhGQ08yVkJRVXNzUVVGQlF5eFJRVUZSTEVkQlFVY3NVVUZCVVN4SlFVRkxMRU5CUVVNc1VVRkJVU3hIUVVGSExFTkJRVU1zUTBGQlFTeEhRVUZKTEZGQlFWRXNSMEZCUnl4UlFVRlJMRU5CUVVFc1FVRkJRenRMUVVGQk8wTkJRM1pJT3pzN1FVRkJReXhCUVVkR0xFbEJRVTBzYlVKQlFXMUNMRWRCUVVjc1ZVRkJReXhSUVVGUk8xZEJRVXNzVlVGQlF5eFJRVUZSTzJWQlFVc3NWVUZCVlN4RFFVRkRMRWxCUVVrc1EwRkJReXhSUVVGUkxFVkJRVVVzVVVGQlVTeERRVUZETzB0QlFVRTdRMEZCUVN4RFFVRkRPenRCUVVVMVJpeERRVUZETEU5QlFVOHNSVUZCUlN4UFFVRlBMRVZCUVVVc1QwRkJUeXhEUVVGRExFTkJRVU1zVDBGQlR5eERRVUZETEZWQlFVTXNWVUZCVlN4RlFVRkZMRU5CUVVNN1YwRkJTeXhWUVVGVkxFTkJRVU1zVlVGQlZTeERRVUZETEVkQlFVY3NiVUpCUVcxQ0xFTkJRVU1zUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXp0RFFVRkJMRU5CUVVNN096dEJRVUZETEVGQlJ6VkhMRXRCUVVzc1NVRkJTU3hIUVVGSExFbEJRVWtzVlVGQlZTeEZRVUZGTzBGQlEzaENMRkZCUVVrc1ZVRkJWU3hEUVVGRExHTkJRV01zUTBGQlF5eEhRVUZITEVOQlFVTXNSVUZCUlR0QlFVTm9ReXhaUVVGTkxHTkJRV01zUjBGQlJ5dzBRa0ZCY1VJc1ZVRkJWU3hEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETEVOQlFVTTdRVUZETjBRc2EwSkJRVlVzUTBGQlNTeEhRVUZITEZGQlFVc3NSMEZCUnl4alFVRmpMRU5CUVVNc1JVRkJSU3hEUVVGRE8wRkJRek5ETEd0Q1FVRlZMRU5CUVVrc1IwRkJSeXhUUVVGTkxFZEJRVWNzWTBGQll5eERRVUZETEVkQlFVY3NRMEZCUXp0QlFVTTNReXhyUWtGQlZTeERRVUZKTEVkQlFVY3NWMEZCVVN4SFFVRkhMR05CUVdNc1EwRkJReXhMUVVGTExFTkJRVU03UzBGRGNFUTdRMEZEU2pzN1FVRkZSQ3hWUVVGVkxFTkJRVU1zVFVGQlRTeEhRVUZITEZWQlFVRXNVVUZCVVR0WFFVRkpMRkZCUVZFN1EwRkJRU3hEUVVGRE8wRkJRM3BETEZWQlFWVXNRMEZCUXl4VlFVRlZMRWRCUVVjc1ZVRkJReXhSUVVGUk8xRkJRVVVzVVVGQlVTeDVSRUZCUnl4eFFrRkJjVUk3VjBGREwwUXNRVUZCUXl4RFFVRkRMRkZCUVZFc1NVRkJSU3hEUVVGRExFTkJRVUVzUjBGQlNTeERRVUZETEVkQlFVa3NSMEZCUnl4SFFVRkhMRlZCUVZVc1EwRkJReXhOUVVGTkxFTkJRVU1zVVVGQlVTeEZRVUZGTEZGQlFWRXNRMEZCUXl4SFFVRkpMRWRCUVVjc1NVRkJTU3hEUVVGRExFZEJRVWNzU1VGQlNTeERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRMRVZCUVVVc1EwRkJReXhGUVVGRkxFbEJRVWtzVVVGQlVTeEhRVUZITEVOQlFVTXNRMEZCUVN4QlFVRkRMRU5CUVVNc1EwRkJRU3hCUVVGRE8wTkJRVUVzUTBGQlF6czdRVUZGZGtnc1ZVRkJWU3hEUVVGRExHTkJRV01zZVVKQlFYVkNMRU5CUVVNN1FVRkRha1FzVlVGQlZTeERRVUZETEZkQlFWY3NlVUpCUVdNc1EwRkJRenRCUVVOeVF5eFZRVUZWTEVOQlFVTXNWVUZCVlN4SFFVRkhMRlZCUVVNc1RVRkJUVHR6UTBGQlN5eEpRVUZKTzBGQlFVb3NXVUZCU1RzN08xZEJRVXNzVlVGQlF5eFJRVUZSTzJWQlFVc3NUVUZCVFN4dFFrRkJReXhSUVVGUkxGTkJRVXNzU1VGQlNTeEZRVUZETzB0QlFVRTdRMEZCUVN4RFFVRkRPenRyUWtGRmRFVXNWVUZCVlNJc0ltWnBiR1VpT2lKd2NtVnpaWFF0WldGemFXNW5MbXB6SWl3aWMyOTFjbU5sVW05dmRDSTZJaTlWYzJWeWN5OU5ZWFIwVUdWeWNua3ZVMmwwWlhNdmNHOXdiVzkwYVc5dUlpd2ljMjkxY21ObGMwTnZiblJsYm5RaU9sc2lMeXBjYmlBZ0lDQkZZWE5wYm1jZ1puVnVZM1JwYjI1elhHNGdJQ0FnTFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExWeHVJQ0FnSUZ4dUlDQWdJRWRsYm1WeVlYUmxjeUJoYm1RZ2NISnZkbWxrWlhNZ1pXRnphVzVuSUdaMWJtTjBhVzl1Y3lCaVlYTmxaQ0J2YmlCaVlYTmxSblZ1WTNScGIyNGdaR1ZtYVc1cGRHbHZibk5jYmlBZ0lDQmNiaUFnSUNCQklHTmhiR3dnZEc4Z1pXRnphVzVuUm5WdVkzUnBiMjR1WjJWMEtDZG1kVzVqZEdsdmJrNWhiV1VuS1NCeVpYUjFjbTV6SUdFZ1puVnVZM1JwYjI0Z2RHaGhkQ0JqWVc0Z1ltVWdjR0Z6YzJWa09seHVJQ0FnSUNBZ0lDQkFjR0Z5WVcwZ1cyNTFiV0psY2wwNklGQnliMmR5WlhOeklEQXRNVnh1SUNBZ0lDQWdJQ0JBY0dGeVlXMGdXMjUxYldKbGNsMGdLRzl3ZEdsdmJtRnNLVG9nUVcxd0lHMXZaR2xtYVdWeUxDQnZibXg1SUdGalkyVndkR1ZrSUdsdUlITnZiV1VnWldGemFXNW5JR1oxYm1OMGFXOXVjMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnWVc1a0lHbHpJSFZ6WldRZ2RHOGdZV1JxZFhOMElHOTJaWEpoYkd3Z2MzUnlaVzVuZEdoY2JpQWdJQ0FnSUNBZ1FISmxkSFZ5YmlCYmJuVnRZbVZ5WFRvZ1JXRnpaV1FnY0hKdlozSmxjM05jYmlBZ0lDQWdJQ0FnWEc0Z0lDQWdWMlVnWTJGdUlHZGxibVZ5WVhSbElHNWxkeUJtZFc1amRHbHZibk1nWW5rZ2MyVnVaR2x1WnlCaGJpQmxZWE5wYm1jZ1puVnVZM1JwYjI0Z2RHaHliM1ZuYUNCbFlYTnBibWRHZFc1amRHbHZiaTVsZUhSbGJtUW9ibUZ0WlN3Z2JXVjBhRzlrS1M1Y2JpQWdJQ0JYYUdsamFDQjNhV3hzSUcxaGEyVWdibUZ0WlVsdUxDQnVZVzFsVDNWMElHRnVaQ0J1WVcxbFNXNVBkWFFnWm5WdVkzUnBiMjV6SUdGMllXbHNZV0pzWlNCMGJ5QjFjMlV1WEc0Z0lDQWdJQ0FnSUZ4dUlDQWdJRVZoYzJsdVp5Qm1kVzVqZEdsdmJuTWdabkp2YlNCU2IySmxjblFnVUdWdWJtVnlYRzRnSUNBZ2FIUjBjRG92TDNkM2R5NXliMkpsY25Sd1pXNXVaWEl1WTI5dEwyVmhjMmx1Wnk5Y2JpQWdJQ0FnSUNBZ1hHNGdJQ0FnUW1WNmFXVnlJR04xY25abElHbHVkR1Z5Y0hKbGRHOXlJR055WldGMFpXUWdabkp2YlNCSFljT3JkR0Z1SUZKbGJtRjFaR1ZoZFNkeklHOXlhV2RwYm1Gc0lFSmxlbWxsY2tWaGMybHVaeUFnWEc0Z0lDQWdhSFIwY0hNNkx5OW5hWFJvZFdJdVkyOXRMMmR5WlM5aVpYcHBaWEl0WldGemFXNW5MMkpzYjJJdmJXRnpkR1Z5TDJsdVpHVjRMbXB6SUNCY2JpQWdJQ0JvZEhSd2N6b3ZMMmRwZEdoMVlpNWpiMjB2WjNKbEwySmxlbWxsY2kxbFlYTnBibWN2WW14dllpOXRZWE4wWlhJdlRFbERSVTVUUlZ4dVhHNGdJQ0FnUVc1MGFXTnBjR0YwWlNCbFlYTnBibWNnWTNKbFlYUmxaQ0JpZVNCRmJHeHBiM1FnUjJsdWIxeHVJQ0FnSUdoMGRIQnpPaTh2ZEhkcGRIUmxjaTVqYjIwdlJXeHNhVzkwUjJWdWIxeHVLaTljYmk4dklFbHRjRzl5ZEhOY2JtbHRjRzl5ZENCamNtVmhkR1ZGWVhOcGJtZEdkVzVqZEdsdmJpQm1jbTl0SUNjdUwyTnlaV0YwWlMxbFlYTnBibWNuTzF4dWFXMXdiM0owSUdOMVltbGpRbVY2YVdWeUlHWnliMjBnSnk0dlkzSmxZWFJsTFdKbGVtbGxjaWM3WEc1Y2JpOHZJRlpoYkhWbGMxeHVZMjl1YzNRZ1JFVkdRVlZNVkY5Q1FVTkxYMU5VVWtWT1IxUklJRDBnTVM0MU1qVTdYRzVqYjI1emRDQkVSVVpCVlV4VVgxQlBWMTlUVkZKRlRrZFVTQ0E5SURJN1hHNWNiaThxWEc0Z0lDQWdSV0ZqYUNCdlppQjBhR1Z6WlNCaVlYTmxJR1oxYm1OMGFXOXVjeUJwY3lCaGJpQmxZWE5sU1c1Y2JpQWdJQ0JjYmlBZ0lDQlBiaUJwYm1sMExDQjNaU0IxYzJVZ0xtMXBjbkp2Y2lCaGJtUWdMbkpsZG1WeWMyVWdkRzhnWjJWdVpYSmhkR1VnWldGelpVbHVUM1YwSUdGdVpGeHVJQ0FnSUdWaGMyVlBkWFFnWm5WdVkzUnBiMjV6SUhKbGMzQmxZM1JwZG1Wc2VTNWNiaW92WEc1amIyNXpkQ0JpWVhObFJXRnphVzVuSUQwZ2UxeHVJQ0FnSUdWaGMyVTZJQ2h3Y205bmNtVnpjeXdnYzNSeVpXNW5kR2dnUFNCRVJVWkJWVXhVWDFCUFYxOVRWRkpGVGtkVVNDa2dQVDRnY0hKdlozSmxjM01nS2lvZ2MzUnlaVzVuZEdnc1hHNGdJQ0FnWTJseVl6b2djSEp2WjNKbGMzTWdQVDRnTVNBdElFMWhkR2d1YzJsdUtFMWhkR2d1WVdOdmN5aHdjbTluY21WemN5a3BMRnh1SUNBZ0lHSmhZMnM2SUNod2NtOW5jbVZ6Y3l3Z2MzUnlaVzVuZEdnZ1BTQkVSVVpCVlV4VVgwSkJRMHRmVTFSU1JVNUhWRWdwSUQwK0lDaHdjbTluY21WemN5QXFJSEJ5YjJkeVpYTnpLU0FxSUNnb2MzUnlaVzVuZEdnZ0t5QXhLU0FxSUhCeWIyZHlaWE56SUMwZ2MzUnlaVzVuZEdncFhHNTlPMXh1WEc0dkx5QlZkR2xzYVhSNUlHWjFibU4wYVc5dWMxeHVZMjl1YzNRZ1oyVnVaWEpoZEdWUWIzZGxja1ZoYzJsdVp5QTlJQ2h6ZEhKbGJtZDBhQ2tnUFQ0Z0tIQnliMmR5WlhOektTQTlQaUJpWVhObFJXRnphVzVuTG1WaGMyVW9jSEp2WjNKbGMzTXNJSE4wY21WdVozUm9LVHRjYmx4dVd5ZGpkV0pwWXljc0lDZHhkV0Z5ZENjc0lDZHhkV2x1ZENkZExtWnZja1ZoWTJnb0tHVmhjMmx1WjA1aGJXVXNJR2twSUQwK0lHSmhjMlZGWVhOcGJtZGJaV0Z6YVc1blRtRnRaVjBnUFNCblpXNWxjbUYwWlZCdmQyVnlSV0Z6YVc1bktHa2dLeUF6S1NrN1hHNWNiaTh2SUVkbGJtVnlZWFJsSUdsdUwyOTFkQzlwYms5MWRDQjJZWEpwWVhScGIyNXpYRzVtYjNJZ0tHeGxkQ0JyWlhrZ2FXNGdZbUZ6WlVWaGMybHVaeWtnZTF4dUlDQWdJR2xtSUNoaVlYTmxSV0Z6YVc1bkxtaGhjMDkzYmxCeWIzQmxjblI1S0d0bGVTa3BJSHRjYmlBZ0lDQWdJQ0FnWTI5dWMzUWdaV0Z6YVc1blJuVnVZM1JwYjI0Z1BTQmpjbVZoZEdWRllYTnBibWRHZFc1amRHbHZiaWhpWVhObFJXRnphVzVuVzJ0bGVWMHBPMXh1SUNBZ0lDQWdJQ0JpWVhObFJXRnphVzVuVzJBa2UydGxlWDFKYm1CZElEMGdaV0Z6YVc1blJuVnVZM1JwYjI0dWFXNDdYRzRnSUNBZ0lDQWdJR0poYzJWRllYTnBibWRiWUNSN2EyVjVmVTkxZEdCZElEMGdaV0Z6YVc1blJuVnVZM1JwYjI0dWIzVjBPMXh1SUNBZ0lDQWdJQ0JpWVhObFJXRnphVzVuVzJBa2UydGxlWDFKYms5MWRHQmRJRDBnWldGemFXNW5SblZ1WTNScGIyNHVhVzVQZFhRN1hHNGdJQ0FnZlZ4dWZWeHVYRzVpWVhObFJXRnphVzVuTG14cGJtVmhjaUE5SUhCeWIyZHlaWE56SUQwK0lIQnliMmR5WlhOek8xeHVZbUZ6WlVWaGMybHVaeTVoYm5ScFkybHdZWFJsSUQwZ0tIQnliMmR5WlhOekxDQnpkSEpsYm1kMGFDQTlJRVJGUmtGVlRGUmZRa0ZEUzE5VFZGSkZUa2RVU0NrZ1BUNWNiaUFnSUNBb0tIQnliMmR5WlhOektqMHlLU0E4SURFcElEOGdNQzQxSUNvZ1ltRnpaVVZoYzJsdVp5NWlZV05yU1c0b2NISnZaM0psYzNNc0lITjBjbVZ1WjNSb0tTQTZJQ0F3TGpVZ0tpQW9NaUF0SUUxaGRHZ3VjRzkzS0RJc0lDMHhNQ0FxSUNod2NtOW5jbVZ6Y3lBdElERXBLU2s3WEc1Y2JtSmhjMlZGWVhOcGJtY3VaV0Z6YVc1blJuVnVZM1JwYjI0Z1BTQmpjbVZoZEdWRllYTnBibWRHZFc1amRHbHZianRjYm1KaGMyVkZZWE5wYm1jdVkzVmlhV05DWlhwcFpYSWdQU0JqZFdKcFkwSmxlbWxsY2p0Y2JtSmhjMlZGWVhOcGJtY3ViVzlrYVdaNVJXRnpaU0E5SUNobFlYTnBibWNzSUM0dUxtRnlaM01wSUQwK0lDaHdjbTluY21WemN5a2dQVDRnWldGemFXNW5LSEJ5YjJkeVpYTnpMQ0F1TGk1aGNtZHpLVHRjYmx4dVpYaHdiM0owSUdSbFptRjFiSFFnWW1GelpVVmhjMmx1WnpzaVhYMD1cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2FjdGlvbnMvZWFzaW5nL3ByZXNldC1lYXNpbmcuanNcbiAqKiBtb2R1bGUgaWQgPSAxOFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0cy5zdGVwUHJvZ3Jlc3MgPSBleHBvcnRzLnNwZWVkUGVyU2Vjb25kID0gZXhwb3J0cy5zcGVlZFBlckZyYW1lID0gZXhwb3J0cy5zbW9vdGggPSBleHBvcnRzLnJlc3RyaWN0ID0gZXhwb3J0cy5yZWxhdGl2ZVZhbHVlID0gZXhwb3J0cy5yYW5kb20gPSBleHBvcnRzLnJhZGlhbnNUb0RlZ3JlZXMgPSBleHBvcnRzLnBvaW50RnJvbUFuZ2xlQW5kRGlzdGFuY2UgPSBleHBvcnRzLm9mZnNldCA9IGV4cG9ydHMuZ2V0UHJvZ3Jlc3NGcm9tVmFsdWUgPSBleHBvcnRzLmdldFZhbHVlRnJvbVByb2dyZXNzID0gZXhwb3J0cy5oeXBvdGVudXNlID0gZXhwb3J0cy5lYXNlID0gZXhwb3J0cy5kaXN0YW5jZSA9IGV4cG9ydHMuZGlsYXRlID0gZXhwb3J0cy5kZWdyZWVzVG9SYWRpYW5zID0gZXhwb3J0cy5hbmdsZSA9IHVuZGVmaW5lZDtcblxudmFyIF91dGlscyA9IHJlcXVpcmUoJy4vdXRpbHMnKTtcblxudmFyIFpFUk9fUE9JTlQgPSB7XG4gICAgeDogMCxcbiAgICB5OiAwLFxuICAgIHo6IDBcbn07XG5cbnZhciBkaXN0YW5jZTFEID0gZnVuY3Rpb24gKGEsIGIpIHtcbiAgICByZXR1cm4gTWF0aC5hYnMoYSAtIGIpO1xufTtcblxuLypcbiAgICBBbmdsZSBiZXR3ZWVuIHBvaW50c1xuICAgIFxuICAgIFRyYW5zbGF0ZXMgdGhlIGh5cG90aGV0aWNhbCBsaW5lIHNvIHRoYXQgdGhlICdmcm9tJyBjb29yZGluYXRlc1xuICAgIGFyZSBhdCAwLDAsIHRoZW4gcmV0dXJuIHRoZSBhbmdsZSB1c2luZyAuYW5nbGVGcm9tQ2VudGVyKClcbiAgICBcbiAgICBAcGFyYW0gW29iamVjdF06IFggYW5kIFkgY29vcmRpbmF0ZXMgb2YgZnJvbSBwb2ludFxuICAgIEBwYXJhbSBbb2JqZWN0XTogWCBhbmQgWSBjb3JkaW5hdGVzIG9mIHRvIHBvaW50XG4gICAgQHJldHVybiBbcmFkaWFuXTogQW5nbGUgYmV0d2VlbiB0aGUgdHdvIHBvaW50cyBpbiByYWRpYW5zXG4qL1xudmFyIGFuZ2xlID0gZXhwb3J0cy5hbmdsZSA9IGZ1bmN0aW9uIChhKSB7XG4gICAgdmFyIGIgPSBhcmd1bWVudHMubGVuZ3RoIDw9IDEgfHwgYXJndW1lbnRzWzFdID09PSB1bmRlZmluZWQgPyBaRVJPX1BPSU5UIDogYXJndW1lbnRzWzFdO1xuICAgIHJldHVybiByYWRpYW5zVG9EZWdyZWVzKE1hdGguYXRhbjIoYS54IC0gYi54LCBhLnkgLSBiLnkpKTtcbn07XG5cbi8qXG4gICAgQ29udmVydCBkZWdyZWVzIHRvIHJhZGlhbnNcbiAgICBcbiAgICBAcGFyYW0gW251bWJlcl06IFZhbHVlIGluIGRlZ3JlZXNcbiAgICBAcmV0dXJuIFtudW1iZXJdOiBWYWx1ZSBpbiByYWRpYW5zXG4qL1xudmFyIGRlZ3JlZXNUb1JhZGlhbnMgPSBleHBvcnRzLmRlZ3JlZXNUb1JhZGlhbnMgPSBmdW5jdGlvbiAoZGVncmVlcykge1xuICAgIHJldHVybiBkZWdyZWVzICogTWF0aC5QSSAvIDE4MDtcbn07XG5cbi8qXG4gICAgRGlsYXRlXG4gICAgXG4gICAgQ2hhbmdlIHRoZSBwcm9ncmVzc2lvbiBiZXR3ZWVuIGEgYW5kIGIgYWNjb3JkaW5nIHRvIGRpbGF0aW9uLlxuICAgIFxuICAgIFNvIGRpbGF0aW9uID0gMC41IHdvdWxkIGNoYW5nZVxuICAgIFxuICAgIGEgLS0tLS0tLS0tIGJcbiAgICBcbiAgICB0b1xuICAgIFxuICAgIGEgLS0tLSBiXG4gICAgXG4gICAgQHBhcmFtIFtudW1iZXJdOiBQcmV2aW91cyB2YWx1ZVxuICAgIEBwYXJhbSBbbnVtYmVyXTogQ3VycmVudCB2YWx1ZVxuICAgIEBwYXJhbSBbbnVtYmVyXTogRGlsYXRlIHByb2dyZXNzIGJ5IHhcbiAgICBAcmV0dXJuIFtudW1iZXJdOiBQcmV2aW91cyB2YWx1ZSBwbHVzIHRoZSBkaWxhdGVkIGRpZmZlcmVuY2VcbiovXG52YXIgZGlsYXRlID0gZXhwb3J0cy5kaWxhdGUgPSBmdW5jdGlvbiAoYSwgYiwgZGlsYXRpb24pIHtcbiAgICByZXR1cm4gYSArIChiIC0gYSkgKiBkaWxhdGlvbjtcbn07XG5cbi8qXG4gICAgRGlzdGFuY2VcbiAgICBcbiAgICBSZXR1cm5zIHRoZSBkaXN0YW5jZSBiZXR3ZWVuIHR3byBuIGRpbWVuc2lvbmFsIHBvaW50cy5cbiAgICBcbiAgICBAcGFyYW0gW29iamVjdC9udW1iZXJdOiB4IGFuZCB5IG9yIGp1c3QgeCBvZiBwb2ludCBBXG4gICAgQHBhcmFtIFtvYmplY3QvbnVtYmVyXTogKG9wdGlvbmFsKTogeCBhbmQgeSBvciBqdXN0IHggb2YgcG9pbnQgQlxuICAgIEByZXR1cm4gW251bWJlcl06IFRoZSBkaXN0YW5jZSBiZXR3ZWVuIHRoZSB0d28gcG9pbnRzXG4qL1xudmFyIGRpc3RhbmNlID0gZXhwb3J0cy5kaXN0YW5jZSA9IGZ1bmN0aW9uIChhKSB7XG4gICAgdmFyIGIgPSBhcmd1bWVudHMubGVuZ3RoIDw9IDEgfHwgYXJndW1lbnRzWzFdID09PSB1bmRlZmluZWQgPyBaRVJPX1BPSU5UIDogYXJndW1lbnRzWzFdO1xuXG4gICAgLy8gMUQgZGltZW5zaW9uc1xuICAgIGlmICgoMCwgX3V0aWxzLmlzTnVtKShhKSkge1xuICAgICAgICByZXR1cm4gZGlzdGFuY2UxRChhLCBiKTtcblxuICAgICAgICAvLyBNdWx0aS1kaW1lbnNpb25hbFxuICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB2YXIgeERlbHRhID0gZGlzdGFuY2UxRChhLngsIGIueCk7XG4gICAgICAgICAgICB2YXIgeURlbHRhID0gZGlzdGFuY2UxRChhLnksIGIueSk7XG4gICAgICAgICAgICB2YXIgekRlbHRhID0gKDAsIF91dGlscy5pc051bSkoYS56KSA/IGRpc3RhbmNlMUQoYS56LCBiLnopIDogMDtcblxuICAgICAgICAgICAgcmV0dXJuIE1hdGguc3FydChNYXRoLnBvdyh4RGVsdGEsIDIpICsgTWF0aC5wb3coeURlbHRhLCAyKSArIE1hdGgucG93KHpEZWx0YSwgMikpO1xuICAgICAgICB9XG59O1xuXG4vKlxuICAgIEVhc2UgdmFsdWUgd2l0aGluIHJhbmdlZCBwYXJhbWV0ZXJzXG4gICAgXG4gICAgQHBhcmFtIFtudW1iZXJdOiBQcm9ncmVzcyBiZXR3ZWVuIDAgYW5kIDFcbiAgICBAcGFyYW0gW251bWJlcl06IFZhbHVlIG9mIDAgcHJvZ3Jlc3NcbiAgICBAcGFyYW0gW251bWJlcl06IFZhbHVlIG9mIDEgcHJvZ3Jlc3NcbiAgICBAcGFyYW0gW3N0cmluZyB8fCBmdW5jdGlvbl06IE5hbWUgb2YgcHJlc2V0IGVhc2luZ1xuICAgICAgICB0byB1c2Ugb3IgZ2VuZXJhdGVkIGVhc2luZyBmdW5jdGlvblxuICAgIEByZXR1cm4gW251bWJlcl06IFZhbHVlIG9mIGVhc2VkIHByb2dyZXNzIGluIHJhbmdlXG4qL1xudmFyIGVhc2UgPSBleHBvcnRzLmVhc2UgPSBmdW5jdGlvbiAocHJvZ3Jlc3MsIGZyb20sIHRvLCBlYXNlKSB7XG4gICAgdmFyIHByb2dyZXNzTGltaXRlZCA9IHJlc3RyaWN0KHByb2dyZXNzLCAwLCAxKTtcbiAgICB2YXIgZWFzZWRQcm9ncmVzcyA9IGVhc2UocHJvZ3Jlc3NMaW1pdGVkKTtcblxuICAgIHJldHVybiBnZXRWYWx1ZUZyb21Qcm9ncmVzcyhlYXNlZFByb2dyZXNzLCBmcm9tLCB0byk7XG59O1xuXG4vKlxuICAgIEh5cG90ZW51c2VcbiAgICBcbiAgICBSZXR1cm5zIHRoZSBoeXBvdGVudXNlLCBzaWRlIEMsIGdpdmVuIHRoZSBsZW5ndGhzIG9mIHNpZGVzIEEgYW5kIEIuXG4gICAgXG4gICAgQHBhcmFtIFtudW1iZXJdOiBMZW5ndGggb2YgQVxuICAgIEBwYXJhbSBbbnVtYmVyXTogTGVuZ3RoIG9mIEJcbiAgICBAcmV0dXJuIFtudW1iZXJdOiBMZW5ndGggb2YgQ1xuKi9cbnZhciBoeXBvdGVudXNlID0gZXhwb3J0cy5oeXBvdGVudXNlID0gZnVuY3Rpb24gKGEsIGIpIHtcbiAgICByZXR1cm4gTWF0aC5zcXJ0KGEgKiBhICsgYiAqIGIpO1xufTtcblxuLypcbiAgICBWYWx1ZSBpbiByYW5nZSBmcm9tIHByb2dyZXNzXG4gICAgXG4gICAgR2l2ZW4gYSBsb3dlciBsaW1pdCBhbmQgYW4gdXBwZXIgbGltaXQsIHdlIHJldHVybiB0aGUgdmFsdWUgd2l0aGluXG4gICAgdGhhdCByYW5nZSBhcyBleHByZXNzZWQgYnkgcHJvZ3Jlc3MgKGEgbnVtYmVyIGZyb20gMC0xKVxuICAgIFxuICAgIEBwYXJhbSBbbnVtYmVyXTogVGhlIHByb2dyZXNzIGJldHdlZW4gbG93ZXIgYW5kIHVwcGVyIGxpbWl0cyBleHByZXNzZWQgMC0xXG4gICAgQHBhcmFtIFtudW1iZXJdOiBMb3dlciBsaW1pdCBvZiByYW5nZVxuICAgIEBwYXJhbSBbbnVtYmVyXTogVXBwZXIgbGltaXQgb2YgcmFuZ2VcbiAgICBAcmV0dXJuIFtudW1iZXJdOiBWYWx1ZSBhcyBjYWxjdWxhdGVkIGZyb20gcHJvZ3Jlc3Mgd2l0aGluIHJhbmdlIChub3QgbGltaXRlZCB3aXRoaW4gcmFuZ2UpXG4qL1xudmFyIGdldFZhbHVlRnJvbVByb2dyZXNzID0gZXhwb3J0cy5nZXRWYWx1ZUZyb21Qcm9ncmVzcyA9IGZ1bmN0aW9uIChwcm9ncmVzcywgZnJvbSwgdG8pIHtcbiAgICByZXR1cm4gLXByb2dyZXNzICogZnJvbSArIHByb2dyZXNzICogdG8gKyBmcm9tO1xufTtcblxuLypcbiAgICBQcm9ncmVzcyB3aXRoaW4gZ2l2ZW4gcmFuZ2VcbiAgICBcbiAgICBHaXZlbiBhIGxvd2VyIGxpbWl0IGFuZCBhbiB1cHBlciBsaW1pdCwgd2UgcmV0dXJuIHRoZSBwcm9ncmVzc1xuICAgIChleHByZXNzZWQgYXMgYSBudW1iZXIgMC0xKSByZXByZXNlbnRlZCBieSB0aGUgZ2l2ZW4gdmFsdWUsIGFuZFxuICAgIGxpbWl0IHRoYXQgcHJvZ3Jlc3MgdG8gd2l0aGluIDAtMS5cbiAgICBcbiAgICBAcGFyYW0gW251bWJlcl06IFZhbHVlIHRvIGZpbmQgcHJvZ3Jlc3Mgd2l0aGluIGdpdmVuIHJhbmdlXG4gICAgQHBhcmFtIFtudW1iZXJdOiBMb3dlciBsaW1pdCBcbiAgICBAcGFyYW0gW251bWJlcl06IFVwcGVyIGxpbWl0XG4gICAgQHJldHVybiBbbnVtYmVyXTogUHJvZ3Jlc3Mgb2YgdmFsdWUgd2l0aGluIHJhbmdlIGFzIGV4cHJlc3NlZCAwLTFcbiovXG52YXIgZ2V0UHJvZ3Jlc3NGcm9tVmFsdWUgPSBleHBvcnRzLmdldFByb2dyZXNzRnJvbVZhbHVlID0gZnVuY3Rpb24gKHZhbHVlLCBmcm9tLCB0bykge1xuICAgIHJldHVybiAodmFsdWUgLSBmcm9tKSAvICh0byAtIGZyb20pO1xufTtcblxuLypcbiAgICBPZmZzZXQgYmV0d2VlbiB0d28gb2JqZWN0cyBvZiBudW1iZXJzXG5cbiAgICBJZiBwcm9wZXJ0eSBpcyBmb3VuZCBpbiBiIG5vdCBwcmVzZW50IGluIGEsIGl0IHdpbGwgcmV0dXJuIGAwYCBmb3IgdGhhdCBwcm9wLlxuICAgIFxuICAgIEBwYXJhbSBbUG9pbnRdOiBGaXJzdCBvYmplY3RcbiAgICBAcGFyYW0gW1BvaW50XTogU2Vjb25kIG9iamVjdFxuICAgIEByZXR1cm4gW09mZnNldF06IERpc3RhbmNlIG1ldHJpY3MgYmV0d2VlbiB0d28gcG9pbnRzXG4qL1xudmFyIG9mZnNldCA9IGV4cG9ydHMub2Zmc2V0ID0gZnVuY3Rpb24gKGEsIGIpIHtcbiAgICB2YXIgb2Zmc2V0ID0ge307XG5cbiAgICBmb3IgKHZhciBrZXkgaW4gYikge1xuICAgICAgICBpZiAoYi5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgICBvZmZzZXRba2V5XSA9ICgwLCBfdXRpbHMuaGFzUHJvcGVydHkpKGEsIGtleSkgPyBiW2tleV0gLSBhW2tleV0gOiAwO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG9mZnNldDtcbn07XG5cbi8qXG4gICAgUG9pbnQgZnJvbSBhbmdsZSBhbmQgZGlzdGFuY2VcbiAgICBcbiAgICBAcGFyYW0gW29iamVjdF06IDJEIHBvaW50IG9mIG9yaWdpblxuICAgIEBwYXJhbSBbbnVtYmVyXTogQW5nbGUgZnJvbSBvcmlnaW5cbiAgICBAcGFyYW0gW251bWJlcl06IERpc3RhbmNlIGZyb20gb3JpZ2luXG4gICAgQHJldHVybiBbb2JqZWN0XTogQ2FsY3VsYXRlZCAyRCBwb2ludFxuKi9cbnZhciBwb2ludEZyb21BbmdsZUFuZERpc3RhbmNlID0gZXhwb3J0cy5wb2ludEZyb21BbmdsZUFuZERpc3RhbmNlID0gZnVuY3Rpb24gKG9yaWdpbiwgYW5nbGUsIGRpc3RhbmNlKSB7XG4gICAgYW5nbGUgPSBkZWdyZWVzVG9SYWRpYW5zKGFuZ2xlKTtcblxuICAgIHJldHVybiB7XG4gICAgICAgIHg6IGRpc3RhbmNlICogTWF0aC5jb3MoYW5nbGUpICsgb3JpZ2luLngsXG4gICAgICAgIHk6IGRpc3RhbmNlICogTWF0aC5zaW4oYW5nbGUpICsgb3JpZ2luLnlcbiAgICB9O1xufTtcblxuLypcbiAgICBDb252ZXJ0IHJhZGlhbnMgdG8gZGVncmVlc1xuICAgIFxuICAgIEBwYXJhbSBbbnVtYmVyXTogVmFsdWUgaW4gcmFkaWFuc1xuICAgIEByZXR1cm4gW251bWJlcl06IFZhbHVlIGluIGRlZ3JlZXNcbiovXG52YXIgcmFkaWFuc1RvRGVncmVlcyA9IGV4cG9ydHMucmFkaWFuc1RvRGVncmVlcyA9IGZ1bmN0aW9uIChyYWRpYW5zKSB7XG4gICAgcmV0dXJuIHJhZGlhbnMgKiAxODAgLyBNYXRoLlBJO1xufTtcblxuLypcbiAgICBSZXR1cm4gcmFuZG9tIG51bWJlciBiZXR3ZWVuIHJhbmdlXG4gICAgXG4gICAgQHBhcmFtIFtudW1iZXJdIChvcHRpb25hbCk6IE91dHB1dCBtaW5pbXVtXG4gICAgQHBhcmFtIFtudW1iZXJdIChvcHRpb25hbCk6IE91dHB1dCBtYXhpbXVtXG4gICAgQHJldHVybiBbbnVtYmVyXTogUmFuZG9tIG51bWJlciB3aXRoaW4gcmFuZ2UsIG9yIDAgYW5kIDEgaWYgbm9uZSBwcm92aWRlZFxuKi9cbnZhciByYW5kb20gPSBleHBvcnRzLnJhbmRvbSA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgbWluID0gYXJndW1lbnRzLmxlbmd0aCA8PSAwIHx8IGFyZ3VtZW50c1swXSA9PT0gdW5kZWZpbmVkID8gMCA6IGFyZ3VtZW50c1swXTtcbiAgICB2YXIgbWF4ID0gYXJndW1lbnRzLmxlbmd0aCA8PSAxIHx8IGFyZ3VtZW50c1sxXSA9PT0gdW5kZWZpbmVkID8gMSA6IGFyZ3VtZW50c1sxXTtcbiAgICByZXR1cm4gTWF0aC5yYW5kb20oKSAqIChtYXggLSBtaW4pICsgbWluO1xufTtcblxuLypcbiAgICBDYWxjdWxhdGUgcmVsYXRpdmUgdmFsdWVcbiAgICBcbiAgICBUYWtlcyB0aGUgb3BlcmF0b3IgYW5kIHZhbHVlIGZyb20gYSBzdHJpbmcsIGllIFwiKz01XCIsIGFuZCBhcHBsaWVzXG4gICAgdG8gdGhlIGN1cnJlbnQgdmFsdWUgdG8gcmVzb2x2ZSBhIG5ldyB0YXJnZXQuXG4gICAgXG4gICAgQHBhcmFtIFtudW1iZXJdOiBDdXJyZW50IHZhbHVlXG4gICAgQHBhcmFtIFtzdHJpbmddOiBSZWxhdGl2ZSB2YWx1ZVxuICAgIEByZXR1cm4gW251bWJlcl06IE5ldyB2YWx1ZVxuKi9cbnZhciByZWxhdGl2ZVZhbHVlID0gZXhwb3J0cy5yZWxhdGl2ZVZhbHVlID0gZnVuY3Rpb24gKGN1cnJlbnQsIHJlbGF0aXZlKSB7XG4gICAgdmFyIG5ld1ZhbHVlID0gY3VycmVudDtcbiAgICB2YXIgZXF1YXRpb24gPSByZWxhdGl2ZS5zcGxpdCgnPScpO1xuICAgIHZhciBvcGVyYXRvciA9IGVxdWF0aW9uWzBdO1xuXG4gICAgdmFyIF9zcGxpdFZhbHVlVW5pdCA9ICgwLCBfdXRpbHMuc3BsaXRWYWx1ZVVuaXQpKGVxdWF0aW9uWzFdKTtcblxuICAgIHZhciB1bml0ID0gX3NwbGl0VmFsdWVVbml0LnVuaXQ7XG4gICAgdmFyIHZhbHVlID0gX3NwbGl0VmFsdWVVbml0LnZhbHVlO1xuXG4gICAgdmFsdWUgPSBwYXJzZUZsb2F0KHZhbHVlKTtcblxuICAgIHN3aXRjaCAob3BlcmF0b3IpIHtcbiAgICAgICAgY2FzZSAnKyc6XG4gICAgICAgICAgICBuZXdWYWx1ZSArPSB2YWx1ZTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICctJzpcbiAgICAgICAgICAgIG5ld1ZhbHVlIC09IHZhbHVlO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJyonOlxuICAgICAgICAgICAgbmV3VmFsdWUgKj0gdmFsdWU7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnLyc6XG4gICAgICAgICAgICBuZXdWYWx1ZSAvPSB2YWx1ZTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIGlmICh1bml0KSB7XG4gICAgICAgIG5ld1ZhbHVlICs9IHVuaXQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIG5ld1ZhbHVlO1xufTtcblxuLypcbiAgICBSZXN0cmljdCB2YWx1ZSB0byByYW5nZVxuICAgIFxuICAgIFJldHVybiB2YWx1ZSB3aXRoaW4gdGhlIHJhbmdlIG9mIGxvd2VyTGltaXQgYW5kIHVwcGVyTGltaXRcbiAgICBcbiAgICBAcGFyYW0gW251bWJlcl06IFZhbHVlIHRvIGtlZXAgd2l0aGluIHJhbmdlXG4gICAgQHBhcmFtIFtudW1iZXJdOiBMb3dlciBsaW1pdCBvZiByYW5nZVxuICAgIEBwYXJhbSBbbnVtYmVyXTogVXBwZXIgbGltaXQgb2YgcmFuZ2VcbiAgICBAcmV0dXJuIFtudW1iZXJdOiBWYWx1ZSBhcyBsaW1pdGVkIHdpdGhpbiBnaXZlbiByYW5nZVxuKi9cbnZhciByZXN0cmljdCA9IGV4cG9ydHMucmVzdHJpY3QgPSBmdW5jdGlvbiAodmFsdWUsIG1pbiwgbWF4KSB7XG4gICAgcmV0dXJuIE1hdGgubWF4KE1hdGgubWluKHZhbHVlLCBtYXgpLCBtaW4pO1xufTtcblxuLypcbiAgICBGcmFtZXJhdGUtaW5kZXBlbmRlbnQgc21vb3RoaW5nXG5cbiAgICBAcGFyYW0gW251bWJlcl06IE5ldyB2YWx1ZVxuICAgIEBwYXJhbSBbbnVtYmVyXTogT2xkIHZhbHVlXG4gICAgQHBhcmFtIFtudW1iZXJdOiBGcmFtZSBkdXJhdGlvblxuICAgIEBwYXJhbSBbbnVtYmVyXSAob3B0aW9uYWwpOiBTbW9vdGhpbmcgKDAgaXMgbm9uZSlcbiovXG52YXIgc21vb3RoID0gZXhwb3J0cy5zbW9vdGggPSBmdW5jdGlvbiAobmV3VmFsdWUsIG9sZFZhbHVlLCBkdXJhdGlvbikge1xuICAgIHZhciBzbW9vdGhpbmcgPSBhcmd1bWVudHMubGVuZ3RoIDw9IDMgfHwgYXJndW1lbnRzWzNdID09PSB1bmRlZmluZWQgPyAwIDogYXJndW1lbnRzWzNdO1xuICAgIHJldHVybiAoMCwgX3V0aWxzLnRvRGVjaW1hbCkob2xkVmFsdWUgKyBkdXJhdGlvbiAqIChuZXdWYWx1ZSAtIG9sZFZhbHVlKSAvIE1hdGgubWF4KHNtb290aGluZywgZHVyYXRpb24pKTtcbn07XG5cbi8qXG4gICAgQ29udmVydCB4IHBlciBzZWNvbmQgdG8gcGVyIGZyYW1lIHZlbG9jaXR5IGJhc2VkIG9uIGZwc1xuICAgIFxuICAgIEBwYXJhbSBbbnVtYmVyXTogVW5pdCBwZXIgc2Vjb25kXG4gICAgQHBhcmFtIFtudW1iZXJdOiBGcmFtZSBkdXJhdGlvbiBpbiBtc1xuKi9cbnZhciBzcGVlZFBlckZyYW1lID0gZXhwb3J0cy5zcGVlZFBlckZyYW1lID0gZnVuY3Rpb24gKHhwcywgZnJhbWVEdXJhdGlvbikge1xuICAgIHJldHVybiAoMCwgX3V0aWxzLmlzTnVtKSh4cHMpID8geHBzIC8gKDEwMDAgLyBmcmFtZUR1cmF0aW9uKSA6IDA7XG59O1xuXG4vKlxuICAgIENvbnZlcnQgdmVsb2NpdHkgaW50byB2ZWxpY2l0eSBwZXIgc2Vjb25kXG4gICAgXG4gICAgQHBhcmFtIFtudW1iZXJdOiBVbml0IHBlciBmcmFtZVxuICAgIEBwYXJhbSBbbnVtYmVyXTogRnJhbWUgZHVyYXRpb24gaW4gbXNcbiovXG52YXIgc3BlZWRQZXJTZWNvbmQgPSBleHBvcnRzLnNwZWVkUGVyU2Vjb25kID0gZnVuY3Rpb24gKHZlbG9jaXR5LCBmcmFtZUR1cmF0aW9uKSB7XG4gICAgcmV0dXJuIHZlbG9jaXR5ICogKDEwMDAgLyBmcmFtZUR1cmF0aW9uKTtcbn07XG5cbi8qXG4gICAgQ3JlYXRlIHN0ZXBwZWQgdmVyc2lvbiBvZiAwLTEgcHJvZ3Jlc3NcbiAgICBcbiAgICBAcGFyYW0gW251bWJlcl06IEN1cnJlbnQgdmFsdWVcbiAgICBAcGFyYW0gW2ludF06IE51bWJlciBvZiBzdGVwc1xuICAgIEByZXR1cm4gW251bWJlcl06IFN0ZXBwZWQgdmFsdWVcbiovXG52YXIgc3RlcFByb2dyZXNzID0gZXhwb3J0cy5zdGVwUHJvZ3Jlc3MgPSBmdW5jdGlvbiAocHJvZ3Jlc3MsIHN0ZXBzKSB7XG4gICAgdmFyIHNlZ21lbnQgPSAxIC8gKHN0ZXBzIC0gMSk7XG4gICAgdmFyIHRhcmdldCA9IDEgLSAxIC8gc3RlcHM7XG4gICAgdmFyIHByb2dyZXNzT2ZUYXJnZXQgPSBNYXRoLm1pbihwcm9ncmVzcyAvIHRhcmdldCwgMSk7XG5cbiAgICByZXR1cm4gTWF0aC5mbG9vcihwcm9ncmVzc09mVGFyZ2V0IC8gc2VnbWVudCkgKiBzZWdtZW50O1xufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbk55WXk5cGJtTXZZMkZzWXk1cWN5SmRMQ0p1WVcxbGN5STZXMTBzSW0xaGNIQnBibWR6SWpvaU96czdPenM3TzBGQlQwRXNTVUZCVFN4VlFVRlZMRWRCUVVjN1FVRkRaaXhMUVVGRExFVkJRVVVzUTBGQlF6dEJRVU5LTEV0QlFVTXNSVUZCUlN4RFFVRkRPMEZCUTBvc1MwRkJReXhGUVVGRkxFTkJRVU03UTBGRFVDeERRVUZET3p0QlFVVkdMRWxCUVUwc1ZVRkJWU3hIUVVGSExGVkJRVU1zUTBGQlF5eEZRVUZGTEVOQlFVTTdWMEZCU3l4SlFVRkpMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTTdRMEZCUVRzN096czdPenM3T3pzN08wRkJRVU1zUVVGWmRFTXNTVUZCVFN4TFFVRkxMRmRCUVV3c1MwRkJTeXhIUVVGSExGVkJRVU1zUTBGQlF6dFJRVUZGTEVOQlFVTXNlVVJCUVVjc1ZVRkJWVHRYUVVGTExHZENRVUZuUWl4RFFVRkRMRWxCUVVrc1EwRkJReXhMUVVGTExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNc1EwRkJReXhGUVVGRkxFTkJRVU1zUTBGQlF5eERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRE8wTkJRVUU3T3pzN096czdPMEZCUVVNc1FVRlJlRVlzU1VGQlRTeG5Ra0ZCWjBJc1YwRkJhRUlzWjBKQlFXZENMRWRCUVVjc1ZVRkJReXhQUVVGUE8xZEJRVXNzVDBGQlR5eEhRVUZITEVsQlFVa3NRMEZCUXl4RlFVRkZMRWRCUVVjc1IwRkJSenREUVVGQk96czdPenM3T3pzN096czdPenM3T3pzN096dEJRVUZETEVGQmIwSTVSQ3hKUVVGTkxFMUJRVTBzVjBGQlRpeE5RVUZOTEVkQlFVY3NWVUZCUXl4RFFVRkRMRVZCUVVVc1EwRkJReXhGUVVGRkxGRkJRVkU3VjBGQlN5eERRVUZETEVkQlFVa3NRMEZCUXl4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGQkxFZEJRVWtzVVVGQlVTeEJRVUZETzBOQlFVRTdPenM3T3pzN096czdPMEZCUVVNc1FVRlhOVVFzU1VGQlRTeFJRVUZSTEZkQlFWSXNVVUZCVVN4SFFVRkhMRlZCUVVNc1EwRkJReXhGUVVGeFFqdFJRVUZ1UWl4RFFVRkRMSGxFUVVGSExGVkJRVlU3T3p0QlFVVjBReXhSUVVGSkxGZEJhRVZLTEV0QlFVc3NSVUZuUlVzc1EwRkJReXhEUVVGRExFVkJRVVU3UVVGRFZpeGxRVUZQTEZWQlFWVXNRMEZCUXl4RFFVRkRMRVZCUVVVc1EwRkJReXhEUVVGRE96czdRVUZCUXl4TFFVY3pRaXhOUVVGTk8wRkJRMGdzWjBKQlFVMHNUVUZCVFN4SFFVRkhMRlZCUVZVc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eEZRVUZGTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJRenRCUVVOd1F5eG5Ra0ZCVFN4TlFVRk5MRWRCUVVjc1ZVRkJWU3hEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVWQlFVVXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRE8wRkJRM0JETEdkQ1FVRk5MRTFCUVUwc1IwRkJSeXhCUVVGRExGZEJka1Z3UWl4TFFVRkxMRVZCZFVWeFFpeERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRWRCUVVrc1ZVRkJWU3hEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVWQlFVVXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF6czdRVUZGZGtRc2JVSkJRVThzU1VGQlNTeERRVUZETEVsQlFVa3NRMEZCUXl4VFFVRkRMRTFCUVUwc1JVRkJTU3hEUVVGRExHRkJRVXNzVFVGQlRTeEZRVUZKTEVOQlFVTXNRMEZCUXl4WlFVRkpMRTFCUVUwc1JVRkJTU3hEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETzFOQlEyNUZPME5CUTBvN096czdPenM3T3pzN096dEJRVUZETEVGQldVc3NTVUZCVFN4SlFVRkpMRmRCUVVvc1NVRkJTU3hIUVVGSExGVkJRVU1zVVVGQlVTeEZRVUZGTEVsQlFVa3NSVUZCUlN4RlFVRkZMRVZCUVVVc1NVRkJTU3hGUVVGTE8wRkJRemxETEZGQlFVMHNaVUZCWlN4SFFVRkhMRkZCUVZFc1EwRkJReXhSUVVGUkxFVkJRVVVzUTBGQlF5eEZRVUZGTEVOQlFVTXNRMEZCUXl4RFFVRkRPMEZCUTJwRUxGRkJRVTBzWVVGQllTeEhRVUZITEVsQlFVa3NRMEZCUXl4bFFVRmxMRU5CUVVNc1EwRkJRenM3UVVGRk5VTXNWMEZCVHl4dlFrRkJiMElzUTBGQlF5eGhRVUZoTEVWQlFVVXNTVUZCU1N4RlFVRkZMRVZCUVVVc1EwRkJReXhEUVVGRE8wTkJRM2hFT3pzN096czdPenM3T3p0QlFVRkRMRUZCVjBzc1NVRkJUU3hWUVVGVkxGZEJRVllzVlVGQlZTeEhRVUZITEZWQlFVTXNRMEZCUXl4RlFVRkZMRU5CUVVNN1YwRkJTeXhKUVVGSkxFTkJRVU1zU1VGQlNTeERRVUZETEVGQlFVTXNRMEZCUXl4SFFVRkhMRU5CUVVNc1IwRkJTeXhEUVVGRExFZEJRVWNzUTBGQlF5eEJRVUZETEVOQlFVTTdRMEZCUVRzN096czdPenM3T3pzN096dEJRVUZETEVGQllURkVMRWxCUVUwc2IwSkJRVzlDTEZkQlFYQkNMRzlDUVVGdlFpeEhRVUZITEZWQlFVTXNVVUZCVVN4RlFVRkZMRWxCUVVrc1JVRkJSU3hGUVVGRk8xZEJRVXNzUVVGQlF5eERRVUZGTEZGQlFWRXNSMEZCUnl4SlFVRkpMRWRCUVVzc1VVRkJVU3hIUVVGSExFVkJRVVVzUVVGQlF5eEhRVUZITEVsQlFVazdRMEZCUVRzN096czdPenM3T3pzN096czdRVUZCUXl4QlFXTnNSeXhKUVVGTkxHOUNRVUZ2UWl4WFFVRndRaXh2UWtGQmIwSXNSMEZCUnl4VlFVRkRMRXRCUVVzc1JVRkJSU3hKUVVGSkxFVkJRVVVzUlVGQlJUdFhRVUZMTEVOQlFVTXNTMEZCU3l4SFFVRkhMRWxCUVVrc1EwRkJRU3hKUVVGTExFVkJRVVVzUjBGQlJ5eEpRVUZKTEVOQlFVRXNRVUZCUXp0RFFVRkJPenM3T3pzN096czdPenRCUVVGRExFRkJWeTlGTEVsQlFVMHNUVUZCVFN4WFFVRk9MRTFCUVUwc1IwRkJSeXhWUVVGRExFTkJRVU1zUlVGQlJTeERRVUZETEVWQlFVczdRVUZETlVJc1VVRkJUU3hOUVVGTkxFZEJRVWNzUlVGQlJTeERRVUZET3p0QlFVVnNRaXhUUVVGTExFbEJRVWtzUjBGQlJ5eEpRVUZKTEVOQlFVTXNSVUZCUlR0QlFVTm1MRmxCUVVrc1EwRkJReXhEUVVGRExHTkJRV01zUTBGQlF5eEhRVUZITEVOQlFVTXNSVUZCUlR0QlFVTjJRaXhyUWtGQlRTeERRVUZETEVkQlFVY3NRMEZCUXl4SFFVRkhMRmRCYmtwMFFpeFhRVUZYTEVWQmJVcDFRaXhEUVVGRExFVkJRVVVzUjBGQlJ5eERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRMRWRCUVVjc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF5eEhRVUZITEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNN1UwRkRNMFE3UzBGRFNqczdRVUZGUkN4WFFVRlBMRTFCUVUwc1EwRkJRenREUVVOcVFqczdPenM3T3pzN096dEJRVUZETEVGQlZVc3NTVUZCVFN4NVFrRkJlVUlzVjBGQmVrSXNlVUpCUVhsQ0xFZEJRVWNzVlVGQlF5eE5RVUZOTEVWQlFVVXNTMEZCU3l4RlFVRkZMRkZCUVZFc1JVRkJTenRCUVVOc1JTeFRRVUZMTEVkQlFVY3NaMEpCUVdkQ0xFTkJRVU1zUzBGQlN5eERRVUZETEVOQlFVTTdPMEZCUldoRExGZEJRVTg3UVVGRFNDeFRRVUZETEVWQlFVVXNVVUZCVVN4SFFVRkhMRWxCUVVrc1EwRkJReXhIUVVGSExFTkJRVU1zUzBGQlN5eERRVUZETEVkQlFVY3NUVUZCVFN4RFFVRkRMRU5CUVVNN1FVRkRlRU1zVTBGQlF5eEZRVUZGTEZGQlFWRXNSMEZCUnl4SlFVRkpMRU5CUVVNc1IwRkJSeXhEUVVGRExFdEJRVXNzUTBGQlF5eEhRVUZITEUxQlFVMHNRMEZCUXl4RFFVRkRPMHRCUXpORExFTkJRVU03UTBGRFREczdPenM3T3pzN1FVRkJReXhCUVZGTExFbEJRVTBzWjBKQlFXZENMRmRCUVdoQ0xHZENRVUZuUWl4SFFVRkhMRlZCUVVNc1QwRkJUenRYUVVGTExFOUJRVThzUjBGQlJ5eEhRVUZITEVkQlFVY3NTVUZCU1N4RFFVRkRMRVZCUVVVN1EwRkJRVHM3T3pzN096czdPMEZCUVVNc1FVRlRPVVFzU1VGQlRTeE5RVUZOTEZkQlFVNHNUVUZCVFN4SFFVRkhPMUZCUVVNc1IwRkJSeXg1UkVGQlJ5eERRVUZETzFGQlFVVXNSMEZCUnl4NVJFRkJSeXhEUVVGRE8xZEJRVXNzU1VGQlNTeERRVUZETEUxQlFVMHNSVUZCUlN4SlFVRkpMRWRCUVVjc1IwRkJSeXhIUVVGSExFTkJRVUVzUVVGQlF5eEhRVUZITEVkQlFVYzdRMEZCUVRzN096czdPenM3T3pzN08wRkJRVU1zUVVGWmRrVXNTVUZCVFN4aFFVRmhMRmRCUVdJc1lVRkJZU3hIUVVGSExGVkJRVU1zVDBGQlR5eEZRVUZGTEZGQlFWRXNSVUZCU3p0QlFVTm9SQ3hSUVVGSkxGRkJRVkVzUjBGQlJ5eFBRVUZQTEVOQlFVTTdRVUZEZGtJc1VVRkJUU3hSUVVGUkxFZEJRVWNzVVVGQlVTeERRVUZETEV0QlFVc3NRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJRenRCUVVOeVF5eFJRVUZOTEZGQlFWRXNSMEZCUnl4UlFVRlJMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU03T3pCQ1FVTlFMRmRCZUUxMFFpeGpRVUZqTEVWQmQwMTFRaXhSUVVGUkxFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTTdPMUZCUVRORExFbEJRVWtzYlVKQlFVb3NTVUZCU1R0UlFVRkZMRXRCUVVzc2JVSkJRVXdzUzBGQlN6czdRVUZGYWtJc1UwRkJTeXhIUVVGSExGVkJRVlVzUTBGQlF5eExRVUZMTEVOQlFVTXNRMEZCUXpzN1FVRkZNVUlzV1VGQlVTeFJRVUZSTzBGQlEyaENMR0ZCUVVzc1IwRkJSenRCUVVOS0xHOUNRVUZSTEVsQlFVa3NTMEZCU3l4RFFVRkRPMEZCUTJ4Q0xHdENRVUZOTzBGQlFVRXNRVUZEVml4aFFVRkxMRWRCUVVjN1FVRkRTaXh2UWtGQlVTeEpRVUZKTEV0QlFVc3NRMEZCUXp0QlFVTnNRaXhyUWtGQlRUdEJRVUZCTEVGQlExWXNZVUZCU3l4SFFVRkhPMEZCUTBvc2IwSkJRVkVzU1VGQlNTeExRVUZMTEVOQlFVTTdRVUZEYkVJc2EwSkJRVTA3UVVGQlFTeEJRVU5XTEdGQlFVc3NSMEZCUnp0QlFVTktMRzlDUVVGUkxFbEJRVWtzUzBGQlN5eERRVUZETzBGQlEyeENMR3RDUVVGTk8wRkJRVUVzUzBGRFZEczdRVUZGUkN4UlFVRkpMRWxCUVVrc1JVRkJSVHRCUVVOT0xHZENRVUZSTEVsQlFVa3NTVUZCU1N4RFFVRkRPMHRCUTNCQ096dEJRVVZFTEZkQlFVOHNVVUZCVVN4RFFVRkRPME5CUTI1Q096czdPenM3T3pzN096czdRVUZCUXl4QlFWbExMRWxCUVUwc1VVRkJVU3hYUVVGU0xGRkJRVkVzUjBGQlJ5eFZRVUZETEV0QlFVc3NSVUZCUlN4SFFVRkhMRVZCUVVVc1IwRkJSenRYUVVGTExFbEJRVWtzUTBGQlF5eEhRVUZITEVOQlFVTXNTVUZCU1N4RFFVRkRMRWRCUVVjc1EwRkJReXhMUVVGTExFVkJRVVVzUjBGQlJ5eERRVUZETEVWQlFVVXNSMEZCUnl4RFFVRkRPME5CUVVFN096czdPenM3T3pzN1FVRkJReXhCUVZVeFJTeEpRVUZOTEUxQlFVMHNWMEZCVGl4TlFVRk5MRWRCUVVjc1ZVRkJReXhSUVVGUkxFVkJRVVVzVVVGQlVTeEZRVUZGTEZGQlFWRTdVVUZCUlN4VFFVRlRMSGxFUVVGSExFTkJRVU03VjBGQlN5eFhRWEpRYmtVc1UwRkJVeXhGUVhGUWIwVXNVVUZCVVN4SFFVRkpMRkZCUVZFc1NVRkJTU3hSUVVGUkxFZEJRVWNzVVVGQlVTeERRVUZCTEVGQlFVTXNSMEZCUnl4SlFVRkpMRU5CUVVNc1IwRkJSeXhEUVVGRExGTkJRVk1zUlVGQlJTeFJRVUZSTEVOQlFVTXNRVUZCUXl4RFFVRkRPME5CUVVFN096czdPenM3TzBGQlFVTXNRVUZSZWtvc1NVRkJUU3hoUVVGaExGZEJRV0lzWVVGQllTeEhRVUZITEZWQlFVTXNSMEZCUnl4RlFVRkZMR0ZCUVdFN1YwRkJTeXhCUVVGRExGZEJMMUJzUkN4TFFVRkxMRVZCSzFCdFJDeEhRVUZITEVOQlFVTXNSMEZCU1N4SFFVRkhMRWxCUVVrc1NVRkJTU3hIUVVGSExHRkJRV0VzUTBGQlFTeEJRVUZETEVkQlFVY3NRMEZCUXp0RFFVRkJPenM3T3pzN096dEJRVUZETEVGQlVUbEdMRWxCUVUwc1kwRkJZeXhYUVVGa0xHTkJRV01zUjBGQlJ5eFZRVUZETEZGQlFWRXNSVUZCUlN4aFFVRmhPMWRCUVVzc1VVRkJVU3hKUVVGSkxFbEJRVWtzUjBGQlJ5eGhRVUZoTEVOQlFVRXNRVUZCUXp0RFFVRkJPenM3T3pzN096czdRVUZCUXl4QlFWTjBSaXhKUVVGTkxGbEJRVmtzVjBGQldpeFpRVUZaTEVkQlFVY3NWVUZCUXl4UlFVRlJMRVZCUVVVc1MwRkJTeXhGUVVGTE8wRkJRemRETEZGQlFVMHNUMEZCVHl4SFFVRkhMRU5CUVVNc1NVRkJTU3hMUVVGTExFZEJRVWNzUTBGQlF5eERRVUZCTEVGQlFVTXNRMEZCUXp0QlFVTm9ReXhSUVVGTkxFMUJRVTBzUjBGQlJ5eERRVUZETEVkQlFVa3NRMEZCUXl4SFFVRkhMRXRCUVVzc1FVRkJReXhEUVVGRE8wRkJReTlDTEZGQlFVMHNaMEpCUVdkQ0xFZEJRVWNzU1VGQlNTeERRVUZETEVkQlFVY3NRMEZCUXl4UlFVRlJMRWRCUVVjc1RVRkJUU3hGUVVGRkxFTkJRVU1zUTBGQlF5eERRVUZET3p0QlFVVjRSQ3hYUVVGUExFbEJRVWtzUTBGQlF5eExRVUZMTEVOQlFVTXNaMEpCUVdkQ0xFZEJRVWNzVDBGQlR5eERRVUZETEVkQlFVY3NUMEZCVHl4RFFVRkRPME5CUXpORUxFTkJRVU1pTENKbWFXeGxJam9pWTJGc1l5NXFjeUlzSW5OdmRYSmpaVkp2YjNRaU9pSXZWWE5sY25NdlRXRjBkRkJsY25KNUwxTnBkR1Z6TDNCdmNHMXZkR2x2YmlJc0luTnZkWEpqWlhORGIyNTBaVzUwSWpwYkltbHRjRzl5ZENCN1hHNGdJQ0FnYUdGelVISnZjR1Z5ZEhrc1hHNGdJQ0FnYVhOT2RXMHNYRzRnSUNBZ2MzQnNhWFJXWVd4MVpWVnVhWFFzWEc0Z0lDQWdkRzlFWldOcGJXRnNYRzU5SUdaeWIyMGdKeTR2ZFhScGJITW5PMXh1WEc1amIyNXpkQ0JhUlZKUFgxQlBTVTVVSUQwZ2UxeHVJQ0FnSUhnNklEQXNYRzRnSUNBZ2VUb2dNQ3hjYmlBZ0lDQjZPaUF3WEc1OU8xeHVYRzVqYjI1emRDQmthWE4wWVc1alpURkVJRDBnS0dFc0lHSXBJRDArSUUxaGRHZ3VZV0p6S0dFZ0xTQmlLVHRjYmx4dUx5cGNiaUFnSUNCQmJtZHNaU0JpWlhSM1pXVnVJSEJ2YVc1MGMxeHVJQ0FnSUZ4dUlDQWdJRlJ5WVc1emJHRjBaWE1nZEdobElHaDVjRzkwYUdWMGFXTmhiQ0JzYVc1bElITnZJSFJvWVhRZ2RHaGxJQ2RtY205dEp5QmpiMjl5WkdsdVlYUmxjMXh1SUNBZ0lHRnlaU0JoZENBd0xEQXNJSFJvWlc0Z2NtVjBkWEp1SUhSb1pTQmhibWRzWlNCMWMybHVaeUF1WVc1bmJHVkdjbTl0UTJWdWRHVnlLQ2xjYmlBZ0lDQmNiaUFnSUNCQWNHRnlZVzBnVzI5aWFtVmpkRjA2SUZnZ1lXNWtJRmtnWTI5dmNtUnBibUYwWlhNZ2IyWWdabkp2YlNCd2IybHVkRnh1SUNBZ0lFQndZWEpoYlNCYmIySnFaV04wWFRvZ1dDQmhibVFnV1NCamIzSmthVzVoZEdWeklHOW1JSFJ2SUhCdmFXNTBYRzRnSUNBZ1FISmxkSFZ5YmlCYmNtRmthV0Z1WFRvZ1FXNW5iR1VnWW1WMGQyVmxiaUIwYUdVZ2RIZHZJSEJ2YVc1MGN5QnBiaUJ5WVdScFlXNXpYRzRxTDF4dVpYaHdiM0owSUdOdmJuTjBJR0Z1WjJ4bElEMGdLR0VzSUdJZ1BTQmFSVkpQWDFCUFNVNVVLU0E5UGlCeVlXUnBZVzV6Vkc5RVpXZHlaV1Z6S0UxaGRHZ3VZWFJoYmpJb1lTNTRJQzBnWWk1NExDQmhMbmtnTFNCaUxua3BLVHRjYmx4dUx5cGNiaUFnSUNCRGIyNTJaWEowSUdSbFozSmxaWE1nZEc4Z2NtRmthV0Z1YzF4dUlDQWdJRnh1SUNBZ0lFQndZWEpoYlNCYmJuVnRZbVZ5WFRvZ1ZtRnNkV1VnYVc0Z1pHVm5jbVZsYzF4dUlDQWdJRUJ5WlhSMWNtNGdXMjUxYldKbGNsMDZJRlpoYkhWbElHbHVJSEpoWkdsaGJuTmNiaW92WEc1bGVIQnZjblFnWTI5dWMzUWdaR1ZuY21WbGMxUnZVbUZrYVdGdWN5QTlJQ2hrWldkeVpXVnpLU0E5UGlCa1pXZHlaV1Z6SUNvZ1RXRjBhQzVRU1NBdklERTRNRHRjYmx4dUx5cGNiaUFnSUNCRWFXeGhkR1ZjYmlBZ0lDQmNiaUFnSUNCRGFHRnVaMlVnZEdobElIQnliMmR5WlhOemFXOXVJR0psZEhkbFpXNGdZU0JoYm1RZ1lpQmhZMk52Y21ScGJtY2dkRzhnWkdsc1lYUnBiMjR1WEc0Z0lDQWdYRzRnSUNBZ1UyOGdaR2xzWVhScGIyNGdQU0F3TGpVZ2QyOTFiR1FnWTJoaGJtZGxYRzRnSUNBZ1hHNGdJQ0FnWVNBdExTMHRMUzB0TFMwZ1lseHVJQ0FnSUZ4dUlDQWdJSFJ2WEc0Z0lDQWdYRzRnSUNBZ1lTQXRMUzB0SUdKY2JpQWdJQ0JjYmlBZ0lDQkFjR0Z5WVcwZ1cyNTFiV0psY2wwNklGQnlaWFpwYjNWeklIWmhiSFZsWEc0Z0lDQWdRSEJoY21GdElGdHVkVzFpWlhKZE9pQkRkWEp5Wlc1MElIWmhiSFZsWEc0Z0lDQWdRSEJoY21GdElGdHVkVzFpWlhKZE9pQkVhV3hoZEdVZ2NISnZaM0psYzNNZ1lua2dlRnh1SUNBZ0lFQnlaWFIxY200Z1cyNTFiV0psY2wwNklGQnlaWFpwYjNWeklIWmhiSFZsSUhCc2RYTWdkR2hsSUdScGJHRjBaV1FnWkdsbVptVnlaVzVqWlZ4dUtpOWNibVY0Y0c5eWRDQmpiMjV6ZENCa2FXeGhkR1VnUFNBb1lTd2dZaXdnWkdsc1lYUnBiMjRwSUQwK0lHRWdLeUFvS0dJZ0xTQmhLU0FxSUdScGJHRjBhVzl1S1R0Y2JseHVMeXBjYmlBZ0lDQkVhWE4wWVc1alpWeHVJQ0FnSUZ4dUlDQWdJRkpsZEhWeWJuTWdkR2hsSUdScGMzUmhibU5sSUdKbGRIZGxaVzRnZEhkdklHNGdaR2x0Wlc1emFXOXVZV3dnY0c5cGJuUnpMbHh1SUNBZ0lGeHVJQ0FnSUVCd1lYSmhiU0JiYjJKcVpXTjBMMjUxYldKbGNsMDZJSGdnWVc1a0lIa2diM0lnYW5WemRDQjRJRzltSUhCdmFXNTBJRUZjYmlBZ0lDQkFjR0Z5WVcwZ1cyOWlhbVZqZEM5dWRXMWlaWEpkT2lBb2IzQjBhVzl1WVd3cE9pQjRJR0Z1WkNCNUlHOXlJR3AxYzNRZ2VDQnZaaUJ3YjJsdWRDQkNYRzRnSUNBZ1FISmxkSFZ5YmlCYmJuVnRZbVZ5WFRvZ1ZHaGxJR1JwYzNSaGJtTmxJR0psZEhkbFpXNGdkR2hsSUhSM2J5QndiMmx1ZEhOY2Jpb3ZYRzVsZUhCdmNuUWdZMjl1YzNRZ1pHbHpkR0Z1WTJVZ1BTQW9ZU3dnWWlBOUlGcEZVazlmVUU5SlRsUXBJRDArSUh0Y2JpQWdJQ0F2THlBeFJDQmthVzFsYm5OcGIyNXpYRzRnSUNBZ2FXWWdLR2x6VG5WdEtHRXBLU0I3WEc0Z0lDQWdJQ0FnSUhKbGRIVnliaUJrYVhOMFlXNWpaVEZFS0dFc0lHSXBPMXh1WEc0Z0lDQWdMeThnVFhWc2RHa3RaR2x0Wlc1emFXOXVZV3hjYmlBZ0lDQjlJR1ZzYzJVZ2UxeHVJQ0FnSUNBZ0lDQmpiMjV6ZENCNFJHVnNkR0VnUFNCa2FYTjBZVzVqWlRGRUtHRXVlQ3dnWWk1NEtUdGNiaUFnSUNBZ0lDQWdZMjl1YzNRZ2VVUmxiSFJoSUQwZ1pHbHpkR0Z1WTJVeFJDaGhMbmtzSUdJdWVTazdYRzRnSUNBZ0lDQWdJR052Ym5OMElIcEVaV3gwWVNBOUlDaHBjMDUxYlNoaExub3BLU0EvSUdScGMzUmhibU5sTVVRb1lTNTZMQ0JpTG5vcElEb2dNRHRjYmx4dUlDQWdJQ0FnSUNCeVpYUjFjbTRnVFdGMGFDNXpjWEowS0NoNFJHVnNkR0VnS2lvZ01pa2dLeUFvZVVSbGJIUmhJQ29xSURJcElDc2dLSHBFWld4MFlTQXFLaUF5S1NrN1hHNGdJQ0FnZlZ4dWZUdGNibHh1THlwY2JpQWdJQ0JGWVhObElIWmhiSFZsSUhkcGRHaHBiaUJ5WVc1blpXUWdjR0Z5WVcxbGRHVnljMXh1SUNBZ0lGeHVJQ0FnSUVCd1lYSmhiU0JiYm5WdFltVnlYVG9nVUhKdlozSmxjM01nWW1WMGQyVmxiaUF3SUdGdVpDQXhYRzRnSUNBZ1FIQmhjbUZ0SUZ0dWRXMWlaWEpkT2lCV1lXeDFaU0J2WmlBd0lIQnliMmR5WlhOelhHNGdJQ0FnUUhCaGNtRnRJRnR1ZFcxaVpYSmRPaUJXWVd4MVpTQnZaaUF4SUhCeWIyZHlaWE56WEc0Z0lDQWdRSEJoY21GdElGdHpkSEpwYm1jZ2ZId2dablZ1WTNScGIyNWRPaUJPWVcxbElHOW1JSEJ5WlhObGRDQmxZWE5wYm1kY2JpQWdJQ0FnSUNBZ2RHOGdkWE5sSUc5eUlHZGxibVZ5WVhSbFpDQmxZWE5wYm1jZ1puVnVZM1JwYjI1Y2JpQWdJQ0JBY21WMGRYSnVJRnR1ZFcxaVpYSmRPaUJXWVd4MVpTQnZaaUJsWVhObFpDQndjbTluY21WemN5QnBiaUJ5WVc1blpWeHVLaThnWEc1bGVIQnZjblFnWTI5dWMzUWdaV0Z6WlNBOUlDaHdjbTluY21WemN5d2dabkp2YlN3Z2RHOHNJR1ZoYzJVcElEMCtJSHRjYmlBZ0lDQmpiMjV6ZENCd2NtOW5jbVZ6YzB4cGJXbDBaV1FnUFNCeVpYTjBjbWxqZENod2NtOW5jbVZ6Y3l3Z01Dd2dNU2s3WEc0Z0lDQWdZMjl1YzNRZ1pXRnpaV1JRY205bmNtVnpjeUE5SUdWaGMyVW9jSEp2WjNKbGMzTk1hVzFwZEdWa0tUdGNibHh1SUNBZ0lISmxkSFZ5YmlCblpYUldZV3gxWlVaeWIyMVFjbTluY21WemN5aGxZWE5sWkZCeWIyZHlaWE56TENCbWNtOXRMQ0IwYnlrN1hHNTlPMXh1SUZ4dUx5cGNiaUFnSUNCSWVYQnZkR1Z1ZFhObFhHNGdJQ0FnWEc0Z0lDQWdVbVYwZFhKdWN5QjBhR1VnYUhsd2IzUmxiblZ6WlN3Z2MybGtaU0JETENCbmFYWmxiaUIwYUdVZ2JHVnVaM1JvY3lCdlppQnphV1JsY3lCQklHRnVaQ0JDTGx4dUlDQWdJRnh1SUNBZ0lFQndZWEpoYlNCYmJuVnRZbVZ5WFRvZ1RHVnVaM1JvSUc5bUlFRmNiaUFnSUNCQWNHRnlZVzBnVzI1MWJXSmxjbDA2SUV4bGJtZDBhQ0J2WmlCQ1hHNGdJQ0FnUUhKbGRIVnliaUJiYm5WdFltVnlYVG9nVEdWdVozUm9JRzltSUVOY2Jpb3ZYRzVsZUhCdmNuUWdZMjl1YzNRZ2FIbHdiM1JsYm5WelpTQTlJQ2hoTENCaUtTQTlQaUJOWVhSb0xuTnhjblFvS0dFZ0tpQmhLU0FySUNoaUlDb2dZaWtwTzF4dVhHNHZLbHh1SUNBZ0lGWmhiSFZsSUdsdUlISmhibWRsSUdaeWIyMGdjSEp2WjNKbGMzTmNiaUFnSUNCY2JpQWdJQ0JIYVhabGJpQmhJR3h2ZDJWeUlHeHBiV2wwSUdGdVpDQmhiaUIxY0hCbGNpQnNhVzFwZEN3Z2QyVWdjbVYwZFhKdUlIUm9aU0IyWVd4MVpTQjNhWFJvYVc1Y2JpQWdJQ0IwYUdGMElISmhibWRsSUdGeklHVjRjSEpsYzNObFpDQmllU0J3Y205bmNtVnpjeUFvWVNCdWRXMWlaWElnWm5KdmJTQXdMVEVwWEc0Z0lDQWdYRzRnSUNBZ1FIQmhjbUZ0SUZ0dWRXMWlaWEpkT2lCVWFHVWdjSEp2WjNKbGMzTWdZbVYwZDJWbGJpQnNiM2RsY2lCaGJtUWdkWEJ3WlhJZ2JHbHRhWFJ6SUdWNGNISmxjM05sWkNBd0xURmNiaUFnSUNCQWNHRnlZVzBnVzI1MWJXSmxjbDA2SUV4dmQyVnlJR3hwYldsMElHOW1JSEpoYm1kbFhHNGdJQ0FnUUhCaGNtRnRJRnR1ZFcxaVpYSmRPaUJWY0hCbGNpQnNhVzFwZENCdlppQnlZVzVuWlZ4dUlDQWdJRUJ5WlhSMWNtNGdXMjUxYldKbGNsMDZJRlpoYkhWbElHRnpJR05oYkdOMWJHRjBaV1FnWm5KdmJTQndjbTluY21WemN5QjNhWFJvYVc0Z2NtRnVaMlVnS0c1dmRDQnNhVzFwZEdWa0lIZHBkR2hwYmlCeVlXNW5aU2xjYmlvdlhHNWxlSEJ2Y25RZ1kyOXVjM1FnWjJWMFZtRnNkV1ZHY205dFVISnZaM0psYzNNZ1BTQW9jSEp2WjNKbGMzTXNJR1p5YjIwc0lIUnZLU0E5UGlBb0xTQndjbTluY21WemN5QXFJR1p5YjIwcElDc2dLSEJ5YjJkeVpYTnpJQ29nZEc4cElDc2dabkp2YlR0Y2JseHVMeXBjYmlBZ0lDQlFjbTluY21WemN5QjNhWFJvYVc0Z1oybDJaVzRnY21GdVoyVmNiaUFnSUNCY2JpQWdJQ0JIYVhabGJpQmhJR3h2ZDJWeUlHeHBiV2wwSUdGdVpDQmhiaUIxY0hCbGNpQnNhVzFwZEN3Z2QyVWdjbVYwZFhKdUlIUm9aU0J3Y205bmNtVnpjMXh1SUNBZ0lDaGxlSEJ5WlhOelpXUWdZWE1nWVNCdWRXMWlaWElnTUMweEtTQnlaWEJ5WlhObGJuUmxaQ0JpZVNCMGFHVWdaMmwyWlc0Z2RtRnNkV1VzSUdGdVpGeHVJQ0FnSUd4cGJXbDBJSFJvWVhRZ2NISnZaM0psYzNNZ2RHOGdkMmwwYUdsdUlEQXRNUzVjYmlBZ0lDQmNiaUFnSUNCQWNHRnlZVzBnVzI1MWJXSmxjbDA2SUZaaGJIVmxJSFJ2SUdacGJtUWdjSEp2WjNKbGMzTWdkMmwwYUdsdUlHZHBkbVZ1SUhKaGJtZGxYRzRnSUNBZ1FIQmhjbUZ0SUZ0dWRXMWlaWEpkT2lCTWIzZGxjaUJzYVcxcGRDQmNiaUFnSUNCQWNHRnlZVzBnVzI1MWJXSmxjbDA2SUZWd2NHVnlJR3hwYldsMFhHNGdJQ0FnUUhKbGRIVnliaUJiYm5WdFltVnlYVG9nVUhKdlozSmxjM01nYjJZZ2RtRnNkV1VnZDJsMGFHbHVJSEpoYm1kbElHRnpJR1Y0Y0hKbGMzTmxaQ0F3TFRGY2Jpb3ZYRzVsZUhCdmNuUWdZMjl1YzNRZ1oyVjBVSEp2WjNKbGMzTkdjbTl0Vm1Gc2RXVWdQU0FvZG1Gc2RXVXNJR1p5YjIwc0lIUnZLU0E5UGlBb2RtRnNkV1VnTFNCbWNtOXRLU0F2SUNoMGJ5QXRJR1p5YjIwcE8xeHVYRzR2S2x4dUlDQWdJRTltWm5ObGRDQmlaWFIzWldWdUlIUjNieUJ2WW1wbFkzUnpJRzltSUc1MWJXSmxjbk5jYmx4dUlDQWdJRWxtSUhCeWIzQmxjblI1SUdseklHWnZkVzVrSUdsdUlHSWdibTkwSUhCeVpYTmxiblFnYVc0Z1lTd2dhWFFnZDJsc2JDQnlaWFIxY200Z1lEQmdJR1p2Y2lCMGFHRjBJSEJ5YjNBdVhHNGdJQ0FnWEc0Z0lDQWdRSEJoY21GdElGdFFiMmx1ZEYwNklFWnBjbk4wSUc5aWFtVmpkRnh1SUNBZ0lFQndZWEpoYlNCYlVHOXBiblJkT2lCVFpXTnZibVFnYjJKcVpXTjBYRzRnSUNBZ1FISmxkSFZ5YmlCYlQyWm1jMlYwWFRvZ1JHbHpkR0Z1WTJVZ2JXVjBjbWxqY3lCaVpYUjNaV1Z1SUhSM2J5QndiMmx1ZEhOY2Jpb3ZYRzVsZUhCdmNuUWdZMjl1YzNRZ2IyWm1jMlYwSUQwZ0tHRXNJR0lwSUQwK0lIdGNiaUFnSUNCamIyNXpkQ0J2Wm1aelpYUWdQU0I3ZlR0Y2JseHVJQ0FnSUdadmNpQW9iR1YwSUd0bGVTQnBiaUJpS1NCN1hHNGdJQ0FnSUNBZ0lHbG1JQ2hpTG1oaGMwOTNibEJ5YjNCbGNuUjVLR3RsZVNrcElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUc5bVpuTmxkRnRyWlhsZElEMGdhR0Z6VUhKdmNHVnlkSGtvWVN3Z2EyVjVLU0EvSUdKYmEyVjVYU0F0SUdGYmEyVjVYU0E2SURBN1hHNGdJQ0FnSUNBZ0lIMWNiaUFnSUNCOVhHNWNiaUFnSUNCeVpYUjFjbTRnYjJabWMyVjBPMXh1ZlR0Y2JseHVMeXBjYmlBZ0lDQlFiMmx1ZENCbWNtOXRJR0Z1WjJ4bElHRnVaQ0JrYVhOMFlXNWpaVnh1SUNBZ0lGeHVJQ0FnSUVCd1lYSmhiU0JiYjJKcVpXTjBYVG9nTWtRZ2NHOXBiblFnYjJZZ2IzSnBaMmx1WEc0Z0lDQWdRSEJoY21GdElGdHVkVzFpWlhKZE9pQkJibWRzWlNCbWNtOXRJRzl5YVdkcGJseHVJQ0FnSUVCd1lYSmhiU0JiYm5WdFltVnlYVG9nUkdsemRHRnVZMlVnWm5KdmJTQnZjbWxuYVc1Y2JpQWdJQ0JBY21WMGRYSnVJRnR2WW1wbFkzUmRPaUJEWVd4amRXeGhkR1ZrSURKRUlIQnZhVzUwWEc0cUwxeHVaWGh3YjNKMElHTnZibk4wSUhCdmFXNTBSbkp2YlVGdVoyeGxRVzVrUkdsemRHRnVZMlVnUFNBb2IzSnBaMmx1TENCaGJtZHNaU3dnWkdsemRHRnVZMlVwSUQwK0lIdGNiaUFnSUNCaGJtZHNaU0E5SUdSbFozSmxaWE5VYjFKaFpHbGhibk1vWVc1bmJHVXBPMXh1WEc0Z0lDQWdjbVYwZFhKdUlIdGNiaUFnSUNBZ0lDQWdlRG9nWkdsemRHRnVZMlVnS2lCTllYUm9MbU52Y3loaGJtZHNaU2tnS3lCdmNtbG5hVzR1ZUN4Y2JpQWdJQ0FnSUNBZ2VUb2daR2x6ZEdGdVkyVWdLaUJOWVhSb0xuTnBiaWhoYm1kc1pTa2dLeUJ2Y21sbmFXNHVlVnh1SUNBZ0lIMDdYRzU5TzF4dVhHNHZLbHh1SUNBZ0lFTnZiblpsY25RZ2NtRmthV0Z1Y3lCMGJ5QmtaV2R5WldWelhHNGdJQ0FnWEc0Z0lDQWdRSEJoY21GdElGdHVkVzFpWlhKZE9pQldZV3gxWlNCcGJpQnlZV1JwWVc1elhHNGdJQ0FnUUhKbGRIVnliaUJiYm5WdFltVnlYVG9nVm1Gc2RXVWdhVzRnWkdWbmNtVmxjMXh1S2k5Y2JtVjRjRzl5ZENCamIyNXpkQ0J5WVdScFlXNXpWRzlFWldkeVpXVnpJRDBnS0hKaFpHbGhibk1wSUQwK0lISmhaR2xoYm5NZ0tpQXhPREFnTHlCTllYUm9MbEJKTzF4dVhHNHZLbHh1SUNBZ0lGSmxkSFZ5YmlCeVlXNWtiMjBnYm5WdFltVnlJR0psZEhkbFpXNGdjbUZ1WjJWY2JpQWdJQ0JjYmlBZ0lDQkFjR0Z5WVcwZ1cyNTFiV0psY2wwZ0tHOXdkR2x2Ym1Gc0tUb2dUM1YwY0hWMElHMXBibWx0ZFcxY2JpQWdJQ0JBY0dGeVlXMGdXMjUxYldKbGNsMGdLRzl3ZEdsdmJtRnNLVG9nVDNWMGNIVjBJRzFoZUdsdGRXMWNiaUFnSUNCQWNtVjBkWEp1SUZ0dWRXMWlaWEpkT2lCU1lXNWtiMjBnYm5WdFltVnlJSGRwZEdocGJpQnlZVzVuWlN3Z2IzSWdNQ0JoYm1RZ01TQnBaaUJ1YjI1bElIQnliM1pwWkdWa1hHNHFMMXh1Wlhod2IzSjBJR052Ym5OMElISmhibVJ2YlNBOUlDaHRhVzRnUFNBd0xDQnRZWGdnUFNBeEtTQTlQaUJOWVhSb0xuSmhibVJ2YlNncElDb2dLRzFoZUNBdElHMXBiaWtnS3lCdGFXNDdYRzVjYmk4cVhHNGdJQ0FnUTJGc1kzVnNZWFJsSUhKbGJHRjBhWFpsSUhaaGJIVmxYRzRnSUNBZ1hHNGdJQ0FnVkdGclpYTWdkR2hsSUc5d1pYSmhkRzl5SUdGdVpDQjJZV3gxWlNCbWNtOXRJR0VnYzNSeWFXNW5MQ0JwWlNCY0lpczlOVndpTENCaGJtUWdZWEJ3YkdsbGMxeHVJQ0FnSUhSdklIUm9aU0JqZFhKeVpXNTBJSFpoYkhWbElIUnZJSEpsYzI5c2RtVWdZU0J1WlhjZ2RHRnlaMlYwTGx4dUlDQWdJRnh1SUNBZ0lFQndZWEpoYlNCYmJuVnRZbVZ5WFRvZ1EzVnljbVZ1ZENCMllXeDFaVnh1SUNBZ0lFQndZWEpoYlNCYmMzUnlhVzVuWFRvZ1VtVnNZWFJwZG1VZ2RtRnNkV1ZjYmlBZ0lDQkFjbVYwZFhKdUlGdHVkVzFpWlhKZE9pQk9aWGNnZG1Gc2RXVmNiaW92WEc1bGVIQnZjblFnWTI5dWMzUWdjbVZzWVhScGRtVldZV3gxWlNBOUlDaGpkWEp5Wlc1MExDQnlaV3hoZEdsMlpTa2dQVDRnZTF4dUlDQWdJR3hsZENCdVpYZFdZV3gxWlNBOUlHTjFjbkpsYm5RN1hHNGdJQ0FnWTI5dWMzUWdaWEYxWVhScGIyNGdQU0J5Wld4aGRHbDJaUzV6Y0d4cGRDZ25QU2NwTzF4dUlDQWdJR052Ym5OMElHOXdaWEpoZEc5eUlEMGdaWEYxWVhScGIyNWJNRjA3WEc0Z0lDQWdiR1YwSUhzZ2RXNXBkQ3dnZG1Gc2RXVWdmU0E5SUhOd2JHbDBWbUZzZFdWVmJtbDBLR1Z4ZFdGMGFXOXVXekZkS1R0Y2JseHVJQ0FnSUhaaGJIVmxJRDBnY0dGeWMyVkdiRzloZENoMllXeDFaU2s3WEc1Y2JpQWdJQ0J6ZDJsMFkyZ2dLRzl3WlhKaGRHOXlLU0I3WEc0Z0lDQWdZMkZ6WlNBbkt5YzZYRzRnSUNBZ0lDQWdJRzVsZDFaaGJIVmxJQ3M5SUhaaGJIVmxPMXh1SUNBZ0lDQWdJQ0JpY21WaGF6dGNiaUFnSUNCallYTmxJQ2N0SnpwY2JpQWdJQ0FnSUNBZ2JtVjNWbUZzZFdVZ0xUMGdkbUZzZFdVN1hHNGdJQ0FnSUNBZ0lHSnlaV0ZyTzF4dUlDQWdJR05oYzJVZ0p5b25PbHh1SUNBZ0lDQWdJQ0J1WlhkV1lXeDFaU0FxUFNCMllXeDFaVHRjYmlBZ0lDQWdJQ0FnWW5KbFlXczdYRzRnSUNBZ1kyRnpaU0FuTHljNlhHNGdJQ0FnSUNBZ0lHNWxkMVpoYkhWbElDODlJSFpoYkhWbE8xeHVJQ0FnSUNBZ0lDQmljbVZoYXp0Y2JpQWdJQ0I5WEc0Z0lDQWdYRzRnSUNBZ2FXWWdLSFZ1YVhRcElIdGNiaUFnSUNBZ0lDQWdibVYzVm1Gc2RXVWdLejBnZFc1cGREdGNiaUFnSUNCOVhHNWNiaUFnSUNCeVpYUjFjbTRnYm1WM1ZtRnNkV1U3WEc1OU8xeHVYRzR2S2x4dUlDQWdJRkpsYzNSeWFXTjBJSFpoYkhWbElIUnZJSEpoYm1kbFhHNGdJQ0FnWEc0Z0lDQWdVbVYwZFhKdUlIWmhiSFZsSUhkcGRHaHBiaUIwYUdVZ2NtRnVaMlVnYjJZZ2JHOTNaWEpNYVcxcGRDQmhibVFnZFhCd1pYSk1hVzFwZEZ4dUlDQWdJRnh1SUNBZ0lFQndZWEpoYlNCYmJuVnRZbVZ5WFRvZ1ZtRnNkV1VnZEc4Z2EyVmxjQ0IzYVhSb2FXNGdjbUZ1WjJWY2JpQWdJQ0JBY0dGeVlXMGdXMjUxYldKbGNsMDZJRXh2ZDJWeUlHeHBiV2wwSUc5bUlISmhibWRsWEc0Z0lDQWdRSEJoY21GdElGdHVkVzFpWlhKZE9pQlZjSEJsY2lCc2FXMXBkQ0J2WmlCeVlXNW5aVnh1SUNBZ0lFQnlaWFIxY200Z1cyNTFiV0psY2wwNklGWmhiSFZsSUdGeklHeHBiV2wwWldRZ2QybDBhR2x1SUdkcGRtVnVJSEpoYm1kbFhHNHFMMXh1Wlhod2IzSjBJR052Ym5OMElISmxjM1J5YVdOMElEMGdLSFpoYkhWbExDQnRhVzRzSUcxaGVDa2dQVDRnVFdGMGFDNXRZWGdvVFdGMGFDNXRhVzRvZG1Gc2RXVXNJRzFoZUNrc0lHMXBiaWs3WEc1Y2JpOHFYRzRnSUNBZ1JuSmhiV1Z5WVhSbExXbHVaR1Z3Wlc1a1pXNTBJSE50YjI5MGFHbHVaMXh1WEc0Z0lDQWdRSEJoY21GdElGdHVkVzFpWlhKZE9pQk9aWGNnZG1Gc2RXVmNiaUFnSUNCQWNHRnlZVzBnVzI1MWJXSmxjbDA2SUU5c1pDQjJZV3gxWlZ4dUlDQWdJRUJ3WVhKaGJTQmJiblZ0WW1WeVhUb2dSbkpoYldVZ1pIVnlZWFJwYjI1Y2JpQWdJQ0JBY0dGeVlXMGdXMjUxYldKbGNsMGdLRzl3ZEdsdmJtRnNLVG9nVTIxdmIzUm9hVzVuSUNnd0lHbHpJRzV2Ym1VcFhHNHFMMXh1Wlhod2IzSjBJR052Ym5OMElITnRiMjkwYUNBOUlDaHVaWGRXWVd4MVpTd2diMnhrVm1Gc2RXVXNJR1IxY21GMGFXOXVMQ0J6Ylc5dmRHaHBibWNnUFNBd0tTQTlQaUIwYjBSbFkybHRZV3dvYjJ4a1ZtRnNkV1VnS3lBb1pIVnlZWFJwYjI0Z0tpQW9ibVYzVm1Gc2RXVWdMU0J2YkdSV1lXeDFaU2tnTHlCTllYUm9MbTFoZUNoemJXOXZkR2hwYm1jc0lHUjFjbUYwYVc5dUtTa3BPMXh1WEc0dktseHVJQ0FnSUVOdmJuWmxjblFnZUNCd1pYSWdjMlZqYjI1a0lIUnZJSEJsY2lCbWNtRnRaU0IyWld4dlkybDBlU0JpWVhObFpDQnZiaUJtY0hOY2JpQWdJQ0JjYmlBZ0lDQkFjR0Z5WVcwZ1cyNTFiV0psY2wwNklGVnVhWFFnY0dWeUlITmxZMjl1WkZ4dUlDQWdJRUJ3WVhKaGJTQmJiblZ0WW1WeVhUb2dSbkpoYldVZ1pIVnlZWFJwYjI0Z2FXNGdiWE5jYmlvdlhHNWxlSEJ2Y25RZ1kyOXVjM1FnYzNCbFpXUlFaWEpHY21GdFpTQTlJQ2g0Y0hNc0lHWnlZVzFsUkhWeVlYUnBiMjRwSUQwK0lDaHBjMDUxYlNoNGNITXBLU0EvSUhod2N5QXZJQ2d4TURBd0lDOGdabkpoYldWRWRYSmhkR2x2YmlrZ09pQXdPMXh1WEc0dktseHVJQ0FnSUVOdmJuWmxjblFnZG1Wc2IyTnBkSGtnYVc1MGJ5QjJaV3hwWTJsMGVTQndaWElnYzJWamIyNWtYRzRnSUNBZ1hHNGdJQ0FnUUhCaGNtRnRJRnR1ZFcxaVpYSmRPaUJWYm1sMElIQmxjaUJtY21GdFpWeHVJQ0FnSUVCd1lYSmhiU0JiYm5WdFltVnlYVG9nUm5KaGJXVWdaSFZ5WVhScGIyNGdhVzRnYlhOY2Jpb3ZYRzVsZUhCdmNuUWdZMjl1YzNRZ2MzQmxaV1JRWlhKVFpXTnZibVFnUFNBb2RtVnNiMk5wZEhrc0lHWnlZVzFsUkhWeVlYUnBiMjRwSUQwK0lIWmxiRzlqYVhSNUlDb2dLREV3TURBZ0x5Qm1jbUZ0WlVSMWNtRjBhVzl1S1R0Y2JseHVMeXBjYmlBZ0lDQkRjbVZoZEdVZ2MzUmxjSEJsWkNCMlpYSnphVzl1SUc5bUlEQXRNU0J3Y205bmNtVnpjMXh1SUNBZ0lGeHVJQ0FnSUVCd1lYSmhiU0JiYm5WdFltVnlYVG9nUTNWeWNtVnVkQ0IyWVd4MVpWeHVJQ0FnSUVCd1lYSmhiU0JiYVc1MFhUb2dUblZ0WW1WeUlHOW1JSE4wWlhCelhHNGdJQ0FnUUhKbGRIVnliaUJiYm5WdFltVnlYVG9nVTNSbGNIQmxaQ0IyWVd4MVpWeHVLaTljYm1WNGNHOXlkQ0JqYjI1emRDQnpkR1Z3VUhKdlozSmxjM01nUFNBb2NISnZaM0psYzNNc0lITjBaWEJ6S1NBOVBpQjdYRzRnSUNBZ1kyOXVjM1FnYzJWbmJXVnVkQ0E5SURFZ0x5QW9jM1JsY0hNZ0xTQXhLVHRjYmlBZ0lDQmpiMjV6ZENCMFlYSm5aWFFnUFNBeElDMGdLREVnTHlCemRHVndjeWs3WEc0Z0lDQWdZMjl1YzNRZ2NISnZaM0psYzNOUFpsUmhjbWRsZENBOUlFMWhkR2d1YldsdUtIQnliMmR5WlhOeklDOGdkR0Z5WjJWMExDQXhLVHRjYmx4dUlDQWdJSEpsZEhWeWJpQk5ZWFJvTG1ac2IyOXlLSEJ5YjJkeVpYTnpUMlpVWVhKblpYUWdMeUJ6WldkdFpXNTBLU0FxSUhObFoyMWxiblE3WEc1OU95SmRmUT09XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9pbmMvY2FsYy5qc1xuICoqIG1vZHVsZSBpZCA9IDE5XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfZGVmYXVsdFByb3BzID0gcmVxdWlyZSgnLi9zZXR0aW5ncy9kZWZhdWx0LXByb3BzJyk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IHtcbiAgICBkZWZhdWx0UHJvcHM6IF9kZWZhdWx0UHJvcHMub3BhY2l0eVxufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbk55WXk5MllXeDFaUzEwZVhCbGN5OWhiSEJvWVM1cWN5SmRMQ0p1WVcxbGN5STZXMTBzSW0xaGNIQnBibWR6SWpvaU96czdPenM3YTBKQlJXVTdRVUZEV0N4blFrRkJXU3huUWtGSVVDeFBRVUZQTEVGQlIxTTdRMEZEZUVJaUxDSm1hV3hsSWpvaVlXeHdhR0V1YW5NaUxDSnpiM1Z5WTJWU2IyOTBJam9pTDFWelpYSnpMMDFoZEhSUVpYSnllUzlUYVhSbGN5OXdiM0J0YjNScGIyNGlMQ0p6YjNWeVkyVnpRMjl1ZEdWdWRDSTZXeUpwYlhCdmNuUWdleUJ2Y0dGamFYUjVJSDBnWm5KdmJTQW5MaTl6WlhSMGFXNW5jeTlrWldaaGRXeDBMWEJ5YjNCekp6dGNibHh1Wlhod2IzSjBJR1JsWm1GMWJIUWdlMXh1SUNBZ0lHUmxabUYxYkhSUWNtOXdjem9nYjNCaFkybDBlVnh1ZlRzaVhYMD1cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL3ZhbHVlLXR5cGVzL2FscGhhLmpzXG4gKiogbW9kdWxlIGlkID0gMjBcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF91bml0ID0gcmVxdWlyZSgnLi91bml0Jyk7XG5cbnZhciBfdW5pdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF91bml0KTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZXhwb3J0cy5kZWZhdWx0ID0ge1xuICAgIGRlZmF1bHRQcm9wczoge1xuICAgICAgICB1bml0OiAnZGVnJyxcbiAgICAgICAgdHlwZTogX3VuaXQyLmRlZmF1bHRcbiAgICB9XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluTnlZeTkyWVd4MVpTMTBlWEJsY3k5aGJtZHNaUzVxY3lKZExDSnVZVzFsY3lJNlcxMHNJbTFoY0hCcGJtZHpJam9pT3pzN096czdPenM3TzJ0Q1FVVmxPMEZCUTFnc1owSkJRVmtzUlVGQlJUdEJRVU5XTEZsQlFVa3NSVUZCUlN4TFFVRkxPMEZCUTFnc1dVRkJTU3huUWtGQlZUdExRVU5xUWp0RFFVTktJaXdpWm1sc1pTSTZJbUZ1WjJ4bExtcHpJaXdpYzI5MWNtTmxVbTl2ZENJNklpOVZjMlZ5Y3k5TllYUjBVR1Z5Y25rdlUybDBaWE12Y0c5d2JXOTBhVzl1SWl3aWMyOTFjbU5sYzBOdmJuUmxiblFpT2xzaWFXMXdiM0owSUhWdWFYUlVlWEJsSUdaeWIyMGdKeTR2ZFc1cGRDYzdYRzVjYm1WNGNHOXlkQ0JrWldaaGRXeDBJSHRjYmlBZ0lDQmtaV1poZFd4MFVISnZjSE02SUh0Y2JpQWdJQ0FnSUNBZ2RXNXBkRG9nSjJSbFp5Y3NYRzRnSUNBZ0lDQWdJSFI1Y0dVNklIVnVhWFJVZVhCbFhHNGdJQ0FnZlZ4dWZUc2lYWDA9XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy92YWx1ZS10eXBlcy9hbmdsZS5qc1xuICoqIG1vZHVsZSBpZCA9IDIxXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfdXRpbHMgPSByZXF1aXJlKCcuLi9pbmMvdXRpbHMnKTtcblxudmFyIF9weCA9IHJlcXVpcmUoJy4vcHgnKTtcblxudmFyIF9weDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9weCk7XG5cbnZhciBfZGljdGlvbmFyeSA9IHJlcXVpcmUoJy4vc2V0dGluZ3MvZGljdGlvbmFyeScpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5leHBvcnRzLmRlZmF1bHQgPSB7XG4gICAgZGVmYXVsdFByb3BzOiBfcHgyLmRlZmF1bHQuZGVmYXVsdFByb3BzLFxuXG4gICAgLypcbiAgICAgICAgU3BsaXQgcG9zaXRpb25zIGluIGZvcm1hdCBcIlggWSBaXCJcbiAgICAgICAgXG4gICAgICAgIEBwYXJhbSBbc3RyaW5nXTogUG9zaXRpb24gdmFsdWVzXG4gICAgICAgICAgICBcIjIwJSAzMCUgMFwiIC0+IHsyMCUsIDMwJSwgMH1cbiAgICAgICAgICAgIFwiMjAlIDMwJVwiIC0+IHsyMCUsIDMwJX1cbiAgICAgICAgICAgIFwiMjAlXCIgLT4gezIwJSwgMjAlfVxuICAgICovXG4gICAgc3BsaXQ6IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICB2YXIgc3BsaXRWYWx1ZXMgPSAoMCwgX3V0aWxzLnNwbGl0U3BhY2VEZWxpbWl0ZWQpKHZhbHVlKTtcbiAgICAgICAgdmFyIG51bUF4ZXMgPSBzcGxpdFZhbHVlcy5sZW5ndGg7XG4gICAgICAgIHZhciBzcGxpdFZhbHVlID0ge1xuICAgICAgICAgICAgWDogc3BsaXRWYWx1ZXNbMF0sXG4gICAgICAgICAgICBZOiBudW1BeGVzID4gMSA/IHNwbGl0VmFsdWVzWzFdIDogc3BsaXRWYWx1ZXNbMF1cbiAgICAgICAgfTtcblxuICAgICAgICBpZiAobnVtQXhlcyA+IDIpIHtcbiAgICAgICAgICAgIHNwbGl0VmFsdWUuWiA9IHNwbGl0VmFsdWVzWzJdO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHNwbGl0VmFsdWU7XG4gICAgfSxcblxuICAgIGNvbWJpbmU6IGZ1bmN0aW9uICh2YWx1ZXMpIHtcbiAgICAgICAgcmV0dXJuICgwLCBfdXRpbHMuY3JlYXRlRGVsaW1pdGVkKSh2YWx1ZXMsIF9kaWN0aW9uYXJ5LmF4ZXMsICcgJyk7XG4gICAgfVxufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbk55WXk5MllXeDFaUzEwZVhCbGN5OWhlR1Z6TG1weklsMHNJbTVoYldWeklqcGJYU3dpYldGd2NHbHVaM01pT2lJN096czdPenM3T3pzN096czdPMnRDUVVsbE8wRkJRMWdzWjBKQlFWa3NSVUZCUlN4aFFVRlpMRmxCUVZrN096czdPenM3T3pzN1FVRlZkRU1zVTBGQlN5eEZRVUZGTEZWQlFVTXNTMEZCU3l4RlFVRkxPMEZCUTJRc1dVRkJUU3hYUVVGWExFZEJRVWNzVjBGb1FrWXNiVUpCUVcxQ0xFVkJaMEpITEV0QlFVc3NRMEZCUXl4RFFVRkRPMEZCUXk5RExGbEJRVTBzVDBGQlR5eEhRVUZITEZkQlFWY3NRMEZCUXl4TlFVRk5MRU5CUVVNN1FVRkRia01zV1VGQlRTeFZRVUZWTEVkQlFVYzdRVUZEWml4aFFVRkRMRVZCUVVVc1YwRkJWeXhEUVVGRExFTkJRVU1zUTBGQlF6dEJRVU5xUWl4aFFVRkRMRVZCUVVVc1FVRkJReXhQUVVGUExFZEJRVWNzUTBGQlF5eEhRVUZKTEZkQlFWY3NRMEZCUXl4RFFVRkRMRU5CUVVNc1IwRkJSeXhYUVVGWExFTkJRVU1zUTBGQlF5eERRVUZETzFOQlEzSkVMRU5CUVVNN08wRkJSVVlzV1VGQlNTeFBRVUZQTEVkQlFVY3NRMEZCUXl4RlFVRkZPMEZCUTJJc2MwSkJRVlVzUTBGQlF5eERRVUZETEVkQlFVY3NWMEZCVnl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRE8xTkJRMnBET3p0QlFVVkVMR1ZCUVU4c1ZVRkJWU3hEUVVGRE8wdEJRM0pDT3p0QlFVVkVMRmRCUVU4c1JVRkJSU3hWUVVGRExFMUJRVTA3WlVGQlN5eFhRVGxDYUVJc1pVRkJaU3hGUVRoQ2FVSXNUVUZCVFN4alFUVkNkRU1zU1VGQlNTeEZRVFJDTUVNc1IwRkJSeXhEUVVGRE8wdEJRVUU3UTBGRE1VUWlMQ0ptYVd4bElqb2lZWGhsY3k1cWN5SXNJbk52ZFhKalpWSnZiM1FpT2lJdlZYTmxjbk12VFdGMGRGQmxjbko1TDFOcGRHVnpMM0J2Y0cxdmRHbHZiaUlzSW5OdmRYSmpaWE5EYjI1MFpXNTBJanBiSW1sdGNHOXlkQ0I3SUdOeVpXRjBaVVJsYkdsdGFYUmxaQ3dnYzNCc2FYUlRjR0ZqWlVSbGJHbHRhWFJsWkNCOUlHWnliMjBnSnk0dUwybHVZeTkxZEdsc2N5YzdYRzVwYlhCdmNuUWdjSGhXWVd4MVpWUjVjR1VnWm5KdmJTQW5MaTl3ZUNjN1hHNXBiWEJ2Y25RZ2V5QmhlR1Z6SUgwZ1puSnZiU0FuTGk5elpYUjBhVzVuY3k5a2FXTjBhVzl1WVhKNUp6dGNibHh1Wlhod2IzSjBJR1JsWm1GMWJIUWdlMXh1SUNBZ0lHUmxabUYxYkhSUWNtOXdjem9nY0hoV1lXeDFaVlI1Y0dVdVpHVm1ZWFZzZEZCeWIzQnpMRnh1SUNBZ0lDQWdJQ0JjYmlBZ0lDQXZLbHh1SUNBZ0lDQWdJQ0JUY0d4cGRDQndiM05wZEdsdmJuTWdhVzRnWm05eWJXRjBJRndpV0NCWklGcGNJbHh1SUNBZ0lDQWdJQ0JjYmlBZ0lDQWdJQ0FnUUhCaGNtRnRJRnR6ZEhKcGJtZGRPaUJRYjNOcGRHbHZiaUIyWVd4MVpYTmNiaUFnSUNBZ0lDQWdJQ0FnSUZ3aU1qQWxJRE13SlNBd1hDSWdMVDRnZXpJd0pTd2dNekFsTENBd2ZWeHVJQ0FnSUNBZ0lDQWdJQ0FnWENJeU1DVWdNekFsWENJZ0xUNGdlekl3SlN3Z016QWxmVnh1SUNBZ0lDQWdJQ0FnSUNBZ1hDSXlNQ1ZjSWlBdFBpQjdNakFsTENBeU1DVjlYRzRnSUNBZ0tpOWNiaUFnSUNCemNHeHBkRG9nS0haaGJIVmxLU0E5UGlCN1hHNGdJQ0FnSUNBZ0lHTnZibk4wSUhOd2JHbDBWbUZzZFdWeklEMGdjM0JzYVhSVGNHRmpaVVJsYkdsdGFYUmxaQ2gyWVd4MVpTazdYRzRnSUNBZ0lDQWdJR052Ym5OMElHNTFiVUY0WlhNZ1BTQnpjR3hwZEZaaGJIVmxjeTVzWlc1bmRHZzdYRzRnSUNBZ0lDQWdJR052Ym5OMElITndiR2wwVm1Gc2RXVWdQU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQllPaUJ6Y0d4cGRGWmhiSFZsYzFzd1hTeGNiaUFnSUNBZ0lDQWdJQ0FnSUZrNklDaHVkVzFCZUdWeklENGdNU2tnUHlCemNHeHBkRlpoYkhWbGMxc3hYU0E2SUhOd2JHbDBWbUZzZFdWeld6QmRYRzRnSUNBZ0lDQWdJSDA3WEc1Y2JpQWdJQ0FnSUNBZ2FXWWdLRzUxYlVGNFpYTWdQaUF5S1NCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0J6Y0d4cGRGWmhiSFZsTGxvZ1BTQnpjR3hwZEZaaGJIVmxjMXN5WFR0Y2JpQWdJQ0FnSUNBZ2ZWeHVYRzRnSUNBZ0lDQWdJSEpsZEhWeWJpQnpjR3hwZEZaaGJIVmxPMXh1SUNBZ0lIMHNYRzVjYmlBZ0lDQmpiMjFpYVc1bE9pQW9kbUZzZFdWektTQTlQaUJqY21WaGRHVkVaV3hwYldsMFpXUW9kbUZzZFdWekxDQmhlR1Z6TENBbklDY3BYRzU5TzF4dUlsMTlcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL3ZhbHVlLXR5cGVzL2F4ZXMuanNcbiAqKiBtb2R1bGUgaWQgPSAyMlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9O1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX3JnYiA9IHJlcXVpcmUoJy4vcmdiJyk7XG5cbnZhciBfcmdiMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JnYik7XG5cbnZhciBfaHNsID0gcmVxdWlyZSgnLi9oc2wnKTtcblxudmFyIF9oc2wyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfaHNsKTtcblxudmFyIF9oZXggPSByZXF1aXJlKCcuL2hleCcpO1xuXG52YXIgX2hleDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9oZXgpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG52YXIgY29sb3JUeXBlcyA9IFtfcmdiMi5kZWZhdWx0LCBfaHNsMi5kZWZhdWx0LCBfaGV4Mi5kZWZhdWx0XTtcbnZhciBudW1Db2xvclR5cGVzID0gY29sb3JUeXBlcy5sZW5ndGg7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IHtcbiAgICBkZWZhdWx0UHJvcHM6IF9leHRlbmRzKHt9LCBfcmdiMi5kZWZhdWx0LmRlZmF1bHRQcm9wcywgX2hzbDIuZGVmYXVsdC5kZWZhdWx0UHJvcHMpLFxuXG4gICAgdGVzdDogZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgIHJldHVybiBfcmdiMi5kZWZhdWx0LnRlc3QodmFsdWUpIHx8IF9oZXgyLmRlZmF1bHQudGVzdCh2YWx1ZSkgfHwgX2hzbDIuZGVmYXVsdC50ZXN0KHZhbHVlKTtcbiAgICB9LFxuXG4gICAgc3BsaXQ6IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IG51bUNvbG9yVHlwZXM7IGkrKykge1xuICAgICAgICAgICAgaWYgKGNvbG9yVHlwZXNbaV0udGVzdCh2YWx1ZSkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gY29sb3JUeXBlc1tpXS5zcGxpdCh2YWx1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgY29tYmluZTogZnVuY3Rpb24gKHZhbHVlcykge1xuICAgICAgICByZXR1cm4gdmFsdWVzLlJlZCAhPT0gdW5kZWZpbmVkID8gX3JnYjIuZGVmYXVsdC5jb21iaW5lKHZhbHVlcykgOiBfaHNsMi5kZWZhdWx0LmNvbWJpbmUodmFsdWVzKTtcbiAgICB9XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluTnlZeTkyWVd4MVpTMTBlWEJsY3k5amIyeHZjaTVxY3lKZExDSnVZVzFsY3lJNlcxMHNJbTFoY0hCcGJtZHpJam9pT3pzN096czdPenM3T3pzN096czdPenM3T3p0QlFVbEJMRWxCUVUwc1ZVRkJWU3hIUVVGSExEWkRRVUZsTEVOQlFVTTdRVUZEYmtNc1NVRkJUU3hoUVVGaExFZEJRVWNzVlVGQlZTeERRVUZETEUxQlFVMHNRMEZCUXpzN2EwSkJSWHBDTzBGQlExZ3NaMEpCUVZrc1pVRkJUeXhqUVVGSkxGbEJRVmtzUlVGQlN5eGpRVUZKTEZsQlFWa3NRMEZCUlRzN1FVRkZNVVFzVVVGQlNTeEZRVUZGTEZWQlFVTXNTMEZCU3p0bFFVRkxMR05CUVVrc1NVRkJTU3hEUVVGRExFdEJRVXNzUTBGQlF5eEpRVUZKTEdOQlFVa3NTVUZCU1N4RFFVRkRMRXRCUVVzc1EwRkJReXhKUVVGSkxHTkJRVWtzU1VGQlNTeERRVUZETEV0QlFVc3NRMEZCUXp0TFFVRkJPenRCUVVWMFJTeFRRVUZMTEVWQlFVVXNWVUZCUXl4TFFVRkxMRVZCUVVzN1FVRkRaQ3hoUVVGTExFbEJRVWtzUTBGQlF5eEhRVUZITEVOQlFVTXNSVUZCUlN4RFFVRkRMRWRCUVVjc1lVRkJZU3hGUVVGRkxFTkJRVU1zUlVGQlJTeEZRVUZGTzBGQlEzQkRMR2RDUVVGSkxGVkJRVlVzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4SlFVRkpMRU5CUVVNc1MwRkJTeXhEUVVGRExFVkJRVVU3UVVGRE0wSXNkVUpCUVU4c1ZVRkJWU3hEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEV0QlFVc3NRMEZCUXl4TFFVRkxMRU5CUVVNc1EwRkJRenRoUVVOeVF6dFRRVU5LTzB0QlEwbzdPMEZCUlVRc1YwRkJUeXhGUVVGRkxGVkJRVU1zVFVGQlRUdGxRVUZMTEVGQlFVTXNUVUZCVFN4RFFVRkRMRWRCUVVjc1MwRkJTeXhUUVVGVExFZEJRVWtzWTBGQlNTeFBRVUZQTEVOQlFVTXNUVUZCVFN4RFFVRkRMRWRCUVVjc1kwRkJTU3hQUVVGUExFTkJRVU1zVFVGQlRTeERRVUZETzB0QlFVRTdRMEZET1VZaUxDSm1hV3hsSWpvaVkyOXNiM0l1YW5NaUxDSnpiM1Z5WTJWU2IyOTBJam9pTDFWelpYSnpMMDFoZEhSUVpYSnllUzlUYVhSbGN5OXdiM0J0YjNScGIyNGlMQ0p6YjNWeVkyVnpRMjl1ZEdWdWRDSTZXeUpwYlhCdmNuUWdjbWRpSUdaeWIyMGdKeTR2Y21kaUp6dGNibWx0Y0c5eWRDQm9jMndnWm5KdmJTQW5MaTlvYzJ3bk8xeHVhVzF3YjNKMElHaGxlQ0JtY205dElDY3VMMmhsZUNjN1hHNWNibU52Ym5OMElHTnZiRzl5Vkhsd1pYTWdQU0JiY21kaUxDQm9jMndzSUdobGVGMDdYRzVqYjI1emRDQnVkVzFEYjJ4dmNsUjVjR1Z6SUQwZ1kyOXNiM0pVZVhCbGN5NXNaVzVuZEdnN1hHNWNibVY0Y0c5eWRDQmtaV1poZFd4MElIdGNiaUFnSUNCa1pXWmhkV3gwVUhKdmNITTZJSHNnTGk0dWNtZGlMbVJsWm1GMWJIUlFjbTl3Y3l3Z0xpNHVhSE5zTG1SbFptRjFiSFJRY205d2N5QjlMRnh1WEc0Z0lDQWdkR1Z6ZERvZ0tIWmhiSFZsS1NBOVBpQnlaMkl1ZEdWemRDaDJZV3gxWlNrZ2ZId2dhR1Y0TG5SbGMzUW9kbUZzZFdVcElIeDhJR2h6YkM1MFpYTjBLSFpoYkhWbEtTeGNibHh1SUNBZ0lITndiR2wwT2lBb2RtRnNkV1VwSUQwK0lIdGNiaUFnSUNBZ0lDQWdabTl5SUNoc1pYUWdhU0E5SURBN0lHa2dQQ0J1ZFcxRGIyeHZjbFI1Y0dWek95QnBLeXNwSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJR2xtSUNoamIyeHZjbFI1Y0dWelcybGRMblJsYzNRb2RtRnNkV1VwS1NCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2NtVjBkWEp1SUdOdmJHOXlWSGx3WlhOYmFWMHVjM0JzYVhRb2RtRnNkV1VwTzF4dUlDQWdJQ0FnSUNBZ0lDQWdmVnh1SUNBZ0lDQWdJQ0I5WEc0Z0lDQWdmU3hjYmx4dUlDQWdJR052YldKcGJtVTZJQ2gyWVd4MVpYTXBJRDArSUNoMllXeDFaWE11VW1Wa0lDRTlQU0IxYm1SbFptbHVaV1FwSUQ4Z2NtZGlMbU52YldKcGJtVW9kbUZzZFdWektTQTZJR2h6YkM1amIyMWlhVzVsS0haaGJIVmxjeWxjYm4wN1hHNGlYWDA9XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy92YWx1ZS10eXBlcy9jb2xvci5qc1xuICoqIG1vZHVsZSBpZCA9IDIzXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfdXRpbHMgPSByZXF1aXJlKCcuLi9pbmMvdXRpbHMnKTtcblxudmFyIEZMT0FUX1JFR0VYID0gLygtKT8oXFxkW1xcZFxcLl0qKS9nO1xudmFyIGdlbmVyYXRlVG9rZW4gPSBmdW5jdGlvbiAodG9rZW4pIHtcbiAgICByZXR1cm4gJyR7JyArIHRva2VuICsgJ30nO1xufTtcblxuZXhwb3J0cy5kZWZhdWx0ID0ge1xuXG4gICAgdGVzdDogZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgIHZhciBtYXRjaGVzID0gdmFsdWUubWF0Y2goRkxPQVRfUkVHRVgpO1xuICAgICAgICByZXR1cm4gKDAsIF91dGlscy5pc0FycmF5KShtYXRjaGVzKSAmJiBtYXRjaGVzLmxlbmd0aCA+IDE7XG4gICAgfSxcblxuICAgIHRlbXBsYXRlOiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgdmFyIGNvdW50ZXIgPSAwO1xuICAgICAgICByZXR1cm4gdmFsdWUucmVwbGFjZShGTE9BVF9SRUdFWCwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIGdlbmVyYXRlVG9rZW4oY291bnRlcisrKTtcbiAgICAgICAgfSk7XG4gICAgfSxcblxuICAgIHNwbGl0OiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgdmFyIHNwbGl0VmFsdWUgPSB7fTtcblxuICAgICAgICB2YWx1ZS5tYXRjaChGTE9BVF9SRUdFWCkuZm9yRWFjaChmdW5jdGlvbiAodmFsdWUsIGkpIHtcbiAgICAgICAgICAgIHJldHVybiBzcGxpdFZhbHVlW2ldID0gdmFsdWU7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiBzcGxpdFZhbHVlO1xuICAgIH0sXG5cbiAgICBjb21iaW5lOiBmdW5jdGlvbiAodmFsdWVzLCB0ZW1wbGF0ZSkge1xuICAgICAgICBmb3IgKHZhciBrZXkgaW4gdmFsdWVzKSB7XG4gICAgICAgICAgICBpZiAodmFsdWVzLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICAgICAgICB0ZW1wbGF0ZSA9IHRlbXBsYXRlLnJlcGxhY2UoZ2VuZXJhdGVUb2tlbihrZXkpLCB2YWx1ZXNba2V5XSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGVtcGxhdGU7XG4gICAgfVxuXG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluTnlZeTkyWVd4MVpTMTBlWEJsY3k5amIyMXdiR1Y0TG1weklsMHNJbTVoYldWeklqcGJYU3dpYldGd2NHbHVaM01pT2lJN096czdPenRCUVVWQkxFbEJRVTBzVjBGQlZ5eEhRVUZITEd0Q1FVRnJRaXhEUVVGRE8wRkJRM1pETEVsQlFVMHNZVUZCWVN4SFFVRkhMRlZCUVVNc1MwRkJTenRYUVVGTExFbEJRVWtzUjBGQlJ5eExRVUZMTEVkQlFVY3NSMEZCUnp0RFFVRkJMRU5CUVVNN08ydENRVVZ5UXpzN1FVRkZXQ3hSUVVGSkxFVkJRVVVzVlVGQlF5eExRVUZMTEVWQlFVczdRVUZEWWl4WlFVRk5MRTlCUVU4c1IwRkJSeXhMUVVGTExFTkJRVU1zUzBGQlN5eERRVUZETEZkQlFWY3NRMEZCUXl4RFFVRkRPMEZCUTNwRExHVkJRVkVzVjBGVVVDeFBRVUZQTEVWQlUxRXNUMEZCVHl4RFFVRkRMRWxCUVVrc1QwRkJUeXhEUVVGRExFMUJRVTBzUjBGQlJ5eERRVUZETEVOQlFVVTdTMEZEYmtRN08wRkJSVVFzV1VGQlVTeEZRVUZGTEZWQlFVTXNTMEZCU3l4RlFVRkxPMEZCUTJwQ0xGbEJRVWtzVDBGQlR5eEhRVUZITEVOQlFVTXNRMEZCUXp0QlFVTm9RaXhsUVVGUExFdEJRVXNzUTBGQlF5eFBRVUZQTEVOQlFVTXNWMEZCVnl4RlFVRkZPMjFDUVVGTkxHRkJRV0VzUTBGQlF5eFBRVUZQTEVWQlFVVXNRMEZCUXp0VFFVRkJMRU5CUVVNc1EwRkJRenRMUVVOeVJUczdRVUZGUkN4VFFVRkxMRVZCUVVVc1ZVRkJReXhMUVVGTExFVkJRVXM3UVVGRFpDeFpRVUZOTEZWQlFWVXNSMEZCUnl4RlFVRkZMRU5CUVVNN08wRkJSWFJDTEdGQlFVc3NRMEZCUXl4TFFVRkxMRU5CUVVNc1YwRkJWeXhEUVVGRExFTkJRVU1zVDBGQlR5eERRVUZETEZWQlFVTXNTMEZCU3l4RlFVRkZMRU5CUVVNN2JVSkJRVXNzVlVGQlZTeERRVUZETEVOQlFVTXNRMEZCUXl4SFFVRkhMRXRCUVVzN1UwRkJRU3hEUVVGRExFTkJRVU03TzBGQlJYUkZMR1ZCUVU4c1ZVRkJWU3hEUVVGRE8wdEJRM0pDT3p0QlFVVkVMRmRCUVU4c1JVRkJSU3hWUVVGRExFMUJRVTBzUlVGQlJTeFJRVUZSTEVWQlFVczdRVUZETTBJc1lVRkJTeXhKUVVGSkxFZEJRVWNzU1VGQlNTeE5RVUZOTEVWQlFVVTdRVUZEY0VJc1owSkJRVWtzVFVGQlRTeERRVUZETEdOQlFXTXNRMEZCUXl4SFFVRkhMRU5CUVVNc1JVRkJSVHRCUVVNMVFpeDNRa0ZCVVN4SFFVRkhMRkZCUVZFc1EwRkJReXhQUVVGUExFTkJRVU1zWVVGQllTeERRVUZETEVkQlFVY3NRMEZCUXl4RlFVRkZMRTFCUVUwc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF5eERRVUZETzJGQlEyaEZPMU5CUTBvN08wRkJSVVFzWlVGQlR5eFJRVUZSTEVOQlFVTTdTMEZEYmtJN08wTkJSVW9pTENKbWFXeGxJam9pWTI5dGNHeGxlQzVxY3lJc0luTnZkWEpqWlZKdmIzUWlPaUl2VlhObGNuTXZUV0YwZEZCbGNuSjVMMU5wZEdWekwzQnZjRzF2ZEdsdmJpSXNJbk52ZFhKalpYTkRiMjUwWlc1MElqcGJJbWx0Y0c5eWRDQjdJR2x6UVhKeVlYa2dmU0JtY205dElDY3VMaTlwYm1NdmRYUnBiSE1uTzF4dVhHNWpiMjV6ZENCR1RFOUJWRjlTUlVkRldDQTlJQzhvTFNrL0tGeGNaRnRjWEdSY1hDNWRLaWt2Wnp0Y2JtTnZibk4wSUdkbGJtVnlZWFJsVkc5clpXNGdQU0FvZEc5clpXNHBJRDArSUNja2V5Y2dLeUIwYjJ0bGJpQXJJQ2Q5Snp0Y2JseHVaWGh3YjNKMElHUmxabUYxYkhRZ2UxeHVYRzRnSUNBZ2RHVnpkRG9nS0haaGJIVmxLU0E5UGlCN1hHNGdJQ0FnSUNBZ0lHTnZibk4wSUcxaGRHTm9aWE1nUFNCMllXeDFaUzV0WVhSamFDaEdURTlCVkY5U1JVZEZXQ2s3WEc0Z0lDQWdJQ0FnSUhKbGRIVnliaUFvYVhOQmNuSmhlU2h0WVhSamFHVnpLU0FtSmlCdFlYUmphR1Z6TG14bGJtZDBhQ0ErSURFcE8xeHVJQ0FnSUgwc1hHNWNiaUFnSUNCMFpXMXdiR0YwWlRvZ0tIWmhiSFZsS1NBOVBpQjdYRzRnSUNBZ0lDQWdJR3hsZENCamIzVnVkR1Z5SUQwZ01EdGNiaUFnSUNBZ0lDQWdjbVYwZFhKdUlIWmhiSFZsTG5KbGNHeGhZMlVvUmt4UFFWUmZVa1ZIUlZnc0lDZ3BJRDArSUdkbGJtVnlZWFJsVkc5clpXNG9ZMjkxYm5SbGNpc3JLU2s3WEc0Z0lDQWdmU3hjYmx4dUlDQWdJSE53YkdsME9pQW9kbUZzZFdVcElEMCtJSHRjYmlBZ0lDQWdJQ0FnWTI5dWMzUWdjM0JzYVhSV1lXeDFaU0E5SUh0OU8xeHVJQ0FnSUNBZ0lDQmNiaUFnSUNBZ0lDQWdkbUZzZFdVdWJXRjBZMmdvUmt4UFFWUmZVa1ZIUlZncExtWnZja1ZoWTJnb0tIWmhiSFZsTENCcEtTQTlQaUJ6Y0d4cGRGWmhiSFZsVzJsZElEMGdkbUZzZFdVcE8xeHVYRzRnSUNBZ0lDQWdJSEpsZEhWeWJpQnpjR3hwZEZaaGJIVmxPMXh1SUNBZ0lIMHNYRzVjYmlBZ0lDQmpiMjFpYVc1bE9pQW9kbUZzZFdWekxDQjBaVzF3YkdGMFpTa2dQVDRnZTF4dUlDQWdJQ0FnSUNCbWIzSWdLR3hsZENCclpYa2dhVzRnZG1Gc2RXVnpLU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQnBaaUFvZG1Gc2RXVnpMbWhoYzA5M2JsQnliM0JsY25SNUtHdGxlU2twSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCMFpXMXdiR0YwWlNBOUlIUmxiWEJzWVhSbExuSmxjR3hoWTJVb1oyVnVaWEpoZEdWVWIydGxiaWhyWlhrcExDQjJZV3gxWlhOYmEyVjVYU2s3WEc0Z0lDQWdJQ0FnSUNBZ0lDQjlYRzRnSUNBZ0lDQWdJSDFjYmx4dUlDQWdJQ0FnSUNCeVpYUjFjbTRnZEdWdGNHeGhkR1U3WEc0Z0lDQWdmVnh1WEc1OU95SmRmUT09XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy92YWx1ZS10eXBlcy9jb21wbGV4LmpzXG4gKiogbW9kdWxlIGlkID0gMjRcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF9yZ2IgPSByZXF1aXJlKCcuL3JnYicpO1xuXG52YXIgX3JnYjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZ2IpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5leHBvcnRzLmRlZmF1bHQgPSB7XG4gICAgZGVmYXVsdFByb3BzOiBfcmdiMi5kZWZhdWx0LmRlZmF1bHRQcm9wcyxcblxuICAgIHRlc3Q6IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICByZXR1cm4gdmFsdWUgJiYgdmFsdWUuaW5kZXhPZignIycpID4gLTE7XG4gICAgfSxcblxuICAgIHNwbGl0OiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgdmFyIHIgPSB1bmRlZmluZWQsXG4gICAgICAgICAgICBnID0gdW5kZWZpbmVkLFxuICAgICAgICAgICAgYiA9IHVuZGVmaW5lZDtcblxuICAgICAgICAvLyBJZiB3ZSBoYXZlIDYgY2hhcmFjdGVycywgaWUgI0ZGMDAwMFxuICAgICAgICBpZiAodmFsdWUubGVuZ3RoID4gNCkge1xuICAgICAgICAgICAgciA9IHZhbHVlLnN1YnN0cigxLCAyKTtcbiAgICAgICAgICAgIGcgPSB2YWx1ZS5zdWJzdHIoMywgMik7XG4gICAgICAgICAgICBiID0gdmFsdWUuc3Vic3RyKDUsIDIpO1xuXG4gICAgICAgICAgICAvLyBPciB3ZSBoYXZlIDMgY2hhcmFjdGVycywgaWUgI0YwMFxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHIgPSB2YWx1ZS5zdWJzdHIoMSwgMSk7XG4gICAgICAgICAgICAgICAgZyA9IHZhbHVlLnN1YnN0cigyLCAxKTtcbiAgICAgICAgICAgICAgICBiID0gdmFsdWUuc3Vic3RyKDMsIDEpO1xuICAgICAgICAgICAgICAgIHIgKz0gcjtcbiAgICAgICAgICAgICAgICBnICs9IGc7XG4gICAgICAgICAgICAgICAgYiArPSBiO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBSZWQ6IHBhcnNlSW50KHIsIDE2KSxcbiAgICAgICAgICAgIEdyZWVuOiBwYXJzZUludChnLCAxNiksXG4gICAgICAgICAgICBCbHVlOiBwYXJzZUludChiLCAxNiksXG4gICAgICAgICAgICBBbHBoYTogMVxuICAgICAgICB9O1xuICAgIH0sXG5cbiAgICBjb21iaW5lOiBmdW5jdGlvbiAodmFsdWVzKSB7XG4gICAgICAgIHJldHVybiBfcmdiMi5kZWZhdWx0LmNvbWJpbmUodmFsdWVzKTtcbiAgICB9XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluTnlZeTkyWVd4MVpTMTBlWEJsY3k5b1pYZ3Vhbk1pWFN3aWJtRnRaWE1pT2x0ZExDSnRZWEJ3YVc1bmN5STZJanM3T3pzN096czdPenRyUWtGRlpUdEJRVU5ZTEdkQ1FVRlpMRVZCUVVVc1kwRkJTU3haUVVGWk96dEJRVVU1UWl4UlFVRkpMRVZCUVVVc1ZVRkJReXhMUVVGTE8yVkJRVTBzUzBGQlN5eEpRVUZKTEV0QlFVc3NRMEZCUXl4UFFVRlBMRU5CUVVNc1IwRkJSeXhEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETzB0QlFVTTdPMEZCUlc1RUxGTkJRVXNzUlVGQlJTeFZRVUZETEV0QlFVc3NSVUZCU3p0QlFVTmtMRmxCUVVrc1EwRkJReXhaUVVGQk8xbEJRVVVzUTBGQlF5eFpRVUZCTzFsQlFVVXNRMEZCUXl4WlFVRkJPenM3UVVGQlF5eEJRVWRhTEZsQlFVa3NTMEZCU3l4RFFVRkRMRTFCUVUwc1IwRkJSeXhEUVVGRExFVkJRVVU3UVVGRGJFSXNZVUZCUXl4SFFVRkhMRXRCUVVzc1EwRkJReXhOUVVGTkxFTkJRVU1zUTBGQlF5eEZRVUZGTEVOQlFVTXNRMEZCUXl4RFFVRkRPMEZCUTNaQ0xHRkJRVU1zUjBGQlJ5eExRVUZMTEVOQlFVTXNUVUZCVFN4RFFVRkRMRU5CUVVNc1JVRkJSU3hEUVVGRExFTkJRVU1zUTBGQlF6dEJRVU4yUWl4aFFVRkRMRWRCUVVjc1MwRkJTeXhEUVVGRExFMUJRVTBzUTBGQlF5eERRVUZETEVWQlFVVXNRMEZCUXl4RFFVRkRPenM3UVVGQlF5eFRRVWN4UWl4TlFVRk5PMEZCUTBnc2FVSkJRVU1zUjBGQlJ5eExRVUZMTEVOQlFVTXNUVUZCVFN4RFFVRkRMRU5CUVVNc1JVRkJSU3hEUVVGRExFTkJRVU1zUTBGQlF6dEJRVU4yUWl4cFFrRkJReXhIUVVGSExFdEJRVXNzUTBGQlF5eE5RVUZOTEVOQlFVTXNRMEZCUXl4RlFVRkZMRU5CUVVNc1EwRkJReXhEUVVGRE8wRkJRM1pDTEdsQ1FVRkRMRWRCUVVjc1MwRkJTeXhEUVVGRExFMUJRVTBzUTBGQlF5eERRVUZETEVWQlFVVXNRMEZCUXl4RFFVRkRMRU5CUVVNN1FVRkRka0lzYVVKQlFVTXNTVUZCU1N4RFFVRkRMRU5CUVVNN1FVRkRVQ3hwUWtGQlF5eEpRVUZKTEVOQlFVTXNRMEZCUXp0QlFVTlFMR2xDUVVGRExFbEJRVWtzUTBGQlF5eERRVUZETzJGQlExWTdPMEZCUlVRc1pVRkJUenRCUVVOSUxHVkJRVWNzUlVGQlJTeFJRVUZSTEVOQlFVTXNRMEZCUXl4RlFVRkZMRVZCUVVVc1EwRkJRenRCUVVOd1FpeHBRa0ZCU3l4RlFVRkZMRkZCUVZFc1EwRkJReXhEUVVGRExFVkJRVVVzUlVGQlJTeERRVUZETzBGQlEzUkNMR2RDUVVGSkxFVkJRVVVzVVVGQlVTeERRVUZETEVOQlFVTXNSVUZCUlN4RlFVRkZMRU5CUVVNN1FVRkRja0lzYVVKQlFVc3NSVUZCUlN4RFFVRkRPMU5CUTFnc1EwRkJRenRMUVVOTU96dEJRVVZFTEZkQlFVOHNSVUZCUlN4VlFVRkRMRTFCUVUwN1pVRkJTeXhqUVVGSkxFOUJRVThzUTBGQlF5eE5RVUZOTEVOQlFVTTdTMEZCUVR0RFFVTXpReUlzSW1acGJHVWlPaUpvWlhndWFuTWlMQ0p6YjNWeVkyVlNiMjkwSWpvaUwxVnpaWEp6TDAxaGRIUlFaWEp5ZVM5VGFYUmxjeTl3YjNCdGIzUnBiMjRpTENKemIzVnlZMlZ6UTI5dWRHVnVkQ0k2V3lKcGJYQnZjblFnY21kaUlHWnliMjBnSnk0dmNtZGlKenRjYmx4dVpYaHdiM0owSUdSbFptRjFiSFFnZTF4dUlDQWdJR1JsWm1GMWJIUlFjbTl3Y3pvZ2NtZGlMbVJsWm1GMWJIUlFjbTl3Y3l4Y2JseHVJQ0FnSUhSbGMzUTZJQ2gyWVd4MVpTa2dQVDRnS0haaGJIVmxJQ1ltSUhaaGJIVmxMbWx1WkdWNFQyWW9KeU1uS1NBK0lDMHhLU3hjYmx4dUlDQWdJSE53YkdsME9pQW9kbUZzZFdVcElEMCtJSHRjYmlBZ0lDQWdJQ0FnYkdWMElISXNJR2NzSUdJN1hHNWNiaUFnSUNBZ0lDQWdMeThnU1dZZ2QyVWdhR0YyWlNBMklHTm9ZWEpoWTNSbGNuTXNJR2xsSUNOR1JqQXdNREJjYmlBZ0lDQWdJQ0FnYVdZZ0tIWmhiSFZsTG14bGJtZDBhQ0ErSURRcElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUhJZ1BTQjJZV3gxWlM1emRXSnpkSElvTVN3Z01pazdYRzRnSUNBZ0lDQWdJQ0FnSUNCbklEMGdkbUZzZFdVdWMzVmljM1J5S0RNc0lESXBPMXh1SUNBZ0lDQWdJQ0FnSUNBZ1lpQTlJSFpoYkhWbExuTjFZbk4wY2lnMUxDQXlLVHRjYmx4dUlDQWdJQ0FnSUNBdkx5QlBjaUIzWlNCb1lYWmxJRE1nWTJoaGNtRmpkR1Z5Y3l3Z2FXVWdJMFl3TUZ4dUlDQWdJQ0FnSUNCOUlHVnNjMlVnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdjaUE5SUhaaGJIVmxMbk4xWW5OMGNpZ3hMQ0F4S1R0Y2JpQWdJQ0FnSUNBZ0lDQWdJR2NnUFNCMllXeDFaUzV6ZFdKemRISW9NaXdnTVNrN1hHNGdJQ0FnSUNBZ0lDQWdJQ0JpSUQwZ2RtRnNkV1V1YzNWaWMzUnlLRE1zSURFcE8xeHVJQ0FnSUNBZ0lDQWdJQ0FnY2lBclBTQnlPMXh1SUNBZ0lDQWdJQ0FnSUNBZ1p5QXJQU0JuTzF4dUlDQWdJQ0FnSUNBZ0lDQWdZaUFyUFNCaU8xeHVJQ0FnSUNBZ0lDQjlYRzVjYmlBZ0lDQWdJQ0FnY21WMGRYSnVJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lGSmxaRG9nY0dGeWMyVkpiblFvY2l3Z01UWXBMRnh1SUNBZ0lDQWdJQ0FnSUNBZ1IzSmxaVzQ2SUhCaGNuTmxTVzUwS0djc0lERTJLU3hjYmlBZ0lDQWdJQ0FnSUNBZ0lFSnNkV1U2SUhCaGNuTmxTVzUwS0dJc0lERTJLU3hjYmlBZ0lDQWdJQ0FnSUNBZ0lFRnNjR2hoT2lBeFhHNGdJQ0FnSUNBZ0lIMDdYRzRnSUNBZ2ZTeGNibHh1SUNBZ0lHTnZiV0pwYm1VNklDaDJZV3gxWlhNcElEMCtJSEpuWWk1amIyMWlhVzVsS0haaGJIVmxjeWxjYm4wN0lsMTlcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL3ZhbHVlLXR5cGVzL2hleC5qc1xuICoqIG1vZHVsZSBpZCA9IDI1XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfZGVmYXVsdFByb3BzID0gcmVxdWlyZSgnLi9zZXR0aW5ncy9kZWZhdWx0LXByb3BzJyk7XG5cbnZhciBfZGljdGlvbmFyeSA9IHJlcXVpcmUoJy4vc2V0dGluZ3MvZGljdGlvbmFyeScpO1xuXG52YXIgX3V0aWxzID0gcmVxdWlyZSgnLi4vaW5jL3V0aWxzJyk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IHtcbiAgICBkZWZhdWx0UHJvcHM6IHtcbiAgICAgICAgSHVlOiB7XG4gICAgICAgICAgICBtaW46IDAsXG4gICAgICAgICAgICBtYXg6IDM2MFxuICAgICAgICB9LFxuICAgICAgICBTYXR1cmF0aW9uOiBfZGVmYXVsdFByb3BzLnBlcmNlbnQsXG4gICAgICAgIExpZ2h0bmVzczogX2RlZmF1bHRQcm9wcy5wZXJjZW50LFxuICAgICAgICBBbHBoYTogX2RlZmF1bHRQcm9wcy5vcGFjaXR5XG4gICAgfSxcblxuICAgIHRlc3Q6IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICByZXR1cm4gdmFsdWUgJiYgdmFsdWUuaW5kZXhPZignaHNsJykgPiAtMTtcbiAgICB9LFxuXG4gICAgc3BsaXQ6IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICByZXR1cm4gKDAsIF91dGlscy5nZXRDb2xvclZhbHVlcykodmFsdWUsIF9kaWN0aW9uYXJ5LmhzbCk7XG4gICAgfSxcblxuICAgIGNvbWJpbmU6IGZ1bmN0aW9uICh2YWx1ZXMpIHtcbiAgICAgICAgcmV0dXJuICgwLCBfdXRpbHMuY3JlYXRlRnVuY3Rpb25TdHJpbmcpKCgwLCBfdXRpbHMuY3JlYXRlRGVsaW1pdGVkKSh2YWx1ZXMsIF9kaWN0aW9uYXJ5LmhzbCwgJywgJywgMiksICdoc2xhJyk7XG4gICAgfVxufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbk55WXk5MllXeDFaUzEwZVhCbGN5OW9jMnd1YW5NaVhTd2libUZ0WlhNaU9sdGRMQ0p0WVhCd2FXNW5jeUk2SWpzN096czdPenM3T3p0clFrRkpaVHRCUVVOWUxHZENRVUZaTEVWQlFVVTdRVUZEVml4WFFVRkhMRVZCUVVVN1FVRkRSQ3hsUVVGSExFVkJRVVVzUTBGQlF6dEJRVU5PTEdWQlFVY3NSVUZCUlN4SFFVRkhPMU5CUTFnN1FVRkRSQ3hyUWtGQlZTeG5Ra0ZXVkN4UFFVRlBMRUZCVlZjN1FVRkRia0lzYVVKQlFWTXNaMEpCV0ZJc1QwRkJUeXhCUVZkVk8wRkJRMnhDTEdGQlFVc3NaMEpCV2tzc1QwRkJUeXhCUVZsSU8wdEJRMnBDT3p0QlFVVkVMRkZCUVVrc1JVRkJSU3hWUVVGRExFdEJRVXM3WlVGQlRTeExRVUZMTEVsQlFVa3NTMEZCU3l4RFFVRkRMRTlCUVU4c1EwRkJReXhMUVVGTExFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTTdTMEZCUXpzN1FVRkZja1FzVTBGQlN5eEZRVUZGTEZWQlFVTXNTMEZCU3p0bFFVRkxMRmRCWmpCQ0xHTkJRV01zUlVGbGVrSXNTMEZCU3l4alFXaENha01zUjBGQlJ5eERRV2RDZVVNN1MwRkJRVHM3UVVGRmFrUXNWMEZCVHl4RlFVRkZMRlZCUVVNc1RVRkJUVHRsUVVGTExGZEJha0pETEc5Q1FVRnZRaXhGUVdsQ1FTeFhRV3BDY2tNc1pVRkJaU3hGUVdsQ2MwTXNUVUZCVFN4alFXeENNMFFzUjBGQlJ5eEZRV3RDYjBVc1NVRkJTU3hGUVVGRkxFTkJRVU1zUTBGQlF5eEZRVUZGTEUxQlFVMHNRMEZCUXp0TFFVRkJPME5CUTJoSElpd2labWxzWlNJNkltaHpiQzVxY3lJc0luTnZkWEpqWlZKdmIzUWlPaUl2VlhObGNuTXZUV0YwZEZCbGNuSjVMMU5wZEdWekwzQnZjRzF2ZEdsdmJpSXNJbk52ZFhKalpYTkRiMjUwWlc1MElqcGJJbWx0Y0c5eWRDQjdJSEJsY21ObGJuUXNJRzl3WVdOcGRIa2dmU0JtY205dElDY3VMM05sZEhScGJtZHpMMlJsWm1GMWJIUXRjSEp2Y0hNbk8xeHVhVzF3YjNKMElIc2dhSE5zSUdGeklHaHpiRlJsY20xeklIMGdabkp2YlNBbkxpOXpaWFIwYVc1bmN5OWthV04wYVc5dVlYSjVKenRjYm1sdGNHOXlkQ0I3SUdOeVpXRjBaVVJsYkdsdGFYUmxaQ3dnWTNKbFlYUmxSblZ1WTNScGIyNVRkSEpwYm1jc0lHZGxkRU52Ykc5eVZtRnNkV1Z6SUgwZ1puSnZiU0FuTGk0dmFXNWpMM1YwYVd4ekp6dGNibHh1Wlhod2IzSjBJR1JsWm1GMWJIUWdlMXh1SUNBZ0lHUmxabUYxYkhSUWNtOXdjem9nZTF4dUlDQWdJQ0FnSUNCSWRXVTZJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lHMXBiam9nTUN4Y2JpQWdJQ0FnSUNBZ0lDQWdJRzFoZURvZ016WXdYRzRnSUNBZ0lDQWdJSDBzWEc0Z0lDQWdJQ0FnSUZOaGRIVnlZWFJwYjI0NklIQmxjbU5sYm5Rc1hHNGdJQ0FnSUNBZ0lFeHBaMmgwYm1WemN6b2djR1Z5WTJWdWRDeGNiaUFnSUNBZ0lDQWdRV3h3YUdFNklHOXdZV05wZEhsY2JpQWdJQ0I5TEZ4dVhHNGdJQ0FnZEdWemREb2dLSFpoYkhWbEtTQTlQaUFvZG1Gc2RXVWdKaVlnZG1Gc2RXVXVhVzVrWlhoUFppZ25hSE5zSnlrZ1BpQXRNU2tzWEc1Y2JpQWdJQ0J6Y0d4cGREb2dLSFpoYkhWbEtTQTlQaUJuWlhSRGIyeHZjbFpoYkhWbGN5aDJZV3gxWlN3Z2FITnNWR1Z5YlhNcExGeHVYRzRnSUNBZ1kyOXRZbWx1WlRvZ0tIWmhiSFZsY3lrZ1BUNGdZM0psWVhSbFJuVnVZM1JwYjI1VGRISnBibWNvWTNKbFlYUmxSR1ZzYVcxcGRHVmtLSFpoYkhWbGN5d2dhSE5zVkdWeWJYTXNJQ2NzSUNjc0lESXBMQ0FuYUhOc1lTY3BYRzU5TzF4dUlsMTlcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL3ZhbHVlLXR5cGVzL2hzbC5qc1xuICoqIG1vZHVsZSBpZCA9IDI2XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfZGljdGlvbmFyeSA9IHJlcXVpcmUoJy4vc2V0dGluZ3MvZGljdGlvbmFyeScpO1xuXG52YXIgX3V0aWxzID0gcmVxdWlyZSgnLi4vaW5jL3V0aWxzJyk7XG5cbnZhciBfcHggPSByZXF1aXJlKCcuL3B4Jyk7XG5cbnZhciBfcHgyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcHgpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5leHBvcnRzLmRlZmF1bHQgPSB7XG4gICAgZGVmYXVsdFByb3BzOiBfcHgyLmRlZmF1bHQuZGVmYXVsdFByb3BzLFxuXG4gICAgLypcbiAgICAgICAgU3BsaXQgZGltZW5zaW9ucyBpbiBmb3JtYXQgXCJUb3AgUmlnaHQgQm90dG9tIExlZnRcIlxuICAgICAgICBcbiAgICAgICAgQHBhcmFtIFtzdHJpbmddOiBQb3NpdGlvbiB2YWx1ZXNcbiAgICAgICAgICAgIFwiMjBweCAwIDMwcHggNDBweFwiIC0+IHsyMHB4LCAwLCAzMHB4LCA0MHB4fVxuICAgICAgICAgICAgXCIyMHB4IDAgMzBweFwiIC0+IHsyMHB4LCAwLCAzMHB4LCAwfVxuICAgICAgICAgICAgXCIyMHB4IDBcIiAtPiB7MjBweCwgMCwgMjBweCwgMH1cbiAgICAgICAgICAgIFwiMjBweFwiIC0+IHsyMHB4LCAyMHB4LCAyMHB4LCAyMHB4fVxuICAgICAgICBcbiAgICAgICAgQHJldHVybiBbb2JqZWN0XTogT2JqZWN0IHdpdGggVC9SL0IvTCBtZXRyaWNzXG4gICAgKi9cbiAgICBzcGxpdDogZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgIHZhciBzcGxpdFZhbHVlID0ge307XG4gICAgICAgIHZhciBzcGxpdFBvc2l0aW9ucyA9ICgwLCBfdXRpbHMuc3BsaXRTcGFjZURlbGltaXRlZCkodmFsdWUpO1xuICAgICAgICB2YXIgbnVtUG9zaXRpb25zID0gc3BsaXRQb3NpdGlvbnMubGVuZ3RoO1xuICAgICAgICB2YXIganVtcEJhY2sgPSBudW1Qb3NpdGlvbnMgIT09IDEgPyAyIDogMTtcbiAgICAgICAgdmFyIGogPSAwO1xuXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgNDsgaSsrKSB7XG4gICAgICAgICAgICBzcGxpdFZhbHVlW19kaWN0aW9uYXJ5LnBvc2l0aW9uc1tpXV0gPSBzcGxpdFBvc2l0aW9uc1tqXTtcblxuICAgICAgICAgICAgLy8gSnVtcCBiYWNrICh0byBzdGFydCkgY291bnRlciBpZiB3ZSd2ZSByZWFjaGVkIHRoZSBlbmQgb2Ygb3VyIHZhbHVlc1xuICAgICAgICAgICAgaisrO1xuICAgICAgICAgICAgaiA9IGogPT09IG51bVBvc2l0aW9ucyA/IGogLSBqdW1wQmFjayA6IGo7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gc3BsaXRWYWx1ZTtcbiAgICB9LFxuXG4gICAgY29tYmluZTogZnVuY3Rpb24gKHZhbHVlcykge1xuICAgICAgICByZXR1cm4gKDAsIF91dGlscy5jcmVhdGVEZWxpbWl0ZWQpKHZhbHVlcywgX2RpY3Rpb25hcnkucG9zaXRpb25zLCAnICcpO1xuICAgIH1cbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5OeVl5OTJZV3gxWlMxMGVYQmxjeTl3YjNOcGRHbHZibk11YW5NaVhTd2libUZ0WlhNaU9sdGRMQ0p0WVhCd2FXNW5jeUk2SWpzN096czdPenM3T3pzN096czdhMEpCU1dVN1FVRkRXQ3huUWtGQldTeEZRVUZGTEdGQlFWa3NXVUZCV1RzN096czdPenM3T3pzN096dEJRV0YwUXl4VFFVRkxMRVZCUVVVc1ZVRkJReXhMUVVGTExFVkJRVXM3UVVGRFpDeFpRVUZOTEZWQlFWVXNSMEZCUnl4RlFVRkZMRU5CUVVNN1FVRkRkRUlzV1VGQlRTeGpRVUZqTEVkQlFVY3NWMEZ1UWt3c2JVSkJRVzFDTEVWQmJVSk5MRXRCUVVzc1EwRkJReXhEUVVGRE8wRkJRMnhFTEZsQlFVMHNXVUZCV1N4SFFVRkhMR05CUVdNc1EwRkJReXhOUVVGTkxFTkJRVU03UVVGRE0wTXNXVUZCVFN4UlFVRlJMRWRCUVVjc1FVRkJReXhaUVVGWkxFdEJRVXNzUTBGQlF5eEhRVUZKTEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNN1FVRkRPVU1zV1VGQlNTeERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRPenRCUVVWV0xHRkJRVXNzU1VGQlNTeERRVUZETEVkQlFVY3NRMEZCUXl4RlFVRkZMRU5CUVVNc1IwRkJSeXhEUVVGRExFVkJRVVVzUTBGQlF5eEZRVUZGTEVWQlFVVTdRVUZEZUVJc2MwSkJRVlVzUTBGQlF5eFpRVEZDWkN4VFFVRlRMRU5CTUVKbExFTkJRVU1zUTBGQlF5eERRVUZETEVkQlFVY3NZMEZCWXl4RFFVRkRMRU5CUVVNc1EwRkJRenM3TzBGQlFVTXNRVUZITjBNc1lVRkJReXhGUVVGRkxFTkJRVU03UVVGRFNpeGhRVUZETEVkQlFVY3NRVUZCUXl4RFFVRkRMRXRCUVVzc1dVRkJXU3hIUVVGSkxFTkJRVU1zUjBGQlJ5eFJRVUZSTEVkQlFVY3NRMEZCUXl4RFFVRkRPMU5CUXk5RE96dEJRVVZFTEdWQlFVOHNWVUZCVlN4RFFVRkRPMHRCUTNKQ096dEJRVVZFTEZkQlFVOHNSVUZCUlN4VlFVRkRMRTFCUVUwN1pVRkJTeXhYUVc1RGFFSXNaVUZCWlN4RlFXMURhVUlzVFVGQlRTeGpRWEJEZEVNc1UwRkJVeXhGUVc5RE1FTXNSMEZCUnl4RFFVRkRPMHRCUVVFN1EwRkRMMFFpTENKbWFXeGxJam9pY0c5emFYUnBiMjV6TG1weklpd2ljMjkxY21ObFVtOXZkQ0k2SWk5VmMyVnljeTlOWVhSMFVHVnljbmt2VTJsMFpYTXZjRzl3Ylc5MGFXOXVJaXdpYzI5MWNtTmxjME52Ym5SbGJuUWlPbHNpYVcxd2IzSjBJSHNnY0c5emFYUnBiMjV6SUgwZ1puSnZiU0FuTGk5elpYUjBhVzVuY3k5a2FXTjBhVzl1WVhKNUp6dGNibWx0Y0c5eWRDQjdJR055WldGMFpVUmxiR2x0YVhSbFpDd2djM0JzYVhSVGNHRmpaVVJsYkdsdGFYUmxaQ0I5SUdaeWIyMGdKeTR1TDJsdVl5OTFkR2xzY3ljN1hHNXBiWEJ2Y25RZ2NIaFdZV3gxWlZSNWNHVWdabkp2YlNBbkxpOXdlQ2M3WEc1Y2JtVjRjRzl5ZENCa1pXWmhkV3gwSUh0Y2JpQWdJQ0JrWldaaGRXeDBVSEp2Y0hNNklIQjRWbUZzZFdWVWVYQmxMbVJsWm1GMWJIUlFjbTl3Y3l4Y2JseHVJQ0FnSUM4cVhHNGdJQ0FnSUNBZ0lGTndiR2wwSUdScGJXVnVjMmx2Ym5NZ2FXNGdabTl5YldGMElGd2lWRzl3SUZKcFoyaDBJRUp2ZEhSdmJTQk1aV1owWENKY2JpQWdJQ0FnSUNBZ1hHNGdJQ0FnSUNBZ0lFQndZWEpoYlNCYmMzUnlhVzVuWFRvZ1VHOXphWFJwYjI0Z2RtRnNkV1Z6WEc0Z0lDQWdJQ0FnSUNBZ0lDQmNJakl3Y0hnZ01DQXpNSEI0SURRd2NIaGNJaUF0UGlCN01qQndlQ3dnTUN3Z016QndlQ3dnTkRCd2VIMWNiaUFnSUNBZ0lDQWdJQ0FnSUZ3aU1qQndlQ0F3SURNd2NIaGNJaUF0UGlCN01qQndlQ3dnTUN3Z016QndlQ3dnTUgxY2JpQWdJQ0FnSUNBZ0lDQWdJRndpTWpCd2VDQXdYQ0lnTFQ0Z2V6SXdjSGdzSURBc0lESXdjSGdzSURCOVhHNGdJQ0FnSUNBZ0lDQWdJQ0JjSWpJd2NIaGNJaUF0UGlCN01qQndlQ3dnTWpCd2VDd2dNakJ3ZUN3Z01qQndlSDFjYmlBZ0lDQWdJQ0FnWEc0Z0lDQWdJQ0FnSUVCeVpYUjFjbTRnVzI5aWFtVmpkRjA2SUU5aWFtVmpkQ0IzYVhSb0lGUXZVaTlDTDB3Z2JXVjBjbWxqYzF4dUlDQWdJQ292WEc0Z0lDQWdjM0JzYVhRNklDaDJZV3gxWlNrZ1BUNGdlMXh1SUNBZ0lDQWdJQ0JqYjI1emRDQnpjR3hwZEZaaGJIVmxJRDBnZTMwN1hHNGdJQ0FnSUNBZ0lHTnZibk4wSUhOd2JHbDBVRzl6YVhScGIyNXpJRDBnYzNCc2FYUlRjR0ZqWlVSbGJHbHRhWFJsWkNoMllXeDFaU2s3WEc0Z0lDQWdJQ0FnSUdOdmJuTjBJRzUxYlZCdmMybDBhVzl1Y3lBOUlITndiR2wwVUc5emFYUnBiMjV6TG14bGJtZDBhRHRjYmlBZ0lDQWdJQ0FnWTI5dWMzUWdhblZ0Y0VKaFkyc2dQU0FvYm5WdFVHOXphWFJwYjI1eklDRTlQU0F4S1NBL0lESWdPaUF4TzF4dUlDQWdJQ0FnSUNCc1pYUWdhaUE5SURBN1hHNWNiaUFnSUNBZ0lDQWdabTl5SUNoc1pYUWdhU0E5SURBN0lHa2dQQ0EwT3lCcEt5c3BJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lITndiR2wwVm1Gc2RXVmJjRzl6YVhScGIyNXpXMmxkWFNBOUlITndiR2wwVUc5emFYUnBiMjV6VzJwZE8xeHVYRzRnSUNBZ0lDQWdJQ0FnSUNBdkx5QktkVzF3SUdKaFkyc2dLSFJ2SUhOMFlYSjBLU0JqYjNWdWRHVnlJR2xtSUhkbEozWmxJSEpsWVdOb1pXUWdkR2hsSUdWdVpDQnZaaUJ2ZFhJZ2RtRnNkV1Z6WEc0Z0lDQWdJQ0FnSUNBZ0lDQnFLeXM3WEc0Z0lDQWdJQ0FnSUNBZ0lDQnFJRDBnS0dvZ1BUMDlJRzUxYlZCdmMybDBhVzl1Y3lrZ1B5QnFJQzBnYW5WdGNFSmhZMnNnT2lCcU8xeHVJQ0FnSUNBZ0lDQjlYRzVjYmlBZ0lDQWdJQ0FnY21WMGRYSnVJSE53YkdsMFZtRnNkV1U3WEc0Z0lDQWdmU3hjYmx4dUlDQWdJR052YldKcGJtVTZJQ2gyWVd4MVpYTXBJRDArSUdOeVpXRjBaVVJsYkdsdGFYUmxaQ2gyWVd4MVpYTXNJSEJ2YzJsMGFXOXVjeXdnSnlBbktWeHVmVHNpWFgwPVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvdmFsdWUtdHlwZXMvcG9zaXRpb25zLmpzXG4gKiogbW9kdWxlIGlkID0gMjdcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF91bml0ID0gcmVxdWlyZSgnLi91bml0Jyk7XG5cbnZhciBfdW5pdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF91bml0KTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZXhwb3J0cy5kZWZhdWx0ID0ge1xuICAgIGRlZmF1bHRQcm9wczoge1xuICAgICAgICB1bml0OiAncHgnLFxuICAgICAgICB0eXBlOiBfdW5pdDIuZGVmYXVsdFxuICAgIH1cbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5OeVl5OTJZV3gxWlMxMGVYQmxjeTl3ZUM1cWN5SmRMQ0p1WVcxbGN5STZXMTBzSW0xaGNIQnBibWR6SWpvaU96czdPenM3T3pzN08ydENRVVZsTzBGQlExZ3NaMEpCUVZrc1JVRkJSVHRCUVVOV0xGbEJRVWtzUlVGQlJTeEpRVUZKTzBGQlExWXNXVUZCU1N4blFrRkJWVHRMUVVOcVFqdERRVU5LSWl3aVptbHNaU0k2SW5CNExtcHpJaXdpYzI5MWNtTmxVbTl2ZENJNklpOVZjMlZ5Y3k5TllYUjBVR1Z5Y25rdlUybDBaWE12Y0c5d2JXOTBhVzl1SWl3aWMyOTFjbU5sYzBOdmJuUmxiblFpT2xzaWFXMXdiM0owSUhWdWFYUlVlWEJsSUdaeWIyMGdKeTR2ZFc1cGRDYzdYRzVjYm1WNGNHOXlkQ0JrWldaaGRXeDBJSHRjYmlBZ0lDQmtaV1poZFd4MFVISnZjSE02SUh0Y2JpQWdJQ0FnSUNBZ2RXNXBkRG9nSjNCNEp5eGNiaUFnSUNBZ0lDQWdkSGx3WlRvZ2RXNXBkRlI1Y0dWY2JpQWdJQ0I5WEc1OU95SmRmUT09XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy92YWx1ZS10eXBlcy9weC5qc1xuICoqIG1vZHVsZSBpZCA9IDI4XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfdXRpbHMgPSByZXF1aXJlKCcuLi9pbmMvdXRpbHMnKTtcblxudmFyIF9kaWN0aW9uYXJ5ID0gcmVxdWlyZSgnLi9zZXR0aW5ncy9kaWN0aW9uYXJ5Jyk7XG5cbnZhciBfZGVmYXVsdFByb3BzID0gcmVxdWlyZSgnLi9zZXR0aW5ncy9kZWZhdWx0LXByb3BzJyk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IHtcbiAgICBkZWZhdWx0UHJvcHM6IHtcbiAgICAgICAgUmVkOiBfZGVmYXVsdFByb3BzLnJnYixcbiAgICAgICAgR3JlZW46IF9kZWZhdWx0UHJvcHMucmdiLFxuICAgICAgICBCbHVlOiBfZGVmYXVsdFByb3BzLnJnYixcbiAgICAgICAgQWxwaGE6IF9kZWZhdWx0UHJvcHMub3BhY2l0eVxuICAgIH0sXG5cbiAgICB0ZXN0OiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIHZhbHVlICYmIHZhbHVlLmluZGV4T2YoJ3JnYicpID4gLTE7XG4gICAgfSxcblxuICAgIHNwbGl0OiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgcmV0dXJuICgwLCBfdXRpbHMuZ2V0Q29sb3JWYWx1ZXMpKHZhbHVlLCBfZGljdGlvbmFyeS5yZ2IpO1xuICAgIH0sXG5cbiAgICBjb21iaW5lOiBmdW5jdGlvbiAodmFsdWVzKSB7XG4gICAgICAgIHJldHVybiAoMCwgX3V0aWxzLmNyZWF0ZUZ1bmN0aW9uU3RyaW5nKSgoMCwgX3V0aWxzLmNyZWF0ZURlbGltaXRlZCkodmFsdWVzLCBfZGljdGlvbmFyeS5yZ2IsICcsICcsIDIpLCAncmdiYScpO1xuICAgIH1cbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5OeVl5OTJZV3gxWlMxMGVYQmxjeTl5WjJJdWFuTWlYU3dpYm1GdFpYTWlPbHRkTENKdFlYQndhVzVuY3lJNklqczdPenM3T3pzN096dHJRa0ZKWlR0QlFVTllMR2RDUVVGWkxFVkJRVVU3UVVGRFZpeFhRVUZITEdkQ1FVcEdMRWRCUVVjc1FVRkpWenRCUVVObUxHRkJRVXNzWjBKQlRFb3NSMEZCUnl4QlFVdGhPMEZCUTJwQ0xGbEJRVWtzWjBKQlRrZ3NSMEZCUnl4QlFVMVpPMEZCUTJoQ0xHRkJRVXNzWjBKQlVHVXNUMEZCVHl4QlFVOU9PMHRCUTNoQ096dEJRVVZFTEZGQlFVa3NSVUZCUlN4VlFVRkRMRXRCUVVzN1pVRkJUU3hMUVVGTExFbEJRVWtzUzBGQlN5eERRVUZETEU5QlFVOHNRMEZCUXl4TFFVRkxMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU03UzBGQlF6czdRVUZGY2tRc1UwRkJTeXhGUVVGRkxGVkJRVU1zUzBGQlN6dGxRVUZMTEZkQlpEQkNMR05CUVdNc1JVRmpla0lzUzBGQlN5eGpRV0pxUXl4SFFVRkhMRU5CWVhsRE8wdEJRVUU3TzBGQlJXcEVMRmRCUVU4c1JVRkJSU3hWUVVGRExFMUJRVTA3WlVGQlN5eFhRV2hDUXl4dlFrRkJiMElzUlVGblFrRXNWMEZvUW5KRExHVkJRV1VzUlVGblFuTkRMRTFCUVUwc1kwRm1NMFFzUjBGQlJ5eEZRV1Z2UlN4SlFVRkpMRVZCUVVVc1EwRkJReXhEUVVGRExFVkJRVVVzVFVGQlRTeERRVUZETzB0QlFVRTdRMEZEYUVjaUxDSm1hV3hsSWpvaWNtZGlMbXB6SWl3aWMyOTFjbU5sVW05dmRDSTZJaTlWYzJWeWN5OU5ZWFIwVUdWeWNua3ZVMmwwWlhNdmNHOXdiVzkwYVc5dUlpd2ljMjkxY21ObGMwTnZiblJsYm5RaU9sc2lhVzF3YjNKMElIc2dZM0psWVhSbFJHVnNhVzFwZEdWa0xDQmpjbVZoZEdWR2RXNWpkR2x2YmxOMGNtbHVaeXdnWjJWMFEyOXNiM0pXWVd4MVpYTWdmU0JtY205dElDY3VMaTlwYm1NdmRYUnBiSE1uTzF4dWFXMXdiM0owSUhzZ2NtZGlJR0Z6SUhKbllsUmxjbTF6SUgwZ1puSnZiU0FuTGk5elpYUjBhVzVuY3k5a2FXTjBhVzl1WVhKNUp6dGNibWx0Y0c5eWRDQjdJSEpuWWlCaGN5QmtaV1poZFd4MFVrZENMQ0J2Y0dGamFYUjVJR0Z6SUdSbFptRjFiSFJQY0dGamFYUjVJSDBnWm5KdmJTQW5MaTl6WlhSMGFXNW5jeTlrWldaaGRXeDBMWEJ5YjNCekp6dGNibHh1Wlhod2IzSjBJR1JsWm1GMWJIUWdlMXh1SUNBZ0lHUmxabUYxYkhSUWNtOXdjem9nZTF4dUlDQWdJQ0FnSUNCU1pXUTZJR1JsWm1GMWJIUlNSMElzWEc0Z0lDQWdJQ0FnSUVkeVpXVnVPaUJrWldaaGRXeDBVa2RDTEZ4dUlDQWdJQ0FnSUNCQ2JIVmxPaUJrWldaaGRXeDBVa2RDTEZ4dUlDQWdJQ0FnSUNCQmJIQm9ZVG9nWkdWbVlYVnNkRTl3WVdOcGRIbGNiaUFnSUNCOUxGeHVYRzRnSUNBZ2RHVnpkRG9nS0haaGJIVmxLU0E5UGlBb2RtRnNkV1VnSmlZZ2RtRnNkV1V1YVc1a1pYaFBaaWduY21kaUp5a2dQaUF0TVNrc1hHNWNiaUFnSUNCemNHeHBkRG9nS0haaGJIVmxLU0E5UGlCblpYUkRiMnh2Y2xaaGJIVmxjeWgyWVd4MVpTd2djbWRpVkdWeWJYTXBMRnh1WEc0Z0lDQWdZMjl0WW1sdVpUb2dLSFpoYkhWbGN5a2dQVDRnWTNKbFlYUmxSblZ1WTNScGIyNVRkSEpwYm1jb1kzSmxZWFJsUkdWc2FXMXBkR1ZrS0haaGJIVmxjeXdnY21kaVZHVnliWE1zSUNjc0lDY3NJRElwTENBbmNtZGlZU2NwWEc1OU95SmRmUT09XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy92YWx1ZS10eXBlcy9yZ2IuanNcbiAqKiBtb2R1bGUgaWQgPSAyOVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzLmRlZmF1bHQgPSB7XG4gICAgZGVmYXVsdFByb3BzOiB7XG4gICAgICAgIGN1cnJlbnQ6IDFcbiAgICB9XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluTnlZeTkyWVd4MVpTMTBlWEJsY3k5elkyRnNaUzVxY3lKZExDSnVZVzFsY3lJNlcxMHNJbTFoY0hCcGJtZHpJam9pT3pzN2EwSkJRV1U3UVVGRFdDeG5Ra0ZCV1N4RlFVRkZPMEZCUTFZc1pVRkJUeXhGUVVGRkxFTkJRVU03UzBGRFlqdERRVU5LSWl3aVptbHNaU0k2SW5OallXeGxMbXB6SWl3aWMyOTFjbU5sVW05dmRDSTZJaTlWYzJWeWN5OU5ZWFIwVUdWeWNua3ZVMmwwWlhNdmNHOXdiVzkwYVc5dUlpd2ljMjkxY21ObGMwTnZiblJsYm5RaU9sc2laWGh3YjNKMElHUmxabUYxYkhRZ2UxeHVJQ0FnSUdSbFptRjFiSFJRY205d2N6b2dlMXh1SUNBZ0lDQWdJQ0JqZFhKeVpXNTBPaUF4WEc0Z0lDQWdmVnh1ZlRzaVhYMD1cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL3ZhbHVlLXR5cGVzL3NjYWxlLmpzXG4gKiogbW9kdWxlIGlkID0gMzBcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxudmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF9jb2xvciA9IHJlcXVpcmUoJy4vY29sb3InKTtcblxudmFyIF9jb2xvcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jb2xvcik7XG5cbnZhciBfcHggPSByZXF1aXJlKCcuL3B4Jyk7XG5cbnZhciBfZGljdGlvbmFyeSA9IHJlcXVpcmUoJy4vc2V0dGluZ3MvZGljdGlvbmFyeScpO1xuXG52YXIgX3V0aWxzID0gcmVxdWlyZSgnLi4vaW5jL3V0aWxzJyk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbnZhciBzaGFkb3dXaXRob3V0Q29sb3JUZXJtcyA9IF9kaWN0aW9uYXJ5LnNoYWRvdy5zbGljZSgwLCA0KTtcblxuZXhwb3J0cy5kZWZhdWx0ID0ge1xuICAgIGRlZmF1bHRQcm9wczogX2V4dGVuZHMoe30sIF9jb2xvcjIuZGVmYXVsdC5kZWZhdWx0UHJvcHMsIHtcbiAgICAgICAgWDogX3B4LmRlZmF1bHRQcm9wcyxcbiAgICAgICAgWTogX3B4LmRlZmF1bHRQcm9wcyxcbiAgICAgICAgUmFkaXVzOiBfcHguZGVmYXVsdFByb3BzLFxuICAgICAgICBTcHJlYWQ6IF9weC5kZWZhdWx0UHJvcHNcbiAgICB9KSxcblxuICAgIHNwbGl0OiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgdmFyIGJpdHMgPSAoMCwgX3V0aWxzLnNwbGl0U3BhY2VEZWxpbWl0ZWQpKHZhbHVlKTtcbiAgICAgICAgdmFyIGhhc1JlYWNoZWRDb2xvciA9IGZhbHNlO1xuICAgICAgICB2YXIgY29sb3JQcm9wID0gJyc7XG4gICAgICAgIHZhciBzcGxpdFZhbHVlID0ge307XG5cbiAgICAgICAgYml0cy5mb3JFYWNoKGZ1bmN0aW9uIChiaXQsIGkpIHtcbiAgICAgICAgICAgIC8vIElmIHdlJ3ZlIHJlYWNoZWQgdGhlIGNvbG9yIHByb3BzLCBhcHBlbmQgdG8gY29sb3Igc3RyaW5nXG4gICAgICAgICAgICBpZiAoaGFzUmVhY2hlZENvbG9yIHx8IF9jb2xvcjIuZGVmYXVsdC50ZXN0KGJpdCkpIHtcbiAgICAgICAgICAgICAgICBoYXNSZWFjaGVkQ29sb3IgPSB0cnVlO1xuICAgICAgICAgICAgICAgIGNvbG9yUHJvcCArPSBiaXQ7XG5cbiAgICAgICAgICAgICAgICAvLyBFbHNlIHByb2Nlc3Mgc2hhZG93IHZhbHVlXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBzcGxpdFZhbHVlW19kaWN0aW9uYXJ5LnNoYWRvd1tpXV0gPSBiaXQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICB2YXIgc3BsaXRDb2xvclByb3BzID0gX2NvbG9yMi5kZWZhdWx0LnNwbGl0KGNvbG9yUHJvcCk7XG5cbiAgICAgICAgcmV0dXJuIF9leHRlbmRzKHt9LCBzcGxpdFZhbHVlLCB7IHNwbGl0Q29sb3JQcm9wczogc3BsaXRDb2xvclByb3BzIH0pO1xuICAgIH0sXG5cbiAgICBjb21iaW5lOiBmdW5jdGlvbiAodmFsdWVzKSB7XG4gICAgICAgIHJldHVybiAoMCwgX3V0aWxzLmNyZWF0ZURlbGltaXRlZCkodmFsdWVzLCBzaGFkb3dXaXRob3V0Q29sb3JUZXJtcywgJyAnKSArIF9jb2xvcjIuZGVmYXVsdC5jb21iaW5lKHZhbHVlcyk7XG4gICAgfVxufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbk55WXk5MllXeDFaUzEwZVhCbGN5OXphR0ZrYjNjdWFuTWlYU3dpYm1GdFpYTWlPbHRkTENKdFlYQndhVzVuY3lJNklqczdPenM3T3pzN096czdPenM3T3pzN08wRkJTMEVzU1VGQlRTeDFRa0ZCZFVJc1IwRkJSeXhaUVVoMlFpeE5RVUZOTEVOQlJ6WkNMRXRCUVVzc1EwRkJReXhEUVVGRExFVkJRVVVzUTBGQlF5eERRVUZETEVOQlFVTTdPMnRDUVVWNlF6dEJRVU5ZTEdkQ1FVRlpMR1ZCUTB3c1owSkJRVTBzV1VGQldUdEJRVU55UWl4VFFVRkRMRTFCVkVFc1dVRkJXU3hCUVZOSk8wRkJRMnBDTEZOQlFVTXNUVUZXUVN4WlFVRlpMRUZCVlVrN1FVRkRha0lzWTBGQlRTeE5RVmhNTEZsQlFWa3NRVUZYVXp0QlFVTjBRaXhqUVVGTkxFMUJXa3dzV1VGQldTeEJRVmxUTzAxQlEzcENPenRCUVVWRUxGTkJRVXNzUlVGQlJTeFZRVUZETEV0QlFVc3NSVUZCU3p0QlFVTmtMRmxCUVUwc1NVRkJTU3hIUVVGSExGZEJaRm9zYlVKQlFXMUNMRVZCWTJFc1MwRkJTeXhEUVVGRExFTkJRVU03UVVGRGVFTXNXVUZCU1N4bFFVRmxMRWRCUVVjc1MwRkJTeXhEUVVGRE8wRkJRelZDTEZsQlFVa3NVMEZCVXl4SFFVRkhMRVZCUVVVc1EwRkJRenRCUVVOdVFpeFpRVUZKTEZWQlFWVXNSMEZCUnl4RlFVRkZMRU5CUVVNN08wRkJSWEJDTEZsQlFVa3NRMEZCUXl4UFFVRlBMRU5CUVVNc1ZVRkJReXhIUVVGSExFVkJRVVVzUTBGQlF5eEZRVUZMT3p0QlFVVnlRaXhuUWtGQlNTeGxRVUZsTEVsQlFVa3NaMEpCUVUwc1NVRkJTU3hEUVVGRExFZEJRVWNzUTBGQlF5eEZRVUZGTzBGQlEzQkRMQ3RDUVVGbExFZEJRVWNzU1VGQlNTeERRVUZETzBGQlEzWkNMSGxDUVVGVExFbEJRVWtzUjBGQlJ6czdPMEZCUVVNc1lVRkhjRUlzVFVGQlRUdEJRVU5JTERoQ1FVRlZMRU5CUVVNc1dVRTFRbXhDTEUxQlFVMHNRMEUwUW5kQ0xFTkJRVU1zUTBGQlF5eERRVUZETEVkQlFVY3NSMEZCUnl4RFFVRkRPMmxDUVVOd1F6dFRRVU5LTEVOQlFVTXNRMEZCUXpzN1FVRkZTQ3haUVVGTkxHVkJRV1VzUjBGQlJ5eG5Ra0ZCVFN4TFFVRkxMRU5CUVVNc1UwRkJVeXhEUVVGRExFTkJRVU03TzBGQlJTOURMRFJDUVVGWkxGVkJRVlVzU1VGQlJTeGxRVUZsTEVWQlFXWXNaVUZCWlN4SlFVRkhPMHRCUXpkRE96dEJRVVZFTEZkQlFVOHNSVUZCUlN4VlFVRkRMRTFCUVUwN1pVRkJTeXhYUVhCRFN5eGxRVUZsTEVWQmIwTktMRTFCUVUwc1JVRkJSU3gxUWtGQmRVSXNSVUZCUlN4SFFVRkhMRU5CUVVNc1IwRkJSeXhuUWtGQlRTeFBRVUZQTEVOQlFVTXNUVUZCVFN4RFFVRkRPMHRCUVVFN1EwRkRja2NpTENKbWFXeGxJam9pYzJoaFpHOTNMbXB6SWl3aWMyOTFjbU5sVW05dmRDSTZJaTlWYzJWeWN5OU5ZWFIwVUdWeWNua3ZVMmwwWlhNdmNHOXdiVzkwYVc5dUlpd2ljMjkxY21ObGMwTnZiblJsYm5RaU9sc2lhVzF3YjNKMElHTnZiRzl5SUdaeWIyMGdKeTR2WTI5c2IzSW5PMXh1YVcxd2IzSjBJSHNnWkdWbVlYVnNkRkJ5YjNCeklHRnpJSEI0UkdWbVlYVnNkRkJ5YjNCeklIMGdabkp2YlNBbkxpOXdlQ2M3WEc1cGJYQnZjblFnZXlCemFHRmtiM2NnWVhNZ2MyaGhaRzkzVkdWeWJYTWdmU0JtY205dElDY3VMM05sZEhScGJtZHpMMlJwWTNScGIyNWhjbmtuTzF4dWFXMXdiM0owSUhzZ2MzQnNhWFJUY0dGalpVUmxiR2x0YVhSbFpDd2dZM0psWVhSbFJHVnNhVzFwZEdWa0lIMGdabkp2YlNBbkxpNHZhVzVqTDNWMGFXeHpKenRjYmx4dVkyOXVjM1FnYzJoaFpHOTNWMmwwYUc5MWRFTnZiRzl5VkdWeWJYTWdQU0J6YUdGa2IzZFVaWEp0Y3k1emJHbGpaU2d3TENBMEtUdGNibHh1Wlhod2IzSjBJR1JsWm1GMWJIUWdlMXh1SUNBZ0lHUmxabUYxYkhSUWNtOXdjem9nZTF4dUlDQWdJQ0FnSUNBdUxpNWpiMnh2Y2k1a1pXWmhkV3gwVUhKdmNITXNYRzRnSUNBZ0lDQWdJRmc2SUhCNFJHVm1ZWFZzZEZCeWIzQnpMRnh1SUNBZ0lDQWdJQ0JaT2lCd2VFUmxabUYxYkhSUWNtOXdjeXhjYmlBZ0lDQWdJQ0FnVW1Ga2FYVnpPaUJ3ZUVSbFptRjFiSFJRY205d2N5eGNiaUFnSUNBZ0lDQWdVM0J5WldGa09pQndlRVJsWm1GMWJIUlFjbTl3YzF4dUlDQWdJSDBzWEc1Y2JpQWdJQ0J6Y0d4cGREb2dLSFpoYkhWbEtTQTlQaUI3WEc0Z0lDQWdJQ0FnSUdOdmJuTjBJR0pwZEhNZ1BTQnpjR3hwZEZOd1lXTmxSR1ZzYVcxcGRHVmtLSFpoYkhWbEtUdGNiaUFnSUNBZ0lDQWdiR1YwSUdoaGMxSmxZV05vWldSRGIyeHZjaUE5SUdaaGJITmxPMXh1SUNBZ0lDQWdJQ0JzWlhRZ1kyOXNiM0pRY205d0lEMGdKeWM3WEc0Z0lDQWdJQ0FnSUd4bGRDQnpjR3hwZEZaaGJIVmxJRDBnZTMwN1hHNWNiaUFnSUNBZ0lDQWdZbWwwY3k1bWIzSkZZV05vS0NoaWFYUXNJR2twSUQwK0lIdGNiaUFnSUNBZ0lDQWdJQ0FnSUM4dklFbG1JSGRsSjNabElISmxZV05vWldRZ2RHaGxJR052Ykc5eUlIQnliM0J6TENCaGNIQmxibVFnZEc4Z1kyOXNiM0lnYzNSeWFXNW5YRzRnSUNBZ0lDQWdJQ0FnSUNCcFppQW9hR0Z6VW1WaFkyaGxaRU52Ykc5eUlIeDhJR052Ykc5eUxuUmxjM1FvWW1sMEtTa2dlMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJR2hoYzFKbFlXTm9aV1JEYjJ4dmNpQTlJSFJ5ZFdVN1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ1kyOXNiM0pRY205d0lDczlJR0pwZER0Y2JseHVJQ0FnSUNBZ0lDQWdJQ0FnTHk4Z1JXeHpaU0J3Y205alpYTnpJSE5vWVdSdmR5QjJZV3gxWlZ4dUlDQWdJQ0FnSUNBZ0lDQWdmU0JsYkhObElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQnpjR3hwZEZaaGJIVmxXM05vWVdSdmQxUmxjbTF6VzJsZFhTQTlJR0pwZER0Y2JpQWdJQ0FnSUNBZ0lDQWdJSDFjYmlBZ0lDQWdJQ0FnZlNrN1hHNWNiaUFnSUNBZ0lDQWdZMjl1YzNRZ2MzQnNhWFJEYjJ4dmNsQnliM0J6SUQwZ1kyOXNiM0l1YzNCc2FYUW9ZMjlzYjNKUWNtOXdLVHRjYmx4dUlDQWdJQ0FnSUNCeVpYUjFjbTRnZXlBdUxpNXpjR3hwZEZaaGJIVmxMQ0J6Y0d4cGRFTnZiRzl5VUhKdmNITWdmVHRjYmlBZ0lDQjlMRnh1WEc0Z0lDQWdZMjl0WW1sdVpUb2dLSFpoYkhWbGN5a2dQVDRnWTNKbFlYUmxSR1ZzYVcxcGRHVmtLSFpoYkhWbGN5d2djMmhoWkc5M1YybDBhRzkxZEVOdmJHOXlWR1Z5YlhNc0lDY2dKeWtnS3lCamIyeHZjaTVqYjIxaWFXNWxLSFpoYkhWbGN5bGNibjA3WEc0aVhYMD1cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL3ZhbHVlLXR5cGVzL3NoYWRvdy5qc1xuICoqIG1vZHVsZSBpZCA9IDMxXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfdXRpbHMgPSByZXF1aXJlKCcuLi9pbmMvdXRpbHMnKTtcblxuLypcbiAgICBTcGxpdCBhIHZhbHVlIGludG8gYSB2YWx1ZS91bml0IG9iamVjdFxuICAgIFxuICAgICAgICBcIjIwMHB4XCIgLT4geyB2YWx1ZTogMjAwLCB1bml0OiBcInB4XCIgfVxuICAgICAgICBcbiAgICBAcGFyYW0gW3N0cmluZ106IFZhbHVlIHRvIHNwbGl0XG4gICAgQHJldHVybiBbb2JqZWN0XTogT2JqZWN0IHdpdGggdmFsdWUgYW5kIHVuaXQgcHJvcHNcbiovXG52YXIgZmluZFZhbHVlQW5kVW5pdCA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgIGlmICh2YWx1ZS5tYXRjaCkge1xuICAgICAgICB2YXIgc3BsaXRWYWx1ZSA9IHZhbHVlLm1hdGNoKC8oLT9cXGQqXFwuP1xcZCopKC4qKS8pO1xuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB2YWx1ZTogcGFyc2VGbG9hdChzcGxpdFZhbHVlWzFdKSxcbiAgICAgICAgICAgIHVuaXQ6IHNwbGl0VmFsdWVbMl1cbiAgICAgICAgfTtcbiAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4geyB2YWx1ZTogdmFsdWUgfTtcbiAgICB9XG59O1xuXG5leHBvcnRzLmRlZmF1bHQgPSB7XG4gICAgdGVzdDogZnVuY3Rpb24gKHVucGFyc2VkKSB7XG4gICAgICAgIHZhciBfZmluZFZhbHVlQW5kVW5pdCA9IGZpbmRWYWx1ZUFuZFVuaXQodW5wYXJzZWQpO1xuXG4gICAgICAgIHZhciB2YWx1ZSA9IF9maW5kVmFsdWVBbmRVbml0LnZhbHVlO1xuXG4gICAgICAgIHJldHVybiAoMCwgX3V0aWxzLmlzTnVtKSh2YWx1ZSkgJiYgIWlzTmFOKHZhbHVlKSA/IHRydWUgOiBmYWxzZTtcbiAgICB9LFxuXG4gICAgcGFyc2U6IGZ1bmN0aW9uICh1bnBhcnNlZCwgcGFyZW50KSB7XG4gICAgICAgIHZhciBfZmluZFZhbHVlQW5kVW5pdDIgPSBmaW5kVmFsdWVBbmRVbml0KHVucGFyc2VkKTtcblxuICAgICAgICB2YXIgdmFsdWUgPSBfZmluZFZhbHVlQW5kVW5pdDIudmFsdWU7XG4gICAgICAgIHZhciB1bml0ID0gX2ZpbmRWYWx1ZUFuZFVuaXQyLnVuaXQ7XG5cbiAgICAgICAgaWYgKHVuaXQgJiYgdW5pdCAhPT0gdW5pdCkge1xuICAgICAgICAgICAgcGFyZW50LnVuaXQgPSB1bml0O1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH0sXG5cbiAgICBzZXJpYWxpemU6IGZ1bmN0aW9uIChwYXJzZWQsIHBhcmVudCkge1xuICAgICAgICByZXR1cm4gcGFyc2VkICsgKHBhcmVudC51bml0IHx8ICcnKTtcbiAgICB9XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluTnlZeTkyWVd4MVpTMTBlWEJsY3k5MWJtbDBMbXB6SWwwc0ltNWhiV1Z6SWpwYlhTd2liV0Z3Y0dsdVozTWlPaUk3T3pzN096czdPenM3T3pzN08wRkJVMEVzU1VGQlRTeG5Ra0ZCWjBJc1IwRkJSeXhWUVVGRExFdEJRVXNzUlVGQlN6dEJRVU5vUXl4UlFVRkpMRXRCUVVzc1EwRkJReXhMUVVGTExFVkJRVVU3UVVGRFlpeFpRVUZOTEZWQlFWVXNSMEZCUnl4TFFVRkxMRU5CUVVNc1MwRkJTeXhEUVVGRExHMUNRVUZ0UWl4RFFVRkRMRU5CUVVNN08wRkJSWEJFTEdWQlFVODdRVUZEU0N4cFFrRkJTeXhGUVVGRkxGVkJRVlVzUTBGQlF5eFZRVUZWTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNN1FVRkRhRU1zWjBKQlFVa3NSVUZCUnl4VlFVRlZMRU5CUVVNc1EwRkJReXhEUVVGRE8xTkJRM1pDTEVOQlFVTTdTMEZEVEN4TlFVRk5PMEZCUTBnc1pVRkJUeXhGUVVGRkxFdEJRVXNzUlVGQlRDeExRVUZMTEVWQlFVVXNRMEZCUXp0TFFVTndRanREUVVOS0xFTkJRVU03TzJ0Q1FVVmhPMEZCUTFnc1VVRkJTU3hGUVVGRkxGVkJRVlVzVVVGQlVTeEZRVUZGTzJkRFFVTktMR2RDUVVGblFpeERRVUZETEZGQlFWRXNRMEZCUXpzN1dVRkJjRU1zUzBGQlN5eHhRa0ZCVEN4TFFVRkxPenRCUVVOaUxHVkJRVThzUVVGQlF5eFhRWHBDVUN4TFFVRkxMRVZCZVVKUkxFdEJRVXNzUTBGQlF5eEpRVUZKTEVOQlFVTXNTMEZCU3l4RFFVRkRMRXRCUVVzc1EwRkJReXhIUVVGSkxFbEJRVWtzUjBGQlJ5eExRVUZMTEVOQlFVTTdTMEZEZWtRN08wRkJSVVFzVTBGQlN5eEZRVUZGTEZWQlFWVXNVVUZCVVN4RlFVRkZMRTFCUVUwc1JVRkJSVHRwUTBGRFVDeG5Ra0ZCWjBJc1EwRkJReXhSUVVGUkxFTkJRVU03TzFsQlFURkRMRXRCUVVzc2MwSkJRVXdzUzBGQlN6dFpRVUZGTEVsQlFVa3NjMEpCUVVvc1NVRkJTVHM3UVVGRmJrSXNXVUZCU1N4SlFVRkpMRWxCUVVrc1NVRkJTU3hMUVVGTExFbEJRVWtzUlVGQlJUdEJRVU4yUWl4clFrRkJUU3hEUVVGRExFbEJRVWtzUjBGQlJ5eEpRVUZKTEVOQlFVTTdVMEZEZEVJN08wRkJSVVFzWlVGQlR5eExRVUZMTEVOQlFVTTdTMEZEYUVJN08wRkJSVVFzWVVGQlV5eEZRVUZGTEZWQlFVTXNUVUZCVFN4RlFVRkZMRTFCUVUwN1pVRkJTeXhOUVVGTkxFbEJRVWtzVFVGQlRTeERRVUZETEVsQlFVa3NTVUZCU1N4RlFVRkZMRU5CUVVFc1FVRkJRenRMUVVGQk8wTkJRemxFSWl3aVptbHNaU0k2SW5WdWFYUXVhbk1pTENKemIzVnlZMlZTYjI5MElqb2lMMVZ6WlhKekwwMWhkSFJRWlhKeWVTOVRhWFJsY3k5d2IzQnRiM1JwYjI0aUxDSnpiM1Z5WTJWelEyOXVkR1Z1ZENJNld5SnBiWEJ2Y25RZ2V5QnBjMDUxYlNCOUlHWnliMjBnSnk0dUwybHVZeTkxZEdsc2N5YzdYRzR2S2x4dUlDQWdJRk53YkdsMElHRWdkbUZzZFdVZ2FXNTBieUJoSUhaaGJIVmxMM1Z1YVhRZ2IySnFaV04wWEc0Z0lDQWdYRzRnSUNBZ0lDQWdJRndpTWpBd2NIaGNJaUF0UGlCN0lIWmhiSFZsT2lBeU1EQXNJSFZ1YVhRNklGd2ljSGhjSWlCOVhHNGdJQ0FnSUNBZ0lGeHVJQ0FnSUVCd1lYSmhiU0JiYzNSeWFXNW5YVG9nVm1Gc2RXVWdkRzhnYzNCc2FYUmNiaUFnSUNCQWNtVjBkWEp1SUZ0dlltcGxZM1JkT2lCUFltcGxZM1FnZDJsMGFDQjJZV3gxWlNCaGJtUWdkVzVwZENCd2NtOXdjMXh1S2k5Y2JtTnZibk4wSUdacGJtUldZV3gxWlVGdVpGVnVhWFFnUFNBb2RtRnNkV1VwSUQwK0lIdGNiaUFnSUNCcFppQW9kbUZzZFdVdWJXRjBZMmdwSUh0Y2JpQWdJQ0FnSUNBZ1kyOXVjM1FnYzNCc2FYUldZV3gxWlNBOUlIWmhiSFZsTG0xaGRHTm9LQzhvTFQ5Y1hHUXFYRnd1UDF4Y1pDb3BLQzRxS1M4cE8xeHVYRzRnSUNBZ0lDQWdJSEpsZEhWeWJpQjdYRzRnSUNBZ0lDQWdJQ0FnSUNCMllXeDFaVG9nY0dGeWMyVkdiRzloZENoemNHeHBkRlpoYkhWbFd6RmRLU3hjYmlBZ0lDQWdJQ0FnSUNBZ0lIVnVhWFE2SUNCemNHeHBkRlpoYkhWbFd6SmRYRzRnSUNBZ0lDQWdJSDA3WEc0Z0lDQWdmU0JsYkhObElIdGNiaUFnSUNBZ0lDQWdjbVYwZFhKdUlIc2dkbUZzZFdVZ2ZUdGNiaUFnSUNCOVhHNTlPMXh1WEc1bGVIQnZjblFnWkdWbVlYVnNkQ0I3WEc0Z0lDQWdkR1Z6ZERvZ1puVnVZM1JwYjI0Z0tIVnVjR0Z5YzJWa0tTQjdYRzRnSUNBZ0lDQWdJR052Ym5OMElIc2dkbUZzZFdVZ2ZTQTlJR1pwYm1SV1lXeDFaVUZ1WkZWdWFYUW9kVzV3WVhKelpXUXBPMXh1SUNBZ0lDQWdJQ0J5WlhSMWNtNGdLR2x6VG5WdEtIWmhiSFZsS1NBbUppQWhhWE5PWVU0b2RtRnNkV1VwS1NBL0lIUnlkV1VnT2lCbVlXeHpaVHRjYmlBZ0lDQjlMRnh1WEc0Z0lDQWdjR0Z5YzJVNklHWjFibU4wYVc5dUlDaDFibkJoY25ObFpDd2djR0Z5Wlc1MEtTQjdYRzRnSUNBZ0lDQWdJR052Ym5OMElIc2dkbUZzZFdVc0lIVnVhWFFnZlNBOUlHWnBibVJXWVd4MVpVRnVaRlZ1YVhRb2RXNXdZWEp6WldRcE8xeHVYRzRnSUNBZ0lDQWdJR2xtSUNoMWJtbDBJQ1ltSUhWdWFYUWdJVDA5SUhWdWFYUXBJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lIQmhjbVZ1ZEM1MWJtbDBJRDBnZFc1cGREdGNiaUFnSUNBZ0lDQWdmVnh1WEc0Z0lDQWdJQ0FnSUhKbGRIVnliaUIyWVd4MVpUdGNiaUFnSUNCOUxGeHVYRzRnSUNBZ2MyVnlhV0ZzYVhwbE9pQW9jR0Z5YzJWa0xDQndZWEpsYm5RcElEMCtJSEJoY25ObFpDQXJJQ2h3WVhKbGJuUXVkVzVwZENCOGZDQW5KeWxjYm4wN1hHNGlYWDA9XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy92YWx1ZS10eXBlcy91bml0LmpzXG4gKiogbW9kdWxlIGlkID0gMzJcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHMuY2lyY3VsYXJNb3Rpb24gPSBleHBvcnRzLmNyZWF0ZU1hcHBlciA9IHVuZGVmaW5lZDtcblxudmFyIF9jYWxjID0gcmVxdWlyZSgnLi4vaW5jL2NhbGMnKTtcblxudmFyIGNyZWF0ZU1hcHBlciA9IGV4cG9ydHMuY3JlYXRlTWFwcGVyID0gZnVuY3Rpb24gKGZyb20sIHRvKSB7XG4gICAgdmFyIG1hcExlbmd0aCA9IGZyb20ubGVuZ3RoO1xuXG4gICAgcmV0dXJuIGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICBmb3IgKHZhciBpID0gMTsgaSA8IG1hcExlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAodmFsdWUgPCBmcm9tW2ldIHx8IGkgPT09IG1hcExlbmd0aCkge1xuICAgICAgICAgICAgICAgIHJldHVybiAoMCwgX2NhbGMuZ2V0VmFsdWVGcm9tUHJvZ3Jlc3MpKCgwLCBfY2FsYy5yZXN0cmljdCkoKDAsIF9jYWxjLmdldFByb2dyZXNzRnJvbVZhbHVlKSh2YWx1ZSwgZnJvbVtpIC0gMV0sIGZyb21baV0pLCAwLCAxKSwgdG9baSAtIDFdLCB0b1tpXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xufTtcblxudmFyIGNpcmN1bGFyTW90aW9uID0gZXhwb3J0cy5jaXJjdWxhck1vdGlvbiA9IGZ1bmN0aW9uICh2LCBrZXksIF9yZWYpIHtcbiAgICB2YXIgdmFsdWVzID0gX3JlZi52YWx1ZXM7XG4gICAgcmV0dXJuICgwLCBfY2FsYy5wb2ludEZyb21BbmdsZUFuZERpc3RhbmNlKSh7XG4gICAgICAgIHg6IHZhbHVlcy5vcmlnaW5YLmN1cnJlbnQsXG4gICAgICAgIHk6IHZhbHVlcy5vcmlnaW5ZLmN1cnJlbnRcbiAgICB9LCB2YWx1ZXMuYW5nbGUuY3VycmVudCwgdmFsdWVzLmRpc3RhbmNlLmN1cnJlbnQpW2tleV07XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluTnlZeTlwYm1NdmRISmhibk5tYjNKdFpYSnpMbXB6SWwwc0ltNWhiV1Z6SWpwYlhTd2liV0Z3Y0dsdVozTWlPaUk3T3pzN096czdRVUZGVHl4SlFVRk5MRmxCUVZrc1YwRkJXaXhaUVVGWkxFZEJRVWNzVlVGQlF5eEpRVUZKTEVWQlFVVXNSVUZCUlN4RlFVRkxPMEZCUTNSRExGRkJRVTBzVTBGQlV5eEhRVUZITEVsQlFVa3NRMEZCUXl4TlFVRk5MRU5CUVVNN08wRkJSVGxDTEZkQlFVOHNWVUZCUXl4TFFVRkxMRVZCUVVzN1FVRkRaQ3hoUVVGTExFbEJRVWtzUTBGQlF5eEhRVUZITEVOQlFVTXNSVUZCUlN4RFFVRkRMRWRCUVVjc1UwRkJVeXhGUVVGRkxFTkJRVU1zUlVGQlJTeEZRVUZGTzBGQlEyaERMR2RDUVVGSkxFdEJRVXNzUjBGQlJ5eEpRVUZKTEVOQlFVTXNRMEZCUXl4RFFVRkRMRWxCUVVrc1EwRkJReXhMUVVGTExGTkJRVk1zUlVGQlJUdEJRVU53UXl4MVFrRkJUeXhWUVZKUkxHOUNRVUZ2UWl4RlFWRlFMRlZCVWxNc1VVRkJVU3hGUVZGU0xGVkJValZETEc5Q1FVRnZRaXhGUVZFMlF5eExRVUZMTEVWQlFVVXNTVUZCU1N4RFFVRkRMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU1zUlVGQlJTeEpRVUZKTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1JVRkJSU3hEUVVGRExFVkJRVVVzUTBGQlF5eERRVUZETEVWQlFVVXNSVUZCUlN4RFFVRkRMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU1zUlVGQlJTeEZRVUZGTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJRenRoUVVOd1NEdFRRVU5LTzB0QlEwb3NRMEZCUXp0RFFVTk1MRU5CUVVNN08wRkJSVXNzU1VGQlRTeGpRVUZqTEZkQlFXUXNZMEZCWXl4SFFVRkhMRlZCUVVNc1EwRkJReXhGUVVGRkxFZEJRVWM3VVVGQlNTeE5RVUZOTEZGQlFVNHNUVUZCVFR0WFFVTXpReXhWUVdZeVJDeDVRa0ZCZVVJc1JVRmxNVVE3UVVGRGRFSXNVMEZCUXl4RlFVRkZMRTFCUVUwc1EwRkJReXhQUVVGUExFTkJRVU1zVDBGQlR6dEJRVU42UWl4VFFVRkRMRVZCUVVVc1RVRkJUU3hEUVVGRExFOUJRVThzUTBGQlF5eFBRVUZQTzB0QlF6VkNMRVZCUVVVc1RVRkJUU3hEUVVGRExFdEJRVXNzUTBGQlF5eFBRVUZQTEVWQlFVVXNUVUZCVFN4RFFVRkRMRkZCUVZFc1EwRkJReXhQUVVGUExFTkJRVU1zUTBGQlF5eEhRVUZITEVOQlFVTTdRMEZCUVN4RFFVRkRJaXdpWm1sc1pTSTZJblJ5WVc1elptOXliV1Z5Y3k1cWN5SXNJbk52ZFhKalpWSnZiM1FpT2lJdlZYTmxjbk12VFdGMGRGQmxjbko1TDFOcGRHVnpMM0J2Y0cxdmRHbHZiaUlzSW5OdmRYSmpaWE5EYjI1MFpXNTBJanBiSW1sdGNHOXlkQ0I3SUdkbGRGQnliMmR5WlhOelJuSnZiVlpoYkhWbExDQm5aWFJXWVd4MVpVWnliMjFRY205bmNtVnpjeXdnY21WemRISnBZM1FzSUhCdmFXNTBSbkp2YlVGdVoyeGxRVzVrUkdsemRHRnVZMlVnZlNCbWNtOXRJQ2N1TGk5cGJtTXZZMkZzWXljN1hHNWNibVY0Y0c5eWRDQmpiMjV6ZENCamNtVmhkR1ZOWVhCd1pYSWdQU0FvWm5KdmJTd2dkRzhwSUQwK0lIdGNiaUFnSUNCamIyNXpkQ0J0WVhCTVpXNW5kR2dnUFNCbWNtOXRMbXhsYm1kMGFEdGNibHh1SUNBZ0lISmxkSFZ5YmlBb2RtRnNkV1VwSUQwK0lIdGNiaUFnSUNBZ0lDQWdabTl5SUNoc1pYUWdhU0E5SURFN0lHa2dQQ0J0WVhCTVpXNW5kR2c3SUdrckt5a2dlMXh1SUNBZ0lDQWdJQ0FnSUNBZ2FXWWdLSFpoYkhWbElEd2dabkp2YlZ0cFhTQjhmQ0JwSUQwOVBTQnRZWEJNWlc1bmRHZ3BJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0J5WlhSMWNtNGdaMlYwVm1Gc2RXVkdjbTl0VUhKdlozSmxjM01vY21WemRISnBZM1FvWjJWMFVISnZaM0psYzNOR2NtOXRWbUZzZFdVb2RtRnNkV1VzSUdaeWIyMWJhU0F0SURGZExDQm1jbTl0VzJsZEtTd2dNQ3dnTVNrc0lIUnZXMmtnTFNBeFhTd2dkRzliYVYwcE8xeHVJQ0FnSUNBZ0lDQWdJQ0FnZlZ4dUlDQWdJQ0FnSUNCOVhHNGdJQ0FnZlR0Y2JuMDdYRzVjYm1WNGNHOXlkQ0JqYjI1emRDQmphWEpqZFd4aGNrMXZkR2x2YmlBOUlDaDJMQ0JyWlhrc0lIc2dkbUZzZFdWeklIMHBJRDArSUZ4dUlDQWdJSEJ2YVc1MFJuSnZiVUZ1WjJ4bFFXNWtSR2x6ZEdGdVkyVW9lMXh1SUNBZ0lDQWdJQ0I0T2lCMllXeDFaWE11YjNKcFoybHVXQzVqZFhKeVpXNTBMRnh1SUNBZ0lDQWdJQ0I1T2lCMllXeDFaWE11YjNKcFoybHVXUzVqZFhKeVpXNTBJRnh1SUNBZ0lIMHNJSFpoYkhWbGN5NWhibWRzWlM1amRYSnlaVzUwTENCMllXeDFaWE11WkdsemRHRnVZMlV1WTNWeWNtVnVkQ2xiYTJWNVhUdGNibHh1SWwxOVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvaW5jL3RyYW5zZm9ybWVycy5qc1xuICoqIG1vZHVsZSBpZCA9IDMzXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfY2FsYyA9IHJlcXVpcmUoJy4vY2FsYycpO1xuXG52YXIgQkxFTkRfQUNDVVJBQ1kgPSAxMDtcblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gKG91dEFjdGlvbiwgaW5BY3Rpb24sIGtleSkge1xuICAgIHZhciBvdXRWYWx1ZSA9IG91dEFjdGlvbi52YWx1ZXNba2V5XTtcblxuICAgIGlmIChvdXRBY3Rpb24uZWxhcHNlZCA9PT0gdW5kZWZpbmVkIHx8ICFvdXRWYWx1ZSkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdmFyIGluVmFsdWUgPSBpbkFjdGlvbi52YWx1ZXNba2V5XTtcbiAgICB2YXIgb3V0VG90YWxEdXJhdGlvbiA9IG91dFZhbHVlLmRlbGF5ICsgb3V0VmFsdWUuZHVyYXRpb247XG4gICAgdmFyIHRpbWVVbnRpbE91dEVuZCA9IG91dFRvdGFsRHVyYXRpb24gLSBvdXRBY3Rpb24uZWxhcHNlZDtcbiAgICB2YXIgaW5Qb3NpdGlvbkF0T3V0RW5kID0gKDAsIF9jYWxjLmVhc2UpKCgwLCBfY2FsYy5yZXN0cmljdCkoKDAsIF9jYWxjLmdldFByb2dyZXNzRnJvbVZhbHVlKSh0aW1lVW50aWxPdXRFbmQsIDAsIGluVmFsdWUuZGVsYXkgKyBpblZhbHVlLmR1cmF0aW9uKSwgMCwgMSksIGluVmFsdWUuZnJvbSwgaW5WYWx1ZS50bywgaW5WYWx1ZS5lYXNlKTtcbiAgICB2YXIgaW5CaWdnZXJUaGFuT3V0QXRTdGFydCA9IGluVmFsdWUuZnJvbSA+IG91dFZhbHVlLmN1cnJlbnQ7XG4gICAgdmFyIGluQmlnZ2VyVGhhbk91dEF0RW5kID0gaW5Qb3NpdGlvbkF0T3V0RW5kID4gb3V0VmFsdWUudG87XG4gICAgdmFyIHR3ZWVuc0ludGVyc2VjdCA9IGluQmlnZ2VyVGhhbk91dEF0U3RhcnQgIT09IGluQmlnZ2VyVGhhbk91dEF0RW5kO1xuXG4gICAgdmFyIGJsZW5kQ3VydmUgPSBbWzAsIG91dFZhbHVlLmN1cnJlbnRdLCBbdGltZVVudGlsT3V0RW5kLCBpblBvc2l0aW9uQXRPdXRFbmRdXTtcblxuICAgIC8vIElmIHR3ZWVucyBpbnRlcnNlY3QsIHJlc29sdmUgdHdlZW5zIGF0IGEgcmVzb2x1dGlvbiB0byBmaW5kIGV4YWN0bHkgd2hlcmVcbiAgICBpZiAodHdlZW5zSW50ZXJzZWN0KSB7XG4gICAgICAgIHZhciB0aW1lU3RlcFRvVGVzdCA9IHRpbWVVbnRpbE91dEVuZCAvIEJMRU5EX0FDQ1VSQUNZO1xuICAgICAgICB2YXIgZm91bmRQMSA9IGZhbHNlO1xuICAgICAgICB2YXIgZm91bmRQMiA9IGZhbHNlO1xuXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDw9IEJMRU5EX0FDQ1VSQUNZOyBpKyspIHtcbiAgICAgICAgICAgIHZhciB0aW1lU3RlcCA9IGkgKiB0aW1lU3RlcFRvVGVzdDtcbiAgICAgICAgICAgIHZhciBvdXRBdFRpbWUgPSAoMCwgX2NhbGMuZWFzZSkoKDAsIF9jYWxjLmdldFByb2dyZXNzRnJvbVZhbHVlKShvdXRBY3Rpb24uZWxhcHNlZCArIHRpbWVTdGVwLCBvdXRWYWx1ZS5kZWxheSwgb3V0VmFsdWUuZHVyYXRpb24pLCBvdXRWYWx1ZS5mcm9tLCBvdXRWYWx1ZS50bywgb3V0VmFsdWUuZWFzZSk7XG4gICAgICAgICAgICB2YXIgaW5BdFRpbWUgPSAoMCwgX2NhbGMuZWFzZSkoKDAsIF9jYWxjLmdldFByb2dyZXNzRnJvbVZhbHVlKShpbkFjdGlvbi5lbGFwc2VkICsgdGltZVN0ZXAsIGluVmFsdWUuZGVsYXksIGluVmFsdWUuZHVyYXRpb24pLCBpblZhbHVlLmZyb20sIGluVmFsdWUudG8sIGluVmFsdWUuZWFzZSk7XG5cbiAgICAgICAgICAgIGlmICghZm91bmRQMSAmJiAoaW5CaWdnZXJUaGFuT3V0QXRTdGFydCAmJiBpbkF0VGltZSA8IG91dEF0VGltZSB8fCAhaW5CaWdnZXJUaGFuT3V0QXRTdGFydCAmJiBpbkF0VGltZSA+IG91dEF0VGltZSkpIHtcbiAgICAgICAgICAgICAgICBibGVuZEN1cnZlLnNwbGljZSgxLCAwLCBbdGltZVN0ZXAsIGluQXRUaW1lXSk7XG4gICAgICAgICAgICAgICAgZm91bmRQMSA9IHRydWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChmb3VuZFAxICYmIChpbkJpZ2dlclRoYW5PdXRBdFN0YXJ0ICYmIGluQXRUaW1lIDwgb3V0VmFsdWUuY3VycmVudCB8fCAhaW5CaWdnZXJUaGFuT3V0QXRTdGFydCAmJiBpbkF0VGltZSA+IG91dFZhbHVlLmN1cnJlbnQpKSB7XG4gICAgICAgICAgICAgICAgYmxlbmRDdXJ2ZVsyXSA9IFt0aW1lU3RlcCwgaW5BdFRpbWVdO1xuICAgICAgICAgICAgICAgIGZvdW5kUDIgPSB0cnVlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoZm91bmRQMikge1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGJsZW5kQ3VydmUubGVuZ3RoID09PSAyKSB7XG4gICAgICAgIC8vIFBhc3MgYmV0d2VlbiB0d2VlbnMgdXNpbmcgaW5jb21pbmcgZWFzaW5nIGlmIGp1c3QgdHdvIHBvaW50c1xuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgaWYgKGJsZW5kUHJvZ3Jlc3MgPT09IDEpIHtcbiAgICAgICAgICAgICAgICBpbkFjdGlvbi5ibGVuZEN1cnZlID0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gKDAsIF9jYWxjLmVhc2UpKCgwLCBfY2FsYy5yZXN0cmljdCkoKDAsIF9jYWxjLmdldFByb2dyZXNzRnJvbVZhbHVlKShpbkFjdGlvbi5lbGFwc2VkLCBibGVuZEN1cnZlWzBdWzBdLCBibGVuZEN1cnZlWzFdWzBdKSwgMCwgMSksIG91dFZhbHVlLmN1cnJlbnQsIGluVmFsdWUuY3VycmVudCwgaW5WYWx1ZS5lYXNlKTtcbiAgICAgICAgfTtcbiAgICB9IGVsc2Uge1xuICAgICAgICAvLyBQYXNzIGJldHdlZW4gdHdlZW5zIHVzaW5nIGJlemllciBpbnRlcnBvbGF0aW9uXG4gICAgICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgYmxlbmRQcm9ncmVzcyA9ICgwLCBfY2FsYy5yZXN0cmljdCkoKDAsIF9jYWxjLmdldFByb2dyZXNzRnJvbVZhbHVlKShpbkFjdGlvbi5lbGFwc2VkLCBibGVuZEN1cnZlWzBdWzBdLCBibGVuZEN1cnZlWzJdWzBdKSwgMCwgMSk7XG4gICAgICAgICAgICB2YXIgYVAgPSAoMCwgX2NhbGMuZ2V0VmFsdWVGcm9tUHJvZ3Jlc3MpKGJsZW5kUHJvZ3Jlc3MsIGJsZW5kQ3VydmVbMF1bMV0sIGJsZW5kQ3VydmVbMV1bMV0pO1xuICAgICAgICAgICAgdmFyIGJQID0gKDAsIF9jYWxjLmdldFZhbHVlRnJvbVByb2dyZXNzKShibGVuZFByb2dyZXNzLCBibGVuZEN1cnZlWzFdWzFdLCBibGVuZEN1cnZlWzJdWzFdKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGJsZW5kUHJvZ3Jlc3MpO1xuICAgICAgICAgICAgaWYgKGJsZW5kUHJvZ3Jlc3MgPT09IDEpIHtcbiAgICAgICAgICAgICAgICBpbkFjdGlvbi5ibGVuZEN1cnZlID0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgICAgIHJldHVybiBpblZhbHVlLmN1cnJlbnQ7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiAoMCwgX2NhbGMuZ2V0VmFsdWVGcm9tUHJvZ3Jlc3MpKGJsZW5kUHJvZ3Jlc3MsIGFQLCBiUCk7XG4gICAgICAgIH07XG4gICAgfVxufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbk55WXk5cGJtTXZaMlZ1WlhKaGRHVXRZbXhsYm1RdFkzVnlkbVV1YW5NaVhTd2libUZ0WlhNaU9sdGRMQ0p0WVhCd2FXNW5jeUk2SWpzN096czdPMEZCUlVFc1NVRkJUU3hqUVVGakxFZEJRVWNzUlVGQlJTeERRVUZET3p0clFrRkZXQ3hWUVVGRExGTkJRVk1zUlVGQlJTeFJRVUZSTEVWQlFVVXNSMEZCUnl4RlFVRkxPMEZCUTNwRExGRkJRVTBzVVVGQlVTeEhRVUZITEZOQlFWTXNRMEZCUXl4TlFVRk5MRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU03TzBGQlJYWkRMRkZCUVVrc1UwRkJVeXhEUVVGRExFOUJRVThzUzBGQlN5eFRRVUZUTEVsQlFVa3NRMEZCUXl4UlFVRlJMRVZCUVVVN1FVRkRPVU1zWlVGQlR6dExRVU5XT3p0QlFVVkVMRkZCUVUwc1QwRkJUeXhIUVVGSExGRkJRVkVzUTBGQlF5eE5RVUZOTEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNN1FVRkRja01zVVVGQlRTeG5Ra0ZCWjBJc1IwRkJSeXhSUVVGUkxFTkJRVU1zUzBGQlN5eEhRVUZITEZGQlFWRXNRMEZCUXl4UlFVRlJMRU5CUVVNN1FVRkROVVFzVVVGQlRTeGxRVUZsTEVkQlFVY3NaMEpCUVdkQ0xFZEJRVWNzVTBGQlV5eERRVUZETEU5QlFVOHNRMEZCUXp0QlFVTTNSQ3hSUVVGTkxHdENRVUZyUWl4SFFVRkhMRlZCWkhOQ0xFbEJRVWtzUlVGamNrSXNWVUZrZFVJc1VVRkJVU3hGUVdOMFFpeFZRV1J3UXl4dlFrRkJiMElzUlVGamNVTXNaVUZCWlN4RlFVRkZMRU5CUVVNc1JVRkJSU3hQUVVGUExFTkJRVU1zUzBGQlN5eEhRVUZITEU5QlFVOHNRMEZCUXl4UlFVRlJMRU5CUVVNc1JVRkJSU3hEUVVGRExFVkJRVVVzUTBGQlF5eERRVUZETEVWQlFVVXNUMEZCVHl4RFFVRkRMRWxCUVVrc1JVRkJSU3hQUVVGUExFTkJRVU1zUlVGQlJTeEZRVUZGTEU5QlFVOHNRMEZCUXl4SlFVRkpMRU5CUVVNc1EwRkJRenRCUVVOd1N5eFJRVUZOTEhOQ1FVRnpRaXhIUVVGSExFOUJRVThzUTBGQlF5eEpRVUZKTEVkQlFVY3NVVUZCVVN4RFFVRkRMRTlCUVU4c1EwRkJRenRCUVVNdlJDeFJRVUZOTEc5Q1FVRnZRaXhIUVVGSExHdENRVUZyUWl4SFFVRkhMRkZCUVZFc1EwRkJReXhGUVVGRkxFTkJRVU03UVVGRE9VUXNVVUZCVFN4bFFVRmxMRWRCUVVjc2MwSkJRWE5DTEV0QlFVc3NiMEpCUVc5Q0xFTkJRVU03TzBGQlJYaEZMRkZCUVUwc1ZVRkJWU3hIUVVGSExFTkJRVU1zUTBGQlF5eERRVUZETEVWQlFVVXNVVUZCVVN4RFFVRkRMRTlCUVU4c1EwRkJReXhGUVVGRkxFTkJRVU1zWlVGQlpTeEZRVUZGTEd0Q1FVRnJRaXhEUVVGRExFTkJRVU03T3p0QlFVRkRMRUZCUjJ4R0xGRkJRVWtzWlVGQlpTeEZRVUZGTzBGQlEycENMRmxCUVUwc1kwRkJZeXhIUVVGSExHVkJRV1VzUjBGQlJ5eGpRVUZqTEVOQlFVTTdRVUZEZUVRc1dVRkJTU3hQUVVGUExFZEJRVWNzUzBGQlN5eERRVUZETzBGQlEzQkNMRmxCUVVrc1QwRkJUeXhIUVVGSExFdEJRVXNzUTBGQlF6czdRVUZGY0VJc1lVRkJTeXhKUVVGSkxFTkJRVU1zUjBGQlJ5eERRVUZETEVWQlFVVXNRMEZCUXl4SlFVRkpMR05CUVdNc1JVRkJSU3hEUVVGRExFVkJRVVVzUlVGQlJUdEJRVU4wUXl4blFrRkJUU3hSUVVGUkxFZEJRVWNzUTBGQlF5eEhRVUZITEdOQlFXTXNRMEZCUXp0QlFVTndReXhuUWtGQlRTeFRRVUZUTEVkQlFVY3NWVUUzUW5WQ0xFbEJRVWtzUlVFMlFuUkNMRlZCTjBJeFFpeHZRa0ZCYjBJc1JVRTJRakpDTEZOQlFWTXNRMEZCUXl4UFFVRlBMRWRCUVVjc1VVRkJVU3hGUVVGRkxGRkJRVkVzUTBGQlF5eExRVUZMTEVWQlFVVXNVVUZCVVN4RFFVRkRMRkZCUVZFc1EwRkJReXhGUVVGRkxGRkJRVkVzUTBGQlF5eEpRVUZKTEVWQlFVVXNVVUZCVVN4RFFVRkRMRVZCUVVVc1JVRkJSU3hSUVVGUkxFTkJRVU1zU1VGQlNTeERRVUZETEVOQlFVTTdRVUZEZWtvc1owSkJRVTBzVVVGQlVTeEhRVUZITEZWQk9VSjNRaXhKUVVGSkxFVkJPRUoyUWl4VlFUbENla0lzYjBKQlFXOUNMRVZCT0VJd1FpeFJRVUZSTEVOQlFVTXNUMEZCVHl4SFFVRkhMRkZCUVZFc1JVRkJSU3hQUVVGUExFTkJRVU1zUzBGQlN5eEZRVUZGTEU5QlFVOHNRMEZCUXl4UlFVRlJMRU5CUVVNc1JVRkJSU3hQUVVGUExFTkJRVU1zU1VGQlNTeEZRVUZGTEU5QlFVOHNRMEZCUXl4RlFVRkZMRVZCUVVVc1QwRkJUeXhEUVVGRExFbEJRVWtzUTBGQlF5eERRVUZET3p0QlFVVnNTaXhuUWtGQlNTeERRVUZETEU5QlFVOHNTMEZCU3l4QlFVRkRMSE5DUVVGelFpeEpRVUZKTEZGQlFWRXNSMEZCUnl4VFFVRlRMRWxCUVUwc1EwRkJReXh6UWtGQmMwSXNTVUZCU1N4UlFVRlJMRWRCUVVjc1UwRkJVeXhEUVVGRExFRkJRVU1zUlVGQlJUdEJRVU55U0N3d1FrRkJWU3hEUVVGRExFMUJRVTBzUTBGQlF5eERRVUZETEVWQlFVVXNRMEZCUXl4RlFVRkZMRU5CUVVNc1VVRkJVU3hGUVVGRkxGRkJRVkVzUTBGQlF5eERRVUZETEVOQlFVTTdRVUZET1VNc2RVSkJRVThzUjBGQlJ5eEpRVUZKTEVOQlFVTTdZVUZEYkVJN08wRkJSVVFzWjBKQlFVa3NUMEZCVHl4TFFVRkxMRUZCUVVNc2MwSkJRWE5DTEVsQlFVa3NVVUZCVVN4SFFVRkhMRkZCUVZFc1EwRkJReXhQUVVGUExFbEJRVTBzUTBGQlF5eHpRa0ZCYzBJc1NVRkJTU3hSUVVGUkxFZEJRVWNzVVVGQlVTeERRVUZETEU5QlFVOHNRMEZCUXl4QlFVRkRMRVZCUVVVN1FVRkRiRWtzTUVKQlFWVXNRMEZCUXl4RFFVRkRMRU5CUVVNc1IwRkJSeXhEUVVGRExGRkJRVkVzUlVGQlJTeFJRVUZSTEVOQlFVTXNRMEZCUXp0QlFVTnlReXgxUWtGQlR5eEhRVUZITEVsQlFVa3NRMEZCUXp0aFFVTnNRanM3UVVGRlJDeG5Ra0ZCU1N4UFFVRlBMRVZCUVVVN1FVRkRWQ3h6UWtGQlRUdGhRVU5VTzFOQlEwbzdTMEZEU2pzN1FVRkZSQ3hSUVVGSkxGVkJRVlVzUTBGQlF5eE5RVUZOTEV0QlFVc3NRMEZCUXl4RlFVRkZPenRCUVVWNlFpeGxRVUZQTEZsQlFVMDdRVUZEVkN4blFrRkJTU3hoUVVGaExFdEJRVXNzUTBGQlF5eEZRVUZGTzBGQlEzSkNMSGRDUVVGUkxFTkJRVU1zVlVGQlZTeEhRVUZITEZOQlFWTXNRMEZCUXp0aFFVTnVRenM3UVVGRlJDeHRRa0ZCVHl4VlFYWkVhME1zU1VGQlNTeEZRWFZFYWtNc1ZVRjJSRzFETEZGQlFWRXNSVUYxUkd4RExGVkJka1I0UWl4dlFrRkJiMElzUlVGMVJIbENMRkZCUVZFc1EwRkJReXhQUVVGUExFVkJRVVVzVlVGQlZTeERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhGUVVGRkxGVkJRVlVzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhGUVVGRkxFTkJRVU1zUlVGQlJTeERRVUZETEVOQlFVTXNSVUZCUlN4UlFVRlJMRU5CUVVNc1QwRkJUeXhGUVVGRkxFOUJRVThzUTBGQlF5eFBRVUZQTEVWQlFVVXNUMEZCVHl4RFFVRkRMRWxCUVVrc1EwRkJReXhEUVVGRE8xTkJRelZLTEVOQlFVTTdTMEZEVEN4TlFVRk5PenRCUVVWSUxHVkJRVThzV1VGQlRUdEJRVU5VTEdkQ1FVRk5MR0ZCUVdFc1IwRkJSeXhWUVRWRWVVSXNVVUZCVVN4RlFUUkVlRUlzVlVFMVJHeERMRzlDUVVGdlFpeEZRVFJFYlVNc1VVRkJVU3hEUVVGRExFOUJRVThzUlVGQlJTeFZRVUZWTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFVkJRVVVzVlVGQlZTeERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFVkJRVVVzUTBGQlF5eEZRVUZGTEVOQlFVTXNRMEZCUXl4RFFVRkRPMEZCUTJwSUxHZENRVUZOTEVWQlFVVXNSMEZCUnl4VlFUZEVVU3h2UWtGQmIwSXNSVUUyUkZBc1lVRkJZU3hGUVVGRkxGVkJRVlVzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1JVRkJSU3hWUVVGVkxFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJRenRCUVVOdVJpeG5Ra0ZCVFN4RlFVRkZMRWRCUVVjc1ZVRTVSRkVzYjBKQlFXOUNMRVZCT0VSUUxHRkJRV0VzUlVGQlJTeFZRVUZWTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFVkJRVVVzVlVGQlZTeERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU03UVVGREwwWXNiVUpCUVU4c1EwRkJReXhIUVVGSExFTkJRVU1zWVVGQllTeERRVUZETEVOQlFVRTdRVUZEWkN4blFrRkJTU3hoUVVGaExFdEJRVXNzUTBGQlF5eEZRVUZGTzBGQlEzSkNMSGRDUVVGUkxFTkJRVU1zVlVGQlZTeEhRVUZITEZOQlFWTXNRMEZCUXp0QlFVTm9ReXgxUWtGQlR5eFBRVUZQTEVOQlFVTXNUMEZCVHl4RFFVRkRPMkZCUXpGQ096dEJRVVZFTEcxQ1FVRlBMRlZCY2tWWkxHOUNRVUZ2UWl4RlFYRkZXQ3hoUVVGaExFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVXNRMEZCUXl4RFFVRkRPMU5CUTNSRUxFTkJRVU03UzBGRFREdERRVU5LSWl3aVptbHNaU0k2SW1kbGJtVnlZWFJsTFdKc1pXNWtMV04xY25abExtcHpJaXdpYzI5MWNtTmxVbTl2ZENJNklpOVZjMlZ5Y3k5TllYUjBVR1Z5Y25rdlUybDBaWE12Y0c5d2JXOTBhVzl1SWl3aWMyOTFjbU5sYzBOdmJuUmxiblFpT2xzaWFXMXdiM0owSUhzZ1oyVjBVSEp2WjNKbGMzTkdjbTl0Vm1Gc2RXVXNJR2RsZEZaaGJIVmxSbkp2YlZCeWIyZHlaWE56TENCbFlYTmxMQ0J5WlhOMGNtbGpkQ0I5SUdaeWIyMGdKeTR2WTJGc1l5YzdYRzVjYm1OdmJuTjBJRUpNUlU1RVgwRkRRMVZTUVVOWklEMGdNVEE3WEc1Y2JtVjRjRzl5ZENCa1pXWmhkV3gwSUNodmRYUkJZM1JwYjI0c0lHbHVRV04wYVc5dUxDQnJaWGtwSUQwK0lIdGNiaUFnSUNCamIyNXpkQ0J2ZFhSV1lXeDFaU0E5SUc5MWRFRmpkR2x2Ymk1MllXeDFaWE5iYTJWNVhUdGNibHh1SUNBZ0lHbG1JQ2h2ZFhSQlkzUnBiMjR1Wld4aGNITmxaQ0E5UFQwZ2RXNWtaV1pwYm1Wa0lIeDhJQ0Z2ZFhSV1lXeDFaU2tnZTF4dUlDQWdJQ0FnSUNCeVpYUjFjbTQ3WEc0Z0lDQWdmVnh1WEc0Z0lDQWdZMjl1YzNRZ2FXNVdZV3gxWlNBOUlHbHVRV04wYVc5dUxuWmhiSFZsYzF0clpYbGRPMXh1SUNBZ0lHTnZibk4wSUc5MWRGUnZkR0ZzUkhWeVlYUnBiMjRnUFNCdmRYUldZV3gxWlM1a1pXeGhlU0FySUc5MWRGWmhiSFZsTG1SMWNtRjBhVzl1TzF4dUlDQWdJR052Ym5OMElIUnBiV1ZWYm5ScGJFOTFkRVZ1WkNBOUlHOTFkRlJ2ZEdGc1JIVnlZWFJwYjI0Z0xTQnZkWFJCWTNScGIyNHVaV3hoY0hObFpEdGNiaUFnSUNCamIyNXpkQ0JwYmxCdmMybDBhVzl1UVhSUGRYUkZibVFnUFNCbFlYTmxLSEpsYzNSeWFXTjBLR2RsZEZCeWIyZHlaWE56Um5KdmJWWmhiSFZsS0hScGJXVlZiblJwYkU5MWRFVnVaQ3dnTUN3Z2FXNVdZV3gxWlM1a1pXeGhlU0FySUdsdVZtRnNkV1V1WkhWeVlYUnBiMjRwTENBd0xDQXhLU3dnYVc1V1lXeDFaUzVtY205dExDQnBibFpoYkhWbExuUnZMQ0JwYmxaaGJIVmxMbVZoYzJVcE8xeHVJQ0FnSUdOdmJuTjBJR2x1UW1sbloyVnlWR2hoYms5MWRFRjBVM1JoY25RZ1BTQnBibFpoYkhWbExtWnliMjBnUGlCdmRYUldZV3gxWlM1amRYSnlaVzUwTzF4dUlDQWdJR052Ym5OMElHbHVRbWxuWjJWeVZHaGhiazkxZEVGMFJXNWtJRDBnYVc1UWIzTnBkR2x2YmtGMFQzVjBSVzVrSUQ0Z2IzVjBWbUZzZFdVdWRHODdYRzRnSUNBZ1kyOXVjM1FnZEhkbFpXNXpTVzUwWlhKelpXTjBJRDBnYVc1Q2FXZG5aWEpVYUdGdVQzVjBRWFJUZEdGeWRDQWhQVDBnYVc1Q2FXZG5aWEpVYUdGdVQzVjBRWFJGYm1RN1hHNWNiaUFnSUNCamIyNXpkQ0JpYkdWdVpFTjFjblpsSUQwZ1cxc3dMQ0J2ZFhSV1lXeDFaUzVqZFhKeVpXNTBYU3dnVzNScGJXVlZiblJwYkU5MWRFVnVaQ3dnYVc1UWIzTnBkR2x2YmtGMFQzVjBSVzVrWFYwN1hHNWNiaUFnSUNBdkx5QkpaaUIwZDJWbGJuTWdhVzUwWlhKelpXTjBMQ0J5WlhOdmJIWmxJSFIzWldWdWN5QmhkQ0JoSUhKbGMyOXNkWFJwYjI0Z2RHOGdabWx1WkNCbGVHRmpkR3g1SUhkb1pYSmxYRzRnSUNBZ2FXWWdLSFIzWldWdWMwbHVkR1Z5YzJWamRDa2dlMXh1SUNBZ0lDQWdJQ0JqYjI1emRDQjBhVzFsVTNSbGNGUnZWR1Z6ZENBOUlIUnBiV1ZWYm5ScGJFOTFkRVZ1WkNBdklFSk1SVTVFWDBGRFExVlNRVU5aTzF4dUlDQWdJQ0FnSUNCc1pYUWdabTkxYm1SUU1TQTlJR1poYkhObE8xeHVJQ0FnSUNBZ0lDQnNaWFFnWm05MWJtUlFNaUE5SUdaaGJITmxPMXh1WEc0Z0lDQWdJQ0FnSUdadmNpQW9iR1YwSUdrZ1BTQXdPeUJwSUR3OUlFSk1SVTVFWDBGRFExVlNRVU5aT3lCcEt5c3BJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lHTnZibk4wSUhScGJXVlRkR1Z3SUQwZ2FTQXFJSFJwYldWVGRHVndWRzlVWlhOME8xeHVJQ0FnSUNBZ0lDQWdJQ0FnWTI5dWMzUWdiM1YwUVhSVWFXMWxJRDBnWldGelpTaG5aWFJRY205bmNtVnpjMFp5YjIxV1lXeDFaU2h2ZFhSQlkzUnBiMjR1Wld4aGNITmxaQ0FySUhScGJXVlRkR1Z3TENCdmRYUldZV3gxWlM1a1pXeGhlU3dnYjNWMFZtRnNkV1V1WkhWeVlYUnBiMjRwTENCdmRYUldZV3gxWlM1bWNtOXRMQ0J2ZFhSV1lXeDFaUzUwYnl3Z2IzVjBWbUZzZFdVdVpXRnpaU2s3WEc0Z0lDQWdJQ0FnSUNBZ0lDQmpiMjV6ZENCcGJrRjBWR2x0WlNBOUlHVmhjMlVvWjJWMFVISnZaM0psYzNOR2NtOXRWbUZzZFdVb2FXNUJZM1JwYjI0dVpXeGhjSE5sWkNBcklIUnBiV1ZUZEdWd0xDQnBibFpoYkhWbExtUmxiR0Y1TENCcGJsWmhiSFZsTG1SMWNtRjBhVzl1S1N3Z2FXNVdZV3gxWlM1bWNtOXRMQ0JwYmxaaGJIVmxMblJ2TENCcGJsWmhiSFZsTG1WaGMyVXBPMXh1WEc0Z0lDQWdJQ0FnSUNBZ0lDQnBaaUFvSVdadmRXNWtVREVnSmlZZ0tDaHBia0pwWjJkbGNsUm9ZVzVQZFhSQmRGTjBZWEowSUNZbUlHbHVRWFJVYVcxbElEd2diM1YwUVhSVWFXMWxLU0I4ZkNBb0lXbHVRbWxuWjJWeVZHaGhiazkxZEVGMFUzUmhjblFnSmlZZ2FXNUJkRlJwYldVZ1BpQnZkWFJCZEZScGJXVXBLU2tnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUdKc1pXNWtRM1Z5ZG1VdWMzQnNhV05sS0RFc0lEQXNJRnQwYVcxbFUzUmxjQ3dnYVc1QmRGUnBiV1ZkS1R0Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCbWIzVnVaRkF4SUQwZ2RISjFaVHRjYmlBZ0lDQWdJQ0FnSUNBZ0lIMWNibHh1SUNBZ0lDQWdJQ0FnSUNBZ2FXWWdLR1p2ZFc1a1VERWdKaVlnS0NocGJrSnBaMmRsY2xSb1lXNVBkWFJCZEZOMFlYSjBJQ1ltSUdsdVFYUlVhVzFsSUR3Z2IzVjBWbUZzZFdVdVkzVnljbVZ1ZENrZ2ZId2dLQ0ZwYmtKcFoyZGxjbFJvWVc1UGRYUkJkRk4wWVhKMElDWW1JR2x1UVhSVWFXMWxJRDRnYjNWMFZtRnNkV1V1WTNWeWNtVnVkQ2twS1NCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ1lteGxibVJEZFhKMlpWc3lYU0E5SUZ0MGFXMWxVM1JsY0N3Z2FXNUJkRlJwYldWZE8xeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lHWnZkVzVrVURJZ1BTQjBjblZsTzF4dUlDQWdJQ0FnSUNBZ0lDQWdmVnh1WEc0Z0lDQWdJQ0FnSUNBZ0lDQnBaaUFvWm05MWJtUlFNaWtnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUdKeVpXRnJPMXh1SUNBZ0lDQWdJQ0FnSUNBZ2ZWeHVJQ0FnSUNBZ0lDQjlYRzRnSUNBZ2ZWeHVYRzRnSUNBZ2FXWWdLR0pzWlc1a1EzVnlkbVV1YkdWdVozUm9JRDA5UFNBeUtTQjdYRzRnSUNBZ0lDQWdJQzh2SUZCaGMzTWdZbVYwZDJWbGJpQjBkMlZsYm5NZ2RYTnBibWNnYVc1amIyMXBibWNnWldGemFXNW5JR2xtSUdwMWMzUWdkSGR2SUhCdmFXNTBjMXh1SUNBZ0lDQWdJQ0J5WlhSMWNtNGdLQ2tnUFQ0Z2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnYVdZZ0tHSnNaVzVrVUhKdlozSmxjM01nUFQwOUlERXBJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0JwYmtGamRHbHZiaTVpYkdWdVpFTjFjblpsSUQwZ2RXNWtaV1pwYm1Wa08xeHVJQ0FnSUNBZ0lDQWdJQ0FnZlZ4dVhHNGdJQ0FnSUNBZ0lDQWdJQ0J5WlhSMWNtNGdaV0Z6WlNoeVpYTjBjbWxqZENoblpYUlFjbTluY21WemMwWnliMjFXWVd4MVpTaHBia0ZqZEdsdmJpNWxiR0Z3YzJWa0xDQmliR1Z1WkVOMWNuWmxXekJkV3pCZExDQmliR1Z1WkVOMWNuWmxXekZkV3pCZEtTd2dNQ3dnTVNrc0lHOTFkRlpoYkhWbExtTjFjbkpsYm5Rc0lHbHVWbUZzZFdVdVkzVnljbVZ1ZEN3Z2FXNVdZV3gxWlM1bFlYTmxLVHRjYmlBZ0lDQWdJQ0FnZlR0Y2JpQWdJQ0I5SUdWc2MyVWdlMXh1SUNBZ0lDQWdJQ0F2THlCUVlYTnpJR0psZEhkbFpXNGdkSGRsWlc1eklIVnphVzVuSUdKbGVtbGxjaUJwYm5SbGNuQnZiR0YwYVc5dVhHNGdJQ0FnSUNBZ0lISmxkSFZ5YmlBb0tTQTlQaUI3WEc0Z0lDQWdJQ0FnSUNBZ0lDQmpiMjV6ZENCaWJHVnVaRkJ5YjJkeVpYTnpJRDBnY21WemRISnBZM1FvWjJWMFVISnZaM0psYzNOR2NtOXRWbUZzZFdVb2FXNUJZM1JwYjI0dVpXeGhjSE5sWkN3Z1lteGxibVJEZFhKMlpWc3dYVnN3WFN3Z1lteGxibVJEZFhKMlpWc3lYVnN3WFNrc0lEQXNJREVwTzF4dUlDQWdJQ0FnSUNBZ0lDQWdZMjl1YzNRZ1lWQWdQU0JuWlhSV1lXeDFaVVp5YjIxUWNtOW5jbVZ6Y3loaWJHVnVaRkJ5YjJkeVpYTnpMQ0JpYkdWdVpFTjFjblpsV3pCZFd6RmRMQ0JpYkdWdVpFTjFjblpsV3pGZFd6RmRLVHRjYmlBZ0lDQWdJQ0FnSUNBZ0lHTnZibk4wSUdKUUlEMGdaMlYwVm1Gc2RXVkdjbTl0VUhKdlozSmxjM01vWW14bGJtUlFjbTluY21WemN5d2dZbXhsYm1SRGRYSjJaVnN4WFZzeFhTd2dZbXhsYm1SRGRYSjJaVnN5WFZzeFhTazdYRzVqYjI1emIyeGxMbXh2WnloaWJHVnVaRkJ5YjJkeVpYTnpLVnh1SUNBZ0lDQWdJQ0FnSUNBZ2FXWWdLR0pzWlc1a1VISnZaM0psYzNNZ1BUMDlJREVwSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCcGJrRmpkR2x2Ymk1aWJHVnVaRU4xY25abElEMGdkVzVrWldacGJtVmtPMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJSEpsZEhWeWJpQnBibFpoYkhWbExtTjFjbkpsYm5RN1hHNGdJQ0FnSUNBZ0lDQWdJQ0I5WEc1Y2JpQWdJQ0FnSUNBZ0lDQWdJSEpsZEhWeWJpQm5aWFJXWVd4MVpVWnliMjFRY205bmNtVnpjeWhpYkdWdVpGQnliMmR5WlhOekxDQmhVQ3dnWWxBcE8xeHVJQ0FnSUNBZ0lDQjlPMXh1SUNBZ0lIMWNibjA3WEc0aVhYMD1cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2luYy9nZW5lcmF0ZS1ibGVuZC1jdXJ2ZS5qc1xuICoqIG1vZHVsZSBpZCA9IDM0XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfYWRhcHRlciA9IHJlcXVpcmUoJy4uL2FkYXB0ZXIvYWRhcHRlcicpO1xuXG52YXIgX2FkYXB0ZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfYWRhcHRlcik7XG5cbnZhciBfY3NzQWRhcHRlciA9IHJlcXVpcmUoJy4uL2FkYXB0ZXIvY3NzLWFkYXB0ZXInKTtcblxudmFyIF9jc3NBZGFwdGVyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2Nzc0FkYXB0ZXIpO1xuXG52YXIgX3N2Z0FkYXB0ZXIgPSByZXF1aXJlKCcuLi9hZGFwdGVyL3N2Zy1hZGFwdGVyJyk7XG5cbnZhciBfc3ZnQWRhcHRlcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9zdmdBZGFwdGVyKTtcblxudmFyIF9zdmdQYXRoQWRhcHRlciA9IHJlcXVpcmUoJy4uL2FkYXB0ZXIvc3ZnLXBhdGgtYWRhcHRlcicpO1xuXG52YXIgX3N2Z1BhdGhBZGFwdGVyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3N2Z1BhdGhBZGFwdGVyKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxudmFyIFNBVkVfUFJPUCA9ICdfX3BtX2FkYXB0ZXInO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbiAoZWxlbWVudCkge1xuICAgIC8vIFJldHVybiBib3VuZCBhZGFwdGVyIGlmIHByZXNlbnRcbiAgICBpZiAoZWxlbWVudFtTQVZFX1BST1BdKSB7XG4gICAgICAgIHJldHVybiBlbGVtZW50W1NBVkVfUFJPUF07XG5cbiAgICAgICAgLy8gT3IgZGV0ZWN0IGFuZCBiaW5kIGFkYXB0ZXJcbiAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdmFyIGRldGVjdGVkQWRhcHRlciA9IF9hZGFwdGVyMi5kZWZhdWx0O1xuXG4gICAgICAgICAgICAvLyBJZiBIVE1MRWxlbWVudCBsb2FkIENTU1xuICAgICAgICAgICAgaWYgKGVsZW1lbnQgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCB8fCBlbGVtZW50LnRhZ05hbWUgPT09ICdzdmcnKSB7XG4gICAgICAgICAgICAgICAgZGV0ZWN0ZWRBZGFwdGVyID0gX2Nzc0FkYXB0ZXIyLmRlZmF1bHQ7XG5cbiAgICAgICAgICAgICAgICAvLyBPciBTVkdcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoZWxlbWVudCBpbnN0YW5jZW9mIFNWR0VsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGVsZW1lbnQudGFnTmFtZSA9PT0gJ3BhdGgnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkZXRlY3RlZEFkYXB0ZXIgPSBfc3ZnUGF0aEFkYXB0ZXIyLmRlZmF1bHQ7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkZXRlY3RlZEFkYXB0ZXIgPSBfc3ZnQWRhcHRlcjIuZGVmYXVsdDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdmFyIGJvdW5kQWRhcHRlciA9IGRldGVjdGVkQWRhcHRlcihlbGVtZW50KTtcblxuICAgICAgICAgICAgLy8gQmluZCBhZGFwdGVyIHRvIGVsZW1lbnRcbiAgICAgICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlbGVtZW50LCBTQVZFX1BST1AsIHtcbiAgICAgICAgICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgICAgICAgICAgICB3cml0YWJsZTogZmFsc2UsXG4gICAgICAgICAgICAgICAgdmFsdWU6IGJvdW5kQWRhcHRlclxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIHJldHVybiBib3VuZEFkYXB0ZXI7XG4gICAgICAgIH1cbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5OeVl5OXBibU12WW1sdVpDMWhaR0Z3ZEdWeUxtcHpJbDBzSW01aGJXVnpJanBiWFN3aWJXRndjR2x1WjNNaU9pSTdPenM3T3pzN096czdPenM3T3pzN096czdPenM3UVVGTFFTeEpRVUZOTEZOQlFWTXNSMEZCUnl4alFVRmpMRU5CUVVNN08ydENRVVZzUWl4VlFVRkRMRTlCUVU4c1JVRkJTenM3UVVGRmVFSXNVVUZCU1N4UFFVRlBMRU5CUVVNc1UwRkJVeXhEUVVGRExFVkJRVVU3UVVGRGNFSXNaVUZCVHl4UFFVRlBMRU5CUVVNc1UwRkJVeXhEUVVGRE96czdRVUZCUXl4TFFVYzNRaXhOUVVGTk8wRkJRMGdzWjBKQlFVa3NaVUZCWlN4dlFrRkJWVHM3TzBGQlFVTXNRVUZIT1VJc1owSkJRVWtzVDBGQlR5eFpRVUZaTEZkQlFWY3NTVUZCU1N4UFFVRlBMRU5CUVVNc1QwRkJUeXhMUVVGTExFdEJRVXNzUlVGQlJUdEJRVU0zUkN3clFrRkJaU3gxUWtGQllUczdPMEZCUVVNc1lVRkhhRU1zVFVGQlRTeEpRVUZKTEU5QlFVOHNXVUZCV1N4VlFVRlZMRVZCUVVVN1FVRkRkRU1zZDBKQlFVa3NUMEZCVHl4RFFVRkRMRTlCUVU4c1MwRkJTeXhOUVVGTkxFVkJRVVU3UVVGRE5VSXNkVU5CUVdVc01rSkJRV2xDTEVOQlFVTTdjVUpCUTNCRExFMUJRVTA3UVVGRFNDeDFRMEZCWlN4MVFrRkJZU3hEUVVGRE8zRkNRVU5vUXp0cFFrRkRTanM3UVVGRlJDeG5Ra0ZCVFN4WlFVRlpMRWRCUVVjc1pVRkJaU3hEUVVGRExFOUJRVThzUTBGQlF6czdPMEZCUVVNc1FVRkhPVU1zYTBKQlFVMHNRMEZCUXl4alFVRmpMRU5CUVVNc1QwRkJUeXhGUVVGRkxGTkJRVk1zUlVGQlJUdEJRVU4wUXl3d1FrRkJWU3hGUVVGRkxFdEJRVXM3UVVGRGFrSXNkMEpCUVZFc1JVRkJSU3hMUVVGTE8wRkJRMllzY1VKQlFVc3NSVUZCUlN4WlFVRlpPMkZCUTNSQ0xFTkJRVU1zUTBGQlF6czdRVUZGU0N4dFFrRkJUeXhaUVVGWkxFTkJRVU03VTBGRGRrSTdRMEZEU2lJc0ltWnBiR1VpT2lKaWFXNWtMV0ZrWVhCMFpYSXVhbk1pTENKemIzVnlZMlZTYjI5MElqb2lMMVZ6WlhKekwwMWhkSFJRWlhKeWVTOVRhWFJsY3k5d2IzQnRiM1JwYjI0aUxDSnpiM1Z5WTJWelEyOXVkR1Z1ZENJNld5SnBiWEJ2Y25RZ1lXUmhjSFJsY2lCbWNtOXRJQ2N1TGk5aFpHRndkR1Z5TDJGa1lYQjBaWEluTzF4dWFXMXdiM0owSUdOemMwRmtZWEIwWlhJZ1puSnZiU0FuTGk0dllXUmhjSFJsY2k5amMzTXRZV1JoY0hSbGNpYzdYRzVwYlhCdmNuUWdjM1puUVdSaGNIUmxjaUJtY205dElDY3VMaTloWkdGd2RHVnlMM04yWnkxaFpHRndkR1Z5Snp0Y2JtbHRjRzl5ZENCemRtZFFZWFJvUVdSaGNIUmxjaUJtY205dElDY3VMaTloWkdGd2RHVnlMM04yWnkxd1lYUm9MV0ZrWVhCMFpYSW5PMXh1WEc1amIyNXpkQ0JUUVZaRlgxQlNUMUFnUFNBblgxOXdiVjloWkdGd2RHVnlKenRjYmx4dVpYaHdiM0owSUdSbFptRjFiSFFnS0dWc1pXMWxiblFwSUQwK0lIdGNiaUFnSUNBdkx5QlNaWFIxY200Z1ltOTFibVFnWVdSaGNIUmxjaUJwWmlCd2NtVnpaVzUwWEc0Z0lDQWdhV1lnS0dWc1pXMWxiblJiVTBGV1JWOVFVazlRWFNrZ2UxeHVJQ0FnSUNBZ0lDQnlaWFIxY200Z1pXeGxiV1Z1ZEZ0VFFWWkZYMUJTVDFCZE8xeHVYRzRnSUNBZ0x5OGdUM0lnWkdWMFpXTjBJR0Z1WkNCaWFXNWtJR0ZrWVhCMFpYSmNiaUFnSUNCOUlHVnNjMlVnZTF4dUlDQWdJQ0FnSUNCc1pYUWdaR1YwWldOMFpXUkJaR0Z3ZEdWeUlEMGdZV1JoY0hSbGNqdGNibHh1SUNBZ0lDQWdJQ0F2THlCSlppQklWRTFNUld4bGJXVnVkQ0JzYjJGa0lFTlRVMXh1SUNBZ0lDQWdJQ0JwWmlBb1pXeGxiV1Z1ZENCcGJuTjBZVzVqWlc5bUlFaFVUVXhGYkdWdFpXNTBJSHg4SUdWc1pXMWxiblF1ZEdGblRtRnRaU0E5UFQwZ0ozTjJaeWNwSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJR1JsZEdWamRHVmtRV1JoY0hSbGNpQTlJR056YzBGa1lYQjBaWEk3WEc1Y2JpQWdJQ0FnSUNBZ0x5OGdUM0lnVTFaSFhHNGdJQ0FnSUNBZ0lIMGdaV3h6WlNCcFppQW9aV3hsYldWdWRDQnBibk4wWVc1alpXOW1JRk5XUjBWc1pXMWxiblFwSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJR2xtSUNobGJHVnRaVzUwTG5SaFowNWhiV1VnUFQwOUlDZHdZWFJvSnlrZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lHUmxkR1ZqZEdWa1FXUmhjSFJsY2lBOUlITjJaMUJoZEdoQlpHRndkR1Z5TzF4dUlDQWdJQ0FnSUNBZ0lDQWdmU0JsYkhObElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQmtaWFJsWTNSbFpFRmtZWEIwWlhJZ1BTQnpkbWRCWkdGd2RHVnlPMXh1SUNBZ0lDQWdJQ0FnSUNBZ2ZWeHVJQ0FnSUNBZ0lDQjlYRzVjYmlBZ0lDQWdJQ0FnWTI5dWMzUWdZbTkxYm1SQlpHRndkR1Z5SUQwZ1pHVjBaV04wWldSQlpHRndkR1Z5S0dWc1pXMWxiblFwTzF4dVhHNGdJQ0FnSUNBZ0lDOHZJRUpwYm1RZ1lXUmhjSFJsY2lCMGJ5QmxiR1Z0Wlc1MFhHNGdJQ0FnSUNBZ0lFOWlhbVZqZEM1a1pXWnBibVZRY205d1pYSjBlU2hsYkdWdFpXNTBMQ0JUUVZaRlgxQlNUMUFzSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJR1Z1ZFcxbGNtRmliR1U2SUdaaGJITmxMRnh1SUNBZ0lDQWdJQ0FnSUNBZ2QzSnBkR0ZpYkdVNklHWmhiSE5sTEZ4dUlDQWdJQ0FnSUNBZ0lDQWdkbUZzZFdVNklHSnZkVzVrUVdSaGNIUmxjbHh1SUNBZ0lDQWdJQ0I5S1R0Y2JseHVJQ0FnSUNBZ0lDQnlaWFIxY200Z1ltOTFibVJCWkdGd2RHVnlPMXh1SUNBZ0lIMWNibjA3WEc0aVhYMD1cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2luYy9iaW5kLWFkYXB0ZXIuanNcbiAqKiBtb2R1bGUgaWQgPSAzNVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0cy5kZWFjdGl2YXRlID0gZXhwb3J0cy5nZXRQcm9jZXNzSWQgPSB1bmRlZmluZWQ7XG5leHBvcnRzLmFjdGl2YXRlID0gYWN0aXZhdGU7XG5cbnZhciBfdGltZXIgPSByZXF1aXJlKCcuL3RpbWVyJyk7XG5cbnZhciBfdGltZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfdGltZXIpO1xuXG52YXIgX3RpY2sgPSByZXF1aXJlKCcuL3RpY2snKTtcblxudmFyIF90aWNrMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3RpY2spO1xuXG52YXIgX21hbmFnZXIgPSByZXF1aXJlKCcuL21hbmFnZXInKTtcblxudmFyIF9tYW5hZ2VyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX21hbmFnZXIpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG52YXIgcHJvY2Vzc1N0ZXBPcmRlciA9IFt7IG5hbWU6ICdvbkZyYW1lU3RhcnQnIH0sIHsgbmFtZTogJ29uVXBkYXRlJyB9LCB7IG5hbWU6ICd3aWxsUmVuZGVyJywgZGVjaWRlUmVuZGVyOiB0cnVlIH0sIHsgbmFtZTogJ29uUHJlUmVuZGVyJywgaXNSZW5kZXI6IHRydWUgfSwgeyBuYW1lOiAnb25SZW5kZXInLCBpc1JlbmRlcjogdHJ1ZSB9LCB7IG5hbWU6ICdvblBvc3RSZW5kZXInLCBpc1JlbmRlcjogdHJ1ZSB9LCB7IG5hbWU6ICdvbkZyYW1lRW5kJyB9LCB7IG5hbWU6ICdvbkNsZWFudXAnIH1dOyAvKlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIENvcmUgcmVuZGVyIGxvb3BcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFNvbWUgZGVjaWNpc29ucyBoZXJlIGhhdmUgYmVlbiB0YWtlbiBpbiB0aGUgbmFtZSBvZiBwZXJmb3JtYW5jZS4gQWxsIGhhaWwgcGVyZm9ybWFuY2UuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKEl0IHR1cm5zIG91dCBtaWNyb29wdGltaXNhdGlvbnMgZG8gbWF0dGVyIHdoZW4geW91IGhhdmUgMTZtcylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICovXG5cbnZhciBudW1Qcm9jZXNzU3RlcHMgPSBwcm9jZXNzU3RlcE9yZGVyLmxlbmd0aDtcblxuLy8gW2Jvb2xlYW5dOiBJcyBsb29wIHJ1bm5pbmc/XG52YXIgaXNSdW5uaW5nID0gZmFsc2U7XG5cbi8qXG4gICAgW3RpbWVzdGFtcF06IEZyYW1lIHRpbWVzdGFtcFxuICAgIFtpbnRdOiBUaW1lIHNpbmNlIGxhc3QgZnJhbWVcbiovXG5mdW5jdGlvbiBmaXJlQWxsKGZyYW1lU3RhbXAsIGVsYXBzZWQpIHtcbiAgICB2YXIgYWN0aXZlSWRzID0gX21hbmFnZXIyLmRlZmF1bHQuZ2V0QWN0aXZlSWRzKCk7XG4gICAgdmFyIGFjdGl2ZVByb2Nlc3NDb3VudCA9IGFjdGl2ZUlkcy5sZW5ndGg7XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IG51bVByb2Nlc3NTdGVwczsgaSsrKSB7XG4gICAgICAgIHZhciBzdGVwID0gcHJvY2Vzc1N0ZXBPcmRlcltpXTtcblxuICAgICAgICBmb3IgKHZhciBpMiA9IDA7IGkyIDwgYWN0aXZlUHJvY2Vzc0NvdW50OyBpMisrKSB7XG4gICAgICAgICAgICB2YXIgcHJvY2VzcyA9IF9tYW5hZ2VyMi5kZWZhdWx0LmFjdGl2ZVByb2Nlc3Nlc1thY3RpdmVJZHNbaTJdXTtcbiAgICAgICAgICAgIHZhciByZXN1bHQgPSBmYWxzZTtcblxuICAgICAgICAgICAgLy8gQ2hlY2sgaWYgdGhpcyBwcm9jZXNzIGhhcyB0aGlzIHN0ZXAsIG9yIGlmIGl0J3MgYSByZW5kZXIgc3RlcCB0aGF0IHdlJ3JlIHJlbmRlcmluZyB0aGlzIGZyYW1lXG4gICAgICAgICAgICBpZiAocHJvY2VzcyAmJiBwcm9jZXNzW3N0ZXAubmFtZV0gJiYgKCFzdGVwLmlzUmVuZGVyIHx8IHN0ZXAuaXNSZW5kZXIgJiYgcHJvY2Vzcy5fcmVuZGVyVGhpc0ZyYW1lID09PSB0cnVlKSkge1xuICAgICAgICAgICAgICAgIHJlc3VsdCA9IHByb2Nlc3Nbc3RlcC5uYW1lXS5jYWxsKHByb2Nlc3MsIHByb2Nlc3MsIGZyYW1lU3RhbXAsIGVsYXBzZWQpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBJZiB0aGlzIGlzIGEgZGVjaWRlIHJlbmRlciBzdGVwIGFuZCBpdCByZXR1cm5zIGBmYWxzZWAsIHNldCB3aWxsUmVuZGVyIHRvIGZhbHNlXG4gICAgICAgICAgICBpZiAoc3RlcC5kZWNpZGVSZW5kZXIpIHtcbiAgICAgICAgICAgICAgICBwcm9jZXNzLl9yZW5kZXJUaGlzRnJhbWUgPSBwcm9jZXNzW3N0ZXAubmFtZV0gJiYgcmVzdWx0ICE9PSB0cnVlID8gZmFsc2UgOiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIF9tYW5hZ2VyMi5kZWZhdWx0LmdldE5vbkJhY2tncm91bmRSdW5uaW5nQ291bnQoKTtcbn1cblxuLy8gRnVuY3Rpb24gdG8gZmlyZSBldmVyeSBmcmFtZVxuZnVuY3Rpb24gZnJhbWUoZnJhbWVTdGFtcCkge1xuICAgIF90aW1lcjIuZGVmYXVsdC51cGRhdGUoZnJhbWVTdGFtcCk7XG4gICAgaXNSdW5uaW5nID0gZmlyZUFsbChmcmFtZVN0YW1wLCBfdGltZXIyLmRlZmF1bHQuZ2V0RWxhcHNlZCgpKTtcblxuICAgIGlmIChpc1J1bm5pbmcpIHtcbiAgICAgICAgKDAsIF90aWNrMi5kZWZhdWx0KShmcmFtZSk7XG4gICAgfVxufVxuXG4vLyBTdGFydCBsb29wXG5mdW5jdGlvbiBzdGFydCgpIHtcbiAgICBpZiAoIWlzUnVubmluZykge1xuICAgICAgICBfdGltZXIyLmRlZmF1bHQuc3RhcnQoKTtcbiAgICAgICAgaXNSdW5uaW5nID0gdHJ1ZTtcbiAgICAgICAgKDAsIF90aWNrMi5kZWZhdWx0KShmcmFtZSk7XG4gICAgfVxufVxuXG4vLyBFeHBvcnRzXG52YXIgZ2V0UHJvY2Vzc0lkID0gZXhwb3J0cy5nZXRQcm9jZXNzSWQgPSBfbWFuYWdlcjIuZGVmYXVsdC5nZXRQcm9jZXNzSWQ7XG5cbi8qXG4gICAgW2ludF06IFByb2Nlc3MgSUQgdG8gYWN0aXZhdGVcbiAgICBbUHJvY2Vzc106IFByb2Nlc3MgdG8gYWN0aXZhdGVcbiovXG5mdW5jdGlvbiBhY3RpdmF0ZShpZCwgcHJvY2Vzcykge1xuICAgIF9tYW5hZ2VyMi5kZWZhdWx0LmFjdGl2YXRlKGlkLCBwcm9jZXNzKTtcblxuICAgIGlmICghaXNSdW5uaW5nKSB7XG4gICAgICAgIHN0YXJ0KCk7XG4gICAgfVxufVxuXG4vKlxuICAgIFtpbnRdOiBQcm9jZXNzIElEIHRvIGRlYWN0aXZhdGVcbiovXG52YXIgZGVhY3RpdmF0ZSA9IGV4cG9ydHMuZGVhY3RpdmF0ZSA9IF9tYW5hZ2VyMi5kZWZhdWx0LmRlYWN0aXZhdGU7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5OeVl5OXdjbTlqWlhOekwyeHZiM0F1YW5NaVhTd2libUZ0WlhNaU9sdGRMQ0p0WVhCd2FXNW5jeUk2SWpzN096dFJRV2xHWjBJc1VVRkJVU3hIUVVGU0xGRkJRVkU3T3pzN096czdPenM3T3pzN096czdRVUYyUlhoQ0xFbEJRVTBzWjBKQlFXZENMRWRCUVVjc1EwRkRja0lzUlVGQlJTeEpRVUZKTEVWQlFVVXNZMEZCWXl4RlFVRkZMRVZCUTNoQ0xFVkJRVVVzU1VGQlNTeEZRVUZGTEZWQlFWVXNSVUZCUlN4RlFVTndRaXhGUVVGRkxFbEJRVWtzUlVGQlJTeFpRVUZaTEVWQlFVVXNXVUZCV1N4RlFVRkZMRWxCUVVrc1JVRkJSU3hGUVVNeFF5eEZRVUZGTEVsQlFVa3NSVUZCUlN4aFFVRmhMRVZCUVVVc1VVRkJVU3hGUVVGRkxFbEJRVWtzUlVGQlJTeEZRVU4yUXl4RlFVRkZMRWxCUVVrc1JVRkJSU3hWUVVGVkxFVkJRVVVzVVVGQlVTeEZRVUZGTEVsQlFVa3NSVUZCUlN4RlFVTndReXhGUVVGRkxFbEJRVWtzUlVGQlJTeGpRVUZqTEVWQlFVVXNVVUZCVVN4RlFVRkZMRWxCUVVrc1JVRkJSU3hGUVVONFF5eEZRVUZGTEVsQlFVa3NSVUZCUlN4WlFVRlpMRVZCUVVVc1JVRkRkRUlzUlVGQlJTeEpRVUZKTEVWQlFVVXNWMEZCVnl4RlFVRkZMRU5CUTNoQ096czdPenM3UVVGQlF6dEJRVU5HTEVsQlFVMHNaVUZCWlN4SFFVRkhMR2RDUVVGblFpeERRVUZETEUxQlFVMDdPenRCUVVGRExFRkJSMmhFTEVsQlFVa3NVMEZCVXl4SFFVRkhMRXRCUVVzN096czdPenRCUVVGRExFRkJUWFJDTEZOQlFWTXNUMEZCVHl4RFFVRkRMRlZCUVZVc1JVRkJSU3hQUVVGUExFVkJRVVU3UVVGRGJFTXNVVUZCVFN4VFFVRlRMRWRCUVVjc2EwSkJRVkVzV1VGQldTeEZRVUZGTEVOQlFVTTdRVUZEZWtNc1VVRkJUU3hyUWtGQmEwSXNSMEZCUnl4VFFVRlRMRU5CUVVNc1RVRkJUU3hEUVVGRE96dEJRVVUxUXl4VFFVRkxMRWxCUVVrc1EwRkJReXhIUVVGSExFTkJRVU1zUlVGQlJTeERRVUZETEVkQlFVY3NaVUZCWlN4RlFVRkZMRU5CUVVNc1JVRkJSU3hGUVVGRk8wRkJRM1JETEZsQlFVMHNTVUZCU1N4SFFVRkhMR2RDUVVGblFpeERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRPenRCUVVWcVF5eGhRVUZMTEVsQlFVa3NSVUZCUlN4SFFVRkhMRU5CUVVNc1JVRkJSU3hGUVVGRkxFZEJRVWNzYTBKQlFXdENMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVU3UVVGRE5VTXNaMEpCUVUwc1QwRkJUeXhIUVVGSExHdENRVUZSTEdWQlFXVXNRMEZCUXl4VFFVRlRMRU5CUVVNc1JVRkJSU3hEUVVGRExFTkJRVU1zUTBGQlF6dEJRVU4yUkN4blFrRkJTU3hOUVVGTkxFZEJRVWNzUzBGQlN6czdPMEZCUVVNc1FVRkhia0lzWjBKQlFVa3NUMEZCVHl4SlFVRkpMRTlCUVU4c1EwRkJReXhKUVVGSkxFTkJRVU1zU1VGQlNTeERRVUZETEV0QlFVc3NRMEZCUXl4SlFVRkpMRU5CUVVNc1VVRkJVU3hKUVVGTExFbEJRVWtzUTBGQlF5eFJRVUZSTEVsQlFVa3NUMEZCVHl4RFFVRkRMR2RDUVVGblFpeExRVUZMTEVsQlFVa3NRMEZCUXl4QlFVRkRMRVZCUVVVN1FVRkRNMGNzYzBKQlFVMHNSMEZCUnl4UFFVRlBMRU5CUVVNc1NVRkJTU3hEUVVGRExFbEJRVWtzUTBGQlF5eERRVUZETEVsQlFVa3NRMEZCUXl4UFFVRlBMRVZCUVVVc1QwRkJUeXhGUVVGRkxGVkJRVlVzUlVGQlJTeFBRVUZQTEVOQlFVTXNRMEZCUXp0aFFVTXpSVHM3TzBGQlFVRXNRVUZIUkN4blFrRkJTU3hKUVVGSkxFTkJRVU1zV1VGQldTeEZRVUZGTzBGQlEyNUNMSFZDUVVGUExFTkJRVU1zWjBKQlFXZENMRWRCUVVjc1FVRkJReXhQUVVGUExFTkJRVU1zU1VGQlNTeERRVUZETEVsQlFVa3NRMEZCUXl4SlFVRkpMRTFCUVUwc1MwRkJTeXhKUVVGSkxFZEJRVWtzUzBGQlN5eEhRVUZITEVsQlFVa3NRMEZCUXp0aFFVTnlSanRUUVVOS08wdEJRMG83TzBGQlJVUXNWMEZCVHl4clFrRkJVU3cwUWtGQk5FSXNSVUZCUlN4RFFVRkRPME5CUTJwRU96czdRVUZCUVN4QlFVZEVMRk5CUVZNc1MwRkJTeXhEUVVGRExGVkJRVlVzUlVGQlJUdEJRVU4yUWl4dlFrRkJUU3hOUVVGTkxFTkJRVU1zVlVGQlZTeERRVUZETEVOQlFVTTdRVUZEZWtJc1lVRkJVeXhIUVVGSExFOUJRVThzUTBGQlF5eFZRVUZWTEVWQlFVVXNaMEpCUVUwc1ZVRkJWU3hGUVVGRkxFTkJRVU1zUTBGQlF6czdRVUZGY0VRc1VVRkJTU3hUUVVGVExFVkJRVVU3UVVGRFdDdzBRa0ZCU3l4TFFVRkxMRU5CUVVNc1EwRkJRenRMUVVObU8wTkJRMG83T3p0QlFVRkJMRUZCUjBRc1UwRkJVeXhMUVVGTExFZEJRVWM3UVVGRFlpeFJRVUZKTEVOQlFVTXNVMEZCVXl4RlFVRkZPMEZCUTFvc2QwSkJRVTBzUzBGQlN5eEZRVUZGTEVOQlFVTTdRVUZEWkN4cFFrRkJVeXhIUVVGSExFbEJRVWtzUTBGQlF6dEJRVU5xUWl3MFFrRkJTeXhMUVVGTExFTkJRVU1zUTBGQlF6dExRVU5tTzBOQlEwbzdPenRCUVVGQkxFRkJSMDBzU1VGQlRTeFpRVUZaTEZkQlFWb3NXVUZCV1N4SFFVRkhMR3RDUVVGUkxGbEJRVms3T3pzN096dEJRVUZETEVGQlRURkRMRk5CUVZNc1VVRkJVU3hEUVVGRExFVkJRVVVzUlVGQlJTeFBRVUZQTEVWQlFVVTdRVUZEYkVNc2MwSkJRVkVzVVVGQlVTeERRVUZETEVWQlFVVXNSVUZCUlN4UFFVRlBMRU5CUVVNc1EwRkJRenM3UVVGRk9VSXNVVUZCU1N4RFFVRkRMRk5CUVZNc1JVRkJSVHRCUVVOYUxHRkJRVXNzUlVGQlJTeERRVUZETzB0QlExZzdRMEZEU2pzN096czdRVUZCUVN4QlFVdE5MRWxCUVUwc1ZVRkJWU3hYUVVGV0xGVkJRVlVzUjBGQlJ5eHJRa0ZCVVN4VlFVRlZMRU5CUVVNaUxDSm1hV3hsSWpvaWJHOXZjQzVxY3lJc0luTnZkWEpqWlZKdmIzUWlPaUl2VlhObGNuTXZUV0YwZEZCbGNuSjVMMU5wZEdWekwzQnZjRzF2ZEdsdmJpSXNJbk52ZFhKalpYTkRiMjUwWlc1MElqcGJJaThxWEc0Z0lDQWdRMjl5WlNCeVpXNWtaWElnYkc5dmNGeHVYRzRnSUNBZ1UyOXRaU0JrWldOcFkybHpiMjV6SUdobGNtVWdhR0YyWlNCaVpXVnVJSFJoYTJWdUlHbHVJSFJvWlNCdVlXMWxJRzltSUhCbGNtWnZjbTFoYm1ObExpQkJiR3dnYUdGcGJDQndaWEptYjNKdFlXNWpaUzVjYmlBZ0lDQW9TWFFnZEhWeWJuTWdiM1YwSUcxcFkzSnZiM0IwYVcxcGMyRjBhVzl1Y3lCa2J5QnRZWFIwWlhJZ2QyaGxiaUI1YjNVZ2FHRjJaU0F4Tm0xektWeHVLaTljYm1sdGNHOXlkQ0IwYVcxbGNpQm1jbTl0SUNjdUwzUnBiV1Z5Snp0Y2JtbHRjRzl5ZENCMGFXTnJJR1p5YjIwZ0p5NHZkR2xqYXljN1hHNXBiWEJ2Y25RZ2JXRnVZV2RsY2lCbWNtOXRJQ2N1TDIxaGJtRm5aWEluTzF4dVhHNWpiMjV6ZENCd2NtOWpaWE56VTNSbGNFOXlaR1Z5SUQwZ1cxeHVJQ0FnSUhzZ2JtRnRaVG9nSjI5dVJuSmhiV1ZUZEdGeWRDY2dmU3hjYmlBZ0lDQjdJRzVoYldVNklDZHZibFZ3WkdGMFpTY2dmU3hjYmlBZ0lDQjdJRzVoYldVNklDZDNhV3hzVW1WdVpHVnlKeXdnWkdWamFXUmxVbVZ1WkdWeU9pQjBjblZsSUgwc1hHNGdJQ0FnZXlCdVlXMWxPaUFuYjI1UWNtVlNaVzVrWlhJbkxDQnBjMUpsYm1SbGNqb2dkSEoxWlNCOUxGeHVJQ0FnSUhzZ2JtRnRaVG9nSjI5dVVtVnVaR1Z5Snl3Z2FYTlNaVzVrWlhJNklIUnlkV1VnZlN4Y2JpQWdJQ0I3SUc1aGJXVTZJQ2R2YmxCdmMzUlNaVzVrWlhJbkxDQnBjMUpsYm1SbGNqb2dkSEoxWlNCOUxGeHVJQ0FnSUhzZ2JtRnRaVG9nSjI5dVJuSmhiV1ZGYm1RbklIMHNYRzRnSUNBZ2V5QnVZVzFsT2lBbmIyNURiR1ZoYm5Wd0p5QjlYRzVkTzF4dVkyOXVjM1FnYm5WdFVISnZZMlZ6YzFOMFpYQnpJRDBnY0hKdlkyVnpjMU4wWlhCUGNtUmxjaTVzWlc1bmRHZzdYRzVjYmk4dklGdGliMjlzWldGdVhUb2dTWE1nYkc5dmNDQnlkVzV1YVc1blAxeHViR1YwSUdselVuVnVibWx1WnlBOUlHWmhiSE5sTzF4dVhHNHZLbHh1SUNBZ0lGdDBhVzFsYzNSaGJYQmRPaUJHY21GdFpTQjBhVzFsYzNSaGJYQmNiaUFnSUNCYmFXNTBYVG9nVkdsdFpTQnphVzVqWlNCc1lYTjBJR1p5WVcxbFhHNHFMMXh1Wm5WdVkzUnBiMjRnWm1seVpVRnNiQ2htY21GdFpWTjBZVzF3TENCbGJHRndjMlZrS1NCN1hHNGdJQ0FnWTI5dWMzUWdZV04wYVhabFNXUnpJRDBnYldGdVlXZGxjaTVuWlhSQlkzUnBkbVZKWkhNb0tUdGNiaUFnSUNCamIyNXpkQ0JoWTNScGRtVlFjbTlqWlhOelEyOTFiblFnUFNCaFkzUnBkbVZKWkhNdWJHVnVaM1JvTzF4dVhHNGdJQ0FnWm05eUlDaHNaWFFnYVNBOUlEQTdJR2tnUENCdWRXMVFjbTlqWlhOelUzUmxjSE03SUdrckt5a2dlMXh1SUNBZ0lDQWdJQ0JqYjI1emRDQnpkR1Z3SUQwZ2NISnZZMlZ6YzFOMFpYQlBjbVJsY2x0cFhUdGNibHh1SUNBZ0lDQWdJQ0JtYjNJZ0tHeGxkQ0JwTWlBOUlEQTdJR2t5SUR3Z1lXTjBhWFpsVUhKdlkyVnpjME52ZFc1ME95QnBNaXNyS1NCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0JqYjI1emRDQndjbTlqWlhOeklEMGdiV0Z1WVdkbGNpNWhZM1JwZG1WUWNtOWpaWE56WlhOYllXTjBhWFpsU1dSelcya3lYVjA3WEc0Z0lDQWdJQ0FnSUNBZ0lDQnNaWFFnY21WemRXeDBJRDBnWm1Gc2MyVTdYRzVjYmlBZ0lDQWdJQ0FnSUNBZ0lDOHZJRU5vWldOcklHbG1JSFJvYVhNZ2NISnZZMlZ6Y3lCb1lYTWdkR2hwY3lCemRHVndMQ0J2Y2lCcFppQnBkQ2R6SUdFZ2NtVnVaR1Z5SUhOMFpYQWdkR2hoZENCM1pTZHlaU0J5Wlc1a1pYSnBibWNnZEdocGN5Qm1jbUZ0WlZ4dUlDQWdJQ0FnSUNBZ0lDQWdhV1lnS0hCeWIyTmxjM01nSmlZZ2NISnZZMlZ6YzF0emRHVndMbTVoYldWZElDWW1JQ2doYzNSbGNDNXBjMUpsYm1SbGNpQjhmQ0FvYzNSbGNDNXBjMUpsYm1SbGNpQW1KaUJ3Y205alpYTnpMbDl5Wlc1a1pYSlVhR2x6Um5KaGJXVWdQVDA5SUhSeWRXVXBLU2tnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUhKbGMzVnNkQ0E5SUhCeWIyTmxjM05iYzNSbGNDNXVZVzFsWFM1allXeHNLSEJ5YjJObGMzTXNJSEJ5YjJObGMzTXNJR1p5WVcxbFUzUmhiWEFzSUdWc1lYQnpaV1FwTzF4dUlDQWdJQ0FnSUNBZ0lDQWdmVnh1WEc0Z0lDQWdJQ0FnSUNBZ0lDQXZMeUJKWmlCMGFHbHpJR2x6SUdFZ1pHVmphV1JsSUhKbGJtUmxjaUJ6ZEdWd0lHRnVaQ0JwZENCeVpYUjFjbTV6SUdCbVlXeHpaV0FzSUhObGRDQjNhV3hzVW1WdVpHVnlJSFJ2SUdaaGJITmxYRzRnSUNBZ0lDQWdJQ0FnSUNCcFppQW9jM1JsY0M1a1pXTnBaR1ZTWlc1a1pYSXBJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0J3Y205alpYTnpMbDl5Wlc1a1pYSlVhR2x6Um5KaGJXVWdQU0FvY0hKdlkyVnpjMXR6ZEdWd0xtNWhiV1ZkSUNZbUlISmxjM1ZzZENBaFBUMGdkSEoxWlNrZ1B5Qm1ZV3h6WlNBNklIUnlkV1U3WEc0Z0lDQWdJQ0FnSUNBZ0lDQjlYRzRnSUNBZ0lDQWdJSDFjYmlBZ0lDQjlYRzVjYmlBZ0lDQnlaWFIxY200Z2JXRnVZV2RsY2k1blpYUk9iMjVDWVdOclozSnZkVzVrVW5WdWJtbHVaME52ZFc1MEtDazdYRzU5WEc1Y2JpOHZJRVoxYm1OMGFXOXVJSFJ2SUdacGNtVWdaWFpsY25rZ1puSmhiV1ZjYm1aMWJtTjBhVzl1SUdaeVlXMWxLR1p5WVcxbFUzUmhiWEFwSUh0Y2JpQWdJQ0IwYVcxbGNpNTFjR1JoZEdVb1puSmhiV1ZUZEdGdGNDazdYRzRnSUNBZ2FYTlNkVzV1YVc1bklEMGdabWx5WlVGc2JDaG1jbUZ0WlZOMFlXMXdMQ0IwYVcxbGNpNW5aWFJGYkdGd2MyVmtLQ2twTzF4dVhHNGdJQ0FnYVdZZ0tHbHpVblZ1Ym1sdVp5a2dlMXh1SUNBZ0lDQWdJQ0IwYVdOcktHWnlZVzFsS1R0Y2JpQWdJQ0I5WEc1OVhHNWNiaTh2SUZOMFlYSjBJR3h2YjNCY2JtWjFibU4wYVc5dUlITjBZWEowS0NrZ2UxeHVJQ0FnSUdsbUlDZ2hhWE5TZFc1dWFXNW5LU0I3WEc0Z0lDQWdJQ0FnSUhScGJXVnlMbk4wWVhKMEtDazdYRzRnSUNBZ0lDQWdJR2x6VW5WdWJtbHVaeUE5SUhSeWRXVTdYRzRnSUNBZ0lDQWdJSFJwWTJzb1puSmhiV1VwTzF4dUlDQWdJSDFjYm4xY2JseHVMeThnUlhod2IzSjBjMXh1Wlhod2IzSjBJR052Ym5OMElHZGxkRkJ5YjJObGMzTkpaQ0E5SUcxaGJtRm5aWEl1WjJWMFVISnZZMlZ6YzBsa08xeHVYRzR2S2x4dUlDQWdJRnRwYm5SZE9pQlFjbTlqWlhOeklFbEVJSFJ2SUdGamRHbDJZWFJsWEc0Z0lDQWdXMUJ5YjJObGMzTmRPaUJRY205alpYTnpJSFJ2SUdGamRHbDJZWFJsWEc0cUwxeHVaWGh3YjNKMElHWjFibU4wYVc5dUlHRmpkR2wyWVhSbEtHbGtMQ0J3Y205alpYTnpLU0I3WEc0Z0lDQWdiV0Z1WVdkbGNpNWhZM1JwZG1GMFpTaHBaQ3dnY0hKdlkyVnpjeWs3WEc1Y2JpQWdJQ0JwWmlBb0lXbHpVblZ1Ym1sdVp5a2dlMXh1SUNBZ0lDQWdJQ0J6ZEdGeWRDZ3BPMXh1SUNBZ0lIMWNibjFjYmx4dUx5cGNiaUFnSUNCYmFXNTBYVG9nVUhKdlkyVnpjeUJKUkNCMGJ5QmtaV0ZqZEdsMllYUmxYRzRxTDF4dVpYaHdiM0owSUdOdmJuTjBJR1JsWVdOMGFYWmhkR1VnUFNCdFlXNWhaMlZ5TG1SbFlXTjBhWFpoZEdVN0lsMTlcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL3Byb2Nlc3MvbG9vcC5qc1xuICoqIG1vZHVsZSBpZCA9IDM2XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfSW5wdXQyID0gcmVxdWlyZSgnLi9JbnB1dCcpO1xuXG52YXIgX0lucHV0MyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX0lucHV0Mik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKCFzZWxmKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gY2FsbCAmJiAodHlwZW9mIGNhbGwgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikgPyBjYWxsIDogc2VsZjsgfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb24sIG5vdCBcIiArIHR5cGVvZiBzdXBlckNsYXNzKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCBlbnVtZXJhYmxlOiBmYWxzZSwgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LnNldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKSA6IHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7IH1cblxudmFyIFBvaW50ZXIgPSAoZnVuY3Rpb24gKF9JbnB1dCkge1xuICAgIF9pbmhlcml0cyhQb2ludGVyLCBfSW5wdXQpO1xuXG4gICAgZnVuY3Rpb24gUG9pbnRlcihpbml0aWFsU3RhdGUsIG1vdmVFdmVudCwgZXZlbnRUb1BvaW50KSB7XG4gICAgICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBQb2ludGVyKTtcblxuICAgICAgICB2YXIgX3RoaXMgPSBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCBfSW5wdXQuY2FsbCh0aGlzLCBpbml0aWFsU3RhdGUpKTtcblxuICAgICAgICBfdGhpcy5ldmVudFRvUG9pbnQgPSBldmVudFRvUG9pbnQ7XG4gICAgICAgIF90aGlzLm1vdmVFdmVudCA9IG1vdmVFdmVudDtcbiAgICAgICAgcmV0dXJuIF90aGlzO1xuICAgIH1cblxuICAgIFBvaW50ZXIucHJvdG90eXBlLmxhdGVzdCA9IGZ1bmN0aW9uIGxhdGVzdChlKSB7XG4gICAgICAgIF9JbnB1dC5wcm90b3R5cGUubGF0ZXN0LmNhbGwodGhpcywgdGhpcy5ldmVudFRvUG9pbnQoZSkpO1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgfTtcblxuICAgIFBvaW50ZXIucHJvdG90eXBlLnN0YXJ0ID0gZnVuY3Rpb24gc3RhcnQoKSB7XG4gICAgICAgIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gICAgICAgIF9JbnB1dC5wcm90b3R5cGUuc3RhcnQuY2FsbCh0aGlzKTtcbiAgICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIodGhpcy5tb3ZlRXZlbnQsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICByZXR1cm4gX3RoaXMyLmxhdGVzdChlKTtcbiAgICAgICAgfSk7XG4gICAgfTtcblxuICAgIFBvaW50ZXIucHJvdG90eXBlLnN0b3AgPSBmdW5jdGlvbiBzdG9wKCkge1xuICAgICAgICB2YXIgX3RoaXMzID0gdGhpcztcblxuICAgICAgICBfSW5wdXQucHJvdG90eXBlLnN0b3AuY2FsbCh0aGlzKTtcbiAgICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIodGhpcy5tb3ZlRXZlbnQsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICByZXR1cm4gX3RoaXMzLmxhdGVzdChlKTtcbiAgICAgICAgfSk7XG4gICAgfTtcblxuICAgIHJldHVybiBQb2ludGVyO1xufSkoX0lucHV0My5kZWZhdWx0KTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gUG9pbnRlcjtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbk55WXk5cGJuQjFkQzlRYjJsdWRHVnlMbXB6SWwwc0ltNWhiV1Z6SWpwYlhTd2liV0Z3Y0dsdVozTWlPaUk3T3pzN096czdPenM3T3pzN096czdTVUZGY1VJc1QwRkJUenRqUVVGUUxFOUJRVTg3TzBGQlEzaENMR0ZCUkdsQ0xFOUJRVThzUTBGRFdpeFpRVUZaTEVWQlFVVXNVMEZCVXl4RlFVRkZMRmxCUVZrc1JVRkJSVHM0UWtGRWJFTXNUMEZCVHpzN2NVUkJSWEJDTEd0Q1FVRk5MRmxCUVZrc1EwRkJRenM3UVVGRGJrSXNZMEZCU3l4WlFVRlpMRWRCUVVjc1dVRkJXU3hEUVVGRE8wRkJRMnBETEdOQlFVc3NVMEZCVXl4SFFVRkhMRk5CUVZNc1EwRkJRenM3UzBGRE9VSTdPMEZCVEdkQ0xGZEJRVThzVjBGUGVFSXNUVUZCVFN4dFFrRkJReXhEUVVGRExFVkJRVVU3UVVGRFRpeDVRa0ZCVFN4TlFVRk5MRXRCUVVFc1QwRkJReXhKUVVGSkxFTkJRVU1zV1VGQldTeERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNN1FVRkRia01zVTBGQlF5eERRVUZETEdOQlFXTXNSVUZCUlN4RFFVRkRPMHRCUTNSQ096dEJRVlpuUWl4WFFVRlBMRmRCV1hoQ0xFdEJRVXNzYjBKQlFVYzdPenRCUVVOS0xIbENRVUZOTEV0QlFVc3NTMEZCUVN4TlFVRkZMRU5CUVVNN1FVRkRaQ3huUWtGQlVTeERRVUZETEdWQlFXVXNRMEZCUXl4blFrRkJaMElzUTBGQlF5eEpRVUZKTEVOQlFVTXNVMEZCVXl4RlFVRkZMRlZCUVVNc1EwRkJRenR0UWtGQlN5eFBRVUZMTEUxQlFVMHNRMEZCUXl4RFFVRkRMRU5CUVVNN1UwRkJRU3hEUVVGRExFTkJRVU03UzBGRGNFWTdPMEZCWm1kQ0xGZEJRVThzVjBGcFFuaENMRWxCUVVrc2JVSkJRVWM3T3p0QlFVTklMSGxDUVVGTkxFbEJRVWtzUzBGQlFTeE5RVUZGTEVOQlFVTTdRVUZEWWl4blFrRkJVU3hEUVVGRExHVkJRV1VzUTBGQlF5eHRRa0ZCYlVJc1EwRkJReXhKUVVGSkxFTkJRVU1zVTBGQlV5eEZRVUZGTEZWQlFVTXNRMEZCUXp0dFFrRkJTeXhQUVVGTExFMUJRVTBzUTBGQlF5eERRVUZETEVOQlFVTTdVMEZCUVN4RFFVRkRMRU5CUVVNN1MwRkRka1k3TzFkQmNFSm5RaXhQUVVGUE96czdhMEpCUVZBc1QwRkJUeUlzSW1acGJHVWlPaUpRYjJsdWRHVnlMbXB6SWl3aWMyOTFjbU5sVW05dmRDSTZJaTlWYzJWeWN5OU5ZWFIwVUdWeWNua3ZVMmwwWlhNdmNHOXdiVzkwYVc5dUlpd2ljMjkxY21ObGMwTnZiblJsYm5RaU9sc2lhVzF3YjNKMElFbHVjSFYwSUdaeWIyMGdKeTR2U1c1d2RYUW5PMXh1WEc1bGVIQnZjblFnWkdWbVlYVnNkQ0JqYkdGemN5QlFiMmx1ZEdWeUlHVjRkR1Z1WkhNZ1NXNXdkWFFnZTF4dUlDQWdJR052Ym5OMGNuVmpkRzl5S0dsdWFYUnBZV3hUZEdGMFpTd2diVzkyWlVWMlpXNTBMQ0JsZG1WdWRGUnZVRzlwYm5RcElIdGNiaUFnSUNBZ0lDQWdjM1Z3WlhJb2FXNXBkR2xoYkZOMFlYUmxLVHRjYmlBZ0lDQWdJQ0FnZEdocGN5NWxkbVZ1ZEZSdlVHOXBiblFnUFNCbGRtVnVkRlJ2VUc5cGJuUTdYRzRnSUNBZ0lDQWdJSFJvYVhNdWJXOTJaVVYyWlc1MElEMGdiVzkyWlVWMlpXNTBPMXh1SUNBZ0lIMWNibHh1SUNBZ0lHeGhkR1Z6ZENobEtTQjdYRzRnSUNBZ0lDQWdJSE4xY0dWeUxteGhkR1Z6ZENoMGFHbHpMbVYyWlc1MFZHOVFiMmx1ZENobEtTazdYRzRnSUNBZ0lDQWdJR1V1Y0hKbGRtVnVkRVJsWm1GMWJIUW9LVHRjYmlBZ0lDQjlYRzVjYmlBZ0lDQnpkR0Z5ZENncElIdGNiaUFnSUNBZ0lDQWdjM1Z3WlhJdWMzUmhjblFvS1R0Y2JpQWdJQ0FnSUNBZ1pHOWpkVzFsYm5RdVpHOWpkVzFsYm5SRmJHVnRaVzUwTG1Ga1pFVjJaVzUwVEdsemRHVnVaWElvZEdocGN5NXRiM1psUlhabGJuUXNJQ2hsS1NBOVBpQjBhR2x6TG14aGRHVnpkQ2hsS1NrN1hHNGdJQ0FnZlZ4dVhHNGdJQ0FnYzNSdmNDZ3BJSHRjYmlBZ0lDQWdJQ0FnYzNWd1pYSXVjM1J2Y0NncE8xeHVJQ0FnSUNBZ0lDQmtiMk4xYldWdWRDNWtiMk4xYldWdWRFVnNaVzFsYm5RdWNtVnRiM1psUlhabGJuUk1hWE4wWlc1bGNpaDBhR2x6TG0xdmRtVkZkbVZ1ZEN3Z0tHVXBJRDArSUhSb2FYTXViR0YwWlhOMEtHVXBLVHRjYmlBZ0lDQjlYRzU5WEc0aVhYMD1cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2lucHV0L1BvaW50ZXIuanNcbiAqKiBtb2R1bGUgaWQgPSAzN1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xudmFyIFRSQU5TTEFURSA9ICd0cmFuc2xhdGUnO1xuXG5leHBvcnRzLmRlZmF1bHQgPSB7XG4gICAgeDogVFJBTlNMQVRFICsgJ1gnLFxuICAgIHk6IFRSQU5TTEFURSArICdZJyxcbiAgICB6OiBUUkFOU0xBVEUgKyAnWidcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5OeVl5OWhaR0Z3ZEdWeUwyTnpjeTl6ZEdGMFpTMXRZWEF1YW5NaVhTd2libUZ0WlhNaU9sdGRMQ0p0WVhCd2FXNW5jeUk2SWpzN08wRkJRVUVzU1VGQlRTeFRRVUZUTEVkQlFVY3NWMEZCVnl4RFFVRkRPenRyUWtGRlpqdEJRVU5ZTEV0QlFVTXNSVUZCUlN4VFFVRlRMRWRCUVVjc1IwRkJSenRCUVVOc1FpeExRVUZETEVWQlFVVXNVMEZCVXl4SFFVRkhMRWRCUVVjN1FVRkRiRUlzUzBGQlF5eEZRVUZGTEZOQlFWTXNSMEZCUnl4SFFVRkhPME5CUTNKQ0lpd2labWxzWlNJNkluTjBZWFJsTFcxaGNDNXFjeUlzSW5OdmRYSmpaVkp2YjNRaU9pSXZWWE5sY25NdlRXRjBkRkJsY25KNUwxTnBkR1Z6TDNCdmNHMXZkR2x2YmlJc0luTnZkWEpqWlhORGIyNTBaVzUwSWpwYkltTnZibk4wSUZSU1FVNVRURUZVUlNBOUlDZDBjbUZ1YzJ4aGRHVW5PMXh1WEc1bGVIQnZjblFnWkdWbVlYVnNkQ0I3WEc0Z0lDQWdlRG9nVkZKQlRsTk1RVlJGSUNzZ0oxZ25MRnh1SUNBZ0lIazZJRlJTUVU1VFRFRlVSU0FySUNkWkp5eGNiaUFnSUNCNk9pQlVVa0ZPVTB4QlZFVWdLeUFuV2lkY2JuMDdJbDE5XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9hZGFwdGVyL2Nzcy9zdGF0ZS1tYXAuanNcbiAqKiBtb2R1bGUgaWQgPSAzOFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX2FuZ2xlID0gcmVxdWlyZSgnLi4vLi4vdmFsdWUtdHlwZXMvYW5nbGUnKTtcblxudmFyIF9hbmdsZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9hbmdsZSk7XG5cbnZhciBfYWxwaGEgPSByZXF1aXJlKCcuLi8uLi92YWx1ZS10eXBlcy9hbHBoYScpO1xuXG52YXIgX2FscGhhMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2FscGhhKTtcblxudmFyIF9heGVzID0gcmVxdWlyZSgnLi4vLi4vdmFsdWUtdHlwZXMvYXhlcycpO1xuXG52YXIgX2F4ZXMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfYXhlcyk7XG5cbnZhciBfY29sb3IgPSByZXF1aXJlKCcuLi8uLi92YWx1ZS10eXBlcy9jb2xvcicpO1xuXG52YXIgX2NvbG9yMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NvbG9yKTtcblxudmFyIF9zY2FsZSA9IHJlcXVpcmUoJy4uLy4uL3ZhbHVlLXR5cGVzL3NjYWxlJyk7XG5cbnZhciBfc2NhbGUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfc2NhbGUpO1xuXG52YXIgX3NoYWRvdyA9IHJlcXVpcmUoJy4uLy4uL3ZhbHVlLXR5cGVzL3NoYWRvdycpO1xuXG52YXIgX3NoYWRvdzIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9zaGFkb3cpO1xuXG52YXIgX3Bvc2l0aW9ucyA9IHJlcXVpcmUoJy4uLy4uL3ZhbHVlLXR5cGVzL3Bvc2l0aW9ucycpO1xuXG52YXIgX3Bvc2l0aW9uczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9wb3NpdGlvbnMpO1xuXG52YXIgX3B4ID0gcmVxdWlyZSgnLi4vLi4vdmFsdWUtdHlwZXMvcHgnKTtcblxudmFyIF9weDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9weCk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmV4cG9ydHMuZGVmYXVsdCA9IHtcbiAgICAvLyBDb2xvciBwcm9wc1xuICAgIGNvbG9yOiBfY29sb3IyLmRlZmF1bHQsXG4gICAgYmFja2dyb3VuZENvbG9yOiBfY29sb3IyLmRlZmF1bHQsXG4gICAgb3V0bGluZUNvbG9yOiBfY29sb3IyLmRlZmF1bHQsXG4gICAgZmlsbDogX2NvbG9yMi5kZWZhdWx0LFxuICAgIHN0cm9rZTogX2NvbG9yMi5kZWZhdWx0LFxuXG4gICAgLy8gQm9yZGVyIHByb3BzXG4gICAgYm9yZGVyQ29sb3I6IF9jb2xvcjIuZGVmYXVsdCxcbiAgICBib3JkZXJUb3BDb2xvcjogX2NvbG9yMi5kZWZhdWx0LFxuICAgIGJvcmRlclJpZ2h0Q29sb3I6IF9jb2xvcjIuZGVmYXVsdCxcbiAgICBib3JkZXJCb3R0b21Db2xvcjogX2NvbG9yMi5kZWZhdWx0LFxuICAgIGJvcmRlckxlZnRDb2xvcjogX2NvbG9yMi5kZWZhdWx0LFxuICAgIGJvcmRlclJhZGl1czogX3B4Mi5kZWZhdWx0LFxuXG4gICAgLy8gUG9zaXRpb25pbmdcbiAgICBtYXJnaW46IF9wb3NpdGlvbnMyLmRlZmF1bHQsXG4gICAgcGFkZGluZzogX3Bvc2l0aW9uczIuZGVmYXVsdCxcbiAgICB3aWR0aDogX3B4Mi5kZWZhdWx0LFxuICAgIGhlaWdodDogX3B4Mi5kZWZhdWx0LFxuXG4gICAgLy8gQXhlc1xuICAgIGJhY2tncm91bmRQb3NpdGlvbjogX2F4ZXMyLmRlZmF1bHQsXG4gICAgcGVyc3BlY3RpdmVPcmlnaW46IF9heGVzMi5kZWZhdWx0LFxuICAgIHRyYW5zZm9ybU9yaWdpbjogX2F4ZXMyLmRlZmF1bHQsXG5cbiAgICAvLyBTaGFkb3dzXG4gICAgdGV4dFNoYWRvdzogX3NoYWRvdzIuZGVmYXVsdCxcbiAgICBib3hTaGFkb3c6IF9zaGFkb3cyLmRlZmF1bHQsXG5cbiAgICAvLyBUcmFuc2Zvcm0gcHJvcGVydGllc1xuICAgIHJvdGF0ZTogX2FuZ2xlMi5kZWZhdWx0LFxuICAgIHJvdGF0ZVg6IF9hbmdsZTIuZGVmYXVsdCxcbiAgICByb3RhdGVZOiBfYW5nbGUyLmRlZmF1bHQsXG4gICAgcm90YXRlWjogX2FuZ2xlMi5kZWZhdWx0LFxuICAgIHNjYWxlOiBfc2NhbGUyLmRlZmF1bHQsXG4gICAgc2NhbGVYOiBfc2NhbGUyLmRlZmF1bHQsXG4gICAgc2NhbGVZOiBfc2NhbGUyLmRlZmF1bHQsXG4gICAgc2NhbGVaOiBfc2NhbGUyLmRlZmF1bHQsXG4gICAgc2tld1g6IF9hbmdsZTIuZGVmYXVsdCxcbiAgICBza2V3WTogX2FuZ2xlMi5kZWZhdWx0LFxuICAgIGRpc3RhbmNlOiBfcHgyLmRlZmF1bHQsXG4gICAgdHJhbnNsYXRlWDogX3B4Mi5kZWZhdWx0LFxuICAgIHRyYW5zbGF0ZVk6IF9weDIuZGVmYXVsdCxcbiAgICB0cmFuc2xhdGVaOiBfcHgyLmRlZmF1bHQsXG4gICAgcGVyc3BlY3RpdmU6IF9weDIuZGVmYXVsdCxcbiAgICBvcGFjaXR5OiBfYWxwaGEyLmRlZmF1bHRcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5OeVl5OWhaR0Z3ZEdWeUwyTnpjeTkyWVd4MVpTMTBlWEJsTFcxaGNDNXFjeUpkTENKdVlXMWxjeUk2VzEwc0ltMWhjSEJwYm1keklqb2lPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenRyUWtGVFpUczdRVUZGV0N4VFFVRkxMR2xDUVVGUE8wRkJRMW9zYlVKQlFXVXNhVUpCUVU4N1FVRkRkRUlzWjBKQlFWa3NhVUpCUVU4N1FVRkRia0lzVVVGQlNTeHBRa0ZCVHp0QlFVTllMRlZCUVUwc2FVSkJRVTg3T3p0QlFVZGlMR1ZCUVZjc2FVSkJRVTg3UVVGRGJFSXNhMEpCUVdNc2FVSkJRVTg3UVVGRGNrSXNiMEpCUVdkQ0xHbENRVUZQTzBGQlEzWkNMSEZDUVVGcFFpeHBRa0ZCVHp0QlFVTjRRaXh0UWtGQlpTeHBRa0ZCVHp0QlFVTjBRaXhuUWtGQldTeGpRVUZKT3pzN1FVRkhhRUlzVlVGQlRTeHhRa0ZCVnp0QlFVTnFRaXhYUVVGUExIRkNRVUZYTzBGQlEyeENMRk5CUVVzc1kwRkJTVHRCUVVOVUxGVkJRVTBzWTBGQlNUczdPMEZCUjFZc2MwSkJRV3RDTEdkQ1FVRk5PMEZCUTNoQ0xIRkNRVUZwUWl4blFrRkJUVHRCUVVOMlFpeHRRa0ZCWlN4blFrRkJUVHM3TzBGQlIzSkNMR05CUVZVc2EwSkJRVkU3UVVGRGJFSXNZVUZCVXl4clFrRkJVVHM3TzBGQlIycENMRlZCUVUwc2FVSkJRVTg3UVVGRFlpeFhRVUZQTEdsQ1FVRlBPMEZCUTJRc1YwRkJUeXhwUWtGQlR6dEJRVU5rTEZkQlFVOHNhVUpCUVU4N1FVRkRaQ3hUUVVGTExHbENRVUZQTzBGQlExb3NWVUZCVFN4cFFrRkJUenRCUVVOaUxGVkJRVTBzYVVKQlFVODdRVUZEWWl4VlFVRk5MR2xDUVVGUE8wRkJRMklzVTBGQlN5eHBRa0ZCVHp0QlFVTmFMRk5CUVVzc2FVSkJRVTg3UVVGRFdpeFpRVUZSTEdOQlFVazdRVUZEV2l4alFVRlZMR05CUVVrN1FVRkRaQ3hqUVVGVkxHTkJRVWs3UVVGRFpDeGpRVUZWTEdOQlFVazdRVUZEWkN4bFFVRlhMR05CUVVrN1FVRkRaaXhYUVVGUExHbENRVUZQTzBOQlEycENJaXdpWm1sc1pTSTZJblpoYkhWbExYUjVjR1V0YldGd0xtcHpJaXdpYzI5MWNtTmxVbTl2ZENJNklpOVZjMlZ5Y3k5TllYUjBVR1Z5Y25rdlUybDBaWE12Y0c5d2JXOTBhVzl1SWl3aWMyOTFjbU5sYzBOdmJuUmxiblFpT2xzaWFXMXdiM0owSUdGdVoyeGxJR1p5YjIwZ0p5NHVMeTR1TDNaaGJIVmxMWFI1Y0dWekwyRnVaMnhsSnp0Y2JtbHRjRzl5ZENCaGJIQm9ZU0JtY205dElDY3VMaTh1TGk5MllXeDFaUzEwZVhCbGN5OWhiSEJvWVNjN1hHNXBiWEJ2Y25RZ1lYaGxjeUJtY205dElDY3VMaTh1TGk5MllXeDFaUzEwZVhCbGN5OWhlR1Z6Snp0Y2JtbHRjRzl5ZENCamIyeHZjaUJtY205dElDY3VMaTh1TGk5MllXeDFaUzEwZVhCbGN5OWpiMnh2Y2ljN1hHNXBiWEJ2Y25RZ2MyTmhiR1VnWm5KdmJTQW5MaTR2TGk0dmRtRnNkV1V0ZEhsd1pYTXZjMk5oYkdVbk8xeHVhVzF3YjNKMElITm9ZV1J2ZHlCbWNtOXRJQ2N1TGk4dUxpOTJZV3gxWlMxMGVYQmxjeTl6YUdGa2IzY25PMXh1YVcxd2IzSjBJSEJ2YzJsMGFXOXVjeUJtY205dElDY3VMaTh1TGk5MllXeDFaUzEwZVhCbGN5OXdiM05wZEdsdmJuTW5PMXh1YVcxd2IzSjBJSEI0SUdaeWIyMGdKeTR1THk0dUwzWmhiSFZsTFhSNWNHVnpMM0I0Snp0Y2JseHVaWGh3YjNKMElHUmxabUYxYkhRZ2UxeHVJQ0FnSUM4dklFTnZiRzl5SUhCeWIzQnpYRzRnSUNBZ1kyOXNiM0k2SUdOdmJHOXlMRnh1SUNBZ0lHSmhZMnRuY205MWJtUkRiMnh2Y2pvZ1kyOXNiM0lzWEc0Z0lDQWdiM1YwYkdsdVpVTnZiRzl5T2lCamIyeHZjaXhjYmlBZ0lDQm1hV3hzT2lCamIyeHZjaXhjYmlBZ0lDQnpkSEp2YTJVNklHTnZiRzl5TEZ4dVhHNGdJQ0FnTHk4Z1FtOXlaR1Z5SUhCeWIzQnpYRzRnSUNBZ1ltOXlaR1Z5UTI5c2IzSTZJR052Ykc5eUxGeHVJQ0FnSUdKdmNtUmxjbFJ2Y0VOdmJHOXlPaUJqYjJ4dmNpeGNiaUFnSUNCaWIzSmtaWEpTYVdkb2RFTnZiRzl5T2lCamIyeHZjaXhjYmlBZ0lDQmliM0prWlhKQ2IzUjBiMjFEYjJ4dmNqb2dZMjlzYjNJc1hHNGdJQ0FnWW05eVpHVnlUR1ZtZEVOdmJHOXlPaUJqYjJ4dmNpeGNiaUFnSUNCaWIzSmtaWEpTWVdScGRYTTZJSEI0TEZ4dVhHNGdJQ0FnTHk4Z1VHOXphWFJwYjI1cGJtZGNiaUFnSUNCdFlYSm5hVzQ2SUhCdmMybDBhVzl1Y3l4Y2JpQWdJQ0J3WVdSa2FXNW5PaUJ3YjNOcGRHbHZibk1zWEc0Z0lDQWdkMmxrZEdnNklIQjRMRnh1SUNBZ0lHaGxhV2RvZERvZ2NIZ3NYRzVjYmlBZ0lDQXZMeUJCZUdWelhHNGdJQ0FnWW1GamEyZHliM1Z1WkZCdmMybDBhVzl1T2lCaGVHVnpMRnh1SUNBZ0lIQmxjbk53WldOMGFYWmxUM0pwWjJsdU9pQmhlR1Z6TEZ4dUlDQWdJSFJ5WVc1elptOXliVTl5YVdkcGJqb2dZWGhsY3l4Y2JseHVJQ0FnSUM4dklGTm9ZV1J2ZDNOY2JpQWdJQ0IwWlhoMFUyaGhaRzkzT2lCemFHRmtiM2NzWEc0Z0lDQWdZbTk0VTJoaFpHOTNPaUJ6YUdGa2IzY3NJQ0FnWEc1Y2JpQWdJQ0F2THlCVWNtRnVjMlp2Y20wZ2NISnZjR1Z5ZEdsbGMxeHVJQ0FnSUhKdmRHRjBaVG9nWVc1bmJHVXNYRzRnSUNBZ2NtOTBZWFJsV0RvZ1lXNW5iR1VzWEc0Z0lDQWdjbTkwWVhSbFdUb2dZVzVuYkdVc1hHNGdJQ0FnY205MFlYUmxXam9nWVc1bmJHVXNYRzRnSUNBZ2MyTmhiR1U2SUhOallXeGxMRnh1SUNBZ0lITmpZV3hsV0RvZ2MyTmhiR1VzWEc0Z0lDQWdjMk5oYkdWWk9pQnpZMkZzWlN4Y2JpQWdJQ0J6WTJGc1pWbzZJSE5qWVd4bExGeHVJQ0FnSUhOclpYZFlPaUJoYm1kc1pTeGNiaUFnSUNCemEyVjNXVG9nWVc1bmJHVXNYRzRnSUNBZ1pHbHpkR0Z1WTJVNklIQjRMRnh1SUNBZ0lIUnlZVzV6YkdGMFpWZzZJSEI0TEZ4dUlDQWdJSFJ5WVc1emJHRjBaVms2SUhCNExGeHVJQ0FnSUhSeVlXNXpiR0YwWlZvNklIQjRMRnh1SUNBZ0lIQmxjbk53WldOMGFYWmxPaUJ3ZUN4Y2JpQWdJQ0J2Y0dGamFYUjVPaUJoYkhCb1lWeHVmVHNpWFgwPVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvYWRhcHRlci9jc3MvdmFsdWUtdHlwZS1tYXAuanNcbiAqKiBtb2R1bGUgaWQgPSAzOVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX3RyYW5zZm9ybVByb3BzID0gcmVxdWlyZSgnLi90cmFuc2Zvcm0tcHJvcHMnKTtcblxudmFyIF90cmFuc2Zvcm1Qcm9wczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF90cmFuc2Zvcm1Qcm9wcyk7XG5cbnZhciBfcHJlZml4ZXIgPSByZXF1aXJlKCcuL3ByZWZpeGVyJyk7XG5cbnZhciBfcHJlZml4ZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcHJlZml4ZXIpO1xuXG52YXIgX3V0aWxzID0gcmVxdWlyZSgnLi4vLi4vaW5jL3V0aWxzJyk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbnZhciBUUkFOU0xBVEVfWiA9ICd0cmFuc2xhdGVaJztcblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gKHN0YXRlLCBkaXNhYmxlSGFyZHdhcmVBY2NlbGVyYXRpb24pIHtcbiAgICB2YXIgcHJvcGVydHlTdHJpbmcgPSAnJztcbiAgICB2YXIgdHJhbnNmb3JtU3RyaW5nID0gJyc7XG4gICAgdmFyIHRyYW5zZm9ybUhhc1ogPSBmYWxzZTtcblxuICAgIGZvciAodmFyIGtleSBpbiBzdGF0ZSkge1xuICAgICAgICBpZiAoc3RhdGUuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgICAgdmFyIHZhbHVlID0gc3RhdGVba2V5XTtcblxuICAgICAgICAgICAgaWYgKF90cmFuc2Zvcm1Qcm9wczIuZGVmYXVsdFtrZXldKSB7XG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtU3RyaW5nICs9IGtleSArICcoJyArIHZhbHVlICsgJykgJztcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm1IYXNaID0ga2V5ID09PSBUUkFOU0xBVEVfWiA/IHRydWUgOiB0cmFuc2Zvcm1IYXNaO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBwcm9wZXJ0eVN0cmluZyArPSAnOycgKyAoMCwgX3ByZWZpeGVyMi5kZWZhdWx0KSgoMCwgX3V0aWxzLmNhbWVsVG9EYXNoKShrZXkpKSArICc6JyArIHZhbHVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHRyYW5zZm9ybVN0cmluZyAhPT0gJycpIHtcbiAgICAgICAgaWYgKCF0cmFuc2Zvcm1IYXNaICYmICFkaXNhYmxlSGFyZHdhcmVBY2NlbGVyYXRpb24pIHtcbiAgICAgICAgICAgIHRyYW5zZm9ybVN0cmluZyArPSBUUkFOU0xBVEVfWiArICcoMHB4KSc7XG4gICAgICAgIH1cblxuICAgICAgICBwcm9wZXJ0eVN0cmluZyArPSAnOycgKyAoMCwgX3ByZWZpeGVyMi5kZWZhdWx0KSgndHJhbnNmb3JtJykgKyAnOicgKyB0cmFuc2Zvcm1TdHJpbmc7XG4gICAgfVxuXG4gICAgcmV0dXJuIHByb3BlcnR5U3RyaW5nO1xufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbk55WXk5aFpHRndkR1Z5TDJOemN5OWlkV2xzWkM1cWN5SmRMQ0p1WVcxbGN5STZXMTBzSW0xaGNIQnBibWR6SWpvaU96czdPenM3T3pzN096czdPenM3TzBGQlNVRXNTVUZCVFN4WFFVRlhMRWRCUVVjc1dVRkJXU3hEUVVGRE96dHJRa0ZGYkVJc1ZVRkJReXhMUVVGTExFVkJRVVVzTWtKQlFUSkNMRVZCUVVzN1FVRkRia1FzVVVGQlNTeGpRVUZqTEVkQlFVY3NSVUZCUlN4RFFVRkRPMEZCUTNoQ0xGRkJRVWtzWlVGQlpTeEhRVUZITEVWQlFVVXNRMEZCUXp0QlFVTjZRaXhSUVVGSkxHRkJRV0VzUjBGQlJ5eExRVUZMTEVOQlFVTTdPMEZCUlRGQ0xGTkJRVXNzU1VGQlNTeEhRVUZITEVsQlFVa3NTMEZCU3l4RlFVRkZPMEZCUTI1Q0xGbEJRVWtzUzBGQlN5eERRVUZETEdOQlFXTXNRMEZCUXl4SFFVRkhMRU5CUVVNc1JVRkJSVHRCUVVNelFpeG5Ra0ZCVFN4TFFVRkxMRWRCUVVjc1MwRkJTeXhEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZET3p0QlFVVjZRaXhuUWtGQlNTeDVRa0ZCWlN4SFFVRkhMRU5CUVVNc1JVRkJSVHRCUVVOeVFpd3JRa0ZCWlN4SlFVRkpMRWRCUVVjc1IwRkJSeXhIUVVGSExFZEJRVWNzUzBGQlN5eEhRVUZITEVsQlFVa3NRMEZCUXp0QlFVTTFReXcyUWtGQllTeEhRVUZITEVGQlFVTXNSMEZCUnl4TFFVRkxMRmRCUVZjc1IwRkJTU3hKUVVGSkxFZEJRVWNzWVVGQllTeERRVUZETzJGQlJXaEZMRTFCUVUwN1FVRkRTQ3c0UWtGQll5eEpRVUZKTEVkQlFVY3NSMEZCUnl4M1FrRkJVeXhYUVd4Q2VFTXNWMEZCVnl4RlFXdENlVU1zUjBGQlJ5eERRVUZETEVOQlFVTXNSMEZCUnl4SFFVRkhMRWRCUVVjc1MwRkJTeXhEUVVGRE8yRkJRM0JGTzFOQlEwbzdTMEZEU2pzN1FVRkZSQ3hSUVVGSkxHVkJRV1VzUzBGQlN5eEZRVUZGTEVWQlFVVTdRVUZEZUVJc1dVRkJTU3hEUVVGRExHRkJRV0VzU1VGQlNTeERRVUZETERKQ1FVRXlRaXhGUVVGRk8wRkJRMmhFTERKQ1FVRmxMRWxCUVVrc1YwRkJWeXhIUVVGSExFOUJRVThzUTBGQlF6dFRRVU0xUXpzN1FVRkZSQ3h6UWtGQll5eEpRVUZKTEVkQlFVY3NSMEZCUnl4M1FrRkJVeXhYUVVGWExFTkJRVU1zUjBGQlJ5eEhRVUZITEVkQlFVY3NaVUZCWlN4RFFVRkRPMHRCUTNwRk96dEJRVVZFTEZkQlFVOHNZMEZCWXl4RFFVRkRPME5CUTNwQ0lpd2labWxzWlNJNkltSjFhV3hrTG1weklpd2ljMjkxY21ObFVtOXZkQ0k2SWk5VmMyVnljeTlOWVhSMFVHVnljbmt2VTJsMFpYTXZjRzl3Ylc5MGFXOXVJaXdpYzI5MWNtTmxjME52Ym5SbGJuUWlPbHNpYVcxd2IzSjBJSFJ5WVc1elptOXliVkJ5YjNCeklHWnliMjBnSnk0dmRISmhibk5tYjNKdExYQnliM0J6Snp0Y2JtbHRjRzl5ZENCd2NtVm1hWGhsY2lCbWNtOXRJQ2N1TDNCeVpXWnBlR1Z5Snp0Y2JtbHRjRzl5ZENCN0lHTmhiV1ZzVkc5RVlYTm9JSDBnWm5KdmJTQW5MaTR2TGk0dmFXNWpMM1YwYVd4ekp6dGNibHh1WTI5dWMzUWdWRkpCVGxOTVFWUkZYMW9nUFNBbmRISmhibk5zWVhSbFdpYzdYRzVjYm1WNGNHOXlkQ0JrWldaaGRXeDBJQ2h6ZEdGMFpTd2daR2x6WVdKc1pVaGhjbVIzWVhKbFFXTmpaV3hsY21GMGFXOXVLU0E5UGlCN1hHNGdJQ0FnYkdWMElIQnliM0JsY25SNVUzUnlhVzVuSUQwZ0p5YzdYRzRnSUNBZ2JHVjBJSFJ5WVc1elptOXliVk4wY21sdVp5QTlJQ2NuTzF4dUlDQWdJR3hsZENCMGNtRnVjMlp2Y20xSVlYTmFJRDBnWm1Gc2MyVTdYRzVjYmlBZ0lDQm1iM0lnS0d4bGRDQnJaWGtnYVc0Z2MzUmhkR1VwSUh0Y2JpQWdJQ0FnSUNBZ2FXWWdLSE4wWVhSbExtaGhjMDkzYmxCeWIzQmxjblI1S0d0bGVTa3BJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lHTnZibk4wSUhaaGJIVmxJRDBnYzNSaGRHVmJhMlY1WFR0Y2JseHVJQ0FnSUNBZ0lDQWdJQ0FnYVdZZ0tIUnlZVzV6Wm05eWJWQnliM0J6VzJ0bGVWMHBJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0IwY21GdWMyWnZjbTFUZEhKcGJtY2dLejBnYTJWNUlDc2dKeWduSUNzZ2RtRnNkV1VnS3lBbktTQW5PMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJSFJ5WVc1elptOXliVWhoYzFvZ1BTQW9hMlY1SUQwOVBTQlVVa0ZPVTB4QlZFVmZXaWtnUHlCMGNuVmxJRG9nZEhKaGJuTm1iM0p0U0dGeldqdGNibHh1SUNBZ0lDQWdJQ0FnSUNBZ2ZTQmxiSE5sSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCd2NtOXdaWEowZVZOMGNtbHVaeUFyUFNBbk95Y2dLeUJ3Y21WbWFYaGxjaWhqWVcxbGJGUnZSR0Z6YUNoclpYa3BLU0FySUNjNkp5QXJJSFpoYkhWbE8xeHVJQ0FnSUNBZ0lDQWdJQ0FnZlZ4dUlDQWdJQ0FnSUNCOVhHNGdJQ0FnZlZ4dVhHNGdJQ0FnYVdZZ0tIUnlZVzV6Wm05eWJWTjBjbWx1WnlBaFBUMGdKeWNwSUh0Y2JpQWdJQ0FnSUNBZ2FXWWdLQ0YwY21GdWMyWnZjbTFJWVhOYUlDWW1JQ0ZrYVhOaFlteGxTR0Z5WkhkaGNtVkJZMk5sYkdWeVlYUnBiMjRwSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJSFJ5WVc1elptOXliVk4wY21sdVp5QXJQU0JVVWtGT1UweEJWRVZmV2lBcklDY29NSEI0S1NjN1hHNGdJQ0FnSUNBZ0lIMWNibHh1SUNBZ0lDQWdJQ0J3Y205d1pYSjBlVk4wY21sdVp5QXJQU0FuT3ljZ0t5QndjbVZtYVhobGNpZ25kSEpoYm5ObWIzSnRKeWtnS3lBbk9pY2dLeUIwY21GdWMyWnZjbTFUZEhKcGJtYzdYRzRnSUNBZ2ZWeHVYRzRnSUNBZ2NtVjBkWEp1SUhCeWIzQmxjblI1VTNSeWFXNW5PMXh1ZlRzaVhYMD1cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2FkYXB0ZXIvY3NzL2J1aWxkLmpzXG4gKiogbW9kdWxlIGlkID0gNDBcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbnZhciBjYWNoZSA9IHt9O1xudmFyIHByZWZpeGVzID0gWydXZWJraXQnLCAnTW96JywgJ08nLCAnbXMnLCAnJ107XG52YXIgbnVtUHJlZml4ZXMgPSBwcmVmaXhlcy5sZW5ndGg7XG52YXIgdGVzdEVsZW1lbnQgPSB1bmRlZmluZWQ7XG5cbi8qXG4gICAgVGVzdCBzdHlsZSBwcm9wZXJ0eSBmb3IgcHJlZml4ZWQgdmVyc2lvblxuICAgIFxuICAgIEBwYXJhbSBbc3RyaW5nXTogU3R5bGUgcHJvcGVydHlcbiAgICBAcmV0dXJuIFtzdHJpbmddOiBDYWNoZWQgcHJvcGVydHkgbmFtZVxuKi9cbnZhciB0ZXN0UHJlZml4ID0gZnVuY3Rpb24gKGtleSkge1xuICAgIHRlc3RFbGVtZW50ID0gdGVzdEVsZW1lbnQgfHwgZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICBpZiAoY2FjaGVba2V5XSA9PT0gZmFsc2UpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGNhY2hlW2tleV0gPSBmYWxzZTtcbiAgICB9XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IG51bVByZWZpeGVzOyBpKyspIHtcbiAgICAgICAgdmFyIHByZWZpeCA9IHByZWZpeGVzW2ldLFxuICAgICAgICAgICAgcHJlZml4ZWQgPSBwcmVmaXggPT09ICcnID8ga2V5IDogcHJlZml4ICsga2V5LmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsga2V5LnNsaWNlKDEpO1xuXG4gICAgICAgIGlmIChwcmVmaXhlZCBpbiB0ZXN0RWxlbWVudC5zdHlsZSkge1xuICAgICAgICAgICAgY2FjaGVba2V5XSA9IHByZWZpeGVkO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGNhY2hlW2tleV07XG59O1xuXG5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbiAoa2V5KSB7XG4gICAgcmV0dXJuIGNhY2hlW2tleV0gfHwgdGVzdFByZWZpeChrZXkpO1xufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbk55WXk5aFpHRndkR1Z5TDJOemN5OXdjbVZtYVhobGNpNXFjeUpkTENKdVlXMWxjeUk2VzEwc0ltMWhjSEJwYm1keklqb2lPenM3UVVGQlFTeEpRVUZOTEV0QlFVc3NSMEZCUnl4RlFVRkZMRU5CUVVNN1FVRkRha0lzU1VGQlRTeFJRVUZSTEVkQlFVY3NRMEZCUXl4UlFVRlJMRVZCUVVNc1MwRkJTeXhGUVVGRExFZEJRVWNzUlVGQlF5eEpRVUZKTEVWQlFVVXNSVUZCUlN4RFFVRkRMRU5CUVVNN1FVRkRMME1zU1VGQlRTeFhRVUZYTEVkQlFVY3NVVUZCVVN4RFFVRkRMRTFCUVUwc1EwRkJRenRCUVVOd1F5eEpRVUZKTEZkQlFWY3NXVUZCUVRzN096czdPenM3UVVGQlF5eEJRVkZvUWl4SlFVRk5MRlZCUVZVc1IwRkJSeXhWUVVGRExFZEJRVWNzUlVGQlN6dEJRVU40UWl4bFFVRlhMRWRCUVVjc1YwRkJWeXhKUVVGSkxGRkJRVkVzUTBGQlF5eGhRVUZoTEVOQlFVTXNTMEZCU3l4RFFVRkRMRU5CUVVNN08wRkJSVE5FTEZGQlFVa3NTMEZCU3l4RFFVRkRMRWRCUVVjc1EwRkJReXhMUVVGTExFdEJRVXNzUlVGQlJUdEJRVU4wUWl4bFFVRlBMRXRCUVVzc1EwRkJRenRMUVVOb1FpeE5RVUZOTzBGQlEwZ3NZVUZCU3l4RFFVRkRMRWRCUVVjc1EwRkJReXhIUVVGSExFdEJRVXNzUTBGQlF6dExRVU4wUWpzN1FVRkZSQ3hUUVVGTExFbEJRVWtzUTBGQlF5eEhRVUZITEVOQlFVTXNSVUZCUlN4RFFVRkRMRWRCUVVjc1YwRkJWeXhGUVVGRkxFTkJRVU1zUlVGQlJTeEZRVUZGTzBGQlEyeERMRmxCUVVrc1RVRkJUU3hIUVVGSExGRkJRVkVzUTBGQlF5eERRVUZETEVOQlFVTTdXVUZEY0VJc1VVRkJVU3hIUVVGSExFRkJRVU1zVFVGQlRTeExRVUZMTEVWQlFVVXNSMEZCU1N4SFFVRkhMRWRCUVVjc1RVRkJUU3hIUVVGSExFZEJRVWNzUTBGQlF5eE5RVUZOTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1YwRkJWeXhGUVVGRkxFZEJRVWNzUjBGQlJ5eERRVUZETEV0QlFVc3NRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJRenM3UVVGRk0wWXNXVUZCU1N4UlFVRlJMRWxCUVVrc1YwRkJWeXhEUVVGRExFdEJRVXNzUlVGQlJUdEJRVU12UWl4cFFrRkJTeXhEUVVGRExFZEJRVWNzUTBGQlF5eEhRVUZITEZGQlFWRXNRMEZCUXp0VFFVTjZRanRMUVVOS096dEJRVVZFTEZkQlFVOHNTMEZCU3l4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRE8wTkJRM0pDTEVOQlFVTTdPMnRDUVVWaExGVkJRVU1zUjBGQlJ6dFhRVUZMTEV0QlFVc3NRMEZCUXl4SFFVRkhMRU5CUVVNc1NVRkJTU3hWUVVGVkxFTkJRVU1zUjBGQlJ5eERRVUZETzBOQlFVRWlMQ0ptYVd4bElqb2ljSEpsWm1sNFpYSXVhbk1pTENKemIzVnlZMlZTYjI5MElqb2lMMVZ6WlhKekwwMWhkSFJRWlhKeWVTOVRhWFJsY3k5d2IzQnRiM1JwYjI0aUxDSnpiM1Z5WTJWelEyOXVkR1Z1ZENJNld5SmpiMjV6ZENCallXTm9aU0E5SUh0OU8xeHVZMjl1YzNRZ2NISmxabWw0WlhNZ1BTQmJKMWRsWW10cGRDY3NKMDF2ZWljc0owOG5MQ2R0Y3ljc0lDY25YVHRjYm1OdmJuTjBJRzUxYlZCeVpXWnBlR1Z6SUQwZ2NISmxabWw0WlhNdWJHVnVaM1JvTzF4dWJHVjBJSFJsYzNSRmJHVnRaVzUwTzF4dVhHNHZLbHh1SUNBZ0lGUmxjM1FnYzNSNWJHVWdjSEp2Y0dWeWRIa2dabTl5SUhCeVpXWnBlR1ZrSUhabGNuTnBiMjVjYmlBZ0lDQmNiaUFnSUNCQWNHRnlZVzBnVzNOMGNtbHVaMTA2SUZOMGVXeGxJSEJ5YjNCbGNuUjVYRzRnSUNBZ1FISmxkSFZ5YmlCYmMzUnlhVzVuWFRvZ1EyRmphR1ZrSUhCeWIzQmxjblI1SUc1aGJXVmNiaW92WEc1amIyNXpkQ0IwWlhOMFVISmxabWw0SUQwZ0tHdGxlU2tnUFQ0Z2UxeHVJQ0FnSUhSbGMzUkZiR1Z0Wlc1MElEMGdkR1Z6ZEVWc1pXMWxiblFnZkh3Z1pHOWpkVzFsYm5RdVkzSmxZWFJsUld4bGJXVnVkQ2duWkdsMkp5azdYRzVjYmlBZ0lDQnBaaUFvWTJGamFHVmJhMlY1WFNBOVBUMGdabUZzYzJVcElIdGNiaUFnSUNBZ0lDQWdjbVYwZFhKdUlHWmhiSE5sTzF4dUlDQWdJSDBnWld4elpTQjdYRzRnSUNBZ0lDQWdJR05oWTJobFcydGxlVjBnUFNCbVlXeHpaVHRjYmlBZ0lDQjlYRzVjYmlBZ0lDQm1iM0lnS0haaGNpQnBJRDBnTURzZ2FTQThJRzUxYlZCeVpXWnBlR1Z6T3lCcEt5c3BJSHRjYmlBZ0lDQWdJQ0FnZG1GeUlIQnlaV1pwZUNBOUlIQnlaV1pwZUdWelcybGRMRnh1SUNBZ0lDQWdJQ0FnSUNBZ2NISmxabWw0WldRZ1BTQW9jSEpsWm1sNElEMDlQU0FuSnlrZ1B5QnJaWGtnT2lCd2NtVm1hWGdnS3lCclpYa3VZMmhoY2tGMEtEQXBMblJ2VlhCd1pYSkRZWE5sS0NrZ0t5QnJaWGt1YzJ4cFkyVW9NU2s3WEc1Y2JpQWdJQ0FnSUNBZ2FXWWdLSEJ5WldacGVHVmtJR2x1SUhSbGMzUkZiR1Z0Wlc1MExuTjBlV3hsS1NCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0JqWVdOb1pWdHJaWGxkSUQwZ2NISmxabWw0WldRN1hHNGdJQ0FnSUNBZ0lIMWNiaUFnSUNCOVhHNGdJQ0FnWEc0Z0lDQWdjbVYwZFhKdUlHTmhZMmhsVzJ0bGVWMDdYRzU5TzF4dVhHNWxlSEJ2Y25RZ1pHVm1ZWFZzZENBb2EyVjVLU0E5UGlCallXTm9aVnRyWlhsZElIeDhJSFJsYzNSUWNtVm1hWGdvYTJWNUtUc2lYWDA9XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9hZGFwdGVyL2Nzcy9wcmVmaXhlci5qc1xuICoqIG1vZHVsZSBpZCA9IDQxXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfZGljdGlvbmFyeSA9IHJlcXVpcmUoJy4uLy4uL3ZhbHVlLXR5cGVzL3NldHRpbmdzL2RpY3Rpb25hcnknKTtcblxudmFyIHRyYW5zZm9ybVByb3BzID0ge307XG5cbnZhciBTQ0FMRSA9ICdzY2FsZSc7XG52YXIgUk9UQVRFID0gJ3JvdGF0ZSc7XG52YXIgVFJBTlNGT1JNX1BFUlNQRUNUSVZFID0gJ3RyYW5zZm9ybVBlcnNwZWN0aXZlJztcbnZhciBURVJNUyA9IFsndHJhbnNsYXRlJywgU0NBTEUsIFJPVEFURSwgJ3NrZXcnLCBUUkFOU0ZPUk1fUEVSU1BFQ1RJVkVdO1xuXG50cmFuc2Zvcm1Qcm9wc1tST1RBVEVdID0gdHJhbnNmb3JtUHJvcHNbU0NBTEVdID0gdHJhbnNmb3JtUHJvcHNbVFJBTlNGT1JNX1BFUlNQRUNUSVZFXSA9IHRydWU7XG5cblRFUk1TLmZvckVhY2goZnVuY3Rpb24gKHRlcm0pIHtcbiAgcmV0dXJuIF9kaWN0aW9uYXJ5LmF4ZXMuZm9yRWFjaChmdW5jdGlvbiAoYXhpcykge1xuICAgIHJldHVybiB0cmFuc2Zvcm1Qcm9wc1t0ZXJtICsgYXhpc10gPSB0cnVlO1xuICB9KTtcbn0pO1xuXG5leHBvcnRzLmRlZmF1bHQgPSB0cmFuc2Zvcm1Qcm9wcztcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbk55WXk5aFpHRndkR1Z5TDJOemN5OTBjbUZ1YzJadmNtMHRjSEp2Y0hNdWFuTWlYU3dpYm1GdFpYTWlPbHRkTENKdFlYQndhVzVuY3lJNklqczdPenM3TzBGQlJVRXNTVUZCU1N4alFVRmpMRWRCUVVjc1JVRkJSU3hEUVVGRE96dEJRVVY0UWl4SlFVRk5MRXRCUVVzc1IwRkJSeXhQUVVGUExFTkJRVU03UVVGRGRFSXNTVUZCVFN4TlFVRk5MRWRCUVVjc1VVRkJVU3hEUVVGRE8wRkJRM2hDTEVsQlFVMHNjVUpCUVhGQ0xFZEJRVWNzYzBKQlFYTkNMRU5CUVVNN1FVRkRja1FzU1VGQlRTeExRVUZMTEVkQlFVY3NRMEZCUXl4WFFVRlhMRVZCUVVVc1MwRkJTeXhGUVVGRkxFMUJRVTBzUlVGQlJTeE5RVUZOTEVWQlFVVXNjVUpCUVhGQ0xFTkJRVU1zUTBGQlF6czdRVUZGTVVVc1kwRkJZeXhEUVVGRExFMUJRVTBzUTBGQlF5eEhRVUZITEdOQlFXTXNRMEZCUXl4TFFVRkxMRU5CUVVNc1IwRkJSeXhqUVVGakxFTkJRVU1zY1VKQlFYRkNMRU5CUVVNc1IwRkJSeXhKUVVGSkxFTkJRVU03TzBGQlJUbEdMRXRCUVVzc1EwRkJReXhQUVVGUExFTkJRVU1zVlVGQlF5eEpRVUZKTzFOQlFVc3NXVUZZWml4SlFVRkpMRU5CVjJkQ0xFOUJRVThzUTBGQlF5eFZRVUZETEVsQlFVazdWMEZCU3l4alFVRmpMRU5CUVVNc1NVRkJTU3hIUVVGSExFbEJRVWtzUTBGQlF5eEhRVUZITEVsQlFVazdSMEZCUVN4RFFVRkRPME5CUVVFc1EwRkJReXhEUVVGRE96dHJRa0ZGY2tVc1kwRkJZeUlzSW1acGJHVWlPaUowY21GdWMyWnZjbTB0Y0hKdmNITXVhbk1pTENKemIzVnlZMlZTYjI5MElqb2lMMVZ6WlhKekwwMWhkSFJRWlhKeWVTOVRhWFJsY3k5d2IzQnRiM1JwYjI0aUxDSnpiM1Z5WTJWelEyOXVkR1Z1ZENJNld5SnBiWEJ2Y25RZ2V5QmhlR1Z6SUgwZ1puSnZiU0FuTGk0dkxpNHZkbUZzZFdVdGRIbHdaWE12YzJWMGRHbHVaM012WkdsamRHbHZibUZ5ZVNjN1hHNWNibXhsZENCMGNtRnVjMlp2Y20xUWNtOXdjeUE5SUh0OU8xeHVYRzVqYjI1emRDQlRRMEZNUlNBOUlDZHpZMkZzWlNjN1hHNWpiMjV6ZENCU1QxUkJWRVVnUFNBbmNtOTBZWFJsSnp0Y2JtTnZibk4wSUZSU1FVNVRSazlTVFY5UVJWSlRVRVZEVkVsV1JTQTlJQ2QwY21GdWMyWnZjbTFRWlhKemNHVmpkR2wyWlNjN1hHNWpiMjV6ZENCVVJWSk5VeUE5SUZzbmRISmhibk5zWVhSbEp5d2dVME5CVEVVc0lGSlBWRUZVUlN3Z0ozTnJaWGNuTENCVVVrRk9VMFpQVWsxZlVFVlNVMUJGUTFSSlZrVmRPMXh1WEc1MGNtRnVjMlp2Y20xUWNtOXdjMXRTVDFSQlZFVmRJRDBnZEhKaGJuTm1iM0p0VUhKdmNITmJVME5CVEVWZElEMGdkSEpoYm5ObWIzSnRVSEp2Y0hOYlZGSkJUbE5HVDFKTlgxQkZVbE5RUlVOVVNWWkZYU0E5SUhSeWRXVTdYRzVjYmxSRlVrMVRMbVp2Y2tWaFkyZ29LSFJsY20wcElEMCtJR0Y0WlhNdVptOXlSV0ZqYUNnb1lYaHBjeWtnUFQ0Z2RISmhibk5tYjNKdFVISnZjSE5iZEdWeWJTQXJJR0Y0YVhOZElEMGdkSEoxWlNrcE8xeHVYRzVsZUhCdmNuUWdaR1ZtWVhWc2RDQjBjbUZ1YzJadmNtMVFjbTl3Y3pzaVhYMD1cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2FkYXB0ZXIvY3NzL3RyYW5zZm9ybS1wcm9wcy5qc1xuICoqIG1vZHVsZSBpZCA9IDQyXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfYWxwaGEgPSByZXF1aXJlKCcuLi8uLi92YWx1ZS10eXBlcy9hbHBoYScpO1xuXG52YXIgX2FscGhhMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2FscGhhKTtcblxudmFyIF9heGVzID0gcmVxdWlyZSgnLi4vLi4vdmFsdWUtdHlwZXMvYXhlcycpO1xuXG52YXIgX2F4ZXMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfYXhlcyk7XG5cbnZhciBfY29sb3IgPSByZXF1aXJlKCcuLi8uLi92YWx1ZS10eXBlcy9jb2xvcicpO1xuXG52YXIgX2NvbG9yMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NvbG9yKTtcblxudmFyIF9jb21wbGV4ID0gcmVxdWlyZSgnLi4vLi4vdmFsdWUtdHlwZXMvY29tcGxleCcpO1xuXG52YXIgX2NvbXBsZXgyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY29tcGxleCk7XG5cbnZhciBfc2NhbGUgPSByZXF1aXJlKCcuLi8uLi92YWx1ZS10eXBlcy9zY2FsZScpO1xuXG52YXIgX3NjYWxlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3NjYWxlKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZXhwb3J0cy5kZWZhdWx0ID0ge1xuICAgIGZpbGw6IF9jb2xvcjIuZGVmYXVsdCxcbiAgICBzdHJva2U6IF9jb2xvcjIuZGVmYXVsdCxcbiAgICBzY2FsZTogX3NjYWxlMi5kZWZhdWx0LFxuICAgIHNjYWxlWDogX3NjYWxlMi5kZWZhdWx0LFxuICAgIHNjYWxlWTogX3NjYWxlMi5kZWZhdWx0LFxuICAgIHRyYW5zZm9ybU9yaWdpbjogX2F4ZXMyLmRlZmF1bHQsXG4gICAgZDogX2NvbXBsZXgyLmRlZmF1bHQsXG4gICAgb3BhY2l0eTogX2FscGhhMi5kZWZhdWx0LFxuICAgIGZpbGxPcGFjaXR5OiBfYWxwaGEyLmRlZmF1bHQsXG4gICAgc3Ryb2tlT3BhY2l0eTogX2FscGhhMi5kZWZhdWx0XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluTnlZeTloWkdGd2RHVnlMM04yWnk5MllXeDFaUzEwZVhCbExXMWhjQzVxY3lKZExDSnVZVzFsY3lJNlcxMHNJbTFoY0hCcGJtZHpJam9pT3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenRyUWtGTlpUdEJRVU5ZTEZGQlFVa3NhVUpCUVU4N1FVRkRXQ3hWUVVGTkxHbENRVUZQTzBGQlEySXNVMEZCU3l4cFFrRkJUenRCUVVOYUxGVkJRVTBzYVVKQlFVODdRVUZEWWl4VlFVRk5MR2xDUVVGUE8wRkJRMklzYlVKQlFXVXNaMEpCUVUwN1FVRkRja0lzUzBGQlF5eHRRa0ZCVXp0QlFVTldMRmRCUVU4c2FVSkJRVTg3UVVGRFpDeGxRVUZYTEdsQ1FVRlBPMEZCUTJ4Q0xHbENRVUZoTEdsQ1FVRlBPME5CUTNaQ0lpd2labWxzWlNJNkluWmhiSFZsTFhSNWNHVXRiV0Z3TG1weklpd2ljMjkxY21ObFVtOXZkQ0k2SWk5VmMyVnljeTlOWVhSMFVHVnljbmt2VTJsMFpYTXZjRzl3Ylc5MGFXOXVJaXdpYzI5MWNtTmxjME52Ym5SbGJuUWlPbHNpYVcxd2IzSjBJR0ZzY0doaElHWnliMjBnSnk0dUx5NHVMM1poYkhWbExYUjVjR1Z6TDJGc2NHaGhKenRjYm1sdGNHOXlkQ0JoZUdWeklHWnliMjBnSnk0dUx5NHVMM1poYkhWbExYUjVjR1Z6TDJGNFpYTW5PMXh1YVcxd2IzSjBJR052Ykc5eUlHWnliMjBnSnk0dUx5NHVMM1poYkhWbExYUjVjR1Z6TDJOdmJHOXlKenRjYm1sdGNHOXlkQ0JqYjIxd2JHVjRJR1p5YjIwZ0p5NHVMeTR1TDNaaGJIVmxMWFI1Y0dWekwyTnZiWEJzWlhnbk8xeHVhVzF3YjNKMElITmpZV3hsSUdaeWIyMGdKeTR1THk0dUwzWmhiSFZsTFhSNWNHVnpMM05qWVd4bEp6dGNibHh1Wlhod2IzSjBJR1JsWm1GMWJIUWdlMXh1SUNBZ0lHWnBiR3c2SUdOdmJHOXlMRnh1SUNBZ0lITjBjbTlyWlRvZ1kyOXNiM0lzWEc0Z0lDQWdjMk5oYkdVNklITmpZV3hsTEZ4dUlDQWdJSE5qWVd4bFdEb2djMk5oYkdVc1hHNGdJQ0FnYzJOaGJHVlpPaUJ6WTJGc1pTeGNiaUFnSUNCMGNtRnVjMlp2Y20xUGNtbG5hVzQ2SUdGNFpYTXNYRzRnSUNBZ1pEb2dZMjl0Y0d4bGVDeGNiaUFnSUNCdmNHRmphWFI1T2lCaGJIQm9ZU3hjYmlBZ0lDQm1hV3hzVDNCaFkybDBlVG9nWVd4d2FHRXNYRzRnSUNBZ2MzUnliMnRsVDNCaFkybDBlVG9nWVd4d2FHRmNibjA3SWwxOVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvYWRhcHRlci9zdmcvdmFsdWUtdHlwZS1tYXAuanNcbiAqKiBtb2R1bGUgaWQgPSA0M1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0cy5kZWZhdWx0ID0gYnVpbGQ7XG5cbnZhciBfdXRpbHMgPSByZXF1aXJlKCcuLi8uLi9pbmMvdXRpbHMnKTtcblxudmFyIF90cmFuc2Zvcm1Qcm9wcyA9IHJlcXVpcmUoJy4uL2Nzcy90cmFuc2Zvcm0tcHJvcHMnKTtcblxudmFyIF90cmFuc2Zvcm1Qcm9wczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF90cmFuc2Zvcm1Qcm9wcyk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbnZhciBaRVJPX05PVF9aRVJPID0gMC4wMDAxO1xuXG5mdW5jdGlvbiBidWlsZChzdGF0ZSwgb3JpZ2luKSB7XG4gICAgdmFyIHByb3BzID0ge30sXG4gICAgICAgIGhhc1RyYW5zZm9ybSA9IGZhbHNlLFxuICAgICAgICBzY2FsZSA9IHN0YXRlLnNjYWxlICE9PSB1bmRlZmluZWQgPyBzdGF0ZS5zY2FsZSB8fCBaRVJPX05PVF9aRVJPIDogc3RhdGUuc2NhbGVYIHx8IDEsXG4gICAgICAgIHNjYWxlWSA9IHN0YXRlLnNjYWxlWSAhPT0gdW5kZWZpbmVkID8gc3RhdGUuc2NhbGVZIHx8IFpFUk9fTk9UX1pFUk8gOiBzY2FsZSB8fCAxLFxuICAgICAgICB0cmFuc2Zvcm1PcmlnaW5YID0gb3JpZ2luLngsXG4gICAgICAgIHRyYW5zZm9ybU9yaWdpblkgPSBvcmlnaW4ueSxcbiAgICAgICAgc2NhbGVUcmFuc2Zvcm1YID0gLXRyYW5zZm9ybU9yaWdpblggKiAoc2NhbGUgKiAxKSxcbiAgICAgICAgc2NhbGVUcmFuc2Zvcm1ZID0gLXRyYW5zZm9ybU9yaWdpblkgKiAoc2NhbGVZICogMSksXG4gICAgICAgIHNjYWxlUmVwbGFjZVggPSB0cmFuc2Zvcm1PcmlnaW5YIC8gc2NhbGUsXG4gICAgICAgIHNjYWxlUmVwbGFjZVkgPSB0cmFuc2Zvcm1PcmlnaW5ZIC8gc2NhbGVZLFxuICAgICAgICB0cmFuc2Zvcm0gPSB7XG4gICAgICAgIHRyYW5zbGF0ZTogJ3RyYW5zbGF0ZSgnICsgc3RhdGUudHJhbnNsYXRlWCArICcsICcgKyBzdGF0ZS50cmFuc2xhdGVZICsgJykgJyxcbiAgICAgICAgc2NhbGU6ICd0cmFuc2xhdGUoJyArIHNjYWxlVHJhbnNmb3JtWCArICcsICcgKyBzY2FsZVRyYW5zZm9ybVkgKyAnKSBzY2FsZSgnICsgc2NhbGUgKyAnLCAnICsgc2NhbGVZICsgJykgdHJhbnNsYXRlKCcgKyBzY2FsZVJlcGxhY2VYICsgJywgJyArIHNjYWxlUmVwbGFjZVkgKyAnKSAnLFxuICAgICAgICByb3RhdGU6ICdyb3RhdGUoJyArIHN0YXRlLnJvdGF0ZSArICcsICcgKyB0cmFuc2Zvcm1PcmlnaW5YICsgJywgJyArIHRyYW5zZm9ybU9yaWdpblkgKyAnKSAnLFxuICAgICAgICBza2V3WDogJ3NrZXdYKCcgKyBzdGF0ZS5za2V3WCArICcpICcsXG4gICAgICAgIHNrZXdZOiAnc2tld1koJyArIHN0YXRlLnNrZXdZICsgJykgJ1xuICAgIH07XG5cbiAgICBmb3IgKHZhciBrZXkgaW4gc3RhdGUpIHtcbiAgICAgICAgaWYgKHN0YXRlLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICAgIGlmIChfdHJhbnNmb3JtUHJvcHMyLmRlZmF1bHRba2V5XSkge1xuICAgICAgICAgICAgICAgIGhhc1RyYW5zZm9ybSA9IHRydWU7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHByb3BzWygwLCBfdXRpbHMuY2FtZWxUb0Rhc2gpKGtleSldID0gc3RhdGVba2V5XTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGlmIChoYXNUcmFuc2Zvcm0pIHtcbiAgICAgICAgcHJvcHMudHJhbnNmb3JtID0gJyc7XG5cbiAgICAgICAgZm9yICh2YXIga2V5IGluIHRyYW5zZm9ybSkge1xuICAgICAgICAgICAgaWYgKHRyYW5zZm9ybS5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgICAgICAgdmFyIGRlZmF1bHRWYWx1ZSA9IGtleSA9PT0gJ3NjYWxlJyA/ICcxJyA6ICcwJztcbiAgICAgICAgICAgICAgICBwcm9wcy50cmFuc2Zvcm0gKz0gdHJhbnNmb3JtW2tleV0ucmVwbGFjZSgvdW5kZWZpbmVkL2csIGRlZmF1bHRWYWx1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gcHJvcHM7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5OeVl5OWhaR0Z3ZEdWeUwzTjJaeTlpZFdsc1pDNXFjeUpkTENKdVlXMWxjeUk2VzEwc0ltMWhjSEJwYm1keklqb2lPenM3YTBKQlMzZENMRXRCUVVzN096czdPenM3T3pzN1FVRkdOMElzU1VGQlRTeGhRVUZoTEVkQlFVY3NUVUZCVFN4RFFVRkRPenRCUVVWa0xGTkJRVk1zUzBGQlN5eERRVUZETEV0QlFVc3NSVUZCUlN4TlFVRk5MRVZCUVVVN1FVRkRla01zVVVGQlNTeExRVUZMTEVkQlFVY3NSVUZCUlR0UlFVTldMRmxCUVZrc1IwRkJSeXhMUVVGTE8xRkJRM0JDTEV0QlFVc3NSMEZCUnl4TFFVRkxMRU5CUVVNc1MwRkJTeXhMUVVGTExGTkJRVk1zUjBGQlJ5eExRVUZMTEVOQlFVTXNTMEZCU3l4SlFVRkpMR0ZCUVdFc1IwRkJSeXhMUVVGTExFTkJRVU1zVFVGQlRTeEpRVUZKTEVOQlFVTTdVVUZEY0VZc1RVRkJUU3hIUVVGSExFdEJRVXNzUTBGQlF5eE5RVUZOTEV0QlFVc3NVMEZCVXl4SFFVRkhMRXRCUVVzc1EwRkJReXhOUVVGTkxFbEJRVWtzWVVGQllTeEhRVUZITEV0QlFVc3NTVUZCU1N4RFFVRkRPMUZCUTJoR0xHZENRVUZuUWl4SFFVRkhMRTFCUVUwc1EwRkJReXhEUVVGRE8xRkJRek5DTEdkQ1FVRm5RaXhIUVVGSExFMUJRVTBzUTBGQlF5eERRVUZETzFGQlF6TkNMR1ZCUVdVc1IwRkJSeXhEUVVGRkxHZENRVUZuUWl4SlFVRkpMRXRCUVVzc1IwRkJSeXhEUVVGRExFTkJRVUVzUVVGQlF6dFJRVU5zUkN4bFFVRmxMRWRCUVVjc1EwRkJSU3huUWtGQlowSXNTVUZCU1N4TlFVRk5MRWRCUVVjc1EwRkJReXhEUVVGQkxFRkJRVU03VVVGRGJrUXNZVUZCWVN4SFFVRkhMR2RDUVVGblFpeEhRVUZITEV0QlFVczdVVUZEZUVNc1lVRkJZU3hIUVVGSExHZENRVUZuUWl4SFFVRkhMRTFCUVUwN1VVRkRla01zVTBGQlV5eEhRVUZITzBGQlExSXNhVUpCUVZNc2FVSkJRV1VzUzBGQlN5eERRVUZETEZWQlFWVXNWVUZCU3l4TFFVRkxMRU5CUVVNc1ZVRkJWU3hQUVVGSk8wRkJRMnBGTEdGQlFVc3NhVUpCUVdVc1pVRkJaU3hWUVVGTExHVkJRV1VzWjBKQlFWY3NTMEZCU3l4VlFVRkxMRTFCUVUwc2IwSkJRV1VzWVVGQllTeFZRVUZMTEdGQlFXRXNUMEZCU1R0QlFVTndTU3hqUVVGTkxHTkJRVmtzUzBGQlN5eERRVUZETEUxQlFVMHNWVUZCU3l4blFrRkJaMElzVlVGQlN5eG5Ra0ZCWjBJc1QwRkJTVHRCUVVNMVJTeGhRVUZMTEdGQlFWY3NTMEZCU3l4RFFVRkRMRXRCUVVzc1QwRkJTVHRCUVVNdlFpeGhRVUZMTEdGQlFWY3NTMEZCU3l4RFFVRkRMRXRCUVVzc1QwRkJTVHRMUVVOc1F5eERRVUZET3p0QlFVVk9MRk5CUVVzc1NVRkJTU3hIUVVGSExFbEJRVWtzUzBGQlN5eEZRVUZGTzBGQlEyNUNMRmxCUVVrc1MwRkJTeXhEUVVGRExHTkJRV01zUTBGQlF5eEhRVUZITEVOQlFVTXNSVUZCUlR0QlFVTXpRaXhuUWtGQlNTeDVRa0ZCWlN4SFFVRkhMRU5CUVVNc1JVRkJSVHRCUVVOeVFpdzBRa0ZCV1N4SFFVRkhMRWxCUVVrc1EwRkJRenRoUVVOMlFpeE5RVUZOTzBGQlEwZ3NjVUpCUVVzc1EwRkJReXhYUVRkQ1lpeFhRVUZYTEVWQk5rSmpMRWRCUVVjc1EwRkJReXhEUVVGRExFZEJRVWNzUzBGQlN5eERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRPMkZCUTNoRE8xTkJRMG83UzBGRFNqczdRVUZGUkN4UlFVRkpMRmxCUVZrc1JVRkJSVHRCUVVOa0xHRkJRVXNzUTBGQlF5eFRRVUZUTEVkQlFVY3NSVUZCUlN4RFFVRkRPenRCUVVWeVFpeGhRVUZMTEVsQlFVa3NSMEZCUnl4SlFVRkpMRk5CUVZNc1JVRkJSVHRCUVVOMlFpeG5Ra0ZCU1N4VFFVRlRMRU5CUVVNc1kwRkJZeXhEUVVGRExFZEJRVWNzUTBGQlF5eEZRVUZGTzBGQlF5OUNMRzlDUVVGTkxGbEJRVmtzUjBGQlJ5eEJRVUZETEVkQlFVY3NTMEZCU3l4UFFVRlBMRWRCUVVrc1IwRkJSeXhIUVVGSExFZEJRVWNzUTBGQlF6dEJRVU51UkN4eFFrRkJTeXhEUVVGRExGTkJRVk1zU1VGQlNTeFRRVUZUTEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNc1QwRkJUeXhEUVVGRExGbEJRVmtzUlVGQlJTeFpRVUZaTEVOQlFVTXNRMEZCUXp0aFFVTjZSVHRUUVVOS08wdEJRMG83TzBGQlJVUXNWMEZCVHl4TFFVRkxMRU5CUVVNN1EwRkRhRUlpTENKbWFXeGxJam9pWW5WcGJHUXVhbk1pTENKemIzVnlZMlZTYjI5MElqb2lMMVZ6WlhKekwwMWhkSFJRWlhKeWVTOVRhWFJsY3k5d2IzQnRiM1JwYjI0aUxDSnpiM1Z5WTJWelEyOXVkR1Z1ZENJNld5SnBiWEJ2Y25RZ2V5QmpZVzFsYkZSdlJHRnphQ0I5SUdaeWIyMGdKeTR1THk0dUwybHVZeTkxZEdsc2N5YzdYRzVwYlhCdmNuUWdkSEpoYm5ObWIzSnRVSEp2Y0hNZ1puSnZiU0FuTGk0dlkzTnpMM1J5WVc1elptOXliUzF3Y205d2N5YzdYRzVjYm1OdmJuTjBJRnBGVWs5ZlRrOVVYMXBGVWs4Z1BTQXdMakF3TURFN1hHNWNibVY0Y0c5eWRDQmtaV1poZFd4MElHWjFibU4wYVc5dUlHSjFhV3hrS0hOMFlYUmxMQ0J2Y21sbmFXNHBJSHRjYmlBZ0lDQnNaWFFnY0hKdmNITWdQU0I3ZlN4Y2JpQWdJQ0FnSUNBZ2FHRnpWSEpoYm5ObWIzSnRJRDBnWm1Gc2MyVXNYRzRnSUNBZ0lDQWdJSE5qWVd4bElEMGdjM1JoZEdVdWMyTmhiR1VnSVQwOUlIVnVaR1ZtYVc1bFpDQS9JSE4wWVhSbExuTmpZV3hsSUh4OElGcEZVazlmVGs5VVgxcEZVazhnT2lCemRHRjBaUzV6WTJGc1pWZ2dmSHdnTVN4Y2JpQWdJQ0FnSUNBZ2MyTmhiR1ZaSUQwZ2MzUmhkR1V1YzJOaGJHVlpJQ0U5UFNCMWJtUmxabWx1WldRZ1B5QnpkR0YwWlM1elkyRnNaVmtnZkh3Z1drVlNUMTlPVDFSZldrVlNUeUE2SUhOallXeGxJSHg4SURFc1hHNGdJQ0FnSUNBZ0lIUnlZVzV6Wm05eWJVOXlhV2RwYmxnZ1BTQnZjbWxuYVc0dWVDeGNiaUFnSUNBZ0lDQWdkSEpoYm5ObWIzSnRUM0pwWjJsdVdTQTlJRzl5YVdkcGJpNTVMRnh1SUNBZ0lDQWdJQ0J6WTJGc1pWUnlZVzV6Wm05eWJWZ2dQU0F0SUhSeVlXNXpabTl5YlU5eWFXZHBibGdnS2lBb2MyTmhiR1VnS2lBeEtTeGNiaUFnSUNBZ0lDQWdjMk5oYkdWVWNtRnVjMlp2Y20xWklEMGdMU0IwY21GdWMyWnZjbTFQY21sbmFXNVpJQ29nS0hOallXeGxXU0FxSURFcExGeHVJQ0FnSUNBZ0lDQnpZMkZzWlZKbGNHeGhZMlZZSUQwZ2RISmhibk5tYjNKdFQzSnBaMmx1V0NBdklITmpZV3hsTEZ4dUlDQWdJQ0FnSUNCelkyRnNaVkpsY0d4aFkyVlpJRDBnZEhKaGJuTm1iM0p0VDNKcFoybHVXU0F2SUhOallXeGxXU3hjYmlBZ0lDQWdJQ0FnZEhKaGJuTm1iM0p0SUQwZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnZEhKaGJuTnNZWFJsT2lCZ2RISmhibk5zWVhSbEtDUjdjM1JoZEdVdWRISmhibk5zWVhSbFdIMHNJQ1I3YzNSaGRHVXVkSEpoYm5Oc1lYUmxXWDBwSUdBc1hHNGdJQ0FnSUNBZ0lDQWdJQ0J6WTJGc1pUb2dZSFJ5WVc1emJHRjBaU2drZTNOallXeGxWSEpoYm5ObWIzSnRXSDBzSUNSN2MyTmhiR1ZVY21GdWMyWnZjbTFaZlNrZ2MyTmhiR1VvSkh0elkyRnNaWDBzSUNSN2MyTmhiR1ZaZlNrZ2RISmhibk5zWVhSbEtDUjdjMk5oYkdWU1pYQnNZV05sV0gwc0lDUjdjMk5oYkdWU1pYQnNZV05sV1gwcElHQXNYRzRnSUNBZ0lDQWdJQ0FnSUNCeWIzUmhkR1U2SUdCeWIzUmhkR1VvSkh0emRHRjBaUzV5YjNSaGRHVjlMQ0FrZTNSeVlXNXpabTl5YlU5eWFXZHBibGg5TENBa2UzUnlZVzV6Wm05eWJVOXlhV2RwYmxsOUtTQmdMRnh1SUNBZ0lDQWdJQ0FnSUNBZ2MydGxkMWc2SUdCemEyVjNXQ2drZTNOMFlYUmxMbk5yWlhkWWZTa2dZQ3hjYmlBZ0lDQWdJQ0FnSUNBZ0lITnJaWGRaT2lCZ2MydGxkMWtvSkh0emRHRjBaUzV6YTJWM1dYMHBJR0JjYmlBZ0lDQWdJQ0FnZlR0Y2JseHVJQ0FnSUdadmNpQW9iR1YwSUd0bGVTQnBiaUJ6ZEdGMFpTa2dlMXh1SUNBZ0lDQWdJQ0JwWmlBb2MzUmhkR1V1YUdGelQzZHVVSEp2Y0dWeWRIa29hMlY1S1NrZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnYVdZZ0tIUnlZVzV6Wm05eWJWQnliM0J6VzJ0bGVWMHBJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0JvWVhOVWNtRnVjMlp2Y20wZ1BTQjBjblZsTzF4dUlDQWdJQ0FnSUNBZ0lDQWdmU0JsYkhObElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQndjbTl3YzF0allXMWxiRlJ2UkdGemFDaHJaWGtwWFNBOUlITjBZWFJsVzJ0bGVWMDdYRzRnSUNBZ0lDQWdJQ0FnSUNCOVhHNGdJQ0FnSUNBZ0lIMWNiaUFnSUNCOVhHNWNiaUFnSUNCcFppQW9hR0Z6VkhKaGJuTm1iM0p0S1NCN1hHNGdJQ0FnSUNBZ0lIQnliM0J6TG5SeVlXNXpabTl5YlNBOUlDY25PMXh1WEc0Z0lDQWdJQ0FnSUdadmNpQW9iR1YwSUd0bGVTQnBiaUIwY21GdWMyWnZjbTBwSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJR2xtSUNoMGNtRnVjMlp2Y20wdWFHRnpUM2R1VUhKdmNHVnlkSGtvYTJWNUtTa2dlMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJR052Ym5OMElHUmxabUYxYkhSV1lXeDFaU0E5SUNoclpYa2dQVDA5SUNkelkyRnNaU2NwSUQ4Z0p6RW5JRG9nSnpBbk8xeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lIQnliM0J6TG5SeVlXNXpabTl5YlNBclBTQjBjbUZ1YzJadmNtMWJhMlY1WFM1eVpYQnNZV05sS0M5MWJtUmxabWx1WldRdlp5d2daR1ZtWVhWc2RGWmhiSFZsS1R0Y2JpQWdJQ0FnSUNBZ0lDQWdJSDFjYmlBZ0lDQWdJQ0FnZlZ4dUlDQWdJSDFjYmx4dUlDQWdJSEpsZEhWeWJpQndjbTl3Y3p0Y2JuMGlYWDA9XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9hZGFwdGVyL3N2Zy9idWlsZC5qc1xuICoqIG1vZHVsZSBpZCA9IDQ0XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzLmRlZmF1bHQgPSBidWlsZDtcbi8qXG4gICAgQ29udmVydCBwZXJjZW50YWdlIHRvIHBpeGVsc1xuICAgIFxuICAgIEBwYXJhbSBbbnVtYmVyXTogUGVyY2VudGFnZSBvZiB0b3RhbCBsZW5ndGhcbiAgICBAcGFyYW0gW251bWJlcl06IFRvdGFsIGxlbmd0aFxuKi9cbnZhciBwZXJjZW50VG9QaXhlbHMgPSBmdW5jdGlvbiAocGVyY2VudCwgbGVuZ3RoKSB7XG4gICAgcmV0dXJuIHBhcnNlRmxvYXQocGVyY2VudCkgLyAxMDAgKiBsZW5ndGggKyAncHgnO1xufTtcblxuZnVuY3Rpb24gYnVpbGQoc3RhdGUsIGxlbmd0aCkge1xuICAgIHZhciBzdHlsZXMgPSB7fTtcbiAgICB2YXIgZGFzaEFycmF5U3R5bGVzID0ge1xuICAgICAgICBsZW5ndGg6IDAsXG4gICAgICAgIHNwYWNpbmc6IGxlbmd0aCArICdweCdcbiAgICB9O1xuICAgIHZhciBoYXNEYXNoQXJyYXkgPSBmYWxzZTtcblxuICAgIGZvciAodmFyIGtleSBpbiBzdGF0ZSkge1xuICAgICAgICBpZiAoc3RhdGUuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgICAgdmFyIHZhbHVlID0gc3RhdGVba2V5XTtcblxuICAgICAgICAgICAgc3dpdGNoIChrZXkpIHtcbiAgICAgICAgICAgICAgICBjYXNlICdsZW5ndGgnOlxuICAgICAgICAgICAgICAgIGNhc2UgJ3NwYWNpbmcnOlxuICAgICAgICAgICAgICAgICAgICBoYXNEYXNoQXJyYXkgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICBkYXNoQXJyYXlTdHlsZXNba2V5XSA9IHBlcmNlbnRUb1BpeGVscyh2YWx1ZSwgbGVuZ3RoKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSAnb2Zmc2V0JzpcbiAgICAgICAgICAgICAgICAgICAgc3R5bGVzWydzdHJva2UtZGFzaG9mZnNldCddID0gcGVyY2VudFRvUGl4ZWxzKC12YWx1ZSwgbGVuZ3RoKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgc3R5bGVzW2tleV0gPSB2YWx1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGlmIChoYXNEYXNoQXJyYXkpIHtcbiAgICAgICAgc3R5bGVzWydzdHJva2UtZGFzaGFycmF5J10gPSBkYXNoQXJyYXlTdHlsZXMubGVuZ3RoICsgJyAnICsgZGFzaEFycmF5U3R5bGVzLnNwYWNpbmc7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN0eWxlcztcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbk55WXk5aFpHRndkR1Z5TDNOMlp5MXdZWFJvTDJKMWFXeGtMbXB6SWwwc0ltNWhiV1Z6SWpwYlhTd2liV0Z3Y0dsdVozTWlPaUk3T3p0clFrRlJkMElzUzBGQlN6czdPenM3T3p0QlFVWTNRaXhKUVVGTkxHVkJRV1VzUjBGQlJ5eFZRVUZETEU5QlFVOHNSVUZCUlN4TlFVRk5PMWRCUVVzc1FVRkJReXhWUVVGVkxFTkJRVU1zVDBGQlR5eERRVUZETEVkQlFVY3NSMEZCUnl4SFFVRkpMRTFCUVUwc1IwRkJSeXhKUVVGSk8wTkJRVUVzUTBGQlF6czdRVUZGTVVVc1UwRkJVeXhMUVVGTExFTkJRVU1zUzBGQlN5eEZRVUZGTEUxQlFVMHNSVUZCUlR0QlFVTjZReXhSUVVGTkxFMUJRVTBzUjBGQlJ5eEZRVUZGTEVOQlFVTTdRVUZEYkVJc1VVRkJUU3hsUVVGbExFZEJRVWM3UVVGRGNFSXNZMEZCVFN4RlFVRkZMRU5CUVVNN1FVRkRWQ3hsUVVGUExFVkJRVVVzVFVGQlRTeEhRVUZITEVsQlFVazdTMEZEZWtJc1EwRkJRenRCUVVOR0xGRkJRVWtzV1VGQldTeEhRVUZITEV0QlFVc3NRMEZCUXpzN1FVRkZla0lzVTBGQlN5eEpRVUZKTEVkQlFVY3NTVUZCU1N4TFFVRkxMRVZCUVVVN1FVRkRia0lzV1VGQlNTeExRVUZMTEVOQlFVTXNZMEZCWXl4RFFVRkRMRWRCUVVjc1EwRkJReXhGUVVGRk8wRkJRek5DTEdkQ1FVRk5MRXRCUVVzc1IwRkJSeXhMUVVGTExFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTTdPMEZCUlhwQ0xHOUNRVUZSTEVkQlFVYzdRVUZEV0N4eFFrRkJTeXhSUVVGUkxFTkJRVU03UVVGRFpDeHhRa0ZCU3l4VFFVRlRPMEZCUTFZc1owTkJRVmtzUjBGQlJ5eEpRVUZKTEVOQlFVTTdRVUZEY0VJc2JVTkJRV1VzUTBGQlF5eEhRVUZITEVOQlFVTXNSMEZCUnl4bFFVRmxMRU5CUVVNc1MwRkJTeXhGUVVGRkxFMUJRVTBzUTBGQlF5eERRVUZETzBGQlEzUkVMREJDUVVGTk8wRkJRVUVzUVVGRFZpeHhRa0ZCU3l4UlFVRlJPMEZCUTFRc01FSkJRVTBzUTBGQlF5eHRRa0ZCYlVJc1EwRkJReXhIUVVGSExHVkJRV1VzUTBGQlF5eERRVUZETEV0QlFVc3NSVUZCUlN4TlFVRk5MRU5CUVVNc1EwRkJRenRCUVVNNVJDd3dRa0ZCVFR0QlFVRkJMRUZCUTFZN1FVRkRTU3d3UWtGQlRTeERRVUZETEVkQlFVY3NRMEZCUXl4SFFVRkhMRXRCUVVzc1EwRkJRenRCUVVGQkxHRkJRM1pDTzFOQlEwbzdTMEZEU2pzN1FVRkZSQ3hSUVVGSkxGbEJRVmtzUlVGQlJUdEJRVU5rTEdOQlFVMHNRMEZCUXl4clFrRkJhMElzUTBGQlF5eEhRVUZITEdWQlFXVXNRMEZCUXl4TlFVRk5MRWRCUVVjc1IwRkJSeXhIUVVGSExHVkJRV1VzUTBGQlF5eFBRVUZQTEVOQlFVTTdTMEZEZGtZN08wRkJSVVFzVjBGQlR5eE5RVUZOTEVOQlFVTTdRMEZEYWtJaUxDSm1hV3hsSWpvaVluVnBiR1F1YW5NaUxDSnpiM1Z5WTJWU2IyOTBJam9pTDFWelpYSnpMMDFoZEhSUVpYSnllUzlUYVhSbGN5OXdiM0J0YjNScGIyNGlMQ0p6YjNWeVkyVnpRMjl1ZEdWdWRDSTZXeUl2S2x4dUlDQWdJRU52Ym5abGNuUWdjR1Z5WTJWdWRHRm5aU0IwYnlCd2FYaGxiSE5jYmlBZ0lDQmNiaUFnSUNCQWNHRnlZVzBnVzI1MWJXSmxjbDA2SUZCbGNtTmxiblJoWjJVZ2IyWWdkRzkwWVd3Z2JHVnVaM1JvWEc0Z0lDQWdRSEJoY21GdElGdHVkVzFpWlhKZE9pQlViM1JoYkNCc1pXNW5kR2hjYmlvdlhHNWpiMjV6ZENCd1pYSmpaVzUwVkc5UWFYaGxiSE1nUFNBb2NHVnlZMlZ1ZEN3Z2JHVnVaM1JvS1NBOVBpQW9jR0Z5YzJWR2JHOWhkQ2h3WlhKalpXNTBLU0F2SURFd01Da2dLaUJzWlc1bmRHZ2dLeUFuY0hnbk8xeHVYRzVsZUhCdmNuUWdaR1ZtWVhWc2RDQm1kVzVqZEdsdmJpQmlkV2xzWkNoemRHRjBaU3dnYkdWdVozUm9LU0I3WEc0Z0lDQWdZMjl1YzNRZ2MzUjViR1Z6SUQwZ2UzMDdYRzRnSUNBZ1kyOXVjM1FnWkdGemFFRnljbUY1VTNSNWJHVnpJRDBnZTF4dUlDQWdJQ0FnSUNCc1pXNW5kR2c2SURBc1hHNGdJQ0FnSUNBZ0lITndZV05wYm1jNklHeGxibWQwYUNBcklDZHdlQ2RjYmlBZ0lDQjlPMXh1SUNBZ0lHeGxkQ0JvWVhORVlYTm9RWEp5WVhrZ1BTQm1ZV3h6WlR0Y2JseHVJQ0FnSUdadmNpQW9iR1YwSUd0bGVTQnBiaUJ6ZEdGMFpTa2dlMXh1SUNBZ0lDQWdJQ0JwWmlBb2MzUmhkR1V1YUdGelQzZHVVSEp2Y0dWeWRIa29hMlY1S1NrZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnWTI5dWMzUWdkbUZzZFdVZ1BTQnpkR0YwWlZ0clpYbGRPMXh1WEc0Z0lDQWdJQ0FnSUNBZ0lDQnpkMmwwWTJnZ0tHdGxlU2tnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdZMkZ6WlNBbmJHVnVaM1JvSnpwY2JpQWdJQ0FnSUNBZ0lDQWdJR05oYzJVZ0ozTndZV05wYm1jbk9seHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lHaGhjMFJoYzJoQmNuSmhlU0E5SUhSeWRXVTdYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdaR0Z6YUVGeWNtRjVVM1I1YkdWelcydGxlVjBnUFNCd1pYSmpaVzUwVkc5UWFYaGxiSE1vZG1Gc2RXVXNJR3hsYm1kMGFDazdYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdZbkpsWVdzN1hHNGdJQ0FnSUNBZ0lDQWdJQ0JqWVhObElDZHZabVp6WlhRbk9seHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lITjBlV3hsYzFzbmMzUnliMnRsTFdSaGMyaHZabVp6WlhRblhTQTlJSEJsY21ObGJuUlViMUJwZUdWc2N5Z3RkbUZzZFdVc0lHeGxibWQwYUNrN1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ1luSmxZV3M3WEc0Z0lDQWdJQ0FnSUNBZ0lDQmtaV1poZFd4ME9seHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lITjBlV3hsYzF0clpYbGRJRDBnZG1Gc2RXVTdYRzRnSUNBZ0lDQWdJQ0FnSUNCOVhHNGdJQ0FnSUNBZ0lIMWNiaUFnSUNCOVhHNWNiaUFnSUNCcFppQW9hR0Z6UkdGemFFRnljbUY1S1NCN1hHNGdJQ0FnSUNBZ0lITjBlV3hsYzFzbmMzUnliMnRsTFdSaGMyaGhjbkpoZVNkZElEMGdaR0Z6YUVGeWNtRjVVM1I1YkdWekxteGxibWQwYUNBcklDY2dKeUFySUdSaGMyaEJjbkpoZVZOMGVXeGxjeTV6Y0dGamFXNW5PMXh1SUNBZ0lIMWNibHh1SUNBZ0lISmxkSFZ5YmlCemRIbHNaWE03WEc1OUlsMTlcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2FkYXB0ZXIvc3ZnLXBhdGgvYnVpbGQuanNcbiAqKiBtb2R1bGUgaWQgPSA0NVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9O1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX3N0YXRlTWFwID0gcmVxdWlyZSgnLi4vY3NzL3N0YXRlLW1hcCcpO1xuXG52YXIgX3N0YXRlTWFwMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3N0YXRlTWFwKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxudmFyIFNUUk9LRSA9ICdzdHJva2UtJztcblxuZXhwb3J0cy5kZWZhdWx0ID0gX2V4dGVuZHMoe30sIF9zdGF0ZU1hcDIuZGVmYXVsdCwge1xuICAgIG9wYWNpdHk6IFNUUk9LRSArICdvcGFjaXR5JyxcbiAgICB3aWR0aDogU1RST0tFICsgJ3dpZHRoJyxcbiAgICBtaXRlcmxpbWl0OiBTVFJPS0UgKyAnbWl0ZXJsaW1pdCdcbn0pO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluTnlZeTloWkdGd2RHVnlMM04yWnkxd1lYUm9MM04wWVhSbExXMWhjQzVxY3lKZExDSnVZVzFsY3lJNlcxMHNJbTFoY0hCcGJtZHpJam9pT3pzN096czdPenM3T3pzN1FVRkZRU3hKUVVGTkxFMUJRVTBzUjBGQlJ5eFRRVUZUTEVOQlFVTTdPenRCUVVseVFpeFhRVUZQTEVWQlFVc3NUVUZCVFN4WlFVRlRPMEZCUXpOQ0xGTkJRVXNzUlVGQlN5eE5RVUZOTEZWQlFVODdRVUZEZGtJc1kwRkJWU3hGUVVGTExFMUJRVTBzWlVGQldTSXNJbVpwYkdVaU9pSnpkR0YwWlMxdFlYQXVhbk1pTENKemIzVnlZMlZTYjI5MElqb2lMMVZ6WlhKekwwMWhkSFJRWlhKeWVTOVRhWFJsY3k5d2IzQnRiM1JwYjI0aUxDSnpiM1Z5WTJWelEyOXVkR1Z1ZENJNld5SnBiWEJ2Y25RZ1kzTnpVM1JoZEdWTllYQWdabkp2YlNBbkxpNHZZM056TDNOMFlYUmxMVzFoY0NjN1hHNWNibU52Ym5OMElGTlVVazlMUlNBOUlDZHpkSEp2YTJVdEp6dGNibHh1Wlhod2IzSjBJR1JsWm1GMWJIUWdlMXh1SUNBZ0lDNHVMbU56YzFOMFlYUmxUV0Z3TEZ4dUlDQWdJRzl3WVdOcGRIazZJR0FrZTFOVVVrOUxSWDF2Y0dGamFYUjVZQ3hjYmlBZ0lDQjNhV1IwYURvZ1lDUjdVMVJTVDB0RmZYZHBaSFJvWUN4Y2JpQWdJQ0J0YVhSbGNteHBiV2wwT2lCZ0pIdFRWRkpQUzBWOWJXbDBaWEpzYVcxcGRHQmNibjA3SWwxOVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvYWRhcHRlci9zdmctcGF0aC9zdGF0ZS1tYXAuanNcbiAqKiBtb2R1bGUgaWQgPSA0NlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xudmFyIFggPSAnWCc7XG52YXIgWSA9ICdZJztcbnZhciBBTFBIQSA9ICdBbHBoYSc7XG5cbnZhciBheGVzID0gZXhwb3J0cy5heGVzID0gW1gsIFksICdaJ107XG52YXIgcmdiID0gZXhwb3J0cy5yZ2IgPSBbJ1JlZCcsICdHcmVlbicsICdCbHVlJywgQUxQSEFdO1xudmFyIGhzbCA9IGV4cG9ydHMuaHNsID0gWydIdWUnLCAnU2F0dXJhdGlvbicsICdMaWdodG5lc3MnLCBBTFBIQV07XG52YXIgcG9zaXRpb25zID0gZXhwb3J0cy5wb3NpdGlvbnMgPSBbJ1RvcCcsICdSaWdodCcsICdCb3R0b20nLCAnTGVmdCddO1xudmFyIHNoYWRvdyA9IGV4cG9ydHMuc2hhZG93ID0gW1gsIFksICdSYWRpdXMnLCAnU3ByZWFkJywgJ0NvbG9yJ107XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5OeVl5OTJZV3gxWlMxMGVYQmxjeTl6WlhSMGFXNW5jeTlrYVdOMGFXOXVZWEo1TG1weklsMHNJbTVoYldWeklqcGJYU3dpYldGd2NHbHVaM01pT2lJN096dEJRVUZCTEVsQlFVMHNRMEZCUXl4SFFVRkhMRWRCUVVjc1EwRkJRenRCUVVOa0xFbEJRVTBzUTBGQlF5eEhRVUZITEVkQlFVY3NRMEZCUXp0QlFVTmtMRWxCUVUwc1MwRkJTeXhIUVVGSExFOUJRVThzUTBGQlF6czdRVUZGWml4SlFVRk5MRWxCUVVrc1YwRkJTaXhKUVVGSkxFZEJRVWNzUTBGQlF5eERRVUZETEVWQlFVVXNRMEZCUXl4RlFVRkZMRWRCUVVjc1EwRkJReXhEUVVGRE8wRkJRM3BDTEVsQlFVMHNSMEZCUnl4WFFVRklMRWRCUVVjc1IwRkJSeXhEUVVGRExFdEJRVXNzUlVGQlJTeFBRVUZQTEVWQlFVVXNUVUZCVFN4RlFVRkZMRXRCUVVzc1EwRkJReXhEUVVGRE8wRkJRelZETEVsQlFVMHNSMEZCUnl4WFFVRklMRWRCUVVjc1IwRkJSeXhEUVVGRExFdEJRVXNzUlVGQlJTeFpRVUZaTEVWQlFVVXNWMEZCVnl4RlFVRkZMRXRCUVVzc1EwRkJReXhEUVVGRE8wRkJRM1JFTEVsQlFVMHNVMEZCVXl4WFFVRlVMRk5CUVZNc1IwRkJSeXhEUVVGRExFdEJRVXNzUlVGQlJTeFBRVUZQTEVWQlFVVXNVVUZCVVN4RlFVRkZMRTFCUVUwc1EwRkJReXhEUVVGRE8wRkJRM0pFTEVsQlFVMHNUVUZCVFN4WFFVRk9MRTFCUVUwc1IwRkJSeXhEUVVGRExFTkJRVU1zUlVGQlJTeERRVUZETEVWQlFVVXNVVUZCVVN4RlFVRkZMRkZCUVZFc1JVRkJSU3hQUVVGUExFTkJRVU1zUTBGQlF5SXNJbVpwYkdVaU9pSmthV04wYVc5dVlYSjVMbXB6SWl3aWMyOTFjbU5sVW05dmRDSTZJaTlWYzJWeWN5OU5ZWFIwVUdWeWNua3ZVMmwwWlhNdmNHOXdiVzkwYVc5dUlpd2ljMjkxY21ObGMwTnZiblJsYm5RaU9sc2lZMjl1YzNRZ1dDQTlJQ2RZSnp0Y2JtTnZibk4wSUZrZ1BTQW5XU2M3WEc1amIyNXpkQ0JCVEZCSVFTQTlJQ2RCYkhCb1lTYzdYRzVjYm1WNGNHOXlkQ0JqYjI1emRDQmhlR1Z6SUQwZ1cxZ3NJRmtzSUNkYUoxMDdYRzVsZUhCdmNuUWdZMjl1YzNRZ2NtZGlJRDBnV3lkU1pXUW5MQ0FuUjNKbFpXNG5MQ0FuUW14MVpTY3NJRUZNVUVoQlhUdGNibVY0Y0c5eWRDQmpiMjV6ZENCb2Myd2dQU0JiSjBoMVpTY3NJQ2RUWVhSMWNtRjBhVzl1Snl3Z0oweHBaMmgwYm1WemN5Y3NJRUZNVUVoQlhUdGNibVY0Y0c5eWRDQmpiMjV6ZENCd2IzTnBkR2x2Ym5NZ1BTQmJKMVJ2Y0Njc0lDZFNhV2RvZENjc0lDZENiM1IwYjIwbkxDQW5UR1ZtZENkZE8xeHVaWGh3YjNKMElHTnZibk4wSUhOb1lXUnZkeUE5SUZ0WUxDQlpMQ0FuVW1Ga2FYVnpKeXdnSjFOd2NtVmhaQ2NzSUNkRGIyeHZjaWRkT3lKZGZRPT1cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL3ZhbHVlLXR5cGVzL3NldHRpbmdzL2RpY3Rpb25hcnkuanNcbiAqKiBtb2R1bGUgaWQgPSA0N1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xudmFyIHJnYiA9IGV4cG9ydHMucmdiID0ge1xuICAgIG1pbjogMCxcbiAgICBtYXg6IDI1NSxcbiAgICByb3VuZDogdHJ1ZVxufTtcblxudmFyIG9wYWNpdHkgPSBleHBvcnRzLm9wYWNpdHkgPSB7XG4gICAgbWluOiAwLFxuICAgIG1heDogMVxufTtcblxudmFyIHBlcmNlbnQgPSBleHBvcnRzLnBlcmNlbnQgPSB7XG4gICAgbWluOiAwLFxuICAgIG1heDogMTAwLFxuICAgIHVuaXQ6ICclJ1xufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbk55WXk5MllXeDFaUzEwZVhCbGN5OXpaWFIwYVc1bmN5OWtaV1poZFd4MExYQnliM0J6TG1weklsMHNJbTVoYldWeklqcGJYU3dpYldGd2NHbHVaM01pT2lJN096dEJRVUZQTEVsQlFVMHNSMEZCUnl4WFFVRklMRWRCUVVjc1IwRkJSenRCUVVObUxFOUJRVWNzUlVGQlJTeERRVUZETzBGQlEwNHNUMEZCUnl4RlFVRkZMRWRCUVVjN1FVRkRVaXhUUVVGTExFVkJRVVVzU1VGQlNUdERRVU5rTEVOQlFVTTdPMEZCUlVzc1NVRkJUU3hQUVVGUExGZEJRVkFzVDBGQlR5eEhRVUZITzBGQlEyNUNMRTlCUVVjc1JVRkJSU3hEUVVGRE8wRkJRMDRzVDBGQlJ5eEZRVUZGTEVOQlFVTTdRMEZEVkN4RFFVRkRPenRCUVVWTExFbEJRVTBzVDBGQlR5eFhRVUZRTEU5QlFVOHNSMEZCUnp0QlFVTnVRaXhQUVVGSExFVkJRVVVzUTBGQlF6dEJRVU5PTEU5QlFVY3NSVUZCUlN4SFFVRkhPMEZCUTFJc1VVRkJTU3hGUVVGRkxFZEJRVWM3UTBGRFdpeERRVUZESWl3aVptbHNaU0k2SW1SbFptRjFiSFF0Y0hKdmNITXVhbk1pTENKemIzVnlZMlZTYjI5MElqb2lMMVZ6WlhKekwwMWhkSFJRWlhKeWVTOVRhWFJsY3k5d2IzQnRiM1JwYjI0aUxDSnpiM1Z5WTJWelEyOXVkR1Z1ZENJNld5SmxlSEJ2Y25RZ1kyOXVjM1FnY21kaUlEMGdlMXh1SUNBZ0lHMXBiam9nTUN4Y2JpQWdJQ0J0WVhnNklESTFOU3hjYmlBZ0lDQnliM1Z1WkRvZ2RISjFaVnh1ZlR0Y2JseHVaWGh3YjNKMElHTnZibk4wSUc5d1lXTnBkSGtnUFNCN1hHNGdJQ0FnYldsdU9pQXdMRnh1SUNBZ0lHMWhlRG9nTVZ4dWZUdGNibHh1Wlhod2IzSjBJR052Ym5OMElIQmxjbU5sYm5RZ1BTQjdYRzRnSUNBZ2JXbHVPaUF3TEZ4dUlDQWdJRzFoZURvZ01UQXdMRnh1SUNBZ0lIVnVhWFE2SUNjbEoxeHVmVHNpWFgwPVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvdmFsdWUtdHlwZXMvc2V0dGluZ3MvZGVmYXVsdC1wcm9wcy5qc1xuICoqIG1vZHVsZSBpZCA9IDQ4XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHMuZGVmYXVsdCA9IGNyZWF0ZUVhc2luZ0Z1bmN0aW9uO1xuLypcbiAgICBNaXJyb3IgZWFzaW5nXG4gICAgXG4gICAgTWlycm9ycyB0aGUgcHJvdmlkZWQgZWFzaW5nIGZ1bmN0aW9uLCB1c2VkIGhlcmUgZm9yIG1pcnJvcmluZyBhblxuICAgIGVhc2VJbiBpbnRvIGFuIGVhc2VJbk91dFxuICAgIFxuICAgIEBwYXJhbSBbbnVtYmVyXTogUHJvZ3Jlc3MsIGZyb20gMCAtIDEsIG9mIGN1cnJlbnQgc2hpZnRcbiAgICBAcGFyYW0gW2Z1bmN0aW9uXTogVGhlIGVhc2luZyBmdW5jdGlvbiB0byBtaXJyb3JcbiAgICBAcmV0dXJucyBbbnVtYmVyXTogVGhlIGVhc2luZy1hZGp1c3RlZCBkZWx0YVxuKi9cbnZhciBtaXJyb3JFYXNpbmcgPSBmdW5jdGlvbiAobWV0aG9kKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChwcm9ncmVzcywgc3RyZW5ndGgpIHtcbiAgICAgICAgcmV0dXJuIHByb2dyZXNzIDw9IDAuNSA/IG1ldGhvZCgyICogcHJvZ3Jlc3MsIHN0cmVuZ3RoKSAvIDIgOiAoMiAtIG1ldGhvZCgyICogKDEgLSBwcm9ncmVzcyksIHN0cmVuZ3RoKSkgLyAyO1xuICAgIH07XG59O1xuXG4vKlxuICAgIFJldmVyc2UgZWFzaW5nXG4gICAgXG4gICAgUmV2ZXJzZXMgdGhlIG91dHB1dCBvZiB0aGUgcHJvdmlkZWQgZWFzaW5nIGZ1bmN0aW9uLCB1c2VkIGZvciBmbGlwcGluZyBlYXNlSW5cbiAgICBjdXJ2ZSB0byBhbiBlYXNlT3V0LlxuICAgIFxuICAgIEBwYXJhbSBbbnVtYmVyXTogUHJvZ3Jlc3MsIGZyb20gMCAtIDEsIG9mIGN1cnJlbnQgc2hpZnRcbiAgICBAcGFyYW0gW2Z1bmN0aW9uXTogVGhlIGVhc2luZyBmdW5jdGlvbiB0byByZXZlcnNlXG4gICAgQHJldHVybnMgW251bWJlcl06IFRoZSBlYXNpbmctYWRqdXN0ZWQgZGVsdGFcbiovXG52YXIgcmV2ZXJzZUVhc2luZyA9IGZ1bmN0aW9uIChtZXRob2QpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gKHByb2dyZXNzLCBzdHJlbmd0aCkge1xuICAgICAgICByZXR1cm4gMSAtIG1ldGhvZCgxIC0gcHJvZ3Jlc3MsIHN0cmVuZ3RoKTtcbiAgICB9O1xufTtcblxuLypcbiAgICBFYXNpbmcgY2xhc3NcblxuICAgIElmIHByb3ZpZGVkIGVhc2luZyBmdW5jdGlvbiwgcmV0dXJucyBlYXNpbmcgZnVuY3Rpb24gd2l0aCBcbiAgICBpbi9vdXQvaW5PdXQgdmFyaWF0aW9uc1xuXG4gICAgSWYgcHJvdmlkZWQgZm91ciBhcmd1bWVudHMsIHJldHVybnMgbmV3IEJlemllciBjbGFzcyBpbnN0ZWFkLlxuKi9cbmZ1bmN0aW9uIGNyZWF0ZUVhc2luZ0Z1bmN0aW9uKG1ldGhvZCkge1xuICAgIHZhciBlYXNpbmdGdW5jdGlvbiA9IGZ1bmN0aW9uIChwcm9ncmVzcywgc3RyZW5ndGgpIHtcbiAgICAgICAgcmV0dXJuIG1ldGhvZChwcm9ncmVzcywgc3RyZW5ndGgpO1xuICAgIH07XG5cbiAgICBlYXNpbmdGdW5jdGlvbi5pbiA9IGZ1bmN0aW9uIChwcm9ncmVzcywgc3RyZW5ndGgpIHtcbiAgICAgICAgcmV0dXJuIG1ldGhvZChwcm9ncmVzcywgc3RyZW5ndGgpO1xuICAgIH07XG4gICAgZWFzaW5nRnVuY3Rpb24ub3V0ID0gcmV2ZXJzZUVhc2luZyhtZXRob2QpO1xuICAgIGVhc2luZ0Z1bmN0aW9uLmluT3V0ID0gbWlycm9yRWFzaW5nKG1ldGhvZCk7XG5cbiAgICByZXR1cm4gZWFzaW5nRnVuY3Rpb247XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5OeVl5OWhZM1JwYjI1ekwyVmhjMmx1Wnk5amNtVmhkR1V0WldGemFXNW5MbXB6SWwwc0ltNWhiV1Z6SWpwYlhTd2liV0Z3Y0dsdVozTWlPaUk3T3p0clFrRm5RM2RDTEc5Q1FVRnZRanM3T3pzN096czdPenM3UVVGMFFqVkRMRWxCUVUwc1dVRkJXU3hIUVVGSExGVkJRVU1zVFVGQlRUdFhRVUZMTEZWQlFVTXNVVUZCVVN4RlFVRkZMRkZCUVZFN1pVRkJTeXhCUVVGRExGRkJRVkVzU1VGQlNTeEhRVUZITEVkQlFVa3NUVUZCVFN4RFFVRkRMRU5CUVVNc1IwRkJSeXhSUVVGUkxFVkJRVVVzVVVGQlVTeERRVUZETEVkQlFVY3NRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJReXhIUVVGSExFMUJRVTBzUTBGQlF5eERRVUZETEVsQlFVa3NRMEZCUXl4SFFVRkhMRkZCUVZFc1EwRkJRU3hCUVVGRExFVkJRVVVzVVVGQlVTeERRVUZETEVOQlFVRXNSMEZCU1N4RFFVRkRPMHRCUVVFN1EwRkJRVHM3T3pzN096czdPenM3TzBGQlFVTXNRVUZaYWtzc1NVRkJUU3hoUVVGaExFZEJRVWNzVlVGQlF5eE5RVUZOTzFkQlFVc3NWVUZCUXl4UlFVRlJMRVZCUVVVc1VVRkJVVHRsUVVGTExFTkJRVU1zUjBGQlJ5eE5RVUZOTEVOQlFVTXNRMEZCUXl4SFFVRkhMRkZCUVZFc1JVRkJSU3hSUVVGUkxFTkJRVU03UzBGQlFUdERRVUZCT3pzN096czdPenM3TzBGQlFVTXNRVUZWT1VVc1UwRkJVeXh2UWtGQmIwSXNRMEZCUXl4TlFVRk5MRVZCUVVVN1FVRkRha1FzVVVGQlNTeGpRVUZqTEVkQlFVY3NWVUZCUXl4UlFVRlJMRVZCUVVVc1VVRkJVVHRsUVVGTExFMUJRVTBzUTBGQlF5eFJRVUZSTEVWQlFVVXNVVUZCVVN4RFFVRkRPMHRCUVVFc1EwRkJRenM3UVVGRmVFVXNhMEpCUVdNc1EwRkJReXhGUVVGRkxFZEJRVWNzVlVGQlF5eFJRVUZSTEVWQlFVVXNVVUZCVVR0bFFVRkxMRTFCUVUwc1EwRkJReXhSUVVGUkxFVkJRVVVzVVVGQlVTeERRVUZETzB0QlFVRXNRMEZCUXp0QlFVTjJSU3hyUWtGQll5eERRVUZETEVkQlFVY3NSMEZCUnl4aFFVRmhMRU5CUVVNc1RVRkJUU3hEUVVGRExFTkJRVU03UVVGRE0wTXNhMEpCUVdNc1EwRkJReXhMUVVGTExFZEJRVWNzV1VGQldTeERRVUZETEUxQlFVMHNRMEZCUXl4RFFVRkRPenRCUVVVMVF5eFhRVUZQTEdOQlFXTXNRMEZCUXp0RFFVTjZRaUlzSW1acGJHVWlPaUpqY21WaGRHVXRaV0Z6YVc1bkxtcHpJaXdpYzI5MWNtTmxVbTl2ZENJNklpOVZjMlZ5Y3k5TllYUjBVR1Z5Y25rdlUybDBaWE12Y0c5d2JXOTBhVzl1SWl3aWMyOTFjbU5sYzBOdmJuUmxiblFpT2xzaUx5cGNiaUFnSUNCTmFYSnliM0lnWldGemFXNW5YRzRnSUNBZ1hHNGdJQ0FnVFdseWNtOXljeUIwYUdVZ2NISnZkbWxrWldRZ1pXRnphVzVuSUdaMWJtTjBhVzl1TENCMWMyVmtJR2hsY21VZ1ptOXlJRzFwY25KdmNtbHVaeUJoYmx4dUlDQWdJR1ZoYzJWSmJpQnBiblJ2SUdGdUlHVmhjMlZKYms5MWRGeHVJQ0FnSUZ4dUlDQWdJRUJ3WVhKaGJTQmJiblZ0WW1WeVhUb2dVSEp2WjNKbGMzTXNJR1p5YjIwZ01DQXRJREVzSUc5bUlHTjFjbkpsYm5RZ2MyaHBablJjYmlBZ0lDQkFjR0Z5WVcwZ1cyWjFibU4wYVc5dVhUb2dWR2hsSUdWaGMybHVaeUJtZFc1amRHbHZiaUIwYnlCdGFYSnliM0pjYmlBZ0lDQkFjbVYwZFhKdWN5QmJiblZ0WW1WeVhUb2dWR2hsSUdWaGMybHVaeTFoWkdwMWMzUmxaQ0JrWld4MFlWeHVLaTljYm1OdmJuTjBJRzFwY25KdmNrVmhjMmx1WnlBOUlDaHRaWFJvYjJRcElEMCtJQ2h3Y205bmNtVnpjeXdnYzNSeVpXNW5kR2dwSUQwK0lDaHdjbTluY21WemN5QThQU0F3TGpVcElEOGdiV1YwYUc5a0tESWdLaUJ3Y205bmNtVnpjeXdnYzNSeVpXNW5kR2dwSUM4Z01pQTZJQ2d5SUMwZ2JXVjBhRzlrS0RJZ0tpQW9NU0F0SUhCeWIyZHlaWE56S1N3Z2MzUnlaVzVuZEdncEtTQXZJREk3WEc0Z0lDQWdJQ0FnSUZ4dUx5cGNiaUFnSUNCU1pYWmxjbk5sSUdWaGMybHVaMXh1SUNBZ0lGeHVJQ0FnSUZKbGRtVnljMlZ6SUhSb1pTQnZkWFJ3ZFhRZ2IyWWdkR2hsSUhCeWIzWnBaR1ZrSUdWaGMybHVaeUJtZFc1amRHbHZiaXdnZFhObFpDQm1iM0lnWm14cGNIQnBibWNnWldGelpVbHVYRzRnSUNBZ1kzVnlkbVVnZEc4Z1lXNGdaV0Z6WlU5MWRDNWNiaUFnSUNCY2JpQWdJQ0JBY0dGeVlXMGdXMjUxYldKbGNsMDZJRkJ5YjJkeVpYTnpMQ0JtY205dElEQWdMU0F4TENCdlppQmpkWEp5Wlc1MElITm9hV1owWEc0Z0lDQWdRSEJoY21GdElGdG1kVzVqZEdsdmJsMDZJRlJvWlNCbFlYTnBibWNnWm5WdVkzUnBiMjRnZEc4Z2NtVjJaWEp6WlZ4dUlDQWdJRUJ5WlhSMWNtNXpJRnR1ZFcxaVpYSmRPaUJVYUdVZ1pXRnphVzVuTFdGa2FuVnpkR1ZrSUdSbGJIUmhYRzRxTDF4dVkyOXVjM1FnY21WMlpYSnpaVVZoYzJsdVp5QTlJQ2h0WlhSb2IyUXBJRDArSUNod2NtOW5jbVZ6Y3l3Z2MzUnlaVzVuZEdncElEMCtJREVnTFNCdFpYUm9iMlFvTVNBdElIQnliMmR5WlhOekxDQnpkSEpsYm1kMGFDazdYRzVjYmk4cVhHNGdJQ0FnUldGemFXNW5JR05zWVhOelhHNWNiaUFnSUNCSlppQndjbTkyYVdSbFpDQmxZWE5wYm1jZ1puVnVZM1JwYjI0c0lISmxkSFZ5Ym5NZ1pXRnphVzVuSUdaMWJtTjBhVzl1SUhkcGRHZ2dYRzRnSUNBZ2FXNHZiM1YwTDJsdVQzVjBJSFpoY21saGRHbHZibk5jYmx4dUlDQWdJRWxtSUhCeWIzWnBaR1ZrSUdadmRYSWdZWEpuZFcxbGJuUnpMQ0J5WlhSMWNtNXpJRzVsZHlCQ1pYcHBaWElnWTJ4aGMzTWdhVzV6ZEdWaFpDNWNiaW92WEc1bGVIQnZjblFnWkdWbVlYVnNkQ0JtZFc1amRHbHZiaUJqY21WaGRHVkZZWE5wYm1kR2RXNWpkR2x2YmlodFpYUm9iMlFwSUh0Y2JpQWdJQ0JzWlhRZ1pXRnphVzVuUm5WdVkzUnBiMjRnUFNBb2NISnZaM0psYzNNc0lITjBjbVZ1WjNSb0tTQTlQaUJ0WlhSb2IyUW9jSEp2WjNKbGMzTXNJSE4wY21WdVozUm9LVHRjYmx4dUlDQWdJR1ZoYzJsdVowWjFibU4wYVc5dUxtbHVJRDBnS0hCeWIyZHlaWE56TENCemRISmxibWQwYUNrZ1BUNGdiV1YwYUc5a0tIQnliMmR5WlhOekxDQnpkSEpsYm1kMGFDazdYRzRnSUNBZ1pXRnphVzVuUm5WdVkzUnBiMjR1YjNWMElEMGdjbVYyWlhKelpVVmhjMmx1WnlodFpYUm9iMlFwTzF4dUlDQWdJR1ZoYzJsdVowWjFibU4wYVc5dUxtbHVUM1YwSUQwZ2JXbHljbTl5UldGemFXNW5LRzFsZEdodlpDazdYRzVjYmlBZ0lDQnlaWFIxY200Z1pXRnphVzVuUm5WdVkzUnBiMjQ3WEc1OVhHNGlYWDA9XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9hY3Rpb25zL2Vhc2luZy9jcmVhdGUtZWFzaW5nLmpzXG4gKiogbW9kdWxlIGlkID0gNDlcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHMuZGVmYXVsdCA9IGN1YmljQmV6aWVyO1xuLypcbiAgICBCZXppZXIgZnVuY3Rpb24gZ2VuZXJhdG9yXG4gICAgICAgIFxuICAgIEdhw6t0YW4gUmVuYXVkZWF1J3MgQmV6aWVyRWFzaW5nXG4gICAgaHR0cHM6Ly9naXRodWIuY29tL2dyZS9iZXppZXItZWFzaW5nL2Jsb2IvbWFzdGVyL2luZGV4LmpzICBcbiAgICBodHRwczovL2dpdGh1Yi5jb20vZ3JlL2Jlemllci1lYXNpbmcvYmxvYi9tYXN0ZXIvTElDRU5TRVxuICAgIFlvdSdyZSBhIGhlcm9cbiAgICBcbiAgICBVc2VcbiAgICBcbiAgICAgICAgdmFyIGVhc2VPdXQgPSBuZXcgQmV6aWVyKC4xNywuNjcsLjgzLC42NyksXG4gICAgICAgICAgICB4ID0gZWFzZU91dCgwLjUpOyAvLyByZXR1cm5zIDAuNjI3Li4uXG4qL1xuXG4vLyBDb25zdGFudHNcbnZhciBORVdUT05fSVRFUkFUSU9OUyA9IDg7XG52YXIgTkVXVE9OX01JTl9TTE9QRSA9IDAuMDAxO1xudmFyIFNVQkRJVklTSU9OX1BSRUNJU0lPTiA9IDAuMDAwMDAwMTtcbnZhciBTVUJESVZJU0lPTl9NQVhfSVRFUkFUSU9OUyA9IDEwO1xudmFyIEtfU1BMSU5FX1RBQkxFX1NJWkUgPSAxMTtcbnZhciBLX1NBTVBMRV9TVEVQX1NJWkUgPSAxLjAgLyAoS19TUExJTkVfVEFCTEVfU0laRSAtIDEuMCk7XG52YXIgRkxPQVRfMzJfU1VQUE9SVEVEID0gdHlwZW9mIEZsb2F0MzJBcnJheSAhPT0gJ3VuZGVmaW5lZCc7XG5cbi8vIEhlbHBlciBtZXRob2RzXG52YXIgYSA9IGZ1bmN0aW9uIChhMSwgYTIpIHtcbiAgICByZXR1cm4gMS4wIC0gMy4wICogYTIgKyAzLjAgKiBhMTtcbn07XG52YXIgYiA9IGZ1bmN0aW9uIChhMSwgYTIpIHtcbiAgICByZXR1cm4gMy4wICogYTIgLSA2LjAgKiBhMTtcbn07XG52YXIgYyA9IGZ1bmN0aW9uIChhMSkge1xuICAgIHJldHVybiAzLjAgKiBhMTtcbn07XG5cbnZhciBnZXRTbG9wZSA9IGZ1bmN0aW9uICh0LCBhMSwgYTIpIHtcbiAgICByZXR1cm4gMy4wICogYShhMSwgYTIpICogdCAqIHQgKyAyLjAgKiBiKGExLCBhMikgKiB0ICsgYyhhMSk7XG59O1xuXG52YXIgY2FsY0JlemllciA9IGZ1bmN0aW9uICh0LCBhMSwgYTIpIHtcbiAgICByZXR1cm4gKChhKGExLCBhMikgKiB0ICsgYihhMSwgYTIpKSAqIHQgKyBjKGExKSkgKiB0O1xufTtcblxuLypcbiAgICBDcmVhdGUgYSBjdWJpYyBiZXppZXIgcmVzb2x2ZXJcbiovXG5mdW5jdGlvbiBjdWJpY0JlemllcihtWDEsIG1ZMSwgbVgyLCBtWTIpIHtcbiAgICB2YXIgc2FtcGxlVmFsdWVzID0gRkxPQVRfMzJfU1VQUE9SVEVEID8gbmV3IEZsb2F0MzJBcnJheShLX1NQTElORV9UQUJMRV9TSVpFKSA6IG5ldyBBcnJheShLX1NQTElORV9UQUJMRV9TSVpFKTtcbiAgICB2YXIgX3ByZWNvbXB1dGVkID0gZmFsc2U7XG5cbiAgICB2YXIgYmluYXJ5U3ViZGl2aWRlID0gZnVuY3Rpb24gKGFYLCBhQSwgYUIpIHtcbiAgICAgICAgdmFyIGkgPSAwO1xuICAgICAgICB2YXIgY3VycmVudFggPSB1bmRlZmluZWQ7XG4gICAgICAgIHZhciBjdXJyZW50VCA9IHVuZGVmaW5lZDtcblxuICAgICAgICBkbyB7XG4gICAgICAgICAgICBjdXJyZW50VCA9IGFBICsgKGFCIC0gYUEpIC8gMi4wO1xuICAgICAgICAgICAgY3VycmVudFggPSBjYWxjQmV6aWVyKGN1cnJlbnRULCBtWDEsIG1YMikgLSBhWDtcbiAgICAgICAgICAgIGlmIChjdXJyZW50WCA+IDAuMCkge1xuICAgICAgICAgICAgICAgIGFCID0gY3VycmVudFQ7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGFBID0gY3VycmVudFQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gd2hpbGUgKE1hdGguYWJzKGN1cnJlbnRYKSA+IFNVQkRJVklTSU9OX1BSRUNJU0lPTiAmJiArK2kgPCBTVUJESVZJU0lPTl9NQVhfSVRFUkFUSU9OUyk7XG5cbiAgICAgICAgcmV0dXJuIGN1cnJlbnRUO1xuICAgIH07XG5cbiAgICB2YXIgbmV3dG9uUmFwaHNvbkl0ZXJhdGUgPSBmdW5jdGlvbiAoYVgsIGFHdWVzc1QpIHtcbiAgICAgICAgdmFyIGkgPSAwO1xuICAgICAgICB2YXIgY3VycmVudFNsb3BlID0gMDtcbiAgICAgICAgdmFyIGN1cnJlbnRYID0gdW5kZWZpbmVkO1xuXG4gICAgICAgIGZvciAoOyBpIDwgTkVXVE9OX0lURVJBVElPTlM7ICsraSkge1xuICAgICAgICAgICAgY3VycmVudFNsb3BlID0gZ2V0U2xvcGUoYUd1ZXNzVCwgbVgxLCBtWDIpO1xuXG4gICAgICAgICAgICBpZiAoY3VycmVudFNsb3BlID09PSAwLjApIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gYUd1ZXNzVDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY3VycmVudFggPSBjYWxjQmV6aWVyKGFHdWVzc1QsIG1YMSwgbVgyKSAtIGFYO1xuICAgICAgICAgICAgYUd1ZXNzVCAtPSBjdXJyZW50WCAvIGN1cnJlbnRTbG9wZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBhR3Vlc3NUO1xuICAgIH07XG5cbiAgICB2YXIgY2FsY1NhbXBsZVZhbHVlcyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBLX1NQTElORV9UQUJMRV9TSVpFOyArK2kpIHtcbiAgICAgICAgICAgIHNhbXBsZVZhbHVlc1tpXSA9IGNhbGNCZXppZXIoaSAqIEtfU0FNUExFX1NURVBfU0laRSwgbVgxLCBtWDIpO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIHZhciBnZXRURm9yWCA9IGZ1bmN0aW9uIChhWCkge1xuICAgICAgICB2YXIgaW50ZXJ2YWxTdGFydCA9IDAuMDtcbiAgICAgICAgdmFyIGN1cnJlbnRTYW1wbGUgPSAxO1xuICAgICAgICB2YXIgbGFzdFNhbXBsZSA9IEtfU1BMSU5FX1RBQkxFX1NJWkUgLSAxO1xuICAgICAgICB2YXIgZGlzdCA9IDAuMDtcbiAgICAgICAgdmFyIGd1ZXNzRm9yVCA9IDAuMDtcbiAgICAgICAgdmFyIGluaXRpYWxTbG9wZSA9IDAuMDtcblxuICAgICAgICBmb3IgKDsgY3VycmVudFNhbXBsZSAhPSBsYXN0U2FtcGxlICYmIHNhbXBsZVZhbHVlc1tjdXJyZW50U2FtcGxlXSA8PSBhWDsgKytjdXJyZW50U2FtcGxlKSB7XG4gICAgICAgICAgICBpbnRlcnZhbFN0YXJ0ICs9IEtfU0FNUExFX1NURVBfU0laRTtcbiAgICAgICAgfVxuXG4gICAgICAgIC0tY3VycmVudFNhbXBsZTtcblxuICAgICAgICBkaXN0ID0gKGFYIC0gc2FtcGxlVmFsdWVzW2N1cnJlbnRTYW1wbGVdKSAvIChzYW1wbGVWYWx1ZXNbY3VycmVudFNhbXBsZSArIDFdIC0gc2FtcGxlVmFsdWVzW2N1cnJlbnRTYW1wbGVdKTtcbiAgICAgICAgZ3Vlc3NGb3JUID0gaW50ZXJ2YWxTdGFydCArIGRpc3QgKiBLX1NBTVBMRV9TVEVQX1NJWkU7XG5cbiAgICAgICAgaW5pdGlhbFNsb3BlID0gZ2V0U2xvcGUoZ3Vlc3NGb3JULCBtWDEsIG1YMik7XG5cbiAgICAgICAgLy8gSWYgc2xvcGUgaXMgZ3JlYXRlciB0aGFuIG1pblxuICAgICAgICBpZiAoaW5pdGlhbFNsb3BlID49IE5FV1RPTl9NSU5fU0xPUEUpIHtcbiAgICAgICAgICAgIHJldHVybiBuZXd0b25SYXBoc29uSXRlcmF0ZShhWCwgZ3Vlc3NGb3JUKTtcbiAgICAgICAgICAgIC8vIFNsb3BlIGlzIGVxdWFsIHRvIG1pblxuICAgICAgICB9IGVsc2UgaWYgKGluaXRpYWxTbG9wZSA9PT0gMC4wKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGd1ZXNzRm9yVDtcbiAgICAgICAgICAgICAgICAvLyBTbG9wZSBpcyBsZXNzIHRoYW4gbWluXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gYmluYXJ5U3ViZGl2aWRlKGFYLCBpbnRlcnZhbFN0YXJ0LCBpbnRlcnZhbFN0YXJ0ICsgS19TQU1QTEVfU1RFUF9TSVpFKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgfTtcblxuICAgIHZhciBwcmVjb21wdXRlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBfcHJlY29tcHV0ZWQgPSB0cnVlO1xuICAgICAgICBpZiAobVgxICE9IG1ZMSB8fCBtWDIgIT0gbVkyKSB7XG4gICAgICAgICAgICBjYWxjU2FtcGxlVmFsdWVzKCk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgdmFyIHJlc29sdmVyID0gZnVuY3Rpb24gKGFYKSB7XG4gICAgICAgIHZhciByZXR1cm5WYWx1ZSA9IHVuZGVmaW5lZDtcblxuICAgICAgICBpZiAoIV9wcmVjb21wdXRlZCkge1xuICAgICAgICAgICAgcHJlY29tcHV0ZSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gSWYgbGluZWFyIGdyYWRpZW50LCByZXR1cm4gWCBhcyBUXG4gICAgICAgIGlmIChtWDEgPT09IG1ZMSAmJiBtWDIgPT09IG1ZMikge1xuICAgICAgICAgICAgcmV0dXJuVmFsdWUgPSBhWDtcblxuICAgICAgICAgICAgLy8gSWYgYXQgc3RhcnQsIHJldHVybiAwXG4gICAgICAgIH0gZWxzZSBpZiAoYVggPT09IDApIHtcbiAgICAgICAgICAgICAgICByZXR1cm5WYWx1ZSA9IDA7XG5cbiAgICAgICAgICAgICAgICAvLyBJZiBhdCBlbmQsIHJldHVybiAxXG4gICAgICAgICAgICB9IGVsc2UgaWYgKGFYID09PSAxKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVyblZhbHVlID0gMTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm5WYWx1ZSA9IGNhbGNCZXppZXIoZ2V0VEZvclgoYVgpLCBtWTEsIG1ZMik7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiByZXR1cm5WYWx1ZTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIHJlc29sdmVyO1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluTnlZeTloWTNScGIyNXpMMlZoYzJsdVp5OWpjbVZoZEdVdFltVjZhV1Z5TG1weklsMHNJbTVoYldWeklqcGJYU3dpYldGd2NHbHVaM01pT2lJN096dHJRa0Z0UTNkQ0xGZEJRVmM3T3pzN096czdPenM3T3pzN096czdRVUZ3UW01RExFbEJRVTBzYVVKQlFXbENMRWRCUVVjc1EwRkJReXhEUVVGRE8wRkJRelZDTEVsQlFVMHNaMEpCUVdkQ0xFZEJRVWNzUzBGQlN5eERRVUZETzBGQlF5OUNMRWxCUVUwc2NVSkJRWEZDTEVkQlFVY3NVMEZCVXl4RFFVRkRPMEZCUTNoRExFbEJRVTBzTUVKQlFUQkNMRWRCUVVjc1JVRkJSU3hEUVVGRE8wRkJRM1JETEVsQlFVMHNiVUpCUVcxQ0xFZEJRVWNzUlVGQlJTeERRVUZETzBGQlF5OUNMRWxCUVUwc2EwSkJRV3RDTEVkQlFVY3NSMEZCUnl4SlFVRkpMRzFDUVVGdFFpeEhRVUZITEVkQlFVY3NRMEZCUVN4QlFVRkRMRU5CUVVNN1FVRkROMFFzU1VGQlRTeHJRa0ZCYTBJc1IwRkJTU3hQUVVGUExGbEJRVmtzUzBGQlN5eFhRVUZYTEVGQlFVTTdPenRCUVVGRExFRkJSMnBGTEVsQlFVMHNRMEZCUXl4SFFVRkhMRlZCUVVNc1JVRkJSU3hGUVVGRkxFVkJRVVU3VjBGQlN5eEhRVUZITEVkQlFVY3NSMEZCUnl4SFFVRkhMRVZCUVVVc1IwRkJSeXhIUVVGSExFZEJRVWNzUlVGQlJUdERRVUZCTEVOQlFVTTdRVUZEYUVRc1NVRkJUU3hEUVVGRExFZEJRVWNzVlVGQlF5eEZRVUZGTEVWQlFVVXNSVUZCUlR0WFFVRkxMRWRCUVVjc1IwRkJSeXhGUVVGRkxFZEJRVWNzUjBGQlJ5eEhRVUZITEVWQlFVVTdRMEZCUVN4RFFVRkRPMEZCUXpGRExFbEJRVTBzUTBGQlF5eEhRVUZITEZWQlFVTXNSVUZCUlR0WFFVRkxMRWRCUVVjc1IwRkJSeXhGUVVGRk8wTkJRVUVzUTBGQlF6czdRVUZGTTBJc1NVRkJUU3hSUVVGUkxFZEJRVWNzVlVGQlF5eERRVUZETEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVN1YwRkJTeXhIUVVGSExFZEJRVWNzUTBGQlF5eERRVUZETEVWQlFVVXNSVUZCUlN4RlFVRkZMRU5CUVVNc1IwRkJSeXhEUVVGRExFZEJRVWNzUTBGQlF5eEhRVUZITEVkQlFVY3NSMEZCUnl4RFFVRkRMRU5CUVVNc1JVRkJSU3hGUVVGRkxFVkJRVVVzUTBGQlF5eEhRVUZITEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNc1JVRkJSU3hEUVVGRE8wTkJRVUVzUTBGQlF6czdRVUZGZEVZc1NVRkJUU3hWUVVGVkxFZEJRVWNzVlVGQlF5eERRVUZETEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVN1YwRkJTeXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVWQlFVVXNSVUZCUlN4RlFVRkZMRU5CUVVNc1IwRkJSeXhEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETEVWQlFVVXNSVUZCUlN4RlFVRkZMRU5CUVVNc1EwRkJRU3hIUVVGSkxFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTXNSVUZCUlN4RFFVRkRMRU5CUVVFc1IwRkJTU3hEUVVGRE8wTkJRVUU3T3pzN08wRkJRVU1zUVVGTGFrVXNVMEZCVXl4WFFVRlhMRU5CUVVNc1IwRkJSeXhGUVVGRkxFZEJRVWNzUlVGQlJTeEhRVUZITEVWQlFVVXNSMEZCUnl4RlFVRkZPMEZCUTNCRUxGRkJRVTBzV1VGQldTeEhRVUZITEd0Q1FVRnJRaXhIUVVGSExFbEJRVWtzV1VGQldTeERRVUZETEcxQ1FVRnRRaXhEUVVGRExFZEJRVWNzU1VGQlNTeExRVUZMTEVOQlFVTXNiVUpCUVcxQ0xFTkJRVU1zUTBGQlF6dEJRVU5xU0N4UlFVRkpMRmxCUVZrc1IwRkJSeXhMUVVGTExFTkJRVU03TzBGQlJYcENMRkZCUVUwc1pVRkJaU3hIUVVGSExGVkJRVU1zUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVzN1FVRkRjRU1zV1VGQlNTeERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRPMEZCUTFZc1dVRkJTU3hSUVVGUkxGbEJRVUVzUTBGQlF6dEJRVU5pTEZsQlFVa3NVVUZCVVN4WlFVRkJMRU5CUVVNN08wRkJSV0lzVjBGQlJ6dEJRVU5ETEc5Q1FVRlJMRWRCUVVjc1JVRkJSU3hIUVVGSExFTkJRVU1zUlVGQlJTeEhRVUZITEVWQlFVVXNRMEZCUVN4SFFVRkpMRWRCUVVjc1EwRkJRenRCUVVOb1F5eHZRa0ZCVVN4SFFVRkhMRlZCUVZVc1EwRkJReXhSUVVGUkxFVkJRVVVzUjBGQlJ5eEZRVUZGTEVkQlFVY3NRMEZCUXl4SFFVRkhMRVZCUVVVc1EwRkJRenRCUVVNdlF5eG5Ra0ZCU1N4UlFVRlJMRWRCUVVjc1IwRkJSeXhGUVVGRk8wRkJRMmhDTEd0Q1FVRkZMRWRCUVVjc1VVRkJVU3hEUVVGRE8yRkJRMnBDTEUxQlFVMDdRVUZEU0N4clFrRkJSU3hIUVVGSExGRkJRVkVzUTBGQlF6dGhRVU5xUWp0VFFVTktMRkZCUVZFc1NVRkJTU3hEUVVGRExFZEJRVWNzUTBGQlF5eFJRVUZSTEVOQlFVTXNSMEZCUnl4eFFrRkJjVUlzU1VGQlNTeEZRVUZGTEVOQlFVTXNSMEZCUnl3d1FrRkJNRUlzUlVGQlJUczdRVUZGZWtZc1pVRkJUeXhSUVVGUkxFTkJRVU03UzBGRGJrSXNRMEZCUXpzN1FVRkZSaXhSUVVGTkxHOUNRVUZ2UWl4SFFVRkhMRlZCUVVNc1JVRkJSU3hGUVVGRkxFOUJRVThzUlVGQlN6dEJRVU14UXl4WlFVRkpMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU03UVVGRFZpeFpRVUZKTEZsQlFWa3NSMEZCUnl4RFFVRkRMRU5CUVVNN1FVRkRja0lzV1VGQlNTeFJRVUZSTEZsQlFVRXNRMEZCUXpzN1FVRkZZaXhsUVVGUExFTkJRVU1zUjBGQlJ5eHBRa0ZCYVVJc1JVRkJSU3hGUVVGRkxFTkJRVU1zUlVGQlJUdEJRVU12UWl4M1FrRkJXU3hIUVVGSExGRkJRVkVzUTBGQlF5eFBRVUZQTEVWQlFVVXNSMEZCUnl4RlFVRkZMRWRCUVVjc1EwRkJReXhEUVVGRE96dEJRVVV6UXl4blFrRkJTU3haUVVGWkxFdEJRVXNzUjBGQlJ5eEZRVUZGTzBGQlEzUkNMSFZDUVVGUExFOUJRVThzUTBGQlF6dGhRVU5zUWpzN1FVRkZSQ3h2UWtGQlVTeEhRVUZITEZWQlFWVXNRMEZCUXl4UFFVRlBMRVZCUVVVc1IwRkJSeXhGUVVGRkxFZEJRVWNzUTBGQlF5eEhRVUZITEVWQlFVVXNRMEZCUXp0QlFVTTVReXh0UWtGQlR5eEpRVUZKTEZGQlFWRXNSMEZCUnl4WlFVRlpMRU5CUVVNN1UwRkRkRU03TzBGQlJVUXNaVUZCVHl4UFFVRlBMRU5CUVVNN1MwRkRiRUlzUTBGQlF6czdRVUZGUml4UlFVRk5MR2RDUVVGblFpeEhRVUZITEZsQlFVMDdRVUZETTBJc1lVRkJTeXhKUVVGSkxFTkJRVU1zUjBGQlJ5eERRVUZETEVWQlFVVXNRMEZCUXl4SFFVRkhMRzFDUVVGdFFpeEZRVUZGTEVWQlFVVXNRMEZCUXl4RlFVRkZPMEZCUXpGRExIZENRVUZaTEVOQlFVTXNRMEZCUXl4RFFVRkRMRWRCUVVjc1ZVRkJWU3hEUVVGRExFTkJRVU1zUjBGQlJ5eHJRa0ZCYTBJc1JVRkJSU3hIUVVGSExFVkJRVVVzUjBGQlJ5eERRVUZETEVOQlFVTTdVMEZEYkVVN1MwRkRTaXhEUVVGRE96dEJRVVZHTEZGQlFVMHNVVUZCVVN4SFFVRkhMRlZCUVVNc1JVRkJSU3hGUVVGTE8wRkJRM0pDTEZsQlFVa3NZVUZCWVN4SFFVRkhMRWRCUVVjc1EwRkJRenRCUVVONFFpeFpRVUZKTEdGQlFXRXNSMEZCUnl4RFFVRkRMRU5CUVVNN1FVRkRkRUlzV1VGQlNTeFZRVUZWTEVkQlFVY3NiVUpCUVcxQ0xFZEJRVWNzUTBGQlF5eERRVUZETzBGQlEzcERMRmxCUVVrc1NVRkJTU3hIUVVGSExFZEJRVWNzUTBGQlF6dEJRVU5tTEZsQlFVa3NVMEZCVXl4SFFVRkhMRWRCUVVjc1EwRkJRenRCUVVOd1FpeFpRVUZKTEZsQlFWa3NSMEZCUnl4SFFVRkhMRU5CUVVNN08wRkJSWFpDTEdWQlFVOHNZVUZCWVN4SlFVRkpMRlZCUVZVc1NVRkJTU3haUVVGWkxFTkJRVU1zWVVGQllTeERRVUZETEVsQlFVa3NSVUZCUlN4RlFVRkZMRVZCUVVVc1lVRkJZU3hGUVVGRk8wRkJRM1JHTEhsQ1FVRmhMRWxCUVVrc2EwSkJRV3RDTEVOQlFVTTdVMEZEZGtNN08wRkJSVVFzVlVGQlJTeGhRVUZoTEVOQlFVTTdPMEZCUldoQ0xGbEJRVWtzUjBGQlJ5eERRVUZETEVWQlFVVXNSMEZCUnl4WlFVRlpMRU5CUVVNc1lVRkJZU3hEUVVGRExFTkJRVUVzU1VGQlN5eFpRVUZaTEVOQlFVTXNZVUZCWVN4SFFVRkRMRU5CUVVNc1EwRkJReXhIUVVGSExGbEJRVmtzUTBGQlF5eGhRVUZoTEVOQlFVTXNRMEZCUVN4QlFVRkRMRU5CUVVNN1FVRkRNVWNzYVVKQlFWTXNSMEZCUnl4aFFVRmhMRWRCUVVjc1NVRkJTU3hIUVVGSExHdENRVUZyUWl4RFFVRkRPenRCUVVWMFJDeHZRa0ZCV1N4SFFVRkhMRkZCUVZFc1EwRkJReXhUUVVGVExFVkJRVVVzUjBGQlJ5eEZRVUZGTEVkQlFVY3NRMEZCUXpzN08wRkJRVU1zUVVGSE4wTXNXVUZCU1N4WlFVRlpMRWxCUVVrc1owSkJRV2RDTEVWQlFVVTdRVUZEYkVNc2JVSkJRVThzYjBKQlFXOUNMRU5CUVVNc1JVRkJSU3hGUVVGRkxGTkJRVk1zUTBGQlF6czdRVUZCUXl4VFFVVTVReXhOUVVGTkxFbEJRVWtzV1VGQldTeExRVUZMTEVkQlFVY3NSVUZCUlR0QlFVTTNRaXgxUWtGQlR5eFRRVUZUT3p0QlFVRkRMR0ZCUlhCQ0xFMUJRVTA3UVVGRFNDd3lRa0ZCVHl4bFFVRmxMRU5CUVVNc1JVRkJSU3hGUVVGRkxHRkJRV0VzUlVGQlJTeGhRVUZoTEVkQlFVY3NhMEpCUVd0Q0xFTkJRVU1zUTBGQlF6dHBRa0ZEYWtZN1MwRkRTaXhEUVVGRE96dEJRVVZHTEZGQlFVMHNWVUZCVlN4SFFVRkhMRmxCUVUwN1FVRkRja0lzYjBKQlFWa3NSMEZCUnl4SlFVRkpMRU5CUVVNN1FVRkRjRUlzV1VGQlNTeEhRVUZITEVsQlFVa3NSMEZCUnl4SlFVRkpMRWRCUVVjc1NVRkJTU3hIUVVGSExFVkJRVVU3UVVGRE1VSXNORUpCUVdkQ0xFVkJRVVVzUTBGQlF6dFRRVU4wUWp0TFFVTktMRU5CUVVNN08wRkJSVVlzVVVGQlRTeFJRVUZSTEVkQlFVY3NWVUZCUXl4RlFVRkZMRVZCUVVzN1FVRkRja0lzV1VGQlNTeFhRVUZYTEZsQlFVRXNRMEZCUXpzN1FVRkZhRUlzV1VGQlNTeERRVUZETEZsQlFWa3NSVUZCUlR0QlFVTm1MSE5DUVVGVkxFVkJRVVVzUTBGQlF6dFRRVU5vUWpzN08wRkJRVUVzUVVGSFJDeFpRVUZKTEVkQlFVY3NTMEZCU3l4SFFVRkhMRWxCUVVrc1IwRkJSeXhMUVVGTExFZEJRVWNzUlVGQlJUdEJRVU0xUWl4MVFrRkJWeXhIUVVGSExFVkJRVVU3T3p0QlFVRkRMRk5CUjNCQ0xFMUJRVTBzU1VGQlNTeEZRVUZGTEV0QlFVc3NRMEZCUXl4RlFVRkZPMEZCUTJwQ0xESkNRVUZYTEVkQlFVY3NRMEZCUXpzN08wRkJRVU1zWVVGSGJrSXNUVUZCVFN4SlFVRkpMRVZCUVVVc1MwRkJTeXhEUVVGRExFVkJRVVU3UVVGRGFrSXNLMEpCUVZjc1IwRkJSeXhEUVVGRExFTkJRVU03YVVKQlJXNUNMRTFCUVUwN1FVRkRTQ3dyUWtGQlZ5eEhRVUZITEZWQlFWVXNRMEZCUXl4UlFVRlJMRU5CUVVNc1JVRkJSU3hEUVVGRExFVkJRVVVzUjBGQlJ5eEZRVUZGTEVkQlFVY3NRMEZCUXl4RFFVRkRPMmxDUVVOd1JEczdRVUZGUkN4bFFVRlBMRmRCUVZjc1EwRkJRenRMUVVOMFFpeERRVUZET3p0QlFVVkdMRmRCUVU4c1VVRkJVU3hEUVVGRE8wTkJRMjVDSWl3aVptbHNaU0k2SW1OeVpXRjBaUzFpWlhwcFpYSXVhbk1pTENKemIzVnlZMlZTYjI5MElqb2lMMVZ6WlhKekwwMWhkSFJRWlhKeWVTOVRhWFJsY3k5d2IzQnRiM1JwYjI0aUxDSnpiM1Z5WTJWelEyOXVkR1Z1ZENJNld5SXZLbHh1SUNBZ0lFSmxlbWxsY2lCbWRXNWpkR2x2YmlCblpXNWxjbUYwYjNKY2JpQWdJQ0FnSUNBZ1hHNGdJQ0FnUjJIRHEzUmhiaUJTWlc1aGRXUmxZWFVuY3lCQ1pYcHBaWEpGWVhOcGJtZGNiaUFnSUNCb2RIUndjem92TDJkcGRHaDFZaTVqYjIwdlozSmxMMkpsZW1sbGNpMWxZWE5wYm1jdllteHZZaTl0WVhOMFpYSXZhVzVrWlhndWFuTWdJRnh1SUNBZ0lHaDBkSEJ6T2k4dloybDBhSFZpTG1OdmJTOW5jbVV2WW1WNmFXVnlMV1ZoYzJsdVp5OWliRzlpTDIxaGMzUmxjaTlNU1VORlRsTkZYRzRnSUNBZ1dXOTFKM0psSUdFZ2FHVnliMXh1SUNBZ0lGeHVJQ0FnSUZWelpWeHVJQ0FnSUZ4dUlDQWdJQ0FnSUNCMllYSWdaV0Z6WlU5MWRDQTlJRzVsZHlCQ1pYcHBaWElvTGpFM0xDNDJOeXd1T0RNc0xqWTNLU3hjYmlBZ0lDQWdJQ0FnSUNBZ0lIZ2dQU0JsWVhObFQzVjBLREF1TlNrN0lDOHZJSEpsZEhWeWJuTWdNQzQyTWpjdUxpNWNiaW92WEc1Y2JpOHZJRU52Ym5OMFlXNTBjMXh1WTI5dWMzUWdUa1ZYVkU5T1gwbFVSVkpCVkVsUFRsTWdQU0E0TzF4dVkyOXVjM1FnVGtWWFZFOU9YMDFKVGw5VFRFOVFSU0E5SURBdU1EQXhPMXh1WTI5dWMzUWdVMVZDUkVsV1NWTkpUMDVmVUZKRlEwbFRTVTlPSUQwZ01DNHdNREF3TURBeE8xeHVZMjl1YzNRZ1UxVkNSRWxXU1ZOSlQwNWZUVUZZWDBsVVJWSkJWRWxQVGxNZ1BTQXhNRHRjYm1OdmJuTjBJRXRmVTFCTVNVNUZYMVJCUWt4RlgxTkpXa1VnUFNBeE1UdGNibU52Ym5OMElFdGZVMEZOVUV4RlgxTlVSVkJmVTBsYVJTQTlJREV1TUNBdklDaExYMU5RVEVsT1JWOVVRVUpNUlY5VFNWcEZJQzBnTVM0d0tUdGNibU52Ym5OMElFWk1UMEZVWHpNeVgxTlZVRkJQVWxSRlJDQTlJQ2gwZVhCbGIyWWdSbXh2WVhRek1rRnljbUY1SUNFOVBTQW5kVzVrWldacGJtVmtKeWs3WEc1Y2JpOHZJRWhsYkhCbGNpQnRaWFJvYjJSelhHNWpiMjV6ZENCaElEMGdLR0V4TENCaE1pa2dQVDRnTVM0d0lDMGdNeTR3SUNvZ1lUSWdLeUF6TGpBZ0tpQmhNVHRjYm1OdmJuTjBJR0lnUFNBb1lURXNJR0V5S1NBOVBpQXpMakFnS2lCaE1pQXRJRFl1TUNBcUlHRXhPMXh1WTI5dWMzUWdZeUE5SUNoaE1Ta2dQVDRnTXk0d0lDb2dZVEU3WEc1Y2JtTnZibk4wSUdkbGRGTnNiM0JsSUQwZ0tIUXNJR0V4TENCaE1pa2dQVDRnTXk0d0lDb2dZU2hoTVN3Z1lUSXBJQ29nZENBcUlIUWdLeUF5TGpBZ0tpQmlLR0V4TENCaE1pa2dLaUIwSUNzZ1l5aGhNU2s3WEc1Y2JtTnZibk4wSUdOaGJHTkNaWHBwWlhJZ1BTQW9kQ3dnWVRFc0lHRXlLU0E5UGlBb0tHRW9ZVEVzSUdFeUtTQXFJSFFnS3lCaUtHRXhMQ0JoTWlrcElDb2dkQ0FySUdNb1lURXBLU0FxSUhRN1hHNWNiaThxWEc0Z0lDQWdRM0psWVhSbElHRWdZM1ZpYVdNZ1ltVjZhV1Z5SUhKbGMyOXNkbVZ5WEc0cUwxeHVaWGh3YjNKMElHUmxabUYxYkhRZ1puVnVZM1JwYjI0Z1kzVmlhV05DWlhwcFpYSW9iVmd4TENCdFdURXNJRzFZTWl3Z2JWa3lLU0I3WEc0Z0lDQWdZMjl1YzNRZ2MyRnRjR3hsVm1Gc2RXVnpJRDBnUmt4UFFWUmZNekpmVTFWUVVFOVNWRVZFSUQ4Z2JtVjNJRVpzYjJGME16SkJjbkpoZVNoTFgxTlFURWxPUlY5VVFVSk1SVjlUU1ZwRktTQTZJRzVsZHlCQmNuSmhlU2hMWDFOUVRFbE9SVjlVUVVKTVJWOVRTVnBGS1R0Y2JpQWdJQ0JzWlhRZ1gzQnlaV052YlhCMWRHVmtJRDBnWm1Gc2MyVTdYRzVjYmlBZ0lDQmpiMjV6ZENCaWFXNWhjbmxUZFdKa2FYWnBaR1VnUFNBb1lWZ3NJR0ZCTENCaFFpa2dQVDRnZTF4dUlDQWdJQ0FnSUNCc1pYUWdhU0E5SURBN1hHNGdJQ0FnSUNBZ0lHeGxkQ0JqZFhKeVpXNTBXRHRjYmlBZ0lDQWdJQ0FnYkdWMElHTjFjbkpsYm5SVU8xeHVYRzRnSUNBZ0lDQWdJR1J2SUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJR04xY25KbGJuUlVJRDBnWVVFZ0t5QW9ZVUlnTFNCaFFTa2dMeUF5TGpBN1hHNGdJQ0FnSUNBZ0lDQWdJQ0JqZFhKeVpXNTBXQ0E5SUdOaGJHTkNaWHBwWlhJb1kzVnljbVZ1ZEZRc0lHMVlNU3dnYlZneUtTQXRJR0ZZTzF4dUlDQWdJQ0FnSUNBZ0lDQWdhV1lnS0dOMWNuSmxiblJZSUQ0Z01DNHdLU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnWVVJZ1BTQmpkWEp5Wlc1MFZEdGNiaUFnSUNBZ0lDQWdJQ0FnSUgwZ1pXeHpaU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnWVVFZ1BTQmpkWEp5Wlc1MFZEdGNiaUFnSUNBZ0lDQWdJQ0FnSUgxY2JpQWdJQ0FnSUNBZ2ZTQjNhR2xzWlNBb1RXRjBhQzVoWW5Nb1kzVnljbVZ1ZEZncElENGdVMVZDUkVsV1NWTkpUMDVmVUZKRlEwbFRTVTlPSUNZbUlDc3JhU0E4SUZOVlFrUkpWa2xUU1U5T1gwMUJXRjlKVkVWU1FWUkpUMDVUS1R0Y2JseHVJQ0FnSUNBZ0lDQnlaWFIxY200Z1kzVnljbVZ1ZEZRN1hHNGdJQ0FnZlR0Y2JseHVJQ0FnSUdOdmJuTjBJRzVsZDNSdmJsSmhjR2h6YjI1SmRHVnlZWFJsSUQwZ0tHRllMQ0JoUjNWbGMzTlVLU0E5UGlCN1hHNGdJQ0FnSUNBZ0lHeGxkQ0JwSUQwZ01EdGNiaUFnSUNBZ0lDQWdiR1YwSUdOMWNuSmxiblJUYkc5d1pTQTlJREE3WEc0Z0lDQWdJQ0FnSUd4bGRDQmpkWEp5Wlc1MFdEdGNibHh1SUNBZ0lDQWdJQ0JtYjNJZ0tEc2dhU0E4SUU1RlYxUlBUbDlKVkVWU1FWUkpUMDVUT3lBcksya3BJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lHTjFjbkpsYm5SVGJHOXdaU0E5SUdkbGRGTnNiM0JsS0dGSGRXVnpjMVFzSUcxWU1Td2diVmd5S1R0Y2JpQWdJQ0FnSUNBZ0lDQWdJRnh1SUNBZ0lDQWdJQ0FnSUNBZ2FXWWdLR04xY25KbGJuUlRiRzl3WlNBOVBUMGdNQzR3S1NCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2NtVjBkWEp1SUdGSGRXVnpjMVE3WEc0Z0lDQWdJQ0FnSUNBZ0lDQjlYRzRnSUNBZ0lDQWdJQ0FnSUNCY2JpQWdJQ0FnSUNBZ0lDQWdJR04xY25KbGJuUllJRDBnWTJGc1kwSmxlbWxsY2loaFIzVmxjM05VTENCdFdERXNJRzFZTWlrZ0xTQmhXRHRjYmlBZ0lDQWdJQ0FnSUNBZ0lHRkhkV1Z6YzFRZ0xUMGdZM1Z5Y21WdWRGZ2dMeUJqZFhKeVpXNTBVMnh2Y0dVN1hHNGdJQ0FnSUNBZ0lIMWNiaUFnSUNBZ0lDQWdYRzRnSUNBZ0lDQWdJSEpsZEhWeWJpQmhSM1ZsYzNOVU8xeHVJQ0FnSUgwN1hHNWNiaUFnSUNCamIyNXpkQ0JqWVd4alUyRnRjR3hsVm1Gc2RXVnpJRDBnS0NrZ1BUNGdlMXh1SUNBZ0lDQWdJQ0JtYjNJZ0tHeGxkQ0JwSUQwZ01Ec2dhU0E4SUV0ZlUxQk1TVTVGWDFSQlFreEZYMU5KV2tVN0lDc3JhU2tnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdjMkZ0Y0d4bFZtRnNkV1Z6VzJsZElEMGdZMkZzWTBKbGVtbGxjaWhwSUNvZ1MxOVRRVTFRVEVWZlUxUkZVRjlUU1ZwRkxDQnRXREVzSUcxWU1pazdYRzRnSUNBZ0lDQWdJSDFjYmlBZ0lDQjlPMXh1WEc0Z0lDQWdZMjl1YzNRZ1oyVjBWRVp2Y2xnZ1BTQW9ZVmdwSUQwK0lIdGNiaUFnSUNBZ0lDQWdiR1YwSUdsdWRHVnlkbUZzVTNSaGNuUWdQU0F3TGpBN1hHNGdJQ0FnSUNBZ0lHeGxkQ0JqZFhKeVpXNTBVMkZ0Y0d4bElEMGdNVHRjYmlBZ0lDQWdJQ0FnYkdWMElHeGhjM1JUWVcxd2JHVWdQU0JMWDFOUVRFbE9SVjlVUVVKTVJWOVRTVnBGSUMwZ01UdGNiaUFnSUNBZ0lDQWdiR1YwSUdScGMzUWdQU0F3TGpBN1hHNGdJQ0FnSUNBZ0lHeGxkQ0JuZFdWemMwWnZjbFFnUFNBd0xqQTdYRzRnSUNBZ0lDQWdJR3hsZENCcGJtbDBhV0ZzVTJ4dmNHVWdQU0F3TGpBN1hHNGdJQ0FnSUNBZ0lDQWdJQ0JjYmlBZ0lDQWdJQ0FnWm05eUlDZzdJR04xY25KbGJuUlRZVzF3YkdVZ0lUMGdiR0Z6ZEZOaGJYQnNaU0FtSmlCellXMXdiR1ZXWVd4MVpYTmJZM1Z5Y21WdWRGTmhiWEJzWlYwZ1BEMGdZVmc3SUNzclkzVnljbVZ1ZEZOaGJYQnNaU2tnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdhVzUwWlhKMllXeFRkR0Z5ZENBclBTQkxYMU5CVFZCTVJWOVRWRVZRWDFOSldrVTdYRzRnSUNBZ0lDQWdJSDFjYmlBZ0lDQWdJQ0FnWEc0Z0lDQWdJQ0FnSUMwdFkzVnljbVZ1ZEZOaGJYQnNaVHRjYmlBZ0lDQWdJQ0FnWEc0Z0lDQWdJQ0FnSUdScGMzUWdQU0FvWVZnZ0xTQnpZVzF3YkdWV1lXeDFaWE5iWTNWeWNtVnVkRk5oYlhCc1pWMHBJQzhnS0hOaGJYQnNaVlpoYkhWbGMxdGpkWEp5Wlc1MFUyRnRjR3hsS3pGZElDMGdjMkZ0Y0d4bFZtRnNkV1Z6VzJOMWNuSmxiblJUWVcxd2JHVmRLVHRjYmlBZ0lDQWdJQ0FnWjNWbGMzTkdiM0pVSUQwZ2FXNTBaWEoyWVd4VGRHRnlkQ0FySUdScGMzUWdLaUJMWDFOQlRWQk1SVjlUVkVWUVgxTkpXa1U3WEc0Z0lDQWdJQ0FnSUZ4dUlDQWdJQ0FnSUNCcGJtbDBhV0ZzVTJ4dmNHVWdQU0JuWlhSVGJHOXdaU2huZFdWemMwWnZjbFFzSUcxWU1Td2diVmd5S1R0Y2JpQWdJQ0FnSUNBZ1hHNGdJQ0FnSUNBZ0lDOHZJRWxtSUhOc2IzQmxJR2x6SUdkeVpXRjBaWElnZEdoaGJpQnRhVzVjYmlBZ0lDQWdJQ0FnYVdZZ0tHbHVhWFJwWVd4VGJHOXdaU0ErUFNCT1JWZFVUMDVmVFVsT1gxTk1UMUJGS1NCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0J5WlhSMWNtNGdibVYzZEc5dVVtRndhSE52YmtsMFpYSmhkR1VvWVZnc0lHZDFaWE56Um05eVZDazdYRzRnSUNBZ0lDQWdJQzh2SUZOc2IzQmxJR2x6SUdWeGRXRnNJSFJ2SUcxcGJseHVJQ0FnSUNBZ0lDQjlJR1ZzYzJVZ2FXWWdLR2x1YVhScFlXeFRiRzl3WlNBOVBUMGdNQzR3S1NCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0J5WlhSMWNtNGdaM1ZsYzNOR2IzSlVPMXh1SUNBZ0lDQWdJQ0F2THlCVGJHOXdaU0JwY3lCc1pYTnpJSFJvWVc0Z2JXbHVYRzRnSUNBZ0lDQWdJSDBnWld4elpTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNCeVpYUjFjbTRnWW1sdVlYSjVVM1ZpWkdsMmFXUmxLR0ZZTENCcGJuUmxjblpoYkZOMFlYSjBMQ0JwYm5SbGNuWmhiRk4wWVhKMElDc2dTMTlUUVUxUVRFVmZVMVJGVUY5VFNWcEZLVHRjYmlBZ0lDQWdJQ0FnZlZ4dUlDQWdJSDA3WEc1Y2JpQWdJQ0JqYjI1emRDQndjbVZqYjIxd2RYUmxJRDBnS0NrZ1BUNGdlMXh1SUNBZ0lDQWdJQ0JmY0hKbFkyOXRjSFYwWldRZ1BTQjBjblZsTzF4dUlDQWdJQ0FnSUNCcFppQW9iVmd4SUNFOUlHMVpNU0I4ZkNCdFdESWdJVDBnYlZreUtTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNCallXeGpVMkZ0Y0d4bFZtRnNkV1Z6S0NrN1hHNGdJQ0FnSUNBZ0lIMWNiaUFnSUNCOU8xeHVYRzRnSUNBZ1kyOXVjM1FnY21WemIyeDJaWElnUFNBb1lWZ3BJRDArSUh0Y2JpQWdJQ0FnSUNBZ2JHVjBJSEpsZEhWeWJsWmhiSFZsTzF4dVhHNGdJQ0FnSUNBZ0lHbG1JQ2doWDNCeVpXTnZiWEIxZEdWa0tTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNCd2NtVmpiMjF3ZFhSbEtDazdYRzRnSUNBZ0lDQWdJSDFjYmlBZ0lDQWdJQ0FnWEc0Z0lDQWdJQ0FnSUM4dklFbG1JR3hwYm1WaGNpQm5jbUZrYVdWdWRDd2djbVYwZFhKdUlGZ2dZWE1nVkZ4dUlDQWdJQ0FnSUNCcFppQW9iVmd4SUQwOVBTQnRXVEVnSmlZZ2JWZ3lJRDA5UFNCdFdUSXBJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lISmxkSFZ5YmxaaGJIVmxJRDBnWVZnN1hHNGdJQ0FnSUNBZ0lDQWdJQ0JjYmlBZ0lDQWdJQ0FnTHk4Z1NXWWdZWFFnYzNSaGNuUXNJSEpsZEhWeWJpQXdYRzRnSUNBZ0lDQWdJSDBnWld4elpTQnBaaUFvWVZnZ1BUMDlJREFwSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJSEpsZEhWeWJsWmhiSFZsSUQwZ01EdGNiaUFnSUNBZ0lDQWdJQ0FnSUZ4dUlDQWdJQ0FnSUNBdkx5QkpaaUJoZENCbGJtUXNJSEpsZEhWeWJpQXhYRzRnSUNBZ0lDQWdJSDBnWld4elpTQnBaaUFvWVZnZ1BUMDlJREVwSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJSEpsZEhWeWJsWmhiSFZsSUQwZ01UdGNibHh1SUNBZ0lDQWdJQ0I5SUdWc2MyVWdlMXh1SUNBZ0lDQWdJQ0FnSUNBZ2NtVjBkWEp1Vm1Gc2RXVWdQU0JqWVd4alFtVjZhV1Z5S0dkbGRGUkdiM0pZS0dGWUtTd2diVmt4TENCdFdUSXBPMXh1SUNBZ0lDQWdJQ0I5WEc0Z0lDQWdJQ0FnSUZ4dUlDQWdJQ0FnSUNCeVpYUjFjbTRnY21WMGRYSnVWbUZzZFdVN1hHNGdJQ0FnZlR0Y2JseHVJQ0FnSUhKbGRIVnliaUJ5WlhOdmJIWmxjanRjYm4xY2JpSmRmUT09XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9hY3Rpb25zL2Vhc2luZy9jcmVhdGUtYmV6aWVyLmpzXG4gKiogbW9kdWxlIGlkID0gNTBcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbi8qXG4gICAgRGV0ZWN0IGFuZCBsb2FkIGFuIGFwcHJvcHJpYXRlIGNsb2NrIHNldHRpbmcgZm9yIHRoZSBlbnZpcm9ubWVudFxuKi9cblxudmFyIGhhc1JBRiA9IHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUgPyB0cnVlIDogZmFsc2U7XG5cbnZhciB0aWNrID0gdW5kZWZpbmVkO1xuXG5pZiAoaGFzUkFGKSB7XG4gICAgdGljayA9IGZ1bmN0aW9uIChjYWxsYmFjaykge1xuICAgICAgICByZXR1cm4gd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZShjYWxsYmFjayk7XG4gICAgfTtcbn0gZWxzZSB7XG4gICAgKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgLypcbiAgICAgICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSBwb2x5ZmlsbFxuICAgICAgICAgICAgXG4gICAgICAgICAgICBGb3IgSUU4LzkgRmxpbnN0b25lcyBhbmQgbm9uLWJyb3dzZXIgZW52aXJvbm1lbnRzXG4gICAgICAgICAgICAgVGFrZW4gZnJvbSBQYXVsIElyaXNoLiBXZSd2ZSBzdHJpcHBlZCBvdXQgY2FuY2VsQW5pbWF0aW9uRnJhbWUgY2hlY2tzIGJlY2F1c2Ugd2UgZG9uJ3QgZm94IHdpdGggdGhhdFxuICAgICAgICAgICAgXG4gICAgICAgICAgICBodHRwOi8vcGF1bGlyaXNoLmNvbS8yMDExL3JlcXVlc3RhbmltYXRpb25mcmFtZS1mb3Itc21hcnQtYW5pbWF0aW5nL1xuICAgICAgICAgICAgaHR0cDovL215Lm9wZXJhLmNvbS9lbW9sbGVyL2Jsb2cvMjAxMS8xMi8yMC9yZXF1ZXN0YW5pbWF0aW9uZnJhbWUtZm9yLXNtYXJ0LWVyLWFuaW1hdGluZ1xuICAgICAgICAgICAgIFxuICAgICAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lIHBvbHlmaWxsIGJ5IEVyaWsgTcO2bGxlci4gZml4ZXMgZnJvbSBQYXVsIElyaXNoIGFuZCBUaW5vIFppamRlbFxuICAgICAgICAgICAgIFxuICAgICAgICAgICAgTUlUIGxpY2Vuc2VcbiAgICAgICAgKi9cbiAgICAgICAgdmFyIGxhc3RUaW1lID0gMDtcblxuICAgICAgICB0aWNrID0gZnVuY3Rpb24gKGNhbGxiYWNrKSB7XG4gICAgICAgICAgICB2YXIgY3VycmVudFRpbWUgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcbiAgICAgICAgICAgIHZhciB0aW1lVG9DYWxsID0gTWF0aC5tYXgoMCwgMTYgLSAoY3VycmVudFRpbWUgLSBsYXN0VGltZSkpO1xuXG4gICAgICAgICAgICBsYXN0VGltZSA9IGN1cnJlbnRUaW1lICsgdGltZVRvQ2FsbDtcblxuICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGNhbGxiYWNrKGxhc3RUaW1lKTtcbiAgICAgICAgICAgIH0sIHRpbWVUb0NhbGwpO1xuICAgICAgICB9O1xuICAgIH0pKCk7XG59XG5cbmV4cG9ydHMuZGVmYXVsdCA9IHRpY2s7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5OeVl5OXdjbTlqWlhOekwzUnBZMnN1YW5NaVhTd2libUZ0WlhNaU9sdGRMQ0p0WVhCd2FXNW5jeUk2SWpzN096czdPenRCUVVsQkxFbEJRVTBzVFVGQlRTeEhRVUZITEVGQlFVTXNUMEZCVHl4TlFVRk5MRXRCUVVzc1YwRkJWeXhKUVVGSkxFMUJRVTBzUTBGQlF5eHhRa0ZCY1VJc1IwRkJTU3hKUVVGSkxFZEJRVWNzUzBGQlN5eERRVUZET3p0QlFVVTVSaXhKUVVGSkxFbEJRVWtzV1VGQlFTeERRVUZET3p0QlFVVlVMRWxCUVVrc1RVRkJUU3hGUVVGRk8wRkJRMUlzVVVGQlNTeEhRVUZITEZWQlFVTXNVVUZCVVR0bFFVRkxMRTFCUVUwc1EwRkJReXh4UWtGQmNVSXNRMEZCUXl4UlFVRlJMRU5CUVVNN1MwRkJRU3hEUVVGRE8wTkJSUzlFTEUxQlFVMDdPenM3T3pzN096czdPenM3T3p0QlFXVklMRmxCUVVrc1VVRkJVU3hIUVVGSExFTkJRVU1zUTBGQlF6czdRVUZGYWtJc1dVRkJTU3hIUVVGSExGVkJRVU1zVVVGQlVTeEZRVUZMTzBGQlEycENMR2RDUVVGTkxGZEJRVmNzUjBGQlJ5eEpRVUZKTEVsQlFVa3NSVUZCUlN4RFFVRkRMRTlCUVU4c1JVRkJSU3hEUVVGRE8wRkJRM3BETEdkQ1FVRk5MRlZCUVZVc1IwRkJSeXhKUVVGSkxFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTXNSVUZCUlN4RlFVRkZMRWxCUVVrc1YwRkJWeXhIUVVGSExGRkJRVkVzUTBGQlFTeEJRVUZETEVOQlFVTXNRMEZCUXpzN1FVRkZPVVFzYjBKQlFWRXNSMEZCUnl4WFFVRlhMRWRCUVVjc1ZVRkJWU3hEUVVGRE96dEJRVVZ3UXl4elFrRkJWU3hEUVVGRE8zVkNRVUZOTEZGQlFWRXNRMEZCUXl4UlFVRlJMRU5CUVVNN1lVRkJRU3hGUVVGRkxGVkJRVlVzUTBGQlF5eERRVUZETzFOQlEzQkVMRU5CUVVNN08wTkJRMHc3TzJ0Q1FVVmpMRWxCUVVraUxDSm1hV3hsSWpvaWRHbGpheTVxY3lJc0luTnZkWEpqWlZKdmIzUWlPaUl2VlhObGNuTXZUV0YwZEZCbGNuSjVMMU5wZEdWekwzQnZjRzF2ZEdsdmJpSXNJbk52ZFhKalpYTkRiMjUwWlc1MElqcGJJaThxWEc0Z0lDQWdSR1YwWldOMElHRnVaQ0JzYjJGa0lHRnVJR0Z3Y0hKdmNISnBZWFJsSUdOc2IyTnJJSE5sZEhScGJtY2dabTl5SUhSb1pTQmxiblpwY205dWJXVnVkRnh1S2k5Y2JseHVZMjl1YzNRZ2FHRnpVa0ZHSUQwZ0tIUjVjR1Z2WmlCM2FXNWtiM2NnSVQwOUlDZDFibVJsWm1sdVpXUW5JQ1ltSUhkcGJtUnZkeTV5WlhGMVpYTjBRVzVwYldGMGFXOXVSbkpoYldVcElEOGdkSEoxWlNBNklHWmhiSE5sTzF4dVhHNXNaWFFnZEdsamF6dGNibHh1YVdZZ0tHaGhjMUpCUmlrZ2UxeHVJQ0FnSUhScFkyc2dQU0FvWTJGc2JHSmhZMnNwSUQwK0lIZHBibVJ2ZHk1eVpYRjFaWE4wUVc1cGJXRjBhVzl1Um5KaGJXVW9ZMkZzYkdKaFkyc3BPMXh1WEc1OUlHVnNjMlVnZTF4dUlDQWdJQzhxWEc0Z0lDQWdJQ0FnSUhKbGNYVmxjM1JCYm1sdFlYUnBiMjVHY21GdFpTQndiMng1Wm1sc2JGeHVJQ0FnSUNBZ0lDQmNiaUFnSUNBZ0lDQWdSbTl5SUVsRk9DODVJRVpzYVc1emRHOXVaWE1nWVc1a0lHNXZiaTFpY205M2MyVnlJR1Z1ZG1seWIyNXRaVzUwYzF4dVhHNGdJQ0FnSUNBZ0lGUmhhMlZ1SUdaeWIyMGdVR0YxYkNCSmNtbHphQzRnVjJVbmRtVWdjM1J5YVhCd1pXUWdiM1YwSUdOaGJtTmxiRUZ1YVcxaGRHbHZia1p5WVcxbElHTm9aV05yY3lCaVpXTmhkWE5sSUhkbElHUnZiaWQwSUdadmVDQjNhWFJvSUhSb1lYUmNiaUFnSUNBZ0lDQWdYRzRnSUNBZ0lDQWdJR2gwZEhBNkx5OXdZWFZzYVhKcGMyZ3VZMjl0THpJd01URXZjbVZ4ZFdWemRHRnVhVzFoZEdsdmJtWnlZVzFsTFdadmNpMXpiV0Z5ZEMxaGJtbHRZWFJwYm1jdlhHNGdJQ0FnSUNBZ0lHaDBkSEE2THk5dGVTNXZjR1Z5WVM1amIyMHZaVzF2Ykd4bGNpOWliRzluTHpJd01URXZNVEl2TWpBdmNtVnhkV1Z6ZEdGdWFXMWhkR2x2Ym1aeVlXMWxMV1p2Y2kxemJXRnlkQzFsY2kxaGJtbHRZWFJwYm1kY2JpQWdJQ0FnSUNBZ0lGeHVJQ0FnSUNBZ0lDQnlaWEYxWlhOMFFXNXBiV0YwYVc5dVJuSmhiV1VnY0c5c2VXWnBiR3dnWW5rZ1JYSnBheUJOdzdac2JHVnlMaUJtYVhobGN5Qm1jbTl0SUZCaGRXd2dTWEpwYzJnZ1lXNWtJRlJwYm04Z1dtbHFaR1ZzWEc0Z0lDQWdJQ0FnSUNCY2JpQWdJQ0FnSUNBZ1RVbFVJR3hwWTJWdWMyVmNiaUFnSUNBcUwxeHVJQ0FnSUd4bGRDQnNZWE4wVkdsdFpTQTlJREE3WEc1Y2JpQWdJQ0IwYVdOcklEMGdLR05oYkd4aVlXTnJLU0E5UGlCN1hHNGdJQ0FnSUNBZ0lHTnZibk4wSUdOMWNuSmxiblJVYVcxbElEMGdibVYzSUVSaGRHVW9LUzVuWlhSVWFXMWxLQ2s3WEc0Z0lDQWdJQ0FnSUdOdmJuTjBJSFJwYldWVWIwTmhiR3dnUFNCTllYUm9MbTFoZUNnd0xDQXhOaUF0SUNoamRYSnlaVzUwVkdsdFpTQXRJR3hoYzNSVWFXMWxLU2s3WEc1Y2JpQWdJQ0FnSUNBZ2JHRnpkRlJwYldVZ1BTQmpkWEp5Wlc1MFZHbHRaU0FySUhScGJXVlViME5oYkd3N1hHNWNiaUFnSUNBZ0lDQWdjMlYwVkdsdFpXOTFkQ2dvS1NBOVBpQmpZV3hzWW1GamF5aHNZWE4wVkdsdFpTa3NJSFJwYldWVWIwTmhiR3dwTzF4dUlDQWdJSDA3WEc1OVhHNWNibVY0Y0c5eWRDQmtaV1poZFd4MElIUnBZMnM3SWwxOVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvcHJvY2Vzcy90aWNrLmpzXG4gKiogbW9kdWxlIGlkID0gNTFcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuLy8gW2ludF06IEluY3JlbWVudGVkIGZvciBlYWNoIG5ldyBydW5uaW5nIHByb2Nlc3NcbnZhciBjdXJyZW50UHJvY2Vzc0lkID0gMDtcblxuLy8gW2ludF06IE51bWJlciBvZiBhbGwgcnVubmluZyBwcm9jZXNzZXNcbnZhciB0b3RhbFJ1bm5pbmdDb3VudCA9IDA7XG5cbi8vIFtpbnRdOiBOdW1iZXIgb2YgcnVubmluZyBwcm9jZXNzZXMgZXhjbHVkaW5nIGJhY2tncm91bmQgcHJvY2Vzc2VzXG52YXIgbm9uQmFja2dyb3VuZFJ1bm5pbmdDb3VudCA9IDA7XG5cbi8vIFthcnJheV06IEFycmF5IG9mIHJ1bm5pbmcgcHJvY2VzcyBJRHNcbnZhciBydW5uaW5nSWRzID0gW107XG5cbi8vIFtvYmplY3RdOiBNYXAgb2YgcnVubmluZyBwcm9jZXNzZXNcbnZhciBhY3RpdmVQcm9jZXNzZXMgPSB7fTtcblxuLy8gW2FycmF5XTogQXJyYXkgb2YgcHJvY2VzcyBJRHMgcXVldWVkIGZvciBhY3RpdmF0aW9uXG52YXIgYWN0aXZhdGVRdWV1ZSA9IFtdO1xuXG4vLyBbYXJyYXldOiBBcnJheSBvZiBwcm9jZXNzIElEcyBxdWV1ZWQgZm9yIGRlYWN0aXZhdGlvblxudmFyIGRlYWN0aXZhdGVRdWV1ZSA9IFtdO1xuXG4vKlxuICAgIFVwZGF0ZSBhY3RpdmF0ZS9kZWFjdGl2YXRlIHF1ZXVlc1xuXG4gICAgQHBhcmFtIFtudW1iZXJdXG4gICAgQHBhcmFtIFthcnJheV1cbiAgICBAcGFyYW0gW2FycmF5XVxuKi9cbnZhciB1cGRhdGVRdWV1ZXMgPSBmdW5jdGlvbiAoaWQsIGluTGlzdCwgb3V0TGlzdCkge1xuICAgIHZhciBpblBvc2l0aW9uID0gaW5MaXN0LmluZGV4T2YoaWQpO1xuICAgIHZhciBvdXRQb3NpdGlvbiA9IG91dExpc3QuaW5kZXhPZihpZCk7XG5cbiAgICBpZiAoaW5Qb3NpdGlvbiA9PT0gLTEpIHtcbiAgICAgICAgaW5MaXN0LnB1c2goaWQpO1xuICAgIH1cblxuICAgIGlmIChvdXRQb3NpdGlvbiA+IC0xKSB7XG4gICAgICAgIG91dExpc3Quc3BsaWNlKG91dFBvc2l0aW9uLCAxKTtcbiAgICB9XG59O1xuXG4vKlxuICAgIFVwZGF0ZSBydW5uaW5nXG5cbiAgICBbYm9vbGVhbl06IGB0cnVlYCB0byBhZGRcbiAgICBbYm9vbGVhbl06IGB0cnVlYCBpZiBsYXp5XG4qL1xudmFyIHVwZGF0ZVJ1bm5pbmdDb3VudCA9IGZ1bmN0aW9uIChhZGQsIGlzTGF6eSkge1xuICAgIHZhciBtb2RpZnkgPSBhZGQgPyAxIDogLTE7XG5cbiAgICB0b3RhbFJ1bm5pbmdDb3VudCArPSBtb2RpZnk7XG5cbiAgICBpZiAoIWlzTGF6eSkge1xuICAgICAgICBub25CYWNrZ3JvdW5kUnVubmluZ0NvdW50ICs9IG1vZGlmeTtcbiAgICB9XG59O1xuXG5leHBvcnRzLmRlZmF1bHQgPSB7XG4gICAgYWN0aXZlUHJvY2Vzc2VzOiBhY3RpdmVQcm9jZXNzZXMsXG5cbiAgICAvLyBBY3RpdmF0ZSBhIHByb2Nlc3NcbiAgICBhY3RpdmF0ZTogZnVuY3Rpb24gKGlkLCBwcm9jZXNzKSB7XG4gICAgICAgIGFjdGl2ZVByb2Nlc3Nlc1tpZF0gPSBwcm9jZXNzO1xuICAgICAgICBwcm9jZXNzLmlzQWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgdXBkYXRlUXVldWVzKGlkLCBhY3RpdmF0ZVF1ZXVlLCBkZWFjdGl2YXRlUXVldWUpO1xuICAgIH0sXG5cbiAgICAvLyBEZWFjdGl2YXRlIGEgcHJvY2Vzc1xuICAgIGRlYWN0aXZhdGU6IGZ1bmN0aW9uIChpZCkge1xuICAgICAgICBwcm9jZXNzLmlzQWN0aXZlID0gZmFsc2U7XG4gICAgICAgIHVwZGF0ZVF1ZXVlcyhpZCwgZGVhY3RpdmF0ZVF1ZXVlLCBhY3RpdmF0ZVF1ZXVlKTtcbiAgICB9LFxuXG4gICAgLy8gTnVtYmVyIGJhY2tncm91bmQgcHJvY2Vzc2VzXG4gICAgZ2V0Tm9uQmFja2dyb3VuZFJ1bm5pbmdDb3VudDogZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gbm9uQmFja2dyb3VuZFJ1bm5pbmdDb3VudDtcbiAgICB9LFxuXG4gICAgLy8gSW5jcmVtZW50IGN1cnJlbnQgcHJvY2VzcyBJRCBhbmQgcmV0dXJuXG4gICAgZ2V0UHJvY2Vzc0lkOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBjdXJyZW50UHJvY2Vzc0lkKys7XG4gICAgfSxcblxuICAgIC8vIFJlc29sdmUgYWN0aXZhdGUvZGVhY3RpdmF0ZSBwcm9jZXNzZXMgYW5kIHJldHVybiBhY3RpdmUgaWRzXG4gICAgZ2V0QWN0aXZlSWRzOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIC8qXG4gICAgICAgICAgICBQcm9jZXNzIGRlYWN0aXZhdGUgcXVldWVcbiAgICAgICAgKi9cbiAgICAgICAgdmFyIGRlYWN0aXZhdGVRdWV1ZUxlbmd0aCA9IGRlYWN0aXZhdGVRdWV1ZS5sZW5ndGg7XG5cbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBkZWFjdGl2YXRlUXVldWVMZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdmFyIGlkID0gZGVhY3RpdmF0ZVF1ZXVlW2ldO1xuICAgICAgICAgICAgdmFyIGFjdGl2ZUlkSW5kZXggPSBydW5uaW5nSWRzLmluZGV4T2YoaWQpO1xuICAgICAgICAgICAgdmFyIF9wcm9jZXNzID0gYWN0aXZlUHJvY2Vzc2VzW2lkXTtcblxuICAgICAgICAgICAgLy8gSWYgdGhpcyBpcyBhIHJ1bm5pbmcgcHJvY2VzcywgZGVhY3RpdmF0ZVxuICAgICAgICAgICAgaWYgKGFjdGl2ZUlkSW5kZXggPiAtMSkge1xuICAgICAgICAgICAgICAgIHJ1bm5pbmdJZHMuc3BsaWNlKGFjdGl2ZUlkSW5kZXgsIDEpO1xuICAgICAgICAgICAgICAgIHVwZGF0ZVJ1bm5pbmdDb3VudChmYWxzZSwgX3Byb2Nlc3MuaXNMYXp5KTtcbiAgICAgICAgICAgICAgICBkZWxldGUgYWN0aXZlUHJvY2Vzc2VzW2lkXTtcblxuICAgICAgICAgICAgICAgIGlmIChfcHJvY2Vzcy5vbkRlYWN0aXZhdGUpIHtcbiAgICAgICAgICAgICAgICAgICAgX3Byb2Nlc3Mub25EZWFjdGl2YXRlKF9wcm9jZXNzKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvKlxuICAgICAgICAgICAgRW1wdHkgZGVhY3RpdmF0ZSBxdWV1ZS4gV2UgdXNlIGBBcnJheS5zcGxpY2VgIGJlY2F1c2UgaXQgZG9lc24ndFxuICAgICAgICAgICAgd29ya3Mgb24gdGhlIG9yaWdpbmFsIGFycmF5IHNvIHdlIGRvbid0IGhhdmUgdG8gZ2FyYmFnZSBjb2xsZWN0IGFueXRoaW5nXG4gICAgICAgICovXG4gICAgICAgIGRlYWN0aXZhdGVRdWV1ZS5zcGxpY2UoMCwgZGVhY3RpdmF0ZVF1ZXVlTGVuZ3RoKTtcblxuICAgICAgICAvKlxuICAgICAgICAgICAgUHJvY2VzcyBhY3RpdmF0ZSBxdWV1ZVxuICAgICAgICAqL1xuICAgICAgICB2YXIgYWN0aXZhdGVRdWV1ZUxlbmd0aCA9IGFjdGl2YXRlUXVldWUubGVuZ3RoO1xuXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYWN0aXZhdGVRdWV1ZUxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgaWQgPSBhY3RpdmF0ZVF1ZXVlW2ldO1xuICAgICAgICAgICAgdmFyIGFjdGl2ZUlkSW5kZXggPSBydW5uaW5nSWRzLmluZGV4T2YoaWQpO1xuICAgICAgICAgICAgdmFyIF9wcm9jZXNzMiA9IGFjdGl2ZVByb2Nlc3Nlc1tpZF07XG5cbiAgICAgICAgICAgIC8vIElmIHByb2Nlc3MgaXNuJ3QgYWxyZWFkeSBydW5uaW5nLCBhY3RpdmF0ZVxuICAgICAgICAgICAgaWYgKGFjdGl2ZUlkSW5kZXggPT09IC0xICYmIF9wcm9jZXNzMikge1xuICAgICAgICAgICAgICAgIGlmIChfcHJvY2VzczIuaXNQcmlvcml0eSkge1xuICAgICAgICAgICAgICAgICAgICBydW5uaW5nSWRzLnVuc2hpZnQoaWQpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmdJZHMucHVzaChpZCk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgdXBkYXRlUnVubmluZ0NvdW50KHRydWUsIF9wcm9jZXNzMi5pc0xhenkpO1xuXG4gICAgICAgICAgICAgICAgaWYgKF9wcm9jZXNzMi5vbkFjdGl2YXRlKSB7XG4gICAgICAgICAgICAgICAgICAgIF9wcm9jZXNzMi5vbkFjdGl2YXRlKF9wcm9jZXNzMik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgYWN0aXZhdGVRdWV1ZS5zcGxpY2UoMCwgYWN0aXZhdGVRdWV1ZUxlbmd0aCk7XG5cbiAgICAgICAgcmV0dXJuIHJ1bm5pbmdJZHM7XG4gICAgfVxufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbk55WXk5d2NtOWpaWE56TDIxaGJtRm5aWEl1YW5NaVhTd2libUZ0WlhNaU9sdGRMQ0p0WVhCd2FXNW5jeUk2SWpzN096dEJRVU5CTEVsQlFVa3NaMEpCUVdkQ0xFZEJRVWNzUTBGQlF6czdPMEZCUVVNc1FVRkhla0lzU1VGQlNTeHBRa0ZCYVVJc1IwRkJSeXhEUVVGRE96czdRVUZCUXl4QlFVY3hRaXhKUVVGSkxIbENRVUY1UWl4SFFVRkhMRU5CUVVNN096dEJRVUZETEVGQlIyeERMRWxCUVUwc1ZVRkJWU3hIUVVGSExFVkJRVVU3T3p0QlFVRkRMRUZCUjNSQ0xFbEJRVTBzWlVGQlpTeEhRVUZITEVWQlFVVTdPenRCUVVGRExFRkJSek5DTEVsQlFVMHNZVUZCWVN4SFFVRkhMRVZCUVVVN096dEJRVUZETEVGQlIzcENMRWxCUVUwc1pVRkJaU3hIUVVGSExFVkJRVVU3T3pzN096czdPenRCUVVGRExFRkJVek5DTEVsQlFVMHNXVUZCV1N4SFFVRkhMRlZCUVVNc1JVRkJSU3hGUVVGRkxFMUJRVTBzUlVGQlJTeFBRVUZQTEVWQlFVczdRVUZETVVNc1VVRkJUU3hWUVVGVkxFZEJRVWNzVFVGQlRTeERRVUZETEU5QlFVOHNRMEZCUXl4RlFVRkZMRU5CUVVNc1EwRkJRenRCUVVOMFF5eFJRVUZOTEZkQlFWY3NSMEZCUnl4UFFVRlBMRU5CUVVNc1QwRkJUeXhEUVVGRExFVkJRVVVzUTBGQlF5eERRVUZET3p0QlFVVjRReXhSUVVGSkxGVkJRVlVzUzBGQlN5eERRVUZETEVOQlFVTXNSVUZCUlR0QlFVTnVRaXhqUVVGTkxFTkJRVU1zU1VGQlNTeERRVUZETEVWQlFVVXNRMEZCUXl4RFFVRkRPMHRCUTI1Q096dEJRVVZFTEZGQlFVa3NWMEZCVnl4SFFVRkhMRU5CUVVNc1EwRkJReXhGUVVGRk8wRkJRMnhDTEdWQlFVOHNRMEZCUXl4TlFVRk5MRU5CUVVNc1YwRkJWeXhGUVVGRkxFTkJRVU1zUTBGQlF5eERRVUZETzB0QlEyeERPME5CUTBvN096czdPenM3TzBGQlFVTXNRVUZSUml4SlFVRk5MR3RDUVVGclFpeEhRVUZITEZWQlFVTXNSMEZCUnl4RlFVRkZMRTFCUVUwc1JVRkJTenRCUVVONFF5eFJRVUZOTEUxQlFVMHNSMEZCUnl4SFFVRkhMRWRCUVVjc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF5eERRVUZET3p0QlFVVTFRaXh4UWtGQmFVSXNTVUZCU1N4TlFVRk5MRU5CUVVNN08wRkJSVFZDTEZGQlFVa3NRMEZCUXl4TlFVRk5MRVZCUVVVN1FVRkRWQ3hwUTBGQmVVSXNTVUZCU1N4TlFVRk5MRU5CUVVNN1MwRkRka003UTBGRFNpeERRVUZET3p0clFrRkZZVHRCUVVOWUxHMUNRVUZsTEVWQlFXWXNaVUZCWlRzN08wRkJSMllzV1VGQlVTeEZRVUZGTEZWQlFVTXNSVUZCUlN4RlFVRkZMRTlCUVU4c1JVRkJTenRCUVVOMlFpeDFRa0ZCWlN4RFFVRkRMRVZCUVVVc1EwRkJReXhIUVVGSExFOUJRVThzUTBGQlF6dEJRVU01UWl4bFFVRlBMRU5CUVVNc1VVRkJVU3hIUVVGSExFbEJRVWtzUTBGQlF6dEJRVU40UWl4dlFrRkJXU3hEUVVGRExFVkJRVVVzUlVGQlJTeGhRVUZoTEVWQlFVVXNaVUZCWlN4RFFVRkRMRU5CUVVNN1MwRkRjRVE3T3p0QlFVZEVMR05CUVZVc1JVRkJSU3hWUVVGRExFVkJRVVVzUlVGQlN6dEJRVU5vUWl4bFFVRlBMRU5CUVVNc1VVRkJVU3hIUVVGSExFdEJRVXNzUTBGQlF6dEJRVU42UWl4dlFrRkJXU3hEUVVGRExFVkJRVVVzUlVGQlJTeGxRVUZsTEVWQlFVVXNZVUZCWVN4RFFVRkRMRU5CUVVNN1MwRkRjRVE3T3p0QlFVZEVMR2REUVVFMFFpeEZRVUZGTzJWQlFVMHNlVUpCUVhsQ08wdEJRVUU3T3p0QlFVYzNSQ3huUWtGQldTeEZRVUZGTzJWQlFVMHNaMEpCUVdkQ0xFVkJRVVU3UzBGQlFUczdPMEZCUjNSRExHZENRVUZaTEVWQlFVVXNXVUZCVFRzN096dEJRVWxvUWl4WlFVRk5MSEZDUVVGeFFpeEhRVUZITEdWQlFXVXNRMEZCUXl4TlFVRk5MRU5CUVVNN08wRkJSWEpFTEdGQlFVc3NTVUZCU1N4RFFVRkRMRWRCUVVjc1EwRkJReXhGUVVGRkxFTkJRVU1zUjBGQlJ5eHhRa0ZCY1VJc1JVRkJSU3hEUVVGRExFVkJRVVVzUlVGQlJUdEJRVU0xUXl4blFrRkJUU3hGUVVGRkxFZEJRVWNzWlVGQlpTeERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRPMEZCUXpsQ0xHZENRVUZOTEdGQlFXRXNSMEZCUnl4VlFVRlZMRU5CUVVNc1QwRkJUeXhEUVVGRExFVkJRVVVzUTBGQlF5eERRVUZETzBGQlF6ZERMR2RDUVVGTkxGRkJRVThzUjBGQlJ5eGxRVUZsTEVOQlFVTXNSVUZCUlN4RFFVRkRPenM3UVVGQlF5eEJRVWR3UXl4blFrRkJTU3hoUVVGaExFZEJRVWNzUTBGQlF5eERRVUZETEVWQlFVVTdRVUZEY0VJc01FSkJRVlVzUTBGQlF5eE5RVUZOTEVOQlFVTXNZVUZCWVN4RlFVRkZMRU5CUVVNc1EwRkJReXhEUVVGRE8wRkJRM0JETEd0RFFVRnJRaXhEUVVGRExFdEJRVXNzUlVGQlJTeFJRVUZQTEVOQlFVTXNUVUZCVFN4RFFVRkRMRU5CUVVNN1FVRkRNVU1zZFVKQlFVOHNaVUZCWlN4RFFVRkRMRVZCUVVVc1EwRkJReXhEUVVGRE96dEJRVVV6UWl4dlFrRkJTU3hSUVVGUExFTkJRVU1zV1VGQldTeEZRVUZGTzBGQlEzUkNMRFJDUVVGUExFTkJRVU1zV1VGQldTeERRVUZETEZGQlFVOHNRMEZCUXl4RFFVRkRPMmxDUVVOcVF6dGhRVU5LTzFOQlEwbzdPenM3T3p0QlFVRkJMRUZCVFVRc2RVSkJRV1VzUTBGQlF5eE5RVUZOTEVOQlFVTXNRMEZCUXl4RlFVRkZMSEZDUVVGeFFpeERRVUZET3pzN096dEJRVUZETEVGQlMycEVMRmxCUVUwc2JVSkJRVzFDTEVkQlFVY3NZVUZCWVN4RFFVRkRMRTFCUVUwc1EwRkJRenM3UVVGRmFrUXNZVUZCU3l4SlFVRkpMRU5CUVVNc1IwRkJSeXhEUVVGRExFVkJRVVVzUTBGQlF5eEhRVUZITEcxQ1FVRnRRaXhGUVVGRkxFTkJRVU1zUlVGQlJTeEZRVUZGTzBGQlF6RkRMR2RDUVVGTkxFVkJRVVVzUjBGQlJ5eGhRVUZoTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNN1FVRkROVUlzWjBKQlFVMHNZVUZCWVN4SFFVRkhMRlZCUVZVc1EwRkJReXhQUVVGUExFTkJRVU1zUlVGQlJTeERRVUZETEVOQlFVTTdRVUZETjBNc1owSkJRVTBzVTBGQlR5eEhRVUZITEdWQlFXVXNRMEZCUXl4RlFVRkZMRU5CUVVNN096dEJRVUZETEVGQlIzQkRMR2RDUVVGSkxHRkJRV0VzUzBGQlN5eERRVUZETEVOQlFVTXNTVUZCU1N4VFFVRlBMRVZCUVVVN1FVRkRha01zYjBKQlFVa3NVMEZCVHl4RFFVRkRMRlZCUVZVc1JVRkJSVHRCUVVOd1FpdzRRa0ZCVlN4RFFVRkRMRTlCUVU4c1EwRkJReXhGUVVGRkxFTkJRVU1zUTBGQlF6dHBRa0ZETVVJc1RVRkJUVHRCUVVOSUxEaENRVUZWTEVOQlFVTXNTVUZCU1N4RFFVRkRMRVZCUVVVc1EwRkJReXhEUVVGRE8ybENRVU4yUWpzN1FVRkZSQ3hyUTBGQmEwSXNRMEZCUXl4SlFVRkpMRVZCUVVVc1UwRkJUeXhEUVVGRExFMUJRVTBzUTBGQlF5eERRVUZET3p0QlFVVjZReXh2UWtGQlNTeFRRVUZQTEVOQlFVTXNWVUZCVlN4RlFVRkZPMEZCUTNCQ0xEWkNRVUZQTEVOQlFVTXNWVUZCVlN4RFFVRkRMRk5CUVU4c1EwRkJReXhEUVVGRE8ybENRVU12UWp0aFFVTktPMU5CUTBvN08wRkJSVVFzY1VKQlFXRXNRMEZCUXl4TlFVRk5MRU5CUVVNc1EwRkJReXhGUVVGRkxHMUNRVUZ0UWl4RFFVRkRMRU5CUVVNN08wRkJSVGRETEdWQlFVOHNWVUZCVlN4RFFVRkRPMHRCUTNKQ08wTkJRMG9pTENKbWFXeGxJam9pYldGdVlXZGxjaTVxY3lJc0luTnZkWEpqWlZKdmIzUWlPaUl2VlhObGNuTXZUV0YwZEZCbGNuSjVMMU5wZEdWekwzQnZjRzF2ZEdsdmJpSXNJbk52ZFhKalpYTkRiMjUwWlc1MElqcGJJaTh2SUZ0cGJuUmRPaUJKYm1OeVpXMWxiblJsWkNCbWIzSWdaV0ZqYUNCdVpYY2djblZ1Ym1sdVp5QndjbTlqWlhOelhHNXNaWFFnWTNWeWNtVnVkRkJ5YjJObGMzTkpaQ0E5SURBN1hHNWNiaTh2SUZ0cGJuUmRPaUJPZFcxaVpYSWdiMllnWVd4c0lISjFibTVwYm1jZ2NISnZZMlZ6YzJWelhHNXNaWFFnZEc5MFlXeFNkVzV1YVc1blEyOTFiblFnUFNBd08xeHVYRzR2THlCYmFXNTBYVG9nVG5WdFltVnlJRzltSUhKMWJtNXBibWNnY0hKdlkyVnpjMlZ6SUdWNFkyeDFaR2x1WnlCaVlXTnJaM0p2ZFc1a0lIQnliMk5sYzNObGMxeHViR1YwSUc1dmJrSmhZMnRuY205MWJtUlNkVzV1YVc1blEyOTFiblFnUFNBd08xeHVYRzR2THlCYllYSnlZWGxkT2lCQmNuSmhlU0J2WmlCeWRXNXVhVzVuSUhCeWIyTmxjM01nU1VSelhHNWpiMjV6ZENCeWRXNXVhVzVuU1dSeklEMGdXMTA3WEc1Y2JpOHZJRnR2WW1wbFkzUmRPaUJOWVhBZ2IyWWdjblZ1Ym1sdVp5QndjbTlqWlhOelpYTmNibU52Ym5OMElHRmpkR2wyWlZCeWIyTmxjM05sY3lBOUlIdDlPMXh1WEc0dkx5QmJZWEp5WVhsZE9pQkJjbkpoZVNCdlppQndjbTlqWlhOeklFbEVjeUJ4ZFdWMVpXUWdabTl5SUdGamRHbDJZWFJwYjI1Y2JtTnZibk4wSUdGamRHbDJZWFJsVVhWbGRXVWdQU0JiWFR0Y2JseHVMeThnVzJGeWNtRjVYVG9nUVhKeVlYa2diMllnY0hKdlkyVnpjeUJKUkhNZ2NYVmxkV1ZrSUdadmNpQmtaV0ZqZEdsMllYUnBiMjVjYm1OdmJuTjBJR1JsWVdOMGFYWmhkR1ZSZFdWMVpTQTlJRnRkTzF4dVhHNHZLbHh1SUNBZ0lGVndaR0YwWlNCaFkzUnBkbUYwWlM5a1pXRmpkR2wyWVhSbElIRjFaWFZsYzF4dVhHNGdJQ0FnUUhCaGNtRnRJRnR1ZFcxaVpYSmRYRzRnSUNBZ1FIQmhjbUZ0SUZ0aGNuSmhlVjFjYmlBZ0lDQkFjR0Z5WVcwZ1cyRnljbUY1WFZ4dUtpOWNibU52Ym5OMElIVndaR0YwWlZGMVpYVmxjeUE5SUNocFpDd2dhVzVNYVhOMExDQnZkWFJNYVhOMEtTQTlQaUI3WEc0Z0lDQWdZMjl1YzNRZ2FXNVFiM05wZEdsdmJpQTlJR2x1VEdsemRDNXBibVJsZUU5bUtHbGtLVHRjYmlBZ0lDQmpiMjV6ZENCdmRYUlFiM05wZEdsdmJpQTlJRzkxZEV4cGMzUXVhVzVrWlhoUFppaHBaQ2s3WEc1Y2JpQWdJQ0JwWmlBb2FXNVFiM05wZEdsdmJpQTlQVDBnTFRFcElIdGNiaUFnSUNBZ0lDQWdhVzVNYVhOMExuQjFjMmdvYVdRcE8xeHVJQ0FnSUgxY2JseHVJQ0FnSUdsbUlDaHZkWFJRYjNOcGRHbHZiaUErSUMweEtTQjdYRzRnSUNBZ0lDQWdJRzkxZEV4cGMzUXVjM0JzYVdObEtHOTFkRkJ2YzJsMGFXOXVMQ0F4S1R0Y2JpQWdJQ0I5WEc1OU8xeHVYRzR2S2x4dUlDQWdJRlZ3WkdGMFpTQnlkVzV1YVc1blhHNWNiaUFnSUNCYlltOXZiR1ZoYmwwNklHQjBjblZsWUNCMGJ5QmhaR1JjYmlBZ0lDQmJZbTl2YkdWaGJsMDZJR0IwY25WbFlDQnBaaUJzWVhwNVhHNHFMMXh1WTI5dWMzUWdkWEJrWVhSbFVuVnVibWx1WjBOdmRXNTBJRDBnS0dGa1pDd2dhWE5NWVhwNUtTQTlQaUI3WEc0Z0lDQWdZMjl1YzNRZ2JXOWthV1o1SUQwZ1lXUmtJRDhnTVNBNklDMHhPMXh1WEc0Z0lDQWdkRzkwWVd4U2RXNXVhVzVuUTI5MWJuUWdLejBnYlc5a2FXWjVPMXh1WEc0Z0lDQWdhV1lnS0NGcGMweGhlbmtwSUh0Y2JpQWdJQ0FnSUNBZ2JtOXVRbUZqYTJkeWIzVnVaRkoxYm01cGJtZERiM1Z1ZENBclBTQnRiMlJwWm5rN1hHNGdJQ0FnZlZ4dWZUdGNibHh1Wlhod2IzSjBJR1JsWm1GMWJIUWdlMXh1SUNBZ0lHRmpkR2wyWlZCeWIyTmxjM05sY3l4Y2JseHVJQ0FnSUM4dklFRmpkR2wyWVhSbElHRWdjSEp2WTJWemMxeHVJQ0FnSUdGamRHbDJZWFJsT2lBb2FXUXNJSEJ5YjJObGMzTXBJRDArSUh0Y2JpQWdJQ0FnSUNBZ1lXTjBhWFpsVUhKdlkyVnpjMlZ6VzJsa1hTQTlJSEJ5YjJObGMzTTdYRzRnSUNBZ0lDQWdJSEJ5YjJObGMzTXVhWE5CWTNScGRtVWdQU0IwY25WbE8xeHVJQ0FnSUNBZ0lDQjFjR1JoZEdWUmRXVjFaWE1vYVdRc0lHRmpkR2wyWVhSbFVYVmxkV1VzSUdSbFlXTjBhWFpoZEdWUmRXVjFaU2s3WEc0Z0lDQWdmU3hjYmx4dUlDQWdJQzh2SUVSbFlXTjBhWFpoZEdVZ1lTQndjbTlqWlhOelhHNGdJQ0FnWkdWaFkzUnBkbUYwWlRvZ0tHbGtLU0E5UGlCN1hHNGdJQ0FnSUNBZ0lIQnliMk5sYzNNdWFYTkJZM1JwZG1VZ1BTQm1ZV3h6WlR0Y2JpQWdJQ0FnSUNBZ2RYQmtZWFJsVVhWbGRXVnpLR2xrTENCa1pXRmpkR2wyWVhSbFVYVmxkV1VzSUdGamRHbDJZWFJsVVhWbGRXVXBPMXh1SUNBZ0lIMHNYRzVjYmlBZ0lDQXZMeUJPZFcxaVpYSWdZbUZqYTJkeWIzVnVaQ0J3Y205alpYTnpaWE5jYmlBZ0lDQm5aWFJPYjI1Q1lXTnJaM0p2ZFc1a1VuVnVibWx1WjBOdmRXNTBPaUFvS1NBOVBpQnViMjVDWVdOclozSnZkVzVrVW5WdWJtbHVaME52ZFc1MExGeHVYRzRnSUNBZ0x5OGdTVzVqY21WdFpXNTBJR04xY25KbGJuUWdjSEp2WTJWemN5QkpSQ0JoYm1RZ2NtVjBkWEp1WEc0Z0lDQWdaMlYwVUhKdlkyVnpjMGxrT2lBb0tTQTlQaUJqZFhKeVpXNTBVSEp2WTJWemMwbGtLeXNzWEc1Y2JpQWdJQ0F2THlCU1pYTnZiSFpsSUdGamRHbDJZWFJsTDJSbFlXTjBhWFpoZEdVZ2NISnZZMlZ6YzJWeklHRnVaQ0J5WlhSMWNtNGdZV04wYVhabElHbGtjMXh1SUNBZ0lHZGxkRUZqZEdsMlpVbGtjem9nS0NrZ1BUNGdlMXh1SUNBZ0lDQWdJQ0F2S2x4dUlDQWdJQ0FnSUNBZ0lDQWdVSEp2WTJWemN5QmtaV0ZqZEdsMllYUmxJSEYxWlhWbFhHNGdJQ0FnSUNBZ0lDb3ZYRzRnSUNBZ0lDQWdJR052Ym5OMElHUmxZV04wYVhaaGRHVlJkV1YxWlV4bGJtZDBhQ0E5SUdSbFlXTjBhWFpoZEdWUmRXVjFaUzVzWlc1bmRHZzdYRzVjYmlBZ0lDQWdJQ0FnWm05eUlDaHNaWFFnYVNBOUlEQTdJR2tnUENCa1pXRmpkR2wyWVhSbFVYVmxkV1ZNWlc1bmRHZzdJR2tyS3lrZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnWTI5dWMzUWdhV1FnUFNCa1pXRmpkR2wyWVhSbFVYVmxkV1ZiYVYwN1hHNGdJQ0FnSUNBZ0lDQWdJQ0JqYjI1emRDQmhZM1JwZG1WSlpFbHVaR1Y0SUQwZ2NuVnVibWx1WjBsa2N5NXBibVJsZUU5bUtHbGtLVHRjYmlBZ0lDQWdJQ0FnSUNBZ0lHTnZibk4wSUhCeWIyTmxjM01nUFNCaFkzUnBkbVZRY205alpYTnpaWE5iYVdSZE8xeHVYRzRnSUNBZ0lDQWdJQ0FnSUNBdkx5QkpaaUIwYUdseklHbHpJR0VnY25WdWJtbHVaeUJ3Y205alpYTnpMQ0JrWldGamRHbDJZWFJsWEc0Z0lDQWdJQ0FnSUNBZ0lDQnBaaUFvWVdOMGFYWmxTV1JKYm1SbGVDQStJQzB4S1NCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2NuVnVibWx1WjBsa2N5NXpjR3hwWTJVb1lXTjBhWFpsU1dSSmJtUmxlQ3dnTVNrN1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2RYQmtZWFJsVW5WdWJtbHVaME52ZFc1MEtHWmhiSE5sTENCd2NtOWpaWE56TG1selRHRjZlU2s3WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnWkdWc1pYUmxJR0ZqZEdsMlpWQnliMk5sYzNObGMxdHBaRjA3WEc1Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCcFppQW9jSEp2WTJWemN5NXZia1JsWVdOMGFYWmhkR1VwSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdjSEp2WTJWemN5NXZia1JsWVdOMGFYWmhkR1VvY0hKdlkyVnpjeWs3WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnZlZ4dUlDQWdJQ0FnSUNBZ0lDQWdmVnh1SUNBZ0lDQWdJQ0I5WEc1Y2JpQWdJQ0FnSUNBZ0x5cGNiaUFnSUNBZ0lDQWdJQ0FnSUVWdGNIUjVJR1JsWVdOMGFYWmhkR1VnY1hWbGRXVXVJRmRsSUhWelpTQmdRWEp5WVhrdWMzQnNhV05sWUNCaVpXTmhkWE5sSUdsMElHUnZaWE51SjNSY2JpQWdJQ0FnSUNBZ0lDQWdJSGR2Y210eklHOXVJSFJvWlNCdmNtbG5hVzVoYkNCaGNuSmhlU0J6YnlCM1pTQmtiMjRuZENCb1lYWmxJSFJ2SUdkaGNtSmhaMlVnWTI5c2JHVmpkQ0JoYm5sMGFHbHVaMXh1SUNBZ0lDQWdJQ0FxTDF4dUlDQWdJQ0FnSUNCa1pXRmpkR2wyWVhSbFVYVmxkV1V1YzNCc2FXTmxLREFzSUdSbFlXTjBhWFpoZEdWUmRXVjFaVXhsYm1kMGFDazdYRzVjYmlBZ0lDQWdJQ0FnTHlwY2JpQWdJQ0FnSUNBZ0lDQWdJRkJ5YjJObGMzTWdZV04wYVhaaGRHVWdjWFZsZFdWY2JpQWdJQ0FnSUNBZ0tpOWNiaUFnSUNBZ0lDQWdZMjl1YzNRZ1lXTjBhWFpoZEdWUmRXVjFaVXhsYm1kMGFDQTlJR0ZqZEdsMllYUmxVWFZsZFdVdWJHVnVaM1JvTzF4dVhHNGdJQ0FnSUNBZ0lHWnZjaUFvYkdWMElHa2dQU0F3T3lCcElEd2dZV04wYVhaaGRHVlJkV1YxWlV4bGJtZDBhRHNnYVNzcktTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNCamIyNXpkQ0JwWkNBOUlHRmpkR2wyWVhSbFVYVmxkV1ZiYVYwN1hHNGdJQ0FnSUNBZ0lDQWdJQ0JqYjI1emRDQmhZM1JwZG1WSlpFbHVaR1Y0SUQwZ2NuVnVibWx1WjBsa2N5NXBibVJsZUU5bUtHbGtLVHRjYmlBZ0lDQWdJQ0FnSUNBZ0lHTnZibk4wSUhCeWIyTmxjM01nUFNCaFkzUnBkbVZRY205alpYTnpaWE5iYVdSZE8xeHVYRzRnSUNBZ0lDQWdJQ0FnSUNBdkx5QkpaaUJ3Y205alpYTnpJR2x6YmlkMElHRnNjbVZoWkhrZ2NuVnVibWx1Wnl3Z1lXTjBhWFpoZEdWY2JpQWdJQ0FnSUNBZ0lDQWdJR2xtSUNoaFkzUnBkbVZKWkVsdVpHVjRJRDA5UFNBdE1TQW1KaUJ3Y205alpYTnpLU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnYVdZZ0tIQnliMk5sYzNNdWFYTlFjbWx2Y21sMGVTa2dlMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCeWRXNXVhVzVuU1dSekxuVnVjMmhwWm5Rb2FXUXBPMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJSDBnWld4elpTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUhKMWJtNXBibWRKWkhNdWNIVnphQ2hwWkNrN1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2ZWeHVYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdkWEJrWVhSbFVuVnVibWx1WjBOdmRXNTBLSFJ5ZFdVc0lIQnliMk5sYzNNdWFYTk1ZWHA1S1R0Y2JseHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lHbG1JQ2h3Y205alpYTnpMbTl1UVdOMGFYWmhkR1VwSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdjSEp2WTJWemN5NXZia0ZqZEdsMllYUmxLSEJ5YjJObGMzTXBPMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJSDFjYmlBZ0lDQWdJQ0FnSUNBZ0lIMWNiaUFnSUNBZ0lDQWdmVnh1WEc0Z0lDQWdJQ0FnSUdGamRHbDJZWFJsVVhWbGRXVXVjM0JzYVdObEtEQXNJR0ZqZEdsMllYUmxVWFZsZFdWTVpXNW5kR2dwTzF4dVhHNGdJQ0FnSUNBZ0lISmxkSFZ5YmlCeWRXNXVhVzVuU1dSek8xeHVJQ0FnSUgxY2JuMDdYRzRpWFgwPVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvcHJvY2Vzcy9tYW5hZ2VyLmpzXG4gKiogbW9kdWxlIGlkID0gNTJcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8vIHNoaW0gZm9yIHVzaW5nIHByb2Nlc3MgaW4gYnJvd3NlclxuXG52YXIgcHJvY2VzcyA9IG1vZHVsZS5leHBvcnRzID0ge307XG52YXIgcXVldWUgPSBbXTtcbnZhciBkcmFpbmluZyA9IGZhbHNlO1xuXG5mdW5jdGlvbiBkcmFpblF1ZXVlKCkge1xuICAgIGlmIChkcmFpbmluZykge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGRyYWluaW5nID0gdHJ1ZTtcbiAgICB2YXIgY3VycmVudFF1ZXVlO1xuICAgIHZhciBsZW4gPSBxdWV1ZS5sZW5ndGg7XG4gICAgd2hpbGUobGVuKSB7XG4gICAgICAgIGN1cnJlbnRRdWV1ZSA9IHF1ZXVlO1xuICAgICAgICBxdWV1ZSA9IFtdO1xuICAgICAgICB2YXIgaSA9IC0xO1xuICAgICAgICB3aGlsZSAoKytpIDwgbGVuKSB7XG4gICAgICAgICAgICBjdXJyZW50UXVldWVbaV0oKTtcbiAgICAgICAgfVxuICAgICAgICBsZW4gPSBxdWV1ZS5sZW5ndGg7XG4gICAgfVxuICAgIGRyYWluaW5nID0gZmFsc2U7XG59XG5wcm9jZXNzLm5leHRUaWNrID0gZnVuY3Rpb24gKGZ1bikge1xuICAgIHF1ZXVlLnB1c2goZnVuKTtcbiAgICBpZiAoIWRyYWluaW5nKSB7XG4gICAgICAgIHNldFRpbWVvdXQoZHJhaW5RdWV1ZSwgMCk7XG4gICAgfVxufTtcblxucHJvY2Vzcy50aXRsZSA9ICdicm93c2VyJztcbnByb2Nlc3MuYnJvd3NlciA9IHRydWU7XG5wcm9jZXNzLmVudiA9IHt9O1xucHJvY2Vzcy5hcmd2ID0gW107XG5wcm9jZXNzLnZlcnNpb24gPSAnJzsgLy8gZW1wdHkgc3RyaW5nIHRvIGF2b2lkIHJlZ2V4cCBpc3N1ZXNcbnByb2Nlc3MudmVyc2lvbnMgPSB7fTtcblxuZnVuY3Rpb24gbm9vcCgpIHt9XG5cbnByb2Nlc3Mub24gPSBub29wO1xucHJvY2Vzcy5hZGRMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLm9uY2UgPSBub29wO1xucHJvY2Vzcy5vZmYgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLnJlbW92ZUFsbExpc3RlbmVycyA9IG5vb3A7XG5wcm9jZXNzLmVtaXQgPSBub29wO1xuXG5wcm9jZXNzLmJpbmRpbmcgPSBmdW5jdGlvbiAobmFtZSkge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5iaW5kaW5nIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn07XG5cbi8vIFRPRE8oc2h0eWxtYW4pXG5wcm9jZXNzLmN3ZCA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuICcvJyB9O1xucHJvY2Vzcy5jaGRpciA9IGZ1bmN0aW9uIChkaXIpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuY2hkaXIgaXMgbm90IHN1cHBvcnRlZCcpO1xufTtcbnByb2Nlc3MudW1hc2sgPSBmdW5jdGlvbigpIHsgcmV0dXJuIDA7IH07XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9wcm9jZXNzL2Jyb3dzZXIuanNcbiAqKiBtb2R1bGUgaWQgPSA1M1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIl0sInNvdXJjZVJvb3QiOiIiLCJmaWxlIjoicG9wbW90aW9uLmdsb2JhbC5qcyJ9