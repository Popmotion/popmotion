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
	exports.transformers = exports.unitType = exports.shadowType = exports.scaleType = exports.rgbType = exports.pxType = exports.positionsType = exports.hslType = exports.hexType = exports.complexType = exports.colorType = exports.axesType = exports.angleType = exports.alphaType = exports.setGlobalDilation = exports.combineTransformers = exports.utils = exports.calc = exports.easing = exports.svgPathAdapter = exports.svgAdapter = exports.cssAdapter = exports.attrAdapter = exports.adapter = exports.timeline = exports.stagger = exports.process = exports.input = exports.trackInput = exports.physics = exports.tween = exports.actor = exports.Action = undefined;
	
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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9wb3Btb3Rpb24uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OzttQkFrQ3FCOzs7Ozs7Ozs7a0JBQ1o7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7UUFsQ0Y7Ozs7OztBQVlBLElBQU0sd0JBQVEsVUFBQyxLQUFEO1NBQVcsb0JBQVUsS0FBVjtDQUFYO0FBQ2QsSUFBTSx3QkFBUSxVQUFDLEtBQUQ7U0FBVyxvQkFBVSxLQUFWO0NBQVg7QUFDZCxJQUFNLDRCQUFVLFVBQUMsS0FBRDtTQUFXLHNCQUFZLEtBQVo7Q0FBWDtBQUNoQixJQUFNLGtDQUFhO29DQUFJOzs7OzJFQUFzQjtDQUExQjtBQUNuQixJQUFNLHdCQUFRO3FDQUFJOzs7OzJFQUFzQjtDQUExQjtBQUNkLElBQU0sNEJBQVU7cUNBQUk7Ozs7NkVBQXdCO0NBQTVCO1FBQ2hCO1FBQ0E7Ozs7UUFHQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOzs7O1FBR0E7Ozs7UUFHSztRQUNBOzs7O1FBSUw7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7Ozs7UUFHSyIsImZpbGUiOiJwb3Btb3Rpb24uanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL01hdHQvU2l0ZXMvcG9wbW90aW9uIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQWN0aW9uc1xuZXhwb3J0IEFjdGlvbiBmcm9tICcuL2FjdGlvbnMvQWN0aW9uJztcbmltcG9ydCBBY3RvciBmcm9tICcuL2FjdGlvbnMvQWN0b3InO1xuaW1wb3J0IFR3ZWVuIGZyb20gJy4vYWN0aW9ucy9Ud2Vlbic7XG5pbXBvcnQgUGh5c2ljcyBmcm9tICcuL2FjdGlvbnMvUGh5c2ljcyc7XG5pbXBvcnQgVHJhY2sgZnJvbSAnLi9hY3Rpb25zL1RyYWNrJztcblxuLy8gUHJvY2Vzc1xuaW1wb3J0IFByb2Nlc3MgZnJvbSAnLi9wcm9jZXNzL1Byb2Nlc3MnO1xuXG4vLyBJbnB1dFxuaW1wb3J0IElucHV0IGZyb20gJy4vaW5wdXQvSW5wdXQnO1xuXG5leHBvcnQgY29uc3QgYWN0b3IgPSAocHJvcHMpID0+IG5ldyBBY3Rvcihwcm9wcyk7XG5leHBvcnQgY29uc3QgdHdlZW4gPSAocHJvcHMpID0+IG5ldyBUd2Vlbihwcm9wcyk7XG5leHBvcnQgY29uc3QgcGh5c2ljcyA9IChwcm9wcykgPT4gbmV3IFBoeXNpY3MocHJvcHMpO1xuZXhwb3J0IGNvbnN0IHRyYWNrSW5wdXQgPSAoLi4uYXJncykgPT4gbmV3IFRyYWNrKC4uLmFyZ3MpO1xuZXhwb3J0IGNvbnN0IGlucHV0ID0gKC4uLmFyZ3MpID0+IG5ldyBJbnB1dCguLi5hcmdzKTtcbmV4cG9ydCBjb25zdCBwcm9jZXNzID0gKC4uLmFyZ3MpID0+IG5ldyBQcm9jZXNzKC4uLmFyZ3MpO1xuZXhwb3J0IHN0YWdnZXIgZnJvbSAnLi9pbmMvc3RhZ2dlcic7XG5leHBvcnQgdGltZWxpbmUgZnJvbSAnLi9pbmMvdGltZWxpbmUnO1xuXG4vLyBBZGFwdGVyc1xuZXhwb3J0IGFkYXB0ZXIgZnJvbSAnLi9hZGFwdGVyL2FkYXB0ZXInO1xuZXhwb3J0IGF0dHJBZGFwdGVyIGZyb20gJy4vYWRhcHRlci9hdHRyLWFkYXB0ZXInO1xuZXhwb3J0IGNzc0FkYXB0ZXIgZnJvbSAnLi9hZGFwdGVyL2Nzcy1hZGFwdGVyJztcbmV4cG9ydCBzdmdBZGFwdGVyIGZyb20gJy4vYWRhcHRlci9zdmctYWRhcHRlcic7XG5leHBvcnQgc3ZnUGF0aEFkYXB0ZXIgZnJvbSAnLi9hZGFwdGVyL3N2Zy1wYXRoLWFkYXB0ZXInO1xuXG4vLyBFYXNpbmdcbmV4cG9ydCBlYXNpbmcgZnJvbSAnLi9hY3Rpb25zL2Vhc2luZy9wcmVzZXQtZWFzaW5nJztcblxuLy8gVXRpbHNcbmV4cG9ydCAqIGFzIGNhbGMgZnJvbSAnLi9pbmMvY2FsYyc7XG5leHBvcnQgKiBhcyB1dGlscywgeyBjb21iaW5lVHJhbnNmb3JtZXJzIH0gZnJvbSAnLi9pbmMvdXRpbHMnO1xuZXhwb3J0IHsgc2V0R2xvYmFsRGlsYXRpb24gfSBmcm9tICcuL3Byb2Nlc3MvdGltZXInO1xuXG4vLyBWYWx1ZSB0eXBlc1xuZXhwb3J0IGFscGhhVHlwZSBmcm9tICcuL3ZhbHVlLXR5cGVzL2FscGhhJztcbmV4cG9ydCBhbmdsZVR5cGUgZnJvbSAnLi92YWx1ZS10eXBlcy9hbmdsZSc7XG5leHBvcnQgYXhlc1R5cGUgZnJvbSAnLi92YWx1ZS10eXBlcy9heGVzJztcbmV4cG9ydCBjb2xvclR5cGUgZnJvbSAnLi92YWx1ZS10eXBlcy9jb2xvcic7XG5leHBvcnQgY29tcGxleFR5cGUgZnJvbSAnLi92YWx1ZS10eXBlcy9jb21wbGV4JztcbmV4cG9ydCBoZXhUeXBlIGZyb20gJy4vdmFsdWUtdHlwZXMvaGV4JztcbmV4cG9ydCBoc2xUeXBlIGZyb20gJy4vdmFsdWUtdHlwZXMvaHNsJztcbmV4cG9ydCBwb3NpdGlvbnNUeXBlIGZyb20gJy4vdmFsdWUtdHlwZXMvcG9zaXRpb25zJztcbmV4cG9ydCBweFR5cGUgZnJvbSAnLi92YWx1ZS10eXBlcy9weCc7XG5leHBvcnQgcmdiVHlwZSBmcm9tICcuL3ZhbHVlLXR5cGVzL3JnYic7XG5leHBvcnQgc2NhbGVUeXBlIGZyb20gJy4vdmFsdWUtdHlwZXMvc2NhbGUnO1xuZXhwb3J0IHNoYWRvd1R5cGUgZnJvbSAnLi92YWx1ZS10eXBlcy9zaGFkb3cnO1xuZXhwb3J0IHVuaXRUeXBlIGZyb20gJy4vdmFsdWUtdHlwZXMvdW5pdCc7XG5cbi8vIFRyYW5zZm9ybWVyc1xuZXhwb3J0ICogYXMgdHJhbnNmb3JtZXJzIGZyb20gJy4vaW5jL3RyYW5zZm9ybWVycyc7Il19

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
	//# sourceMappingURL=data:application/json;base64,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VUFBQyxRQUFELEVBQWM7QUFDbkMsUUFBTSxRQUFRLE9BQVEsUUFBUCxLQUFvQixRQUFwQixHQUFnQyxTQUFTLGdCQUFULENBQTBCLFFBQTFCLENBQWpDLEdBQXVFLFFBQXZFLENBRHFCO0FBRW5DLFdBQU8sS0FBQyxDQUFNLE1BQU4sR0FBZ0IsR0FBRyxLQUFILENBQVMsSUFBVCxDQUFjLEtBQWQsQ0FBakIsR0FBd0MsR0FBRyxJQUFILENBQVEsS0FBUixDQUF4QyxDQUY0QjtDQUFkOzs7Ozs7Ozs7O0FBYWxCLElBQU0sb0RBQXNCLFVBQUMsS0FBRDtXQUFXLFNBQVMsS0FBVCxJQUFrQixNQUFNLEtBQU4sQ0FBWSxNQUFaLENBQWxCLEdBQXdDLENBQUMsS0FBRCxDQUF4QztDQUFYOzs7Ozs7Ozs7O0FBVTVCLElBQU0sb0RBQXNCLFVBQUMsS0FBRDtXQUFXLFNBQVMsS0FBVCxJQUFrQixNQUFNLEtBQU4sQ0FBWSxHQUFaLENBQWxCLEdBQXFDLENBQUMsS0FBRCxDQUFyQztDQUFYOzs7Ozs7Ozs7QUFTNUIsSUFBTSxnQ0FBWSxVQUFDLEdBQUQsRUFBd0I7UUFBbEIsa0VBQVksaUJBQU07O0FBQzdDLHlCQUFZLElBQU0sVUFBbEIsQ0FENkM7QUFFN0MsV0FBTyxLQUFLLEtBQUwsQ0FBVyxNQUFNLFNBQU4sQ0FBWCxHQUE4QixTQUE5QixDQUZzQztDQUF4QiIsImZpbGUiOiJ1dGlscy5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvTWF0dC9TaXRlcy9wb3Btb3Rpb24iLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBDQU1FTF9DQVNFX1BBVFRFUk4gPSAvKFthLXpdKShbQS1aXSkvZztcbmNvbnN0IFJFUExBQ0VfVEVNUExBVEUgPSAnJDEtJDInO1xuY29uc3QgSEFTX1BFUkZPUk1BTkNFX05PVyA9ICh0eXBlb2YgcGVyZm9ybWFuY2UgIT09ICd1bmRlZmluZWQnICYmIHBlcmZvcm1hbmNlLm5vdyk7XG5cbi8qXG4gICAgR2V0IHZhciB0eXBlIGFzIHN0cmluZ1xuICAgIFxuICAgIEBwYXJhbTogVmFyaWFibGUgdG8gdGVzdFxuICAgIEByZXR1cm4gW3N0cmluZ106IFJldHVybnMsIGZvciBpbnN0YW5jZSAnT2JqZWN0JyBpZiBbb2JqZWN0IE9iamVjdF1cbiovXG5jb25zdCB2YXJUeXBlID0gdmFyaWFibGUgPT4gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHZhcmlhYmxlKS5zbGljZSg4LCAtMSk7XG5cbi8qXG4gICAgQ29udmVydCBjYW1lbENhc2UgdG8gZGFzaC1jYXNlXG5cbiAgICBAcGFyYW0gW3N0cmluZ11cbiAgICBAcmV0dXJuIFtzdHJpbmddXG4qL1xuZXhwb3J0IGNvbnN0IGNhbWVsVG9EYXNoID0gKHN0cmluZykgPT4gc3RyaW5nLnJlcGxhY2UoQ0FNRUxfQ0FTRV9QQVRURVJOLCBSRVBMQUNFX1RFTVBMQVRFKS50b0xvd2VyQ2FzZSgpO1xuXG4vKlxuICAgIENvbWJpbmUgdHJhbnNmb3JtZXJzIGludG8gb25lIGZ1bmN0aW9uIHRoYXQgY2FsbHMgZXZlcnlcbiAgICB0cmFuc2Zvcm1lciBpbiB0aGUgYXJyYXkgYW5kIHJldHVybnMgdGhlIHJlc3VsdFxuXG4gICAgQHBhcmFtIFthcnJheV1cbiAgICBAcmV0dXJuIFtmdW5jdGlvbl1cbiovXG5leHBvcnQgY29uc3QgY29tYmluZVRyYW5zZm9ybWVycyA9ICh0cmFuc2Zvcm1lcnMpID0+IHtcbiAgICBjb25zdCBudW1UcmFuc2Zvcm1lcnMgPSB0cmFuc2Zvcm1lcnMubGVuZ3RoO1xuICAgIGxldCBpID0gMDtcblxuICAgIC8qXG4gICAgICAgIEBwYXJhbSBbbnVtYmVyXVxuICAgICAgICBAcGFyYW0gW3N0cmluZ11cbiAgICAgICAgQHBhcmFtIFtBY3Rpb25dXG4gICAgICAgIEByZXR1cm4gW251bWJlcl1cbiAgICAqL1xuICAgIHJldHVybiAodiwga2V5LCBhKSA9PiB7XG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBudW1UcmFuc2Zvcm1lcnM7IGkrKykge1xuICAgICAgICAgICAgdiA9IHRyYW5zZm9ybWVyc1tpXSh2LCBrZXksIGEpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHY7XG4gICAgfTtcbn07XG5cbmV4cG9ydCBjb25zdCBjcmVhdGVEZWxpbWl0ZWQgPSAodmFsdWVzLCB0ZXJtcywgZGVsaW1pdGVyLCBjaG9wKSA9PiB7XG4gICAgY29uc3QgbnVtVGVybXMgPSB0ZXJtcy5sZW5ndGg7XG4gICAgbGV0IGNvbWJpbmVkID0gJyc7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IG51bVRlcm1zOyBpKyspIHtcbiAgICAgICAgY29uc3QgdGVybSA9IHRlcm1zW2ldO1xuICAgICAgICBpZiAodmFsdWVzLmhhc093blByb3BlcnR5KHRlcm0pKSB7XG4gICAgICAgICAgICBjb21iaW5lZCArPSB2YWx1ZXNbdGVybV0gKyBkZWxpbWl0ZXI7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoY2hvcCkge1xuICAgICAgICBjb21iaW5lZCA9IGNvbWJpbmVkLnNsaWNlKDAsIC1jaG9wKTtcbiAgICB9XG5cbiAgICByZXR1cm4gY29tYmluZWQ7XG59O1xuXG4vKlxuICAgIENyZWF0ZSBhIGZ1bmN0aW9uIHN0cmluZ1xuXG4gICAgJzIwcHgnLCAndHJhbnNsYXRlJyAtPiAndHJhbnNsYXRlKDIwcHgpJ1xuXG4gICAgQHBhcmFtIFtzdHJpbmddXG4gICAgQHBhcmFtIFtzdHJpbmddXG4gICAgQHJldHVybiBbc3RyaW5nXVxuKi9cbmV4cG9ydCBjb25zdCBjcmVhdGVGdW5jdGlvblN0cmluZyA9ICh2YWx1ZSwgcHJlZml4KSA9PiBgJHtwcmVmaXh9KCR7dmFsdWV9KWA7XG5cbi8qXG4gICAgR2VuZXJhdGUgY3VycmVudCB0aW1lc3RhbXBcbiAgICBcbiAgICBAcmV0dXJuIFt0aW1lc3RhbXBdOiBDdXJyZW50IFVOSVggdGltZXN0YW1wXG4qL1xuZXhwb3J0IGNvbnN0IGN1cnJlbnRUaW1lID0gSEFTX1BFUkZPUk1BTkNFX05PVyA/ICgpID0+IHBlcmZvcm1hbmNlLm5vdygpIDogKCkgPT4gbmV3IERhdGUoKS5nZXRUaW1lKCk7XG5cbi8qXG4gICAgU3BsaXQgY29sb3Igc3RyaW5nIGludG8gbWFwIG9mIGNvbG9yIHByb3BlcnRpZXNcblxuICAgIFwicmdiYSgyNTUsIDI1NSwgMjU1LCAwKVwiLCBbXCJSZWRcIiwgJ0dyZWVuXCIsIFwiQmx1ZVwiLCBcIkFscGhhXCJdXG5cbiAgICB7IFJlZDogMjU1Li4uIH1cbiovXG5leHBvcnQgY29uc3QgZ2V0Q29sb3JWYWx1ZXMgPSAodmFsdWUsIGNvbG9yVGVybXMpID0+IHtcbiAgICBjb25zdCBudW1Db2xvclRlcm1zID0gY29sb3JUZXJtcy5sZW5ndGg7XG4gICAgY29uc3QgY29sb3JWYWx1ZXMgPSB7fTtcbiAgICBjb25zdCBjb2xvcnMgPSBzcGxpdENvbW1hRGVsaW1pdGVkKGdldFZhbHVlRnJvbUZ1bmN0aW9uU3RyaW5nKHZhbHVlKSk7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IG51bUNvbG9yVGVybXM7IGkrKykge1xuICAgICAgICBjb2xvclZhbHVlc1tjb2xvclRlcm1zW2ldXSA9IChjb2xvcnNbaV0gIT09IHVuZGVmaW5lZCkgPyBjb2xvcnNbaV0gOiAxO1xuICAgIH1cblxuICAgIHJldHVybiBjb2xvclZhbHVlcztcbn07XG5cbi8qXG4gICAgR2V0IHZhbHVlIGZyb20gZnVuY3Rpb24gc3RyaW5nXG5cbiAgICBcInRyYW5zbGF0ZVgoMjBweClcIiAtPiBcIjIwcHhcIlxuKi9cbmV4cG9ydCBjb25zdCBnZXRWYWx1ZUZyb21GdW5jdGlvblN0cmluZyA9ICh2YWx1ZSkgPT4gdmFsdWUuc3Vic3RyaW5nKHZhbHVlLmluZGV4T2YoJygnKSArIDEsIHZhbHVlLmxhc3RJbmRleE9mKCcpJykpO1xuXG4vKlxuICAgIENoZWNrIGlmIHR3byBvYmplY3RzIGhhdmUgY2hhbmdlZCBmcm9tIGVhY2ggb3RoZXJcbiAgICBcbiAgICBAcGFyYW0gW29iamVjdF06IElucHV0IEFcbiAgICBAcGFyYW0gW29iamVjdF06IElucHV0IEJcbiAgICBAcmV0dXJuIFtib29sZWFuXTogVHJ1ZSBpZiBkaWZmZXJlbnRcbiovXG5leHBvcnQgY29uc3QgaGFzQ2hhbmdlZCA9IChhLCBiKSA9PiB7XG4gICAgbGV0IGNoYW5nZWQgPSBmYWxzZTtcblxuICAgIGZvciAobGV0IGtleSBpbiBhKSB7XG4gICAgICAgIGlmIChhLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICAgIGlmIChoYXNQcm9wZXJ0eShiLCBrZXkpKSB7XG4gICAgICAgICAgICAgICAgaWYgKGFba2V5XSAhPT0gYltrZXldKSB7XG4gICAgICAgICAgICAgICAgICAgIGNoYW5nZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY2hhbmdlZCA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gY2hhbmdlZDtcbn07XG5cbi8qXG4gICAgQ2hlY2sgaWYgb2JqZWN0IGhhcyBwcm9wZXJ0eSBhbmQgaXQgaXNuJ3QgdW5kZWZpbmVkXG5cbiAgICBAcGFyYW0gW29iamVjdF1cbiAgICBAcGFyYW0gW3N0cmluZ11cbiAgICBAcmV0dXJuIFtib29sZWFuXVxuKi9cbmV4cG9ydCBjb25zdCBoYXNQcm9wZXJ0eSA9IChvYmplY3QsIHByb3BlcnR5TmFtZSkgPT4gb2JqZWN0Lmhhc093blByb3BlcnR5KHByb3BlcnR5TmFtZSkgJiYgb2JqZWN0W3Byb3BlcnR5TmFtZV0gIT09IHVuZGVmaW5lZDtcblxuLypcbiAgICBJcyB1dGlscyB2YXIgYW4gYXJyYXkgPyBcbiAgICBcbiAgICBAcGFyYW06IFZhcmlhYmxlIHRvIHRlc3RcbiAgICBAcmV0dXJuIFtib29sZWFuXTogUmV0dXJucyB0cnVlIGlmIHV0aWxzLnZhclR5cGUgPT09ICdBcnJheSdcbiovXG5leHBvcnQgY29uc3QgaXNBcnJheSA9IChhcnIpID0+IHZhclR5cGUoYXJyKSA9PT0gJ0FycmF5JztcblxuLypcbiAgICBJcyB1dGlscyB2YXIgYSBmdW5jdGlvbiA/IFxuICAgIFxuICAgIEBwYXJhbTogVmFyaWFibGUgdG8gdGVzdFxuICAgIEByZXR1cm4gW2Jvb2xlYW5dOiBSZXR1cm5zIHRydWUgaWYgdXRpbHMudmFyVHlwZSA9PT0gJ0Z1bmN0aW9uJ1xuKi9cbmV4cG9ydCBjb25zdCBpc0Z1bmMgPSAob2JqKSA9PiB2YXJUeXBlKG9iaikgPT09ICdGdW5jdGlvbic7XG5cbi8qXG4gICAgSXMgdXRpbHMgdmFyIGEgbnVtYmVyP1xuICAgIFxuICAgIEBwYXJhbTogVmFyaWFibGUgdG8gdGVzdFxuICAgIEByZXR1cm4gW2Jvb2xlYW5dOiBSZXR1cm5zIHRydWUgaWYgdHlwZW9mID09PSAnbnVtYmVyJ1xuKi9cbmV4cG9ydCBjb25zdCBpc051bSA9IChudW0pID0+IHR5cGVvZiBudW0gPT09ICdudW1iZXInO1xuXG4vKlxuICAgIElzIHV0aWxzIHZhciBhbiBvYmplY3Q/XG4gICAgXG4gICAgQHBhcmFtOiBWYXJpYWJsZSB0byB0ZXN0XG4gICAgQHJldHVybiBbYm9vbGVhbl06IFJldHVybnMgdHJ1ZSBpZiB0eXBlb2YgPT09ICdvYmplY3QnXG4qL1xuZXhwb3J0IGNvbnN0IGlzT2JqID0gKG9iaikgPT4gdHlwZW9mIG9iaiA9PT0gJ29iamVjdCc7XG5cbi8qXG4gICAgSXMgdXRpbHMgYSByZWxhdGl2ZSB2YWx1ZSBhc3NpZ25tZW50P1xuICAgIFxuICAgIEBwYXJhbSBbc3RyaW5nXTogVmFyaWFibGUgdG8gdGVzdFxuICAgIEByZXR1cm4gW2Jvb2xlYW5dOiBJZiB1dGlscyBsb29rcyBsaWtlIGEgcmVsYXRpdmUgdmFsdWUgYXNzaWdubWVudFxuKi9cbmV4cG9ydCBjb25zdCBpc1JlbGF0aXZlVmFsdWUgPSAodmFsdWUpID0+ICh2YWx1ZSAmJiB2YWx1ZS5pbmRleE9mICYmIHZhbHVlLmluZGV4T2YoJz0nKSA+IDApID8gdHJ1ZSA6IGZhbHNlO1xuXG4vKlxuICAgIElzIHV0aWxzIHZhciBhIHN0cmluZyA/IFxuICAgIFxuICAgIEBwYXJhbTogVmFyaWFibGUgdG8gdGVzdFxuICAgIEByZXR1cm4gW2Jvb2xlYW5dOiBSZXR1cm5zIHRydWUgaWYgdHlwZW9mIHN0ciA9PT0gJ3N0cmluZydcbiovXG5leHBvcnQgY29uc3QgaXNTdHJpbmcgPSAoc3RyKSA9PiB0eXBlb2Ygc3RyID09PSAnc3RyaW5nJztcblxuLypcbiAgICBAcGFyYW0gW3N0cmluZyB8fCBOb2RlTGlzdF06XG4gICAgICAgIElmIHN0cmluZywgdHJlYXRlZCBhcyBzZWxlY3Rvci5cbiAgICAgICAgSWYgbm90LCB0cmVhdGVkIGFzIHByZWV4aXN0aW5nIE5vZGVMaXN0XG5cbiAgICBAcmV0dXJuIFtBcnJheV1cbiovXG5leHBvcnQgY29uc3Qgc2VsZWN0RG9tID0gKHNlbGVjdG9yKSA9PiB7XG4gICAgY29uc3Qgbm9kZXMgPSAodHlwZW9mIHNlbGVjdG9yID09PSAnc3RyaW5nJykgPyBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9yKSA6IHNlbGVjdG9yO1xuICAgIHJldHVybiAobm9kZXMubGVuZ3RoKSA/IFtdLnNsaWNlLmNhbGwobm9kZXMpIDogW10ucHVzaChub2Rlcyk7XG59O1xuXG4vKlxuICAgIFNwbGl0IGNvbW1hLWRlbGltaXRlZCBzdHJpbmdcblxuICAgIFwiZm9vLGJhclwiIC0+IFtcImZvb1wiLCBcImJhclwiXVxuXG4gICAgQHBhcmFtIFtzdHJpbmddXG4gICAgQHJldHVybiBbYXJyYXldXG4qL1xuZXhwb3J0IGNvbnN0IHNwbGl0Q29tbWFEZWxpbWl0ZWQgPSAodmFsdWUpID0+IGlzU3RyaW5nKHZhbHVlKSA/IHZhbHVlLnNwbGl0KC8sXFxzKi8pIDogW3ZhbHVlXTtcblxuLypcbiAgICBTcGxpdCBzcGFjZS1kZWxpbWl0ZWQgc3RyaW5nXG5cbiAgICBcImZvbyBiYXJcIiAtPiBbXCJmb29cIiwgXCJiYXJcIl1cblxuICAgIEBwYXJhbSBbc3RyaW5nXVxuICAgIEByZXR1cm4gW2FycmF5XVxuKi9cbmV4cG9ydCBjb25zdCBzcGxpdFNwYWNlRGVsaW1pdGVkID0gKHZhbHVlKSA9PiBpc1N0cmluZyh2YWx1ZSkgPyB2YWx1ZS5zcGxpdCgnICcpIDogW3ZhbHVlXTtcblxuLypcbiAgICBDb252ZXJ0IG51bWJlciB0byB4IGRlY2ltYWwgcGxhY2VzXG5cbiAgICBAcGFyYW0gW251bWJlcl1cbiAgICBAcGFyYW0gW251bWJlcl1cbiAgICBAcmV0dXJuIFtudW1iZXJdXG4qL1xuZXhwb3J0IGNvbnN0IHRvRGVjaW1hbCA9IChudW0sIHByZWNpc2lvbiA9IDIpID0+IHtcbiAgICBwcmVjaXNpb24gPSAxMCAqKiBwcmVjaXNpb247XG4gICAgcmV0dXJuIE1hdGgucm91bmQobnVtICogcHJlY2lzaW9uKSAvIHByZWNpc2lvbjtcbn07XG4iXX0=

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
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	exports.__esModule = true;
	
	var _Process2 = __webpack_require__(9);
	
	var _Process3 = _interopRequireDefault(_Process2);
	
	var _calc = __webpack_require__(19);
	
	var _utils = __webpack_require__(2);
	
	var _bindAdapter = __webpack_require__(34);
	
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
	
	var Action = function (_Process) {
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
	            if (currentValues.hasOwnProperty(key) && values && !values.hasOwnProperty(key)) {
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
	
	                /*
	                    TODO: Get current value + set `from`
	                    if (newValue.from !== undefined) {
	                        newValue.current = newValue.from;
	                     } else if (newValue.current === undefined && this.on) {
	                        newValue.current = this.on.get(key) || 0;
	                    }
	                     if (newValue.from === undefined) {
	                        newValue.from = newValue.current;
	                    }
	                */
	
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
	
	            // Update velocity
	            if (!this.calculatesVelocity) {
	                value.velocity = (0, _calc.speedPerSecond)(value.current - value.prev, elapsed);
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
	//# sourceMappingURL=data:application/json;base64,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O1NBREo7Ozs7Ozs7O0FBdFNhLHFCQWtUakIsNkNBQWtCO0FBQ2QsZUFBTztBQUNILHFCQUFTLENBQVQ7QUFDQSxzQkFBVSxDQUFWO0FBQ0EsbUJBQU8sS0FBUDtTQUhKLENBRGM7Ozs7Ozs7OztBQWxURCxxQkFnVWpCLHFEQUFzQjtBQUNsQixlQUFPLFlBQVAsQ0FEa0I7OztXQWhVTCIsImZpbGUiOiJBY3Rpb24uanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL01hdHQvU2l0ZXMvcG9wbW90aW9uIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFByb2Nlc3MgZnJvbSAnLi4vcHJvY2Vzcy9Qcm9jZXNzJztcbmltcG9ydCB7IHNwZWVkUGVyU2Vjb25kIH0gZnJvbSAnLi4vaW5jL2NhbGMnO1xuaW1wb3J0IHsgaXNOdW0sIGlzT2JqLCBpc1N0cmluZyB9IGZyb20gJy4uL2luYy91dGlscyc7XG5pbXBvcnQgYmluZEFkYXB0ZXIgZnJvbSAnLi4vaW5jL2JpbmQtYWRhcHRlcic7XG5pbXBvcnQgY29sb3JUeXBlIGZyb20gJy4uL3ZhbHVlLXR5cGVzL2NvbG9yJztcbmltcG9ydCBjb21wbGV4VHlwZSBmcm9tICcuLi92YWx1ZS10eXBlcy9jb21wbGV4JztcbmltcG9ydCB1bml0VHlwZSBmcm9tICcuLi92YWx1ZS10eXBlcy91bml0JztcblxuY29uc3QgREVGQVVMVF9QUk9QID0gJ2N1cnJlbnQnO1xuY29uc3QgTlVNRVJJQ0FMX1ZBTFVFUyA9IFtERUZBVUxUX1BST1AsICdmcm9tJywgJ3RvJywgJ3ByZXYnLCAndmVsb2NpdHknXTtcbmNvbnN0IE5VTV9OVU1FUklDQUxfVkFMVUVTID0gTlVNRVJJQ0FMX1ZBTFVFUy5sZW5ndGg7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFjdGlvbiBleHRlbmRzIFByb2Nlc3Mge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHByb3BzLnN0YXRlID0ge307XG4gICAgICAgIHByb3BzLnZhbHVlS2V5cyA9IFtdO1xuICAgICAgICBwcm9wcy5wYXJlbnRLZXlzID0gW107XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICB9XG5cbiAgICAvKlxuICAgICAgICAjIFNldCBBY3Rpb24gcHJvcGVydGllc1xuICAgICAgICAjIyBTZXQgdXNlci1kZWZpbmVkIEFjdGlvbiBwcm9wZXJ0aWVzXG5cbiAgICAgICAgQHBhcmFtIFtvYmplY3RdXG4gICAgICAgIEByZXR1cm4gW0FjdGlvbl1cbiAgICAqL1xuICAgIHNldChwcm9wcyA9IHt9KSB7XG4gICAgICAgIGNvbnN0IHsgdmFsdWVzLCBvbiwgLi4ucHJvcHNUb1NldCB9ID0gcHJvcHM7XG4gICAgICAgIGNvbnN0IGN1cnJlbnRWYWx1ZXMgPSB0aGlzLnZhbHVlcyA9IHRoaXMudmFsdWVzIHx8IHt9O1xuICAgICAgICBjb25zdCBkZWZhdWx0VmFsdWUgPSB0aGlzLmdldERlZmF1bHRWYWx1ZSgpO1xuICAgICAgICBjb25zdCBpbmhlcml0YWJsZSA9IHt9O1xuXG4gICAgICAgIC8vIDEpIFNldCBub24tY29uc3VtZWQgcHJvcGVydGllc1xuICAgICAgICBzdXBlci5zZXQocHJvcHNUb1NldCk7XG5cbiAgICAgICAgLy8gMikgQmluZCBgb25gIHRvIGFuIGFkYXB0ZXIsIGlmIG5vdCBhbHJlYWR5XG4gICAgICAgIGlmIChvbikge1xuICAgICAgICAgICAgLy8gRHVja3R5cGlzaCBjaGVjayBmb3IgQWRhcHRlclxuICAgICAgICAgICAgdGhpcy5vbiA9ICghb24uc2V0dGVyKSA/IGJpbmRBZGFwdGVyKG9uKSA6IG9uO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gMykgUHJpbWUgYW4gb2JqZWN0IHRvIGluaGVyaXQgZnJvbSwgd2l0aCBvbmx5IGB2YWx1ZWAgcHJvcGVydGllc1xuICAgICAgICBmb3IgKGxldCBrZXkgaW4gZGVmYXVsdFZhbHVlKSB7XG4gICAgICAgICAgICBpZiAoZGVmYXVsdFZhbHVlLmhhc093blByb3BlcnR5KGtleSkgJiYgcHJvcHNUb1NldC5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgICAgICAgaW5oZXJpdGFibGVba2V5XSA9IHByb3BzVG9TZXRba2V5XTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIDQpIFVwZGF0ZSBleGlzdGluZyB2YWx1ZXMgd2l0aCBpbmhlcml0YWJsZSBwcm9wZXJ0aWVzXG4gICAgICAgIGZvciAobGV0IGtleSBpbiBjdXJyZW50VmFsdWVzKSB7XG4gICAgICAgICAgICAvLyBFeGNsdWRlIHZhcmlhYmxlcyB0byBiZSBzZXQsIGFzIHdlJ2xsIGRlYWwgd2l0aCB0aG9zZSBzZXBlcmF0ZWx5XG4gICAgICAgICAgICBpZiAoY3VycmVudFZhbHVlcy5oYXNPd25Qcm9wZXJ0eShrZXkpICYmICh2YWx1ZXMgJiYgIXZhbHVlcy5oYXNPd25Qcm9wZXJ0eShrZXkpKSkge1xuICAgICAgICAgICAgICAgIGN1cnJlbnRWYWx1ZXNba2V5XSA9IHsgLi4uY3VycmVudFZhbHVlc1trZXldLCAuLi5pbmhlcml0YWJsZSB9O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gNSkgVXBkYXRlXG4gICAgICAgIGlmICh2YWx1ZXMpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0VmFsdWVzKHZhbHVlcywgaW5oZXJpdGFibGUpOyAgIFxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgc2V0VmFsdWVzKHZhbHVlcywgaW5oZXJpdEZyb20pIHtcbiAgICAgICAgY29uc3QgY3VycmVudFZhbHVlcyA9IHRoaXMudmFsdWVzO1xuICAgICAgICBjb25zdCBkZWZhdWx0VmFsdWUgPSB0aGlzLmdldERlZmF1bHRWYWx1ZSgpO1xuICAgICAgICBjb25zdCBkZWZhdWx0VmFsdWVQcm9wID0gdGhpcy5nZXREZWZhdWx0VmFsdWVQcm9wKCk7XG5cbiAgICAgICAgLy8gMikgTG9vcCBvdmVyIGV2ZXJ5IGluY29taW5nIGB2YWx1ZWAgYW5kIHNldFxuICAgICAgICBmb3IgKGxldCBrZXkgaW4gdmFsdWVzKSB7XG4gICAgICAgICAgICBpZiAodmFsdWVzLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICAgICAgICBsZXQgdmFsdWUgPSB7fTtcbiAgICAgICAgICAgICAgICBsZXQgY2hpbGRyZW4gPSB7fTtcbiAgICAgICAgICAgICAgICBsZXQgaGFzQ2hpbGRyZW4gPSBmYWxzZTtcbiAgICAgICAgICAgICAgICBsZXQgYmFzZSA9IGN1cnJlbnRWYWx1ZXNba2V5XSA/IGN1cnJlbnRWYWx1ZXNba2V5XSA6IGRlZmF1bHRWYWx1ZTtcblxuICAgICAgICAgICAgICAgIC8vIElmIHZhbHVlcyBvcyBhbiBvYmplY3QsIHVzZSBpdCBkaXJlY3RseVxuICAgICAgICAgICAgICAgIGlmIChpc09iaih2YWx1ZXNba2V5XSkpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSB2YWx1ZXNba2V5XTtcblxuICAgICAgICAgICAgICAgIC8vIE9SIHNldCB0byBhIHRoZSBkZWZhdWx0IHZhbHVlIHByb3BlcnR5IG9mIGEgYmxhbmsgb2JqZWN0XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdmFsdWVbZGVmYXVsdFZhbHVlUHJvcF0gPSB2YWx1ZXNba2V5XTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBsZXQgbmV3VmFsdWUgPSB7IC4uLmJhc2UsIC4uLmluaGVyaXRGcm9tLCAuLi52YWx1ZSB9O1xuXG4gICAgICAgICAgICAgICAgLypcbiAgICAgICAgICAgICAgICAgICAgVE9ETzogR2V0IGN1cnJlbnQgdmFsdWUgKyBzZXQgYGZyb21gXG4gICAgICAgICAgICAgICAgICAgIGlmIChuZXdWYWx1ZS5mcm9tICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ld1ZhbHVlLmN1cnJlbnQgPSBuZXdWYWx1ZS5mcm9tO1xuXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAobmV3VmFsdWUuY3VycmVudCA9PT0gdW5kZWZpbmVkICYmIHRoaXMub24pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ld1ZhbHVlLmN1cnJlbnQgPSB0aGlzLm9uLmdldChrZXkpIHx8IDA7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBpZiAobmV3VmFsdWUuZnJvbSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBuZXdWYWx1ZS5mcm9tID0gbmV3VmFsdWUuY3VycmVudDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICovXG5cbiAgICAgICAgICAgICAgICAvLyBJZiBvdXIgQWRhcHRlciBoYXMgYSBgZ2V0VmFsdWVUeXBlYCBmdW5jdGlvbiwgdHJ5IHRvIGdldCBhIGB0eXBlYCB3aXRoIHRoZSB2YWx1ZSBrZXlcbiAgICAgICAgICAgICAgICBpZiAoIW5ld1ZhbHVlLnR5cGUgJiYgdGhpcy5vbiAmJiB0aGlzLm9uLmdldFZhbHVlVHlwZSkge1xuICAgICAgICAgICAgICAgICAgICBuZXdWYWx1ZS50eXBlID0gdGhpcy5vbi5nZXRWYWx1ZVR5cGUoa2V5KTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAvLyBjKSBMb29wIHRocm91Z2ggYWxsIG51bWVyaWNhbCBwcm9wZXJ0eSB0eXBlc1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgTlVNX05VTUVSSUNBTF9WQUxVRVM7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBwcm9wTmFtZSA9IE5VTUVSSUNBTF9WQUxVRVNbaV07XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHZhbHVlUHJvcCA9IG5ld1ZhbHVlW3Byb3BOYW1lXTtcblxuICAgICAgICAgICAgICAgICAgICAvLyBJZiB3ZSBoYXZlIHRoaXMga2luZCBvZiBwcm9wZXJ0eSwgcHJvY2Vzc1xuICAgICAgICAgICAgICAgICAgICBpZiAodmFsdWVQcm9wICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIElmIHdlIGRvbid0IGhhdmUgYSB0eXBlIHNldCB0byB0aGlzIHZhbHVlLCBmaW5kIG9uZSAodW5sZXNzIGl0J3MgYSByYXcgbnVtYmVyKVxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFuZXdWYWx1ZS50eXBlICYmIGlzU3RyaW5nKHZhbHVlUHJvcCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodW5pdFR5cGUudGVzdCh2YWx1ZVByb3ApKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ld1ZhbHVlLnR5cGUgPSB1bml0VHlwZTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoY29sb3JUeXBlLnRlc3QodmFsdWVQcm9wKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXdWYWx1ZS50eXBlID0gY29sb3JUeXBlO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChjb21wbGV4VHlwZS50ZXN0KHZhbHVlUHJvcCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3VmFsdWUudHlwZSA9IGNvbXBsZXhUeXBlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG5ld1ZhbHVlLnR5cGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBJZiB3ZSdyZSBnb2luZyB0byBzcGxpdCB0aGlzIHZhbHVlIGludG8gY2hpbGQgdmFsdWVzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG5ld1ZhbHVlLnR5cGUuaGFzT3duUHJvcGVydHkoJ3NwbGl0JykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgc3BsaXRQcm9wID0gbmV3VmFsdWUudHlwZS5zcGxpdCh2YWx1ZVByb3ApO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAobGV0IHNwbGl0S2V5IGluIHNwbGl0UHJvcCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHNwbGl0UHJvcC5oYXNPd25Qcm9wZXJ0eShzcGxpdEtleSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBjb21iaW5lZEtleSA9IGtleSArIHNwbGl0S2V5O1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFjaGlsZHJlbltjb21iaW5lZEtleV0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZGVmYXVsdFZhbHVlID0gKG5ld1ZhbHVlLnR5cGUuZGVmYXVsdFByb3BzICYmIG5ld1ZhbHVlLnR5cGUuZGVmYXVsdFByb3BzW3NwbGl0S2V5XSkgPyBuZXdWYWx1ZS50eXBlLmRlZmF1bHRQcm9wc1tzcGxpdEtleV0gOiB7fTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hpbGRyZW5bY29tYmluZWRLZXldID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLi4ubmV3VmFsdWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuLi5kZWZhdWx0VmFsdWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXJlbnQ6IGtleSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoaWxkS2V5OiBzcGxpdEtleSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IHVuZGVmaW5lZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoaWxkcmVuW2NvbWJpbmVkS2V5XVtwcm9wTmFtZV0gPSBzcGxpdFByb3Bbc3BsaXRLZXldO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gSWYgdGhpcyBoYXMgYSBgdGVtcGxhdGVgIGZ1bmN0aW9uLCBnZW5lcmF0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIW5ld1ZhbHVlLnRlbXBsYXRlICYmIG5ld1ZhbHVlLnR5cGUudGVtcGxhdGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ld1ZhbHVlLnRlbXBsYXRlID0gbmV3VmFsdWUudHlwZS50ZW1wbGF0ZShuZXdWYWx1ZVtwcm9wTmFtZV0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGFzQ2hpbGRyZW4gPSB0cnVlO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChuZXdWYWx1ZS50eXBlLmRlZmF1bHRQcm9wcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXdWYWx1ZSA9IHsgLi4ubmV3VmFsdWUsIC4uLm5ld1ZhbHVlLnR5cGUuZGVmYXVsdFByb3BzIH07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG5ld1ZhbHVlLnR5cGUucGFyc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3VmFsdWVbcHJvcE5hbWVdID0gbmV3VmFsdWUudHlwZS5wYXJzZShuZXdWYWx1ZVtwcm9wTmFtZV0sIG5ld1ZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IC8vIEVuZCBudW1lcmljYWwgcHJvcGVydHkgaXRlcmF0aW9uXG5cbiAgICAgICAgICAgICAgICAvLyBTZXQgYHByZXZgIHRvIGBjdXJyZW50YCBpZiBpdCBpc24ndCBhbHJlYWR5IGRlZmluZWRcbiAgICAgICAgICAgICAgICBpZiAobmV3VmFsdWUucHJldiA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgIG5ld1ZhbHVlLnByZXYgPSBuZXdWYWx1ZS5jdXJyZW50O1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGN1cnJlbnRWYWx1ZXNba2V5XSA9IG5ld1ZhbHVlO1xuXG4gICAgICAgICAgICAgICAgLy8gSWYgdGhpcyB2YWx1ZSBkb2Vzbid0IGhhdmUgY2hpbGRyZW4sIGFkZCB0byB2YWx1ZUtleXNcbiAgICAgICAgICAgICAgICBpZiAoIWhhc0NoaWxkcmVuKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnZhbHVlS2V5cy5pbmRleE9mKGtleSkgPT09IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnZhbHVlS2V5cy5wdXNoKGtleSk7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC8vIE9yIGFkZCB0byBwYXJlbnRLZXlzXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgbmV3VmFsdWUuY2hpbGRyZW4gPSBuZXdWYWx1ZS5jaGlsZHJlbiB8fCB7fTtcblxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5wYXJlbnRLZXlzLmluZGV4T2Yoa2V5KSA9PT0gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucGFyZW50S2V5cy5wdXNoKGtleSk7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFZhbHVlcyhjaGlsZHJlbik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9IC8vIEVuZCB2YWx1ZSBpdGVyYXRpb25cblxuICAgICAgICAvLyAzKSBQcmVjb21wdXRlIHZhbHVlIGtleSBhbmQgcGFyZW50IGtleSBsZW5ndGggdG8gcHJldmVudCBwZXItZnJhbWUgbWVhc3VyZW1lbnRcbiAgICAgICAgdGhpcy5udW1WYWx1ZUtleXMgPSB0aGlzLnZhbHVlS2V5cy5sZW5ndGg7XG4gICAgICAgIHRoaXMubnVtUGFyZW50S2V5cyA9IHRoaXMucGFyZW50S2V5cy5sZW5ndGg7XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG5cbiAgICB9XG5cbiAgICAvKlxuICAgICAgICBEZWNpZGUgd2hldGhlciB0aGlzIEFjdGlvbiB3aWxsIHJlbmRlciBvbiBuZXh0IGZyYW1lXG5cbiAgICAgICAgQHBhcmFtIFtBY3Rpb25dXG4gICAgICAgIEBwYXJhbSBbbnVtYmVyXVxuICAgICAgICBAcGFyYW0gW251bWJlcl1cbiAgICAgICAgQHJldHVybiBbYm9vbGVhbl06IFJldHVybiB0cnVlIHRvIHJlbmRlclxuICAgICovXG4gICAgd2lsbFJlbmRlcihhY3Rpb24sIGZyYW1lU3RhbXAsIGVsYXBzZWQpIHtcbiAgICAgICAgbGV0IGhhc0NoYW5nZWQgPSBmYWxzZTtcblxuICAgICAgICAvLyBDaGVjayBpZiBiYXNlIHZhbHVlcyBoYXZlIHVwZGF0ZWQgXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5udW1WYWx1ZUtleXM7IGkrKykge1xuICAgICAgICAgICAgY29uc3Qga2V5ID0gdGhpcy52YWx1ZUtleXNbaV07XG4gICAgICAgICAgICBjb25zdCB2YWx1ZSA9IHRoaXMudmFsdWVzW2tleV07XG5cbiAgICAgICAgICAgIC8vIFJ1biB0cmFuc2Zvcm0gZnVuY3Rpb24gKGlmIHByZXNlbnQpXG4gICAgICAgICAgICBpZiAodmFsdWUudHJhbnNmb3JtKSB7XG4gICAgICAgICAgICAgICAgdmFsdWUuY3VycmVudCA9IHZhbHVlLnRyYW5zZm9ybSh2YWx1ZS5jdXJyZW50LCBrZXksIHRoaXMpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBDYXAgbWluaW11bVxuICAgICAgICAgICAgaWYgKGlzTnVtKHZhbHVlLm1pbikpIHtcbiAgICAgICAgICAgICAgICB2YWx1ZS5jdXJyZW50ID0gTWF0aC5tYXgodmFsdWUuY3VycmVudCwgdmFsdWUubWluKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gQ2FwIG1heGltdW1cbiAgICAgICAgICAgIGlmIChpc051bSh2YWx1ZS5tYXgpKSB7XG4gICAgICAgICAgICAgICAgdmFsdWUuY3VycmVudCA9IE1hdGgubWluKHZhbHVlLmN1cnJlbnQsIHZhbHVlLm1heCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIFJvdW5kIG51bWJlclxuICAgICAgICAgICAgaWYgKHZhbHVlLnJvdW5kKSB7XG4gICAgICAgICAgICAgICAgdmFsdWUuY3VycmVudCA9IE1hdGgucm91bmQodmFsdWUuY3VycmVudCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIFVwZGF0ZSB2ZWxvY2l0eVxuICAgICAgICAgICAgaWYgKCF0aGlzLmNhbGN1bGF0ZXNWZWxvY2l0eSkge1xuICAgICAgICAgICAgICAgIHZhbHVlLnZlbG9jaXR5ID0gc3BlZWRQZXJTZWNvbmQodmFsdWUuY3VycmVudCAtIHZhbHVlLnByZXYsIGVsYXBzZWQpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBJZiB0aGlzIHZhbHVlIGhhcyBjaGFuZ2VkXG4gICAgICAgICAgICBpZiAodmFsdWUucHJldiAhPT0gdmFsdWUuY3VycmVudCkge1xuICAgICAgICAgICAgICAgIGhhc0NoYW5nZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHZhbHVlLnByZXYgPSB2YWx1ZS5jdXJyZW50O1xuXG4gICAgICAgICAgICAgICAgLy8gQXBwZW5kIHVuaXRcbiAgICAgICAgICAgICAgICBjb25zdCB2YWx1ZUZvclN0YXRlID0gKHZhbHVlLnR5cGUgJiYgdmFsdWUudHlwZS5zZXJpYWxpemUpID8gdmFsdWUudHlwZS5zZXJpYWxpemUodmFsdWUuY3VycmVudCwgdmFsdWUpIDogdmFsdWUuY3VycmVudDtcblxuICAgICAgICAgICAgICAgIC8vIEFkZCB0byBzdGF0ZSBpZiB0aGlzIGlzIG5vdCBhIGNoaWxkIHZhdWVcbiAgICAgICAgICAgICAgICBpZiAoIXZhbHVlLnBhcmVudCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlW2tleV0gPSB2YWx1ZUZvclN0YXRlO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudmFsdWVzW3ZhbHVlLnBhcmVudF0uY2hpbGRyZW5bdmFsdWUuY2hpbGRLZXldID0gdmFsdWVGb3JTdGF0ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gKHRoaXMub25DbGVhbnVwKSA/IHRydWUgOiBoYXNDaGFuZ2VkO1xuICAgIH1cblxuICAgIC8qXG4gICAgICAgIElmIHdlIGFyZSByZW5kZXJpbmcsIHJlY29tYmluZSBwYXJlbnQgdmFsdWVzIGZpcnN0XG4gICAgKi9cbiAgICBvblByZVJlbmRlcigpIHtcbiAgICAgICAgLy8gVXBkYXRlIHBhcmVudCB2YWx1ZXNcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLm51bVBhcmVudEtleXM7IGkrKykge1xuICAgICAgICAgICAgY29uc3Qga2V5ID0gdGhpcy5wYXJlbnRLZXlzW2ldO1xuICAgICAgICAgICAgY29uc3QgdmFsdWUgPSB0aGlzLnZhbHVlc1trZXldO1xuXG4gICAgICAgICAgICB2YWx1ZS5jdXJyZW50ID0gdmFsdWUudHlwZS5jb21iaW5lKHZhbHVlLmNoaWxkcmVuLCB2YWx1ZS50ZW1wbGF0ZSk7XG5cbiAgICAgICAgICAgIGlmICh0aGlzLnN0YXRlW2tleV0gIT09IHZhbHVlLmN1cnJlbnQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXRlW2tleV0gPSB2YWx1ZS5jdXJyZW50O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgb25SZW5kZXIoeyBzdGF0ZSwgb24gfSkge1xuICAgICAgICBpZiAob24gJiYgb24uc2V0KSB7XG4gICAgICAgICAgICBvbi5zZXQoc3RhdGUpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMub25GcmFtZSkge1xuICAgICAgICAgICAgdGhpcy5vbkZyYW1lKHRoaXMpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcGF1c2UoKSB7XG4gICAgICAgIHN1cGVyLnN0b3AoKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgcmVzdW1lKCkge1xuICAgICAgICBzdXBlci5zdGFydCgpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBzdGFydCgpIHtcbiAgICAgICAgY29uc3QgdmFsdWVzID0gdGhpcy52YWx1ZXM7XG4gICAgICAgIHN1cGVyLnN0YXJ0KCk7XG5cbiAgICAgICAgZm9yIChsZXQga2V5IGluIHZhbHVlcykge1xuICAgICAgICAgICAgaWYgKHZhbHVlcy5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgICAgICAgdmFsdWVzW2tleV0ucHJldiA9IHZhbHVlc1trZXldLm9yaWdpbiA9IHZhbHVlc1trZXldLmN1cnJlbnQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKlxuICAgICAgICAjIEdldCBkZWZhdWx0IEFjdGlvbiB2YWx1ZSBwcm9wZXJ0aWVzXG5cbiAgICAgICAgQHJldHVybiBbb2JqZWN0XVxuICAgICovXG4gICAgZ2V0RGVmYXVsdFZhbHVlKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgY3VycmVudDogMCxcbiAgICAgICAgICAgIHZlbG9jaXR5OiAwLFxuICAgICAgICAgICAgcm91bmQ6IGZhbHNlXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgLypcbiAgICAgICAgIyBHZXQgZGVmYXVsdCBBY3Rpb24gdmFsdWUgcHJvcGVydHkgbmFtZVxuICAgICAgICAjIyBTZXQgdGhpcyBgdmFsdWVgIHByb3BlcnR5IHdoZW4gc2V0IGFzIHZhbHVlIGluc3RlYWQgb2Ygb2JqZWN0XG5cbiAgICAgICAgQHJldHVybiBbc3RyaW5nXVxuICAgICovXG4gICAgZ2V0RGVmYXVsdFZhbHVlUHJvcCgpIHtcbiAgICAgICAgcmV0dXJuIERFRkFVTFRfUFJPUDtcbiAgICB9XG59XG4iXX0=

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	exports.__esModule = true;
	
	var _Action2 = __webpack_require__(4);
	
	var _Action3 = _interopRequireDefault(_Action2);
	
	var _calc = __webpack_require__(19);
	
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
	
	        return this;
	    };
	
	    Actor.prototype.willRender = function willRender(actor, frameStamp, elapsed) {
	        for (var i = 0; i < this.numValueKeys; i++) {
	            var key = this.valueKeys[i];
	            var value = this.values[key];
	
	            if (value.numDrivers === 1) {
	                value.current = this.activeActions[value.drivers[0]].values[key].current;
	            } else if (value.numDrivers > 1) {
	                var runningVelocity = 0;
	                var currentVelocity = 0;
	
	                for (var i2 = 0; i2 < value.numDrivers; i2++) {
	                    currentVelocity = this.activeActions[value.drivers[i2]].values[key].velocity;
	                    runningVelocity += currentVelocity;
	                    console.log(this.activeActions[value.drivers[i2]].values[key].velocity, runningVelocity);
	                }
	
	                value.current += (0, _calc.speedPerFrame)(runningVelocity, elapsed);
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
	            var driverIndex = value.drivers.indexOf(id);
	
	            if (driverIndex !== -1) {
	                value.drivers.splice(driverIndex, 1);
	            } else {
	                value.numDrivers++;
	            }
	
	            value.drivers.push(id);
	
	            if (!action.additive) {
	                actionValue.from = value.current;
	            }
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
	            var driverIndex = value.drivers.indexOf(id);
	
	            if (driverIndex !== -1) {
	                value.drivers.splice(driverIndex, 1);
	                value.numDrivers--;
	            }
	        }
	
	        delete this.activeActions[id];
	        this.numActiveActions--;
	
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
	}(_Action3.default);
	
	exports.default = Actor;
	//# sourceMappingURL=data:application/json;base64,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QUFULENBRFc7O0FBR2pCLGFBQUssSUFBSSxJQUFJLENBQUosRUFBTyxJQUFJLE9BQU8sWUFBUCxFQUFxQixHQUF6QyxFQUE4QztBQUMxQyxnQkFBTSxNQUFNLE9BQU8sU0FBUCxDQUFpQixDQUFqQixDQUFOLENBRG9DO0FBRTFDLGdCQUFNLFFBQVEsS0FBSyxNQUFMLENBQVksR0FBWixDQUFSLENBRm9DO0FBRzFDLGdCQUFNLGNBQWMsTUFBTSxPQUFOLENBQWMsT0FBZCxDQUFzQixFQUF0QixDQUFkLENBSG9DOztBQUsxQyxnQkFBSSxnQkFBZ0IsQ0FBQyxDQUFELEVBQUk7QUFDcEIsc0JBQU0sT0FBTixDQUFjLE1BQWQsQ0FBcUIsV0FBckIsRUFBa0MsQ0FBbEMsRUFEb0I7QUFFcEIsc0JBQU0sVUFBTixHQUZvQjthQUF4QjtTQUxKOztBQVdBLGVBQU8sS0FBSyxhQUFMLENBQW1CLEVBQW5CLENBQVAsQ0FkaUI7QUFlakIsYUFBSyxnQkFBTCxHQWZpQjs7QUFpQmpCLFlBQUksQ0FBQyxLQUFLLGdCQUFMLElBQXlCLEtBQUssUUFBTCxFQUFlO0FBQ3pDLDhCQUFNLElBQU4sWUFEeUM7U0FBN0M7OztBQXBLYSxvQkF5S2pCLDZDQUFrQjtBQUNkLDRCQUNPLGtCQUFNLGVBQU47QUFDSCxxQkFBUyxFQUFUO0FBQ0Esd0JBQVksQ0FBWjtVQUhKLENBRGM7OztXQXpLRCIsImZpbGUiOiJBY3Rvci5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvTWF0dC9TaXRlcy9wb3Btb3Rpb24iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQWN0aW9uIGZyb20gJy4uL2FjdGlvbnMvQWN0aW9uJztcbmltcG9ydCB7IHNwZWVkUGVyRnJhbWUgfSBmcm9tICcuLi9pbmMvY2FsYyc7XG5cbi8qXG4gICAgTWV0aG9kcyBhbmQgcHJvcGVydGllcyB0byBhZGQgdG8gYm91bmQgQWN0aW9uc1xuKi9cbmNvbnN0IGJvdW5kT25TdGFydCA9IChhY3Rpb24pID0+IGFjdGlvbi5hY3Rvci5hY3RpdmF0ZUFjdGlvbihhY3Rpb24uaWQsIGFjdGlvbik7XG5jb25zdCBib3VuZE9uU3RvcCA9IChhY3Rpb24pID0+IGFjdGlvbi5hY3Rvci5kZWFjdGl2YXRlQWN0aW9uKGFjdGlvbi5pZCk7XG5jb25zdCBib3VuZFByb3BzID0gKGFjdG9yKSA9PiAoe1xuICAgIGFjdG9yOiBhY3RvcixcbiAgICBpc1ByaW9yaXR5OiB0cnVlLFxuICAgIG9uOiBhY3Rvci5vbixcbiAgICBfb25TdGFydDogYm91bmRPblN0YXJ0LFxuICAgIF9vblN0b3A6IGJvdW5kT25TdG9wLFxuICAgIG9uUmVuZGVyOiB1bmRlZmluZWRcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBY3RvciBleHRlbmRzIEFjdGlvbiB7XG4gICAgY29uc3RydWN0b3IoLi4uYXJncykge1xuICAgICAgICBzdXBlciguLi5hcmdzKTtcbiAgICAgICAgdGhpcy5hY3RpdmVBY3Rpb25zID0ge307XG4gICAgICAgIHRoaXMubnVtQWN0aXZlQWN0aW9ucyA9IDA7XG4gICAgfVxuXG4gICAgc2V0KHByb3BzLCBpbnN0YW50KSB7XG4gICAgICAgIGlmIChpbnN0YW50IHx8ICF0aGlzLnJlZHVjZXIpIHtcbiAgICAgICAgICAgIHN1cGVyLnNldChwcm9wcyk7XG4gICAgICAgICAgICB0aGlzLm9uY2UoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnN0IGFjdGlvbiA9IHRoaXMucmVkdWNlcihwcm9wcyk7XG4gICAgICAgICAgICBpZiAoYWN0aW9uKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zdGFydChhY3Rpb24pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLypcbiAgICAgICAgQmluZCBBY3Rpb24gdG8gQWN0b3JcbiAgICAqL1xuICAgIGJpbmQoYWN0aW9uKSB7XG4gICAgICAgIGNvbnN0IGluaGVyaXRlZEFjdGlvbiA9IGFjdGlvbi5pbmhlcml0KCk7XG4gICAgICAgIGxldCBuZXdWYWx1ZXMgPSB7fTtcbiAgICAgICAgbGV0IGhhc05ld1ZhbHVlcyA9IGZhbHNlO1xuXG4gICAgICAgIC8vIENyZWF0ZSB2YWx1ZXMgb24gYWN0b3IgdGhhdCBkb24ndCBleGlzdFxuICAgICAgICBmb3IgKGxldCBrZXkgaW4gaW5oZXJpdGVkQWN0aW9uLnZhbHVlcykge1xuICAgICAgICAgICAgaWYgKGluaGVyaXRlZEFjdGlvbi52YWx1ZXMuaGFzT3duUHJvcGVydHkoa2V5KSAmJiAhdGhpcy52YWx1ZXMuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgICAgICAgIG5ld1ZhbHVlc1trZXldID0gaW5oZXJpdGVkQWN0aW9uLnZhbHVlc1trZXldO1xuICAgICAgICAgICAgICAgIGhhc05ld1ZhbHVlcyA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoaGFzTmV3VmFsdWVzKSB7XG4gICAgICAgICAgICB0aGlzLnNldCh7IHZhbHVlczogbmV3VmFsdWVzIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGluaGVyaXRlZEFjdGlvbi5zZXQoYm91bmRQcm9wcyh0aGlzLCBpbmhlcml0ZWRBY3Rpb24pKTtcbiAgICB9XG5cbiAgICAvKlxuICAgICAgICBTdGFydCBBY3RvclxuXG4gICAgICAgIElmIEFjdGlvbiBpcyBwcm92aWRlZCwgYmluZCBpdCB0byB0aGlzIEFjdG9yIGFuZCBzdGFydFxuXG4gICAgICAgIEBwYXJhbSAob3B0aW9uYWwpIFtBY3Rpb25dXG4gICAgKi9cbiAgICBzdGFydChhY3Rpb24pIHtcbiAgICAgICAgc3VwZXIuc3RhcnQoKTtcblxuICAgICAgICBpZiAoYWN0aW9uKSB7XG4gICAgICAgICAgICBjb25zdCBib3VuZEFjdGlvbiA9IHRoaXMuYmluZChhY3Rpb24pO1xuICAgICAgICAgICAgYm91bmRBY3Rpb24uc3RhcnQoKTtcblxuICAgICAgICAgICAgcmV0dXJuIGJvdW5kQWN0aW9uO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZm9yIChsZXQga2V5IGluIHRoaXMuYWN0aXZlQWN0aW9ucykge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmFjdGl2ZUFjdGlvbnMuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBhY3Rpb24gPSB0aGlzLmFjdGl2ZUFjdGlvbnNba2V5XTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFhY3Rpb24uaXNBY3RpdmUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFjdGlvbi5zdGFydCgpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgc3RvcCgpIHtcbiAgICAgICAgc3VwZXIuc3RvcCgpO1xuXG4gICAgICAgIGZvciAobGV0IGtleSBpbiB0aGlzLmFjdGl2ZUFjdGlvbnMpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmFjdGl2ZUFjdGlvbnMuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgICAgICAgIHRoaXMuYWN0aXZlQWN0aW9uc1trZXldLnN0b3AoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIHdpbGxSZW5kZXIoYWN0b3IsIGZyYW1lU3RhbXAsIGVsYXBzZWQpIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLm51bVZhbHVlS2V5czsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCBrZXkgPSB0aGlzLnZhbHVlS2V5c1tpXTtcbiAgICAgICAgICAgIGNvbnN0IHZhbHVlID0gdGhpcy52YWx1ZXNba2V5XTtcblxuICAgICAgICAgICAgaWYgKHZhbHVlLm51bURyaXZlcnMgPT09IDEpIHtcbiAgICAgICAgICAgICAgICB2YWx1ZS5jdXJyZW50ID0gdGhpcy5hY3RpdmVBY3Rpb25zW3ZhbHVlLmRyaXZlcnNbMF1dLnZhbHVlc1trZXldLmN1cnJlbnQ7XG5cbiAgICAgICAgICAgIH0gZWxzZSBpZiAodmFsdWUubnVtRHJpdmVycyA+IDEpIHtcbiAgICAgICAgICAgICAgICBsZXQgcnVubmluZ1ZlbG9jaXR5ID0gMDtcbiAgICAgICAgICAgICAgICBsZXQgY3VycmVudFZlbG9jaXR5ID0gMDtcblxuICAgICAgICAgICAgICAgIGZvciAobGV0IGkyID0gMDsgaTIgPCB2YWx1ZS5udW1Ecml2ZXJzOyBpMisrKSB7XG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRWZWxvY2l0eSA9IHRoaXMuYWN0aXZlQWN0aW9uc1t2YWx1ZS5kcml2ZXJzW2kyXV0udmFsdWVzW2tleV0udmVsb2NpdHk7XG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmdWZWxvY2l0eSArPSBjdXJyZW50VmVsb2NpdHk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMuYWN0aXZlQWN0aW9uc1t2YWx1ZS5kcml2ZXJzW2kyXV0udmFsdWVzW2tleV0udmVsb2NpdHksIHJ1bm5pbmdWZWxvY2l0eSlcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB2YWx1ZS5jdXJyZW50ICs9IHNwZWVkUGVyRnJhbWUocnVubmluZ1ZlbG9jaXR5LCBlbGFwc2VkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBzdXBlci53aWxsUmVuZGVyKGFjdG9yLCBmcmFtZVN0YW1wLCBlbGFwc2VkKTtcbiAgICB9XG5cbiAgICAvKlxuICAgICAgICBBZGQgYWN0aXZlIGFjdGlvbnNcblxuICAgICAgICBAcGFyYW0gW251bWJlcl1cbiAgICAgICAgQHBhcmFtIFtBY3Rpb25dXG4gICAgKi9cbiAgICBhY3RpdmF0ZUFjdGlvbihpZCwgYWN0aW9uKSB7XG4gICAgICAgIHRoaXMuYWN0aXZlQWN0aW9uc1tpZF0gPSBhY3Rpb247XG4gICAgICAgIHRoaXMubnVtQWN0aXZlQWN0aW9ucysrO1xuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYWN0aW9uLm51bVZhbHVlS2V5czsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCBrZXkgPSBhY3Rpb24udmFsdWVLZXlzW2ldO1xuICAgICAgICAgICAgY29uc3QgYWN0aW9uVmFsdWUgPSBhY3Rpb24udmFsdWVzW2tleV07XG4gICAgICAgICAgICBjb25zdCB2YWx1ZSA9IHRoaXMudmFsdWVzW2tleV07XG4gICAgICAgICAgICBjb25zdCBkcml2ZXJJbmRleCA9IHZhbHVlLmRyaXZlcnMuaW5kZXhPZihpZCk7XG5cbiAgICAgICAgICAgIGlmIChkcml2ZXJJbmRleCAhPT0gLTEpIHtcbiAgICAgICAgICAgICAgICB2YWx1ZS5kcml2ZXJzLnNwbGljZShkcml2ZXJJbmRleCwgMSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHZhbHVlLm51bURyaXZlcnMrKztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdmFsdWUuZHJpdmVycy5wdXNoKGlkKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgaWYgKCFhY3Rpb24uYWRkaXRpdmUpIHtcbiAgICAgICAgICAgICAgICBhY3Rpb25WYWx1ZS5mcm9tID0gdmFsdWUuY3VycmVudDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLm51bUFjdGl2ZUFjdGlvbnMpIHtcbiAgICAgICAgICAgIHN1cGVyLnN0YXJ0KCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKlxuICAgICAgICBSZW1vdmUgYWN0aXZlIGFjdGlvbnNcblxuICAgICAgICBAcGFyYW0gW251bWJlcl1cbiAgICAqL1xuICAgIGRlYWN0aXZhdGVBY3Rpb24oaWQpIHtcbiAgICAgICAgY29uc3QgYWN0aW9uID0gdGhpcy5hY3RpdmVBY3Rpb25zW2lkXTtcblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFjdGlvbi5udW1WYWx1ZUtleXM7IGkrKykge1xuICAgICAgICAgICAgY29uc3Qga2V5ID0gYWN0aW9uLnZhbHVlS2V5c1tpXTtcbiAgICAgICAgICAgIGNvbnN0IHZhbHVlID0gdGhpcy52YWx1ZXNba2V5XTtcbiAgICAgICAgICAgIGNvbnN0IGRyaXZlckluZGV4ID0gdmFsdWUuZHJpdmVycy5pbmRleE9mKGlkKTtcblxuICAgICAgICAgICAgaWYgKGRyaXZlckluZGV4ICE9PSAtMSkge1xuICAgICAgICAgICAgICAgIHZhbHVlLmRyaXZlcnMuc3BsaWNlKGRyaXZlckluZGV4LCAxKTtcbiAgICAgICAgICAgICAgICB2YWx1ZS5udW1Ecml2ZXJzLS07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBkZWxldGUgdGhpcy5hY3RpdmVBY3Rpb25zW2lkXTtcbiAgICAgICAgdGhpcy5udW1BY3RpdmVBY3Rpb25zLS07XG5cbiAgICAgICAgaWYgKCF0aGlzLm51bUFjdGl2ZUFjdGlvbnMgJiYgdGhpcy5pc0FjdGl2ZSkge1xuICAgICAgICAgICAgc3VwZXIuc3RvcCgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZ2V0RGVmYXVsdFZhbHVlKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgLi4uc3VwZXIuZ2V0RGVmYXVsdFZhbHVlKCksXG4gICAgICAgICAgICBkcml2ZXJzOiBbXSxcbiAgICAgICAgICAgIG51bURyaXZlcnM6IDBcbiAgICAgICAgfTtcbiAgICB9XG59Il19

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
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	exports.__esModule = true;
	
	var _Action2 = __webpack_require__(4);
	
	var _Action3 = _interopRequireDefault(_Action2);
	
	var _Pointer = __webpack_require__(35);
	
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
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _loop = __webpack_require__(36);
	
	var loop = _interopRequireWildcard(_loop);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Process = function () {
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
	}();
	
	exports.default = Process;
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9wcm9jZXNzL1Byb2Nlc3MuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0lBQVk7Ozs7Ozs7O0lBRVM7Ozs7O0FBSWpCLGFBSmlCLE9BSWpCLENBQVksS0FBWixFQUFtQjs7OzhCQUpGLFNBSUU7O0FBQ2YsYUFBSyxFQUFMLEdBQVUsS0FBSyxZQUFMLEVBQVYsQ0FEZTs7QUFHZixhQUFLLFVBQUwsR0FBa0IsWUFBTTtBQUNwQixrQkFBSyxJQUFMLEdBRG9CO0FBRXBCLGtCQUFLLFNBQUwsR0FBaUIsU0FBakIsQ0FGb0I7U0FBTixDQUhIOztBQVFmLGFBQUssV0FBTCxHQUFtQjttQkFBTSxNQUFLLFNBQUwsR0FBaUIsTUFBSyxVQUFMO1NBQXZCLENBUko7O0FBVWYsYUFBSyxHQUFMLENBQVMsS0FBSyxlQUFMLEVBQVQsRUFWZTtBQVdmLGFBQUssR0FBTCxDQUFTLEtBQVQsRUFYZTs7QUFhZixhQUFLLFFBQUwsR0FBZ0IsS0FBaEIsQ0FiZTtLQUFuQjs7QUFKaUIsc0JBb0JqQixtQkFBSSxPQUFPO0FBQ1AsYUFBSyxJQUFJLEdBQUosSUFBVyxLQUFoQixFQUF1QjtBQUNuQixnQkFBSSxNQUFNLGNBQU4sQ0FBcUIsR0FBckIsQ0FBSixFQUErQjtBQUMzQixxQkFBSyxHQUFMLElBQVksTUFBTSxHQUFOLENBQVosQ0FEMkI7YUFBL0I7U0FESjs7QUFNQSxlQUFPLElBQVAsQ0FQTzs7O0FBcEJNLHNCQThCakIseUJBQVE7QUFDSixhQUFLLFFBQUwsQ0FBYyxLQUFLLEVBQUwsRUFBUyxJQUF2QixFQURJOztBQUdKLGFBQUssU0FBTCxHQUFpQixLQUFLLFVBQUwsR0FBa0IsU0FBbEI7OztBQUhiLFlBTUEsS0FBSyxRQUFMLEVBQWU7QUFDZixpQkFBSyxRQUFMLENBQWMsSUFBZCxFQURlO1NBQW5COzs7QUFOSSxZQVdBLEtBQUssT0FBTCxFQUFjO0FBQ2QsaUJBQUssT0FBTCxDQUFhLElBQWIsRUFEYztTQUFsQjs7QUFJQSxlQUFPLElBQVAsQ0FmSTs7O0FBOUJTLHNCQWdEakIsdUJBQU87QUFDSCxhQUFLLFVBQUwsQ0FBZ0IsS0FBSyxFQUFMLENBQWhCOzs7QUFERyxZQUlDLEtBQUssT0FBTCxFQUFjO0FBQ2QsaUJBQUssT0FBTCxDQUFhLElBQWIsRUFEYztTQUFsQjs7O0FBSkcsWUFTQyxLQUFLLE1BQUwsRUFBYTtBQUNiLGlCQUFLLE1BQUwsQ0FBWSxJQUFaLEVBRGE7U0FBakI7O0FBSUEsZUFBTyxJQUFQLENBYkc7OztBQWhEVSxzQkFnRWpCLHVCQUFPO0FBQ0gsYUFBSyxLQUFMLEdBREc7QUFFSCxhQUFLLFVBQUwsR0FBa0IsS0FBSyxXQUFMLENBRmY7QUFHSCxlQUFPLElBQVAsQ0FIRzs7Ozs7Ozs7QUFoRVUsc0JBMkVqQiw2Q0FBa0I7QUFDZCxlQUFPLEVBQVAsQ0FEYzs7Ozs7Ozs7OztBQTNFRCxzQkFzRmpCLDJCQUFRLE9BQU87WUFDSCxLQUEwQixLQUExQixHQURHOztZQUNJLDBDQUFtQixjQUR2Qjs7QUFFWCxZQUFNLGFBQWEsSUFBSSxLQUFLLFdBQUwsQ0FBaUIsY0FBckIsQ0FBYixDQUZLO0FBR1gsZUFBTyxXQUFXLEdBQVgsQ0FBZSxLQUFmLENBQVAsQ0FIVzs7O1dBdEZFIiwiZmlsZSI6IlByb2Nlc3MuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL01hdHQvU2l0ZXMvcG9wbW90aW9uIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgbG9vcCBmcm9tICcuL2xvb3AnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQcm9jZXNzIHtcbiAgICAvKlxuICAgICAgICBbb2JqZWN0XTogUHJvcGVydGllc1xuICAgICovXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgdGhpcy5pZCA9IGxvb3AuZ2V0UHJvY2Vzc0lkKCk7XG5cbiAgICAgICAgdGhpcy5fb25DbGVhbnVwID0gKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5zdG9wKCk7XG4gICAgICAgICAgICB0aGlzLm9uQ2xlYW51cCA9IHVuZGVmaW5lZDtcbiAgICAgICAgfTtcblxuICAgICAgICB0aGlzLl9vbkFjdGl2YXRlID0gKCkgPT4gdGhpcy5vbkNsZWFudXAgPSB0aGlzLl9vbkNsZWFudXA7XG5cbiAgICAgICAgdGhpcy5zZXQodGhpcy5nZXREZWZhdWx0UHJvcHMoKSk7XG4gICAgICAgIHRoaXMuc2V0KHByb3BzKTtcblxuICAgICAgICB0aGlzLmlzQWN0aXZlID0gZmFsc2U7XG4gICAgfVxuXG4gICAgc2V0KHByb3BzKSB7XG4gICAgICAgIGZvciAobGV0IGtleSBpbiBwcm9wcykge1xuICAgICAgICAgICAgaWYgKHByb3BzLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICAgICAgICB0aGlzW2tleV0gPSBwcm9wc1trZXldO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgc3RhcnQoKSB7XG4gICAgICAgIGxvb3AuYWN0aXZhdGUodGhpcy5pZCwgdGhpcyk7XG5cbiAgICAgICAgdGhpcy5vbkNsZWFudXAgPSB0aGlzLm9uQWN0aXZhdGUgPSB1bmRlZmluZWQ7XG5cbiAgICAgICAgLy8gUHJpdmF0ZSBgb25TdGFydGBcbiAgICAgICAgaWYgKHRoaXMuX29uU3RhcnQpIHtcbiAgICAgICAgICAgIHRoaXMuX29uU3RhcnQodGhpcyk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBQdWJsaWMgYG9uU3RhcnRgXG4gICAgICAgIGlmICh0aGlzLm9uU3RhcnQpIHtcbiAgICAgICAgICAgIHRoaXMub25TdGFydCh0aGlzKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIHN0b3AoKSB7XG4gICAgICAgIGxvb3AuZGVhY3RpdmF0ZSh0aGlzLmlkKTtcblxuICAgICAgICAvLyBQcml2YXRlIGBvblN0b3BgXG4gICAgICAgIGlmICh0aGlzLl9vblN0b3ApIHtcbiAgICAgICAgICAgIHRoaXMuX29uU3RvcCh0aGlzKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFB1YmxpYyBgb25TdG9wYFxuICAgICAgICBpZiAodGhpcy5vblN0b3ApIHtcbiAgICAgICAgICAgIHRoaXMub25TdG9wKHRoaXMpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgb25jZSgpIHtcbiAgICAgICAgdGhpcy5zdGFydCgpO1xuICAgICAgICB0aGlzLm9uQWN0aXZhdGUgPSB0aGlzLl9vbkFjdGl2YXRlO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICAvKlxuICAgICAgICAjIEdldCBkZWZhdWx0IEFjdGlvbiBwcm9wZXJ0aWVzXG5cbiAgICAgICAgQHJldHVybiBbb2JqZWN0XVxuICAgICovXG4gICAgZ2V0RGVmYXVsdFByb3BzKCkge1xuICAgICAgICByZXR1cm4ge307XG4gICAgfVxuXG4gICAgLypcbiAgICAgICAgIyBFeHRlbmQgdGhpcyBQcm9jZXNzIHdpdGggbmV3IHByb3BlcnRpZXNcbiAgICAgICAgIyMgUmV0dXJucyBuZXcgaW5zdGFuY2Ugb2YgdGhpcyBQcm9jZXNzJ3MgYHByb3RvdHlwZWAgd2l0aCBleGlzdGluZyBhbmQgbmV3IHByb3BlcnRpZXNcblxuICAgICAgICBAcGFyYW0gW29iamVjdF0gKG9wdGlvbmFsKVxuICAgICAgICBAcmV0dXJuIFtQcm9jZXNzXVxuICAgICovXG4gICAgaW5oZXJpdChwcm9wcykge1xuICAgICAgICBjb25zdCB7IGlkLCAuLi5pbmhlcml0ZWRQcm9wcyB9ID0gdGhpcztcbiAgICAgICAgY29uc3QgbmV3UHJvY2VzcyA9IG5ldyB0aGlzLmNvbnN0cnVjdG9yKGluaGVyaXRlZFByb3BzKTtcbiAgICAgICAgcmV0dXJuIG5ld1Byb2Nlc3Muc2V0KHByb3BzKTtcbiAgICB9XG59Il19

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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9pbmMvc3RhZ2dlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7a0JBTXdCOzs7Ozs7Ozs7Ozs7OztBQUZ4QixJQUFNLG1CQUFtQixHQUFuQjs7QUFFUyxTQUFTLE9BQVQsQ0FBaUIsS0FBakIsRUFBd0IsUUFBeEIsRUFBa0MsS0FBbEMsRUFBeUM7QUFDcEQsUUFBTSxjQUFjLE1BQU0sTUFBTixDQURnQztBQUVwRCxRQUFNLGtCQUFrQixrQkFBTSxLQUFOLENBQWxCLENBRjhDO0FBR3BELFFBQU0sV0FBVyxrQkFBa0IsS0FBbEIsR0FBMEIsTUFBTSxRQUFOLElBQWtCLGdCQUFsQixDQUhTO0FBSXBELFFBQUksWUFBWSxDQUFDLENBQUQsQ0FKb0M7O0FBTXBELFFBQU0sZUFBZSxvQkFBVTtBQUMzQixrQkFBVSxXQUFXLFdBQVg7QUFDVixnQkFBUTtBQUNKLGVBQUc7QUFDQyxzQkFBTSxDQUFOO0FBQ0Esb0JBQUksY0FBYyxDQUFkO0FBQ0osdUJBQU8sSUFBUDtBQUNBLHNCQUFNLGtCQUFrQix1QkFBTyxNQUFQLEdBQWdCLE1BQU0sSUFBTixJQUFjLHVCQUFPLE1BQVA7YUFKMUQ7U0FESjtBQVFBLGtCQUFVLFVBQUMsS0FBRCxFQUFXO0FBQ2pCLGdCQUFNLElBQUksTUFBTSxLQUFOLENBQVksQ0FBWixDQURPO0FBRWpCLGdCQUFJLFdBQVcsWUFBWSxDQUFaLENBRkU7O0FBSWpCLG1CQUFPLFlBQVksQ0FBWixFQUFlLFVBQXRCLEVBQWtDO0FBQzlCLHlCQUFTLE1BQU0sUUFBTixDQUFULEVBQTBCLFFBQTFCLEVBRDhCO2FBQWxDOztBQUlBLHdCQUFZLENBQVosQ0FSaUI7U0FBWDtBQVVWLG9CQUFZLGtCQUFrQixTQUFsQixHQUE4QixNQUFNLFVBQU47S0FwQnpCLENBQWYsQ0FOOEM7O0FBNkJwRCxpQkFBYSxLQUFiLEdBN0JvRDs7QUErQnBELFdBQU8sWUFBUCxDQS9Cb0Q7Q0FBekMiLCJmaWxlIjoic3RhZ2dlci5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvTWF0dC9TaXRlcy9wb3Btb3Rpb24iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgVHdlZW4gZnJvbSAnLi4vYWN0aW9ucy9Ud2Vlbic7XG5pbXBvcnQgZWFzaW5nIGZyb20gJy4uL2FjdGlvbnMvZWFzaW5nL3ByZXNldC1lYXNpbmcnO1xuaW1wb3J0IHsgaXNOdW0gfSBmcm9tICcuL3V0aWxzJztcblxuY29uc3QgREVGQVVMVF9JTlRFUlZBTCA9IDEwMDtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc3RhZ2dlcihhcnJheSwgY2FsbGJhY2ssIHByb3BzKSB7XG4gICAgY29uc3QgYXJyYXlMZW5ndGggPSBhcnJheS5sZW5ndGg7XG4gICAgY29uc3QgcHJvcHNJc0ludGVydmFsID0gaXNOdW0ocHJvcHMpO1xuICAgIGNvbnN0IGludGVydmFsID0gcHJvcHNJc0ludGVydmFsID8gcHJvcHMgOiBwcm9wcy5pbnRlcnZhbCB8fCBERUZBVUxUX0lOVEVSVkFMO1xuICAgIGxldCBwcmV2SW5kZXggPSAtMTtcblxuICAgIGNvbnN0IHN0YWdnZXJUd2VlbiA9IG5ldyBUd2Vlbih7XG4gICAgICAgIGR1cmF0aW9uOiBpbnRlcnZhbCAqIGFycmF5TGVuZ3RoLFxuICAgICAgICB2YWx1ZXM6IHtcbiAgICAgICAgICAgIGk6IHtcbiAgICAgICAgICAgICAgICBmcm9tOiAwLFxuICAgICAgICAgICAgICAgIHRvOiBhcnJheUxlbmd0aCAtIDEsXG4gICAgICAgICAgICAgICAgcm91bmQ6IHRydWUsXG4gICAgICAgICAgICAgICAgZWFzZTogcHJvcHNJc0ludGVydmFsID8gZWFzaW5nLmxpbmVhciA6IHByb3BzLmVhc2UgfHwgZWFzaW5nLmxpbmVhclxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBvblJlbmRlcjogKHR3ZWVuKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBpID0gdHdlZW4uc3RhdGUuaTtcbiAgICAgICAgICAgIGxldCBnYXBJbmRleCA9IHByZXZJbmRleCArIDE7XG5cbiAgICAgICAgICAgIGZvciAoOyBnYXBJbmRleCA8PSBpOyBnYXBJbmRleCsrKSB7XG4gICAgICAgICAgICAgICAgY2FsbGJhY2soYXJyYXlbZ2FwSW5kZXhdLCBnYXBJbmRleCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHByZXZJbmRleCA9IGk7XG4gICAgICAgIH0sXG4gICAgICAgIG9uQ29tcGxldGU6IHByb3BzSXNJbnRlcnZhbCA/IHVuZGVmaW5lZCA6IHByb3BzLm9uQ29tcGxldGVcbiAgICB9KTtcblxuICAgIHN0YWdnZXJUd2Vlbi5zdGFydCgpO1xuXG4gICAgcmV0dXJuIHN0YWdnZXJUd2Vlbjtcbn0iXX0=

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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9pbmMvdGltZWxpbmUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7a0JBK0R3Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUE1Q3hCLElBQU0sVUFBVSxVQUFDLElBQUQsRUFBVTtBQUN0QixRQUFNLFdBQVcsRUFBWCxDQURnQjtBQUV0QixRQUFNLFVBQVUsS0FBSyxNQUFMLENBRk07QUFHdEIsUUFBSSxrQkFBa0IsQ0FBbEIsQ0FIa0I7OzBCQUtiO0FBQ0wsWUFBTSxNQUFNLEtBQUssQ0FBTCxDQUFOO0FBQ04sWUFBTSxXQUFXLElBQUksS0FBSixHQUFZLElBQVosR0FBbUIsS0FBbkI7QUFDakIsWUFBTSxRQUFRLFdBQWEsSUFBSSxLQUFKLEdBQVksR0FBekI7O0FBRWQsMkJBQW9CLFFBQUMsSUFBWSxJQUFJLE1BQUosR0FDN0IsSUFBSSxFQUFKLElBQVUseUJBQWMsZUFBZCxFQUErQixJQUFJLE1BQUosQ0FBekMsR0FBdUQsQ0FEdkM7O0FBR3BCLFlBQUksV0FBVyxDQUFYO0FBQ0osYUFBSyxJQUFJLEdBQUosSUFBVyxNQUFNLE1BQU4sRUFBYztBQUMxQixnQkFBSSxNQUFNLE1BQU4sQ0FBYSxjQUFiLENBQTRCLEdBQTVCLENBQUosRUFBc0M7QUFDbEMsb0JBQU0sUUFBUSxNQUFNLE1BQU4sQ0FBYSxHQUFiLENBQVIsQ0FENEI7QUFFbEMsMkJBQVcsS0FBSyxHQUFMLENBQVMsUUFBVCxFQUFtQixNQUFNLFFBQU4sQ0FBOUIsQ0FGa0M7YUFBdEM7U0FESjs7QUFPQSxpQkFBUyxJQUFULENBQWM7QUFDVixrQkFBTSxlQUFOO0FBQ0Esc0JBQVUsUUFBVjtBQUNBLGtCQUFNLFVBQUMsSUFBRDt1QkFBVSxNQUFNLFFBQU4sQ0FBZSxJQUFmO2FBQVY7U0FIVjs7QUFNQSwyQkFBbUIsTUFBTSxRQUFOO01BM0JEOztBQUt0QixTQUFLLElBQUksSUFBSSxDQUFKLEVBQU8sSUFBSSxPQUFKLEVBQWEsR0FBN0IsRUFBa0M7Y0FBekIsR0FBeUI7S0FBbEM7O0FBeUJBLFdBQU8sRUFBRSxXQUFXLGVBQVgsRUFBNEIsa0JBQTlCLEVBQVAsQ0E5QnNCO0NBQVY7O0FBaUNoQixJQUFNLFlBQVksZ0JBQTJDO1FBQXhDLHVCQUF3QztRQUEvQix5QkFBK0I7UUFBckIscUNBQXFCOztBQUN6RCxTQUFLLElBQUksSUFBSSxDQUFKLEVBQU8sSUFBSSxjQUFKLEVBQW9CLEdBQXBDLEVBQXlDO0FBQ3JDLFlBQU0sU0FBUSxTQUFTLENBQVQsQ0FBUixDQUQrQjtBQUVyQyxZQUFNLFlBQVksVUFBVSxPQUFNLElBQU4sQ0FGUzs7QUFJckMsWUFBSSxZQUFZLENBQVosSUFBaUIsWUFBWSxPQUFNLFFBQU4sRUFBZ0I7QUFDN0MsbUJBQU0sSUFBTixDQUFXLFNBQVgsRUFENkM7U0FBakQ7S0FKSjtDQURjOztBQVdILFNBQVMsUUFBVCxDQUFrQixHQUFsQixFQUFtQztRQUFaLDhEQUFRLGtCQUFJOzttQkFDZCxRQUFRLEdBQVIsRUFEYzs7UUFDdEMsK0JBRHNDO1FBQzNCLDZCQUQyQjs7QUFHOUMsV0FBTyxpQ0FDQTtBQUNILGtCQUFVLFNBQVY7QUFDQSxjQUFNLHVCQUFPLE1BQVA7QUFDTixnQkFBUTtBQUNKLGVBQUcsQ0FBSDtTQURKO0FBR0Esa0JBQVUsUUFBVjtBQUNBLHdCQUFnQixTQUFTLE1BQVQ7QUFDaEIsa0JBQVUsU0FBVjtNQVRHLENBQVAsQ0FIOEM7Q0FBbkMiLCJmaWxlIjoidGltZWxpbmUuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL01hdHQvU2l0ZXMvcG9wbW90aW9uIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFR3ZWVuIGZyb20gJy4uL2FjdGlvbnMvVHdlZW4nO1xuaW1wb3J0IGVhc2luZyBmcm9tICcuLi9hY3Rpb25zL2Vhc2luZy9wcmVzZXQtZWFzaW5nJztcbmltcG9ydCB7IHJlbGF0aXZlVmFsdWUgfSBmcm9tICcuL2NhbGMnO1xuXG4vKlxuICAgIEBwYXJhbSBbYXJyYXldXG4gICAgICAgIFNlcXVlbnRpYWwgYXJyYXkgb2YgdHdlZW5zLCBlYWNoIGl0ZW0gY2FuIGJlIGEgdHdlZW4gb3IgZGVmaW5pdGlvbiBvYmo6XG5cbiAgICAgICAgW1xuICAgICAgICAgICAgbmV3IFR3ZWVuKCksXG4gICAgICAgICAgICBzdGFnZ2VyKCksXG4gICAgICAgICAgICB0aW1lbGluZSgpLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHR3ZWVuOiBuZXcgVHdlZW4oKSxcbiAgICAgICAgICAgICAgICBhdDogMTAwLFxuICAgICAgICAgICAgICAgIG9mZnNldDogXCIrPTEwMFwiXG4gICAgICAgICAgICB9XG4gICAgICAgIF1cbiovXG5jb25zdCBhbmFseXplID0gKGRlZnMpID0+IHtcbiAgICBjb25zdCB0aW1lbGluZSA9IFtdO1xuICAgIGNvbnN0IG51bURlZnMgPSBkZWZzLmxlbmd0aDtcbiAgICBsZXQgY3VycmVudFBsYXloZWFkID0gMDtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbnVtRGVmczsgaSsrKSB7XG4gICAgICAgIGNvbnN0IGRlZiA9IGRlZnNbaV07XG4gICAgICAgIGNvbnN0IGRlZklzT2JqID0gZGVmLnR3ZWVuID8gdHJ1ZSA6IGZhbHNlO1xuICAgICAgICBjb25zdCB0d2VlbiA9IChkZWZJc09iaikgPyBkZWYudHdlZW4gOiBkZWY7XG5cbiAgICAgICAgY3VycmVudFBsYXloZWFkICs9ICgoZGVmSXNPYmogJiYgZGVmLm9mZnNldCkgP1xuICAgICAgICAgICAgZGVmLmF0IHx8IHJlbGF0aXZlVmFsdWUoY3VycmVudFBsYXloZWFkLCBkZWYub2Zmc2V0KSA6IDApO1xuXG4gICAgICAgIGxldCBkdXJhdGlvbiA9IDA7XG4gICAgICAgIGZvciAobGV0IGtleSBpbiB0d2Vlbi52YWx1ZXMpIHtcbiAgICAgICAgICAgIGlmICh0d2Vlbi52YWx1ZXMuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHZhbHVlID0gdHdlZW4udmFsdWVzW2tleV07XG4gICAgICAgICAgICAgICAgZHVyYXRpb24gPSBNYXRoLm1heChkdXJhdGlvbiwgdmFsdWUuZHVyYXRpb24pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgdGltZWxpbmUucHVzaCh7XG4gICAgICAgICAgICBmcm9tOiBjdXJyZW50UGxheWhlYWQsXG4gICAgICAgICAgICBkdXJhdGlvbjogZHVyYXRpb24sXG4gICAgICAgICAgICBmaXJlOiAodGltZSkgPT4gdHdlZW4uc2Vla1RpbWUodGltZSlcbiAgICAgICAgfSk7XG5cbiAgICAgICAgY3VycmVudFBsYXloZWFkICs9IHR3ZWVuLmR1cmF0aW9uO1xuICAgIH1cblxuICAgIHJldHVybiB7IHRvdGFsVGltZTogY3VycmVudFBsYXloZWFkLCB0aW1lbGluZSB9O1xufTtcblxuY29uc3Qgc2V0VHdlZW5zID0gKHsgZWxhcHNlZCwgdGltZWxpbmUsIHRpbWVsaW5lTGVuZ3RoIH0pID0+IHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRpbWVsaW5lTGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY29uc3QgdHdlZW4gPSB0aW1lbGluZVtpXTtcbiAgICAgICAgY29uc3QgdHdlZW5UaW1lID0gZWxhcHNlZCAtIHR3ZWVuLmZyb207XG5cbiAgICAgICAgaWYgKHR3ZWVuVGltZSA+IDAgJiYgdHdlZW5UaW1lIDwgdHdlZW4uZHVyYXRpb24pIHtcbiAgICAgICAgICAgIHR3ZWVuLmZpcmUodHdlZW5UaW1lKTtcbiAgICAgICAgfVxuICAgIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHRpbWVsaW5lKGRlZiwgcHJvcHMgPSB7fSkge1xuICAgIGNvbnN0IHsgdG90YWxUaW1lLCB0aW1lbGluZSB9ID0gYW5hbHl6ZShkZWYpO1xuXG4gICAgcmV0dXJuIG5ldyBUd2Vlbih7XG4gICAgICAgIC4uLnByb3BzLFxuICAgICAgICBkdXJhdGlvbjogdG90YWxUaW1lLFxuICAgICAgICBlYXNlOiBlYXNpbmcubGluZWFyLFxuICAgICAgICB2YWx1ZXM6IHtcbiAgICAgICAgICAgIHA6IDFcbiAgICAgICAgfSxcbiAgICAgICAgdGltZWxpbmU6IHRpbWVsaW5lLFxuICAgICAgICB0aW1lbGluZUxlbmd0aDogdGltZWxpbmUubGVuZ3RoLFxuICAgICAgICBvblJlbmRlcjogc2V0VHdlZW5zXG4gICAgfSk7XG59Il19

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
	
	var Adapter = function () {
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
	}();
	
	exports.default = function (element) {
	    return new Adapter(element);
	};
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hZGFwdGVyL2FkYXB0ZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQVlNO0FBQ0YsYUFERSxPQUNGLENBQVksT0FBWixFQUFxQjs4QkFEbkIsU0FDbUI7O0FBQ2pCLGFBQUssT0FBTCxHQUFlLE9BQWYsQ0FEaUI7QUFFakIsYUFBSyxLQUFMLEdBQWEsRUFBYixDQUZpQjtBQUdqQixhQUFLLGFBQUwsR0FBcUIsRUFBckIsQ0FIaUI7S0FBckI7Ozs7Ozs7O0FBREUsc0JBYUYsbUJBQUksS0FBSyxTQUFTO0FBQ2QsWUFBTSxZQUFZLEtBQUssV0FBTCxDQUFpQixHQUFqQixDQUFaLENBRFE7O0FBR2QsWUFBSSxXQUFXLENBQUMsS0FBSyxLQUFMLENBQVcsY0FBWCxDQUEwQixHQUExQixDQUFELEVBQWlDO0FBQzVDLG1CQUFPLEtBQUssS0FBTCxDQUFXLEdBQVgsSUFBa0IsS0FBSyxNQUFMLENBQVksU0FBWixDQUFsQixDQURxQztTQUFoRCxNQUVPO0FBQ0gsbUJBQU8sS0FBSyxLQUFMLENBQVcsR0FBWCxDQUFQLENBREc7U0FGUDs7Ozs7Ozs7QUFoQkYsc0JBNEJGLG1CQUFJLE9BQU87O0FBRVAsYUFBSyxJQUFJLEdBQUosSUFBVyxLQUFoQixFQUF1QjtBQUNuQixnQkFBSSxNQUFNLGNBQU4sQ0FBcUIsR0FBckIsQ0FBSixFQUErQjtBQUMzQixvQkFBTSxZQUFZLEtBQUssV0FBTCxDQUFpQixHQUFqQixDQUFaLENBRHFCO0FBRTNCLHFCQUFLLEtBQUwsQ0FBVyxHQUFYLElBQWtCLEtBQUssYUFBTCxDQUFtQixTQUFuQixJQUFnQyxNQUFNLEdBQU4sQ0FBaEMsQ0FGUzthQUEvQjtTQURKOztBQU9BLGVBQU8sS0FBSyxNQUFMLENBQVksS0FBSyxhQUFMLENBQW5CLENBVE87Ozs7Ozs7QUE1QlQsc0JBMkNGLHlCQUFPLEtBQUs7QUFDUixlQUFPLEtBQUssT0FBTCxDQUFhLEdBQWIsQ0FBUCxDQURROzs7Ozs7O0FBM0NWLHNCQWtERix5QkFBTyxPQUFPO0FBQ1YsYUFBSyxJQUFJLEdBQUosSUFBVyxLQUFoQixFQUF1QjtBQUNuQixnQkFBSSxNQUFNLGNBQU4sQ0FBcUIsR0FBckIsQ0FBSixFQUErQjtBQUMzQixxQkFBSyxPQUFMLENBQWEsR0FBYixJQUFvQixNQUFNLEdBQU4sQ0FBcEIsQ0FEMkI7YUFBL0I7U0FESjs7Ozs7Ozs7O0FBbkRGLHNCQWdFRixtQ0FBWSxLQUFLO0FBQ2IsZUFBTyxJQUFDLENBQUssUUFBTCxHQUFpQixLQUFLLFFBQUwsQ0FBYyxHQUFkLEtBQXNCLEdBQXRCLEdBQTRCLEdBQTlDLENBRE07Ozs7Ozs7OztBQWhFZixzQkEwRUYscUNBQWEsS0FBSztBQUNkLGVBQU8sSUFBQyxDQUFLLFlBQUwsR0FBcUIsS0FBSyxZQUFMLENBQWtCLEtBQUssV0FBTCxDQUFpQixHQUFqQixDQUFsQixDQUF0QixHQUFpRSxLQUFqRSxDQURPOzs7V0ExRWhCOzs7a0JBK0VTLFVBQUMsT0FBRDtXQUFhLElBQUksT0FBSixDQUFZLE9BQVo7Q0FBYiIsImZpbGUiOiJhZGFwdGVyLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9NYXR0L1NpdGVzL3BvcG1vdGlvbiIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gICAgIyBBZGFwdGVyIGNsYXNzXG4gICAgIyMgUHJvdmlkZXMgYSBnZXR0ZXIvc2V0dGVyIHdyYXBwZXIgYW5kIHByb3BlcnR5IGNhY2hlIGZvciBkaWZmZXJlbnQgZWxlbWVudCB0eXBlc1xuXG4gICAgT3ZlcnJpZGUgYGdldHRlcmAgYW5kIGBzZXR0ZXJgIHRvIHJlaW1wbGVtZW50IHRoZSBpbnRlcmZhY2UgZm9yIG5ldyBlbGVtZW50IHR5cGVzLlxuXG4gICAgU2V0IGBFeHRlbmRlZC5wcm90b3R5cGUuc3RhdGVNYXBgIGFzIGFuIG9iamVjdCBrZXkvdmFsdWUgbWFwIHRvIHRyYW5zbGF0ZSBpbmNvbWluZyBrZXlzIHRvXG4gICAgQVBJLXNwZWNpZmljIGtleXMuIEZvciBpbnN0YW5jZSwgeyB4OiAndHJhbnNsYXRlWCcgfS4gXG5cbiAgICBTZXQgYEV4dGVuZGVkLnByb3RvdHlwZS52YWx1ZVR5cGVNYXBgIGFzIGFuIG9iamVjdCBrZXkvdmFsdWUgbWFwIHRvIHJldHVybiBhIHZhbHVlIHR5cGUgd2l0aFxuICAgIGBnZXRWYWx1ZVR5cGUoa2V5KWAgKGtleSB3aWxsIGJlIG1hcHBlZCBhY2NvcmRpbmcgdG8gYHN0YXRlTWFwYClcbiovXG5jbGFzcyBBZGFwdGVyIHtcbiAgICBjb25zdHJ1Y3RvcihlbGVtZW50KSB7XG4gICAgICAgIHRoaXMuZWxlbWVudCA9IGVsZW1lbnQ7XG4gICAgICAgIHRoaXMuY2FjaGUgPSB7fTtcbiAgICAgICAgdGhpcy5pbnRlcm5hbENhY2hlID0ge307XG4gICAgfVxuXG4gICAgLypcbiAgICAgICAgR2V0IGVsZW1lbnQgcHJvcGVydHlcblxuICAgICAgICBAcGFyYW0gW3N0cmluZ106IEtleSB0byByZWFkXG4gICAgICAgIEBwYXJhbSBbYm9vbGVhbl06IElmIGB0cnVlYCwgd2lsbCBvdmVycmlkZSBjYWNoZWQgcHJvcGVydHlcbiAgICAqL1xuICAgIGdldChrZXksIHJlZnJlc2gpIHtcbiAgICAgICAgY29uc3QgbWFwcGVkS2V5ID0gdGhpcy5tYXBTdGF0ZUtleShrZXkpO1xuXG4gICAgICAgIGlmIChyZWZyZXNoIHx8ICF0aGlzLmNhY2hlLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmNhY2hlW2tleV0gPSB0aGlzLmdldHRlcihtYXBwZWRLZXkpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY2FjaGVba2V5XTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qXG4gICAgICAgIFNldCBlbGVtZW50IHByb3BlcnRpZXNcblxuICAgICAgICBAcGFyYW0gW29iamVjdF06IEtleS92YWx1ZSBwcm9wZXJ0aWVzIHRvIHNldFxuICAgICovXG4gICAgc2V0KHByb3BzKSB7XG4gICAgICAgIC8vIFRyYW5zbGF0ZSBwcm9wc1xuICAgICAgICBmb3IgKGxldCBrZXkgaW4gcHJvcHMpIHtcbiAgICAgICAgICAgIGlmIChwcm9wcy5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgbWFwcGVkS2V5ID0gdGhpcy5tYXBTdGF0ZUtleShrZXkpO1xuICAgICAgICAgICAgICAgIHRoaXMuY2FjaGVba2V5XSA9IHRoaXMuaW50ZXJuYWxDYWNoZVttYXBwZWRLZXldID0gcHJvcHNba2V5XTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzLnNldHRlcih0aGlzLmludGVybmFsQ2FjaGUpO1xuICAgIH1cblxuICAgIC8qXG4gICAgICAgIE92ZXJyaWRhYmxlIGVsZW1lbnQgZ2V0dGVyIC0gZGVmYXVsdCBmb3IgcGxhaW4gb2JqZWN0IFxuICAgICovXG4gICAgZ2V0dGVyKGtleSkge1xuICAgICAgICByZXR1cm4gdGhpcy5lbGVtZW50W2tleV07XG4gICAgfVxuXG4gICAgLypcbiAgICAgICAgT3ZlcnJpZGFibGUgZWxlbWVudCBzZXR0ZXIgLSBkZWZhdWx0IGZvciBwbGFpbiBvYmplY3RcbiAgICAqL1xuICAgIHNldHRlcihwcm9wcykge1xuICAgICAgICBmb3IgKGxldCBrZXkgaW4gcHJvcHMpIHtcbiAgICAgICAgICAgIGlmIChwcm9wcy5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5lbGVtZW50W2tleV0gPSBwcm9wc1trZXldO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLypcbiAgICAgICAgTWFwIHN0YXRlIGtleSBhcyBwZXIgYHN0YXRlTWFwYCwgaWYgcHJlc2VudFxuXG4gICAgICAgIEBwYXJhbSBbc3RyaW5nXTogS2V5IHRvIG1hcFxuICAgICAgICBAcmV0dXJuIFtzdHJpbmddOiBNYXBwZWQga2V5LCBvciBvcmlnaW5hbCBrZXkgaWYgbm9uZSBmb3VuZFxuICAgICovXG4gICAgbWFwU3RhdGVLZXkoa2V5KSB7XG4gICAgICAgIHJldHVybiAodGhpcy5zdGF0ZU1hcCkgPyB0aGlzLnN0YXRlTWFwW2tleV0gfHwga2V5IDoga2V5O1xuICAgIH1cblxuICAgIC8qXG4gICAgICAgIEdldCB2YWx1ZVR5cGUgb2YgcHJvdmlkZWQga2V5XG5cbiAgICAgICAgQHBhcmFtIFtzdHJpbmddOiBOYW1lIG9mIHByb3BlcnR5IHRvIG1hcFxuICAgICAgICBAcmV0dXJuIFt2YWx1ZVR5cGVdOiBWYWx1ZSB0eXBlIG9mIHByb3BlcnR5XG4gICAgKi9cbiAgICBnZXRWYWx1ZVR5cGUoa2V5KSB7XG4gICAgICAgIHJldHVybiAodGhpcy52YWx1ZVR5cGVNYXApID8gdGhpcy52YWx1ZVR5cGVNYXBbdGhpcy5tYXBTdGF0ZUtleShrZXkpXSA6IGZhbHNlO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgKGVsZW1lbnQpID0+IG5ldyBBZGFwdGVyKGVsZW1lbnQpOyJdfQ==

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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hZGFwdGVyL2F0dHItYWRhcHRlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7UUFFZ0I7UUFJQTs7Ozs7Ozs7QUFKVCxTQUFTLE1BQVQsQ0FBZ0IsR0FBaEIsRUFBcUI7QUFDeEIsV0FBTyxLQUFLLE9BQUwsQ0FBYSxZQUFiLENBQTBCLEdBQTFCLENBQVAsQ0FEd0I7Q0FBckI7O0FBSUEsU0FBUyxNQUFULENBQWdCLEtBQWhCLEVBQXVCO0FBQzFCLFNBQUssSUFBSSxHQUFKLElBQVcsS0FBaEIsRUFBdUI7QUFDbkIsWUFBSSxNQUFNLGNBQU4sQ0FBcUIsR0FBckIsQ0FBSixFQUErQjtBQUMzQixpQkFBSyxPQUFMLENBQWEsWUFBYixDQUEwQixHQUExQixFQUErQixNQUFNLEdBQU4sQ0FBL0IsRUFEMkI7U0FBL0I7S0FESjtDQURHOztrQkFRUSxVQUFDLE9BQUQsRUFBYTtBQUN4QixRQUFNLGNBQWMsdUJBQVEsT0FBUixDQUFkLENBRGtCOztBQUd4QixnQkFBWSxNQUFaLEdBQXFCLE1BQXJCLENBSHdCO0FBSXhCLGdCQUFZLE1BQVosR0FBcUIsTUFBckIsQ0FKd0I7O0FBTXhCLFdBQU8sV0FBUCxDQU53QjtDQUFiIiwiZmlsZSI6ImF0dHItYWRhcHRlci5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvTWF0dC9TaXRlcy9wb3Btb3Rpb24iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYWRhcHRlciBmcm9tICcuL2FkYXB0ZXInO1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0dGVyKGtleSkge1xuICAgIHJldHVybiB0aGlzLmVsZW1lbnQuZ2V0QXR0cmlidXRlKGtleSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzZXR0ZXIocHJvcHMpIHtcbiAgICBmb3IgKGxldCBrZXkgaW4gcHJvcHMpIHtcbiAgICAgICAgaWYgKHByb3BzLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudC5zZXRBdHRyaWJ1dGUoa2V5LCBwcm9wc1trZXldKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgKGVsZW1lbnQpID0+IHtcbiAgICBjb25zdCBhdHRyQWRhcHRlciA9IGFkYXB0ZXIoZWxlbWVudCk7XG5cbiAgICBhdHRyQWRhcHRlci5nZXR0ZXIgPSBnZXR0ZXI7XG4gICAgYXR0ckFkYXB0ZXIuc2V0dGVyID0gc2V0dGVyO1xuXG4gICAgcmV0dXJuIGF0dHJBZGFwdGVyO1xufTtcbiJdfQ==

/***/ },
/* 15 */
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
	
	var _transformProps = __webpack_require__(43);
	
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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hZGFwdGVyL2Nzcy1hZGFwdGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU9BLFNBQVMsTUFBVCxDQUFpQixHQUFqQixFQUFzQjtBQUNsQixXQUFPLENBQUUseUJBQWUsR0FBZixDQUFELEdBQ0osT0FBTyxnQkFBUCxDQUF3QixLQUFLLE9BQUwsRUFBYyxJQUF0QyxFQUE0Qyx3QkFBUyxHQUFULENBQTVDLENBREcsR0FFSCx1QkFBYSxHQUFiLEVBQWtCLFlBQWxCLENBQStCLE9BQS9CLElBQTBDLENBQTFDLENBSGM7Q0FBdEI7O0FBTUEsU0FBUyxNQUFULENBQWdCLEtBQWhCLEVBQXVCO0FBQ25CLFNBQUssT0FBTCxDQUFhLEtBQWIsQ0FBbUIsT0FBbkIsSUFBOEIscUJBQW9CLEtBQXBCLENBQTlCLENBRG1CO0NBQXZCOztrQkFJZSxVQUFDLE9BQUQsRUFBYTtBQUN4QixRQUFNLGFBQWEsdUJBQVEsT0FBUixDQUFiLENBRGtCO0FBRXhCLGVBQVcsUUFBWCxzQkFGd0I7QUFHeEIsZUFBVyxZQUFYLDBCQUh3QjtBQUl4QixlQUFXLE1BQVgsR0FBb0IsTUFBcEIsQ0FKd0I7QUFLeEIsZUFBVyxNQUFYLEdBQW9CLE1BQXBCLENBTHdCOztBQU94QixXQUFPLFVBQVAsQ0FQd0I7Q0FBYiIsImZpbGUiOiJjc3MtYWRhcHRlci5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvTWF0dC9TaXRlcy9wb3Btb3Rpb24iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3RhdGVNYXAgZnJvbSAnLi9jc3Mvc3RhdGUtbWFwJztcbmltcG9ydCB2YWx1ZVR5cGVNYXAgZnJvbSAnLi9jc3MvdmFsdWUtdHlwZS1tYXAnO1xuaW1wb3J0IGJ1aWxkUHJvcGVydHlTdHJpbmcgZnJvbSAnLi9jc3MvYnVpbGQnO1xuaW1wb3J0IHByZWZpeGVyIGZyb20gJy4vY3NzL3ByZWZpeGVyJztcbmltcG9ydCB0cmFuc2Zvcm1Qcm9wcyBmcm9tICcuL2Nzcy90cmFuc2Zvcm0tcHJvcHMnO1xuaW1wb3J0IGFkYXB0ZXIgZnJvbSAnLi9hZGFwdGVyJztcblxuZnVuY3Rpb24gZ2V0dGVyIChrZXkpIHtcbiAgICByZXR1cm4gKCF0cmFuc2Zvcm1Qcm9wc1trZXldKSA/XG4gICAgICAgIHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKHRoaXMuZWxlbWVudCwgbnVsbClbcHJlZml4ZXIoa2V5KV0gOlxuICAgICAgICB2YWx1ZVR5cGVNYXBba2V5XS5kZWZhdWx0UHJvcHMuY3VycmVudCB8fCAwO1xufVxuXG5mdW5jdGlvbiBzZXR0ZXIocHJvcHMpIHtcbiAgICB0aGlzLmVsZW1lbnQuc3R5bGUuY3NzVGV4dCArPSBidWlsZFByb3BlcnR5U3RyaW5nKHByb3BzKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgKGVsZW1lbnQpID0+IHtcbiAgICBjb25zdCBjc3NBZGFwdGVyID0gYWRhcHRlcihlbGVtZW50KTtcbiAgICBjc3NBZGFwdGVyLnN0YXRlTWFwID0gc3RhdGVNYXA7XG4gICAgY3NzQWRhcHRlci52YWx1ZVR5cGVNYXAgPSB2YWx1ZVR5cGVNYXA7XG4gICAgY3NzQWRhcHRlci5nZXR0ZXIgPSBnZXR0ZXI7XG4gICAgY3NzQWRhcHRlci5zZXR0ZXIgPSBzZXR0ZXI7XG5cbiAgICByZXR1cm4gY3NzQWRhcHRlcjtcbn07XG4iXX0=

/***/ },
/* 16 */
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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hZGFwdGVyL3N2Zy1hZGFwdGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztRQU1nQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFULFNBQVMsTUFBVCxDQUFnQixLQUFoQixFQUF1QjtBQUMxQiw2QkFBVyxxQkFBTSxLQUFOLEVBQWEsS0FBSyxNQUFMLENBQXhCLEVBRDBCO0NBQXZCOztrQkFJUSxVQUFDLE9BQUQsRUFBYTtBQUN4QixRQUFNLGFBQWEsdUJBQVEsT0FBUixDQUFiLENBRGtCO0FBRXhCLGVBQVcsUUFBWCxzQkFGd0I7QUFHeEIsZUFBVyxZQUFYLDBCQUh3QjtBQUl4QixlQUFXLE1BQVgsdUJBSndCO0FBS3hCLGVBQVcsTUFBWCxHQUFvQixNQUFwQixDQUx3Qjs7QUFPeEIsUUFBTSxPQUFPLFFBQVEsT0FBUixFQUFQLENBUGtCO0FBUXhCLFFBQU0sbUJBQW1CLENBQW5CLENBUmtCO0FBU3hCLFFBQU0sbUJBQW1CLENBQW5CLENBVGtCOztBQVd4QixlQUFXLE1BQVgsR0FBb0I7QUFDaEIsV0FBRyxLQUFLLEtBQUwsSUFBYyxtQkFBbUIsR0FBbkIsQ0FBZCxHQUF3QyxLQUFLLENBQUw7QUFDM0MsV0FBRyxLQUFLLE1BQUwsSUFBZSxtQkFBbUIsR0FBbkIsQ0FBZixHQUF5QyxLQUFLLENBQUw7S0FGaEQsQ0FYd0I7O0FBZ0J4QixXQUFPLFVBQVAsQ0FoQndCO0NBQWIiLCJmaWxlIjoic3ZnLWFkYXB0ZXIuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL01hdHQvU2l0ZXMvcG9wbW90aW9uIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0YXRlTWFwIGZyb20gJy4vY3NzL3N0YXRlLW1hcCc7XG5pbXBvcnQgdmFsdWVUeXBlTWFwIGZyb20gJy4vc3ZnL3ZhbHVlLXR5cGUtbWFwJztcbmltcG9ydCBidWlsZCBmcm9tICcuL3N2Zy9idWlsZCc7XG5pbXBvcnQgeyBnZXR0ZXIsIHNldHRlciBhcyBhdHRyU2V0dGVyIH0gZnJvbSAnLi9hdHRyLWFkYXB0ZXInO1xuaW1wb3J0IGFkYXB0ZXIgZnJvbSAnLi9hZGFwdGVyJztcblxuZXhwb3J0IGZ1bmN0aW9uIHNldHRlcihwcm9wcykge1xuICAgIGF0dHJTZXR0ZXIoYnVpbGQocHJvcHMsIHRoaXMub3JpZ2luKSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IChlbGVtZW50KSA9PiB7XG4gICAgY29uc3Qgc3ZnQWRhcHRlciA9IGFkYXB0ZXIoZWxlbWVudCk7XG4gICAgc3ZnQWRhcHRlci5zdGF0ZU1hcCA9IHN0YXRlTWFwO1xuICAgIHN2Z0FkYXB0ZXIudmFsdWVUeXBlTWFwID0gdmFsdWVUeXBlTWFwO1xuICAgIHN2Z0FkYXB0ZXIuZ2V0dGVyID0gZ2V0dGVyO1xuICAgIHN2Z0FkYXB0ZXIuc2V0dGVyID0gc2V0dGVyO1xuXG4gICAgY29uc3QgYkJveCA9IGVsZW1lbnQuZ2V0QkJveCgpO1xuICAgIGNvbnN0IHRyYW5zZm9ybU9yaWdpblkgPSAwO1xuICAgIGNvbnN0IHRyYW5zZm9ybU9yaWdpblggPSAwO1xuXG4gICAgc3ZnQWRhcHRlci5vcmlnaW4gPSB7XG4gICAgICAgIHg6IGJCb3gud2lkdGggKiAodHJhbnNmb3JtT3JpZ2luWCAvIDEwMCkgKyBiQm94LngsXG4gICAgICAgIHk6IGJCb3guaGVpZ2h0ICogKHRyYW5zZm9ybU9yaWdpblkgLyAxMDApICsgYkJveC55XG4gICAgfTtcblxuICAgIHJldHVybiBzdmdBZGFwdGVyO1xufTtcblxuIl19

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _build = __webpack_require__(44);
	
	var _build2 = _interopRequireDefault(_build);
	
	var _stateMap = __webpack_require__(45);
	
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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hZGFwdGVyL3N2Zy1wYXRoLWFkYXB0ZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSUEsU0FBUyxNQUFULENBQWdCLEtBQWhCLEVBQXVCO0FBQ25CLFNBQUssU0FBTCxDQUFlLHFCQUFNLEtBQU4sRUFBYSxLQUFLLFVBQUwsQ0FBNUIsRUFEbUI7Q0FBdkI7O2tCQUllLFVBQUMsT0FBRCxFQUFhO0FBQ3hCLFFBQU0sVUFBVSwwQkFBVyxPQUFYLENBQVYsQ0FEa0I7O0FBR3hCLFlBQVEsUUFBUixzQkFId0I7QUFJeEIsWUFBUSxNQUFSLEdBQWlCLE1BQWpCLENBSndCO0FBS3hCLFlBQVEsU0FBUixzQkFMd0I7QUFNeEIsWUFBUSxVQUFSLEdBQXFCLFFBQVEsY0FBUixFQUFyQixDQU53Qjs7QUFReEIsV0FBTyxPQUFQLENBUndCO0NBQWIiLCJmaWxlIjoic3ZnLXBhdGgtYWRhcHRlci5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvTWF0dC9TaXRlcy9wb3Btb3Rpb24iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYnVpbGQgZnJvbSAnLi9zdmctcGF0aC9idWlsZCc7XG5pbXBvcnQgc3RhdGVNYXAgZnJvbSAnLi9zdmctcGF0aC9zdGF0ZS1tYXAnO1xuaW1wb3J0IHN2Z0FkYXB0ZXIsIHsgc2V0dGVyIGFzIHN2Z1NldHRlciB9IGZyb20gJy4vc3ZnLWFkYXB0ZXInO1xuXG5mdW5jdGlvbiBzZXR0ZXIocHJvcHMpIHtcbiAgICB0aGlzLnN2Z1NldHRlcihidWlsZChwcm9wcywgdGhpcy5wYXRoTGVuZ3RoKSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IChlbGVtZW50KSA9PiB7XG4gICAgY29uc3QgYWRhcHRlciA9IHN2Z0FkYXB0ZXIoZWxlbWVudCk7XG5cbiAgICBhZGFwdGVyLnN0YXRlTWFwID0gc3RhdGVNYXA7XG4gICAgYWRhcHRlci5zZXR0ZXIgPSBzZXR0ZXI7XG4gICAgYWRhcHRlci5zdmdTZXR0ZXIgPSBzdmdTZXR0ZXI7XG4gICAgYWRhcHRlci5wYXRoTGVuZ3RoID0gZWxlbWVudC5nZXRUb3RhbExlbmd0aCgpO1xuXG4gICAgcmV0dXJuIGFkYXB0ZXI7XG59O1xuIl19

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _createEasing = __webpack_require__(48);
	
	var _createEasing2 = _interopRequireDefault(_createEasing);
	
	var _createBezier = __webpack_require__(49);
	
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
/* 19 */
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
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _defaultProps = __webpack_require__(46);
	
	exports.default = {
	    defaultProps: _defaultProps.opacity
	};
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy92YWx1ZS10eXBlcy9hbHBoYS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7a0JBRWU7QUFDWCx1Q0FEVyIsImZpbGUiOiJhbHBoYS5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvTWF0dC9TaXRlcy9wb3Btb3Rpb24iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBvcGFjaXR5IH0gZnJvbSAnLi9zZXR0aW5ncy9kZWZhdWx0LXByb3BzJztcblxuZXhwb3J0IGRlZmF1bHQge1xuICAgIGRlZmF1bHRQcm9wczogb3BhY2l0eVxufTsiXX0=

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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy92YWx1ZS10eXBlcy9hbmdsZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O2tCQUVlO0FBQ1gsa0JBQWM7QUFDVixjQUFNLEtBQU47QUFDQSw0QkFGVTtLQUFkIiwiZmlsZSI6ImFuZ2xlLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9NYXR0L1NpdGVzL3BvcG1vdGlvbiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB1bml0VHlwZSBmcm9tICcuL3VuaXQnO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgZGVmYXVsdFByb3BzOiB7XG4gICAgICAgIHVuaXQ6ICdkZWcnLFxuICAgICAgICB0eXBlOiB1bml0VHlwZVxuICAgIH1cbn07Il19

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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy92YWx1ZS10eXBlcy9heGVzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O2tCQUllO0FBQ1gsa0JBQWMsYUFBWSxZQUFaOzs7Ozs7Ozs7O0FBVWQsV0FBTyxVQUFDLEtBQUQsRUFBVztBQUNkLFlBQU0sY0FBYyxnQ0FBb0IsS0FBcEIsQ0FBZCxDQURRO0FBRWQsWUFBTSxVQUFVLFlBQVksTUFBWixDQUZGO0FBR2QsWUFBTSxhQUFhO0FBQ2YsZUFBRyxZQUFZLENBQVosQ0FBSDtBQUNBLGVBQUcsT0FBQyxHQUFVLENBQVYsR0FBZSxZQUFZLENBQVosQ0FBaEIsR0FBaUMsWUFBWSxDQUFaLENBQWpDO1NBRkQsQ0FIUTs7QUFRZCxZQUFJLFVBQVUsQ0FBVixFQUFhO0FBQ2IsdUJBQVcsQ0FBWCxHQUFlLFlBQVksQ0FBWixDQUFmLENBRGE7U0FBakI7O0FBSUEsZUFBTyxVQUFQLENBWmM7S0FBWDs7QUFlUCxhQUFTLFVBQUMsTUFBRDtlQUFZLDRCQUFnQixNQUFoQixvQkFBOEIsR0FBOUI7S0FBWiIsImZpbGUiOiJheGVzLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9NYXR0L1NpdGVzL3BvcG1vdGlvbiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZURlbGltaXRlZCwgc3BsaXRTcGFjZURlbGltaXRlZCB9IGZyb20gJy4uL2luYy91dGlscyc7XG5pbXBvcnQgcHhWYWx1ZVR5cGUgZnJvbSAnLi9weCc7XG5pbXBvcnQgeyBheGVzIH0gZnJvbSAnLi9zZXR0aW5ncy9kaWN0aW9uYXJ5JztcblxuZXhwb3J0IGRlZmF1bHQge1xuICAgIGRlZmF1bHRQcm9wczogcHhWYWx1ZVR5cGUuZGVmYXVsdFByb3BzLFxuICAgICAgICBcbiAgICAvKlxuICAgICAgICBTcGxpdCBwb3NpdGlvbnMgaW4gZm9ybWF0IFwiWCBZIFpcIlxuICAgICAgICBcbiAgICAgICAgQHBhcmFtIFtzdHJpbmddOiBQb3NpdGlvbiB2YWx1ZXNcbiAgICAgICAgICAgIFwiMjAlIDMwJSAwXCIgLT4gezIwJSwgMzAlLCAwfVxuICAgICAgICAgICAgXCIyMCUgMzAlXCIgLT4gezIwJSwgMzAlfVxuICAgICAgICAgICAgXCIyMCVcIiAtPiB7MjAlLCAyMCV9XG4gICAgKi9cbiAgICBzcGxpdDogKHZhbHVlKSA9PiB7XG4gICAgICAgIGNvbnN0IHNwbGl0VmFsdWVzID0gc3BsaXRTcGFjZURlbGltaXRlZCh2YWx1ZSk7XG4gICAgICAgIGNvbnN0IG51bUF4ZXMgPSBzcGxpdFZhbHVlcy5sZW5ndGg7XG4gICAgICAgIGNvbnN0IHNwbGl0VmFsdWUgPSB7XG4gICAgICAgICAgICBYOiBzcGxpdFZhbHVlc1swXSxcbiAgICAgICAgICAgIFk6IChudW1BeGVzID4gMSkgPyBzcGxpdFZhbHVlc1sxXSA6IHNwbGl0VmFsdWVzWzBdXG4gICAgICAgIH07XG5cbiAgICAgICAgaWYgKG51bUF4ZXMgPiAyKSB7XG4gICAgICAgICAgICBzcGxpdFZhbHVlLlogPSBzcGxpdFZhbHVlc1syXTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBzcGxpdFZhbHVlO1xuICAgIH0sXG5cbiAgICBjb21iaW5lOiAodmFsdWVzKSA9PiBjcmVhdGVEZWxpbWl0ZWQodmFsdWVzLCBheGVzLCAnICcpXG59O1xuIl19

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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy92YWx1ZS10eXBlcy9jb2xvci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUlBLElBQU0sYUFBYSw2Q0FBYjtBQUNOLElBQU0sZ0JBQWdCLFdBQVcsTUFBWDs7a0JBRVA7QUFDWCwrQkFBbUIsY0FBSSxZQUFKLEVBQXFCLGNBQUksWUFBSixDQUF4Qzs7QUFFQSxVQUFNLFVBQUMsS0FBRDtlQUFXLGNBQUksSUFBSixDQUFTLEtBQVQsS0FBbUIsY0FBSSxJQUFKLENBQVMsS0FBVCxDQUFuQixJQUFzQyxjQUFJLElBQUosQ0FBUyxLQUFULENBQXRDO0tBQVg7O0FBRU4sV0FBTyxVQUFDLEtBQUQsRUFBVztBQUNkLGFBQUssSUFBSSxJQUFJLENBQUosRUFBTyxJQUFJLGFBQUosRUFBbUIsR0FBbkMsRUFBd0M7QUFDcEMsZ0JBQUksV0FBVyxDQUFYLEVBQWMsSUFBZCxDQUFtQixLQUFuQixDQUFKLEVBQStCO0FBQzNCLHVCQUFPLFdBQVcsQ0FBWCxFQUFjLEtBQWQsQ0FBb0IsS0FBcEIsQ0FBUCxDQUQyQjthQUEvQjtTQURKO0tBREc7O0FBUVAsYUFBUyxVQUFDLE1BQUQ7ZUFBWSxNQUFDLENBQU8sR0FBUCxLQUFlLFNBQWYsR0FBNEIsY0FBSSxPQUFKLENBQVksTUFBWixDQUE3QixHQUFtRCxjQUFJLE9BQUosQ0FBWSxNQUFaLENBQW5EO0tBQVoiLCJmaWxlIjoiY29sb3IuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL01hdHQvU2l0ZXMvcG9wbW90aW9uIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHJnYiBmcm9tICcuL3JnYic7XG5pbXBvcnQgaHNsIGZyb20gJy4vaHNsJztcbmltcG9ydCBoZXggZnJvbSAnLi9oZXgnO1xuXG5jb25zdCBjb2xvclR5cGVzID0gW3JnYiwgaHNsLCBoZXhdO1xuY29uc3QgbnVtQ29sb3JUeXBlcyA9IGNvbG9yVHlwZXMubGVuZ3RoO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgZGVmYXVsdFByb3BzOiB7IC4uLnJnYi5kZWZhdWx0UHJvcHMsIC4uLmhzbC5kZWZhdWx0UHJvcHMgfSxcblxuICAgIHRlc3Q6ICh2YWx1ZSkgPT4gcmdiLnRlc3QodmFsdWUpIHx8IGhleC50ZXN0KHZhbHVlKSB8fCBoc2wudGVzdCh2YWx1ZSksXG5cbiAgICBzcGxpdDogKHZhbHVlKSA9PiB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbnVtQ29sb3JUeXBlczsgaSsrKSB7XG4gICAgICAgICAgICBpZiAoY29sb3JUeXBlc1tpXS50ZXN0KHZhbHVlKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBjb2xvclR5cGVzW2ldLnNwbGl0KHZhbHVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICBjb21iaW5lOiAodmFsdWVzKSA9PiAodmFsdWVzLlJlZCAhPT0gdW5kZWZpbmVkKSA/IHJnYi5jb21iaW5lKHZhbHVlcykgOiBoc2wuY29tYmluZSh2YWx1ZXMpXG59O1xuIl19

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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy92YWx1ZS10eXBlcy9jb21wbGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUVBLElBQU0sY0FBYyxrQkFBZDtBQUNOLElBQU0sZ0JBQWdCLFVBQUMsS0FBRDtXQUFXLE9BQU8sS0FBUCxHQUFlLEdBQWY7Q0FBWDs7a0JBRVA7O0FBRVgsVUFBTSxVQUFDLEtBQUQsRUFBVztBQUNiLFlBQU0sVUFBVSxNQUFNLEtBQU4sQ0FBWSxXQUFaLENBQVYsQ0FETztBQUViLGVBQVEsb0JBQVEsT0FBUixLQUFvQixRQUFRLE1BQVIsR0FBaUIsQ0FBakIsQ0FGZjtLQUFYOztBQUtOLGNBQVUsVUFBQyxLQUFELEVBQVc7QUFDakIsWUFBSSxVQUFVLENBQVYsQ0FEYTtBQUVqQixlQUFPLE1BQU0sT0FBTixDQUFjLFdBQWQsRUFBMkI7bUJBQU0sY0FBYyxTQUFkO1NBQU4sQ0FBbEMsQ0FGaUI7S0FBWDs7QUFLVixXQUFPLFVBQUMsS0FBRCxFQUFXO0FBQ2QsWUFBTSxhQUFhLEVBQWIsQ0FEUTs7QUFHZCxjQUFNLEtBQU4sQ0FBWSxXQUFaLEVBQXlCLE9BQXpCLENBQWlDLFVBQUMsS0FBRCxFQUFRLENBQVI7bUJBQWMsV0FBVyxDQUFYLElBQWdCLEtBQWhCO1NBQWQsQ0FBakMsQ0FIYzs7QUFLZCxlQUFPLFVBQVAsQ0FMYztLQUFYOztBQVFQLGFBQVMsVUFBQyxNQUFELEVBQVMsUUFBVCxFQUFzQjtBQUMzQixhQUFLLElBQUksR0FBSixJQUFXLE1BQWhCLEVBQXdCO0FBQ3BCLGdCQUFJLE9BQU8sY0FBUCxDQUFzQixHQUF0QixDQUFKLEVBQWdDO0FBQzVCLDJCQUFXLFNBQVMsT0FBVCxDQUFpQixjQUFjLEdBQWQsQ0FBakIsRUFBcUMsT0FBTyxHQUFQLENBQXJDLENBQVgsQ0FENEI7YUFBaEM7U0FESjs7QUFNQSxlQUFPLFFBQVAsQ0FQMkI7S0FBdEIiLCJmaWxlIjoiY29tcGxleC5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvTWF0dC9TaXRlcy9wb3Btb3Rpb24iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBpc0FycmF5IH0gZnJvbSAnLi4vaW5jL3V0aWxzJztcblxuY29uc3QgRkxPQVRfUkVHRVggPSAvKC0pPyhcXGRbXFxkXFwuXSopL2c7XG5jb25zdCBnZW5lcmF0ZVRva2VuID0gKHRva2VuKSA9PiAnJHsnICsgdG9rZW4gKyAnfSc7XG5cbmV4cG9ydCBkZWZhdWx0IHtcblxuICAgIHRlc3Q6ICh2YWx1ZSkgPT4ge1xuICAgICAgICBjb25zdCBtYXRjaGVzID0gdmFsdWUubWF0Y2goRkxPQVRfUkVHRVgpO1xuICAgICAgICByZXR1cm4gKGlzQXJyYXkobWF0Y2hlcykgJiYgbWF0Y2hlcy5sZW5ndGggPiAxKTtcbiAgICB9LFxuXG4gICAgdGVtcGxhdGU6ICh2YWx1ZSkgPT4ge1xuICAgICAgICBsZXQgY291bnRlciA9IDA7XG4gICAgICAgIHJldHVybiB2YWx1ZS5yZXBsYWNlKEZMT0FUX1JFR0VYLCAoKSA9PiBnZW5lcmF0ZVRva2VuKGNvdW50ZXIrKykpO1xuICAgIH0sXG5cbiAgICBzcGxpdDogKHZhbHVlKSA9PiB7XG4gICAgICAgIGNvbnN0IHNwbGl0VmFsdWUgPSB7fTtcbiAgICAgICAgXG4gICAgICAgIHZhbHVlLm1hdGNoKEZMT0FUX1JFR0VYKS5mb3JFYWNoKCh2YWx1ZSwgaSkgPT4gc3BsaXRWYWx1ZVtpXSA9IHZhbHVlKTtcblxuICAgICAgICByZXR1cm4gc3BsaXRWYWx1ZTtcbiAgICB9LFxuXG4gICAgY29tYmluZTogKHZhbHVlcywgdGVtcGxhdGUpID0+IHtcbiAgICAgICAgZm9yIChsZXQga2V5IGluIHZhbHVlcykge1xuICAgICAgICAgICAgaWYgKHZhbHVlcy5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgICAgICAgdGVtcGxhdGUgPSB0ZW1wbGF0ZS5yZXBsYWNlKGdlbmVyYXRlVG9rZW4oa2V5KSwgdmFsdWVzW2tleV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRlbXBsYXRlO1xuICAgIH1cblxufTsiXX0=

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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy92YWx1ZS10eXBlcy9oZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztrQkFFZTtBQUNYLGtCQUFjLGNBQUksWUFBSjs7QUFFZCxVQUFNLFVBQUMsS0FBRDtlQUFZLFNBQVMsTUFBTSxPQUFOLENBQWMsR0FBZCxJQUFxQixDQUFDLENBQUQ7S0FBMUM7O0FBRU4sV0FBTyxVQUFDLEtBQUQsRUFBVztBQUNkLFlBQUksYUFBSjtZQUFPLGFBQVA7WUFBVSxhQUFWOzs7QUFEYyxZQUlWLE1BQU0sTUFBTixHQUFlLENBQWYsRUFBa0I7QUFDbEIsZ0JBQUksTUFBTSxNQUFOLENBQWEsQ0FBYixFQUFnQixDQUFoQixDQUFKLENBRGtCO0FBRWxCLGdCQUFJLE1BQU0sTUFBTixDQUFhLENBQWIsRUFBZ0IsQ0FBaEIsQ0FBSixDQUZrQjtBQUdsQixnQkFBSSxNQUFNLE1BQU4sQ0FBYSxDQUFiLEVBQWdCLENBQWhCLENBQUo7OztBQUhrQixTQUF0QixNQU1PO0FBQ0gsb0JBQUksTUFBTSxNQUFOLENBQWEsQ0FBYixFQUFnQixDQUFoQixDQUFKLENBREc7QUFFSCxvQkFBSSxNQUFNLE1BQU4sQ0FBYSxDQUFiLEVBQWdCLENBQWhCLENBQUosQ0FGRztBQUdILG9CQUFJLE1BQU0sTUFBTixDQUFhLENBQWIsRUFBZ0IsQ0FBaEIsQ0FBSixDQUhHO0FBSUgscUJBQUssQ0FBTCxDQUpHO0FBS0gscUJBQUssQ0FBTCxDQUxHO0FBTUgscUJBQUssQ0FBTCxDQU5HO2FBTlA7O0FBZUEsZUFBTztBQUNILGlCQUFLLFNBQVMsQ0FBVCxFQUFZLEVBQVosQ0FBTDtBQUNBLG1CQUFPLFNBQVMsQ0FBVCxFQUFZLEVBQVosQ0FBUDtBQUNBLGtCQUFNLFNBQVMsQ0FBVCxFQUFZLEVBQVosQ0FBTjtBQUNBLG1CQUFPLENBQVA7U0FKSixDQW5CYztLQUFYOztBQTJCUCxhQUFTLFVBQUMsTUFBRDtlQUFZLGNBQUksT0FBSixDQUFZLE1BQVo7S0FBWiIsImZpbGUiOiJoZXguanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL01hdHQvU2l0ZXMvcG9wbW90aW9uIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHJnYiBmcm9tICcuL3JnYic7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBkZWZhdWx0UHJvcHM6IHJnYi5kZWZhdWx0UHJvcHMsXG5cbiAgICB0ZXN0OiAodmFsdWUpID0+ICh2YWx1ZSAmJiB2YWx1ZS5pbmRleE9mKCcjJykgPiAtMSksXG5cbiAgICBzcGxpdDogKHZhbHVlKSA9PiB7XG4gICAgICAgIGxldCByLCBnLCBiO1xuXG4gICAgICAgIC8vIElmIHdlIGhhdmUgNiBjaGFyYWN0ZXJzLCBpZSAjRkYwMDAwXG4gICAgICAgIGlmICh2YWx1ZS5sZW5ndGggPiA0KSB7XG4gICAgICAgICAgICByID0gdmFsdWUuc3Vic3RyKDEsIDIpO1xuICAgICAgICAgICAgZyA9IHZhbHVlLnN1YnN0cigzLCAyKTtcbiAgICAgICAgICAgIGIgPSB2YWx1ZS5zdWJzdHIoNSwgMik7XG5cbiAgICAgICAgLy8gT3Igd2UgaGF2ZSAzIGNoYXJhY3RlcnMsIGllICNGMDBcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHIgPSB2YWx1ZS5zdWJzdHIoMSwgMSk7XG4gICAgICAgICAgICBnID0gdmFsdWUuc3Vic3RyKDIsIDEpO1xuICAgICAgICAgICAgYiA9IHZhbHVlLnN1YnN0cigzLCAxKTtcbiAgICAgICAgICAgIHIgKz0gcjtcbiAgICAgICAgICAgIGcgKz0gZztcbiAgICAgICAgICAgIGIgKz0gYjtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBSZWQ6IHBhcnNlSW50KHIsIDE2KSxcbiAgICAgICAgICAgIEdyZWVuOiBwYXJzZUludChnLCAxNiksXG4gICAgICAgICAgICBCbHVlOiBwYXJzZUludChiLCAxNiksXG4gICAgICAgICAgICBBbHBoYTogMVxuICAgICAgICB9O1xuICAgIH0sXG5cbiAgICBjb21iaW5lOiAodmFsdWVzKSA9PiByZ2IuY29tYmluZSh2YWx1ZXMpXG59OyJdfQ==

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _defaultProps = __webpack_require__(46);
	
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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy92YWx1ZS10eXBlcy9oc2wuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztrQkFJZTtBQUNYLGtCQUFjO0FBQ1YsYUFBSztBQUNELGlCQUFLLENBQUw7QUFDQSxpQkFBSyxHQUFMO1NBRko7QUFJQSx5Q0FMVTtBQU1WLHdDQU5VO0FBT1Ysb0NBUFU7S0FBZDs7QUFVQSxVQUFNLFVBQUMsS0FBRDtlQUFZLFNBQVMsTUFBTSxPQUFOLENBQWMsS0FBZCxJQUF1QixDQUFDLENBQUQ7S0FBNUM7O0FBRU4sV0FBTyxVQUFDLEtBQUQ7ZUFBVywyQkFBZSxLQUFmO0tBQVg7O0FBRVAsYUFBUyxVQUFDLE1BQUQ7ZUFBWSxpQ0FBcUIsNEJBQWdCLE1BQWhCLG1CQUFrQyxJQUFsQyxFQUF3QyxDQUF4QyxDQUFyQixFQUFpRSxNQUFqRTtLQUFaIiwiZmlsZSI6ImhzbC5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvTWF0dC9TaXRlcy9wb3Btb3Rpb24iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBwZXJjZW50LCBvcGFjaXR5IH0gZnJvbSAnLi9zZXR0aW5ncy9kZWZhdWx0LXByb3BzJztcbmltcG9ydCB7IGhzbCBhcyBoc2xUZXJtcyB9IGZyb20gJy4vc2V0dGluZ3MvZGljdGlvbmFyeSc7XG5pbXBvcnQgeyBjcmVhdGVEZWxpbWl0ZWQsIGNyZWF0ZUZ1bmN0aW9uU3RyaW5nLCBnZXRDb2xvclZhbHVlcyB9IGZyb20gJy4uL2luYy91dGlscyc7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBkZWZhdWx0UHJvcHM6IHtcbiAgICAgICAgSHVlOiB7XG4gICAgICAgICAgICBtaW46IDAsXG4gICAgICAgICAgICBtYXg6IDM2MFxuICAgICAgICB9LFxuICAgICAgICBTYXR1cmF0aW9uOiBwZXJjZW50LFxuICAgICAgICBMaWdodG5lc3M6IHBlcmNlbnQsXG4gICAgICAgIEFscGhhOiBvcGFjaXR5XG4gICAgfSxcblxuICAgIHRlc3Q6ICh2YWx1ZSkgPT4gKHZhbHVlICYmIHZhbHVlLmluZGV4T2YoJ2hzbCcpID4gLTEpLFxuXG4gICAgc3BsaXQ6ICh2YWx1ZSkgPT4gZ2V0Q29sb3JWYWx1ZXModmFsdWUsIGhzbFRlcm1zKSxcblxuICAgIGNvbWJpbmU6ICh2YWx1ZXMpID0+IGNyZWF0ZUZ1bmN0aW9uU3RyaW5nKGNyZWF0ZURlbGltaXRlZCh2YWx1ZXMsIGhzbFRlcm1zLCAnLCAnLCAyKSwgJ2hzbGEnKVxufTtcbiJdfQ==

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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy92YWx1ZS10eXBlcy9wb3NpdGlvbnMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7a0JBSWU7QUFDWCxrQkFBYyxhQUFZLFlBQVo7Ozs7Ozs7Ozs7Ozs7QUFhZCxXQUFPLFVBQUMsS0FBRCxFQUFXO0FBQ2QsWUFBTSxhQUFhLEVBQWIsQ0FEUTtBQUVkLFlBQU0saUJBQWlCLGdDQUFvQixLQUFwQixDQUFqQixDQUZRO0FBR2QsWUFBTSxlQUFlLGVBQWUsTUFBZixDQUhQO0FBSWQsWUFBTSxXQUFXLFlBQUMsS0FBaUIsQ0FBakIsR0FBc0IsQ0FBdkIsR0FBMkIsQ0FBM0IsQ0FKSDtBQUtkLFlBQUksSUFBSSxDQUFKLENBTFU7O0FBT2QsYUFBSyxJQUFJLElBQUksQ0FBSixFQUFPLElBQUksQ0FBSixFQUFPLEdBQXZCLEVBQTRCO0FBQ3hCLHVCQUFXLHNCQUFVLENBQVYsQ0FBWCxJQUEyQixlQUFlLENBQWYsQ0FBM0I7OztBQUR3QixhQUl4QixHQUp3QjtBQUt4QixnQkFBSSxDQUFDLEtBQU0sWUFBTixHQUFzQixJQUFJLFFBQUosR0FBZSxDQUF0QyxDQUxvQjtTQUE1Qjs7QUFRQSxlQUFPLFVBQVAsQ0FmYztLQUFYOztBQWtCUCxhQUFTLFVBQUMsTUFBRDtlQUFZLDRCQUFnQixNQUFoQix5QkFBbUMsR0FBbkM7S0FBWiIsImZpbGUiOiJwb3NpdGlvbnMuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL01hdHQvU2l0ZXMvcG9wbW90aW9uIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgcG9zaXRpb25zIH0gZnJvbSAnLi9zZXR0aW5ncy9kaWN0aW9uYXJ5JztcbmltcG9ydCB7IGNyZWF0ZURlbGltaXRlZCwgc3BsaXRTcGFjZURlbGltaXRlZCB9IGZyb20gJy4uL2luYy91dGlscyc7XG5pbXBvcnQgcHhWYWx1ZVR5cGUgZnJvbSAnLi9weCc7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBkZWZhdWx0UHJvcHM6IHB4VmFsdWVUeXBlLmRlZmF1bHRQcm9wcyxcblxuICAgIC8qXG4gICAgICAgIFNwbGl0IGRpbWVuc2lvbnMgaW4gZm9ybWF0IFwiVG9wIFJpZ2h0IEJvdHRvbSBMZWZ0XCJcbiAgICAgICAgXG4gICAgICAgIEBwYXJhbSBbc3RyaW5nXTogUG9zaXRpb24gdmFsdWVzXG4gICAgICAgICAgICBcIjIwcHggMCAzMHB4IDQwcHhcIiAtPiB7MjBweCwgMCwgMzBweCwgNDBweH1cbiAgICAgICAgICAgIFwiMjBweCAwIDMwcHhcIiAtPiB7MjBweCwgMCwgMzBweCwgMH1cbiAgICAgICAgICAgIFwiMjBweCAwXCIgLT4gezIwcHgsIDAsIDIwcHgsIDB9XG4gICAgICAgICAgICBcIjIwcHhcIiAtPiB7MjBweCwgMjBweCwgMjBweCwgMjBweH1cbiAgICAgICAgXG4gICAgICAgIEByZXR1cm4gW29iamVjdF06IE9iamVjdCB3aXRoIFQvUi9CL0wgbWV0cmljc1xuICAgICovXG4gICAgc3BsaXQ6ICh2YWx1ZSkgPT4ge1xuICAgICAgICBjb25zdCBzcGxpdFZhbHVlID0ge307XG4gICAgICAgIGNvbnN0IHNwbGl0UG9zaXRpb25zID0gc3BsaXRTcGFjZURlbGltaXRlZCh2YWx1ZSk7XG4gICAgICAgIGNvbnN0IG51bVBvc2l0aW9ucyA9IHNwbGl0UG9zaXRpb25zLmxlbmd0aDtcbiAgICAgICAgY29uc3QganVtcEJhY2sgPSAobnVtUG9zaXRpb25zICE9PSAxKSA/IDIgOiAxO1xuICAgICAgICBsZXQgaiA9IDA7XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCA0OyBpKyspIHtcbiAgICAgICAgICAgIHNwbGl0VmFsdWVbcG9zaXRpb25zW2ldXSA9IHNwbGl0UG9zaXRpb25zW2pdO1xuXG4gICAgICAgICAgICAvLyBKdW1wIGJhY2sgKHRvIHN0YXJ0KSBjb3VudGVyIGlmIHdlJ3ZlIHJlYWNoZWQgdGhlIGVuZCBvZiBvdXIgdmFsdWVzXG4gICAgICAgICAgICBqKys7XG4gICAgICAgICAgICBqID0gKGogPT09IG51bVBvc2l0aW9ucykgPyBqIC0ganVtcEJhY2sgOiBqO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHNwbGl0VmFsdWU7XG4gICAgfSxcblxuICAgIGNvbWJpbmU6ICh2YWx1ZXMpID0+IGNyZWF0ZURlbGltaXRlZCh2YWx1ZXMsIHBvc2l0aW9ucywgJyAnKVxufTsiXX0=

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
	
	var _utils = __webpack_require__(2);
	
	var _dictionary = __webpack_require__(47);
	
	var _defaultProps = __webpack_require__(46);
	
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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy92YWx1ZS10eXBlcy9zaGFkb3cuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBS0EsSUFBTSwwQkFBMEIsbUJBQVksS0FBWixDQUFrQixDQUFsQixFQUFxQixDQUFyQixDQUExQjs7a0JBRVM7QUFDWCwrQkFDTyxnQkFBTSxZQUFOO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7TUFMSjs7QUFRQSxXQUFPLFVBQUMsS0FBRCxFQUFXO0FBQ2QsWUFBTSxPQUFPLGdDQUFvQixLQUFwQixDQUFQLENBRFE7QUFFZCxZQUFJLGtCQUFrQixLQUFsQixDQUZVO0FBR2QsWUFBSSxZQUFZLEVBQVosQ0FIVTtBQUlkLFlBQUksYUFBYSxFQUFiLENBSlU7O0FBTWQsYUFBSyxPQUFMLENBQWEsVUFBQyxHQUFELEVBQU0sQ0FBTixFQUFZOztBQUVyQixnQkFBSSxtQkFBbUIsZ0JBQU0sSUFBTixDQUFXLEdBQVgsQ0FBbkIsRUFBb0M7QUFDcEMsa0NBQWtCLElBQWxCLENBRG9DO0FBRXBDLDZCQUFhLEdBQWI7OztBQUZvQyxhQUF4QyxNQUtPO0FBQ0gsK0JBQVcsbUJBQVksQ0FBWixDQUFYLElBQTZCLEdBQTdCLENBREc7aUJBTFA7U0FGUyxDQUFiLENBTmM7O0FBa0JkLFlBQU0sa0JBQWtCLGdCQUFNLEtBQU4sQ0FBWSxTQUFaLENBQWxCLENBbEJROztBQW9CZCw0QkFBWSxjQUFZLG1DQUF4QixDQXBCYztLQUFYOztBQXVCUCxhQUFTLFVBQUMsTUFBRDtlQUFZLDRCQUFnQixNQUFoQixFQUF3Qix1QkFBeEIsRUFBaUQsR0FBakQsSUFBd0QsZ0JBQU0sT0FBTixDQUFjLE1BQWQsQ0FBeEQ7S0FBWiIsImZpbGUiOiJzaGFkb3cuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL01hdHQvU2l0ZXMvcG9wbW90aW9uIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNvbG9yIGZyb20gJy4vY29sb3InO1xuaW1wb3J0IHsgZGVmYXVsdFByb3BzIGFzIHB4RGVmYXVsdFByb3BzIH0gZnJvbSAnLi9weCc7XG5pbXBvcnQgeyBzaGFkb3cgYXMgc2hhZG93VGVybXMgfSBmcm9tICcuL3NldHRpbmdzL2RpY3Rpb25hcnknO1xuaW1wb3J0IHsgc3BsaXRTcGFjZURlbGltaXRlZCwgY3JlYXRlRGVsaW1pdGVkIH0gZnJvbSAnLi4vaW5jL3V0aWxzJztcblxuY29uc3Qgc2hhZG93V2l0aG91dENvbG9yVGVybXMgPSBzaGFkb3dUZXJtcy5zbGljZSgwLCA0KTtcblxuZXhwb3J0IGRlZmF1bHQge1xuICAgIGRlZmF1bHRQcm9wczoge1xuICAgICAgICAuLi5jb2xvci5kZWZhdWx0UHJvcHMsXG4gICAgICAgIFg6IHB4RGVmYXVsdFByb3BzLFxuICAgICAgICBZOiBweERlZmF1bHRQcm9wcyxcbiAgICAgICAgUmFkaXVzOiBweERlZmF1bHRQcm9wcyxcbiAgICAgICAgU3ByZWFkOiBweERlZmF1bHRQcm9wc1xuICAgIH0sXG5cbiAgICBzcGxpdDogKHZhbHVlKSA9PiB7XG4gICAgICAgIGNvbnN0IGJpdHMgPSBzcGxpdFNwYWNlRGVsaW1pdGVkKHZhbHVlKTtcbiAgICAgICAgbGV0IGhhc1JlYWNoZWRDb2xvciA9IGZhbHNlO1xuICAgICAgICBsZXQgY29sb3JQcm9wID0gJyc7XG4gICAgICAgIGxldCBzcGxpdFZhbHVlID0ge307XG5cbiAgICAgICAgYml0cy5mb3JFYWNoKChiaXQsIGkpID0+IHtcbiAgICAgICAgICAgIC8vIElmIHdlJ3ZlIHJlYWNoZWQgdGhlIGNvbG9yIHByb3BzLCBhcHBlbmQgdG8gY29sb3Igc3RyaW5nXG4gICAgICAgICAgICBpZiAoaGFzUmVhY2hlZENvbG9yIHx8IGNvbG9yLnRlc3QoYml0KSkge1xuICAgICAgICAgICAgICAgIGhhc1JlYWNoZWRDb2xvciA9IHRydWU7XG4gICAgICAgICAgICAgICAgY29sb3JQcm9wICs9IGJpdDtcblxuICAgICAgICAgICAgLy8gRWxzZSBwcm9jZXNzIHNoYWRvdyB2YWx1ZVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBzcGxpdFZhbHVlW3NoYWRvd1Rlcm1zW2ldXSA9IGJpdDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgY29uc3Qgc3BsaXRDb2xvclByb3BzID0gY29sb3Iuc3BsaXQoY29sb3JQcm9wKTtcblxuICAgICAgICByZXR1cm4geyAuLi5zcGxpdFZhbHVlLCBzcGxpdENvbG9yUHJvcHMgfTtcbiAgICB9LFxuXG4gICAgY29tYmluZTogKHZhbHVlcykgPT4gY3JlYXRlRGVsaW1pdGVkKHZhbHVlcywgc2hhZG93V2l0aG91dENvbG9yVGVybXMsICcgJykgKyBjb2xvci5jb21iaW5lKHZhbHVlcylcbn07XG4iXX0=

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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy92YWx1ZS10eXBlcy91bml0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBU0EsSUFBTSxtQkFBbUIsVUFBQyxLQUFELEVBQVc7QUFDaEMsUUFBSSxNQUFNLEtBQU4sRUFBYTtBQUNiLFlBQU0sYUFBYSxNQUFNLEtBQU4sQ0FBWSxtQkFBWixDQUFiLENBRE87O0FBR2IsZUFBTztBQUNILG1CQUFPLFdBQVcsV0FBVyxDQUFYLENBQVgsQ0FBUDtBQUNBLGtCQUFPLFdBQVcsQ0FBWCxDQUFQO1NBRkosQ0FIYTtLQUFqQixNQU9PO0FBQ0gsZUFBTyxFQUFFLFlBQUYsRUFBUCxDQURHO0tBUFA7Q0FEcUI7O2tCQWFWO0FBQ1gsVUFBTSxVQUFVLFFBQVYsRUFBb0I7Z0NBQ0osaUJBQWlCLFFBQWpCLEVBREk7O1lBQ2QsZ0NBRGM7O0FBRXRCLGVBQU8saUJBQUMsQ0FBTSxLQUFOLEtBQWdCLENBQUMsTUFBTSxLQUFOLENBQUQsR0FBaUIsSUFBbEMsR0FBeUMsS0FBekMsQ0FGZTtLQUFwQjs7QUFLTixXQUFPLFVBQVUsUUFBVixFQUFvQixNQUFwQixFQUE0QjtpQ0FDUCxpQkFBaUIsUUFBakIsRUFETzs7WUFDdkIsaUNBRHVCO1lBQ2hCLCtCQURnQjs7QUFHL0IsWUFBSSxRQUFRLFNBQVMsSUFBVCxFQUFlO0FBQ3ZCLG1CQUFPLElBQVAsR0FBYyxJQUFkLENBRHVCO1NBQTNCOztBQUlBLGVBQU8sS0FBUCxDQVArQjtLQUE1Qjs7QUFVUCxlQUFXLFVBQUMsTUFBRCxFQUFTLE1BQVQ7ZUFBb0IsVUFBVSxPQUFPLElBQVAsSUFBZSxFQUFmLENBQVY7S0FBcEIiLCJmaWxlIjoidW5pdC5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvTWF0dC9TaXRlcy9wb3Btb3Rpb24iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBpc051bSB9IGZyb20gJy4uL2luYy91dGlscyc7XG4vKlxuICAgIFNwbGl0IGEgdmFsdWUgaW50byBhIHZhbHVlL3VuaXQgb2JqZWN0XG4gICAgXG4gICAgICAgIFwiMjAwcHhcIiAtPiB7IHZhbHVlOiAyMDAsIHVuaXQ6IFwicHhcIiB9XG4gICAgICAgIFxuICAgIEBwYXJhbSBbc3RyaW5nXTogVmFsdWUgdG8gc3BsaXRcbiAgICBAcmV0dXJuIFtvYmplY3RdOiBPYmplY3Qgd2l0aCB2YWx1ZSBhbmQgdW5pdCBwcm9wc1xuKi9cbmNvbnN0IGZpbmRWYWx1ZUFuZFVuaXQgPSAodmFsdWUpID0+IHtcbiAgICBpZiAodmFsdWUubWF0Y2gpIHtcbiAgICAgICAgY29uc3Qgc3BsaXRWYWx1ZSA9IHZhbHVlLm1hdGNoKC8oLT9cXGQqXFwuP1xcZCopKC4qKS8pO1xuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB2YWx1ZTogcGFyc2VGbG9hdChzcGxpdFZhbHVlWzFdKSxcbiAgICAgICAgICAgIHVuaXQ6ICBzcGxpdFZhbHVlWzJdXG4gICAgICAgIH07XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHsgdmFsdWUgfTtcbiAgICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgdGVzdDogZnVuY3Rpb24gKHVucGFyc2VkKSB7XG4gICAgICAgIGNvbnN0IHsgdmFsdWUgfSA9IGZpbmRWYWx1ZUFuZFVuaXQodW5wYXJzZWQpO1xuICAgICAgICByZXR1cm4gKGlzTnVtKHZhbHVlKSAmJiAhaXNOYU4odmFsdWUpKSA/IHRydWUgOiBmYWxzZTtcbiAgICB9LFxuXG4gICAgcGFyc2U6IGZ1bmN0aW9uICh1bnBhcnNlZCwgcGFyZW50KSB7XG4gICAgICAgIGNvbnN0IHsgdmFsdWUsIHVuaXQgfSA9IGZpbmRWYWx1ZUFuZFVuaXQodW5wYXJzZWQpO1xuXG4gICAgICAgIGlmICh1bml0ICYmIHVuaXQgIT09IHVuaXQpIHtcbiAgICAgICAgICAgIHBhcmVudC51bml0ID0gdW5pdDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9LFxuXG4gICAgc2VyaWFsaXplOiAocGFyc2VkLCBwYXJlbnQpID0+IHBhcnNlZCArIChwYXJlbnQudW5pdCB8fCAnJylcbn07XG4iXX0=

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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9pbmMvdHJhbnNmb3JtZXJzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFFTyxJQUFNLHNDQUFlLFVBQUMsSUFBRCxFQUFPLEVBQVAsRUFBYztBQUN0QyxRQUFNLFlBQVksS0FBSyxNQUFMLENBRG9COztBQUd0QyxXQUFPLFVBQUMsS0FBRCxFQUFXO0FBQ2QsYUFBSyxJQUFJLElBQUksQ0FBSixFQUFPLElBQUksU0FBSixFQUFlLEdBQS9CLEVBQW9DO0FBQ2hDLGdCQUFJLFFBQVEsS0FBSyxDQUFMLENBQVIsSUFBbUIsTUFBTSxTQUFOLEVBQWlCO0FBQ3BDLHVCQUFPLGdDQUFxQixvQkFBUyxnQ0FBcUIsS0FBckIsRUFBNEIsS0FBSyxJQUFJLENBQUosQ0FBakMsRUFBeUMsS0FBSyxDQUFMLENBQXpDLENBQVQsRUFBNEQsQ0FBNUQsRUFBK0QsQ0FBL0QsQ0FBckIsRUFBd0YsR0FBRyxJQUFJLENBQUosQ0FBM0YsRUFBbUcsR0FBRyxDQUFILENBQW5HLENBQVAsQ0FEb0M7YUFBeEM7U0FESjtLQURHLENBSCtCO0NBQWQ7O0FBWXJCLElBQU0sMENBQWlCLFVBQUMsQ0FBRCxFQUFJLEdBQUo7UUFBVztXQUNyQyxxQ0FBMEI7QUFDdEIsV0FBRyxPQUFPLE9BQVAsQ0FBZSxPQUFmO0FBQ0gsV0FBRyxPQUFPLE9BQVAsQ0FBZSxPQUFmO0tBRlAsRUFHRyxPQUFPLEtBQVAsQ0FBYSxPQUFiLEVBQXNCLE9BQU8sUUFBUCxDQUFnQixPQUFoQixDQUh6QixDQUdrRCxHQUhsRDtDQUQwQiIsImZpbGUiOiJ0cmFuc2Zvcm1lcnMuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL01hdHQvU2l0ZXMvcG9wbW90aW9uIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZ2V0UHJvZ3Jlc3NGcm9tVmFsdWUsIGdldFZhbHVlRnJvbVByb2dyZXNzLCByZXN0cmljdCwgcG9pbnRGcm9tQW5nbGVBbmREaXN0YW5jZSB9IGZyb20gJy4uL2luYy9jYWxjJztcblxuZXhwb3J0IGNvbnN0IGNyZWF0ZU1hcHBlciA9IChmcm9tLCB0bykgPT4ge1xuICAgIGNvbnN0IG1hcExlbmd0aCA9IGZyb20ubGVuZ3RoO1xuXG4gICAgcmV0dXJuICh2YWx1ZSkgPT4ge1xuICAgICAgICBmb3IgKGxldCBpID0gMTsgaSA8IG1hcExlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAodmFsdWUgPCBmcm9tW2ldIHx8IGkgPT09IG1hcExlbmd0aCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBnZXRWYWx1ZUZyb21Qcm9ncmVzcyhyZXN0cmljdChnZXRQcm9ncmVzc0Zyb21WYWx1ZSh2YWx1ZSwgZnJvbVtpIC0gMV0sIGZyb21baV0pLCAwLCAxKSwgdG9baSAtIDFdLCB0b1tpXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xufTtcblxuZXhwb3J0IGNvbnN0IGNpcmN1bGFyTW90aW9uID0gKHYsIGtleSwgeyB2YWx1ZXMgfSkgPT4gXG4gICAgcG9pbnRGcm9tQW5nbGVBbmREaXN0YW5jZSh7XG4gICAgICAgIHg6IHZhbHVlcy5vcmlnaW5YLmN1cnJlbnQsXG4gICAgICAgIHk6IHZhbHVlcy5vcmlnaW5ZLmN1cnJlbnQgXG4gICAgfSwgdmFsdWVzLmFuZ2xlLmN1cnJlbnQsIHZhbHVlcy5kaXN0YW5jZS5jdXJyZW50KVtrZXldO1xuXG4iXX0=

/***/ },
/* 34 */
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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9pbmMvYmluZC1hZGFwdGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLQSxJQUFNLFlBQVksY0FBWjs7a0JBRVMsVUFBQyxPQUFELEVBQWE7O0FBRXhCLFFBQUksUUFBUSxTQUFSLENBQUosRUFBd0I7QUFDcEIsZUFBTyxRQUFRLFNBQVIsQ0FBUDs7O0FBRG9CLEtBQXhCLE1BSU87QUFDSCxnQkFBSSxtQ0FBSjs7O0FBREcsZ0JBSUMsbUJBQW1CLFdBQW5CLElBQWtDLFFBQVEsT0FBUixLQUFvQixLQUFwQixFQUEyQjtBQUM3RDs7O0FBRDZELGFBQWpFLE1BSU8sSUFBSSxtQkFBbUIsVUFBbkIsRUFBK0I7QUFDdEMsd0JBQUksUUFBUSxPQUFSLEtBQW9CLE1BQXBCLEVBQTRCO0FBQzVCLG1FQUQ0QjtxQkFBaEMsTUFFTztBQUNILCtEQURHO3FCQUZQO2lCQURHOztBQVFQLGdCQUFNLGVBQWUsZ0JBQWdCLE9BQWhCLENBQWY7OztBQWhCSCxrQkFtQkgsQ0FBTyxjQUFQLENBQXNCLE9BQXRCLEVBQStCLFNBQS9CLEVBQTBDO0FBQ3RDLDRCQUFZLEtBQVo7QUFDQSwwQkFBVSxLQUFWO0FBQ0EsdUJBQU8sWUFBUDthQUhKLEVBbkJHOztBQXlCSCxtQkFBTyxZQUFQLENBekJHO1NBSlA7Q0FGVyIsImZpbGUiOiJiaW5kLWFkYXB0ZXIuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL01hdHQvU2l0ZXMvcG9wbW90aW9uIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGFkYXB0ZXIgZnJvbSAnLi4vYWRhcHRlci9hZGFwdGVyJztcbmltcG9ydCBjc3NBZGFwdGVyIGZyb20gJy4uL2FkYXB0ZXIvY3NzLWFkYXB0ZXInO1xuaW1wb3J0IHN2Z0FkYXB0ZXIgZnJvbSAnLi4vYWRhcHRlci9zdmctYWRhcHRlcic7XG5pbXBvcnQgc3ZnUGF0aEFkYXB0ZXIgZnJvbSAnLi4vYWRhcHRlci9zdmctcGF0aC1hZGFwdGVyJztcblxuY29uc3QgU0FWRV9QUk9QID0gJ19fcG1fYWRhcHRlcic7XG5cbmV4cG9ydCBkZWZhdWx0IChlbGVtZW50KSA9PiB7XG4gICAgLy8gUmV0dXJuIGJvdW5kIGFkYXB0ZXIgaWYgcHJlc2VudFxuICAgIGlmIChlbGVtZW50W1NBVkVfUFJPUF0pIHtcbiAgICAgICAgcmV0dXJuIGVsZW1lbnRbU0FWRV9QUk9QXTtcblxuICAgIC8vIE9yIGRldGVjdCBhbmQgYmluZCBhZGFwdGVyXG4gICAgfSBlbHNlIHtcbiAgICAgICAgbGV0IGRldGVjdGVkQWRhcHRlciA9IGFkYXB0ZXI7XG5cbiAgICAgICAgLy8gSWYgSFRNTEVsZW1lbnQgbG9hZCBDU1NcbiAgICAgICAgaWYgKGVsZW1lbnQgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCB8fCBlbGVtZW50LnRhZ05hbWUgPT09ICdzdmcnKSB7XG4gICAgICAgICAgICBkZXRlY3RlZEFkYXB0ZXIgPSBjc3NBZGFwdGVyO1xuXG4gICAgICAgIC8vIE9yIFNWR1xuICAgICAgICB9IGVsc2UgaWYgKGVsZW1lbnQgaW5zdGFuY2VvZiBTVkdFbGVtZW50KSB7XG4gICAgICAgICAgICBpZiAoZWxlbWVudC50YWdOYW1lID09PSAncGF0aCcpIHtcbiAgICAgICAgICAgICAgICBkZXRlY3RlZEFkYXB0ZXIgPSBzdmdQYXRoQWRhcHRlcjtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgZGV0ZWN0ZWRBZGFwdGVyID0gc3ZnQWRhcHRlcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGJvdW5kQWRhcHRlciA9IGRldGVjdGVkQWRhcHRlcihlbGVtZW50KTtcblxuICAgICAgICAvLyBCaW5kIGFkYXB0ZXIgdG8gZWxlbWVudFxuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZWxlbWVudCwgU0FWRV9QUk9QLCB7XG4gICAgICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgICAgICAgIHdyaXRhYmxlOiBmYWxzZSxcbiAgICAgICAgICAgIHZhbHVlOiBib3VuZEFkYXB0ZXJcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIGJvdW5kQWRhcHRlcjtcbiAgICB9XG59O1xuIl19

/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _Input2 = __webpack_require__(10);
	
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
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports.deactivate = exports.getProcessId = undefined;
	exports.activate = activate;
	
	var _timer = __webpack_require__(3);
	
	var _timer2 = _interopRequireDefault(_timer);
	
	var _tick = __webpack_require__(50);
	
	var _tick2 = _interopRequireDefault(_tick);
	
	var _manager = __webpack_require__(51);
	
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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hZGFwdGVyL3N2Zy92YWx1ZS10eXBlLW1hcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztrQkFNZTtBQUNYLHlCQURXO0FBRVgsMkJBRlc7QUFHWCwwQkFIVztBQUlYLDJCQUpXO0FBS1gsMkJBTFc7QUFNWCxtQ0FOVztBQU9YLHdCQVBXO0FBUVgsNEJBUlc7QUFTWCxnQ0FUVztBQVVYLGtDQVZXIiwiZmlsZSI6InZhbHVlLXR5cGUtbWFwLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9NYXR0L1NpdGVzL3BvcG1vdGlvbiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBhbHBoYSBmcm9tICcuLi8uLi92YWx1ZS10eXBlcy9hbHBoYSc7XG5pbXBvcnQgYXhlcyBmcm9tICcuLi8uLi92YWx1ZS10eXBlcy9heGVzJztcbmltcG9ydCBjb2xvciBmcm9tICcuLi8uLi92YWx1ZS10eXBlcy9jb2xvcic7XG5pbXBvcnQgY29tcGxleCBmcm9tICcuLi8uLi92YWx1ZS10eXBlcy9jb21wbGV4JztcbmltcG9ydCBzY2FsZSBmcm9tICcuLi8uLi92YWx1ZS10eXBlcy9zY2FsZSc7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBmaWxsOiBjb2xvcixcbiAgICBzdHJva2U6IGNvbG9yLFxuICAgIHNjYWxlOiBzY2FsZSxcbiAgICBzY2FsZVg6IHNjYWxlLFxuICAgIHNjYWxlWTogc2NhbGUsXG4gICAgdHJhbnNmb3JtT3JpZ2luOiBheGVzLFxuICAgIGQ6IGNvbXBsZXgsXG4gICAgb3BhY2l0eTogYWxwaGEsXG4gICAgZmlsbE9wYWNpdHk6IGFscGhhLFxuICAgIHN0cm9rZU9wYWNpdHk6IGFscGhhXG59OyJdfQ==

/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports.default = build;
	
	var _utils = __webpack_require__(2);
	
	var _transformProps = __webpack_require__(43);
	
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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hZGFwdGVyL2Nzcy92YWx1ZS10eXBlLW1hcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztrQkFTZTs7QUFFWCwwQkFGVztBQUdYLG9DQUhXO0FBSVgsaUNBSlc7QUFLWCx5QkFMVztBQU1YLDJCQU5XOzs7QUFTWCxnQ0FUVztBQVVYLG1DQVZXO0FBV1gscUNBWFc7QUFZWCxzQ0FaVztBQWFYLG9DQWJXO0FBY1gsOEJBZFc7OztBQWlCWCwrQkFqQlc7QUFrQlgsZ0NBbEJXO0FBbUJYLHVCQW5CVztBQW9CWCx3QkFwQlc7OztBQXVCWCxzQ0F2Qlc7QUF3QlgscUNBeEJXO0FBeUJYLG1DQXpCVzs7O0FBNEJYLGdDQTVCVztBQTZCWCwrQkE3Qlc7OztBQWdDWCwyQkFoQ1c7QUFpQ1gsNEJBakNXO0FBa0NYLDRCQWxDVztBQW1DWCw0QkFuQ1c7QUFvQ1gsMEJBcENXO0FBcUNYLDJCQXJDVztBQXNDWCwyQkF0Q1c7QUF1Q1gsMkJBdkNXO0FBd0NYLDBCQXhDVztBQXlDWCwwQkF6Q1c7QUEwQ1gsMEJBMUNXO0FBMkNYLDRCQTNDVztBQTRDWCw0QkE1Q1c7QUE2Q1gsNEJBN0NXO0FBOENYLDZCQTlDVztBQStDWCw0QkEvQ1ciLCJmaWxlIjoidmFsdWUtdHlwZS1tYXAuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL01hdHQvU2l0ZXMvcG9wbW90aW9uIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGFuZ2xlIGZyb20gJy4uLy4uL3ZhbHVlLXR5cGVzL2FuZ2xlJztcbmltcG9ydCBhbHBoYSBmcm9tICcuLi8uLi92YWx1ZS10eXBlcy9hbHBoYSc7XG5pbXBvcnQgYXhlcyBmcm9tICcuLi8uLi92YWx1ZS10eXBlcy9heGVzJztcbmltcG9ydCBjb2xvciBmcm9tICcuLi8uLi92YWx1ZS10eXBlcy9jb2xvcic7XG5pbXBvcnQgc2NhbGUgZnJvbSAnLi4vLi4vdmFsdWUtdHlwZXMvc2NhbGUnO1xuaW1wb3J0IHNoYWRvdyBmcm9tICcuLi8uLi92YWx1ZS10eXBlcy9zaGFkb3cnO1xuaW1wb3J0IHBvc2l0aW9ucyBmcm9tICcuLi8uLi92YWx1ZS10eXBlcy9wb3NpdGlvbnMnO1xuaW1wb3J0IHB4IGZyb20gJy4uLy4uL3ZhbHVlLXR5cGVzL3B4JztcblxuZXhwb3J0IGRlZmF1bHQge1xuICAgIC8vIENvbG9yIHByb3BzXG4gICAgY29sb3I6IGNvbG9yLFxuICAgIGJhY2tncm91bmRDb2xvcjogY29sb3IsXG4gICAgb3V0bGluZUNvbG9yOiBjb2xvcixcbiAgICBmaWxsOiBjb2xvcixcbiAgICBzdHJva2U6IGNvbG9yLFxuXG4gICAgLy8gQm9yZGVyIHByb3BzXG4gICAgYm9yZGVyQ29sb3I6IGNvbG9yLFxuICAgIGJvcmRlclRvcENvbG9yOiBjb2xvcixcbiAgICBib3JkZXJSaWdodENvbG9yOiBjb2xvcixcbiAgICBib3JkZXJCb3R0b21Db2xvcjogY29sb3IsXG4gICAgYm9yZGVyTGVmdENvbG9yOiBjb2xvcixcbiAgICBib3JkZXJSYWRpdXM6IHB4LFxuXG4gICAgLy8gUG9zaXRpb25pbmdcbiAgICBtYXJnaW46IHBvc2l0aW9ucyxcbiAgICBwYWRkaW5nOiBwb3NpdGlvbnMsXG4gICAgd2lkdGg6IHB4LFxuICAgIGhlaWdodDogcHgsXG5cbiAgICAvLyBBeGVzXG4gICAgYmFja2dyb3VuZFBvc2l0aW9uOiBheGVzLFxuICAgIHBlcnNwZWN0aXZlT3JpZ2luOiBheGVzLFxuICAgIHRyYW5zZm9ybU9yaWdpbjogYXhlcyxcblxuICAgIC8vIFNoYWRvd3NcbiAgICB0ZXh0U2hhZG93OiBzaGFkb3csXG4gICAgYm94U2hhZG93OiBzaGFkb3csICAgXG5cbiAgICAvLyBUcmFuc2Zvcm0gcHJvcGVydGllc1xuICAgIHJvdGF0ZTogYW5nbGUsXG4gICAgcm90YXRlWDogYW5nbGUsXG4gICAgcm90YXRlWTogYW5nbGUsXG4gICAgcm90YXRlWjogYW5nbGUsXG4gICAgc2NhbGU6IHNjYWxlLFxuICAgIHNjYWxlWDogc2NhbGUsXG4gICAgc2NhbGVZOiBzY2FsZSxcbiAgICBzY2FsZVo6IHNjYWxlLFxuICAgIHNrZXdYOiBhbmdsZSxcbiAgICBza2V3WTogYW5nbGUsXG4gICAgZGlzdGFuY2U6IHB4LFxuICAgIHRyYW5zbGF0ZVg6IHB4LFxuICAgIHRyYW5zbGF0ZVk6IHB4LFxuICAgIHRyYW5zbGF0ZVo6IHB4LFxuICAgIHBlcnNwZWN0aXZlOiBweCxcbiAgICBvcGFjaXR5OiBhbHBoYVxufTsiXX0=

/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _transformProps = __webpack_require__(43);
	
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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hZGFwdGVyL2Nzcy90cmFuc2Zvcm0tcHJvcHMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBRUEsSUFBSSxpQkFBaUIsRUFBakI7O0FBRUosSUFBTSxRQUFRLE9BQVI7QUFDTixJQUFNLFNBQVMsUUFBVDtBQUNOLElBQU0sd0JBQXdCLHNCQUF4QjtBQUNOLElBQU0sUUFBUSxDQUFDLFdBQUQsRUFBYyxLQUFkLEVBQXFCLE1BQXJCLEVBQTZCLE1BQTdCLEVBQXFDLHFCQUFyQyxDQUFSOztBQUVOLGVBQWUsTUFBZixJQUF5QixlQUFlLEtBQWYsSUFBd0IsZUFBZSxxQkFBZixJQUF3QyxJQUF4Qzs7QUFFakQsTUFBTSxPQUFOLENBQWMsVUFBQyxJQUFEO1NBQVUsaUJBQUssT0FBTCxDQUFhLFVBQUMsSUFBRDtXQUFVLGVBQWUsT0FBTyxJQUFQLENBQWYsR0FBOEIsSUFBOUI7R0FBVjtDQUF2QixDQUFkOztrQkFFZSIsImZpbGUiOiJ0cmFuc2Zvcm0tcHJvcHMuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL01hdHQvU2l0ZXMvcG9wbW90aW9uIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgYXhlcyB9IGZyb20gJy4uLy4uL3ZhbHVlLXR5cGVzL3NldHRpbmdzL2RpY3Rpb25hcnknO1xuXG5sZXQgdHJhbnNmb3JtUHJvcHMgPSB7fTtcblxuY29uc3QgU0NBTEUgPSAnc2NhbGUnO1xuY29uc3QgUk9UQVRFID0gJ3JvdGF0ZSc7XG5jb25zdCBUUkFOU0ZPUk1fUEVSU1BFQ1RJVkUgPSAndHJhbnNmb3JtUGVyc3BlY3RpdmUnO1xuY29uc3QgVEVSTVMgPSBbJ3RyYW5zbGF0ZScsIFNDQUxFLCBST1RBVEUsICdza2V3JywgVFJBTlNGT1JNX1BFUlNQRUNUSVZFXTtcblxudHJhbnNmb3JtUHJvcHNbUk9UQVRFXSA9IHRyYW5zZm9ybVByb3BzW1NDQUxFXSA9IHRyYW5zZm9ybVByb3BzW1RSQU5TRk9STV9QRVJTUEVDVElWRV0gPSB0cnVlO1xuXG5URVJNUy5mb3JFYWNoKCh0ZXJtKSA9PiBheGVzLmZvckVhY2goKGF4aXMpID0+IHRyYW5zZm9ybVByb3BzW3Rlcm0gKyBheGlzXSA9IHRydWUpKTtcblxuZXhwb3J0IGRlZmF1bHQgdHJhbnNmb3JtUHJvcHM7Il19

/***/ },
/* 44 */
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
/* 45 */
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
/* 46 */
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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy92YWx1ZS10eXBlcy9zZXR0aW5ncy9kaWN0aW9uYXJ5LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLElBQU0sSUFBSSxHQUFKO0FBQ04sSUFBTSxJQUFJLEdBQUo7QUFDTixJQUFNLFFBQVEsT0FBUjs7QUFFQyxJQUFNLHNCQUFPLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxHQUFQLENBQVA7QUFDTixJQUFNLG9CQUFNLENBQUMsS0FBRCxFQUFRLE9BQVIsRUFBaUIsTUFBakIsRUFBeUIsS0FBekIsQ0FBTjtBQUNOLElBQU0sb0JBQU0sQ0FBQyxLQUFELEVBQVEsWUFBUixFQUFzQixXQUF0QixFQUFtQyxLQUFuQyxDQUFOO0FBQ04sSUFBTSxnQ0FBWSxDQUFDLEtBQUQsRUFBUSxPQUFSLEVBQWlCLFFBQWpCLEVBQTJCLE1BQTNCLENBQVo7QUFDTixJQUFNLDBCQUFTLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxRQUFQLEVBQWlCLFFBQWpCLEVBQTJCLE9BQTNCLENBQVQiLCJmaWxlIjoiZGljdGlvbmFyeS5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvTWF0dC9TaXRlcy9wb3Btb3Rpb24iLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBYID0gJ1gnO1xuY29uc3QgWSA9ICdZJztcbmNvbnN0IEFMUEhBID0gJ0FscGhhJztcblxuZXhwb3J0IGNvbnN0IGF4ZXMgPSBbWCwgWSwgJ1onXTtcbmV4cG9ydCBjb25zdCByZ2IgPSBbJ1JlZCcsICdHcmVlbicsICdCbHVlJywgQUxQSEFdO1xuZXhwb3J0IGNvbnN0IGhzbCA9IFsnSHVlJywgJ1NhdHVyYXRpb24nLCAnTGlnaHRuZXNzJywgQUxQSEFdO1xuZXhwb3J0IGNvbnN0IHBvc2l0aW9ucyA9IFsnVG9wJywgJ1JpZ2h0JywgJ0JvdHRvbScsICdMZWZ0J107XG5leHBvcnQgY29uc3Qgc2hhZG93ID0gW1gsIFksICdSYWRpdXMnLCAnU3ByZWFkJywgJ0NvbG9yJ107Il19

/***/ },
/* 48 */
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
/* 49 */
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
/* 50 */
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
/* 51 */
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
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(52)))

/***/ },
/* 52 */
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgOTQ3Yzk4ZTI5YzE4M2U1MTAyZDgiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xvYWQvZ2xvYmFsLmpzIiwid2VicGFjazovLy8uL3NyYy9wb3Btb3Rpb24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luYy91dGlscy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcHJvY2Vzcy90aW1lci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYWN0aW9ucy9BY3Rpb24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FjdGlvbnMvQWN0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FjdGlvbnMvVHdlZW4uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FjdGlvbnMvUGh5c2ljcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYWN0aW9ucy9UcmFjay5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcHJvY2Vzcy9Qcm9jZXNzLmpzIiwid2VicGFjazovLy8uL3NyYy9pbnB1dC9JbnB1dC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5jL3N0YWdnZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luYy90aW1lbGluZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYWRhcHRlci9hZGFwdGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9hZGFwdGVyL2F0dHItYWRhcHRlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYWRhcHRlci9jc3MtYWRhcHRlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYWRhcHRlci9zdmctYWRhcHRlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYWRhcHRlci9zdmctcGF0aC1hZGFwdGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9hY3Rpb25zL2Vhc2luZy9wcmVzZXQtZWFzaW5nLmpzIiwid2VicGFjazovLy8uL3NyYy9pbmMvY2FsYy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdmFsdWUtdHlwZXMvYWxwaGEuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZhbHVlLXR5cGVzL2FuZ2xlLmpzIiwid2VicGFjazovLy8uL3NyYy92YWx1ZS10eXBlcy9heGVzLmpzIiwid2VicGFjazovLy8uL3NyYy92YWx1ZS10eXBlcy9jb2xvci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdmFsdWUtdHlwZXMvY29tcGxleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdmFsdWUtdHlwZXMvaGV4LmpzIiwid2VicGFjazovLy8uL3NyYy92YWx1ZS10eXBlcy9oc2wuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZhbHVlLXR5cGVzL3Bvc2l0aW9ucy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdmFsdWUtdHlwZXMvcHguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZhbHVlLXR5cGVzL3JnYi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdmFsdWUtdHlwZXMvc2NhbGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZhbHVlLXR5cGVzL3NoYWRvdy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdmFsdWUtdHlwZXMvdW5pdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5jL3RyYW5zZm9ybWVycy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5jL2JpbmQtYWRhcHRlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5wdXQvUG9pbnRlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcHJvY2Vzcy9sb29wLmpzIiwid2VicGFjazovLy8uL3NyYy9hZGFwdGVyL2Nzcy9zdGF0ZS1tYXAuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FkYXB0ZXIvc3ZnL3ZhbHVlLXR5cGUtbWFwLmpzIiwid2VicGFjazovLy8uL3NyYy9hZGFwdGVyL3N2Zy9idWlsZC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYWRhcHRlci9jc3MvdmFsdWUtdHlwZS1tYXAuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FkYXB0ZXIvY3NzL2J1aWxkLmpzIiwid2VicGFjazovLy8uL3NyYy9hZGFwdGVyL2Nzcy9wcmVmaXhlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYWRhcHRlci9jc3MvdHJhbnNmb3JtLXByb3BzLmpzIiwid2VicGFjazovLy8uL3NyYy9hZGFwdGVyL3N2Zy1wYXRoL2J1aWxkLmpzIiwid2VicGFjazovLy8uL3NyYy9hZGFwdGVyL3N2Zy1wYXRoL3N0YXRlLW1hcC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdmFsdWUtdHlwZXMvc2V0dGluZ3MvZGVmYXVsdC1wcm9wcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdmFsdWUtdHlwZXMvc2V0dGluZ3MvZGljdGlvbmFyeS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYWN0aW9ucy9lYXNpbmcvY3JlYXRlLWVhc2luZy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYWN0aW9ucy9lYXNpbmcvY3JlYXRlLWJlemllci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcHJvY2Vzcy90aWNrLmpzIiwid2VicGFjazovLy8uL3NyYy9wcm9jZXNzL21hbmFnZXIuanMiLCJ3ZWJwYWNrOi8vLyh3ZWJwYWNrKS9+L25vZGUtbGlicy1icm93c2VyL34vcHJvY2Vzcy9icm93c2VyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1QkFBZTtBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLHdDOzs7Ozs7O0FDdENBOztBQUVBOztBQUVBOztBQUVBLHdDQUF1Qyw2QkFBNkIsWUFBWSxFQUFFLE9BQU8saUJBQWlCLG1CQUFtQix1QkFBdUIsNEVBQTRFLEVBQUUsRUFBRSxzQkFBc0IsZUFBZSxFQUFFOztBQUUzUTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw0Q0FBMkMsK3BCOzs7Ozs7QUNmM0M7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBQzs7QUFFRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBQzs7QUFFRDs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQSx3Q0FBdUMsNkJBQTZCLFlBQVksRUFBRSxPQUFPLGlCQUFpQixtQkFBbUIsdUJBQXVCLDRFQUE0RSxFQUFFLEVBQUUsc0JBQXNCLGVBQWUsRUFBRTs7QUFFM1EsdUNBQXNDLHVDQUF1QyxnQkFBZ0I7O0FBRTdGLG1DQUFrQzs7QUFFbEM7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrRUFBaUUsYUFBYTtBQUM5RTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHFFQUFvRSxlQUFlO0FBQ25GO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EscUVBQW9FLGVBQWU7QUFDbkY7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSw0Q0FBMkMsMjZHOzs7Ozs7QUNoTzNDOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBbUIscUJBQXFCO0FBQ3hDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxvQkFBbUIsY0FBYztBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUM7QUFDRDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUEsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsb0JBQW1CLG1CQUFtQjtBQUN0QztBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FB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RUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUEsdUNBQXNDLHVDQUF1QyxnQkFBZ0I7O0FBRTdGO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSw0Q0FBMkMsdStEOzs7Ozs7QUMvQzNDOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUEsdUNBQXNDLHVDQUF1QyxnQkFBZ0I7O0FBRTdGO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSw0Q0FBMkMsK2hFOzs7Ozs7QUMvQzNDOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBLHVDQUFzQyx1Q0FBdUMsZ0JBQWdCOztBQUU3RjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsNENBQTJDLHV6Qzs7Ozs7O0FDaEMzQzs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQSx1Q0FBc0MsdUNBQXVDLGdCQUFnQjs7QUFFN0Y7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEVBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHVGQUFzRixhQUFhO0FBQ25HO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw0Q0FBMkMsMjhLOzs7Ozs7QUMxRzNDOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSw0Q0FBMkMsdW9jOzs7Ozs7QUM1UzNDOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLDRDQUEyQyxtWTs7Ozs7O0FDVDNDOztBQUVBOztBQUVBOztBQUVBOztBQUVBLHVDQUFzQyx1Q0FBdUMsZ0JBQWdCOztBQUU3RjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0Q0FBMkMsbWQ7Ozs7OztBQ2hCM0M7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUEsdUNBQXNDLHVDQUF1QyxnQkFBZ0I7O0FBRTdGO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLDZCQUE0QjtBQUM1QiwyQkFBMEI7QUFDMUIsdUJBQXNCO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsTUFBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRDQUEyQyxtOEQ7Ozs7OztBQzVDM0M7O0FBRUEsb0RBQW1ELGdCQUFnQixzQkFBc0IsT0FBTywyQkFBMkIsMEJBQTBCLHlEQUF5RCwyQkFBMkIsRUFBRSxFQUFFLEVBQUUsZUFBZTs7QUFFOVA7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUEsdUNBQXNDLHVDQUF1QyxnQkFBZ0I7O0FBRTdGO0FBQ0E7O0FBRUE7QUFDQSw4QkFBNkI7O0FBRTdCO0FBQ0E7QUFDQSxNQUFLOztBQUVMO0FBQ0Esd0JBQXVCLG1CQUFtQjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0Q0FBMkMsMnhEOzs7Ozs7QUMxQzNDOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxlQUFjLGNBQWM7QUFDNUI7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsTUFBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVCxNQUFLOztBQUVMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFVBQVM7O0FBRVQ7QUFDQSxNQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsNENBQTJDLCs0RTs7Ozs7O0FDOUMzQzs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQSx1Q0FBc0MsdUNBQXVDLGdCQUFnQjs7QUFFN0Y7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsTUFBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0Q0FBMkMsKzRFOzs7Ozs7QUNsRDNDOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsTUFBSzs7QUFFTDtBQUNBO0FBQ0EsTUFBSzs7QUFFTDtBQUNBO0FBQ0EsTUFBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRDQUEyQyxtOUM7Ozs7OztBQ2pDM0M7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUEsdUNBQXNDLHVDQUF1QyxnQkFBZ0I7O0FBRTdGO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLG9DQUFtQztBQUNuQywrQkFBOEI7QUFDOUIsMEJBQXlCO0FBQ3pCLHdCQUF1Qjs7QUFFdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSx3QkFBdUIsT0FBTztBQUM5Qjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLE1BQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0Q0FBMkMsdWpGOzs7Ozs7QUNsRDNDOztBQUVBOztBQUVBOztBQUVBOztBQUVBLHVDQUFzQyx1Q0FBdUMsZ0JBQWdCOztBQUU3RjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0Q0FBMkMsMmM7Ozs7OztBQ2hCM0M7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSzs7QUFFTDtBQUNBO0FBQ0EsTUFBSzs7QUFFTDtBQUNBO0FBQ0EsTUFBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRDQUEyQywyNEM7Ozs7OztBQzlCM0M7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNENBQTJDLCtXOzs7Ozs7QUNSM0M7O0FBRUEsb0RBQW1ELGdCQUFnQixzQkFBc0IsT0FBTywyQkFBMkIsMEJBQTBCLHlEQUF5RCwyQkFBMkIsRUFBRSxFQUFFLEVBQUUsZUFBZTs7QUFFOVA7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUEsdUNBQXNDLHVDQUF1QyxnQkFBZ0I7O0FBRTdGOztBQUVBO0FBQ0EsOEJBQTZCO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxjQUFhO0FBQ2I7QUFDQTtBQUNBLFVBQVM7O0FBRVQ7O0FBRUEsMkJBQTBCLGVBQWUsbUNBQW1DO0FBQzVFLE1BQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0Q0FBMkMsdXhGOzs7Ozs7QUN2RDNDOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUEscUJBQW9COztBQUVwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0wsaUJBQWdCO0FBQ2hCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsTUFBSzs7QUFFTDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsTUFBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRDQUEyQyx1NkU7Ozs7OztBQ3JEM0M7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0Esd0JBQXVCLGVBQWU7QUFDdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQSw0Q0FBMkMsdStEOzs7Ozs7QUMxQjNDOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBLHVDQUFzQyx1Q0FBdUMsZ0JBQWdCOztBQUU3Rjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLE1BQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxjQUFhO0FBQ2I7QUFDQTtBQUNBLHNCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWE7O0FBRWI7QUFDQTtBQUNBO0FBQ0EsNENBQTJDLDIrRTs7Ozs7O0FDMUQzQzs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQSx1Q0FBc0MsdUNBQXVDLGdCQUFnQjs7QUFFN0Ysa0RBQWlELDBDQUEwQywwREFBMEQsRUFBRTs7QUFFdkosa0RBQWlELGFBQWEsdUZBQXVGLEVBQUUsdUZBQXVGOztBQUU5TywyQ0FBMEMsK0RBQStELHFHQUFxRyxFQUFFLHlFQUF5RSxlQUFlLHlFQUF5RSxFQUFFLEVBQUUsdUhBQXVIOztBQUU1ZTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7O0FBRUE7QUFDQSxFQUFDOztBQUVEO0FBQ0EsNENBQTJDLG0wRDs7Ozs7O0FDeEQzQzs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUEsdUNBQXNDLHVDQUF1QyxnQkFBZ0I7O0FBRTdGLDBCQUF5Qix1QkFBdUIsR0FBRyxtQkFBbUIsR0FBRyx5Q0FBeUMsR0FBRyxzQ0FBc0MsR0FBRyxtQ0FBbUMsR0FBRyx1Q0FBdUMsR0FBRyxxQkFBcUIsR0FBRyxvQkFBb0IsRUFBRTtBQUM1Ujs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxvQkFBbUIscUJBQXFCO0FBQ3hDOztBQUVBLHlCQUF3Qix5QkFBeUI7QUFDakQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNENBQTJDLCt2TDs7Ozs7O0FDcEczQzs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0Q0FBMkMsMmdCOzs7Ozs7QUNWM0M7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUEsdUNBQXNDLHVDQUF1QyxnQkFBZ0I7O0FBRTdGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRDQUEyQyxtaUM7Ozs7OztBQ3RDM0M7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQSx1Q0FBc0MsdUNBQXVDLGdCQUFnQjs7QUFFN0Y7O0FBRUE7QUFDQSxtQkFBa0I7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsNENBQTJDLCtwSTs7Ozs7O0FDekQzQzs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQSx1Q0FBc0MsdUNBQXVDLGdCQUFnQjs7QUFFN0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNENBQTJDLG1wRjs7Ozs7O0FDdkYzQzs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQSx1Q0FBc0MsdUNBQXVDLGdCQUFnQjs7QUFFN0Y7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGNBQWE7QUFDYixxQ0FBb0M7QUFDcEM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLDZCQUE0QjtBQUM1Qjs7QUFFQTtBQUNBO0FBQ0EsNENBQTJDLDJoRjs7Ozs7O0FDOUMzQzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7O0FBRUEsb0JBQW1CLGlCQUFpQjtBQUNwQztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsNENBQTJDLHV3RTs7Ozs7O0FDdEMzQzs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0gsRUFBQzs7QUFFRDtBQUNBLDRDQUEyQywrMUM7Ozs7OztBQ3RCM0M7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsNENBQTJDLG14Rjs7Ozs7O0FDL0MzQzs7QUFFQSxvREFBbUQsZ0JBQWdCLHNCQUFzQixPQUFPLDJCQUEyQiwwQkFBMEIseURBQXlELDJCQUEyQixFQUFFLEVBQUUsRUFBRSxlQUFlOztBQUU5UDs7QUFFQTs7QUFFQTs7QUFFQSx1Q0FBc0MsdUNBQXVDLGdCQUFnQjs7QUFFN0Y7O0FBRUEsOEJBQTZCO0FBQzdCO0FBQ0E7QUFDQTtBQUNBLEVBQUM7QUFDRCw0Q0FBMkMsbW9COzs7Ozs7QUNuQjNDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNENBQTJDLHV3Qjs7Ozs7O0FDbkIzQzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNENBQTJDLDJxQzs7Ozs7O0FDWjNDOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSw0Q0FBMkMsdTlGOzs7Ozs7QUN6RDNDOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsOEJBQTZCO0FBQzdCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWE7QUFDYjtBQUNBO0FBQ0EsVUFBUzs7QUFFVDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGVBQWMsdUJBQXVCO0FBQ3JDOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLHdCQUF1Qix5QkFBeUI7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGVBQWMsa0VBQWtFO0FBQ2hGO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0EsY0FBYTtBQUNiO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsVUFBUztBQUNUOztBQUVBO0FBQ0EsY0FBYTtBQUNiO0FBQ0Esa0JBQWlCO0FBQ2pCO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsNENBQTJDLCswVTs7Ozs7O0FDakszQzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUM7QUFDRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLGNBQWE7QUFDYjtBQUNBLE1BQUs7QUFDTDs7QUFFQTtBQUNBLDRDQUEyQywyMUU7Ozs7OztBQzlDM0M7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQSxNQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBLE1BQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHdCQUF1QiwyQkFBMkI7QUFDbEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHdCQUF1Qix5QkFBeUI7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWlCO0FBQ2pCO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSw0Q0FBMkMsK2tROzs7Ozs7O0FDbkozQzs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXFCO0FBQ3JCOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDRCQUEyQjtBQUMzQjtBQUNBO0FBQ0E7QUFDQSw2QkFBNEIsVUFBVSIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuXG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRleHBvcnRzOiB7fSxcbiBcdFx0XHRpZDogbW9kdWxlSWQsXG4gXHRcdFx0bG9hZGVkOiBmYWxzZVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHdlYnBhY2svYm9vdHN0cmFwIDk0N2M5OGUyOWMxODNlNTEwMmQ4XG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgX3BvcG1vdGlvbiA9IHJlcXVpcmUoJy4uL3BvcG1vdGlvbicpO1xuXG52YXIgcG9wbW90aW9uID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQoX3BvcG1vdGlvbik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKG9iaikgeyBpZiAob2JqICYmIG9iai5fX2VzTW9kdWxlKSB7IHJldHVybiBvYmo7IH0gZWxzZSB7IHZhciBuZXdPYmogPSB7fTsgaWYgKG9iaiAhPSBudWxsKSB7IGZvciAodmFyIGtleSBpbiBvYmopIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGtleSkpIG5ld09ialtrZXldID0gb2JqW2tleV07IH0gfSBuZXdPYmouZGVmYXVsdCA9IG9iajsgcmV0dXJuIG5ld09iajsgfSB9XG5cbnZhciBVSXJlZiA9IHdpbmRvdy5tb3Rpb247XG5cbnBvcG1vdGlvbi5ub0NvbmZsaWN0ID0gZnVuY3Rpb24gKCkge1xuICAgIHdpbmRvdy5tb3Rpb24gPSBVSXJlZjtcbn07XG5cbndpbmRvdy5tb3Rpb24gPSB3aW5kb3cucG9wbW90aW9uID0gcG9wbW90aW9uO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluTnlZeTlzYjJGa0wyZHNiMkpoYkM1cWN5SmRMQ0p1WVcxbGN5STZXMTBzSW0xaGNIQnBibWR6SWpvaU96czdPMGxCUVZrN096czdRVUZGV2l4SlFVRk5MRkZCUVZFc1QwRkJUeXhOUVVGUU96dEJRVVZrTEZWQlFWVXNWVUZCVml4SFFVRjFRaXhaUVVGWk8wRkJReTlDTEZkQlFVOHNUVUZCVUN4SFFVRm5RaXhMUVVGb1FpeERRVVFyUWp0RFFVRmFPenRCUVVsMlFpeFBRVUZQTEUxQlFWQXNSMEZCWjBJc1QwRkJUeXhUUVVGUUxFZEJRVzFDTEZOQlFXNUNJaXdpWm1sc1pTSTZJbWRzYjJKaGJDNXFjeUlzSW5OdmRYSmpaVkp2YjNRaU9pSXZWWE5sY25NdlRXRjBkQzlUYVhSbGN5OXdiM0J0YjNScGIyNGlMQ0p6YjNWeVkyVnpRMjl1ZEdWdWRDSTZXeUpwYlhCdmNuUWdLaUJoY3lCd2IzQnRiM1JwYjI0Z1puSnZiU0FuTGk0dmNHOXdiVzkwYVc5dUp6dGNibHh1WTI5dWMzUWdWVWx5WldZZ1BTQjNhVzVrYjNjdWJXOTBhVzl1TzF4dVhHNXdiM0J0YjNScGIyNHVibTlEYjI1bWJHbGpkQ0E5SUdaMWJtTjBhVzl1SUNncElIdGNiaUFnSUNCM2FXNWtiM2N1Ylc5MGFXOXVJRDBnVlVseVpXWTdYRzU5TzF4dVhHNTNhVzVrYjNjdWJXOTBhVzl1SUQwZ2QybHVaRzkzTG5CdmNHMXZkR2x2YmlBOUlIQnZjRzF2ZEdsdmJqc2lYWDA9XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9sb2FkL2dsb2JhbC5qc1xuICoqIG1vZHVsZSBpZCA9IDBcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHMudHJhbnNmb3JtZXJzID0gZXhwb3J0cy51bml0VHlwZSA9IGV4cG9ydHMuc2hhZG93VHlwZSA9IGV4cG9ydHMuc2NhbGVUeXBlID0gZXhwb3J0cy5yZ2JUeXBlID0gZXhwb3J0cy5weFR5cGUgPSBleHBvcnRzLnBvc2l0aW9uc1R5cGUgPSBleHBvcnRzLmhzbFR5cGUgPSBleHBvcnRzLmhleFR5cGUgPSBleHBvcnRzLmNvbXBsZXhUeXBlID0gZXhwb3J0cy5jb2xvclR5cGUgPSBleHBvcnRzLmF4ZXNUeXBlID0gZXhwb3J0cy5hbmdsZVR5cGUgPSBleHBvcnRzLmFscGhhVHlwZSA9IGV4cG9ydHMuc2V0R2xvYmFsRGlsYXRpb24gPSBleHBvcnRzLmNvbWJpbmVUcmFuc2Zvcm1lcnMgPSBleHBvcnRzLnV0aWxzID0gZXhwb3J0cy5jYWxjID0gZXhwb3J0cy5lYXNpbmcgPSBleHBvcnRzLnN2Z1BhdGhBZGFwdGVyID0gZXhwb3J0cy5zdmdBZGFwdGVyID0gZXhwb3J0cy5jc3NBZGFwdGVyID0gZXhwb3J0cy5hdHRyQWRhcHRlciA9IGV4cG9ydHMuYWRhcHRlciA9IGV4cG9ydHMudGltZWxpbmUgPSBleHBvcnRzLnN0YWdnZXIgPSBleHBvcnRzLnByb2Nlc3MgPSBleHBvcnRzLmlucHV0ID0gZXhwb3J0cy50cmFja0lucHV0ID0gZXhwb3J0cy5waHlzaWNzID0gZXhwb3J0cy50d2VlbiA9IGV4cG9ydHMuYWN0b3IgPSBleHBvcnRzLkFjdGlvbiA9IHVuZGVmaW5lZDtcblxudmFyIF91dGlsczIgPSByZXF1aXJlKCcuL2luYy91dGlscycpO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NvbWJpbmVUcmFuc2Zvcm1lcnMnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBfdXRpbHMyLmNvbWJpbmVUcmFuc2Zvcm1lcnM7XG4gIH1cbn0pO1xuXG52YXIgX3RpbWVyID0gcmVxdWlyZSgnLi9wcm9jZXNzL3RpbWVyJyk7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnc2V0R2xvYmFsRGlsYXRpb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBfdGltZXIuc2V0R2xvYmFsRGlsYXRpb247XG4gIH1cbn0pO1xuXG52YXIgX0FjdGlvbjIgPSByZXF1aXJlKCcuL2FjdGlvbnMvQWN0aW9uJyk7XG5cbnZhciBfQWN0aW9uMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX0FjdGlvbjIpO1xuXG52YXIgX0FjdG9yID0gcmVxdWlyZSgnLi9hY3Rpb25zL0FjdG9yJyk7XG5cbnZhciBfQWN0b3IyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfQWN0b3IpO1xuXG52YXIgX1R3ZWVuID0gcmVxdWlyZSgnLi9hY3Rpb25zL1R3ZWVuJyk7XG5cbnZhciBfVHdlZW4yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfVHdlZW4pO1xuXG52YXIgX1BoeXNpY3MgPSByZXF1aXJlKCcuL2FjdGlvbnMvUGh5c2ljcycpO1xuXG52YXIgX1BoeXNpY3MyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfUGh5c2ljcyk7XG5cbnZhciBfVHJhY2sgPSByZXF1aXJlKCcuL2FjdGlvbnMvVHJhY2snKTtcblxudmFyIF9UcmFjazIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9UcmFjayk7XG5cbnZhciBfUHJvY2VzcyA9IHJlcXVpcmUoJy4vcHJvY2Vzcy9Qcm9jZXNzJyk7XG5cbnZhciBfUHJvY2VzczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9Qcm9jZXNzKTtcblxudmFyIF9JbnB1dCA9IHJlcXVpcmUoJy4vaW5wdXQvSW5wdXQnKTtcblxudmFyIF9JbnB1dDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9JbnB1dCk7XG5cbnZhciBfc3RhZ2dlcjIgPSByZXF1aXJlKCcuL2luYy9zdGFnZ2VyJyk7XG5cbnZhciBfc3RhZ2dlcjMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9zdGFnZ2VyMik7XG5cbnZhciBfdGltZWxpbmUyID0gcmVxdWlyZSgnLi9pbmMvdGltZWxpbmUnKTtcblxudmFyIF90aW1lbGluZTMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF90aW1lbGluZTIpO1xuXG52YXIgX2FkYXB0ZXIyID0gcmVxdWlyZSgnLi9hZGFwdGVyL2FkYXB0ZXInKTtcblxudmFyIF9hZGFwdGVyMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2FkYXB0ZXIyKTtcblxudmFyIF9hdHRyQWRhcHRlcjIgPSByZXF1aXJlKCcuL2FkYXB0ZXIvYXR0ci1hZGFwdGVyJyk7XG5cbnZhciBfYXR0ckFkYXB0ZXIzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfYXR0ckFkYXB0ZXIyKTtcblxudmFyIF9jc3NBZGFwdGVyMiA9IHJlcXVpcmUoJy4vYWRhcHRlci9jc3MtYWRhcHRlcicpO1xuXG52YXIgX2Nzc0FkYXB0ZXIzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY3NzQWRhcHRlcjIpO1xuXG52YXIgX3N2Z0FkYXB0ZXIyID0gcmVxdWlyZSgnLi9hZGFwdGVyL3N2Zy1hZGFwdGVyJyk7XG5cbnZhciBfc3ZnQWRhcHRlcjMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9zdmdBZGFwdGVyMik7XG5cbnZhciBfc3ZnUGF0aEFkYXB0ZXIyID0gcmVxdWlyZSgnLi9hZGFwdGVyL3N2Zy1wYXRoLWFkYXB0ZXInKTtcblxudmFyIF9zdmdQYXRoQWRhcHRlcjMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9zdmdQYXRoQWRhcHRlcjIpO1xuXG52YXIgX3ByZXNldEVhc2luZyA9IHJlcXVpcmUoJy4vYWN0aW9ucy9lYXNpbmcvcHJlc2V0LWVhc2luZycpO1xuXG52YXIgX3ByZXNldEVhc2luZzIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9wcmVzZXRFYXNpbmcpO1xuXG52YXIgX2NhbGMyID0gcmVxdWlyZSgnLi9pbmMvY2FsYycpO1xuXG52YXIgX2NhbGMgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChfY2FsYzIpO1xuXG52YXIgX3V0aWxzID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQoX3V0aWxzMik7XG5cbnZhciBfYWxwaGEgPSByZXF1aXJlKCcuL3ZhbHVlLXR5cGVzL2FscGhhJyk7XG5cbnZhciBfYWxwaGEyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfYWxwaGEpO1xuXG52YXIgX2FuZ2xlID0gcmVxdWlyZSgnLi92YWx1ZS10eXBlcy9hbmdsZScpO1xuXG52YXIgX2FuZ2xlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2FuZ2xlKTtcblxudmFyIF9heGVzID0gcmVxdWlyZSgnLi92YWx1ZS10eXBlcy9heGVzJyk7XG5cbnZhciBfYXhlczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9heGVzKTtcblxudmFyIF9jb2xvciA9IHJlcXVpcmUoJy4vdmFsdWUtdHlwZXMvY29sb3InKTtcblxudmFyIF9jb2xvcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jb2xvcik7XG5cbnZhciBfY29tcGxleCA9IHJlcXVpcmUoJy4vdmFsdWUtdHlwZXMvY29tcGxleCcpO1xuXG52YXIgX2NvbXBsZXgyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY29tcGxleCk7XG5cbnZhciBfaGV4ID0gcmVxdWlyZSgnLi92YWx1ZS10eXBlcy9oZXgnKTtcblxudmFyIF9oZXgyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfaGV4KTtcblxudmFyIF9oc2wgPSByZXF1aXJlKCcuL3ZhbHVlLXR5cGVzL2hzbCcpO1xuXG52YXIgX2hzbDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9oc2wpO1xuXG52YXIgX3Bvc2l0aW9ucyA9IHJlcXVpcmUoJy4vdmFsdWUtdHlwZXMvcG9zaXRpb25zJyk7XG5cbnZhciBfcG9zaXRpb25zMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3Bvc2l0aW9ucyk7XG5cbnZhciBfcHggPSByZXF1aXJlKCcuL3ZhbHVlLXR5cGVzL3B4Jyk7XG5cbnZhciBfcHgyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcHgpO1xuXG52YXIgX3JnYiA9IHJlcXVpcmUoJy4vdmFsdWUtdHlwZXMvcmdiJyk7XG5cbnZhciBfcmdiMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JnYik7XG5cbnZhciBfc2NhbGUgPSByZXF1aXJlKCcuL3ZhbHVlLXR5cGVzL3NjYWxlJyk7XG5cbnZhciBfc2NhbGUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfc2NhbGUpO1xuXG52YXIgX3NoYWRvdyA9IHJlcXVpcmUoJy4vdmFsdWUtdHlwZXMvc2hhZG93Jyk7XG5cbnZhciBfc2hhZG93MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3NoYWRvdyk7XG5cbnZhciBfdW5pdCA9IHJlcXVpcmUoJy4vdmFsdWUtdHlwZXMvdW5pdCcpO1xuXG52YXIgX3VuaXQyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfdW5pdCk7XG5cbnZhciBfdHJhbnNmb3JtZXJzMiA9IHJlcXVpcmUoJy4vaW5jL3RyYW5zZm9ybWVycycpO1xuXG52YXIgX3RyYW5zZm9ybWVycyA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKF90cmFuc2Zvcm1lcnMyKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQob2JqKSB7IGlmIChvYmogJiYgb2JqLl9fZXNNb2R1bGUpIHsgcmV0dXJuIG9iajsgfSBlbHNlIHsgdmFyIG5ld09iaiA9IHt9OyBpZiAob2JqICE9IG51bGwpIHsgZm9yICh2YXIga2V5IGluIG9iaikgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwga2V5KSkgbmV3T2JqW2tleV0gPSBvYmpba2V5XTsgfSB9IG5ld09iai5kZWZhdWx0ID0gb2JqOyByZXR1cm4gbmV3T2JqOyB9IH1cblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZXhwb3J0cy5BY3Rpb24gPSBfQWN0aW9uMy5kZWZhdWx0OyAvLyBBY3Rpb25zXG5cbi8vIFByb2Nlc3NcblxuLy8gSW5wdXRcblxudmFyIGFjdG9yID0gZXhwb3J0cy5hY3RvciA9IGZ1bmN0aW9uIChwcm9wcykge1xuICByZXR1cm4gbmV3IF9BY3RvcjIuZGVmYXVsdChwcm9wcyk7XG59O1xudmFyIHR3ZWVuID0gZXhwb3J0cy50d2VlbiA9IGZ1bmN0aW9uIChwcm9wcykge1xuICByZXR1cm4gbmV3IF9Ud2VlbjIuZGVmYXVsdChwcm9wcyk7XG59O1xudmFyIHBoeXNpY3MgPSBleHBvcnRzLnBoeXNpY3MgPSBmdW5jdGlvbiAocHJvcHMpIHtcbiAgcmV0dXJuIG5ldyBfUGh5c2ljczIuZGVmYXVsdChwcm9wcyk7XG59O1xudmFyIHRyYWNrSW5wdXQgPSBleHBvcnRzLnRyYWNrSW5wdXQgPSBmdW5jdGlvbiAoKSB7XG4gIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgYXJnc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgfVxuXG4gIHJldHVybiBuZXcgKEZ1bmN0aW9uLnByb3RvdHlwZS5iaW5kLmFwcGx5KF9UcmFjazIuZGVmYXVsdCwgW251bGxdLmNvbmNhdChhcmdzKSkpKCk7XG59O1xudmFyIGlucHV0ID0gZXhwb3J0cy5pbnB1dCA9IGZ1bmN0aW9uICgpIHtcbiAgZm9yICh2YXIgX2xlbjIgPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gQXJyYXkoX2xlbjIpLCBfa2V5MiA9IDA7IF9rZXkyIDwgX2xlbjI7IF9rZXkyKyspIHtcbiAgICBhcmdzW19rZXkyXSA9IGFyZ3VtZW50c1tfa2V5Ml07XG4gIH1cblxuICByZXR1cm4gbmV3IChGdW5jdGlvbi5wcm90b3R5cGUuYmluZC5hcHBseShfSW5wdXQyLmRlZmF1bHQsIFtudWxsXS5jb25jYXQoYXJncykpKSgpO1xufTtcbnZhciBwcm9jZXNzID0gZXhwb3J0cy5wcm9jZXNzID0gZnVuY3Rpb24gKCkge1xuICBmb3IgKHZhciBfbGVuMyA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBBcnJheShfbGVuMyksIF9rZXkzID0gMDsgX2tleTMgPCBfbGVuMzsgX2tleTMrKykge1xuICAgIGFyZ3NbX2tleTNdID0gYXJndW1lbnRzW19rZXkzXTtcbiAgfVxuXG4gIHJldHVybiBuZXcgKEZ1bmN0aW9uLnByb3RvdHlwZS5iaW5kLmFwcGx5KF9Qcm9jZXNzMi5kZWZhdWx0LCBbbnVsbF0uY29uY2F0KGFyZ3MpKSkoKTtcbn07XG5leHBvcnRzLnN0YWdnZXIgPSBfc3RhZ2dlcjMuZGVmYXVsdDtcbmV4cG9ydHMudGltZWxpbmUgPSBfdGltZWxpbmUzLmRlZmF1bHQ7XG5cbi8vIEFkYXB0ZXJzXG5cbmV4cG9ydHMuYWRhcHRlciA9IF9hZGFwdGVyMy5kZWZhdWx0O1xuZXhwb3J0cy5hdHRyQWRhcHRlciA9IF9hdHRyQWRhcHRlcjMuZGVmYXVsdDtcbmV4cG9ydHMuY3NzQWRhcHRlciA9IF9jc3NBZGFwdGVyMy5kZWZhdWx0O1xuZXhwb3J0cy5zdmdBZGFwdGVyID0gX3N2Z0FkYXB0ZXIzLmRlZmF1bHQ7XG5leHBvcnRzLnN2Z1BhdGhBZGFwdGVyID0gX3N2Z1BhdGhBZGFwdGVyMy5kZWZhdWx0O1xuXG4vLyBFYXNpbmdcblxuZXhwb3J0cy5lYXNpbmcgPSBfcHJlc2V0RWFzaW5nMi5kZWZhdWx0O1xuXG4vLyBVdGlsc1xuXG5leHBvcnRzLmNhbGMgPSBfY2FsYztcbmV4cG9ydHMudXRpbHMgPSBfdXRpbHM7XG5cbi8vIFZhbHVlIHR5cGVzXG5cbmV4cG9ydHMuYWxwaGFUeXBlID0gX2FscGhhMi5kZWZhdWx0O1xuZXhwb3J0cy5hbmdsZVR5cGUgPSBfYW5nbGUyLmRlZmF1bHQ7XG5leHBvcnRzLmF4ZXNUeXBlID0gX2F4ZXMyLmRlZmF1bHQ7XG5leHBvcnRzLmNvbG9yVHlwZSA9IF9jb2xvcjIuZGVmYXVsdDtcbmV4cG9ydHMuY29tcGxleFR5cGUgPSBfY29tcGxleDIuZGVmYXVsdDtcbmV4cG9ydHMuaGV4VHlwZSA9IF9oZXgyLmRlZmF1bHQ7XG5leHBvcnRzLmhzbFR5cGUgPSBfaHNsMi5kZWZhdWx0O1xuZXhwb3J0cy5wb3NpdGlvbnNUeXBlID0gX3Bvc2l0aW9uczIuZGVmYXVsdDtcbmV4cG9ydHMucHhUeXBlID0gX3B4Mi5kZWZhdWx0O1xuZXhwb3J0cy5yZ2JUeXBlID0gX3JnYjIuZGVmYXVsdDtcbmV4cG9ydHMuc2NhbGVUeXBlID0gX3NjYWxlMi5kZWZhdWx0O1xuZXhwb3J0cy5zaGFkb3dUeXBlID0gX3NoYWRvdzIuZGVmYXVsdDtcbmV4cG9ydHMudW5pdFR5cGUgPSBfdW5pdDIuZGVmYXVsdDtcblxuLy8gVHJhbnNmb3JtZXJzXG5cbmV4cG9ydHMudHJhbnNmb3JtZXJzID0gX3RyYW5zZm9ybWVycztcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbk55WXk5d2IzQnRiM1JwYjI0dWFuTWlYU3dpYm1GdFpYTWlPbHRkTENKdFlYQndhVzVuY3lJNklqczdPenM3T3pzN096dHRRa0ZyUTNGQ096czdPenM3T3pzN2EwSkJRMW83T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN1VVRnNRMFk3T3pzN096dEJRVmxCTEVsQlFVMHNkMEpCUVZFc1ZVRkJReXhMUVVGRU8xTkJRVmNzYjBKQlFWVXNTMEZCVmp0RFFVRllPMEZCUTJRc1NVRkJUU3gzUWtGQlVTeFZRVUZETEV0QlFVUTdVMEZCVnl4dlFrRkJWU3hMUVVGV08wTkJRVmc3UVVGRFpDeEpRVUZOTERSQ1FVRlZMRlZCUVVNc1MwRkJSRHRUUVVGWExITkNRVUZaTEV0QlFWbzdRMEZCV0R0QlFVTm9RaXhKUVVGTkxHdERRVUZoTzI5RFFVRkpPenM3T3pKRlFVRnpRanREUVVFeFFqdEJRVU51UWl4SlFVRk5MSGRDUVVGUk8zRkRRVUZKT3pzN096SkZRVUZ6UWp0RFFVRXhRanRCUVVOa0xFbEJRVTBzTkVKQlFWVTdjVU5CUVVrN096czdOa1ZCUVhkQ08wTkJRVFZDTzFGQlEyaENPMUZCUTBFN096czdVVUZIUVR0UlFVTkJPMUZCUTBFN1VVRkRRVHRSUVVOQk96czdPMUZCUjBFN096czdVVUZIU3p0UlFVTkJPenM3TzFGQlNVdzdVVUZEUVR0UlFVTkJPMUZCUTBFN1VVRkRRVHRSUVVOQk8xRkJRMEU3VVVGRFFUdFJRVU5CTzFGQlEwRTdVVUZEUVR0UlFVTkJPMUZCUTBFN096czdVVUZIU3lJc0ltWnBiR1VpT2lKd2IzQnRiM1JwYjI0dWFuTWlMQ0p6YjNWeVkyVlNiMjkwSWpvaUwxVnpaWEp6TDAxaGRIUXZVMmwwWlhNdmNHOXdiVzkwYVc5dUlpd2ljMjkxY21ObGMwTnZiblJsYm5RaU9sc2lMeThnUVdOMGFXOXVjMXh1Wlhod2IzSjBJRUZqZEdsdmJpQm1jbTl0SUNjdUwyRmpkR2x2Ym5NdlFXTjBhVzl1Snp0Y2JtbHRjRzl5ZENCQlkzUnZjaUJtY205dElDY3VMMkZqZEdsdmJuTXZRV04wYjNJbk8xeHVhVzF3YjNKMElGUjNaV1Z1SUdaeWIyMGdKeTR2WVdOMGFXOXVjeTlVZDJWbGJpYzdYRzVwYlhCdmNuUWdVR2g1YzJsamN5Qm1jbTl0SUNjdUwyRmpkR2x2Ym5NdlVHaDVjMmxqY3ljN1hHNXBiWEJ2Y25RZ1ZISmhZMnNnWm5KdmJTQW5MaTloWTNScGIyNXpMMVJ5WVdOckp6dGNibHh1THk4Z1VISnZZMlZ6YzF4dWFXMXdiM0owSUZCeWIyTmxjM01nWm5KdmJTQW5MaTl3Y205alpYTnpMMUJ5YjJObGMzTW5PMXh1WEc0dkx5QkpibkIxZEZ4dWFXMXdiM0owSUVsdWNIVjBJR1p5YjIwZ0p5NHZhVzV3ZFhRdlNXNXdkWFFuTzF4dVhHNWxlSEJ2Y25RZ1kyOXVjM1FnWVdOMGIzSWdQU0FvY0hKdmNITXBJRDArSUc1bGR5QkJZM1J2Y2lod2NtOXdjeWs3WEc1bGVIQnZjblFnWTI5dWMzUWdkSGRsWlc0Z1BTQW9jSEp2Y0hNcElEMCtJRzVsZHlCVWQyVmxiaWh3Y205d2N5azdYRzVsZUhCdmNuUWdZMjl1YzNRZ2NHaDVjMmxqY3lBOUlDaHdjbTl3Y3lrZ1BUNGdibVYzSUZCb2VYTnBZM01vY0hKdmNITXBPMXh1Wlhod2IzSjBJR052Ym5OMElIUnlZV05yU1c1d2RYUWdQU0FvTGk0dVlYSm5jeWtnUFQ0Z2JtVjNJRlJ5WVdOcktDNHVMbUZ5WjNNcE8xeHVaWGh3YjNKMElHTnZibk4wSUdsdWNIVjBJRDBnS0M0dUxtRnlaM01wSUQwK0lHNWxkeUJKYm5CMWRDZ3VMaTVoY21kektUdGNibVY0Y0c5eWRDQmpiMjV6ZENCd2NtOWpaWE56SUQwZ0tDNHVMbUZ5WjNNcElEMCtJRzVsZHlCUWNtOWpaWE56S0M0dUxtRnlaM01wTzF4dVpYaHdiM0owSUhOMFlXZG5aWElnWm5KdmJTQW5MaTlwYm1NdmMzUmhaMmRsY2ljN1hHNWxlSEJ2Y25RZ2RHbHRaV3hwYm1VZ1puSnZiU0FuTGk5cGJtTXZkR2x0Wld4cGJtVW5PMXh1WEc0dkx5QkJaR0Z3ZEdWeWMxeHVaWGh3YjNKMElHRmtZWEIwWlhJZ1puSnZiU0FuTGk5aFpHRndkR1Z5TDJGa1lYQjBaWEluTzF4dVpYaHdiM0owSUdGMGRISkJaR0Z3ZEdWeUlHWnliMjBnSnk0dllXUmhjSFJsY2k5aGRIUnlMV0ZrWVhCMFpYSW5PMXh1Wlhod2IzSjBJR056YzBGa1lYQjBaWElnWm5KdmJTQW5MaTloWkdGd2RHVnlMMk56Y3kxaFpHRndkR1Z5Snp0Y2JtVjRjRzl5ZENCemRtZEJaR0Z3ZEdWeUlHWnliMjBnSnk0dllXUmhjSFJsY2k5emRtY3RZV1JoY0hSbGNpYzdYRzVsZUhCdmNuUWdjM1puVUdGMGFFRmtZWEIwWlhJZ1puSnZiU0FuTGk5aFpHRndkR1Z5TDNOMlp5MXdZWFJvTFdGa1lYQjBaWEluTzF4dVhHNHZMeUJGWVhOcGJtZGNibVY0Y0c5eWRDQmxZWE5wYm1jZ1puSnZiU0FuTGk5aFkzUnBiMjV6TDJWaGMybHVaeTl3Y21WelpYUXRaV0Z6YVc1bkp6dGNibHh1THk4Z1ZYUnBiSE5jYm1WNGNHOXlkQ0FxSUdGeklHTmhiR01nWm5KdmJTQW5MaTlwYm1NdlkyRnNZeWM3WEc1bGVIQnZjblFnS2lCaGN5QjFkR2xzY3l3Z2V5QmpiMjFpYVc1bFZISmhibk5tYjNKdFpYSnpJSDBnWm5KdmJTQW5MaTlwYm1NdmRYUnBiSE1uTzF4dVpYaHdiM0owSUhzZ2MyVjBSMnh2WW1Gc1JHbHNZWFJwYjI0Z2ZTQm1jbTl0SUNjdUwzQnliMk5sYzNNdmRHbHRaWEluTzF4dVhHNHZMeUJXWVd4MVpTQjBlWEJsYzF4dVpYaHdiM0owSUdGc2NHaGhWSGx3WlNCbWNtOXRJQ2N1TDNaaGJIVmxMWFI1Y0dWekwyRnNjR2hoSnp0Y2JtVjRjRzl5ZENCaGJtZHNaVlI1Y0dVZ1puSnZiU0FuTGk5MllXeDFaUzEwZVhCbGN5OWhibWRzWlNjN1hHNWxlSEJ2Y25RZ1lYaGxjMVI1Y0dVZ1puSnZiU0FuTGk5MllXeDFaUzEwZVhCbGN5OWhlR1Z6Snp0Y2JtVjRjRzl5ZENCamIyeHZjbFI1Y0dVZ1puSnZiU0FuTGk5MllXeDFaUzEwZVhCbGN5OWpiMnh2Y2ljN1hHNWxlSEJ2Y25RZ1kyOXRjR3hsZUZSNWNHVWdabkp2YlNBbkxpOTJZV3gxWlMxMGVYQmxjeTlqYjIxd2JHVjRKenRjYm1WNGNHOXlkQ0JvWlhoVWVYQmxJR1p5YjIwZ0p5NHZkbUZzZFdVdGRIbHdaWE12YUdWNEp6dGNibVY0Y0c5eWRDQm9jMnhVZVhCbElHWnliMjBnSnk0dmRtRnNkV1V0ZEhsd1pYTXZhSE5zSnp0Y2JtVjRjRzl5ZENCd2IzTnBkR2x2Ym5OVWVYQmxJR1p5YjIwZ0p5NHZkbUZzZFdVdGRIbHdaWE12Y0c5emFYUnBiMjV6Snp0Y2JtVjRjRzl5ZENCd2VGUjVjR1VnWm5KdmJTQW5MaTkyWVd4MVpTMTBlWEJsY3k5d2VDYzdYRzVsZUhCdmNuUWdjbWRpVkhsd1pTQm1jbTl0SUNjdUwzWmhiSFZsTFhSNWNHVnpMM0puWWljN1hHNWxlSEJ2Y25RZ2MyTmhiR1ZVZVhCbElHWnliMjBnSnk0dmRtRnNkV1V0ZEhsd1pYTXZjMk5oYkdVbk8xeHVaWGh3YjNKMElITm9ZV1J2ZDFSNWNHVWdabkp2YlNBbkxpOTJZV3gxWlMxMGVYQmxjeTl6YUdGa2IzY25PMXh1Wlhod2IzSjBJSFZ1YVhSVWVYQmxJR1p5YjIwZ0p5NHZkbUZzZFdVdGRIbHdaWE12ZFc1cGRDYzdYRzVjYmk4dklGUnlZVzV6Wm05eWJXVnljMXh1Wlhod2IzSjBJQ29nWVhNZ2RISmhibk5tYjNKdFpYSnpJR1p5YjIwZ0p5NHZhVzVqTDNSeVlXNXpabTl5YldWeWN5YzdJbDE5XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9wb3Btb3Rpb24uanNcbiAqKiBtb2R1bGUgaWQgPSAxXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG52YXIgQ0FNRUxfQ0FTRV9QQVRURVJOID0gLyhbYS16XSkoW0EtWl0pL2c7XG52YXIgUkVQTEFDRV9URU1QTEFURSA9ICckMS0kMic7XG52YXIgSEFTX1BFUkZPUk1BTkNFX05PVyA9IHR5cGVvZiBwZXJmb3JtYW5jZSAhPT0gJ3VuZGVmaW5lZCcgJiYgcGVyZm9ybWFuY2Uubm93O1xuXG4vKlxuICAgIEdldCB2YXIgdHlwZSBhcyBzdHJpbmdcbiAgICBcbiAgICBAcGFyYW06IFZhcmlhYmxlIHRvIHRlc3RcbiAgICBAcmV0dXJuIFtzdHJpbmddOiBSZXR1cm5zLCBmb3IgaW5zdGFuY2UgJ09iamVjdCcgaWYgW29iamVjdCBPYmplY3RdXG4qL1xudmFyIHZhclR5cGUgPSBmdW5jdGlvbiAodmFyaWFibGUpIHtcbiAgICByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHZhcmlhYmxlKS5zbGljZSg4LCAtMSk7XG59O1xuXG4vKlxuICAgIENvbnZlcnQgY2FtZWxDYXNlIHRvIGRhc2gtY2FzZVxuXG4gICAgQHBhcmFtIFtzdHJpbmddXG4gICAgQHJldHVybiBbc3RyaW5nXVxuKi9cbnZhciBjYW1lbFRvRGFzaCA9IGV4cG9ydHMuY2FtZWxUb0Rhc2ggPSBmdW5jdGlvbiAoc3RyaW5nKSB7XG4gICAgcmV0dXJuIHN0cmluZy5yZXBsYWNlKENBTUVMX0NBU0VfUEFUVEVSTiwgUkVQTEFDRV9URU1QTEFURSkudG9Mb3dlckNhc2UoKTtcbn07XG5cbi8qXG4gICAgQ29tYmluZSB0cmFuc2Zvcm1lcnMgaW50byBvbmUgZnVuY3Rpb24gdGhhdCBjYWxscyBldmVyeVxuICAgIHRyYW5zZm9ybWVyIGluIHRoZSBhcnJheSBhbmQgcmV0dXJucyB0aGUgcmVzdWx0XG5cbiAgICBAcGFyYW0gW2FycmF5XVxuICAgIEByZXR1cm4gW2Z1bmN0aW9uXVxuKi9cbnZhciBjb21iaW5lVHJhbnNmb3JtZXJzID0gZXhwb3J0cy5jb21iaW5lVHJhbnNmb3JtZXJzID0gZnVuY3Rpb24gKHRyYW5zZm9ybWVycykge1xuICAgIHZhciBudW1UcmFuc2Zvcm1lcnMgPSB0cmFuc2Zvcm1lcnMubGVuZ3RoO1xuICAgIHZhciBpID0gMDtcblxuICAgIC8qXG4gICAgICAgIEBwYXJhbSBbbnVtYmVyXVxuICAgICAgICBAcGFyYW0gW3N0cmluZ11cbiAgICAgICAgQHBhcmFtIFtBY3Rpb25dXG4gICAgICAgIEByZXR1cm4gW251bWJlcl1cbiAgICAqL1xuICAgIHJldHVybiBmdW5jdGlvbiAodiwga2V5LCBhKSB7XG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBudW1UcmFuc2Zvcm1lcnM7IGkrKykge1xuICAgICAgICAgICAgdiA9IHRyYW5zZm9ybWVyc1tpXSh2LCBrZXksIGEpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHY7XG4gICAgfTtcbn07XG5cbnZhciBjcmVhdGVEZWxpbWl0ZWQgPSBleHBvcnRzLmNyZWF0ZURlbGltaXRlZCA9IGZ1bmN0aW9uICh2YWx1ZXMsIHRlcm1zLCBkZWxpbWl0ZXIsIGNob3ApIHtcbiAgICB2YXIgbnVtVGVybXMgPSB0ZXJtcy5sZW5ndGg7XG4gICAgdmFyIGNvbWJpbmVkID0gJyc7XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IG51bVRlcm1zOyBpKyspIHtcbiAgICAgICAgdmFyIHRlcm0gPSB0ZXJtc1tpXTtcbiAgICAgICAgaWYgKHZhbHVlcy5oYXNPd25Qcm9wZXJ0eSh0ZXJtKSkge1xuICAgICAgICAgICAgY29tYmluZWQgKz0gdmFsdWVzW3Rlcm1dICsgZGVsaW1pdGVyO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGNob3ApIHtcbiAgICAgICAgY29tYmluZWQgPSBjb21iaW5lZC5zbGljZSgwLCAtY2hvcCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbWJpbmVkO1xufTtcblxuLypcbiAgICBDcmVhdGUgYSBmdW5jdGlvbiBzdHJpbmdcblxuICAgICcyMHB4JywgJ3RyYW5zbGF0ZScgLT4gJ3RyYW5zbGF0ZSgyMHB4KSdcblxuICAgIEBwYXJhbSBbc3RyaW5nXVxuICAgIEBwYXJhbSBbc3RyaW5nXVxuICAgIEByZXR1cm4gW3N0cmluZ11cbiovXG52YXIgY3JlYXRlRnVuY3Rpb25TdHJpbmcgPSBleHBvcnRzLmNyZWF0ZUZ1bmN0aW9uU3RyaW5nID0gZnVuY3Rpb24gKHZhbHVlLCBwcmVmaXgpIHtcbiAgICByZXR1cm4gcHJlZml4ICsgJygnICsgdmFsdWUgKyAnKSc7XG59O1xuXG4vKlxuICAgIEdlbmVyYXRlIGN1cnJlbnQgdGltZXN0YW1wXG4gICAgXG4gICAgQHJldHVybiBbdGltZXN0YW1wXTogQ3VycmVudCBVTklYIHRpbWVzdGFtcFxuKi9cbnZhciBjdXJyZW50VGltZSA9IGV4cG9ydHMuY3VycmVudFRpbWUgPSBIQVNfUEVSRk9STUFOQ0VfTk9XID8gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBwZXJmb3JtYW5jZS5ub3coKTtcbn0gOiBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xufTtcblxuLypcbiAgICBTcGxpdCBjb2xvciBzdHJpbmcgaW50byBtYXAgb2YgY29sb3IgcHJvcGVydGllc1xuXG4gICAgXCJyZ2JhKDI1NSwgMjU1LCAyNTUsIDApXCIsIFtcIlJlZFwiLCAnR3JlZW5cIiwgXCJCbHVlXCIsIFwiQWxwaGFcIl1cblxuICAgIHsgUmVkOiAyNTUuLi4gfVxuKi9cbnZhciBnZXRDb2xvclZhbHVlcyA9IGV4cG9ydHMuZ2V0Q29sb3JWYWx1ZXMgPSBmdW5jdGlvbiAodmFsdWUsIGNvbG9yVGVybXMpIHtcbiAgICB2YXIgbnVtQ29sb3JUZXJtcyA9IGNvbG9yVGVybXMubGVuZ3RoO1xuICAgIHZhciBjb2xvclZhbHVlcyA9IHt9O1xuICAgIHZhciBjb2xvcnMgPSBzcGxpdENvbW1hRGVsaW1pdGVkKGdldFZhbHVlRnJvbUZ1bmN0aW9uU3RyaW5nKHZhbHVlKSk7XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IG51bUNvbG9yVGVybXM7IGkrKykge1xuICAgICAgICBjb2xvclZhbHVlc1tjb2xvclRlcm1zW2ldXSA9IGNvbG9yc1tpXSAhPT0gdW5kZWZpbmVkID8gY29sb3JzW2ldIDogMTtcbiAgICB9XG5cbiAgICByZXR1cm4gY29sb3JWYWx1ZXM7XG59O1xuXG4vKlxuICAgIEdldCB2YWx1ZSBmcm9tIGZ1bmN0aW9uIHN0cmluZ1xuXG4gICAgXCJ0cmFuc2xhdGVYKDIwcHgpXCIgLT4gXCIyMHB4XCJcbiovXG52YXIgZ2V0VmFsdWVGcm9tRnVuY3Rpb25TdHJpbmcgPSBleHBvcnRzLmdldFZhbHVlRnJvbUZ1bmN0aW9uU3RyaW5nID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgcmV0dXJuIHZhbHVlLnN1YnN0cmluZyh2YWx1ZS5pbmRleE9mKCcoJykgKyAxLCB2YWx1ZS5sYXN0SW5kZXhPZignKScpKTtcbn07XG5cbi8qXG4gICAgQ2hlY2sgaWYgdHdvIG9iamVjdHMgaGF2ZSBjaGFuZ2VkIGZyb20gZWFjaCBvdGhlclxuICAgIFxuICAgIEBwYXJhbSBbb2JqZWN0XTogSW5wdXQgQVxuICAgIEBwYXJhbSBbb2JqZWN0XTogSW5wdXQgQlxuICAgIEByZXR1cm4gW2Jvb2xlYW5dOiBUcnVlIGlmIGRpZmZlcmVudFxuKi9cbnZhciBoYXNDaGFuZ2VkID0gZXhwb3J0cy5oYXNDaGFuZ2VkID0gZnVuY3Rpb24gKGEsIGIpIHtcbiAgICB2YXIgY2hhbmdlZCA9IGZhbHNlO1xuXG4gICAgZm9yICh2YXIga2V5IGluIGEpIHtcbiAgICAgICAgaWYgKGEuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgICAgaWYgKGhhc1Byb3BlcnR5KGIsIGtleSkpIHtcbiAgICAgICAgICAgICAgICBpZiAoYVtrZXldICE9PSBiW2tleV0pIHtcbiAgICAgICAgICAgICAgICAgICAgY2hhbmdlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjaGFuZ2VkID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBjaGFuZ2VkO1xufTtcblxuLypcbiAgICBDaGVjayBpZiBvYmplY3QgaGFzIHByb3BlcnR5IGFuZCBpdCBpc24ndCB1bmRlZmluZWRcblxuICAgIEBwYXJhbSBbb2JqZWN0XVxuICAgIEBwYXJhbSBbc3RyaW5nXVxuICAgIEByZXR1cm4gW2Jvb2xlYW5dXG4qL1xudmFyIGhhc1Byb3BlcnR5ID0gZXhwb3J0cy5oYXNQcm9wZXJ0eSA9IGZ1bmN0aW9uIChvYmplY3QsIHByb3BlcnR5TmFtZSkge1xuICAgIHJldHVybiBvYmplY3QuaGFzT3duUHJvcGVydHkocHJvcGVydHlOYW1lKSAmJiBvYmplY3RbcHJvcGVydHlOYW1lXSAhPT0gdW5kZWZpbmVkO1xufTtcblxuLypcbiAgICBJcyB1dGlscyB2YXIgYW4gYXJyYXkgPyBcbiAgICBcbiAgICBAcGFyYW06IFZhcmlhYmxlIHRvIHRlc3RcbiAgICBAcmV0dXJuIFtib29sZWFuXTogUmV0dXJucyB0cnVlIGlmIHV0aWxzLnZhclR5cGUgPT09ICdBcnJheSdcbiovXG52YXIgaXNBcnJheSA9IGV4cG9ydHMuaXNBcnJheSA9IGZ1bmN0aW9uIChhcnIpIHtcbiAgICByZXR1cm4gdmFyVHlwZShhcnIpID09PSAnQXJyYXknO1xufTtcblxuLypcbiAgICBJcyB1dGlscyB2YXIgYSBmdW5jdGlvbiA/IFxuICAgIFxuICAgIEBwYXJhbTogVmFyaWFibGUgdG8gdGVzdFxuICAgIEByZXR1cm4gW2Jvb2xlYW5dOiBSZXR1cm5zIHRydWUgaWYgdXRpbHMudmFyVHlwZSA9PT0gJ0Z1bmN0aW9uJ1xuKi9cbnZhciBpc0Z1bmMgPSBleHBvcnRzLmlzRnVuYyA9IGZ1bmN0aW9uIChvYmopIHtcbiAgICByZXR1cm4gdmFyVHlwZShvYmopID09PSAnRnVuY3Rpb24nO1xufTtcblxuLypcbiAgICBJcyB1dGlscyB2YXIgYSBudW1iZXI/XG4gICAgXG4gICAgQHBhcmFtOiBWYXJpYWJsZSB0byB0ZXN0XG4gICAgQHJldHVybiBbYm9vbGVhbl06IFJldHVybnMgdHJ1ZSBpZiB0eXBlb2YgPT09ICdudW1iZXInXG4qL1xudmFyIGlzTnVtID0gZXhwb3J0cy5pc051bSA9IGZ1bmN0aW9uIChudW0pIHtcbiAgICByZXR1cm4gdHlwZW9mIG51bSA9PT0gJ251bWJlcic7XG59O1xuXG4vKlxuICAgIElzIHV0aWxzIHZhciBhbiBvYmplY3Q/XG4gICAgXG4gICAgQHBhcmFtOiBWYXJpYWJsZSB0byB0ZXN0XG4gICAgQHJldHVybiBbYm9vbGVhbl06IFJldHVybnMgdHJ1ZSBpZiB0eXBlb2YgPT09ICdvYmplY3QnXG4qL1xudmFyIGlzT2JqID0gZXhwb3J0cy5pc09iaiA9IGZ1bmN0aW9uIChvYmopIHtcbiAgICByZXR1cm4gdHlwZW9mIG9iaiA9PT0gJ29iamVjdCc7XG59O1xuXG4vKlxuICAgIElzIHV0aWxzIGEgcmVsYXRpdmUgdmFsdWUgYXNzaWdubWVudD9cbiAgICBcbiAgICBAcGFyYW0gW3N0cmluZ106IFZhcmlhYmxlIHRvIHRlc3RcbiAgICBAcmV0dXJuIFtib29sZWFuXTogSWYgdXRpbHMgbG9va3MgbGlrZSBhIHJlbGF0aXZlIHZhbHVlIGFzc2lnbm1lbnRcbiovXG52YXIgaXNSZWxhdGl2ZVZhbHVlID0gZXhwb3J0cy5pc1JlbGF0aXZlVmFsdWUgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICByZXR1cm4gdmFsdWUgJiYgdmFsdWUuaW5kZXhPZiAmJiB2YWx1ZS5pbmRleE9mKCc9JykgPiAwID8gdHJ1ZSA6IGZhbHNlO1xufTtcblxuLypcbiAgICBJcyB1dGlscyB2YXIgYSBzdHJpbmcgPyBcbiAgICBcbiAgICBAcGFyYW06IFZhcmlhYmxlIHRvIHRlc3RcbiAgICBAcmV0dXJuIFtib29sZWFuXTogUmV0dXJucyB0cnVlIGlmIHR5cGVvZiBzdHIgPT09ICdzdHJpbmcnXG4qL1xudmFyIGlzU3RyaW5nID0gZXhwb3J0cy5pc1N0cmluZyA9IGZ1bmN0aW9uIChzdHIpIHtcbiAgICByZXR1cm4gdHlwZW9mIHN0ciA9PT0gJ3N0cmluZyc7XG59O1xuXG4vKlxuICAgIEBwYXJhbSBbc3RyaW5nIHx8IE5vZGVMaXN0XTpcbiAgICAgICAgSWYgc3RyaW5nLCB0cmVhdGVkIGFzIHNlbGVjdG9yLlxuICAgICAgICBJZiBub3QsIHRyZWF0ZWQgYXMgcHJlZXhpc3RpbmcgTm9kZUxpc3RcblxuICAgIEByZXR1cm4gW0FycmF5XVxuKi9cbnZhciBzZWxlY3REb20gPSBleHBvcnRzLnNlbGVjdERvbSA9IGZ1bmN0aW9uIChzZWxlY3Rvcikge1xuICAgIHZhciBub2RlcyA9IHR5cGVvZiBzZWxlY3RvciA9PT0gJ3N0cmluZycgPyBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9yKSA6IHNlbGVjdG9yO1xuICAgIHJldHVybiBub2Rlcy5sZW5ndGggPyBbXS5zbGljZS5jYWxsKG5vZGVzKSA6IFtdLnB1c2gobm9kZXMpO1xufTtcblxuLypcbiAgICBTcGxpdCBjb21tYS1kZWxpbWl0ZWQgc3RyaW5nXG5cbiAgICBcImZvbyxiYXJcIiAtPiBbXCJmb29cIiwgXCJiYXJcIl1cblxuICAgIEBwYXJhbSBbc3RyaW5nXVxuICAgIEByZXR1cm4gW2FycmF5XVxuKi9cbnZhciBzcGxpdENvbW1hRGVsaW1pdGVkID0gZXhwb3J0cy5zcGxpdENvbW1hRGVsaW1pdGVkID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgcmV0dXJuIGlzU3RyaW5nKHZhbHVlKSA/IHZhbHVlLnNwbGl0KC8sXFxzKi8pIDogW3ZhbHVlXTtcbn07XG5cbi8qXG4gICAgU3BsaXQgc3BhY2UtZGVsaW1pdGVkIHN0cmluZ1xuXG4gICAgXCJmb28gYmFyXCIgLT4gW1wiZm9vXCIsIFwiYmFyXCJdXG5cbiAgICBAcGFyYW0gW3N0cmluZ11cbiAgICBAcmV0dXJuIFthcnJheV1cbiovXG52YXIgc3BsaXRTcGFjZURlbGltaXRlZCA9IGV4cG9ydHMuc3BsaXRTcGFjZURlbGltaXRlZCA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgIHJldHVybiBpc1N0cmluZyh2YWx1ZSkgPyB2YWx1ZS5zcGxpdCgnICcpIDogW3ZhbHVlXTtcbn07XG5cbi8qXG4gICAgQ29udmVydCBudW1iZXIgdG8geCBkZWNpbWFsIHBsYWNlc1xuXG4gICAgQHBhcmFtIFtudW1iZXJdXG4gICAgQHBhcmFtIFtudW1iZXJdXG4gICAgQHJldHVybiBbbnVtYmVyXVxuKi9cbnZhciB0b0RlY2ltYWwgPSBleHBvcnRzLnRvRGVjaW1hbCA9IGZ1bmN0aW9uIChudW0pIHtcbiAgICB2YXIgcHJlY2lzaW9uID0gYXJndW1lbnRzLmxlbmd0aCA8PSAxIHx8IGFyZ3VtZW50c1sxXSA9PT0gdW5kZWZpbmVkID8gMiA6IGFyZ3VtZW50c1sxXTtcblxuICAgIHByZWNpc2lvbiA9IE1hdGgucG93KDEwLCBwcmVjaXNpb24pO1xuICAgIHJldHVybiBNYXRoLnJvdW5kKG51bSAqIHByZWNpc2lvbikgLyBwcmVjaXNpb247XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluTnlZeTlwYm1NdmRYUnBiSE11YW5NaVhTd2libUZ0WlhNaU9sdGRMQ0p0WVhCd2FXNW5jeUk2SWpzN08wRkJRVUVzU1VGQlRTeHhRa0ZCY1VJc2FVSkJRWEpDTzBGQlEwNHNTVUZCVFN4dFFrRkJiVUlzVDBGQmJrSTdRVUZEVGl4SlFVRk5MSE5DUVVGMVFpeFBRVUZQTEZkQlFWQXNTMEZCZFVJc1YwRkJka0lzU1VGQmMwTXNXVUZCV1N4SFFVRmFPenM3T3pzN096dEJRVkZ1UlN4SlFVRk5MRlZCUVZVN1YwRkJXU3hQUVVGUExGTkJRVkFzUTBGQmFVSXNVVUZCYWtJc1EwRkJNRUlzU1VGQk1VSXNRMEZCSzBJc1VVRkJMMElzUlVGQmVVTXNTMEZCZWtNc1EwRkJLME1zUTBGQkwwTXNSVUZCYTBRc1EwRkJReXhEUVVGRU8wTkJRVGxFT3pzN096czdPenRCUVZGVUxFbEJRVTBzYjBOQlFXTXNWVUZCUXl4TlFVRkVPMWRCUVZrc1QwRkJUeXhQUVVGUUxFTkJRV1VzYTBKQlFXWXNSVUZCYlVNc1owSkJRVzVETEVWQlFYRkVMRmRCUVhKRU8wTkJRVm83T3pzN096czdPenRCUVZOd1FpeEpRVUZOTEc5RVFVRnpRaXhWUVVGRExGbEJRVVFzUlVGQmEwSTdRVUZEYWtRc1VVRkJUU3hyUWtGQmEwSXNZVUZCWVN4TlFVRmlMRU5CUkhsQ08wRkJSV3BFTEZGQlFVa3NTVUZCU1N4RFFVRktPenM3T3pzN096dEJRVVkyUXl4WFFWVXhReXhWUVVGRExFTkJRVVFzUlVGQlNTeEhRVUZLTEVWQlFWTXNRMEZCVkN4RlFVRmxPMEZCUTJ4Q0xHRkJRVXNzU1VGQlNTeERRVUZLTEVWQlFVOHNTVUZCU1N4bFFVRktMRVZCUVhGQ0xFZEJRV3BETEVWQlFYTkRPMEZCUTJ4RExHZENRVUZKTEdGQlFXRXNRMEZCWWl4RlFVRm5RaXhEUVVGb1FpeEZRVUZ0UWl4SFFVRnVRaXhGUVVGM1FpeERRVUY0UWl4RFFVRktMRU5CUkd0RE8xTkJRWFJET3p0QlFVbEJMR1ZCUVU4c1EwRkJVQ3hEUVV4clFqdExRVUZtTEVOQlZqQkRPME5CUVd4Q096dEJRVzFDTlVJc1NVRkJUU3cwUTBGQmEwSXNWVUZCUXl4TlFVRkVMRVZCUVZNc1MwRkJWQ3hGUVVGblFpeFRRVUZvUWl4RlFVRXlRaXhKUVVFelFpeEZRVUZ2UXp0QlFVTXZSQ3hSUVVGTkxGZEJRVmNzVFVGQlRTeE5RVUZPTEVOQlJEaERPMEZCUlM5RUxGRkJRVWtzVjBGQlZ5eEZRVUZZTEVOQlJqSkVPenRCUVVrdlJDeFRRVUZMTEVsQlFVa3NTVUZCU1N4RFFVRktMRVZCUVU4c1NVRkJTU3hSUVVGS0xFVkJRV01zUjBGQk9VSXNSVUZCYlVNN1FVRkRMMElzV1VGQlRTeFBRVUZQTEUxQlFVMHNRMEZCVGl4RFFVRlFMRU5CUkhsQ08wRkJSUzlDTEZsQlFVa3NUMEZCVHl4alFVRlFMRU5CUVhOQ0xFbEJRWFJDTEVOQlFVb3NSVUZCYVVNN1FVRkROMElzZDBKQlFWa3NUMEZCVHl4SlFVRlFMRWxCUVdVc1UwRkJaaXhEUVVScFFqdFRRVUZxUXp0TFFVWktPenRCUVU5QkxGRkJRVWtzU1VGQlNpeEZRVUZWTzBGQlEwNHNiVUpCUVZjc1UwRkJVeXhMUVVGVUxFTkJRV1VzUTBGQlppeEZRVUZyUWl4RFFVRkRMRWxCUVVRc1EwRkJOMElzUTBGRVRUdExRVUZXT3p0QlFVbEJMRmRCUVU4c1VVRkJVQ3hEUVdZclJEdERRVUZ3UXpzN096czdPenM3T3pzN1FVRXlRbmhDTEVsQlFVMHNjMFJCUVhWQ0xGVkJRVU1zUzBGQlJDeEZRVUZSTEUxQlFWSTdWMEZCYzBJc1pVRkJWVHREUVVGb1F6czdPenM3T3p0QlFVODNRaXhKUVVGTkxHOURRVUZqTEhOQ1FVRnpRanRYUVVGTkxGbEJRVmtzUjBGQldqdERRVUZPTEVkQlFUQkNPMWRCUVUwc1NVRkJTU3hKUVVGS0xFZEJRVmNzVDBGQldEdERRVUZPT3pzN096czdPenM3UVVGVGNFVXNTVUZCVFN3d1EwRkJhVUlzVlVGQlF5eExRVUZFTEVWQlFWRXNWVUZCVWl4RlFVRjFRanRCUVVOcVJDeFJRVUZOTEdkQ1FVRm5RaXhYUVVGWExFMUJRVmdzUTBGRU1rSTdRVUZGYWtRc1VVRkJUU3hqUVVGakxFVkJRV1FzUTBGR01rTTdRVUZIYWtRc1VVRkJUU3hUUVVGVExHOUNRVUZ2UWl3eVFrRkJNa0lzUzBGQk0wSXNRMEZCY0VJc1EwRkJWQ3hEUVVneVF6czdRVUZMYWtRc1UwRkJTeXhKUVVGSkxFbEJRVWtzUTBGQlNpeEZRVUZQTEVsQlFVa3NZVUZCU2l4RlFVRnRRaXhIUVVGdVF5eEZRVUYzUXp0QlFVTndReXh2UWtGQldTeFhRVUZYTEVOQlFWZ3NRMEZCV2l4SlFVRTJRaXhOUVVGRExFTkJRVThzUTBGQlVDeE5RVUZqTEZOQlFXUXNSMEZCTWtJc1QwRkJUeXhEUVVGUUxFTkJRVFZDTEVkQlFYZERMRU5CUVhoRExFTkJSRTg3UzBGQmVFTTdPMEZCU1VFc1YwRkJUeXhYUVVGUUxFTkJWR2xFTzBOQlFYWkNPenM3T3pzN08wRkJhVUoyUWl4SlFVRk5MR3RGUVVFMlFpeFZRVUZETEV0QlFVUTdWMEZCVnl4TlFVRk5MRk5CUVU0c1EwRkJaMElzVFVGQlRTeFBRVUZPTEVOQlFXTXNSMEZCWkN4SlFVRnhRaXhEUVVGeVFpeEZRVUYzUWl4TlFVRk5MRmRCUVU0c1EwRkJhMElzUjBGQmJFSXNRMEZCZUVNN1EwRkJXRHM3T3pzN096czdPMEZCVTI1RExFbEJRVTBzYTBOQlFXRXNWVUZCUXl4RFFVRkVMRVZCUVVrc1EwRkJTaXhGUVVGVk8wRkJRMmhETEZGQlFVa3NWVUZCVlN4TFFVRldMRU5CUkRSQ096dEJRVWRvUXl4VFFVRkxMRWxCUVVrc1IwRkJTaXhKUVVGWExFTkJRV2hDTEVWQlFXMUNPMEZCUTJZc1dVRkJTU3hGUVVGRkxHTkJRVVlzUTBGQmFVSXNSMEZCYWtJc1EwRkJTaXhGUVVFeVFqdEJRVU4yUWl4blFrRkJTU3haUVVGWkxFTkJRVm9zUlVGQlpTeEhRVUZtTEVOQlFVb3NSVUZCZVVJN1FVRkRja0lzYjBKQlFVa3NSVUZCUlN4SFFVRkdMRTFCUVZjc1JVRkJSU3hIUVVGR0xFTkJRVmdzUlVGQmJVSTdRVUZEYmtJc09FSkJRVlVzU1VGQlZpeERRVVJ0UWp0cFFrRkJka0k3WVVGRVNpeE5RVWxQTzBGQlEwZ3NNRUpCUVZVc1NVRkJWaXhEUVVSSE8yRkJTbEE3VTBGRVNqdExRVVJLT3p0QlFWbEJMRmRCUVU4c1QwRkJVQ3hEUVdablF6dERRVUZXT3pzN096czdPenM3UVVGNVFtNUNMRWxCUVUwc2IwTkJRV01zVlVGQlF5eE5RVUZFTEVWQlFWTXNXVUZCVkR0WFFVRXdRaXhQUVVGUExHTkJRVkFzUTBGQmMwSXNXVUZCZEVJc1MwRkJkVU1zVDBGQlR5eFpRVUZRTEUxQlFYbENMRk5CUVhwQ08wTkJRV3BGT3pzN096czdPenRCUVZGd1FpeEpRVUZOTERSQ1FVRlZMRlZCUVVNc1IwRkJSRHRYUVVGVExGRkJRVkVzUjBGQlVpeE5RVUZwUWl4UFFVRnFRanREUVVGVU96czdPenM3T3p0QlFWRm9RaXhKUVVGTkxEQkNRVUZUTEZWQlFVTXNSMEZCUkR0WFFVRlRMRkZCUVZFc1IwRkJVaXhOUVVGcFFpeFZRVUZxUWp0RFFVRlVPenM3T3pzN096dEJRVkZtTEVsQlFVMHNkMEpCUVZFc1ZVRkJReXhIUVVGRU8xZEJRVk1zVDBGQlR5eEhRVUZRTEV0QlFXVXNVVUZCWmp0RFFVRlVPenM3T3pzN096dEJRVkZrTEVsQlFVMHNkMEpCUVZFc1ZVRkJReXhIUVVGRU8xZEJRVk1zVDBGQlR5eEhRVUZRTEV0QlFXVXNVVUZCWmp0RFFVRlVPenM3T3pzN096dEJRVkZrTEVsQlFVMHNORU5CUVd0Q0xGVkJRVU1zUzBGQlJEdFhRVUZYTEV0QlFVTXNTVUZCVXl4TlFVRk5MRTlCUVU0c1NVRkJhVUlzVFVGQlRTeFBRVUZPTEVOQlFXTXNSMEZCWkN4SlFVRnhRaXhEUVVGeVFpeEhRVUV3UWl4SlFVRnlSQ3hIUVVFMFJDeExRVUUxUkR0RFFVRllPenM3T3pzN096dEJRVkY0UWl4SlFVRk5MRGhDUVVGWExGVkJRVU1zUjBGQlJEdFhRVUZUTEU5QlFVOHNSMEZCVUN4TFFVRmxMRkZCUVdZN1EwRkJWRHM3T3pzN096czdPMEZCVTJwQ0xFbEJRVTBzWjBOQlFWa3NWVUZCUXl4UlFVRkVMRVZCUVdNN1FVRkRia01zVVVGQlRTeFJRVUZSTEU5QlFWRXNVVUZCVUN4TFFVRnZRaXhSUVVGd1FpeEhRVUZuUXl4VFFVRlRMR2RDUVVGVUxFTkJRVEJDTEZGQlFURkNMRU5CUVdwRExFZEJRWFZGTEZGQlFYWkZMRU5CUkhGQ08wRkJSVzVETEZkQlFVOHNTMEZCUXl4RFFVRk5MRTFCUVU0c1IwRkJaMElzUjBGQlJ5eExRVUZJTEVOQlFWTXNTVUZCVkN4RFFVRmpMRXRCUVdRc1EwRkJha0lzUjBGQmQwTXNSMEZCUnl4SlFVRklMRU5CUVZFc1MwRkJVaXhEUVVGNFF5eERRVVkwUWp0RFFVRmtPenM3T3pzN096czdPMEZCWVd4Q0xFbEJRVTBzYjBSQlFYTkNMRlZCUVVNc1MwRkJSRHRYUVVGWExGTkJRVk1zUzBGQlZDeEpRVUZyUWl4TlFVRk5MRXRCUVU0c1EwRkJXU3hOUVVGYUxFTkJRV3hDTEVkQlFYZERMRU5CUVVNc1MwRkJSQ3hEUVVGNFF6dERRVUZZT3pzN096czdPenM3TzBGQlZUVkNMRWxCUVUwc2IwUkJRWE5DTEZWQlFVTXNTMEZCUkR0WFFVRlhMRk5CUVZNc1MwRkJWQ3hKUVVGclFpeE5RVUZOTEV0QlFVNHNRMEZCV1N4SFFVRmFMRU5CUVd4Q0xFZEJRWEZETEVOQlFVTXNTMEZCUkN4RFFVRnlRenREUVVGWU96czdPenM3T3pzN1FVRlROVUlzU1VGQlRTeG5RMEZCV1N4VlFVRkRMRWRCUVVRc1JVRkJkMEk3VVVGQmJFSXNhMFZCUVZrc2FVSkJRVTA3TzBGQlF6ZERMSGxDUVVGWkxFbEJRVTBzVlVGQmJFSXNRMEZFTmtNN1FVRkZOME1zVjBGQlR5eExRVUZMTEV0QlFVd3NRMEZCVnl4TlFVRk5MRk5CUVU0c1EwRkJXQ3hIUVVFNFFpeFRRVUU1UWl4RFFVWnpRenREUVVGNFFpSXNJbVpwYkdVaU9pSjFkR2xzY3k1cWN5SXNJbk52ZFhKalpWSnZiM1FpT2lJdlZYTmxjbk12VFdGMGRDOVRhWFJsY3k5d2IzQnRiM1JwYjI0aUxDSnpiM1Z5WTJWelEyOXVkR1Z1ZENJNld5SmpiMjV6ZENCRFFVMUZURjlEUVZORlgxQkJWRlJGVWs0Z1BTQXZLRnRoTFhwZEtTaGJRUzFhWFNrdlp6dGNibU52Ym5OMElGSkZVRXhCUTBWZlZFVk5VRXhCVkVVZ1BTQW5KREV0SkRJbk8xeHVZMjl1YzNRZ1NFRlRYMUJGVWtaUFVrMUJUa05GWDA1UFZ5QTlJQ2gwZVhCbGIyWWdjR1Z5Wm05eWJXRnVZMlVnSVQwOUlDZDFibVJsWm1sdVpXUW5JQ1ltSUhCbGNtWnZjbTFoYm1ObExtNXZkeWs3WEc1Y2JpOHFYRzRnSUNBZ1IyVjBJSFpoY2lCMGVYQmxJR0Z6SUhOMGNtbHVaMXh1SUNBZ0lGeHVJQ0FnSUVCd1lYSmhiVG9nVm1GeWFXRmliR1VnZEc4Z2RHVnpkRnh1SUNBZ0lFQnlaWFIxY200Z1czTjBjbWx1WjEwNklGSmxkSFZ5Ym5Nc0lHWnZjaUJwYm5OMFlXNWpaU0FuVDJKcVpXTjBKeUJwWmlCYmIySnFaV04wSUU5aWFtVmpkRjFjYmlvdlhHNWpiMjV6ZENCMllYSlVlWEJsSUQwZ2RtRnlhV0ZpYkdVZ1BUNGdUMkpxWldOMExuQnliM1J2ZEhsd1pTNTBiMU4wY21sdVp5NWpZV3hzS0haaGNtbGhZbXhsS1M1emJHbGpaU2c0TENBdE1TazdYRzVjYmk4cVhHNGdJQ0FnUTI5dWRtVnlkQ0JqWVcxbGJFTmhjMlVnZEc4Z1pHRnphQzFqWVhObFhHNWNiaUFnSUNCQWNHRnlZVzBnVzNOMGNtbHVaMTFjYmlBZ0lDQkFjbVYwZFhKdUlGdHpkSEpwYm1kZFhHNHFMMXh1Wlhod2IzSjBJR052Ym5OMElHTmhiV1ZzVkc5RVlYTm9JRDBnS0hOMGNtbHVaeWtnUFQ0Z2MzUnlhVzVuTG5KbGNHeGhZMlVvUTBGTlJVeGZRMEZUUlY5UVFWUlVSVkpPTENCU1JWQk1RVU5GWDFSRlRWQk1RVlJGS1M1MGIweHZkMlZ5UTJGelpTZ3BPMXh1WEc0dktseHVJQ0FnSUVOdmJXSnBibVVnZEhKaGJuTm1iM0p0WlhKeklHbHVkRzhnYjI1bElHWjFibU4wYVc5dUlIUm9ZWFFnWTJGc2JITWdaWFpsY25sY2JpQWdJQ0IwY21GdWMyWnZjbTFsY2lCcGJpQjBhR1VnWVhKeVlYa2dZVzVrSUhKbGRIVnlibk1nZEdobElISmxjM1ZzZEZ4dVhHNGdJQ0FnUUhCaGNtRnRJRnRoY25KaGVWMWNiaUFnSUNCQWNtVjBkWEp1SUZ0bWRXNWpkR2x2YmwxY2Jpb3ZYRzVsZUhCdmNuUWdZMjl1YzNRZ1kyOXRZbWx1WlZSeVlXNXpabTl5YldWeWN5QTlJQ2gwY21GdWMyWnZjbTFsY25NcElEMCtJSHRjYmlBZ0lDQmpiMjV6ZENCdWRXMVVjbUZ1YzJadmNtMWxjbk1nUFNCMGNtRnVjMlp2Y20xbGNuTXViR1Z1WjNSb08xeHVJQ0FnSUd4bGRDQnBJRDBnTUR0Y2JseHVJQ0FnSUM4cVhHNGdJQ0FnSUNBZ0lFQndZWEpoYlNCYmJuVnRZbVZ5WFZ4dUlDQWdJQ0FnSUNCQWNHRnlZVzBnVzNOMGNtbHVaMTFjYmlBZ0lDQWdJQ0FnUUhCaGNtRnRJRnRCWTNScGIyNWRYRzRnSUNBZ0lDQWdJRUJ5WlhSMWNtNGdXMjUxYldKbGNsMWNiaUFnSUNBcUwxeHVJQ0FnSUhKbGRIVnliaUFvZGl3Z2EyVjVMQ0JoS1NBOVBpQjdYRzRnSUNBZ0lDQWdJR1p2Y2lBb2FTQTlJREE3SUdrZ1BDQnVkVzFVY21GdWMyWnZjbTFsY25NN0lHa3JLeWtnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdkaUE5SUhSeVlXNXpabTl5YldWeWMxdHBYU2gyTENCclpYa3NJR0VwTzF4dUlDQWdJQ0FnSUNCOVhHNWNiaUFnSUNBZ0lDQWdjbVYwZFhKdUlIWTdYRzRnSUNBZ2ZUdGNibjA3WEc1Y2JtVjRjRzl5ZENCamIyNXpkQ0JqY21WaGRHVkVaV3hwYldsMFpXUWdQU0FvZG1Gc2RXVnpMQ0IwWlhKdGN5d2daR1ZzYVcxcGRHVnlMQ0JqYUc5d0tTQTlQaUI3WEc0Z0lDQWdZMjl1YzNRZ2JuVnRWR1Z5YlhNZ1BTQjBaWEp0Y3k1c1pXNW5kR2c3WEc0Z0lDQWdiR1YwSUdOdmJXSnBibVZrSUQwZ0p5YzdYRzVjYmlBZ0lDQm1iM0lnS0d4bGRDQnBJRDBnTURzZ2FTQThJRzUxYlZSbGNtMXpPeUJwS3lzcElIdGNiaUFnSUNBZ0lDQWdZMjl1YzNRZ2RHVnliU0E5SUhSbGNtMXpXMmxkTzF4dUlDQWdJQ0FnSUNCcFppQW9kbUZzZFdWekxtaGhjMDkzYmxCeWIzQmxjblI1S0hSbGNtMHBLU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQmpiMjFpYVc1bFpDQXJQU0IyWVd4MVpYTmJkR1Z5YlYwZ0t5QmtaV3hwYldsMFpYSTdYRzRnSUNBZ0lDQWdJSDFjYmlBZ0lDQjlYRzVjYmlBZ0lDQnBaaUFvWTJodmNDa2dlMXh1SUNBZ0lDQWdJQ0JqYjIxaWFXNWxaQ0E5SUdOdmJXSnBibVZrTG5Oc2FXTmxLREFzSUMxamFHOXdLVHRjYmlBZ0lDQjlYRzVjYmlBZ0lDQnlaWFIxY200Z1kyOXRZbWx1WldRN1hHNTlPMXh1WEc0dktseHVJQ0FnSUVOeVpXRjBaU0JoSUdaMWJtTjBhVzl1SUhOMGNtbHVaMXh1WEc0Z0lDQWdKekl3Y0hnbkxDQW5kSEpoYm5Oc1lYUmxKeUF0UGlBbmRISmhibk5zWVhSbEtESXdjSGdwSjF4dVhHNGdJQ0FnUUhCaGNtRnRJRnR6ZEhKcGJtZGRYRzRnSUNBZ1FIQmhjbUZ0SUZ0emRISnBibWRkWEc0Z0lDQWdRSEpsZEhWeWJpQmJjM1J5YVc1blhWeHVLaTljYm1WNGNHOXlkQ0JqYjI1emRDQmpjbVZoZEdWR2RXNWpkR2x2YmxOMGNtbHVaeUE5SUNoMllXeDFaU3dnY0hKbFptbDRLU0E5UGlCZ0pIdHdjbVZtYVhoOUtDUjdkbUZzZFdWOUtXQTdYRzVjYmk4cVhHNGdJQ0FnUjJWdVpYSmhkR1VnWTNWeWNtVnVkQ0IwYVcxbGMzUmhiWEJjYmlBZ0lDQmNiaUFnSUNCQWNtVjBkWEp1SUZ0MGFXMWxjM1JoYlhCZE9pQkRkWEp5Wlc1MElGVk9TVmdnZEdsdFpYTjBZVzF3WEc0cUwxeHVaWGh3YjNKMElHTnZibk4wSUdOMWNuSmxiblJVYVcxbElEMGdTRUZUWDFCRlVrWlBVazFCVGtORlgwNVBWeUEvSUNncElEMCtJSEJsY21admNtMWhibU5sTG01dmR5Z3BJRG9nS0NrZ1BUNGdibVYzSUVSaGRHVW9LUzVuWlhSVWFXMWxLQ2s3WEc1Y2JpOHFYRzRnSUNBZ1UzQnNhWFFnWTI5c2IzSWdjM1J5YVc1bklHbHVkRzhnYldGd0lHOW1JR052Ykc5eUlIQnliM0JsY25ScFpYTmNibHh1SUNBZ0lGd2ljbWRpWVNneU5UVXNJREkxTlN3Z01qVTFMQ0F3S1Z3aUxDQmJYQ0pTWldSY0lpd2dKMGR5WldWdVhDSXNJRndpUW14MVpWd2lMQ0JjSWtGc2NHaGhYQ0pkWEc1Y2JpQWdJQ0I3SUZKbFpEb2dNalUxTGk0dUlIMWNiaW92WEc1bGVIQnZjblFnWTI5dWMzUWdaMlYwUTI5c2IzSldZV3gxWlhNZ1BTQW9kbUZzZFdVc0lHTnZiRzl5VkdWeWJYTXBJRDArSUh0Y2JpQWdJQ0JqYjI1emRDQnVkVzFEYjJ4dmNsUmxjbTF6SUQwZ1kyOXNiM0pVWlhKdGN5NXNaVzVuZEdnN1hHNGdJQ0FnWTI5dWMzUWdZMjlzYjNKV1lXeDFaWE1nUFNCN2ZUdGNiaUFnSUNCamIyNXpkQ0JqYjJ4dmNuTWdQU0J6Y0d4cGRFTnZiVzFoUkdWc2FXMXBkR1ZrS0dkbGRGWmhiSFZsUm5KdmJVWjFibU4wYVc5dVUzUnlhVzVuS0haaGJIVmxLU2s3WEc1Y2JpQWdJQ0JtYjNJZ0tHeGxkQ0JwSUQwZ01Ec2dhU0E4SUc1MWJVTnZiRzl5VkdWeWJYTTdJR2tyS3lrZ2UxeHVJQ0FnSUNBZ0lDQmpiMnh2Y2xaaGJIVmxjMXRqYjJ4dmNsUmxjbTF6VzJsZFhTQTlJQ2hqYjJ4dmNuTmJhVjBnSVQwOUlIVnVaR1ZtYVc1bFpDa2dQeUJqYjJ4dmNuTmJhVjBnT2lBeE8xeHVJQ0FnSUgxY2JseHVJQ0FnSUhKbGRIVnliaUJqYjJ4dmNsWmhiSFZsY3p0Y2JuMDdYRzVjYmk4cVhHNGdJQ0FnUjJWMElIWmhiSFZsSUdaeWIyMGdablZ1WTNScGIyNGdjM1J5YVc1blhHNWNiaUFnSUNCY0luUnlZVzV6YkdGMFpWZ29NakJ3ZUNsY0lpQXRQaUJjSWpJd2NIaGNJbHh1S2k5Y2JtVjRjRzl5ZENCamIyNXpkQ0JuWlhSV1lXeDFaVVp5YjIxR2RXNWpkR2x2YmxOMGNtbHVaeUE5SUNoMllXeDFaU2tnUFQ0Z2RtRnNkV1V1YzNWaWMzUnlhVzVuS0haaGJIVmxMbWx1WkdWNFQyWW9KeWduS1NBcklERXNJSFpoYkhWbExteGhjM1JKYm1SbGVFOW1LQ2NwSnlrcE8xeHVYRzR2S2x4dUlDQWdJRU5vWldOcklHbG1JSFIzYnlCdlltcGxZM1J6SUdoaGRtVWdZMmhoYm1kbFpDQm1jbTl0SUdWaFkyZ2diM1JvWlhKY2JpQWdJQ0JjYmlBZ0lDQkFjR0Z5WVcwZ1cyOWlhbVZqZEYwNklFbHVjSFYwSUVGY2JpQWdJQ0JBY0dGeVlXMGdXMjlpYW1WamRGMDZJRWx1Y0hWMElFSmNiaUFnSUNCQWNtVjBkWEp1SUZ0aWIyOXNaV0Z1WFRvZ1ZISjFaU0JwWmlCa2FXWm1aWEpsYm5SY2Jpb3ZYRzVsZUhCdmNuUWdZMjl1YzNRZ2FHRnpRMmhoYm1kbFpDQTlJQ2hoTENCaUtTQTlQaUI3WEc0Z0lDQWdiR1YwSUdOb1lXNW5aV1FnUFNCbVlXeHpaVHRjYmx4dUlDQWdJR1p2Y2lBb2JHVjBJR3RsZVNCcGJpQmhLU0I3WEc0Z0lDQWdJQ0FnSUdsbUlDaGhMbWhoYzA5M2JsQnliM0JsY25SNUtHdGxlU2twSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJR2xtSUNob1lYTlFjbTl3WlhKMGVTaGlMQ0JyWlhrcEtTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdhV1lnS0dGYmEyVjVYU0FoUFQwZ1lsdHJaWGxkS1NCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJR05vWVc1blpXUWdQU0IwY25WbE8xeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lIMWNiaUFnSUNBZ0lDQWdJQ0FnSUgwZ1pXeHpaU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnWTJoaGJtZGxaQ0E5SUhSeWRXVTdYRzRnSUNBZ0lDQWdJQ0FnSUNCOVhHNGdJQ0FnSUNBZ0lIMWNiaUFnSUNCOVhHNWNiaUFnSUNCeVpYUjFjbTRnWTJoaGJtZGxaRHRjYm4wN1hHNWNiaThxWEc0Z0lDQWdRMmhsWTJzZ2FXWWdiMkpxWldOMElHaGhjeUJ3Y205d1pYSjBlU0JoYm1RZ2FYUWdhWE51SjNRZ2RXNWtaV1pwYm1Wa1hHNWNiaUFnSUNCQWNHRnlZVzBnVzI5aWFtVmpkRjFjYmlBZ0lDQkFjR0Z5WVcwZ1czTjBjbWx1WjExY2JpQWdJQ0JBY21WMGRYSnVJRnRpYjI5c1pXRnVYVnh1S2k5Y2JtVjRjRzl5ZENCamIyNXpkQ0JvWVhOUWNtOXdaWEowZVNBOUlDaHZZbXBsWTNRc0lIQnliM0JsY25SNVRtRnRaU2tnUFQ0Z2IySnFaV04wTG1oaGMwOTNibEJ5YjNCbGNuUjVLSEJ5YjNCbGNuUjVUbUZ0WlNrZ0ppWWdiMkpxWldOMFczQnliM0JsY25SNVRtRnRaVjBnSVQwOUlIVnVaR1ZtYVc1bFpEdGNibHh1THlwY2JpQWdJQ0JKY3lCMWRHbHNjeUIyWVhJZ1lXNGdZWEp5WVhrZ1B5QmNiaUFnSUNCY2JpQWdJQ0JBY0dGeVlXMDZJRlpoY21saFlteGxJSFJ2SUhSbGMzUmNiaUFnSUNCQWNtVjBkWEp1SUZ0aWIyOXNaV0Z1WFRvZ1VtVjBkWEp1Y3lCMGNuVmxJR2xtSUhWMGFXeHpMblpoY2xSNWNHVWdQVDA5SUNkQmNuSmhlU2RjYmlvdlhHNWxlSEJ2Y25RZ1kyOXVjM1FnYVhOQmNuSmhlU0E5SUNoaGNuSXBJRDArSUhaaGNsUjVjR1VvWVhKeUtTQTlQVDBnSjBGeWNtRjVKenRjYmx4dUx5cGNiaUFnSUNCSmN5QjFkR2xzY3lCMllYSWdZU0JtZFc1amRHbHZiaUEvSUZ4dUlDQWdJRnh1SUNBZ0lFQndZWEpoYlRvZ1ZtRnlhV0ZpYkdVZ2RHOGdkR1Z6ZEZ4dUlDQWdJRUJ5WlhSMWNtNGdXMkp2YjJ4bFlXNWRPaUJTWlhSMWNtNXpJSFJ5ZFdVZ2FXWWdkWFJwYkhNdWRtRnlWSGx3WlNBOVBUMGdKMFoxYm1OMGFXOXVKMXh1S2k5Y2JtVjRjRzl5ZENCamIyNXpkQ0JwYzBaMWJtTWdQU0FvYjJKcUtTQTlQaUIyWVhKVWVYQmxLRzlpYWlrZ1BUMDlJQ2RHZFc1amRHbHZiaWM3WEc1Y2JpOHFYRzRnSUNBZ1NYTWdkWFJwYkhNZ2RtRnlJR0VnYm5WdFltVnlQMXh1SUNBZ0lGeHVJQ0FnSUVCd1lYSmhiVG9nVm1GeWFXRmliR1VnZEc4Z2RHVnpkRnh1SUNBZ0lFQnlaWFIxY200Z1cySnZiMnhsWVc1ZE9pQlNaWFIxY201eklIUnlkV1VnYVdZZ2RIbHdaVzltSUQwOVBTQW5iblZ0WW1WeUoxeHVLaTljYm1WNGNHOXlkQ0JqYjI1emRDQnBjMDUxYlNBOUlDaHVkVzBwSUQwK0lIUjVjR1Z2WmlCdWRXMGdQVDA5SUNkdWRXMWlaWEluTzF4dVhHNHZLbHh1SUNBZ0lFbHpJSFYwYVd4eklIWmhjaUJoYmlCdlltcGxZM1EvWEc0Z0lDQWdYRzRnSUNBZ1FIQmhjbUZ0T2lCV1lYSnBZV0pzWlNCMGJ5QjBaWE4wWEc0Z0lDQWdRSEpsZEhWeWJpQmJZbTl2YkdWaGJsMDZJRkpsZEhWeWJuTWdkSEoxWlNCcFppQjBlWEJsYjJZZ1BUMDlJQ2R2WW1wbFkzUW5YRzRxTDF4dVpYaHdiM0owSUdOdmJuTjBJR2x6VDJKcUlEMGdLRzlpYWlrZ1BUNGdkSGx3Wlc5bUlHOWlhaUE5UFQwZ0oyOWlhbVZqZENjN1hHNWNiaThxWEc0Z0lDQWdTWE1nZFhScGJITWdZU0J5Wld4aGRHbDJaU0IyWVd4MVpTQmhjM05wWjI1dFpXNTBQMXh1SUNBZ0lGeHVJQ0FnSUVCd1lYSmhiU0JiYzNSeWFXNW5YVG9nVm1GeWFXRmliR1VnZEc4Z2RHVnpkRnh1SUNBZ0lFQnlaWFIxY200Z1cySnZiMnhsWVc1ZE9pQkpaaUIxZEdsc2N5QnNiMjlyY3lCc2FXdGxJR0VnY21Wc1lYUnBkbVVnZG1Gc2RXVWdZWE56YVdkdWJXVnVkRnh1S2k5Y2JtVjRjRzl5ZENCamIyNXpkQ0JwYzFKbGJHRjBhWFpsVm1Gc2RXVWdQU0FvZG1Gc2RXVXBJRDArSUNoMllXeDFaU0FtSmlCMllXeDFaUzVwYm1SbGVFOW1JQ1ltSUhaaGJIVmxMbWx1WkdWNFQyWW9KejBuS1NBK0lEQXBJRDhnZEhKMVpTQTZJR1poYkhObE8xeHVYRzR2S2x4dUlDQWdJRWx6SUhWMGFXeHpJSFpoY2lCaElITjBjbWx1WnlBL0lGeHVJQ0FnSUZ4dUlDQWdJRUJ3WVhKaGJUb2dWbUZ5YVdGaWJHVWdkRzhnZEdWemRGeHVJQ0FnSUVCeVpYUjFjbTRnVzJKdmIyeGxZVzVkT2lCU1pYUjFjbTV6SUhSeWRXVWdhV1lnZEhsd1pXOW1JSE4wY2lBOVBUMGdKM04wY21sdVp5ZGNiaW92WEc1bGVIQnZjblFnWTI5dWMzUWdhWE5UZEhKcGJtY2dQU0FvYzNSeUtTQTlQaUIwZVhCbGIyWWdjM1J5SUQwOVBTQW5jM1J5YVc1bkp6dGNibHh1THlwY2JpQWdJQ0JBY0dGeVlXMGdXM04wY21sdVp5QjhmQ0JPYjJSbFRHbHpkRjA2WEc0Z0lDQWdJQ0FnSUVsbUlITjBjbWx1Wnl3Z2RISmxZWFJsWkNCaGN5QnpaV3hsWTNSdmNpNWNiaUFnSUNBZ0lDQWdTV1lnYm05MExDQjBjbVZoZEdWa0lHRnpJSEJ5WldWNGFYTjBhVzVuSUU1dlpHVk1hWE4wWEc1Y2JpQWdJQ0JBY21WMGRYSnVJRnRCY25KaGVWMWNiaW92WEc1bGVIQnZjblFnWTI5dWMzUWdjMlZzWldOMFJHOXRJRDBnS0hObGJHVmpkRzl5S1NBOVBpQjdYRzRnSUNBZ1kyOXVjM1FnYm05a1pYTWdQU0FvZEhsd1pXOW1JSE5sYkdWamRHOXlJRDA5UFNBbmMzUnlhVzVuSnlrZ1B5QmtiMk4xYldWdWRDNXhkV1Z5ZVZObGJHVmpkRzl5UVd4c0tITmxiR1ZqZEc5eUtTQTZJSE5sYkdWamRHOXlPMXh1SUNBZ0lISmxkSFZ5YmlBb2JtOWtaWE11YkdWdVozUm9LU0EvSUZ0ZExuTnNhV05sTG1OaGJHd29ibTlrWlhNcElEb2dXMTB1Y0hWemFDaHViMlJsY3lrN1hHNTlPMXh1WEc0dktseHVJQ0FnSUZOd2JHbDBJR052YlcxaExXUmxiR2x0YVhSbFpDQnpkSEpwYm1kY2JseHVJQ0FnSUZ3aVptOXZMR0poY2x3aUlDMCtJRnRjSW1admIxd2lMQ0JjSW1KaGNsd2lYVnh1WEc0Z0lDQWdRSEJoY21GdElGdHpkSEpwYm1kZFhHNGdJQ0FnUUhKbGRIVnliaUJiWVhKeVlYbGRYRzRxTDF4dVpYaHdiM0owSUdOdmJuTjBJSE53YkdsMFEyOXRiV0ZFWld4cGJXbDBaV1FnUFNBb2RtRnNkV1VwSUQwK0lHbHpVM1J5YVc1bktIWmhiSFZsS1NBL0lIWmhiSFZsTG5Od2JHbDBLQzhzWEZ4ektpOHBJRG9nVzNaaGJIVmxYVHRjYmx4dUx5cGNiaUFnSUNCVGNHeHBkQ0J6Y0dGalpTMWtaV3hwYldsMFpXUWdjM1J5YVc1blhHNWNiaUFnSUNCY0ltWnZieUJpWVhKY0lpQXRQaUJiWENKbWIyOWNJaXdnWENKaVlYSmNJbDFjYmx4dUlDQWdJRUJ3WVhKaGJTQmJjM1J5YVc1blhWeHVJQ0FnSUVCeVpYUjFjbTRnVzJGeWNtRjVYVnh1S2k5Y2JtVjRjRzl5ZENCamIyNXpkQ0J6Y0d4cGRGTndZV05sUkdWc2FXMXBkR1ZrSUQwZ0tIWmhiSFZsS1NBOVBpQnBjMU4wY21sdVp5aDJZV3gxWlNrZ1B5QjJZV3gxWlM1emNHeHBkQ2duSUNjcElEb2dXM1poYkhWbFhUdGNibHh1THlwY2JpQWdJQ0JEYjI1MlpYSjBJRzUxYldKbGNpQjBieUI0SUdSbFkybHRZV3dnY0d4aFkyVnpYRzVjYmlBZ0lDQkFjR0Z5WVcwZ1cyNTFiV0psY2wxY2JpQWdJQ0JBY0dGeVlXMGdXMjUxYldKbGNsMWNiaUFnSUNCQWNtVjBkWEp1SUZ0dWRXMWlaWEpkWEc0cUwxeHVaWGh3YjNKMElHTnZibk4wSUhSdlJHVmphVzFoYkNBOUlDaHVkVzBzSUhCeVpXTnBjMmx2YmlBOUlESXBJRDArSUh0Y2JpQWdJQ0J3Y21WamFYTnBiMjRnUFNBeE1DQXFLaUJ3Y21WamFYTnBiMjQ3WEc0Z0lDQWdjbVYwZFhKdUlFMWhkR2d1Y205MWJtUW9iblZ0SUNvZ2NISmxZMmx6YVc5dUtTQXZJSEJ5WldOcGMybHZianRjYm4wN1hHNGlYWDA9XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9pbmMvdXRpbHMuanNcbiAqKiBtb2R1bGUgaWQgPSAyXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzLnNldEdsb2JhbERpbGF0aW9uID0gdW5kZWZpbmVkO1xuXG52YXIgX3V0aWxzID0gcmVxdWlyZSgnLi4vaW5jL3V0aWxzJyk7XG5cbnZhciBNQVhfRUxBUFNFRCA9IDMzO1xuXG52YXIgY3VycmVudCA9IDA7XG52YXIgZWxhcHNlZCA9IDE2Ljc7XG52YXIgZGlsYXRpb24gPSAxO1xuXG5leHBvcnRzLmRlZmF1bHQgPSB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiAoZnJhbWVzdGFtcCkge1xuICAgICAgICBlbGFwc2VkID0gTWF0aC5tYXgoTWF0aC5taW4oZnJhbWVzdGFtcCAtIGN1cnJlbnQsIE1BWF9FTEFQU0VEKSwgMSkgKiBkaWxhdGlvbjtcbiAgICAgICAgY3VycmVudCA9IGZyYW1lc3RhbXA7XG4gICAgfSxcblxuICAgIHN0YXJ0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBjdXJyZW50ID0gKDAsIF91dGlscy5jdXJyZW50VGltZSkoKTtcbiAgICB9LFxuXG4gICAgZ2V0RWxhcHNlZDogZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gZWxhcHNlZDtcbiAgICB9XG59O1xudmFyIHNldEdsb2JhbERpbGF0aW9uID0gZXhwb3J0cy5zZXRHbG9iYWxEaWxhdGlvbiA9IGZ1bmN0aW9uIChuZXdEaWxhdGlvbikge1xuICAgIHJldHVybiBkaWxhdGlvbiA9IG5ld0RpbGF0aW9uO1xufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbk55WXk5d2NtOWpaWE56TDNScGJXVnlMbXB6SWwwc0ltNWhiV1Z6SWpwYlhTd2liV0Z3Y0dsdVozTWlPaUk3T3pzN096czdRVUZGUVN4SlFVRk5MR05CUVdNc1JVRkJaRHM3UVVGRlRpeEpRVUZKTEZWQlFWVXNRMEZCVmp0QlFVTktMRWxCUVVrc1ZVRkJWU3hKUVVGV08wRkJRMG9zU1VGQlNTeFhRVUZYTEVOQlFWZzdPMnRDUVVWWE8wRkJRMWdzV1VGQlVTeFZRVUZETEZWQlFVUXNSVUZCWjBJN1FVRkRjRUlzYTBKQlFWVXNTMEZCU3l4SFFVRk1MRU5CUVZNc1MwRkJTeXhIUVVGTUxFTkJRVk1zWVVGQllTeFBRVUZpTEVWQlFYTkNMRmRCUVM5Q0xFTkJRVlFzUlVGQmMwUXNRMEZCZEVRc1NVRkJNa1FzVVVGQk0wUXNRMEZFVlR0QlFVVndRaXhyUWtGQlZTeFZRVUZXTEVOQlJtOUNPMHRCUVdoQ096dEJRVXRTTEZkQlFVODdaVUZCVFN4VlFVRlZMSGxDUVVGV08wdEJRVTQ3TzBGQlJWQXNaMEpCUVZrN1pVRkJUVHRMUVVGT096dEJRVWRVTEVsQlFVMHNaMFJCUVc5Q0xGVkJRVU1zVjBGQlJEdFhRVUZwUWl4WFFVRlhMRmRCUVZnN1EwRkJha0lpTENKbWFXeGxJam9pZEdsdFpYSXVhbk1pTENKemIzVnlZMlZTYjI5MElqb2lMMVZ6WlhKekwwMWhkSFF2VTJsMFpYTXZjRzl3Ylc5MGFXOXVJaXdpYzI5MWNtTmxjME52Ym5SbGJuUWlPbHNpYVcxd2IzSjBJSHNnWTNWeWNtVnVkRlJwYldVZ2ZTQm1jbTl0SUNjdUxpOXBibU12ZFhScGJITW5PMXh1WEc1amIyNXpkQ0JOUVZoZlJVeEJVRk5GUkNBOUlETXpPMXh1WEc1c1pYUWdZM1Z5Y21WdWRDQTlJREE3WEc1c1pYUWdaV3hoY0hObFpDQTlJREUyTGpjN1hHNXNaWFFnWkdsc1lYUnBiMjRnUFNBeE8xeHVYRzVsZUhCdmNuUWdaR1ZtWVhWc2RDQjdYRzRnSUNBZ2RYQmtZWFJsT2lBb1puSmhiV1Z6ZEdGdGNDa2dQVDRnZTF4dUlDQWdJQ0FnSUNCbGJHRndjMlZrSUQwZ1RXRjBhQzV0WVhnb1RXRjBhQzV0YVc0b1puSmhiV1Z6ZEdGdGNDQXRJR04xY25KbGJuUXNJRTFCV0Y5RlRFRlFVMFZFS1N3Z01Ta2dLaUJrYVd4aGRHbHZianRjYmlBZ0lDQWdJQ0FnWTNWeWNtVnVkQ0E5SUdaeVlXMWxjM1JoYlhBN1hHNGdJQ0FnZlN4Y2JseHVJQ0FnSUhOMFlYSjBPaUFvS1NBOVBpQmpkWEp5Wlc1MElEMGdZM1Z5Y21WdWRGUnBiV1VvS1N4Y2JseHVJQ0FnSUdkbGRFVnNZWEJ6WldRNklDZ3BJRDArSUdWc1lYQnpaV1JjYm4wN1hHNWNibVY0Y0c5eWRDQmpiMjV6ZENCelpYUkhiRzlpWVd4RWFXeGhkR2x2YmlBOUlDaHVaWGRFYVd4aGRHbHZiaWtnUFQ0Z1pHbHNZWFJwYjI0Z1BTQnVaWGRFYVd4aGRHbHZianNpWFgwPVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvcHJvY2Vzcy90aW1lci5qc1xuICoqIG1vZHVsZSBpZCA9IDNcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxudmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF9Qcm9jZXNzMiA9IHJlcXVpcmUoJy4uL3Byb2Nlc3MvUHJvY2VzcycpO1xuXG52YXIgX1Byb2Nlc3MzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfUHJvY2VzczIpO1xuXG52YXIgX2NhbGMgPSByZXF1aXJlKCcuLi9pbmMvY2FsYycpO1xuXG52YXIgX3V0aWxzID0gcmVxdWlyZSgnLi4vaW5jL3V0aWxzJyk7XG5cbnZhciBfYmluZEFkYXB0ZXIgPSByZXF1aXJlKCcuLi9pbmMvYmluZC1hZGFwdGVyJyk7XG5cbnZhciBfYmluZEFkYXB0ZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfYmluZEFkYXB0ZXIpO1xuXG52YXIgX2NvbG9yID0gcmVxdWlyZSgnLi4vdmFsdWUtdHlwZXMvY29sb3InKTtcblxudmFyIF9jb2xvcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jb2xvcik7XG5cbnZhciBfY29tcGxleCA9IHJlcXVpcmUoJy4uL3ZhbHVlLXR5cGVzL2NvbXBsZXgnKTtcblxudmFyIF9jb21wbGV4MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NvbXBsZXgpO1xuXG52YXIgX3VuaXQgPSByZXF1aXJlKCcuLi92YWx1ZS10eXBlcy91bml0Jyk7XG5cbnZhciBfdW5pdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF91bml0KTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKG9iaiwga2V5cykgeyB2YXIgdGFyZ2V0ID0ge307IGZvciAodmFyIGkgaW4gb2JqKSB7IGlmIChrZXlzLmluZGV4T2YoaSkgPj0gMCkgY29udGludWU7IGlmICghT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgaSkpIGNvbnRpbnVlOyB0YXJnZXRbaV0gPSBvYmpbaV07IH0gcmV0dXJuIHRhcmdldDsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmICghc2VsZikgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIGNhbGwgJiYgKHR5cGVvZiBjYWxsID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpID8gY2FsbCA6IHNlbGY7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgXCIgKyB0eXBlb2Ygc3VwZXJDbGFzcyk7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgZW51bWVyYWJsZTogZmFsc2UsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcykgOiBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzOyB9XG5cbnZhciBERUZBVUxUX1BST1AgPSAnY3VycmVudCc7XG52YXIgTlVNRVJJQ0FMX1ZBTFVFUyA9IFtERUZBVUxUX1BST1AsICdmcm9tJywgJ3RvJywgJ3ByZXYnLCAndmVsb2NpdHknXTtcbnZhciBOVU1fTlVNRVJJQ0FMX1ZBTFVFUyA9IE5VTUVSSUNBTF9WQUxVRVMubGVuZ3RoO1xuXG52YXIgQWN0aW9uID0gZnVuY3Rpb24gKF9Qcm9jZXNzKSB7XG4gICAgX2luaGVyaXRzKEFjdGlvbiwgX1Byb2Nlc3MpO1xuXG4gICAgZnVuY3Rpb24gQWN0aW9uKHByb3BzKSB7XG4gICAgICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBBY3Rpb24pO1xuXG4gICAgICAgIHByb3BzLnN0YXRlID0ge307XG4gICAgICAgIHByb3BzLnZhbHVlS2V5cyA9IFtdO1xuICAgICAgICBwcm9wcy5wYXJlbnRLZXlzID0gW107XG4gICAgICAgIHJldHVybiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCBfUHJvY2Vzcy5jYWxsKHRoaXMsIHByb3BzKSk7XG4gICAgfVxuXG4gICAgLypcbiAgICAgICAgIyBTZXQgQWN0aW9uIHByb3BlcnRpZXNcbiAgICAgICAgIyMgU2V0IHVzZXItZGVmaW5lZCBBY3Rpb24gcHJvcGVydGllc1xuICAgICAgICAgQHBhcmFtIFtvYmplY3RdXG4gICAgICAgIEByZXR1cm4gW0FjdGlvbl1cbiAgICAqL1xuXG4gICAgQWN0aW9uLnByb3RvdHlwZS5zZXQgPSBmdW5jdGlvbiBzZXQoKSB7XG4gICAgICAgIHZhciBwcm9wcyA9IGFyZ3VtZW50cy5sZW5ndGggPD0gMCB8fCBhcmd1bWVudHNbMF0gPT09IHVuZGVmaW5lZCA/IHt9IDogYXJndW1lbnRzWzBdO1xuICAgICAgICB2YXIgdmFsdWVzID0gcHJvcHMudmFsdWVzO1xuICAgICAgICB2YXIgb24gPSBwcm9wcy5vbjtcblxuICAgICAgICB2YXIgcHJvcHNUb1NldCA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhwcm9wcywgWyd2YWx1ZXMnLCAnb24nXSk7XG5cbiAgICAgICAgdmFyIGN1cnJlbnRWYWx1ZXMgPSB0aGlzLnZhbHVlcyA9IHRoaXMudmFsdWVzIHx8IHt9O1xuICAgICAgICB2YXIgZGVmYXVsdFZhbHVlID0gdGhpcy5nZXREZWZhdWx0VmFsdWUoKTtcbiAgICAgICAgdmFyIGluaGVyaXRhYmxlID0ge307XG5cbiAgICAgICAgLy8gMSkgU2V0IG5vbi1jb25zdW1lZCBwcm9wZXJ0aWVzXG4gICAgICAgIF9Qcm9jZXNzLnByb3RvdHlwZS5zZXQuY2FsbCh0aGlzLCBwcm9wc1RvU2V0KTtcblxuICAgICAgICAvLyAyKSBCaW5kIGBvbmAgdG8gYW4gYWRhcHRlciwgaWYgbm90IGFscmVhZHlcbiAgICAgICAgaWYgKG9uKSB7XG4gICAgICAgICAgICAvLyBEdWNrdHlwaXNoIGNoZWNrIGZvciBBZGFwdGVyXG4gICAgICAgICAgICB0aGlzLm9uID0gIW9uLnNldHRlciA/ICgwLCBfYmluZEFkYXB0ZXIyLmRlZmF1bHQpKG9uKSA6IG9uO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gMykgUHJpbWUgYW4gb2JqZWN0IHRvIGluaGVyaXQgZnJvbSwgd2l0aCBvbmx5IGB2YWx1ZWAgcHJvcGVydGllc1xuICAgICAgICBmb3IgKHZhciBrZXkgaW4gZGVmYXVsdFZhbHVlKSB7XG4gICAgICAgICAgICBpZiAoZGVmYXVsdFZhbHVlLmhhc093blByb3BlcnR5KGtleSkgJiYgcHJvcHNUb1NldC5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgICAgICAgaW5oZXJpdGFibGVba2V5XSA9IHByb3BzVG9TZXRba2V5XTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIDQpIFVwZGF0ZSBleGlzdGluZyB2YWx1ZXMgd2l0aCBpbmhlcml0YWJsZSBwcm9wZXJ0aWVzXG4gICAgICAgIGZvciAodmFyIGtleSBpbiBjdXJyZW50VmFsdWVzKSB7XG4gICAgICAgICAgICAvLyBFeGNsdWRlIHZhcmlhYmxlcyB0byBiZSBzZXQsIGFzIHdlJ2xsIGRlYWwgd2l0aCB0aG9zZSBzZXBlcmF0ZWx5XG4gICAgICAgICAgICBpZiAoY3VycmVudFZhbHVlcy5oYXNPd25Qcm9wZXJ0eShrZXkpICYmIHZhbHVlcyAmJiAhdmFsdWVzLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICAgICAgICBjdXJyZW50VmFsdWVzW2tleV0gPSBfZXh0ZW5kcyh7fSwgY3VycmVudFZhbHVlc1trZXldLCBpbmhlcml0YWJsZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyA1KSBVcGRhdGVcbiAgICAgICAgaWYgKHZhbHVlcykge1xuICAgICAgICAgICAgdGhpcy5zZXRWYWx1ZXModmFsdWVzLCBpbmhlcml0YWJsZSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xuXG4gICAgQWN0aW9uLnByb3RvdHlwZS5zZXRWYWx1ZXMgPSBmdW5jdGlvbiBzZXRWYWx1ZXModmFsdWVzLCBpbmhlcml0RnJvbSkge1xuICAgICAgICB2YXIgY3VycmVudFZhbHVlcyA9IHRoaXMudmFsdWVzO1xuICAgICAgICB2YXIgZGVmYXVsdFZhbHVlID0gdGhpcy5nZXREZWZhdWx0VmFsdWUoKTtcbiAgICAgICAgdmFyIGRlZmF1bHRWYWx1ZVByb3AgPSB0aGlzLmdldERlZmF1bHRWYWx1ZVByb3AoKTtcblxuICAgICAgICAvLyAyKSBMb29wIG92ZXIgZXZlcnkgaW5jb21pbmcgYHZhbHVlYCBhbmQgc2V0XG4gICAgICAgIGZvciAodmFyIGtleSBpbiB2YWx1ZXMpIHtcbiAgICAgICAgICAgIGlmICh2YWx1ZXMuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgICAgICAgIHZhciB2YWx1ZSA9IHt9O1xuICAgICAgICAgICAgICAgIHZhciBjaGlsZHJlbiA9IHt9O1xuICAgICAgICAgICAgICAgIHZhciBoYXNDaGlsZHJlbiA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIHZhciBiYXNlID0gY3VycmVudFZhbHVlc1trZXldID8gY3VycmVudFZhbHVlc1trZXldIDogZGVmYXVsdFZhbHVlO1xuXG4gICAgICAgICAgICAgICAgLy8gSWYgdmFsdWVzIG9zIGFuIG9iamVjdCwgdXNlIGl0IGRpcmVjdGx5XG4gICAgICAgICAgICAgICAgaWYgKCgwLCBfdXRpbHMuaXNPYmopKHZhbHVlc1trZXldKSkge1xuICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IHZhbHVlc1trZXldO1xuXG4gICAgICAgICAgICAgICAgICAgIC8vIE9SIHNldCB0byBhIHRoZSBkZWZhdWx0IHZhbHVlIHByb3BlcnR5IG9mIGEgYmxhbmsgb2JqZWN0XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlW2RlZmF1bHRWYWx1ZVByb3BdID0gdmFsdWVzW2tleV07XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHZhciBuZXdWYWx1ZSA9IF9leHRlbmRzKHt9LCBiYXNlLCBpbmhlcml0RnJvbSwgdmFsdWUpO1xuXG4gICAgICAgICAgICAgICAgLypcbiAgICAgICAgICAgICAgICAgICAgVE9ETzogR2V0IGN1cnJlbnQgdmFsdWUgKyBzZXQgYGZyb21gXG4gICAgICAgICAgICAgICAgICAgIGlmIChuZXdWYWx1ZS5mcm9tICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ld1ZhbHVlLmN1cnJlbnQgPSBuZXdWYWx1ZS5mcm9tO1xuICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChuZXdWYWx1ZS5jdXJyZW50ID09PSB1bmRlZmluZWQgJiYgdGhpcy5vbikge1xuICAgICAgICAgICAgICAgICAgICAgICAgbmV3VmFsdWUuY3VycmVudCA9IHRoaXMub24uZ2V0KGtleSkgfHwgMDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgaWYgKG5ld1ZhbHVlLmZyb20gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbmV3VmFsdWUuZnJvbSA9IG5ld1ZhbHVlLmN1cnJlbnQ7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAqL1xuXG4gICAgICAgICAgICAgICAgLy8gSWYgb3VyIEFkYXB0ZXIgaGFzIGEgYGdldFZhbHVlVHlwZWAgZnVuY3Rpb24sIHRyeSB0byBnZXQgYSBgdHlwZWAgd2l0aCB0aGUgdmFsdWUga2V5XG4gICAgICAgICAgICAgICAgaWYgKCFuZXdWYWx1ZS50eXBlICYmIHRoaXMub24gJiYgdGhpcy5vbi5nZXRWYWx1ZVR5cGUpIHtcbiAgICAgICAgICAgICAgICAgICAgbmV3VmFsdWUudHlwZSA9IHRoaXMub24uZ2V0VmFsdWVUeXBlKGtleSk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLy8gYykgTG9vcCB0aHJvdWdoIGFsbCBudW1lcmljYWwgcHJvcGVydHkgdHlwZXNcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IE5VTV9OVU1FUklDQUxfVkFMVUVTOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHByb3BOYW1lID0gTlVNRVJJQ0FMX1ZBTFVFU1tpXTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHZhbHVlUHJvcCA9IG5ld1ZhbHVlW3Byb3BOYW1lXTtcblxuICAgICAgICAgICAgICAgICAgICAvLyBJZiB3ZSBoYXZlIHRoaXMga2luZCBvZiBwcm9wZXJ0eSwgcHJvY2Vzc1xuICAgICAgICAgICAgICAgICAgICBpZiAodmFsdWVQcm9wICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIElmIHdlIGRvbid0IGhhdmUgYSB0eXBlIHNldCB0byB0aGlzIHZhbHVlLCBmaW5kIG9uZSAodW5sZXNzIGl0J3MgYSByYXcgbnVtYmVyKVxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFuZXdWYWx1ZS50eXBlICYmICgwLCBfdXRpbHMuaXNTdHJpbmcpKHZhbHVlUHJvcCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoX3VuaXQyLmRlZmF1bHQudGVzdCh2YWx1ZVByb3ApKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ld1ZhbHVlLnR5cGUgPSBfdW5pdDIuZGVmYXVsdDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKF9jb2xvcjIuZGVmYXVsdC50ZXN0KHZhbHVlUHJvcCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3VmFsdWUudHlwZSA9IF9jb2xvcjIuZGVmYXVsdDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKF9jb21wbGV4Mi5kZWZhdWx0LnRlc3QodmFsdWVQcm9wKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXdWYWx1ZS50eXBlID0gX2NvbXBsZXgyLmRlZmF1bHQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobmV3VmFsdWUudHlwZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIElmIHdlJ3JlIGdvaW5nIHRvIHNwbGl0IHRoaXMgdmFsdWUgaW50byBjaGlsZCB2YWx1ZXNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAobmV3VmFsdWUudHlwZS5oYXNPd25Qcm9wZXJ0eSgnc3BsaXQnKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgc3BsaXRQcm9wID0gbmV3VmFsdWUudHlwZS5zcGxpdCh2YWx1ZVByb3ApO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAodmFyIHNwbGl0S2V5IGluIHNwbGl0UHJvcCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHNwbGl0UHJvcC5oYXNPd25Qcm9wZXJ0eShzcGxpdEtleSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgY29tYmluZWRLZXkgPSBrZXkgKyBzcGxpdEtleTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghY2hpbGRyZW5bY29tYmluZWRLZXldKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBfZGVmYXVsdFZhbHVlID0gbmV3VmFsdWUudHlwZS5kZWZhdWx0UHJvcHMgJiYgbmV3VmFsdWUudHlwZS5kZWZhdWx0UHJvcHNbc3BsaXRLZXldID8gbmV3VmFsdWUudHlwZS5kZWZhdWx0UHJvcHNbc3BsaXRLZXldIDoge307XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoaWxkcmVuW2NvbWJpbmVkS2V5XSA9IF9leHRlbmRzKHt9LCBuZXdWYWx1ZSwgX2RlZmF1bHRWYWx1ZSwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFyZW50OiBrZXksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGlsZEtleTogc3BsaXRLZXksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiB1bmRlZmluZWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hpbGRyZW5bY29tYmluZWRLZXldW3Byb3BOYW1lXSA9IHNwbGl0UHJvcFtzcGxpdEtleV07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBJZiB0aGlzIGhhcyBhIGB0ZW1wbGF0ZWAgZnVuY3Rpb24sIGdlbmVyYXRlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghbmV3VmFsdWUudGVtcGxhdGUgJiYgbmV3VmFsdWUudHlwZS50ZW1wbGF0ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3VmFsdWUudGVtcGxhdGUgPSBuZXdWYWx1ZS50eXBlLnRlbXBsYXRlKG5ld1ZhbHVlW3Byb3BOYW1lXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoYXNDaGlsZHJlbiA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChuZXdWYWx1ZS50eXBlLmRlZmF1bHRQcm9wcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXdWYWx1ZSA9IF9leHRlbmRzKHt9LCBuZXdWYWx1ZSwgbmV3VmFsdWUudHlwZS5kZWZhdWx0UHJvcHMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChuZXdWYWx1ZS50eXBlLnBhcnNlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ld1ZhbHVlW3Byb3BOYW1lXSA9IG5ld1ZhbHVlLnR5cGUucGFyc2UobmV3VmFsdWVbcHJvcE5hbWVdLCBuZXdWYWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSAvLyBFbmQgbnVtZXJpY2FsIHByb3BlcnR5IGl0ZXJhdGlvblxuXG4gICAgICAgICAgICAgICAgLy8gU2V0IGBwcmV2YCB0byBgY3VycmVudGAgaWYgaXQgaXNuJ3QgYWxyZWFkeSBkZWZpbmVkXG4gICAgICAgICAgICAgICAgaWYgKG5ld1ZhbHVlLnByZXYgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICBuZXdWYWx1ZS5wcmV2ID0gbmV3VmFsdWUuY3VycmVudDtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBjdXJyZW50VmFsdWVzW2tleV0gPSBuZXdWYWx1ZTtcblxuICAgICAgICAgICAgICAgIC8vIElmIHRoaXMgdmFsdWUgZG9lc24ndCBoYXZlIGNoaWxkcmVuLCBhZGQgdG8gdmFsdWVLZXlzXG4gICAgICAgICAgICAgICAgaWYgKCFoYXNDaGlsZHJlbikge1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy52YWx1ZUtleXMuaW5kZXhPZihrZXkpID09PSAtMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy52YWx1ZUtleXMucHVzaChrZXkpO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gT3IgYWRkIHRvIHBhcmVudEtleXNcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgbmV3VmFsdWUuY2hpbGRyZW4gPSBuZXdWYWx1ZS5jaGlsZHJlbiB8fCB7fTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMucGFyZW50S2V5cy5pbmRleE9mKGtleSkgPT09IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wYXJlbnRLZXlzLnB1c2goa2V5KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRWYWx1ZXMoY2hpbGRyZW4pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gLy8gRW5kIHZhbHVlIGl0ZXJhdGlvblxuXG4gICAgICAgIC8vIDMpIFByZWNvbXB1dGUgdmFsdWUga2V5IGFuZCBwYXJlbnQga2V5IGxlbmd0aCB0byBwcmV2ZW50IHBlci1mcmFtZSBtZWFzdXJlbWVudFxuICAgICAgICB0aGlzLm51bVZhbHVlS2V5cyA9IHRoaXMudmFsdWVLZXlzLmxlbmd0aDtcbiAgICAgICAgdGhpcy5udW1QYXJlbnRLZXlzID0gdGhpcy5wYXJlbnRLZXlzLmxlbmd0aDtcblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xuXG4gICAgLypcbiAgICAgICAgRGVjaWRlIHdoZXRoZXIgdGhpcyBBY3Rpb24gd2lsbCByZW5kZXIgb24gbmV4dCBmcmFtZVxuICAgICAgICAgQHBhcmFtIFtBY3Rpb25dXG4gICAgICAgIEBwYXJhbSBbbnVtYmVyXVxuICAgICAgICBAcGFyYW0gW251bWJlcl1cbiAgICAgICAgQHJldHVybiBbYm9vbGVhbl06IFJldHVybiB0cnVlIHRvIHJlbmRlclxuICAgICovXG5cbiAgICBBY3Rpb24ucHJvdG90eXBlLndpbGxSZW5kZXIgPSBmdW5jdGlvbiB3aWxsUmVuZGVyKGFjdGlvbiwgZnJhbWVTdGFtcCwgZWxhcHNlZCkge1xuICAgICAgICB2YXIgaGFzQ2hhbmdlZCA9IGZhbHNlO1xuXG4gICAgICAgIC8vIENoZWNrIGlmIGJhc2UgdmFsdWVzIGhhdmUgdXBkYXRlZFxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubnVtVmFsdWVLZXlzOyBpKyspIHtcbiAgICAgICAgICAgIHZhciBrZXkgPSB0aGlzLnZhbHVlS2V5c1tpXTtcbiAgICAgICAgICAgIHZhciB2YWx1ZSA9IHRoaXMudmFsdWVzW2tleV07XG5cbiAgICAgICAgICAgIC8vIFJ1biB0cmFuc2Zvcm0gZnVuY3Rpb24gKGlmIHByZXNlbnQpXG4gICAgICAgICAgICBpZiAodmFsdWUudHJhbnNmb3JtKSB7XG4gICAgICAgICAgICAgICAgdmFsdWUuY3VycmVudCA9IHZhbHVlLnRyYW5zZm9ybSh2YWx1ZS5jdXJyZW50LCBrZXksIHRoaXMpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBDYXAgbWluaW11bVxuICAgICAgICAgICAgaWYgKCgwLCBfdXRpbHMuaXNOdW0pKHZhbHVlLm1pbikpIHtcbiAgICAgICAgICAgICAgICB2YWx1ZS5jdXJyZW50ID0gTWF0aC5tYXgodmFsdWUuY3VycmVudCwgdmFsdWUubWluKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gQ2FwIG1heGltdW1cbiAgICAgICAgICAgIGlmICgoMCwgX3V0aWxzLmlzTnVtKSh2YWx1ZS5tYXgpKSB7XG4gICAgICAgICAgICAgICAgdmFsdWUuY3VycmVudCA9IE1hdGgubWluKHZhbHVlLmN1cnJlbnQsIHZhbHVlLm1heCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIFJvdW5kIG51bWJlclxuICAgICAgICAgICAgaWYgKHZhbHVlLnJvdW5kKSB7XG4gICAgICAgICAgICAgICAgdmFsdWUuY3VycmVudCA9IE1hdGgucm91bmQodmFsdWUuY3VycmVudCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIFVwZGF0ZSB2ZWxvY2l0eVxuICAgICAgICAgICAgaWYgKCF0aGlzLmNhbGN1bGF0ZXNWZWxvY2l0eSkge1xuICAgICAgICAgICAgICAgIHZhbHVlLnZlbG9jaXR5ID0gKDAsIF9jYWxjLnNwZWVkUGVyU2Vjb25kKSh2YWx1ZS5jdXJyZW50IC0gdmFsdWUucHJldiwgZWxhcHNlZCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIElmIHRoaXMgdmFsdWUgaGFzIGNoYW5nZWRcbiAgICAgICAgICAgIGlmICh2YWx1ZS5wcmV2ICE9PSB2YWx1ZS5jdXJyZW50KSB7XG4gICAgICAgICAgICAgICAgaGFzQ2hhbmdlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgdmFsdWUucHJldiA9IHZhbHVlLmN1cnJlbnQ7XG5cbiAgICAgICAgICAgICAgICAvLyBBcHBlbmQgdW5pdFxuICAgICAgICAgICAgICAgIHZhciB2YWx1ZUZvclN0YXRlID0gdmFsdWUudHlwZSAmJiB2YWx1ZS50eXBlLnNlcmlhbGl6ZSA/IHZhbHVlLnR5cGUuc2VyaWFsaXplKHZhbHVlLmN1cnJlbnQsIHZhbHVlKSA6IHZhbHVlLmN1cnJlbnQ7XG5cbiAgICAgICAgICAgICAgICAvLyBBZGQgdG8gc3RhdGUgaWYgdGhpcyBpcyBub3QgYSBjaGlsZCB2YXVlXG4gICAgICAgICAgICAgICAgaWYgKCF2YWx1ZS5wYXJlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZVtrZXldID0gdmFsdWVGb3JTdGF0ZTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnZhbHVlc1t2YWx1ZS5wYXJlbnRdLmNoaWxkcmVuW3ZhbHVlLmNoaWxkS2V5XSA9IHZhbHVlRm9yU3RhdGU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXMub25DbGVhbnVwID8gdHJ1ZSA6IGhhc0NoYW5nZWQ7XG4gICAgfTtcblxuICAgIC8qXG4gICAgICAgIElmIHdlIGFyZSByZW5kZXJpbmcsIHJlY29tYmluZSBwYXJlbnQgdmFsdWVzIGZpcnN0XG4gICAgKi9cblxuICAgIEFjdGlvbi5wcm90b3R5cGUub25QcmVSZW5kZXIgPSBmdW5jdGlvbiBvblByZVJlbmRlcigpIHtcbiAgICAgICAgLy8gVXBkYXRlIHBhcmVudCB2YWx1ZXNcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLm51bVBhcmVudEtleXM7IGkrKykge1xuICAgICAgICAgICAgdmFyIGtleSA9IHRoaXMucGFyZW50S2V5c1tpXTtcbiAgICAgICAgICAgIHZhciB2YWx1ZSA9IHRoaXMudmFsdWVzW2tleV07XG5cbiAgICAgICAgICAgIHZhbHVlLmN1cnJlbnQgPSB2YWx1ZS50eXBlLmNvbWJpbmUodmFsdWUuY2hpbGRyZW4sIHZhbHVlLnRlbXBsYXRlKTtcblxuICAgICAgICAgICAgaWYgKHRoaXMuc3RhdGVba2V5XSAhPT0gdmFsdWUuY3VycmVudCkge1xuICAgICAgICAgICAgICAgIHRoaXMuc3RhdGVba2V5XSA9IHZhbHVlLmN1cnJlbnQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgQWN0aW9uLnByb3RvdHlwZS5vblJlbmRlciA9IGZ1bmN0aW9uIG9uUmVuZGVyKF9yZWYpIHtcbiAgICAgICAgdmFyIHN0YXRlID0gX3JlZi5zdGF0ZTtcbiAgICAgICAgdmFyIG9uID0gX3JlZi5vbjtcblxuICAgICAgICBpZiAob24gJiYgb24uc2V0KSB7XG4gICAgICAgICAgICBvbi5zZXQoc3RhdGUpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMub25GcmFtZSkge1xuICAgICAgICAgICAgdGhpcy5vbkZyYW1lKHRoaXMpO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIEFjdGlvbi5wcm90b3R5cGUucGF1c2UgPSBmdW5jdGlvbiBwYXVzZSgpIHtcbiAgICAgICAgX1Byb2Nlc3MucHJvdG90eXBlLnN0b3AuY2FsbCh0aGlzKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfTtcblxuICAgIEFjdGlvbi5wcm90b3R5cGUucmVzdW1lID0gZnVuY3Rpb24gcmVzdW1lKCkge1xuICAgICAgICBfUHJvY2Vzcy5wcm90b3R5cGUuc3RhcnQuY2FsbCh0aGlzKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfTtcblxuICAgIEFjdGlvbi5wcm90b3R5cGUuc3RhcnQgPSBmdW5jdGlvbiBzdGFydCgpIHtcbiAgICAgICAgdmFyIHZhbHVlcyA9IHRoaXMudmFsdWVzO1xuICAgICAgICBfUHJvY2Vzcy5wcm90b3R5cGUuc3RhcnQuY2FsbCh0aGlzKTtcblxuICAgICAgICBmb3IgKHZhciBrZXkgaW4gdmFsdWVzKSB7XG4gICAgICAgICAgICBpZiAodmFsdWVzLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICAgICAgICB2YWx1ZXNba2V5XS5wcmV2ID0gdmFsdWVzW2tleV0ub3JpZ2luID0gdmFsdWVzW2tleV0uY3VycmVudDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG5cbiAgICAvKlxuICAgICAgICAjIEdldCBkZWZhdWx0IEFjdGlvbiB2YWx1ZSBwcm9wZXJ0aWVzXG4gICAgICAgICBAcmV0dXJuIFtvYmplY3RdXG4gICAgKi9cblxuICAgIEFjdGlvbi5wcm90b3R5cGUuZ2V0RGVmYXVsdFZhbHVlID0gZnVuY3Rpb24gZ2V0RGVmYXVsdFZhbHVlKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgY3VycmVudDogMCxcbiAgICAgICAgICAgIHZlbG9jaXR5OiAwLFxuICAgICAgICAgICAgcm91bmQ6IGZhbHNlXG4gICAgICAgIH07XG4gICAgfTtcblxuICAgIC8qXG4gICAgICAgICMgR2V0IGRlZmF1bHQgQWN0aW9uIHZhbHVlIHByb3BlcnR5IG5hbWVcbiAgICAgICAgIyMgU2V0IHRoaXMgYHZhbHVlYCBwcm9wZXJ0eSB3aGVuIHNldCBhcyB2YWx1ZSBpbnN0ZWFkIG9mIG9iamVjdFxuICAgICAgICAgQHJldHVybiBbc3RyaW5nXVxuICAgICovXG5cbiAgICBBY3Rpb24ucHJvdG90eXBlLmdldERlZmF1bHRWYWx1ZVByb3AgPSBmdW5jdGlvbiBnZXREZWZhdWx0VmFsdWVQcm9wKCkge1xuICAgICAgICByZXR1cm4gREVGQVVMVF9QUk9QO1xuICAgIH07XG5cbiAgICByZXR1cm4gQWN0aW9uO1xufShfUHJvY2VzczMuZGVmYXVsdCk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IEFjdGlvbjtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbk55WXk5aFkzUnBiMjV6TDBGamRHbHZiaTVxY3lKZExDSnVZVzFsY3lJNlcxMHNJbTFoY0hCcGJtZHpJam9pT3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN08wRkJVVUVzU1VGQlRTeGxRVUZsTEZOQlFXWTdRVUZEVGl4SlFVRk5MRzFDUVVGdFFpeERRVUZETEZsQlFVUXNSVUZCWlN4TlFVRm1MRVZCUVhWQ0xFbEJRWFpDTEVWQlFUWkNMRTFCUVRkQ0xFVkJRWEZETEZWQlFYSkRMRU5CUVc1Q08wRkJRMDRzU1VGQlRTeDFRa0ZCZFVJc2FVSkJRV2xDTEUxQlFXcENPenRKUVVWU096czdRVUZEYWtJc1lVRkVhVUlzVFVGRGFrSXNRMEZCV1N4TFFVRmFMRVZCUVcxQ096aENRVVJHTEZGQlEwVTdPMEZCUTJZc1kwRkJUU3hMUVVGT0xFZEJRV01zUlVGQlpDeERRVVJsTzBGQlJXWXNZMEZCVFN4VFFVRk9MRWRCUVd0Q0xFVkJRV3hDTEVOQlJtVTdRVUZIWml4alFVRk5MRlZCUVU0c1IwRkJiVUlzUlVGQmJrSXNRMEZJWlR0blJFRkpaaXh2UWtGQlRTeExRVUZPTEVkQlNtVTdTMEZCYmtJN096czdPenM3T3p0QlFVUnBRaXh4UWtGbGFrSXNjVUpCUVdkQ08xbEJRVm9zT0VSQlFWRXNhMEpCUVVrN1dVRkRTaXhUUVVFNFFpeE5RVUU1UWl4UFFVUkpPMWxCUTBrc1MwRkJjMElzVFVGQmRFSXNSMEZFU2pzN1dVRkRWeXh6UTBGQlpTeDVRa0ZFTVVJN08wRkJSVm9zV1VGQlRTeG5Ra0ZCWjBJc1MwRkJTeXhOUVVGTUxFZEJRV01zUzBGQlN5eE5RVUZNTEVsQlFXVXNSVUZCWml4RFFVWjRRanRCUVVkYUxGbEJRVTBzWlVGQlpTeExRVUZMTEdWQlFVd3NSVUZCWml4RFFVaE5PMEZCU1Zvc1dVRkJUU3hqUVVGakxFVkJRV1E3T3p0QlFVcE5MREpDUVU5T0xFZEJRVTRzV1VGQlZTeFZRVUZXT3pzN1FVRlFXU3haUVZWU0xFVkJRVW9zUlVGQlVUczdRVUZGU2l4cFFrRkJTeXhGUVVGTUxFZEJRVlVzUTBGQlJTeEhRVUZITEUxQlFVZ3NSMEZCWVN3eVFrRkJXU3hGUVVGYUxFTkJRV1lzUjBGQmFVTXNSVUZCYWtNc1EwRkdUanRUUVVGU096czdRVUZXV1N4aFFXZENVQ3hKUVVGSkxFZEJRVW9zU1VGQlZ5eFpRVUZvUWl4RlFVRTRRanRCUVVNeFFpeG5Ra0ZCU1N4aFFVRmhMR05CUVdJc1EwRkJORUlzUjBGQk5VSXNTMEZCYjBNc1YwRkJWeXhqUVVGWUxFTkJRVEJDTEVkQlFURkNMRU5CUVhCRExFVkJRVzlGTzBGQlEzQkZMRFJDUVVGWkxFZEJRVm9zU1VGQmJVSXNWMEZCVnl4SFFVRllMRU5CUVc1Q0xFTkJSRzlGTzJGQlFYaEZPMU5CUkVvN096dEJRV2hDV1N4aFFYVkNVQ3hKUVVGSkxFZEJRVW9zU1VGQlZ5eGhRVUZvUWl4RlFVRXJRanM3UVVGRk0wSXNaMEpCUVVrc1kwRkJZeXhqUVVGa0xFTkJRVFpDTEVkQlFUZENMRXRCUVhORExGVkJRVlVzUTBGQlF5eFBRVUZQTEdOQlFWQXNRMEZCYzBJc1IwRkJkRUlzUTBGQlJDeEZRVUU0UWp0QlFVTTVSU3c0UWtGQll5eEhRVUZrTEdsQ1FVRXdRaXhqUVVGakxFZEJRV1FzUjBGQmRVSXNXVUZCYWtRc1EwRkVPRVU3WVVGQmJFWTdVMEZHU2pzN08wRkJka0paTEZsQkswSlNMRTFCUVVvc1JVRkJXVHRCUVVOU0xHbENRVUZMTEZOQlFVd3NRMEZCWlN4TlFVRm1MRVZCUVhWQ0xGZEJRWFpDTEVWQlJGRTdVMEZCV2pzN1FVRkpRU3hsUVVGUExFbEJRVkFzUTBGdVExazdPenRCUVdaRExIRkNRWEZFYWtJc0swSkJRVlVzVVVGQlVTeGhRVUZoTzBGQlF6TkNMRmxCUVUwc1owSkJRV2RDTEV0QlFVc3NUVUZCVEN4RFFVUkxPMEZCUlROQ0xGbEJRVTBzWlVGQlpTeExRVUZMTEdWQlFVd3NSVUZCWml4RFFVWnhRanRCUVVjelFpeFpRVUZOTEcxQ1FVRnRRaXhMUVVGTExHMUNRVUZNTEVWQlFXNUNPenM3UVVGSWNVSXNZVUZOZEVJc1NVRkJTU3hIUVVGS0xFbEJRVmNzVFVGQmFFSXNSVUZCZDBJN1FVRkRjRUlzWjBKQlFVa3NUMEZCVHl4alFVRlFMRU5CUVhOQ0xFZEJRWFJDTEVOQlFVb3NSVUZCWjBNN1FVRkROVUlzYjBKQlFVa3NVVUZCVVN4RlFVRlNMRU5CUkhkQ08wRkJSVFZDTEc5Q1FVRkpMRmRCUVZjc1JVRkJXQ3hEUVVaM1FqdEJRVWMxUWl4dlFrRkJTU3hqUVVGakxFdEJRV1FzUTBGSWQwSTdRVUZKTlVJc2IwSkJRVWtzVDBGQlR5eGpRVUZqTEVkQlFXUXNTVUZCY1VJc1kwRkJZeXhIUVVGa0xFTkJRWEpDTEVkQlFUQkRMRmxCUVRGRE96czdRVUZLYVVJc2IwSkJUM2hDTEd0Q1FVRk5MRTlCUVU4c1IwRkJVQ3hEUVVGT0xFTkJRVW9zUlVGQmQwSTdRVUZEY0VJc05FSkJRVkVzVDBGQlR5eEhRVUZRTEVOQlFWSTdPenRCUVVSdlFpeHBRa0ZCZUVJc1RVRkpUenRCUVVOSUxEaENRVUZOTEdkQ1FVRk9MRWxCUVRCQ0xFOUJRVThzUjBGQlVDeERRVUV4UWl4RFFVUkhPM0ZDUVVwUU96dEJRVkZCTEc5Q1FVRkpMSGRDUVVGblFpeE5RVUZUTEdGQlFXZENMRTFCUVhwRE96czdPenM3T3pzN096czdPenM3UVVGbWQwSXNiMEpCWjBONFFpeERRVUZETEZOQlFWTXNTVUZCVkN4SlFVRnBRaXhMUVVGTExFVkJRVXdzU1VGQlZ5eExRVUZMTEVWQlFVd3NRMEZCVVN4WlFVRlNMRVZCUVhOQ08wRkJRMjVFTERaQ1FVRlRMRWxCUVZRc1IwRkJaMElzUzBGQlN5eEZRVUZNTEVOQlFWRXNXVUZCVWl4RFFVRnhRaXhIUVVGeVFpeERRVUZvUWl4RFFVUnRSRHRwUWtGQmRrUTdPenRCUVdoRE5FSXNjVUpCY1VOMlFpeEpRVUZKTEVsQlFVa3NRMEZCU2l4RlFVRlBMRWxCUVVrc2IwSkJRVW9zUlVGQk1FSXNSMEZCTVVNc1JVRkJLME03UVVGRE0wTXNkMEpCUVUwc1YwRkJWeXhwUWtGQmFVSXNRMEZCYWtJc1EwRkJXQ3hEUVVSeFF6dEJRVVV6UXl4M1FrRkJUU3haUVVGWkxGTkJRVk1zVVVGQlZDeERRVUZhT3pzN1FVRkdjVU1zZDBKQlMzWkRMR05CUVdNc1UwRkJaQ3hGUVVGNVFqczdRVUZGZWtJc05FSkJRVWtzUTBGQlF5eFRRVUZUTEVsQlFWUXNTVUZCYVVJc2NVSkJRVk1zVTBGQlZDeERRVUZzUWl4RlFVRjFRenRCUVVOMlF5eG5RMEZCU1N4bFFVRlRMRWxCUVZRc1EwRkJZeXhUUVVGa0xFTkJRVW9zUlVGQk9FSTdRVUZETVVJc2VVTkJRVk1zU1VGQlZDeHJRa0ZFTUVJN05rSkJRVGxDTEUxQlIwOHNTVUZCU1N4blFrRkJWU3hKUVVGV0xFTkJRV1VzVTBGQlppeERRVUZLTEVWQlFTdENPMEZCUTJ4RExIbERRVUZUTEVsQlFWUXNiVUpCUkd0RE96WkNRVUV2UWl4TlFVZEJMRWxCUVVrc2EwSkJRVmtzU1VGQldpeERRVUZwUWl4VFFVRnFRaXhEUVVGS0xFVkJRV2xETzBGQlEzQkRMSGxEUVVGVExFbEJRVlFzY1VKQlJHOURPelpDUVVGcVF6dDVRa0ZRV0RzN1FVRlpRU3cwUWtGQlNTeFRRVUZUTEVsQlFWUXNSVUZCWlRzN1FVRkZaaXhuUTBGQlNTeFRRVUZUTEVsQlFWUXNRMEZCWXl4alFVRmtMRU5CUVRaQ0xFOUJRVGRDTEVOQlFVb3NSVUZCTWtNN1FVRkRka01zYjBOQlFVMHNXVUZCV1N4VFFVRlRMRWxCUVZRc1EwRkJZeXhMUVVGa0xFTkJRVzlDTEZOQlFYQkNMRU5CUVZvc1EwRkVhVU03TzBGQlIzWkRMSEZEUVVGTExFbEJRVWtzVVVGQlNpeEpRVUZuUWl4VFFVRnlRaXhGUVVGblF6dEJRVU0xUWl4M1EwRkJTU3hWUVVGVkxHTkJRVllzUTBGQmVVSXNVVUZCZWtJc1EwRkJTaXhGUVVGM1F6dEJRVU53UXl3MFEwRkJUU3hqUVVGakxFMUJRVTBzVVVGQlRpeERRVVJuUWpzN1FVRkhjRU1zTkVOQlFVa3NRMEZCUXl4VFFVRlRMRmRCUVZRc1EwRkJSQ3hGUVVGM1FqdEJRVU40UWl4blJFRkJUU3huUWtGQlpTeFJRVUZETEVOQlFWTXNTVUZCVkN4RFFVRmpMRmxCUVdRc1NVRkJPRUlzVTBGQlV5eEpRVUZVTEVOQlFXTXNXVUZCWkN4RFFVRXlRaXhSUVVFelFpeERRVUU1UWl4SFFVRnpSU3hUUVVGVExFbEJRVlFzUTBGQll5eFpRVUZrTEVOQlFUSkNMRkZCUVROQ0xFTkJRWFpGTEVkQlFUaEhMRVZCUVRsSExFTkJSRWM3UVVGRmVFSXNjVVJCUVZNc1YwRkJWQ3hwUWtGRFR5eFZRVU5CTzBGQlEwZ3NkMFJCUVZFc1IwRkJVanRCUVVOQkxEQkVRVUZWTEZGQlFWWTdRVUZEUVN4elJFRkJUU3hUUVVGT096aERRVXhLTEVOQlJuZENPM2xEUVVFMVFqczdRVUZYUVN4cFJFRkJVeXhYUVVGVUxFVkJRWE5DTEZGQlFYUkNMRWxCUVd0RExGVkJRVlVzVVVGQlZpeERRVUZzUXl4RFFXUnZRenR4UTBGQmVFTTdhVU5CUkVvN096dEJRVWgxUXl4dlEwRjFRbTVETEVOQlFVTXNVMEZCVXl4UlFVRlVMRWxCUVhGQ0xGTkJRVk1zU1VGQlZDeERRVUZqTEZGQlFXUXNSVUZCZDBJN1FVRkRPVU1zTmtOQlFWTXNVVUZCVkN4SFFVRnZRaXhUUVVGVExFbEJRVlFzUTBGQll5eFJRVUZrTEVOQlFYVkNMRk5CUVZNc1VVRkJWQ3hEUVVGMlFpeERRVUZ3UWl4RFFVUTRRenRwUTBGQmJFUTdPMEZCU1VFc09FTkJRV01zU1VGQlpDeERRVE5DZFVNN05rSkJRVE5ETEUxQk5rSlBMRWxCUVVrc1UwRkJVeXhKUVVGVUxFTkJRV01zV1VGQlpDeEZRVUUwUWp0QlFVTnVReXgzUkVGQlowSXNWVUZCWVN4VFFVRlRMRWxCUVZRc1EwRkJZeXhaUVVGa0xFTkJRVGRDTEVOQlJHMURPelpDUVVGb1F6czdRVUZKVUN4blEwRkJTU3hUUVVGVExFbEJRVlFzUTBGQll5eExRVUZrTEVWQlFYRkNPMEZCUTNKQ0xIbERRVUZUTEZGQlFWUXNTVUZCY1VJc1UwRkJVeXhKUVVGVUxFTkJRV01zUzBGQlpDeERRVUZ2UWl4VFFVRlRMRkZCUVZRc1EwRkJjRUlzUlVGQmQwTXNVVUZCZUVNc1EwRkJja0lzUTBGRWNVSTdOa0pCUVhwQ08zbENRVzVEU2p0eFFrRmtTanRwUWtGTVNqczdPMEZCY2tNMFFpeHZRa0Z0UjNoQ0xGTkJRVk1zU1VGQlZDeExRVUZyUWl4VFFVRnNRaXhGUVVFMlFqdEJRVU0zUWl3MlFrRkJVeXhKUVVGVUxFZEJRV2RDTEZOQlFWTXNUMEZCVkN4RFFVUmhPMmxDUVVGcVF6czdRVUZKUVN3NFFrRkJZeXhIUVVGa0xFbEJRWEZDTEZGQlFYSkNPenM3UVVGMlJ6UkNMRzlDUVRCSGVFSXNRMEZCUXl4WFFVRkVMRVZCUVdNN1FVRkRaQ3gzUWtGQlNTeExRVUZMTEZOQlFVd3NRMEZCWlN4UFFVRm1MRU5CUVhWQ0xFZEJRWFpDTEUxQlFXZERMRU5CUVVNc1EwRkJSQ3hGUVVGSk8wRkJRM0JETERaQ1FVRkxMRk5CUVV3c1EwRkJaU3hKUVVGbUxFTkJRVzlDTEVkQlFYQkNMRVZCUkc5RE8zRkNRVUY0UXpzN08wRkJSR01zYVVKQlFXeENMRTFCVFU4N1FVRkRTQ3hwUTBGQlV5eFJRVUZVTEVkQlFXOUNMRk5CUVZNc1VVRkJWQ3hKUVVGeFFpeEZRVUZ5UWl4RFFVUnFRanM3UVVGSFNDdzBRa0ZCU1N4TFFVRkxMRlZCUVV3c1EwRkJaMElzVDBGQmFFSXNRMEZCZDBJc1IwRkJlRUlzVFVGQmFVTXNRMEZCUXl4RFFVRkVMRVZCUVVrN1FVRkRja01zYVVOQlFVc3NWVUZCVEN4RFFVRm5RaXhKUVVGb1FpeERRVUZ4UWl4SFFVRnlRaXhGUVVSeFF6dDVRa0ZCZWtNN08wRkJTVUVzTmtKQlFVc3NVMEZCVEN4RFFVRmxMRkZCUVdZc1JVRlFSenR4UWtGT1VEdGhRVEZIU2p0VFFVUktPenM3UVVGT01rSXNXVUZ2U1ROQ0xFTkJRVXNzV1VGQlRDeEhRVUZ2UWl4TFFVRkxMRk5CUVV3c1EwRkJaU3hOUVVGbUxFTkJjRWxQTzBGQmNVa3pRaXhoUVVGTExHRkJRVXdzUjBGQmNVSXNTMEZCU3l4VlFVRk1MRU5CUVdkQ0xFMUJRV2hDTEVOQmNrbE5PenRCUVhWSk0wSXNaVUZCVHl4SlFVRlFMRU5CZGtreVFqczdPenM3T3pzN096czdRVUZ5UkdRc2NVSkJkMDFxUWl4cFEwRkJWeXhSUVVGUkxGbEJRVmtzVTBGQlV6dEJRVU53UXl4WlFVRkpMR0ZCUVdFc1MwRkJZanM3TzBGQlJHZERMR0ZCU1M5Q0xFbEJRVWtzU1VGQlNTeERRVUZLTEVWQlFVOHNTVUZCU1N4TFFVRkxMRmxCUVV3c1JVRkJiVUlzUjBGQmRrTXNSVUZCTkVNN1FVRkRlRU1zWjBKQlFVMHNUVUZCVFN4TFFVRkxMRk5CUVV3c1EwRkJaU3hEUVVGbUxFTkJRVTRzUTBGRWEwTTdRVUZGZUVNc1owSkJRVTBzVVVGQlVTeExRVUZMTEUxQlFVd3NRMEZCV1N4SFFVRmFMRU5CUVZJN096dEJRVVpyUXl4blFrRkxjRU1zVFVGQlRTeFRRVUZPTEVWQlFXbENPMEZCUTJwQ0xITkNRVUZOTEU5QlFVNHNSMEZCWjBJc1RVRkJUU3hUUVVGT0xFTkJRV2RDTEUxQlFVMHNUMEZCVGl4RlFVRmxMRWRCUVM5Q0xFVkJRVzlETEVsQlFYQkRMRU5CUVdoQ0xFTkJSR2xDTzJGQlFYSkNPenM3UVVGTWQwTXNaMEpCVlhCRExHdENRVUZOTEUxQlFVMHNSMEZCVGl4RFFVRldMRVZCUVhOQ08wRkJRMnhDTEhOQ1FVRk5MRTlCUVU0c1IwRkJaMElzUzBGQlN5eEhRVUZNTEVOQlFWTXNUVUZCVFN4UFFVRk9MRVZCUVdVc1RVRkJUU3hIUVVGT0xFTkJRWGhETEVOQlJHdENPMkZCUVhSQ096czdRVUZXZDBNc1owSkJaWEJETEd0Q1FVRk5MRTFCUVUwc1IwRkJUaXhEUVVGV0xFVkJRWE5DTzBGQlEyeENMSE5DUVVGTkxFOUJRVTRzUjBGQlowSXNTMEZCU3l4SFFVRk1MRU5CUVZNc1RVRkJUU3hQUVVGT0xFVkJRV1VzVFVGQlRTeEhRVUZPTEVOQlFYaERMRU5CUkd0Q08yRkJRWFJDT3pzN1FVRm1kME1zWjBKQmIwSndReXhOUVVGTkxFdEJRVTRzUlVGQllUdEJRVU5pTEhOQ1FVRk5MRTlCUVU0c1IwRkJaMElzUzBGQlN5eExRVUZNTEVOQlFWY3NUVUZCVFN4UFFVRk9MRU5CUVROQ0xFTkJSR0U3WVVGQmFrSTdPenRCUVhCQ2QwTXNaMEpCZVVKd1F5eERRVUZETEV0QlFVc3NhMEpCUVV3c1JVRkJlVUk3UVVGRE1VSXNjMEpCUVUwc1VVRkJUaXhIUVVGcFFpd3dRa0ZCWlN4TlFVRk5MRTlCUVU0c1IwRkJaMElzVFVGQlRTeEpRVUZPTEVWQlFWa3NUMEZCTTBNc1EwRkJha0lzUTBGRU1FSTdZVUZCT1VJN096dEJRWHBDZDBNc1owSkJPRUp3UXl4TlFVRk5MRWxCUVU0c1MwRkJaU3hOUVVGTkxFOUJRVTRzUlVGQlpUdEJRVU01UWl3MlFrRkJZU3hKUVVGaUxFTkJSRGhDTzBGQlJUbENMSE5DUVVGTkxFbEJRVTRzUjBGQllTeE5RVUZOTEU5QlFVNDdPenRCUVVacFFpeHZRa0ZMZUVJc1owSkJRV2RDTEV0QlFVTXNRMEZCVFN4SlFVRk9MRWxCUVdNc1RVRkJUU3hKUVVGT0xFTkJRVmNzVTBGQldDeEhRVUYzUWl4TlFVRk5MRWxCUVU0c1EwRkJWeXhUUVVGWUxFTkJRWEZDTEUxQlFVMHNUMEZCVGl4RlFVRmxMRXRCUVhCRExFTkJRWFpETEVkQlFXOUdMRTFCUVUwc1QwRkJUanM3TzBGQlREVkZMRzlDUVZFeFFpeERRVUZETEUxQlFVMHNUVUZCVGl4RlFVRmpPMEZCUTJZc2VVSkJRVXNzUzBGQlRDeERRVUZYTEVkQlFWZ3NTVUZCYTBJc1lVRkJiRUlzUTBGRVpUdHBRa0ZCYmtJc1RVRkZUenRCUVVOSUxIbENRVUZMTEUxQlFVd3NRMEZCV1N4TlFVRk5MRTFCUVU0c1EwRkJXaXhEUVVFd1FpeFJRVUV4UWl4RFFVRnRReXhOUVVGTkxGRkJRVTRzUTBGQmJrTXNSMEZCY1VRc1lVRkJja1FzUTBGRVJ6dHBRa0ZHVUR0aFFWSktPMU5CT1VKS096dEJRVGhEUVN4bFFVRlBMRWxCUVVNc1EwRkJTeXhUUVVGTUxFZEJRV3RDTEVsQlFXNUNMRWRCUVRCQ0xGVkJRVEZDTEVOQmJFUTJRanM3T3pzN096dEJRWGhOZGtJc2NVSkJaMUZxUWl4eFEwRkJZenM3UVVGRlZpeGhRVUZMTEVsQlFVa3NTVUZCU1N4RFFVRktMRVZCUVU4c1NVRkJTU3hMUVVGTExHRkJRVXdzUlVGQmIwSXNSMEZCZUVNc1JVRkJOa003UVVGRGVrTXNaMEpCUVUwc1RVRkJUU3hMUVVGTExGVkJRVXdzUTBGQlowSXNRMEZCYUVJc1EwRkJUaXhEUVVSdFF6dEJRVVY2UXl4blFrRkJUU3hSUVVGUkxFdEJRVXNzVFVGQlRDeERRVUZaTEVkQlFWb3NRMEZCVWl4RFFVWnRRenM3UVVGSmVrTXNhMEpCUVUwc1QwRkJUaXhIUVVGblFpeE5RVUZOTEVsQlFVNHNRMEZCVnl4UFFVRllMRU5CUVcxQ0xFMUJRVTBzVVVGQlRpeEZRVUZuUWl4TlFVRk5MRkZCUVU0c1EwRkJia1FzUTBGS2VVTTdPMEZCVFhwRExHZENRVUZKTEV0QlFVc3NTMEZCVEN4RFFVRlhMRWRCUVZnc1RVRkJiMElzVFVGQlRTeFBRVUZPTEVWQlFXVTdRVUZEYmtNc2NVSkJRVXNzUzBGQlRDeERRVUZYTEVkQlFWZ3NTVUZCYTBJc1RVRkJUU3hQUVVGT0xFTkJSR2xDTzJGQlFYWkRPMU5CVGtvN096dEJRV3hSWVN4eFFrRTRVV3BDTEcxRFFVRjNRanRaUVVGaUxHMUNRVUZoTzFsQlFVNHNZVUZCVFRzN1FVRkRjRUlzV1VGQlNTeE5RVUZOTEVkQlFVY3NSMEZCU0N4RlFVRlJPMEZCUTJRc1pVRkJSeXhIUVVGSUxFTkJRVThzUzBGQlVDeEZRVVJqTzFOQlFXeENPenRCUVVsQkxGbEJRVWtzUzBGQlN5eFBRVUZNTEVWQlFXTTdRVUZEWkN4cFFrRkJTeXhQUVVGTUxFTkJRV0VzU1VGQllpeEZRVVJqTzFOQlFXeENPenM3UVVGdVVtRXNjVUpCZDFKcVFpeDVRa0ZCVVR0QlFVTktMREpDUVVGTkxFbEJRVTRzV1VGRVNUdEJRVVZLTEdWQlFVOHNTVUZCVUN4RFFVWkpPenM3UVVGNFVsTXNjVUpCTmxKcVFpd3lRa0ZCVXp0QlFVTk1MREpDUVVGTkxFdEJRVTRzV1VGRVN6dEJRVVZNTEdWQlFVOHNTVUZCVUN4RFFVWkxPenM3UVVFM1VsRXNjVUpCYTFOcVFpeDVRa0ZCVVR0QlFVTktMRmxCUVUwc1UwRkJVeXhMUVVGTExFMUJRVXdzUTBGRVdEdEJRVVZLTERKQ1FVRk5MRXRCUVU0c1dVRkdTVHM3UVVGSlNpeGhRVUZMTEVsQlFVa3NSMEZCU2l4SlFVRlhMRTFCUVdoQ0xFVkJRWGRDTzBGQlEzQkNMR2RDUVVGSkxFOUJRVThzWTBGQlVDeERRVUZ6UWl4SFFVRjBRaXhEUVVGS0xFVkJRV2RETzBGQlF6VkNMSFZDUVVGUExFZEJRVkFzUlVGQldTeEpRVUZhTEVkQlFXMUNMRTlCUVU4c1IwRkJVQ3hGUVVGWkxFMUJRVm9zUjBGQmNVSXNUMEZCVHl4SFFVRlFMRVZCUVZrc1QwRkJXaXhEUVVSYU8yRkJRV2hETzFOQlJFbzdPenM3T3pzN08wRkJkRk5oTEhGQ1FXdFVha0lzTmtOQlFXdENPMEZCUTJRc1pVRkJUenRCUVVOSUxIRkNRVUZUTEVOQlFWUTdRVUZEUVN4elFrRkJWU3hEUVVGV08wRkJRMEVzYlVKQlFVOHNTMEZCVUR0VFFVaEtMRU5CUkdNN096czdPenM3T3p0QlFXeFVSQ3h4UWtGblZXcENMSEZFUVVGelFqdEJRVU5zUWl4bFFVRlBMRmxCUVZBc1EwRkVhMEk3T3p0WFFXaFZUQ0lzSW1acGJHVWlPaUpCWTNScGIyNHVhbk1pTENKemIzVnlZMlZTYjI5MElqb2lMMVZ6WlhKekwwMWhkSFF2VTJsMFpYTXZjRzl3Ylc5MGFXOXVJaXdpYzI5MWNtTmxjME52Ym5SbGJuUWlPbHNpYVcxd2IzSjBJRkJ5YjJObGMzTWdabkp2YlNBbkxpNHZjSEp2WTJWemN5OVFjbTlqWlhOekp6dGNibWx0Y0c5eWRDQjdJSE53WldWa1VHVnlVMlZqYjI1a0lIMGdabkp2YlNBbkxpNHZhVzVqTDJOaGJHTW5PMXh1YVcxd2IzSjBJSHNnYVhOT2RXMHNJR2x6VDJKcUxDQnBjMU4wY21sdVp5QjlJR1p5YjIwZ0p5NHVMMmx1WXk5MWRHbHNjeWM3WEc1cGJYQnZjblFnWW1sdVpFRmtZWEIwWlhJZ1puSnZiU0FuTGk0dmFXNWpMMkpwYm1RdFlXUmhjSFJsY2ljN1hHNXBiWEJ2Y25RZ1kyOXNiM0pVZVhCbElHWnliMjBnSnk0dUwzWmhiSFZsTFhSNWNHVnpMMk52Ykc5eUp6dGNibWx0Y0c5eWRDQmpiMjF3YkdWNFZIbHdaU0JtY205dElDY3VMaTkyWVd4MVpTMTBlWEJsY3k5amIyMXdiR1Y0Snp0Y2JtbHRjRzl5ZENCMWJtbDBWSGx3WlNCbWNtOXRJQ2N1TGk5MllXeDFaUzEwZVhCbGN5OTFibWwwSnp0Y2JseHVZMjl1YzNRZ1JFVkdRVlZNVkY5UVVrOVFJRDBnSjJOMWNuSmxiblFuTzF4dVkyOXVjM1FnVGxWTlJWSkpRMEZNWDFaQlRGVkZVeUE5SUZ0RVJVWkJWVXhVWDFCU1QxQXNJQ2RtY205dEp5d2dKM1J2Snl3Z0ozQnlaWFluTENBbmRtVnNiMk5wZEhrblhUdGNibU52Ym5OMElFNVZUVjlPVlUxRlVrbERRVXhmVmtGTVZVVlRJRDBnVGxWTlJWSkpRMEZNWDFaQlRGVkZVeTVzWlc1bmRHZzdYRzVjYm1WNGNHOXlkQ0JrWldaaGRXeDBJR05zWVhOeklFRmpkR2x2YmlCbGVIUmxibVJ6SUZCeWIyTmxjM01nZTF4dUlDQWdJR052Ym5OMGNuVmpkRzl5S0hCeWIzQnpLU0I3WEc0Z0lDQWdJQ0FnSUhCeWIzQnpMbk4wWVhSbElEMGdlMzA3WEc0Z0lDQWdJQ0FnSUhCeWIzQnpMblpoYkhWbFMyVjVjeUE5SUZ0ZE8xeHVJQ0FnSUNBZ0lDQndjbTl3Y3k1d1lYSmxiblJMWlhseklEMGdXMTA3WEc0Z0lDQWdJQ0FnSUhOMWNHVnlLSEJ5YjNCektUdGNiaUFnSUNCOVhHNWNiaUFnSUNBdktseHVJQ0FnSUNBZ0lDQWpJRk5sZENCQlkzUnBiMjRnY0hKdmNHVnlkR2xsYzF4dUlDQWdJQ0FnSUNBakl5QlRaWFFnZFhObGNpMWtaV1pwYm1Wa0lFRmpkR2x2YmlCd2NtOXdaWEowYVdWelhHNWNiaUFnSUNBZ0lDQWdRSEJoY21GdElGdHZZbXBsWTNSZFhHNGdJQ0FnSUNBZ0lFQnlaWFIxY200Z1cwRmpkR2x2YmwxY2JpQWdJQ0FxTDF4dUlDQWdJSE5sZENod2NtOXdjeUE5SUh0OUtTQjdYRzRnSUNBZ0lDQWdJR052Ym5OMElIc2dkbUZzZFdWekxDQnZiaXdnTGk0dWNISnZjSE5VYjFObGRDQjlJRDBnY0hKdmNITTdYRzRnSUNBZ0lDQWdJR052Ym5OMElHTjFjbkpsYm5SV1lXeDFaWE1nUFNCMGFHbHpMblpoYkhWbGN5QTlJSFJvYVhNdWRtRnNkV1Z6SUh4OElIdDlPMXh1SUNBZ0lDQWdJQ0JqYjI1emRDQmtaV1poZFd4MFZtRnNkV1VnUFNCMGFHbHpMbWRsZEVSbFptRjFiSFJXWVd4MVpTZ3BPMXh1SUNBZ0lDQWdJQ0JqYjI1emRDQnBibWhsY21sMFlXSnNaU0E5SUh0OU8xeHVYRzRnSUNBZ0lDQWdJQzh2SURFcElGTmxkQ0J1YjI0dFkyOXVjM1Z0WldRZ2NISnZjR1Z5ZEdsbGMxeHVJQ0FnSUNBZ0lDQnpkWEJsY2k1elpYUW9jSEp2Y0hOVWIxTmxkQ2s3WEc1Y2JpQWdJQ0FnSUNBZ0x5OGdNaWtnUW1sdVpDQmdiMjVnSUhSdklHRnVJR0ZrWVhCMFpYSXNJR2xtSUc1dmRDQmhiSEpsWVdSNVhHNGdJQ0FnSUNBZ0lHbG1JQ2h2YmlrZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnTHk4Z1JIVmphM1I1Y0dsemFDQmphR1ZqYXlCbWIzSWdRV1JoY0hSbGNseHVJQ0FnSUNBZ0lDQWdJQ0FnZEdocGN5NXZiaUE5SUNnaGIyNHVjMlYwZEdWeUtTQS9JR0pwYm1SQlpHRndkR1Z5S0c5dUtTQTZJRzl1TzF4dUlDQWdJQ0FnSUNCOVhHNWNiaUFnSUNBZ0lDQWdMeThnTXlrZ1VISnBiV1VnWVc0Z2IySnFaV04wSUhSdklHbHVhR1Z5YVhRZ1puSnZiU3dnZDJsMGFDQnZibXg1SUdCMllXeDFaV0FnY0hKdmNHVnlkR2xsYzF4dUlDQWdJQ0FnSUNCbWIzSWdLR3hsZENCclpYa2dhVzRnWkdWbVlYVnNkRlpoYkhWbEtTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNCcFppQW9aR1ZtWVhWc2RGWmhiSFZsTG1oaGMwOTNibEJ5YjNCbGNuUjVLR3RsZVNrZ0ppWWdjSEp2Y0hOVWIxTmxkQzVvWVhOUGQyNVFjbTl3WlhKMGVTaHJaWGtwS1NCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2FXNW9aWEpwZEdGaWJHVmJhMlY1WFNBOUlIQnliM0J6Vkc5VFpYUmJhMlY1WFR0Y2JpQWdJQ0FnSUNBZ0lDQWdJSDFjYmlBZ0lDQWdJQ0FnZlZ4dVhHNGdJQ0FnSUNBZ0lDOHZJRFFwSUZWd1pHRjBaU0JsZUdsemRHbHVaeUIyWVd4MVpYTWdkMmwwYUNCcGJtaGxjbWwwWVdKc1pTQndjbTl3WlhKMGFXVnpYRzRnSUNBZ0lDQWdJR1p2Y2lBb2JHVjBJR3RsZVNCcGJpQmpkWEp5Wlc1MFZtRnNkV1Z6S1NCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0F2THlCRmVHTnNkV1JsSUhaaGNtbGhZbXhsY3lCMGJ5QmlaU0J6WlhRc0lHRnpJSGRsSjJ4c0lHUmxZV3dnZDJsMGFDQjBhRzl6WlNCelpYQmxjbUYwWld4NVhHNGdJQ0FnSUNBZ0lDQWdJQ0JwWmlBb1kzVnljbVZ1ZEZaaGJIVmxjeTVvWVhOUGQyNVFjbTl3WlhKMGVTaHJaWGtwSUNZbUlDaDJZV3gxWlhNZ0ppWWdJWFpoYkhWbGN5NW9ZWE5QZDI1UWNtOXdaWEowZVNoclpYa3BLU2tnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUdOMWNuSmxiblJXWVd4MVpYTmJhMlY1WFNBOUlIc2dMaTR1WTNWeWNtVnVkRlpoYkhWbGMxdHJaWGxkTENBdUxpNXBibWhsY21sMFlXSnNaU0I5TzF4dUlDQWdJQ0FnSUNBZ0lDQWdmVnh1SUNBZ0lDQWdJQ0I5WEc1Y2JpQWdJQ0FnSUNBZ0x5OGdOU2tnVlhCa1lYUmxYRzRnSUNBZ0lDQWdJR2xtSUNoMllXeDFaWE1wSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJSFJvYVhNdWMyVjBWbUZzZFdWektIWmhiSFZsY3l3Z2FXNW9aWEpwZEdGaWJHVXBPeUFnSUZ4dUlDQWdJQ0FnSUNCOVhHNWNiaUFnSUNBZ0lDQWdjbVYwZFhKdUlIUm9hWE03WEc0Z0lDQWdmVnh1WEc0Z0lDQWdjMlYwVm1Gc2RXVnpLSFpoYkhWbGN5d2dhVzVvWlhKcGRFWnliMjBwSUh0Y2JpQWdJQ0FnSUNBZ1kyOXVjM1FnWTNWeWNtVnVkRlpoYkhWbGN5QTlJSFJvYVhNdWRtRnNkV1Z6TzF4dUlDQWdJQ0FnSUNCamIyNXpkQ0JrWldaaGRXeDBWbUZzZFdVZ1BTQjBhR2x6TG1kbGRFUmxabUYxYkhSV1lXeDFaU2dwTzF4dUlDQWdJQ0FnSUNCamIyNXpkQ0JrWldaaGRXeDBWbUZzZFdWUWNtOXdJRDBnZEdocGN5NW5aWFJFWldaaGRXeDBWbUZzZFdWUWNtOXdLQ2s3WEc1Y2JpQWdJQ0FnSUNBZ0x5OGdNaWtnVEc5dmNDQnZkbVZ5SUdWMlpYSjVJR2x1WTI5dGFXNW5JR0IyWVd4MVpXQWdZVzVrSUhObGRGeHVJQ0FnSUNBZ0lDQm1iM0lnS0d4bGRDQnJaWGtnYVc0Z2RtRnNkV1Z6S1NCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0JwWmlBb2RtRnNkV1Z6TG1oaGMwOTNibEJ5YjNCbGNuUjVLR3RsZVNrcElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQnNaWFFnZG1Gc2RXVWdQU0I3ZlR0Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCc1pYUWdZMmhwYkdSeVpXNGdQU0I3ZlR0Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCc1pYUWdhR0Z6UTJocGJHUnlaVzRnUFNCbVlXeHpaVHRjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0JzWlhRZ1ltRnpaU0E5SUdOMWNuSmxiblJXWVd4MVpYTmJhMlY1WFNBL0lHTjFjbkpsYm5SV1lXeDFaWE5iYTJWNVhTQTZJR1JsWm1GMWJIUldZV3gxWlR0Y2JseHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDOHZJRWxtSUhaaGJIVmxjeUJ2Y3lCaGJpQnZZbXBsWTNRc0lIVnpaU0JwZENCa2FYSmxZM1JzZVZ4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUdsbUlDaHBjMDlpYWloMllXeDFaWE5iYTJWNVhTa3BJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2RtRnNkV1VnUFNCMllXeDFaWE5iYTJWNVhUdGNibHh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQzh2SUU5U0lITmxkQ0IwYnlCaElIUm9aU0JrWldaaGRXeDBJSFpoYkhWbElIQnliM0JsY25SNUlHOW1JR0VnWW14aGJtc2diMkpxWldOMFhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2ZTQmxiSE5sSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdkbUZzZFdWYlpHVm1ZWFZzZEZaaGJIVmxVSEp2Y0YwZ1BTQjJZV3gxWlhOYmEyVjVYVHRjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0I5WEc1Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCc1pYUWdibVYzVm1Gc2RXVWdQU0I3SUM0dUxtSmhjMlVzSUM0dUxtbHVhR1Z5YVhSR2NtOXRMQ0F1TGk1MllXeDFaU0I5TzF4dVhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0x5cGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnVkU5RVR6b2dSMlYwSUdOMWNuSmxiblFnZG1Gc2RXVWdLeUJ6WlhRZ1lHWnliMjFnWEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lHbG1JQ2h1WlhkV1lXeDFaUzVtY205dElDRTlQU0IxYm1SbFptbHVaV1FwSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUc1bGQxWmhiSFZsTG1OMWNuSmxiblFnUFNCdVpYZFdZV3gxWlM1bWNtOXRPMXh1WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lIMGdaV3h6WlNCcFppQW9ibVYzVm1Gc2RXVXVZM1Z5Y21WdWRDQTlQVDBnZFc1a1pXWnBibVZrSUNZbUlIUm9hWE11YjI0cElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lHNWxkMVpoYkhWbExtTjFjbkpsYm5RZ1BTQjBhR2x6TG05dUxtZGxkQ2hyWlhrcElIeDhJREE3WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lIMWNibHh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCcFppQW9ibVYzVm1Gc2RXVXVabkp2YlNBOVBUMGdkVzVrWldacGJtVmtLU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0J1WlhkV1lXeDFaUzVtY205dElEMGdibVYzVm1Gc2RXVXVZM1Z5Y21WdWREdGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnZlZ4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNvdlhHNWNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQXZMeUJKWmlCdmRYSWdRV1JoY0hSbGNpQm9ZWE1nWVNCZ1oyVjBWbUZzZFdWVWVYQmxZQ0JtZFc1amRHbHZiaXdnZEhKNUlIUnZJR2RsZENCaElHQjBlWEJsWUNCM2FYUm9JSFJvWlNCMllXeDFaU0JyWlhsY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCcFppQW9JVzVsZDFaaGJIVmxMblI1Y0dVZ0ppWWdkR2hwY3k1dmJpQW1KaUIwYUdsekxtOXVMbWRsZEZaaGJIVmxWSGx3WlNrZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0J1WlhkV1lXeDFaUzUwZVhCbElEMGdkR2hwY3k1dmJpNW5aWFJXWVd4MVpWUjVjR1VvYTJWNUtUdGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQjlYRzVjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0F2THlCaktTQk1iMjl3SUhSb2NtOTFaMmdnWVd4c0lHNTFiV1Z5YVdOaGJDQndjbTl3WlhKMGVTQjBlWEJsYzF4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUdadmNpQW9iR1YwSUdrZ1BTQXdPeUJwSUR3Z1RsVk5YMDVWVFVWU1NVTkJURjlXUVV4VlJWTTdJR2tyS3lrZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0JqYjI1emRDQndjbTl3VG1GdFpTQTlJRTVWVFVWU1NVTkJURjlXUVV4VlJWTmJhVjA3WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lHTnZibk4wSUhaaGJIVmxVSEp2Y0NBOUlHNWxkMVpoYkhWbFczQnliM0JPWVcxbFhUdGNibHh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBdkx5QkpaaUIzWlNCb1lYWmxJSFJvYVhNZ2EybHVaQ0J2WmlCd2NtOXdaWEowZVN3Z2NISnZZMlZ6YzF4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQnBaaUFvZG1Gc2RXVlFjbTl3SUNFOVBTQjFibVJsWm1sdVpXUXBJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQzh2SUVsbUlIZGxJR1J2YmlkMElHaGhkbVVnWVNCMGVYQmxJSE5sZENCMGJ5QjBhR2x6SUhaaGJIVmxMQ0JtYVc1a0lHOXVaU0FvZFc1c1pYTnpJR2wwSjNNZ1lTQnlZWGNnYm5WdFltVnlLVnh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdhV1lnS0NGdVpYZFdZV3gxWlM1MGVYQmxJQ1ltSUdselUzUnlhVzVuS0haaGJIVmxVSEp2Y0NrcElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0JwWmlBb2RXNXBkRlI1Y0dVdWRHVnpkQ2gyWVd4MVpWQnliM0FwS1NCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUc1bGQxWmhiSFZsTG5SNWNHVWdQU0IxYm1sMFZIbHdaVHRjYmx4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lIMGdaV3h6WlNCcFppQW9ZMjlzYjNKVWVYQmxMblJsYzNRb2RtRnNkV1ZRY205d0tTa2dlMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQnVaWGRXWVd4MVpTNTBlWEJsSUQwZ1kyOXNiM0pVZVhCbE8xeHVYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnZlNCbGJITmxJR2xtSUNoamIyMXdiR1Y0Vkhsd1pTNTBaWE4wS0haaGJIVmxVSEp2Y0NrcElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2JtVjNWbUZzZFdVdWRIbHdaU0E5SUdOdmJYQnNaWGhVZVhCbE8xeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJSDFjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJSDFjYmx4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnYVdZZ0tHNWxkMVpoYkhWbExuUjVjR1VwSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQXZMeUJKWmlCM1pTZHlaU0JuYjJsdVp5QjBieUJ6Y0d4cGRDQjBhR2x6SUhaaGJIVmxJR2x1ZEc4Z1kyaHBiR1FnZG1Gc2RXVnpYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnYVdZZ0tHNWxkMVpoYkhWbExuUjVjR1V1YUdGelQzZHVVSEp2Y0dWeWRIa29KM053YkdsMEp5a3BJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdZMjl1YzNRZ2MzQnNhWFJRY205d0lEMGdibVYzVm1Gc2RXVXVkSGx3WlM1emNHeHBkQ2gyWVd4MVpWQnliM0FwTzF4dVhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUdadmNpQW9iR1YwSUhOd2JHbDBTMlY1SUdsdUlITndiR2wwVUhKdmNDa2dlMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnYVdZZ0tITndiR2wwVUhKdmNDNW9ZWE5QZDI1UWNtOXdaWEowZVNoemNHeHBkRXRsZVNrcElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCamIyNXpkQ0JqYjIxaWFXNWxaRXRsZVNBOUlHdGxlU0FySUhOd2JHbDBTMlY1TzF4dVhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnYVdZZ0tDRmphR2xzWkhKbGJsdGpiMjFpYVc1bFpFdGxlVjBwSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ1kyOXVjM1FnWkdWbVlYVnNkRlpoYkhWbElEMGdLRzVsZDFaaGJIVmxMblI1Y0dVdVpHVm1ZWFZzZEZCeWIzQnpJQ1ltSUc1bGQxWmhiSFZsTG5SNWNHVXVaR1ZtWVhWc2RGQnliM0J6VzNOd2JHbDBTMlY1WFNrZ1B5QnVaWGRXWVd4MVpTNTBlWEJsTG1SbFptRjFiSFJRY205d2MxdHpjR3hwZEV0bGVWMGdPaUI3ZlR0Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ1kyaHBiR1J5Wlc1YlkyOXRZbWx1WldSTFpYbGRJRDBnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdMaTR1Ym1WM1ZtRnNkV1VzWEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQXVMaTVrWldaaGRXeDBWbUZzZFdVc1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0J3WVhKbGJuUTZJR3RsZVN4Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJR05vYVd4a1MyVjVPaUJ6Y0d4cGRFdGxlU3hjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lIUjVjR1U2SUhWdVpHVm1hVzVsWkZ4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCOU8xeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUgxY2JseHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUdOb2FXeGtjbVZ1VzJOdmJXSnBibVZrUzJWNVhWdHdjbTl3VG1GdFpWMGdQU0J6Y0d4cGRGQnliM0JiYzNCc2FYUkxaWGxkTzF4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2ZWeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCOVhHNWNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0x5OGdTV1lnZEdocGN5Qm9ZWE1nWVNCZ2RHVnRjR3hoZEdWZ0lHWjFibU4wYVc5dUxDQm5aVzVsY21GMFpWeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCcFppQW9JVzVsZDFaaGJIVmxMblJsYlhCc1lYUmxJQ1ltSUc1bGQxWmhiSFZsTG5SNWNHVXVkR1Z0Y0d4aGRHVXBJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUc1bGQxWmhiSFZsTG5SbGJYQnNZWFJsSUQwZ2JtVjNWbUZzZFdVdWRIbHdaUzUwWlcxd2JHRjBaU2h1WlhkV1lXeDFaVnR3Y205d1RtRnRaVjBwTzF4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0I5WEc1Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnYUdGelEyaHBiR1J5Wlc0Z1BTQjBjblZsTzF4dVhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdmU0JsYkhObElHbG1JQ2h1WlhkV1lXeDFaUzUwZVhCbExtUmxabUYxYkhSUWNtOXdjeWtnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0J1WlhkV1lXeDFaU0E5SUhzZ0xpNHVibVYzVm1Gc2RXVXNJQzR1TG01bGQxWmhiSFZsTG5SNWNHVXVaR1ZtWVhWc2RGQnliM0J6SUgwN1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdmVnh1WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2FXWWdLRzVsZDFaaGJIVmxMblI1Y0dVdWNHRnljMlVwSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnYm1WM1ZtRnNkV1ZiY0hKdmNFNWhiV1ZkSUQwZ2JtVjNWbUZzZFdVdWRIbHdaUzV3WVhKelpTaHVaWGRXWVd4MVpWdHdjbTl3VG1GdFpWMHNJRzVsZDFaaGJIVmxLVHRjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCOVhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCOVhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJSDFjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0I5SUM4dklFVnVaQ0J1ZFcxbGNtbGpZV3dnY0hKdmNHVnlkSGtnYVhSbGNtRjBhVzl1WEc1Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBdkx5QlRaWFFnWUhCeVpYWmdJSFJ2SUdCamRYSnlaVzUwWUNCcFppQnBkQ0JwYzI0bmRDQmhiSEpsWVdSNUlHUmxabWx1WldSY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCcFppQW9ibVYzVm1Gc2RXVXVjSEpsZGlBOVBUMGdkVzVrWldacGJtVmtLU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lHNWxkMVpoYkhWbExuQnlaWFlnUFNCdVpYZFdZV3gxWlM1amRYSnlaVzUwTzF4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUgxY2JseHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lHTjFjbkpsYm5SV1lXeDFaWE5iYTJWNVhTQTlJRzVsZDFaaGJIVmxPMXh1WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnTHk4Z1NXWWdkR2hwY3lCMllXeDFaU0JrYjJWemJpZDBJR2hoZG1VZ1kyaHBiR1J5Wlc0c0lHRmtaQ0IwYnlCMllXeDFaVXRsZVhOY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCcFppQW9JV2hoYzBOb2FXeGtjbVZ1S1NCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJR2xtSUNoMGFHbHpMblpoYkhWbFMyVjVjeTVwYm1SbGVFOW1LR3RsZVNrZ1BUMDlJQzB4S1NCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCMGFHbHpMblpoYkhWbFMyVjVjeTV3ZFhOb0tHdGxlU2s3WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lIMWNibHh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQzh2SUU5eUlHRmtaQ0IwYnlCd1lYSmxiblJMWlhselhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2ZTQmxiSE5sSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdibVYzVm1Gc2RXVXVZMmhwYkdSeVpXNGdQU0J1WlhkV1lXeDFaUzVqYUdsc1pISmxiaUI4ZkNCN2ZUdGNibHh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCcFppQW9kR2hwY3k1d1lYSmxiblJMWlhsekxtbHVaR1Y0VDJZb2EyVjVLU0E5UFQwZ0xURXBJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJSFJvYVhNdWNHRnlaVzUwUzJWNWN5NXdkWE5vS0d0bGVTazdYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUgxY2JseHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0IwYUdsekxuTmxkRlpoYkhWbGN5aGphR2xzWkhKbGJpazdYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdmVnh1SUNBZ0lDQWdJQ0FnSUNBZ2ZWeHVJQ0FnSUNBZ0lDQjlJQzh2SUVWdVpDQjJZV3gxWlNCcGRHVnlZWFJwYjI1Y2JseHVJQ0FnSUNBZ0lDQXZMeUF6S1NCUWNtVmpiMjF3ZFhSbElIWmhiSFZsSUd0bGVTQmhibVFnY0dGeVpXNTBJR3RsZVNCc1pXNW5kR2dnZEc4Z2NISmxkbVZ1ZENCd1pYSXRabkpoYldVZ2JXVmhjM1Z5WlcxbGJuUmNiaUFnSUNBZ0lDQWdkR2hwY3k1dWRXMVdZV3gxWlV0bGVYTWdQU0IwYUdsekxuWmhiSFZsUzJWNWN5NXNaVzVuZEdnN1hHNGdJQ0FnSUNBZ0lIUm9hWE11Ym5WdFVHRnlaVzUwUzJWNWN5QTlJSFJvYVhNdWNHRnlaVzUwUzJWNWN5NXNaVzVuZEdnN1hHNWNiaUFnSUNBZ0lDQWdjbVYwZFhKdUlIUm9hWE03WEc1Y2JpQWdJQ0I5WEc1Y2JpQWdJQ0F2S2x4dUlDQWdJQ0FnSUNCRVpXTnBaR1VnZDJobGRHaGxjaUIwYUdseklFRmpkR2x2YmlCM2FXeHNJSEpsYm1SbGNpQnZiaUJ1WlhoMElHWnlZVzFsWEc1Y2JpQWdJQ0FnSUNBZ1FIQmhjbUZ0SUZ0QlkzUnBiMjVkWEc0Z0lDQWdJQ0FnSUVCd1lYSmhiU0JiYm5WdFltVnlYVnh1SUNBZ0lDQWdJQ0JBY0dGeVlXMGdXMjUxYldKbGNsMWNiaUFnSUNBZ0lDQWdRSEpsZEhWeWJpQmJZbTl2YkdWaGJsMDZJRkpsZEhWeWJpQjBjblZsSUhSdklISmxibVJsY2x4dUlDQWdJQ292WEc0Z0lDQWdkMmxzYkZKbGJtUmxjaWhoWTNScGIyNHNJR1p5WVcxbFUzUmhiWEFzSUdWc1lYQnpaV1FwSUh0Y2JpQWdJQ0FnSUNBZ2JHVjBJR2hoYzBOb1lXNW5aV1FnUFNCbVlXeHpaVHRjYmx4dUlDQWdJQ0FnSUNBdkx5QkRhR1ZqYXlCcFppQmlZWE5sSUhaaGJIVmxjeUJvWVhabElIVndaR0YwWldRZ1hHNGdJQ0FnSUNBZ0lHWnZjaUFvYkdWMElHa2dQU0F3T3lCcElEd2dkR2hwY3k1dWRXMVdZV3gxWlV0bGVYTTdJR2tyS3lrZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnWTI5dWMzUWdhMlY1SUQwZ2RHaHBjeTUyWVd4MVpVdGxlWE5iYVYwN1hHNGdJQ0FnSUNBZ0lDQWdJQ0JqYjI1emRDQjJZV3gxWlNBOUlIUm9hWE11ZG1Gc2RXVnpXMnRsZVYwN1hHNWNiaUFnSUNBZ0lDQWdJQ0FnSUM4dklGSjFiaUIwY21GdWMyWnZjbTBnWm5WdVkzUnBiMjRnS0dsbUlIQnlaWE5sYm5RcFhHNGdJQ0FnSUNBZ0lDQWdJQ0JwWmlBb2RtRnNkV1V1ZEhKaGJuTm1iM0p0S1NCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2RtRnNkV1V1WTNWeWNtVnVkQ0E5SUhaaGJIVmxMblJ5WVc1elptOXliU2gyWVd4MVpTNWpkWEp5Wlc1MExDQnJaWGtzSUhSb2FYTXBPMXh1SUNBZ0lDQWdJQ0FnSUNBZ2ZWeHVYRzRnSUNBZ0lDQWdJQ0FnSUNBdkx5QkRZWEFnYldsdWFXMTFiVnh1SUNBZ0lDQWdJQ0FnSUNBZ2FXWWdLR2x6VG5WdEtIWmhiSFZsTG0xcGJpa3BJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0IyWVd4MVpTNWpkWEp5Wlc1MElEMGdUV0YwYUM1dFlYZ29kbUZzZFdVdVkzVnljbVZ1ZEN3Z2RtRnNkV1V1YldsdUtUdGNiaUFnSUNBZ0lDQWdJQ0FnSUgxY2JseHVJQ0FnSUNBZ0lDQWdJQ0FnTHk4Z1EyRndJRzFoZUdsdGRXMWNiaUFnSUNBZ0lDQWdJQ0FnSUdsbUlDaHBjMDUxYlNoMllXeDFaUzV0WVhncEtTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdkbUZzZFdVdVkzVnljbVZ1ZENBOUlFMWhkR2d1YldsdUtIWmhiSFZsTG1OMWNuSmxiblFzSUhaaGJIVmxMbTFoZUNrN1hHNGdJQ0FnSUNBZ0lDQWdJQ0I5WEc1Y2JpQWdJQ0FnSUNBZ0lDQWdJQzh2SUZKdmRXNWtJRzUxYldKbGNseHVJQ0FnSUNBZ0lDQWdJQ0FnYVdZZ0tIWmhiSFZsTG5KdmRXNWtLU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnZG1Gc2RXVXVZM1Z5Y21WdWRDQTlJRTFoZEdndWNtOTFibVFvZG1Gc2RXVXVZM1Z5Y21WdWRDazdYRzRnSUNBZ0lDQWdJQ0FnSUNCOVhHNWNiaUFnSUNBZ0lDQWdJQ0FnSUM4dklGVndaR0YwWlNCMlpXeHZZMmwwZVZ4dUlDQWdJQ0FnSUNBZ0lDQWdhV1lnS0NGMGFHbHpMbU5oYkdOMWJHRjBaWE5XWld4dlkybDBlU2tnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUhaaGJIVmxMblpsYkc5amFYUjVJRDBnYzNCbFpXUlFaWEpUWldOdmJtUW9kbUZzZFdVdVkzVnljbVZ1ZENBdElIWmhiSFZsTG5CeVpYWXNJR1ZzWVhCelpXUXBPMXh1SUNBZ0lDQWdJQ0FnSUNBZ2ZWeHVYRzRnSUNBZ0lDQWdJQ0FnSUNBdkx5QkpaaUIwYUdseklIWmhiSFZsSUdoaGN5QmphR0Z1WjJWa1hHNGdJQ0FnSUNBZ0lDQWdJQ0JwWmlBb2RtRnNkV1V1Y0hKbGRpQWhQVDBnZG1Gc2RXVXVZM1Z5Y21WdWRDa2dlMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJR2hoYzBOb1lXNW5aV1FnUFNCMGNuVmxPMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJSFpoYkhWbExuQnlaWFlnUFNCMllXeDFaUzVqZFhKeVpXNTBPMXh1WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnTHk4Z1FYQndaVzVrSUhWdWFYUmNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQmpiMjV6ZENCMllXeDFaVVp2Y2xOMFlYUmxJRDBnS0haaGJIVmxMblI1Y0dVZ0ppWWdkbUZzZFdVdWRIbHdaUzV6WlhKcFlXeHBlbVVwSUQ4Z2RtRnNkV1V1ZEhsd1pTNXpaWEpwWVd4cGVtVW9kbUZzZFdVdVkzVnljbVZ1ZEN3Z2RtRnNkV1VwSURvZ2RtRnNkV1V1WTNWeWNtVnVkRHRjYmx4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUM4dklFRmtaQ0IwYnlCemRHRjBaU0JwWmlCMGFHbHpJR2x6SUc1dmRDQmhJR05vYVd4a0lIWmhkV1ZjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0JwWmlBb0lYWmhiSFZsTG5CaGNtVnVkQ2tnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQjBhR2x6TG5OMFlYUmxXMnRsZVYwZ1BTQjJZV3gxWlVadmNsTjBZWFJsTzF4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUgwZ1pXeHpaU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lIUm9hWE11ZG1Gc2RXVnpXM1poYkhWbExuQmhjbVZ1ZEYwdVkyaHBiR1J5Wlc1YmRtRnNkV1V1WTJocGJHUkxaWGxkSUQwZ2RtRnNkV1ZHYjNKVGRHRjBaVHRjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0I5WEc0Z0lDQWdJQ0FnSUNBZ0lDQjlYRzRnSUNBZ0lDQWdJSDFjYmx4dUlDQWdJQ0FnSUNCeVpYUjFjbTRnS0hSb2FYTXViMjVEYkdWaGJuVndLU0EvSUhSeWRXVWdPaUJvWVhORGFHRnVaMlZrTzF4dUlDQWdJSDFjYmx4dUlDQWdJQzhxWEc0Z0lDQWdJQ0FnSUVsbUlIZGxJR0Z5WlNCeVpXNWtaWEpwYm1jc0lISmxZMjl0WW1sdVpTQndZWEpsYm5RZ2RtRnNkV1Z6SUdacGNuTjBYRzRnSUNBZ0tpOWNiaUFnSUNCdmJsQnlaVkpsYm1SbGNpZ3BJSHRjYmlBZ0lDQWdJQ0FnTHk4Z1ZYQmtZWFJsSUhCaGNtVnVkQ0IyWVd4MVpYTmNiaUFnSUNBZ0lDQWdabTl5SUNoc1pYUWdhU0E5SURBN0lHa2dQQ0IwYUdsekxtNTFiVkJoY21WdWRFdGxlWE03SUdrckt5a2dlMXh1SUNBZ0lDQWdJQ0FnSUNBZ1kyOXVjM1FnYTJWNUlEMGdkR2hwY3k1d1lYSmxiblJMWlhselcybGRPMXh1SUNBZ0lDQWdJQ0FnSUNBZ1kyOXVjM1FnZG1Gc2RXVWdQU0IwYUdsekxuWmhiSFZsYzF0clpYbGRPMXh1WEc0Z0lDQWdJQ0FnSUNBZ0lDQjJZV3gxWlM1amRYSnlaVzUwSUQwZ2RtRnNkV1V1ZEhsd1pTNWpiMjFpYVc1bEtIWmhiSFZsTG1Ob2FXeGtjbVZ1TENCMllXeDFaUzUwWlcxd2JHRjBaU2s3WEc1Y2JpQWdJQ0FnSUNBZ0lDQWdJR2xtSUNoMGFHbHpMbk4wWVhSbFcydGxlVjBnSVQwOUlIWmhiSFZsTG1OMWNuSmxiblFwSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCMGFHbHpMbk4wWVhSbFcydGxlVjBnUFNCMllXeDFaUzVqZFhKeVpXNTBPMXh1SUNBZ0lDQWdJQ0FnSUNBZ2ZWeHVJQ0FnSUNBZ0lDQjlYRzRnSUNBZ2ZWeHVYRzRnSUNBZ2IyNVNaVzVrWlhJb2V5QnpkR0YwWlN3Z2IyNGdmU2tnZTF4dUlDQWdJQ0FnSUNCcFppQW9iMjRnSmlZZ2IyNHVjMlYwS1NCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0J2Ymk1elpYUW9jM1JoZEdVcE8xeHVJQ0FnSUNBZ0lDQjlYRzVjYmlBZ0lDQWdJQ0FnYVdZZ0tIUm9hWE11YjI1R2NtRnRaU2tnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdkR2hwY3k1dmJrWnlZVzFsS0hSb2FYTXBPMXh1SUNBZ0lDQWdJQ0I5WEc0Z0lDQWdmVnh1WEc0Z0lDQWdjR0YxYzJVb0tTQjdYRzRnSUNBZ0lDQWdJSE4xY0dWeUxuTjBiM0FvS1R0Y2JpQWdJQ0FnSUNBZ2NtVjBkWEp1SUhSb2FYTTdYRzRnSUNBZ2ZWeHVYRzRnSUNBZ2NtVnpkVzFsS0NrZ2UxeHVJQ0FnSUNBZ0lDQnpkWEJsY2k1emRHRnlkQ2dwTzF4dUlDQWdJQ0FnSUNCeVpYUjFjbTRnZEdocGN6dGNiaUFnSUNCOVhHNWNiaUFnSUNCemRHRnlkQ2dwSUh0Y2JpQWdJQ0FnSUNBZ1kyOXVjM1FnZG1Gc2RXVnpJRDBnZEdocGN5NTJZV3gxWlhNN1hHNGdJQ0FnSUNBZ0lITjFjR1Z5TG5OMFlYSjBLQ2s3WEc1Y2JpQWdJQ0FnSUNBZ1ptOXlJQ2hzWlhRZ2EyVjVJR2x1SUhaaGJIVmxjeWtnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdhV1lnS0haaGJIVmxjeTVvWVhOUGQyNVFjbTl3WlhKMGVTaHJaWGtwS1NCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2RtRnNkV1Z6VzJ0bGVWMHVjSEpsZGlBOUlIWmhiSFZsYzF0clpYbGRMbTl5YVdkcGJpQTlJSFpoYkhWbGMxdHJaWGxkTG1OMWNuSmxiblE3WEc0Z0lDQWdJQ0FnSUNBZ0lDQjlYRzRnSUNBZ0lDQWdJSDFjYmlBZ0lDQjlYRzVjYmlBZ0lDQXZLbHh1SUNBZ0lDQWdJQ0FqSUVkbGRDQmtaV1poZFd4MElFRmpkR2x2YmlCMllXeDFaU0J3Y205d1pYSjBhV1Z6WEc1Y2JpQWdJQ0FnSUNBZ1FISmxkSFZ5YmlCYmIySnFaV04wWFZ4dUlDQWdJQ292WEc0Z0lDQWdaMlYwUkdWbVlYVnNkRlpoYkhWbEtDa2dlMXh1SUNBZ0lDQWdJQ0J5WlhSMWNtNGdlMXh1SUNBZ0lDQWdJQ0FnSUNBZ1kzVnljbVZ1ZERvZ01DeGNiaUFnSUNBZ0lDQWdJQ0FnSUhabGJHOWphWFI1T2lBd0xGeHVJQ0FnSUNBZ0lDQWdJQ0FnY205MWJtUTZJR1poYkhObFhHNGdJQ0FnSUNBZ0lIMDdYRzRnSUNBZ2ZWeHVYRzRnSUNBZ0x5cGNiaUFnSUNBZ0lDQWdJeUJIWlhRZ1pHVm1ZWFZzZENCQlkzUnBiMjRnZG1Gc2RXVWdjSEp2Y0dWeWRIa2dibUZ0WlZ4dUlDQWdJQ0FnSUNBakl5QlRaWFFnZEdocGN5QmdkbUZzZFdWZ0lIQnliM0JsY25SNUlIZG9aVzRnYzJWMElHRnpJSFpoYkhWbElHbHVjM1JsWVdRZ2IyWWdiMkpxWldOMFhHNWNiaUFnSUNBZ0lDQWdRSEpsZEhWeWJpQmJjM1J5YVc1blhWeHVJQ0FnSUNvdlhHNGdJQ0FnWjJWMFJHVm1ZWFZzZEZaaGJIVmxVSEp2Y0NncElIdGNiaUFnSUNBZ0lDQWdjbVYwZFhKdUlFUkZSa0ZWVEZSZlVGSlBVRHRjYmlBZ0lDQjlYRzU5WEc0aVhYMD1cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2FjdGlvbnMvQWN0aW9uLmpzXG4gKiogbW9kdWxlIGlkID0gNFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9O1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX0FjdGlvbjIgPSByZXF1aXJlKCcuLi9hY3Rpb25zL0FjdGlvbicpO1xuXG52YXIgX0FjdGlvbjMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9BY3Rpb24yKTtcblxudmFyIF9jYWxjID0gcmVxdWlyZSgnLi4vaW5jL2NhbGMnKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoIXNlbGYpIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBjYWxsICYmICh0eXBlb2YgY2FsbCA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSA/IGNhbGwgOiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90IFwiICsgdHlwZW9mIHN1cGVyQ2xhc3MpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIGVudW1lcmFibGU6IGZhbHNlLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIDogc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzczsgfVxuXG4vKlxuICAgIE1ldGhvZHMgYW5kIHByb3BlcnRpZXMgdG8gYWRkIHRvIGJvdW5kIEFjdGlvbnNcbiovXG52YXIgYm91bmRPblN0YXJ0ID0gZnVuY3Rpb24gKGFjdGlvbikge1xuICAgIHJldHVybiBhY3Rpb24uYWN0b3IuYWN0aXZhdGVBY3Rpb24oYWN0aW9uLmlkLCBhY3Rpb24pO1xufTtcbnZhciBib3VuZE9uU3RvcCA9IGZ1bmN0aW9uIChhY3Rpb24pIHtcbiAgICByZXR1cm4gYWN0aW9uLmFjdG9yLmRlYWN0aXZhdGVBY3Rpb24oYWN0aW9uLmlkKTtcbn07XG52YXIgYm91bmRQcm9wcyA9IGZ1bmN0aW9uIChhY3Rvcikge1xuICAgIHJldHVybiB7XG4gICAgICAgIGFjdG9yOiBhY3RvcixcbiAgICAgICAgaXNQcmlvcml0eTogdHJ1ZSxcbiAgICAgICAgb246IGFjdG9yLm9uLFxuICAgICAgICBfb25TdGFydDogYm91bmRPblN0YXJ0LFxuICAgICAgICBfb25TdG9wOiBib3VuZE9uU3RvcCxcbiAgICAgICAgb25SZW5kZXI6IHVuZGVmaW5lZFxuICAgIH07XG59O1xuXG52YXIgQWN0b3IgPSBmdW5jdGlvbiAoX0FjdGlvbikge1xuICAgIF9pbmhlcml0cyhBY3RvciwgX0FjdGlvbik7XG5cbiAgICBmdW5jdGlvbiBBY3RvcigpIHtcbiAgICAgICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIEFjdG9yKTtcblxuICAgICAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgICAgICAgYXJnc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBfdGhpcyA9IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIF9BY3Rpb24uY2FsbC5hcHBseShfQWN0aW9uLCBbdGhpc10uY29uY2F0KGFyZ3MpKSk7XG5cbiAgICAgICAgX3RoaXMuYWN0aXZlQWN0aW9ucyA9IHt9O1xuICAgICAgICBfdGhpcy5udW1BY3RpdmVBY3Rpb25zID0gMDtcbiAgICAgICAgcmV0dXJuIF90aGlzO1xuICAgIH1cblxuICAgIEFjdG9yLnByb3RvdHlwZS5zZXQgPSBmdW5jdGlvbiBzZXQocHJvcHMsIGluc3RhbnQpIHtcbiAgICAgICAgaWYgKGluc3RhbnQgfHwgIXRoaXMucmVkdWNlcikge1xuICAgICAgICAgICAgX0FjdGlvbi5wcm90b3R5cGUuc2V0LmNhbGwodGhpcywgcHJvcHMpO1xuICAgICAgICAgICAgdGhpcy5vbmNlKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB2YXIgYWN0aW9uID0gdGhpcy5yZWR1Y2VyKHByb3BzKTtcbiAgICAgICAgICAgIGlmIChhY3Rpb24pIHtcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXJ0KGFjdGlvbik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgLypcbiAgICAgICAgQmluZCBBY3Rpb24gdG8gQWN0b3JcbiAgICAqL1xuXG4gICAgQWN0b3IucHJvdG90eXBlLmJpbmQgPSBmdW5jdGlvbiBiaW5kKGFjdGlvbikge1xuICAgICAgICB2YXIgaW5oZXJpdGVkQWN0aW9uID0gYWN0aW9uLmluaGVyaXQoKTtcbiAgICAgICAgdmFyIG5ld1ZhbHVlcyA9IHt9O1xuICAgICAgICB2YXIgaGFzTmV3VmFsdWVzID0gZmFsc2U7XG5cbiAgICAgICAgLy8gQ3JlYXRlIHZhbHVlcyBvbiBhY3RvciB0aGF0IGRvbid0IGV4aXN0XG4gICAgICAgIGZvciAodmFyIGtleSBpbiBpbmhlcml0ZWRBY3Rpb24udmFsdWVzKSB7XG4gICAgICAgICAgICBpZiAoaW5oZXJpdGVkQWN0aW9uLnZhbHVlcy5oYXNPd25Qcm9wZXJ0eShrZXkpICYmICF0aGlzLnZhbHVlcy5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgICAgICAgbmV3VmFsdWVzW2tleV0gPSBpbmhlcml0ZWRBY3Rpb24udmFsdWVzW2tleV07XG4gICAgICAgICAgICAgICAgaGFzTmV3VmFsdWVzID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChoYXNOZXdWYWx1ZXMpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0KHsgdmFsdWVzOiBuZXdWYWx1ZXMgfSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gaW5oZXJpdGVkQWN0aW9uLnNldChib3VuZFByb3BzKHRoaXMsIGluaGVyaXRlZEFjdGlvbikpO1xuICAgIH07XG5cbiAgICAvKlxuICAgICAgICBTdGFydCBBY3RvclxuICAgICAgICAgSWYgQWN0aW9uIGlzIHByb3ZpZGVkLCBiaW5kIGl0IHRvIHRoaXMgQWN0b3IgYW5kIHN0YXJ0XG4gICAgICAgICBAcGFyYW0gKG9wdGlvbmFsKSBbQWN0aW9uXVxuICAgICovXG5cbiAgICBBY3Rvci5wcm90b3R5cGUuc3RhcnQgPSBmdW5jdGlvbiBzdGFydChhY3Rpb24pIHtcbiAgICAgICAgX0FjdGlvbi5wcm90b3R5cGUuc3RhcnQuY2FsbCh0aGlzKTtcblxuICAgICAgICBpZiAoYWN0aW9uKSB7XG4gICAgICAgICAgICB2YXIgYm91bmRBY3Rpb24gPSB0aGlzLmJpbmQoYWN0aW9uKTtcbiAgICAgICAgICAgIGJvdW5kQWN0aW9uLnN0YXJ0KCk7XG5cbiAgICAgICAgICAgIHJldHVybiBib3VuZEFjdGlvbjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGZvciAodmFyIGtleSBpbiB0aGlzLmFjdGl2ZUFjdGlvbnMpIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5hY3RpdmVBY3Rpb25zLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIF9hY3Rpb24gPSB0aGlzLmFjdGl2ZUFjdGlvbnNba2V5XTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFfYWN0aW9uLmlzQWN0aXZlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBfYWN0aW9uLnN0YXJ0KCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xuXG4gICAgQWN0b3IucHJvdG90eXBlLnN0b3AgPSBmdW5jdGlvbiBzdG9wKCkge1xuICAgICAgICBfQWN0aW9uLnByb3RvdHlwZS5zdG9wLmNhbGwodGhpcyk7XG5cbiAgICAgICAgZm9yICh2YXIga2V5IGluIHRoaXMuYWN0aXZlQWN0aW9ucykge1xuICAgICAgICAgICAgaWYgKHRoaXMuYWN0aXZlQWN0aW9ucy5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5hY3RpdmVBY3Rpb25zW2tleV0uc3RvcCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfTtcblxuICAgIEFjdG9yLnByb3RvdHlwZS53aWxsUmVuZGVyID0gZnVuY3Rpb24gd2lsbFJlbmRlcihhY3RvciwgZnJhbWVTdGFtcCwgZWxhcHNlZCkge1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubnVtVmFsdWVLZXlzOyBpKyspIHtcbiAgICAgICAgICAgIHZhciBrZXkgPSB0aGlzLnZhbHVlS2V5c1tpXTtcbiAgICAgICAgICAgIHZhciB2YWx1ZSA9IHRoaXMudmFsdWVzW2tleV07XG5cbiAgICAgICAgICAgIGlmICh2YWx1ZS5udW1Ecml2ZXJzID09PSAxKSB7XG4gICAgICAgICAgICAgICAgdmFsdWUuY3VycmVudCA9IHRoaXMuYWN0aXZlQWN0aW9uc1t2YWx1ZS5kcml2ZXJzWzBdXS52YWx1ZXNba2V5XS5jdXJyZW50O1xuICAgICAgICAgICAgfSBlbHNlIGlmICh2YWx1ZS5udW1Ecml2ZXJzID4gMSkge1xuICAgICAgICAgICAgICAgIHZhciBydW5uaW5nVmVsb2NpdHkgPSAwO1xuICAgICAgICAgICAgICAgIHZhciBjdXJyZW50VmVsb2NpdHkgPSAwO1xuXG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaTIgPSAwOyBpMiA8IHZhbHVlLm51bURyaXZlcnM7IGkyKyspIHtcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudFZlbG9jaXR5ID0gdGhpcy5hY3RpdmVBY3Rpb25zW3ZhbHVlLmRyaXZlcnNbaTJdXS52YWx1ZXNba2V5XS52ZWxvY2l0eTtcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ1ZlbG9jaXR5ICs9IGN1cnJlbnRWZWxvY2l0eTtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy5hY3RpdmVBY3Rpb25zW3ZhbHVlLmRyaXZlcnNbaTJdXS52YWx1ZXNba2V5XS52ZWxvY2l0eSwgcnVubmluZ1ZlbG9jaXR5KTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB2YWx1ZS5jdXJyZW50ICs9ICgwLCBfY2FsYy5zcGVlZFBlckZyYW1lKShydW5uaW5nVmVsb2NpdHksIGVsYXBzZWQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIF9BY3Rpb24ucHJvdG90eXBlLndpbGxSZW5kZXIuY2FsbCh0aGlzLCBhY3RvciwgZnJhbWVTdGFtcCwgZWxhcHNlZCk7XG4gICAgfTtcblxuICAgIC8qXG4gICAgICAgIEFkZCBhY3RpdmUgYWN0aW9uc1xuICAgICAgICAgQHBhcmFtIFtudW1iZXJdXG4gICAgICAgIEBwYXJhbSBbQWN0aW9uXVxuICAgICovXG5cbiAgICBBY3Rvci5wcm90b3R5cGUuYWN0aXZhdGVBY3Rpb24gPSBmdW5jdGlvbiBhY3RpdmF0ZUFjdGlvbihpZCwgYWN0aW9uKSB7XG4gICAgICAgIHRoaXMuYWN0aXZlQWN0aW9uc1tpZF0gPSBhY3Rpb247XG4gICAgICAgIHRoaXMubnVtQWN0aXZlQWN0aW9ucysrO1xuXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYWN0aW9uLm51bVZhbHVlS2V5czsgaSsrKSB7XG4gICAgICAgICAgICB2YXIga2V5ID0gYWN0aW9uLnZhbHVlS2V5c1tpXTtcbiAgICAgICAgICAgIHZhciBhY3Rpb25WYWx1ZSA9IGFjdGlvbi52YWx1ZXNba2V5XTtcbiAgICAgICAgICAgIHZhciB2YWx1ZSA9IHRoaXMudmFsdWVzW2tleV07XG4gICAgICAgICAgICB2YXIgZHJpdmVySW5kZXggPSB2YWx1ZS5kcml2ZXJzLmluZGV4T2YoaWQpO1xuXG4gICAgICAgICAgICBpZiAoZHJpdmVySW5kZXggIT09IC0xKSB7XG4gICAgICAgICAgICAgICAgdmFsdWUuZHJpdmVycy5zcGxpY2UoZHJpdmVySW5kZXgsIDEpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB2YWx1ZS5udW1Ecml2ZXJzKys7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHZhbHVlLmRyaXZlcnMucHVzaChpZCk7XG5cbiAgICAgICAgICAgIGlmICghYWN0aW9uLmFkZGl0aXZlKSB7XG4gICAgICAgICAgICAgICAgYWN0aW9uVmFsdWUuZnJvbSA9IHZhbHVlLmN1cnJlbnQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5udW1BY3RpdmVBY3Rpb25zKSB7XG4gICAgICAgICAgICBfQWN0aW9uLnByb3RvdHlwZS5zdGFydC5jYWxsKHRoaXMpO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIC8qXG4gICAgICAgIFJlbW92ZSBhY3RpdmUgYWN0aW9uc1xuICAgICAgICAgQHBhcmFtIFtudW1iZXJdXG4gICAgKi9cblxuICAgIEFjdG9yLnByb3RvdHlwZS5kZWFjdGl2YXRlQWN0aW9uID0gZnVuY3Rpb24gZGVhY3RpdmF0ZUFjdGlvbihpZCkge1xuICAgICAgICB2YXIgYWN0aW9uID0gdGhpcy5hY3RpdmVBY3Rpb25zW2lkXTtcblxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFjdGlvbi5udW1WYWx1ZUtleXM7IGkrKykge1xuICAgICAgICAgICAgdmFyIGtleSA9IGFjdGlvbi52YWx1ZUtleXNbaV07XG4gICAgICAgICAgICB2YXIgdmFsdWUgPSB0aGlzLnZhbHVlc1trZXldO1xuICAgICAgICAgICAgdmFyIGRyaXZlckluZGV4ID0gdmFsdWUuZHJpdmVycy5pbmRleE9mKGlkKTtcblxuICAgICAgICAgICAgaWYgKGRyaXZlckluZGV4ICE9PSAtMSkge1xuICAgICAgICAgICAgICAgIHZhbHVlLmRyaXZlcnMuc3BsaWNlKGRyaXZlckluZGV4LCAxKTtcbiAgICAgICAgICAgICAgICB2YWx1ZS5udW1Ecml2ZXJzLS07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBkZWxldGUgdGhpcy5hY3RpdmVBY3Rpb25zW2lkXTtcbiAgICAgICAgdGhpcy5udW1BY3RpdmVBY3Rpb25zLS07XG5cbiAgICAgICAgaWYgKCF0aGlzLm51bUFjdGl2ZUFjdGlvbnMgJiYgdGhpcy5pc0FjdGl2ZSkge1xuICAgICAgICAgICAgX0FjdGlvbi5wcm90b3R5cGUuc3RvcC5jYWxsKHRoaXMpO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIEFjdG9yLnByb3RvdHlwZS5nZXREZWZhdWx0VmFsdWUgPSBmdW5jdGlvbiBnZXREZWZhdWx0VmFsdWUoKSB7XG4gICAgICAgIHJldHVybiBfZXh0ZW5kcyh7fSwgX0FjdGlvbi5wcm90b3R5cGUuZ2V0RGVmYXVsdFZhbHVlLmNhbGwodGhpcyksIHtcbiAgICAgICAgICAgIGRyaXZlcnM6IFtdLFxuICAgICAgICAgICAgbnVtRHJpdmVyczogMFxuICAgICAgICB9KTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIEFjdG9yO1xufShfQWN0aW9uMy5kZWZhdWx0KTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gQWN0b3I7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5OeVl5OWhZM1JwYjI1ekwwRmpkRzl5TG1weklsMHNJbTVoYldWeklqcGJYU3dpYldGd2NHbHVaM01pT2lJN096czdPenM3T3pzN096czdPenM3T3pzN096czdPMEZCVFVFc1NVRkJUU3hsUVVGbExGVkJRVU1zVFVGQlJEdFhRVUZaTEU5QlFVOHNTMEZCVUN4RFFVRmhMR05CUVdJc1EwRkJORUlzVDBGQlR5eEZRVUZRTEVWQlFWY3NUVUZCZGtNN1EwRkJXanRCUVVOeVFpeEpRVUZOTEdOQlFXTXNWVUZCUXl4TlFVRkVPMWRCUVZrc1QwRkJUeXhMUVVGUUxFTkJRV0VzWjBKQlFXSXNRMEZCT0VJc1QwRkJUeXhGUVVGUU8wTkJRVEZETzBGQlEzQkNMRWxCUVUwc1lVRkJZU3hWUVVGRExFdEJRVVE3VjBGQldUdEJRVU16UWl4bFFVRlBMRXRCUVZBN1FVRkRRU3h2UWtGQldTeEpRVUZhTzBGQlEwRXNXVUZCU1N4TlFVRk5MRVZCUVU0N1FVRkRTaXhyUWtGQlZTeFpRVUZXTzBGQlEwRXNhVUpCUVZNc1YwRkJWRHRCUVVOQkxHdENRVUZWTEZOQlFWWTdPME5CVG1VN08wbEJVMFU3T3p0QlFVTnFRaXhoUVVScFFpeExRVU5xUWl4SFFVRnhRanM0UWtGRVNpeFBRVU5KT3pzd1EwRkJUanM3VTBGQlRUczdjVVJCUTJwQ0xEQkRRVUZUTEV0QlFWUXNSMEZFYVVJN08wRkJSV3BDTEdOQlFVc3NZVUZCVEN4SFFVRnhRaXhGUVVGeVFpeERRVVpwUWp0QlFVZHFRaXhqUVVGTExHZENRVUZNTEVkQlFYZENMRU5CUVhoQ0xFTkJTR2xDT3p0TFFVRnlRanM3UVVGRWFVSXNiMEpCVDJwQ0xHMUNRVUZKTEU5QlFVOHNVMEZCVXp0QlFVTm9RaXhaUVVGSkxGZEJRVmNzUTBGQlF5eExRVUZMTEU5QlFVd3NSVUZCWXp0QlFVTXhRaXc0UWtGQlRTeEhRVUZPTEZsQlFWVXNTMEZCVml4RlFVUXdRanRCUVVVeFFpeHBRa0ZCU3l4SlFVRk1MRWRCUmpCQ08xTkJRVGxDTEUxQlIwODdRVUZEU0N4blFrRkJUU3hUUVVGVExFdEJRVXNzVDBGQlRDeERRVUZoTEV0QlFXSXNRMEZCVkN4RFFVUklPMEZCUlVnc1owSkJRVWtzVFVGQlNpeEZRVUZaTzBGQlExSXNjVUpCUVVzc1MwRkJUQ3hEUVVGWExFMUJRVmdzUlVGRVVUdGhRVUZhTzFOQlRFbzdPenM3T3pzN1FVRlNZU3h2UWtGelFtcENMSEZDUVVGTExGRkJRVkU3UVVGRFZDeFpRVUZOTEd0Q1FVRnJRaXhQUVVGUExFOUJRVkFzUlVGQmJFSXNRMEZFUnp0QlFVVlVMRmxCUVVrc1dVRkJXU3hGUVVGYUxFTkJSa3M3UVVGSFZDeFpRVUZKTEdWQlFXVXNTMEZCWmpzN08wRkJTRXNzWVVGTlNpeEpRVUZKTEVkQlFVb3NTVUZCVnl4blFrRkJaMElzVFVGQmFFSXNSVUZCZDBJN1FVRkRjRU1zWjBKQlFVa3NaMEpCUVdkQ0xFMUJRV2hDTEVOQlFYVkNMR05CUVhaQ0xFTkJRWE5ETEVkQlFYUkRMRXRCUVRoRExFTkJRVU1zUzBGQlN5eE5RVUZNTEVOQlFWa3NZMEZCV2l4RFFVRXlRaXhIUVVFelFpeERRVUZFTEVWQlFXdERPMEZCUTJoR0xEQkNRVUZWTEVkQlFWWXNTVUZCYVVJc1owSkJRV2RDTEUxQlFXaENMRU5CUVhWQ0xFZEJRWFpDTEVOQlFXcENMRU5CUkdkR08wRkJSV2hHTEN0Q1FVRmxMRWxCUVdZc1EwRkdaMFk3WVVGQmNFWTdVMEZFU2pzN1FVRlBRU3haUVVGSkxGbEJRVW9zUlVGQmEwSTdRVUZEWkN4cFFrRkJTeXhIUVVGTUxFTkJRVk1zUlVGQlJTeFJRVUZSTEZOQlFWSXNSVUZCV0N4RlFVUmpPMU5CUVd4Q096dEJRVWxCTEdWQlFVOHNaMEpCUVdkQ0xFZEJRV2hDTEVOQlFXOUNMRmRCUVZjc1NVRkJXQ3hGUVVGcFFpeGxRVUZxUWl4RFFVRndRaXhEUVVGUUxFTkJha0pUT3pzN096czdPenM3UVVGMFFra3NiMEpCYVVScVFpeDFRa0ZCVFN4UlFVRlJPMEZCUTFZc01FSkJRVTBzUzBGQlRpeFpRVVJWT3p0QlFVZFdMRmxCUVVrc1RVRkJTaXhGUVVGWk8wRkJRMUlzWjBKQlFVMHNZMEZCWXl4TFFVRkxMRWxCUVV3c1EwRkJWU3hOUVVGV0xFTkJRV1FzUTBGRVJUdEJRVVZTTEhkQ1FVRlpMRXRCUVZvc1IwRkdVVHM3UVVGSlVpeHRRa0ZCVHl4WFFVRlFMRU5CU2xFN1UwRkJXaXhOUVV0UE8wRkJRMGdzYVVKQlFVc3NTVUZCU1N4SFFVRktMRWxCUVZjc1MwRkJTeXhoUVVGTUxFVkJRVzlDTzBGQlEyaERMRzlDUVVGSkxFdEJRVXNzWVVGQlRDeERRVUZ0UWl4alFVRnVRaXhEUVVGclF5eEhRVUZzUXl4RFFVRktMRVZCUVRSRE8wRkJRM2hETEhkQ1FVRk5MRlZCUVZNc1MwRkJTeXhoUVVGTUxFTkJRVzFDTEVkQlFXNUNMRU5CUVZRc1EwRkVhME03UVVGRmVFTXNkMEpCUVVrc1EwRkJReXhSUVVGUExGRkJRVkFzUlVGQmFVSTdRVUZEYkVJc1owTkJRVThzUzBGQlVDeEhRVVJyUWp0eFFrRkJkRUk3YVVKQlJrbzdZVUZFU2p0VFFVNUtPenRCUVdkQ1FTeGxRVUZQTEVsQlFWQXNRMEZ1UWxVN096dEJRV3BFUnl4dlFrRjFSV3BDTEhWQ1FVRlBPMEZCUTBnc01FSkJRVTBzU1VGQlRpeFpRVVJIT3p0QlFVZElMR0ZCUVVzc1NVRkJTU3hIUVVGS0xFbEJRVmNzUzBGQlN5eGhRVUZNTEVWQlFXOUNPMEZCUTJoRExHZENRVUZKTEV0QlFVc3NZVUZCVEN4RFFVRnRRaXhqUVVGdVFpeERRVUZyUXl4SFFVRnNReXhEUVVGS0xFVkJRVFJETzBGQlEzaERMSEZDUVVGTExHRkJRVXdzUTBGQmJVSXNSMEZCYmtJc1JVRkJkMElzU1VGQmVFSXNSMEZFZDBNN1lVRkJOVU03VTBGRVNqczdRVUZOUVN4bFFVRlBMRWxCUVZBc1EwRlVSenM3TzBGQmRrVlZMRzlDUVcxR2FrSXNhVU5CUVZjc1QwRkJUeXhaUVVGWkxGTkJRVk03UVVGRGJrTXNZVUZCU3l4SlFVRkpMRWxCUVVrc1EwRkJTaXhGUVVGUExFbEJRVWtzUzBGQlN5eFpRVUZNTEVWQlFXMUNMRWRCUVhaRExFVkJRVFJETzBGQlEzaERMR2RDUVVGTkxFMUJRVTBzUzBGQlN5eFRRVUZNTEVOQlFXVXNRMEZCWml4RFFVRk9MRU5CUkd0RE8wRkJSWGhETEdkQ1FVRk5MRkZCUVZFc1MwRkJTeXhOUVVGTUxFTkJRVmtzUjBGQldpeERRVUZTTEVOQlJtdERPenRCUVVsNFF5eG5Ra0ZCU1N4TlFVRk5MRlZCUVU0c1MwRkJjVUlzUTBGQmNrSXNSVUZCZDBJN1FVRkRlRUlzYzBKQlFVMHNUMEZCVGl4SFFVRm5RaXhMUVVGTExHRkJRVXdzUTBGQmJVSXNUVUZCVFN4UFFVRk9MRU5CUVdNc1EwRkJaQ3hEUVVGdVFpeEZRVUZ4UXl4TlFVRnlReXhEUVVFMFF5eEhRVUUxUXl4RlFVRnBSQ3hQUVVGcVJDeERRVVJSTzJGQlFUVkNMRTFCUjA4c1NVRkJTU3hOUVVGTkxGVkJRVTRzUjBGQmJVSXNRMEZCYmtJc1JVRkJjMEk3UVVGRE4wSXNiMEpCUVVrc2EwSkJRV3RDTEVOQlFXeENMRU5CUkhsQ08wRkJSVGRDTEc5Q1FVRkpMR3RDUVVGclFpeERRVUZzUWl4RFFVWjVRanM3UVVGSk4wSXNjVUpCUVVzc1NVRkJTU3hMUVVGTExFTkJRVXdzUlVGQlVTeExRVUZMTEUxQlFVMHNWVUZCVGl4RlFVRnJRaXhKUVVGNFF5eEZRVUU0UXp0QlFVTXhReXh6UTBGQmEwSXNTMEZCU3l4aFFVRk1MRU5CUVcxQ0xFMUJRVTBzVDBGQlRpeERRVUZqTEVWQlFXUXNRMEZCYmtJc1JVRkJjME1zVFVGQmRFTXNRMEZCTmtNc1IwRkJOME1zUlVGQmEwUXNVVUZCYkVRc1EwRkVkMEk3UVVGRk1VTXNkVU5CUVcxQ0xHVkJRVzVDTEVOQlJqQkRPMEZCUnpGRExEUkNRVUZSTEVkQlFWSXNRMEZCV1N4TFFVRkxMR0ZCUVV3c1EwRkJiVUlzVFVGQlRTeFBRVUZPTEVOQlFXTXNSVUZCWkN4RFFVRnVRaXhGUVVGelF5eE5RVUYwUXl4RFFVRTJReXhIUVVFM1F5eEZRVUZyUkN4UlFVRnNSQ3hGUVVFMFJDeGxRVUY0UlN4RlFVZ3dRenRwUWtGQk9VTTdPMEZCVFVFc2MwSkJRVTBzVDBGQlRpeEpRVUZwUWl4NVFrRkJZeXhsUVVGa0xFVkJRU3RDTEU5QlFTOUNMRU5CUVdwQ0xFTkJWalpDTzJGQlFURkNPMU5CVUZnN08wRkJjVUpCTEdWQlFVOHNhMEpCUVUwc1ZVRkJUaXhaUVVGcFFpeExRVUZxUWl4RlFVRjNRaXhWUVVGNFFpeEZRVUZ2UXl4UFFVRndReXhEUVVGUUxFTkJkRUp0UXpzN096czdPenM3TzBGQmJrWjBRaXh2UWtGclNHcENMSGxEUVVGbExFbEJRVWtzVVVGQlVUdEJRVU4yUWl4aFFVRkxMR0ZCUVV3c1EwRkJiVUlzUlVGQmJrSXNTVUZCZVVJc1RVRkJla0lzUTBGRWRVSTdRVUZGZGtJc1lVRkJTeXhuUWtGQlRDeEhRVVoxUWpzN1FVRkpka0lzWVVGQlN5eEpRVUZKTEVsQlFVa3NRMEZCU2l4RlFVRlBMRWxCUVVrc1QwRkJUeXhaUVVGUUxFVkJRWEZDTEVkQlFYcERMRVZCUVRoRE8wRkJRekZETEdkQ1FVRk5MRTFCUVUwc1QwRkJUeXhUUVVGUUxFTkJRV2xDTEVOQlFXcENMRU5CUVU0c1EwRkViME03UVVGRk1VTXNaMEpCUVUwc1kwRkJZeXhQUVVGUExFMUJRVkFzUTBGQll5eEhRVUZrTEVOQlFXUXNRMEZHYjBNN1FVRkhNVU1zWjBKQlFVMHNVVUZCVVN4TFFVRkxMRTFCUVV3c1EwRkJXU3hIUVVGYUxFTkJRVklzUTBGSWIwTTdRVUZKTVVNc1owSkJRVTBzWTBGQll5eE5RVUZOTEU5QlFVNHNRMEZCWXl4UFFVRmtMRU5CUVhOQ0xFVkJRWFJDTEVOQlFXUXNRMEZLYjBNN08wRkJUVEZETEdkQ1FVRkpMR2RDUVVGblFpeERRVUZETEVOQlFVUXNSVUZCU1R0QlFVTndRaXh6UWtGQlRTeFBRVUZPTEVOQlFXTXNUVUZCWkN4RFFVRnhRaXhYUVVGeVFpeEZRVUZyUXl4RFFVRnNReXhGUVVSdlFqdGhRVUY0UWl4TlFVVlBPMEZCUTBnc2MwSkJRVTBzVlVGQlRpeEhRVVJITzJGQlJsQTdPMEZCVFVFc2EwSkJRVTBzVDBGQlRpeERRVUZqTEVsQlFXUXNRMEZCYlVJc1JVRkJia0lzUlVGYU1FTTdPMEZCWXpGRExHZENRVUZKTEVOQlFVTXNUMEZCVHl4UlFVRlFMRVZCUVdsQ08wRkJRMnhDTERSQ1FVRlpMRWxCUVZvc1IwRkJiVUlzVFVGQlRTeFBRVUZPTEVOQlJFUTdZVUZCZEVJN1UwRmtTanM3UVVGdFFrRXNXVUZCU1N4TFFVRkxMR2RDUVVGTUxFVkJRWFZDTzBGQlEzWkNMRGhDUVVGTkxFdEJRVTRzV1VGRWRVSTdVMEZCTTBJN096czdPenM3TzBGQmVrbGhMRzlDUVcxS2FrSXNOa05CUVdsQ0xFbEJRVWs3UVVGRGFrSXNXVUZCVFN4VFFVRlRMRXRCUVVzc1lVRkJUQ3hEUVVGdFFpeEZRVUZ1UWl4RFFVRlVMRU5CUkZjN08wRkJSMnBDTEdGQlFVc3NTVUZCU1N4SlFVRkpMRU5CUVVvc1JVRkJUeXhKUVVGSkxFOUJRVThzV1VGQlVDeEZRVUZ4UWl4SFFVRjZReXhGUVVFNFF6dEJRVU14UXl4blFrRkJUU3hOUVVGTkxFOUJRVThzVTBGQlVDeERRVUZwUWl4RFFVRnFRaXhEUVVGT0xFTkJSRzlETzBGQlJURkRMR2RDUVVGTkxGRkJRVkVzUzBGQlN5eE5RVUZNTEVOQlFWa3NSMEZCV2l4RFFVRlNMRU5CUm05RE8wRkJSekZETEdkQ1FVRk5MR05CUVdNc1RVRkJUU3hQUVVGT0xFTkJRV01zVDBGQlpDeERRVUZ6UWl4RlFVRjBRaXhEUVVGa0xFTkJTRzlET3p0QlFVc3hReXhuUWtGQlNTeG5Ra0ZCWjBJc1EwRkJReXhEUVVGRUxFVkJRVWs3UVVGRGNFSXNjMEpCUVUwc1QwRkJUaXhEUVVGakxFMUJRV1FzUTBGQmNVSXNWMEZCY2tJc1JVRkJhME1zUTBGQmJFTXNSVUZFYjBJN1FVRkZjRUlzYzBKQlFVMHNWVUZCVGl4SFFVWnZRanRoUVVGNFFqdFRRVXhLT3p0QlFWZEJMR1ZCUVU4c1MwRkJTeXhoUVVGTUxFTkJRVzFDTEVWQlFXNUNMRU5CUVZBc1EwRmthVUk3UVVGbGFrSXNZVUZCU3l4blFrRkJUQ3hIUVdacFFqczdRVUZwUW1wQ0xGbEJRVWtzUTBGQlF5eExRVUZMTEdkQ1FVRk1MRWxCUVhsQ0xFdEJRVXNzVVVGQlRDeEZRVUZsTzBGQlEzcERMRGhDUVVGTkxFbEJRVTRzV1VGRWVVTTdVMEZCTjBNN096dEJRWEJMWVN4dlFrRjVTMnBDTERaRFFVRnJRanRCUVVOa0xEUkNRVU5QTEd0Q1FVRk5MR1ZCUVU0N1FVRkRTQ3h4UWtGQlV5eEZRVUZVTzBGQlEwRXNkMEpCUVZrc1EwRkJXanRWUVVoS0xFTkJSR003T3p0WFFYcExSQ0lzSW1acGJHVWlPaUpCWTNSdmNpNXFjeUlzSW5OdmRYSmpaVkp2YjNRaU9pSXZWWE5sY25NdlRXRjBkQzlUYVhSbGN5OXdiM0J0YjNScGIyNGlMQ0p6YjNWeVkyVnpRMjl1ZEdWdWRDSTZXeUpwYlhCdmNuUWdRV04wYVc5dUlHWnliMjBnSnk0dUwyRmpkR2x2Ym5NdlFXTjBhVzl1Snp0Y2JtbHRjRzl5ZENCN0lITndaV1ZrVUdWeVJuSmhiV1VnZlNCbWNtOXRJQ2N1TGk5cGJtTXZZMkZzWXljN1hHNWNiaThxWEc0Z0lDQWdUV1YwYUc5a2N5QmhibVFnY0hKdmNHVnlkR2xsY3lCMGJ5QmhaR1FnZEc4Z1ltOTFibVFnUVdOMGFXOXVjMXh1S2k5Y2JtTnZibk4wSUdKdmRXNWtUMjVUZEdGeWRDQTlJQ2hoWTNScGIyNHBJRDArSUdGamRHbHZiaTVoWTNSdmNpNWhZM1JwZG1GMFpVRmpkR2x2YmloaFkzUnBiMjR1YVdRc0lHRmpkR2x2YmlrN1hHNWpiMjV6ZENCaWIzVnVaRTl1VTNSdmNDQTlJQ2hoWTNScGIyNHBJRDArSUdGamRHbHZiaTVoWTNSdmNpNWtaV0ZqZEdsMllYUmxRV04wYVc5dUtHRmpkR2x2Ymk1cFpDazdYRzVqYjI1emRDQmliM1Z1WkZCeWIzQnpJRDBnS0dGamRHOXlLU0E5UGlBb2UxeHVJQ0FnSUdGamRHOXlPaUJoWTNSdmNpeGNiaUFnSUNCcGMxQnlhVzl5YVhSNU9pQjBjblZsTEZ4dUlDQWdJRzl1T2lCaFkzUnZjaTV2Yml4Y2JpQWdJQ0JmYjI1VGRHRnlkRG9nWW05MWJtUlBibE4wWVhKMExGeHVJQ0FnSUY5dmJsTjBiM0E2SUdKdmRXNWtUMjVUZEc5d0xGeHVJQ0FnSUc5dVVtVnVaR1Z5T2lCMWJtUmxabWx1WldSY2JuMHBPMXh1WEc1bGVIQnZjblFnWkdWbVlYVnNkQ0JqYkdGemN5QkJZM1J2Y2lCbGVIUmxibVJ6SUVGamRHbHZiaUI3WEc0Z0lDQWdZMjl1YzNSeWRXTjBiM0lvTGk0dVlYSm5jeWtnZTF4dUlDQWdJQ0FnSUNCemRYQmxjaWd1TGk1aGNtZHpLVHRjYmlBZ0lDQWdJQ0FnZEdocGN5NWhZM1JwZG1WQlkzUnBiMjV6SUQwZ2UzMDdYRzRnSUNBZ0lDQWdJSFJvYVhNdWJuVnRRV04wYVhabFFXTjBhVzl1Y3lBOUlEQTdYRzRnSUNBZ2ZWeHVYRzRnSUNBZ2MyVjBLSEJ5YjNCekxDQnBibk4wWVc1MEtTQjdYRzRnSUNBZ0lDQWdJR2xtSUNocGJuTjBZVzUwSUh4OElDRjBhR2x6TG5KbFpIVmpaWElwSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJSE4xY0dWeUxuTmxkQ2h3Y205d2N5azdYRzRnSUNBZ0lDQWdJQ0FnSUNCMGFHbHpMbTl1WTJVb0tUdGNiaUFnSUNBZ0lDQWdmU0JsYkhObElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUdOdmJuTjBJR0ZqZEdsdmJpQTlJSFJvYVhNdWNtVmtkV05sY2lod2NtOXdjeWs3WEc0Z0lDQWdJQ0FnSUNBZ0lDQnBaaUFvWVdOMGFXOXVLU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnZEdocGN5NXpkR0Z5ZENoaFkzUnBiMjRwTzF4dUlDQWdJQ0FnSUNBZ0lDQWdmVnh1SUNBZ0lDQWdJQ0I5WEc0Z0lDQWdmVnh1WEc0Z0lDQWdMeXBjYmlBZ0lDQWdJQ0FnUW1sdVpDQkJZM1JwYjI0Z2RHOGdRV04wYjNKY2JpQWdJQ0FxTDF4dUlDQWdJR0pwYm1Rb1lXTjBhVzl1S1NCN1hHNGdJQ0FnSUNBZ0lHTnZibk4wSUdsdWFHVnlhWFJsWkVGamRHbHZiaUE5SUdGamRHbHZiaTVwYm1obGNtbDBLQ2s3WEc0Z0lDQWdJQ0FnSUd4bGRDQnVaWGRXWVd4MVpYTWdQU0I3ZlR0Y2JpQWdJQ0FnSUNBZ2JHVjBJR2hoYzA1bGQxWmhiSFZsY3lBOUlHWmhiSE5sTzF4dVhHNGdJQ0FnSUNBZ0lDOHZJRU55WldGMFpTQjJZV3gxWlhNZ2IyNGdZV04wYjNJZ2RHaGhkQ0JrYjI0bmRDQmxlR2x6ZEZ4dUlDQWdJQ0FnSUNCbWIzSWdLR3hsZENCclpYa2dhVzRnYVc1b1pYSnBkR1ZrUVdOMGFXOXVMblpoYkhWbGN5a2dlMXh1SUNBZ0lDQWdJQ0FnSUNBZ2FXWWdLR2x1YUdWeWFYUmxaRUZqZEdsdmJpNTJZV3gxWlhNdWFHRnpUM2R1VUhKdmNHVnlkSGtvYTJWNUtTQW1KaUFoZEdocGN5NTJZV3gxWlhNdWFHRnpUM2R1VUhKdmNHVnlkSGtvYTJWNUtTa2dlMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJRzVsZDFaaGJIVmxjMXRyWlhsZElEMGdhVzVvWlhKcGRHVmtRV04wYVc5dUxuWmhiSFZsYzF0clpYbGRPMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJR2hoYzA1bGQxWmhiSFZsY3lBOUlIUnlkV1U3WEc0Z0lDQWdJQ0FnSUNBZ0lDQjlYRzRnSUNBZ0lDQWdJSDFjYmx4dUlDQWdJQ0FnSUNCcFppQW9hR0Z6VG1WM1ZtRnNkV1Z6S1NCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0IwYUdsekxuTmxkQ2g3SUhaaGJIVmxjem9nYm1WM1ZtRnNkV1Z6SUgwcE8xeHVJQ0FnSUNBZ0lDQjlYRzVjYmlBZ0lDQWdJQ0FnY21WMGRYSnVJR2x1YUdWeWFYUmxaRUZqZEdsdmJpNXpaWFFvWW05MWJtUlFjbTl3Y3loMGFHbHpMQ0JwYm1obGNtbDBaV1JCWTNScGIyNHBLVHRjYmlBZ0lDQjlYRzVjYmlBZ0lDQXZLbHh1SUNBZ0lDQWdJQ0JUZEdGeWRDQkJZM1J2Y2x4dVhHNGdJQ0FnSUNBZ0lFbG1JRUZqZEdsdmJpQnBjeUJ3Y205MmFXUmxaQ3dnWW1sdVpDQnBkQ0IwYnlCMGFHbHpJRUZqZEc5eUlHRnVaQ0J6ZEdGeWRGeHVYRzRnSUNBZ0lDQWdJRUJ3WVhKaGJTQW9iM0IwYVc5dVlXd3BJRnRCWTNScGIyNWRYRzRnSUNBZ0tpOWNiaUFnSUNCemRHRnlkQ2hoWTNScGIyNHBJSHRjYmlBZ0lDQWdJQ0FnYzNWd1pYSXVjM1JoY25Rb0tUdGNibHh1SUNBZ0lDQWdJQ0JwWmlBb1lXTjBhVzl1S1NCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0JqYjI1emRDQmliM1Z1WkVGamRHbHZiaUE5SUhSb2FYTXVZbWx1WkNoaFkzUnBiMjRwTzF4dUlDQWdJQ0FnSUNBZ0lDQWdZbTkxYm1SQlkzUnBiMjR1YzNSaGNuUW9LVHRjYmx4dUlDQWdJQ0FnSUNBZ0lDQWdjbVYwZFhKdUlHSnZkVzVrUVdOMGFXOXVPMXh1SUNBZ0lDQWdJQ0I5SUdWc2MyVWdlMXh1SUNBZ0lDQWdJQ0FnSUNBZ1ptOXlJQ2hzWlhRZ2EyVjVJR2x1SUhSb2FYTXVZV04wYVhabFFXTjBhVzl1Y3lrZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lHbG1JQ2gwYUdsekxtRmpkR2wyWlVGamRHbHZibk11YUdGelQzZHVVSEp2Y0dWeWRIa29hMlY1S1NrZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0JqYjI1emRDQmhZM1JwYjI0Z1BTQjBhR2x6TG1GamRHbDJaVUZqZEdsdmJuTmJhMlY1WFR0Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdhV1lnS0NGaFkzUnBiMjR1YVhOQlkzUnBkbVVwSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUdGamRHbHZiaTV6ZEdGeWRDZ3BPMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCOVhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2ZWeHVJQ0FnSUNBZ0lDQWdJQ0FnZlZ4dUlDQWdJQ0FnSUNCOVhHNWNiaUFnSUNBZ0lDQWdjbVYwZFhKdUlIUm9hWE03WEc0Z0lDQWdmVnh1WEc0Z0lDQWdjM1J2Y0NncElIdGNiaUFnSUNBZ0lDQWdjM1Z3WlhJdWMzUnZjQ2dwTzF4dVhHNGdJQ0FnSUNBZ0lHWnZjaUFvYkdWMElHdGxlU0JwYmlCMGFHbHpMbUZqZEdsMlpVRmpkR2x2Ym5NcElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUdsbUlDaDBhR2x6TG1GamRHbDJaVUZqZEdsdmJuTXVhR0Z6VDNkdVVISnZjR1Z5ZEhrb2EyVjVLU2tnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUhSb2FYTXVZV04wYVhabFFXTjBhVzl1YzF0clpYbGRMbk4wYjNBb0tUdGNiaUFnSUNBZ0lDQWdJQ0FnSUgxY2JpQWdJQ0FnSUNBZ2ZWeHVYRzRnSUNBZ0lDQWdJSEpsZEhWeWJpQjBhR2x6TzF4dUlDQWdJSDFjYmx4dUlDQWdJSGRwYkd4U1pXNWtaWElvWVdOMGIzSXNJR1p5WVcxbFUzUmhiWEFzSUdWc1lYQnpaV1FwSUh0Y2JpQWdJQ0FnSUNBZ1ptOXlJQ2hzWlhRZ2FTQTlJREE3SUdrZ1BDQjBhR2x6TG01MWJWWmhiSFZsUzJWNWN6c2dhU3NyS1NCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0JqYjI1emRDQnJaWGtnUFNCMGFHbHpMblpoYkhWbFMyVjVjMXRwWFR0Y2JpQWdJQ0FnSUNBZ0lDQWdJR052Ym5OMElIWmhiSFZsSUQwZ2RHaHBjeTUyWVd4MVpYTmJhMlY1WFR0Y2JseHVJQ0FnSUNBZ0lDQWdJQ0FnYVdZZ0tIWmhiSFZsTG01MWJVUnlhWFpsY25NZ1BUMDlJREVwSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCMllXeDFaUzVqZFhKeVpXNTBJRDBnZEdocGN5NWhZM1JwZG1WQlkzUnBiMjV6VzNaaGJIVmxMbVJ5YVhabGNuTmJNRjFkTG5aaGJIVmxjMXRyWlhsZExtTjFjbkpsYm5RN1hHNWNiaUFnSUNBZ0lDQWdJQ0FnSUgwZ1pXeHpaU0JwWmlBb2RtRnNkV1V1Ym5WdFJISnBkbVZ5Y3lBK0lERXBJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0JzWlhRZ2NuVnVibWx1WjFabGJHOWphWFI1SUQwZ01EdGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQnNaWFFnWTNWeWNtVnVkRlpsYkc5amFYUjVJRDBnTUR0Y2JseHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lHWnZjaUFvYkdWMElHa3lJRDBnTURzZ2FUSWdQQ0IyWVd4MVpTNXVkVzFFY21sMlpYSnpPeUJwTWlzcktTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUdOMWNuSmxiblJXWld4dlkybDBlU0E5SUhSb2FYTXVZV04wYVhabFFXTjBhVzl1YzF0MllXeDFaUzVrY21sMlpYSnpXMmt5WFYwdWRtRnNkV1Z6VzJ0bGVWMHVkbVZzYjJOcGRIazdYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUhKMWJtNXBibWRXWld4dlkybDBlU0FyUFNCamRYSnlaVzUwVm1Wc2IyTnBkSGs3WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lHTnZibk52YkdVdWJHOW5LSFJvYVhNdVlXTjBhWFpsUVdOMGFXOXVjMXQyWVd4MVpTNWtjbWwyWlhKelcya3lYVjB1ZG1Gc2RXVnpXMnRsZVYwdWRtVnNiMk5wZEhrc0lISjFibTVwYm1kV1pXeHZZMmwwZVNsY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCOVhHNWNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQjJZV3gxWlM1amRYSnlaVzUwSUNzOUlITndaV1ZrVUdWeVJuSmhiV1VvY25WdWJtbHVaMVpsYkc5amFYUjVMQ0JsYkdGd2MyVmtLVHRjYmlBZ0lDQWdJQ0FnSUNBZ0lIMWNiaUFnSUNBZ0lDQWdmVnh1WEc0Z0lDQWdJQ0FnSUhKbGRIVnliaUJ6ZFhCbGNpNTNhV3hzVW1WdVpHVnlLR0ZqZEc5eUxDQm1jbUZ0WlZOMFlXMXdMQ0JsYkdGd2MyVmtLVHRjYmlBZ0lDQjlYRzVjYmlBZ0lDQXZLbHh1SUNBZ0lDQWdJQ0JCWkdRZ1lXTjBhWFpsSUdGamRHbHZibk5jYmx4dUlDQWdJQ0FnSUNCQWNHRnlZVzBnVzI1MWJXSmxjbDFjYmlBZ0lDQWdJQ0FnUUhCaGNtRnRJRnRCWTNScGIyNWRYRzRnSUNBZ0tpOWNiaUFnSUNCaFkzUnBkbUYwWlVGamRHbHZiaWhwWkN3Z1lXTjBhVzl1S1NCN1hHNGdJQ0FnSUNBZ0lIUm9hWE11WVdOMGFYWmxRV04wYVc5dWMxdHBaRjBnUFNCaFkzUnBiMjQ3WEc0Z0lDQWdJQ0FnSUhSb2FYTXViblZ0UVdOMGFYWmxRV04wYVc5dWN5c3JPMXh1WEc0Z0lDQWdJQ0FnSUdadmNpQW9iR1YwSUdrZ1BTQXdPeUJwSUR3Z1lXTjBhVzl1TG01MWJWWmhiSFZsUzJWNWN6c2dhU3NyS1NCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0JqYjI1emRDQnJaWGtnUFNCaFkzUnBiMjR1ZG1Gc2RXVkxaWGx6VzJsZE8xeHVJQ0FnSUNBZ0lDQWdJQ0FnWTI5dWMzUWdZV04wYVc5dVZtRnNkV1VnUFNCaFkzUnBiMjR1ZG1Gc2RXVnpXMnRsZVYwN1hHNGdJQ0FnSUNBZ0lDQWdJQ0JqYjI1emRDQjJZV3gxWlNBOUlIUm9hWE11ZG1Gc2RXVnpXMnRsZVYwN1hHNGdJQ0FnSUNBZ0lDQWdJQ0JqYjI1emRDQmtjbWwyWlhKSmJtUmxlQ0E5SUhaaGJIVmxMbVJ5YVhabGNuTXVhVzVrWlhoUFppaHBaQ2s3WEc1Y2JpQWdJQ0FnSUNBZ0lDQWdJR2xtSUNoa2NtbDJaWEpKYm1SbGVDQWhQVDBnTFRFcElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQjJZV3gxWlM1a2NtbDJaWEp6TG5Od2JHbGpaU2hrY21sMlpYSkpibVJsZUN3Z01TazdYRzRnSUNBZ0lDQWdJQ0FnSUNCOUlHVnNjMlVnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUhaaGJIVmxMbTUxYlVSeWFYWmxjbk1yS3p0Y2JpQWdJQ0FnSUNBZ0lDQWdJSDFjYmx4dUlDQWdJQ0FnSUNBZ0lDQWdkbUZzZFdVdVpISnBkbVZ5Y3k1d2RYTm9LR2xrS1R0Y2JpQWdJQ0FnSUNBZ0lDQWdJRnh1SUNBZ0lDQWdJQ0FnSUNBZ2FXWWdLQ0ZoWTNScGIyNHVZV1JrYVhScGRtVXBJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0JoWTNScGIyNVdZV3gxWlM1bWNtOXRJRDBnZG1Gc2RXVXVZM1Z5Y21WdWREdGNiaUFnSUNBZ0lDQWdJQ0FnSUgxY2JpQWdJQ0FnSUNBZ2ZWeHVYRzRnSUNBZ0lDQWdJR2xtSUNoMGFHbHpMbTUxYlVGamRHbDJaVUZqZEdsdmJuTXBJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lITjFjR1Z5TG5OMFlYSjBLQ2s3WEc0Z0lDQWdJQ0FnSUgxY2JpQWdJQ0I5WEc1Y2JpQWdJQ0F2S2x4dUlDQWdJQ0FnSUNCU1pXMXZkbVVnWVdOMGFYWmxJR0ZqZEdsdmJuTmNibHh1SUNBZ0lDQWdJQ0JBY0dGeVlXMGdXMjUxYldKbGNsMWNiaUFnSUNBcUwxeHVJQ0FnSUdSbFlXTjBhWFpoZEdWQlkzUnBiMjRvYVdRcElIdGNiaUFnSUNBZ0lDQWdZMjl1YzNRZ1lXTjBhVzl1SUQwZ2RHaHBjeTVoWTNScGRtVkJZM1JwYjI1elcybGtYVHRjYmx4dUlDQWdJQ0FnSUNCbWIzSWdLR3hsZENCcElEMGdNRHNnYVNBOElHRmpkR2x2Ymk1dWRXMVdZV3gxWlV0bGVYTTdJR2tyS3lrZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnWTI5dWMzUWdhMlY1SUQwZ1lXTjBhVzl1TG5aaGJIVmxTMlY1YzF0cFhUdGNiaUFnSUNBZ0lDQWdJQ0FnSUdOdmJuTjBJSFpoYkhWbElEMGdkR2hwY3k1MllXeDFaWE5iYTJWNVhUdGNiaUFnSUNBZ0lDQWdJQ0FnSUdOdmJuTjBJR1J5YVhabGNrbHVaR1Y0SUQwZ2RtRnNkV1V1WkhKcGRtVnljeTVwYm1SbGVFOW1LR2xrS1R0Y2JseHVJQ0FnSUNBZ0lDQWdJQ0FnYVdZZ0tHUnlhWFpsY2tsdVpHVjRJQ0U5UFNBdE1Ta2dlMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJSFpoYkhWbExtUnlhWFpsY25NdWMzQnNhV05sS0dSeWFYWmxja2x1WkdWNExDQXhLVHRjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0IyWVd4MVpTNXVkVzFFY21sMlpYSnpMUzA3WEc0Z0lDQWdJQ0FnSUNBZ0lDQjlYRzRnSUNBZ0lDQWdJSDFjYmx4dUlDQWdJQ0FnSUNCa1pXeGxkR1VnZEdocGN5NWhZM1JwZG1WQlkzUnBiMjV6VzJsa1hUdGNiaUFnSUNBZ0lDQWdkR2hwY3k1dWRXMUJZM1JwZG1WQlkzUnBiMjV6TFMwN1hHNWNiaUFnSUNBZ0lDQWdhV1lnS0NGMGFHbHpMbTUxYlVGamRHbDJaVUZqZEdsdmJuTWdKaVlnZEdocGN5NXBjMEZqZEdsMlpTa2dlMXh1SUNBZ0lDQWdJQ0FnSUNBZ2MzVndaWEl1YzNSdmNDZ3BPMXh1SUNBZ0lDQWdJQ0I5WEc0Z0lDQWdmVnh1WEc0Z0lDQWdaMlYwUkdWbVlYVnNkRlpoYkhWbEtDa2dlMXh1SUNBZ0lDQWdJQ0J5WlhSMWNtNGdlMXh1SUNBZ0lDQWdJQ0FnSUNBZ0xpNHVjM1Z3WlhJdVoyVjBSR1ZtWVhWc2RGWmhiSFZsS0Nrc1hHNGdJQ0FnSUNBZ0lDQWdJQ0JrY21sMlpYSnpPaUJiWFN4Y2JpQWdJQ0FnSUNBZ0lDQWdJRzUxYlVSeWFYWmxjbk02SURCY2JpQWdJQ0FnSUNBZ2ZUdGNiaUFnSUNCOVhHNTlJbDE5XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9hY3Rpb25zL0FjdG9yLmpzXG4gKiogbW9kdWxlIGlkID0gNVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9O1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX0FjdGlvbjIgPSByZXF1aXJlKCcuL0FjdGlvbicpO1xuXG52YXIgX0FjdGlvbjMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9BY3Rpb24yKTtcblxudmFyIF9wcmVzZXRFYXNpbmcgPSByZXF1aXJlKCcuL2Vhc2luZy9wcmVzZXQtZWFzaW5nJyk7XG5cbnZhciBfcHJlc2V0RWFzaW5nMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3ByZXNldEVhc2luZyk7XG5cbnZhciBfdXRpbHMgPSByZXF1aXJlKCcuLi9pbmMvdXRpbHMnKTtcblxudmFyIF9jYWxjID0gcmVxdWlyZSgnLi4vaW5jL2NhbGMnKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoIXNlbGYpIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBjYWxsICYmICh0eXBlb2YgY2FsbCA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSA/IGNhbGwgOiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90IFwiICsgdHlwZW9mIHN1cGVyQ2xhc3MpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIGVudW1lcmFibGU6IGZhbHNlLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIDogc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzczsgfVxuXG52YXIgQ09VTlQgPSAnQ291bnQnO1xudmFyIE5FWFRfU1RFUFMgPSB7XG4gICAgbG9vcDogJ3Jlc3RhcnQnLFxuICAgIHlveW86ICdyZXZlcnNlJyxcbiAgICBmbGlwOiAnZmxpcFZhbHVlcydcbn07XG5cbi8qXG4gICAgRWFzZSB2YWx1ZSB3aXRoaW4gcmFuZ2VkIHBhcmFtZXRlcnNcbiAgICBcbiAgICBAcGFyYW0gW251bWJlcl06IFByb2dyZXNzIGJldHdlZW4gMCBhbmQgMVxuICAgIEBwYXJhbSBbbnVtYmVyXTogVmFsdWUgb2YgMCBwcm9ncmVzc1xuICAgIEBwYXJhbSBbbnVtYmVyXTogVmFsdWUgb2YgMSBwcm9ncmVzc1xuICAgIEBwYXJhbSBbc3RyaW5nIHx8IGZ1bmN0aW9uXTogTmFtZSBvZiBwcmVzZXQgZWFzaW5nXG4gICAgICAgIHRvIHVzZSBvciBnZW5lcmF0ZWQgZWFzaW5nIGZ1bmN0aW9uXG4gICAgQHJldHVybiBbbnVtYmVyXTogVmFsdWUgb2YgZWFzZWQgcHJvZ3Jlc3MgaW4gcmFuZ2VcbiovXG52YXIgZWFzZSA9IGZ1bmN0aW9uIChwcm9ncmVzcywgZnJvbSwgdG8sIGVhc2UpIHtcbiAgICB2YXIgcHJvZ3Jlc3NMaW1pdGVkID0gKDAsIF9jYWxjLnJlc3RyaWN0KShwcm9ncmVzcywgMCwgMSk7XG4gICAgdmFyIGVhc2VkUHJvZ3Jlc3MgPSBlYXNlKHByb2dyZXNzTGltaXRlZCk7XG5cbiAgICByZXR1cm4gKDAsIF9jYWxjLmdldFZhbHVlRnJvbVByb2dyZXNzKShlYXNlZFByb2dyZXNzLCBmcm9tLCB0byk7XG59O1xuXG52YXIgVHdlZW4gPSBmdW5jdGlvbiAoX0FjdGlvbikge1xuICAgIF9pbmhlcml0cyhUd2VlbiwgX0FjdGlvbik7XG5cbiAgICBmdW5jdGlvbiBUd2VlbigpIHtcbiAgICAgICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFR3ZWVuKTtcblxuICAgICAgICByZXR1cm4gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgX0FjdGlvbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpKTtcbiAgICB9XG5cbiAgICBUd2Vlbi5wcm90b3R5cGUuc3RhcnQgPSBmdW5jdGlvbiBzdGFydCgpIHtcbiAgICAgICAgX0FjdGlvbi5wcm90b3R5cGUuc3RhcnQuY2FsbCh0aGlzKTtcbiAgICAgICAgdGhpcy5lbGFwc2VkID0gMDtcbiAgICAgICAgdGhpcy5mbGlwQ291bnQgPSB0aGlzLnlveW9Db3VudCA9IHRoaXMubG9vcENvdW50ID0gMDtcblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xuXG4gICAgVHdlZW4ucHJvdG90eXBlLm9uVXBkYXRlID0gZnVuY3Rpb24gb25VcGRhdGUodHdlZW4sIGZyYW1lU3RhbXAsIGVsYXBzZWQpIHtcbiAgICAgICAgdmFyIHByb2dyZXNzVGFyZ2V0ID0gdGhpcy5wbGF5RGlyZWN0aW9uID09PSAxID8gMSA6IDA7XG5cbiAgICAgICAgdGhpcy5lbmRlZCA9IHRydWU7XG4gICAgICAgIHRoaXMuZWxhcHNlZCArPSBlbGFwc2VkICogdGhpcy5kaWxhdGUgKiB0aGlzLnBsYXlEaXJlY3Rpb247XG5cbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLm51bVZhbHVlS2V5czsgaSsrKSB7XG4gICAgICAgICAgICB2YXIga2V5ID0gdGhpcy52YWx1ZUtleXNbaV07XG4gICAgICAgICAgICB2YXIgdmFsdWUgPSB0aGlzLnZhbHVlc1trZXldO1xuXG4gICAgICAgICAgICB2YXIgcHJvZ3Jlc3MgPSAoMCwgX2NhbGMucmVzdHJpY3QpKCgwLCBfY2FsYy5nZXRQcm9ncmVzc0Zyb21WYWx1ZSkodGhpcy5lbGFwc2VkIC0gdmFsdWUuZGVsYXksIDAsIHZhbHVlLmR1cmF0aW9uKSwgMCwgMSk7XG5cbiAgICAgICAgICAgIC8vIE1hcmsgVHdlZW4gYXMgTk9UIGVuZGVkIGlmIHN0aWxsIGluIHByb2dyZXNzXG4gICAgICAgICAgICBpZiAocHJvZ3Jlc3MgIT09IHByb2dyZXNzVGFyZ2V0KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5lbmRlZCA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBTdGVwIHByb2dyZXNzIGlmIHdlJ3JlIHN0ZXBwaW5nXG4gICAgICAgICAgICBpZiAodmFsdWUuc3RlcHMpIHtcbiAgICAgICAgICAgICAgICBwcm9ncmVzcyA9ICgwLCBfY2FsYy5zdGVwUHJvZ3Jlc3MpKHByb2dyZXNzLCB2YWx1ZS5zdGVwcyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIEVhc2UgcHJvZ3Jlc3NcbiAgICAgICAgICAgIHZhbHVlLmN1cnJlbnQgPSBlYXNlKHByb2dyZXNzLCB2YWx1ZS5mcm9tLCB2YWx1ZS50bywgdmFsdWUuZWFzZSk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgVHdlZW4ucHJvdG90eXBlLm9uRnJhbWVFbmQgPSBmdW5jdGlvbiBvbkZyYW1lRW5kKCkge1xuICAgICAgICBpZiAodGhpcy5lbmRlZCkge1xuICAgICAgICAgICAgdmFyIHN0ZXBUYWtlbiA9IGZhbHNlO1xuXG4gICAgICAgICAgICBmb3IgKHZhciBrZXkgaW4gTkVYVF9TVEVQUykge1xuICAgICAgICAgICAgICAgIGlmIChORVhUX1NURVBTLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIG1heFN0ZXBzID0gdGhpc1trZXldO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmIChtYXhTdGVwcyA9PT0gdHJ1ZSB8fCAoMCwgX3V0aWxzLmlzTnVtKShtYXhTdGVwcykgJiYgbWF4U3RlcHMgPiB0aGlzW2tleSArIENPVU5UXSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpc1trZXkgKyBDT1VOVF0rKztcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0ZXBUYWtlbiA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzW05FWFRfU1RFUFNba2V5XV0oKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKCFzdGVwVGFrZW4pIHtcbiAgICAgICAgICAgICAgICB0aGlzLnN0b3AoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBUd2Vlbi5wcm90b3R5cGUuZmxpcFZhbHVlcyA9IGZ1bmN0aW9uIGZsaXBWYWx1ZXMoKSB7XG4gICAgICAgIHZhciB2YWx1ZXMgPSB0aGlzLnZhbHVlcztcblxuICAgICAgICB0aGlzLmVsYXBzZWQgPSB0aGlzLmR1cmF0aW9uIC0gdGhpcy5lbGFwc2VkO1xuXG4gICAgICAgIGZvciAodmFyIGtleSBpbiB2YWx1ZXMpIHtcbiAgICAgICAgICAgIGlmICh2YWx1ZXMuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgICAgICAgIHZhciB2YWx1ZSA9IHZhbHVlc1trZXldO1xuICAgICAgICAgICAgICAgIHZhciBfcmVmID0gW3ZhbHVlLmZyb20sIHZhbHVlLnRvXTtcbiAgICAgICAgICAgICAgICB2YWx1ZS50byA9IF9yZWZbMF07XG4gICAgICAgICAgICAgICAgdmFsdWUuZnJvbSA9IF9yZWZbMV07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xuXG4gICAgVHdlZW4ucHJvdG90eXBlLnJldmVyc2UgPSBmdW5jdGlvbiByZXZlcnNlKCkge1xuICAgICAgICB0aGlzLnBsYXlEaXJlY3Rpb24gKj0gLTE7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH07XG5cbiAgICBUd2Vlbi5wcm90b3R5cGUucmVzdGFydCA9IGZ1bmN0aW9uIHJlc3RhcnQoKSB7XG4gICAgICAgIHRoaXMuZWxhcHNlZCA9IHRoaXMucGxheURpcmVjdGlvbiA9PT0gMSA/IDAgOiB0aGlzLmR1cmF0aW9uO1xuICAgICAgICB0aGlzLnN0YXJ0ZWQgPSAoMCwgX3V0aWxzLmN1cnJlbnRUaW1lKSgpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xuXG4gICAgVHdlZW4ucHJvdG90eXBlLnNlZWsgPSBmdW5jdGlvbiBzZWVrKHByb2dyZXNzKSB7XG4gICAgICAgIHRoaXMuc2Vla1RpbWUodGhpcy5kdXJhdGlvbiAqIHByb2dyZXNzKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfTtcblxuICAgIFR3ZWVuLnByb3RvdHlwZS5zZWVrVGltZSA9IGZ1bmN0aW9uIHNlZWtUaW1lKGVsYXBzZWQpIHtcbiAgICAgICAgdGhpcy5vbmNlKCk7XG4gICAgICAgIHRoaXMuZWxhcHNlZCA9IGVsYXBzZWQ7XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfTtcblxuICAgIFR3ZWVuLnByb3RvdHlwZS5nZXREZWZhdWx0UHJvcHMgPSBmdW5jdGlvbiBnZXREZWZhdWx0UHJvcHMoKSB7XG4gICAgICAgIHJldHVybiBfZXh0ZW5kcyh7fSwgX0FjdGlvbi5wcm90b3R5cGUuZ2V0RGVmYXVsdFByb3BzLmNhbGwodGhpcyksIHtcbiAgICAgICAgICAgIGRlbGF5OiAwLFxuICAgICAgICAgICAgZGlsYXRlOiAxLFxuICAgICAgICAgICAgZHVyYXRpb246IDMwMCxcbiAgICAgICAgICAgIGxvb3A6IGZhbHNlLFxuICAgICAgICAgICAgeW95bzogZmFsc2UsXG4gICAgICAgICAgICBmbGlwOiBmYWxzZSxcbiAgICAgICAgICAgIHBsYXlEaXJlY3Rpb246IDEsXG4gICAgICAgICAgICBlbmRlZDogZmFsc2UsXG4gICAgICAgICAgICBlbGFwc2VkOiAwXG4gICAgICAgIH0pO1xuICAgIH07XG5cbiAgICBUd2Vlbi5wcm90b3R5cGUuZ2V0RGVmYXVsdFZhbHVlID0gZnVuY3Rpb24gZ2V0RGVmYXVsdFZhbHVlKCkge1xuICAgICAgICByZXR1cm4gX2V4dGVuZHMoe30sIF9BY3Rpb24ucHJvdG90eXBlLmdldERlZmF1bHRWYWx1ZS5jYWxsKHRoaXMpLCB7XG4gICAgICAgICAgICBkZWxheTogMCxcbiAgICAgICAgICAgIGR1cmF0aW9uOiAzMDAsXG4gICAgICAgICAgICBlYXNlOiBfcHJlc2V0RWFzaW5nMi5kZWZhdWx0LmVhc2VPdXQsXG4gICAgICAgICAgICBlbGFwc2VkOiAwLFxuICAgICAgICAgICAgc3RhZ2dlcjogMCxcbiAgICAgICAgICAgIHN0ZXBzOiAwLFxuICAgICAgICAgICAgZnJvbTogMCxcbiAgICAgICAgICAgIHRvOiAwLFxuICAgICAgICAgICAgcm91bmQ6IGZhbHNlXG4gICAgICAgIH0pO1xuICAgIH07XG5cbiAgICBUd2Vlbi5wcm90b3R5cGUuZ2V0RGVmYXVsdFZhbHVlUHJvcCA9IGZ1bmN0aW9uIGdldERlZmF1bHRWYWx1ZVByb3AoKSB7XG4gICAgICAgIHJldHVybiAndG8nO1xuICAgIH07XG5cbiAgICByZXR1cm4gVHdlZW47XG59KF9BY3Rpb24zLmRlZmF1bHQpO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBUd2Vlbjtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbk55WXk5aFkzUnBiMjV6TDFSM1pXVnVMbXB6SWwwc0ltNWhiV1Z6SWpwYlhTd2liV0Z3Y0dsdVozTWlPaUk3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPMEZCVlVFc1NVRkJUU3hSUVVGUkxFOUJRVkk3UVVGRFRpeEpRVUZOTEdGQlFXRTdRVUZEWml4VlFVRk5MRk5CUVU0N1FVRkRRU3hWUVVGTkxGTkJRVTQ3UVVGRFFTeFZRVUZOTEZsQlFVNDdRMEZJUlRzN096czdPenM3T3pzN08wRkJaMEpPTEVsQlFVMHNUMEZCVHl4VlFVRkRMRkZCUVVRc1JVRkJWeXhKUVVGWUxFVkJRV2xDTEVWQlFXcENMRVZCUVhGQ0xFbEJRWEpDTEVWQlFUaENPMEZCUTNaRExGRkJRVTBzYTBKQlFXdENMRzlDUVVGVExGRkJRVlFzUlVGQmJVSXNRMEZCYmtJc1JVRkJjMElzUTBGQmRFSXNRMEZCYkVJc1EwRkVhVU03UVVGRmRrTXNVVUZCVFN4blFrRkJaMElzUzBGQlN5eGxRVUZNTEVOQlFXaENMRU5CUm1sRE96dEJRVWwyUXl4WFFVRlBMR2REUVVGeFFpeGhRVUZ5UWl4RlFVRnZReXhKUVVGd1F5eEZRVUV3UXl4RlFVRXhReXhEUVVGUUxFTkJTblZETzBOQlFUbENPenRKUVU5Uk96czdPenM3T3pzN2IwSkJRMnBDTEhsQ1FVRlJPMEZCUTBvc01FSkJRVTBzUzBGQlRpeFpRVVJKTzBGQlJVb3NZVUZCU3l4UFFVRk1MRWRCUVdVc1EwRkJaaXhEUVVaSk8wRkJSMG9zWVVGQlN5eFRRVUZNTEVkQlFXbENMRXRCUVVzc1UwRkJUQ3hIUVVGcFFpeExRVUZMTEZOQlFVd3NSMEZCYVVJc1EwRkJha0lzUTBGSU9VSTdPMEZCUzBvc1pVRkJUeXhKUVVGUUxFTkJURWs3T3p0QlFVUlRMRzlDUVZOcVFpdzJRa0ZCVXl4UFFVRlBMRmxCUVZrc1UwRkJVenRCUVVOcVF5eFpRVUZOTEdsQ1FVRnBRaXhKUVVGRExFTkJRVXNzWVVGQlRDeExRVUYxUWl4RFFVRjJRaXhIUVVFMFFpeERRVUUzUWl4SFFVRnBReXhEUVVGcVF5eERRVVJWT3p0QlFVZHFReXhoUVVGTExFdEJRVXdzUjBGQllTeEpRVUZpTEVOQlNHbERPMEZCU1dwRExHRkJRVXNzVDBGQlRDeEpRVUZuUWl4UFFVRkRMRWRCUVZVc1MwRkJTeXhOUVVGTUxFZEJRV1VzUzBGQlN5eGhRVUZNTEVOQlNsUTdPMEZCVFdwRExHRkJRVXNzU1VGQlNTeEpRVUZKTEVOQlFVb3NSVUZCVHl4SlFVRkpMRXRCUVVzc1dVRkJUQ3hGUVVGdFFpeEhRVUYyUXl4RlFVRTBRenRCUVVONFF5eG5Ra0ZCVFN4TlFVRk5MRXRCUVVzc1UwRkJUQ3hEUVVGbExFTkJRV1lzUTBGQlRpeERRVVJyUXp0QlFVVjRReXhuUWtGQlRTeFJRVUZSTEV0QlFVc3NUVUZCVEN4RFFVRlpMRWRCUVZvc1EwRkJVaXhEUVVaclF6czdRVUZKZUVNc1owSkJRVWtzVjBGQlZ5eHZRa0ZCVXl4blEwRkJjVUlzUzBGQlN5eFBRVUZNTEVkQlFXVXNUVUZCVFN4TFFVRk9MRVZCUVdFc1EwRkJha1FzUlVGQmIwUXNUVUZCVFN4UlFVRk9MRU5CUVRkRUxFVkJRVGhGTEVOQlFUbEZMRVZCUVdsR0xFTkJRV3BHTEVOQlFWZzdPenRCUVVwdlF5eG5Ra0ZQY0VNc1lVRkJZU3hqUVVGaUxFVkJRVFpDTzBGQlF6ZENMSEZDUVVGTExFdEJRVXdzUjBGQllTeExRVUZpTEVOQlJEWkNPMkZCUVdwRE96czdRVUZRZDBNc1owSkJXWEJETEUxQlFVMHNTMEZCVGl4RlFVRmhPMEZCUTJJc01rSkJRVmNzZDBKQlFXRXNVVUZCWWl4RlFVRjFRaXhOUVVGTkxFdEJRVTRzUTBGQmJFTXNRMEZFWVR0aFFVRnFRanM3TzBGQlduZERMR2xDUVdsQ2VFTXNRMEZCVFN4UFFVRk9MRWRCUVdkQ0xFdEJRVXNzVVVGQlRDeEZRVUZsTEUxQlFVMHNTVUZCVGl4RlFVRlpMRTFCUVUwc1JVRkJUaXhGUVVGVkxFMUJRVTBzU1VGQlRpeERRVUZ5UkN4RFFXcENkME03VTBGQk5VTTdPenRCUVdaaExHOUNRVzlEYWtJc2JVTkJRV0U3UVVGRFZDeFpRVUZKTEV0QlFVc3NTMEZCVEN4RlFVRlpPMEZCUTFvc1owSkJRVWtzV1VGQldTeExRVUZhTEVOQlJGRTdPMEZCUjFvc2FVSkJRVXNzU1VGQlNTeEhRVUZLTEVsQlFWY3NWVUZCYUVJc1JVRkJORUk3UVVGRGVFSXNiMEpCUVVrc1YwRkJWeXhqUVVGWUxFTkJRVEJDTEVkQlFURkNMRU5CUVVvc1JVRkJiME03UVVGRGFFTXNkMEpCUVUwc1YwRkJWeXhMUVVGTExFZEJRVXdzUTBGQldDeERRVVF3UWpzN1FVRkhhRU1zZDBKQlFVa3NZVUZCWVN4SlFVRmlMRWxCUVhOQ0xHdENRVUZOTEZGQlFVNHNTMEZCYlVJc1YwRkJWeXhMUVVGTExFMUJRVTBzUzBGQlRpeERRVUZvUWl4RlFVRXJRanRCUVVONFJTdzJRa0ZCU3l4TlFVRk5MRXRCUVU0c1EwRkJUQ3hIUVVSM1JUdEJRVVY0UlN4dlEwRkJXU3hKUVVGYUxFTkJSbmRGTzBGQlIzaEZMRFpDUVVGTExGZEJRVmNzUjBGQldDeERRVUZNTEVsQlNIZEZPM0ZDUVVFMVJUdHBRa0ZJU2p0aFFVUktPenRCUVZsQkxHZENRVUZKTEVOQlFVTXNVMEZCUkN4RlFVRlpPMEZCUTFvc2NVSkJRVXNzU1VGQlRDeEhRVVJaTzJGQlFXaENPMU5CWmtvN096dEJRWEpEWVN4dlFrRXdSR3BDTEcxRFFVRmhPMEZCUTFRc1dVRkJUU3hUUVVGVExFdEJRVXNzVFVGQlRDeERRVVJPT3p0QlFVZFVMR0ZCUVVzc1QwRkJUQ3hIUVVGbExFdEJRVXNzVVVGQlRDeEhRVUZuUWl4TFFVRkxMRTlCUVV3c1EwRklkRUk3TzBGQlMxUXNZVUZCU3l4SlFVRkpMRWRCUVVvc1NVRkJWeXhOUVVGb1FpeEZRVUYzUWp0QlFVTndRaXhuUWtGQlNTeFBRVUZQTEdOQlFWQXNRMEZCYzBJc1IwRkJkRUlzUTBGQlNpeEZRVUZuUXp0QlFVTTFRaXh2UWtGQlRTeFJRVUZSTEU5QlFVOHNSMEZCVUN4RFFVRlNMRU5CUkhOQ096SkNRVVZJTEVOQlFVTXNUVUZCVFN4SlFVRk9MRVZCUVZrc1RVRkJUU3hGUVVGT0xFVkJSbFk3UVVGRk0wSXNjMEpCUVUwc1JVRkJUaXhYUVVZeVFqdEJRVVZxUWl4elFrRkJUU3hKUVVGT0xGZEJSbWxDTzJGQlFXaERPMU5CUkVvN08wRkJUMEVzWlVGQlR5eEpRVUZRTEVOQldsTTdPenRCUVRGRVNTeHZRa0Y1UldwQ0xEWkNRVUZWTzBGQlEwNHNZVUZCU3l4aFFVRk1MRWxCUVhOQ0xFTkJRVU1zUTBGQlJDeERRVVJvUWp0QlFVVk9MR1ZCUVU4c1NVRkJVQ3hEUVVaTk96czdRVUY2UlU4c2IwSkJPRVZxUWl3MlFrRkJWVHRCUVVOT0xHRkJRVXNzVDBGQlRDeEhRVUZsTEVsQlFVTXNRMEZCU3l4aFFVRk1MRXRCUVhWQ0xFTkJRWFpDTEVkQlFUUkNMRU5CUVRkQ0xFZEJRV2xETEV0QlFVc3NVVUZCVEN4RFFVUXhRenRCUVVWT0xHRkJRVXNzVDBGQlRDeEhRVUZsTEhsQ1FVRm1MRU5CUmswN1FVRkhUaXhsUVVGUExFbEJRVkFzUTBGSVRUczdPMEZCT1VWUExHOUNRVzlHYWtJc2NVSkJRVXNzVlVGQlZUdEJRVU5ZTEdGQlFVc3NVVUZCVEN4RFFVRmpMRXRCUVVzc1VVRkJUQ3hIUVVGblFpeFJRVUZvUWl4RFFVRmtMRU5CUkZjN1FVRkZXQ3hsUVVGUExFbEJRVkFzUTBGR1Z6czdPMEZCY0VaRkxHOUNRWGxHYWtJc05rSkJRVk1zVTBGQlV6dEJRVU5rTEdGQlFVc3NTVUZCVEN4SFFVUmpPMEZCUldRc1lVRkJTeXhQUVVGTUxFZEJRV1VzVDBGQlppeERRVVpqT3p0QlFVbGtMR1ZCUVU4c1NVRkJVQ3hEUVVwak96czdRVUY2UmtRc2IwSkJaMGRxUWl3MlEwRkJhMEk3UVVGRFpDdzBRa0ZEVHl4clFrRkJUU3hsUVVGT08wRkJRMGdzYlVKQlFVOHNRMEZCVUR0QlFVTkJMRzlDUVVGUkxFTkJRVkk3UVVGRFFTeHpRa0ZCVlN4SFFVRldPMEZCUTBFc2EwSkJRVTBzUzBGQlRqdEJRVU5CTEd0Q1FVRk5MRXRCUVU0N1FVRkRRU3hyUWtGQlRTeExRVUZPTzBGQlEwRXNNa0pCUVdVc1EwRkJaanRCUVVOQkxHMUNRVUZQTEV0QlFWQTdRVUZEUVN4eFFrRkJVeXhEUVVGVU8xVkJWa29zUTBGRVl6czdPMEZCYUVkRUxHOUNRU3RIYWtJc05rTkJRV3RDTzBGQlEyUXNORUpCUTA4c2EwSkJRVTBzWlVGQlRqdEJRVU5JTEcxQ1FVRlBMRU5CUVZBN1FVRkRRU3h6UWtGQlZTeEhRVUZXTzBGQlEwRXNhMEpCUVUwc2RVSkJRVThzVDBGQlVEdEJRVU5PTEhGQ1FVRlRMRU5CUVZRN1FVRkRRU3h4UWtGQlV5eERRVUZVTzBGQlEwRXNiVUpCUVU4c1EwRkJVRHRCUVVOQkxHdENRVUZOTEVOQlFVNDdRVUZEUVN4blFrRkJTU3hEUVVGS08wRkJRMEVzYlVKQlFVOHNTMEZCVUR0VlFWWktMRU5CUkdNN096dEJRUzlIUkN4dlFrRTRTR3BDTEhGRVFVRnpRanRCUVVOc1FpeGxRVUZQTEVsQlFWQXNRMEZFYTBJN096dFhRVGxJVENJc0ltWnBiR1VpT2lKVWQyVmxiaTVxY3lJc0luTnZkWEpqWlZKdmIzUWlPaUl2VlhObGNuTXZUV0YwZEM5VGFYUmxjeTl3YjNCdGIzUnBiMjRpTENKemIzVnlZMlZ6UTI5dWRHVnVkQ0k2V3lKcGJYQnZjblFnUVdOMGFXOXVJR1p5YjIwZ0p5NHZRV04wYVc5dUp6dGNibWx0Y0c5eWRDQmxZWE5wYm1jZ1puSnZiU0FuTGk5bFlYTnBibWN2Y0hKbGMyVjBMV1ZoYzJsdVp5YzdYRzVwYlhCdmNuUWdleUJqZFhKeVpXNTBWR2x0WlN3Z2FYTk9kVzBnZlNCbWNtOXRJQ2N1TGk5cGJtTXZkWFJwYkhNbk8xeHVhVzF3YjNKMElIdGNiaUFnSUNCeVpYTjBjbWxqZEN4Y2JpQWdJQ0JuWlhSUWNtOW5jbVZ6YzBaeWIyMVdZV3gxWlN4Y2JpQWdJQ0JuWlhSV1lXeDFaVVp5YjIxUWNtOW5jbVZ6Y3l4Y2JpQWdJQ0J6ZEdWd1VISnZaM0psYzNOY2JuMGdabkp2YlNBbkxpNHZhVzVqTDJOaGJHTW5PMXh1WEc1amIyNXpkQ0JEVDFWT1ZDQTlJQ2REYjNWdWRDYzdYRzVqYjI1emRDQk9SVmhVWDFOVVJWQlRJRDBnZTF4dUlDQWdJR3h2YjNBNklDZHlaWE4wWVhKMEp5eGNiaUFnSUNCNWIzbHZPaUFuY21WMlpYSnpaU2NzWEc0Z0lDQWdabXhwY0RvZ0oyWnNhWEJXWVd4MVpYTW5YRzU5TzF4dVhHNHZLbHh1SUNBZ0lFVmhjMlVnZG1Gc2RXVWdkMmwwYUdsdUlISmhibWRsWkNCd1lYSmhiV1YwWlhKelhHNGdJQ0FnWEc0Z0lDQWdRSEJoY21GdElGdHVkVzFpWlhKZE9pQlFjbTluY21WemN5QmlaWFIzWldWdUlEQWdZVzVrSURGY2JpQWdJQ0JBY0dGeVlXMGdXMjUxYldKbGNsMDZJRlpoYkhWbElHOW1JREFnY0hKdlozSmxjM05jYmlBZ0lDQkFjR0Z5WVcwZ1cyNTFiV0psY2wwNklGWmhiSFZsSUc5bUlERWdjSEp2WjNKbGMzTmNiaUFnSUNCQWNHRnlZVzBnVzNOMGNtbHVaeUI4ZkNCbWRXNWpkR2x2YmwwNklFNWhiV1VnYjJZZ2NISmxjMlYwSUdWaGMybHVaMXh1SUNBZ0lDQWdJQ0IwYnlCMWMyVWdiM0lnWjJWdVpYSmhkR1ZrSUdWaGMybHVaeUJtZFc1amRHbHZibHh1SUNBZ0lFQnlaWFIxY200Z1cyNTFiV0psY2wwNklGWmhiSFZsSUc5bUlHVmhjMlZrSUhCeWIyZHlaWE56SUdsdUlISmhibWRsWEc0cUx5QmNibU52Ym5OMElHVmhjMlVnUFNBb2NISnZaM0psYzNNc0lHWnliMjBzSUhSdkxDQmxZWE5sS1NBOVBpQjdYRzRnSUNBZ1kyOXVjM1FnY0hKdlozSmxjM05NYVcxcGRHVmtJRDBnY21WemRISnBZM1FvY0hKdlozSmxjM01zSURBc0lERXBPMXh1SUNBZ0lHTnZibk4wSUdWaGMyVmtVSEp2WjNKbGMzTWdQU0JsWVhObEtIQnliMmR5WlhOelRHbHRhWFJsWkNrN1hHNWNiaUFnSUNCeVpYUjFjbTRnWjJWMFZtRnNkV1ZHY205dFVISnZaM0psYzNNb1pXRnpaV1JRY205bmNtVnpjeXdnWm5KdmJTd2dkRzhwTzF4dWZUdGNibHh1Wlhod2IzSjBJR1JsWm1GMWJIUWdZMnhoYzNNZ1ZIZGxaVzRnWlhoMFpXNWtjeUJCWTNScGIyNGdlMXh1SUNBZ0lITjBZWEowS0NrZ2UxeHVJQ0FnSUNBZ0lDQnpkWEJsY2k1emRHRnlkQ2dwTzF4dUlDQWdJQ0FnSUNCMGFHbHpMbVZzWVhCelpXUWdQU0F3TzF4dUlDQWdJQ0FnSUNCMGFHbHpMbVpzYVhCRGIzVnVkQ0E5SUhSb2FYTXVlVzk1YjBOdmRXNTBJRDBnZEdocGN5NXNiMjl3UTI5MWJuUWdQU0F3TzF4dVhHNGdJQ0FnSUNBZ0lISmxkSFZ5YmlCMGFHbHpPMXh1SUNBZ0lIMWNibHh1SUNBZ0lHOXVWWEJrWVhSbEtIUjNaV1Z1TENCbWNtRnRaVk4wWVcxd0xDQmxiR0Z3YzJWa0tTQjdYRzRnSUNBZ0lDQWdJR052Ym5OMElIQnliMmR5WlhOelZHRnlaMlYwSUQwZ0tIUm9hWE11Y0d4aGVVUnBjbVZqZEdsdmJpQTlQVDBnTVNrZ1B5QXhJRG9nTUR0Y2JseHVJQ0FnSUNBZ0lDQjBhR2x6TG1WdVpHVmtJRDBnZEhKMVpUdGNiaUFnSUNBZ0lDQWdkR2hwY3k1bGJHRndjMlZrSUNzOUlDaGxiR0Z3YzJWa0lDb2dkR2hwY3k1a2FXeGhkR1VwSUNvZ2RHaHBjeTV3YkdGNVJHbHlaV04wYVc5dU8xeHVYRzRnSUNBZ0lDQWdJR1p2Y2lBb2JHVjBJR2tnUFNBd095QnBJRHdnZEdocGN5NXVkVzFXWVd4MVpVdGxlWE03SUdrckt5a2dlMXh1SUNBZ0lDQWdJQ0FnSUNBZ1kyOXVjM1FnYTJWNUlEMGdkR2hwY3k1MllXeDFaVXRsZVhOYmFWMDdYRzRnSUNBZ0lDQWdJQ0FnSUNCamIyNXpkQ0IyWVd4MVpTQTlJSFJvYVhNdWRtRnNkV1Z6VzJ0bGVWMDdYRzVjYmlBZ0lDQWdJQ0FnSUNBZ0lHeGxkQ0J3Y205bmNtVnpjeUE5SUhKbGMzUnlhV04wS0dkbGRGQnliMmR5WlhOelJuSnZiVlpoYkhWbEtIUm9hWE11Wld4aGNITmxaQ0F0SUhaaGJIVmxMbVJsYkdGNUxDQXdMQ0IyWVd4MVpTNWtkWEpoZEdsdmJpa3NJREFzSURFcE8xeHVYRzRnSUNBZ0lDQWdJQ0FnSUNBdkx5Qk5ZWEpySUZSM1pXVnVJR0Z6SUU1UFZDQmxibVJsWkNCcFppQnpkR2xzYkNCcGJpQndjbTluY21WemMxeHVJQ0FnSUNBZ0lDQWdJQ0FnYVdZZ0tIQnliMmR5WlhOeklDRTlQU0J3Y205bmNtVnpjMVJoY21kbGRDa2dlMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJSFJvYVhNdVpXNWtaV1FnUFNCbVlXeHpaVHRjYmlBZ0lDQWdJQ0FnSUNBZ0lIMWNibHh1SUNBZ0lDQWdJQ0FnSUNBZ0x5OGdVM1JsY0NCd2NtOW5jbVZ6Y3lCcFppQjNaU2R5WlNCemRHVndjR2x1WjF4dUlDQWdJQ0FnSUNBZ0lDQWdhV1lnS0haaGJIVmxMbk4wWlhCektTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdjSEp2WjNKbGMzTWdQU0J6ZEdWd1VISnZaM0psYzNNb2NISnZaM0psYzNNc0lIWmhiSFZsTG5OMFpYQnpLVHRjYmlBZ0lDQWdJQ0FnSUNBZ0lIMWNibHh1SUNBZ0lDQWdJQ0FnSUNBZ0x5OGdSV0Z6WlNCd2NtOW5jbVZ6YzF4dUlDQWdJQ0FnSUNBZ0lDQWdkbUZzZFdVdVkzVnljbVZ1ZENBOUlHVmhjMlVvY0hKdlozSmxjM01zSUhaaGJIVmxMbVp5YjIwc0lIWmhiSFZsTG5SdkxDQjJZV3gxWlM1bFlYTmxLVHRjYmlBZ0lDQWdJQ0FnZlZ4dUlDQWdJSDFjYmx4dUlDQWdJRzl1Um5KaGJXVkZibVFvS1NCN1hHNGdJQ0FnSUNBZ0lHbG1JQ2gwYUdsekxtVnVaR1ZrS1NCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0JzWlhRZ2MzUmxjRlJoYTJWdUlEMGdabUZzYzJVN1hHNWNiaUFnSUNBZ0lDQWdJQ0FnSUdadmNpQW9iR1YwSUd0bGVTQnBiaUJPUlZoVVgxTlVSVkJUS1NCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2FXWWdLRTVGV0ZSZlUxUkZVRk11YUdGelQzZHVVSEp2Y0dWeWRIa29hMlY1S1NrZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0JqYjI1emRDQnRZWGhUZEdWd2N5QTlJSFJvYVhOYmEyVjVYVHRjYmx4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQnBaaUFvYldGNFUzUmxjSE1nUFQwOUlIUnlkV1VnZkh3Z0tHbHpUblZ0S0cxaGVGTjBaWEJ6S1NBbUppQnRZWGhUZEdWd2N5QStJSFJvYVhOYmEyVjVJQ3NnUTA5VlRsUmRLU2tnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnZEdocGMxdHJaWGtnS3lCRFQxVk9WRjByS3p0Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUhOMFpYQlVZV3RsYmlBOUlIUnlkV1U3WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0IwYUdselcwNUZXRlJmVTFSRlVGTmJhMlY1WFYwb0tUdGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnZlZ4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUgxY2JpQWdJQ0FnSUNBZ0lDQWdJSDFjYmx4dUlDQWdJQ0FnSUNBZ0lDQWdhV1lnS0NGemRHVndWR0ZyWlc0cElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQjBhR2x6TG5OMGIzQW9LVHRjYmlBZ0lDQWdJQ0FnSUNBZ0lIMWNiaUFnSUNBZ0lDQWdmVnh1SUNBZ0lIMWNibHh1SUNBZ0lHWnNhWEJXWVd4MVpYTW9LU0I3WEc0Z0lDQWdJQ0FnSUdOdmJuTjBJSFpoYkhWbGN5QTlJSFJvYVhNdWRtRnNkV1Z6TzF4dVhHNGdJQ0FnSUNBZ0lIUm9hWE11Wld4aGNITmxaQ0E5SUhSb2FYTXVaSFZ5WVhScGIyNGdMU0IwYUdsekxtVnNZWEJ6WldRN1hHNWNiaUFnSUNBZ0lDQWdabTl5SUNoc1pYUWdhMlY1SUdsdUlIWmhiSFZsY3lrZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnYVdZZ0tIWmhiSFZsY3k1b1lYTlBkMjVRY205d1pYSjBlU2hyWlhrcEtTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdZMjl1YzNRZ2RtRnNkV1VnUFNCMllXeDFaWE5iYTJWNVhUdGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQmJkbUZzZFdVdWRHOHNJSFpoYkhWbExtWnliMjFkSUQwZ1czWmhiSFZsTG1aeWIyMHNJSFpoYkhWbExuUnZYVHRjYmlBZ0lDQWdJQ0FnSUNBZ0lIMWNiaUFnSUNBZ0lDQWdmVnh1WEc0Z0lDQWdJQ0FnSUhKbGRIVnliaUIwYUdsek8xeHVJQ0FnSUgxY2JseHVJQ0FnSUhKbGRtVnljMlVvS1NCN1hHNGdJQ0FnSUNBZ0lIUm9hWE11Y0d4aGVVUnBjbVZqZEdsdmJpQXFQU0F0TVR0Y2JpQWdJQ0FnSUNBZ2NtVjBkWEp1SUhSb2FYTTdYRzRnSUNBZ2ZWeHVYRzRnSUNBZ2NtVnpkR0Z5ZENncElIdGNiaUFnSUNBZ0lDQWdkR2hwY3k1bGJHRndjMlZrSUQwZ0tIUm9hWE11Y0d4aGVVUnBjbVZqZEdsdmJpQTlQVDBnTVNrZ1B5QXdJRG9nZEdocGN5NWtkWEpoZEdsdmJqdGNiaUFnSUNBZ0lDQWdkR2hwY3k1emRHRnlkR1ZrSUQwZ1kzVnljbVZ1ZEZScGJXVW9LVHRjYmlBZ0lDQWdJQ0FnY21WMGRYSnVJSFJvYVhNN1hHNGdJQ0FnZlZ4dVhHNGdJQ0FnYzJWbGF5aHdjbTluY21WemN5a2dlMXh1SUNBZ0lDQWdJQ0IwYUdsekxuTmxaV3RVYVcxbEtIUm9hWE11WkhWeVlYUnBiMjRnS2lCd2NtOW5jbVZ6Y3lrN1hHNGdJQ0FnSUNBZ0lISmxkSFZ5YmlCMGFHbHpPMXh1SUNBZ0lIMWNibHh1SUNBZ0lITmxaV3RVYVcxbEtHVnNZWEJ6WldRcElIdGNiaUFnSUNBZ0lDQWdkR2hwY3k1dmJtTmxLQ2s3WEc0Z0lDQWdJQ0FnSUhSb2FYTXVaV3hoY0hObFpDQTlJR1ZzWVhCelpXUTdYRzVjYmlBZ0lDQWdJQ0FnY21WMGRYSnVJSFJvYVhNN1hHNGdJQ0FnZlZ4dUlDQWdJRnh1SUNBZ0lHZGxkRVJsWm1GMWJIUlFjbTl3Y3lncElIdGNiaUFnSUNBZ0lDQWdjbVYwZFhKdUlIdGNiaUFnSUNBZ0lDQWdJQ0FnSUM0dUxuTjFjR1Z5TG1kbGRFUmxabUYxYkhSUWNtOXdjeWdwTEZ4dUlDQWdJQ0FnSUNBZ0lDQWdaR1ZzWVhrNklEQXNYRzRnSUNBZ0lDQWdJQ0FnSUNCa2FXeGhkR1U2SURFc1hHNGdJQ0FnSUNBZ0lDQWdJQ0JrZFhKaGRHbHZiam9nTXpBd0xGeHVJQ0FnSUNBZ0lDQWdJQ0FnYkc5dmNEb2dabUZzYzJVc1hHNGdJQ0FnSUNBZ0lDQWdJQ0I1YjNsdk9pQm1ZV3h6WlN4Y2JpQWdJQ0FnSUNBZ0lDQWdJR1pzYVhBNklHWmhiSE5sTEZ4dUlDQWdJQ0FnSUNBZ0lDQWdjR3hoZVVScGNtVmpkR2x2YmpvZ01TeGNiaUFnSUNBZ0lDQWdJQ0FnSUdWdVpHVmtPaUJtWVd4elpTeGNiaUFnSUNBZ0lDQWdJQ0FnSUdWc1lYQnpaV1E2SURCY2JpQWdJQ0FnSUNBZ2ZUdGNiaUFnSUNCOVhHNWNiaUFnSUNCblpYUkVaV1poZFd4MFZtRnNkV1VvS1NCN1hHNGdJQ0FnSUNBZ0lISmxkSFZ5YmlCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0F1TGk1emRYQmxjaTVuWlhSRVpXWmhkV3gwVm1Gc2RXVW9LU3hjYmlBZ0lDQWdJQ0FnSUNBZ0lHUmxiR0Y1T2lBd0xGeHVJQ0FnSUNBZ0lDQWdJQ0FnWkhWeVlYUnBiMjQ2SURNd01DeGNiaUFnSUNBZ0lDQWdJQ0FnSUdWaGMyVTZJR1ZoYzJsdVp5NWxZWE5sVDNWMExGeHVJQ0FnSUNBZ0lDQWdJQ0FnWld4aGNITmxaRG9nTUN4Y2JpQWdJQ0FnSUNBZ0lDQWdJSE4wWVdkblpYSTZJREFzWEc0Z0lDQWdJQ0FnSUNBZ0lDQnpkR1Z3Y3pvZ01DeGNiaUFnSUNBZ0lDQWdJQ0FnSUdaeWIyMDZJREFzWEc0Z0lDQWdJQ0FnSUNBZ0lDQjBiem9nTUN4Y2JpQWdJQ0FnSUNBZ0lDQWdJSEp2ZFc1a09pQm1ZV3h6WlZ4dUlDQWdJQ0FnSUNCOU8xeHVJQ0FnSUgxY2JseHVJQ0FnSUdkbGRFUmxabUYxYkhSV1lXeDFaVkJ5YjNBb0tTQjdYRzRnSUNBZ0lDQWdJSEpsZEhWeWJpQW5kRzhuTzF4dUlDQWdJSDFjYm4xY2JpSmRmUT09XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9hY3Rpb25zL1R3ZWVuLmpzXG4gKiogbW9kdWxlIGlkID0gNlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9O1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX0FjdGlvbjIgPSByZXF1aXJlKCcuL0FjdGlvbicpO1xuXG52YXIgX0FjdGlvbjMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9BY3Rpb24yKTtcblxudmFyIF9jYWxjID0gcmVxdWlyZSgnLi4vaW5jL2NhbGMnKTtcblxudmFyIF91dGlscyA9IHJlcXVpcmUoJy4uL2luYy91dGlscycpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmICghc2VsZikgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIGNhbGwgJiYgKHR5cGVvZiBjYWxsID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpID8gY2FsbCA6IHNlbGY7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgXCIgKyB0eXBlb2Ygc3VwZXJDbGFzcyk7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgZW51bWVyYWJsZTogZmFsc2UsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcykgOiBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzOyB9XG5cbnZhciBQaHlzaWNzID0gZnVuY3Rpb24gKF9BY3Rpb24pIHtcbiAgICBfaW5oZXJpdHMoUGh5c2ljcywgX0FjdGlvbik7XG5cbiAgICBmdW5jdGlvbiBQaHlzaWNzKCkge1xuICAgICAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgUGh5c2ljcyk7XG5cbiAgICAgICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgICAgICAgIGFyZ3NbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgX3RoaXMgPSBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCBfQWN0aW9uLmNhbGwuYXBwbHkoX0FjdGlvbiwgW3RoaXNdLmNvbmNhdChhcmdzKSkpO1xuXG4gICAgICAgIF90aGlzLmluYWN0aXZlRnJhbWVzID0gMDtcbiAgICAgICAgX3RoaXMuY2FsY3VsYXRlc1ZlbG9jaXR5ID0gdHJ1ZTtcbiAgICAgICAgcmV0dXJuIF90aGlzO1xuICAgIH1cblxuICAgIFBoeXNpY3MucHJvdG90eXBlLm9uVXBkYXRlID0gZnVuY3Rpb24gb25VcGRhdGUocGh5c2ljcywgZnJhbWVTdGFtcCwgZWxhcHNlZCkge1xuICAgICAgICB0aGlzLmhhc0NoYW5nZWQgPSBmYWxzZTtcblxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubnVtVmFsdWVLZXlzOyBpKyspIHtcbiAgICAgICAgICAgIHZhciBrZXkgPSB0aGlzLnZhbHVlS2V5c1tpXTtcbiAgICAgICAgICAgIHZhciB2YWx1ZSA9IHRoaXMudmFsdWVzW2tleV07XG4gICAgICAgICAgICB2YXIgcHJldmlvdXNWYWx1ZSA9IHZhbHVlLnByZXY7XG5cbiAgICAgICAgICAgIC8vIEFwcGx5IGFjY2VsZXJhdGlvblxuICAgICAgICAgICAgdmFsdWUudmVsb2NpdHkgKz0gKDAsIF9jYWxjLnNwZWVkUGVyRnJhbWUpKHZhbHVlLmFjY2VsZXJhdGlvbiwgZWxhcHNlZCk7XG5cbiAgICAgICAgICAgIC8vIEFwcGx5IGZyaWN0aW9uXG4gICAgICAgICAgICB2YWx1ZS52ZWxvY2l0eSAqPSBNYXRoLnBvdygxIC0gdmFsdWUuZnJpY3Rpb24sIGVsYXBzZWQgLyAxMDApO1xuXG4gICAgICAgICAgICAvLyBBcHBseSBzcHJpbmdcbiAgICAgICAgICAgIGlmICh2YWx1ZS5zcHJpbmcgJiYgKDAsIF91dGlscy5pc051bSkodmFsdWUudG8pKSB7XG4gICAgICAgICAgICAgICAgdmFyIGRpc3RhbmNlVG9UYXJnZXQgPSB2YWx1ZS50byAtIHZhbHVlLmN1cnJlbnQ7XG4gICAgICAgICAgICAgICAgdmFsdWUudmVsb2NpdHkgKz0gZGlzdGFuY2VUb1RhcmdldCAqICgwLCBfY2FsYy5zcGVlZFBlckZyYW1lKSh2YWx1ZS5zcHJpbmcsIGVsYXBzZWQpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBBcHBseSBsYXRlc3QgdmVsb2NpdHlcbiAgICAgICAgICAgIHZhbHVlLmN1cnJlbnQgKz0gKDAsIF9jYWxjLnNwZWVkUGVyRnJhbWUpKHZhbHVlLnZlbG9jaXR5LCBlbGFwc2VkKTtcblxuICAgICAgICAgICAgLy8gQ2hlY2sgaWYgdmFsdWUgaGFzIGNoYW5nZWRcbiAgICAgICAgICAgIGlmICh2YWx1ZS5jdXJyZW50ICE9PSBwcmV2aW91c1ZhbHVlIHx8IE1hdGguYWJzKHZhbHVlLnZlbG9jaXR5KSA+PSB2YWx1ZS5zdG9wU3BlZWQgfHwgdmFsdWUuc3ByaW5nICYmIHZhbHVlLmN1cnJlbnQgIT09IHZhbHVlLnRvKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5oYXNDaGFuZ2VkID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBQaHlzaWNzLnByb3RvdHlwZS5vbkZyYW1lRW5kID0gZnVuY3Rpb24gb25GcmFtZUVuZCgpIHtcbiAgICAgICAgaWYgKHRoaXMuYXV0b0VuZCkge1xuICAgICAgICAgICAgdGhpcy5pbmFjdGl2ZUZyYW1lcyA9IHRoaXMuaGFzQ2hhbmdlZCA/IDEgOiB0aGlzLmluYWN0aXZlRnJhbWVzICsgMTtcblxuICAgICAgICAgICAgaWYgKHRoaXMuaW5hY3RpdmVGcmFtZXMgPj0gdGhpcy5tYXhJbmFjdGl2ZUZyYW1lcykge1xuICAgICAgICAgICAgICAgIHRoaXMuc3RvcCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcblxuICAgIC8qXG4gICAgICAgICMgR2V0IGRlZmF1bHQgU2ltdWxhdGUgcHJvcHNcbiAgICAgICAgIEByZXR1cm4gW29iamVjdF1cbiAgICAqL1xuXG4gICAgUGh5c2ljcy5wcm90b3R5cGUuZ2V0RGVmYXVsdFByb3BzID0gZnVuY3Rpb24gZ2V0RGVmYXVsdFByb3BzKCkge1xuICAgICAgICByZXR1cm4gX2V4dGVuZHMoe30sIF9BY3Rpb24ucHJvdG90eXBlLmdldERlZmF1bHRQcm9wcy5jYWxsKHRoaXMpLCB7XG4gICAgICAgICAgICBhdXRvRW5kOiB0cnVlLFxuICAgICAgICAgICAgbWF4SW5hY3RpdmVGcmFtZXM6IDNcbiAgICAgICAgfSk7XG4gICAgfTtcblxuICAgIC8qXG4gICAgICAgICMgR2V0IGRlZmF1bHQgU2ltdWxhdGUgdmFsdWUgcHJvcHNcbiAgICAgICAgIEByZXR1cm4gW29iamVjdF1cbiAgICAqL1xuXG4gICAgUGh5c2ljcy5wcm90b3R5cGUuZ2V0RGVmYXVsdFZhbHVlID0gZnVuY3Rpb24gZ2V0RGVmYXVsdFZhbHVlKCkge1xuICAgICAgICByZXR1cm4gX2V4dGVuZHMoe30sIF9BY3Rpb24ucHJvdG90eXBlLmdldERlZmF1bHRWYWx1ZS5jYWxsKHRoaXMpLCB7XG4gICAgICAgICAgICBhY2NlbGVyYXRpb246IDAsIC8vIFtudW1iZXJdOiBBY2NlbGVyYXRpb24gdG8gYXBwbHkgdG8gdmFsdWUsIGluIHVuaXRzIHBlciBzZWNvbmRcbiAgICAgICAgICAgIGJvdW5jZTogMCwgLy8gW251bWJlcl06IEZhY3RvciB0byBtdWx0aXBseSB2ZWxvY2l0eSBieSBvbiBib3VuY2VcbiAgICAgICAgICAgIHNwcmluZzogMCwgLy8gW251bWJlcl06IFNwcmluZyBzdHJlbmd0aCBkdXJpbmcgJ3N0cmluZydcbiAgICAgICAgICAgIHN0b3BTcGVlZDogMC4wMDAxLCAvLyBbbnVtYmVyXTogU3RvcCBzaW11bGF0aW9uIHVuZGVyIHRoaXMgc3BlZWRcbiAgICAgICAgICAgIGZyaWN0aW9uOiAwIC8vIFtudW1iZXJdOiBGcmljdGlvbiB0byBhcHBseSBwZXIgZnJhbWUsIDAtMVxuICAgICAgICB9KTtcbiAgICB9O1xuXG4gICAgLypcbiAgICAgICAgIyBHZXQgZGVmYXVsdCBTaW11bGF0ZSB2YWx1ZSBwcm9wZXJ0eSBuYW1lXG4gICAgICAgICMjIFNldCB2YWx1ZXMgdG8gdGhpcyB3aGVuIGEgYHZhbHVlYCBpcyBub3QgcHJvdmlkZWQgYXMgYW4gb2JqZWN0XG4gICAgICAgICBAcmV0dXJuIFtzdHJpbmddXG4gICAgKi9cblxuICAgIFBoeXNpY3MucHJvdG90eXBlLmdldERlZmF1bHRWYWx1ZVByb3AgPSBmdW5jdGlvbiBnZXREZWZhdWx0VmFsdWVQcm9wKCkge1xuICAgICAgICByZXR1cm4gJ3ZlbG9jaXR5JztcbiAgICB9O1xuXG4gICAgcmV0dXJuIFBoeXNpY3M7XG59KF9BY3Rpb24zLmRlZmF1bHQpO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBQaHlzaWNzO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluTnlZeTloWTNScGIyNXpMMUJvZVhOcFkzTXVhbk1pWFN3aWJtRnRaWE1pT2x0ZExDSnRZWEJ3YVc1bmN5STZJanM3T3pzN096czdPenM3T3pzN096czdPenM3T3p0SlFVbHhRanM3TzBGQlJXcENMR0ZCUm1sQ0xFOUJSV3BDTEVkQlFYRkNPemhDUVVaS0xGTkJSVWs3T3pCRFFVRk9PenRUUVVGTk96dHhSRUZEYWtJc01FTkJRVk1zUzBGQlZDeEhRVVJwUWpzN1FVRkZha0lzWTBGQlN5eGpRVUZNTEVkQlFYTkNMRU5CUVhSQ0xFTkJSbWxDTzBGQlIycENMR05CUVVzc2EwSkJRVXdzUjBGQk1FSXNTVUZCTVVJc1EwRklhVUk3TzB0QlFYSkNPenRCUVVacFFpeHpRa0ZSYWtJc05rSkJRVk1zVTBGQlV5eFpRVUZaTEZOQlFWTTdRVUZEYmtNc1lVRkJTeXhWUVVGTUxFZEJRV3RDTEV0QlFXeENMRU5CUkcxRE96dEJRVWR1UXl4aFFVRkxMRWxCUVVrc1NVRkJTU3hEUVVGS0xFVkJRVThzU1VGQlNTeExRVUZMTEZsQlFVd3NSVUZCYlVJc1IwRkJka01zUlVGQk5FTTdRVUZEZUVNc1owSkJRVTBzVFVGQlRTeExRVUZMTEZOQlFVd3NRMEZCWlN4RFFVRm1MRU5CUVU0c1EwRkVhME03UVVGRmVFTXNaMEpCUVUwc1VVRkJVU3hMUVVGTExFMUJRVXdzUTBGQldTeEhRVUZhTEVOQlFWSXNRMEZHYTBNN1FVRkhlRU1zWjBKQlFVMHNaMEpCUVdkQ0xFMUJRVTBzU1VGQlRqczdPMEZCU0d0Q0xHbENRVTE0UXl4RFFVRk5MRkZCUVU0c1NVRkJhMElzZVVKQlFXTXNUVUZCVFN4WlFVRk9MRVZCUVc5Q0xFOUJRV3hETEVOQlFXeENPenM3UVVGT2QwTXNhVUpCVTNoRExFTkJRVTBzVVVGQlRpeGhRVUZ0UWl4SlFVRkpMRTFCUVUwc1VVRkJUaXhGUVVGdlFpeFZRVUZWTEVkQlFWWXNRMEZCTTBNN096dEJRVlIzUXl4blFrRlpjRU1zVFVGQlRTeE5RVUZPTEVsQlFXZENMR3RDUVVGTkxFMUJRVTBzUlVGQlRpeERRVUYwUWl4RlFVRnBRenRCUVVOcVF5eHZRa0ZCVFN4dFFrRkJiVUlzVFVGQlRTeEZRVUZPTEVkQlFWY3NUVUZCVFN4UFFVRk9MRU5CUkVnN1FVRkZha01zYzBKQlFVMHNVVUZCVGl4SlFVRnJRaXh0UWtGQmJVSXNlVUpCUVdNc1RVRkJUU3hOUVVGT0xFVkJRV01zVDBGQk5VSXNRMEZCYmtJc1EwRkdaVHRoUVVGeVF6czdPMEZCV25kRExHbENRV3RDZUVNc1EwRkJUU3hQUVVGT0xFbEJRV2xDTEhsQ1FVRmpMRTFCUVUwc1VVRkJUaXhGUVVGblFpeFBRVUU1UWl4RFFVRnFRanM3TzBGQmJFSjNReXhuUWtGeFFuQkRMRTFCUVUwc1QwRkJUaXhMUVVGclFpeGhRVUZzUWl4SlFVRnRReXhMUVVGTExFZEJRVXdzUTBGQlV5eE5RVUZOTEZGQlFVNHNRMEZCVkN4SlFVRTBRaXhOUVVGTkxGTkJRVTRzU1VGQmIwSXNUVUZCVFN4TlFVRk9MRWxCUVdkQ0xFMUJRVTBzVDBGQlRpeExRVUZyUWl4TlFVRk5MRVZCUVU0c1JVRkJWenRCUVVOb1NTeHhRa0ZCU3l4VlFVRk1MRWRCUVd0Q0xFbEJRV3hDTEVOQlJHZEpPMkZCUVhCSk8xTkJja0pLT3pzN1FVRllZU3h6UWtGelEycENMRzFEUVVGaE8wRkJRMVFzV1VGQlNTeExRVUZMTEU5QlFVd3NSVUZCWXp0QlFVTmtMR2xDUVVGTExHTkJRVXdzUjBGQmMwSXNTMEZCU3l4VlFVRk1MRWRCUVd0Q0xFTkJRV3hDTEVkQlFYTkNMRXRCUVVzc1kwRkJUQ3hIUVVGelFpeERRVUYwUWl4RFFVUTVRanM3UVVGSFpDeG5Ra0ZCU1N4TFFVRkxMR05CUVV3c1NVRkJkVUlzUzBGQlN5eHBRa0ZCVEN4RlFVRjNRanRCUVVNdlF5eHhRa0ZCU3l4SlFVRk1MRWRCUkN0RE8yRkJRVzVFTzFOQlNFbzdPenM3T3pzN08wRkJka05oTEhOQ1FYRkVha0lzTmtOQlFXdENPMEZCUTJRc05FSkJRMDhzYTBKQlFVMHNaVUZCVGp0QlFVTklMSEZDUVVGVExFbEJRVlE3UVVGRFFTd3JRa0ZCYlVJc1EwRkJia0k3VlVGSVNpeERRVVJqT3pzN096czdPenRCUVhKRVJDeHpRa0ZyUldwQ0xEWkRRVUZyUWp0QlFVTmtMRFJDUVVOUExHdENRVUZOTEdWQlFVNDdRVUZEU0N3d1FrRkJZeXhEUVVGa08wRkJRMEVzYjBKQlFWRXNRMEZCVWp0QlFVTkJMRzlDUVVGUkxFTkJRVkk3UVVGRFFTeDFRa0ZCVnl4TlFVRllPMEZCUTBFc2MwSkJRVlVzUTBGQlZqdFZRVTVLTEVOQlJHTTdPenM3T3pzN096dEJRV3hGUkN4elFrRnRSbXBDTEhGRVFVRnpRanRCUVVOc1FpeGxRVUZQTEZWQlFWQXNRMEZFYTBJN096dFhRVzVHVENJc0ltWnBiR1VpT2lKUWFIbHphV056TG1weklpd2ljMjkxY21ObFVtOXZkQ0k2SWk5VmMyVnljeTlOWVhSMEwxTnBkR1Z6TDNCdmNHMXZkR2x2YmlJc0luTnZkWEpqWlhORGIyNTBaVzUwSWpwYkltbHRjRzl5ZENCQlkzUnBiMjRnWm5KdmJTQW5MaTlCWTNScGIyNG5PMXh1YVcxd2IzSjBJSHNnYzNCbFpXUlFaWEpHY21GdFpTQjlJR1p5YjIwZ0p5NHVMMmx1WXk5allXeGpKenRjYm1sdGNHOXlkQ0I3SUdselRuVnRJSDBnWm5KdmJTQW5MaTR2YVc1akwzVjBhV3h6Snp0Y2JseHVaWGh3YjNKMElHUmxabUYxYkhRZ1kyeGhjM01nVUdoNWMybGpjeUJsZUhSbGJtUnpJRUZqZEdsdmJpQjdYRzVjYmlBZ0lDQmpiMjV6ZEhKMVkzUnZjaWd1TGk1aGNtZHpLU0I3WEc0Z0lDQWdJQ0FnSUhOMWNHVnlLQzR1TG1GeVozTXBPMXh1SUNBZ0lDQWdJQ0IwYUdsekxtbHVZV04wYVhabFJuSmhiV1Z6SUQwZ01EdGNiaUFnSUNBZ0lDQWdkR2hwY3k1allXeGpkV3hoZEdWelZtVnNiMk5wZEhrZ1BTQjBjblZsTzF4dUlDQWdJSDFjYmx4dUlDQWdJRzl1VlhCa1lYUmxLSEJvZVhOcFkzTXNJR1p5WVcxbFUzUmhiWEFzSUdWc1lYQnpaV1FwSUh0Y2JpQWdJQ0FnSUNBZ2RHaHBjeTVvWVhORGFHRnVaMlZrSUQwZ1ptRnNjMlU3WEc1Y2JpQWdJQ0FnSUNBZ1ptOXlJQ2hzWlhRZ2FTQTlJREE3SUdrZ1BDQjBhR2x6TG01MWJWWmhiSFZsUzJWNWN6c2dhU3NyS1NCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0JqYjI1emRDQnJaWGtnUFNCMGFHbHpMblpoYkhWbFMyVjVjMXRwWFR0Y2JpQWdJQ0FnSUNBZ0lDQWdJR052Ym5OMElIWmhiSFZsSUQwZ2RHaHBjeTUyWVd4MVpYTmJhMlY1WFR0Y2JpQWdJQ0FnSUNBZ0lDQWdJR052Ym5OMElIQnlaWFpwYjNWelZtRnNkV1VnUFNCMllXeDFaUzV3Y21WMk8xeHVYRzRnSUNBZ0lDQWdJQ0FnSUNBdkx5QkJjSEJzZVNCaFkyTmxiR1Z5WVhScGIyNWNiaUFnSUNBZ0lDQWdJQ0FnSUhaaGJIVmxMblpsYkc5amFYUjVJQ3M5SUhOd1pXVmtVR1Z5Um5KaGJXVW9kbUZzZFdVdVlXTmpaV3hsY21GMGFXOXVMQ0JsYkdGd2MyVmtLVHRjYmx4dUlDQWdJQ0FnSUNBZ0lDQWdMeThnUVhCd2JIa2dabkpwWTNScGIyNWNiaUFnSUNBZ0lDQWdJQ0FnSUhaaGJIVmxMblpsYkc5amFYUjVJQ285SUNneElDMGdkbUZzZFdVdVpuSnBZM1JwYjI0cElDb3FJQ2hsYkdGd2MyVmtJQzhnTVRBd0tUdGNibHh1SUNBZ0lDQWdJQ0FnSUNBZ0x5OGdRWEJ3YkhrZ2MzQnlhVzVuWEc0Z0lDQWdJQ0FnSUNBZ0lDQnBaaUFvZG1Gc2RXVXVjM0J5YVc1bklDWW1JR2x6VG5WdEtIWmhiSFZsTG5SdktTa2dlMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJR052Ym5OMElHUnBjM1JoYm1ObFZHOVVZWEpuWlhRZ1BTQjJZV3gxWlM1MGJ5QXRJSFpoYkhWbExtTjFjbkpsYm5RN1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2RtRnNkV1V1ZG1Wc2IyTnBkSGtnS3owZ1pHbHpkR0Z1WTJWVWIxUmhjbWRsZENBcUlITndaV1ZrVUdWeVJuSmhiV1VvZG1Gc2RXVXVjM0J5YVc1bkxDQmxiR0Z3YzJWa0tUdGNiaUFnSUNBZ0lDQWdJQ0FnSUgxY2JseHVJQ0FnSUNBZ0lDQWdJQ0FnTHk4Z1FYQndiSGtnYkdGMFpYTjBJSFpsYkc5amFYUjVYRzRnSUNBZ0lDQWdJQ0FnSUNCMllXeDFaUzVqZFhKeVpXNTBJQ3M5SUhOd1pXVmtVR1Z5Um5KaGJXVW9kbUZzZFdVdWRtVnNiMk5wZEhrc0lHVnNZWEJ6WldRcE8xeHVJQ0FnSUNBZ0lDQWdJQ0FnWEc0Z0lDQWdJQ0FnSUNBZ0lDQXZMeUJEYUdWamF5QnBaaUIyWVd4MVpTQm9ZWE1nWTJoaGJtZGxaRnh1SUNBZ0lDQWdJQ0FnSUNBZ2FXWWdLSFpoYkhWbExtTjFjbkpsYm5RZ0lUMDlJSEJ5WlhacGIzVnpWbUZzZFdVZ2ZId2dUV0YwYUM1aFluTW9kbUZzZFdVdWRtVnNiMk5wZEhrcElENDlJSFpoYkhWbExuTjBiM0JUY0dWbFpDQjhmQ0FvZG1Gc2RXVXVjM0J5YVc1bklDWW1JSFpoYkhWbExtTjFjbkpsYm5RZ0lUMDlJSFpoYkhWbExuUnZLU2tnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUhSb2FYTXVhR0Z6UTJoaGJtZGxaQ0E5SUhSeWRXVTdYRzRnSUNBZ0lDQWdJQ0FnSUNCOVhHNGdJQ0FnSUNBZ0lIMWNiaUFnSUNCOVhHNWNiaUFnSUNCdmJrWnlZVzFsUlc1a0tDa2dlMXh1SUNBZ0lDQWdJQ0JwWmlBb2RHaHBjeTVoZFhSdlJXNWtLU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQjBhR2x6TG1sdVlXTjBhWFpsUm5KaGJXVnpJRDBnZEdocGN5NW9ZWE5EYUdGdVoyVmtJRDhnTVNBNklIUm9hWE11YVc1aFkzUnBkbVZHY21GdFpYTWdLeUF4TzF4dVhHNGdJQ0FnSUNBZ0lDQWdJQ0JwWmlBb2RHaHBjeTVwYm1GamRHbDJaVVp5WVcxbGN5QStQU0IwYUdsekxtMWhlRWx1WVdOMGFYWmxSbkpoYldWektTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdkR2hwY3k1emRHOXdLQ2s3WEc0Z0lDQWdJQ0FnSUNBZ0lDQjlYRzRnSUNBZ0lDQWdJSDFjYmlBZ0lDQjlYRzVjYmlBZ0lDQXZLbHh1SUNBZ0lDQWdJQ0FqSUVkbGRDQmtaV1poZFd4MElGTnBiWFZzWVhSbElIQnliM0J6WEc1Y2JpQWdJQ0FnSUNBZ1FISmxkSFZ5YmlCYmIySnFaV04wWFZ4dUlDQWdJQ292WEc0Z0lDQWdaMlYwUkdWbVlYVnNkRkJ5YjNCektDa2dlMXh1SUNBZ0lDQWdJQ0J5WlhSMWNtNGdlMXh1SUNBZ0lDQWdJQ0FnSUNBZ0xpNHVjM1Z3WlhJdVoyVjBSR1ZtWVhWc2RGQnliM0J6S0Nrc1hHNGdJQ0FnSUNBZ0lDQWdJQ0JoZFhSdlJXNWtPaUIwY25WbExGeHVJQ0FnSUNBZ0lDQWdJQ0FnYldGNFNXNWhZM1JwZG1WR2NtRnRaWE02SUROY2JpQWdJQ0FnSUNBZ2ZUdGNiaUFnSUNCOVhHNWNiaUFnSUNBdktseHVJQ0FnSUNBZ0lDQWpJRWRsZENCa1pXWmhkV3gwSUZOcGJYVnNZWFJsSUhaaGJIVmxJSEJ5YjNCelhHNWNiaUFnSUNBZ0lDQWdRSEpsZEhWeWJpQmJiMkpxWldOMFhWeHVJQ0FnSUNvdlhHNGdJQ0FnWjJWMFJHVm1ZWFZzZEZaaGJIVmxLQ2tnZTF4dUlDQWdJQ0FnSUNCeVpYUjFjbTRnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdMaTR1YzNWd1pYSXVaMlYwUkdWbVlYVnNkRlpoYkhWbEtDa3NYRzRnSUNBZ0lDQWdJQ0FnSUNCaFkyTmxiR1Z5WVhScGIyNDZJREFzSUM4dklGdHVkVzFpWlhKZE9pQkJZMk5sYkdWeVlYUnBiMjRnZEc4Z1lYQndiSGtnZEc4Z2RtRnNkV1VzSUdsdUlIVnVhWFJ6SUhCbGNpQnpaV052Ym1SY2JpQWdJQ0FnSUNBZ0lDQWdJR0p2ZFc1alpUb2dNQ3dnTHk4Z1cyNTFiV0psY2wwNklFWmhZM1J2Y2lCMGJ5QnRkV3gwYVhCc2VTQjJaV3h2WTJsMGVTQmllU0J2YmlCaWIzVnVZMlZjYmlBZ0lDQWdJQ0FnSUNBZ0lITndjbWx1WnpvZ01Dd2dMeThnVzI1MWJXSmxjbDA2SUZOd2NtbHVaeUJ6ZEhKbGJtZDBhQ0JrZFhKcGJtY2dKM04wY21sdVp5ZGNiaUFnSUNBZ0lDQWdJQ0FnSUhOMGIzQlRjR1ZsWkRvZ01DNHdNREF4TENBdkx5QmJiblZ0WW1WeVhUb2dVM1J2Y0NCemFXMTFiR0YwYVc5dUlIVnVaR1Z5SUhSb2FYTWdjM0JsWldSY2JpQWdJQ0FnSUNBZ0lDQWdJR1p5YVdOMGFXOXVPaUF3SUM4dklGdHVkVzFpWlhKZE9pQkdjbWxqZEdsdmJpQjBieUJoY0hCc2VTQndaWElnWm5KaGJXVXNJREF0TVZ4dUlDQWdJQ0FnSUNCOU8xeHVJQ0FnSUgxY2JseHVJQ0FnSUM4cVhHNGdJQ0FnSUNBZ0lDTWdSMlYwSUdSbFptRjFiSFFnVTJsdGRXeGhkR1VnZG1Gc2RXVWdjSEp2Y0dWeWRIa2dibUZ0WlZ4dUlDQWdJQ0FnSUNBakl5QlRaWFFnZG1Gc2RXVnpJSFJ2SUhSb2FYTWdkMmhsYmlCaElHQjJZV3gxWldBZ2FYTWdibTkwSUhCeWIzWnBaR1ZrSUdGeklHRnVJRzlpYW1WamRGeHVYRzRnSUNBZ0lDQWdJRUJ5WlhSMWNtNGdXM04wY21sdVoxMWNiaUFnSUNBcUwxeHVJQ0FnSUdkbGRFUmxabUYxYkhSV1lXeDFaVkJ5YjNBb0tTQjdYRzRnSUNBZ0lDQWdJSEpsZEhWeWJpQW5kbVZzYjJOcGRIa25PMXh1SUNBZ0lIMWNibjFjYmlKZGZRPT1cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2FjdGlvbnMvUGh5c2ljcy5qc1xuICoqIG1vZHVsZSBpZCA9IDdcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxudmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF9BY3Rpb24yID0gcmVxdWlyZSgnLi9BY3Rpb24nKTtcblxudmFyIF9BY3Rpb24zID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfQWN0aW9uMik7XG5cbnZhciBfUG9pbnRlciA9IHJlcXVpcmUoJy4uL2lucHV0L1BvaW50ZXInKTtcblxudmFyIF9Qb2ludGVyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX1BvaW50ZXIpO1xuXG52YXIgX2NhbGMgPSByZXF1aXJlKCcuLi9pbmMvY2FsYycpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmICghc2VsZikgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIGNhbGwgJiYgKHR5cGVvZiBjYWxsID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpID8gY2FsbCA6IHNlbGY7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgXCIgKyB0eXBlb2Ygc3VwZXJDbGFzcyk7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgZW51bWVyYWJsZTogZmFsc2UsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcykgOiBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzOyB9XG5cbi8qXG4gICAgU2NyYXBlIHgveSBjb29yZGluYXRlcyBmcm9tIHByb3ZpZGVkIGV2ZW50XG5cbiAgICBAcGFyYW0gW2V2ZW50XVxuICAgIEByZXR1cm4gW29iamVjdF1cbiovXG52YXIgbW91c2VFdmVudFRvUG9pbnQgPSBmdW5jdGlvbiAoZSkge1xuICAgIHJldHVybiB7XG4gICAgICAgIHg6IGUucGFnZVgsXG4gICAgICAgIHk6IGUucGFnZVlcbiAgICB9O1xufTtcblxudmFyIHRvdWNoRXZlbnRUb1BvaW50ID0gZnVuY3Rpb24gKF9yZWYpIHtcbiAgICB2YXIgY2hhbmdlZFRvdWNoZXMgPSBfcmVmLmNoYW5nZWRUb3VjaGVzO1xuICAgIHJldHVybiB7XG4gICAgICAgIHg6IGNoYW5nZWRUb3VjaGVzWzBdLmNsaWVudFgsXG4gICAgICAgIHk6IGNoYW5nZWRUb3VjaGVzWzBdLmNsaWVudFlcbiAgICB9O1xufTtcblxudmFyIGNyZWF0ZVBvaW50ZXIgPSBmdW5jdGlvbiAoZSkge1xuICAgIHJldHVybiBlLnRvdWNoZXMgPyBuZXcgX1BvaW50ZXIyLmRlZmF1bHQodG91Y2hFdmVudFRvUG9pbnQoZSksICd0b3VjaG1vdmUnLCB0b3VjaEV2ZW50VG9Qb2ludCkgOiBuZXcgX1BvaW50ZXIyLmRlZmF1bHQobW91c2VFdmVudFRvUG9pbnQoZSksICdtb3VzZW1vdmUnLCBtb3VzZUV2ZW50VG9Qb2ludCk7XG59O1xuXG52YXIgZ2V0QWN0dWFsRXZlbnQgPSBmdW5jdGlvbiAoZSkge1xuICAgIHJldHVybiBlLm9yaWdpbmFsRXZlbnQgfHwgZTtcbn07XG5cbnZhciBUcmFjayA9IGZ1bmN0aW9uIChfQWN0aW9uKSB7XG4gICAgX2luaGVyaXRzKFRyYWNrLCBfQWN0aW9uKTtcblxuICAgIGZ1bmN0aW9uIFRyYWNrKCkge1xuICAgICAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgVHJhY2spO1xuXG4gICAgICAgIHJldHVybiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCBfQWN0aW9uLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykpO1xuICAgIH1cblxuICAgIFRyYWNrLnByb3RvdHlwZS5zdGFydCA9IGZ1bmN0aW9uIHN0YXJ0KGlucHV0KSB7XG4gICAgICAgIF9BY3Rpb24ucHJvdG90eXBlLnN0YXJ0LmNhbGwodGhpcyk7XG5cbiAgICAgICAgaWYgKGlucHV0KSB7XG4gICAgICAgICAgICB0aGlzLmlucHV0ID0gaW5wdXQuc3RhdGUgPyBpbnB1dCA6IGNyZWF0ZVBvaW50ZXIoZ2V0QWN0dWFsRXZlbnQoaW5wdXQpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuaW5wdXRPZmZzZXQgPSB7fTtcbiAgICAgICAgdGhpcy5pbnB1dE9yaWdpbiA9IF9leHRlbmRzKHt9LCB0aGlzLmlucHV0LnN0YXRlKTtcbiAgICAgICAgdGhpcy5pbnB1dC5zdGFydCgpO1xuICAgIH07XG5cbiAgICBUcmFjay5wcm90b3R5cGUuc3RvcCA9IGZ1bmN0aW9uIHN0b3AoKSB7XG4gICAgICAgIF9BY3Rpb24ucHJvdG90eXBlLnN0b3AuY2FsbCh0aGlzKTtcbiAgICAgICAgdGhpcy5pbnB1dC5zdG9wKCk7XG4gICAgfTtcblxuICAgIFRyYWNrLnByb3RvdHlwZS5vblVwZGF0ZSA9IGZ1bmN0aW9uIG9uVXBkYXRlKHRyYWNrLCBmcmFtZVN0YW1wLCBlbGFwc2VkKSB7XG4gICAgICAgIHRoaXMuaW5wdXRPZmZzZXQgPSAoMCwgX2NhbGMub2Zmc2V0KSh0aGlzLmlucHV0T3JpZ2luLCB0aGlzLmlucHV0LnN0YXRlKTtcblxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubnVtVmFsdWVLZXlzOyBpKyspIHtcbiAgICAgICAgICAgIHZhciBrZXkgPSB0aGlzLnZhbHVlS2V5c1tpXTtcblxuICAgICAgICAgICAgaWYgKHRoaXMuaW5wdXRPZmZzZXQuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgICAgICAgIHZhciB2YWx1ZSA9IHRoaXMudmFsdWVzW2tleV07XG4gICAgICAgICAgICAgICAgaWYgKHZhbHVlLmRpcmVjdCkge1xuICAgICAgICAgICAgICAgICAgICB2YWx1ZS5jdXJyZW50ID0gdGhpcy5pbnB1dC5zdGF0ZVtrZXldO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlLmN1cnJlbnQgPSB2YWx1ZS5vcmlnaW4gKyB0aGlzLmlucHV0T2Zmc2V0W2tleV07XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLy8gU21vb3RoIHZhbHVlIGlmIHdlIGhhdmUgc21vb3RoaW5nXG4gICAgICAgICAgICAgICAgaWYgKHZhbHVlLnNtb290aCkge1xuICAgICAgICAgICAgICAgICAgICB2YWx1ZS5jdXJyZW50ID0gKDAsIF9jYWxjLnNtb290aCkodmFsdWUuY3VycmVudCwgdmFsdWUucHJldiwgZWxhcHNlZCwgdmFsdWUuc21vb3RoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgVHJhY2sucHJvdG90eXBlLmdldERlZmF1bHRWYWx1ZSA9IGZ1bmN0aW9uIGdldERlZmF1bHRWYWx1ZSgpIHtcbiAgICAgICAgcmV0dXJuIF9leHRlbmRzKHt9LCBfQWN0aW9uLnByb3RvdHlwZS5nZXREZWZhdWx0VmFsdWUuY2FsbCh0aGlzKSwge1xuICAgICAgICAgICAgYW1wOiAxLFxuICAgICAgICAgICAgZXNjYXBlQW1wOiAwLFxuICAgICAgICAgICAgZGlyZWN0OiBmYWxzZVxuICAgICAgICB9KTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIFRyYWNrO1xufShfQWN0aW9uMy5kZWZhdWx0KTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gVHJhY2s7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5OeVl5OWhZM1JwYjI1ekwxUnlZV05yTG1weklsMHNJbTVoYldWeklqcGJYU3dpYldGd2NHbHVaM01pT2lJN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096dEJRVlZCTEVsQlFVMHNiMEpCUVc5Q0xGVkJRVU1zUTBGQlJEdFhRVUZSTzBGQlF6bENMRmRCUVVjc1JVRkJSU3hMUVVGR08wRkJRMGdzVjBGQlJ5eEZRVUZGTEV0QlFVWTdPME5CUm0xQ096dEJRVXN4UWl4SlFVRk5MRzlDUVVGdlFqdFJRVUZITzFkQlFYTkNPMEZCUXk5RExGZEJRVWNzWlVGQlpTeERRVUZtTEVWQlFXdENMRTlCUVd4Q08wRkJRMGdzVjBGQlJ5eGxRVUZsTEVOQlFXWXNSVUZCYTBJc1QwRkJiRUk3TzBOQlJtMUNPenRCUVVzeFFpeEpRVUZOTEdkQ1FVRm5RaXhWUVVGRExFTkJRVVE3VjBGQlR5eEZRVUZGTEU5QlFVWXNSMEZEZWtJc2MwSkJRVmtzYTBKQlFXdENMRU5CUVd4Q0xFTkJRVm9zUlVGQmEwTXNWMEZCYkVNc1JVRkJLME1zYVVKQlFTOURMRU5CUkhsQ0xFZEJSWHBDTEhOQ1FVRlpMR3RDUVVGclFpeERRVUZzUWl4RFFVRmFMRVZCUVd0RExGZEJRV3hETEVWQlFTdERMR2xDUVVFdlF5eERRVVo1UWp0RFFVRlFPenRCUVVsMFFpeEpRVUZOTEdsQ1FVRnBRaXhWUVVGRExFTkJRVVE3VjBGQlR5eEZRVUZGTEdGQlFVWXNTVUZCYlVJc1EwRkJia0k3UTBGQlVEczdTVUZGUmpzN096czdPenM3TzI5Q1FVTnFRaXgxUWtGQlRTeFBRVUZQTzBGQlExUXNNRUpCUVUwc1MwRkJUaXhaUVVSVE96dEJRVWRVTEZsQlFVa3NTMEZCU2l4RlFVRlhPMEZCUTFBc2FVSkJRVXNzUzBGQlRDeEhRVUZoTEUxQlFVMHNTMEZCVGl4SFFVRmpMRXRCUVdRc1IwRkJjMElzWTBGQll5eGxRVUZsTEV0QlFXWXNRMEZCWkN4RFFVRjBRaXhEUVVST08xTkJRVmc3TzBGQlNVRXNZVUZCU3l4WFFVRk1MRWRCUVcxQ0xFVkJRVzVDTEVOQlVGTTdRVUZSVkN4aFFVRkxMRmRCUVV3c1owSkJRWGRDTEV0QlFVc3NTMEZCVEN4RFFVRlhMRXRCUVZnc1EwRkJlRUlzUTBGU1V6dEJRVk5VTEdGQlFVc3NTMEZCVEN4RFFVRlhMRXRCUVZnc1IwRlVVenM3TzBGQlJFa3NiMEpCWVdwQ0xIVkNRVUZQTzBGQlEwZ3NNRUpCUVUwc1NVRkJUaXhaUVVSSE8wRkJSVWdzWVVGQlN5eExRVUZNTEVOQlFWY3NTVUZCV0N4SFFVWkhPenM3UVVGaVZTeHZRa0ZyUW1wQ0xEWkNRVUZUTEU5QlFVOHNXVUZCV1N4VFFVRlRPMEZCUTJwRExHRkJRVXNzVjBGQlRDeEhRVUZ0UWl4clFrRkJUeXhMUVVGTExGZEJRVXdzUlVGQmEwSXNTMEZCU3l4TFFVRk1MRU5CUVZjc1MwRkJXQ3hEUVVFMVF5eERRVVJwUXpzN1FVRkhha01zWVVGQlN5eEpRVUZKTEVsQlFVa3NRMEZCU2l4RlFVRlBMRWxCUVVrc1MwRkJTeXhaUVVGTUxFVkJRVzFDTEVkQlFYWkRMRVZCUVRSRE8wRkJRM2hETEdkQ1FVRk5MRTFCUVUwc1MwRkJTeXhUUVVGTUxFTkJRV1VzUTBGQlppeERRVUZPTEVOQlJHdERPenRCUVVkNFF5eG5Ra0ZCU1N4TFFVRkxMRmRCUVV3c1EwRkJhVUlzWTBGQmFrSXNRMEZCWjBNc1IwRkJhRU1zUTBGQlNpeEZRVUV3UXp0QlFVTjBReXh2UWtGQlRTeFJRVUZSTEV0QlFVc3NUVUZCVEN4RFFVRlpMRWRCUVZvc1EwRkJVaXhEUVVSblF6dEJRVVYwUXl4dlFrRkJTU3hOUVVGTkxFMUJRVTRzUlVGQll6dEJRVU5rTERCQ1FVRk5MRTlCUVU0c1IwRkJaMElzUzBGQlN5eExRVUZNTEVOQlFWY3NTMEZCV0N4RFFVRnBRaXhIUVVGcVFpeERRVUZvUWl4RFFVUmpPMmxDUVVGc1FpeE5RVVZQTzBGQlEwZ3NNRUpCUVUwc1QwRkJUaXhIUVVGblFpeE5RVUZOTEUxQlFVNHNSMEZCWlN4TFFVRkxMRmRCUVV3c1EwRkJhVUlzUjBGQmFrSXNRMEZCWml4RFFVUmlPMmxDUVVaUU96czdRVUZHYzBNc2IwSkJVMnhETEUxQlFVMHNUVUZCVGl4RlFVRmpPMEZCUTJRc01FSkJRVTBzVDBGQlRpeEhRVUZuUWl4clFrRkJUeXhOUVVGTkxFOUJRVTRzUlVGQlpTeE5RVUZOTEVsQlFVNHNSVUZCV1N4UFFVRnNReXhGUVVFeVF5eE5RVUZOTEUxQlFVNHNRMEZCTTBRc1EwRkVZenRwUWtGQmJFSTdZVUZVU2p0VFFVaEtPenM3UVVGeVFtRXNiMEpCZDBOcVFpdzJRMEZCYTBJN1FVRkRaQ3cwUWtGRFR5eHJRa0ZCVFN4bFFVRk9PMEZCUTBnc2FVSkJRVXNzUTBGQlREdEJRVU5CTEhWQ1FVRlhMRU5CUVZnN1FVRkRRU3h2UWtGQlVTeExRVUZTTzFWQlNrb3NRMEZFWXpzN08xZEJlRU5FSWl3aVptbHNaU0k2SWxSeVlXTnJMbXB6SWl3aWMyOTFjbU5sVW05dmRDSTZJaTlWYzJWeWN5OU5ZWFIwTDFOcGRHVnpMM0J2Y0cxdmRHbHZiaUlzSW5OdmRYSmpaWE5EYjI1MFpXNTBJanBiSW1sdGNHOXlkQ0JCWTNScGIyNGdabkp2YlNBbkxpOUJZM1JwYjI0bk8xeHVhVzF3YjNKMElGQnZhVzUwWlhJZ1puSnZiU0FuTGk0dmFXNXdkWFF2VUc5cGJuUmxjaWM3WEc1cGJYQnZjblFnZXlCemJXOXZkR2dzSUc5bVpuTmxkQ0I5SUdaeWIyMGdKeTR1TDJsdVl5OWpZV3hqSnp0Y2JseHVMeXBjYmlBZ0lDQlRZM0poY0dVZ2VDOTVJR052YjNKa2FXNWhkR1Z6SUdaeWIyMGdjSEp2ZG1sa1pXUWdaWFpsYm5SY2JseHVJQ0FnSUVCd1lYSmhiU0JiWlhabGJuUmRYRzRnSUNBZ1FISmxkSFZ5YmlCYmIySnFaV04wWFZ4dUtpOWNibU52Ym5OMElHMXZkWE5sUlhabGJuUlViMUJ2YVc1MElEMGdLR1VwSUQwK0lDaDdYRzRnSUNBZ2VEb2daUzV3WVdkbFdDeGNiaUFnSUNCNU9pQmxMbkJoWjJWWlhHNTlLVHRjYmx4dVkyOXVjM1FnZEc5MVkyaEZkbVZ1ZEZSdlVHOXBiblFnUFNBb2V5QmphR0Z1WjJWa1ZHOTFZMmhsY3lCOUtTQTlQaUFvZTF4dUlDQWdJSGc2SUdOb1lXNW5aV1JVYjNWamFHVnpXekJkTG1Oc2FXVnVkRmdzWEc0Z0lDQWdlVG9nWTJoaGJtZGxaRlJ2ZFdOb1pYTmJNRjB1WTJ4cFpXNTBXVnh1ZlNrN1hHNWNibU52Ym5OMElHTnlaV0YwWlZCdmFXNTBaWElnUFNBb1pTa2dQVDRnWlM1MGIzVmphR1Z6SUQ5Y2JpQWdJQ0J1WlhjZ1VHOXBiblJsY2loMGIzVmphRVYyWlc1MFZHOVFiMmx1ZENobEtTd2dKM1J2ZFdOb2JXOTJaU2NzSUhSdmRXTm9SWFpsYm5SVWIxQnZhVzUwS1NBNklGeHVJQ0FnSUc1bGR5QlFiMmx1ZEdWeUtHMXZkWE5sUlhabGJuUlViMUJ2YVc1MEtHVXBMQ0FuYlc5MWMyVnRiM1psSnl3Z2JXOTFjMlZGZG1WdWRGUnZVRzlwYm5RcE8xeHVYRzVqYjI1emRDQm5aWFJCWTNSMVlXeEZkbVZ1ZENBOUlDaGxLU0E5UGlCbExtOXlhV2RwYm1Gc1JYWmxiblFnZkh3Z1pUdGNibHh1Wlhod2IzSjBJR1JsWm1GMWJIUWdZMnhoYzNNZ1ZISmhZMnNnWlhoMFpXNWtjeUJCWTNScGIyNGdlMXh1SUNBZ0lITjBZWEowS0dsdWNIVjBLU0I3WEc0Z0lDQWdJQ0FnSUhOMWNHVnlMbk4wWVhKMEtDazdYRzVjYmlBZ0lDQWdJQ0FnYVdZZ0tHbHVjSFYwS1NCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0IwYUdsekxtbHVjSFYwSUQwZ2FXNXdkWFF1YzNSaGRHVWdQeUJwYm5CMWRDQTZJR055WldGMFpWQnZhVzUwWlhJb1oyVjBRV04wZFdGc1JYWmxiblFvYVc1d2RYUXBLVHRjYmlBZ0lDQWdJQ0FnZlZ4dVhHNGdJQ0FnSUNBZ0lIUm9hWE11YVc1d2RYUlBabVp6WlhRZ1BTQjdmVHRjYmlBZ0lDQWdJQ0FnZEdocGN5NXBibkIxZEU5eWFXZHBiaUE5SUhzZ0xpNHVkR2hwY3k1cGJuQjFkQzV6ZEdGMFpTQjlPMXh1SUNBZ0lDQWdJQ0IwYUdsekxtbHVjSFYwTG5OMFlYSjBLQ2s3WEc0Z0lDQWdmVnh1WEc0Z0lDQWdjM1J2Y0NncElIdGNiaUFnSUNBZ0lDQWdjM1Z3WlhJdWMzUnZjQ2dwTzF4dUlDQWdJQ0FnSUNCMGFHbHpMbWx1Y0hWMExuTjBiM0FvS1R0Y2JpQWdJQ0I5WEc1Y2JpQWdJQ0J2YmxWd1pHRjBaU2gwY21GamF5d2dabkpoYldWVGRHRnRjQ3dnWld4aGNITmxaQ2tnZTF4dUlDQWdJQ0FnSUNCMGFHbHpMbWx1Y0hWMFQyWm1jMlYwSUQwZ2IyWm1jMlYwS0hSb2FYTXVhVzV3ZFhSUGNtbG5hVzRzSUhSb2FYTXVhVzV3ZFhRdWMzUmhkR1VwTzF4dVhHNGdJQ0FnSUNBZ0lHWnZjaUFvYkdWMElHa2dQU0F3T3lCcElEd2dkR2hwY3k1dWRXMVdZV3gxWlV0bGVYTTdJR2tyS3lrZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnWTI5dWMzUWdhMlY1SUQwZ2RHaHBjeTUyWVd4MVpVdGxlWE5iYVYwN1hHNWNiaUFnSUNBZ0lDQWdJQ0FnSUdsbUlDaDBhR2x6TG1sdWNIVjBUMlptYzJWMExtaGhjMDkzYmxCeWIzQmxjblI1S0d0bGVTa3BJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0JqYjI1emRDQjJZV3gxWlNBOUlIUm9hWE11ZG1Gc2RXVnpXMnRsZVYwN1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2FXWWdLSFpoYkhWbExtUnBjbVZqZENrZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0IyWVd4MVpTNWpkWEp5Wlc1MElEMGdkR2hwY3k1cGJuQjFkQzV6ZEdGMFpWdHJaWGxkTzF4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUgwZ1pXeHpaU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lIWmhiSFZsTG1OMWNuSmxiblFnUFNCMllXeDFaUzV2Y21sbmFXNGdLeUIwYUdsekxtbHVjSFYwVDJabWMyVjBXMnRsZVYwN1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2ZWeHVYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdMeThnVTIxdmIzUm9JSFpoYkhWbElHbG1JSGRsSUdoaGRtVWdjMjF2YjNSb2FXNW5YRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdhV1lnS0haaGJIVmxMbk50YjI5MGFDa2dlMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCMllXeDFaUzVqZFhKeVpXNTBJRDBnYzIxdmIzUm9LSFpoYkhWbExtTjFjbkpsYm5Rc0lIWmhiSFZsTG5CeVpYWXNJR1ZzWVhCelpXUXNJSFpoYkhWbExuTnRiMjkwYUNrN1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2ZWeHVJQ0FnSUNBZ0lDQWdJQ0FnZlZ4dUlDQWdJQ0FnSUNCOVhHNGdJQ0FnZlZ4dVhHNGdJQ0FnWjJWMFJHVm1ZWFZzZEZaaGJIVmxLQ2tnZTF4dUlDQWdJQ0FnSUNCeVpYUjFjbTRnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdMaTR1YzNWd1pYSXVaMlYwUkdWbVlYVnNkRlpoYkhWbEtDa3NYRzRnSUNBZ0lDQWdJQ0FnSUNCaGJYQTZJREVzWEc0Z0lDQWdJQ0FnSUNBZ0lDQmxjMk5oY0dWQmJYQTZJREFzWEc0Z0lDQWdJQ0FnSUNBZ0lDQmthWEpsWTNRNklHWmhiSE5sWEc0Z0lDQWdJQ0FnSUgwN1hHNGdJQ0FnZlZ4dWZWeHVJbDE5XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9hY3Rpb25zL1RyYWNrLmpzXG4gKiogbW9kdWxlIGlkID0gOFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX2xvb3AgPSByZXF1aXJlKCcuL2xvb3AnKTtcblxudmFyIGxvb3AgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChfbG9vcCk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKG9iaikgeyBpZiAob2JqICYmIG9iai5fX2VzTW9kdWxlKSB7IHJldHVybiBvYmo7IH0gZWxzZSB7IHZhciBuZXdPYmogPSB7fTsgaWYgKG9iaiAhPSBudWxsKSB7IGZvciAodmFyIGtleSBpbiBvYmopIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGtleSkpIG5ld09ialtrZXldID0gb2JqW2tleV07IH0gfSBuZXdPYmouZGVmYXVsdCA9IG9iajsgcmV0dXJuIG5ld09iajsgfSB9XG5cbmZ1bmN0aW9uIF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhvYmosIGtleXMpIHsgdmFyIHRhcmdldCA9IHt9OyBmb3IgKHZhciBpIGluIG9iaikgeyBpZiAoa2V5cy5pbmRleE9mKGkpID49IDApIGNvbnRpbnVlOyBpZiAoIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGkpKSBjb250aW51ZTsgdGFyZ2V0W2ldID0gb2JqW2ldOyB9IHJldHVybiB0YXJnZXQ7IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxudmFyIFByb2Nlc3MgPSBmdW5jdGlvbiAoKSB7XG4gICAgLypcbiAgICAgICAgW29iamVjdF06IFByb3BlcnRpZXNcbiAgICAqL1xuXG4gICAgZnVuY3Rpb24gUHJvY2Vzcyhwcm9wcykge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gICAgICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBQcm9jZXNzKTtcblxuICAgICAgICB0aGlzLmlkID0gbG9vcC5nZXRQcm9jZXNzSWQoKTtcblxuICAgICAgICB0aGlzLl9vbkNsZWFudXAgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBfdGhpcy5zdG9wKCk7XG4gICAgICAgICAgICBfdGhpcy5vbkNsZWFudXAgPSB1bmRlZmluZWQ7XG4gICAgICAgIH07XG5cbiAgICAgICAgdGhpcy5fb25BY3RpdmF0ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiBfdGhpcy5vbkNsZWFudXAgPSBfdGhpcy5fb25DbGVhbnVwO1xuICAgICAgICB9O1xuXG4gICAgICAgIHRoaXMuc2V0KHRoaXMuZ2V0RGVmYXVsdFByb3BzKCkpO1xuICAgICAgICB0aGlzLnNldChwcm9wcyk7XG5cbiAgICAgICAgdGhpcy5pc0FjdGl2ZSA9IGZhbHNlO1xuICAgIH1cblxuICAgIFByb2Nlc3MucHJvdG90eXBlLnNldCA9IGZ1bmN0aW9uIHNldChwcm9wcykge1xuICAgICAgICBmb3IgKHZhciBrZXkgaW4gcHJvcHMpIHtcbiAgICAgICAgICAgIGlmIChwcm9wcy5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgICAgICAgdGhpc1trZXldID0gcHJvcHNba2V5XTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH07XG5cbiAgICBQcm9jZXNzLnByb3RvdHlwZS5zdGFydCA9IGZ1bmN0aW9uIHN0YXJ0KCkge1xuICAgICAgICBsb29wLmFjdGl2YXRlKHRoaXMuaWQsIHRoaXMpO1xuXG4gICAgICAgIHRoaXMub25DbGVhbnVwID0gdGhpcy5vbkFjdGl2YXRlID0gdW5kZWZpbmVkO1xuXG4gICAgICAgIC8vIFByaXZhdGUgYG9uU3RhcnRgXG4gICAgICAgIGlmICh0aGlzLl9vblN0YXJ0KSB7XG4gICAgICAgICAgICB0aGlzLl9vblN0YXJ0KHRoaXMpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gUHVibGljIGBvblN0YXJ0YFxuICAgICAgICBpZiAodGhpcy5vblN0YXJ0KSB7XG4gICAgICAgICAgICB0aGlzLm9uU3RhcnQodGhpcyk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xuXG4gICAgUHJvY2Vzcy5wcm90b3R5cGUuc3RvcCA9IGZ1bmN0aW9uIHN0b3AoKSB7XG4gICAgICAgIGxvb3AuZGVhY3RpdmF0ZSh0aGlzLmlkKTtcblxuICAgICAgICAvLyBQcml2YXRlIGBvblN0b3BgXG4gICAgICAgIGlmICh0aGlzLl9vblN0b3ApIHtcbiAgICAgICAgICAgIHRoaXMuX29uU3RvcCh0aGlzKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFB1YmxpYyBgb25TdG9wYFxuICAgICAgICBpZiAodGhpcy5vblN0b3ApIHtcbiAgICAgICAgICAgIHRoaXMub25TdG9wKHRoaXMpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfTtcblxuICAgIFByb2Nlc3MucHJvdG90eXBlLm9uY2UgPSBmdW5jdGlvbiBvbmNlKCkge1xuICAgICAgICB0aGlzLnN0YXJ0KCk7XG4gICAgICAgIHRoaXMub25BY3RpdmF0ZSA9IHRoaXMuX29uQWN0aXZhdGU7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH07XG5cbiAgICAvKlxuICAgICAgICAjIEdldCBkZWZhdWx0IEFjdGlvbiBwcm9wZXJ0aWVzXG4gICAgICAgICBAcmV0dXJuIFtvYmplY3RdXG4gICAgKi9cblxuICAgIFByb2Nlc3MucHJvdG90eXBlLmdldERlZmF1bHRQcm9wcyA9IGZ1bmN0aW9uIGdldERlZmF1bHRQcm9wcygpIHtcbiAgICAgICAgcmV0dXJuIHt9O1xuICAgIH07XG5cbiAgICAvKlxuICAgICAgICAjIEV4dGVuZCB0aGlzIFByb2Nlc3Mgd2l0aCBuZXcgcHJvcGVydGllc1xuICAgICAgICAjIyBSZXR1cm5zIG5ldyBpbnN0YW5jZSBvZiB0aGlzIFByb2Nlc3MncyBgcHJvdG90eXBlYCB3aXRoIGV4aXN0aW5nIGFuZCBuZXcgcHJvcGVydGllc1xuICAgICAgICAgQHBhcmFtIFtvYmplY3RdIChvcHRpb25hbClcbiAgICAgICAgQHJldHVybiBbUHJvY2Vzc11cbiAgICAqL1xuXG4gICAgUHJvY2Vzcy5wcm90b3R5cGUuaW5oZXJpdCA9IGZ1bmN0aW9uIGluaGVyaXQocHJvcHMpIHtcbiAgICAgICAgdmFyIGlkID0gdGhpcy5pZDtcblxuICAgICAgICB2YXIgaW5oZXJpdGVkUHJvcHMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXModGhpcywgWydpZCddKTtcblxuICAgICAgICB2YXIgbmV3UHJvY2VzcyA9IG5ldyB0aGlzLmNvbnN0cnVjdG9yKGluaGVyaXRlZFByb3BzKTtcbiAgICAgICAgcmV0dXJuIG5ld1Byb2Nlc3Muc2V0KHByb3BzKTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIFByb2Nlc3M7XG59KCk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IFByb2Nlc3M7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5OeVl5OXdjbTlqWlhOekwxQnliMk5sYzNNdWFuTWlYU3dpYm1GdFpYTWlPbHRkTENKdFlYQndhVzVuY3lJNklqczdPenM3TzBsQlFWazdPenM3T3pzN08wbEJSVk03T3pzN08wRkJTV3BDTEdGQlNtbENMRTlCU1dwQ0xFTkJRVmtzUzBGQldpeEZRVUZ0UWpzN096aENRVXBHTEZOQlNVVTdPMEZCUTJZc1lVRkJTeXhGUVVGTUxFZEJRVlVzUzBGQlN5eFpRVUZNTEVWQlFWWXNRMEZFWlRzN1FVRkhaaXhoUVVGTExGVkJRVXdzUjBGQmEwSXNXVUZCVFR0QlFVTndRaXhyUWtGQlN5eEpRVUZNTEVkQlJHOUNPMEZCUlhCQ0xHdENRVUZMTEZOQlFVd3NSMEZCYVVJc1UwRkJha0lzUTBGR2IwSTdVMEZCVGl4RFFVaElPenRCUVZGbUxHRkJRVXNzVjBGQlRDeEhRVUZ0UWp0dFFrRkJUU3hOUVVGTExGTkJRVXdzUjBGQmFVSXNUVUZCU3l4VlFVRk1PMU5CUVhaQ0xFTkJVa283TzBGQlZXWXNZVUZCU3l4SFFVRk1MRU5CUVZNc1MwRkJTeXhsUVVGTUxFVkJRVlFzUlVGV1pUdEJRVmRtTEdGQlFVc3NSMEZCVEN4RFFVRlRMRXRCUVZRc1JVRllaVHM3UVVGaFppeGhRVUZMTEZGQlFVd3NSMEZCWjBJc1MwRkJhRUlzUTBGaVpUdExRVUZ1UWpzN1FVRkthVUlzYzBKQmIwSnFRaXh0UWtGQlNTeFBRVUZQTzBGQlExQXNZVUZCU3l4SlFVRkpMRWRCUVVvc1NVRkJWeXhMUVVGb1FpeEZRVUYxUWp0QlFVTnVRaXhuUWtGQlNTeE5RVUZOTEdOQlFVNHNRMEZCY1VJc1IwRkJja0lzUTBGQlNpeEZRVUVyUWp0QlFVTXpRaXh4UWtGQlN5eEhRVUZNTEVsQlFWa3NUVUZCVFN4SFFVRk9MRU5CUVZvc1EwRkVNa0k3WVVGQkwwSTdVMEZFU2pzN1FVRk5RU3hsUVVGUExFbEJRVkFzUTBGUVR6czdPMEZCY0VKTkxITkNRVGhDYWtJc2VVSkJRVkU3UVVGRFNpeGhRVUZMTEZGQlFVd3NRMEZCWXl4TFFVRkxMRVZCUVV3c1JVRkJVeXhKUVVGMlFpeEZRVVJKT3p0QlFVZEtMR0ZCUVVzc1UwRkJUQ3hIUVVGcFFpeExRVUZMTEZWQlFVd3NSMEZCYTBJc1UwRkJiRUk3T3p0QlFVaGlMRmxCVFVFc1MwRkJTeXhSUVVGTUxFVkJRV1U3UVVGRFppeHBRa0ZCU3l4UlFVRk1MRU5CUVdNc1NVRkJaQ3hGUVVSbE8xTkJRVzVDT3pzN1FVRk9TU3haUVZkQkxFdEJRVXNzVDBGQlRDeEZRVUZqTzBGQlEyUXNhVUpCUVVzc1QwRkJUQ3hEUVVGaExFbEJRV0lzUlVGRVl6dFRRVUZzUWpzN1FVRkpRU3hsUVVGUExFbEJRVkFzUTBGbVNUczdPMEZCT1VKVExITkNRV2RFYWtJc2RVSkJRVTg3UVVGRFNDeGhRVUZMTEZWQlFVd3NRMEZCWjBJc1MwRkJTeXhGUVVGTUxFTkJRV2hDT3pzN1FVRkVSeXhaUVVsRExFdEJRVXNzVDBGQlRDeEZRVUZqTzBGQlEyUXNhVUpCUVVzc1QwRkJUQ3hEUVVGaExFbEJRV0lzUlVGRVl6dFRRVUZzUWpzN08wRkJTa2NzV1VGVFF5eExRVUZMTEUxQlFVd3NSVUZCWVR0QlFVTmlMR2xDUVVGTExFMUJRVXdzUTBGQldTeEpRVUZhTEVWQlJHRTdVMEZCYWtJN08wRkJTVUVzWlVGQlR5eEpRVUZRTEVOQllrYzdPenRCUVdoRVZTeHpRa0ZuUldwQ0xIVkNRVUZQTzBGQlEwZ3NZVUZCU3l4TFFVRk1MRWRCUkVjN1FVRkZTQ3hoUVVGTExGVkJRVXdzUjBGQmEwSXNTMEZCU3l4WFFVRk1MRU5CUm1ZN1FVRkhTQ3hsUVVGUExFbEJRVkFzUTBGSVJ6czdPenM3T3pzN1FVRm9SVlVzYzBKQk1rVnFRaXcyUTBGQmEwSTdRVUZEWkN4bFFVRlBMRVZCUVZBc1EwRkVZenM3T3pzN096czdPenRCUVRORlJDeHpRa0Z6Um1wQ0xESkNRVUZSTEU5QlFVODdXVUZEU0N4TFFVRXdRaXhMUVVFeFFpeEhRVVJIT3p0WlFVTkpMREJEUVVGdFFpeGpRVVIyUWpzN1FVRkZXQ3haUVVGTkxHRkJRV0VzU1VGQlNTeExRVUZMTEZkQlFVd3NRMEZCYVVJc1kwRkJja0lzUTBGQllpeERRVVpMTzBGQlIxZ3NaVUZCVHl4WFFVRlhMRWRCUVZnc1EwRkJaU3hMUVVGbUxFTkJRVkFzUTBGSVZ6czdPMWRCZEVaRklpd2labWxzWlNJNklsQnliMk5sYzNNdWFuTWlMQ0p6YjNWeVkyVlNiMjkwSWpvaUwxVnpaWEp6TDAxaGRIUXZVMmwwWlhNdmNHOXdiVzkwYVc5dUlpd2ljMjkxY21ObGMwTnZiblJsYm5RaU9sc2lhVzF3YjNKMElDb2dZWE1nYkc5dmNDQm1jbTl0SUNjdUwyeHZiM0FuTzF4dVhHNWxlSEJ2Y25RZ1pHVm1ZWFZzZENCamJHRnpjeUJRY205alpYTnpJSHRjYmlBZ0lDQXZLbHh1SUNBZ0lDQWdJQ0JiYjJKcVpXTjBYVG9nVUhKdmNHVnlkR2xsYzF4dUlDQWdJQ292WEc0Z0lDQWdZMjl1YzNSeWRXTjBiM0lvY0hKdmNITXBJSHRjYmlBZ0lDQWdJQ0FnZEdocGN5NXBaQ0E5SUd4dmIzQXVaMlYwVUhKdlkyVnpjMGxrS0NrN1hHNWNiaUFnSUNBZ0lDQWdkR2hwY3k1ZmIyNURiR1ZoYm5Wd0lEMGdLQ2tnUFQ0Z2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnZEdocGN5NXpkRzl3S0NrN1hHNGdJQ0FnSUNBZ0lDQWdJQ0IwYUdsekxtOXVRMnhsWVc1MWNDQTlJSFZ1WkdWbWFXNWxaRHRjYmlBZ0lDQWdJQ0FnZlR0Y2JseHVJQ0FnSUNBZ0lDQjBhR2x6TGw5dmJrRmpkR2wyWVhSbElEMGdLQ2tnUFQ0Z2RHaHBjeTV2YmtOc1pXRnVkWEFnUFNCMGFHbHpMbDl2YmtOc1pXRnVkWEE3WEc1Y2JpQWdJQ0FnSUNBZ2RHaHBjeTV6WlhRb2RHaHBjeTVuWlhSRVpXWmhkV3gwVUhKdmNITW9LU2s3WEc0Z0lDQWdJQ0FnSUhSb2FYTXVjMlYwS0hCeWIzQnpLVHRjYmx4dUlDQWdJQ0FnSUNCMGFHbHpMbWx6UVdOMGFYWmxJRDBnWm1Gc2MyVTdYRzRnSUNBZ2ZWeHVYRzRnSUNBZ2MyVjBLSEJ5YjNCektTQjdYRzRnSUNBZ0lDQWdJR1p2Y2lBb2JHVjBJR3RsZVNCcGJpQndjbTl3Y3lrZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnYVdZZ0tIQnliM0J6TG1oaGMwOTNibEJ5YjNCbGNuUjVLR3RsZVNrcElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQjBhR2x6VzJ0bGVWMGdQU0J3Y205d2MxdHJaWGxkTzF4dUlDQWdJQ0FnSUNBZ0lDQWdmVnh1SUNBZ0lDQWdJQ0I5WEc1Y2JpQWdJQ0FnSUNBZ2NtVjBkWEp1SUhSb2FYTTdYRzRnSUNBZ2ZWeHVYRzRnSUNBZ2MzUmhjblFvS1NCN1hHNGdJQ0FnSUNBZ0lHeHZiM0F1WVdOMGFYWmhkR1VvZEdocGN5NXBaQ3dnZEdocGN5azdYRzVjYmlBZ0lDQWdJQ0FnZEdocGN5NXZia05zWldGdWRYQWdQU0IwYUdsekxtOXVRV04wYVhaaGRHVWdQU0IxYm1SbFptbHVaV1E3WEc1Y2JpQWdJQ0FnSUNBZ0x5OGdVSEpwZG1GMFpTQmdiMjVUZEdGeWRHQmNiaUFnSUNBZ0lDQWdhV1lnS0hSb2FYTXVYMjl1VTNSaGNuUXBJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lIUm9hWE11WDI5dVUzUmhjblFvZEdocGN5azdYRzRnSUNBZ0lDQWdJSDFjYmx4dUlDQWdJQ0FnSUNBdkx5QlFkV0pzYVdNZ1lHOXVVM1JoY25SZ1hHNGdJQ0FnSUNBZ0lHbG1JQ2gwYUdsekxtOXVVM1JoY25RcElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUhSb2FYTXViMjVUZEdGeWRDaDBhR2x6S1R0Y2JpQWdJQ0FnSUNBZ2ZWeHVYRzRnSUNBZ0lDQWdJSEpsZEhWeWJpQjBhR2x6TzF4dUlDQWdJSDFjYmx4dUlDQWdJSE4wYjNBb0tTQjdYRzRnSUNBZ0lDQWdJR3h2YjNBdVpHVmhZM1JwZG1GMFpTaDBhR2x6TG1sa0tUdGNibHh1SUNBZ0lDQWdJQ0F2THlCUWNtbDJZWFJsSUdCdmJsTjBiM0JnWEc0Z0lDQWdJQ0FnSUdsbUlDaDBhR2x6TGw5dmJsTjBiM0FwSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJSFJvYVhNdVgyOXVVM1J2Y0NoMGFHbHpLVHRjYmlBZ0lDQWdJQ0FnZlZ4dVhHNGdJQ0FnSUNBZ0lDOHZJRkIxWW14cFl5QmdiMjVUZEc5d1lGeHVJQ0FnSUNBZ0lDQnBaaUFvZEdocGN5NXZibE4wYjNBcElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUhSb2FYTXViMjVUZEc5d0tIUm9hWE1wTzF4dUlDQWdJQ0FnSUNCOVhHNWNiaUFnSUNBZ0lDQWdjbVYwZFhKdUlIUm9hWE03WEc0Z0lDQWdmVnh1WEc0Z0lDQWdiMjVqWlNncElIdGNiaUFnSUNBZ0lDQWdkR2hwY3k1emRHRnlkQ2dwTzF4dUlDQWdJQ0FnSUNCMGFHbHpMbTl1UVdOMGFYWmhkR1VnUFNCMGFHbHpMbDl2YmtGamRHbDJZWFJsTzF4dUlDQWdJQ0FnSUNCeVpYUjFjbTRnZEdocGN6dGNiaUFnSUNCOVhHNWNiaUFnSUNBdktseHVJQ0FnSUNBZ0lDQWpJRWRsZENCa1pXWmhkV3gwSUVGamRHbHZiaUJ3Y205d1pYSjBhV1Z6WEc1Y2JpQWdJQ0FnSUNBZ1FISmxkSFZ5YmlCYmIySnFaV04wWFZ4dUlDQWdJQ292WEc0Z0lDQWdaMlYwUkdWbVlYVnNkRkJ5YjNCektDa2dlMXh1SUNBZ0lDQWdJQ0J5WlhSMWNtNGdlMzA3WEc0Z0lDQWdmVnh1WEc0Z0lDQWdMeXBjYmlBZ0lDQWdJQ0FnSXlCRmVIUmxibVFnZEdocGN5QlFjbTlqWlhOeklIZHBkR2dnYm1WM0lIQnliM0JsY25ScFpYTmNiaUFnSUNBZ0lDQWdJeU1nVW1WMGRYSnVjeUJ1WlhjZ2FXNXpkR0Z1WTJVZ2IyWWdkR2hwY3lCUWNtOWpaWE56SjNNZ1lIQnliM1J2ZEhsd1pXQWdkMmwwYUNCbGVHbHpkR2x1WnlCaGJtUWdibVYzSUhCeWIzQmxjblJwWlhOY2JseHVJQ0FnSUNBZ0lDQkFjR0Z5WVcwZ1cyOWlhbVZqZEYwZ0tHOXdkR2x2Ym1Gc0tWeHVJQ0FnSUNBZ0lDQkFjbVYwZFhKdUlGdFFjbTlqWlhOelhWeHVJQ0FnSUNvdlhHNGdJQ0FnYVc1b1pYSnBkQ2h3Y205d2N5a2dlMXh1SUNBZ0lDQWdJQ0JqYjI1emRDQjdJR2xrTENBdUxpNXBibWhsY21sMFpXUlFjbTl3Y3lCOUlEMGdkR2hwY3p0Y2JpQWdJQ0FnSUNBZ1kyOXVjM1FnYm1WM1VISnZZMlZ6Y3lBOUlHNWxkeUIwYUdsekxtTnZibk4wY25WamRHOXlLR2x1YUdWeWFYUmxaRkJ5YjNCektUdGNiaUFnSUNBZ0lDQWdjbVYwZFhKdUlHNWxkMUJ5YjJObGMzTXVjMlYwS0hCeWIzQnpLVHRjYmlBZ0lDQjlYRzU5SWwxOVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvcHJvY2Vzcy9Qcm9jZXNzLmpzXG4gKiogbW9kdWxlIGlkID0gOVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9O1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX1Byb2Nlc3MyID0gcmVxdWlyZSgnLi4vcHJvY2Vzcy9Qcm9jZXNzJyk7XG5cbnZhciBfUHJvY2VzczMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9Qcm9jZXNzMik7XG5cbnZhciBfdXRpbHMgPSByZXF1aXJlKCcuLi9pbmMvdXRpbHMnKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoIXNlbGYpIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBjYWxsICYmICh0eXBlb2YgY2FsbCA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSA/IGNhbGwgOiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90IFwiICsgdHlwZW9mIHN1cGVyQ2xhc3MpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIGVudW1lcmFibGU6IGZhbHNlLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIDogc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzczsgfVxuXG52YXIgSW5wdXQgPSBmdW5jdGlvbiAoX1Byb2Nlc3MpIHtcbiAgICBfaW5oZXJpdHMoSW5wdXQsIF9Qcm9jZXNzKTtcblxuICAgIGZ1bmN0aW9uIElucHV0KGluaXRpYWxWYWx1ZXMsIHBvbGwpIHtcbiAgICAgICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIElucHV0KTtcblxuICAgICAgICB2YXIgX3RoaXMgPSBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCBfUHJvY2Vzcy5jYWxsKHRoaXMpKTtcblxuICAgICAgICBfdGhpcy5zdGF0ZSA9IGluaXRpYWxWYWx1ZXM7XG5cbiAgICAgICAgaWYgKCgwLCBfdXRpbHMuaXNGdW5jKShwb2xsKSkge1xuICAgICAgICAgICAgX3RoaXMub25GcmFtZVN0YXJ0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBfdGhpcy5sYXRlc3QoX3RoaXMucG9sbCgpKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIF90aGlzO1xuICAgIH1cblxuICAgIC8qXG4gICAgICAgIE1hbnVhbGx5IGFkZCBsYXRlc3QgdmFsdWVzXG4gICAgICAgICBAcGFyYW0gW29iamVjdF1cbiAgICAqL1xuXG4gICAgSW5wdXQucHJvdG90eXBlLmxhdGVzdCA9IGZ1bmN0aW9uIGxhdGVzdChwcm9wcykge1xuICAgICAgICB0aGlzLnN0YXRlID0gX2V4dGVuZHMoe30sIHRoaXMuc3RhdGUsIHByb3BzKTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIElucHV0O1xufShfUHJvY2VzczMuZGVmYXVsdCk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IElucHV0O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluTnlZeTlwYm5CMWRDOUpibkIxZEM1cWN5SmRMQ0p1WVcxbGN5STZXMTBzSW0xaGNIQnBibWR6SWpvaU96czdPenM3T3pzN096czdPenM3T3pzN096dEpRVWR4UWpzN08wRkJRMnBDTEdGQlJHbENMRXRCUTJwQ0xFTkJRVmtzWVVGQldpeEZRVUV5UWl4SlFVRXpRaXhGUVVGcFF6czRRa0ZFYUVJc1QwRkRaMEk3TzNGRVFVTTNRaXh4UWtGRU5rSTdPMEZCUlRkQ0xHTkJRVXNzUzBGQlRDeEhRVUZoTEdGQlFXSXNRMEZHTmtJN08wRkJTVGRDTEZsQlFVa3NiVUpCUVU4c1NVRkJVQ3hEUVVGS0xFVkJRV3RDTzBGQlEyUXNhMEpCUVVzc1dVRkJUQ3hIUVVGdlFqdDFRa0ZCVFN4TlFVRkxMRTFCUVV3c1EwRkJXU3hOUVVGTExFbEJRVXdzUlVGQldqdGhRVUZPTEVOQlJFNDdVMEZCYkVJN2NVSkJTalpDTzB0QlFXcERPenM3T3pzN08wRkJSR2xDTEc5Q1FXVnFRaXg1UWtGQlR5eFBRVUZQTzBGQlExWXNZVUZCU3l4TFFVRk1MR2RDUVVGclFpeExRVUZMTEV0QlFVd3NSVUZCWlN4TlFVRnFReXhEUVVSVk96czdWMEZtUnlJc0ltWnBiR1VpT2lKSmJuQjFkQzVxY3lJc0luTnZkWEpqWlZKdmIzUWlPaUl2VlhObGNuTXZUV0YwZEM5VGFYUmxjeTl3YjNCdGIzUnBiMjRpTENKemIzVnlZMlZ6UTI5dWRHVnVkQ0k2V3lKcGJYQnZjblFnVUhKdlkyVnpjeUJtY205dElDY3VMaTl3Y205alpYTnpMMUJ5YjJObGMzTW5PMXh1YVcxd2IzSjBJSHNnYVhOR2RXNWpJSDBnWm5KdmJTQW5MaTR2YVc1akwzVjBhV3h6Snp0Y2JseHVaWGh3YjNKMElHUmxabUYxYkhRZ1kyeGhjM01nU1c1d2RYUWdaWGgwWlc1a2N5QlFjbTlqWlhOeklIdGNiaUFnSUNCamIyNXpkSEoxWTNSdmNpaHBibWwwYVdGc1ZtRnNkV1Z6TENCd2IyeHNLU0I3WEc0Z0lDQWdJQ0FnSUhOMWNHVnlLQ2s3WEc0Z0lDQWdJQ0FnSUhSb2FYTXVjM1JoZEdVZ1BTQnBibWwwYVdGc1ZtRnNkV1Z6TzF4dVhHNGdJQ0FnSUNBZ0lHbG1JQ2hwYzBaMWJtTW9jRzlzYkNrcElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUhSb2FYTXViMjVHY21GdFpWTjBZWEowSUQwZ0tDa2dQVDRnZEdocGN5NXNZWFJsYzNRb2RHaHBjeTV3YjJ4c0tDa3BPMXh1SUNBZ0lDQWdJQ0I5WEc0Z0lDQWdmVnh1WEc0Z0lDQWdMeXBjYmlBZ0lDQWdJQ0FnVFdGdWRXRnNiSGtnWVdSa0lHeGhkR1Z6ZENCMllXeDFaWE5jYmx4dUlDQWdJQ0FnSUNCQWNHRnlZVzBnVzI5aWFtVmpkRjFjYmlBZ0lDQXFMMXh1SUNBZ0lHeGhkR1Z6ZENod2NtOXdjeWtnZTF4dUlDQWdJQ0FnSUNCMGFHbHpMbk4wWVhSbElEMGdleUF1TGk1MGFHbHpMbk4wWVhSbExDQXVMaTV3Y205d2N5QjlPMXh1SUNBZ0lIMWNibjFjYmlKZGZRPT1cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2lucHV0L0lucHV0LmpzXG4gKiogbW9kdWxlIGlkID0gMTBcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHMuZGVmYXVsdCA9IHN0YWdnZXI7XG5cbnZhciBfVHdlZW4gPSByZXF1aXJlKCcuLi9hY3Rpb25zL1R3ZWVuJyk7XG5cbnZhciBfVHdlZW4yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfVHdlZW4pO1xuXG52YXIgX3ByZXNldEVhc2luZyA9IHJlcXVpcmUoJy4uL2FjdGlvbnMvZWFzaW5nL3ByZXNldC1lYXNpbmcnKTtcblxudmFyIF9wcmVzZXRFYXNpbmcyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcHJlc2V0RWFzaW5nKTtcblxudmFyIF91dGlscyA9IHJlcXVpcmUoJy4vdXRpbHMnKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxudmFyIERFRkFVTFRfSU5URVJWQUwgPSAxMDA7XG5cbmZ1bmN0aW9uIHN0YWdnZXIoYXJyYXksIGNhbGxiYWNrLCBwcm9wcykge1xuICAgIHZhciBhcnJheUxlbmd0aCA9IGFycmF5Lmxlbmd0aDtcbiAgICB2YXIgcHJvcHNJc0ludGVydmFsID0gKDAsIF91dGlscy5pc051bSkocHJvcHMpO1xuICAgIHZhciBpbnRlcnZhbCA9IHByb3BzSXNJbnRlcnZhbCA/IHByb3BzIDogcHJvcHMuaW50ZXJ2YWwgfHwgREVGQVVMVF9JTlRFUlZBTDtcbiAgICB2YXIgcHJldkluZGV4ID0gLTE7XG5cbiAgICB2YXIgc3RhZ2dlclR3ZWVuID0gbmV3IF9Ud2VlbjIuZGVmYXVsdCh7XG4gICAgICAgIGR1cmF0aW9uOiBpbnRlcnZhbCAqIGFycmF5TGVuZ3RoLFxuICAgICAgICB2YWx1ZXM6IHtcbiAgICAgICAgICAgIGk6IHtcbiAgICAgICAgICAgICAgICBmcm9tOiAwLFxuICAgICAgICAgICAgICAgIHRvOiBhcnJheUxlbmd0aCAtIDEsXG4gICAgICAgICAgICAgICAgcm91bmQ6IHRydWUsXG4gICAgICAgICAgICAgICAgZWFzZTogcHJvcHNJc0ludGVydmFsID8gX3ByZXNldEVhc2luZzIuZGVmYXVsdC5saW5lYXIgOiBwcm9wcy5lYXNlIHx8IF9wcmVzZXRFYXNpbmcyLmRlZmF1bHQubGluZWFyXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIG9uUmVuZGVyOiBmdW5jdGlvbiAodHdlZW4pIHtcbiAgICAgICAgICAgIHZhciBpID0gdHdlZW4uc3RhdGUuaTtcbiAgICAgICAgICAgIHZhciBnYXBJbmRleCA9IHByZXZJbmRleCArIDE7XG5cbiAgICAgICAgICAgIGZvciAoOyBnYXBJbmRleCA8PSBpOyBnYXBJbmRleCsrKSB7XG4gICAgICAgICAgICAgICAgY2FsbGJhY2soYXJyYXlbZ2FwSW5kZXhdLCBnYXBJbmRleCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHByZXZJbmRleCA9IGk7XG4gICAgICAgIH0sXG4gICAgICAgIG9uQ29tcGxldGU6IHByb3BzSXNJbnRlcnZhbCA/IHVuZGVmaW5lZCA6IHByb3BzLm9uQ29tcGxldGVcbiAgICB9KTtcblxuICAgIHN0YWdnZXJUd2Vlbi5zdGFydCgpO1xuXG4gICAgcmV0dXJuIHN0YWdnZXJUd2Vlbjtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbk55WXk5cGJtTXZjM1JoWjJkbGNpNXFjeUpkTENKdVlXMWxjeUk2VzEwc0ltMWhjSEJwYm1keklqb2lPenM3YTBKQlRYZENPenM3T3pzN096czdPenM3T3p0QlFVWjRRaXhKUVVGTkxHMUNRVUZ0UWl4SFFVRnVRanM3UVVGRlV5eFRRVUZUTEU5QlFWUXNRMEZCYVVJc1MwRkJha0lzUlVGQmQwSXNVVUZCZUVJc1JVRkJhME1zUzBGQmJFTXNSVUZCZVVNN1FVRkRjRVFzVVVGQlRTeGpRVUZqTEUxQlFVMHNUVUZCVGl4RFFVUm5RenRCUVVWd1JDeFJRVUZOTEd0Q1FVRnJRaXhyUWtGQlRTeExRVUZPTEVOQlFXeENMRU5CUmpoRE8wRkJSM0JFTEZGQlFVMHNWMEZCVnl4clFrRkJhMElzUzBGQmJFSXNSMEZCTUVJc1RVRkJUU3hSUVVGT0xFbEJRV3RDTEdkQ1FVRnNRaXhEUVVoVE8wRkJTWEJFTEZGQlFVa3NXVUZCV1N4RFFVRkRMRU5CUVVRc1EwRktiME03TzBGQlRYQkVMRkZCUVUwc1pVRkJaU3h2UWtGQlZUdEJRVU16UWl4clFrRkJWU3hYUVVGWExGZEJRVmc3UVVGRFZpeG5Ra0ZCVVR0QlFVTktMR1ZCUVVjN1FVRkRReXh6UWtGQlRTeERRVUZPTzBGQlEwRXNiMEpCUVVrc1kwRkJZeXhEUVVGa08wRkJRMG9zZFVKQlFVOHNTVUZCVUR0QlFVTkJMSE5DUVVGTkxHdENRVUZyUWl4MVFrRkJUeXhOUVVGUUxFZEJRV2RDTEUxQlFVMHNTVUZCVGl4SlFVRmpMSFZDUVVGUExFMUJRVkE3WVVGS01VUTdVMEZFU2p0QlFWRkJMR3RDUVVGVkxGVkJRVU1zUzBGQlJDeEZRVUZYTzBGQlEycENMR2RDUVVGTkxFbEJRVWtzVFVGQlRTeExRVUZPTEVOQlFWa3NRMEZCV2l4RFFVUlBPMEZCUldwQ0xHZENRVUZKTEZkQlFWY3NXVUZCV1N4RFFVRmFMRU5CUmtVN08wRkJTV3BDTEcxQ1FVRlBMRmxCUVZrc1EwRkJXaXhGUVVGbExGVkJRWFJDTEVWQlFXdERPMEZCUXpsQ0xIbENRVUZUTEUxQlFVMHNVVUZCVGl4RFFVRlVMRVZCUVRCQ0xGRkJRVEZDTEVWQlJEaENPMkZCUVd4RE96dEJRVWxCTEhkQ1FVRlpMRU5CUVZvc1EwRlNhVUk3VTBGQldEdEJRVlZXTEc5Q1FVRlpMR3RDUVVGclFpeFRRVUZzUWl4SFFVRTRRaXhOUVVGTkxGVkJRVTQ3UzBGd1FucENMRU5CUVdZc1EwRk9PRU03TzBGQk5rSndSQ3hwUWtGQllTeExRVUZpTEVkQk4wSnZSRHM3UVVFclFuQkVMRmRCUVU4c1dVRkJVQ3hEUVM5Q2IwUTdRMEZCZWtNaUxDSm1hV3hsSWpvaWMzUmhaMmRsY2k1cWN5SXNJbk52ZFhKalpWSnZiM1FpT2lJdlZYTmxjbk12VFdGMGRDOVRhWFJsY3k5d2IzQnRiM1JwYjI0aUxDSnpiM1Z5WTJWelEyOXVkR1Z1ZENJNld5SnBiWEJ2Y25RZ1ZIZGxaVzRnWm5KdmJTQW5MaTR2WVdOMGFXOXVjeTlVZDJWbGJpYzdYRzVwYlhCdmNuUWdaV0Z6YVc1bklHWnliMjBnSnk0dUwyRmpkR2x2Ym5NdlpXRnphVzVuTDNCeVpYTmxkQzFsWVhOcGJtY25PMXh1YVcxd2IzSjBJSHNnYVhOT2RXMGdmU0JtY205dElDY3VMM1YwYVd4ekp6dGNibHh1WTI5dWMzUWdSRVZHUVZWTVZGOUpUbFJGVWxaQlRDQTlJREV3TUR0Y2JseHVaWGh3YjNKMElHUmxabUYxYkhRZ1puVnVZM1JwYjI0Z2MzUmhaMmRsY2loaGNuSmhlU3dnWTJGc2JHSmhZMnNzSUhCeWIzQnpLU0I3WEc0Z0lDQWdZMjl1YzNRZ1lYSnlZWGxNWlc1bmRHZ2dQU0JoY25KaGVTNXNaVzVuZEdnN1hHNGdJQ0FnWTI5dWMzUWdjSEp2Y0hOSmMwbHVkR1Z5ZG1Gc0lEMGdhWE5PZFcwb2NISnZjSE1wTzF4dUlDQWdJR052Ym5OMElHbHVkR1Z5ZG1Gc0lEMGdjSEp2Y0hOSmMwbHVkR1Z5ZG1Gc0lEOGdjSEp2Y0hNZ09pQndjbTl3Y3k1cGJuUmxjblpoYkNCOGZDQkVSVVpCVlV4VVgwbE9WRVZTVmtGTU8xeHVJQ0FnSUd4bGRDQndjbVYyU1c1a1pYZ2dQU0F0TVR0Y2JseHVJQ0FnSUdOdmJuTjBJSE4wWVdkblpYSlVkMlZsYmlBOUlHNWxkeUJVZDJWbGJpaDdYRzRnSUNBZ0lDQWdJR1IxY21GMGFXOXVPaUJwYm5SbGNuWmhiQ0FxSUdGeWNtRjVUR1Z1WjNSb0xGeHVJQ0FnSUNBZ0lDQjJZV3gxWlhNNklIdGNiaUFnSUNBZ0lDQWdJQ0FnSUdrNklIdGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQm1jbTl0T2lBd0xGeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lIUnZPaUJoY25KaGVVeGxibWQwYUNBdElERXNYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdjbTkxYm1RNklIUnlkV1VzWEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnWldGelpUb2djSEp2Y0hOSmMwbHVkR1Z5ZG1Gc0lEOGdaV0Z6YVc1bkxteHBibVZoY2lBNklIQnliM0J6TG1WaGMyVWdmSHdnWldGemFXNW5MbXhwYm1WaGNseHVJQ0FnSUNBZ0lDQWdJQ0FnZlZ4dUlDQWdJQ0FnSUNCOUxGeHVJQ0FnSUNBZ0lDQnZibEpsYm1SbGNqb2dLSFIzWldWdUtTQTlQaUI3WEc0Z0lDQWdJQ0FnSUNBZ0lDQmpiMjV6ZENCcElEMGdkSGRsWlc0dWMzUmhkR1V1YVR0Y2JpQWdJQ0FnSUNBZ0lDQWdJR3hsZENCbllYQkpibVJsZUNBOUlIQnlaWFpKYm1SbGVDQXJJREU3WEc1Y2JpQWdJQ0FnSUNBZ0lDQWdJR1p2Y2lBb095Qm5ZWEJKYm1SbGVDQThQU0JwT3lCbllYQkpibVJsZUNzcktTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdZMkZzYkdKaFkyc29ZWEp5WVhsYloyRndTVzVrWlhoZExDQm5ZWEJKYm1SbGVDazdYRzRnSUNBZ0lDQWdJQ0FnSUNCOVhHNWNiaUFnSUNBZ0lDQWdJQ0FnSUhCeVpYWkpibVJsZUNBOUlHazdYRzRnSUNBZ0lDQWdJSDBzWEc0Z0lDQWdJQ0FnSUc5dVEyOXRjR3hsZEdVNklIQnliM0J6U1hOSmJuUmxjblpoYkNBL0lIVnVaR1ZtYVc1bFpDQTZJSEJ5YjNCekxtOXVRMjl0Y0d4bGRHVmNiaUFnSUNCOUtUdGNibHh1SUNBZ0lITjBZV2RuWlhKVWQyVmxiaTV6ZEdGeWRDZ3BPMXh1WEc0Z0lDQWdjbVYwZFhKdUlITjBZV2RuWlhKVWQyVmxianRjYm4waVhYMD1cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2luYy9zdGFnZ2VyLmpzXG4gKiogbW9kdWxlIGlkID0gMTFcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxudmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHMuZGVmYXVsdCA9IHRpbWVsaW5lO1xuXG52YXIgX1R3ZWVuID0gcmVxdWlyZSgnLi4vYWN0aW9ucy9Ud2VlbicpO1xuXG52YXIgX1R3ZWVuMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX1R3ZWVuKTtcblxudmFyIF9wcmVzZXRFYXNpbmcgPSByZXF1aXJlKCcuLi9hY3Rpb25zL2Vhc2luZy9wcmVzZXQtZWFzaW5nJyk7XG5cbnZhciBfcHJlc2V0RWFzaW5nMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3ByZXNldEVhc2luZyk7XG5cbnZhciBfY2FsYyA9IHJlcXVpcmUoJy4vY2FsYycpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG4vKlxuICAgIEBwYXJhbSBbYXJyYXldXG4gICAgICAgIFNlcXVlbnRpYWwgYXJyYXkgb2YgdHdlZW5zLCBlYWNoIGl0ZW0gY2FuIGJlIGEgdHdlZW4gb3IgZGVmaW5pdGlvbiBvYmo6XG5cbiAgICAgICAgW1xuICAgICAgICAgICAgbmV3IFR3ZWVuKCksXG4gICAgICAgICAgICBzdGFnZ2VyKCksXG4gICAgICAgICAgICB0aW1lbGluZSgpLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHR3ZWVuOiBuZXcgVHdlZW4oKSxcbiAgICAgICAgICAgICAgICBhdDogMTAwLFxuICAgICAgICAgICAgICAgIG9mZnNldDogXCIrPTEwMFwiXG4gICAgICAgICAgICB9XG4gICAgICAgIF1cbiovXG52YXIgYW5hbHl6ZSA9IGZ1bmN0aW9uIChkZWZzKSB7XG4gICAgdmFyIHRpbWVsaW5lID0gW107XG4gICAgdmFyIG51bURlZnMgPSBkZWZzLmxlbmd0aDtcbiAgICB2YXIgY3VycmVudFBsYXloZWFkID0gMDtcblxuICAgIHZhciBfbG9vcCA9IGZ1bmN0aW9uIChpKSB7XG4gICAgICAgIHZhciBkZWYgPSBkZWZzW2ldO1xuICAgICAgICB2YXIgZGVmSXNPYmogPSBkZWYudHdlZW4gPyB0cnVlIDogZmFsc2U7XG4gICAgICAgIHZhciB0d2VlbiA9IGRlZklzT2JqID8gZGVmLnR3ZWVuIDogZGVmO1xuXG4gICAgICAgIGN1cnJlbnRQbGF5aGVhZCArPSBkZWZJc09iaiAmJiBkZWYub2Zmc2V0ID8gZGVmLmF0IHx8ICgwLCBfY2FsYy5yZWxhdGl2ZVZhbHVlKShjdXJyZW50UGxheWhlYWQsIGRlZi5vZmZzZXQpIDogMDtcblxuICAgICAgICB2YXIgZHVyYXRpb24gPSAwO1xuICAgICAgICBmb3IgKHZhciBrZXkgaW4gdHdlZW4udmFsdWVzKSB7XG4gICAgICAgICAgICBpZiAodHdlZW4udmFsdWVzLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICAgICAgICB2YXIgdmFsdWUgPSB0d2Vlbi52YWx1ZXNba2V5XTtcbiAgICAgICAgICAgICAgICBkdXJhdGlvbiA9IE1hdGgubWF4KGR1cmF0aW9uLCB2YWx1ZS5kdXJhdGlvbik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB0aW1lbGluZS5wdXNoKHtcbiAgICAgICAgICAgIGZyb206IGN1cnJlbnRQbGF5aGVhZCxcbiAgICAgICAgICAgIGR1cmF0aW9uOiBkdXJhdGlvbixcbiAgICAgICAgICAgIGZpcmU6IGZ1bmN0aW9uICh0aW1lKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHR3ZWVuLnNlZWtUaW1lKHRpbWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICBjdXJyZW50UGxheWhlYWQgKz0gdHdlZW4uZHVyYXRpb247XG4gICAgfTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbnVtRGVmczsgaSsrKSB7XG4gICAgICAgIF9sb29wKGkpO1xuICAgIH1cblxuICAgIHJldHVybiB7IHRvdGFsVGltZTogY3VycmVudFBsYXloZWFkLCB0aW1lbGluZTogdGltZWxpbmUgfTtcbn07XG5cbnZhciBzZXRUd2VlbnMgPSBmdW5jdGlvbiAoX3JlZikge1xuICAgIHZhciBlbGFwc2VkID0gX3JlZi5lbGFwc2VkO1xuICAgIHZhciB0aW1lbGluZSA9IF9yZWYudGltZWxpbmU7XG4gICAgdmFyIHRpbWVsaW5lTGVuZ3RoID0gX3JlZi50aW1lbGluZUxlbmd0aDtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGltZWxpbmVMZW5ndGg7IGkrKykge1xuICAgICAgICB2YXIgX3R3ZWVuID0gdGltZWxpbmVbaV07XG4gICAgICAgIHZhciB0d2VlblRpbWUgPSBlbGFwc2VkIC0gX3R3ZWVuLmZyb207XG5cbiAgICAgICAgaWYgKHR3ZWVuVGltZSA+IDAgJiYgdHdlZW5UaW1lIDwgX3R3ZWVuLmR1cmF0aW9uKSB7XG4gICAgICAgICAgICBfdHdlZW4uZmlyZSh0d2VlblRpbWUpO1xuICAgICAgICB9XG4gICAgfVxufTtcblxuZnVuY3Rpb24gdGltZWxpbmUoZGVmKSB7XG4gICAgdmFyIHByb3BzID0gYXJndW1lbnRzLmxlbmd0aCA8PSAxIHx8IGFyZ3VtZW50c1sxXSA9PT0gdW5kZWZpbmVkID8ge30gOiBhcmd1bWVudHNbMV07XG5cbiAgICB2YXIgX2FuYWx5emUgPSBhbmFseXplKGRlZik7XG5cbiAgICB2YXIgdG90YWxUaW1lID0gX2FuYWx5emUudG90YWxUaW1lO1xuICAgIHZhciB0aW1lbGluZSA9IF9hbmFseXplLnRpbWVsaW5lO1xuXG4gICAgcmV0dXJuIG5ldyBfVHdlZW4yLmRlZmF1bHQoX2V4dGVuZHMoe30sIHByb3BzLCB7XG4gICAgICAgIGR1cmF0aW9uOiB0b3RhbFRpbWUsXG4gICAgICAgIGVhc2U6IF9wcmVzZXRFYXNpbmcyLmRlZmF1bHQubGluZWFyLFxuICAgICAgICB2YWx1ZXM6IHtcbiAgICAgICAgICAgIHA6IDFcbiAgICAgICAgfSxcbiAgICAgICAgdGltZWxpbmU6IHRpbWVsaW5lLFxuICAgICAgICB0aW1lbGluZUxlbmd0aDogdGltZWxpbmUubGVuZ3RoLFxuICAgICAgICBvblJlbmRlcjogc2V0VHdlZW5zXG4gICAgfSkpO1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluTnlZeTlwYm1NdmRHbHRaV3hwYm1VdWFuTWlYU3dpYm1GdFpYTWlPbHRkTENKdFlYQndhVzVuY3lJNklqczdPenM3YTBKQkswUjNRanM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3UVVFMVEzaENMRWxCUVUwc1ZVRkJWU3hWUVVGRExFbEJRVVFzUlVGQlZUdEJRVU4wUWl4UlFVRk5MRmRCUVZjc1JVRkJXQ3hEUVVSblFqdEJRVVYwUWl4UlFVRk5MRlZCUVZVc1MwRkJTeXhOUVVGTUxFTkJSazA3UVVGSGRFSXNVVUZCU1N4clFrRkJhMElzUTBGQmJFSXNRMEZJYTBJN096QkNRVXRpTzBGQlEwd3NXVUZCVFN4TlFVRk5MRXRCUVVzc1EwRkJUQ3hEUVVGT08wRkJRMDRzV1VGQlRTeFhRVUZYTEVsQlFVa3NTMEZCU2l4SFFVRlpMRWxCUVZvc1IwRkJiVUlzUzBGQmJrSTdRVUZEYWtJc1dVRkJUU3hSUVVGUkxGZEJRV0VzU1VGQlNTeExRVUZLTEVkQlFWa3NSMEZCZWtJN08wRkJSV1FzTWtKQlFXOUNMRkZCUVVNc1NVRkJXU3hKUVVGSkxFMUJRVW9zUjBGRE4wSXNTVUZCU1N4RlFVRktMRWxCUVZVc2VVSkJRV01zWlVGQlpDeEZRVUVyUWl4SlFVRkpMRTFCUVVvc1EwRkJla01zUjBGQmRVUXNRMEZFZGtNN08wRkJSM0JDTEZsQlFVa3NWMEZCVnl4RFFVRllPMEZCUTBvc1lVRkJTeXhKUVVGSkxFZEJRVW9zU1VGQlZ5eE5RVUZOTEUxQlFVNHNSVUZCWXp0QlFVTXhRaXhuUWtGQlNTeE5RVUZOTEUxQlFVNHNRMEZCWVN4alFVRmlMRU5CUVRSQ0xFZEJRVFZDTEVOQlFVb3NSVUZCYzBNN1FVRkRiRU1zYjBKQlFVMHNVVUZCVVN4TlFVRk5MRTFCUVU0c1EwRkJZU3hIUVVGaUxFTkJRVklzUTBGRU5FSTdRVUZGYkVNc01rSkJRVmNzUzBGQlN5eEhRVUZNTEVOQlFWTXNVVUZCVkN4RlFVRnRRaXhOUVVGTkxGRkJRVTRzUTBGQk9VSXNRMEZHYTBNN1lVRkJkRU03VTBGRVNqczdRVUZQUVN4cFFrRkJVeXhKUVVGVUxFTkJRV003UVVGRFZpeHJRa0ZCVFN4bFFVRk9PMEZCUTBFc2MwSkJRVlVzVVVGQlZqdEJRVU5CTEd0Q1FVRk5MRlZCUVVNc1NVRkJSRHQxUWtGQlZTeE5RVUZOTEZGQlFVNHNRMEZCWlN4SlFVRm1PMkZCUVZZN1UwRklWanM3UVVGTlFTd3lRa0ZCYlVJc1RVRkJUU3hSUVVGT08wMUJNMEpFT3p0QlFVdDBRaXhUUVVGTExFbEJRVWtzU1VGQlNTeERRVUZLTEVWQlFVOHNTVUZCU1N4UFFVRktMRVZCUVdFc1IwRkJOMElzUlVGQmEwTTdZMEZCZWtJc1IwRkJlVUk3UzBGQmJFTTdPMEZCZVVKQkxGZEJRVThzUlVGQlJTeFhRVUZYTEdWQlFWZ3NSVUZCTkVJc2EwSkJRVGxDTEVWQlFWQXNRMEU1UW5OQ08wTkJRVlk3TzBGQmFVTm9RaXhKUVVGTkxGbEJRVmtzWjBKQlFUSkRPMUZCUVhoRExIVkNRVUYzUXp0UlFVRXZRaXg1UWtGQkswSTdVVUZCY2tJc2NVTkJRWEZDT3p0QlFVTjZSQ3hUUVVGTExFbEJRVWtzU1VGQlNTeERRVUZLTEVWQlFVOHNTVUZCU1N4alFVRktMRVZCUVc5Q0xFZEJRWEJETEVWQlFYbERPMEZCUTNKRExGbEJRVTBzVTBGQlVTeFRRVUZUTEVOQlFWUXNRMEZCVWl4RFFVUXJRanRCUVVWeVF5eFpRVUZOTEZsQlFWa3NWVUZCVlN4UFFVRk5MRWxCUVU0c1EwRkdVenM3UVVGSmNrTXNXVUZCU1N4WlFVRlpMRU5CUVZvc1NVRkJhVUlzV1VGQldTeFBRVUZOTEZGQlFVNHNSVUZCWjBJN1FVRkROME1zYlVKQlFVMHNTVUZCVGl4RFFVRlhMRk5CUVZnc1JVRkVOa003VTBGQmFrUTdTMEZLU2p0RFFVUmpPenRCUVZkSUxGTkJRVk1zVVVGQlZDeERRVUZyUWl4SFFVRnNRaXhGUVVGdFF6dFJRVUZhTERoRVFVRlJMR3RDUVVGSk96dHRRa0ZEWkN4UlFVRlJMRWRCUVZJc1JVRkVZenM3VVVGRGRFTXNLMEpCUkhORE8xRkJRek5DTERaQ1FVUXlRanM3UVVGSE9VTXNWMEZCVHl4cFEwRkRRVHRCUVVOSUxHdENRVUZWTEZOQlFWWTdRVUZEUVN4alFVRk5MSFZDUVVGUExFMUJRVkE3UVVGRFRpeG5Ra0ZCVVR0QlFVTktMR1ZCUVVjc1EwRkJTRHRUUVVSS08wRkJSMEVzYTBKQlFWVXNVVUZCVmp0QlFVTkJMSGRDUVVGblFpeFRRVUZUTEUxQlFWUTdRVUZEYUVJc2EwSkJRVlVzVTBGQlZqdE5RVlJITEVOQlFWQXNRMEZJT0VNN1EwRkJia01pTENKbWFXeGxJam9pZEdsdFpXeHBibVV1YW5NaUxDSnpiM1Z5WTJWU2IyOTBJam9pTDFWelpYSnpMMDFoZEhRdlUybDBaWE12Y0c5d2JXOTBhVzl1SWl3aWMyOTFjbU5sYzBOdmJuUmxiblFpT2xzaWFXMXdiM0owSUZSM1pXVnVJR1p5YjIwZ0p5NHVMMkZqZEdsdmJuTXZWSGRsWlc0bk8xeHVhVzF3YjNKMElHVmhjMmx1WnlCbWNtOXRJQ2N1TGk5aFkzUnBiMjV6TDJWaGMybHVaeTl3Y21WelpYUXRaV0Z6YVc1bkp6dGNibWx0Y0c5eWRDQjdJSEpsYkdGMGFYWmxWbUZzZFdVZ2ZTQm1jbTl0SUNjdUwyTmhiR01uTzF4dVhHNHZLbHh1SUNBZ0lFQndZWEpoYlNCYllYSnlZWGxkWEc0Z0lDQWdJQ0FnSUZObGNYVmxiblJwWVd3Z1lYSnlZWGtnYjJZZ2RIZGxaVzV6TENCbFlXTm9JR2wwWlcwZ1kyRnVJR0psSUdFZ2RIZGxaVzRnYjNJZ1pHVm1hVzVwZEdsdmJpQnZZbW82WEc1Y2JpQWdJQ0FnSUNBZ1cxeHVJQ0FnSUNBZ0lDQWdJQ0FnYm1WM0lGUjNaV1Z1S0Nrc1hHNGdJQ0FnSUNBZ0lDQWdJQ0J6ZEdGbloyVnlLQ2tzWEc0Z0lDQWdJQ0FnSUNBZ0lDQjBhVzFsYkdsdVpTZ3BMRnh1SUNBZ0lDQWdJQ0FnSUNBZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lIUjNaV1Z1T2lCdVpYY2dWSGRsWlc0b0tTeGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQmhkRG9nTVRBd0xGeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lHOW1abk5sZERvZ1hDSXJQVEV3TUZ3aVhHNGdJQ0FnSUNBZ0lDQWdJQ0I5WEc0Z0lDQWdJQ0FnSUYxY2Jpb3ZYRzVqYjI1emRDQmhibUZzZVhwbElEMGdLR1JsWm5NcElEMCtJSHRjYmlBZ0lDQmpiMjV6ZENCMGFXMWxiR2x1WlNBOUlGdGRPMXh1SUNBZ0lHTnZibk4wSUc1MWJVUmxabk1nUFNCa1pXWnpMbXhsYm1kMGFEdGNiaUFnSUNCc1pYUWdZM1Z5Y21WdWRGQnNZWGxvWldGa0lEMGdNRHRjYmx4dUlDQWdJR1p2Y2lBb2JHVjBJR2tnUFNBd095QnBJRHdnYm5WdFJHVm1jenNnYVNzcktTQjdYRzRnSUNBZ0lDQWdJR052Ym5OMElHUmxaaUE5SUdSbFpuTmJhVjA3WEc0Z0lDQWdJQ0FnSUdOdmJuTjBJR1JsWmtselQySnFJRDBnWkdWbUxuUjNaV1Z1SUQ4Z2RISjFaU0E2SUdaaGJITmxPMXh1SUNBZ0lDQWdJQ0JqYjI1emRDQjBkMlZsYmlBOUlDaGtaV1pKYzA5aWFpa2dQeUJrWldZdWRIZGxaVzRnT2lCa1pXWTdYRzVjYmlBZ0lDQWdJQ0FnWTNWeWNtVnVkRkJzWVhsb1pXRmtJQ3M5SUNnb1pHVm1TWE5QWW1vZ0ppWWdaR1ZtTG05bVpuTmxkQ2tnUDF4dUlDQWdJQ0FnSUNBZ0lDQWdaR1ZtTG1GMElIeDhJSEpsYkdGMGFYWmxWbUZzZFdVb1kzVnljbVZ1ZEZCc1lYbG9aV0ZrTENCa1pXWXViMlptYzJWMEtTQTZJREFwTzF4dVhHNGdJQ0FnSUNBZ0lHeGxkQ0JrZFhKaGRHbHZiaUE5SURBN1hHNGdJQ0FnSUNBZ0lHWnZjaUFvYkdWMElHdGxlU0JwYmlCMGQyVmxiaTUyWVd4MVpYTXBJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lHbG1JQ2gwZDJWbGJpNTJZV3gxWlhNdWFHRnpUM2R1VUhKdmNHVnlkSGtvYTJWNUtTa2dlMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJR052Ym5OMElIWmhiSFZsSUQwZ2RIZGxaVzR1ZG1Gc2RXVnpXMnRsZVYwN1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ1pIVnlZWFJwYjI0Z1BTQk5ZWFJvTG0xaGVDaGtkWEpoZEdsdmJpd2dkbUZzZFdVdVpIVnlZWFJwYjI0cE8xeHVJQ0FnSUNBZ0lDQWdJQ0FnZlZ4dUlDQWdJQ0FnSUNCOVhHNWNiaUFnSUNBZ0lDQWdkR2x0Wld4cGJtVXVjSFZ6YUNoN1hHNGdJQ0FnSUNBZ0lDQWdJQ0JtY205dE9pQmpkWEp5Wlc1MFVHeGhlV2hsWVdRc1hHNGdJQ0FnSUNBZ0lDQWdJQ0JrZFhKaGRHbHZiam9nWkhWeVlYUnBiMjRzWEc0Z0lDQWdJQ0FnSUNBZ0lDQm1hWEpsT2lBb2RHbHRaU2tnUFQ0Z2RIZGxaVzR1YzJWbGExUnBiV1VvZEdsdFpTbGNiaUFnSUNBZ0lDQWdmU2s3WEc1Y2JpQWdJQ0FnSUNBZ1kzVnljbVZ1ZEZCc1lYbG9aV0ZrSUNzOUlIUjNaV1Z1TG1SMWNtRjBhVzl1TzF4dUlDQWdJSDFjYmx4dUlDQWdJSEpsZEhWeWJpQjdJSFJ2ZEdGc1ZHbHRaVG9nWTNWeWNtVnVkRkJzWVhsb1pXRmtMQ0IwYVcxbGJHbHVaU0I5TzF4dWZUdGNibHh1WTI5dWMzUWdjMlYwVkhkbFpXNXpJRDBnS0hzZ1pXeGhjSE5sWkN3Z2RHbHRaV3hwYm1Vc0lIUnBiV1ZzYVc1bFRHVnVaM1JvSUgwcElEMCtJSHRjYmlBZ0lDQm1iM0lnS0d4bGRDQnBJRDBnTURzZ2FTQThJSFJwYldWc2FXNWxUR1Z1WjNSb095QnBLeXNwSUh0Y2JpQWdJQ0FnSUNBZ1kyOXVjM1FnZEhkbFpXNGdQU0IwYVcxbGJHbHVaVnRwWFR0Y2JpQWdJQ0FnSUNBZ1kyOXVjM1FnZEhkbFpXNVVhVzFsSUQwZ1pXeGhjSE5sWkNBdElIUjNaV1Z1TG1aeWIyMDdYRzVjYmlBZ0lDQWdJQ0FnYVdZZ0tIUjNaV1Z1VkdsdFpTQStJREFnSmlZZ2RIZGxaVzVVYVcxbElEd2dkSGRsWlc0dVpIVnlZWFJwYjI0cElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUhSM1pXVnVMbVpwY21Vb2RIZGxaVzVVYVcxbEtUdGNiaUFnSUNBZ0lDQWdmVnh1SUNBZ0lIMWNibjA3WEc1Y2JtVjRjRzl5ZENCa1pXWmhkV3gwSUdaMWJtTjBhVzl1SUhScGJXVnNhVzVsS0dSbFppd2djSEp2Y0hNZ1BTQjdmU2tnZTF4dUlDQWdJR052Ym5OMElIc2dkRzkwWVd4VWFXMWxMQ0IwYVcxbGJHbHVaU0I5SUQwZ1lXNWhiSGw2WlNoa1pXWXBPMXh1WEc0Z0lDQWdjbVYwZFhKdUlHNWxkeUJVZDJWbGJpaDdYRzRnSUNBZ0lDQWdJQzR1TG5CeWIzQnpMRnh1SUNBZ0lDQWdJQ0JrZFhKaGRHbHZiam9nZEc5MFlXeFVhVzFsTEZ4dUlDQWdJQ0FnSUNCbFlYTmxPaUJsWVhOcGJtY3ViR2x1WldGeUxGeHVJQ0FnSUNBZ0lDQjJZV3gxWlhNNklIdGNiaUFnSUNBZ0lDQWdJQ0FnSUhBNklERmNiaUFnSUNBZ0lDQWdmU3hjYmlBZ0lDQWdJQ0FnZEdsdFpXeHBibVU2SUhScGJXVnNhVzVsTEZ4dUlDQWdJQ0FnSUNCMGFXMWxiR2x1WlV4bGJtZDBhRG9nZEdsdFpXeHBibVV1YkdWdVozUm9MRnh1SUNBZ0lDQWdJQ0J2YmxKbGJtUmxjam9nYzJWMFZIZGxaVzV6WEc0Z0lDQWdmU2s3WEc1OUlsMTlcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2luYy90aW1lbGluZS5qc1xuICoqIG1vZHVsZSBpZCA9IDEyXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuLypcbiAgICAjIEFkYXB0ZXIgY2xhc3NcbiAgICAjIyBQcm92aWRlcyBhIGdldHRlci9zZXR0ZXIgd3JhcHBlciBhbmQgcHJvcGVydHkgY2FjaGUgZm9yIGRpZmZlcmVudCBlbGVtZW50IHR5cGVzXG5cbiAgICBPdmVycmlkZSBgZ2V0dGVyYCBhbmQgYHNldHRlcmAgdG8gcmVpbXBsZW1lbnQgdGhlIGludGVyZmFjZSBmb3IgbmV3IGVsZW1lbnQgdHlwZXMuXG5cbiAgICBTZXQgYEV4dGVuZGVkLnByb3RvdHlwZS5zdGF0ZU1hcGAgYXMgYW4gb2JqZWN0IGtleS92YWx1ZSBtYXAgdG8gdHJhbnNsYXRlIGluY29taW5nIGtleXMgdG9cbiAgICBBUEktc3BlY2lmaWMga2V5cy4gRm9yIGluc3RhbmNlLCB7IHg6ICd0cmFuc2xhdGVYJyB9LiBcblxuICAgIFNldCBgRXh0ZW5kZWQucHJvdG90eXBlLnZhbHVlVHlwZU1hcGAgYXMgYW4gb2JqZWN0IGtleS92YWx1ZSBtYXAgdG8gcmV0dXJuIGEgdmFsdWUgdHlwZSB3aXRoXG4gICAgYGdldFZhbHVlVHlwZShrZXkpYCAoa2V5IHdpbGwgYmUgbWFwcGVkIGFjY29yZGluZyB0byBgc3RhdGVNYXBgKVxuKi9cblxudmFyIEFkYXB0ZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gQWRhcHRlcihlbGVtZW50KSB7XG4gICAgICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBBZGFwdGVyKTtcblxuICAgICAgICB0aGlzLmVsZW1lbnQgPSBlbGVtZW50O1xuICAgICAgICB0aGlzLmNhY2hlID0ge307XG4gICAgICAgIHRoaXMuaW50ZXJuYWxDYWNoZSA9IHt9O1xuICAgIH1cblxuICAgIC8qXG4gICAgICAgIEdldCBlbGVtZW50IHByb3BlcnR5XG4gICAgICAgICBAcGFyYW0gW3N0cmluZ106IEtleSB0byByZWFkXG4gICAgICAgIEBwYXJhbSBbYm9vbGVhbl06IElmIGB0cnVlYCwgd2lsbCBvdmVycmlkZSBjYWNoZWQgcHJvcGVydHlcbiAgICAqL1xuXG4gICAgQWRhcHRlci5wcm90b3R5cGUuZ2V0ID0gZnVuY3Rpb24gZ2V0KGtleSwgcmVmcmVzaCkge1xuICAgICAgICB2YXIgbWFwcGVkS2V5ID0gdGhpcy5tYXBTdGF0ZUtleShrZXkpO1xuXG4gICAgICAgIGlmIChyZWZyZXNoIHx8ICF0aGlzLmNhY2hlLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmNhY2hlW2tleV0gPSB0aGlzLmdldHRlcihtYXBwZWRLZXkpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY2FjaGVba2V5XTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICAvKlxuICAgICAgICBTZXQgZWxlbWVudCBwcm9wZXJ0aWVzXG4gICAgICAgICBAcGFyYW0gW29iamVjdF06IEtleS92YWx1ZSBwcm9wZXJ0aWVzIHRvIHNldFxuICAgICovXG5cbiAgICBBZGFwdGVyLnByb3RvdHlwZS5zZXQgPSBmdW5jdGlvbiBzZXQocHJvcHMpIHtcbiAgICAgICAgLy8gVHJhbnNsYXRlIHByb3BzXG4gICAgICAgIGZvciAodmFyIGtleSBpbiBwcm9wcykge1xuICAgICAgICAgICAgaWYgKHByb3BzLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICAgICAgICB2YXIgbWFwcGVkS2V5ID0gdGhpcy5tYXBTdGF0ZUtleShrZXkpO1xuICAgICAgICAgICAgICAgIHRoaXMuY2FjaGVba2V5XSA9IHRoaXMuaW50ZXJuYWxDYWNoZVttYXBwZWRLZXldID0gcHJvcHNba2V5XTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzLnNldHRlcih0aGlzLmludGVybmFsQ2FjaGUpO1xuICAgIH07XG5cbiAgICAvKlxuICAgICAgICBPdmVycmlkYWJsZSBlbGVtZW50IGdldHRlciAtIGRlZmF1bHQgZm9yIHBsYWluIG9iamVjdCBcbiAgICAqL1xuXG4gICAgQWRhcHRlci5wcm90b3R5cGUuZ2V0dGVyID0gZnVuY3Rpb24gZ2V0dGVyKGtleSkge1xuICAgICAgICByZXR1cm4gdGhpcy5lbGVtZW50W2tleV07XG4gICAgfTtcblxuICAgIC8qXG4gICAgICAgIE92ZXJyaWRhYmxlIGVsZW1lbnQgc2V0dGVyIC0gZGVmYXVsdCBmb3IgcGxhaW4gb2JqZWN0XG4gICAgKi9cblxuICAgIEFkYXB0ZXIucHJvdG90eXBlLnNldHRlciA9IGZ1bmN0aW9uIHNldHRlcihwcm9wcykge1xuICAgICAgICBmb3IgKHZhciBrZXkgaW4gcHJvcHMpIHtcbiAgICAgICAgICAgIGlmIChwcm9wcy5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5lbGVtZW50W2tleV0gPSBwcm9wc1trZXldO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcblxuICAgIC8qXG4gICAgICAgIE1hcCBzdGF0ZSBrZXkgYXMgcGVyIGBzdGF0ZU1hcGAsIGlmIHByZXNlbnRcbiAgICAgICAgIEBwYXJhbSBbc3RyaW5nXTogS2V5IHRvIG1hcFxuICAgICAgICBAcmV0dXJuIFtzdHJpbmddOiBNYXBwZWQga2V5LCBvciBvcmlnaW5hbCBrZXkgaWYgbm9uZSBmb3VuZFxuICAgICovXG5cbiAgICBBZGFwdGVyLnByb3RvdHlwZS5tYXBTdGF0ZUtleSA9IGZ1bmN0aW9uIG1hcFN0YXRlS2V5KGtleSkge1xuICAgICAgICByZXR1cm4gdGhpcy5zdGF0ZU1hcCA/IHRoaXMuc3RhdGVNYXBba2V5XSB8fCBrZXkgOiBrZXk7XG4gICAgfTtcblxuICAgIC8qXG4gICAgICAgIEdldCB2YWx1ZVR5cGUgb2YgcHJvdmlkZWQga2V5XG4gICAgICAgICBAcGFyYW0gW3N0cmluZ106IE5hbWUgb2YgcHJvcGVydHkgdG8gbWFwXG4gICAgICAgIEByZXR1cm4gW3ZhbHVlVHlwZV06IFZhbHVlIHR5cGUgb2YgcHJvcGVydHlcbiAgICAqL1xuXG4gICAgQWRhcHRlci5wcm90b3R5cGUuZ2V0VmFsdWVUeXBlID0gZnVuY3Rpb24gZ2V0VmFsdWVUeXBlKGtleSkge1xuICAgICAgICByZXR1cm4gdGhpcy52YWx1ZVR5cGVNYXAgPyB0aGlzLnZhbHVlVHlwZU1hcFt0aGlzLm1hcFN0YXRlS2V5KGtleSldIDogZmFsc2U7XG4gICAgfTtcblxuICAgIHJldHVybiBBZGFwdGVyO1xufSgpO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbiAoZWxlbWVudCkge1xuICAgIHJldHVybiBuZXcgQWRhcHRlcihlbGVtZW50KTtcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5OeVl5OWhaR0Z3ZEdWeUwyRmtZWEIwWlhJdWFuTWlYU3dpYm1GdFpYTWlPbHRkTENKdFlYQndhVzVuY3lJNklqczdPenM3T3pzN096czdPenM3T3pzN096dEpRVmxOTzBGQlEwWXNZVUZFUlN4UFFVTkdMRU5CUVZrc1QwRkJXaXhGUVVGeFFqczRRa0ZFYmtJc1UwRkRiVUk3TzBGQlEycENMR0ZCUVVzc1QwRkJUQ3hIUVVGbExFOUJRV1lzUTBGRWFVSTdRVUZGYWtJc1lVRkJTeXhMUVVGTUxFZEJRV0VzUlVGQllpeERRVVpwUWp0QlFVZHFRaXhoUVVGTExHRkJRVXdzUjBGQmNVSXNSVUZCY2tJc1EwRklhVUk3UzBGQmNrSTdPenM3T3pzN08wRkJSRVVzYzBKQllVWXNiVUpCUVVrc1MwRkJTeXhUUVVGVE8wRkJRMlFzV1VGQlRTeFpRVUZaTEV0QlFVc3NWMEZCVEN4RFFVRnBRaXhIUVVGcVFpeERRVUZhTEVOQlJGRTdPMEZCUjJRc1dVRkJTU3hYUVVGWExFTkJRVU1zUzBGQlN5eExRVUZNTEVOQlFWY3NZMEZCV0N4RFFVRXdRaXhIUVVFeFFpeERRVUZFTEVWQlFXbERPMEZCUXpWRExHMUNRVUZQTEV0QlFVc3NTMEZCVEN4RFFVRlhMRWRCUVZnc1NVRkJhMElzUzBGQlN5eE5RVUZNTEVOQlFWa3NVMEZCV2l4RFFVRnNRaXhEUVVSeFF6dFRRVUZvUkN4TlFVVlBPMEZCUTBnc2JVSkJRVThzUzBGQlN5eExRVUZNTEVOQlFWY3NSMEZCV0N4RFFVRlFMRU5CUkVjN1UwRkdVRHM3T3pzN096czdRVUZvUWtZc2MwSkJORUpHTEcxQ1FVRkpMRTlCUVU4N08wRkJSVkFzWVVGQlN5eEpRVUZKTEVkQlFVb3NTVUZCVnl4TFFVRm9RaXhGUVVGMVFqdEJRVU51UWl4blFrRkJTU3hOUVVGTkxHTkJRVTRzUTBGQmNVSXNSMEZCY2tJc1EwRkJTaXhGUVVFclFqdEJRVU16UWl4dlFrRkJUU3haUVVGWkxFdEJRVXNzVjBGQlRDeERRVUZwUWl4SFFVRnFRaXhEUVVGYUxFTkJSSEZDTzBGQlJUTkNMSEZDUVVGTExFdEJRVXdzUTBGQlZ5eEhRVUZZTEVsQlFXdENMRXRCUVVzc1lVRkJUQ3hEUVVGdFFpeFRRVUZ1UWl4SlFVRm5ReXhOUVVGTkxFZEJRVTRzUTBGQmFFTXNRMEZHVXp0aFFVRXZRanRUUVVSS096dEJRVTlCTEdWQlFVOHNTMEZCU3l4TlFVRk1MRU5CUVZrc1MwRkJTeXhoUVVGTUxFTkJRVzVDTEVOQlZFODdPenM3T3pzN1FVRTFRbFFzYzBKQk1rTkdMSGxDUVVGUExFdEJRVXM3UVVGRFVpeGxRVUZQTEV0QlFVc3NUMEZCVEN4RFFVRmhMRWRCUVdJc1EwRkJVQ3hEUVVSUk96czdPenM3TzBGQk0wTldMSE5DUVd0RVJpeDVRa0ZCVHl4UFFVRlBPMEZCUTFZc1lVRkJTeXhKUVVGSkxFZEJRVW9zU1VGQlZ5eExRVUZvUWl4RlFVRjFRanRCUVVOdVFpeG5Ra0ZCU1N4TlFVRk5MR05CUVU0c1EwRkJjVUlzUjBGQmNrSXNRMEZCU2l4RlFVRXJRanRCUVVNelFpeHhRa0ZCU3l4UFFVRk1MRU5CUVdFc1IwRkJZaXhKUVVGdlFpeE5RVUZOTEVkQlFVNHNRMEZCY0VJc1EwRkVNa0k3WVVGQkwwSTdVMEZFU2pzN096czdPenM3TzBGQmJrUkdMSE5DUVdkRlJpeHRRMEZCV1N4TFFVRkxPMEZCUTJJc1pVRkJUeXhKUVVGRExFTkJRVXNzVVVGQlRDeEhRVUZwUWl4TFFVRkxMRkZCUVV3c1EwRkJZeXhIUVVGa0xFdEJRWE5DTEVkQlFYUkNMRWRCUVRSQ0xFZEJRVGxETEVOQlJFMDdPenM3T3pzN096dEJRV2hGWml4elFrRXdSVVlzY1VOQlFXRXNTMEZCU3p0QlFVTmtMR1ZCUVU4c1NVRkJReXhEUVVGTExGbEJRVXdzUjBGQmNVSXNTMEZCU3l4WlFVRk1MRU5CUVd0Q0xFdEJRVXNzVjBGQlRDeERRVUZwUWl4SFFVRnFRaXhEUVVGc1FpeERRVUYwUWl4SFFVRnBSU3hMUVVGcVJTeERRVVJQT3pzN1YwRXhSV2hDT3pzN2EwSkJLMFZUTEZWQlFVTXNUMEZCUkR0WFFVRmhMRWxCUVVrc1QwRkJTaXhEUVVGWkxFOUJRVm83UTBGQllpSXNJbVpwYkdVaU9pSmhaR0Z3ZEdWeUxtcHpJaXdpYzI5MWNtTmxVbTl2ZENJNklpOVZjMlZ5Y3k5TllYUjBMMU5wZEdWekwzQnZjRzF2ZEdsdmJpSXNJbk52ZFhKalpYTkRiMjUwWlc1MElqcGJJaThxWEc0Z0lDQWdJeUJCWkdGd2RHVnlJR05zWVhOelhHNGdJQ0FnSXlNZ1VISnZkbWxrWlhNZ1lTQm5aWFIwWlhJdmMyVjBkR1Z5SUhkeVlYQndaWElnWVc1a0lIQnliM0JsY25SNUlHTmhZMmhsSUdadmNpQmthV1ptWlhKbGJuUWdaV3hsYldWdWRDQjBlWEJsYzF4dVhHNGdJQ0FnVDNabGNuSnBaR1VnWUdkbGRIUmxjbUFnWVc1a0lHQnpaWFIwWlhKZ0lIUnZJSEpsYVcxd2JHVnRaVzUwSUhSb1pTQnBiblJsY21aaFkyVWdabTl5SUc1bGR5QmxiR1Z0Wlc1MElIUjVjR1Z6TGx4dVhHNGdJQ0FnVTJWMElHQkZlSFJsYm1SbFpDNXdjbTkwYjNSNWNHVXVjM1JoZEdWTllYQmdJR0Z6SUdGdUlHOWlhbVZqZENCclpYa3ZkbUZzZFdVZ2JXRndJSFJ2SUhSeVlXNXpiR0YwWlNCcGJtTnZiV2x1WnlCclpYbHpJSFJ2WEc0Z0lDQWdRVkJKTFhOd1pXTnBabWxqSUd0bGVYTXVJRVp2Y2lCcGJuTjBZVzVqWlN3Z2V5QjRPaUFuZEhKaGJuTnNZWFJsV0NjZ2ZTNGdYRzVjYmlBZ0lDQlRaWFFnWUVWNGRHVnVaR1ZrTG5CeWIzUnZkSGx3WlM1MllXeDFaVlI1Y0dWTllYQmdJR0Z6SUdGdUlHOWlhbVZqZENCclpYa3ZkbUZzZFdVZ2JXRndJSFJ2SUhKbGRIVnliaUJoSUhaaGJIVmxJSFI1Y0dVZ2QybDBhRnh1SUNBZ0lHQm5aWFJXWVd4MVpWUjVjR1VvYTJWNUtXQWdLR3RsZVNCM2FXeHNJR0psSUcxaGNIQmxaQ0JoWTJOdmNtUnBibWNnZEc4Z1lITjBZWFJsVFdGd1lDbGNiaW92WEc1amJHRnpjeUJCWkdGd2RHVnlJSHRjYmlBZ0lDQmpiMjV6ZEhKMVkzUnZjaWhsYkdWdFpXNTBLU0I3WEc0Z0lDQWdJQ0FnSUhSb2FYTXVaV3hsYldWdWRDQTlJR1ZzWlcxbGJuUTdYRzRnSUNBZ0lDQWdJSFJvYVhNdVkyRmphR1VnUFNCN2ZUdGNiaUFnSUNBZ0lDQWdkR2hwY3k1cGJuUmxjbTVoYkVOaFkyaGxJRDBnZTMwN1hHNGdJQ0FnZlZ4dVhHNGdJQ0FnTHlwY2JpQWdJQ0FnSUNBZ1IyVjBJR1ZzWlcxbGJuUWdjSEp2Y0dWeWRIbGNibHh1SUNBZ0lDQWdJQ0JBY0dGeVlXMGdXM04wY21sdVoxMDZJRXRsZVNCMGJ5QnlaV0ZrWEc0Z0lDQWdJQ0FnSUVCd1lYSmhiU0JiWW05dmJHVmhibDA2SUVsbUlHQjBjblZsWUN3Z2QybHNiQ0J2ZG1WeWNtbGtaU0JqWVdOb1pXUWdjSEp2Y0dWeWRIbGNiaUFnSUNBcUwxeHVJQ0FnSUdkbGRDaHJaWGtzSUhKbFpuSmxjMmdwSUh0Y2JpQWdJQ0FnSUNBZ1kyOXVjM1FnYldGd2NHVmtTMlY1SUQwZ2RHaHBjeTV0WVhCVGRHRjBaVXRsZVNoclpYa3BPMXh1WEc0Z0lDQWdJQ0FnSUdsbUlDaHlaV1p5WlhOb0lIeDhJQ0YwYUdsekxtTmhZMmhsTG1oaGMwOTNibEJ5YjNCbGNuUjVLR3RsZVNrcElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUhKbGRIVnliaUIwYUdsekxtTmhZMmhsVzJ0bGVWMGdQU0IwYUdsekxtZGxkSFJsY2lodFlYQndaV1JMWlhrcE8xeHVJQ0FnSUNBZ0lDQjlJR1ZzYzJVZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnY21WMGRYSnVJSFJvYVhNdVkyRmphR1ZiYTJWNVhUdGNiaUFnSUNBZ0lDQWdmVnh1SUNBZ0lIMWNibHh1SUNBZ0lDOHFYRzRnSUNBZ0lDQWdJRk5sZENCbGJHVnRaVzUwSUhCeWIzQmxjblJwWlhOY2JseHVJQ0FnSUNBZ0lDQkFjR0Z5WVcwZ1cyOWlhbVZqZEYwNklFdGxlUzkyWVd4MVpTQndjbTl3WlhKMGFXVnpJSFJ2SUhObGRGeHVJQ0FnSUNvdlhHNGdJQ0FnYzJWMEtIQnliM0J6S1NCN1hHNGdJQ0FnSUNBZ0lDOHZJRlJ5WVc1emJHRjBaU0J3Y205d2MxeHVJQ0FnSUNBZ0lDQm1iM0lnS0d4bGRDQnJaWGtnYVc0Z2NISnZjSE1wSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJR2xtSUNod2NtOXdjeTVvWVhOUGQyNVFjbTl3WlhKMGVTaHJaWGtwS1NCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ1kyOXVjM1FnYldGd2NHVmtTMlY1SUQwZ2RHaHBjeTV0WVhCVGRHRjBaVXRsZVNoclpYa3BPMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJSFJvYVhNdVkyRmphR1ZiYTJWNVhTQTlJSFJvYVhNdWFXNTBaWEp1WVd4RFlXTm9aVnR0WVhCd1pXUkxaWGxkSUQwZ2NISnZjSE5iYTJWNVhUdGNiaUFnSUNBZ0lDQWdJQ0FnSUgxY2JpQWdJQ0FnSUNBZ2ZWeHVYRzRnSUNBZ0lDQWdJSEpsZEhWeWJpQjBhR2x6TG5ObGRIUmxjaWgwYUdsekxtbHVkR1Z5Ym1Gc1EyRmphR1VwTzF4dUlDQWdJSDFjYmx4dUlDQWdJQzhxWEc0Z0lDQWdJQ0FnSUU5MlpYSnlhV1JoWW14bElHVnNaVzFsYm5RZ1oyVjBkR1Z5SUMwZ1pHVm1ZWFZzZENCbWIzSWdjR3hoYVc0Z2IySnFaV04wSUZ4dUlDQWdJQ292WEc0Z0lDQWdaMlYwZEdWeUtHdGxlU2tnZTF4dUlDQWdJQ0FnSUNCeVpYUjFjbTRnZEdocGN5NWxiR1Z0Wlc1MFcydGxlVjA3WEc0Z0lDQWdmVnh1WEc0Z0lDQWdMeXBjYmlBZ0lDQWdJQ0FnVDNabGNuSnBaR0ZpYkdVZ1pXeGxiV1Z1ZENCelpYUjBaWElnTFNCa1pXWmhkV3gwSUdadmNpQndiR0ZwYmlCdlltcGxZM1JjYmlBZ0lDQXFMMXh1SUNBZ0lITmxkSFJsY2lod2NtOXdjeWtnZTF4dUlDQWdJQ0FnSUNCbWIzSWdLR3hsZENCclpYa2dhVzRnY0hKdmNITXBJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lHbG1JQ2h3Y205d2N5NW9ZWE5QZDI1UWNtOXdaWEowZVNoclpYa3BLU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnZEdocGN5NWxiR1Z0Wlc1MFcydGxlVjBnUFNCd2NtOXdjMXRyWlhsZE8xeHVJQ0FnSUNBZ0lDQWdJQ0FnZlZ4dUlDQWdJQ0FnSUNCOVhHNGdJQ0FnZlZ4dVhHNGdJQ0FnTHlwY2JpQWdJQ0FnSUNBZ1RXRndJSE4wWVhSbElHdGxlU0JoY3lCd1pYSWdZSE4wWVhSbFRXRndZQ3dnYVdZZ2NISmxjMlZ1ZEZ4dVhHNGdJQ0FnSUNBZ0lFQndZWEpoYlNCYmMzUnlhVzVuWFRvZ1MyVjVJSFJ2SUcxaGNGeHVJQ0FnSUNBZ0lDQkFjbVYwZFhKdUlGdHpkSEpwYm1kZE9pQk5ZWEJ3WldRZ2EyVjVMQ0J2Y2lCdmNtbG5hVzVoYkNCclpYa2dhV1lnYm05dVpTQm1iM1Z1WkZ4dUlDQWdJQ292WEc0Z0lDQWdiV0Z3VTNSaGRHVkxaWGtvYTJWNUtTQjdYRzRnSUNBZ0lDQWdJSEpsZEhWeWJpQW9kR2hwY3k1emRHRjBaVTFoY0NrZ1B5QjBhR2x6TG5OMFlYUmxUV0Z3VzJ0bGVWMGdmSHdnYTJWNUlEb2dhMlY1TzF4dUlDQWdJSDFjYmx4dUlDQWdJQzhxWEc0Z0lDQWdJQ0FnSUVkbGRDQjJZV3gxWlZSNWNHVWdiMllnY0hKdmRtbGtaV1FnYTJWNVhHNWNiaUFnSUNBZ0lDQWdRSEJoY21GdElGdHpkSEpwYm1kZE9pQk9ZVzFsSUc5bUlIQnliM0JsY25SNUlIUnZJRzFoY0Z4dUlDQWdJQ0FnSUNCQWNtVjBkWEp1SUZ0MllXeDFaVlI1Y0dWZE9pQldZV3gxWlNCMGVYQmxJRzltSUhCeWIzQmxjblI1WEc0Z0lDQWdLaTljYmlBZ0lDQm5aWFJXWVd4MVpWUjVjR1VvYTJWNUtTQjdYRzRnSUNBZ0lDQWdJSEpsZEhWeWJpQW9kR2hwY3k1MllXeDFaVlI1Y0dWTllYQXBJRDhnZEdocGN5NTJZV3gxWlZSNWNHVk5ZWEJiZEdocGN5NXRZWEJUZEdGMFpVdGxlU2hyWlhrcFhTQTZJR1poYkhObE8xeHVJQ0FnSUgxY2JuMWNibHh1Wlhod2IzSjBJR1JsWm1GMWJIUWdLR1ZzWlcxbGJuUXBJRDArSUc1bGR5QkJaR0Z3ZEdWeUtHVnNaVzFsYm5RcE95SmRmUT09XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9hZGFwdGVyL2FkYXB0ZXIuanNcbiAqKiBtb2R1bGUgaWQgPSAxM1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0cy5nZXR0ZXIgPSBnZXR0ZXI7XG5leHBvcnRzLnNldHRlciA9IHNldHRlcjtcblxudmFyIF9hZGFwdGVyID0gcmVxdWlyZSgnLi9hZGFwdGVyJyk7XG5cbnZhciBfYWRhcHRlcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9hZGFwdGVyKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gZ2V0dGVyKGtleSkge1xuICAgIHJldHVybiB0aGlzLmVsZW1lbnQuZ2V0QXR0cmlidXRlKGtleSk7XG59XG5cbmZ1bmN0aW9uIHNldHRlcihwcm9wcykge1xuICAgIGZvciAodmFyIGtleSBpbiBwcm9wcykge1xuICAgICAgICBpZiAocHJvcHMuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgICAgdGhpcy5lbGVtZW50LnNldEF0dHJpYnV0ZShrZXksIHByb3BzW2tleV0pO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbiAoZWxlbWVudCkge1xuICAgIHZhciBhdHRyQWRhcHRlciA9ICgwLCBfYWRhcHRlcjIuZGVmYXVsdCkoZWxlbWVudCk7XG5cbiAgICBhdHRyQWRhcHRlci5nZXR0ZXIgPSBnZXR0ZXI7XG4gICAgYXR0ckFkYXB0ZXIuc2V0dGVyID0gc2V0dGVyO1xuXG4gICAgcmV0dXJuIGF0dHJBZGFwdGVyO1xufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbk55WXk5aFpHRndkR1Z5TDJGMGRISXRZV1JoY0hSbGNpNXFjeUpkTENKdVlXMWxjeUk2VzEwc0ltMWhjSEJwYm1keklqb2lPenM3VVVGRlowSTdVVUZKUVRzN096czdPenM3UVVGS1ZDeFRRVUZUTEUxQlFWUXNRMEZCWjBJc1IwRkJhRUlzUlVGQmNVSTdRVUZEZUVJc1YwRkJUeXhMUVVGTExFOUJRVXdzUTBGQllTeFpRVUZpTEVOQlFUQkNMRWRCUVRGQ0xFTkJRVkFzUTBGRWQwSTdRMEZCY2tJN08wRkJTVUVzVTBGQlV5eE5RVUZVTEVOQlFXZENMRXRCUVdoQ0xFVkJRWFZDTzBGQlF6RkNMRk5CUVVzc1NVRkJTU3hIUVVGS0xFbEJRVmNzUzBGQmFFSXNSVUZCZFVJN1FVRkRia0lzV1VGQlNTeE5RVUZOTEdOQlFVNHNRMEZCY1VJc1IwRkJja0lzUTBGQlNpeEZRVUVyUWp0QlFVTXpRaXhwUWtGQlN5eFBRVUZNTEVOQlFXRXNXVUZCWWl4RFFVRXdRaXhIUVVFeFFpeEZRVUVyUWl4TlFVRk5MRWRCUVU0c1EwRkJMMElzUlVGRU1rSTdVMEZCTDBJN1MwRkVTanREUVVSSE96dHJRa0ZSVVN4VlFVRkRMRTlCUVVRc1JVRkJZVHRCUVVONFFpeFJRVUZOTEdOQlFXTXNkVUpCUVZFc1QwRkJVaXhEUVVGa0xFTkJSR3RDT3p0QlFVZDRRaXhuUWtGQldTeE5RVUZhTEVkQlFYRkNMRTFCUVhKQ0xFTkJTSGRDTzBGQlNYaENMR2RDUVVGWkxFMUJRVm9zUjBGQmNVSXNUVUZCY2tJc1EwRktkMEk3TzBGQlRYaENMRmRCUVU4c1YwRkJVQ3hEUVU1M1FqdERRVUZpSWl3aVptbHNaU0k2SW1GMGRISXRZV1JoY0hSbGNpNXFjeUlzSW5OdmRYSmpaVkp2YjNRaU9pSXZWWE5sY25NdlRXRjBkQzlUYVhSbGN5OXdiM0J0YjNScGIyNGlMQ0p6YjNWeVkyVnpRMjl1ZEdWdWRDSTZXeUpwYlhCdmNuUWdZV1JoY0hSbGNpQm1jbTl0SUNjdUwyRmtZWEIwWlhJbk8xeHVYRzVsZUhCdmNuUWdablZ1WTNScGIyNGdaMlYwZEdWeUtHdGxlU2tnZTF4dUlDQWdJSEpsZEhWeWJpQjBhR2x6TG1Wc1pXMWxiblF1WjJWMFFYUjBjbWxpZFhSbEtHdGxlU2s3WEc1OVhHNWNibVY0Y0c5eWRDQm1kVzVqZEdsdmJpQnpaWFIwWlhJb2NISnZjSE1wSUh0Y2JpQWdJQ0JtYjNJZ0tHeGxkQ0JyWlhrZ2FXNGdjSEp2Y0hNcElIdGNiaUFnSUNBZ0lDQWdhV1lnS0hCeWIzQnpMbWhoYzA5M2JsQnliM0JsY25SNUtHdGxlU2twSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJSFJvYVhNdVpXeGxiV1Z1ZEM1elpYUkJkSFJ5YVdKMWRHVW9hMlY1TENCd2NtOXdjMXRyWlhsZEtUdGNiaUFnSUNBZ0lDQWdmVnh1SUNBZ0lIMWNibjFjYmx4dVpYaHdiM0owSUdSbFptRjFiSFFnS0dWc1pXMWxiblFwSUQwK0lIdGNiaUFnSUNCamIyNXpkQ0JoZEhSeVFXUmhjSFJsY2lBOUlHRmtZWEIwWlhJb1pXeGxiV1Z1ZENrN1hHNWNiaUFnSUNCaGRIUnlRV1JoY0hSbGNpNW5aWFIwWlhJZ1BTQm5aWFIwWlhJN1hHNGdJQ0FnWVhSMGNrRmtZWEIwWlhJdWMyVjBkR1Z5SUQwZ2MyVjBkR1Z5TzF4dVhHNGdJQ0FnY21WMGRYSnVJR0YwZEhKQlpHRndkR1Z5TzF4dWZUdGNiaUpkZlE9PVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvYWRhcHRlci9hdHRyLWFkYXB0ZXIuanNcbiAqKiBtb2R1bGUgaWQgPSAxNFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX3N0YXRlTWFwID0gcmVxdWlyZSgnLi9jc3Mvc3RhdGUtbWFwJyk7XG5cbnZhciBfc3RhdGVNYXAyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfc3RhdGVNYXApO1xuXG52YXIgX3ZhbHVlVHlwZU1hcCA9IHJlcXVpcmUoJy4vY3NzL3ZhbHVlLXR5cGUtbWFwJyk7XG5cbnZhciBfdmFsdWVUeXBlTWFwMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3ZhbHVlVHlwZU1hcCk7XG5cbnZhciBfYnVpbGQgPSByZXF1aXJlKCcuL2Nzcy9idWlsZCcpO1xuXG52YXIgX2J1aWxkMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2J1aWxkKTtcblxudmFyIF9wcmVmaXhlciA9IHJlcXVpcmUoJy4vY3NzL3ByZWZpeGVyJyk7XG5cbnZhciBfcHJlZml4ZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcHJlZml4ZXIpO1xuXG52YXIgX3RyYW5zZm9ybVByb3BzID0gcmVxdWlyZSgnLi9jc3MvdHJhbnNmb3JtLXByb3BzJyk7XG5cbnZhciBfdHJhbnNmb3JtUHJvcHMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfdHJhbnNmb3JtUHJvcHMpO1xuXG52YXIgX2FkYXB0ZXIgPSByZXF1aXJlKCcuL2FkYXB0ZXInKTtcblxudmFyIF9hZGFwdGVyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2FkYXB0ZXIpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBnZXR0ZXIoa2V5KSB7XG4gICAgcmV0dXJuICFfdHJhbnNmb3JtUHJvcHMyLmRlZmF1bHRba2V5XSA/IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKHRoaXMuZWxlbWVudCwgbnVsbClbKDAsIF9wcmVmaXhlcjIuZGVmYXVsdCkoa2V5KV0gOiBfdmFsdWVUeXBlTWFwMi5kZWZhdWx0W2tleV0uZGVmYXVsdFByb3BzLmN1cnJlbnQgfHwgMDtcbn1cblxuZnVuY3Rpb24gc2V0dGVyKHByb3BzKSB7XG4gICAgdGhpcy5lbGVtZW50LnN0eWxlLmNzc1RleHQgKz0gKDAsIF9idWlsZDIuZGVmYXVsdCkocHJvcHMpO1xufVxuXG5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbiAoZWxlbWVudCkge1xuICAgIHZhciBjc3NBZGFwdGVyID0gKDAsIF9hZGFwdGVyMi5kZWZhdWx0KShlbGVtZW50KTtcbiAgICBjc3NBZGFwdGVyLnN0YXRlTWFwID0gX3N0YXRlTWFwMi5kZWZhdWx0O1xuICAgIGNzc0FkYXB0ZXIudmFsdWVUeXBlTWFwID0gX3ZhbHVlVHlwZU1hcDIuZGVmYXVsdDtcbiAgICBjc3NBZGFwdGVyLmdldHRlciA9IGdldHRlcjtcbiAgICBjc3NBZGFwdGVyLnNldHRlciA9IHNldHRlcjtcblxuICAgIHJldHVybiBjc3NBZGFwdGVyO1xufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbk55WXk5aFpHRndkR1Z5TDJOemN5MWhaR0Z3ZEdWeUxtcHpJbDBzSW01aGJXVnpJanBiWFN3aWJXRndjR2x1WjNNaU9pSTdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenRCUVU5QkxGTkJRVk1zVFVGQlZDeERRVUZwUWl4SFFVRnFRaXhGUVVGelFqdEJRVU5zUWl4WFFVRlBMRU5CUVVVc2VVSkJRV1VzUjBGQlppeERRVUZFTEVkQlEwb3NUMEZCVHl4blFrRkJVQ3hEUVVGM1FpeExRVUZMTEU5QlFVd3NSVUZCWXl4SlFVRjBReXhGUVVFMFF5eDNRa0ZCVXl4SFFVRlVMRU5CUVRWRExFTkJSRWNzUjBGRlNDeDFRa0ZCWVN4SFFVRmlMRVZCUVd0Q0xGbEJRV3hDTEVOQlFTdENMRTlCUVM5Q0xFbEJRVEJETEVOQlFURkRMRU5CU0dNN1EwRkJkRUk3TzBGQlRVRXNVMEZCVXl4TlFVRlVMRU5CUVdkQ0xFdEJRV2hDTEVWQlFYVkNPMEZCUTI1Q0xGTkJRVXNzVDBGQlRDeERRVUZoTEV0QlFXSXNRMEZCYlVJc1QwRkJia0lzU1VGQk9FSXNjVUpCUVc5Q0xFdEJRWEJDTEVOQlFUbENMRU5CUkcxQ08wTkJRWFpDT3p0clFrRkpaU3hWUVVGRExFOUJRVVFzUlVGQllUdEJRVU40UWl4UlFVRk5MR0ZCUVdFc2RVSkJRVkVzVDBGQlVpeERRVUZpTEVOQlJHdENPMEZCUlhoQ0xHVkJRVmNzVVVGQldDeHpRa0ZHZDBJN1FVRkhlRUlzWlVGQlZ5eFpRVUZZTERCQ1FVaDNRanRCUVVsNFFpeGxRVUZYTEUxQlFWZ3NSMEZCYjBJc1RVRkJjRUlzUTBGS2QwSTdRVUZMZUVJc1pVRkJWeXhOUVVGWUxFZEJRVzlDTEUxQlFYQkNMRU5CVEhkQ096dEJRVTk0UWl4WFFVRlBMRlZCUVZBc1EwRlFkMEk3UTBGQllpSXNJbVpwYkdVaU9pSmpjM010WVdSaGNIUmxjaTVxY3lJc0luTnZkWEpqWlZKdmIzUWlPaUl2VlhObGNuTXZUV0YwZEM5VGFYUmxjeTl3YjNCdGIzUnBiMjRpTENKemIzVnlZMlZ6UTI5dWRHVnVkQ0k2V3lKcGJYQnZjblFnYzNSaGRHVk5ZWEFnWm5KdmJTQW5MaTlqYzNNdmMzUmhkR1V0YldGd0p6dGNibWx0Y0c5eWRDQjJZV3gxWlZSNWNHVk5ZWEFnWm5KdmJTQW5MaTlqYzNNdmRtRnNkV1V0ZEhsd1pTMXRZWEFuTzF4dWFXMXdiM0owSUdKMWFXeGtVSEp2Y0dWeWRIbFRkSEpwYm1jZ1puSnZiU0FuTGk5amMzTXZZblZwYkdRbk8xeHVhVzF3YjNKMElIQnlaV1pwZUdWeUlHWnliMjBnSnk0dlkzTnpMM0J5WldacGVHVnlKenRjYm1sdGNHOXlkQ0IwY21GdWMyWnZjbTFRY205d2N5Qm1jbTl0SUNjdUwyTnpjeTkwY21GdWMyWnZjbTB0Y0hKdmNITW5PMXh1YVcxd2IzSjBJR0ZrWVhCMFpYSWdabkp2YlNBbkxpOWhaR0Z3ZEdWeUp6dGNibHh1Wm5WdVkzUnBiMjRnWjJWMGRHVnlJQ2hyWlhrcElIdGNiaUFnSUNCeVpYUjFjbTRnS0NGMGNtRnVjMlp2Y20xUWNtOXdjMXRyWlhsZEtTQS9YRzRnSUNBZ0lDQWdJSGRwYm1SdmR5NW5aWFJEYjIxd2RYUmxaRk4wZVd4bEtIUm9hWE11Wld4bGJXVnVkQ3dnYm5Wc2JDbGJjSEpsWm1sNFpYSW9hMlY1S1YwZ09seHVJQ0FnSUNBZ0lDQjJZV3gxWlZSNWNHVk5ZWEJiYTJWNVhTNWtaV1poZFd4MFVISnZjSE11WTNWeWNtVnVkQ0I4ZkNBd08xeHVmVnh1WEc1bWRXNWpkR2x2YmlCelpYUjBaWElvY0hKdmNITXBJSHRjYmlBZ0lDQjBhR2x6TG1Wc1pXMWxiblF1YzNSNWJHVXVZM056VkdWNGRDQXJQU0JpZFdsc1pGQnliM0JsY25SNVUzUnlhVzVuS0hCeWIzQnpLVHRjYm4xY2JseHVaWGh3YjNKMElHUmxabUYxYkhRZ0tHVnNaVzFsYm5RcElEMCtJSHRjYmlBZ0lDQmpiMjV6ZENCamMzTkJaR0Z3ZEdWeUlEMGdZV1JoY0hSbGNpaGxiR1Z0Wlc1MEtUdGNiaUFnSUNCamMzTkJaR0Z3ZEdWeUxuTjBZWFJsVFdGd0lEMGdjM1JoZEdWTllYQTdYRzRnSUNBZ1kzTnpRV1JoY0hSbGNpNTJZV3gxWlZSNWNHVk5ZWEFnUFNCMllXeDFaVlI1Y0dWTllYQTdYRzRnSUNBZ1kzTnpRV1JoY0hSbGNpNW5aWFIwWlhJZ1BTQm5aWFIwWlhJN1hHNGdJQ0FnWTNOelFXUmhjSFJsY2k1elpYUjBaWElnUFNCelpYUjBaWEk3WEc1Y2JpQWdJQ0J5WlhSMWNtNGdZM056UVdSaGNIUmxjanRjYm4wN1hHNGlYWDA9XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9hZGFwdGVyL2Nzcy1hZGFwdGVyLmpzXG4gKiogbW9kdWxlIGlkID0gMTVcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHMuc2V0dGVyID0gc2V0dGVyO1xuXG52YXIgX3N0YXRlTWFwID0gcmVxdWlyZSgnLi9jc3Mvc3RhdGUtbWFwJyk7XG5cbnZhciBfc3RhdGVNYXAyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfc3RhdGVNYXApO1xuXG52YXIgX3ZhbHVlVHlwZU1hcCA9IHJlcXVpcmUoJy4vc3ZnL3ZhbHVlLXR5cGUtbWFwJyk7XG5cbnZhciBfdmFsdWVUeXBlTWFwMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3ZhbHVlVHlwZU1hcCk7XG5cbnZhciBfYnVpbGQgPSByZXF1aXJlKCcuL3N2Zy9idWlsZCcpO1xuXG52YXIgX2J1aWxkMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2J1aWxkKTtcblxudmFyIF9hdHRyQWRhcHRlciA9IHJlcXVpcmUoJy4vYXR0ci1hZGFwdGVyJyk7XG5cbnZhciBfYWRhcHRlciA9IHJlcXVpcmUoJy4vYWRhcHRlcicpO1xuXG52YXIgX2FkYXB0ZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfYWRhcHRlcik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIHNldHRlcihwcm9wcykge1xuICAgICgwLCBfYXR0ckFkYXB0ZXIuc2V0dGVyKSgoMCwgX2J1aWxkMi5kZWZhdWx0KShwcm9wcywgdGhpcy5vcmlnaW4pKTtcbn1cblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gKGVsZW1lbnQpIHtcbiAgICB2YXIgc3ZnQWRhcHRlciA9ICgwLCBfYWRhcHRlcjIuZGVmYXVsdCkoZWxlbWVudCk7XG4gICAgc3ZnQWRhcHRlci5zdGF0ZU1hcCA9IF9zdGF0ZU1hcDIuZGVmYXVsdDtcbiAgICBzdmdBZGFwdGVyLnZhbHVlVHlwZU1hcCA9IF92YWx1ZVR5cGVNYXAyLmRlZmF1bHQ7XG4gICAgc3ZnQWRhcHRlci5nZXR0ZXIgPSBfYXR0ckFkYXB0ZXIuZ2V0dGVyO1xuICAgIHN2Z0FkYXB0ZXIuc2V0dGVyID0gc2V0dGVyO1xuXG4gICAgdmFyIGJCb3ggPSBlbGVtZW50LmdldEJCb3goKTtcbiAgICB2YXIgdHJhbnNmb3JtT3JpZ2luWSA9IDA7XG4gICAgdmFyIHRyYW5zZm9ybU9yaWdpblggPSAwO1xuXG4gICAgc3ZnQWRhcHRlci5vcmlnaW4gPSB7XG4gICAgICAgIHg6IGJCb3gud2lkdGggKiAodHJhbnNmb3JtT3JpZ2luWCAvIDEwMCkgKyBiQm94LngsXG4gICAgICAgIHk6IGJCb3guaGVpZ2h0ICogKHRyYW5zZm9ybU9yaWdpblkgLyAxMDApICsgYkJveC55XG4gICAgfTtcblxuICAgIHJldHVybiBzdmdBZGFwdGVyO1xufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbk55WXk5aFpHRndkR1Z5TDNOMlp5MWhaR0Z3ZEdWeUxtcHpJbDBzSW01aGJXVnpJanBiWFN3aWJXRndjR2x1WjNNaU9pSTdPenRSUVUxblFqczdPenM3T3pzN096czdPenM3T3pzN096czdPenRCUVVGVUxGTkJRVk1zVFVGQlZDeERRVUZuUWl4TFFVRm9RaXhGUVVGMVFqdEJRVU14UWl3MlFrRkJWeXh4UWtGQlRTeExRVUZPTEVWQlFXRXNTMEZCU3l4TlFVRk1MRU5CUVhoQ0xFVkJSREJDTzBOQlFYWkNPenRyUWtGSlVTeFZRVUZETEU5QlFVUXNSVUZCWVR0QlFVTjRRaXhSUVVGTkxHRkJRV0VzZFVKQlFWRXNUMEZCVWl4RFFVRmlMRU5CUkd0Q08wRkJSWGhDTEdWQlFWY3NVVUZCV0N4elFrRkdkMEk3UVVGSGVFSXNaVUZCVnl4WlFVRllMREJDUVVoM1FqdEJRVWw0UWl4bFFVRlhMRTFCUVZnc2RVSkJTbmRDTzBGQlMzaENMR1ZCUVZjc1RVRkJXQ3hIUVVGdlFpeE5RVUZ3UWl4RFFVeDNRanM3UVVGUGVFSXNVVUZCVFN4UFFVRlBMRkZCUVZFc1QwRkJVaXhGUVVGUUxFTkJVR3RDTzBGQlVYaENMRkZCUVUwc2JVSkJRVzFDTEVOQlFXNUNMRU5CVW10Q08wRkJVM2hDTEZGQlFVMHNiVUpCUVcxQ0xFTkJRVzVDTEVOQlZHdENPenRCUVZkNFFpeGxRVUZYTEUxQlFWZ3NSMEZCYjBJN1FVRkRhRUlzVjBGQlJ5eExRVUZMTEV0QlFVd3NTVUZCWXl4dFFrRkJiVUlzUjBGQmJrSXNRMEZCWkN4SFFVRjNReXhMUVVGTExFTkJRVXc3UVVGRE0wTXNWMEZCUnl4TFFVRkxMRTFCUVV3c1NVRkJaU3h0UWtGQmJVSXNSMEZCYmtJc1EwRkJaaXhIUVVGNVF5eExRVUZMTEVOQlFVdzdTMEZHYUVRc1EwRllkMEk3TzBGQlowSjRRaXhYUVVGUExGVkJRVkFzUTBGb1FuZENPME5CUVdJaUxDSm1hV3hsSWpvaWMzWm5MV0ZrWVhCMFpYSXVhbk1pTENKemIzVnlZMlZTYjI5MElqb2lMMVZ6WlhKekwwMWhkSFF2VTJsMFpYTXZjRzl3Ylc5MGFXOXVJaXdpYzI5MWNtTmxjME52Ym5SbGJuUWlPbHNpYVcxd2IzSjBJSE4wWVhSbFRXRndJR1p5YjIwZ0p5NHZZM056TDNOMFlYUmxMVzFoY0NjN1hHNXBiWEJ2Y25RZ2RtRnNkV1ZVZVhCbFRXRndJR1p5YjIwZ0p5NHZjM1puTDNaaGJIVmxMWFI1Y0dVdGJXRndKenRjYm1sdGNHOXlkQ0JpZFdsc1pDQm1jbTl0SUNjdUwzTjJaeTlpZFdsc1pDYzdYRzVwYlhCdmNuUWdleUJuWlhSMFpYSXNJSE5sZEhSbGNpQmhjeUJoZEhSeVUyVjBkR1Z5SUgwZ1puSnZiU0FuTGk5aGRIUnlMV0ZrWVhCMFpYSW5PMXh1YVcxd2IzSjBJR0ZrWVhCMFpYSWdabkp2YlNBbkxpOWhaR0Z3ZEdWeUp6dGNibHh1Wlhod2IzSjBJR1oxYm1OMGFXOXVJSE5sZEhSbGNpaHdjbTl3Y3lrZ2UxeHVJQ0FnSUdGMGRISlRaWFIwWlhJb1luVnBiR1FvY0hKdmNITXNJSFJvYVhNdWIzSnBaMmx1S1NrN1hHNTlYRzVjYm1WNGNHOXlkQ0JrWldaaGRXeDBJQ2hsYkdWdFpXNTBLU0E5UGlCN1hHNGdJQ0FnWTI5dWMzUWdjM1puUVdSaGNIUmxjaUE5SUdGa1lYQjBaWElvWld4bGJXVnVkQ2s3WEc0Z0lDQWdjM1puUVdSaGNIUmxjaTV6ZEdGMFpVMWhjQ0E5SUhOMFlYUmxUV0Z3TzF4dUlDQWdJSE4yWjBGa1lYQjBaWEl1ZG1Gc2RXVlVlWEJsVFdGd0lEMGdkbUZzZFdWVWVYQmxUV0Z3TzF4dUlDQWdJSE4yWjBGa1lYQjBaWEl1WjJWMGRHVnlJRDBnWjJWMGRHVnlPMXh1SUNBZ0lITjJaMEZrWVhCMFpYSXVjMlYwZEdWeUlEMGdjMlYwZEdWeU8xeHVYRzRnSUNBZ1kyOXVjM1FnWWtKdmVDQTlJR1ZzWlcxbGJuUXVaMlYwUWtKdmVDZ3BPMXh1SUNBZ0lHTnZibk4wSUhSeVlXNXpabTl5YlU5eWFXZHBibGtnUFNBd08xeHVJQ0FnSUdOdmJuTjBJSFJ5WVc1elptOXliVTl5YVdkcGJsZ2dQU0F3TzF4dVhHNGdJQ0FnYzNablFXUmhjSFJsY2k1dmNtbG5hVzRnUFNCN1hHNGdJQ0FnSUNBZ0lIZzZJR0pDYjNndWQybGtkR2dnS2lBb2RISmhibk5tYjNKdFQzSnBaMmx1V0NBdklERXdNQ2tnS3lCaVFtOTRMbmdzWEc0Z0lDQWdJQ0FnSUhrNklHSkNiM2d1YUdWcFoyaDBJQ29nS0hSeVlXNXpabTl5YlU5eWFXZHBibGtnTHlBeE1EQXBJQ3NnWWtKdmVDNTVYRzRnSUNBZ2ZUdGNibHh1SUNBZ0lISmxkSFZ5YmlCemRtZEJaR0Z3ZEdWeU8xeHVmVHRjYmx4dUlsMTlcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2FkYXB0ZXIvc3ZnLWFkYXB0ZXIuanNcbiAqKiBtb2R1bGUgaWQgPSAxNlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX2J1aWxkID0gcmVxdWlyZSgnLi9zdmctcGF0aC9idWlsZCcpO1xuXG52YXIgX2J1aWxkMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2J1aWxkKTtcblxudmFyIF9zdGF0ZU1hcCA9IHJlcXVpcmUoJy4vc3ZnLXBhdGgvc3RhdGUtbWFwJyk7XG5cbnZhciBfc3RhdGVNYXAyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfc3RhdGVNYXApO1xuXG52YXIgX3N2Z0FkYXB0ZXIgPSByZXF1aXJlKCcuL3N2Zy1hZGFwdGVyJyk7XG5cbnZhciBfc3ZnQWRhcHRlcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9zdmdBZGFwdGVyKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gc2V0dGVyKHByb3BzKSB7XG4gICAgdGhpcy5zdmdTZXR0ZXIoKDAsIF9idWlsZDIuZGVmYXVsdCkocHJvcHMsIHRoaXMucGF0aExlbmd0aCkpO1xufVxuXG5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbiAoZWxlbWVudCkge1xuICAgIHZhciBhZGFwdGVyID0gKDAsIF9zdmdBZGFwdGVyMi5kZWZhdWx0KShlbGVtZW50KTtcblxuICAgIGFkYXB0ZXIuc3RhdGVNYXAgPSBfc3RhdGVNYXAyLmRlZmF1bHQ7XG4gICAgYWRhcHRlci5zZXR0ZXIgPSBzZXR0ZXI7XG4gICAgYWRhcHRlci5zdmdTZXR0ZXIgPSBfc3ZnQWRhcHRlci5zZXR0ZXI7XG4gICAgYWRhcHRlci5wYXRoTGVuZ3RoID0gZWxlbWVudC5nZXRUb3RhbExlbmd0aCgpO1xuXG4gICAgcmV0dXJuIGFkYXB0ZXI7XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluTnlZeTloWkdGd2RHVnlMM04yWnkxd1lYUm9MV0ZrWVhCMFpYSXVhbk1pWFN3aWJtRnRaWE1pT2x0ZExDSnRZWEJ3YVc1bmN5STZJanM3T3pzN096czdPenM3T3pzN096czdPMEZCU1VFc1UwRkJVeXhOUVVGVUxFTkJRV2RDTEV0QlFXaENMRVZCUVhWQ08wRkJRMjVDTEZOQlFVc3NVMEZCVEN4RFFVRmxMSEZDUVVGTkxFdEJRVTRzUlVGQllTeExRVUZMTEZWQlFVd3NRMEZCTlVJc1JVRkViVUk3UTBGQmRrSTdPMnRDUVVsbExGVkJRVU1zVDBGQlJDeEZRVUZoTzBGQlEzaENMRkZCUVUwc1ZVRkJWU3d3UWtGQlZ5eFBRVUZZTEVOQlFWWXNRMEZFYTBJN08wRkJSM2hDTEZsQlFWRXNVVUZCVWl4elFrRklkMEk3UVVGSmVFSXNXVUZCVVN4TlFVRlNMRWRCUVdsQ0xFMUJRV3BDTEVOQlNuZENPMEZCUzNoQ0xGbEJRVkVzVTBGQlVpeHpRa0ZNZDBJN1FVRk5lRUlzV1VGQlVTeFZRVUZTTEVkQlFYRkNMRkZCUVZFc1kwRkJVaXhGUVVGeVFpeERRVTUzUWpzN1FVRlJlRUlzVjBGQlR5eFBRVUZRTEVOQlVuZENPME5CUVdJaUxDSm1hV3hsSWpvaWMzWm5MWEJoZEdndFlXUmhjSFJsY2k1cWN5SXNJbk52ZFhKalpWSnZiM1FpT2lJdlZYTmxjbk12VFdGMGRDOVRhWFJsY3k5d2IzQnRiM1JwYjI0aUxDSnpiM1Z5WTJWelEyOXVkR1Z1ZENJNld5SnBiWEJ2Y25RZ1luVnBiR1FnWm5KdmJTQW5MaTl6ZG1jdGNHRjBhQzlpZFdsc1pDYzdYRzVwYlhCdmNuUWdjM1JoZEdWTllYQWdabkp2YlNBbkxpOXpkbWN0Y0dGMGFDOXpkR0YwWlMxdFlYQW5PMXh1YVcxd2IzSjBJSE4yWjBGa1lYQjBaWElzSUhzZ2MyVjBkR1Z5SUdGeklITjJaMU5sZEhSbGNpQjlJR1p5YjIwZ0p5NHZjM1puTFdGa1lYQjBaWEluTzF4dVhHNW1kVzVqZEdsdmJpQnpaWFIwWlhJb2NISnZjSE1wSUh0Y2JpQWdJQ0IwYUdsekxuTjJaMU5sZEhSbGNpaGlkV2xzWkNod2NtOXdjeXdnZEdocGN5NXdZWFJvVEdWdVozUm9LU2s3WEc1OVhHNWNibVY0Y0c5eWRDQmtaV1poZFd4MElDaGxiR1Z0Wlc1MEtTQTlQaUI3WEc0Z0lDQWdZMjl1YzNRZ1lXUmhjSFJsY2lBOUlITjJaMEZrWVhCMFpYSW9aV3hsYldWdWRDazdYRzVjYmlBZ0lDQmhaR0Z3ZEdWeUxuTjBZWFJsVFdGd0lEMGdjM1JoZEdWTllYQTdYRzRnSUNBZ1lXUmhjSFJsY2k1elpYUjBaWElnUFNCelpYUjBaWEk3WEc0Z0lDQWdZV1JoY0hSbGNpNXpkbWRUWlhSMFpYSWdQU0J6ZG1kVFpYUjBaWEk3WEc0Z0lDQWdZV1JoY0hSbGNpNXdZWFJvVEdWdVozUm9JRDBnWld4bGJXVnVkQzVuWlhSVWIzUmhiRXhsYm1kMGFDZ3BPMXh1WEc0Z0lDQWdjbVYwZFhKdUlHRmtZWEIwWlhJN1hHNTlPMXh1SWwxOVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvYWRhcHRlci9zdmctcGF0aC1hZGFwdGVyLmpzXG4gKiogbW9kdWxlIGlkID0gMTdcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF9jcmVhdGVFYXNpbmcgPSByZXF1aXJlKCcuL2NyZWF0ZS1lYXNpbmcnKTtcblxudmFyIF9jcmVhdGVFYXNpbmcyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY3JlYXRlRWFzaW5nKTtcblxudmFyIF9jcmVhdGVCZXppZXIgPSByZXF1aXJlKCcuL2NyZWF0ZS1iZXppZXInKTtcblxudmFyIF9jcmVhdGVCZXppZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY3JlYXRlQmV6aWVyKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuLy8gVmFsdWVzXG4vKlxuICAgIEVhc2luZyBmdW5jdGlvbnNcbiAgICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgXG4gICAgR2VuZXJhdGVzIGFuZCBwcm92aWRlcyBlYXNpbmcgZnVuY3Rpb25zIGJhc2VkIG9uIGJhc2VGdW5jdGlvbiBkZWZpbml0aW9uc1xuICAgIFxuICAgIEEgY2FsbCB0byBlYXNpbmdGdW5jdGlvbi5nZXQoJ2Z1bmN0aW9uTmFtZScpIHJldHVybnMgYSBmdW5jdGlvbiB0aGF0IGNhbiBiZSBwYXNzZWQ6XG4gICAgICAgIEBwYXJhbSBbbnVtYmVyXTogUHJvZ3Jlc3MgMC0xXG4gICAgICAgIEBwYXJhbSBbbnVtYmVyXSAob3B0aW9uYWwpOiBBbXAgbW9kaWZpZXIsIG9ubHkgYWNjZXB0ZWQgaW4gc29tZSBlYXNpbmcgZnVuY3Rpb25zXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbmQgaXMgdXNlZCB0byBhZGp1c3Qgb3ZlcmFsbCBzdHJlbmd0aFxuICAgICAgICBAcmV0dXJuIFtudW1iZXJdOiBFYXNlZCBwcm9ncmVzc1xuICAgICAgICBcbiAgICBXZSBjYW4gZ2VuZXJhdGUgbmV3IGZ1bmN0aW9ucyBieSBzZW5kaW5nIGFuIGVhc2luZyBmdW5jdGlvbiB0aHJvdWdoIGVhc2luZ0Z1bmN0aW9uLmV4dGVuZChuYW1lLCBtZXRob2QpLlxuICAgIFdoaWNoIHdpbGwgbWFrZSBuYW1lSW4sIG5hbWVPdXQgYW5kIG5hbWVJbk91dCBmdW5jdGlvbnMgYXZhaWxhYmxlIHRvIHVzZS5cbiAgICAgICAgXG4gICAgRWFzaW5nIGZ1bmN0aW9ucyBmcm9tIFJvYmVydCBQZW5uZXJcbiAgICBodHRwOi8vd3d3LnJvYmVydHBlbm5lci5jb20vZWFzaW5nL1xuICAgICAgICBcbiAgICBCZXppZXIgY3VydmUgaW50ZXJwcmV0b3IgY3JlYXRlZCBmcm9tIEdhw6t0YW4gUmVuYXVkZWF1J3Mgb3JpZ2luYWwgQmV6aWVyRWFzaW5nICBcbiAgICBodHRwczovL2dpdGh1Yi5jb20vZ3JlL2Jlemllci1lYXNpbmcvYmxvYi9tYXN0ZXIvaW5kZXguanMgIFxuICAgIGh0dHBzOi8vZ2l0aHViLmNvbS9ncmUvYmV6aWVyLWVhc2luZy9ibG9iL21hc3Rlci9MSUNFTlNFXG5cbiAgICBBbnRpY2lwYXRlIGVhc2luZyBjcmVhdGVkIGJ5IEVsbGlvdCBHaW5vXG4gICAgaHR0cHM6Ly90d2l0dGVyLmNvbS9FbGxpb3RHZW5vXG4qL1xuLy8gSW1wb3J0c1xudmFyIERFRkFVTFRfQkFDS19TVFJFTkdUSCA9IDEuNTI1O1xudmFyIERFRkFVTFRfUE9XX1NUUkVOR1RIID0gMjtcblxuLypcbiAgICBFYWNoIG9mIHRoZXNlIGJhc2UgZnVuY3Rpb25zIGlzIGFuIGVhc2VJblxuICAgIFxuICAgIE9uIGluaXQsIHdlIHVzZSAubWlycm9yIGFuZCAucmV2ZXJzZSB0byBnZW5lcmF0ZSBlYXNlSW5PdXQgYW5kXG4gICAgZWFzZU91dCBmdW5jdGlvbnMgcmVzcGVjdGl2ZWx5LlxuKi9cbnZhciBiYXNlRWFzaW5nID0ge1xuICAgIGVhc2U6IGZ1bmN0aW9uIChwcm9ncmVzcykge1xuICAgICAgICB2YXIgc3RyZW5ndGggPSBhcmd1bWVudHMubGVuZ3RoIDw9IDEgfHwgYXJndW1lbnRzWzFdID09PSB1bmRlZmluZWQgPyBERUZBVUxUX1BPV19TVFJFTkdUSCA6IGFyZ3VtZW50c1sxXTtcbiAgICAgICAgcmV0dXJuIE1hdGgucG93KHByb2dyZXNzLCBzdHJlbmd0aCk7XG4gICAgfSxcbiAgICBjaXJjOiBmdW5jdGlvbiAocHJvZ3Jlc3MpIHtcbiAgICAgICAgcmV0dXJuIDEgLSBNYXRoLnNpbihNYXRoLmFjb3MocHJvZ3Jlc3MpKTtcbiAgICB9LFxuICAgIGJhY2s6IGZ1bmN0aW9uIChwcm9ncmVzcykge1xuICAgICAgICB2YXIgc3RyZW5ndGggPSBhcmd1bWVudHMubGVuZ3RoIDw9IDEgfHwgYXJndW1lbnRzWzFdID09PSB1bmRlZmluZWQgPyBERUZBVUxUX0JBQ0tfU1RSRU5HVEggOiBhcmd1bWVudHNbMV07XG4gICAgICAgIHJldHVybiBwcm9ncmVzcyAqIHByb2dyZXNzICogKChzdHJlbmd0aCArIDEpICogcHJvZ3Jlc3MgLSBzdHJlbmd0aCk7XG4gICAgfVxufTtcblxuLy8gVXRpbGl0eSBmdW5jdGlvbnNcbnZhciBnZW5lcmF0ZVBvd2VyRWFzaW5nID0gZnVuY3Rpb24gKHN0cmVuZ3RoKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChwcm9ncmVzcykge1xuICAgICAgICByZXR1cm4gYmFzZUVhc2luZy5lYXNlKHByb2dyZXNzLCBzdHJlbmd0aCk7XG4gICAgfTtcbn07XG5cblsnY3ViaWMnLCAncXVhcnQnLCAncXVpbnQnXS5mb3JFYWNoKGZ1bmN0aW9uIChlYXNpbmdOYW1lLCBpKSB7XG4gICAgcmV0dXJuIGJhc2VFYXNpbmdbZWFzaW5nTmFtZV0gPSBnZW5lcmF0ZVBvd2VyRWFzaW5nKGkgKyAzKTtcbn0pO1xuXG4vLyBHZW5lcmF0ZSBpbi9vdXQvaW5PdXQgdmFyaWF0aW9uc1xuZm9yICh2YXIga2V5IGluIGJhc2VFYXNpbmcpIHtcbiAgICBpZiAoYmFzZUVhc2luZy5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgIHZhciBlYXNpbmdGdW5jdGlvbiA9ICgwLCBfY3JlYXRlRWFzaW5nMi5kZWZhdWx0KShiYXNlRWFzaW5nW2tleV0pO1xuICAgICAgICBiYXNlRWFzaW5nW2tleSArICdJbiddID0gZWFzaW5nRnVuY3Rpb24uaW47XG4gICAgICAgIGJhc2VFYXNpbmdba2V5ICsgJ091dCddID0gZWFzaW5nRnVuY3Rpb24ub3V0O1xuICAgICAgICBiYXNlRWFzaW5nW2tleSArICdJbk91dCddID0gZWFzaW5nRnVuY3Rpb24uaW5PdXQ7XG4gICAgfVxufVxuXG5iYXNlRWFzaW5nLmxpbmVhciA9IGZ1bmN0aW9uIChwcm9ncmVzcykge1xuICAgIHJldHVybiBwcm9ncmVzcztcbn07XG5iYXNlRWFzaW5nLmFudGljaXBhdGUgPSBmdW5jdGlvbiAocHJvZ3Jlc3MpIHtcbiAgICB2YXIgc3RyZW5ndGggPSBhcmd1bWVudHMubGVuZ3RoIDw9IDEgfHwgYXJndW1lbnRzWzFdID09PSB1bmRlZmluZWQgPyBERUZBVUxUX0JBQ0tfU1RSRU5HVEggOiBhcmd1bWVudHNbMV07XG4gICAgcmV0dXJuIChwcm9ncmVzcyAqPSAyKSA8IDEgPyAwLjUgKiBiYXNlRWFzaW5nLmJhY2tJbihwcm9ncmVzcywgc3RyZW5ndGgpIDogMC41ICogKDIgLSBNYXRoLnBvdygyLCAtMTAgKiAocHJvZ3Jlc3MgLSAxKSkpO1xufTtcblxuYmFzZUVhc2luZy5lYXNpbmdGdW5jdGlvbiA9IF9jcmVhdGVFYXNpbmcyLmRlZmF1bHQ7XG5iYXNlRWFzaW5nLmN1YmljQmV6aWVyID0gX2NyZWF0ZUJlemllcjIuZGVmYXVsdDtcbmJhc2VFYXNpbmcubW9kaWZ5RWFzZSA9IGZ1bmN0aW9uIChlYXNpbmcpIHtcbiAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IEFycmF5KF9sZW4gPiAxID8gX2xlbiAtIDEgOiAwKSwgX2tleSA9IDE7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgICAgYXJnc1tfa2V5IC0gMV0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgfVxuXG4gICAgcmV0dXJuIGZ1bmN0aW9uIChwcm9ncmVzcykge1xuICAgICAgICByZXR1cm4gZWFzaW5nLmFwcGx5KHVuZGVmaW5lZCwgW3Byb2dyZXNzXS5jb25jYXQoYXJncykpO1xuICAgIH07XG59O1xuXG5leHBvcnRzLmRlZmF1bHQgPSBiYXNlRWFzaW5nO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluTnlZeTloWTNScGIyNXpMMlZoYzJsdVp5OXdjbVZ6WlhRdFpXRnphVzVuTG1weklsMHNJbTVoYldWeklqcGJYU3dpYldGd2NHbHVaM01pT2lJN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPMEZCT0VKQkxFbEJRVTBzZDBKQlFYZENMRXRCUVhoQ08wRkJRMDRzU1VGQlRTeDFRa0ZCZFVJc1EwRkJka0k3T3pzN096czdPMEZCVVU0c1NVRkJUU3hoUVVGaE8wRkJRMllzVlVGQlRTeFZRVUZETEZGQlFVUTdXVUZCVnl4cFJVRkJWenQzUWtGQmVVSXNWVUZCV1R0TFFVRXpSRHRCUVVOT0xGVkJRVTA3WlVGQldTeEpRVUZKTEV0QlFVc3NSMEZCVEN4RFFVRlRMRXRCUVVzc1NVRkJUQ3hEUVVGVkxGRkJRVllzUTBGQlZDeERRVUZLTzB0QlFWbzdRVUZEVGl4VlFVRk5MRlZCUVVNc1VVRkJSRHRaUVVGWExHbEZRVUZYTzJWQlFUQkNMRkZCUVVNc1IwRkJWeXhSUVVGWUxFbEJRWGRDTEVOQlFVTXNWMEZCVnl4RFFVRllMRU5CUVVRc1IwRkJhVUlzVVVGQmFrSXNSMEZCTkVJc1VVRkJOVUlzUTBGQmVrSTdTMEZCYUVRN1EwRklTanM3TzBGQlQwNHNTVUZCVFN4elFrRkJjMElzVlVGQlF5eFJRVUZFTzFkQlFXTXNWVUZCUXl4UlFVRkVPMlZCUVdNc1YwRkJWeXhKUVVGWUxFTkJRV2RDTEZGQlFXaENMRVZCUVRCQ0xGRkJRVEZDTzB0QlFXUTdRMEZCWkRzN1FVRkZOVUlzUTBGQlF5eFBRVUZFTEVWQlFWVXNUMEZCVml4RlFVRnRRaXhQUVVGdVFpeEZRVUUwUWl4UFFVRTFRaXhEUVVGdlF5eFZRVUZETEZWQlFVUXNSVUZCWVN4RFFVRmlPMWRCUVcxQ0xGZEJRVmNzVlVGQldDeEpRVUY1UWl4dlFrRkJiMElzU1VGQlNTeERRVUZLTEVOQlFUZERPME5CUVc1Q0xFTkJRWEJET3pzN1FVRkhRU3hMUVVGTExFbEJRVWtzUjBGQlNpeEpRVUZYTEZWQlFXaENMRVZCUVRSQ08wRkJRM2hDTEZGQlFVa3NWMEZCVnl4alFVRllMRU5CUVRCQ0xFZEJRVEZDTEVOQlFVb3NSVUZCYjBNN1FVRkRhRU1zV1VGQlRTeHBRa0ZCYVVJc05FSkJRWEZDTEZkQlFWY3NSMEZCV0N4RFFVRnlRaXhEUVVGcVFpeERRVVF3UWp0QlFVVm9ReXh0UWtGQll5eFZRVUZrTEVsQlFYbENMR1ZCUVdVc1JVRkJaaXhEUVVaUE8wRkJSMmhETEcxQ1FVRmpMRmRCUVdRc1NVRkJNRUlzWlVGQlpTeEhRVUZtTEVOQlNFMDdRVUZKYUVNc2JVSkJRV01zWVVGQlpDeEpRVUUwUWl4bFFVRmxMRXRCUVdZc1EwRktTVHRMUVVGd1F6dERRVVJLT3p0QlFWTkJMRmRCUVZjc1RVRkJXQ3hIUVVGdlFqdFhRVUZaTzBOQlFWbzdRVUZEY0VJc1YwRkJWeXhWUVVGWUxFZEJRWGRDTEZWQlFVTXNVVUZCUkR0UlFVRlhMR2xGUVVGWE8xZEJRekZETEVOQlFVVXNXVUZCVlN4RFFVRldMRU5CUVVRc1IwRkJaMElzUTBGQmFFSXNSMEZCY1VJc1RVRkJUU3hYUVVGWExFMUJRVmdzUTBGQmEwSXNVVUZCYkVJc1JVRkJORUlzVVVGQk5VSXNRMEZCVGl4SFFVRXJReXhQUVVGUExFbEJRVWtzUzBGQlN5eEhRVUZNTEVOQlFWTXNRMEZCVkN4RlFVRlpMRU5CUVVNc1JVRkJSQ3hKUVVGUExGZEJRVmNzUTBGQldDeERRVUZRTEVOQlFXaENMRU5CUVZBN1EwRkVha1E3TzBGQlIzaENMRmRCUVZjc1kwRkJXRHRCUVVOQkxGZEJRVmNzVjBGQldEdEJRVU5CTEZkQlFWY3NWVUZCV0N4SFFVRjNRaXhWUVVGRExFMUJRVVE3YzBOQlFWazdPenM3VjBGQlV5eFZRVUZETEZGQlFVUTdaVUZCWXl4NVFrRkJUeXhwUWtGQllTeExRVUZ3UWp0TFFVRmtPME5CUVhKQ096dHJRa0ZGVkNJc0ltWnBiR1VpT2lKd2NtVnpaWFF0WldGemFXNW5MbXB6SWl3aWMyOTFjbU5sVW05dmRDSTZJaTlWYzJWeWN5OU5ZWFIwTDFOcGRHVnpMM0J2Y0cxdmRHbHZiaUlzSW5OdmRYSmpaWE5EYjI1MFpXNTBJanBiSWk4cVhHNGdJQ0FnUldGemFXNW5JR1oxYm1OMGFXOXVjMXh1SUNBZ0lDMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzFjYmlBZ0lDQmNiaUFnSUNCSFpXNWxjbUYwWlhNZ1lXNWtJSEJ5YjNacFpHVnpJR1ZoYzJsdVp5Qm1kVzVqZEdsdmJuTWdZbUZ6WldRZ2IyNGdZbUZ6WlVaMWJtTjBhVzl1SUdSbFptbHVhWFJwYjI1elhHNGdJQ0FnWEc0Z0lDQWdRU0JqWVd4c0lIUnZJR1ZoYzJsdVowWjFibU4wYVc5dUxtZGxkQ2duWm5WdVkzUnBiMjVPWVcxbEp5a2djbVYwZFhKdWN5QmhJR1oxYm1OMGFXOXVJSFJvWVhRZ1kyRnVJR0psSUhCaGMzTmxaRHBjYmlBZ0lDQWdJQ0FnUUhCaGNtRnRJRnR1ZFcxaVpYSmRPaUJRY205bmNtVnpjeUF3TFRGY2JpQWdJQ0FnSUNBZ1FIQmhjbUZ0SUZ0dWRXMWlaWEpkSUNodmNIUnBiMjVoYkNrNklFRnRjQ0J0YjJScFptbGxjaXdnYjI1c2VTQmhZMk5sY0hSbFpDQnBiaUJ6YjIxbElHVmhjMmx1WnlCbWRXNWpkR2x2Ym5OY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lHRnVaQ0JwY3lCMWMyVmtJSFJ2SUdGa2FuVnpkQ0J2ZG1WeVlXeHNJSE4wY21WdVozUm9YRzRnSUNBZ0lDQWdJRUJ5WlhSMWNtNGdXMjUxYldKbGNsMDZJRVZoYzJWa0lIQnliMmR5WlhOelhHNGdJQ0FnSUNBZ0lGeHVJQ0FnSUZkbElHTmhiaUJuWlc1bGNtRjBaU0J1WlhjZ1puVnVZM1JwYjI1eklHSjVJSE5sYm1ScGJtY2dZVzRnWldGemFXNW5JR1oxYm1OMGFXOXVJSFJvY205MVoyZ2daV0Z6YVc1blJuVnVZM1JwYjI0dVpYaDBaVzVrS0c1aGJXVXNJRzFsZEdodlpDa3VYRzRnSUNBZ1YyaHBZMmdnZDJsc2JDQnRZV3RsSUc1aGJXVkpiaXdnYm1GdFpVOTFkQ0JoYm1RZ2JtRnRaVWx1VDNWMElHWjFibU4wYVc5dWN5QmhkbUZwYkdGaWJHVWdkRzhnZFhObExseHVJQ0FnSUNBZ0lDQmNiaUFnSUNCRllYTnBibWNnWm5WdVkzUnBiMjV6SUdaeWIyMGdVbTlpWlhKMElGQmxibTVsY2x4dUlDQWdJR2gwZEhBNkx5OTNkM2N1Y205aVpYSjBjR1Z1Ym1WeUxtTnZiUzlsWVhOcGJtY3ZYRzRnSUNBZ0lDQWdJRnh1SUNBZ0lFSmxlbWxsY2lCamRYSjJaU0JwYm5SbGNuQnlaWFJ2Y2lCamNtVmhkR1ZrSUdaeWIyMGdSMkhEcTNSaGJpQlNaVzVoZFdSbFlYVW5jeUJ2Y21sbmFXNWhiQ0JDWlhwcFpYSkZZWE5wYm1jZ0lGeHVJQ0FnSUdoMGRIQnpPaTh2WjJsMGFIVmlMbU52YlM5bmNtVXZZbVY2YVdWeUxXVmhjMmx1Wnk5aWJHOWlMMjFoYzNSbGNpOXBibVJsZUM1cWN5QWdYRzRnSUNBZ2FIUjBjSE02THk5bmFYUm9kV0l1WTI5dEwyZHlaUzlpWlhwcFpYSXRaV0Z6YVc1bkwySnNiMkl2YldGemRHVnlMMHhKUTBWT1UwVmNibHh1SUNBZ0lFRnVkR2xqYVhCaGRHVWdaV0Z6YVc1bklHTnlaV0YwWldRZ1lua2dSV3hzYVc5MElFZHBibTljYmlBZ0lDQm9kSFJ3Y3pvdkwzUjNhWFIwWlhJdVkyOXRMMFZzYkdsdmRFZGxibTljYmlvdlhHNHZMeUJKYlhCdmNuUnpYRzVwYlhCdmNuUWdZM0psWVhSbFJXRnphVzVuUm5WdVkzUnBiMjRnWm5KdmJTQW5MaTlqY21WaGRHVXRaV0Z6YVc1bkp6dGNibWx0Y0c5eWRDQmpkV0pwWTBKbGVtbGxjaUJtY205dElDY3VMMk55WldGMFpTMWlaWHBwWlhJbk8xeHVYRzR2THlCV1lXeDFaWE5jYm1OdmJuTjBJRVJGUmtGVlRGUmZRa0ZEUzE5VFZGSkZUa2RVU0NBOUlERXVOVEkxTzF4dVkyOXVjM1FnUkVWR1FWVk1WRjlRVDFkZlUxUlNSVTVIVkVnZ1BTQXlPMXh1WEc0dktseHVJQ0FnSUVWaFkyZ2diMllnZEdobGMyVWdZbUZ6WlNCbWRXNWpkR2x2Ym5NZ2FYTWdZVzRnWldGelpVbHVYRzRnSUNBZ1hHNGdJQ0FnVDI0Z2FXNXBkQ3dnZDJVZ2RYTmxJQzV0YVhKeWIzSWdZVzVrSUM1eVpYWmxjbk5sSUhSdklHZGxibVZ5WVhSbElHVmhjMlZKYms5MWRDQmhibVJjYmlBZ0lDQmxZWE5sVDNWMElHWjFibU4wYVc5dWN5QnlaWE53WldOMGFYWmxiSGt1WEc0cUwxeHVZMjl1YzNRZ1ltRnpaVVZoYzJsdVp5QTlJSHRjYmlBZ0lDQmxZWE5sT2lBb2NISnZaM0psYzNNc0lITjBjbVZ1WjNSb0lEMGdSRVZHUVZWTVZGOVFUMWRmVTFSU1JVNUhWRWdwSUQwK0lIQnliMmR5WlhOeklDb3FJSE4wY21WdVozUm9MRnh1SUNBZ0lHTnBjbU02SUhCeWIyZHlaWE56SUQwK0lERWdMU0JOWVhSb0xuTnBiaWhOWVhSb0xtRmpiM01vY0hKdlozSmxjM01wS1N4Y2JpQWdJQ0JpWVdOck9pQW9jSEp2WjNKbGMzTXNJSE4wY21WdVozUm9JRDBnUkVWR1FWVk1WRjlDUVVOTFgxTlVVa1ZPUjFSSUtTQTlQaUFvY0hKdlozSmxjM01nS2lCd2NtOW5jbVZ6Y3lrZ0tpQW9LSE4wY21WdVozUm9JQ3NnTVNrZ0tpQndjbTluY21WemN5QXRJSE4wY21WdVozUm9LVnh1ZlR0Y2JseHVMeThnVlhScGJHbDBlU0JtZFc1amRHbHZibk5jYm1OdmJuTjBJR2RsYm1WeVlYUmxVRzkzWlhKRllYTnBibWNnUFNBb2MzUnlaVzVuZEdncElEMCtJQ2h3Y205bmNtVnpjeWtnUFQ0Z1ltRnpaVVZoYzJsdVp5NWxZWE5sS0hCeWIyZHlaWE56TENCemRISmxibWQwYUNrN1hHNWNibHNuWTNWaWFXTW5MQ0FuY1hWaGNuUW5MQ0FuY1hWcGJuUW5YUzVtYjNKRllXTm9LQ2hsWVhOcGJtZE9ZVzFsTENCcEtTQTlQaUJpWVhObFJXRnphVzVuVzJWaGMybHVaMDVoYldWZElEMGdaMlZ1WlhKaGRHVlFiM2RsY2tWaGMybHVaeWhwSUNzZ015a3BPMXh1WEc0dkx5QkhaVzVsY21GMFpTQnBiaTl2ZFhRdmFXNVBkWFFnZG1GeWFXRjBhVzl1YzF4dVptOXlJQ2hzWlhRZ2EyVjVJR2x1SUdKaGMyVkZZWE5wYm1jcElIdGNiaUFnSUNCcFppQW9ZbUZ6WlVWaGMybHVaeTVvWVhOUGQyNVFjbTl3WlhKMGVTaHJaWGtwS1NCN1hHNGdJQ0FnSUNBZ0lHTnZibk4wSUdWaGMybHVaMFoxYm1OMGFXOXVJRDBnWTNKbFlYUmxSV0Z6YVc1blJuVnVZM1JwYjI0b1ltRnpaVVZoYzJsdVoxdHJaWGxkS1R0Y2JpQWdJQ0FnSUNBZ1ltRnpaVVZoYzJsdVoxdGdKSHRyWlhsOVNXNWdYU0E5SUdWaGMybHVaMFoxYm1OMGFXOXVMbWx1TzF4dUlDQWdJQ0FnSUNCaVlYTmxSV0Z6YVc1blcyQWtlMnRsZVgxUGRYUmdYU0E5SUdWaGMybHVaMFoxYm1OMGFXOXVMbTkxZER0Y2JpQWdJQ0FnSUNBZ1ltRnpaVVZoYzJsdVoxdGdKSHRyWlhsOVNXNVBkWFJnWFNBOUlHVmhjMmx1WjBaMWJtTjBhVzl1TG1sdVQzVjBPMXh1SUNBZ0lIMWNibjFjYmx4dVltRnpaVVZoYzJsdVp5NXNhVzVsWVhJZ1BTQndjbTluY21WemN5QTlQaUJ3Y205bmNtVnpjenRjYm1KaGMyVkZZWE5wYm1jdVlXNTBhV05wY0dGMFpTQTlJQ2h3Y205bmNtVnpjeXdnYzNSeVpXNW5kR2dnUFNCRVJVWkJWVXhVWDBKQlEwdGZVMVJTUlU1SFZFZ3BJRDArWEc0Z0lDQWdLQ2h3Y205bmNtVnpjeW85TWlrZ1BDQXhLU0EvSURBdU5TQXFJR0poYzJWRllYTnBibWN1WW1GamEwbHVLSEJ5YjJkeVpYTnpMQ0J6ZEhKbGJtZDBhQ2tnT2lBZ01DNDFJQ29nS0RJZ0xTQk5ZWFJvTG5CdmR5Z3lMQ0F0TVRBZ0tpQW9jSEp2WjNKbGMzTWdMU0F4S1NrcE8xeHVYRzVpWVhObFJXRnphVzVuTG1WaGMybHVaMFoxYm1OMGFXOXVJRDBnWTNKbFlYUmxSV0Z6YVc1blJuVnVZM1JwYjI0N1hHNWlZWE5sUldGemFXNW5MbU4xWW1salFtVjZhV1Z5SUQwZ1kzVmlhV05DWlhwcFpYSTdYRzVpWVhObFJXRnphVzVuTG0xdlpHbG1lVVZoYzJVZ1BTQW9aV0Z6YVc1bkxDQXVMaTVoY21kektTQTlQaUFvY0hKdlozSmxjM01wSUQwK0lHVmhjMmx1Wnlod2NtOW5jbVZ6Y3l3Z0xpNHVZWEpuY3lrN1hHNWNibVY0Y0c5eWRDQmtaV1poZFd4MElHSmhjMlZGWVhOcGJtYzdJbDE5XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9hY3Rpb25zL2Vhc2luZy9wcmVzZXQtZWFzaW5nLmpzXG4gKiogbW9kdWxlIGlkID0gMThcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHMuc3RlcFByb2dyZXNzID0gZXhwb3J0cy5zcGVlZFBlclNlY29uZCA9IGV4cG9ydHMuc3BlZWRQZXJGcmFtZSA9IGV4cG9ydHMuc21vb3RoID0gZXhwb3J0cy5yZXN0cmljdCA9IGV4cG9ydHMucmVsYXRpdmVWYWx1ZSA9IGV4cG9ydHMucmFuZG9tID0gZXhwb3J0cy5yYWRpYW5zVG9EZWdyZWVzID0gZXhwb3J0cy5wb2ludEZyb21BbmdsZUFuZERpc3RhbmNlID0gZXhwb3J0cy5vZmZzZXQgPSBleHBvcnRzLmdldFByb2dyZXNzRnJvbVZhbHVlID0gZXhwb3J0cy5nZXRWYWx1ZUZyb21Qcm9ncmVzcyA9IGV4cG9ydHMuaHlwb3RlbnVzZSA9IGV4cG9ydHMuZGlzdGFuY2UgPSBleHBvcnRzLmRpbGF0ZSA9IGV4cG9ydHMuZGVncmVlc1RvUmFkaWFucyA9IGV4cG9ydHMuYW5nbGUgPSB1bmRlZmluZWQ7XG5cbnZhciBfdXRpbHMgPSByZXF1aXJlKCcuL3V0aWxzJyk7XG5cbnZhciBaRVJPX1BPSU5UID0ge1xuICAgIHg6IDAsXG4gICAgeTogMCxcbiAgICB6OiAwXG59O1xuXG52YXIgZGlzdGFuY2UxRCA9IGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgcmV0dXJuIE1hdGguYWJzKGEgLSBiKTtcbn07XG5cbi8qXG4gICAgQW5nbGUgYmV0d2VlbiBwb2ludHNcbiAgICBcbiAgICBUcmFuc2xhdGVzIHRoZSBoeXBvdGhldGljYWwgbGluZSBzbyB0aGF0IHRoZSAnZnJvbScgY29vcmRpbmF0ZXNcbiAgICBhcmUgYXQgMCwwLCB0aGVuIHJldHVybiB0aGUgYW5nbGUgdXNpbmcgLmFuZ2xlRnJvbUNlbnRlcigpXG4gICAgXG4gICAgQHBhcmFtIFtvYmplY3RdOiBYIGFuZCBZIGNvb3JkaW5hdGVzIG9mIGZyb20gcG9pbnRcbiAgICBAcGFyYW0gW29iamVjdF06IFggYW5kIFkgY29yZGluYXRlcyBvZiB0byBwb2ludFxuICAgIEByZXR1cm4gW3JhZGlhbl06IEFuZ2xlIGJldHdlZW4gdGhlIHR3byBwb2ludHMgaW4gcmFkaWFuc1xuKi9cbnZhciBhbmdsZSA9IGV4cG9ydHMuYW5nbGUgPSBmdW5jdGlvbiAoYSkge1xuICAgIHZhciBiID0gYXJndW1lbnRzLmxlbmd0aCA8PSAxIHx8IGFyZ3VtZW50c1sxXSA9PT0gdW5kZWZpbmVkID8gWkVST19QT0lOVCA6IGFyZ3VtZW50c1sxXTtcbiAgICByZXR1cm4gcmFkaWFuc1RvRGVncmVlcyhNYXRoLmF0YW4yKGEueCAtIGIueCwgYS55IC0gYi55KSk7XG59O1xuXG4vKlxuICAgIENvbnZlcnQgZGVncmVlcyB0byByYWRpYW5zXG4gICAgXG4gICAgQHBhcmFtIFtudW1iZXJdOiBWYWx1ZSBpbiBkZWdyZWVzXG4gICAgQHJldHVybiBbbnVtYmVyXTogVmFsdWUgaW4gcmFkaWFuc1xuKi9cbnZhciBkZWdyZWVzVG9SYWRpYW5zID0gZXhwb3J0cy5kZWdyZWVzVG9SYWRpYW5zID0gZnVuY3Rpb24gKGRlZ3JlZXMpIHtcbiAgICByZXR1cm4gZGVncmVlcyAqIE1hdGguUEkgLyAxODA7XG59O1xuXG4vKlxuICAgIERpbGF0ZVxuICAgIFxuICAgIENoYW5nZSB0aGUgcHJvZ3Jlc3Npb24gYmV0d2VlbiBhIGFuZCBiIGFjY29yZGluZyB0byBkaWxhdGlvbi5cbiAgICBcbiAgICBTbyBkaWxhdGlvbiA9IDAuNSB3b3VsZCBjaGFuZ2VcbiAgICBcbiAgICBhIC0tLS0tLS0tLSBiXG4gICAgXG4gICAgdG9cbiAgICBcbiAgICBhIC0tLS0gYlxuICAgIFxuICAgIEBwYXJhbSBbbnVtYmVyXTogUHJldmlvdXMgdmFsdWVcbiAgICBAcGFyYW0gW251bWJlcl06IEN1cnJlbnQgdmFsdWVcbiAgICBAcGFyYW0gW251bWJlcl06IERpbGF0ZSBwcm9ncmVzcyBieSB4XG4gICAgQHJldHVybiBbbnVtYmVyXTogUHJldmlvdXMgdmFsdWUgcGx1cyB0aGUgZGlsYXRlZCBkaWZmZXJlbmNlXG4qL1xudmFyIGRpbGF0ZSA9IGV4cG9ydHMuZGlsYXRlID0gZnVuY3Rpb24gKGEsIGIsIGRpbGF0aW9uKSB7XG4gICAgcmV0dXJuIGEgKyAoYiAtIGEpICogZGlsYXRpb247XG59O1xuXG4vKlxuICAgIERpc3RhbmNlXG4gICAgXG4gICAgUmV0dXJucyB0aGUgZGlzdGFuY2UgYmV0d2VlbiB0d28gbiBkaW1lbnNpb25hbCBwb2ludHMuXG4gICAgXG4gICAgQHBhcmFtIFtvYmplY3QvbnVtYmVyXTogeCBhbmQgeSBvciBqdXN0IHggb2YgcG9pbnQgQVxuICAgIEBwYXJhbSBbb2JqZWN0L251bWJlcl06IChvcHRpb25hbCk6IHggYW5kIHkgb3IganVzdCB4IG9mIHBvaW50IEJcbiAgICBAcmV0dXJuIFtudW1iZXJdOiBUaGUgZGlzdGFuY2UgYmV0d2VlbiB0aGUgdHdvIHBvaW50c1xuKi9cbnZhciBkaXN0YW5jZSA9IGV4cG9ydHMuZGlzdGFuY2UgPSBmdW5jdGlvbiAoYSkge1xuICAgIHZhciBiID0gYXJndW1lbnRzLmxlbmd0aCA8PSAxIHx8IGFyZ3VtZW50c1sxXSA9PT0gdW5kZWZpbmVkID8gWkVST19QT0lOVCA6IGFyZ3VtZW50c1sxXTtcblxuICAgIC8vIDFEIGRpbWVuc2lvbnNcbiAgICBpZiAoKDAsIF91dGlscy5pc051bSkoYSkpIHtcbiAgICAgICAgcmV0dXJuIGRpc3RhbmNlMUQoYSwgYik7XG5cbiAgICAgICAgLy8gTXVsdGktZGltZW5zaW9uYWxcbiAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdmFyIHhEZWx0YSA9IGRpc3RhbmNlMUQoYS54LCBiLngpO1xuICAgICAgICAgICAgdmFyIHlEZWx0YSA9IGRpc3RhbmNlMUQoYS55LCBiLnkpO1xuICAgICAgICAgICAgdmFyIHpEZWx0YSA9ICgwLCBfdXRpbHMuaXNOdW0pKGEueikgPyBkaXN0YW5jZTFEKGEueiwgYi56KSA6IDA7XG5cbiAgICAgICAgICAgIHJldHVybiBNYXRoLnNxcnQoTWF0aC5wb3coeERlbHRhLCAyKSArIE1hdGgucG93KHlEZWx0YSwgMikgKyBNYXRoLnBvdyh6RGVsdGEsIDIpKTtcbiAgICAgICAgfVxufTtcblxuLypcbiAgICBIeXBvdGVudXNlXG4gICAgXG4gICAgUmV0dXJucyB0aGUgaHlwb3RlbnVzZSwgc2lkZSBDLCBnaXZlbiB0aGUgbGVuZ3RocyBvZiBzaWRlcyBBIGFuZCBCLlxuICAgIFxuICAgIEBwYXJhbSBbbnVtYmVyXTogTGVuZ3RoIG9mIEFcbiAgICBAcGFyYW0gW251bWJlcl06IExlbmd0aCBvZiBCXG4gICAgQHJldHVybiBbbnVtYmVyXTogTGVuZ3RoIG9mIENcbiovXG52YXIgaHlwb3RlbnVzZSA9IGV4cG9ydHMuaHlwb3RlbnVzZSA9IGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgcmV0dXJuIE1hdGguc3FydChhICogYSArIGIgKiBiKTtcbn07XG5cbi8qXG4gICAgVmFsdWUgaW4gcmFuZ2UgZnJvbSBwcm9ncmVzc1xuICAgIFxuICAgIEdpdmVuIGEgbG93ZXIgbGltaXQgYW5kIGFuIHVwcGVyIGxpbWl0LCB3ZSByZXR1cm4gdGhlIHZhbHVlIHdpdGhpblxuICAgIHRoYXQgcmFuZ2UgYXMgZXhwcmVzc2VkIGJ5IHByb2dyZXNzIChhIG51bWJlciBmcm9tIDAtMSlcbiAgICBcbiAgICBAcGFyYW0gW251bWJlcl06IFRoZSBwcm9ncmVzcyBiZXR3ZWVuIGxvd2VyIGFuZCB1cHBlciBsaW1pdHMgZXhwcmVzc2VkIDAtMVxuICAgIEBwYXJhbSBbbnVtYmVyXTogTG93ZXIgbGltaXQgb2YgcmFuZ2VcbiAgICBAcGFyYW0gW251bWJlcl06IFVwcGVyIGxpbWl0IG9mIHJhbmdlXG4gICAgQHJldHVybiBbbnVtYmVyXTogVmFsdWUgYXMgY2FsY3VsYXRlZCBmcm9tIHByb2dyZXNzIHdpdGhpbiByYW5nZSAobm90IGxpbWl0ZWQgd2l0aGluIHJhbmdlKVxuKi9cbnZhciBnZXRWYWx1ZUZyb21Qcm9ncmVzcyA9IGV4cG9ydHMuZ2V0VmFsdWVGcm9tUHJvZ3Jlc3MgPSBmdW5jdGlvbiAocHJvZ3Jlc3MsIGZyb20sIHRvKSB7XG4gICAgcmV0dXJuIC1wcm9ncmVzcyAqIGZyb20gKyBwcm9ncmVzcyAqIHRvICsgZnJvbTtcbn07XG5cbi8qXG4gICAgUHJvZ3Jlc3Mgd2l0aGluIGdpdmVuIHJhbmdlXG4gICAgXG4gICAgR2l2ZW4gYSBsb3dlciBsaW1pdCBhbmQgYW4gdXBwZXIgbGltaXQsIHdlIHJldHVybiB0aGUgcHJvZ3Jlc3NcbiAgICAoZXhwcmVzc2VkIGFzIGEgbnVtYmVyIDAtMSkgcmVwcmVzZW50ZWQgYnkgdGhlIGdpdmVuIHZhbHVlLCBhbmRcbiAgICBsaW1pdCB0aGF0IHByb2dyZXNzIHRvIHdpdGhpbiAwLTEuXG4gICAgXG4gICAgQHBhcmFtIFtudW1iZXJdOiBWYWx1ZSB0byBmaW5kIHByb2dyZXNzIHdpdGhpbiBnaXZlbiByYW5nZVxuICAgIEBwYXJhbSBbbnVtYmVyXTogTG93ZXIgbGltaXQgXG4gICAgQHBhcmFtIFtudW1iZXJdOiBVcHBlciBsaW1pdFxuICAgIEByZXR1cm4gW251bWJlcl06IFByb2dyZXNzIG9mIHZhbHVlIHdpdGhpbiByYW5nZSBhcyBleHByZXNzZWQgMC0xXG4qL1xudmFyIGdldFByb2dyZXNzRnJvbVZhbHVlID0gZXhwb3J0cy5nZXRQcm9ncmVzc0Zyb21WYWx1ZSA9IGZ1bmN0aW9uICh2YWx1ZSwgZnJvbSwgdG8pIHtcbiAgICByZXR1cm4gKHZhbHVlIC0gZnJvbSkgLyAodG8gLSBmcm9tKTtcbn07XG5cbi8qXG4gICAgT2Zmc2V0IGJldHdlZW4gdHdvIG9iamVjdHMgb2YgbnVtYmVyc1xuXG4gICAgSWYgcHJvcGVydHkgaXMgZm91bmQgaW4gYiBub3QgcHJlc2VudCBpbiBhLCBpdCB3aWxsIHJldHVybiBgMGAgZm9yIHRoYXQgcHJvcC5cbiAgICBcbiAgICBAcGFyYW0gW1BvaW50XTogRmlyc3Qgb2JqZWN0XG4gICAgQHBhcmFtIFtQb2ludF06IFNlY29uZCBvYmplY3RcbiAgICBAcmV0dXJuIFtPZmZzZXRdOiBEaXN0YW5jZSBtZXRyaWNzIGJldHdlZW4gdHdvIHBvaW50c1xuKi9cbnZhciBvZmZzZXQgPSBleHBvcnRzLm9mZnNldCA9IGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgdmFyIG9mZnNldCA9IHt9O1xuXG4gICAgZm9yICh2YXIga2V5IGluIGIpIHtcbiAgICAgICAgaWYgKGIuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgICAgb2Zmc2V0W2tleV0gPSAoMCwgX3V0aWxzLmhhc1Byb3BlcnR5KShhLCBrZXkpID8gYltrZXldIC0gYVtrZXldIDogMDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBvZmZzZXQ7XG59O1xuXG4vKlxuICAgIFBvaW50IGZyb20gYW5nbGUgYW5kIGRpc3RhbmNlXG4gICAgXG4gICAgQHBhcmFtIFtvYmplY3RdOiAyRCBwb2ludCBvZiBvcmlnaW5cbiAgICBAcGFyYW0gW251bWJlcl06IEFuZ2xlIGZyb20gb3JpZ2luXG4gICAgQHBhcmFtIFtudW1iZXJdOiBEaXN0YW5jZSBmcm9tIG9yaWdpblxuICAgIEByZXR1cm4gW29iamVjdF06IENhbGN1bGF0ZWQgMkQgcG9pbnRcbiovXG52YXIgcG9pbnRGcm9tQW5nbGVBbmREaXN0YW5jZSA9IGV4cG9ydHMucG9pbnRGcm9tQW5nbGVBbmREaXN0YW5jZSA9IGZ1bmN0aW9uIChvcmlnaW4sIGFuZ2xlLCBkaXN0YW5jZSkge1xuICAgIGFuZ2xlID0gZGVncmVlc1RvUmFkaWFucyhhbmdsZSk7XG5cbiAgICByZXR1cm4ge1xuICAgICAgICB4OiBkaXN0YW5jZSAqIE1hdGguY29zKGFuZ2xlKSArIG9yaWdpbi54LFxuICAgICAgICB5OiBkaXN0YW5jZSAqIE1hdGguc2luKGFuZ2xlKSArIG9yaWdpbi55XG4gICAgfTtcbn07XG5cbi8qXG4gICAgQ29udmVydCByYWRpYW5zIHRvIGRlZ3JlZXNcbiAgICBcbiAgICBAcGFyYW0gW251bWJlcl06IFZhbHVlIGluIHJhZGlhbnNcbiAgICBAcmV0dXJuIFtudW1iZXJdOiBWYWx1ZSBpbiBkZWdyZWVzXG4qL1xudmFyIHJhZGlhbnNUb0RlZ3JlZXMgPSBleHBvcnRzLnJhZGlhbnNUb0RlZ3JlZXMgPSBmdW5jdGlvbiAocmFkaWFucykge1xuICAgIHJldHVybiByYWRpYW5zICogMTgwIC8gTWF0aC5QSTtcbn07XG5cbi8qXG4gICAgUmV0dXJuIHJhbmRvbSBudW1iZXIgYmV0d2VlbiByYW5nZVxuICAgIFxuICAgIEBwYXJhbSBbbnVtYmVyXSAob3B0aW9uYWwpOiBPdXRwdXQgbWluaW11bVxuICAgIEBwYXJhbSBbbnVtYmVyXSAob3B0aW9uYWwpOiBPdXRwdXQgbWF4aW11bVxuICAgIEByZXR1cm4gW251bWJlcl06IFJhbmRvbSBudW1iZXIgd2l0aGluIHJhbmdlLCBvciAwIGFuZCAxIGlmIG5vbmUgcHJvdmlkZWRcbiovXG52YXIgcmFuZG9tID0gZXhwb3J0cy5yYW5kb20gPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIG1pbiA9IGFyZ3VtZW50cy5sZW5ndGggPD0gMCB8fCBhcmd1bWVudHNbMF0gPT09IHVuZGVmaW5lZCA/IDAgOiBhcmd1bWVudHNbMF07XG4gICAgdmFyIG1heCA9IGFyZ3VtZW50cy5sZW5ndGggPD0gMSB8fCBhcmd1bWVudHNbMV0gPT09IHVuZGVmaW5lZCA/IDEgOiBhcmd1bWVudHNbMV07XG4gICAgcmV0dXJuIE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluKSArIG1pbjtcbn07XG5cbi8qXG4gICAgQ2FsY3VsYXRlIHJlbGF0aXZlIHZhbHVlXG4gICAgXG4gICAgVGFrZXMgdGhlIG9wZXJhdG9yIGFuZCB2YWx1ZSBmcm9tIGEgc3RyaW5nLCBpZSBcIis9NVwiLCBhbmQgYXBwbGllc1xuICAgIHRvIHRoZSBjdXJyZW50IHZhbHVlIHRvIHJlc29sdmUgYSBuZXcgdGFyZ2V0LlxuICAgIFxuICAgIEBwYXJhbSBbbnVtYmVyXTogQ3VycmVudCB2YWx1ZVxuICAgIEBwYXJhbSBbc3RyaW5nXTogUmVsYXRpdmUgdmFsdWVcbiAgICBAcmV0dXJuIFtudW1iZXJdOiBOZXcgdmFsdWVcbiovXG52YXIgcmVsYXRpdmVWYWx1ZSA9IGV4cG9ydHMucmVsYXRpdmVWYWx1ZSA9IGZ1bmN0aW9uIChjdXJyZW50LCByZWxhdGl2ZSkge1xuICAgIHZhciBuZXdWYWx1ZSA9IGN1cnJlbnQ7XG4gICAgdmFyIGVxdWF0aW9uID0gcmVsYXRpdmUuc3BsaXQoJz0nKTtcbiAgICB2YXIgb3BlcmF0b3IgPSBlcXVhdGlvblswXTtcblxuICAgIHZhciBfc3BsaXRWYWx1ZVVuaXQgPSAoMCwgX3V0aWxzLnNwbGl0VmFsdWVVbml0KShlcXVhdGlvblsxXSk7XG5cbiAgICB2YXIgdW5pdCA9IF9zcGxpdFZhbHVlVW5pdC51bml0O1xuICAgIHZhciB2YWx1ZSA9IF9zcGxpdFZhbHVlVW5pdC52YWx1ZTtcblxuICAgIHZhbHVlID0gcGFyc2VGbG9hdCh2YWx1ZSk7XG5cbiAgICBzd2l0Y2ggKG9wZXJhdG9yKSB7XG4gICAgICAgIGNhc2UgJysnOlxuICAgICAgICAgICAgbmV3VmFsdWUgKz0gdmFsdWU7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnLSc6XG4gICAgICAgICAgICBuZXdWYWx1ZSAtPSB2YWx1ZTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICcqJzpcbiAgICAgICAgICAgIG5ld1ZhbHVlICo9IHZhbHVlO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJy8nOlxuICAgICAgICAgICAgbmV3VmFsdWUgLz0gdmFsdWU7XG4gICAgICAgICAgICBicmVhaztcbiAgICB9XG5cbiAgICBpZiAodW5pdCkge1xuICAgICAgICBuZXdWYWx1ZSArPSB1bml0O1xuICAgIH1cblxuICAgIHJldHVybiBuZXdWYWx1ZTtcbn07XG5cbi8qXG4gICAgUmVzdHJpY3QgdmFsdWUgdG8gcmFuZ2VcbiAgICBcbiAgICBSZXR1cm4gdmFsdWUgd2l0aGluIHRoZSByYW5nZSBvZiBsb3dlckxpbWl0IGFuZCB1cHBlckxpbWl0XG4gICAgXG4gICAgQHBhcmFtIFtudW1iZXJdOiBWYWx1ZSB0byBrZWVwIHdpdGhpbiByYW5nZVxuICAgIEBwYXJhbSBbbnVtYmVyXTogTG93ZXIgbGltaXQgb2YgcmFuZ2VcbiAgICBAcGFyYW0gW251bWJlcl06IFVwcGVyIGxpbWl0IG9mIHJhbmdlXG4gICAgQHJldHVybiBbbnVtYmVyXTogVmFsdWUgYXMgbGltaXRlZCB3aXRoaW4gZ2l2ZW4gcmFuZ2VcbiovXG52YXIgcmVzdHJpY3QgPSBleHBvcnRzLnJlc3RyaWN0ID0gZnVuY3Rpb24gKHZhbHVlLCBtaW4sIG1heCkge1xuICAgIHJldHVybiBNYXRoLm1heChNYXRoLm1pbih2YWx1ZSwgbWF4KSwgbWluKTtcbn07XG5cbi8qXG4gICAgRnJhbWVyYXRlLWluZGVwZW5kZW50IHNtb290aGluZ1xuXG4gICAgQHBhcmFtIFtudW1iZXJdOiBOZXcgdmFsdWVcbiAgICBAcGFyYW0gW251bWJlcl06IE9sZCB2YWx1ZVxuICAgIEBwYXJhbSBbbnVtYmVyXTogRnJhbWUgZHVyYXRpb25cbiAgICBAcGFyYW0gW251bWJlcl0gKG9wdGlvbmFsKTogU21vb3RoaW5nICgwIGlzIG5vbmUpXG4qL1xudmFyIHNtb290aCA9IGV4cG9ydHMuc21vb3RoID0gZnVuY3Rpb24gKG5ld1ZhbHVlLCBvbGRWYWx1ZSwgZHVyYXRpb24pIHtcbiAgICB2YXIgc21vb3RoaW5nID0gYXJndW1lbnRzLmxlbmd0aCA8PSAzIHx8IGFyZ3VtZW50c1szXSA9PT0gdW5kZWZpbmVkID8gMCA6IGFyZ3VtZW50c1szXTtcbiAgICByZXR1cm4gKDAsIF91dGlscy50b0RlY2ltYWwpKG9sZFZhbHVlICsgZHVyYXRpb24gKiAobmV3VmFsdWUgLSBvbGRWYWx1ZSkgLyBNYXRoLm1heChzbW9vdGhpbmcsIGR1cmF0aW9uKSk7XG59O1xuXG4vKlxuICAgIENvbnZlcnQgeCBwZXIgc2Vjb25kIHRvIHBlciBmcmFtZSB2ZWxvY2l0eSBiYXNlZCBvbiBmcHNcbiAgICBcbiAgICBAcGFyYW0gW251bWJlcl06IFVuaXQgcGVyIHNlY29uZFxuICAgIEBwYXJhbSBbbnVtYmVyXTogRnJhbWUgZHVyYXRpb24gaW4gbXNcbiovXG52YXIgc3BlZWRQZXJGcmFtZSA9IGV4cG9ydHMuc3BlZWRQZXJGcmFtZSA9IGZ1bmN0aW9uICh4cHMsIGZyYW1lRHVyYXRpb24pIHtcbiAgICByZXR1cm4gKDAsIF91dGlscy5pc051bSkoeHBzKSA/IHhwcyAvICgxMDAwIC8gZnJhbWVEdXJhdGlvbikgOiAwO1xufTtcblxuLypcbiAgICBDb252ZXJ0IHZlbG9jaXR5IGludG8gdmVsaWNpdHkgcGVyIHNlY29uZFxuICAgIFxuICAgIEBwYXJhbSBbbnVtYmVyXTogVW5pdCBwZXIgZnJhbWVcbiAgICBAcGFyYW0gW251bWJlcl06IEZyYW1lIGR1cmF0aW9uIGluIG1zXG4qL1xudmFyIHNwZWVkUGVyU2Vjb25kID0gZXhwb3J0cy5zcGVlZFBlclNlY29uZCA9IGZ1bmN0aW9uICh2ZWxvY2l0eSwgZnJhbWVEdXJhdGlvbikge1xuICAgIHJldHVybiB2ZWxvY2l0eSAqICgxMDAwIC8gZnJhbWVEdXJhdGlvbik7XG59O1xuXG4vKlxuICAgIENyZWF0ZSBzdGVwcGVkIHZlcnNpb24gb2YgMC0xIHByb2dyZXNzXG4gICAgXG4gICAgQHBhcmFtIFtudW1iZXJdOiBDdXJyZW50IHZhbHVlXG4gICAgQHBhcmFtIFtpbnRdOiBOdW1iZXIgb2Ygc3RlcHNcbiAgICBAcmV0dXJuIFtudW1iZXJdOiBTdGVwcGVkIHZhbHVlXG4qL1xudmFyIHN0ZXBQcm9ncmVzcyA9IGV4cG9ydHMuc3RlcFByb2dyZXNzID0gZnVuY3Rpb24gKHByb2dyZXNzLCBzdGVwcykge1xuICAgIHZhciBzZWdtZW50ID0gMSAvIChzdGVwcyAtIDEpO1xuICAgIHZhciB0YXJnZXQgPSAxIC0gMSAvIHN0ZXBzO1xuICAgIHZhciBwcm9ncmVzc09mVGFyZ2V0ID0gTWF0aC5taW4ocHJvZ3Jlc3MgLyB0YXJnZXQsIDEpO1xuXG4gICAgcmV0dXJuIE1hdGguZmxvb3IocHJvZ3Jlc3NPZlRhcmdldCAvIHNlZ21lbnQpICogc2VnbWVudDtcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5OeVl5OXBibU12WTJGc1l5NXFjeUpkTENKdVlXMWxjeUk2VzEwc0ltMWhjSEJwYm1keklqb2lPenM3T3pzN08wRkJUMEVzU1VGQlRTeGhRVUZoTzBGQlEyWXNUMEZCUnl4RFFVRklPMEZCUTBFc1QwRkJSeXhEUVVGSU8wRkJRMEVzVDBGQlJ5eERRVUZJTzBOQlNFVTdPMEZCVFU0c1NVRkJUU3hoUVVGaExGVkJRVU1zUTBGQlJDeEZRVUZKTEVOQlFVbzdWMEZCVlN4TFFVRkxMRWRCUVV3c1EwRkJVeXhKUVVGSkxFTkJRVW83UTBGQmJrSTdPenM3T3pzN096czdPenRCUVZsYUxFbEJRVTBzZDBKQlFWRXNWVUZCUXl4RFFVRkVPMUZCUVVrc01FUkJRVWs3VjBGQlpTeHBRa0ZCYVVJc1MwRkJTeXhMUVVGTUxFTkJRVmNzUlVGQlJTeERRVUZHTEVkQlFVMHNSVUZCUlN4RFFVRkdMRVZCUVVzc1JVRkJSU3hEUVVGR0xFZEJRVTBzUlVGQlJTeERRVUZHTEVOQlFUZERPME5CUVhaQ096czdPenM3T3p0QlFWRmtMRWxCUVUwc09FTkJRVzFDTEZWQlFVTXNUMEZCUkR0WFFVRmhMRlZCUVZVc1MwRkJTeXhGUVVGTUxFZEJRVlVzUjBGQmNFSTdRMEZCWWpzN096czdPenM3T3pzN096czdPenM3T3pzN1FVRnZRbnBDTEVsQlFVMHNNRUpCUVZNc1ZVRkJReXhEUVVGRUxFVkJRVWtzUTBGQlNpeEZRVUZQTEZGQlFWQTdWMEZCYjBJc1NVRkJTeXhEUVVGRExFbEJRVWtzUTBGQlNpeERRVUZFTEVkQlFWVXNVVUZCVmp0RFFVRjZRanM3T3pzN096czdPenM3UVVGWFppeEpRVUZOTERoQ1FVRlhMRlZCUVVNc1EwRkJSQ3hGUVVGMVFqdFJRVUZ1UWl3d1JFRkJTU3d3UWtGQlpUczdPMEZCUlRORExGRkJRVWtzYTBKQlFVMHNRMEZCVGl4RFFVRktMRVZCUVdNN1FVRkRWaXhsUVVGUExGZEJRVmNzUTBGQldDeEZRVUZqTEVOQlFXUXNRMEZCVURzN08wRkJSRlVzUzBGQlpDeE5RVWxQTzBGQlEwZ3NaMEpCUVUwc1UwRkJVeXhYUVVGWExFVkJRVVVzUTBGQlJpeEZRVUZMTEVWQlFVVXNRMEZCUml4RFFVRjZRaXhEUVVSSU8wRkJSVWdzWjBKQlFVMHNVMEZCVXl4WFFVRlhMRVZCUVVVc1EwRkJSaXhGUVVGTExFVkJRVVVzUTBGQlJpeERRVUY2UWl4RFFVWklPMEZCUjBnc1owSkJRVTBzVTBGQlV5eHBRa0ZCUXl4RFFVRk5MRVZCUVVVc1EwRkJSaXhEUVVGUUxFZEJRV1VzVjBGQlZ5eEZRVUZGTEVOQlFVWXNSVUZCU3l4RlFVRkZMRU5CUVVZc1EwRkJMMElzUjBGQmMwTXNRMEZCZEVNc1EwRklXanM3UVVGTFNDeHRRa0ZCVHl4TFFVRkxMRWxCUVV3c1EwRkJWU3hUUVVGRExGRkJRVlVzUlVGQldDeFpRVUZwUWl4UlFVRlZMRVZCUVROQ0xGbEJRV2xETEZGQlFWVXNSVUZCTTBNc1EwRkJha0lzUTBGTVJ6dFRRVXBRTzBOQlJtOUNPenM3T3pzN096czdPenRCUVhkQ2FrSXNTVUZCVFN4clEwRkJZU3hWUVVGRExFTkJRVVFzUlVGQlNTeERRVUZLTzFkQlFWVXNTMEZCU3l4SlFVRk1MRU5CUVZVc1EwRkJReXhIUVVGSkxFTkJRVW9zUjBGQlZTeEpRVUZKTEVOQlFVbzdRMEZCTDBJN096czdPenM3T3pzN096czdRVUZoYmtJc1NVRkJUU3h6UkVGQmRVSXNWVUZCUXl4UlFVRkVMRVZCUVZjc1NVRkJXQ3hGUVVGcFFpeEZRVUZxUWp0WFFVRjNRaXhEUVVGSExGRkJRVVlzUjBGQllTeEpRVUZpTEVkQlFYTkNMRmRCUVZjc1JVRkJXQ3hIUVVGcFFpeEpRVUY0UXp0RFFVRjRRanM3T3pzN096czdPenM3T3pzN1FVRmpOMElzU1VGQlRTeHpSRUZCZFVJc1ZVRkJReXhMUVVGRUxFVkJRVkVzU1VGQlVpeEZRVUZqTEVWQlFXUTdWMEZCY1VJc1EwRkJReXhSUVVGUkxFbEJRVklzUTBGQlJDeEpRVUZyUWl4TFFVRkxMRWxCUVV3c1EwRkJiRUk3UTBGQmNrSTdPenM3T3pzN096czdPMEZCVnpkQ0xFbEJRVTBzTUVKQlFWTXNWVUZCUXl4RFFVRkVMRVZCUVVrc1EwRkJTaXhGUVVGVk8wRkJRelZDTEZGQlFVMHNVMEZCVXl4RlFVRlVMRU5CUkhOQ096dEJRVWMxUWl4VFFVRkxMRWxCUVVrc1IwRkJTaXhKUVVGWExFTkJRV2hDTEVWQlFXMUNPMEZCUTJZc1dVRkJTU3hGUVVGRkxHTkJRVVlzUTBGQmFVSXNSMEZCYWtJc1EwRkJTaXhGUVVFeVFqdEJRVU4yUWl4dFFrRkJUeXhIUVVGUUxFbEJRV01zZDBKQlFWa3NRMEZCV2l4RlFVRmxMRWRCUVdZc1NVRkJjMElzUlVGQlJTeEhRVUZHTEVsQlFWTXNSVUZCUlN4SFFVRkdMRU5CUVZRc1IwRkJhMElzUTBGQmVFTXNRMEZFVXp0VFFVRXpRanRMUVVSS096dEJRVTFCTEZkQlFVOHNUVUZCVUN4RFFWUTBRanREUVVGV096czdPenM3T3pzN08wRkJiMEptTEVsQlFVMHNaMFZCUVRSQ0xGVkJRVU1zVFVGQlJDeEZRVUZUTEV0QlFWUXNSVUZCWjBJc1VVRkJhRUlzUlVGQk5rSTdRVUZEYkVVc1dVRkJVU3hwUWtGQmFVSXNTMEZCYWtJc1EwRkJVaXhEUVVSclJUczdRVUZIYkVVc1YwRkJUenRCUVVOSUxGZEJRVWNzVjBGQlZ5eExRVUZMTEVkQlFVd3NRMEZCVXl4TFFVRlVMRU5CUVZnc1IwRkJOa0lzVDBGQlR5eERRVUZRTzBGQlEyaERMRmRCUVVjc1YwRkJWeXhMUVVGTExFZEJRVXdzUTBGQlV5eExRVUZVTEVOQlFWZ3NSMEZCTmtJc1QwRkJUeXhEUVVGUU8wdEJSbkJETEVOQlNHdEZPME5CUVRkQ096czdPenM3T3p0QlFXVnNReXhKUVVGTkxEaERRVUZ0UWl4VlFVRkRMRTlCUVVRN1YwRkJZU3hWUVVGVkxFZEJRVllzUjBGQlowSXNTMEZCU3l4RlFVRk1PME5CUVRkQ096czdPenM3T3pzN1FVRlRla0lzU1VGQlRTd3dRa0ZCVXp0UlFVRkRMRFJFUVVGTk8xRkJRVWNzTkVSQlFVMDdWMEZCVFN4TFFVRkxMRTFCUVV3c1RVRkJhVUlzVFVGQlRTeEhRVUZPTEVOQlFXcENMRWRCUVRoQ0xFZEJRVGxDTzBOQlFYUkNPenM3T3pzN096czdPenM3UVVGWlppeEpRVUZOTEhkRFFVRm5RaXhWUVVGRExFOUJRVVFzUlVGQlZTeFJRVUZXTEVWQlFYVkNPMEZCUTJoRUxGRkJRVWtzVjBGQlZ5eFBRVUZZTEVOQlJEUkRPMEZCUldoRUxGRkJRVTBzVjBGQlZ5eFRRVUZUTEV0QlFWUXNRMEZCWlN4SFFVRm1MRU5CUVZnc1EwRkdNRU03UVVGSGFFUXNVVUZCVFN4WFFVRlhMRk5CUVZNc1EwRkJWQ3hEUVVGWUxFTkJTREJET3pzd1FrRkpNVUlzTWtKQlFXVXNVMEZCVXl4RFFVRlVMRU5CUVdZc1JVRktNRUk3TzFGQlNURkRMRFJDUVVvd1F6dFJRVWx3UXl3NFFrRktiME03TzBGQlRXaEVMRmxCUVZFc1YwRkJWeXhMUVVGWUxFTkJRVklzUTBGT1owUTdPMEZCVVdoRUxGbEJRVkVzVVVGQlVqdEJRVU5CTEdGQlFVc3NSMEZCVER0QlFVTkpMSGRDUVVGWkxFdEJRVm9zUTBGRVNqdEJRVVZKTEd0Q1FVWktPMEZCUkVFc1lVRkpTeXhIUVVGTU8wRkJRMGtzZDBKQlFWa3NTMEZCV2l4RFFVUktPMEZCUlVrc2EwSkJSa283UVVGS1FTeGhRVTlMTEVkQlFVdzdRVUZEU1N4M1FrRkJXU3hMUVVGYUxFTkJSRW83UVVGRlNTeHJRa0ZHU2p0QlFWQkJMR0ZCVlVzc1IwRkJURHRCUVVOSkxIZENRVUZaTEV0QlFWb3NRMEZFU2p0QlFVVkpMR3RDUVVaS08wRkJWa0VzUzBGU1owUTdPMEZCZFVKb1JDeFJRVUZKTEVsQlFVb3NSVUZCVlR0QlFVTk9MRzlDUVVGWkxFbEJRVm9zUTBGRVRUdExRVUZXT3p0QlFVbEJMRmRCUVU4c1VVRkJVQ3hEUVROQ1owUTdRMEZCZGtJN096czdPenM3T3pzN096dEJRWGREZEVJc1NVRkJUU3c0UWtGQlZ5eFZRVUZETEV0QlFVUXNSVUZCVVN4SFFVRlNMRVZCUVdFc1IwRkJZanRYUVVGeFFpeExRVUZMTEVkQlFVd3NRMEZCVXl4TFFVRkxMRWRCUVV3c1EwRkJVeXhMUVVGVUxFVkJRV2RDTEVkQlFXaENMRU5CUVZRc1JVRkJLMElzUjBGQkwwSTdRMEZCY2tJN096czdPenM3T3pzN1FVRlZha0lzU1VGQlRTd3dRa0ZCVXl4VlFVRkRMRkZCUVVRc1JVRkJWeXhSUVVGWUxFVkJRWEZDTEZGQlFYSkNPMUZCUVN0Q0xHdEZRVUZaTzFkQlFVMHNjMEpCUVZVc1YwRkJXU3haUVVGWkxGZEJRVmNzVVVGQldDeERRVUZhTEVkQlFXMURMRXRCUVVzc1IwRkJUQ3hEUVVGVExGTkJRVlFzUlVGQmIwSXNVVUZCY0VJc1EwRkJia003UTBGQmRrVTdPenM3T3pzN08wRkJVV1lzU1VGQlRTeDNRMEZCWjBJc1ZVRkJReXhIUVVGRUxFVkJRVTBzWVVGQlRqdFhRVUYzUWl4cFFrRkJReXhEUVVGTkxFZEJRVTRzUTBGQlJDeEhRVUZsTEU5QlFVOHNUMEZCVHl4aFFVRlFMRU5CUVZBc1IwRkJLMElzUTBGQk9VTTdRMEZCZUVJN096czdPenM3TzBGQlVYUkNMRWxCUVUwc01FTkJRV2xDTEZWQlFVTXNVVUZCUkN4RlFVRlhMR0ZCUVZnN1YwRkJOa0lzV1VGQldTeFBRVUZQTEdGQlFWQXNRMEZCV2p0RFFVRTNRanM3T3pzN096czdPMEZCVTNaQ0xFbEJRVTBzYzBOQlFXVXNWVUZCUXl4UlFVRkVMRVZCUVZjc1MwRkJXQ3hGUVVGeFFqdEJRVU0zUXl4UlFVRk5MRlZCUVZVc1MwRkJTeXhSUVVGUkxFTkJRVklzUTBGQlRDeERRVVEyUWp0QlFVVTNReXhSUVVGTkxGTkJRVk1zU1VGQlN5eEpRVUZKTEV0QlFVb3NRMEZHZVVJN1FVRkhOME1zVVVGQlRTeHRRa0ZCYlVJc1MwRkJTeXhIUVVGTUxFTkJRVk1zVjBGQlZ5eE5RVUZZTEVWQlFXMUNMRU5CUVRWQ0xFTkJRVzVDTEVOQlNIVkRPenRCUVVzM1F5eFhRVUZQTEV0QlFVc3NTMEZCVEN4RFFVRlhMRzFDUVVGdFFpeFBRVUZ1UWl4RFFVRllMRWRCUVhsRExFOUJRWHBETEVOQlRITkRPME5CUVhKQ0lpd2labWxzWlNJNkltTmhiR011YW5NaUxDSnpiM1Z5WTJWU2IyOTBJam9pTDFWelpYSnpMMDFoZEhRdlUybDBaWE12Y0c5d2JXOTBhVzl1SWl3aWMyOTFjbU5sYzBOdmJuUmxiblFpT2xzaWFXMXdiM0owSUh0Y2JpQWdJQ0JvWVhOUWNtOXdaWEowZVN4Y2JpQWdJQ0JwYzA1MWJTeGNiaUFnSUNCemNHeHBkRlpoYkhWbFZXNXBkQ3hjYmlBZ0lDQjBiMFJsWTJsdFlXeGNibjBnWm5KdmJTQW5MaTkxZEdsc2N5YzdYRzVjYm1OdmJuTjBJRnBGVWs5ZlVFOUpUbFFnUFNCN1hHNGdJQ0FnZURvZ01DeGNiaUFnSUNCNU9pQXdMRnh1SUNBZ0lIbzZJREJjYm4wN1hHNWNibU52Ym5OMElHUnBjM1JoYm1ObE1VUWdQU0FvWVN3Z1lpa2dQVDRnVFdGMGFDNWhZbk1vWVNBdElHSXBPMXh1WEc0dktseHVJQ0FnSUVGdVoyeGxJR0psZEhkbFpXNGdjRzlwYm5SelhHNGdJQ0FnWEc0Z0lDQWdWSEpoYm5Oc1lYUmxjeUIwYUdVZ2FIbHdiM1JvWlhScFkyRnNJR3hwYm1VZ2MyOGdkR2hoZENCMGFHVWdKMlp5YjIwbklHTnZiM0prYVc1aGRHVnpYRzRnSUNBZ1lYSmxJR0YwSURBc01Dd2dkR2hsYmlCeVpYUjFjbTRnZEdobElHRnVaMnhsSUhWemFXNW5JQzVoYm1kc1pVWnliMjFEWlc1MFpYSW9LVnh1SUNBZ0lGeHVJQ0FnSUVCd1lYSmhiU0JiYjJKcVpXTjBYVG9nV0NCaGJtUWdXU0JqYjI5eVpHbHVZWFJsY3lCdlppQm1jbTl0SUhCdmFXNTBYRzRnSUNBZ1FIQmhjbUZ0SUZ0dlltcGxZM1JkT2lCWUlHRnVaQ0JaSUdOdmNtUnBibUYwWlhNZ2IyWWdkRzhnY0c5cGJuUmNiaUFnSUNCQWNtVjBkWEp1SUZ0eVlXUnBZVzVkT2lCQmJtZHNaU0JpWlhSM1pXVnVJSFJvWlNCMGQyOGdjRzlwYm5SeklHbHVJSEpoWkdsaGJuTmNiaW92WEc1bGVIQnZjblFnWTI5dWMzUWdZVzVuYkdVZ1BTQW9ZU3dnWWlBOUlGcEZVazlmVUU5SlRsUXBJRDArSUhKaFpHbGhibk5VYjBSbFozSmxaWE1vVFdGMGFDNWhkR0Z1TWloaExuZ2dMU0JpTG5nc0lHRXVlU0F0SUdJdWVTa3BPMXh1WEc0dktseHVJQ0FnSUVOdmJuWmxjblFnWkdWbmNtVmxjeUIwYnlCeVlXUnBZVzV6WEc0Z0lDQWdYRzRnSUNBZ1FIQmhjbUZ0SUZ0dWRXMWlaWEpkT2lCV1lXeDFaU0JwYmlCa1pXZHlaV1Z6WEc0Z0lDQWdRSEpsZEhWeWJpQmJiblZ0WW1WeVhUb2dWbUZzZFdVZ2FXNGdjbUZrYVdGdWMxeHVLaTljYm1WNGNHOXlkQ0JqYjI1emRDQmtaV2R5WldWelZHOVNZV1JwWVc1eklEMGdLR1JsWjNKbFpYTXBJRDArSUdSbFozSmxaWE1nS2lCTllYUm9MbEJKSUM4Z01UZ3dPMXh1WEc0dktseHVJQ0FnSUVScGJHRjBaVnh1SUNBZ0lGeHVJQ0FnSUVOb1lXNW5aU0IwYUdVZ2NISnZaM0psYzNOcGIyNGdZbVYwZDJWbGJpQmhJR0Z1WkNCaUlHRmpZMjl5WkdsdVp5QjBieUJrYVd4aGRHbHZiaTVjYmlBZ0lDQmNiaUFnSUNCVGJ5QmthV3hoZEdsdmJpQTlJREF1TlNCM2IzVnNaQ0JqYUdGdVoyVmNiaUFnSUNCY2JpQWdJQ0JoSUMwdExTMHRMUzB0TFNCaVhHNGdJQ0FnWEc0Z0lDQWdkRzljYmlBZ0lDQmNiaUFnSUNCaElDMHRMUzBnWWx4dUlDQWdJRnh1SUNBZ0lFQndZWEpoYlNCYmJuVnRZbVZ5WFRvZ1VISmxkbWx2ZFhNZ2RtRnNkV1ZjYmlBZ0lDQkFjR0Z5WVcwZ1cyNTFiV0psY2wwNklFTjFjbkpsYm5RZ2RtRnNkV1ZjYmlBZ0lDQkFjR0Z5WVcwZ1cyNTFiV0psY2wwNklFUnBiR0YwWlNCd2NtOW5jbVZ6Y3lCaWVTQjRYRzRnSUNBZ1FISmxkSFZ5YmlCYmJuVnRZbVZ5WFRvZ1VISmxkbWx2ZFhNZ2RtRnNkV1VnY0d4MWN5QjBhR1VnWkdsc1lYUmxaQ0JrYVdabVpYSmxibU5sWEc0cUwxeHVaWGh3YjNKMElHTnZibk4wSUdScGJHRjBaU0E5SUNoaExDQmlMQ0JrYVd4aGRHbHZiaWtnUFQ0Z1lTQXJJQ2dvWWlBdElHRXBJQ29nWkdsc1lYUnBiMjRwTzF4dVhHNHZLbHh1SUNBZ0lFUnBjM1JoYm1ObFhHNGdJQ0FnWEc0Z0lDQWdVbVYwZFhKdWN5QjBhR1VnWkdsemRHRnVZMlVnWW1WMGQyVmxiaUIwZDI4Z2JpQmthVzFsYm5OcGIyNWhiQ0J3YjJsdWRITXVYRzRnSUNBZ1hHNGdJQ0FnUUhCaGNtRnRJRnR2WW1wbFkzUXZiblZ0WW1WeVhUb2dlQ0JoYm1RZ2VTQnZjaUJxZFhOMElIZ2diMllnY0c5cGJuUWdRVnh1SUNBZ0lFQndZWEpoYlNCYmIySnFaV04wTDI1MWJXSmxjbDA2SUNodmNIUnBiMjVoYkNrNklIZ2dZVzVrSUhrZ2IzSWdhblZ6ZENCNElHOW1JSEJ2YVc1MElFSmNiaUFnSUNCQWNtVjBkWEp1SUZ0dWRXMWlaWEpkT2lCVWFHVWdaR2x6ZEdGdVkyVWdZbVYwZDJWbGJpQjBhR1VnZEhkdklIQnZhVzUwYzF4dUtpOWNibVY0Y0c5eWRDQmpiMjV6ZENCa2FYTjBZVzVqWlNBOUlDaGhMQ0JpSUQwZ1drVlNUMTlRVDBsT1ZDa2dQVDRnZTF4dUlDQWdJQzh2SURGRUlHUnBiV1Z1YzJsdmJuTmNiaUFnSUNCcFppQW9hWE5PZFcwb1lTa3BJSHRjYmlBZ0lDQWdJQ0FnY21WMGRYSnVJR1JwYzNSaGJtTmxNVVFvWVN3Z1lpazdYRzVjYmlBZ0lDQXZMeUJOZFd4MGFTMWthVzFsYm5OcGIyNWhiRnh1SUNBZ0lIMGdaV3h6WlNCN1hHNGdJQ0FnSUNBZ0lHTnZibk4wSUhoRVpXeDBZU0E5SUdScGMzUmhibU5sTVVRb1lTNTRMQ0JpTG5ncE8xeHVJQ0FnSUNBZ0lDQmpiMjV6ZENCNVJHVnNkR0VnUFNCa2FYTjBZVzVqWlRGRUtHRXVlU3dnWWk1NUtUdGNiaUFnSUNBZ0lDQWdZMjl1YzNRZ2VrUmxiSFJoSUQwZ0tHbHpUblZ0S0dFdWVpa3BJRDhnWkdsemRHRnVZMlV4UkNoaExub3NJR0l1ZWlrZ09pQXdPMXh1WEc0Z0lDQWdJQ0FnSUhKbGRIVnliaUJOWVhSb0xuTnhjblFvS0hoRVpXeDBZU0FxS2lBeUtTQXJJQ2g1UkdWc2RHRWdLaW9nTWlrZ0t5QW9la1JsYkhSaElDb3FJRElwS1R0Y2JpQWdJQ0I5WEc1OU8xeHVJRnh1THlwY2JpQWdJQ0JJZVhCdmRHVnVkWE5sWEc0Z0lDQWdYRzRnSUNBZ1VtVjBkWEp1Y3lCMGFHVWdhSGx3YjNSbGJuVnpaU3dnYzJsa1pTQkRMQ0JuYVhabGJpQjBhR1VnYkdWdVozUm9jeUJ2WmlCemFXUmxjeUJCSUdGdVpDQkNMbHh1SUNBZ0lGeHVJQ0FnSUVCd1lYSmhiU0JiYm5WdFltVnlYVG9nVEdWdVozUm9JRzltSUVGY2JpQWdJQ0JBY0dGeVlXMGdXMjUxYldKbGNsMDZJRXhsYm1kMGFDQnZaaUJDWEc0Z0lDQWdRSEpsZEhWeWJpQmJiblZ0WW1WeVhUb2dUR1Z1WjNSb0lHOW1JRU5jYmlvdlhHNWxlSEJ2Y25RZ1kyOXVjM1FnYUhsd2IzUmxiblZ6WlNBOUlDaGhMQ0JpS1NBOVBpQk5ZWFJvTG5OeGNuUW9LR0VnS2lCaEtTQXJJQ2hpSUNvZ1lpa3BPMXh1WEc0dktseHVJQ0FnSUZaaGJIVmxJR2x1SUhKaGJtZGxJR1p5YjIwZ2NISnZaM0psYzNOY2JpQWdJQ0JjYmlBZ0lDQkhhWFpsYmlCaElHeHZkMlZ5SUd4cGJXbDBJR0Z1WkNCaGJpQjFjSEJsY2lCc2FXMXBkQ3dnZDJVZ2NtVjBkWEp1SUhSb1pTQjJZV3gxWlNCM2FYUm9hVzVjYmlBZ0lDQjBhR0YwSUhKaGJtZGxJR0Z6SUdWNGNISmxjM05sWkNCaWVTQndjbTluY21WemN5QW9ZU0J1ZFcxaVpYSWdabkp2YlNBd0xURXBYRzRnSUNBZ1hHNGdJQ0FnUUhCaGNtRnRJRnR1ZFcxaVpYSmRPaUJVYUdVZ2NISnZaM0psYzNNZ1ltVjBkMlZsYmlCc2IzZGxjaUJoYm1RZ2RYQndaWElnYkdsdGFYUnpJR1Y0Y0hKbGMzTmxaQ0F3TFRGY2JpQWdJQ0JBY0dGeVlXMGdXMjUxYldKbGNsMDZJRXh2ZDJWeUlHeHBiV2wwSUc5bUlISmhibWRsWEc0Z0lDQWdRSEJoY21GdElGdHVkVzFpWlhKZE9pQlZjSEJsY2lCc2FXMXBkQ0J2WmlCeVlXNW5aVnh1SUNBZ0lFQnlaWFIxY200Z1cyNTFiV0psY2wwNklGWmhiSFZsSUdGeklHTmhiR04xYkdGMFpXUWdabkp2YlNCd2NtOW5jbVZ6Y3lCM2FYUm9hVzRnY21GdVoyVWdLRzV2ZENCc2FXMXBkR1ZrSUhkcGRHaHBiaUJ5WVc1blpTbGNiaW92WEc1bGVIQnZjblFnWTI5dWMzUWdaMlYwVm1Gc2RXVkdjbTl0VUhKdlozSmxjM01nUFNBb2NISnZaM0psYzNNc0lHWnliMjBzSUhSdktTQTlQaUFvTFNCd2NtOW5jbVZ6Y3lBcUlHWnliMjBwSUNzZ0tIQnliMmR5WlhOeklDb2dkRzhwSUNzZ1puSnZiVHRjYmx4dUx5cGNiaUFnSUNCUWNtOW5jbVZ6Y3lCM2FYUm9hVzRnWjJsMlpXNGdjbUZ1WjJWY2JpQWdJQ0JjYmlBZ0lDQkhhWFpsYmlCaElHeHZkMlZ5SUd4cGJXbDBJR0Z1WkNCaGJpQjFjSEJsY2lCc2FXMXBkQ3dnZDJVZ2NtVjBkWEp1SUhSb1pTQndjbTluY21WemMxeHVJQ0FnSUNobGVIQnlaWE56WldRZ1lYTWdZU0J1ZFcxaVpYSWdNQzB4S1NCeVpYQnlaWE5sYm5SbFpDQmllU0IwYUdVZ1oybDJaVzRnZG1Gc2RXVXNJR0Z1WkZ4dUlDQWdJR3hwYldsMElIUm9ZWFFnY0hKdlozSmxjM01nZEc4Z2QybDBhR2x1SURBdE1TNWNiaUFnSUNCY2JpQWdJQ0JBY0dGeVlXMGdXMjUxYldKbGNsMDZJRlpoYkhWbElIUnZJR1pwYm1RZ2NISnZaM0psYzNNZ2QybDBhR2x1SUdkcGRtVnVJSEpoYm1kbFhHNGdJQ0FnUUhCaGNtRnRJRnR1ZFcxaVpYSmRPaUJNYjNkbGNpQnNhVzFwZENCY2JpQWdJQ0JBY0dGeVlXMGdXMjUxYldKbGNsMDZJRlZ3Y0dWeUlHeHBiV2wwWEc0Z0lDQWdRSEpsZEhWeWJpQmJiblZ0WW1WeVhUb2dVSEp2WjNKbGMzTWdiMllnZG1Gc2RXVWdkMmwwYUdsdUlISmhibWRsSUdGeklHVjRjSEpsYzNObFpDQXdMVEZjYmlvdlhHNWxlSEJ2Y25RZ1kyOXVjM1FnWjJWMFVISnZaM0psYzNOR2NtOXRWbUZzZFdVZ1BTQW9kbUZzZFdVc0lHWnliMjBzSUhSdktTQTlQaUFvZG1Gc2RXVWdMU0JtY205dEtTQXZJQ2gwYnlBdElHWnliMjBwTzF4dVhHNHZLbHh1SUNBZ0lFOW1abk5sZENCaVpYUjNaV1Z1SUhSM2J5QnZZbXBsWTNSeklHOW1JRzUxYldKbGNuTmNibHh1SUNBZ0lFbG1JSEJ5YjNCbGNuUjVJR2x6SUdadmRXNWtJR2x1SUdJZ2JtOTBJSEJ5WlhObGJuUWdhVzRnWVN3Z2FYUWdkMmxzYkNCeVpYUjFjbTRnWURCZ0lHWnZjaUIwYUdGMElIQnliM0F1WEc0Z0lDQWdYRzRnSUNBZ1FIQmhjbUZ0SUZ0UWIybHVkRjA2SUVacGNuTjBJRzlpYW1WamRGeHVJQ0FnSUVCd1lYSmhiU0JiVUc5cGJuUmRPaUJUWldOdmJtUWdiMkpxWldOMFhHNGdJQ0FnUUhKbGRIVnliaUJiVDJabWMyVjBYVG9nUkdsemRHRnVZMlVnYldWMGNtbGpjeUJpWlhSM1pXVnVJSFIzYnlCd2IybHVkSE5jYmlvdlhHNWxlSEJ2Y25RZ1kyOXVjM1FnYjJabWMyVjBJRDBnS0dFc0lHSXBJRDArSUh0Y2JpQWdJQ0JqYjI1emRDQnZabVp6WlhRZ1BTQjdmVHRjYmx4dUlDQWdJR1p2Y2lBb2JHVjBJR3RsZVNCcGJpQmlLU0I3WEc0Z0lDQWdJQ0FnSUdsbUlDaGlMbWhoYzA5M2JsQnliM0JsY25SNUtHdGxlU2twSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJRzltWm5ObGRGdHJaWGxkSUQwZ2FHRnpVSEp2Y0dWeWRIa29ZU3dnYTJWNUtTQS9JR0piYTJWNVhTQXRJR0ZiYTJWNVhTQTZJREE3WEc0Z0lDQWdJQ0FnSUgxY2JpQWdJQ0I5WEc1Y2JpQWdJQ0J5WlhSMWNtNGdiMlptYzJWME8xeHVmVHRjYmx4dUx5cGNiaUFnSUNCUWIybHVkQ0JtY205dElHRnVaMnhsSUdGdVpDQmthWE4wWVc1alpWeHVJQ0FnSUZ4dUlDQWdJRUJ3WVhKaGJTQmJiMkpxWldOMFhUb2dNa1FnY0c5cGJuUWdiMllnYjNKcFoybHVYRzRnSUNBZ1FIQmhjbUZ0SUZ0dWRXMWlaWEpkT2lCQmJtZHNaU0JtY205dElHOXlhV2RwYmx4dUlDQWdJRUJ3WVhKaGJTQmJiblZ0WW1WeVhUb2dSR2x6ZEdGdVkyVWdabkp2YlNCdmNtbG5hVzVjYmlBZ0lDQkFjbVYwZFhKdUlGdHZZbXBsWTNSZE9pQkRZV3hqZFd4aGRHVmtJREpFSUhCdmFXNTBYRzRxTDF4dVpYaHdiM0owSUdOdmJuTjBJSEJ2YVc1MFJuSnZiVUZ1WjJ4bFFXNWtSR2x6ZEdGdVkyVWdQU0FvYjNKcFoybHVMQ0JoYm1kc1pTd2daR2x6ZEdGdVkyVXBJRDArSUh0Y2JpQWdJQ0JoYm1kc1pTQTlJR1JsWjNKbFpYTlViMUpoWkdsaGJuTW9ZVzVuYkdVcE8xeHVYRzRnSUNBZ2NtVjBkWEp1SUh0Y2JpQWdJQ0FnSUNBZ2VEb2daR2x6ZEdGdVkyVWdLaUJOWVhSb0xtTnZjeWhoYm1kc1pTa2dLeUJ2Y21sbmFXNHVlQ3hjYmlBZ0lDQWdJQ0FnZVRvZ1pHbHpkR0Z1WTJVZ0tpQk5ZWFJvTG5OcGJpaGhibWRzWlNrZ0t5QnZjbWxuYVc0dWVWeHVJQ0FnSUgwN1hHNTlPMXh1WEc0dktseHVJQ0FnSUVOdmJuWmxjblFnY21Ga2FXRnVjeUIwYnlCa1pXZHlaV1Z6WEc0Z0lDQWdYRzRnSUNBZ1FIQmhjbUZ0SUZ0dWRXMWlaWEpkT2lCV1lXeDFaU0JwYmlCeVlXUnBZVzV6WEc0Z0lDQWdRSEpsZEhWeWJpQmJiblZ0WW1WeVhUb2dWbUZzZFdVZ2FXNGdaR1ZuY21WbGMxeHVLaTljYm1WNGNHOXlkQ0JqYjI1emRDQnlZV1JwWVc1elZHOUVaV2R5WldWeklEMGdLSEpoWkdsaGJuTXBJRDArSUhKaFpHbGhibk1nS2lBeE9EQWdMeUJOWVhSb0xsQkpPMXh1WEc0dktseHVJQ0FnSUZKbGRIVnliaUJ5WVc1a2IyMGdiblZ0WW1WeUlHSmxkSGRsWlc0Z2NtRnVaMlZjYmlBZ0lDQmNiaUFnSUNCQWNHRnlZVzBnVzI1MWJXSmxjbDBnS0c5d2RHbHZibUZzS1RvZ1QzVjBjSFYwSUcxcGJtbHRkVzFjYmlBZ0lDQkFjR0Z5WVcwZ1cyNTFiV0psY2wwZ0tHOXdkR2x2Ym1Gc0tUb2dUM1YwY0hWMElHMWhlR2x0ZFcxY2JpQWdJQ0JBY21WMGRYSnVJRnR1ZFcxaVpYSmRPaUJTWVc1a2IyMGdiblZ0WW1WeUlIZHBkR2hwYmlCeVlXNW5aU3dnYjNJZ01DQmhibVFnTVNCcFppQnViMjVsSUhCeWIzWnBaR1ZrWEc0cUwxeHVaWGh3YjNKMElHTnZibk4wSUhKaGJtUnZiU0E5SUNodGFXNGdQU0F3TENCdFlYZ2dQU0F4S1NBOVBpQk5ZWFJvTG5KaGJtUnZiU2dwSUNvZ0tHMWhlQ0F0SUcxcGJpa2dLeUJ0YVc0N1hHNWNiaThxWEc0Z0lDQWdRMkZzWTNWc1lYUmxJSEpsYkdGMGFYWmxJSFpoYkhWbFhHNGdJQ0FnWEc0Z0lDQWdWR0ZyWlhNZ2RHaGxJRzl3WlhKaGRHOXlJR0Z1WkNCMllXeDFaU0JtY205dElHRWdjM1J5YVc1bkxDQnBaU0JjSWlzOU5Wd2lMQ0JoYm1RZ1lYQndiR2xsYzF4dUlDQWdJSFJ2SUhSb1pTQmpkWEp5Wlc1MElIWmhiSFZsSUhSdklISmxjMjlzZG1VZ1lTQnVaWGNnZEdGeVoyVjBMbHh1SUNBZ0lGeHVJQ0FnSUVCd1lYSmhiU0JiYm5WdFltVnlYVG9nUTNWeWNtVnVkQ0IyWVd4MVpWeHVJQ0FnSUVCd1lYSmhiU0JiYzNSeWFXNW5YVG9nVW1Wc1lYUnBkbVVnZG1Gc2RXVmNiaUFnSUNCQWNtVjBkWEp1SUZ0dWRXMWlaWEpkT2lCT1pYY2dkbUZzZFdWY2Jpb3ZYRzVsZUhCdmNuUWdZMjl1YzNRZ2NtVnNZWFJwZG1WV1lXeDFaU0E5SUNoamRYSnlaVzUwTENCeVpXeGhkR2wyWlNrZ1BUNGdlMXh1SUNBZ0lHeGxkQ0J1WlhkV1lXeDFaU0E5SUdOMWNuSmxiblE3WEc0Z0lDQWdZMjl1YzNRZ1pYRjFZWFJwYjI0Z1BTQnlaV3hoZEdsMlpTNXpjR3hwZENnblBTY3BPMXh1SUNBZ0lHTnZibk4wSUc5d1pYSmhkRzl5SUQwZ1pYRjFZWFJwYjI1Yk1GMDdYRzRnSUNBZ2JHVjBJSHNnZFc1cGRDd2dkbUZzZFdVZ2ZTQTlJSE53YkdsMFZtRnNkV1ZWYm1sMEtHVnhkV0YwYVc5dVd6RmRLVHRjYmx4dUlDQWdJSFpoYkhWbElEMGdjR0Z5YzJWR2JHOWhkQ2gyWVd4MVpTazdYRzVjYmlBZ0lDQnpkMmwwWTJnZ0tHOXdaWEpoZEc5eUtTQjdYRzRnSUNBZ1kyRnpaU0FuS3ljNlhHNGdJQ0FnSUNBZ0lHNWxkMVpoYkhWbElDczlJSFpoYkhWbE8xeHVJQ0FnSUNBZ0lDQmljbVZoYXp0Y2JpQWdJQ0JqWVhObElDY3RKenBjYmlBZ0lDQWdJQ0FnYm1WM1ZtRnNkV1VnTFQwZ2RtRnNkV1U3WEc0Z0lDQWdJQ0FnSUdKeVpXRnJPMXh1SUNBZ0lHTmhjMlVnSnlvbk9seHVJQ0FnSUNBZ0lDQnVaWGRXWVd4MVpTQXFQU0IyWVd4MVpUdGNiaUFnSUNBZ0lDQWdZbkpsWVdzN1hHNGdJQ0FnWTJGelpTQW5MeWM2WEc0Z0lDQWdJQ0FnSUc1bGQxWmhiSFZsSUM4OUlIWmhiSFZsTzF4dUlDQWdJQ0FnSUNCaWNtVmhhenRjYmlBZ0lDQjlYRzRnSUNBZ1hHNGdJQ0FnYVdZZ0tIVnVhWFFwSUh0Y2JpQWdJQ0FnSUNBZ2JtVjNWbUZzZFdVZ0t6MGdkVzVwZER0Y2JpQWdJQ0I5WEc1Y2JpQWdJQ0J5WlhSMWNtNGdibVYzVm1Gc2RXVTdYRzU5TzF4dVhHNHZLbHh1SUNBZ0lGSmxjM1J5YVdOMElIWmhiSFZsSUhSdklISmhibWRsWEc0Z0lDQWdYRzRnSUNBZ1VtVjBkWEp1SUhaaGJIVmxJSGRwZEdocGJpQjBhR1VnY21GdVoyVWdiMllnYkc5M1pYSk1hVzFwZENCaGJtUWdkWEJ3WlhKTWFXMXBkRnh1SUNBZ0lGeHVJQ0FnSUVCd1lYSmhiU0JiYm5WdFltVnlYVG9nVm1Gc2RXVWdkRzhnYTJWbGNDQjNhWFJvYVc0Z2NtRnVaMlZjYmlBZ0lDQkFjR0Z5WVcwZ1cyNTFiV0psY2wwNklFeHZkMlZ5SUd4cGJXbDBJRzltSUhKaGJtZGxYRzRnSUNBZ1FIQmhjbUZ0SUZ0dWRXMWlaWEpkT2lCVmNIQmxjaUJzYVcxcGRDQnZaaUJ5WVc1blpWeHVJQ0FnSUVCeVpYUjFjbTRnVzI1MWJXSmxjbDA2SUZaaGJIVmxJR0Z6SUd4cGJXbDBaV1FnZDJsMGFHbHVJR2RwZG1WdUlISmhibWRsWEc0cUwxeHVaWGh3YjNKMElHTnZibk4wSUhKbGMzUnlhV04wSUQwZ0tIWmhiSFZsTENCdGFXNHNJRzFoZUNrZ1BUNGdUV0YwYUM1dFlYZ29UV0YwYUM1dGFXNG9kbUZzZFdVc0lHMWhlQ2tzSUcxcGJpazdYRzVjYmk4cVhHNGdJQ0FnUm5KaGJXVnlZWFJsTFdsdVpHVndaVzVrWlc1MElITnRiMjkwYUdsdVoxeHVYRzRnSUNBZ1FIQmhjbUZ0SUZ0dWRXMWlaWEpkT2lCT1pYY2dkbUZzZFdWY2JpQWdJQ0JBY0dGeVlXMGdXMjUxYldKbGNsMDZJRTlzWkNCMllXeDFaVnh1SUNBZ0lFQndZWEpoYlNCYmJuVnRZbVZ5WFRvZ1JuSmhiV1VnWkhWeVlYUnBiMjVjYmlBZ0lDQkFjR0Z5WVcwZ1cyNTFiV0psY2wwZ0tHOXdkR2x2Ym1Gc0tUb2dVMjF2YjNSb2FXNW5JQ2d3SUdseklHNXZibVVwWEc0cUwxeHVaWGh3YjNKMElHTnZibk4wSUhOdGIyOTBhQ0E5SUNodVpYZFdZV3gxWlN3Z2IyeGtWbUZzZFdVc0lHUjFjbUYwYVc5dUxDQnpiVzl2ZEdocGJtY2dQU0F3S1NBOVBpQjBiMFJsWTJsdFlXd29iMnhrVm1Gc2RXVWdLeUFvWkhWeVlYUnBiMjRnS2lBb2JtVjNWbUZzZFdVZ0xTQnZiR1JXWVd4MVpTa2dMeUJOWVhSb0xtMWhlQ2h6Ylc5dmRHaHBibWNzSUdSMWNtRjBhVzl1S1NrcE8xeHVYRzR2S2x4dUlDQWdJRU52Ym5abGNuUWdlQ0J3WlhJZ2MyVmpiMjVrSUhSdklIQmxjaUJtY21GdFpTQjJaV3h2WTJsMGVTQmlZWE5sWkNCdmJpQm1jSE5jYmlBZ0lDQmNiaUFnSUNCQWNHRnlZVzBnVzI1MWJXSmxjbDA2SUZWdWFYUWdjR1Z5SUhObFkyOXVaRnh1SUNBZ0lFQndZWEpoYlNCYmJuVnRZbVZ5WFRvZ1JuSmhiV1VnWkhWeVlYUnBiMjRnYVc0Z2JYTmNiaW92WEc1bGVIQnZjblFnWTI5dWMzUWdjM0JsWldSUVpYSkdjbUZ0WlNBOUlDaDRjSE1zSUdaeVlXMWxSSFZ5WVhScGIyNHBJRDArSUNocGMwNTFiU2g0Y0hNcEtTQS9JSGh3Y3lBdklDZ3hNREF3SUM4Z1puSmhiV1ZFZFhKaGRHbHZiaWtnT2lBd08xeHVYRzR2S2x4dUlDQWdJRU52Ym5abGNuUWdkbVZzYjJOcGRIa2dhVzUwYnlCMlpXeHBZMmwwZVNCd1pYSWdjMlZqYjI1a1hHNGdJQ0FnWEc0Z0lDQWdRSEJoY21GdElGdHVkVzFpWlhKZE9pQlZibWwwSUhCbGNpQm1jbUZ0WlZ4dUlDQWdJRUJ3WVhKaGJTQmJiblZ0WW1WeVhUb2dSbkpoYldVZ1pIVnlZWFJwYjI0Z2FXNGdiWE5jYmlvdlhHNWxlSEJ2Y25RZ1kyOXVjM1FnYzNCbFpXUlFaWEpUWldOdmJtUWdQU0FvZG1Wc2IyTnBkSGtzSUdaeVlXMWxSSFZ5WVhScGIyNHBJRDArSUhabGJHOWphWFI1SUNvZ0tERXdNREFnTHlCbWNtRnRaVVIxY21GMGFXOXVLVHRjYmx4dUx5cGNiaUFnSUNCRGNtVmhkR1VnYzNSbGNIQmxaQ0IyWlhKemFXOXVJRzltSURBdE1TQndjbTluY21WemMxeHVJQ0FnSUZ4dUlDQWdJRUJ3WVhKaGJTQmJiblZ0WW1WeVhUb2dRM1Z5Y21WdWRDQjJZV3gxWlZ4dUlDQWdJRUJ3WVhKaGJTQmJhVzUwWFRvZ1RuVnRZbVZ5SUc5bUlITjBaWEJ6WEc0Z0lDQWdRSEpsZEhWeWJpQmJiblZ0WW1WeVhUb2dVM1JsY0hCbFpDQjJZV3gxWlZ4dUtpOWNibVY0Y0c5eWRDQmpiMjV6ZENCemRHVndVSEp2WjNKbGMzTWdQU0FvY0hKdlozSmxjM01zSUhOMFpYQnpLU0E5UGlCN1hHNGdJQ0FnWTI5dWMzUWdjMlZuYldWdWRDQTlJREVnTHlBb2MzUmxjSE1nTFNBeEtUdGNiaUFnSUNCamIyNXpkQ0IwWVhKblpYUWdQU0F4SUMwZ0tERWdMeUJ6ZEdWd2N5azdYRzRnSUNBZ1kyOXVjM1FnY0hKdlozSmxjM05QWmxSaGNtZGxkQ0E5SUUxaGRHZ3ViV2x1S0hCeWIyZHlaWE56SUM4Z2RHRnlaMlYwTENBeEtUdGNibHh1SUNBZ0lISmxkSFZ5YmlCTllYUm9MbVpzYjI5eUtIQnliMmR5WlhOelQyWlVZWEpuWlhRZ0x5QnpaV2R0Wlc1MEtTQXFJSE5sWjIxbGJuUTdYRzU5T3lKZGZRPT1cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2luYy9jYWxjLmpzXG4gKiogbW9kdWxlIGlkID0gMTlcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF9kZWZhdWx0UHJvcHMgPSByZXF1aXJlKCcuL3NldHRpbmdzL2RlZmF1bHQtcHJvcHMnKTtcblxuZXhwb3J0cy5kZWZhdWx0ID0ge1xuICAgIGRlZmF1bHRQcm9wczogX2RlZmF1bHRQcm9wcy5vcGFjaXR5XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluTnlZeTkyWVd4MVpTMTBlWEJsY3k5aGJIQm9ZUzVxY3lKZExDSnVZVzFsY3lJNlcxMHNJbTFoY0hCcGJtZHpJam9pT3pzN096czdhMEpCUldVN1FVRkRXQ3gxUTBGRVZ5SXNJbVpwYkdVaU9pSmhiSEJvWVM1cWN5SXNJbk52ZFhKalpWSnZiM1FpT2lJdlZYTmxjbk12VFdGMGRDOVRhWFJsY3k5d2IzQnRiM1JwYjI0aUxDSnpiM1Z5WTJWelEyOXVkR1Z1ZENJNld5SnBiWEJ2Y25RZ2V5QnZjR0ZqYVhSNUlIMGdabkp2YlNBbkxpOXpaWFIwYVc1bmN5OWtaV1poZFd4MExYQnliM0J6Snp0Y2JseHVaWGh3YjNKMElHUmxabUYxYkhRZ2UxeHVJQ0FnSUdSbFptRjFiSFJRY205d2N6b2diM0JoWTJsMGVWeHVmVHNpWFgwPVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvdmFsdWUtdHlwZXMvYWxwaGEuanNcbiAqKiBtb2R1bGUgaWQgPSAyMFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX3VuaXQgPSByZXF1aXJlKCcuL3VuaXQnKTtcblxudmFyIF91bml0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3VuaXQpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5leHBvcnRzLmRlZmF1bHQgPSB7XG4gICAgZGVmYXVsdFByb3BzOiB7XG4gICAgICAgIHVuaXQ6ICdkZWcnLFxuICAgICAgICB0eXBlOiBfdW5pdDIuZGVmYXVsdFxuICAgIH1cbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5OeVl5OTJZV3gxWlMxMGVYQmxjeTloYm1kc1pTNXFjeUpkTENKdVlXMWxjeUk2VzEwc0ltMWhjSEJwYm1keklqb2lPenM3T3pzN096czdPMnRDUVVWbE8wRkJRMWdzYTBKQlFXTTdRVUZEVml4alFVRk5MRXRCUVU0N1FVRkRRU3cwUWtGR1ZUdExRVUZrSWl3aVptbHNaU0k2SW1GdVoyeGxMbXB6SWl3aWMyOTFjbU5sVW05dmRDSTZJaTlWYzJWeWN5OU5ZWFIwTDFOcGRHVnpMM0J2Y0cxdmRHbHZiaUlzSW5OdmRYSmpaWE5EYjI1MFpXNTBJanBiSW1sdGNHOXlkQ0IxYm1sMFZIbHdaU0JtY205dElDY3VMM1Z1YVhRbk8xeHVYRzVsZUhCdmNuUWdaR1ZtWVhWc2RDQjdYRzRnSUNBZ1pHVm1ZWFZzZEZCeWIzQnpPaUI3WEc0Z0lDQWdJQ0FnSUhWdWFYUTZJQ2RrWldjbkxGeHVJQ0FnSUNBZ0lDQjBlWEJsT2lCMWJtbDBWSGx3WlZ4dUlDQWdJSDFjYm4wN0lsMTlcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL3ZhbHVlLXR5cGVzL2FuZ2xlLmpzXG4gKiogbW9kdWxlIGlkID0gMjFcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF91dGlscyA9IHJlcXVpcmUoJy4uL2luYy91dGlscycpO1xuXG52YXIgX3B4ID0gcmVxdWlyZSgnLi9weCcpO1xuXG52YXIgX3B4MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3B4KTtcblxudmFyIF9kaWN0aW9uYXJ5ID0gcmVxdWlyZSgnLi9zZXR0aW5ncy9kaWN0aW9uYXJ5Jyk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmV4cG9ydHMuZGVmYXVsdCA9IHtcbiAgICBkZWZhdWx0UHJvcHM6IF9weDIuZGVmYXVsdC5kZWZhdWx0UHJvcHMsXG5cbiAgICAvKlxuICAgICAgICBTcGxpdCBwb3NpdGlvbnMgaW4gZm9ybWF0IFwiWCBZIFpcIlxuICAgICAgICBcbiAgICAgICAgQHBhcmFtIFtzdHJpbmddOiBQb3NpdGlvbiB2YWx1ZXNcbiAgICAgICAgICAgIFwiMjAlIDMwJSAwXCIgLT4gezIwJSwgMzAlLCAwfVxuICAgICAgICAgICAgXCIyMCUgMzAlXCIgLT4gezIwJSwgMzAlfVxuICAgICAgICAgICAgXCIyMCVcIiAtPiB7MjAlLCAyMCV9XG4gICAgKi9cbiAgICBzcGxpdDogZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgIHZhciBzcGxpdFZhbHVlcyA9ICgwLCBfdXRpbHMuc3BsaXRTcGFjZURlbGltaXRlZCkodmFsdWUpO1xuICAgICAgICB2YXIgbnVtQXhlcyA9IHNwbGl0VmFsdWVzLmxlbmd0aDtcbiAgICAgICAgdmFyIHNwbGl0VmFsdWUgPSB7XG4gICAgICAgICAgICBYOiBzcGxpdFZhbHVlc1swXSxcbiAgICAgICAgICAgIFk6IG51bUF4ZXMgPiAxID8gc3BsaXRWYWx1ZXNbMV0gOiBzcGxpdFZhbHVlc1swXVxuICAgICAgICB9O1xuXG4gICAgICAgIGlmIChudW1BeGVzID4gMikge1xuICAgICAgICAgICAgc3BsaXRWYWx1ZS5aID0gc3BsaXRWYWx1ZXNbMl07XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gc3BsaXRWYWx1ZTtcbiAgICB9LFxuXG4gICAgY29tYmluZTogZnVuY3Rpb24gKHZhbHVlcykge1xuICAgICAgICByZXR1cm4gKDAsIF91dGlscy5jcmVhdGVEZWxpbWl0ZWQpKHZhbHVlcywgX2RpY3Rpb25hcnkuYXhlcywgJyAnKTtcbiAgICB9XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluTnlZeTkyWVd4MVpTMTBlWEJsY3k5aGVHVnpMbXB6SWwwc0ltNWhiV1Z6SWpwYlhTd2liV0Z3Y0dsdVozTWlPaUk3T3pzN096czdPenM3T3pzN08ydENRVWxsTzBGQlExZ3NhMEpCUVdNc1lVRkJXU3haUVVGYU96czdPenM3T3pzN08wRkJWV1FzVjBGQlR5eFZRVUZETEV0QlFVUXNSVUZCVnp0QlFVTmtMRmxCUVUwc1kwRkJZeXhuUTBGQmIwSXNTMEZCY0VJc1EwRkJaQ3hEUVVSUk8wRkJSV1FzV1VGQlRTeFZRVUZWTEZsQlFWa3NUVUZCV2l4RFFVWkdPMEZCUjJRc1dVRkJUU3hoUVVGaE8wRkJRMllzWlVGQlJ5eFpRVUZaTEVOQlFWb3NRMEZCU0R0QlFVTkJMR1ZCUVVjc1QwRkJReXhIUVVGVkxFTkJRVllzUjBGQlpTeFpRVUZaTEVOQlFWb3NRMEZCYUVJc1IwRkJhVU1zV1VGQldTeERRVUZhTEVOQlFXcERPMU5CUmtRc1EwRklVVHM3UVVGUlpDeFpRVUZKTEZWQlFWVXNRMEZCVml4RlFVRmhPMEZCUTJJc2RVSkJRVmNzUTBGQldDeEhRVUZsTEZsQlFWa3NRMEZCV2l4RFFVRm1MRU5CUkdFN1UwRkJha0k3TzBGQlNVRXNaVUZCVHl4VlFVRlFMRU5CV21NN1MwRkJXRHM3UVVGbFVDeGhRVUZUTEZWQlFVTXNUVUZCUkR0bFFVRlpMRFJDUVVGblFpeE5RVUZvUWl4dlFrRkJPRUlzUjBGQk9VSTdTMEZCV2lJc0ltWnBiR1VpT2lKaGVHVnpMbXB6SWl3aWMyOTFjbU5sVW05dmRDSTZJaTlWYzJWeWN5OU5ZWFIwTDFOcGRHVnpMM0J2Y0cxdmRHbHZiaUlzSW5OdmRYSmpaWE5EYjI1MFpXNTBJanBiSW1sdGNHOXlkQ0I3SUdOeVpXRjBaVVJsYkdsdGFYUmxaQ3dnYzNCc2FYUlRjR0ZqWlVSbGJHbHRhWFJsWkNCOUlHWnliMjBnSnk0dUwybHVZeTkxZEdsc2N5YzdYRzVwYlhCdmNuUWdjSGhXWVd4MVpWUjVjR1VnWm5KdmJTQW5MaTl3ZUNjN1hHNXBiWEJ2Y25RZ2V5QmhlR1Z6SUgwZ1puSnZiU0FuTGk5elpYUjBhVzVuY3k5a2FXTjBhVzl1WVhKNUp6dGNibHh1Wlhod2IzSjBJR1JsWm1GMWJIUWdlMXh1SUNBZ0lHUmxabUYxYkhSUWNtOXdjem9nY0hoV1lXeDFaVlI1Y0dVdVpHVm1ZWFZzZEZCeWIzQnpMRnh1SUNBZ0lDQWdJQ0JjYmlBZ0lDQXZLbHh1SUNBZ0lDQWdJQ0JUY0d4cGRDQndiM05wZEdsdmJuTWdhVzRnWm05eWJXRjBJRndpV0NCWklGcGNJbHh1SUNBZ0lDQWdJQ0JjYmlBZ0lDQWdJQ0FnUUhCaGNtRnRJRnR6ZEhKcGJtZGRPaUJRYjNOcGRHbHZiaUIyWVd4MVpYTmNiaUFnSUNBZ0lDQWdJQ0FnSUZ3aU1qQWxJRE13SlNBd1hDSWdMVDRnZXpJd0pTd2dNekFsTENBd2ZWeHVJQ0FnSUNBZ0lDQWdJQ0FnWENJeU1DVWdNekFsWENJZ0xUNGdlekl3SlN3Z016QWxmVnh1SUNBZ0lDQWdJQ0FnSUNBZ1hDSXlNQ1ZjSWlBdFBpQjdNakFsTENBeU1DVjlYRzRnSUNBZ0tpOWNiaUFnSUNCemNHeHBkRG9nS0haaGJIVmxLU0E5UGlCN1hHNGdJQ0FnSUNBZ0lHTnZibk4wSUhOd2JHbDBWbUZzZFdWeklEMGdjM0JzYVhSVGNHRmpaVVJsYkdsdGFYUmxaQ2gyWVd4MVpTazdYRzRnSUNBZ0lDQWdJR052Ym5OMElHNTFiVUY0WlhNZ1BTQnpjR3hwZEZaaGJIVmxjeTVzWlc1bmRHZzdYRzRnSUNBZ0lDQWdJR052Ym5OMElITndiR2wwVm1Gc2RXVWdQU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQllPaUJ6Y0d4cGRGWmhiSFZsYzFzd1hTeGNiaUFnSUNBZ0lDQWdJQ0FnSUZrNklDaHVkVzFCZUdWeklENGdNU2tnUHlCemNHeHBkRlpoYkhWbGMxc3hYU0E2SUhOd2JHbDBWbUZzZFdWeld6QmRYRzRnSUNBZ0lDQWdJSDA3WEc1Y2JpQWdJQ0FnSUNBZ2FXWWdLRzUxYlVGNFpYTWdQaUF5S1NCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0J6Y0d4cGRGWmhiSFZsTGxvZ1BTQnpjR3hwZEZaaGJIVmxjMXN5WFR0Y2JpQWdJQ0FnSUNBZ2ZWeHVYRzRnSUNBZ0lDQWdJSEpsZEhWeWJpQnpjR3hwZEZaaGJIVmxPMXh1SUNBZ0lIMHNYRzVjYmlBZ0lDQmpiMjFpYVc1bE9pQW9kbUZzZFdWektTQTlQaUJqY21WaGRHVkVaV3hwYldsMFpXUW9kbUZzZFdWekxDQmhlR1Z6TENBbklDY3BYRzU5TzF4dUlsMTlcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL3ZhbHVlLXR5cGVzL2F4ZXMuanNcbiAqKiBtb2R1bGUgaWQgPSAyMlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9O1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX3JnYiA9IHJlcXVpcmUoJy4vcmdiJyk7XG5cbnZhciBfcmdiMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JnYik7XG5cbnZhciBfaHNsID0gcmVxdWlyZSgnLi9oc2wnKTtcblxudmFyIF9oc2wyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfaHNsKTtcblxudmFyIF9oZXggPSByZXF1aXJlKCcuL2hleCcpO1xuXG52YXIgX2hleDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9oZXgpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG52YXIgY29sb3JUeXBlcyA9IFtfcmdiMi5kZWZhdWx0LCBfaHNsMi5kZWZhdWx0LCBfaGV4Mi5kZWZhdWx0XTtcbnZhciBudW1Db2xvclR5cGVzID0gY29sb3JUeXBlcy5sZW5ndGg7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IHtcbiAgICBkZWZhdWx0UHJvcHM6IF9leHRlbmRzKHt9LCBfcmdiMi5kZWZhdWx0LmRlZmF1bHRQcm9wcywgX2hzbDIuZGVmYXVsdC5kZWZhdWx0UHJvcHMpLFxuXG4gICAgdGVzdDogZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgIHJldHVybiBfcmdiMi5kZWZhdWx0LnRlc3QodmFsdWUpIHx8IF9oZXgyLmRlZmF1bHQudGVzdCh2YWx1ZSkgfHwgX2hzbDIuZGVmYXVsdC50ZXN0KHZhbHVlKTtcbiAgICB9LFxuXG4gICAgc3BsaXQ6IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IG51bUNvbG9yVHlwZXM7IGkrKykge1xuICAgICAgICAgICAgaWYgKGNvbG9yVHlwZXNbaV0udGVzdCh2YWx1ZSkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gY29sb3JUeXBlc1tpXS5zcGxpdCh2YWx1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgY29tYmluZTogZnVuY3Rpb24gKHZhbHVlcykge1xuICAgICAgICByZXR1cm4gdmFsdWVzLlJlZCAhPT0gdW5kZWZpbmVkID8gX3JnYjIuZGVmYXVsdC5jb21iaW5lKHZhbHVlcykgOiBfaHNsMi5kZWZhdWx0LmNvbWJpbmUodmFsdWVzKTtcbiAgICB9XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluTnlZeTkyWVd4MVpTMTBlWEJsY3k5amIyeHZjaTVxY3lKZExDSnVZVzFsY3lJNlcxMHNJbTFoY0hCcGJtZHpJam9pT3pzN096czdPenM3T3pzN096czdPenM3T3p0QlFVbEJMRWxCUVUwc1lVRkJZU3cyUTBGQllqdEJRVU5PTEVsQlFVMHNaMEpCUVdkQ0xGZEJRVmNzVFVGQldEczdhMEpCUlZBN1FVRkRXQ3dyUWtGQmJVSXNZMEZCU1N4WlFVRktMRVZCUVhGQ0xHTkJRVWtzV1VGQlNpeERRVUY0UXpzN1FVRkZRU3hWUVVGTkxGVkJRVU1zUzBGQlJEdGxRVUZYTEdOQlFVa3NTVUZCU2l4RFFVRlRMRXRCUVZRc1MwRkJiVUlzWTBGQlNTeEpRVUZLTEVOQlFWTXNTMEZCVkN4RFFVRnVRaXhKUVVGelF5eGpRVUZKTEVsQlFVb3NRMEZCVXl4TFFVRlVMRU5CUVhSRE8wdEJRVmc3TzBGQlJVNHNWMEZCVHl4VlFVRkRMRXRCUVVRc1JVRkJWenRCUVVOa0xHRkJRVXNzU1VGQlNTeEpRVUZKTEVOQlFVb3NSVUZCVHl4SlFVRkpMR0ZCUVVvc1JVRkJiVUlzUjBGQmJrTXNSVUZCZDBNN1FVRkRjRU1zWjBKQlFVa3NWMEZCVnl4RFFVRllMRVZCUVdNc1NVRkJaQ3hEUVVGdFFpeExRVUZ1UWl4RFFVRktMRVZCUVN0Q08wRkJRek5DTEhWQ1FVRlBMRmRCUVZjc1EwRkJXQ3hGUVVGakxFdEJRV1FzUTBGQmIwSXNTMEZCY0VJc1EwRkJVQ3hEUVVReVFqdGhRVUV2UWp0VFFVUktPMHRCUkVjN08wRkJVVkFzWVVGQlV5eFZRVUZETEUxQlFVUTdaVUZCV1N4TlFVRkRMRU5CUVU4c1IwRkJVQ3hMUVVGbExGTkJRV1lzUjBGQk5FSXNZMEZCU1N4UFFVRktMRU5CUVZrc1RVRkJXaXhEUVVFM1FpeEhRVUZ0UkN4alFVRkpMRTlCUVVvc1EwRkJXU3hOUVVGYUxFTkJRVzVFTzB0QlFWb2lMQ0ptYVd4bElqb2lZMjlzYjNJdWFuTWlMQ0p6YjNWeVkyVlNiMjkwSWpvaUwxVnpaWEp6TDAxaGRIUXZVMmwwWlhNdmNHOXdiVzkwYVc5dUlpd2ljMjkxY21ObGMwTnZiblJsYm5RaU9sc2lhVzF3YjNKMElISm5ZaUJtY205dElDY3VMM0puWWljN1hHNXBiWEJ2Y25RZ2FITnNJR1p5YjIwZ0p5NHZhSE5zSnp0Y2JtbHRjRzl5ZENCb1pYZ2dabkp2YlNBbkxpOW9aWGduTzF4dVhHNWpiMjV6ZENCamIyeHZjbFI1Y0dWeklEMGdXM0puWWl3Z2FITnNMQ0JvWlhoZE8xeHVZMjl1YzNRZ2JuVnRRMjlzYjNKVWVYQmxjeUE5SUdOdmJHOXlWSGx3WlhNdWJHVnVaM1JvTzF4dVhHNWxlSEJ2Y25RZ1pHVm1ZWFZzZENCN1hHNGdJQ0FnWkdWbVlYVnNkRkJ5YjNCek9pQjdJQzR1TG5KbllpNWtaV1poZFd4MFVISnZjSE1zSUM0dUxtaHpiQzVrWldaaGRXeDBVSEp2Y0hNZ2ZTeGNibHh1SUNBZ0lIUmxjM1E2SUNoMllXeDFaU2tnUFQ0Z2NtZGlMblJsYzNRb2RtRnNkV1VwSUh4OElHaGxlQzUwWlhOMEtIWmhiSFZsS1NCOGZDQm9jMnd1ZEdWemRDaDJZV3gxWlNrc1hHNWNiaUFnSUNCemNHeHBkRG9nS0haaGJIVmxLU0E5UGlCN1hHNGdJQ0FnSUNBZ0lHWnZjaUFvYkdWMElHa2dQU0F3T3lCcElEd2diblZ0UTI5c2IzSlVlWEJsY3pzZ2FTc3JLU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQnBaaUFvWTI5c2IzSlVlWEJsYzF0cFhTNTBaWE4wS0haaGJIVmxLU2tnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUhKbGRIVnliaUJqYjJ4dmNsUjVjR1Z6VzJsZExuTndiR2wwS0haaGJIVmxLVHRjYmlBZ0lDQWdJQ0FnSUNBZ0lIMWNiaUFnSUNBZ0lDQWdmVnh1SUNBZ0lIMHNYRzVjYmlBZ0lDQmpiMjFpYVc1bE9pQW9kbUZzZFdWektTQTlQaUFvZG1Gc2RXVnpMbEpsWkNBaFBUMGdkVzVrWldacGJtVmtLU0EvSUhKbllpNWpiMjFpYVc1bEtIWmhiSFZsY3lrZ09pQm9jMnd1WTI5dFltbHVaU2gyWVd4MVpYTXBYRzU5TzF4dUlsMTlcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL3ZhbHVlLXR5cGVzL2NvbG9yLmpzXG4gKiogbW9kdWxlIGlkID0gMjNcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF91dGlscyA9IHJlcXVpcmUoJy4uL2luYy91dGlscycpO1xuXG52YXIgRkxPQVRfUkVHRVggPSAvKC0pPyhcXGRbXFxkXFwuXSopL2c7XG52YXIgZ2VuZXJhdGVUb2tlbiA9IGZ1bmN0aW9uICh0b2tlbikge1xuICAgIHJldHVybiAnJHsnICsgdG9rZW4gKyAnfSc7XG59O1xuXG5leHBvcnRzLmRlZmF1bHQgPSB7XG5cbiAgICB0ZXN0OiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgdmFyIG1hdGNoZXMgPSB2YWx1ZS5tYXRjaChGTE9BVF9SRUdFWCk7XG4gICAgICAgIHJldHVybiAoMCwgX3V0aWxzLmlzQXJyYXkpKG1hdGNoZXMpICYmIG1hdGNoZXMubGVuZ3RoID4gMTtcbiAgICB9LFxuXG4gICAgdGVtcGxhdGU6IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICB2YXIgY291bnRlciA9IDA7XG4gICAgICAgIHJldHVybiB2YWx1ZS5yZXBsYWNlKEZMT0FUX1JFR0VYLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gZ2VuZXJhdGVUb2tlbihjb3VudGVyKyspO1xuICAgICAgICB9KTtcbiAgICB9LFxuXG4gICAgc3BsaXQ6IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICB2YXIgc3BsaXRWYWx1ZSA9IHt9O1xuXG4gICAgICAgIHZhbHVlLm1hdGNoKEZMT0FUX1JFR0VYKS5mb3JFYWNoKGZ1bmN0aW9uICh2YWx1ZSwgaSkge1xuICAgICAgICAgICAgcmV0dXJuIHNwbGl0VmFsdWVbaV0gPSB2YWx1ZTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIHNwbGl0VmFsdWU7XG4gICAgfSxcblxuICAgIGNvbWJpbmU6IGZ1bmN0aW9uICh2YWx1ZXMsIHRlbXBsYXRlKSB7XG4gICAgICAgIGZvciAodmFyIGtleSBpbiB2YWx1ZXMpIHtcbiAgICAgICAgICAgIGlmICh2YWx1ZXMuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgICAgICAgIHRlbXBsYXRlID0gdGVtcGxhdGUucmVwbGFjZShnZW5lcmF0ZVRva2VuKGtleSksIHZhbHVlc1trZXldKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0ZW1wbGF0ZTtcbiAgICB9XG5cbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5OeVl5OTJZV3gxWlMxMGVYQmxjeTlqYjIxd2JHVjRMbXB6SWwwc0ltNWhiV1Z6SWpwYlhTd2liV0Z3Y0dsdVozTWlPaUk3T3pzN096dEJRVVZCTEVsQlFVMHNZMEZCWXl4clFrRkJaRHRCUVVOT0xFbEJRVTBzWjBKQlFXZENMRlZCUVVNc1MwRkJSRHRYUVVGWExFOUJRVThzUzBGQlVDeEhRVUZsTEVkQlFXWTdRMEZCV0RzN2EwSkJSVkE3TzBGQlJWZ3NWVUZCVFN4VlFVRkRMRXRCUVVRc1JVRkJWenRCUVVOaUxGbEJRVTBzVlVGQlZTeE5RVUZOTEV0QlFVNHNRMEZCV1N4WFFVRmFMRU5CUVZZc1EwRkVUenRCUVVWaUxHVkJRVkVzYjBKQlFWRXNUMEZCVWl4TFFVRnZRaXhSUVVGUkxFMUJRVklzUjBGQmFVSXNRMEZCYWtJc1EwRkdaanRMUVVGWU96dEJRVXRPTEdOQlFWVXNWVUZCUXl4TFFVRkVMRVZCUVZjN1FVRkRha0lzV1VGQlNTeFZRVUZWTEVOQlFWWXNRMEZFWVR0QlFVVnFRaXhsUVVGUExFMUJRVTBzVDBGQlRpeERRVUZqTEZkQlFXUXNSVUZCTWtJN2JVSkJRVTBzWTBGQll5eFRRVUZrTzFOQlFVNHNRMEZCYkVNc1EwRkdhVUk3UzBGQldEczdRVUZMVml4WFFVRlBMRlZCUVVNc1MwRkJSQ3hGUVVGWE8wRkJRMlFzV1VGQlRTeGhRVUZoTEVWQlFXSXNRMEZFVVRzN1FVRkhaQ3hqUVVGTkxFdEJRVTRzUTBGQldTeFhRVUZhTEVWQlFYbENMRTlCUVhwQ0xFTkJRV2xETEZWQlFVTXNTMEZCUkN4RlFVRlJMRU5CUVZJN2JVSkJRV01zVjBGQlZ5eERRVUZZTEVsQlFXZENMRXRCUVdoQ08xTkJRV1FzUTBGQmFrTXNRMEZJWXpzN1FVRkxaQ3hsUVVGUExGVkJRVkFzUTBGTVl6dExRVUZZT3p0QlFWRlFMR0ZCUVZNc1ZVRkJReXhOUVVGRUxFVkJRVk1zVVVGQlZDeEZRVUZ6UWp0QlFVTXpRaXhoUVVGTExFbEJRVWtzUjBGQlNpeEpRVUZYTEUxQlFXaENMRVZCUVhkQ08wRkJRM0JDTEdkQ1FVRkpMRTlCUVU4c1kwRkJVQ3hEUVVGelFpeEhRVUYwUWl4RFFVRktMRVZCUVdkRE8wRkJRelZDTERKQ1FVRlhMRk5CUVZNc1QwRkJWQ3hEUVVGcFFpeGpRVUZqTEVkQlFXUXNRMEZCYWtJc1JVRkJjVU1zVDBGQlR5eEhRVUZRTEVOQlFYSkRMRU5CUVZnc1EwRkVORUk3WVVGQmFFTTdVMEZFU2pzN1FVRk5RU3hsUVVGUExGRkJRVkFzUTBGUU1rSTdTMEZCZEVJaUxDSm1hV3hsSWpvaVkyOXRjR3hsZUM1cWN5SXNJbk52ZFhKalpWSnZiM1FpT2lJdlZYTmxjbk12VFdGMGRDOVRhWFJsY3k5d2IzQnRiM1JwYjI0aUxDSnpiM1Z5WTJWelEyOXVkR1Z1ZENJNld5SnBiWEJ2Y25RZ2V5QnBjMEZ5Y21GNUlIMGdabkp2YlNBbkxpNHZhVzVqTDNWMGFXeHpKenRjYmx4dVkyOXVjM1FnUmt4UFFWUmZVa1ZIUlZnZ1BTQXZLQzBwUHloY1hHUmJYRnhrWEZ3dVhTb3BMMmM3WEc1amIyNXpkQ0JuWlc1bGNtRjBaVlJ2YTJWdUlEMGdLSFJ2YTJWdUtTQTlQaUFuSkhzbklDc2dkRzlyWlc0Z0t5QW5mU2M3WEc1Y2JtVjRjRzl5ZENCa1pXWmhkV3gwSUh0Y2JseHVJQ0FnSUhSbGMzUTZJQ2gyWVd4MVpTa2dQVDRnZTF4dUlDQWdJQ0FnSUNCamIyNXpkQ0J0WVhSamFHVnpJRDBnZG1Gc2RXVXViV0YwWTJnb1JreFBRVlJmVWtWSFJWZ3BPMXh1SUNBZ0lDQWdJQ0J5WlhSMWNtNGdLR2x6UVhKeVlYa29iV0YwWTJobGN5a2dKaVlnYldGMFkyaGxjeTVzWlc1bmRHZ2dQaUF4S1R0Y2JpQWdJQ0I5TEZ4dVhHNGdJQ0FnZEdWdGNHeGhkR1U2SUNoMllXeDFaU2tnUFQ0Z2UxeHVJQ0FnSUNBZ0lDQnNaWFFnWTI5MWJuUmxjaUE5SURBN1hHNGdJQ0FnSUNBZ0lISmxkSFZ5YmlCMllXeDFaUzV5WlhCc1lXTmxLRVpNVDBGVVgxSkZSMFZZTENBb0tTQTlQaUJuWlc1bGNtRjBaVlJ2YTJWdUtHTnZkVzUwWlhJckt5a3BPMXh1SUNBZ0lIMHNYRzVjYmlBZ0lDQnpjR3hwZERvZ0tIWmhiSFZsS1NBOVBpQjdYRzRnSUNBZ0lDQWdJR052Ym5OMElITndiR2wwVm1Gc2RXVWdQU0I3ZlR0Y2JpQWdJQ0FnSUNBZ1hHNGdJQ0FnSUNBZ0lIWmhiSFZsTG0xaGRHTm9LRVpNVDBGVVgxSkZSMFZZS1M1bWIzSkZZV05vS0NoMllXeDFaU3dnYVNrZ1BUNGdjM0JzYVhSV1lXeDFaVnRwWFNBOUlIWmhiSFZsS1R0Y2JseHVJQ0FnSUNBZ0lDQnlaWFIxY200Z2MzQnNhWFJXWVd4MVpUdGNiaUFnSUNCOUxGeHVYRzRnSUNBZ1kyOXRZbWx1WlRvZ0tIWmhiSFZsY3l3Z2RHVnRjR3hoZEdVcElEMCtJSHRjYmlBZ0lDQWdJQ0FnWm05eUlDaHNaWFFnYTJWNUlHbHVJSFpoYkhWbGN5a2dlMXh1SUNBZ0lDQWdJQ0FnSUNBZ2FXWWdLSFpoYkhWbGN5NW9ZWE5QZDI1UWNtOXdaWEowZVNoclpYa3BLU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnZEdWdGNHeGhkR1VnUFNCMFpXMXdiR0YwWlM1eVpYQnNZV05sS0dkbGJtVnlZWFJsVkc5clpXNG9hMlY1S1N3Z2RtRnNkV1Z6VzJ0bGVWMHBPMXh1SUNBZ0lDQWdJQ0FnSUNBZ2ZWeHVJQ0FnSUNBZ0lDQjlYRzVjYmlBZ0lDQWdJQ0FnY21WMGRYSnVJSFJsYlhCc1lYUmxPMXh1SUNBZ0lIMWNibHh1ZlRzaVhYMD1cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL3ZhbHVlLXR5cGVzL2NvbXBsZXguanNcbiAqKiBtb2R1bGUgaWQgPSAyNFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX3JnYiA9IHJlcXVpcmUoJy4vcmdiJyk7XG5cbnZhciBfcmdiMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JnYik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmV4cG9ydHMuZGVmYXVsdCA9IHtcbiAgICBkZWZhdWx0UHJvcHM6IF9yZ2IyLmRlZmF1bHQuZGVmYXVsdFByb3BzLFxuXG4gICAgdGVzdDogZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgIHJldHVybiB2YWx1ZSAmJiB2YWx1ZS5pbmRleE9mKCcjJykgPiAtMTtcbiAgICB9LFxuXG4gICAgc3BsaXQ6IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICB2YXIgciA9IHVuZGVmaW5lZCxcbiAgICAgICAgICAgIGcgPSB1bmRlZmluZWQsXG4gICAgICAgICAgICBiID0gdW5kZWZpbmVkO1xuXG4gICAgICAgIC8vIElmIHdlIGhhdmUgNiBjaGFyYWN0ZXJzLCBpZSAjRkYwMDAwXG4gICAgICAgIGlmICh2YWx1ZS5sZW5ndGggPiA0KSB7XG4gICAgICAgICAgICByID0gdmFsdWUuc3Vic3RyKDEsIDIpO1xuICAgICAgICAgICAgZyA9IHZhbHVlLnN1YnN0cigzLCAyKTtcbiAgICAgICAgICAgIGIgPSB2YWx1ZS5zdWJzdHIoNSwgMik7XG5cbiAgICAgICAgICAgIC8vIE9yIHdlIGhhdmUgMyBjaGFyYWN0ZXJzLCBpZSAjRjAwXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgciA9IHZhbHVlLnN1YnN0cigxLCAxKTtcbiAgICAgICAgICAgICAgICBnID0gdmFsdWUuc3Vic3RyKDIsIDEpO1xuICAgICAgICAgICAgICAgIGIgPSB2YWx1ZS5zdWJzdHIoMywgMSk7XG4gICAgICAgICAgICAgICAgciArPSByO1xuICAgICAgICAgICAgICAgIGcgKz0gZztcbiAgICAgICAgICAgICAgICBiICs9IGI7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIFJlZDogcGFyc2VJbnQociwgMTYpLFxuICAgICAgICAgICAgR3JlZW46IHBhcnNlSW50KGcsIDE2KSxcbiAgICAgICAgICAgIEJsdWU6IHBhcnNlSW50KGIsIDE2KSxcbiAgICAgICAgICAgIEFscGhhOiAxXG4gICAgICAgIH07XG4gICAgfSxcblxuICAgIGNvbWJpbmU6IGZ1bmN0aW9uICh2YWx1ZXMpIHtcbiAgICAgICAgcmV0dXJuIF9yZ2IyLmRlZmF1bHQuY29tYmluZSh2YWx1ZXMpO1xuICAgIH1cbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5OeVl5OTJZV3gxWlMxMGVYQmxjeTlvWlhndWFuTWlYU3dpYm1GdFpYTWlPbHRkTENKdFlYQndhVzVuY3lJNklqczdPenM3T3pzN096dHJRa0ZGWlR0QlFVTllMR3RDUVVGakxHTkJRVWtzV1VGQlNqczdRVUZGWkN4VlFVRk5MRlZCUVVNc1MwRkJSRHRsUVVGWkxGTkJRVk1zVFVGQlRTeFBRVUZPTEVOQlFXTXNSMEZCWkN4SlFVRnhRaXhEUVVGRExFTkJRVVE3UzBGQk1VTTdPMEZCUlU0c1YwRkJUeXhWUVVGRExFdEJRVVFzUlVGQlZ6dEJRVU5rTEZsQlFVa3NZVUZCU2p0WlFVRlBMR0ZCUVZBN1dVRkJWU3hoUVVGV096czdRVUZFWXl4WlFVbFdMRTFCUVUwc1RVRkJUaXhIUVVGbExFTkJRV1lzUlVGQmEwSTdRVUZEYkVJc1owSkJRVWtzVFVGQlRTeE5RVUZPTEVOQlFXRXNRMEZCWWl4RlFVRm5RaXhEUVVGb1FpeERRVUZLTEVOQlJHdENPMEZCUld4Q0xHZENRVUZKTEUxQlFVMHNUVUZCVGl4RFFVRmhMRU5CUVdJc1JVRkJaMElzUTBGQmFFSXNRMEZCU2l4RFFVWnJRanRCUVVkc1FpeG5Ra0ZCU1N4TlFVRk5MRTFCUVU0c1EwRkJZU3hEUVVGaUxFVkJRV2RDTEVOQlFXaENMRU5CUVVvN096dEJRVWhyUWl4VFFVRjBRaXhOUVUxUE8wRkJRMGdzYjBKQlFVa3NUVUZCVFN4TlFVRk9MRU5CUVdFc1EwRkJZaXhGUVVGblFpeERRVUZvUWl4RFFVRktMRU5CUkVjN1FVRkZTQ3h2UWtGQlNTeE5RVUZOTEUxQlFVNHNRMEZCWVN4RFFVRmlMRVZCUVdkQ0xFTkJRV2hDTEVOQlFVb3NRMEZHUnp0QlFVZElMRzlDUVVGSkxFMUJRVTBzVFVGQlRpeERRVUZoTEVOQlFXSXNSVUZCWjBJc1EwRkJhRUlzUTBGQlNpeERRVWhITzBGQlNVZ3NjVUpCUVVzc1EwRkJUQ3hEUVVwSE8wRkJTMGdzY1VKQlFVc3NRMEZCVEN4RFFVeEhPMEZCVFVnc2NVSkJRVXNzUTBGQlRDeERRVTVITzJGQlRsQTdPMEZCWlVFc1pVRkJUenRCUVVOSUxHbENRVUZMTEZOQlFWTXNRMEZCVkN4RlFVRlpMRVZCUVZvc1EwRkJURHRCUVVOQkxHMUNRVUZQTEZOQlFWTXNRMEZCVkN4RlFVRlpMRVZCUVZvc1EwRkJVRHRCUVVOQkxHdENRVUZOTEZOQlFWTXNRMEZCVkN4RlFVRlpMRVZCUVZvc1EwRkJUanRCUVVOQkxHMUNRVUZQTEVOQlFWQTdVMEZLU2l4RFFXNUNZenRMUVVGWU96dEJRVEpDVUN4aFFVRlRMRlZCUVVNc1RVRkJSRHRsUVVGWkxHTkJRVWtzVDBGQlNpeERRVUZaTEUxQlFWbzdTMEZCV2lJc0ltWnBiR1VpT2lKb1pYZ3Vhbk1pTENKemIzVnlZMlZTYjI5MElqb2lMMVZ6WlhKekwwMWhkSFF2VTJsMFpYTXZjRzl3Ylc5MGFXOXVJaXdpYzI5MWNtTmxjME52Ym5SbGJuUWlPbHNpYVcxd2IzSjBJSEpuWWlCbWNtOXRJQ2N1TDNKbllpYzdYRzVjYm1WNGNHOXlkQ0JrWldaaGRXeDBJSHRjYmlBZ0lDQmtaV1poZFd4MFVISnZjSE02SUhKbllpNWtaV1poZFd4MFVISnZjSE1zWEc1Y2JpQWdJQ0IwWlhOME9pQW9kbUZzZFdVcElEMCtJQ2gyWVd4MVpTQW1KaUIyWVd4MVpTNXBibVJsZUU5bUtDY2pKeWtnUGlBdE1Ta3NYRzVjYmlBZ0lDQnpjR3hwZERvZ0tIWmhiSFZsS1NBOVBpQjdYRzRnSUNBZ0lDQWdJR3hsZENCeUxDQm5MQ0JpTzF4dVhHNGdJQ0FnSUNBZ0lDOHZJRWxtSUhkbElHaGhkbVVnTmlCamFHRnlZV04wWlhKekxDQnBaU0FqUmtZd01EQXdYRzRnSUNBZ0lDQWdJR2xtSUNoMllXeDFaUzVzWlc1bmRHZ2dQaUEwS1NCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0J5SUQwZ2RtRnNkV1V1YzNWaWMzUnlLREVzSURJcE8xeHVJQ0FnSUNBZ0lDQWdJQ0FnWnlBOUlIWmhiSFZsTG5OMVluTjBjaWd6TENBeUtUdGNiaUFnSUNBZ0lDQWdJQ0FnSUdJZ1BTQjJZV3gxWlM1emRXSnpkSElvTlN3Z01pazdYRzVjYmlBZ0lDQWdJQ0FnTHk4Z1QzSWdkMlVnYUdGMlpTQXpJR05vWVhKaFkzUmxjbk1zSUdsbElDTkdNREJjYmlBZ0lDQWdJQ0FnZlNCbGJITmxJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lISWdQU0IyWVd4MVpTNXpkV0p6ZEhJb01Td2dNU2s3WEc0Z0lDQWdJQ0FnSUNBZ0lDQm5JRDBnZG1Gc2RXVXVjM1ZpYzNSeUtESXNJREVwTzF4dUlDQWdJQ0FnSUNBZ0lDQWdZaUE5SUhaaGJIVmxMbk4xWW5OMGNpZ3pMQ0F4S1R0Y2JpQWdJQ0FnSUNBZ0lDQWdJSElnS3owZ2NqdGNiaUFnSUNBZ0lDQWdJQ0FnSUdjZ0t6MGdaenRjYmlBZ0lDQWdJQ0FnSUNBZ0lHSWdLejBnWWp0Y2JpQWdJQ0FnSUNBZ2ZWeHVYRzRnSUNBZ0lDQWdJSEpsZEhWeWJpQjdYRzRnSUNBZ0lDQWdJQ0FnSUNCU1pXUTZJSEJoY25ObFNXNTBLSElzSURFMktTeGNiaUFnSUNBZ0lDQWdJQ0FnSUVkeVpXVnVPaUJ3WVhKelpVbHVkQ2huTENBeE5pa3NYRzRnSUNBZ0lDQWdJQ0FnSUNCQ2JIVmxPaUJ3WVhKelpVbHVkQ2hpTENBeE5pa3NYRzRnSUNBZ0lDQWdJQ0FnSUNCQmJIQm9ZVG9nTVZ4dUlDQWdJQ0FnSUNCOU8xeHVJQ0FnSUgwc1hHNWNiaUFnSUNCamIyMWlhVzVsT2lBb2RtRnNkV1Z6S1NBOVBpQnlaMkl1WTI5dFltbHVaU2gyWVd4MVpYTXBYRzU5T3lKZGZRPT1cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL3ZhbHVlLXR5cGVzL2hleC5qc1xuICoqIG1vZHVsZSBpZCA9IDI1XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfZGVmYXVsdFByb3BzID0gcmVxdWlyZSgnLi9zZXR0aW5ncy9kZWZhdWx0LXByb3BzJyk7XG5cbnZhciBfZGljdGlvbmFyeSA9IHJlcXVpcmUoJy4vc2V0dGluZ3MvZGljdGlvbmFyeScpO1xuXG52YXIgX3V0aWxzID0gcmVxdWlyZSgnLi4vaW5jL3V0aWxzJyk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IHtcbiAgICBkZWZhdWx0UHJvcHM6IHtcbiAgICAgICAgSHVlOiB7XG4gICAgICAgICAgICBtaW46IDAsXG4gICAgICAgICAgICBtYXg6IDM2MFxuICAgICAgICB9LFxuICAgICAgICBTYXR1cmF0aW9uOiBfZGVmYXVsdFByb3BzLnBlcmNlbnQsXG4gICAgICAgIExpZ2h0bmVzczogX2RlZmF1bHRQcm9wcy5wZXJjZW50LFxuICAgICAgICBBbHBoYTogX2RlZmF1bHRQcm9wcy5vcGFjaXR5XG4gICAgfSxcblxuICAgIHRlc3Q6IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICByZXR1cm4gdmFsdWUgJiYgdmFsdWUuaW5kZXhPZignaHNsJykgPiAtMTtcbiAgICB9LFxuXG4gICAgc3BsaXQ6IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICByZXR1cm4gKDAsIF91dGlscy5nZXRDb2xvclZhbHVlcykodmFsdWUsIF9kaWN0aW9uYXJ5LmhzbCk7XG4gICAgfSxcblxuICAgIGNvbWJpbmU6IGZ1bmN0aW9uICh2YWx1ZXMpIHtcbiAgICAgICAgcmV0dXJuICgwLCBfdXRpbHMuY3JlYXRlRnVuY3Rpb25TdHJpbmcpKCgwLCBfdXRpbHMuY3JlYXRlRGVsaW1pdGVkKSh2YWx1ZXMsIF9kaWN0aW9uYXJ5LmhzbCwgJywgJywgMiksICdoc2xhJyk7XG4gICAgfVxufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbk55WXk5MllXeDFaUzEwZVhCbGN5OW9jMnd1YW5NaVhTd2libUZ0WlhNaU9sdGRMQ0p0WVhCd2FXNW5jeUk2SWpzN096czdPenM3T3p0clFrRkpaVHRCUVVOWUxHdENRVUZqTzBGQlExWXNZVUZCU3p0QlFVTkVMR2xDUVVGTExFTkJRVXc3UVVGRFFTeHBRa0ZCU3l4SFFVRk1PMU5CUmtvN1FVRkpRU3g1UTBGTVZUdEJRVTFXTEhkRFFVNVZPMEZCVDFZc2IwTkJVRlU3UzBGQlpEczdRVUZWUVN4VlFVRk5MRlZCUVVNc1MwRkJSRHRsUVVGWkxGTkJRVk1zVFVGQlRTeFBRVUZPTEVOQlFXTXNTMEZCWkN4SlFVRjFRaXhEUVVGRExFTkJRVVE3UzBGQk5VTTdPMEZCUlU0c1YwRkJUeXhWUVVGRExFdEJRVVE3WlVGQlZ5d3lRa0ZCWlN4TFFVRm1PMHRCUVZnN08wRkJSVkFzWVVGQlV5eFZRVUZETEUxQlFVUTdaVUZCV1N4cFEwRkJjVUlzTkVKQlFXZENMRTFCUVdoQ0xHMUNRVUZyUXl4SlFVRnNReXhGUVVGM1F5eERRVUY0UXl4RFFVRnlRaXhGUVVGcFJTeE5RVUZxUlR0TFFVRmFJaXdpWm1sc1pTSTZJbWh6YkM1cWN5SXNJbk52ZFhKalpWSnZiM1FpT2lJdlZYTmxjbk12VFdGMGRDOVRhWFJsY3k5d2IzQnRiM1JwYjI0aUxDSnpiM1Z5WTJWelEyOXVkR1Z1ZENJNld5SnBiWEJ2Y25RZ2V5QndaWEpqWlc1MExDQnZjR0ZqYVhSNUlIMGdabkp2YlNBbkxpOXpaWFIwYVc1bmN5OWtaV1poZFd4MExYQnliM0J6Snp0Y2JtbHRjRzl5ZENCN0lHaHpiQ0JoY3lCb2MyeFVaWEp0Y3lCOUlHWnliMjBnSnk0dmMyVjBkR2x1WjNNdlpHbGpkR2x2Ym1GeWVTYzdYRzVwYlhCdmNuUWdleUJqY21WaGRHVkVaV3hwYldsMFpXUXNJR055WldGMFpVWjFibU4wYVc5dVUzUnlhVzVuTENCblpYUkRiMnh2Y2xaaGJIVmxjeUI5SUdaeWIyMGdKeTR1TDJsdVl5OTFkR2xzY3ljN1hHNWNibVY0Y0c5eWRDQmtaV1poZFd4MElIdGNiaUFnSUNCa1pXWmhkV3gwVUhKdmNITTZJSHRjYmlBZ0lDQWdJQ0FnU0hWbE9pQjdYRzRnSUNBZ0lDQWdJQ0FnSUNCdGFXNDZJREFzWEc0Z0lDQWdJQ0FnSUNBZ0lDQnRZWGc2SURNMk1GeHVJQ0FnSUNBZ0lDQjlMRnh1SUNBZ0lDQWdJQ0JUWVhSMWNtRjBhVzl1T2lCd1pYSmpaVzUwTEZ4dUlDQWdJQ0FnSUNCTWFXZG9kRzVsYzNNNklIQmxjbU5sYm5Rc1hHNGdJQ0FnSUNBZ0lFRnNjR2hoT2lCdmNHRmphWFI1WEc0Z0lDQWdmU3hjYmx4dUlDQWdJSFJsYzNRNklDaDJZV3gxWlNrZ1BUNGdLSFpoYkhWbElDWW1JSFpoYkhWbExtbHVaR1Y0VDJZb0oyaHpiQ2NwSUQ0Z0xURXBMRnh1WEc0Z0lDQWdjM0JzYVhRNklDaDJZV3gxWlNrZ1BUNGdaMlYwUTI5c2IzSldZV3gxWlhNb2RtRnNkV1VzSUdoemJGUmxjbTF6S1N4Y2JseHVJQ0FnSUdOdmJXSnBibVU2SUNoMllXeDFaWE1wSUQwK0lHTnlaV0YwWlVaMWJtTjBhVzl1VTNSeWFXNW5LR055WldGMFpVUmxiR2x0YVhSbFpDaDJZV3gxWlhNc0lHaHpiRlJsY20xekxDQW5MQ0FuTENBeUtTd2dKMmh6YkdFbktWeHVmVHRjYmlKZGZRPT1cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL3ZhbHVlLXR5cGVzL2hzbC5qc1xuICoqIG1vZHVsZSBpZCA9IDI2XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfZGljdGlvbmFyeSA9IHJlcXVpcmUoJy4vc2V0dGluZ3MvZGljdGlvbmFyeScpO1xuXG52YXIgX3V0aWxzID0gcmVxdWlyZSgnLi4vaW5jL3V0aWxzJyk7XG5cbnZhciBfcHggPSByZXF1aXJlKCcuL3B4Jyk7XG5cbnZhciBfcHgyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcHgpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5leHBvcnRzLmRlZmF1bHQgPSB7XG4gICAgZGVmYXVsdFByb3BzOiBfcHgyLmRlZmF1bHQuZGVmYXVsdFByb3BzLFxuXG4gICAgLypcbiAgICAgICAgU3BsaXQgZGltZW5zaW9ucyBpbiBmb3JtYXQgXCJUb3AgUmlnaHQgQm90dG9tIExlZnRcIlxuICAgICAgICBcbiAgICAgICAgQHBhcmFtIFtzdHJpbmddOiBQb3NpdGlvbiB2YWx1ZXNcbiAgICAgICAgICAgIFwiMjBweCAwIDMwcHggNDBweFwiIC0+IHsyMHB4LCAwLCAzMHB4LCA0MHB4fVxuICAgICAgICAgICAgXCIyMHB4IDAgMzBweFwiIC0+IHsyMHB4LCAwLCAzMHB4LCAwfVxuICAgICAgICAgICAgXCIyMHB4IDBcIiAtPiB7MjBweCwgMCwgMjBweCwgMH1cbiAgICAgICAgICAgIFwiMjBweFwiIC0+IHsyMHB4LCAyMHB4LCAyMHB4LCAyMHB4fVxuICAgICAgICBcbiAgICAgICAgQHJldHVybiBbb2JqZWN0XTogT2JqZWN0IHdpdGggVC9SL0IvTCBtZXRyaWNzXG4gICAgKi9cbiAgICBzcGxpdDogZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgIHZhciBzcGxpdFZhbHVlID0ge307XG4gICAgICAgIHZhciBzcGxpdFBvc2l0aW9ucyA9ICgwLCBfdXRpbHMuc3BsaXRTcGFjZURlbGltaXRlZCkodmFsdWUpO1xuICAgICAgICB2YXIgbnVtUG9zaXRpb25zID0gc3BsaXRQb3NpdGlvbnMubGVuZ3RoO1xuICAgICAgICB2YXIganVtcEJhY2sgPSBudW1Qb3NpdGlvbnMgIT09IDEgPyAyIDogMTtcbiAgICAgICAgdmFyIGogPSAwO1xuXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgNDsgaSsrKSB7XG4gICAgICAgICAgICBzcGxpdFZhbHVlW19kaWN0aW9uYXJ5LnBvc2l0aW9uc1tpXV0gPSBzcGxpdFBvc2l0aW9uc1tqXTtcblxuICAgICAgICAgICAgLy8gSnVtcCBiYWNrICh0byBzdGFydCkgY291bnRlciBpZiB3ZSd2ZSByZWFjaGVkIHRoZSBlbmQgb2Ygb3VyIHZhbHVlc1xuICAgICAgICAgICAgaisrO1xuICAgICAgICAgICAgaiA9IGogPT09IG51bVBvc2l0aW9ucyA/IGogLSBqdW1wQmFjayA6IGo7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gc3BsaXRWYWx1ZTtcbiAgICB9LFxuXG4gICAgY29tYmluZTogZnVuY3Rpb24gKHZhbHVlcykge1xuICAgICAgICByZXR1cm4gKDAsIF91dGlscy5jcmVhdGVEZWxpbWl0ZWQpKHZhbHVlcywgX2RpY3Rpb25hcnkucG9zaXRpb25zLCAnICcpO1xuICAgIH1cbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5OeVl5OTJZV3gxWlMxMGVYQmxjeTl3YjNOcGRHbHZibk11YW5NaVhTd2libUZ0WlhNaU9sdGRMQ0p0WVhCd2FXNW5jeUk2SWpzN096czdPenM3T3pzN096czdhMEpCU1dVN1FVRkRXQ3hyUWtGQll5eGhRVUZaTEZsQlFWbzdPenM3T3pzN096czdPenM3UVVGaFpDeFhRVUZQTEZWQlFVTXNTMEZCUkN4RlFVRlhPMEZCUTJRc1dVRkJUU3hoUVVGaExFVkJRV0lzUTBGRVVUdEJRVVZrTEZsQlFVMHNhVUpCUVdsQ0xHZERRVUZ2UWl4TFFVRndRaXhEUVVGcVFpeERRVVpSTzBGQlIyUXNXVUZCVFN4bFFVRmxMR1ZCUVdVc1RVRkJaaXhEUVVoUU8wRkJTV1FzV1VGQlRTeFhRVUZYTEZsQlFVTXNTMEZCYVVJc1EwRkJha0lzUjBGQmMwSXNRMEZCZGtJc1IwRkJNa0lzUTBGQk0wSXNRMEZLU0R0QlFVdGtMRmxCUVVrc1NVRkJTU3hEUVVGS0xFTkJURlU3TzBGQlQyUXNZVUZCU3l4SlFVRkpMRWxCUVVrc1EwRkJTaXhGUVVGUExFbEJRVWtzUTBGQlNpeEZRVUZQTEVkQlFYWkNMRVZCUVRSQ08wRkJRM2hDTEhWQ1FVRlhMSE5DUVVGVkxFTkJRVllzUTBGQldDeEpRVUV5UWl4bFFVRmxMRU5CUVdZc1EwRkJNMEk3T3p0QlFVUjNRaXhoUVVsNFFpeEhRVXAzUWp0QlFVdDRRaXhuUWtGQlNTeERRVUZETEV0QlFVMHNXVUZCVGl4SFFVRnpRaXhKUVVGSkxGRkJRVW9zUjBGQlpTeERRVUYwUXl4RFFVeHZRanRUUVVFMVFqczdRVUZSUVN4bFFVRlBMRlZCUVZBc1EwRm1ZenRMUVVGWU96dEJRV3RDVUN4aFFVRlRMRlZCUVVNc1RVRkJSRHRsUVVGWkxEUkNRVUZuUWl4TlFVRm9RaXg1UWtGQmJVTXNSMEZCYmtNN1MwRkJXaUlzSW1acGJHVWlPaUp3YjNOcGRHbHZibk11YW5NaUxDSnpiM1Z5WTJWU2IyOTBJam9pTDFWelpYSnpMMDFoZEhRdlUybDBaWE12Y0c5d2JXOTBhVzl1SWl3aWMyOTFjbU5sYzBOdmJuUmxiblFpT2xzaWFXMXdiM0owSUhzZ2NHOXphWFJwYjI1eklIMGdabkp2YlNBbkxpOXpaWFIwYVc1bmN5OWthV04wYVc5dVlYSjVKenRjYm1sdGNHOXlkQ0I3SUdOeVpXRjBaVVJsYkdsdGFYUmxaQ3dnYzNCc2FYUlRjR0ZqWlVSbGJHbHRhWFJsWkNCOUlHWnliMjBnSnk0dUwybHVZeTkxZEdsc2N5YzdYRzVwYlhCdmNuUWdjSGhXWVd4MVpWUjVjR1VnWm5KdmJTQW5MaTl3ZUNjN1hHNWNibVY0Y0c5eWRDQmtaV1poZFd4MElIdGNiaUFnSUNCa1pXWmhkV3gwVUhKdmNITTZJSEI0Vm1Gc2RXVlVlWEJsTG1SbFptRjFiSFJRY205d2N5eGNibHh1SUNBZ0lDOHFYRzRnSUNBZ0lDQWdJRk53YkdsMElHUnBiV1Z1YzJsdmJuTWdhVzRnWm05eWJXRjBJRndpVkc5d0lGSnBaMmgwSUVKdmRIUnZiU0JNWldaMFhDSmNiaUFnSUNBZ0lDQWdYRzRnSUNBZ0lDQWdJRUJ3WVhKaGJTQmJjM1J5YVc1blhUb2dVRzl6YVhScGIyNGdkbUZzZFdWelhHNGdJQ0FnSUNBZ0lDQWdJQ0JjSWpJd2NIZ2dNQ0F6TUhCNElEUXdjSGhjSWlBdFBpQjdNakJ3ZUN3Z01Dd2dNekJ3ZUN3Z05EQndlSDFjYmlBZ0lDQWdJQ0FnSUNBZ0lGd2lNakJ3ZUNBd0lETXdjSGhjSWlBdFBpQjdNakJ3ZUN3Z01Dd2dNekJ3ZUN3Z01IMWNiaUFnSUNBZ0lDQWdJQ0FnSUZ3aU1qQndlQ0F3WENJZ0xUNGdlekl3Y0hnc0lEQXNJREl3Y0hnc0lEQjlYRzRnSUNBZ0lDQWdJQ0FnSUNCY0lqSXdjSGhjSWlBdFBpQjdNakJ3ZUN3Z01qQndlQ3dnTWpCd2VDd2dNakJ3ZUgxY2JpQWdJQ0FnSUNBZ1hHNGdJQ0FnSUNBZ0lFQnlaWFIxY200Z1cyOWlhbVZqZEYwNklFOWlhbVZqZENCM2FYUm9JRlF2VWk5Q0wwd2diV1YwY21samMxeHVJQ0FnSUNvdlhHNGdJQ0FnYzNCc2FYUTZJQ2gyWVd4MVpTa2dQVDRnZTF4dUlDQWdJQ0FnSUNCamIyNXpkQ0J6Y0d4cGRGWmhiSFZsSUQwZ2UzMDdYRzRnSUNBZ0lDQWdJR052Ym5OMElITndiR2wwVUc5emFYUnBiMjV6SUQwZ2MzQnNhWFJUY0dGalpVUmxiR2x0YVhSbFpDaDJZV3gxWlNrN1hHNGdJQ0FnSUNBZ0lHTnZibk4wSUc1MWJWQnZjMmwwYVc5dWN5QTlJSE53YkdsMFVHOXphWFJwYjI1ekxteGxibWQwYUR0Y2JpQWdJQ0FnSUNBZ1kyOXVjM1FnYW5WdGNFSmhZMnNnUFNBb2JuVnRVRzl6YVhScGIyNXpJQ0U5UFNBeEtTQS9JRElnT2lBeE8xeHVJQ0FnSUNBZ0lDQnNaWFFnYWlBOUlEQTdYRzVjYmlBZ0lDQWdJQ0FnWm05eUlDaHNaWFFnYVNBOUlEQTdJR2tnUENBME95QnBLeXNwSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJSE53YkdsMFZtRnNkV1ZiY0c5emFYUnBiMjV6VzJsZFhTQTlJSE53YkdsMFVHOXphWFJwYjI1elcycGRPMXh1WEc0Z0lDQWdJQ0FnSUNBZ0lDQXZMeUJLZFcxd0lHSmhZMnNnS0hSdklITjBZWEowS1NCamIzVnVkR1Z5SUdsbUlIZGxKM1psSUhKbFlXTm9aV1FnZEdobElHVnVaQ0J2WmlCdmRYSWdkbUZzZFdWelhHNGdJQ0FnSUNBZ0lDQWdJQ0JxS3lzN1hHNGdJQ0FnSUNBZ0lDQWdJQ0JxSUQwZ0tHb2dQVDA5SUc1MWJWQnZjMmwwYVc5dWN5a2dQeUJxSUMwZ2FuVnRjRUpoWTJzZ09pQnFPMXh1SUNBZ0lDQWdJQ0I5WEc1Y2JpQWdJQ0FnSUNBZ2NtVjBkWEp1SUhOd2JHbDBWbUZzZFdVN1hHNGdJQ0FnZlN4Y2JseHVJQ0FnSUdOdmJXSnBibVU2SUNoMllXeDFaWE1wSUQwK0lHTnlaV0YwWlVSbGJHbHRhWFJsWkNoMllXeDFaWE1zSUhCdmMybDBhVzl1Y3l3Z0p5QW5LVnh1ZlRzaVhYMD1cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL3ZhbHVlLXR5cGVzL3Bvc2l0aW9ucy5qc1xuICoqIG1vZHVsZSBpZCA9IDI3XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfdW5pdCA9IHJlcXVpcmUoJy4vdW5pdCcpO1xuXG52YXIgX3VuaXQyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfdW5pdCk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmV4cG9ydHMuZGVmYXVsdCA9IHtcbiAgICBkZWZhdWx0UHJvcHM6IHtcbiAgICAgICAgdW5pdDogJ3B4JyxcbiAgICAgICAgdHlwZTogX3VuaXQyLmRlZmF1bHRcbiAgICB9XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluTnlZeTkyWVd4MVpTMTBlWEJsY3k5d2VDNXFjeUpkTENKdVlXMWxjeUk2VzEwc0ltMWhjSEJwYm1keklqb2lPenM3T3pzN096czdPMnRDUVVWbE8wRkJRMWdzYTBKQlFXTTdRVUZEVml4alFVRk5MRWxCUVU0N1FVRkRRU3cwUWtGR1ZUdExRVUZrSWl3aVptbHNaU0k2SW5CNExtcHpJaXdpYzI5MWNtTmxVbTl2ZENJNklpOVZjMlZ5Y3k5TllYUjBMMU5wZEdWekwzQnZjRzF2ZEdsdmJpSXNJbk52ZFhKalpYTkRiMjUwWlc1MElqcGJJbWx0Y0c5eWRDQjFibWwwVkhsd1pTQm1jbTl0SUNjdUwzVnVhWFFuTzF4dVhHNWxlSEJ2Y25RZ1pHVm1ZWFZzZENCN1hHNGdJQ0FnWkdWbVlYVnNkRkJ5YjNCek9pQjdYRzRnSUNBZ0lDQWdJSFZ1YVhRNklDZHdlQ2NzWEc0Z0lDQWdJQ0FnSUhSNWNHVTZJSFZ1YVhSVWVYQmxYRzRnSUNBZ2ZWeHVmVHNpWFgwPVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvdmFsdWUtdHlwZXMvcHguanNcbiAqKiBtb2R1bGUgaWQgPSAyOFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX3V0aWxzID0gcmVxdWlyZSgnLi4vaW5jL3V0aWxzJyk7XG5cbnZhciBfZGljdGlvbmFyeSA9IHJlcXVpcmUoJy4vc2V0dGluZ3MvZGljdGlvbmFyeScpO1xuXG52YXIgX2RlZmF1bHRQcm9wcyA9IHJlcXVpcmUoJy4vc2V0dGluZ3MvZGVmYXVsdC1wcm9wcycpO1xuXG5leHBvcnRzLmRlZmF1bHQgPSB7XG4gICAgZGVmYXVsdFByb3BzOiB7XG4gICAgICAgIFJlZDogX2RlZmF1bHRQcm9wcy5yZ2IsXG4gICAgICAgIEdyZWVuOiBfZGVmYXVsdFByb3BzLnJnYixcbiAgICAgICAgQmx1ZTogX2RlZmF1bHRQcm9wcy5yZ2IsXG4gICAgICAgIEFscGhhOiBfZGVmYXVsdFByb3BzLm9wYWNpdHlcbiAgICB9LFxuXG4gICAgdGVzdDogZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgIHJldHVybiB2YWx1ZSAmJiB2YWx1ZS5pbmRleE9mKCdyZ2InKSA+IC0xO1xuICAgIH0sXG5cbiAgICBzcGxpdDogZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgIHJldHVybiAoMCwgX3V0aWxzLmdldENvbG9yVmFsdWVzKSh2YWx1ZSwgX2RpY3Rpb25hcnkucmdiKTtcbiAgICB9LFxuXG4gICAgY29tYmluZTogZnVuY3Rpb24gKHZhbHVlcykge1xuICAgICAgICByZXR1cm4gKDAsIF91dGlscy5jcmVhdGVGdW5jdGlvblN0cmluZykoKDAsIF91dGlscy5jcmVhdGVEZWxpbWl0ZWQpKHZhbHVlcywgX2RpY3Rpb25hcnkucmdiLCAnLCAnLCAyKSwgJ3JnYmEnKTtcbiAgICB9XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluTnlZeTkyWVd4MVpTMTBlWEJsY3k5eVoySXVhbk1pWFN3aWJtRnRaWE1pT2x0ZExDSnRZWEJ3YVc1bmN5STZJanM3T3pzN096czdPenRyUWtGSlpUdEJRVU5ZTEd0Q1FVRmpPMEZCUTFZc09FSkJSRlU3UVVGRlZpeG5RMEZHVlR0QlFVZFdMQ3RDUVVoVk8wRkJTVllzYjBOQlNsVTdTMEZCWkRzN1FVRlBRU3hWUVVGTkxGVkJRVU1zUzBGQlJEdGxRVUZaTEZOQlFWTXNUVUZCVFN4UFFVRk9MRU5CUVdNc1MwRkJaQ3hKUVVGMVFpeERRVUZETEVOQlFVUTdTMEZCTlVNN08wRkJSVTRzVjBGQlR5eFZRVUZETEV0QlFVUTdaVUZCVnl3eVFrRkJaU3hMUVVGbU8wdEJRVmc3TzBGQlJWQXNZVUZCVXl4VlFVRkRMRTFCUVVRN1pVRkJXU3hwUTBGQmNVSXNORUpCUVdkQ0xFMUJRV2hDTEcxQ1FVRnJReXhKUVVGc1F5eEZRVUYzUXl4RFFVRjRReXhEUVVGeVFpeEZRVUZwUlN4TlFVRnFSVHRMUVVGYUlpd2labWxzWlNJNkluSm5ZaTVxY3lJc0luTnZkWEpqWlZKdmIzUWlPaUl2VlhObGNuTXZUV0YwZEM5VGFYUmxjeTl3YjNCdGIzUnBiMjRpTENKemIzVnlZMlZ6UTI5dWRHVnVkQ0k2V3lKcGJYQnZjblFnZXlCamNtVmhkR1ZFWld4cGJXbDBaV1FzSUdOeVpXRjBaVVoxYm1OMGFXOXVVM1J5YVc1bkxDQm5aWFJEYjJ4dmNsWmhiSFZsY3lCOUlHWnliMjBnSnk0dUwybHVZeTkxZEdsc2N5YzdYRzVwYlhCdmNuUWdleUJ5WjJJZ1lYTWdjbWRpVkdWeWJYTWdmU0JtY205dElDY3VMM05sZEhScGJtZHpMMlJwWTNScGIyNWhjbmtuTzF4dWFXMXdiM0owSUhzZ2NtZGlJR0Z6SUdSbFptRjFiSFJTUjBJc0lHOXdZV05wZEhrZ1lYTWdaR1ZtWVhWc2RFOXdZV05wZEhrZ2ZTQm1jbTl0SUNjdUwzTmxkSFJwYm1kekwyUmxabUYxYkhRdGNISnZjSE1uTzF4dVhHNWxlSEJ2Y25RZ1pHVm1ZWFZzZENCN1hHNGdJQ0FnWkdWbVlYVnNkRkJ5YjNCek9pQjdYRzRnSUNBZ0lDQWdJRkpsWkRvZ1pHVm1ZWFZzZEZKSFFpeGNiaUFnSUNBZ0lDQWdSM0psWlc0NklHUmxabUYxYkhSU1IwSXNYRzRnSUNBZ0lDQWdJRUpzZFdVNklHUmxabUYxYkhSU1IwSXNYRzRnSUNBZ0lDQWdJRUZzY0doaE9pQmtaV1poZFd4MFQzQmhZMmwwZVZ4dUlDQWdJSDBzWEc1Y2JpQWdJQ0IwWlhOME9pQW9kbUZzZFdVcElEMCtJQ2gyWVd4MVpTQW1KaUIyWVd4MVpTNXBibVJsZUU5bUtDZHlaMkluS1NBK0lDMHhLU3hjYmx4dUlDQWdJSE53YkdsME9pQW9kbUZzZFdVcElEMCtJR2RsZEVOdmJHOXlWbUZzZFdWektIWmhiSFZsTENCeVoySlVaWEp0Y3lrc1hHNWNiaUFnSUNCamIyMWlhVzVsT2lBb2RtRnNkV1Z6S1NBOVBpQmpjbVZoZEdWR2RXNWpkR2x2YmxOMGNtbHVaeWhqY21WaGRHVkVaV3hwYldsMFpXUW9kbUZzZFdWekxDQnlaMkpVWlhKdGN5d2dKeXdnSnl3Z01pa3NJQ2R5WjJKaEp5bGNibjA3SWwxOVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvdmFsdWUtdHlwZXMvcmdiLmpzXG4gKiogbW9kdWxlIGlkID0gMjlcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0cy5kZWZhdWx0ID0ge1xuICAgIGRlZmF1bHRQcm9wczoge1xuICAgICAgICBjdXJyZW50OiAxXG4gICAgfVxufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbk55WXk5MllXeDFaUzEwZVhCbGN5OXpZMkZzWlM1cWN5SmRMQ0p1WVcxbGN5STZXMTBzSW0xaGNIQnBibWR6SWpvaU96czdhMEpCUVdVN1FVRkRXQ3hyUWtGQll6dEJRVU5XTEdsQ1FVRlRMRU5CUVZRN1MwRkVTaUlzSW1acGJHVWlPaUp6WTJGc1pTNXFjeUlzSW5OdmRYSmpaVkp2YjNRaU9pSXZWWE5sY25NdlRXRjBkQzlUYVhSbGN5OXdiM0J0YjNScGIyNGlMQ0p6YjNWeVkyVnpRMjl1ZEdWdWRDSTZXeUpsZUhCdmNuUWdaR1ZtWVhWc2RDQjdYRzRnSUNBZ1pHVm1ZWFZzZEZCeWIzQnpPaUI3WEc0Z0lDQWdJQ0FnSUdOMWNuSmxiblE2SURGY2JpQWdJQ0I5WEc1OU95SmRmUT09XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy92YWx1ZS10eXBlcy9zY2FsZS5qc1xuICoqIG1vZHVsZSBpZCA9IDMwXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbnZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfY29sb3IgPSByZXF1aXJlKCcuL2NvbG9yJyk7XG5cbnZhciBfY29sb3IyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY29sb3IpO1xuXG52YXIgX3B4ID0gcmVxdWlyZSgnLi9weCcpO1xuXG52YXIgX2RpY3Rpb25hcnkgPSByZXF1aXJlKCcuL3NldHRpbmdzL2RpY3Rpb25hcnknKTtcblxudmFyIF91dGlscyA9IHJlcXVpcmUoJy4uL2luYy91dGlscycpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG52YXIgc2hhZG93V2l0aG91dENvbG9yVGVybXMgPSBfZGljdGlvbmFyeS5zaGFkb3cuc2xpY2UoMCwgNCk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IHtcbiAgICBkZWZhdWx0UHJvcHM6IF9leHRlbmRzKHt9LCBfY29sb3IyLmRlZmF1bHQuZGVmYXVsdFByb3BzLCB7XG4gICAgICAgIFg6IF9weC5kZWZhdWx0UHJvcHMsXG4gICAgICAgIFk6IF9weC5kZWZhdWx0UHJvcHMsXG4gICAgICAgIFJhZGl1czogX3B4LmRlZmF1bHRQcm9wcyxcbiAgICAgICAgU3ByZWFkOiBfcHguZGVmYXVsdFByb3BzXG4gICAgfSksXG5cbiAgICBzcGxpdDogZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgIHZhciBiaXRzID0gKDAsIF91dGlscy5zcGxpdFNwYWNlRGVsaW1pdGVkKSh2YWx1ZSk7XG4gICAgICAgIHZhciBoYXNSZWFjaGVkQ29sb3IgPSBmYWxzZTtcbiAgICAgICAgdmFyIGNvbG9yUHJvcCA9ICcnO1xuICAgICAgICB2YXIgc3BsaXRWYWx1ZSA9IHt9O1xuXG4gICAgICAgIGJpdHMuZm9yRWFjaChmdW5jdGlvbiAoYml0LCBpKSB7XG4gICAgICAgICAgICAvLyBJZiB3ZSd2ZSByZWFjaGVkIHRoZSBjb2xvciBwcm9wcywgYXBwZW5kIHRvIGNvbG9yIHN0cmluZ1xuICAgICAgICAgICAgaWYgKGhhc1JlYWNoZWRDb2xvciB8fCBfY29sb3IyLmRlZmF1bHQudGVzdChiaXQpKSB7XG4gICAgICAgICAgICAgICAgaGFzUmVhY2hlZENvbG9yID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBjb2xvclByb3AgKz0gYml0O1xuXG4gICAgICAgICAgICAgICAgLy8gRWxzZSBwcm9jZXNzIHNoYWRvdyB2YWx1ZVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgc3BsaXRWYWx1ZVtfZGljdGlvbmFyeS5zaGFkb3dbaV1dID0gYml0O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgdmFyIHNwbGl0Q29sb3JQcm9wcyA9IF9jb2xvcjIuZGVmYXVsdC5zcGxpdChjb2xvclByb3ApO1xuXG4gICAgICAgIHJldHVybiBfZXh0ZW5kcyh7fSwgc3BsaXRWYWx1ZSwgeyBzcGxpdENvbG9yUHJvcHM6IHNwbGl0Q29sb3JQcm9wcyB9KTtcbiAgICB9LFxuXG4gICAgY29tYmluZTogZnVuY3Rpb24gKHZhbHVlcykge1xuICAgICAgICByZXR1cm4gKDAsIF91dGlscy5jcmVhdGVEZWxpbWl0ZWQpKHZhbHVlcywgc2hhZG93V2l0aG91dENvbG9yVGVybXMsICcgJykgKyBfY29sb3IyLmRlZmF1bHQuY29tYmluZSh2YWx1ZXMpO1xuICAgIH1cbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5OeVl5OTJZV3gxWlMxMGVYQmxjeTl6YUdGa2IzY3Vhbk1pWFN3aWJtRnRaWE1pT2x0ZExDSnRZWEJ3YVc1bmN5STZJanM3T3pzN096czdPenM3T3pzN096czdPMEZCUzBFc1NVRkJUU3d3UWtGQk1FSXNiVUpCUVZrc1MwRkJXaXhEUVVGclFpeERRVUZzUWl4RlFVRnhRaXhEUVVGeVFpeERRVUV4UWpzN2EwSkJSVk03UVVGRFdDd3JRa0ZEVHl4blFrRkJUU3haUVVGT08wRkJRMGc3UVVGRFFUdEJRVU5CTzBGQlEwRTdUVUZNU2pzN1FVRlJRU3hYUVVGUExGVkJRVU1zUzBGQlJDeEZRVUZYTzBGQlEyUXNXVUZCVFN4UFFVRlBMR2REUVVGdlFpeExRVUZ3UWl4RFFVRlFMRU5CUkZFN1FVRkZaQ3haUVVGSkxHdENRVUZyUWl4TFFVRnNRaXhEUVVaVk8wRkJSMlFzV1VGQlNTeFpRVUZaTEVWQlFWb3NRMEZJVlR0QlFVbGtMRmxCUVVrc1lVRkJZU3hGUVVGaUxFTkJTbFU3TzBGQlRXUXNZVUZCU3l4UFFVRk1MRU5CUVdFc1ZVRkJReXhIUVVGRUxFVkJRVTBzUTBGQlRpeEZRVUZaT3p0QlFVVnlRaXhuUWtGQlNTeHRRa0ZCYlVJc1owSkJRVTBzU1VGQlRpeERRVUZYTEVkQlFWZ3NRMEZCYmtJc1JVRkJiME03UVVGRGNFTXNhME5CUVd0Q0xFbEJRV3hDTEVOQlJHOURPMEZCUlhCRExEWkNRVUZoTEVkQlFXSTdPenRCUVVadlF5eGhRVUY0UXl4TlFVdFBPMEZCUTBnc0swSkJRVmNzYlVKQlFWa3NRMEZCV2l4RFFVRllMRWxCUVRaQ0xFZEJRVGRDTEVOQlJFYzdhVUpCVEZBN1UwRkdVeXhEUVVGaUxFTkJUbU03TzBGQmEwSmtMRmxCUVUwc2EwSkJRV3RDTEdkQ1FVRk5MRXRCUVU0c1EwRkJXU3hUUVVGYUxFTkJRV3hDTEVOQmJFSlJPenRCUVc5Q1pDdzBRa0ZCV1N4alFVRlpMRzFEUVVGNFFpeERRWEJDWXp0TFFVRllPenRCUVhWQ1VDeGhRVUZUTEZWQlFVTXNUVUZCUkR0bFFVRlpMRFJDUVVGblFpeE5RVUZvUWl4RlFVRjNRaXgxUWtGQmVFSXNSVUZCYVVRc1IwRkJha1FzU1VGQmQwUXNaMEpCUVUwc1QwRkJUaXhEUVVGakxFMUJRV1FzUTBGQmVFUTdTMEZCV2lJc0ltWnBiR1VpT2lKemFHRmtiM2N1YW5NaUxDSnpiM1Z5WTJWU2IyOTBJam9pTDFWelpYSnpMMDFoZEhRdlUybDBaWE12Y0c5d2JXOTBhVzl1SWl3aWMyOTFjbU5sYzBOdmJuUmxiblFpT2xzaWFXMXdiM0owSUdOdmJHOXlJR1p5YjIwZ0p5NHZZMjlzYjNJbk8xeHVhVzF3YjNKMElIc2daR1ZtWVhWc2RGQnliM0J6SUdGeklIQjRSR1ZtWVhWc2RGQnliM0J6SUgwZ1puSnZiU0FuTGk5d2VDYzdYRzVwYlhCdmNuUWdleUJ6YUdGa2IzY2dZWE1nYzJoaFpHOTNWR1Z5YlhNZ2ZTQm1jbTl0SUNjdUwzTmxkSFJwYm1kekwyUnBZM1JwYjI1aGNua25PMXh1YVcxd2IzSjBJSHNnYzNCc2FYUlRjR0ZqWlVSbGJHbHRhWFJsWkN3Z1kzSmxZWFJsUkdWc2FXMXBkR1ZrSUgwZ1puSnZiU0FuTGk0dmFXNWpMM1YwYVd4ekp6dGNibHh1WTI5dWMzUWdjMmhoWkc5M1YybDBhRzkxZEVOdmJHOXlWR1Z5YlhNZ1BTQnphR0ZrYjNkVVpYSnRjeTV6YkdsalpTZ3dMQ0EwS1R0Y2JseHVaWGh3YjNKMElHUmxabUYxYkhRZ2UxeHVJQ0FnSUdSbFptRjFiSFJRY205d2N6b2dlMXh1SUNBZ0lDQWdJQ0F1TGk1amIyeHZjaTVrWldaaGRXeDBVSEp2Y0hNc1hHNGdJQ0FnSUNBZ0lGZzZJSEI0UkdWbVlYVnNkRkJ5YjNCekxGeHVJQ0FnSUNBZ0lDQlpPaUJ3ZUVSbFptRjFiSFJRY205d2N5eGNiaUFnSUNBZ0lDQWdVbUZrYVhWek9pQndlRVJsWm1GMWJIUlFjbTl3Y3l4Y2JpQWdJQ0FnSUNBZ1UzQnlaV0ZrT2lCd2VFUmxabUYxYkhSUWNtOXdjMXh1SUNBZ0lIMHNYRzVjYmlBZ0lDQnpjR3hwZERvZ0tIWmhiSFZsS1NBOVBpQjdYRzRnSUNBZ0lDQWdJR052Ym5OMElHSnBkSE1nUFNCemNHeHBkRk53WVdObFJHVnNhVzFwZEdWa0tIWmhiSFZsS1R0Y2JpQWdJQ0FnSUNBZ2JHVjBJR2hoYzFKbFlXTm9aV1JEYjJ4dmNpQTlJR1poYkhObE8xeHVJQ0FnSUNBZ0lDQnNaWFFnWTI5c2IzSlFjbTl3SUQwZ0p5YzdYRzRnSUNBZ0lDQWdJR3hsZENCemNHeHBkRlpoYkhWbElEMGdlMzA3WEc1Y2JpQWdJQ0FnSUNBZ1ltbDBjeTVtYjNKRllXTm9LQ2hpYVhRc0lHa3BJRDArSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJQzh2SUVsbUlIZGxKM1psSUhKbFlXTm9aV1FnZEdobElHTnZiRzl5SUhCeWIzQnpMQ0JoY0hCbGJtUWdkRzhnWTI5c2IzSWdjM1J5YVc1blhHNGdJQ0FnSUNBZ0lDQWdJQ0JwWmlBb2FHRnpVbVZoWTJobFpFTnZiRzl5SUh4OElHTnZiRzl5TG5SbGMzUW9ZbWwwS1NrZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lHaGhjMUpsWVdOb1pXUkRiMnh2Y2lBOUlIUnlkV1U3WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnWTI5c2IzSlFjbTl3SUNzOUlHSnBkRHRjYmx4dUlDQWdJQ0FnSUNBZ0lDQWdMeThnUld4elpTQndjbTlqWlhOeklITm9ZV1J2ZHlCMllXeDFaVnh1SUNBZ0lDQWdJQ0FnSUNBZ2ZTQmxiSE5sSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCemNHeHBkRlpoYkhWbFczTm9ZV1J2ZDFSbGNtMXpXMmxkWFNBOUlHSnBkRHRjYmlBZ0lDQWdJQ0FnSUNBZ0lIMWNiaUFnSUNBZ0lDQWdmU2s3WEc1Y2JpQWdJQ0FnSUNBZ1kyOXVjM1FnYzNCc2FYUkRiMnh2Y2xCeWIzQnpJRDBnWTI5c2IzSXVjM0JzYVhRb1kyOXNiM0pRY205d0tUdGNibHh1SUNBZ0lDQWdJQ0J5WlhSMWNtNGdleUF1TGk1emNHeHBkRlpoYkhWbExDQnpjR3hwZEVOdmJHOXlVSEp2Y0hNZ2ZUdGNiaUFnSUNCOUxGeHVYRzRnSUNBZ1kyOXRZbWx1WlRvZ0tIWmhiSFZsY3lrZ1BUNGdZM0psWVhSbFJHVnNhVzFwZEdWa0tIWmhiSFZsY3l3Z2MyaGhaRzkzVjJsMGFHOTFkRU52Ykc5eVZHVnliWE1zSUNjZ0p5a2dLeUJqYjJ4dmNpNWpiMjFpYVc1bEtIWmhiSFZsY3lsY2JuMDdYRzRpWFgwPVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvdmFsdWUtdHlwZXMvc2hhZG93LmpzXG4gKiogbW9kdWxlIGlkID0gMzFcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF91dGlscyA9IHJlcXVpcmUoJy4uL2luYy91dGlscycpO1xuXG4vKlxuICAgIFNwbGl0IGEgdmFsdWUgaW50byBhIHZhbHVlL3VuaXQgb2JqZWN0XG4gICAgXG4gICAgICAgIFwiMjAwcHhcIiAtPiB7IHZhbHVlOiAyMDAsIHVuaXQ6IFwicHhcIiB9XG4gICAgICAgIFxuICAgIEBwYXJhbSBbc3RyaW5nXTogVmFsdWUgdG8gc3BsaXRcbiAgICBAcmV0dXJuIFtvYmplY3RdOiBPYmplY3Qgd2l0aCB2YWx1ZSBhbmQgdW5pdCBwcm9wc1xuKi9cbnZhciBmaW5kVmFsdWVBbmRVbml0ID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgaWYgKHZhbHVlLm1hdGNoKSB7XG4gICAgICAgIHZhciBzcGxpdFZhbHVlID0gdmFsdWUubWF0Y2goLygtP1xcZCpcXC4/XFxkKikoLiopLyk7XG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHZhbHVlOiBwYXJzZUZsb2F0KHNwbGl0VmFsdWVbMV0pLFxuICAgICAgICAgICAgdW5pdDogc3BsaXRWYWx1ZVsyXVxuICAgICAgICB9O1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiB7IHZhbHVlOiB2YWx1ZSB9O1xuICAgIH1cbn07XG5cbmV4cG9ydHMuZGVmYXVsdCA9IHtcbiAgICB0ZXN0OiBmdW5jdGlvbiAodW5wYXJzZWQpIHtcbiAgICAgICAgdmFyIF9maW5kVmFsdWVBbmRVbml0ID0gZmluZFZhbHVlQW5kVW5pdCh1bnBhcnNlZCk7XG5cbiAgICAgICAgdmFyIHZhbHVlID0gX2ZpbmRWYWx1ZUFuZFVuaXQudmFsdWU7XG5cbiAgICAgICAgcmV0dXJuICgwLCBfdXRpbHMuaXNOdW0pKHZhbHVlKSAmJiAhaXNOYU4odmFsdWUpID8gdHJ1ZSA6IGZhbHNlO1xuICAgIH0sXG5cbiAgICBwYXJzZTogZnVuY3Rpb24gKHVucGFyc2VkLCBwYXJlbnQpIHtcbiAgICAgICAgdmFyIF9maW5kVmFsdWVBbmRVbml0MiA9IGZpbmRWYWx1ZUFuZFVuaXQodW5wYXJzZWQpO1xuXG4gICAgICAgIHZhciB2YWx1ZSA9IF9maW5kVmFsdWVBbmRVbml0Mi52YWx1ZTtcbiAgICAgICAgdmFyIHVuaXQgPSBfZmluZFZhbHVlQW5kVW5pdDIudW5pdDtcblxuICAgICAgICBpZiAodW5pdCAmJiB1bml0ICE9PSB1bml0KSB7XG4gICAgICAgICAgICBwYXJlbnQudW5pdCA9IHVuaXQ7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgfSxcblxuICAgIHNlcmlhbGl6ZTogZnVuY3Rpb24gKHBhcnNlZCwgcGFyZW50KSB7XG4gICAgICAgIHJldHVybiBwYXJzZWQgKyAocGFyZW50LnVuaXQgfHwgJycpO1xuICAgIH1cbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5OeVl5OTJZV3gxWlMxMGVYQmxjeTkxYm1sMExtcHpJbDBzSW01aGJXVnpJanBiWFN3aWJXRndjR2x1WjNNaU9pSTdPenM3T3pzN096czdPenM3TzBGQlUwRXNTVUZCVFN4dFFrRkJiVUlzVlVGQlF5eExRVUZFTEVWQlFWYzdRVUZEYUVNc1VVRkJTU3hOUVVGTkxFdEJRVTRzUlVGQllUdEJRVU5pTEZsQlFVMHNZVUZCWVN4TlFVRk5MRXRCUVU0c1EwRkJXU3h0UWtGQldpeERRVUZpTEVOQlJFODdPMEZCUjJJc1pVRkJUenRCUVVOSUxHMUNRVUZQTEZkQlFWY3NWMEZCVnl4RFFVRllMRU5CUVZnc1EwRkJVRHRCUVVOQkxHdENRVUZQTEZkQlFWY3NRMEZCV0N4RFFVRlFPMU5CUmtvc1EwRklZVHRMUVVGcVFpeE5RVTlQTzBGQlEwZ3NaVUZCVHl4RlFVRkZMRmxCUVVZc1JVRkJVQ3hEUVVSSE8wdEJVRkE3UTBGRWNVSTdPMnRDUVdGV08wRkJRMWdzVlVGQlRTeFZRVUZWTEZGQlFWWXNSVUZCYjBJN1owTkJRMG9zYVVKQlFXbENMRkZCUVdwQ0xFVkJSRWs3TzFsQlEyUXNaME5CUkdNN08wRkJSWFJDTEdWQlFVOHNhVUpCUVVNc1EwRkJUU3hMUVVGT0xFdEJRV2RDTEVOQlFVTXNUVUZCVFN4TFFVRk9MRU5CUVVRc1IwRkJhVUlzU1VGQmJFTXNSMEZCZVVNc1MwRkJla01zUTBGR1pUdExRVUZ3UWpzN1FVRkxUaXhYUVVGUExGVkJRVlVzVVVGQlZpeEZRVUZ2UWl4TlFVRndRaXhGUVVFMFFqdHBRMEZEVUN4cFFrRkJhVUlzVVVGQmFrSXNSVUZFVHpzN1dVRkRka0lzYVVOQlJIVkNPMWxCUTJoQ0xDdENRVVJuUWpzN1FVRkhMMElzV1VGQlNTeFJRVUZSTEZOQlFWTXNTVUZCVkN4RlFVRmxPMEZCUTNaQ0xHMUNRVUZQTEVsQlFWQXNSMEZCWXl4SlFVRmtMRU5CUkhWQ08xTkJRVE5DT3p0QlFVbEJMR1ZCUVU4c1MwRkJVQ3hEUVZBclFqdExRVUUxUWpzN1FVRlZVQ3hsUVVGWExGVkJRVU1zVFVGQlJDeEZRVUZUTEUxQlFWUTdaVUZCYjBJc1ZVRkJWU3hQUVVGUExFbEJRVkFzU1VGQlpTeEZRVUZtTEVOQlFWWTdTMEZCY0VJaUxDSm1hV3hsSWpvaWRXNXBkQzVxY3lJc0luTnZkWEpqWlZKdmIzUWlPaUl2VlhObGNuTXZUV0YwZEM5VGFYUmxjeTl3YjNCdGIzUnBiMjRpTENKemIzVnlZMlZ6UTI5dWRHVnVkQ0k2V3lKcGJYQnZjblFnZXlCcGMwNTFiU0I5SUdaeWIyMGdKeTR1TDJsdVl5OTFkR2xzY3ljN1hHNHZLbHh1SUNBZ0lGTndiR2wwSUdFZ2RtRnNkV1VnYVc1MGJ5QmhJSFpoYkhWbEwzVnVhWFFnYjJKcVpXTjBYRzRnSUNBZ1hHNGdJQ0FnSUNBZ0lGd2lNakF3Y0hoY0lpQXRQaUI3SUhaaGJIVmxPaUF5TURBc0lIVnVhWFE2SUZ3aWNIaGNJaUI5WEc0Z0lDQWdJQ0FnSUZ4dUlDQWdJRUJ3WVhKaGJTQmJjM1J5YVc1blhUb2dWbUZzZFdVZ2RHOGdjM0JzYVhSY2JpQWdJQ0JBY21WMGRYSnVJRnR2WW1wbFkzUmRPaUJQWW1wbFkzUWdkMmwwYUNCMllXeDFaU0JoYm1RZ2RXNXBkQ0J3Y205d2MxeHVLaTljYm1OdmJuTjBJR1pwYm1SV1lXeDFaVUZ1WkZWdWFYUWdQU0FvZG1Gc2RXVXBJRDArSUh0Y2JpQWdJQ0JwWmlBb2RtRnNkV1V1YldGMFkyZ3BJSHRjYmlBZ0lDQWdJQ0FnWTI5dWMzUWdjM0JzYVhSV1lXeDFaU0E5SUhaaGJIVmxMbTFoZEdOb0tDOG9MVDljWEdRcVhGd3VQMXhjWkNvcEtDNHFLUzhwTzF4dVhHNGdJQ0FnSUNBZ0lISmxkSFZ5YmlCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0IyWVd4MVpUb2djR0Z5YzJWR2JHOWhkQ2h6Y0d4cGRGWmhiSFZsV3pGZEtTeGNiaUFnSUNBZ0lDQWdJQ0FnSUhWdWFYUTZJQ0J6Y0d4cGRGWmhiSFZsV3pKZFhHNGdJQ0FnSUNBZ0lIMDdYRzRnSUNBZ2ZTQmxiSE5sSUh0Y2JpQWdJQ0FnSUNBZ2NtVjBkWEp1SUhzZ2RtRnNkV1VnZlR0Y2JpQWdJQ0I5WEc1OU8xeHVYRzVsZUhCdmNuUWdaR1ZtWVhWc2RDQjdYRzRnSUNBZ2RHVnpkRG9nWm5WdVkzUnBiMjRnS0hWdWNHRnljMlZrS1NCN1hHNGdJQ0FnSUNBZ0lHTnZibk4wSUhzZ2RtRnNkV1VnZlNBOUlHWnBibVJXWVd4MVpVRnVaRlZ1YVhRb2RXNXdZWEp6WldRcE8xeHVJQ0FnSUNBZ0lDQnlaWFIxY200Z0tHbHpUblZ0S0haaGJIVmxLU0FtSmlBaGFYTk9ZVTRvZG1Gc2RXVXBLU0EvSUhSeWRXVWdPaUJtWVd4elpUdGNiaUFnSUNCOUxGeHVYRzRnSUNBZ2NHRnljMlU2SUdaMWJtTjBhVzl1SUNoMWJuQmhjbk5sWkN3Z2NHRnlaVzUwS1NCN1hHNGdJQ0FnSUNBZ0lHTnZibk4wSUhzZ2RtRnNkV1VzSUhWdWFYUWdmU0E5SUdacGJtUldZV3gxWlVGdVpGVnVhWFFvZFc1d1lYSnpaV1FwTzF4dVhHNGdJQ0FnSUNBZ0lHbG1JQ2gxYm1sMElDWW1JSFZ1YVhRZ0lUMDlJSFZ1YVhRcElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUhCaGNtVnVkQzUxYm1sMElEMGdkVzVwZER0Y2JpQWdJQ0FnSUNBZ2ZWeHVYRzRnSUNBZ0lDQWdJSEpsZEhWeWJpQjJZV3gxWlR0Y2JpQWdJQ0I5TEZ4dVhHNGdJQ0FnYzJWeWFXRnNhWHBsT2lBb2NHRnljMlZrTENCd1lYSmxiblFwSUQwK0lIQmhjbk5sWkNBcklDaHdZWEpsYm5RdWRXNXBkQ0I4ZkNBbkp5bGNibjA3WEc0aVhYMD1cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL3ZhbHVlLXR5cGVzL3VuaXQuanNcbiAqKiBtb2R1bGUgaWQgPSAzMlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0cy5jaXJjdWxhck1vdGlvbiA9IGV4cG9ydHMuY3JlYXRlTWFwcGVyID0gdW5kZWZpbmVkO1xuXG52YXIgX2NhbGMgPSByZXF1aXJlKCcuLi9pbmMvY2FsYycpO1xuXG52YXIgY3JlYXRlTWFwcGVyID0gZXhwb3J0cy5jcmVhdGVNYXBwZXIgPSBmdW5jdGlvbiAoZnJvbSwgdG8pIHtcbiAgICB2YXIgbWFwTGVuZ3RoID0gZnJvbS5sZW5ndGg7XG5cbiAgICByZXR1cm4gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAxOyBpIDwgbWFwTGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmICh2YWx1ZSA8IGZyb21baV0gfHwgaSA9PT0gbWFwTGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuICgwLCBfY2FsYy5nZXRWYWx1ZUZyb21Qcm9ncmVzcykoKDAsIF9jYWxjLnJlc3RyaWN0KSgoMCwgX2NhbGMuZ2V0UHJvZ3Jlc3NGcm9tVmFsdWUpKHZhbHVlLCBmcm9tW2kgLSAxXSwgZnJvbVtpXSksIDAsIDEpLCB0b1tpIC0gMV0sIHRvW2ldKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG59O1xuXG52YXIgY2lyY3VsYXJNb3Rpb24gPSBleHBvcnRzLmNpcmN1bGFyTW90aW9uID0gZnVuY3Rpb24gKHYsIGtleSwgX3JlZikge1xuICAgIHZhciB2YWx1ZXMgPSBfcmVmLnZhbHVlcztcbiAgICByZXR1cm4gKDAsIF9jYWxjLnBvaW50RnJvbUFuZ2xlQW5kRGlzdGFuY2UpKHtcbiAgICAgICAgeDogdmFsdWVzLm9yaWdpblguY3VycmVudCxcbiAgICAgICAgeTogdmFsdWVzLm9yaWdpblkuY3VycmVudFxuICAgIH0sIHZhbHVlcy5hbmdsZS5jdXJyZW50LCB2YWx1ZXMuZGlzdGFuY2UuY3VycmVudClba2V5XTtcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5OeVl5OXBibU12ZEhKaGJuTm1iM0p0WlhKekxtcHpJbDBzSW01aGJXVnpJanBiWFN3aWJXRndjR2x1WjNNaU9pSTdPenM3T3pzN1FVRkZUeXhKUVVGTkxITkRRVUZsTEZWQlFVTXNTVUZCUkN4RlFVRlBMRVZCUVZBc1JVRkJZenRCUVVOMFF5eFJRVUZOTEZsQlFWa3NTMEZCU3l4TlFVRk1MRU5CUkc5Q096dEJRVWQwUXl4WFFVRlBMRlZCUVVNc1MwRkJSQ3hGUVVGWE8wRkJRMlFzWVVGQlN5eEpRVUZKTEVsQlFVa3NRMEZCU2l4RlFVRlBMRWxCUVVrc1UwRkJTaXhGUVVGbExFZEJRUzlDTEVWQlFXOURPMEZCUTJoRExHZENRVUZKTEZGQlFWRXNTMEZCU3l4RFFVRk1MRU5CUVZJc1NVRkJiVUlzVFVGQlRTeFRRVUZPTEVWQlFXbENPMEZCUTNCRExIVkNRVUZQTEdkRFFVRnhRaXh2UWtGQlV5eG5RMEZCY1VJc1MwRkJja0lzUlVGQk5FSXNTMEZCU3l4SlFVRkpMRU5CUVVvc1EwRkJha01zUlVGQmVVTXNTMEZCU3l4RFFVRk1MRU5CUVhwRExFTkJRVlFzUlVGQk5FUXNRMEZCTlVRc1JVRkJLMFFzUTBGQkwwUXNRMEZCY2tJc1JVRkJkMFlzUjBGQlJ5eEpRVUZKTEVOQlFVb3NRMEZCTTBZc1JVRkJiVWNzUjBGQlJ5eERRVUZJTEVOQlFXNUhMRU5CUVZBc1EwRkViME03WVVGQmVFTTdVMEZFU2p0TFFVUkhMRU5CU0N0Q08wTkJRV1E3TzBGQldYSkNMRWxCUVUwc01FTkJRV2xDTEZWQlFVTXNRMEZCUkN4RlFVRkpMRWRCUVVvN1VVRkJWenRYUVVOeVF5eHhRMEZCTUVJN1FVRkRkRUlzVjBGQlJ5eFBRVUZQTEU5QlFWQXNRMEZCWlN4UFFVRm1PMEZCUTBnc1YwRkJSeXhQUVVGUExFOUJRVkFzUTBGQlpTeFBRVUZtTzB0QlJsQXNSVUZIUnl4UFFVRlBMRXRCUVZBc1EwRkJZU3hQUVVGaUxFVkJRWE5DTEU5QlFVOHNVVUZCVUN4RFFVRm5RaXhQUVVGb1FpeERRVWg2UWl4RFFVZHJSQ3hIUVVoc1JEdERRVVF3UWlJc0ltWnBiR1VpT2lKMGNtRnVjMlp2Y20xbGNuTXVhbk1pTENKemIzVnlZMlZTYjI5MElqb2lMMVZ6WlhKekwwMWhkSFF2VTJsMFpYTXZjRzl3Ylc5MGFXOXVJaXdpYzI5MWNtTmxjME52Ym5SbGJuUWlPbHNpYVcxd2IzSjBJSHNnWjJWMFVISnZaM0psYzNOR2NtOXRWbUZzZFdVc0lHZGxkRlpoYkhWbFJuSnZiVkJ5YjJkeVpYTnpMQ0J5WlhOMGNtbGpkQ3dnY0c5cGJuUkdjbTl0UVc1bmJHVkJibVJFYVhOMFlXNWpaU0I5SUdaeWIyMGdKeTR1TDJsdVl5OWpZV3hqSnp0Y2JseHVaWGh3YjNKMElHTnZibk4wSUdOeVpXRjBaVTFoY0hCbGNpQTlJQ2htY205dExDQjBieWtnUFQ0Z2UxeHVJQ0FnSUdOdmJuTjBJRzFoY0V4bGJtZDBhQ0E5SUdaeWIyMHViR1Z1WjNSb08xeHVYRzRnSUNBZ2NtVjBkWEp1SUNoMllXeDFaU2tnUFQ0Z2UxeHVJQ0FnSUNBZ0lDQm1iM0lnS0d4bGRDQnBJRDBnTVRzZ2FTQThJRzFoY0V4bGJtZDBhRHNnYVNzcktTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNCcFppQW9kbUZzZFdVZ1BDQm1jbTl0VzJsZElIeDhJR2tnUFQwOUlHMWhjRXhsYm1kMGFDa2dlMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJSEpsZEhWeWJpQm5aWFJXWVd4MVpVWnliMjFRY205bmNtVnpjeWh5WlhOMGNtbGpkQ2huWlhSUWNtOW5jbVZ6YzBaeWIyMVdZV3gxWlNoMllXeDFaU3dnWm5KdmJWdHBJQzBnTVYwc0lHWnliMjFiYVYwcExDQXdMQ0F4S1N3Z2RHOWJhU0F0SURGZExDQjBiMXRwWFNrN1hHNGdJQ0FnSUNBZ0lDQWdJQ0I5WEc0Z0lDQWdJQ0FnSUgxY2JpQWdJQ0I5TzF4dWZUdGNibHh1Wlhod2IzSjBJR052Ym5OMElHTnBjbU4xYkdGeVRXOTBhVzl1SUQwZ0tIWXNJR3RsZVN3Z2V5QjJZV3gxWlhNZ2ZTa2dQVDRnWEc0Z0lDQWdjRzlwYm5SR2NtOXRRVzVuYkdWQmJtUkVhWE4wWVc1alpTaDdYRzRnSUNBZ0lDQWdJSGc2SUhaaGJIVmxjeTV2Y21sbmFXNVlMbU4xY25KbGJuUXNYRzRnSUNBZ0lDQWdJSGs2SUhaaGJIVmxjeTV2Y21sbmFXNVpMbU4xY25KbGJuUWdYRzRnSUNBZ2ZTd2dkbUZzZFdWekxtRnVaMnhsTG1OMWNuSmxiblFzSUhaaGJIVmxjeTVrYVhOMFlXNWpaUzVqZFhKeVpXNTBLVnRyWlhsZE8xeHVYRzRpWFgwPVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvaW5jL3RyYW5zZm9ybWVycy5qc1xuICoqIG1vZHVsZSBpZCA9IDMzXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfYWRhcHRlciA9IHJlcXVpcmUoJy4uL2FkYXB0ZXIvYWRhcHRlcicpO1xuXG52YXIgX2FkYXB0ZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfYWRhcHRlcik7XG5cbnZhciBfY3NzQWRhcHRlciA9IHJlcXVpcmUoJy4uL2FkYXB0ZXIvY3NzLWFkYXB0ZXInKTtcblxudmFyIF9jc3NBZGFwdGVyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2Nzc0FkYXB0ZXIpO1xuXG52YXIgX3N2Z0FkYXB0ZXIgPSByZXF1aXJlKCcuLi9hZGFwdGVyL3N2Zy1hZGFwdGVyJyk7XG5cbnZhciBfc3ZnQWRhcHRlcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9zdmdBZGFwdGVyKTtcblxudmFyIF9zdmdQYXRoQWRhcHRlciA9IHJlcXVpcmUoJy4uL2FkYXB0ZXIvc3ZnLXBhdGgtYWRhcHRlcicpO1xuXG52YXIgX3N2Z1BhdGhBZGFwdGVyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3N2Z1BhdGhBZGFwdGVyKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxudmFyIFNBVkVfUFJPUCA9ICdfX3BtX2FkYXB0ZXInO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbiAoZWxlbWVudCkge1xuICAgIC8vIFJldHVybiBib3VuZCBhZGFwdGVyIGlmIHByZXNlbnRcbiAgICBpZiAoZWxlbWVudFtTQVZFX1BST1BdKSB7XG4gICAgICAgIHJldHVybiBlbGVtZW50W1NBVkVfUFJPUF07XG5cbiAgICAgICAgLy8gT3IgZGV0ZWN0IGFuZCBiaW5kIGFkYXB0ZXJcbiAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdmFyIGRldGVjdGVkQWRhcHRlciA9IF9hZGFwdGVyMi5kZWZhdWx0O1xuXG4gICAgICAgICAgICAvLyBJZiBIVE1MRWxlbWVudCBsb2FkIENTU1xuICAgICAgICAgICAgaWYgKGVsZW1lbnQgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCB8fCBlbGVtZW50LnRhZ05hbWUgPT09ICdzdmcnKSB7XG4gICAgICAgICAgICAgICAgZGV0ZWN0ZWRBZGFwdGVyID0gX2Nzc0FkYXB0ZXIyLmRlZmF1bHQ7XG5cbiAgICAgICAgICAgICAgICAvLyBPciBTVkdcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoZWxlbWVudCBpbnN0YW5jZW9mIFNWR0VsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGVsZW1lbnQudGFnTmFtZSA9PT0gJ3BhdGgnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkZXRlY3RlZEFkYXB0ZXIgPSBfc3ZnUGF0aEFkYXB0ZXIyLmRlZmF1bHQ7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkZXRlY3RlZEFkYXB0ZXIgPSBfc3ZnQWRhcHRlcjIuZGVmYXVsdDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdmFyIGJvdW5kQWRhcHRlciA9IGRldGVjdGVkQWRhcHRlcihlbGVtZW50KTtcblxuICAgICAgICAgICAgLy8gQmluZCBhZGFwdGVyIHRvIGVsZW1lbnRcbiAgICAgICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlbGVtZW50LCBTQVZFX1BST1AsIHtcbiAgICAgICAgICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgICAgICAgICAgICB3cml0YWJsZTogZmFsc2UsXG4gICAgICAgICAgICAgICAgdmFsdWU6IGJvdW5kQWRhcHRlclxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIHJldHVybiBib3VuZEFkYXB0ZXI7XG4gICAgICAgIH1cbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5OeVl5OXBibU12WW1sdVpDMWhaR0Z3ZEdWeUxtcHpJbDBzSW01aGJXVnpJanBiWFN3aWJXRndjR2x1WjNNaU9pSTdPenM3T3pzN096czdPenM3T3pzN096czdPenM3UVVGTFFTeEpRVUZOTEZsQlFWa3NZMEZCV2pzN2EwSkJSVk1zVlVGQlF5eFBRVUZFTEVWQlFXRTdPMEZCUlhoQ0xGRkJRVWtzVVVGQlVTeFRRVUZTTEVOQlFVb3NSVUZCZDBJN1FVRkRjRUlzWlVGQlR5eFJRVUZSTEZOQlFWSXNRMEZCVURzN08wRkJSRzlDTEV0QlFYaENMRTFCU1U4N1FVRkRTQ3huUWtGQlNTeHRRMEZCU2pzN08wRkJSRWNzWjBKQlNVTXNiVUpCUVcxQ0xGZEJRVzVDTEVsQlFXdERMRkZCUVZFc1QwRkJVaXhMUVVGdlFpeExRVUZ3UWl4RlFVRXlRanRCUVVNM1JEczdPMEZCUkRaRUxHRkJRV3BGTEUxQlNVOHNTVUZCU1N4dFFrRkJiVUlzVlVGQmJrSXNSVUZCSzBJN1FVRkRkRU1zZDBKQlFVa3NVVUZCVVN4UFFVRlNMRXRCUVc5Q0xFMUJRWEJDTEVWQlFUUkNPMEZCUXpWQ0xHMUZRVVEwUWp0eFFrRkJhRU1zVFVGRlR6dEJRVU5JTEN0RVFVUkhPM0ZDUVVaUU8ybENRVVJIT3p0QlFWRlFMR2RDUVVGTkxHVkJRV1VzWjBKQlFXZENMRTlCUVdoQ0xFTkJRV1k3T3p0QlFXaENTQ3hyUWtGdFFrZ3NRMEZCVHl4alFVRlFMRU5CUVhOQ0xFOUJRWFJDTEVWQlFTdENMRk5CUVM5Q0xFVkJRVEJETzBGQlEzUkRMRFJDUVVGWkxFdEJRVm83UVVGRFFTd3dRa0ZCVlN4TFFVRldPMEZCUTBFc2RVSkJRVThzV1VGQlVEdGhRVWhLTEVWQmJrSkhPenRCUVhsQ1NDeHRRa0ZCVHl4WlFVRlFMRU5CZWtKSE8xTkJTbEE3UTBGR1Z5SXNJbVpwYkdVaU9pSmlhVzVrTFdGa1lYQjBaWEl1YW5NaUxDSnpiM1Z5WTJWU2IyOTBJam9pTDFWelpYSnpMMDFoZEhRdlUybDBaWE12Y0c5d2JXOTBhVzl1SWl3aWMyOTFjbU5sYzBOdmJuUmxiblFpT2xzaWFXMXdiM0owSUdGa1lYQjBaWElnWm5KdmJTQW5MaTR2WVdSaGNIUmxjaTloWkdGd2RHVnlKenRjYm1sdGNHOXlkQ0JqYzNOQlpHRndkR1Z5SUdaeWIyMGdKeTR1TDJGa1lYQjBaWEl2WTNOekxXRmtZWEIwWlhJbk8xeHVhVzF3YjNKMElITjJaMEZrWVhCMFpYSWdabkp2YlNBbkxpNHZZV1JoY0hSbGNpOXpkbWN0WVdSaGNIUmxjaWM3WEc1cGJYQnZjblFnYzNablVHRjBhRUZrWVhCMFpYSWdabkp2YlNBbkxpNHZZV1JoY0hSbGNpOXpkbWN0Y0dGMGFDMWhaR0Z3ZEdWeUp6dGNibHh1WTI5dWMzUWdVMEZXUlY5UVVrOVFJRDBnSjE5ZmNHMWZZV1JoY0hSbGNpYzdYRzVjYm1WNGNHOXlkQ0JrWldaaGRXeDBJQ2hsYkdWdFpXNTBLU0E5UGlCN1hHNGdJQ0FnTHk4Z1VtVjBkWEp1SUdKdmRXNWtJR0ZrWVhCMFpYSWdhV1lnY0hKbGMyVnVkRnh1SUNBZ0lHbG1JQ2hsYkdWdFpXNTBXMU5CVmtWZlVGSlBVRjBwSUh0Y2JpQWdJQ0FnSUNBZ2NtVjBkWEp1SUdWc1pXMWxiblJiVTBGV1JWOVFVazlRWFR0Y2JseHVJQ0FnSUM4dklFOXlJR1JsZEdWamRDQmhibVFnWW1sdVpDQmhaR0Z3ZEdWeVhHNGdJQ0FnZlNCbGJITmxJSHRjYmlBZ0lDQWdJQ0FnYkdWMElHUmxkR1ZqZEdWa1FXUmhjSFJsY2lBOUlHRmtZWEIwWlhJN1hHNWNiaUFnSUNBZ0lDQWdMeThnU1dZZ1NGUk5URVZzWlcxbGJuUWdiRzloWkNCRFUxTmNiaUFnSUNBZ0lDQWdhV1lnS0dWc1pXMWxiblFnYVc1emRHRnVZMlZ2WmlCSVZFMU1SV3hsYldWdWRDQjhmQ0JsYkdWdFpXNTBMblJoWjA1aGJXVWdQVDA5SUNkemRtY25LU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQmtaWFJsWTNSbFpFRmtZWEIwWlhJZ1BTQmpjM05CWkdGd2RHVnlPMXh1WEc0Z0lDQWdJQ0FnSUM4dklFOXlJRk5XUjF4dUlDQWdJQ0FnSUNCOUlHVnNjMlVnYVdZZ0tHVnNaVzFsYm5RZ2FXNXpkR0Z1WTJWdlppQlRWa2RGYkdWdFpXNTBLU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQnBaaUFvWld4bGJXVnVkQzUwWVdkT1lXMWxJRDA5UFNBbmNHRjBhQ2NwSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCa1pYUmxZM1JsWkVGa1lYQjBaWElnUFNCemRtZFFZWFJvUVdSaGNIUmxjanRjYmlBZ0lDQWdJQ0FnSUNBZ0lIMGdaV3h6WlNCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ1pHVjBaV04wWldSQlpHRndkR1Z5SUQwZ2MzWm5RV1JoY0hSbGNqdGNiaUFnSUNBZ0lDQWdJQ0FnSUgxY2JpQWdJQ0FnSUNBZ2ZWeHVYRzRnSUNBZ0lDQWdJR052Ym5OMElHSnZkVzVrUVdSaGNIUmxjaUE5SUdSbGRHVmpkR1ZrUVdSaGNIUmxjaWhsYkdWdFpXNTBLVHRjYmx4dUlDQWdJQ0FnSUNBdkx5QkNhVzVrSUdGa1lYQjBaWElnZEc4Z1pXeGxiV1Z1ZEZ4dUlDQWdJQ0FnSUNCUFltcGxZM1F1WkdWbWFXNWxVSEp2Y0dWeWRIa29aV3hsYldWdWRDd2dVMEZXUlY5UVVrOVFMQ0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQmxiblZ0WlhKaFlteGxPaUJtWVd4elpTeGNiaUFnSUNBZ0lDQWdJQ0FnSUhkeWFYUmhZbXhsT2lCbVlXeHpaU3hjYmlBZ0lDQWdJQ0FnSUNBZ0lIWmhiSFZsT2lCaWIzVnVaRUZrWVhCMFpYSmNiaUFnSUNBZ0lDQWdmU2s3WEc1Y2JpQWdJQ0FnSUNBZ2NtVjBkWEp1SUdKdmRXNWtRV1JoY0hSbGNqdGNiaUFnSUNCOVhHNTlPMXh1SWwxOVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvaW5jL2JpbmQtYWRhcHRlci5qc1xuICoqIG1vZHVsZSBpZCA9IDM0XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfSW5wdXQyID0gcmVxdWlyZSgnLi9JbnB1dCcpO1xuXG52YXIgX0lucHV0MyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX0lucHV0Mik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKCFzZWxmKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gY2FsbCAmJiAodHlwZW9mIGNhbGwgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikgPyBjYWxsIDogc2VsZjsgfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb24sIG5vdCBcIiArIHR5cGVvZiBzdXBlckNsYXNzKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCBlbnVtZXJhYmxlOiBmYWxzZSwgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LnNldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKSA6IHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7IH1cblxudmFyIFBvaW50ZXIgPSBmdW5jdGlvbiAoX0lucHV0KSB7XG4gICAgX2luaGVyaXRzKFBvaW50ZXIsIF9JbnB1dCk7XG5cbiAgICBmdW5jdGlvbiBQb2ludGVyKGluaXRpYWxTdGF0ZSwgbW92ZUV2ZW50LCBldmVudFRvUG9pbnQpIHtcbiAgICAgICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFBvaW50ZXIpO1xuXG4gICAgICAgIHZhciBfdGhpcyA9IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIF9JbnB1dC5jYWxsKHRoaXMsIGluaXRpYWxTdGF0ZSkpO1xuXG4gICAgICAgIF90aGlzLmV2ZW50VG9Qb2ludCA9IGV2ZW50VG9Qb2ludDtcbiAgICAgICAgX3RoaXMubW92ZUV2ZW50ID0gbW92ZUV2ZW50O1xuICAgICAgICByZXR1cm4gX3RoaXM7XG4gICAgfVxuXG4gICAgUG9pbnRlci5wcm90b3R5cGUubGF0ZXN0ID0gZnVuY3Rpb24gbGF0ZXN0KGUpIHtcbiAgICAgICAgX0lucHV0LnByb3RvdHlwZS5sYXRlc3QuY2FsbCh0aGlzLCB0aGlzLmV2ZW50VG9Qb2ludChlKSk7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICB9O1xuXG4gICAgUG9pbnRlci5wcm90b3R5cGUuc3RhcnQgPSBmdW5jdGlvbiBzdGFydCgpIHtcbiAgICAgICAgdmFyIF90aGlzMiA9IHRoaXM7XG5cbiAgICAgICAgX0lucHV0LnByb3RvdHlwZS5zdGFydC5jYWxsKHRoaXMpO1xuICAgICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcih0aGlzLm1vdmVFdmVudCwgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgIHJldHVybiBfdGhpczIubGF0ZXN0KGUpO1xuICAgICAgICB9KTtcbiAgICB9O1xuXG4gICAgUG9pbnRlci5wcm90b3R5cGUuc3RvcCA9IGZ1bmN0aW9uIHN0b3AoKSB7XG4gICAgICAgIHZhciBfdGhpczMgPSB0aGlzO1xuXG4gICAgICAgIF9JbnB1dC5wcm90b3R5cGUuc3RvcC5jYWxsKHRoaXMpO1xuICAgICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcih0aGlzLm1vdmVFdmVudCwgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgIHJldHVybiBfdGhpczMubGF0ZXN0KGUpO1xuICAgICAgICB9KTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIFBvaW50ZXI7XG59KF9JbnB1dDMuZGVmYXVsdCk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IFBvaW50ZXI7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5OeVl5OXBibkIxZEM5UWIybHVkR1Z5TG1weklsMHNJbTVoYldWeklqcGJYU3dpYldGd2NHbHVaM01pT2lJN096czdPenM3T3pzN096czdPenM3U1VGRmNVSTdPenRCUVVOcVFpeGhRVVJwUWl4UFFVTnFRaXhEUVVGWkxGbEJRVm9zUlVGQk1FSXNVMEZCTVVJc1JVRkJjVU1zV1VGQmNrTXNSVUZCYlVRN09FSkJSR3hETEZOQlEydERPenR4UkVGREwwTXNhMEpCUVUwc1dVRkJUaXhIUVVRclF6czdRVUZGTDBNc1kwRkJTeXhaUVVGTUxFZEJRVzlDTEZsQlFYQkNMRU5CUml0RE8wRkJSeTlETEdOQlFVc3NVMEZCVEN4SFFVRnBRaXhUUVVGcVFpeERRVWdyUXpzN1MwRkJia1E3TzBGQlJHbENMSE5DUVU5cVFpeDVRa0ZCVHl4SFFVRkhPMEZCUTA0c2VVSkJRVTBzVFVGQlRpeFpRVUZoTEV0QlFVc3NXVUZCVEN4RFFVRnJRaXhEUVVGc1FpeERRVUZpTEVWQlJFMDdRVUZGVGl4VlFVRkZMR05CUVVZc1IwRkdUVHM3TzBGQlVFOHNjMEpCV1dwQ0xIbENRVUZST3pzN1FVRkRTaXg1UWtGQlRTeExRVUZPTEZsQlJFazdRVUZGU2l4cFFrRkJVeXhsUVVGVUxFTkJRWGxDTEdkQ1FVRjZRaXhEUVVFd1F5eExRVUZMTEZOQlFVd3NSVUZCWjBJc1ZVRkJReXhEUVVGRU8yMUNRVUZQTEU5QlFVc3NUVUZCVEN4RFFVRlpMRU5CUVZvN1UwRkJVQ3hEUVVFeFJDeERRVVpKT3pzN1FVRmFVeXh6UWtGcFFtcENMSFZDUVVGUE96czdRVUZEU0N4NVFrRkJUU3hKUVVGT0xGbEJSRWM3UVVGRlNDeHBRa0ZCVXl4bFFVRlVMRU5CUVhsQ0xHMUNRVUY2UWl4RFFVRTJReXhMUVVGTExGTkJRVXdzUlVGQlowSXNWVUZCUXl4RFFVRkVPMjFDUVVGUExFOUJRVXNzVFVGQlRDeERRVUZaTEVOQlFWbzdVMEZCVUN4RFFVRTNSQ3hEUVVaSE96czdWMEZxUWxVaUxDSm1hV3hsSWpvaVVHOXBiblJsY2k1cWN5SXNJbk52ZFhKalpWSnZiM1FpT2lJdlZYTmxjbk12VFdGMGRDOVRhWFJsY3k5d2IzQnRiM1JwYjI0aUxDSnpiM1Z5WTJWelEyOXVkR1Z1ZENJNld5SnBiWEJ2Y25RZ1NXNXdkWFFnWm5KdmJTQW5MaTlKYm5CMWRDYzdYRzVjYm1WNGNHOXlkQ0JrWldaaGRXeDBJR05zWVhOeklGQnZhVzUwWlhJZ1pYaDBaVzVrY3lCSmJuQjFkQ0I3WEc0Z0lDQWdZMjl1YzNSeWRXTjBiM0lvYVc1cGRHbGhiRk4wWVhSbExDQnRiM1psUlhabGJuUXNJR1YyWlc1MFZHOVFiMmx1ZENrZ2UxeHVJQ0FnSUNBZ0lDQnpkWEJsY2locGJtbDBhV0ZzVTNSaGRHVXBPMXh1SUNBZ0lDQWdJQ0IwYUdsekxtVjJaVzUwVkc5UWIybHVkQ0E5SUdWMlpXNTBWRzlRYjJsdWREdGNiaUFnSUNBZ0lDQWdkR2hwY3k1dGIzWmxSWFpsYm5RZ1BTQnRiM1psUlhabGJuUTdYRzRnSUNBZ2ZWeHVYRzRnSUNBZ2JHRjBaWE4wS0dVcElIdGNiaUFnSUNBZ0lDQWdjM1Z3WlhJdWJHRjBaWE4wS0hSb2FYTXVaWFpsYm5SVWIxQnZhVzUwS0dVcEtUdGNiaUFnSUNBZ0lDQWdaUzV3Y21WMlpXNTBSR1ZtWVhWc2RDZ3BPMXh1SUNBZ0lIMWNibHh1SUNBZ0lITjBZWEowS0NrZ2UxeHVJQ0FnSUNBZ0lDQnpkWEJsY2k1emRHRnlkQ2dwTzF4dUlDQWdJQ0FnSUNCa2IyTjFiV1Z1ZEM1a2IyTjFiV1Z1ZEVWc1pXMWxiblF1WVdSa1JYWmxiblJNYVhOMFpXNWxjaWgwYUdsekxtMXZkbVZGZG1WdWRDd2dLR1VwSUQwK0lIUm9hWE11YkdGMFpYTjBLR1VwS1R0Y2JpQWdJQ0I5WEc1Y2JpQWdJQ0J6ZEc5d0tDa2dlMXh1SUNBZ0lDQWdJQ0J6ZFhCbGNpNXpkRzl3S0NrN1hHNGdJQ0FnSUNBZ0lHUnZZM1Z0Wlc1MExtUnZZM1Z0Wlc1MFJXeGxiV1Z1ZEM1eVpXMXZkbVZGZG1WdWRFeHBjM1JsYm1WeUtIUm9hWE11Ylc5MlpVVjJaVzUwTENBb1pTa2dQVDRnZEdocGN5NXNZWFJsYzNRb1pTa3BPMXh1SUNBZ0lIMWNibjFjYmlKZGZRPT1cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2lucHV0L1BvaW50ZXIuanNcbiAqKiBtb2R1bGUgaWQgPSAzNVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0cy5kZWFjdGl2YXRlID0gZXhwb3J0cy5nZXRQcm9jZXNzSWQgPSB1bmRlZmluZWQ7XG5leHBvcnRzLmFjdGl2YXRlID0gYWN0aXZhdGU7XG5cbnZhciBfdGltZXIgPSByZXF1aXJlKCcuL3RpbWVyJyk7XG5cbnZhciBfdGltZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfdGltZXIpO1xuXG52YXIgX3RpY2sgPSByZXF1aXJlKCcuL3RpY2snKTtcblxudmFyIF90aWNrMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3RpY2spO1xuXG52YXIgX21hbmFnZXIgPSByZXF1aXJlKCcuL21hbmFnZXInKTtcblxudmFyIF9tYW5hZ2VyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX21hbmFnZXIpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG52YXIgcHJvY2Vzc1N0ZXBPcmRlciA9IFt7IG5hbWU6ICdvbkZyYW1lU3RhcnQnIH0sIHsgbmFtZTogJ29uVXBkYXRlJyB9LCB7IG5hbWU6ICd3aWxsUmVuZGVyJywgZGVjaWRlUmVuZGVyOiB0cnVlIH0sIHsgbmFtZTogJ29uUHJlUmVuZGVyJywgaXNSZW5kZXI6IHRydWUgfSwgeyBuYW1lOiAnb25SZW5kZXInLCBpc1JlbmRlcjogdHJ1ZSB9LCB7IG5hbWU6ICdvblBvc3RSZW5kZXInLCBpc1JlbmRlcjogdHJ1ZSB9LCB7IG5hbWU6ICdvbkZyYW1lRW5kJyB9LCB7IG5hbWU6ICdvbkNsZWFudXAnIH1dOyAvKlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIENvcmUgcmVuZGVyIGxvb3BcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFNvbWUgZGVjaWNpc29ucyBoZXJlIGhhdmUgYmVlbiB0YWtlbiBpbiB0aGUgbmFtZSBvZiBwZXJmb3JtYW5jZS4gQWxsIGhhaWwgcGVyZm9ybWFuY2UuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKEl0IHR1cm5zIG91dCBtaWNyb29wdGltaXNhdGlvbnMgZG8gbWF0dGVyIHdoZW4geW91IGhhdmUgMTZtcylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICovXG5cbnZhciBudW1Qcm9jZXNzU3RlcHMgPSBwcm9jZXNzU3RlcE9yZGVyLmxlbmd0aDtcblxuLy8gW2Jvb2xlYW5dOiBJcyBsb29wIHJ1bm5pbmc/XG52YXIgaXNSdW5uaW5nID0gZmFsc2U7XG5cbi8qXG4gICAgW3RpbWVzdGFtcF06IEZyYW1lIHRpbWVzdGFtcFxuICAgIFtpbnRdOiBUaW1lIHNpbmNlIGxhc3QgZnJhbWVcbiovXG5mdW5jdGlvbiBmaXJlQWxsKGZyYW1lU3RhbXAsIGVsYXBzZWQpIHtcbiAgICB2YXIgYWN0aXZlSWRzID0gX21hbmFnZXIyLmRlZmF1bHQuZ2V0QWN0aXZlSWRzKCk7XG4gICAgdmFyIGFjdGl2ZVByb2Nlc3NDb3VudCA9IGFjdGl2ZUlkcy5sZW5ndGg7XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IG51bVByb2Nlc3NTdGVwczsgaSsrKSB7XG4gICAgICAgIHZhciBzdGVwID0gcHJvY2Vzc1N0ZXBPcmRlcltpXTtcblxuICAgICAgICBmb3IgKHZhciBpMiA9IDA7IGkyIDwgYWN0aXZlUHJvY2Vzc0NvdW50OyBpMisrKSB7XG4gICAgICAgICAgICB2YXIgcHJvY2VzcyA9IF9tYW5hZ2VyMi5kZWZhdWx0LmFjdGl2ZVByb2Nlc3Nlc1thY3RpdmVJZHNbaTJdXTtcbiAgICAgICAgICAgIHZhciByZXN1bHQgPSBmYWxzZTtcblxuICAgICAgICAgICAgLy8gQ2hlY2sgaWYgdGhpcyBwcm9jZXNzIGhhcyB0aGlzIHN0ZXAsIG9yIGlmIGl0J3MgYSByZW5kZXIgc3RlcCB0aGF0IHdlJ3JlIHJlbmRlcmluZyB0aGlzIGZyYW1lXG4gICAgICAgICAgICBpZiAocHJvY2VzcyAmJiBwcm9jZXNzW3N0ZXAubmFtZV0gJiYgKCFzdGVwLmlzUmVuZGVyIHx8IHN0ZXAuaXNSZW5kZXIgJiYgcHJvY2Vzcy5fcmVuZGVyVGhpc0ZyYW1lID09PSB0cnVlKSkge1xuICAgICAgICAgICAgICAgIHJlc3VsdCA9IHByb2Nlc3Nbc3RlcC5uYW1lXS5jYWxsKHByb2Nlc3MsIHByb2Nlc3MsIGZyYW1lU3RhbXAsIGVsYXBzZWQpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBJZiB0aGlzIGlzIGEgZGVjaWRlIHJlbmRlciBzdGVwIGFuZCBpdCByZXR1cm5zIGBmYWxzZWAsIHNldCB3aWxsUmVuZGVyIHRvIGZhbHNlXG4gICAgICAgICAgICBpZiAoc3RlcC5kZWNpZGVSZW5kZXIpIHtcbiAgICAgICAgICAgICAgICBwcm9jZXNzLl9yZW5kZXJUaGlzRnJhbWUgPSBwcm9jZXNzW3N0ZXAubmFtZV0gJiYgcmVzdWx0ICE9PSB0cnVlID8gZmFsc2UgOiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIF9tYW5hZ2VyMi5kZWZhdWx0LmdldE5vbkJhY2tncm91bmRSdW5uaW5nQ291bnQoKTtcbn1cblxuLy8gRnVuY3Rpb24gdG8gZmlyZSBldmVyeSBmcmFtZVxuZnVuY3Rpb24gZnJhbWUoZnJhbWVTdGFtcCkge1xuICAgIF90aW1lcjIuZGVmYXVsdC51cGRhdGUoZnJhbWVTdGFtcCk7XG4gICAgaXNSdW5uaW5nID0gZmlyZUFsbChmcmFtZVN0YW1wLCBfdGltZXIyLmRlZmF1bHQuZ2V0RWxhcHNlZCgpKTtcblxuICAgIGlmIChpc1J1bm5pbmcpIHtcbiAgICAgICAgKDAsIF90aWNrMi5kZWZhdWx0KShmcmFtZSk7XG4gICAgfVxufVxuXG4vLyBTdGFydCBsb29wXG5mdW5jdGlvbiBzdGFydCgpIHtcbiAgICBpZiAoIWlzUnVubmluZykge1xuICAgICAgICBfdGltZXIyLmRlZmF1bHQuc3RhcnQoKTtcbiAgICAgICAgaXNSdW5uaW5nID0gdHJ1ZTtcbiAgICAgICAgKDAsIF90aWNrMi5kZWZhdWx0KShmcmFtZSk7XG4gICAgfVxufVxuXG4vLyBFeHBvcnRzXG52YXIgZ2V0UHJvY2Vzc0lkID0gZXhwb3J0cy5nZXRQcm9jZXNzSWQgPSBfbWFuYWdlcjIuZGVmYXVsdC5nZXRQcm9jZXNzSWQ7XG5cbi8qXG4gICAgW2ludF06IFByb2Nlc3MgSUQgdG8gYWN0aXZhdGVcbiAgICBbUHJvY2Vzc106IFByb2Nlc3MgdG8gYWN0aXZhdGVcbiovXG5mdW5jdGlvbiBhY3RpdmF0ZShpZCwgcHJvY2Vzcykge1xuICAgIF9tYW5hZ2VyMi5kZWZhdWx0LmFjdGl2YXRlKGlkLCBwcm9jZXNzKTtcblxuICAgIGlmICghaXNSdW5uaW5nKSB7XG4gICAgICAgIHN0YXJ0KCk7XG4gICAgfVxufVxuXG4vKlxuICAgIFtpbnRdOiBQcm9jZXNzIElEIHRvIGRlYWN0aXZhdGVcbiovXG52YXIgZGVhY3RpdmF0ZSA9IGV4cG9ydHMuZGVhY3RpdmF0ZSA9IF9tYW5hZ2VyMi5kZWZhdWx0LmRlYWN0aXZhdGU7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5OeVl5OXdjbTlqWlhOekwyeHZiM0F1YW5NaVhTd2libUZ0WlhNaU9sdGRMQ0p0WVhCd2FXNW5jeUk2SWpzN096dFJRV2xHWjBJN096czdPenM3T3pzN096czdPenM3UVVGMlJXaENMRWxCUVUwc2JVSkJRVzFDTEVOQlEzSkNMRVZCUVVVc1RVRkJUU3hqUVVGT0xFVkJSRzFDTEVWQlJYSkNMRVZCUVVVc1RVRkJUU3hWUVVGT0xFVkJSbTFDTEVWQlIzSkNMRVZCUVVVc1RVRkJUU3haUVVGT0xFVkJRVzlDTEdOQlFXTXNTVUZCWkN4RlFVaEVMRVZCU1hKQ0xFVkJRVVVzVFVGQlRTeGhRVUZPTEVWQlFYRkNMRlZCUVZVc1NVRkJWaXhGUVVwR0xFVkJTM0pDTEVWQlFVVXNUVUZCVFN4VlFVRk9MRVZCUVd0Q0xGVkJRVlVzU1VGQlZpeEZRVXhETEVWQlRYSkNMRVZCUVVVc1RVRkJUU3hqUVVGT0xFVkJRWE5DTEZWQlFWVXNTVUZCVml4RlFVNUlMRVZCVDNKQ0xFVkJRVVVzVFVGQlRTeFpRVUZPTEVWQlVHMUNMRVZCVVhKQ0xFVkJRVVVzVFVGQlRTeFhRVUZPTEVWQlVtMUNMRU5CUVc1Q096czdPenM3TzBGQlZVNHNTVUZCVFN4clFrRkJhMElzYVVKQlFXbENMRTFCUVdwQ096czdRVUZIZUVJc1NVRkJTU3haUVVGWkxFdEJRVm83T3pzN096dEJRVTFLTEZOQlFWTXNUMEZCVkN4RFFVRnBRaXhWUVVGcVFpeEZRVUUyUWl4UFFVRTNRaXhGUVVGelF6dEJRVU5zUXl4UlFVRk5MRmxCUVZrc2EwSkJRVkVzV1VGQlVpeEZRVUZhTEVOQlJEUkNPMEZCUld4RExGRkJRVTBzY1VKQlFYRkNMRlZCUVZVc1RVRkJWaXhEUVVaUE96dEJRVWxzUXl4VFFVRkxMRWxCUVVrc1NVRkJTU3hEUVVGS0xFVkJRVThzU1VGQlNTeGxRVUZLTEVWQlFYRkNMRWRCUVhKRExFVkJRVEJETzBGQlEzUkRMRmxCUVUwc1QwRkJUeXhwUWtGQmFVSXNRMEZCYWtJc1EwRkJVQ3hEUVVSblF6czdRVUZIZEVNc1lVRkJTeXhKUVVGSkxFdEJRVXNzUTBGQlRDeEZRVUZSTEV0QlFVc3NhMEpCUVV3c1JVRkJlVUlzU1VGQk1VTXNSVUZCWjBRN1FVRkROVU1zWjBKQlFVMHNWVUZCVlN4clFrRkJVU3hsUVVGU0xFTkJRWGRDTEZWQlFWVXNSVUZCVml4RFFVRjRRaXhEUVVGV0xFTkJSSE5ETzBGQlJUVkRMR2RDUVVGSkxGTkJRVk1zUzBGQlZEczdPMEZCUm5kRExHZENRVXQ0UXl4WFFVRlhMRkZCUVZFc1MwRkJTeXhKUVVGTUxFTkJRVzVDTEV0QlFXdERMRU5CUVVNc1MwRkJTeXhSUVVGTUxFbEJRV3RDTEV0QlFVc3NVVUZCVEN4SlFVRnBRaXhSUVVGUkxHZENRVUZTTEV0QlFUWkNMRWxCUVRkQ0xFTkJRWFJGTEVWQlFUSkhPMEZCUXpOSExIbENRVUZUTEZGQlFWRXNTMEZCU3l4SlFVRk1MRU5CUVZJc1EwRkJiVUlzU1VGQmJrSXNRMEZCZDBJc1QwRkJlRUlzUlVGQmFVTXNUMEZCYWtNc1JVRkJNRU1zVlVGQk1VTXNSVUZCYzBRc1QwRkJkRVFzUTBGQlZDeERRVVF5Unp0aFFVRXZSenM3TzBGQlREUkRMR2RDUVZWNFF5eExRVUZMTEZsQlFVd3NSVUZCYlVJN1FVRkRia0lzZDBKQlFWRXNaMEpCUVZJc1IwRkJNa0lzVDBGQlF5eERRVUZSTEV0QlFVc3NTVUZCVEN4RFFVRlNMRWxCUVhOQ0xGZEJRVmNzU1VGQldDeEhRVUZ0UWl4TFFVRXhReXhIUVVGclJDeEpRVUZzUkN4RFFVUlNPMkZCUVhaQ08xTkJWa283UzBGSVNqczdRVUZ0UWtFc1YwRkJUeXhyUWtGQlVTdzBRa0ZCVWl4RlFVRlFMRU5CZGtKclF6dERRVUYwUXpzN08wRkJNa0pCTEZOQlFWTXNTMEZCVkN4RFFVRmxMRlZCUVdZc1JVRkJNa0k3UVVGRGRrSXNiMEpCUVUwc1RVRkJUaXhEUVVGaExGVkJRV0lzUlVGRWRVSTdRVUZGZGtJc1owSkJRVmtzVVVGQlVTeFZRVUZTTEVWQlFXOUNMR2RDUVVGTkxGVkJRVTRzUlVGQmNFSXNRMEZCV2l4RFFVWjFRanM3UVVGSmRrSXNVVUZCU1N4VFFVRktMRVZCUVdVN1FVRkRXQ3cwUWtGQlN5eExRVUZNTEVWQlJGYzdTMEZCWmp0RFFVcEtPenM3UVVGVlFTeFRRVUZUTEV0QlFWUXNSMEZCYVVJN1FVRkRZaXhSUVVGSkxFTkJRVU1zVTBGQlJDeEZRVUZaTzBGQlExb3NkMEpCUVUwc1MwRkJUaXhIUVVSWk8wRkJSVm9zYjBKQlFWa3NTVUZCV2l4RFFVWlpPMEZCUjFvc05FSkJRVXNzUzBGQlRDeEZRVWhaTzB0QlFXaENPME5CUkVvN096dEJRVk5QTEVsQlFVMHNjME5CUVdVc2EwSkJRVkVzV1VGQlVqczdPenM3TzBGQlRYSkNMRk5CUVZNc1VVRkJWQ3hEUVVGclFpeEZRVUZzUWl4RlFVRnpRaXhQUVVGMFFpeEZRVUVyUWp0QlFVTnNReXh6UWtGQlVTeFJRVUZTTEVOQlFXbENMRVZCUVdwQ0xFVkJRWEZDTEU5QlFYSkNMRVZCUkd0RE96dEJRVWRzUXl4UlFVRkpMRU5CUVVNc1UwRkJSQ3hGUVVGWk8wRkJRMW9zWjBKQlJGazdTMEZCYUVJN1EwRklSenM3T3pzN1FVRlhRU3hKUVVGTkxHdERRVUZoTEd0Q1FVRlJMRlZCUVZJaUxDSm1hV3hsSWpvaWJHOXZjQzVxY3lJc0luTnZkWEpqWlZKdmIzUWlPaUl2VlhObGNuTXZUV0YwZEM5VGFYUmxjeTl3YjNCdGIzUnBiMjRpTENKemIzVnlZMlZ6UTI5dWRHVnVkQ0k2V3lJdktseHVJQ0FnSUVOdmNtVWdjbVZ1WkdWeUlHeHZiM0JjYmx4dUlDQWdJRk52YldVZ1pHVmphV05wYzI5dWN5Qm9aWEpsSUdoaGRtVWdZbVZsYmlCMFlXdGxiaUJwYmlCMGFHVWdibUZ0WlNCdlppQndaWEptYjNKdFlXNWpaUzRnUVd4c0lHaGhhV3dnY0dWeVptOXliV0Z1WTJVdVhHNGdJQ0FnS0VsMElIUjFjbTV6SUc5MWRDQnRhV055YjI5d2RHbHRhWE5oZEdsdmJuTWdaRzhnYldGMGRHVnlJSGRvWlc0Z2VXOTFJR2hoZG1VZ01UWnRjeWxjYmlvdlhHNXBiWEJ2Y25RZ2RHbHRaWElnWm5KdmJTQW5MaTkwYVcxbGNpYzdYRzVwYlhCdmNuUWdkR2xqYXlCbWNtOXRJQ2N1TDNScFkyc25PMXh1YVcxd2IzSjBJRzFoYm1GblpYSWdabkp2YlNBbkxpOXRZVzVoWjJWeUp6dGNibHh1WTI5dWMzUWdjSEp2WTJWemMxTjBaWEJQY21SbGNpQTlJRnRjYmlBZ0lDQjdJRzVoYldVNklDZHZia1p5WVcxbFUzUmhjblFuSUgwc1hHNGdJQ0FnZXlCdVlXMWxPaUFuYjI1VmNHUmhkR1VuSUgwc1hHNGdJQ0FnZXlCdVlXMWxPaUFuZDJsc2JGSmxibVJsY2ljc0lHUmxZMmxrWlZKbGJtUmxjam9nZEhKMVpTQjlMRnh1SUNBZ0lIc2dibUZ0WlRvZ0oyOXVVSEpsVW1WdVpHVnlKeXdnYVhOU1pXNWtaWEk2SUhSeWRXVWdmU3hjYmlBZ0lDQjdJRzVoYldVNklDZHZibEpsYm1SbGNpY3NJR2x6VW1WdVpHVnlPaUIwY25WbElIMHNYRzRnSUNBZ2V5QnVZVzFsT2lBbmIyNVFiM04wVW1WdVpHVnlKeXdnYVhOU1pXNWtaWEk2SUhSeWRXVWdmU3hjYmlBZ0lDQjdJRzVoYldVNklDZHZia1p5WVcxbFJXNWtKeUI5TEZ4dUlDQWdJSHNnYm1GdFpUb2dKMjl1UTJ4bFlXNTFjQ2NnZlZ4dVhUdGNibU52Ym5OMElHNTFiVkJ5YjJObGMzTlRkR1Z3Y3lBOUlIQnliMk5sYzNOVGRHVndUM0prWlhJdWJHVnVaM1JvTzF4dVhHNHZMeUJiWW05dmJHVmhibDA2SUVseklHeHZiM0FnY25WdWJtbHVaejljYm14bGRDQnBjMUoxYm01cGJtY2dQU0JtWVd4elpUdGNibHh1THlwY2JpQWdJQ0JiZEdsdFpYTjBZVzF3WFRvZ1JuSmhiV1VnZEdsdFpYTjBZVzF3WEc0Z0lDQWdXMmx1ZEYwNklGUnBiV1VnYzJsdVkyVWdiR0Z6ZENCbWNtRnRaVnh1S2k5Y2JtWjFibU4wYVc5dUlHWnBjbVZCYkd3b1puSmhiV1ZUZEdGdGNDd2daV3hoY0hObFpDa2dlMXh1SUNBZ0lHTnZibk4wSUdGamRHbDJaVWxrY3lBOUlHMWhibUZuWlhJdVoyVjBRV04wYVhabFNXUnpLQ2s3WEc0Z0lDQWdZMjl1YzNRZ1lXTjBhWFpsVUhKdlkyVnpjME52ZFc1MElEMGdZV04wYVhabFNXUnpMbXhsYm1kMGFEdGNibHh1SUNBZ0lHWnZjaUFvYkdWMElHa2dQU0F3T3lCcElEd2diblZ0VUhKdlkyVnpjMU4wWlhCek95QnBLeXNwSUh0Y2JpQWdJQ0FnSUNBZ1kyOXVjM1FnYzNSbGNDQTlJSEJ5YjJObGMzTlRkR1Z3VDNKa1pYSmJhVjA3WEc1Y2JpQWdJQ0FnSUNBZ1ptOXlJQ2hzWlhRZ2FUSWdQU0F3T3lCcE1pQThJR0ZqZEdsMlpWQnliMk5sYzNORGIzVnVkRHNnYVRJckt5a2dlMXh1SUNBZ0lDQWdJQ0FnSUNBZ1kyOXVjM1FnY0hKdlkyVnpjeUE5SUcxaGJtRm5aWEl1WVdOMGFYWmxVSEp2WTJWemMyVnpXMkZqZEdsMlpVbGtjMXRwTWwxZE8xeHVJQ0FnSUNBZ0lDQWdJQ0FnYkdWMElISmxjM1ZzZENBOUlHWmhiSE5sTzF4dVhHNGdJQ0FnSUNBZ0lDQWdJQ0F2THlCRGFHVmpheUJwWmlCMGFHbHpJSEJ5YjJObGMzTWdhR0Z6SUhSb2FYTWdjM1JsY0N3Z2IzSWdhV1lnYVhRbmN5QmhJSEpsYm1SbGNpQnpkR1Z3SUhSb1lYUWdkMlVuY21VZ2NtVnVaR1Z5YVc1bklIUm9hWE1nWm5KaGJXVmNiaUFnSUNBZ0lDQWdJQ0FnSUdsbUlDaHdjbTlqWlhOeklDWW1JSEJ5YjJObGMzTmJjM1JsY0M1dVlXMWxYU0FtSmlBb0lYTjBaWEF1YVhOU1pXNWtaWElnZkh3Z0tITjBaWEF1YVhOU1pXNWtaWElnSmlZZ2NISnZZMlZ6Y3k1ZmNtVnVaR1Z5VkdocGMwWnlZVzFsSUQwOVBTQjBjblZsS1NrcElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQnlaWE4xYkhRZ1BTQndjbTlqWlhOelczTjBaWEF1Ym1GdFpWMHVZMkZzYkNod2NtOWpaWE56TENCd2NtOWpaWE56TENCbWNtRnRaVk4wWVcxd0xDQmxiR0Z3YzJWa0tUdGNiaUFnSUNBZ0lDQWdJQ0FnSUgxY2JseHVJQ0FnSUNBZ0lDQWdJQ0FnTHk4Z1NXWWdkR2hwY3lCcGN5QmhJR1JsWTJsa1pTQnlaVzVrWlhJZ2MzUmxjQ0JoYm1RZ2FYUWdjbVYwZFhKdWN5QmdabUZzYzJWZ0xDQnpaWFFnZDJsc2JGSmxibVJsY2lCMGJ5Qm1ZV3h6WlZ4dUlDQWdJQ0FnSUNBZ0lDQWdhV1lnS0hOMFpYQXVaR1ZqYVdSbFVtVnVaR1Z5S1NCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2NISnZZMlZ6Y3k1ZmNtVnVaR1Z5VkdocGMwWnlZVzFsSUQwZ0tIQnliMk5sYzNOYmMzUmxjQzV1WVcxbFhTQW1KaUJ5WlhOMWJIUWdJVDA5SUhSeWRXVXBJRDhnWm1Gc2MyVWdPaUIwY25WbE8xeHVJQ0FnSUNBZ0lDQWdJQ0FnZlZ4dUlDQWdJQ0FnSUNCOVhHNGdJQ0FnZlZ4dVhHNGdJQ0FnY21WMGRYSnVJRzFoYm1GblpYSXVaMlYwVG05dVFtRmphMmR5YjNWdVpGSjFibTVwYm1kRGIzVnVkQ2dwTzF4dWZWeHVYRzR2THlCR2RXNWpkR2x2YmlCMGJ5Qm1hWEpsSUdWMlpYSjVJR1p5WVcxbFhHNW1kVzVqZEdsdmJpQm1jbUZ0WlNobWNtRnRaVk4wWVcxd0tTQjdYRzRnSUNBZ2RHbHRaWEl1ZFhCa1lYUmxLR1p5WVcxbFUzUmhiWEFwTzF4dUlDQWdJR2x6VW5WdWJtbHVaeUE5SUdacGNtVkJiR3dvWm5KaGJXVlRkR0Z0Y0N3Z2RHbHRaWEl1WjJWMFJXeGhjSE5sWkNncEtUdGNibHh1SUNBZ0lHbG1JQ2hwYzFKMWJtNXBibWNwSUh0Y2JpQWdJQ0FnSUNBZ2RHbGpheWhtY21GdFpTazdYRzRnSUNBZ2ZWeHVmVnh1WEc0dkx5QlRkR0Z5ZENCc2IyOXdYRzVtZFc1amRHbHZiaUJ6ZEdGeWRDZ3BJSHRjYmlBZ0lDQnBaaUFvSVdselVuVnVibWx1WnlrZ2UxeHVJQ0FnSUNBZ0lDQjBhVzFsY2k1emRHRnlkQ2dwTzF4dUlDQWdJQ0FnSUNCcGMxSjFibTVwYm1jZ1BTQjBjblZsTzF4dUlDQWdJQ0FnSUNCMGFXTnJLR1p5WVcxbEtUdGNiaUFnSUNCOVhHNTlYRzVjYmk4dklFVjRjRzl5ZEhOY2JtVjRjRzl5ZENCamIyNXpkQ0JuWlhSUWNtOWpaWE56U1dRZ1BTQnRZVzVoWjJWeUxtZGxkRkJ5YjJObGMzTkpaRHRjYmx4dUx5cGNiaUFnSUNCYmFXNTBYVG9nVUhKdlkyVnpjeUJKUkNCMGJ5QmhZM1JwZG1GMFpWeHVJQ0FnSUZ0UWNtOWpaWE56WFRvZ1VISnZZMlZ6Y3lCMGJ5QmhZM1JwZG1GMFpWeHVLaTljYm1WNGNHOXlkQ0JtZFc1amRHbHZiaUJoWTNScGRtRjBaU2hwWkN3Z2NISnZZMlZ6Y3lrZ2UxeHVJQ0FnSUcxaGJtRm5aWEl1WVdOMGFYWmhkR1VvYVdRc0lIQnliMk5sYzNNcE8xeHVYRzRnSUNBZ2FXWWdLQ0ZwYzFKMWJtNXBibWNwSUh0Y2JpQWdJQ0FnSUNBZ2MzUmhjblFvS1R0Y2JpQWdJQ0I5WEc1OVhHNWNiaThxWEc0Z0lDQWdXMmx1ZEYwNklGQnliMk5sYzNNZ1NVUWdkRzhnWkdWaFkzUnBkbUYwWlZ4dUtpOWNibVY0Y0c5eWRDQmpiMjV6ZENCa1pXRmpkR2wyWVhSbElEMGdiV0Z1WVdkbGNpNWtaV0ZqZEdsMllYUmxPeUpkZlE9PVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvcHJvY2Vzcy9sb29wLmpzXG4gKiogbW9kdWxlIGlkID0gMzZcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbnZhciBUUkFOU0xBVEUgPSAndHJhbnNsYXRlJztcblxuZXhwb3J0cy5kZWZhdWx0ID0ge1xuICAgIHg6IFRSQU5TTEFURSArICdYJyxcbiAgICB5OiBUUkFOU0xBVEUgKyAnWScsXG4gICAgejogVFJBTlNMQVRFICsgJ1onXG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluTnlZeTloWkdGd2RHVnlMMk56Y3k5emRHRjBaUzF0WVhBdWFuTWlYU3dpYm1GdFpYTWlPbHRkTENKdFlYQndhVzVuY3lJNklqczdPMEZCUVVFc1NVRkJUU3haUVVGWkxGZEJRVm83TzJ0Q1FVVlRPMEZCUTFnc1QwRkJSeXhaUVVGWkxFZEJRVm83UVVGRFNDeFBRVUZITEZsQlFWa3NSMEZCV2p0QlFVTklMRTlCUVVjc1dVRkJXU3hIUVVGYUlpd2labWxzWlNJNkluTjBZWFJsTFcxaGNDNXFjeUlzSW5OdmRYSmpaVkp2YjNRaU9pSXZWWE5sY25NdlRXRjBkQzlUYVhSbGN5OXdiM0J0YjNScGIyNGlMQ0p6YjNWeVkyVnpRMjl1ZEdWdWRDSTZXeUpqYjI1emRDQlVVa0ZPVTB4QlZFVWdQU0FuZEhKaGJuTnNZWFJsSnp0Y2JseHVaWGh3YjNKMElHUmxabUYxYkhRZ2UxeHVJQ0FnSUhnNklGUlNRVTVUVEVGVVJTQXJJQ2RZSnl4Y2JpQWdJQ0I1T2lCVVVrRk9VMHhCVkVVZ0t5QW5XU2NzWEc0Z0lDQWdlam9nVkZKQlRsTk1RVlJGSUNzZ0oxb25YRzU5T3lKZGZRPT1cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2FkYXB0ZXIvY3NzL3N0YXRlLW1hcC5qc1xuICoqIG1vZHVsZSBpZCA9IDM3XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfYWxwaGEgPSByZXF1aXJlKCcuLi8uLi92YWx1ZS10eXBlcy9hbHBoYScpO1xuXG52YXIgX2FscGhhMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2FscGhhKTtcblxudmFyIF9heGVzID0gcmVxdWlyZSgnLi4vLi4vdmFsdWUtdHlwZXMvYXhlcycpO1xuXG52YXIgX2F4ZXMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfYXhlcyk7XG5cbnZhciBfY29sb3IgPSByZXF1aXJlKCcuLi8uLi92YWx1ZS10eXBlcy9jb2xvcicpO1xuXG52YXIgX2NvbG9yMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NvbG9yKTtcblxudmFyIF9jb21wbGV4ID0gcmVxdWlyZSgnLi4vLi4vdmFsdWUtdHlwZXMvY29tcGxleCcpO1xuXG52YXIgX2NvbXBsZXgyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY29tcGxleCk7XG5cbnZhciBfc2NhbGUgPSByZXF1aXJlKCcuLi8uLi92YWx1ZS10eXBlcy9zY2FsZScpO1xuXG52YXIgX3NjYWxlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3NjYWxlKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZXhwb3J0cy5kZWZhdWx0ID0ge1xuICAgIGZpbGw6IF9jb2xvcjIuZGVmYXVsdCxcbiAgICBzdHJva2U6IF9jb2xvcjIuZGVmYXVsdCxcbiAgICBzY2FsZTogX3NjYWxlMi5kZWZhdWx0LFxuICAgIHNjYWxlWDogX3NjYWxlMi5kZWZhdWx0LFxuICAgIHNjYWxlWTogX3NjYWxlMi5kZWZhdWx0LFxuICAgIHRyYW5zZm9ybU9yaWdpbjogX2F4ZXMyLmRlZmF1bHQsXG4gICAgZDogX2NvbXBsZXgyLmRlZmF1bHQsXG4gICAgb3BhY2l0eTogX2FscGhhMi5kZWZhdWx0LFxuICAgIGZpbGxPcGFjaXR5OiBfYWxwaGEyLmRlZmF1bHQsXG4gICAgc3Ryb2tlT3BhY2l0eTogX2FscGhhMi5kZWZhdWx0XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluTnlZeTloWkdGd2RHVnlMM04yWnk5MllXeDFaUzEwZVhCbExXMWhjQzVxY3lKZExDSnVZVzFsY3lJNlcxMHNJbTFoY0hCcGJtZHpJam9pT3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenRyUWtGTlpUdEJRVU5ZTEhsQ1FVUlhPMEZCUlZnc01rSkJSbGM3UVVGSFdDd3dRa0ZJVnp0QlFVbFlMREpDUVVwWE8wRkJTMWdzTWtKQlRGYzdRVUZOV0N4dFEwRk9WenRCUVU5WUxIZENRVkJYTzBGQlVWZ3NORUpCVWxjN1FVRlRXQ3huUTBGVVZ6dEJRVlZZTEd0RFFWWlhJaXdpWm1sc1pTSTZJblpoYkhWbExYUjVjR1V0YldGd0xtcHpJaXdpYzI5MWNtTmxVbTl2ZENJNklpOVZjMlZ5Y3k5TllYUjBMMU5wZEdWekwzQnZjRzF2ZEdsdmJpSXNJbk52ZFhKalpYTkRiMjUwWlc1MElqcGJJbWx0Y0c5eWRDQmhiSEJvWVNCbWNtOXRJQ2N1TGk4dUxpOTJZV3gxWlMxMGVYQmxjeTloYkhCb1lTYzdYRzVwYlhCdmNuUWdZWGhsY3lCbWNtOXRJQ2N1TGk4dUxpOTJZV3gxWlMxMGVYQmxjeTloZUdWekp6dGNibWx0Y0c5eWRDQmpiMnh2Y2lCbWNtOXRJQ2N1TGk4dUxpOTJZV3gxWlMxMGVYQmxjeTlqYjJ4dmNpYzdYRzVwYlhCdmNuUWdZMjl0Y0d4bGVDQm1jbTl0SUNjdUxpOHVMaTkyWVd4MVpTMTBlWEJsY3k5amIyMXdiR1Y0Snp0Y2JtbHRjRzl5ZENCelkyRnNaU0JtY205dElDY3VMaTh1TGk5MllXeDFaUzEwZVhCbGN5OXpZMkZzWlNjN1hHNWNibVY0Y0c5eWRDQmtaV1poZFd4MElIdGNiaUFnSUNCbWFXeHNPaUJqYjJ4dmNpeGNiaUFnSUNCemRISnZhMlU2SUdOdmJHOXlMRnh1SUNBZ0lITmpZV3hsT2lCelkyRnNaU3hjYmlBZ0lDQnpZMkZzWlZnNklITmpZV3hsTEZ4dUlDQWdJSE5qWVd4bFdUb2djMk5oYkdVc1hHNGdJQ0FnZEhKaGJuTm1iM0p0VDNKcFoybHVPaUJoZUdWekxGeHVJQ0FnSUdRNklHTnZiWEJzWlhnc1hHNGdJQ0FnYjNCaFkybDBlVG9nWVd4d2FHRXNYRzRnSUNBZ1ptbHNiRTl3WVdOcGRIazZJR0ZzY0doaExGeHVJQ0FnSUhOMGNtOXJaVTl3WVdOcGRIazZJR0ZzY0doaFhHNTlPeUpkZlE9PVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvYWRhcHRlci9zdmcvdmFsdWUtdHlwZS1tYXAuanNcbiAqKiBtb2R1bGUgaWQgPSAzOFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0cy5kZWZhdWx0ID0gYnVpbGQ7XG5cbnZhciBfdXRpbHMgPSByZXF1aXJlKCcuLi8uLi9pbmMvdXRpbHMnKTtcblxudmFyIF90cmFuc2Zvcm1Qcm9wcyA9IHJlcXVpcmUoJy4uL2Nzcy90cmFuc2Zvcm0tcHJvcHMnKTtcblxudmFyIF90cmFuc2Zvcm1Qcm9wczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF90cmFuc2Zvcm1Qcm9wcyk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbnZhciBaRVJPX05PVF9aRVJPID0gMC4wMDAxO1xuXG5mdW5jdGlvbiBidWlsZChzdGF0ZSwgb3JpZ2luKSB7XG4gICAgdmFyIHByb3BzID0ge30sXG4gICAgICAgIGhhc1RyYW5zZm9ybSA9IGZhbHNlLFxuICAgICAgICBzY2FsZSA9IHN0YXRlLnNjYWxlICE9PSB1bmRlZmluZWQgPyBzdGF0ZS5zY2FsZSB8fCBaRVJPX05PVF9aRVJPIDogc3RhdGUuc2NhbGVYIHx8IDEsXG4gICAgICAgIHNjYWxlWSA9IHN0YXRlLnNjYWxlWSAhPT0gdW5kZWZpbmVkID8gc3RhdGUuc2NhbGVZIHx8IFpFUk9fTk9UX1pFUk8gOiBzY2FsZSB8fCAxLFxuICAgICAgICB0cmFuc2Zvcm1PcmlnaW5YID0gb3JpZ2luLngsXG4gICAgICAgIHRyYW5zZm9ybU9yaWdpblkgPSBvcmlnaW4ueSxcbiAgICAgICAgc2NhbGVUcmFuc2Zvcm1YID0gLXRyYW5zZm9ybU9yaWdpblggKiAoc2NhbGUgKiAxKSxcbiAgICAgICAgc2NhbGVUcmFuc2Zvcm1ZID0gLXRyYW5zZm9ybU9yaWdpblkgKiAoc2NhbGVZICogMSksXG4gICAgICAgIHNjYWxlUmVwbGFjZVggPSB0cmFuc2Zvcm1PcmlnaW5YIC8gc2NhbGUsXG4gICAgICAgIHNjYWxlUmVwbGFjZVkgPSB0cmFuc2Zvcm1PcmlnaW5ZIC8gc2NhbGVZLFxuICAgICAgICB0cmFuc2Zvcm0gPSB7XG4gICAgICAgIHRyYW5zbGF0ZTogJ3RyYW5zbGF0ZSgnICsgc3RhdGUudHJhbnNsYXRlWCArICcsICcgKyBzdGF0ZS50cmFuc2xhdGVZICsgJykgJyxcbiAgICAgICAgc2NhbGU6ICd0cmFuc2xhdGUoJyArIHNjYWxlVHJhbnNmb3JtWCArICcsICcgKyBzY2FsZVRyYW5zZm9ybVkgKyAnKSBzY2FsZSgnICsgc2NhbGUgKyAnLCAnICsgc2NhbGVZICsgJykgdHJhbnNsYXRlKCcgKyBzY2FsZVJlcGxhY2VYICsgJywgJyArIHNjYWxlUmVwbGFjZVkgKyAnKSAnLFxuICAgICAgICByb3RhdGU6ICdyb3RhdGUoJyArIHN0YXRlLnJvdGF0ZSArICcsICcgKyB0cmFuc2Zvcm1PcmlnaW5YICsgJywgJyArIHRyYW5zZm9ybU9yaWdpblkgKyAnKSAnLFxuICAgICAgICBza2V3WDogJ3NrZXdYKCcgKyBzdGF0ZS5za2V3WCArICcpICcsXG4gICAgICAgIHNrZXdZOiAnc2tld1koJyArIHN0YXRlLnNrZXdZICsgJykgJ1xuICAgIH07XG5cbiAgICBmb3IgKHZhciBrZXkgaW4gc3RhdGUpIHtcbiAgICAgICAgaWYgKHN0YXRlLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICAgIGlmIChfdHJhbnNmb3JtUHJvcHMyLmRlZmF1bHRba2V5XSkge1xuICAgICAgICAgICAgICAgIGhhc1RyYW5zZm9ybSA9IHRydWU7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHByb3BzWygwLCBfdXRpbHMuY2FtZWxUb0Rhc2gpKGtleSldID0gc3RhdGVba2V5XTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGlmIChoYXNUcmFuc2Zvcm0pIHtcbiAgICAgICAgcHJvcHMudHJhbnNmb3JtID0gJyc7XG5cbiAgICAgICAgZm9yICh2YXIga2V5IGluIHRyYW5zZm9ybSkge1xuICAgICAgICAgICAgaWYgKHRyYW5zZm9ybS5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgICAgICAgdmFyIGRlZmF1bHRWYWx1ZSA9IGtleSA9PT0gJ3NjYWxlJyA/ICcxJyA6ICcwJztcbiAgICAgICAgICAgICAgICBwcm9wcy50cmFuc2Zvcm0gKz0gdHJhbnNmb3JtW2tleV0ucmVwbGFjZSgvdW5kZWZpbmVkL2csIGRlZmF1bHRWYWx1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gcHJvcHM7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5OeVl5OWhaR0Z3ZEdWeUwzTjJaeTlpZFdsc1pDNXFjeUpkTENKdVlXMWxjeUk2VzEwc0ltMWhjSEJwYm1keklqb2lPenM3YTBKQlMzZENPenM3T3pzN096czdPMEZCUm5oQ0xFbEJRVTBzWjBKQlFXZENMRTFCUVdoQ096dEJRVVZUTEZOQlFWTXNTMEZCVkN4RFFVRmxMRXRCUVdZc1JVRkJjMElzVFVGQmRFSXNSVUZCT0VJN1FVRkRla01zVVVGQlNTeFJRVUZSTEVWQlFWSTdVVUZEUVN4bFFVRmxMRXRCUVdZN1VVRkRRU3hSUVVGUkxFMUJRVTBzUzBGQlRpeExRVUZuUWl4VFFVRm9RaXhIUVVFMFFpeE5RVUZOTEV0QlFVNHNTVUZCWlN4aFFVRm1MRWRCUVN0Q0xFMUJRVTBzVFVGQlRpeEpRVUZuUWl4RFFVRm9RanRSUVVOdVJTeFRRVUZUTEUxQlFVMHNUVUZCVGl4TFFVRnBRaXhUUVVGcVFpeEhRVUUyUWl4TlFVRk5MRTFCUVU0c1NVRkJaMElzWVVGQmFFSXNSMEZCWjBNc1UwRkJVeXhEUVVGVU8xRkJRM1JGTEcxQ1FVRnRRaXhQUVVGUExFTkJRVkE3VVVGRGJrSXNiVUpCUVcxQ0xFOUJRVThzUTBGQlVEdFJRVU51UWl4clFrRkJhMElzUTBGQlJTeG5Ra0ZCUml4SlFVRnpRaXhSUVVGUkxFTkJRVklzUTBGQmRFSTdVVUZEYkVJc2EwSkJRV3RDTEVOQlFVVXNaMEpCUVVZc1NVRkJjMElzVTBGQlV5eERRVUZVTEVOQlFYUkNPMUZCUTJ4Q0xHZENRVUZuUWl4dFFrRkJiVUlzUzBGQmJrSTdVVUZEYUVJc1owSkJRV2RDTEcxQ1FVRnRRaXhOUVVGdVFqdFJRVU5vUWl4WlFVRlpPMEZCUTFJc2EwTkJRWGRDTEUxQlFVMHNWVUZCVGl4VlFVRnhRaXhOUVVGTkxGVkJRVTRzVDBGQk4wTTdRVUZEUVN3NFFrRkJiMElzZVVKQlFXOUNMQ3RDUVVFd1FpeGxRVUZWTERCQ1FVRnhRaXgxUWtGQmEwSXNiMEpCUVc1SU8wRkJRMEVzTkVKQlFXdENMRTFCUVUwc1RVRkJUaXhWUVVGcFFpd3dRa0ZCY1VJc2RVSkJRWGhFTzBGQlEwRXNNRUpCUVdkQ0xFMUJRVTBzUzBGQlRpeFBRVUZvUWp0QlFVTkJMREJDUVVGblFpeE5RVUZOTEV0QlFVNHNUMEZCYUVJN1MwRk1TaXhEUVZoeFF6czdRVUZ0UW5wRExGTkJRVXNzU1VGQlNTeEhRVUZLTEVsQlFWY3NTMEZCYUVJc1JVRkJkVUk3UVVGRGJrSXNXVUZCU1N4TlFVRk5MR05CUVU0c1EwRkJjVUlzUjBGQmNrSXNRMEZCU2l4RlFVRXJRanRCUVVNelFpeG5Ra0ZCU1N4NVFrRkJaU3hIUVVGbUxFTkJRVW9zUlVGQmVVSTdRVUZEY2tJc0swSkJRV1VzU1VGQlppeERRVVJ4UWp0aFFVRjZRaXhOUVVWUE8wRkJRMGdzYzBKQlFVMHNkMEpCUVZrc1IwRkJXaXhEUVVGT0xFbEJRVEJDTEUxQlFVMHNSMEZCVGl4RFFVRXhRaXhEUVVSSE8yRkJSbEE3VTBGRVNqdExRVVJLT3p0QlFWVkJMRkZCUVVrc1dVRkJTaXhGUVVGclFqdEJRVU5rTEdOQlFVMHNVMEZCVGl4SFFVRnJRaXhGUVVGc1FpeERRVVJqT3p0QlFVZGtMR0ZCUVVzc1NVRkJTU3hIUVVGS0xFbEJRVmNzVTBGQmFFSXNSVUZCTWtJN1FVRkRka0lzWjBKQlFVa3NWVUZCVlN4alFVRldMRU5CUVhsQ0xFZEJRWHBDTEVOQlFVb3NSVUZCYlVNN1FVRkRMMElzYjBKQlFVMHNaVUZCWlN4SFFVRkRMRXRCUVZFc1QwRkJVaXhIUVVGdFFpeEhRVUZ3UWl4SFFVRXdRaXhIUVVFeFFpeERRVVJWTzBGQlJTOUNMSE5DUVVGTkxGTkJRVTRzU1VGQmJVSXNWVUZCVlN4SFFVRldMRVZCUVdVc1QwRkJaaXhEUVVGMVFpeFpRVUYyUWl4RlFVRnhReXhaUVVGeVF5eERRVUZ1UWl4RFFVWXJRanRoUVVGdVF6dFRRVVJLTzB0QlNFbzdPMEZCVjBFc1YwRkJUeXhMUVVGUUxFTkJlRU41UXp0RFFVRTVRaUlzSW1acGJHVWlPaUppZFdsc1pDNXFjeUlzSW5OdmRYSmpaVkp2YjNRaU9pSXZWWE5sY25NdlRXRjBkQzlUYVhSbGN5OXdiM0J0YjNScGIyNGlMQ0p6YjNWeVkyVnpRMjl1ZEdWdWRDSTZXeUpwYlhCdmNuUWdleUJqWVcxbGJGUnZSR0Z6YUNCOUlHWnliMjBnSnk0dUx5NHVMMmx1WXk5MWRHbHNjeWM3WEc1cGJYQnZjblFnZEhKaGJuTm1iM0p0VUhKdmNITWdabkp2YlNBbkxpNHZZM056TDNSeVlXNXpabTl5YlMxd2NtOXdjeWM3WEc1Y2JtTnZibk4wSUZwRlVrOWZUazlVWDFwRlVrOGdQU0F3TGpBd01ERTdYRzVjYm1WNGNHOXlkQ0JrWldaaGRXeDBJR1oxYm1OMGFXOXVJR0oxYVd4a0tITjBZWFJsTENCdmNtbG5hVzRwSUh0Y2JpQWdJQ0JzWlhRZ2NISnZjSE1nUFNCN2ZTeGNiaUFnSUNBZ0lDQWdhR0Z6VkhKaGJuTm1iM0p0SUQwZ1ptRnNjMlVzWEc0Z0lDQWdJQ0FnSUhOallXeGxJRDBnYzNSaGRHVXVjMk5oYkdVZ0lUMDlJSFZ1WkdWbWFXNWxaQ0EvSUhOMFlYUmxMbk5qWVd4bElIeDhJRnBGVWs5ZlRrOVVYMXBGVWs4Z09pQnpkR0YwWlM1elkyRnNaVmdnZkh3Z01TeGNiaUFnSUNBZ0lDQWdjMk5oYkdWWklEMGdjM1JoZEdVdWMyTmhiR1ZaSUNFOVBTQjFibVJsWm1sdVpXUWdQeUJ6ZEdGMFpTNXpZMkZzWlZrZ2ZId2dXa1ZTVDE5T1QxUmZXa1ZTVHlBNklITmpZV3hsSUh4OElERXNYRzRnSUNBZ0lDQWdJSFJ5WVc1elptOXliVTl5YVdkcGJsZ2dQU0J2Y21sbmFXNHVlQ3hjYmlBZ0lDQWdJQ0FnZEhKaGJuTm1iM0p0VDNKcFoybHVXU0E5SUc5eWFXZHBiaTU1TEZ4dUlDQWdJQ0FnSUNCelkyRnNaVlJ5WVc1elptOXliVmdnUFNBdElIUnlZVzV6Wm05eWJVOXlhV2RwYmxnZ0tpQW9jMk5oYkdVZ0tpQXhLU3hjYmlBZ0lDQWdJQ0FnYzJOaGJHVlVjbUZ1YzJadmNtMVpJRDBnTFNCMGNtRnVjMlp2Y20xUGNtbG5hVzVaSUNvZ0tITmpZV3hsV1NBcUlERXBMRnh1SUNBZ0lDQWdJQ0J6WTJGc1pWSmxjR3hoWTJWWUlEMGdkSEpoYm5ObWIzSnRUM0pwWjJsdVdDQXZJSE5qWVd4bExGeHVJQ0FnSUNBZ0lDQnpZMkZzWlZKbGNHeGhZMlZaSUQwZ2RISmhibk5tYjNKdFQzSnBaMmx1V1NBdklITmpZV3hsV1N4Y2JpQWdJQ0FnSUNBZ2RISmhibk5tYjNKdElEMGdlMXh1SUNBZ0lDQWdJQ0FnSUNBZ2RISmhibk5zWVhSbE9pQmdkSEpoYm5Oc1lYUmxLQ1I3YzNSaGRHVXVkSEpoYm5Oc1lYUmxXSDBzSUNSN2MzUmhkR1V1ZEhKaGJuTnNZWFJsV1gwcElHQXNYRzRnSUNBZ0lDQWdJQ0FnSUNCelkyRnNaVG9nWUhSeVlXNXpiR0YwWlNna2UzTmpZV3hsVkhKaGJuTm1iM0p0V0gwc0lDUjdjMk5oYkdWVWNtRnVjMlp2Y20xWmZTa2djMk5oYkdVb0pIdHpZMkZzWlgwc0lDUjdjMk5oYkdWWmZTa2dkSEpoYm5Oc1lYUmxLQ1I3YzJOaGJHVlNaWEJzWVdObFdIMHNJQ1I3YzJOaGJHVlNaWEJzWVdObFdYMHBJR0FzWEc0Z0lDQWdJQ0FnSUNBZ0lDQnliM1JoZEdVNklHQnliM1JoZEdVb0pIdHpkR0YwWlM1eWIzUmhkR1Y5TENBa2UzUnlZVzV6Wm05eWJVOXlhV2RwYmxoOUxDQWtlM1J5WVc1elptOXliVTl5YVdkcGJsbDlLU0JnTEZ4dUlDQWdJQ0FnSUNBZ0lDQWdjMnRsZDFnNklHQnphMlYzV0Nna2UzTjBZWFJsTG5OclpYZFlmU2tnWUN4Y2JpQWdJQ0FnSUNBZ0lDQWdJSE5yWlhkWk9pQmdjMnRsZDFrb0pIdHpkR0YwWlM1emEyVjNXWDBwSUdCY2JpQWdJQ0FnSUNBZ2ZUdGNibHh1SUNBZ0lHWnZjaUFvYkdWMElHdGxlU0JwYmlCemRHRjBaU2tnZTF4dUlDQWdJQ0FnSUNCcFppQW9jM1JoZEdVdWFHRnpUM2R1VUhKdmNHVnlkSGtvYTJWNUtTa2dlMXh1SUNBZ0lDQWdJQ0FnSUNBZ2FXWWdLSFJ5WVc1elptOXliVkJ5YjNCelcydGxlVjBwSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCb1lYTlVjbUZ1YzJadmNtMGdQU0IwY25WbE8xeHVJQ0FnSUNBZ0lDQWdJQ0FnZlNCbGJITmxJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0J3Y205d2MxdGpZVzFsYkZSdlJHRnphQ2hyWlhrcFhTQTlJSE4wWVhSbFcydGxlVjA3WEc0Z0lDQWdJQ0FnSUNBZ0lDQjlYRzRnSUNBZ0lDQWdJSDFjYmlBZ0lDQjlYRzVjYmlBZ0lDQnBaaUFvYUdGelZISmhibk5tYjNKdEtTQjdYRzRnSUNBZ0lDQWdJSEJ5YjNCekxuUnlZVzV6Wm05eWJTQTlJQ2NuTzF4dVhHNGdJQ0FnSUNBZ0lHWnZjaUFvYkdWMElHdGxlU0JwYmlCMGNtRnVjMlp2Y20wcElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUdsbUlDaDBjbUZ1YzJadmNtMHVhR0Z6VDNkdVVISnZjR1Z5ZEhrb2EyVjVLU2tnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUdOdmJuTjBJR1JsWm1GMWJIUldZV3gxWlNBOUlDaHJaWGtnUFQwOUlDZHpZMkZzWlNjcElEOGdKekVuSURvZ0p6QW5PMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJSEJ5YjNCekxuUnlZVzV6Wm05eWJTQXJQU0IwY21GdWMyWnZjbTFiYTJWNVhTNXlaWEJzWVdObEtDOTFibVJsWm1sdVpXUXZaeXdnWkdWbVlYVnNkRlpoYkhWbEtUdGNiaUFnSUNBZ0lDQWdJQ0FnSUgxY2JpQWdJQ0FnSUNBZ2ZWeHVJQ0FnSUgxY2JseHVJQ0FnSUhKbGRIVnliaUJ3Y205d2N6dGNibjBpWFgwPVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvYWRhcHRlci9zdmcvYnVpbGQuanNcbiAqKiBtb2R1bGUgaWQgPSAzOVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX2FuZ2xlID0gcmVxdWlyZSgnLi4vLi4vdmFsdWUtdHlwZXMvYW5nbGUnKTtcblxudmFyIF9hbmdsZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9hbmdsZSk7XG5cbnZhciBfYWxwaGEgPSByZXF1aXJlKCcuLi8uLi92YWx1ZS10eXBlcy9hbHBoYScpO1xuXG52YXIgX2FscGhhMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2FscGhhKTtcblxudmFyIF9heGVzID0gcmVxdWlyZSgnLi4vLi4vdmFsdWUtdHlwZXMvYXhlcycpO1xuXG52YXIgX2F4ZXMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfYXhlcyk7XG5cbnZhciBfY29sb3IgPSByZXF1aXJlKCcuLi8uLi92YWx1ZS10eXBlcy9jb2xvcicpO1xuXG52YXIgX2NvbG9yMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NvbG9yKTtcblxudmFyIF9zY2FsZSA9IHJlcXVpcmUoJy4uLy4uL3ZhbHVlLXR5cGVzL3NjYWxlJyk7XG5cbnZhciBfc2NhbGUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfc2NhbGUpO1xuXG52YXIgX3NoYWRvdyA9IHJlcXVpcmUoJy4uLy4uL3ZhbHVlLXR5cGVzL3NoYWRvdycpO1xuXG52YXIgX3NoYWRvdzIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9zaGFkb3cpO1xuXG52YXIgX3Bvc2l0aW9ucyA9IHJlcXVpcmUoJy4uLy4uL3ZhbHVlLXR5cGVzL3Bvc2l0aW9ucycpO1xuXG52YXIgX3Bvc2l0aW9uczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9wb3NpdGlvbnMpO1xuXG52YXIgX3B4ID0gcmVxdWlyZSgnLi4vLi4vdmFsdWUtdHlwZXMvcHgnKTtcblxudmFyIF9weDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9weCk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmV4cG9ydHMuZGVmYXVsdCA9IHtcbiAgICAvLyBDb2xvciBwcm9wc1xuICAgIGNvbG9yOiBfY29sb3IyLmRlZmF1bHQsXG4gICAgYmFja2dyb3VuZENvbG9yOiBfY29sb3IyLmRlZmF1bHQsXG4gICAgb3V0bGluZUNvbG9yOiBfY29sb3IyLmRlZmF1bHQsXG4gICAgZmlsbDogX2NvbG9yMi5kZWZhdWx0LFxuICAgIHN0cm9rZTogX2NvbG9yMi5kZWZhdWx0LFxuXG4gICAgLy8gQm9yZGVyIHByb3BzXG4gICAgYm9yZGVyQ29sb3I6IF9jb2xvcjIuZGVmYXVsdCxcbiAgICBib3JkZXJUb3BDb2xvcjogX2NvbG9yMi5kZWZhdWx0LFxuICAgIGJvcmRlclJpZ2h0Q29sb3I6IF9jb2xvcjIuZGVmYXVsdCxcbiAgICBib3JkZXJCb3R0b21Db2xvcjogX2NvbG9yMi5kZWZhdWx0LFxuICAgIGJvcmRlckxlZnRDb2xvcjogX2NvbG9yMi5kZWZhdWx0LFxuICAgIGJvcmRlclJhZGl1czogX3B4Mi5kZWZhdWx0LFxuXG4gICAgLy8gUG9zaXRpb25pbmdcbiAgICBtYXJnaW46IF9wb3NpdGlvbnMyLmRlZmF1bHQsXG4gICAgcGFkZGluZzogX3Bvc2l0aW9uczIuZGVmYXVsdCxcbiAgICB3aWR0aDogX3B4Mi5kZWZhdWx0LFxuICAgIGhlaWdodDogX3B4Mi5kZWZhdWx0LFxuXG4gICAgLy8gQXhlc1xuICAgIGJhY2tncm91bmRQb3NpdGlvbjogX2F4ZXMyLmRlZmF1bHQsXG4gICAgcGVyc3BlY3RpdmVPcmlnaW46IF9heGVzMi5kZWZhdWx0LFxuICAgIHRyYW5zZm9ybU9yaWdpbjogX2F4ZXMyLmRlZmF1bHQsXG5cbiAgICAvLyBTaGFkb3dzXG4gICAgdGV4dFNoYWRvdzogX3NoYWRvdzIuZGVmYXVsdCxcbiAgICBib3hTaGFkb3c6IF9zaGFkb3cyLmRlZmF1bHQsXG5cbiAgICAvLyBUcmFuc2Zvcm0gcHJvcGVydGllc1xuICAgIHJvdGF0ZTogX2FuZ2xlMi5kZWZhdWx0LFxuICAgIHJvdGF0ZVg6IF9hbmdsZTIuZGVmYXVsdCxcbiAgICByb3RhdGVZOiBfYW5nbGUyLmRlZmF1bHQsXG4gICAgcm90YXRlWjogX2FuZ2xlMi5kZWZhdWx0LFxuICAgIHNjYWxlOiBfc2NhbGUyLmRlZmF1bHQsXG4gICAgc2NhbGVYOiBfc2NhbGUyLmRlZmF1bHQsXG4gICAgc2NhbGVZOiBfc2NhbGUyLmRlZmF1bHQsXG4gICAgc2NhbGVaOiBfc2NhbGUyLmRlZmF1bHQsXG4gICAgc2tld1g6IF9hbmdsZTIuZGVmYXVsdCxcbiAgICBza2V3WTogX2FuZ2xlMi5kZWZhdWx0LFxuICAgIGRpc3RhbmNlOiBfcHgyLmRlZmF1bHQsXG4gICAgdHJhbnNsYXRlWDogX3B4Mi5kZWZhdWx0LFxuICAgIHRyYW5zbGF0ZVk6IF9weDIuZGVmYXVsdCxcbiAgICB0cmFuc2xhdGVaOiBfcHgyLmRlZmF1bHQsXG4gICAgcGVyc3BlY3RpdmU6IF9weDIuZGVmYXVsdCxcbiAgICBvcGFjaXR5OiBfYWxwaGEyLmRlZmF1bHRcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5OeVl5OWhaR0Z3ZEdWeUwyTnpjeTkyWVd4MVpTMTBlWEJsTFcxaGNDNXFjeUpkTENKdVlXMWxjeUk2VzEwc0ltMWhjSEJwYm1keklqb2lPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenRyUWtGVFpUczdRVUZGV0N3d1FrRkdWenRCUVVkWUxHOURRVWhYTzBGQlNWZ3NhVU5CU2xjN1FVRkxXQ3g1UWtGTVZ6dEJRVTFZTERKQ1FVNVhPenM3UVVGVFdDeG5RMEZVVnp0QlFWVllMRzFEUVZaWE8wRkJWMWdzY1VOQldGYzdRVUZaV0N4elEwRmFWenRCUVdGWUxHOURRV0pYTzBGQlkxZ3NPRUpCWkZjN096dEJRV2xDV0N3clFrRnFRbGM3UVVGclFsZ3NaME5CYkVKWE8wRkJiVUpZTEhWQ1FXNUNWenRCUVc5Q1dDeDNRa0Z3UWxjN096dEJRWFZDV0N4elEwRjJRbGM3UVVGM1FsZ3NjVU5CZUVKWE8wRkJlVUpZTEcxRFFYcENWenM3TzBGQk5FSllMR2REUVRWQ1Z6dEJRVFpDV0N3clFrRTNRbGM3T3p0QlFXZERXQ3d5UWtGb1ExYzdRVUZwUTFnc05FSkJha05YTzBGQmEwTllMRFJDUVd4RFZ6dEJRVzFEV0N3MFFrRnVRMWM3UVVGdlExZ3NNRUpCY0VOWE8wRkJjVU5ZTERKQ1FYSkRWenRCUVhORFdDd3lRa0YwUTFjN1FVRjFRMWdzTWtKQmRrTlhPMEZCZDBOWUxEQkNRWGhEVnp0QlFYbERXQ3d3UWtGNlExYzdRVUV3UTFnc01FSkJNVU5YTzBGQk1rTllMRFJDUVRORFZ6dEJRVFJEV0N3MFFrRTFRMWM3UVVFMlExZ3NORUpCTjBOWE8wRkJPRU5ZTERaQ1FUbERWenRCUVN0RFdDdzBRa0V2UTFjaUxDSm1hV3hsSWpvaWRtRnNkV1V0ZEhsd1pTMXRZWEF1YW5NaUxDSnpiM1Z5WTJWU2IyOTBJam9pTDFWelpYSnpMMDFoZEhRdlUybDBaWE12Y0c5d2JXOTBhVzl1SWl3aWMyOTFjbU5sYzBOdmJuUmxiblFpT2xzaWFXMXdiM0owSUdGdVoyeGxJR1p5YjIwZ0p5NHVMeTR1TDNaaGJIVmxMWFI1Y0dWekwyRnVaMnhsSnp0Y2JtbHRjRzl5ZENCaGJIQm9ZU0JtY205dElDY3VMaTh1TGk5MllXeDFaUzEwZVhCbGN5OWhiSEJvWVNjN1hHNXBiWEJ2Y25RZ1lYaGxjeUJtY205dElDY3VMaTh1TGk5MllXeDFaUzEwZVhCbGN5OWhlR1Z6Snp0Y2JtbHRjRzl5ZENCamIyeHZjaUJtY205dElDY3VMaTh1TGk5MllXeDFaUzEwZVhCbGN5OWpiMnh2Y2ljN1hHNXBiWEJ2Y25RZ2MyTmhiR1VnWm5KdmJTQW5MaTR2TGk0dmRtRnNkV1V0ZEhsd1pYTXZjMk5oYkdVbk8xeHVhVzF3YjNKMElITm9ZV1J2ZHlCbWNtOXRJQ2N1TGk4dUxpOTJZV3gxWlMxMGVYQmxjeTl6YUdGa2IzY25PMXh1YVcxd2IzSjBJSEJ2YzJsMGFXOXVjeUJtY205dElDY3VMaTh1TGk5MllXeDFaUzEwZVhCbGN5OXdiM05wZEdsdmJuTW5PMXh1YVcxd2IzSjBJSEI0SUdaeWIyMGdKeTR1THk0dUwzWmhiSFZsTFhSNWNHVnpMM0I0Snp0Y2JseHVaWGh3YjNKMElHUmxabUYxYkhRZ2UxeHVJQ0FnSUM4dklFTnZiRzl5SUhCeWIzQnpYRzRnSUNBZ1kyOXNiM0k2SUdOdmJHOXlMRnh1SUNBZ0lHSmhZMnRuY205MWJtUkRiMnh2Y2pvZ1kyOXNiM0lzWEc0Z0lDQWdiM1YwYkdsdVpVTnZiRzl5T2lCamIyeHZjaXhjYmlBZ0lDQm1hV3hzT2lCamIyeHZjaXhjYmlBZ0lDQnpkSEp2YTJVNklHTnZiRzl5TEZ4dVhHNGdJQ0FnTHk4Z1FtOXlaR1Z5SUhCeWIzQnpYRzRnSUNBZ1ltOXlaR1Z5UTI5c2IzSTZJR052Ykc5eUxGeHVJQ0FnSUdKdmNtUmxjbFJ2Y0VOdmJHOXlPaUJqYjJ4dmNpeGNiaUFnSUNCaWIzSmtaWEpTYVdkb2RFTnZiRzl5T2lCamIyeHZjaXhjYmlBZ0lDQmliM0prWlhKQ2IzUjBiMjFEYjJ4dmNqb2dZMjlzYjNJc1hHNGdJQ0FnWW05eVpHVnlUR1ZtZEVOdmJHOXlPaUJqYjJ4dmNpeGNiaUFnSUNCaWIzSmtaWEpTWVdScGRYTTZJSEI0TEZ4dVhHNGdJQ0FnTHk4Z1VHOXphWFJwYjI1cGJtZGNiaUFnSUNCdFlYSm5hVzQ2SUhCdmMybDBhVzl1Y3l4Y2JpQWdJQ0J3WVdSa2FXNW5PaUJ3YjNOcGRHbHZibk1zWEc0Z0lDQWdkMmxrZEdnNklIQjRMRnh1SUNBZ0lHaGxhV2RvZERvZ2NIZ3NYRzVjYmlBZ0lDQXZMeUJCZUdWelhHNGdJQ0FnWW1GamEyZHliM1Z1WkZCdmMybDBhVzl1T2lCaGVHVnpMRnh1SUNBZ0lIQmxjbk53WldOMGFYWmxUM0pwWjJsdU9pQmhlR1Z6TEZ4dUlDQWdJSFJ5WVc1elptOXliVTl5YVdkcGJqb2dZWGhsY3l4Y2JseHVJQ0FnSUM4dklGTm9ZV1J2ZDNOY2JpQWdJQ0IwWlhoMFUyaGhaRzkzT2lCemFHRmtiM2NzWEc0Z0lDQWdZbTk0VTJoaFpHOTNPaUJ6YUdGa2IzY3NJQ0FnWEc1Y2JpQWdJQ0F2THlCVWNtRnVjMlp2Y20wZ2NISnZjR1Z5ZEdsbGMxeHVJQ0FnSUhKdmRHRjBaVG9nWVc1bmJHVXNYRzRnSUNBZ2NtOTBZWFJsV0RvZ1lXNW5iR1VzWEc0Z0lDQWdjbTkwWVhSbFdUb2dZVzVuYkdVc1hHNGdJQ0FnY205MFlYUmxXam9nWVc1bmJHVXNYRzRnSUNBZ2MyTmhiR1U2SUhOallXeGxMRnh1SUNBZ0lITmpZV3hsV0RvZ2MyTmhiR1VzWEc0Z0lDQWdjMk5oYkdWWk9pQnpZMkZzWlN4Y2JpQWdJQ0J6WTJGc1pWbzZJSE5qWVd4bExGeHVJQ0FnSUhOclpYZFlPaUJoYm1kc1pTeGNiaUFnSUNCemEyVjNXVG9nWVc1bmJHVXNYRzRnSUNBZ1pHbHpkR0Z1WTJVNklIQjRMRnh1SUNBZ0lIUnlZVzV6YkdGMFpWZzZJSEI0TEZ4dUlDQWdJSFJ5WVc1emJHRjBaVms2SUhCNExGeHVJQ0FnSUhSeVlXNXpiR0YwWlZvNklIQjRMRnh1SUNBZ0lIQmxjbk53WldOMGFYWmxPaUJ3ZUN4Y2JpQWdJQ0J2Y0dGamFYUjVPaUJoYkhCb1lWeHVmVHNpWFgwPVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvYWRhcHRlci9jc3MvdmFsdWUtdHlwZS1tYXAuanNcbiAqKiBtb2R1bGUgaWQgPSA0MFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX3RyYW5zZm9ybVByb3BzID0gcmVxdWlyZSgnLi90cmFuc2Zvcm0tcHJvcHMnKTtcblxudmFyIF90cmFuc2Zvcm1Qcm9wczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF90cmFuc2Zvcm1Qcm9wcyk7XG5cbnZhciBfcHJlZml4ZXIgPSByZXF1aXJlKCcuL3ByZWZpeGVyJyk7XG5cbnZhciBfcHJlZml4ZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcHJlZml4ZXIpO1xuXG52YXIgX3V0aWxzID0gcmVxdWlyZSgnLi4vLi4vaW5jL3V0aWxzJyk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbnZhciBUUkFOU0xBVEVfWiA9ICd0cmFuc2xhdGVaJztcblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gKHN0YXRlLCBkaXNhYmxlSGFyZHdhcmVBY2NlbGVyYXRpb24pIHtcbiAgICB2YXIgcHJvcGVydHlTdHJpbmcgPSAnJztcbiAgICB2YXIgdHJhbnNmb3JtU3RyaW5nID0gJyc7XG4gICAgdmFyIHRyYW5zZm9ybUhhc1ogPSBmYWxzZTtcblxuICAgIGZvciAodmFyIGtleSBpbiBzdGF0ZSkge1xuICAgICAgICBpZiAoc3RhdGUuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgICAgdmFyIHZhbHVlID0gc3RhdGVba2V5XTtcblxuICAgICAgICAgICAgaWYgKF90cmFuc2Zvcm1Qcm9wczIuZGVmYXVsdFtrZXldKSB7XG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtU3RyaW5nICs9IGtleSArICcoJyArIHZhbHVlICsgJykgJztcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm1IYXNaID0ga2V5ID09PSBUUkFOU0xBVEVfWiA/IHRydWUgOiB0cmFuc2Zvcm1IYXNaO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBwcm9wZXJ0eVN0cmluZyArPSAnOycgKyAoMCwgX3ByZWZpeGVyMi5kZWZhdWx0KSgoMCwgX3V0aWxzLmNhbWVsVG9EYXNoKShrZXkpKSArICc6JyArIHZhbHVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHRyYW5zZm9ybVN0cmluZyAhPT0gJycpIHtcbiAgICAgICAgaWYgKCF0cmFuc2Zvcm1IYXNaICYmICFkaXNhYmxlSGFyZHdhcmVBY2NlbGVyYXRpb24pIHtcbiAgICAgICAgICAgIHRyYW5zZm9ybVN0cmluZyArPSBUUkFOU0xBVEVfWiArICcoMHB4KSc7XG4gICAgICAgIH1cblxuICAgICAgICBwcm9wZXJ0eVN0cmluZyArPSAnOycgKyAoMCwgX3ByZWZpeGVyMi5kZWZhdWx0KSgndHJhbnNmb3JtJykgKyAnOicgKyB0cmFuc2Zvcm1TdHJpbmc7XG4gICAgfVxuXG4gICAgcmV0dXJuIHByb3BlcnR5U3RyaW5nO1xufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbk55WXk5aFpHRndkR1Z5TDJOemN5OWlkV2xzWkM1cWN5SmRMQ0p1WVcxbGN5STZXMTBzSW0xaGNIQnBibWR6SWpvaU96czdPenM3T3pzN096czdPenM3TzBGQlNVRXNTVUZCVFN4alFVRmpMRmxCUVdRN08ydENRVVZUTEZWQlFVTXNTMEZCUkN4RlFVRlJMREpDUVVGU0xFVkJRWGRETzBGQlEyNUVMRkZCUVVrc2FVSkJRV2xDTEVWQlFXcENMRU5CUkN0RE8wRkJSVzVFTEZGQlFVa3NhMEpCUVd0Q0xFVkJRV3hDTEVOQlJpdERPMEZCUjI1RUxGRkJRVWtzWjBKQlFXZENMRXRCUVdoQ0xFTkJTQ3RET3p0QlFVdHVSQ3hUUVVGTExFbEJRVWtzUjBGQlNpeEpRVUZYTEV0QlFXaENMRVZCUVhWQ08wRkJRMjVDTEZsQlFVa3NUVUZCVFN4alFVRk9MRU5CUVhGQ0xFZEJRWEpDTEVOQlFVb3NSVUZCSzBJN1FVRkRNMElzWjBKQlFVMHNVVUZCVVN4TlFVRk5MRWRCUVU0c1EwRkJVaXhEUVVSeFFqczdRVUZITTBJc1owSkJRVWtzZVVKQlFXVXNSMEZCWml4RFFVRktMRVZCUVhsQ08wRkJRM0pDTEcxRFFVRnRRaXhOUVVGTkxFZEJRVTRzUjBGQldTeExRVUZhTEVkQlFXOUNMRWxCUVhCQ0xFTkJSRVU3UVVGRmNrSXNaME5CUVdkQ0xFZEJRVU1zUzBGQlVTeFhRVUZTTEVkQlFYVkNMRWxCUVhoQ0xFZEJRU3RDTEdGQlFTOUNMRU5CUmtzN1lVRkJla0lzVFVGSlR6dEJRVU5JTEd0RFFVRnJRaXhOUVVGTkxIZENRVUZUTEhkQ1FVRlpMRWRCUVZvc1EwRkJWQ3hEUVVGT0xFZEJRVzFETEVkQlFXNURMRWRCUVhsRExFdEJRWHBETEVOQlJHWTdZVUZLVUR0VFFVaEtPMHRCUkVvN08wRkJZMEVzVVVGQlNTeHZRa0ZCYjBJc1JVRkJjRUlzUlVGQmQwSTdRVUZEZUVJc1dVRkJTU3hEUVVGRExHRkJRVVFzU1VGQmEwSXNRMEZCUXl3eVFrRkJSQ3hGUVVFNFFqdEJRVU5vUkN3clFrRkJiVUlzWTBGQll5eFBRVUZrTEVOQlJEWkNPMU5CUVhCRU96dEJRVWxCTERCQ1FVRnJRaXhOUVVGTkxIZENRVUZUTEZkQlFWUXNRMEZCVGl4SFFVRTRRaXhIUVVFNVFpeEhRVUZ2UXl4bFFVRndReXhEUVV4Tk8wdEJRVFZDT3p0QlFWRkJMRmRCUVU4c1kwRkJVQ3hEUVROQ2JVUTdRMEZCZUVNaUxDSm1hV3hsSWpvaVluVnBiR1F1YW5NaUxDSnpiM1Z5WTJWU2IyOTBJam9pTDFWelpYSnpMMDFoZEhRdlUybDBaWE12Y0c5d2JXOTBhVzl1SWl3aWMyOTFjbU5sYzBOdmJuUmxiblFpT2xzaWFXMXdiM0owSUhSeVlXNXpabTl5YlZCeWIzQnpJR1p5YjIwZ0p5NHZkSEpoYm5ObWIzSnRMWEJ5YjNCekp6dGNibWx0Y0c5eWRDQndjbVZtYVhobGNpQm1jbTl0SUNjdUwzQnlaV1pwZUdWeUp6dGNibWx0Y0c5eWRDQjdJR05oYldWc1ZHOUVZWE5vSUgwZ1puSnZiU0FuTGk0dkxpNHZhVzVqTDNWMGFXeHpKenRjYmx4dVkyOXVjM1FnVkZKQlRsTk1RVlJGWDFvZ1BTQW5kSEpoYm5Oc1lYUmxXaWM3WEc1Y2JtVjRjRzl5ZENCa1pXWmhkV3gwSUNoemRHRjBaU3dnWkdsellXSnNaVWhoY21SM1lYSmxRV05qWld4bGNtRjBhVzl1S1NBOVBpQjdYRzRnSUNBZ2JHVjBJSEJ5YjNCbGNuUjVVM1J5YVc1bklEMGdKeWM3WEc0Z0lDQWdiR1YwSUhSeVlXNXpabTl5YlZOMGNtbHVaeUE5SUNjbk8xeHVJQ0FnSUd4bGRDQjBjbUZ1YzJadmNtMUlZWE5hSUQwZ1ptRnNjMlU3WEc1Y2JpQWdJQ0JtYjNJZ0tHeGxkQ0JyWlhrZ2FXNGdjM1JoZEdVcElIdGNiaUFnSUNBZ0lDQWdhV1lnS0hOMFlYUmxMbWhoYzA5M2JsQnliM0JsY25SNUtHdGxlU2twSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJR052Ym5OMElIWmhiSFZsSUQwZ2MzUmhkR1ZiYTJWNVhUdGNibHh1SUNBZ0lDQWdJQ0FnSUNBZ2FXWWdLSFJ5WVc1elptOXliVkJ5YjNCelcydGxlVjBwSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCMGNtRnVjMlp2Y20xVGRISnBibWNnS3owZ2EyVjVJQ3NnSnlnbklDc2dkbUZzZFdVZ0t5QW5LU0FuTzF4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUhSeVlXNXpabTl5YlVoaGMxb2dQU0FvYTJWNUlEMDlQU0JVVWtGT1UweEJWRVZmV2lrZ1B5QjBjblZsSURvZ2RISmhibk5tYjNKdFNHRnpXanRjYmx4dUlDQWdJQ0FnSUNBZ0lDQWdmU0JsYkhObElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQndjbTl3WlhKMGVWTjBjbWx1WnlBclBTQW5PeWNnS3lCd2NtVm1hWGhsY2loallXMWxiRlJ2UkdGemFDaHJaWGtwS1NBcklDYzZKeUFySUhaaGJIVmxPMXh1SUNBZ0lDQWdJQ0FnSUNBZ2ZWeHVJQ0FnSUNBZ0lDQjlYRzRnSUNBZ2ZWeHVYRzRnSUNBZ2FXWWdLSFJ5WVc1elptOXliVk4wY21sdVp5QWhQVDBnSnljcElIdGNiaUFnSUNBZ0lDQWdhV1lnS0NGMGNtRnVjMlp2Y20xSVlYTmFJQ1ltSUNGa2FYTmhZbXhsU0dGeVpIZGhjbVZCWTJObGJHVnlZWFJwYjI0cElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUhSeVlXNXpabTl5YlZOMGNtbHVaeUFyUFNCVVVrRk9VMHhCVkVWZldpQXJJQ2NvTUhCNEtTYzdYRzRnSUNBZ0lDQWdJSDFjYmx4dUlDQWdJQ0FnSUNCd2NtOXdaWEowZVZOMGNtbHVaeUFyUFNBbk95Y2dLeUJ3Y21WbWFYaGxjaWduZEhKaGJuTm1iM0p0SnlrZ0t5QW5PaWNnS3lCMGNtRnVjMlp2Y20xVGRISnBibWM3WEc0Z0lDQWdmVnh1WEc0Z0lDQWdjbVYwZFhKdUlIQnliM0JsY25SNVUzUnlhVzVuTzF4dWZUc2lYWDA9XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9hZGFwdGVyL2Nzcy9idWlsZC5qc1xuICoqIG1vZHVsZSBpZCA9IDQxXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG52YXIgY2FjaGUgPSB7fTtcbnZhciBwcmVmaXhlcyA9IFsnV2Via2l0JywgJ01veicsICdPJywgJ21zJywgJyddO1xudmFyIG51bVByZWZpeGVzID0gcHJlZml4ZXMubGVuZ3RoO1xudmFyIHRlc3RFbGVtZW50ID0gdW5kZWZpbmVkO1xuXG4vKlxuICAgIFRlc3Qgc3R5bGUgcHJvcGVydHkgZm9yIHByZWZpeGVkIHZlcnNpb25cbiAgICBcbiAgICBAcGFyYW0gW3N0cmluZ106IFN0eWxlIHByb3BlcnR5XG4gICAgQHJldHVybiBbc3RyaW5nXTogQ2FjaGVkIHByb3BlcnR5IG5hbWVcbiovXG52YXIgdGVzdFByZWZpeCA9IGZ1bmN0aW9uIChrZXkpIHtcbiAgICB0ZXN0RWxlbWVudCA9IHRlc3RFbGVtZW50IHx8IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgaWYgKGNhY2hlW2tleV0gPT09IGZhbHNlKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBjYWNoZVtrZXldID0gZmFsc2U7XG4gICAgfVxuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBudW1QcmVmaXhlczsgaSsrKSB7XG4gICAgICAgIHZhciBwcmVmaXggPSBwcmVmaXhlc1tpXSxcbiAgICAgICAgICAgIHByZWZpeGVkID0gcHJlZml4ID09PSAnJyA/IGtleSA6IHByZWZpeCArIGtleS5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIGtleS5zbGljZSgxKTtcblxuICAgICAgICBpZiAocHJlZml4ZWQgaW4gdGVzdEVsZW1lbnQuc3R5bGUpIHtcbiAgICAgICAgICAgIGNhY2hlW2tleV0gPSBwcmVmaXhlZDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBjYWNoZVtrZXldO1xufTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gKGtleSkge1xuICAgIHJldHVybiBjYWNoZVtrZXldIHx8IHRlc3RQcmVmaXgoa2V5KTtcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5OeVl5OWhaR0Z3ZEdWeUwyTnpjeTl3Y21WbWFYaGxjaTVxY3lKZExDSnVZVzFsY3lJNlcxMHNJbTFoY0hCcGJtZHpJam9pT3pzN1FVRkJRU3hKUVVGTkxGRkJRVkVzUlVGQlVqdEJRVU5PTEVsQlFVMHNWMEZCVnl4RFFVRkRMRkZCUVVRc1JVRkJWU3hMUVVGV0xFVkJRV2RDTEVkQlFXaENMRVZCUVc5Q0xFbEJRWEJDTEVWQlFUQkNMRVZCUVRGQ0xFTkJRVmc3UVVGRFRpeEpRVUZOTEdOQlFXTXNVMEZCVXl4TlFVRlVPMEZCUTNCQ0xFbEJRVWtzZFVKQlFVbzdPenM3T3pzN08wRkJVVUVzU1VGQlRTeGhRVUZoTEZWQlFVTXNSMEZCUkN4RlFVRlRPMEZCUTNoQ0xHdENRVUZqTEdWQlFXVXNVMEZCVXl4aFFVRlVMRU5CUVhWQ0xFdEJRWFpDTEVOQlFXWXNRMEZFVlRzN1FVRkhlRUlzVVVGQlNTeE5RVUZOTEVkQlFVNHNUVUZCWlN4TFFVRm1MRVZCUVhOQ08wRkJRM1JDTEdWQlFVOHNTMEZCVUN4RFFVUnpRanRMUVVFeFFpeE5RVVZQTzBGQlEwZ3NZMEZCVFN4SFFVRk9MRWxCUVdFc1MwRkJZaXhEUVVSSE8wdEJSbEE3TzBGQlRVRXNVMEZCU3l4SlFVRkpMRWxCUVVrc1EwRkJTaXhGUVVGUExFbEJRVWtzVjBGQlNpeEZRVUZwUWl4SFFVRnFReXhGUVVGelF6dEJRVU5zUXl4WlFVRkpMRk5CUVZNc1UwRkJVeXhEUVVGVUxFTkJRVlE3V1VGRFFTeFhRVUZYTEUxQlFVTXNTMEZCVnl4RlFVRllMRWRCUVdsQ0xFZEJRV3hDTEVkQlFYZENMRk5CUVZNc1NVRkJTU3hOUVVGS0xFTkJRVmNzUTBGQldDeEZRVUZqTEZkQlFXUXNSVUZCVkN4SFFVRjFReXhKUVVGSkxFdEJRVW9zUTBGQlZTeERRVUZXTEVOQlFYWkRMRU5CUmt3N08wRkJTV3hETEZsQlFVa3NXVUZCV1N4WlFVRlpMRXRCUVZvc1JVRkJiVUk3UVVGREwwSXNhMEpCUVUwc1IwRkJUaXhKUVVGaExGRkJRV0lzUTBGRUswSTdVMEZCYmtNN1MwRktTanM3UVVGVFFTeFhRVUZQTEUxQlFVMHNSMEZCVGl4RFFVRlFMRU5CYkVKM1FqdERRVUZVT3p0clFrRnhRa29zVlVGQlF5eEhRVUZFTzFkQlFWTXNUVUZCVFN4SFFVRk9MRXRCUVdNc1YwRkJWeXhIUVVGWUxFTkJRV1E3UTBGQlZDSXNJbVpwYkdVaU9pSndjbVZtYVhobGNpNXFjeUlzSW5OdmRYSmpaVkp2YjNRaU9pSXZWWE5sY25NdlRXRjBkQzlUYVhSbGN5OXdiM0J0YjNScGIyNGlMQ0p6YjNWeVkyVnpRMjl1ZEdWdWRDSTZXeUpqYjI1emRDQmpZV05vWlNBOUlIdDlPMXh1WTI5dWMzUWdjSEpsWm1sNFpYTWdQU0JiSjFkbFltdHBkQ2NzSjAxdmVpY3NKMDhuTENkdGN5Y3NJQ2NuWFR0Y2JtTnZibk4wSUc1MWJWQnlaV1pwZUdWeklEMGdjSEpsWm1sNFpYTXViR1Z1WjNSb08xeHViR1YwSUhSbGMzUkZiR1Z0Wlc1ME8xeHVYRzR2S2x4dUlDQWdJRlJsYzNRZ2MzUjViR1VnY0hKdmNHVnlkSGtnWm05eUlIQnlaV1pwZUdWa0lIWmxjbk5wYjI1Y2JpQWdJQ0JjYmlBZ0lDQkFjR0Z5WVcwZ1czTjBjbWx1WjEwNklGTjBlV3hsSUhCeWIzQmxjblI1WEc0Z0lDQWdRSEpsZEhWeWJpQmJjM1J5YVc1blhUb2dRMkZqYUdWa0lIQnliM0JsY25SNUlHNWhiV1ZjYmlvdlhHNWpiMjV6ZENCMFpYTjBVSEpsWm1sNElEMGdLR3RsZVNrZ1BUNGdlMXh1SUNBZ0lIUmxjM1JGYkdWdFpXNTBJRDBnZEdWemRFVnNaVzFsYm5RZ2ZId2daRzlqZFcxbGJuUXVZM0psWVhSbFJXeGxiV1Z1ZENnblpHbDJKeWs3WEc1Y2JpQWdJQ0JwWmlBb1kyRmphR1ZiYTJWNVhTQTlQVDBnWm1Gc2MyVXBJSHRjYmlBZ0lDQWdJQ0FnY21WMGRYSnVJR1poYkhObE8xeHVJQ0FnSUgwZ1pXeHpaU0I3WEc0Z0lDQWdJQ0FnSUdOaFkyaGxXMnRsZVYwZ1BTQm1ZV3h6WlR0Y2JpQWdJQ0I5WEc1Y2JpQWdJQ0JtYjNJZ0tIWmhjaUJwSUQwZ01Ec2dhU0E4SUc1MWJWQnlaV1pwZUdWek95QnBLeXNwSUh0Y2JpQWdJQ0FnSUNBZ2RtRnlJSEJ5WldacGVDQTlJSEJ5WldacGVHVnpXMmxkTEZ4dUlDQWdJQ0FnSUNBZ0lDQWdjSEpsWm1sNFpXUWdQU0FvY0hKbFptbDRJRDA5UFNBbkp5a2dQeUJyWlhrZ09pQndjbVZtYVhnZ0t5QnJaWGt1WTJoaGNrRjBLREFwTG5SdlZYQndaWEpEWVhObEtDa2dLeUJyWlhrdWMyeHBZMlVvTVNrN1hHNWNiaUFnSUNBZ0lDQWdhV1lnS0hCeVpXWnBlR1ZrSUdsdUlIUmxjM1JGYkdWdFpXNTBMbk4wZVd4bEtTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNCallXTm9aVnRyWlhsZElEMGdjSEpsWm1sNFpXUTdYRzRnSUNBZ0lDQWdJSDFjYmlBZ0lDQjlYRzRnSUNBZ1hHNGdJQ0FnY21WMGRYSnVJR05oWTJobFcydGxlVjA3WEc1OU8xeHVYRzVsZUhCdmNuUWdaR1ZtWVhWc2RDQW9hMlY1S1NBOVBpQmpZV05vWlZ0clpYbGRJSHg4SUhSbGMzUlFjbVZtYVhnb2EyVjVLVHNpWFgwPVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvYWRhcHRlci9jc3MvcHJlZml4ZXIuanNcbiAqKiBtb2R1bGUgaWQgPSA0MlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX2RpY3Rpb25hcnkgPSByZXF1aXJlKCcuLi8uLi92YWx1ZS10eXBlcy9zZXR0aW5ncy9kaWN0aW9uYXJ5Jyk7XG5cbnZhciB0cmFuc2Zvcm1Qcm9wcyA9IHt9O1xuXG52YXIgU0NBTEUgPSAnc2NhbGUnO1xudmFyIFJPVEFURSA9ICdyb3RhdGUnO1xudmFyIFRSQU5TRk9STV9QRVJTUEVDVElWRSA9ICd0cmFuc2Zvcm1QZXJzcGVjdGl2ZSc7XG52YXIgVEVSTVMgPSBbJ3RyYW5zbGF0ZScsIFNDQUxFLCBST1RBVEUsICdza2V3JywgVFJBTlNGT1JNX1BFUlNQRUNUSVZFXTtcblxudHJhbnNmb3JtUHJvcHNbUk9UQVRFXSA9IHRyYW5zZm9ybVByb3BzW1NDQUxFXSA9IHRyYW5zZm9ybVByb3BzW1RSQU5TRk9STV9QRVJTUEVDVElWRV0gPSB0cnVlO1xuXG5URVJNUy5mb3JFYWNoKGZ1bmN0aW9uICh0ZXJtKSB7XG4gIHJldHVybiBfZGljdGlvbmFyeS5heGVzLmZvckVhY2goZnVuY3Rpb24gKGF4aXMpIHtcbiAgICByZXR1cm4gdHJhbnNmb3JtUHJvcHNbdGVybSArIGF4aXNdID0gdHJ1ZTtcbiAgfSk7XG59KTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gdHJhbnNmb3JtUHJvcHM7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5OeVl5OWhaR0Z3ZEdWeUwyTnpjeTkwY21GdWMyWnZjbTB0Y0hKdmNITXVhbk1pWFN3aWJtRnRaWE1pT2x0ZExDSnRZWEJ3YVc1bmN5STZJanM3T3pzN08wRkJSVUVzU1VGQlNTeHBRa0ZCYVVJc1JVRkJha0k3TzBGQlJVb3NTVUZCVFN4UlFVRlJMRTlCUVZJN1FVRkRUaXhKUVVGTkxGTkJRVk1zVVVGQlZEdEJRVU5PTEVsQlFVMHNkMEpCUVhkQ0xITkNRVUY0UWp0QlFVTk9MRWxCUVUwc1VVRkJVU3hEUVVGRExGZEJRVVFzUlVGQll5eExRVUZrTEVWQlFYRkNMRTFCUVhKQ0xFVkJRVFpDTEUxQlFUZENMRVZCUVhGRExIRkNRVUZ5UXl4RFFVRlNPenRCUVVWT0xHVkJRV1VzVFVGQlppeEpRVUY1UWl4bFFVRmxMRXRCUVdZc1NVRkJkMElzWlVGQlpTeHhRa0ZCWml4SlFVRjNReXhKUVVGNFF6czdRVUZGYWtRc1RVRkJUU3hQUVVGT0xFTkJRV01zVlVGQlF5eEpRVUZFTzFOQlFWVXNhVUpCUVVzc1QwRkJUQ3hEUVVGaExGVkJRVU1zU1VGQlJEdFhRVUZWTEdWQlFXVXNUMEZCVHl4SlFVRlFMRU5CUVdZc1IwRkJPRUlzU1VGQk9VSTdSMEZCVmp0RFFVRjJRaXhEUVVGa096dHJRa0ZGWlNJc0ltWnBiR1VpT2lKMGNtRnVjMlp2Y20wdGNISnZjSE11YW5NaUxDSnpiM1Z5WTJWU2IyOTBJam9pTDFWelpYSnpMMDFoZEhRdlUybDBaWE12Y0c5d2JXOTBhVzl1SWl3aWMyOTFjbU5sYzBOdmJuUmxiblFpT2xzaWFXMXdiM0owSUhzZ1lYaGxjeUI5SUdaeWIyMGdKeTR1THk0dUwzWmhiSFZsTFhSNWNHVnpMM05sZEhScGJtZHpMMlJwWTNScGIyNWhjbmtuTzF4dVhHNXNaWFFnZEhKaGJuTm1iM0p0VUhKdmNITWdQU0I3ZlR0Y2JseHVZMjl1YzNRZ1UwTkJURVVnUFNBbmMyTmhiR1VuTzF4dVkyOXVjM1FnVWs5VVFWUkZJRDBnSjNKdmRHRjBaU2M3WEc1amIyNXpkQ0JVVWtGT1UwWlBVazFmVUVWU1UxQkZRMVJKVmtVZ1BTQW5kSEpoYm5ObWIzSnRVR1Z5YzNCbFkzUnBkbVVuTzF4dVkyOXVjM1FnVkVWU1RWTWdQU0JiSjNSeVlXNXpiR0YwWlNjc0lGTkRRVXhGTENCU1QxUkJWRVVzSUNkemEyVjNKeXdnVkZKQlRsTkdUMUpOWDFCRlVsTlFSVU5VU1ZaRlhUdGNibHh1ZEhKaGJuTm1iM0p0VUhKdmNITmJVazlVUVZSRlhTQTlJSFJ5WVc1elptOXliVkJ5YjNCelcxTkRRVXhGWFNBOUlIUnlZVzV6Wm05eWJWQnliM0J6VzFSU1FVNVRSazlTVFY5UVJWSlRVRVZEVkVsV1JWMGdQU0IwY25WbE8xeHVYRzVVUlZKTlV5NW1iM0pGWVdOb0tDaDBaWEp0S1NBOVBpQmhlR1Z6TG1admNrVmhZMmdvS0dGNGFYTXBJRDArSUhSeVlXNXpabTl5YlZCeWIzQnpXM1JsY20wZ0t5QmhlR2x6WFNBOUlIUnlkV1VwS1R0Y2JseHVaWGh3YjNKMElHUmxabUYxYkhRZ2RISmhibk5tYjNKdFVISnZjSE03SWwxOVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvYWRhcHRlci9jc3MvdHJhbnNmb3JtLXByb3BzLmpzXG4gKiogbW9kdWxlIGlkID0gNDNcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHMuZGVmYXVsdCA9IGJ1aWxkO1xuLypcbiAgICBDb252ZXJ0IHBlcmNlbnRhZ2UgdG8gcGl4ZWxzXG4gICAgXG4gICAgQHBhcmFtIFtudW1iZXJdOiBQZXJjZW50YWdlIG9mIHRvdGFsIGxlbmd0aFxuICAgIEBwYXJhbSBbbnVtYmVyXTogVG90YWwgbGVuZ3RoXG4qL1xudmFyIHBlcmNlbnRUb1BpeGVscyA9IGZ1bmN0aW9uIChwZXJjZW50LCBsZW5ndGgpIHtcbiAgICByZXR1cm4gcGFyc2VGbG9hdChwZXJjZW50KSAvIDEwMCAqIGxlbmd0aCArICdweCc7XG59O1xuXG5mdW5jdGlvbiBidWlsZChzdGF0ZSwgbGVuZ3RoKSB7XG4gICAgdmFyIHN0eWxlcyA9IHt9O1xuICAgIHZhciBkYXNoQXJyYXlTdHlsZXMgPSB7XG4gICAgICAgIGxlbmd0aDogMCxcbiAgICAgICAgc3BhY2luZzogbGVuZ3RoICsgJ3B4J1xuICAgIH07XG4gICAgdmFyIGhhc0Rhc2hBcnJheSA9IGZhbHNlO1xuXG4gICAgZm9yICh2YXIga2V5IGluIHN0YXRlKSB7XG4gICAgICAgIGlmIChzdGF0ZS5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgICB2YXIgdmFsdWUgPSBzdGF0ZVtrZXldO1xuXG4gICAgICAgICAgICBzd2l0Y2ggKGtleSkge1xuICAgICAgICAgICAgICAgIGNhc2UgJ2xlbmd0aCc6XG4gICAgICAgICAgICAgICAgY2FzZSAnc3BhY2luZyc6XG4gICAgICAgICAgICAgICAgICAgIGhhc0Rhc2hBcnJheSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIGRhc2hBcnJheVN0eWxlc1trZXldID0gcGVyY2VudFRvUGl4ZWxzKHZhbHVlLCBsZW5ndGgpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlICdvZmZzZXQnOlxuICAgICAgICAgICAgICAgICAgICBzdHlsZXNbJ3N0cm9rZS1kYXNob2Zmc2V0J10gPSBwZXJjZW50VG9QaXhlbHMoLXZhbHVlLCBsZW5ndGgpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICBzdHlsZXNba2V5XSA9IHZhbHVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGhhc0Rhc2hBcnJheSkge1xuICAgICAgICBzdHlsZXNbJ3N0cm9rZS1kYXNoYXJyYXknXSA9IGRhc2hBcnJheVN0eWxlcy5sZW5ndGggKyAnICcgKyBkYXNoQXJyYXlTdHlsZXMuc3BhY2luZztcbiAgICB9XG5cbiAgICByZXR1cm4gc3R5bGVzO1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluTnlZeTloWkdGd2RHVnlMM04yWnkxd1lYUm9MMkoxYVd4a0xtcHpJbDBzSW01aGJXVnpJanBiWFN3aWJXRndjR2x1WjNNaU9pSTdPenRyUWtGUmQwSTdPenM3T3pzN1FVRkdlRUlzU1VGQlRTeHJRa0ZCYTBJc1ZVRkJReXhQUVVGRUxFVkJRVlVzVFVGQlZqdFhRVUZ4UWl4VlFVRkRMRU5CUVZjc1QwRkJXQ3hKUVVGelFpeEhRVUYwUWl4SFFVRTJRaXhOUVVFNVFpeEhRVUYxUXl4SlFVRjJRenREUVVGeVFqczdRVUZGVkN4VFFVRlRMRXRCUVZRc1EwRkJaU3hMUVVGbUxFVkJRWE5DTEUxQlFYUkNMRVZCUVRoQ08wRkJRM3BETEZGQlFVMHNVMEZCVXl4RlFVRlVMRU5CUkcxRE8wRkJSWHBETEZGQlFVMHNhMEpCUVd0Q08wRkJRM0JDTEdkQ1FVRlJMRU5CUVZJN1FVRkRRU3hwUWtGQlV5eFRRVUZUTEVsQlFWUTdTMEZHVUN4RFFVWnRRenRCUVUxNlF5eFJRVUZKTEdWQlFXVXNTMEZCWml4RFFVNXhRenM3UVVGUmVrTXNVMEZCU3l4SlFVRkpMRWRCUVVvc1NVRkJWeXhMUVVGb1FpeEZRVUYxUWp0QlFVTnVRaXhaUVVGSkxFMUJRVTBzWTBGQlRpeERRVUZ4UWl4SFFVRnlRaXhEUVVGS0xFVkJRU3RDTzBGQlF6TkNMR2RDUVVGTkxGRkJRVkVzVFVGQlRTeEhRVUZPTEVOQlFWSXNRMEZFY1VJN08wRkJSek5DTEc5Q1FVRlJMRWRCUVZJN1FVRkRRU3h4UWtGQlN5eFJRVUZNTEVOQlJFRTdRVUZGUVN4eFFrRkJTeXhUUVVGTU8wRkJRMGtzYlVOQlFXVXNTVUZCWml4RFFVUktPMEZCUlVrc2IwTkJRV2RDTEVkQlFXaENMRWxCUVhWQ0xHZENRVUZuUWl4TFFVRm9RaXhGUVVGMVFpeE5RVUYyUWl4RFFVRjJRaXhEUVVaS08wRkJSMGtzTUVKQlNFbzdRVUZHUVN4eFFrRk5TeXhSUVVGTU8wRkJRMGtzTWtKQlFVOHNiVUpCUVZBc1NVRkJPRUlzWjBKQlFXZENMRU5CUVVNc1MwRkJSQ3hGUVVGUkxFMUJRWGhDTEVOQlFUbENMRU5CUkVvN1FVRkZTU3d3UWtGR1NqdEJRVTVCTzBGQlZVa3NNa0pCUVU4c1IwRkJVQ3hKUVVGakxFdEJRV1FzUTBGRVNqdEJRVlJCTEdGQlNESkNPMU5CUVM5Q08wdEJSRW83TzBGQmJVSkJMRkZCUVVrc1dVRkJTaXhGUVVGclFqdEJRVU5rTEdWQlFVOHNhMEpCUVZBc1NVRkJOa0lzWjBKQlFXZENMRTFCUVdoQ0xFZEJRWGxDTEVkQlFYcENMRWRCUVN0Q0xHZENRVUZuUWl4UFFVRm9RaXhEUVVRNVF6dExRVUZzUWpzN1FVRkpRU3hYUVVGUExFMUJRVkFzUTBFdlFubERPME5CUVRsQ0lpd2labWxzWlNJNkltSjFhV3hrTG1weklpd2ljMjkxY21ObFVtOXZkQ0k2SWk5VmMyVnljeTlOWVhSMEwxTnBkR1Z6TDNCdmNHMXZkR2x2YmlJc0luTnZkWEpqWlhORGIyNTBaVzUwSWpwYklpOHFYRzRnSUNBZ1EyOXVkbVZ5ZENCd1pYSmpaVzUwWVdkbElIUnZJSEJwZUdWc2MxeHVJQ0FnSUZ4dUlDQWdJRUJ3WVhKaGJTQmJiblZ0WW1WeVhUb2dVR1Z5WTJWdWRHRm5aU0J2WmlCMGIzUmhiQ0JzWlc1bmRHaGNiaUFnSUNCQWNHRnlZVzBnVzI1MWJXSmxjbDA2SUZSdmRHRnNJR3hsYm1kMGFGeHVLaTljYm1OdmJuTjBJSEJsY21ObGJuUlViMUJwZUdWc2N5QTlJQ2h3WlhKalpXNTBMQ0JzWlc1bmRHZ3BJRDArSUNod1lYSnpaVVpzYjJGMEtIQmxjbU5sYm5RcElDOGdNVEF3S1NBcUlHeGxibWQwYUNBcklDZHdlQ2M3WEc1Y2JtVjRjRzl5ZENCa1pXWmhkV3gwSUdaMWJtTjBhVzl1SUdKMWFXeGtLSE4wWVhSbExDQnNaVzVuZEdncElIdGNiaUFnSUNCamIyNXpkQ0J6ZEhsc1pYTWdQU0I3ZlR0Y2JpQWdJQ0JqYjI1emRDQmtZWE5vUVhKeVlYbFRkSGxzWlhNZ1BTQjdYRzRnSUNBZ0lDQWdJR3hsYm1kMGFEb2dNQ3hjYmlBZ0lDQWdJQ0FnYzNCaFkybHVaem9nYkdWdVozUm9JQ3NnSjNCNEoxeHVJQ0FnSUgwN1hHNGdJQ0FnYkdWMElHaGhjMFJoYzJoQmNuSmhlU0E5SUdaaGJITmxPMXh1WEc0Z0lDQWdabTl5SUNoc1pYUWdhMlY1SUdsdUlITjBZWFJsS1NCN1hHNGdJQ0FnSUNBZ0lHbG1JQ2h6ZEdGMFpTNW9ZWE5QZDI1UWNtOXdaWEowZVNoclpYa3BLU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQmpiMjV6ZENCMllXeDFaU0E5SUhOMFlYUmxXMnRsZVYwN1hHNWNiaUFnSUNBZ0lDQWdJQ0FnSUhOM2FYUmphQ0FvYTJWNUtTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNCallYTmxJQ2RzWlc1bmRHZ25PbHh1SUNBZ0lDQWdJQ0FnSUNBZ1kyRnpaU0FuYzNCaFkybHVaeWM2WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnYUdGelJHRnphRUZ5Y21GNUlEMGdkSEoxWlR0Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCa1lYTm9RWEp5WVhsVGRIbHNaWE5iYTJWNVhTQTlJSEJsY21ObGJuUlViMUJwZUdWc2N5aDJZV3gxWlN3Z2JHVnVaM1JvS1R0Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCaWNtVmhhenRjYmlBZ0lDQWdJQ0FnSUNBZ0lHTmhjMlVnSjI5bVpuTmxkQ2M2WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnYzNSNWJHVnpXeWR6ZEhKdmEyVXRaR0Z6YUc5bVpuTmxkQ2RkSUQwZ2NHVnlZMlZ1ZEZSdlVHbDRaV3h6S0MxMllXeDFaU3dnYkdWdVozUm9LVHRjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0JpY21WaGF6dGNiaUFnSUNBZ0lDQWdJQ0FnSUdSbFptRjFiSFE2WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnYzNSNWJHVnpXMnRsZVYwZ1BTQjJZV3gxWlR0Y2JpQWdJQ0FnSUNBZ0lDQWdJSDFjYmlBZ0lDQWdJQ0FnZlZ4dUlDQWdJSDFjYmx4dUlDQWdJR2xtSUNob1lYTkVZWE5vUVhKeVlYa3BJSHRjYmlBZ0lDQWdJQ0FnYzNSNWJHVnpXeWR6ZEhKdmEyVXRaR0Z6YUdGeWNtRjVKMTBnUFNCa1lYTm9RWEp5WVhsVGRIbHNaWE11YkdWdVozUm9JQ3NnSnlBbklDc2daR0Z6YUVGeWNtRjVVM1I1YkdWekxuTndZV05wYm1jN1hHNGdJQ0FnZlZ4dVhHNGdJQ0FnY21WMGRYSnVJSE4wZVd4bGN6dGNibjBpWFgwPVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvYWRhcHRlci9zdmctcGF0aC9idWlsZC5qc1xuICoqIG1vZHVsZSBpZCA9IDQ0XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbnZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfc3RhdGVNYXAgPSByZXF1aXJlKCcuLi9jc3Mvc3RhdGUtbWFwJyk7XG5cbnZhciBfc3RhdGVNYXAyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfc3RhdGVNYXApO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG52YXIgU1RST0tFID0gJ3N0cm9rZS0nO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBfZXh0ZW5kcyh7fSwgX3N0YXRlTWFwMi5kZWZhdWx0LCB7XG4gICAgb3BhY2l0eTogU1RST0tFICsgJ29wYWNpdHknLFxuICAgIHdpZHRoOiBTVFJPS0UgKyAnd2lkdGgnLFxuICAgIG1pdGVybGltaXQ6IFNUUk9LRSArICdtaXRlcmxpbWl0J1xufSk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5OeVl5OWhaR0Z3ZEdWeUwzTjJaeTF3WVhSb0wzTjBZWFJsTFcxaGNDNXFjeUpkTENKdVlXMWxjeUk2VzEwc0ltMWhjSEJwYm1keklqb2lPenM3T3pzN096czdPenM3UVVGRlFTeEpRVUZOTEZOQlFWTXNVMEZCVkRzN08wRkJTVVlzWVVGQldTeHJRa0ZCV2p0QlFVTkJMRmRCUVZVc1owSkJRVlk3UVVGRFFTeG5Ra0ZCWlN4eFFrRkJaaUlzSW1acGJHVWlPaUp6ZEdGMFpTMXRZWEF1YW5NaUxDSnpiM1Z5WTJWU2IyOTBJam9pTDFWelpYSnpMMDFoZEhRdlUybDBaWE12Y0c5d2JXOTBhVzl1SWl3aWMyOTFjbU5sYzBOdmJuUmxiblFpT2xzaWFXMXdiM0owSUdOemMxTjBZWFJsVFdGd0lHWnliMjBnSnk0dUwyTnpjeTl6ZEdGMFpTMXRZWEFuTzF4dVhHNWpiMjV6ZENCVFZGSlBTMFVnUFNBbmMzUnliMnRsTFNjN1hHNWNibVY0Y0c5eWRDQmtaV1poZFd4MElIdGNiaUFnSUNBdUxpNWpjM05UZEdGMFpVMWhjQ3hjYmlBZ0lDQnZjR0ZqYVhSNU9pQmdKSHRUVkZKUFMwVjliM0JoWTJsMGVXQXNYRzRnSUNBZ2QybGtkR2c2SUdBa2UxTlVVazlMUlgxM2FXUjBhR0FzWEc0Z0lDQWdiV2wwWlhKc2FXMXBkRG9nWUNSN1UxUlNUMHRGZlcxcGRHVnliR2x0YVhSZ1hHNTlPeUpkZlE9PVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvYWRhcHRlci9zdmctcGF0aC9zdGF0ZS1tYXAuanNcbiAqKiBtb2R1bGUgaWQgPSA0NVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xudmFyIHJnYiA9IGV4cG9ydHMucmdiID0ge1xuICAgIG1pbjogMCxcbiAgICBtYXg6IDI1NSxcbiAgICByb3VuZDogdHJ1ZVxufTtcblxudmFyIG9wYWNpdHkgPSBleHBvcnRzLm9wYWNpdHkgPSB7XG4gICAgbWluOiAwLFxuICAgIG1heDogMVxufTtcblxudmFyIHBlcmNlbnQgPSBleHBvcnRzLnBlcmNlbnQgPSB7XG4gICAgbWluOiAwLFxuICAgIG1heDogMTAwLFxuICAgIHVuaXQ6ICclJ1xufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbk55WXk5MllXeDFaUzEwZVhCbGN5OXpaWFIwYVc1bmN5OWtaV1poZFd4MExYQnliM0J6TG1weklsMHNJbTVoYldWeklqcGJYU3dpYldGd2NHbHVaM01pT2lJN096dEJRVUZQTEVsQlFVMHNiMEpCUVUwN1FVRkRaaXhUUVVGTExFTkJRVXc3UVVGRFFTeFRRVUZMTEVkQlFVdzdRVUZEUVN4WFFVRlBMRWxCUVZBN1EwRklVenM3UVVGTlRpeEpRVUZOTERSQ1FVRlZPMEZCUTI1Q0xGTkJRVXNzUTBGQlREdEJRVU5CTEZOQlFVc3NRMEZCVER0RFFVWlRPenRCUVV0T0xFbEJRVTBzTkVKQlFWVTdRVUZEYmtJc1UwRkJTeXhEUVVGTU8wRkJRMEVzVTBGQlN5eEhRVUZNTzBGQlEwRXNWVUZCVFN4SFFVRk9PME5CU0ZNaUxDSm1hV3hsSWpvaVpHVm1ZWFZzZEMxd2NtOXdjeTVxY3lJc0luTnZkWEpqWlZKdmIzUWlPaUl2VlhObGNuTXZUV0YwZEM5VGFYUmxjeTl3YjNCdGIzUnBiMjRpTENKemIzVnlZMlZ6UTI5dWRHVnVkQ0k2V3lKbGVIQnZjblFnWTI5dWMzUWdjbWRpSUQwZ2UxeHVJQ0FnSUcxcGJqb2dNQ3hjYmlBZ0lDQnRZWGc2SURJMU5TeGNiaUFnSUNCeWIzVnVaRG9nZEhKMVpWeHVmVHRjYmx4dVpYaHdiM0owSUdOdmJuTjBJRzl3WVdOcGRIa2dQU0I3WEc0Z0lDQWdiV2x1T2lBd0xGeHVJQ0FnSUcxaGVEb2dNVnh1ZlR0Y2JseHVaWGh3YjNKMElHTnZibk4wSUhCbGNtTmxiblFnUFNCN1hHNGdJQ0FnYldsdU9pQXdMRnh1SUNBZ0lHMWhlRG9nTVRBd0xGeHVJQ0FnSUhWdWFYUTZJQ2NsSjF4dWZUc2lYWDA9XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy92YWx1ZS10eXBlcy9zZXR0aW5ncy9kZWZhdWx0LXByb3BzLmpzXG4gKiogbW9kdWxlIGlkID0gNDZcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbnZhciBYID0gJ1gnO1xudmFyIFkgPSAnWSc7XG52YXIgQUxQSEEgPSAnQWxwaGEnO1xuXG52YXIgYXhlcyA9IGV4cG9ydHMuYXhlcyA9IFtYLCBZLCAnWiddO1xudmFyIHJnYiA9IGV4cG9ydHMucmdiID0gWydSZWQnLCAnR3JlZW4nLCAnQmx1ZScsIEFMUEhBXTtcbnZhciBoc2wgPSBleHBvcnRzLmhzbCA9IFsnSHVlJywgJ1NhdHVyYXRpb24nLCAnTGlnaHRuZXNzJywgQUxQSEFdO1xudmFyIHBvc2l0aW9ucyA9IGV4cG9ydHMucG9zaXRpb25zID0gWydUb3AnLCAnUmlnaHQnLCAnQm90dG9tJywgJ0xlZnQnXTtcbnZhciBzaGFkb3cgPSBleHBvcnRzLnNoYWRvdyA9IFtYLCBZLCAnUmFkaXVzJywgJ1NwcmVhZCcsICdDb2xvciddO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluTnlZeTkyWVd4MVpTMTBlWEJsY3k5elpYUjBhVzVuY3k5a2FXTjBhVzl1WVhKNUxtcHpJbDBzSW01aGJXVnpJanBiWFN3aWJXRndjR2x1WjNNaU9pSTdPenRCUVVGQkxFbEJRVTBzU1VGQlNTeEhRVUZLTzBGQlEwNHNTVUZCVFN4SlFVRkpMRWRCUVVvN1FVRkRUaXhKUVVGTkxGRkJRVkVzVDBGQlVqczdRVUZGUXl4SlFVRk5MSE5DUVVGUExFTkJRVU1zUTBGQlJDeEZRVUZKTEVOQlFVb3NSVUZCVHl4SFFVRlFMRU5CUVZBN1FVRkRUaXhKUVVGTkxHOUNRVUZOTEVOQlFVTXNTMEZCUkN4RlFVRlJMRTlCUVZJc1JVRkJhVUlzVFVGQmFrSXNSVUZCZVVJc1MwRkJla0lzUTBGQlRqdEJRVU5PTEVsQlFVMHNiMEpCUVUwc1EwRkJReXhMUVVGRUxFVkJRVkVzV1VGQlVpeEZRVUZ6UWl4WFFVRjBRaXhGUVVGdFF5eExRVUZ1UXl4RFFVRk9PMEZCUTA0c1NVRkJUU3huUTBGQldTeERRVUZETEV0QlFVUXNSVUZCVVN4UFFVRlNMRVZCUVdsQ0xGRkJRV3BDTEVWQlFUSkNMRTFCUVROQ0xFTkJRVm83UVVGRFRpeEpRVUZOTERCQ1FVRlRMRU5CUVVNc1EwRkJSQ3hGUVVGSkxFTkJRVW9zUlVGQlR5eFJRVUZRTEVWQlFXbENMRkZCUVdwQ0xFVkJRVEpDTEU5QlFUTkNMRU5CUVZRaUxDSm1hV3hsSWpvaVpHbGpkR2x2Ym1GeWVTNXFjeUlzSW5OdmRYSmpaVkp2YjNRaU9pSXZWWE5sY25NdlRXRjBkQzlUYVhSbGN5OXdiM0J0YjNScGIyNGlMQ0p6YjNWeVkyVnpRMjl1ZEdWdWRDSTZXeUpqYjI1emRDQllJRDBnSjFnbk8xeHVZMjl1YzNRZ1dTQTlJQ2RaSnp0Y2JtTnZibk4wSUVGTVVFaEJJRDBnSjBGc2NHaGhKenRjYmx4dVpYaHdiM0owSUdOdmJuTjBJR0Y0WlhNZ1BTQmJXQ3dnV1N3Z0oxb25YVHRjYm1WNGNHOXlkQ0JqYjI1emRDQnlaMklnUFNCYkoxSmxaQ2NzSUNkSGNtVmxiaWNzSUNkQ2JIVmxKeXdnUVV4UVNFRmRPMXh1Wlhod2IzSjBJR052Ym5OMElHaHpiQ0E5SUZzblNIVmxKeXdnSjFOaGRIVnlZWFJwYjI0bkxDQW5UR2xuYUhSdVpYTnpKeXdnUVV4UVNFRmRPMXh1Wlhod2IzSjBJR052Ym5OMElIQnZjMmwwYVc5dWN5QTlJRnNuVkc5d0p5d2dKMUpwWjJoMEp5d2dKMEp2ZEhSdmJTY3NJQ2RNWldaMEoxMDdYRzVsZUhCdmNuUWdZMjl1YzNRZ2MyaGhaRzkzSUQwZ1cxZ3NJRmtzSUNkU1lXUnBkWE1uTENBblUzQnlaV0ZrSnl3Z0owTnZiRzl5SjEwN0lsMTlcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL3ZhbHVlLXR5cGVzL3NldHRpbmdzL2RpY3Rpb25hcnkuanNcbiAqKiBtb2R1bGUgaWQgPSA0N1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzLmRlZmF1bHQgPSBjcmVhdGVFYXNpbmdGdW5jdGlvbjtcbi8qXG4gICAgTWlycm9yIGVhc2luZ1xuICAgIFxuICAgIE1pcnJvcnMgdGhlIHByb3ZpZGVkIGVhc2luZyBmdW5jdGlvbiwgdXNlZCBoZXJlIGZvciBtaXJyb3JpbmcgYW5cbiAgICBlYXNlSW4gaW50byBhbiBlYXNlSW5PdXRcbiAgICBcbiAgICBAcGFyYW0gW251bWJlcl06IFByb2dyZXNzLCBmcm9tIDAgLSAxLCBvZiBjdXJyZW50IHNoaWZ0XG4gICAgQHBhcmFtIFtmdW5jdGlvbl06IFRoZSBlYXNpbmcgZnVuY3Rpb24gdG8gbWlycm9yXG4gICAgQHJldHVybnMgW251bWJlcl06IFRoZSBlYXNpbmctYWRqdXN0ZWQgZGVsdGFcbiovXG52YXIgbWlycm9yRWFzaW5nID0gZnVuY3Rpb24gKG1ldGhvZCkge1xuICAgIHJldHVybiBmdW5jdGlvbiAocHJvZ3Jlc3MsIHN0cmVuZ3RoKSB7XG4gICAgICAgIHJldHVybiBwcm9ncmVzcyA8PSAwLjUgPyBtZXRob2QoMiAqIHByb2dyZXNzLCBzdHJlbmd0aCkgLyAyIDogKDIgLSBtZXRob2QoMiAqICgxIC0gcHJvZ3Jlc3MpLCBzdHJlbmd0aCkpIC8gMjtcbiAgICB9O1xufTtcblxuLypcbiAgICBSZXZlcnNlIGVhc2luZ1xuICAgIFxuICAgIFJldmVyc2VzIHRoZSBvdXRwdXQgb2YgdGhlIHByb3ZpZGVkIGVhc2luZyBmdW5jdGlvbiwgdXNlZCBmb3IgZmxpcHBpbmcgZWFzZUluXG4gICAgY3VydmUgdG8gYW4gZWFzZU91dC5cbiAgICBcbiAgICBAcGFyYW0gW251bWJlcl06IFByb2dyZXNzLCBmcm9tIDAgLSAxLCBvZiBjdXJyZW50IHNoaWZ0XG4gICAgQHBhcmFtIFtmdW5jdGlvbl06IFRoZSBlYXNpbmcgZnVuY3Rpb24gdG8gcmV2ZXJzZVxuICAgIEByZXR1cm5zIFtudW1iZXJdOiBUaGUgZWFzaW5nLWFkanVzdGVkIGRlbHRhXG4qL1xudmFyIHJldmVyc2VFYXNpbmcgPSBmdW5jdGlvbiAobWV0aG9kKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChwcm9ncmVzcywgc3RyZW5ndGgpIHtcbiAgICAgICAgcmV0dXJuIDEgLSBtZXRob2QoMSAtIHByb2dyZXNzLCBzdHJlbmd0aCk7XG4gICAgfTtcbn07XG5cbi8qXG4gICAgRWFzaW5nIGNsYXNzXG5cbiAgICBJZiBwcm92aWRlZCBlYXNpbmcgZnVuY3Rpb24sIHJldHVybnMgZWFzaW5nIGZ1bmN0aW9uIHdpdGggXG4gICAgaW4vb3V0L2luT3V0IHZhcmlhdGlvbnNcblxuICAgIElmIHByb3ZpZGVkIGZvdXIgYXJndW1lbnRzLCByZXR1cm5zIG5ldyBCZXppZXIgY2xhc3MgaW5zdGVhZC5cbiovXG5mdW5jdGlvbiBjcmVhdGVFYXNpbmdGdW5jdGlvbihtZXRob2QpIHtcbiAgICB2YXIgZWFzaW5nRnVuY3Rpb24gPSBmdW5jdGlvbiAocHJvZ3Jlc3MsIHN0cmVuZ3RoKSB7XG4gICAgICAgIHJldHVybiBtZXRob2QocHJvZ3Jlc3MsIHN0cmVuZ3RoKTtcbiAgICB9O1xuXG4gICAgZWFzaW5nRnVuY3Rpb24uaW4gPSBmdW5jdGlvbiAocHJvZ3Jlc3MsIHN0cmVuZ3RoKSB7XG4gICAgICAgIHJldHVybiBtZXRob2QocHJvZ3Jlc3MsIHN0cmVuZ3RoKTtcbiAgICB9O1xuICAgIGVhc2luZ0Z1bmN0aW9uLm91dCA9IHJldmVyc2VFYXNpbmcobWV0aG9kKTtcbiAgICBlYXNpbmdGdW5jdGlvbi5pbk91dCA9IG1pcnJvckVhc2luZyhtZXRob2QpO1xuXG4gICAgcmV0dXJuIGVhc2luZ0Z1bmN0aW9uO1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluTnlZeTloWTNScGIyNXpMMlZoYzJsdVp5OWpjbVZoZEdVdFpXRnphVzVuTG1weklsMHNJbTVoYldWeklqcGJYU3dpYldGd2NHbHVaM01pT2lJN096dHJRa0ZuUTNkQ096czdPenM3T3pzN096dEJRWFJDZUVJc1NVRkJUU3hsUVVGbExGVkJRVU1zVFVGQlJEdFhRVUZaTEZWQlFVTXNVVUZCUkN4RlFVRlhMRkZCUVZnN1pVRkJkMElzVVVGQlF5eEpRVUZaTEVkQlFWb3NSMEZCYlVJc1QwRkJUeXhKUVVGSkxGRkJRVW9zUlVGQll5eFJRVUZ5UWl4SlFVRnBReXhEUVVGcVF5eEhRVUZ4UXl4RFFVRkRMRWxCUVVrc1QwRkJUeXhMUVVGTExFbEJRVWtzVVVGQlNpeERRVUZNTEVWQlFXOUNMRkZCUVROQ0xFTkJRVW9zUTBGQlJDeEhRVUUyUXl4RFFVRTNRenRMUVVGcVJqdERRVUZhT3pzN096czdPenM3T3pzN1FVRlpja0lzU1VGQlRTeG5Ra0ZCWjBJc1ZVRkJReXhOUVVGRU8xZEJRVmtzVlVGQlF5eFJRVUZFTEVWQlFWY3NVVUZCV0R0bFFVRjNRaXhKUVVGSkxFOUJRVThzU1VGQlNTeFJRVUZLTEVWQlFXTXNVVUZCY2tJc1EwRkJTanRMUVVGNFFqdERRVUZhT3pzN096czdPenM3TzBGQlZWQXNVMEZCVXl4dlFrRkJWQ3hEUVVFNFFpeE5RVUU1UWl4RlFVRnpRenRCUVVOcVJDeFJRVUZKTEdsQ1FVRnBRaXhWUVVGRExGRkJRVVFzUlVGQlZ5eFJRVUZZTzJWQlFYZENMRTlCUVU4c1VVRkJVQ3hGUVVGcFFpeFJRVUZxUWp0TFFVRjRRaXhEUVVRMFFqczdRVUZIYWtRc2JVSkJRV1VzUlVGQlppeEhRVUZ2UWl4VlFVRkRMRkZCUVVRc1JVRkJWeXhSUVVGWU8yVkJRWGRDTEU5QlFVOHNVVUZCVUN4RlFVRnBRaXhSUVVGcVFqdExRVUY0UWl4RFFVZzJRanRCUVVscVJDeHRRa0ZCWlN4SFFVRm1MRWRCUVhGQ0xHTkJRV01zVFVGQlpDeERRVUZ5UWl4RFFVcHBSRHRCUVV0cVJDeHRRa0ZCWlN4TFFVRm1MRWRCUVhWQ0xHRkJRV0VzVFVGQllpeERRVUYyUWl4RFFVeHBSRHM3UVVGUGFrUXNWMEZCVHl4alFVRlFMRU5CVUdsRU8wTkJRWFJESWl3aVptbHNaU0k2SW1OeVpXRjBaUzFsWVhOcGJtY3Vhbk1pTENKemIzVnlZMlZTYjI5MElqb2lMMVZ6WlhKekwwMWhkSFF2VTJsMFpYTXZjRzl3Ylc5MGFXOXVJaXdpYzI5MWNtTmxjME52Ym5SbGJuUWlPbHNpTHlwY2JpQWdJQ0JOYVhKeWIzSWdaV0Z6YVc1blhHNGdJQ0FnWEc0Z0lDQWdUV2x5Y205eWN5QjBhR1VnY0hKdmRtbGtaV1FnWldGemFXNW5JR1oxYm1OMGFXOXVMQ0IxYzJWa0lHaGxjbVVnWm05eUlHMXBjbkp2Y21sdVp5QmhibHh1SUNBZ0lHVmhjMlZKYmlCcGJuUnZJR0Z1SUdWaGMyVkpiazkxZEZ4dUlDQWdJRnh1SUNBZ0lFQndZWEpoYlNCYmJuVnRZbVZ5WFRvZ1VISnZaM0psYzNNc0lHWnliMjBnTUNBdElERXNJRzltSUdOMWNuSmxiblFnYzJocFpuUmNiaUFnSUNCQWNHRnlZVzBnVzJaMWJtTjBhVzl1WFRvZ1ZHaGxJR1ZoYzJsdVp5Qm1kVzVqZEdsdmJpQjBieUJ0YVhKeWIzSmNiaUFnSUNCQWNtVjBkWEp1Y3lCYmJuVnRZbVZ5WFRvZ1ZHaGxJR1ZoYzJsdVp5MWhaR3AxYzNSbFpDQmtaV3gwWVZ4dUtpOWNibU52Ym5OMElHMXBjbkp2Y2tWaGMybHVaeUE5SUNodFpYUm9iMlFwSUQwK0lDaHdjbTluY21WemN5d2djM1J5Wlc1bmRHZ3BJRDArSUNod2NtOW5jbVZ6Y3lBOFBTQXdMalVwSUQ4Z2JXVjBhRzlrS0RJZ0tpQndjbTluY21WemN5d2djM1J5Wlc1bmRHZ3BJQzhnTWlBNklDZ3lJQzBnYldWMGFHOWtLRElnS2lBb01TQXRJSEJ5YjJkeVpYTnpLU3dnYzNSeVpXNW5kR2dwS1NBdklESTdYRzRnSUNBZ0lDQWdJRnh1THlwY2JpQWdJQ0JTWlhabGNuTmxJR1ZoYzJsdVoxeHVJQ0FnSUZ4dUlDQWdJRkpsZG1WeWMyVnpJSFJvWlNCdmRYUndkWFFnYjJZZ2RHaGxJSEJ5YjNacFpHVmtJR1ZoYzJsdVp5Qm1kVzVqZEdsdmJpd2dkWE5sWkNCbWIzSWdabXhwY0hCcGJtY2daV0Z6WlVsdVhHNGdJQ0FnWTNWeWRtVWdkRzhnWVc0Z1pXRnpaVTkxZEM1Y2JpQWdJQ0JjYmlBZ0lDQkFjR0Z5WVcwZ1cyNTFiV0psY2wwNklGQnliMmR5WlhOekxDQm1jbTl0SURBZ0xTQXhMQ0J2WmlCamRYSnlaVzUwSUhOb2FXWjBYRzRnSUNBZ1FIQmhjbUZ0SUZ0bWRXNWpkR2x2YmwwNklGUm9aU0JsWVhOcGJtY2dablZ1WTNScGIyNGdkRzhnY21WMlpYSnpaVnh1SUNBZ0lFQnlaWFIxY201eklGdHVkVzFpWlhKZE9pQlVhR1VnWldGemFXNW5MV0ZrYW5WemRHVmtJR1JsYkhSaFhHNHFMMXh1WTI5dWMzUWdjbVYyWlhKelpVVmhjMmx1WnlBOUlDaHRaWFJvYjJRcElEMCtJQ2h3Y205bmNtVnpjeXdnYzNSeVpXNW5kR2dwSUQwK0lERWdMU0J0WlhSb2IyUW9NU0F0SUhCeWIyZHlaWE56TENCemRISmxibWQwYUNrN1hHNWNiaThxWEc0Z0lDQWdSV0Z6YVc1bklHTnNZWE56WEc1Y2JpQWdJQ0JKWmlCd2NtOTJhV1JsWkNCbFlYTnBibWNnWm5WdVkzUnBiMjRzSUhKbGRIVnlibk1nWldGemFXNW5JR1oxYm1OMGFXOXVJSGRwZEdnZ1hHNGdJQ0FnYVc0dmIzVjBMMmx1VDNWMElIWmhjbWxoZEdsdmJuTmNibHh1SUNBZ0lFbG1JSEJ5YjNacFpHVmtJR1p2ZFhJZ1lYSm5kVzFsYm5SekxDQnlaWFIxY201eklHNWxkeUJDWlhwcFpYSWdZMnhoYzNNZ2FXNXpkR1ZoWkM1Y2Jpb3ZYRzVsZUhCdmNuUWdaR1ZtWVhWc2RDQm1kVzVqZEdsdmJpQmpjbVZoZEdWRllYTnBibWRHZFc1amRHbHZiaWh0WlhSb2IyUXBJSHRjYmlBZ0lDQnNaWFFnWldGemFXNW5SblZ1WTNScGIyNGdQU0FvY0hKdlozSmxjM01zSUhOMGNtVnVaM1JvS1NBOVBpQnRaWFJvYjJRb2NISnZaM0psYzNNc0lITjBjbVZ1WjNSb0tUdGNibHh1SUNBZ0lHVmhjMmx1WjBaMWJtTjBhVzl1TG1sdUlEMGdLSEJ5YjJkeVpYTnpMQ0J6ZEhKbGJtZDBhQ2tnUFQ0Z2JXVjBhRzlrS0hCeWIyZHlaWE56TENCemRISmxibWQwYUNrN1hHNGdJQ0FnWldGemFXNW5SblZ1WTNScGIyNHViM1YwSUQwZ2NtVjJaWEp6WlVWaGMybHVaeWh0WlhSb2IyUXBPMXh1SUNBZ0lHVmhjMmx1WjBaMWJtTjBhVzl1TG1sdVQzVjBJRDBnYldseWNtOXlSV0Z6YVc1bktHMWxkR2h2WkNrN1hHNWNiaUFnSUNCeVpYUjFjbTRnWldGemFXNW5SblZ1WTNScGIyNDdYRzU5WEc0aVhYMD1cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2FjdGlvbnMvZWFzaW5nL2NyZWF0ZS1lYXNpbmcuanNcbiAqKiBtb2R1bGUgaWQgPSA0OFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0cy5kZWZhdWx0ID0gY3ViaWNCZXppZXI7XG4vKlxuICAgIEJlemllciBmdW5jdGlvbiBnZW5lcmF0b3JcbiAgICAgICAgXG4gICAgR2HDq3RhbiBSZW5hdWRlYXUncyBCZXppZXJFYXNpbmdcbiAgICBodHRwczovL2dpdGh1Yi5jb20vZ3JlL2Jlemllci1lYXNpbmcvYmxvYi9tYXN0ZXIvaW5kZXguanMgIFxuICAgIGh0dHBzOi8vZ2l0aHViLmNvbS9ncmUvYmV6aWVyLWVhc2luZy9ibG9iL21hc3Rlci9MSUNFTlNFXG4gICAgWW91J3JlIGEgaGVyb1xuICAgIFxuICAgIFVzZVxuICAgIFxuICAgICAgICB2YXIgZWFzZU91dCA9IG5ldyBCZXppZXIoLjE3LC42NywuODMsLjY3KSxcbiAgICAgICAgICAgIHggPSBlYXNlT3V0KDAuNSk7IC8vIHJldHVybnMgMC42MjcuLi5cbiovXG5cbi8vIENvbnN0YW50c1xudmFyIE5FV1RPTl9JVEVSQVRJT05TID0gODtcbnZhciBORVdUT05fTUlOX1NMT1BFID0gMC4wMDE7XG52YXIgU1VCRElWSVNJT05fUFJFQ0lTSU9OID0gMC4wMDAwMDAxO1xudmFyIFNVQkRJVklTSU9OX01BWF9JVEVSQVRJT05TID0gMTA7XG52YXIgS19TUExJTkVfVEFCTEVfU0laRSA9IDExO1xudmFyIEtfU0FNUExFX1NURVBfU0laRSA9IDEuMCAvIChLX1NQTElORV9UQUJMRV9TSVpFIC0gMS4wKTtcbnZhciBGTE9BVF8zMl9TVVBQT1JURUQgPSB0eXBlb2YgRmxvYXQzMkFycmF5ICE9PSAndW5kZWZpbmVkJztcblxuLy8gSGVscGVyIG1ldGhvZHNcbnZhciBhID0gZnVuY3Rpb24gKGExLCBhMikge1xuICAgIHJldHVybiAxLjAgLSAzLjAgKiBhMiArIDMuMCAqIGExO1xufTtcbnZhciBiID0gZnVuY3Rpb24gKGExLCBhMikge1xuICAgIHJldHVybiAzLjAgKiBhMiAtIDYuMCAqIGExO1xufTtcbnZhciBjID0gZnVuY3Rpb24gKGExKSB7XG4gICAgcmV0dXJuIDMuMCAqIGExO1xufTtcblxudmFyIGdldFNsb3BlID0gZnVuY3Rpb24gKHQsIGExLCBhMikge1xuICAgIHJldHVybiAzLjAgKiBhKGExLCBhMikgKiB0ICogdCArIDIuMCAqIGIoYTEsIGEyKSAqIHQgKyBjKGExKTtcbn07XG5cbnZhciBjYWxjQmV6aWVyID0gZnVuY3Rpb24gKHQsIGExLCBhMikge1xuICAgIHJldHVybiAoKGEoYTEsIGEyKSAqIHQgKyBiKGExLCBhMikpICogdCArIGMoYTEpKSAqIHQ7XG59O1xuXG4vKlxuICAgIENyZWF0ZSBhIGN1YmljIGJlemllciByZXNvbHZlclxuKi9cbmZ1bmN0aW9uIGN1YmljQmV6aWVyKG1YMSwgbVkxLCBtWDIsIG1ZMikge1xuICAgIHZhciBzYW1wbGVWYWx1ZXMgPSBGTE9BVF8zMl9TVVBQT1JURUQgPyBuZXcgRmxvYXQzMkFycmF5KEtfU1BMSU5FX1RBQkxFX1NJWkUpIDogbmV3IEFycmF5KEtfU1BMSU5FX1RBQkxFX1NJWkUpO1xuICAgIHZhciBfcHJlY29tcHV0ZWQgPSBmYWxzZTtcblxuICAgIHZhciBiaW5hcnlTdWJkaXZpZGUgPSBmdW5jdGlvbiAoYVgsIGFBLCBhQikge1xuICAgICAgICB2YXIgaSA9IDA7XG4gICAgICAgIHZhciBjdXJyZW50WCA9IHVuZGVmaW5lZDtcbiAgICAgICAgdmFyIGN1cnJlbnRUID0gdW5kZWZpbmVkO1xuXG4gICAgICAgIGRvIHtcbiAgICAgICAgICAgIGN1cnJlbnRUID0gYUEgKyAoYUIgLSBhQSkgLyAyLjA7XG4gICAgICAgICAgICBjdXJyZW50WCA9IGNhbGNCZXppZXIoY3VycmVudFQsIG1YMSwgbVgyKSAtIGFYO1xuICAgICAgICAgICAgaWYgKGN1cnJlbnRYID4gMC4wKSB7XG4gICAgICAgICAgICAgICAgYUIgPSBjdXJyZW50VDtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgYUEgPSBjdXJyZW50VDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSB3aGlsZSAoTWF0aC5hYnMoY3VycmVudFgpID4gU1VCRElWSVNJT05fUFJFQ0lTSU9OICYmICsraSA8IFNVQkRJVklTSU9OX01BWF9JVEVSQVRJT05TKTtcblxuICAgICAgICByZXR1cm4gY3VycmVudFQ7XG4gICAgfTtcblxuICAgIHZhciBuZXd0b25SYXBoc29uSXRlcmF0ZSA9IGZ1bmN0aW9uIChhWCwgYUd1ZXNzVCkge1xuICAgICAgICB2YXIgaSA9IDA7XG4gICAgICAgIHZhciBjdXJyZW50U2xvcGUgPSAwO1xuICAgICAgICB2YXIgY3VycmVudFggPSB1bmRlZmluZWQ7XG5cbiAgICAgICAgZm9yICg7IGkgPCBORVdUT05fSVRFUkFUSU9OUzsgKytpKSB7XG4gICAgICAgICAgICBjdXJyZW50U2xvcGUgPSBnZXRTbG9wZShhR3Vlc3NULCBtWDEsIG1YMik7XG5cbiAgICAgICAgICAgIGlmIChjdXJyZW50U2xvcGUgPT09IDAuMCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBhR3Vlc3NUO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjdXJyZW50WCA9IGNhbGNCZXppZXIoYUd1ZXNzVCwgbVgxLCBtWDIpIC0gYVg7XG4gICAgICAgICAgICBhR3Vlc3NUIC09IGN1cnJlbnRYIC8gY3VycmVudFNsb3BlO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGFHdWVzc1Q7XG4gICAgfTtcblxuICAgIHZhciBjYWxjU2FtcGxlVmFsdWVzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IEtfU1BMSU5FX1RBQkxFX1NJWkU7ICsraSkge1xuICAgICAgICAgICAgc2FtcGxlVmFsdWVzW2ldID0gY2FsY0JlemllcihpICogS19TQU1QTEVfU1RFUF9TSVpFLCBtWDEsIG1YMik7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgdmFyIGdldFRGb3JYID0gZnVuY3Rpb24gKGFYKSB7XG4gICAgICAgIHZhciBpbnRlcnZhbFN0YXJ0ID0gMC4wO1xuICAgICAgICB2YXIgY3VycmVudFNhbXBsZSA9IDE7XG4gICAgICAgIHZhciBsYXN0U2FtcGxlID0gS19TUExJTkVfVEFCTEVfU0laRSAtIDE7XG4gICAgICAgIHZhciBkaXN0ID0gMC4wO1xuICAgICAgICB2YXIgZ3Vlc3NGb3JUID0gMC4wO1xuICAgICAgICB2YXIgaW5pdGlhbFNsb3BlID0gMC4wO1xuXG4gICAgICAgIGZvciAoOyBjdXJyZW50U2FtcGxlICE9IGxhc3RTYW1wbGUgJiYgc2FtcGxlVmFsdWVzW2N1cnJlbnRTYW1wbGVdIDw9IGFYOyArK2N1cnJlbnRTYW1wbGUpIHtcbiAgICAgICAgICAgIGludGVydmFsU3RhcnQgKz0gS19TQU1QTEVfU1RFUF9TSVpFO1xuICAgICAgICB9XG5cbiAgICAgICAgLS1jdXJyZW50U2FtcGxlO1xuXG4gICAgICAgIGRpc3QgPSAoYVggLSBzYW1wbGVWYWx1ZXNbY3VycmVudFNhbXBsZV0pIC8gKHNhbXBsZVZhbHVlc1tjdXJyZW50U2FtcGxlICsgMV0gLSBzYW1wbGVWYWx1ZXNbY3VycmVudFNhbXBsZV0pO1xuICAgICAgICBndWVzc0ZvclQgPSBpbnRlcnZhbFN0YXJ0ICsgZGlzdCAqIEtfU0FNUExFX1NURVBfU0laRTtcblxuICAgICAgICBpbml0aWFsU2xvcGUgPSBnZXRTbG9wZShndWVzc0ZvclQsIG1YMSwgbVgyKTtcblxuICAgICAgICAvLyBJZiBzbG9wZSBpcyBncmVhdGVyIHRoYW4gbWluXG4gICAgICAgIGlmIChpbml0aWFsU2xvcGUgPj0gTkVXVE9OX01JTl9TTE9QRSkge1xuICAgICAgICAgICAgcmV0dXJuIG5ld3RvblJhcGhzb25JdGVyYXRlKGFYLCBndWVzc0ZvclQpO1xuICAgICAgICAgICAgLy8gU2xvcGUgaXMgZXF1YWwgdG8gbWluXG4gICAgICAgIH0gZWxzZSBpZiAoaW5pdGlhbFNsb3BlID09PSAwLjApIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZ3Vlc3NGb3JUO1xuICAgICAgICAgICAgICAgIC8vIFNsb3BlIGlzIGxlc3MgdGhhbiBtaW5cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBiaW5hcnlTdWJkaXZpZGUoYVgsIGludGVydmFsU3RhcnQsIGludGVydmFsU3RhcnQgKyBLX1NBTVBMRV9TVEVQX1NJWkUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICB9O1xuXG4gICAgdmFyIHByZWNvbXB1dGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIF9wcmVjb21wdXRlZCA9IHRydWU7XG4gICAgICAgIGlmIChtWDEgIT0gbVkxIHx8IG1YMiAhPSBtWTIpIHtcbiAgICAgICAgICAgIGNhbGNTYW1wbGVWYWx1ZXMoKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICB2YXIgcmVzb2x2ZXIgPSBmdW5jdGlvbiAoYVgpIHtcbiAgICAgICAgdmFyIHJldHVyblZhbHVlID0gdW5kZWZpbmVkO1xuXG4gICAgICAgIGlmICghX3ByZWNvbXB1dGVkKSB7XG4gICAgICAgICAgICBwcmVjb21wdXRlKCk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBJZiBsaW5lYXIgZ3JhZGllbnQsIHJldHVybiBYIGFzIFRcbiAgICAgICAgaWYgKG1YMSA9PT0gbVkxICYmIG1YMiA9PT0gbVkyKSB7XG4gICAgICAgICAgICByZXR1cm5WYWx1ZSA9IGFYO1xuXG4gICAgICAgICAgICAvLyBJZiBhdCBzdGFydCwgcmV0dXJuIDBcbiAgICAgICAgfSBlbHNlIGlmIChhWCA9PT0gMCkge1xuICAgICAgICAgICAgICAgIHJldHVyblZhbHVlID0gMDtcblxuICAgICAgICAgICAgICAgIC8vIElmIGF0IGVuZCwgcmV0dXJuIDFcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoYVggPT09IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuVmFsdWUgPSAxO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVyblZhbHVlID0gY2FsY0JlemllcihnZXRURm9yWChhWCksIG1ZMSwgbVkyKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHJldHVyblZhbHVlO1xuICAgIH07XG5cbiAgICByZXR1cm4gcmVzb2x2ZXI7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5OeVl5OWhZM1JwYjI1ekwyVmhjMmx1Wnk5amNtVmhkR1V0WW1WNmFXVnlMbXB6SWwwc0ltNWhiV1Z6SWpwYlhTd2liV0Z3Y0dsdVozTWlPaUk3T3p0clFrRnRRM2RDT3pzN096czdPenM3T3pzN096czdPMEZCY0VKNFFpeEpRVUZOTEc5Q1FVRnZRaXhEUVVGd1FqdEJRVU5PTEVsQlFVMHNiVUpCUVcxQ0xFdEJRVzVDTzBGQlEwNHNTVUZCVFN4M1FrRkJkMElzVTBGQmVFSTdRVUZEVGl4SlFVRk5MRFpDUVVFMlFpeEZRVUUzUWp0QlFVTk9MRWxCUVUwc2MwSkJRWE5DTEVWQlFYUkNPMEZCUTA0c1NVRkJUU3h4UWtGQmNVSXNUMEZCVHl4elFrRkJjMElzUjBGQmRFSXNRMEZCVUR0QlFVTXpRaXhKUVVGTkxIRkNRVUZ6UWl4UFFVRlBMRmxCUVZBc1MwRkJkMElzVjBGQmVFSTdPenRCUVVjMVFpeEpRVUZOTEVsQlFVa3NWVUZCUXl4RlFVRkVMRVZCUVVzc1JVRkJURHRYUVVGWkxFMUJRVTBzVFVGQlRTeEZRVUZPTEVkQlFWY3NUVUZCVFN4RlFVRk9PME5CUVRkQ08wRkJRMVlzU1VGQlRTeEpRVUZKTEZWQlFVTXNSVUZCUkN4RlFVRkxMRVZCUVV3N1YwRkJXU3hOUVVGTkxFVkJRVTRzUjBGQlZ5eE5RVUZOTEVWQlFVNDdRMEZCZGtJN1FVRkRWaXhKUVVGTkxFbEJRVWtzVlVGQlF5eEZRVUZFTzFkQlFWRXNUVUZCVFN4RlFVRk9PME5CUVZJN08wRkJSVllzU1VGQlRTeFhRVUZYTEZWQlFVTXNRMEZCUkN4RlFVRkpMRVZCUVVvc1JVRkJVU3hGUVVGU08xZEJRV1VzVFVGQlRTeEZRVUZGTEVWQlFVWXNSVUZCVFN4RlFVRk9MRU5CUVU0c1IwRkJhMElzUTBGQmJFSXNSMEZCYzBJc1EwRkJkRUlzUjBGQk1FSXNUVUZCVFN4RlFVRkZMRVZCUVVZc1JVRkJUU3hGUVVGT0xFTkJRVTRzUjBGQmEwSXNRMEZCYkVJc1IwRkJjMElzUlVGQlJTeEZRVUZHTEVOQlFXaEVPME5CUVdZN08wRkJSV3BDTEVsQlFVMHNZVUZCWVN4VlFVRkRMRU5CUVVRc1JVRkJTU3hGUVVGS0xFVkJRVkVzUlVGQlVqdFhRVUZsTEVOQlFVTXNRMEZCUXl4RlFVRkZMRVZCUVVZc1JVRkJUU3hGUVVGT0xFbEJRVmtzUTBGQldpeEhRVUZuUWl4RlFVRkZMRVZCUVVZc1JVRkJUU3hGUVVGT0xFTkJRV2hDTEVOQlFVUXNSMEZCT0VJc1EwRkJPVUlzUjBGQmEwTXNSVUZCUlN4RlFVRkdMRU5CUVd4RExFTkJRVVFzUjBGQk5FTXNRMEZCTlVNN1EwRkJaanM3T3pzN1FVRkxTaXhUUVVGVExGZEJRVlFzUTBGQmNVSXNSMEZCY2tJc1JVRkJNRUlzUjBGQk1VSXNSVUZCSzBJc1IwRkJMMElzUlVGQmIwTXNSMEZCY0VNc1JVRkJlVU03UVVGRGNFUXNVVUZCVFN4bFFVRmxMSEZDUVVGeFFpeEpRVUZKTEZsQlFVb3NRMEZCYVVJc2JVSkJRV3BDTEVOQlFYSkNMRWRCUVRaRUxFbEJRVWtzUzBGQlNpeERRVUZWTEcxQ1FVRldMRU5CUVRkRUxFTkJSQ3RDTzBGQlJYQkVMRkZCUVVrc1pVRkJaU3hMUVVGbUxFTkJSbWRFT3p0QlFVbHdSQ3hSUVVGTkxHdENRVUZyUWl4VlFVRkRMRVZCUVVRc1JVRkJTeXhGUVVGTUxFVkJRVk1zUlVGQlZDeEZRVUZuUWp0QlFVTndReXhaUVVGSkxFbEJRVWtzUTBGQlNpeERRVVJuUXp0QlFVVndReXhaUVVGSkxHOUNRVUZLTEVOQlJtOURPMEZCUjNCRExGbEJRVWtzYjBKQlFVb3NRMEZJYjBNN08wRkJTM0JETEZkQlFVYzdRVUZEUXl4MVFrRkJWeXhMUVVGTExFTkJRVU1zUzBGQlN5eEZRVUZNTEVOQlFVUXNSMEZCV1N4SFFVRmFMRU5CUkdwQ08wRkJSVU1zZFVKQlFWY3NWMEZCVnl4UlFVRllMRVZCUVhGQ0xFZEJRWEpDTEVWQlFUQkNMRWRCUVRGQ0xFbEJRV2xETEVWQlFXcERMRU5CUmxvN1FVRkhReXhuUWtGQlNTeFhRVUZYTEVkQlFWZ3NSVUZCWjBJN1FVRkRhRUlzY1VKQlFVc3NVVUZCVEN4RFFVUm5RanRoUVVGd1FpeE5RVVZQTzBGQlEwZ3NjVUpCUVVzc1VVRkJUQ3hEUVVSSE8yRkJSbEE3VTBGSVNpeFJRVkZUTEV0QlFVc3NSMEZCVEN4RFFVRlRMRkZCUVZRc1NVRkJjVUlzY1VKQlFYSkNMRWxCUVRoRExFVkJRVVVzUTBGQlJpeEhRVUZOTERCQ1FVRk9MRVZCWW01Q096dEJRV1Z3UXl4bFFVRlBMRkZCUVZBc1EwRm1iME03UzBGQmFFSXNRMEZLTkVJN08wRkJjMEp3UkN4UlFVRk5MSFZDUVVGMVFpeFZRVUZETEVWQlFVUXNSVUZCU3l4UFFVRk1MRVZCUVdsQ08wRkJRekZETEZsQlFVa3NTVUZCU1N4RFFVRktMRU5CUkhORE8wRkJSVEZETEZsQlFVa3NaVUZCWlN4RFFVRm1MRU5CUm5ORE8wRkJSekZETEZsQlFVa3NiMEpCUVVvc1EwRklNRU03TzBGQlN6RkRMR1ZCUVU4c1NVRkJTU3hwUWtGQlNpeEZRVUYxUWl4RlFVRkZMRU5CUVVZc1JVRkJTenRCUVVNdlFpd3lRa0ZCWlN4VFFVRlRMRTlCUVZRc1JVRkJhMElzUjBGQmJFSXNSVUZCZFVJc1IwRkJka0lzUTBGQlppeERRVVFyUWpzN1FVRkhMMElzWjBKQlFVa3NhVUpCUVdsQ0xFZEJRV3BDTEVWQlFYTkNPMEZCUTNSQ0xIVkNRVUZQTEU5QlFWQXNRMEZFYzBJN1lVRkJNVUk3TzBGQlNVRXNkVUpCUVZjc1YwRkJWeXhQUVVGWUxFVkJRVzlDTEVkQlFYQkNMRVZCUVhsQ0xFZEJRWHBDTEVsQlFXZERMRVZCUVdoRExFTkJVRzlDTzBGQlVTOUNMSFZDUVVGWExGZEJRVmNzV1VGQldDeERRVkp2UWp0VFFVRnVRenM3UVVGWFFTeGxRVUZQTEU5QlFWQXNRMEZvUWpCRE8wdEJRV3BDTEVOQmRFSjFRanM3UVVGNVEzQkVMRkZCUVUwc2JVSkJRVzFDTEZsQlFVMDdRVUZETTBJc1lVRkJTeXhKUVVGSkxFbEJRVWtzUTBGQlNpeEZRVUZQTEVsQlFVa3NiVUpCUVVvc1JVRkJlVUlzUlVGQlJTeERRVUZHTEVWQlFVczdRVUZETVVNc2VVSkJRV0VzUTBGQllpeEpRVUZyUWl4WFFVRlhMRWxCUVVrc2EwSkJRVW9zUlVGQmQwSXNSMEZCYmtNc1JVRkJkME1zUjBGQmVFTXNRMEZCYkVJc1EwRkVNRU03VTBGQk9VTTdTMEZFY1VJc1EwRjZRekpDT3p0QlFTdERjRVFzVVVGQlRTeFhRVUZYTEZWQlFVTXNSVUZCUkN4RlFVRlJPMEZCUTNKQ0xGbEJRVWtzWjBKQlFXZENMRWRCUVdoQ0xFTkJSR2xDTzBGQlJYSkNMRmxCUVVrc1owSkJRV2RDTEVOQlFXaENMRU5CUm1sQ08wRkJSM0pDTEZsQlFVa3NZVUZCWVN4elFrRkJjMElzUTBGQmRFSXNRMEZJU1R0QlFVbHlRaXhaUVVGSkxFOUJRVThzUjBGQlVDeERRVXBwUWp0QlFVdHlRaXhaUVVGSkxGbEJRVmtzUjBGQldpeERRVXhwUWp0QlFVMXlRaXhaUVVGSkxHVkJRV1VzUjBGQlppeERRVTVwUWpzN1FVRlJja0lzWlVGQlR5eHBRa0ZCYVVJc1ZVRkJha0lzU1VGQkswSXNZVUZCWVN4aFFVRmlMRXRCUVN0Q0xFVkJRUzlDTEVWQlFXMURMRVZCUVVVc1lVRkJSaXhGUVVGcFFqdEJRVU4wUml3MlFrRkJhVUlzYTBKQlFXcENMRU5CUkhOR08xTkJRVEZHT3p0QlFVbEJMRlZCUVVVc1lVRkJSaXhEUVZweFFqczdRVUZqY2tJc1pVRkJUeXhEUVVGRExFdEJRVXNzWVVGQllTeGhRVUZpTEVOQlFVd3NRMEZCUkN4SlFVRnpReXhoUVVGaExHZENRVUZqTEVOQlFXUXNRMEZCWWl4SFFVRm5ReXhoUVVGaExHRkJRV0lzUTBGQmFFTXNRMEZCZEVNc1EwRmtZenRCUVdWeVFpeHZRa0ZCV1N4blFrRkJaMElzVDBGQlR5eHJRa0ZCVUN4RFFXWlFPenRCUVdsQ2NrSXNkVUpCUVdVc1UwRkJVeXhUUVVGVUxFVkJRVzlDTEVkQlFYQkNMRVZCUVhsQ0xFZEJRWHBDTEVOQlFXWTdPenRCUVdwQ2NVSXNXVUZ2UW1wQ0xHZENRVUZuUWl4blFrRkJhRUlzUlVGQmEwTTdRVUZEYkVNc2JVSkJRVThzY1VKQlFYRkNMRVZCUVhKQ0xFVkJRWGxDTEZOQlFYcENMRU5CUVZBN08wRkJSR3RETEZOQlFYUkRMRTFCUjA4c1NVRkJTU3hwUWtGQmFVSXNSMEZCYWtJc1JVRkJjMEk3UVVGRE4wSXNkVUpCUVU4c1UwRkJVRHM3UVVGRU5rSXNZVUZCTVVJc1RVRkhRVHRCUVVOSUxESkNRVUZQTEdkQ1FVRm5RaXhGUVVGb1FpeEZRVUZ2UWl4aFFVRndRaXhGUVVGdFF5eG5Ra0ZCWjBJc2EwSkJRV2hDTEVOQlFURkRMRU5CUkVjN2FVSkJTRUU3UzBGMlFrMHNRMEV2UTIxRE96dEJRVGhGY0VRc1VVRkJUU3hoUVVGaExGbEJRVTA3UVVGRGNrSXNkVUpCUVdVc1NVRkJaaXhEUVVSeFFqdEJRVVZ5UWl4WlFVRkpMRTlCUVU4c1IwRkJVQ3hKUVVGakxFOUJRVThzUjBGQlVDeEZRVUZaTzBGQlF6RkNMQ3RDUVVRd1FqdFRRVUU1UWp0TFFVWmxMRU5CT1VWcFF6czdRVUZ4Um5CRUxGRkJRVTBzVjBGQlZ5eFZRVUZETEVWQlFVUXNSVUZCVVR0QlFVTnlRaXhaUVVGSkxIVkNRVUZLTEVOQlJIRkNPenRCUVVkeVFpeFpRVUZKTEVOQlFVTXNXVUZCUkN4RlFVRmxPMEZCUTJZc2VVSkJSR1U3VTBGQmJrSTdPenRCUVVoeFFpeFpRVkZxUWl4UlFVRlJMRWRCUVZJc1NVRkJaU3hSUVVGUkxFZEJRVklzUlVGQllUdEJRVU0xUWl3d1FrRkJZeXhGUVVGa096czdRVUZFTkVJc1UwRkJhRU1zVFVGSlR5eEpRVUZKTEU5QlFVOHNRMEZCVUN4RlFVRlZPMEZCUTJwQ0xEaENRVUZqTEVOQlFXUTdPenRCUVVScFFpeGhRVUZrTEUxQlNVRXNTVUZCU1N4UFFVRlBMRU5CUVZBc1JVRkJWVHRCUVVOcVFpeHJRMEZCWXl4RFFVRmtMRU5CUkdsQ08ybENRVUZrTEUxQlIwRTdRVUZEU0N4clEwRkJZeXhYUVVGWExGTkJRVk1zUlVGQlZDeERRVUZZTEVWQlFYbENMRWRCUVhwQ0xFVkJRVGhDTEVkQlFUbENMRU5CUVdRc1EwRkVSenRwUWtGSVFUczdRVUZQVUN4bFFVRlBMRmRCUVZBc1EwRjJRbkZDTzB0QlFWSXNRMEZ5Um0xRE96dEJRU3RIY0VRc1YwRkJUeXhSUVVGUUxFTkJMMGR2UkR0RFFVRjZReUlzSW1acGJHVWlPaUpqY21WaGRHVXRZbVY2YVdWeUxtcHpJaXdpYzI5MWNtTmxVbTl2ZENJNklpOVZjMlZ5Y3k5TllYUjBMMU5wZEdWekwzQnZjRzF2ZEdsdmJpSXNJbk52ZFhKalpYTkRiMjUwWlc1MElqcGJJaThxWEc0Z0lDQWdRbVY2YVdWeUlHWjFibU4wYVc5dUlHZGxibVZ5WVhSdmNseHVJQ0FnSUNBZ0lDQmNiaUFnSUNCSFljT3JkR0Z1SUZKbGJtRjFaR1ZoZFNkeklFSmxlbWxsY2tWaGMybHVaMXh1SUNBZ0lHaDBkSEJ6T2k4dloybDBhSFZpTG1OdmJTOW5jbVV2WW1WNmFXVnlMV1ZoYzJsdVp5OWliRzlpTDIxaGMzUmxjaTlwYm1SbGVDNXFjeUFnWEc0Z0lDQWdhSFIwY0hNNkx5OW5hWFJvZFdJdVkyOXRMMmR5WlM5aVpYcHBaWEl0WldGemFXNW5MMkpzYjJJdmJXRnpkR1Z5TDB4SlEwVk9VMFZjYmlBZ0lDQlpiM1VuY21VZ1lTQm9aWEp2WEc0Z0lDQWdYRzRnSUNBZ1ZYTmxYRzRnSUNBZ1hHNGdJQ0FnSUNBZ0lIWmhjaUJsWVhObFQzVjBJRDBnYm1WM0lFSmxlbWxsY2lndU1UY3NMalkzTEM0NE15d3VOamNwTEZ4dUlDQWdJQ0FnSUNBZ0lDQWdlQ0E5SUdWaGMyVlBkWFFvTUM0MUtUc2dMeThnY21WMGRYSnVjeUF3TGpZeU55NHVMbHh1S2k5Y2JseHVMeThnUTI5dWMzUmhiblJ6WEc1amIyNXpkQ0JPUlZkVVQwNWZTVlJGVWtGVVNVOU9VeUE5SURnN1hHNWpiMjV6ZENCT1JWZFVUMDVmVFVsT1gxTk1UMUJGSUQwZ01DNHdNREU3WEc1amIyNXpkQ0JUVlVKRVNWWkpVMGxQVGw5UVVrVkRTVk5KVDA0Z1BTQXdMakF3TURBd01ERTdYRzVqYjI1emRDQlRWVUpFU1ZaSlUwbFBUbDlOUVZoZlNWUkZVa0ZVU1U5T1V5QTlJREV3TzF4dVkyOXVjM1FnUzE5VFVFeEpUa1ZmVkVGQ1RFVmZVMGxhUlNBOUlERXhPMXh1WTI5dWMzUWdTMTlUUVUxUVRFVmZVMVJGVUY5VFNWcEZJRDBnTVM0d0lDOGdLRXRmVTFCTVNVNUZYMVJCUWt4RlgxTkpXa1VnTFNBeExqQXBPMXh1WTI5dWMzUWdSa3hQUVZSZk16SmZVMVZRVUU5U1ZFVkVJRDBnS0hSNWNHVnZaaUJHYkc5aGRETXlRWEp5WVhrZ0lUMDlJQ2QxYm1SbFptbHVaV1FuS1R0Y2JseHVMeThnU0dWc2NHVnlJRzFsZEdodlpITmNibU52Ym5OMElHRWdQU0FvWVRFc0lHRXlLU0E5UGlBeExqQWdMU0F6TGpBZ0tpQmhNaUFySURNdU1DQXFJR0V4TzF4dVkyOXVjM1FnWWlBOUlDaGhNU3dnWVRJcElEMCtJRE11TUNBcUlHRXlJQzBnTmk0d0lDb2dZVEU3WEc1amIyNXpkQ0JqSUQwZ0tHRXhLU0E5UGlBekxqQWdLaUJoTVR0Y2JseHVZMjl1YzNRZ1oyVjBVMnh2Y0dVZ1BTQW9kQ3dnWVRFc0lHRXlLU0E5UGlBekxqQWdLaUJoS0dFeExDQmhNaWtnS2lCMElDb2dkQ0FySURJdU1DQXFJR0lvWVRFc0lHRXlLU0FxSUhRZ0t5QmpLR0V4S1R0Y2JseHVZMjl1YzNRZ1kyRnNZMEpsZW1sbGNpQTlJQ2gwTENCaE1Td2dZVElwSUQwK0lDZ29ZU2hoTVN3Z1lUSXBJQ29nZENBcklHSW9ZVEVzSUdFeUtTa2dLaUIwSUNzZ1l5aGhNU2twSUNvZ2REdGNibHh1THlwY2JpQWdJQ0JEY21WaGRHVWdZU0JqZFdKcFl5QmlaWHBwWlhJZ2NtVnpiMngyWlhKY2Jpb3ZYRzVsZUhCdmNuUWdaR1ZtWVhWc2RDQm1kVzVqZEdsdmJpQmpkV0pwWTBKbGVtbGxjaWh0V0RFc0lHMVpNU3dnYlZneUxDQnRXVElwSUh0Y2JpQWdJQ0JqYjI1emRDQnpZVzF3YkdWV1lXeDFaWE1nUFNCR1RFOUJWRjh6TWw5VFZWQlFUMUpVUlVRZ1B5QnVaWGNnUm14dllYUXpNa0Z5Y21GNUtFdGZVMUJNU1U1RlgxUkJRa3hGWDFOSldrVXBJRG9nYm1WM0lFRnljbUY1S0V0ZlUxQk1TVTVGWDFSQlFreEZYMU5KV2tVcE8xeHVJQ0FnSUd4bGRDQmZjSEpsWTI5dGNIVjBaV1FnUFNCbVlXeHpaVHRjYmx4dUlDQWdJR052Ym5OMElHSnBibUZ5ZVZOMVltUnBkbWxrWlNBOUlDaGhXQ3dnWVVFc0lHRkNLU0E5UGlCN1hHNGdJQ0FnSUNBZ0lHeGxkQ0JwSUQwZ01EdGNiaUFnSUNBZ0lDQWdiR1YwSUdOMWNuSmxiblJZTzF4dUlDQWdJQ0FnSUNCc1pYUWdZM1Z5Y21WdWRGUTdYRzVjYmlBZ0lDQWdJQ0FnWkc4Z2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnWTNWeWNtVnVkRlFnUFNCaFFTQXJJQ2hoUWlBdElHRkJLU0F2SURJdU1EdGNiaUFnSUNBZ0lDQWdJQ0FnSUdOMWNuSmxiblJZSUQwZ1kyRnNZMEpsZW1sbGNpaGpkWEp5Wlc1MFZDd2diVmd4TENCdFdESXBJQzBnWVZnN1hHNGdJQ0FnSUNBZ0lDQWdJQ0JwWmlBb1kzVnljbVZ1ZEZnZ1BpQXdMakFwSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCaFFpQTlJR04xY25KbGJuUlVPMXh1SUNBZ0lDQWdJQ0FnSUNBZ2ZTQmxiSE5sSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCaFFTQTlJR04xY25KbGJuUlVPMXh1SUNBZ0lDQWdJQ0FnSUNBZ2ZWeHVJQ0FnSUNBZ0lDQjlJSGRvYVd4bElDaE5ZWFJvTG1GaWN5aGpkWEp5Wlc1MFdDa2dQaUJUVlVKRVNWWkpVMGxQVGw5UVVrVkRTVk5KVDA0Z0ppWWdLeXRwSUR3Z1UxVkNSRWxXU1ZOSlQwNWZUVUZZWDBsVVJWSkJWRWxQVGxNcE8xeHVYRzRnSUNBZ0lDQWdJSEpsZEhWeWJpQmpkWEp5Wlc1MFZEdGNiaUFnSUNCOU8xeHVYRzRnSUNBZ1kyOXVjM1FnYm1WM2RHOXVVbUZ3YUhOdmJrbDBaWEpoZEdVZ1BTQW9ZVmdzSUdGSGRXVnpjMVFwSUQwK0lIdGNiaUFnSUNBZ0lDQWdiR1YwSUdrZ1BTQXdPMXh1SUNBZ0lDQWdJQ0JzWlhRZ1kzVnljbVZ1ZEZOc2IzQmxJRDBnTUR0Y2JpQWdJQ0FnSUNBZ2JHVjBJR04xY25KbGJuUllPMXh1WEc0Z0lDQWdJQ0FnSUdadmNpQW9PeUJwSUR3Z1RrVlhWRTlPWDBsVVJWSkJWRWxQVGxNN0lDc3JhU2tnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdZM1Z5Y21WdWRGTnNiM0JsSUQwZ1oyVjBVMnh2Y0dVb1lVZDFaWE56VkN3Z2JWZ3hMQ0J0V0RJcE8xeHVJQ0FnSUNBZ0lDQWdJQ0FnWEc0Z0lDQWdJQ0FnSUNBZ0lDQnBaaUFvWTNWeWNtVnVkRk5zYjNCbElEMDlQU0F3TGpBcElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQnlaWFIxY200Z1lVZDFaWE56VkR0Y2JpQWdJQ0FnSUNBZ0lDQWdJSDFjYmlBZ0lDQWdJQ0FnSUNBZ0lGeHVJQ0FnSUNBZ0lDQWdJQ0FnWTNWeWNtVnVkRmdnUFNCallXeGpRbVY2YVdWeUtHRkhkV1Z6YzFRc0lHMVlNU3dnYlZneUtTQXRJR0ZZTzF4dUlDQWdJQ0FnSUNBZ0lDQWdZVWQxWlhOelZDQXRQU0JqZFhKeVpXNTBXQ0F2SUdOMWNuSmxiblJUYkc5d1pUdGNiaUFnSUNBZ0lDQWdmVnh1SUNBZ0lDQWdJQ0JjYmlBZ0lDQWdJQ0FnY21WMGRYSnVJR0ZIZFdWemMxUTdYRzRnSUNBZ2ZUdGNibHh1SUNBZ0lHTnZibk4wSUdOaGJHTlRZVzF3YkdWV1lXeDFaWE1nUFNBb0tTQTlQaUI3WEc0Z0lDQWdJQ0FnSUdadmNpQW9iR1YwSUdrZ1BTQXdPeUJwSUR3Z1MxOVRVRXhKVGtWZlZFRkNURVZmVTBsYVJUc2dLeXRwS1NCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0J6WVcxd2JHVldZV3gxWlhOYmFWMGdQU0JqWVd4alFtVjZhV1Z5S0drZ0tpQkxYMU5CVFZCTVJWOVRWRVZRWDFOSldrVXNJRzFZTVN3Z2JWZ3lLVHRjYmlBZ0lDQWdJQ0FnZlZ4dUlDQWdJSDA3WEc1Y2JpQWdJQ0JqYjI1emRDQm5aWFJVUm05eVdDQTlJQ2hoV0NrZ1BUNGdlMXh1SUNBZ0lDQWdJQ0JzWlhRZ2FXNTBaWEoyWVd4VGRHRnlkQ0E5SURBdU1EdGNiaUFnSUNBZ0lDQWdiR1YwSUdOMWNuSmxiblJUWVcxd2JHVWdQU0F4TzF4dUlDQWdJQ0FnSUNCc1pYUWdiR0Z6ZEZOaGJYQnNaU0E5SUV0ZlUxQk1TVTVGWDFSQlFreEZYMU5KV2tVZ0xTQXhPMXh1SUNBZ0lDQWdJQ0JzWlhRZ1pHbHpkQ0E5SURBdU1EdGNiaUFnSUNBZ0lDQWdiR1YwSUdkMVpYTnpSbTl5VkNBOUlEQXVNRHRjYmlBZ0lDQWdJQ0FnYkdWMElHbHVhWFJwWVd4VGJHOXdaU0E5SURBdU1EdGNiaUFnSUNBZ0lDQWdJQ0FnSUZ4dUlDQWdJQ0FnSUNCbWIzSWdLRHNnWTNWeWNtVnVkRk5oYlhCc1pTQWhQU0JzWVhOMFUyRnRjR3hsSUNZbUlITmhiWEJzWlZaaGJIVmxjMXRqZFhKeVpXNTBVMkZ0Y0d4bFhTQThQU0JoV0RzZ0t5dGpkWEp5Wlc1MFUyRnRjR3hsS1NCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0JwYm5SbGNuWmhiRk4wWVhKMElDczlJRXRmVTBGTlVFeEZYMU5VUlZCZlUwbGFSVHRjYmlBZ0lDQWdJQ0FnZlZ4dUlDQWdJQ0FnSUNCY2JpQWdJQ0FnSUNBZ0xTMWpkWEp5Wlc1MFUyRnRjR3hsTzF4dUlDQWdJQ0FnSUNCY2JpQWdJQ0FnSUNBZ1pHbHpkQ0E5SUNoaFdDQXRJSE5oYlhCc1pWWmhiSFZsYzF0amRYSnlaVzUwVTJGdGNHeGxYU2tnTHlBb2MyRnRjR3hsVm1Gc2RXVnpXMk4xY25KbGJuUlRZVzF3YkdVck1WMGdMU0J6WVcxd2JHVldZV3gxWlhOYlkzVnljbVZ1ZEZOaGJYQnNaVjBwTzF4dUlDQWdJQ0FnSUNCbmRXVnpjMFp2Y2xRZ1BTQnBiblJsY25aaGJGTjBZWEowSUNzZ1pHbHpkQ0FxSUV0ZlUwRk5VRXhGWDFOVVJWQmZVMGxhUlR0Y2JpQWdJQ0FnSUNBZ1hHNGdJQ0FnSUNBZ0lHbHVhWFJwWVd4VGJHOXdaU0E5SUdkbGRGTnNiM0JsS0dkMVpYTnpSbTl5VkN3Z2JWZ3hMQ0J0V0RJcE8xeHVJQ0FnSUNBZ0lDQmNiaUFnSUNBZ0lDQWdMeThnU1dZZ2MyeHZjR1VnYVhNZ1ozSmxZWFJsY2lCMGFHRnVJRzFwYmx4dUlDQWdJQ0FnSUNCcFppQW9hVzVwZEdsaGJGTnNiM0JsSUQ0OUlFNUZWMVJQVGw5TlNVNWZVMHhQVUVVcElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUhKbGRIVnliaUJ1WlhkMGIyNVNZWEJvYzI5dVNYUmxjbUYwWlNoaFdDd2daM1ZsYzNOR2IzSlVLVHRjYmlBZ0lDQWdJQ0FnTHk4Z1UyeHZjR1VnYVhNZ1pYRjFZV3dnZEc4Z2JXbHVYRzRnSUNBZ0lDQWdJSDBnWld4elpTQnBaaUFvYVc1cGRHbGhiRk5zYjNCbElEMDlQU0F3TGpBcElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUhKbGRIVnliaUJuZFdWemMwWnZjbFE3WEc0Z0lDQWdJQ0FnSUM4dklGTnNiM0JsSUdseklHeGxjM01nZEdoaGJpQnRhVzVjYmlBZ0lDQWdJQ0FnZlNCbGJITmxJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lISmxkSFZ5YmlCaWFXNWhjbmxUZFdKa2FYWnBaR1VvWVZnc0lHbHVkR1Z5ZG1Gc1UzUmhjblFzSUdsdWRHVnlkbUZzVTNSaGNuUWdLeUJMWDFOQlRWQk1SVjlUVkVWUVgxTkpXa1VwTzF4dUlDQWdJQ0FnSUNCOVhHNGdJQ0FnZlR0Y2JseHVJQ0FnSUdOdmJuTjBJSEJ5WldOdmJYQjFkR1VnUFNBb0tTQTlQaUI3WEc0Z0lDQWdJQ0FnSUY5d2NtVmpiMjF3ZFhSbFpDQTlJSFJ5ZFdVN1hHNGdJQ0FnSUNBZ0lHbG1JQ2h0V0RFZ0lUMGdiVmt4SUh4OElHMVlNaUFoUFNCdFdUSXBJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lHTmhiR05UWVcxd2JHVldZV3gxWlhNb0tUdGNiaUFnSUNBZ0lDQWdmVnh1SUNBZ0lIMDdYRzVjYmlBZ0lDQmpiMjV6ZENCeVpYTnZiSFpsY2lBOUlDaGhXQ2tnUFQ0Z2UxeHVJQ0FnSUNBZ0lDQnNaWFFnY21WMGRYSnVWbUZzZFdVN1hHNWNiaUFnSUNBZ0lDQWdhV1lnS0NGZmNISmxZMjl0Y0hWMFpXUXBJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lIQnlaV052YlhCMWRHVW9LVHRjYmlBZ0lDQWdJQ0FnZlZ4dUlDQWdJQ0FnSUNCY2JpQWdJQ0FnSUNBZ0x5OGdTV1lnYkdsdVpXRnlJR2R5WVdScFpXNTBMQ0J5WlhSMWNtNGdXQ0JoY3lCVVhHNGdJQ0FnSUNBZ0lHbG1JQ2h0V0RFZ1BUMDlJRzFaTVNBbUppQnRXRElnUFQwOUlHMVpNaWtnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdjbVYwZFhKdVZtRnNkV1VnUFNCaFdEdGNiaUFnSUNBZ0lDQWdJQ0FnSUZ4dUlDQWdJQ0FnSUNBdkx5QkpaaUJoZENCemRHRnlkQ3dnY21WMGRYSnVJREJjYmlBZ0lDQWdJQ0FnZlNCbGJITmxJR2xtSUNoaFdDQTlQVDBnTUNrZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnY21WMGRYSnVWbUZzZFdVZ1BTQXdPMXh1SUNBZ0lDQWdJQ0FnSUNBZ1hHNGdJQ0FnSUNBZ0lDOHZJRWxtSUdGMElHVnVaQ3dnY21WMGRYSnVJREZjYmlBZ0lDQWdJQ0FnZlNCbGJITmxJR2xtSUNoaFdDQTlQVDBnTVNrZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnY21WMGRYSnVWbUZzZFdVZ1BTQXhPMXh1WEc0Z0lDQWdJQ0FnSUgwZ1pXeHpaU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQnlaWFIxY201V1lXeDFaU0E5SUdOaGJHTkNaWHBwWlhJb1oyVjBWRVp2Y2xnb1lWZ3BMQ0J0V1RFc0lHMVpNaWs3WEc0Z0lDQWdJQ0FnSUgxY2JpQWdJQ0FnSUNBZ1hHNGdJQ0FnSUNBZ0lISmxkSFZ5YmlCeVpYUjFjbTVXWVd4MVpUdGNiaUFnSUNCOU8xeHVYRzRnSUNBZ2NtVjBkWEp1SUhKbGMyOXNkbVZ5TzF4dWZWeHVJbDE5XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9hY3Rpb25zL2Vhc2luZy9jcmVhdGUtYmV6aWVyLmpzXG4gKiogbW9kdWxlIGlkID0gNDlcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbi8qXG4gICAgRGV0ZWN0IGFuZCBsb2FkIGFuIGFwcHJvcHJpYXRlIGNsb2NrIHNldHRpbmcgZm9yIHRoZSBlbnZpcm9ubWVudFxuKi9cblxudmFyIGhhc1JBRiA9IHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUgPyB0cnVlIDogZmFsc2U7XG5cbnZhciB0aWNrID0gdW5kZWZpbmVkO1xuXG5pZiAoaGFzUkFGKSB7XG4gICAgdGljayA9IGZ1bmN0aW9uIChjYWxsYmFjaykge1xuICAgICAgICByZXR1cm4gd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZShjYWxsYmFjayk7XG4gICAgfTtcbn0gZWxzZSB7XG4gICAgKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgLypcbiAgICAgICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSBwb2x5ZmlsbFxuICAgICAgICAgICAgXG4gICAgICAgICAgICBGb3IgSUU4LzkgRmxpbnN0b25lcyBhbmQgbm9uLWJyb3dzZXIgZW52aXJvbm1lbnRzXG4gICAgICAgICAgICAgVGFrZW4gZnJvbSBQYXVsIElyaXNoLiBXZSd2ZSBzdHJpcHBlZCBvdXQgY2FuY2VsQW5pbWF0aW9uRnJhbWUgY2hlY2tzIGJlY2F1c2Ugd2UgZG9uJ3QgZm94IHdpdGggdGhhdFxuICAgICAgICAgICAgXG4gICAgICAgICAgICBodHRwOi8vcGF1bGlyaXNoLmNvbS8yMDExL3JlcXVlc3RhbmltYXRpb25mcmFtZS1mb3Itc21hcnQtYW5pbWF0aW5nL1xuICAgICAgICAgICAgaHR0cDovL215Lm9wZXJhLmNvbS9lbW9sbGVyL2Jsb2cvMjAxMS8xMi8yMC9yZXF1ZXN0YW5pbWF0aW9uZnJhbWUtZm9yLXNtYXJ0LWVyLWFuaW1hdGluZ1xuICAgICAgICAgICAgIFxuICAgICAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lIHBvbHlmaWxsIGJ5IEVyaWsgTcO2bGxlci4gZml4ZXMgZnJvbSBQYXVsIElyaXNoIGFuZCBUaW5vIFppamRlbFxuICAgICAgICAgICAgIFxuICAgICAgICAgICAgTUlUIGxpY2Vuc2VcbiAgICAgICAgKi9cbiAgICAgICAgdmFyIGxhc3RUaW1lID0gMDtcblxuICAgICAgICB0aWNrID0gZnVuY3Rpb24gKGNhbGxiYWNrKSB7XG4gICAgICAgICAgICB2YXIgY3VycmVudFRpbWUgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcbiAgICAgICAgICAgIHZhciB0aW1lVG9DYWxsID0gTWF0aC5tYXgoMCwgMTYgLSAoY3VycmVudFRpbWUgLSBsYXN0VGltZSkpO1xuXG4gICAgICAgICAgICBsYXN0VGltZSA9IGN1cnJlbnRUaW1lICsgdGltZVRvQ2FsbDtcblxuICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGNhbGxiYWNrKGxhc3RUaW1lKTtcbiAgICAgICAgICAgIH0sIHRpbWVUb0NhbGwpO1xuICAgICAgICB9O1xuICAgIH0pKCk7XG59XG5cbmV4cG9ydHMuZGVmYXVsdCA9IHRpY2s7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5OeVl5OXdjbTlqWlhOekwzUnBZMnN1YW5NaVhTd2libUZ0WlhNaU9sdGRMQ0p0WVhCd2FXNW5jeUk2SWpzN096czdPenRCUVVsQkxFbEJRVTBzVTBGQlV5eFBRVUZSTEUxQlFWQXNTMEZCYTBJc1YwRkJiRUlzU1VGQmFVTXNUMEZCVHl4eFFrRkJVQ3hIUVVGblF5eEpRVUZzUlN4SFFVRjVSU3hMUVVGNlJUczdRVUZGWml4SlFVRkpMR2RDUVVGS096dEJRVVZCTEVsQlFVa3NUVUZCU2l4RlFVRlpPMEZCUTFJc1YwRkJUeXhWUVVGRExGRkJRVVE3WlVGQll5eFBRVUZQTEhGQ1FVRlFMRU5CUVRaQ0xGRkJRVGRDTzB0QlFXUXNRMEZFUXp0RFFVRmFMRTFCUjA4N096czdPenM3T3pzN096czdPenRCUVdWSUxGbEJRVWtzVjBGQlZ5eERRVUZZT3p0QlFVVktMR1ZCUVU4c1ZVRkJReXhSUVVGRUxFVkJRV003UVVGRGFrSXNaMEpCUVUwc1kwRkJZeXhKUVVGSkxFbEJRVW9zUjBGQlZ5eFBRVUZZTEVWQlFXUXNRMEZFVnp0QlFVVnFRaXhuUWtGQlRTeGhRVUZoTEV0QlFVc3NSMEZCVEN4RFFVRlRMRU5CUVZRc1JVRkJXU3hOUVVGTkxHTkJRV01zVVVGQlpDeERRVUZPTEVOQlFYcENMRU5CUmxjN08wRkJTV3BDTEhWQ1FVRlhMR05CUVdNc1ZVRkJaQ3hEUVVwTk96dEJRVTFxUWl4MVFrRkJWenQxUWtGQlRTeFRRVUZUTEZGQlFWUTdZVUZCVGl4RlFVRXdRaXhWUVVGeVF5eEZRVTVwUWp0VFFVRmtPMU5CYWtKS08wTkJTRkE3TzJ0Q1FUaENaU0lzSW1acGJHVWlPaUowYVdOckxtcHpJaXdpYzI5MWNtTmxVbTl2ZENJNklpOVZjMlZ5Y3k5TllYUjBMMU5wZEdWekwzQnZjRzF2ZEdsdmJpSXNJbk52ZFhKalpYTkRiMjUwWlc1MElqcGJJaThxWEc0Z0lDQWdSR1YwWldOMElHRnVaQ0JzYjJGa0lHRnVJR0Z3Y0hKdmNISnBZWFJsSUdOc2IyTnJJSE5sZEhScGJtY2dabTl5SUhSb1pTQmxiblpwY205dWJXVnVkRnh1S2k5Y2JseHVZMjl1YzNRZ2FHRnpVa0ZHSUQwZ0tIUjVjR1Z2WmlCM2FXNWtiM2NnSVQwOUlDZDFibVJsWm1sdVpXUW5JQ1ltSUhkcGJtUnZkeTV5WlhGMVpYTjBRVzVwYldGMGFXOXVSbkpoYldVcElEOGdkSEoxWlNBNklHWmhiSE5sTzF4dVhHNXNaWFFnZEdsamF6dGNibHh1YVdZZ0tHaGhjMUpCUmlrZ2UxeHVJQ0FnSUhScFkyc2dQU0FvWTJGc2JHSmhZMnNwSUQwK0lIZHBibVJ2ZHk1eVpYRjFaWE4wUVc1cGJXRjBhVzl1Um5KaGJXVW9ZMkZzYkdKaFkyc3BPMXh1WEc1OUlHVnNjMlVnZTF4dUlDQWdJQzhxWEc0Z0lDQWdJQ0FnSUhKbGNYVmxjM1JCYm1sdFlYUnBiMjVHY21GdFpTQndiMng1Wm1sc2JGeHVJQ0FnSUNBZ0lDQmNiaUFnSUNBZ0lDQWdSbTl5SUVsRk9DODVJRVpzYVc1emRHOXVaWE1nWVc1a0lHNXZiaTFpY205M2MyVnlJR1Z1ZG1seWIyNXRaVzUwYzF4dVhHNGdJQ0FnSUNBZ0lGUmhhMlZ1SUdaeWIyMGdVR0YxYkNCSmNtbHphQzRnVjJVbmRtVWdjM1J5YVhCd1pXUWdiM1YwSUdOaGJtTmxiRUZ1YVcxaGRHbHZia1p5WVcxbElHTm9aV05yY3lCaVpXTmhkWE5sSUhkbElHUnZiaWQwSUdadmVDQjNhWFJvSUhSb1lYUmNiaUFnSUNBZ0lDQWdYRzRnSUNBZ0lDQWdJR2gwZEhBNkx5OXdZWFZzYVhKcGMyZ3VZMjl0THpJd01URXZjbVZ4ZFdWemRHRnVhVzFoZEdsdmJtWnlZVzFsTFdadmNpMXpiV0Z5ZEMxaGJtbHRZWFJwYm1jdlhHNGdJQ0FnSUNBZ0lHaDBkSEE2THk5dGVTNXZjR1Z5WVM1amIyMHZaVzF2Ykd4bGNpOWliRzluTHpJd01URXZNVEl2TWpBdmNtVnhkV1Z6ZEdGdWFXMWhkR2x2Ym1aeVlXMWxMV1p2Y2kxemJXRnlkQzFsY2kxaGJtbHRZWFJwYm1kY2JpQWdJQ0FnSUNBZ0lGeHVJQ0FnSUNBZ0lDQnlaWEYxWlhOMFFXNXBiV0YwYVc5dVJuSmhiV1VnY0c5c2VXWnBiR3dnWW5rZ1JYSnBheUJOdzdac2JHVnlMaUJtYVhobGN5Qm1jbTl0SUZCaGRXd2dTWEpwYzJnZ1lXNWtJRlJwYm04Z1dtbHFaR1ZzWEc0Z0lDQWdJQ0FnSUNCY2JpQWdJQ0FnSUNBZ1RVbFVJR3hwWTJWdWMyVmNiaUFnSUNBcUwxeHVJQ0FnSUd4bGRDQnNZWE4wVkdsdFpTQTlJREE3WEc1Y2JpQWdJQ0IwYVdOcklEMGdLR05oYkd4aVlXTnJLU0E5UGlCN1hHNGdJQ0FnSUNBZ0lHTnZibk4wSUdOMWNuSmxiblJVYVcxbElEMGdibVYzSUVSaGRHVW9LUzVuWlhSVWFXMWxLQ2s3WEc0Z0lDQWdJQ0FnSUdOdmJuTjBJSFJwYldWVWIwTmhiR3dnUFNCTllYUm9MbTFoZUNnd0xDQXhOaUF0SUNoamRYSnlaVzUwVkdsdFpTQXRJR3hoYzNSVWFXMWxLU2s3WEc1Y2JpQWdJQ0FnSUNBZ2JHRnpkRlJwYldVZ1BTQmpkWEp5Wlc1MFZHbHRaU0FySUhScGJXVlViME5oYkd3N1hHNWNiaUFnSUNBZ0lDQWdjMlYwVkdsdFpXOTFkQ2dvS1NBOVBpQmpZV3hzWW1GamF5aHNZWE4wVkdsdFpTa3NJSFJwYldWVWIwTmhiR3dwTzF4dUlDQWdJSDA3WEc1OVhHNWNibVY0Y0c5eWRDQmtaV1poZFd4MElIUnBZMnM3SWwxOVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvcHJvY2Vzcy90aWNrLmpzXG4gKiogbW9kdWxlIGlkID0gNTBcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuLy8gW2ludF06IEluY3JlbWVudGVkIGZvciBlYWNoIG5ldyBydW5uaW5nIHByb2Nlc3NcbnZhciBjdXJyZW50UHJvY2Vzc0lkID0gMDtcblxuLy8gW2ludF06IE51bWJlciBvZiBhbGwgcnVubmluZyBwcm9jZXNzZXNcbnZhciB0b3RhbFJ1bm5pbmdDb3VudCA9IDA7XG5cbi8vIFtpbnRdOiBOdW1iZXIgb2YgcnVubmluZyBwcm9jZXNzZXMgZXhjbHVkaW5nIGJhY2tncm91bmQgcHJvY2Vzc2VzXG52YXIgbm9uQmFja2dyb3VuZFJ1bm5pbmdDb3VudCA9IDA7XG5cbi8vIFthcnJheV06IEFycmF5IG9mIHJ1bm5pbmcgcHJvY2VzcyBJRHNcbnZhciBydW5uaW5nSWRzID0gW107XG5cbi8vIFtvYmplY3RdOiBNYXAgb2YgcnVubmluZyBwcm9jZXNzZXNcbnZhciBhY3RpdmVQcm9jZXNzZXMgPSB7fTtcblxuLy8gW2FycmF5XTogQXJyYXkgb2YgcHJvY2VzcyBJRHMgcXVldWVkIGZvciBhY3RpdmF0aW9uXG52YXIgYWN0aXZhdGVRdWV1ZSA9IFtdO1xuXG4vLyBbYXJyYXldOiBBcnJheSBvZiBwcm9jZXNzIElEcyBxdWV1ZWQgZm9yIGRlYWN0aXZhdGlvblxudmFyIGRlYWN0aXZhdGVRdWV1ZSA9IFtdO1xuXG4vKlxuICAgIFVwZGF0ZSBhY3RpdmF0ZS9kZWFjdGl2YXRlIHF1ZXVlc1xuXG4gICAgQHBhcmFtIFtudW1iZXJdXG4gICAgQHBhcmFtIFthcnJheV1cbiAgICBAcGFyYW0gW2FycmF5XVxuKi9cbnZhciB1cGRhdGVRdWV1ZXMgPSBmdW5jdGlvbiAoaWQsIGluTGlzdCwgb3V0TGlzdCkge1xuICAgIHZhciBpblBvc2l0aW9uID0gaW5MaXN0LmluZGV4T2YoaWQpO1xuICAgIHZhciBvdXRQb3NpdGlvbiA9IG91dExpc3QuaW5kZXhPZihpZCk7XG5cbiAgICBpZiAoaW5Qb3NpdGlvbiA9PT0gLTEpIHtcbiAgICAgICAgaW5MaXN0LnB1c2goaWQpO1xuICAgIH1cblxuICAgIGlmIChvdXRQb3NpdGlvbiA+IC0xKSB7XG4gICAgICAgIG91dExpc3Quc3BsaWNlKG91dFBvc2l0aW9uLCAxKTtcbiAgICB9XG59O1xuXG4vKlxuICAgIFVwZGF0ZSBydW5uaW5nXG5cbiAgICBbYm9vbGVhbl06IGB0cnVlYCB0byBhZGRcbiAgICBbYm9vbGVhbl06IGB0cnVlYCBpZiBsYXp5XG4qL1xudmFyIHVwZGF0ZVJ1bm5pbmdDb3VudCA9IGZ1bmN0aW9uIChhZGQsIGlzTGF6eSkge1xuICAgIHZhciBtb2RpZnkgPSBhZGQgPyAxIDogLTE7XG5cbiAgICB0b3RhbFJ1bm5pbmdDb3VudCArPSBtb2RpZnk7XG5cbiAgICBpZiAoIWlzTGF6eSkge1xuICAgICAgICBub25CYWNrZ3JvdW5kUnVubmluZ0NvdW50ICs9IG1vZGlmeTtcbiAgICB9XG59O1xuXG5leHBvcnRzLmRlZmF1bHQgPSB7XG4gICAgYWN0aXZlUHJvY2Vzc2VzOiBhY3RpdmVQcm9jZXNzZXMsXG5cbiAgICAvLyBBY3RpdmF0ZSBhIHByb2Nlc3NcbiAgICBhY3RpdmF0ZTogZnVuY3Rpb24gKGlkLCBwcm9jZXNzKSB7XG4gICAgICAgIGFjdGl2ZVByb2Nlc3Nlc1tpZF0gPSBwcm9jZXNzO1xuICAgICAgICBwcm9jZXNzLmlzQWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgdXBkYXRlUXVldWVzKGlkLCBhY3RpdmF0ZVF1ZXVlLCBkZWFjdGl2YXRlUXVldWUpO1xuICAgIH0sXG5cbiAgICAvLyBEZWFjdGl2YXRlIGEgcHJvY2Vzc1xuICAgIGRlYWN0aXZhdGU6IGZ1bmN0aW9uIChpZCkge1xuICAgICAgICBwcm9jZXNzLmlzQWN0aXZlID0gZmFsc2U7XG4gICAgICAgIHVwZGF0ZVF1ZXVlcyhpZCwgZGVhY3RpdmF0ZVF1ZXVlLCBhY3RpdmF0ZVF1ZXVlKTtcbiAgICB9LFxuXG4gICAgLy8gTnVtYmVyIGJhY2tncm91bmQgcHJvY2Vzc2VzXG4gICAgZ2V0Tm9uQmFja2dyb3VuZFJ1bm5pbmdDb3VudDogZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gbm9uQmFja2dyb3VuZFJ1bm5pbmdDb3VudDtcbiAgICB9LFxuXG4gICAgLy8gSW5jcmVtZW50IGN1cnJlbnQgcHJvY2VzcyBJRCBhbmQgcmV0dXJuXG4gICAgZ2V0UHJvY2Vzc0lkOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBjdXJyZW50UHJvY2Vzc0lkKys7XG4gICAgfSxcblxuICAgIC8vIFJlc29sdmUgYWN0aXZhdGUvZGVhY3RpdmF0ZSBwcm9jZXNzZXMgYW5kIHJldHVybiBhY3RpdmUgaWRzXG4gICAgZ2V0QWN0aXZlSWRzOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIC8qXG4gICAgICAgICAgICBQcm9jZXNzIGRlYWN0aXZhdGUgcXVldWVcbiAgICAgICAgKi9cbiAgICAgICAgdmFyIGRlYWN0aXZhdGVRdWV1ZUxlbmd0aCA9IGRlYWN0aXZhdGVRdWV1ZS5sZW5ndGg7XG5cbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBkZWFjdGl2YXRlUXVldWVMZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdmFyIGlkID0gZGVhY3RpdmF0ZVF1ZXVlW2ldO1xuICAgICAgICAgICAgdmFyIGFjdGl2ZUlkSW5kZXggPSBydW5uaW5nSWRzLmluZGV4T2YoaWQpO1xuICAgICAgICAgICAgdmFyIF9wcm9jZXNzID0gYWN0aXZlUHJvY2Vzc2VzW2lkXTtcblxuICAgICAgICAgICAgLy8gSWYgdGhpcyBpcyBhIHJ1bm5pbmcgcHJvY2VzcywgZGVhY3RpdmF0ZVxuICAgICAgICAgICAgaWYgKGFjdGl2ZUlkSW5kZXggPiAtMSkge1xuICAgICAgICAgICAgICAgIHJ1bm5pbmdJZHMuc3BsaWNlKGFjdGl2ZUlkSW5kZXgsIDEpO1xuICAgICAgICAgICAgICAgIHVwZGF0ZVJ1bm5pbmdDb3VudChmYWxzZSwgX3Byb2Nlc3MuaXNMYXp5KTtcbiAgICAgICAgICAgICAgICBkZWxldGUgYWN0aXZlUHJvY2Vzc2VzW2lkXTtcblxuICAgICAgICAgICAgICAgIGlmIChfcHJvY2Vzcy5vbkRlYWN0aXZhdGUpIHtcbiAgICAgICAgICAgICAgICAgICAgX3Byb2Nlc3Mub25EZWFjdGl2YXRlKF9wcm9jZXNzKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvKlxuICAgICAgICAgICAgRW1wdHkgZGVhY3RpdmF0ZSBxdWV1ZS4gV2UgdXNlIGBBcnJheS5zcGxpY2VgIGJlY2F1c2UgaXQgZG9lc24ndFxuICAgICAgICAgICAgd29ya3Mgb24gdGhlIG9yaWdpbmFsIGFycmF5IHNvIHdlIGRvbid0IGhhdmUgdG8gZ2FyYmFnZSBjb2xsZWN0IGFueXRoaW5nXG4gICAgICAgICovXG4gICAgICAgIGRlYWN0aXZhdGVRdWV1ZS5zcGxpY2UoMCwgZGVhY3RpdmF0ZVF1ZXVlTGVuZ3RoKTtcblxuICAgICAgICAvKlxuICAgICAgICAgICAgUHJvY2VzcyBhY3RpdmF0ZSBxdWV1ZVxuICAgICAgICAqL1xuICAgICAgICB2YXIgYWN0aXZhdGVRdWV1ZUxlbmd0aCA9IGFjdGl2YXRlUXVldWUubGVuZ3RoO1xuXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYWN0aXZhdGVRdWV1ZUxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgaWQgPSBhY3RpdmF0ZVF1ZXVlW2ldO1xuICAgICAgICAgICAgdmFyIGFjdGl2ZUlkSW5kZXggPSBydW5uaW5nSWRzLmluZGV4T2YoaWQpO1xuICAgICAgICAgICAgdmFyIF9wcm9jZXNzMiA9IGFjdGl2ZVByb2Nlc3Nlc1tpZF07XG5cbiAgICAgICAgICAgIC8vIElmIHByb2Nlc3MgaXNuJ3QgYWxyZWFkeSBydW5uaW5nLCBhY3RpdmF0ZVxuICAgICAgICAgICAgaWYgKGFjdGl2ZUlkSW5kZXggPT09IC0xICYmIF9wcm9jZXNzMikge1xuICAgICAgICAgICAgICAgIGlmIChfcHJvY2VzczIuaXNQcmlvcml0eSkge1xuICAgICAgICAgICAgICAgICAgICBydW5uaW5nSWRzLnVuc2hpZnQoaWQpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmdJZHMucHVzaChpZCk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgdXBkYXRlUnVubmluZ0NvdW50KHRydWUsIF9wcm9jZXNzMi5pc0xhenkpO1xuXG4gICAgICAgICAgICAgICAgaWYgKF9wcm9jZXNzMi5vbkFjdGl2YXRlKSB7XG4gICAgICAgICAgICAgICAgICAgIF9wcm9jZXNzMi5vbkFjdGl2YXRlKF9wcm9jZXNzMik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgYWN0aXZhdGVRdWV1ZS5zcGxpY2UoMCwgYWN0aXZhdGVRdWV1ZUxlbmd0aCk7XG5cbiAgICAgICAgcmV0dXJuIHJ1bm5pbmdJZHM7XG4gICAgfVxufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbk55WXk5d2NtOWpaWE56TDIxaGJtRm5aWEl1YW5NaVhTd2libUZ0WlhNaU9sdGRMQ0p0WVhCd2FXNW5jeUk2SWpzN096dEJRVU5CTEVsQlFVa3NiVUpCUVcxQ0xFTkJRVzVDT3pzN1FVRkhTaXhKUVVGSkxHOUNRVUZ2UWl4RFFVRndRanM3TzBGQlIwb3NTVUZCU1N3MFFrRkJORUlzUTBGQk5VSTdPenRCUVVkS0xFbEJRVTBzWVVGQllTeEZRVUZpT3pzN1FVRkhUaXhKUVVGTkxHdENRVUZyUWl4RlFVRnNRanM3TzBGQlIwNHNTVUZCVFN4blFrRkJaMElzUlVGQmFFSTdPenRCUVVkT0xFbEJRVTBzYTBKQlFXdENMRVZCUVd4Q096czdPenM3T3pzN1FVRlRUaXhKUVVGTkxHVkJRV1VzVlVGQlF5eEZRVUZFTEVWQlFVc3NUVUZCVEN4RlFVRmhMRTlCUVdJc1JVRkJlVUk3UVVGRE1VTXNVVUZCVFN4aFFVRmhMRTlCUVU4c1QwRkJVQ3hEUVVGbExFVkJRV1lzUTBGQllpeERRVVJ2UXp0QlFVVXhReXhSUVVGTkxHTkJRV01zVVVGQlVTeFBRVUZTTEVOQlFXZENMRVZCUVdoQ0xFTkJRV1FzUTBGR2IwTTdPMEZCU1RGRExGRkJRVWtzWlVGQlpTeERRVUZETEVOQlFVUXNSVUZCU1R0QlFVTnVRaXhsUVVGUExFbEJRVkFzUTBGQldTeEZRVUZhTEVWQlJHMUNPMHRCUVhaQ096dEJRVWxCTEZGQlFVa3NZMEZCWXl4RFFVRkRMRU5CUVVRc1JVRkJTVHRCUVVOc1FpeG5Ra0ZCVVN4TlFVRlNMRU5CUVdVc1YwRkJaaXhGUVVFMFFpeERRVUUxUWl4RlFVUnJRanRMUVVGMFFqdERRVkpwUWpzN096czdPenM3UVVGdFFuSkNMRWxCUVUwc2NVSkJRWEZDTEZWQlFVTXNSMEZCUkN4RlFVRk5MRTFCUVU0c1JVRkJhVUk3UVVGRGVFTXNVVUZCVFN4VFFVRlRMRTFCUVUwc1EwRkJUaXhIUVVGVkxFTkJRVU1zUTBGQlJDeERRVVJsT3p0QlFVZDRReXg1UWtGQmNVSXNUVUZCY2tJc1EwRklkME03TzBGQlMzaERMRkZCUVVrc1EwRkJReXhOUVVGRUxFVkJRVk03UVVGRFZDeHhRMEZCTmtJc1RVRkJOMElzUTBGRVV6dExRVUZpTzBOQlRIVkNPenRyUWtGVldqdEJRVU5ZTEc5RFFVUlhPenM3UVVGSldDeGpRVUZWTEZWQlFVTXNSVUZCUkN4RlFVRkxMRTlCUVV3c1JVRkJhVUk3UVVGRGRrSXNkMEpCUVdkQ0xFVkJRV2hDTEVsQlFYTkNMRTlCUVhSQ0xFTkJSSFZDTzBGQlJYWkNMR2RDUVVGUkxGRkJRVklzUjBGQmJVSXNTVUZCYmtJc1EwRkdkVUk3UVVGSGRrSXNjVUpCUVdFc1JVRkJZaXhGUVVGcFFpeGhRVUZxUWl4RlFVRm5ReXhsUVVGb1F5eEZRVWgxUWp0TFFVRnFRanM3TzBGQlQxWXNaMEpCUVZrc1ZVRkJReXhGUVVGRUxFVkJRVkU3UVVGRGFFSXNaMEpCUVZFc1VVRkJVaXhIUVVGdFFpeExRVUZ1UWl4RFFVUm5RanRCUVVWb1FpeHhRa0ZCWVN4RlFVRmlMRVZCUVdsQ0xHVkJRV3BDTEVWQlFXdERMR0ZCUVd4RExFVkJSbWRDTzB0QlFWSTdPenRCUVUxYUxHdERRVUU0UWp0bFFVRk5PMHRCUVU0N096dEJRVWM1UWl4clFrRkJZenRsUVVGTk8wdEJRVTQ3T3p0QlFVZGtMR3RDUVVGakxGbEJRVTA3T3pzN1FVRkphRUlzV1VGQlRTeDNRa0ZCZDBJc1owSkJRV2RDTEUxQlFXaENMRU5CU21RN08wRkJUV2hDTEdGQlFVc3NTVUZCU1N4SlFVRkpMRU5CUVVvc1JVRkJUeXhKUVVGSkxIRkNRVUZLTEVWQlFUSkNMRWRCUVRORExFVkJRV2RFTzBGQlF6VkRMR2RDUVVGTkxFdEJRVXNzWjBKQlFXZENMRU5CUVdoQ0xFTkJRVXdzUTBGRWMwTTdRVUZGTlVNc1owSkJRVTBzWjBKQlFXZENMRmRCUVZjc1QwRkJXQ3hEUVVGdFFpeEZRVUZ1UWl4RFFVRm9RaXhEUVVaelF6dEJRVWMxUXl4blFrRkJUU3hYUVVGVkxHZENRVUZuUWl4RlFVRm9RaXhEUVVGV096czdRVUZJYzBNc1owSkJUWGhETEdkQ1FVRm5RaXhEUVVGRExFTkJRVVFzUlVGQlNUdEJRVU53UWl3eVFrRkJWeXhOUVVGWUxFTkJRV3RDTEdGQlFXeENMRVZCUVdsRExFTkJRV3BETEVWQlJHOUNPMEZCUlhCQ0xHMURRVUZ0UWl4TFFVRnVRaXhGUVVFd1FpeFRRVUZSTEUxQlFWSXNRMEZCTVVJc1EwRkdiMEk3UVVGSGNFSXNkVUpCUVU4c1owSkJRV2RDTEVWQlFXaENMRU5CUVZBc1EwRkliMEk3TzBGQlMzQkNMRzlDUVVGSkxGTkJRVkVzV1VGQlVpeEZRVUZ6UWp0QlFVTjBRaXcyUWtGQlVTeFpRVUZTTEVOQlFYRkNMRkZCUVhKQ0xFVkJSSE5DTzJsQ1FVRXhRanRoUVV4S08xTkJUa283T3pzN096dEJRVTVuUWl4MVFrRXlRbWhDTEVOQlFXZENMRTFCUVdoQ0xFTkJRWFZDTEVOQlFYWkNMRVZCUVRCQ0xIRkNRVUV4UWpzN096czdRVUV6UW1kQ0xGbEJaME5XTEhOQ1FVRnpRaXhqUVVGakxFMUJRV1FzUTBGb1ExbzdPMEZCYTBOb1FpeGhRVUZMTEVsQlFVa3NTVUZCU1N4RFFVRktMRVZCUVU4c1NVRkJTU3h0UWtGQlNpeEZRVUY1UWl4SFFVRjZReXhGUVVFNFF6dEJRVU14UXl4blFrRkJUU3hMUVVGTExHTkJRV01zUTBGQlpDeERRVUZNTEVOQlJHOURPMEZCUlRGRExHZENRVUZOTEdkQ1FVRm5RaXhYUVVGWExFOUJRVmdzUTBGQmJVSXNSVUZCYmtJc1EwRkJhRUlzUTBGR2IwTTdRVUZITVVNc1owSkJRVTBzV1VGQlZTeG5Ra0ZCWjBJc1JVRkJhRUlzUTBGQlZqczdPMEZCU0c5RExHZENRVTEwUXl4clFrRkJhMElzUTBGQlF5eERRVUZFTEVsQlFVMHNVMEZCZUVJc1JVRkJhVU03UVVGRGFrTXNiMEpCUVVrc1ZVRkJVU3hWUVVGU0xFVkJRVzlDTzBGQlEzQkNMQ3RDUVVGWExFOUJRVmdzUTBGQmJVSXNSVUZCYmtJc1JVRkViMEk3YVVKQlFYaENMRTFCUlU4N1FVRkRTQ3dyUWtGQlZ5eEpRVUZZTEVOQlFXZENMRVZCUVdoQ0xFVkJSRWM3YVVKQlJsQTdPMEZCVFVFc2JVTkJRVzFDTEVsQlFXNUNMRVZCUVhsQ0xGVkJRVkVzVFVGQlVpeERRVUY2UWl4RFFWQnBRenM3UVVGVGFrTXNiMEpCUVVrc1ZVRkJVU3hWUVVGU0xFVkJRVzlDTzBGQlEzQkNMRGhDUVVGUkxGVkJRVklzUTBGQmJVSXNVMEZCYmtJc1JVRkViMEk3YVVKQlFYaENPMkZCVkVvN1UwRk9TanM3UVVGeFFrRXNjMEpCUVdNc1RVRkJaQ3hEUVVGeFFpeERRVUZ5UWl4RlFVRjNRaXh0UWtGQmVFSXNSVUYyUkdkQ096dEJRWGxFYUVJc1pVRkJUeXhWUVVGUUxFTkJla1JuUWp0TFFVRk9JaXdpWm1sc1pTSTZJbTFoYm1GblpYSXVhbk1pTENKemIzVnlZMlZTYjI5MElqb2lMMVZ6WlhKekwwMWhkSFF2VTJsMFpYTXZjRzl3Ylc5MGFXOXVJaXdpYzI5MWNtTmxjME52Ym5SbGJuUWlPbHNpTHk4Z1cybHVkRjA2SUVsdVkzSmxiV1Z1ZEdWa0lHWnZjaUJsWVdOb0lHNWxkeUJ5ZFc1dWFXNW5JSEJ5YjJObGMzTmNibXhsZENCamRYSnlaVzUwVUhKdlkyVnpjMGxrSUQwZ01EdGNibHh1THk4Z1cybHVkRjA2SUU1MWJXSmxjaUJ2WmlCaGJHd2djblZ1Ym1sdVp5QndjbTlqWlhOelpYTmNibXhsZENCMGIzUmhiRkoxYm01cGJtZERiM1Z1ZENBOUlEQTdYRzVjYmk4dklGdHBiblJkT2lCT2RXMWlaWElnYjJZZ2NuVnVibWx1WnlCd2NtOWpaWE56WlhNZ1pYaGpiSFZrYVc1bklHSmhZMnRuY205MWJtUWdjSEp2WTJWemMyVnpYRzVzWlhRZ2JtOXVRbUZqYTJkeWIzVnVaRkoxYm01cGJtZERiM1Z1ZENBOUlEQTdYRzVjYmk4dklGdGhjbkpoZVYwNklFRnljbUY1SUc5bUlISjFibTVwYm1jZ2NISnZZMlZ6Y3lCSlJITmNibU52Ym5OMElISjFibTVwYm1kSlpITWdQU0JiWFR0Y2JseHVMeThnVzI5aWFtVmpkRjA2SUUxaGNDQnZaaUJ5ZFc1dWFXNW5JSEJ5YjJObGMzTmxjMXh1WTI5dWMzUWdZV04wYVhabFVISnZZMlZ6YzJWeklEMGdlMzA3WEc1Y2JpOHZJRnRoY25KaGVWMDZJRUZ5Y21GNUlHOW1JSEJ5YjJObGMzTWdTVVJ6SUhGMVpYVmxaQ0JtYjNJZ1lXTjBhWFpoZEdsdmJseHVZMjl1YzNRZ1lXTjBhWFpoZEdWUmRXVjFaU0E5SUZ0ZE8xeHVYRzR2THlCYllYSnlZWGxkT2lCQmNuSmhlU0J2WmlCd2NtOWpaWE56SUVsRWN5QnhkV1YxWldRZ1ptOXlJR1JsWVdOMGFYWmhkR2x2Ymx4dVkyOXVjM1FnWkdWaFkzUnBkbUYwWlZGMVpYVmxJRDBnVzEwN1hHNWNiaThxWEc0Z0lDQWdWWEJrWVhSbElHRmpkR2wyWVhSbEwyUmxZV04wYVhaaGRHVWdjWFZsZFdWelhHNWNiaUFnSUNCQWNHRnlZVzBnVzI1MWJXSmxjbDFjYmlBZ0lDQkFjR0Z5WVcwZ1cyRnljbUY1WFZ4dUlDQWdJRUJ3WVhKaGJTQmJZWEp5WVhsZFhHNHFMMXh1WTI5dWMzUWdkWEJrWVhSbFVYVmxkV1Z6SUQwZ0tHbGtMQ0JwYmt4cGMzUXNJRzkxZEV4cGMzUXBJRDArSUh0Y2JpQWdJQ0JqYjI1emRDQnBibEJ2YzJsMGFXOXVJRDBnYVc1TWFYTjBMbWx1WkdWNFQyWW9hV1FwTzF4dUlDQWdJR052Ym5OMElHOTFkRkJ2YzJsMGFXOXVJRDBnYjNWMFRHbHpkQzVwYm1SbGVFOW1LR2xrS1R0Y2JseHVJQ0FnSUdsbUlDaHBibEJ2YzJsMGFXOXVJRDA5UFNBdE1Ta2dlMXh1SUNBZ0lDQWdJQ0JwYmt4cGMzUXVjSFZ6YUNocFpDazdYRzRnSUNBZ2ZWeHVYRzRnSUNBZ2FXWWdLRzkxZEZCdmMybDBhVzl1SUQ0Z0xURXBJSHRjYmlBZ0lDQWdJQ0FnYjNWMFRHbHpkQzV6Y0d4cFkyVW9iM1YwVUc5emFYUnBiMjRzSURFcE8xeHVJQ0FnSUgxY2JuMDdYRzVjYmk4cVhHNGdJQ0FnVlhCa1lYUmxJSEoxYm01cGJtZGNibHh1SUNBZ0lGdGliMjlzWldGdVhUb2dZSFJ5ZFdWZ0lIUnZJR0ZrWkZ4dUlDQWdJRnRpYjI5c1pXRnVYVG9nWUhSeWRXVmdJR2xtSUd4aGVubGNiaW92WEc1amIyNXpkQ0IxY0dSaGRHVlNkVzV1YVc1blEyOTFiblFnUFNBb1lXUmtMQ0JwYzB4aGVua3BJRDArSUh0Y2JpQWdJQ0JqYjI1emRDQnRiMlJwWm5rZ1BTQmhaR1FnUHlBeElEb2dMVEU3WEc1Y2JpQWdJQ0IwYjNSaGJGSjFibTVwYm1kRGIzVnVkQ0FyUFNCdGIyUnBabms3WEc1Y2JpQWdJQ0JwWmlBb0lXbHpUR0Y2ZVNrZ2UxeHVJQ0FnSUNBZ0lDQnViMjVDWVdOclozSnZkVzVrVW5WdWJtbHVaME52ZFc1MElDczlJRzF2WkdsbWVUdGNiaUFnSUNCOVhHNTlPMXh1WEc1bGVIQnZjblFnWkdWbVlYVnNkQ0I3WEc0Z0lDQWdZV04wYVhabFVISnZZMlZ6YzJWekxGeHVYRzRnSUNBZ0x5OGdRV04wYVhaaGRHVWdZU0J3Y205alpYTnpYRzRnSUNBZ1lXTjBhWFpoZEdVNklDaHBaQ3dnY0hKdlkyVnpjeWtnUFQ0Z2UxeHVJQ0FnSUNBZ0lDQmhZM1JwZG1WUWNtOWpaWE56WlhOYmFXUmRJRDBnY0hKdlkyVnpjenRjYmlBZ0lDQWdJQ0FnY0hKdlkyVnpjeTVwYzBGamRHbDJaU0E5SUhSeWRXVTdYRzRnSUNBZ0lDQWdJSFZ3WkdGMFpWRjFaWFZsY3locFpDd2dZV04wYVhaaGRHVlJkV1YxWlN3Z1pHVmhZM1JwZG1GMFpWRjFaWFZsS1R0Y2JpQWdJQ0I5TEZ4dVhHNGdJQ0FnTHk4Z1JHVmhZM1JwZG1GMFpTQmhJSEJ5YjJObGMzTmNiaUFnSUNCa1pXRmpkR2wyWVhSbE9pQW9hV1FwSUQwK0lIdGNiaUFnSUNBZ0lDQWdjSEp2WTJWemN5NXBjMEZqZEdsMlpTQTlJR1poYkhObE8xeHVJQ0FnSUNBZ0lDQjFjR1JoZEdWUmRXVjFaWE1vYVdRc0lHUmxZV04wYVhaaGRHVlJkV1YxWlN3Z1lXTjBhWFpoZEdWUmRXVjFaU2s3WEc0Z0lDQWdmU3hjYmx4dUlDQWdJQzh2SUU1MWJXSmxjaUJpWVdOclozSnZkVzVrSUhCeWIyTmxjM05sYzF4dUlDQWdJR2RsZEU1dmJrSmhZMnRuY205MWJtUlNkVzV1YVc1blEyOTFiblE2SUNncElEMCtJRzV2YmtKaFkydG5jbTkxYm1SU2RXNXVhVzVuUTI5MWJuUXNYRzVjYmlBZ0lDQXZMeUJKYm1OeVpXMWxiblFnWTNWeWNtVnVkQ0J3Y205alpYTnpJRWxFSUdGdVpDQnlaWFIxY201Y2JpQWdJQ0JuWlhSUWNtOWpaWE56U1dRNklDZ3BJRDArSUdOMWNuSmxiblJRY205alpYTnpTV1FyS3l4Y2JseHVJQ0FnSUM4dklGSmxjMjlzZG1VZ1lXTjBhWFpoZEdVdlpHVmhZM1JwZG1GMFpTQndjbTlqWlhOelpYTWdZVzVrSUhKbGRIVnliaUJoWTNScGRtVWdhV1J6WEc0Z0lDQWdaMlYwUVdOMGFYWmxTV1J6T2lBb0tTQTlQaUI3WEc0Z0lDQWdJQ0FnSUM4cVhHNGdJQ0FnSUNBZ0lDQWdJQ0JRY205alpYTnpJR1JsWVdOMGFYWmhkR1VnY1hWbGRXVmNiaUFnSUNBZ0lDQWdLaTljYmlBZ0lDQWdJQ0FnWTI5dWMzUWdaR1ZoWTNScGRtRjBaVkYxWlhWbFRHVnVaM1JvSUQwZ1pHVmhZM1JwZG1GMFpWRjFaWFZsTG14bGJtZDBhRHRjYmx4dUlDQWdJQ0FnSUNCbWIzSWdLR3hsZENCcElEMGdNRHNnYVNBOElHUmxZV04wYVhaaGRHVlJkV1YxWlV4bGJtZDBhRHNnYVNzcktTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNCamIyNXpkQ0JwWkNBOUlHUmxZV04wYVhaaGRHVlJkV1YxWlZ0cFhUdGNiaUFnSUNBZ0lDQWdJQ0FnSUdOdmJuTjBJR0ZqZEdsMlpVbGtTVzVrWlhnZ1BTQnlkVzV1YVc1blNXUnpMbWx1WkdWNFQyWW9hV1FwTzF4dUlDQWdJQ0FnSUNBZ0lDQWdZMjl1YzNRZ2NISnZZMlZ6Y3lBOUlHRmpkR2wyWlZCeWIyTmxjM05sYzF0cFpGMDdYRzVjYmlBZ0lDQWdJQ0FnSUNBZ0lDOHZJRWxtSUhSb2FYTWdhWE1nWVNCeWRXNXVhVzVuSUhCeWIyTmxjM01zSUdSbFlXTjBhWFpoZEdWY2JpQWdJQ0FnSUNBZ0lDQWdJR2xtSUNoaFkzUnBkbVZKWkVsdVpHVjRJRDRnTFRFcElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQnlkVzV1YVc1blNXUnpMbk53YkdsalpTaGhZM1JwZG1WSlpFbHVaR1Y0TENBeEtUdGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQjFjR1JoZEdWU2RXNXVhVzVuUTI5MWJuUW9abUZzYzJVc0lIQnliMk5sYzNNdWFYTk1ZWHA1S1R0Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCa1pXeGxkR1VnWVdOMGFYWmxVSEp2WTJWemMyVnpXMmxrWFR0Y2JseHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lHbG1JQ2h3Y205alpYTnpMbTl1UkdWaFkzUnBkbUYwWlNrZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0J3Y205alpYTnpMbTl1UkdWaFkzUnBkbUYwWlNod2NtOWpaWE56S1R0Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCOVhHNGdJQ0FnSUNBZ0lDQWdJQ0I5WEc0Z0lDQWdJQ0FnSUgxY2JseHVJQ0FnSUNBZ0lDQXZLbHh1SUNBZ0lDQWdJQ0FnSUNBZ1JXMXdkSGtnWkdWaFkzUnBkbUYwWlNCeGRXVjFaUzRnVjJVZ2RYTmxJR0JCY25KaGVTNXpjR3hwWTJWZ0lHSmxZMkYxYzJVZ2FYUWdaRzlsYzI0bmRGeHVJQ0FnSUNBZ0lDQWdJQ0FnZDI5eWEzTWdiMjRnZEdobElHOXlhV2RwYm1Gc0lHRnljbUY1SUhOdklIZGxJR1J2YmlkMElHaGhkbVVnZEc4Z1oyRnlZbUZuWlNCamIyeHNaV04wSUdGdWVYUm9hVzVuWEc0Z0lDQWdJQ0FnSUNvdlhHNGdJQ0FnSUNBZ0lHUmxZV04wYVhaaGRHVlJkV1YxWlM1emNHeHBZMlVvTUN3Z1pHVmhZM1JwZG1GMFpWRjFaWFZsVEdWdVozUm9LVHRjYmx4dUlDQWdJQ0FnSUNBdktseHVJQ0FnSUNBZ0lDQWdJQ0FnVUhKdlkyVnpjeUJoWTNScGRtRjBaU0J4ZFdWMVpWeHVJQ0FnSUNBZ0lDQXFMMXh1SUNBZ0lDQWdJQ0JqYjI1emRDQmhZM1JwZG1GMFpWRjFaWFZsVEdWdVozUm9JRDBnWVdOMGFYWmhkR1ZSZFdWMVpTNXNaVzVuZEdnN1hHNWNiaUFnSUNBZ0lDQWdabTl5SUNoc1pYUWdhU0E5SURBN0lHa2dQQ0JoWTNScGRtRjBaVkYxWlhWbFRHVnVaM1JvT3lCcEt5c3BJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lHTnZibk4wSUdsa0lEMGdZV04wYVhaaGRHVlJkV1YxWlZ0cFhUdGNiaUFnSUNBZ0lDQWdJQ0FnSUdOdmJuTjBJR0ZqZEdsMlpVbGtTVzVrWlhnZ1BTQnlkVzV1YVc1blNXUnpMbWx1WkdWNFQyWW9hV1FwTzF4dUlDQWdJQ0FnSUNBZ0lDQWdZMjl1YzNRZ2NISnZZMlZ6Y3lBOUlHRmpkR2wyWlZCeWIyTmxjM05sYzF0cFpGMDdYRzVjYmlBZ0lDQWdJQ0FnSUNBZ0lDOHZJRWxtSUhCeWIyTmxjM01nYVhOdUozUWdZV3h5WldGa2VTQnlkVzV1YVc1bkxDQmhZM1JwZG1GMFpWeHVJQ0FnSUNBZ0lDQWdJQ0FnYVdZZ0tHRmpkR2wyWlVsa1NXNWtaWGdnUFQwOUlDMHhJQ1ltSUhCeWIyTmxjM01wSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCcFppQW9jSEp2WTJWemN5NXBjMUJ5YVc5eWFYUjVLU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lISjFibTVwYm1kSlpITXVkVzV6YUdsbWRDaHBaQ2s3WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnZlNCbGJITmxJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2NuVnVibWx1WjBsa2N5NXdkWE5vS0dsa0tUdGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQjlYRzVjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0IxY0dSaGRHVlNkVzV1YVc1blEyOTFiblFvZEhKMVpTd2djSEp2WTJWemN5NXBjMHhoZW5rcE8xeHVYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdhV1lnS0hCeWIyTmxjM011YjI1QlkzUnBkbUYwWlNrZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0J3Y205alpYTnpMbTl1UVdOMGFYWmhkR1VvY0hKdlkyVnpjeWs3WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnZlZ4dUlDQWdJQ0FnSUNBZ0lDQWdmVnh1SUNBZ0lDQWdJQ0I5WEc1Y2JpQWdJQ0FnSUNBZ1lXTjBhWFpoZEdWUmRXVjFaUzV6Y0d4cFkyVW9NQ3dnWVdOMGFYWmhkR1ZSZFdWMVpVeGxibWQwYUNrN1hHNWNiaUFnSUNBZ0lDQWdjbVYwZFhKdUlISjFibTVwYm1kSlpITTdYRzRnSUNBZ2ZWeHVmVHRjYmlKZGZRPT1cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL3Byb2Nlc3MvbWFuYWdlci5qc1xuICoqIG1vZHVsZSBpZCA9IDUxXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvLyBzaGltIGZvciB1c2luZyBwcm9jZXNzIGluIGJyb3dzZXJcblxudmFyIHByb2Nlc3MgPSBtb2R1bGUuZXhwb3J0cyA9IHt9O1xudmFyIHF1ZXVlID0gW107XG52YXIgZHJhaW5pbmcgPSBmYWxzZTtcblxuZnVuY3Rpb24gZHJhaW5RdWV1ZSgpIHtcbiAgICBpZiAoZHJhaW5pbmcpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBkcmFpbmluZyA9IHRydWU7XG4gICAgdmFyIGN1cnJlbnRRdWV1ZTtcbiAgICB2YXIgbGVuID0gcXVldWUubGVuZ3RoO1xuICAgIHdoaWxlKGxlbikge1xuICAgICAgICBjdXJyZW50UXVldWUgPSBxdWV1ZTtcbiAgICAgICAgcXVldWUgPSBbXTtcbiAgICAgICAgdmFyIGkgPSAtMTtcbiAgICAgICAgd2hpbGUgKCsraSA8IGxlbikge1xuICAgICAgICAgICAgY3VycmVudFF1ZXVlW2ldKCk7XG4gICAgICAgIH1cbiAgICAgICAgbGVuID0gcXVldWUubGVuZ3RoO1xuICAgIH1cbiAgICBkcmFpbmluZyA9IGZhbHNlO1xufVxucHJvY2Vzcy5uZXh0VGljayA9IGZ1bmN0aW9uIChmdW4pIHtcbiAgICBxdWV1ZS5wdXNoKGZ1bik7XG4gICAgaWYgKCFkcmFpbmluZykge1xuICAgICAgICBzZXRUaW1lb3V0KGRyYWluUXVldWUsIDApO1xuICAgIH1cbn07XG5cbnByb2Nlc3MudGl0bGUgPSAnYnJvd3Nlcic7XG5wcm9jZXNzLmJyb3dzZXIgPSB0cnVlO1xucHJvY2Vzcy5lbnYgPSB7fTtcbnByb2Nlc3MuYXJndiA9IFtdO1xucHJvY2Vzcy52ZXJzaW9uID0gJyc7IC8vIGVtcHR5IHN0cmluZyB0byBhdm9pZCByZWdleHAgaXNzdWVzXG5wcm9jZXNzLnZlcnNpb25zID0ge307XG5cbmZ1bmN0aW9uIG5vb3AoKSB7fVxuXG5wcm9jZXNzLm9uID0gbm9vcDtcbnByb2Nlc3MuYWRkTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5vbmNlID0gbm9vcDtcbnByb2Nlc3Mub2ZmID0gbm9vcDtcbnByb2Nlc3MucmVtb3ZlTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVBbGxMaXN0ZW5lcnMgPSBub29wO1xucHJvY2Vzcy5lbWl0ID0gbm9vcDtcblxucHJvY2Vzcy5iaW5kaW5nID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuYmluZGluZyBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xuXG4vLyBUT0RPKHNodHlsbWFuKVxucHJvY2Vzcy5jd2QgPSBmdW5jdGlvbiAoKSB7IHJldHVybiAnLycgfTtcbnByb2Nlc3MuY2hkaXIgPSBmdW5jdGlvbiAoZGlyKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmNoZGlyIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn07XG5wcm9jZXNzLnVtYXNrID0gZnVuY3Rpb24oKSB7IHJldHVybiAwOyB9O1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAod2VicGFjaykvfi9ub2RlLWxpYnMtYnJvd3Nlci9+L3Byb2Nlc3MvYnJvd3Nlci5qc1xuICoqIG1vZHVsZSBpZCA9IDUyXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iXSwic291cmNlUm9vdCI6IiIsImZpbGUiOiJwb3Btb3Rpb24uZ2xvYmFsLmpzIn0=