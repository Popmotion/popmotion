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
	exports.transformers = exports.shadowType = exports.scaleType = exports.rgbType = exports.pxType = exports.positionsType = exports.hslType = exports.hexType = exports.complexType = exports.colorType = exports.axesType = exports.angleType = exports.alphaType = exports.setGlobalDilation = exports.combineTransformers = exports.calc = exports.easing = exports.svgPathAdapter = exports.svgAdapter = exports.cssAdapter = exports.attrAdapter = exports.adapter = exports.timeline = exports.stagger = exports.process = exports.input = exports.trackInput = exports.physics = exports.tween = exports.actor = undefined;
	
	var _utils = __webpack_require__(2);
	
	Object.defineProperty(exports, 'combineTransformers', {
	  enumerable: true,
	  get: function () {
	    return _utils.combineTransformers;
	  }
	});
	
	var _timer = __webpack_require__(3);
	
	Object.defineProperty(exports, 'setGlobalDilation', {
	  enumerable: true,
	  get: function () {
	    return _timer.setGlobalDilation;
	  }
	});
	
	var _Actor = __webpack_require__(4);
	
	var _Actor2 = _interopRequireDefault(_Actor);
	
	var _Tween = __webpack_require__(5);
	
	var _Tween2 = _interopRequireDefault(_Tween);
	
	var _Physics = __webpack_require__(6);
	
	var _Physics2 = _interopRequireDefault(_Physics);
	
	var _Track = __webpack_require__(7);
	
	var _Track2 = _interopRequireDefault(_Track);
	
	var _Process = __webpack_require__(8);
	
	var _Process2 = _interopRequireDefault(_Process);
	
	var _Input = __webpack_require__(9);
	
	var _Input2 = _interopRequireDefault(_Input);
	
	var _stagger2 = __webpack_require__(10);
	
	var _stagger3 = _interopRequireDefault(_stagger2);
	
	var _timeline2 = __webpack_require__(11);
	
	var _timeline3 = _interopRequireDefault(_timeline2);
	
	var _adapter2 = __webpack_require__(12);
	
	var _adapter3 = _interopRequireDefault(_adapter2);
	
	var _attrAdapter2 = __webpack_require__(13);
	
	var _attrAdapter3 = _interopRequireDefault(_attrAdapter2);
	
	var _cssAdapter2 = __webpack_require__(14);
	
	var _cssAdapter3 = _interopRequireDefault(_cssAdapter2);
	
	var _svgAdapter2 = __webpack_require__(15);
	
	var _svgAdapter3 = _interopRequireDefault(_svgAdapter2);
	
	var _svgPathAdapter2 = __webpack_require__(16);
	
	var _svgPathAdapter3 = _interopRequireDefault(_svgPathAdapter2);
	
	var _presetEasing = __webpack_require__(17);
	
	var _presetEasing2 = _interopRequireDefault(_presetEasing);
	
	var _calc2 = __webpack_require__(18);
	
	var _calc = _interopRequireWildcard(_calc2);
	
	var _alpha = __webpack_require__(19);
	
	var _alpha2 = _interopRequireDefault(_alpha);
	
	var _angle = __webpack_require__(20);
	
	var _angle2 = _interopRequireDefault(_angle);
	
	var _axes = __webpack_require__(21);
	
	var _axes2 = _interopRequireDefault(_axes);
	
	var _color = __webpack_require__(22);
	
	var _color2 = _interopRequireDefault(_color);
	
	var _complex = __webpack_require__(23);
	
	var _complex2 = _interopRequireDefault(_complex);
	
	var _hex = __webpack_require__(24);
	
	var _hex2 = _interopRequireDefault(_hex);
	
	var _hsl = __webpack_require__(25);
	
	var _hsl2 = _interopRequireDefault(_hsl);
	
	var _positions = __webpack_require__(26);
	
	var _positions2 = _interopRequireDefault(_positions);
	
	var _px = __webpack_require__(27);
	
	var _px2 = _interopRequireDefault(_px);
	
	var _rgb = __webpack_require__(28);
	
	var _rgb2 = _interopRequireDefault(_rgb);
	
	var _scale = __webpack_require__(29);
	
	var _scale2 = _interopRequireDefault(_scale);
	
	var _shadow = __webpack_require__(30);
	
	var _shadow2 = _interopRequireDefault(_shadow);
	
	var _transformers2 = __webpack_require__(31);
	
	var _transformers = _interopRequireWildcard(_transformers2);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// Process
	// Actor
	var actor = exports.actor = function (props) {
	  return new _Actor2.default(props);
	};
	
	// Input
	
	// Actions
	
	var tween = exports.tween = function (props) {
	  return new _Tween2.default(props);
	};
	var physics = exports.physics = function (props) {
	  return new _Physics2.default(props);
	};
	var trackInput = exports.trackInput = function () {
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
	
	// Transformers
	
	exports.transformers = _transformers;
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9wb3Btb3Rpb24uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztrQkFtQ1M7Ozs7Ozs7OztrQkFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUF0QkYsSUFBTSx3QkFBUSxVQUFDLEtBQUQ7U0FBVyxvQkFBVSxLQUFWO0NBQVg7Ozs7OztBQUNkLElBQU0sd0JBQVEsVUFBQyxLQUFEO1NBQVcsb0JBQVUsS0FBVjtDQUFYO0FBQ2QsSUFBTSw0QkFBVSxVQUFDLEtBQUQ7U0FBVyxzQkFBWSxLQUFaO0NBQVg7QUFDaEIsSUFBTSxrQ0FBYTtvQ0FBSTs7OzsyRUFBc0I7Q0FBMUI7QUFDbkIsSUFBTSx3QkFBUTtxQ0FBSTs7OzsyRUFBc0I7Q0FBMUI7QUFDZCxJQUFNLDRCQUFVO3FDQUFJOzs7OzZFQUF3QjtDQUE1QjtRQUNoQjtRQUNBOzs7O1FBR0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7OztRQUdBOzs7O1FBR0s7Ozs7UUFLTDtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7Ozs7UUFHSyIsImZpbGUiOiJwb3Btb3Rpb24uanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL01hdHQvU2l0ZXMvcG9wbW90aW9uIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQWN0b3JcbmltcG9ydCBBY3RvciBmcm9tICcuL2FjdG9yL0FjdG9yJztcblxuLy8gQWN0aW9uc1xuaW1wb3J0IFR3ZWVuIGZyb20gJy4vYWN0aW9ucy9Ud2Vlbic7XG5pbXBvcnQgUGh5c2ljcyBmcm9tICcuL2FjdGlvbnMvUGh5c2ljcyc7XG5pbXBvcnQgVHJhY2sgZnJvbSAnLi9hY3Rpb25zL1RyYWNrJztcblxuLy8gUHJvY2Vzc1xuaW1wb3J0IFByb2Nlc3MgZnJvbSAnLi9wcm9jZXNzL1Byb2Nlc3MnO1xuXG4vLyBJbnB1dFxuaW1wb3J0IElucHV0IGZyb20gJy4vaW5wdXQvSW5wdXQnO1xuXG5leHBvcnQgY29uc3QgYWN0b3IgPSAocHJvcHMpID0+IG5ldyBBY3Rvcihwcm9wcyk7XG5leHBvcnQgY29uc3QgdHdlZW4gPSAocHJvcHMpID0+IG5ldyBUd2Vlbihwcm9wcyk7XG5leHBvcnQgY29uc3QgcGh5c2ljcyA9IChwcm9wcykgPT4gbmV3IFBoeXNpY3MocHJvcHMpO1xuZXhwb3J0IGNvbnN0IHRyYWNrSW5wdXQgPSAoLi4uYXJncykgPT4gbmV3IFRyYWNrKC4uLmFyZ3MpO1xuZXhwb3J0IGNvbnN0IGlucHV0ID0gKC4uLmFyZ3MpID0+IG5ldyBJbnB1dCguLi5hcmdzKTtcbmV4cG9ydCBjb25zdCBwcm9jZXNzID0gKC4uLmFyZ3MpID0+IG5ldyBQcm9jZXNzKC4uLmFyZ3MpO1xuZXhwb3J0IHN0YWdnZXIgZnJvbSAnLi9pbmMvc3RhZ2dlcic7XG5leHBvcnQgdGltZWxpbmUgZnJvbSAnLi9pbmMvdGltZWxpbmUnO1xuXG4vLyBBZGFwdGVyc1xuZXhwb3J0IGFkYXB0ZXIgZnJvbSAnLi9hZGFwdGVyL2FkYXB0ZXInO1xuZXhwb3J0IGF0dHJBZGFwdGVyIGZyb20gJy4vYWRhcHRlci9hdHRyLWFkYXB0ZXInO1xuZXhwb3J0IGNzc0FkYXB0ZXIgZnJvbSAnLi9hZGFwdGVyL2Nzcy1hZGFwdGVyJztcbmV4cG9ydCBzdmdBZGFwdGVyIGZyb20gJy4vYWRhcHRlci9zdmctYWRhcHRlcic7XG5leHBvcnQgc3ZnUGF0aEFkYXB0ZXIgZnJvbSAnLi9hZGFwdGVyL3N2Zy1wYXRoLWFkYXB0ZXInO1xuXG4vLyBFYXNpbmdcbmV4cG9ydCBlYXNpbmcgZnJvbSAnLi9hY3Rpb25zL2Vhc2luZy9wcmVzZXQtZWFzaW5nJztcblxuLy8gVXRpbHNcbmV4cG9ydCAqIGFzIGNhbGMgZnJvbSAnLi9pbmMvY2FsYyc7XG5leHBvcnQgeyBjb21iaW5lVHJhbnNmb3JtZXJzIH0gZnJvbSAnLi9pbmMvdXRpbHMnO1xuZXhwb3J0IHsgc2V0R2xvYmFsRGlsYXRpb24gfSBmcm9tICcuL3Byb2Nlc3MvdGltZXInO1xuXG4vLyBWYWx1ZSB0eXBlc1xuZXhwb3J0IGFscGhhVHlwZSBmcm9tICcuL3ZhbHVlLXR5cGVzL2FscGhhJztcbmV4cG9ydCBhbmdsZVR5cGUgZnJvbSAnLi92YWx1ZS10eXBlcy9hbmdsZSc7XG5leHBvcnQgYXhlc1R5cGUgZnJvbSAnLi92YWx1ZS10eXBlcy9heGVzJztcbmV4cG9ydCBjb2xvclR5cGUgZnJvbSAnLi92YWx1ZS10eXBlcy9jb2xvcic7XG5leHBvcnQgY29tcGxleFR5cGUgZnJvbSAnLi92YWx1ZS10eXBlcy9jb21wbGV4JztcbmV4cG9ydCBoZXhUeXBlIGZyb20gJy4vdmFsdWUtdHlwZXMvaGV4JztcbmV4cG9ydCBoc2xUeXBlIGZyb20gJy4vdmFsdWUtdHlwZXMvaHNsJztcbmV4cG9ydCBwb3NpdGlvbnNUeXBlIGZyb20gJy4vdmFsdWUtdHlwZXMvcG9zaXRpb25zJztcbmV4cG9ydCBweFR5cGUgZnJvbSAnLi92YWx1ZS10eXBlcy9weCc7XG5leHBvcnQgcmdiVHlwZSBmcm9tICcuL3ZhbHVlLXR5cGVzL3JnYic7XG5leHBvcnQgc2NhbGVUeXBlIGZyb20gJy4vdmFsdWUtdHlwZXMvc2NhbGUnO1xuZXhwb3J0IHNoYWRvd1R5cGUgZnJvbSAnLi92YWx1ZS10eXBlcy9zaGFkb3cnO1xuXG4vLyBUcmFuc2Zvcm1lcnNcbmV4cG9ydCAqIGFzIHRyYW5zZm9ybWVycyBmcm9tICcuL2luYy90cmFuc2Zvcm1lcnMnOyJdfQ==

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
	    Split a value into a value/unit object
	    
	        "200px" -> { value: 200, unit: "px" }
	        
	    @param [string]: Value to split
	    @return [object]: Object with value and unit props
	*/
	var splitValueUnit = exports.splitValueUnit = function (value) {
	    var splitVal = value.match(/(-?\d*\.?\d*)(.*)/);
	
	    return {
	        value: parseFloat(splitVal[1]),
	        unit: splitVal[2]
	    };
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
	//# sourceMappingURL=data:application/json;base64,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VUFBQyxRQUFELEVBQWM7QUFDbkMsUUFBTSxRQUFRLE9BQVEsUUFBUCxLQUFvQixRQUFwQixHQUFnQyxTQUFTLGdCQUFULENBQTBCLFFBQTFCLENBQWpDLEdBQXVFLFFBQXZFLENBRHFCO0FBRW5DLFdBQU8sS0FBQyxDQUFNLE1BQU4sR0FBZ0IsR0FBRyxLQUFILENBQVMsSUFBVCxDQUFjLEtBQWQsQ0FBakIsR0FBd0MsR0FBRyxJQUFILENBQVEsS0FBUixDQUF4QyxDQUY0QjtDQUFkOzs7Ozs7Ozs7O0FBYWxCLElBQU0sb0RBQXNCLFVBQUMsS0FBRDtXQUFXLFNBQVMsS0FBVCxJQUFrQixNQUFNLEtBQU4sQ0FBWSxNQUFaLENBQWxCLEdBQXdDLENBQUMsS0FBRCxDQUF4QztDQUFYOzs7Ozs7Ozs7O0FBVTVCLElBQU0sb0RBQXNCLFVBQUMsS0FBRDtXQUFXLFNBQVMsS0FBVCxJQUFrQixNQUFNLEtBQU4sQ0FBWSxHQUFaLENBQWxCLEdBQXFDLENBQUMsS0FBRCxDQUFyQztDQUFYOzs7Ozs7Ozs7O0FBVTVCLElBQU0sMENBQWlCLFVBQUMsS0FBRCxFQUFXO0FBQ3JDLFFBQU0sV0FBVyxNQUFNLEtBQU4sQ0FBWSxtQkFBWixDQUFYLENBRCtCOztBQUdyQyxXQUFPO0FBQ0gsZUFBTyxXQUFXLFNBQVMsQ0FBVCxDQUFYLENBQVA7QUFDQSxjQUFPLFNBQVMsQ0FBVCxDQUFQO0tBRkosQ0FIcUM7Q0FBWDs7Ozs7Ozs7O0FBZ0J2QixJQUFNLGdDQUFZLFVBQUMsR0FBRCxFQUF3QjtRQUFsQixrRUFBWSxpQkFBTTs7QUFDN0MseUJBQVksSUFBTSxVQUFsQixDQUQ2QztBQUU3QyxXQUFPLEtBQUssS0FBTCxDQUFXLE1BQU0sU0FBTixDQUFYLEdBQThCLFNBQTlCLENBRnNDO0NBQXhCIiwiZmlsZSI6InV0aWxzLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9NYXR0L1NpdGVzL3BvcG1vdGlvbiIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IENBTUVMX0NBU0VfUEFUVEVSTiA9IC8oW2Etel0pKFtBLVpdKS9nO1xuY29uc3QgUkVQTEFDRV9URU1QTEFURSA9ICckMS0kMic7XG5jb25zdCBIQVNfUEVSRk9STUFOQ0VfTk9XID0gKHR5cGVvZiBwZXJmb3JtYW5jZSAhPT0gJ3VuZGVmaW5lZCcgJiYgcGVyZm9ybWFuY2Uubm93KTtcblxuLypcbiAgICBHZXQgdmFyIHR5cGUgYXMgc3RyaW5nXG4gICAgXG4gICAgQHBhcmFtOiBWYXJpYWJsZSB0byB0ZXN0XG4gICAgQHJldHVybiBbc3RyaW5nXTogUmV0dXJucywgZm9yIGluc3RhbmNlICdPYmplY3QnIGlmIFtvYmplY3QgT2JqZWN0XVxuKi9cbmNvbnN0IHZhclR5cGUgPSB2YXJpYWJsZSA9PiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwodmFyaWFibGUpLnNsaWNlKDgsIC0xKTtcblxuLypcbiAgICBDb252ZXJ0IGNhbWVsQ2FzZSB0byBkYXNoLWNhc2VcblxuICAgIEBwYXJhbSBbc3RyaW5nXVxuICAgIEByZXR1cm4gW3N0cmluZ11cbiovXG5leHBvcnQgY29uc3QgY2FtZWxUb0Rhc2ggPSAoc3RyaW5nKSA9PiBzdHJpbmcucmVwbGFjZShDQU1FTF9DQVNFX1BBVFRFUk4sIFJFUExBQ0VfVEVNUExBVEUpLnRvTG93ZXJDYXNlKCk7XG5cbi8qXG4gICAgQ29tYmluZSB0cmFuc2Zvcm1lcnMgaW50byBvbmUgZnVuY3Rpb24gdGhhdCBjYWxscyBldmVyeVxuICAgIHRyYW5zZm9ybWVyIGluIHRoZSBhcnJheSBhbmQgcmV0dXJucyB0aGUgcmVzdWx0XG5cbiAgICBAcGFyYW0gW2FycmF5XVxuICAgIEByZXR1cm4gW2Z1bmN0aW9uXVxuKi9cbmV4cG9ydCBjb25zdCBjb21iaW5lVHJhbnNmb3JtZXJzID0gKHRyYW5zZm9ybWVycykgPT4ge1xuICAgIGNvbnN0IG51bVRyYW5zZm9ybWVycyA9IHRyYW5zZm9ybWVycy5sZW5ndGg7XG4gICAgbGV0IGkgPSAwO1xuXG4gICAgLypcbiAgICAgICAgQHBhcmFtIFtudW1iZXJdXG4gICAgICAgIEBwYXJhbSBbc3RyaW5nXVxuICAgICAgICBAcGFyYW0gW0FjdGlvbl1cbiAgICAgICAgQHJldHVybiBbbnVtYmVyXVxuICAgICovXG4gICAgcmV0dXJuICh2LCBrZXksIGEpID0+IHtcbiAgICAgICAgZm9yIChpID0gMDsgaSA8IG51bVRyYW5zZm9ybWVyczsgaSsrKSB7XG4gICAgICAgICAgICB2ID0gdHJhbnNmb3JtZXJzW2ldKHYsIGtleSwgYSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdjtcbiAgICB9O1xufTtcblxuZXhwb3J0IGNvbnN0IGNyZWF0ZURlbGltaXRlZCA9ICh2YWx1ZXMsIHRlcm1zLCBkZWxpbWl0ZXIsIGNob3ApID0+IHtcbiAgICBjb25zdCBudW1UZXJtcyA9IHRlcm1zLmxlbmd0aDtcbiAgICBsZXQgY29tYmluZWQgPSAnJztcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbnVtVGVybXM7IGkrKykge1xuICAgICAgICBjb25zdCB0ZXJtID0gdGVybXNbaV07XG4gICAgICAgIGlmICh2YWx1ZXMuaGFzT3duUHJvcGVydHkodGVybSkpIHtcbiAgICAgICAgICAgIGNvbWJpbmVkICs9IHZhbHVlc1t0ZXJtXSArIGRlbGltaXRlcjtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGlmIChjaG9wKSB7XG4gICAgICAgIGNvbWJpbmVkID0gY29tYmluZWQuc2xpY2UoMCwgLWNob3ApO1xuICAgIH1cblxuICAgIHJldHVybiBjb21iaW5lZDtcbn07XG5cbi8qXG4gICAgQ3JlYXRlIGEgZnVuY3Rpb24gc3RyaW5nXG5cbiAgICAnMjBweCcsICd0cmFuc2xhdGUnIC0+ICd0cmFuc2xhdGUoMjBweCknXG5cbiAgICBAcGFyYW0gW3N0cmluZ11cbiAgICBAcGFyYW0gW3N0cmluZ11cbiAgICBAcmV0dXJuIFtzdHJpbmddXG4qL1xuZXhwb3J0IGNvbnN0IGNyZWF0ZUZ1bmN0aW9uU3RyaW5nID0gKHZhbHVlLCBwcmVmaXgpID0+IGAke3ByZWZpeH0oJHt2YWx1ZX0pYDtcblxuLypcbiAgICBHZW5lcmF0ZSBjdXJyZW50IHRpbWVzdGFtcFxuICAgIFxuICAgIEByZXR1cm4gW3RpbWVzdGFtcF06IEN1cnJlbnQgVU5JWCB0aW1lc3RhbXBcbiovXG5leHBvcnQgY29uc3QgY3VycmVudFRpbWUgPSBIQVNfUEVSRk9STUFOQ0VfTk9XID8gKCkgPT4gcGVyZm9ybWFuY2Uubm93KCkgOiAoKSA9PiBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcblxuLypcbiAgICBTcGxpdCBjb2xvciBzdHJpbmcgaW50byBtYXAgb2YgY29sb3IgcHJvcGVydGllc1xuXG4gICAgXCJyZ2JhKDI1NSwgMjU1LCAyNTUsIDApXCIsIFtcIlJlZFwiLCAnR3JlZW5cIiwgXCJCbHVlXCIsIFwiQWxwaGFcIl1cblxuICAgIHsgUmVkOiAyNTUuLi4gfVxuKi9cbmV4cG9ydCBjb25zdCBnZXRDb2xvclZhbHVlcyA9ICh2YWx1ZSwgY29sb3JUZXJtcykgPT4ge1xuICAgIGNvbnN0IG51bUNvbG9yVGVybXMgPSBjb2xvclRlcm1zLmxlbmd0aDtcbiAgICBjb25zdCBjb2xvclZhbHVlcyA9IHt9O1xuICAgIGNvbnN0IGNvbG9ycyA9IHNwbGl0Q29tbWFEZWxpbWl0ZWQoZ2V0VmFsdWVGcm9tRnVuY3Rpb25TdHJpbmcodmFsdWUpKTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbnVtQ29sb3JUZXJtczsgaSsrKSB7XG4gICAgICAgIGNvbG9yVmFsdWVzW2NvbG9yVGVybXNbaV1dID0gKGNvbG9yc1tpXSAhPT0gdW5kZWZpbmVkKSA/IGNvbG9yc1tpXSA6IDE7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbG9yVmFsdWVzO1xufTtcblxuLypcbiAgICBHZXQgdmFsdWUgZnJvbSBmdW5jdGlvbiBzdHJpbmdcblxuICAgIFwidHJhbnNsYXRlWCgyMHB4KVwiIC0+IFwiMjBweFwiXG4qL1xuZXhwb3J0IGNvbnN0IGdldFZhbHVlRnJvbUZ1bmN0aW9uU3RyaW5nID0gKHZhbHVlKSA9PiB2YWx1ZS5zdWJzdHJpbmcodmFsdWUuaW5kZXhPZignKCcpICsgMSwgdmFsdWUubGFzdEluZGV4T2YoJyknKSk7XG5cbi8qXG4gICAgQ2hlY2sgaWYgdHdvIG9iamVjdHMgaGF2ZSBjaGFuZ2VkIGZyb20gZWFjaCBvdGhlclxuICAgIFxuICAgIEBwYXJhbSBbb2JqZWN0XTogSW5wdXQgQVxuICAgIEBwYXJhbSBbb2JqZWN0XTogSW5wdXQgQlxuICAgIEByZXR1cm4gW2Jvb2xlYW5dOiBUcnVlIGlmIGRpZmZlcmVudFxuKi9cbmV4cG9ydCBjb25zdCBoYXNDaGFuZ2VkID0gKGEsIGIpID0+IHtcbiAgICBsZXQgY2hhbmdlZCA9IGZhbHNlO1xuXG4gICAgZm9yIChsZXQga2V5IGluIGEpIHtcbiAgICAgICAgaWYgKGEuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgICAgaWYgKGhhc1Byb3BlcnR5KGIsIGtleSkpIHtcbiAgICAgICAgICAgICAgICBpZiAoYVtrZXldICE9PSBiW2tleV0pIHtcbiAgICAgICAgICAgICAgICAgICAgY2hhbmdlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjaGFuZ2VkID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBjaGFuZ2VkO1xufTtcblxuLypcbiAgICBDaGVjayBpZiBvYmplY3QgaGFzIHByb3BlcnR5IGFuZCBpdCBpc24ndCB1bmRlZmluZWRcblxuICAgIEBwYXJhbSBbb2JqZWN0XVxuICAgIEBwYXJhbSBbc3RyaW5nXVxuICAgIEByZXR1cm4gW2Jvb2xlYW5dXG4qL1xuZXhwb3J0IGNvbnN0IGhhc1Byb3BlcnR5ID0gKG9iamVjdCwgcHJvcGVydHlOYW1lKSA9PiBvYmplY3QuaGFzT3duUHJvcGVydHkocHJvcGVydHlOYW1lKSAmJiBvYmplY3RbcHJvcGVydHlOYW1lXSAhPT0gdW5kZWZpbmVkO1xuXG4vKlxuICAgIElzIHV0aWxzIHZhciBhbiBhcnJheSA/IFxuICAgIFxuICAgIEBwYXJhbTogVmFyaWFibGUgdG8gdGVzdFxuICAgIEByZXR1cm4gW2Jvb2xlYW5dOiBSZXR1cm5zIHRydWUgaWYgdXRpbHMudmFyVHlwZSA9PT0gJ0FycmF5J1xuKi9cbmV4cG9ydCBjb25zdCBpc0FycmF5ID0gKGFycikgPT4gdmFyVHlwZShhcnIpID09PSAnQXJyYXknO1xuXG4vKlxuICAgIElzIHV0aWxzIHZhciBhIGZ1bmN0aW9uID8gXG4gICAgXG4gICAgQHBhcmFtOiBWYXJpYWJsZSB0byB0ZXN0XG4gICAgQHJldHVybiBbYm9vbGVhbl06IFJldHVybnMgdHJ1ZSBpZiB1dGlscy52YXJUeXBlID09PSAnRnVuY3Rpb24nXG4qL1xuZXhwb3J0IGNvbnN0IGlzRnVuYyA9IChvYmopID0+IHZhclR5cGUob2JqKSA9PT0gJ0Z1bmN0aW9uJztcblxuLypcbiAgICBJcyB1dGlscyB2YXIgYSBudW1iZXI/XG4gICAgXG4gICAgQHBhcmFtOiBWYXJpYWJsZSB0byB0ZXN0XG4gICAgQHJldHVybiBbYm9vbGVhbl06IFJldHVybnMgdHJ1ZSBpZiB0eXBlb2YgPT09ICdudW1iZXInXG4qL1xuZXhwb3J0IGNvbnN0IGlzTnVtID0gKG51bSkgPT4gdHlwZW9mIG51bSA9PT0gJ251bWJlcic7XG5cbi8qXG4gICAgSXMgdXRpbHMgdmFyIGFuIG9iamVjdD9cbiAgICBcbiAgICBAcGFyYW06IFZhcmlhYmxlIHRvIHRlc3RcbiAgICBAcmV0dXJuIFtib29sZWFuXTogUmV0dXJucyB0cnVlIGlmIHR5cGVvZiA9PT0gJ29iamVjdCdcbiovXG5leHBvcnQgY29uc3QgaXNPYmogPSAob2JqKSA9PiB0eXBlb2Ygb2JqID09PSAnb2JqZWN0JztcblxuLypcbiAgICBJcyB1dGlscyBhIHJlbGF0aXZlIHZhbHVlIGFzc2lnbm1lbnQ/XG4gICAgXG4gICAgQHBhcmFtIFtzdHJpbmddOiBWYXJpYWJsZSB0byB0ZXN0XG4gICAgQHJldHVybiBbYm9vbGVhbl06IElmIHV0aWxzIGxvb2tzIGxpa2UgYSByZWxhdGl2ZSB2YWx1ZSBhc3NpZ25tZW50XG4qL1xuZXhwb3J0IGNvbnN0IGlzUmVsYXRpdmVWYWx1ZSA9ICh2YWx1ZSkgPT4gKHZhbHVlICYmIHZhbHVlLmluZGV4T2YgJiYgdmFsdWUuaW5kZXhPZignPScpID4gMCkgPyB0cnVlIDogZmFsc2U7XG5cbi8qXG4gICAgSXMgdXRpbHMgdmFyIGEgc3RyaW5nID8gXG4gICAgXG4gICAgQHBhcmFtOiBWYXJpYWJsZSB0byB0ZXN0XG4gICAgQHJldHVybiBbYm9vbGVhbl06IFJldHVybnMgdHJ1ZSBpZiB0eXBlb2Ygc3RyID09PSAnc3RyaW5nJ1xuKi9cbmV4cG9ydCBjb25zdCBpc1N0cmluZyA9IChzdHIpID0+IHR5cGVvZiBzdHIgPT09ICdzdHJpbmcnO1xuXG4vKlxuICAgIEBwYXJhbSBbc3RyaW5nIHx8IE5vZGVMaXN0XTpcbiAgICAgICAgSWYgc3RyaW5nLCB0cmVhdGVkIGFzIHNlbGVjdG9yLlxuICAgICAgICBJZiBub3QsIHRyZWF0ZWQgYXMgcHJlZXhpc3RpbmcgTm9kZUxpc3RcblxuICAgIEByZXR1cm4gW0FycmF5XVxuKi9cbmV4cG9ydCBjb25zdCBzZWxlY3REb20gPSAoc2VsZWN0b3IpID0+IHtcbiAgICBjb25zdCBub2RlcyA9ICh0eXBlb2Ygc2VsZWN0b3IgPT09ICdzdHJpbmcnKSA/IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoc2VsZWN0b3IpIDogc2VsZWN0b3I7XG4gICAgcmV0dXJuIChub2Rlcy5sZW5ndGgpID8gW10uc2xpY2UuY2FsbChub2RlcykgOiBbXS5wdXNoKG5vZGVzKTtcbn07XG5cbi8qXG4gICAgU3BsaXQgY29tbWEtZGVsaW1pdGVkIHN0cmluZ1xuXG4gICAgXCJmb28sYmFyXCIgLT4gW1wiZm9vXCIsIFwiYmFyXCJdXG5cbiAgICBAcGFyYW0gW3N0cmluZ11cbiAgICBAcmV0dXJuIFthcnJheV1cbiovXG5leHBvcnQgY29uc3Qgc3BsaXRDb21tYURlbGltaXRlZCA9ICh2YWx1ZSkgPT4gaXNTdHJpbmcodmFsdWUpID8gdmFsdWUuc3BsaXQoLyxcXHMqLykgOiBbdmFsdWVdO1xuXG4vKlxuICAgIFNwbGl0IHNwYWNlLWRlbGltaXRlZCBzdHJpbmdcblxuICAgIFwiZm9vIGJhclwiIC0+IFtcImZvb1wiLCBcImJhclwiXVxuXG4gICAgQHBhcmFtIFtzdHJpbmddXG4gICAgQHJldHVybiBbYXJyYXldXG4qL1xuZXhwb3J0IGNvbnN0IHNwbGl0U3BhY2VEZWxpbWl0ZWQgPSAodmFsdWUpID0+IGlzU3RyaW5nKHZhbHVlKSA/IHZhbHVlLnNwbGl0KCcgJykgOiBbdmFsdWVdO1xuXG4vKlxuICAgIFNwbGl0IGEgdmFsdWUgaW50byBhIHZhbHVlL3VuaXQgb2JqZWN0XG4gICAgXG4gICAgICAgIFwiMjAwcHhcIiAtPiB7IHZhbHVlOiAyMDAsIHVuaXQ6IFwicHhcIiB9XG4gICAgICAgIFxuICAgIEBwYXJhbSBbc3RyaW5nXTogVmFsdWUgdG8gc3BsaXRcbiAgICBAcmV0dXJuIFtvYmplY3RdOiBPYmplY3Qgd2l0aCB2YWx1ZSBhbmQgdW5pdCBwcm9wc1xuKi9cbmV4cG9ydCBjb25zdCBzcGxpdFZhbHVlVW5pdCA9ICh2YWx1ZSkgPT4ge1xuICAgIGNvbnN0IHNwbGl0VmFsID0gdmFsdWUubWF0Y2goLygtP1xcZCpcXC4/XFxkKikoLiopLyk7XG5cbiAgICByZXR1cm4ge1xuICAgICAgICB2YWx1ZTogcGFyc2VGbG9hdChzcGxpdFZhbFsxXSksXG4gICAgICAgIHVuaXQ6ICBzcGxpdFZhbFsyXVxuICAgIH07XG59O1xuXG4vKlxuICAgIENvbnZlcnQgbnVtYmVyIHRvIHggZGVjaW1hbCBwbGFjZXNcblxuICAgIEBwYXJhbSBbbnVtYmVyXVxuICAgIEBwYXJhbSBbbnVtYmVyXVxuICAgIEByZXR1cm4gW251bWJlcl1cbiovXG5leHBvcnQgY29uc3QgdG9EZWNpbWFsID0gKG51bSwgcHJlY2lzaW9uID0gMikgPT4ge1xuICAgIHByZWNpc2lvbiA9IDEwICoqIHByZWNpc2lvbjtcbiAgICByZXR1cm4gTWF0aC5yb3VuZChudW0gKiBwcmVjaXNpb24pIC8gcHJlY2lzaW9uO1xufTtcbiJdfQ==

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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9wcm9jZXNzL3RpbWVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFFQSxJQUFNLGNBQWMsRUFBZDs7QUFFTixJQUFJLFVBQVUsQ0FBVjtBQUNKLElBQUksVUFBVSxJQUFWO0FBQ0osSUFBSSxXQUFXLENBQVg7O2tCQUVXO0FBQ1gsWUFBUSxVQUFDLFVBQUQsRUFBZ0I7QUFDcEIsa0JBQVUsS0FBSyxHQUFMLENBQVMsS0FBSyxHQUFMLENBQVMsYUFBYSxPQUFiLEVBQXNCLFdBQS9CLENBQVQsRUFBc0QsQ0FBdEQsSUFBMkQsUUFBM0QsQ0FEVTtBQUVwQixrQkFBVSxVQUFWLENBRm9CO0tBQWhCOztBQUtSLFdBQU87ZUFBTSxVQUFVLHlCQUFWO0tBQU47O0FBRVAsZ0JBQVk7ZUFBTTtLQUFOOztBQUdULElBQU0sZ0RBQW9CLFVBQUMsV0FBRDtXQUFpQixXQUFXLFdBQVg7Q0FBakIiLCJmaWxlIjoidGltZXIuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL01hdHQvU2l0ZXMvcG9wbW90aW9uIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3VycmVudFRpbWUgfSBmcm9tICcuLi9pbmMvdXRpbHMnO1xuXG5jb25zdCBNQVhfRUxBUFNFRCA9IDMzO1xuXG5sZXQgY3VycmVudCA9IDA7XG5sZXQgZWxhcHNlZCA9IDE2Ljc7XG5sZXQgZGlsYXRpb24gPSAxO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgdXBkYXRlOiAoZnJhbWVzdGFtcCkgPT4ge1xuICAgICAgICBlbGFwc2VkID0gTWF0aC5tYXgoTWF0aC5taW4oZnJhbWVzdGFtcCAtIGN1cnJlbnQsIE1BWF9FTEFQU0VEKSwgMSkgKiBkaWxhdGlvbjtcbiAgICAgICAgY3VycmVudCA9IGZyYW1lc3RhbXA7XG4gICAgfSxcblxuICAgIHN0YXJ0OiAoKSA9PiBjdXJyZW50ID0gY3VycmVudFRpbWUoKSxcblxuICAgIGdldEVsYXBzZWQ6ICgpID0+IGVsYXBzZWRcbn07XG5cbmV4cG9ydCBjb25zdCBzZXRHbG9iYWxEaWxhdGlvbiA9IChuZXdEaWxhdGlvbikgPT4gZGlsYXRpb24gPSBuZXdEaWxhdGlvbjsiXX0=

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _Action2 = __webpack_require__(32);
	
	var _Action3 = _interopRequireDefault(_Action2);
	
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
	
	var Actor = function (_Action) {
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
	        if (instant || !this.reducer) {
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
	    };
	
	    Actor.prototype.willRender = function willRender(actor, frameStamp, elapsed) {
	        for (var i = 0; i < this.numValueKeys; i++) {
	            var key = this.valueKeys[i];
	            var value = this.values[key];
	
	            if (value.driver) {
	                value.current = this.activeActions[value.driver].values[key].current;
	            }
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
	
	            value.driver = id;
	            actionValue.from = value.current;
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
	
	        for (var i = 0; i < action.numValueKeys; i++) {
	            var key = action.valueKeys[i];
	            var value = this.values[key];
	
	            value.driver = undefined;
	        }
	
	        delete this.activeActions[id];
	        this.numActiveActions--;
	
	        if (!this.numActiveActions && this.isActive) {
	            _Action.prototype.stop.call(this);
	        }
	    };
	
	    return Actor;
	}(_Action3.default);
	
	exports.default = Actor;
	//# sourceMappingURL=data:application/json;base64,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Qzs7QUFTQSxZQUFJLEtBQUssZ0JBQUwsRUFBdUI7QUFDdkIsOEJBQU0sS0FBTixZQUR1QjtTQUEzQjs7Ozs7Ozs7QUFqSGEsb0JBMkhqQiw2Q0FBaUIsSUFBSTtBQUNqQixZQUFNLFNBQVMsS0FBSyxhQUFMLENBQW1CLEVBQW5CLENBQVQsQ0FEVzs7QUFHakIsYUFBSyxJQUFJLElBQUksQ0FBSixFQUFPLElBQUksT0FBTyxZQUFQLEVBQXFCLEdBQXpDLEVBQThDO0FBQzFDLGdCQUFNLE1BQU0sT0FBTyxTQUFQLENBQWlCLENBQWpCLENBQU4sQ0FEb0M7QUFFMUMsZ0JBQU0sUUFBUSxLQUFLLE1BQUwsQ0FBWSxHQUFaLENBQVIsQ0FGb0M7O0FBSTFDLGtCQUFNLE1BQU4sR0FBZSxTQUFmLENBSjBDO1NBQTlDOztBQU9BLGVBQU8sS0FBSyxhQUFMLENBQW1CLEVBQW5CLENBQVAsQ0FWaUI7QUFXakIsYUFBSyxnQkFBTCxHQVhpQjs7QUFhakIsWUFBSSxDQUFDLEtBQUssZ0JBQUwsSUFBeUIsS0FBSyxRQUFMLEVBQWU7QUFDekMsOEJBQU0sSUFBTixZQUR5QztTQUE3Qzs7O1dBeElhIiwiZmlsZSI6IkFjdG9yLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9NYXR0L1NpdGVzL3BvcG1vdGlvbiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBBY3Rpb24gZnJvbSAnLi4vYWN0aW9ucy9BY3Rpb24nO1xuXG4vKlxuICAgIE1ldGhvZHMgYW5kIHByb3BlcnRpZXMgdG8gYWRkIHRvIGJvdW5kIEFjdGlvbnNcbiovXG5jb25zdCBib3VuZE9uU3RhcnQgPSAoYWN0aW9uKSA9PiBhY3Rpb24uYWN0b3IuYWN0aXZhdGVBY3Rpb24oYWN0aW9uLmlkLCBhY3Rpb24pO1xuY29uc3QgYm91bmRPblN0b3AgPSAoYWN0aW9uKSA9PiBhY3Rpb24uYWN0b3IuZGVhY3RpdmF0ZUFjdGlvbihhY3Rpb24uaWQpO1xuY29uc3QgYm91bmRQcm9wcyA9IChhY3RvcikgPT4gKHtcbiAgICBhY3RvcjogYWN0b3IsXG4gICAgaXNQcmlvcml0eTogdHJ1ZSxcbiAgICBvbjogYWN0b3Iub24sXG4gICAgX29uU3RhcnQ6IGJvdW5kT25TdGFydCxcbiAgICBfb25TdG9wOiBib3VuZE9uU3RvcCxcbiAgICBvblJlbmRlcjogdW5kZWZpbmVkXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQWN0b3IgZXh0ZW5kcyBBY3Rpb24ge1xuICAgIGNvbnN0cnVjdG9yKC4uLmFyZ3MpIHtcbiAgICAgICAgc3VwZXIoLi4uYXJncyk7XG4gICAgICAgIHRoaXMuYWN0aXZlQWN0aW9ucyA9IHt9O1xuICAgICAgICB0aGlzLm51bUFjdGl2ZUFjdGlvbnMgPSAwO1xuICAgIH1cblxuICAgIHNldChwcm9wcywgaW5zdGFudCkge1xuICAgICAgICBpZiAoaW5zdGFudCB8fCAhdGhpcy5yZWR1Y2VyKSB7XG4gICAgICAgICAgICBzdXBlci5zZXQocHJvcHMpO1xuICAgICAgICAgICAgdGhpcy5vbmNlKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zdCBhY3Rpb24gPSB0aGlzLnJlZHVjZXIocHJvcHMpO1xuICAgICAgICAgICAgaWYgKGFjdGlvbikge1xuICAgICAgICAgICAgICAgIHRoaXMuc3RhcnQoYWN0aW9uKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qXG4gICAgICAgIEJpbmQgQWN0aW9uIHRvIEFjdG9yXG4gICAgKi9cbiAgICBiaW5kKGFjdGlvbikge1xuICAgICAgICBjb25zdCBpbmhlcml0ZWRBY3Rpb24gPSBhY3Rpb24uaW5oZXJpdCgpO1xuICAgICAgICBsZXQgbmV3VmFsdWVzID0ge307XG4gICAgICAgIGxldCBoYXNOZXdWYWx1ZXMgPSBmYWxzZTtcblxuICAgICAgICAvLyBDcmVhdGUgdmFsdWVzIG9uIGFjdG9yIHRoYXQgZG9uJ3QgZXhpc3RcbiAgICAgICAgZm9yIChsZXQga2V5IGluIGluaGVyaXRlZEFjdGlvbi52YWx1ZXMpIHtcbiAgICAgICAgICAgIGlmIChpbmhlcml0ZWRBY3Rpb24udmFsdWVzLmhhc093blByb3BlcnR5KGtleSkgJiYgIXRoaXMudmFsdWVzLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICAgICAgICBuZXdWYWx1ZXNba2V5XSA9IGluaGVyaXRlZEFjdGlvbi52YWx1ZXNba2V5XTtcbiAgICAgICAgICAgICAgICBoYXNOZXdWYWx1ZXMgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGhhc05ld1ZhbHVlcykge1xuICAgICAgICAgICAgdGhpcy5zZXQoeyB2YWx1ZXM6IG5ld1ZhbHVlcyB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBpbmhlcml0ZWRBY3Rpb24uc2V0KGJvdW5kUHJvcHModGhpcywgaW5oZXJpdGVkQWN0aW9uKSk7XG4gICAgfVxuXG4gICAgLypcbiAgICAgICAgU3RhcnQgQWN0b3JcblxuICAgICAgICBJZiBBY3Rpb24gaXMgcHJvdmlkZWQsIGJpbmQgaXQgdG8gdGhpcyBBY3RvciBhbmQgc3RhcnRcblxuICAgICAgICBAcGFyYW0gKG9wdGlvbmFsKSBbQWN0aW9uXVxuICAgICovXG4gICAgc3RhcnQoYWN0aW9uKSB7XG4gICAgICAgIHN1cGVyLnN0YXJ0KCk7XG5cbiAgICAgICAgaWYgKGFjdGlvbikge1xuICAgICAgICAgICAgY29uc3QgYm91bmRBY3Rpb24gPSB0aGlzLmJpbmQoYWN0aW9uKTtcbiAgICAgICAgICAgIGJvdW5kQWN0aW9uLnN0YXJ0KCk7XG5cbiAgICAgICAgICAgIHJldHVybiBib3VuZEFjdGlvbjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGZvciAobGV0IGtleSBpbiB0aGlzLmFjdGl2ZUFjdGlvbnMpIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5hY3RpdmVBY3Rpb25zLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgYWN0aW9uID0gdGhpcy5hY3RpdmVBY3Rpb25zW2tleV07XG4gICAgICAgICAgICAgICAgICAgIGlmICghYWN0aW9uLmlzQWN0aXZlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhY3Rpb24uc3RhcnQoKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIHN0b3AoKSB7XG4gICAgICAgIHN1cGVyLnN0b3AoKTtcblxuICAgICAgICBmb3IgKGxldCBrZXkgaW4gdGhpcy5hY3RpdmVBY3Rpb25zKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5hY3RpdmVBY3Rpb25zLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmFjdGl2ZUFjdGlvbnNba2V5XS5zdG9wKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB3aWxsUmVuZGVyKGFjdG9yLCBmcmFtZVN0YW1wLCBlbGFwc2VkKSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5udW1WYWx1ZUtleXM7IGkrKykge1xuICAgICAgICAgICAgY29uc3Qga2V5ID0gdGhpcy52YWx1ZUtleXNbaV07XG4gICAgICAgICAgICBjb25zdCB2YWx1ZSA9IHRoaXMudmFsdWVzW2tleV07XG5cbiAgICAgICAgICAgIGlmICh2YWx1ZS5kcml2ZXIpIHtcbiAgICAgICAgICAgICAgICB2YWx1ZS5jdXJyZW50ID0gdGhpcy5hY3RpdmVBY3Rpb25zW3ZhbHVlLmRyaXZlcl0udmFsdWVzW2tleV0uY3VycmVudDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBzdXBlci53aWxsUmVuZGVyKGFjdG9yLCBmcmFtZVN0YW1wLCBlbGFwc2VkKTtcbiAgICB9XG5cbiAgICAvKlxuICAgICAgICBBZGQgYWN0aXZlIGFjdGlvbnNcblxuICAgICAgICBAcGFyYW0gW251bWJlcl1cbiAgICAgICAgQHBhcmFtIFtBY3Rpb25dXG4gICAgKi9cbiAgICBhY3RpdmF0ZUFjdGlvbihpZCwgYWN0aW9uKSB7XG4gICAgICAgIHRoaXMuYWN0aXZlQWN0aW9uc1tpZF0gPSBhY3Rpb247XG4gICAgICAgIHRoaXMubnVtQWN0aXZlQWN0aW9ucysrO1xuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYWN0aW9uLm51bVZhbHVlS2V5czsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCBrZXkgPSBhY3Rpb24udmFsdWVLZXlzW2ldO1xuICAgICAgICAgICAgY29uc3QgYWN0aW9uVmFsdWUgPSBhY3Rpb24udmFsdWVzW2tleV07XG4gICAgICAgICAgICBjb25zdCB2YWx1ZSA9IHRoaXMudmFsdWVzW2tleV07XG5cbiAgICAgICAgICAgIHZhbHVlLmRyaXZlciA9IGlkO1xuICAgICAgICAgICAgYWN0aW9uVmFsdWUuZnJvbSA9IHZhbHVlLmN1cnJlbnQ7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5udW1BY3RpdmVBY3Rpb25zKSB7XG4gICAgICAgICAgICBzdXBlci5zdGFydCgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLypcbiAgICAgICAgUmVtb3ZlIGFjdGl2ZSBhY3Rpb25zXG5cbiAgICAgICAgQHBhcmFtIFtudW1iZXJdXG4gICAgKi9cbiAgICBkZWFjdGl2YXRlQWN0aW9uKGlkKSB7XG4gICAgICAgIGNvbnN0IGFjdGlvbiA9IHRoaXMuYWN0aXZlQWN0aW9uc1tpZF07XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhY3Rpb24ubnVtVmFsdWVLZXlzOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IGtleSA9IGFjdGlvbi52YWx1ZUtleXNbaV07XG4gICAgICAgICAgICBjb25zdCB2YWx1ZSA9IHRoaXMudmFsdWVzW2tleV07XG5cbiAgICAgICAgICAgIHZhbHVlLmRyaXZlciA9IHVuZGVmaW5lZDtcbiAgICAgICAgfVxuXG4gICAgICAgIGRlbGV0ZSB0aGlzLmFjdGl2ZUFjdGlvbnNbaWRdO1xuICAgICAgICB0aGlzLm51bUFjdGl2ZUFjdGlvbnMtLTtcblxuICAgICAgICBpZiAoIXRoaXMubnVtQWN0aXZlQWN0aW9ucyAmJiB0aGlzLmlzQWN0aXZlKSB7XG4gICAgICAgICAgICBzdXBlci5zdG9wKCk7XG4gICAgICAgIH1cbiAgICB9XG59Il19

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	exports.__esModule = true;
	
	var _Action2 = __webpack_require__(32);
	
	var _Action3 = _interopRequireDefault(_Action2);
	
	var _presetEasing = __webpack_require__(17);
	
	var _presetEasing2 = _interopRequireDefault(_presetEasing);
	
	var _utils = __webpack_require__(2);
	
	var _calc = __webpack_require__(18);
	
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
	
	/*
	    Ease value within ranged parameters
	    
	    @param [number]: Progress between 0 and 1
	    @param [number]: Value of 0 progress
	    @param [number]: Value of 1 progress
	    @param [string || function]: Name of preset easing
	        to use or generated easing function
	    @return [number]: Value of eased progress in range
	*/
	var ease = function (progress, from, to, ease) {
	    var progressLimited = (0, _calc.restrict)(progress, 0, 1);
	    var easedProgress = ease(progressLimited);
	
	    return (0, _calc.getValueFromProgress)(easedProgress, from, to);
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
	            value.current = ease(progress, value.from, value.to, value.ease);
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
	}(_Action3.default);
	
	exports.default = Tween;
	//# sourceMappingURL=data:application/json;base64,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QWUsQ0FBZjtBQUNBLG1CQUFPLEtBQVA7QUFDQSxxQkFBUyxDQUFUO1VBVkosQ0FEYzs7O0FBaEdELG9CQStHakIsNkNBQWtCO0FBQ2QsNEJBQ08sa0JBQU0sZUFBTjtBQUNILG1CQUFPLENBQVA7QUFDQSxzQkFBVSxHQUFWO0FBQ0Esa0JBQU0sdUJBQU8sT0FBUDtBQUNOLHFCQUFTLENBQVQ7QUFDQSxxQkFBUyxDQUFUO0FBQ0EsbUJBQU8sQ0FBUDtBQUNBLGtCQUFNLENBQU47QUFDQSxnQkFBSSxDQUFKO0FBQ0EsbUJBQU8sS0FBUDtVQVZKLENBRGM7OztBQS9HRCxvQkE4SGpCLHFEQUFzQjtBQUNsQixlQUFPLElBQVAsQ0FEa0I7OztXQTlITCIsImZpbGUiOiJUd2Vlbi5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvTWF0dC9TaXRlcy9wb3Btb3Rpb24iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQWN0aW9uIGZyb20gJy4vQWN0aW9uJztcbmltcG9ydCBlYXNpbmcgZnJvbSAnLi9lYXNpbmcvcHJlc2V0LWVhc2luZyc7XG5pbXBvcnQgeyBjdXJyZW50VGltZSwgaXNOdW0gfSBmcm9tICcuLi9pbmMvdXRpbHMnO1xuaW1wb3J0IHtcbiAgICByZXN0cmljdCxcbiAgICBnZXRQcm9ncmVzc0Zyb21WYWx1ZSxcbiAgICBnZXRWYWx1ZUZyb21Qcm9ncmVzcyxcbiAgICBzdGVwUHJvZ3Jlc3Ncbn0gZnJvbSAnLi4vaW5jL2NhbGMnO1xuXG5jb25zdCBDT1VOVCA9ICdDb3VudCc7XG5jb25zdCBORVhUX1NURVBTID0ge1xuICAgIGxvb3A6ICdyZXN0YXJ0JyxcbiAgICB5b3lvOiAncmV2ZXJzZScsXG4gICAgZmxpcDogJ2ZsaXBWYWx1ZXMnXG59O1xuXG4vKlxuICAgIEVhc2UgdmFsdWUgd2l0aGluIHJhbmdlZCBwYXJhbWV0ZXJzXG4gICAgXG4gICAgQHBhcmFtIFtudW1iZXJdOiBQcm9ncmVzcyBiZXR3ZWVuIDAgYW5kIDFcbiAgICBAcGFyYW0gW251bWJlcl06IFZhbHVlIG9mIDAgcHJvZ3Jlc3NcbiAgICBAcGFyYW0gW251bWJlcl06IFZhbHVlIG9mIDEgcHJvZ3Jlc3NcbiAgICBAcGFyYW0gW3N0cmluZyB8fCBmdW5jdGlvbl06IE5hbWUgb2YgcHJlc2V0IGVhc2luZ1xuICAgICAgICB0byB1c2Ugb3IgZ2VuZXJhdGVkIGVhc2luZyBmdW5jdGlvblxuICAgIEByZXR1cm4gW251bWJlcl06IFZhbHVlIG9mIGVhc2VkIHByb2dyZXNzIGluIHJhbmdlXG4qLyBcbmNvbnN0IGVhc2UgPSAocHJvZ3Jlc3MsIGZyb20sIHRvLCBlYXNlKSA9PiB7XG4gICAgY29uc3QgcHJvZ3Jlc3NMaW1pdGVkID0gcmVzdHJpY3QocHJvZ3Jlc3MsIDAsIDEpO1xuICAgIGNvbnN0IGVhc2VkUHJvZ3Jlc3MgPSBlYXNlKHByb2dyZXNzTGltaXRlZCk7XG5cbiAgICByZXR1cm4gZ2V0VmFsdWVGcm9tUHJvZ3Jlc3MoZWFzZWRQcm9ncmVzcywgZnJvbSwgdG8pO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVHdlZW4gZXh0ZW5kcyBBY3Rpb24ge1xuICAgIHN0YXJ0KCkge1xuICAgICAgICBzdXBlci5zdGFydCgpO1xuICAgICAgICB0aGlzLmVsYXBzZWQgPSAwO1xuICAgICAgICB0aGlzLmZsaXBDb3VudCA9IHRoaXMueW95b0NvdW50ID0gdGhpcy5sb29wQ291bnQgPSAwO1xuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIG9uVXBkYXRlKHR3ZWVuLCBmcmFtZVN0YW1wLCBlbGFwc2VkKSB7XG4gICAgICAgIGNvbnN0IHByb2dyZXNzVGFyZ2V0ID0gKHRoaXMucGxheURpcmVjdGlvbiA9PT0gMSkgPyAxIDogMDtcblxuICAgICAgICB0aGlzLmVuZGVkID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5lbGFwc2VkICs9IChlbGFwc2VkICogdGhpcy5kaWxhdGUpICogdGhpcy5wbGF5RGlyZWN0aW9uO1xuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5udW1WYWx1ZUtleXM7IGkrKykge1xuICAgICAgICAgICAgY29uc3Qga2V5ID0gdGhpcy52YWx1ZUtleXNbaV07XG4gICAgICAgICAgICBjb25zdCB2YWx1ZSA9IHRoaXMudmFsdWVzW2tleV07XG5cbiAgICAgICAgICAgIGxldCBwcm9ncmVzcyA9IHJlc3RyaWN0KGdldFByb2dyZXNzRnJvbVZhbHVlKHRoaXMuZWxhcHNlZCAtIHZhbHVlLmRlbGF5LCAwLCB2YWx1ZS5kdXJhdGlvbiksIDAsIDEpO1xuXG4gICAgICAgICAgICAvLyBNYXJrIFR3ZWVuIGFzIE5PVCBlbmRlZCBpZiBzdGlsbCBpbiBwcm9ncmVzc1xuICAgICAgICAgICAgaWYgKHByb2dyZXNzICE9PSBwcm9ncmVzc1RhcmdldCkge1xuICAgICAgICAgICAgICAgIHRoaXMuZW5kZWQgPSBmYWxzZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gU3RlcCBwcm9ncmVzcyBpZiB3ZSdyZSBzdGVwcGluZ1xuICAgICAgICAgICAgaWYgKHZhbHVlLnN0ZXBzKSB7XG4gICAgICAgICAgICAgICAgcHJvZ3Jlc3MgPSBzdGVwUHJvZ3Jlc3MocHJvZ3Jlc3MsIHZhbHVlLnN0ZXBzKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gRWFzZSBwcm9ncmVzc1xuICAgICAgICAgICAgdmFsdWUuY3VycmVudCA9IGVhc2UocHJvZ3Jlc3MsIHZhbHVlLmZyb20sIHZhbHVlLnRvLCB2YWx1ZS5lYXNlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG9uRnJhbWVFbmQoKSB7XG4gICAgICAgIGlmICh0aGlzLmVuZGVkKSB7XG4gICAgICAgICAgICBsZXQgc3RlcFRha2VuID0gZmFsc2U7XG5cbiAgICAgICAgICAgIGZvciAobGV0IGtleSBpbiBORVhUX1NURVBTKSB7XG4gICAgICAgICAgICAgICAgaWYgKE5FWFRfU1RFUFMuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBtYXhTdGVwcyA9IHRoaXNba2V5XTtcblxuICAgICAgICAgICAgICAgICAgICBpZiAobWF4U3RlcHMgPT09IHRydWUgfHwgKGlzTnVtKG1heFN0ZXBzKSAmJiBtYXhTdGVwcyA+IHRoaXNba2V5ICsgQ09VTlRdKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpc1trZXkgKyBDT1VOVF0rKztcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0ZXBUYWtlbiA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzW05FWFRfU1RFUFNba2V5XV0oKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKCFzdGVwVGFrZW4pIHtcbiAgICAgICAgICAgICAgICB0aGlzLnN0b3AoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZsaXBWYWx1ZXMoKSB7XG4gICAgICAgIGNvbnN0IHZhbHVlcyA9IHRoaXMudmFsdWVzO1xuXG4gICAgICAgIHRoaXMuZWxhcHNlZCA9IHRoaXMuZHVyYXRpb24gLSB0aGlzLmVsYXBzZWQ7XG5cbiAgICAgICAgZm9yIChsZXQga2V5IGluIHZhbHVlcykge1xuICAgICAgICAgICAgaWYgKHZhbHVlcy5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgdmFsdWUgPSB2YWx1ZXNba2V5XTtcbiAgICAgICAgICAgICAgICBbdmFsdWUudG8sIHZhbHVlLmZyb21dID0gW3ZhbHVlLmZyb20sIHZhbHVlLnRvXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIHJldmVyc2UoKSB7XG4gICAgICAgIHRoaXMucGxheURpcmVjdGlvbiAqPSAtMTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgcmVzdGFydCgpIHtcbiAgICAgICAgdGhpcy5lbGFwc2VkID0gKHRoaXMucGxheURpcmVjdGlvbiA9PT0gMSkgPyAwIDogdGhpcy5kdXJhdGlvbjtcbiAgICAgICAgdGhpcy5zdGFydGVkID0gY3VycmVudFRpbWUoKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgc2Vlayhwcm9ncmVzcykge1xuICAgICAgICB0aGlzLnNlZWtUaW1lKHRoaXMuZHVyYXRpb24gKiBwcm9ncmVzcyk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIHNlZWtUaW1lKGVsYXBzZWQpIHtcbiAgICAgICAgdGhpcy5vbmNlKCk7XG4gICAgICAgIHRoaXMuZWxhcHNlZCA9IGVsYXBzZWQ7XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIFxuICAgIGdldERlZmF1bHRQcm9wcygpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIC4uLnN1cGVyLmdldERlZmF1bHRQcm9wcygpLFxuICAgICAgICAgICAgZGVsYXk6IDAsXG4gICAgICAgICAgICBkaWxhdGU6IDEsXG4gICAgICAgICAgICBkdXJhdGlvbjogMzAwLFxuICAgICAgICAgICAgbG9vcDogZmFsc2UsXG4gICAgICAgICAgICB5b3lvOiBmYWxzZSxcbiAgICAgICAgICAgIGZsaXA6IGZhbHNlLFxuICAgICAgICAgICAgcGxheURpcmVjdGlvbjogMSxcbiAgICAgICAgICAgIGVuZGVkOiBmYWxzZSxcbiAgICAgICAgICAgIGVsYXBzZWQ6IDBcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBnZXREZWZhdWx0VmFsdWUoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAuLi5zdXBlci5nZXREZWZhdWx0VmFsdWUoKSxcbiAgICAgICAgICAgIGRlbGF5OiAwLFxuICAgICAgICAgICAgZHVyYXRpb246IDMwMCxcbiAgICAgICAgICAgIGVhc2U6IGVhc2luZy5lYXNlT3V0LFxuICAgICAgICAgICAgZWxhcHNlZDogMCxcbiAgICAgICAgICAgIHN0YWdnZXI6IDAsXG4gICAgICAgICAgICBzdGVwczogMCxcbiAgICAgICAgICAgIGZyb206IDAsXG4gICAgICAgICAgICB0bzogMCxcbiAgICAgICAgICAgIHJvdW5kOiBmYWxzZVxuICAgICAgICB9O1xuICAgIH1cblxuICAgIGdldERlZmF1bHRWYWx1ZVByb3AoKSB7XG4gICAgICAgIHJldHVybiAndG8nO1xuICAgIH1cbn1cbiJdfQ==

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	exports.__esModule = true;
	
	var _Action2 = __webpack_require__(32);
	
	var _Action3 = _interopRequireDefault(_Action2);
	
	var _calc = __webpack_require__(18);
	
	var _utils = __webpack_require__(2);
	
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
	}(_Action3.default);
	
	exports.default = Physics;
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hY3Rpb25zL1BoeXNpY3MuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUlxQjs7O0FBRWpCLGFBRmlCLE9BRWpCLEdBQXFCOzhCQUZKLFNBRUk7OzBDQUFOOztTQUFNOztxREFDakIsMENBQVMsS0FBVCxHQURpQjs7QUFFakIsY0FBSyxjQUFMLEdBQXNCLENBQXRCLENBRmlCO0FBR2pCLGNBQUssa0JBQUwsR0FBMEIsSUFBMUIsQ0FIaUI7O0tBQXJCOztBQUZpQixzQkFRakIsNkJBQVMsU0FBUyxZQUFZLFNBQVM7QUFDbkMsYUFBSyxVQUFMLEdBQWtCLEtBQWxCLENBRG1DOztBQUduQyxhQUFLLElBQUksSUFBSSxDQUFKLEVBQU8sSUFBSSxLQUFLLFlBQUwsRUFBbUIsR0FBdkMsRUFBNEM7QUFDeEMsZ0JBQU0sTUFBTSxLQUFLLFNBQUwsQ0FBZSxDQUFmLENBQU4sQ0FEa0M7QUFFeEMsZ0JBQU0sUUFBUSxLQUFLLE1BQUwsQ0FBWSxHQUFaLENBQVIsQ0FGa0M7QUFHeEMsZ0JBQU0sZ0JBQWdCLE1BQU0sSUFBTjs7O0FBSGtCLGlCQU14QyxDQUFNLFFBQU4sSUFBa0IseUJBQWMsTUFBTSxZQUFOLEVBQW9CLE9BQWxDLENBQWxCOzs7QUFOd0MsaUJBU3hDLENBQU0sUUFBTixhQUFtQixJQUFJLE1BQU0sUUFBTixFQUFvQixVQUFVLEdBQVYsQ0FBM0M7OztBQVR3QyxnQkFZcEMsTUFBTSxNQUFOLElBQWdCLGtCQUFNLE1BQU0sRUFBTixDQUF0QixFQUFpQztBQUNqQyxvQkFBTSxtQkFBbUIsTUFBTSxFQUFOLEdBQVcsTUFBTSxPQUFOLENBREg7QUFFakMsc0JBQU0sUUFBTixJQUFrQixtQkFBbUIseUJBQWMsTUFBTSxNQUFOLEVBQWMsT0FBNUIsQ0FBbkIsQ0FGZTthQUFyQzs7O0FBWndDLGlCQWtCeEMsQ0FBTSxPQUFOLElBQWlCLHlCQUFjLE1BQU0sUUFBTixFQUFnQixPQUE5QixDQUFqQjs7O0FBbEJ3QyxnQkFxQnBDLE1BQU0sT0FBTixLQUFrQixhQUFsQixJQUFtQyxLQUFLLEdBQUwsQ0FBUyxNQUFNLFFBQU4sQ0FBVCxJQUE0QixNQUFNLFNBQU4sSUFBb0IsTUFBTSxNQUFOLElBQWdCLE1BQU0sT0FBTixLQUFrQixNQUFNLEVBQU4sRUFBVztBQUNoSSxxQkFBSyxVQUFMLEdBQWtCLElBQWxCLENBRGdJO2FBQXBJO1NBckJKOzs7QUFYYSxzQkFzQ2pCLG1DQUFhO0FBQ1QsWUFBSSxLQUFLLE9BQUwsRUFBYztBQUNkLGlCQUFLLGNBQUwsR0FBc0IsS0FBSyxVQUFMLEdBQWtCLENBQWxCLEdBQXNCLEtBQUssY0FBTCxHQUFzQixDQUF0QixDQUQ5Qjs7QUFHZCxnQkFBSSxLQUFLLGNBQUwsSUFBdUIsS0FBSyxpQkFBTCxFQUF3QjtBQUMvQyxxQkFBSyxJQUFMLEdBRCtDO2FBQW5EO1NBSEo7Ozs7Ozs7O0FBdkNhLHNCQXFEakIsNkNBQWtCO0FBQ2QsNEJBQ08sa0JBQU0sZUFBTjtBQUNILHFCQUFTLElBQVQ7QUFDQSwrQkFBbUIsQ0FBbkI7VUFISixDQURjOzs7Ozs7OztBQXJERCxzQkFrRWpCLDZDQUFrQjtBQUNkLDRCQUNPLGtCQUFNLGVBQU47QUFDSCwwQkFBYyxDQUFkO0FBQ0Esb0JBQVEsQ0FBUjtBQUNBLG9CQUFRLENBQVI7QUFDQSx1QkFBVyxNQUFYO0FBQ0Esc0JBQVUsQ0FBVjtVQU5KLENBRGM7Ozs7Ozs7OztBQWxFRCxzQkFtRmpCLHFEQUFzQjtBQUNsQixlQUFPLFVBQVAsQ0FEa0I7OztXQW5GTCIsImZpbGUiOiJQaHlzaWNzLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9NYXR0L1NpdGVzL3BvcG1vdGlvbiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBBY3Rpb24gZnJvbSAnLi9BY3Rpb24nO1xuaW1wb3J0IHsgc3BlZWRQZXJGcmFtZSB9IGZyb20gJy4uL2luYy9jYWxjJztcbmltcG9ydCB7IGlzTnVtIH0gZnJvbSAnLi4vaW5jL3V0aWxzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGh5c2ljcyBleHRlbmRzIEFjdGlvbiB7XG5cbiAgICBjb25zdHJ1Y3RvciguLi5hcmdzKSB7XG4gICAgICAgIHN1cGVyKC4uLmFyZ3MpO1xuICAgICAgICB0aGlzLmluYWN0aXZlRnJhbWVzID0gMDtcbiAgICAgICAgdGhpcy5jYWxjdWxhdGVzVmVsb2NpdHkgPSB0cnVlO1xuICAgIH1cblxuICAgIG9uVXBkYXRlKHBoeXNpY3MsIGZyYW1lU3RhbXAsIGVsYXBzZWQpIHtcbiAgICAgICAgdGhpcy5oYXNDaGFuZ2VkID0gZmFsc2U7XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLm51bVZhbHVlS2V5czsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCBrZXkgPSB0aGlzLnZhbHVlS2V5c1tpXTtcbiAgICAgICAgICAgIGNvbnN0IHZhbHVlID0gdGhpcy52YWx1ZXNba2V5XTtcbiAgICAgICAgICAgIGNvbnN0IHByZXZpb3VzVmFsdWUgPSB2YWx1ZS5wcmV2O1xuXG4gICAgICAgICAgICAvLyBBcHBseSBhY2NlbGVyYXRpb25cbiAgICAgICAgICAgIHZhbHVlLnZlbG9jaXR5ICs9IHNwZWVkUGVyRnJhbWUodmFsdWUuYWNjZWxlcmF0aW9uLCBlbGFwc2VkKTtcblxuICAgICAgICAgICAgLy8gQXBwbHkgZnJpY3Rpb25cbiAgICAgICAgICAgIHZhbHVlLnZlbG9jaXR5ICo9ICgxIC0gdmFsdWUuZnJpY3Rpb24pICoqIChlbGFwc2VkIC8gMTAwKTtcblxuICAgICAgICAgICAgLy8gQXBwbHkgc3ByaW5nXG4gICAgICAgICAgICBpZiAodmFsdWUuc3ByaW5nICYmIGlzTnVtKHZhbHVlLnRvKSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGRpc3RhbmNlVG9UYXJnZXQgPSB2YWx1ZS50byAtIHZhbHVlLmN1cnJlbnQ7XG4gICAgICAgICAgICAgICAgdmFsdWUudmVsb2NpdHkgKz0gZGlzdGFuY2VUb1RhcmdldCAqIHNwZWVkUGVyRnJhbWUodmFsdWUuc3ByaW5nLCBlbGFwc2VkKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gQXBwbHkgbGF0ZXN0IHZlbG9jaXR5XG4gICAgICAgICAgICB2YWx1ZS5jdXJyZW50ICs9IHNwZWVkUGVyRnJhbWUodmFsdWUudmVsb2NpdHksIGVsYXBzZWQpO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICAvLyBDaGVjayBpZiB2YWx1ZSBoYXMgY2hhbmdlZFxuICAgICAgICAgICAgaWYgKHZhbHVlLmN1cnJlbnQgIT09IHByZXZpb3VzVmFsdWUgfHwgTWF0aC5hYnModmFsdWUudmVsb2NpdHkpID49IHZhbHVlLnN0b3BTcGVlZCB8fCAodmFsdWUuc3ByaW5nICYmIHZhbHVlLmN1cnJlbnQgIT09IHZhbHVlLnRvKSkge1xuICAgICAgICAgICAgICAgIHRoaXMuaGFzQ2hhbmdlZCA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBvbkZyYW1lRW5kKCkge1xuICAgICAgICBpZiAodGhpcy5hdXRvRW5kKSB7XG4gICAgICAgICAgICB0aGlzLmluYWN0aXZlRnJhbWVzID0gdGhpcy5oYXNDaGFuZ2VkID8gMSA6IHRoaXMuaW5hY3RpdmVGcmFtZXMgKyAxO1xuXG4gICAgICAgICAgICBpZiAodGhpcy5pbmFjdGl2ZUZyYW1lcyA+PSB0aGlzLm1heEluYWN0aXZlRnJhbWVzKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zdG9wKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKlxuICAgICAgICAjIEdldCBkZWZhdWx0IFNpbXVsYXRlIHByb3BzXG5cbiAgICAgICAgQHJldHVybiBbb2JqZWN0XVxuICAgICovXG4gICAgZ2V0RGVmYXVsdFByb3BzKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgLi4uc3VwZXIuZ2V0RGVmYXVsdFByb3BzKCksXG4gICAgICAgICAgICBhdXRvRW5kOiB0cnVlLFxuICAgICAgICAgICAgbWF4SW5hY3RpdmVGcmFtZXM6IDNcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICAvKlxuICAgICAgICAjIEdldCBkZWZhdWx0IFNpbXVsYXRlIHZhbHVlIHByb3BzXG5cbiAgICAgICAgQHJldHVybiBbb2JqZWN0XVxuICAgICovXG4gICAgZ2V0RGVmYXVsdFZhbHVlKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgLi4uc3VwZXIuZ2V0RGVmYXVsdFZhbHVlKCksXG4gICAgICAgICAgICBhY2NlbGVyYXRpb246IDAsIC8vIFtudW1iZXJdOiBBY2NlbGVyYXRpb24gdG8gYXBwbHkgdG8gdmFsdWUsIGluIHVuaXRzIHBlciBzZWNvbmRcbiAgICAgICAgICAgIGJvdW5jZTogMCwgLy8gW251bWJlcl06IEZhY3RvciB0byBtdWx0aXBseSB2ZWxvY2l0eSBieSBvbiBib3VuY2VcbiAgICAgICAgICAgIHNwcmluZzogMCwgLy8gW251bWJlcl06IFNwcmluZyBzdHJlbmd0aCBkdXJpbmcgJ3N0cmluZydcbiAgICAgICAgICAgIHN0b3BTcGVlZDogMC4wMDAxLCAvLyBbbnVtYmVyXTogU3RvcCBzaW11bGF0aW9uIHVuZGVyIHRoaXMgc3BlZWRcbiAgICAgICAgICAgIGZyaWN0aW9uOiAwIC8vIFtudW1iZXJdOiBGcmljdGlvbiB0byBhcHBseSBwZXIgZnJhbWUsIDAtMVxuICAgICAgICB9O1xuICAgIH1cblxuICAgIC8qXG4gICAgICAgICMgR2V0IGRlZmF1bHQgU2ltdWxhdGUgdmFsdWUgcHJvcGVydHkgbmFtZVxuICAgICAgICAjIyBTZXQgdmFsdWVzIHRvIHRoaXMgd2hlbiBhIGB2YWx1ZWAgaXMgbm90IHByb3ZpZGVkIGFzIGFuIG9iamVjdFxuXG4gICAgICAgIEByZXR1cm4gW3N0cmluZ11cbiAgICAqL1xuICAgIGdldERlZmF1bHRWYWx1ZVByb3AoKSB7XG4gICAgICAgIHJldHVybiAndmVsb2NpdHknO1xuICAgIH1cbn1cbiJdfQ==

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	exports.__esModule = true;
	
	var _Action2 = __webpack_require__(32);
	
	var _Action3 = _interopRequireDefault(_Action2);
	
	var _Pointer = __webpack_require__(34);
	
	var _Pointer2 = _interopRequireDefault(_Pointer);
	
	var _calc = __webpack_require__(18);
	
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
	}(_Action3.default);
	
	exports.default = Track;
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hY3Rpb25zL1RyYWNrLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVVBLElBQU0sb0JBQW9CLFVBQUMsQ0FBRDtXQUFRO0FBQzlCLFdBQUcsRUFBRSxLQUFGO0FBQ0gsV0FBRyxFQUFFLEtBQUY7O0NBRm1COztBQUsxQixJQUFNLG9CQUFvQjtRQUFHO1dBQXNCO0FBQy9DLFdBQUcsZUFBZSxDQUFmLEVBQWtCLE9BQWxCO0FBQ0gsV0FBRyxlQUFlLENBQWYsRUFBa0IsT0FBbEI7O0NBRm1COztBQUsxQixJQUFNLGdCQUFnQixVQUFDLENBQUQ7V0FBTyxFQUFFLE9BQUYsR0FDekIsc0JBQVksa0JBQWtCLENBQWxCLENBQVosRUFBa0MsV0FBbEMsRUFBK0MsaUJBQS9DLENBRHlCLEdBRXpCLHNCQUFZLGtCQUFrQixDQUFsQixDQUFaLEVBQWtDLFdBQWxDLEVBQStDLGlCQUEvQyxDQUZ5QjtDQUFQOztBQUl0QixJQUFNLGlCQUFpQixVQUFDLENBQUQ7V0FBTyxFQUFFLGFBQUYsSUFBbUIsQ0FBbkI7Q0FBUDs7SUFFRjs7Ozs7Ozs7O29CQUNqQix1QkFBTSxPQUFPO0FBQ1QsMEJBQU0sS0FBTixZQURTOztBQUdULFlBQUksS0FBSixFQUFXO0FBQ1AsaUJBQUssS0FBTCxHQUFhLE1BQU0sS0FBTixHQUFjLEtBQWQsR0FBc0IsY0FBYyxlQUFlLEtBQWYsQ0FBZCxDQUF0QixDQUROO1NBQVg7O0FBSUEsYUFBSyxXQUFMLEdBQW1CLEVBQW5CLENBUFM7QUFRVCxhQUFLLFdBQUwsZ0JBQXdCLEtBQUssS0FBTCxDQUFXLEtBQVgsQ0FBeEIsQ0FSUztBQVNULGFBQUssS0FBTCxDQUFXLEtBQVgsR0FUUzs7O0FBREksb0JBYWpCLHVCQUFPO0FBQ0gsMEJBQU0sSUFBTixZQURHO0FBRUgsYUFBSyxLQUFMLENBQVcsSUFBWCxHQUZHOzs7QUFiVSxvQkFrQmpCLDZCQUFTLE9BQU8sWUFBWSxTQUFTO0FBQ2pDLGFBQUssV0FBTCxHQUFtQixrQkFBTyxLQUFLLFdBQUwsRUFBa0IsS0FBSyxLQUFMLENBQVcsS0FBWCxDQUE1QyxDQURpQzs7QUFHakMsYUFBSyxJQUFJLElBQUksQ0FBSixFQUFPLElBQUksS0FBSyxZQUFMLEVBQW1CLEdBQXZDLEVBQTRDO0FBQ3hDLGdCQUFNLE1BQU0sS0FBSyxTQUFMLENBQWUsQ0FBZixDQUFOLENBRGtDOztBQUd4QyxnQkFBSSxLQUFLLFdBQUwsQ0FBaUIsY0FBakIsQ0FBZ0MsR0FBaEMsQ0FBSixFQUEwQztBQUN0QyxvQkFBTSxRQUFRLEtBQUssTUFBTCxDQUFZLEdBQVosQ0FBUixDQURnQztBQUV0QyxvQkFBSSxNQUFNLE1BQU4sRUFBYztBQUNkLDBCQUFNLE9BQU4sR0FBZ0IsS0FBSyxLQUFMLENBQVcsS0FBWCxDQUFpQixHQUFqQixDQUFoQixDQURjO2lCQUFsQixNQUVPO0FBQ0gsMEJBQU0sT0FBTixHQUFnQixNQUFNLE1BQU4sR0FBZSxLQUFLLFdBQUwsQ0FBaUIsR0FBakIsQ0FBZixDQURiO2lCQUZQOzs7QUFGc0Msb0JBU2xDLE1BQU0sTUFBTixFQUFjO0FBQ2QsMEJBQU0sT0FBTixHQUFnQixrQkFBTyxNQUFNLE9BQU4sRUFBZSxNQUFNLElBQU4sRUFBWSxPQUFsQyxFQUEyQyxNQUFNLE1BQU4sQ0FBM0QsQ0FEYztpQkFBbEI7YUFUSjtTQUhKOzs7QUFyQmEsb0JBd0NqQiw2Q0FBa0I7QUFDZCw0QkFDTyxrQkFBTSxlQUFOO0FBQ0gsaUJBQUssQ0FBTDtBQUNBLHVCQUFXLENBQVg7QUFDQSxvQkFBUSxLQUFSO1VBSkosQ0FEYzs7O1dBeENEIiwiZmlsZSI6IlRyYWNrLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9NYXR0L1NpdGVzL3BvcG1vdGlvbiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBBY3Rpb24gZnJvbSAnLi9BY3Rpb24nO1xuaW1wb3J0IFBvaW50ZXIgZnJvbSAnLi4vaW5wdXQvUG9pbnRlcic7XG5pbXBvcnQgeyBzbW9vdGgsIG9mZnNldCB9IGZyb20gJy4uL2luYy9jYWxjJztcblxuLypcbiAgICBTY3JhcGUgeC95IGNvb3JkaW5hdGVzIGZyb20gcHJvdmlkZWQgZXZlbnRcblxuICAgIEBwYXJhbSBbZXZlbnRdXG4gICAgQHJldHVybiBbb2JqZWN0XVxuKi9cbmNvbnN0IG1vdXNlRXZlbnRUb1BvaW50ID0gKGUpID0+ICh7XG4gICAgeDogZS5wYWdlWCxcbiAgICB5OiBlLnBhZ2VZXG59KTtcblxuY29uc3QgdG91Y2hFdmVudFRvUG9pbnQgPSAoeyBjaGFuZ2VkVG91Y2hlcyB9KSA9PiAoe1xuICAgIHg6IGNoYW5nZWRUb3VjaGVzWzBdLmNsaWVudFgsXG4gICAgeTogY2hhbmdlZFRvdWNoZXNbMF0uY2xpZW50WVxufSk7XG5cbmNvbnN0IGNyZWF0ZVBvaW50ZXIgPSAoZSkgPT4gZS50b3VjaGVzID9cbiAgICBuZXcgUG9pbnRlcih0b3VjaEV2ZW50VG9Qb2ludChlKSwgJ3RvdWNobW92ZScsIHRvdWNoRXZlbnRUb1BvaW50KSA6IFxuICAgIG5ldyBQb2ludGVyKG1vdXNlRXZlbnRUb1BvaW50KGUpLCAnbW91c2Vtb3ZlJywgbW91c2VFdmVudFRvUG9pbnQpO1xuXG5jb25zdCBnZXRBY3R1YWxFdmVudCA9IChlKSA9PiBlLm9yaWdpbmFsRXZlbnQgfHwgZTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVHJhY2sgZXh0ZW5kcyBBY3Rpb24ge1xuICAgIHN0YXJ0KGlucHV0KSB7XG4gICAgICAgIHN1cGVyLnN0YXJ0KCk7XG5cbiAgICAgICAgaWYgKGlucHV0KSB7XG4gICAgICAgICAgICB0aGlzLmlucHV0ID0gaW5wdXQuc3RhdGUgPyBpbnB1dCA6IGNyZWF0ZVBvaW50ZXIoZ2V0QWN0dWFsRXZlbnQoaW5wdXQpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuaW5wdXRPZmZzZXQgPSB7fTtcbiAgICAgICAgdGhpcy5pbnB1dE9yaWdpbiA9IHsgLi4udGhpcy5pbnB1dC5zdGF0ZSB9O1xuICAgICAgICB0aGlzLmlucHV0LnN0YXJ0KCk7XG4gICAgfVxuXG4gICAgc3RvcCgpIHtcbiAgICAgICAgc3VwZXIuc3RvcCgpO1xuICAgICAgICB0aGlzLmlucHV0LnN0b3AoKTtcbiAgICB9XG5cbiAgICBvblVwZGF0ZSh0cmFjaywgZnJhbWVTdGFtcCwgZWxhcHNlZCkge1xuICAgICAgICB0aGlzLmlucHV0T2Zmc2V0ID0gb2Zmc2V0KHRoaXMuaW5wdXRPcmlnaW4sIHRoaXMuaW5wdXQuc3RhdGUpO1xuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5udW1WYWx1ZUtleXM7IGkrKykge1xuICAgICAgICAgICAgY29uc3Qga2V5ID0gdGhpcy52YWx1ZUtleXNbaV07XG5cbiAgICAgICAgICAgIGlmICh0aGlzLmlucHV0T2Zmc2V0Lmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICAgICAgICBjb25zdCB2YWx1ZSA9IHRoaXMudmFsdWVzW2tleV07XG4gICAgICAgICAgICAgICAgaWYgKHZhbHVlLmRpcmVjdCkge1xuICAgICAgICAgICAgICAgICAgICB2YWx1ZS5jdXJyZW50ID0gdGhpcy5pbnB1dC5zdGF0ZVtrZXldO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlLmN1cnJlbnQgPSB2YWx1ZS5vcmlnaW4gKyB0aGlzLmlucHV0T2Zmc2V0W2tleV07XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLy8gU21vb3RoIHZhbHVlIGlmIHdlIGhhdmUgc21vb3RoaW5nXG4gICAgICAgICAgICAgICAgaWYgKHZhbHVlLnNtb290aCkge1xuICAgICAgICAgICAgICAgICAgICB2YWx1ZS5jdXJyZW50ID0gc21vb3RoKHZhbHVlLmN1cnJlbnQsIHZhbHVlLnByZXYsIGVsYXBzZWQsIHZhbHVlLnNtb290aCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZ2V0RGVmYXVsdFZhbHVlKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgLi4uc3VwZXIuZ2V0RGVmYXVsdFZhbHVlKCksXG4gICAgICAgICAgICBhbXA6IDEsXG4gICAgICAgICAgICBlc2NhcGVBbXA6IDAsXG4gICAgICAgICAgICBkaXJlY3Q6IGZhbHNlXG4gICAgICAgIH07XG4gICAgfVxufVxuIl19

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _loop = __webpack_require__(33);
	
	var loop = _interopRequireWildcard(_loop);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Process = function () {
	    /*
	        [object]: Properties
	        [boolean] (optional): Is Process lazy?
	    */
	
	    function Process(props, isLazy) {
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
	
	        this.isLazy = isLazy || false;
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
	}();
	
	exports.default = Process;
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9wcm9jZXNzL1Byb2Nlc3MuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0lBQVk7Ozs7Ozs7O0lBRVM7Ozs7OztBQUtqQixhQUxpQixPQUtqQixDQUFZLEtBQVosRUFBbUIsTUFBbkIsRUFBMkI7Ozs4QkFMVixTQUtVOztBQUN2QixhQUFLLEVBQUwsR0FBVSxLQUFLLFlBQUwsRUFBVixDQUR1Qjs7QUFHdkIsYUFBSyxVQUFMLEdBQWtCLFlBQU07QUFDcEIsa0JBQUssSUFBTCxHQURvQjtBQUVwQixrQkFBSyxTQUFMLEdBQWlCLFNBQWpCLENBRm9CO1NBQU4sQ0FISzs7QUFRdkIsYUFBSyxXQUFMLEdBQW1CO21CQUFNLE1BQUssU0FBTCxHQUFpQixNQUFLLFVBQUw7U0FBdkIsQ0FSSTs7QUFVdkIsYUFBSyxHQUFMLENBQVMsS0FBSyxlQUFMLEVBQVQsRUFWdUI7QUFXdkIsYUFBSyxHQUFMLENBQVMsS0FBVCxFQVh1Qjs7QUFhdkIsYUFBSyxNQUFMLEdBQWMsVUFBVSxLQUFWLENBYlM7QUFjdkIsYUFBSyxRQUFMLEdBQWdCLEtBQWhCLENBZHVCO0tBQTNCOztBQUxpQixzQkFzQmpCLG1CQUFJLE9BQU87QUFDUCxhQUFLLElBQUksR0FBSixJQUFXLEtBQWhCLEVBQXVCO0FBQ25CLGdCQUFJLE1BQU0sY0FBTixDQUFxQixHQUFyQixDQUFKLEVBQStCO0FBQzNCLHFCQUFLLEdBQUwsSUFBWSxNQUFNLEdBQU4sQ0FBWixDQUQyQjthQUEvQjtTQURKOztBQU1BLGVBQU8sSUFBUCxDQVBPOzs7QUF0Qk0sc0JBZ0NqQix5QkFBUTtBQUNKLGFBQUssUUFBTCxDQUFjLEtBQUssRUFBTCxFQUFTLElBQXZCLEVBREk7O0FBR0osYUFBSyxTQUFMLEdBQWlCLEtBQUssVUFBTCxHQUFrQixTQUFsQjs7O0FBSGIsWUFNQSxLQUFLLFFBQUwsRUFBZTtBQUNmLGlCQUFLLFFBQUwsQ0FBYyxJQUFkLEVBRGU7U0FBbkI7OztBQU5JLFlBV0EsS0FBSyxPQUFMLEVBQWM7QUFDZCxpQkFBSyxPQUFMLENBQWEsSUFBYixFQURjO1NBQWxCOztBQUlBLGVBQU8sSUFBUCxDQWZJOzs7QUFoQ1Msc0JBa0RqQix1QkFBTztBQUNILGFBQUssVUFBTCxDQUFnQixLQUFLLEVBQUwsQ0FBaEI7OztBQURHLFlBSUMsS0FBSyxPQUFMLEVBQWM7QUFDZCxpQkFBSyxPQUFMLENBQWEsSUFBYixFQURjO1NBQWxCOzs7QUFKRyxZQVNDLEtBQUssTUFBTCxFQUFhO0FBQ2IsaUJBQUssTUFBTCxDQUFZLElBQVosRUFEYTtTQUFqQjs7QUFJQSxlQUFPLElBQVAsQ0FiRzs7O0FBbERVLHNCQWtFakIsdUJBQU87QUFDSCxhQUFLLEtBQUwsR0FERztBQUVILGFBQUssVUFBTCxHQUFrQixLQUFLLFdBQUwsQ0FGZjtBQUdILGVBQU8sSUFBUCxDQUhHOzs7Ozs7OztBQWxFVSxzQkE2RWpCLDZDQUFrQjtBQUNkLGVBQU8sRUFBUCxDQURjOzs7Ozs7Ozs7O0FBN0VELHNCQXdGakIsMkJBQVEsT0FBTztZQUNILEtBQTBCLEtBQTFCLEdBREc7O1lBQ0ksMENBQW1CLGNBRHZCOztBQUVYLFlBQU0sYUFBYSxJQUFJLEtBQUssV0FBTCxDQUFpQixjQUFyQixDQUFiLENBRks7QUFHWCxlQUFPLFdBQVcsR0FBWCxDQUFlLEtBQWYsQ0FBUCxDQUhXOzs7V0F4RkUiLCJmaWxlIjoiUHJvY2Vzcy5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvTWF0dC9TaXRlcy9wb3Btb3Rpb24iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBsb29wIGZyb20gJy4vbG9vcCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFByb2Nlc3Mge1xuICAgIC8qXG4gICAgICAgIFtvYmplY3RdOiBQcm9wZXJ0aWVzXG4gICAgICAgIFtib29sZWFuXSAob3B0aW9uYWwpOiBJcyBQcm9jZXNzIGxhenk/XG4gICAgKi9cbiAgICBjb25zdHJ1Y3Rvcihwcm9wcywgaXNMYXp5KSB7XG4gICAgICAgIHRoaXMuaWQgPSBsb29wLmdldFByb2Nlc3NJZCgpO1xuXG4gICAgICAgIHRoaXMuX29uQ2xlYW51cCA9ICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuc3RvcCgpO1xuICAgICAgICAgICAgdGhpcy5vbkNsZWFudXAgPSB1bmRlZmluZWQ7XG4gICAgICAgIH07XG5cbiAgICAgICAgdGhpcy5fb25BY3RpdmF0ZSA9ICgpID0+IHRoaXMub25DbGVhbnVwID0gdGhpcy5fb25DbGVhbnVwO1xuXG4gICAgICAgIHRoaXMuc2V0KHRoaXMuZ2V0RGVmYXVsdFByb3BzKCkpO1xuICAgICAgICB0aGlzLnNldChwcm9wcyk7XG5cbiAgICAgICAgdGhpcy5pc0xhenkgPSBpc0xhenkgfHwgZmFsc2U7XG4gICAgICAgIHRoaXMuaXNBY3RpdmUgPSBmYWxzZTtcbiAgICB9XG5cbiAgICBzZXQocHJvcHMpIHtcbiAgICAgICAgZm9yIChsZXQga2V5IGluIHByb3BzKSB7XG4gICAgICAgICAgICBpZiAocHJvcHMuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgICAgICAgIHRoaXNba2V5XSA9IHByb3BzW2tleV07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBzdGFydCgpIHtcbiAgICAgICAgbG9vcC5hY3RpdmF0ZSh0aGlzLmlkLCB0aGlzKTtcblxuICAgICAgICB0aGlzLm9uQ2xlYW51cCA9IHRoaXMub25BY3RpdmF0ZSA9IHVuZGVmaW5lZDtcblxuICAgICAgICAvLyBQcml2YXRlIGBvblN0YXJ0YFxuICAgICAgICBpZiAodGhpcy5fb25TdGFydCkge1xuICAgICAgICAgICAgdGhpcy5fb25TdGFydCh0aGlzKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFB1YmxpYyBgb25TdGFydGBcbiAgICAgICAgaWYgKHRoaXMub25TdGFydCkge1xuICAgICAgICAgICAgdGhpcy5vblN0YXJ0KHRoaXMpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgc3RvcCgpIHtcbiAgICAgICAgbG9vcC5kZWFjdGl2YXRlKHRoaXMuaWQpO1xuXG4gICAgICAgIC8vIFByaXZhdGUgYG9uU3RvcGBcbiAgICAgICAgaWYgKHRoaXMuX29uU3RvcCkge1xuICAgICAgICAgICAgdGhpcy5fb25TdG9wKHRoaXMpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gUHVibGljIGBvblN0b3BgXG4gICAgICAgIGlmICh0aGlzLm9uU3RvcCkge1xuICAgICAgICAgICAgdGhpcy5vblN0b3AodGhpcyk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBvbmNlKCkge1xuICAgICAgICB0aGlzLnN0YXJ0KCk7XG4gICAgICAgIHRoaXMub25BY3RpdmF0ZSA9IHRoaXMuX29uQWN0aXZhdGU7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIC8qXG4gICAgICAgICMgR2V0IGRlZmF1bHQgQWN0aW9uIHByb3BlcnRpZXNcblxuICAgICAgICBAcmV0dXJuIFtvYmplY3RdXG4gICAgKi9cbiAgICBnZXREZWZhdWx0UHJvcHMoKSB7XG4gICAgICAgIHJldHVybiB7fTtcbiAgICB9XG5cbiAgICAvKlxuICAgICAgICAjIEV4dGVuZCB0aGlzIFByb2Nlc3Mgd2l0aCBuZXcgcHJvcGVydGllc1xuICAgICAgICAjIyBSZXR1cm5zIG5ldyBpbnN0YW5jZSBvZiB0aGlzIFByb2Nlc3MncyBgcHJvdG90eXBlYCB3aXRoIGV4aXN0aW5nIGFuZCBuZXcgcHJvcGVydGllc1xuXG4gICAgICAgIEBwYXJhbSBbb2JqZWN0XSAob3B0aW9uYWwpXG4gICAgICAgIEByZXR1cm4gW1Byb2Nlc3NdXG4gICAgKi9cbiAgICBpbmhlcml0KHByb3BzKSB7XG4gICAgICAgIGNvbnN0IHsgaWQsIC4uLmluaGVyaXRlZFByb3BzIH0gPSB0aGlzO1xuICAgICAgICBjb25zdCBuZXdQcm9jZXNzID0gbmV3IHRoaXMuY29uc3RydWN0b3IoaW5oZXJpdGVkUHJvcHMpO1xuICAgICAgICByZXR1cm4gbmV3UHJvY2Vzcy5zZXQocHJvcHMpO1xuICAgIH1cbn0iXX0=

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	exports.__esModule = true;
	
	var _Process2 = __webpack_require__(8);
	
	var _Process3 = _interopRequireDefault(_Process2);
	
	var _utils = __webpack_require__(2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Input = function (_Process) {
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
	}(_Process3.default);
	
	exports.default = Input;
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9pbnB1dC9JbnB1dC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUdxQjs7O0FBQ2pCLGFBRGlCLEtBQ2pCLENBQVksYUFBWixFQUEyQixJQUEzQixFQUFpQzs4QkFEaEIsT0FDZ0I7O3FEQUM3QixxQkFENkI7O0FBRTdCLGNBQUssS0FBTCxHQUFhLGFBQWIsQ0FGNkI7O0FBSTdCLFlBQUksbUJBQU8sSUFBUCxDQUFKLEVBQWtCO0FBQ2Qsa0JBQUssWUFBTCxHQUFvQjt1QkFBTSxNQUFLLE1BQUwsQ0FBWSxNQUFLLElBQUwsRUFBWjthQUFOLENBRE47U0FBbEI7cUJBSjZCO0tBQWpDOzs7Ozs7O0FBRGlCLG9CQWVqQix5QkFBTyxPQUFPO0FBQ1YsYUFBSyxLQUFMLGdCQUFrQixLQUFLLEtBQUwsRUFBZSxNQUFqQyxDQURVOzs7V0FmRyIsImZpbGUiOiJJbnB1dC5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvTWF0dC9TaXRlcy9wb3Btb3Rpb24iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUHJvY2VzcyBmcm9tICcuLi9wcm9jZXNzL1Byb2Nlc3MnO1xuaW1wb3J0IHsgaXNGdW5jIH0gZnJvbSAnLi4vaW5jL3V0aWxzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5wdXQgZXh0ZW5kcyBQcm9jZXNzIHtcbiAgICBjb25zdHJ1Y3Rvcihpbml0aWFsVmFsdWVzLCBwb2xsKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMuc3RhdGUgPSBpbml0aWFsVmFsdWVzO1xuXG4gICAgICAgIGlmIChpc0Z1bmMocG9sbCkpIHtcbiAgICAgICAgICAgIHRoaXMub25GcmFtZVN0YXJ0ID0gKCkgPT4gdGhpcy5sYXRlc3QodGhpcy5wb2xsKCkpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLypcbiAgICAgICAgTWFudWFsbHkgYWRkIGxhdGVzdCB2YWx1ZXNcblxuICAgICAgICBAcGFyYW0gW29iamVjdF1cbiAgICAqL1xuICAgIGxhdGVzdChwcm9wcykge1xuICAgICAgICB0aGlzLnN0YXRlID0geyAuLi50aGlzLnN0YXRlLCAuLi5wcm9wcyB9O1xuICAgIH1cbn1cbiJdfQ==

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports.default = stagger;
	
	var _Tween = __webpack_require__(5);
	
	var _Tween2 = _interopRequireDefault(_Tween);
	
	var _presetEasing = __webpack_require__(17);
	
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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9pbmMvc3RhZ2dlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7a0JBTXdCOzs7Ozs7Ozs7Ozs7OztBQUZ4QixJQUFNLG1CQUFtQixHQUFuQjs7QUFFUyxTQUFTLE9BQVQsQ0FBaUIsS0FBakIsRUFBd0IsUUFBeEIsRUFBa0MsS0FBbEMsRUFBeUM7QUFDcEQsUUFBTSxjQUFjLE1BQU0sTUFBTixDQURnQztBQUVwRCxRQUFNLGtCQUFrQixrQkFBTSxLQUFOLENBQWxCLENBRjhDO0FBR3BELFFBQU0sV0FBVyxrQkFBa0IsS0FBbEIsR0FBMEIsTUFBTSxRQUFOLElBQWtCLGdCQUFsQixDQUhTO0FBSXBELFFBQUksWUFBWSxDQUFDLENBQUQsQ0FKb0M7O0FBTXBELFFBQU0sZUFBZSxvQkFBVTtBQUMzQixrQkFBVSxXQUFXLFdBQVg7QUFDVixnQkFBUTtBQUNKLGVBQUc7QUFDQyxzQkFBTSxDQUFOO0FBQ0Esb0JBQUksY0FBYyxDQUFkO0FBQ0osdUJBQU8sSUFBUDtBQUNBLHNCQUFNLGtCQUFrQix1QkFBTyxNQUFQLEdBQWdCLE1BQU0sSUFBTixJQUFjLHVCQUFPLE1BQVA7YUFKMUQ7U0FESjtBQVFBLGtCQUFVLFVBQUMsS0FBRCxFQUFXO0FBQ2pCLGdCQUFNLElBQUksTUFBTSxLQUFOLENBQVksQ0FBWixDQURPO0FBRWpCLGdCQUFJLFdBQVcsWUFBWSxDQUFaLENBRkU7O0FBSWpCLG1CQUFPLFlBQVksQ0FBWixFQUFlLFVBQXRCLEVBQWtDO0FBQzlCLHlCQUFTLE1BQU0sUUFBTixDQUFULEVBQTBCLFFBQTFCLEVBRDhCO2FBQWxDOztBQUlBLHdCQUFZLENBQVosQ0FSaUI7U0FBWDtBQVVWLG9CQUFZLGtCQUFrQixTQUFsQixHQUE4QixNQUFNLFVBQU47S0FwQnpCLENBQWYsQ0FOOEM7O0FBNkJwRCxpQkFBYSxLQUFiLEdBN0JvRDs7QUErQnBELFdBQU8sWUFBUCxDQS9Cb0Q7Q0FBekMiLCJmaWxlIjoic3RhZ2dlci5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvTWF0dC9TaXRlcy9wb3Btb3Rpb24iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgVHdlZW4gZnJvbSAnLi4vYWN0aW9ucy9Ud2Vlbic7XG5pbXBvcnQgZWFzaW5nIGZyb20gJy4uL2FjdGlvbnMvZWFzaW5nL3ByZXNldC1lYXNpbmcnO1xuaW1wb3J0IHsgaXNOdW0gfSBmcm9tICcuL3V0aWxzJztcblxuY29uc3QgREVGQVVMVF9JTlRFUlZBTCA9IDEwMDtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc3RhZ2dlcihhcnJheSwgY2FsbGJhY2ssIHByb3BzKSB7XG4gICAgY29uc3QgYXJyYXlMZW5ndGggPSBhcnJheS5sZW5ndGg7XG4gICAgY29uc3QgcHJvcHNJc0ludGVydmFsID0gaXNOdW0ocHJvcHMpO1xuICAgIGNvbnN0IGludGVydmFsID0gcHJvcHNJc0ludGVydmFsID8gcHJvcHMgOiBwcm9wcy5pbnRlcnZhbCB8fCBERUZBVUxUX0lOVEVSVkFMO1xuICAgIGxldCBwcmV2SW5kZXggPSAtMTtcblxuICAgIGNvbnN0IHN0YWdnZXJUd2VlbiA9IG5ldyBUd2Vlbih7XG4gICAgICAgIGR1cmF0aW9uOiBpbnRlcnZhbCAqIGFycmF5TGVuZ3RoLFxuICAgICAgICB2YWx1ZXM6IHtcbiAgICAgICAgICAgIGk6IHtcbiAgICAgICAgICAgICAgICBmcm9tOiAwLFxuICAgICAgICAgICAgICAgIHRvOiBhcnJheUxlbmd0aCAtIDEsXG4gICAgICAgICAgICAgICAgcm91bmQ6IHRydWUsXG4gICAgICAgICAgICAgICAgZWFzZTogcHJvcHNJc0ludGVydmFsID8gZWFzaW5nLmxpbmVhciA6IHByb3BzLmVhc2UgfHwgZWFzaW5nLmxpbmVhclxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBvblJlbmRlcjogKHR3ZWVuKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBpID0gdHdlZW4uc3RhdGUuaTtcbiAgICAgICAgICAgIGxldCBnYXBJbmRleCA9IHByZXZJbmRleCArIDE7XG5cbiAgICAgICAgICAgIGZvciAoOyBnYXBJbmRleCA8PSBpOyBnYXBJbmRleCsrKSB7XG4gICAgICAgICAgICAgICAgY2FsbGJhY2soYXJyYXlbZ2FwSW5kZXhdLCBnYXBJbmRleCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHByZXZJbmRleCA9IGk7XG4gICAgICAgIH0sXG4gICAgICAgIG9uQ29tcGxldGU6IHByb3BzSXNJbnRlcnZhbCA/IHVuZGVmaW5lZCA6IHByb3BzLm9uQ29tcGxldGVcbiAgICB9KTtcblxuICAgIHN0YWdnZXJUd2Vlbi5zdGFydCgpO1xuXG4gICAgcmV0dXJuIHN0YWdnZXJUd2Vlbjtcbn0iXX0=

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	exports.__esModule = true;
	exports.default = timeline;
	
	var _Tween = __webpack_require__(5);
	
	var _Tween2 = _interopRequireDefault(_Tween);
	
	var _presetEasing = __webpack_require__(17);
	
	var _presetEasing2 = _interopRequireDefault(_presetEasing);
	
	var _calc = __webpack_require__(18);
	
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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9pbmMvdGltZWxpbmUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7a0JBK0R3Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUE1Q3hCLElBQU0sVUFBVSxVQUFDLElBQUQsRUFBVTtBQUN0QixRQUFNLFdBQVcsRUFBWCxDQURnQjtBQUV0QixRQUFNLFVBQVUsS0FBSyxNQUFMLENBRk07QUFHdEIsUUFBSSxrQkFBa0IsQ0FBbEIsQ0FIa0I7OzBCQUtiO0FBQ0wsWUFBTSxNQUFNLEtBQUssQ0FBTCxDQUFOO0FBQ04sWUFBTSxXQUFXLElBQUksS0FBSixHQUFZLElBQVosR0FBbUIsS0FBbkI7QUFDakIsWUFBTSxRQUFRLFdBQWEsSUFBSSxLQUFKLEdBQVksR0FBekI7O0FBRWQsMkJBQW9CLFFBQUMsSUFBWSxJQUFJLE1BQUosR0FDN0IsSUFBSSxFQUFKLElBQVUseUJBQWMsZUFBZCxFQUErQixJQUFJLE1BQUosQ0FBekMsR0FBdUQsQ0FEdkM7O0FBR3BCLFlBQUksV0FBVyxDQUFYO0FBQ0osYUFBSyxJQUFJLEdBQUosSUFBVyxNQUFNLE1BQU4sRUFBYztBQUMxQixnQkFBSSxNQUFNLE1BQU4sQ0FBYSxjQUFiLENBQTRCLEdBQTVCLENBQUosRUFBc0M7QUFDbEMsb0JBQU0sUUFBUSxNQUFNLE1BQU4sQ0FBYSxHQUFiLENBQVIsQ0FENEI7QUFFbEMsMkJBQVcsS0FBSyxHQUFMLENBQVMsUUFBVCxFQUFtQixNQUFNLFFBQU4sQ0FBOUIsQ0FGa0M7YUFBdEM7U0FESjs7QUFPQSxpQkFBUyxJQUFULENBQWM7QUFDVixrQkFBTSxlQUFOO0FBQ0Esc0JBQVUsUUFBVjtBQUNBLGtCQUFNLFVBQUMsSUFBRDt1QkFBVSxNQUFNLFFBQU4sQ0FBZSxJQUFmO2FBQVY7U0FIVjs7QUFNQSwyQkFBbUIsTUFBTSxRQUFOO01BM0JEOztBQUt0QixTQUFLLElBQUksSUFBSSxDQUFKLEVBQU8sSUFBSSxPQUFKLEVBQWEsR0FBN0IsRUFBa0M7Y0FBekIsR0FBeUI7S0FBbEM7O0FBeUJBLFdBQU8sRUFBRSxXQUFXLGVBQVgsRUFBNEIsa0JBQTlCLEVBQVAsQ0E5QnNCO0NBQVY7O0FBaUNoQixJQUFNLFlBQVksZ0JBQTJDO1FBQXhDLHVCQUF3QztRQUEvQix5QkFBK0I7UUFBckIscUNBQXFCOztBQUN6RCxTQUFLLElBQUksSUFBSSxDQUFKLEVBQU8sSUFBSSxjQUFKLEVBQW9CLEdBQXBDLEVBQXlDO0FBQ3JDLFlBQU0sU0FBUSxTQUFTLENBQVQsQ0FBUixDQUQrQjtBQUVyQyxZQUFNLFlBQVksVUFBVSxPQUFNLElBQU4sQ0FGUzs7QUFJckMsWUFBSSxZQUFZLENBQVosSUFBaUIsWUFBWSxPQUFNLFFBQU4sRUFBZ0I7QUFDN0MsbUJBQU0sSUFBTixDQUFXLFNBQVgsRUFENkM7U0FBakQ7S0FKSjtDQURjOztBQVdILFNBQVMsUUFBVCxDQUFrQixHQUFsQixFQUFtQztRQUFaLDhEQUFRLGtCQUFJOzttQkFDZCxRQUFRLEdBQVIsRUFEYzs7UUFDdEMsK0JBRHNDO1FBQzNCLDZCQUQyQjs7QUFHOUMsV0FBTyxpQ0FDQTtBQUNILGtCQUFVLFNBQVY7QUFDQSxjQUFNLHVCQUFPLE1BQVA7QUFDTixnQkFBUTtBQUNKLGVBQUcsQ0FBSDtTQURKO0FBR0Esa0JBQVUsUUFBVjtBQUNBLHdCQUFnQixTQUFTLE1BQVQ7QUFDaEIsa0JBQVUsU0FBVjtNQVRHLENBQVAsQ0FIOEM7Q0FBbkMiLCJmaWxlIjoidGltZWxpbmUuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL01hdHQvU2l0ZXMvcG9wbW90aW9uIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFR3ZWVuIGZyb20gJy4uL2FjdGlvbnMvVHdlZW4nO1xuaW1wb3J0IGVhc2luZyBmcm9tICcuLi9hY3Rpb25zL2Vhc2luZy9wcmVzZXQtZWFzaW5nJztcbmltcG9ydCB7IHJlbGF0aXZlVmFsdWUgfSBmcm9tICcuL2NhbGMnO1xuXG4vKlxuICAgIEBwYXJhbSBbYXJyYXldXG4gICAgICAgIFNlcXVlbnRpYWwgYXJyYXkgb2YgdHdlZW5zLCBlYWNoIGl0ZW0gY2FuIGJlIGEgdHdlZW4gb3IgZGVmaW5pdGlvbiBvYmo6XG5cbiAgICAgICAgW1xuICAgICAgICAgICAgbmV3IFR3ZWVuKCksXG4gICAgICAgICAgICBzdGFnZ2VyKCksXG4gICAgICAgICAgICB0aW1lbGluZSgpLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHR3ZWVuOiBuZXcgVHdlZW4oKSxcbiAgICAgICAgICAgICAgICBhdDogMTAwLFxuICAgICAgICAgICAgICAgIG9mZnNldDogXCIrPTEwMFwiXG4gICAgICAgICAgICB9XG4gICAgICAgIF1cbiovXG5jb25zdCBhbmFseXplID0gKGRlZnMpID0+IHtcbiAgICBjb25zdCB0aW1lbGluZSA9IFtdO1xuICAgIGNvbnN0IG51bURlZnMgPSBkZWZzLmxlbmd0aDtcbiAgICBsZXQgY3VycmVudFBsYXloZWFkID0gMDtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbnVtRGVmczsgaSsrKSB7XG4gICAgICAgIGNvbnN0IGRlZiA9IGRlZnNbaV07XG4gICAgICAgIGNvbnN0IGRlZklzT2JqID0gZGVmLnR3ZWVuID8gdHJ1ZSA6IGZhbHNlO1xuICAgICAgICBjb25zdCB0d2VlbiA9IChkZWZJc09iaikgPyBkZWYudHdlZW4gOiBkZWY7XG5cbiAgICAgICAgY3VycmVudFBsYXloZWFkICs9ICgoZGVmSXNPYmogJiYgZGVmLm9mZnNldCkgP1xuICAgICAgICAgICAgZGVmLmF0IHx8IHJlbGF0aXZlVmFsdWUoY3VycmVudFBsYXloZWFkLCBkZWYub2Zmc2V0KSA6IDApO1xuXG4gICAgICAgIGxldCBkdXJhdGlvbiA9IDA7XG4gICAgICAgIGZvciAobGV0IGtleSBpbiB0d2Vlbi52YWx1ZXMpIHtcbiAgICAgICAgICAgIGlmICh0d2Vlbi52YWx1ZXMuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHZhbHVlID0gdHdlZW4udmFsdWVzW2tleV07XG4gICAgICAgICAgICAgICAgZHVyYXRpb24gPSBNYXRoLm1heChkdXJhdGlvbiwgdmFsdWUuZHVyYXRpb24pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgdGltZWxpbmUucHVzaCh7XG4gICAgICAgICAgICBmcm9tOiBjdXJyZW50UGxheWhlYWQsXG4gICAgICAgICAgICBkdXJhdGlvbjogZHVyYXRpb24sXG4gICAgICAgICAgICBmaXJlOiAodGltZSkgPT4gdHdlZW4uc2Vla1RpbWUodGltZSlcbiAgICAgICAgfSk7XG5cbiAgICAgICAgY3VycmVudFBsYXloZWFkICs9IHR3ZWVuLmR1cmF0aW9uO1xuICAgIH1cblxuICAgIHJldHVybiB7IHRvdGFsVGltZTogY3VycmVudFBsYXloZWFkLCB0aW1lbGluZSB9O1xufTtcblxuY29uc3Qgc2V0VHdlZW5zID0gKHsgZWxhcHNlZCwgdGltZWxpbmUsIHRpbWVsaW5lTGVuZ3RoIH0pID0+IHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRpbWVsaW5lTGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY29uc3QgdHdlZW4gPSB0aW1lbGluZVtpXTtcbiAgICAgICAgY29uc3QgdHdlZW5UaW1lID0gZWxhcHNlZCAtIHR3ZWVuLmZyb207XG5cbiAgICAgICAgaWYgKHR3ZWVuVGltZSA+IDAgJiYgdHdlZW5UaW1lIDwgdHdlZW4uZHVyYXRpb24pIHtcbiAgICAgICAgICAgIHR3ZWVuLmZpcmUodHdlZW5UaW1lKTtcbiAgICAgICAgfVxuICAgIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHRpbWVsaW5lKGRlZiwgcHJvcHMgPSB7fSkge1xuICAgIGNvbnN0IHsgdG90YWxUaW1lLCB0aW1lbGluZSB9ID0gYW5hbHl6ZShkZWYpO1xuXG4gICAgcmV0dXJuIG5ldyBUd2Vlbih7XG4gICAgICAgIC4uLnByb3BzLFxuICAgICAgICBkdXJhdGlvbjogdG90YWxUaW1lLFxuICAgICAgICBlYXNlOiBlYXNpbmcubGluZWFyLFxuICAgICAgICB2YWx1ZXM6IHtcbiAgICAgICAgICAgIHA6IDFcbiAgICAgICAgfSxcbiAgICAgICAgdGltZWxpbmU6IHRpbWVsaW5lLFxuICAgICAgICB0aW1lbGluZUxlbmd0aDogdGltZWxpbmUubGVuZ3RoLFxuICAgICAgICBvblJlbmRlcjogc2V0VHdlZW5zXG4gICAgfSk7XG59Il19

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
	    function Adapter(props) {
	        _classCallCheck(this, Adapter);
	
	        this.element = props.element;
	        this.cache = {};
	
	        if (props.getter) {
	            this.getter = props.getter;
	        }
	
	        if (props.setter) {
	            this.setter = props.setter;
	        }
	
	        if (props.stateMap) {
	            this.stateMap = props.stateMap;
	        }
	
	        if (props.valueTypeMap) {
	            this.valueTypeMap = props.valueTypeMap;
	        }
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
	        var translatedProps = {};
	
	        // Translate props
	        for (var key in props) {
	            if (props.hasOwnProperty(key)) {
	                var mappedKey = this.mapStateKey(key);
	                this.cache[key] = translatedProps[mappedKey] = props[key];
	            }
	        }
	
	        return this.setter(translatedProps);
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
	
	exports.default = Adapter;
	
	exports.default = function (props) {
	    return new Adapter(props);
	};
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hZGFwdGVyL2FkYXB0ZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQVlxQjtBQUNqQixhQURpQixPQUNqQixDQUFZLEtBQVosRUFBbUI7OEJBREYsU0FDRTs7QUFDZixhQUFLLE9BQUwsR0FBZSxNQUFNLE9BQU4sQ0FEQTtBQUVmLGFBQUssS0FBTCxHQUFhLEVBQWIsQ0FGZTs7QUFJZixZQUFJLE1BQU0sTUFBTixFQUFjO0FBQ2QsaUJBQUssTUFBTCxHQUFjLE1BQU0sTUFBTixDQURBO1NBQWxCOztBQUlBLFlBQUksTUFBTSxNQUFOLEVBQWM7QUFDZCxpQkFBSyxNQUFMLEdBQWMsTUFBTSxNQUFOLENBREE7U0FBbEI7O0FBSUEsWUFBSSxNQUFNLFFBQU4sRUFBZ0I7QUFDaEIsaUJBQUssUUFBTCxHQUFnQixNQUFNLFFBQU4sQ0FEQTtTQUFwQjs7QUFJQSxZQUFJLE1BQU0sWUFBTixFQUFvQjtBQUNwQixpQkFBSyxZQUFMLEdBQW9CLE1BQU0sWUFBTixDQURBO1NBQXhCO0tBaEJKOzs7Ozs7OztBQURpQixzQkE0QmpCLG1CQUFJLEtBQUssU0FBUztBQUNkLFlBQU0sWUFBWSxLQUFLLFdBQUwsQ0FBaUIsR0FBakIsQ0FBWixDQURROztBQUdkLFlBQUksV0FBVyxDQUFDLEtBQUssS0FBTCxDQUFXLGNBQVgsQ0FBMEIsR0FBMUIsQ0FBRCxFQUFpQztBQUM1QyxtQkFBTyxLQUFLLEtBQUwsQ0FBVyxHQUFYLElBQWtCLEtBQUssTUFBTCxDQUFZLFNBQVosQ0FBbEIsQ0FEcUM7U0FBaEQsTUFFTztBQUNILG1CQUFPLEtBQUssS0FBTCxDQUFXLEdBQVgsQ0FBUCxDQURHO1NBRlA7Ozs7Ozs7O0FBL0JhLHNCQTJDakIsbUJBQUksT0FBTztBQUNQLFlBQU0sa0JBQWtCLEVBQWxCOzs7QUFEQyxhQUlGLElBQUksR0FBSixJQUFXLEtBQWhCLEVBQXVCO0FBQ25CLGdCQUFJLE1BQU0sY0FBTixDQUFxQixHQUFyQixDQUFKLEVBQStCO0FBQzNCLG9CQUFNLFlBQVksS0FBSyxXQUFMLENBQWlCLEdBQWpCLENBQVosQ0FEcUI7QUFFM0IscUJBQUssS0FBTCxDQUFXLEdBQVgsSUFBa0IsZ0JBQWdCLFNBQWhCLElBQTZCLE1BQU0sR0FBTixDQUE3QixDQUZTO2FBQS9CO1NBREo7O0FBT0EsZUFBTyxLQUFLLE1BQUwsQ0FBWSxlQUFaLENBQVAsQ0FYTzs7Ozs7OztBQTNDTSxzQkE0RGpCLHlCQUFPLEtBQUs7QUFDUixlQUFPLEtBQUssT0FBTCxDQUFhLEdBQWIsQ0FBUCxDQURROzs7Ozs7O0FBNURLLHNCQW1FakIseUJBQU8sT0FBTztBQUNWLGFBQUssSUFBSSxHQUFKLElBQVcsS0FBaEIsRUFBdUI7QUFDbkIsZ0JBQUksTUFBTSxjQUFOLENBQXFCLEdBQXJCLENBQUosRUFBK0I7QUFDM0IscUJBQUssT0FBTCxDQUFhLEdBQWIsSUFBb0IsTUFBTSxHQUFOLENBQXBCLENBRDJCO2FBQS9CO1NBREo7Ozs7Ozs7OztBQXBFYSxzQkFpRmpCLG1DQUFZLEtBQUs7QUFDYixlQUFPLElBQUMsQ0FBSyxRQUFMLEdBQWlCLEtBQUssUUFBTCxDQUFjLEdBQWQsS0FBc0IsR0FBdEIsR0FBNEIsR0FBOUMsQ0FETTs7Ozs7Ozs7O0FBakZBLHNCQTJGakIscUNBQWEsS0FBSztBQUNkLGVBQU8sSUFBQyxDQUFLLFlBQUwsR0FBcUIsS0FBSyxZQUFMLENBQWtCLEtBQUssV0FBTCxDQUFpQixHQUFqQixDQUFsQixDQUF0QixHQUFpRSxLQUFqRSxDQURPOzs7V0EzRkQ7Ozs7O2tCQWdHTixVQUFDLEtBQUQ7V0FBVyxJQUFJLE9BQUosQ0FBWSxLQUFaO0NBQVgiLCJmaWxlIjoiYWRhcHRlci5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvTWF0dC9TaXRlcy9wb3Btb3Rpb24iLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICAgICMgQWRhcHRlciBjbGFzc1xuICAgICMjIFByb3ZpZGVzIGEgZ2V0dGVyL3NldHRlciB3cmFwcGVyIGFuZCBwcm9wZXJ0eSBjYWNoZSBmb3IgZGlmZmVyZW50IGVsZW1lbnQgdHlwZXNcblxuICAgIE92ZXJyaWRlIGBnZXR0ZXJgIGFuZCBgc2V0dGVyYCB0byByZWltcGxlbWVudCB0aGUgaW50ZXJmYWNlIGZvciBuZXcgZWxlbWVudCB0eXBlcy5cblxuICAgIFNldCBgRXh0ZW5kZWQucHJvdG90eXBlLnN0YXRlTWFwYCBhcyBhbiBvYmplY3Qga2V5L3ZhbHVlIG1hcCB0byB0cmFuc2xhdGUgaW5jb21pbmcga2V5cyB0b1xuICAgIEFQSS1zcGVjaWZpYyBrZXlzLiBGb3IgaW5zdGFuY2UsIHsgeDogJ3RyYW5zbGF0ZVgnIH0uIFxuXG4gICAgU2V0IGBFeHRlbmRlZC5wcm90b3R5cGUudmFsdWVUeXBlTWFwYCBhcyBhbiBvYmplY3Qga2V5L3ZhbHVlIG1hcCB0byByZXR1cm4gYSB2YWx1ZSB0eXBlIHdpdGhcbiAgICBgZ2V0VmFsdWVUeXBlKGtleSlgIChrZXkgd2lsbCBiZSBtYXBwZWQgYWNjb3JkaW5nIHRvIGBzdGF0ZU1hcGApXG4qL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQWRhcHRlciB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgdGhpcy5lbGVtZW50ID0gcHJvcHMuZWxlbWVudDtcbiAgICAgICAgdGhpcy5jYWNoZSA9IHt9O1xuXG4gICAgICAgIGlmIChwcm9wcy5nZXR0ZXIpIHtcbiAgICAgICAgICAgIHRoaXMuZ2V0dGVyID0gcHJvcHMuZ2V0dGVyO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHByb3BzLnNldHRlcikge1xuICAgICAgICAgICAgdGhpcy5zZXR0ZXIgPSBwcm9wcy5zZXR0ZXI7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAocHJvcHMuc3RhdGVNYXApIHtcbiAgICAgICAgICAgIHRoaXMuc3RhdGVNYXAgPSBwcm9wcy5zdGF0ZU1hcDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChwcm9wcy52YWx1ZVR5cGVNYXApIHtcbiAgICAgICAgICAgIHRoaXMudmFsdWVUeXBlTWFwID0gcHJvcHMudmFsdWVUeXBlTWFwO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLypcbiAgICAgICAgR2V0IGVsZW1lbnQgcHJvcGVydHlcblxuICAgICAgICBAcGFyYW0gW3N0cmluZ106IEtleSB0byByZWFkXG4gICAgICAgIEBwYXJhbSBbYm9vbGVhbl06IElmIGB0cnVlYCwgd2lsbCBvdmVycmlkZSBjYWNoZWQgcHJvcGVydHlcbiAgICAqL1xuICAgIGdldChrZXksIHJlZnJlc2gpIHtcbiAgICAgICAgY29uc3QgbWFwcGVkS2V5ID0gdGhpcy5tYXBTdGF0ZUtleShrZXkpO1xuXG4gICAgICAgIGlmIChyZWZyZXNoIHx8ICF0aGlzLmNhY2hlLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmNhY2hlW2tleV0gPSB0aGlzLmdldHRlcihtYXBwZWRLZXkpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY2FjaGVba2V5XTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qXG4gICAgICAgIFNldCBlbGVtZW50IHByb3BlcnRpZXNcblxuICAgICAgICBAcGFyYW0gW29iamVjdF06IEtleS92YWx1ZSBwcm9wZXJ0aWVzIHRvIHNldFxuICAgICovXG4gICAgc2V0KHByb3BzKSB7XG4gICAgICAgIGNvbnN0IHRyYW5zbGF0ZWRQcm9wcyA9IHt9O1xuXG4gICAgICAgIC8vIFRyYW5zbGF0ZSBwcm9wc1xuICAgICAgICBmb3IgKGxldCBrZXkgaW4gcHJvcHMpIHtcbiAgICAgICAgICAgIGlmIChwcm9wcy5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgbWFwcGVkS2V5ID0gdGhpcy5tYXBTdGF0ZUtleShrZXkpO1xuICAgICAgICAgICAgICAgIHRoaXMuY2FjaGVba2V5XSA9IHRyYW5zbGF0ZWRQcm9wc1ttYXBwZWRLZXldID0gcHJvcHNba2V5XTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzLnNldHRlcih0cmFuc2xhdGVkUHJvcHMpO1xuICAgIH1cblxuICAgIC8qXG4gICAgICAgIE92ZXJyaWRhYmxlIGVsZW1lbnQgZ2V0dGVyIC0gZGVmYXVsdCBmb3IgcGxhaW4gb2JqZWN0IFxuICAgICovXG4gICAgZ2V0dGVyKGtleSkge1xuICAgICAgICByZXR1cm4gdGhpcy5lbGVtZW50W2tleV07XG4gICAgfVxuXG4gICAgLypcbiAgICAgICAgT3ZlcnJpZGFibGUgZWxlbWVudCBzZXR0ZXIgLSBkZWZhdWx0IGZvciBwbGFpbiBvYmplY3RcbiAgICAqL1xuICAgIHNldHRlcihwcm9wcykge1xuICAgICAgICBmb3IgKGxldCBrZXkgaW4gcHJvcHMpIHtcbiAgICAgICAgICAgIGlmIChwcm9wcy5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5lbGVtZW50W2tleV0gPSBwcm9wc1trZXldO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLypcbiAgICAgICAgTWFwIHN0YXRlIGtleSBhcyBwZXIgYHN0YXRlTWFwYCwgaWYgcHJlc2VudFxuXG4gICAgICAgIEBwYXJhbSBbc3RyaW5nXTogS2V5IHRvIG1hcFxuICAgICAgICBAcmV0dXJuIFtzdHJpbmddOiBNYXBwZWQga2V5LCBvciBvcmlnaW5hbCBrZXkgaWYgbm9uZSBmb3VuZFxuICAgICovXG4gICAgbWFwU3RhdGVLZXkoa2V5KSB7XG4gICAgICAgIHJldHVybiAodGhpcy5zdGF0ZU1hcCkgPyB0aGlzLnN0YXRlTWFwW2tleV0gfHwga2V5IDoga2V5O1xuICAgIH1cblxuICAgIC8qXG4gICAgICAgIEdldCB2YWx1ZVR5cGUgb2YgcHJvdmlkZWQga2V5XG5cbiAgICAgICAgQHBhcmFtIFtzdHJpbmddOiBOYW1lIG9mIHByb3BlcnR5IHRvIG1hcFxuICAgICAgICBAcmV0dXJuIFt2YWx1ZVR5cGVdOiBWYWx1ZSB0eXBlIG9mIHByb3BlcnR5XG4gICAgKi9cbiAgICBnZXRWYWx1ZVR5cGUoa2V5KSB7XG4gICAgICAgIHJldHVybiAodGhpcy52YWx1ZVR5cGVNYXApID8gdGhpcy52YWx1ZVR5cGVNYXBbdGhpcy5tYXBTdGF0ZUtleShrZXkpXSA6IGZhbHNlO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgKHByb3BzKSA9PiBuZXcgQWRhcHRlcihwcm9wcyk7Il19

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
	    return (0, _adapter2.default)({ element: element, getter: getter, setter: setter });
	};
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hZGFwdGVyL2F0dHItYWRhcHRlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7UUFFZ0I7UUFJQTs7Ozs7Ozs7QUFKVCxTQUFTLE1BQVQsQ0FBZ0IsR0FBaEIsRUFBcUI7QUFDeEIsV0FBTyxLQUFLLE9BQUwsQ0FBYSxZQUFiLENBQTBCLEdBQTFCLENBQVAsQ0FEd0I7Q0FBckI7O0FBSUEsU0FBUyxNQUFULENBQWdCLEtBQWhCLEVBQXVCO0FBQzFCLFNBQUssSUFBSSxHQUFKLElBQVcsS0FBaEIsRUFBdUI7QUFDbkIsWUFBSSxNQUFNLGNBQU4sQ0FBcUIsR0FBckIsQ0FBSixFQUErQjtBQUMzQixpQkFBSyxPQUFMLENBQWEsWUFBYixDQUEwQixHQUExQixFQUErQixNQUFNLEdBQU4sQ0FBL0IsRUFEMkI7U0FBL0I7S0FESjtDQURHOztrQkFRUSxVQUFDLE9BQUQ7V0FBYSx1QkFBYyxFQUFFLGdCQUFGLEVBQVcsY0FBWCxFQUFtQixjQUFuQixFQUFkO0NBQWIiLCJmaWxlIjoiYXR0ci1hZGFwdGVyLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9NYXR0L1NpdGVzL3BvcG1vdGlvbiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjcmVhdGVBZGFwdGVyIGZyb20gJy4vYWRhcHRlcic7XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXR0ZXIoa2V5KSB7XG4gICAgcmV0dXJuIHRoaXMuZWxlbWVudC5nZXRBdHRyaWJ1dGUoa2V5KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNldHRlcihwcm9wcykge1xuICAgIGZvciAobGV0IGtleSBpbiBwcm9wcykge1xuICAgICAgICBpZiAocHJvcHMuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgICAgdGhpcy5lbGVtZW50LnNldEF0dHJpYnV0ZShrZXksIHByb3BzW2tleV0pO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCAoZWxlbWVudCkgPT4gY3JlYXRlQWRhcHRlcih7IGVsZW1lbnQsIGdldHRlciwgc2V0dGVyIH0pOyJdfQ==

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _stateMap = __webpack_require__(37);
	
	var _stateMap2 = _interopRequireDefault(_stateMap);
	
	var _valueTypeMap = __webpack_require__(40);
	
	var _valueTypeMap2 = _interopRequireDefault(_valueTypeMap);
	
	var _build = __webpack_require__(41);
	
	var _build2 = _interopRequireDefault(_build);
	
	var _prefixer = __webpack_require__(42);
	
	var _prefixer2 = _interopRequireDefault(_prefixer);
	
	var _adapter = __webpack_require__(12);
	
	var _adapter2 = _interopRequireDefault(_adapter);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function getter(key) {
	    console.log(this.element);
	    return window.getComputedStyle(this.element, null)[(0, _prefixer2.default)(key)];
	}
	
	function setter(props) {
	    this.element.style.cssText += (0, _build2.default)(props);
	}
	
	exports.default = function (element) {
	    return (0, _adapter2.default)({ element: element, stateMap: _stateMap2.default, valueTypeMap: _valueTypeMap2.default, getter: getter, setter: setter });
	};
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hZGFwdGVyL2Nzcy1hZGFwdGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTUEsU0FBUyxNQUFULENBQWlCLEdBQWpCLEVBQXNCO0FBQ2xCLFlBQVEsR0FBUixDQUFZLEtBQUssT0FBTCxDQUFaLENBRGtCO0FBRWxCLFdBQU8sT0FBTyxnQkFBUCxDQUF3QixLQUFLLE9BQUwsRUFBYyxJQUF0QyxFQUE0Qyx3QkFBUyxHQUFULENBQTVDLENBQVAsQ0FGa0I7Q0FBdEI7O0FBS0EsU0FBUyxNQUFULENBQWdCLEtBQWhCLEVBQXVCO0FBQ25CLFNBQUssT0FBTCxDQUFhLEtBQWIsQ0FBbUIsT0FBbkIsSUFBOEIscUJBQW9CLEtBQXBCLENBQTlCLENBRG1CO0NBQXZCOztrQkFJZSxVQUFDLE9BQUQ7V0FBYSx1QkFBYyxFQUFFLGdCQUFGLEVBQVcsNEJBQVgsRUFBcUIsb0NBQXJCLEVBQW1DLGNBQW5DLEVBQTJDLGNBQTNDLEVBQWQ7Q0FBYiIsImZpbGUiOiJjc3MtYWRhcHRlci5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvTWF0dC9TaXRlcy9wb3Btb3Rpb24iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3RhdGVNYXAgZnJvbSAnLi9jc3Mvc3RhdGUtbWFwJztcbmltcG9ydCB2YWx1ZVR5cGVNYXAgZnJvbSAnLi9jc3MvdmFsdWUtdHlwZS1tYXAnO1xuaW1wb3J0IGJ1aWxkUHJvcGVydHlTdHJpbmcgZnJvbSAnLi9jc3MvYnVpbGQnO1xuaW1wb3J0IHByZWZpeGVyIGZyb20gJy4vY3NzL3ByZWZpeGVyJztcbmltcG9ydCBjcmVhdGVBZGFwdGVyIGZyb20gJy4vYWRhcHRlcic7XG5cbmZ1bmN0aW9uIGdldHRlciAoa2V5KSB7XG4gICAgY29uc29sZS5sb2codGhpcy5lbGVtZW50KVxuICAgIHJldHVybiB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZSh0aGlzLmVsZW1lbnQsIG51bGwpW3ByZWZpeGVyKGtleSldO1xufVxuXG5mdW5jdGlvbiBzZXR0ZXIocHJvcHMpIHtcbiAgICB0aGlzLmVsZW1lbnQuc3R5bGUuY3NzVGV4dCArPSBidWlsZFByb3BlcnR5U3RyaW5nKHByb3BzKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgKGVsZW1lbnQpID0+IGNyZWF0ZUFkYXB0ZXIoeyBlbGVtZW50LCBzdGF0ZU1hcCwgdmFsdWVUeXBlTWFwLCBnZXR0ZXIsIHNldHRlciB9KTsiXX0=

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports.setter = setter;
	
	var _stateMap = __webpack_require__(37);
	
	var _stateMap2 = _interopRequireDefault(_stateMap);
	
	var _valueTypeMap = __webpack_require__(38);
	
	var _valueTypeMap2 = _interopRequireDefault(_valueTypeMap);
	
	var _build = __webpack_require__(39);
	
	var _build2 = _interopRequireDefault(_build);
	
	var _attrAdapter = __webpack_require__(13);
	
	var _adapter = __webpack_require__(12);
	
	var _adapter2 = _interopRequireDefault(_adapter);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function setter(props) {
	    (0, _attrAdapter.setter)((0, _build2.default)(props, this.origin));
	}
	
	exports.default = function (element) {
	    var adapter = (0, _adapter2.default)({ element: element, stateMap: _stateMap2.default, valueTypeMap: _valueTypeMap2.default, getter: _attrAdapter.getter, setter: setter });
	    var bBox = element.getBBox();
	    var transformOriginY = 0;
	    var transformOriginX = 0;
	
	    adapter.origin = {
	        x: bBox.width * (transformOriginX / 100) + bBox.x,
	        y: bBox.height * (transformOriginY / 100) + bBox.y
	    };
	
	    return adapter;
	};
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hZGFwdGVyL3N2Zy1hZGFwdGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztRQU1nQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFULFNBQVMsTUFBVCxDQUFnQixLQUFoQixFQUF1QjtBQUMxQiw2QkFBVyxxQkFBTSxLQUFOLEVBQWEsS0FBSyxNQUFMLENBQXhCLEVBRDBCO0NBQXZCOztrQkFJUSxVQUFDLE9BQUQsRUFBYTtBQUN4QixRQUFNLFVBQVUsdUJBQWMsRUFBRSxnQkFBRixFQUFXLDRCQUFYLEVBQXFCLG9DQUFyQixFQUFtQywyQkFBbkMsRUFBMkMsY0FBM0MsRUFBZCxDQUFWLENBRGtCO0FBRXhCLFFBQU0sT0FBTyxRQUFRLE9BQVIsRUFBUCxDQUZrQjtBQUd4QixRQUFNLG1CQUFtQixDQUFuQixDQUhrQjtBQUl4QixRQUFNLG1CQUFtQixDQUFuQixDQUprQjs7QUFNeEIsWUFBUSxNQUFSLEdBQWlCO0FBQ2IsV0FBRyxLQUFLLEtBQUwsSUFBYyxtQkFBbUIsR0FBbkIsQ0FBZCxHQUF3QyxLQUFLLENBQUw7QUFDM0MsV0FBRyxLQUFLLE1BQUwsSUFBZSxtQkFBbUIsR0FBbkIsQ0FBZixHQUF5QyxLQUFLLENBQUw7S0FGaEQsQ0FOd0I7O0FBV3hCLFdBQU8sT0FBUCxDQVh3QjtDQUFiIiwiZmlsZSI6InN2Zy1hZGFwdGVyLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9NYXR0L1NpdGVzL3BvcG1vdGlvbiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdGF0ZU1hcCBmcm9tICcuL2Nzcy9zdGF0ZS1tYXAnO1xuaW1wb3J0IHZhbHVlVHlwZU1hcCBmcm9tICcuL3N2Zy92YWx1ZS10eXBlLW1hcCc7XG5pbXBvcnQgYnVpbGQgZnJvbSAnLi9zdmcvYnVpbGQnO1xuaW1wb3J0IHsgZ2V0dGVyLCBzZXR0ZXIgYXMgYXR0clNldHRlciB9IGZyb20gJy4vYXR0ci1hZGFwdGVyJztcbmltcG9ydCBjcmVhdGVBZGFwdGVyIGZyb20gJy4vYWRhcHRlcic7XG5cbmV4cG9ydCBmdW5jdGlvbiBzZXR0ZXIocHJvcHMpIHtcbiAgICBhdHRyU2V0dGVyKGJ1aWxkKHByb3BzLCB0aGlzLm9yaWdpbikpO1xufVxuXG5leHBvcnQgZGVmYXVsdCAoZWxlbWVudCkgPT4ge1xuICAgIGNvbnN0IGFkYXB0ZXIgPSBjcmVhdGVBZGFwdGVyKHsgZWxlbWVudCwgc3RhdGVNYXAsIHZhbHVlVHlwZU1hcCwgZ2V0dGVyLCBzZXR0ZXIgfSk7XG4gICAgY29uc3QgYkJveCA9IGVsZW1lbnQuZ2V0QkJveCgpO1xuICAgIGNvbnN0IHRyYW5zZm9ybU9yaWdpblkgPSAwO1xuICAgIGNvbnN0IHRyYW5zZm9ybU9yaWdpblggPSAwO1xuXG4gICAgYWRhcHRlci5vcmlnaW4gPSB7XG4gICAgICAgIHg6IGJCb3gud2lkdGggKiAodHJhbnNmb3JtT3JpZ2luWCAvIDEwMCkgKyBiQm94LngsXG4gICAgICAgIHk6IGJCb3guaGVpZ2h0ICogKHRyYW5zZm9ybU9yaWdpblkgLyAxMDApICsgYkJveC55XG4gICAgfTtcblxuICAgIHJldHVybiBhZGFwdGVyO1xufTtcblxuIl19

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _build = __webpack_require__(35);
	
	var _build2 = _interopRequireDefault(_build);
	
	var _stateMap = __webpack_require__(36);
	
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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hZGFwdGVyL3N2Zy1wYXRoLWFkYXB0ZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSUEsU0FBUyxNQUFULENBQWdCLEtBQWhCLEVBQXVCO0FBQ25CLFNBQUssU0FBTCxDQUFlLHFCQUFNLEtBQU4sRUFBYSxLQUFLLFVBQUwsQ0FBNUIsRUFEbUI7Q0FBdkI7O2tCQUllLFVBQUMsT0FBRCxFQUFhO0FBQ3hCLFFBQU0sVUFBVSwwQkFBVyxPQUFYLENBQVYsQ0FEa0I7O0FBR3hCLFlBQVEsUUFBUixzQkFId0I7QUFJeEIsWUFBUSxNQUFSLEdBQWlCLE1BQWpCLENBSndCO0FBS3hCLFlBQVEsU0FBUixzQkFMd0I7O0FBT3hCLFlBQVEsVUFBUixHQUFxQixRQUFRLGNBQVIsRUFBckIsQ0FQd0I7O0FBU3hCLFdBQU8sT0FBUCxDQVR3QjtDQUFiIiwiZmlsZSI6InN2Zy1wYXRoLWFkYXB0ZXIuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL01hdHQvU2l0ZXMvcG9wbW90aW9uIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGJ1aWxkIGZyb20gJy4vc3ZnLXBhdGgvYnVpbGQnO1xuaW1wb3J0IHN0YXRlTWFwIGZyb20gJy4vc3ZnLXBhdGgvc3RhdGUtbWFwJztcbmltcG9ydCBzdmdBZGFwdGVyLCB7IHNldHRlciBhcyBzdmdTZXR0ZXIgfSBmcm9tICcuL3N2Zy1hZGFwdGVyJztcblxuZnVuY3Rpb24gc2V0dGVyKHByb3BzKSB7XG4gICAgdGhpcy5zdmdTZXR0ZXIoYnVpbGQocHJvcHMsIHRoaXMucGF0aExlbmd0aCkpO1xufVxuXG5leHBvcnQgZGVmYXVsdCAoZWxlbWVudCkgPT4ge1xuICAgIGNvbnN0IGFkYXB0ZXIgPSBzdmdBZGFwdGVyKGVsZW1lbnQpO1xuXG4gICAgYWRhcHRlci5zdGF0ZU1hcCA9IHN0YXRlTWFwO1xuICAgIGFkYXB0ZXIuc2V0dGVyID0gc2V0dGVyO1xuICAgIGFkYXB0ZXIuc3ZnU2V0dGVyID0gc3ZnU2V0dGVyO1xuXG4gICAgYWRhcHRlci5wYXRoTGVuZ3RoID0gZWxlbWVudC5nZXRUb3RhbExlbmd0aCgpO1xuXG4gICAgcmV0dXJuIGFkYXB0ZXI7XG59O1xuIl19

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _createEasing = __webpack_require__(45);
	
	var _createEasing2 = _interopRequireDefault(_createEasing);
	
	var _createBezier = __webpack_require__(46);
	
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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hY3Rpb25zL2Vhc2luZy9wcmVzZXQtZWFzaW5nLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBOEJBLElBQU0sd0JBQXdCLEtBQXhCO0FBQ04sSUFBTSx1QkFBdUIsQ0FBdkI7Ozs7Ozs7O0FBUU4sSUFBTSxhQUFhO0FBQ2YsVUFBTSxVQUFDLFFBQUQ7WUFBVyxpRUFBVzt3QkFBeUIsVUFBWTtLQUEzRDtBQUNOLFVBQU07ZUFBWSxJQUFJLEtBQUssR0FBTCxDQUFTLEtBQUssSUFBTCxDQUFVLFFBQVYsQ0FBVCxDQUFKO0tBQVo7QUFDTixVQUFNLFVBQUMsUUFBRDtZQUFXLGlFQUFXO2VBQTBCLFFBQUMsR0FBVyxRQUFYLElBQXdCLENBQUMsV0FBVyxDQUFYLENBQUQsR0FBaUIsUUFBakIsR0FBNEIsUUFBNUIsQ0FBekI7S0FBaEQ7Q0FISjs7O0FBT04sSUFBTSxzQkFBc0IsVUFBQyxRQUFEO1dBQWMsVUFBQyxRQUFEO2VBQWMsV0FBVyxJQUFYLENBQWdCLFFBQWhCLEVBQTBCLFFBQTFCO0tBQWQ7Q0FBZDs7QUFFNUIsQ0FBQyxPQUFELEVBQVUsT0FBVixFQUFtQixPQUFuQixFQUE0QixPQUE1QixDQUFvQyxVQUFDLFVBQUQsRUFBYSxDQUFiO1dBQW1CLFdBQVcsVUFBWCxJQUF5QixvQkFBb0IsSUFBSSxDQUFKLENBQTdDO0NBQW5CLENBQXBDOzs7QUFHQSxLQUFLLElBQUksR0FBSixJQUFXLFVBQWhCLEVBQTRCO0FBQ3hCLFFBQUksV0FBVyxjQUFYLENBQTBCLEdBQTFCLENBQUosRUFBb0M7QUFDaEMsWUFBTSxpQkFBaUIsNEJBQXFCLFdBQVcsR0FBWCxDQUFyQixDQUFqQixDQUQwQjtBQUVoQyxtQkFBYyxVQUFkLElBQXlCLGVBQWUsRUFBZixDQUZPO0FBR2hDLG1CQUFjLFdBQWQsSUFBMEIsZUFBZSxHQUFmLENBSE07QUFJaEMsbUJBQWMsYUFBZCxJQUE0QixlQUFlLEtBQWYsQ0FKSTtLQUFwQztDQURKOztBQVNBLFdBQVcsTUFBWCxHQUFvQjtXQUFZO0NBQVo7QUFDcEIsV0FBVyxVQUFYLEdBQXdCLFVBQUMsUUFBRDtRQUFXLGlFQUFXO1dBQzFDLENBQUUsWUFBVSxDQUFWLENBQUQsR0FBZ0IsQ0FBaEIsR0FBcUIsTUFBTSxXQUFXLE1BQVgsQ0FBa0IsUUFBbEIsRUFBNEIsUUFBNUIsQ0FBTixHQUErQyxPQUFPLElBQUksS0FBSyxHQUFMLENBQVMsQ0FBVCxFQUFZLENBQUMsRUFBRCxJQUFPLFdBQVcsQ0FBWCxDQUFQLENBQWhCLENBQVA7Q0FEakQ7O0FBR3hCLFdBQVcsY0FBWDtBQUNBLFdBQVcsV0FBWDtBQUNBLFdBQVcsVUFBWCxHQUF3QixVQUFDLE1BQUQ7c0NBQVk7Ozs7V0FBUyxVQUFDLFFBQUQ7ZUFBYyx5QkFBTyxpQkFBYSxLQUFwQjtLQUFkO0NBQXJCOztrQkFFVCIsImZpbGUiOiJwcmVzZXQtZWFzaW5nLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9NYXR0L1NpdGVzL3BvcG1vdGlvbiIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gICAgRWFzaW5nIGZ1bmN0aW9uc1xuICAgIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICBcbiAgICBHZW5lcmF0ZXMgYW5kIHByb3ZpZGVzIGVhc2luZyBmdW5jdGlvbnMgYmFzZWQgb24gYmFzZUZ1bmN0aW9uIGRlZmluaXRpb25zXG4gICAgXG4gICAgQSBjYWxsIHRvIGVhc2luZ0Z1bmN0aW9uLmdldCgnZnVuY3Rpb25OYW1lJykgcmV0dXJucyBhIGZ1bmN0aW9uIHRoYXQgY2FuIGJlIHBhc3NlZDpcbiAgICAgICAgQHBhcmFtIFtudW1iZXJdOiBQcm9ncmVzcyAwLTFcbiAgICAgICAgQHBhcmFtIFtudW1iZXJdIChvcHRpb25hbCk6IEFtcCBtb2RpZmllciwgb25seSBhY2NlcHRlZCBpbiBzb21lIGVhc2luZyBmdW5jdGlvbnNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFuZCBpcyB1c2VkIHRvIGFkanVzdCBvdmVyYWxsIHN0cmVuZ3RoXG4gICAgICAgIEByZXR1cm4gW251bWJlcl06IEVhc2VkIHByb2dyZXNzXG4gICAgICAgIFxuICAgIFdlIGNhbiBnZW5lcmF0ZSBuZXcgZnVuY3Rpb25zIGJ5IHNlbmRpbmcgYW4gZWFzaW5nIGZ1bmN0aW9uIHRocm91Z2ggZWFzaW5nRnVuY3Rpb24uZXh0ZW5kKG5hbWUsIG1ldGhvZCkuXG4gICAgV2hpY2ggd2lsbCBtYWtlIG5hbWVJbiwgbmFtZU91dCBhbmQgbmFtZUluT3V0IGZ1bmN0aW9ucyBhdmFpbGFibGUgdG8gdXNlLlxuICAgICAgICBcbiAgICBFYXNpbmcgZnVuY3Rpb25zIGZyb20gUm9iZXJ0IFBlbm5lclxuICAgIGh0dHA6Ly93d3cucm9iZXJ0cGVubmVyLmNvbS9lYXNpbmcvXG4gICAgICAgIFxuICAgIEJlemllciBjdXJ2ZSBpbnRlcnByZXRvciBjcmVhdGVkIGZyb20gR2HDq3RhbiBSZW5hdWRlYXUncyBvcmlnaW5hbCBCZXppZXJFYXNpbmcgIFxuICAgIGh0dHBzOi8vZ2l0aHViLmNvbS9ncmUvYmV6aWVyLWVhc2luZy9ibG9iL21hc3Rlci9pbmRleC5qcyAgXG4gICAgaHR0cHM6Ly9naXRodWIuY29tL2dyZS9iZXppZXItZWFzaW5nL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcblxuICAgIEFudGljaXBhdGUgZWFzaW5nIGNyZWF0ZWQgYnkgRWxsaW90IEdpbm9cbiAgICBodHRwczovL3R3aXR0ZXIuY29tL0VsbGlvdEdlbm9cbiovXG4vLyBJbXBvcnRzXG5pbXBvcnQgY3JlYXRlRWFzaW5nRnVuY3Rpb24gZnJvbSAnLi9jcmVhdGUtZWFzaW5nJztcbmltcG9ydCBjdWJpY0JlemllciBmcm9tICcuL2NyZWF0ZS1iZXppZXInO1xuXG4vLyBWYWx1ZXNcbmNvbnN0IERFRkFVTFRfQkFDS19TVFJFTkdUSCA9IDEuNTI1O1xuY29uc3QgREVGQVVMVF9QT1dfU1RSRU5HVEggPSAyO1xuXG4vKlxuICAgIEVhY2ggb2YgdGhlc2UgYmFzZSBmdW5jdGlvbnMgaXMgYW4gZWFzZUluXG4gICAgXG4gICAgT24gaW5pdCwgd2UgdXNlIC5taXJyb3IgYW5kIC5yZXZlcnNlIHRvIGdlbmVyYXRlIGVhc2VJbk91dCBhbmRcbiAgICBlYXNlT3V0IGZ1bmN0aW9ucyByZXNwZWN0aXZlbHkuXG4qL1xuY29uc3QgYmFzZUVhc2luZyA9IHtcbiAgICBlYXNlOiAocHJvZ3Jlc3MsIHN0cmVuZ3RoID0gREVGQVVMVF9QT1dfU1RSRU5HVEgpID0+IHByb2dyZXNzICoqIHN0cmVuZ3RoLFxuICAgIGNpcmM6IHByb2dyZXNzID0+IDEgLSBNYXRoLnNpbihNYXRoLmFjb3MocHJvZ3Jlc3MpKSxcbiAgICBiYWNrOiAocHJvZ3Jlc3MsIHN0cmVuZ3RoID0gREVGQVVMVF9CQUNLX1NUUkVOR1RIKSA9PiAocHJvZ3Jlc3MgKiBwcm9ncmVzcykgKiAoKHN0cmVuZ3RoICsgMSkgKiBwcm9ncmVzcyAtIHN0cmVuZ3RoKVxufTtcblxuLy8gVXRpbGl0eSBmdW5jdGlvbnNcbmNvbnN0IGdlbmVyYXRlUG93ZXJFYXNpbmcgPSAoc3RyZW5ndGgpID0+IChwcm9ncmVzcykgPT4gYmFzZUVhc2luZy5lYXNlKHByb2dyZXNzLCBzdHJlbmd0aCk7XG5cblsnY3ViaWMnLCAncXVhcnQnLCAncXVpbnQnXS5mb3JFYWNoKChlYXNpbmdOYW1lLCBpKSA9PiBiYXNlRWFzaW5nW2Vhc2luZ05hbWVdID0gZ2VuZXJhdGVQb3dlckVhc2luZyhpICsgMykpO1xuXG4vLyBHZW5lcmF0ZSBpbi9vdXQvaW5PdXQgdmFyaWF0aW9uc1xuZm9yIChsZXQga2V5IGluIGJhc2VFYXNpbmcpIHtcbiAgICBpZiAoYmFzZUVhc2luZy5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgIGNvbnN0IGVhc2luZ0Z1bmN0aW9uID0gY3JlYXRlRWFzaW5nRnVuY3Rpb24oYmFzZUVhc2luZ1trZXldKTtcbiAgICAgICAgYmFzZUVhc2luZ1tgJHtrZXl9SW5gXSA9IGVhc2luZ0Z1bmN0aW9uLmluO1xuICAgICAgICBiYXNlRWFzaW5nW2Ake2tleX1PdXRgXSA9IGVhc2luZ0Z1bmN0aW9uLm91dDtcbiAgICAgICAgYmFzZUVhc2luZ1tgJHtrZXl9SW5PdXRgXSA9IGVhc2luZ0Z1bmN0aW9uLmluT3V0O1xuICAgIH1cbn1cblxuYmFzZUVhc2luZy5saW5lYXIgPSBwcm9ncmVzcyA9PiBwcm9ncmVzcztcbmJhc2VFYXNpbmcuYW50aWNpcGF0ZSA9IChwcm9ncmVzcywgc3RyZW5ndGggPSBERUZBVUxUX0JBQ0tfU1RSRU5HVEgpID0+XG4gICAgKChwcm9ncmVzcyo9MikgPCAxKSA/IDAuNSAqIGJhc2VFYXNpbmcuYmFja0luKHByb2dyZXNzLCBzdHJlbmd0aCkgOiAgMC41ICogKDIgLSBNYXRoLnBvdygyLCAtMTAgKiAocHJvZ3Jlc3MgLSAxKSkpO1xuXG5iYXNlRWFzaW5nLmVhc2luZ0Z1bmN0aW9uID0gY3JlYXRlRWFzaW5nRnVuY3Rpb247XG5iYXNlRWFzaW5nLmN1YmljQmV6aWVyID0gY3ViaWNCZXppZXI7XG5iYXNlRWFzaW5nLm1vZGlmeUVhc2UgPSAoZWFzaW5nLCAuLi5hcmdzKSA9PiAocHJvZ3Jlc3MpID0+IGVhc2luZyhwcm9ncmVzcywgLi4uYXJncyk7XG5cbmV4cG9ydCBkZWZhdWx0IGJhc2VFYXNpbmc7Il19

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports.stepProgress = exports.speedPerSecond = exports.speedPerFrame = exports.smooth = exports.restrict = exports.relativeValue = exports.random = exports.radiansToDegrees = exports.pointFromAngleAndDistance = exports.offset = exports.getProgressFromValue = exports.getValueFromProgress = exports.hypotenuse = exports.distance = exports.dilate = exports.degreesToRadians = exports.angle = undefined;
	
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
	//# sourceMappingURL=data:application/json;base64,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LEVBQWdCLEdBQWhCLENBQVQsRUFBK0IsR0FBL0I7Q0FBckI7Ozs7Ozs7Ozs7QUFVakIsSUFBTSwwQkFBUyxVQUFDLFFBQUQsRUFBVyxRQUFYLEVBQXFCLFFBQXJCO1FBQStCLGtFQUFZO1dBQU0sc0JBQVUsV0FBWSxZQUFZLFdBQVcsUUFBWCxDQUFaLEdBQW1DLEtBQUssR0FBTCxDQUFTLFNBQVQsRUFBb0IsUUFBcEIsQ0FBbkM7Q0FBdkU7Ozs7Ozs7O0FBUWYsSUFBTSx3Q0FBZ0IsVUFBQyxHQUFELEVBQU0sYUFBTjtXQUF3QixpQkFBQyxDQUFNLEdBQU4sQ0FBRCxHQUFlLE9BQU8sT0FBTyxhQUFQLENBQVAsR0FBK0IsQ0FBOUM7Q0FBeEI7Ozs7Ozs7O0FBUXRCLElBQU0sMENBQWlCLFVBQUMsUUFBRCxFQUFXLGFBQVg7V0FBNkIsWUFBWSxPQUFPLGFBQVAsQ0FBWjtDQUE3Qjs7Ozs7Ozs7O0FBU3ZCLElBQU0sc0NBQWUsVUFBQyxRQUFELEVBQVcsS0FBWCxFQUFxQjtBQUM3QyxRQUFNLFVBQVUsS0FBSyxRQUFRLENBQVIsQ0FBTCxDQUQ2QjtBQUU3QyxRQUFNLFNBQVMsSUFBSyxJQUFJLEtBQUosQ0FGeUI7QUFHN0MsUUFBTSxtQkFBbUIsS0FBSyxHQUFMLENBQVMsV0FBVyxNQUFYLEVBQW1CLENBQTVCLENBQW5CLENBSHVDOztBQUs3QyxXQUFPLEtBQUssS0FBTCxDQUFXLG1CQUFtQixPQUFuQixDQUFYLEdBQXlDLE9BQXpDLENBTHNDO0NBQXJCIiwiZmlsZSI6ImNhbGMuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL01hdHQvU2l0ZXMvcG9wbW90aW9uIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgICBoYXNQcm9wZXJ0eSxcbiAgICBpc051bSxcbiAgICBzcGxpdFZhbHVlVW5pdCxcbiAgICB0b0RlY2ltYWxcbn0gZnJvbSAnLi91dGlscyc7XG5cbmNvbnN0IFpFUk9fUE9JTlQgPSB7XG4gICAgeDogMCxcbiAgICB5OiAwLFxuICAgIHo6IDBcbn07XG5cbmNvbnN0IGRpc3RhbmNlMUQgPSAoYSwgYikgPT4gTWF0aC5hYnMoYSAtIGIpO1xuXG4vKlxuICAgIEFuZ2xlIGJldHdlZW4gcG9pbnRzXG4gICAgXG4gICAgVHJhbnNsYXRlcyB0aGUgaHlwb3RoZXRpY2FsIGxpbmUgc28gdGhhdCB0aGUgJ2Zyb20nIGNvb3JkaW5hdGVzXG4gICAgYXJlIGF0IDAsMCwgdGhlbiByZXR1cm4gdGhlIGFuZ2xlIHVzaW5nIC5hbmdsZUZyb21DZW50ZXIoKVxuICAgIFxuICAgIEBwYXJhbSBbb2JqZWN0XTogWCBhbmQgWSBjb29yZGluYXRlcyBvZiBmcm9tIHBvaW50XG4gICAgQHBhcmFtIFtvYmplY3RdOiBYIGFuZCBZIGNvcmRpbmF0ZXMgb2YgdG8gcG9pbnRcbiAgICBAcmV0dXJuIFtyYWRpYW5dOiBBbmdsZSBiZXR3ZWVuIHRoZSB0d28gcG9pbnRzIGluIHJhZGlhbnNcbiovXG5leHBvcnQgY29uc3QgYW5nbGUgPSAoYSwgYiA9IFpFUk9fUE9JTlQpID0+IHJhZGlhbnNUb0RlZ3JlZXMoTWF0aC5hdGFuMihhLnggLSBiLngsIGEueSAtIGIueSkpO1xuXG4vKlxuICAgIENvbnZlcnQgZGVncmVlcyB0byByYWRpYW5zXG4gICAgXG4gICAgQHBhcmFtIFtudW1iZXJdOiBWYWx1ZSBpbiBkZWdyZWVzXG4gICAgQHJldHVybiBbbnVtYmVyXTogVmFsdWUgaW4gcmFkaWFuc1xuKi9cbmV4cG9ydCBjb25zdCBkZWdyZWVzVG9SYWRpYW5zID0gKGRlZ3JlZXMpID0+IGRlZ3JlZXMgKiBNYXRoLlBJIC8gMTgwO1xuXG4vKlxuICAgIERpbGF0ZVxuICAgIFxuICAgIENoYW5nZSB0aGUgcHJvZ3Jlc3Npb24gYmV0d2VlbiBhIGFuZCBiIGFjY29yZGluZyB0byBkaWxhdGlvbi5cbiAgICBcbiAgICBTbyBkaWxhdGlvbiA9IDAuNSB3b3VsZCBjaGFuZ2VcbiAgICBcbiAgICBhIC0tLS0tLS0tLSBiXG4gICAgXG4gICAgdG9cbiAgICBcbiAgICBhIC0tLS0gYlxuICAgIFxuICAgIEBwYXJhbSBbbnVtYmVyXTogUHJldmlvdXMgdmFsdWVcbiAgICBAcGFyYW0gW251bWJlcl06IEN1cnJlbnQgdmFsdWVcbiAgICBAcGFyYW0gW251bWJlcl06IERpbGF0ZSBwcm9ncmVzcyBieSB4XG4gICAgQHJldHVybiBbbnVtYmVyXTogUHJldmlvdXMgdmFsdWUgcGx1cyB0aGUgZGlsYXRlZCBkaWZmZXJlbmNlXG4qL1xuZXhwb3J0IGNvbnN0IGRpbGF0ZSA9IChhLCBiLCBkaWxhdGlvbikgPT4gYSArICgoYiAtIGEpICogZGlsYXRpb24pO1xuXG4vKlxuICAgIERpc3RhbmNlXG4gICAgXG4gICAgUmV0dXJucyB0aGUgZGlzdGFuY2UgYmV0d2VlbiB0d28gbiBkaW1lbnNpb25hbCBwb2ludHMuXG4gICAgXG4gICAgQHBhcmFtIFtvYmplY3QvbnVtYmVyXTogeCBhbmQgeSBvciBqdXN0IHggb2YgcG9pbnQgQVxuICAgIEBwYXJhbSBbb2JqZWN0L251bWJlcl06IChvcHRpb25hbCk6IHggYW5kIHkgb3IganVzdCB4IG9mIHBvaW50IEJcbiAgICBAcmV0dXJuIFtudW1iZXJdOiBUaGUgZGlzdGFuY2UgYmV0d2VlbiB0aGUgdHdvIHBvaW50c1xuKi9cbmV4cG9ydCBjb25zdCBkaXN0YW5jZSA9IChhLCBiID0gWkVST19QT0lOVCkgPT4ge1xuICAgIC8vIDFEIGRpbWVuc2lvbnNcbiAgICBpZiAoaXNOdW0oYSkpIHtcbiAgICAgICAgcmV0dXJuIGRpc3RhbmNlMUQoYSwgYik7XG5cbiAgICAvLyBNdWx0aS1kaW1lbnNpb25hbFxuICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IHhEZWx0YSA9IGRpc3RhbmNlMUQoYS54LCBiLngpO1xuICAgICAgICBjb25zdCB5RGVsdGEgPSBkaXN0YW5jZTFEKGEueSwgYi55KTtcbiAgICAgICAgY29uc3QgekRlbHRhID0gKGlzTnVtKGEueikpID8gZGlzdGFuY2UxRChhLnosIGIueikgOiAwO1xuXG4gICAgICAgIHJldHVybiBNYXRoLnNxcnQoKHhEZWx0YSAqKiAyKSArICh5RGVsdGEgKiogMikgKyAoekRlbHRhICoqIDIpKTtcbiAgICB9XG59O1xuIFxuLypcbiAgICBIeXBvdGVudXNlXG4gICAgXG4gICAgUmV0dXJucyB0aGUgaHlwb3RlbnVzZSwgc2lkZSBDLCBnaXZlbiB0aGUgbGVuZ3RocyBvZiBzaWRlcyBBIGFuZCBCLlxuICAgIFxuICAgIEBwYXJhbSBbbnVtYmVyXTogTGVuZ3RoIG9mIEFcbiAgICBAcGFyYW0gW251bWJlcl06IExlbmd0aCBvZiBCXG4gICAgQHJldHVybiBbbnVtYmVyXTogTGVuZ3RoIG9mIENcbiovXG5leHBvcnQgY29uc3QgaHlwb3RlbnVzZSA9IChhLCBiKSA9PiBNYXRoLnNxcnQoKGEgKiBhKSArIChiICogYikpO1xuXG4vKlxuICAgIFZhbHVlIGluIHJhbmdlIGZyb20gcHJvZ3Jlc3NcbiAgICBcbiAgICBHaXZlbiBhIGxvd2VyIGxpbWl0IGFuZCBhbiB1cHBlciBsaW1pdCwgd2UgcmV0dXJuIHRoZSB2YWx1ZSB3aXRoaW5cbiAgICB0aGF0IHJhbmdlIGFzIGV4cHJlc3NlZCBieSBwcm9ncmVzcyAoYSBudW1iZXIgZnJvbSAwLTEpXG4gICAgXG4gICAgQHBhcmFtIFtudW1iZXJdOiBUaGUgcHJvZ3Jlc3MgYmV0d2VlbiBsb3dlciBhbmQgdXBwZXIgbGltaXRzIGV4cHJlc3NlZCAwLTFcbiAgICBAcGFyYW0gW251bWJlcl06IExvd2VyIGxpbWl0IG9mIHJhbmdlXG4gICAgQHBhcmFtIFtudW1iZXJdOiBVcHBlciBsaW1pdCBvZiByYW5nZVxuICAgIEByZXR1cm4gW251bWJlcl06IFZhbHVlIGFzIGNhbGN1bGF0ZWQgZnJvbSBwcm9ncmVzcyB3aXRoaW4gcmFuZ2UgKG5vdCBsaW1pdGVkIHdpdGhpbiByYW5nZSlcbiovXG5leHBvcnQgY29uc3QgZ2V0VmFsdWVGcm9tUHJvZ3Jlc3MgPSAocHJvZ3Jlc3MsIGZyb20sIHRvKSA9PiAoLSBwcm9ncmVzcyAqIGZyb20pICsgKHByb2dyZXNzICogdG8pICsgZnJvbTtcblxuLypcbiAgICBQcm9ncmVzcyB3aXRoaW4gZ2l2ZW4gcmFuZ2VcbiAgICBcbiAgICBHaXZlbiBhIGxvd2VyIGxpbWl0IGFuZCBhbiB1cHBlciBsaW1pdCwgd2UgcmV0dXJuIHRoZSBwcm9ncmVzc1xuICAgIChleHByZXNzZWQgYXMgYSBudW1iZXIgMC0xKSByZXByZXNlbnRlZCBieSB0aGUgZ2l2ZW4gdmFsdWUsIGFuZFxuICAgIGxpbWl0IHRoYXQgcHJvZ3Jlc3MgdG8gd2l0aGluIDAtMS5cbiAgICBcbiAgICBAcGFyYW0gW251bWJlcl06IFZhbHVlIHRvIGZpbmQgcHJvZ3Jlc3Mgd2l0aGluIGdpdmVuIHJhbmdlXG4gICAgQHBhcmFtIFtudW1iZXJdOiBMb3dlciBsaW1pdCBcbiAgICBAcGFyYW0gW251bWJlcl06IFVwcGVyIGxpbWl0XG4gICAgQHJldHVybiBbbnVtYmVyXTogUHJvZ3Jlc3Mgb2YgdmFsdWUgd2l0aGluIHJhbmdlIGFzIGV4cHJlc3NlZCAwLTFcbiovXG5leHBvcnQgY29uc3QgZ2V0UHJvZ3Jlc3NGcm9tVmFsdWUgPSAodmFsdWUsIGZyb20sIHRvKSA9PiAodmFsdWUgLSBmcm9tKSAvICh0byAtIGZyb20pO1xuXG4vKlxuICAgIE9mZnNldCBiZXR3ZWVuIHR3byBvYmplY3RzIG9mIG51bWJlcnNcblxuICAgIElmIHByb3BlcnR5IGlzIGZvdW5kIGluIGIgbm90IHByZXNlbnQgaW4gYSwgaXQgd2lsbCByZXR1cm4gYDBgIGZvciB0aGF0IHByb3AuXG4gICAgXG4gICAgQHBhcmFtIFtQb2ludF06IEZpcnN0IG9iamVjdFxuICAgIEBwYXJhbSBbUG9pbnRdOiBTZWNvbmQgb2JqZWN0XG4gICAgQHJldHVybiBbT2Zmc2V0XTogRGlzdGFuY2UgbWV0cmljcyBiZXR3ZWVuIHR3byBwb2ludHNcbiovXG5leHBvcnQgY29uc3Qgb2Zmc2V0ID0gKGEsIGIpID0+IHtcbiAgICBjb25zdCBvZmZzZXQgPSB7fTtcblxuICAgIGZvciAobGV0IGtleSBpbiBiKSB7XG4gICAgICAgIGlmIChiLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICAgIG9mZnNldFtrZXldID0gaGFzUHJvcGVydHkoYSwga2V5KSA/IGJba2V5XSAtIGFba2V5XSA6IDA7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gb2Zmc2V0O1xufTtcblxuLypcbiAgICBQb2ludCBmcm9tIGFuZ2xlIGFuZCBkaXN0YW5jZVxuICAgIFxuICAgIEBwYXJhbSBbb2JqZWN0XTogMkQgcG9pbnQgb2Ygb3JpZ2luXG4gICAgQHBhcmFtIFtudW1iZXJdOiBBbmdsZSBmcm9tIG9yaWdpblxuICAgIEBwYXJhbSBbbnVtYmVyXTogRGlzdGFuY2UgZnJvbSBvcmlnaW5cbiAgICBAcmV0dXJuIFtvYmplY3RdOiBDYWxjdWxhdGVkIDJEIHBvaW50XG4qL1xuZXhwb3J0IGNvbnN0IHBvaW50RnJvbUFuZ2xlQW5kRGlzdGFuY2UgPSAob3JpZ2luLCBhbmdsZSwgZGlzdGFuY2UpID0+IHtcbiAgICBhbmdsZSA9IGRlZ3JlZXNUb1JhZGlhbnMoYW5nbGUpO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgeDogZGlzdGFuY2UgKiBNYXRoLmNvcyhhbmdsZSkgKyBvcmlnaW4ueCxcbiAgICAgICAgeTogZGlzdGFuY2UgKiBNYXRoLnNpbihhbmdsZSkgKyBvcmlnaW4ueVxuICAgIH07XG59O1xuXG4vKlxuICAgIENvbnZlcnQgcmFkaWFucyB0byBkZWdyZWVzXG4gICAgXG4gICAgQHBhcmFtIFtudW1iZXJdOiBWYWx1ZSBpbiByYWRpYW5zXG4gICAgQHJldHVybiBbbnVtYmVyXTogVmFsdWUgaW4gZGVncmVlc1xuKi9cbmV4cG9ydCBjb25zdCByYWRpYW5zVG9EZWdyZWVzID0gKHJhZGlhbnMpID0+IHJhZGlhbnMgKiAxODAgLyBNYXRoLlBJO1xuXG4vKlxuICAgIFJldHVybiByYW5kb20gbnVtYmVyIGJldHdlZW4gcmFuZ2VcbiAgICBcbiAgICBAcGFyYW0gW251bWJlcl0gKG9wdGlvbmFsKTogT3V0cHV0IG1pbmltdW1cbiAgICBAcGFyYW0gW251bWJlcl0gKG9wdGlvbmFsKTogT3V0cHV0IG1heGltdW1cbiAgICBAcmV0dXJuIFtudW1iZXJdOiBSYW5kb20gbnVtYmVyIHdpdGhpbiByYW5nZSwgb3IgMCBhbmQgMSBpZiBub25lIHByb3ZpZGVkXG4qL1xuZXhwb3J0IGNvbnN0IHJhbmRvbSA9IChtaW4gPSAwLCBtYXggPSAxKSA9PiBNYXRoLnJhbmRvbSgpICogKG1heCAtIG1pbikgKyBtaW47XG5cbi8qXG4gICAgQ2FsY3VsYXRlIHJlbGF0aXZlIHZhbHVlXG4gICAgXG4gICAgVGFrZXMgdGhlIG9wZXJhdG9yIGFuZCB2YWx1ZSBmcm9tIGEgc3RyaW5nLCBpZSBcIis9NVwiLCBhbmQgYXBwbGllc1xuICAgIHRvIHRoZSBjdXJyZW50IHZhbHVlIHRvIHJlc29sdmUgYSBuZXcgdGFyZ2V0LlxuICAgIFxuICAgIEBwYXJhbSBbbnVtYmVyXTogQ3VycmVudCB2YWx1ZVxuICAgIEBwYXJhbSBbc3RyaW5nXTogUmVsYXRpdmUgdmFsdWVcbiAgICBAcmV0dXJuIFtudW1iZXJdOiBOZXcgdmFsdWVcbiovXG5leHBvcnQgY29uc3QgcmVsYXRpdmVWYWx1ZSA9IChjdXJyZW50LCByZWxhdGl2ZSkgPT4ge1xuICAgIGxldCBuZXdWYWx1ZSA9IGN1cnJlbnQ7XG4gICAgY29uc3QgZXF1YXRpb24gPSByZWxhdGl2ZS5zcGxpdCgnPScpO1xuICAgIGNvbnN0IG9wZXJhdG9yID0gZXF1YXRpb25bMF07XG4gICAgbGV0IHsgdW5pdCwgdmFsdWUgfSA9IHNwbGl0VmFsdWVVbml0KGVxdWF0aW9uWzFdKTtcblxuICAgIHZhbHVlID0gcGFyc2VGbG9hdCh2YWx1ZSk7XG5cbiAgICBzd2l0Y2ggKG9wZXJhdG9yKSB7XG4gICAgY2FzZSAnKyc6XG4gICAgICAgIG5ld1ZhbHVlICs9IHZhbHVlO1xuICAgICAgICBicmVhaztcbiAgICBjYXNlICctJzpcbiAgICAgICAgbmV3VmFsdWUgLT0gdmFsdWU7XG4gICAgICAgIGJyZWFrO1xuICAgIGNhc2UgJyonOlxuICAgICAgICBuZXdWYWx1ZSAqPSB2YWx1ZTtcbiAgICAgICAgYnJlYWs7XG4gICAgY2FzZSAnLyc6XG4gICAgICAgIG5ld1ZhbHVlIC89IHZhbHVlO1xuICAgICAgICBicmVhaztcbiAgICB9XG4gICAgXG4gICAgaWYgKHVuaXQpIHtcbiAgICAgICAgbmV3VmFsdWUgKz0gdW5pdDtcbiAgICB9XG5cbiAgICByZXR1cm4gbmV3VmFsdWU7XG59O1xuXG4vKlxuICAgIFJlc3RyaWN0IHZhbHVlIHRvIHJhbmdlXG4gICAgXG4gICAgUmV0dXJuIHZhbHVlIHdpdGhpbiB0aGUgcmFuZ2Ugb2YgbG93ZXJMaW1pdCBhbmQgdXBwZXJMaW1pdFxuICAgIFxuICAgIEBwYXJhbSBbbnVtYmVyXTogVmFsdWUgdG8ga2VlcCB3aXRoaW4gcmFuZ2VcbiAgICBAcGFyYW0gW251bWJlcl06IExvd2VyIGxpbWl0IG9mIHJhbmdlXG4gICAgQHBhcmFtIFtudW1iZXJdOiBVcHBlciBsaW1pdCBvZiByYW5nZVxuICAgIEByZXR1cm4gW251bWJlcl06IFZhbHVlIGFzIGxpbWl0ZWQgd2l0aGluIGdpdmVuIHJhbmdlXG4qL1xuZXhwb3J0IGNvbnN0IHJlc3RyaWN0ID0gKHZhbHVlLCBtaW4sIG1heCkgPT4gTWF0aC5tYXgoTWF0aC5taW4odmFsdWUsIG1heCksIG1pbik7XG5cbi8qXG4gICAgRnJhbWVyYXRlLWluZGVwZW5kZW50IHNtb290aGluZ1xuXG4gICAgQHBhcmFtIFtudW1iZXJdOiBOZXcgdmFsdWVcbiAgICBAcGFyYW0gW251bWJlcl06IE9sZCB2YWx1ZVxuICAgIEBwYXJhbSBbbnVtYmVyXTogRnJhbWUgZHVyYXRpb25cbiAgICBAcGFyYW0gW251bWJlcl0gKG9wdGlvbmFsKTogU21vb3RoaW5nICgwIGlzIG5vbmUpXG4qL1xuZXhwb3J0IGNvbnN0IHNtb290aCA9IChuZXdWYWx1ZSwgb2xkVmFsdWUsIGR1cmF0aW9uLCBzbW9vdGhpbmcgPSAwKSA9PiB0b0RlY2ltYWwob2xkVmFsdWUgKyAoZHVyYXRpb24gKiAobmV3VmFsdWUgLSBvbGRWYWx1ZSkgLyBNYXRoLm1heChzbW9vdGhpbmcsIGR1cmF0aW9uKSkpO1xuXG4vKlxuICAgIENvbnZlcnQgeCBwZXIgc2Vjb25kIHRvIHBlciBmcmFtZSB2ZWxvY2l0eSBiYXNlZCBvbiBmcHNcbiAgICBcbiAgICBAcGFyYW0gW251bWJlcl06IFVuaXQgcGVyIHNlY29uZFxuICAgIEBwYXJhbSBbbnVtYmVyXTogRnJhbWUgZHVyYXRpb24gaW4gbXNcbiovXG5leHBvcnQgY29uc3Qgc3BlZWRQZXJGcmFtZSA9ICh4cHMsIGZyYW1lRHVyYXRpb24pID0+IChpc051bSh4cHMpKSA/IHhwcyAvICgxMDAwIC8gZnJhbWVEdXJhdGlvbikgOiAwO1xuXG4vKlxuICAgIENvbnZlcnQgdmVsb2NpdHkgaW50byB2ZWxpY2l0eSBwZXIgc2Vjb25kXG4gICAgXG4gICAgQHBhcmFtIFtudW1iZXJdOiBVbml0IHBlciBmcmFtZVxuICAgIEBwYXJhbSBbbnVtYmVyXTogRnJhbWUgZHVyYXRpb24gaW4gbXNcbiovXG5leHBvcnQgY29uc3Qgc3BlZWRQZXJTZWNvbmQgPSAodmVsb2NpdHksIGZyYW1lRHVyYXRpb24pID0+IHZlbG9jaXR5ICogKDEwMDAgLyBmcmFtZUR1cmF0aW9uKTtcblxuLypcbiAgICBDcmVhdGUgc3RlcHBlZCB2ZXJzaW9uIG9mIDAtMSBwcm9ncmVzc1xuICAgIFxuICAgIEBwYXJhbSBbbnVtYmVyXTogQ3VycmVudCB2YWx1ZVxuICAgIEBwYXJhbSBbaW50XTogTnVtYmVyIG9mIHN0ZXBzXG4gICAgQHJldHVybiBbbnVtYmVyXTogU3RlcHBlZCB2YWx1ZVxuKi9cbmV4cG9ydCBjb25zdCBzdGVwUHJvZ3Jlc3MgPSAocHJvZ3Jlc3MsIHN0ZXBzKSA9PiB7XG4gICAgY29uc3Qgc2VnbWVudCA9IDEgLyAoc3RlcHMgLSAxKTtcbiAgICBjb25zdCB0YXJnZXQgPSAxIC0gKDEgLyBzdGVwcyk7XG4gICAgY29uc3QgcHJvZ3Jlc3NPZlRhcmdldCA9IE1hdGgubWluKHByb2dyZXNzIC8gdGFyZ2V0LCAxKTtcblxuICAgIHJldHVybiBNYXRoLmZsb29yKHByb2dyZXNzT2ZUYXJnZXQgLyBzZWdtZW50KSAqIHNlZ21lbnQ7XG59OyJdfQ==

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _defaultProps = __webpack_require__(43);
	
	exports.default = {
	    defaultProps: _defaultProps.opacity
	};
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy92YWx1ZS10eXBlcy9hbHBoYS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7a0JBRWU7QUFDWCx1Q0FEVyIsImZpbGUiOiJhbHBoYS5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvTWF0dC9TaXRlcy9wb3Btb3Rpb24iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBvcGFjaXR5IH0gZnJvbSAnLi9zZXR0aW5ncy9kZWZhdWx0LXByb3BzJztcblxuZXhwb3J0IGRlZmF1bHQge1xuICAgIGRlZmF1bHRQcm9wczogb3BhY2l0eVxufTsiXX0=

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports.default = {
	    defaultProps: {
	        unit: 'deg'
	    }
	};
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy92YWx1ZS10eXBlcy9hbmdsZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7a0JBQWU7QUFDWCxrQkFBYztBQUNWLGNBQU0sS0FBTjtLQURKIiwiZmlsZSI6ImFuZ2xlLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9NYXR0L1NpdGVzL3BvcG1vdGlvbiIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IHtcbiAgICBkZWZhdWx0UHJvcHM6IHtcbiAgICAgICAgdW5pdDogJ2RlZydcbiAgICB9XG59OyJdfQ==

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _utils = __webpack_require__(2);
	
	var _px = __webpack_require__(27);
	
	var _px2 = _interopRequireDefault(_px);
	
	var _dictionary = __webpack_require__(44);
	
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
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	exports.__esModule = true;
	
	var _rgb = __webpack_require__(28);
	
	var _rgb2 = _interopRequireDefault(_rgb);
	
	var _hsl = __webpack_require__(25);
	
	var _hsl2 = _interopRequireDefault(_hsl);
	
	var _hex = __webpack_require__(24);
	
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
/* 23 */
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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy92YWx1ZS10eXBlcy9jb21wbGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUVBLElBQU0sY0FBYyxrQkFBZDtBQUNOLElBQU0sZ0JBQWdCLFVBQUMsS0FBRDtXQUFXLE9BQU8sS0FBUCxHQUFlLEdBQWY7Q0FBWDs7a0JBRVA7O0FBRVgsVUFBTSxVQUFDLEtBQUQsRUFBVztBQUNiLFlBQU0sVUFBVSxNQUFNLEtBQU4sQ0FBWSxXQUFaLENBQVYsQ0FETztBQUViLGVBQVEsb0JBQVEsT0FBUixLQUFvQixRQUFRLE1BQVIsR0FBaUIsQ0FBakIsQ0FGZjtLQUFYOztBQUtOLGNBQVUsVUFBQyxLQUFELEVBQVc7QUFDakIsWUFBSSxVQUFVLENBQVYsQ0FEYTtBQUVqQixlQUFPLE1BQU0sT0FBTixDQUFjLFdBQWQsRUFBMkI7bUJBQU0sY0FBYyxTQUFkO1NBQU4sQ0FBbEMsQ0FGaUI7S0FBWDs7QUFLVixXQUFPLFVBQUMsS0FBRCxFQUFXO0FBQ2QsWUFBTSxhQUFhLEVBQWIsQ0FEUTs7QUFHZCxjQUFNLEtBQU4sQ0FBWSxXQUFaLEVBQXlCLE9BQXpCLENBQWlDLFVBQUMsS0FBRCxFQUFRLENBQVI7bUJBQWMsV0FBVyxDQUFYLElBQWdCLEtBQWhCO1NBQWQsQ0FBakMsQ0FIYzs7QUFLZCxlQUFPLFVBQVAsQ0FMYztLQUFYOztBQVFQLGFBQVMsVUFBQyxNQUFELEVBQVMsUUFBVCxFQUFzQjtBQUMzQixhQUFLLElBQUksR0FBSixJQUFXLE1BQWhCLEVBQXdCO0FBQ3BCLGdCQUFJLE9BQU8sY0FBUCxDQUFzQixHQUF0QixDQUFKLEVBQWdDO0FBQzVCLDJCQUFXLFNBQVMsT0FBVCxDQUFpQixjQUFjLEdBQWQsQ0FBakIsRUFBcUMsT0FBTyxHQUFQLENBQXJDLENBQVgsQ0FENEI7YUFBaEM7U0FESjs7QUFNQSxlQUFPLFFBQVAsQ0FQMkI7S0FBdEIiLCJmaWxlIjoiY29tcGxleC5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvTWF0dC9TaXRlcy9wb3Btb3Rpb24iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBpc0FycmF5IH0gZnJvbSAnLi4vaW5jL3V0aWxzJztcblxuY29uc3QgRkxPQVRfUkVHRVggPSAvKC0pPyhcXGRbXFxkXFwuXSopL2c7XG5jb25zdCBnZW5lcmF0ZVRva2VuID0gKHRva2VuKSA9PiAnJHsnICsgdG9rZW4gKyAnfSc7XG5cbmV4cG9ydCBkZWZhdWx0IHtcblxuICAgIHRlc3Q6ICh2YWx1ZSkgPT4ge1xuICAgICAgICBjb25zdCBtYXRjaGVzID0gdmFsdWUubWF0Y2goRkxPQVRfUkVHRVgpO1xuICAgICAgICByZXR1cm4gKGlzQXJyYXkobWF0Y2hlcykgJiYgbWF0Y2hlcy5sZW5ndGggPiAxKTtcbiAgICB9LFxuXG4gICAgdGVtcGxhdGU6ICh2YWx1ZSkgPT4ge1xuICAgICAgICBsZXQgY291bnRlciA9IDA7XG4gICAgICAgIHJldHVybiB2YWx1ZS5yZXBsYWNlKEZMT0FUX1JFR0VYLCAoKSA9PiBnZW5lcmF0ZVRva2VuKGNvdW50ZXIrKykpO1xuICAgIH0sXG5cbiAgICBzcGxpdDogKHZhbHVlKSA9PiB7XG4gICAgICAgIGNvbnN0IHNwbGl0VmFsdWUgPSB7fTtcbiAgICAgICAgXG4gICAgICAgIHZhbHVlLm1hdGNoKEZMT0FUX1JFR0VYKS5mb3JFYWNoKCh2YWx1ZSwgaSkgPT4gc3BsaXRWYWx1ZVtpXSA9IHZhbHVlKTtcblxuICAgICAgICByZXR1cm4gc3BsaXRWYWx1ZTtcbiAgICB9LFxuXG4gICAgY29tYmluZTogKHZhbHVlcywgdGVtcGxhdGUpID0+IHtcbiAgICAgICAgZm9yIChsZXQga2V5IGluIHZhbHVlcykge1xuICAgICAgICAgICAgaWYgKHZhbHVlcy5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgICAgICAgdGVtcGxhdGUgPSB0ZW1wbGF0ZS5yZXBsYWNlKGdlbmVyYXRlVG9rZW4oa2V5KSwgdmFsdWVzW2tleV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRlbXBsYXRlO1xuICAgIH1cblxufTsiXX0=

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _rgb = __webpack_require__(28);
	
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
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _defaultProps = __webpack_require__(43);
	
	var _dictionary = __webpack_require__(44);
	
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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy92YWx1ZS10eXBlcy9oc2wuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztrQkFJZTtBQUNYLGtCQUFjO0FBQ1YsYUFBSztBQUNELGlCQUFLLENBQUw7QUFDQSxpQkFBSyxHQUFMO1NBRko7QUFJQSx5Q0FMVTtBQU1WLHdDQU5VO0FBT1Ysb0NBUFU7S0FBZDs7QUFVQSxVQUFNLFVBQUMsS0FBRDtlQUFZLFNBQVMsTUFBTSxPQUFOLENBQWMsS0FBZCxJQUF1QixDQUFDLENBQUQ7S0FBNUM7O0FBRU4sV0FBTyxVQUFDLEtBQUQ7ZUFBVywyQkFBZSxLQUFmO0tBQVg7O0FBRVAsYUFBUyxVQUFDLE1BQUQ7ZUFBWSxpQ0FBcUIsNEJBQWdCLE1BQWhCLG1CQUFrQyxJQUFsQyxFQUF3QyxDQUF4QyxDQUFyQixFQUFpRSxNQUFqRTtLQUFaIiwiZmlsZSI6ImhzbC5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvTWF0dC9TaXRlcy9wb3Btb3Rpb24iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBwZXJjZW50LCBvcGFjaXR5IH0gZnJvbSAnLi9zZXR0aW5ncy9kZWZhdWx0LXByb3BzJztcbmltcG9ydCB7IGhzbCBhcyBoc2xUZXJtcyB9IGZyb20gJy4vc2V0dGluZ3MvZGljdGlvbmFyeSc7XG5pbXBvcnQgeyBjcmVhdGVEZWxpbWl0ZWQsIGNyZWF0ZUZ1bmN0aW9uU3RyaW5nLCBnZXRDb2xvclZhbHVlcyB9IGZyb20gJy4uL2luYy91dGlscyc7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBkZWZhdWx0UHJvcHM6IHtcbiAgICAgICAgSHVlOiB7XG4gICAgICAgICAgICBtaW46IDAsXG4gICAgICAgICAgICBtYXg6IDM2MFxuICAgICAgICB9LFxuICAgICAgICBTYXR1cmF0aW9uOiBwZXJjZW50LFxuICAgICAgICBMaWdodG5lc3M6IHBlcmNlbnQsXG4gICAgICAgIEFscGhhOiBvcGFjaXR5XG4gICAgfSxcblxuICAgIHRlc3Q6ICh2YWx1ZSkgPT4gKHZhbHVlICYmIHZhbHVlLmluZGV4T2YoJ2hzbCcpID4gLTEpLFxuXG4gICAgc3BsaXQ6ICh2YWx1ZSkgPT4gZ2V0Q29sb3JWYWx1ZXModmFsdWUsIGhzbFRlcm1zKSxcblxuICAgIGNvbWJpbmU6ICh2YWx1ZXMpID0+IGNyZWF0ZUZ1bmN0aW9uU3RyaW5nKGNyZWF0ZURlbGltaXRlZCh2YWx1ZXMsIGhzbFRlcm1zLCAnLCAnLCAyKSwgJ2hzbGEnKVxufTtcbiJdfQ==

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _dictionary = __webpack_require__(44);
	
	var _utils = __webpack_require__(2);
	
	var _px = __webpack_require__(27);
	
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
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports.default = {
	    defaultProps: {
	        unit: 'px'
	    }
	};
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy92YWx1ZS10eXBlcy9weC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7a0JBQWU7QUFDWCxrQkFBYztBQUNWLGNBQU0sSUFBTjtLQURKIiwiZmlsZSI6InB4LmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9NYXR0L1NpdGVzL3BvcG1vdGlvbiIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IHtcbiAgICBkZWZhdWx0UHJvcHM6IHtcbiAgICAgICAgdW5pdDogJ3B4J1xuICAgIH1cbn07Il19

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _utils = __webpack_require__(2);
	
	var _dictionary = __webpack_require__(44);
	
	var _defaultProps = __webpack_require__(43);
	
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
/* 29 */
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
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	exports.__esModule = true;
	
	var _color = __webpack_require__(22);
	
	var _color2 = _interopRequireDefault(_color);
	
	var _px = __webpack_require__(27);
	
	var _dictionary = __webpack_require__(44);
	
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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy92YWx1ZS10eXBlcy9zaGFkb3cuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBS0EsSUFBTSwwQkFBMEIsbUJBQVksS0FBWixDQUFrQixDQUFsQixFQUFxQixDQUFyQixDQUExQjs7a0JBRVM7QUFDWCwrQkFDTyxnQkFBTSxZQUFOO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7TUFMSjs7QUFRQSxXQUFPLFVBQUMsS0FBRCxFQUFXO0FBQ2QsWUFBTSxPQUFPLGdDQUFvQixLQUFwQixDQUFQLENBRFE7QUFFZCxZQUFJLGtCQUFrQixLQUFsQixDQUZVO0FBR2QsWUFBSSxZQUFZLEVBQVosQ0FIVTtBQUlkLFlBQUksYUFBYSxFQUFiLENBSlU7O0FBTWQsYUFBSyxPQUFMLENBQWEsVUFBQyxHQUFELEVBQU0sQ0FBTixFQUFZOztBQUVyQixnQkFBSSxtQkFBbUIsZ0JBQU0sSUFBTixDQUFXLEdBQVgsQ0FBbkIsRUFBb0M7QUFDcEMsa0NBQWtCLElBQWxCLENBRG9DO0FBRXBDLDZCQUFhLEdBQWI7OztBQUZvQyxhQUF4QyxNQUtPO0FBQ0gsK0JBQVcsbUJBQVksQ0FBWixDQUFYLElBQTZCLEdBQTdCLENBREc7aUJBTFA7U0FGUyxDQUFiLENBTmM7O0FBa0JkLFlBQU0sa0JBQWtCLGdCQUFNLEtBQU4sQ0FBWSxTQUFaLENBQWxCLENBbEJROztBQW9CZCw0QkFBWSxjQUFZLG1DQUF4QixDQXBCYztLQUFYOztBQXVCUCxhQUFTLFVBQUMsTUFBRDtlQUFZLDRCQUFnQixNQUFoQixFQUF3Qix1QkFBeEIsRUFBaUQsR0FBakQsSUFBd0QsZ0JBQU0sT0FBTixDQUFjLE1BQWQsQ0FBeEQ7S0FBWiIsImZpbGUiOiJzaGFkb3cuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL01hdHQvU2l0ZXMvcG9wbW90aW9uIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNvbG9yIGZyb20gJy4vY29sb3InO1xuaW1wb3J0IHsgZGVmYXVsdFByb3BzIGFzIHB4RGVmYXVsdFByb3BzIH0gZnJvbSAnLi9weCc7XG5pbXBvcnQgeyBzaGFkb3cgYXMgc2hhZG93VGVybXMgfSBmcm9tICcuL3NldHRpbmdzL2RpY3Rpb25hcnknO1xuaW1wb3J0IHsgc3BsaXRTcGFjZURlbGltaXRlZCwgY3JlYXRlRGVsaW1pdGVkIH0gZnJvbSAnLi4vaW5jL3V0aWxzJztcblxuY29uc3Qgc2hhZG93V2l0aG91dENvbG9yVGVybXMgPSBzaGFkb3dUZXJtcy5zbGljZSgwLCA0KTtcblxuZXhwb3J0IGRlZmF1bHQge1xuICAgIGRlZmF1bHRQcm9wczoge1xuICAgICAgICAuLi5jb2xvci5kZWZhdWx0UHJvcHMsXG4gICAgICAgIFg6IHB4RGVmYXVsdFByb3BzLFxuICAgICAgICBZOiBweERlZmF1bHRQcm9wcyxcbiAgICAgICAgUmFkaXVzOiBweERlZmF1bHRQcm9wcyxcbiAgICAgICAgU3ByZWFkOiBweERlZmF1bHRQcm9wc1xuICAgIH0sXG5cbiAgICBzcGxpdDogKHZhbHVlKSA9PiB7XG4gICAgICAgIGNvbnN0IGJpdHMgPSBzcGxpdFNwYWNlRGVsaW1pdGVkKHZhbHVlKTtcbiAgICAgICAgbGV0IGhhc1JlYWNoZWRDb2xvciA9IGZhbHNlO1xuICAgICAgICBsZXQgY29sb3JQcm9wID0gJyc7XG4gICAgICAgIGxldCBzcGxpdFZhbHVlID0ge307XG5cbiAgICAgICAgYml0cy5mb3JFYWNoKChiaXQsIGkpID0+IHtcbiAgICAgICAgICAgIC8vIElmIHdlJ3ZlIHJlYWNoZWQgdGhlIGNvbG9yIHByb3BzLCBhcHBlbmQgdG8gY29sb3Igc3RyaW5nXG4gICAgICAgICAgICBpZiAoaGFzUmVhY2hlZENvbG9yIHx8IGNvbG9yLnRlc3QoYml0KSkge1xuICAgICAgICAgICAgICAgIGhhc1JlYWNoZWRDb2xvciA9IHRydWU7XG4gICAgICAgICAgICAgICAgY29sb3JQcm9wICs9IGJpdDtcblxuICAgICAgICAgICAgLy8gRWxzZSBwcm9jZXNzIHNoYWRvdyB2YWx1ZVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBzcGxpdFZhbHVlW3NoYWRvd1Rlcm1zW2ldXSA9IGJpdDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgY29uc3Qgc3BsaXRDb2xvclByb3BzID0gY29sb3Iuc3BsaXQoY29sb3JQcm9wKTtcblxuICAgICAgICByZXR1cm4geyAuLi5zcGxpdFZhbHVlLCBzcGxpdENvbG9yUHJvcHMgfTtcbiAgICB9LFxuXG4gICAgY29tYmluZTogKHZhbHVlcykgPT4gY3JlYXRlRGVsaW1pdGVkKHZhbHVlcywgc2hhZG93V2l0aG91dENvbG9yVGVybXMsICcgJykgKyBjb2xvci5jb21iaW5lKHZhbHVlcylcbn07XG4iXX0=

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports.circularMotion = exports.createMapper = undefined;
	
	var _calc = __webpack_require__(18);
	
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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9pbmMvdHJhbnNmb3JtZXJzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFFTyxJQUFNLHNDQUFlLFVBQUMsSUFBRCxFQUFPLEVBQVAsRUFBYztBQUN0QyxRQUFNLFlBQVksS0FBSyxNQUFMLENBRG9COztBQUd0QyxXQUFPLFVBQUMsS0FBRCxFQUFXO0FBQ2QsYUFBSyxJQUFJLElBQUksQ0FBSixFQUFPLElBQUksU0FBSixFQUFlLEdBQS9CLEVBQW9DO0FBQ2hDLGdCQUFJLFFBQVEsS0FBSyxDQUFMLENBQVIsSUFBbUIsTUFBTSxTQUFOLEVBQWlCO0FBQ3BDLHVCQUFPLGdDQUFxQixvQkFBUyxnQ0FBcUIsS0FBckIsRUFBNEIsS0FBSyxJQUFJLENBQUosQ0FBakMsRUFBeUMsS0FBSyxDQUFMLENBQXpDLENBQVQsRUFBNEQsQ0FBNUQsRUFBK0QsQ0FBL0QsQ0FBckIsRUFBd0YsR0FBRyxJQUFJLENBQUosQ0FBM0YsRUFBbUcsR0FBRyxDQUFILENBQW5HLENBQVAsQ0FEb0M7YUFBeEM7U0FESjtLQURHLENBSCtCO0NBQWQ7O0FBWXJCLElBQU0sMENBQWlCLFVBQUMsQ0FBRCxFQUFJLEdBQUo7UUFBVztXQUNyQyxxQ0FBMEI7QUFDdEIsV0FBRyxPQUFPLE9BQVAsQ0FBZSxPQUFmO0FBQ0gsV0FBRyxPQUFPLE9BQVAsQ0FBZSxPQUFmO0tBRlAsRUFHRyxPQUFPLEtBQVAsQ0FBYSxPQUFiLEVBQXNCLE9BQU8sUUFBUCxDQUFnQixPQUFoQixDQUh6QixDQUdrRCxHQUhsRDtDQUQwQiIsImZpbGUiOiJ0cmFuc2Zvcm1lcnMuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL01hdHQvU2l0ZXMvcG9wbW90aW9uIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZ2V0UHJvZ3Jlc3NGcm9tVmFsdWUsIGdldFZhbHVlRnJvbVByb2dyZXNzLCByZXN0cmljdCwgcG9pbnRGcm9tQW5nbGVBbmREaXN0YW5jZSB9IGZyb20gJy4uL2luYy9jYWxjJztcblxuZXhwb3J0IGNvbnN0IGNyZWF0ZU1hcHBlciA9IChmcm9tLCB0bykgPT4ge1xuICAgIGNvbnN0IG1hcExlbmd0aCA9IGZyb20ubGVuZ3RoO1xuXG4gICAgcmV0dXJuICh2YWx1ZSkgPT4ge1xuICAgICAgICBmb3IgKGxldCBpID0gMTsgaSA8IG1hcExlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAodmFsdWUgPCBmcm9tW2ldIHx8IGkgPT09IG1hcExlbmd0aCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBnZXRWYWx1ZUZyb21Qcm9ncmVzcyhyZXN0cmljdChnZXRQcm9ncmVzc0Zyb21WYWx1ZSh2YWx1ZSwgZnJvbVtpIC0gMV0sIGZyb21baV0pLCAwLCAxKSwgdG9baSAtIDFdLCB0b1tpXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xufTtcblxuZXhwb3J0IGNvbnN0IGNpcmN1bGFyTW90aW9uID0gKHYsIGtleSwgeyB2YWx1ZXMgfSkgPT4gXG4gICAgcG9pbnRGcm9tQW5nbGVBbmREaXN0YW5jZSh7XG4gICAgICAgIHg6IHZhbHVlcy5vcmlnaW5YLmN1cnJlbnQsXG4gICAgICAgIHk6IHZhbHVlcy5vcmlnaW5ZLmN1cnJlbnQgXG4gICAgfSwgdmFsdWVzLmFuZ2xlLmN1cnJlbnQsIHZhbHVlcy5kaXN0YW5jZS5jdXJyZW50KVtrZXldO1xuXG4iXX0=

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	exports.__esModule = true;
	
	var _Process2 = __webpack_require__(8);
	
	var _Process3 = _interopRequireDefault(_Process2);
	
	var _calc = __webpack_require__(18);
	
	var _utils = __webpack_require__(2);
	
	var _bindAdapter = __webpack_require__(47);
	
	var _bindAdapter2 = _interopRequireDefault(_bindAdapter);
	
	var _color = __webpack_require__(22);
	
	var _color2 = _interopRequireDefault(_color);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var DEFAULT_PROP = 'current';
	var NUMERICAL_VALUES = [DEFAULT_PROP, 'from', 'to', 'min', 'max'];
	var NUM_NUMERICAL_VALUES = NUMERICAL_VALUES.length;
	
	var Action = function (_Process) {
	    _inherits(Action, _Process);
	
	    function Action(props) {
	        _classCallCheck(this, Action);
	
	        props.state = {};
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
	
	        _Process.prototype.set.call(this, propsToSet);
	
	        if (on) {
	            // Ducktypish check for Adapter
	            this.on = !on.setter ? (0, _bindAdapter2.default)(on) : on;
	        }
	
	        this.values = this.values || {};
	        this.valueKeys = this.valueKeys || [];
	        this.parentKeys = this.parentKeys || [];
	
	        // Merge new `value` properties with existing
	        var currentValues = this.values;
	        var defaultValue = this.getDefaultValue();
	        var defaultValueProp = this.getDefaultValueProp();
	
	        // Inherit value properties from `props`
	        for (var key in defaultValue) {
	            if (defaultValue.hasOwnProperty(key) && propsToSet.hasOwnProperty(key)) {
	                if (propsToSet[key] !== undefined) {
	                    defaultValue[key] = propsToSet[key];
	                }
	            }
	        }
	
	        // Check all values and split into child values as neccessary
	        for (var key in values) {
	            if (values.hasOwnProperty(key)) {
	                var value = values[key];
	                var existingValue = currentValues[key];
	                var valueType = undefined;
	                var newValue = {};
	
	                // Convert new value into object if it isn't already
	                if ((0, _utils.isObj)(value)) {
	                    newValue = value;
	                } else {
	                    newValue[defaultValueProp] = value;
	                }
	
	                // If value already exists, check for and use existing type
	                if (existingValue) {
	                    newValue = _extends({}, existingValue, newValue);
	                    valueType = this.on && this.on.getValueType ? this.on.getValueType(key) : existingValue.type;
	
	                    // If this is a new value, check for type
	                } else {
	                        if (newValue.from !== undefined) {
	                            newValue.current = newValue.from;
	                        } else if (newValue.current === undefined && this.on) {
	                            newValue.current = this.on.get(key) || 0;
	                        }
	
	                        if (newValue.from === undefined) {
	                            newValue.from = newValue.current;
	                        }
	
	                        newValue = _extends({}, defaultValue, newValue);
	
	                        newValue.prev = newValue.current;
	
	                        // If one is explicitly assigned, use that
	                        if (value.type) {
	                            valueType = value.type;
	
	                            // Or if our Adapter has a typeMap, use that
	                        } else if (this.on && this.on.getValueType) {
	                                valueType = this.on.getValueType(key);
	                            } else if ((0, _utils.isString)(value.current)) {
	                                // Test if this is a color value
	                                if (_color2.default.test(value.current)) {
	                                    valueType = _color2.default;
	
	                                    // Test if this is a complex string
	
	                                    // Treat as a unit value
	                                } else {}
	                            }
	                    }
	
	                // If we've got a valueType then preprocess the value accordingly
	                if (valueType) {
	                    newValue.type = valueType;
	
	                    // If this value should be split, split
	                    if (valueType.split) {
	                        var childValues = {};
	
	                        // Loop over numerical values and split any present
	                        for (var i = 0; i < NUM_NUMERICAL_VALUES; i++) {
	                            var propName = NUMERICAL_VALUES[i];
	
	                            if (newValue.hasOwnProperty(propName)) {
	                                var splitValues = valueType.split(newValue[propName]);
	
	                                for (var splitKey in splitValues) {
	                                    if (splitValues.hasOwnProperty(splitKey)) {
	                                        var splitValue = splitValues[splitKey];
	                                        // Create new child value if doesn't exist
	                                        if (!childValues[splitKey]) {
	                                            childValues[splitKey] = _extends({}, newValue, { parent: key, childKey: splitKey });
	
	                                            if (valueType.defaultProps) {
	                                                childValues[splitKey] = valueType.defaultProps[splitKey] ? _extends({}, childValues[splitKey], valueType.defaultProps[splitKey]) : _extends({}, childValues[splitKey], valueType.defaultProps);
	                                            }
	                                        }
	
	                                        childValues[splitKey][propName] = splitValue;
	                                    }
	                                }
	                            }
	                        }
	
	                        newValue.children = {};
	
	                        // Now loop through all child values and add them as normal values
	                        for (var childKey in childValues) {
	                            if (childValues.hasOwnProperty(childKey)) {
	                                var childValue = childValues[childKey];
	                                var combinedKey = key + childKey;
	
	                                newValue.children[childKey] = childValue.current;
	                                currentValues[combinedKey] = childValue;
	
	                                if (this.valueKeys.indexOf(combinedKey) === -1) {
	                                    this.valueKeys.push(combinedKey);
	                                }
	                            }
	                        }
	
	                        // Save a template for recombination if present
	                        if (valueType.template) {
	                            newValue.template = newValue.template || valueType.template(newValue.current);
	                        }
	
	                        // Or we just have default value props, load those 
	                    } else if (valueType.defaultProps) {
	                            newValue = _extends({}, valueType.defaultProps, newValue);
	                        }
	                }
	
	                // Update appropriate lists with value key
	                if (newValue.children) {
	                    if (this.parentKeys.indexOf(key) === -1) {
	                        this.parentKeys.push(key);
	                    }
	                } else {
	                    if (this.valueKeys.indexOf(key) === -1) {
	                        this.valueKeys.push(key);
	                    }
	                }
	
	                currentValues[key] = newValue;
	            }
	        }
	
	        // Precompute value key and parent key length to prevent per-frame measurement
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
	
	            // Update velocity
	            if (!this.calculatesVelocity) {
	                value.velocity = (0, _calc.speedPerSecond)(value.current - value.prev, elapsed);
	            }
	
	            // If this value has changed
	            if (value.prev !== value.current) {
	                hasChanged = true;
	                value.prev = value.current;
	
	                // Append unit
	                var valueForState = value.unit ? value.current + value.unit : value.current;
	
	                // Add to state if this is not a child vaue
	                if (!value.parent) {
	                    this.state[key] = valueForState;
	                } else {
	                    this.values[value.parent].children[value.childKey] = valueForState;
	                }
	            }
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
	
	        if (this.onFrame) {
	            this.onFrame(this);
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
	            current: 0,
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
	}(_Process3.default);
	
	exports.default = Action;
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hY3Rpb25zL0FjdGlvbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU1BLElBQU0sZUFBZSxTQUFmO0FBQ04sSUFBTSxtQkFBbUIsQ0FBQyxZQUFELEVBQWUsTUFBZixFQUF1QixJQUF2QixFQUE2QixLQUE3QixFQUFvQyxLQUFwQyxDQUFuQjtBQUNOLElBQU0sdUJBQXVCLGlCQUFpQixNQUFqQjs7SUFFUjs7O0FBQ2pCLGFBRGlCLE1BQ2pCLENBQVksS0FBWixFQUFtQjs4QkFERixRQUNFOztBQUNmLGNBQU0sS0FBTixHQUFjLEVBQWQsQ0FEZTtnREFFZixvQkFBTSxLQUFOLEdBRmU7S0FBbkI7Ozs7Ozs7OztBQURpQixxQkFhakIscUJBQWdCO1lBQVosOERBQVEsa0JBQUk7WUFDSixTQUE4QixNQUE5QixPQURJO1lBQ0ksS0FBc0IsTUFBdEIsR0FESjs7WUFDVyxzQ0FBZSx5QkFEMUI7O0FBR1osMkJBQU0sR0FBTixZQUFVLFVBQVYsRUFIWTs7QUFLWixZQUFJLEVBQUosRUFBUTs7QUFFSixpQkFBSyxFQUFMLEdBQVUsQ0FBRSxHQUFHLE1BQUgsR0FBYSwyQkFBWSxFQUFaLENBQWYsR0FBaUMsRUFBakMsQ0FGTjtTQUFSOztBQUtBLGFBQUssTUFBTCxHQUFjLEtBQUssTUFBTCxJQUFlLEVBQWYsQ0FWRjtBQVdaLGFBQUssU0FBTCxHQUFpQixLQUFLLFNBQUwsSUFBa0IsRUFBbEIsQ0FYTDtBQVlaLGFBQUssVUFBTCxHQUFrQixLQUFLLFVBQUwsSUFBbUIsRUFBbkI7OztBQVpOLFlBZU4sZ0JBQWdCLEtBQUssTUFBTCxDQWZWO0FBZ0JaLFlBQU0sZUFBZSxLQUFLLGVBQUwsRUFBZixDQWhCTTtBQWlCWixZQUFNLG1CQUFtQixLQUFLLG1CQUFMLEVBQW5COzs7QUFqQk0sYUFvQlAsSUFBSSxHQUFKLElBQVcsWUFBaEIsRUFBOEI7QUFDMUIsZ0JBQUksYUFBYSxjQUFiLENBQTRCLEdB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O0FBL1JhLHFCQTJTakIsNkNBQWtCO0FBQ2QsZUFBTztBQUNILHFCQUFTLENBQVQ7QUFDQSxzQkFBVSxDQUFWO0FBQ0EsbUJBQU8sS0FBUDtTQUhKLENBRGM7Ozs7Ozs7OztBQTNTRCxxQkF5VGpCLHFEQUFzQjtBQUNsQixlQUFPLFlBQVAsQ0FEa0I7OztXQXpUTCIsImZpbGUiOiJBY3Rpb24uanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL01hdHQvU2l0ZXMvcG9wbW90aW9uIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFByb2Nlc3MgZnJvbSAnLi4vcHJvY2Vzcy9Qcm9jZXNzJztcbmltcG9ydCB7IHNwZWVkUGVyU2Vjb25kIH0gZnJvbSAnLi4vaW5jL2NhbGMnO1xuaW1wb3J0IHsgaXNOdW0sIGlzT2JqLCBpc1N0cmluZyB9IGZyb20gJy4uL2luYy91dGlscyc7XG5pbXBvcnQgYmluZEFkYXB0ZXIgZnJvbSAnLi4vaW5jL2JpbmQtYWRhcHRlcic7XG5pbXBvcnQgY29sb3JUeXBlIGZyb20gJy4uL3ZhbHVlLXR5cGVzL2NvbG9yJztcblxuY29uc3QgREVGQVVMVF9QUk9QID0gJ2N1cnJlbnQnO1xuY29uc3QgTlVNRVJJQ0FMX1ZBTFVFUyA9IFtERUZBVUxUX1BST1AsICdmcm9tJywgJ3RvJywgJ21pbicsICdtYXgnXTtcbmNvbnN0IE5VTV9OVU1FUklDQUxfVkFMVUVTID0gTlVNRVJJQ0FMX1ZBTFVFUy5sZW5ndGg7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFjdGlvbiBleHRlbmRzIFByb2Nlc3Mge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHByb3BzLnN0YXRlID0ge307XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICB9XG5cbiAgICAvKlxuICAgICAgICAjIFNldCBBY3Rpb24gcHJvcGVydGllc1xuICAgICAgICAjIyBTZXQgdXNlci1kZWZpbmVkIEFjdGlvbiBwcm9wZXJ0aWVzXG5cbiAgICAgICAgQHBhcmFtIFtvYmplY3RdXG4gICAgICAgIEByZXR1cm4gW0FjdGlvbl1cbiAgICAqL1xuICAgIHNldChwcm9wcyA9IHt9KSB7XG4gICAgICAgIGNvbnN0IHsgdmFsdWVzLCBvbiwgLi4ucHJvcHNUb1NldCB9ID0gcHJvcHM7XG5cbiAgICAgICAgc3VwZXIuc2V0KHByb3BzVG9TZXQpO1xuXG4gICAgICAgIGlmIChvbikge1xuICAgICAgICAgICAgLy8gRHVja3R5cGlzaCBjaGVjayBmb3IgQWRhcHRlclxuICAgICAgICAgICAgdGhpcy5vbiA9ICghb24uc2V0dGVyKSA/IGJpbmRBZGFwdGVyKG9uKSA6IG9uO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy52YWx1ZXMgPSB0aGlzLnZhbHVlcyB8fCB7fTtcbiAgICAgICAgdGhpcy52YWx1ZUtleXMgPSB0aGlzLnZhbHVlS2V5cyB8fCBbXTtcbiAgICAgICAgdGhpcy5wYXJlbnRLZXlzID0gdGhpcy5wYXJlbnRLZXlzIHx8IFtdO1xuXG4gICAgICAgIC8vIE1lcmdlIG5ldyBgdmFsdWVgIHByb3BlcnRpZXMgd2l0aCBleGlzdGluZ1xuICAgICAgICBjb25zdCBjdXJyZW50VmFsdWVzID0gdGhpcy52YWx1ZXM7XG4gICAgICAgIGNvbnN0IGRlZmF1bHRWYWx1ZSA9IHRoaXMuZ2V0RGVmYXVsdFZhbHVlKCk7XG4gICAgICAgIGNvbnN0IGRlZmF1bHRWYWx1ZVByb3AgPSB0aGlzLmdldERlZmF1bHRWYWx1ZVByb3AoKTtcblxuICAgICAgICAvLyBJbmhlcml0IHZhbHVlIHByb3BlcnRpZXMgZnJvbSBgcHJvcHNgXG4gICAgICAgIGZvciAobGV0IGtleSBpbiBkZWZhdWx0VmFsdWUpIHtcbiAgICAgICAgICAgIGlmIChkZWZhdWx0VmFsdWUuaGFzT3duUHJvcGVydHkoa2V5KSAmJiBwcm9wc1RvU2V0Lmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICAgICAgICBpZiAocHJvcHNUb1NldFtrZXldICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlW2tleV0gPSBwcm9wc1RvU2V0W2tleV07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gQ2hlY2sgYWxsIHZhbHVlcyBhbmQgc3BsaXQgaW50byBjaGlsZCB2YWx1ZXMgYXMgbmVjY2Vzc2FyeVxuICAgICAgICBmb3IgKGxldCBrZXkgaW4gdmFsdWVzKSB7XG4gICAgICAgICAgICBpZiAodmFsdWVzLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICAgICAgICBjb25zdCB2YWx1ZSA9IHZhbHVlc1trZXldO1xuICAgICAgICAgICAgICAgIGNvbnN0IGV4aXN0aW5nVmFsdWUgPSBjdXJyZW50VmFsdWVzW2tleV07XG4gICAgICAgICAgICAgICAgbGV0IHZhbHVlVHlwZTtcbiAgICAgICAgICAgICAgICBsZXQgbmV3VmFsdWUgPSB7fTtcblxuICAgICAgICAgICAgICAgIC8vIENvbnZlcnQgbmV3IHZhbHVlIGludG8gb2JqZWN0IGlmIGl0IGlzbid0IGFscmVhZHlcbiAgICAgICAgICAgICAgICBpZiAoaXNPYmoodmFsdWUpKSB7XG4gICAgICAgICAgICAgICAgICAgIG5ld1ZhbHVlID0gdmFsdWU7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgbmV3VmFsdWVbZGVmYXVsdFZhbHVlUHJvcF0gPSB2YWx1ZTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAvLyBJZiB2YWx1ZSBhbHJlYWR5IGV4aXN0cywgY2hlY2sgZm9yIGFuZCB1c2UgZXhpc3RpbmcgdHlwZVxuICAgICAgICAgICAgICAgIGlmIChleGlzdGluZ1ZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgIG5ld1ZhbHVlID0geyAuLi5leGlzdGluZ1ZhbHVlLCAuLi5uZXdWYWx1ZSB9O1xuICAgICAgICAgICAgICAgICAgICB2YWx1ZVR5cGUgPSAodGhpcy5vbiAmJiB0aGlzLm9uLmdldFZhbHVlVHlwZSkgPyB0aGlzLm9uLmdldFZhbHVlVHlwZShrZXkpIDogZXhpc3RpbmdWYWx1ZS50eXBlO1xuXG4gICAgICAgICAgICAgICAgLy8gSWYgdGhpcyBpcyBhIG5ldyB2YWx1ZSwgY2hlY2sgZm9yIHR5cGVcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBpZiAobmV3VmFsdWUuZnJvbSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBuZXdWYWx1ZS5jdXJyZW50ID0gbmV3VmFsdWUuZnJvbTtcblxuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKG5ld1ZhbHVlLmN1cnJlbnQgPT09IHVuZGVmaW5lZCAmJiB0aGlzLm9uKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBuZXdWYWx1ZS5jdXJyZW50ID0gdGhpcy5vbi5nZXQoa2V5KSB8fCAwO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKG5ld1ZhbHVlLmZyb20gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbmV3VmFsdWUuZnJvbSA9IG5ld1ZhbHVlLmN1cnJlbnQ7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBuZXdWYWx1ZSA9IHsgLi4uZGVmYXVsdFZhbHVlLCAuLi5uZXdWYWx1ZSB9O1xuXG4gICAgICAgICAgICAgICAgICAgIG5ld1ZhbHVlLnByZXYgPSBuZXdWYWx1ZS5jdXJyZW50O1xuXG4gICAgICAgICAgICAgICAgICAgIC8vIElmIG9uZSBpcyBleHBsaWNpdGx5IGFzc2lnbmVkLCB1c2UgdGhhdFxuICAgICAgICAgICAgICAgICAgICBpZiAodmFsdWUudHlwZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWVUeXBlID0gdmFsdWUudHlwZTtcblxuICAgICAgICAgICAgICAgICAgICAvLyBPciBpZiBvdXIgQWRhcHRlciBoYXMgYSB0eXBlTWFwLCB1c2UgdGhhdFxuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMub24gJiYgdGhpcy5vbi5nZXRWYWx1ZVR5cGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlVHlwZSA9IHRoaXMub24uZ2V0VmFsdWVUeXBlKGtleSk7XG5cbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChpc1N0cmluZyh2YWx1ZS5jdXJyZW50KSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gVGVzdCBpZiB0aGlzIGlzIGEgY29sb3IgdmFsdWVcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjb2xvclR5cGUudGVzdCh2YWx1ZS5jdXJyZW50KSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlVHlwZSA9IGNvbG9yVHlwZTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gVGVzdCBpZiB0aGlzIGlzIGEgY29tcGxleCBzdHJpbmdcblxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gVHJlYXQgYXMgYSB1bml0IHZhbHVlXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAvLyBJZiB3ZSd2ZSBnb3QgYSB2YWx1ZVR5cGUgdGhlbiBwcmVwcm9jZXNzIHRoZSB2YWx1ZSBhY2NvcmRpbmdseVxuICAgICAgICAgICAgICAgIGlmICh2YWx1ZVR5cGUpIHtcbiAgICAgICAgICAgICAgICAgICAgbmV3VmFsdWUudHlwZSA9IHZhbHVlVHlwZTtcblxuICAgICAgICAgICAgICAgICAgICAvLyBJZiB0aGlzIHZhbHVlIHNob3VsZCBiZSBzcGxpdCwgc3BsaXRcbiAgICAgICAgICAgICAgICAgICAgaWYgKHZhbHVlVHlwZS5zcGxpdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgY2hpbGRWYWx1ZXMgPSB7fTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gTG9vcCBvdmVyIG51bWVyaWNhbCB2YWx1ZXMgYW5kIHNwbGl0IGFueSBwcmVzZW50XG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IE5VTV9OVU1FUklDQUxfVkFMVUVTOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBwcm9wTmFtZSA9IE5VTUVSSUNBTF9WQUxVRVNbaV07XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAobmV3VmFsdWUuaGFzT3duUHJvcGVydHkocHJvcE5hbWUpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHNwbGl0VmFsdWVzID0gdmFsdWVUeXBlLnNwbGl0KG5ld1ZhbHVlW3Byb3BOYW1lXSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgc3BsaXRLZXkgaW4gc3BsaXRWYWx1ZXMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzcGxpdFZhbHVlcy5oYXNPd25Qcm9wZXJ0eShzcGxpdEtleSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBzcGxpdFZhbHVlID0gc3BsaXRWYWx1ZXNbc3BsaXRLZXldO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIENyZWF0ZSBuZXcgY2hpbGQgdmFsdWUgaWYgZG9lc24ndCBleGlzdFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghY2hpbGRWYWx1ZXNbc3BsaXRLZXldKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoaWxkVmFsdWVzW3NwbGl0S2V5XSA9IHsgLi4ubmV3VmFsdWUsIHBhcmVudDoga2V5LCBjaGlsZEtleTogc3BsaXRLZXkgfTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodmFsdWVUeXBlLmRlZmF1bHRQcm9wcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hpbGRWYWx1ZXNbc3BsaXRLZXldID0gKHZhbHVlVHlwZS5kZWZhdWx0UHJvcHNbc3BsaXRLZXldKSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyAuLi5jaGlsZFZhbHVlc1tzcGxpdEtleV0sIC4uLnZhbHVlVHlwZS5kZWZhdWx0UHJvcHNbc3BsaXRLZXldIH0gOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgLi4uY2hpbGRWYWx1ZXNbc3BsaXRLZXldLCAuLi52YWx1ZVR5cGUuZGVmYXVsdFByb3BzIH07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGlsZFZhbHVlc1tzcGxpdEtleV1bcHJvcE5hbWVdID0gc3BsaXRWYWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgbmV3VmFsdWUuY2hpbGRyZW4gPSB7fTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gTm93IGxvb3AgdGhyb3VnaCBhbGwgY2hpbGQgdmFsdWVzIGFuZCBhZGQgdGhlbSBhcyBub3JtYWwgdmFsdWVzXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBjaGlsZEtleSBpbiBjaGlsZFZhbHVlcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjaGlsZFZhbHVlcy5oYXNPd25Qcm9wZXJ0eShjaGlsZEtleSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgY2hpbGRWYWx1ZSA9IGNoaWxkVmFsdWVzW2NoaWxkS2V5XTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgY29tYmluZWRLZXkgPSBrZXkgKyBjaGlsZEtleTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXdWYWx1ZS5jaGlsZHJlbltjaGlsZEtleV0gPSBjaGlsZFZhbHVlLmN1cnJlbnQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnRWYWx1ZXNbY29tYmluZWRLZXldID0gY2hpbGRWYWx1ZTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy52YWx1ZUtleXMuaW5kZXhPZihjb21iaW5lZEtleSkgPT09IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnZhbHVlS2V5cy5wdXNoKGNvbWJpbmVkS2V5KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gU2F2ZSBhIHRlbXBsYXRlIGZvciByZWNvbWJpbmF0aW9uIGlmIHByZXNlbnRcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh2YWx1ZVR5cGUudGVtcGxhdGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXdWYWx1ZS50ZW1wbGF0ZSA9IG5ld1ZhbHVlLnRlbXBsYXRlIHx8IHZhbHVlVHlwZS50ZW1wbGF0ZShuZXdWYWx1ZS5jdXJyZW50KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAvLyBPciB3ZSBqdXN0IGhhdmUgZGVmYXVsdCB2YWx1ZSBwcm9wcywgbG9hZCB0aG9zZSAgIFxuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHZhbHVlVHlwZS5kZWZhdWx0UHJvcHMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ld1ZhbHVlID0geyAuLi52YWx1ZVR5cGUuZGVmYXVsdFByb3BzLCAuLi5uZXdWYWx1ZSB9O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLy8gVXBkYXRlIGFwcHJvcHJpYXRlIGxpc3RzIHdpdGggdmFsdWUga2V5XG4gICAgICAgICAgICAgICAgaWYgKG5ld1ZhbHVlLmNoaWxkcmVuKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnBhcmVudEtleXMuaW5kZXhPZihrZXkpID09PSAtMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wYXJlbnRLZXlzLnB1c2goa2V5KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnZhbHVlS2V5cy5pbmRleE9mKGtleSkgPT09IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnZhbHVlS2V5cy5wdXNoKGtleSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBjdXJyZW50VmFsdWVzW2tleV0gPSBuZXdWYWx1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFByZWNvbXB1dGUgdmFsdWUga2V5IGFuZCBwYXJlbnQga2V5IGxlbmd0aCB0byBwcmV2ZW50IHBlci1mcmFtZSBtZWFzdXJlbWVudFxuICAgICAgICB0aGlzLm51bVZhbHVlS2V5cyA9IHRoaXMudmFsdWVLZXlzLmxlbmd0aDtcbiAgICAgICAgdGhpcy5udW1QYXJlbnRLZXlzID0gdGhpcy5wYXJlbnRLZXlzLmxlbmd0aDtcblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICAvKlxuICAgICAgICBEZWNpZGUgd2hldGhlciB0aGlzIEFjdGlvbiB3aWxsIHJlbmRlciBvbiBuZXh0IGZyYW1lXG5cbiAgICAgICAgQHBhcmFtIFtBY3Rpb25dXG4gICAgICAgIEBwYXJhbSBbbnVtYmVyXVxuICAgICAgICBAcGFyYW0gW251bWJlcl1cbiAgICAgICAgQHJldHVybiBbYm9vbGVhbl06IFJldHVybiB0cnVlIHRvIHJlbmRlclxuICAgICovXG4gICAgd2lsbFJlbmRlcihhY3Rpb24sIGZyYW1lU3RhbXAsIGVsYXBzZWQpIHtcbiAgICAgICAgbGV0IGhhc0NoYW5nZWQgPSBmYWxzZTtcblxuICAgICAgICAvLyBDaGVjayBpZiBiYXNlIHZhbHVlcyBoYXZlIHVwZGF0ZWQgXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5udW1WYWx1ZUtleXM7IGkrKykge1xuICAgICAgICAgICAgY29uc3Qga2V5ID0gdGhpcy52YWx1ZUtleXNbaV07XG4gICAgICAgICAgICBjb25zdCB2YWx1ZSA9IHRoaXMudmFsdWVzW2tleV07XG5cbiAgICAgICAgICAgIC8vIFJ1biB0cmFuc2Zvcm0gZnVuY3Rpb24gKGlmIHByZXNlbnQpXG4gICAgICAgICAgICBpZiAodmFsdWUudHJhbnNmb3JtKSB7XG4gICAgICAgICAgICAgICAgdmFsdWUuY3VycmVudCA9IHZhbHVlLnRyYW5zZm9ybSh2YWx1ZS5jdXJyZW50LCBrZXksIHRoaXMpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBDYXAgbWluaW11bVxuICAgICAgICAgICAgaWYgKGlzTnVtKHZhbHVlLm1pbikpIHtcbiAgICAgICAgICAgICAgICB2YWx1ZS5jdXJyZW50ID0gTWF0aC5tYXgodmFsdWUuY3VycmVudCwgdmFsdWUubWluKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gQ2FwIG1heGltdW1cbiAgICAgICAgICAgIGlmIChpc051bSh2YWx1ZS5tYXgpKSB7XG4gICAgICAgICAgICAgICAgdmFsdWUuY3VycmVudCA9IE1hdGgubWluKHZhbHVlLmN1cnJlbnQsIHZhbHVlLm1heCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIFJvdW5kIG51bWJlclxuICAgICAgICAgICAgaWYgKHZhbHVlLnJvdW5kKSB7XG4gICAgICAgICAgICAgICAgdmFsdWUuY3VycmVudCA9IE1hdGgucm91bmQodmFsdWUuY3VycmVudCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIFVwZGF0ZSB2ZWxvY2l0eVxuICAgICAgICAgICAgaWYgKCF0aGlzLmNhbGN1bGF0ZXNWZWxvY2l0eSkge1xuICAgICAgICAgICAgICAgIHZhbHVlLnZlbG9jaXR5ID0gc3BlZWRQZXJTZWNvbmQodmFsdWUuY3VycmVudCAtIHZhbHVlLnByZXYsIGVsYXBzZWQpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBJZiB0aGlzIHZhbHVlIGhhcyBjaGFuZ2VkXG4gICAgICAgICAgICBpZiAodmFsdWUucHJldiAhPT0gdmFsdWUuY3VycmVudCkge1xuICAgICAgICAgICAgICAgIGhhc0NoYW5nZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHZhbHVlLnByZXYgPSB2YWx1ZS5jdXJyZW50O1xuXG4gICAgICAgICAgICAgICAgLy8gQXBwZW5kIHVuaXRcbiAgICAgICAgICAgICAgICBjb25zdCB2YWx1ZUZvclN0YXRlID0gKHZhbHVlLnVuaXQpID8gdmFsdWUuY3VycmVudCArIHZhbHVlLnVuaXQgOiB2YWx1ZS5jdXJyZW50O1xuXG4gICAgICAgICAgICAgICAgLy8gQWRkIHRvIHN0YXRlIGlmIHRoaXMgaXMgbm90IGEgY2hpbGQgdmF1ZVxuICAgICAgICAgICAgICAgIGlmICghdmFsdWUucGFyZW50KSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGVba2V5XSA9IHZhbHVlRm9yU3RhdGU7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy52YWx1ZXNbdmFsdWUucGFyZW50XS5jaGlsZHJlblt2YWx1ZS5jaGlsZEtleV0gPSB2YWx1ZUZvclN0YXRlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiAodGhpcy5vbkNsZWFudXApID8gdHJ1ZSA6IGhhc0NoYW5nZWQ7XG4gICAgfVxuXG4gICAgLypcbiAgICAgICAgSWYgd2UgYXJlIHJlbmRlcmluZywgcmVjb21iaW5lIHBhcmVudCB2YWx1ZXMgZmlyc3RcbiAgICAqL1xuICAgIG9uUHJlUmVuZGVyKCkge1xuICAgICAgICAvLyBVcGRhdGUgcGFyZW50IHZhbHVlc1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubnVtUGFyZW50S2V5czsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCBrZXkgPSB0aGlzLnBhcmVudEtleXNbaV07XG4gICAgICAgICAgICBjb25zdCB2YWx1ZSA9IHRoaXMudmFsdWVzW2tleV07XG5cbiAgICAgICAgICAgIHZhbHVlLmN1cnJlbnQgPSB2YWx1ZS50eXBlLmNvbWJpbmUodmFsdWUuY2hpbGRyZW4sIHZhbHVlLnRlbXBsYXRlKTtcblxuICAgICAgICAgICAgaWYgKHRoaXMuc3RhdGVba2V5XSAhPT0gdmFsdWUuY3VycmVudCkge1xuICAgICAgICAgICAgICAgIHRoaXMuc3RhdGVba2V5XSA9IHZhbHVlLmN1cnJlbnQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBvblJlbmRlcih7IHN0YXRlLCBvbiB9KSB7XG4gICAgICAgIGlmIChvbiAmJiBvbi5zZXQpIHtcbiAgICAgICAgICAgIG9uLnNldChzdGF0ZSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5vbkZyYW1lKSB7XG4gICAgICAgICAgICB0aGlzLm9uRnJhbWUodGhpcyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwYXVzZSgpIHtcbiAgICAgICAgc3VwZXIuc3RvcCgpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICByZXN1bWUoKSB7XG4gICAgICAgIHN1cGVyLnN0YXJ0KCk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIHN0YXJ0KCkge1xuICAgICAgICBjb25zdCB2YWx1ZXMgPSB0aGlzLnZhbHVlcztcbiAgICAgICAgc3VwZXIuc3RhcnQoKTtcblxuICAgICAgICBmb3IgKGxldCBrZXkgaW4gdmFsdWVzKSB7XG4gICAgICAgICAgICBpZiAodmFsdWVzLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICAgICAgICB2YWx1ZXNba2V5XS5wcmV2ID0gdmFsdWVzW2tleV0ub3JpZ2luID0gdmFsdWVzW2tleV0uY3VycmVudDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qXG4gICAgICAgICMgR2V0IGRlZmF1bHQgQWN0aW9uIHZhbHVlIHByb3BlcnRpZXNcblxuICAgICAgICBAcmV0dXJuIFtvYmplY3RdXG4gICAgKi9cbiAgICBnZXREZWZhdWx0VmFsdWUoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBjdXJyZW50OiAwLFxuICAgICAgICAgICAgdmVsb2NpdHk6IDAsXG4gICAgICAgICAgICByb3VuZDogZmFsc2VcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICAvKlxuICAgICAgICAjIEdldCBkZWZhdWx0IEFjdGlvbiB2YWx1ZSBwcm9wZXJ0eSBuYW1lXG4gICAgICAgICMjIFNldCB0aGlzIGB2YWx1ZWAgcHJvcGVydHkgd2hlbiBzZXQgYXMgdmFsdWUgaW5zdGVhZCBvZiBvYmplY3RcblxuICAgICAgICBAcmV0dXJuIFtzdHJpbmddXG4gICAgKi9cbiAgICBnZXREZWZhdWx0VmFsdWVQcm9wKCkge1xuICAgICAgICByZXR1cm4gREVGQVVMVF9QUk9QO1xuICAgIH1cbn1cbiJdfQ==

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports.deactivate = exports.getProcessId = undefined;
	exports.activate = activate;
	
	var _timer = __webpack_require__(3);
	
	var _timer2 = _interopRequireDefault(_timer);
	
	var _tick = __webpack_require__(48);
	
	var _tick2 = _interopRequireDefault(_tick);
	
	var _manager = __webpack_require__(49);
	
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
	//# sourceMappingURL=data:application/json;base64,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b3VyY2VzQ29udGVudCI6WyIvKlxuICAgIENvcmUgcmVuZGVyIGxvb3BcblxuICAgIFNvbWUgZGVjaWNpc29ucyBoZXJlIGhhdmUgYmVlbiB0YWtlbiBpbiB0aGUgbmFtZSBvZiBwZXJmb3JtYW5jZS4gQWxsIGhhaWwgcGVyZm9ybWFuY2UuXG4gICAgKEl0IHR1cm5zIG91dCBtaWNyb29wdGltaXNhdGlvbnMgZG8gbWF0dGVyIHdoZW4geW91IGhhdmUgMTZtcylcbiovXG5pbXBvcnQgdGltZXIgZnJvbSAnLi90aW1lcic7XG5pbXBvcnQgdGljayBmcm9tICcuL3RpY2snO1xuaW1wb3J0IG1hbmFnZXIgZnJvbSAnLi9tYW5hZ2VyJztcblxuY29uc3QgcHJvY2Vzc1N0ZXBPcmRlciA9IFtcbiAgICB7IG5hbWU6ICdvbkZyYW1lU3RhcnQnIH0sXG4gICAgeyBuYW1lOiAnb25VcGRhdGUnIH0sXG4gICAgeyBuYW1lOiAnd2lsbFJlbmRlcicsIGRlY2lkZVJlbmRlcjogdHJ1ZSB9LFxuICAgIHsgbmFtZTogJ29uUHJlUmVuZGVyJywgaXNSZW5kZXI6IHRydWUgfSxcbiAgICB7IG5hbWU6ICdvblJlbmRlcicsIGlzUmVuZGVyOiB0cnVlIH0sXG4gICAgeyBuYW1lOiAnb25Qb3N0UmVuZGVyJywgaXNSZW5kZXI6IHRydWUgfSxcbiAgICB7IG5hbWU6ICdvbkZyYW1lRW5kJyB9LFxuICAgIHsgbmFtZTogJ29uQ2xlYW51cCcgfVxuXTtcbmNvbnN0IG51bVByb2Nlc3NTdGVwcyA9IHByb2Nlc3NTdGVwT3JkZXIubGVuZ3RoO1xuXG4vLyBbYm9vbGVhbl06IElzIGxvb3AgcnVubmluZz9cbmxldCBpc1J1bm5pbmcgPSBmYWxzZTtcblxuLypcbiAgICBbdGltZXN0YW1wXTogRnJhbWUgdGltZXN0YW1wXG4gICAgW2ludF06IFRpbWUgc2luY2UgbGFzdCBmcmFtZVxuKi9cbmZ1bmN0aW9uIGZpcmVBbGwoZnJhbWVTdGFtcCwgZWxhcHNlZCkge1xuICAgIGNvbnN0IGFjdGl2ZUlkcyA9IG1hbmFnZXIuZ2V0QWN0aXZlSWRzKCk7XG4gICAgY29uc3QgYWN0aXZlUHJvY2Vzc0NvdW50ID0gYWN0aXZlSWRzLmxlbmd0aDtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbnVtUHJvY2Vzc1N0ZXBzOyBpKyspIHtcbiAgICAgICAgY29uc3Qgc3RlcCA9IHByb2Nlc3NTdGVwT3JkZXJbaV07XG5cbiAgICAgICAgZm9yIChsZXQgaTIgPSAwOyBpMiA8IGFjdGl2ZVByb2Nlc3NDb3VudDsgaTIrKykge1xuICAgICAgICAgICAgY29uc3QgcHJvY2VzcyA9IG1hbmFnZXIuYWN0aXZlUHJvY2Vzc2VzW2FjdGl2ZUlkc1tpMl1dO1xuICAgICAgICAgICAgbGV0IHJlc3VsdCA9IGZhbHNlO1xuXG4gICAgICAgICAgICAvLyBDaGVjayBpZiB0aGlzIHByb2Nlc3MgaGFzIHRoaXMgc3RlcCwgb3IgaWYgaXQncyBhIHJlbmRlciBzdGVwIHRoYXQgd2UncmUgcmVuZGVyaW5nIHRoaXMgZnJhbWVcbiAgICAgICAgICAgIGlmIChwcm9jZXNzICYmIHByb2Nlc3Nbc3RlcC5uYW1lXSAmJiAoIXN0ZXAuaXNSZW5kZXIgfHwgKHN0ZXAuaXNSZW5kZXIgJiYgcHJvY2Vzcy5fcmVuZGVyVGhpc0ZyYW1lID09PSB0cnVlKSkpIHtcbiAgICAgICAgICAgICAgICByZXN1bHQgPSBwcm9jZXNzW3N0ZXAubmFtZV0uY2FsbChwcm9jZXNzLCBwcm9jZXNzLCBmcmFtZVN0YW1wLCBlbGFwc2VkKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gSWYgdGhpcyBpcyBhIGRlY2lkZSByZW5kZXIgc3RlcCBhbmQgaXQgcmV0dXJucyBgZmFsc2VgLCBzZXQgd2lsbFJlbmRlciB0byBmYWxzZVxuICAgICAgICAgICAgaWYgKHN0ZXAuZGVjaWRlUmVuZGVyKSB7XG4gICAgICAgICAgICAgICAgcHJvY2Vzcy5fcmVuZGVyVGhpc0ZyYW1lID0gKHByb2Nlc3Nbc3RlcC5uYW1lXSAmJiByZXN1bHQgIT09IHRydWUpID8gZmFsc2UgOiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG1hbmFnZXIuZ2V0Tm9uQmFja2dyb3VuZFJ1bm5pbmdDb3VudCgpO1xufVxuXG4vLyBGdW5jdGlvbiB0byBmaXJlIGV2ZXJ5IGZyYW1lXG5mdW5jdGlvbiBmcmFtZShmcmFtZVN0YW1wKSB7XG4gICAgdGltZXIudXBkYXRlKGZyYW1lU3RhbXApO1xuICAgIGlzUnVubmluZyA9IGZpcmVBbGwoZnJhbWVTdGFtcCwgdGltZXIuZ2V0RWxhcHNlZCgpKTtcblxuICAgIGlmIChpc1J1bm5pbmcpIHtcbiAgICAgICAgdGljayhmcmFtZSk7XG4gICAgfVxufVxuXG4vLyBTdGFydCBsb29wXG5mdW5jdGlvbiBzdGFydCgpIHtcbiAgICBpZiAoIWlzUnVubmluZykge1xuICAgICAgICB0aW1lci5zdGFydCgpO1xuICAgICAgICBpc1J1bm5pbmcgPSB0cnVlO1xuICAgICAgICB0aWNrKGZyYW1lKTtcbiAgICB9XG59XG5cbi8vIEV4cG9ydHNcbmV4cG9ydCBjb25zdCBnZXRQcm9jZXNzSWQgPSBtYW5hZ2VyLmdldFByb2Nlc3NJZDtcblxuLypcbiAgICBbaW50XTogUHJvY2VzcyBJRCB0byBhY3RpdmF0ZVxuICAgIFtQcm9jZXNzXTogUHJvY2VzcyB0byBhY3RpdmF0ZVxuKi9cbmV4cG9ydCBmdW5jdGlvbiBhY3RpdmF0ZShpZCwgcHJvY2Vzcykge1xuICAgIG1hbmFnZXIuYWN0aXZhdGUoaWQsIHByb2Nlc3MpO1xuXG4gICAgaWYgKCFpc1J1bm5pbmcpIHtcbiAgICAgICAgc3RhcnQoKTtcbiAgICB9XG59XG5cbi8qXG4gICAgW2ludF06IFByb2Nlc3MgSUQgdG8gZGVhY3RpdmF0ZVxuKi9cbmV4cG9ydCBjb25zdCBkZWFjdGl2YXRlID0gbWFuYWdlci5kZWFjdGl2YXRlOyJdfQ==

/***/ },
/* 34 */
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
/* 35 */
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
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	exports.__esModule = true;
	
	var _stateMap = __webpack_require__(37);
	
	var _stateMap2 = _interopRequireDefault(_stateMap);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var STROKE = 'stroke-';
	
	exports.default = _extends({}, _stateMap2.default, {
	    opacity: STROKE + 'opacity',
	    width: STROKE + 'width',
	    miterlimit: STROKE + 'miterlimit'
	});
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hZGFwdGVyL3N2Zy1wYXRoL3N0YXRlLW1hcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFFQSxJQUFNLFNBQVMsU0FBVDs7O0FBSUYsYUFBWSxrQkFBWjtBQUNBLFdBQVUsZ0JBQVY7QUFDQSxnQkFBZSxxQkFBZiIsImZpbGUiOiJzdGF0ZS1tYXAuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL01hdHQvU2l0ZXMvcG9wbW90aW9uIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNzc1N0YXRlTWFwIGZyb20gJy4uL2Nzcy9zdGF0ZS1tYXAnO1xuXG5jb25zdCBTVFJPS0UgPSAnc3Ryb2tlLSc7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgICAuLi5jc3NTdGF0ZU1hcCxcbiAgICBvcGFjaXR5OiBgJHtTVFJPS0V9b3BhY2l0eWAsXG4gICAgd2lkdGg6IGAke1NUUk9LRX13aWR0aGAsXG4gICAgbWl0ZXJsaW1pdDogYCR7U1RST0tFfW1pdGVybGltaXRgXG59OyJdfQ==

/***/ },
/* 37 */
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
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _alpha = __webpack_require__(19);
	
	var _alpha2 = _interopRequireDefault(_alpha);
	
	var _axes = __webpack_require__(21);
	
	var _axes2 = _interopRequireDefault(_axes);
	
	var _color = __webpack_require__(22);
	
	var _color2 = _interopRequireDefault(_color);
	
	var _complex = __webpack_require__(23);
	
	var _complex2 = _interopRequireDefault(_complex);
	
	var _scale = __webpack_require__(29);
	
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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hZGFwdGVyL3N2Zy92YWx1ZS10eXBlLW1hcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztrQkFNZTtBQUNYLHlCQURXO0FBRVgsMkJBRlc7QUFHWCwwQkFIVztBQUlYLDJCQUpXO0FBS1gsMkJBTFc7QUFNWCxtQ0FOVztBQU9YLHdCQVBXO0FBUVgsNEJBUlc7QUFTWCxnQ0FUVztBQVVYLGtDQVZXIiwiZmlsZSI6InZhbHVlLXR5cGUtbWFwLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9NYXR0L1NpdGVzL3BvcG1vdGlvbiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBhbHBoYSBmcm9tICcuLi8uLi92YWx1ZS10eXBlcy9hbHBoYSc7XG5pbXBvcnQgYXhlcyBmcm9tICcuLi8uLi92YWx1ZS10eXBlcy9heGVzJztcbmltcG9ydCBjb2xvciBmcm9tICcuLi8uLi92YWx1ZS10eXBlcy9jb2xvcic7XG5pbXBvcnQgY29tcGxleCBmcm9tICcuLi8uLi92YWx1ZS10eXBlcy9jb21wbGV4JztcbmltcG9ydCBzY2FsZSBmcm9tICcuLi8uLi92YWx1ZS10eXBlcy9zY2FsZSc7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBmaWxsOiBjb2xvcixcbiAgICBzdHJva2U6IGNvbG9yLFxuICAgIHNjYWxlOiBzY2FsZSxcbiAgICBzY2FsZVg6IHNjYWxlLFxuICAgIHNjYWxlWTogc2NhbGUsXG4gICAgdHJhbnNmb3JtT3JpZ2luOiBheGVzLFxuICAgIGQ6IGNvbXBsZXgsXG4gICAgb3BhY2l0eTogYWxwaGEsXG4gICAgZmlsbE9wYWNpdHk6IGFscGhhLFxuICAgIHN0cm9rZU9wYWNpdHk6IGFscGhhXG59OyJdfQ==

/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports.default = build;
	
	var _utils = __webpack_require__(2);
	
	var _transformProps = __webpack_require__(50);
	
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
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _angle = __webpack_require__(20);
	
	var _angle2 = _interopRequireDefault(_angle);
	
	var _alpha = __webpack_require__(19);
	
	var _alpha2 = _interopRequireDefault(_alpha);
	
	var _axes = __webpack_require__(21);
	
	var _axes2 = _interopRequireDefault(_axes);
	
	var _color = __webpack_require__(22);
	
	var _color2 = _interopRequireDefault(_color);
	
	var _scale = __webpack_require__(29);
	
	var _scale2 = _interopRequireDefault(_scale);
	
	var _shadow = __webpack_require__(30);
	
	var _shadow2 = _interopRequireDefault(_shadow);
	
	var _positions = __webpack_require__(26);
	
	var _positions2 = _interopRequireDefault(_positions);
	
	var _px = __webpack_require__(27);
	
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
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _transformProps = __webpack_require__(50);
	
	var _transformProps2 = _interopRequireDefault(_transformProps);
	
	var _prefixer = __webpack_require__(42);
	
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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hZGFwdGVyL2Nzcy9idWlsZC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBSUEsSUFBTSxjQUFjLFlBQWQ7O2tCQUVTLFVBQUMsS0FBRCxFQUFRLDJCQUFSLEVBQXdDO0FBQ25ELFFBQUksaUJBQWlCLEVBQWpCLENBRCtDO0FBRW5ELFFBQUksa0JBQWtCLEVBQWxCLENBRitDO0FBR25ELFFBQUksZ0JBQWdCLEtBQWhCLENBSCtDOztBQUtuRCxTQUFLLElBQUksR0FBSixJQUFXLEtBQWhCLEVBQXVCO0FBQ25CLFlBQUksTUFBTSxjQUFOLENBQXFCLEdBQXJCLENBQUosRUFBK0I7QUFDM0IsZ0JBQU0sUUFBUSxNQUFNLEdBQU4sQ0FBUixDQURxQjs7QUFHM0IsZ0JBQUkseUJBQWUsR0FBZixDQUFKLEVBQXlCO0FBQ3JCLG1DQUFtQixNQUFNLEdBQU4sR0FBWSxLQUFaLEdBQW9CLElBQXBCLENBREU7QUFFckIsZ0NBQWdCLEdBQUMsS0FBUSxXQUFSLEdBQXVCLElBQXhCLEdBQStCLGFBQS9CLENBRks7YUFBekIsTUFJTztBQUNILGtDQUFrQixNQUFNLHdCQUFTLHdCQUFZLEdBQVosQ0FBVCxDQUFOLEdBQW1DLEdBQW5DLEdBQXlDLEtBQXpDLENBRGY7YUFKUDtTQUhKO0tBREo7O0FBY0EsUUFBSSxvQkFBb0IsRUFBcEIsRUFBd0I7QUFDeEIsWUFBSSxDQUFDLGFBQUQsSUFBa0IsQ0FBQywyQkFBRCxFQUE4QjtBQUNoRCwrQkFBbUIsY0FBYyxPQUFkLENBRDZCO1NBQXBEOztBQUlBLDBCQUFrQixNQUFNLHdCQUFTLFdBQVQsQ0FBTixHQUE4QixHQUE5QixHQUFvQyxlQUFwQyxDQUxNO0tBQTVCOztBQVFBLFdBQU8sY0FBUCxDQTNCbUQ7Q0FBeEMiLCJmaWxlIjoiYnVpbGQuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL01hdHQvU2l0ZXMvcG9wbW90aW9uIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHRyYW5zZm9ybVByb3BzIGZyb20gJy4vdHJhbnNmb3JtLXByb3BzJztcbmltcG9ydCBwcmVmaXhlciBmcm9tICcuL3ByZWZpeGVyJztcbmltcG9ydCB7IGNhbWVsVG9EYXNoIH0gZnJvbSAnLi4vLi4vaW5jL3V0aWxzJztcblxuY29uc3QgVFJBTlNMQVRFX1ogPSAndHJhbnNsYXRlWic7XG5cbmV4cG9ydCBkZWZhdWx0IChzdGF0ZSwgZGlzYWJsZUhhcmR3YXJlQWNjZWxlcmF0aW9uKSA9PiB7XG4gICAgbGV0IHByb3BlcnR5U3RyaW5nID0gJyc7XG4gICAgbGV0IHRyYW5zZm9ybVN0cmluZyA9ICcnO1xuICAgIGxldCB0cmFuc2Zvcm1IYXNaID0gZmFsc2U7XG5cbiAgICBmb3IgKGxldCBrZXkgaW4gc3RhdGUpIHtcbiAgICAgICAgaWYgKHN0YXRlLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICAgIGNvbnN0IHZhbHVlID0gc3RhdGVba2V5XTtcblxuICAgICAgICAgICAgaWYgKHRyYW5zZm9ybVByb3BzW2tleV0pIHtcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm1TdHJpbmcgKz0ga2V5ICsgJygnICsgdmFsdWUgKyAnKSAnO1xuICAgICAgICAgICAgICAgIHRyYW5zZm9ybUhhc1ogPSAoa2V5ID09PSBUUkFOU0xBVEVfWikgPyB0cnVlIDogdHJhbnNmb3JtSGFzWjtcblxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBwcm9wZXJ0eVN0cmluZyArPSAnOycgKyBwcmVmaXhlcihjYW1lbFRvRGFzaChrZXkpKSArICc6JyArIHZhbHVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHRyYW5zZm9ybVN0cmluZyAhPT0gJycpIHtcbiAgICAgICAgaWYgKCF0cmFuc2Zvcm1IYXNaICYmICFkaXNhYmxlSGFyZHdhcmVBY2NlbGVyYXRpb24pIHtcbiAgICAgICAgICAgIHRyYW5zZm9ybVN0cmluZyArPSBUUkFOU0xBVEVfWiArICcoMHB4KSc7XG4gICAgICAgIH1cblxuICAgICAgICBwcm9wZXJ0eVN0cmluZyArPSAnOycgKyBwcmVmaXhlcigndHJhbnNmb3JtJykgKyAnOicgKyB0cmFuc2Zvcm1TdHJpbmc7XG4gICAgfVxuXG4gICAgcmV0dXJuIHByb3BlcnR5U3RyaW5nO1xufTsiXX0=

/***/ },
/* 42 */
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
/* 43 */
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
/* 44 */
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
/* 45 */
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
/* 46 */
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
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _cssAdapter = __webpack_require__(14);
	
	var _cssAdapter2 = _interopRequireDefault(_cssAdapter);
	
	var _svgAdapter = __webpack_require__(15);
	
	var _svgAdapter2 = _interopRequireDefault(_svgAdapter);
	
	var _svgPathAdapter = __webpack_require__(16);
	
	var _svgPathAdapter2 = _interopRequireDefault(_svgPathAdapter);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var SAVE_PROP = '__pm_adapter';
	
	exports.default = function (element) {
	    // Return bound adapter if present
	    if (element[SAVE_PROP]) {
	        return element[SAVE_PROP];
	
	        // Or detect and bind adapter
	    } else {
	            var adapter = undefined;
	
	            // If HTMLElement load CSS
	            if (element instanceof HTMLElement || element.tagName === 'svg') {
	                adapter = _cssAdapter2.default;
	
	                // Or SVG
	            } else if (element instanceof SVGElement) {
	                    if (element.tagName === 'path') {
	                        adapter = _svgPathAdapter2.default;
	                    } else {
	                        adapter = _svgAdapter2.default;
	                    }
	                }
	
	            // Bind adapter to element
	            Object.defineProperty(element, SAVE_PROP, {
	                enumerable: false,
	                value: adapter
	            });
	
	            return adapter(element);
	        }
	};
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9pbmMvYmluZC1hZGFwdGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUlBLElBQU0sWUFBWSxjQUFaOztrQkFFUyxVQUFDLE9BQUQsRUFBYTs7QUFFeEIsUUFBSSxRQUFRLFNBQVIsQ0FBSixFQUF3QjtBQUNwQixlQUFPLFFBQVEsU0FBUixDQUFQOzs7QUFEb0IsS0FBeEIsTUFJTztBQUNILGdCQUFJLG1CQUFKOzs7QUFERyxnQkFJQyxtQkFBbUIsV0FBbkIsSUFBa0MsUUFBUSxPQUFSLEtBQW9CLEtBQXBCLEVBQTJCO0FBQzdEOzs7QUFENkQsYUFBakUsTUFJTyxJQUFJLG1CQUFtQixVQUFuQixFQUErQjtBQUN0Qyx3QkFBSSxRQUFRLE9BQVIsS0FBb0IsTUFBcEIsRUFBNEI7QUFDNUIsMkRBRDRCO3FCQUFoQyxNQUVPO0FBQ0gsdURBREc7cUJBRlA7aUJBREc7OztBQVJKLGtCQWlCSCxDQUFPLGNBQVAsQ0FBc0IsT0FBdEIsRUFBK0IsU0FBL0IsRUFBMEM7QUFDdEMsNEJBQVksS0FBWjtBQUNBLHVCQUFPLE9BQVA7YUFGSixFQWpCRzs7QUFzQkgsbUJBQU8sUUFBUSxPQUFSLENBQVAsQ0F0Qkc7U0FKUDtDQUZXIiwiZmlsZSI6ImJpbmQtYWRhcHRlci5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvTWF0dC9TaXRlcy9wb3Btb3Rpb24iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY3NzQWRhcHRlciBmcm9tICcuLi9hZGFwdGVyL2Nzcy1hZGFwdGVyJztcbmltcG9ydCBzdmdBZGFwdGVyIGZyb20gJy4uL2FkYXB0ZXIvc3ZnLWFkYXB0ZXInO1xuaW1wb3J0IHN2Z1BhdGhBZGFwdGVyIGZyb20gJy4uL2FkYXB0ZXIvc3ZnLXBhdGgtYWRhcHRlcic7XG5cbmNvbnN0IFNBVkVfUFJPUCA9ICdfX3BtX2FkYXB0ZXInO1xuXG5leHBvcnQgZGVmYXVsdCAoZWxlbWVudCkgPT4ge1xuICAgIC8vIFJldHVybiBib3VuZCBhZGFwdGVyIGlmIHByZXNlbnRcbiAgICBpZiAoZWxlbWVudFtTQVZFX1BST1BdKSB7XG4gICAgICAgIHJldHVybiBlbGVtZW50W1NBVkVfUFJPUF07XG5cbiAgICAvLyBPciBkZXRlY3QgYW5kIGJpbmQgYWRhcHRlclxuICAgIH0gZWxzZSB7XG4gICAgICAgIGxldCBhZGFwdGVyO1xuXG4gICAgICAgIC8vIElmIEhUTUxFbGVtZW50IGxvYWQgQ1NTXG4gICAgICAgIGlmIChlbGVtZW50IGluc3RhbmNlb2YgSFRNTEVsZW1lbnQgfHwgZWxlbWVudC50YWdOYW1lID09PSAnc3ZnJykge1xuICAgICAgICAgICAgYWRhcHRlciA9IGNzc0FkYXB0ZXI7XG5cbiAgICAgICAgLy8gT3IgU1ZHXG4gICAgICAgIH0gZWxzZSBpZiAoZWxlbWVudCBpbnN0YW5jZW9mIFNWR0VsZW1lbnQpIHtcbiAgICAgICAgICAgIGlmIChlbGVtZW50LnRhZ05hbWUgPT09ICdwYXRoJykge1xuICAgICAgICAgICAgICAgIGFkYXB0ZXIgPSBzdmdQYXRoQWRhcHRlcjtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgYWRhcHRlciA9IHN2Z0FkYXB0ZXI7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyBCaW5kIGFkYXB0ZXIgdG8gZWxlbWVudFxuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZWxlbWVudCwgU0FWRV9QUk9QLCB7XG4gICAgICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgICAgICAgIHZhbHVlOiBhZGFwdGVyXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiBhZGFwdGVyKGVsZW1lbnQpO1xuICAgIH1cbn07XG4iXX0=

/***/ },
/* 48 */
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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9wcm9jZXNzL3RpY2suanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUlBLElBQU0sU0FBUyxPQUFRLE1BQVAsS0FBa0IsV0FBbEIsSUFBaUMsT0FBTyxxQkFBUCxHQUFnQyxJQUFsRSxHQUF5RSxLQUF6RTs7QUFFZixJQUFJLGdCQUFKOztBQUVBLElBQUksTUFBSixFQUFZO0FBQ1IsV0FBTyxVQUFDLFFBQUQ7ZUFBYyxPQUFPLHFCQUFQLENBQTZCLFFBQTdCO0tBQWQsQ0FEQztDQUFaLE1BR087Ozs7Ozs7Ozs7Ozs7OztBQWVILFlBQUksV0FBVyxDQUFYOztBQUVKLGVBQU8sVUFBQyxRQUFELEVBQWM7QUFDakIsZ0JBQU0sY0FBYyxJQUFJLElBQUosR0FBVyxPQUFYLEVBQWQsQ0FEVztBQUVqQixnQkFBTSxhQUFhLEtBQUssR0FBTCxDQUFTLENBQVQsRUFBWSxNQUFNLGNBQWMsUUFBZCxDQUFOLENBQXpCLENBRlc7O0FBSWpCLHVCQUFXLGNBQWMsVUFBZCxDQUpNOztBQU1qQix1QkFBVzt1QkFBTSxTQUFTLFFBQVQ7YUFBTixFQUEwQixVQUFyQyxFQU5pQjtTQUFkO1NBakJKO0NBSFA7O2tCQThCZSIsImZpbGUiOiJ0aWNrLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9NYXR0L1NpdGVzL3BvcG1vdGlvbiIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gICAgRGV0ZWN0IGFuZCBsb2FkIGFuIGFwcHJvcHJpYXRlIGNsb2NrIHNldHRpbmcgZm9yIHRoZSBlbnZpcm9ubWVudFxuKi9cblxuY29uc3QgaGFzUkFGID0gKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUpID8gdHJ1ZSA6IGZhbHNlO1xuXG5sZXQgdGljaztcblxuaWYgKGhhc1JBRikge1xuICAgIHRpY2sgPSAoY2FsbGJhY2spID0+IHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoY2FsbGJhY2spO1xuXG59IGVsc2Uge1xuICAgIC8qXG4gICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSBwb2x5ZmlsbFxuICAgICAgICBcbiAgICAgICAgRm9yIElFOC85IEZsaW5zdG9uZXMgYW5kIG5vbi1icm93c2VyIGVudmlyb25tZW50c1xuXG4gICAgICAgIFRha2VuIGZyb20gUGF1bCBJcmlzaC4gV2UndmUgc3RyaXBwZWQgb3V0IGNhbmNlbEFuaW1hdGlvbkZyYW1lIGNoZWNrcyBiZWNhdXNlIHdlIGRvbid0IGZveCB3aXRoIHRoYXRcbiAgICAgICAgXG4gICAgICAgIGh0dHA6Ly9wYXVsaXJpc2guY29tLzIwMTEvcmVxdWVzdGFuaW1hdGlvbmZyYW1lLWZvci1zbWFydC1hbmltYXRpbmcvXG4gICAgICAgIGh0dHA6Ly9teS5vcGVyYS5jb20vZW1vbGxlci9ibG9nLzIwMTEvMTIvMjAvcmVxdWVzdGFuaW1hdGlvbmZyYW1lLWZvci1zbWFydC1lci1hbmltYXRpbmdcbiAgICAgICAgIFxuICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUgcG9seWZpbGwgYnkgRXJpayBNw7ZsbGVyLiBmaXhlcyBmcm9tIFBhdWwgSXJpc2ggYW5kIFRpbm8gWmlqZGVsXG4gICAgICAgICBcbiAgICAgICAgTUlUIGxpY2Vuc2VcbiAgICAqL1xuICAgIGxldCBsYXN0VGltZSA9IDA7XG5cbiAgICB0aWNrID0gKGNhbGxiYWNrKSA9PiB7XG4gICAgICAgIGNvbnN0IGN1cnJlbnRUaW1lID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XG4gICAgICAgIGNvbnN0IHRpbWVUb0NhbGwgPSBNYXRoLm1heCgwLCAxNiAtIChjdXJyZW50VGltZSAtIGxhc3RUaW1lKSk7XG5cbiAgICAgICAgbGFzdFRpbWUgPSBjdXJyZW50VGltZSArIHRpbWVUb0NhbGw7XG5cbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiBjYWxsYmFjayhsYXN0VGltZSksIHRpbWVUb0NhbGwpO1xuICAgIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IHRpY2s7Il19

/***/ },
/* 49 */
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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9wcm9jZXNzL21hbmFnZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUNBLElBQUksbUJBQW1CLENBQW5COzs7QUFHSixJQUFJLG9CQUFvQixDQUFwQjs7O0FBR0osSUFBSSw0QkFBNEIsQ0FBNUI7OztBQUdKLElBQU0sYUFBYSxFQUFiOzs7QUFHTixJQUFNLGtCQUFrQixFQUFsQjs7O0FBR04sSUFBTSxnQkFBZ0IsRUFBaEI7OztBQUdOLElBQU0sa0JBQWtCLEVBQWxCOzs7Ozs7Ozs7QUFTTixJQUFNLGVBQWUsVUFBQyxFQUFELEVBQUssTUFBTCxFQUFhLE9BQWIsRUFBeUI7QUFDMUMsUUFBTSxhQUFhLE9BQU8sT0FBUCxDQUFlLEVBQWYsQ0FBYixDQURvQztBQUUxQyxRQUFNLGNBQWMsUUFBUSxPQUFSLENBQWdCLEVBQWhCLENBQWQsQ0FGb0M7O0FBSTFDLFFBQUksZUFBZSxDQUFDLENBQUQsRUFBSTtBQUNuQixlQUFPLElBQVAsQ0FBWSxFQUFaLEVBRG1CO0tBQXZCOztBQUlBLFFBQUksY0FBYyxDQUFDLENBQUQsRUFBSTtBQUNsQixnQkFBUSxNQUFSLENBQWUsV0FBZixFQUE0QixDQUE1QixFQURrQjtLQUF0QjtDQVJpQjs7Ozs7Ozs7QUFtQnJCLElBQU0scUJBQXFCLFVBQUMsR0FBRCxFQUFNLE1BQU4sRUFBaUI7QUFDeEMsUUFBTSxTQUFTLE1BQU0sQ0FBTixHQUFVLENBQUMsQ0FBRCxDQURlOztBQUd4Qyx5QkFBcUIsTUFBckIsQ0FId0M7O0FBS3hDLFFBQUksQ0FBQyxNQUFELEVBQVM7QUFDVCxxQ0FBNkIsTUFBN0IsQ0FEUztLQUFiO0NBTHVCOztrQkFVWjtBQUNYLG9DQURXOzs7QUFJWCxjQUFVLFVBQUMsRUFBRCxFQUFLLE9BQUwsRUFBaUI7QUFDdkIsd0JBQWdCLEVBQWhCLElBQXNCLE9BQXRCLENBRHVCO0FBRXZCLGdCQUFRLFFBQVIsR0FBbUIsSUFBbkIsQ0FGdUI7QUFHdkIscUJBQWEsRUFBYixFQUFpQixhQUFqQixFQUFnQyxlQUFoQyxFQUh1QjtLQUFqQjs7O0FBT1YsZ0JBQVksVUFBQyxFQUFELEVBQVE7QUFDaEIsZ0JBQVEsUUFBUixHQUFtQixLQUFuQixDQURnQjtBQUVoQixxQkFBYSxFQUFiLEVBQWlCLGVBQWpCLEVBQWtDLGFBQWxDLEVBRmdCO0tBQVI7OztBQU1aLGtDQUE4QjtlQUFNO0tBQU47OztBQUc5QixrQkFBYztlQUFNO0tBQU47OztBQUdkLGtCQUFjLFlBQU07Ozs7QUFJaEIsWUFBTSx3QkFBd0IsZ0JBQWdCLE1BQWhCLENBSmQ7O0FBTWhCLGFBQUssSUFBSSxJQUFJLENBQUosRUFBTyxJQUFJLHFCQUFKLEVBQTJCLEdBQTNDLEVBQWdEO0FBQzVDLGdCQUFNLEtBQUssZ0JBQWdCLENBQWhCLENBQUwsQ0FEc0M7QUFFNUMsZ0JBQU0sZ0JBQWdCLFdBQVcsT0FBWCxDQUFtQixFQUFuQixDQUFoQixDQUZzQztBQUc1QyxnQkFBTSxXQUFVLGdCQUFnQixFQUFoQixDQUFWOzs7QUFIc0MsZ0JBTXhDLGdCQUFnQixDQUFDLENBQUQsRUFBSTtBQUNwQiwyQkFBVyxNQUFYLENBQWtCLGFBQWxCLEVBQWlDLENBQWpDLEVBRG9CO0FBRXBCLG1DQUFtQixLQUFuQixFQUEwQixTQUFRLE1BQVIsQ0FBMUIsQ0FGb0I7QUFHcEIsdUJBQU8sZ0JBQWdCLEVBQWhCLENBQVAsQ0FIb0I7O0FBS3BCLG9CQUFJLFNBQVEsWUFBUixFQUFzQjtBQUN0Qiw2QkFBUSxZQUFSLENBQXFCLFFBQXJCLEVBRHNCO2lCQUExQjthQUxKO1NBTko7Ozs7OztBQU5nQix1QkEyQmhCLENBQWdCLE1BQWhCLENBQXVCLENBQXZCLEVBQTBCLHFCQUExQjs7Ozs7QUEzQmdCLFlBZ0NWLHNCQUFzQixjQUFjLE1BQWQsQ0FoQ1o7O0FBa0NoQixhQUFLLElBQUksSUFBSSxDQUFKLEVBQU8sSUFBSSxtQkFBSixFQUF5QixHQUF6QyxFQUE4QztBQUMxQyxnQkFBTSxLQUFLLGNBQWMsQ0FBZCxDQUFMLENBRG9DO0FBRTFDLGdCQUFNLGdCQUFnQixXQUFXLE9BQVgsQ0FBbUIsRUFBbkIsQ0FBaEIsQ0FGb0M7QUFHMUMsZ0JBQU0sWUFBVSxnQkFBZ0IsRUFBaEIsQ0FBVjs7O0FBSG9DLGdCQU10QyxrQkFBa0IsQ0FBQyxDQUFELElBQU0sU0FBeEIsRUFBaUM7QUFDakMsb0JBQUksVUFBUSxVQUFSLEVBQW9CO0FBQ3BCLCtCQUFXLE9BQVgsQ0FBbUIsRUFBbkIsRUFEb0I7aUJBQXhCLE1BRU87QUFDSCwrQkFBVyxJQUFYLENBQWdCLEVBQWhCLEVBREc7aUJBRlA7O0FBTUEsbUNBQW1CLElBQW5CLEVBQXlCLFVBQVEsTUFBUixDQUF6QixDQVBpQzs7QUFTakMsb0JBQUksVUFBUSxVQUFSLEVBQW9CO0FBQ3BCLDhCQUFRLFVBQVIsQ0FBbUIsU0FBbkIsRUFEb0I7aUJBQXhCO2FBVEo7U0FOSjs7QUFxQkEsc0JBQWMsTUFBZCxDQUFxQixDQUFyQixFQUF3QixtQkFBeEIsRUF2RGdCOztBQXlEaEIsZUFBTyxVQUFQLENBekRnQjtLQUFOIiwiZmlsZSI6Im1hbmFnZXIuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL01hdHQvU2l0ZXMvcG9wbW90aW9uIiwic291cmNlc0NvbnRlbnQiOlsiLy8gW2ludF06IEluY3JlbWVudGVkIGZvciBlYWNoIG5ldyBydW5uaW5nIHByb2Nlc3NcbmxldCBjdXJyZW50UHJvY2Vzc0lkID0gMDtcblxuLy8gW2ludF06IE51bWJlciBvZiBhbGwgcnVubmluZyBwcm9jZXNzZXNcbmxldCB0b3RhbFJ1bm5pbmdDb3VudCA9IDA7XG5cbi8vIFtpbnRdOiBOdW1iZXIgb2YgcnVubmluZyBwcm9jZXNzZXMgZXhjbHVkaW5nIGJhY2tncm91bmQgcHJvY2Vzc2VzXG5sZXQgbm9uQmFja2dyb3VuZFJ1bm5pbmdDb3VudCA9IDA7XG5cbi8vIFthcnJheV06IEFycmF5IG9mIHJ1bm5pbmcgcHJvY2VzcyBJRHNcbmNvbnN0IHJ1bm5pbmdJZHMgPSBbXTtcblxuLy8gW29iamVjdF06IE1hcCBvZiBydW5uaW5nIHByb2Nlc3Nlc1xuY29uc3QgYWN0aXZlUHJvY2Vzc2VzID0ge307XG5cbi8vIFthcnJheV06IEFycmF5IG9mIHByb2Nlc3MgSURzIHF1ZXVlZCBmb3IgYWN0aXZhdGlvblxuY29uc3QgYWN0aXZhdGVRdWV1ZSA9IFtdO1xuXG4vLyBbYXJyYXldOiBBcnJheSBvZiBwcm9jZXNzIElEcyBxdWV1ZWQgZm9yIGRlYWN0aXZhdGlvblxuY29uc3QgZGVhY3RpdmF0ZVF1ZXVlID0gW107XG5cbi8qXG4gICAgVXBkYXRlIGFjdGl2YXRlL2RlYWN0aXZhdGUgcXVldWVzXG5cbiAgICBAcGFyYW0gW251bWJlcl1cbiAgICBAcGFyYW0gW2FycmF5XVxuICAgIEBwYXJhbSBbYXJyYXldXG4qL1xuY29uc3QgdXBkYXRlUXVldWVzID0gKGlkLCBpbkxpc3QsIG91dExpc3QpID0+IHtcbiAgICBjb25zdCBpblBvc2l0aW9uID0gaW5MaXN0LmluZGV4T2YoaWQpO1xuICAgIGNvbnN0IG91dFBvc2l0aW9uID0gb3V0TGlzdC5pbmRleE9mKGlkKTtcblxuICAgIGlmIChpblBvc2l0aW9uID09PSAtMSkge1xuICAgICAgICBpbkxpc3QucHVzaChpZCk7XG4gICAgfVxuXG4gICAgaWYgKG91dFBvc2l0aW9uID4gLTEpIHtcbiAgICAgICAgb3V0TGlzdC5zcGxpY2Uob3V0UG9zaXRpb24sIDEpO1xuICAgIH1cbn07XG5cbi8qXG4gICAgVXBkYXRlIHJ1bm5pbmdcblxuICAgIFtib29sZWFuXTogYHRydWVgIHRvIGFkZFxuICAgIFtib29sZWFuXTogYHRydWVgIGlmIGxhenlcbiovXG5jb25zdCB1cGRhdGVSdW5uaW5nQ291bnQgPSAoYWRkLCBpc0xhenkpID0+IHtcbiAgICBjb25zdCBtb2RpZnkgPSBhZGQgPyAxIDogLTE7XG5cbiAgICB0b3RhbFJ1bm5pbmdDb3VudCArPSBtb2RpZnk7XG5cbiAgICBpZiAoIWlzTGF6eSkge1xuICAgICAgICBub25CYWNrZ3JvdW5kUnVubmluZ0NvdW50ICs9IG1vZGlmeTtcbiAgICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgYWN0aXZlUHJvY2Vzc2VzLFxuXG4gICAgLy8gQWN0aXZhdGUgYSBwcm9jZXNzXG4gICAgYWN0aXZhdGU6IChpZCwgcHJvY2VzcykgPT4ge1xuICAgICAgICBhY3RpdmVQcm9jZXNzZXNbaWRdID0gcHJvY2VzcztcbiAgICAgICAgcHJvY2Vzcy5pc0FjdGl2ZSA9IHRydWU7XG4gICAgICAgIHVwZGF0ZVF1ZXVlcyhpZCwgYWN0aXZhdGVRdWV1ZSwgZGVhY3RpdmF0ZVF1ZXVlKTtcbiAgICB9LFxuXG4gICAgLy8gRGVhY3RpdmF0ZSBhIHByb2Nlc3NcbiAgICBkZWFjdGl2YXRlOiAoaWQpID0+IHtcbiAgICAgICAgcHJvY2Vzcy5pc0FjdGl2ZSA9IGZhbHNlO1xuICAgICAgICB1cGRhdGVRdWV1ZXMoaWQsIGRlYWN0aXZhdGVRdWV1ZSwgYWN0aXZhdGVRdWV1ZSk7XG4gICAgfSxcblxuICAgIC8vIE51bWJlciBiYWNrZ3JvdW5kIHByb2Nlc3Nlc1xuICAgIGdldE5vbkJhY2tncm91bmRSdW5uaW5nQ291bnQ6ICgpID0+IG5vbkJhY2tncm91bmRSdW5uaW5nQ291bnQsXG5cbiAgICAvLyBJbmNyZW1lbnQgY3VycmVudCBwcm9jZXNzIElEIGFuZCByZXR1cm5cbiAgICBnZXRQcm9jZXNzSWQ6ICgpID0+IGN1cnJlbnRQcm9jZXNzSWQrKyxcblxuICAgIC8vIFJlc29sdmUgYWN0aXZhdGUvZGVhY3RpdmF0ZSBwcm9jZXNzZXMgYW5kIHJldHVybiBhY3RpdmUgaWRzXG4gICAgZ2V0QWN0aXZlSWRzOiAoKSA9PiB7XG4gICAgICAgIC8qXG4gICAgICAgICAgICBQcm9jZXNzIGRlYWN0aXZhdGUgcXVldWVcbiAgICAgICAgKi9cbiAgICAgICAgY29uc3QgZGVhY3RpdmF0ZVF1ZXVlTGVuZ3RoID0gZGVhY3RpdmF0ZVF1ZXVlLmxlbmd0aDtcblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGRlYWN0aXZhdGVRdWV1ZUxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCBpZCA9IGRlYWN0aXZhdGVRdWV1ZVtpXTtcbiAgICAgICAgICAgIGNvbnN0IGFjdGl2ZUlkSW5kZXggPSBydW5uaW5nSWRzLmluZGV4T2YoaWQpO1xuICAgICAgICAgICAgY29uc3QgcHJvY2VzcyA9IGFjdGl2ZVByb2Nlc3Nlc1tpZF07XG5cbiAgICAgICAgICAgIC8vIElmIHRoaXMgaXMgYSBydW5uaW5nIHByb2Nlc3MsIGRlYWN0aXZhdGVcbiAgICAgICAgICAgIGlmIChhY3RpdmVJZEluZGV4ID4gLTEpIHtcbiAgICAgICAgICAgICAgICBydW5uaW5nSWRzLnNwbGljZShhY3RpdmVJZEluZGV4LCAxKTtcbiAgICAgICAgICAgICAgICB1cGRhdGVSdW5uaW5nQ291bnQoZmFsc2UsIHByb2Nlc3MuaXNMYXp5KTtcbiAgICAgICAgICAgICAgICBkZWxldGUgYWN0aXZlUHJvY2Vzc2VzW2lkXTtcblxuICAgICAgICAgICAgICAgIGlmIChwcm9jZXNzLm9uRGVhY3RpdmF0ZSkge1xuICAgICAgICAgICAgICAgICAgICBwcm9jZXNzLm9uRGVhY3RpdmF0ZShwcm9jZXNzKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvKlxuICAgICAgICAgICAgRW1wdHkgZGVhY3RpdmF0ZSBxdWV1ZS4gV2UgdXNlIGBBcnJheS5zcGxpY2VgIGJlY2F1c2UgaXQgZG9lc24ndFxuICAgICAgICAgICAgd29ya3Mgb24gdGhlIG9yaWdpbmFsIGFycmF5IHNvIHdlIGRvbid0IGhhdmUgdG8gZ2FyYmFnZSBjb2xsZWN0IGFueXRoaW5nXG4gICAgICAgICovXG4gICAgICAgIGRlYWN0aXZhdGVRdWV1ZS5zcGxpY2UoMCwgZGVhY3RpdmF0ZVF1ZXVlTGVuZ3RoKTtcblxuICAgICAgICAvKlxuICAgICAgICAgICAgUHJvY2VzcyBhY3RpdmF0ZSBxdWV1ZVxuICAgICAgICAqL1xuICAgICAgICBjb25zdCBhY3RpdmF0ZVF1ZXVlTGVuZ3RoID0gYWN0aXZhdGVRdWV1ZS5sZW5ndGg7XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhY3RpdmF0ZVF1ZXVlTGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IGlkID0gYWN0aXZhdGVRdWV1ZVtpXTtcbiAgICAgICAgICAgIGNvbnN0IGFjdGl2ZUlkSW5kZXggPSBydW5uaW5nSWRzLmluZGV4T2YoaWQpO1xuICAgICAgICAgICAgY29uc3QgcHJvY2VzcyA9IGFjdGl2ZVByb2Nlc3Nlc1tpZF07XG5cbiAgICAgICAgICAgIC8vIElmIHByb2Nlc3MgaXNuJ3QgYWxyZWFkeSBydW5uaW5nLCBhY3RpdmF0ZVxuICAgICAgICAgICAgaWYgKGFjdGl2ZUlkSW5kZXggPT09IC0xICYmIHByb2Nlc3MpIHtcbiAgICAgICAgICAgICAgICBpZiAocHJvY2Vzcy5pc1ByaW9yaXR5KSB7XG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmdJZHMudW5zaGlmdChpZCk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ0lkcy5wdXNoKGlkKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB1cGRhdGVSdW5uaW5nQ291bnQodHJ1ZSwgcHJvY2Vzcy5pc0xhenkpO1xuXG4gICAgICAgICAgICAgICAgaWYgKHByb2Nlc3Mub25BY3RpdmF0ZSkge1xuICAgICAgICAgICAgICAgICAgICBwcm9jZXNzLm9uQWN0aXZhdGUocHJvY2Vzcyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgYWN0aXZhdGVRdWV1ZS5zcGxpY2UoMCwgYWN0aXZhdGVRdWV1ZUxlbmd0aCk7XG5cbiAgICAgICAgcmV0dXJuIHJ1bm5pbmdJZHM7XG4gICAgfVxufTtcbiJdfQ==
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(51)))

/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _dictionary = __webpack_require__(44);
	
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
/* 51 */
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgOWRlNjNhZTI4NTJiYzYzMGE5YjIiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xvYWQvZ2xvYmFsLmpzIiwid2VicGFjazovLy8uL3NyYy9wb3Btb3Rpb24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luYy91dGlscy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcHJvY2Vzcy90aW1lci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYWN0b3IvQWN0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FjdGlvbnMvVHdlZW4uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FjdGlvbnMvUGh5c2ljcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYWN0aW9ucy9UcmFjay5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcHJvY2Vzcy9Qcm9jZXNzLmpzIiwid2VicGFjazovLy8uL3NyYy9pbnB1dC9JbnB1dC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5jL3N0YWdnZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luYy90aW1lbGluZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYWRhcHRlci9hZGFwdGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9hZGFwdGVyL2F0dHItYWRhcHRlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYWRhcHRlci9jc3MtYWRhcHRlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYWRhcHRlci9zdmctYWRhcHRlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYWRhcHRlci9zdmctcGF0aC1hZGFwdGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9hY3Rpb25zL2Vhc2luZy9wcmVzZXQtZWFzaW5nLmpzIiwid2VicGFjazovLy8uL3NyYy9pbmMvY2FsYy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdmFsdWUtdHlwZXMvYWxwaGEuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZhbHVlLXR5cGVzL2FuZ2xlLmpzIiwid2VicGFjazovLy8uL3NyYy92YWx1ZS10eXBlcy9heGVzLmpzIiwid2VicGFjazovLy8uL3NyYy92YWx1ZS10eXBlcy9jb2xvci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdmFsdWUtdHlwZXMvY29tcGxleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdmFsdWUtdHlwZXMvaGV4LmpzIiwid2VicGFjazovLy8uL3NyYy92YWx1ZS10eXBlcy9oc2wuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZhbHVlLXR5cGVzL3Bvc2l0aW9ucy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdmFsdWUtdHlwZXMvcHguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZhbHVlLXR5cGVzL3JnYi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdmFsdWUtdHlwZXMvc2NhbGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZhbHVlLXR5cGVzL3NoYWRvdy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5jL3RyYW5zZm9ybWVycy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYWN0aW9ucy9BY3Rpb24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Byb2Nlc3MvbG9vcC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5wdXQvUG9pbnRlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYWRhcHRlci9zdmctcGF0aC9idWlsZC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYWRhcHRlci9zdmctcGF0aC9zdGF0ZS1tYXAuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FkYXB0ZXIvY3NzL3N0YXRlLW1hcC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYWRhcHRlci9zdmcvdmFsdWUtdHlwZS1tYXAuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FkYXB0ZXIvc3ZnL2J1aWxkLmpzIiwid2VicGFjazovLy8uL3NyYy9hZGFwdGVyL2Nzcy92YWx1ZS10eXBlLW1hcC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYWRhcHRlci9jc3MvYnVpbGQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FkYXB0ZXIvY3NzL3ByZWZpeGVyLmpzIiwid2VicGFjazovLy8uL3NyYy92YWx1ZS10eXBlcy9zZXR0aW5ncy9kZWZhdWx0LXByb3BzLmpzIiwid2VicGFjazovLy8uL3NyYy92YWx1ZS10eXBlcy9zZXR0aW5ncy9kaWN0aW9uYXJ5LmpzIiwid2VicGFjazovLy8uL3NyYy9hY3Rpb25zL2Vhc2luZy9jcmVhdGUtZWFzaW5nLmpzIiwid2VicGFjazovLy8uL3NyYy9hY3Rpb25zL2Vhc2luZy9jcmVhdGUtYmV6aWVyLmpzIiwid2VicGFjazovLy8uL3NyYy9pbmMvYmluZC1hZGFwdGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9wcm9jZXNzL3RpY2suanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Byb2Nlc3MvbWFuYWdlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYWRhcHRlci9jc3MvdHJhbnNmb3JtLXByb3BzLmpzIiwid2VicGFjazovLy8od2VicGFjaykvfi9ub2RlLWxpYnMtYnJvd3Nlci9+L3Byb2Nlc3MvYnJvd3Nlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdUJBQWU7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSx3Qzs7Ozs7OztBQ3RDQTs7QUFFQTs7QUFFQTs7QUFFQSx3Q0FBdUMsNkJBQTZCLFlBQVksRUFBRSxPQUFPLGlCQUFpQixtQkFBbUIsdUJBQXVCLDRFQUE0RSxFQUFFLEVBQUUsc0JBQXNCLGVBQWUsRUFBRTs7QUFFM1E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsNENBQTJDLCtwQjs7Ozs7O0FDZjNDOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUM7O0FBRUQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUM7O0FBRUQ7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUEsd0NBQXVDLDZCQUE2QixZQUFZLEVBQUUsT0FBTyxpQkFBaUIsbUJBQW1CLHVCQUF1Qiw0RUFBNEUsRUFBRSxFQUFFLHNCQUFzQixlQUFlLEVBQUU7O0FBRTNRLHVDQUFzQyx1Q0FBdUMsZ0JBQWdCOztBQUU3RjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0VBQWlFLGFBQWE7QUFDOUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxxRUFBb0UsZUFBZTtBQUNuRjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHFFQUFvRSxlQUFlO0FBQ25GO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSw0Q0FBMkMsMnhHOzs7Ozs7QUNyTjNDOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBbUIscUJBQXFCO0FBQ3hDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxvQkFBbUIsY0FBYztBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUM7QUFDRDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUEsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsb0JBQW1CLG1CQUFtQjtBQUN0QztBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FB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Q0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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QTs7QUFFQSxvQkFBbUIsaUJBQWlCO0FBQ3BDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSw0Q0FBMkMsdXdFOzs7Ozs7QUN0QzNDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNENBQTJDLHV3Qjs7Ozs7O0FDbkIzQzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNENBQTJDLDJxQzs7Ozs7O0FDWjNDOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSw0Q0FBMkMsdTlGOzs7Ozs7QUN6RDNDOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsOEJBQTZCO0FBQzdCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWE7QUFDYjtBQUNBO0FBQ0EsVUFBUzs7QUFFVDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGVBQWMsdUJBQXVCO0FBQ3JDOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLHdCQUF1Qix5QkFBeUI7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGVBQWMsa0VBQWtFO0FBQ2hGO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0EsY0FBYTtBQUNiO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsVUFBUztBQUNUOztBQUVBO0FBQ0EsY0FBYTtBQUNiO0FBQ0Esa0JBQWlCO0FBQ2pCO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsNENBQTJDLCswVTs7Ozs7O0FDakszQzs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQSx1Q0FBc0MsdUNBQXVDLGdCQUFnQjs7QUFFN0Y7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxNQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsY0FBYTtBQUNiO0FBQ0E7QUFDQSxzQkFBcUI7QUFDckI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQSw0Q0FBMkMsdXNFOzs7Ozs7QUNuRDNDOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBQztBQUNEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsY0FBYTtBQUNiO0FBQ0EsTUFBSztBQUNMOztBQUVBO0FBQ0EsNENBQTJDLDIxRTs7Ozs7O0FDOUMzQzs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBLE1BQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0EsTUFBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsd0JBQXVCLDJCQUEyQjtBQUNsRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsd0JBQXVCLHlCQUF5QjtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBaUI7QUFDakI7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLDRDQUEyQywra1E7Ozs7Ozs7QUNuSjNDOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSCxFQUFDOztBQUVEO0FBQ0EsNENBQTJDLCsxQzs7Ozs7O0FDdEIzQzs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXFCO0FBQ3JCOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDRCQUEyQjtBQUMzQjtBQUNBO0FBQ0E7QUFDQSw2QkFBNEIsVUFBVSIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuXG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRleHBvcnRzOiB7fSxcbiBcdFx0XHRpZDogbW9kdWxlSWQsXG4gXHRcdFx0bG9hZGVkOiBmYWxzZVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHdlYnBhY2svYm9vdHN0cmFwIDlkZTYzYWUyODUyYmM2MzBhOWIyXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgX3BvcG1vdGlvbiA9IHJlcXVpcmUoJy4uL3BvcG1vdGlvbicpO1xuXG52YXIgcG9wbW90aW9uID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQoX3BvcG1vdGlvbik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKG9iaikgeyBpZiAob2JqICYmIG9iai5fX2VzTW9kdWxlKSB7IHJldHVybiBvYmo7IH0gZWxzZSB7IHZhciBuZXdPYmogPSB7fTsgaWYgKG9iaiAhPSBudWxsKSB7IGZvciAodmFyIGtleSBpbiBvYmopIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGtleSkpIG5ld09ialtrZXldID0gb2JqW2tleV07IH0gfSBuZXdPYmouZGVmYXVsdCA9IG9iajsgcmV0dXJuIG5ld09iajsgfSB9XG5cbnZhciBVSXJlZiA9IHdpbmRvdy5tb3Rpb247XG5cbnBvcG1vdGlvbi5ub0NvbmZsaWN0ID0gZnVuY3Rpb24gKCkge1xuICAgIHdpbmRvdy5tb3Rpb24gPSBVSXJlZjtcbn07XG5cbndpbmRvdy5tb3Rpb24gPSB3aW5kb3cucG9wbW90aW9uID0gcG9wbW90aW9uO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluTnlZeTlzYjJGa0wyZHNiMkpoYkM1cWN5SmRMQ0p1WVcxbGN5STZXMTBzSW0xaGNIQnBibWR6SWpvaU96czdPMGxCUVZrN096czdRVUZGV2l4SlFVRk5MRkZCUVZFc1QwRkJUeXhOUVVGUU96dEJRVVZrTEZWQlFWVXNWVUZCVml4SFFVRjFRaXhaUVVGWk8wRkJReTlDTEZkQlFVOHNUVUZCVUN4SFFVRm5RaXhMUVVGb1FpeERRVVFyUWp0RFFVRmFPenRCUVVsMlFpeFBRVUZQTEUxQlFWQXNSMEZCWjBJc1QwRkJUeXhUUVVGUUxFZEJRVzFDTEZOQlFXNUNJaXdpWm1sc1pTSTZJbWRzYjJKaGJDNXFjeUlzSW5OdmRYSmpaVkp2YjNRaU9pSXZWWE5sY25NdlRXRjBkQzlUYVhSbGN5OXdiM0J0YjNScGIyNGlMQ0p6YjNWeVkyVnpRMjl1ZEdWdWRDSTZXeUpwYlhCdmNuUWdLaUJoY3lCd2IzQnRiM1JwYjI0Z1puSnZiU0FuTGk0dmNHOXdiVzkwYVc5dUp6dGNibHh1WTI5dWMzUWdWVWx5WldZZ1BTQjNhVzVrYjNjdWJXOTBhVzl1TzF4dVhHNXdiM0J0YjNScGIyNHVibTlEYjI1bWJHbGpkQ0E5SUdaMWJtTjBhVzl1SUNncElIdGNiaUFnSUNCM2FXNWtiM2N1Ylc5MGFXOXVJRDBnVlVseVpXWTdYRzU5TzF4dVhHNTNhVzVrYjNjdWJXOTBhVzl1SUQwZ2QybHVaRzkzTG5CdmNHMXZkR2x2YmlBOUlIQnZjRzF2ZEdsdmJqc2lYWDA9XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9sb2FkL2dsb2JhbC5qc1xuICoqIG1vZHVsZSBpZCA9IDBcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHMudHJhbnNmb3JtZXJzID0gZXhwb3J0cy5zaGFkb3dUeXBlID0gZXhwb3J0cy5zY2FsZVR5cGUgPSBleHBvcnRzLnJnYlR5cGUgPSBleHBvcnRzLnB4VHlwZSA9IGV4cG9ydHMucG9zaXRpb25zVHlwZSA9IGV4cG9ydHMuaHNsVHlwZSA9IGV4cG9ydHMuaGV4VHlwZSA9IGV4cG9ydHMuY29tcGxleFR5cGUgPSBleHBvcnRzLmNvbG9yVHlwZSA9IGV4cG9ydHMuYXhlc1R5cGUgPSBleHBvcnRzLmFuZ2xlVHlwZSA9IGV4cG9ydHMuYWxwaGFUeXBlID0gZXhwb3J0cy5zZXRHbG9iYWxEaWxhdGlvbiA9IGV4cG9ydHMuY29tYmluZVRyYW5zZm9ybWVycyA9IGV4cG9ydHMuY2FsYyA9IGV4cG9ydHMuZWFzaW5nID0gZXhwb3J0cy5zdmdQYXRoQWRhcHRlciA9IGV4cG9ydHMuc3ZnQWRhcHRlciA9IGV4cG9ydHMuY3NzQWRhcHRlciA9IGV4cG9ydHMuYXR0ckFkYXB0ZXIgPSBleHBvcnRzLmFkYXB0ZXIgPSBleHBvcnRzLnRpbWVsaW5lID0gZXhwb3J0cy5zdGFnZ2VyID0gZXhwb3J0cy5wcm9jZXNzID0gZXhwb3J0cy5pbnB1dCA9IGV4cG9ydHMudHJhY2tJbnB1dCA9IGV4cG9ydHMucGh5c2ljcyA9IGV4cG9ydHMudHdlZW4gPSBleHBvcnRzLmFjdG9yID0gdW5kZWZpbmVkO1xuXG52YXIgX3V0aWxzID0gcmVxdWlyZSgnLi9pbmMvdXRpbHMnKTtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjb21iaW5lVHJhbnNmb3JtZXJzJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gX3V0aWxzLmNvbWJpbmVUcmFuc2Zvcm1lcnM7XG4gIH1cbn0pO1xuXG52YXIgX3RpbWVyID0gcmVxdWlyZSgnLi9wcm9jZXNzL3RpbWVyJyk7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnc2V0R2xvYmFsRGlsYXRpb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBfdGltZXIuc2V0R2xvYmFsRGlsYXRpb247XG4gIH1cbn0pO1xuXG52YXIgX0FjdG9yID0gcmVxdWlyZSgnLi9hY3Rvci9BY3RvcicpO1xuXG52YXIgX0FjdG9yMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX0FjdG9yKTtcblxudmFyIF9Ud2VlbiA9IHJlcXVpcmUoJy4vYWN0aW9ucy9Ud2VlbicpO1xuXG52YXIgX1R3ZWVuMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX1R3ZWVuKTtcblxudmFyIF9QaHlzaWNzID0gcmVxdWlyZSgnLi9hY3Rpb25zL1BoeXNpY3MnKTtcblxudmFyIF9QaHlzaWNzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX1BoeXNpY3MpO1xuXG52YXIgX1RyYWNrID0gcmVxdWlyZSgnLi9hY3Rpb25zL1RyYWNrJyk7XG5cbnZhciBfVHJhY2syID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfVHJhY2spO1xuXG52YXIgX1Byb2Nlc3MgPSByZXF1aXJlKCcuL3Byb2Nlc3MvUHJvY2VzcycpO1xuXG52YXIgX1Byb2Nlc3MyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfUHJvY2Vzcyk7XG5cbnZhciBfSW5wdXQgPSByZXF1aXJlKCcuL2lucHV0L0lucHV0Jyk7XG5cbnZhciBfSW5wdXQyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfSW5wdXQpO1xuXG52YXIgX3N0YWdnZXIyID0gcmVxdWlyZSgnLi9pbmMvc3RhZ2dlcicpO1xuXG52YXIgX3N0YWdnZXIzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfc3RhZ2dlcjIpO1xuXG52YXIgX3RpbWVsaW5lMiA9IHJlcXVpcmUoJy4vaW5jL3RpbWVsaW5lJyk7XG5cbnZhciBfdGltZWxpbmUzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfdGltZWxpbmUyKTtcblxudmFyIF9hZGFwdGVyMiA9IHJlcXVpcmUoJy4vYWRhcHRlci9hZGFwdGVyJyk7XG5cbnZhciBfYWRhcHRlcjMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9hZGFwdGVyMik7XG5cbnZhciBfYXR0ckFkYXB0ZXIyID0gcmVxdWlyZSgnLi9hZGFwdGVyL2F0dHItYWRhcHRlcicpO1xuXG52YXIgX2F0dHJBZGFwdGVyMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2F0dHJBZGFwdGVyMik7XG5cbnZhciBfY3NzQWRhcHRlcjIgPSByZXF1aXJlKCcuL2FkYXB0ZXIvY3NzLWFkYXB0ZXInKTtcblxudmFyIF9jc3NBZGFwdGVyMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2Nzc0FkYXB0ZXIyKTtcblxudmFyIF9zdmdBZGFwdGVyMiA9IHJlcXVpcmUoJy4vYWRhcHRlci9zdmctYWRhcHRlcicpO1xuXG52YXIgX3N2Z0FkYXB0ZXIzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfc3ZnQWRhcHRlcjIpO1xuXG52YXIgX3N2Z1BhdGhBZGFwdGVyMiA9IHJlcXVpcmUoJy4vYWRhcHRlci9zdmctcGF0aC1hZGFwdGVyJyk7XG5cbnZhciBfc3ZnUGF0aEFkYXB0ZXIzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfc3ZnUGF0aEFkYXB0ZXIyKTtcblxudmFyIF9wcmVzZXRFYXNpbmcgPSByZXF1aXJlKCcuL2FjdGlvbnMvZWFzaW5nL3ByZXNldC1lYXNpbmcnKTtcblxudmFyIF9wcmVzZXRFYXNpbmcyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcHJlc2V0RWFzaW5nKTtcblxudmFyIF9jYWxjMiA9IHJlcXVpcmUoJy4vaW5jL2NhbGMnKTtcblxudmFyIF9jYWxjID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQoX2NhbGMyKTtcblxudmFyIF9hbHBoYSA9IHJlcXVpcmUoJy4vdmFsdWUtdHlwZXMvYWxwaGEnKTtcblxudmFyIF9hbHBoYTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9hbHBoYSk7XG5cbnZhciBfYW5nbGUgPSByZXF1aXJlKCcuL3ZhbHVlLXR5cGVzL2FuZ2xlJyk7XG5cbnZhciBfYW5nbGUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfYW5nbGUpO1xuXG52YXIgX2F4ZXMgPSByZXF1aXJlKCcuL3ZhbHVlLXR5cGVzL2F4ZXMnKTtcblxudmFyIF9heGVzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2F4ZXMpO1xuXG52YXIgX2NvbG9yID0gcmVxdWlyZSgnLi92YWx1ZS10eXBlcy9jb2xvcicpO1xuXG52YXIgX2NvbG9yMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NvbG9yKTtcblxudmFyIF9jb21wbGV4ID0gcmVxdWlyZSgnLi92YWx1ZS10eXBlcy9jb21wbGV4Jyk7XG5cbnZhciBfY29tcGxleDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jb21wbGV4KTtcblxudmFyIF9oZXggPSByZXF1aXJlKCcuL3ZhbHVlLXR5cGVzL2hleCcpO1xuXG52YXIgX2hleDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9oZXgpO1xuXG52YXIgX2hzbCA9IHJlcXVpcmUoJy4vdmFsdWUtdHlwZXMvaHNsJyk7XG5cbnZhciBfaHNsMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2hzbCk7XG5cbnZhciBfcG9zaXRpb25zID0gcmVxdWlyZSgnLi92YWx1ZS10eXBlcy9wb3NpdGlvbnMnKTtcblxudmFyIF9wb3NpdGlvbnMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcG9zaXRpb25zKTtcblxudmFyIF9weCA9IHJlcXVpcmUoJy4vdmFsdWUtdHlwZXMvcHgnKTtcblxudmFyIF9weDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9weCk7XG5cbnZhciBfcmdiID0gcmVxdWlyZSgnLi92YWx1ZS10eXBlcy9yZ2InKTtcblxudmFyIF9yZ2IyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmdiKTtcblxudmFyIF9zY2FsZSA9IHJlcXVpcmUoJy4vdmFsdWUtdHlwZXMvc2NhbGUnKTtcblxudmFyIF9zY2FsZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9zY2FsZSk7XG5cbnZhciBfc2hhZG93ID0gcmVxdWlyZSgnLi92YWx1ZS10eXBlcy9zaGFkb3cnKTtcblxudmFyIF9zaGFkb3cyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfc2hhZG93KTtcblxudmFyIF90cmFuc2Zvcm1lcnMyID0gcmVxdWlyZSgnLi9pbmMvdHJhbnNmb3JtZXJzJyk7XG5cbnZhciBfdHJhbnNmb3JtZXJzID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQoX3RyYW5zZm9ybWVyczIpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChvYmopIHsgaWYgKG9iaiAmJiBvYmouX19lc01vZHVsZSkgeyByZXR1cm4gb2JqOyB9IGVsc2UgeyB2YXIgbmV3T2JqID0ge307IGlmIChvYmogIT0gbnVsbCkgeyBmb3IgKHZhciBrZXkgaW4gb2JqKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBrZXkpKSBuZXdPYmpba2V5XSA9IG9ialtrZXldOyB9IH0gbmV3T2JqLmRlZmF1bHQgPSBvYmo7IHJldHVybiBuZXdPYmo7IH0gfVxuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG4vLyBQcm9jZXNzXG4vLyBBY3RvclxudmFyIGFjdG9yID0gZXhwb3J0cy5hY3RvciA9IGZ1bmN0aW9uIChwcm9wcykge1xuICByZXR1cm4gbmV3IF9BY3RvcjIuZGVmYXVsdChwcm9wcyk7XG59O1xuXG4vLyBJbnB1dFxuXG4vLyBBY3Rpb25zXG5cbnZhciB0d2VlbiA9IGV4cG9ydHMudHdlZW4gPSBmdW5jdGlvbiAocHJvcHMpIHtcbiAgcmV0dXJuIG5ldyBfVHdlZW4yLmRlZmF1bHQocHJvcHMpO1xufTtcbnZhciBwaHlzaWNzID0gZXhwb3J0cy5waHlzaWNzID0gZnVuY3Rpb24gKHByb3BzKSB7XG4gIHJldHVybiBuZXcgX1BoeXNpY3MyLmRlZmF1bHQocHJvcHMpO1xufTtcbnZhciB0cmFja0lucHV0ID0gZXhwb3J0cy50cmFja0lucHV0ID0gZnVuY3Rpb24gKCkge1xuICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgIGFyZ3NbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gIH1cblxuICByZXR1cm4gbmV3IChGdW5jdGlvbi5wcm90b3R5cGUuYmluZC5hcHBseShfVHJhY2syLmRlZmF1bHQsIFtudWxsXS5jb25jYXQoYXJncykpKSgpO1xufTtcbnZhciBpbnB1dCA9IGV4cG9ydHMuaW5wdXQgPSBmdW5jdGlvbiAoKSB7XG4gIGZvciAodmFyIF9sZW4yID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IEFycmF5KF9sZW4yKSwgX2tleTIgPSAwOyBfa2V5MiA8IF9sZW4yOyBfa2V5MisrKSB7XG4gICAgYXJnc1tfa2V5Ml0gPSBhcmd1bWVudHNbX2tleTJdO1xuICB9XG5cbiAgcmV0dXJuIG5ldyAoRnVuY3Rpb24ucHJvdG90eXBlLmJpbmQuYXBwbHkoX0lucHV0Mi5kZWZhdWx0LCBbbnVsbF0uY29uY2F0KGFyZ3MpKSkoKTtcbn07XG52YXIgcHJvY2VzcyA9IGV4cG9ydHMucHJvY2VzcyA9IGZ1bmN0aW9uICgpIHtcbiAgZm9yICh2YXIgX2xlbjMgPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gQXJyYXkoX2xlbjMpLCBfa2V5MyA9IDA7IF9rZXkzIDwgX2xlbjM7IF9rZXkzKyspIHtcbiAgICBhcmdzW19rZXkzXSA9IGFyZ3VtZW50c1tfa2V5M107XG4gIH1cblxuICByZXR1cm4gbmV3IChGdW5jdGlvbi5wcm90b3R5cGUuYmluZC5hcHBseShfUHJvY2VzczIuZGVmYXVsdCwgW251bGxdLmNvbmNhdChhcmdzKSkpKCk7XG59O1xuZXhwb3J0cy5zdGFnZ2VyID0gX3N0YWdnZXIzLmRlZmF1bHQ7XG5leHBvcnRzLnRpbWVsaW5lID0gX3RpbWVsaW5lMy5kZWZhdWx0O1xuXG4vLyBBZGFwdGVyc1xuXG5leHBvcnRzLmFkYXB0ZXIgPSBfYWRhcHRlcjMuZGVmYXVsdDtcbmV4cG9ydHMuYXR0ckFkYXB0ZXIgPSBfYXR0ckFkYXB0ZXIzLmRlZmF1bHQ7XG5leHBvcnRzLmNzc0FkYXB0ZXIgPSBfY3NzQWRhcHRlcjMuZGVmYXVsdDtcbmV4cG9ydHMuc3ZnQWRhcHRlciA9IF9zdmdBZGFwdGVyMy5kZWZhdWx0O1xuZXhwb3J0cy5zdmdQYXRoQWRhcHRlciA9IF9zdmdQYXRoQWRhcHRlcjMuZGVmYXVsdDtcblxuLy8gRWFzaW5nXG5cbmV4cG9ydHMuZWFzaW5nID0gX3ByZXNldEVhc2luZzIuZGVmYXVsdDtcblxuLy8gVXRpbHNcblxuZXhwb3J0cy5jYWxjID0gX2NhbGM7XG5cbi8vIFZhbHVlIHR5cGVzXG5cbmV4cG9ydHMuYWxwaGFUeXBlID0gX2FscGhhMi5kZWZhdWx0O1xuZXhwb3J0cy5hbmdsZVR5cGUgPSBfYW5nbGUyLmRlZmF1bHQ7XG5leHBvcnRzLmF4ZXNUeXBlID0gX2F4ZXMyLmRlZmF1bHQ7XG5leHBvcnRzLmNvbG9yVHlwZSA9IF9jb2xvcjIuZGVmYXVsdDtcbmV4cG9ydHMuY29tcGxleFR5cGUgPSBfY29tcGxleDIuZGVmYXVsdDtcbmV4cG9ydHMuaGV4VHlwZSA9IF9oZXgyLmRlZmF1bHQ7XG5leHBvcnRzLmhzbFR5cGUgPSBfaHNsMi5kZWZhdWx0O1xuZXhwb3J0cy5wb3NpdGlvbnNUeXBlID0gX3Bvc2l0aW9uczIuZGVmYXVsdDtcbmV4cG9ydHMucHhUeXBlID0gX3B4Mi5kZWZhdWx0O1xuZXhwb3J0cy5yZ2JUeXBlID0gX3JnYjIuZGVmYXVsdDtcbmV4cG9ydHMuc2NhbGVUeXBlID0gX3NjYWxlMi5kZWZhdWx0O1xuZXhwb3J0cy5zaGFkb3dUeXBlID0gX3NoYWRvdzIuZGVmYXVsdDtcblxuLy8gVHJhbnNmb3JtZXJzXG5cbmV4cG9ydHMudHJhbnNmb3JtZXJzID0gX3RyYW5zZm9ybWVycztcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbk55WXk5d2IzQnRiM1JwYjI0dWFuTWlYU3dpYm1GdFpYTWlPbHRkTENKdFlYQndhVzVuY3lJNklqczdPenM3T3pzN096dHJRa0Z0UTFNN096czdPenM3T3p0clFrRkRRVHM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN1FVRjBRa1lzU1VGQlRTeDNRa0ZCVVN4VlFVRkRMRXRCUVVRN1UwRkJWeXh2UWtGQlZTeExRVUZXTzBOQlFWZzdPenM3T3p0QlFVTmtMRWxCUVUwc2QwSkJRVkVzVlVGQlF5eExRVUZFTzFOQlFWY3NiMEpCUVZVc1MwRkJWanREUVVGWU8wRkJRMlFzU1VGQlRTdzBRa0ZCVlN4VlFVRkRMRXRCUVVRN1UwRkJWeXh6UWtGQldTeExRVUZhTzBOQlFWZzdRVUZEYUVJc1NVRkJUU3hyUTBGQllUdHZRMEZCU1RzN096c3lSVUZCYzBJN1EwRkJNVUk3UVVGRGJrSXNTVUZCVFN4M1FrRkJVVHR4UTBGQlNUczdPenN5UlVGQmMwSTdRMEZCTVVJN1FVRkRaQ3hKUVVGTkxEUkNRVUZWTzNGRFFVRkpPenM3T3paRlFVRjNRanREUVVFMVFqdFJRVU5vUWp0UlFVTkJPenM3TzFGQlIwRTdVVUZEUVR0UlFVTkJPMUZCUTBFN1VVRkRRVHM3T3p0UlFVZEJPenM3TzFGQlIwczdPenM3VVVGTFREdFJRVU5CTzFGQlEwRTdVVUZEUVR0UlFVTkJPMUZCUTBFN1VVRkRRVHRSUVVOQk8xRkJRMEU3VVVGRFFUdFJRVU5CTzFGQlEwRTdPenM3VVVGSFN5SXNJbVpwYkdVaU9pSndiM0J0YjNScGIyNHVhbk1pTENKemIzVnlZMlZTYjI5MElqb2lMMVZ6WlhKekwwMWhkSFF2VTJsMFpYTXZjRzl3Ylc5MGFXOXVJaXdpYzI5MWNtTmxjME52Ym5SbGJuUWlPbHNpTHk4Z1FXTjBiM0pjYm1sdGNHOXlkQ0JCWTNSdmNpQm1jbTl0SUNjdUwyRmpkRzl5TDBGamRHOXlKenRjYmx4dUx5OGdRV04wYVc5dWMxeHVhVzF3YjNKMElGUjNaV1Z1SUdaeWIyMGdKeTR2WVdOMGFXOXVjeTlVZDJWbGJpYzdYRzVwYlhCdmNuUWdVR2g1YzJsamN5Qm1jbTl0SUNjdUwyRmpkR2x2Ym5NdlVHaDVjMmxqY3ljN1hHNXBiWEJ2Y25RZ1ZISmhZMnNnWm5KdmJTQW5MaTloWTNScGIyNXpMMVJ5WVdOckp6dGNibHh1THk4Z1VISnZZMlZ6YzF4dWFXMXdiM0owSUZCeWIyTmxjM01nWm5KdmJTQW5MaTl3Y205alpYTnpMMUJ5YjJObGMzTW5PMXh1WEc0dkx5QkpibkIxZEZ4dWFXMXdiM0owSUVsdWNIVjBJR1p5YjIwZ0p5NHZhVzV3ZFhRdlNXNXdkWFFuTzF4dVhHNWxlSEJ2Y25RZ1kyOXVjM1FnWVdOMGIzSWdQU0FvY0hKdmNITXBJRDArSUc1bGR5QkJZM1J2Y2lod2NtOXdjeWs3WEc1bGVIQnZjblFnWTI5dWMzUWdkSGRsWlc0Z1BTQW9jSEp2Y0hNcElEMCtJRzVsZHlCVWQyVmxiaWh3Y205d2N5azdYRzVsZUhCdmNuUWdZMjl1YzNRZ2NHaDVjMmxqY3lBOUlDaHdjbTl3Y3lrZ1BUNGdibVYzSUZCb2VYTnBZM01vY0hKdmNITXBPMXh1Wlhod2IzSjBJR052Ym5OMElIUnlZV05yU1c1d2RYUWdQU0FvTGk0dVlYSm5jeWtnUFQ0Z2JtVjNJRlJ5WVdOcktDNHVMbUZ5WjNNcE8xeHVaWGh3YjNKMElHTnZibk4wSUdsdWNIVjBJRDBnS0M0dUxtRnlaM01wSUQwK0lHNWxkeUJKYm5CMWRDZ3VMaTVoY21kektUdGNibVY0Y0c5eWRDQmpiMjV6ZENCd2NtOWpaWE56SUQwZ0tDNHVMbUZ5WjNNcElEMCtJRzVsZHlCUWNtOWpaWE56S0M0dUxtRnlaM01wTzF4dVpYaHdiM0owSUhOMFlXZG5aWElnWm5KdmJTQW5MaTlwYm1NdmMzUmhaMmRsY2ljN1hHNWxlSEJ2Y25RZ2RHbHRaV3hwYm1VZ1puSnZiU0FuTGk5cGJtTXZkR2x0Wld4cGJtVW5PMXh1WEc0dkx5QkJaR0Z3ZEdWeWMxeHVaWGh3YjNKMElHRmtZWEIwWlhJZ1puSnZiU0FuTGk5aFpHRndkR1Z5TDJGa1lYQjBaWEluTzF4dVpYaHdiM0owSUdGMGRISkJaR0Z3ZEdWeUlHWnliMjBnSnk0dllXUmhjSFJsY2k5aGRIUnlMV0ZrWVhCMFpYSW5PMXh1Wlhod2IzSjBJR056YzBGa1lYQjBaWElnWm5KdmJTQW5MaTloWkdGd2RHVnlMMk56Y3kxaFpHRndkR1Z5Snp0Y2JtVjRjRzl5ZENCemRtZEJaR0Z3ZEdWeUlHWnliMjBnSnk0dllXUmhjSFJsY2k5emRtY3RZV1JoY0hSbGNpYzdYRzVsZUhCdmNuUWdjM1puVUdGMGFFRmtZWEIwWlhJZ1puSnZiU0FuTGk5aFpHRndkR1Z5TDNOMlp5MXdZWFJvTFdGa1lYQjBaWEluTzF4dVhHNHZMeUJGWVhOcGJtZGNibVY0Y0c5eWRDQmxZWE5wYm1jZ1puSnZiU0FuTGk5aFkzUnBiMjV6TDJWaGMybHVaeTl3Y21WelpYUXRaV0Z6YVc1bkp6dGNibHh1THk4Z1ZYUnBiSE5jYm1WNGNHOXlkQ0FxSUdGeklHTmhiR01nWm5KdmJTQW5MaTlwYm1NdlkyRnNZeWM3WEc1bGVIQnZjblFnZXlCamIyMWlhVzVsVkhKaGJuTm1iM0p0WlhKeklIMGdabkp2YlNBbkxpOXBibU12ZFhScGJITW5PMXh1Wlhod2IzSjBJSHNnYzJWMFIyeHZZbUZzUkdsc1lYUnBiMjRnZlNCbWNtOXRJQ2N1TDNCeWIyTmxjM012ZEdsdFpYSW5PMXh1WEc0dkx5QldZV3gxWlNCMGVYQmxjMXh1Wlhod2IzSjBJR0ZzY0doaFZIbHdaU0JtY205dElDY3VMM1poYkhWbExYUjVjR1Z6TDJGc2NHaGhKenRjYm1WNGNHOXlkQ0JoYm1kc1pWUjVjR1VnWm5KdmJTQW5MaTkyWVd4MVpTMTBlWEJsY3k5aGJtZHNaU2M3WEc1bGVIQnZjblFnWVhobGMxUjVjR1VnWm5KdmJTQW5MaTkyWVd4MVpTMTBlWEJsY3k5aGVHVnpKenRjYm1WNGNHOXlkQ0JqYjJ4dmNsUjVjR1VnWm5KdmJTQW5MaTkyWVd4MVpTMTBlWEJsY3k5amIyeHZjaWM3WEc1bGVIQnZjblFnWTI5dGNHeGxlRlI1Y0dVZ1puSnZiU0FuTGk5MllXeDFaUzEwZVhCbGN5OWpiMjF3YkdWNEp6dGNibVY0Y0c5eWRDQm9aWGhVZVhCbElHWnliMjBnSnk0dmRtRnNkV1V0ZEhsd1pYTXZhR1Y0Snp0Y2JtVjRjRzl5ZENCb2MyeFVlWEJsSUdaeWIyMGdKeTR2ZG1Gc2RXVXRkSGx3WlhNdmFITnNKenRjYm1WNGNHOXlkQ0J3YjNOcGRHbHZibk5VZVhCbElHWnliMjBnSnk0dmRtRnNkV1V0ZEhsd1pYTXZjRzl6YVhScGIyNXpKenRjYm1WNGNHOXlkQ0J3ZUZSNWNHVWdabkp2YlNBbkxpOTJZV3gxWlMxMGVYQmxjeTl3ZUNjN1hHNWxlSEJ2Y25RZ2NtZGlWSGx3WlNCbWNtOXRJQ2N1TDNaaGJIVmxMWFI1Y0dWekwzSm5ZaWM3WEc1bGVIQnZjblFnYzJOaGJHVlVlWEJsSUdaeWIyMGdKeTR2ZG1Gc2RXVXRkSGx3WlhNdmMyTmhiR1VuTzF4dVpYaHdiM0owSUhOb1lXUnZkMVI1Y0dVZ1puSnZiU0FuTGk5MllXeDFaUzEwZVhCbGN5OXphR0ZrYjNjbk8xeHVYRzR2THlCVWNtRnVjMlp2Y20xbGNuTmNibVY0Y0c5eWRDQXFJR0Z6SUhSeVlXNXpabTl5YldWeWN5Qm1jbTl0SUNjdUwybHVZeTkwY21GdWMyWnZjbTFsY25Nbk95SmRmUT09XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9wb3Btb3Rpb24uanNcbiAqKiBtb2R1bGUgaWQgPSAxXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG52YXIgQ0FNRUxfQ0FTRV9QQVRURVJOID0gLyhbYS16XSkoW0EtWl0pL2c7XG52YXIgUkVQTEFDRV9URU1QTEFURSA9ICckMS0kMic7XG52YXIgSEFTX1BFUkZPUk1BTkNFX05PVyA9IHR5cGVvZiBwZXJmb3JtYW5jZSAhPT0gJ3VuZGVmaW5lZCcgJiYgcGVyZm9ybWFuY2Uubm93O1xuXG4vKlxuICAgIEdldCB2YXIgdHlwZSBhcyBzdHJpbmdcbiAgICBcbiAgICBAcGFyYW06IFZhcmlhYmxlIHRvIHRlc3RcbiAgICBAcmV0dXJuIFtzdHJpbmddOiBSZXR1cm5zLCBmb3IgaW5zdGFuY2UgJ09iamVjdCcgaWYgW29iamVjdCBPYmplY3RdXG4qL1xudmFyIHZhclR5cGUgPSBmdW5jdGlvbiAodmFyaWFibGUpIHtcbiAgICByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHZhcmlhYmxlKS5zbGljZSg4LCAtMSk7XG59O1xuXG4vKlxuICAgIENvbnZlcnQgY2FtZWxDYXNlIHRvIGRhc2gtY2FzZVxuXG4gICAgQHBhcmFtIFtzdHJpbmddXG4gICAgQHJldHVybiBbc3RyaW5nXVxuKi9cbnZhciBjYW1lbFRvRGFzaCA9IGV4cG9ydHMuY2FtZWxUb0Rhc2ggPSBmdW5jdGlvbiAoc3RyaW5nKSB7XG4gICAgcmV0dXJuIHN0cmluZy5yZXBsYWNlKENBTUVMX0NBU0VfUEFUVEVSTiwgUkVQTEFDRV9URU1QTEFURSkudG9Mb3dlckNhc2UoKTtcbn07XG5cbi8qXG4gICAgQ29tYmluZSB0cmFuc2Zvcm1lcnMgaW50byBvbmUgZnVuY3Rpb24gdGhhdCBjYWxscyBldmVyeVxuICAgIHRyYW5zZm9ybWVyIGluIHRoZSBhcnJheSBhbmQgcmV0dXJucyB0aGUgcmVzdWx0XG5cbiAgICBAcGFyYW0gW2FycmF5XVxuICAgIEByZXR1cm4gW2Z1bmN0aW9uXVxuKi9cbnZhciBjb21iaW5lVHJhbnNmb3JtZXJzID0gZXhwb3J0cy5jb21iaW5lVHJhbnNmb3JtZXJzID0gZnVuY3Rpb24gKHRyYW5zZm9ybWVycykge1xuICAgIHZhciBudW1UcmFuc2Zvcm1lcnMgPSB0cmFuc2Zvcm1lcnMubGVuZ3RoO1xuICAgIHZhciBpID0gMDtcblxuICAgIC8qXG4gICAgICAgIEBwYXJhbSBbbnVtYmVyXVxuICAgICAgICBAcGFyYW0gW3N0cmluZ11cbiAgICAgICAgQHBhcmFtIFtBY3Rpb25dXG4gICAgICAgIEByZXR1cm4gW251bWJlcl1cbiAgICAqL1xuICAgIHJldHVybiBmdW5jdGlvbiAodiwga2V5LCBhKSB7XG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBudW1UcmFuc2Zvcm1lcnM7IGkrKykge1xuICAgICAgICAgICAgdiA9IHRyYW5zZm9ybWVyc1tpXSh2LCBrZXksIGEpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHY7XG4gICAgfTtcbn07XG5cbnZhciBjcmVhdGVEZWxpbWl0ZWQgPSBleHBvcnRzLmNyZWF0ZURlbGltaXRlZCA9IGZ1bmN0aW9uICh2YWx1ZXMsIHRlcm1zLCBkZWxpbWl0ZXIsIGNob3ApIHtcbiAgICB2YXIgbnVtVGVybXMgPSB0ZXJtcy5sZW5ndGg7XG4gICAgdmFyIGNvbWJpbmVkID0gJyc7XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IG51bVRlcm1zOyBpKyspIHtcbiAgICAgICAgdmFyIHRlcm0gPSB0ZXJtc1tpXTtcbiAgICAgICAgaWYgKHZhbHVlcy5oYXNPd25Qcm9wZXJ0eSh0ZXJtKSkge1xuICAgICAgICAgICAgY29tYmluZWQgKz0gdmFsdWVzW3Rlcm1dICsgZGVsaW1pdGVyO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGNob3ApIHtcbiAgICAgICAgY29tYmluZWQgPSBjb21iaW5lZC5zbGljZSgwLCAtY2hvcCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbWJpbmVkO1xufTtcblxuLypcbiAgICBDcmVhdGUgYSBmdW5jdGlvbiBzdHJpbmdcblxuICAgICcyMHB4JywgJ3RyYW5zbGF0ZScgLT4gJ3RyYW5zbGF0ZSgyMHB4KSdcblxuICAgIEBwYXJhbSBbc3RyaW5nXVxuICAgIEBwYXJhbSBbc3RyaW5nXVxuICAgIEByZXR1cm4gW3N0cmluZ11cbiovXG52YXIgY3JlYXRlRnVuY3Rpb25TdHJpbmcgPSBleHBvcnRzLmNyZWF0ZUZ1bmN0aW9uU3RyaW5nID0gZnVuY3Rpb24gKHZhbHVlLCBwcmVmaXgpIHtcbiAgICByZXR1cm4gcHJlZml4ICsgJygnICsgdmFsdWUgKyAnKSc7XG59O1xuXG4vKlxuICAgIEdlbmVyYXRlIGN1cnJlbnQgdGltZXN0YW1wXG4gICAgXG4gICAgQHJldHVybiBbdGltZXN0YW1wXTogQ3VycmVudCBVTklYIHRpbWVzdGFtcFxuKi9cbnZhciBjdXJyZW50VGltZSA9IGV4cG9ydHMuY3VycmVudFRpbWUgPSBIQVNfUEVSRk9STUFOQ0VfTk9XID8gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBwZXJmb3JtYW5jZS5ub3coKTtcbn0gOiBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xufTtcblxuLypcbiAgICBTcGxpdCBjb2xvciBzdHJpbmcgaW50byBtYXAgb2YgY29sb3IgcHJvcGVydGllc1xuXG4gICAgXCJyZ2JhKDI1NSwgMjU1LCAyNTUsIDApXCIsIFtcIlJlZFwiLCAnR3JlZW5cIiwgXCJCbHVlXCIsIFwiQWxwaGFcIl1cblxuICAgIHsgUmVkOiAyNTUuLi4gfVxuKi9cbnZhciBnZXRDb2xvclZhbHVlcyA9IGV4cG9ydHMuZ2V0Q29sb3JWYWx1ZXMgPSBmdW5jdGlvbiAodmFsdWUsIGNvbG9yVGVybXMpIHtcbiAgICB2YXIgbnVtQ29sb3JUZXJtcyA9IGNvbG9yVGVybXMubGVuZ3RoO1xuICAgIHZhciBjb2xvclZhbHVlcyA9IHt9O1xuICAgIHZhciBjb2xvcnMgPSBzcGxpdENvbW1hRGVsaW1pdGVkKGdldFZhbHVlRnJvbUZ1bmN0aW9uU3RyaW5nKHZhbHVlKSk7XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IG51bUNvbG9yVGVybXM7IGkrKykge1xuICAgICAgICBjb2xvclZhbHVlc1tjb2xvclRlcm1zW2ldXSA9IGNvbG9yc1tpXSAhPT0gdW5kZWZpbmVkID8gY29sb3JzW2ldIDogMTtcbiAgICB9XG5cbiAgICByZXR1cm4gY29sb3JWYWx1ZXM7XG59O1xuXG4vKlxuICAgIEdldCB2YWx1ZSBmcm9tIGZ1bmN0aW9uIHN0cmluZ1xuXG4gICAgXCJ0cmFuc2xhdGVYKDIwcHgpXCIgLT4gXCIyMHB4XCJcbiovXG52YXIgZ2V0VmFsdWVGcm9tRnVuY3Rpb25TdHJpbmcgPSBleHBvcnRzLmdldFZhbHVlRnJvbUZ1bmN0aW9uU3RyaW5nID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgcmV0dXJuIHZhbHVlLnN1YnN0cmluZyh2YWx1ZS5pbmRleE9mKCcoJykgKyAxLCB2YWx1ZS5sYXN0SW5kZXhPZignKScpKTtcbn07XG5cbi8qXG4gICAgQ2hlY2sgaWYgdHdvIG9iamVjdHMgaGF2ZSBjaGFuZ2VkIGZyb20gZWFjaCBvdGhlclxuICAgIFxuICAgIEBwYXJhbSBbb2JqZWN0XTogSW5wdXQgQVxuICAgIEBwYXJhbSBbb2JqZWN0XTogSW5wdXQgQlxuICAgIEByZXR1cm4gW2Jvb2xlYW5dOiBUcnVlIGlmIGRpZmZlcmVudFxuKi9cbnZhciBoYXNDaGFuZ2VkID0gZXhwb3J0cy5oYXNDaGFuZ2VkID0gZnVuY3Rpb24gKGEsIGIpIHtcbiAgICB2YXIgY2hhbmdlZCA9IGZhbHNlO1xuXG4gICAgZm9yICh2YXIga2V5IGluIGEpIHtcbiAgICAgICAgaWYgKGEuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgICAgaWYgKGhhc1Byb3BlcnR5KGIsIGtleSkpIHtcbiAgICAgICAgICAgICAgICBpZiAoYVtrZXldICE9PSBiW2tleV0pIHtcbiAgICAgICAgICAgICAgICAgICAgY2hhbmdlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjaGFuZ2VkID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBjaGFuZ2VkO1xufTtcblxuLypcbiAgICBDaGVjayBpZiBvYmplY3QgaGFzIHByb3BlcnR5IGFuZCBpdCBpc24ndCB1bmRlZmluZWRcblxuICAgIEBwYXJhbSBbb2JqZWN0XVxuICAgIEBwYXJhbSBbc3RyaW5nXVxuICAgIEByZXR1cm4gW2Jvb2xlYW5dXG4qL1xudmFyIGhhc1Byb3BlcnR5ID0gZXhwb3J0cy5oYXNQcm9wZXJ0eSA9IGZ1bmN0aW9uIChvYmplY3QsIHByb3BlcnR5TmFtZSkge1xuICAgIHJldHVybiBvYmplY3QuaGFzT3duUHJvcGVydHkocHJvcGVydHlOYW1lKSAmJiBvYmplY3RbcHJvcGVydHlOYW1lXSAhPT0gdW5kZWZpbmVkO1xufTtcblxuLypcbiAgICBJcyB1dGlscyB2YXIgYW4gYXJyYXkgPyBcbiAgICBcbiAgICBAcGFyYW06IFZhcmlhYmxlIHRvIHRlc3RcbiAgICBAcmV0dXJuIFtib29sZWFuXTogUmV0dXJucyB0cnVlIGlmIHV0aWxzLnZhclR5cGUgPT09ICdBcnJheSdcbiovXG52YXIgaXNBcnJheSA9IGV4cG9ydHMuaXNBcnJheSA9IGZ1bmN0aW9uIChhcnIpIHtcbiAgICByZXR1cm4gdmFyVHlwZShhcnIpID09PSAnQXJyYXknO1xufTtcblxuLypcbiAgICBJcyB1dGlscyB2YXIgYSBmdW5jdGlvbiA/IFxuICAgIFxuICAgIEBwYXJhbTogVmFyaWFibGUgdG8gdGVzdFxuICAgIEByZXR1cm4gW2Jvb2xlYW5dOiBSZXR1cm5zIHRydWUgaWYgdXRpbHMudmFyVHlwZSA9PT0gJ0Z1bmN0aW9uJ1xuKi9cbnZhciBpc0Z1bmMgPSBleHBvcnRzLmlzRnVuYyA9IGZ1bmN0aW9uIChvYmopIHtcbiAgICByZXR1cm4gdmFyVHlwZShvYmopID09PSAnRnVuY3Rpb24nO1xufTtcblxuLypcbiAgICBJcyB1dGlscyB2YXIgYSBudW1iZXI/XG4gICAgXG4gICAgQHBhcmFtOiBWYXJpYWJsZSB0byB0ZXN0XG4gICAgQHJldHVybiBbYm9vbGVhbl06IFJldHVybnMgdHJ1ZSBpZiB0eXBlb2YgPT09ICdudW1iZXInXG4qL1xudmFyIGlzTnVtID0gZXhwb3J0cy5pc051bSA9IGZ1bmN0aW9uIChudW0pIHtcbiAgICByZXR1cm4gdHlwZW9mIG51bSA9PT0gJ251bWJlcic7XG59O1xuXG4vKlxuICAgIElzIHV0aWxzIHZhciBhbiBvYmplY3Q/XG4gICAgXG4gICAgQHBhcmFtOiBWYXJpYWJsZSB0byB0ZXN0XG4gICAgQHJldHVybiBbYm9vbGVhbl06IFJldHVybnMgdHJ1ZSBpZiB0eXBlb2YgPT09ICdvYmplY3QnXG4qL1xudmFyIGlzT2JqID0gZXhwb3J0cy5pc09iaiA9IGZ1bmN0aW9uIChvYmopIHtcbiAgICByZXR1cm4gdHlwZW9mIG9iaiA9PT0gJ29iamVjdCc7XG59O1xuXG4vKlxuICAgIElzIHV0aWxzIGEgcmVsYXRpdmUgdmFsdWUgYXNzaWdubWVudD9cbiAgICBcbiAgICBAcGFyYW0gW3N0cmluZ106IFZhcmlhYmxlIHRvIHRlc3RcbiAgICBAcmV0dXJuIFtib29sZWFuXTogSWYgdXRpbHMgbG9va3MgbGlrZSBhIHJlbGF0aXZlIHZhbHVlIGFzc2lnbm1lbnRcbiovXG52YXIgaXNSZWxhdGl2ZVZhbHVlID0gZXhwb3J0cy5pc1JlbGF0aXZlVmFsdWUgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICByZXR1cm4gdmFsdWUgJiYgdmFsdWUuaW5kZXhPZiAmJiB2YWx1ZS5pbmRleE9mKCc9JykgPiAwID8gdHJ1ZSA6IGZhbHNlO1xufTtcblxuLypcbiAgICBJcyB1dGlscyB2YXIgYSBzdHJpbmcgPyBcbiAgICBcbiAgICBAcGFyYW06IFZhcmlhYmxlIHRvIHRlc3RcbiAgICBAcmV0dXJuIFtib29sZWFuXTogUmV0dXJucyB0cnVlIGlmIHR5cGVvZiBzdHIgPT09ICdzdHJpbmcnXG4qL1xudmFyIGlzU3RyaW5nID0gZXhwb3J0cy5pc1N0cmluZyA9IGZ1bmN0aW9uIChzdHIpIHtcbiAgICByZXR1cm4gdHlwZW9mIHN0ciA9PT0gJ3N0cmluZyc7XG59O1xuXG4vKlxuICAgIEBwYXJhbSBbc3RyaW5nIHx8IE5vZGVMaXN0XTpcbiAgICAgICAgSWYgc3RyaW5nLCB0cmVhdGVkIGFzIHNlbGVjdG9yLlxuICAgICAgICBJZiBub3QsIHRyZWF0ZWQgYXMgcHJlZXhpc3RpbmcgTm9kZUxpc3RcblxuICAgIEByZXR1cm4gW0FycmF5XVxuKi9cbnZhciBzZWxlY3REb20gPSBleHBvcnRzLnNlbGVjdERvbSA9IGZ1bmN0aW9uIChzZWxlY3Rvcikge1xuICAgIHZhciBub2RlcyA9IHR5cGVvZiBzZWxlY3RvciA9PT0gJ3N0cmluZycgPyBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9yKSA6IHNlbGVjdG9yO1xuICAgIHJldHVybiBub2Rlcy5sZW5ndGggPyBbXS5zbGljZS5jYWxsKG5vZGVzKSA6IFtdLnB1c2gobm9kZXMpO1xufTtcblxuLypcbiAgICBTcGxpdCBjb21tYS1kZWxpbWl0ZWQgc3RyaW5nXG5cbiAgICBcImZvbyxiYXJcIiAtPiBbXCJmb29cIiwgXCJiYXJcIl1cblxuICAgIEBwYXJhbSBbc3RyaW5nXVxuICAgIEByZXR1cm4gW2FycmF5XVxuKi9cbnZhciBzcGxpdENvbW1hRGVsaW1pdGVkID0gZXhwb3J0cy5zcGxpdENvbW1hRGVsaW1pdGVkID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgcmV0dXJuIGlzU3RyaW5nKHZhbHVlKSA/IHZhbHVlLnNwbGl0KC8sXFxzKi8pIDogW3ZhbHVlXTtcbn07XG5cbi8qXG4gICAgU3BsaXQgc3BhY2UtZGVsaW1pdGVkIHN0cmluZ1xuXG4gICAgXCJmb28gYmFyXCIgLT4gW1wiZm9vXCIsIFwiYmFyXCJdXG5cbiAgICBAcGFyYW0gW3N0cmluZ11cbiAgICBAcmV0dXJuIFthcnJheV1cbiovXG52YXIgc3BsaXRTcGFjZURlbGltaXRlZCA9IGV4cG9ydHMuc3BsaXRTcGFjZURlbGltaXRlZCA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgIHJldHVybiBpc1N0cmluZyh2YWx1ZSkgPyB2YWx1ZS5zcGxpdCgnICcpIDogW3ZhbHVlXTtcbn07XG5cbi8qXG4gICAgU3BsaXQgYSB2YWx1ZSBpbnRvIGEgdmFsdWUvdW5pdCBvYmplY3RcbiAgICBcbiAgICAgICAgXCIyMDBweFwiIC0+IHsgdmFsdWU6IDIwMCwgdW5pdDogXCJweFwiIH1cbiAgICAgICAgXG4gICAgQHBhcmFtIFtzdHJpbmddOiBWYWx1ZSB0byBzcGxpdFxuICAgIEByZXR1cm4gW29iamVjdF06IE9iamVjdCB3aXRoIHZhbHVlIGFuZCB1bml0IHByb3BzXG4qL1xudmFyIHNwbGl0VmFsdWVVbml0ID0gZXhwb3J0cy5zcGxpdFZhbHVlVW5pdCA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgIHZhciBzcGxpdFZhbCA9IHZhbHVlLm1hdGNoKC8oLT9cXGQqXFwuP1xcZCopKC4qKS8pO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgdmFsdWU6IHBhcnNlRmxvYXQoc3BsaXRWYWxbMV0pLFxuICAgICAgICB1bml0OiBzcGxpdFZhbFsyXVxuICAgIH07XG59O1xuXG4vKlxuICAgIENvbnZlcnQgbnVtYmVyIHRvIHggZGVjaW1hbCBwbGFjZXNcblxuICAgIEBwYXJhbSBbbnVtYmVyXVxuICAgIEBwYXJhbSBbbnVtYmVyXVxuICAgIEByZXR1cm4gW251bWJlcl1cbiovXG52YXIgdG9EZWNpbWFsID0gZXhwb3J0cy50b0RlY2ltYWwgPSBmdW5jdGlvbiAobnVtKSB7XG4gICAgdmFyIHByZWNpc2lvbiA9IGFyZ3VtZW50cy5sZW5ndGggPD0gMSB8fCBhcmd1bWVudHNbMV0gPT09IHVuZGVmaW5lZCA/IDIgOiBhcmd1bWVudHNbMV07XG5cbiAgICBwcmVjaXNpb24gPSBNYXRoLnBvdygxMCwgcHJlY2lzaW9uKTtcbiAgICByZXR1cm4gTWF0aC5yb3VuZChudW0gKiBwcmVjaXNpb24pIC8gcHJlY2lzaW9uO1xufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbk55WXk5cGJtTXZkWFJwYkhNdWFuTWlYU3dpYm1GdFpYTWlPbHRkTENKdFlYQndhVzVuY3lJNklqczdPMEZCUVVFc1NVRkJUU3h4UWtGQmNVSXNhVUpCUVhKQ08wRkJRMDRzU1VGQlRTeHRRa0ZCYlVJc1QwRkJia0k3UVVGRFRpeEpRVUZOTEhOQ1FVRjFRaXhQUVVGUExGZEJRVkFzUzBGQmRVSXNWMEZCZGtJc1NVRkJjME1zV1VGQldTeEhRVUZhT3pzN096czdPenRCUVZGdVJTeEpRVUZOTEZWQlFWVTdWMEZCV1N4UFFVRlBMRk5CUVZBc1EwRkJhVUlzVVVGQmFrSXNRMEZCTUVJc1NVRkJNVUlzUTBGQkswSXNVVUZCTDBJc1JVRkJlVU1zUzBGQmVrTXNRMEZCSzBNc1EwRkJMME1zUlVGQmEwUXNRMEZCUXl4RFFVRkVPME5CUVRsRU96czdPenM3T3p0QlFWRlVMRWxCUVUwc2IwTkJRV01zVlVGQlF5eE5RVUZFTzFkQlFWa3NUMEZCVHl4UFFVRlFMRU5CUVdVc2EwSkJRV1lzUlVGQmJVTXNaMEpCUVc1RExFVkJRWEZFTEZkQlFYSkVPME5CUVZvN096czdPenM3T3p0QlFWTndRaXhKUVVGTkxHOUVRVUZ6UWl4VlFVRkRMRmxCUVVRc1JVRkJhMEk3UVVGRGFrUXNVVUZCVFN4clFrRkJhMElzWVVGQllTeE5RVUZpTEVOQlJIbENPMEZCUldwRUxGRkJRVWtzU1VGQlNTeERRVUZLT3pzN096czdPenRCUVVZMlF5eFhRVlV4UXl4VlFVRkRMRU5CUVVRc1JVRkJTU3hIUVVGS0xFVkJRVk1zUTBGQlZDeEZRVUZsTzBGQlEyeENMR0ZCUVVzc1NVRkJTU3hEUVVGS0xFVkJRVThzU1VGQlNTeGxRVUZLTEVWQlFYRkNMRWRCUVdwRExFVkJRWE5ETzBGQlEyeERMR2RDUVVGSkxHRkJRV0VzUTBGQllpeEZRVUZuUWl4RFFVRm9RaXhGUVVGdFFpeEhRVUZ1UWl4RlFVRjNRaXhEUVVGNFFpeERRVUZLTEVOQlJHdERPMU5CUVhSRE96dEJRVWxCTEdWQlFVOHNRMEZCVUN4RFFVeHJRanRMUVVGbUxFTkJWakJETzBOQlFXeENPenRCUVcxQ05VSXNTVUZCVFN3MFEwRkJhMElzVlVGQlF5eE5RVUZFTEVWQlFWTXNTMEZCVkN4RlFVRm5RaXhUUVVGb1FpeEZRVUV5UWl4SlFVRXpRaXhGUVVGdlF6dEJRVU12UkN4UlFVRk5MRmRCUVZjc1RVRkJUU3hOUVVGT0xFTkJSRGhETzBGQlJTOUVMRkZCUVVrc1YwRkJWeXhGUVVGWUxFTkJSakpFT3p0QlFVa3ZSQ3hUUVVGTExFbEJRVWtzU1VGQlNTeERRVUZLTEVWQlFVOHNTVUZCU1N4UlFVRktMRVZCUVdNc1IwRkJPVUlzUlVGQmJVTTdRVUZETDBJc1dVRkJUU3hQUVVGUExFMUJRVTBzUTBGQlRpeERRVUZRTEVOQlJIbENPMEZCUlM5Q0xGbEJRVWtzVDBGQlR5eGpRVUZRTEVOQlFYTkNMRWxCUVhSQ0xFTkJRVW9zUlVGQmFVTTdRVUZETjBJc2QwSkJRVmtzVDBGQlR5eEpRVUZRTEVsQlFXVXNVMEZCWml4RFFVUnBRanRUUVVGcVF6dExRVVpLT3p0QlFVOUJMRkZCUVVrc1NVRkJTaXhGUVVGVk8wRkJRMDRzYlVKQlFWY3NVMEZCVXl4TFFVRlVMRU5CUVdVc1EwRkJaaXhGUVVGclFpeERRVUZETEVsQlFVUXNRMEZCTjBJc1EwRkVUVHRMUVVGV096dEJRVWxCTEZkQlFVOHNVVUZCVUN4RFFXWXJSRHREUVVGd1F6czdPenM3T3pzN096czdRVUV5UW5oQ0xFbEJRVTBzYzBSQlFYVkNMRlZCUVVNc1MwRkJSQ3hGUVVGUkxFMUJRVkk3VjBGQmMwSXNaVUZCVlR0RFFVRm9RenM3T3pzN096dEJRVTgzUWl4SlFVRk5MRzlEUVVGakxITkNRVUZ6UWp0WFFVRk5MRmxCUVZrc1IwRkJXanREUVVGT0xFZEJRVEJDTzFkQlFVMHNTVUZCU1N4SlFVRktMRWRCUVZjc1QwRkJXRHREUVVGT096czdPenM3T3pzN1FVRlRjRVVzU1VGQlRTd3dRMEZCYVVJc1ZVRkJReXhMUVVGRUxFVkJRVkVzVlVGQlVpeEZRVUYxUWp0QlFVTnFSQ3hSUVVGTkxHZENRVUZuUWl4WFFVRlhMRTFCUVZnc1EwRkVNa0k3UVVGRmFrUXNVVUZCVFN4alFVRmpMRVZCUVdRc1EwRkdNa003UVVGSGFrUXNVVUZCVFN4VFFVRlRMRzlDUVVGdlFpd3lRa0ZCTWtJc1MwRkJNMElzUTBGQmNFSXNRMEZCVkN4RFFVZ3lRenM3UVVGTGFrUXNVMEZCU3l4SlFVRkpMRWxCUVVrc1EwRkJTaXhGUVVGUExFbEJRVWtzWVVGQlNpeEZRVUZ0UWl4SFFVRnVReXhGUVVGM1F6dEJRVU53UXl4dlFrRkJXU3hYUVVGWExFTkJRVmdzUTBGQldpeEpRVUUyUWl4TlFVRkRMRU5CUVU4c1EwRkJVQ3hOUVVGakxGTkJRV1FzUjBGQk1rSXNUMEZCVHl4RFFVRlFMRU5CUVRWQ0xFZEJRWGRETEVOQlFYaERMRU5CUkU4N1MwRkJlRU03TzBGQlNVRXNWMEZCVHl4WFFVRlFMRU5CVkdsRU8wTkJRWFpDT3pzN096czdPMEZCYVVKMlFpeEpRVUZOTEd0RlFVRTJRaXhWUVVGRExFdEJRVVE3VjBGQlZ5eE5RVUZOTEZOQlFVNHNRMEZCWjBJc1RVRkJUU3hQUVVGT0xFTkJRV01zUjBGQlpDeEpRVUZ4UWl4RFFVRnlRaXhGUVVGM1FpeE5RVUZOTEZkQlFVNHNRMEZCYTBJc1IwRkJiRUlzUTBGQmVFTTdRMEZCV0RzN096czdPenM3TzBGQlUyNURMRWxCUVUwc2EwTkJRV0VzVlVGQlF5eERRVUZFTEVWQlFVa3NRMEZCU2l4RlFVRlZPMEZCUTJoRExGRkJRVWtzVlVGQlZTeExRVUZXTEVOQlJEUkNPenRCUVVkb1F5eFRRVUZMTEVsQlFVa3NSMEZCU2l4SlFVRlhMRU5CUVdoQ0xFVkJRVzFDTzBGQlEyWXNXVUZCU1N4RlFVRkZMR05CUVVZc1EwRkJhVUlzUjBGQmFrSXNRMEZCU2l4RlFVRXlRanRCUVVOMlFpeG5Ra0ZCU1N4WlFVRlpMRU5CUVZvc1JVRkJaU3hIUVVGbUxFTkJRVW9zUlVGQmVVSTdRVUZEY2tJc2IwSkJRVWtzUlVGQlJTeEhRVUZHTEUxQlFWY3NSVUZCUlN4SFFVRkdMRU5CUVZnc1JVRkJiVUk3UVVGRGJrSXNPRUpCUVZVc1NVRkJWaXhEUVVSdFFqdHBRa0ZCZGtJN1lVRkVTaXhOUVVsUE8wRkJRMGdzTUVKQlFWVXNTVUZCVml4RFFVUkhPMkZCU2xBN1UwRkVTanRMUVVSS096dEJRVmxCTEZkQlFVOHNUMEZCVUN4RFFXWm5RenREUVVGV096czdPenM3T3pzN1FVRjVRbTVDTEVsQlFVMHNiME5CUVdNc1ZVRkJReXhOUVVGRUxFVkJRVk1zV1VGQlZEdFhRVUV3UWl4UFFVRlBMR05CUVZBc1EwRkJjMElzV1VGQmRFSXNTMEZCZFVNc1QwRkJUeXhaUVVGUUxFMUJRWGxDTEZOQlFYcENPME5CUVdwRk96czdPenM3T3p0QlFWRndRaXhKUVVGTkxEUkNRVUZWTEZWQlFVTXNSMEZCUkR0WFFVRlRMRkZCUVZFc1IwRkJVaXhOUVVGcFFpeFBRVUZxUWp0RFFVRlVPenM3T3pzN096dEJRVkZvUWl4SlFVRk5MREJDUVVGVExGVkJRVU1zUjBGQlJEdFhRVUZUTEZGQlFWRXNSMEZCVWl4TlFVRnBRaXhWUVVGcVFqdERRVUZVT3pzN096czdPenRCUVZGbUxFbEJRVTBzZDBKQlFWRXNWVUZCUXl4SFFVRkVPMWRCUVZNc1QwRkJUeXhIUVVGUUxFdEJRV1VzVVVGQlpqdERRVUZVT3pzN096czdPenRCUVZGa0xFbEJRVTBzZDBKQlFWRXNWVUZCUXl4SFFVRkVPMWRCUVZNc1QwRkJUeXhIUVVGUUxFdEJRV1VzVVVGQlpqdERRVUZVT3pzN096czdPenRCUVZGa0xFbEJRVTBzTkVOQlFXdENMRlZCUVVNc1MwRkJSRHRYUVVGWExFdEJRVU1zU1VGQlV5eE5RVUZOTEU5QlFVNHNTVUZCYVVJc1RVRkJUU3hQUVVGT0xFTkJRV01zUjBGQlpDeEpRVUZ4UWl4RFFVRnlRaXhIUVVFd1FpeEpRVUZ5UkN4SFFVRTBSQ3hMUVVFMVJEdERRVUZZT3pzN096czdPenRCUVZGNFFpeEpRVUZOTERoQ1FVRlhMRlZCUVVNc1IwRkJSRHRYUVVGVExFOUJRVThzUjBGQlVDeExRVUZsTEZGQlFXWTdRMEZCVkRzN096czdPenM3TzBGQlUycENMRWxCUVUwc1owTkJRVmtzVlVGQlF5eFJRVUZFTEVWQlFXTTdRVUZEYmtNc1VVRkJUU3hSUVVGUkxFOUJRVkVzVVVGQlVDeExRVUZ2UWl4UlFVRndRaXhIUVVGblF5eFRRVUZUTEdkQ1FVRlVMRU5CUVRCQ0xGRkJRVEZDTEVOQlFXcERMRWRCUVhWRkxGRkJRWFpGTEVOQlJIRkNPMEZCUlc1RExGZEJRVThzUzBGQlF5eERRVUZOTEUxQlFVNHNSMEZCWjBJc1IwRkJSeXhMUVVGSUxFTkJRVk1zU1VGQlZDeERRVUZqTEV0QlFXUXNRMEZCYWtJc1IwRkJkME1zUjBGQlJ5eEpRVUZJTEVOQlFWRXNTMEZCVWl4RFFVRjRReXhEUVVZMFFqdERRVUZrT3pzN096czdPenM3TzBGQllXeENMRWxCUVUwc2IwUkJRWE5DTEZWQlFVTXNTMEZCUkR0WFFVRlhMRk5CUVZNc1MwRkJWQ3hKUVVGclFpeE5RVUZOTEV0QlFVNHNRMEZCV1N4TlFVRmFMRU5CUVd4Q0xFZEJRWGRETEVOQlFVTXNTMEZCUkN4RFFVRjRRenREUVVGWU96czdPenM3T3pzN08wRkJWVFZDTEVsQlFVMHNiMFJCUVhOQ0xGVkJRVU1zUzBGQlJEdFhRVUZYTEZOQlFWTXNTMEZCVkN4SlFVRnJRaXhOUVVGTkxFdEJRVTRzUTBGQldTeEhRVUZhTEVOQlFXeENMRWRCUVhGRExFTkJRVU1zUzBGQlJDeERRVUZ5UXp0RFFVRllPenM3T3pzN096czdPMEZCVlRWQ0xFbEJRVTBzTUVOQlFXbENMRlZCUVVNc1MwRkJSQ3hGUVVGWE8wRkJRM0pETEZGQlFVMHNWMEZCVnl4TlFVRk5MRXRCUVU0c1EwRkJXU3h0UWtGQldpeERRVUZZTEVOQlJDdENPenRCUVVkeVF5eFhRVUZQTzBGQlEwZ3NaVUZCVHl4WFFVRlhMRk5CUVZNc1EwRkJWQ3hEUVVGWUxFTkJRVkE3UVVGRFFTeGpRVUZQTEZOQlFWTXNRMEZCVkN4RFFVRlFPMHRCUmtvc1EwRkljVU03UTBGQldEczdPenM3T3pzN08wRkJaMEoyUWl4SlFVRk5MR2REUVVGWkxGVkJRVU1zUjBGQlJDeEZRVUYzUWp0UlFVRnNRaXhyUlVGQldTeHBRa0ZCVFRzN1FVRkROME1zZVVKQlFWa3NTVUZCVFN4VlFVRnNRaXhEUVVRMlF6dEJRVVUzUXl4WFFVRlBMRXRCUVVzc1MwRkJUQ3hEUVVGWExFMUJRVTBzVTBGQlRpeERRVUZZTEVkQlFUaENMRk5CUVRsQ0xFTkJSbk5ETzBOQlFYaENJaXdpWm1sc1pTSTZJblYwYVd4ekxtcHpJaXdpYzI5MWNtTmxVbTl2ZENJNklpOVZjMlZ5Y3k5TllYUjBMMU5wZEdWekwzQnZjRzF2ZEdsdmJpSXNJbk52ZFhKalpYTkRiMjUwWlc1MElqcGJJbU52Ym5OMElFTkJUVVZNWDBOQlUwVmZVRUZVVkVWU1RpQTlJQzhvVzJFdGVsMHBLRnRCTFZwZEtTOW5PMXh1WTI5dWMzUWdVa1ZRVEVGRFJWOVVSVTFRVEVGVVJTQTlJQ2NrTVMwa01pYzdYRzVqYjI1emRDQklRVk5mVUVWU1JrOVNUVUZPUTBWZlRrOVhJRDBnS0hSNWNHVnZaaUJ3WlhKbWIzSnRZVzVqWlNBaFBUMGdKM1Z1WkdWbWFXNWxaQ2NnSmlZZ2NHVnlabTl5YldGdVkyVXVibTkzS1R0Y2JseHVMeXBjYmlBZ0lDQkhaWFFnZG1GeUlIUjVjR1VnWVhNZ2MzUnlhVzVuWEc0Z0lDQWdYRzRnSUNBZ1FIQmhjbUZ0T2lCV1lYSnBZV0pzWlNCMGJ5QjBaWE4wWEc0Z0lDQWdRSEpsZEhWeWJpQmJjM1J5YVc1blhUb2dVbVYwZFhKdWN5d2dabTl5SUdsdWMzUmhibU5sSUNkUFltcGxZM1FuSUdsbUlGdHZZbXBsWTNRZ1QySnFaV04wWFZ4dUtpOWNibU52Ym5OMElIWmhjbFI1Y0dVZ1BTQjJZWEpwWVdKc1pTQTlQaUJQWW1wbFkzUXVjSEp2ZEc5MGVYQmxMblJ2VTNSeWFXNW5MbU5oYkd3b2RtRnlhV0ZpYkdVcExuTnNhV05sS0Rnc0lDMHhLVHRjYmx4dUx5cGNiaUFnSUNCRGIyNTJaWEowSUdOaGJXVnNRMkZ6WlNCMGJ5QmtZWE5vTFdOaGMyVmNibHh1SUNBZ0lFQndZWEpoYlNCYmMzUnlhVzVuWFZ4dUlDQWdJRUJ5WlhSMWNtNGdXM04wY21sdVoxMWNiaW92WEc1bGVIQnZjblFnWTI5dWMzUWdZMkZ0Wld4VWIwUmhjMmdnUFNBb2MzUnlhVzVuS1NBOVBpQnpkSEpwYm1jdWNtVndiR0ZqWlNoRFFVMUZURjlEUVZORlgxQkJWRlJGVWs0c0lGSkZVRXhCUTBWZlZFVk5VRXhCVkVVcExuUnZURzkzWlhKRFlYTmxLQ2s3WEc1Y2JpOHFYRzRnSUNBZ1EyOXRZbWx1WlNCMGNtRnVjMlp2Y20xbGNuTWdhVzUwYnlCdmJtVWdablZ1WTNScGIyNGdkR2hoZENCallXeHNjeUJsZG1WeWVWeHVJQ0FnSUhSeVlXNXpabTl5YldWeUlHbHVJSFJvWlNCaGNuSmhlU0JoYm1RZ2NtVjBkWEp1Y3lCMGFHVWdjbVZ6ZFd4MFhHNWNiaUFnSUNCQWNHRnlZVzBnVzJGeWNtRjVYVnh1SUNBZ0lFQnlaWFIxY200Z1cyWjFibU4wYVc5dVhWeHVLaTljYm1WNGNHOXlkQ0JqYjI1emRDQmpiMjFpYVc1bFZISmhibk5tYjNKdFpYSnpJRDBnS0hSeVlXNXpabTl5YldWeWN5a2dQVDRnZTF4dUlDQWdJR052Ym5OMElHNTFiVlJ5WVc1elptOXliV1Z5Y3lBOUlIUnlZVzV6Wm05eWJXVnljeTVzWlc1bmRHZzdYRzRnSUNBZ2JHVjBJR2tnUFNBd08xeHVYRzRnSUNBZ0x5cGNiaUFnSUNBZ0lDQWdRSEJoY21GdElGdHVkVzFpWlhKZFhHNGdJQ0FnSUNBZ0lFQndZWEpoYlNCYmMzUnlhVzVuWFZ4dUlDQWdJQ0FnSUNCQWNHRnlZVzBnVzBGamRHbHZibDFjYmlBZ0lDQWdJQ0FnUUhKbGRIVnliaUJiYm5WdFltVnlYVnh1SUNBZ0lDb3ZYRzRnSUNBZ2NtVjBkWEp1SUNoMkxDQnJaWGtzSUdFcElEMCtJSHRjYmlBZ0lDQWdJQ0FnWm05eUlDaHBJRDBnTURzZ2FTQThJRzUxYlZSeVlXNXpabTl5YldWeWN6c2dhU3NyS1NCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0IySUQwZ2RISmhibk5tYjNKdFpYSnpXMmxkS0hZc0lHdGxlU3dnWVNrN1hHNGdJQ0FnSUNBZ0lIMWNibHh1SUNBZ0lDQWdJQ0J5WlhSMWNtNGdkanRjYmlBZ0lDQjlPMXh1ZlR0Y2JseHVaWGh3YjNKMElHTnZibk4wSUdOeVpXRjBaVVJsYkdsdGFYUmxaQ0E5SUNoMllXeDFaWE1zSUhSbGNtMXpMQ0JrWld4cGJXbDBaWElzSUdOb2IzQXBJRDArSUh0Y2JpQWdJQ0JqYjI1emRDQnVkVzFVWlhKdGN5QTlJSFJsY20xekxteGxibWQwYUR0Y2JpQWdJQ0JzWlhRZ1kyOXRZbWx1WldRZ1BTQW5KenRjYmx4dUlDQWdJR1p2Y2lBb2JHVjBJR2tnUFNBd095QnBJRHdnYm5WdFZHVnliWE03SUdrckt5a2dlMXh1SUNBZ0lDQWdJQ0JqYjI1emRDQjBaWEp0SUQwZ2RHVnliWE5iYVYwN1hHNGdJQ0FnSUNBZ0lHbG1JQ2gyWVd4MVpYTXVhR0Z6VDNkdVVISnZjR1Z5ZEhrb2RHVnliU2twSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJR052YldKcGJtVmtJQ3M5SUhaaGJIVmxjMXQwWlhKdFhTQXJJR1JsYkdsdGFYUmxjanRjYmlBZ0lDQWdJQ0FnZlZ4dUlDQWdJSDFjYmx4dUlDQWdJR2xtSUNoamFHOXdLU0I3WEc0Z0lDQWdJQ0FnSUdOdmJXSnBibVZrSUQwZ1kyOXRZbWx1WldRdWMyeHBZMlVvTUN3Z0xXTm9iM0FwTzF4dUlDQWdJSDFjYmx4dUlDQWdJSEpsZEhWeWJpQmpiMjFpYVc1bFpEdGNibjA3WEc1Y2JpOHFYRzRnSUNBZ1EzSmxZWFJsSUdFZ1puVnVZM1JwYjI0Z2MzUnlhVzVuWEc1Y2JpQWdJQ0FuTWpCd2VDY3NJQ2QwY21GdWMyeGhkR1VuSUMwK0lDZDBjbUZ1YzJ4aGRHVW9NakJ3ZUNrblhHNWNiaUFnSUNCQWNHRnlZVzBnVzNOMGNtbHVaMTFjYmlBZ0lDQkFjR0Z5WVcwZ1czTjBjbWx1WjExY2JpQWdJQ0JBY21WMGRYSnVJRnR6ZEhKcGJtZGRYRzRxTDF4dVpYaHdiM0owSUdOdmJuTjBJR055WldGMFpVWjFibU4wYVc5dVUzUnlhVzVuSUQwZ0tIWmhiSFZsTENCd2NtVm1hWGdwSUQwK0lHQWtlM0J5WldacGVIMG9KSHQyWVd4MVpYMHBZRHRjYmx4dUx5cGNiaUFnSUNCSFpXNWxjbUYwWlNCamRYSnlaVzUwSUhScGJXVnpkR0Z0Y0Z4dUlDQWdJRnh1SUNBZ0lFQnlaWFIxY200Z1czUnBiV1Z6ZEdGdGNGMDZJRU4xY25KbGJuUWdWVTVKV0NCMGFXMWxjM1JoYlhCY2Jpb3ZYRzVsZUhCdmNuUWdZMjl1YzNRZ1kzVnljbVZ1ZEZScGJXVWdQU0JJUVZOZlVFVlNSazlTVFVGT1EwVmZUazlYSUQ4Z0tDa2dQVDRnY0dWeVptOXliV0Z1WTJVdWJtOTNLQ2tnT2lBb0tTQTlQaUJ1WlhjZ1JHRjBaU2dwTG1kbGRGUnBiV1VvS1R0Y2JseHVMeXBjYmlBZ0lDQlRjR3hwZENCamIyeHZjaUJ6ZEhKcGJtY2dhVzUwYnlCdFlYQWdiMllnWTI5c2IzSWdjSEp2Y0dWeWRHbGxjMXh1WEc0Z0lDQWdYQ0p5WjJKaEtESTFOU3dnTWpVMUxDQXlOVFVzSURBcFhDSXNJRnRjSWxKbFpGd2lMQ0FuUjNKbFpXNWNJaXdnWENKQ2JIVmxYQ0lzSUZ3aVFXeHdhR0ZjSWwxY2JseHVJQ0FnSUhzZ1VtVmtPaUF5TlRVdUxpNGdmVnh1S2k5Y2JtVjRjRzl5ZENCamIyNXpkQ0JuWlhSRGIyeHZjbFpoYkhWbGN5QTlJQ2gyWVd4MVpTd2dZMjlzYjNKVVpYSnRjeWtnUFQ0Z2UxeHVJQ0FnSUdOdmJuTjBJRzUxYlVOdmJHOXlWR1Z5YlhNZ1BTQmpiMnh2Y2xSbGNtMXpMbXhsYm1kMGFEdGNiaUFnSUNCamIyNXpkQ0JqYjJ4dmNsWmhiSFZsY3lBOUlIdDlPMXh1SUNBZ0lHTnZibk4wSUdOdmJHOXljeUE5SUhOd2JHbDBRMjl0YldGRVpXeHBiV2wwWldRb1oyVjBWbUZzZFdWR2NtOXRSblZ1WTNScGIyNVRkSEpwYm1jb2RtRnNkV1VwS1R0Y2JseHVJQ0FnSUdadmNpQW9iR1YwSUdrZ1BTQXdPeUJwSUR3Z2JuVnRRMjlzYjNKVVpYSnRjenNnYVNzcktTQjdYRzRnSUNBZ0lDQWdJR052Ykc5eVZtRnNkV1Z6VzJOdmJHOXlWR1Z5YlhOYmFWMWRJRDBnS0dOdmJHOXljMXRwWFNBaFBUMGdkVzVrWldacGJtVmtLU0EvSUdOdmJHOXljMXRwWFNBNklERTdYRzRnSUNBZ2ZWeHVYRzRnSUNBZ2NtVjBkWEp1SUdOdmJHOXlWbUZzZFdWek8xeHVmVHRjYmx4dUx5cGNiaUFnSUNCSFpYUWdkbUZzZFdVZ1puSnZiU0JtZFc1amRHbHZiaUJ6ZEhKcGJtZGNibHh1SUNBZ0lGd2lkSEpoYm5Oc1lYUmxXQ2d5TUhCNEtWd2lJQzArSUZ3aU1qQndlRndpWEc0cUwxeHVaWGh3YjNKMElHTnZibk4wSUdkbGRGWmhiSFZsUm5KdmJVWjFibU4wYVc5dVUzUnlhVzVuSUQwZ0tIWmhiSFZsS1NBOVBpQjJZV3gxWlM1emRXSnpkSEpwYm1jb2RtRnNkV1V1YVc1a1pYaFBaaWduS0NjcElDc2dNU3dnZG1Gc2RXVXViR0Z6ZEVsdVpHVjRUMllvSnlrbktTazdYRzVjYmk4cVhHNGdJQ0FnUTJobFkyc2dhV1lnZEhkdklHOWlhbVZqZEhNZ2FHRjJaU0JqYUdGdVoyVmtJR1p5YjIwZ1pXRmphQ0J2ZEdobGNseHVJQ0FnSUZ4dUlDQWdJRUJ3WVhKaGJTQmJiMkpxWldOMFhUb2dTVzV3ZFhRZ1FWeHVJQ0FnSUVCd1lYSmhiU0JiYjJKcVpXTjBYVG9nU1c1d2RYUWdRbHh1SUNBZ0lFQnlaWFIxY200Z1cySnZiMnhsWVc1ZE9pQlVjblZsSUdsbUlHUnBabVpsY21WdWRGeHVLaTljYm1WNGNHOXlkQ0JqYjI1emRDQm9ZWE5EYUdGdVoyVmtJRDBnS0dFc0lHSXBJRDArSUh0Y2JpQWdJQ0JzWlhRZ1kyaGhibWRsWkNBOUlHWmhiSE5sTzF4dVhHNGdJQ0FnWm05eUlDaHNaWFFnYTJWNUlHbHVJR0VwSUh0Y2JpQWdJQ0FnSUNBZ2FXWWdLR0V1YUdGelQzZHVVSEp2Y0dWeWRIa29hMlY1S1NrZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnYVdZZ0tHaGhjMUJ5YjNCbGNuUjVLR0lzSUd0bGVTa3BJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0JwWmlBb1lWdHJaWGxkSUNFOVBTQmlXMnRsZVYwcElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnWTJoaGJtZGxaQ0E5SUhSeWRXVTdYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdmVnh1SUNBZ0lDQWdJQ0FnSUNBZ2ZTQmxiSE5sSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCamFHRnVaMlZrSUQwZ2RISjFaVHRjYmlBZ0lDQWdJQ0FnSUNBZ0lIMWNiaUFnSUNBZ0lDQWdmVnh1SUNBZ0lIMWNibHh1SUNBZ0lISmxkSFZ5YmlCamFHRnVaMlZrTzF4dWZUdGNibHh1THlwY2JpQWdJQ0JEYUdWamF5QnBaaUJ2WW1wbFkzUWdhR0Z6SUhCeWIzQmxjblI1SUdGdVpDQnBkQ0JwYzI0bmRDQjFibVJsWm1sdVpXUmNibHh1SUNBZ0lFQndZWEpoYlNCYmIySnFaV04wWFZ4dUlDQWdJRUJ3WVhKaGJTQmJjM1J5YVc1blhWeHVJQ0FnSUVCeVpYUjFjbTRnVzJKdmIyeGxZVzVkWEc0cUwxeHVaWGh3YjNKMElHTnZibk4wSUdoaGMxQnliM0JsY25SNUlEMGdLRzlpYW1WamRDd2djSEp2Y0dWeWRIbE9ZVzFsS1NBOVBpQnZZbXBsWTNRdWFHRnpUM2R1VUhKdmNHVnlkSGtvY0hKdmNHVnlkSGxPWVcxbEtTQW1KaUJ2WW1wbFkzUmJjSEp2Y0dWeWRIbE9ZVzFsWFNBaFBUMGdkVzVrWldacGJtVmtPMXh1WEc0dktseHVJQ0FnSUVseklIVjBhV3h6SUhaaGNpQmhiaUJoY25KaGVTQS9JRnh1SUNBZ0lGeHVJQ0FnSUVCd1lYSmhiVG9nVm1GeWFXRmliR1VnZEc4Z2RHVnpkRnh1SUNBZ0lFQnlaWFIxY200Z1cySnZiMnhsWVc1ZE9pQlNaWFIxY201eklIUnlkV1VnYVdZZ2RYUnBiSE11ZG1GeVZIbHdaU0E5UFQwZ0owRnljbUY1SjF4dUtpOWNibVY0Y0c5eWRDQmpiMjV6ZENCcGMwRnljbUY1SUQwZ0tHRnljaWtnUFQ0Z2RtRnlWSGx3WlNoaGNuSXBJRDA5UFNBblFYSnlZWGtuTzF4dVhHNHZLbHh1SUNBZ0lFbHpJSFYwYVd4eklIWmhjaUJoSUdaMWJtTjBhVzl1SUQ4Z1hHNGdJQ0FnWEc0Z0lDQWdRSEJoY21GdE9pQldZWEpwWVdKc1pTQjBieUIwWlhOMFhHNGdJQ0FnUUhKbGRIVnliaUJiWW05dmJHVmhibDA2SUZKbGRIVnlibk1nZEhKMVpTQnBaaUIxZEdsc2N5NTJZWEpVZVhCbElEMDlQU0FuUm5WdVkzUnBiMjRuWEc0cUwxeHVaWGh3YjNKMElHTnZibk4wSUdselJuVnVZeUE5SUNodlltb3BJRDArSUhaaGNsUjVjR1VvYjJKcUtTQTlQVDBnSjBaMWJtTjBhVzl1Snp0Y2JseHVMeXBjYmlBZ0lDQkpjeUIxZEdsc2N5QjJZWElnWVNCdWRXMWlaWEkvWEc0Z0lDQWdYRzRnSUNBZ1FIQmhjbUZ0T2lCV1lYSnBZV0pzWlNCMGJ5QjBaWE4wWEc0Z0lDQWdRSEpsZEhWeWJpQmJZbTl2YkdWaGJsMDZJRkpsZEhWeWJuTWdkSEoxWlNCcFppQjBlWEJsYjJZZ1BUMDlJQ2R1ZFcxaVpYSW5YRzRxTDF4dVpYaHdiM0owSUdOdmJuTjBJR2x6VG5WdElEMGdLRzUxYlNrZ1BUNGdkSGx3Wlc5bUlHNTFiU0E5UFQwZ0oyNTFiV0psY2ljN1hHNWNiaThxWEc0Z0lDQWdTWE1nZFhScGJITWdkbUZ5SUdGdUlHOWlhbVZqZEQ5Y2JpQWdJQ0JjYmlBZ0lDQkFjR0Z5WVcwNklGWmhjbWxoWW14bElIUnZJSFJsYzNSY2JpQWdJQ0JBY21WMGRYSnVJRnRpYjI5c1pXRnVYVG9nVW1WMGRYSnVjeUIwY25WbElHbG1JSFI1Y0dWdlppQTlQVDBnSjI5aWFtVmpkQ2RjYmlvdlhHNWxlSEJ2Y25RZ1kyOXVjM1FnYVhOUFltb2dQU0FvYjJKcUtTQTlQaUIwZVhCbGIyWWdiMkpxSUQwOVBTQW5iMkpxWldOMEp6dGNibHh1THlwY2JpQWdJQ0JKY3lCMWRHbHNjeUJoSUhKbGJHRjBhWFpsSUhaaGJIVmxJR0Z6YzJsbmJtMWxiblEvWEc0Z0lDQWdYRzRnSUNBZ1FIQmhjbUZ0SUZ0emRISnBibWRkT2lCV1lYSnBZV0pzWlNCMGJ5QjBaWE4wWEc0Z0lDQWdRSEpsZEhWeWJpQmJZbTl2YkdWaGJsMDZJRWxtSUhWMGFXeHpJR3h2YjJ0eklHeHBhMlVnWVNCeVpXeGhkR2wyWlNCMllXeDFaU0JoYzNOcFoyNXRaVzUwWEc0cUwxeHVaWGh3YjNKMElHTnZibk4wSUdselVtVnNZWFJwZG1WV1lXeDFaU0E5SUNoMllXeDFaU2tnUFQ0Z0tIWmhiSFZsSUNZbUlIWmhiSFZsTG1sdVpHVjRUMllnSmlZZ2RtRnNkV1V1YVc1a1pYaFBaaWduUFNjcElENGdNQ2tnUHlCMGNuVmxJRG9nWm1Gc2MyVTdYRzVjYmk4cVhHNGdJQ0FnU1hNZ2RYUnBiSE1nZG1GeUlHRWdjM1J5YVc1bklEOGdYRzRnSUNBZ1hHNGdJQ0FnUUhCaGNtRnRPaUJXWVhKcFlXSnNaU0IwYnlCMFpYTjBYRzRnSUNBZ1FISmxkSFZ5YmlCYlltOXZiR1ZoYmwwNklGSmxkSFZ5Ym5NZ2RISjFaU0JwWmlCMGVYQmxiMllnYzNSeUlEMDlQU0FuYzNSeWFXNW5KMXh1S2k5Y2JtVjRjRzl5ZENCamIyNXpkQ0JwYzFOMGNtbHVaeUE5SUNoemRISXBJRDArSUhSNWNHVnZaaUJ6ZEhJZ1BUMDlJQ2R6ZEhKcGJtY25PMXh1WEc0dktseHVJQ0FnSUVCd1lYSmhiU0JiYzNSeWFXNW5JSHg4SUU1dlpHVk1hWE4wWFRwY2JpQWdJQ0FnSUNBZ1NXWWdjM1J5YVc1bkxDQjBjbVZoZEdWa0lHRnpJSE5sYkdWamRHOXlMbHh1SUNBZ0lDQWdJQ0JKWmlCdWIzUXNJSFJ5WldGMFpXUWdZWE1nY0hKbFpYaHBjM1JwYm1jZ1RtOWtaVXhwYzNSY2JseHVJQ0FnSUVCeVpYUjFjbTRnVzBGeWNtRjVYVnh1S2k5Y2JtVjRjRzl5ZENCamIyNXpkQ0J6Wld4bFkzUkViMjBnUFNBb2MyVnNaV04wYjNJcElEMCtJSHRjYmlBZ0lDQmpiMjV6ZENCdWIyUmxjeUE5SUNoMGVYQmxiMllnYzJWc1pXTjBiM0lnUFQwOUlDZHpkSEpwYm1jbktTQS9JR1J2WTNWdFpXNTBMbkYxWlhKNVUyVnNaV04wYjNKQmJHd29jMlZzWldOMGIzSXBJRG9nYzJWc1pXTjBiM0k3WEc0Z0lDQWdjbVYwZFhKdUlDaHViMlJsY3k1c1pXNW5kR2dwSUQ4Z1cxMHVjMnhwWTJVdVkyRnNiQ2h1YjJSbGN5a2dPaUJiWFM1d2RYTm9LRzV2WkdWektUdGNibjA3WEc1Y2JpOHFYRzRnSUNBZ1UzQnNhWFFnWTI5dGJXRXRaR1ZzYVcxcGRHVmtJSE4wY21sdVoxeHVYRzRnSUNBZ1hDSm1iMjhzWW1GeVhDSWdMVDRnVzF3aVptOXZYQ0lzSUZ3aVltRnlYQ0pkWEc1Y2JpQWdJQ0JBY0dGeVlXMGdXM04wY21sdVoxMWNiaUFnSUNCQWNtVjBkWEp1SUZ0aGNuSmhlVjFjYmlvdlhHNWxlSEJ2Y25RZ1kyOXVjM1FnYzNCc2FYUkRiMjF0WVVSbGJHbHRhWFJsWkNBOUlDaDJZV3gxWlNrZ1BUNGdhWE5UZEhKcGJtY29kbUZzZFdVcElEOGdkbUZzZFdVdWMzQnNhWFFvTHl4Y1hITXFMeWtnT2lCYmRtRnNkV1ZkTzF4dVhHNHZLbHh1SUNBZ0lGTndiR2wwSUhOd1lXTmxMV1JsYkdsdGFYUmxaQ0J6ZEhKcGJtZGNibHh1SUNBZ0lGd2labTl2SUdKaGNsd2lJQzArSUZ0Y0ltWnZiMXdpTENCY0ltSmhjbHdpWFZ4dVhHNGdJQ0FnUUhCaGNtRnRJRnR6ZEhKcGJtZGRYRzRnSUNBZ1FISmxkSFZ5YmlCYllYSnlZWGxkWEc0cUwxeHVaWGh3YjNKMElHTnZibk4wSUhOd2JHbDBVM0JoWTJWRVpXeHBiV2wwWldRZ1BTQW9kbUZzZFdVcElEMCtJR2x6VTNSeWFXNW5LSFpoYkhWbEtTQS9JSFpoYkhWbExuTndiR2wwS0NjZ0p5a2dPaUJiZG1Gc2RXVmRPMXh1WEc0dktseHVJQ0FnSUZOd2JHbDBJR0VnZG1Gc2RXVWdhVzUwYnlCaElIWmhiSFZsTDNWdWFYUWdiMkpxWldOMFhHNGdJQ0FnWEc0Z0lDQWdJQ0FnSUZ3aU1qQXdjSGhjSWlBdFBpQjdJSFpoYkhWbE9pQXlNREFzSUhWdWFYUTZJRndpY0hoY0lpQjlYRzRnSUNBZ0lDQWdJRnh1SUNBZ0lFQndZWEpoYlNCYmMzUnlhVzVuWFRvZ1ZtRnNkV1VnZEc4Z2MzQnNhWFJjYmlBZ0lDQkFjbVYwZFhKdUlGdHZZbXBsWTNSZE9pQlBZbXBsWTNRZ2QybDBhQ0IyWVd4MVpTQmhibVFnZFc1cGRDQndjbTl3YzF4dUtpOWNibVY0Y0c5eWRDQmpiMjV6ZENCemNHeHBkRlpoYkhWbFZXNXBkQ0E5SUNoMllXeDFaU2tnUFQ0Z2UxeHVJQ0FnSUdOdmJuTjBJSE53YkdsMFZtRnNJRDBnZG1Gc2RXVXViV0YwWTJnb0x5Z3RQMXhjWkNwY1hDNC9YRnhrS2lrb0xpb3BMeWs3WEc1Y2JpQWdJQ0J5WlhSMWNtNGdlMXh1SUNBZ0lDQWdJQ0IyWVd4MVpUb2djR0Z5YzJWR2JHOWhkQ2h6Y0d4cGRGWmhiRnN4WFNrc1hHNGdJQ0FnSUNBZ0lIVnVhWFE2SUNCemNHeHBkRlpoYkZzeVhWeHVJQ0FnSUgwN1hHNTlPMXh1WEc0dktseHVJQ0FnSUVOdmJuWmxjblFnYm5WdFltVnlJSFJ2SUhnZ1pHVmphVzFoYkNCd2JHRmpaWE5jYmx4dUlDQWdJRUJ3WVhKaGJTQmJiblZ0WW1WeVhWeHVJQ0FnSUVCd1lYSmhiU0JiYm5WdFltVnlYVnh1SUNBZ0lFQnlaWFIxY200Z1cyNTFiV0psY2wxY2Jpb3ZYRzVsZUhCdmNuUWdZMjl1YzNRZ2RHOUVaV05wYldGc0lEMGdLRzUxYlN3Z2NISmxZMmx6YVc5dUlEMGdNaWtnUFQ0Z2UxeHVJQ0FnSUhCeVpXTnBjMmx2YmlBOUlERXdJQ29xSUhCeVpXTnBjMmx2Ymp0Y2JpQWdJQ0J5WlhSMWNtNGdUV0YwYUM1eWIzVnVaQ2h1ZFcwZ0tpQndjbVZqYVhOcGIyNHBJQzhnY0hKbFkybHphVzl1TzF4dWZUdGNiaUpkZlE9PVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvaW5jL3V0aWxzLmpzXG4gKiogbW9kdWxlIGlkID0gMlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0cy5zZXRHbG9iYWxEaWxhdGlvbiA9IHVuZGVmaW5lZDtcblxudmFyIF91dGlscyA9IHJlcXVpcmUoJy4uL2luYy91dGlscycpO1xuXG52YXIgTUFYX0VMQVBTRUQgPSAzMztcblxudmFyIGN1cnJlbnQgPSAwO1xudmFyIGVsYXBzZWQgPSAxNi43O1xudmFyIGRpbGF0aW9uID0gMTtcblxuZXhwb3J0cy5kZWZhdWx0ID0ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gKGZyYW1lc3RhbXApIHtcbiAgICAgICAgZWxhcHNlZCA9IE1hdGgubWF4KE1hdGgubWluKGZyYW1lc3RhbXAgLSBjdXJyZW50LCBNQVhfRUxBUFNFRCksIDEpICogZGlsYXRpb247XG4gICAgICAgIGN1cnJlbnQgPSBmcmFtZXN0YW1wO1xuICAgIH0sXG5cbiAgICBzdGFydDogZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gY3VycmVudCA9ICgwLCBfdXRpbHMuY3VycmVudFRpbWUpKCk7XG4gICAgfSxcblxuICAgIGdldEVsYXBzZWQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIGVsYXBzZWQ7XG4gICAgfVxufTtcbnZhciBzZXRHbG9iYWxEaWxhdGlvbiA9IGV4cG9ydHMuc2V0R2xvYmFsRGlsYXRpb24gPSBmdW5jdGlvbiAobmV3RGlsYXRpb24pIHtcbiAgICByZXR1cm4gZGlsYXRpb24gPSBuZXdEaWxhdGlvbjtcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5OeVl5OXdjbTlqWlhOekwzUnBiV1Z5TG1weklsMHNJbTVoYldWeklqcGJYU3dpYldGd2NHbHVaM01pT2lJN096czdPenM3UVVGRlFTeEpRVUZOTEdOQlFXTXNSVUZCWkRzN1FVRkZUaXhKUVVGSkxGVkJRVlVzUTBGQlZqdEJRVU5LTEVsQlFVa3NWVUZCVlN4SlFVRldPMEZCUTBvc1NVRkJTU3hYUVVGWExFTkJRVmc3TzJ0Q1FVVlhPMEZCUTFnc1dVRkJVU3hWUVVGRExGVkJRVVFzUlVGQlowSTdRVUZEY0VJc2EwSkJRVlVzUzBGQlN5eEhRVUZNTEVOQlFWTXNTMEZCU3l4SFFVRk1MRU5CUVZNc1lVRkJZU3hQUVVGaUxFVkJRWE5DTEZkQlFTOUNMRU5CUVZRc1JVRkJjMFFzUTBGQmRFUXNTVUZCTWtRc1VVRkJNMFFzUTBGRVZUdEJRVVZ3UWl4clFrRkJWU3hWUVVGV0xFTkJSbTlDTzB0QlFXaENPenRCUVV0U0xGZEJRVTg3WlVGQlRTeFZRVUZWTEhsQ1FVRldPMHRCUVU0N08wRkJSVkFzWjBKQlFWazdaVUZCVFR0TFFVRk9PenRCUVVkVUxFbEJRVTBzWjBSQlFXOUNMRlZCUVVNc1YwRkJSRHRYUVVGcFFpeFhRVUZYTEZkQlFWZzdRMEZCYWtJaUxDSm1hV3hsSWpvaWRHbHRaWEl1YW5NaUxDSnpiM1Z5WTJWU2IyOTBJam9pTDFWelpYSnpMMDFoZEhRdlUybDBaWE12Y0c5d2JXOTBhVzl1SWl3aWMyOTFjbU5sYzBOdmJuUmxiblFpT2xzaWFXMXdiM0owSUhzZ1kzVnljbVZ1ZEZScGJXVWdmU0JtY205dElDY3VMaTlwYm1NdmRYUnBiSE1uTzF4dVhHNWpiMjV6ZENCTlFWaGZSVXhCVUZORlJDQTlJRE16TzF4dVhHNXNaWFFnWTNWeWNtVnVkQ0E5SURBN1hHNXNaWFFnWld4aGNITmxaQ0E5SURFMkxqYzdYRzVzWlhRZ1pHbHNZWFJwYjI0Z1BTQXhPMXh1WEc1bGVIQnZjblFnWkdWbVlYVnNkQ0I3WEc0Z0lDQWdkWEJrWVhSbE9pQW9abkpoYldWemRHRnRjQ2tnUFQ0Z2UxeHVJQ0FnSUNBZ0lDQmxiR0Z3YzJWa0lEMGdUV0YwYUM1dFlYZ29UV0YwYUM1dGFXNG9abkpoYldWemRHRnRjQ0F0SUdOMWNuSmxiblFzSUUxQldGOUZURUZRVTBWRUtTd2dNU2tnS2lCa2FXeGhkR2x2Ymp0Y2JpQWdJQ0FnSUNBZ1kzVnljbVZ1ZENBOUlHWnlZVzFsYzNSaGJYQTdYRzRnSUNBZ2ZTeGNibHh1SUNBZ0lITjBZWEowT2lBb0tTQTlQaUJqZFhKeVpXNTBJRDBnWTNWeWNtVnVkRlJwYldVb0tTeGNibHh1SUNBZ0lHZGxkRVZzWVhCelpXUTZJQ2dwSUQwK0lHVnNZWEJ6WldSY2JuMDdYRzVjYm1WNGNHOXlkQ0JqYjI1emRDQnpaWFJIYkc5aVlXeEVhV3hoZEdsdmJpQTlJQ2h1WlhkRWFXeGhkR2x2YmlrZ1BUNGdaR2xzWVhScGIyNGdQU0J1WlhkRWFXeGhkR2x2YmpzaVhYMD1cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL3Byb2Nlc3MvdGltZXIuanNcbiAqKiBtb2R1bGUgaWQgPSAzXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfQWN0aW9uMiA9IHJlcXVpcmUoJy4uL2FjdGlvbnMvQWN0aW9uJyk7XG5cbnZhciBfQWN0aW9uMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX0FjdGlvbjIpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmICghc2VsZikgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIGNhbGwgJiYgKHR5cGVvZiBjYWxsID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpID8gY2FsbCA6IHNlbGY7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgXCIgKyB0eXBlb2Ygc3VwZXJDbGFzcyk7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgZW51bWVyYWJsZTogZmFsc2UsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcykgOiBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzOyB9XG5cbi8qXG4gICAgTWV0aG9kcyBhbmQgcHJvcGVydGllcyB0byBhZGQgdG8gYm91bmQgQWN0aW9uc1xuKi9cbnZhciBib3VuZE9uU3RhcnQgPSBmdW5jdGlvbiAoYWN0aW9uKSB7XG4gICAgcmV0dXJuIGFjdGlvbi5hY3Rvci5hY3RpdmF0ZUFjdGlvbihhY3Rpb24uaWQsIGFjdGlvbik7XG59O1xudmFyIGJvdW5kT25TdG9wID0gZnVuY3Rpb24gKGFjdGlvbikge1xuICAgIHJldHVybiBhY3Rpb24uYWN0b3IuZGVhY3RpdmF0ZUFjdGlvbihhY3Rpb24uaWQpO1xufTtcbnZhciBib3VuZFByb3BzID0gZnVuY3Rpb24gKGFjdG9yKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgYWN0b3I6IGFjdG9yLFxuICAgICAgICBpc1ByaW9yaXR5OiB0cnVlLFxuICAgICAgICBvbjogYWN0b3Iub24sXG4gICAgICAgIF9vblN0YXJ0OiBib3VuZE9uU3RhcnQsXG4gICAgICAgIF9vblN0b3A6IGJvdW5kT25TdG9wLFxuICAgICAgICBvblJlbmRlcjogdW5kZWZpbmVkXG4gICAgfTtcbn07XG5cbnZhciBBY3RvciA9IGZ1bmN0aW9uIChfQWN0aW9uKSB7XG4gICAgX2luaGVyaXRzKEFjdG9yLCBfQWN0aW9uKTtcblxuICAgIGZ1bmN0aW9uIEFjdG9yKCkge1xuICAgICAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgQWN0b3IpO1xuXG4gICAgICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICAgICAgICBhcmdzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIF90aGlzID0gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgX0FjdGlvbi5jYWxsLmFwcGx5KF9BY3Rpb24sIFt0aGlzXS5jb25jYXQoYXJncykpKTtcblxuICAgICAgICBfdGhpcy5hY3RpdmVBY3Rpb25zID0ge307XG4gICAgICAgIF90aGlzLm51bUFjdGl2ZUFjdGlvbnMgPSAwO1xuICAgICAgICByZXR1cm4gX3RoaXM7XG4gICAgfVxuXG4gICAgQWN0b3IucHJvdG90eXBlLnNldCA9IGZ1bmN0aW9uIHNldChwcm9wcywgaW5zdGFudCkge1xuICAgICAgICBpZiAoaW5zdGFudCB8fCAhdGhpcy5yZWR1Y2VyKSB7XG4gICAgICAgICAgICBfQWN0aW9uLnByb3RvdHlwZS5zZXQuY2FsbCh0aGlzLCBwcm9wcyk7XG4gICAgICAgICAgICB0aGlzLm9uY2UoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHZhciBhY3Rpb24gPSB0aGlzLnJlZHVjZXIocHJvcHMpO1xuICAgICAgICAgICAgaWYgKGFjdGlvbikge1xuICAgICAgICAgICAgICAgIHRoaXMuc3RhcnQoYWN0aW9uKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG5cbiAgICAvKlxuICAgICAgICBCaW5kIEFjdGlvbiB0byBBY3RvclxuICAgICovXG5cbiAgICBBY3Rvci5wcm90b3R5cGUuYmluZCA9IGZ1bmN0aW9uIGJpbmQoYWN0aW9uKSB7XG4gICAgICAgIHZhciBpbmhlcml0ZWRBY3Rpb24gPSBhY3Rpb24uaW5oZXJpdCgpO1xuICAgICAgICB2YXIgbmV3VmFsdWVzID0ge307XG4gICAgICAgIHZhciBoYXNOZXdWYWx1ZXMgPSBmYWxzZTtcblxuICAgICAgICAvLyBDcmVhdGUgdmFsdWVzIG9uIGFjdG9yIHRoYXQgZG9uJ3QgZXhpc3RcbiAgICAgICAgZm9yICh2YXIga2V5IGluIGluaGVyaXRlZEFjdGlvbi52YWx1ZXMpIHtcbiAgICAgICAgICAgIGlmIChpbmhlcml0ZWRBY3Rpb24udmFsdWVzLmhhc093blByb3BlcnR5KGtleSkgJiYgIXRoaXMudmFsdWVzLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICAgICAgICBuZXdWYWx1ZXNba2V5XSA9IGluaGVyaXRlZEFjdGlvbi52YWx1ZXNba2V5XTtcbiAgICAgICAgICAgICAgICBoYXNOZXdWYWx1ZXMgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGhhc05ld1ZhbHVlcykge1xuICAgICAgICAgICAgdGhpcy5zZXQoeyB2YWx1ZXM6IG5ld1ZhbHVlcyB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBpbmhlcml0ZWRBY3Rpb24uc2V0KGJvdW5kUHJvcHModGhpcywgaW5oZXJpdGVkQWN0aW9uKSk7XG4gICAgfTtcblxuICAgIC8qXG4gICAgICAgIFN0YXJ0IEFjdG9yXG4gICAgICAgICBJZiBBY3Rpb24gaXMgcHJvdmlkZWQsIGJpbmQgaXQgdG8gdGhpcyBBY3RvciBhbmQgc3RhcnRcbiAgICAgICAgIEBwYXJhbSAob3B0aW9uYWwpIFtBY3Rpb25dXG4gICAgKi9cblxuICAgIEFjdG9yLnByb3RvdHlwZS5zdGFydCA9IGZ1bmN0aW9uIHN0YXJ0KGFjdGlvbikge1xuICAgICAgICBfQWN0aW9uLnByb3RvdHlwZS5zdGFydC5jYWxsKHRoaXMpO1xuXG4gICAgICAgIGlmIChhY3Rpb24pIHtcbiAgICAgICAgICAgIHZhciBib3VuZEFjdGlvbiA9IHRoaXMuYmluZChhY3Rpb24pO1xuICAgICAgICAgICAgYm91bmRBY3Rpb24uc3RhcnQoKTtcblxuICAgICAgICAgICAgcmV0dXJuIGJvdW5kQWN0aW9uO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZm9yICh2YXIga2V5IGluIHRoaXMuYWN0aXZlQWN0aW9ucykge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmFjdGl2ZUFjdGlvbnMuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgX2FjdGlvbiA9IHRoaXMuYWN0aXZlQWN0aW9uc1trZXldO1xuICAgICAgICAgICAgICAgICAgICBpZiAoIV9hY3Rpb24uaXNBY3RpdmUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9hY3Rpb24uc3RhcnQoKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH07XG5cbiAgICBBY3Rvci5wcm90b3R5cGUuc3RvcCA9IGZ1bmN0aW9uIHN0b3AoKSB7XG4gICAgICAgIF9BY3Rpb24ucHJvdG90eXBlLnN0b3AuY2FsbCh0aGlzKTtcblxuICAgICAgICBmb3IgKHZhciBrZXkgaW4gdGhpcy5hY3RpdmVBY3Rpb25zKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5hY3RpdmVBY3Rpb25zLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmFjdGl2ZUFjdGlvbnNba2V5XS5zdG9wKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgQWN0b3IucHJvdG90eXBlLndpbGxSZW5kZXIgPSBmdW5jdGlvbiB3aWxsUmVuZGVyKGFjdG9yLCBmcmFtZVN0YW1wLCBlbGFwc2VkKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5udW1WYWx1ZUtleXM7IGkrKykge1xuICAgICAgICAgICAgdmFyIGtleSA9IHRoaXMudmFsdWVLZXlzW2ldO1xuICAgICAgICAgICAgdmFyIHZhbHVlID0gdGhpcy52YWx1ZXNba2V5XTtcblxuICAgICAgICAgICAgaWYgKHZhbHVlLmRyaXZlcikge1xuICAgICAgICAgICAgICAgIHZhbHVlLmN1cnJlbnQgPSB0aGlzLmFjdGl2ZUFjdGlvbnNbdmFsdWUuZHJpdmVyXS52YWx1ZXNba2V5XS5jdXJyZW50O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIF9BY3Rpb24ucHJvdG90eXBlLndpbGxSZW5kZXIuY2FsbCh0aGlzLCBhY3RvciwgZnJhbWVTdGFtcCwgZWxhcHNlZCk7XG4gICAgfTtcblxuICAgIC8qXG4gICAgICAgIEFkZCBhY3RpdmUgYWN0aW9uc1xuICAgICAgICAgQHBhcmFtIFtudW1iZXJdXG4gICAgICAgIEBwYXJhbSBbQWN0aW9uXVxuICAgICovXG5cbiAgICBBY3Rvci5wcm90b3R5cGUuYWN0aXZhdGVBY3Rpb24gPSBmdW5jdGlvbiBhY3RpdmF0ZUFjdGlvbihpZCwgYWN0aW9uKSB7XG4gICAgICAgIHRoaXMuYWN0aXZlQWN0aW9uc1tpZF0gPSBhY3Rpb247XG4gICAgICAgIHRoaXMubnVtQWN0aXZlQWN0aW9ucysrO1xuXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYWN0aW9uLm51bVZhbHVlS2V5czsgaSsrKSB7XG4gICAgICAgICAgICB2YXIga2V5ID0gYWN0aW9uLnZhbHVlS2V5c1tpXTtcbiAgICAgICAgICAgIHZhciBhY3Rpb25WYWx1ZSA9IGFjdGlvbi52YWx1ZXNba2V5XTtcbiAgICAgICAgICAgIHZhciB2YWx1ZSA9IHRoaXMudmFsdWVzW2tleV07XG5cbiAgICAgICAgICAgIHZhbHVlLmRyaXZlciA9IGlkO1xuICAgICAgICAgICAgYWN0aW9uVmFsdWUuZnJvbSA9IHZhbHVlLmN1cnJlbnQ7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5udW1BY3RpdmVBY3Rpb25zKSB7XG4gICAgICAgICAgICBfQWN0aW9uLnByb3RvdHlwZS5zdGFydC5jYWxsKHRoaXMpO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIC8qXG4gICAgICAgIFJlbW92ZSBhY3RpdmUgYWN0aW9uc1xuICAgICAgICAgQHBhcmFtIFtudW1iZXJdXG4gICAgKi9cblxuICAgIEFjdG9yLnByb3RvdHlwZS5kZWFjdGl2YXRlQWN0aW9uID0gZnVuY3Rpb24gZGVhY3RpdmF0ZUFjdGlvbihpZCkge1xuICAgICAgICB2YXIgYWN0aW9uID0gdGhpcy5hY3RpdmVBY3Rpb25zW2lkXTtcblxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFjdGlvbi5udW1WYWx1ZUtleXM7IGkrKykge1xuICAgICAgICAgICAgdmFyIGtleSA9IGFjdGlvbi52YWx1ZUtleXNbaV07XG4gICAgICAgICAgICB2YXIgdmFsdWUgPSB0aGlzLnZhbHVlc1trZXldO1xuXG4gICAgICAgICAgICB2YWx1ZS5kcml2ZXIgPSB1bmRlZmluZWQ7XG4gICAgICAgIH1cblxuICAgICAgICBkZWxldGUgdGhpcy5hY3RpdmVBY3Rpb25zW2lkXTtcbiAgICAgICAgdGhpcy5udW1BY3RpdmVBY3Rpb25zLS07XG5cbiAgICAgICAgaWYgKCF0aGlzLm51bUFjdGl2ZUFjdGlvbnMgJiYgdGhpcy5pc0FjdGl2ZSkge1xuICAgICAgICAgICAgX0FjdGlvbi5wcm90b3R5cGUuc3RvcC5jYWxsKHRoaXMpO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIHJldHVybiBBY3Rvcjtcbn0oX0FjdGlvbjMuZGVmYXVsdCk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IEFjdG9yO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluTnlZeTloWTNSdmNpOUJZM1J2Y2k1cWN5SmRMQ0p1WVcxbGN5STZXMTBzSW0xaGNIQnBibWR6SWpvaU96czdPenM3T3pzN096czdPenM3T3pzN08wRkJTMEVzU1VGQlRTeGxRVUZsTEZWQlFVTXNUVUZCUkR0WFFVRlpMRTlCUVU4c1MwRkJVQ3hEUVVGaExHTkJRV0lzUTBGQk5FSXNUMEZCVHl4RlFVRlFMRVZCUVZjc1RVRkJka003UTBGQldqdEJRVU55UWl4SlFVRk5MR05CUVdNc1ZVRkJReXhOUVVGRU8xZEJRVmtzVDBGQlR5eExRVUZRTEVOQlFXRXNaMEpCUVdJc1EwRkJPRUlzVDBGQlR5eEZRVUZRTzBOQlFURkRPMEZCUTNCQ0xFbEJRVTBzWVVGQllTeFZRVUZETEV0QlFVUTdWMEZCV1R0QlFVTXpRaXhsUVVGUExFdEJRVkE3UVVGRFFTeHZRa0ZCV1N4SlFVRmFPMEZCUTBFc1dVRkJTU3hOUVVGTkxFVkJRVTQ3UVVGRFNpeHJRa0ZCVlN4WlFVRldPMEZCUTBFc2FVSkJRVk1zVjBGQlZEdEJRVU5CTEd0Q1FVRlZMRk5CUVZZN08wTkJUbVU3TzBsQlUwVTdPenRCUVVOcVFpeGhRVVJwUWl4TFFVTnFRaXhIUVVGeFFqczRRa0ZFU2l4UFFVTkpPenN3UTBGQlRqczdVMEZCVFRzN2NVUkJRMnBDTERCRFFVRlRMRXRCUVZRc1IwRkVhVUk3TzBGQlJXcENMR05CUVVzc1lVRkJUQ3hIUVVGeFFpeEZRVUZ5UWl4RFFVWnBRanRCUVVkcVFpeGpRVUZMTEdkQ1FVRk1MRWRCUVhkQ0xFTkJRWGhDTEVOQlNHbENPenRMUVVGeVFqczdRVUZFYVVJc2IwSkJUMnBDTEcxQ1FVRkpMRTlCUVU4c1UwRkJVenRCUVVOb1FpeFpRVUZKTEZkQlFWY3NRMEZCUXl4TFFVRkxMRTlCUVV3c1JVRkJZenRCUVVNeFFpdzRRa0ZCVFN4SFFVRk9MRmxCUVZVc1MwRkJWaXhGUVVRd1FqdEJRVVV4UWl4cFFrRkJTeXhKUVVGTUxFZEJSakJDTzFOQlFUbENMRTFCUjA4N1FVRkRTQ3huUWtGQlRTeFRRVUZUTEV0QlFVc3NUMEZCVEN4RFFVRmhMRXRCUVdJc1EwRkJWQ3hEUVVSSU8wRkJSVWdzWjBKQlFVa3NUVUZCU2l4RlFVRlpPMEZCUTFJc2NVSkJRVXNzUzBGQlRDeERRVUZYTEUxQlFWZ3NSVUZFVVR0aFFVRmFPMU5CVEVvN096czdPenM3UVVGU1lTeHZRa0Z6UW1wQ0xIRkNRVUZMTEZGQlFWRTdRVUZEVkN4WlFVRk5MR3RDUVVGclFpeFBRVUZQTEU5QlFWQXNSVUZCYkVJc1EwRkVSenRCUVVWVUxGbEJRVWtzV1VGQldTeEZRVUZhTEVOQlJrczdRVUZIVkN4WlFVRkpMR1ZCUVdVc1MwRkJaanM3TzBGQlNFc3NZVUZOU2l4SlFVRkpMRWRCUVVvc1NVRkJWeXhuUWtGQlowSXNUVUZCYUVJc1JVRkJkMEk3UVVGRGNFTXNaMEpCUVVrc1owSkJRV2RDTEUxQlFXaENMRU5CUVhWQ0xHTkJRWFpDTEVOQlFYTkRMRWRCUVhSRExFdEJRVGhETEVOQlFVTXNTMEZCU3l4TlFVRk1MRU5CUVZrc1kwRkJXaXhEUVVFeVFpeEhRVUV6UWl4RFFVRkVMRVZCUVd0RE8wRkJRMmhHTERCQ1FVRlZMRWRCUVZZc1NVRkJhVUlzWjBKQlFXZENMRTFCUVdoQ0xFTkJRWFZDTEVkQlFYWkNMRU5CUVdwQ0xFTkJSR2RHTzBGQlJXaEdMQ3RDUVVGbExFbEJRV1lzUTBGR1owWTdZVUZCY0VZN1UwRkVTanM3UVVGUFFTeFpRVUZKTEZsQlFVb3NSVUZCYTBJN1FVRkRaQ3hwUWtGQlN5eEhRVUZNTEVOQlFWTXNSVUZCUlN4UlFVRlJMRk5CUVZJc1JVRkJXQ3hGUVVSak8xTkJRV3hDT3p0QlFVbEJMR1ZCUVU4c1owSkJRV2RDTEVkQlFXaENMRU5CUVc5Q0xGZEJRVmNzU1VGQldDeEZRVUZwUWl4bFFVRnFRaXhEUVVGd1FpeERRVUZRTEVOQmFrSlRPenM3T3pzN096czdRVUYwUWtrc2IwSkJhVVJxUWl4MVFrRkJUU3hSUVVGUk8wRkJRMVlzTUVKQlFVMHNTMEZCVGl4WlFVUlZPenRCUVVkV0xGbEJRVWtzVFVGQlNpeEZRVUZaTzBGQlExSXNaMEpCUVUwc1kwRkJZeXhMUVVGTExFbEJRVXdzUTBGQlZTeE5RVUZXTEVOQlFXUXNRMEZFUlR0QlFVVlNMSGRDUVVGWkxFdEJRVm9zUjBGR1VUczdRVUZKVWl4dFFrRkJUeXhYUVVGUUxFTkJTbEU3VTBGQldpeE5RVXRQTzBGQlEwZ3NhVUpCUVVzc1NVRkJTU3hIUVVGS0xFbEJRVmNzUzBGQlN5eGhRVUZNTEVWQlFXOUNPMEZCUTJoRExHOUNRVUZKTEV0QlFVc3NZVUZCVEN4RFFVRnRRaXhqUVVGdVFpeERRVUZyUXl4SFFVRnNReXhEUVVGS0xFVkJRVFJETzBGQlEzaERMSGRDUVVGTkxGVkJRVk1zUzBGQlN5eGhRVUZNTEVOQlFXMUNMRWRCUVc1Q0xFTkJRVlFzUTBGRWEwTTdRVUZGZUVNc2QwSkJRVWtzUTBGQlF5eFJRVUZQTEZGQlFWQXNSVUZCYVVJN1FVRkRiRUlzWjBOQlFVOHNTMEZCVUN4SFFVUnJRanR4UWtGQmRFSTdhVUpCUmtvN1lVRkVTanRUUVU1S096dEJRV2RDUVN4bFFVRlBMRWxCUVZBc1EwRnVRbFU3T3p0QlFXcEVSeXh2UWtGMVJXcENMSFZDUVVGUE8wRkJRMGdzTUVKQlFVMHNTVUZCVGl4WlFVUkhPenRCUVVkSUxHRkJRVXNzU1VGQlNTeEhRVUZLTEVsQlFWY3NTMEZCU3l4aFFVRk1MRVZCUVc5Q08wRkJRMmhETEdkQ1FVRkpMRXRCUVVzc1lVRkJUQ3hEUVVGdFFpeGpRVUZ1UWl4RFFVRnJReXhIUVVGc1F5eERRVUZLTEVWQlFUUkRPMEZCUTNoRExIRkNRVUZMTEdGQlFVd3NRMEZCYlVJc1IwRkJia0lzUlVGQmQwSXNTVUZCZUVJc1IwRkVkME03WVVGQk5VTTdVMEZFU2pzN08wRkJNVVZoTEc5Q1FXbEdha0lzYVVOQlFWY3NUMEZCVHl4WlFVRlpMRk5CUVZNN1FVRkRia01zWVVGQlN5eEpRVUZKTEVsQlFVa3NRMEZCU2l4RlFVRlBMRWxCUVVrc1MwRkJTeXhaUVVGTUxFVkJRVzFDTEVkQlFYWkRMRVZCUVRSRE8wRkJRM2hETEdkQ1FVRk5MRTFCUVUwc1MwRkJTeXhUUVVGTUxFTkJRV1VzUTBGQlppeERRVUZPTEVOQlJHdERPMEZCUlhoRExHZENRVUZOTEZGQlFWRXNTMEZCU3l4TlFVRk1MRU5CUVZrc1IwRkJXaXhEUVVGU0xFTkJSbXRET3p0QlFVbDRReXhuUWtGQlNTeE5RVUZOTEUxQlFVNHNSVUZCWXp0QlFVTmtMSE5DUVVGTkxFOUJRVTRzUjBGQlowSXNTMEZCU3l4aFFVRk1MRU5CUVcxQ0xFMUJRVTBzVFVGQlRpeERRVUZ1UWl4RFFVRnBReXhOUVVGcVF5eERRVUYzUXl4SFFVRjRReXhGUVVFMlF5eFBRVUUzUXl4RFFVUkdPMkZCUVd4Q08xTkJTa283TzBGQlUwRXNaVUZCVHl4clFrRkJUU3hWUVVGT0xGbEJRV2xDTEV0QlFXcENMRVZCUVhkQ0xGVkJRWGhDTEVWQlFXOURMRTlCUVhCRExFTkJRVkFzUTBGV2JVTTdPenM3T3pzN096dEJRV3BHZEVJc2IwSkJiMGRxUWl4NVEwRkJaU3hKUVVGSkxGRkJRVkU3UVVGRGRrSXNZVUZCU3l4aFFVRk1MRU5CUVcxQ0xFVkJRVzVDTEVsQlFYbENMRTFCUVhwQ0xFTkJSSFZDTzBGQlJYWkNMR0ZCUVVzc1owSkJRVXdzUjBGR2RVSTdPMEZCU1haQ0xHRkJRVXNzU1VGQlNTeEpRVUZKTEVOQlFVb3NSVUZCVHl4SlFVRkpMRTlCUVU4c1dVRkJVQ3hGUVVGeFFpeEhRVUY2UXl4RlFVRTRRenRCUVVNeFF5eG5Ra0ZCVFN4TlFVRk5MRTlCUVU4c1UwRkJVQ3hEUVVGcFFpeERRVUZxUWl4RFFVRk9MRU5CUkc5RE8wRkJSVEZETEdkQ1FVRk5MR05CUVdNc1QwRkJUeXhOUVVGUUxFTkJRV01zUjBGQlpDeERRVUZrTEVOQlJtOURPMEZCUnpGRExHZENRVUZOTEZGQlFWRXNTMEZCU3l4TlFVRk1MRU5CUVZrc1IwRkJXaXhEUVVGU0xFTkJTRzlET3p0QlFVc3hReXhyUWtGQlRTeE5RVUZPTEVkQlFXVXNSVUZCWml4RFFVd3dRenRCUVUweFF5eDNRa0ZCV1N4SlFVRmFMRWRCUVcxQ0xFMUJRVTBzVDBGQlRpeERRVTUxUWp0VFFVRTVRenM3UVVGVFFTeFpRVUZKTEV0QlFVc3NaMEpCUVV3c1JVRkJkVUk3UVVGRGRrSXNPRUpCUVUwc1MwRkJUaXhaUVVSMVFqdFRRVUV6UWpzN096czdPenM3UVVGcVNHRXNiMEpCTWtocVFpdzJRMEZCYVVJc1NVRkJTVHRCUVVOcVFpeFpRVUZOTEZOQlFWTXNTMEZCU3l4aFFVRk1MRU5CUVcxQ0xFVkJRVzVDTEVOQlFWUXNRMEZFVnpzN1FVRkhha0lzWVVGQlN5eEpRVUZKTEVsQlFVa3NRMEZCU2l4RlFVRlBMRWxCUVVrc1QwRkJUeXhaUVVGUUxFVkJRWEZDTEVkQlFYcERMRVZCUVRoRE8wRkJRekZETEdkQ1FVRk5MRTFCUVUwc1QwRkJUeXhUUVVGUUxFTkJRV2xDTEVOQlFXcENMRU5CUVU0c1EwRkViME03UVVGRk1VTXNaMEpCUVUwc1VVRkJVU3hMUVVGTExFMUJRVXdzUTBGQldTeEhRVUZhTEVOQlFWSXNRMEZHYjBNN08wRkJTVEZETEd0Q1FVRk5MRTFCUVU0c1IwRkJaU3hUUVVGbUxFTkJTakJETzFOQlFUbERPenRCUVU5QkxHVkJRVThzUzBGQlN5eGhRVUZNTEVOQlFXMUNMRVZCUVc1Q0xFTkJRVkFzUTBGV2FVSTdRVUZYYWtJc1lVRkJTeXhuUWtGQlRDeEhRVmhwUWpzN1FVRmhha0lzV1VGQlNTeERRVUZETEV0QlFVc3NaMEpCUVV3c1NVRkJlVUlzUzBGQlN5eFJRVUZNTEVWQlFXVTdRVUZEZWtNc09FSkJRVTBzU1VGQlRpeFpRVVI1UXp0VFFVRTNRenM3TzFkQmVFbGhJaXdpWm1sc1pTSTZJa0ZqZEc5eUxtcHpJaXdpYzI5MWNtTmxVbTl2ZENJNklpOVZjMlZ5Y3k5TllYUjBMMU5wZEdWekwzQnZjRzF2ZEdsdmJpSXNJbk52ZFhKalpYTkRiMjUwWlc1MElqcGJJbWx0Y0c5eWRDQkJZM1JwYjI0Z1puSnZiU0FuTGk0dllXTjBhVzl1Y3k5QlkzUnBiMjRuTzF4dVhHNHZLbHh1SUNBZ0lFMWxkR2h2WkhNZ1lXNWtJSEJ5YjNCbGNuUnBaWE1nZEc4Z1lXUmtJSFJ2SUdKdmRXNWtJRUZqZEdsdmJuTmNiaW92WEc1amIyNXpkQ0JpYjNWdVpFOXVVM1JoY25RZ1BTQW9ZV04wYVc5dUtTQTlQaUJoWTNScGIyNHVZV04wYjNJdVlXTjBhWFpoZEdWQlkzUnBiMjRvWVdOMGFXOXVMbWxrTENCaFkzUnBiMjRwTzF4dVkyOXVjM1FnWW05MWJtUlBibE4wYjNBZ1BTQW9ZV04wYVc5dUtTQTlQaUJoWTNScGIyNHVZV04wYjNJdVpHVmhZM1JwZG1GMFpVRmpkR2x2YmloaFkzUnBiMjR1YVdRcE8xeHVZMjl1YzNRZ1ltOTFibVJRY205d2N5QTlJQ2hoWTNSdmNpa2dQVDRnS0h0Y2JpQWdJQ0JoWTNSdmNqb2dZV04wYjNJc1hHNGdJQ0FnYVhOUWNtbHZjbWwwZVRvZ2RISjFaU3hjYmlBZ0lDQnZiam9nWVdOMGIzSXViMjRzWEc0Z0lDQWdYMjl1VTNSaGNuUTZJR0p2ZFc1a1QyNVRkR0Z5ZEN4Y2JpQWdJQ0JmYjI1VGRHOXdPaUJpYjNWdVpFOXVVM1J2Y0N4Y2JpQWdJQ0J2YmxKbGJtUmxjam9nZFc1a1pXWnBibVZrWEc1OUtUdGNibHh1Wlhod2IzSjBJR1JsWm1GMWJIUWdZMnhoYzNNZ1FXTjBiM0lnWlhoMFpXNWtjeUJCWTNScGIyNGdlMXh1SUNBZ0lHTnZibk4wY25WamRHOXlLQzR1TG1GeVozTXBJSHRjYmlBZ0lDQWdJQ0FnYzNWd1pYSW9MaTR1WVhKbmN5azdYRzRnSUNBZ0lDQWdJSFJvYVhNdVlXTjBhWFpsUVdOMGFXOXVjeUE5SUh0OU8xeHVJQ0FnSUNBZ0lDQjBhR2x6TG01MWJVRmpkR2wyWlVGamRHbHZibk1nUFNBd08xeHVJQ0FnSUgxY2JseHVJQ0FnSUhObGRDaHdjbTl3Y3l3Z2FXNXpkR0Z1ZENrZ2UxeHVJQ0FnSUNBZ0lDQnBaaUFvYVc1emRHRnVkQ0I4ZkNBaGRHaHBjeTV5WldSMVkyVnlLU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQnpkWEJsY2k1elpYUW9jSEp2Y0hNcE8xeHVJQ0FnSUNBZ0lDQWdJQ0FnZEdocGN5NXZibU5sS0NrN1hHNGdJQ0FnSUNBZ0lIMGdaV3h6WlNCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0JqYjI1emRDQmhZM1JwYjI0Z1BTQjBhR2x6TG5KbFpIVmpaWElvY0hKdmNITXBPMXh1SUNBZ0lDQWdJQ0FnSUNBZ2FXWWdLR0ZqZEdsdmJpa2dlMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJSFJvYVhNdWMzUmhjblFvWVdOMGFXOXVLVHRjYmlBZ0lDQWdJQ0FnSUNBZ0lIMWNiaUFnSUNBZ0lDQWdmVnh1SUNBZ0lIMWNibHh1SUNBZ0lDOHFYRzRnSUNBZ0lDQWdJRUpwYm1RZ1FXTjBhVzl1SUhSdklFRmpkRzl5WEc0Z0lDQWdLaTljYmlBZ0lDQmlhVzVrS0dGamRHbHZiaWtnZTF4dUlDQWdJQ0FnSUNCamIyNXpkQ0JwYm1obGNtbDBaV1JCWTNScGIyNGdQU0JoWTNScGIyNHVhVzVvWlhKcGRDZ3BPMXh1SUNBZ0lDQWdJQ0JzWlhRZ2JtVjNWbUZzZFdWeklEMGdlMzA3WEc0Z0lDQWdJQ0FnSUd4bGRDQm9ZWE5PWlhkV1lXeDFaWE1nUFNCbVlXeHpaVHRjYmx4dUlDQWdJQ0FnSUNBdkx5QkRjbVZoZEdVZ2RtRnNkV1Z6SUc5dUlHRmpkRzl5SUhSb1lYUWdaRzl1SjNRZ1pYaHBjM1JjYmlBZ0lDQWdJQ0FnWm05eUlDaHNaWFFnYTJWNUlHbHVJR2x1YUdWeWFYUmxaRUZqZEdsdmJpNTJZV3gxWlhNcElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUdsbUlDaHBibWhsY21sMFpXUkJZM1JwYjI0dWRtRnNkV1Z6TG1oaGMwOTNibEJ5YjNCbGNuUjVLR3RsZVNrZ0ppWWdJWFJvYVhNdWRtRnNkV1Z6TG1oaGMwOTNibEJ5YjNCbGNuUjVLR3RsZVNrcElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQnVaWGRXWVd4MVpYTmJhMlY1WFNBOUlHbHVhR1Z5YVhSbFpFRmpkR2x2Ymk1MllXeDFaWE5iYTJWNVhUdGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQm9ZWE5PWlhkV1lXeDFaWE1nUFNCMGNuVmxPMXh1SUNBZ0lDQWdJQ0FnSUNBZ2ZWeHVJQ0FnSUNBZ0lDQjlYRzVjYmlBZ0lDQWdJQ0FnYVdZZ0tHaGhjMDVsZDFaaGJIVmxjeWtnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdkR2hwY3k1elpYUW9leUIyWVd4MVpYTTZJRzVsZDFaaGJIVmxjeUI5S1R0Y2JpQWdJQ0FnSUNBZ2ZWeHVYRzRnSUNBZ0lDQWdJSEpsZEhWeWJpQnBibWhsY21sMFpXUkJZM1JwYjI0dWMyVjBLR0p2ZFc1a1VISnZjSE1vZEdocGN5d2dhVzVvWlhKcGRHVmtRV04wYVc5dUtTazdYRzRnSUNBZ2ZWeHVYRzRnSUNBZ0x5cGNiaUFnSUNBZ0lDQWdVM1JoY25RZ1FXTjBiM0pjYmx4dUlDQWdJQ0FnSUNCSlppQkJZM1JwYjI0Z2FYTWdjSEp2ZG1sa1pXUXNJR0pwYm1RZ2FYUWdkRzhnZEdocGN5QkJZM1J2Y2lCaGJtUWdjM1JoY25SY2JseHVJQ0FnSUNBZ0lDQkFjR0Z5WVcwZ0tHOXdkR2x2Ym1Gc0tTQmJRV04wYVc5dVhWeHVJQ0FnSUNvdlhHNGdJQ0FnYzNSaGNuUW9ZV04wYVc5dUtTQjdYRzRnSUNBZ0lDQWdJSE4xY0dWeUxuTjBZWEowS0NrN1hHNWNiaUFnSUNBZ0lDQWdhV1lnS0dGamRHbHZiaWtnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdZMjl1YzNRZ1ltOTFibVJCWTNScGIyNGdQU0IwYUdsekxtSnBibVFvWVdOMGFXOXVLVHRjYmlBZ0lDQWdJQ0FnSUNBZ0lHSnZkVzVrUVdOMGFXOXVMbk4wWVhKMEtDazdYRzVjYmlBZ0lDQWdJQ0FnSUNBZ0lISmxkSFZ5YmlCaWIzVnVaRUZqZEdsdmJqdGNiaUFnSUNBZ0lDQWdmU0JsYkhObElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUdadmNpQW9iR1YwSUd0bGVTQnBiaUIwYUdsekxtRmpkR2wyWlVGamRHbHZibk1wSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCcFppQW9kR2hwY3k1aFkzUnBkbVZCWTNScGIyNXpMbWhoYzA5M2JsQnliM0JsY25SNUtHdGxlU2twSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdZMjl1YzNRZ1lXTjBhVzl1SUQwZ2RHaHBjeTVoWTNScGRtVkJZM1JwYjI1elcydGxlVjA3WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lHbG1JQ2doWVdOMGFXOXVMbWx6UVdOMGFYWmxLU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0JoWTNScGIyNHVjM1JoY25Rb0tUdGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnZlZ4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUgxY2JpQWdJQ0FnSUNBZ0lDQWdJSDFjYmlBZ0lDQWdJQ0FnZlZ4dVhHNGdJQ0FnSUNBZ0lISmxkSFZ5YmlCMGFHbHpPMXh1SUNBZ0lIMWNibHh1SUNBZ0lITjBiM0FvS1NCN1hHNGdJQ0FnSUNBZ0lITjFjR1Z5TG5OMGIzQW9LVHRjYmx4dUlDQWdJQ0FnSUNCbWIzSWdLR3hsZENCclpYa2dhVzRnZEdocGN5NWhZM1JwZG1WQlkzUnBiMjV6S1NCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0JwWmlBb2RHaHBjeTVoWTNScGRtVkJZM1JwYjI1ekxtaGhjMDkzYmxCeWIzQmxjblI1S0d0bGVTa3BJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0IwYUdsekxtRmpkR2wyWlVGamRHbHZibk5iYTJWNVhTNXpkRzl3S0NrN1hHNGdJQ0FnSUNBZ0lDQWdJQ0I5WEc0Z0lDQWdJQ0FnSUgxY2JpQWdJQ0I5WEc1Y2JpQWdJQ0IzYVd4c1VtVnVaR1Z5S0dGamRHOXlMQ0JtY21GdFpWTjBZVzF3TENCbGJHRndjMlZrS1NCN1hHNGdJQ0FnSUNBZ0lHWnZjaUFvYkdWMElHa2dQU0F3T3lCcElEd2dkR2hwY3k1dWRXMVdZV3gxWlV0bGVYTTdJR2tyS3lrZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnWTI5dWMzUWdhMlY1SUQwZ2RHaHBjeTUyWVd4MVpVdGxlWE5iYVYwN1hHNGdJQ0FnSUNBZ0lDQWdJQ0JqYjI1emRDQjJZV3gxWlNBOUlIUm9hWE11ZG1Gc2RXVnpXMnRsZVYwN1hHNWNiaUFnSUNBZ0lDQWdJQ0FnSUdsbUlDaDJZV3gxWlM1a2NtbDJaWElwSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCMllXeDFaUzVqZFhKeVpXNTBJRDBnZEdocGN5NWhZM1JwZG1WQlkzUnBiMjV6VzNaaGJIVmxMbVJ5YVhabGNsMHVkbUZzZFdWelcydGxlVjB1WTNWeWNtVnVkRHRjYmlBZ0lDQWdJQ0FnSUNBZ0lIMWNiaUFnSUNBZ0lDQWdmVnh1WEc0Z0lDQWdJQ0FnSUhKbGRIVnliaUJ6ZFhCbGNpNTNhV3hzVW1WdVpHVnlLR0ZqZEc5eUxDQm1jbUZ0WlZOMFlXMXdMQ0JsYkdGd2MyVmtLVHRjYmlBZ0lDQjlYRzVjYmlBZ0lDQXZLbHh1SUNBZ0lDQWdJQ0JCWkdRZ1lXTjBhWFpsSUdGamRHbHZibk5jYmx4dUlDQWdJQ0FnSUNCQWNHRnlZVzBnVzI1MWJXSmxjbDFjYmlBZ0lDQWdJQ0FnUUhCaGNtRnRJRnRCWTNScGIyNWRYRzRnSUNBZ0tpOWNiaUFnSUNCaFkzUnBkbUYwWlVGamRHbHZiaWhwWkN3Z1lXTjBhVzl1S1NCN1hHNGdJQ0FnSUNBZ0lIUm9hWE11WVdOMGFYWmxRV04wYVc5dWMxdHBaRjBnUFNCaFkzUnBiMjQ3WEc0Z0lDQWdJQ0FnSUhSb2FYTXViblZ0UVdOMGFYWmxRV04wYVc5dWN5c3JPMXh1WEc0Z0lDQWdJQ0FnSUdadmNpQW9iR1YwSUdrZ1BTQXdPeUJwSUR3Z1lXTjBhVzl1TG01MWJWWmhiSFZsUzJWNWN6c2dhU3NyS1NCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0JqYjI1emRDQnJaWGtnUFNCaFkzUnBiMjR1ZG1Gc2RXVkxaWGx6VzJsZE8xeHVJQ0FnSUNBZ0lDQWdJQ0FnWTI5dWMzUWdZV04wYVc5dVZtRnNkV1VnUFNCaFkzUnBiMjR1ZG1Gc2RXVnpXMnRsZVYwN1hHNGdJQ0FnSUNBZ0lDQWdJQ0JqYjI1emRDQjJZV3gxWlNBOUlIUm9hWE11ZG1Gc2RXVnpXMnRsZVYwN1hHNWNiaUFnSUNBZ0lDQWdJQ0FnSUhaaGJIVmxMbVJ5YVhabGNpQTlJR2xrTzF4dUlDQWdJQ0FnSUNBZ0lDQWdZV04wYVc5dVZtRnNkV1V1Wm5KdmJTQTlJSFpoYkhWbExtTjFjbkpsYm5RN1hHNGdJQ0FnSUNBZ0lIMWNibHh1SUNBZ0lDQWdJQ0JwWmlBb2RHaHBjeTV1ZFcxQlkzUnBkbVZCWTNScGIyNXpLU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQnpkWEJsY2k1emRHRnlkQ2dwTzF4dUlDQWdJQ0FnSUNCOVhHNGdJQ0FnZlZ4dVhHNGdJQ0FnTHlwY2JpQWdJQ0FnSUNBZ1VtVnRiM1psSUdGamRHbDJaU0JoWTNScGIyNXpYRzVjYmlBZ0lDQWdJQ0FnUUhCaGNtRnRJRnR1ZFcxaVpYSmRYRzRnSUNBZ0tpOWNiaUFnSUNCa1pXRmpkR2wyWVhSbFFXTjBhVzl1S0dsa0tTQjdYRzRnSUNBZ0lDQWdJR052Ym5OMElHRmpkR2x2YmlBOUlIUm9hWE11WVdOMGFYWmxRV04wYVc5dWMxdHBaRjA3WEc1Y2JpQWdJQ0FnSUNBZ1ptOXlJQ2hzWlhRZ2FTQTlJREE3SUdrZ1BDQmhZM1JwYjI0dWJuVnRWbUZzZFdWTFpYbHpPeUJwS3lzcElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUdOdmJuTjBJR3RsZVNBOUlHRmpkR2x2Ymk1MllXeDFaVXRsZVhOYmFWMDdYRzRnSUNBZ0lDQWdJQ0FnSUNCamIyNXpkQ0IyWVd4MVpTQTlJSFJvYVhNdWRtRnNkV1Z6VzJ0bGVWMDdYRzVjYmlBZ0lDQWdJQ0FnSUNBZ0lIWmhiSFZsTG1SeWFYWmxjaUE5SUhWdVpHVm1hVzVsWkR0Y2JpQWdJQ0FnSUNBZ2ZWeHVYRzRnSUNBZ0lDQWdJR1JsYkdWMFpTQjBhR2x6TG1GamRHbDJaVUZqZEdsdmJuTmJhV1JkTzF4dUlDQWdJQ0FnSUNCMGFHbHpMbTUxYlVGamRHbDJaVUZqZEdsdmJuTXRMVHRjYmx4dUlDQWdJQ0FnSUNCcFppQW9JWFJvYVhNdWJuVnRRV04wYVhabFFXTjBhVzl1Y3lBbUppQjBhR2x6TG1selFXTjBhWFpsS1NCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0J6ZFhCbGNpNXpkRzl3S0NrN1hHNGdJQ0FnSUNBZ0lIMWNiaUFnSUNCOVhHNTlJbDE5XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9hY3Rvci9BY3Rvci5qc1xuICoqIG1vZHVsZSBpZCA9IDRcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxudmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF9BY3Rpb24yID0gcmVxdWlyZSgnLi9BY3Rpb24nKTtcblxudmFyIF9BY3Rpb24zID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfQWN0aW9uMik7XG5cbnZhciBfcHJlc2V0RWFzaW5nID0gcmVxdWlyZSgnLi9lYXNpbmcvcHJlc2V0LWVhc2luZycpO1xuXG52YXIgX3ByZXNldEVhc2luZzIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9wcmVzZXRFYXNpbmcpO1xuXG52YXIgX3V0aWxzID0gcmVxdWlyZSgnLi4vaW5jL3V0aWxzJyk7XG5cbnZhciBfY2FsYyA9IHJlcXVpcmUoJy4uL2luYy9jYWxjJyk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKCFzZWxmKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gY2FsbCAmJiAodHlwZW9mIGNhbGwgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikgPyBjYWxsIDogc2VsZjsgfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb24sIG5vdCBcIiArIHR5cGVvZiBzdXBlckNsYXNzKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCBlbnVtZXJhYmxlOiBmYWxzZSwgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LnNldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKSA6IHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7IH1cblxudmFyIENPVU5UID0gJ0NvdW50JztcbnZhciBORVhUX1NURVBTID0ge1xuICAgIGxvb3A6ICdyZXN0YXJ0JyxcbiAgICB5b3lvOiAncmV2ZXJzZScsXG4gICAgZmxpcDogJ2ZsaXBWYWx1ZXMnXG59O1xuXG4vKlxuICAgIEVhc2UgdmFsdWUgd2l0aGluIHJhbmdlZCBwYXJhbWV0ZXJzXG4gICAgXG4gICAgQHBhcmFtIFtudW1iZXJdOiBQcm9ncmVzcyBiZXR3ZWVuIDAgYW5kIDFcbiAgICBAcGFyYW0gW251bWJlcl06IFZhbHVlIG9mIDAgcHJvZ3Jlc3NcbiAgICBAcGFyYW0gW251bWJlcl06IFZhbHVlIG9mIDEgcHJvZ3Jlc3NcbiAgICBAcGFyYW0gW3N0cmluZyB8fCBmdW5jdGlvbl06IE5hbWUgb2YgcHJlc2V0IGVhc2luZ1xuICAgICAgICB0byB1c2Ugb3IgZ2VuZXJhdGVkIGVhc2luZyBmdW5jdGlvblxuICAgIEByZXR1cm4gW251bWJlcl06IFZhbHVlIG9mIGVhc2VkIHByb2dyZXNzIGluIHJhbmdlXG4qL1xudmFyIGVhc2UgPSBmdW5jdGlvbiAocHJvZ3Jlc3MsIGZyb20sIHRvLCBlYXNlKSB7XG4gICAgdmFyIHByb2dyZXNzTGltaXRlZCA9ICgwLCBfY2FsYy5yZXN0cmljdCkocHJvZ3Jlc3MsIDAsIDEpO1xuICAgIHZhciBlYXNlZFByb2dyZXNzID0gZWFzZShwcm9ncmVzc0xpbWl0ZWQpO1xuXG4gICAgcmV0dXJuICgwLCBfY2FsYy5nZXRWYWx1ZUZyb21Qcm9ncmVzcykoZWFzZWRQcm9ncmVzcywgZnJvbSwgdG8pO1xufTtcblxudmFyIFR3ZWVuID0gZnVuY3Rpb24gKF9BY3Rpb24pIHtcbiAgICBfaW5oZXJpdHMoVHdlZW4sIF9BY3Rpb24pO1xuXG4gICAgZnVuY3Rpb24gVHdlZW4oKSB7XG4gICAgICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBUd2Vlbik7XG5cbiAgICAgICAgcmV0dXJuIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIF9BY3Rpb24uYXBwbHkodGhpcywgYXJndW1lbnRzKSk7XG4gICAgfVxuXG4gICAgVHdlZW4ucHJvdG90eXBlLnN0YXJ0ID0gZnVuY3Rpb24gc3RhcnQoKSB7XG4gICAgICAgIF9BY3Rpb24ucHJvdG90eXBlLnN0YXJ0LmNhbGwodGhpcyk7XG4gICAgICAgIHRoaXMuZWxhcHNlZCA9IDA7XG4gICAgICAgIHRoaXMuZmxpcENvdW50ID0gdGhpcy55b3lvQ291bnQgPSB0aGlzLmxvb3BDb3VudCA9IDA7XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfTtcblxuICAgIFR3ZWVuLnByb3RvdHlwZS5vblVwZGF0ZSA9IGZ1bmN0aW9uIG9uVXBkYXRlKHR3ZWVuLCBmcmFtZVN0YW1wLCBlbGFwc2VkKSB7XG4gICAgICAgIHZhciBwcm9ncmVzc1RhcmdldCA9IHRoaXMucGxheURpcmVjdGlvbiA9PT0gMSA/IDEgOiAwO1xuXG4gICAgICAgIHRoaXMuZW5kZWQgPSB0cnVlO1xuICAgICAgICB0aGlzLmVsYXBzZWQgKz0gZWxhcHNlZCAqIHRoaXMuZGlsYXRlICogdGhpcy5wbGF5RGlyZWN0aW9uO1xuXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5udW1WYWx1ZUtleXM7IGkrKykge1xuICAgICAgICAgICAgdmFyIGtleSA9IHRoaXMudmFsdWVLZXlzW2ldO1xuICAgICAgICAgICAgdmFyIHZhbHVlID0gdGhpcy52YWx1ZXNba2V5XTtcblxuICAgICAgICAgICAgdmFyIHByb2dyZXNzID0gKDAsIF9jYWxjLnJlc3RyaWN0KSgoMCwgX2NhbGMuZ2V0UHJvZ3Jlc3NGcm9tVmFsdWUpKHRoaXMuZWxhcHNlZCAtIHZhbHVlLmRlbGF5LCAwLCB2YWx1ZS5kdXJhdGlvbiksIDAsIDEpO1xuXG4gICAgICAgICAgICAvLyBNYXJrIFR3ZWVuIGFzIE5PVCBlbmRlZCBpZiBzdGlsbCBpbiBwcm9ncmVzc1xuICAgICAgICAgICAgaWYgKHByb2dyZXNzICE9PSBwcm9ncmVzc1RhcmdldCkge1xuICAgICAgICAgICAgICAgIHRoaXMuZW5kZWQgPSBmYWxzZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gU3RlcCBwcm9ncmVzcyBpZiB3ZSdyZSBzdGVwcGluZ1xuICAgICAgICAgICAgaWYgKHZhbHVlLnN0ZXBzKSB7XG4gICAgICAgICAgICAgICAgcHJvZ3Jlc3MgPSAoMCwgX2NhbGMuc3RlcFByb2dyZXNzKShwcm9ncmVzcywgdmFsdWUuc3RlcHMpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBFYXNlIHByb2dyZXNzXG4gICAgICAgICAgICB2YWx1ZS5jdXJyZW50ID0gZWFzZShwcm9ncmVzcywgdmFsdWUuZnJvbSwgdmFsdWUudG8sIHZhbHVlLmVhc2UpO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIFR3ZWVuLnByb3RvdHlwZS5vbkZyYW1lRW5kID0gZnVuY3Rpb24gb25GcmFtZUVuZCgpIHtcbiAgICAgICAgaWYgKHRoaXMuZW5kZWQpIHtcbiAgICAgICAgICAgIHZhciBzdGVwVGFrZW4gPSBmYWxzZTtcblxuICAgICAgICAgICAgZm9yICh2YXIga2V5IGluIE5FWFRfU1RFUFMpIHtcbiAgICAgICAgICAgICAgICBpZiAoTkVYVF9TVEVQUy5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBtYXhTdGVwcyA9IHRoaXNba2V5XTtcblxuICAgICAgICAgICAgICAgICAgICBpZiAobWF4U3RlcHMgPT09IHRydWUgfHwgKDAsIF91dGlscy5pc051bSkobWF4U3RlcHMpICYmIG1heFN0ZXBzID4gdGhpc1trZXkgKyBDT1VOVF0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXNba2V5ICsgQ09VTlRdKys7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdGVwVGFrZW4gPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpc1tORVhUX1NURVBTW2tleV1dKCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICghc3RlcFRha2VuKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zdG9wKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgVHdlZW4ucHJvdG90eXBlLmZsaXBWYWx1ZXMgPSBmdW5jdGlvbiBmbGlwVmFsdWVzKCkge1xuICAgICAgICB2YXIgdmFsdWVzID0gdGhpcy52YWx1ZXM7XG5cbiAgICAgICAgdGhpcy5lbGFwc2VkID0gdGhpcy5kdXJhdGlvbiAtIHRoaXMuZWxhcHNlZDtcblxuICAgICAgICBmb3IgKHZhciBrZXkgaW4gdmFsdWVzKSB7XG4gICAgICAgICAgICBpZiAodmFsdWVzLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICAgICAgICB2YXIgdmFsdWUgPSB2YWx1ZXNba2V5XTtcbiAgICAgICAgICAgICAgICB2YXIgX3JlZiA9IFt2YWx1ZS5mcm9tLCB2YWx1ZS50b107XG4gICAgICAgICAgICAgICAgdmFsdWUudG8gPSBfcmVmWzBdO1xuICAgICAgICAgICAgICAgIHZhbHVlLmZyb20gPSBfcmVmWzFdO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfTtcblxuICAgIFR3ZWVuLnByb3RvdHlwZS5yZXZlcnNlID0gZnVuY3Rpb24gcmV2ZXJzZSgpIHtcbiAgICAgICAgdGhpcy5wbGF5RGlyZWN0aW9uICo9IC0xO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xuXG4gICAgVHdlZW4ucHJvdG90eXBlLnJlc3RhcnQgPSBmdW5jdGlvbiByZXN0YXJ0KCkge1xuICAgICAgICB0aGlzLmVsYXBzZWQgPSB0aGlzLnBsYXlEaXJlY3Rpb24gPT09IDEgPyAwIDogdGhpcy5kdXJhdGlvbjtcbiAgICAgICAgdGhpcy5zdGFydGVkID0gKDAsIF91dGlscy5jdXJyZW50VGltZSkoKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfTtcblxuICAgIFR3ZWVuLnByb3RvdHlwZS5zZWVrID0gZnVuY3Rpb24gc2Vlayhwcm9ncmVzcykge1xuICAgICAgICB0aGlzLnNlZWtUaW1lKHRoaXMuZHVyYXRpb24gKiBwcm9ncmVzcyk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH07XG5cbiAgICBUd2Vlbi5wcm90b3R5cGUuc2Vla1RpbWUgPSBmdW5jdGlvbiBzZWVrVGltZShlbGFwc2VkKSB7XG4gICAgICAgIHRoaXMub25jZSgpO1xuICAgICAgICB0aGlzLmVsYXBzZWQgPSBlbGFwc2VkO1xuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH07XG5cbiAgICBUd2Vlbi5wcm90b3R5cGUuZ2V0RGVmYXVsdFByb3BzID0gZnVuY3Rpb24gZ2V0RGVmYXVsdFByb3BzKCkge1xuICAgICAgICByZXR1cm4gX2V4dGVuZHMoe30sIF9BY3Rpb24ucHJvdG90eXBlLmdldERlZmF1bHRQcm9wcy5jYWxsKHRoaXMpLCB7XG4gICAgICAgICAgICBkZWxheTogMCxcbiAgICAgICAgICAgIGRpbGF0ZTogMSxcbiAgICAgICAgICAgIGR1cmF0aW9uOiAzMDAsXG4gICAgICAgICAgICBsb29wOiBmYWxzZSxcbiAgICAgICAgICAgIHlveW86IGZhbHNlLFxuICAgICAgICAgICAgZmxpcDogZmFsc2UsXG4gICAgICAgICAgICBwbGF5RGlyZWN0aW9uOiAxLFxuICAgICAgICAgICAgZW5kZWQ6IGZhbHNlLFxuICAgICAgICAgICAgZWxhcHNlZDogMFxuICAgICAgICB9KTtcbiAgICB9O1xuXG4gICAgVHdlZW4ucHJvdG90eXBlLmdldERlZmF1bHRWYWx1ZSA9IGZ1bmN0aW9uIGdldERlZmF1bHRWYWx1ZSgpIHtcbiAgICAgICAgcmV0dXJuIF9leHRlbmRzKHt9LCBfQWN0aW9uLnByb3RvdHlwZS5nZXREZWZhdWx0VmFsdWUuY2FsbCh0aGlzKSwge1xuICAgICAgICAgICAgZGVsYXk6IDAsXG4gICAgICAgICAgICBkdXJhdGlvbjogMzAwLFxuICAgICAgICAgICAgZWFzZTogX3ByZXNldEVhc2luZzIuZGVmYXVsdC5lYXNlT3V0LFxuICAgICAgICAgICAgZWxhcHNlZDogMCxcbiAgICAgICAgICAgIHN0YWdnZXI6IDAsXG4gICAgICAgICAgICBzdGVwczogMCxcbiAgICAgICAgICAgIGZyb206IDAsXG4gICAgICAgICAgICB0bzogMCxcbiAgICAgICAgICAgIHJvdW5kOiBmYWxzZVxuICAgICAgICB9KTtcbiAgICB9O1xuXG4gICAgVHdlZW4ucHJvdG90eXBlLmdldERlZmF1bHRWYWx1ZVByb3AgPSBmdW5jdGlvbiBnZXREZWZhdWx0VmFsdWVQcm9wKCkge1xuICAgICAgICByZXR1cm4gJ3RvJztcbiAgICB9O1xuXG4gICAgcmV0dXJuIFR3ZWVuO1xufShfQWN0aW9uMy5kZWZhdWx0KTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gVHdlZW47XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5OeVl5OWhZM1JwYjI1ekwxUjNaV1Z1TG1weklsMHNJbTVoYldWeklqcGJYU3dpYldGd2NHbHVaM01pT2lJN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3TzBGQlZVRXNTVUZCVFN4UlFVRlJMRTlCUVZJN1FVRkRUaXhKUVVGTkxHRkJRV0U3UVVGRFppeFZRVUZOTEZOQlFVNDdRVUZEUVN4VlFVRk5MRk5CUVU0N1FVRkRRU3hWUVVGTkxGbEJRVTQ3UTBGSVJUczdPenM3T3pzN096czdPMEZCWjBKT0xFbEJRVTBzVDBGQlR5eFZRVUZETEZGQlFVUXNSVUZCVnl4SlFVRllMRVZCUVdsQ0xFVkJRV3BDTEVWQlFYRkNMRWxCUVhKQ0xFVkJRVGhDTzBGQlEzWkRMRkZCUVUwc2EwSkJRV3RDTEc5Q1FVRlRMRkZCUVZRc1JVRkJiVUlzUTBGQmJrSXNSVUZCYzBJc1EwRkJkRUlzUTBGQmJFSXNRMEZFYVVNN1FVRkZka01zVVVGQlRTeG5Ra0ZCWjBJc1MwRkJTeXhsUVVGTUxFTkJRV2hDTEVOQlJtbERPenRCUVVsMlF5eFhRVUZQTEdkRFFVRnhRaXhoUVVGeVFpeEZRVUZ2UXl4SlFVRndReXhGUVVFd1F5eEZRVUV4UXl4RFFVRlFMRU5CU25WRE8wTkJRVGxDT3p0SlFVOVJPenM3T3pzN096czdiMEpCUTJwQ0xIbENRVUZSTzBGQlEwb3NNRUpCUVUwc1MwRkJUaXhaUVVSSk8wRkJSVW9zWVVGQlN5eFBRVUZNTEVkQlFXVXNRMEZCWml4RFFVWkpPMEZCUjBvc1lVRkJTeXhUUVVGTUxFZEJRV2xDTEV0QlFVc3NVMEZCVEN4SFFVRnBRaXhMUVVGTExGTkJRVXdzUjBGQmFVSXNRMEZCYWtJc1EwRklPVUk3TzBGQlMwb3NaVUZCVHl4SlFVRlFMRU5CVEVrN096dEJRVVJUTEc5Q1FWTnFRaXcyUWtGQlV5eFBRVUZQTEZsQlFWa3NVMEZCVXp0QlFVTnFReXhaUVVGTkxHbENRVUZwUWl4SlFVRkRMRU5CUVVzc1lVRkJUQ3hMUVVGMVFpeERRVUYyUWl4SFFVRTBRaXhEUVVFM1FpeEhRVUZwUXl4RFFVRnFReXhEUVVSVk96dEJRVWRxUXl4aFFVRkxMRXRCUVV3c1IwRkJZU3hKUVVGaUxFTkJTR2xETzBGQlNXcERMR0ZCUVVzc1QwRkJUQ3hKUVVGblFpeFBRVUZETEVkQlFWVXNTMEZCU3l4TlFVRk1MRWRCUVdVc1MwRkJTeXhoUVVGTUxFTkJTbFE3TzBGQlRXcERMR0ZCUVVzc1NVRkJTU3hKUVVGSkxFTkJRVW9zUlVGQlR5eEpRVUZKTEV0QlFVc3NXVUZCVEN4RlFVRnRRaXhIUVVGMlF5eEZRVUUwUXp0QlFVTjRReXhuUWtGQlRTeE5RVUZOTEV0QlFVc3NVMEZCVEN4RFFVRmxMRU5CUVdZc1EwRkJUaXhEUVVSclF6dEJRVVY0UXl4blFrRkJUU3hSUVVGUkxFdEJRVXNzVFVGQlRDeERRVUZaTEVkQlFWb3NRMEZCVWl4RFFVWnJRenM3UVVGSmVFTXNaMEpCUVVrc1YwRkJWeXh2UWtGQlV5eG5RMEZCY1VJc1MwRkJTeXhQUVVGTUxFZEJRV1VzVFVGQlRTeExRVUZPTEVWQlFXRXNRMEZCYWtRc1JVRkJiMFFzVFVGQlRTeFJRVUZPTEVOQlFUZEVMRVZCUVRoRkxFTkJRVGxGTEVWQlFXbEdMRU5CUVdwR0xFTkJRVmc3T3p0QlFVcHZReXhuUWtGUGNFTXNZVUZCWVN4alFVRmlMRVZCUVRaQ08wRkJRemRDTEhGQ1FVRkxMRXRCUVV3c1IwRkJZU3hMUVVGaUxFTkJSRFpDTzJGQlFXcERPenM3UVVGUWQwTXNaMEpCV1hCRExFMUJRVTBzUzBGQlRpeEZRVUZoTzBGQlEySXNNa0pCUVZjc2QwSkJRV0VzVVVGQllpeEZRVUYxUWl4TlFVRk5MRXRCUVU0c1EwRkJiRU1zUTBGRVlUdGhRVUZxUWpzN08wRkJXbmRETEdsQ1FXbENlRU1zUTBGQlRTeFBRVUZPTEVkQlFXZENMRXRCUVVzc1VVRkJUQ3hGUVVGbExFMUJRVTBzU1VGQlRpeEZRVUZaTEUxQlFVMHNSVUZCVGl4RlFVRlZMRTFCUVUwc1NVRkJUaXhEUVVGeVJDeERRV3BDZDBNN1UwRkJOVU03T3p0QlFXWmhMRzlDUVc5RGFrSXNiVU5CUVdFN1FVRkRWQ3haUVVGSkxFdEJRVXNzUzBGQlRDeEZRVUZaTzBGQlExb3NaMEpCUVVrc1dVRkJXU3hMUVVGYUxFTkJSRkU3TzBGQlIxb3NhVUpCUVVzc1NVRkJTU3hIUVVGS0xFbEJRVmNzVlVGQmFFSXNSVUZCTkVJN1FVRkRlRUlzYjBKQlFVa3NWMEZCVnl4alFVRllMRU5CUVRCQ0xFZEJRVEZDTEVOQlFVb3NSVUZCYjBNN1FVRkRhRU1zZDBKQlFVMHNWMEZCVnl4TFFVRkxMRWRCUVV3c1EwRkJXQ3hEUVVRd1FqczdRVUZIYUVNc2QwSkJRVWtzWVVGQllTeEpRVUZpTEVsQlFYTkNMR3RDUVVGTkxGRkJRVTRzUzBGQmJVSXNWMEZCVnl4TFFVRkxMRTFCUVUwc1MwRkJUaXhEUVVGb1FpeEZRVUVyUWp0QlFVTjRSU3cyUWtGQlN5eE5RVUZOTEV0QlFVNHNRMEZCVEN4SFFVUjNSVHRCUVVWNFJTeHZRMEZCV1N4SlFVRmFMRU5CUm5kRk8wRkJSM2hGTERaQ1FVRkxMRmRCUVZjc1IwRkJXQ3hEUVVGTUxFbEJTSGRGTzNGQ1FVRTFSVHRwUWtGSVNqdGhRVVJLT3p0QlFWbEJMR2RDUVVGSkxFTkJRVU1zVTBGQlJDeEZRVUZaTzBGQlExb3NjVUpCUVVzc1NVRkJUQ3hIUVVSWk8yRkJRV2hDTzFOQlprbzdPenRCUVhKRFlTeHZRa0V3UkdwQ0xHMURRVUZoTzBGQlExUXNXVUZCVFN4VFFVRlRMRXRCUVVzc1RVRkJUQ3hEUVVST096dEJRVWRVTEdGQlFVc3NUMEZCVEN4SFFVRmxMRXRCUVVzc1VVRkJUQ3hIUVVGblFpeExRVUZMTEU5QlFVd3NRMEZJZEVJN08wRkJTMVFzWVVGQlN5eEpRVUZKTEVkQlFVb3NTVUZCVnl4TlFVRm9RaXhGUVVGM1FqdEJRVU53UWl4blFrRkJTU3hQUVVGUExHTkJRVkFzUTBGQmMwSXNSMEZCZEVJc1EwRkJTaXhGUVVGblF6dEJRVU0xUWl4dlFrRkJUU3hSUVVGUkxFOUJRVThzUjBGQlVDeERRVUZTTEVOQlJITkNPekpDUVVWSUxFTkJRVU1zVFVGQlRTeEpRVUZPTEVWQlFWa3NUVUZCVFN4RlFVRk9MRVZCUmxZN1FVRkZNMElzYzBKQlFVMHNSVUZCVGl4WFFVWXlRanRCUVVWcVFpeHpRa0ZCVFN4SlFVRk9MRmRCUm1sQ08yRkJRV2hETzFOQlJFbzdPMEZCVDBFc1pVRkJUeXhKUVVGUUxFTkJXbE03T3p0QlFURkVTU3h2UWtGNVJXcENMRFpDUVVGVk8wRkJRMDRzWVVGQlN5eGhRVUZNTEVsQlFYTkNMRU5CUVVNc1EwRkJSQ3hEUVVSb1FqdEJRVVZPTEdWQlFVOHNTVUZCVUN4RFFVWk5PenM3UVVGNlJVOHNiMEpCT0VWcVFpdzJRa0ZCVlR0QlFVTk9MR0ZCUVVzc1QwRkJUQ3hIUVVGbExFbEJRVU1zUTBGQlN5eGhRVUZNTEV0QlFYVkNMRU5CUVhaQ0xFZEJRVFJDTEVOQlFUZENMRWRCUVdsRExFdEJRVXNzVVVGQlRDeERRVVF4UXp0QlFVVk9MR0ZCUVVzc1QwRkJUQ3hIUVVGbExIbENRVUZtTEVOQlJrMDdRVUZIVGl4bFFVRlBMRWxCUVZBc1EwRklUVHM3TzBGQk9VVlBMRzlDUVc5R2FrSXNjVUpCUVVzc1ZVRkJWVHRCUVVOWUxHRkJRVXNzVVVGQlRDeERRVUZqTEV0QlFVc3NVVUZCVEN4SFFVRm5RaXhSUVVGb1FpeERRVUZrTEVOQlJGYzdRVUZGV0N4bFFVRlBMRWxCUVZBc1EwRkdWenM3TzBGQmNFWkZMRzlDUVhsR2FrSXNOa0pCUVZNc1UwRkJVenRCUVVOa0xHRkJRVXNzU1VGQlRDeEhRVVJqTzBGQlJXUXNZVUZCU3l4UFFVRk1MRWRCUVdVc1QwRkJaaXhEUVVaak96dEJRVWxrTEdWQlFVOHNTVUZCVUN4RFFVcGpPenM3UVVGNlJrUXNiMEpCWjBkcVFpdzJRMEZCYTBJN1FVRkRaQ3cwUWtGRFR5eHJRa0ZCVFN4bFFVRk9PMEZCUTBnc2JVSkJRVThzUTBGQlVEdEJRVU5CTEc5Q1FVRlJMRU5CUVZJN1FVRkRRU3h6UWtGQlZTeEhRVUZXTzBGQlEwRXNhMEpCUVUwc1MwRkJUanRCUVVOQkxHdENRVUZOTEV0QlFVNDdRVUZEUVN4clFrRkJUU3hMUVVGT08wRkJRMEVzTWtKQlFXVXNRMEZCWmp0QlFVTkJMRzFDUVVGUExFdEJRVkE3UVVGRFFTeHhRa0ZCVXl4RFFVRlVPMVZCVmtvc1EwRkVZenM3TzBGQmFFZEVMRzlDUVN0SGFrSXNOa05CUVd0Q08wRkJRMlFzTkVKQlEwOHNhMEpCUVUwc1pVRkJUanRCUVVOSUxHMUNRVUZQTEVOQlFWQTdRVUZEUVN4elFrRkJWU3hIUVVGV08wRkJRMEVzYTBKQlFVMHNkVUpCUVU4c1QwRkJVRHRCUVVOT0xIRkNRVUZUTEVOQlFWUTdRVUZEUVN4eFFrRkJVeXhEUVVGVU8wRkJRMEVzYlVKQlFVOHNRMEZCVUR0QlFVTkJMR3RDUVVGTkxFTkJRVTQ3UVVGRFFTeG5Ra0ZCU1N4RFFVRktPMEZCUTBFc2JVSkJRVThzUzBGQlVEdFZRVlpLTEVOQlJHTTdPenRCUVM5SFJDeHZRa0U0U0dwQ0xIRkVRVUZ6UWp0QlFVTnNRaXhsUVVGUExFbEJRVkFzUTBGRWEwSTdPenRYUVRsSVRDSXNJbVpwYkdVaU9pSlVkMlZsYmk1cWN5SXNJbk52ZFhKalpWSnZiM1FpT2lJdlZYTmxjbk12VFdGMGRDOVRhWFJsY3k5d2IzQnRiM1JwYjI0aUxDSnpiM1Z5WTJWelEyOXVkR1Z1ZENJNld5SnBiWEJ2Y25RZ1FXTjBhVzl1SUdaeWIyMGdKeTR2UVdOMGFXOXVKenRjYm1sdGNHOXlkQ0JsWVhOcGJtY2dabkp2YlNBbkxpOWxZWE5wYm1jdmNISmxjMlYwTFdWaGMybHVaeWM3WEc1cGJYQnZjblFnZXlCamRYSnlaVzUwVkdsdFpTd2dhWE5PZFcwZ2ZTQm1jbTl0SUNjdUxpOXBibU12ZFhScGJITW5PMXh1YVcxd2IzSjBJSHRjYmlBZ0lDQnlaWE4wY21samRDeGNiaUFnSUNCblpYUlFjbTluY21WemMwWnliMjFXWVd4MVpTeGNiaUFnSUNCblpYUldZV3gxWlVaeWIyMVFjbTluY21WemN5eGNiaUFnSUNCemRHVndVSEp2WjNKbGMzTmNibjBnWm5KdmJTQW5MaTR2YVc1akwyTmhiR01uTzF4dVhHNWpiMjV6ZENCRFQxVk9WQ0E5SUNkRGIzVnVkQ2M3WEc1amIyNXpkQ0JPUlZoVVgxTlVSVkJUSUQwZ2UxeHVJQ0FnSUd4dmIzQTZJQ2R5WlhOMFlYSjBKeXhjYmlBZ0lDQjViM2x2T2lBbmNtVjJaWEp6WlNjc1hHNGdJQ0FnWm14cGNEb2dKMlpzYVhCV1lXeDFaWE1uWEc1OU8xeHVYRzR2S2x4dUlDQWdJRVZoYzJVZ2RtRnNkV1VnZDJsMGFHbHVJSEpoYm1kbFpDQndZWEpoYldWMFpYSnpYRzRnSUNBZ1hHNGdJQ0FnUUhCaGNtRnRJRnR1ZFcxaVpYSmRPaUJRY205bmNtVnpjeUJpWlhSM1pXVnVJREFnWVc1a0lERmNiaUFnSUNCQWNHRnlZVzBnVzI1MWJXSmxjbDA2SUZaaGJIVmxJRzltSURBZ2NISnZaM0psYzNOY2JpQWdJQ0JBY0dGeVlXMGdXMjUxYldKbGNsMDZJRlpoYkhWbElHOW1JREVnY0hKdlozSmxjM05jYmlBZ0lDQkFjR0Z5WVcwZ1czTjBjbWx1WnlCOGZDQm1kVzVqZEdsdmJsMDZJRTVoYldVZ2IyWWdjSEpsYzJWMElHVmhjMmx1WjF4dUlDQWdJQ0FnSUNCMGJ5QjFjMlVnYjNJZ1oyVnVaWEpoZEdWa0lHVmhjMmx1WnlCbWRXNWpkR2x2Ymx4dUlDQWdJRUJ5WlhSMWNtNGdXMjUxYldKbGNsMDZJRlpoYkhWbElHOW1JR1ZoYzJWa0lIQnliMmR5WlhOeklHbHVJSEpoYm1kbFhHNHFMeUJjYm1OdmJuTjBJR1ZoYzJVZ1BTQW9jSEp2WjNKbGMzTXNJR1p5YjIwc0lIUnZMQ0JsWVhObEtTQTlQaUI3WEc0Z0lDQWdZMjl1YzNRZ2NISnZaM0psYzNOTWFXMXBkR1ZrSUQwZ2NtVnpkSEpwWTNRb2NISnZaM0psYzNNc0lEQXNJREVwTzF4dUlDQWdJR052Ym5OMElHVmhjMlZrVUhKdlozSmxjM01nUFNCbFlYTmxLSEJ5YjJkeVpYTnpUR2x0YVhSbFpDazdYRzVjYmlBZ0lDQnlaWFIxY200Z1oyVjBWbUZzZFdWR2NtOXRVSEp2WjNKbGMzTW9aV0Z6WldSUWNtOW5jbVZ6Y3l3Z1puSnZiU3dnZEc4cE8xeHVmVHRjYmx4dVpYaHdiM0owSUdSbFptRjFiSFFnWTJ4aGMzTWdWSGRsWlc0Z1pYaDBaVzVrY3lCQlkzUnBiMjRnZTF4dUlDQWdJSE4wWVhKMEtDa2dlMXh1SUNBZ0lDQWdJQ0J6ZFhCbGNpNXpkR0Z5ZENncE8xeHVJQ0FnSUNBZ0lDQjBhR2x6TG1Wc1lYQnpaV1FnUFNBd08xeHVJQ0FnSUNBZ0lDQjBhR2x6TG1ac2FYQkRiM1Z1ZENBOUlIUm9hWE11ZVc5NWIwTnZkVzUwSUQwZ2RHaHBjeTVzYjI5d1EyOTFiblFnUFNBd08xeHVYRzRnSUNBZ0lDQWdJSEpsZEhWeWJpQjBhR2x6TzF4dUlDQWdJSDFjYmx4dUlDQWdJRzl1VlhCa1lYUmxLSFIzWldWdUxDQm1jbUZ0WlZOMFlXMXdMQ0JsYkdGd2MyVmtLU0I3WEc0Z0lDQWdJQ0FnSUdOdmJuTjBJSEJ5YjJkeVpYTnpWR0Z5WjJWMElEMGdLSFJvYVhNdWNHeGhlVVJwY21WamRHbHZiaUE5UFQwZ01Ta2dQeUF4SURvZ01EdGNibHh1SUNBZ0lDQWdJQ0IwYUdsekxtVnVaR1ZrSUQwZ2RISjFaVHRjYmlBZ0lDQWdJQ0FnZEdocGN5NWxiR0Z3YzJWa0lDczlJQ2hsYkdGd2MyVmtJQ29nZEdocGN5NWthV3hoZEdVcElDb2dkR2hwY3k1d2JHRjVSR2x5WldOMGFXOXVPMXh1WEc0Z0lDQWdJQ0FnSUdadmNpQW9iR1YwSUdrZ1BTQXdPeUJwSUR3Z2RHaHBjeTV1ZFcxV1lXeDFaVXRsZVhNN0lHa3JLeWtnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdZMjl1YzNRZ2EyVjVJRDBnZEdocGN5NTJZV3gxWlV0bGVYTmJhVjA3WEc0Z0lDQWdJQ0FnSUNBZ0lDQmpiMjV6ZENCMllXeDFaU0E5SUhSb2FYTXVkbUZzZFdWelcydGxlVjA3WEc1Y2JpQWdJQ0FnSUNBZ0lDQWdJR3hsZENCd2NtOW5jbVZ6Y3lBOUlISmxjM1J5YVdOMEtHZGxkRkJ5YjJkeVpYTnpSbkp2YlZaaGJIVmxLSFJvYVhNdVpXeGhjSE5sWkNBdElIWmhiSFZsTG1SbGJHRjVMQ0F3TENCMllXeDFaUzVrZFhKaGRHbHZiaWtzSURBc0lERXBPMXh1WEc0Z0lDQWdJQ0FnSUNBZ0lDQXZMeUJOWVhKcklGUjNaV1Z1SUdGeklFNVBWQ0JsYm1SbFpDQnBaaUJ6ZEdsc2JDQnBiaUJ3Y205bmNtVnpjMXh1SUNBZ0lDQWdJQ0FnSUNBZ2FXWWdLSEJ5YjJkeVpYTnpJQ0U5UFNCd2NtOW5jbVZ6YzFSaGNtZGxkQ2tnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUhSb2FYTXVaVzVrWldRZ1BTQm1ZV3h6WlR0Y2JpQWdJQ0FnSUNBZ0lDQWdJSDFjYmx4dUlDQWdJQ0FnSUNBZ0lDQWdMeThnVTNSbGNDQndjbTluY21WemN5QnBaaUIzWlNkeVpTQnpkR1Z3Y0dsdVoxeHVJQ0FnSUNBZ0lDQWdJQ0FnYVdZZ0tIWmhiSFZsTG5OMFpYQnpLU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnY0hKdlozSmxjM01nUFNCemRHVndVSEp2WjNKbGMzTW9jSEp2WjNKbGMzTXNJSFpoYkhWbExuTjBaWEJ6S1R0Y2JpQWdJQ0FnSUNBZ0lDQWdJSDFjYmx4dUlDQWdJQ0FnSUNBZ0lDQWdMeThnUldGelpTQndjbTluY21WemMxeHVJQ0FnSUNBZ0lDQWdJQ0FnZG1Gc2RXVXVZM1Z5Y21WdWRDQTlJR1ZoYzJVb2NISnZaM0psYzNNc0lIWmhiSFZsTG1aeWIyMHNJSFpoYkhWbExuUnZMQ0IyWVd4MVpTNWxZWE5sS1R0Y2JpQWdJQ0FnSUNBZ2ZWeHVJQ0FnSUgxY2JseHVJQ0FnSUc5dVJuSmhiV1ZGYm1Rb0tTQjdYRzRnSUNBZ0lDQWdJR2xtSUNoMGFHbHpMbVZ1WkdWa0tTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNCc1pYUWdjM1JsY0ZSaGEyVnVJRDBnWm1Gc2MyVTdYRzVjYmlBZ0lDQWdJQ0FnSUNBZ0lHWnZjaUFvYkdWMElHdGxlU0JwYmlCT1JWaFVYMU5VUlZCVEtTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdhV1lnS0U1RldGUmZVMVJGVUZNdWFHRnpUM2R1VUhKdmNHVnlkSGtvYTJWNUtTa2dlMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCamIyNXpkQ0J0WVhoVGRHVndjeUE5SUhSb2FYTmJhMlY1WFR0Y2JseHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0JwWmlBb2JXRjRVM1JsY0hNZ1BUMDlJSFJ5ZFdVZ2ZId2dLR2x6VG5WdEtHMWhlRk4wWlhCektTQW1KaUJ0WVhoVGRHVndjeUErSUhSb2FYTmJhMlY1SUNzZ1EwOVZUbFJkS1NrZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2RHaHBjMXRyWlhrZ0t5QkRUMVZPVkYwckt6dGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lITjBaWEJVWVd0bGJpQTlJSFJ5ZFdVN1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCMGFHbHpXMDVGV0ZSZlUxUkZVRk5iYTJWNVhWMG9LVHRjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2ZWeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lIMWNiaUFnSUNBZ0lDQWdJQ0FnSUgxY2JseHVJQ0FnSUNBZ0lDQWdJQ0FnYVdZZ0tDRnpkR1Z3VkdGclpXNHBJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0IwYUdsekxuTjBiM0FvS1R0Y2JpQWdJQ0FnSUNBZ0lDQWdJSDFjYmlBZ0lDQWdJQ0FnZlZ4dUlDQWdJSDFjYmx4dUlDQWdJR1pzYVhCV1lXeDFaWE1vS1NCN1hHNGdJQ0FnSUNBZ0lHTnZibk4wSUhaaGJIVmxjeUE5SUhSb2FYTXVkbUZzZFdWek8xeHVYRzRnSUNBZ0lDQWdJSFJvYVhNdVpXeGhjSE5sWkNBOUlIUm9hWE11WkhWeVlYUnBiMjRnTFNCMGFHbHpMbVZzWVhCelpXUTdYRzVjYmlBZ0lDQWdJQ0FnWm05eUlDaHNaWFFnYTJWNUlHbHVJSFpoYkhWbGN5a2dlMXh1SUNBZ0lDQWdJQ0FnSUNBZ2FXWWdLSFpoYkhWbGN5NW9ZWE5QZDI1UWNtOXdaWEowZVNoclpYa3BLU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnWTI5dWMzUWdkbUZzZFdVZ1BTQjJZV3gxWlhOYmEyVjVYVHRjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0JiZG1Gc2RXVXVkRzhzSUhaaGJIVmxMbVp5YjIxZElEMGdXM1poYkhWbExtWnliMjBzSUhaaGJIVmxMblJ2WFR0Y2JpQWdJQ0FnSUNBZ0lDQWdJSDFjYmlBZ0lDQWdJQ0FnZlZ4dVhHNGdJQ0FnSUNBZ0lISmxkSFZ5YmlCMGFHbHpPMXh1SUNBZ0lIMWNibHh1SUNBZ0lISmxkbVZ5YzJVb0tTQjdYRzRnSUNBZ0lDQWdJSFJvYVhNdWNHeGhlVVJwY21WamRHbHZiaUFxUFNBdE1UdGNiaUFnSUNBZ0lDQWdjbVYwZFhKdUlIUm9hWE03WEc0Z0lDQWdmVnh1WEc0Z0lDQWdjbVZ6ZEdGeWRDZ3BJSHRjYmlBZ0lDQWdJQ0FnZEdocGN5NWxiR0Z3YzJWa0lEMGdLSFJvYVhNdWNHeGhlVVJwY21WamRHbHZiaUE5UFQwZ01Ta2dQeUF3SURvZ2RHaHBjeTVrZFhKaGRHbHZianRjYmlBZ0lDQWdJQ0FnZEdocGN5NXpkR0Z5ZEdWa0lEMGdZM1Z5Y21WdWRGUnBiV1VvS1R0Y2JpQWdJQ0FnSUNBZ2NtVjBkWEp1SUhSb2FYTTdYRzRnSUNBZ2ZWeHVYRzRnSUNBZ2MyVmxheWh3Y205bmNtVnpjeWtnZTF4dUlDQWdJQ0FnSUNCMGFHbHpMbk5sWld0VWFXMWxLSFJvYVhNdVpIVnlZWFJwYjI0Z0tpQndjbTluY21WemN5azdYRzRnSUNBZ0lDQWdJSEpsZEhWeWJpQjBhR2x6TzF4dUlDQWdJSDFjYmx4dUlDQWdJSE5sWld0VWFXMWxLR1ZzWVhCelpXUXBJSHRjYmlBZ0lDQWdJQ0FnZEdocGN5NXZibU5sS0NrN1hHNGdJQ0FnSUNBZ0lIUm9hWE11Wld4aGNITmxaQ0E5SUdWc1lYQnpaV1E3WEc1Y2JpQWdJQ0FnSUNBZ2NtVjBkWEp1SUhSb2FYTTdYRzRnSUNBZ2ZWeHVJQ0FnSUZ4dUlDQWdJR2RsZEVSbFptRjFiSFJRY205d2N5Z3BJSHRjYmlBZ0lDQWdJQ0FnY21WMGRYSnVJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lDNHVMbk4xY0dWeUxtZGxkRVJsWm1GMWJIUlFjbTl3Y3lncExGeHVJQ0FnSUNBZ0lDQWdJQ0FnWkdWc1lYazZJREFzWEc0Z0lDQWdJQ0FnSUNBZ0lDQmthV3hoZEdVNklERXNYRzRnSUNBZ0lDQWdJQ0FnSUNCa2RYSmhkR2x2YmpvZ016QXdMRnh1SUNBZ0lDQWdJQ0FnSUNBZ2JHOXZjRG9nWm1Gc2MyVXNYRzRnSUNBZ0lDQWdJQ0FnSUNCNWIzbHZPaUJtWVd4elpTeGNiaUFnSUNBZ0lDQWdJQ0FnSUdac2FYQTZJR1poYkhObExGeHVJQ0FnSUNBZ0lDQWdJQ0FnY0d4aGVVUnBjbVZqZEdsdmJqb2dNU3hjYmlBZ0lDQWdJQ0FnSUNBZ0lHVnVaR1ZrT2lCbVlXeHpaU3hjYmlBZ0lDQWdJQ0FnSUNBZ0lHVnNZWEJ6WldRNklEQmNiaUFnSUNBZ0lDQWdmVHRjYmlBZ0lDQjlYRzVjYmlBZ0lDQm5aWFJFWldaaGRXeDBWbUZzZFdVb0tTQjdYRzRnSUNBZ0lDQWdJSEpsZEhWeWJpQjdYRzRnSUNBZ0lDQWdJQ0FnSUNBdUxpNXpkWEJsY2k1blpYUkVaV1poZFd4MFZtRnNkV1VvS1N4Y2JpQWdJQ0FnSUNBZ0lDQWdJR1JsYkdGNU9pQXdMRnh1SUNBZ0lDQWdJQ0FnSUNBZ1pIVnlZWFJwYjI0NklETXdNQ3hjYmlBZ0lDQWdJQ0FnSUNBZ0lHVmhjMlU2SUdWaGMybHVaeTVsWVhObFQzVjBMRnh1SUNBZ0lDQWdJQ0FnSUNBZ1pXeGhjSE5sWkRvZ01DeGNiaUFnSUNBZ0lDQWdJQ0FnSUhOMFlXZG5aWEk2SURBc1hHNGdJQ0FnSUNBZ0lDQWdJQ0J6ZEdWd2N6b2dNQ3hjYmlBZ0lDQWdJQ0FnSUNBZ0lHWnliMjA2SURBc1hHNGdJQ0FnSUNBZ0lDQWdJQ0IwYnpvZ01DeGNiaUFnSUNBZ0lDQWdJQ0FnSUhKdmRXNWtPaUJtWVd4elpWeHVJQ0FnSUNBZ0lDQjlPMXh1SUNBZ0lIMWNibHh1SUNBZ0lHZGxkRVJsWm1GMWJIUldZV3gxWlZCeWIzQW9LU0I3WEc0Z0lDQWdJQ0FnSUhKbGRIVnliaUFuZEc4bk8xeHVJQ0FnSUgxY2JuMWNiaUpkZlE9PVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvYWN0aW9ucy9Ud2Vlbi5qc1xuICoqIG1vZHVsZSBpZCA9IDVcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxudmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF9BY3Rpb24yID0gcmVxdWlyZSgnLi9BY3Rpb24nKTtcblxudmFyIF9BY3Rpb24zID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfQWN0aW9uMik7XG5cbnZhciBfY2FsYyA9IHJlcXVpcmUoJy4uL2luYy9jYWxjJyk7XG5cbnZhciBfdXRpbHMgPSByZXF1aXJlKCcuLi9pbmMvdXRpbHMnKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoIXNlbGYpIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBjYWxsICYmICh0eXBlb2YgY2FsbCA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSA/IGNhbGwgOiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90IFwiICsgdHlwZW9mIHN1cGVyQ2xhc3MpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIGVudW1lcmFibGU6IGZhbHNlLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIDogc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzczsgfVxuXG52YXIgUGh5c2ljcyA9IGZ1bmN0aW9uIChfQWN0aW9uKSB7XG4gICAgX2luaGVyaXRzKFBoeXNpY3MsIF9BY3Rpb24pO1xuXG4gICAgZnVuY3Rpb24gUGh5c2ljcygpIHtcbiAgICAgICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFBoeXNpY3MpO1xuXG4gICAgICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICAgICAgICBhcmdzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIF90aGlzID0gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgX0FjdGlvbi5jYWxsLmFwcGx5KF9BY3Rpb24sIFt0aGlzXS5jb25jYXQoYXJncykpKTtcblxuICAgICAgICBfdGhpcy5pbmFjdGl2ZUZyYW1lcyA9IDA7XG4gICAgICAgIF90aGlzLmNhbGN1bGF0ZXNWZWxvY2l0eSA9IHRydWU7XG4gICAgICAgIHJldHVybiBfdGhpcztcbiAgICB9XG5cbiAgICBQaHlzaWNzLnByb3RvdHlwZS5vblVwZGF0ZSA9IGZ1bmN0aW9uIG9uVXBkYXRlKHBoeXNpY3MsIGZyYW1lU3RhbXAsIGVsYXBzZWQpIHtcbiAgICAgICAgdGhpcy5oYXNDaGFuZ2VkID0gZmFsc2U7XG5cbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLm51bVZhbHVlS2V5czsgaSsrKSB7XG4gICAgICAgICAgICB2YXIga2V5ID0gdGhpcy52YWx1ZUtleXNbaV07XG4gICAgICAgICAgICB2YXIgdmFsdWUgPSB0aGlzLnZhbHVlc1trZXldO1xuICAgICAgICAgICAgdmFyIHByZXZpb3VzVmFsdWUgPSB2YWx1ZS5wcmV2O1xuXG4gICAgICAgICAgICAvLyBBcHBseSBhY2NlbGVyYXRpb25cbiAgICAgICAgICAgIHZhbHVlLnZlbG9jaXR5ICs9ICgwLCBfY2FsYy5zcGVlZFBlckZyYW1lKSh2YWx1ZS5hY2NlbGVyYXRpb24sIGVsYXBzZWQpO1xuXG4gICAgICAgICAgICAvLyBBcHBseSBmcmljdGlvblxuICAgICAgICAgICAgdmFsdWUudmVsb2NpdHkgKj0gTWF0aC5wb3coMSAtIHZhbHVlLmZyaWN0aW9uLCBlbGFwc2VkIC8gMTAwKTtcblxuICAgICAgICAgICAgLy8gQXBwbHkgc3ByaW5nXG4gICAgICAgICAgICBpZiAodmFsdWUuc3ByaW5nICYmICgwLCBfdXRpbHMuaXNOdW0pKHZhbHVlLnRvKSkge1xuICAgICAgICAgICAgICAgIHZhciBkaXN0YW5jZVRvVGFyZ2V0ID0gdmFsdWUudG8gLSB2YWx1ZS5jdXJyZW50O1xuICAgICAgICAgICAgICAgIHZhbHVlLnZlbG9jaXR5ICs9IGRpc3RhbmNlVG9UYXJnZXQgKiAoMCwgX2NhbGMuc3BlZWRQZXJGcmFtZSkodmFsdWUuc3ByaW5nLCBlbGFwc2VkKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gQXBwbHkgbGF0ZXN0IHZlbG9jaXR5XG4gICAgICAgICAgICB2YWx1ZS5jdXJyZW50ICs9ICgwLCBfY2FsYy5zcGVlZFBlckZyYW1lKSh2YWx1ZS52ZWxvY2l0eSwgZWxhcHNlZCk7XG5cbiAgICAgICAgICAgIC8vIENoZWNrIGlmIHZhbHVlIGhhcyBjaGFuZ2VkXG4gICAgICAgICAgICBpZiAodmFsdWUuY3VycmVudCAhPT0gcHJldmlvdXNWYWx1ZSB8fCBNYXRoLmFicyh2YWx1ZS52ZWxvY2l0eSkgPj0gdmFsdWUuc3RvcFNwZWVkIHx8IHZhbHVlLnNwcmluZyAmJiB2YWx1ZS5jdXJyZW50ICE9PSB2YWx1ZS50bykge1xuICAgICAgICAgICAgICAgIHRoaXMuaGFzQ2hhbmdlZCA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgUGh5c2ljcy5wcm90b3R5cGUub25GcmFtZUVuZCA9IGZ1bmN0aW9uIG9uRnJhbWVFbmQoKSB7XG4gICAgICAgIGlmICh0aGlzLmF1dG9FbmQpIHtcbiAgICAgICAgICAgIHRoaXMuaW5hY3RpdmVGcmFtZXMgPSB0aGlzLmhhc0NoYW5nZWQgPyAxIDogdGhpcy5pbmFjdGl2ZUZyYW1lcyArIDE7XG5cbiAgICAgICAgICAgIGlmICh0aGlzLmluYWN0aXZlRnJhbWVzID49IHRoaXMubWF4SW5hY3RpdmVGcmFtZXMpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnN0b3AoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG5cbiAgICAvKlxuICAgICAgICAjIEdldCBkZWZhdWx0IFNpbXVsYXRlIHByb3BzXG4gICAgICAgICBAcmV0dXJuIFtvYmplY3RdXG4gICAgKi9cblxuICAgIFBoeXNpY3MucHJvdG90eXBlLmdldERlZmF1bHRQcm9wcyA9IGZ1bmN0aW9uIGdldERlZmF1bHRQcm9wcygpIHtcbiAgICAgICAgcmV0dXJuIF9leHRlbmRzKHt9LCBfQWN0aW9uLnByb3RvdHlwZS5nZXREZWZhdWx0UHJvcHMuY2FsbCh0aGlzKSwge1xuICAgICAgICAgICAgYXV0b0VuZDogdHJ1ZSxcbiAgICAgICAgICAgIG1heEluYWN0aXZlRnJhbWVzOiAzXG4gICAgICAgIH0pO1xuICAgIH07XG5cbiAgICAvKlxuICAgICAgICAjIEdldCBkZWZhdWx0IFNpbXVsYXRlIHZhbHVlIHByb3BzXG4gICAgICAgICBAcmV0dXJuIFtvYmplY3RdXG4gICAgKi9cblxuICAgIFBoeXNpY3MucHJvdG90eXBlLmdldERlZmF1bHRWYWx1ZSA9IGZ1bmN0aW9uIGdldERlZmF1bHRWYWx1ZSgpIHtcbiAgICAgICAgcmV0dXJuIF9leHRlbmRzKHt9LCBfQWN0aW9uLnByb3RvdHlwZS5nZXREZWZhdWx0VmFsdWUuY2FsbCh0aGlzKSwge1xuICAgICAgICAgICAgYWNjZWxlcmF0aW9uOiAwLCAvLyBbbnVtYmVyXTogQWNjZWxlcmF0aW9uIHRvIGFwcGx5IHRvIHZhbHVlLCBpbiB1bml0cyBwZXIgc2Vjb25kXG4gICAgICAgICAgICBib3VuY2U6IDAsIC8vIFtudW1iZXJdOiBGYWN0b3IgdG8gbXVsdGlwbHkgdmVsb2NpdHkgYnkgb24gYm91bmNlXG4gICAgICAgICAgICBzcHJpbmc6IDAsIC8vIFtudW1iZXJdOiBTcHJpbmcgc3RyZW5ndGggZHVyaW5nICdzdHJpbmcnXG4gICAgICAgICAgICBzdG9wU3BlZWQ6IDAuMDAwMSwgLy8gW251bWJlcl06IFN0b3Agc2ltdWxhdGlvbiB1bmRlciB0aGlzIHNwZWVkXG4gICAgICAgICAgICBmcmljdGlvbjogMCAvLyBbbnVtYmVyXTogRnJpY3Rpb24gdG8gYXBwbHkgcGVyIGZyYW1lLCAwLTFcbiAgICAgICAgfSk7XG4gICAgfTtcblxuICAgIC8qXG4gICAgICAgICMgR2V0IGRlZmF1bHQgU2ltdWxhdGUgdmFsdWUgcHJvcGVydHkgbmFtZVxuICAgICAgICAjIyBTZXQgdmFsdWVzIHRvIHRoaXMgd2hlbiBhIGB2YWx1ZWAgaXMgbm90IHByb3ZpZGVkIGFzIGFuIG9iamVjdFxuICAgICAgICAgQHJldHVybiBbc3RyaW5nXVxuICAgICovXG5cbiAgICBQaHlzaWNzLnByb3RvdHlwZS5nZXREZWZhdWx0VmFsdWVQcm9wID0gZnVuY3Rpb24gZ2V0RGVmYXVsdFZhbHVlUHJvcCgpIHtcbiAgICAgICAgcmV0dXJuICd2ZWxvY2l0eSc7XG4gICAgfTtcblxuICAgIHJldHVybiBQaHlzaWNzO1xufShfQWN0aW9uMy5kZWZhdWx0KTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gUGh5c2ljcztcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbk55WXk5aFkzUnBiMjV6TDFCb2VYTnBZM011YW5NaVhTd2libUZ0WlhNaU9sdGRMQ0p0WVhCd2FXNW5jeUk2SWpzN096czdPenM3T3pzN096czdPenM3T3pzN096dEpRVWx4UWpzN08wRkJSV3BDTEdGQlJtbENMRTlCUldwQ0xFZEJRWEZDT3poQ1FVWktMRk5CUlVrN096QkRRVUZPT3p0VFFVRk5PenR4UkVGRGFrSXNNRU5CUVZNc1MwRkJWQ3hIUVVScFFqczdRVUZGYWtJc1kwRkJTeXhqUVVGTUxFZEJRWE5DTEVOQlFYUkNMRU5CUm1sQ08wRkJSMnBDTEdOQlFVc3NhMEpCUVV3c1IwRkJNRUlzU1VGQk1VSXNRMEZJYVVJN08wdEJRWEpDT3p0QlFVWnBRaXh6UWtGUmFrSXNOa0pCUVZNc1UwRkJVeXhaUVVGWkxGTkJRVk03UVVGRGJrTXNZVUZCU3l4VlFVRk1MRWRCUVd0Q0xFdEJRV3hDTEVOQlJHMURPenRCUVVkdVF5eGhRVUZMTEVsQlFVa3NTVUZCU1N4RFFVRktMRVZCUVU4c1NVRkJTU3hMUVVGTExGbEJRVXdzUlVGQmJVSXNSMEZCZGtNc1JVRkJORU03UVVGRGVFTXNaMEpCUVUwc1RVRkJUU3hMUVVGTExGTkJRVXdzUTBGQlpTeERRVUZtTEVOQlFVNHNRMEZFYTBNN1FVRkZlRU1zWjBKQlFVMHNVVUZCVVN4TFFVRkxMRTFCUVV3c1EwRkJXU3hIUVVGYUxFTkJRVklzUTBGR2EwTTdRVUZIZUVNc1owSkJRVTBzWjBKQlFXZENMRTFCUVUwc1NVRkJUanM3TzBGQlNHdENMR2xDUVUxNFF5eERRVUZOTEZGQlFVNHNTVUZCYTBJc2VVSkJRV01zVFVGQlRTeFpRVUZPTEVWQlFXOUNMRTlCUVd4RExFTkJRV3hDT3pzN1FVRk9kME1zYVVKQlUzaERMRU5CUVUwc1VVRkJUaXhoUVVGdFFpeEpRVUZKTEUxQlFVMHNVVUZCVGl4RlFVRnZRaXhWUVVGVkxFZEJRVllzUTBGQk0wTTdPenRCUVZSM1F5eG5Ra0ZaY0VNc1RVRkJUU3hOUVVGT0xFbEJRV2RDTEd0Q1FVRk5MRTFCUVUwc1JVRkJUaXhEUVVGMFFpeEZRVUZwUXp0QlFVTnFReXh2UWtGQlRTeHRRa0ZCYlVJc1RVRkJUU3hGUVVGT0xFZEJRVmNzVFVGQlRTeFBRVUZPTEVOQlJFZzdRVUZGYWtNc2MwSkJRVTBzVVVGQlRpeEpRVUZyUWl4dFFrRkJiVUlzZVVKQlFXTXNUVUZCVFN4TlFVRk9MRVZCUVdNc1QwRkJOVUlzUTBGQmJrSXNRMEZHWlR0aFFVRnlRenM3TzBGQlduZERMR2xDUVd0Q2VFTXNRMEZCVFN4UFFVRk9MRWxCUVdsQ0xIbENRVUZqTEUxQlFVMHNVVUZCVGl4RlFVRm5RaXhQUVVFNVFpeERRVUZxUWpzN08wRkJiRUozUXl4blFrRnhRbkJETEUxQlFVMHNUMEZCVGl4TFFVRnJRaXhoUVVGc1FpeEpRVUZ0UXl4TFFVRkxMRWRCUVV3c1EwRkJVeXhOUVVGTkxGRkJRVTRzUTBGQlZDeEpRVUUwUWl4TlFVRk5MRk5CUVU0c1NVRkJiMElzVFVGQlRTeE5RVUZPTEVsQlFXZENMRTFCUVUwc1QwRkJUaXhMUVVGclFpeE5RVUZOTEVWQlFVNHNSVUZCVnp0QlFVTm9TU3h4UWtGQlN5eFZRVUZNTEVkQlFXdENMRWxCUVd4Q0xFTkJSR2RKTzJGQlFYQkpPMU5CY2tKS096czdRVUZZWVN4elFrRnpRMnBDTEcxRFFVRmhPMEZCUTFRc1dVRkJTU3hMUVVGTExFOUJRVXdzUlVGQll6dEJRVU5rTEdsQ1FVRkxMR05CUVV3c1IwRkJjMElzUzBGQlN5eFZRVUZNTEVkQlFXdENMRU5CUVd4Q0xFZEJRWE5DTEV0QlFVc3NZMEZCVEN4SFFVRnpRaXhEUVVGMFFpeERRVVE1UWpzN1FVRkhaQ3huUWtGQlNTeExRVUZMTEdOQlFVd3NTVUZCZFVJc1MwRkJTeXhwUWtGQlRDeEZRVUYzUWp0QlFVTXZReXh4UWtGQlN5eEpRVUZNTEVkQlJDdERPMkZCUVc1RU8xTkJTRW83T3pzN096czdPMEZCZGtOaExITkNRWEZFYWtJc05rTkJRV3RDTzBGQlEyUXNORUpCUTA4c2EwSkJRVTBzWlVGQlRqdEJRVU5JTEhGQ1FVRlRMRWxCUVZRN1FVRkRRU3dyUWtGQmJVSXNRMEZCYmtJN1ZVRklTaXhEUVVSak96czdPenM3T3p0QlFYSkVSQ3h6UWtGclJXcENMRFpEUVVGclFqdEJRVU5rTERSQ1FVTlBMR3RDUVVGTkxHVkJRVTQ3UVVGRFNDd3dRa0ZCWXl4RFFVRmtPMEZCUTBFc2IwSkJRVkVzUTBGQlVqdEJRVU5CTEc5Q1FVRlJMRU5CUVZJN1FVRkRRU3gxUWtGQlZ5eE5RVUZZTzBGQlEwRXNjMEpCUVZVc1EwRkJWanRWUVU1S0xFTkJSR003T3pzN096czdPenRCUVd4RlJDeHpRa0Z0Um1wQ0xIRkVRVUZ6UWp0QlFVTnNRaXhsUVVGUExGVkJRVkFzUTBGRWEwSTdPenRYUVc1R1RDSXNJbVpwYkdVaU9pSlFhSGx6YVdOekxtcHpJaXdpYzI5MWNtTmxVbTl2ZENJNklpOVZjMlZ5Y3k5TllYUjBMMU5wZEdWekwzQnZjRzF2ZEdsdmJpSXNJbk52ZFhKalpYTkRiMjUwWlc1MElqcGJJbWx0Y0c5eWRDQkJZM1JwYjI0Z1puSnZiU0FuTGk5QlkzUnBiMjRuTzF4dWFXMXdiM0owSUhzZ2MzQmxaV1JRWlhKR2NtRnRaU0I5SUdaeWIyMGdKeTR1TDJsdVl5OWpZV3hqSnp0Y2JtbHRjRzl5ZENCN0lHbHpUblZ0SUgwZ1puSnZiU0FuTGk0dmFXNWpMM1YwYVd4ekp6dGNibHh1Wlhod2IzSjBJR1JsWm1GMWJIUWdZMnhoYzNNZ1VHaDVjMmxqY3lCbGVIUmxibVJ6SUVGamRHbHZiaUI3WEc1Y2JpQWdJQ0JqYjI1emRISjFZM1J2Y2lndUxpNWhjbWR6S1NCN1hHNGdJQ0FnSUNBZ0lITjFjR1Z5S0M0dUxtRnlaM01wTzF4dUlDQWdJQ0FnSUNCMGFHbHpMbWx1WVdOMGFYWmxSbkpoYldWeklEMGdNRHRjYmlBZ0lDQWdJQ0FnZEdocGN5NWpZV3hqZFd4aGRHVnpWbVZzYjJOcGRIa2dQU0IwY25WbE8xeHVJQ0FnSUgxY2JseHVJQ0FnSUc5dVZYQmtZWFJsS0hCb2VYTnBZM01zSUdaeVlXMWxVM1JoYlhBc0lHVnNZWEJ6WldRcElIdGNiaUFnSUNBZ0lDQWdkR2hwY3k1b1lYTkRhR0Z1WjJWa0lEMGdabUZzYzJVN1hHNWNiaUFnSUNBZ0lDQWdabTl5SUNoc1pYUWdhU0E5SURBN0lHa2dQQ0IwYUdsekxtNTFiVlpoYkhWbFMyVjVjenNnYVNzcktTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNCamIyNXpkQ0JyWlhrZ1BTQjBhR2x6TG5aaGJIVmxTMlY1YzF0cFhUdGNiaUFnSUNBZ0lDQWdJQ0FnSUdOdmJuTjBJSFpoYkhWbElEMGdkR2hwY3k1MllXeDFaWE5iYTJWNVhUdGNiaUFnSUNBZ0lDQWdJQ0FnSUdOdmJuTjBJSEJ5WlhacGIzVnpWbUZzZFdVZ1BTQjJZV3gxWlM1d2NtVjJPMXh1WEc0Z0lDQWdJQ0FnSUNBZ0lDQXZMeUJCY0hCc2VTQmhZMk5sYkdWeVlYUnBiMjVjYmlBZ0lDQWdJQ0FnSUNBZ0lIWmhiSFZsTG5abGJHOWphWFI1SUNzOUlITndaV1ZrVUdWeVJuSmhiV1VvZG1Gc2RXVXVZV05qWld4bGNtRjBhVzl1TENCbGJHRndjMlZrS1R0Y2JseHVJQ0FnSUNBZ0lDQWdJQ0FnTHk4Z1FYQndiSGtnWm5KcFkzUnBiMjVjYmlBZ0lDQWdJQ0FnSUNBZ0lIWmhiSFZsTG5abGJHOWphWFI1SUNvOUlDZ3hJQzBnZG1Gc2RXVXVabkpwWTNScGIyNHBJQ29xSUNobGJHRndjMlZrSUM4Z01UQXdLVHRjYmx4dUlDQWdJQ0FnSUNBZ0lDQWdMeThnUVhCd2JIa2djM0J5YVc1blhHNGdJQ0FnSUNBZ0lDQWdJQ0JwWmlBb2RtRnNkV1V1YzNCeWFXNW5JQ1ltSUdselRuVnRLSFpoYkhWbExuUnZLU2tnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUdOdmJuTjBJR1JwYzNSaGJtTmxWRzlVWVhKblpYUWdQU0IyWVd4MVpTNTBieUF0SUhaaGJIVmxMbU4xY25KbGJuUTdYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdkbUZzZFdVdWRtVnNiMk5wZEhrZ0t6MGdaR2x6ZEdGdVkyVlViMVJoY21kbGRDQXFJSE53WldWa1VHVnlSbkpoYldVb2RtRnNkV1V1YzNCeWFXNW5MQ0JsYkdGd2MyVmtLVHRjYmlBZ0lDQWdJQ0FnSUNBZ0lIMWNibHh1SUNBZ0lDQWdJQ0FnSUNBZ0x5OGdRWEJ3YkhrZ2JHRjBaWE4wSUhabGJHOWphWFI1WEc0Z0lDQWdJQ0FnSUNBZ0lDQjJZV3gxWlM1amRYSnlaVzUwSUNzOUlITndaV1ZrVUdWeVJuSmhiV1VvZG1Gc2RXVXVkbVZzYjJOcGRIa3NJR1ZzWVhCelpXUXBPMXh1SUNBZ0lDQWdJQ0FnSUNBZ1hHNGdJQ0FnSUNBZ0lDQWdJQ0F2THlCRGFHVmpheUJwWmlCMllXeDFaU0JvWVhNZ1kyaGhibWRsWkZ4dUlDQWdJQ0FnSUNBZ0lDQWdhV1lnS0haaGJIVmxMbU4xY25KbGJuUWdJVDA5SUhCeVpYWnBiM1Z6Vm1Gc2RXVWdmSHdnVFdGMGFDNWhZbk1vZG1Gc2RXVXVkbVZzYjJOcGRIa3BJRDQ5SUhaaGJIVmxMbk4wYjNCVGNHVmxaQ0I4ZkNBb2RtRnNkV1V1YzNCeWFXNW5JQ1ltSUhaaGJIVmxMbU4xY25KbGJuUWdJVDA5SUhaaGJIVmxMblJ2S1NrZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lIUm9hWE11YUdGelEyaGhibWRsWkNBOUlIUnlkV1U3WEc0Z0lDQWdJQ0FnSUNBZ0lDQjlYRzRnSUNBZ0lDQWdJSDFjYmlBZ0lDQjlYRzVjYmlBZ0lDQnZia1p5WVcxbFJXNWtLQ2tnZTF4dUlDQWdJQ0FnSUNCcFppQW9kR2hwY3k1aGRYUnZSVzVrS1NCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0IwYUdsekxtbHVZV04wYVhabFJuSmhiV1Z6SUQwZ2RHaHBjeTVvWVhORGFHRnVaMlZrSUQ4Z01TQTZJSFJvYVhNdWFXNWhZM1JwZG1WR2NtRnRaWE1nS3lBeE8xeHVYRzRnSUNBZ0lDQWdJQ0FnSUNCcFppQW9kR2hwY3k1cGJtRmpkR2wyWlVaeVlXMWxjeUErUFNCMGFHbHpMbTFoZUVsdVlXTjBhWFpsUm5KaGJXVnpLU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnZEdocGN5NXpkRzl3S0NrN1hHNGdJQ0FnSUNBZ0lDQWdJQ0I5WEc0Z0lDQWdJQ0FnSUgxY2JpQWdJQ0I5WEc1Y2JpQWdJQ0F2S2x4dUlDQWdJQ0FnSUNBaklFZGxkQ0JrWldaaGRXeDBJRk5wYlhWc1lYUmxJSEJ5YjNCelhHNWNiaUFnSUNBZ0lDQWdRSEpsZEhWeWJpQmJiMkpxWldOMFhWeHVJQ0FnSUNvdlhHNGdJQ0FnWjJWMFJHVm1ZWFZzZEZCeWIzQnpLQ2tnZTF4dUlDQWdJQ0FnSUNCeVpYUjFjbTRnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdMaTR1YzNWd1pYSXVaMlYwUkdWbVlYVnNkRkJ5YjNCektDa3NYRzRnSUNBZ0lDQWdJQ0FnSUNCaGRYUnZSVzVrT2lCMGNuVmxMRnh1SUNBZ0lDQWdJQ0FnSUNBZ2JXRjRTVzVoWTNScGRtVkdjbUZ0WlhNNklETmNiaUFnSUNBZ0lDQWdmVHRjYmlBZ0lDQjlYRzVjYmlBZ0lDQXZLbHh1SUNBZ0lDQWdJQ0FqSUVkbGRDQmtaV1poZFd4MElGTnBiWFZzWVhSbElIWmhiSFZsSUhCeWIzQnpYRzVjYmlBZ0lDQWdJQ0FnUUhKbGRIVnliaUJiYjJKcVpXTjBYVnh1SUNBZ0lDb3ZYRzRnSUNBZ1oyVjBSR1ZtWVhWc2RGWmhiSFZsS0NrZ2UxeHVJQ0FnSUNBZ0lDQnlaWFIxY200Z2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnTGk0dWMzVndaWEl1WjJWMFJHVm1ZWFZzZEZaaGJIVmxLQ2tzWEc0Z0lDQWdJQ0FnSUNBZ0lDQmhZMk5sYkdWeVlYUnBiMjQ2SURBc0lDOHZJRnR1ZFcxaVpYSmRPaUJCWTJObGJHVnlZWFJwYjI0Z2RHOGdZWEJ3YkhrZ2RHOGdkbUZzZFdVc0lHbHVJSFZ1YVhSeklIQmxjaUJ6WldOdmJtUmNiaUFnSUNBZ0lDQWdJQ0FnSUdKdmRXNWpaVG9nTUN3Z0x5OGdXMjUxYldKbGNsMDZJRVpoWTNSdmNpQjBieUJ0ZFd4MGFYQnNlU0IyWld4dlkybDBlU0JpZVNCdmJpQmliM1Z1WTJWY2JpQWdJQ0FnSUNBZ0lDQWdJSE53Y21sdVp6b2dNQ3dnTHk4Z1cyNTFiV0psY2wwNklGTndjbWx1WnlCemRISmxibWQwYUNCa2RYSnBibWNnSjNOMGNtbHVaeWRjYmlBZ0lDQWdJQ0FnSUNBZ0lITjBiM0JUY0dWbFpEb2dNQzR3TURBeExDQXZMeUJiYm5WdFltVnlYVG9nVTNSdmNDQnphVzExYkdGMGFXOXVJSFZ1WkdWeUlIUm9hWE1nYzNCbFpXUmNiaUFnSUNBZ0lDQWdJQ0FnSUdaeWFXTjBhVzl1T2lBd0lDOHZJRnR1ZFcxaVpYSmRPaUJHY21samRHbHZiaUIwYnlCaGNIQnNlU0J3WlhJZ1puSmhiV1VzSURBdE1WeHVJQ0FnSUNBZ0lDQjlPMXh1SUNBZ0lIMWNibHh1SUNBZ0lDOHFYRzRnSUNBZ0lDQWdJQ01nUjJWMElHUmxabUYxYkhRZ1UybHRkV3hoZEdVZ2RtRnNkV1VnY0hKdmNHVnlkSGtnYm1GdFpWeHVJQ0FnSUNBZ0lDQWpJeUJUWlhRZ2RtRnNkV1Z6SUhSdklIUm9hWE1nZDJobGJpQmhJR0IyWVd4MVpXQWdhWE1nYm05MElIQnliM1pwWkdWa0lHRnpJR0Z1SUc5aWFtVmpkRnh1WEc0Z0lDQWdJQ0FnSUVCeVpYUjFjbTRnVzNOMGNtbHVaMTFjYmlBZ0lDQXFMMXh1SUNBZ0lHZGxkRVJsWm1GMWJIUldZV3gxWlZCeWIzQW9LU0I3WEc0Z0lDQWdJQ0FnSUhKbGRIVnliaUFuZG1Wc2IyTnBkSGtuTzF4dUlDQWdJSDFjYm4xY2JpSmRmUT09XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9hY3Rpb25zL1BoeXNpY3MuanNcbiAqKiBtb2R1bGUgaWQgPSA2XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbnZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfQWN0aW9uMiA9IHJlcXVpcmUoJy4vQWN0aW9uJyk7XG5cbnZhciBfQWN0aW9uMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX0FjdGlvbjIpO1xuXG52YXIgX1BvaW50ZXIgPSByZXF1aXJlKCcuLi9pbnB1dC9Qb2ludGVyJyk7XG5cbnZhciBfUG9pbnRlcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9Qb2ludGVyKTtcblxudmFyIF9jYWxjID0gcmVxdWlyZSgnLi4vaW5jL2NhbGMnKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoIXNlbGYpIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBjYWxsICYmICh0eXBlb2YgY2FsbCA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSA/IGNhbGwgOiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90IFwiICsgdHlwZW9mIHN1cGVyQ2xhc3MpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIGVudW1lcmFibGU6IGZhbHNlLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIDogc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzczsgfVxuXG4vKlxuICAgIFNjcmFwZSB4L3kgY29vcmRpbmF0ZXMgZnJvbSBwcm92aWRlZCBldmVudFxuXG4gICAgQHBhcmFtIFtldmVudF1cbiAgICBAcmV0dXJuIFtvYmplY3RdXG4qL1xudmFyIG1vdXNlRXZlbnRUb1BvaW50ID0gZnVuY3Rpb24gKGUpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICB4OiBlLnBhZ2VYLFxuICAgICAgICB5OiBlLnBhZ2VZXG4gICAgfTtcbn07XG5cbnZhciB0b3VjaEV2ZW50VG9Qb2ludCA9IGZ1bmN0aW9uIChfcmVmKSB7XG4gICAgdmFyIGNoYW5nZWRUb3VjaGVzID0gX3JlZi5jaGFuZ2VkVG91Y2hlcztcbiAgICByZXR1cm4ge1xuICAgICAgICB4OiBjaGFuZ2VkVG91Y2hlc1swXS5jbGllbnRYLFxuICAgICAgICB5OiBjaGFuZ2VkVG91Y2hlc1swXS5jbGllbnRZXG4gICAgfTtcbn07XG5cbnZhciBjcmVhdGVQb2ludGVyID0gZnVuY3Rpb24gKGUpIHtcbiAgICByZXR1cm4gZS50b3VjaGVzID8gbmV3IF9Qb2ludGVyMi5kZWZhdWx0KHRvdWNoRXZlbnRUb1BvaW50KGUpLCAndG91Y2htb3ZlJywgdG91Y2hFdmVudFRvUG9pbnQpIDogbmV3IF9Qb2ludGVyMi5kZWZhdWx0KG1vdXNlRXZlbnRUb1BvaW50KGUpLCAnbW91c2Vtb3ZlJywgbW91c2VFdmVudFRvUG9pbnQpO1xufTtcblxudmFyIGdldEFjdHVhbEV2ZW50ID0gZnVuY3Rpb24gKGUpIHtcbiAgICByZXR1cm4gZS5vcmlnaW5hbEV2ZW50IHx8IGU7XG59O1xuXG52YXIgVHJhY2sgPSBmdW5jdGlvbiAoX0FjdGlvbikge1xuICAgIF9pbmhlcml0cyhUcmFjaywgX0FjdGlvbik7XG5cbiAgICBmdW5jdGlvbiBUcmFjaygpIHtcbiAgICAgICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFRyYWNrKTtcblxuICAgICAgICByZXR1cm4gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgX0FjdGlvbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpKTtcbiAgICB9XG5cbiAgICBUcmFjay5wcm90b3R5cGUuc3RhcnQgPSBmdW5jdGlvbiBzdGFydChpbnB1dCkge1xuICAgICAgICBfQWN0aW9uLnByb3RvdHlwZS5zdGFydC5jYWxsKHRoaXMpO1xuXG4gICAgICAgIGlmIChpbnB1dCkge1xuICAgICAgICAgICAgdGhpcy5pbnB1dCA9IGlucHV0LnN0YXRlID8gaW5wdXQgOiBjcmVhdGVQb2ludGVyKGdldEFjdHVhbEV2ZW50KGlucHV0KSk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmlucHV0T2Zmc2V0ID0ge307XG4gICAgICAgIHRoaXMuaW5wdXRPcmlnaW4gPSBfZXh0ZW5kcyh7fSwgdGhpcy5pbnB1dC5zdGF0ZSk7XG4gICAgICAgIHRoaXMuaW5wdXQuc3RhcnQoKTtcbiAgICB9O1xuXG4gICAgVHJhY2sucHJvdG90eXBlLnN0b3AgPSBmdW5jdGlvbiBzdG9wKCkge1xuICAgICAgICBfQWN0aW9uLnByb3RvdHlwZS5zdG9wLmNhbGwodGhpcyk7XG4gICAgICAgIHRoaXMuaW5wdXQuc3RvcCgpO1xuICAgIH07XG5cbiAgICBUcmFjay5wcm90b3R5cGUub25VcGRhdGUgPSBmdW5jdGlvbiBvblVwZGF0ZSh0cmFjaywgZnJhbWVTdGFtcCwgZWxhcHNlZCkge1xuICAgICAgICB0aGlzLmlucHV0T2Zmc2V0ID0gKDAsIF9jYWxjLm9mZnNldCkodGhpcy5pbnB1dE9yaWdpbiwgdGhpcy5pbnB1dC5zdGF0ZSk7XG5cbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLm51bVZhbHVlS2V5czsgaSsrKSB7XG4gICAgICAgICAgICB2YXIga2V5ID0gdGhpcy52YWx1ZUtleXNbaV07XG5cbiAgICAgICAgICAgIGlmICh0aGlzLmlucHV0T2Zmc2V0Lmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICAgICAgICB2YXIgdmFsdWUgPSB0aGlzLnZhbHVlc1trZXldO1xuICAgICAgICAgICAgICAgIGlmICh2YWx1ZS5kaXJlY3QpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFsdWUuY3VycmVudCA9IHRoaXMuaW5wdXQuc3RhdGVba2V5XTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB2YWx1ZS5jdXJyZW50ID0gdmFsdWUub3JpZ2luICsgdGhpcy5pbnB1dE9mZnNldFtrZXldO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC8vIFNtb290aCB2YWx1ZSBpZiB3ZSBoYXZlIHNtb290aGluZ1xuICAgICAgICAgICAgICAgIGlmICh2YWx1ZS5zbW9vdGgpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFsdWUuY3VycmVudCA9ICgwLCBfY2FsYy5zbW9vdGgpKHZhbHVlLmN1cnJlbnQsIHZhbHVlLnByZXYsIGVsYXBzZWQsIHZhbHVlLnNtb290aCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcblxuICAgIFRyYWNrLnByb3RvdHlwZS5nZXREZWZhdWx0VmFsdWUgPSBmdW5jdGlvbiBnZXREZWZhdWx0VmFsdWUoKSB7XG4gICAgICAgIHJldHVybiBfZXh0ZW5kcyh7fSwgX0FjdGlvbi5wcm90b3R5cGUuZ2V0RGVmYXVsdFZhbHVlLmNhbGwodGhpcyksIHtcbiAgICAgICAgICAgIGFtcDogMSxcbiAgICAgICAgICAgIGVzY2FwZUFtcDogMCxcbiAgICAgICAgICAgIGRpcmVjdDogZmFsc2VcbiAgICAgICAgfSk7XG4gICAgfTtcblxuICAgIHJldHVybiBUcmFjaztcbn0oX0FjdGlvbjMuZGVmYXVsdCk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IFRyYWNrO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluTnlZeTloWTNScGIyNXpMMVJ5WVdOckxtcHpJbDBzSW01aGJXVnpJanBiWFN3aWJXRndjR2x1WjNNaU9pSTdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenRCUVZWQkxFbEJRVTBzYjBKQlFXOUNMRlZCUVVNc1EwRkJSRHRYUVVGUk8wRkJRemxDTEZkQlFVY3NSVUZCUlN4TFFVRkdPMEZCUTBnc1YwRkJSeXhGUVVGRkxFdEJRVVk3TzBOQlJtMUNPenRCUVVzeFFpeEpRVUZOTEc5Q1FVRnZRanRSUVVGSE8xZEJRWE5DTzBGQlF5OURMRmRCUVVjc1pVRkJaU3hEUVVGbUxFVkJRV3RDTEU5QlFXeENPMEZCUTBnc1YwRkJSeXhsUVVGbExFTkJRV1lzUlVGQmEwSXNUMEZCYkVJN08wTkJSbTFDT3p0QlFVc3hRaXhKUVVGTkxHZENRVUZuUWl4VlFVRkRMRU5CUVVRN1YwRkJUeXhGUVVGRkxFOUJRVVlzUjBGRGVrSXNjMEpCUVZrc2EwSkJRV3RDTEVOQlFXeENMRU5CUVZvc1JVRkJhME1zVjBGQmJFTXNSVUZCSzBNc2FVSkJRUzlETEVOQlJIbENMRWRCUlhwQ0xITkNRVUZaTEd0Q1FVRnJRaXhEUVVGc1FpeERRVUZhTEVWQlFXdERMRmRCUVd4RExFVkJRU3RETEdsQ1FVRXZReXhEUVVaNVFqdERRVUZRT3p0QlFVbDBRaXhKUVVGTkxHbENRVUZwUWl4VlFVRkRMRU5CUVVRN1YwRkJUeXhGUVVGRkxHRkJRVVlzU1VGQmJVSXNRMEZCYmtJN1EwRkJVRHM3U1VGRlJqczdPenM3T3pzN08yOUNRVU5xUWl4MVFrRkJUU3hQUVVGUE8wRkJRMVFzTUVKQlFVMHNTMEZCVGl4WlFVUlRPenRCUVVkVUxGbEJRVWtzUzBGQlNpeEZRVUZYTzBGQlExQXNhVUpCUVVzc1MwRkJUQ3hIUVVGaExFMUJRVTBzUzBGQlRpeEhRVUZqTEV0QlFXUXNSMEZCYzBJc1kwRkJZeXhsUVVGbExFdEJRV1lzUTBGQlpDeERRVUYwUWl4RFFVUk9PMU5CUVZnN08wRkJTVUVzWVVGQlN5eFhRVUZNTEVkQlFXMUNMRVZCUVc1Q0xFTkJVRk03UVVGUlZDeGhRVUZMTEZkQlFVd3NaMEpCUVhkQ0xFdEJRVXNzUzBGQlRDeERRVUZYTEV0QlFWZ3NRMEZCZUVJc1EwRlNVenRCUVZOVUxHRkJRVXNzUzBGQlRDeERRVUZYTEV0QlFWZ3NSMEZVVXpzN08wRkJSRWtzYjBKQllXcENMSFZDUVVGUE8wRkJRMGdzTUVKQlFVMHNTVUZCVGl4WlFVUkhPMEZCUlVnc1lVRkJTeXhMUVVGTUxFTkJRVmNzU1VGQldDeEhRVVpIT3pzN1FVRmlWU3h2UWtGclFtcENMRFpDUVVGVExFOUJRVThzV1VGQldTeFRRVUZUTzBGQlEycERMR0ZCUVVzc1YwRkJUQ3hIUVVGdFFpeHJRa0ZCVHl4TFFVRkxMRmRCUVV3c1JVRkJhMElzUzBGQlN5eExRVUZNTEVOQlFWY3NTMEZCV0N4RFFVRTFReXhEUVVScFF6czdRVUZIYWtNc1lVRkJTeXhKUVVGSkxFbEJRVWtzUTBGQlNpeEZRVUZQTEVsQlFVa3NTMEZCU3l4WlFVRk1MRVZCUVcxQ0xFZEJRWFpETEVWQlFUUkRPMEZCUTNoRExHZENRVUZOTEUxQlFVMHNTMEZCU3l4VFFVRk1MRU5CUVdVc1EwRkJaaXhEUVVGT0xFTkJSR3RET3p0QlFVZDRReXhuUWtGQlNTeExRVUZMTEZkQlFVd3NRMEZCYVVJc1kwRkJha0lzUTBGQlowTXNSMEZCYUVNc1EwRkJTaXhGUVVFd1F6dEJRVU4wUXl4dlFrRkJUU3hSUVVGUkxFdEJRVXNzVFVGQlRDeERRVUZaTEVkQlFWb3NRMEZCVWl4RFFVUm5RenRCUVVWMFF5eHZRa0ZCU1N4TlFVRk5MRTFCUVU0c1JVRkJZenRCUVVOa0xEQkNRVUZOTEU5QlFVNHNSMEZCWjBJc1MwRkJTeXhMUVVGTUxFTkJRVmNzUzBGQldDeERRVUZwUWl4SFFVRnFRaXhEUVVGb1FpeERRVVJqTzJsQ1FVRnNRaXhOUVVWUE8wRkJRMGdzTUVKQlFVMHNUMEZCVGl4SFFVRm5RaXhOUVVGTkxFMUJRVTRzUjBGQlpTeExRVUZMTEZkQlFVd3NRMEZCYVVJc1IwRkJha0lzUTBGQlppeERRVVJpTzJsQ1FVWlFPenM3UVVGR2MwTXNiMEpCVTJ4RExFMUJRVTBzVFVGQlRpeEZRVUZqTzBGQlEyUXNNRUpCUVUwc1QwRkJUaXhIUVVGblFpeHJRa0ZCVHl4TlFVRk5MRTlCUVU0c1JVRkJaU3hOUVVGTkxFbEJRVTRzUlVGQldTeFBRVUZzUXl4RlFVRXlReXhOUVVGTkxFMUJRVTRzUTBGQk0wUXNRMEZFWXp0cFFrRkJiRUk3WVVGVVNqdFRRVWhLT3pzN1FVRnlRbUVzYjBKQmQwTnFRaXcyUTBGQmEwSTdRVUZEWkN3MFFrRkRUeXhyUWtGQlRTeGxRVUZPTzBGQlEwZ3NhVUpCUVVzc1EwRkJURHRCUVVOQkxIVkNRVUZYTEVOQlFWZzdRVUZEUVN4dlFrRkJVU3hMUVVGU08xVkJTa29zUTBGRVl6czdPMWRCZUVORUlpd2labWxzWlNJNklsUnlZV05yTG1weklpd2ljMjkxY21ObFVtOXZkQ0k2SWk5VmMyVnljeTlOWVhSMEwxTnBkR1Z6TDNCdmNHMXZkR2x2YmlJc0luTnZkWEpqWlhORGIyNTBaVzUwSWpwYkltbHRjRzl5ZENCQlkzUnBiMjRnWm5KdmJTQW5MaTlCWTNScGIyNG5PMXh1YVcxd2IzSjBJRkJ2YVc1MFpYSWdabkp2YlNBbkxpNHZhVzV3ZFhRdlVHOXBiblJsY2ljN1hHNXBiWEJ2Y25RZ2V5QnpiVzl2ZEdnc0lHOW1abk5sZENCOUlHWnliMjBnSnk0dUwybHVZeTlqWVd4akp6dGNibHh1THlwY2JpQWdJQ0JUWTNKaGNHVWdlQzk1SUdOdmIzSmthVzVoZEdWeklHWnliMjBnY0hKdmRtbGtaV1FnWlhabGJuUmNibHh1SUNBZ0lFQndZWEpoYlNCYlpYWmxiblJkWEc0Z0lDQWdRSEpsZEhWeWJpQmJiMkpxWldOMFhWeHVLaTljYm1OdmJuTjBJRzF2ZFhObFJYWmxiblJVYjFCdmFXNTBJRDBnS0dVcElEMCtJQ2g3WEc0Z0lDQWdlRG9nWlM1d1lXZGxXQ3hjYmlBZ0lDQjVPaUJsTG5CaFoyVlpYRzU5S1R0Y2JseHVZMjl1YzNRZ2RHOTFZMmhGZG1WdWRGUnZVRzlwYm5RZ1BTQW9leUJqYUdGdVoyVmtWRzkxWTJobGN5QjlLU0E5UGlBb2UxeHVJQ0FnSUhnNklHTm9ZVzVuWldSVWIzVmphR1Z6V3pCZExtTnNhV1Z1ZEZnc1hHNGdJQ0FnZVRvZ1kyaGhibWRsWkZSdmRXTm9aWE5iTUYwdVkyeHBaVzUwV1Z4dWZTazdYRzVjYm1OdmJuTjBJR055WldGMFpWQnZhVzUwWlhJZ1BTQW9aU2tnUFQ0Z1pTNTBiM1ZqYUdWeklEOWNiaUFnSUNCdVpYY2dVRzlwYm5SbGNpaDBiM1ZqYUVWMlpXNTBWRzlRYjJsdWRDaGxLU3dnSjNSdmRXTm9iVzkyWlNjc0lIUnZkV05vUlhabGJuUlViMUJ2YVc1MEtTQTZJRnh1SUNBZ0lHNWxkeUJRYjJsdWRHVnlLRzF2ZFhObFJYWmxiblJVYjFCdmFXNTBLR1VwTENBbmJXOTFjMlZ0YjNabEp5d2diVzkxYzJWRmRtVnVkRlJ2VUc5cGJuUXBPMXh1WEc1amIyNXpkQ0JuWlhSQlkzUjFZV3hGZG1WdWRDQTlJQ2hsS1NBOVBpQmxMbTl5YVdkcGJtRnNSWFpsYm5RZ2ZId2daVHRjYmx4dVpYaHdiM0owSUdSbFptRjFiSFFnWTJ4aGMzTWdWSEpoWTJzZ1pYaDBaVzVrY3lCQlkzUnBiMjRnZTF4dUlDQWdJSE4wWVhKMEtHbHVjSFYwS1NCN1hHNGdJQ0FnSUNBZ0lITjFjR1Z5TG5OMFlYSjBLQ2s3WEc1Y2JpQWdJQ0FnSUNBZ2FXWWdLR2x1Y0hWMEtTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNCMGFHbHpMbWx1Y0hWMElEMGdhVzV3ZFhRdWMzUmhkR1VnUHlCcGJuQjFkQ0E2SUdOeVpXRjBaVkJ2YVc1MFpYSW9aMlYwUVdOMGRXRnNSWFpsYm5Rb2FXNXdkWFFwS1R0Y2JpQWdJQ0FnSUNBZ2ZWeHVYRzRnSUNBZ0lDQWdJSFJvYVhNdWFXNXdkWFJQWm1aelpYUWdQU0I3ZlR0Y2JpQWdJQ0FnSUNBZ2RHaHBjeTVwYm5CMWRFOXlhV2RwYmlBOUlIc2dMaTR1ZEdocGN5NXBibkIxZEM1emRHRjBaU0I5TzF4dUlDQWdJQ0FnSUNCMGFHbHpMbWx1Y0hWMExuTjBZWEowS0NrN1hHNGdJQ0FnZlZ4dVhHNGdJQ0FnYzNSdmNDZ3BJSHRjYmlBZ0lDQWdJQ0FnYzNWd1pYSXVjM1J2Y0NncE8xeHVJQ0FnSUNBZ0lDQjBhR2x6TG1sdWNIVjBMbk4wYjNBb0tUdGNiaUFnSUNCOVhHNWNiaUFnSUNCdmJsVndaR0YwWlNoMGNtRmpheXdnWm5KaGJXVlRkR0Z0Y0N3Z1pXeGhjSE5sWkNrZ2UxeHVJQ0FnSUNBZ0lDQjBhR2x6TG1sdWNIVjBUMlptYzJWMElEMGdiMlptYzJWMEtIUm9hWE11YVc1d2RYUlBjbWxuYVc0c0lIUm9hWE11YVc1d2RYUXVjM1JoZEdVcE8xeHVYRzRnSUNBZ0lDQWdJR1p2Y2lBb2JHVjBJR2tnUFNBd095QnBJRHdnZEdocGN5NXVkVzFXWVd4MVpVdGxlWE03SUdrckt5a2dlMXh1SUNBZ0lDQWdJQ0FnSUNBZ1kyOXVjM1FnYTJWNUlEMGdkR2hwY3k1MllXeDFaVXRsZVhOYmFWMDdYRzVjYmlBZ0lDQWdJQ0FnSUNBZ0lHbG1JQ2gwYUdsekxtbHVjSFYwVDJabWMyVjBMbWhoYzA5M2JsQnliM0JsY25SNUtHdGxlU2twSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCamIyNXpkQ0IyWVd4MVpTQTlJSFJvYVhNdWRtRnNkV1Z6VzJ0bGVWMDdYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdhV1lnS0haaGJIVmxMbVJwY21WamRDa2dlMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCMllXeDFaUzVqZFhKeVpXNTBJRDBnZEdocGN5NXBibkIxZEM1emRHRjBaVnRyWlhsZE8xeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lIMGdaV3h6WlNCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJSFpoYkhWbExtTjFjbkpsYm5RZ1BTQjJZV3gxWlM1dmNtbG5hVzRnS3lCMGFHbHpMbWx1Y0hWMFQyWm1jMlYwVzJ0bGVWMDdYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdmVnh1WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnTHk4Z1UyMXZiM1JvSUhaaGJIVmxJR2xtSUhkbElHaGhkbVVnYzIxdmIzUm9hVzVuWEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnYVdZZ0tIWmhiSFZsTG5OdGIyOTBhQ2tnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQjJZV3gxWlM1amRYSnlaVzUwSUQwZ2MyMXZiM1JvS0haaGJIVmxMbU4xY25KbGJuUXNJSFpoYkhWbExuQnlaWFlzSUdWc1lYQnpaV1FzSUhaaGJIVmxMbk50YjI5MGFDazdYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdmVnh1SUNBZ0lDQWdJQ0FnSUNBZ2ZWeHVJQ0FnSUNBZ0lDQjlYRzRnSUNBZ2ZWeHVYRzRnSUNBZ1oyVjBSR1ZtWVhWc2RGWmhiSFZsS0NrZ2UxeHVJQ0FnSUNBZ0lDQnlaWFIxY200Z2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnTGk0dWMzVndaWEl1WjJWMFJHVm1ZWFZzZEZaaGJIVmxLQ2tzWEc0Z0lDQWdJQ0FnSUNBZ0lDQmhiWEE2SURFc1hHNGdJQ0FnSUNBZ0lDQWdJQ0JsYzJOaGNHVkJiWEE2SURBc1hHNGdJQ0FnSUNBZ0lDQWdJQ0JrYVhKbFkzUTZJR1poYkhObFhHNGdJQ0FnSUNBZ0lIMDdYRzRnSUNBZ2ZWeHVmVnh1SWwxOVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvYWN0aW9ucy9UcmFjay5qc1xuICoqIG1vZHVsZSBpZCA9IDdcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF9sb29wID0gcmVxdWlyZSgnLi9sb29wJyk7XG5cbnZhciBsb29wID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQoX2xvb3ApO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChvYmopIHsgaWYgKG9iaiAmJiBvYmouX19lc01vZHVsZSkgeyByZXR1cm4gb2JqOyB9IGVsc2UgeyB2YXIgbmV3T2JqID0ge307IGlmIChvYmogIT0gbnVsbCkgeyBmb3IgKHZhciBrZXkgaW4gb2JqKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBrZXkpKSBuZXdPYmpba2V5XSA9IG9ialtrZXldOyB9IH0gbmV3T2JqLmRlZmF1bHQgPSBvYmo7IHJldHVybiBuZXdPYmo7IH0gfVxuXG5mdW5jdGlvbiBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMob2JqLCBrZXlzKSB7IHZhciB0YXJnZXQgPSB7fTsgZm9yICh2YXIgaSBpbiBvYmopIHsgaWYgKGtleXMuaW5kZXhPZihpKSA+PSAwKSBjb250aW51ZTsgaWYgKCFPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBpKSkgY29udGludWU7IHRhcmdldFtpXSA9IG9ialtpXTsgfSByZXR1cm4gdGFyZ2V0OyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbnZhciBQcm9jZXNzID0gZnVuY3Rpb24gKCkge1xuICAgIC8qXG4gICAgICAgIFtvYmplY3RdOiBQcm9wZXJ0aWVzXG4gICAgICAgIFtib29sZWFuXSAob3B0aW9uYWwpOiBJcyBQcm9jZXNzIGxhenk/XG4gICAgKi9cblxuICAgIGZ1bmN0aW9uIFByb2Nlc3MocHJvcHMsIGlzTGF6eSkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gICAgICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBQcm9jZXNzKTtcblxuICAgICAgICB0aGlzLmlkID0gbG9vcC5nZXRQcm9jZXNzSWQoKTtcblxuICAgICAgICB0aGlzLl9vbkNsZWFudXAgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBfdGhpcy5zdG9wKCk7XG4gICAgICAgICAgICBfdGhpcy5vbkNsZWFudXAgPSB1bmRlZmluZWQ7XG4gICAgICAgIH07XG5cbiAgICAgICAgdGhpcy5fb25BY3RpdmF0ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiBfdGhpcy5vbkNsZWFudXAgPSBfdGhpcy5fb25DbGVhbnVwO1xuICAgICAgICB9O1xuXG4gICAgICAgIHRoaXMuc2V0KHRoaXMuZ2V0RGVmYXVsdFByb3BzKCkpO1xuICAgICAgICB0aGlzLnNldChwcm9wcyk7XG5cbiAgICAgICAgdGhpcy5pc0xhenkgPSBpc0xhenkgfHwgZmFsc2U7XG4gICAgICAgIHRoaXMuaXNBY3RpdmUgPSBmYWxzZTtcbiAgICB9XG5cbiAgICBQcm9jZXNzLnByb3RvdHlwZS5zZXQgPSBmdW5jdGlvbiBzZXQocHJvcHMpIHtcbiAgICAgICAgZm9yICh2YXIga2V5IGluIHByb3BzKSB7XG4gICAgICAgICAgICBpZiAocHJvcHMuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgICAgICAgIHRoaXNba2V5XSA9IHByb3BzW2tleV07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xuXG4gICAgUHJvY2Vzcy5wcm90b3R5cGUuc3RhcnQgPSBmdW5jdGlvbiBzdGFydCgpIHtcbiAgICAgICAgbG9vcC5hY3RpdmF0ZSh0aGlzLmlkLCB0aGlzKTtcblxuICAgICAgICB0aGlzLm9uQ2xlYW51cCA9IHRoaXMub25BY3RpdmF0ZSA9IHVuZGVmaW5lZDtcblxuICAgICAgICAvLyBQcml2YXRlIGBvblN0YXJ0YFxuICAgICAgICBpZiAodGhpcy5fb25TdGFydCkge1xuICAgICAgICAgICAgdGhpcy5fb25TdGFydCh0aGlzKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFB1YmxpYyBgb25TdGFydGBcbiAgICAgICAgaWYgKHRoaXMub25TdGFydCkge1xuICAgICAgICAgICAgdGhpcy5vblN0YXJ0KHRoaXMpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfTtcblxuICAgIFByb2Nlc3MucHJvdG90eXBlLnN0b3AgPSBmdW5jdGlvbiBzdG9wKCkge1xuICAgICAgICBsb29wLmRlYWN0aXZhdGUodGhpcy5pZCk7XG5cbiAgICAgICAgLy8gUHJpdmF0ZSBgb25TdG9wYFxuICAgICAgICBpZiAodGhpcy5fb25TdG9wKSB7XG4gICAgICAgICAgICB0aGlzLl9vblN0b3AodGhpcyk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBQdWJsaWMgYG9uU3RvcGBcbiAgICAgICAgaWYgKHRoaXMub25TdG9wKSB7XG4gICAgICAgICAgICB0aGlzLm9uU3RvcCh0aGlzKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH07XG5cbiAgICBQcm9jZXNzLnByb3RvdHlwZS5vbmNlID0gZnVuY3Rpb24gb25jZSgpIHtcbiAgICAgICAgdGhpcy5zdGFydCgpO1xuICAgICAgICB0aGlzLm9uQWN0aXZhdGUgPSB0aGlzLl9vbkFjdGl2YXRlO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xuXG4gICAgLypcbiAgICAgICAgIyBHZXQgZGVmYXVsdCBBY3Rpb24gcHJvcGVydGllc1xuICAgICAgICAgQHJldHVybiBbb2JqZWN0XVxuICAgICovXG5cbiAgICBQcm9jZXNzLnByb3RvdHlwZS5nZXREZWZhdWx0UHJvcHMgPSBmdW5jdGlvbiBnZXREZWZhdWx0UHJvcHMoKSB7XG4gICAgICAgIHJldHVybiB7fTtcbiAgICB9O1xuXG4gICAgLypcbiAgICAgICAgIyBFeHRlbmQgdGhpcyBQcm9jZXNzIHdpdGggbmV3IHByb3BlcnRpZXNcbiAgICAgICAgIyMgUmV0dXJucyBuZXcgaW5zdGFuY2Ugb2YgdGhpcyBQcm9jZXNzJ3MgYHByb3RvdHlwZWAgd2l0aCBleGlzdGluZyBhbmQgbmV3IHByb3BlcnRpZXNcbiAgICAgICAgIEBwYXJhbSBbb2JqZWN0XSAob3B0aW9uYWwpXG4gICAgICAgIEByZXR1cm4gW1Byb2Nlc3NdXG4gICAgKi9cblxuICAgIFByb2Nlc3MucHJvdG90eXBlLmluaGVyaXQgPSBmdW5jdGlvbiBpbmhlcml0KHByb3BzKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXMuaWQ7XG5cbiAgICAgICAgdmFyIGluaGVyaXRlZFByb3BzID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKHRoaXMsIFsnaWQnXSk7XG5cbiAgICAgICAgdmFyIG5ld1Byb2Nlc3MgPSBuZXcgdGhpcy5jb25zdHJ1Y3Rvcihpbmhlcml0ZWRQcm9wcyk7XG4gICAgICAgIHJldHVybiBuZXdQcm9jZXNzLnNldChwcm9wcyk7XG4gICAgfTtcblxuICAgIHJldHVybiBQcm9jZXNzO1xufSgpO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBQcm9jZXNzO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluTnlZeTl3Y205alpYTnpMMUJ5YjJObGMzTXVhbk1pWFN3aWJtRnRaWE1pT2x0ZExDSnRZWEJ3YVc1bmN5STZJanM3T3pzN08wbEJRVms3T3pzN096czdPMGxCUlZNN096czdPenRCUVV0cVFpeGhRVXhwUWl4UFFVdHFRaXhEUVVGWkxFdEJRVm9zUlVGQmJVSXNUVUZCYmtJc1JVRkJNa0k3T3pzNFFrRk1WaXhUUVV0Vk96dEJRVU4yUWl4aFFVRkxMRVZCUVV3c1IwRkJWU3hMUVVGTExGbEJRVXdzUlVGQlZpeERRVVIxUWpzN1FVRkhka0lzWVVGQlN5eFZRVUZNTEVkQlFXdENMRmxCUVUwN1FVRkRjRUlzYTBKQlFVc3NTVUZCVEN4SFFVUnZRanRCUVVWd1FpeHJRa0ZCU3l4VFFVRk1MRWRCUVdsQ0xGTkJRV3BDTEVOQlJtOUNPMU5CUVU0c1EwRklTenM3UVVGUmRrSXNZVUZCU3l4WFFVRk1MRWRCUVcxQ08yMUNRVUZOTEUxQlFVc3NVMEZCVEN4SFFVRnBRaXhOUVVGTExGVkJRVXc3VTBGQmRrSXNRMEZTU1RzN1FVRlZka0lzWVVGQlN5eEhRVUZNTEVOQlFWTXNTMEZCU3l4bFFVRk1MRVZCUVZRc1JVRldkVUk3UVVGWGRrSXNZVUZCU3l4SFFVRk1MRU5CUVZNc1MwRkJWQ3hGUVZoMVFqczdRVUZoZGtJc1lVRkJTeXhOUVVGTUxFZEJRV01zVlVGQlZTeExRVUZXTEVOQllsTTdRVUZqZGtJc1lVRkJTeXhSUVVGTUxFZEJRV2RDTEV0QlFXaENMRU5CWkhWQ08wdEJRVE5DT3p0QlFVeHBRaXh6UWtGelFtcENMRzFDUVVGSkxFOUJRVTg3UVVGRFVDeGhRVUZMTEVsQlFVa3NSMEZCU2l4SlFVRlhMRXRCUVdoQ0xFVkJRWFZDTzBGQlEyNUNMR2RDUVVGSkxFMUJRVTBzWTBGQlRpeERRVUZ4UWl4SFFVRnlRaXhEUVVGS0xFVkJRU3RDTzBGQlF6TkNMSEZDUVVGTExFZEJRVXdzU1VGQldTeE5RVUZOTEVkQlFVNHNRMEZCV2l4RFFVUXlRanRoUVVFdlFqdFRRVVJLT3p0QlFVMUJMR1ZCUVU4c1NVRkJVQ3hEUVZCUE96czdRVUYwUWswc2MwSkJaME5xUWl4NVFrRkJVVHRCUVVOS0xHRkJRVXNzVVVGQlRDeERRVUZqTEV0QlFVc3NSVUZCVEN4RlFVRlRMRWxCUVhaQ0xFVkJSRWs3TzBGQlIwb3NZVUZCU3l4VFFVRk1MRWRCUVdsQ0xFdEJRVXNzVlVGQlRDeEhRVUZyUWl4VFFVRnNRanM3TzBGQlNHSXNXVUZOUVN4TFFVRkxMRkZCUVV3c1JVRkJaVHRCUVVObUxHbENRVUZMTEZGQlFVd3NRMEZCWXl4SlFVRmtMRVZCUkdVN1UwRkJia0k3T3p0QlFVNUpMRmxCVjBFc1MwRkJTeXhQUVVGTUxFVkJRV003UVVGRFpDeHBRa0ZCU3l4UFFVRk1MRU5CUVdFc1NVRkJZaXhGUVVSak8xTkJRV3hDT3p0QlFVbEJMR1ZCUVU4c1NVRkJVQ3hEUVdaSk96czdRVUZvUTFNc2MwSkJhMFJxUWl4MVFrRkJUenRCUVVOSUxHRkJRVXNzVlVGQlRDeERRVUZuUWl4TFFVRkxMRVZCUVV3c1EwRkJhRUk3T3p0QlFVUkhMRmxCU1VNc1MwRkJTeXhQUVVGTUxFVkJRV003UVVGRFpDeHBRa0ZCU3l4UFFVRk1MRU5CUVdFc1NVRkJZaXhGUVVSak8xTkJRV3hDT3pzN1FVRktSeXhaUVZORExFdEJRVXNzVFVGQlRDeEZRVUZoTzBGQlEySXNhVUpCUVVzc1RVRkJUQ3hEUVVGWkxFbEJRVm9zUlVGRVlUdFRRVUZxUWpzN1FVRkpRU3hsUVVGUExFbEJRVkFzUTBGaVJ6czdPMEZCYkVSVkxITkNRV3RGYWtJc2RVSkJRVTg3UVVGRFNDeGhRVUZMTEV0QlFVd3NSMEZFUnp0QlFVVklMR0ZCUVVzc1ZVRkJUQ3hIUVVGclFpeExRVUZMTEZkQlFVd3NRMEZHWmp0QlFVZElMR1ZCUVU4c1NVRkJVQ3hEUVVoSE96czdPenM3T3p0QlFXeEZWU3h6UWtFMlJXcENMRFpEUVVGclFqdEJRVU5rTEdWQlFVOHNSVUZCVUN4RFFVUmpPenM3T3pzN096czdPMEZCTjBWRUxITkNRWGRHYWtJc01rSkJRVkVzVDBGQlR6dFpRVU5JTEV0QlFUQkNMRXRCUVRGQ0xFZEJSRWM3TzFsQlEwa3NNRU5CUVcxQ0xHTkJSSFpDT3p0QlFVVllMRmxCUVUwc1lVRkJZU3hKUVVGSkxFdEJRVXNzVjBGQlRDeERRVUZwUWl4alFVRnlRaXhEUVVGaUxFTkJSa3M3UVVGSFdDeGxRVUZQTEZkQlFWY3NSMEZCV0N4RFFVRmxMRXRCUVdZc1EwRkJVQ3hEUVVoWE96czdWMEY0UmtVaUxDSm1hV3hsSWpvaVVISnZZMlZ6Y3k1cWN5SXNJbk52ZFhKalpWSnZiM1FpT2lJdlZYTmxjbk12VFdGMGRDOVRhWFJsY3k5d2IzQnRiM1JwYjI0aUxDSnpiM1Z5WTJWelEyOXVkR1Z1ZENJNld5SnBiWEJ2Y25RZ0tpQmhjeUJzYjI5d0lHWnliMjBnSnk0dmJHOXZjQ2M3WEc1Y2JtVjRjRzl5ZENCa1pXWmhkV3gwSUdOc1lYTnpJRkJ5YjJObGMzTWdlMXh1SUNBZ0lDOHFYRzRnSUNBZ0lDQWdJRnR2WW1wbFkzUmRPaUJRY205d1pYSjBhV1Z6WEc0Z0lDQWdJQ0FnSUZ0aWIyOXNaV0Z1WFNBb2IzQjBhVzl1WVd3cE9pQkpjeUJRY205alpYTnpJR3hoZW5rL1hHNGdJQ0FnS2k5Y2JpQWdJQ0JqYjI1emRISjFZM1J2Y2lod2NtOXdjeXdnYVhOTVlYcDVLU0I3WEc0Z0lDQWdJQ0FnSUhSb2FYTXVhV1FnUFNCc2IyOXdMbWRsZEZCeWIyTmxjM05KWkNncE8xeHVYRzRnSUNBZ0lDQWdJSFJvYVhNdVgyOXVRMnhsWVc1MWNDQTlJQ2dwSUQwK0lIdGNiaUFnSUNBZ0lDQWdJQ0FnSUhSb2FYTXVjM1J2Y0NncE8xeHVJQ0FnSUNBZ0lDQWdJQ0FnZEdocGN5NXZia05zWldGdWRYQWdQU0IxYm1SbFptbHVaV1E3WEc0Z0lDQWdJQ0FnSUgwN1hHNWNiaUFnSUNBZ0lDQWdkR2hwY3k1ZmIyNUJZM1JwZG1GMFpTQTlJQ2dwSUQwK0lIUm9hWE11YjI1RGJHVmhiblZ3SUQwZ2RHaHBjeTVmYjI1RGJHVmhiblZ3TzF4dVhHNGdJQ0FnSUNBZ0lIUm9hWE11YzJWMEtIUm9hWE11WjJWMFJHVm1ZWFZzZEZCeWIzQnpLQ2twTzF4dUlDQWdJQ0FnSUNCMGFHbHpMbk5sZENod2NtOXdjeWs3WEc1Y2JpQWdJQ0FnSUNBZ2RHaHBjeTVwYzB4aGVua2dQU0JwYzB4aGVua2dmSHdnWm1Gc2MyVTdYRzRnSUNBZ0lDQWdJSFJvYVhNdWFYTkJZM1JwZG1VZ1BTQm1ZV3h6WlR0Y2JpQWdJQ0I5WEc1Y2JpQWdJQ0J6WlhRb2NISnZjSE1wSUh0Y2JpQWdJQ0FnSUNBZ1ptOXlJQ2hzWlhRZ2EyVjVJR2x1SUhCeWIzQnpLU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQnBaaUFvY0hKdmNITXVhR0Z6VDNkdVVISnZjR1Z5ZEhrb2EyVjVLU2tnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUhSb2FYTmJhMlY1WFNBOUlIQnliM0J6VzJ0bGVWMDdYRzRnSUNBZ0lDQWdJQ0FnSUNCOVhHNGdJQ0FnSUNBZ0lIMWNibHh1SUNBZ0lDQWdJQ0J5WlhSMWNtNGdkR2hwY3p0Y2JpQWdJQ0I5WEc1Y2JpQWdJQ0J6ZEdGeWRDZ3BJSHRjYmlBZ0lDQWdJQ0FnYkc5dmNDNWhZM1JwZG1GMFpTaDBhR2x6TG1sa0xDQjBhR2x6S1R0Y2JseHVJQ0FnSUNBZ0lDQjBhR2x6TG05dVEyeGxZVzUxY0NBOUlIUm9hWE11YjI1QlkzUnBkbUYwWlNBOUlIVnVaR1ZtYVc1bFpEdGNibHh1SUNBZ0lDQWdJQ0F2THlCUWNtbDJZWFJsSUdCdmJsTjBZWEowWUZ4dUlDQWdJQ0FnSUNCcFppQW9kR2hwY3k1ZmIyNVRkR0Z5ZENrZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnZEdocGN5NWZiMjVUZEdGeWRDaDBhR2x6S1R0Y2JpQWdJQ0FnSUNBZ2ZWeHVYRzRnSUNBZ0lDQWdJQzh2SUZCMVlteHBZeUJnYjI1VGRHRnlkR0JjYmlBZ0lDQWdJQ0FnYVdZZ0tIUm9hWE11YjI1VGRHRnlkQ2tnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdkR2hwY3k1dmJsTjBZWEowS0hSb2FYTXBPMXh1SUNBZ0lDQWdJQ0I5WEc1Y2JpQWdJQ0FnSUNBZ2NtVjBkWEp1SUhSb2FYTTdYRzRnSUNBZ2ZWeHVYRzRnSUNBZ2MzUnZjQ2dwSUh0Y2JpQWdJQ0FnSUNBZ2JHOXZjQzVrWldGamRHbDJZWFJsS0hSb2FYTXVhV1FwTzF4dVhHNGdJQ0FnSUNBZ0lDOHZJRkJ5YVhaaGRHVWdZRzl1VTNSdmNHQmNiaUFnSUNBZ0lDQWdhV1lnS0hSb2FYTXVYMjl1VTNSdmNDa2dlMXh1SUNBZ0lDQWdJQ0FnSUNBZ2RHaHBjeTVmYjI1VGRHOXdLSFJvYVhNcE8xeHVJQ0FnSUNBZ0lDQjlYRzVjYmlBZ0lDQWdJQ0FnTHk4Z1VIVmliR2xqSUdCdmJsTjBiM0JnWEc0Z0lDQWdJQ0FnSUdsbUlDaDBhR2x6TG05dVUzUnZjQ2tnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdkR2hwY3k1dmJsTjBiM0FvZEdocGN5azdYRzRnSUNBZ0lDQWdJSDFjYmx4dUlDQWdJQ0FnSUNCeVpYUjFjbTRnZEdocGN6dGNiaUFnSUNCOVhHNWNiaUFnSUNCdmJtTmxLQ2tnZTF4dUlDQWdJQ0FnSUNCMGFHbHpMbk4wWVhKMEtDazdYRzRnSUNBZ0lDQWdJSFJvYVhNdWIyNUJZM1JwZG1GMFpTQTlJSFJvYVhNdVgyOXVRV04wYVhaaGRHVTdYRzRnSUNBZ0lDQWdJSEpsZEhWeWJpQjBhR2x6TzF4dUlDQWdJSDFjYmx4dUlDQWdJQzhxWEc0Z0lDQWdJQ0FnSUNNZ1IyVjBJR1JsWm1GMWJIUWdRV04wYVc5dUlIQnliM0JsY25ScFpYTmNibHh1SUNBZ0lDQWdJQ0JBY21WMGRYSnVJRnR2WW1wbFkzUmRYRzRnSUNBZ0tpOWNiaUFnSUNCblpYUkVaV1poZFd4MFVISnZjSE1vS1NCN1hHNGdJQ0FnSUNBZ0lISmxkSFZ5YmlCN2ZUdGNiaUFnSUNCOVhHNWNiaUFnSUNBdktseHVJQ0FnSUNBZ0lDQWpJRVY0ZEdWdVpDQjBhR2x6SUZCeWIyTmxjM01nZDJsMGFDQnVaWGNnY0hKdmNHVnlkR2xsYzF4dUlDQWdJQ0FnSUNBakl5QlNaWFIxY201eklHNWxkeUJwYm5OMFlXNWpaU0J2WmlCMGFHbHpJRkJ5YjJObGMzTW5jeUJnY0hKdmRHOTBlWEJsWUNCM2FYUm9JR1Y0YVhOMGFXNW5JR0Z1WkNCdVpYY2djSEp2Y0dWeWRHbGxjMXh1WEc0Z0lDQWdJQ0FnSUVCd1lYSmhiU0JiYjJKcVpXTjBYU0FvYjNCMGFXOXVZV3dwWEc0Z0lDQWdJQ0FnSUVCeVpYUjFjbTRnVzFCeWIyTmxjM05kWEc0Z0lDQWdLaTljYmlBZ0lDQnBibWhsY21sMEtIQnliM0J6S1NCN1hHNGdJQ0FnSUNBZ0lHTnZibk4wSUhzZ2FXUXNJQzR1TG1sdWFHVnlhWFJsWkZCeWIzQnpJSDBnUFNCMGFHbHpPMXh1SUNBZ0lDQWdJQ0JqYjI1emRDQnVaWGRRY205alpYTnpJRDBnYm1WM0lIUm9hWE11WTI5dWMzUnlkV04wYjNJb2FXNW9aWEpwZEdWa1VISnZjSE1wTzF4dUlDQWdJQ0FnSUNCeVpYUjFjbTRnYm1WM1VISnZZMlZ6Y3k1elpYUW9jSEp2Y0hNcE8xeHVJQ0FnSUgxY2JuMGlYWDA9XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9wcm9jZXNzL1Byb2Nlc3MuanNcbiAqKiBtb2R1bGUgaWQgPSA4XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbnZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfUHJvY2VzczIgPSByZXF1aXJlKCcuLi9wcm9jZXNzL1Byb2Nlc3MnKTtcblxudmFyIF9Qcm9jZXNzMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX1Byb2Nlc3MyKTtcblxudmFyIF91dGlscyA9IHJlcXVpcmUoJy4uL2luYy91dGlscycpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmICghc2VsZikgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIGNhbGwgJiYgKHR5cGVvZiBjYWxsID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpID8gY2FsbCA6IHNlbGY7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgXCIgKyB0eXBlb2Ygc3VwZXJDbGFzcyk7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgZW51bWVyYWJsZTogZmFsc2UsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcykgOiBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzOyB9XG5cbnZhciBJbnB1dCA9IGZ1bmN0aW9uIChfUHJvY2Vzcykge1xuICAgIF9pbmhlcml0cyhJbnB1dCwgX1Byb2Nlc3MpO1xuXG4gICAgZnVuY3Rpb24gSW5wdXQoaW5pdGlhbFZhbHVlcywgcG9sbCkge1xuICAgICAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgSW5wdXQpO1xuXG4gICAgICAgIHZhciBfdGhpcyA9IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIF9Qcm9jZXNzLmNhbGwodGhpcykpO1xuXG4gICAgICAgIF90aGlzLnN0YXRlID0gaW5pdGlhbFZhbHVlcztcblxuICAgICAgICBpZiAoKDAsIF91dGlscy5pc0Z1bmMpKHBvbGwpKSB7XG4gICAgICAgICAgICBfdGhpcy5vbkZyYW1lU3RhcnQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIF90aGlzLmxhdGVzdChfdGhpcy5wb2xsKCkpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gX3RoaXM7XG4gICAgfVxuXG4gICAgLypcbiAgICAgICAgTWFudWFsbHkgYWRkIGxhdGVzdCB2YWx1ZXNcbiAgICAgICAgIEBwYXJhbSBbb2JqZWN0XVxuICAgICovXG5cbiAgICBJbnB1dC5wcm90b3R5cGUubGF0ZXN0ID0gZnVuY3Rpb24gbGF0ZXN0KHByb3BzKSB7XG4gICAgICAgIHRoaXMuc3RhdGUgPSBfZXh0ZW5kcyh7fSwgdGhpcy5zdGF0ZSwgcHJvcHMpO1xuICAgIH07XG5cbiAgICByZXR1cm4gSW5wdXQ7XG59KF9Qcm9jZXNzMy5kZWZhdWx0KTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gSW5wdXQ7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5OeVl5OXBibkIxZEM5SmJuQjFkQzVxY3lKZExDSnVZVzFsY3lJNlcxMHNJbTFoY0hCcGJtZHpJam9pT3pzN096czdPenM3T3pzN096czdPenM3T3p0SlFVZHhRanM3TzBGQlEycENMR0ZCUkdsQ0xFdEJRMnBDTEVOQlFWa3NZVUZCV2l4RlFVRXlRaXhKUVVFelFpeEZRVUZwUXpzNFFrRkVhRUlzVDBGRFowSTdPM0ZFUVVNM1FpeHhRa0ZFTmtJN08wRkJSVGRDTEdOQlFVc3NTMEZCVEN4SFFVRmhMR0ZCUVdJc1EwRkdOa0k3TzBGQlNUZENMRmxCUVVrc2JVSkJRVThzU1VGQlVDeERRVUZLTEVWQlFXdENPMEZCUTJRc2EwSkJRVXNzV1VGQlRDeEhRVUZ2UWp0MVFrRkJUU3hOUVVGTExFMUJRVXdzUTBGQldTeE5RVUZMTEVsQlFVd3NSVUZCV2p0aFFVRk9MRU5CUkU0N1UwRkJiRUk3Y1VKQlNqWkNPMHRCUVdwRE96czdPenM3TzBGQlJHbENMRzlDUVdWcVFpeDVRa0ZCVHl4UFFVRlBPMEZCUTFZc1lVRkJTeXhMUVVGTUxHZENRVUZyUWl4TFFVRkxMRXRCUVV3c1JVRkJaU3hOUVVGcVF5eERRVVJWT3pzN1YwRm1SeUlzSW1acGJHVWlPaUpKYm5CMWRDNXFjeUlzSW5OdmRYSmpaVkp2YjNRaU9pSXZWWE5sY25NdlRXRjBkQzlUYVhSbGN5OXdiM0J0YjNScGIyNGlMQ0p6YjNWeVkyVnpRMjl1ZEdWdWRDSTZXeUpwYlhCdmNuUWdVSEp2WTJWemN5Qm1jbTl0SUNjdUxpOXdjbTlqWlhOekwxQnliMk5sYzNNbk8xeHVhVzF3YjNKMElIc2dhWE5HZFc1aklIMGdabkp2YlNBbkxpNHZhVzVqTDNWMGFXeHpKenRjYmx4dVpYaHdiM0owSUdSbFptRjFiSFFnWTJ4aGMzTWdTVzV3ZFhRZ1pYaDBaVzVrY3lCUWNtOWpaWE56SUh0Y2JpQWdJQ0JqYjI1emRISjFZM1J2Y2locGJtbDBhV0ZzVm1Gc2RXVnpMQ0J3YjJ4c0tTQjdYRzRnSUNBZ0lDQWdJSE4xY0dWeUtDazdYRzRnSUNBZ0lDQWdJSFJvYVhNdWMzUmhkR1VnUFNCcGJtbDBhV0ZzVm1Gc2RXVnpPMXh1WEc0Z0lDQWdJQ0FnSUdsbUlDaHBjMFoxYm1Nb2NHOXNiQ2twSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJSFJvYVhNdWIyNUdjbUZ0WlZOMFlYSjBJRDBnS0NrZ1BUNGdkR2hwY3k1c1lYUmxjM1FvZEdocGN5NXdiMnhzS0NrcE8xeHVJQ0FnSUNBZ0lDQjlYRzRnSUNBZ2ZWeHVYRzRnSUNBZ0x5cGNiaUFnSUNBZ0lDQWdUV0Z1ZFdGc2JIa2dZV1JrSUd4aGRHVnpkQ0IyWVd4MVpYTmNibHh1SUNBZ0lDQWdJQ0JBY0dGeVlXMGdXMjlpYW1WamRGMWNiaUFnSUNBcUwxeHVJQ0FnSUd4aGRHVnpkQ2h3Y205d2N5a2dlMXh1SUNBZ0lDQWdJQ0IwYUdsekxuTjBZWFJsSUQwZ2V5QXVMaTUwYUdsekxuTjBZWFJsTENBdUxpNXdjbTl3Y3lCOU8xeHVJQ0FnSUgxY2JuMWNiaUpkZlE9PVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvaW5wdXQvSW5wdXQuanNcbiAqKiBtb2R1bGUgaWQgPSA5XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzLmRlZmF1bHQgPSBzdGFnZ2VyO1xuXG52YXIgX1R3ZWVuID0gcmVxdWlyZSgnLi4vYWN0aW9ucy9Ud2VlbicpO1xuXG52YXIgX1R3ZWVuMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX1R3ZWVuKTtcblxudmFyIF9wcmVzZXRFYXNpbmcgPSByZXF1aXJlKCcuLi9hY3Rpb25zL2Vhc2luZy9wcmVzZXQtZWFzaW5nJyk7XG5cbnZhciBfcHJlc2V0RWFzaW5nMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3ByZXNldEVhc2luZyk7XG5cbnZhciBfdXRpbHMgPSByZXF1aXJlKCcuL3V0aWxzJyk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbnZhciBERUZBVUxUX0lOVEVSVkFMID0gMTAwO1xuXG5mdW5jdGlvbiBzdGFnZ2VyKGFycmF5LCBjYWxsYmFjaywgcHJvcHMpIHtcbiAgICB2YXIgYXJyYXlMZW5ndGggPSBhcnJheS5sZW5ndGg7XG4gICAgdmFyIHByb3BzSXNJbnRlcnZhbCA9ICgwLCBfdXRpbHMuaXNOdW0pKHByb3BzKTtcbiAgICB2YXIgaW50ZXJ2YWwgPSBwcm9wc0lzSW50ZXJ2YWwgPyBwcm9wcyA6IHByb3BzLmludGVydmFsIHx8IERFRkFVTFRfSU5URVJWQUw7XG4gICAgdmFyIHByZXZJbmRleCA9IC0xO1xuXG4gICAgdmFyIHN0YWdnZXJUd2VlbiA9IG5ldyBfVHdlZW4yLmRlZmF1bHQoe1xuICAgICAgICBkdXJhdGlvbjogaW50ZXJ2YWwgKiBhcnJheUxlbmd0aCxcbiAgICAgICAgdmFsdWVzOiB7XG4gICAgICAgICAgICBpOiB7XG4gICAgICAgICAgICAgICAgZnJvbTogMCxcbiAgICAgICAgICAgICAgICB0bzogYXJyYXlMZW5ndGggLSAxLFxuICAgICAgICAgICAgICAgIHJvdW5kOiB0cnVlLFxuICAgICAgICAgICAgICAgIGVhc2U6IHByb3BzSXNJbnRlcnZhbCA/IF9wcmVzZXRFYXNpbmcyLmRlZmF1bHQubGluZWFyIDogcHJvcHMuZWFzZSB8fCBfcHJlc2V0RWFzaW5nMi5kZWZhdWx0LmxpbmVhclxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBvblJlbmRlcjogZnVuY3Rpb24gKHR3ZWVuKSB7XG4gICAgICAgICAgICB2YXIgaSA9IHR3ZWVuLnN0YXRlLmk7XG4gICAgICAgICAgICB2YXIgZ2FwSW5kZXggPSBwcmV2SW5kZXggKyAxO1xuXG4gICAgICAgICAgICBmb3IgKDsgZ2FwSW5kZXggPD0gaTsgZ2FwSW5kZXgrKykge1xuICAgICAgICAgICAgICAgIGNhbGxiYWNrKGFycmF5W2dhcEluZGV4XSwgZ2FwSW5kZXgpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBwcmV2SW5kZXggPSBpO1xuICAgICAgICB9LFxuICAgICAgICBvbkNvbXBsZXRlOiBwcm9wc0lzSW50ZXJ2YWwgPyB1bmRlZmluZWQgOiBwcm9wcy5vbkNvbXBsZXRlXG4gICAgfSk7XG5cbiAgICBzdGFnZ2VyVHdlZW4uc3RhcnQoKTtcblxuICAgIHJldHVybiBzdGFnZ2VyVHdlZW47XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5OeVl5OXBibU12YzNSaFoyZGxjaTVxY3lKZExDSnVZVzFsY3lJNlcxMHNJbTFoY0hCcGJtZHpJam9pT3pzN2EwSkJUWGRDT3pzN096czdPenM3T3pzN096dEJRVVo0UWl4SlFVRk5MRzFDUVVGdFFpeEhRVUZ1UWpzN1FVRkZVeXhUUVVGVExFOUJRVlFzUTBGQmFVSXNTMEZCYWtJc1JVRkJkMElzVVVGQmVFSXNSVUZCYTBNc1MwRkJiRU1zUlVGQmVVTTdRVUZEY0VRc1VVRkJUU3hqUVVGakxFMUJRVTBzVFVGQlRpeERRVVJuUXp0QlFVVndSQ3hSUVVGTkxHdENRVUZyUWl4clFrRkJUU3hMUVVGT0xFTkJRV3hDTEVOQlJqaERPMEZCUjNCRUxGRkJRVTBzVjBGQlZ5eHJRa0ZCYTBJc1MwRkJiRUlzUjBGQk1FSXNUVUZCVFN4UlFVRk9MRWxCUVd0Q0xHZENRVUZzUWl4RFFVaFRPMEZCU1hCRUxGRkJRVWtzV1VGQldTeERRVUZETEVOQlFVUXNRMEZLYjBNN08wRkJUWEJFTEZGQlFVMHNaVUZCWlN4dlFrRkJWVHRCUVVNelFpeHJRa0ZCVlN4WFFVRlhMRmRCUVZnN1FVRkRWaXhuUWtGQlVUdEJRVU5LTEdWQlFVYzdRVUZEUXl4elFrRkJUU3hEUVVGT08wRkJRMEVzYjBKQlFVa3NZMEZCWXl4RFFVRmtPMEZCUTBvc2RVSkJRVThzU1VGQlVEdEJRVU5CTEhOQ1FVRk5MR3RDUVVGclFpeDFRa0ZCVHl4TlFVRlFMRWRCUVdkQ0xFMUJRVTBzU1VGQlRpeEpRVUZqTEhWQ1FVRlBMRTFCUVZBN1lVRktNVVE3VTBGRVNqdEJRVkZCTEd0Q1FVRlZMRlZCUVVNc1MwRkJSQ3hGUVVGWE8wRkJRMnBDTEdkQ1FVRk5MRWxCUVVrc1RVRkJUU3hMUVVGT0xFTkJRVmtzUTBGQldpeERRVVJQTzBGQlJXcENMR2RDUVVGSkxGZEJRVmNzV1VGQldTeERRVUZhTEVOQlJrVTdPMEZCU1dwQ0xHMUNRVUZQTEZsQlFWa3NRMEZCV2l4RlFVRmxMRlZCUVhSQ0xFVkJRV3RETzBGQlF6bENMSGxDUVVGVExFMUJRVTBzVVVGQlRpeERRVUZVTEVWQlFUQkNMRkZCUVRGQ0xFVkJSRGhDTzJGQlFXeERPenRCUVVsQkxIZENRVUZaTEVOQlFWb3NRMEZTYVVJN1UwRkJXRHRCUVZWV0xHOUNRVUZaTEd0Q1FVRnJRaXhUUVVGc1FpeEhRVUU0UWl4TlFVRk5MRlZCUVU0N1MwRndRbnBDTEVOQlFXWXNRMEZPT0VNN08wRkJOa0p3UkN4cFFrRkJZU3hMUVVGaUxFZEJOMEp2UkRzN1FVRXJRbkJFTEZkQlFVOHNXVUZCVUN4RFFTOUNiMFE3UTBGQmVrTWlMQ0ptYVd4bElqb2ljM1JoWjJkbGNpNXFjeUlzSW5OdmRYSmpaVkp2YjNRaU9pSXZWWE5sY25NdlRXRjBkQzlUYVhSbGN5OXdiM0J0YjNScGIyNGlMQ0p6YjNWeVkyVnpRMjl1ZEdWdWRDSTZXeUpwYlhCdmNuUWdWSGRsWlc0Z1puSnZiU0FuTGk0dllXTjBhVzl1Y3k5VWQyVmxiaWM3WEc1cGJYQnZjblFnWldGemFXNW5JR1p5YjIwZ0p5NHVMMkZqZEdsdmJuTXZaV0Z6YVc1bkwzQnlaWE5sZEMxbFlYTnBibWNuTzF4dWFXMXdiM0owSUhzZ2FYTk9kVzBnZlNCbWNtOXRJQ2N1TDNWMGFXeHpKenRjYmx4dVkyOXVjM1FnUkVWR1FWVk1WRjlKVGxSRlVsWkJUQ0E5SURFd01EdGNibHh1Wlhod2IzSjBJR1JsWm1GMWJIUWdablZ1WTNScGIyNGdjM1JoWjJkbGNpaGhjbkpoZVN3Z1kyRnNiR0poWTJzc0lIQnliM0J6S1NCN1hHNGdJQ0FnWTI5dWMzUWdZWEp5WVhsTVpXNW5kR2dnUFNCaGNuSmhlUzVzWlc1bmRHZzdYRzRnSUNBZ1kyOXVjM1FnY0hKdmNITkpjMGx1ZEdWeWRtRnNJRDBnYVhOT2RXMG9jSEp2Y0hNcE8xeHVJQ0FnSUdOdmJuTjBJR2x1ZEdWeWRtRnNJRDBnY0hKdmNITkpjMGx1ZEdWeWRtRnNJRDhnY0hKdmNITWdPaUJ3Y205d2N5NXBiblJsY25aaGJDQjhmQ0JFUlVaQlZVeFVYMGxPVkVWU1ZrRk1PMXh1SUNBZ0lHeGxkQ0J3Y21WMlNXNWtaWGdnUFNBdE1UdGNibHh1SUNBZ0lHTnZibk4wSUhOMFlXZG5aWEpVZDJWbGJpQTlJRzVsZHlCVWQyVmxiaWg3WEc0Z0lDQWdJQ0FnSUdSMWNtRjBhVzl1T2lCcGJuUmxjblpoYkNBcUlHRnljbUY1VEdWdVozUm9MRnh1SUNBZ0lDQWdJQ0IyWVd4MVpYTTZJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lHazZJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0JtY205dE9pQXdMRnh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJSFJ2T2lCaGNuSmhlVXhsYm1kMGFDQXRJREVzWEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnY205MWJtUTZJSFJ5ZFdVc1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ1pXRnpaVG9nY0hKdmNITkpjMGx1ZEdWeWRtRnNJRDhnWldGemFXNW5MbXhwYm1WaGNpQTZJSEJ5YjNCekxtVmhjMlVnZkh3Z1pXRnphVzVuTG14cGJtVmhjbHh1SUNBZ0lDQWdJQ0FnSUNBZ2ZWeHVJQ0FnSUNBZ0lDQjlMRnh1SUNBZ0lDQWdJQ0J2YmxKbGJtUmxjam9nS0hSM1pXVnVLU0E5UGlCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0JqYjI1emRDQnBJRDBnZEhkbFpXNHVjM1JoZEdVdWFUdGNiaUFnSUNBZ0lDQWdJQ0FnSUd4bGRDQm5ZWEJKYm1SbGVDQTlJSEJ5WlhaSmJtUmxlQ0FySURFN1hHNWNiaUFnSUNBZ0lDQWdJQ0FnSUdadmNpQW9PeUJuWVhCSmJtUmxlQ0E4UFNCcE95Qm5ZWEJKYm1SbGVDc3JLU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnWTJGc2JHSmhZMnNvWVhKeVlYbGJaMkZ3U1c1a1pYaGRMQ0JuWVhCSmJtUmxlQ2s3WEc0Z0lDQWdJQ0FnSUNBZ0lDQjlYRzVjYmlBZ0lDQWdJQ0FnSUNBZ0lIQnlaWFpKYm1SbGVDQTlJR2s3WEc0Z0lDQWdJQ0FnSUgwc1hHNGdJQ0FnSUNBZ0lHOXVRMjl0Y0d4bGRHVTZJSEJ5YjNCelNYTkpiblJsY25aaGJDQS9JSFZ1WkdWbWFXNWxaQ0E2SUhCeWIzQnpMbTl1UTI5dGNHeGxkR1ZjYmlBZ0lDQjlLVHRjYmx4dUlDQWdJSE4wWVdkblpYSlVkMlZsYmk1emRHRnlkQ2dwTzF4dVhHNGdJQ0FnY21WMGRYSnVJSE4wWVdkblpYSlVkMlZsYmp0Y2JuMGlYWDA9XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9pbmMvc3RhZ2dlci5qc1xuICoqIG1vZHVsZSBpZCA9IDEwXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbnZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzLmRlZmF1bHQgPSB0aW1lbGluZTtcblxudmFyIF9Ud2VlbiA9IHJlcXVpcmUoJy4uL2FjdGlvbnMvVHdlZW4nKTtcblxudmFyIF9Ud2VlbjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9Ud2Vlbik7XG5cbnZhciBfcHJlc2V0RWFzaW5nID0gcmVxdWlyZSgnLi4vYWN0aW9ucy9lYXNpbmcvcHJlc2V0LWVhc2luZycpO1xuXG52YXIgX3ByZXNldEVhc2luZzIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9wcmVzZXRFYXNpbmcpO1xuXG52YXIgX2NhbGMgPSByZXF1aXJlKCcuL2NhbGMnKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuLypcbiAgICBAcGFyYW0gW2FycmF5XVxuICAgICAgICBTZXF1ZW50aWFsIGFycmF5IG9mIHR3ZWVucywgZWFjaCBpdGVtIGNhbiBiZSBhIHR3ZWVuIG9yIGRlZmluaXRpb24gb2JqOlxuXG4gICAgICAgIFtcbiAgICAgICAgICAgIG5ldyBUd2VlbigpLFxuICAgICAgICAgICAgc3RhZ2dlcigpLFxuICAgICAgICAgICAgdGltZWxpbmUoKSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0d2VlbjogbmV3IFR3ZWVuKCksXG4gICAgICAgICAgICAgICAgYXQ6IDEwMCxcbiAgICAgICAgICAgICAgICBvZmZzZXQ6IFwiKz0xMDBcIlxuICAgICAgICAgICAgfVxuICAgICAgICBdXG4qL1xudmFyIGFuYWx5emUgPSBmdW5jdGlvbiAoZGVmcykge1xuICAgIHZhciB0aW1lbGluZSA9IFtdO1xuICAgIHZhciBudW1EZWZzID0gZGVmcy5sZW5ndGg7XG4gICAgdmFyIGN1cnJlbnRQbGF5aGVhZCA9IDA7XG5cbiAgICB2YXIgX2xvb3AgPSBmdW5jdGlvbiAoaSkge1xuICAgICAgICB2YXIgZGVmID0gZGVmc1tpXTtcbiAgICAgICAgdmFyIGRlZklzT2JqID0gZGVmLnR3ZWVuID8gdHJ1ZSA6IGZhbHNlO1xuICAgICAgICB2YXIgdHdlZW4gPSBkZWZJc09iaiA/IGRlZi50d2VlbiA6IGRlZjtcblxuICAgICAgICBjdXJyZW50UGxheWhlYWQgKz0gZGVmSXNPYmogJiYgZGVmLm9mZnNldCA/IGRlZi5hdCB8fCAoMCwgX2NhbGMucmVsYXRpdmVWYWx1ZSkoY3VycmVudFBsYXloZWFkLCBkZWYub2Zmc2V0KSA6IDA7XG5cbiAgICAgICAgdmFyIGR1cmF0aW9uID0gMDtcbiAgICAgICAgZm9yICh2YXIga2V5IGluIHR3ZWVuLnZhbHVlcykge1xuICAgICAgICAgICAgaWYgKHR3ZWVuLnZhbHVlcy5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgICAgICAgdmFyIHZhbHVlID0gdHdlZW4udmFsdWVzW2tleV07XG4gICAgICAgICAgICAgICAgZHVyYXRpb24gPSBNYXRoLm1heChkdXJhdGlvbiwgdmFsdWUuZHVyYXRpb24pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgdGltZWxpbmUucHVzaCh7XG4gICAgICAgICAgICBmcm9tOiBjdXJyZW50UGxheWhlYWQsXG4gICAgICAgICAgICBkdXJhdGlvbjogZHVyYXRpb24sXG4gICAgICAgICAgICBmaXJlOiBmdW5jdGlvbiAodGltZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0d2Vlbi5zZWVrVGltZSh0aW1lKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgY3VycmVudFBsYXloZWFkICs9IHR3ZWVuLmR1cmF0aW9uO1xuICAgIH07XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IG51bURlZnM7IGkrKykge1xuICAgICAgICBfbG9vcChpKTtcbiAgICB9XG5cbiAgICByZXR1cm4geyB0b3RhbFRpbWU6IGN1cnJlbnRQbGF5aGVhZCwgdGltZWxpbmU6IHRpbWVsaW5lIH07XG59O1xuXG52YXIgc2V0VHdlZW5zID0gZnVuY3Rpb24gKF9yZWYpIHtcbiAgICB2YXIgZWxhcHNlZCA9IF9yZWYuZWxhcHNlZDtcbiAgICB2YXIgdGltZWxpbmUgPSBfcmVmLnRpbWVsaW5lO1xuICAgIHZhciB0aW1lbGluZUxlbmd0aCA9IF9yZWYudGltZWxpbmVMZW5ndGg7XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRpbWVsaW5lTGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdmFyIF90d2VlbiA9IHRpbWVsaW5lW2ldO1xuICAgICAgICB2YXIgdHdlZW5UaW1lID0gZWxhcHNlZCAtIF90d2Vlbi5mcm9tO1xuXG4gICAgICAgIGlmICh0d2VlblRpbWUgPiAwICYmIHR3ZWVuVGltZSA8IF90d2Vlbi5kdXJhdGlvbikge1xuICAgICAgICAgICAgX3R3ZWVuLmZpcmUodHdlZW5UaW1lKTtcbiAgICAgICAgfVxuICAgIH1cbn07XG5cbmZ1bmN0aW9uIHRpbWVsaW5lKGRlZikge1xuICAgIHZhciBwcm9wcyA9IGFyZ3VtZW50cy5sZW5ndGggPD0gMSB8fCBhcmd1bWVudHNbMV0gPT09IHVuZGVmaW5lZCA/IHt9IDogYXJndW1lbnRzWzFdO1xuXG4gICAgdmFyIF9hbmFseXplID0gYW5hbHl6ZShkZWYpO1xuXG4gICAgdmFyIHRvdGFsVGltZSA9IF9hbmFseXplLnRvdGFsVGltZTtcbiAgICB2YXIgdGltZWxpbmUgPSBfYW5hbHl6ZS50aW1lbGluZTtcblxuICAgIHJldHVybiBuZXcgX1R3ZWVuMi5kZWZhdWx0KF9leHRlbmRzKHt9LCBwcm9wcywge1xuICAgICAgICBkdXJhdGlvbjogdG90YWxUaW1lLFxuICAgICAgICBlYXNlOiBfcHJlc2V0RWFzaW5nMi5kZWZhdWx0LmxpbmVhcixcbiAgICAgICAgdmFsdWVzOiB7XG4gICAgICAgICAgICBwOiAxXG4gICAgICAgIH0sXG4gICAgICAgIHRpbWVsaW5lOiB0aW1lbGluZSxcbiAgICAgICAgdGltZWxpbmVMZW5ndGg6IHRpbWVsaW5lLmxlbmd0aCxcbiAgICAgICAgb25SZW5kZXI6IHNldFR3ZWVuc1xuICAgIH0pKTtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbk55WXk5cGJtTXZkR2x0Wld4cGJtVXVhbk1pWFN3aWJtRnRaWE1pT2x0ZExDSnRZWEJ3YVc1bmN5STZJanM3T3pzN2EwSkJLMFIzUWpzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN1FVRTFRM2hDTEVsQlFVMHNWVUZCVlN4VlFVRkRMRWxCUVVRc1JVRkJWVHRCUVVOMFFpeFJRVUZOTEZkQlFWY3NSVUZCV0N4RFFVUm5RanRCUVVWMFFpeFJRVUZOTEZWQlFWVXNTMEZCU3l4TlFVRk1MRU5CUmswN1FVRkhkRUlzVVVGQlNTeHJRa0ZCYTBJc1EwRkJiRUlzUTBGSWEwSTdPekJDUVV0aU8wRkJRMHdzV1VGQlRTeE5RVUZOTEV0QlFVc3NRMEZCVEN4RFFVRk9PMEZCUTA0c1dVRkJUU3hYUVVGWExFbEJRVWtzUzBGQlNpeEhRVUZaTEVsQlFWb3NSMEZCYlVJc1MwRkJia0k3UVVGRGFrSXNXVUZCVFN4UlFVRlJMRmRCUVdFc1NVRkJTU3hMUVVGS0xFZEJRVmtzUjBGQmVrSTdPMEZCUldRc01rSkJRVzlDTEZGQlFVTXNTVUZCV1N4SlFVRkpMRTFCUVVvc1IwRkROMElzU1VGQlNTeEZRVUZLTEVsQlFWVXNlVUpCUVdNc1pVRkJaQ3hGUVVFclFpeEpRVUZKTEUxQlFVb3NRMEZCZWtNc1IwRkJkVVFzUTBGRWRrTTdPMEZCUjNCQ0xGbEJRVWtzVjBGQlZ5eERRVUZZTzBGQlEwb3NZVUZCU3l4SlFVRkpMRWRCUVVvc1NVRkJWeXhOUVVGTkxFMUJRVTRzUlVGQll6dEJRVU14UWl4blFrRkJTU3hOUVVGTkxFMUJRVTRzUTBGQllTeGpRVUZpTEVOQlFUUkNMRWRCUVRWQ0xFTkJRVW9zUlVGQmMwTTdRVUZEYkVNc2IwSkJRVTBzVVVGQlVTeE5RVUZOTEUxQlFVNHNRMEZCWVN4SFFVRmlMRU5CUVZJc1EwRkVORUk3UVVGRmJFTXNNa0pCUVZjc1MwRkJTeXhIUVVGTUxFTkJRVk1zVVVGQlZDeEZRVUZ0UWl4TlFVRk5MRkZCUVU0c1EwRkJPVUlzUTBGR2EwTTdZVUZCZEVNN1UwRkVTanM3UVVGUFFTeHBRa0ZCVXl4SlFVRlVMRU5CUVdNN1FVRkRWaXhyUWtGQlRTeGxRVUZPTzBGQlEwRXNjMEpCUVZVc1VVRkJWanRCUVVOQkxHdENRVUZOTEZWQlFVTXNTVUZCUkR0MVFrRkJWU3hOUVVGTkxGRkJRVTRzUTBGQlpTeEpRVUZtTzJGQlFWWTdVMEZJVmpzN1FVRk5RU3d5UWtGQmJVSXNUVUZCVFN4UlFVRk9PMDFCTTBKRU96dEJRVXQwUWl4VFFVRkxMRWxCUVVrc1NVRkJTU3hEUVVGS0xFVkJRVThzU1VGQlNTeFBRVUZLTEVWQlFXRXNSMEZCTjBJc1JVRkJhME03WTBGQmVrSXNSMEZCZVVJN1MwRkJiRU03TzBGQmVVSkJMRmRCUVU4c1JVRkJSU3hYUVVGWExHVkJRVmdzUlVGQk5FSXNhMEpCUVRsQ0xFVkJRVkFzUTBFNVFuTkNPME5CUVZZN08wRkJhVU5vUWl4SlFVRk5MRmxCUVZrc1owSkJRVEpETzFGQlFYaERMSFZDUVVGM1F6dFJRVUV2UWl4NVFrRkJLMEk3VVVGQmNrSXNjVU5CUVhGQ096dEJRVU42UkN4VFFVRkxMRWxCUVVrc1NVRkJTU3hEUVVGS0xFVkJRVThzU1VGQlNTeGpRVUZLTEVWQlFXOUNMRWRCUVhCRExFVkJRWGxETzBGQlEzSkRMRmxCUVUwc1UwRkJVU3hUUVVGVExFTkJRVlFzUTBGQlVpeERRVVFyUWp0QlFVVnlReXhaUVVGTkxGbEJRVmtzVlVGQlZTeFBRVUZOTEVsQlFVNHNRMEZHVXpzN1FVRkpja01zV1VGQlNTeFpRVUZaTEVOQlFWb3NTVUZCYVVJc1dVRkJXU3hQUVVGTkxGRkJRVTRzUlVGQlowSTdRVUZETjBNc2JVSkJRVTBzU1VGQlRpeERRVUZYTEZOQlFWZ3NSVUZFTmtNN1UwRkJha1E3UzBGS1NqdERRVVJqT3p0QlFWZElMRk5CUVZNc1VVRkJWQ3hEUVVGclFpeEhRVUZzUWl4RlFVRnRRenRSUVVGYUxEaEVRVUZSTEd0Q1FVRkpPenR0UWtGRFpDeFJRVUZSTEVkQlFWSXNSVUZFWXpzN1VVRkRkRU1zSzBKQlJITkRPMUZCUXpOQ0xEWkNRVVF5UWpzN1FVRkhPVU1zVjBGQlR5eHBRMEZEUVR0QlFVTklMR3RDUVVGVkxGTkJRVlk3UVVGRFFTeGpRVUZOTEhWQ1FVRlBMRTFCUVZBN1FVRkRUaXhuUWtGQlVUdEJRVU5LTEdWQlFVY3NRMEZCU0R0VFFVUktPMEZCUjBFc2EwSkJRVlVzVVVGQlZqdEJRVU5CTEhkQ1FVRm5RaXhUUVVGVExFMUJRVlE3UVVGRGFFSXNhMEpCUVZVc1UwRkJWanROUVZSSExFTkJRVkFzUTBGSU9FTTdRMEZCYmtNaUxDSm1hV3hsSWpvaWRHbHRaV3hwYm1VdWFuTWlMQ0p6YjNWeVkyVlNiMjkwSWpvaUwxVnpaWEp6TDAxaGRIUXZVMmwwWlhNdmNHOXdiVzkwYVc5dUlpd2ljMjkxY21ObGMwTnZiblJsYm5RaU9sc2lhVzF3YjNKMElGUjNaV1Z1SUdaeWIyMGdKeTR1TDJGamRHbHZibk12VkhkbFpXNG5PMXh1YVcxd2IzSjBJR1ZoYzJsdVp5Qm1jbTl0SUNjdUxpOWhZM1JwYjI1ekwyVmhjMmx1Wnk5d2NtVnpaWFF0WldGemFXNW5KenRjYm1sdGNHOXlkQ0I3SUhKbGJHRjBhWFpsVm1Gc2RXVWdmU0JtY205dElDY3VMMk5oYkdNbk8xeHVYRzR2S2x4dUlDQWdJRUJ3WVhKaGJTQmJZWEp5WVhsZFhHNGdJQ0FnSUNBZ0lGTmxjWFZsYm5ScFlXd2dZWEp5WVhrZ2IyWWdkSGRsWlc1ekxDQmxZV05vSUdsMFpXMGdZMkZ1SUdKbElHRWdkSGRsWlc0Z2IzSWdaR1ZtYVc1cGRHbHZiaUJ2WW1vNlhHNWNiaUFnSUNBZ0lDQWdXMXh1SUNBZ0lDQWdJQ0FnSUNBZ2JtVjNJRlIzWldWdUtDa3NYRzRnSUNBZ0lDQWdJQ0FnSUNCemRHRm5aMlZ5S0Nrc1hHNGdJQ0FnSUNBZ0lDQWdJQ0IwYVcxbGJHbHVaU2dwTEZ4dUlDQWdJQ0FnSUNBZ0lDQWdlMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJSFIzWldWdU9pQnVaWGNnVkhkbFpXNG9LU3hjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0JoZERvZ01UQXdMRnh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJRzltWm5ObGREb2dYQ0lyUFRFd01Gd2lYRzRnSUNBZ0lDQWdJQ0FnSUNCOVhHNGdJQ0FnSUNBZ0lGMWNiaW92WEc1amIyNXpkQ0JoYm1Gc2VYcGxJRDBnS0dSbFpuTXBJRDArSUh0Y2JpQWdJQ0JqYjI1emRDQjBhVzFsYkdsdVpTQTlJRnRkTzF4dUlDQWdJR052Ym5OMElHNTFiVVJsWm5NZ1BTQmtaV1p6TG14bGJtZDBhRHRjYmlBZ0lDQnNaWFFnWTNWeWNtVnVkRkJzWVhsb1pXRmtJRDBnTUR0Y2JseHVJQ0FnSUdadmNpQW9iR1YwSUdrZ1BTQXdPeUJwSUR3Z2JuVnRSR1ZtY3pzZ2FTc3JLU0I3WEc0Z0lDQWdJQ0FnSUdOdmJuTjBJR1JsWmlBOUlHUmxabk5iYVYwN1hHNGdJQ0FnSUNBZ0lHTnZibk4wSUdSbFprbHpUMkpxSUQwZ1pHVm1MblIzWldWdUlEOGdkSEoxWlNBNklHWmhiSE5sTzF4dUlDQWdJQ0FnSUNCamIyNXpkQ0IwZDJWbGJpQTlJQ2hrWldaSmMwOWlhaWtnUHlCa1pXWXVkSGRsWlc0Z09pQmtaV1k3WEc1Y2JpQWdJQ0FnSUNBZ1kzVnljbVZ1ZEZCc1lYbG9aV0ZrSUNzOUlDZ29aR1ZtU1hOUFltb2dKaVlnWkdWbUxtOW1abk5sZENrZ1AxeHVJQ0FnSUNBZ0lDQWdJQ0FnWkdWbUxtRjBJSHg4SUhKbGJHRjBhWFpsVm1Gc2RXVW9ZM1Z5Y21WdWRGQnNZWGxvWldGa0xDQmtaV1l1YjJabWMyVjBLU0E2SURBcE8xeHVYRzRnSUNBZ0lDQWdJR3hsZENCa2RYSmhkR2x2YmlBOUlEQTdYRzRnSUNBZ0lDQWdJR1p2Y2lBb2JHVjBJR3RsZVNCcGJpQjBkMlZsYmk1MllXeDFaWE1wSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJR2xtSUNoMGQyVmxiaTUyWVd4MVpYTXVhR0Z6VDNkdVVISnZjR1Z5ZEhrb2EyVjVLU2tnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUdOdmJuTjBJSFpoYkhWbElEMGdkSGRsWlc0dWRtRnNkV1Z6VzJ0bGVWMDdYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdaSFZ5WVhScGIyNGdQU0JOWVhSb0xtMWhlQ2hrZFhKaGRHbHZiaXdnZG1Gc2RXVXVaSFZ5WVhScGIyNHBPMXh1SUNBZ0lDQWdJQ0FnSUNBZ2ZWeHVJQ0FnSUNBZ0lDQjlYRzVjYmlBZ0lDQWdJQ0FnZEdsdFpXeHBibVV1Y0hWemFDaDdYRzRnSUNBZ0lDQWdJQ0FnSUNCbWNtOXRPaUJqZFhKeVpXNTBVR3hoZVdobFlXUXNYRzRnSUNBZ0lDQWdJQ0FnSUNCa2RYSmhkR2x2YmpvZ1pIVnlZWFJwYjI0c1hHNGdJQ0FnSUNBZ0lDQWdJQ0JtYVhKbE9pQW9kR2x0WlNrZ1BUNGdkSGRsWlc0dWMyVmxhMVJwYldVb2RHbHRaU2xjYmlBZ0lDQWdJQ0FnZlNrN1hHNWNiaUFnSUNBZ0lDQWdZM1Z5Y21WdWRGQnNZWGxvWldGa0lDczlJSFIzWldWdUxtUjFjbUYwYVc5dU8xeHVJQ0FnSUgxY2JseHVJQ0FnSUhKbGRIVnliaUI3SUhSdmRHRnNWR2x0WlRvZ1kzVnljbVZ1ZEZCc1lYbG9aV0ZrTENCMGFXMWxiR2x1WlNCOU8xeHVmVHRjYmx4dVkyOXVjM1FnYzJWMFZIZGxaVzV6SUQwZ0tIc2daV3hoY0hObFpDd2dkR2x0Wld4cGJtVXNJSFJwYldWc2FXNWxUR1Z1WjNSb0lIMHBJRDArSUh0Y2JpQWdJQ0JtYjNJZ0tHeGxkQ0JwSUQwZ01Ec2dhU0E4SUhScGJXVnNhVzVsVEdWdVozUm9PeUJwS3lzcElIdGNiaUFnSUNBZ0lDQWdZMjl1YzNRZ2RIZGxaVzRnUFNCMGFXMWxiR2x1WlZ0cFhUdGNiaUFnSUNBZ0lDQWdZMjl1YzNRZ2RIZGxaVzVVYVcxbElEMGdaV3hoY0hObFpDQXRJSFIzWldWdUxtWnliMjA3WEc1Y2JpQWdJQ0FnSUNBZ2FXWWdLSFIzWldWdVZHbHRaU0ErSURBZ0ppWWdkSGRsWlc1VWFXMWxJRHdnZEhkbFpXNHVaSFZ5WVhScGIyNHBJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lIUjNaV1Z1TG1acGNtVW9kSGRsWlc1VWFXMWxLVHRjYmlBZ0lDQWdJQ0FnZlZ4dUlDQWdJSDFjYm4wN1hHNWNibVY0Y0c5eWRDQmtaV1poZFd4MElHWjFibU4wYVc5dUlIUnBiV1ZzYVc1bEtHUmxaaXdnY0hKdmNITWdQU0I3ZlNrZ2UxeHVJQ0FnSUdOdmJuTjBJSHNnZEc5MFlXeFVhVzFsTENCMGFXMWxiR2x1WlNCOUlEMGdZVzVoYkhsNlpTaGtaV1lwTzF4dVhHNGdJQ0FnY21WMGRYSnVJRzVsZHlCVWQyVmxiaWg3WEc0Z0lDQWdJQ0FnSUM0dUxuQnliM0J6TEZ4dUlDQWdJQ0FnSUNCa2RYSmhkR2x2YmpvZ2RHOTBZV3hVYVcxbExGeHVJQ0FnSUNBZ0lDQmxZWE5sT2lCbFlYTnBibWN1YkdsdVpXRnlMRnh1SUNBZ0lDQWdJQ0IyWVd4MVpYTTZJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lIQTZJREZjYmlBZ0lDQWdJQ0FnZlN4Y2JpQWdJQ0FnSUNBZ2RHbHRaV3hwYm1VNklIUnBiV1ZzYVc1bExGeHVJQ0FnSUNBZ0lDQjBhVzFsYkdsdVpVeGxibWQwYURvZ2RHbHRaV3hwYm1VdWJHVnVaM1JvTEZ4dUlDQWdJQ0FnSUNCdmJsSmxibVJsY2pvZ2MyVjBWSGRsWlc1elhHNGdJQ0FnZlNrN1hHNTlJbDE5XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9pbmMvdGltZWxpbmUuanNcbiAqKiBtb2R1bGUgaWQgPSAxMVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbi8qXG4gICAgIyBBZGFwdGVyIGNsYXNzXG4gICAgIyMgUHJvdmlkZXMgYSBnZXR0ZXIvc2V0dGVyIHdyYXBwZXIgYW5kIHByb3BlcnR5IGNhY2hlIGZvciBkaWZmZXJlbnQgZWxlbWVudCB0eXBlc1xuXG4gICAgT3ZlcnJpZGUgYGdldHRlcmAgYW5kIGBzZXR0ZXJgIHRvIHJlaW1wbGVtZW50IHRoZSBpbnRlcmZhY2UgZm9yIG5ldyBlbGVtZW50IHR5cGVzLlxuXG4gICAgU2V0IGBFeHRlbmRlZC5wcm90b3R5cGUuc3RhdGVNYXBgIGFzIGFuIG9iamVjdCBrZXkvdmFsdWUgbWFwIHRvIHRyYW5zbGF0ZSBpbmNvbWluZyBrZXlzIHRvXG4gICAgQVBJLXNwZWNpZmljIGtleXMuIEZvciBpbnN0YW5jZSwgeyB4OiAndHJhbnNsYXRlWCcgfS4gXG5cbiAgICBTZXQgYEV4dGVuZGVkLnByb3RvdHlwZS52YWx1ZVR5cGVNYXBgIGFzIGFuIG9iamVjdCBrZXkvdmFsdWUgbWFwIHRvIHJldHVybiBhIHZhbHVlIHR5cGUgd2l0aFxuICAgIGBnZXRWYWx1ZVR5cGUoa2V5KWAgKGtleSB3aWxsIGJlIG1hcHBlZCBhY2NvcmRpbmcgdG8gYHN0YXRlTWFwYClcbiovXG5cbnZhciBBZGFwdGVyID0gZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIEFkYXB0ZXIocHJvcHMpIHtcbiAgICAgICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIEFkYXB0ZXIpO1xuXG4gICAgICAgIHRoaXMuZWxlbWVudCA9IHByb3BzLmVsZW1lbnQ7XG4gICAgICAgIHRoaXMuY2FjaGUgPSB7fTtcblxuICAgICAgICBpZiAocHJvcHMuZ2V0dGVyKSB7XG4gICAgICAgICAgICB0aGlzLmdldHRlciA9IHByb3BzLmdldHRlcjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChwcm9wcy5zZXR0ZXIpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0dGVyID0gcHJvcHMuc2V0dGVyO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHByb3BzLnN0YXRlTWFwKSB7XG4gICAgICAgICAgICB0aGlzLnN0YXRlTWFwID0gcHJvcHMuc3RhdGVNYXA7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAocHJvcHMudmFsdWVUeXBlTWFwKSB7XG4gICAgICAgICAgICB0aGlzLnZhbHVlVHlwZU1hcCA9IHByb3BzLnZhbHVlVHlwZU1hcDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qXG4gICAgICAgIEdldCBlbGVtZW50IHByb3BlcnR5XG4gICAgICAgICBAcGFyYW0gW3N0cmluZ106IEtleSB0byByZWFkXG4gICAgICAgIEBwYXJhbSBbYm9vbGVhbl06IElmIGB0cnVlYCwgd2lsbCBvdmVycmlkZSBjYWNoZWQgcHJvcGVydHlcbiAgICAqL1xuXG4gICAgQWRhcHRlci5wcm90b3R5cGUuZ2V0ID0gZnVuY3Rpb24gZ2V0KGtleSwgcmVmcmVzaCkge1xuICAgICAgICB2YXIgbWFwcGVkS2V5ID0gdGhpcy5tYXBTdGF0ZUtleShrZXkpO1xuXG4gICAgICAgIGlmIChyZWZyZXNoIHx8ICF0aGlzLmNhY2hlLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmNhY2hlW2tleV0gPSB0aGlzLmdldHRlcihtYXBwZWRLZXkpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY2FjaGVba2V5XTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICAvKlxuICAgICAgICBTZXQgZWxlbWVudCBwcm9wZXJ0aWVzXG4gICAgICAgICBAcGFyYW0gW29iamVjdF06IEtleS92YWx1ZSBwcm9wZXJ0aWVzIHRvIHNldFxuICAgICovXG5cbiAgICBBZGFwdGVyLnByb3RvdHlwZS5zZXQgPSBmdW5jdGlvbiBzZXQocHJvcHMpIHtcbiAgICAgICAgdmFyIHRyYW5zbGF0ZWRQcm9wcyA9IHt9O1xuXG4gICAgICAgIC8vIFRyYW5zbGF0ZSBwcm9wc1xuICAgICAgICBmb3IgKHZhciBrZXkgaW4gcHJvcHMpIHtcbiAgICAgICAgICAgIGlmIChwcm9wcy5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgICAgICAgdmFyIG1hcHBlZEtleSA9IHRoaXMubWFwU3RhdGVLZXkoa2V5KTtcbiAgICAgICAgICAgICAgICB0aGlzLmNhY2hlW2tleV0gPSB0cmFuc2xhdGVkUHJvcHNbbWFwcGVkS2V5XSA9IHByb3BzW2tleV07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcy5zZXR0ZXIodHJhbnNsYXRlZFByb3BzKTtcbiAgICB9O1xuXG4gICAgLypcbiAgICAgICAgT3ZlcnJpZGFibGUgZWxlbWVudCBnZXR0ZXIgLSBkZWZhdWx0IGZvciBwbGFpbiBvYmplY3QgXG4gICAgKi9cblxuICAgIEFkYXB0ZXIucHJvdG90eXBlLmdldHRlciA9IGZ1bmN0aW9uIGdldHRlcihrZXkpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZWxlbWVudFtrZXldO1xuICAgIH07XG5cbiAgICAvKlxuICAgICAgICBPdmVycmlkYWJsZSBlbGVtZW50IHNldHRlciAtIGRlZmF1bHQgZm9yIHBsYWluIG9iamVjdFxuICAgICovXG5cbiAgICBBZGFwdGVyLnByb3RvdHlwZS5zZXR0ZXIgPSBmdW5jdGlvbiBzZXR0ZXIocHJvcHMpIHtcbiAgICAgICAgZm9yICh2YXIga2V5IGluIHByb3BzKSB7XG4gICAgICAgICAgICBpZiAocHJvcHMuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgICAgICAgIHRoaXMuZWxlbWVudFtrZXldID0gcHJvcHNba2V5XTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG5cbiAgICAvKlxuICAgICAgICBNYXAgc3RhdGUga2V5IGFzIHBlciBgc3RhdGVNYXBgLCBpZiBwcmVzZW50XG4gICAgICAgICBAcGFyYW0gW3N0cmluZ106IEtleSB0byBtYXBcbiAgICAgICAgQHJldHVybiBbc3RyaW5nXTogTWFwcGVkIGtleSwgb3Igb3JpZ2luYWwga2V5IGlmIG5vbmUgZm91bmRcbiAgICAqL1xuXG4gICAgQWRhcHRlci5wcm90b3R5cGUubWFwU3RhdGVLZXkgPSBmdW5jdGlvbiBtYXBTdGF0ZUtleShrZXkpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc3RhdGVNYXAgPyB0aGlzLnN0YXRlTWFwW2tleV0gfHwga2V5IDoga2V5O1xuICAgIH07XG5cbiAgICAvKlxuICAgICAgICBHZXQgdmFsdWVUeXBlIG9mIHByb3ZpZGVkIGtleVxuICAgICAgICAgQHBhcmFtIFtzdHJpbmddOiBOYW1lIG9mIHByb3BlcnR5IHRvIG1hcFxuICAgICAgICBAcmV0dXJuIFt2YWx1ZVR5cGVdOiBWYWx1ZSB0eXBlIG9mIHByb3BlcnR5XG4gICAgKi9cblxuICAgIEFkYXB0ZXIucHJvdG90eXBlLmdldFZhbHVlVHlwZSA9IGZ1bmN0aW9uIGdldFZhbHVlVHlwZShrZXkpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudmFsdWVUeXBlTWFwID8gdGhpcy52YWx1ZVR5cGVNYXBbdGhpcy5tYXBTdGF0ZUtleShrZXkpXSA6IGZhbHNlO1xuICAgIH07XG5cbiAgICByZXR1cm4gQWRhcHRlcjtcbn0oKTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gQWRhcHRlcjtcblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gKHByb3BzKSB7XG4gICAgcmV0dXJuIG5ldyBBZGFwdGVyKHByb3BzKTtcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5OeVl5OWhaR0Z3ZEdWeUwyRmtZWEIwWlhJdWFuTWlYU3dpYm1GdFpYTWlPbHRkTENKdFlYQndhVzVuY3lJNklqczdPenM3T3pzN096czdPenM3T3pzN096dEpRVmx4UWp0QlFVTnFRaXhoUVVScFFpeFBRVU5xUWl4RFFVRlpMRXRCUVZvc1JVRkJiVUk3T0VKQlJFWXNVMEZEUlRzN1FVRkRaaXhoUVVGTExFOUJRVXdzUjBGQlpTeE5RVUZOTEU5QlFVNHNRMEZFUVR0QlFVVm1MR0ZCUVVzc1MwRkJUQ3hIUVVGaExFVkJRV0lzUTBGR1pUczdRVUZKWml4WlFVRkpMRTFCUVUwc1RVRkJUaXhGUVVGak8wRkJRMlFzYVVKQlFVc3NUVUZCVEN4SFFVRmpMRTFCUVUwc1RVRkJUaXhEUVVSQk8xTkJRV3hDT3p0QlFVbEJMRmxCUVVrc1RVRkJUU3hOUVVGT0xFVkJRV003UVVGRFpDeHBRa0ZCU3l4TlFVRk1MRWRCUVdNc1RVRkJUU3hOUVVGT0xFTkJSRUU3VTBGQmJFSTdPMEZCU1VFc1dVRkJTU3hOUVVGTkxGRkJRVTRzUlVGQlowSTdRVUZEYUVJc2FVSkJRVXNzVVVGQlRDeEhRVUZuUWl4TlFVRk5MRkZCUVU0c1EwRkVRVHRUUVVGd1FqczdRVUZKUVN4WlFVRkpMRTFCUVUwc1dVRkJUaXhGUVVGdlFqdEJRVU53UWl4cFFrRkJTeXhaUVVGTUxFZEJRVzlDTEUxQlFVMHNXVUZCVGl4RFFVUkJPMU5CUVhoQ08wdEJhRUpLT3pzN096czdPenRCUVVScFFpeHpRa0UwUW1wQ0xHMUNRVUZKTEV0QlFVc3NVMEZCVXp0QlFVTmtMRmxCUVUwc1dVRkJXU3hMUVVGTExGZEJRVXdzUTBGQmFVSXNSMEZCYWtJc1EwRkJXaXhEUVVSUk96dEJRVWRrTEZsQlFVa3NWMEZCVnl4RFFVRkRMRXRCUVVzc1MwRkJUQ3hEUVVGWExHTkJRVmdzUTBGQk1FSXNSMEZCTVVJc1EwRkJSQ3hGUVVGcFF6dEJRVU0xUXl4dFFrRkJUeXhMUVVGTExFdEJRVXdzUTBGQlZ5eEhRVUZZTEVsQlFXdENMRXRCUVVzc1RVRkJUQ3hEUVVGWkxGTkJRVm9zUTBGQmJFSXNRMEZFY1VNN1UwRkJhRVFzVFVGRlR6dEJRVU5JTEcxQ1FVRlBMRXRCUVVzc1MwRkJUQ3hEUVVGWExFZEJRVmdzUTBGQlVDeERRVVJITzFOQlJsQTdPenM3T3pzN08wRkJMMEpoTEhOQ1FUSkRha0lzYlVKQlFVa3NUMEZCVHp0QlFVTlFMRmxCUVUwc2EwSkJRV3RDTEVWQlFXeENPenM3UVVGRVF5eGhRVWxHTEVsQlFVa3NSMEZCU2l4SlFVRlhMRXRCUVdoQ0xFVkJRWFZDTzBGQlEyNUNMR2RDUVVGSkxFMUJRVTBzWTBGQlRpeERRVUZ4UWl4SFFVRnlRaXhEUVVGS0xFVkJRU3RDTzBGQlF6TkNMRzlDUVVGTkxGbEJRVmtzUzBGQlN5eFhRVUZNTEVOQlFXbENMRWRCUVdwQ0xFTkJRVm9zUTBGRWNVSTdRVUZGTTBJc2NVSkJRVXNzUzBGQlRDeERRVUZYTEVkQlFWZ3NTVUZCYTBJc1owSkJRV2RDTEZOQlFXaENMRWxCUVRaQ0xFMUJRVTBzUjBGQlRpeERRVUUzUWl4RFFVWlRPMkZCUVM5Q08xTkJSRW83TzBGQlQwRXNaVUZCVHl4TFFVRkxMRTFCUVV3c1EwRkJXU3hsUVVGYUxFTkJRVkFzUTBGWVR6czdPenM3T3p0QlFUTkRUU3h6UWtFMFJHcENMSGxDUVVGUExFdEJRVXM3UVVGRFVpeGxRVUZQTEV0QlFVc3NUMEZCVEN4RFFVRmhMRWRCUVdJc1EwRkJVQ3hEUVVSUk96czdPenM3TzBGQk5VUkxMSE5DUVcxRmFrSXNlVUpCUVU4c1QwRkJUenRCUVVOV0xHRkJRVXNzU1VGQlNTeEhRVUZLTEVsQlFWY3NTMEZCYUVJc1JVRkJkVUk3UVVGRGJrSXNaMEpCUVVrc1RVRkJUU3hqUVVGT0xFTkJRWEZDTEVkQlFYSkNMRU5CUVVvc1JVRkJLMEk3UVVGRE0wSXNjVUpCUVVzc1QwRkJUQ3hEUVVGaExFZEJRV0lzU1VGQmIwSXNUVUZCVFN4SFFVRk9MRU5CUVhCQ0xFTkJSREpDTzJGQlFTOUNPMU5CUkVvN096czdPenM3T3p0QlFYQkZZU3h6UWtGcFJtcENMRzFEUVVGWkxFdEJRVXM3UVVGRFlpeGxRVUZQTEVsQlFVTXNRMEZCU3l4UlFVRk1MRWRCUVdsQ0xFdEJRVXNzVVVGQlRDeERRVUZqTEVkQlFXUXNTMEZCYzBJc1IwRkJkRUlzUjBGQk5FSXNSMEZCT1VNc1EwRkVUVHM3T3pzN096czdPMEZCYWtaQkxITkNRVEpHYWtJc2NVTkJRV0VzUzBGQlN6dEJRVU5rTEdWQlFVOHNTVUZCUXl4RFFVRkxMRmxCUVV3c1IwRkJjVUlzUzBGQlN5eFpRVUZNTEVOQlFXdENMRXRCUVVzc1YwRkJUQ3hEUVVGcFFpeEhRVUZxUWl4RFFVRnNRaXhEUVVGMFFpeEhRVUZwUlN4TFFVRnFSU3hEUVVSUE96czdWMEV6UmtRN096czdPMnRDUVdkSFRpeFZRVUZETEV0QlFVUTdWMEZCVnl4SlFVRkpMRTlCUVVvc1EwRkJXU3hMUVVGYU8wTkJRVmdpTENKbWFXeGxJam9pWVdSaGNIUmxjaTVxY3lJc0luTnZkWEpqWlZKdmIzUWlPaUl2VlhObGNuTXZUV0YwZEM5VGFYUmxjeTl3YjNCdGIzUnBiMjRpTENKemIzVnlZMlZ6UTI5dWRHVnVkQ0k2V3lJdktseHVJQ0FnSUNNZ1FXUmhjSFJsY2lCamJHRnpjMXh1SUNBZ0lDTWpJRkJ5YjNacFpHVnpJR0VnWjJWMGRHVnlMM05sZEhSbGNpQjNjbUZ3Y0dWeUlHRnVaQ0J3Y205d1pYSjBlU0JqWVdOb1pTQm1iM0lnWkdsbVptVnlaVzUwSUdWc1pXMWxiblFnZEhsd1pYTmNibHh1SUNBZ0lFOTJaWEp5YVdSbElHQm5aWFIwWlhKZ0lHRnVaQ0JnYzJWMGRHVnlZQ0IwYnlCeVpXbHRjR3hsYldWdWRDQjBhR1VnYVc1MFpYSm1ZV05sSUdadmNpQnVaWGNnWld4bGJXVnVkQ0IwZVhCbGN5NWNibHh1SUNBZ0lGTmxkQ0JnUlhoMFpXNWtaV1F1Y0hKdmRHOTBlWEJsTG5OMFlYUmxUV0Z3WUNCaGN5QmhiaUJ2WW1wbFkzUWdhMlY1TDNaaGJIVmxJRzFoY0NCMGJ5QjBjbUZ1YzJ4aGRHVWdhVzVqYjIxcGJtY2dhMlY1Y3lCMGIxeHVJQ0FnSUVGUVNTMXpjR1ZqYVdacFl5QnJaWGx6TGlCR2IzSWdhVzV6ZEdGdVkyVXNJSHNnZURvZ0ozUnlZVzV6YkdGMFpWZ25JSDB1SUZ4dVhHNGdJQ0FnVTJWMElHQkZlSFJsYm1SbFpDNXdjbTkwYjNSNWNHVXVkbUZzZFdWVWVYQmxUV0Z3WUNCaGN5QmhiaUJ2WW1wbFkzUWdhMlY1TDNaaGJIVmxJRzFoY0NCMGJ5QnlaWFIxY200Z1lTQjJZV3gxWlNCMGVYQmxJSGRwZEdoY2JpQWdJQ0JnWjJWMFZtRnNkV1ZVZVhCbEtHdGxlU2xnSUNoclpYa2dkMmxzYkNCaVpTQnRZWEJ3WldRZ1lXTmpiM0prYVc1bklIUnZJR0J6ZEdGMFpVMWhjR0FwWEc0cUwxeHVaWGh3YjNKMElHUmxabUYxYkhRZ1kyeGhjM01nUVdSaGNIUmxjaUI3WEc0Z0lDQWdZMjl1YzNSeWRXTjBiM0lvY0hKdmNITXBJSHRjYmlBZ0lDQWdJQ0FnZEdocGN5NWxiR1Z0Wlc1MElEMGdjSEp2Y0hNdVpXeGxiV1Z1ZER0Y2JpQWdJQ0FnSUNBZ2RHaHBjeTVqWVdOb1pTQTlJSHQ5TzF4dVhHNGdJQ0FnSUNBZ0lHbG1JQ2h3Y205d2N5NW5aWFIwWlhJcElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUhSb2FYTXVaMlYwZEdWeUlEMGdjSEp2Y0hNdVoyVjBkR1Z5TzF4dUlDQWdJQ0FnSUNCOVhHNWNiaUFnSUNBZ0lDQWdhV1lnS0hCeWIzQnpMbk5sZEhSbGNpa2dlMXh1SUNBZ0lDQWdJQ0FnSUNBZ2RHaHBjeTV6WlhSMFpYSWdQU0J3Y205d2N5NXpaWFIwWlhJN1hHNGdJQ0FnSUNBZ0lIMWNibHh1SUNBZ0lDQWdJQ0JwWmlBb2NISnZjSE11YzNSaGRHVk5ZWEFwSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJSFJvYVhNdWMzUmhkR1ZOWVhBZ1BTQndjbTl3Y3k1emRHRjBaVTFoY0R0Y2JpQWdJQ0FnSUNBZ2ZWeHVYRzRnSUNBZ0lDQWdJR2xtSUNod2NtOXdjeTUyWVd4MVpWUjVjR1ZOWVhBcElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUhSb2FYTXVkbUZzZFdWVWVYQmxUV0Z3SUQwZ2NISnZjSE11ZG1Gc2RXVlVlWEJsVFdGd08xeHVJQ0FnSUNBZ0lDQjlYRzRnSUNBZ2ZWeHVYRzRnSUNBZ0x5cGNiaUFnSUNBZ0lDQWdSMlYwSUdWc1pXMWxiblFnY0hKdmNHVnlkSGxjYmx4dUlDQWdJQ0FnSUNCQWNHRnlZVzBnVzNOMGNtbHVaMTA2SUV0bGVTQjBieUJ5WldGa1hHNGdJQ0FnSUNBZ0lFQndZWEpoYlNCYlltOXZiR1ZoYmwwNklFbG1JR0IwY25WbFlDd2dkMmxzYkNCdmRtVnljbWxrWlNCallXTm9aV1FnY0hKdmNHVnlkSGxjYmlBZ0lDQXFMMXh1SUNBZ0lHZGxkQ2hyWlhrc0lISmxabkpsYzJncElIdGNiaUFnSUNBZ0lDQWdZMjl1YzNRZ2JXRndjR1ZrUzJWNUlEMGdkR2hwY3k1dFlYQlRkR0YwWlV0bGVTaHJaWGtwTzF4dVhHNGdJQ0FnSUNBZ0lHbG1JQ2h5WldaeVpYTm9JSHg4SUNGMGFHbHpMbU5oWTJobExtaGhjMDkzYmxCeWIzQmxjblI1S0d0bGVTa3BJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lISmxkSFZ5YmlCMGFHbHpMbU5oWTJobFcydGxlVjBnUFNCMGFHbHpMbWRsZEhSbGNpaHRZWEJ3WldSTFpYa3BPMXh1SUNBZ0lDQWdJQ0I5SUdWc2MyVWdlMXh1SUNBZ0lDQWdJQ0FnSUNBZ2NtVjBkWEp1SUhSb2FYTXVZMkZqYUdWYmEyVjVYVHRjYmlBZ0lDQWdJQ0FnZlZ4dUlDQWdJSDFjYmx4dUlDQWdJQzhxWEc0Z0lDQWdJQ0FnSUZObGRDQmxiR1Z0Wlc1MElIQnliM0JsY25ScFpYTmNibHh1SUNBZ0lDQWdJQ0JBY0dGeVlXMGdXMjlpYW1WamRGMDZJRXRsZVM5MllXeDFaU0J3Y205d1pYSjBhV1Z6SUhSdklITmxkRnh1SUNBZ0lDb3ZYRzRnSUNBZ2MyVjBLSEJ5YjNCektTQjdYRzRnSUNBZ0lDQWdJR052Ym5OMElIUnlZVzV6YkdGMFpXUlFjbTl3Y3lBOUlIdDlPMXh1WEc0Z0lDQWdJQ0FnSUM4dklGUnlZVzV6YkdGMFpTQndjbTl3YzF4dUlDQWdJQ0FnSUNCbWIzSWdLR3hsZENCclpYa2dhVzRnY0hKdmNITXBJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lHbG1JQ2h3Y205d2N5NW9ZWE5QZDI1UWNtOXdaWEowZVNoclpYa3BLU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnWTI5dWMzUWdiV0Z3Y0dWa1MyVjVJRDBnZEdocGN5NXRZWEJUZEdGMFpVdGxlU2hyWlhrcE8xeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lIUm9hWE11WTJGamFHVmJhMlY1WFNBOUlIUnlZVzV6YkdGMFpXUlFjbTl3YzF0dFlYQndaV1JMWlhsZElEMGdjSEp2Y0hOYmEyVjVYVHRjYmlBZ0lDQWdJQ0FnSUNBZ0lIMWNiaUFnSUNBZ0lDQWdmVnh1WEc0Z0lDQWdJQ0FnSUhKbGRIVnliaUIwYUdsekxuTmxkSFJsY2loMGNtRnVjMnhoZEdWa1VISnZjSE1wTzF4dUlDQWdJSDFjYmx4dUlDQWdJQzhxWEc0Z0lDQWdJQ0FnSUU5MlpYSnlhV1JoWW14bElHVnNaVzFsYm5RZ1oyVjBkR1Z5SUMwZ1pHVm1ZWFZzZENCbWIzSWdjR3hoYVc0Z2IySnFaV04wSUZ4dUlDQWdJQ292WEc0Z0lDQWdaMlYwZEdWeUtHdGxlU2tnZTF4dUlDQWdJQ0FnSUNCeVpYUjFjbTRnZEdocGN5NWxiR1Z0Wlc1MFcydGxlVjA3WEc0Z0lDQWdmVnh1WEc0Z0lDQWdMeXBjYmlBZ0lDQWdJQ0FnVDNabGNuSnBaR0ZpYkdVZ1pXeGxiV1Z1ZENCelpYUjBaWElnTFNCa1pXWmhkV3gwSUdadmNpQndiR0ZwYmlCdlltcGxZM1JjYmlBZ0lDQXFMMXh1SUNBZ0lITmxkSFJsY2lod2NtOXdjeWtnZTF4dUlDQWdJQ0FnSUNCbWIzSWdLR3hsZENCclpYa2dhVzRnY0hKdmNITXBJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lHbG1JQ2h3Y205d2N5NW9ZWE5QZDI1UWNtOXdaWEowZVNoclpYa3BLU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnZEdocGN5NWxiR1Z0Wlc1MFcydGxlVjBnUFNCd2NtOXdjMXRyWlhsZE8xeHVJQ0FnSUNBZ0lDQWdJQ0FnZlZ4dUlDQWdJQ0FnSUNCOVhHNGdJQ0FnZlZ4dVhHNGdJQ0FnTHlwY2JpQWdJQ0FnSUNBZ1RXRndJSE4wWVhSbElHdGxlU0JoY3lCd1pYSWdZSE4wWVhSbFRXRndZQ3dnYVdZZ2NISmxjMlZ1ZEZ4dVhHNGdJQ0FnSUNBZ0lFQndZWEpoYlNCYmMzUnlhVzVuWFRvZ1MyVjVJSFJ2SUcxaGNGeHVJQ0FnSUNBZ0lDQkFjbVYwZFhKdUlGdHpkSEpwYm1kZE9pQk5ZWEJ3WldRZ2EyVjVMQ0J2Y2lCdmNtbG5hVzVoYkNCclpYa2dhV1lnYm05dVpTQm1iM1Z1WkZ4dUlDQWdJQ292WEc0Z0lDQWdiV0Z3VTNSaGRHVkxaWGtvYTJWNUtTQjdYRzRnSUNBZ0lDQWdJSEpsZEhWeWJpQW9kR2hwY3k1emRHRjBaVTFoY0NrZ1B5QjBhR2x6TG5OMFlYUmxUV0Z3VzJ0bGVWMGdmSHdnYTJWNUlEb2dhMlY1TzF4dUlDQWdJSDFjYmx4dUlDQWdJQzhxWEc0Z0lDQWdJQ0FnSUVkbGRDQjJZV3gxWlZSNWNHVWdiMllnY0hKdmRtbGtaV1FnYTJWNVhHNWNiaUFnSUNBZ0lDQWdRSEJoY21GdElGdHpkSEpwYm1kZE9pQk9ZVzFsSUc5bUlIQnliM0JsY25SNUlIUnZJRzFoY0Z4dUlDQWdJQ0FnSUNCQWNtVjBkWEp1SUZ0MllXeDFaVlI1Y0dWZE9pQldZV3gxWlNCMGVYQmxJRzltSUhCeWIzQmxjblI1WEc0Z0lDQWdLaTljYmlBZ0lDQm5aWFJXWVd4MVpWUjVjR1VvYTJWNUtTQjdYRzRnSUNBZ0lDQWdJSEpsZEhWeWJpQW9kR2hwY3k1MllXeDFaVlI1Y0dWTllYQXBJRDhnZEdocGN5NTJZV3gxWlZSNWNHVk5ZWEJiZEdocGN5NXRZWEJUZEdGMFpVdGxlU2hyWlhrcFhTQTZJR1poYkhObE8xeHVJQ0FnSUgxY2JuMWNibHh1Wlhod2IzSjBJR1JsWm1GMWJIUWdLSEJ5YjNCektTQTlQaUJ1WlhjZ1FXUmhjSFJsY2lod2NtOXdjeWs3SWwxOVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvYWRhcHRlci9hZGFwdGVyLmpzXG4gKiogbW9kdWxlIGlkID0gMTJcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHMuZ2V0dGVyID0gZ2V0dGVyO1xuZXhwb3J0cy5zZXR0ZXIgPSBzZXR0ZXI7XG5cbnZhciBfYWRhcHRlciA9IHJlcXVpcmUoJy4vYWRhcHRlcicpO1xuXG52YXIgX2FkYXB0ZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfYWRhcHRlcik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIGdldHRlcihrZXkpIHtcbiAgICByZXR1cm4gdGhpcy5lbGVtZW50LmdldEF0dHJpYnV0ZShrZXkpO1xufVxuXG5mdW5jdGlvbiBzZXR0ZXIocHJvcHMpIHtcbiAgICBmb3IgKHZhciBrZXkgaW4gcHJvcHMpIHtcbiAgICAgICAgaWYgKHByb3BzLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudC5zZXRBdHRyaWJ1dGUoa2V5LCBwcm9wc1trZXldKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gKGVsZW1lbnQpIHtcbiAgICByZXR1cm4gKDAsIF9hZGFwdGVyMi5kZWZhdWx0KSh7IGVsZW1lbnQ6IGVsZW1lbnQsIGdldHRlcjogZ2V0dGVyLCBzZXR0ZXI6IHNldHRlciB9KTtcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5OeVl5OWhaR0Z3ZEdWeUwyRjBkSEl0WVdSaGNIUmxjaTVxY3lKZExDSnVZVzFsY3lJNlcxMHNJbTFoY0hCcGJtZHpJam9pT3pzN1VVRkZaMEk3VVVGSlFUczdPenM3T3pzN1FVRktWQ3hUUVVGVExFMUJRVlFzUTBGQlowSXNSMEZCYUVJc1JVRkJjVUk3UVVGRGVFSXNWMEZCVHl4TFFVRkxMRTlCUVV3c1EwRkJZU3haUVVGaUxFTkJRVEJDTEVkQlFURkNMRU5CUVZBc1EwRkVkMEk3UTBGQmNrSTdPMEZCU1VFc1UwRkJVeXhOUVVGVUxFTkJRV2RDTEV0QlFXaENMRVZCUVhWQ08wRkJRekZDTEZOQlFVc3NTVUZCU1N4SFFVRktMRWxCUVZjc1MwRkJhRUlzUlVGQmRVSTdRVUZEYmtJc1dVRkJTU3hOUVVGTkxHTkJRVTRzUTBGQmNVSXNSMEZCY2tJc1EwRkJTaXhGUVVFclFqdEJRVU16UWl4cFFrRkJTeXhQUVVGTUxFTkJRV0VzV1VGQllpeERRVUV3UWl4SFFVRXhRaXhGUVVFclFpeE5RVUZOTEVkQlFVNHNRMEZCTDBJc1JVRkVNa0k3VTBGQkwwSTdTMEZFU2p0RFFVUkhPenRyUWtGUlVTeFZRVUZETEU5QlFVUTdWMEZCWVN4MVFrRkJZeXhGUVVGRkxHZENRVUZHTEVWQlFWY3NZMEZCV0N4RlFVRnRRaXhqUVVGdVFpeEZRVUZrTzBOQlFXSWlMQ0ptYVd4bElqb2lZWFIwY2kxaFpHRndkR1Z5TG1weklpd2ljMjkxY21ObFVtOXZkQ0k2SWk5VmMyVnljeTlOWVhSMEwxTnBkR1Z6TDNCdmNHMXZkR2x2YmlJc0luTnZkWEpqWlhORGIyNTBaVzUwSWpwYkltbHRjRzl5ZENCamNtVmhkR1ZCWkdGd2RHVnlJR1p5YjIwZ0p5NHZZV1JoY0hSbGNpYzdYRzVjYm1WNGNHOXlkQ0JtZFc1amRHbHZiaUJuWlhSMFpYSW9hMlY1S1NCN1hHNGdJQ0FnY21WMGRYSnVJSFJvYVhNdVpXeGxiV1Z1ZEM1blpYUkJkSFJ5YVdKMWRHVW9hMlY1S1R0Y2JuMWNibHh1Wlhod2IzSjBJR1oxYm1OMGFXOXVJSE5sZEhSbGNpaHdjbTl3Y3lrZ2UxeHVJQ0FnSUdadmNpQW9iR1YwSUd0bGVTQnBiaUJ3Y205d2N5a2dlMXh1SUNBZ0lDQWdJQ0JwWmlBb2NISnZjSE11YUdGelQzZHVVSEp2Y0dWeWRIa29hMlY1S1NrZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnZEdocGN5NWxiR1Z0Wlc1MExuTmxkRUYwZEhKcFluVjBaU2hyWlhrc0lIQnliM0J6VzJ0bGVWMHBPMXh1SUNBZ0lDQWdJQ0I5WEc0Z0lDQWdmVnh1ZlZ4dVhHNWxlSEJ2Y25RZ1pHVm1ZWFZzZENBb1pXeGxiV1Z1ZENrZ1BUNGdZM0psWVhSbFFXUmhjSFJsY2loN0lHVnNaVzFsYm5Rc0lHZGxkSFJsY2l3Z2MyVjBkR1Z5SUgwcE95SmRmUT09XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9hZGFwdGVyL2F0dHItYWRhcHRlci5qc1xuICoqIG1vZHVsZSBpZCA9IDEzXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfc3RhdGVNYXAgPSByZXF1aXJlKCcuL2Nzcy9zdGF0ZS1tYXAnKTtcblxudmFyIF9zdGF0ZU1hcDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9zdGF0ZU1hcCk7XG5cbnZhciBfdmFsdWVUeXBlTWFwID0gcmVxdWlyZSgnLi9jc3MvdmFsdWUtdHlwZS1tYXAnKTtcblxudmFyIF92YWx1ZVR5cGVNYXAyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfdmFsdWVUeXBlTWFwKTtcblxudmFyIF9idWlsZCA9IHJlcXVpcmUoJy4vY3NzL2J1aWxkJyk7XG5cbnZhciBfYnVpbGQyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfYnVpbGQpO1xuXG52YXIgX3ByZWZpeGVyID0gcmVxdWlyZSgnLi9jc3MvcHJlZml4ZXInKTtcblxudmFyIF9wcmVmaXhlcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9wcmVmaXhlcik7XG5cbnZhciBfYWRhcHRlciA9IHJlcXVpcmUoJy4vYWRhcHRlcicpO1xuXG52YXIgX2FkYXB0ZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfYWRhcHRlcik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIGdldHRlcihrZXkpIHtcbiAgICBjb25zb2xlLmxvZyh0aGlzLmVsZW1lbnQpO1xuICAgIHJldHVybiB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZSh0aGlzLmVsZW1lbnQsIG51bGwpWygwLCBfcHJlZml4ZXIyLmRlZmF1bHQpKGtleSldO1xufVxuXG5mdW5jdGlvbiBzZXR0ZXIocHJvcHMpIHtcbiAgICB0aGlzLmVsZW1lbnQuc3R5bGUuY3NzVGV4dCArPSAoMCwgX2J1aWxkMi5kZWZhdWx0KShwcm9wcyk7XG59XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uIChlbGVtZW50KSB7XG4gICAgcmV0dXJuICgwLCBfYWRhcHRlcjIuZGVmYXVsdCkoeyBlbGVtZW50OiBlbGVtZW50LCBzdGF0ZU1hcDogX3N0YXRlTWFwMi5kZWZhdWx0LCB2YWx1ZVR5cGVNYXA6IF92YWx1ZVR5cGVNYXAyLmRlZmF1bHQsIGdldHRlcjogZ2V0dGVyLCBzZXR0ZXI6IHNldHRlciB9KTtcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5OeVl5OWhaR0Z3ZEdWeUwyTnpjeTFoWkdGd2RHVnlMbXB6SWwwc0ltNWhiV1Z6SWpwYlhTd2liV0Z3Y0dsdVozTWlPaUk3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPMEZCVFVFc1UwRkJVeXhOUVVGVUxFTkJRV2xDTEVkQlFXcENMRVZCUVhOQ08wRkJRMnhDTEZsQlFWRXNSMEZCVWl4RFFVRlpMRXRCUVVzc1QwRkJUQ3hEUVVGYUxFTkJSR3RDTzBGQlJXeENMRmRCUVU4c1QwRkJUeXhuUWtGQlVDeERRVUYzUWl4TFFVRkxMRTlCUVV3c1JVRkJZeXhKUVVGMFF5eEZRVUUwUXl4M1FrRkJVeXhIUVVGVUxFTkJRVFZETEVOQlFWQXNRMEZHYTBJN1EwRkJkRUk3TzBGQlMwRXNVMEZCVXl4TlFVRlVMRU5CUVdkQ0xFdEJRV2hDTEVWQlFYVkNPMEZCUTI1Q0xGTkJRVXNzVDBGQlRDeERRVUZoTEV0QlFXSXNRMEZCYlVJc1QwRkJia0lzU1VGQk9FSXNjVUpCUVc5Q0xFdEJRWEJDTEVOQlFUbENMRU5CUkcxQ08wTkJRWFpDT3p0clFrRkpaU3hWUVVGRExFOUJRVVE3VjBGQllTeDFRa0ZCWXl4RlFVRkZMR2RDUVVGR0xFVkJRVmNzTkVKQlFWZ3NSVUZCY1VJc2IwTkJRWEpDTEVWQlFXMURMR05CUVc1RExFVkJRVEpETEdOQlFUTkRMRVZCUVdRN1EwRkJZaUlzSW1acGJHVWlPaUpqYzNNdFlXUmhjSFJsY2k1cWN5SXNJbk52ZFhKalpWSnZiM1FpT2lJdlZYTmxjbk12VFdGMGRDOVRhWFJsY3k5d2IzQnRiM1JwYjI0aUxDSnpiM1Z5WTJWelEyOXVkR1Z1ZENJNld5SnBiWEJ2Y25RZ2MzUmhkR1ZOWVhBZ1puSnZiU0FuTGk5amMzTXZjM1JoZEdVdGJXRndKenRjYm1sdGNHOXlkQ0IyWVd4MVpWUjVjR1ZOWVhBZ1puSnZiU0FuTGk5amMzTXZkbUZzZFdVdGRIbHdaUzF0WVhBbk8xeHVhVzF3YjNKMElHSjFhV3hrVUhKdmNHVnlkSGxUZEhKcGJtY2dabkp2YlNBbkxpOWpjM012WW5WcGJHUW5PMXh1YVcxd2IzSjBJSEJ5WldacGVHVnlJR1p5YjIwZ0p5NHZZM056TDNCeVpXWnBlR1Z5Snp0Y2JtbHRjRzl5ZENCamNtVmhkR1ZCWkdGd2RHVnlJR1p5YjIwZ0p5NHZZV1JoY0hSbGNpYzdYRzVjYm1aMWJtTjBhVzl1SUdkbGRIUmxjaUFvYTJWNUtTQjdYRzRnSUNBZ1kyOXVjMjlzWlM1c2IyY29kR2hwY3k1bGJHVnRaVzUwS1Z4dUlDQWdJSEpsZEhWeWJpQjNhVzVrYjNjdVoyVjBRMjl0Y0hWMFpXUlRkSGxzWlNoMGFHbHpMbVZzWlcxbGJuUXNJRzUxYkd3cFczQnlaV1pwZUdWeUtHdGxlU2xkTzF4dWZWeHVYRzVtZFc1amRHbHZiaUJ6WlhSMFpYSW9jSEp2Y0hNcElIdGNiaUFnSUNCMGFHbHpMbVZzWlcxbGJuUXVjM1I1YkdVdVkzTnpWR1Y0ZENBclBTQmlkV2xzWkZCeWIzQmxjblI1VTNSeWFXNW5LSEJ5YjNCektUdGNibjFjYmx4dVpYaHdiM0owSUdSbFptRjFiSFFnS0dWc1pXMWxiblFwSUQwK0lHTnlaV0YwWlVGa1lYQjBaWElvZXlCbGJHVnRaVzUwTENCemRHRjBaVTFoY0N3Z2RtRnNkV1ZVZVhCbFRXRndMQ0JuWlhSMFpYSXNJSE5sZEhSbGNpQjlLVHNpWFgwPVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvYWRhcHRlci9jc3MtYWRhcHRlci5qc1xuICoqIG1vZHVsZSBpZCA9IDE0XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzLnNldHRlciA9IHNldHRlcjtcblxudmFyIF9zdGF0ZU1hcCA9IHJlcXVpcmUoJy4vY3NzL3N0YXRlLW1hcCcpO1xuXG52YXIgX3N0YXRlTWFwMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3N0YXRlTWFwKTtcblxudmFyIF92YWx1ZVR5cGVNYXAgPSByZXF1aXJlKCcuL3N2Zy92YWx1ZS10eXBlLW1hcCcpO1xuXG52YXIgX3ZhbHVlVHlwZU1hcDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF92YWx1ZVR5cGVNYXApO1xuXG52YXIgX2J1aWxkID0gcmVxdWlyZSgnLi9zdmcvYnVpbGQnKTtcblxudmFyIF9idWlsZDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9idWlsZCk7XG5cbnZhciBfYXR0ckFkYXB0ZXIgPSByZXF1aXJlKCcuL2F0dHItYWRhcHRlcicpO1xuXG52YXIgX2FkYXB0ZXIgPSByZXF1aXJlKCcuL2FkYXB0ZXInKTtcblxudmFyIF9hZGFwdGVyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2FkYXB0ZXIpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBzZXR0ZXIocHJvcHMpIHtcbiAgICAoMCwgX2F0dHJBZGFwdGVyLnNldHRlcikoKDAsIF9idWlsZDIuZGVmYXVsdCkocHJvcHMsIHRoaXMub3JpZ2luKSk7XG59XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uIChlbGVtZW50KSB7XG4gICAgdmFyIGFkYXB0ZXIgPSAoMCwgX2FkYXB0ZXIyLmRlZmF1bHQpKHsgZWxlbWVudDogZWxlbWVudCwgc3RhdGVNYXA6IF9zdGF0ZU1hcDIuZGVmYXVsdCwgdmFsdWVUeXBlTWFwOiBfdmFsdWVUeXBlTWFwMi5kZWZhdWx0LCBnZXR0ZXI6IF9hdHRyQWRhcHRlci5nZXR0ZXIsIHNldHRlcjogc2V0dGVyIH0pO1xuICAgIHZhciBiQm94ID0gZWxlbWVudC5nZXRCQm94KCk7XG4gICAgdmFyIHRyYW5zZm9ybU9yaWdpblkgPSAwO1xuICAgIHZhciB0cmFuc2Zvcm1PcmlnaW5YID0gMDtcblxuICAgIGFkYXB0ZXIub3JpZ2luID0ge1xuICAgICAgICB4OiBiQm94LndpZHRoICogKHRyYW5zZm9ybU9yaWdpblggLyAxMDApICsgYkJveC54LFxuICAgICAgICB5OiBiQm94LmhlaWdodCAqICh0cmFuc2Zvcm1PcmlnaW5ZIC8gMTAwKSArIGJCb3gueVxuICAgIH07XG5cbiAgICByZXR1cm4gYWRhcHRlcjtcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5OeVl5OWhaR0Z3ZEdWeUwzTjJaeTFoWkdGd2RHVnlMbXB6SWwwc0ltNWhiV1Z6SWpwYlhTd2liV0Z3Y0dsdVozTWlPaUk3T3p0UlFVMW5RanM3T3pzN096czdPenM3T3pzN096czdPenM3T3p0QlFVRlVMRk5CUVZNc1RVRkJWQ3hEUVVGblFpeExRVUZvUWl4RlFVRjFRanRCUVVNeFFpdzJRa0ZCVnl4eFFrRkJUU3hMUVVGT0xFVkJRV0VzUzBGQlN5eE5RVUZNTEVOQlFYaENMRVZCUkRCQ08wTkJRWFpDT3p0clFrRkpVU3hWUVVGRExFOUJRVVFzUlVGQllUdEJRVU40UWl4UlFVRk5MRlZCUVZVc2RVSkJRV01zUlVGQlJTeG5Ra0ZCUml4RlFVRlhMRFJDUVVGWUxFVkJRWEZDTEc5RFFVRnlRaXhGUVVGdFF5d3lRa0ZCYmtNc1JVRkJNa01zWTBGQk0wTXNSVUZCWkN4RFFVRldMRU5CUkd0Q08wRkJSWGhDTEZGQlFVMHNUMEZCVHl4UlFVRlJMRTlCUVZJc1JVRkJVQ3hEUVVaclFqdEJRVWQ0UWl4UlFVRk5MRzFDUVVGdFFpeERRVUZ1UWl4RFFVaHJRanRCUVVsNFFpeFJRVUZOTEcxQ1FVRnRRaXhEUVVGdVFpeERRVXByUWpzN1FVRk5lRUlzV1VGQlVTeE5RVUZTTEVkQlFXbENPMEZCUTJJc1YwRkJSeXhMUVVGTExFdEJRVXdzU1VGQll5eHRRa0ZCYlVJc1IwRkJia0lzUTBGQlpDeEhRVUYzUXl4TFFVRkxMRU5CUVV3N1FVRkRNME1zVjBGQlJ5eExRVUZMTEUxQlFVd3NTVUZCWlN4dFFrRkJiVUlzUjBGQmJrSXNRMEZCWml4SFFVRjVReXhMUVVGTExFTkJRVXc3UzBGR2FFUXNRMEZPZDBJN08wRkJWM2hDTEZkQlFVOHNUMEZCVUN4RFFWaDNRanREUVVGaUlpd2labWxzWlNJNkluTjJaeTFoWkdGd2RHVnlMbXB6SWl3aWMyOTFjbU5sVW05dmRDSTZJaTlWYzJWeWN5OU5ZWFIwTDFOcGRHVnpMM0J2Y0cxdmRHbHZiaUlzSW5OdmRYSmpaWE5EYjI1MFpXNTBJanBiSW1sdGNHOXlkQ0J6ZEdGMFpVMWhjQ0JtY205dElDY3VMMk56Y3k5emRHRjBaUzF0WVhBbk8xeHVhVzF3YjNKMElIWmhiSFZsVkhsd1pVMWhjQ0JtY205dElDY3VMM04yWnk5MllXeDFaUzEwZVhCbExXMWhjQ2M3WEc1cGJYQnZjblFnWW5WcGJHUWdabkp2YlNBbkxpOXpkbWN2WW5WcGJHUW5PMXh1YVcxd2IzSjBJSHNnWjJWMGRHVnlMQ0J6WlhSMFpYSWdZWE1nWVhSMGNsTmxkSFJsY2lCOUlHWnliMjBnSnk0dllYUjBjaTFoWkdGd2RHVnlKenRjYm1sdGNHOXlkQ0JqY21WaGRHVkJaR0Z3ZEdWeUlHWnliMjBnSnk0dllXUmhjSFJsY2ljN1hHNWNibVY0Y0c5eWRDQm1kVzVqZEdsdmJpQnpaWFIwWlhJb2NISnZjSE1wSUh0Y2JpQWdJQ0JoZEhSeVUyVjBkR1Z5S0dKMWFXeGtLSEJ5YjNCekxDQjBhR2x6TG05eWFXZHBiaWtwTzF4dWZWeHVYRzVsZUhCdmNuUWdaR1ZtWVhWc2RDQW9aV3hsYldWdWRDa2dQVDRnZTF4dUlDQWdJR052Ym5OMElHRmtZWEIwWlhJZ1BTQmpjbVZoZEdWQlpHRndkR1Z5S0hzZ1pXeGxiV1Z1ZEN3Z2MzUmhkR1ZOWVhBc0lIWmhiSFZsVkhsd1pVMWhjQ3dnWjJWMGRHVnlMQ0J6WlhSMFpYSWdmU2s3WEc0Z0lDQWdZMjl1YzNRZ1lrSnZlQ0E5SUdWc1pXMWxiblF1WjJWMFFrSnZlQ2dwTzF4dUlDQWdJR052Ym5OMElIUnlZVzV6Wm05eWJVOXlhV2RwYmxrZ1BTQXdPMXh1SUNBZ0lHTnZibk4wSUhSeVlXNXpabTl5YlU5eWFXZHBibGdnUFNBd08xeHVYRzRnSUNBZ1lXUmhjSFJsY2k1dmNtbG5hVzRnUFNCN1hHNGdJQ0FnSUNBZ0lIZzZJR0pDYjNndWQybGtkR2dnS2lBb2RISmhibk5tYjNKdFQzSnBaMmx1V0NBdklERXdNQ2tnS3lCaVFtOTRMbmdzWEc0Z0lDQWdJQ0FnSUhrNklHSkNiM2d1YUdWcFoyaDBJQ29nS0hSeVlXNXpabTl5YlU5eWFXZHBibGtnTHlBeE1EQXBJQ3NnWWtKdmVDNTVYRzRnSUNBZ2ZUdGNibHh1SUNBZ0lISmxkSFZ5YmlCaFpHRndkR1Z5TzF4dWZUdGNibHh1SWwxOVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvYWRhcHRlci9zdmctYWRhcHRlci5qc1xuICoqIG1vZHVsZSBpZCA9IDE1XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfYnVpbGQgPSByZXF1aXJlKCcuL3N2Zy1wYXRoL2J1aWxkJyk7XG5cbnZhciBfYnVpbGQyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfYnVpbGQpO1xuXG52YXIgX3N0YXRlTWFwID0gcmVxdWlyZSgnLi9zdmctcGF0aC9zdGF0ZS1tYXAnKTtcblxudmFyIF9zdGF0ZU1hcDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9zdGF0ZU1hcCk7XG5cbnZhciBfc3ZnQWRhcHRlciA9IHJlcXVpcmUoJy4vc3ZnLWFkYXB0ZXInKTtcblxudmFyIF9zdmdBZGFwdGVyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3N2Z0FkYXB0ZXIpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBzZXR0ZXIocHJvcHMpIHtcbiAgICB0aGlzLnN2Z1NldHRlcigoMCwgX2J1aWxkMi5kZWZhdWx0KShwcm9wcywgdGhpcy5wYXRoTGVuZ3RoKSk7XG59XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uIChlbGVtZW50KSB7XG4gICAgdmFyIGFkYXB0ZXIgPSAoMCwgX3N2Z0FkYXB0ZXIyLmRlZmF1bHQpKGVsZW1lbnQpO1xuXG4gICAgYWRhcHRlci5zdGF0ZU1hcCA9IF9zdGF0ZU1hcDIuZGVmYXVsdDtcbiAgICBhZGFwdGVyLnNldHRlciA9IHNldHRlcjtcbiAgICBhZGFwdGVyLnN2Z1NldHRlciA9IF9zdmdBZGFwdGVyLnNldHRlcjtcblxuICAgIGFkYXB0ZXIucGF0aExlbmd0aCA9IGVsZW1lbnQuZ2V0VG90YWxMZW5ndGgoKTtcblxuICAgIHJldHVybiBhZGFwdGVyO1xufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbk55WXk5aFpHRndkR1Z5TDNOMlp5MXdZWFJvTFdGa1lYQjBaWEl1YW5NaVhTd2libUZ0WlhNaU9sdGRMQ0p0WVhCd2FXNW5jeUk2SWpzN096czdPenM3T3pzN096czdPenM3TzBGQlNVRXNVMEZCVXl4TlFVRlVMRU5CUVdkQ0xFdEJRV2hDTEVWQlFYVkNPMEZCUTI1Q0xGTkJRVXNzVTBGQlRDeERRVUZsTEhGQ1FVRk5MRXRCUVU0c1JVRkJZU3hMUVVGTExGVkJRVXdzUTBGQk5VSXNSVUZFYlVJN1EwRkJka0k3TzJ0Q1FVbGxMRlZCUVVNc1QwRkJSQ3hGUVVGaE8wRkJRM2hDTEZGQlFVMHNWVUZCVlN3d1FrRkJWeXhQUVVGWUxFTkJRVllzUTBGRWEwSTdPMEZCUjNoQ0xGbEJRVkVzVVVGQlVpeHpRa0ZJZDBJN1FVRkplRUlzV1VGQlVTeE5RVUZTTEVkQlFXbENMRTFCUVdwQ0xFTkJTbmRDTzBGQlMzaENMRmxCUVZFc1UwRkJVaXh6UWtGTWQwSTdPMEZCVDNoQ0xGbEJRVkVzVlVGQlVpeEhRVUZ4UWl4UlFVRlJMR05CUVZJc1JVRkJja0lzUTBGUWQwSTdPMEZCVTNoQ0xGZEJRVThzVDBGQlVDeERRVlIzUWp0RFFVRmlJaXdpWm1sc1pTSTZJbk4yWnkxd1lYUm9MV0ZrWVhCMFpYSXVhbk1pTENKemIzVnlZMlZTYjI5MElqb2lMMVZ6WlhKekwwMWhkSFF2VTJsMFpYTXZjRzl3Ylc5MGFXOXVJaXdpYzI5MWNtTmxjME52Ym5SbGJuUWlPbHNpYVcxd2IzSjBJR0oxYVd4a0lHWnliMjBnSnk0dmMzWm5MWEJoZEdndlluVnBiR1FuTzF4dWFXMXdiM0owSUhOMFlYUmxUV0Z3SUdaeWIyMGdKeTR2YzNabkxYQmhkR2d2YzNSaGRHVXRiV0Z3Snp0Y2JtbHRjRzl5ZENCemRtZEJaR0Z3ZEdWeUxDQjdJSE5sZEhSbGNpQmhjeUJ6ZG1kVFpYUjBaWElnZlNCbWNtOXRJQ2N1TDNOMlp5MWhaR0Z3ZEdWeUp6dGNibHh1Wm5WdVkzUnBiMjRnYzJWMGRHVnlLSEJ5YjNCektTQjdYRzRnSUNBZ2RHaHBjeTV6ZG1kVFpYUjBaWElvWW5WcGJHUW9jSEp2Y0hNc0lIUm9hWE11Y0dGMGFFeGxibWQwYUNrcE8xeHVmVnh1WEc1bGVIQnZjblFnWkdWbVlYVnNkQ0FvWld4bGJXVnVkQ2tnUFQ0Z2UxeHVJQ0FnSUdOdmJuTjBJR0ZrWVhCMFpYSWdQU0J6ZG1kQlpHRndkR1Z5S0dWc1pXMWxiblFwTzF4dVhHNGdJQ0FnWVdSaGNIUmxjaTV6ZEdGMFpVMWhjQ0E5SUhOMFlYUmxUV0Z3TzF4dUlDQWdJR0ZrWVhCMFpYSXVjMlYwZEdWeUlEMGdjMlYwZEdWeU8xeHVJQ0FnSUdGa1lYQjBaWEl1YzNablUyVjBkR1Z5SUQwZ2MzWm5VMlYwZEdWeU8xeHVYRzRnSUNBZ1lXUmhjSFJsY2k1d1lYUm9UR1Z1WjNSb0lEMGdaV3hsYldWdWRDNW5aWFJVYjNSaGJFeGxibWQwYUNncE8xeHVYRzRnSUNBZ2NtVjBkWEp1SUdGa1lYQjBaWEk3WEc1OU8xeHVJbDE5XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9hZGFwdGVyL3N2Zy1wYXRoLWFkYXB0ZXIuanNcbiAqKiBtb2R1bGUgaWQgPSAxNlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX2NyZWF0ZUVhc2luZyA9IHJlcXVpcmUoJy4vY3JlYXRlLWVhc2luZycpO1xuXG52YXIgX2NyZWF0ZUVhc2luZzIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jcmVhdGVFYXNpbmcpO1xuXG52YXIgX2NyZWF0ZUJlemllciA9IHJlcXVpcmUoJy4vY3JlYXRlLWJlemllcicpO1xuXG52YXIgX2NyZWF0ZUJlemllcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jcmVhdGVCZXppZXIpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG4vLyBWYWx1ZXNcbi8qXG4gICAgRWFzaW5nIGZ1bmN0aW9uc1xuICAgIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICBcbiAgICBHZW5lcmF0ZXMgYW5kIHByb3ZpZGVzIGVhc2luZyBmdW5jdGlvbnMgYmFzZWQgb24gYmFzZUZ1bmN0aW9uIGRlZmluaXRpb25zXG4gICAgXG4gICAgQSBjYWxsIHRvIGVhc2luZ0Z1bmN0aW9uLmdldCgnZnVuY3Rpb25OYW1lJykgcmV0dXJucyBhIGZ1bmN0aW9uIHRoYXQgY2FuIGJlIHBhc3NlZDpcbiAgICAgICAgQHBhcmFtIFtudW1iZXJdOiBQcm9ncmVzcyAwLTFcbiAgICAgICAgQHBhcmFtIFtudW1iZXJdIChvcHRpb25hbCk6IEFtcCBtb2RpZmllciwgb25seSBhY2NlcHRlZCBpbiBzb21lIGVhc2luZyBmdW5jdGlvbnNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFuZCBpcyB1c2VkIHRvIGFkanVzdCBvdmVyYWxsIHN0cmVuZ3RoXG4gICAgICAgIEByZXR1cm4gW251bWJlcl06IEVhc2VkIHByb2dyZXNzXG4gICAgICAgIFxuICAgIFdlIGNhbiBnZW5lcmF0ZSBuZXcgZnVuY3Rpb25zIGJ5IHNlbmRpbmcgYW4gZWFzaW5nIGZ1bmN0aW9uIHRocm91Z2ggZWFzaW5nRnVuY3Rpb24uZXh0ZW5kKG5hbWUsIG1ldGhvZCkuXG4gICAgV2hpY2ggd2lsbCBtYWtlIG5hbWVJbiwgbmFtZU91dCBhbmQgbmFtZUluT3V0IGZ1bmN0aW9ucyBhdmFpbGFibGUgdG8gdXNlLlxuICAgICAgICBcbiAgICBFYXNpbmcgZnVuY3Rpb25zIGZyb20gUm9iZXJ0IFBlbm5lclxuICAgIGh0dHA6Ly93d3cucm9iZXJ0cGVubmVyLmNvbS9lYXNpbmcvXG4gICAgICAgIFxuICAgIEJlemllciBjdXJ2ZSBpbnRlcnByZXRvciBjcmVhdGVkIGZyb20gR2HDq3RhbiBSZW5hdWRlYXUncyBvcmlnaW5hbCBCZXppZXJFYXNpbmcgIFxuICAgIGh0dHBzOi8vZ2l0aHViLmNvbS9ncmUvYmV6aWVyLWVhc2luZy9ibG9iL21hc3Rlci9pbmRleC5qcyAgXG4gICAgaHR0cHM6Ly9naXRodWIuY29tL2dyZS9iZXppZXItZWFzaW5nL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcblxuICAgIEFudGljaXBhdGUgZWFzaW5nIGNyZWF0ZWQgYnkgRWxsaW90IEdpbm9cbiAgICBodHRwczovL3R3aXR0ZXIuY29tL0VsbGlvdEdlbm9cbiovXG4vLyBJbXBvcnRzXG52YXIgREVGQVVMVF9CQUNLX1NUUkVOR1RIID0gMS41MjU7XG52YXIgREVGQVVMVF9QT1dfU1RSRU5HVEggPSAyO1xuXG4vKlxuICAgIEVhY2ggb2YgdGhlc2UgYmFzZSBmdW5jdGlvbnMgaXMgYW4gZWFzZUluXG4gICAgXG4gICAgT24gaW5pdCwgd2UgdXNlIC5taXJyb3IgYW5kIC5yZXZlcnNlIHRvIGdlbmVyYXRlIGVhc2VJbk91dCBhbmRcbiAgICBlYXNlT3V0IGZ1bmN0aW9ucyByZXNwZWN0aXZlbHkuXG4qL1xudmFyIGJhc2VFYXNpbmcgPSB7XG4gICAgZWFzZTogZnVuY3Rpb24gKHByb2dyZXNzKSB7XG4gICAgICAgIHZhciBzdHJlbmd0aCA9IGFyZ3VtZW50cy5sZW5ndGggPD0gMSB8fCBhcmd1bWVudHNbMV0gPT09IHVuZGVmaW5lZCA/IERFRkFVTFRfUE9XX1NUUkVOR1RIIDogYXJndW1lbnRzWzFdO1xuICAgICAgICByZXR1cm4gTWF0aC5wb3cocHJvZ3Jlc3MsIHN0cmVuZ3RoKTtcbiAgICB9LFxuICAgIGNpcmM6IGZ1bmN0aW9uIChwcm9ncmVzcykge1xuICAgICAgICByZXR1cm4gMSAtIE1hdGguc2luKE1hdGguYWNvcyhwcm9ncmVzcykpO1xuICAgIH0sXG4gICAgYmFjazogZnVuY3Rpb24gKHByb2dyZXNzKSB7XG4gICAgICAgIHZhciBzdHJlbmd0aCA9IGFyZ3VtZW50cy5sZW5ndGggPD0gMSB8fCBhcmd1bWVudHNbMV0gPT09IHVuZGVmaW5lZCA/IERFRkFVTFRfQkFDS19TVFJFTkdUSCA6IGFyZ3VtZW50c1sxXTtcbiAgICAgICAgcmV0dXJuIHByb2dyZXNzICogcHJvZ3Jlc3MgKiAoKHN0cmVuZ3RoICsgMSkgKiBwcm9ncmVzcyAtIHN0cmVuZ3RoKTtcbiAgICB9XG59O1xuXG4vLyBVdGlsaXR5IGZ1bmN0aW9uc1xudmFyIGdlbmVyYXRlUG93ZXJFYXNpbmcgPSBmdW5jdGlvbiAoc3RyZW5ndGgpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gKHByb2dyZXNzKSB7XG4gICAgICAgIHJldHVybiBiYXNlRWFzaW5nLmVhc2UocHJvZ3Jlc3MsIHN0cmVuZ3RoKTtcbiAgICB9O1xufTtcblxuWydjdWJpYycsICdxdWFydCcsICdxdWludCddLmZvckVhY2goZnVuY3Rpb24gKGVhc2luZ05hbWUsIGkpIHtcbiAgICByZXR1cm4gYmFzZUVhc2luZ1tlYXNpbmdOYW1lXSA9IGdlbmVyYXRlUG93ZXJFYXNpbmcoaSArIDMpO1xufSk7XG5cbi8vIEdlbmVyYXRlIGluL291dC9pbk91dCB2YXJpYXRpb25zXG5mb3IgKHZhciBrZXkgaW4gYmFzZUVhc2luZykge1xuICAgIGlmIChiYXNlRWFzaW5nLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgdmFyIGVhc2luZ0Z1bmN0aW9uID0gKDAsIF9jcmVhdGVFYXNpbmcyLmRlZmF1bHQpKGJhc2VFYXNpbmdba2V5XSk7XG4gICAgICAgIGJhc2VFYXNpbmdba2V5ICsgJ0luJ10gPSBlYXNpbmdGdW5jdGlvbi5pbjtcbiAgICAgICAgYmFzZUVhc2luZ1trZXkgKyAnT3V0J10gPSBlYXNpbmdGdW5jdGlvbi5vdXQ7XG4gICAgICAgIGJhc2VFYXNpbmdba2V5ICsgJ0luT3V0J10gPSBlYXNpbmdGdW5jdGlvbi5pbk91dDtcbiAgICB9XG59XG5cbmJhc2VFYXNpbmcubGluZWFyID0gZnVuY3Rpb24gKHByb2dyZXNzKSB7XG4gICAgcmV0dXJuIHByb2dyZXNzO1xufTtcbmJhc2VFYXNpbmcuYW50aWNpcGF0ZSA9IGZ1bmN0aW9uIChwcm9ncmVzcykge1xuICAgIHZhciBzdHJlbmd0aCA9IGFyZ3VtZW50cy5sZW5ndGggPD0gMSB8fCBhcmd1bWVudHNbMV0gPT09IHVuZGVmaW5lZCA/IERFRkFVTFRfQkFDS19TVFJFTkdUSCA6IGFyZ3VtZW50c1sxXTtcbiAgICByZXR1cm4gKHByb2dyZXNzICo9IDIpIDwgMSA/IDAuNSAqIGJhc2VFYXNpbmcuYmFja0luKHByb2dyZXNzLCBzdHJlbmd0aCkgOiAwLjUgKiAoMiAtIE1hdGgucG93KDIsIC0xMCAqIChwcm9ncmVzcyAtIDEpKSk7XG59O1xuXG5iYXNlRWFzaW5nLmVhc2luZ0Z1bmN0aW9uID0gX2NyZWF0ZUVhc2luZzIuZGVmYXVsdDtcbmJhc2VFYXNpbmcuY3ViaWNCZXppZXIgPSBfY3JlYXRlQmV6aWVyMi5kZWZhdWx0O1xuYmFzZUVhc2luZy5tb2RpZnlFYXNlID0gZnVuY3Rpb24gKGVhc2luZykge1xuICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gQXJyYXkoX2xlbiA+IDEgPyBfbGVuIC0gMSA6IDApLCBfa2V5ID0gMTsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgICBhcmdzW19rZXkgLSAxXSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICB9XG5cbiAgICByZXR1cm4gZnVuY3Rpb24gKHByb2dyZXNzKSB7XG4gICAgICAgIHJldHVybiBlYXNpbmcuYXBwbHkodW5kZWZpbmVkLCBbcHJvZ3Jlc3NdLmNvbmNhdChhcmdzKSk7XG4gICAgfTtcbn07XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGJhc2VFYXNpbmc7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5OeVl5OWhZM1JwYjI1ekwyVmhjMmx1Wnk5d2NtVnpaWFF0WldGemFXNW5MbXB6SWwwc0ltNWhiV1Z6SWpwYlhTd2liV0Z3Y0dsdVozTWlPaUk3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN08wRkJPRUpCTEVsQlFVMHNkMEpCUVhkQ0xFdEJRWGhDTzBGQlEwNHNTVUZCVFN4MVFrRkJkVUlzUTBGQmRrSTdPenM3T3pzN08wRkJVVTRzU1VGQlRTeGhRVUZoTzBGQlEyWXNWVUZCVFN4VlFVRkRMRkZCUVVRN1dVRkJWeXhwUlVGQlZ6dDNRa0ZCZVVJc1ZVRkJXVHRMUVVFelJEdEJRVU5PTEZWQlFVMDdaVUZCV1N4SlFVRkpMRXRCUVVzc1IwRkJUQ3hEUVVGVExFdEJRVXNzU1VGQlRDeERRVUZWTEZGQlFWWXNRMEZCVkN4RFFVRktPMHRCUVZvN1FVRkRUaXhWUVVGTkxGVkJRVU1zVVVGQlJEdFpRVUZYTEdsRlFVRlhPMlZCUVRCQ0xGRkJRVU1zUjBGQlZ5eFJRVUZZTEVsQlFYZENMRU5CUVVNc1YwRkJWeXhEUVVGWUxFTkJRVVFzUjBGQmFVSXNVVUZCYWtJc1IwRkJORUlzVVVGQk5VSXNRMEZCZWtJN1MwRkJhRVE3UTBGSVNqczdPMEZCVDA0c1NVRkJUU3h6UWtGQmMwSXNWVUZCUXl4UlFVRkVPMWRCUVdNc1ZVRkJReXhSUVVGRU8yVkJRV01zVjBGQlZ5eEpRVUZZTEVOQlFXZENMRkZCUVdoQ0xFVkJRVEJDTEZGQlFURkNPMHRCUVdRN1EwRkJaRHM3UVVGRk5VSXNRMEZCUXl4UFFVRkVMRVZCUVZVc1QwRkJWaXhGUVVGdFFpeFBRVUZ1UWl4RlFVRTBRaXhQUVVFMVFpeERRVUZ2UXl4VlFVRkRMRlZCUVVRc1JVRkJZU3hEUVVGaU8xZEJRVzFDTEZkQlFWY3NWVUZCV0N4SlFVRjVRaXh2UWtGQmIwSXNTVUZCU1N4RFFVRktMRU5CUVRkRE8wTkJRVzVDTEVOQlFYQkRPenM3UVVGSFFTeExRVUZMTEVsQlFVa3NSMEZCU2l4SlFVRlhMRlZCUVdoQ0xFVkJRVFJDTzBGQlEzaENMRkZCUVVrc1YwRkJWeXhqUVVGWUxFTkJRVEJDTEVkQlFURkNMRU5CUVVvc1JVRkJiME03UVVGRGFFTXNXVUZCVFN4cFFrRkJhVUlzTkVKQlFYRkNMRmRCUVZjc1IwRkJXQ3hEUVVGeVFpeERRVUZxUWl4RFFVUXdRanRCUVVWb1F5eHRRa0ZCWXl4VlFVRmtMRWxCUVhsQ0xHVkJRV1VzUlVGQlppeERRVVpQTzBGQlIyaERMRzFDUVVGakxGZEJRV1FzU1VGQk1FSXNaVUZCWlN4SFFVRm1MRU5CU0UwN1FVRkphRU1zYlVKQlFXTXNZVUZCWkN4SlFVRTBRaXhsUVVGbExFdEJRV1lzUTBGS1NUdExRVUZ3UXp0RFFVUktPenRCUVZOQkxGZEJRVmNzVFVGQldDeEhRVUZ2UWp0WFFVRlpPME5CUVZvN1FVRkRjRUlzVjBGQlZ5eFZRVUZZTEVkQlFYZENMRlZCUVVNc1VVRkJSRHRSUVVGWExHbEZRVUZYTzFkQlF6RkRMRU5CUVVVc1dVRkJWU3hEUVVGV0xFTkJRVVFzUjBGQlowSXNRMEZCYUVJc1IwRkJjVUlzVFVGQlRTeFhRVUZYTEUxQlFWZ3NRMEZCYTBJc1VVRkJiRUlzUlVGQk5FSXNVVUZCTlVJc1EwRkJUaXhIUVVFclF5eFBRVUZQTEVsQlFVa3NTMEZCU3l4SFFVRk1MRU5CUVZNc1EwRkJWQ3hGUVVGWkxFTkJRVU1zUlVGQlJDeEpRVUZQTEZkQlFWY3NRMEZCV0N4RFFVRlFMRU5CUVdoQ0xFTkJRVkE3UTBGRWFrUTdPMEZCUjNoQ0xGZEJRVmNzWTBGQldEdEJRVU5CTEZkQlFWY3NWMEZCV0R0QlFVTkJMRmRCUVZjc1ZVRkJXQ3hIUVVGM1FpeFZRVUZETEUxQlFVUTdjME5CUVZrN096czdWMEZCVXl4VlFVRkRMRkZCUVVRN1pVRkJZeXg1UWtGQlR5eHBRa0ZCWVN4TFFVRndRanRMUVVGa08wTkJRWEpDT3p0clFrRkZWQ0lzSW1acGJHVWlPaUp3Y21WelpYUXRaV0Z6YVc1bkxtcHpJaXdpYzI5MWNtTmxVbTl2ZENJNklpOVZjMlZ5Y3k5TllYUjBMMU5wZEdWekwzQnZjRzF2ZEdsdmJpSXNJbk52ZFhKalpYTkRiMjUwWlc1MElqcGJJaThxWEc0Z0lDQWdSV0Z6YVc1bklHWjFibU4wYVc5dWMxeHVJQ0FnSUMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMWNiaUFnSUNCY2JpQWdJQ0JIWlc1bGNtRjBaWE1nWVc1a0lIQnliM1pwWkdWeklHVmhjMmx1WnlCbWRXNWpkR2x2Ym5NZ1ltRnpaV1FnYjI0Z1ltRnpaVVoxYm1OMGFXOXVJR1JsWm1sdWFYUnBiMjV6WEc0Z0lDQWdYRzRnSUNBZ1FTQmpZV3hzSUhSdklHVmhjMmx1WjBaMWJtTjBhVzl1TG1kbGRDZ25ablZ1WTNScGIyNU9ZVzFsSnlrZ2NtVjBkWEp1Y3lCaElHWjFibU4wYVc5dUlIUm9ZWFFnWTJGdUlHSmxJSEJoYzNObFpEcGNiaUFnSUNBZ0lDQWdRSEJoY21GdElGdHVkVzFpWlhKZE9pQlFjbTluY21WemN5QXdMVEZjYmlBZ0lDQWdJQ0FnUUhCaGNtRnRJRnR1ZFcxaVpYSmRJQ2h2Y0hScGIyNWhiQ2s2SUVGdGNDQnRiMlJwWm1sbGNpd2diMjVzZVNCaFkyTmxjSFJsWkNCcGJpQnpiMjFsSUdWaGMybHVaeUJtZFc1amRHbHZibk5jYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUdGdVpDQnBjeUIxYzJWa0lIUnZJR0ZrYW5WemRDQnZkbVZ5WVd4c0lITjBjbVZ1WjNSb1hHNGdJQ0FnSUNBZ0lFQnlaWFIxY200Z1cyNTFiV0psY2wwNklFVmhjMlZrSUhCeWIyZHlaWE56WEc0Z0lDQWdJQ0FnSUZ4dUlDQWdJRmRsSUdOaGJpQm5aVzVsY21GMFpTQnVaWGNnWm5WdVkzUnBiMjV6SUdKNUlITmxibVJwYm1jZ1lXNGdaV0Z6YVc1bklHWjFibU4wYVc5dUlIUm9jbTkxWjJnZ1pXRnphVzVuUm5WdVkzUnBiMjR1WlhoMFpXNWtLRzVoYldVc0lHMWxkR2h2WkNrdVhHNGdJQ0FnVjJocFkyZ2dkMmxzYkNCdFlXdGxJRzVoYldWSmJpd2dibUZ0WlU5MWRDQmhibVFnYm1GdFpVbHVUM1YwSUdaMWJtTjBhVzl1Y3lCaGRtRnBiR0ZpYkdVZ2RHOGdkWE5sTGx4dUlDQWdJQ0FnSUNCY2JpQWdJQ0JGWVhOcGJtY2dablZ1WTNScGIyNXpJR1p5YjIwZ1VtOWlaWEowSUZCbGJtNWxjbHh1SUNBZ0lHaDBkSEE2THk5M2QzY3VjbTlpWlhKMGNHVnVibVZ5TG1OdmJTOWxZWE5wYm1jdlhHNGdJQ0FnSUNBZ0lGeHVJQ0FnSUVKbGVtbGxjaUJqZFhKMlpTQnBiblJsY25CeVpYUnZjaUJqY21WaGRHVmtJR1p5YjIwZ1IySERxM1JoYmlCU1pXNWhkV1JsWVhVbmN5QnZjbWxuYVc1aGJDQkNaWHBwWlhKRllYTnBibWNnSUZ4dUlDQWdJR2gwZEhCek9pOHZaMmwwYUhWaUxtTnZiUzluY21VdlltVjZhV1Z5TFdWaGMybHVaeTlpYkc5aUwyMWhjM1JsY2k5cGJtUmxlQzVxY3lBZ1hHNGdJQ0FnYUhSMGNITTZMeTluYVhSb2RXSXVZMjl0TDJkeVpTOWlaWHBwWlhJdFpXRnphVzVuTDJKc2IySXZiV0Z6ZEdWeUwweEpRMFZPVTBWY2JseHVJQ0FnSUVGdWRHbGphWEJoZEdVZ1pXRnphVzVuSUdOeVpXRjBaV1FnWW5rZ1JXeHNhVzkwSUVkcGJtOWNiaUFnSUNCb2RIUndjem92TDNSM2FYUjBaWEl1WTI5dEwwVnNiR2x2ZEVkbGJtOWNiaW92WEc0dkx5QkpiWEJ2Y25SelhHNXBiWEJ2Y25RZ1kzSmxZWFJsUldGemFXNW5SblZ1WTNScGIyNGdabkp2YlNBbkxpOWpjbVZoZEdVdFpXRnphVzVuSnp0Y2JtbHRjRzl5ZENCamRXSnBZMEpsZW1sbGNpQm1jbTl0SUNjdUwyTnlaV0YwWlMxaVpYcHBaWEluTzF4dVhHNHZMeUJXWVd4MVpYTmNibU52Ym5OMElFUkZSa0ZWVEZSZlFrRkRTMTlUVkZKRlRrZFVTQ0E5SURFdU5USTFPMXh1WTI5dWMzUWdSRVZHUVZWTVZGOVFUMWRmVTFSU1JVNUhWRWdnUFNBeU8xeHVYRzR2S2x4dUlDQWdJRVZoWTJnZ2IyWWdkR2hsYzJVZ1ltRnpaU0JtZFc1amRHbHZibk1nYVhNZ1lXNGdaV0Z6WlVsdVhHNGdJQ0FnWEc0Z0lDQWdUMjRnYVc1cGRDd2dkMlVnZFhObElDNXRhWEp5YjNJZ1lXNWtJQzV5WlhabGNuTmxJSFJ2SUdkbGJtVnlZWFJsSUdWaGMyVkpiazkxZENCaGJtUmNiaUFnSUNCbFlYTmxUM1YwSUdaMWJtTjBhVzl1Y3lCeVpYTndaV04wYVhabGJIa3VYRzRxTDF4dVkyOXVjM1FnWW1GelpVVmhjMmx1WnlBOUlIdGNiaUFnSUNCbFlYTmxPaUFvY0hKdlozSmxjM01zSUhOMGNtVnVaM1JvSUQwZ1JFVkdRVlZNVkY5UVQxZGZVMVJTUlU1SFZFZ3BJRDArSUhCeWIyZHlaWE56SUNvcUlITjBjbVZ1WjNSb0xGeHVJQ0FnSUdOcGNtTTZJSEJ5YjJkeVpYTnpJRDArSURFZ0xTQk5ZWFJvTG5OcGJpaE5ZWFJvTG1GamIzTW9jSEp2WjNKbGMzTXBLU3hjYmlBZ0lDQmlZV05yT2lBb2NISnZaM0psYzNNc0lITjBjbVZ1WjNSb0lEMGdSRVZHUVZWTVZGOUNRVU5MWDFOVVVrVk9SMVJJS1NBOVBpQW9jSEp2WjNKbGMzTWdLaUJ3Y205bmNtVnpjeWtnS2lBb0tITjBjbVZ1WjNSb0lDc2dNU2tnS2lCd2NtOW5jbVZ6Y3lBdElITjBjbVZ1WjNSb0tWeHVmVHRjYmx4dUx5OGdWWFJwYkdsMGVTQm1kVzVqZEdsdmJuTmNibU52Ym5OMElHZGxibVZ5WVhSbFVHOTNaWEpGWVhOcGJtY2dQU0FvYzNSeVpXNW5kR2dwSUQwK0lDaHdjbTluY21WemN5a2dQVDRnWW1GelpVVmhjMmx1Wnk1bFlYTmxLSEJ5YjJkeVpYTnpMQ0J6ZEhKbGJtZDBhQ2s3WEc1Y2Jsc25ZM1ZpYVdNbkxDQW5jWFZoY25RbkxDQW5jWFZwYm5RblhTNW1iM0pGWVdOb0tDaGxZWE5wYm1kT1lXMWxMQ0JwS1NBOVBpQmlZWE5sUldGemFXNW5XMlZoYzJsdVowNWhiV1ZkSUQwZ1oyVnVaWEpoZEdWUWIzZGxja1ZoYzJsdVp5aHBJQ3NnTXlrcE8xeHVYRzR2THlCSFpXNWxjbUYwWlNCcGJpOXZkWFF2YVc1UGRYUWdkbUZ5YVdGMGFXOXVjMXh1Wm05eUlDaHNaWFFnYTJWNUlHbHVJR0poYzJWRllYTnBibWNwSUh0Y2JpQWdJQ0JwWmlBb1ltRnpaVVZoYzJsdVp5NW9ZWE5QZDI1UWNtOXdaWEowZVNoclpYa3BLU0I3WEc0Z0lDQWdJQ0FnSUdOdmJuTjBJR1ZoYzJsdVowWjFibU4wYVc5dUlEMGdZM0psWVhSbFJXRnphVzVuUm5WdVkzUnBiMjRvWW1GelpVVmhjMmx1WjF0clpYbGRLVHRjYmlBZ0lDQWdJQ0FnWW1GelpVVmhjMmx1WjF0Z0pIdHJaWGw5U1c1Z1hTQTlJR1ZoYzJsdVowWjFibU4wYVc5dUxtbHVPMXh1SUNBZ0lDQWdJQ0JpWVhObFJXRnphVzVuVzJBa2UydGxlWDFQZFhSZ1hTQTlJR1ZoYzJsdVowWjFibU4wYVc5dUxtOTFkRHRjYmlBZ0lDQWdJQ0FnWW1GelpVVmhjMmx1WjF0Z0pIdHJaWGw5U1c1UGRYUmdYU0E5SUdWaGMybHVaMFoxYm1OMGFXOXVMbWx1VDNWME8xeHVJQ0FnSUgxY2JuMWNibHh1WW1GelpVVmhjMmx1Wnk1c2FXNWxZWElnUFNCd2NtOW5jbVZ6Y3lBOVBpQndjbTluY21WemN6dGNibUpoYzJWRllYTnBibWN1WVc1MGFXTnBjR0YwWlNBOUlDaHdjbTluY21WemN5d2djM1J5Wlc1bmRHZ2dQU0JFUlVaQlZVeFVYMEpCUTB0ZlUxUlNSVTVIVkVncElEMCtYRzRnSUNBZ0tDaHdjbTluY21WemN5bzlNaWtnUENBeEtTQS9JREF1TlNBcUlHSmhjMlZGWVhOcGJtY3VZbUZqYTBsdUtIQnliMmR5WlhOekxDQnpkSEpsYm1kMGFDa2dPaUFnTUM0MUlDb2dLRElnTFNCTllYUm9MbkJ2ZHlneUxDQXRNVEFnS2lBb2NISnZaM0psYzNNZ0xTQXhLU2twTzF4dVhHNWlZWE5sUldGemFXNW5MbVZoYzJsdVowWjFibU4wYVc5dUlEMGdZM0psWVhSbFJXRnphVzVuUm5WdVkzUnBiMjQ3WEc1aVlYTmxSV0Z6YVc1bkxtTjFZbWxqUW1WNmFXVnlJRDBnWTNWaWFXTkNaWHBwWlhJN1hHNWlZWE5sUldGemFXNW5MbTF2WkdsbWVVVmhjMlVnUFNBb1pXRnphVzVuTENBdUxpNWhjbWR6S1NBOVBpQW9jSEp2WjNKbGMzTXBJRDArSUdWaGMybHVaeWh3Y205bmNtVnpjeXdnTGk0dVlYSm5jeWs3WEc1Y2JtVjRjRzl5ZENCa1pXWmhkV3gwSUdKaGMyVkZZWE5wYm1jN0lsMTlcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2FjdGlvbnMvZWFzaW5nL3ByZXNldC1lYXNpbmcuanNcbiAqKiBtb2R1bGUgaWQgPSAxN1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0cy5zdGVwUHJvZ3Jlc3MgPSBleHBvcnRzLnNwZWVkUGVyU2Vjb25kID0gZXhwb3J0cy5zcGVlZFBlckZyYW1lID0gZXhwb3J0cy5zbW9vdGggPSBleHBvcnRzLnJlc3RyaWN0ID0gZXhwb3J0cy5yZWxhdGl2ZVZhbHVlID0gZXhwb3J0cy5yYW5kb20gPSBleHBvcnRzLnJhZGlhbnNUb0RlZ3JlZXMgPSBleHBvcnRzLnBvaW50RnJvbUFuZ2xlQW5kRGlzdGFuY2UgPSBleHBvcnRzLm9mZnNldCA9IGV4cG9ydHMuZ2V0UHJvZ3Jlc3NGcm9tVmFsdWUgPSBleHBvcnRzLmdldFZhbHVlRnJvbVByb2dyZXNzID0gZXhwb3J0cy5oeXBvdGVudXNlID0gZXhwb3J0cy5kaXN0YW5jZSA9IGV4cG9ydHMuZGlsYXRlID0gZXhwb3J0cy5kZWdyZWVzVG9SYWRpYW5zID0gZXhwb3J0cy5hbmdsZSA9IHVuZGVmaW5lZDtcblxudmFyIF91dGlscyA9IHJlcXVpcmUoJy4vdXRpbHMnKTtcblxudmFyIFpFUk9fUE9JTlQgPSB7XG4gICAgeDogMCxcbiAgICB5OiAwLFxuICAgIHo6IDBcbn07XG5cbnZhciBkaXN0YW5jZTFEID0gZnVuY3Rpb24gKGEsIGIpIHtcbiAgICByZXR1cm4gTWF0aC5hYnMoYSAtIGIpO1xufTtcblxuLypcbiAgICBBbmdsZSBiZXR3ZWVuIHBvaW50c1xuICAgIFxuICAgIFRyYW5zbGF0ZXMgdGhlIGh5cG90aGV0aWNhbCBsaW5lIHNvIHRoYXQgdGhlICdmcm9tJyBjb29yZGluYXRlc1xuICAgIGFyZSBhdCAwLDAsIHRoZW4gcmV0dXJuIHRoZSBhbmdsZSB1c2luZyAuYW5nbGVGcm9tQ2VudGVyKClcbiAgICBcbiAgICBAcGFyYW0gW29iamVjdF06IFggYW5kIFkgY29vcmRpbmF0ZXMgb2YgZnJvbSBwb2ludFxuICAgIEBwYXJhbSBbb2JqZWN0XTogWCBhbmQgWSBjb3JkaW5hdGVzIG9mIHRvIHBvaW50XG4gICAgQHJldHVybiBbcmFkaWFuXTogQW5nbGUgYmV0d2VlbiB0aGUgdHdvIHBvaW50cyBpbiByYWRpYW5zXG4qL1xudmFyIGFuZ2xlID0gZXhwb3J0cy5hbmdsZSA9IGZ1bmN0aW9uIChhKSB7XG4gICAgdmFyIGIgPSBhcmd1bWVudHMubGVuZ3RoIDw9IDEgfHwgYXJndW1lbnRzWzFdID09PSB1bmRlZmluZWQgPyBaRVJPX1BPSU5UIDogYXJndW1lbnRzWzFdO1xuICAgIHJldHVybiByYWRpYW5zVG9EZWdyZWVzKE1hdGguYXRhbjIoYS54IC0gYi54LCBhLnkgLSBiLnkpKTtcbn07XG5cbi8qXG4gICAgQ29udmVydCBkZWdyZWVzIHRvIHJhZGlhbnNcbiAgICBcbiAgICBAcGFyYW0gW251bWJlcl06IFZhbHVlIGluIGRlZ3JlZXNcbiAgICBAcmV0dXJuIFtudW1iZXJdOiBWYWx1ZSBpbiByYWRpYW5zXG4qL1xudmFyIGRlZ3JlZXNUb1JhZGlhbnMgPSBleHBvcnRzLmRlZ3JlZXNUb1JhZGlhbnMgPSBmdW5jdGlvbiAoZGVncmVlcykge1xuICAgIHJldHVybiBkZWdyZWVzICogTWF0aC5QSSAvIDE4MDtcbn07XG5cbi8qXG4gICAgRGlsYXRlXG4gICAgXG4gICAgQ2hhbmdlIHRoZSBwcm9ncmVzc2lvbiBiZXR3ZWVuIGEgYW5kIGIgYWNjb3JkaW5nIHRvIGRpbGF0aW9uLlxuICAgIFxuICAgIFNvIGRpbGF0aW9uID0gMC41IHdvdWxkIGNoYW5nZVxuICAgIFxuICAgIGEgLS0tLS0tLS0tIGJcbiAgICBcbiAgICB0b1xuICAgIFxuICAgIGEgLS0tLSBiXG4gICAgXG4gICAgQHBhcmFtIFtudW1iZXJdOiBQcmV2aW91cyB2YWx1ZVxuICAgIEBwYXJhbSBbbnVtYmVyXTogQ3VycmVudCB2YWx1ZVxuICAgIEBwYXJhbSBbbnVtYmVyXTogRGlsYXRlIHByb2dyZXNzIGJ5IHhcbiAgICBAcmV0dXJuIFtudW1iZXJdOiBQcmV2aW91cyB2YWx1ZSBwbHVzIHRoZSBkaWxhdGVkIGRpZmZlcmVuY2VcbiovXG52YXIgZGlsYXRlID0gZXhwb3J0cy5kaWxhdGUgPSBmdW5jdGlvbiAoYSwgYiwgZGlsYXRpb24pIHtcbiAgICByZXR1cm4gYSArIChiIC0gYSkgKiBkaWxhdGlvbjtcbn07XG5cbi8qXG4gICAgRGlzdGFuY2VcbiAgICBcbiAgICBSZXR1cm5zIHRoZSBkaXN0YW5jZSBiZXR3ZWVuIHR3byBuIGRpbWVuc2lvbmFsIHBvaW50cy5cbiAgICBcbiAgICBAcGFyYW0gW29iamVjdC9udW1iZXJdOiB4IGFuZCB5IG9yIGp1c3QgeCBvZiBwb2ludCBBXG4gICAgQHBhcmFtIFtvYmplY3QvbnVtYmVyXTogKG9wdGlvbmFsKTogeCBhbmQgeSBvciBqdXN0IHggb2YgcG9pbnQgQlxuICAgIEByZXR1cm4gW251bWJlcl06IFRoZSBkaXN0YW5jZSBiZXR3ZWVuIHRoZSB0d28gcG9pbnRzXG4qL1xudmFyIGRpc3RhbmNlID0gZXhwb3J0cy5kaXN0YW5jZSA9IGZ1bmN0aW9uIChhKSB7XG4gICAgdmFyIGIgPSBhcmd1bWVudHMubGVuZ3RoIDw9IDEgfHwgYXJndW1lbnRzWzFdID09PSB1bmRlZmluZWQgPyBaRVJPX1BPSU5UIDogYXJndW1lbnRzWzFdO1xuXG4gICAgLy8gMUQgZGltZW5zaW9uc1xuICAgIGlmICgoMCwgX3V0aWxzLmlzTnVtKShhKSkge1xuICAgICAgICByZXR1cm4gZGlzdGFuY2UxRChhLCBiKTtcblxuICAgICAgICAvLyBNdWx0aS1kaW1lbnNpb25hbFxuICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB2YXIgeERlbHRhID0gZGlzdGFuY2UxRChhLngsIGIueCk7XG4gICAgICAgICAgICB2YXIgeURlbHRhID0gZGlzdGFuY2UxRChhLnksIGIueSk7XG4gICAgICAgICAgICB2YXIgekRlbHRhID0gKDAsIF91dGlscy5pc051bSkoYS56KSA/IGRpc3RhbmNlMUQoYS56LCBiLnopIDogMDtcblxuICAgICAgICAgICAgcmV0dXJuIE1hdGguc3FydChNYXRoLnBvdyh4RGVsdGEsIDIpICsgTWF0aC5wb3coeURlbHRhLCAyKSArIE1hdGgucG93KHpEZWx0YSwgMikpO1xuICAgICAgICB9XG59O1xuXG4vKlxuICAgIEh5cG90ZW51c2VcbiAgICBcbiAgICBSZXR1cm5zIHRoZSBoeXBvdGVudXNlLCBzaWRlIEMsIGdpdmVuIHRoZSBsZW5ndGhzIG9mIHNpZGVzIEEgYW5kIEIuXG4gICAgXG4gICAgQHBhcmFtIFtudW1iZXJdOiBMZW5ndGggb2YgQVxuICAgIEBwYXJhbSBbbnVtYmVyXTogTGVuZ3RoIG9mIEJcbiAgICBAcmV0dXJuIFtudW1iZXJdOiBMZW5ndGggb2YgQ1xuKi9cbnZhciBoeXBvdGVudXNlID0gZXhwb3J0cy5oeXBvdGVudXNlID0gZnVuY3Rpb24gKGEsIGIpIHtcbiAgICByZXR1cm4gTWF0aC5zcXJ0KGEgKiBhICsgYiAqIGIpO1xufTtcblxuLypcbiAgICBWYWx1ZSBpbiByYW5nZSBmcm9tIHByb2dyZXNzXG4gICAgXG4gICAgR2l2ZW4gYSBsb3dlciBsaW1pdCBhbmQgYW4gdXBwZXIgbGltaXQsIHdlIHJldHVybiB0aGUgdmFsdWUgd2l0aGluXG4gICAgdGhhdCByYW5nZSBhcyBleHByZXNzZWQgYnkgcHJvZ3Jlc3MgKGEgbnVtYmVyIGZyb20gMC0xKVxuICAgIFxuICAgIEBwYXJhbSBbbnVtYmVyXTogVGhlIHByb2dyZXNzIGJldHdlZW4gbG93ZXIgYW5kIHVwcGVyIGxpbWl0cyBleHByZXNzZWQgMC0xXG4gICAgQHBhcmFtIFtudW1iZXJdOiBMb3dlciBsaW1pdCBvZiByYW5nZVxuICAgIEBwYXJhbSBbbnVtYmVyXTogVXBwZXIgbGltaXQgb2YgcmFuZ2VcbiAgICBAcmV0dXJuIFtudW1iZXJdOiBWYWx1ZSBhcyBjYWxjdWxhdGVkIGZyb20gcHJvZ3Jlc3Mgd2l0aGluIHJhbmdlIChub3QgbGltaXRlZCB3aXRoaW4gcmFuZ2UpXG4qL1xudmFyIGdldFZhbHVlRnJvbVByb2dyZXNzID0gZXhwb3J0cy5nZXRWYWx1ZUZyb21Qcm9ncmVzcyA9IGZ1bmN0aW9uIChwcm9ncmVzcywgZnJvbSwgdG8pIHtcbiAgICByZXR1cm4gLXByb2dyZXNzICogZnJvbSArIHByb2dyZXNzICogdG8gKyBmcm9tO1xufTtcblxuLypcbiAgICBQcm9ncmVzcyB3aXRoaW4gZ2l2ZW4gcmFuZ2VcbiAgICBcbiAgICBHaXZlbiBhIGxvd2VyIGxpbWl0IGFuZCBhbiB1cHBlciBsaW1pdCwgd2UgcmV0dXJuIHRoZSBwcm9ncmVzc1xuICAgIChleHByZXNzZWQgYXMgYSBudW1iZXIgMC0xKSByZXByZXNlbnRlZCBieSB0aGUgZ2l2ZW4gdmFsdWUsIGFuZFxuICAgIGxpbWl0IHRoYXQgcHJvZ3Jlc3MgdG8gd2l0aGluIDAtMS5cbiAgICBcbiAgICBAcGFyYW0gW251bWJlcl06IFZhbHVlIHRvIGZpbmQgcHJvZ3Jlc3Mgd2l0aGluIGdpdmVuIHJhbmdlXG4gICAgQHBhcmFtIFtudW1iZXJdOiBMb3dlciBsaW1pdCBcbiAgICBAcGFyYW0gW251bWJlcl06IFVwcGVyIGxpbWl0XG4gICAgQHJldHVybiBbbnVtYmVyXTogUHJvZ3Jlc3Mgb2YgdmFsdWUgd2l0aGluIHJhbmdlIGFzIGV4cHJlc3NlZCAwLTFcbiovXG52YXIgZ2V0UHJvZ3Jlc3NGcm9tVmFsdWUgPSBleHBvcnRzLmdldFByb2dyZXNzRnJvbVZhbHVlID0gZnVuY3Rpb24gKHZhbHVlLCBmcm9tLCB0bykge1xuICAgIHJldHVybiAodmFsdWUgLSBmcm9tKSAvICh0byAtIGZyb20pO1xufTtcblxuLypcbiAgICBPZmZzZXQgYmV0d2VlbiB0d28gb2JqZWN0cyBvZiBudW1iZXJzXG5cbiAgICBJZiBwcm9wZXJ0eSBpcyBmb3VuZCBpbiBiIG5vdCBwcmVzZW50IGluIGEsIGl0IHdpbGwgcmV0dXJuIGAwYCBmb3IgdGhhdCBwcm9wLlxuICAgIFxuICAgIEBwYXJhbSBbUG9pbnRdOiBGaXJzdCBvYmplY3RcbiAgICBAcGFyYW0gW1BvaW50XTogU2Vjb25kIG9iamVjdFxuICAgIEByZXR1cm4gW09mZnNldF06IERpc3RhbmNlIG1ldHJpY3MgYmV0d2VlbiB0d28gcG9pbnRzXG4qL1xudmFyIG9mZnNldCA9IGV4cG9ydHMub2Zmc2V0ID0gZnVuY3Rpb24gKGEsIGIpIHtcbiAgICB2YXIgb2Zmc2V0ID0ge307XG5cbiAgICBmb3IgKHZhciBrZXkgaW4gYikge1xuICAgICAgICBpZiAoYi5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgICBvZmZzZXRba2V5XSA9ICgwLCBfdXRpbHMuaGFzUHJvcGVydHkpKGEsIGtleSkgPyBiW2tleV0gLSBhW2tleV0gOiAwO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG9mZnNldDtcbn07XG5cbi8qXG4gICAgUG9pbnQgZnJvbSBhbmdsZSBhbmQgZGlzdGFuY2VcbiAgICBcbiAgICBAcGFyYW0gW29iamVjdF06IDJEIHBvaW50IG9mIG9yaWdpblxuICAgIEBwYXJhbSBbbnVtYmVyXTogQW5nbGUgZnJvbSBvcmlnaW5cbiAgICBAcGFyYW0gW251bWJlcl06IERpc3RhbmNlIGZyb20gb3JpZ2luXG4gICAgQHJldHVybiBbb2JqZWN0XTogQ2FsY3VsYXRlZCAyRCBwb2ludFxuKi9cbnZhciBwb2ludEZyb21BbmdsZUFuZERpc3RhbmNlID0gZXhwb3J0cy5wb2ludEZyb21BbmdsZUFuZERpc3RhbmNlID0gZnVuY3Rpb24gKG9yaWdpbiwgYW5nbGUsIGRpc3RhbmNlKSB7XG4gICAgYW5nbGUgPSBkZWdyZWVzVG9SYWRpYW5zKGFuZ2xlKTtcblxuICAgIHJldHVybiB7XG4gICAgICAgIHg6IGRpc3RhbmNlICogTWF0aC5jb3MoYW5nbGUpICsgb3JpZ2luLngsXG4gICAgICAgIHk6IGRpc3RhbmNlICogTWF0aC5zaW4oYW5nbGUpICsgb3JpZ2luLnlcbiAgICB9O1xufTtcblxuLypcbiAgICBDb252ZXJ0IHJhZGlhbnMgdG8gZGVncmVlc1xuICAgIFxuICAgIEBwYXJhbSBbbnVtYmVyXTogVmFsdWUgaW4gcmFkaWFuc1xuICAgIEByZXR1cm4gW251bWJlcl06IFZhbHVlIGluIGRlZ3JlZXNcbiovXG52YXIgcmFkaWFuc1RvRGVncmVlcyA9IGV4cG9ydHMucmFkaWFuc1RvRGVncmVlcyA9IGZ1bmN0aW9uIChyYWRpYW5zKSB7XG4gICAgcmV0dXJuIHJhZGlhbnMgKiAxODAgLyBNYXRoLlBJO1xufTtcblxuLypcbiAgICBSZXR1cm4gcmFuZG9tIG51bWJlciBiZXR3ZWVuIHJhbmdlXG4gICAgXG4gICAgQHBhcmFtIFtudW1iZXJdIChvcHRpb25hbCk6IE91dHB1dCBtaW5pbXVtXG4gICAgQHBhcmFtIFtudW1iZXJdIChvcHRpb25hbCk6IE91dHB1dCBtYXhpbXVtXG4gICAgQHJldHVybiBbbnVtYmVyXTogUmFuZG9tIG51bWJlciB3aXRoaW4gcmFuZ2UsIG9yIDAgYW5kIDEgaWYgbm9uZSBwcm92aWRlZFxuKi9cbnZhciByYW5kb20gPSBleHBvcnRzLnJhbmRvbSA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgbWluID0gYXJndW1lbnRzLmxlbmd0aCA8PSAwIHx8IGFyZ3VtZW50c1swXSA9PT0gdW5kZWZpbmVkID8gMCA6IGFyZ3VtZW50c1swXTtcbiAgICB2YXIgbWF4ID0gYXJndW1lbnRzLmxlbmd0aCA8PSAxIHx8IGFyZ3VtZW50c1sxXSA9PT0gdW5kZWZpbmVkID8gMSA6IGFyZ3VtZW50c1sxXTtcbiAgICByZXR1cm4gTWF0aC5yYW5kb20oKSAqIChtYXggLSBtaW4pICsgbWluO1xufTtcblxuLypcbiAgICBDYWxjdWxhdGUgcmVsYXRpdmUgdmFsdWVcbiAgICBcbiAgICBUYWtlcyB0aGUgb3BlcmF0b3IgYW5kIHZhbHVlIGZyb20gYSBzdHJpbmcsIGllIFwiKz01XCIsIGFuZCBhcHBsaWVzXG4gICAgdG8gdGhlIGN1cnJlbnQgdmFsdWUgdG8gcmVzb2x2ZSBhIG5ldyB0YXJnZXQuXG4gICAgXG4gICAgQHBhcmFtIFtudW1iZXJdOiBDdXJyZW50IHZhbHVlXG4gICAgQHBhcmFtIFtzdHJpbmddOiBSZWxhdGl2ZSB2YWx1ZVxuICAgIEByZXR1cm4gW251bWJlcl06IE5ldyB2YWx1ZVxuKi9cbnZhciByZWxhdGl2ZVZhbHVlID0gZXhwb3J0cy5yZWxhdGl2ZVZhbHVlID0gZnVuY3Rpb24gKGN1cnJlbnQsIHJlbGF0aXZlKSB7XG4gICAgdmFyIG5ld1ZhbHVlID0gY3VycmVudDtcbiAgICB2YXIgZXF1YXRpb24gPSByZWxhdGl2ZS5zcGxpdCgnPScpO1xuICAgIHZhciBvcGVyYXRvciA9IGVxdWF0aW9uWzBdO1xuXG4gICAgdmFyIF9zcGxpdFZhbHVlVW5pdCA9ICgwLCBfdXRpbHMuc3BsaXRWYWx1ZVVuaXQpKGVxdWF0aW9uWzFdKTtcblxuICAgIHZhciB1bml0ID0gX3NwbGl0VmFsdWVVbml0LnVuaXQ7XG4gICAgdmFyIHZhbHVlID0gX3NwbGl0VmFsdWVVbml0LnZhbHVlO1xuXG4gICAgdmFsdWUgPSBwYXJzZUZsb2F0KHZhbHVlKTtcblxuICAgIHN3aXRjaCAob3BlcmF0b3IpIHtcbiAgICAgICAgY2FzZSAnKyc6XG4gICAgICAgICAgICBuZXdWYWx1ZSArPSB2YWx1ZTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICctJzpcbiAgICAgICAgICAgIG5ld1ZhbHVlIC09IHZhbHVlO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJyonOlxuICAgICAgICAgICAgbmV3VmFsdWUgKj0gdmFsdWU7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnLyc6XG4gICAgICAgICAgICBuZXdWYWx1ZSAvPSB2YWx1ZTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIGlmICh1bml0KSB7XG4gICAgICAgIG5ld1ZhbHVlICs9IHVuaXQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIG5ld1ZhbHVlO1xufTtcblxuLypcbiAgICBSZXN0cmljdCB2YWx1ZSB0byByYW5nZVxuICAgIFxuICAgIFJldHVybiB2YWx1ZSB3aXRoaW4gdGhlIHJhbmdlIG9mIGxvd2VyTGltaXQgYW5kIHVwcGVyTGltaXRcbiAgICBcbiAgICBAcGFyYW0gW251bWJlcl06IFZhbHVlIHRvIGtlZXAgd2l0aGluIHJhbmdlXG4gICAgQHBhcmFtIFtudW1iZXJdOiBMb3dlciBsaW1pdCBvZiByYW5nZVxuICAgIEBwYXJhbSBbbnVtYmVyXTogVXBwZXIgbGltaXQgb2YgcmFuZ2VcbiAgICBAcmV0dXJuIFtudW1iZXJdOiBWYWx1ZSBhcyBsaW1pdGVkIHdpdGhpbiBnaXZlbiByYW5nZVxuKi9cbnZhciByZXN0cmljdCA9IGV4cG9ydHMucmVzdHJpY3QgPSBmdW5jdGlvbiAodmFsdWUsIG1pbiwgbWF4KSB7XG4gICAgcmV0dXJuIE1hdGgubWF4KE1hdGgubWluKHZhbHVlLCBtYXgpLCBtaW4pO1xufTtcblxuLypcbiAgICBGcmFtZXJhdGUtaW5kZXBlbmRlbnQgc21vb3RoaW5nXG5cbiAgICBAcGFyYW0gW251bWJlcl06IE5ldyB2YWx1ZVxuICAgIEBwYXJhbSBbbnVtYmVyXTogT2xkIHZhbHVlXG4gICAgQHBhcmFtIFtudW1iZXJdOiBGcmFtZSBkdXJhdGlvblxuICAgIEBwYXJhbSBbbnVtYmVyXSAob3B0aW9uYWwpOiBTbW9vdGhpbmcgKDAgaXMgbm9uZSlcbiovXG52YXIgc21vb3RoID0gZXhwb3J0cy5zbW9vdGggPSBmdW5jdGlvbiAobmV3VmFsdWUsIG9sZFZhbHVlLCBkdXJhdGlvbikge1xuICAgIHZhciBzbW9vdGhpbmcgPSBhcmd1bWVudHMubGVuZ3RoIDw9IDMgfHwgYXJndW1lbnRzWzNdID09PSB1bmRlZmluZWQgPyAwIDogYXJndW1lbnRzWzNdO1xuICAgIHJldHVybiAoMCwgX3V0aWxzLnRvRGVjaW1hbCkob2xkVmFsdWUgKyBkdXJhdGlvbiAqIChuZXdWYWx1ZSAtIG9sZFZhbHVlKSAvIE1hdGgubWF4KHNtb290aGluZywgZHVyYXRpb24pKTtcbn07XG5cbi8qXG4gICAgQ29udmVydCB4IHBlciBzZWNvbmQgdG8gcGVyIGZyYW1lIHZlbG9jaXR5IGJhc2VkIG9uIGZwc1xuICAgIFxuICAgIEBwYXJhbSBbbnVtYmVyXTogVW5pdCBwZXIgc2Vjb25kXG4gICAgQHBhcmFtIFtudW1iZXJdOiBGcmFtZSBkdXJhdGlvbiBpbiBtc1xuKi9cbnZhciBzcGVlZFBlckZyYW1lID0gZXhwb3J0cy5zcGVlZFBlckZyYW1lID0gZnVuY3Rpb24gKHhwcywgZnJhbWVEdXJhdGlvbikge1xuICAgIHJldHVybiAoMCwgX3V0aWxzLmlzTnVtKSh4cHMpID8geHBzIC8gKDEwMDAgLyBmcmFtZUR1cmF0aW9uKSA6IDA7XG59O1xuXG4vKlxuICAgIENvbnZlcnQgdmVsb2NpdHkgaW50byB2ZWxpY2l0eSBwZXIgc2Vjb25kXG4gICAgXG4gICAgQHBhcmFtIFtudW1iZXJdOiBVbml0IHBlciBmcmFtZVxuICAgIEBwYXJhbSBbbnVtYmVyXTogRnJhbWUgZHVyYXRpb24gaW4gbXNcbiovXG52YXIgc3BlZWRQZXJTZWNvbmQgPSBleHBvcnRzLnNwZWVkUGVyU2Vjb25kID0gZnVuY3Rpb24gKHZlbG9jaXR5LCBmcmFtZUR1cmF0aW9uKSB7XG4gICAgcmV0dXJuIHZlbG9jaXR5ICogKDEwMDAgLyBmcmFtZUR1cmF0aW9uKTtcbn07XG5cbi8qXG4gICAgQ3JlYXRlIHN0ZXBwZWQgdmVyc2lvbiBvZiAwLTEgcHJvZ3Jlc3NcbiAgICBcbiAgICBAcGFyYW0gW251bWJlcl06IEN1cnJlbnQgdmFsdWVcbiAgICBAcGFyYW0gW2ludF06IE51bWJlciBvZiBzdGVwc1xuICAgIEByZXR1cm4gW251bWJlcl06IFN0ZXBwZWQgdmFsdWVcbiovXG52YXIgc3RlcFByb2dyZXNzID0gZXhwb3J0cy5zdGVwUHJvZ3Jlc3MgPSBmdW5jdGlvbiAocHJvZ3Jlc3MsIHN0ZXBzKSB7XG4gICAgdmFyIHNlZ21lbnQgPSAxIC8gKHN0ZXBzIC0gMSk7XG4gICAgdmFyIHRhcmdldCA9IDEgLSAxIC8gc3RlcHM7XG4gICAgdmFyIHByb2dyZXNzT2ZUYXJnZXQgPSBNYXRoLm1pbihwcm9ncmVzcyAvIHRhcmdldCwgMSk7XG5cbiAgICByZXR1cm4gTWF0aC5mbG9vcihwcm9ncmVzc09mVGFyZ2V0IC8gc2VnbWVudCkgKiBzZWdtZW50O1xufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbk55WXk5cGJtTXZZMkZzWXk1cWN5SmRMQ0p1WVcxbGN5STZXMTBzSW0xaGNIQnBibWR6SWpvaU96czdPenM3TzBGQlQwRXNTVUZCVFN4aFFVRmhPMEZCUTJZc1QwRkJSeXhEUVVGSU8wRkJRMEVzVDBGQlJ5eERRVUZJTzBGQlEwRXNUMEZCUnl4RFFVRklPME5CU0VVN08wRkJUVTRzU1VGQlRTeGhRVUZoTEZWQlFVTXNRMEZCUkN4RlFVRkpMRU5CUVVvN1YwRkJWU3hMUVVGTExFZEJRVXdzUTBGQlV5eEpRVUZKTEVOQlFVbzdRMEZCYmtJN096czdPenM3T3pzN096dEJRVmxhTEVsQlFVMHNkMEpCUVZFc1ZVRkJReXhEUVVGRU8xRkJRVWtzTUVSQlFVazdWMEZCWlN4cFFrRkJhVUlzUzBGQlN5eExRVUZNTEVOQlFWY3NSVUZCUlN4RFFVRkdMRWRCUVUwc1JVRkJSU3hEUVVGR0xFVkJRVXNzUlVGQlJTeERRVUZHTEVkQlFVMHNSVUZCUlN4RFFVRkdMRU5CUVRkRE8wTkJRWFpDT3pzN096czdPenRCUVZGa0xFbEJRVTBzT0VOQlFXMUNMRlZCUVVNc1QwRkJSRHRYUVVGaExGVkJRVlVzUzBGQlN5eEZRVUZNTEVkQlFWVXNSMEZCY0VJN1EwRkJZanM3T3pzN096czdPenM3T3pzN096czdPenM3UVVGdlFucENMRWxCUVUwc01FSkJRVk1zVlVGQlF5eERRVUZFTEVWQlFVa3NRMEZCU2l4RlFVRlBMRkZCUVZBN1YwRkJiMElzU1VGQlN5eERRVUZETEVsQlFVa3NRMEZCU2l4RFFVRkVMRWRCUVZVc1VVRkJWanREUVVGNlFqczdPenM3T3pzN096czdRVUZYWml4SlFVRk5MRGhDUVVGWExGVkJRVU1zUTBGQlJDeEZRVUYxUWp0UlFVRnVRaXd3UkVGQlNTd3dRa0ZCWlRzN08wRkJSVE5ETEZGQlFVa3NhMEpCUVUwc1EwRkJUaXhEUVVGS0xFVkJRV003UVVGRFZpeGxRVUZQTEZkQlFWY3NRMEZCV0N4RlFVRmpMRU5CUVdRc1EwRkJVRHM3TzBGQlJGVXNTMEZCWkN4TlFVbFBPMEZCUTBnc1owSkJRVTBzVTBGQlV5eFhRVUZYTEVWQlFVVXNRMEZCUml4RlFVRkxMRVZCUVVVc1EwRkJSaXhEUVVGNlFpeERRVVJJTzBGQlJVZ3NaMEpCUVUwc1UwRkJVeXhYUVVGWExFVkJRVVVzUTBGQlJpeEZRVUZMTEVWQlFVVXNRMEZCUml4RFFVRjZRaXhEUVVaSU8wRkJSMGdzWjBKQlFVMHNVMEZCVXl4cFFrRkJReXhEUVVGTkxFVkJRVVVzUTBGQlJpeERRVUZRTEVkQlFXVXNWMEZCVnl4RlFVRkZMRU5CUVVZc1JVRkJTeXhGUVVGRkxFTkJRVVlzUTBGQkwwSXNSMEZCYzBNc1EwRkJkRU1zUTBGSVdqczdRVUZMU0N4dFFrRkJUeXhMUVVGTExFbEJRVXdzUTBGQlZTeFRRVUZETEZGQlFWVXNSVUZCV0N4WlFVRnBRaXhSUVVGVkxFVkJRVE5DTEZsQlFXbERMRkZCUVZVc1JVRkJNME1zUTBGQmFrSXNRMEZNUnp0VFFVcFFPME5CUm05Q096czdPenM3T3pzN096dEJRWGRDYWtJc1NVRkJUU3hyUTBGQllTeFZRVUZETEVOQlFVUXNSVUZCU1N4RFFVRktPMWRCUVZVc1MwRkJTeXhKUVVGTUxFTkJRVlVzUTBGQlF5eEhRVUZKTEVOQlFVb3NSMEZCVlN4SlFVRkpMRU5CUVVvN1EwRkJMMEk3T3pzN096czdPenM3T3pzN1FVRmhia0lzU1VGQlRTeHpSRUZCZFVJc1ZVRkJReXhSUVVGRUxFVkJRVmNzU1VGQldDeEZRVUZwUWl4RlFVRnFRanRYUVVGM1FpeERRVUZITEZGQlFVWXNSMEZCWVN4SlFVRmlMRWRCUVhOQ0xGZEJRVmNzUlVGQldDeEhRVUZwUWl4SlFVRjRRenREUVVGNFFqczdPenM3T3pzN096czdPenM3UVVGak4wSXNTVUZCVFN4elJFRkJkVUlzVlVGQlF5eExRVUZFTEVWQlFWRXNTVUZCVWl4RlFVRmpMRVZCUVdRN1YwRkJjVUlzUTBGQlF5eFJRVUZSTEVsQlFWSXNRMEZCUkN4SlFVRnJRaXhMUVVGTExFbEJRVXdzUTBGQmJFSTdRMEZCY2tJN096czdPenM3T3pzN08wRkJWemRDTEVsQlFVMHNNRUpCUVZNc1ZVRkJReXhEUVVGRUxFVkJRVWtzUTBGQlNpeEZRVUZWTzBGQlF6VkNMRkZCUVUwc1UwRkJVeXhGUVVGVUxFTkJSSE5DT3p0QlFVYzFRaXhUUVVGTExFbEJRVWtzUjBGQlNpeEpRVUZYTEVOQlFXaENMRVZCUVcxQ08wRkJRMllzV1VGQlNTeEZRVUZGTEdOQlFVWXNRMEZCYVVJc1IwRkJha0lzUTBGQlNpeEZRVUV5UWp0QlFVTjJRaXh0UWtGQlR5eEhRVUZRTEVsQlFXTXNkMEpCUVZrc1EwRkJXaXhGUVVGbExFZEJRV1lzU1VGQmMwSXNSVUZCUlN4SFFVRkdMRWxCUVZNc1JVRkJSU3hIUVVGR0xFTkJRVlFzUjBGQmEwSXNRMEZCZUVNc1EwRkVVenRUUVVFelFqdExRVVJLT3p0QlFVMUJMRmRCUVU4c1RVRkJVQ3hEUVZRMFFqdERRVUZXT3pzN096czdPenM3TzBGQmIwSm1MRWxCUVUwc1owVkJRVFJDTEZWQlFVTXNUVUZCUkN4RlFVRlRMRXRCUVZRc1JVRkJaMElzVVVGQmFFSXNSVUZCTmtJN1FVRkRiRVVzV1VGQlVTeHBRa0ZCYVVJc1MwRkJha0lzUTBGQlVpeERRVVJyUlRzN1FVRkhiRVVzVjBGQlR6dEJRVU5JTEZkQlFVY3NWMEZCVnl4TFFVRkxMRWRCUVV3c1EwRkJVeXhMUVVGVUxFTkJRVmdzUjBGQk5rSXNUMEZCVHl4RFFVRlFPMEZCUTJoRExGZEJRVWNzVjBGQlZ5eExRVUZMTEVkQlFVd3NRMEZCVXl4TFFVRlVMRU5CUVZnc1IwRkJOa0lzVDBGQlR5eERRVUZRTzB0QlJuQkRMRU5CU0d0Rk8wTkJRVGRDT3pzN096czdPenRCUVdWc1F5eEpRVUZOTERoRFFVRnRRaXhWUVVGRExFOUJRVVE3VjBGQllTeFZRVUZWTEVkQlFWWXNSMEZCWjBJc1MwRkJTeXhGUVVGTU8wTkJRVGRDT3pzN096czdPenM3UVVGVGVrSXNTVUZCVFN3d1FrRkJVenRSUVVGRExEUkVRVUZOTzFGQlFVY3NORVJCUVUwN1YwRkJUU3hMUVVGTExFMUJRVXdzVFVGQmFVSXNUVUZCVFN4SFFVRk9MRU5CUVdwQ0xFZEJRVGhDTEVkQlFUbENPME5CUVhSQ096czdPenM3T3pzN096czdRVUZaWml4SlFVRk5MSGREUVVGblFpeFZRVUZETEU5QlFVUXNSVUZCVlN4UlFVRldMRVZCUVhWQ08wRkJRMmhFTEZGQlFVa3NWMEZCVnl4UFFVRllMRU5CUkRSRE8wRkJSV2hFTEZGQlFVMHNWMEZCVnl4VFFVRlRMRXRCUVZRc1EwRkJaU3hIUVVGbUxFTkJRVmdzUTBGR01FTTdRVUZIYUVRc1VVRkJUU3hYUVVGWExGTkJRVk1zUTBGQlZDeERRVUZZTEVOQlNEQkRPenN3UWtGSk1VSXNNa0pCUVdVc1UwRkJVeXhEUVVGVUxFTkJRV1lzUlVGS01FSTdPMUZCU1RGRExEUkNRVW93UXp0UlFVbHdReXc0UWtGS2IwTTdPMEZCVFdoRUxGbEJRVkVzVjBGQlZ5eExRVUZZTEVOQlFWSXNRMEZPWjBRN08wRkJVV2hFTEZsQlFWRXNVVUZCVWp0QlFVTkJMR0ZCUVVzc1IwRkJURHRCUVVOSkxIZENRVUZaTEV0QlFWb3NRMEZFU2p0QlFVVkpMR3RDUVVaS08wRkJSRUVzWVVGSlN5eEhRVUZNTzBGQlEwa3NkMEpCUVZrc1MwRkJXaXhEUVVSS08wRkJSVWtzYTBKQlJrbzdRVUZLUVN4aFFVOUxMRWRCUVV3N1FVRkRTU3gzUWtGQldTeExRVUZhTEVOQlJFbzdRVUZGU1N4clFrRkdTanRCUVZCQkxHRkJWVXNzUjBGQlREdEJRVU5KTEhkQ1FVRlpMRXRCUVZvc1EwRkVTanRCUVVWSkxHdENRVVpLTzBGQlZrRXNTMEZTWjBRN08wRkJkVUpvUkN4UlFVRkpMRWxCUVVvc1JVRkJWVHRCUVVOT0xHOUNRVUZaTEVsQlFWb3NRMEZFVFR0TFFVRldPenRCUVVsQkxGZEJRVThzVVVGQlVDeERRVE5DWjBRN1EwRkJka0k3T3pzN096czdPenM3T3p0QlFYZERkRUlzU1VGQlRTdzRRa0ZCVnl4VlFVRkRMRXRCUVVRc1JVRkJVU3hIUVVGU0xFVkJRV0VzUjBGQllqdFhRVUZ4UWl4TFFVRkxMRWRCUVV3c1EwRkJVeXhMUVVGTExFZEJRVXdzUTBGQlV5eExRVUZVTEVWQlFXZENMRWRCUVdoQ0xFTkJRVlFzUlVGQkswSXNSMEZCTDBJN1EwRkJja0k3T3pzN096czdPenM3UVVGVmFrSXNTVUZCVFN3d1FrRkJVeXhWUVVGRExGRkJRVVFzUlVGQlZ5eFJRVUZZTEVWQlFYRkNMRkZCUVhKQ08xRkJRU3RDTEd0RlFVRlpPMWRCUVUwc2MwSkJRVlVzVjBGQldTeFpRVUZaTEZkQlFWY3NVVUZCV0N4RFFVRmFMRWRCUVcxRExFdEJRVXNzUjBGQlRDeERRVUZUTEZOQlFWUXNSVUZCYjBJc1VVRkJjRUlzUTBGQmJrTTdRMEZCZGtVN096czdPenM3TzBGQlVXWXNTVUZCVFN4M1EwRkJaMElzVlVGQlF5eEhRVUZFTEVWQlFVMHNZVUZCVGp0WFFVRjNRaXhwUWtGQlF5eERRVUZOTEVkQlFVNHNRMEZCUkN4SFFVRmxMRTlCUVU4c1QwRkJUeXhoUVVGUUxFTkJRVkFzUjBGQkswSXNRMEZCT1VNN1EwRkJlRUk3T3pzN096czdPMEZCVVhSQ0xFbEJRVTBzTUVOQlFXbENMRlZCUVVNc1VVRkJSQ3hGUVVGWExHRkJRVmc3VjBGQk5rSXNXVUZCV1N4UFFVRlBMR0ZCUVZBc1EwRkJXanREUVVFM1FqczdPenM3T3pzN08wRkJVM1pDTEVsQlFVMHNjME5CUVdVc1ZVRkJReXhSUVVGRUxFVkJRVmNzUzBGQldDeEZRVUZ4UWp0QlFVTTNReXhSUVVGTkxGVkJRVlVzUzBGQlN5eFJRVUZSTEVOQlFWSXNRMEZCVEN4RFFVUTJRanRCUVVVM1F5eFJRVUZOTEZOQlFWTXNTVUZCU3l4SlFVRkpMRXRCUVVvc1EwRkdlVUk3UVVGSE4wTXNVVUZCVFN4dFFrRkJiVUlzUzBGQlN5eEhRVUZNTEVOQlFWTXNWMEZCVnl4TlFVRllMRVZCUVcxQ0xFTkJRVFZDTEVOQlFXNUNMRU5CU0hWRE96dEJRVXMzUXl4WFFVRlBMRXRCUVVzc1MwRkJUQ3hEUVVGWExHMUNRVUZ0UWl4UFFVRnVRaXhEUVVGWUxFZEJRWGxETEU5QlFYcERMRU5CVEhORE8wTkJRWEpDSWl3aVptbHNaU0k2SW1OaGJHTXVhbk1pTENKemIzVnlZMlZTYjI5MElqb2lMMVZ6WlhKekwwMWhkSFF2VTJsMFpYTXZjRzl3Ylc5MGFXOXVJaXdpYzI5MWNtTmxjME52Ym5SbGJuUWlPbHNpYVcxd2IzSjBJSHRjYmlBZ0lDQm9ZWE5RY205d1pYSjBlU3hjYmlBZ0lDQnBjMDUxYlN4Y2JpQWdJQ0J6Y0d4cGRGWmhiSFZsVlc1cGRDeGNiaUFnSUNCMGIwUmxZMmx0WVd4Y2JuMGdabkp2YlNBbkxpOTFkR2xzY3ljN1hHNWNibU52Ym5OMElGcEZVazlmVUU5SlRsUWdQU0I3WEc0Z0lDQWdlRG9nTUN4Y2JpQWdJQ0I1T2lBd0xGeHVJQ0FnSUhvNklEQmNibjA3WEc1Y2JtTnZibk4wSUdScGMzUmhibU5sTVVRZ1BTQW9ZU3dnWWlrZ1BUNGdUV0YwYUM1aFluTW9ZU0F0SUdJcE8xeHVYRzR2S2x4dUlDQWdJRUZ1WjJ4bElHSmxkSGRsWlc0Z2NHOXBiblJ6WEc0Z0lDQWdYRzRnSUNBZ1ZISmhibk5zWVhSbGN5QjBhR1VnYUhsd2IzUm9aWFJwWTJGc0lHeHBibVVnYzI4Z2RHaGhkQ0IwYUdVZ0oyWnliMjBuSUdOdmIzSmthVzVoZEdWelhHNGdJQ0FnWVhKbElHRjBJREFzTUN3Z2RHaGxiaUJ5WlhSMWNtNGdkR2hsSUdGdVoyeGxJSFZ6YVc1bklDNWhibWRzWlVaeWIyMURaVzUwWlhJb0tWeHVJQ0FnSUZ4dUlDQWdJRUJ3WVhKaGJTQmJiMkpxWldOMFhUb2dXQ0JoYm1RZ1dTQmpiMjl5WkdsdVlYUmxjeUJ2WmlCbWNtOXRJSEJ2YVc1MFhHNGdJQ0FnUUhCaGNtRnRJRnR2WW1wbFkzUmRPaUJZSUdGdVpDQlpJR052Y21ScGJtRjBaWE1nYjJZZ2RHOGdjRzlwYm5SY2JpQWdJQ0JBY21WMGRYSnVJRnR5WVdScFlXNWRPaUJCYm1kc1pTQmlaWFIzWldWdUlIUm9aU0IwZDI4Z2NHOXBiblJ6SUdsdUlISmhaR2xoYm5OY2Jpb3ZYRzVsZUhCdmNuUWdZMjl1YzNRZ1lXNW5iR1VnUFNBb1lTd2dZaUE5SUZwRlVrOWZVRTlKVGxRcElEMCtJSEpoWkdsaGJuTlViMFJsWjNKbFpYTW9UV0YwYUM1aGRHRnVNaWhoTG5nZ0xTQmlMbmdzSUdFdWVTQXRJR0l1ZVNrcE8xeHVYRzR2S2x4dUlDQWdJRU52Ym5abGNuUWdaR1ZuY21WbGN5QjBieUJ5WVdScFlXNXpYRzRnSUNBZ1hHNGdJQ0FnUUhCaGNtRnRJRnR1ZFcxaVpYSmRPaUJXWVd4MVpTQnBiaUJrWldkeVpXVnpYRzRnSUNBZ1FISmxkSFZ5YmlCYmJuVnRZbVZ5WFRvZ1ZtRnNkV1VnYVc0Z2NtRmthV0Z1YzF4dUtpOWNibVY0Y0c5eWRDQmpiMjV6ZENCa1pXZHlaV1Z6Vkc5U1lXUnBZVzV6SUQwZ0tHUmxaM0psWlhNcElEMCtJR1JsWjNKbFpYTWdLaUJOWVhSb0xsQkpJQzhnTVRnd08xeHVYRzR2S2x4dUlDQWdJRVJwYkdGMFpWeHVJQ0FnSUZ4dUlDQWdJRU5vWVc1blpTQjBhR1VnY0hKdlozSmxjM05wYjI0Z1ltVjBkMlZsYmlCaElHRnVaQ0JpSUdGalkyOXlaR2x1WnlCMGJ5QmthV3hoZEdsdmJpNWNiaUFnSUNCY2JpQWdJQ0JUYnlCa2FXeGhkR2x2YmlBOUlEQXVOU0IzYjNWc1pDQmphR0Z1WjJWY2JpQWdJQ0JjYmlBZ0lDQmhJQzB0TFMwdExTMHRMU0JpWEc0Z0lDQWdYRzRnSUNBZ2RHOWNiaUFnSUNCY2JpQWdJQ0JoSUMwdExTMGdZbHh1SUNBZ0lGeHVJQ0FnSUVCd1lYSmhiU0JiYm5WdFltVnlYVG9nVUhKbGRtbHZkWE1nZG1Gc2RXVmNiaUFnSUNCQWNHRnlZVzBnVzI1MWJXSmxjbDA2SUVOMWNuSmxiblFnZG1Gc2RXVmNiaUFnSUNCQWNHRnlZVzBnVzI1MWJXSmxjbDA2SUVScGJHRjBaU0J3Y205bmNtVnpjeUJpZVNCNFhHNGdJQ0FnUUhKbGRIVnliaUJiYm5WdFltVnlYVG9nVUhKbGRtbHZkWE1nZG1Gc2RXVWdjR3gxY3lCMGFHVWdaR2xzWVhSbFpDQmthV1ptWlhKbGJtTmxYRzRxTDF4dVpYaHdiM0owSUdOdmJuTjBJR1JwYkdGMFpTQTlJQ2hoTENCaUxDQmthV3hoZEdsdmJpa2dQVDRnWVNBcklDZ29ZaUF0SUdFcElDb2daR2xzWVhScGIyNHBPMXh1WEc0dktseHVJQ0FnSUVScGMzUmhibU5sWEc0Z0lDQWdYRzRnSUNBZ1VtVjBkWEp1Y3lCMGFHVWdaR2x6ZEdGdVkyVWdZbVYwZDJWbGJpQjBkMjhnYmlCa2FXMWxibk5wYjI1aGJDQndiMmx1ZEhNdVhHNGdJQ0FnWEc0Z0lDQWdRSEJoY21GdElGdHZZbXBsWTNRdmJuVnRZbVZ5WFRvZ2VDQmhibVFnZVNCdmNpQnFkWE4wSUhnZ2IyWWdjRzlwYm5RZ1FWeHVJQ0FnSUVCd1lYSmhiU0JiYjJKcVpXTjBMMjUxYldKbGNsMDZJQ2h2Y0hScGIyNWhiQ2s2SUhnZ1lXNWtJSGtnYjNJZ2FuVnpkQ0I0SUc5bUlIQnZhVzUwSUVKY2JpQWdJQ0JBY21WMGRYSnVJRnR1ZFcxaVpYSmRPaUJVYUdVZ1pHbHpkR0Z1WTJVZ1ltVjBkMlZsYmlCMGFHVWdkSGR2SUhCdmFXNTBjMXh1S2k5Y2JtVjRjRzl5ZENCamIyNXpkQ0JrYVhOMFlXNWpaU0E5SUNoaExDQmlJRDBnV2tWU1QxOVFUMGxPVkNrZ1BUNGdlMXh1SUNBZ0lDOHZJREZFSUdScGJXVnVjMmx2Ym5OY2JpQWdJQ0JwWmlBb2FYTk9kVzBvWVNrcElIdGNiaUFnSUNBZ0lDQWdjbVYwZFhKdUlHUnBjM1JoYm1ObE1VUW9ZU3dnWWlrN1hHNWNiaUFnSUNBdkx5Qk5kV3gwYVMxa2FXMWxibk5wYjI1aGJGeHVJQ0FnSUgwZ1pXeHpaU0I3WEc0Z0lDQWdJQ0FnSUdOdmJuTjBJSGhFWld4MFlTQTlJR1JwYzNSaGJtTmxNVVFvWVM1NExDQmlMbmdwTzF4dUlDQWdJQ0FnSUNCamIyNXpkQ0I1UkdWc2RHRWdQU0JrYVhOMFlXNWpaVEZFS0dFdWVTd2dZaTU1S1R0Y2JpQWdJQ0FnSUNBZ1kyOXVjM1FnZWtSbGJIUmhJRDBnS0dselRuVnRLR0V1ZWlrcElEOGdaR2x6ZEdGdVkyVXhSQ2hoTG5vc0lHSXVlaWtnT2lBd08xeHVYRzRnSUNBZ0lDQWdJSEpsZEhWeWJpQk5ZWFJvTG5OeGNuUW9LSGhFWld4MFlTQXFLaUF5S1NBcklDaDVSR1ZzZEdFZ0tpb2dNaWtnS3lBb2VrUmxiSFJoSUNvcUlESXBLVHRjYmlBZ0lDQjlYRzU5TzF4dUlGeHVMeXBjYmlBZ0lDQkllWEJ2ZEdWdWRYTmxYRzRnSUNBZ1hHNGdJQ0FnVW1WMGRYSnVjeUIwYUdVZ2FIbHdiM1JsYm5WelpTd2djMmxrWlNCRExDQm5hWFpsYmlCMGFHVWdiR1Z1WjNSb2N5QnZaaUJ6YVdSbGN5QkJJR0Z1WkNCQ0xseHVJQ0FnSUZ4dUlDQWdJRUJ3WVhKaGJTQmJiblZ0WW1WeVhUb2dUR1Z1WjNSb0lHOW1JRUZjYmlBZ0lDQkFjR0Z5WVcwZ1cyNTFiV0psY2wwNklFeGxibWQwYUNCdlppQkNYRzRnSUNBZ1FISmxkSFZ5YmlCYmJuVnRZbVZ5WFRvZ1RHVnVaM1JvSUc5bUlFTmNiaW92WEc1bGVIQnZjblFnWTI5dWMzUWdhSGx3YjNSbGJuVnpaU0E5SUNoaExDQmlLU0E5UGlCTllYUm9Mbk54Y25Rb0tHRWdLaUJoS1NBcklDaGlJQ29nWWlrcE8xeHVYRzR2S2x4dUlDQWdJRlpoYkhWbElHbHVJSEpoYm1kbElHWnliMjBnY0hKdlozSmxjM05jYmlBZ0lDQmNiaUFnSUNCSGFYWmxiaUJoSUd4dmQyVnlJR3hwYldsMElHRnVaQ0JoYmlCMWNIQmxjaUJzYVcxcGRDd2dkMlVnY21WMGRYSnVJSFJvWlNCMllXeDFaU0IzYVhSb2FXNWNiaUFnSUNCMGFHRjBJSEpoYm1kbElHRnpJR1Y0Y0hKbGMzTmxaQ0JpZVNCd2NtOW5jbVZ6Y3lBb1lTQnVkVzFpWlhJZ1puSnZiU0F3TFRFcFhHNGdJQ0FnWEc0Z0lDQWdRSEJoY21GdElGdHVkVzFpWlhKZE9pQlVhR1VnY0hKdlozSmxjM01nWW1WMGQyVmxiaUJzYjNkbGNpQmhibVFnZFhCd1pYSWdiR2x0YVhSeklHVjRjSEpsYzNObFpDQXdMVEZjYmlBZ0lDQkFjR0Z5WVcwZ1cyNTFiV0psY2wwNklFeHZkMlZ5SUd4cGJXbDBJRzltSUhKaGJtZGxYRzRnSUNBZ1FIQmhjbUZ0SUZ0dWRXMWlaWEpkT2lCVmNIQmxjaUJzYVcxcGRDQnZaaUJ5WVc1blpWeHVJQ0FnSUVCeVpYUjFjbTRnVzI1MWJXSmxjbDA2SUZaaGJIVmxJR0Z6SUdOaGJHTjFiR0YwWldRZ1puSnZiU0J3Y205bmNtVnpjeUIzYVhSb2FXNGdjbUZ1WjJVZ0tHNXZkQ0JzYVcxcGRHVmtJSGRwZEdocGJpQnlZVzVuWlNsY2Jpb3ZYRzVsZUhCdmNuUWdZMjl1YzNRZ1oyVjBWbUZzZFdWR2NtOXRVSEp2WjNKbGMzTWdQU0FvY0hKdlozSmxjM01zSUdaeWIyMHNJSFJ2S1NBOVBpQW9MU0J3Y205bmNtVnpjeUFxSUdaeWIyMHBJQ3NnS0hCeWIyZHlaWE56SUNvZ2RHOHBJQ3NnWm5KdmJUdGNibHh1THlwY2JpQWdJQ0JRY205bmNtVnpjeUIzYVhSb2FXNGdaMmwyWlc0Z2NtRnVaMlZjYmlBZ0lDQmNiaUFnSUNCSGFYWmxiaUJoSUd4dmQyVnlJR3hwYldsMElHRnVaQ0JoYmlCMWNIQmxjaUJzYVcxcGRDd2dkMlVnY21WMGRYSnVJSFJvWlNCd2NtOW5jbVZ6YzF4dUlDQWdJQ2hsZUhCeVpYTnpaV1FnWVhNZ1lTQnVkVzFpWlhJZ01DMHhLU0J5WlhCeVpYTmxiblJsWkNCaWVTQjBhR1VnWjJsMlpXNGdkbUZzZFdVc0lHRnVaRnh1SUNBZ0lHeHBiV2wwSUhSb1lYUWdjSEp2WjNKbGMzTWdkRzhnZDJsMGFHbHVJREF0TVM1Y2JpQWdJQ0JjYmlBZ0lDQkFjR0Z5WVcwZ1cyNTFiV0psY2wwNklGWmhiSFZsSUhSdklHWnBibVFnY0hKdlozSmxjM01nZDJsMGFHbHVJR2RwZG1WdUlISmhibWRsWEc0Z0lDQWdRSEJoY21GdElGdHVkVzFpWlhKZE9pQk1iM2RsY2lCc2FXMXBkQ0JjYmlBZ0lDQkFjR0Z5WVcwZ1cyNTFiV0psY2wwNklGVndjR1Z5SUd4cGJXbDBYRzRnSUNBZ1FISmxkSFZ5YmlCYmJuVnRZbVZ5WFRvZ1VISnZaM0psYzNNZ2IyWWdkbUZzZFdVZ2QybDBhR2x1SUhKaGJtZGxJR0Z6SUdWNGNISmxjM05sWkNBd0xURmNiaW92WEc1bGVIQnZjblFnWTI5dWMzUWdaMlYwVUhKdlozSmxjM05HY205dFZtRnNkV1VnUFNBb2RtRnNkV1VzSUdaeWIyMHNJSFJ2S1NBOVBpQW9kbUZzZFdVZ0xTQm1jbTl0S1NBdklDaDBieUF0SUdaeWIyMHBPMXh1WEc0dktseHVJQ0FnSUU5bVpuTmxkQ0JpWlhSM1pXVnVJSFIzYnlCdlltcGxZM1J6SUc5bUlHNTFiV0psY25OY2JseHVJQ0FnSUVsbUlIQnliM0JsY25SNUlHbHpJR1p2ZFc1a0lHbHVJR0lnYm05MElIQnlaWE5sYm5RZ2FXNGdZU3dnYVhRZ2QybHNiQ0J5WlhSMWNtNGdZREJnSUdadmNpQjBhR0YwSUhCeWIzQXVYRzRnSUNBZ1hHNGdJQ0FnUUhCaGNtRnRJRnRRYjJsdWRGMDZJRVpwY25OMElHOWlhbVZqZEZ4dUlDQWdJRUJ3WVhKaGJTQmJVRzlwYm5SZE9pQlRaV052Ym1RZ2IySnFaV04wWEc0Z0lDQWdRSEpsZEhWeWJpQmJUMlptYzJWMFhUb2dSR2x6ZEdGdVkyVWdiV1YwY21samN5QmlaWFIzWldWdUlIUjNieUJ3YjJsdWRITmNiaW92WEc1bGVIQnZjblFnWTI5dWMzUWdiMlptYzJWMElEMGdLR0VzSUdJcElEMCtJSHRjYmlBZ0lDQmpiMjV6ZENCdlptWnpaWFFnUFNCN2ZUdGNibHh1SUNBZ0lHWnZjaUFvYkdWMElHdGxlU0JwYmlCaUtTQjdYRzRnSUNBZ0lDQWdJR2xtSUNoaUxtaGhjMDkzYmxCeWIzQmxjblI1S0d0bGVTa3BJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lHOW1abk5sZEZ0clpYbGRJRDBnYUdGelVISnZjR1Z5ZEhrb1lTd2dhMlY1S1NBL0lHSmJhMlY1WFNBdElHRmJhMlY1WFNBNklEQTdYRzRnSUNBZ0lDQWdJSDFjYmlBZ0lDQjlYRzVjYmlBZ0lDQnlaWFIxY200Z2IyWm1jMlYwTzF4dWZUdGNibHh1THlwY2JpQWdJQ0JRYjJsdWRDQm1jbTl0SUdGdVoyeGxJR0Z1WkNCa2FYTjBZVzVqWlZ4dUlDQWdJRnh1SUNBZ0lFQndZWEpoYlNCYmIySnFaV04wWFRvZ01rUWdjRzlwYm5RZ2IyWWdiM0pwWjJsdVhHNGdJQ0FnUUhCaGNtRnRJRnR1ZFcxaVpYSmRPaUJCYm1kc1pTQm1jbTl0SUc5eWFXZHBibHh1SUNBZ0lFQndZWEpoYlNCYmJuVnRZbVZ5WFRvZ1JHbHpkR0Z1WTJVZ1puSnZiU0J2Y21sbmFXNWNiaUFnSUNCQWNtVjBkWEp1SUZ0dlltcGxZM1JkT2lCRFlXeGpkV3hoZEdWa0lESkVJSEJ2YVc1MFhHNHFMMXh1Wlhod2IzSjBJR052Ym5OMElIQnZhVzUwUm5KdmJVRnVaMnhsUVc1a1JHbHpkR0Z1WTJVZ1BTQW9iM0pwWjJsdUxDQmhibWRzWlN3Z1pHbHpkR0Z1WTJVcElEMCtJSHRjYmlBZ0lDQmhibWRzWlNBOUlHUmxaM0psWlhOVWIxSmhaR2xoYm5Nb1lXNW5iR1VwTzF4dVhHNGdJQ0FnY21WMGRYSnVJSHRjYmlBZ0lDQWdJQ0FnZURvZ1pHbHpkR0Z1WTJVZ0tpQk5ZWFJvTG1OdmN5aGhibWRzWlNrZ0t5QnZjbWxuYVc0dWVDeGNiaUFnSUNBZ0lDQWdlVG9nWkdsemRHRnVZMlVnS2lCTllYUm9Mbk5wYmloaGJtZHNaU2tnS3lCdmNtbG5hVzR1ZVZ4dUlDQWdJSDA3WEc1OU8xeHVYRzR2S2x4dUlDQWdJRU52Ym5abGNuUWdjbUZrYVdGdWN5QjBieUJrWldkeVpXVnpYRzRnSUNBZ1hHNGdJQ0FnUUhCaGNtRnRJRnR1ZFcxaVpYSmRPaUJXWVd4MVpTQnBiaUJ5WVdScFlXNXpYRzRnSUNBZ1FISmxkSFZ5YmlCYmJuVnRZbVZ5WFRvZ1ZtRnNkV1VnYVc0Z1pHVm5jbVZsYzF4dUtpOWNibVY0Y0c5eWRDQmpiMjV6ZENCeVlXUnBZVzV6Vkc5RVpXZHlaV1Z6SUQwZ0tISmhaR2xoYm5NcElEMCtJSEpoWkdsaGJuTWdLaUF4T0RBZ0x5Qk5ZWFJvTGxCSk8xeHVYRzR2S2x4dUlDQWdJRkpsZEhWeWJpQnlZVzVrYjIwZ2JuVnRZbVZ5SUdKbGRIZGxaVzRnY21GdVoyVmNiaUFnSUNCY2JpQWdJQ0JBY0dGeVlXMGdXMjUxYldKbGNsMGdLRzl3ZEdsdmJtRnNLVG9nVDNWMGNIVjBJRzFwYm1sdGRXMWNiaUFnSUNCQWNHRnlZVzBnVzI1MWJXSmxjbDBnS0c5d2RHbHZibUZzS1RvZ1QzVjBjSFYwSUcxaGVHbHRkVzFjYmlBZ0lDQkFjbVYwZFhKdUlGdHVkVzFpWlhKZE9pQlNZVzVrYjIwZ2JuVnRZbVZ5SUhkcGRHaHBiaUJ5WVc1blpTd2diM0lnTUNCaGJtUWdNU0JwWmlCdWIyNWxJSEJ5YjNacFpHVmtYRzRxTDF4dVpYaHdiM0owSUdOdmJuTjBJSEpoYm1SdmJTQTlJQ2h0YVc0Z1BTQXdMQ0J0WVhnZ1BTQXhLU0E5UGlCTllYUm9MbkpoYm1SdmJTZ3BJQ29nS0cxaGVDQXRJRzFwYmlrZ0t5QnRhVzQ3WEc1Y2JpOHFYRzRnSUNBZ1EyRnNZM1ZzWVhSbElISmxiR0YwYVhabElIWmhiSFZsWEc0Z0lDQWdYRzRnSUNBZ1ZHRnJaWE1nZEdobElHOXdaWEpoZEc5eUlHRnVaQ0IyWVd4MVpTQm1jbTl0SUdFZ2MzUnlhVzVuTENCcFpTQmNJaXM5TlZ3aUxDQmhibVFnWVhCd2JHbGxjMXh1SUNBZ0lIUnZJSFJvWlNCamRYSnlaVzUwSUhaaGJIVmxJSFJ2SUhKbGMyOXNkbVVnWVNCdVpYY2dkR0Z5WjJWMExseHVJQ0FnSUZ4dUlDQWdJRUJ3WVhKaGJTQmJiblZ0WW1WeVhUb2dRM1Z5Y21WdWRDQjJZV3gxWlZ4dUlDQWdJRUJ3WVhKaGJTQmJjM1J5YVc1blhUb2dVbVZzWVhScGRtVWdkbUZzZFdWY2JpQWdJQ0JBY21WMGRYSnVJRnR1ZFcxaVpYSmRPaUJPWlhjZ2RtRnNkV1ZjYmlvdlhHNWxlSEJ2Y25RZ1kyOXVjM1FnY21Wc1lYUnBkbVZXWVd4MVpTQTlJQ2hqZFhKeVpXNTBMQ0J5Wld4aGRHbDJaU2tnUFQ0Z2UxeHVJQ0FnSUd4bGRDQnVaWGRXWVd4MVpTQTlJR04xY25KbGJuUTdYRzRnSUNBZ1kyOXVjM1FnWlhGMVlYUnBiMjRnUFNCeVpXeGhkR2wyWlM1emNHeHBkQ2duUFNjcE8xeHVJQ0FnSUdOdmJuTjBJRzl3WlhKaGRHOXlJRDBnWlhGMVlYUnBiMjViTUYwN1hHNGdJQ0FnYkdWMElIc2dkVzVwZEN3Z2RtRnNkV1VnZlNBOUlITndiR2wwVm1Gc2RXVlZibWwwS0dWeGRXRjBhVzl1V3pGZEtUdGNibHh1SUNBZ0lIWmhiSFZsSUQwZ2NHRnljMlZHYkc5aGRDaDJZV3gxWlNrN1hHNWNiaUFnSUNCemQybDBZMmdnS0c5d1pYSmhkRzl5S1NCN1hHNGdJQ0FnWTJGelpTQW5LeWM2WEc0Z0lDQWdJQ0FnSUc1bGQxWmhiSFZsSUNzOUlIWmhiSFZsTzF4dUlDQWdJQ0FnSUNCaWNtVmhhenRjYmlBZ0lDQmpZWE5sSUNjdEp6cGNiaUFnSUNBZ0lDQWdibVYzVm1Gc2RXVWdMVDBnZG1Gc2RXVTdYRzRnSUNBZ0lDQWdJR0p5WldGck8xeHVJQ0FnSUdOaGMyVWdKeW9uT2x4dUlDQWdJQ0FnSUNCdVpYZFdZV3gxWlNBcVBTQjJZV3gxWlR0Y2JpQWdJQ0FnSUNBZ1luSmxZV3M3WEc0Z0lDQWdZMkZ6WlNBbkx5YzZYRzRnSUNBZ0lDQWdJRzVsZDFaaGJIVmxJQzg5SUhaaGJIVmxPMXh1SUNBZ0lDQWdJQ0JpY21WaGF6dGNiaUFnSUNCOVhHNGdJQ0FnWEc0Z0lDQWdhV1lnS0hWdWFYUXBJSHRjYmlBZ0lDQWdJQ0FnYm1WM1ZtRnNkV1VnS3owZ2RXNXBkRHRjYmlBZ0lDQjlYRzVjYmlBZ0lDQnlaWFIxY200Z2JtVjNWbUZzZFdVN1hHNTlPMXh1WEc0dktseHVJQ0FnSUZKbGMzUnlhV04wSUhaaGJIVmxJSFJ2SUhKaGJtZGxYRzRnSUNBZ1hHNGdJQ0FnVW1WMGRYSnVJSFpoYkhWbElIZHBkR2hwYmlCMGFHVWdjbUZ1WjJVZ2IyWWdiRzkzWlhKTWFXMXBkQ0JoYm1RZ2RYQndaWEpNYVcxcGRGeHVJQ0FnSUZ4dUlDQWdJRUJ3WVhKaGJTQmJiblZ0WW1WeVhUb2dWbUZzZFdVZ2RHOGdhMlZsY0NCM2FYUm9hVzRnY21GdVoyVmNiaUFnSUNCQWNHRnlZVzBnVzI1MWJXSmxjbDA2SUV4dmQyVnlJR3hwYldsMElHOW1JSEpoYm1kbFhHNGdJQ0FnUUhCaGNtRnRJRnR1ZFcxaVpYSmRPaUJWY0hCbGNpQnNhVzFwZENCdlppQnlZVzVuWlZ4dUlDQWdJRUJ5WlhSMWNtNGdXMjUxYldKbGNsMDZJRlpoYkhWbElHRnpJR3hwYldsMFpXUWdkMmwwYUdsdUlHZHBkbVZ1SUhKaGJtZGxYRzRxTDF4dVpYaHdiM0owSUdOdmJuTjBJSEpsYzNSeWFXTjBJRDBnS0haaGJIVmxMQ0J0YVc0c0lHMWhlQ2tnUFQ0Z1RXRjBhQzV0WVhnb1RXRjBhQzV0YVc0b2RtRnNkV1VzSUcxaGVDa3NJRzFwYmlrN1hHNWNiaThxWEc0Z0lDQWdSbkpoYldWeVlYUmxMV2x1WkdWd1pXNWtaVzUwSUhOdGIyOTBhR2x1WjF4dVhHNGdJQ0FnUUhCaGNtRnRJRnR1ZFcxaVpYSmRPaUJPWlhjZ2RtRnNkV1ZjYmlBZ0lDQkFjR0Z5WVcwZ1cyNTFiV0psY2wwNklFOXNaQ0IyWVd4MVpWeHVJQ0FnSUVCd1lYSmhiU0JiYm5WdFltVnlYVG9nUm5KaGJXVWdaSFZ5WVhScGIyNWNiaUFnSUNCQWNHRnlZVzBnVzI1MWJXSmxjbDBnS0c5d2RHbHZibUZzS1RvZ1UyMXZiM1JvYVc1bklDZ3dJR2x6SUc1dmJtVXBYRzRxTDF4dVpYaHdiM0owSUdOdmJuTjBJSE50YjI5MGFDQTlJQ2h1WlhkV1lXeDFaU3dnYjJ4a1ZtRnNkV1VzSUdSMWNtRjBhVzl1TENCemJXOXZkR2hwYm1jZ1BTQXdLU0E5UGlCMGIwUmxZMmx0WVd3b2IyeGtWbUZzZFdVZ0t5QW9aSFZ5WVhScGIyNGdLaUFvYm1WM1ZtRnNkV1VnTFNCdmJHUldZV3gxWlNrZ0x5Qk5ZWFJvTG0xaGVDaHpiVzl2ZEdocGJtY3NJR1IxY21GMGFXOXVLU2twTzF4dVhHNHZLbHh1SUNBZ0lFTnZiblpsY25RZ2VDQndaWElnYzJWamIyNWtJSFJ2SUhCbGNpQm1jbUZ0WlNCMlpXeHZZMmwwZVNCaVlYTmxaQ0J2YmlCbWNITmNiaUFnSUNCY2JpQWdJQ0JBY0dGeVlXMGdXMjUxYldKbGNsMDZJRlZ1YVhRZ2NHVnlJSE5sWTI5dVpGeHVJQ0FnSUVCd1lYSmhiU0JiYm5WdFltVnlYVG9nUm5KaGJXVWdaSFZ5WVhScGIyNGdhVzRnYlhOY2Jpb3ZYRzVsZUhCdmNuUWdZMjl1YzNRZ2MzQmxaV1JRWlhKR2NtRnRaU0E5SUNoNGNITXNJR1p5WVcxbFJIVnlZWFJwYjI0cElEMCtJQ2hwYzA1MWJTaDRjSE1wS1NBL0lIaHdjeUF2SUNneE1EQXdJQzhnWm5KaGJXVkVkWEpoZEdsdmJpa2dPaUF3TzF4dVhHNHZLbHh1SUNBZ0lFTnZiblpsY25RZ2RtVnNiMk5wZEhrZ2FXNTBieUIyWld4cFkybDBlU0J3WlhJZ2MyVmpiMjVrWEc0Z0lDQWdYRzRnSUNBZ1FIQmhjbUZ0SUZ0dWRXMWlaWEpkT2lCVmJtbDBJSEJsY2lCbWNtRnRaVnh1SUNBZ0lFQndZWEpoYlNCYmJuVnRZbVZ5WFRvZ1JuSmhiV1VnWkhWeVlYUnBiMjRnYVc0Z2JYTmNiaW92WEc1bGVIQnZjblFnWTI5dWMzUWdjM0JsWldSUVpYSlRaV052Ym1RZ1BTQW9kbVZzYjJOcGRIa3NJR1p5WVcxbFJIVnlZWFJwYjI0cElEMCtJSFpsYkc5amFYUjVJQ29nS0RFd01EQWdMeUJtY21GdFpVUjFjbUYwYVc5dUtUdGNibHh1THlwY2JpQWdJQ0JEY21WaGRHVWdjM1JsY0hCbFpDQjJaWEp6YVc5dUlHOW1JREF0TVNCd2NtOW5jbVZ6YzF4dUlDQWdJRnh1SUNBZ0lFQndZWEpoYlNCYmJuVnRZbVZ5WFRvZ1EzVnljbVZ1ZENCMllXeDFaVnh1SUNBZ0lFQndZWEpoYlNCYmFXNTBYVG9nVG5WdFltVnlJRzltSUhOMFpYQnpYRzRnSUNBZ1FISmxkSFZ5YmlCYmJuVnRZbVZ5WFRvZ1UzUmxjSEJsWkNCMllXeDFaVnh1S2k5Y2JtVjRjRzl5ZENCamIyNXpkQ0J6ZEdWd1VISnZaM0psYzNNZ1BTQW9jSEp2WjNKbGMzTXNJSE4wWlhCektTQTlQaUI3WEc0Z0lDQWdZMjl1YzNRZ2MyVm5iV1Z1ZENBOUlERWdMeUFvYzNSbGNITWdMU0F4S1R0Y2JpQWdJQ0JqYjI1emRDQjBZWEpuWlhRZ1BTQXhJQzBnS0RFZ0x5QnpkR1Z3Y3lrN1hHNGdJQ0FnWTI5dWMzUWdjSEp2WjNKbGMzTlBabFJoY21kbGRDQTlJRTFoZEdndWJXbHVLSEJ5YjJkeVpYTnpJQzhnZEdGeVoyVjBMQ0F4S1R0Y2JseHVJQ0FnSUhKbGRIVnliaUJOWVhSb0xtWnNiMjl5S0hCeWIyZHlaWE56VDJaVVlYSm5aWFFnTHlCelpXZHRaVzUwS1NBcUlITmxaMjFsYm5RN1hHNTlPeUpkZlE9PVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvaW5jL2NhbGMuanNcbiAqKiBtb2R1bGUgaWQgPSAxOFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX2RlZmF1bHRQcm9wcyA9IHJlcXVpcmUoJy4vc2V0dGluZ3MvZGVmYXVsdC1wcm9wcycpO1xuXG5leHBvcnRzLmRlZmF1bHQgPSB7XG4gICAgZGVmYXVsdFByb3BzOiBfZGVmYXVsdFByb3BzLm9wYWNpdHlcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5OeVl5OTJZV3gxWlMxMGVYQmxjeTloYkhCb1lTNXFjeUpkTENKdVlXMWxjeUk2VzEwc0ltMWhjSEJwYm1keklqb2lPenM3T3pzN2EwSkJSV1U3UVVGRFdDeDFRMEZFVnlJc0ltWnBiR1VpT2lKaGJIQm9ZUzVxY3lJc0luTnZkWEpqWlZKdmIzUWlPaUl2VlhObGNuTXZUV0YwZEM5VGFYUmxjeTl3YjNCdGIzUnBiMjRpTENKemIzVnlZMlZ6UTI5dWRHVnVkQ0k2V3lKcGJYQnZjblFnZXlCdmNHRmphWFI1SUgwZ1puSnZiU0FuTGk5elpYUjBhVzVuY3k5a1pXWmhkV3gwTFhCeWIzQnpKenRjYmx4dVpYaHdiM0owSUdSbFptRjFiSFFnZTF4dUlDQWdJR1JsWm1GMWJIUlFjbTl3Y3pvZ2IzQmhZMmwwZVZ4dWZUc2lYWDA9XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy92YWx1ZS10eXBlcy9hbHBoYS5qc1xuICoqIG1vZHVsZSBpZCA9IDE5XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzLmRlZmF1bHQgPSB7XG4gICAgZGVmYXVsdFByb3BzOiB7XG4gICAgICAgIHVuaXQ6ICdkZWcnXG4gICAgfVxufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbk55WXk5MllXeDFaUzEwZVhCbGN5OWhibWRzWlM1cWN5SmRMQ0p1WVcxbGN5STZXMTBzSW0xaGNIQnBibWR6SWpvaU96czdhMEpCUVdVN1FVRkRXQ3hyUWtGQll6dEJRVU5XTEdOQlFVMHNTMEZCVGp0TFFVUktJaXdpWm1sc1pTSTZJbUZ1WjJ4bExtcHpJaXdpYzI5MWNtTmxVbTl2ZENJNklpOVZjMlZ5Y3k5TllYUjBMMU5wZEdWekwzQnZjRzF2ZEdsdmJpSXNJbk52ZFhKalpYTkRiMjUwWlc1MElqcGJJbVY0Y0c5eWRDQmtaV1poZFd4MElIdGNiaUFnSUNCa1pXWmhkV3gwVUhKdmNITTZJSHRjYmlBZ0lDQWdJQ0FnZFc1cGREb2dKMlJsWnlkY2JpQWdJQ0I5WEc1OU95SmRmUT09XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy92YWx1ZS10eXBlcy9hbmdsZS5qc1xuICoqIG1vZHVsZSBpZCA9IDIwXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfdXRpbHMgPSByZXF1aXJlKCcuLi9pbmMvdXRpbHMnKTtcblxudmFyIF9weCA9IHJlcXVpcmUoJy4vcHgnKTtcblxudmFyIF9weDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9weCk7XG5cbnZhciBfZGljdGlvbmFyeSA9IHJlcXVpcmUoJy4vc2V0dGluZ3MvZGljdGlvbmFyeScpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5leHBvcnRzLmRlZmF1bHQgPSB7XG4gICAgZGVmYXVsdFByb3BzOiBfcHgyLmRlZmF1bHQuZGVmYXVsdFByb3BzLFxuXG4gICAgLypcbiAgICAgICAgU3BsaXQgcG9zaXRpb25zIGluIGZvcm1hdCBcIlggWSBaXCJcbiAgICAgICAgXG4gICAgICAgIEBwYXJhbSBbc3RyaW5nXTogUG9zaXRpb24gdmFsdWVzXG4gICAgICAgICAgICBcIjIwJSAzMCUgMFwiIC0+IHsyMCUsIDMwJSwgMH1cbiAgICAgICAgICAgIFwiMjAlIDMwJVwiIC0+IHsyMCUsIDMwJX1cbiAgICAgICAgICAgIFwiMjAlXCIgLT4gezIwJSwgMjAlfVxuICAgICovXG4gICAgc3BsaXQ6IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICB2YXIgc3BsaXRWYWx1ZXMgPSAoMCwgX3V0aWxzLnNwbGl0U3BhY2VEZWxpbWl0ZWQpKHZhbHVlKTtcbiAgICAgICAgdmFyIG51bUF4ZXMgPSBzcGxpdFZhbHVlcy5sZW5ndGg7XG4gICAgICAgIHZhciBzcGxpdFZhbHVlID0ge1xuICAgICAgICAgICAgWDogc3BsaXRWYWx1ZXNbMF0sXG4gICAgICAgICAgICBZOiBudW1BeGVzID4gMSA/IHNwbGl0VmFsdWVzWzFdIDogc3BsaXRWYWx1ZXNbMF1cbiAgICAgICAgfTtcblxuICAgICAgICBpZiAobnVtQXhlcyA+IDIpIHtcbiAgICAgICAgICAgIHNwbGl0VmFsdWUuWiA9IHNwbGl0VmFsdWVzWzJdO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHNwbGl0VmFsdWU7XG4gICAgfSxcblxuICAgIGNvbWJpbmU6IGZ1bmN0aW9uICh2YWx1ZXMpIHtcbiAgICAgICAgcmV0dXJuICgwLCBfdXRpbHMuY3JlYXRlRGVsaW1pdGVkKSh2YWx1ZXMsIF9kaWN0aW9uYXJ5LmF4ZXMsICcgJyk7XG4gICAgfVxufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbk55WXk5MllXeDFaUzEwZVhCbGN5OWhlR1Z6TG1weklsMHNJbTVoYldWeklqcGJYU3dpYldGd2NHbHVaM01pT2lJN096czdPenM3T3pzN096czdPMnRDUVVsbE8wRkJRMWdzYTBKQlFXTXNZVUZCV1N4WlFVRmFPenM3T3pzN096czdPMEZCVldRc1YwRkJUeXhWUVVGRExFdEJRVVFzUlVGQlZ6dEJRVU5rTEZsQlFVMHNZMEZCWXl4blEwRkJiMElzUzBGQmNFSXNRMEZCWkN4RFFVUlJPMEZCUldRc1dVRkJUU3hWUVVGVkxGbEJRVmtzVFVGQldpeERRVVpHTzBGQlIyUXNXVUZCVFN4aFFVRmhPMEZCUTJZc1pVRkJSeXhaUVVGWkxFTkJRVm9zUTBGQlNEdEJRVU5CTEdWQlFVY3NUMEZCUXl4SFFVRlZMRU5CUVZZc1IwRkJaU3haUVVGWkxFTkJRVm9zUTBGQmFFSXNSMEZCYVVNc1dVRkJXU3hEUVVGYUxFTkJRV3BETzFOQlJrUXNRMEZJVVRzN1FVRlJaQ3haUVVGSkxGVkJRVlVzUTBGQlZpeEZRVUZoTzBGQlEySXNkVUpCUVZjc1EwRkJXQ3hIUVVGbExGbEJRVmtzUTBGQldpeERRVUZtTEVOQlJHRTdVMEZCYWtJN08wRkJTVUVzWlVGQlR5eFZRVUZRTEVOQldtTTdTMEZCV0RzN1FVRmxVQ3hoUVVGVExGVkJRVU1zVFVGQlJEdGxRVUZaTERSQ1FVRm5RaXhOUVVGb1FpeHZRa0ZCT0VJc1IwRkJPVUk3UzBGQldpSXNJbVpwYkdVaU9pSmhlR1Z6TG1weklpd2ljMjkxY21ObFVtOXZkQ0k2SWk5VmMyVnljeTlOWVhSMEwxTnBkR1Z6TDNCdmNHMXZkR2x2YmlJc0luTnZkWEpqWlhORGIyNTBaVzUwSWpwYkltbHRjRzl5ZENCN0lHTnlaV0YwWlVSbGJHbHRhWFJsWkN3Z2MzQnNhWFJUY0dGalpVUmxiR2x0YVhSbFpDQjlJR1p5YjIwZ0p5NHVMMmx1WXk5MWRHbHNjeWM3WEc1cGJYQnZjblFnY0hoV1lXeDFaVlI1Y0dVZ1puSnZiU0FuTGk5d2VDYzdYRzVwYlhCdmNuUWdleUJoZUdWeklIMGdabkp2YlNBbkxpOXpaWFIwYVc1bmN5OWthV04wYVc5dVlYSjVKenRjYmx4dVpYaHdiM0owSUdSbFptRjFiSFFnZTF4dUlDQWdJR1JsWm1GMWJIUlFjbTl3Y3pvZ2NIaFdZV3gxWlZSNWNHVXVaR1ZtWVhWc2RGQnliM0J6TEZ4dUlDQWdJQ0FnSUNCY2JpQWdJQ0F2S2x4dUlDQWdJQ0FnSUNCVGNHeHBkQ0J3YjNOcGRHbHZibk1nYVc0Z1ptOXliV0YwSUZ3aVdDQlpJRnBjSWx4dUlDQWdJQ0FnSUNCY2JpQWdJQ0FnSUNBZ1FIQmhjbUZ0SUZ0emRISnBibWRkT2lCUWIzTnBkR2x2YmlCMllXeDFaWE5jYmlBZ0lDQWdJQ0FnSUNBZ0lGd2lNakFsSURNd0pTQXdYQ0lnTFQ0Z2V6SXdKU3dnTXpBbExDQXdmVnh1SUNBZ0lDQWdJQ0FnSUNBZ1hDSXlNQ1VnTXpBbFhDSWdMVDRnZXpJd0pTd2dNekFsZlZ4dUlDQWdJQ0FnSUNBZ0lDQWdYQ0l5TUNWY0lpQXRQaUI3TWpBbExDQXlNQ1Y5WEc0Z0lDQWdLaTljYmlBZ0lDQnpjR3hwZERvZ0tIWmhiSFZsS1NBOVBpQjdYRzRnSUNBZ0lDQWdJR052Ym5OMElITndiR2wwVm1Gc2RXVnpJRDBnYzNCc2FYUlRjR0ZqWlVSbGJHbHRhWFJsWkNoMllXeDFaU2s3WEc0Z0lDQWdJQ0FnSUdOdmJuTjBJRzUxYlVGNFpYTWdQU0J6Y0d4cGRGWmhiSFZsY3k1c1pXNW5kR2c3WEc0Z0lDQWdJQ0FnSUdOdmJuTjBJSE53YkdsMFZtRnNkV1VnUFNCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0JZT2lCemNHeHBkRlpoYkhWbGMxc3dYU3hjYmlBZ0lDQWdJQ0FnSUNBZ0lGazZJQ2h1ZFcxQmVHVnpJRDRnTVNrZ1B5QnpjR3hwZEZaaGJIVmxjMXN4WFNBNklITndiR2wwVm1Gc2RXVnpXekJkWEc0Z0lDQWdJQ0FnSUgwN1hHNWNiaUFnSUNBZ0lDQWdhV1lnS0c1MWJVRjRaWE1nUGlBeUtTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNCemNHeHBkRlpoYkhWbExsb2dQU0J6Y0d4cGRGWmhiSFZsYzFzeVhUdGNiaUFnSUNBZ0lDQWdmVnh1WEc0Z0lDQWdJQ0FnSUhKbGRIVnliaUJ6Y0d4cGRGWmhiSFZsTzF4dUlDQWdJSDBzWEc1Y2JpQWdJQ0JqYjIxaWFXNWxPaUFvZG1Gc2RXVnpLU0E5UGlCamNtVmhkR1ZFWld4cGJXbDBaV1FvZG1Gc2RXVnpMQ0JoZUdWekxDQW5JQ2NwWEc1OU8xeHVJbDE5XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy92YWx1ZS10eXBlcy9heGVzLmpzXG4gKiogbW9kdWxlIGlkID0gMjFcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxudmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF9yZ2IgPSByZXF1aXJlKCcuL3JnYicpO1xuXG52YXIgX3JnYjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZ2IpO1xuXG52YXIgX2hzbCA9IHJlcXVpcmUoJy4vaHNsJyk7XG5cbnZhciBfaHNsMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2hzbCk7XG5cbnZhciBfaGV4ID0gcmVxdWlyZSgnLi9oZXgnKTtcblxudmFyIF9oZXgyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfaGV4KTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxudmFyIGNvbG9yVHlwZXMgPSBbX3JnYjIuZGVmYXVsdCwgX2hzbDIuZGVmYXVsdCwgX2hleDIuZGVmYXVsdF07XG52YXIgbnVtQ29sb3JUeXBlcyA9IGNvbG9yVHlwZXMubGVuZ3RoO1xuXG5leHBvcnRzLmRlZmF1bHQgPSB7XG4gICAgZGVmYXVsdFByb3BzOiBfZXh0ZW5kcyh7fSwgX3JnYjIuZGVmYXVsdC5kZWZhdWx0UHJvcHMsIF9oc2wyLmRlZmF1bHQuZGVmYXVsdFByb3BzKSxcblxuICAgIHRlc3Q6IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICByZXR1cm4gX3JnYjIuZGVmYXVsdC50ZXN0KHZhbHVlKSB8fCBfaGV4Mi5kZWZhdWx0LnRlc3QodmFsdWUpIHx8IF9oc2wyLmRlZmF1bHQudGVzdCh2YWx1ZSk7XG4gICAgfSxcblxuICAgIHNwbGl0OiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBudW1Db2xvclR5cGVzOyBpKyspIHtcbiAgICAgICAgICAgIGlmIChjb2xvclR5cGVzW2ldLnRlc3QodmFsdWUpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGNvbG9yVHlwZXNbaV0uc3BsaXQodmFsdWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSxcblxuICAgIGNvbWJpbmU6IGZ1bmN0aW9uICh2YWx1ZXMpIHtcbiAgICAgICAgcmV0dXJuIHZhbHVlcy5SZWQgIT09IHVuZGVmaW5lZCA/IF9yZ2IyLmRlZmF1bHQuY29tYmluZSh2YWx1ZXMpIDogX2hzbDIuZGVmYXVsdC5jb21iaW5lKHZhbHVlcyk7XG4gICAgfVxufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbk55WXk5MllXeDFaUzEwZVhCbGN5OWpiMnh2Y2k1cWN5SmRMQ0p1WVcxbGN5STZXMTBzSW0xaGNIQnBibWR6SWpvaU96czdPenM3T3pzN096czdPenM3T3pzN096dEJRVWxCTEVsQlFVMHNZVUZCWVN3MlEwRkJZanRCUVVOT0xFbEJRVTBzWjBKQlFXZENMRmRCUVZjc1RVRkJXRHM3YTBKQlJWQTdRVUZEV0N3clFrRkJiVUlzWTBGQlNTeFpRVUZLTEVWQlFYRkNMR05CUVVrc1dVRkJTaXhEUVVGNFF6czdRVUZGUVN4VlFVRk5MRlZCUVVNc1MwRkJSRHRsUVVGWExHTkJRVWtzU1VGQlNpeERRVUZUTEV0QlFWUXNTMEZCYlVJc1kwRkJTU3hKUVVGS0xFTkJRVk1zUzBGQlZDeERRVUZ1UWl4SlFVRnpReXhqUVVGSkxFbEJRVW9zUTBGQlV5eExRVUZVTEVOQlFYUkRPMHRCUVZnN08wRkJSVTRzVjBGQlR5eFZRVUZETEV0QlFVUXNSVUZCVnp0QlFVTmtMR0ZCUVVzc1NVRkJTU3hKUVVGSkxFTkJRVW9zUlVGQlR5eEpRVUZKTEdGQlFVb3NSVUZCYlVJc1IwRkJia01zUlVGQmQwTTdRVUZEY0VNc1owSkJRVWtzVjBGQlZ5eERRVUZZTEVWQlFXTXNTVUZCWkN4RFFVRnRRaXhMUVVGdVFpeERRVUZLTEVWQlFTdENPMEZCUXpOQ0xIVkNRVUZQTEZkQlFWY3NRMEZCV0N4RlFVRmpMRXRCUVdRc1EwRkJiMElzUzBGQmNFSXNRMEZCVUN4RFFVUXlRanRoUVVFdlFqdFRRVVJLTzB0QlJFYzdPMEZCVVZBc1lVRkJVeXhWUVVGRExFMUJRVVE3WlVGQldTeE5RVUZETEVOQlFVOHNSMEZCVUN4TFFVRmxMRk5CUVdZc1IwRkJORUlzWTBGQlNTeFBRVUZLTEVOQlFWa3NUVUZCV2l4RFFVRTNRaXhIUVVGdFJDeGpRVUZKTEU5QlFVb3NRMEZCV1N4TlFVRmFMRU5CUVc1RU8wdEJRVm9pTENKbWFXeGxJam9pWTI5c2IzSXVhbk1pTENKemIzVnlZMlZTYjI5MElqb2lMMVZ6WlhKekwwMWhkSFF2VTJsMFpYTXZjRzl3Ylc5MGFXOXVJaXdpYzI5MWNtTmxjME52Ym5SbGJuUWlPbHNpYVcxd2IzSjBJSEpuWWlCbWNtOXRJQ2N1TDNKbllpYzdYRzVwYlhCdmNuUWdhSE5zSUdaeWIyMGdKeTR2YUhOc0p6dGNibWx0Y0c5eWRDQm9aWGdnWm5KdmJTQW5MaTlvWlhnbk8xeHVYRzVqYjI1emRDQmpiMnh2Y2xSNWNHVnpJRDBnVzNKbllpd2dhSE5zTENCb1pYaGRPMXh1WTI5dWMzUWdiblZ0UTI5c2IzSlVlWEJsY3lBOUlHTnZiRzl5Vkhsd1pYTXViR1Z1WjNSb08xeHVYRzVsZUhCdmNuUWdaR1ZtWVhWc2RDQjdYRzRnSUNBZ1pHVm1ZWFZzZEZCeWIzQnpPaUI3SUM0dUxuSm5ZaTVrWldaaGRXeDBVSEp2Y0hNc0lDNHVMbWh6YkM1a1pXWmhkV3gwVUhKdmNITWdmU3hjYmx4dUlDQWdJSFJsYzNRNklDaDJZV3gxWlNrZ1BUNGdjbWRpTG5SbGMzUW9kbUZzZFdVcElIeDhJR2hsZUM1MFpYTjBLSFpoYkhWbEtTQjhmQ0JvYzJ3dWRHVnpkQ2gyWVd4MVpTa3NYRzVjYmlBZ0lDQnpjR3hwZERvZ0tIWmhiSFZsS1NBOVBpQjdYRzRnSUNBZ0lDQWdJR1p2Y2lBb2JHVjBJR2tnUFNBd095QnBJRHdnYm5WdFEyOXNiM0pVZVhCbGN6c2dhU3NyS1NCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0JwWmlBb1kyOXNiM0pVZVhCbGMxdHBYUzUwWlhOMEtIWmhiSFZsS1NrZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lISmxkSFZ5YmlCamIyeHZjbFI1Y0dWelcybGRMbk53YkdsMEtIWmhiSFZsS1R0Y2JpQWdJQ0FnSUNBZ0lDQWdJSDFjYmlBZ0lDQWdJQ0FnZlZ4dUlDQWdJSDBzWEc1Y2JpQWdJQ0JqYjIxaWFXNWxPaUFvZG1Gc2RXVnpLU0E5UGlBb2RtRnNkV1Z6TGxKbFpDQWhQVDBnZFc1a1pXWnBibVZrS1NBL0lISm5ZaTVqYjIxaWFXNWxLSFpoYkhWbGN5a2dPaUJvYzJ3dVkyOXRZbWx1WlNoMllXeDFaWE1wWEc1OU8xeHVJbDE5XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy92YWx1ZS10eXBlcy9jb2xvci5qc1xuICoqIG1vZHVsZSBpZCA9IDIyXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfdXRpbHMgPSByZXF1aXJlKCcuLi9pbmMvdXRpbHMnKTtcblxudmFyIEZMT0FUX1JFR0VYID0gLygtKT8oXFxkW1xcZFxcLl0qKS9nO1xudmFyIGdlbmVyYXRlVG9rZW4gPSBmdW5jdGlvbiAodG9rZW4pIHtcbiAgICByZXR1cm4gJyR7JyArIHRva2VuICsgJ30nO1xufTtcblxuZXhwb3J0cy5kZWZhdWx0ID0ge1xuXG4gICAgdGVzdDogZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgIHZhciBtYXRjaGVzID0gdmFsdWUubWF0Y2goRkxPQVRfUkVHRVgpO1xuICAgICAgICByZXR1cm4gKDAsIF91dGlscy5pc0FycmF5KShtYXRjaGVzKSAmJiBtYXRjaGVzLmxlbmd0aCA+IDE7XG4gICAgfSxcblxuICAgIHRlbXBsYXRlOiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgdmFyIGNvdW50ZXIgPSAwO1xuICAgICAgICByZXR1cm4gdmFsdWUucmVwbGFjZShGTE9BVF9SRUdFWCwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIGdlbmVyYXRlVG9rZW4oY291bnRlcisrKTtcbiAgICAgICAgfSk7XG4gICAgfSxcblxuICAgIHNwbGl0OiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgdmFyIHNwbGl0VmFsdWUgPSB7fTtcblxuICAgICAgICB2YWx1ZS5tYXRjaChGTE9BVF9SRUdFWCkuZm9yRWFjaChmdW5jdGlvbiAodmFsdWUsIGkpIHtcbiAgICAgICAgICAgIHJldHVybiBzcGxpdFZhbHVlW2ldID0gdmFsdWU7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiBzcGxpdFZhbHVlO1xuICAgIH0sXG5cbiAgICBjb21iaW5lOiBmdW5jdGlvbiAodmFsdWVzLCB0ZW1wbGF0ZSkge1xuICAgICAgICBmb3IgKHZhciBrZXkgaW4gdmFsdWVzKSB7XG4gICAgICAgICAgICBpZiAodmFsdWVzLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICAgICAgICB0ZW1wbGF0ZSA9IHRlbXBsYXRlLnJlcGxhY2UoZ2VuZXJhdGVUb2tlbihrZXkpLCB2YWx1ZXNba2V5XSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGVtcGxhdGU7XG4gICAgfVxuXG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluTnlZeTkyWVd4MVpTMTBlWEJsY3k5amIyMXdiR1Y0TG1weklsMHNJbTVoYldWeklqcGJYU3dpYldGd2NHbHVaM01pT2lJN096czdPenRCUVVWQkxFbEJRVTBzWTBGQll5eHJRa0ZCWkR0QlFVTk9MRWxCUVUwc1owSkJRV2RDTEZWQlFVTXNTMEZCUkR0WFFVRlhMRTlCUVU4c1MwRkJVQ3hIUVVGbExFZEJRV1k3UTBGQldEczdhMEpCUlZBN08wRkJSVmdzVlVGQlRTeFZRVUZETEV0QlFVUXNSVUZCVnp0QlFVTmlMRmxCUVUwc1ZVRkJWU3hOUVVGTkxFdEJRVTRzUTBGQldTeFhRVUZhTEVOQlFWWXNRMEZFVHp0QlFVVmlMR1ZCUVZFc2IwSkJRVkVzVDBGQlVpeExRVUZ2UWl4UlFVRlJMRTFCUVZJc1IwRkJhVUlzUTBGQmFrSXNRMEZHWmp0TFFVRllPenRCUVV0T0xHTkJRVlVzVlVGQlF5eExRVUZFTEVWQlFWYzdRVUZEYWtJc1dVRkJTU3hWUVVGVkxFTkJRVllzUTBGRVlUdEJRVVZxUWl4bFFVRlBMRTFCUVUwc1QwRkJUaXhEUVVGakxGZEJRV1FzUlVGQk1rSTdiVUpCUVUwc1kwRkJZeXhUUVVGa08xTkJRVTRzUTBGQmJFTXNRMEZHYVVJN1MwRkJXRHM3UVVGTFZpeFhRVUZQTEZWQlFVTXNTMEZCUkN4RlFVRlhPMEZCUTJRc1dVRkJUU3hoUVVGaExFVkJRV0lzUTBGRVVUczdRVUZIWkN4alFVRk5MRXRCUVU0c1EwRkJXU3hYUVVGYUxFVkJRWGxDTEU5QlFYcENMRU5CUVdsRExGVkJRVU1zUzBGQlJDeEZRVUZSTEVOQlFWSTdiVUpCUVdNc1YwRkJWeXhEUVVGWUxFbEJRV2RDTEV0QlFXaENPMU5CUVdRc1EwRkJha01zUTBGSVl6czdRVUZMWkN4bFFVRlBMRlZCUVZBc1EwRk1ZenRMUVVGWU96dEJRVkZRTEdGQlFWTXNWVUZCUXl4TlFVRkVMRVZCUVZNc1VVRkJWQ3hGUVVGelFqdEJRVU16UWl4aFFVRkxMRWxCUVVrc1IwRkJTaXhKUVVGWExFMUJRV2hDTEVWQlFYZENPMEZCUTNCQ0xHZENRVUZKTEU5QlFVOHNZMEZCVUN4RFFVRnpRaXhIUVVGMFFpeERRVUZLTEVWQlFXZERPMEZCUXpWQ0xESkNRVUZYTEZOQlFWTXNUMEZCVkN4RFFVRnBRaXhqUVVGakxFZEJRV1FzUTBGQmFrSXNSVUZCY1VNc1QwRkJUeXhIUVVGUUxFTkJRWEpETEVOQlFWZ3NRMEZFTkVJN1lVRkJhRU03VTBGRVNqczdRVUZOUVN4bFFVRlBMRkZCUVZBc1EwRlFNa0k3UzBGQmRFSWlMQ0ptYVd4bElqb2lZMjl0Y0d4bGVDNXFjeUlzSW5OdmRYSmpaVkp2YjNRaU9pSXZWWE5sY25NdlRXRjBkQzlUYVhSbGN5OXdiM0J0YjNScGIyNGlMQ0p6YjNWeVkyVnpRMjl1ZEdWdWRDSTZXeUpwYlhCdmNuUWdleUJwYzBGeWNtRjVJSDBnWm5KdmJTQW5MaTR2YVc1akwzVjBhV3h6Snp0Y2JseHVZMjl1YzNRZ1JreFBRVlJmVWtWSFJWZ2dQU0F2S0MwcFB5aGNYR1JiWEZ4a1hGd3VYU29wTDJjN1hHNWpiMjV6ZENCblpXNWxjbUYwWlZSdmEyVnVJRDBnS0hSdmEyVnVLU0E5UGlBbkpIc25JQ3NnZEc5clpXNGdLeUFuZlNjN1hHNWNibVY0Y0c5eWRDQmtaV1poZFd4MElIdGNibHh1SUNBZ0lIUmxjM1E2SUNoMllXeDFaU2tnUFQ0Z2UxeHVJQ0FnSUNBZ0lDQmpiMjV6ZENCdFlYUmphR1Z6SUQwZ2RtRnNkV1V1YldGMFkyZ29Sa3hQUVZSZlVrVkhSVmdwTzF4dUlDQWdJQ0FnSUNCeVpYUjFjbTRnS0dselFYSnlZWGtvYldGMFkyaGxjeWtnSmlZZ2JXRjBZMmhsY3k1c1pXNW5kR2dnUGlBeEtUdGNiaUFnSUNCOUxGeHVYRzRnSUNBZ2RHVnRjR3hoZEdVNklDaDJZV3gxWlNrZ1BUNGdlMXh1SUNBZ0lDQWdJQ0JzWlhRZ1kyOTFiblJsY2lBOUlEQTdYRzRnSUNBZ0lDQWdJSEpsZEhWeWJpQjJZV3gxWlM1eVpYQnNZV05sS0VaTVQwRlVYMUpGUjBWWUxDQW9LU0E5UGlCblpXNWxjbUYwWlZSdmEyVnVLR052ZFc1MFpYSXJLeWtwTzF4dUlDQWdJSDBzWEc1Y2JpQWdJQ0J6Y0d4cGREb2dLSFpoYkhWbEtTQTlQaUI3WEc0Z0lDQWdJQ0FnSUdOdmJuTjBJSE53YkdsMFZtRnNkV1VnUFNCN2ZUdGNiaUFnSUNBZ0lDQWdYRzRnSUNBZ0lDQWdJSFpoYkhWbExtMWhkR05vS0VaTVQwRlVYMUpGUjBWWUtTNW1iM0pGWVdOb0tDaDJZV3gxWlN3Z2FTa2dQVDRnYzNCc2FYUldZV3gxWlZ0cFhTQTlJSFpoYkhWbEtUdGNibHh1SUNBZ0lDQWdJQ0J5WlhSMWNtNGdjM0JzYVhSV1lXeDFaVHRjYmlBZ0lDQjlMRnh1WEc0Z0lDQWdZMjl0WW1sdVpUb2dLSFpoYkhWbGN5d2dkR1Z0Y0d4aGRHVXBJRDArSUh0Y2JpQWdJQ0FnSUNBZ1ptOXlJQ2hzWlhRZ2EyVjVJR2x1SUhaaGJIVmxjeWtnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdhV1lnS0haaGJIVmxjeTVvWVhOUGQyNVFjbTl3WlhKMGVTaHJaWGtwS1NCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2RHVnRjR3hoZEdVZ1BTQjBaVzF3YkdGMFpTNXlaWEJzWVdObEtHZGxibVZ5WVhSbFZHOXJaVzRvYTJWNUtTd2dkbUZzZFdWelcydGxlVjBwTzF4dUlDQWdJQ0FnSUNBZ0lDQWdmVnh1SUNBZ0lDQWdJQ0I5WEc1Y2JpQWdJQ0FnSUNBZ2NtVjBkWEp1SUhSbGJYQnNZWFJsTzF4dUlDQWdJSDFjYmx4dWZUc2lYWDA9XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy92YWx1ZS10eXBlcy9jb21wbGV4LmpzXG4gKiogbW9kdWxlIGlkID0gMjNcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF9yZ2IgPSByZXF1aXJlKCcuL3JnYicpO1xuXG52YXIgX3JnYjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZ2IpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5leHBvcnRzLmRlZmF1bHQgPSB7XG4gICAgZGVmYXVsdFByb3BzOiBfcmdiMi5kZWZhdWx0LmRlZmF1bHRQcm9wcyxcblxuICAgIHRlc3Q6IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICByZXR1cm4gdmFsdWUgJiYgdmFsdWUuaW5kZXhPZignIycpID4gLTE7XG4gICAgfSxcblxuICAgIHNwbGl0OiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgdmFyIHIgPSB1bmRlZmluZWQsXG4gICAgICAgICAgICBnID0gdW5kZWZpbmVkLFxuICAgICAgICAgICAgYiA9IHVuZGVmaW5lZDtcblxuICAgICAgICAvLyBJZiB3ZSBoYXZlIDYgY2hhcmFjdGVycywgaWUgI0ZGMDAwMFxuICAgICAgICBpZiAodmFsdWUubGVuZ3RoID4gNCkge1xuICAgICAgICAgICAgciA9IHZhbHVlLnN1YnN0cigxLCAyKTtcbiAgICAgICAgICAgIGcgPSB2YWx1ZS5zdWJzdHIoMywgMik7XG4gICAgICAgICAgICBiID0gdmFsdWUuc3Vic3RyKDUsIDIpO1xuXG4gICAgICAgICAgICAvLyBPciB3ZSBoYXZlIDMgY2hhcmFjdGVycywgaWUgI0YwMFxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHIgPSB2YWx1ZS5zdWJzdHIoMSwgMSk7XG4gICAgICAgICAgICAgICAgZyA9IHZhbHVlLnN1YnN0cigyLCAxKTtcbiAgICAgICAgICAgICAgICBiID0gdmFsdWUuc3Vic3RyKDMsIDEpO1xuICAgICAgICAgICAgICAgIHIgKz0gcjtcbiAgICAgICAgICAgICAgICBnICs9IGc7XG4gICAgICAgICAgICAgICAgYiArPSBiO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBSZWQ6IHBhcnNlSW50KHIsIDE2KSxcbiAgICAgICAgICAgIEdyZWVuOiBwYXJzZUludChnLCAxNiksXG4gICAgICAgICAgICBCbHVlOiBwYXJzZUludChiLCAxNiksXG4gICAgICAgICAgICBBbHBoYTogMVxuICAgICAgICB9O1xuICAgIH0sXG5cbiAgICBjb21iaW5lOiBmdW5jdGlvbiAodmFsdWVzKSB7XG4gICAgICAgIHJldHVybiBfcmdiMi5kZWZhdWx0LmNvbWJpbmUodmFsdWVzKTtcbiAgICB9XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluTnlZeTkyWVd4MVpTMTBlWEJsY3k5b1pYZ3Vhbk1pWFN3aWJtRnRaWE1pT2x0ZExDSnRZWEJ3YVc1bmN5STZJanM3T3pzN096czdPenRyUWtGRlpUdEJRVU5ZTEd0Q1FVRmpMR05CUVVrc1dVRkJTanM3UVVGRlpDeFZRVUZOTEZWQlFVTXNTMEZCUkR0bFFVRlpMRk5CUVZNc1RVRkJUU3hQUVVGT0xFTkJRV01zUjBGQlpDeEpRVUZ4UWl4RFFVRkRMRU5CUVVRN1MwRkJNVU03TzBGQlJVNHNWMEZCVHl4VlFVRkRMRXRCUVVRc1JVRkJWenRCUVVOa0xGbEJRVWtzWVVGQlNqdFpRVUZQTEdGQlFWQTdXVUZCVlN4aFFVRldPenM3UVVGRVl5eFpRVWxXTEUxQlFVMHNUVUZCVGl4SFFVRmxMRU5CUVdZc1JVRkJhMEk3UVVGRGJFSXNaMEpCUVVrc1RVRkJUU3hOUVVGT0xFTkJRV0VzUTBGQllpeEZRVUZuUWl4RFFVRm9RaXhEUVVGS0xFTkJSR3RDTzBGQlJXeENMR2RDUVVGSkxFMUJRVTBzVFVGQlRpeERRVUZoTEVOQlFXSXNSVUZCWjBJc1EwRkJhRUlzUTBGQlNpeERRVVpyUWp0QlFVZHNRaXhuUWtGQlNTeE5RVUZOTEUxQlFVNHNRMEZCWVN4RFFVRmlMRVZCUVdkQ0xFTkJRV2hDTEVOQlFVbzdPenRCUVVoclFpeFRRVUYwUWl4TlFVMVBPMEZCUTBnc2IwSkJRVWtzVFVGQlRTeE5RVUZPTEVOQlFXRXNRMEZCWWl4RlFVRm5RaXhEUVVGb1FpeERRVUZLTEVOQlJFYzdRVUZGU0N4dlFrRkJTU3hOUVVGTkxFMUJRVTRzUTBGQllTeERRVUZpTEVWQlFXZENMRU5CUVdoQ0xFTkJRVW9zUTBGR1J6dEJRVWRJTEc5Q1FVRkpMRTFCUVUwc1RVRkJUaXhEUVVGaExFTkJRV0lzUlVGQlowSXNRMEZCYUVJc1EwRkJTaXhEUVVoSE8wRkJTVWdzY1VKQlFVc3NRMEZCVEN4RFFVcEhPMEZCUzBnc2NVSkJRVXNzUTBGQlRDeERRVXhITzBGQlRVZ3NjVUpCUVVzc1EwRkJUQ3hEUVU1SE8yRkJUbEE3TzBGQlpVRXNaVUZCVHp0QlFVTklMR2xDUVVGTExGTkJRVk1zUTBGQlZDeEZRVUZaTEVWQlFWb3NRMEZCVER0QlFVTkJMRzFDUVVGUExGTkJRVk1zUTBGQlZDeEZRVUZaTEVWQlFWb3NRMEZCVUR0QlFVTkJMR3RDUVVGTkxGTkJRVk1zUTBGQlZDeEZRVUZaTEVWQlFWb3NRMEZCVGp0QlFVTkJMRzFDUVVGUExFTkJRVkE3VTBGS1NpeERRVzVDWXp0TFFVRllPenRCUVRKQ1VDeGhRVUZUTEZWQlFVTXNUVUZCUkR0bFFVRlpMR05CUVVrc1QwRkJTaXhEUVVGWkxFMUJRVm83UzBGQldpSXNJbVpwYkdVaU9pSm9aWGd1YW5NaUxDSnpiM1Z5WTJWU2IyOTBJam9pTDFWelpYSnpMMDFoZEhRdlUybDBaWE12Y0c5d2JXOTBhVzl1SWl3aWMyOTFjbU5sYzBOdmJuUmxiblFpT2xzaWFXMXdiM0owSUhKbllpQm1jbTl0SUNjdUwzSm5ZaWM3WEc1Y2JtVjRjRzl5ZENCa1pXWmhkV3gwSUh0Y2JpQWdJQ0JrWldaaGRXeDBVSEp2Y0hNNklISm5ZaTVrWldaaGRXeDBVSEp2Y0hNc1hHNWNiaUFnSUNCMFpYTjBPaUFvZG1Gc2RXVXBJRDArSUNoMllXeDFaU0FtSmlCMllXeDFaUzVwYm1SbGVFOW1LQ2NqSnlrZ1BpQXRNU2tzWEc1Y2JpQWdJQ0J6Y0d4cGREb2dLSFpoYkhWbEtTQTlQaUI3WEc0Z0lDQWdJQ0FnSUd4bGRDQnlMQ0JuTENCaU8xeHVYRzRnSUNBZ0lDQWdJQzh2SUVsbUlIZGxJR2hoZG1VZ05pQmphR0Z5WVdOMFpYSnpMQ0JwWlNBalJrWXdNREF3WEc0Z0lDQWdJQ0FnSUdsbUlDaDJZV3gxWlM1c1pXNW5kR2dnUGlBMEtTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNCeUlEMGdkbUZzZFdVdWMzVmljM1J5S0RFc0lESXBPMXh1SUNBZ0lDQWdJQ0FnSUNBZ1p5QTlJSFpoYkhWbExuTjFZbk4wY2lnekxDQXlLVHRjYmlBZ0lDQWdJQ0FnSUNBZ0lHSWdQU0IyWVd4MVpTNXpkV0p6ZEhJb05Td2dNaWs3WEc1Y2JpQWdJQ0FnSUNBZ0x5OGdUM0lnZDJVZ2FHRjJaU0F6SUdOb1lYSmhZM1JsY25Nc0lHbGxJQ05HTURCY2JpQWdJQ0FnSUNBZ2ZTQmxiSE5sSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJSElnUFNCMllXeDFaUzV6ZFdKemRISW9NU3dnTVNrN1hHNGdJQ0FnSUNBZ0lDQWdJQ0JuSUQwZ2RtRnNkV1V1YzNWaWMzUnlLRElzSURFcE8xeHVJQ0FnSUNBZ0lDQWdJQ0FnWWlBOUlIWmhiSFZsTG5OMVluTjBjaWd6TENBeEtUdGNiaUFnSUNBZ0lDQWdJQ0FnSUhJZ0t6MGdjanRjYmlBZ0lDQWdJQ0FnSUNBZ0lHY2dLejBnWnp0Y2JpQWdJQ0FnSUNBZ0lDQWdJR0lnS3owZ1lqdGNiaUFnSUNBZ0lDQWdmVnh1WEc0Z0lDQWdJQ0FnSUhKbGRIVnliaUI3WEc0Z0lDQWdJQ0FnSUNBZ0lDQlNaV1E2SUhCaGNuTmxTVzUwS0hJc0lERTJLU3hjYmlBZ0lDQWdJQ0FnSUNBZ0lFZHlaV1Z1T2lCd1lYSnpaVWx1ZENobkxDQXhOaWtzWEc0Z0lDQWdJQ0FnSUNBZ0lDQkNiSFZsT2lCd1lYSnpaVWx1ZENoaUxDQXhOaWtzWEc0Z0lDQWdJQ0FnSUNBZ0lDQkJiSEJvWVRvZ01WeHVJQ0FnSUNBZ0lDQjlPMXh1SUNBZ0lIMHNYRzVjYmlBZ0lDQmpiMjFpYVc1bE9pQW9kbUZzZFdWektTQTlQaUJ5WjJJdVkyOXRZbWx1WlNoMllXeDFaWE1wWEc1OU95SmRmUT09XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy92YWx1ZS10eXBlcy9oZXguanNcbiAqKiBtb2R1bGUgaWQgPSAyNFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX2RlZmF1bHRQcm9wcyA9IHJlcXVpcmUoJy4vc2V0dGluZ3MvZGVmYXVsdC1wcm9wcycpO1xuXG52YXIgX2RpY3Rpb25hcnkgPSByZXF1aXJlKCcuL3NldHRpbmdzL2RpY3Rpb25hcnknKTtcblxudmFyIF91dGlscyA9IHJlcXVpcmUoJy4uL2luYy91dGlscycpO1xuXG5leHBvcnRzLmRlZmF1bHQgPSB7XG4gICAgZGVmYXVsdFByb3BzOiB7XG4gICAgICAgIEh1ZToge1xuICAgICAgICAgICAgbWluOiAwLFxuICAgICAgICAgICAgbWF4OiAzNjBcbiAgICAgICAgfSxcbiAgICAgICAgU2F0dXJhdGlvbjogX2RlZmF1bHRQcm9wcy5wZXJjZW50LFxuICAgICAgICBMaWdodG5lc3M6IF9kZWZhdWx0UHJvcHMucGVyY2VudCxcbiAgICAgICAgQWxwaGE6IF9kZWZhdWx0UHJvcHMub3BhY2l0eVxuICAgIH0sXG5cbiAgICB0ZXN0OiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIHZhbHVlICYmIHZhbHVlLmluZGV4T2YoJ2hzbCcpID4gLTE7XG4gICAgfSxcblxuICAgIHNwbGl0OiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgcmV0dXJuICgwLCBfdXRpbHMuZ2V0Q29sb3JWYWx1ZXMpKHZhbHVlLCBfZGljdGlvbmFyeS5oc2wpO1xuICAgIH0sXG5cbiAgICBjb21iaW5lOiBmdW5jdGlvbiAodmFsdWVzKSB7XG4gICAgICAgIHJldHVybiAoMCwgX3V0aWxzLmNyZWF0ZUZ1bmN0aW9uU3RyaW5nKSgoMCwgX3V0aWxzLmNyZWF0ZURlbGltaXRlZCkodmFsdWVzLCBfZGljdGlvbmFyeS5oc2wsICcsICcsIDIpLCAnaHNsYScpO1xuICAgIH1cbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5OeVl5OTJZV3gxWlMxMGVYQmxjeTlvYzJ3dWFuTWlYU3dpYm1GdFpYTWlPbHRkTENKdFlYQndhVzVuY3lJNklqczdPenM3T3pzN096dHJRa0ZKWlR0QlFVTllMR3RDUVVGak8wRkJRMVlzWVVGQlN6dEJRVU5FTEdsQ1FVRkxMRU5CUVV3N1FVRkRRU3hwUWtGQlN5eEhRVUZNTzFOQlJrbzdRVUZKUVN4NVEwRk1WVHRCUVUxV0xIZERRVTVWTzBGQlQxWXNiME5CVUZVN1MwRkJaRHM3UVVGVlFTeFZRVUZOTEZWQlFVTXNTMEZCUkR0bFFVRlpMRk5CUVZNc1RVRkJUU3hQUVVGT0xFTkJRV01zUzBGQlpDeEpRVUYxUWl4RFFVRkRMRU5CUVVRN1MwRkJOVU03TzBGQlJVNHNWMEZCVHl4VlFVRkRMRXRCUVVRN1pVRkJWeXd5UWtGQlpTeExRVUZtTzB0QlFWZzdPMEZCUlZBc1lVRkJVeXhWUVVGRExFMUJRVVE3WlVGQldTeHBRMEZCY1VJc05FSkJRV2RDTEUxQlFXaENMRzFDUVVGclF5eEpRVUZzUXl4RlFVRjNReXhEUVVGNFF5eERRVUZ5UWl4RlFVRnBSU3hOUVVGcVJUdExRVUZhSWl3aVptbHNaU0k2SW1oemJDNXFjeUlzSW5OdmRYSmpaVkp2YjNRaU9pSXZWWE5sY25NdlRXRjBkQzlUYVhSbGN5OXdiM0J0YjNScGIyNGlMQ0p6YjNWeVkyVnpRMjl1ZEdWdWRDSTZXeUpwYlhCdmNuUWdleUJ3WlhKalpXNTBMQ0J2Y0dGamFYUjVJSDBnWm5KdmJTQW5MaTl6WlhSMGFXNW5jeTlrWldaaGRXeDBMWEJ5YjNCekp6dGNibWx0Y0c5eWRDQjdJR2h6YkNCaGN5Qm9jMnhVWlhKdGN5QjlJR1p5YjIwZ0p5NHZjMlYwZEdsdVozTXZaR2xqZEdsdmJtRnllU2M3WEc1cGJYQnZjblFnZXlCamNtVmhkR1ZFWld4cGJXbDBaV1FzSUdOeVpXRjBaVVoxYm1OMGFXOXVVM1J5YVc1bkxDQm5aWFJEYjJ4dmNsWmhiSFZsY3lCOUlHWnliMjBnSnk0dUwybHVZeTkxZEdsc2N5YzdYRzVjYm1WNGNHOXlkQ0JrWldaaGRXeDBJSHRjYmlBZ0lDQmtaV1poZFd4MFVISnZjSE02SUh0Y2JpQWdJQ0FnSUNBZ1NIVmxPaUI3WEc0Z0lDQWdJQ0FnSUNBZ0lDQnRhVzQ2SURBc1hHNGdJQ0FnSUNBZ0lDQWdJQ0J0WVhnNklETTJNRnh1SUNBZ0lDQWdJQ0I5TEZ4dUlDQWdJQ0FnSUNCVFlYUjFjbUYwYVc5dU9pQndaWEpqWlc1MExGeHVJQ0FnSUNBZ0lDQk1hV2RvZEc1bGMzTTZJSEJsY21ObGJuUXNYRzRnSUNBZ0lDQWdJRUZzY0doaE9pQnZjR0ZqYVhSNVhHNGdJQ0FnZlN4Y2JseHVJQ0FnSUhSbGMzUTZJQ2gyWVd4MVpTa2dQVDRnS0haaGJIVmxJQ1ltSUhaaGJIVmxMbWx1WkdWNFQyWW9KMmh6YkNjcElENGdMVEVwTEZ4dVhHNGdJQ0FnYzNCc2FYUTZJQ2gyWVd4MVpTa2dQVDRnWjJWMFEyOXNiM0pXWVd4MVpYTW9kbUZzZFdVc0lHaHpiRlJsY20xektTeGNibHh1SUNBZ0lHTnZiV0pwYm1VNklDaDJZV3gxWlhNcElEMCtJR055WldGMFpVWjFibU4wYVc5dVUzUnlhVzVuS0dOeVpXRjBaVVJsYkdsdGFYUmxaQ2gyWVd4MVpYTXNJR2h6YkZSbGNtMXpMQ0FuTENBbkxDQXlLU3dnSjJoemJHRW5LVnh1ZlR0Y2JpSmRmUT09XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy92YWx1ZS10eXBlcy9oc2wuanNcbiAqKiBtb2R1bGUgaWQgPSAyNVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX2RpY3Rpb25hcnkgPSByZXF1aXJlKCcuL3NldHRpbmdzL2RpY3Rpb25hcnknKTtcblxudmFyIF91dGlscyA9IHJlcXVpcmUoJy4uL2luYy91dGlscycpO1xuXG52YXIgX3B4ID0gcmVxdWlyZSgnLi9weCcpO1xuXG52YXIgX3B4MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3B4KTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZXhwb3J0cy5kZWZhdWx0ID0ge1xuICAgIGRlZmF1bHRQcm9wczogX3B4Mi5kZWZhdWx0LmRlZmF1bHRQcm9wcyxcblxuICAgIC8qXG4gICAgICAgIFNwbGl0IGRpbWVuc2lvbnMgaW4gZm9ybWF0IFwiVG9wIFJpZ2h0IEJvdHRvbSBMZWZ0XCJcbiAgICAgICAgXG4gICAgICAgIEBwYXJhbSBbc3RyaW5nXTogUG9zaXRpb24gdmFsdWVzXG4gICAgICAgICAgICBcIjIwcHggMCAzMHB4IDQwcHhcIiAtPiB7MjBweCwgMCwgMzBweCwgNDBweH1cbiAgICAgICAgICAgIFwiMjBweCAwIDMwcHhcIiAtPiB7MjBweCwgMCwgMzBweCwgMH1cbiAgICAgICAgICAgIFwiMjBweCAwXCIgLT4gezIwcHgsIDAsIDIwcHgsIDB9XG4gICAgICAgICAgICBcIjIwcHhcIiAtPiB7MjBweCwgMjBweCwgMjBweCwgMjBweH1cbiAgICAgICAgXG4gICAgICAgIEByZXR1cm4gW29iamVjdF06IE9iamVjdCB3aXRoIFQvUi9CL0wgbWV0cmljc1xuICAgICovXG4gICAgc3BsaXQ6IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICB2YXIgc3BsaXRWYWx1ZSA9IHt9O1xuICAgICAgICB2YXIgc3BsaXRQb3NpdGlvbnMgPSAoMCwgX3V0aWxzLnNwbGl0U3BhY2VEZWxpbWl0ZWQpKHZhbHVlKTtcbiAgICAgICAgdmFyIG51bVBvc2l0aW9ucyA9IHNwbGl0UG9zaXRpb25zLmxlbmd0aDtcbiAgICAgICAgdmFyIGp1bXBCYWNrID0gbnVtUG9zaXRpb25zICE9PSAxID8gMiA6IDE7XG4gICAgICAgIHZhciBqID0gMDtcblxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IDQ7IGkrKykge1xuICAgICAgICAgICAgc3BsaXRWYWx1ZVtfZGljdGlvbmFyeS5wb3NpdGlvbnNbaV1dID0gc3BsaXRQb3NpdGlvbnNbal07XG5cbiAgICAgICAgICAgIC8vIEp1bXAgYmFjayAodG8gc3RhcnQpIGNvdW50ZXIgaWYgd2UndmUgcmVhY2hlZCB0aGUgZW5kIG9mIG91ciB2YWx1ZXNcbiAgICAgICAgICAgIGorKztcbiAgICAgICAgICAgIGogPSBqID09PSBudW1Qb3NpdGlvbnMgPyBqIC0ganVtcEJhY2sgOiBqO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHNwbGl0VmFsdWU7XG4gICAgfSxcblxuICAgIGNvbWJpbmU6IGZ1bmN0aW9uICh2YWx1ZXMpIHtcbiAgICAgICAgcmV0dXJuICgwLCBfdXRpbHMuY3JlYXRlRGVsaW1pdGVkKSh2YWx1ZXMsIF9kaWN0aW9uYXJ5LnBvc2l0aW9ucywgJyAnKTtcbiAgICB9XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluTnlZeTkyWVd4MVpTMTBlWEJsY3k5d2IzTnBkR2x2Ym5NdWFuTWlYU3dpYm1GdFpYTWlPbHRkTENKdFlYQndhVzVuY3lJNklqczdPenM3T3pzN096czdPenM3YTBKQlNXVTdRVUZEV0N4clFrRkJZeXhoUVVGWkxGbEJRVm83T3pzN096czdPenM3T3pzN1FVRmhaQ3hYUVVGUExGVkJRVU1zUzBGQlJDeEZRVUZYTzBGQlEyUXNXVUZCVFN4aFFVRmhMRVZCUVdJc1EwRkVVVHRCUVVWa0xGbEJRVTBzYVVKQlFXbENMR2REUVVGdlFpeExRVUZ3UWl4RFFVRnFRaXhEUVVaUk8wRkJSMlFzV1VGQlRTeGxRVUZsTEdWQlFXVXNUVUZCWml4RFFVaFFPMEZCU1dRc1dVRkJUU3hYUVVGWExGbEJRVU1zUzBGQmFVSXNRMEZCYWtJc1IwRkJjMElzUTBGQmRrSXNSMEZCTWtJc1EwRkJNMElzUTBGS1NEdEJRVXRrTEZsQlFVa3NTVUZCU1N4RFFVRktMRU5CVEZVN08wRkJUMlFzWVVGQlN5eEpRVUZKTEVsQlFVa3NRMEZCU2l4RlFVRlBMRWxCUVVrc1EwRkJTaXhGUVVGUExFZEJRWFpDTEVWQlFUUkNPMEZCUTNoQ0xIVkNRVUZYTEhOQ1FVRlZMRU5CUVZZc1EwRkJXQ3hKUVVFeVFpeGxRVUZsTEVOQlFXWXNRMEZCTTBJN096dEJRVVIzUWl4aFFVbDRRaXhIUVVwM1FqdEJRVXQ0UWl4blFrRkJTU3hEUVVGRExFdEJRVTBzV1VGQlRpeEhRVUZ6UWl4SlFVRkpMRkZCUVVvc1IwRkJaU3hEUVVGMFF5eERRVXh2UWp0VFFVRTFRanM3UVVGUlFTeGxRVUZQTEZWQlFWQXNRMEZtWXp0TFFVRllPenRCUVd0Q1VDeGhRVUZUTEZWQlFVTXNUVUZCUkR0bFFVRlpMRFJDUVVGblFpeE5RVUZvUWl4NVFrRkJiVU1zUjBGQmJrTTdTMEZCV2lJc0ltWnBiR1VpT2lKd2IzTnBkR2x2Ym5NdWFuTWlMQ0p6YjNWeVkyVlNiMjkwSWpvaUwxVnpaWEp6TDAxaGRIUXZVMmwwWlhNdmNHOXdiVzkwYVc5dUlpd2ljMjkxY21ObGMwTnZiblJsYm5RaU9sc2lhVzF3YjNKMElIc2djRzl6YVhScGIyNXpJSDBnWm5KdmJTQW5MaTl6WlhSMGFXNW5jeTlrYVdOMGFXOXVZWEo1Snp0Y2JtbHRjRzl5ZENCN0lHTnlaV0YwWlVSbGJHbHRhWFJsWkN3Z2MzQnNhWFJUY0dGalpVUmxiR2x0YVhSbFpDQjlJR1p5YjIwZ0p5NHVMMmx1WXk5MWRHbHNjeWM3WEc1cGJYQnZjblFnY0hoV1lXeDFaVlI1Y0dVZ1puSnZiU0FuTGk5d2VDYzdYRzVjYm1WNGNHOXlkQ0JrWldaaGRXeDBJSHRjYmlBZ0lDQmtaV1poZFd4MFVISnZjSE02SUhCNFZtRnNkV1ZVZVhCbExtUmxabUYxYkhSUWNtOXdjeXhjYmx4dUlDQWdJQzhxWEc0Z0lDQWdJQ0FnSUZOd2JHbDBJR1JwYldWdWMybHZibk1nYVc0Z1ptOXliV0YwSUZ3aVZHOXdJRkpwWjJoMElFSnZkSFJ2YlNCTVpXWjBYQ0pjYmlBZ0lDQWdJQ0FnWEc0Z0lDQWdJQ0FnSUVCd1lYSmhiU0JiYzNSeWFXNW5YVG9nVUc5emFYUnBiMjRnZG1Gc2RXVnpYRzRnSUNBZ0lDQWdJQ0FnSUNCY0lqSXdjSGdnTUNBek1IQjRJRFF3Y0hoY0lpQXRQaUI3TWpCd2VDd2dNQ3dnTXpCd2VDd2dOREJ3ZUgxY2JpQWdJQ0FnSUNBZ0lDQWdJRndpTWpCd2VDQXdJRE13Y0hoY0lpQXRQaUI3TWpCd2VDd2dNQ3dnTXpCd2VDd2dNSDFjYmlBZ0lDQWdJQ0FnSUNBZ0lGd2lNakJ3ZUNBd1hDSWdMVDRnZXpJd2NIZ3NJREFzSURJd2NIZ3NJREI5WEc0Z0lDQWdJQ0FnSUNBZ0lDQmNJakl3Y0hoY0lpQXRQaUI3TWpCd2VDd2dNakJ3ZUN3Z01qQndlQ3dnTWpCd2VIMWNiaUFnSUNBZ0lDQWdYRzRnSUNBZ0lDQWdJRUJ5WlhSMWNtNGdXMjlpYW1WamRGMDZJRTlpYW1WamRDQjNhWFJvSUZRdlVpOUNMMHdnYldWMGNtbGpjMXh1SUNBZ0lDb3ZYRzRnSUNBZ2MzQnNhWFE2SUNoMllXeDFaU2tnUFQ0Z2UxeHVJQ0FnSUNBZ0lDQmpiMjV6ZENCemNHeHBkRlpoYkhWbElEMGdlMzA3WEc0Z0lDQWdJQ0FnSUdOdmJuTjBJSE53YkdsMFVHOXphWFJwYjI1eklEMGdjM0JzYVhSVGNHRmpaVVJsYkdsdGFYUmxaQ2gyWVd4MVpTazdYRzRnSUNBZ0lDQWdJR052Ym5OMElHNTFiVkJ2YzJsMGFXOXVjeUE5SUhOd2JHbDBVRzl6YVhScGIyNXpMbXhsYm1kMGFEdGNiaUFnSUNBZ0lDQWdZMjl1YzNRZ2FuVnRjRUpoWTJzZ1BTQW9iblZ0VUc5emFYUnBiMjV6SUNFOVBTQXhLU0EvSURJZ09pQXhPMXh1SUNBZ0lDQWdJQ0JzWlhRZ2FpQTlJREE3WEc1Y2JpQWdJQ0FnSUNBZ1ptOXlJQ2hzWlhRZ2FTQTlJREE3SUdrZ1BDQTBPeUJwS3lzcElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUhOd2JHbDBWbUZzZFdWYmNHOXphWFJwYjI1elcybGRYU0E5SUhOd2JHbDBVRzl6YVhScGIyNXpXMnBkTzF4dVhHNGdJQ0FnSUNBZ0lDQWdJQ0F2THlCS2RXMXdJR0poWTJzZ0tIUnZJSE4wWVhKMEtTQmpiM1Z1ZEdWeUlHbG1JSGRsSjNabElISmxZV05vWldRZ2RHaGxJR1Z1WkNCdlppQnZkWElnZG1Gc2RXVnpYRzRnSUNBZ0lDQWdJQ0FnSUNCcUt5czdYRzRnSUNBZ0lDQWdJQ0FnSUNCcUlEMGdLR29nUFQwOUlHNTFiVkJ2YzJsMGFXOXVjeWtnUHlCcUlDMGdhblZ0Y0VKaFkyc2dPaUJxTzF4dUlDQWdJQ0FnSUNCOVhHNWNiaUFnSUNBZ0lDQWdjbVYwZFhKdUlITndiR2wwVm1Gc2RXVTdYRzRnSUNBZ2ZTeGNibHh1SUNBZ0lHTnZiV0pwYm1VNklDaDJZV3gxWlhNcElEMCtJR055WldGMFpVUmxiR2x0YVhSbFpDaDJZV3gxWlhNc0lIQnZjMmwwYVc5dWN5d2dKeUFuS1Z4dWZUc2lYWDA9XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy92YWx1ZS10eXBlcy9wb3NpdGlvbnMuanNcbiAqKiBtb2R1bGUgaWQgPSAyNlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0cy5kZWZhdWx0ID0ge1xuICAgIGRlZmF1bHRQcm9wczoge1xuICAgICAgICB1bml0OiAncHgnXG4gICAgfVxufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbk55WXk5MllXeDFaUzEwZVhCbGN5OXdlQzVxY3lKZExDSnVZVzFsY3lJNlcxMHNJbTFoY0hCcGJtZHpJam9pT3pzN2EwSkJRV1U3UVVGRFdDeHJRa0ZCWXp0QlFVTldMR05CUVUwc1NVRkJUanRMUVVSS0lpd2labWxzWlNJNkluQjRMbXB6SWl3aWMyOTFjbU5sVW05dmRDSTZJaTlWYzJWeWN5OU5ZWFIwTDFOcGRHVnpMM0J2Y0cxdmRHbHZiaUlzSW5OdmRYSmpaWE5EYjI1MFpXNTBJanBiSW1WNGNHOXlkQ0JrWldaaGRXeDBJSHRjYmlBZ0lDQmtaV1poZFd4MFVISnZjSE02SUh0Y2JpQWdJQ0FnSUNBZ2RXNXBkRG9nSjNCNEoxeHVJQ0FnSUgxY2JuMDdJbDE5XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy92YWx1ZS10eXBlcy9weC5qc1xuICoqIG1vZHVsZSBpZCA9IDI3XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfdXRpbHMgPSByZXF1aXJlKCcuLi9pbmMvdXRpbHMnKTtcblxudmFyIF9kaWN0aW9uYXJ5ID0gcmVxdWlyZSgnLi9zZXR0aW5ncy9kaWN0aW9uYXJ5Jyk7XG5cbnZhciBfZGVmYXVsdFByb3BzID0gcmVxdWlyZSgnLi9zZXR0aW5ncy9kZWZhdWx0LXByb3BzJyk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IHtcbiAgICBkZWZhdWx0UHJvcHM6IHtcbiAgICAgICAgUmVkOiBfZGVmYXVsdFByb3BzLnJnYixcbiAgICAgICAgR3JlZW46IF9kZWZhdWx0UHJvcHMucmdiLFxuICAgICAgICBCbHVlOiBfZGVmYXVsdFByb3BzLnJnYixcbiAgICAgICAgQWxwaGE6IF9kZWZhdWx0UHJvcHMub3BhY2l0eVxuICAgIH0sXG5cbiAgICB0ZXN0OiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIHZhbHVlICYmIHZhbHVlLmluZGV4T2YoJ3JnYicpID4gLTE7XG4gICAgfSxcblxuICAgIHNwbGl0OiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgcmV0dXJuICgwLCBfdXRpbHMuZ2V0Q29sb3JWYWx1ZXMpKHZhbHVlLCBfZGljdGlvbmFyeS5yZ2IpO1xuICAgIH0sXG5cbiAgICBjb21iaW5lOiBmdW5jdGlvbiAodmFsdWVzKSB7XG4gICAgICAgIHJldHVybiAoMCwgX3V0aWxzLmNyZWF0ZUZ1bmN0aW9uU3RyaW5nKSgoMCwgX3V0aWxzLmNyZWF0ZURlbGltaXRlZCkodmFsdWVzLCBfZGljdGlvbmFyeS5yZ2IsICcsICcsIDIpLCAncmdiYScpO1xuICAgIH1cbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5OeVl5OTJZV3gxWlMxMGVYQmxjeTl5WjJJdWFuTWlYU3dpYm1GdFpYTWlPbHRkTENKdFlYQndhVzVuY3lJNklqczdPenM3T3pzN096dHJRa0ZKWlR0QlFVTllMR3RDUVVGak8wRkJRMVlzT0VKQlJGVTdRVUZGVml4blEwRkdWVHRCUVVkV0xDdENRVWhWTzBGQlNWWXNiME5CU2xVN1MwRkJaRHM3UVVGUFFTeFZRVUZOTEZWQlFVTXNTMEZCUkR0bFFVRlpMRk5CUVZNc1RVRkJUU3hQUVVGT0xFTkJRV01zUzBGQlpDeEpRVUYxUWl4RFFVRkRMRU5CUVVRN1MwRkJOVU03TzBGQlJVNHNWMEZCVHl4VlFVRkRMRXRCUVVRN1pVRkJWeXd5UWtGQlpTeExRVUZtTzB0QlFWZzdPMEZCUlZBc1lVRkJVeXhWUVVGRExFMUJRVVE3WlVGQldTeHBRMEZCY1VJc05FSkJRV2RDTEUxQlFXaENMRzFDUVVGclF5eEpRVUZzUXl4RlFVRjNReXhEUVVGNFF5eERRVUZ5UWl4RlFVRnBSU3hOUVVGcVJUdExRVUZhSWl3aVptbHNaU0k2SW5KbllpNXFjeUlzSW5OdmRYSmpaVkp2YjNRaU9pSXZWWE5sY25NdlRXRjBkQzlUYVhSbGN5OXdiM0J0YjNScGIyNGlMQ0p6YjNWeVkyVnpRMjl1ZEdWdWRDSTZXeUpwYlhCdmNuUWdleUJqY21WaGRHVkVaV3hwYldsMFpXUXNJR055WldGMFpVWjFibU4wYVc5dVUzUnlhVzVuTENCblpYUkRiMnh2Y2xaaGJIVmxjeUI5SUdaeWIyMGdKeTR1TDJsdVl5OTFkR2xzY3ljN1hHNXBiWEJ2Y25RZ2V5QnlaMklnWVhNZ2NtZGlWR1Z5YlhNZ2ZTQm1jbTl0SUNjdUwzTmxkSFJwYm1kekwyUnBZM1JwYjI1aGNua25PMXh1YVcxd2IzSjBJSHNnY21kaUlHRnpJR1JsWm1GMWJIUlNSMElzSUc5d1lXTnBkSGtnWVhNZ1pHVm1ZWFZzZEU5d1lXTnBkSGtnZlNCbWNtOXRJQ2N1TDNObGRIUnBibWR6TDJSbFptRjFiSFF0Y0hKdmNITW5PMXh1WEc1bGVIQnZjblFnWkdWbVlYVnNkQ0I3WEc0Z0lDQWdaR1ZtWVhWc2RGQnliM0J6T2lCN1hHNGdJQ0FnSUNBZ0lGSmxaRG9nWkdWbVlYVnNkRkpIUWl4Y2JpQWdJQ0FnSUNBZ1IzSmxaVzQ2SUdSbFptRjFiSFJTUjBJc1hHNGdJQ0FnSUNBZ0lFSnNkV1U2SUdSbFptRjFiSFJTUjBJc1hHNGdJQ0FnSUNBZ0lFRnNjR2hoT2lCa1pXWmhkV3gwVDNCaFkybDBlVnh1SUNBZ0lIMHNYRzVjYmlBZ0lDQjBaWE4wT2lBb2RtRnNkV1VwSUQwK0lDaDJZV3gxWlNBbUppQjJZV3gxWlM1cGJtUmxlRTltS0NkeVoySW5LU0ErSUMweEtTeGNibHh1SUNBZ0lITndiR2wwT2lBb2RtRnNkV1VwSUQwK0lHZGxkRU52Ykc5eVZtRnNkV1Z6S0haaGJIVmxMQ0J5WjJKVVpYSnRjeWtzWEc1Y2JpQWdJQ0JqYjIxaWFXNWxPaUFvZG1Gc2RXVnpLU0E5UGlCamNtVmhkR1ZHZFc1amRHbHZibE4wY21sdVp5aGpjbVZoZEdWRVpXeHBiV2wwWldRb2RtRnNkV1Z6TENCeVoySlVaWEp0Y3l3Z0p5d2dKeXdnTWlrc0lDZHlaMkpoSnlsY2JuMDdJbDE5XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy92YWx1ZS10eXBlcy9yZ2IuanNcbiAqKiBtb2R1bGUgaWQgPSAyOFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzLmRlZmF1bHQgPSB7XG4gICAgZGVmYXVsdFByb3BzOiB7XG4gICAgICAgIGN1cnJlbnQ6IDFcbiAgICB9XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluTnlZeTkyWVd4MVpTMTBlWEJsY3k5elkyRnNaUzVxY3lKZExDSnVZVzFsY3lJNlcxMHNJbTFoY0hCcGJtZHpJam9pT3pzN2EwSkJRV1U3UVVGRFdDeHJRa0ZCWXp0QlFVTldMR2xDUVVGVExFTkJRVlE3UzBGRVNpSXNJbVpwYkdVaU9pSnpZMkZzWlM1cWN5SXNJbk52ZFhKalpWSnZiM1FpT2lJdlZYTmxjbk12VFdGMGRDOVRhWFJsY3k5d2IzQnRiM1JwYjI0aUxDSnpiM1Z5WTJWelEyOXVkR1Z1ZENJNld5SmxlSEJ2Y25RZ1pHVm1ZWFZzZENCN1hHNGdJQ0FnWkdWbVlYVnNkRkJ5YjNCek9pQjdYRzRnSUNBZ0lDQWdJR04xY25KbGJuUTZJREZjYmlBZ0lDQjlYRzU5T3lKZGZRPT1cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL3ZhbHVlLXR5cGVzL3NjYWxlLmpzXG4gKiogbW9kdWxlIGlkID0gMjlcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxudmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF9jb2xvciA9IHJlcXVpcmUoJy4vY29sb3InKTtcblxudmFyIF9jb2xvcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jb2xvcik7XG5cbnZhciBfcHggPSByZXF1aXJlKCcuL3B4Jyk7XG5cbnZhciBfZGljdGlvbmFyeSA9IHJlcXVpcmUoJy4vc2V0dGluZ3MvZGljdGlvbmFyeScpO1xuXG52YXIgX3V0aWxzID0gcmVxdWlyZSgnLi4vaW5jL3V0aWxzJyk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbnZhciBzaGFkb3dXaXRob3V0Q29sb3JUZXJtcyA9IF9kaWN0aW9uYXJ5LnNoYWRvdy5zbGljZSgwLCA0KTtcblxuZXhwb3J0cy5kZWZhdWx0ID0ge1xuICAgIGRlZmF1bHRQcm9wczogX2V4dGVuZHMoe30sIF9jb2xvcjIuZGVmYXVsdC5kZWZhdWx0UHJvcHMsIHtcbiAgICAgICAgWDogX3B4LmRlZmF1bHRQcm9wcyxcbiAgICAgICAgWTogX3B4LmRlZmF1bHRQcm9wcyxcbiAgICAgICAgUmFkaXVzOiBfcHguZGVmYXVsdFByb3BzLFxuICAgICAgICBTcHJlYWQ6IF9weC5kZWZhdWx0UHJvcHNcbiAgICB9KSxcblxuICAgIHNwbGl0OiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgdmFyIGJpdHMgPSAoMCwgX3V0aWxzLnNwbGl0U3BhY2VEZWxpbWl0ZWQpKHZhbHVlKTtcbiAgICAgICAgdmFyIGhhc1JlYWNoZWRDb2xvciA9IGZhbHNlO1xuICAgICAgICB2YXIgY29sb3JQcm9wID0gJyc7XG4gICAgICAgIHZhciBzcGxpdFZhbHVlID0ge307XG5cbiAgICAgICAgYml0cy5mb3JFYWNoKGZ1bmN0aW9uIChiaXQsIGkpIHtcbiAgICAgICAgICAgIC8vIElmIHdlJ3ZlIHJlYWNoZWQgdGhlIGNvbG9yIHByb3BzLCBhcHBlbmQgdG8gY29sb3Igc3RyaW5nXG4gICAgICAgICAgICBpZiAoaGFzUmVhY2hlZENvbG9yIHx8IF9jb2xvcjIuZGVmYXVsdC50ZXN0KGJpdCkpIHtcbiAgICAgICAgICAgICAgICBoYXNSZWFjaGVkQ29sb3IgPSB0cnVlO1xuICAgICAgICAgICAgICAgIGNvbG9yUHJvcCArPSBiaXQ7XG5cbiAgICAgICAgICAgICAgICAvLyBFbHNlIHByb2Nlc3Mgc2hhZG93IHZhbHVlXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBzcGxpdFZhbHVlW19kaWN0aW9uYXJ5LnNoYWRvd1tpXV0gPSBiaXQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICB2YXIgc3BsaXRDb2xvclByb3BzID0gX2NvbG9yMi5kZWZhdWx0LnNwbGl0KGNvbG9yUHJvcCk7XG5cbiAgICAgICAgcmV0dXJuIF9leHRlbmRzKHt9LCBzcGxpdFZhbHVlLCB7IHNwbGl0Q29sb3JQcm9wczogc3BsaXRDb2xvclByb3BzIH0pO1xuICAgIH0sXG5cbiAgICBjb21iaW5lOiBmdW5jdGlvbiAodmFsdWVzKSB7XG4gICAgICAgIHJldHVybiAoMCwgX3V0aWxzLmNyZWF0ZURlbGltaXRlZCkodmFsdWVzLCBzaGFkb3dXaXRob3V0Q29sb3JUZXJtcywgJyAnKSArIF9jb2xvcjIuZGVmYXVsdC5jb21iaW5lKHZhbHVlcyk7XG4gICAgfVxufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbk55WXk5MllXeDFaUzEwZVhCbGN5OXphR0ZrYjNjdWFuTWlYU3dpYm1GdFpYTWlPbHRkTENKdFlYQndhVzVuY3lJNklqczdPenM3T3pzN096czdPenM3T3pzN08wRkJTMEVzU1VGQlRTd3dRa0ZCTUVJc2JVSkJRVmtzUzBGQldpeERRVUZyUWl4RFFVRnNRaXhGUVVGeFFpeERRVUZ5UWl4RFFVRXhRanM3YTBKQlJWTTdRVUZEV0N3clFrRkRUeXhuUWtGQlRTeFpRVUZPTzBGQlEwZzdRVUZEUVR0QlFVTkJPMEZCUTBFN1RVRk1TanM3UVVGUlFTeFhRVUZQTEZWQlFVTXNTMEZCUkN4RlFVRlhPMEZCUTJRc1dVRkJUU3hQUVVGUExHZERRVUZ2UWl4TFFVRndRaXhEUVVGUUxFTkJSRkU3UVVGRlpDeFpRVUZKTEd0Q1FVRnJRaXhMUVVGc1FpeERRVVpWTzBGQlIyUXNXVUZCU1N4WlFVRlpMRVZCUVZvc1EwRklWVHRCUVVsa0xGbEJRVWtzWVVGQllTeEZRVUZpTEVOQlNsVTdPMEZCVFdRc1lVRkJTeXhQUVVGTUxFTkJRV0VzVlVGQlF5eEhRVUZFTEVWQlFVMHNRMEZCVGl4RlFVRlpPenRCUVVWeVFpeG5Ra0ZCU1N4dFFrRkJiVUlzWjBKQlFVMHNTVUZCVGl4RFFVRlhMRWRCUVZnc1EwRkJia0lzUlVGQmIwTTdRVUZEY0VNc2EwTkJRV3RDTEVsQlFXeENMRU5CUkc5RE8wRkJSWEJETERaQ1FVRmhMRWRCUVdJN096dEJRVVp2UXl4aFFVRjRReXhOUVV0UE8wRkJRMGdzSzBKQlFWY3NiVUpCUVZrc1EwRkJXaXhEUVVGWUxFbEJRVFpDTEVkQlFUZENMRU5CUkVjN2FVSkJURkE3VTBGR1V5eERRVUZpTEVOQlRtTTdPMEZCYTBKa0xGbEJRVTBzYTBKQlFXdENMR2RDUVVGTkxFdEJRVTRzUTBGQldTeFRRVUZhTEVOQlFXeENMRU5CYkVKUk96dEJRVzlDWkN3MFFrRkJXU3hqUVVGWkxHMURRVUY0UWl4RFFYQkNZenRMUVVGWU96dEJRWFZDVUN4aFFVRlRMRlZCUVVNc1RVRkJSRHRsUVVGWkxEUkNRVUZuUWl4TlFVRm9RaXhGUVVGM1FpeDFRa0ZCZUVJc1JVRkJhVVFzUjBGQmFrUXNTVUZCZDBRc1owSkJRVTBzVDBGQlRpeERRVUZqTEUxQlFXUXNRMEZCZUVRN1MwRkJXaUlzSW1acGJHVWlPaUp6YUdGa2IzY3Vhbk1pTENKemIzVnlZMlZTYjI5MElqb2lMMVZ6WlhKekwwMWhkSFF2VTJsMFpYTXZjRzl3Ylc5MGFXOXVJaXdpYzI5MWNtTmxjME52Ym5SbGJuUWlPbHNpYVcxd2IzSjBJR052Ykc5eUlHWnliMjBnSnk0dlkyOXNiM0luTzF4dWFXMXdiM0owSUhzZ1pHVm1ZWFZzZEZCeWIzQnpJR0Z6SUhCNFJHVm1ZWFZzZEZCeWIzQnpJSDBnWm5KdmJTQW5MaTl3ZUNjN1hHNXBiWEJ2Y25RZ2V5QnphR0ZrYjNjZ1lYTWdjMmhoWkc5M1ZHVnliWE1nZlNCbWNtOXRJQ2N1TDNObGRIUnBibWR6TDJScFkzUnBiMjVoY25rbk8xeHVhVzF3YjNKMElIc2djM0JzYVhSVGNHRmpaVVJsYkdsdGFYUmxaQ3dnWTNKbFlYUmxSR1ZzYVcxcGRHVmtJSDBnWm5KdmJTQW5MaTR2YVc1akwzVjBhV3h6Snp0Y2JseHVZMjl1YzNRZ2MyaGhaRzkzVjJsMGFHOTFkRU52Ykc5eVZHVnliWE1nUFNCemFHRmtiM2RVWlhKdGN5NXpiR2xqWlNnd0xDQTBLVHRjYmx4dVpYaHdiM0owSUdSbFptRjFiSFFnZTF4dUlDQWdJR1JsWm1GMWJIUlFjbTl3Y3pvZ2UxeHVJQ0FnSUNBZ0lDQXVMaTVqYjJ4dmNpNWtaV1poZFd4MFVISnZjSE1zWEc0Z0lDQWdJQ0FnSUZnNklIQjRSR1ZtWVhWc2RGQnliM0J6TEZ4dUlDQWdJQ0FnSUNCWk9pQndlRVJsWm1GMWJIUlFjbTl3Y3l4Y2JpQWdJQ0FnSUNBZ1VtRmthWFZ6T2lCd2VFUmxabUYxYkhSUWNtOXdjeXhjYmlBZ0lDQWdJQ0FnVTNCeVpXRmtPaUJ3ZUVSbFptRjFiSFJRY205d2MxeHVJQ0FnSUgwc1hHNWNiaUFnSUNCemNHeHBkRG9nS0haaGJIVmxLU0E5UGlCN1hHNGdJQ0FnSUNBZ0lHTnZibk4wSUdKcGRITWdQU0J6Y0d4cGRGTndZV05sUkdWc2FXMXBkR1ZrS0haaGJIVmxLVHRjYmlBZ0lDQWdJQ0FnYkdWMElHaGhjMUpsWVdOb1pXUkRiMnh2Y2lBOUlHWmhiSE5sTzF4dUlDQWdJQ0FnSUNCc1pYUWdZMjlzYjNKUWNtOXdJRDBnSnljN1hHNGdJQ0FnSUNBZ0lHeGxkQ0J6Y0d4cGRGWmhiSFZsSUQwZ2UzMDdYRzVjYmlBZ0lDQWdJQ0FnWW1sMGN5NW1iM0pGWVdOb0tDaGlhWFFzSUdrcElEMCtJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lDOHZJRWxtSUhkbEozWmxJSEpsWVdOb1pXUWdkR2hsSUdOdmJHOXlJSEJ5YjNCekxDQmhjSEJsYm1RZ2RHOGdZMjlzYjNJZ2MzUnlhVzVuWEc0Z0lDQWdJQ0FnSUNBZ0lDQnBaaUFvYUdGelVtVmhZMmhsWkVOdmJHOXlJSHg4SUdOdmJHOXlMblJsYzNRb1ltbDBLU2tnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUdoaGMxSmxZV05vWldSRGIyeHZjaUE5SUhSeWRXVTdYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdZMjlzYjNKUWNtOXdJQ3M5SUdKcGREdGNibHh1SUNBZ0lDQWdJQ0FnSUNBZ0x5OGdSV3h6WlNCd2NtOWpaWE56SUhOb1lXUnZkeUIyWVd4MVpWeHVJQ0FnSUNBZ0lDQWdJQ0FnZlNCbGJITmxJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0J6Y0d4cGRGWmhiSFZsVzNOb1lXUnZkMVJsY20xelcybGRYU0E5SUdKcGREdGNiaUFnSUNBZ0lDQWdJQ0FnSUgxY2JpQWdJQ0FnSUNBZ2ZTazdYRzVjYmlBZ0lDQWdJQ0FnWTI5dWMzUWdjM0JzYVhSRGIyeHZjbEJ5YjNCeklEMGdZMjlzYjNJdWMzQnNhWFFvWTI5c2IzSlFjbTl3S1R0Y2JseHVJQ0FnSUNBZ0lDQnlaWFIxY200Z2V5QXVMaTV6Y0d4cGRGWmhiSFZsTENCemNHeHBkRU52Ykc5eVVISnZjSE1nZlR0Y2JpQWdJQ0I5TEZ4dVhHNGdJQ0FnWTI5dFltbHVaVG9nS0haaGJIVmxjeWtnUFQ0Z1kzSmxZWFJsUkdWc2FXMXBkR1ZrS0haaGJIVmxjeXdnYzJoaFpHOTNWMmwwYUc5MWRFTnZiRzl5VkdWeWJYTXNJQ2NnSnlrZ0t5QmpiMnh2Y2k1amIyMWlhVzVsS0haaGJIVmxjeWxjYm4wN1hHNGlYWDA9XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy92YWx1ZS10eXBlcy9zaGFkb3cuanNcbiAqKiBtb2R1bGUgaWQgPSAzMFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0cy5jaXJjdWxhck1vdGlvbiA9IGV4cG9ydHMuY3JlYXRlTWFwcGVyID0gdW5kZWZpbmVkO1xuXG52YXIgX2NhbGMgPSByZXF1aXJlKCcuLi9pbmMvY2FsYycpO1xuXG52YXIgY3JlYXRlTWFwcGVyID0gZXhwb3J0cy5jcmVhdGVNYXBwZXIgPSBmdW5jdGlvbiAoZnJvbSwgdG8pIHtcbiAgICB2YXIgbWFwTGVuZ3RoID0gZnJvbS5sZW5ndGg7XG5cbiAgICByZXR1cm4gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAxOyBpIDwgbWFwTGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmICh2YWx1ZSA8IGZyb21baV0gfHwgaSA9PT0gbWFwTGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuICgwLCBfY2FsYy5nZXRWYWx1ZUZyb21Qcm9ncmVzcykoKDAsIF9jYWxjLnJlc3RyaWN0KSgoMCwgX2NhbGMuZ2V0UHJvZ3Jlc3NGcm9tVmFsdWUpKHZhbHVlLCBmcm9tW2kgLSAxXSwgZnJvbVtpXSksIDAsIDEpLCB0b1tpIC0gMV0sIHRvW2ldKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG59O1xuXG52YXIgY2lyY3VsYXJNb3Rpb24gPSBleHBvcnRzLmNpcmN1bGFyTW90aW9uID0gZnVuY3Rpb24gKHYsIGtleSwgX3JlZikge1xuICAgIHZhciB2YWx1ZXMgPSBfcmVmLnZhbHVlcztcbiAgICByZXR1cm4gKDAsIF9jYWxjLnBvaW50RnJvbUFuZ2xlQW5kRGlzdGFuY2UpKHtcbiAgICAgICAgeDogdmFsdWVzLm9yaWdpblguY3VycmVudCxcbiAgICAgICAgeTogdmFsdWVzLm9yaWdpblkuY3VycmVudFxuICAgIH0sIHZhbHVlcy5hbmdsZS5jdXJyZW50LCB2YWx1ZXMuZGlzdGFuY2UuY3VycmVudClba2V5XTtcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5OeVl5OXBibU12ZEhKaGJuTm1iM0p0WlhKekxtcHpJbDBzSW01aGJXVnpJanBiWFN3aWJXRndjR2x1WjNNaU9pSTdPenM3T3pzN1FVRkZUeXhKUVVGTkxITkRRVUZsTEZWQlFVTXNTVUZCUkN4RlFVRlBMRVZCUVZBc1JVRkJZenRCUVVOMFF5eFJRVUZOTEZsQlFWa3NTMEZCU3l4TlFVRk1MRU5CUkc5Q096dEJRVWQwUXl4WFFVRlBMRlZCUVVNc1MwRkJSQ3hGUVVGWE8wRkJRMlFzWVVGQlN5eEpRVUZKTEVsQlFVa3NRMEZCU2l4RlFVRlBMRWxCUVVrc1UwRkJTaXhGUVVGbExFZEJRUzlDTEVWQlFXOURPMEZCUTJoRExHZENRVUZKTEZGQlFWRXNTMEZCU3l4RFFVRk1MRU5CUVZJc1NVRkJiVUlzVFVGQlRTeFRRVUZPTEVWQlFXbENPMEZCUTNCRExIVkNRVUZQTEdkRFFVRnhRaXh2UWtGQlV5eG5RMEZCY1VJc1MwRkJja0lzUlVGQk5FSXNTMEZCU3l4SlFVRkpMRU5CUVVvc1EwRkJha01zUlVGQmVVTXNTMEZCU3l4RFFVRk1MRU5CUVhwRExFTkJRVlFzUlVGQk5FUXNRMEZCTlVRc1JVRkJLMFFzUTBGQkwwUXNRMEZCY2tJc1JVRkJkMFlzUjBGQlJ5eEpRVUZKTEVOQlFVb3NRMEZCTTBZc1JVRkJiVWNzUjBGQlJ5eERRVUZJTEVOQlFXNUhMRU5CUVZBc1EwRkViME03WVVGQmVFTTdVMEZFU2p0TFFVUkhMRU5CU0N0Q08wTkJRV1E3TzBGQldYSkNMRWxCUVUwc01FTkJRV2xDTEZWQlFVTXNRMEZCUkN4RlFVRkpMRWRCUVVvN1VVRkJWenRYUVVOeVF5eHhRMEZCTUVJN1FVRkRkRUlzVjBGQlJ5eFBRVUZQTEU5QlFWQXNRMEZCWlN4UFFVRm1PMEZCUTBnc1YwRkJSeXhQUVVGUExFOUJRVkFzUTBGQlpTeFBRVUZtTzB0QlJsQXNSVUZIUnl4UFFVRlBMRXRCUVZBc1EwRkJZU3hQUVVGaUxFVkJRWE5DTEU5QlFVOHNVVUZCVUN4RFFVRm5RaXhQUVVGb1FpeERRVWg2UWl4RFFVZHJSQ3hIUVVoc1JEdERRVVF3UWlJc0ltWnBiR1VpT2lKMGNtRnVjMlp2Y20xbGNuTXVhbk1pTENKemIzVnlZMlZTYjI5MElqb2lMMVZ6WlhKekwwMWhkSFF2VTJsMFpYTXZjRzl3Ylc5MGFXOXVJaXdpYzI5MWNtTmxjME52Ym5SbGJuUWlPbHNpYVcxd2IzSjBJSHNnWjJWMFVISnZaM0psYzNOR2NtOXRWbUZzZFdVc0lHZGxkRlpoYkhWbFJuSnZiVkJ5YjJkeVpYTnpMQ0J5WlhOMGNtbGpkQ3dnY0c5cGJuUkdjbTl0UVc1bmJHVkJibVJFYVhOMFlXNWpaU0I5SUdaeWIyMGdKeTR1TDJsdVl5OWpZV3hqSnp0Y2JseHVaWGh3YjNKMElHTnZibk4wSUdOeVpXRjBaVTFoY0hCbGNpQTlJQ2htY205dExDQjBieWtnUFQ0Z2UxeHVJQ0FnSUdOdmJuTjBJRzFoY0V4bGJtZDBhQ0E5SUdaeWIyMHViR1Z1WjNSb08xeHVYRzRnSUNBZ2NtVjBkWEp1SUNoMllXeDFaU2tnUFQ0Z2UxeHVJQ0FnSUNBZ0lDQm1iM0lnS0d4bGRDQnBJRDBnTVRzZ2FTQThJRzFoY0V4bGJtZDBhRHNnYVNzcktTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNCcFppQW9kbUZzZFdVZ1BDQm1jbTl0VzJsZElIeDhJR2tnUFQwOUlHMWhjRXhsYm1kMGFDa2dlMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJSEpsZEhWeWJpQm5aWFJXWVd4MVpVWnliMjFRY205bmNtVnpjeWh5WlhOMGNtbGpkQ2huWlhSUWNtOW5jbVZ6YzBaeWIyMVdZV3gxWlNoMllXeDFaU3dnWm5KdmJWdHBJQzBnTVYwc0lHWnliMjFiYVYwcExDQXdMQ0F4S1N3Z2RHOWJhU0F0SURGZExDQjBiMXRwWFNrN1hHNGdJQ0FnSUNBZ0lDQWdJQ0I5WEc0Z0lDQWdJQ0FnSUgxY2JpQWdJQ0I5TzF4dWZUdGNibHh1Wlhod2IzSjBJR052Ym5OMElHTnBjbU4xYkdGeVRXOTBhVzl1SUQwZ0tIWXNJR3RsZVN3Z2V5QjJZV3gxWlhNZ2ZTa2dQVDRnWEc0Z0lDQWdjRzlwYm5SR2NtOXRRVzVuYkdWQmJtUkVhWE4wWVc1alpTaDdYRzRnSUNBZ0lDQWdJSGc2SUhaaGJIVmxjeTV2Y21sbmFXNVlMbU4xY25KbGJuUXNYRzRnSUNBZ0lDQWdJSGs2SUhaaGJIVmxjeTV2Y21sbmFXNVpMbU4xY25KbGJuUWdYRzRnSUNBZ2ZTd2dkbUZzZFdWekxtRnVaMnhsTG1OMWNuSmxiblFzSUhaaGJIVmxjeTVrYVhOMFlXNWpaUzVqZFhKeVpXNTBLVnRyWlhsZE8xeHVYRzRpWFgwPVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvaW5jL3RyYW5zZm9ybWVycy5qc1xuICoqIG1vZHVsZSBpZCA9IDMxXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbnZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfUHJvY2VzczIgPSByZXF1aXJlKCcuLi9wcm9jZXNzL1Byb2Nlc3MnKTtcblxudmFyIF9Qcm9jZXNzMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX1Byb2Nlc3MyKTtcblxudmFyIF9jYWxjID0gcmVxdWlyZSgnLi4vaW5jL2NhbGMnKTtcblxudmFyIF91dGlscyA9IHJlcXVpcmUoJy4uL2luYy91dGlscycpO1xuXG52YXIgX2JpbmRBZGFwdGVyID0gcmVxdWlyZSgnLi4vaW5jL2JpbmQtYWRhcHRlcicpO1xuXG52YXIgX2JpbmRBZGFwdGVyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2JpbmRBZGFwdGVyKTtcblxudmFyIF9jb2xvciA9IHJlcXVpcmUoJy4uL3ZhbHVlLXR5cGVzL2NvbG9yJyk7XG5cbnZhciBfY29sb3IyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY29sb3IpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMob2JqLCBrZXlzKSB7IHZhciB0YXJnZXQgPSB7fTsgZm9yICh2YXIgaSBpbiBvYmopIHsgaWYgKGtleXMuaW5kZXhPZihpKSA+PSAwKSBjb250aW51ZTsgaWYgKCFPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBpKSkgY29udGludWU7IHRhcmdldFtpXSA9IG9ialtpXTsgfSByZXR1cm4gdGFyZ2V0OyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKCFzZWxmKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gY2FsbCAmJiAodHlwZW9mIGNhbGwgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikgPyBjYWxsIDogc2VsZjsgfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb24sIG5vdCBcIiArIHR5cGVvZiBzdXBlckNsYXNzKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCBlbnVtZXJhYmxlOiBmYWxzZSwgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LnNldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKSA6IHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7IH1cblxudmFyIERFRkFVTFRfUFJPUCA9ICdjdXJyZW50JztcbnZhciBOVU1FUklDQUxfVkFMVUVTID0gW0RFRkFVTFRfUFJPUCwgJ2Zyb20nLCAndG8nLCAnbWluJywgJ21heCddO1xudmFyIE5VTV9OVU1FUklDQUxfVkFMVUVTID0gTlVNRVJJQ0FMX1ZBTFVFUy5sZW5ndGg7XG5cbnZhciBBY3Rpb24gPSBmdW5jdGlvbiAoX1Byb2Nlc3MpIHtcbiAgICBfaW5oZXJpdHMoQWN0aW9uLCBfUHJvY2Vzcyk7XG5cbiAgICBmdW5jdGlvbiBBY3Rpb24ocHJvcHMpIHtcbiAgICAgICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIEFjdGlvbik7XG5cbiAgICAgICAgcHJvcHMuc3RhdGUgPSB7fTtcbiAgICAgICAgcmV0dXJuIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIF9Qcm9jZXNzLmNhbGwodGhpcywgcHJvcHMpKTtcbiAgICB9XG5cbiAgICAvKlxuICAgICAgICAjIFNldCBBY3Rpb24gcHJvcGVydGllc1xuICAgICAgICAjIyBTZXQgdXNlci1kZWZpbmVkIEFjdGlvbiBwcm9wZXJ0aWVzXG4gICAgICAgICBAcGFyYW0gW29iamVjdF1cbiAgICAgICAgQHJldHVybiBbQWN0aW9uXVxuICAgICovXG5cbiAgICBBY3Rpb24ucHJvdG90eXBlLnNldCA9IGZ1bmN0aW9uIHNldCgpIHtcbiAgICAgICAgdmFyIHByb3BzID0gYXJndW1lbnRzLmxlbmd0aCA8PSAwIHx8IGFyZ3VtZW50c1swXSA9PT0gdW5kZWZpbmVkID8ge30gOiBhcmd1bWVudHNbMF07XG4gICAgICAgIHZhciB2YWx1ZXMgPSBwcm9wcy52YWx1ZXM7XG4gICAgICAgIHZhciBvbiA9IHByb3BzLm9uO1xuXG4gICAgICAgIHZhciBwcm9wc1RvU2V0ID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKHByb3BzLCBbJ3ZhbHVlcycsICdvbiddKTtcblxuICAgICAgICBfUHJvY2Vzcy5wcm90b3R5cGUuc2V0LmNhbGwodGhpcywgcHJvcHNUb1NldCk7XG5cbiAgICAgICAgaWYgKG9uKSB7XG4gICAgICAgICAgICAvLyBEdWNrdHlwaXNoIGNoZWNrIGZvciBBZGFwdGVyXG4gICAgICAgICAgICB0aGlzLm9uID0gIW9uLnNldHRlciA/ICgwLCBfYmluZEFkYXB0ZXIyLmRlZmF1bHQpKG9uKSA6IG9uO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy52YWx1ZXMgPSB0aGlzLnZhbHVlcyB8fCB7fTtcbiAgICAgICAgdGhpcy52YWx1ZUtleXMgPSB0aGlzLnZhbHVlS2V5cyB8fCBbXTtcbiAgICAgICAgdGhpcy5wYXJlbnRLZXlzID0gdGhpcy5wYXJlbnRLZXlzIHx8IFtdO1xuXG4gICAgICAgIC8vIE1lcmdlIG5ldyBgdmFsdWVgIHByb3BlcnRpZXMgd2l0aCBleGlzdGluZ1xuICAgICAgICB2YXIgY3VycmVudFZhbHVlcyA9IHRoaXMudmFsdWVzO1xuICAgICAgICB2YXIgZGVmYXVsdFZhbHVlID0gdGhpcy5nZXREZWZhdWx0VmFsdWUoKTtcbiAgICAgICAgdmFyIGRlZmF1bHRWYWx1ZVByb3AgPSB0aGlzLmdldERlZmF1bHRWYWx1ZVByb3AoKTtcblxuICAgICAgICAvLyBJbmhlcml0IHZhbHVlIHByb3BlcnRpZXMgZnJvbSBgcHJvcHNgXG4gICAgICAgIGZvciAodmFyIGtleSBpbiBkZWZhdWx0VmFsdWUpIHtcbiAgICAgICAgICAgIGlmIChkZWZhdWx0VmFsdWUuaGFzT3duUHJvcGVydHkoa2V5KSAmJiBwcm9wc1RvU2V0Lmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICAgICAgICBpZiAocHJvcHNUb1NldFtrZXldICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlW2tleV0gPSBwcm9wc1RvU2V0W2tleV07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gQ2hlY2sgYWxsIHZhbHVlcyBhbmQgc3BsaXQgaW50byBjaGlsZCB2YWx1ZXMgYXMgbmVjY2Vzc2FyeVxuICAgICAgICBmb3IgKHZhciBrZXkgaW4gdmFsdWVzKSB7XG4gICAgICAgICAgICBpZiAodmFsdWVzLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICAgICAgICB2YXIgdmFsdWUgPSB2YWx1ZXNba2V5XTtcbiAgICAgICAgICAgICAgICB2YXIgZXhpc3RpbmdWYWx1ZSA9IGN1cnJlbnRWYWx1ZXNba2V5XTtcbiAgICAgICAgICAgICAgICB2YXIgdmFsdWVUeXBlID0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgICAgIHZhciBuZXdWYWx1ZSA9IHt9O1xuXG4gICAgICAgICAgICAgICAgLy8gQ29udmVydCBuZXcgdmFsdWUgaW50byBvYmplY3QgaWYgaXQgaXNuJ3QgYWxyZWFkeVxuICAgICAgICAgICAgICAgIGlmICgoMCwgX3V0aWxzLmlzT2JqKSh2YWx1ZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgbmV3VmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBuZXdWYWx1ZVtkZWZhdWx0VmFsdWVQcm9wXSA9IHZhbHVlO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC8vIElmIHZhbHVlIGFscmVhZHkgZXhpc3RzLCBjaGVjayBmb3IgYW5kIHVzZSBleGlzdGluZyB0eXBlXG4gICAgICAgICAgICAgICAgaWYgKGV4aXN0aW5nVmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgbmV3VmFsdWUgPSBfZXh0ZW5kcyh7fSwgZXhpc3RpbmdWYWx1ZSwgbmV3VmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICB2YWx1ZVR5cGUgPSB0aGlzLm9uICYmIHRoaXMub24uZ2V0VmFsdWVUeXBlID8gdGhpcy5vbi5nZXRWYWx1ZVR5cGUoa2V5KSA6IGV4aXN0aW5nVmFsdWUudHlwZTtcblxuICAgICAgICAgICAgICAgICAgICAvLyBJZiB0aGlzIGlzIGEgbmV3IHZhbHVlLCBjaGVjayBmb3IgdHlwZVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobmV3VmFsdWUuZnJvbSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3VmFsdWUuY3VycmVudCA9IG5ld1ZhbHVlLmZyb207XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKG5ld1ZhbHVlLmN1cnJlbnQgPT09IHVuZGVmaW5lZCAmJiB0aGlzLm9uKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3VmFsdWUuY3VycmVudCA9IHRoaXMub24uZ2V0KGtleSkgfHwgMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG5ld1ZhbHVlLmZyb20gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ld1ZhbHVlLmZyb20gPSBuZXdWYWx1ZS5jdXJyZW50O1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICBuZXdWYWx1ZSA9IF9leHRlbmRzKHt9LCBkZWZhdWx0VmFsdWUsIG5ld1ZhbHVlKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgbmV3VmFsdWUucHJldiA9IG5ld1ZhbHVlLmN1cnJlbnQ7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIElmIG9uZSBpcyBleHBsaWNpdGx5IGFzc2lnbmVkLCB1c2UgdGhhdFxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHZhbHVlLnR5cGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZVR5cGUgPSB2YWx1ZS50eXBlO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gT3IgaWYgb3VyIEFkYXB0ZXIgaGFzIGEgdHlwZU1hcCwgdXNlIHRoYXRcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5vbiAmJiB0aGlzLm9uLmdldFZhbHVlVHlwZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZVR5cGUgPSB0aGlzLm9uLmdldFZhbHVlVHlwZShrZXkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoKDAsIF91dGlscy5pc1N0cmluZykodmFsdWUuY3VycmVudCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gVGVzdCBpZiB0aGlzIGlzIGEgY29sb3IgdmFsdWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKF9jb2xvcjIuZGVmYXVsdC50ZXN0KHZhbHVlLmN1cnJlbnQpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZVR5cGUgPSBfY29sb3IyLmRlZmF1bHQ7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFRlc3QgaWYgdGhpcyBpcyBhIGNvbXBsZXggc3RyaW5nXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFRyZWF0IGFzIGEgdW5pdCB2YWx1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC8vIElmIHdlJ3ZlIGdvdCBhIHZhbHVlVHlwZSB0aGVuIHByZXByb2Nlc3MgdGhlIHZhbHVlIGFjY29yZGluZ2x5XG4gICAgICAgICAgICAgICAgaWYgKHZhbHVlVHlwZSkge1xuICAgICAgICAgICAgICAgICAgICBuZXdWYWx1ZS50eXBlID0gdmFsdWVUeXBlO1xuXG4gICAgICAgICAgICAgICAgICAgIC8vIElmIHRoaXMgdmFsdWUgc2hvdWxkIGJlIHNwbGl0LCBzcGxpdFxuICAgICAgICAgICAgICAgICAgICBpZiAodmFsdWVUeXBlLnNwbGl0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgY2hpbGRWYWx1ZXMgPSB7fTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gTG9vcCBvdmVyIG51bWVyaWNhbCB2YWx1ZXMgYW5kIHNwbGl0IGFueSBwcmVzZW50XG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IE5VTV9OVU1FUklDQUxfVkFMVUVTOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgcHJvcE5hbWUgPSBOVU1FUklDQUxfVkFMVUVTW2ldO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG5ld1ZhbHVlLmhhc093blByb3BlcnR5KHByb3BOYW1lKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgc3BsaXRWYWx1ZXMgPSB2YWx1ZVR5cGUuc3BsaXQobmV3VmFsdWVbcHJvcE5hbWVdKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBzcGxpdEtleSBpbiBzcGxpdFZhbHVlcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHNwbGl0VmFsdWVzLmhhc093blByb3BlcnR5KHNwbGl0S2V5KSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBzcGxpdFZhbHVlID0gc3BsaXRWYWx1ZXNbc3BsaXRLZXldO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIENyZWF0ZSBuZXcgY2hpbGQgdmFsdWUgaWYgZG9lc24ndCBleGlzdFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghY2hpbGRWYWx1ZXNbc3BsaXRLZXldKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoaWxkVmFsdWVzW3NwbGl0S2V5XSA9IF9leHRlbmRzKHt9LCBuZXdWYWx1ZSwgeyBwYXJlbnQ6IGtleSwgY2hpbGRLZXk6IHNwbGl0S2V5IH0pO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh2YWx1ZVR5cGUuZGVmYXVsdFByb3BzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGlsZFZhbHVlc1tzcGxpdEtleV0gPSB2YWx1ZVR5cGUuZGVmYXVsdFByb3BzW3NwbGl0S2V5XSA/IF9leHRlbmRzKHt9LCBjaGlsZFZhbHVlc1tzcGxpdEtleV0sIHZhbHVlVHlwZS5kZWZhdWx0UHJvcHNbc3BsaXRLZXldKSA6IF9leHRlbmRzKHt9LCBjaGlsZFZhbHVlc1tzcGxpdEtleV0sIHZhbHVlVHlwZS5kZWZhdWx0UHJvcHMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hpbGRWYWx1ZXNbc3BsaXRLZXldW3Byb3BOYW1lXSA9IHNwbGl0VmFsdWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIG5ld1ZhbHVlLmNoaWxkcmVuID0ge307XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIE5vdyBsb29wIHRocm91Z2ggYWxsIGNoaWxkIHZhbHVlcyBhbmQgYWRkIHRoZW0gYXMgbm9ybWFsIHZhbHVlc1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgY2hpbGRLZXkgaW4gY2hpbGRWYWx1ZXMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoY2hpbGRWYWx1ZXMuaGFzT3duUHJvcGVydHkoY2hpbGRLZXkpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBjaGlsZFZhbHVlID0gY2hpbGRWYWx1ZXNbY2hpbGRLZXldO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgY29tYmluZWRLZXkgPSBrZXkgKyBjaGlsZEtleTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXdWYWx1ZS5jaGlsZHJlbltjaGlsZEtleV0gPSBjaGlsZFZhbHVlLmN1cnJlbnQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnRWYWx1ZXNbY29tYmluZWRLZXldID0gY2hpbGRWYWx1ZTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy52YWx1ZUtleXMuaW5kZXhPZihjb21iaW5lZEtleSkgPT09IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnZhbHVlS2V5cy5wdXNoKGNvbWJpbmVkS2V5KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gU2F2ZSBhIHRlbXBsYXRlIGZvciByZWNvbWJpbmF0aW9uIGlmIHByZXNlbnRcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh2YWx1ZVR5cGUudGVtcGxhdGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXdWYWx1ZS50ZW1wbGF0ZSA9IG5ld1ZhbHVlLnRlbXBsYXRlIHx8IHZhbHVlVHlwZS50ZW1wbGF0ZShuZXdWYWx1ZS5jdXJyZW50KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gT3Igd2UganVzdCBoYXZlIGRlZmF1bHQgdmFsdWUgcHJvcHMsIGxvYWQgdGhvc2UgXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodmFsdWVUeXBlLmRlZmF1bHRQcm9wcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ld1ZhbHVlID0gX2V4dGVuZHMoe30sIHZhbHVlVHlwZS5kZWZhdWx0UHJvcHMsIG5ld1ZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAvLyBVcGRhdGUgYXBwcm9wcmlhdGUgbGlzdHMgd2l0aCB2YWx1ZSBrZXlcbiAgICAgICAgICAgICAgICBpZiAobmV3VmFsdWUuY2hpbGRyZW4pIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMucGFyZW50S2V5cy5pbmRleE9mKGtleSkgPT09IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnBhcmVudEtleXMucHVzaChrZXkpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMudmFsdWVLZXlzLmluZGV4T2Yoa2V5KSA9PT0gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudmFsdWVLZXlzLnB1c2goa2V5KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGN1cnJlbnRWYWx1ZXNba2V5XSA9IG5ld1ZhbHVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gUHJlY29tcHV0ZSB2YWx1ZSBrZXkgYW5kIHBhcmVudCBrZXkgbGVuZ3RoIHRvIHByZXZlbnQgcGVyLWZyYW1lIG1lYXN1cmVtZW50XG4gICAgICAgIHRoaXMubnVtVmFsdWVLZXlzID0gdGhpcy52YWx1ZUtleXMubGVuZ3RoO1xuICAgICAgICB0aGlzLm51bVBhcmVudEtleXMgPSB0aGlzLnBhcmVudEtleXMubGVuZ3RoO1xuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH07XG5cbiAgICAvKlxuICAgICAgICBEZWNpZGUgd2hldGhlciB0aGlzIEFjdGlvbiB3aWxsIHJlbmRlciBvbiBuZXh0IGZyYW1lXG4gICAgICAgICBAcGFyYW0gW0FjdGlvbl1cbiAgICAgICAgQHBhcmFtIFtudW1iZXJdXG4gICAgICAgIEBwYXJhbSBbbnVtYmVyXVxuICAgICAgICBAcmV0dXJuIFtib29sZWFuXTogUmV0dXJuIHRydWUgdG8gcmVuZGVyXG4gICAgKi9cblxuICAgIEFjdGlvbi5wcm90b3R5cGUud2lsbFJlbmRlciA9IGZ1bmN0aW9uIHdpbGxSZW5kZXIoYWN0aW9uLCBmcmFtZVN0YW1wLCBlbGFwc2VkKSB7XG4gICAgICAgIHZhciBoYXNDaGFuZ2VkID0gZmFsc2U7XG5cbiAgICAgICAgLy8gQ2hlY2sgaWYgYmFzZSB2YWx1ZXMgaGF2ZSB1cGRhdGVkXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5udW1WYWx1ZUtleXM7IGkrKykge1xuICAgICAgICAgICAgdmFyIGtleSA9IHRoaXMudmFsdWVLZXlzW2ldO1xuICAgICAgICAgICAgdmFyIHZhbHVlID0gdGhpcy52YWx1ZXNba2V5XTtcblxuICAgICAgICAgICAgLy8gUnVuIHRyYW5zZm9ybSBmdW5jdGlvbiAoaWYgcHJlc2VudClcbiAgICAgICAgICAgIGlmICh2YWx1ZS50cmFuc2Zvcm0pIHtcbiAgICAgICAgICAgICAgICB2YWx1ZS5jdXJyZW50ID0gdmFsdWUudHJhbnNmb3JtKHZhbHVlLmN1cnJlbnQsIGtleSwgdGhpcyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIENhcCBtaW5pbXVtXG4gICAgICAgICAgICBpZiAoKDAsIF91dGlscy5pc051bSkodmFsdWUubWluKSkge1xuICAgICAgICAgICAgICAgIHZhbHVlLmN1cnJlbnQgPSBNYXRoLm1heCh2YWx1ZS5jdXJyZW50LCB2YWx1ZS5taW4pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBDYXAgbWF4aW11bVxuICAgICAgICAgICAgaWYgKCgwLCBfdXRpbHMuaXNOdW0pKHZhbHVlLm1heCkpIHtcbiAgICAgICAgICAgICAgICB2YWx1ZS5jdXJyZW50ID0gTWF0aC5taW4odmFsdWUuY3VycmVudCwgdmFsdWUubWF4KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gUm91bmQgbnVtYmVyXG4gICAgICAgICAgICBpZiAodmFsdWUucm91bmQpIHtcbiAgICAgICAgICAgICAgICB2YWx1ZS5jdXJyZW50ID0gTWF0aC5yb3VuZCh2YWx1ZS5jdXJyZW50KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gVXBkYXRlIHZlbG9jaXR5XG4gICAgICAgICAgICBpZiAoIXRoaXMuY2FsY3VsYXRlc1ZlbG9jaXR5KSB7XG4gICAgICAgICAgICAgICAgdmFsdWUudmVsb2NpdHkgPSAoMCwgX2NhbGMuc3BlZWRQZXJTZWNvbmQpKHZhbHVlLmN1cnJlbnQgLSB2YWx1ZS5wcmV2LCBlbGFwc2VkKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gSWYgdGhpcyB2YWx1ZSBoYXMgY2hhbmdlZFxuICAgICAgICAgICAgaWYgKHZhbHVlLnByZXYgIT09IHZhbHVlLmN1cnJlbnQpIHtcbiAgICAgICAgICAgICAgICBoYXNDaGFuZ2VkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB2YWx1ZS5wcmV2ID0gdmFsdWUuY3VycmVudDtcblxuICAgICAgICAgICAgICAgIC8vIEFwcGVuZCB1bml0XG4gICAgICAgICAgICAgICAgdmFyIHZhbHVlRm9yU3RhdGUgPSB2YWx1ZS51bml0ID8gdmFsdWUuY3VycmVudCArIHZhbHVlLnVuaXQgOiB2YWx1ZS5jdXJyZW50O1xuXG4gICAgICAgICAgICAgICAgLy8gQWRkIHRvIHN0YXRlIGlmIHRoaXMgaXMgbm90IGEgY2hpbGQgdmF1ZVxuICAgICAgICAgICAgICAgIGlmICghdmFsdWUucGFyZW50KSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGVba2V5XSA9IHZhbHVlRm9yU3RhdGU7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy52YWx1ZXNbdmFsdWUucGFyZW50XS5jaGlsZHJlblt2YWx1ZS5jaGlsZEtleV0gPSB2YWx1ZUZvclN0YXRlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzLm9uQ2xlYW51cCA/IHRydWUgOiBoYXNDaGFuZ2VkO1xuICAgIH07XG5cbiAgICAvKlxuICAgICAgICBJZiB3ZSBhcmUgcmVuZGVyaW5nLCByZWNvbWJpbmUgcGFyZW50IHZhbHVlcyBmaXJzdFxuICAgICovXG5cbiAgICBBY3Rpb24ucHJvdG90eXBlLm9uUHJlUmVuZGVyID0gZnVuY3Rpb24gb25QcmVSZW5kZXIoKSB7XG4gICAgICAgIC8vIFVwZGF0ZSBwYXJlbnQgdmFsdWVzXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5udW1QYXJlbnRLZXlzOyBpKyspIHtcbiAgICAgICAgICAgIHZhciBrZXkgPSB0aGlzLnBhcmVudEtleXNbaV07XG4gICAgICAgICAgICB2YXIgdmFsdWUgPSB0aGlzLnZhbHVlc1trZXldO1xuXG4gICAgICAgICAgICB2YWx1ZS5jdXJyZW50ID0gdmFsdWUudHlwZS5jb21iaW5lKHZhbHVlLmNoaWxkcmVuLCB2YWx1ZS50ZW1wbGF0ZSk7XG5cbiAgICAgICAgICAgIGlmICh0aGlzLnN0YXRlW2tleV0gIT09IHZhbHVlLmN1cnJlbnQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXRlW2tleV0gPSB2YWx1ZS5jdXJyZW50O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcblxuICAgIEFjdGlvbi5wcm90b3R5cGUub25SZW5kZXIgPSBmdW5jdGlvbiBvblJlbmRlcihfcmVmKSB7XG4gICAgICAgIHZhciBzdGF0ZSA9IF9yZWYuc3RhdGU7XG4gICAgICAgIHZhciBvbiA9IF9yZWYub247XG5cbiAgICAgICAgaWYgKG9uICYmIG9uLnNldCkge1xuICAgICAgICAgICAgb24uc2V0KHN0YXRlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLm9uRnJhbWUpIHtcbiAgICAgICAgICAgIHRoaXMub25GcmFtZSh0aGlzKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBBY3Rpb24ucHJvdG90eXBlLnBhdXNlID0gZnVuY3Rpb24gcGF1c2UoKSB7XG4gICAgICAgIF9Qcm9jZXNzLnByb3RvdHlwZS5zdG9wLmNhbGwodGhpcyk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH07XG5cbiAgICBBY3Rpb24ucHJvdG90eXBlLnJlc3VtZSA9IGZ1bmN0aW9uIHJlc3VtZSgpIHtcbiAgICAgICAgX1Byb2Nlc3MucHJvdG90eXBlLnN0YXJ0LmNhbGwodGhpcyk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH07XG5cbiAgICBBY3Rpb24ucHJvdG90eXBlLnN0YXJ0ID0gZnVuY3Rpb24gc3RhcnQoKSB7XG4gICAgICAgIHZhciB2YWx1ZXMgPSB0aGlzLnZhbHVlcztcbiAgICAgICAgX1Byb2Nlc3MucHJvdG90eXBlLnN0YXJ0LmNhbGwodGhpcyk7XG5cbiAgICAgICAgZm9yICh2YXIga2V5IGluIHZhbHVlcykge1xuICAgICAgICAgICAgaWYgKHZhbHVlcy5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgICAgICAgdmFsdWVzW2tleV0ucHJldiA9IHZhbHVlc1trZXldLm9yaWdpbiA9IHZhbHVlc1trZXldLmN1cnJlbnQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgLypcbiAgICAgICAgIyBHZXQgZGVmYXVsdCBBY3Rpb24gdmFsdWUgcHJvcGVydGllc1xuICAgICAgICAgQHJldHVybiBbb2JqZWN0XVxuICAgICovXG5cbiAgICBBY3Rpb24ucHJvdG90eXBlLmdldERlZmF1bHRWYWx1ZSA9IGZ1bmN0aW9uIGdldERlZmF1bHRWYWx1ZSgpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGN1cnJlbnQ6IDAsXG4gICAgICAgICAgICB2ZWxvY2l0eTogMCxcbiAgICAgICAgICAgIHJvdW5kOiBmYWxzZVxuICAgICAgICB9O1xuICAgIH07XG5cbiAgICAvKlxuICAgICAgICAjIEdldCBkZWZhdWx0IEFjdGlvbiB2YWx1ZSBwcm9wZXJ0eSBuYW1lXG4gICAgICAgICMjIFNldCB0aGlzIGB2YWx1ZWAgcHJvcGVydHkgd2hlbiBzZXQgYXMgdmFsdWUgaW5zdGVhZCBvZiBvYmplY3RcbiAgICAgICAgIEByZXR1cm4gW3N0cmluZ11cbiAgICAqL1xuXG4gICAgQWN0aW9uLnByb3RvdHlwZS5nZXREZWZhdWx0VmFsdWVQcm9wID0gZnVuY3Rpb24gZ2V0RGVmYXVsdFZhbHVlUHJvcCgpIHtcbiAgICAgICAgcmV0dXJuIERFRkFVTFRfUFJPUDtcbiAgICB9O1xuXG4gICAgcmV0dXJuIEFjdGlvbjtcbn0oX1Byb2Nlc3MzLmRlZmF1bHQpO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBBY3Rpb247XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5OeVl5OWhZM1JwYjI1ekwwRmpkR2x2Ymk1cWN5SmRMQ0p1WVcxbGN5STZXMTBzSW0xaGNIQnBibWR6SWpvaU96czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenRCUVUxQkxFbEJRVTBzWlVGQlpTeFRRVUZtTzBGQlEwNHNTVUZCVFN4dFFrRkJiVUlzUTBGQlF5eFpRVUZFTEVWQlFXVXNUVUZCWml4RlFVRjFRaXhKUVVGMlFpeEZRVUUyUWl4TFFVRTNRaXhGUVVGdlF5eExRVUZ3UXl4RFFVRnVRanRCUVVOT0xFbEJRVTBzZFVKQlFYVkNMR2xDUVVGcFFpeE5RVUZxUWpzN1NVRkZVanM3TzBGQlEycENMR0ZCUkdsQ0xFMUJRMnBDTEVOQlFWa3NTMEZCV2l4RlFVRnRRanM0UWtGRVJpeFJRVU5GT3p0QlFVTm1MR05CUVUwc1MwRkJUaXhIUVVGakxFVkJRV1FzUTBGRVpUdG5SRUZGWml4dlFrRkJUU3hMUVVGT0xFZEJSbVU3UzBGQmJrSTdPenM3T3pzN096dEJRVVJwUWl4eFFrRmhha0lzY1VKQlFXZENPMWxCUVZvc09FUkJRVkVzYTBKQlFVazdXVUZEU2l4VFFVRTRRaXhOUVVFNVFpeFBRVVJKTzFsQlEwa3NTMEZCYzBJc1RVRkJkRUlzUjBGRVNqczdXVUZEVnl4elEwRkJaU3g1UWtGRU1VSTdPMEZCUjFvc01rSkJRVTBzUjBGQlRpeFpRVUZWTEZWQlFWWXNSVUZJV1RzN1FVRkxXaXhaUVVGSkxFVkJRVW9zUlVGQlVUczdRVUZGU2l4cFFrRkJTeXhGUVVGTUxFZEJRVlVzUTBGQlJTeEhRVUZITEUxQlFVZ3NSMEZCWVN3eVFrRkJXU3hGUVVGYUxFTkJRV1lzUjBGQmFVTXNSVUZCYWtNc1EwRkdUanRUUVVGU096dEJRVXRCTEdGQlFVc3NUVUZCVEN4SFFVRmpMRXRCUVVzc1RVRkJUQ3hKUVVGbExFVkJRV1lzUTBGV1JqdEJRVmRhTEdGQlFVc3NVMEZCVEN4SFFVRnBRaXhMUVVGTExGTkJRVXdzU1VGQmEwSXNSVUZCYkVJc1EwRllURHRCUVZsYUxHRkJRVXNzVlVGQlRDeEhRVUZyUWl4TFFVRkxMRlZCUVV3c1NVRkJiVUlzUlVGQmJrSTdPenRCUVZwT0xGbEJaVTRzWjBKQlFXZENMRXRCUVVzc1RVRkJUQ3hEUVdaV08wRkJaMEphTEZsQlFVMHNaVUZCWlN4TFFVRkxMR1ZCUVV3c1JVRkJaaXhEUVdoQ1RUdEJRV2xDV2l4WlFVRk5MRzFDUVVGdFFpeExRVUZMTEcxQ1FVRk1MRVZCUVc1Q096czdRVUZxUWswc1lVRnZRbEFzU1VGQlNTeEhRVUZLTEVsQlFWY3NXVUZCYUVJc1JVRkJPRUk3UVVGRE1VSXNaMEpCUVVrc1lVRkJZU3hqUVVGaUxFTkJRVFJDTEVkQlFUVkNMRXRCUVc5RExGZEJRVmNzWTBGQldDeERRVUV3UWl4SFFVRXhRaXhEUVVGd1F5eEZRVUZ2UlR0QlFVTndSU3h2UWtGQlNTeFhRVUZYTEVkQlFWZ3NUVUZCYjBJc1UwRkJjRUlzUlVGQkswSTdRVUZETDBJc2FVTkJRV0VzUjBGQllpeEpRVUZ2UWl4WFFVRlhMRWRCUVZnc1EwRkJjRUlzUTBGRUswSTdhVUpCUVc1RE8yRkJSRW83VTBGRVNqczdPMEZCY0VKWkxHRkJOa0pRTEVsQlFVa3NSMEZCU2l4SlFVRlhMRTFCUVdoQ0xFVkJRWGRDTzBGQlEzQkNMR2RDUVVGSkxFOUJRVThzWTBGQlVDeERRVUZ6UWl4SFFVRjBRaXhEUVVGS0xFVkJRV2RETzBGQlF6VkNMRzlDUVVGTkxGRkJRVkVzVDBGQlR5eEhRVUZRTEVOQlFWSXNRMEZFYzBJN1FVRkZOVUlzYjBKQlFVMHNaMEpCUVdkQ0xHTkJRV01zUjBGQlpDeERRVUZvUWl4RFFVWnpRanRCUVVjMVFpeHZRa0ZCU1N4eFFrRkJTaXhEUVVnMFFqdEJRVWsxUWl4dlFrRkJTU3hYUVVGWExFVkJRVmc3T3p0QlFVcDNRaXh2UWtGUGVFSXNhMEpCUVUwc1MwRkJUaXhEUVVGS0xFVkJRV3RDTzBGQlEyUXNLMEpCUVZjc1MwRkJXQ3hEUVVSak8ybENRVUZzUWl4TlFVVlBPMEZCUTBnc05rSkJRVk1zWjBKQlFWUXNTVUZCTmtJc1MwRkJOMElzUTBGRVJ6dHBRa0ZHVURzN08wRkJVRFJDTEc5Q1FXTjRRaXhoUVVGS0xFVkJRVzFDTzBGQlEyWXNORU5CUVdkQ0xHVkJRV3RDTEZOQlFXeERMRU5CUkdVN1FVRkZaaXhuUTBGQldTeEpRVUZETEVOQlFVc3NSVUZCVEN4SlFVRlhMRXRCUVVzc1JVRkJUQ3hEUVVGUkxGbEJRVklzUjBGQmQwSXNTMEZCU3l4RlFVRk1MRU5CUVZFc1dVRkJVaXhEUVVGeFFpeEhRVUZ5UWl4RFFVRndReXhIUVVGblJTeGpRVUZqTEVsQlFXUTdPenRCUVVZM1JDeHBRa0ZCYmtJc1RVRkxUenRCUVVOSUxEUkNRVUZKTEZOQlFWTXNTVUZCVkN4TFFVRnJRaXhUUVVGc1FpeEZRVUUyUWp0QlFVTTNRaXh4UTBGQlV5eFBRVUZVTEVkQlFXMUNMRk5CUVZNc1NVRkJWQ3hEUVVSVk8zbENRVUZxUXl4TlFVZFBMRWxCUVVrc1UwRkJVeXhQUVVGVUxFdEJRWEZDTEZOQlFYSkNMRWxCUVd0RExFdEJRVXNzUlVGQlRDeEZRVUZUTzBGQlEyeEVMSEZEUVVGVExFOUJRVlFzUjBGQmJVSXNTMEZCU3l4RlFVRk1MRU5CUVZFc1IwRkJVaXhEUVVGWkxFZEJRVm9zUzBGQmIwSXNRMEZCY0VJc1EwRkVLMEk3ZVVKQlFTOURPenRCUVVsUUxEUkNRVUZKTEZOQlFWTXNTVUZCVkN4TFFVRnJRaXhUUVVGc1FpeEZRVUUyUWp0QlFVTTNRaXh4UTBGQlV5eEpRVUZVTEVkQlFXZENMRk5CUVZNc1QwRkJWQ3hEUVVSaE8zbENRVUZxUXpzN1FVRkpRU3huUkVGQlowSXNZMEZCYVVJc1UwRkJha01zUTBGYVJ6czdRVUZqU0N4cFEwRkJVeXhKUVVGVUxFZEJRV2RDTEZOQlFWTXNUMEZCVkRzN08wRkJaR0lzTkVKQmFVSkRMRTFCUVUwc1NVRkJUaXhGUVVGWk8wRkJRMW9zZDBOQlFWa3NUVUZCVFN4SlFVRk9PenM3UVVGRVFTeDVRa0ZCYUVJc1RVRkpUeXhKUVVGSkxFdEJRVXNzUlVGQlRDeEpRVUZYTEV0QlFVc3NSVUZCVEN4RFFVRlJMRmxCUVZJc1JVRkJjMEk3UVVGRGVFTXNORU5CUVZrc1MwRkJTeXhGUVVGTUxFTkJRVkVzV1VGQlVpeERRVUZ4UWl4SFFVRnlRaXhEUVVGYUxFTkJSSGRET3paQ1FVRnlReXhOUVVkQkxFbEJRVWtzY1VKQlFWTXNUVUZCVFN4UFFVRk9MRU5CUVdJc1JVRkJOa0k3TzBGQlJXaERMRzlEUVVGSkxHZENRVUZWTEVsQlFWWXNRMEZCWlN4TlFVRk5MRTlCUVU0c1EwRkJia0lzUlVGQmJVTTdRVUZETDBJN096czdPMEZCUkN0Q0xHbERRVUZ1UXl4TlFVMVBMRVZCVGxBN05rSkJSa2M3Y1VKQk4wSllPenM3UVVGa05FSXNiMEpCTUVSNFFpeFRRVUZLTEVWQlFXVTdRVUZEV0N3MlFrRkJVeXhKUVVGVUxFZEJRV2RDTEZOQlFXaENPenM3UVVGRVZ5eDNRa0ZKVUN4VlFVRlZMRXRCUVZZc1JVRkJhVUk3UVVGRGFrSXNORUpCUVUwc1kwRkJZeXhGUVVGa096czdRVUZFVnl3MlFrRkpXaXhKUVVGSkxFbEJRVWtzUTBGQlNpeEZRVUZQTEVsQlFVa3NiMEpCUVVvc1JVRkJNRUlzUjBGQk1VTXNSVUZCSzBNN1FVRkRNME1zWjBOQlFVMHNWMEZCVnl4cFFrRkJhVUlzUTBGQmFrSXNRMEZCV0N4RFFVUnhRenM3UVVGSE0wTXNaME5CUVVrc1UwRkJVeXhqUVVGVUxFTkJRWGRDTEZGQlFYaENMRU5CUVVvc1JVRkJkVU03UVVGRGJrTXNiME5CUVUwc1kwRkJZeXhWUVVGVkxFdEJRVllzUTBGQlowSXNVMEZCVXl4UlFVRlVMRU5CUVdoQ0xFTkJRV1FzUTBGRU5rSTdPMEZCUjI1RExIRkRRVUZMTEVsQlFVa3NVVUZCU2l4SlFVRm5RaXhYUVVGeVFpeEZRVUZyUXp0QlFVTTVRaXgzUTBGQlNTeFpRVUZaTEdOQlFWb3NRMEZCTWtJc1VVRkJNMElzUTBGQlNpeEZRVUV3UXp0QlFVTjBReXcwUTBGQlRTeGhRVUZoTEZsQlFWa3NVVUZCV2l4RFFVRmlPenRCUVVSblF5dzBRMEZIYkVNc1EwRkJReXhaUVVGWkxGRkJRVm9zUTBGQlJDeEZRVUYzUWp0QlFVTjRRaXgzUkVGQldTeFJRVUZhTEdsQ1FVRTJRaXhaUVVGVkxGRkJRVkVzUjBGQlVpeEZRVUZoTEZWQlFWVXNVVUZCVml4SFFVRndSQ3hEUVVSM1FqczdRVUZIZUVJc1owUkJRVWtzVlVGQlZTeFpRVUZXTEVWQlFYZENPMEZCUTNoQ0xEUkVRVUZaTEZGQlFWb3NTVUZCZDBJc1UwRkJReXhEUVVGVkxGbEJRVllzUTBGQmRVSXNVVUZCZGtJc1EwRkJSQ3huUWtGRFppeFpRVUZaTEZGQlFWb3NSMEZCTUVJc1ZVRkJWU3haUVVGV0xFTkJRWFZDTEZGQlFYWkNMRVZCUkZnc1owSkJSV1lzV1VGQldTeFJRVUZhTEVkQlFUQkNMRlZCUVZVc1dVRkJWaXhEUVVaWUxFTkJSRUU3TmtOQlFUVkNPM2xEUVVoS096dEJRVlZCTEc5RVFVRlpMRkZCUVZvc1JVRkJjMElzVVVGQmRFSXNTVUZCYTBNc1ZVRkJiRU1zUTBGaWMwTTdjVU5CUVRGRE8ybERRVVJLT3paQ1FVaEtPM2xDUVVoS096dEJRVEJDUVN4cFEwRkJVeXhSUVVGVUxFZEJRVzlDTEVWQlFYQkNPenM3UVVFNVFtbENMRFpDUVdsRFdpeEpRVUZKTEZGQlFVb3NTVUZCWjBJc1YwRkJja0lzUlVGQmEwTTdRVUZET1VJc1owTkJRVWtzV1VGQldTeGpRVUZhTEVOQlFUSkNMRkZCUVROQ0xFTkJRVW9zUlVGQk1FTTdRVUZEZEVNc2IwTkJRVTBzWVVGQllTeFpRVUZaTEZGQlFWb3NRMEZCWWl4RFFVUm5RenRCUVVWMFF5eHZRMEZCVFN4alFVRmpMRTFCUVUwc1VVRkJUaXhEUVVaclFqczdRVUZKZEVNc2VVTkJRVk1zVVVGQlZDeERRVUZyUWl4UlFVRnNRaXhKUVVFNFFpeFhRVUZYTEU5QlFWZ3NRMEZLVVR0QlFVdDBReXc0UTBGQll5eFhRVUZrTEVsQlFUWkNMRlZCUVRkQ0xFTkJUSE5ET3p0QlFVOTBReXh2UTBGQlNTeExRVUZMTEZOQlFVd3NRMEZCWlN4UFFVRm1MRU5CUVhWQ0xGZEJRWFpDTEUxQlFYZERMRU5CUVVNc1EwRkJSQ3hGUVVGSk8wRkJRelZETEhsRFFVRkxMRk5CUVV3c1EwRkJaU3hKUVVGbUxFTkJRVzlDTEZkQlFYQkNMRVZCUkRSRE8ybERRVUZvUkRzMlFrRlFTanQ1UWtGRVNqczdPMEZCYWtOcFFpdzBRa0ZuUkdJc1ZVRkJWU3hSUVVGV0xFVkJRVzlDTzBGQlEzQkNMSEZEUVVGVExGRkJRVlFzUjBGQmIwSXNVMEZCVXl4UlFVRlVMRWxCUVhGQ0xGVkJRVlVzVVVGQlZpeERRVUZ0UWl4VFFVRlRMRTlCUVZRc1EwRkJlRU1zUTBGRVFUdDVRa0ZCZUVJN096dEJRV2hFYVVJc2NVSkJRWEpDTEUxQmNVUlBMRWxCUVVrc1ZVRkJWU3haUVVGV0xFVkJRWGRDTzBGQlF5OUNMRzlFUVVGblFpeFZRVUZWTEZsQlFWWXNSVUZCTWtJc1UwRkJNME1zUTBGRUswSTdlVUpCUVRWQ08ybENRWHBFV0RzN08wRkJNVVEwUWl4dlFrRjVTSGhDTEZOQlFWTXNVVUZCVkN4RlFVRnRRanRCUVVOdVFpeDNRa0ZCU1N4TFFVRkxMRlZCUVV3c1EwRkJaMElzVDBGQmFFSXNRMEZCZDBJc1IwRkJlRUlzVFVGQmFVTXNRMEZCUXl4RFFVRkVMRVZCUVVrN1FVRkRja01zTmtKQlFVc3NWVUZCVEN4RFFVRm5RaXhKUVVGb1FpeERRVUZ4UWl4SFFVRnlRaXhGUVVSeFF6dHhRa0ZCZWtNN2FVSkJSRW9zVFVGSlR6dEJRVU5JTEhkQ1FVRkpMRXRCUVVzc1UwRkJUQ3hEUVVGbExFOUJRV1lzUTBGQmRVSXNSMEZCZGtJc1RVRkJaME1zUTBGQlF5eERRVUZFTEVWQlFVazdRVUZEY0VNc05rSkJRVXNzVTBGQlRDeERRVUZsTEVsQlFXWXNRMEZCYjBJc1IwRkJjRUlzUlVGRWIwTTdjVUpCUVhoRE8ybENRVXhLT3p0QlFWVkJMRGhDUVVGakxFZEJRV1FzU1VGQmNVSXNVVUZCY2tJc1EwRnVTVFJDTzJGQlFXaERPMU5CUkVvN096dEJRVGRDV1N4WlFYTkxXaXhEUVVGTExGbEJRVXdzUjBGQmIwSXNTMEZCU3l4VFFVRk1MRU5CUVdVc1RVRkJaaXhEUVhSTFVqdEJRWFZMV2l4aFFVRkxMR0ZCUVV3c1IwRkJjVUlzUzBGQlN5eFZRVUZNTEVOQlFXZENMRTFCUVdoQ0xFTkJka3RVT3p0QlFYbExXaXhsUVVGUExFbEJRVkFzUTBGNlMxazdPenM3T3pzN096czdPMEZCWWtNc2NVSkJhVTFxUWl4cFEwRkJWeXhSUVVGUkxGbEJRVmtzVTBGQlV6dEJRVU53UXl4WlFVRkpMR0ZCUVdFc1MwRkJZanM3TzBGQlJHZERMR0ZCU1M5Q0xFbEJRVWtzU1VGQlNTeERRVUZLTEVWQlFVOHNTVUZCU1N4TFFVRkxMRmxCUVV3c1JVRkJiVUlzUjBGQmRrTXNSVUZCTkVNN1FVRkRlRU1zWjBKQlFVMHNUVUZCVFN4TFFVRkxMRk5CUVV3c1EwRkJaU3hEUVVGbUxFTkJRVTRzUTBGRWEwTTdRVUZGZUVNc1owSkJRVTBzVVVGQlVTeExRVUZMTEUxQlFVd3NRMEZCV1N4SFFVRmFMRU5CUVZJN096dEJRVVpyUXl4blFrRkxjRU1zVFVGQlRTeFRRVUZPTEVWQlFXbENPMEZCUTJwQ0xITkNRVUZOTEU5QlFVNHNSMEZCWjBJc1RVRkJUU3hUUVVGT0xFTkJRV2RDTEUxQlFVMHNUMEZCVGl4RlFVRmxMRWRCUVM5Q0xFVkJRVzlETEVsQlFYQkRMRU5CUVdoQ0xFTkJSR2xDTzJGQlFYSkNPenM3UVVGTWQwTXNaMEpCVlhCRExHdENRVUZOTEUxQlFVMHNSMEZCVGl4RFFVRldMRVZCUVhOQ08wRkJRMnhDTEhOQ1FVRk5MRTlCUVU0c1IwRkJaMElzUzBGQlN5eEhRVUZNTEVOQlFWTXNUVUZCVFN4UFFVRk9MRVZCUVdVc1RVRkJUU3hIUVVGT0xFTkJRWGhETEVOQlJHdENPMkZCUVhSQ096czdRVUZXZDBNc1owSkJaWEJETEd0Q1FVRk5MRTFCUVUwc1IwRkJUaXhEUVVGV0xFVkJRWE5DTzBGQlEyeENMSE5DUVVGTkxFOUJRVTRzUjBGQlowSXNTMEZCU3l4SFFVRk1MRU5CUVZNc1RVRkJUU3hQUVVGT0xFVkJRV1VzVFVGQlRTeEhRVUZPTEVOQlFYaERMRU5CUkd0Q08yRkJRWFJDT3pzN1FVRm1kME1zWjBKQmIwSndReXhOUVVGTkxFdEJRVTRzUlVGQllUdEJRVU5pTEhOQ1FVRk5MRTlCUVU0c1IwRkJaMElzUzBGQlN5eExRVUZNTEVOQlFWY3NUVUZCVFN4UFFVRk9MRU5CUVROQ0xFTkJSR0U3WVVGQmFrSTdPenRCUVhCQ2QwTXNaMEpCZVVKd1F5eERRVUZETEV0QlFVc3NhMEpCUVV3c1JVRkJlVUk3UVVGRE1VSXNjMEpCUVUwc1VVRkJUaXhIUVVGcFFpd3dRa0ZCWlN4TlFVRk5MRTlCUVU0c1IwRkJaMElzVFVGQlRTeEpRVUZPTEVWQlFWa3NUMEZCTTBNc1EwRkJha0lzUTBGRU1FSTdZVUZCT1VJN096dEJRWHBDZDBNc1owSkJPRUp3UXl4TlFVRk5MRWxCUVU0c1MwRkJaU3hOUVVGTkxFOUJRVTRzUlVGQlpUdEJRVU01UWl3MlFrRkJZU3hKUVVGaUxFTkJSRGhDTzBGQlJUbENMSE5DUVVGTkxFbEJRVTRzUjBGQllTeE5RVUZOTEU5QlFVNDdPenRCUVVacFFpeHZRa0ZMZUVJc1owSkJRV2RDTEV0QlFVTXNRMEZCVFN4SlFVRk9MRWRCUVdNc1RVRkJUU3hQUVVGT0xFZEJRV2RDTEUxQlFVMHNTVUZCVGl4SFFVRmhMRTFCUVUwc1QwRkJUanM3TzBGQlRIQkRMRzlDUVZFeFFpeERRVUZETEUxQlFVMHNUVUZCVGl4RlFVRmpPMEZCUTJZc2VVSkJRVXNzUzBGQlRDeERRVUZYTEVkQlFWZ3NTVUZCYTBJc1lVRkJiRUlzUTBGRVpUdHBRa0ZCYmtJc1RVRkZUenRCUVVOSUxIbENRVUZMTEUxQlFVd3NRMEZCV1N4TlFVRk5MRTFCUVU0c1EwRkJXaXhEUVVFd1FpeFJRVUV4UWl4RFFVRnRReXhOUVVGTkxGRkJRVTRzUTBGQmJrTXNSMEZCY1VRc1lVRkJja1FzUTBGRVJ6dHBRa0ZHVUR0aFFWSktPMU5CT1VKS096dEJRVGhEUVN4bFFVRlBMRWxCUVVNc1EwRkJTeXhUUVVGTUxFZEJRV3RDTEVsQlFXNUNMRWRCUVRCQ0xGVkJRVEZDTEVOQmJFUTJRanM3T3pzN096dEJRV3BOZGtJc2NVSkJlVkJxUWl4eFEwRkJZenM3UVVGRlZpeGhRVUZMTEVsQlFVa3NTVUZCU1N4RFFVRktMRVZCUVU4c1NVRkJTU3hMUVVGTExHRkJRVXdzUlVGQmIwSXNSMEZCZUVNc1JVRkJOa003UVVGRGVrTXNaMEpCUVUwc1RVRkJUU3hMUVVGTExGVkJRVXdzUTBGQlowSXNRMEZCYUVJc1EwRkJUaXhEUVVSdFF6dEJRVVY2UXl4blFrRkJUU3hSUVVGUkxFdEJRVXNzVFVGQlRDeERRVUZaTEVkQlFWb3NRMEZCVWl4RFFVWnRRenM3UVVGSmVrTXNhMEpCUVUwc1QwRkJUaXhIUVVGblFpeE5RVUZOTEVsQlFVNHNRMEZCVnl4UFFVRllMRU5CUVcxQ0xFMUJRVTBzVVVGQlRpeEZRVUZuUWl4TlFVRk5MRkZCUVU0c1EwRkJia1FzUTBGS2VVTTdPMEZCVFhwRExHZENRVUZKTEV0QlFVc3NTMEZCVEN4RFFVRlhMRWRCUVZnc1RVRkJiMElzVFVGQlRTeFBRVUZPTEVWQlFXVTdRVUZEYmtNc2NVSkJRVXNzUzBGQlRDeERRVUZYTEVkQlFWZ3NTVUZCYTBJc1RVRkJUU3hQUVVGT0xFTkJSR2xDTzJGQlFYWkRPMU5CVGtvN096dEJRVE5RWVN4eFFrRjFVV3BDTEcxRFFVRjNRanRaUVVGaUxHMUNRVUZoTzFsQlFVNHNZVUZCVFRzN1FVRkRjRUlzV1VGQlNTeE5RVUZOTEVkQlFVY3NSMEZCU0N4RlFVRlJPMEZCUTJRc1pVRkJSeXhIUVVGSUxFTkJRVThzUzBGQlVDeEZRVVJqTzFOQlFXeENPenRCUVVsQkxGbEJRVWtzUzBGQlN5eFBRVUZNTEVWQlFXTTdRVUZEWkN4cFFrRkJTeXhQUVVGTUxFTkJRV0VzU1VGQllpeEZRVVJqTzFOQlFXeENPenM3UVVFMVVXRXNjVUpCYVZKcVFpeDVRa0ZCVVR0QlFVTktMREpDUVVGTkxFbEJRVTRzV1VGRVNUdEJRVVZLTEdWQlFVOHNTVUZCVUN4RFFVWkpPenM3UVVGcVVsTXNjVUpCYzFKcVFpd3lRa0ZCVXp0QlFVTk1MREpDUVVGTkxFdEJRVTRzV1VGRVN6dEJRVVZNTEdWQlFVOHNTVUZCVUN4RFFVWkxPenM3UVVGMFVsRXNjVUpCTWxKcVFpeDVRa0ZCVVR0QlFVTktMRmxCUVUwc1UwRkJVeXhMUVVGTExFMUJRVXdzUTBGRVdEdEJRVVZLTERKQ1FVRk5MRXRCUVU0c1dVRkdTVHM3UVVGSlNpeGhRVUZMTEVsQlFVa3NSMEZCU2l4SlFVRlhMRTFCUVdoQ0xFVkJRWGRDTzBGQlEzQkNMR2RDUVVGSkxFOUJRVThzWTBGQlVDeERRVUZ6UWl4SFFVRjBRaXhEUVVGS0xFVkJRV2RETzBGQlF6VkNMSFZDUVVGUExFZEJRVkFzUlVGQldTeEpRVUZhTEVkQlFXMUNMRTlCUVU4c1IwRkJVQ3hGUVVGWkxFMUJRVm9zUjBGQmNVSXNUMEZCVHl4SFFVRlFMRVZCUVZrc1QwRkJXaXhEUVVSYU8yRkJRV2hETzFOQlJFbzdPenM3T3pzN08wRkJMMUpoTEhGQ1FUSlRha0lzTmtOQlFXdENPMEZCUTJRc1pVRkJUenRCUVVOSUxIRkNRVUZUTEVOQlFWUTdRVUZEUVN4elFrRkJWU3hEUVVGV08wRkJRMEVzYlVKQlFVOHNTMEZCVUR0VFFVaEtMRU5CUkdNN096czdPenM3T3p0QlFUTlRSQ3h4UWtGNVZHcENMSEZFUVVGelFqdEJRVU5zUWl4bFFVRlBMRmxCUVZBc1EwRkVhMEk3T3p0WFFYcFVUQ0lzSW1acGJHVWlPaUpCWTNScGIyNHVhbk1pTENKemIzVnlZMlZTYjI5MElqb2lMMVZ6WlhKekwwMWhkSFF2VTJsMFpYTXZjRzl3Ylc5MGFXOXVJaXdpYzI5MWNtTmxjME52Ym5SbGJuUWlPbHNpYVcxd2IzSjBJRkJ5YjJObGMzTWdabkp2YlNBbkxpNHZjSEp2WTJWemN5OVFjbTlqWlhOekp6dGNibWx0Y0c5eWRDQjdJSE53WldWa1VHVnlVMlZqYjI1a0lIMGdabkp2YlNBbkxpNHZhVzVqTDJOaGJHTW5PMXh1YVcxd2IzSjBJSHNnYVhOT2RXMHNJR2x6VDJKcUxDQnBjMU4wY21sdVp5QjlJR1p5YjIwZ0p5NHVMMmx1WXk5MWRHbHNjeWM3WEc1cGJYQnZjblFnWW1sdVpFRmtZWEIwWlhJZ1puSnZiU0FuTGk0dmFXNWpMMkpwYm1RdFlXUmhjSFJsY2ljN1hHNXBiWEJ2Y25RZ1kyOXNiM0pVZVhCbElHWnliMjBnSnk0dUwzWmhiSFZsTFhSNWNHVnpMMk52Ykc5eUp6dGNibHh1WTI5dWMzUWdSRVZHUVZWTVZGOVFVazlRSUQwZ0oyTjFjbkpsYm5Rbk8xeHVZMjl1YzNRZ1RsVk5SVkpKUTBGTVgxWkJURlZGVXlBOUlGdEVSVVpCVlV4VVgxQlNUMUFzSUNkbWNtOXRKeXdnSjNSdkp5d2dKMjFwYmljc0lDZHRZWGduWFR0Y2JtTnZibk4wSUU1VlRWOU9WVTFGVWtsRFFVeGZWa0ZNVlVWVElEMGdUbFZOUlZKSlEwRk1YMVpCVEZWRlV5NXNaVzVuZEdnN1hHNWNibVY0Y0c5eWRDQmtaV1poZFd4MElHTnNZWE56SUVGamRHbHZiaUJsZUhSbGJtUnpJRkJ5YjJObGMzTWdlMXh1SUNBZ0lHTnZibk4wY25WamRHOXlLSEJ5YjNCektTQjdYRzRnSUNBZ0lDQWdJSEJ5YjNCekxuTjBZWFJsSUQwZ2UzMDdYRzRnSUNBZ0lDQWdJSE4xY0dWeUtIQnliM0J6S1R0Y2JpQWdJQ0I5WEc1Y2JpQWdJQ0F2S2x4dUlDQWdJQ0FnSUNBaklGTmxkQ0JCWTNScGIyNGdjSEp2Y0dWeWRHbGxjMXh1SUNBZ0lDQWdJQ0FqSXlCVFpYUWdkWE5sY2kxa1pXWnBibVZrSUVGamRHbHZiaUJ3Y205d1pYSjBhV1Z6WEc1Y2JpQWdJQ0FnSUNBZ1FIQmhjbUZ0SUZ0dlltcGxZM1JkWEc0Z0lDQWdJQ0FnSUVCeVpYUjFjbTRnVzBGamRHbHZibDFjYmlBZ0lDQXFMMXh1SUNBZ0lITmxkQ2h3Y205d2N5QTlJSHQ5S1NCN1hHNGdJQ0FnSUNBZ0lHTnZibk4wSUhzZ2RtRnNkV1Z6TENCdmJpd2dMaTR1Y0hKdmNITlViMU5sZENCOUlEMGdjSEp2Y0hNN1hHNWNiaUFnSUNBZ0lDQWdjM1Z3WlhJdWMyVjBLSEJ5YjNCelZHOVRaWFFwTzF4dVhHNGdJQ0FnSUNBZ0lHbG1JQ2h2YmlrZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnTHk4Z1JIVmphM1I1Y0dsemFDQmphR1ZqYXlCbWIzSWdRV1JoY0hSbGNseHVJQ0FnSUNBZ0lDQWdJQ0FnZEdocGN5NXZiaUE5SUNnaGIyNHVjMlYwZEdWeUtTQS9JR0pwYm1SQlpHRndkR1Z5S0c5dUtTQTZJRzl1TzF4dUlDQWdJQ0FnSUNCOVhHNWNiaUFnSUNBZ0lDQWdkR2hwY3k1MllXeDFaWE1nUFNCMGFHbHpMblpoYkhWbGN5QjhmQ0I3ZlR0Y2JpQWdJQ0FnSUNBZ2RHaHBjeTUyWVd4MVpVdGxlWE1nUFNCMGFHbHpMblpoYkhWbFMyVjVjeUI4ZkNCYlhUdGNiaUFnSUNBZ0lDQWdkR2hwY3k1d1lYSmxiblJMWlhseklEMGdkR2hwY3k1d1lYSmxiblJMWlhseklIeDhJRnRkTzF4dVhHNGdJQ0FnSUNBZ0lDOHZJRTFsY21kbElHNWxkeUJnZG1Gc2RXVmdJSEJ5YjNCbGNuUnBaWE1nZDJsMGFDQmxlR2x6ZEdsdVoxeHVJQ0FnSUNBZ0lDQmpiMjV6ZENCamRYSnlaVzUwVm1Gc2RXVnpJRDBnZEdocGN5NTJZV3gxWlhNN1hHNGdJQ0FnSUNBZ0lHTnZibk4wSUdSbFptRjFiSFJXWVd4MVpTQTlJSFJvYVhNdVoyVjBSR1ZtWVhWc2RGWmhiSFZsS0NrN1hHNGdJQ0FnSUNBZ0lHTnZibk4wSUdSbFptRjFiSFJXWVd4MVpWQnliM0FnUFNCMGFHbHpMbWRsZEVSbFptRjFiSFJXWVd4MVpWQnliM0FvS1R0Y2JseHVJQ0FnSUNBZ0lDQXZMeUJKYm1obGNtbDBJSFpoYkhWbElIQnliM0JsY25ScFpYTWdabkp2YlNCZ2NISnZjSE5nWEc0Z0lDQWdJQ0FnSUdadmNpQW9iR1YwSUd0bGVTQnBiaUJrWldaaGRXeDBWbUZzZFdVcElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUdsbUlDaGtaV1poZFd4MFZtRnNkV1V1YUdGelQzZHVVSEp2Y0dWeWRIa29hMlY1S1NBbUppQndjbTl3YzFSdlUyVjBMbWhoYzA5M2JsQnliM0JsY25SNUtHdGxlU2twSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCcFppQW9jSEp2Y0hOVWIxTmxkRnRyWlhsZElDRTlQU0IxYm1SbFptbHVaV1FwSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdaR1ZtWVhWc2RGWmhiSFZsVzJ0bGVWMGdQU0J3Y205d2MxUnZVMlYwVzJ0bGVWMDdYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdmVnh1SUNBZ0lDQWdJQ0FnSUNBZ2ZWeHVJQ0FnSUNBZ0lDQjlYRzVjYmlBZ0lDQWdJQ0FnTHk4Z1EyaGxZMnNnWVd4c0lIWmhiSFZsY3lCaGJtUWdjM0JzYVhRZ2FXNTBieUJqYUdsc1pDQjJZV3gxWlhNZ1lYTWdibVZqWTJWemMyRnllVnh1SUNBZ0lDQWdJQ0JtYjNJZ0tHeGxkQ0JyWlhrZ2FXNGdkbUZzZFdWektTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNCcFppQW9kbUZzZFdWekxtaGhjMDkzYmxCeWIzQmxjblI1S0d0bGVTa3BJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0JqYjI1emRDQjJZV3gxWlNBOUlIWmhiSFZsYzF0clpYbGRPMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJR052Ym5OMElHVjRhWE4wYVc1blZtRnNkV1VnUFNCamRYSnlaVzUwVm1Gc2RXVnpXMnRsZVYwN1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2JHVjBJSFpoYkhWbFZIbHdaVHRjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0JzWlhRZ2JtVjNWbUZzZFdVZ1BTQjdmVHRjYmx4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUM4dklFTnZiblpsY25RZ2JtVjNJSFpoYkhWbElHbHVkRzhnYjJKcVpXTjBJR2xtSUdsMElHbHpiaWQwSUdGc2NtVmhaSGxjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0JwWmlBb2FYTlBZbW9vZG1Gc2RXVXBLU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lHNWxkMVpoYkhWbElEMGdkbUZzZFdVN1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2ZTQmxiSE5sSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdibVYzVm1Gc2RXVmJaR1ZtWVhWc2RGWmhiSFZsVUhKdmNGMGdQU0IyWVd4MVpUdGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQjlYRzVjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0F2THlCSlppQjJZV3gxWlNCaGJISmxZV1I1SUdWNGFYTjBjeXdnWTJobFkyc2dabTl5SUdGdVpDQjFjMlVnWlhocGMzUnBibWNnZEhsd1pWeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lHbG1JQ2hsZUdsemRHbHVaMVpoYkhWbEtTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUc1bGQxWmhiSFZsSUQwZ2V5QXVMaTVsZUdsemRHbHVaMVpoYkhWbExDQXVMaTV1WlhkV1lXeDFaU0I5TzF4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQjJZV3gxWlZSNWNHVWdQU0FvZEdocGN5NXZiaUFtSmlCMGFHbHpMbTl1TG1kbGRGWmhiSFZsVkhsd1pTa2dQeUIwYUdsekxtOXVMbWRsZEZaaGJIVmxWSGx3WlNoclpYa3BJRG9nWlhocGMzUnBibWRXWVd4MVpTNTBlWEJsTzF4dVhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0x5OGdTV1lnZEdocGN5QnBjeUJoSUc1bGR5QjJZV3gxWlN3Z1kyaGxZMnNnWm05eUlIUjVjR1ZjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0I5SUdWc2MyVWdlMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCcFppQW9ibVYzVm1Gc2RXVXVabkp2YlNBaFBUMGdkVzVrWldacGJtVmtLU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0J1WlhkV1lXeDFaUzVqZFhKeVpXNTBJRDBnYm1WM1ZtRnNkV1V1Wm5KdmJUdGNibHh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCOUlHVnNjMlVnYVdZZ0tHNWxkMVpoYkhWbExtTjFjbkpsYm5RZ1BUMDlJSFZ1WkdWbWFXNWxaQ0FtSmlCMGFHbHpMbTl1S1NCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCdVpYZFdZV3gxWlM1amRYSnlaVzUwSUQwZ2RHaHBjeTV2Ymk1blpYUW9hMlY1S1NCOGZDQXdPMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCOVhHNWNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnYVdZZ0tHNWxkMVpoYkhWbExtWnliMjBnUFQwOUlIVnVaR1ZtYVc1bFpDa2dlMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdibVYzVm1Gc2RXVXVabkp2YlNBOUlHNWxkMVpoYkhWbExtTjFjbkpsYm5RN1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJSDFjYmx4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQnVaWGRXWVd4MVpTQTlJSHNnTGk0dVpHVm1ZWFZzZEZaaGJIVmxMQ0F1TGk1dVpYZFdZV3gxWlNCOU8xeHVYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUc1bGQxWmhiSFZsTG5CeVpYWWdQU0J1WlhkV1lXeDFaUzVqZFhKeVpXNTBPMXh1WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDOHZJRWxtSUc5dVpTQnBjeUJsZUhCc2FXTnBkR3g1SUdGemMybG5ibVZrTENCMWMyVWdkR2hoZEZ4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQnBaaUFvZG1Gc2RXVXVkSGx3WlNrZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2RtRnNkV1ZVZVhCbElEMGdkbUZzZFdVdWRIbHdaVHRjYmx4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQXZMeUJQY2lCcFppQnZkWElnUVdSaGNIUmxjaUJvWVhNZ1lTQjBlWEJsVFdGd0xDQjFjMlVnZEdoaGRGeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0I5SUdWc2MyVWdhV1lnS0hSb2FYTXViMjRnSmlZZ2RHaHBjeTV2Ymk1blpYUldZV3gxWlZSNWNHVXBJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJSFpoYkhWbFZIbHdaU0E5SUhSb2FYTXViMjR1WjJWMFZtRnNkV1ZVZVhCbEtHdGxlU2s3WEc1Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdmU0JsYkhObElHbG1JQ2hwYzFOMGNtbHVaeWgyWVd4MVpTNWpkWEp5Wlc1MEtTa2dlMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdMeThnVkdWemRDQnBaaUIwYUdseklHbHpJR0VnWTI5c2IzSWdkbUZzZFdWY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUdsbUlDaGpiMnh2Y2xSNWNHVXVkR1Z6ZENoMllXeDFaUzVqZFhKeVpXNTBLU2tnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lIWmhiSFZsVkhsd1pTQTlJR052Ykc5eVZIbHdaVHRjYmx4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnTHk4Z1ZHVnpkQ0JwWmlCMGFHbHpJR2x6SUdFZ1kyOXRjR3hsZUNCemRISnBibWRjYmx4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnTHk4Z1ZISmxZWFFnWVhNZ1lTQjFibWwwSUhaaGJIVmxYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQjlJR1ZzYzJVZ2UxeHVYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQjlYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUgxY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCOVhHNWNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQXZMeUJKWmlCM1pTZDJaU0JuYjNRZ1lTQjJZV3gxWlZSNWNHVWdkR2hsYmlCd2NtVndjbTlqWlhOeklIUm9aU0IyWVd4MVpTQmhZMk52Y21ScGJtZHNlVnh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJR2xtSUNoMllXeDFaVlI1Y0dVcElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnYm1WM1ZtRnNkV1V1ZEhsd1pTQTlJSFpoYkhWbFZIbHdaVHRjYmx4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQXZMeUJKWmlCMGFHbHpJSFpoYkhWbElITm9iM1ZzWkNCaVpTQnpjR3hwZEN3Z2MzQnNhWFJjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2FXWWdLSFpoYkhWbFZIbHdaUzV6Y0d4cGRDa2dlMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdZMjl1YzNRZ1kyaHBiR1JXWVd4MVpYTWdQU0I3ZlR0Y2JseHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0x5OGdURzl2Y0NCdmRtVnlJRzUxYldWeWFXTmhiQ0IyWVd4MVpYTWdZVzVrSUhOd2JHbDBJR0Z1ZVNCd2NtVnpaVzUwWEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0JtYjNJZ0tHeGxkQ0JwSUQwZ01Ec2dhU0E4SUU1VlRWOU9WVTFGVWtsRFFVeGZWa0ZNVlVWVE95QnBLeXNwSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQmpiMjV6ZENCd2NtOXdUbUZ0WlNBOUlFNVZUVVZTU1VOQlRGOVdRVXhWUlZOYmFWMDdYRzVjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCcFppQW9ibVYzVm1Gc2RXVXVhR0Z6VDNkdVVISnZjR1Z5ZEhrb2NISnZjRTVoYldVcEtTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lHTnZibk4wSUhOd2JHbDBWbUZzZFdWeklEMGdkbUZzZFdWVWVYQmxMbk53YkdsMEtHNWxkMVpoYkhWbFczQnliM0JPWVcxbFhTazdYRzVjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdabTl5SUNoc1pYUWdjM0JzYVhSTFpYa2dhVzRnYzNCc2FYUldZV3gxWlhNcElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJR2xtSUNoemNHeHBkRlpoYkhWbGN5NW9ZWE5QZDI1UWNtOXdaWEowZVNoemNHeHBkRXRsZVNrcElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCamIyNXpkQ0J6Y0d4cGRGWmhiSFZsSUQwZ2MzQnNhWFJXWVd4MVpYTmJjM0JzYVhSTFpYbGRPMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDOHZJRU55WldGMFpTQnVaWGNnWTJocGJHUWdkbUZzZFdVZ2FXWWdaRzlsYzI0bmRDQmxlR2x6ZEZ4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJR2xtSUNnaFkyaHBiR1JXWVd4MVpYTmJjM0JzYVhSTFpYbGRLU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUdOb2FXeGtWbUZzZFdWelczTndiR2wwUzJWNVhTQTlJSHNnTGk0dWJtVjNWbUZzZFdVc0lIQmhjbVZ1ZERvZ2EyVjVMQ0JqYUdsc1pFdGxlVG9nYzNCc2FYUkxaWGtnZlR0Y2JseHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQnBaaUFvZG1Gc2RXVlVlWEJsTG1SbFptRjFiSFJRY205d2N5a2dlMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ1kyaHBiR1JXWVd4MVpYTmJjM0JzYVhSTFpYbGRJRDBnS0haaGJIVmxWSGx3WlM1a1pXWmhkV3gwVUhKdmNITmJjM0JzYVhSTFpYbGRLU0EvWEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnZXlBdUxpNWphR2xzWkZaaGJIVmxjMXR6Y0d4cGRFdGxlVjBzSUM0dUxuWmhiSFZsVkhsd1pTNWtaV1poZFd4MFVISnZjSE5iYzNCc2FYUkxaWGxkSUgwZ09seHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lIc2dMaTR1WTJocGJHUldZV3gxWlhOYmMzQnNhWFJMWlhsZExDQXVMaTUyWVd4MVpWUjVjR1V1WkdWbVlYVnNkRkJ5YjNCeklIMDdYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJSDFjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQjlYRzVjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQmphR2xzWkZaaGJIVmxjMXR6Y0d4cGRFdGxlVjFiY0hKdmNFNWhiV1ZkSUQwZ2MzQnNhWFJXWVd4MVpUdGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJSDFjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdmVnh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUgxY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUgxY2JseHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2JtVjNWbUZzZFdVdVkyaHBiR1J5Wlc0Z1BTQjdmVHRjYmx4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnTHk4Z1RtOTNJR3h2YjNBZ2RHaHliM1ZuYUNCaGJHd2dZMmhwYkdRZ2RtRnNkV1Z6SUdGdVpDQmhaR1FnZEdobGJTQmhjeUJ1YjNKdFlXd2dkbUZzZFdWelhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCbWIzSWdLR3hsZENCamFHbHNaRXRsZVNCcGJpQmphR2xzWkZaaGJIVmxjeWtnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lHbG1JQ2hqYUdsc1pGWmhiSFZsY3k1b1lYTlBkMjVRY205d1pYSjBlU2hqYUdsc1pFdGxlU2twSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnWTI5dWMzUWdZMmhwYkdSV1lXeDFaU0E5SUdOb2FXeGtWbUZzZFdWelcyTm9hV3hrUzJWNVhUdGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ1kyOXVjM1FnWTI5dFltbHVaV1JMWlhrZ1BTQnJaWGtnS3lCamFHbHNaRXRsZVR0Y2JseHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCdVpYZFdZV3gxWlM1amFHbHNaSEpsYmx0amFHbHNaRXRsZVYwZ1BTQmphR2xzWkZaaGJIVmxMbU4xY25KbGJuUTdYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lHTjFjbkpsYm5SV1lXeDFaWE5iWTI5dFltbHVaV1JMWlhsZElEMGdZMmhwYkdSV1lXeDFaVHRjYmx4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0JwWmlBb2RHaHBjeTUyWVd4MVpVdGxlWE11YVc1a1pYaFBaaWhqYjIxaWFXNWxaRXRsZVNrZ1BUMDlJQzB4S1NCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQjBhR2x6TG5aaGJIVmxTMlY1Y3k1d2RYTm9LR052YldKcGJtVmtTMlY1S1R0Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnZlZ4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lIMWNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lIMWNibHh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdMeThnVTJGMlpTQmhJSFJsYlhCc1lYUmxJR1p2Y2lCeVpXTnZiV0pwYm1GMGFXOXVJR2xtSUhCeVpYTmxiblJjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJR2xtSUNoMllXeDFaVlI1Y0dVdWRHVnRjR3hoZEdVcElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0J1WlhkV1lXeDFaUzUwWlcxd2JHRjBaU0E5SUc1bGQxWmhiSFZsTG5SbGJYQnNZWFJsSUh4OElIWmhiSFZsVkhsd1pTNTBaVzF3YkdGMFpTaHVaWGRXWVd4MVpTNWpkWEp5Wlc1MEtUdGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lIMWNibHh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBdkx5QlBjaUIzWlNCcWRYTjBJR2hoZG1VZ1pHVm1ZWFZzZENCMllXeDFaU0J3Y205d2N5d2diRzloWkNCMGFHOXpaU0FnSUZ4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQjlJR1ZzYzJVZ2FXWWdLSFpoYkhWbFZIbHdaUzVrWldaaGRXeDBVSEp2Y0hNcElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lHNWxkMVpoYkhWbElEMGdleUF1TGk1MllXeDFaVlI1Y0dVdVpHVm1ZWFZzZEZCeWIzQnpMQ0F1TGk1dVpYZFdZV3gxWlNCOU8xeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0I5WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnZlZ4dVhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0x5OGdWWEJrWVhSbElHRndjSEp2Y0hKcFlYUmxJR3hwYzNSeklIZHBkR2dnZG1Gc2RXVWdhMlY1WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnYVdZZ0tHNWxkMVpoYkhWbExtTm9hV3hrY21WdUtTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUdsbUlDaDBhR2x6TG5CaGNtVnVkRXRsZVhNdWFXNWtaWGhQWmloclpYa3BJRDA5UFNBdE1Ta2dlMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdkR2hwY3k1d1lYSmxiblJMWlhsekxuQjFjMmdvYTJWNUtUdGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnZlZ4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUgwZ1pXeHpaU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lHbG1JQ2gwYUdsekxuWmhiSFZsUzJWNWN5NXBibVJsZUU5bUtHdGxlU2tnUFQwOUlDMHhLU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0IwYUdsekxuWmhiSFZsUzJWNWN5NXdkWE5vS0d0bGVTazdYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUgxY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCOVhHNWNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQmpkWEp5Wlc1MFZtRnNkV1Z6VzJ0bGVWMGdQU0J1WlhkV1lXeDFaVHRjYmlBZ0lDQWdJQ0FnSUNBZ0lIMWNiaUFnSUNBZ0lDQWdmVnh1WEc0Z0lDQWdJQ0FnSUM4dklGQnlaV052YlhCMWRHVWdkbUZzZFdVZ2EyVjVJR0Z1WkNCd1lYSmxiblFnYTJWNUlHeGxibWQwYUNCMGJ5QndjbVYyWlc1MElIQmxjaTFtY21GdFpTQnRaV0Z6ZFhKbGJXVnVkRnh1SUNBZ0lDQWdJQ0IwYUdsekxtNTFiVlpoYkhWbFMyVjVjeUE5SUhSb2FYTXVkbUZzZFdWTFpYbHpMbXhsYm1kMGFEdGNiaUFnSUNBZ0lDQWdkR2hwY3k1dWRXMVFZWEpsYm5STFpYbHpJRDBnZEdocGN5NXdZWEpsYm5STFpYbHpMbXhsYm1kMGFEdGNibHh1SUNBZ0lDQWdJQ0J5WlhSMWNtNGdkR2hwY3p0Y2JpQWdJQ0I5WEc1Y2JpQWdJQ0F2S2x4dUlDQWdJQ0FnSUNCRVpXTnBaR1VnZDJobGRHaGxjaUIwYUdseklFRmpkR2x2YmlCM2FXeHNJSEpsYm1SbGNpQnZiaUJ1WlhoMElHWnlZVzFsWEc1Y2JpQWdJQ0FnSUNBZ1FIQmhjbUZ0SUZ0QlkzUnBiMjVkWEc0Z0lDQWdJQ0FnSUVCd1lYSmhiU0JiYm5WdFltVnlYVnh1SUNBZ0lDQWdJQ0JBY0dGeVlXMGdXMjUxYldKbGNsMWNiaUFnSUNBZ0lDQWdRSEpsZEhWeWJpQmJZbTl2YkdWaGJsMDZJRkpsZEhWeWJpQjBjblZsSUhSdklISmxibVJsY2x4dUlDQWdJQ292WEc0Z0lDQWdkMmxzYkZKbGJtUmxjaWhoWTNScGIyNHNJR1p5WVcxbFUzUmhiWEFzSUdWc1lYQnpaV1FwSUh0Y2JpQWdJQ0FnSUNBZ2JHVjBJR2hoYzBOb1lXNW5aV1FnUFNCbVlXeHpaVHRjYmx4dUlDQWdJQ0FnSUNBdkx5QkRhR1ZqYXlCcFppQmlZWE5sSUhaaGJIVmxjeUJvWVhabElIVndaR0YwWldRZ1hHNGdJQ0FnSUNBZ0lHWnZjaUFvYkdWMElHa2dQU0F3T3lCcElEd2dkR2hwY3k1dWRXMVdZV3gxWlV0bGVYTTdJR2tyS3lrZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnWTI5dWMzUWdhMlY1SUQwZ2RHaHBjeTUyWVd4MVpVdGxlWE5iYVYwN1hHNGdJQ0FnSUNBZ0lDQWdJQ0JqYjI1emRDQjJZV3gxWlNBOUlIUm9hWE11ZG1Gc2RXVnpXMnRsZVYwN1hHNWNiaUFnSUNBZ0lDQWdJQ0FnSUM4dklGSjFiaUIwY21GdWMyWnZjbTBnWm5WdVkzUnBiMjRnS0dsbUlIQnlaWE5sYm5RcFhHNGdJQ0FnSUNBZ0lDQWdJQ0JwWmlBb2RtRnNkV1V1ZEhKaGJuTm1iM0p0S1NCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2RtRnNkV1V1WTNWeWNtVnVkQ0E5SUhaaGJIVmxMblJ5WVc1elptOXliU2gyWVd4MVpTNWpkWEp5Wlc1MExDQnJaWGtzSUhSb2FYTXBPMXh1SUNBZ0lDQWdJQ0FnSUNBZ2ZWeHVYRzRnSUNBZ0lDQWdJQ0FnSUNBdkx5QkRZWEFnYldsdWFXMTFiVnh1SUNBZ0lDQWdJQ0FnSUNBZ2FXWWdLR2x6VG5WdEtIWmhiSFZsTG0xcGJpa3BJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0IyWVd4MVpTNWpkWEp5Wlc1MElEMGdUV0YwYUM1dFlYZ29kbUZzZFdVdVkzVnljbVZ1ZEN3Z2RtRnNkV1V1YldsdUtUdGNiaUFnSUNBZ0lDQWdJQ0FnSUgxY2JseHVJQ0FnSUNBZ0lDQWdJQ0FnTHk4Z1EyRndJRzFoZUdsdGRXMWNiaUFnSUNBZ0lDQWdJQ0FnSUdsbUlDaHBjMDUxYlNoMllXeDFaUzV0WVhncEtTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdkbUZzZFdVdVkzVnljbVZ1ZENBOUlFMWhkR2d1YldsdUtIWmhiSFZsTG1OMWNuSmxiblFzSUhaaGJIVmxMbTFoZUNrN1hHNGdJQ0FnSUNBZ0lDQWdJQ0I5WEc1Y2JpQWdJQ0FnSUNBZ0lDQWdJQzh2SUZKdmRXNWtJRzUxYldKbGNseHVJQ0FnSUNBZ0lDQWdJQ0FnYVdZZ0tIWmhiSFZsTG5KdmRXNWtLU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnZG1Gc2RXVXVZM1Z5Y21WdWRDQTlJRTFoZEdndWNtOTFibVFvZG1Gc2RXVXVZM1Z5Y21WdWRDazdYRzRnSUNBZ0lDQWdJQ0FnSUNCOVhHNWNiaUFnSUNBZ0lDQWdJQ0FnSUM4dklGVndaR0YwWlNCMlpXeHZZMmwwZVZ4dUlDQWdJQ0FnSUNBZ0lDQWdhV1lnS0NGMGFHbHpMbU5oYkdOMWJHRjBaWE5XWld4dlkybDBlU2tnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUhaaGJIVmxMblpsYkc5amFYUjVJRDBnYzNCbFpXUlFaWEpUWldOdmJtUW9kbUZzZFdVdVkzVnljbVZ1ZENBdElIWmhiSFZsTG5CeVpYWXNJR1ZzWVhCelpXUXBPMXh1SUNBZ0lDQWdJQ0FnSUNBZ2ZWeHVYRzRnSUNBZ0lDQWdJQ0FnSUNBdkx5QkpaaUIwYUdseklIWmhiSFZsSUdoaGN5QmphR0Z1WjJWa1hHNGdJQ0FnSUNBZ0lDQWdJQ0JwWmlBb2RtRnNkV1V1Y0hKbGRpQWhQVDBnZG1Gc2RXVXVZM1Z5Y21WdWRDa2dlMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJR2hoYzBOb1lXNW5aV1FnUFNCMGNuVmxPMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJSFpoYkhWbExuQnlaWFlnUFNCMllXeDFaUzVqZFhKeVpXNTBPMXh1WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnTHk4Z1FYQndaVzVrSUhWdWFYUmNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQmpiMjV6ZENCMllXeDFaVVp2Y2xOMFlYUmxJRDBnS0haaGJIVmxMblZ1YVhRcElEOGdkbUZzZFdVdVkzVnljbVZ1ZENBcklIWmhiSFZsTG5WdWFYUWdPaUIyWVd4MVpTNWpkWEp5Wlc1ME8xeHVYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdMeThnUVdSa0lIUnZJSE4wWVhSbElHbG1JSFJvYVhNZ2FYTWdibTkwSUdFZ1kyaHBiR1FnZG1GMVpWeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lHbG1JQ2doZG1Gc2RXVXVjR0Z5Wlc1MEtTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUhSb2FYTXVjM1JoZEdWYmEyVjVYU0E5SUhaaGJIVmxSbTl5VTNSaGRHVTdYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdmU0JsYkhObElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnZEdocGN5NTJZV3gxWlhOYmRtRnNkV1V1Y0dGeVpXNTBYUzVqYUdsc1pISmxibHQyWVd4MVpTNWphR2xzWkV0bGVWMGdQU0IyWVd4MVpVWnZjbE4wWVhSbE8xeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lIMWNiaUFnSUNBZ0lDQWdJQ0FnSUgxY2JpQWdJQ0FnSUNBZ2ZWeHVYRzRnSUNBZ0lDQWdJSEpsZEhWeWJpQW9kR2hwY3k1dmJrTnNaV0Z1ZFhBcElEOGdkSEoxWlNBNklHaGhjME5vWVc1blpXUTdYRzRnSUNBZ2ZWeHVYRzRnSUNBZ0x5cGNiaUFnSUNBZ0lDQWdTV1lnZDJVZ1lYSmxJSEpsYm1SbGNtbHVaeXdnY21WamIyMWlhVzVsSUhCaGNtVnVkQ0IyWVd4MVpYTWdabWx5YzNSY2JpQWdJQ0FxTDF4dUlDQWdJRzl1VUhKbFVtVnVaR1Z5S0NrZ2UxeHVJQ0FnSUNBZ0lDQXZMeUJWY0dSaGRHVWdjR0Z5Wlc1MElIWmhiSFZsYzF4dUlDQWdJQ0FnSUNCbWIzSWdLR3hsZENCcElEMGdNRHNnYVNBOElIUm9hWE11Ym5WdFVHRnlaVzUwUzJWNWN6c2dhU3NyS1NCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0JqYjI1emRDQnJaWGtnUFNCMGFHbHpMbkJoY21WdWRFdGxlWE5iYVYwN1hHNGdJQ0FnSUNBZ0lDQWdJQ0JqYjI1emRDQjJZV3gxWlNBOUlIUm9hWE11ZG1Gc2RXVnpXMnRsZVYwN1hHNWNiaUFnSUNBZ0lDQWdJQ0FnSUhaaGJIVmxMbU4xY25KbGJuUWdQU0IyWVd4MVpTNTBlWEJsTG1OdmJXSnBibVVvZG1Gc2RXVXVZMmhwYkdSeVpXNHNJSFpoYkhWbExuUmxiWEJzWVhSbEtUdGNibHh1SUNBZ0lDQWdJQ0FnSUNBZ2FXWWdLSFJvYVhNdWMzUmhkR1ZiYTJWNVhTQWhQVDBnZG1Gc2RXVXVZM1Z5Y21WdWRDa2dlMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJSFJvYVhNdWMzUmhkR1ZiYTJWNVhTQTlJSFpoYkhWbExtTjFjbkpsYm5RN1hHNGdJQ0FnSUNBZ0lDQWdJQ0I5WEc0Z0lDQWdJQ0FnSUgxY2JpQWdJQ0I5WEc1Y2JpQWdJQ0J2YmxKbGJtUmxjaWg3SUhOMFlYUmxMQ0J2YmlCOUtTQjdYRzRnSUNBZ0lDQWdJR2xtSUNodmJpQW1KaUJ2Ymk1elpYUXBJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lHOXVMbk5sZENoemRHRjBaU2s3WEc0Z0lDQWdJQ0FnSUgxY2JseHVJQ0FnSUNBZ0lDQnBaaUFvZEdocGN5NXZia1p5WVcxbEtTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNCMGFHbHpMbTl1Um5KaGJXVW9kR2hwY3lrN1hHNGdJQ0FnSUNBZ0lIMWNiaUFnSUNCOVhHNWNiaUFnSUNCd1lYVnpaU2dwSUh0Y2JpQWdJQ0FnSUNBZ2MzVndaWEl1YzNSdmNDZ3BPMXh1SUNBZ0lDQWdJQ0J5WlhSMWNtNGdkR2hwY3p0Y2JpQWdJQ0I5WEc1Y2JpQWdJQ0J5WlhOMWJXVW9LU0I3WEc0Z0lDQWdJQ0FnSUhOMWNHVnlMbk4wWVhKMEtDazdYRzRnSUNBZ0lDQWdJSEpsZEhWeWJpQjBhR2x6TzF4dUlDQWdJSDFjYmx4dUlDQWdJSE4wWVhKMEtDa2dlMXh1SUNBZ0lDQWdJQ0JqYjI1emRDQjJZV3gxWlhNZ1BTQjBhR2x6TG5aaGJIVmxjenRjYmlBZ0lDQWdJQ0FnYzNWd1pYSXVjM1JoY25Rb0tUdGNibHh1SUNBZ0lDQWdJQ0JtYjNJZ0tHeGxkQ0JyWlhrZ2FXNGdkbUZzZFdWektTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNCcFppQW9kbUZzZFdWekxtaGhjMDkzYmxCeWIzQmxjblI1S0d0bGVTa3BJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0IyWVd4MVpYTmJhMlY1WFM1d2NtVjJJRDBnZG1Gc2RXVnpXMnRsZVYwdWIzSnBaMmx1SUQwZ2RtRnNkV1Z6VzJ0bGVWMHVZM1Z5Y21WdWREdGNiaUFnSUNBZ0lDQWdJQ0FnSUgxY2JpQWdJQ0FnSUNBZ2ZWeHVJQ0FnSUgxY2JseHVJQ0FnSUM4cVhHNGdJQ0FnSUNBZ0lDTWdSMlYwSUdSbFptRjFiSFFnUVdOMGFXOXVJSFpoYkhWbElIQnliM0JsY25ScFpYTmNibHh1SUNBZ0lDQWdJQ0JBY21WMGRYSnVJRnR2WW1wbFkzUmRYRzRnSUNBZ0tpOWNiaUFnSUNCblpYUkVaV1poZFd4MFZtRnNkV1VvS1NCN1hHNGdJQ0FnSUNBZ0lISmxkSFZ5YmlCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0JqZFhKeVpXNTBPaUF3TEZ4dUlDQWdJQ0FnSUNBZ0lDQWdkbVZzYjJOcGRIazZJREFzWEc0Z0lDQWdJQ0FnSUNBZ0lDQnliM1Z1WkRvZ1ptRnNjMlZjYmlBZ0lDQWdJQ0FnZlR0Y2JpQWdJQ0I5WEc1Y2JpQWdJQ0F2S2x4dUlDQWdJQ0FnSUNBaklFZGxkQ0JrWldaaGRXeDBJRUZqZEdsdmJpQjJZV3gxWlNCd2NtOXdaWEowZVNCdVlXMWxYRzRnSUNBZ0lDQWdJQ01qSUZObGRDQjBhR2x6SUdCMllXeDFaV0FnY0hKdmNHVnlkSGtnZDJobGJpQnpaWFFnWVhNZ2RtRnNkV1VnYVc1emRHVmhaQ0J2WmlCdlltcGxZM1JjYmx4dUlDQWdJQ0FnSUNCQWNtVjBkWEp1SUZ0emRISnBibWRkWEc0Z0lDQWdLaTljYmlBZ0lDQm5aWFJFWldaaGRXeDBWbUZzZFdWUWNtOXdLQ2tnZTF4dUlDQWdJQ0FnSUNCeVpYUjFjbTRnUkVWR1FWVk1WRjlRVWs5UU8xeHVJQ0FnSUgxY2JuMWNiaUpkZlE9PVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvYWN0aW9ucy9BY3Rpb24uanNcbiAqKiBtb2R1bGUgaWQgPSAzMlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0cy5kZWFjdGl2YXRlID0gZXhwb3J0cy5nZXRQcm9jZXNzSWQgPSB1bmRlZmluZWQ7XG5leHBvcnRzLmFjdGl2YXRlID0gYWN0aXZhdGU7XG5cbnZhciBfdGltZXIgPSByZXF1aXJlKCcuL3RpbWVyJyk7XG5cbnZhciBfdGltZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfdGltZXIpO1xuXG52YXIgX3RpY2sgPSByZXF1aXJlKCcuL3RpY2snKTtcblxudmFyIF90aWNrMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3RpY2spO1xuXG52YXIgX21hbmFnZXIgPSByZXF1aXJlKCcuL21hbmFnZXInKTtcblxudmFyIF9tYW5hZ2VyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX21hbmFnZXIpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG52YXIgcHJvY2Vzc1N0ZXBPcmRlciA9IFt7IG5hbWU6ICdvbkZyYW1lU3RhcnQnIH0sIHsgbmFtZTogJ29uVXBkYXRlJyB9LCB7IG5hbWU6ICd3aWxsUmVuZGVyJywgZGVjaWRlUmVuZGVyOiB0cnVlIH0sIHsgbmFtZTogJ29uUHJlUmVuZGVyJywgaXNSZW5kZXI6IHRydWUgfSwgeyBuYW1lOiAnb25SZW5kZXInLCBpc1JlbmRlcjogdHJ1ZSB9LCB7IG5hbWU6ICdvblBvc3RSZW5kZXInLCBpc1JlbmRlcjogdHJ1ZSB9LCB7IG5hbWU6ICdvbkZyYW1lRW5kJyB9LCB7IG5hbWU6ICdvbkNsZWFudXAnIH1dOyAvKlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIENvcmUgcmVuZGVyIGxvb3BcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFNvbWUgZGVjaWNpc29ucyBoZXJlIGhhdmUgYmVlbiB0YWtlbiBpbiB0aGUgbmFtZSBvZiBwZXJmb3JtYW5jZS4gQWxsIGhhaWwgcGVyZm9ybWFuY2UuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKEl0IHR1cm5zIG91dCBtaWNyb29wdGltaXNhdGlvbnMgZG8gbWF0dGVyIHdoZW4geW91IGhhdmUgMTZtcylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICovXG5cbnZhciBudW1Qcm9jZXNzU3RlcHMgPSBwcm9jZXNzU3RlcE9yZGVyLmxlbmd0aDtcblxuLy8gW2Jvb2xlYW5dOiBJcyBsb29wIHJ1bm5pbmc/XG52YXIgaXNSdW5uaW5nID0gZmFsc2U7XG5cbi8qXG4gICAgW3RpbWVzdGFtcF06IEZyYW1lIHRpbWVzdGFtcFxuICAgIFtpbnRdOiBUaW1lIHNpbmNlIGxhc3QgZnJhbWVcbiovXG5mdW5jdGlvbiBmaXJlQWxsKGZyYW1lU3RhbXAsIGVsYXBzZWQpIHtcbiAgICB2YXIgYWN0aXZlSWRzID0gX21hbmFnZXIyLmRlZmF1bHQuZ2V0QWN0aXZlSWRzKCk7XG4gICAgdmFyIGFjdGl2ZVByb2Nlc3NDb3VudCA9IGFjdGl2ZUlkcy5sZW5ndGg7XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IG51bVByb2Nlc3NTdGVwczsgaSsrKSB7XG4gICAgICAgIHZhciBzdGVwID0gcHJvY2Vzc1N0ZXBPcmRlcltpXTtcblxuICAgICAgICBmb3IgKHZhciBpMiA9IDA7IGkyIDwgYWN0aXZlUHJvY2Vzc0NvdW50OyBpMisrKSB7XG4gICAgICAgICAgICB2YXIgcHJvY2VzcyA9IF9tYW5hZ2VyMi5kZWZhdWx0LmFjdGl2ZVByb2Nlc3Nlc1thY3RpdmVJZHNbaTJdXTtcbiAgICAgICAgICAgIHZhciByZXN1bHQgPSBmYWxzZTtcblxuICAgICAgICAgICAgLy8gQ2hlY2sgaWYgdGhpcyBwcm9jZXNzIGhhcyB0aGlzIHN0ZXAsIG9yIGlmIGl0J3MgYSByZW5kZXIgc3RlcCB0aGF0IHdlJ3JlIHJlbmRlcmluZyB0aGlzIGZyYW1lXG4gICAgICAgICAgICBpZiAocHJvY2VzcyAmJiBwcm9jZXNzW3N0ZXAubmFtZV0gJiYgKCFzdGVwLmlzUmVuZGVyIHx8IHN0ZXAuaXNSZW5kZXIgJiYgcHJvY2Vzcy5fcmVuZGVyVGhpc0ZyYW1lID09PSB0cnVlKSkge1xuICAgICAgICAgICAgICAgIHJlc3VsdCA9IHByb2Nlc3Nbc3RlcC5uYW1lXS5jYWxsKHByb2Nlc3MsIHByb2Nlc3MsIGZyYW1lU3RhbXAsIGVsYXBzZWQpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBJZiB0aGlzIGlzIGEgZGVjaWRlIHJlbmRlciBzdGVwIGFuZCBpdCByZXR1cm5zIGBmYWxzZWAsIHNldCB3aWxsUmVuZGVyIHRvIGZhbHNlXG4gICAgICAgICAgICBpZiAoc3RlcC5kZWNpZGVSZW5kZXIpIHtcbiAgICAgICAgICAgICAgICBwcm9jZXNzLl9yZW5kZXJUaGlzRnJhbWUgPSBwcm9jZXNzW3N0ZXAubmFtZV0gJiYgcmVzdWx0ICE9PSB0cnVlID8gZmFsc2UgOiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIF9tYW5hZ2VyMi5kZWZhdWx0LmdldE5vbkJhY2tncm91bmRSdW5uaW5nQ291bnQoKTtcbn1cblxuLy8gRnVuY3Rpb24gdG8gZmlyZSBldmVyeSBmcmFtZVxuZnVuY3Rpb24gZnJhbWUoZnJhbWVTdGFtcCkge1xuICAgIF90aW1lcjIuZGVmYXVsdC51cGRhdGUoZnJhbWVTdGFtcCk7XG4gICAgaXNSdW5uaW5nID0gZmlyZUFsbChmcmFtZVN0YW1wLCBfdGltZXIyLmRlZmF1bHQuZ2V0RWxhcHNlZCgpKTtcblxuICAgIGlmIChpc1J1bm5pbmcpIHtcbiAgICAgICAgKDAsIF90aWNrMi5kZWZhdWx0KShmcmFtZSk7XG4gICAgfVxufVxuXG4vLyBTdGFydCBsb29wXG5mdW5jdGlvbiBzdGFydCgpIHtcbiAgICBpZiAoIWlzUnVubmluZykge1xuICAgICAgICBfdGltZXIyLmRlZmF1bHQuc3RhcnQoKTtcbiAgICAgICAgaXNSdW5uaW5nID0gdHJ1ZTtcbiAgICAgICAgKDAsIF90aWNrMi5kZWZhdWx0KShmcmFtZSk7XG4gICAgfVxufVxuXG4vLyBFeHBvcnRzXG52YXIgZ2V0UHJvY2Vzc0lkID0gZXhwb3J0cy5nZXRQcm9jZXNzSWQgPSBfbWFuYWdlcjIuZGVmYXVsdC5nZXRQcm9jZXNzSWQ7XG5cbi8qXG4gICAgW2ludF06IFByb2Nlc3MgSUQgdG8gYWN0aXZhdGVcbiAgICBbUHJvY2Vzc106IFByb2Nlc3MgdG8gYWN0aXZhdGVcbiovXG5mdW5jdGlvbiBhY3RpdmF0ZShpZCwgcHJvY2Vzcykge1xuICAgIF9tYW5hZ2VyMi5kZWZhdWx0LmFjdGl2YXRlKGlkLCBwcm9jZXNzKTtcblxuICAgIGlmICghaXNSdW5uaW5nKSB7XG4gICAgICAgIHN0YXJ0KCk7XG4gICAgfVxufVxuXG4vKlxuICAgIFtpbnRdOiBQcm9jZXNzIElEIHRvIGRlYWN0aXZhdGVcbiovXG52YXIgZGVhY3RpdmF0ZSA9IGV4cG9ydHMuZGVhY3RpdmF0ZSA9IF9tYW5hZ2VyMi5kZWZhdWx0LmRlYWN0aXZhdGU7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5OeVl5OXdjbTlqWlhOekwyeHZiM0F1YW5NaVhTd2libUZ0WlhNaU9sdGRMQ0p0WVhCd2FXNW5jeUk2SWpzN096dFJRV2xHWjBJN096czdPenM3T3pzN096czdPenM3UVVGMlJXaENMRWxCUVUwc2JVSkJRVzFDTEVOQlEzSkNMRVZCUVVVc1RVRkJUU3hqUVVGT0xFVkJSRzFDTEVWQlJYSkNMRVZCUVVVc1RVRkJUU3hWUVVGT0xFVkJSbTFDTEVWQlIzSkNMRVZCUVVVc1RVRkJUU3haUVVGT0xFVkJRVzlDTEdOQlFXTXNTVUZCWkN4RlFVaEVMRVZCU1hKQ0xFVkJRVVVzVFVGQlRTeGhRVUZPTEVWQlFYRkNMRlZCUVZVc1NVRkJWaXhGUVVwR0xFVkJTM0pDTEVWQlFVVXNUVUZCVFN4VlFVRk9MRVZCUVd0Q0xGVkJRVlVzU1VGQlZpeEZRVXhETEVWQlRYSkNMRVZCUVVVc1RVRkJUU3hqUVVGT0xFVkJRWE5DTEZWQlFWVXNTVUZCVml4RlFVNUlMRVZCVDNKQ0xFVkJRVVVzVFVGQlRTeFpRVUZPTEVWQlVHMUNMRVZCVVhKQ0xFVkJRVVVzVFVGQlRTeFhRVUZPTEVWQlVtMUNMRU5CUVc1Q096czdPenM3TzBGQlZVNHNTVUZCVFN4clFrRkJhMElzYVVKQlFXbENMRTFCUVdwQ096czdRVUZIZUVJc1NVRkJTU3haUVVGWkxFdEJRVm83T3pzN096dEJRVTFLTEZOQlFWTXNUMEZCVkN4RFFVRnBRaXhWUVVGcVFpeEZRVUUyUWl4UFFVRTNRaXhGUVVGelF6dEJRVU5zUXl4UlFVRk5MRmxCUVZrc2EwSkJRVkVzV1VGQlVpeEZRVUZhTEVOQlJEUkNPMEZCUld4RExGRkJRVTBzY1VKQlFYRkNMRlZCUVZVc1RVRkJWaXhEUVVaUE96dEJRVWxzUXl4VFFVRkxMRWxCUVVrc1NVRkJTU3hEUVVGS0xFVkJRVThzU1VGQlNTeGxRVUZLTEVWQlFYRkNMRWRCUVhKRExFVkJRVEJETzBGQlEzUkRMRmxCUVUwc1QwRkJUeXhwUWtGQmFVSXNRMEZCYWtJc1EwRkJVQ3hEUVVSblF6czdRVUZIZEVNc1lVRkJTeXhKUVVGSkxFdEJRVXNzUTBGQlRDeEZRVUZSTEV0QlFVc3NhMEpCUVV3c1JVRkJlVUlzU1VGQk1VTXNSVUZCWjBRN1FVRkROVU1zWjBKQlFVMHNWVUZCVlN4clFrRkJVU3hsUVVGU0xFTkJRWGRDTEZWQlFWVXNSVUZCVml4RFFVRjRRaXhEUVVGV0xFTkJSSE5ETzBGQlJUVkRMR2RDUVVGSkxGTkJRVk1zUzBGQlZEczdPMEZCUm5kRExHZENRVXQ0UXl4WFFVRlhMRkZCUVZFc1MwRkJTeXhKUVVGTUxFTkJRVzVDTEV0QlFXdERMRU5CUVVNc1MwRkJTeXhSUVVGTUxFbEJRV3RDTEV0QlFVc3NVVUZCVEN4SlFVRnBRaXhSUVVGUkxHZENRVUZTTEV0QlFUWkNMRWxCUVRkQ0xFTkJRWFJGTEVWQlFUSkhPMEZCUXpOSExIbENRVUZUTEZGQlFWRXNTMEZCU3l4SlFVRk1MRU5CUVZJc1EwRkJiVUlzU1VGQmJrSXNRMEZCZDBJc1QwRkJlRUlzUlVGQmFVTXNUMEZCYWtNc1JVRkJNRU1zVlVGQk1VTXNSVUZCYzBRc1QwRkJkRVFzUTBGQlZDeERRVVF5Unp0aFFVRXZSenM3TzBGQlREUkRMR2RDUVZWNFF5eExRVUZMTEZsQlFVd3NSVUZCYlVJN1FVRkRia0lzZDBKQlFWRXNaMEpCUVZJc1IwRkJNa0lzVDBGQlF5eERRVUZSTEV0QlFVc3NTVUZCVEN4RFFVRlNMRWxCUVhOQ0xGZEJRVmNzU1VGQldDeEhRVUZ0UWl4TFFVRXhReXhIUVVGclJDeEpRVUZzUkN4RFFVUlNPMkZCUVhaQ08xTkJWa283UzBGSVNqczdRVUZ0UWtFc1YwRkJUeXhyUWtGQlVTdzBRa0ZCVWl4RlFVRlFMRU5CZGtKclF6dERRVUYwUXpzN08wRkJNa0pCTEZOQlFWTXNTMEZCVkN4RFFVRmxMRlZCUVdZc1JVRkJNa0k3UVVGRGRrSXNiMEpCUVUwc1RVRkJUaXhEUVVGaExGVkJRV0lzUlVGRWRVSTdRVUZGZGtJc1owSkJRVmtzVVVGQlVTeFZRVUZTTEVWQlFXOUNMR2RDUVVGTkxGVkJRVTRzUlVGQmNFSXNRMEZCV2l4RFFVWjFRanM3UVVGSmRrSXNVVUZCU1N4VFFVRktMRVZCUVdVN1FVRkRXQ3cwUWtGQlN5eExRVUZNTEVWQlJGYzdTMEZCWmp0RFFVcEtPenM3UVVGVlFTeFRRVUZUTEV0QlFWUXNSMEZCYVVJN1FVRkRZaXhSUVVGSkxFTkJRVU1zVTBGQlJDeEZRVUZaTzBGQlExb3NkMEpCUVUwc1MwRkJUaXhIUVVSWk8wRkJSVm9zYjBKQlFWa3NTVUZCV2l4RFFVWlpPMEZCUjFvc05FSkJRVXNzUzBGQlRDeEZRVWhaTzB0QlFXaENPME5CUkVvN096dEJRVk5QTEVsQlFVMHNjME5CUVdVc2EwSkJRVkVzV1VGQlVqczdPenM3TzBGQlRYSkNMRk5CUVZNc1VVRkJWQ3hEUVVGclFpeEZRVUZzUWl4RlFVRnpRaXhQUVVGMFFpeEZRVUVyUWp0QlFVTnNReXh6UWtGQlVTeFJRVUZTTEVOQlFXbENMRVZCUVdwQ0xFVkJRWEZDTEU5QlFYSkNMRVZCUkd0RE96dEJRVWRzUXl4UlFVRkpMRU5CUVVNc1UwRkJSQ3hGUVVGWk8wRkJRMW9zWjBKQlJGazdTMEZCYUVJN1EwRklSenM3T3pzN1FVRlhRU3hKUVVGTkxHdERRVUZoTEd0Q1FVRlJMRlZCUVZJaUxDSm1hV3hsSWpvaWJHOXZjQzVxY3lJc0luTnZkWEpqWlZKdmIzUWlPaUl2VlhObGNuTXZUV0YwZEM5VGFYUmxjeTl3YjNCdGIzUnBiMjRpTENKemIzVnlZMlZ6UTI5dWRHVnVkQ0k2V3lJdktseHVJQ0FnSUVOdmNtVWdjbVZ1WkdWeUlHeHZiM0JjYmx4dUlDQWdJRk52YldVZ1pHVmphV05wYzI5dWN5Qm9aWEpsSUdoaGRtVWdZbVZsYmlCMFlXdGxiaUJwYmlCMGFHVWdibUZ0WlNCdlppQndaWEptYjNKdFlXNWpaUzRnUVd4c0lHaGhhV3dnY0dWeVptOXliV0Z1WTJVdVhHNGdJQ0FnS0VsMElIUjFjbTV6SUc5MWRDQnRhV055YjI5d2RHbHRhWE5oZEdsdmJuTWdaRzhnYldGMGRHVnlJSGRvWlc0Z2VXOTFJR2hoZG1VZ01UWnRjeWxjYmlvdlhHNXBiWEJ2Y25RZ2RHbHRaWElnWm5KdmJTQW5MaTkwYVcxbGNpYzdYRzVwYlhCdmNuUWdkR2xqYXlCbWNtOXRJQ2N1TDNScFkyc25PMXh1YVcxd2IzSjBJRzFoYm1GblpYSWdabkp2YlNBbkxpOXRZVzVoWjJWeUp6dGNibHh1WTI5dWMzUWdjSEp2WTJWemMxTjBaWEJQY21SbGNpQTlJRnRjYmlBZ0lDQjdJRzVoYldVNklDZHZia1p5WVcxbFUzUmhjblFuSUgwc1hHNGdJQ0FnZXlCdVlXMWxPaUFuYjI1VmNHUmhkR1VuSUgwc1hHNGdJQ0FnZXlCdVlXMWxPaUFuZDJsc2JGSmxibVJsY2ljc0lHUmxZMmxrWlZKbGJtUmxjam9nZEhKMVpTQjlMRnh1SUNBZ0lIc2dibUZ0WlRvZ0oyOXVVSEpsVW1WdVpHVnlKeXdnYVhOU1pXNWtaWEk2SUhSeWRXVWdmU3hjYmlBZ0lDQjdJRzVoYldVNklDZHZibEpsYm1SbGNpY3NJR2x6VW1WdVpHVnlPaUIwY25WbElIMHNYRzRnSUNBZ2V5QnVZVzFsT2lBbmIyNVFiM04wVW1WdVpHVnlKeXdnYVhOU1pXNWtaWEk2SUhSeWRXVWdmU3hjYmlBZ0lDQjdJRzVoYldVNklDZHZia1p5WVcxbFJXNWtKeUI5TEZ4dUlDQWdJSHNnYm1GdFpUb2dKMjl1UTJ4bFlXNTFjQ2NnZlZ4dVhUdGNibU52Ym5OMElHNTFiVkJ5YjJObGMzTlRkR1Z3Y3lBOUlIQnliMk5sYzNOVGRHVndUM0prWlhJdWJHVnVaM1JvTzF4dVhHNHZMeUJiWW05dmJHVmhibDA2SUVseklHeHZiM0FnY25WdWJtbHVaejljYm14bGRDQnBjMUoxYm01cGJtY2dQU0JtWVd4elpUdGNibHh1THlwY2JpQWdJQ0JiZEdsdFpYTjBZVzF3WFRvZ1JuSmhiV1VnZEdsdFpYTjBZVzF3WEc0Z0lDQWdXMmx1ZEYwNklGUnBiV1VnYzJsdVkyVWdiR0Z6ZENCbWNtRnRaVnh1S2k5Y2JtWjFibU4wYVc5dUlHWnBjbVZCYkd3b1puSmhiV1ZUZEdGdGNDd2daV3hoY0hObFpDa2dlMXh1SUNBZ0lHTnZibk4wSUdGamRHbDJaVWxrY3lBOUlHMWhibUZuWlhJdVoyVjBRV04wYVhabFNXUnpLQ2s3WEc0Z0lDQWdZMjl1YzNRZ1lXTjBhWFpsVUhKdlkyVnpjME52ZFc1MElEMGdZV04wYVhabFNXUnpMbXhsYm1kMGFEdGNibHh1SUNBZ0lHWnZjaUFvYkdWMElHa2dQU0F3T3lCcElEd2diblZ0VUhKdlkyVnpjMU4wWlhCek95QnBLeXNwSUh0Y2JpQWdJQ0FnSUNBZ1kyOXVjM1FnYzNSbGNDQTlJSEJ5YjJObGMzTlRkR1Z3VDNKa1pYSmJhVjA3WEc1Y2JpQWdJQ0FnSUNBZ1ptOXlJQ2hzWlhRZ2FUSWdQU0F3T3lCcE1pQThJR0ZqZEdsMlpWQnliMk5sYzNORGIzVnVkRHNnYVRJckt5a2dlMXh1SUNBZ0lDQWdJQ0FnSUNBZ1kyOXVjM1FnY0hKdlkyVnpjeUE5SUcxaGJtRm5aWEl1WVdOMGFYWmxVSEp2WTJWemMyVnpXMkZqZEdsMlpVbGtjMXRwTWwxZE8xeHVJQ0FnSUNBZ0lDQWdJQ0FnYkdWMElISmxjM1ZzZENBOUlHWmhiSE5sTzF4dVhHNGdJQ0FnSUNBZ0lDQWdJQ0F2THlCRGFHVmpheUJwWmlCMGFHbHpJSEJ5YjJObGMzTWdhR0Z6SUhSb2FYTWdjM1JsY0N3Z2IzSWdhV1lnYVhRbmN5QmhJSEpsYm1SbGNpQnpkR1Z3SUhSb1lYUWdkMlVuY21VZ2NtVnVaR1Z5YVc1bklIUm9hWE1nWm5KaGJXVmNiaUFnSUNBZ0lDQWdJQ0FnSUdsbUlDaHdjbTlqWlhOeklDWW1JSEJ5YjJObGMzTmJjM1JsY0M1dVlXMWxYU0FtSmlBb0lYTjBaWEF1YVhOU1pXNWtaWElnZkh3Z0tITjBaWEF1YVhOU1pXNWtaWElnSmlZZ2NISnZZMlZ6Y3k1ZmNtVnVaR1Z5VkdocGMwWnlZVzFsSUQwOVBTQjBjblZsS1NrcElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQnlaWE4xYkhRZ1BTQndjbTlqWlhOelczTjBaWEF1Ym1GdFpWMHVZMkZzYkNod2NtOWpaWE56TENCd2NtOWpaWE56TENCbWNtRnRaVk4wWVcxd0xDQmxiR0Z3YzJWa0tUdGNiaUFnSUNBZ0lDQWdJQ0FnSUgxY2JseHVJQ0FnSUNBZ0lDQWdJQ0FnTHk4Z1NXWWdkR2hwY3lCcGN5QmhJR1JsWTJsa1pTQnlaVzVrWlhJZ2MzUmxjQ0JoYm1RZ2FYUWdjbVYwZFhKdWN5QmdabUZzYzJWZ0xDQnpaWFFnZDJsc2JGSmxibVJsY2lCMGJ5Qm1ZV3h6WlZ4dUlDQWdJQ0FnSUNBZ0lDQWdhV1lnS0hOMFpYQXVaR1ZqYVdSbFVtVnVaR1Z5S1NCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2NISnZZMlZ6Y3k1ZmNtVnVaR1Z5VkdocGMwWnlZVzFsSUQwZ0tIQnliMk5sYzNOYmMzUmxjQzV1WVcxbFhTQW1KaUJ5WlhOMWJIUWdJVDA5SUhSeWRXVXBJRDhnWm1Gc2MyVWdPaUIwY25WbE8xeHVJQ0FnSUNBZ0lDQWdJQ0FnZlZ4dUlDQWdJQ0FnSUNCOVhHNGdJQ0FnZlZ4dVhHNGdJQ0FnY21WMGRYSnVJRzFoYm1GblpYSXVaMlYwVG05dVFtRmphMmR5YjNWdVpGSjFibTVwYm1kRGIzVnVkQ2dwTzF4dWZWeHVYRzR2THlCR2RXNWpkR2x2YmlCMGJ5Qm1hWEpsSUdWMlpYSjVJR1p5WVcxbFhHNW1kVzVqZEdsdmJpQm1jbUZ0WlNobWNtRnRaVk4wWVcxd0tTQjdYRzRnSUNBZ2RHbHRaWEl1ZFhCa1lYUmxLR1p5WVcxbFUzUmhiWEFwTzF4dUlDQWdJR2x6VW5WdWJtbHVaeUE5SUdacGNtVkJiR3dvWm5KaGJXVlRkR0Z0Y0N3Z2RHbHRaWEl1WjJWMFJXeGhjSE5sWkNncEtUdGNibHh1SUNBZ0lHbG1JQ2hwYzFKMWJtNXBibWNwSUh0Y2JpQWdJQ0FnSUNBZ2RHbGpheWhtY21GdFpTazdYRzRnSUNBZ2ZWeHVmVnh1WEc0dkx5QlRkR0Z5ZENCc2IyOXdYRzVtZFc1amRHbHZiaUJ6ZEdGeWRDZ3BJSHRjYmlBZ0lDQnBaaUFvSVdselVuVnVibWx1WnlrZ2UxeHVJQ0FnSUNBZ0lDQjBhVzFsY2k1emRHRnlkQ2dwTzF4dUlDQWdJQ0FnSUNCcGMxSjFibTVwYm1jZ1BTQjBjblZsTzF4dUlDQWdJQ0FnSUNCMGFXTnJLR1p5WVcxbEtUdGNiaUFnSUNCOVhHNTlYRzVjYmk4dklFVjRjRzl5ZEhOY2JtVjRjRzl5ZENCamIyNXpkQ0JuWlhSUWNtOWpaWE56U1dRZ1BTQnRZVzVoWjJWeUxtZGxkRkJ5YjJObGMzTkpaRHRjYmx4dUx5cGNiaUFnSUNCYmFXNTBYVG9nVUhKdlkyVnpjeUJKUkNCMGJ5QmhZM1JwZG1GMFpWeHVJQ0FnSUZ0UWNtOWpaWE56WFRvZ1VISnZZMlZ6Y3lCMGJ5QmhZM1JwZG1GMFpWeHVLaTljYm1WNGNHOXlkQ0JtZFc1amRHbHZiaUJoWTNScGRtRjBaU2hwWkN3Z2NISnZZMlZ6Y3lrZ2UxeHVJQ0FnSUcxaGJtRm5aWEl1WVdOMGFYWmhkR1VvYVdRc0lIQnliMk5sYzNNcE8xeHVYRzRnSUNBZ2FXWWdLQ0ZwYzFKMWJtNXBibWNwSUh0Y2JpQWdJQ0FnSUNBZ2MzUmhjblFvS1R0Y2JpQWdJQ0I5WEc1OVhHNWNiaThxWEc0Z0lDQWdXMmx1ZEYwNklGQnliMk5sYzNNZ1NVUWdkRzhnWkdWaFkzUnBkbUYwWlZ4dUtpOWNibVY0Y0c5eWRDQmpiMjV6ZENCa1pXRmpkR2wyWVhSbElEMGdiV0Z1WVdkbGNpNWtaV0ZqZEdsMllYUmxPeUpkZlE9PVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvcHJvY2Vzcy9sb29wLmpzXG4gKiogbW9kdWxlIGlkID0gMzNcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF9JbnB1dDIgPSByZXF1aXJlKCcuL0lucHV0Jyk7XG5cbnZhciBfSW5wdXQzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfSW5wdXQyKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoIXNlbGYpIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBjYWxsICYmICh0eXBlb2YgY2FsbCA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSA/IGNhbGwgOiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90IFwiICsgdHlwZW9mIHN1cGVyQ2xhc3MpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIGVudW1lcmFibGU6IGZhbHNlLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIDogc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzczsgfVxuXG52YXIgUG9pbnRlciA9IGZ1bmN0aW9uIChfSW5wdXQpIHtcbiAgICBfaW5oZXJpdHMoUG9pbnRlciwgX0lucHV0KTtcblxuICAgIGZ1bmN0aW9uIFBvaW50ZXIoaW5pdGlhbFN0YXRlLCBtb3ZlRXZlbnQsIGV2ZW50VG9Qb2ludCkge1xuICAgICAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgUG9pbnRlcik7XG5cbiAgICAgICAgdmFyIF90aGlzID0gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgX0lucHV0LmNhbGwodGhpcywgaW5pdGlhbFN0YXRlKSk7XG5cbiAgICAgICAgX3RoaXMuZXZlbnRUb1BvaW50ID0gZXZlbnRUb1BvaW50O1xuICAgICAgICBfdGhpcy5tb3ZlRXZlbnQgPSBtb3ZlRXZlbnQ7XG4gICAgICAgIHJldHVybiBfdGhpcztcbiAgICB9XG5cbiAgICBQb2ludGVyLnByb3RvdHlwZS5sYXRlc3QgPSBmdW5jdGlvbiBsYXRlc3QoZSkge1xuICAgICAgICBfSW5wdXQucHJvdG90eXBlLmxhdGVzdC5jYWxsKHRoaXMsIHRoaXMuZXZlbnRUb1BvaW50KGUpKTtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH07XG5cbiAgICBQb2ludGVyLnByb3RvdHlwZS5zdGFydCA9IGZ1bmN0aW9uIHN0YXJ0KCkge1xuICAgICAgICB2YXIgX3RoaXMyID0gdGhpcztcblxuICAgICAgICBfSW5wdXQucHJvdG90eXBlLnN0YXJ0LmNhbGwodGhpcyk7XG4gICAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5hZGRFdmVudExpc3RlbmVyKHRoaXMubW92ZUV2ZW50LCBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgcmV0dXJuIF90aGlzMi5sYXRlc3QoZSk7XG4gICAgICAgIH0pO1xuICAgIH07XG5cbiAgICBQb2ludGVyLnByb3RvdHlwZS5zdG9wID0gZnVuY3Rpb24gc3RvcCgpIHtcbiAgICAgICAgdmFyIF90aGlzMyA9IHRoaXM7XG5cbiAgICAgICAgX0lucHV0LnByb3RvdHlwZS5zdG9wLmNhbGwodGhpcyk7XG4gICAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKHRoaXMubW92ZUV2ZW50LCBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgcmV0dXJuIF90aGlzMy5sYXRlc3QoZSk7XG4gICAgICAgIH0pO1xuICAgIH07XG5cbiAgICByZXR1cm4gUG9pbnRlcjtcbn0oX0lucHV0My5kZWZhdWx0KTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gUG9pbnRlcjtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbk55WXk5cGJuQjFkQzlRYjJsdWRHVnlMbXB6SWwwc0ltNWhiV1Z6SWpwYlhTd2liV0Z3Y0dsdVozTWlPaUk3T3pzN096czdPenM3T3pzN096czdTVUZGY1VJN096dEJRVU5xUWl4aFFVUnBRaXhQUVVOcVFpeERRVUZaTEZsQlFWb3NSVUZCTUVJc1UwRkJNVUlzUlVGQmNVTXNXVUZCY2tNc1JVRkJiVVE3T0VKQlJHeERMRk5CUTJ0RE96dHhSRUZETDBNc2EwSkJRVTBzV1VGQlRpeEhRVVFyUXpzN1FVRkZMME1zWTBGQlN5eFpRVUZNTEVkQlFXOUNMRmxCUVhCQ0xFTkJSaXRETzBGQlJ5OURMR05CUVVzc1UwRkJUQ3hIUVVGcFFpeFRRVUZxUWl4RFFVZ3JRenM3UzBGQmJrUTdPMEZCUkdsQ0xITkNRVTlxUWl4NVFrRkJUeXhIUVVGSE8wRkJRMDRzZVVKQlFVMHNUVUZCVGl4WlFVRmhMRXRCUVVzc1dVRkJUQ3hEUVVGclFpeERRVUZzUWl4RFFVRmlMRVZCUkUwN1FVRkZUaXhWUVVGRkxHTkJRVVlzUjBGR1RUczdPMEZCVUU4c2MwSkJXV3BDTEhsQ1FVRlJPenM3UVVGRFNpeDVRa0ZCVFN4TFFVRk9MRmxCUkVrN1FVRkZTaXhwUWtGQlV5eGxRVUZVTEVOQlFYbENMR2RDUVVGNlFpeERRVUV3UXl4TFFVRkxMRk5CUVV3c1JVRkJaMElzVlVGQlF5eERRVUZFTzIxQ1FVRlBMRTlCUVVzc1RVRkJUQ3hEUVVGWkxFTkJRVm83VTBGQlVDeERRVUV4UkN4RFFVWkpPenM3UVVGYVV5eHpRa0ZwUW1wQ0xIVkNRVUZQT3pzN1FVRkRTQ3g1UWtGQlRTeEpRVUZPTEZsQlJFYzdRVUZGU0N4cFFrRkJVeXhsUVVGVUxFTkJRWGxDTEcxQ1FVRjZRaXhEUVVFMlF5eExRVUZMTEZOQlFVd3NSVUZCWjBJc1ZVRkJReXhEUVVGRU8yMUNRVUZQTEU5QlFVc3NUVUZCVEN4RFFVRlpMRU5CUVZvN1UwRkJVQ3hEUVVFM1JDeERRVVpIT3pzN1YwRnFRbFVpTENKbWFXeGxJam9pVUc5cGJuUmxjaTVxY3lJc0luTnZkWEpqWlZKdmIzUWlPaUl2VlhObGNuTXZUV0YwZEM5VGFYUmxjeTl3YjNCdGIzUnBiMjRpTENKemIzVnlZMlZ6UTI5dWRHVnVkQ0k2V3lKcGJYQnZjblFnU1c1d2RYUWdabkp2YlNBbkxpOUpibkIxZENjN1hHNWNibVY0Y0c5eWRDQmtaV1poZFd4MElHTnNZWE56SUZCdmFXNTBaWElnWlhoMFpXNWtjeUJKYm5CMWRDQjdYRzRnSUNBZ1kyOXVjM1J5ZFdOMGIzSW9hVzVwZEdsaGJGTjBZWFJsTENCdGIzWmxSWFpsYm5Rc0lHVjJaVzUwVkc5UWIybHVkQ2tnZTF4dUlDQWdJQ0FnSUNCemRYQmxjaWhwYm1sMGFXRnNVM1JoZEdVcE8xeHVJQ0FnSUNBZ0lDQjBhR2x6TG1WMlpXNTBWRzlRYjJsdWRDQTlJR1YyWlc1MFZHOVFiMmx1ZER0Y2JpQWdJQ0FnSUNBZ2RHaHBjeTV0YjNabFJYWmxiblFnUFNCdGIzWmxSWFpsYm5RN1hHNGdJQ0FnZlZ4dVhHNGdJQ0FnYkdGMFpYTjBLR1VwSUh0Y2JpQWdJQ0FnSUNBZ2MzVndaWEl1YkdGMFpYTjBLSFJvYVhNdVpYWmxiblJVYjFCdmFXNTBLR1VwS1R0Y2JpQWdJQ0FnSUNBZ1pTNXdjbVYyWlc1MFJHVm1ZWFZzZENncE8xeHVJQ0FnSUgxY2JseHVJQ0FnSUhOMFlYSjBLQ2tnZTF4dUlDQWdJQ0FnSUNCemRYQmxjaTV6ZEdGeWRDZ3BPMXh1SUNBZ0lDQWdJQ0JrYjJOMWJXVnVkQzVrYjJOMWJXVnVkRVZzWlcxbGJuUXVZV1JrUlhabGJuUk1hWE4wWlc1bGNpaDBhR2x6TG0xdmRtVkZkbVZ1ZEN3Z0tHVXBJRDArSUhSb2FYTXViR0YwWlhOMEtHVXBLVHRjYmlBZ0lDQjlYRzVjYmlBZ0lDQnpkRzl3S0NrZ2UxeHVJQ0FnSUNBZ0lDQnpkWEJsY2k1emRHOXdLQ2s3WEc0Z0lDQWdJQ0FnSUdSdlkzVnRaVzUwTG1SdlkzVnRaVzUwUld4bGJXVnVkQzV5WlcxdmRtVkZkbVZ1ZEV4cGMzUmxibVZ5S0hSb2FYTXViVzkyWlVWMlpXNTBMQ0FvWlNrZ1BUNGdkR2hwY3k1c1lYUmxjM1FvWlNrcE8xeHVJQ0FnSUgxY2JuMWNiaUpkZlE9PVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvaW5wdXQvUG9pbnRlci5qc1xuICoqIG1vZHVsZSBpZCA9IDM0XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzLmRlZmF1bHQgPSBidWlsZDtcbi8qXG4gICAgQ29udmVydCBwZXJjZW50YWdlIHRvIHBpeGVsc1xuICAgIFxuICAgIEBwYXJhbSBbbnVtYmVyXTogUGVyY2VudGFnZSBvZiB0b3RhbCBsZW5ndGhcbiAgICBAcGFyYW0gW251bWJlcl06IFRvdGFsIGxlbmd0aFxuKi9cbnZhciBwZXJjZW50VG9QaXhlbHMgPSBmdW5jdGlvbiAocGVyY2VudCwgbGVuZ3RoKSB7XG4gICAgcmV0dXJuIHBhcnNlRmxvYXQocGVyY2VudCkgLyAxMDAgKiBsZW5ndGggKyAncHgnO1xufTtcblxuZnVuY3Rpb24gYnVpbGQoc3RhdGUsIGxlbmd0aCkge1xuICAgIHZhciBzdHlsZXMgPSB7fTtcbiAgICB2YXIgZGFzaEFycmF5U3R5bGVzID0ge1xuICAgICAgICBsZW5ndGg6IDAsXG4gICAgICAgIHNwYWNpbmc6IGxlbmd0aCArICdweCdcbiAgICB9O1xuICAgIHZhciBoYXNEYXNoQXJyYXkgPSBmYWxzZTtcblxuICAgIGZvciAodmFyIGtleSBpbiBzdGF0ZSkge1xuICAgICAgICBpZiAoc3RhdGUuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgICAgdmFyIHZhbHVlID0gc3RhdGVba2V5XTtcblxuICAgICAgICAgICAgc3dpdGNoIChrZXkpIHtcbiAgICAgICAgICAgICAgICBjYXNlICdsZW5ndGgnOlxuICAgICAgICAgICAgICAgIGNhc2UgJ3NwYWNpbmcnOlxuICAgICAgICAgICAgICAgICAgICBoYXNEYXNoQXJyYXkgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICBkYXNoQXJyYXlTdHlsZXNba2V5XSA9IHBlcmNlbnRUb1BpeGVscyh2YWx1ZSwgbGVuZ3RoKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSAnb2Zmc2V0JzpcbiAgICAgICAgICAgICAgICAgICAgc3R5bGVzWydzdHJva2UtZGFzaG9mZnNldCddID0gcGVyY2VudFRvUGl4ZWxzKC12YWx1ZSwgbGVuZ3RoKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgc3R5bGVzW2tleV0gPSB2YWx1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGlmIChoYXNEYXNoQXJyYXkpIHtcbiAgICAgICAgc3R5bGVzWydzdHJva2UtZGFzaGFycmF5J10gPSBkYXNoQXJyYXlTdHlsZXMubGVuZ3RoICsgJyAnICsgZGFzaEFycmF5U3R5bGVzLnNwYWNpbmc7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN0eWxlcztcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbk55WXk5aFpHRndkR1Z5TDNOMlp5MXdZWFJvTDJKMWFXeGtMbXB6SWwwc0ltNWhiV1Z6SWpwYlhTd2liV0Z3Y0dsdVozTWlPaUk3T3p0clFrRlJkMEk3T3pzN096czdRVUZHZUVJc1NVRkJUU3hyUWtGQmEwSXNWVUZCUXl4UFFVRkVMRVZCUVZVc1RVRkJWanRYUVVGeFFpeFZRVUZETEVOQlFWY3NUMEZCV0N4SlFVRnpRaXhIUVVGMFFpeEhRVUUyUWl4TlFVRTVRaXhIUVVGMVF5eEpRVUYyUXp0RFFVRnlRanM3UVVGRlZDeFRRVUZUTEV0QlFWUXNRMEZCWlN4TFFVRm1MRVZCUVhOQ0xFMUJRWFJDTEVWQlFUaENPMEZCUTNwRExGRkJRVTBzVTBGQlV5eEZRVUZVTEVOQlJHMURPMEZCUlhwRExGRkJRVTBzYTBKQlFXdENPMEZCUTNCQ0xHZENRVUZSTEVOQlFWSTdRVUZEUVN4cFFrRkJVeXhUUVVGVExFbEJRVlE3UzBGR1VDeERRVVp0UXp0QlFVMTZReXhSUVVGSkxHVkJRV1VzUzBGQlppeERRVTV4UXpzN1FVRlJla01zVTBGQlN5eEpRVUZKTEVkQlFVb3NTVUZCVnl4TFFVRm9RaXhGUVVGMVFqdEJRVU51UWl4WlFVRkpMRTFCUVUwc1kwRkJUaXhEUVVGeFFpeEhRVUZ5UWl4RFFVRktMRVZCUVN0Q08wRkJRek5DTEdkQ1FVRk5MRkZCUVZFc1RVRkJUU3hIUVVGT0xFTkJRVklzUTBGRWNVSTdPMEZCUnpOQ0xHOUNRVUZSTEVkQlFWSTdRVUZEUVN4eFFrRkJTeXhSUVVGTUxFTkJSRUU3UVVGRlFTeHhRa0ZCU3l4VFFVRk1PMEZCUTBrc2JVTkJRV1VzU1VGQlppeERRVVJLTzBGQlJVa3NiME5CUVdkQ0xFZEJRV2hDTEVsQlFYVkNMR2RDUVVGblFpeExRVUZvUWl4RlFVRjFRaXhOUVVGMlFpeERRVUYyUWl4RFFVWktPMEZCUjBrc01FSkJTRW83UVVGR1FTeHhRa0ZOU3l4UlFVRk1PMEZCUTBrc01rSkJRVThzYlVKQlFWQXNTVUZCT0VJc1owSkJRV2RDTEVOQlFVTXNTMEZCUkN4RlFVRlJMRTFCUVhoQ0xFTkJRVGxDTEVOQlJFbzdRVUZGU1N3d1FrRkdTanRCUVU1Qk8wRkJWVWtzTWtKQlFVOHNSMEZCVUN4SlFVRmpMRXRCUVdRc1EwRkVTanRCUVZSQkxHRkJTREpDTzFOQlFTOUNPMHRCUkVvN08wRkJiVUpCTEZGQlFVa3NXVUZCU2l4RlFVRnJRanRCUVVOa0xHVkJRVThzYTBKQlFWQXNTVUZCTmtJc1owSkJRV2RDTEUxQlFXaENMRWRCUVhsQ0xFZEJRWHBDTEVkQlFTdENMR2RDUVVGblFpeFBRVUZvUWl4RFFVUTVRenRMUVVGc1FqczdRVUZKUVN4WFFVRlBMRTFCUVZBc1EwRXZRbmxETzBOQlFUbENJaXdpWm1sc1pTSTZJbUoxYVd4a0xtcHpJaXdpYzI5MWNtTmxVbTl2ZENJNklpOVZjMlZ5Y3k5TllYUjBMMU5wZEdWekwzQnZjRzF2ZEdsdmJpSXNJbk52ZFhKalpYTkRiMjUwWlc1MElqcGJJaThxWEc0Z0lDQWdRMjl1ZG1WeWRDQndaWEpqWlc1MFlXZGxJSFJ2SUhCcGVHVnNjMXh1SUNBZ0lGeHVJQ0FnSUVCd1lYSmhiU0JiYm5WdFltVnlYVG9nVUdWeVkyVnVkR0ZuWlNCdlppQjBiM1JoYkNCc1pXNW5kR2hjYmlBZ0lDQkFjR0Z5WVcwZ1cyNTFiV0psY2wwNklGUnZkR0ZzSUd4bGJtZDBhRnh1S2k5Y2JtTnZibk4wSUhCbGNtTmxiblJVYjFCcGVHVnNjeUE5SUNod1pYSmpaVzUwTENCc1pXNW5kR2dwSUQwK0lDaHdZWEp6WlVac2IyRjBLSEJsY21ObGJuUXBJQzhnTVRBd0tTQXFJR3hsYm1kMGFDQXJJQ2R3ZUNjN1hHNWNibVY0Y0c5eWRDQmtaV1poZFd4MElHWjFibU4wYVc5dUlHSjFhV3hrS0hOMFlYUmxMQ0JzWlc1bmRHZ3BJSHRjYmlBZ0lDQmpiMjV6ZENCemRIbHNaWE1nUFNCN2ZUdGNiaUFnSUNCamIyNXpkQ0JrWVhOb1FYSnlZWGxUZEhsc1pYTWdQU0I3WEc0Z0lDQWdJQ0FnSUd4bGJtZDBhRG9nTUN4Y2JpQWdJQ0FnSUNBZ2MzQmhZMmx1WnpvZ2JHVnVaM1JvSUNzZ0ozQjRKMXh1SUNBZ0lIMDdYRzRnSUNBZ2JHVjBJR2hoYzBSaGMyaEJjbkpoZVNBOUlHWmhiSE5sTzF4dVhHNGdJQ0FnWm05eUlDaHNaWFFnYTJWNUlHbHVJSE4wWVhSbEtTQjdYRzRnSUNBZ0lDQWdJR2xtSUNoemRHRjBaUzVvWVhOUGQyNVFjbTl3WlhKMGVTaHJaWGtwS1NCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0JqYjI1emRDQjJZV3gxWlNBOUlITjBZWFJsVzJ0bGVWMDdYRzVjYmlBZ0lDQWdJQ0FnSUNBZ0lITjNhWFJqYUNBb2EyVjVLU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQmpZWE5sSUNkc1pXNW5kR2duT2x4dUlDQWdJQ0FnSUNBZ0lDQWdZMkZ6WlNBbmMzQmhZMmx1WnljNlhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2FHRnpSR0Z6YUVGeWNtRjVJRDBnZEhKMVpUdGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQmtZWE5vUVhKeVlYbFRkSGxzWlhOYmEyVjVYU0E5SUhCbGNtTmxiblJVYjFCcGVHVnNjeWgyWVd4MVpTd2diR1Z1WjNSb0tUdGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQmljbVZoYXp0Y2JpQWdJQ0FnSUNBZ0lDQWdJR05oYzJVZ0oyOW1abk5sZENjNlhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2MzUjViR1Z6V3lkemRISnZhMlV0WkdGemFHOW1abk5sZENkZElEMGdjR1Z5WTJWdWRGUnZVR2w0Wld4ektDMTJZV3gxWlN3Z2JHVnVaM1JvS1R0Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCaWNtVmhhenRjYmlBZ0lDQWdJQ0FnSUNBZ0lHUmxabUYxYkhRNlhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2MzUjViR1Z6VzJ0bGVWMGdQU0IyWVd4MVpUdGNiaUFnSUNBZ0lDQWdJQ0FnSUgxY2JpQWdJQ0FnSUNBZ2ZWeHVJQ0FnSUgxY2JseHVJQ0FnSUdsbUlDaG9ZWE5FWVhOb1FYSnlZWGtwSUh0Y2JpQWdJQ0FnSUNBZ2MzUjViR1Z6V3lkemRISnZhMlV0WkdGemFHRnljbUY1SjEwZ1BTQmtZWE5vUVhKeVlYbFRkSGxzWlhNdWJHVnVaM1JvSUNzZ0p5QW5JQ3NnWkdGemFFRnljbUY1VTNSNWJHVnpMbk53WVdOcGJtYzdYRzRnSUNBZ2ZWeHVYRzRnSUNBZ2NtVjBkWEp1SUhOMGVXeGxjenRjYm4waVhYMD1cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2FkYXB0ZXIvc3ZnLXBhdGgvYnVpbGQuanNcbiAqKiBtb2R1bGUgaWQgPSAzNVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9O1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX3N0YXRlTWFwID0gcmVxdWlyZSgnLi4vY3NzL3N0YXRlLW1hcCcpO1xuXG52YXIgX3N0YXRlTWFwMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3N0YXRlTWFwKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxudmFyIFNUUk9LRSA9ICdzdHJva2UtJztcblxuZXhwb3J0cy5kZWZhdWx0ID0gX2V4dGVuZHMoe30sIF9zdGF0ZU1hcDIuZGVmYXVsdCwge1xuICAgIG9wYWNpdHk6IFNUUk9LRSArICdvcGFjaXR5JyxcbiAgICB3aWR0aDogU1RST0tFICsgJ3dpZHRoJyxcbiAgICBtaXRlcmxpbWl0OiBTVFJPS0UgKyAnbWl0ZXJsaW1pdCdcbn0pO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluTnlZeTloWkdGd2RHVnlMM04yWnkxd1lYUm9MM04wWVhSbExXMWhjQzVxY3lKZExDSnVZVzFsY3lJNlcxMHNJbTFoY0hCcGJtZHpJam9pT3pzN096czdPenM3T3pzN1FVRkZRU3hKUVVGTkxGTkJRVk1zVTBGQlZEczdPMEZCU1VZc1lVRkJXU3hyUWtGQldqdEJRVU5CTEZkQlFWVXNaMEpCUVZZN1FVRkRRU3huUWtGQlpTeHhRa0ZCWmlJc0ltWnBiR1VpT2lKemRHRjBaUzF0WVhBdWFuTWlMQ0p6YjNWeVkyVlNiMjkwSWpvaUwxVnpaWEp6TDAxaGRIUXZVMmwwWlhNdmNHOXdiVzkwYVc5dUlpd2ljMjkxY21ObGMwTnZiblJsYm5RaU9sc2lhVzF3YjNKMElHTnpjMU4wWVhSbFRXRndJR1p5YjIwZ0p5NHVMMk56Y3k5emRHRjBaUzF0WVhBbk8xeHVYRzVqYjI1emRDQlRWRkpQUzBVZ1BTQW5jM1J5YjJ0bExTYzdYRzVjYm1WNGNHOXlkQ0JrWldaaGRXeDBJSHRjYmlBZ0lDQXVMaTVqYzNOVGRHRjBaVTFoY0N4Y2JpQWdJQ0J2Y0dGamFYUjVPaUJnSkh0VFZGSlBTMFY5YjNCaFkybDBlV0FzWEc0Z0lDQWdkMmxrZEdnNklHQWtlMU5VVWs5TFJYMTNhV1IwYUdBc1hHNGdJQ0FnYldsMFpYSnNhVzFwZERvZ1lDUjdVMVJTVDB0RmZXMXBkR1Z5YkdsdGFYUmdYRzU5T3lKZGZRPT1cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2FkYXB0ZXIvc3ZnLXBhdGgvc3RhdGUtbWFwLmpzXG4gKiogbW9kdWxlIGlkID0gMzZcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbnZhciBUUkFOU0xBVEUgPSAndHJhbnNsYXRlJztcblxuZXhwb3J0cy5kZWZhdWx0ID0ge1xuICAgIHg6IFRSQU5TTEFURSArICdYJyxcbiAgICB5OiBUUkFOU0xBVEUgKyAnWScsXG4gICAgejogVFJBTlNMQVRFICsgJ1onXG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluTnlZeTloWkdGd2RHVnlMMk56Y3k5emRHRjBaUzF0WVhBdWFuTWlYU3dpYm1GdFpYTWlPbHRkTENKdFlYQndhVzVuY3lJNklqczdPMEZCUVVFc1NVRkJUU3haUVVGWkxGZEJRVm83TzJ0Q1FVVlRPMEZCUTFnc1QwRkJSeXhaUVVGWkxFZEJRVm83UVVGRFNDeFBRVUZITEZsQlFWa3NSMEZCV2p0QlFVTklMRTlCUVVjc1dVRkJXU3hIUVVGYUlpd2labWxzWlNJNkluTjBZWFJsTFcxaGNDNXFjeUlzSW5OdmRYSmpaVkp2YjNRaU9pSXZWWE5sY25NdlRXRjBkQzlUYVhSbGN5OXdiM0J0YjNScGIyNGlMQ0p6YjNWeVkyVnpRMjl1ZEdWdWRDSTZXeUpqYjI1emRDQlVVa0ZPVTB4QlZFVWdQU0FuZEhKaGJuTnNZWFJsSnp0Y2JseHVaWGh3YjNKMElHUmxabUYxYkhRZ2UxeHVJQ0FnSUhnNklGUlNRVTVUVEVGVVJTQXJJQ2RZSnl4Y2JpQWdJQ0I1T2lCVVVrRk9VMHhCVkVVZ0t5QW5XU2NzWEc0Z0lDQWdlam9nVkZKQlRsTk1RVlJGSUNzZ0oxb25YRzU5T3lKZGZRPT1cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2FkYXB0ZXIvY3NzL3N0YXRlLW1hcC5qc1xuICoqIG1vZHVsZSBpZCA9IDM3XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfYWxwaGEgPSByZXF1aXJlKCcuLi8uLi92YWx1ZS10eXBlcy9hbHBoYScpO1xuXG52YXIgX2FscGhhMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2FscGhhKTtcblxudmFyIF9heGVzID0gcmVxdWlyZSgnLi4vLi4vdmFsdWUtdHlwZXMvYXhlcycpO1xuXG52YXIgX2F4ZXMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfYXhlcyk7XG5cbnZhciBfY29sb3IgPSByZXF1aXJlKCcuLi8uLi92YWx1ZS10eXBlcy9jb2xvcicpO1xuXG52YXIgX2NvbG9yMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NvbG9yKTtcblxudmFyIF9jb21wbGV4ID0gcmVxdWlyZSgnLi4vLi4vdmFsdWUtdHlwZXMvY29tcGxleCcpO1xuXG52YXIgX2NvbXBsZXgyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY29tcGxleCk7XG5cbnZhciBfc2NhbGUgPSByZXF1aXJlKCcuLi8uLi92YWx1ZS10eXBlcy9zY2FsZScpO1xuXG52YXIgX3NjYWxlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3NjYWxlKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZXhwb3J0cy5kZWZhdWx0ID0ge1xuICAgIGZpbGw6IF9jb2xvcjIuZGVmYXVsdCxcbiAgICBzdHJva2U6IF9jb2xvcjIuZGVmYXVsdCxcbiAgICBzY2FsZTogX3NjYWxlMi5kZWZhdWx0LFxuICAgIHNjYWxlWDogX3NjYWxlMi5kZWZhdWx0LFxuICAgIHNjYWxlWTogX3NjYWxlMi5kZWZhdWx0LFxuICAgIHRyYW5zZm9ybU9yaWdpbjogX2F4ZXMyLmRlZmF1bHQsXG4gICAgZDogX2NvbXBsZXgyLmRlZmF1bHQsXG4gICAgb3BhY2l0eTogX2FscGhhMi5kZWZhdWx0LFxuICAgIGZpbGxPcGFjaXR5OiBfYWxwaGEyLmRlZmF1bHQsXG4gICAgc3Ryb2tlT3BhY2l0eTogX2FscGhhMi5kZWZhdWx0XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluTnlZeTloWkdGd2RHVnlMM04yWnk5MllXeDFaUzEwZVhCbExXMWhjQzVxY3lKZExDSnVZVzFsY3lJNlcxMHNJbTFoY0hCcGJtZHpJam9pT3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenRyUWtGTlpUdEJRVU5ZTEhsQ1FVUlhPMEZCUlZnc01rSkJSbGM3UVVGSFdDd3dRa0ZJVnp0QlFVbFlMREpDUVVwWE8wRkJTMWdzTWtKQlRGYzdRVUZOV0N4dFEwRk9WenRCUVU5WUxIZENRVkJYTzBGQlVWZ3NORUpCVWxjN1FVRlRXQ3huUTBGVVZ6dEJRVlZZTEd0RFFWWlhJaXdpWm1sc1pTSTZJblpoYkhWbExYUjVjR1V0YldGd0xtcHpJaXdpYzI5MWNtTmxVbTl2ZENJNklpOVZjMlZ5Y3k5TllYUjBMMU5wZEdWekwzQnZjRzF2ZEdsdmJpSXNJbk52ZFhKalpYTkRiMjUwWlc1MElqcGJJbWx0Y0c5eWRDQmhiSEJvWVNCbWNtOXRJQ2N1TGk4dUxpOTJZV3gxWlMxMGVYQmxjeTloYkhCb1lTYzdYRzVwYlhCdmNuUWdZWGhsY3lCbWNtOXRJQ2N1TGk4dUxpOTJZV3gxWlMxMGVYQmxjeTloZUdWekp6dGNibWx0Y0c5eWRDQmpiMnh2Y2lCbWNtOXRJQ2N1TGk4dUxpOTJZV3gxWlMxMGVYQmxjeTlqYjJ4dmNpYzdYRzVwYlhCdmNuUWdZMjl0Y0d4bGVDQm1jbTl0SUNjdUxpOHVMaTkyWVd4MVpTMTBlWEJsY3k5amIyMXdiR1Y0Snp0Y2JtbHRjRzl5ZENCelkyRnNaU0JtY205dElDY3VMaTh1TGk5MllXeDFaUzEwZVhCbGN5OXpZMkZzWlNjN1hHNWNibVY0Y0c5eWRDQmtaV1poZFd4MElIdGNiaUFnSUNCbWFXeHNPaUJqYjJ4dmNpeGNiaUFnSUNCemRISnZhMlU2SUdOdmJHOXlMRnh1SUNBZ0lITmpZV3hsT2lCelkyRnNaU3hjYmlBZ0lDQnpZMkZzWlZnNklITmpZV3hsTEZ4dUlDQWdJSE5qWVd4bFdUb2djMk5oYkdVc1hHNGdJQ0FnZEhKaGJuTm1iM0p0VDNKcFoybHVPaUJoZUdWekxGeHVJQ0FnSUdRNklHTnZiWEJzWlhnc1hHNGdJQ0FnYjNCaFkybDBlVG9nWVd4d2FHRXNYRzRnSUNBZ1ptbHNiRTl3WVdOcGRIazZJR0ZzY0doaExGeHVJQ0FnSUhOMGNtOXJaVTl3WVdOcGRIazZJR0ZzY0doaFhHNTlPeUpkZlE9PVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvYWRhcHRlci9zdmcvdmFsdWUtdHlwZS1tYXAuanNcbiAqKiBtb2R1bGUgaWQgPSAzOFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0cy5kZWZhdWx0ID0gYnVpbGQ7XG5cbnZhciBfdXRpbHMgPSByZXF1aXJlKCcuLi8uLi9pbmMvdXRpbHMnKTtcblxudmFyIF90cmFuc2Zvcm1Qcm9wcyA9IHJlcXVpcmUoJy4uL2Nzcy90cmFuc2Zvcm0tcHJvcHMnKTtcblxudmFyIF90cmFuc2Zvcm1Qcm9wczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF90cmFuc2Zvcm1Qcm9wcyk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbnZhciBaRVJPX05PVF9aRVJPID0gMC4wMDAxO1xuXG5mdW5jdGlvbiBidWlsZChzdGF0ZSwgb3JpZ2luKSB7XG4gICAgdmFyIHByb3BzID0ge30sXG4gICAgICAgIGhhc1RyYW5zZm9ybSA9IGZhbHNlLFxuICAgICAgICBzY2FsZSA9IHN0YXRlLnNjYWxlICE9PSB1bmRlZmluZWQgPyBzdGF0ZS5zY2FsZSB8fCBaRVJPX05PVF9aRVJPIDogc3RhdGUuc2NhbGVYIHx8IDEsXG4gICAgICAgIHNjYWxlWSA9IHN0YXRlLnNjYWxlWSAhPT0gdW5kZWZpbmVkID8gc3RhdGUuc2NhbGVZIHx8IFpFUk9fTk9UX1pFUk8gOiBzY2FsZSB8fCAxLFxuICAgICAgICB0cmFuc2Zvcm1PcmlnaW5YID0gb3JpZ2luLngsXG4gICAgICAgIHRyYW5zZm9ybU9yaWdpblkgPSBvcmlnaW4ueSxcbiAgICAgICAgc2NhbGVUcmFuc2Zvcm1YID0gLXRyYW5zZm9ybU9yaWdpblggKiAoc2NhbGUgKiAxKSxcbiAgICAgICAgc2NhbGVUcmFuc2Zvcm1ZID0gLXRyYW5zZm9ybU9yaWdpblkgKiAoc2NhbGVZICogMSksXG4gICAgICAgIHNjYWxlUmVwbGFjZVggPSB0cmFuc2Zvcm1PcmlnaW5YIC8gc2NhbGUsXG4gICAgICAgIHNjYWxlUmVwbGFjZVkgPSB0cmFuc2Zvcm1PcmlnaW5ZIC8gc2NhbGVZLFxuICAgICAgICB0cmFuc2Zvcm0gPSB7XG4gICAgICAgIHRyYW5zbGF0ZTogJ3RyYW5zbGF0ZSgnICsgc3RhdGUudHJhbnNsYXRlWCArICcsICcgKyBzdGF0ZS50cmFuc2xhdGVZICsgJykgJyxcbiAgICAgICAgc2NhbGU6ICd0cmFuc2xhdGUoJyArIHNjYWxlVHJhbnNmb3JtWCArICcsICcgKyBzY2FsZVRyYW5zZm9ybVkgKyAnKSBzY2FsZSgnICsgc2NhbGUgKyAnLCAnICsgc2NhbGVZICsgJykgdHJhbnNsYXRlKCcgKyBzY2FsZVJlcGxhY2VYICsgJywgJyArIHNjYWxlUmVwbGFjZVkgKyAnKSAnLFxuICAgICAgICByb3RhdGU6ICdyb3RhdGUoJyArIHN0YXRlLnJvdGF0ZSArICcsICcgKyB0cmFuc2Zvcm1PcmlnaW5YICsgJywgJyArIHRyYW5zZm9ybU9yaWdpblkgKyAnKSAnLFxuICAgICAgICBza2V3WDogJ3NrZXdYKCcgKyBzdGF0ZS5za2V3WCArICcpICcsXG4gICAgICAgIHNrZXdZOiAnc2tld1koJyArIHN0YXRlLnNrZXdZICsgJykgJ1xuICAgIH07XG5cbiAgICBmb3IgKHZhciBrZXkgaW4gc3RhdGUpIHtcbiAgICAgICAgaWYgKHN0YXRlLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICAgIGlmIChfdHJhbnNmb3JtUHJvcHMyLmRlZmF1bHRba2V5XSkge1xuICAgICAgICAgICAgICAgIGhhc1RyYW5zZm9ybSA9IHRydWU7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHByb3BzWygwLCBfdXRpbHMuY2FtZWxUb0Rhc2gpKGtleSldID0gc3RhdGVba2V5XTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGlmIChoYXNUcmFuc2Zvcm0pIHtcbiAgICAgICAgcHJvcHMudHJhbnNmb3JtID0gJyc7XG5cbiAgICAgICAgZm9yICh2YXIga2V5IGluIHRyYW5zZm9ybSkge1xuICAgICAgICAgICAgaWYgKHRyYW5zZm9ybS5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgICAgICAgdmFyIGRlZmF1bHRWYWx1ZSA9IGtleSA9PT0gJ3NjYWxlJyA/ICcxJyA6ICcwJztcbiAgICAgICAgICAgICAgICBwcm9wcy50cmFuc2Zvcm0gKz0gdHJhbnNmb3JtW2tleV0ucmVwbGFjZSgvdW5kZWZpbmVkL2csIGRlZmF1bHRWYWx1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gcHJvcHM7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5OeVl5OWhaR0Z3ZEdWeUwzTjJaeTlpZFdsc1pDNXFjeUpkTENKdVlXMWxjeUk2VzEwc0ltMWhjSEJwYm1keklqb2lPenM3YTBKQlMzZENPenM3T3pzN096czdPMEZCUm5oQ0xFbEJRVTBzWjBKQlFXZENMRTFCUVdoQ096dEJRVVZUTEZOQlFWTXNTMEZCVkN4RFFVRmxMRXRCUVdZc1JVRkJjMElzVFVGQmRFSXNSVUZCT0VJN1FVRkRla01zVVVGQlNTeFJRVUZSTEVWQlFWSTdVVUZEUVN4bFFVRmxMRXRCUVdZN1VVRkRRU3hSUVVGUkxFMUJRVTBzUzBGQlRpeExRVUZuUWl4VFFVRm9RaXhIUVVFMFFpeE5RVUZOTEV0QlFVNHNTVUZCWlN4aFFVRm1MRWRCUVN0Q0xFMUJRVTBzVFVGQlRpeEpRVUZuUWl4RFFVRm9RanRSUVVOdVJTeFRRVUZUTEUxQlFVMHNUVUZCVGl4TFFVRnBRaXhUUVVGcVFpeEhRVUUyUWl4TlFVRk5MRTFCUVU0c1NVRkJaMElzWVVGQmFFSXNSMEZCWjBNc1UwRkJVeXhEUVVGVU8xRkJRM1JGTEcxQ1FVRnRRaXhQUVVGUExFTkJRVkE3VVVGRGJrSXNiVUpCUVcxQ0xFOUJRVThzUTBGQlVEdFJRVU51UWl4clFrRkJhMElzUTBGQlJTeG5Ra0ZCUml4SlFVRnpRaXhSUVVGUkxFTkJRVklzUTBGQmRFSTdVVUZEYkVJc2EwSkJRV3RDTEVOQlFVVXNaMEpCUVVZc1NVRkJjMElzVTBGQlV5eERRVUZVTEVOQlFYUkNPMUZCUTJ4Q0xHZENRVUZuUWl4dFFrRkJiVUlzUzBGQmJrSTdVVUZEYUVJc1owSkJRV2RDTEcxQ1FVRnRRaXhOUVVGdVFqdFJRVU5vUWl4WlFVRlpPMEZCUTFJc2EwTkJRWGRDTEUxQlFVMHNWVUZCVGl4VlFVRnhRaXhOUVVGTkxGVkJRVTRzVDBGQk4wTTdRVUZEUVN3NFFrRkJiMElzZVVKQlFXOUNMQ3RDUVVFd1FpeGxRVUZWTERCQ1FVRnhRaXgxUWtGQmEwSXNiMEpCUVc1SU8wRkJRMEVzTkVKQlFXdENMRTFCUVUwc1RVRkJUaXhWUVVGcFFpd3dRa0ZCY1VJc2RVSkJRWGhFTzBGQlEwRXNNRUpCUVdkQ0xFMUJRVTBzUzBGQlRpeFBRVUZvUWp0QlFVTkJMREJDUVVGblFpeE5RVUZOTEV0QlFVNHNUMEZCYUVJN1MwRk1TaXhEUVZoeFF6czdRVUZ0UW5wRExGTkJRVXNzU1VGQlNTeEhRVUZLTEVsQlFWY3NTMEZCYUVJc1JVRkJkVUk3UVVGRGJrSXNXVUZCU1N4TlFVRk5MR05CUVU0c1EwRkJjVUlzUjBGQmNrSXNRMEZCU2l4RlFVRXJRanRCUVVNelFpeG5Ra0ZCU1N4NVFrRkJaU3hIUVVGbUxFTkJRVW9zUlVGQmVVSTdRVUZEY2tJc0swSkJRV1VzU1VGQlppeERRVVJ4UWp0aFFVRjZRaXhOUVVWUE8wRkJRMGdzYzBKQlFVMHNkMEpCUVZrc1IwRkJXaXhEUVVGT0xFbEJRVEJDTEUxQlFVMHNSMEZCVGl4RFFVRXhRaXhEUVVSSE8yRkJSbEE3VTBGRVNqdExRVVJLT3p0QlFWVkJMRkZCUVVrc1dVRkJTaXhGUVVGclFqdEJRVU5rTEdOQlFVMHNVMEZCVGl4SFFVRnJRaXhGUVVGc1FpeERRVVJqT3p0QlFVZGtMR0ZCUVVzc1NVRkJTU3hIUVVGS0xFbEJRVmNzVTBGQmFFSXNSVUZCTWtJN1FVRkRka0lzWjBKQlFVa3NWVUZCVlN4alFVRldMRU5CUVhsQ0xFZEJRWHBDTEVOQlFVb3NSVUZCYlVNN1FVRkRMMElzYjBKQlFVMHNaVUZCWlN4SFFVRkRMRXRCUVZFc1QwRkJVaXhIUVVGdFFpeEhRVUZ3UWl4SFFVRXdRaXhIUVVFeFFpeERRVVJWTzBGQlJTOUNMSE5DUVVGTkxGTkJRVTRzU1VGQmJVSXNWVUZCVlN4SFFVRldMRVZCUVdVc1QwRkJaaXhEUVVGMVFpeFpRVUYyUWl4RlFVRnhReXhaUVVGeVF5eERRVUZ1UWl4RFFVWXJRanRoUVVGdVF6dFRRVVJLTzB0QlNFbzdPMEZCVjBFc1YwRkJUeXhMUVVGUUxFTkJlRU41UXp0RFFVRTVRaUlzSW1acGJHVWlPaUppZFdsc1pDNXFjeUlzSW5OdmRYSmpaVkp2YjNRaU9pSXZWWE5sY25NdlRXRjBkQzlUYVhSbGN5OXdiM0J0YjNScGIyNGlMQ0p6YjNWeVkyVnpRMjl1ZEdWdWRDSTZXeUpwYlhCdmNuUWdleUJqWVcxbGJGUnZSR0Z6YUNCOUlHWnliMjBnSnk0dUx5NHVMMmx1WXk5MWRHbHNjeWM3WEc1cGJYQnZjblFnZEhKaGJuTm1iM0p0VUhKdmNITWdabkp2YlNBbkxpNHZZM056TDNSeVlXNXpabTl5YlMxd2NtOXdjeWM3WEc1Y2JtTnZibk4wSUZwRlVrOWZUazlVWDFwRlVrOGdQU0F3TGpBd01ERTdYRzVjYm1WNGNHOXlkQ0JrWldaaGRXeDBJR1oxYm1OMGFXOXVJR0oxYVd4a0tITjBZWFJsTENCdmNtbG5hVzRwSUh0Y2JpQWdJQ0JzWlhRZ2NISnZjSE1nUFNCN2ZTeGNiaUFnSUNBZ0lDQWdhR0Z6VkhKaGJuTm1iM0p0SUQwZ1ptRnNjMlVzWEc0Z0lDQWdJQ0FnSUhOallXeGxJRDBnYzNSaGRHVXVjMk5oYkdVZ0lUMDlJSFZ1WkdWbWFXNWxaQ0EvSUhOMFlYUmxMbk5qWVd4bElIeDhJRnBGVWs5ZlRrOVVYMXBGVWs4Z09pQnpkR0YwWlM1elkyRnNaVmdnZkh3Z01TeGNiaUFnSUNBZ0lDQWdjMk5oYkdWWklEMGdjM1JoZEdVdWMyTmhiR1ZaSUNFOVBTQjFibVJsWm1sdVpXUWdQeUJ6ZEdGMFpTNXpZMkZzWlZrZ2ZId2dXa1ZTVDE5T1QxUmZXa1ZTVHlBNklITmpZV3hsSUh4OElERXNYRzRnSUNBZ0lDQWdJSFJ5WVc1elptOXliVTl5YVdkcGJsZ2dQU0J2Y21sbmFXNHVlQ3hjYmlBZ0lDQWdJQ0FnZEhKaGJuTm1iM0p0VDNKcFoybHVXU0E5SUc5eWFXZHBiaTU1TEZ4dUlDQWdJQ0FnSUNCelkyRnNaVlJ5WVc1elptOXliVmdnUFNBdElIUnlZVzV6Wm05eWJVOXlhV2RwYmxnZ0tpQW9jMk5oYkdVZ0tpQXhLU3hjYmlBZ0lDQWdJQ0FnYzJOaGJHVlVjbUZ1YzJadmNtMVpJRDBnTFNCMGNtRnVjMlp2Y20xUGNtbG5hVzVaSUNvZ0tITmpZV3hsV1NBcUlERXBMRnh1SUNBZ0lDQWdJQ0J6WTJGc1pWSmxjR3hoWTJWWUlEMGdkSEpoYm5ObWIzSnRUM0pwWjJsdVdDQXZJSE5qWVd4bExGeHVJQ0FnSUNBZ0lDQnpZMkZzWlZKbGNHeGhZMlZaSUQwZ2RISmhibk5tYjNKdFQzSnBaMmx1V1NBdklITmpZV3hsV1N4Y2JpQWdJQ0FnSUNBZ2RISmhibk5tYjNKdElEMGdlMXh1SUNBZ0lDQWdJQ0FnSUNBZ2RISmhibk5zWVhSbE9pQmdkSEpoYm5Oc1lYUmxLQ1I3YzNSaGRHVXVkSEpoYm5Oc1lYUmxXSDBzSUNSN2MzUmhkR1V1ZEhKaGJuTnNZWFJsV1gwcElHQXNYRzRnSUNBZ0lDQWdJQ0FnSUNCelkyRnNaVG9nWUhSeVlXNXpiR0YwWlNna2UzTmpZV3hsVkhKaGJuTm1iM0p0V0gwc0lDUjdjMk5oYkdWVWNtRnVjMlp2Y20xWmZTa2djMk5oYkdVb0pIdHpZMkZzWlgwc0lDUjdjMk5oYkdWWmZTa2dkSEpoYm5Oc1lYUmxLQ1I3YzJOaGJHVlNaWEJzWVdObFdIMHNJQ1I3YzJOaGJHVlNaWEJzWVdObFdYMHBJR0FzWEc0Z0lDQWdJQ0FnSUNBZ0lDQnliM1JoZEdVNklHQnliM1JoZEdVb0pIdHpkR0YwWlM1eWIzUmhkR1Y5TENBa2UzUnlZVzV6Wm05eWJVOXlhV2RwYmxoOUxDQWtlM1J5WVc1elptOXliVTl5YVdkcGJsbDlLU0JnTEZ4dUlDQWdJQ0FnSUNBZ0lDQWdjMnRsZDFnNklHQnphMlYzV0Nna2UzTjBZWFJsTG5OclpYZFlmU2tnWUN4Y2JpQWdJQ0FnSUNBZ0lDQWdJSE5yWlhkWk9pQmdjMnRsZDFrb0pIdHpkR0YwWlM1emEyVjNXWDBwSUdCY2JpQWdJQ0FnSUNBZ2ZUdGNibHh1SUNBZ0lHWnZjaUFvYkdWMElHdGxlU0JwYmlCemRHRjBaU2tnZTF4dUlDQWdJQ0FnSUNCcFppQW9jM1JoZEdVdWFHRnpUM2R1VUhKdmNHVnlkSGtvYTJWNUtTa2dlMXh1SUNBZ0lDQWdJQ0FnSUNBZ2FXWWdLSFJ5WVc1elptOXliVkJ5YjNCelcydGxlVjBwSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCb1lYTlVjbUZ1YzJadmNtMGdQU0IwY25WbE8xeHVJQ0FnSUNBZ0lDQWdJQ0FnZlNCbGJITmxJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0J3Y205d2MxdGpZVzFsYkZSdlJHRnphQ2hyWlhrcFhTQTlJSE4wWVhSbFcydGxlVjA3WEc0Z0lDQWdJQ0FnSUNBZ0lDQjlYRzRnSUNBZ0lDQWdJSDFjYmlBZ0lDQjlYRzVjYmlBZ0lDQnBaaUFvYUdGelZISmhibk5tYjNKdEtTQjdYRzRnSUNBZ0lDQWdJSEJ5YjNCekxuUnlZVzV6Wm05eWJTQTlJQ2NuTzF4dVhHNGdJQ0FnSUNBZ0lHWnZjaUFvYkdWMElHdGxlU0JwYmlCMGNtRnVjMlp2Y20wcElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUdsbUlDaDBjbUZ1YzJadmNtMHVhR0Z6VDNkdVVISnZjR1Z5ZEhrb2EyVjVLU2tnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUdOdmJuTjBJR1JsWm1GMWJIUldZV3gxWlNBOUlDaHJaWGtnUFQwOUlDZHpZMkZzWlNjcElEOGdKekVuSURvZ0p6QW5PMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJSEJ5YjNCekxuUnlZVzV6Wm05eWJTQXJQU0IwY21GdWMyWnZjbTFiYTJWNVhTNXlaWEJzWVdObEtDOTFibVJsWm1sdVpXUXZaeXdnWkdWbVlYVnNkRlpoYkhWbEtUdGNiaUFnSUNBZ0lDQWdJQ0FnSUgxY2JpQWdJQ0FnSUNBZ2ZWeHVJQ0FnSUgxY2JseHVJQ0FnSUhKbGRIVnliaUJ3Y205d2N6dGNibjBpWFgwPVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvYWRhcHRlci9zdmcvYnVpbGQuanNcbiAqKiBtb2R1bGUgaWQgPSAzOVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX2FuZ2xlID0gcmVxdWlyZSgnLi4vLi4vdmFsdWUtdHlwZXMvYW5nbGUnKTtcblxudmFyIF9hbmdsZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9hbmdsZSk7XG5cbnZhciBfYWxwaGEgPSByZXF1aXJlKCcuLi8uLi92YWx1ZS10eXBlcy9hbHBoYScpO1xuXG52YXIgX2FscGhhMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2FscGhhKTtcblxudmFyIF9heGVzID0gcmVxdWlyZSgnLi4vLi4vdmFsdWUtdHlwZXMvYXhlcycpO1xuXG52YXIgX2F4ZXMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfYXhlcyk7XG5cbnZhciBfY29sb3IgPSByZXF1aXJlKCcuLi8uLi92YWx1ZS10eXBlcy9jb2xvcicpO1xuXG52YXIgX2NvbG9yMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NvbG9yKTtcblxudmFyIF9zY2FsZSA9IHJlcXVpcmUoJy4uLy4uL3ZhbHVlLXR5cGVzL3NjYWxlJyk7XG5cbnZhciBfc2NhbGUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfc2NhbGUpO1xuXG52YXIgX3NoYWRvdyA9IHJlcXVpcmUoJy4uLy4uL3ZhbHVlLXR5cGVzL3NoYWRvdycpO1xuXG52YXIgX3NoYWRvdzIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9zaGFkb3cpO1xuXG52YXIgX3Bvc2l0aW9ucyA9IHJlcXVpcmUoJy4uLy4uL3ZhbHVlLXR5cGVzL3Bvc2l0aW9ucycpO1xuXG52YXIgX3Bvc2l0aW9uczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9wb3NpdGlvbnMpO1xuXG52YXIgX3B4ID0gcmVxdWlyZSgnLi4vLi4vdmFsdWUtdHlwZXMvcHgnKTtcblxudmFyIF9weDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9weCk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmV4cG9ydHMuZGVmYXVsdCA9IHtcbiAgICAvLyBDb2xvciBwcm9wc1xuICAgIGNvbG9yOiBfY29sb3IyLmRlZmF1bHQsXG4gICAgYmFja2dyb3VuZENvbG9yOiBfY29sb3IyLmRlZmF1bHQsXG4gICAgb3V0bGluZUNvbG9yOiBfY29sb3IyLmRlZmF1bHQsXG4gICAgZmlsbDogX2NvbG9yMi5kZWZhdWx0LFxuICAgIHN0cm9rZTogX2NvbG9yMi5kZWZhdWx0LFxuXG4gICAgLy8gQm9yZGVyIHByb3BzXG4gICAgYm9yZGVyQ29sb3I6IF9jb2xvcjIuZGVmYXVsdCxcbiAgICBib3JkZXJUb3BDb2xvcjogX2NvbG9yMi5kZWZhdWx0LFxuICAgIGJvcmRlclJpZ2h0Q29sb3I6IF9jb2xvcjIuZGVmYXVsdCxcbiAgICBib3JkZXJCb3R0b21Db2xvcjogX2NvbG9yMi5kZWZhdWx0LFxuICAgIGJvcmRlckxlZnRDb2xvcjogX2NvbG9yMi5kZWZhdWx0LFxuICAgIGJvcmRlclJhZGl1czogX3B4Mi5kZWZhdWx0LFxuXG4gICAgLy8gUG9zaXRpb25pbmdcbiAgICBtYXJnaW46IF9wb3NpdGlvbnMyLmRlZmF1bHQsXG4gICAgcGFkZGluZzogX3Bvc2l0aW9uczIuZGVmYXVsdCxcbiAgICB3aWR0aDogX3B4Mi5kZWZhdWx0LFxuICAgIGhlaWdodDogX3B4Mi5kZWZhdWx0LFxuXG4gICAgLy8gQXhlc1xuICAgIGJhY2tncm91bmRQb3NpdGlvbjogX2F4ZXMyLmRlZmF1bHQsXG4gICAgcGVyc3BlY3RpdmVPcmlnaW46IF9heGVzMi5kZWZhdWx0LFxuICAgIHRyYW5zZm9ybU9yaWdpbjogX2F4ZXMyLmRlZmF1bHQsXG5cbiAgICAvLyBTaGFkb3dzXG4gICAgdGV4dFNoYWRvdzogX3NoYWRvdzIuZGVmYXVsdCxcbiAgICBib3hTaGFkb3c6IF9zaGFkb3cyLmRlZmF1bHQsXG5cbiAgICAvLyBUcmFuc2Zvcm0gcHJvcGVydGllc1xuICAgIHJvdGF0ZTogX2FuZ2xlMi5kZWZhdWx0LFxuICAgIHJvdGF0ZVg6IF9hbmdsZTIuZGVmYXVsdCxcbiAgICByb3RhdGVZOiBfYW5nbGUyLmRlZmF1bHQsXG4gICAgcm90YXRlWjogX2FuZ2xlMi5kZWZhdWx0LFxuICAgIHNjYWxlOiBfc2NhbGUyLmRlZmF1bHQsXG4gICAgc2NhbGVYOiBfc2NhbGUyLmRlZmF1bHQsXG4gICAgc2NhbGVZOiBfc2NhbGUyLmRlZmF1bHQsXG4gICAgc2NhbGVaOiBfc2NhbGUyLmRlZmF1bHQsXG4gICAgc2tld1g6IF9hbmdsZTIuZGVmYXVsdCxcbiAgICBza2V3WTogX2FuZ2xlMi5kZWZhdWx0LFxuICAgIGRpc3RhbmNlOiBfcHgyLmRlZmF1bHQsXG4gICAgdHJhbnNsYXRlWDogX3B4Mi5kZWZhdWx0LFxuICAgIHRyYW5zbGF0ZVk6IF9weDIuZGVmYXVsdCxcbiAgICB0cmFuc2xhdGVaOiBfcHgyLmRlZmF1bHQsXG4gICAgcGVyc3BlY3RpdmU6IF9weDIuZGVmYXVsdCxcbiAgICBvcGFjaXR5OiBfYWxwaGEyLmRlZmF1bHRcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5OeVl5OWhaR0Z3ZEdWeUwyTnpjeTkyWVd4MVpTMTBlWEJsTFcxaGNDNXFjeUpkTENKdVlXMWxjeUk2VzEwc0ltMWhjSEJwYm1keklqb2lPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenRyUWtGVFpUczdRVUZGV0N3d1FrRkdWenRCUVVkWUxHOURRVWhYTzBGQlNWZ3NhVU5CU2xjN1FVRkxXQ3g1UWtGTVZ6dEJRVTFZTERKQ1FVNVhPenM3UVVGVFdDeG5RMEZVVnp0QlFWVllMRzFEUVZaWE8wRkJWMWdzY1VOQldGYzdRVUZaV0N4elEwRmFWenRCUVdGWUxHOURRV0pYTzBGQlkxZ3NPRUpCWkZjN096dEJRV2xDV0N3clFrRnFRbGM3UVVGclFsZ3NaME5CYkVKWE8wRkJiVUpZTEhWQ1FXNUNWenRCUVc5Q1dDeDNRa0Z3UWxjN096dEJRWFZDV0N4elEwRjJRbGM3UVVGM1FsZ3NjVU5CZUVKWE8wRkJlVUpZTEcxRFFYcENWenM3TzBGQk5FSllMR2REUVRWQ1Z6dEJRVFpDV0N3clFrRTNRbGM3T3p0QlFXZERXQ3d5UWtGb1ExYzdRVUZwUTFnc05FSkJha05YTzBGQmEwTllMRFJDUVd4RFZ6dEJRVzFEV0N3MFFrRnVRMWM3UVVGdlExZ3NNRUpCY0VOWE8wRkJjVU5ZTERKQ1FYSkRWenRCUVhORFdDd3lRa0YwUTFjN1FVRjFRMWdzTWtKQmRrTlhPMEZCZDBOWUxEQkNRWGhEVnp0QlFYbERXQ3d3UWtGNlExYzdRVUV3UTFnc01FSkJNVU5YTzBGQk1rTllMRFJDUVRORFZ6dEJRVFJEV0N3MFFrRTFRMWM3UVVFMlExZ3NORUpCTjBOWE8wRkJPRU5ZTERaQ1FUbERWenRCUVN0RFdDdzBRa0V2UTFjaUxDSm1hV3hsSWpvaWRtRnNkV1V0ZEhsd1pTMXRZWEF1YW5NaUxDSnpiM1Z5WTJWU2IyOTBJam9pTDFWelpYSnpMMDFoZEhRdlUybDBaWE12Y0c5d2JXOTBhVzl1SWl3aWMyOTFjbU5sYzBOdmJuUmxiblFpT2xzaWFXMXdiM0owSUdGdVoyeGxJR1p5YjIwZ0p5NHVMeTR1TDNaaGJIVmxMWFI1Y0dWekwyRnVaMnhsSnp0Y2JtbHRjRzl5ZENCaGJIQm9ZU0JtY205dElDY3VMaTh1TGk5MllXeDFaUzEwZVhCbGN5OWhiSEJvWVNjN1hHNXBiWEJ2Y25RZ1lYaGxjeUJtY205dElDY3VMaTh1TGk5MllXeDFaUzEwZVhCbGN5OWhlR1Z6Snp0Y2JtbHRjRzl5ZENCamIyeHZjaUJtY205dElDY3VMaTh1TGk5MllXeDFaUzEwZVhCbGN5OWpiMnh2Y2ljN1hHNXBiWEJ2Y25RZ2MyTmhiR1VnWm5KdmJTQW5MaTR2TGk0dmRtRnNkV1V0ZEhsd1pYTXZjMk5oYkdVbk8xeHVhVzF3YjNKMElITm9ZV1J2ZHlCbWNtOXRJQ2N1TGk4dUxpOTJZV3gxWlMxMGVYQmxjeTl6YUdGa2IzY25PMXh1YVcxd2IzSjBJSEJ2YzJsMGFXOXVjeUJtY205dElDY3VMaTh1TGk5MllXeDFaUzEwZVhCbGN5OXdiM05wZEdsdmJuTW5PMXh1YVcxd2IzSjBJSEI0SUdaeWIyMGdKeTR1THk0dUwzWmhiSFZsTFhSNWNHVnpMM0I0Snp0Y2JseHVaWGh3YjNKMElHUmxabUYxYkhRZ2UxeHVJQ0FnSUM4dklFTnZiRzl5SUhCeWIzQnpYRzRnSUNBZ1kyOXNiM0k2SUdOdmJHOXlMRnh1SUNBZ0lHSmhZMnRuY205MWJtUkRiMnh2Y2pvZ1kyOXNiM0lzWEc0Z0lDQWdiM1YwYkdsdVpVTnZiRzl5T2lCamIyeHZjaXhjYmlBZ0lDQm1hV3hzT2lCamIyeHZjaXhjYmlBZ0lDQnpkSEp2YTJVNklHTnZiRzl5TEZ4dVhHNGdJQ0FnTHk4Z1FtOXlaR1Z5SUhCeWIzQnpYRzRnSUNBZ1ltOXlaR1Z5UTI5c2IzSTZJR052Ykc5eUxGeHVJQ0FnSUdKdmNtUmxjbFJ2Y0VOdmJHOXlPaUJqYjJ4dmNpeGNiaUFnSUNCaWIzSmtaWEpTYVdkb2RFTnZiRzl5T2lCamIyeHZjaXhjYmlBZ0lDQmliM0prWlhKQ2IzUjBiMjFEYjJ4dmNqb2dZMjlzYjNJc1hHNGdJQ0FnWW05eVpHVnlUR1ZtZEVOdmJHOXlPaUJqYjJ4dmNpeGNiaUFnSUNCaWIzSmtaWEpTWVdScGRYTTZJSEI0TEZ4dVhHNGdJQ0FnTHk4Z1VHOXphWFJwYjI1cGJtZGNiaUFnSUNCdFlYSm5hVzQ2SUhCdmMybDBhVzl1Y3l4Y2JpQWdJQ0J3WVdSa2FXNW5PaUJ3YjNOcGRHbHZibk1zWEc0Z0lDQWdkMmxrZEdnNklIQjRMRnh1SUNBZ0lHaGxhV2RvZERvZ2NIZ3NYRzVjYmlBZ0lDQXZMeUJCZUdWelhHNGdJQ0FnWW1GamEyZHliM1Z1WkZCdmMybDBhVzl1T2lCaGVHVnpMRnh1SUNBZ0lIQmxjbk53WldOMGFYWmxUM0pwWjJsdU9pQmhlR1Z6TEZ4dUlDQWdJSFJ5WVc1elptOXliVTl5YVdkcGJqb2dZWGhsY3l4Y2JseHVJQ0FnSUM4dklGTm9ZV1J2ZDNOY2JpQWdJQ0IwWlhoMFUyaGhaRzkzT2lCemFHRmtiM2NzWEc0Z0lDQWdZbTk0VTJoaFpHOTNPaUJ6YUdGa2IzY3NJQ0FnWEc1Y2JpQWdJQ0F2THlCVWNtRnVjMlp2Y20wZ2NISnZjR1Z5ZEdsbGMxeHVJQ0FnSUhKdmRHRjBaVG9nWVc1bmJHVXNYRzRnSUNBZ2NtOTBZWFJsV0RvZ1lXNW5iR1VzWEc0Z0lDQWdjbTkwWVhSbFdUb2dZVzVuYkdVc1hHNGdJQ0FnY205MFlYUmxXam9nWVc1bmJHVXNYRzRnSUNBZ2MyTmhiR1U2SUhOallXeGxMRnh1SUNBZ0lITmpZV3hsV0RvZ2MyTmhiR1VzWEc0Z0lDQWdjMk5oYkdWWk9pQnpZMkZzWlN4Y2JpQWdJQ0J6WTJGc1pWbzZJSE5qWVd4bExGeHVJQ0FnSUhOclpYZFlPaUJoYm1kc1pTeGNiaUFnSUNCemEyVjNXVG9nWVc1bmJHVXNYRzRnSUNBZ1pHbHpkR0Z1WTJVNklIQjRMRnh1SUNBZ0lIUnlZVzV6YkdGMFpWZzZJSEI0TEZ4dUlDQWdJSFJ5WVc1emJHRjBaVms2SUhCNExGeHVJQ0FnSUhSeVlXNXpiR0YwWlZvNklIQjRMRnh1SUNBZ0lIQmxjbk53WldOMGFYWmxPaUJ3ZUN4Y2JpQWdJQ0J2Y0dGamFYUjVPaUJoYkhCb1lWeHVmVHNpWFgwPVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvYWRhcHRlci9jc3MvdmFsdWUtdHlwZS1tYXAuanNcbiAqKiBtb2R1bGUgaWQgPSA0MFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX3RyYW5zZm9ybVByb3BzID0gcmVxdWlyZSgnLi90cmFuc2Zvcm0tcHJvcHMnKTtcblxudmFyIF90cmFuc2Zvcm1Qcm9wczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF90cmFuc2Zvcm1Qcm9wcyk7XG5cbnZhciBfcHJlZml4ZXIgPSByZXF1aXJlKCcuL3ByZWZpeGVyJyk7XG5cbnZhciBfcHJlZml4ZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcHJlZml4ZXIpO1xuXG52YXIgX3V0aWxzID0gcmVxdWlyZSgnLi4vLi4vaW5jL3V0aWxzJyk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbnZhciBUUkFOU0xBVEVfWiA9ICd0cmFuc2xhdGVaJztcblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gKHN0YXRlLCBkaXNhYmxlSGFyZHdhcmVBY2NlbGVyYXRpb24pIHtcbiAgICB2YXIgcHJvcGVydHlTdHJpbmcgPSAnJztcbiAgICB2YXIgdHJhbnNmb3JtU3RyaW5nID0gJyc7XG4gICAgdmFyIHRyYW5zZm9ybUhhc1ogPSBmYWxzZTtcblxuICAgIGZvciAodmFyIGtleSBpbiBzdGF0ZSkge1xuICAgICAgICBpZiAoc3RhdGUuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgICAgdmFyIHZhbHVlID0gc3RhdGVba2V5XTtcblxuICAgICAgICAgICAgaWYgKF90cmFuc2Zvcm1Qcm9wczIuZGVmYXVsdFtrZXldKSB7XG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtU3RyaW5nICs9IGtleSArICcoJyArIHZhbHVlICsgJykgJztcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm1IYXNaID0ga2V5ID09PSBUUkFOU0xBVEVfWiA/IHRydWUgOiB0cmFuc2Zvcm1IYXNaO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBwcm9wZXJ0eVN0cmluZyArPSAnOycgKyAoMCwgX3ByZWZpeGVyMi5kZWZhdWx0KSgoMCwgX3V0aWxzLmNhbWVsVG9EYXNoKShrZXkpKSArICc6JyArIHZhbHVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHRyYW5zZm9ybVN0cmluZyAhPT0gJycpIHtcbiAgICAgICAgaWYgKCF0cmFuc2Zvcm1IYXNaICYmICFkaXNhYmxlSGFyZHdhcmVBY2NlbGVyYXRpb24pIHtcbiAgICAgICAgICAgIHRyYW5zZm9ybVN0cmluZyArPSBUUkFOU0xBVEVfWiArICcoMHB4KSc7XG4gICAgICAgIH1cblxuICAgICAgICBwcm9wZXJ0eVN0cmluZyArPSAnOycgKyAoMCwgX3ByZWZpeGVyMi5kZWZhdWx0KSgndHJhbnNmb3JtJykgKyAnOicgKyB0cmFuc2Zvcm1TdHJpbmc7XG4gICAgfVxuXG4gICAgcmV0dXJuIHByb3BlcnR5U3RyaW5nO1xufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbk55WXk5aFpHRndkR1Z5TDJOemN5OWlkV2xzWkM1cWN5SmRMQ0p1WVcxbGN5STZXMTBzSW0xaGNIQnBibWR6SWpvaU96czdPenM3T3pzN096czdPenM3TzBGQlNVRXNTVUZCVFN4alFVRmpMRmxCUVdRN08ydENRVVZUTEZWQlFVTXNTMEZCUkN4RlFVRlJMREpDUVVGU0xFVkJRWGRETzBGQlEyNUVMRkZCUVVrc2FVSkJRV2xDTEVWQlFXcENMRU5CUkN0RE8wRkJSVzVFTEZGQlFVa3NhMEpCUVd0Q0xFVkJRV3hDTEVOQlJpdERPMEZCUjI1RUxGRkJRVWtzWjBKQlFXZENMRXRCUVdoQ0xFTkJTQ3RET3p0QlFVdHVSQ3hUUVVGTExFbEJRVWtzUjBGQlNpeEpRVUZYTEV0QlFXaENMRVZCUVhWQ08wRkJRMjVDTEZsQlFVa3NUVUZCVFN4alFVRk9MRU5CUVhGQ0xFZEJRWEpDTEVOQlFVb3NSVUZCSzBJN1FVRkRNMElzWjBKQlFVMHNVVUZCVVN4TlFVRk5MRWRCUVU0c1EwRkJVaXhEUVVSeFFqczdRVUZITTBJc1owSkJRVWtzZVVKQlFXVXNSMEZCWml4RFFVRktMRVZCUVhsQ08wRkJRM0pDTEcxRFFVRnRRaXhOUVVGTkxFZEJRVTRzUjBGQldTeExRVUZhTEVkQlFXOUNMRWxCUVhCQ0xFTkJSRVU3UVVGRmNrSXNaME5CUVdkQ0xFZEJRVU1zUzBGQlVTeFhRVUZTTEVkQlFYVkNMRWxCUVhoQ0xFZEJRU3RDTEdGQlFTOUNMRU5CUmtzN1lVRkJla0lzVFVGSlR6dEJRVU5JTEd0RFFVRnJRaXhOUVVGTkxIZENRVUZUTEhkQ1FVRlpMRWRCUVZvc1EwRkJWQ3hEUVVGT0xFZEJRVzFETEVkQlFXNURMRWRCUVhsRExFdEJRWHBETEVOQlJHWTdZVUZLVUR0VFFVaEtPMHRCUkVvN08wRkJZMEVzVVVGQlNTeHZRa0ZCYjBJc1JVRkJjRUlzUlVGQmQwSTdRVUZEZUVJc1dVRkJTU3hEUVVGRExHRkJRVVFzU1VGQmEwSXNRMEZCUXl3eVFrRkJSQ3hGUVVFNFFqdEJRVU5vUkN3clFrRkJiVUlzWTBGQll5eFBRVUZrTEVOQlJEWkNPMU5CUVhCRU96dEJRVWxCTERCQ1FVRnJRaXhOUVVGTkxIZENRVUZUTEZkQlFWUXNRMEZCVGl4SFFVRTRRaXhIUVVFNVFpeEhRVUZ2UXl4bFFVRndReXhEUVV4Tk8wdEJRVFZDT3p0QlFWRkJMRmRCUVU4c1kwRkJVQ3hEUVROQ2JVUTdRMEZCZUVNaUxDSm1hV3hsSWpvaVluVnBiR1F1YW5NaUxDSnpiM1Z5WTJWU2IyOTBJam9pTDFWelpYSnpMMDFoZEhRdlUybDBaWE12Y0c5d2JXOTBhVzl1SWl3aWMyOTFjbU5sYzBOdmJuUmxiblFpT2xzaWFXMXdiM0owSUhSeVlXNXpabTl5YlZCeWIzQnpJR1p5YjIwZ0p5NHZkSEpoYm5ObWIzSnRMWEJ5YjNCekp6dGNibWx0Y0c5eWRDQndjbVZtYVhobGNpQm1jbTl0SUNjdUwzQnlaV1pwZUdWeUp6dGNibWx0Y0c5eWRDQjdJR05oYldWc1ZHOUVZWE5vSUgwZ1puSnZiU0FuTGk0dkxpNHZhVzVqTDNWMGFXeHpKenRjYmx4dVkyOXVjM1FnVkZKQlRsTk1RVlJGWDFvZ1BTQW5kSEpoYm5Oc1lYUmxXaWM3WEc1Y2JtVjRjRzl5ZENCa1pXWmhkV3gwSUNoemRHRjBaU3dnWkdsellXSnNaVWhoY21SM1lYSmxRV05qWld4bGNtRjBhVzl1S1NBOVBpQjdYRzRnSUNBZ2JHVjBJSEJ5YjNCbGNuUjVVM1J5YVc1bklEMGdKeWM3WEc0Z0lDQWdiR1YwSUhSeVlXNXpabTl5YlZOMGNtbHVaeUE5SUNjbk8xeHVJQ0FnSUd4bGRDQjBjbUZ1YzJadmNtMUlZWE5hSUQwZ1ptRnNjMlU3WEc1Y2JpQWdJQ0JtYjNJZ0tHeGxkQ0JyWlhrZ2FXNGdjM1JoZEdVcElIdGNiaUFnSUNBZ0lDQWdhV1lnS0hOMFlYUmxMbWhoYzA5M2JsQnliM0JsY25SNUtHdGxlU2twSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJR052Ym5OMElIWmhiSFZsSUQwZ2MzUmhkR1ZiYTJWNVhUdGNibHh1SUNBZ0lDQWdJQ0FnSUNBZ2FXWWdLSFJ5WVc1elptOXliVkJ5YjNCelcydGxlVjBwSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCMGNtRnVjMlp2Y20xVGRISnBibWNnS3owZ2EyVjVJQ3NnSnlnbklDc2dkbUZzZFdVZ0t5QW5LU0FuTzF4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUhSeVlXNXpabTl5YlVoaGMxb2dQU0FvYTJWNUlEMDlQU0JVVWtGT1UweEJWRVZmV2lrZ1B5QjBjblZsSURvZ2RISmhibk5tYjNKdFNHRnpXanRjYmx4dUlDQWdJQ0FnSUNBZ0lDQWdmU0JsYkhObElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQndjbTl3WlhKMGVWTjBjbWx1WnlBclBTQW5PeWNnS3lCd2NtVm1hWGhsY2loallXMWxiRlJ2UkdGemFDaHJaWGtwS1NBcklDYzZKeUFySUhaaGJIVmxPMXh1SUNBZ0lDQWdJQ0FnSUNBZ2ZWeHVJQ0FnSUNBZ0lDQjlYRzRnSUNBZ2ZWeHVYRzRnSUNBZ2FXWWdLSFJ5WVc1elptOXliVk4wY21sdVp5QWhQVDBnSnljcElIdGNiaUFnSUNBZ0lDQWdhV1lnS0NGMGNtRnVjMlp2Y20xSVlYTmFJQ1ltSUNGa2FYTmhZbXhsU0dGeVpIZGhjbVZCWTJObGJHVnlZWFJwYjI0cElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUhSeVlXNXpabTl5YlZOMGNtbHVaeUFyUFNCVVVrRk9VMHhCVkVWZldpQXJJQ2NvTUhCNEtTYzdYRzRnSUNBZ0lDQWdJSDFjYmx4dUlDQWdJQ0FnSUNCd2NtOXdaWEowZVZOMGNtbHVaeUFyUFNBbk95Y2dLeUJ3Y21WbWFYaGxjaWduZEhKaGJuTm1iM0p0SnlrZ0t5QW5PaWNnS3lCMGNtRnVjMlp2Y20xVGRISnBibWM3WEc0Z0lDQWdmVnh1WEc0Z0lDQWdjbVYwZFhKdUlIQnliM0JsY25SNVUzUnlhVzVuTzF4dWZUc2lYWDA9XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9hZGFwdGVyL2Nzcy9idWlsZC5qc1xuICoqIG1vZHVsZSBpZCA9IDQxXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG52YXIgY2FjaGUgPSB7fTtcbnZhciBwcmVmaXhlcyA9IFsnV2Via2l0JywgJ01veicsICdPJywgJ21zJywgJyddO1xudmFyIG51bVByZWZpeGVzID0gcHJlZml4ZXMubGVuZ3RoO1xudmFyIHRlc3RFbGVtZW50ID0gdW5kZWZpbmVkO1xuXG4vKlxuICAgIFRlc3Qgc3R5bGUgcHJvcGVydHkgZm9yIHByZWZpeGVkIHZlcnNpb25cbiAgICBcbiAgICBAcGFyYW0gW3N0cmluZ106IFN0eWxlIHByb3BlcnR5XG4gICAgQHJldHVybiBbc3RyaW5nXTogQ2FjaGVkIHByb3BlcnR5IG5hbWVcbiovXG52YXIgdGVzdFByZWZpeCA9IGZ1bmN0aW9uIChrZXkpIHtcbiAgICB0ZXN0RWxlbWVudCA9IHRlc3RFbGVtZW50IHx8IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgaWYgKGNhY2hlW2tleV0gPT09IGZhbHNlKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBjYWNoZVtrZXldID0gZmFsc2U7XG4gICAgfVxuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBudW1QcmVmaXhlczsgaSsrKSB7XG4gICAgICAgIHZhciBwcmVmaXggPSBwcmVmaXhlc1tpXSxcbiAgICAgICAgICAgIHByZWZpeGVkID0gcHJlZml4ID09PSAnJyA/IGtleSA6IHByZWZpeCArIGtleS5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIGtleS5zbGljZSgxKTtcblxuICAgICAgICBpZiAocHJlZml4ZWQgaW4gdGVzdEVsZW1lbnQuc3R5bGUpIHtcbiAgICAgICAgICAgIGNhY2hlW2tleV0gPSBwcmVmaXhlZDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBjYWNoZVtrZXldO1xufTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gKGtleSkge1xuICAgIHJldHVybiBjYWNoZVtrZXldIHx8IHRlc3RQcmVmaXgoa2V5KTtcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5OeVl5OWhaR0Z3ZEdWeUwyTnpjeTl3Y21WbWFYaGxjaTVxY3lKZExDSnVZVzFsY3lJNlcxMHNJbTFoY0hCcGJtZHpJam9pT3pzN1FVRkJRU3hKUVVGTkxGRkJRVkVzUlVGQlVqdEJRVU5PTEVsQlFVMHNWMEZCVnl4RFFVRkRMRkZCUVVRc1JVRkJWU3hMUVVGV0xFVkJRV2RDTEVkQlFXaENMRVZCUVc5Q0xFbEJRWEJDTEVWQlFUQkNMRVZCUVRGQ0xFTkJRVmc3UVVGRFRpeEpRVUZOTEdOQlFXTXNVMEZCVXl4TlFVRlVPMEZCUTNCQ0xFbEJRVWtzZFVKQlFVbzdPenM3T3pzN08wRkJVVUVzU1VGQlRTeGhRVUZoTEZWQlFVTXNSMEZCUkN4RlFVRlRPMEZCUTNoQ0xHdENRVUZqTEdWQlFXVXNVMEZCVXl4aFFVRlVMRU5CUVhWQ0xFdEJRWFpDTEVOQlFXWXNRMEZFVlRzN1FVRkhlRUlzVVVGQlNTeE5RVUZOTEVkQlFVNHNUVUZCWlN4TFFVRm1MRVZCUVhOQ08wRkJRM1JDTEdWQlFVOHNTMEZCVUN4RFFVUnpRanRMUVVFeFFpeE5RVVZQTzBGQlEwZ3NZMEZCVFN4SFFVRk9MRWxCUVdFc1MwRkJZaXhEUVVSSE8wdEJSbEE3TzBGQlRVRXNVMEZCU3l4SlFVRkpMRWxCUVVrc1EwRkJTaXhGUVVGUExFbEJRVWtzVjBGQlNpeEZRVUZwUWl4SFFVRnFReXhGUVVGelF6dEJRVU5zUXl4WlFVRkpMRk5CUVZNc1UwRkJVeXhEUVVGVUxFTkJRVlE3V1VGRFFTeFhRVUZYTEUxQlFVTXNTMEZCVnl4RlFVRllMRWRCUVdsQ0xFZEJRV3hDTEVkQlFYZENMRk5CUVZNc1NVRkJTU3hOUVVGS0xFTkJRVmNzUTBGQldDeEZRVUZqTEZkQlFXUXNSVUZCVkN4SFFVRjFReXhKUVVGSkxFdEJRVW9zUTBGQlZTeERRVUZXTEVOQlFYWkRMRU5CUmt3N08wRkJTV3hETEZsQlFVa3NXVUZCV1N4WlFVRlpMRXRCUVZvc1JVRkJiVUk3UVVGREwwSXNhMEpCUVUwc1IwRkJUaXhKUVVGaExGRkJRV0lzUTBGRUswSTdVMEZCYmtNN1MwRktTanM3UVVGVFFTeFhRVUZQTEUxQlFVMHNSMEZCVGl4RFFVRlFMRU5CYkVKM1FqdERRVUZVT3p0clFrRnhRa29zVlVGQlF5eEhRVUZFTzFkQlFWTXNUVUZCVFN4SFFVRk9MRXRCUVdNc1YwRkJWeXhIUVVGWUxFTkJRV1E3UTBGQlZDSXNJbVpwYkdVaU9pSndjbVZtYVhobGNpNXFjeUlzSW5OdmRYSmpaVkp2YjNRaU9pSXZWWE5sY25NdlRXRjBkQzlUYVhSbGN5OXdiM0J0YjNScGIyNGlMQ0p6YjNWeVkyVnpRMjl1ZEdWdWRDSTZXeUpqYjI1emRDQmpZV05vWlNBOUlIdDlPMXh1WTI5dWMzUWdjSEpsWm1sNFpYTWdQU0JiSjFkbFltdHBkQ2NzSjAxdmVpY3NKMDhuTENkdGN5Y3NJQ2NuWFR0Y2JtTnZibk4wSUc1MWJWQnlaV1pwZUdWeklEMGdjSEpsWm1sNFpYTXViR1Z1WjNSb08xeHViR1YwSUhSbGMzUkZiR1Z0Wlc1ME8xeHVYRzR2S2x4dUlDQWdJRlJsYzNRZ2MzUjViR1VnY0hKdmNHVnlkSGtnWm05eUlIQnlaV1pwZUdWa0lIWmxjbk5wYjI1Y2JpQWdJQ0JjYmlBZ0lDQkFjR0Z5WVcwZ1czTjBjbWx1WjEwNklGTjBlV3hsSUhCeWIzQmxjblI1WEc0Z0lDQWdRSEpsZEhWeWJpQmJjM1J5YVc1blhUb2dRMkZqYUdWa0lIQnliM0JsY25SNUlHNWhiV1ZjYmlvdlhHNWpiMjV6ZENCMFpYTjBVSEpsWm1sNElEMGdLR3RsZVNrZ1BUNGdlMXh1SUNBZ0lIUmxjM1JGYkdWdFpXNTBJRDBnZEdWemRFVnNaVzFsYm5RZ2ZId2daRzlqZFcxbGJuUXVZM0psWVhSbFJXeGxiV1Z1ZENnblpHbDJKeWs3WEc1Y2JpQWdJQ0JwWmlBb1kyRmphR1ZiYTJWNVhTQTlQVDBnWm1Gc2MyVXBJSHRjYmlBZ0lDQWdJQ0FnY21WMGRYSnVJR1poYkhObE8xeHVJQ0FnSUgwZ1pXeHpaU0I3WEc0Z0lDQWdJQ0FnSUdOaFkyaGxXMnRsZVYwZ1BTQm1ZV3h6WlR0Y2JpQWdJQ0I5WEc1Y2JpQWdJQ0JtYjNJZ0tIWmhjaUJwSUQwZ01Ec2dhU0E4SUc1MWJWQnlaV1pwZUdWek95QnBLeXNwSUh0Y2JpQWdJQ0FnSUNBZ2RtRnlJSEJ5WldacGVDQTlJSEJ5WldacGVHVnpXMmxkTEZ4dUlDQWdJQ0FnSUNBZ0lDQWdjSEpsWm1sNFpXUWdQU0FvY0hKbFptbDRJRDA5UFNBbkp5a2dQeUJyWlhrZ09pQndjbVZtYVhnZ0t5QnJaWGt1WTJoaGNrRjBLREFwTG5SdlZYQndaWEpEWVhObEtDa2dLeUJyWlhrdWMyeHBZMlVvTVNrN1hHNWNiaUFnSUNBZ0lDQWdhV1lnS0hCeVpXWnBlR1ZrSUdsdUlIUmxjM1JGYkdWdFpXNTBMbk4wZVd4bEtTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNCallXTm9aVnRyWlhsZElEMGdjSEpsWm1sNFpXUTdYRzRnSUNBZ0lDQWdJSDFjYmlBZ0lDQjlYRzRnSUNBZ1hHNGdJQ0FnY21WMGRYSnVJR05oWTJobFcydGxlVjA3WEc1OU8xeHVYRzVsZUhCdmNuUWdaR1ZtWVhWc2RDQW9hMlY1S1NBOVBpQmpZV05vWlZ0clpYbGRJSHg4SUhSbGMzUlFjbVZtYVhnb2EyVjVLVHNpWFgwPVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvYWRhcHRlci9jc3MvcHJlZml4ZXIuanNcbiAqKiBtb2R1bGUgaWQgPSA0MlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xudmFyIHJnYiA9IGV4cG9ydHMucmdiID0ge1xuICAgIG1pbjogMCxcbiAgICBtYXg6IDI1NSxcbiAgICByb3VuZDogdHJ1ZVxufTtcblxudmFyIG9wYWNpdHkgPSBleHBvcnRzLm9wYWNpdHkgPSB7XG4gICAgbWluOiAwLFxuICAgIG1heDogMVxufTtcblxudmFyIHBlcmNlbnQgPSBleHBvcnRzLnBlcmNlbnQgPSB7XG4gICAgbWluOiAwLFxuICAgIG1heDogMTAwLFxuICAgIHVuaXQ6ICclJ1xufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbk55WXk5MllXeDFaUzEwZVhCbGN5OXpaWFIwYVc1bmN5OWtaV1poZFd4MExYQnliM0J6TG1weklsMHNJbTVoYldWeklqcGJYU3dpYldGd2NHbHVaM01pT2lJN096dEJRVUZQTEVsQlFVMHNiMEpCUVUwN1FVRkRaaXhUUVVGTExFTkJRVXc3UVVGRFFTeFRRVUZMTEVkQlFVdzdRVUZEUVN4WFFVRlBMRWxCUVZBN1EwRklVenM3UVVGTlRpeEpRVUZOTERSQ1FVRlZPMEZCUTI1Q0xGTkJRVXNzUTBGQlREdEJRVU5CTEZOQlFVc3NRMEZCVER0RFFVWlRPenRCUVV0T0xFbEJRVTBzTkVKQlFWVTdRVUZEYmtJc1UwRkJTeXhEUVVGTU8wRkJRMEVzVTBGQlN5eEhRVUZNTzBGQlEwRXNWVUZCVFN4SFFVRk9PME5CU0ZNaUxDSm1hV3hsSWpvaVpHVm1ZWFZzZEMxd2NtOXdjeTVxY3lJc0luTnZkWEpqWlZKdmIzUWlPaUl2VlhObGNuTXZUV0YwZEM5VGFYUmxjeTl3YjNCdGIzUnBiMjRpTENKemIzVnlZMlZ6UTI5dWRHVnVkQ0k2V3lKbGVIQnZjblFnWTI5dWMzUWdjbWRpSUQwZ2UxeHVJQ0FnSUcxcGJqb2dNQ3hjYmlBZ0lDQnRZWGc2SURJMU5TeGNiaUFnSUNCeWIzVnVaRG9nZEhKMVpWeHVmVHRjYmx4dVpYaHdiM0owSUdOdmJuTjBJRzl3WVdOcGRIa2dQU0I3WEc0Z0lDQWdiV2x1T2lBd0xGeHVJQ0FnSUcxaGVEb2dNVnh1ZlR0Y2JseHVaWGh3YjNKMElHTnZibk4wSUhCbGNtTmxiblFnUFNCN1hHNGdJQ0FnYldsdU9pQXdMRnh1SUNBZ0lHMWhlRG9nTVRBd0xGeHVJQ0FnSUhWdWFYUTZJQ2NsSjF4dWZUc2lYWDA9XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy92YWx1ZS10eXBlcy9zZXR0aW5ncy9kZWZhdWx0LXByb3BzLmpzXG4gKiogbW9kdWxlIGlkID0gNDNcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbnZhciBYID0gJ1gnO1xudmFyIFkgPSAnWSc7XG52YXIgQUxQSEEgPSAnQWxwaGEnO1xuXG52YXIgYXhlcyA9IGV4cG9ydHMuYXhlcyA9IFtYLCBZLCAnWiddO1xudmFyIHJnYiA9IGV4cG9ydHMucmdiID0gWydSZWQnLCAnR3JlZW4nLCAnQmx1ZScsIEFMUEhBXTtcbnZhciBoc2wgPSBleHBvcnRzLmhzbCA9IFsnSHVlJywgJ1NhdHVyYXRpb24nLCAnTGlnaHRuZXNzJywgQUxQSEFdO1xudmFyIHBvc2l0aW9ucyA9IGV4cG9ydHMucG9zaXRpb25zID0gWydUb3AnLCAnUmlnaHQnLCAnQm90dG9tJywgJ0xlZnQnXTtcbnZhciBzaGFkb3cgPSBleHBvcnRzLnNoYWRvdyA9IFtYLCBZLCAnUmFkaXVzJywgJ1NwcmVhZCcsICdDb2xvciddO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluTnlZeTkyWVd4MVpTMTBlWEJsY3k5elpYUjBhVzVuY3k5a2FXTjBhVzl1WVhKNUxtcHpJbDBzSW01aGJXVnpJanBiWFN3aWJXRndjR2x1WjNNaU9pSTdPenRCUVVGQkxFbEJRVTBzU1VGQlNTeEhRVUZLTzBGQlEwNHNTVUZCVFN4SlFVRkpMRWRCUVVvN1FVRkRUaXhKUVVGTkxGRkJRVkVzVDBGQlVqczdRVUZGUXl4SlFVRk5MSE5DUVVGUExFTkJRVU1zUTBGQlJDeEZRVUZKTEVOQlFVb3NSVUZCVHl4SFFVRlFMRU5CUVZBN1FVRkRUaXhKUVVGTkxHOUNRVUZOTEVOQlFVTXNTMEZCUkN4RlFVRlJMRTlCUVZJc1JVRkJhVUlzVFVGQmFrSXNSVUZCZVVJc1MwRkJla0lzUTBGQlRqdEJRVU5PTEVsQlFVMHNiMEpCUVUwc1EwRkJReXhMUVVGRUxFVkJRVkVzV1VGQlVpeEZRVUZ6UWl4WFFVRjBRaXhGUVVGdFF5eExRVUZ1UXl4RFFVRk9PMEZCUTA0c1NVRkJUU3huUTBGQldTeERRVUZETEV0QlFVUXNSVUZCVVN4UFFVRlNMRVZCUVdsQ0xGRkJRV3BDTEVWQlFUSkNMRTFCUVROQ0xFTkJRVm83UVVGRFRpeEpRVUZOTERCQ1FVRlRMRU5CUVVNc1EwRkJSQ3hGUVVGSkxFTkJRVW9zUlVGQlR5eFJRVUZRTEVWQlFXbENMRkZCUVdwQ0xFVkJRVEpDTEU5QlFUTkNMRU5CUVZRaUxDSm1hV3hsSWpvaVpHbGpkR2x2Ym1GeWVTNXFjeUlzSW5OdmRYSmpaVkp2YjNRaU9pSXZWWE5sY25NdlRXRjBkQzlUYVhSbGN5OXdiM0J0YjNScGIyNGlMQ0p6YjNWeVkyVnpRMjl1ZEdWdWRDSTZXeUpqYjI1emRDQllJRDBnSjFnbk8xeHVZMjl1YzNRZ1dTQTlJQ2RaSnp0Y2JtTnZibk4wSUVGTVVFaEJJRDBnSjBGc2NHaGhKenRjYmx4dVpYaHdiM0owSUdOdmJuTjBJR0Y0WlhNZ1BTQmJXQ3dnV1N3Z0oxb25YVHRjYm1WNGNHOXlkQ0JqYjI1emRDQnlaMklnUFNCYkoxSmxaQ2NzSUNkSGNtVmxiaWNzSUNkQ2JIVmxKeXdnUVV4UVNFRmRPMXh1Wlhod2IzSjBJR052Ym5OMElHaHpiQ0E5SUZzblNIVmxKeXdnSjFOaGRIVnlZWFJwYjI0bkxDQW5UR2xuYUhSdVpYTnpKeXdnUVV4UVNFRmRPMXh1Wlhod2IzSjBJR052Ym5OMElIQnZjMmwwYVc5dWN5QTlJRnNuVkc5d0p5d2dKMUpwWjJoMEp5d2dKMEp2ZEhSdmJTY3NJQ2RNWldaMEoxMDdYRzVsZUhCdmNuUWdZMjl1YzNRZ2MyaGhaRzkzSUQwZ1cxZ3NJRmtzSUNkU1lXUnBkWE1uTENBblUzQnlaV0ZrSnl3Z0owTnZiRzl5SjEwN0lsMTlcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL3ZhbHVlLXR5cGVzL3NldHRpbmdzL2RpY3Rpb25hcnkuanNcbiAqKiBtb2R1bGUgaWQgPSA0NFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzLmRlZmF1bHQgPSBjcmVhdGVFYXNpbmdGdW5jdGlvbjtcbi8qXG4gICAgTWlycm9yIGVhc2luZ1xuICAgIFxuICAgIE1pcnJvcnMgdGhlIHByb3ZpZGVkIGVhc2luZyBmdW5jdGlvbiwgdXNlZCBoZXJlIGZvciBtaXJyb3JpbmcgYW5cbiAgICBlYXNlSW4gaW50byBhbiBlYXNlSW5PdXRcbiAgICBcbiAgICBAcGFyYW0gW251bWJlcl06IFByb2dyZXNzLCBmcm9tIDAgLSAxLCBvZiBjdXJyZW50IHNoaWZ0XG4gICAgQHBhcmFtIFtmdW5jdGlvbl06IFRoZSBlYXNpbmcgZnVuY3Rpb24gdG8gbWlycm9yXG4gICAgQHJldHVybnMgW251bWJlcl06IFRoZSBlYXNpbmctYWRqdXN0ZWQgZGVsdGFcbiovXG52YXIgbWlycm9yRWFzaW5nID0gZnVuY3Rpb24gKG1ldGhvZCkge1xuICAgIHJldHVybiBmdW5jdGlvbiAocHJvZ3Jlc3MsIHN0cmVuZ3RoKSB7XG4gICAgICAgIHJldHVybiBwcm9ncmVzcyA8PSAwLjUgPyBtZXRob2QoMiAqIHByb2dyZXNzLCBzdHJlbmd0aCkgLyAyIDogKDIgLSBtZXRob2QoMiAqICgxIC0gcHJvZ3Jlc3MpLCBzdHJlbmd0aCkpIC8gMjtcbiAgICB9O1xufTtcblxuLypcbiAgICBSZXZlcnNlIGVhc2luZ1xuICAgIFxuICAgIFJldmVyc2VzIHRoZSBvdXRwdXQgb2YgdGhlIHByb3ZpZGVkIGVhc2luZyBmdW5jdGlvbiwgdXNlZCBmb3IgZmxpcHBpbmcgZWFzZUluXG4gICAgY3VydmUgdG8gYW4gZWFzZU91dC5cbiAgICBcbiAgICBAcGFyYW0gW251bWJlcl06IFByb2dyZXNzLCBmcm9tIDAgLSAxLCBvZiBjdXJyZW50IHNoaWZ0XG4gICAgQHBhcmFtIFtmdW5jdGlvbl06IFRoZSBlYXNpbmcgZnVuY3Rpb24gdG8gcmV2ZXJzZVxuICAgIEByZXR1cm5zIFtudW1iZXJdOiBUaGUgZWFzaW5nLWFkanVzdGVkIGRlbHRhXG4qL1xudmFyIHJldmVyc2VFYXNpbmcgPSBmdW5jdGlvbiAobWV0aG9kKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChwcm9ncmVzcywgc3RyZW5ndGgpIHtcbiAgICAgICAgcmV0dXJuIDEgLSBtZXRob2QoMSAtIHByb2dyZXNzLCBzdHJlbmd0aCk7XG4gICAgfTtcbn07XG5cbi8qXG4gICAgRWFzaW5nIGNsYXNzXG5cbiAgICBJZiBwcm92aWRlZCBlYXNpbmcgZnVuY3Rpb24sIHJldHVybnMgZWFzaW5nIGZ1bmN0aW9uIHdpdGggXG4gICAgaW4vb3V0L2luT3V0IHZhcmlhdGlvbnNcblxuICAgIElmIHByb3ZpZGVkIGZvdXIgYXJndW1lbnRzLCByZXR1cm5zIG5ldyBCZXppZXIgY2xhc3MgaW5zdGVhZC5cbiovXG5mdW5jdGlvbiBjcmVhdGVFYXNpbmdGdW5jdGlvbihtZXRob2QpIHtcbiAgICB2YXIgZWFzaW5nRnVuY3Rpb24gPSBmdW5jdGlvbiAocHJvZ3Jlc3MsIHN0cmVuZ3RoKSB7XG4gICAgICAgIHJldHVybiBtZXRob2QocHJvZ3Jlc3MsIHN0cmVuZ3RoKTtcbiAgICB9O1xuXG4gICAgZWFzaW5nRnVuY3Rpb24uaW4gPSBmdW5jdGlvbiAocHJvZ3Jlc3MsIHN0cmVuZ3RoKSB7XG4gICAgICAgIHJldHVybiBtZXRob2QocHJvZ3Jlc3MsIHN0cmVuZ3RoKTtcbiAgICB9O1xuICAgIGVhc2luZ0Z1bmN0aW9uLm91dCA9IHJldmVyc2VFYXNpbmcobWV0aG9kKTtcbiAgICBlYXNpbmdGdW5jdGlvbi5pbk91dCA9IG1pcnJvckVhc2luZyhtZXRob2QpO1xuXG4gICAgcmV0dXJuIGVhc2luZ0Z1bmN0aW9uO1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluTnlZeTloWTNScGIyNXpMMlZoYzJsdVp5OWpjbVZoZEdVdFpXRnphVzVuTG1weklsMHNJbTVoYldWeklqcGJYU3dpYldGd2NHbHVaM01pT2lJN096dHJRa0ZuUTNkQ096czdPenM3T3pzN096dEJRWFJDZUVJc1NVRkJUU3hsUVVGbExGVkJRVU1zVFVGQlJEdFhRVUZaTEZWQlFVTXNVVUZCUkN4RlFVRlhMRkZCUVZnN1pVRkJkMElzVVVGQlF5eEpRVUZaTEVkQlFWb3NSMEZCYlVJc1QwRkJUeXhKUVVGSkxGRkJRVW9zUlVGQll5eFJRVUZ5UWl4SlFVRnBReXhEUVVGcVF5eEhRVUZ4UXl4RFFVRkRMRWxCUVVrc1QwRkJUeXhMUVVGTExFbEJRVWtzVVVGQlNpeERRVUZNTEVWQlFXOUNMRkZCUVROQ0xFTkJRVW9zUTBGQlJDeEhRVUUyUXl4RFFVRTNRenRMUVVGcVJqdERRVUZhT3pzN096czdPenM3T3pzN1FVRlpja0lzU1VGQlRTeG5Ra0ZCWjBJc1ZVRkJReXhOUVVGRU8xZEJRVmtzVlVGQlF5eFJRVUZFTEVWQlFWY3NVVUZCV0R0bFFVRjNRaXhKUVVGSkxFOUJRVThzU1VGQlNTeFJRVUZLTEVWQlFXTXNVVUZCY2tJc1EwRkJTanRMUVVGNFFqdERRVUZhT3pzN096czdPenM3TzBGQlZWQXNVMEZCVXl4dlFrRkJWQ3hEUVVFNFFpeE5RVUU1UWl4RlFVRnpRenRCUVVOcVJDeFJRVUZKTEdsQ1FVRnBRaXhWUVVGRExGRkJRVVFzUlVGQlZ5eFJRVUZZTzJWQlFYZENMRTlCUVU4c1VVRkJVQ3hGUVVGcFFpeFJRVUZxUWp0TFFVRjRRaXhEUVVRMFFqczdRVUZIYWtRc2JVSkJRV1VzUlVGQlppeEhRVUZ2UWl4VlFVRkRMRkZCUVVRc1JVRkJWeXhSUVVGWU8yVkJRWGRDTEU5QlFVOHNVVUZCVUN4RlFVRnBRaXhSUVVGcVFqdExRVUY0UWl4RFFVZzJRanRCUVVscVJDeHRRa0ZCWlN4SFFVRm1MRWRCUVhGQ0xHTkJRV01zVFVGQlpDeERRVUZ5UWl4RFFVcHBSRHRCUVV0cVJDeHRRa0ZCWlN4TFFVRm1MRWRCUVhWQ0xHRkJRV0VzVFVGQllpeERRVUYyUWl4RFFVeHBSRHM3UVVGUGFrUXNWMEZCVHl4alFVRlFMRU5CVUdsRU8wTkJRWFJESWl3aVptbHNaU0k2SW1OeVpXRjBaUzFsWVhOcGJtY3Vhbk1pTENKemIzVnlZMlZTYjI5MElqb2lMMVZ6WlhKekwwMWhkSFF2VTJsMFpYTXZjRzl3Ylc5MGFXOXVJaXdpYzI5MWNtTmxjME52Ym5SbGJuUWlPbHNpTHlwY2JpQWdJQ0JOYVhKeWIzSWdaV0Z6YVc1blhHNGdJQ0FnWEc0Z0lDQWdUV2x5Y205eWN5QjBhR1VnY0hKdmRtbGtaV1FnWldGemFXNW5JR1oxYm1OMGFXOXVMQ0IxYzJWa0lHaGxjbVVnWm05eUlHMXBjbkp2Y21sdVp5QmhibHh1SUNBZ0lHVmhjMlZKYmlCcGJuUnZJR0Z1SUdWaGMyVkpiazkxZEZ4dUlDQWdJRnh1SUNBZ0lFQndZWEpoYlNCYmJuVnRZbVZ5WFRvZ1VISnZaM0psYzNNc0lHWnliMjBnTUNBdElERXNJRzltSUdOMWNuSmxiblFnYzJocFpuUmNiaUFnSUNCQWNHRnlZVzBnVzJaMWJtTjBhVzl1WFRvZ1ZHaGxJR1ZoYzJsdVp5Qm1kVzVqZEdsdmJpQjBieUJ0YVhKeWIzSmNiaUFnSUNCQWNtVjBkWEp1Y3lCYmJuVnRZbVZ5WFRvZ1ZHaGxJR1ZoYzJsdVp5MWhaR3AxYzNSbFpDQmtaV3gwWVZ4dUtpOWNibU52Ym5OMElHMXBjbkp2Y2tWaGMybHVaeUE5SUNodFpYUm9iMlFwSUQwK0lDaHdjbTluY21WemN5d2djM1J5Wlc1bmRHZ3BJRDArSUNod2NtOW5jbVZ6Y3lBOFBTQXdMalVwSUQ4Z2JXVjBhRzlrS0RJZ0tpQndjbTluY21WemN5d2djM1J5Wlc1bmRHZ3BJQzhnTWlBNklDZ3lJQzBnYldWMGFHOWtLRElnS2lBb01TQXRJSEJ5YjJkeVpYTnpLU3dnYzNSeVpXNW5kR2dwS1NBdklESTdYRzRnSUNBZ0lDQWdJRnh1THlwY2JpQWdJQ0JTWlhabGNuTmxJR1ZoYzJsdVoxeHVJQ0FnSUZ4dUlDQWdJRkpsZG1WeWMyVnpJSFJvWlNCdmRYUndkWFFnYjJZZ2RHaGxJSEJ5YjNacFpHVmtJR1ZoYzJsdVp5Qm1kVzVqZEdsdmJpd2dkWE5sWkNCbWIzSWdabXhwY0hCcGJtY2daV0Z6WlVsdVhHNGdJQ0FnWTNWeWRtVWdkRzhnWVc0Z1pXRnpaVTkxZEM1Y2JpQWdJQ0JjYmlBZ0lDQkFjR0Z5WVcwZ1cyNTFiV0psY2wwNklGQnliMmR5WlhOekxDQm1jbTl0SURBZ0xTQXhMQ0J2WmlCamRYSnlaVzUwSUhOb2FXWjBYRzRnSUNBZ1FIQmhjbUZ0SUZ0bWRXNWpkR2x2YmwwNklGUm9aU0JsWVhOcGJtY2dablZ1WTNScGIyNGdkRzhnY21WMlpYSnpaVnh1SUNBZ0lFQnlaWFIxY201eklGdHVkVzFpWlhKZE9pQlVhR1VnWldGemFXNW5MV0ZrYW5WemRHVmtJR1JsYkhSaFhHNHFMMXh1WTI5dWMzUWdjbVYyWlhKelpVVmhjMmx1WnlBOUlDaHRaWFJvYjJRcElEMCtJQ2h3Y205bmNtVnpjeXdnYzNSeVpXNW5kR2dwSUQwK0lERWdMU0J0WlhSb2IyUW9NU0F0SUhCeWIyZHlaWE56TENCemRISmxibWQwYUNrN1hHNWNiaThxWEc0Z0lDQWdSV0Z6YVc1bklHTnNZWE56WEc1Y2JpQWdJQ0JKWmlCd2NtOTJhV1JsWkNCbFlYTnBibWNnWm5WdVkzUnBiMjRzSUhKbGRIVnlibk1nWldGemFXNW5JR1oxYm1OMGFXOXVJSGRwZEdnZ1hHNGdJQ0FnYVc0dmIzVjBMMmx1VDNWMElIWmhjbWxoZEdsdmJuTmNibHh1SUNBZ0lFbG1JSEJ5YjNacFpHVmtJR1p2ZFhJZ1lYSm5kVzFsYm5SekxDQnlaWFIxY201eklHNWxkeUJDWlhwcFpYSWdZMnhoYzNNZ2FXNXpkR1ZoWkM1Y2Jpb3ZYRzVsZUhCdmNuUWdaR1ZtWVhWc2RDQm1kVzVqZEdsdmJpQmpjbVZoZEdWRllYTnBibWRHZFc1amRHbHZiaWh0WlhSb2IyUXBJSHRjYmlBZ0lDQnNaWFFnWldGemFXNW5SblZ1WTNScGIyNGdQU0FvY0hKdlozSmxjM01zSUhOMGNtVnVaM1JvS1NBOVBpQnRaWFJvYjJRb2NISnZaM0psYzNNc0lITjBjbVZ1WjNSb0tUdGNibHh1SUNBZ0lHVmhjMmx1WjBaMWJtTjBhVzl1TG1sdUlEMGdLSEJ5YjJkeVpYTnpMQ0J6ZEhKbGJtZDBhQ2tnUFQ0Z2JXVjBhRzlrS0hCeWIyZHlaWE56TENCemRISmxibWQwYUNrN1hHNGdJQ0FnWldGemFXNW5SblZ1WTNScGIyNHViM1YwSUQwZ2NtVjJaWEp6WlVWaGMybHVaeWh0WlhSb2IyUXBPMXh1SUNBZ0lHVmhjMmx1WjBaMWJtTjBhVzl1TG1sdVQzVjBJRDBnYldseWNtOXlSV0Z6YVc1bktHMWxkR2h2WkNrN1hHNWNiaUFnSUNCeVpYUjFjbTRnWldGemFXNW5SblZ1WTNScGIyNDdYRzU5WEc0aVhYMD1cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2FjdGlvbnMvZWFzaW5nL2NyZWF0ZS1lYXNpbmcuanNcbiAqKiBtb2R1bGUgaWQgPSA0NVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0cy5kZWZhdWx0ID0gY3ViaWNCZXppZXI7XG4vKlxuICAgIEJlemllciBmdW5jdGlvbiBnZW5lcmF0b3JcbiAgICAgICAgXG4gICAgR2HDq3RhbiBSZW5hdWRlYXUncyBCZXppZXJFYXNpbmdcbiAgICBodHRwczovL2dpdGh1Yi5jb20vZ3JlL2Jlemllci1lYXNpbmcvYmxvYi9tYXN0ZXIvaW5kZXguanMgIFxuICAgIGh0dHBzOi8vZ2l0aHViLmNvbS9ncmUvYmV6aWVyLWVhc2luZy9ibG9iL21hc3Rlci9MSUNFTlNFXG4gICAgWW91J3JlIGEgaGVyb1xuICAgIFxuICAgIFVzZVxuICAgIFxuICAgICAgICB2YXIgZWFzZU91dCA9IG5ldyBCZXppZXIoLjE3LC42NywuODMsLjY3KSxcbiAgICAgICAgICAgIHggPSBlYXNlT3V0KDAuNSk7IC8vIHJldHVybnMgMC42MjcuLi5cbiovXG5cbi8vIENvbnN0YW50c1xudmFyIE5FV1RPTl9JVEVSQVRJT05TID0gODtcbnZhciBORVdUT05fTUlOX1NMT1BFID0gMC4wMDE7XG52YXIgU1VCRElWSVNJT05fUFJFQ0lTSU9OID0gMC4wMDAwMDAxO1xudmFyIFNVQkRJVklTSU9OX01BWF9JVEVSQVRJT05TID0gMTA7XG52YXIgS19TUExJTkVfVEFCTEVfU0laRSA9IDExO1xudmFyIEtfU0FNUExFX1NURVBfU0laRSA9IDEuMCAvIChLX1NQTElORV9UQUJMRV9TSVpFIC0gMS4wKTtcbnZhciBGTE9BVF8zMl9TVVBQT1JURUQgPSB0eXBlb2YgRmxvYXQzMkFycmF5ICE9PSAndW5kZWZpbmVkJztcblxuLy8gSGVscGVyIG1ldGhvZHNcbnZhciBhID0gZnVuY3Rpb24gKGExLCBhMikge1xuICAgIHJldHVybiAxLjAgLSAzLjAgKiBhMiArIDMuMCAqIGExO1xufTtcbnZhciBiID0gZnVuY3Rpb24gKGExLCBhMikge1xuICAgIHJldHVybiAzLjAgKiBhMiAtIDYuMCAqIGExO1xufTtcbnZhciBjID0gZnVuY3Rpb24gKGExKSB7XG4gICAgcmV0dXJuIDMuMCAqIGExO1xufTtcblxudmFyIGdldFNsb3BlID0gZnVuY3Rpb24gKHQsIGExLCBhMikge1xuICAgIHJldHVybiAzLjAgKiBhKGExLCBhMikgKiB0ICogdCArIDIuMCAqIGIoYTEsIGEyKSAqIHQgKyBjKGExKTtcbn07XG5cbnZhciBjYWxjQmV6aWVyID0gZnVuY3Rpb24gKHQsIGExLCBhMikge1xuICAgIHJldHVybiAoKGEoYTEsIGEyKSAqIHQgKyBiKGExLCBhMikpICogdCArIGMoYTEpKSAqIHQ7XG59O1xuXG4vKlxuICAgIENyZWF0ZSBhIGN1YmljIGJlemllciByZXNvbHZlclxuKi9cbmZ1bmN0aW9uIGN1YmljQmV6aWVyKG1YMSwgbVkxLCBtWDIsIG1ZMikge1xuICAgIHZhciBzYW1wbGVWYWx1ZXMgPSBGTE9BVF8zMl9TVVBQT1JURUQgPyBuZXcgRmxvYXQzMkFycmF5KEtfU1BMSU5FX1RBQkxFX1NJWkUpIDogbmV3IEFycmF5KEtfU1BMSU5FX1RBQkxFX1NJWkUpO1xuICAgIHZhciBfcHJlY29tcHV0ZWQgPSBmYWxzZTtcblxuICAgIHZhciBiaW5hcnlTdWJkaXZpZGUgPSBmdW5jdGlvbiAoYVgsIGFBLCBhQikge1xuICAgICAgICB2YXIgaSA9IDA7XG4gICAgICAgIHZhciBjdXJyZW50WCA9IHVuZGVmaW5lZDtcbiAgICAgICAgdmFyIGN1cnJlbnRUID0gdW5kZWZpbmVkO1xuXG4gICAgICAgIGRvIHtcbiAgICAgICAgICAgIGN1cnJlbnRUID0gYUEgKyAoYUIgLSBhQSkgLyAyLjA7XG4gICAgICAgICAgICBjdXJyZW50WCA9IGNhbGNCZXppZXIoY3VycmVudFQsIG1YMSwgbVgyKSAtIGFYO1xuICAgICAgICAgICAgaWYgKGN1cnJlbnRYID4gMC4wKSB7XG4gICAgICAgICAgICAgICAgYUIgPSBjdXJyZW50VDtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgYUEgPSBjdXJyZW50VDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSB3aGlsZSAoTWF0aC5hYnMoY3VycmVudFgpID4gU1VCRElWSVNJT05fUFJFQ0lTSU9OICYmICsraSA8IFNVQkRJVklTSU9OX01BWF9JVEVSQVRJT05TKTtcblxuICAgICAgICByZXR1cm4gY3VycmVudFQ7XG4gICAgfTtcblxuICAgIHZhciBuZXd0b25SYXBoc29uSXRlcmF0ZSA9IGZ1bmN0aW9uIChhWCwgYUd1ZXNzVCkge1xuICAgICAgICB2YXIgaSA9IDA7XG4gICAgICAgIHZhciBjdXJyZW50U2xvcGUgPSAwO1xuICAgICAgICB2YXIgY3VycmVudFggPSB1bmRlZmluZWQ7XG5cbiAgICAgICAgZm9yICg7IGkgPCBORVdUT05fSVRFUkFUSU9OUzsgKytpKSB7XG4gICAgICAgICAgICBjdXJyZW50U2xvcGUgPSBnZXRTbG9wZShhR3Vlc3NULCBtWDEsIG1YMik7XG5cbiAgICAgICAgICAgIGlmIChjdXJyZW50U2xvcGUgPT09IDAuMCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBhR3Vlc3NUO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjdXJyZW50WCA9IGNhbGNCZXppZXIoYUd1ZXNzVCwgbVgxLCBtWDIpIC0gYVg7XG4gICAgICAgICAgICBhR3Vlc3NUIC09IGN1cnJlbnRYIC8gY3VycmVudFNsb3BlO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGFHdWVzc1Q7XG4gICAgfTtcblxuICAgIHZhciBjYWxjU2FtcGxlVmFsdWVzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IEtfU1BMSU5FX1RBQkxFX1NJWkU7ICsraSkge1xuICAgICAgICAgICAgc2FtcGxlVmFsdWVzW2ldID0gY2FsY0JlemllcihpICogS19TQU1QTEVfU1RFUF9TSVpFLCBtWDEsIG1YMik7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgdmFyIGdldFRGb3JYID0gZnVuY3Rpb24gKGFYKSB7XG4gICAgICAgIHZhciBpbnRlcnZhbFN0YXJ0ID0gMC4wO1xuICAgICAgICB2YXIgY3VycmVudFNhbXBsZSA9IDE7XG4gICAgICAgIHZhciBsYXN0U2FtcGxlID0gS19TUExJTkVfVEFCTEVfU0laRSAtIDE7XG4gICAgICAgIHZhciBkaXN0ID0gMC4wO1xuICAgICAgICB2YXIgZ3Vlc3NGb3JUID0gMC4wO1xuICAgICAgICB2YXIgaW5pdGlhbFNsb3BlID0gMC4wO1xuXG4gICAgICAgIGZvciAoOyBjdXJyZW50U2FtcGxlICE9IGxhc3RTYW1wbGUgJiYgc2FtcGxlVmFsdWVzW2N1cnJlbnRTYW1wbGVdIDw9IGFYOyArK2N1cnJlbnRTYW1wbGUpIHtcbiAgICAgICAgICAgIGludGVydmFsU3RhcnQgKz0gS19TQU1QTEVfU1RFUF9TSVpFO1xuICAgICAgICB9XG5cbiAgICAgICAgLS1jdXJyZW50U2FtcGxlO1xuXG4gICAgICAgIGRpc3QgPSAoYVggLSBzYW1wbGVWYWx1ZXNbY3VycmVudFNhbXBsZV0pIC8gKHNhbXBsZVZhbHVlc1tjdXJyZW50U2FtcGxlICsgMV0gLSBzYW1wbGVWYWx1ZXNbY3VycmVudFNhbXBsZV0pO1xuICAgICAgICBndWVzc0ZvclQgPSBpbnRlcnZhbFN0YXJ0ICsgZGlzdCAqIEtfU0FNUExFX1NURVBfU0laRTtcblxuICAgICAgICBpbml0aWFsU2xvcGUgPSBnZXRTbG9wZShndWVzc0ZvclQsIG1YMSwgbVgyKTtcblxuICAgICAgICAvLyBJZiBzbG9wZSBpcyBncmVhdGVyIHRoYW4gbWluXG4gICAgICAgIGlmIChpbml0aWFsU2xvcGUgPj0gTkVXVE9OX01JTl9TTE9QRSkge1xuICAgICAgICAgICAgcmV0dXJuIG5ld3RvblJhcGhzb25JdGVyYXRlKGFYLCBndWVzc0ZvclQpO1xuICAgICAgICAgICAgLy8gU2xvcGUgaXMgZXF1YWwgdG8gbWluXG4gICAgICAgIH0gZWxzZSBpZiAoaW5pdGlhbFNsb3BlID09PSAwLjApIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZ3Vlc3NGb3JUO1xuICAgICAgICAgICAgICAgIC8vIFNsb3BlIGlzIGxlc3MgdGhhbiBtaW5cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBiaW5hcnlTdWJkaXZpZGUoYVgsIGludGVydmFsU3RhcnQsIGludGVydmFsU3RhcnQgKyBLX1NBTVBMRV9TVEVQX1NJWkUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICB9O1xuXG4gICAgdmFyIHByZWNvbXB1dGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIF9wcmVjb21wdXRlZCA9IHRydWU7XG4gICAgICAgIGlmIChtWDEgIT0gbVkxIHx8IG1YMiAhPSBtWTIpIHtcbiAgICAgICAgICAgIGNhbGNTYW1wbGVWYWx1ZXMoKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICB2YXIgcmVzb2x2ZXIgPSBmdW5jdGlvbiAoYVgpIHtcbiAgICAgICAgdmFyIHJldHVyblZhbHVlID0gdW5kZWZpbmVkO1xuXG4gICAgICAgIGlmICghX3ByZWNvbXB1dGVkKSB7XG4gICAgICAgICAgICBwcmVjb21wdXRlKCk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBJZiBsaW5lYXIgZ3JhZGllbnQsIHJldHVybiBYIGFzIFRcbiAgICAgICAgaWYgKG1YMSA9PT0gbVkxICYmIG1YMiA9PT0gbVkyKSB7XG4gICAgICAgICAgICByZXR1cm5WYWx1ZSA9IGFYO1xuXG4gICAgICAgICAgICAvLyBJZiBhdCBzdGFydCwgcmV0dXJuIDBcbiAgICAgICAgfSBlbHNlIGlmIChhWCA9PT0gMCkge1xuICAgICAgICAgICAgICAgIHJldHVyblZhbHVlID0gMDtcblxuICAgICAgICAgICAgICAgIC8vIElmIGF0IGVuZCwgcmV0dXJuIDFcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoYVggPT09IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuVmFsdWUgPSAxO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVyblZhbHVlID0gY2FsY0JlemllcihnZXRURm9yWChhWCksIG1ZMSwgbVkyKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHJldHVyblZhbHVlO1xuICAgIH07XG5cbiAgICByZXR1cm4gcmVzb2x2ZXI7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5OeVl5OWhZM1JwYjI1ekwyVmhjMmx1Wnk5amNtVmhkR1V0WW1WNmFXVnlMbXB6SWwwc0ltNWhiV1Z6SWpwYlhTd2liV0Z3Y0dsdVozTWlPaUk3T3p0clFrRnRRM2RDT3pzN096czdPenM3T3pzN096czdPMEZCY0VKNFFpeEpRVUZOTEc5Q1FVRnZRaXhEUVVGd1FqdEJRVU5PTEVsQlFVMHNiVUpCUVcxQ0xFdEJRVzVDTzBGQlEwNHNTVUZCVFN4M1FrRkJkMElzVTBGQmVFSTdRVUZEVGl4SlFVRk5MRFpDUVVFMlFpeEZRVUUzUWp0QlFVTk9MRWxCUVUwc2MwSkJRWE5DTEVWQlFYUkNPMEZCUTA0c1NVRkJUU3h4UWtGQmNVSXNUMEZCVHl4elFrRkJjMElzUjBGQmRFSXNRMEZCVUR0QlFVTXpRaXhKUVVGTkxIRkNRVUZ6UWl4UFFVRlBMRmxCUVZBc1MwRkJkMElzVjBGQmVFSTdPenRCUVVjMVFpeEpRVUZOTEVsQlFVa3NWVUZCUXl4RlFVRkVMRVZCUVVzc1JVRkJURHRYUVVGWkxFMUJRVTBzVFVGQlRTeEZRVUZPTEVkQlFWY3NUVUZCVFN4RlFVRk9PME5CUVRkQ08wRkJRMVlzU1VGQlRTeEpRVUZKTEZWQlFVTXNSVUZCUkN4RlFVRkxMRVZCUVV3N1YwRkJXU3hOUVVGTkxFVkJRVTRzUjBGQlZ5eE5RVUZOTEVWQlFVNDdRMEZCZGtJN1FVRkRWaXhKUVVGTkxFbEJRVWtzVlVGQlF5eEZRVUZFTzFkQlFWRXNUVUZCVFN4RlFVRk9PME5CUVZJN08wRkJSVllzU1VGQlRTeFhRVUZYTEZWQlFVTXNRMEZCUkN4RlFVRkpMRVZCUVVvc1JVRkJVU3hGUVVGU08xZEJRV1VzVFVGQlRTeEZRVUZGTEVWQlFVWXNSVUZCVFN4RlFVRk9MRU5CUVU0c1IwRkJhMElzUTBGQmJFSXNSMEZCYzBJc1EwRkJkRUlzUjBGQk1FSXNUVUZCVFN4RlFVRkZMRVZCUVVZc1JVRkJUU3hGUVVGT0xFTkJRVTRzUjBGQmEwSXNRMEZCYkVJc1IwRkJjMElzUlVGQlJTeEZRVUZHTEVOQlFXaEVPME5CUVdZN08wRkJSV3BDTEVsQlFVMHNZVUZCWVN4VlFVRkRMRU5CUVVRc1JVRkJTU3hGUVVGS0xFVkJRVkVzUlVGQlVqdFhRVUZsTEVOQlFVTXNRMEZCUXl4RlFVRkZMRVZCUVVZc1JVRkJUU3hGUVVGT0xFbEJRVmtzUTBGQldpeEhRVUZuUWl4RlFVRkZMRVZCUVVZc1JVRkJUU3hGUVVGT0xFTkJRV2hDTEVOQlFVUXNSMEZCT0VJc1EwRkJPVUlzUjBGQmEwTXNSVUZCUlN4RlFVRkdMRU5CUVd4RExFTkJRVVFzUjBGQk5FTXNRMEZCTlVNN1EwRkJaanM3T3pzN1FVRkxTaXhUUVVGVExGZEJRVlFzUTBGQmNVSXNSMEZCY2tJc1JVRkJNRUlzUjBGQk1VSXNSVUZCSzBJc1IwRkJMMElzUlVGQmIwTXNSMEZCY0VNc1JVRkJlVU03UVVGRGNFUXNVVUZCVFN4bFFVRmxMSEZDUVVGeFFpeEpRVUZKTEZsQlFVb3NRMEZCYVVJc2JVSkJRV3BDTEVOQlFYSkNMRWRCUVRaRUxFbEJRVWtzUzBGQlNpeERRVUZWTEcxQ1FVRldMRU5CUVRkRUxFTkJSQ3RDTzBGQlJYQkVMRkZCUVVrc1pVRkJaU3hMUVVGbUxFTkJSbWRFT3p0QlFVbHdSQ3hSUVVGTkxHdENRVUZyUWl4VlFVRkRMRVZCUVVRc1JVRkJTeXhGUVVGTUxFVkJRVk1zUlVGQlZDeEZRVUZuUWp0QlFVTndReXhaUVVGSkxFbEJRVWtzUTBGQlNpeERRVVJuUXp0QlFVVndReXhaUVVGSkxHOUNRVUZLTEVOQlJtOURPMEZCUjNCRExGbEJRVWtzYjBKQlFVb3NRMEZJYjBNN08wRkJTM0JETEZkQlFVYzdRVUZEUXl4MVFrRkJWeXhMUVVGTExFTkJRVU1zUzBGQlN5eEZRVUZNTEVOQlFVUXNSMEZCV1N4SFFVRmFMRU5CUkdwQ08wRkJSVU1zZFVKQlFWY3NWMEZCVnl4UlFVRllMRVZCUVhGQ0xFZEJRWEpDTEVWQlFUQkNMRWRCUVRGQ0xFbEJRV2xETEVWQlFXcERMRU5CUmxvN1FVRkhReXhuUWtGQlNTeFhRVUZYTEVkQlFWZ3NSVUZCWjBJN1FVRkRhRUlzY1VKQlFVc3NVVUZCVEN4RFFVUm5RanRoUVVGd1FpeE5RVVZQTzBGQlEwZ3NjVUpCUVVzc1VVRkJUQ3hEUVVSSE8yRkJSbEE3VTBGSVNpeFJRVkZUTEV0QlFVc3NSMEZCVEN4RFFVRlRMRkZCUVZRc1NVRkJjVUlzY1VKQlFYSkNMRWxCUVRoRExFVkJRVVVzUTBGQlJpeEhRVUZOTERCQ1FVRk9MRVZCWW01Q096dEJRV1Z3UXl4bFFVRlBMRkZCUVZBc1EwRm1iME03UzBGQmFFSXNRMEZLTkVJN08wRkJjMEp3UkN4UlFVRk5MSFZDUVVGMVFpeFZRVUZETEVWQlFVUXNSVUZCU3l4UFFVRk1MRVZCUVdsQ08wRkJRekZETEZsQlFVa3NTVUZCU1N4RFFVRktMRU5CUkhORE8wRkJSVEZETEZsQlFVa3NaVUZCWlN4RFFVRm1MRU5CUm5ORE8wRkJSekZETEZsQlFVa3NiMEpCUVVvc1EwRklNRU03TzBGQlN6RkRMR1ZCUVU4c1NVRkJTU3hwUWtGQlNpeEZRVUYxUWl4RlFVRkZMRU5CUVVZc1JVRkJTenRCUVVNdlFpd3lRa0ZCWlN4VFFVRlRMRTlCUVZRc1JVRkJhMElzUjBGQmJFSXNSVUZCZFVJc1IwRkJka0lzUTBGQlppeERRVVFyUWpzN1FVRkhMMElzWjBKQlFVa3NhVUpCUVdsQ0xFZEJRV3BDTEVWQlFYTkNPMEZCUTNSQ0xIVkNRVUZQTEU5QlFWQXNRMEZFYzBJN1lVRkJNVUk3TzBGQlNVRXNkVUpCUVZjc1YwRkJWeXhQUVVGWUxFVkJRVzlDTEVkQlFYQkNMRVZCUVhsQ0xFZEJRWHBDTEVsQlFXZERMRVZCUVdoRExFTkJVRzlDTzBGQlVTOUNMSFZDUVVGWExGZEJRVmNzV1VGQldDeERRVkp2UWp0VFFVRnVRenM3UVVGWFFTeGxRVUZQTEU5QlFWQXNRMEZvUWpCRE8wdEJRV3BDTEVOQmRFSjFRanM3UVVGNVEzQkVMRkZCUVUwc2JVSkJRVzFDTEZsQlFVMDdRVUZETTBJc1lVRkJTeXhKUVVGSkxFbEJRVWtzUTBGQlNpeEZRVUZQTEVsQlFVa3NiVUpCUVVvc1JVRkJlVUlzUlVGQlJTeERRVUZHTEVWQlFVczdRVUZETVVNc2VVSkJRV0VzUTBGQllpeEpRVUZyUWl4WFFVRlhMRWxCUVVrc2EwSkJRVW9zUlVGQmQwSXNSMEZCYmtNc1JVRkJkME1zUjBGQmVFTXNRMEZCYkVJc1EwRkVNRU03VTBGQk9VTTdTMEZFY1VJc1EwRjZRekpDT3p0QlFTdERjRVFzVVVGQlRTeFhRVUZYTEZWQlFVTXNSVUZCUkN4RlFVRlJPMEZCUTNKQ0xGbEJRVWtzWjBKQlFXZENMRWRCUVdoQ0xFTkJSR2xDTzBGQlJYSkNMRmxCUVVrc1owSkJRV2RDTEVOQlFXaENMRU5CUm1sQ08wRkJSM0pDTEZsQlFVa3NZVUZCWVN4elFrRkJjMElzUTBGQmRFSXNRMEZJU1R0QlFVbHlRaXhaUVVGSkxFOUJRVThzUjBGQlVDeERRVXBwUWp0QlFVdHlRaXhaUVVGSkxGbEJRVmtzUjBGQldpeERRVXhwUWp0QlFVMXlRaXhaUVVGSkxHVkJRV1VzUjBGQlppeERRVTVwUWpzN1FVRlJja0lzWlVGQlR5eHBRa0ZCYVVJc1ZVRkJha0lzU1VGQkswSXNZVUZCWVN4aFFVRmlMRXRCUVN0Q0xFVkJRUzlDTEVWQlFXMURMRVZCUVVVc1lVRkJSaXhGUVVGcFFqdEJRVU4wUml3MlFrRkJhVUlzYTBKQlFXcENMRU5CUkhOR08xTkJRVEZHT3p0QlFVbEJMRlZCUVVVc1lVRkJSaXhEUVZweFFqczdRVUZqY2tJc1pVRkJUeXhEUVVGRExFdEJRVXNzWVVGQllTeGhRVUZpTEVOQlFVd3NRMEZCUkN4SlFVRnpReXhoUVVGaExHZENRVUZqTEVOQlFXUXNRMEZCWWl4SFFVRm5ReXhoUVVGaExHRkJRV0lzUTBGQmFFTXNRMEZCZEVNc1EwRmtZenRCUVdWeVFpeHZRa0ZCV1N4blFrRkJaMElzVDBGQlR5eHJRa0ZCVUN4RFFXWlFPenRCUVdsQ2NrSXNkVUpCUVdVc1UwRkJVeXhUUVVGVUxFVkJRVzlDTEVkQlFYQkNMRVZCUVhsQ0xFZEJRWHBDTEVOQlFXWTdPenRCUVdwQ2NVSXNXVUZ2UW1wQ0xHZENRVUZuUWl4blFrRkJhRUlzUlVGQmEwTTdRVUZEYkVNc2JVSkJRVThzY1VKQlFYRkNMRVZCUVhKQ0xFVkJRWGxDTEZOQlFYcENMRU5CUVZBN08wRkJSR3RETEZOQlFYUkRMRTFCUjA4c1NVRkJTU3hwUWtGQmFVSXNSMEZCYWtJc1JVRkJjMEk3UVVGRE4wSXNkVUpCUVU4c1UwRkJVRHM3UVVGRU5rSXNZVUZCTVVJc1RVRkhRVHRCUVVOSUxESkNRVUZQTEdkQ1FVRm5RaXhGUVVGb1FpeEZRVUZ2UWl4aFFVRndRaXhGUVVGdFF5eG5Ra0ZCWjBJc2EwSkJRV2hDTEVOQlFURkRMRU5CUkVjN2FVSkJTRUU3UzBGMlFrMHNRMEV2UTIxRE96dEJRVGhGY0VRc1VVRkJUU3hoUVVGaExGbEJRVTA3UVVGRGNrSXNkVUpCUVdVc1NVRkJaaXhEUVVSeFFqdEJRVVZ5UWl4WlFVRkpMRTlCUVU4c1IwRkJVQ3hKUVVGakxFOUJRVThzUjBGQlVDeEZRVUZaTzBGQlF6RkNMQ3RDUVVRd1FqdFRRVUU1UWp0TFFVWmxMRU5CT1VWcFF6czdRVUZ4Um5CRUxGRkJRVTBzVjBGQlZ5eFZRVUZETEVWQlFVUXNSVUZCVVR0QlFVTnlRaXhaUVVGSkxIVkNRVUZLTEVOQlJIRkNPenRCUVVkeVFpeFpRVUZKTEVOQlFVTXNXVUZCUkN4RlFVRmxPMEZCUTJZc2VVSkJSR1U3VTBGQmJrSTdPenRCUVVoeFFpeFpRVkZxUWl4UlFVRlJMRWRCUVZJc1NVRkJaU3hSUVVGUkxFZEJRVklzUlVGQllUdEJRVU0xUWl3d1FrRkJZeXhGUVVGa096czdRVUZFTkVJc1UwRkJhRU1zVFVGSlR5eEpRVUZKTEU5QlFVOHNRMEZCVUN4RlFVRlZPMEZCUTJwQ0xEaENRVUZqTEVOQlFXUTdPenRCUVVScFFpeGhRVUZrTEUxQlNVRXNTVUZCU1N4UFFVRlBMRU5CUVZBc1JVRkJWVHRCUVVOcVFpeHJRMEZCWXl4RFFVRmtMRU5CUkdsQ08ybENRVUZrTEUxQlIwRTdRVUZEU0N4clEwRkJZeXhYUVVGWExGTkJRVk1zUlVGQlZDeERRVUZZTEVWQlFYbENMRWRCUVhwQ0xFVkJRVGhDTEVkQlFUbENMRU5CUVdRc1EwRkVSenRwUWtGSVFUczdRVUZQVUN4bFFVRlBMRmRCUVZBc1EwRjJRbkZDTzB0QlFWSXNRMEZ5Um0xRE96dEJRU3RIY0VRc1YwRkJUeXhSUVVGUUxFTkJMMGR2UkR0RFFVRjZReUlzSW1acGJHVWlPaUpqY21WaGRHVXRZbVY2YVdWeUxtcHpJaXdpYzI5MWNtTmxVbTl2ZENJNklpOVZjMlZ5Y3k5TllYUjBMMU5wZEdWekwzQnZjRzF2ZEdsdmJpSXNJbk52ZFhKalpYTkRiMjUwWlc1MElqcGJJaThxWEc0Z0lDQWdRbVY2YVdWeUlHWjFibU4wYVc5dUlHZGxibVZ5WVhSdmNseHVJQ0FnSUNBZ0lDQmNiaUFnSUNCSFljT3JkR0Z1SUZKbGJtRjFaR1ZoZFNkeklFSmxlbWxsY2tWaGMybHVaMXh1SUNBZ0lHaDBkSEJ6T2k4dloybDBhSFZpTG1OdmJTOW5jbVV2WW1WNmFXVnlMV1ZoYzJsdVp5OWliRzlpTDIxaGMzUmxjaTlwYm1SbGVDNXFjeUFnWEc0Z0lDQWdhSFIwY0hNNkx5OW5hWFJvZFdJdVkyOXRMMmR5WlM5aVpYcHBaWEl0WldGemFXNW5MMkpzYjJJdmJXRnpkR1Z5TDB4SlEwVk9VMFZjYmlBZ0lDQlpiM1VuY21VZ1lTQm9aWEp2WEc0Z0lDQWdYRzRnSUNBZ1ZYTmxYRzRnSUNBZ1hHNGdJQ0FnSUNBZ0lIWmhjaUJsWVhObFQzVjBJRDBnYm1WM0lFSmxlbWxsY2lndU1UY3NMalkzTEM0NE15d3VOamNwTEZ4dUlDQWdJQ0FnSUNBZ0lDQWdlQ0E5SUdWaGMyVlBkWFFvTUM0MUtUc2dMeThnY21WMGRYSnVjeUF3TGpZeU55NHVMbHh1S2k5Y2JseHVMeThnUTI5dWMzUmhiblJ6WEc1amIyNXpkQ0JPUlZkVVQwNWZTVlJGVWtGVVNVOU9VeUE5SURnN1hHNWpiMjV6ZENCT1JWZFVUMDVmVFVsT1gxTk1UMUJGSUQwZ01DNHdNREU3WEc1amIyNXpkQ0JUVlVKRVNWWkpVMGxQVGw5UVVrVkRTVk5KVDA0Z1BTQXdMakF3TURBd01ERTdYRzVqYjI1emRDQlRWVUpFU1ZaSlUwbFBUbDlOUVZoZlNWUkZVa0ZVU1U5T1V5QTlJREV3TzF4dVkyOXVjM1FnUzE5VFVFeEpUa1ZmVkVGQ1RFVmZVMGxhUlNBOUlERXhPMXh1WTI5dWMzUWdTMTlUUVUxUVRFVmZVMVJGVUY5VFNWcEZJRDBnTVM0d0lDOGdLRXRmVTFCTVNVNUZYMVJCUWt4RlgxTkpXa1VnTFNBeExqQXBPMXh1WTI5dWMzUWdSa3hQUVZSZk16SmZVMVZRVUU5U1ZFVkVJRDBnS0hSNWNHVnZaaUJHYkc5aGRETXlRWEp5WVhrZ0lUMDlJQ2QxYm1SbFptbHVaV1FuS1R0Y2JseHVMeThnU0dWc2NHVnlJRzFsZEdodlpITmNibU52Ym5OMElHRWdQU0FvWVRFc0lHRXlLU0E5UGlBeExqQWdMU0F6TGpBZ0tpQmhNaUFySURNdU1DQXFJR0V4TzF4dVkyOXVjM1FnWWlBOUlDaGhNU3dnWVRJcElEMCtJRE11TUNBcUlHRXlJQzBnTmk0d0lDb2dZVEU3WEc1amIyNXpkQ0JqSUQwZ0tHRXhLU0E5UGlBekxqQWdLaUJoTVR0Y2JseHVZMjl1YzNRZ1oyVjBVMnh2Y0dVZ1BTQW9kQ3dnWVRFc0lHRXlLU0E5UGlBekxqQWdLaUJoS0dFeExDQmhNaWtnS2lCMElDb2dkQ0FySURJdU1DQXFJR0lvWVRFc0lHRXlLU0FxSUhRZ0t5QmpLR0V4S1R0Y2JseHVZMjl1YzNRZ1kyRnNZMEpsZW1sbGNpQTlJQ2gwTENCaE1Td2dZVElwSUQwK0lDZ29ZU2hoTVN3Z1lUSXBJQ29nZENBcklHSW9ZVEVzSUdFeUtTa2dLaUIwSUNzZ1l5aGhNU2twSUNvZ2REdGNibHh1THlwY2JpQWdJQ0JEY21WaGRHVWdZU0JqZFdKcFl5QmlaWHBwWlhJZ2NtVnpiMngyWlhKY2Jpb3ZYRzVsZUhCdmNuUWdaR1ZtWVhWc2RDQm1kVzVqZEdsdmJpQmpkV0pwWTBKbGVtbGxjaWh0V0RFc0lHMVpNU3dnYlZneUxDQnRXVElwSUh0Y2JpQWdJQ0JqYjI1emRDQnpZVzF3YkdWV1lXeDFaWE1nUFNCR1RFOUJWRjh6TWw5VFZWQlFUMUpVUlVRZ1B5QnVaWGNnUm14dllYUXpNa0Z5Y21GNUtFdGZVMUJNU1U1RlgxUkJRa3hGWDFOSldrVXBJRG9nYm1WM0lFRnljbUY1S0V0ZlUxQk1TVTVGWDFSQlFreEZYMU5KV2tVcE8xeHVJQ0FnSUd4bGRDQmZjSEpsWTI5dGNIVjBaV1FnUFNCbVlXeHpaVHRjYmx4dUlDQWdJR052Ym5OMElHSnBibUZ5ZVZOMVltUnBkbWxrWlNBOUlDaGhXQ3dnWVVFc0lHRkNLU0E5UGlCN1hHNGdJQ0FnSUNBZ0lHeGxkQ0JwSUQwZ01EdGNiaUFnSUNBZ0lDQWdiR1YwSUdOMWNuSmxiblJZTzF4dUlDQWdJQ0FnSUNCc1pYUWdZM1Z5Y21WdWRGUTdYRzVjYmlBZ0lDQWdJQ0FnWkc4Z2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnWTNWeWNtVnVkRlFnUFNCaFFTQXJJQ2hoUWlBdElHRkJLU0F2SURJdU1EdGNiaUFnSUNBZ0lDQWdJQ0FnSUdOMWNuSmxiblJZSUQwZ1kyRnNZMEpsZW1sbGNpaGpkWEp5Wlc1MFZDd2diVmd4TENCdFdESXBJQzBnWVZnN1hHNGdJQ0FnSUNBZ0lDQWdJQ0JwWmlBb1kzVnljbVZ1ZEZnZ1BpQXdMakFwSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCaFFpQTlJR04xY25KbGJuUlVPMXh1SUNBZ0lDQWdJQ0FnSUNBZ2ZTQmxiSE5sSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCaFFTQTlJR04xY25KbGJuUlVPMXh1SUNBZ0lDQWdJQ0FnSUNBZ2ZWeHVJQ0FnSUNBZ0lDQjlJSGRvYVd4bElDaE5ZWFJvTG1GaWN5aGpkWEp5Wlc1MFdDa2dQaUJUVlVKRVNWWkpVMGxQVGw5UVVrVkRTVk5KVDA0Z0ppWWdLeXRwSUR3Z1UxVkNSRWxXU1ZOSlQwNWZUVUZZWDBsVVJWSkJWRWxQVGxNcE8xeHVYRzRnSUNBZ0lDQWdJSEpsZEhWeWJpQmpkWEp5Wlc1MFZEdGNiaUFnSUNCOU8xeHVYRzRnSUNBZ1kyOXVjM1FnYm1WM2RHOXVVbUZ3YUhOdmJrbDBaWEpoZEdVZ1BTQW9ZVmdzSUdGSGRXVnpjMVFwSUQwK0lIdGNiaUFnSUNBZ0lDQWdiR1YwSUdrZ1BTQXdPMXh1SUNBZ0lDQWdJQ0JzWlhRZ1kzVnljbVZ1ZEZOc2IzQmxJRDBnTUR0Y2JpQWdJQ0FnSUNBZ2JHVjBJR04xY25KbGJuUllPMXh1WEc0Z0lDQWdJQ0FnSUdadmNpQW9PeUJwSUR3Z1RrVlhWRTlPWDBsVVJWSkJWRWxQVGxNN0lDc3JhU2tnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdZM1Z5Y21WdWRGTnNiM0JsSUQwZ1oyVjBVMnh2Y0dVb1lVZDFaWE56VkN3Z2JWZ3hMQ0J0V0RJcE8xeHVJQ0FnSUNBZ0lDQWdJQ0FnWEc0Z0lDQWdJQ0FnSUNBZ0lDQnBaaUFvWTNWeWNtVnVkRk5zYjNCbElEMDlQU0F3TGpBcElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQnlaWFIxY200Z1lVZDFaWE56VkR0Y2JpQWdJQ0FnSUNBZ0lDQWdJSDFjYmlBZ0lDQWdJQ0FnSUNBZ0lGeHVJQ0FnSUNBZ0lDQWdJQ0FnWTNWeWNtVnVkRmdnUFNCallXeGpRbVY2YVdWeUtHRkhkV1Z6YzFRc0lHMVlNU3dnYlZneUtTQXRJR0ZZTzF4dUlDQWdJQ0FnSUNBZ0lDQWdZVWQxWlhOelZDQXRQU0JqZFhKeVpXNTBXQ0F2SUdOMWNuSmxiblJUYkc5d1pUdGNiaUFnSUNBZ0lDQWdmVnh1SUNBZ0lDQWdJQ0JjYmlBZ0lDQWdJQ0FnY21WMGRYSnVJR0ZIZFdWemMxUTdYRzRnSUNBZ2ZUdGNibHh1SUNBZ0lHTnZibk4wSUdOaGJHTlRZVzF3YkdWV1lXeDFaWE1nUFNBb0tTQTlQaUI3WEc0Z0lDQWdJQ0FnSUdadmNpQW9iR1YwSUdrZ1BTQXdPeUJwSUR3Z1MxOVRVRXhKVGtWZlZFRkNURVZmVTBsYVJUc2dLeXRwS1NCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0J6WVcxd2JHVldZV3gxWlhOYmFWMGdQU0JqWVd4alFtVjZhV1Z5S0drZ0tpQkxYMU5CVFZCTVJWOVRWRVZRWDFOSldrVXNJRzFZTVN3Z2JWZ3lLVHRjYmlBZ0lDQWdJQ0FnZlZ4dUlDQWdJSDA3WEc1Y2JpQWdJQ0JqYjI1emRDQm5aWFJVUm05eVdDQTlJQ2hoV0NrZ1BUNGdlMXh1SUNBZ0lDQWdJQ0JzWlhRZ2FXNTBaWEoyWVd4VGRHRnlkQ0E5SURBdU1EdGNiaUFnSUNBZ0lDQWdiR1YwSUdOMWNuSmxiblJUWVcxd2JHVWdQU0F4TzF4dUlDQWdJQ0FnSUNCc1pYUWdiR0Z6ZEZOaGJYQnNaU0E5SUV0ZlUxQk1TVTVGWDFSQlFreEZYMU5KV2tVZ0xTQXhPMXh1SUNBZ0lDQWdJQ0JzWlhRZ1pHbHpkQ0E5SURBdU1EdGNiaUFnSUNBZ0lDQWdiR1YwSUdkMVpYTnpSbTl5VkNBOUlEQXVNRHRjYmlBZ0lDQWdJQ0FnYkdWMElHbHVhWFJwWVd4VGJHOXdaU0E5SURBdU1EdGNiaUFnSUNBZ0lDQWdJQ0FnSUZ4dUlDQWdJQ0FnSUNCbWIzSWdLRHNnWTNWeWNtVnVkRk5oYlhCc1pTQWhQU0JzWVhOMFUyRnRjR3hsSUNZbUlITmhiWEJzWlZaaGJIVmxjMXRqZFhKeVpXNTBVMkZ0Y0d4bFhTQThQU0JoV0RzZ0t5dGpkWEp5Wlc1MFUyRnRjR3hsS1NCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0JwYm5SbGNuWmhiRk4wWVhKMElDczlJRXRmVTBGTlVFeEZYMU5VUlZCZlUwbGFSVHRjYmlBZ0lDQWdJQ0FnZlZ4dUlDQWdJQ0FnSUNCY2JpQWdJQ0FnSUNBZ0xTMWpkWEp5Wlc1MFUyRnRjR3hsTzF4dUlDQWdJQ0FnSUNCY2JpQWdJQ0FnSUNBZ1pHbHpkQ0E5SUNoaFdDQXRJSE5oYlhCc1pWWmhiSFZsYzF0amRYSnlaVzUwVTJGdGNHeGxYU2tnTHlBb2MyRnRjR3hsVm1Gc2RXVnpXMk4xY25KbGJuUlRZVzF3YkdVck1WMGdMU0J6WVcxd2JHVldZV3gxWlhOYlkzVnljbVZ1ZEZOaGJYQnNaVjBwTzF4dUlDQWdJQ0FnSUNCbmRXVnpjMFp2Y2xRZ1BTQnBiblJsY25aaGJGTjBZWEowSUNzZ1pHbHpkQ0FxSUV0ZlUwRk5VRXhGWDFOVVJWQmZVMGxhUlR0Y2JpQWdJQ0FnSUNBZ1hHNGdJQ0FnSUNBZ0lHbHVhWFJwWVd4VGJHOXdaU0E5SUdkbGRGTnNiM0JsS0dkMVpYTnpSbTl5VkN3Z2JWZ3hMQ0J0V0RJcE8xeHVJQ0FnSUNBZ0lDQmNiaUFnSUNBZ0lDQWdMeThnU1dZZ2MyeHZjR1VnYVhNZ1ozSmxZWFJsY2lCMGFHRnVJRzFwYmx4dUlDQWdJQ0FnSUNCcFppQW9hVzVwZEdsaGJGTnNiM0JsSUQ0OUlFNUZWMVJQVGw5TlNVNWZVMHhQVUVVcElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUhKbGRIVnliaUJ1WlhkMGIyNVNZWEJvYzI5dVNYUmxjbUYwWlNoaFdDd2daM1ZsYzNOR2IzSlVLVHRjYmlBZ0lDQWdJQ0FnTHk4Z1UyeHZjR1VnYVhNZ1pYRjFZV3dnZEc4Z2JXbHVYRzRnSUNBZ0lDQWdJSDBnWld4elpTQnBaaUFvYVc1cGRHbGhiRk5zYjNCbElEMDlQU0F3TGpBcElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUhKbGRIVnliaUJuZFdWemMwWnZjbFE3WEc0Z0lDQWdJQ0FnSUM4dklGTnNiM0JsSUdseklHeGxjM01nZEdoaGJpQnRhVzVjYmlBZ0lDQWdJQ0FnZlNCbGJITmxJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lISmxkSFZ5YmlCaWFXNWhjbmxUZFdKa2FYWnBaR1VvWVZnc0lHbHVkR1Z5ZG1Gc1UzUmhjblFzSUdsdWRHVnlkbUZzVTNSaGNuUWdLeUJMWDFOQlRWQk1SVjlUVkVWUVgxTkpXa1VwTzF4dUlDQWdJQ0FnSUNCOVhHNGdJQ0FnZlR0Y2JseHVJQ0FnSUdOdmJuTjBJSEJ5WldOdmJYQjFkR1VnUFNBb0tTQTlQaUI3WEc0Z0lDQWdJQ0FnSUY5d2NtVmpiMjF3ZFhSbFpDQTlJSFJ5ZFdVN1hHNGdJQ0FnSUNBZ0lHbG1JQ2h0V0RFZ0lUMGdiVmt4SUh4OElHMVlNaUFoUFNCdFdUSXBJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lHTmhiR05UWVcxd2JHVldZV3gxWlhNb0tUdGNiaUFnSUNBZ0lDQWdmVnh1SUNBZ0lIMDdYRzVjYmlBZ0lDQmpiMjV6ZENCeVpYTnZiSFpsY2lBOUlDaGhXQ2tnUFQ0Z2UxeHVJQ0FnSUNBZ0lDQnNaWFFnY21WMGRYSnVWbUZzZFdVN1hHNWNiaUFnSUNBZ0lDQWdhV1lnS0NGZmNISmxZMjl0Y0hWMFpXUXBJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lIQnlaV052YlhCMWRHVW9LVHRjYmlBZ0lDQWdJQ0FnZlZ4dUlDQWdJQ0FnSUNCY2JpQWdJQ0FnSUNBZ0x5OGdTV1lnYkdsdVpXRnlJR2R5WVdScFpXNTBMQ0J5WlhSMWNtNGdXQ0JoY3lCVVhHNGdJQ0FnSUNBZ0lHbG1JQ2h0V0RFZ1BUMDlJRzFaTVNBbUppQnRXRElnUFQwOUlHMVpNaWtnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdjbVYwZFhKdVZtRnNkV1VnUFNCaFdEdGNiaUFnSUNBZ0lDQWdJQ0FnSUZ4dUlDQWdJQ0FnSUNBdkx5QkpaaUJoZENCemRHRnlkQ3dnY21WMGRYSnVJREJjYmlBZ0lDQWdJQ0FnZlNCbGJITmxJR2xtSUNoaFdDQTlQVDBnTUNrZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnY21WMGRYSnVWbUZzZFdVZ1BTQXdPMXh1SUNBZ0lDQWdJQ0FnSUNBZ1hHNGdJQ0FnSUNBZ0lDOHZJRWxtSUdGMElHVnVaQ3dnY21WMGRYSnVJREZjYmlBZ0lDQWdJQ0FnZlNCbGJITmxJR2xtSUNoaFdDQTlQVDBnTVNrZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnY21WMGRYSnVWbUZzZFdVZ1BTQXhPMXh1WEc0Z0lDQWdJQ0FnSUgwZ1pXeHpaU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQnlaWFIxY201V1lXeDFaU0E5SUdOaGJHTkNaWHBwWlhJb1oyVjBWRVp2Y2xnb1lWZ3BMQ0J0V1RFc0lHMVpNaWs3WEc0Z0lDQWdJQ0FnSUgxY2JpQWdJQ0FnSUNBZ1hHNGdJQ0FnSUNBZ0lISmxkSFZ5YmlCeVpYUjFjbTVXWVd4MVpUdGNiaUFnSUNCOU8xeHVYRzRnSUNBZ2NtVjBkWEp1SUhKbGMyOXNkbVZ5TzF4dWZWeHVJbDE5XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9hY3Rpb25zL2Vhc2luZy9jcmVhdGUtYmV6aWVyLmpzXG4gKiogbW9kdWxlIGlkID0gNDZcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF9jc3NBZGFwdGVyID0gcmVxdWlyZSgnLi4vYWRhcHRlci9jc3MtYWRhcHRlcicpO1xuXG52YXIgX2Nzc0FkYXB0ZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY3NzQWRhcHRlcik7XG5cbnZhciBfc3ZnQWRhcHRlciA9IHJlcXVpcmUoJy4uL2FkYXB0ZXIvc3ZnLWFkYXB0ZXInKTtcblxudmFyIF9zdmdBZGFwdGVyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3N2Z0FkYXB0ZXIpO1xuXG52YXIgX3N2Z1BhdGhBZGFwdGVyID0gcmVxdWlyZSgnLi4vYWRhcHRlci9zdmctcGF0aC1hZGFwdGVyJyk7XG5cbnZhciBfc3ZnUGF0aEFkYXB0ZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfc3ZnUGF0aEFkYXB0ZXIpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG52YXIgU0FWRV9QUk9QID0gJ19fcG1fYWRhcHRlcic7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uIChlbGVtZW50KSB7XG4gICAgLy8gUmV0dXJuIGJvdW5kIGFkYXB0ZXIgaWYgcHJlc2VudFxuICAgIGlmIChlbGVtZW50W1NBVkVfUFJPUF0pIHtcbiAgICAgICAgcmV0dXJuIGVsZW1lbnRbU0FWRV9QUk9QXTtcblxuICAgICAgICAvLyBPciBkZXRlY3QgYW5kIGJpbmQgYWRhcHRlclxuICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB2YXIgYWRhcHRlciA9IHVuZGVmaW5lZDtcblxuICAgICAgICAgICAgLy8gSWYgSFRNTEVsZW1lbnQgbG9hZCBDU1NcbiAgICAgICAgICAgIGlmIChlbGVtZW50IGluc3RhbmNlb2YgSFRNTEVsZW1lbnQgfHwgZWxlbWVudC50YWdOYW1lID09PSAnc3ZnJykge1xuICAgICAgICAgICAgICAgIGFkYXB0ZXIgPSBfY3NzQWRhcHRlcjIuZGVmYXVsdDtcblxuICAgICAgICAgICAgICAgIC8vIE9yIFNWR1xuICAgICAgICAgICAgfSBlbHNlIGlmIChlbGVtZW50IGluc3RhbmNlb2YgU1ZHRWxlbWVudCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoZWxlbWVudC50YWdOYW1lID09PSAncGF0aCcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFkYXB0ZXIgPSBfc3ZnUGF0aEFkYXB0ZXIyLmRlZmF1bHQ7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhZGFwdGVyID0gX3N2Z0FkYXB0ZXIyLmRlZmF1bHQ7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIEJpbmQgYWRhcHRlciB0byBlbGVtZW50XG4gICAgICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZWxlbWVudCwgU0FWRV9QUk9QLCB7XG4gICAgICAgICAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICAgICAgICAgICAgdmFsdWU6IGFkYXB0ZXJcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICByZXR1cm4gYWRhcHRlcihlbGVtZW50KTtcbiAgICAgICAgfVxufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbk55WXk5cGJtTXZZbWx1WkMxaFpHRndkR1Z5TG1weklsMHNJbTVoYldWeklqcGJYU3dpYldGd2NHbHVaM01pT2lJN096czdPenM3T3pzN096czdPenM3T3p0QlFVbEJMRWxCUVUwc1dVRkJXU3hqUVVGYU96dHJRa0ZGVXl4VlFVRkRMRTlCUVVRc1JVRkJZVHM3UVVGRmVFSXNVVUZCU1N4UlFVRlJMRk5CUVZJc1EwRkJTaXhGUVVGM1FqdEJRVU53UWl4bFFVRlBMRkZCUVZFc1UwRkJVaXhEUVVGUU96czdRVUZFYjBJc1MwRkJlRUlzVFVGSlR6dEJRVU5JTEdkQ1FVRkpMRzFDUVVGS096czdRVUZFUnl4blFrRkpReXh0UWtGQmJVSXNWMEZCYmtJc1NVRkJhME1zVVVGQlVTeFBRVUZTTEV0QlFXOUNMRXRCUVhCQ0xFVkJRVEpDTzBGQlF6ZEVPenM3UVVGRU5rUXNZVUZCYWtVc1RVRkpUeXhKUVVGSkxHMUNRVUZ0UWl4VlFVRnVRaXhGUVVFclFqdEJRVU4wUXl4M1FrRkJTU3hSUVVGUkxFOUJRVklzUzBGQmIwSXNUVUZCY0VJc1JVRkJORUk3UVVGRE5VSXNNa1JCUkRSQ08zRkNRVUZvUXl4TlFVVlBPMEZCUTBnc2RVUkJSRWM3Y1VKQlJsQTdhVUpCUkVjN096dEJRVkpLTEd0Q1FXbENTQ3hEUVVGUExHTkJRVkFzUTBGQmMwSXNUMEZCZEVJc1JVRkJLMElzVTBGQkwwSXNSVUZCTUVNN1FVRkRkRU1zTkVKQlFWa3NTMEZCV2p0QlFVTkJMSFZDUVVGUExFOUJRVkE3WVVGR1NpeEZRV3BDUnpzN1FVRnpRa2dzYlVKQlFVOHNVVUZCVVN4UFFVRlNMRU5CUVZBc1EwRjBRa2M3VTBGS1VEdERRVVpYSWl3aVptbHNaU0k2SW1KcGJtUXRZV1JoY0hSbGNpNXFjeUlzSW5OdmRYSmpaVkp2YjNRaU9pSXZWWE5sY25NdlRXRjBkQzlUYVhSbGN5OXdiM0J0YjNScGIyNGlMQ0p6YjNWeVkyVnpRMjl1ZEdWdWRDSTZXeUpwYlhCdmNuUWdZM056UVdSaGNIUmxjaUJtY205dElDY3VMaTloWkdGd2RHVnlMMk56Y3kxaFpHRndkR1Z5Snp0Y2JtbHRjRzl5ZENCemRtZEJaR0Z3ZEdWeUlHWnliMjBnSnk0dUwyRmtZWEIwWlhJdmMzWm5MV0ZrWVhCMFpYSW5PMXh1YVcxd2IzSjBJSE4yWjFCaGRHaEJaR0Z3ZEdWeUlHWnliMjBnSnk0dUwyRmtZWEIwWlhJdmMzWm5MWEJoZEdndFlXUmhjSFJsY2ljN1hHNWNibU52Ym5OMElGTkJWa1ZmVUZKUFVDQTlJQ2RmWDNCdFgyRmtZWEIwWlhJbk8xeHVYRzVsZUhCdmNuUWdaR1ZtWVhWc2RDQW9aV3hsYldWdWRDa2dQVDRnZTF4dUlDQWdJQzh2SUZKbGRIVnliaUJpYjNWdVpDQmhaR0Z3ZEdWeUlHbG1JSEJ5WlhObGJuUmNiaUFnSUNCcFppQW9aV3hsYldWdWRGdFRRVlpGWDFCU1QxQmRLU0I3WEc0Z0lDQWdJQ0FnSUhKbGRIVnliaUJsYkdWdFpXNTBXMU5CVmtWZlVGSlBVRjA3WEc1Y2JpQWdJQ0F2THlCUGNpQmtaWFJsWTNRZ1lXNWtJR0pwYm1RZ1lXUmhjSFJsY2x4dUlDQWdJSDBnWld4elpTQjdYRzRnSUNBZ0lDQWdJR3hsZENCaFpHRndkR1Z5TzF4dVhHNGdJQ0FnSUNBZ0lDOHZJRWxtSUVoVVRVeEZiR1Z0Wlc1MElHeHZZV1FnUTFOVFhHNGdJQ0FnSUNBZ0lHbG1JQ2hsYkdWdFpXNTBJR2x1YzNSaGJtTmxiMllnU0ZSTlRFVnNaVzFsYm5RZ2ZId2daV3hsYldWdWRDNTBZV2RPWVcxbElEMDlQU0FuYzNabkp5a2dlMXh1SUNBZ0lDQWdJQ0FnSUNBZ1lXUmhjSFJsY2lBOUlHTnpjMEZrWVhCMFpYSTdYRzVjYmlBZ0lDQWdJQ0FnTHk4Z1QzSWdVMVpIWEc0Z0lDQWdJQ0FnSUgwZ1pXeHpaU0JwWmlBb1pXeGxiV1Z1ZENCcGJuTjBZVzVqWlc5bUlGTldSMFZzWlcxbGJuUXBJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lHbG1JQ2hsYkdWdFpXNTBMblJoWjA1aGJXVWdQVDA5SUNkd1lYUm9KeWtnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUdGa1lYQjBaWElnUFNCemRtZFFZWFJvUVdSaGNIUmxjanRjYmlBZ0lDQWdJQ0FnSUNBZ0lIMGdaV3h6WlNCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ1lXUmhjSFJsY2lBOUlITjJaMEZrWVhCMFpYSTdYRzRnSUNBZ0lDQWdJQ0FnSUNCOVhHNGdJQ0FnSUNBZ0lIMWNibHh1SUNBZ0lDQWdJQ0F2THlCQ2FXNWtJR0ZrWVhCMFpYSWdkRzhnWld4bGJXVnVkRnh1SUNBZ0lDQWdJQ0JQWW1wbFkzUXVaR1ZtYVc1bFVISnZjR1Z5ZEhrb1pXeGxiV1Z1ZEN3Z1UwRldSVjlRVWs5UUxDQjdYRzRnSUNBZ0lDQWdJQ0FnSUNCbGJuVnRaWEpoWW14bE9pQm1ZV3h6WlN4Y2JpQWdJQ0FnSUNBZ0lDQWdJSFpoYkhWbE9pQmhaR0Z3ZEdWeVhHNGdJQ0FnSUNBZ0lIMHBPMXh1WEc0Z0lDQWdJQ0FnSUhKbGRIVnliaUJoWkdGd2RHVnlLR1ZzWlcxbGJuUXBPMXh1SUNBZ0lIMWNibjA3WEc0aVhYMD1cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2luYy9iaW5kLWFkYXB0ZXIuanNcbiAqKiBtb2R1bGUgaWQgPSA0N1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuLypcbiAgICBEZXRlY3QgYW5kIGxvYWQgYW4gYXBwcm9wcmlhdGUgY2xvY2sgc2V0dGluZyBmb3IgdGhlIGVudmlyb25tZW50XG4qL1xuXG52YXIgaGFzUkFGID0gdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSA/IHRydWUgOiBmYWxzZTtcblxudmFyIHRpY2sgPSB1bmRlZmluZWQ7XG5cbmlmIChoYXNSQUYpIHtcbiAgICB0aWNrID0gZnVuY3Rpb24gKGNhbGxiYWNrKSB7XG4gICAgICAgIHJldHVybiB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKGNhbGxiYWNrKTtcbiAgICB9O1xufSBlbHNlIHtcbiAgICAoZnVuY3Rpb24gKCkge1xuICAgICAgICAvKlxuICAgICAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lIHBvbHlmaWxsXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIEZvciBJRTgvOSBGbGluc3RvbmVzIGFuZCBub24tYnJvd3NlciBlbnZpcm9ubWVudHNcbiAgICAgICAgICAgICBUYWtlbiBmcm9tIFBhdWwgSXJpc2guIFdlJ3ZlIHN0cmlwcGVkIG91dCBjYW5jZWxBbmltYXRpb25GcmFtZSBjaGVja3MgYmVjYXVzZSB3ZSBkb24ndCBmb3ggd2l0aCB0aGF0XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGh0dHA6Ly9wYXVsaXJpc2guY29tLzIwMTEvcmVxdWVzdGFuaW1hdGlvbmZyYW1lLWZvci1zbWFydC1hbmltYXRpbmcvXG4gICAgICAgICAgICBodHRwOi8vbXkub3BlcmEuY29tL2Vtb2xsZXIvYmxvZy8yMDExLzEyLzIwL3JlcXVlc3RhbmltYXRpb25mcmFtZS1mb3Itc21hcnQtZXItYW5pbWF0aW5nXG4gICAgICAgICAgICAgXG4gICAgICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUgcG9seWZpbGwgYnkgRXJpayBNw7ZsbGVyLiBmaXhlcyBmcm9tIFBhdWwgSXJpc2ggYW5kIFRpbm8gWmlqZGVsXG4gICAgICAgICAgICAgXG4gICAgICAgICAgICBNSVQgbGljZW5zZVxuICAgICAgICAqL1xuICAgICAgICB2YXIgbGFzdFRpbWUgPSAwO1xuXG4gICAgICAgIHRpY2sgPSBmdW5jdGlvbiAoY2FsbGJhY2spIHtcbiAgICAgICAgICAgIHZhciBjdXJyZW50VGltZSA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuICAgICAgICAgICAgdmFyIHRpbWVUb0NhbGwgPSBNYXRoLm1heCgwLCAxNiAtIChjdXJyZW50VGltZSAtIGxhc3RUaW1lKSk7XG5cbiAgICAgICAgICAgIGxhc3RUaW1lID0gY3VycmVudFRpbWUgKyB0aW1lVG9DYWxsO1xuXG4gICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gY2FsbGJhY2sobGFzdFRpbWUpO1xuICAgICAgICAgICAgfSwgdGltZVRvQ2FsbCk7XG4gICAgICAgIH07XG4gICAgfSkoKTtcbn1cblxuZXhwb3J0cy5kZWZhdWx0ID0gdGljaztcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbk55WXk5d2NtOWpaWE56TDNScFkyc3Vhbk1pWFN3aWJtRnRaWE1pT2x0ZExDSnRZWEJ3YVc1bmN5STZJanM3T3pzN096dEJRVWxCTEVsQlFVMHNVMEZCVXl4UFFVRlJMRTFCUVZBc1MwRkJhMElzVjBGQmJFSXNTVUZCYVVNc1QwRkJUeXh4UWtGQlVDeEhRVUZuUXl4SlFVRnNSU3hIUVVGNVJTeExRVUY2UlRzN1FVRkZaaXhKUVVGSkxHZENRVUZLT3p0QlFVVkJMRWxCUVVrc1RVRkJTaXhGUVVGWk8wRkJRMUlzVjBGQlR5eFZRVUZETEZGQlFVUTdaVUZCWXl4UFFVRlBMSEZDUVVGUUxFTkJRVFpDTEZGQlFUZENPMHRCUVdRc1EwRkVRenREUVVGYUxFMUJSMDg3T3pzN096czdPenM3T3pzN096dEJRV1ZJTEZsQlFVa3NWMEZCVnl4RFFVRllPenRCUVVWS0xHVkJRVThzVlVGQlF5eFJRVUZFTEVWQlFXTTdRVUZEYWtJc1owSkJRVTBzWTBGQll5eEpRVUZKTEVsQlFVb3NSMEZCVnl4UFFVRllMRVZCUVdRc1EwRkVWenRCUVVWcVFpeG5Ra0ZCVFN4aFFVRmhMRXRCUVVzc1IwRkJUQ3hEUVVGVExFTkJRVlFzUlVGQldTeE5RVUZOTEdOQlFXTXNVVUZCWkN4RFFVRk9MRU5CUVhwQ0xFTkJSbGM3TzBGQlNXcENMSFZDUVVGWExHTkJRV01zVlVGQlpDeERRVXBOT3p0QlFVMXFRaXgxUWtGQlZ6dDFRa0ZCVFN4VFFVRlRMRkZCUVZRN1lVRkJUaXhGUVVFd1FpeFZRVUZ5UXl4RlFVNXBRanRUUVVGa08xTkJha0pLTzBOQlNGQTdPMnRDUVRoQ1pTSXNJbVpwYkdVaU9pSjBhV05yTG1weklpd2ljMjkxY21ObFVtOXZkQ0k2SWk5VmMyVnljeTlOWVhSMEwxTnBkR1Z6TDNCdmNHMXZkR2x2YmlJc0luTnZkWEpqWlhORGIyNTBaVzUwSWpwYklpOHFYRzRnSUNBZ1JHVjBaV04wSUdGdVpDQnNiMkZrSUdGdUlHRndjSEp2Y0hKcFlYUmxJR05zYjJOcklITmxkSFJwYm1jZ1ptOXlJSFJvWlNCbGJuWnBjbTl1YldWdWRGeHVLaTljYmx4dVkyOXVjM1FnYUdGelVrRkdJRDBnS0hSNWNHVnZaaUIzYVc1a2IzY2dJVDA5SUNkMWJtUmxabWx1WldRbklDWW1JSGRwYm1SdmR5NXlaWEYxWlhOMFFXNXBiV0YwYVc5dVJuSmhiV1VwSUQ4Z2RISjFaU0E2SUdaaGJITmxPMXh1WEc1c1pYUWdkR2xqYXp0Y2JseHVhV1lnS0doaGMxSkJSaWtnZTF4dUlDQWdJSFJwWTJzZ1BTQW9ZMkZzYkdKaFkyc3BJRDArSUhkcGJtUnZkeTV5WlhGMVpYTjBRVzVwYldGMGFXOXVSbkpoYldVb1kyRnNiR0poWTJzcE8xeHVYRzU5SUdWc2MyVWdlMXh1SUNBZ0lDOHFYRzRnSUNBZ0lDQWdJSEpsY1hWbGMzUkJibWx0WVhScGIyNUdjbUZ0WlNCd2IyeDVabWxzYkZ4dUlDQWdJQ0FnSUNCY2JpQWdJQ0FnSUNBZ1JtOXlJRWxGT0M4NUlFWnNhVzV6ZEc5dVpYTWdZVzVrSUc1dmJpMWljbTkzYzJWeUlHVnVkbWx5YjI1dFpXNTBjMXh1WEc0Z0lDQWdJQ0FnSUZSaGEyVnVJR1p5YjIwZ1VHRjFiQ0JKY21semFDNGdWMlVuZG1VZ2MzUnlhWEJ3WldRZ2IzVjBJR05oYm1ObGJFRnVhVzFoZEdsdmJrWnlZVzFsSUdOb1pXTnJjeUJpWldOaGRYTmxJSGRsSUdSdmJpZDBJR1p2ZUNCM2FYUm9JSFJvWVhSY2JpQWdJQ0FnSUNBZ1hHNGdJQ0FnSUNBZ0lHaDBkSEE2THk5d1lYVnNhWEpwYzJndVkyOXRMekl3TVRFdmNtVnhkV1Z6ZEdGdWFXMWhkR2x2Ym1aeVlXMWxMV1p2Y2kxemJXRnlkQzFoYm1sdFlYUnBibWN2WEc0Z0lDQWdJQ0FnSUdoMGRIQTZMeTl0ZVM1dmNHVnlZUzVqYjIwdlpXMXZiR3hsY2k5aWJHOW5Mekl3TVRFdk1USXZNakF2Y21WeGRXVnpkR0Z1YVcxaGRHbHZibVp5WVcxbExXWnZjaTF6YldGeWRDMWxjaTFoYm1sdFlYUnBibWRjYmlBZ0lDQWdJQ0FnSUZ4dUlDQWdJQ0FnSUNCeVpYRjFaWE4wUVc1cGJXRjBhVzl1Um5KaGJXVWdjRzlzZVdacGJHd2dZbmtnUlhKcGF5Qk53N1pzYkdWeUxpQm1hWGhsY3lCbWNtOXRJRkJoZFd3Z1NYSnBjMmdnWVc1a0lGUnBibThnV21scVpHVnNYRzRnSUNBZ0lDQWdJQ0JjYmlBZ0lDQWdJQ0FnVFVsVUlHeHBZMlZ1YzJWY2JpQWdJQ0FxTDF4dUlDQWdJR3hsZENCc1lYTjBWR2x0WlNBOUlEQTdYRzVjYmlBZ0lDQjBhV05ySUQwZ0tHTmhiR3hpWVdOcktTQTlQaUI3WEc0Z0lDQWdJQ0FnSUdOdmJuTjBJR04xY25KbGJuUlVhVzFsSUQwZ2JtVjNJRVJoZEdVb0tTNW5aWFJVYVcxbEtDazdYRzRnSUNBZ0lDQWdJR052Ym5OMElIUnBiV1ZVYjBOaGJHd2dQU0JOWVhSb0xtMWhlQ2d3TENBeE5pQXRJQ2hqZFhKeVpXNTBWR2x0WlNBdElHeGhjM1JVYVcxbEtTazdYRzVjYmlBZ0lDQWdJQ0FnYkdGemRGUnBiV1VnUFNCamRYSnlaVzUwVkdsdFpTQXJJSFJwYldWVWIwTmhiR3c3WEc1Y2JpQWdJQ0FnSUNBZ2MyVjBWR2x0Wlc5MWRDZ29LU0E5UGlCallXeHNZbUZqYXloc1lYTjBWR2x0WlNrc0lIUnBiV1ZVYjBOaGJHd3BPMXh1SUNBZ0lIMDdYRzU5WEc1Y2JtVjRjRzl5ZENCa1pXWmhkV3gwSUhScFkyczdJbDE5XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9wcm9jZXNzL3RpY2suanNcbiAqKiBtb2R1bGUgaWQgPSA0OFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG4vLyBbaW50XTogSW5jcmVtZW50ZWQgZm9yIGVhY2ggbmV3IHJ1bm5pbmcgcHJvY2Vzc1xudmFyIGN1cnJlbnRQcm9jZXNzSWQgPSAwO1xuXG4vLyBbaW50XTogTnVtYmVyIG9mIGFsbCBydW5uaW5nIHByb2Nlc3Nlc1xudmFyIHRvdGFsUnVubmluZ0NvdW50ID0gMDtcblxuLy8gW2ludF06IE51bWJlciBvZiBydW5uaW5nIHByb2Nlc3NlcyBleGNsdWRpbmcgYmFja2dyb3VuZCBwcm9jZXNzZXNcbnZhciBub25CYWNrZ3JvdW5kUnVubmluZ0NvdW50ID0gMDtcblxuLy8gW2FycmF5XTogQXJyYXkgb2YgcnVubmluZyBwcm9jZXNzIElEc1xudmFyIHJ1bm5pbmdJZHMgPSBbXTtcblxuLy8gW29iamVjdF06IE1hcCBvZiBydW5uaW5nIHByb2Nlc3Nlc1xudmFyIGFjdGl2ZVByb2Nlc3NlcyA9IHt9O1xuXG4vLyBbYXJyYXldOiBBcnJheSBvZiBwcm9jZXNzIElEcyBxdWV1ZWQgZm9yIGFjdGl2YXRpb25cbnZhciBhY3RpdmF0ZVF1ZXVlID0gW107XG5cbi8vIFthcnJheV06IEFycmF5IG9mIHByb2Nlc3MgSURzIHF1ZXVlZCBmb3IgZGVhY3RpdmF0aW9uXG52YXIgZGVhY3RpdmF0ZVF1ZXVlID0gW107XG5cbi8qXG4gICAgVXBkYXRlIGFjdGl2YXRlL2RlYWN0aXZhdGUgcXVldWVzXG5cbiAgICBAcGFyYW0gW251bWJlcl1cbiAgICBAcGFyYW0gW2FycmF5XVxuICAgIEBwYXJhbSBbYXJyYXldXG4qL1xudmFyIHVwZGF0ZVF1ZXVlcyA9IGZ1bmN0aW9uIChpZCwgaW5MaXN0LCBvdXRMaXN0KSB7XG4gICAgdmFyIGluUG9zaXRpb24gPSBpbkxpc3QuaW5kZXhPZihpZCk7XG4gICAgdmFyIG91dFBvc2l0aW9uID0gb3V0TGlzdC5pbmRleE9mKGlkKTtcblxuICAgIGlmIChpblBvc2l0aW9uID09PSAtMSkge1xuICAgICAgICBpbkxpc3QucHVzaChpZCk7XG4gICAgfVxuXG4gICAgaWYgKG91dFBvc2l0aW9uID4gLTEpIHtcbiAgICAgICAgb3V0TGlzdC5zcGxpY2Uob3V0UG9zaXRpb24sIDEpO1xuICAgIH1cbn07XG5cbi8qXG4gICAgVXBkYXRlIHJ1bm5pbmdcblxuICAgIFtib29sZWFuXTogYHRydWVgIHRvIGFkZFxuICAgIFtib29sZWFuXTogYHRydWVgIGlmIGxhenlcbiovXG52YXIgdXBkYXRlUnVubmluZ0NvdW50ID0gZnVuY3Rpb24gKGFkZCwgaXNMYXp5KSB7XG4gICAgdmFyIG1vZGlmeSA9IGFkZCA/IDEgOiAtMTtcblxuICAgIHRvdGFsUnVubmluZ0NvdW50ICs9IG1vZGlmeTtcblxuICAgIGlmICghaXNMYXp5KSB7XG4gICAgICAgIG5vbkJhY2tncm91bmRSdW5uaW5nQ291bnQgKz0gbW9kaWZ5O1xuICAgIH1cbn07XG5cbmV4cG9ydHMuZGVmYXVsdCA9IHtcbiAgICBhY3RpdmVQcm9jZXNzZXM6IGFjdGl2ZVByb2Nlc3NlcyxcblxuICAgIC8vIEFjdGl2YXRlIGEgcHJvY2Vzc1xuICAgIGFjdGl2YXRlOiBmdW5jdGlvbiAoaWQsIHByb2Nlc3MpIHtcbiAgICAgICAgYWN0aXZlUHJvY2Vzc2VzW2lkXSA9IHByb2Nlc3M7XG4gICAgICAgIHByb2Nlc3MuaXNBY3RpdmUgPSB0cnVlO1xuICAgICAgICB1cGRhdGVRdWV1ZXMoaWQsIGFjdGl2YXRlUXVldWUsIGRlYWN0aXZhdGVRdWV1ZSk7XG4gICAgfSxcblxuICAgIC8vIERlYWN0aXZhdGUgYSBwcm9jZXNzXG4gICAgZGVhY3RpdmF0ZTogZnVuY3Rpb24gKGlkKSB7XG4gICAgICAgIHByb2Nlc3MuaXNBY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgdXBkYXRlUXVldWVzKGlkLCBkZWFjdGl2YXRlUXVldWUsIGFjdGl2YXRlUXVldWUpO1xuICAgIH0sXG5cbiAgICAvLyBOdW1iZXIgYmFja2dyb3VuZCBwcm9jZXNzZXNcbiAgICBnZXROb25CYWNrZ3JvdW5kUnVubmluZ0NvdW50OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBub25CYWNrZ3JvdW5kUnVubmluZ0NvdW50O1xuICAgIH0sXG5cbiAgICAvLyBJbmNyZW1lbnQgY3VycmVudCBwcm9jZXNzIElEIGFuZCByZXR1cm5cbiAgICBnZXRQcm9jZXNzSWQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIGN1cnJlbnRQcm9jZXNzSWQrKztcbiAgICB9LFxuXG4gICAgLy8gUmVzb2x2ZSBhY3RpdmF0ZS9kZWFjdGl2YXRlIHByb2Nlc3NlcyBhbmQgcmV0dXJuIGFjdGl2ZSBpZHNcbiAgICBnZXRBY3RpdmVJZHM6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgLypcbiAgICAgICAgICAgIFByb2Nlc3MgZGVhY3RpdmF0ZSBxdWV1ZVxuICAgICAgICAqL1xuICAgICAgICB2YXIgZGVhY3RpdmF0ZVF1ZXVlTGVuZ3RoID0gZGVhY3RpdmF0ZVF1ZXVlLmxlbmd0aDtcblxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGRlYWN0aXZhdGVRdWV1ZUxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgaWQgPSBkZWFjdGl2YXRlUXVldWVbaV07XG4gICAgICAgICAgICB2YXIgYWN0aXZlSWRJbmRleCA9IHJ1bm5pbmdJZHMuaW5kZXhPZihpZCk7XG4gICAgICAgICAgICB2YXIgX3Byb2Nlc3MgPSBhY3RpdmVQcm9jZXNzZXNbaWRdO1xuXG4gICAgICAgICAgICAvLyBJZiB0aGlzIGlzIGEgcnVubmluZyBwcm9jZXNzLCBkZWFjdGl2YXRlXG4gICAgICAgICAgICBpZiAoYWN0aXZlSWRJbmRleCA+IC0xKSB7XG4gICAgICAgICAgICAgICAgcnVubmluZ0lkcy5zcGxpY2UoYWN0aXZlSWRJbmRleCwgMSk7XG4gICAgICAgICAgICAgICAgdXBkYXRlUnVubmluZ0NvdW50KGZhbHNlLCBfcHJvY2Vzcy5pc0xhenkpO1xuICAgICAgICAgICAgICAgIGRlbGV0ZSBhY3RpdmVQcm9jZXNzZXNbaWRdO1xuXG4gICAgICAgICAgICAgICAgaWYgKF9wcm9jZXNzLm9uRGVhY3RpdmF0ZSkge1xuICAgICAgICAgICAgICAgICAgICBfcHJvY2Vzcy5vbkRlYWN0aXZhdGUoX3Byb2Nlc3MpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8qXG4gICAgICAgICAgICBFbXB0eSBkZWFjdGl2YXRlIHF1ZXVlLiBXZSB1c2UgYEFycmF5LnNwbGljZWAgYmVjYXVzZSBpdCBkb2Vzbid0XG4gICAgICAgICAgICB3b3JrcyBvbiB0aGUgb3JpZ2luYWwgYXJyYXkgc28gd2UgZG9uJ3QgaGF2ZSB0byBnYXJiYWdlIGNvbGxlY3QgYW55dGhpbmdcbiAgICAgICAgKi9cbiAgICAgICAgZGVhY3RpdmF0ZVF1ZXVlLnNwbGljZSgwLCBkZWFjdGl2YXRlUXVldWVMZW5ndGgpO1xuXG4gICAgICAgIC8qXG4gICAgICAgICAgICBQcm9jZXNzIGFjdGl2YXRlIHF1ZXVlXG4gICAgICAgICovXG4gICAgICAgIHZhciBhY3RpdmF0ZVF1ZXVlTGVuZ3RoID0gYWN0aXZhdGVRdWV1ZS5sZW5ndGg7XG5cbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhY3RpdmF0ZVF1ZXVlTGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHZhciBpZCA9IGFjdGl2YXRlUXVldWVbaV07XG4gICAgICAgICAgICB2YXIgYWN0aXZlSWRJbmRleCA9IHJ1bm5pbmdJZHMuaW5kZXhPZihpZCk7XG4gICAgICAgICAgICB2YXIgX3Byb2Nlc3MyID0gYWN0aXZlUHJvY2Vzc2VzW2lkXTtcblxuICAgICAgICAgICAgLy8gSWYgcHJvY2VzcyBpc24ndCBhbHJlYWR5IHJ1bm5pbmcsIGFjdGl2YXRlXG4gICAgICAgICAgICBpZiAoYWN0aXZlSWRJbmRleCA9PT0gLTEgJiYgX3Byb2Nlc3MyKSB7XG4gICAgICAgICAgICAgICAgaWYgKF9wcm9jZXNzMi5pc1ByaW9yaXR5KSB7XG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmdJZHMudW5zaGlmdChpZCk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ0lkcy5wdXNoKGlkKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB1cGRhdGVSdW5uaW5nQ291bnQodHJ1ZSwgX3Byb2Nlc3MyLmlzTGF6eSk7XG5cbiAgICAgICAgICAgICAgICBpZiAoX3Byb2Nlc3MyLm9uQWN0aXZhdGUpIHtcbiAgICAgICAgICAgICAgICAgICAgX3Byb2Nlc3MyLm9uQWN0aXZhdGUoX3Byb2Nlc3MyKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBhY3RpdmF0ZVF1ZXVlLnNwbGljZSgwLCBhY3RpdmF0ZVF1ZXVlTGVuZ3RoKTtcblxuICAgICAgICByZXR1cm4gcnVubmluZ0lkcztcbiAgICB9XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluTnlZeTl3Y205alpYTnpMMjFoYm1GblpYSXVhbk1pWFN3aWJtRnRaWE1pT2x0ZExDSnRZWEJ3YVc1bmN5STZJanM3T3p0QlFVTkJMRWxCUVVrc2JVSkJRVzFDTEVOQlFXNUNPenM3UVVGSFNpeEpRVUZKTEc5Q1FVRnZRaXhEUVVGd1FqczdPMEZCUjBvc1NVRkJTU3cwUWtGQk5FSXNRMEZCTlVJN096dEJRVWRLTEVsQlFVMHNZVUZCWVN4RlFVRmlPenM3UVVGSFRpeEpRVUZOTEd0Q1FVRnJRaXhGUVVGc1FqczdPMEZCUjA0c1NVRkJUU3huUWtGQlowSXNSVUZCYUVJN096dEJRVWRPTEVsQlFVMHNhMEpCUVd0Q0xFVkJRV3hDT3pzN096czdPenM3UVVGVFRpeEpRVUZOTEdWQlFXVXNWVUZCUXl4RlFVRkVMRVZCUVVzc1RVRkJUQ3hGUVVGaExFOUJRV0lzUlVGQmVVSTdRVUZETVVNc1VVRkJUU3hoUVVGaExFOUJRVThzVDBGQlVDeERRVUZsTEVWQlFXWXNRMEZCWWl4RFFVUnZRenRCUVVVeFF5eFJRVUZOTEdOQlFXTXNVVUZCVVN4UFFVRlNMRU5CUVdkQ0xFVkJRV2hDTEVOQlFXUXNRMEZHYjBNN08wRkJTVEZETEZGQlFVa3NaVUZCWlN4RFFVRkRMRU5CUVVRc1JVRkJTVHRCUVVOdVFpeGxRVUZQTEVsQlFWQXNRMEZCV1N4RlFVRmFMRVZCUkcxQ08wdEJRWFpDT3p0QlFVbEJMRkZCUVVrc1kwRkJZeXhEUVVGRExFTkJRVVFzUlVGQlNUdEJRVU5zUWl4blFrRkJVU3hOUVVGU0xFTkJRV1VzVjBGQlppeEZRVUUwUWl4RFFVRTFRaXhGUVVSclFqdExRVUYwUWp0RFFWSnBRanM3T3pzN096czdRVUZ0UW5KQ0xFbEJRVTBzY1VKQlFYRkNMRlZCUVVNc1IwRkJSQ3hGUVVGTkxFMUJRVTRzUlVGQmFVSTdRVUZEZUVNc1VVRkJUU3hUUVVGVExFMUJRVTBzUTBGQlRpeEhRVUZWTEVOQlFVTXNRMEZCUkN4RFFVUmxPenRCUVVkNFF5eDVRa0ZCY1VJc1RVRkJja0lzUTBGSWQwTTdPMEZCUzNoRExGRkJRVWtzUTBGQlF5eE5RVUZFTEVWQlFWTTdRVUZEVkN4eFEwRkJOa0lzVFVGQk4wSXNRMEZFVXp0TFFVRmlPME5CVEhWQ096dHJRa0ZWV2p0QlFVTllMRzlEUVVSWE96czdRVUZKV0N4alFVRlZMRlZCUVVNc1JVRkJSQ3hGUVVGTExFOUJRVXdzUlVGQmFVSTdRVUZEZGtJc2QwSkJRV2RDTEVWQlFXaENMRWxCUVhOQ0xFOUJRWFJDTEVOQlJIVkNPMEZCUlhaQ0xHZENRVUZSTEZGQlFWSXNSMEZCYlVJc1NVRkJia0lzUTBGR2RVSTdRVUZIZGtJc2NVSkJRV0VzUlVGQllpeEZRVUZwUWl4aFFVRnFRaXhGUVVGblF5eGxRVUZvUXl4RlFVaDFRanRMUVVGcVFqczdPMEZCVDFZc1owSkJRVmtzVlVGQlF5eEZRVUZFTEVWQlFWRTdRVUZEYUVJc1owSkJRVkVzVVVGQlVpeEhRVUZ0UWl4TFFVRnVRaXhEUVVSblFqdEJRVVZvUWl4eFFrRkJZU3hGUVVGaUxFVkJRV2xDTEdWQlFXcENMRVZCUVd0RExHRkJRV3hETEVWQlJtZENPMHRCUVZJN096dEJRVTFhTEd0RFFVRTRRanRsUVVGTk8wdEJRVTQ3T3p0QlFVYzVRaXhyUWtGQll6dGxRVUZOTzB0QlFVNDdPenRCUVVka0xHdENRVUZqTEZsQlFVMDdPenM3UVVGSmFFSXNXVUZCVFN4M1FrRkJkMElzWjBKQlFXZENMRTFCUVdoQ0xFTkJTbVE3TzBGQlRXaENMR0ZCUVVzc1NVRkJTU3hKUVVGSkxFTkJRVW9zUlVGQlR5eEpRVUZKTEhGQ1FVRktMRVZCUVRKQ0xFZEJRVE5ETEVWQlFXZEVPMEZCUXpWRExHZENRVUZOTEV0QlFVc3NaMEpCUVdkQ0xFTkJRV2hDTEVOQlFVd3NRMEZFYzBNN1FVRkZOVU1zWjBKQlFVMHNaMEpCUVdkQ0xGZEJRVmNzVDBGQldDeERRVUZ0UWl4RlFVRnVRaXhEUVVGb1FpeERRVVp6UXp0QlFVYzFReXhuUWtGQlRTeFhRVUZWTEdkQ1FVRm5RaXhGUVVGb1FpeERRVUZXT3pzN1FVRkljME1zWjBKQlRYaERMR2RDUVVGblFpeERRVUZETEVOQlFVUXNSVUZCU1R0QlFVTndRaXd5UWtGQlZ5eE5RVUZZTEVOQlFXdENMR0ZCUVd4Q0xFVkJRV2xETEVOQlFXcERMRVZCUkc5Q08wRkJSWEJDTEcxRFFVRnRRaXhMUVVGdVFpeEZRVUV3UWl4VFFVRlJMRTFCUVZJc1EwRkJNVUlzUTBGR2IwSTdRVUZIY0VJc2RVSkJRVThzWjBKQlFXZENMRVZCUVdoQ0xFTkJRVkFzUTBGSWIwSTdPMEZCUzNCQ0xHOUNRVUZKTEZOQlFWRXNXVUZCVWl4RlFVRnpRanRCUVVOMFFpdzJRa0ZCVVN4WlFVRlNMRU5CUVhGQ0xGRkJRWEpDTEVWQlJITkNPMmxDUVVFeFFqdGhRVXhLTzFOQlRrbzdPenM3T3p0QlFVNW5RaXgxUWtFeVFtaENMRU5CUVdkQ0xFMUJRV2hDTEVOQlFYVkNMRU5CUVhaQ0xFVkJRVEJDTEhGQ1FVRXhRanM3T3pzN1FVRXpRbWRDTEZsQlowTldMSE5DUVVGelFpeGpRVUZqTEUxQlFXUXNRMEZvUTFvN08wRkJhME5vUWl4aFFVRkxMRWxCUVVrc1NVRkJTU3hEUVVGS0xFVkJRVThzU1VGQlNTeHRRa0ZCU2l4RlFVRjVRaXhIUVVGNlF5eEZRVUU0UXp0QlFVTXhReXhuUWtGQlRTeExRVUZMTEdOQlFXTXNRMEZCWkN4RFFVRk1MRU5CUkc5RE8wRkJSVEZETEdkQ1FVRk5MR2RDUVVGblFpeFhRVUZYTEU5QlFWZ3NRMEZCYlVJc1JVRkJia0lzUTBGQmFFSXNRMEZHYjBNN1FVRkhNVU1zWjBKQlFVMHNXVUZCVlN4blFrRkJaMElzUlVGQmFFSXNRMEZCVmpzN08wRkJTRzlETEdkQ1FVMTBReXhyUWtGQmEwSXNRMEZCUXl4RFFVRkVMRWxCUVUwc1UwRkJlRUlzUlVGQmFVTTdRVUZEYWtNc2IwSkJRVWtzVlVGQlVTeFZRVUZTTEVWQlFXOUNPMEZCUTNCQ0xDdENRVUZYTEU5QlFWZ3NRMEZCYlVJc1JVRkJia0lzUlVGRWIwSTdhVUpCUVhoQ0xFMUJSVTg3UVVGRFNDd3JRa0ZCVnl4SlFVRllMRU5CUVdkQ0xFVkJRV2hDTEVWQlJFYzdhVUpCUmxBN08wRkJUVUVzYlVOQlFXMUNMRWxCUVc1Q0xFVkJRWGxDTEZWQlFWRXNUVUZCVWl4RFFVRjZRaXhEUVZCcFF6czdRVUZUYWtNc2IwSkJRVWtzVlVGQlVTeFZRVUZTTEVWQlFXOUNPMEZCUTNCQ0xEaENRVUZSTEZWQlFWSXNRMEZCYlVJc1UwRkJia0lzUlVGRWIwSTdhVUpCUVhoQ08yRkJWRW83VTBGT1NqczdRVUZ4UWtFc2MwSkJRV01zVFVGQlpDeERRVUZ4UWl4RFFVRnlRaXhGUVVGM1FpeHRRa0ZCZUVJc1JVRjJSR2RDT3p0QlFYbEVhRUlzWlVGQlR5eFZRVUZRTEVOQmVrUm5RanRMUVVGT0lpd2labWxzWlNJNkltMWhibUZuWlhJdWFuTWlMQ0p6YjNWeVkyVlNiMjkwSWpvaUwxVnpaWEp6TDAxaGRIUXZVMmwwWlhNdmNHOXdiVzkwYVc5dUlpd2ljMjkxY21ObGMwTnZiblJsYm5RaU9sc2lMeThnVzJsdWRGMDZJRWx1WTNKbGJXVnVkR1ZrSUdadmNpQmxZV05vSUc1bGR5QnlkVzV1YVc1bklIQnliMk5sYzNOY2JteGxkQ0JqZFhKeVpXNTBVSEp2WTJWemMwbGtJRDBnTUR0Y2JseHVMeThnVzJsdWRGMDZJRTUxYldKbGNpQnZaaUJoYkd3Z2NuVnVibWx1WnlCd2NtOWpaWE56WlhOY2JteGxkQ0IwYjNSaGJGSjFibTVwYm1kRGIzVnVkQ0E5SURBN1hHNWNiaTh2SUZ0cGJuUmRPaUJPZFcxaVpYSWdiMllnY25WdWJtbHVaeUJ3Y205alpYTnpaWE1nWlhoamJIVmthVzVuSUdKaFkydG5jbTkxYm1RZ2NISnZZMlZ6YzJWelhHNXNaWFFnYm05dVFtRmphMmR5YjNWdVpGSjFibTVwYm1kRGIzVnVkQ0E5SURBN1hHNWNiaTh2SUZ0aGNuSmhlVjA2SUVGeWNtRjVJRzltSUhKMWJtNXBibWNnY0hKdlkyVnpjeUJKUkhOY2JtTnZibk4wSUhKMWJtNXBibWRKWkhNZ1BTQmJYVHRjYmx4dUx5OGdXMjlpYW1WamRGMDZJRTFoY0NCdlppQnlkVzV1YVc1bklIQnliMk5sYzNObGMxeHVZMjl1YzNRZ1lXTjBhWFpsVUhKdlkyVnpjMlZ6SUQwZ2UzMDdYRzVjYmk4dklGdGhjbkpoZVYwNklFRnljbUY1SUc5bUlIQnliMk5sYzNNZ1NVUnpJSEYxWlhWbFpDQm1iM0lnWVdOMGFYWmhkR2x2Ymx4dVkyOXVjM1FnWVdOMGFYWmhkR1ZSZFdWMVpTQTlJRnRkTzF4dVhHNHZMeUJiWVhKeVlYbGRPaUJCY25KaGVTQnZaaUJ3Y205alpYTnpJRWxFY3lCeGRXVjFaV1FnWm05eUlHUmxZV04wYVhaaGRHbHZibHh1WTI5dWMzUWdaR1ZoWTNScGRtRjBaVkYxWlhWbElEMGdXMTA3WEc1Y2JpOHFYRzRnSUNBZ1ZYQmtZWFJsSUdGamRHbDJZWFJsTDJSbFlXTjBhWFpoZEdVZ2NYVmxkV1Z6WEc1Y2JpQWdJQ0JBY0dGeVlXMGdXMjUxYldKbGNsMWNiaUFnSUNCQWNHRnlZVzBnVzJGeWNtRjVYVnh1SUNBZ0lFQndZWEpoYlNCYllYSnlZWGxkWEc0cUwxeHVZMjl1YzNRZ2RYQmtZWFJsVVhWbGRXVnpJRDBnS0dsa0xDQnBia3hwYzNRc0lHOTFkRXhwYzNRcElEMCtJSHRjYmlBZ0lDQmpiMjV6ZENCcGJsQnZjMmwwYVc5dUlEMGdhVzVNYVhOMExtbHVaR1Y0VDJZb2FXUXBPMXh1SUNBZ0lHTnZibk4wSUc5MWRGQnZjMmwwYVc5dUlEMGdiM1YwVEdsemRDNXBibVJsZUU5bUtHbGtLVHRjYmx4dUlDQWdJR2xtSUNocGJsQnZjMmwwYVc5dUlEMDlQU0F0TVNrZ2UxeHVJQ0FnSUNBZ0lDQnBia3hwYzNRdWNIVnphQ2hwWkNrN1hHNGdJQ0FnZlZ4dVhHNGdJQ0FnYVdZZ0tHOTFkRkJ2YzJsMGFXOXVJRDRnTFRFcElIdGNiaUFnSUNBZ0lDQWdiM1YwVEdsemRDNXpjR3hwWTJVb2IzVjBVRzl6YVhScGIyNHNJREVwTzF4dUlDQWdJSDFjYm4wN1hHNWNiaThxWEc0Z0lDQWdWWEJrWVhSbElISjFibTVwYm1kY2JseHVJQ0FnSUZ0aWIyOXNaV0Z1WFRvZ1lIUnlkV1ZnSUhSdklHRmtaRnh1SUNBZ0lGdGliMjlzWldGdVhUb2dZSFJ5ZFdWZ0lHbG1JR3hoZW5sY2Jpb3ZYRzVqYjI1emRDQjFjR1JoZEdWU2RXNXVhVzVuUTI5MWJuUWdQU0FvWVdSa0xDQnBjMHhoZW5rcElEMCtJSHRjYmlBZ0lDQmpiMjV6ZENCdGIyUnBabmtnUFNCaFpHUWdQeUF4SURvZ0xURTdYRzVjYmlBZ0lDQjBiM1JoYkZKMWJtNXBibWREYjNWdWRDQXJQU0J0YjJScFpuazdYRzVjYmlBZ0lDQnBaaUFvSVdselRHRjZlU2tnZTF4dUlDQWdJQ0FnSUNCdWIyNUNZV05yWjNKdmRXNWtVblZ1Ym1sdVowTnZkVzUwSUNzOUlHMXZaR2xtZVR0Y2JpQWdJQ0I5WEc1OU8xeHVYRzVsZUhCdmNuUWdaR1ZtWVhWc2RDQjdYRzRnSUNBZ1lXTjBhWFpsVUhKdlkyVnpjMlZ6TEZ4dVhHNGdJQ0FnTHk4Z1FXTjBhWFpoZEdVZ1lTQndjbTlqWlhOelhHNGdJQ0FnWVdOMGFYWmhkR1U2SUNocFpDd2djSEp2WTJWemN5a2dQVDRnZTF4dUlDQWdJQ0FnSUNCaFkzUnBkbVZRY205alpYTnpaWE5iYVdSZElEMGdjSEp2WTJWemN6dGNiaUFnSUNBZ0lDQWdjSEp2WTJWemN5NXBjMEZqZEdsMlpTQTlJSFJ5ZFdVN1hHNGdJQ0FnSUNBZ0lIVndaR0YwWlZGMVpYVmxjeWhwWkN3Z1lXTjBhWFpoZEdWUmRXVjFaU3dnWkdWaFkzUnBkbUYwWlZGMVpYVmxLVHRjYmlBZ0lDQjlMRnh1WEc0Z0lDQWdMeThnUkdWaFkzUnBkbUYwWlNCaElIQnliMk5sYzNOY2JpQWdJQ0JrWldGamRHbDJZWFJsT2lBb2FXUXBJRDArSUh0Y2JpQWdJQ0FnSUNBZ2NISnZZMlZ6Y3k1cGMwRmpkR2wyWlNBOUlHWmhiSE5sTzF4dUlDQWdJQ0FnSUNCMWNHUmhkR1ZSZFdWMVpYTW9hV1FzSUdSbFlXTjBhWFpoZEdWUmRXVjFaU3dnWVdOMGFYWmhkR1ZSZFdWMVpTazdYRzRnSUNBZ2ZTeGNibHh1SUNBZ0lDOHZJRTUxYldKbGNpQmlZV05yWjNKdmRXNWtJSEJ5YjJObGMzTmxjMXh1SUNBZ0lHZGxkRTV2YmtKaFkydG5jbTkxYm1SU2RXNXVhVzVuUTI5MWJuUTZJQ2dwSUQwK0lHNXZia0poWTJ0bmNtOTFibVJTZFc1dWFXNW5RMjkxYm5Rc1hHNWNiaUFnSUNBdkx5QkpibU55WlcxbGJuUWdZM1Z5Y21WdWRDQndjbTlqWlhOeklFbEVJR0Z1WkNCeVpYUjFjbTVjYmlBZ0lDQm5aWFJRY205alpYTnpTV1E2SUNncElEMCtJR04xY25KbGJuUlFjbTlqWlhOelNXUXJLeXhjYmx4dUlDQWdJQzh2SUZKbGMyOXNkbVVnWVdOMGFYWmhkR1V2WkdWaFkzUnBkbUYwWlNCd2NtOWpaWE56WlhNZ1lXNWtJSEpsZEhWeWJpQmhZM1JwZG1VZ2FXUnpYRzRnSUNBZ1oyVjBRV04wYVhabFNXUnpPaUFvS1NBOVBpQjdYRzRnSUNBZ0lDQWdJQzhxWEc0Z0lDQWdJQ0FnSUNBZ0lDQlFjbTlqWlhOeklHUmxZV04wYVhaaGRHVWdjWFZsZFdWY2JpQWdJQ0FnSUNBZ0tpOWNiaUFnSUNBZ0lDQWdZMjl1YzNRZ1pHVmhZM1JwZG1GMFpWRjFaWFZsVEdWdVozUm9JRDBnWkdWaFkzUnBkbUYwWlZGMVpYVmxMbXhsYm1kMGFEdGNibHh1SUNBZ0lDQWdJQ0JtYjNJZ0tHeGxkQ0JwSUQwZ01Ec2dhU0E4SUdSbFlXTjBhWFpoZEdWUmRXVjFaVXhsYm1kMGFEc2dhU3NyS1NCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0JqYjI1emRDQnBaQ0E5SUdSbFlXTjBhWFpoZEdWUmRXVjFaVnRwWFR0Y2JpQWdJQ0FnSUNBZ0lDQWdJR052Ym5OMElHRmpkR2wyWlVsa1NXNWtaWGdnUFNCeWRXNXVhVzVuU1dSekxtbHVaR1Y0VDJZb2FXUXBPMXh1SUNBZ0lDQWdJQ0FnSUNBZ1kyOXVjM1FnY0hKdlkyVnpjeUE5SUdGamRHbDJaVkJ5YjJObGMzTmxjMXRwWkYwN1hHNWNiaUFnSUNBZ0lDQWdJQ0FnSUM4dklFbG1JSFJvYVhNZ2FYTWdZU0J5ZFc1dWFXNW5JSEJ5YjJObGMzTXNJR1JsWVdOMGFYWmhkR1ZjYmlBZ0lDQWdJQ0FnSUNBZ0lHbG1JQ2hoWTNScGRtVkpaRWx1WkdWNElENGdMVEVwSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCeWRXNXVhVzVuU1dSekxuTndiR2xqWlNoaFkzUnBkbVZKWkVsdVpHVjRMQ0F4S1R0Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCMWNHUmhkR1ZTZFc1dWFXNW5RMjkxYm5Rb1ptRnNjMlVzSUhCeWIyTmxjM011YVhOTVlYcDVLVHRjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0JrWld4bGRHVWdZV04wYVhabFVISnZZMlZ6YzJWelcybGtYVHRjYmx4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUdsbUlDaHdjbTlqWlhOekxtOXVSR1ZoWTNScGRtRjBaU2tnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQndjbTlqWlhOekxtOXVSR1ZoWTNScGRtRjBaU2h3Y205alpYTnpLVHRjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0I5WEc0Z0lDQWdJQ0FnSUNBZ0lDQjlYRzRnSUNBZ0lDQWdJSDFjYmx4dUlDQWdJQ0FnSUNBdktseHVJQ0FnSUNBZ0lDQWdJQ0FnUlcxd2RIa2daR1ZoWTNScGRtRjBaU0J4ZFdWMVpTNGdWMlVnZFhObElHQkJjbkpoZVM1emNHeHBZMlZnSUdKbFkyRjFjMlVnYVhRZ1pHOWxjMjRuZEZ4dUlDQWdJQ0FnSUNBZ0lDQWdkMjl5YTNNZ2IyNGdkR2hsSUc5eWFXZHBibUZzSUdGeWNtRjVJSE52SUhkbElHUnZiaWQwSUdoaGRtVWdkRzhnWjJGeVltRm5aU0JqYjJ4c1pXTjBJR0Z1ZVhSb2FXNW5YRzRnSUNBZ0lDQWdJQ292WEc0Z0lDQWdJQ0FnSUdSbFlXTjBhWFpoZEdWUmRXVjFaUzV6Y0d4cFkyVW9NQ3dnWkdWaFkzUnBkbUYwWlZGMVpYVmxUR1Z1WjNSb0tUdGNibHh1SUNBZ0lDQWdJQ0F2S2x4dUlDQWdJQ0FnSUNBZ0lDQWdVSEp2WTJWemN5QmhZM1JwZG1GMFpTQnhkV1YxWlZ4dUlDQWdJQ0FnSUNBcUwxeHVJQ0FnSUNBZ0lDQmpiMjV6ZENCaFkzUnBkbUYwWlZGMVpYVmxUR1Z1WjNSb0lEMGdZV04wYVhaaGRHVlJkV1YxWlM1c1pXNW5kR2c3WEc1Y2JpQWdJQ0FnSUNBZ1ptOXlJQ2hzWlhRZ2FTQTlJREE3SUdrZ1BDQmhZM1JwZG1GMFpWRjFaWFZsVEdWdVozUm9PeUJwS3lzcElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUdOdmJuTjBJR2xrSUQwZ1lXTjBhWFpoZEdWUmRXVjFaVnRwWFR0Y2JpQWdJQ0FnSUNBZ0lDQWdJR052Ym5OMElHRmpkR2wyWlVsa1NXNWtaWGdnUFNCeWRXNXVhVzVuU1dSekxtbHVaR1Y0VDJZb2FXUXBPMXh1SUNBZ0lDQWdJQ0FnSUNBZ1kyOXVjM1FnY0hKdlkyVnpjeUE5SUdGamRHbDJaVkJ5YjJObGMzTmxjMXRwWkYwN1hHNWNiaUFnSUNBZ0lDQWdJQ0FnSUM4dklFbG1JSEJ5YjJObGMzTWdhWE51SjNRZ1lXeHlaV0ZrZVNCeWRXNXVhVzVuTENCaFkzUnBkbUYwWlZ4dUlDQWdJQ0FnSUNBZ0lDQWdhV1lnS0dGamRHbDJaVWxrU1c1a1pYZ2dQVDA5SUMweElDWW1JSEJ5YjJObGMzTXBJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0JwWmlBb2NISnZZMlZ6Y3k1cGMxQnlhVzl5YVhSNUtTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUhKMWJtNXBibWRKWkhNdWRXNXphR2xtZENocFpDazdYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdmU0JsYkhObElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnY25WdWJtbHVaMGxrY3k1d2RYTm9LR2xrS1R0Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCOVhHNWNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQjFjR1JoZEdWU2RXNXVhVzVuUTI5MWJuUW9kSEoxWlN3Z2NISnZZMlZ6Y3k1cGMweGhlbmtwTzF4dVhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2FXWWdLSEJ5YjJObGMzTXViMjVCWTNScGRtRjBaU2tnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQndjbTlqWlhOekxtOXVRV04wYVhaaGRHVW9jSEp2WTJWemN5azdYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdmVnh1SUNBZ0lDQWdJQ0FnSUNBZ2ZWeHVJQ0FnSUNBZ0lDQjlYRzVjYmlBZ0lDQWdJQ0FnWVdOMGFYWmhkR1ZSZFdWMVpTNXpjR3hwWTJVb01Dd2dZV04wYVhaaGRHVlJkV1YxWlV4bGJtZDBhQ2s3WEc1Y2JpQWdJQ0FnSUNBZ2NtVjBkWEp1SUhKMWJtNXBibWRKWkhNN1hHNGdJQ0FnZlZ4dWZUdGNiaUpkZlE9PVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvcHJvY2Vzcy9tYW5hZ2VyLmpzXG4gKiogbW9kdWxlIGlkID0gNDlcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF9kaWN0aW9uYXJ5ID0gcmVxdWlyZSgnLi4vLi4vdmFsdWUtdHlwZXMvc2V0dGluZ3MvZGljdGlvbmFyeScpO1xuXG52YXIgdHJhbnNmb3JtUHJvcHMgPSB7fTtcblxudmFyIFNDQUxFID0gJ3NjYWxlJztcbnZhciBST1RBVEUgPSAncm90YXRlJztcbnZhciBUUkFOU0ZPUk1fUEVSU1BFQ1RJVkUgPSAndHJhbnNmb3JtUGVyc3BlY3RpdmUnO1xudmFyIFRFUk1TID0gWyd0cmFuc2xhdGUnLCBTQ0FMRSwgUk9UQVRFLCAnc2tldycsIFRSQU5TRk9STV9QRVJTUEVDVElWRV07XG5cbnRyYW5zZm9ybVByb3BzW1JPVEFURV0gPSB0cmFuc2Zvcm1Qcm9wc1tTQ0FMRV0gPSB0cmFuc2Zvcm1Qcm9wc1tUUkFOU0ZPUk1fUEVSU1BFQ1RJVkVdID0gdHJ1ZTtcblxuVEVSTVMuZm9yRWFjaChmdW5jdGlvbiAodGVybSkge1xuICByZXR1cm4gX2RpY3Rpb25hcnkuYXhlcy5mb3JFYWNoKGZ1bmN0aW9uIChheGlzKSB7XG4gICAgcmV0dXJuIHRyYW5zZm9ybVByb3BzW3Rlcm0gKyBheGlzXSA9IHRydWU7XG4gIH0pO1xufSk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IHRyYW5zZm9ybVByb3BzO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluTnlZeTloWkdGd2RHVnlMMk56Y3k5MGNtRnVjMlp2Y20wdGNISnZjSE11YW5NaVhTd2libUZ0WlhNaU9sdGRMQ0p0WVhCd2FXNW5jeUk2SWpzN096czdPMEZCUlVFc1NVRkJTU3hwUWtGQmFVSXNSVUZCYWtJN08wRkJSVW9zU1VGQlRTeFJRVUZSTEU5QlFWSTdRVUZEVGl4SlFVRk5MRk5CUVZNc1VVRkJWRHRCUVVOT0xFbEJRVTBzZDBKQlFYZENMSE5DUVVGNFFqdEJRVU5PTEVsQlFVMHNVVUZCVVN4RFFVRkRMRmRCUVVRc1JVRkJZeXhMUVVGa0xFVkJRWEZDTEUxQlFYSkNMRVZCUVRaQ0xFMUJRVGRDTEVWQlFYRkRMSEZDUVVGeVF5eERRVUZTT3p0QlFVVk9MR1ZCUVdVc1RVRkJaaXhKUVVGNVFpeGxRVUZsTEV0QlFXWXNTVUZCZDBJc1pVRkJaU3h4UWtGQlppeEpRVUYzUXl4SlFVRjRRenM3UVVGRmFrUXNUVUZCVFN4UFFVRk9MRU5CUVdNc1ZVRkJReXhKUVVGRU8xTkJRVlVzYVVKQlFVc3NUMEZCVEN4RFFVRmhMRlZCUVVNc1NVRkJSRHRYUVVGVkxHVkJRV1VzVDBGQlR5eEpRVUZRTEVOQlFXWXNSMEZCT0VJc1NVRkJPVUk3UjBGQlZqdERRVUYyUWl4RFFVRmtPenRyUWtGRlpTSXNJbVpwYkdVaU9pSjBjbUZ1YzJadmNtMHRjSEp2Y0hNdWFuTWlMQ0p6YjNWeVkyVlNiMjkwSWpvaUwxVnpaWEp6TDAxaGRIUXZVMmwwWlhNdmNHOXdiVzkwYVc5dUlpd2ljMjkxY21ObGMwTnZiblJsYm5RaU9sc2lhVzF3YjNKMElIc2dZWGhsY3lCOUlHWnliMjBnSnk0dUx5NHVMM1poYkhWbExYUjVjR1Z6TDNObGRIUnBibWR6TDJScFkzUnBiMjVoY25rbk8xeHVYRzVzWlhRZ2RISmhibk5tYjNKdFVISnZjSE1nUFNCN2ZUdGNibHh1WTI5dWMzUWdVME5CVEVVZ1BTQW5jMk5oYkdVbk8xeHVZMjl1YzNRZ1VrOVVRVlJGSUQwZ0ozSnZkR0YwWlNjN1hHNWpiMjV6ZENCVVVrRk9VMFpQVWsxZlVFVlNVMUJGUTFSSlZrVWdQU0FuZEhKaGJuTm1iM0p0VUdWeWMzQmxZM1JwZG1Vbk8xeHVZMjl1YzNRZ1ZFVlNUVk1nUFNCYkozUnlZVzV6YkdGMFpTY3NJRk5EUVV4RkxDQlNUMVJCVkVVc0lDZHphMlYzSnl3Z1ZGSkJUbE5HVDFKTlgxQkZVbE5RUlVOVVNWWkZYVHRjYmx4dWRISmhibk5tYjNKdFVISnZjSE5iVWs5VVFWUkZYU0E5SUhSeVlXNXpabTl5YlZCeWIzQnpXMU5EUVV4RlhTQTlJSFJ5WVc1elptOXliVkJ5YjNCelcxUlNRVTVUUms5U1RWOVFSVkpUVUVWRFZFbFdSVjBnUFNCMGNuVmxPMXh1WEc1VVJWSk5VeTVtYjNKRllXTm9LQ2gwWlhKdEtTQTlQaUJoZUdWekxtWnZja1ZoWTJnb0tHRjRhWE1wSUQwK0lIUnlZVzV6Wm05eWJWQnliM0J6VzNSbGNtMGdLeUJoZUdselhTQTlJSFJ5ZFdVcEtUdGNibHh1Wlhod2IzSjBJR1JsWm1GMWJIUWdkSEpoYm5ObWIzSnRVSEp2Y0hNN0lsMTlcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2FkYXB0ZXIvY3NzL3RyYW5zZm9ybS1wcm9wcy5qc1xuICoqIG1vZHVsZSBpZCA9IDUwXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvLyBzaGltIGZvciB1c2luZyBwcm9jZXNzIGluIGJyb3dzZXJcblxudmFyIHByb2Nlc3MgPSBtb2R1bGUuZXhwb3J0cyA9IHt9O1xudmFyIHF1ZXVlID0gW107XG52YXIgZHJhaW5pbmcgPSBmYWxzZTtcblxuZnVuY3Rpb24gZHJhaW5RdWV1ZSgpIHtcbiAgICBpZiAoZHJhaW5pbmcpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBkcmFpbmluZyA9IHRydWU7XG4gICAgdmFyIGN1cnJlbnRRdWV1ZTtcbiAgICB2YXIgbGVuID0gcXVldWUubGVuZ3RoO1xuICAgIHdoaWxlKGxlbikge1xuICAgICAgICBjdXJyZW50UXVldWUgPSBxdWV1ZTtcbiAgICAgICAgcXVldWUgPSBbXTtcbiAgICAgICAgdmFyIGkgPSAtMTtcbiAgICAgICAgd2hpbGUgKCsraSA8IGxlbikge1xuICAgICAgICAgICAgY3VycmVudFF1ZXVlW2ldKCk7XG4gICAgICAgIH1cbiAgICAgICAgbGVuID0gcXVldWUubGVuZ3RoO1xuICAgIH1cbiAgICBkcmFpbmluZyA9IGZhbHNlO1xufVxucHJvY2Vzcy5uZXh0VGljayA9IGZ1bmN0aW9uIChmdW4pIHtcbiAgICBxdWV1ZS5wdXNoKGZ1bik7XG4gICAgaWYgKCFkcmFpbmluZykge1xuICAgICAgICBzZXRUaW1lb3V0KGRyYWluUXVldWUsIDApO1xuICAgIH1cbn07XG5cbnByb2Nlc3MudGl0bGUgPSAnYnJvd3Nlcic7XG5wcm9jZXNzLmJyb3dzZXIgPSB0cnVlO1xucHJvY2Vzcy5lbnYgPSB7fTtcbnByb2Nlc3MuYXJndiA9IFtdO1xucHJvY2Vzcy52ZXJzaW9uID0gJyc7IC8vIGVtcHR5IHN0cmluZyB0byBhdm9pZCByZWdleHAgaXNzdWVzXG5wcm9jZXNzLnZlcnNpb25zID0ge307XG5cbmZ1bmN0aW9uIG5vb3AoKSB7fVxuXG5wcm9jZXNzLm9uID0gbm9vcDtcbnByb2Nlc3MuYWRkTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5vbmNlID0gbm9vcDtcbnByb2Nlc3Mub2ZmID0gbm9vcDtcbnByb2Nlc3MucmVtb3ZlTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVBbGxMaXN0ZW5lcnMgPSBub29wO1xucHJvY2Vzcy5lbWl0ID0gbm9vcDtcblxucHJvY2Vzcy5iaW5kaW5nID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuYmluZGluZyBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xuXG4vLyBUT0RPKHNodHlsbWFuKVxucHJvY2Vzcy5jd2QgPSBmdW5jdGlvbiAoKSB7IHJldHVybiAnLycgfTtcbnByb2Nlc3MuY2hkaXIgPSBmdW5jdGlvbiAoZGlyKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmNoZGlyIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn07XG5wcm9jZXNzLnVtYXNrID0gZnVuY3Rpb24oKSB7IHJldHVybiAwOyB9O1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAod2VicGFjaykvfi9ub2RlLWxpYnMtYnJvd3Nlci9+L3Byb2Nlc3MvYnJvd3Nlci5qc1xuICoqIG1vZHVsZSBpZCA9IDUxXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iXSwic291cmNlUm9vdCI6IiIsImZpbGUiOiJwb3Btb3Rpb24uZ2xvYmFsLmpzIn0=