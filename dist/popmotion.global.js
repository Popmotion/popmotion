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
	exports.transformers = exports.shadowType = exports.scaleType = exports.rgbType = exports.pxType = exports.positionsType = exports.hslType = exports.hexType = exports.complexType = exports.colorType = exports.axesType = exports.angleType = exports.alphaType = exports.setGlobalDilation = exports.combineTransformers = exports.utils = exports.calc = exports.easing = exports.svgPathAdapter = exports.svgAdapter = exports.cssAdapter = exports.attrAdapter = exports.adapter = exports.timeline = exports.stagger = exports.process = exports.input = exports.trackInput = exports.physics = exports.tween = exports.actor = undefined;
	
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
	
	var _Action = __webpack_require__(33);
	
	var _Action2 = _interopRequireDefault(_Action);
	
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
	
	var _presetEasing = __webpack_require__(19);
	
	var _presetEasing2 = _interopRequireDefault(_presetEasing);
	
	var _calc2 = __webpack_require__(18);
	
	var _calc = _interopRequireWildcard(_calc2);
	
	var _utils = _interopRequireWildcard(_utils2);
	
	var _alpha = __webpack_require__(22);
	
	var _alpha2 = _interopRequireDefault(_alpha);
	
	var _angle = __webpack_require__(20);
	
	var _angle2 = _interopRequireDefault(_angle);
	
	var _axes = __webpack_require__(21);
	
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
	
	var _transformers2 = __webpack_require__(32);
	
	var _transformers = _interopRequireWildcard(_transformers2);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// Process
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
	
	// Transformers
	
	exports.transformers = _transformers;
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9wb3Btb3Rpb24uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OzttQkFrQ3FCLG1CQUFtQjs7Ozs7Ozs7O2tCQUMvQixpQkFBaUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUF0Qm5CLElBQU0sS0FBSyxXQUFMLEtBQUssR0FBRyxVQUFDLEtBQUs7U0FBSyxvQkFBVSxLQUFLLENBQUM7Q0FBQTs7OztBQUFDO0FBQzFDLElBQU0sS0FBSyxXQUFMLEtBQUssR0FBRyxVQUFDLEtBQUs7U0FBSyxvQkFBVSxLQUFLLENBQUM7Q0FBQSxDQUFDO0FBQzFDLElBQU0sT0FBTyxXQUFQLE9BQU8sR0FBRyxVQUFDLEtBQUs7U0FBSyxzQkFBWSxLQUFLLENBQUM7Q0FBQSxDQUFDO0FBQzlDLElBQU0sVUFBVSxXQUFWLFVBQVUsR0FBRztvQ0FBSSxJQUFJO0FBQUosUUFBSTs7OzJFQUFrQixJQUFJO0NBQUMsQ0FBQztBQUNuRCxJQUFNLEtBQUssV0FBTCxLQUFLLEdBQUc7cUNBQUksSUFBSTtBQUFKLFFBQUk7OzsyRUFBa0IsSUFBSTtDQUFDLENBQUM7QUFDOUMsSUFBTSxPQUFPLFdBQVAsT0FBTyxHQUFHO3FDQUFJLElBQUk7QUFBSixRQUFJOzs7NkVBQW9CLElBQUk7Q0FBQyxDQUFDO1FBQ2xELE9BQU87UUFDUCxRQUFROzs7O1FBR1IsT0FBTztRQUNQLFdBQVc7UUFDWCxVQUFVO1FBQ1YsVUFBVTtRQUNWLGNBQWM7Ozs7UUFHZCxNQUFNOzs7O1FBR0QsSUFBSTtRQUNKLEtBQUs7Ozs7UUFJVixTQUFTO1FBQ1QsU0FBUztRQUNULFFBQVE7UUFDUixTQUFTO1FBQ1QsV0FBVztRQUNYLE9BQU87UUFDUCxPQUFPO1FBQ1AsYUFBYTtRQUNiLE1BQU07UUFDTixPQUFPO1FBQ1AsU0FBUztRQUNULFVBQVU7Ozs7UUFHTCxZQUFZIiwiZmlsZSI6InBvcG1vdGlvbi5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvTWF0dFBlcnJ5L1NpdGVzL3BvcG1vdGlvbiIsInNvdXJjZXNDb250ZW50IjpbIi8vIEFjdGlvbnNcbmltcG9ydCBBY3Rpb24gZnJvbSAnLi9hY3Rpb25zL0FjdGlvbic7XG5pbXBvcnQgQWN0b3IgZnJvbSAnLi9hY3Rpb25zL0FjdG9yJztcbmltcG9ydCBUd2VlbiBmcm9tICcuL2FjdGlvbnMvVHdlZW4nO1xuaW1wb3J0IFBoeXNpY3MgZnJvbSAnLi9hY3Rpb25zL1BoeXNpY3MnO1xuaW1wb3J0IFRyYWNrIGZyb20gJy4vYWN0aW9ucy9UcmFjayc7XG5cbi8vIFByb2Nlc3NcbmltcG9ydCBQcm9jZXNzIGZyb20gJy4vcHJvY2Vzcy9Qcm9jZXNzJztcblxuLy8gSW5wdXRcbmltcG9ydCBJbnB1dCBmcm9tICcuL2lucHV0L0lucHV0JztcblxuZXhwb3J0IGNvbnN0IGFjdG9yID0gKHByb3BzKSA9PiBuZXcgQWN0b3IocHJvcHMpO1xuZXhwb3J0IGNvbnN0IHR3ZWVuID0gKHByb3BzKSA9PiBuZXcgVHdlZW4ocHJvcHMpO1xuZXhwb3J0IGNvbnN0IHBoeXNpY3MgPSAocHJvcHMpID0+IG5ldyBQaHlzaWNzKHByb3BzKTtcbmV4cG9ydCBjb25zdCB0cmFja0lucHV0ID0gKC4uLmFyZ3MpID0+IG5ldyBUcmFjayguLi5hcmdzKTtcbmV4cG9ydCBjb25zdCBpbnB1dCA9ICguLi5hcmdzKSA9PiBuZXcgSW5wdXQoLi4uYXJncyk7XG5leHBvcnQgY29uc3QgcHJvY2VzcyA9ICguLi5hcmdzKSA9PiBuZXcgUHJvY2VzcyguLi5hcmdzKTtcbmV4cG9ydCBzdGFnZ2VyIGZyb20gJy4vaW5jL3N0YWdnZXInO1xuZXhwb3J0IHRpbWVsaW5lIGZyb20gJy4vaW5jL3RpbWVsaW5lJztcblxuLy8gQWRhcHRlcnNcbmV4cG9ydCBhZGFwdGVyIGZyb20gJy4vYWRhcHRlci9hZGFwdGVyJztcbmV4cG9ydCBhdHRyQWRhcHRlciBmcm9tICcuL2FkYXB0ZXIvYXR0ci1hZGFwdGVyJztcbmV4cG9ydCBjc3NBZGFwdGVyIGZyb20gJy4vYWRhcHRlci9jc3MtYWRhcHRlcic7XG5leHBvcnQgc3ZnQWRhcHRlciBmcm9tICcuL2FkYXB0ZXIvc3ZnLWFkYXB0ZXInO1xuZXhwb3J0IHN2Z1BhdGhBZGFwdGVyIGZyb20gJy4vYWRhcHRlci9zdmctcGF0aC1hZGFwdGVyJztcblxuLy8gRWFzaW5nXG5leHBvcnQgZWFzaW5nIGZyb20gJy4vYWN0aW9ucy9lYXNpbmcvcHJlc2V0LWVhc2luZyc7XG5cbi8vIFV0aWxzXG5leHBvcnQgKiBhcyBjYWxjIGZyb20gJy4vaW5jL2NhbGMnO1xuZXhwb3J0ICogYXMgdXRpbHMsIHsgY29tYmluZVRyYW5zZm9ybWVycyB9IGZyb20gJy4vaW5jL3V0aWxzJztcbmV4cG9ydCB7IHNldEdsb2JhbERpbGF0aW9uIH0gZnJvbSAnLi9wcm9jZXNzL3RpbWVyJztcblxuLy8gVmFsdWUgdHlwZXNcbmV4cG9ydCBhbHBoYVR5cGUgZnJvbSAnLi92YWx1ZS10eXBlcy9hbHBoYSc7XG5leHBvcnQgYW5nbGVUeXBlIGZyb20gJy4vdmFsdWUtdHlwZXMvYW5nbGUnO1xuZXhwb3J0IGF4ZXNUeXBlIGZyb20gJy4vdmFsdWUtdHlwZXMvYXhlcyc7XG5leHBvcnQgY29sb3JUeXBlIGZyb20gJy4vdmFsdWUtdHlwZXMvY29sb3InO1xuZXhwb3J0IGNvbXBsZXhUeXBlIGZyb20gJy4vdmFsdWUtdHlwZXMvY29tcGxleCc7XG5leHBvcnQgaGV4VHlwZSBmcm9tICcuL3ZhbHVlLXR5cGVzL2hleCc7XG5leHBvcnQgaHNsVHlwZSBmcm9tICcuL3ZhbHVlLXR5cGVzL2hzbCc7XG5leHBvcnQgcG9zaXRpb25zVHlwZSBmcm9tICcuL3ZhbHVlLXR5cGVzL3Bvc2l0aW9ucyc7XG5leHBvcnQgcHhUeXBlIGZyb20gJy4vdmFsdWUtdHlwZXMvcHgnO1xuZXhwb3J0IHJnYlR5cGUgZnJvbSAnLi92YWx1ZS10eXBlcy9yZ2InO1xuZXhwb3J0IHNjYWxlVHlwZSBmcm9tICcuL3ZhbHVlLXR5cGVzL3NjYWxlJztcbmV4cG9ydCBzaGFkb3dUeXBlIGZyb20gJy4vdmFsdWUtdHlwZXMvc2hhZG93JztcblxuLy8gVHJhbnNmb3JtZXJzXG5leHBvcnQgKiBhcyB0cmFuc2Zvcm1lcnMgZnJvbSAnLi9pbmMvdHJhbnNmb3JtZXJzJzsiXX0=

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
	//# sourceMappingURL=data:application/json;base64,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QU0sbUJBQW1CLFdBQW5CLG1CQUFtQixHQUFHLFVBQUMsS0FBSztXQUFLLFFBQVEsQ0FBQyxLQUFLLENBQUMsR0FBRyxLQUFLLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDO0NBQUE7Ozs7Ozs7Ozs7QUFBQyxBQVV2RixJQUFNLG1CQUFtQixXQUFuQixtQkFBbUIsR0FBRyxVQUFDLEtBQUs7V0FBSyxRQUFRLENBQUMsS0FBSyxDQUFDLEdBQUcsS0FBSyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQztDQUFBOzs7Ozs7Ozs7O0FBQUMsQUFVcEYsSUFBTSxjQUFjLFdBQWQsY0FBYyxHQUFHLFVBQUMsS0FBSyxFQUFLO0FBQ3JDLFFBQUksS0FBSyxDQUFDLEtBQUssRUFBRTtBQUNiLFlBQU0sVUFBVSxHQUFHLEtBQUssQ0FBQyxLQUFLLENBQUMsbUJBQW1CLENBQUMsQ0FBQzs7QUFFcEQsZUFBTztBQUNILGlCQUFLLEVBQUUsVUFBVSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUNoQyxnQkFBSSxFQUFHLFVBQVUsQ0FBQyxDQUFDLENBQUM7U0FDdkIsQ0FBQztLQUNMLE1BQU07QUFDSCxlQUFPLEVBQUUsS0FBSyxFQUFMLEtBQUssRUFBRSxDQUFDO0tBQ3BCO0NBQ0o7Ozs7Ozs7OztBQUFDLEFBU0ssSUFBTSxTQUFTLFdBQVQsU0FBUyxHQUFHLFVBQUMsR0FBRyxFQUFvQjtRQUFsQixTQUFTLHlEQUFHLENBQUM7O0FBQ3hDLGFBQVMsWUFBRyxFQUFFLEVBQUksU0FBUyxDQUFBLENBQUM7QUFDNUIsV0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsR0FBRyxTQUFTLENBQUMsR0FBRyxTQUFTLENBQUM7Q0FDbEQsQ0FBQyIsImZpbGUiOiJ1dGlscy5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvTWF0dFBlcnJ5L1NpdGVzL3BvcG1vdGlvbiIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IENBTUVMX0NBU0VfUEFUVEVSTiA9IC8oW2Etel0pKFtBLVpdKS9nO1xuY29uc3QgUkVQTEFDRV9URU1QTEFURSA9ICckMS0kMic7XG5jb25zdCBIQVNfUEVSRk9STUFOQ0VfTk9XID0gKHR5cGVvZiBwZXJmb3JtYW5jZSAhPT0gJ3VuZGVmaW5lZCcgJiYgcGVyZm9ybWFuY2Uubm93KTtcblxuLypcbiAgICBHZXQgdmFyIHR5cGUgYXMgc3RyaW5nXG4gICAgXG4gICAgQHBhcmFtOiBWYXJpYWJsZSB0byB0ZXN0XG4gICAgQHJldHVybiBbc3RyaW5nXTogUmV0dXJucywgZm9yIGluc3RhbmNlICdPYmplY3QnIGlmIFtvYmplY3QgT2JqZWN0XVxuKi9cbmNvbnN0IHZhclR5cGUgPSB2YXJpYWJsZSA9PiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwodmFyaWFibGUpLnNsaWNlKDgsIC0xKTtcblxuLypcbiAgICBDb252ZXJ0IGNhbWVsQ2FzZSB0byBkYXNoLWNhc2VcblxuICAgIEBwYXJhbSBbc3RyaW5nXVxuICAgIEByZXR1cm4gW3N0cmluZ11cbiovXG5leHBvcnQgY29uc3QgY2FtZWxUb0Rhc2ggPSAoc3RyaW5nKSA9PiBzdHJpbmcucmVwbGFjZShDQU1FTF9DQVNFX1BBVFRFUk4sIFJFUExBQ0VfVEVNUExBVEUpLnRvTG93ZXJDYXNlKCk7XG5cbi8qXG4gICAgQ29tYmluZSB0cmFuc2Zvcm1lcnMgaW50byBvbmUgZnVuY3Rpb24gdGhhdCBjYWxscyBldmVyeVxuICAgIHRyYW5zZm9ybWVyIGluIHRoZSBhcnJheSBhbmQgcmV0dXJucyB0aGUgcmVzdWx0XG5cbiAgICBAcGFyYW0gW2FycmF5XVxuICAgIEByZXR1cm4gW2Z1bmN0aW9uXVxuKi9cbmV4cG9ydCBjb25zdCBjb21iaW5lVHJhbnNmb3JtZXJzID0gKHRyYW5zZm9ybWVycykgPT4ge1xuICAgIGNvbnN0IG51bVRyYW5zZm9ybWVycyA9IHRyYW5zZm9ybWVycy5sZW5ndGg7XG4gICAgbGV0IGkgPSAwO1xuXG4gICAgLypcbiAgICAgICAgQHBhcmFtIFtudW1iZXJdXG4gICAgICAgIEBwYXJhbSBbc3RyaW5nXVxuICAgICAgICBAcGFyYW0gW0FjdGlvbl1cbiAgICAgICAgQHJldHVybiBbbnVtYmVyXVxuICAgICovXG4gICAgcmV0dXJuICh2LCBrZXksIGEpID0+IHtcbiAgICAgICAgZm9yIChpID0gMDsgaSA8IG51bVRyYW5zZm9ybWVyczsgaSsrKSB7XG4gICAgICAgICAgICB2ID0gdHJhbnNmb3JtZXJzW2ldKHYsIGtleSwgYSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdjtcbiAgICB9O1xufTtcblxuZXhwb3J0IGNvbnN0IGNyZWF0ZURlbGltaXRlZCA9ICh2YWx1ZXMsIHRlcm1zLCBkZWxpbWl0ZXIsIGNob3ApID0+IHtcbiAgICBjb25zdCBudW1UZXJtcyA9IHRlcm1zLmxlbmd0aDtcbiAgICBsZXQgY29tYmluZWQgPSAnJztcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbnVtVGVybXM7IGkrKykge1xuICAgICAgICBjb25zdCB0ZXJtID0gdGVybXNbaV07XG4gICAgICAgIGlmICh2YWx1ZXMuaGFzT3duUHJvcGVydHkodGVybSkpIHtcbiAgICAgICAgICAgIGNvbWJpbmVkICs9IHZhbHVlc1t0ZXJtXSArIGRlbGltaXRlcjtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGlmIChjaG9wKSB7XG4gICAgICAgIGNvbWJpbmVkID0gY29tYmluZWQuc2xpY2UoMCwgLWNob3ApO1xuICAgIH1cblxuICAgIHJldHVybiBjb21iaW5lZDtcbn07XG5cbi8qXG4gICAgQ3JlYXRlIGEgZnVuY3Rpb24gc3RyaW5nXG5cbiAgICAnMjBweCcsICd0cmFuc2xhdGUnIC0+ICd0cmFuc2xhdGUoMjBweCknXG5cbiAgICBAcGFyYW0gW3N0cmluZ11cbiAgICBAcGFyYW0gW3N0cmluZ11cbiAgICBAcmV0dXJuIFtzdHJpbmddXG4qL1xuZXhwb3J0IGNvbnN0IGNyZWF0ZUZ1bmN0aW9uU3RyaW5nID0gKHZhbHVlLCBwcmVmaXgpID0+IGAke3ByZWZpeH0oJHt2YWx1ZX0pYDtcblxuLypcbiAgICBHZW5lcmF0ZSBjdXJyZW50IHRpbWVzdGFtcFxuICAgIFxuICAgIEByZXR1cm4gW3RpbWVzdGFtcF06IEN1cnJlbnQgVU5JWCB0aW1lc3RhbXBcbiovXG5leHBvcnQgY29uc3QgY3VycmVudFRpbWUgPSBIQVNfUEVSRk9STUFOQ0VfTk9XID8gKCkgPT4gcGVyZm9ybWFuY2Uubm93KCkgOiAoKSA9PiBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcblxuLypcbiAgICBTcGxpdCBjb2xvciBzdHJpbmcgaW50byBtYXAgb2YgY29sb3IgcHJvcGVydGllc1xuXG4gICAgXCJyZ2JhKDI1NSwgMjU1LCAyNTUsIDApXCIsIFtcIlJlZFwiLCAnR3JlZW5cIiwgXCJCbHVlXCIsIFwiQWxwaGFcIl1cblxuICAgIHsgUmVkOiAyNTUuLi4gfVxuKi9cbmV4cG9ydCBjb25zdCBnZXRDb2xvclZhbHVlcyA9ICh2YWx1ZSwgY29sb3JUZXJtcykgPT4ge1xuICAgIGNvbnN0IG51bUNvbG9yVGVybXMgPSBjb2xvclRlcm1zLmxlbmd0aDtcbiAgICBjb25zdCBjb2xvclZhbHVlcyA9IHt9O1xuICAgIGNvbnN0IGNvbG9ycyA9IHNwbGl0Q29tbWFEZWxpbWl0ZWQoZ2V0VmFsdWVGcm9tRnVuY3Rpb25TdHJpbmcodmFsdWUpKTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbnVtQ29sb3JUZXJtczsgaSsrKSB7XG4gICAgICAgIGNvbG9yVmFsdWVzW2NvbG9yVGVybXNbaV1dID0gKGNvbG9yc1tpXSAhPT0gdW5kZWZpbmVkKSA/IGNvbG9yc1tpXSA6IDE7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbG9yVmFsdWVzO1xufTtcblxuLypcbiAgICBHZXQgdmFsdWUgZnJvbSBmdW5jdGlvbiBzdHJpbmdcblxuICAgIFwidHJhbnNsYXRlWCgyMHB4KVwiIC0+IFwiMjBweFwiXG4qL1xuZXhwb3J0IGNvbnN0IGdldFZhbHVlRnJvbUZ1bmN0aW9uU3RyaW5nID0gKHZhbHVlKSA9PiB2YWx1ZS5zdWJzdHJpbmcodmFsdWUuaW5kZXhPZignKCcpICsgMSwgdmFsdWUubGFzdEluZGV4T2YoJyknKSk7XG5cbi8qXG4gICAgQ2hlY2sgaWYgdHdvIG9iamVjdHMgaGF2ZSBjaGFuZ2VkIGZyb20gZWFjaCBvdGhlclxuICAgIFxuICAgIEBwYXJhbSBbb2JqZWN0XTogSW5wdXQgQVxuICAgIEBwYXJhbSBbb2JqZWN0XTogSW5wdXQgQlxuICAgIEByZXR1cm4gW2Jvb2xlYW5dOiBUcnVlIGlmIGRpZmZlcmVudFxuKi9cbmV4cG9ydCBjb25zdCBoYXNDaGFuZ2VkID0gKGEsIGIpID0+IHtcbiAgICBsZXQgY2hhbmdlZCA9IGZhbHNlO1xuXG4gICAgZm9yIChsZXQga2V5IGluIGEpIHtcbiAgICAgICAgaWYgKGEuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgICAgaWYgKGhhc1Byb3BlcnR5KGIsIGtleSkpIHtcbiAgICAgICAgICAgICAgICBpZiAoYVtrZXldICE9PSBiW2tleV0pIHtcbiAgICAgICAgICAgICAgICAgICAgY2hhbmdlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjaGFuZ2VkID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBjaGFuZ2VkO1xufTtcblxuLypcbiAgICBDaGVjayBpZiBvYmplY3QgaGFzIHByb3BlcnR5IGFuZCBpdCBpc24ndCB1bmRlZmluZWRcblxuICAgIEBwYXJhbSBbb2JqZWN0XVxuICAgIEBwYXJhbSBbc3RyaW5nXVxuICAgIEByZXR1cm4gW2Jvb2xlYW5dXG4qL1xuZXhwb3J0IGNvbnN0IGhhc1Byb3BlcnR5ID0gKG9iamVjdCwgcHJvcGVydHlOYW1lKSA9PiBvYmplY3QuaGFzT3duUHJvcGVydHkocHJvcGVydHlOYW1lKSAmJiBvYmplY3RbcHJvcGVydHlOYW1lXSAhPT0gdW5kZWZpbmVkO1xuXG4vKlxuICAgIElzIHV0aWxzIHZhciBhbiBhcnJheSA/IFxuICAgIFxuICAgIEBwYXJhbTogVmFyaWFibGUgdG8gdGVzdFxuICAgIEByZXR1cm4gW2Jvb2xlYW5dOiBSZXR1cm5zIHRydWUgaWYgdXRpbHMudmFyVHlwZSA9PT0gJ0FycmF5J1xuKi9cbmV4cG9ydCBjb25zdCBpc0FycmF5ID0gKGFycikgPT4gdmFyVHlwZShhcnIpID09PSAnQXJyYXknO1xuXG4vKlxuICAgIElzIHV0aWxzIHZhciBhIGZ1bmN0aW9uID8gXG4gICAgXG4gICAgQHBhcmFtOiBWYXJpYWJsZSB0byB0ZXN0XG4gICAgQHJldHVybiBbYm9vbGVhbl06IFJldHVybnMgdHJ1ZSBpZiB1dGlscy52YXJUeXBlID09PSAnRnVuY3Rpb24nXG4qL1xuZXhwb3J0IGNvbnN0IGlzRnVuYyA9IChvYmopID0+IHZhclR5cGUob2JqKSA9PT0gJ0Z1bmN0aW9uJztcblxuLypcbiAgICBJcyB1dGlscyB2YXIgYSBudW1iZXI/XG4gICAgXG4gICAgQHBhcmFtOiBWYXJpYWJsZSB0byB0ZXN0XG4gICAgQHJldHVybiBbYm9vbGVhbl06IFJldHVybnMgdHJ1ZSBpZiB0eXBlb2YgPT09ICdudW1iZXInXG4qL1xuZXhwb3J0IGNvbnN0IGlzTnVtID0gKG51bSkgPT4gdHlwZW9mIG51bSA9PT0gJ251bWJlcic7XG5cbi8qXG4gICAgSXMgdXRpbHMgdmFyIGFuIG9iamVjdD9cbiAgICBcbiAgICBAcGFyYW06IFZhcmlhYmxlIHRvIHRlc3RcbiAgICBAcmV0dXJuIFtib29sZWFuXTogUmV0dXJucyB0cnVlIGlmIHR5cGVvZiA9PT0gJ29iamVjdCdcbiovXG5leHBvcnQgY29uc3QgaXNPYmogPSAob2JqKSA9PiB0eXBlb2Ygb2JqID09PSAnb2JqZWN0JztcblxuLypcbiAgICBJcyB1dGlscyBhIHJlbGF0aXZlIHZhbHVlIGFzc2lnbm1lbnQ/XG4gICAgXG4gICAgQHBhcmFtIFtzdHJpbmddOiBWYXJpYWJsZSB0byB0ZXN0XG4gICAgQHJldHVybiBbYm9vbGVhbl06IElmIHV0aWxzIGxvb2tzIGxpa2UgYSByZWxhdGl2ZSB2YWx1ZSBhc3NpZ25tZW50XG4qL1xuZXhwb3J0IGNvbnN0IGlzUmVsYXRpdmVWYWx1ZSA9ICh2YWx1ZSkgPT4gKHZhbHVlICYmIHZhbHVlLmluZGV4T2YgJiYgdmFsdWUuaW5kZXhPZignPScpID4gMCkgPyB0cnVlIDogZmFsc2U7XG5cbi8qXG4gICAgSXMgdXRpbHMgdmFyIGEgc3RyaW5nID8gXG4gICAgXG4gICAgQHBhcmFtOiBWYXJpYWJsZSB0byB0ZXN0XG4gICAgQHJldHVybiBbYm9vbGVhbl06IFJldHVybnMgdHJ1ZSBpZiB0eXBlb2Ygc3RyID09PSAnc3RyaW5nJ1xuKi9cbmV4cG9ydCBjb25zdCBpc1N0cmluZyA9IChzdHIpID0+IHR5cGVvZiBzdHIgPT09ICdzdHJpbmcnO1xuXG4vKlxuICAgIEBwYXJhbSBbc3RyaW5nIHx8IE5vZGVMaXN0XTpcbiAgICAgICAgSWYgc3RyaW5nLCB0cmVhdGVkIGFzIHNlbGVjdG9yLlxuICAgICAgICBJZiBub3QsIHRyZWF0ZWQgYXMgcHJlZXhpc3RpbmcgTm9kZUxpc3RcblxuICAgIEByZXR1cm4gW0FycmF5XVxuKi9cbmV4cG9ydCBjb25zdCBzZWxlY3REb20gPSAoc2VsZWN0b3IpID0+IHtcbiAgICBjb25zdCBub2RlcyA9ICh0eXBlb2Ygc2VsZWN0b3IgPT09ICdzdHJpbmcnKSA/IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoc2VsZWN0b3IpIDogc2VsZWN0b3I7XG4gICAgcmV0dXJuIChub2Rlcy5sZW5ndGgpID8gW10uc2xpY2UuY2FsbChub2RlcykgOiBbXS5wdXNoKG5vZGVzKTtcbn07XG5cbi8qXG4gICAgU3BsaXQgY29tbWEtZGVsaW1pdGVkIHN0cmluZ1xuXG4gICAgXCJmb28sYmFyXCIgLT4gW1wiZm9vXCIsIFwiYmFyXCJdXG5cbiAgICBAcGFyYW0gW3N0cmluZ11cbiAgICBAcmV0dXJuIFthcnJheV1cbiovXG5leHBvcnQgY29uc3Qgc3BsaXRDb21tYURlbGltaXRlZCA9ICh2YWx1ZSkgPT4gaXNTdHJpbmcodmFsdWUpID8gdmFsdWUuc3BsaXQoLyxcXHMqLykgOiBbdmFsdWVdO1xuXG4vKlxuICAgIFNwbGl0IHNwYWNlLWRlbGltaXRlZCBzdHJpbmdcblxuICAgIFwiZm9vIGJhclwiIC0+IFtcImZvb1wiLCBcImJhclwiXVxuXG4gICAgQHBhcmFtIFtzdHJpbmddXG4gICAgQHJldHVybiBbYXJyYXldXG4qL1xuZXhwb3J0IGNvbnN0IHNwbGl0U3BhY2VEZWxpbWl0ZWQgPSAodmFsdWUpID0+IGlzU3RyaW5nKHZhbHVlKSA/IHZhbHVlLnNwbGl0KCcgJykgOiBbdmFsdWVdO1xuXG4vKlxuICAgIFNwbGl0IGEgdmFsdWUgaW50byBhIHZhbHVlL3VuaXQgb2JqZWN0XG4gICAgXG4gICAgICAgIFwiMjAwcHhcIiAtPiB7IHZhbHVlOiAyMDAsIHVuaXQ6IFwicHhcIiB9XG4gICAgICAgIFxuICAgIEBwYXJhbSBbc3RyaW5nXTogVmFsdWUgdG8gc3BsaXRcbiAgICBAcmV0dXJuIFtvYmplY3RdOiBPYmplY3Qgd2l0aCB2YWx1ZSBhbmQgdW5pdCBwcm9wc1xuKi9cbmV4cG9ydCBjb25zdCBzcGxpdFZhbHVlVW5pdCA9ICh2YWx1ZSkgPT4ge1xuICAgIGlmICh2YWx1ZS5tYXRjaCkge1xuICAgICAgICBjb25zdCBzcGxpdFZhbHVlID0gdmFsdWUubWF0Y2goLygtP1xcZCpcXC4/XFxkKikoLiopLyk7XG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHZhbHVlOiBwYXJzZUZsb2F0KHNwbGl0VmFsdWVbMV0pLFxuICAgICAgICAgICAgdW5pdDogIHNwbGl0VmFsdWVbMl1cbiAgICAgICAgfTtcbiAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4geyB2YWx1ZSB9O1xuICAgIH1cbn07XG5cbi8qXG4gICAgQ29udmVydCBudW1iZXIgdG8geCBkZWNpbWFsIHBsYWNlc1xuXG4gICAgQHBhcmFtIFtudW1iZXJdXG4gICAgQHBhcmFtIFtudW1iZXJdXG4gICAgQHJldHVybiBbbnVtYmVyXVxuKi9cbmV4cG9ydCBjb25zdCB0b0RlY2ltYWwgPSAobnVtLCBwcmVjaXNpb24gPSAyKSA9PiB7XG4gICAgcHJlY2lzaW9uID0gMTAgKiogcHJlY2lzaW9uO1xuICAgIHJldHVybiBNYXRoLnJvdW5kKG51bSAqIHByZWNpc2lvbikgLyBwcmVjaXNpb247XG59O1xuIl19

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
	
	exports.__esModule = true;
	
	var _Action2 = __webpack_require__(33);
	
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
	})(_Action3.default);
	
	exports.default = Actor;
	//# sourceMappingURL=data:application/json;base64,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S0FBSyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUM7O0FBRS9CLGlCQUFLLENBQUMsTUFBTSxHQUFHLFNBQVMsQ0FBQztTQUM1Qjs7QUFFRCxlQUFPLElBQUksQ0FBQyxhQUFhLENBQUMsRUFBRSxDQUFDLENBQUM7QUFDOUIsWUFBSSxDQUFDLGdCQUFnQixFQUFFLENBQUM7O0FBRXhCLFlBQUksQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLElBQUksSUFBSSxDQUFDLFFBQVEsRUFBRTtBQUN6Qyw4QkFBTSxJQUFJLEtBQUEsTUFBRSxDQUFDO1NBQ2hCO0tBQ0o7O1dBN0lnQixLQUFLOzs7a0JBQUwsS0FBSyIsImZpbGUiOiJBY3Rvci5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvTWF0dFBlcnJ5L1NpdGVzL3BvcG1vdGlvbiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBBY3Rpb24gZnJvbSAnLi4vYWN0aW9ucy9BY3Rpb24nO1xuXG4vKlxuICAgIE1ldGhvZHMgYW5kIHByb3BlcnRpZXMgdG8gYWRkIHRvIGJvdW5kIEFjdGlvbnNcbiovXG5jb25zdCBib3VuZE9uU3RhcnQgPSAoYWN0aW9uKSA9PiBhY3Rpb24uYWN0b3IuYWN0aXZhdGVBY3Rpb24oYWN0aW9uLmlkLCBhY3Rpb24pO1xuY29uc3QgYm91bmRPblN0b3AgPSAoYWN0aW9uKSA9PiBhY3Rpb24uYWN0b3IuZGVhY3RpdmF0ZUFjdGlvbihhY3Rpb24uaWQpO1xuY29uc3QgYm91bmRQcm9wcyA9IChhY3RvcikgPT4gKHtcbiAgICBhY3RvcjogYWN0b3IsXG4gICAgaXNQcmlvcml0eTogdHJ1ZSxcbiAgICBvbjogYWN0b3Iub24sXG4gICAgX29uU3RhcnQ6IGJvdW5kT25TdGFydCxcbiAgICBfb25TdG9wOiBib3VuZE9uU3RvcCxcbiAgICBvblJlbmRlcjogdW5kZWZpbmVkXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQWN0b3IgZXh0ZW5kcyBBY3Rpb24ge1xuICAgIGNvbnN0cnVjdG9yKC4uLmFyZ3MpIHtcbiAgICAgICAgc3VwZXIoLi4uYXJncyk7XG4gICAgICAgIHRoaXMuYWN0aXZlQWN0aW9ucyA9IHt9O1xuICAgICAgICB0aGlzLm51bUFjdGl2ZUFjdGlvbnMgPSAwO1xuICAgIH1cblxuICAgIHNldChwcm9wcywgaW5zdGFudCkge1xuICAgICAgICBpZiAoaW5zdGFudCB8fCAhdGhpcy5yZWR1Y2VyKSB7XG4gICAgICAgICAgICBzdXBlci5zZXQocHJvcHMpO1xuICAgICAgICAgICAgdGhpcy5vbmNlKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zdCBhY3Rpb24gPSB0aGlzLnJlZHVjZXIocHJvcHMpO1xuICAgICAgICAgICAgaWYgKGFjdGlvbikge1xuICAgICAgICAgICAgICAgIHRoaXMuc3RhcnQoYWN0aW9uKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qXG4gICAgICAgIEJpbmQgQWN0aW9uIHRvIEFjdG9yXG4gICAgKi9cbiAgICBiaW5kKGFjdGlvbikge1xuICAgICAgICBjb25zdCBpbmhlcml0ZWRBY3Rpb24gPSBhY3Rpb24uaW5oZXJpdCgpO1xuICAgICAgICBsZXQgbmV3VmFsdWVzID0ge307XG4gICAgICAgIGxldCBoYXNOZXdWYWx1ZXMgPSBmYWxzZTtcblxuICAgICAgICAvLyBDcmVhdGUgdmFsdWVzIG9uIGFjdG9yIHRoYXQgZG9uJ3QgZXhpc3RcbiAgICAgICAgZm9yIChsZXQga2V5IGluIGluaGVyaXRlZEFjdGlvbi52YWx1ZXMpIHtcbiAgICAgICAgICAgIGlmIChpbmhlcml0ZWRBY3Rpb24udmFsdWVzLmhhc093blByb3BlcnR5KGtleSkgJiYgIXRoaXMudmFsdWVzLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICAgICAgICBuZXdWYWx1ZXNba2V5XSA9IGluaGVyaXRlZEFjdGlvbi52YWx1ZXNba2V5XTtcbiAgICAgICAgICAgICAgICBoYXNOZXdWYWx1ZXMgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGhhc05ld1ZhbHVlcykge1xuICAgICAgICAgICAgdGhpcy5zZXQoeyB2YWx1ZXM6IG5ld1ZhbHVlcyB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBpbmhlcml0ZWRBY3Rpb24uc2V0KGJvdW5kUHJvcHModGhpcywgaW5oZXJpdGVkQWN0aW9uKSk7XG4gICAgfVxuXG4gICAgLypcbiAgICAgICAgU3RhcnQgQWN0b3JcblxuICAgICAgICBJZiBBY3Rpb24gaXMgcHJvdmlkZWQsIGJpbmQgaXQgdG8gdGhpcyBBY3RvciBhbmQgc3RhcnRcblxuICAgICAgICBAcGFyYW0gKG9wdGlvbmFsKSBbQWN0aW9uXVxuICAgICovXG4gICAgc3RhcnQoYWN0aW9uKSB7XG4gICAgICAgIHN1cGVyLnN0YXJ0KCk7XG5cbiAgICAgICAgaWYgKGFjdGlvbikge1xuICAgICAgICAgICAgY29uc3QgYm91bmRBY3Rpb24gPSB0aGlzLmJpbmQoYWN0aW9uKTtcbiAgICAgICAgICAgIGJvdW5kQWN0aW9uLnN0YXJ0KCk7XG5cbiAgICAgICAgICAgIHJldHVybiBib3VuZEFjdGlvbjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGZvciAobGV0IGtleSBpbiB0aGlzLmFjdGl2ZUFjdGlvbnMpIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5hY3RpdmVBY3Rpb25zLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgYWN0aW9uID0gdGhpcy5hY3RpdmVBY3Rpb25zW2tleV07XG4gICAgICAgICAgICAgICAgICAgIGlmICghYWN0aW9uLmlzQWN0aXZlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhY3Rpb24uc3RhcnQoKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIHN0b3AoKSB7XG4gICAgICAgIHN1cGVyLnN0b3AoKTtcblxuICAgICAgICBmb3IgKGxldCBrZXkgaW4gdGhpcy5hY3RpdmVBY3Rpb25zKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5hY3RpdmVBY3Rpb25zLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmFjdGl2ZUFjdGlvbnNba2V5XS5zdG9wKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICB3aWxsUmVuZGVyKGFjdG9yLCBmcmFtZVN0YW1wLCBlbGFwc2VkKSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5udW1WYWx1ZUtleXM7IGkrKykge1xuICAgICAgICAgICAgY29uc3Qga2V5ID0gdGhpcy52YWx1ZUtleXNbaV07XG4gICAgICAgICAgICBjb25zdCB2YWx1ZSA9IHRoaXMudmFsdWVzW2tleV07XG5cbiAgICAgICAgICAgIGlmICh2YWx1ZS5kcml2ZXIpIHtcbiAgICAgICAgICAgICAgICB2YWx1ZS5jdXJyZW50ID0gdGhpcy5hY3RpdmVBY3Rpb25zW3ZhbHVlLmRyaXZlcl0udmFsdWVzW2tleV0uY3VycmVudDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBzdXBlci53aWxsUmVuZGVyKGFjdG9yLCBmcmFtZVN0YW1wLCBlbGFwc2VkKTtcbiAgICB9XG5cbiAgICAvKlxuICAgICAgICBBZGQgYWN0aXZlIGFjdGlvbnNcblxuICAgICAgICBAcGFyYW0gW251bWJlcl1cbiAgICAgICAgQHBhcmFtIFtBY3Rpb25dXG4gICAgKi9cbiAgICBhY3RpdmF0ZUFjdGlvbihpZCwgYWN0aW9uKSB7XG4gICAgICAgIHRoaXMuYWN0aXZlQWN0aW9uc1tpZF0gPSBhY3Rpb247XG4gICAgICAgIHRoaXMubnVtQWN0aXZlQWN0aW9ucysrO1xuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYWN0aW9uLm51bVZhbHVlS2V5czsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCBrZXkgPSBhY3Rpb24udmFsdWVLZXlzW2ldO1xuICAgICAgICAgICAgY29uc3QgYWN0aW9uVmFsdWUgPSBhY3Rpb24udmFsdWVzW2tleV07XG4gICAgICAgICAgICBjb25zdCB2YWx1ZSA9IHRoaXMudmFsdWVzW2tleV07XG5cbiAgICAgICAgICAgIHZhbHVlLmRyaXZlciA9IGlkO1xuICAgICAgICAgICAgYWN0aW9uVmFsdWUuZnJvbSA9IHZhbHVlLmN1cnJlbnQ7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5udW1BY3RpdmVBY3Rpb25zKSB7XG4gICAgICAgICAgICBzdXBlci5zdGFydCgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLypcbiAgICAgICAgUmVtb3ZlIGFjdGl2ZSBhY3Rpb25zXG5cbiAgICAgICAgQHBhcmFtIFtudW1iZXJdXG4gICAgKi9cbiAgICBkZWFjdGl2YXRlQWN0aW9uKGlkKSB7XG4gICAgICAgIGNvbnN0IGFjdGlvbiA9IHRoaXMuYWN0aXZlQWN0aW9uc1tpZF07XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhY3Rpb24ubnVtVmFsdWVLZXlzOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IGtleSA9IGFjdGlvbi52YWx1ZUtleXNbaV07XG4gICAgICAgICAgICBjb25zdCB2YWx1ZSA9IHRoaXMudmFsdWVzW2tleV07XG5cbiAgICAgICAgICAgIHZhbHVlLmRyaXZlciA9IHVuZGVmaW5lZDtcbiAgICAgICAgfVxuXG4gICAgICAgIGRlbGV0ZSB0aGlzLmFjdGl2ZUFjdGlvbnNbaWRdO1xuICAgICAgICB0aGlzLm51bUFjdGl2ZUFjdGlvbnMtLTtcblxuICAgICAgICBpZiAoIXRoaXMubnVtQWN0aXZlQWN0aW9ucyAmJiB0aGlzLmlzQWN0aXZlKSB7XG4gICAgICAgICAgICBzdXBlci5zdG9wKCk7XG4gICAgICAgIH1cbiAgICB9XG59Il19

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	exports.__esModule = true;
	
	var _Action2 = __webpack_require__(33);
	
	var _Action3 = _interopRequireDefault(_Action2);
	
	var _presetEasing = __webpack_require__(19);
	
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
	})(_Action3.default);
	
	exports.default = Tween;
	//# sourceMappingURL=data:application/json;base64,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QUNWLG1CQUFPLEVBQUUsQ0FBQztBQUNWLGlCQUFLLEVBQUUsQ0FBQztBQUNSLGdCQUFJLEVBQUUsQ0FBQztBQUNQLGNBQUUsRUFBRSxDQUFDO0FBQ0wsaUJBQUssRUFBRSxLQUFLO1dBQ2Q7S0FDTDs7QUE1SGdCLFNBQUssV0E4SHRCLG1CQUFtQixrQ0FBRztBQUNsQixlQUFPLElBQUksQ0FBQztLQUNmOztXQWhJZ0IsS0FBSzs7O2tCQUFMLEtBQUsiLCJmaWxlIjoiVHdlZW4uanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL01hdHRQZXJyeS9TaXRlcy9wb3Btb3Rpb24iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQWN0aW9uIGZyb20gJy4vQWN0aW9uJztcbmltcG9ydCBlYXNpbmcgZnJvbSAnLi9lYXNpbmcvcHJlc2V0LWVhc2luZyc7XG5pbXBvcnQgeyBjdXJyZW50VGltZSwgaXNOdW0gfSBmcm9tICcuLi9pbmMvdXRpbHMnO1xuaW1wb3J0IHtcbiAgICByZXN0cmljdCxcbiAgICBnZXRQcm9ncmVzc0Zyb21WYWx1ZSxcbiAgICBnZXRWYWx1ZUZyb21Qcm9ncmVzcyxcbiAgICBzdGVwUHJvZ3Jlc3Ncbn0gZnJvbSAnLi4vaW5jL2NhbGMnO1xuXG5jb25zdCBDT1VOVCA9ICdDb3VudCc7XG5jb25zdCBORVhUX1NURVBTID0ge1xuICAgIGxvb3A6ICdyZXN0YXJ0JyxcbiAgICB5b3lvOiAncmV2ZXJzZScsXG4gICAgZmxpcDogJ2ZsaXBWYWx1ZXMnXG59O1xuXG4vKlxuICAgIEVhc2UgdmFsdWUgd2l0aGluIHJhbmdlZCBwYXJhbWV0ZXJzXG4gICAgXG4gICAgQHBhcmFtIFtudW1iZXJdOiBQcm9ncmVzcyBiZXR3ZWVuIDAgYW5kIDFcbiAgICBAcGFyYW0gW251bWJlcl06IFZhbHVlIG9mIDAgcHJvZ3Jlc3NcbiAgICBAcGFyYW0gW251bWJlcl06IFZhbHVlIG9mIDEgcHJvZ3Jlc3NcbiAgICBAcGFyYW0gW3N0cmluZyB8fCBmdW5jdGlvbl06IE5hbWUgb2YgcHJlc2V0IGVhc2luZ1xuICAgICAgICB0byB1c2Ugb3IgZ2VuZXJhdGVkIGVhc2luZyBmdW5jdGlvblxuICAgIEByZXR1cm4gW251bWJlcl06IFZhbHVlIG9mIGVhc2VkIHByb2dyZXNzIGluIHJhbmdlXG4qLyBcbmNvbnN0IGVhc2UgPSAocHJvZ3Jlc3MsIGZyb20sIHRvLCBlYXNlKSA9PiB7XG4gICAgY29uc3QgcHJvZ3Jlc3NMaW1pdGVkID0gcmVzdHJpY3QocHJvZ3Jlc3MsIDAsIDEpO1xuICAgIGNvbnN0IGVhc2VkUHJvZ3Jlc3MgPSBlYXNlKHByb2dyZXNzTGltaXRlZCk7XG5cbiAgICByZXR1cm4gZ2V0VmFsdWVGcm9tUHJvZ3Jlc3MoZWFzZWRQcm9ncmVzcywgZnJvbSwgdG8pO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVHdlZW4gZXh0ZW5kcyBBY3Rpb24ge1xuICAgIHN0YXJ0KCkge1xuICAgICAgICBzdXBlci5zdGFydCgpO1xuICAgICAgICB0aGlzLmVsYXBzZWQgPSAwO1xuICAgICAgICB0aGlzLmZsaXBDb3VudCA9IHRoaXMueW95b0NvdW50ID0gdGhpcy5sb29wQ291bnQgPSAwO1xuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIG9uVXBkYXRlKHR3ZWVuLCBmcmFtZVN0YW1wLCBlbGFwc2VkKSB7XG4gICAgICAgIGNvbnN0IHByb2dyZXNzVGFyZ2V0ID0gKHRoaXMucGxheURpcmVjdGlvbiA9PT0gMSkgPyAxIDogMDtcblxuICAgICAgICB0aGlzLmVuZGVkID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5lbGFwc2VkICs9IChlbGFwc2VkICogdGhpcy5kaWxhdGUpICogdGhpcy5wbGF5RGlyZWN0aW9uO1xuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5udW1WYWx1ZUtleXM7IGkrKykge1xuICAgICAgICAgICAgY29uc3Qga2V5ID0gdGhpcy52YWx1ZUtleXNbaV07XG4gICAgICAgICAgICBjb25zdCB2YWx1ZSA9IHRoaXMudmFsdWVzW2tleV07XG5cbiAgICAgICAgICAgIGxldCBwcm9ncmVzcyA9IHJlc3RyaWN0KGdldFByb2dyZXNzRnJvbVZhbHVlKHRoaXMuZWxhcHNlZCAtIHZhbHVlLmRlbGF5LCAwLCB2YWx1ZS5kdXJhdGlvbiksIDAsIDEpO1xuXG4gICAgICAgICAgICAvLyBNYXJrIFR3ZWVuIGFzIE5PVCBlbmRlZCBpZiBzdGlsbCBpbiBwcm9ncmVzc1xuICAgICAgICAgICAgaWYgKHByb2dyZXNzICE9PSBwcm9ncmVzc1RhcmdldCkge1xuICAgICAgICAgICAgICAgIHRoaXMuZW5kZWQgPSBmYWxzZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gU3RlcCBwcm9ncmVzcyBpZiB3ZSdyZSBzdGVwcGluZ1xuICAgICAgICAgICAgaWYgKHZhbHVlLnN0ZXBzKSB7XG4gICAgICAgICAgICAgICAgcHJvZ3Jlc3MgPSBzdGVwUHJvZ3Jlc3MocHJvZ3Jlc3MsIHZhbHVlLnN0ZXBzKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gRWFzZSBwcm9ncmVzc1xuICAgICAgICAgICAgdmFsdWUuY3VycmVudCA9IGVhc2UocHJvZ3Jlc3MsIHZhbHVlLmZyb20sIHZhbHVlLnRvLCB2YWx1ZS5lYXNlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG9uRnJhbWVFbmQoKSB7XG4gICAgICAgIGlmICh0aGlzLmVuZGVkKSB7XG4gICAgICAgICAgICBsZXQgc3RlcFRha2VuID0gZmFsc2U7XG5cbiAgICAgICAgICAgIGZvciAobGV0IGtleSBpbiBORVhUX1NURVBTKSB7XG4gICAgICAgICAgICAgICAgaWYgKE5FWFRfU1RFUFMuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBtYXhTdGVwcyA9IHRoaXNba2V5XTtcblxuICAgICAgICAgICAgICAgICAgICBpZiAobWF4U3RlcHMgPT09IHRydWUgfHwgKGlzTnVtKG1heFN0ZXBzKSAmJiBtYXhTdGVwcyA+IHRoaXNba2V5ICsgQ09VTlRdKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpc1trZXkgKyBDT1VOVF0rKztcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0ZXBUYWtlbiA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzW05FWFRfU1RFUFNba2V5XV0oKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKCFzdGVwVGFrZW4pIHtcbiAgICAgICAgICAgICAgICB0aGlzLnN0b3AoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZsaXBWYWx1ZXMoKSB7XG4gICAgICAgIGNvbnN0IHZhbHVlcyA9IHRoaXMudmFsdWVzO1xuXG4gICAgICAgIHRoaXMuZWxhcHNlZCA9IHRoaXMuZHVyYXRpb24gLSB0aGlzLmVsYXBzZWQ7XG5cbiAgICAgICAgZm9yIChsZXQga2V5IGluIHZhbHVlcykge1xuICAgICAgICAgICAgaWYgKHZhbHVlcy5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgdmFsdWUgPSB2YWx1ZXNba2V5XTtcbiAgICAgICAgICAgICAgICBbdmFsdWUudG8sIHZhbHVlLmZyb21dID0gW3ZhbHVlLmZyb20sIHZhbHVlLnRvXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIHJldmVyc2UoKSB7XG4gICAgICAgIHRoaXMucGxheURpcmVjdGlvbiAqPSAtMTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgcmVzdGFydCgpIHtcbiAgICAgICAgdGhpcy5lbGFwc2VkID0gKHRoaXMucGxheURpcmVjdGlvbiA9PT0gMSkgPyAwIDogdGhpcy5kdXJhdGlvbjtcbiAgICAgICAgdGhpcy5zdGFydGVkID0gY3VycmVudFRpbWUoKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgc2Vlayhwcm9ncmVzcykge1xuICAgICAgICB0aGlzLnNlZWtUaW1lKHRoaXMuZHVyYXRpb24gKiBwcm9ncmVzcyk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIHNlZWtUaW1lKGVsYXBzZWQpIHtcbiAgICAgICAgdGhpcy5vbmNlKCk7XG4gICAgICAgIHRoaXMuZWxhcHNlZCA9IGVsYXBzZWQ7XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIFxuICAgIGdldERlZmF1bHRQcm9wcygpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIC4uLnN1cGVyLmdldERlZmF1bHRQcm9wcygpLFxuICAgICAgICAgICAgZGVsYXk6IDAsXG4gICAgICAgICAgICBkaWxhdGU6IDEsXG4gICAgICAgICAgICBkdXJhdGlvbjogMzAwLFxuICAgICAgICAgICAgbG9vcDogZmFsc2UsXG4gICAgICAgICAgICB5b3lvOiBmYWxzZSxcbiAgICAgICAgICAgIGZsaXA6IGZhbHNlLFxuICAgICAgICAgICAgcGxheURpcmVjdGlvbjogMSxcbiAgICAgICAgICAgIGVuZGVkOiBmYWxzZSxcbiAgICAgICAgICAgIGVsYXBzZWQ6IDBcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBnZXREZWZhdWx0VmFsdWUoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAuLi5zdXBlci5nZXREZWZhdWx0VmFsdWUoKSxcbiAgICAgICAgICAgIGRlbGF5OiAwLFxuICAgICAgICAgICAgZHVyYXRpb246IDMwMCxcbiAgICAgICAgICAgIGVhc2U6IGVhc2luZy5lYXNlT3V0LFxuICAgICAgICAgICAgZWxhcHNlZDogMCxcbiAgICAgICAgICAgIHN0YWdnZXI6IDAsXG4gICAgICAgICAgICBzdGVwczogMCxcbiAgICAgICAgICAgIGZyb206IDAsXG4gICAgICAgICAgICB0bzogMCxcbiAgICAgICAgICAgIHJvdW5kOiBmYWxzZVxuICAgICAgICB9O1xuICAgIH1cblxuICAgIGdldERlZmF1bHRWYWx1ZVByb3AoKSB7XG4gICAgICAgIHJldHVybiAndG8nO1xuICAgIH1cbn1cbiJdfQ==

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	exports.__esModule = true;
	
	var _Action2 = __webpack_require__(33);
	
	var _Action3 = _interopRequireDefault(_Action2);
	
	var _calc = __webpack_require__(18);
	
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
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	exports.__esModule = true;
	
	var _Action2 = __webpack_require__(33);
	
	var _Action3 = _interopRequireDefault(_Action2);
	
	var _Pointer = __webpack_require__(35);
	
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
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _loop = __webpack_require__(34);
	
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
/* 10 */
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
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	exports.__esModule = true;
	exports.default = timeline;
	
	var _Tween = __webpack_require__(5);
	
	var _Tween2 = _interopRequireDefault(_Tween);
	
	var _presetEasing = __webpack_require__(19);
	
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
	//# sourceMappingURL=data:application/json;base64,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O0FBQ0osYUFBQyxFQUFFLENBQUM7U0FDUDtBQUNELGdCQUFRLEVBQUUsUUFBUTtBQUNsQixzQkFBYyxFQUFFLFFBQVEsQ0FBQyxNQUFNO0FBQy9CLGdCQUFRLEVBQUUsU0FBUztPQUNyQixDQUFDO0NBQ04iLCJmaWxlIjoidGltZWxpbmUuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL01hdHRQZXJyeS9TaXRlcy9wb3Btb3Rpb24iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgVHdlZW4gZnJvbSAnLi4vYWN0aW9ucy9Ud2Vlbic7XG5pbXBvcnQgZWFzaW5nIGZyb20gJy4uL2FjdGlvbnMvZWFzaW5nL3ByZXNldC1lYXNpbmcnO1xuaW1wb3J0IHsgcmVsYXRpdmVWYWx1ZSB9IGZyb20gJy4vY2FsYyc7XG5cbi8qXG4gICAgQHBhcmFtIFthcnJheV1cbiAgICAgICAgU2VxdWVudGlhbCBhcnJheSBvZiB0d2VlbnMsIGVhY2ggaXRlbSBjYW4gYmUgYSB0d2VlbiBvciBkZWZpbml0aW9uIG9iajpcblxuICAgICAgICBbXG4gICAgICAgICAgICBuZXcgVHdlZW4oKSxcbiAgICAgICAgICAgIHN0YWdnZXIoKSxcbiAgICAgICAgICAgIHRpbWVsaW5lKCksXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdHdlZW46IG5ldyBUd2VlbigpLFxuICAgICAgICAgICAgICAgIGF0OiAxMDAsXG4gICAgICAgICAgICAgICAgb2Zmc2V0OiBcIis9MTAwXCJcbiAgICAgICAgICAgIH1cbiAgICAgICAgXVxuKi9cbmNvbnN0IGFuYWx5emUgPSAoZGVmcykgPT4ge1xuICAgIGNvbnN0IHRpbWVsaW5lID0gW107XG4gICAgY29uc3QgbnVtRGVmcyA9IGRlZnMubGVuZ3RoO1xuICAgIGxldCBjdXJyZW50UGxheWhlYWQgPSAwO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBudW1EZWZzOyBpKyspIHtcbiAgICAgICAgY29uc3QgZGVmID0gZGVmc1tpXTtcbiAgICAgICAgY29uc3QgZGVmSXNPYmogPSBkZWYudHdlZW4gPyB0cnVlIDogZmFsc2U7XG4gICAgICAgIGNvbnN0IHR3ZWVuID0gKGRlZklzT2JqKSA/IGRlZi50d2VlbiA6IGRlZjtcblxuICAgICAgICBjdXJyZW50UGxheWhlYWQgKz0gKChkZWZJc09iaiAmJiBkZWYub2Zmc2V0KSA/XG4gICAgICAgICAgICBkZWYuYXQgfHwgcmVsYXRpdmVWYWx1ZShjdXJyZW50UGxheWhlYWQsIGRlZi5vZmZzZXQpIDogMCk7XG5cbiAgICAgICAgbGV0IGR1cmF0aW9uID0gMDtcbiAgICAgICAgZm9yIChsZXQga2V5IGluIHR3ZWVuLnZhbHVlcykge1xuICAgICAgICAgICAgaWYgKHR3ZWVuLnZhbHVlcy5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgdmFsdWUgPSB0d2Vlbi52YWx1ZXNba2V5XTtcbiAgICAgICAgICAgICAgICBkdXJhdGlvbiA9IE1hdGgubWF4KGR1cmF0aW9uLCB2YWx1ZS5kdXJhdGlvbik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB0aW1lbGluZS5wdXNoKHtcbiAgICAgICAgICAgIGZyb206IGN1cnJlbnRQbGF5aGVhZCxcbiAgICAgICAgICAgIGR1cmF0aW9uOiBkdXJhdGlvbixcbiAgICAgICAgICAgIGZpcmU6ICh0aW1lKSA9PiB0d2Vlbi5zZWVrVGltZSh0aW1lKVxuICAgICAgICB9KTtcblxuICAgICAgICBjdXJyZW50UGxheWhlYWQgKz0gdHdlZW4uZHVyYXRpb247XG4gICAgfVxuXG4gICAgcmV0dXJuIHsgdG90YWxUaW1lOiBjdXJyZW50UGxheWhlYWQsIHRpbWVsaW5lIH07XG59O1xuXG5jb25zdCBzZXRUd2VlbnMgPSAoeyBlbGFwc2VkLCB0aW1lbGluZSwgdGltZWxpbmVMZW5ndGggfSkgPT4ge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGltZWxpbmVMZW5ndGg7IGkrKykge1xuICAgICAgICBjb25zdCB0d2VlbiA9IHRpbWVsaW5lW2ldO1xuICAgICAgICBjb25zdCB0d2VlblRpbWUgPSBlbGFwc2VkIC0gdHdlZW4uZnJvbTtcblxuICAgICAgICBpZiAodHdlZW5UaW1lID4gMCAmJiB0d2VlblRpbWUgPCB0d2Vlbi5kdXJhdGlvbikge1xuICAgICAgICAgICAgdHdlZW4uZmlyZSh0d2VlblRpbWUpO1xuICAgICAgICB9XG4gICAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdGltZWxpbmUoZGVmLCBwcm9wcyA9IHt9KSB7XG4gICAgY29uc3QgeyB0b3RhbFRpbWUsIHRpbWVsaW5lIH0gPSBhbmFseXplKGRlZik7XG5cbiAgICByZXR1cm4gbmV3IFR3ZWVuKHtcbiAgICAgICAgLi4ucHJvcHMsXG4gICAgICAgIGR1cmF0aW9uOiB0b3RhbFRpbWUsXG4gICAgICAgIGVhc2U6IGVhc2luZy5saW5lYXIsXG4gICAgICAgIHZhbHVlczoge1xuICAgICAgICAgICAgcDogMVxuICAgICAgICB9LFxuICAgICAgICB0aW1lbGluZTogdGltZWxpbmUsXG4gICAgICAgIHRpbWVsaW5lTGVuZ3RoOiB0aW1lbGluZS5sZW5ndGgsXG4gICAgICAgIG9uUmVuZGVyOiBzZXRUd2VlbnNcbiAgICB9KTtcbn0iXX0=

/***/ },
/* 12 */,
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
	})();
	
	exports.default = function (props) {
	    return new Adapter(props);
	};
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hZGFwdGVyL2FkYXB0ZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQVlNLE9BQU87QUFDVCxhQURFLE9BQU8sQ0FDRyxLQUFLLEVBQUU7OEJBRGpCLE9BQU87O0FBRUwsWUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUMsT0FBTyxDQUFDO0FBQzdCLFlBQUksQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDOztBQUVoQixZQUFJLEtBQUssQ0FBQyxNQUFNLEVBQUU7QUFDZCxnQkFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDO1NBQzlCOztBQUVELFlBQUksS0FBSyxDQUFDLE1BQU0sRUFBRTtBQUNkLGdCQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUM7U0FDOUI7O0FBRUQsWUFBSSxLQUFLLENBQUMsUUFBUSxFQUFFO0FBQ2hCLGdCQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQyxRQUFRLENBQUM7U0FDbEM7O0FBRUQsWUFBSSxLQUFLLENBQUMsWUFBWSxFQUFFO0FBQ3BCLGdCQUFJLENBQUMsWUFBWSxHQUFHLEtBQUssQ0FBQyxZQUFZLENBQUM7U0FDMUM7S0FDSjs7Ozs7OztBQUFBO0FBcEJDLFdBQU8sV0E0QlQsR0FBRyxnQkFBQyxHQUFHLEVBQUUsT0FBTyxFQUFFO0FBQ2QsWUFBTSxTQUFTLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsQ0FBQzs7QUFFeEMsWUFBSSxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLGNBQWMsQ0FBQyxHQUFHLENBQUMsRUFBRTtBQUM1QyxtQkFBTyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUM7U0FDbkQsTUFBTTtBQUNILG1CQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7U0FDMUI7S0FDSjs7Ozs7OztBQXBDQyxXQUFPLFdBMkNULEdBQUcsZ0JBQUMsS0FBSyxFQUFFO0FBQ1AsWUFBTSxlQUFlLEdBQUcsRUFBRTs7O0FBQUMsQUFHM0IsYUFBSyxJQUFJLEdBQUcsSUFBSSxLQUFLLEVBQUU7QUFDbkIsZ0JBQUksS0FBSyxDQUFDLGNBQWMsQ0FBQyxHQUFHLENBQUMsRUFBRTtBQUMzQixvQkFBTSxTQUFTLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsQ0FBQztBQUN4QyxvQkFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsR0FBRyxlQUFlLENBQUMsU0FBUyxDQUFDLEdBQUcsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO2FBQzdEO1NBQ0o7O0FBRUQsZUFBTyxJQUFJLENBQUMsTUFBTSxDQUFDLGVBQWUsQ0FBQyxDQUFDO0tBQ3ZDOzs7Ozs7QUF2REMsV0FBTyxXQTREVCxNQUFNLG1CQUFDLEdBQUcsRUFBRTtBQUNSLGVBQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQztLQUM1Qjs7Ozs7O0FBOURDLFdBQU8sV0FtRVQsTUFBTSxtQkFBQyxLQUFLLEVBQUU7QUFDVixhQUFLLElBQUksR0FBRyxJQUFJLEtBQUssRUFBRTtBQUNuQixnQkFBSSxLQUFLLENBQUMsY0FBYyxDQUFDLEdBQUcsQ0FBQyxFQUFFO0FBQzNCLG9CQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQzthQUNsQztTQUNKO0tBQ0o7Ozs7Ozs7O0FBekVDLFdBQU8sV0FpRlQsV0FBVyx3QkFBQyxHQUFHLEVBQUU7QUFDYixlQUFPLEFBQUMsSUFBSSxDQUFDLFFBQVEsR0FBSSxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxJQUFJLEdBQUcsR0FBRyxHQUFHLENBQUM7S0FDNUQ7Ozs7Ozs7O0FBbkZDLFdBQU8sV0EyRlQsWUFBWSx5QkFBQyxHQUFHLEVBQUU7QUFDZCxlQUFPLEFBQUMsSUFBSSxDQUFDLFlBQVksR0FBSSxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUM7S0FDakY7O1dBN0ZDLE9BQU87OztrQkFnR0UsVUFBQyxLQUFLO1dBQUssSUFBSSxPQUFPLENBQUMsS0FBSyxDQUFDO0NBQUEiLCJmaWxlIjoiYWRhcHRlci5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvTWF0dFBlcnJ5L1NpdGVzL3BvcG1vdGlvbiIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gICAgIyBBZGFwdGVyIGNsYXNzXG4gICAgIyMgUHJvdmlkZXMgYSBnZXR0ZXIvc2V0dGVyIHdyYXBwZXIgYW5kIHByb3BlcnR5IGNhY2hlIGZvciBkaWZmZXJlbnQgZWxlbWVudCB0eXBlc1xuXG4gICAgT3ZlcnJpZGUgYGdldHRlcmAgYW5kIGBzZXR0ZXJgIHRvIHJlaW1wbGVtZW50IHRoZSBpbnRlcmZhY2UgZm9yIG5ldyBlbGVtZW50IHR5cGVzLlxuXG4gICAgU2V0IGBFeHRlbmRlZC5wcm90b3R5cGUuc3RhdGVNYXBgIGFzIGFuIG9iamVjdCBrZXkvdmFsdWUgbWFwIHRvIHRyYW5zbGF0ZSBpbmNvbWluZyBrZXlzIHRvXG4gICAgQVBJLXNwZWNpZmljIGtleXMuIEZvciBpbnN0YW5jZSwgeyB4OiAndHJhbnNsYXRlWCcgfS4gXG5cbiAgICBTZXQgYEV4dGVuZGVkLnByb3RvdHlwZS52YWx1ZVR5cGVNYXBgIGFzIGFuIG9iamVjdCBrZXkvdmFsdWUgbWFwIHRvIHJldHVybiBhIHZhbHVlIHR5cGUgd2l0aFxuICAgIGBnZXRWYWx1ZVR5cGUoa2V5KWAgKGtleSB3aWxsIGJlIG1hcHBlZCBhY2NvcmRpbmcgdG8gYHN0YXRlTWFwYClcbiovXG5jbGFzcyBBZGFwdGVyIHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICB0aGlzLmVsZW1lbnQgPSBwcm9wcy5lbGVtZW50O1xuICAgICAgICB0aGlzLmNhY2hlID0ge307XG5cbiAgICAgICAgaWYgKHByb3BzLmdldHRlcikge1xuICAgICAgICAgICAgdGhpcy5nZXR0ZXIgPSBwcm9wcy5nZXR0ZXI7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAocHJvcHMuc2V0dGVyKSB7XG4gICAgICAgICAgICB0aGlzLnNldHRlciA9IHByb3BzLnNldHRlcjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChwcm9wcy5zdGF0ZU1hcCkge1xuICAgICAgICAgICAgdGhpcy5zdGF0ZU1hcCA9IHByb3BzLnN0YXRlTWFwO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHByb3BzLnZhbHVlVHlwZU1hcCkge1xuICAgICAgICAgICAgdGhpcy52YWx1ZVR5cGVNYXAgPSBwcm9wcy52YWx1ZVR5cGVNYXA7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKlxuICAgICAgICBHZXQgZWxlbWVudCBwcm9wZXJ0eVxuXG4gICAgICAgIEBwYXJhbSBbc3RyaW5nXTogS2V5IHRvIHJlYWRcbiAgICAgICAgQHBhcmFtIFtib29sZWFuXTogSWYgYHRydWVgLCB3aWxsIG92ZXJyaWRlIGNhY2hlZCBwcm9wZXJ0eVxuICAgICovXG4gICAgZ2V0KGtleSwgcmVmcmVzaCkge1xuICAgICAgICBjb25zdCBtYXBwZWRLZXkgPSB0aGlzLm1hcFN0YXRlS2V5KGtleSk7XG5cbiAgICAgICAgaWYgKHJlZnJlc2ggfHwgIXRoaXMuY2FjaGUuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY2FjaGVba2V5XSA9IHRoaXMuZ2V0dGVyKG1hcHBlZEtleSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jYWNoZVtrZXldO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLypcbiAgICAgICAgU2V0IGVsZW1lbnQgcHJvcGVydGllc1xuXG4gICAgICAgIEBwYXJhbSBbb2JqZWN0XTogS2V5L3ZhbHVlIHByb3BlcnRpZXMgdG8gc2V0XG4gICAgKi9cbiAgICBzZXQocHJvcHMpIHtcbiAgICAgICAgY29uc3QgdHJhbnNsYXRlZFByb3BzID0ge307XG5cbiAgICAgICAgLy8gVHJhbnNsYXRlIHByb3BzXG4gICAgICAgIGZvciAobGV0IGtleSBpbiBwcm9wcykge1xuICAgICAgICAgICAgaWYgKHByb3BzLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBtYXBwZWRLZXkgPSB0aGlzLm1hcFN0YXRlS2V5KGtleSk7XG4gICAgICAgICAgICAgICAgdGhpcy5jYWNoZVtrZXldID0gdHJhbnNsYXRlZFByb3BzW21hcHBlZEtleV0gPSBwcm9wc1trZXldO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuc2V0dGVyKHRyYW5zbGF0ZWRQcm9wcyk7XG4gICAgfVxuXG4gICAgLypcbiAgICAgICAgT3ZlcnJpZGFibGUgZWxlbWVudCBnZXR0ZXIgLSBkZWZhdWx0IGZvciBwbGFpbiBvYmplY3QgXG4gICAgKi9cbiAgICBnZXR0ZXIoa2V5KSB7XG4gICAgICAgIHJldHVybiB0aGlzLmVsZW1lbnRba2V5XTtcbiAgICB9XG5cbiAgICAvKlxuICAgICAgICBPdmVycmlkYWJsZSBlbGVtZW50IHNldHRlciAtIGRlZmF1bHQgZm9yIHBsYWluIG9iamVjdFxuICAgICovXG4gICAgc2V0dGVyKHByb3BzKSB7XG4gICAgICAgIGZvciAobGV0IGtleSBpbiBwcm9wcykge1xuICAgICAgICAgICAgaWYgKHByb3BzLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmVsZW1lbnRba2V5XSA9IHByb3BzW2tleV07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKlxuICAgICAgICBNYXAgc3RhdGUga2V5IGFzIHBlciBgc3RhdGVNYXBgLCBpZiBwcmVzZW50XG5cbiAgICAgICAgQHBhcmFtIFtzdHJpbmddOiBLZXkgdG8gbWFwXG4gICAgICAgIEByZXR1cm4gW3N0cmluZ106IE1hcHBlZCBrZXksIG9yIG9yaWdpbmFsIGtleSBpZiBub25lIGZvdW5kXG4gICAgKi9cbiAgICBtYXBTdGF0ZUtleShrZXkpIHtcbiAgICAgICAgcmV0dXJuICh0aGlzLnN0YXRlTWFwKSA/IHRoaXMuc3RhdGVNYXBba2V5XSB8fCBrZXkgOiBrZXk7XG4gICAgfVxuXG4gICAgLypcbiAgICAgICAgR2V0IHZhbHVlVHlwZSBvZiBwcm92aWRlZCBrZXlcblxuICAgICAgICBAcGFyYW0gW3N0cmluZ106IE5hbWUgb2YgcHJvcGVydHkgdG8gbWFwXG4gICAgICAgIEByZXR1cm4gW3ZhbHVlVHlwZV06IFZhbHVlIHR5cGUgb2YgcHJvcGVydHlcbiAgICAqL1xuICAgIGdldFZhbHVlVHlwZShrZXkpIHtcbiAgICAgICAgcmV0dXJuICh0aGlzLnZhbHVlVHlwZU1hcCkgPyB0aGlzLnZhbHVlVHlwZU1hcFt0aGlzLm1hcFN0YXRlS2V5KGtleSldIDogZmFsc2U7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCAocHJvcHMpID0+IG5ldyBBZGFwdGVyKHByb3BzKTsiXX0=

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
	    return (0, _adapter2.default)({ element: element, getter: getter, setter: setter });
	};
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hZGFwdGVyL2F0dHItYWRhcHRlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7UUFFZ0IsTUFBTSxHQUFOLE1BQU07UUFJTixNQUFNLEdBQU4sTUFBTTs7Ozs7Ozs7QUFKZixTQUFTLE1BQU0sQ0FBQyxHQUFHLEVBQUU7QUFDeEIsV0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUMsQ0FBQztDQUN6Qzs7QUFFTSxTQUFTLE1BQU0sQ0FBQyxLQUFLLEVBQUU7QUFDMUIsU0FBSyxJQUFJLEdBQUcsSUFBSSxLQUFLLEVBQUU7QUFDbkIsWUFBSSxLQUFLLENBQUMsY0FBYyxDQUFDLEdBQUcsQ0FBQyxFQUFFO0FBQzNCLGdCQUFJLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxHQUFHLEVBQUUsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7U0FDOUM7S0FDSjtDQUNKOztrQkFFYyxVQUFDLE9BQU87V0FBSyx1QkFBYyxFQUFFLE9BQU8sRUFBUCxPQUFPLEVBQUUsTUFBTSxFQUFOLE1BQU0sRUFBRSxNQUFNLEVBQU4sTUFBTSxFQUFFLENBQUM7Q0FBQSIsImZpbGUiOiJhdHRyLWFkYXB0ZXIuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL01hdHRQZXJyeS9TaXRlcy9wb3Btb3Rpb24iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY3JlYXRlQWRhcHRlciBmcm9tICcuL2FkYXB0ZXInO1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0dGVyKGtleSkge1xuICAgIHJldHVybiB0aGlzLmVsZW1lbnQuZ2V0QXR0cmlidXRlKGtleSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzZXR0ZXIocHJvcHMpIHtcbiAgICBmb3IgKGxldCBrZXkgaW4gcHJvcHMpIHtcbiAgICAgICAgaWYgKHByb3BzLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudC5zZXRBdHRyaWJ1dGUoa2V5LCBwcm9wc1trZXldKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgKGVsZW1lbnQpID0+IGNyZWF0ZUFkYXB0ZXIoeyBlbGVtZW50LCBnZXR0ZXIsIHNldHRlciB9KTsiXX0=

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _stateMap = __webpack_require__(37);
	
	var _stateMap2 = _interopRequireDefault(_stateMap);
	
	var _valueTypeMap = __webpack_require__(36);
	
	var _valueTypeMap2 = _interopRequireDefault(_valueTypeMap);
	
	var _build = __webpack_require__(39);
	
	var _build2 = _interopRequireDefault(_build);
	
	var _prefixer = __webpack_require__(38);
	
	var _prefixer2 = _interopRequireDefault(_prefixer);
	
	var _transformProps = __webpack_require__(40);
	
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
	    return (0, _adapter2.default)({ element: element, stateMap: _stateMap2.default, valueTypeMap: _valueTypeMap2.default, getter: getter, setter: setter });
	};
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hZGFwdGVyL2Nzcy1hZGFwdGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU9BLFNBQVMsTUFBTSxDQUFFLEdBQUcsRUFBRTtBQUNsQixXQUFPLEFBQUMsQ0FBQyx5QkFBZSxHQUFHLENBQUMsR0FDeEIsTUFBTSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLENBQUMsd0JBQVMsR0FBRyxDQUFDLENBQUMsR0FDMUQsdUJBQWEsR0FBRyxDQUFDLENBQUMsWUFBWSxDQUFDLE9BQU8sSUFBSSxDQUFDLENBQUM7Q0FDbkQ7O0FBRUQsU0FBUyxNQUFNLENBQUMsS0FBSyxFQUFFO0FBQ25CLFFBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLE9BQU8sSUFBSSxxQkFBb0IsS0FBSyxDQUFDLENBQUM7Q0FDNUQ7O2tCQUVjLFVBQUMsT0FBTztXQUFLLHVCQUFjLEVBQUUsT0FBTyxFQUFQLE9BQU8sRUFBRSxRQUFRLG9CQUFBLEVBQUUsWUFBWSx3QkFBQSxFQUFFLE1BQU0sRUFBTixNQUFNLEVBQUUsTUFBTSxFQUFOLE1BQU0sRUFBRSxDQUFDO0NBQUEiLCJmaWxlIjoiY3NzLWFkYXB0ZXIuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL01hdHRQZXJyeS9TaXRlcy9wb3Btb3Rpb24iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3RhdGVNYXAgZnJvbSAnLi9jc3Mvc3RhdGUtbWFwJztcbmltcG9ydCB2YWx1ZVR5cGVNYXAgZnJvbSAnLi9jc3MvdmFsdWUtdHlwZS1tYXAnO1xuaW1wb3J0IGJ1aWxkUHJvcGVydHlTdHJpbmcgZnJvbSAnLi9jc3MvYnVpbGQnO1xuaW1wb3J0IHByZWZpeGVyIGZyb20gJy4vY3NzL3ByZWZpeGVyJztcbmltcG9ydCB0cmFuc2Zvcm1Qcm9wcyBmcm9tICcuL2Nzcy90cmFuc2Zvcm0tcHJvcHMnO1xuaW1wb3J0IGNyZWF0ZUFkYXB0ZXIgZnJvbSAnLi9hZGFwdGVyJztcblxuZnVuY3Rpb24gZ2V0dGVyIChrZXkpIHtcbiAgICByZXR1cm4gKCF0cmFuc2Zvcm1Qcm9wc1trZXldKSA/XG4gICAgICAgIHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKHRoaXMuZWxlbWVudCwgbnVsbClbcHJlZml4ZXIoa2V5KV0gOlxuICAgICAgICB2YWx1ZVR5cGVNYXBba2V5XS5kZWZhdWx0UHJvcHMuY3VycmVudCB8fCAwO1xufVxuXG5mdW5jdGlvbiBzZXR0ZXIocHJvcHMpIHtcbiAgICB0aGlzLmVsZW1lbnQuc3R5bGUuY3NzVGV4dCArPSBidWlsZFByb3BlcnR5U3RyaW5nKHByb3BzKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgKGVsZW1lbnQpID0+IGNyZWF0ZUFkYXB0ZXIoeyBlbGVtZW50LCBzdGF0ZU1hcCwgdmFsdWVUeXBlTWFwLCBnZXR0ZXIsIHNldHRlciB9KTsiXX0=

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports.setter = setter;
	
	var _stateMap = __webpack_require__(37);
	
	var _stateMap2 = _interopRequireDefault(_stateMap);
	
	var _valueTypeMap = __webpack_require__(42);
	
	var _valueTypeMap2 = _interopRequireDefault(_valueTypeMap);
	
	var _build = __webpack_require__(41);
	
	var _build2 = _interopRequireDefault(_build);
	
	var _attrAdapter = __webpack_require__(14);
	
	var _adapter = __webpack_require__(13);
	
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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hZGFwdGVyL3N2Zy1hZGFwdGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztRQU1nQixNQUFNLEdBQU4sTUFBTTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFmLFNBQVMsTUFBTSxDQUFDLEtBQUssRUFBRTtBQUMxQixxQkFKYSxNQUFNLEVBSVIscUJBQU0sS0FBSyxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO0NBQ3pDOztrQkFFYyxVQUFDLE9BQU8sRUFBSztBQUN4QixRQUFNLE9BQU8sR0FBRyx1QkFBYyxFQUFFLE9BQU8sRUFBUCxPQUFPLEVBQUUsUUFBUSxvQkFBQSxFQUFFLFlBQVksd0JBQUEsRUFBRSxNQUFNLGVBUmxFLE1BQU0sQUFRNEQsRUFBRSxNQUFNLEVBQU4sTUFBTSxFQUFFLENBQUMsQ0FBQztBQUNuRixRQUFNLElBQUksR0FBRyxPQUFPLENBQUMsT0FBTyxFQUFFLENBQUM7QUFDL0IsUUFBTSxnQkFBZ0IsR0FBRyxDQUFDLENBQUM7QUFDM0IsUUFBTSxnQkFBZ0IsR0FBRyxDQUFDLENBQUM7O0FBRTNCLFdBQU8sQ0FBQyxNQUFNLEdBQUc7QUFDYixTQUFDLEVBQUUsSUFBSSxDQUFDLEtBQUssSUFBSSxnQkFBZ0IsR0FBRyxHQUFHLENBQUEsQUFBQyxHQUFHLElBQUksQ0FBQyxDQUFDO0FBQ2pELFNBQUMsRUFBRSxJQUFJLENBQUMsTUFBTSxJQUFJLGdCQUFnQixHQUFHLEdBQUcsQ0FBQSxBQUFDLEdBQUcsSUFBSSxDQUFDLENBQUM7S0FDckQsQ0FBQzs7QUFFRixXQUFPLE9BQU8sQ0FBQztDQUNsQiIsImZpbGUiOiJzdmctYWRhcHRlci5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvTWF0dFBlcnJ5L1NpdGVzL3BvcG1vdGlvbiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdGF0ZU1hcCBmcm9tICcuL2Nzcy9zdGF0ZS1tYXAnO1xuaW1wb3J0IHZhbHVlVHlwZU1hcCBmcm9tICcuL3N2Zy92YWx1ZS10eXBlLW1hcCc7XG5pbXBvcnQgYnVpbGQgZnJvbSAnLi9zdmcvYnVpbGQnO1xuaW1wb3J0IHsgZ2V0dGVyLCBzZXR0ZXIgYXMgYXR0clNldHRlciB9IGZyb20gJy4vYXR0ci1hZGFwdGVyJztcbmltcG9ydCBjcmVhdGVBZGFwdGVyIGZyb20gJy4vYWRhcHRlcic7XG5cbmV4cG9ydCBmdW5jdGlvbiBzZXR0ZXIocHJvcHMpIHtcbiAgICBhdHRyU2V0dGVyKGJ1aWxkKHByb3BzLCB0aGlzLm9yaWdpbikpO1xufVxuXG5leHBvcnQgZGVmYXVsdCAoZWxlbWVudCkgPT4ge1xuICAgIGNvbnN0IGFkYXB0ZXIgPSBjcmVhdGVBZGFwdGVyKHsgZWxlbWVudCwgc3RhdGVNYXAsIHZhbHVlVHlwZU1hcCwgZ2V0dGVyLCBzZXR0ZXIgfSk7XG4gICAgY29uc3QgYkJveCA9IGVsZW1lbnQuZ2V0QkJveCgpO1xuICAgIGNvbnN0IHRyYW5zZm9ybU9yaWdpblkgPSAwO1xuICAgIGNvbnN0IHRyYW5zZm9ybU9yaWdpblggPSAwO1xuXG4gICAgYWRhcHRlci5vcmlnaW4gPSB7XG4gICAgICAgIHg6IGJCb3gud2lkdGggKiAodHJhbnNmb3JtT3JpZ2luWCAvIDEwMCkgKyBiQm94LngsXG4gICAgICAgIHk6IGJCb3guaGVpZ2h0ICogKHRyYW5zZm9ybU9yaWdpblkgLyAxMDApICsgYkJveC55XG4gICAgfTtcblxuICAgIHJldHVybiBhZGFwdGVyO1xufTtcblxuIl19

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _build = __webpack_require__(44);
	
	var _build2 = _interopRequireDefault(_build);
	
	var _stateMap = __webpack_require__(43);
	
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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hZGFwdGVyL3N2Zy1wYXRoLWFkYXB0ZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSUEsU0FBUyxNQUFNLENBQUMsS0FBSyxFQUFFO0FBQ25CLFFBQUksQ0FBQyxTQUFTLENBQUMscUJBQU0sS0FBSyxFQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDO0NBQ2pEOztrQkFFYyxVQUFDLE9BQU8sRUFBSztBQUN4QixRQUFNLE9BQU8sR0FBRywwQkFBVyxPQUFPLENBQUMsQ0FBQzs7QUFFcEMsV0FBTyxDQUFDLFFBQVEscUJBQVcsQ0FBQztBQUM1QixXQUFPLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztBQUN4QixXQUFPLENBQUMsU0FBUyxlQVhBLE1BQU0sQUFXTSxDQUFDOztBQUU5QixXQUFPLENBQUMsVUFBVSxHQUFHLE9BQU8sQ0FBQyxjQUFjLEVBQUUsQ0FBQzs7QUFFOUMsV0FBTyxPQUFPLENBQUM7Q0FDbEIiLCJmaWxlIjoic3ZnLXBhdGgtYWRhcHRlci5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvTWF0dFBlcnJ5L1NpdGVzL3BvcG1vdGlvbiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBidWlsZCBmcm9tICcuL3N2Zy1wYXRoL2J1aWxkJztcbmltcG9ydCBzdGF0ZU1hcCBmcm9tICcuL3N2Zy1wYXRoL3N0YXRlLW1hcCc7XG5pbXBvcnQgc3ZnQWRhcHRlciwgeyBzZXR0ZXIgYXMgc3ZnU2V0dGVyIH0gZnJvbSAnLi9zdmctYWRhcHRlcic7XG5cbmZ1bmN0aW9uIHNldHRlcihwcm9wcykge1xuICAgIHRoaXMuc3ZnU2V0dGVyKGJ1aWxkKHByb3BzLCB0aGlzLnBhdGhMZW5ndGgpKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgKGVsZW1lbnQpID0+IHtcbiAgICBjb25zdCBhZGFwdGVyID0gc3ZnQWRhcHRlcihlbGVtZW50KTtcblxuICAgIGFkYXB0ZXIuc3RhdGVNYXAgPSBzdGF0ZU1hcDtcbiAgICBhZGFwdGVyLnNldHRlciA9IHNldHRlcjtcbiAgICBhZGFwdGVyLnN2Z1NldHRlciA9IHN2Z1NldHRlcjtcblxuICAgIGFkYXB0ZXIucGF0aExlbmd0aCA9IGVsZW1lbnQuZ2V0VG90YWxMZW5ndGgoKTtcblxuICAgIHJldHVybiBhZGFwdGVyO1xufTtcbiJdfQ==

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
	//# sourceMappingURL=data:application/json;base64,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eURBQUcsQ0FBQztXQUFLLFdBcE9uRSxTQUFTLEVBb09vRSxRQUFRLEdBQUksUUFBUSxJQUFJLFFBQVEsR0FBRyxRQUFRLENBQUEsQUFBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsU0FBUyxFQUFFLFFBQVEsQ0FBQyxBQUFDLENBQUM7Q0FBQTs7Ozs7Ozs7QUFBQyxBQVF6SixJQUFNLGFBQWEsV0FBYixhQUFhLEdBQUcsVUFBQyxHQUFHLEVBQUUsYUFBYTtXQUFLLEFBQUMsV0E5T2xELEtBQUssRUE4T21ELEdBQUcsQ0FBQyxHQUFJLEdBQUcsSUFBSSxJQUFJLEdBQUcsYUFBYSxDQUFBLEFBQUMsR0FBRyxDQUFDO0NBQUE7Ozs7Ozs7O0FBQUMsQUFROUYsSUFBTSxjQUFjLFdBQWQsY0FBYyxHQUFHLFVBQUMsUUFBUSxFQUFFLGFBQWE7V0FBSyxRQUFRLElBQUksSUFBSSxHQUFHLGFBQWEsQ0FBQSxBQUFDO0NBQUE7Ozs7Ozs7OztBQUFDLEFBU3RGLElBQU0sWUFBWSxXQUFaLFlBQVksR0FBRyxVQUFDLFFBQVEsRUFBRSxLQUFLLEVBQUs7QUFDN0MsUUFBTSxPQUFPLEdBQUcsQ0FBQyxJQUFJLEtBQUssR0FBRyxDQUFDLENBQUEsQUFBQyxDQUFDO0FBQ2hDLFFBQU0sTUFBTSxHQUFHLENBQUMsR0FBSSxDQUFDLEdBQUcsS0FBSyxBQUFDLENBQUM7QUFDL0IsUUFBTSxnQkFBZ0IsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsR0FBRyxNQUFNLEVBQUUsQ0FBQyxDQUFDLENBQUM7O0FBRXhELFdBQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxnQkFBZ0IsR0FBRyxPQUFPLENBQUMsR0FBRyxPQUFPLENBQUM7Q0FDM0QsQ0FBQyIsImZpbGUiOiJjYWxjLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9NYXR0UGVycnkvU2l0ZXMvcG9wbW90aW9uIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgICBoYXNQcm9wZXJ0eSxcbiAgICBpc051bSxcbiAgICBzcGxpdFZhbHVlVW5pdCxcbiAgICB0b0RlY2ltYWxcbn0gZnJvbSAnLi91dGlscyc7XG5cbmNvbnN0IFpFUk9fUE9JTlQgPSB7XG4gICAgeDogMCxcbiAgICB5OiAwLFxuICAgIHo6IDBcbn07XG5cbmNvbnN0IGRpc3RhbmNlMUQgPSAoYSwgYikgPT4gTWF0aC5hYnMoYSAtIGIpO1xuXG4vKlxuICAgIEFuZ2xlIGJldHdlZW4gcG9pbnRzXG4gICAgXG4gICAgVHJhbnNsYXRlcyB0aGUgaHlwb3RoZXRpY2FsIGxpbmUgc28gdGhhdCB0aGUgJ2Zyb20nIGNvb3JkaW5hdGVzXG4gICAgYXJlIGF0IDAsMCwgdGhlbiByZXR1cm4gdGhlIGFuZ2xlIHVzaW5nIC5hbmdsZUZyb21DZW50ZXIoKVxuICAgIFxuICAgIEBwYXJhbSBbb2JqZWN0XTogWCBhbmQgWSBjb29yZGluYXRlcyBvZiBmcm9tIHBvaW50XG4gICAgQHBhcmFtIFtvYmplY3RdOiBYIGFuZCBZIGNvcmRpbmF0ZXMgb2YgdG8gcG9pbnRcbiAgICBAcmV0dXJuIFtyYWRpYW5dOiBBbmdsZSBiZXR3ZWVuIHRoZSB0d28gcG9pbnRzIGluIHJhZGlhbnNcbiovXG5leHBvcnQgY29uc3QgYW5nbGUgPSAoYSwgYiA9IFpFUk9fUE9JTlQpID0+IHJhZGlhbnNUb0RlZ3JlZXMoTWF0aC5hdGFuMihhLnggLSBiLngsIGEueSAtIGIueSkpO1xuXG4vKlxuICAgIENvbnZlcnQgZGVncmVlcyB0byByYWRpYW5zXG4gICAgXG4gICAgQHBhcmFtIFtudW1iZXJdOiBWYWx1ZSBpbiBkZWdyZWVzXG4gICAgQHJldHVybiBbbnVtYmVyXTogVmFsdWUgaW4gcmFkaWFuc1xuKi9cbmV4cG9ydCBjb25zdCBkZWdyZWVzVG9SYWRpYW5zID0gKGRlZ3JlZXMpID0+IGRlZ3JlZXMgKiBNYXRoLlBJIC8gMTgwO1xuXG4vKlxuICAgIERpbGF0ZVxuICAgIFxuICAgIENoYW5nZSB0aGUgcHJvZ3Jlc3Npb24gYmV0d2VlbiBhIGFuZCBiIGFjY29yZGluZyB0byBkaWxhdGlvbi5cbiAgICBcbiAgICBTbyBkaWxhdGlvbiA9IDAuNSB3b3VsZCBjaGFuZ2VcbiAgICBcbiAgICBhIC0tLS0tLS0tLSBiXG4gICAgXG4gICAgdG9cbiAgICBcbiAgICBhIC0tLS0gYlxuICAgIFxuICAgIEBwYXJhbSBbbnVtYmVyXTogUHJldmlvdXMgdmFsdWVcbiAgICBAcGFyYW0gW251bWJlcl06IEN1cnJlbnQgdmFsdWVcbiAgICBAcGFyYW0gW251bWJlcl06IERpbGF0ZSBwcm9ncmVzcyBieSB4XG4gICAgQHJldHVybiBbbnVtYmVyXTogUHJldmlvdXMgdmFsdWUgcGx1cyB0aGUgZGlsYXRlZCBkaWZmZXJlbmNlXG4qL1xuZXhwb3J0IGNvbnN0IGRpbGF0ZSA9IChhLCBiLCBkaWxhdGlvbikgPT4gYSArICgoYiAtIGEpICogZGlsYXRpb24pO1xuXG4vKlxuICAgIERpc3RhbmNlXG4gICAgXG4gICAgUmV0dXJucyB0aGUgZGlzdGFuY2UgYmV0d2VlbiB0d28gbiBkaW1lbnNpb25hbCBwb2ludHMuXG4gICAgXG4gICAgQHBhcmFtIFtvYmplY3QvbnVtYmVyXTogeCBhbmQgeSBvciBqdXN0IHggb2YgcG9pbnQgQVxuICAgIEBwYXJhbSBbb2JqZWN0L251bWJlcl06IChvcHRpb25hbCk6IHggYW5kIHkgb3IganVzdCB4IG9mIHBvaW50IEJcbiAgICBAcmV0dXJuIFtudW1iZXJdOiBUaGUgZGlzdGFuY2UgYmV0d2VlbiB0aGUgdHdvIHBvaW50c1xuKi9cbmV4cG9ydCBjb25zdCBkaXN0YW5jZSA9IChhLCBiID0gWkVST19QT0lOVCkgPT4ge1xuICAgIC8vIDFEIGRpbWVuc2lvbnNcbiAgICBpZiAoaXNOdW0oYSkpIHtcbiAgICAgICAgcmV0dXJuIGRpc3RhbmNlMUQoYSwgYik7XG5cbiAgICAvLyBNdWx0aS1kaW1lbnNpb25hbFxuICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IHhEZWx0YSA9IGRpc3RhbmNlMUQoYS54LCBiLngpO1xuICAgICAgICBjb25zdCB5RGVsdGEgPSBkaXN0YW5jZTFEKGEueSwgYi55KTtcbiAgICAgICAgY29uc3QgekRlbHRhID0gKGlzTnVtKGEueikpID8gZGlzdGFuY2UxRChhLnosIGIueikgOiAwO1xuXG4gICAgICAgIHJldHVybiBNYXRoLnNxcnQoKHhEZWx0YSAqKiAyKSArICh5RGVsdGEgKiogMikgKyAoekRlbHRhICoqIDIpKTtcbiAgICB9XG59O1xuIFxuLypcbiAgICBIeXBvdGVudXNlXG4gICAgXG4gICAgUmV0dXJucyB0aGUgaHlwb3RlbnVzZSwgc2lkZSBDLCBnaXZlbiB0aGUgbGVuZ3RocyBvZiBzaWRlcyBBIGFuZCBCLlxuICAgIFxuICAgIEBwYXJhbSBbbnVtYmVyXTogTGVuZ3RoIG9mIEFcbiAgICBAcGFyYW0gW251bWJlcl06IExlbmd0aCBvZiBCXG4gICAgQHJldHVybiBbbnVtYmVyXTogTGVuZ3RoIG9mIENcbiovXG5leHBvcnQgY29uc3QgaHlwb3RlbnVzZSA9IChhLCBiKSA9PiBNYXRoLnNxcnQoKGEgKiBhKSArIChiICogYikpO1xuXG4vKlxuICAgIFZhbHVlIGluIHJhbmdlIGZyb20gcHJvZ3Jlc3NcbiAgICBcbiAgICBHaXZlbiBhIGxvd2VyIGxpbWl0IGFuZCBhbiB1cHBlciBsaW1pdCwgd2UgcmV0dXJuIHRoZSB2YWx1ZSB3aXRoaW5cbiAgICB0aGF0IHJhbmdlIGFzIGV4cHJlc3NlZCBieSBwcm9ncmVzcyAoYSBudW1iZXIgZnJvbSAwLTEpXG4gICAgXG4gICAgQHBhcmFtIFtudW1iZXJdOiBUaGUgcHJvZ3Jlc3MgYmV0d2VlbiBsb3dlciBhbmQgdXBwZXIgbGltaXRzIGV4cHJlc3NlZCAwLTFcbiAgICBAcGFyYW0gW251bWJlcl06IExvd2VyIGxpbWl0IG9mIHJhbmdlXG4gICAgQHBhcmFtIFtudW1iZXJdOiBVcHBlciBsaW1pdCBvZiByYW5nZVxuICAgIEByZXR1cm4gW251bWJlcl06IFZhbHVlIGFzIGNhbGN1bGF0ZWQgZnJvbSBwcm9ncmVzcyB3aXRoaW4gcmFuZ2UgKG5vdCBsaW1pdGVkIHdpdGhpbiByYW5nZSlcbiovXG5leHBvcnQgY29uc3QgZ2V0VmFsdWVGcm9tUHJvZ3Jlc3MgPSAocHJvZ3Jlc3MsIGZyb20sIHRvKSA9PiAoLSBwcm9ncmVzcyAqIGZyb20pICsgKHByb2dyZXNzICogdG8pICsgZnJvbTtcblxuLypcbiAgICBQcm9ncmVzcyB3aXRoaW4gZ2l2ZW4gcmFuZ2VcbiAgICBcbiAgICBHaXZlbiBhIGxvd2VyIGxpbWl0IGFuZCBhbiB1cHBlciBsaW1pdCwgd2UgcmV0dXJuIHRoZSBwcm9ncmVzc1xuICAgIChleHByZXNzZWQgYXMgYSBudW1iZXIgMC0xKSByZXByZXNlbnRlZCBieSB0aGUgZ2l2ZW4gdmFsdWUsIGFuZFxuICAgIGxpbWl0IHRoYXQgcHJvZ3Jlc3MgdG8gd2l0aGluIDAtMS5cbiAgICBcbiAgICBAcGFyYW0gW251bWJlcl06IFZhbHVlIHRvIGZpbmQgcHJvZ3Jlc3Mgd2l0aGluIGdpdmVuIHJhbmdlXG4gICAgQHBhcmFtIFtudW1iZXJdOiBMb3dlciBsaW1pdCBcbiAgICBAcGFyYW0gW251bWJlcl06IFVwcGVyIGxpbWl0XG4gICAgQHJldHVybiBbbnVtYmVyXTogUHJvZ3Jlc3Mgb2YgdmFsdWUgd2l0aGluIHJhbmdlIGFzIGV4cHJlc3NlZCAwLTFcbiovXG5leHBvcnQgY29uc3QgZ2V0UHJvZ3Jlc3NGcm9tVmFsdWUgPSAodmFsdWUsIGZyb20sIHRvKSA9PiAodmFsdWUgLSBmcm9tKSAvICh0byAtIGZyb20pO1xuXG4vKlxuICAgIE9mZnNldCBiZXR3ZWVuIHR3byBvYmplY3RzIG9mIG51bWJlcnNcblxuICAgIElmIHByb3BlcnR5IGlzIGZvdW5kIGluIGIgbm90IHByZXNlbnQgaW4gYSwgaXQgd2lsbCByZXR1cm4gYDBgIGZvciB0aGF0IHByb3AuXG4gICAgXG4gICAgQHBhcmFtIFtQb2ludF06IEZpcnN0IG9iamVjdFxuICAgIEBwYXJhbSBbUG9pbnRdOiBTZWNvbmQgb2JqZWN0XG4gICAgQHJldHVybiBbT2Zmc2V0XTogRGlzdGFuY2UgbWV0cmljcyBiZXR3ZWVuIHR3byBwb2ludHNcbiovXG5leHBvcnQgY29uc3Qgb2Zmc2V0ID0gKGEsIGIpID0+IHtcbiAgICBjb25zdCBvZmZzZXQgPSB7fTtcblxuICAgIGZvciAobGV0IGtleSBpbiBiKSB7XG4gICAgICAgIGlmIChiLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICAgIG9mZnNldFtrZXldID0gaGFzUHJvcGVydHkoYSwga2V5KSA/IGJba2V5XSAtIGFba2V5XSA6IDA7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gb2Zmc2V0O1xufTtcblxuLypcbiAgICBQb2ludCBmcm9tIGFuZ2xlIGFuZCBkaXN0YW5jZVxuICAgIFxuICAgIEBwYXJhbSBbb2JqZWN0XTogMkQgcG9pbnQgb2Ygb3JpZ2luXG4gICAgQHBhcmFtIFtudW1iZXJdOiBBbmdsZSBmcm9tIG9yaWdpblxuICAgIEBwYXJhbSBbbnVtYmVyXTogRGlzdGFuY2UgZnJvbSBvcmlnaW5cbiAgICBAcmV0dXJuIFtvYmplY3RdOiBDYWxjdWxhdGVkIDJEIHBvaW50XG4qL1xuZXhwb3J0IGNvbnN0IHBvaW50RnJvbUFuZ2xlQW5kRGlzdGFuY2UgPSAob3JpZ2luLCBhbmdsZSwgZGlzdGFuY2UpID0+IHtcbiAgICBhbmdsZSA9IGRlZ3JlZXNUb1JhZGlhbnMoYW5nbGUpO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgeDogZGlzdGFuY2UgKiBNYXRoLmNvcyhhbmdsZSkgKyBvcmlnaW4ueCxcbiAgICAgICAgeTogZGlzdGFuY2UgKiBNYXRoLnNpbihhbmdsZSkgKyBvcmlnaW4ueVxuICAgIH07XG59O1xuXG4vKlxuICAgIENvbnZlcnQgcmFkaWFucyB0byBkZWdyZWVzXG4gICAgXG4gICAgQHBhcmFtIFtudW1iZXJdOiBWYWx1ZSBpbiByYWRpYW5zXG4gICAgQHJldHVybiBbbnVtYmVyXTogVmFsdWUgaW4gZGVncmVlc1xuKi9cbmV4cG9ydCBjb25zdCByYWRpYW5zVG9EZWdyZWVzID0gKHJhZGlhbnMpID0+IHJhZGlhbnMgKiAxODAgLyBNYXRoLlBJO1xuXG4vKlxuICAgIFJldHVybiByYW5kb20gbnVtYmVyIGJldHdlZW4gcmFuZ2VcbiAgICBcbiAgICBAcGFyYW0gW251bWJlcl0gKG9wdGlvbmFsKTogT3V0cHV0IG1pbmltdW1cbiAgICBAcGFyYW0gW251bWJlcl0gKG9wdGlvbmFsKTogT3V0cHV0IG1heGltdW1cbiAgICBAcmV0dXJuIFtudW1iZXJdOiBSYW5kb20gbnVtYmVyIHdpdGhpbiByYW5nZSwgb3IgMCBhbmQgMSBpZiBub25lIHByb3ZpZGVkXG4qL1xuZXhwb3J0IGNvbnN0IHJhbmRvbSA9IChtaW4gPSAwLCBtYXggPSAxKSA9PiBNYXRoLnJhbmRvbSgpICogKG1heCAtIG1pbikgKyBtaW47XG5cbi8qXG4gICAgQ2FsY3VsYXRlIHJlbGF0aXZlIHZhbHVlXG4gICAgXG4gICAgVGFrZXMgdGhlIG9wZXJhdG9yIGFuZCB2YWx1ZSBmcm9tIGEgc3RyaW5nLCBpZSBcIis9NVwiLCBhbmQgYXBwbGllc1xuICAgIHRvIHRoZSBjdXJyZW50IHZhbHVlIHRvIHJlc29sdmUgYSBuZXcgdGFyZ2V0LlxuICAgIFxuICAgIEBwYXJhbSBbbnVtYmVyXTogQ3VycmVudCB2YWx1ZVxuICAgIEBwYXJhbSBbc3RyaW5nXTogUmVsYXRpdmUgdmFsdWVcbiAgICBAcmV0dXJuIFtudW1iZXJdOiBOZXcgdmFsdWVcbiovXG5leHBvcnQgY29uc3QgcmVsYXRpdmVWYWx1ZSA9IChjdXJyZW50LCByZWxhdGl2ZSkgPT4ge1xuICAgIGxldCBuZXdWYWx1ZSA9IGN1cnJlbnQ7XG4gICAgY29uc3QgZXF1YXRpb24gPSByZWxhdGl2ZS5zcGxpdCgnPScpO1xuICAgIGNvbnN0IG9wZXJhdG9yID0gZXF1YXRpb25bMF07XG4gICAgbGV0IHsgdW5pdCwgdmFsdWUgfSA9IHNwbGl0VmFsdWVVbml0KGVxdWF0aW9uWzFdKTtcblxuICAgIHZhbHVlID0gcGFyc2VGbG9hdCh2YWx1ZSk7XG5cbiAgICBzd2l0Y2ggKG9wZXJhdG9yKSB7XG4gICAgY2FzZSAnKyc6XG4gICAgICAgIG5ld1ZhbHVlICs9IHZhbHVlO1xuICAgICAgICBicmVhaztcbiAgICBjYXNlICctJzpcbiAgICAgICAgbmV3VmFsdWUgLT0gdmFsdWU7XG4gICAgICAgIGJyZWFrO1xuICAgIGNhc2UgJyonOlxuICAgICAgICBuZXdWYWx1ZSAqPSB2YWx1ZTtcbiAgICAgICAgYnJlYWs7XG4gICAgY2FzZSAnLyc6XG4gICAgICAgIG5ld1ZhbHVlIC89IHZhbHVlO1xuICAgICAgICBicmVhaztcbiAgICB9XG4gICAgXG4gICAgaWYgKHVuaXQpIHtcbiAgICAgICAgbmV3VmFsdWUgKz0gdW5pdDtcbiAgICB9XG5cbiAgICByZXR1cm4gbmV3VmFsdWU7XG59O1xuXG4vKlxuICAgIFJlc3RyaWN0IHZhbHVlIHRvIHJhbmdlXG4gICAgXG4gICAgUmV0dXJuIHZhbHVlIHdpdGhpbiB0aGUgcmFuZ2Ugb2YgbG93ZXJMaW1pdCBhbmQgdXBwZXJMaW1pdFxuICAgIFxuICAgIEBwYXJhbSBbbnVtYmVyXTogVmFsdWUgdG8ga2VlcCB3aXRoaW4gcmFuZ2VcbiAgICBAcGFyYW0gW251bWJlcl06IExvd2VyIGxpbWl0IG9mIHJhbmdlXG4gICAgQHBhcmFtIFtudW1iZXJdOiBVcHBlciBsaW1pdCBvZiByYW5nZVxuICAgIEByZXR1cm4gW251bWJlcl06IFZhbHVlIGFzIGxpbWl0ZWQgd2l0aGluIGdpdmVuIHJhbmdlXG4qL1xuZXhwb3J0IGNvbnN0IHJlc3RyaWN0ID0gKHZhbHVlLCBtaW4sIG1heCkgPT4gTWF0aC5tYXgoTWF0aC5taW4odmFsdWUsIG1heCksIG1pbik7XG5cbi8qXG4gICAgRnJhbWVyYXRlLWluZGVwZW5kZW50IHNtb290aGluZ1xuXG4gICAgQHBhcmFtIFtudW1iZXJdOiBOZXcgdmFsdWVcbiAgICBAcGFyYW0gW251bWJlcl06IE9sZCB2YWx1ZVxuICAgIEBwYXJhbSBbbnVtYmVyXTogRnJhbWUgZHVyYXRpb25cbiAgICBAcGFyYW0gW251bWJlcl0gKG9wdGlvbmFsKTogU21vb3RoaW5nICgwIGlzIG5vbmUpXG4qL1xuZXhwb3J0IGNvbnN0IHNtb290aCA9IChuZXdWYWx1ZSwgb2xkVmFsdWUsIGR1cmF0aW9uLCBzbW9vdGhpbmcgPSAwKSA9PiB0b0RlY2ltYWwob2xkVmFsdWUgKyAoZHVyYXRpb24gKiAobmV3VmFsdWUgLSBvbGRWYWx1ZSkgLyBNYXRoLm1heChzbW9vdGhpbmcsIGR1cmF0aW9uKSkpO1xuXG4vKlxuICAgIENvbnZlcnQgeCBwZXIgc2Vjb25kIHRvIHBlciBmcmFtZSB2ZWxvY2l0eSBiYXNlZCBvbiBmcHNcbiAgICBcbiAgICBAcGFyYW0gW251bWJlcl06IFVuaXQgcGVyIHNlY29uZFxuICAgIEBwYXJhbSBbbnVtYmVyXTogRnJhbWUgZHVyYXRpb24gaW4gbXNcbiovXG5leHBvcnQgY29uc3Qgc3BlZWRQZXJGcmFtZSA9ICh4cHMsIGZyYW1lRHVyYXRpb24pID0+IChpc051bSh4cHMpKSA/IHhwcyAvICgxMDAwIC8gZnJhbWVEdXJhdGlvbikgOiAwO1xuXG4vKlxuICAgIENvbnZlcnQgdmVsb2NpdHkgaW50byB2ZWxpY2l0eSBwZXIgc2Vjb25kXG4gICAgXG4gICAgQHBhcmFtIFtudW1iZXJdOiBVbml0IHBlciBmcmFtZVxuICAgIEBwYXJhbSBbbnVtYmVyXTogRnJhbWUgZHVyYXRpb24gaW4gbXNcbiovXG5leHBvcnQgY29uc3Qgc3BlZWRQZXJTZWNvbmQgPSAodmVsb2NpdHksIGZyYW1lRHVyYXRpb24pID0+IHZlbG9jaXR5ICogKDEwMDAgLyBmcmFtZUR1cmF0aW9uKTtcblxuLypcbiAgICBDcmVhdGUgc3RlcHBlZCB2ZXJzaW9uIG9mIDAtMSBwcm9ncmVzc1xuICAgIFxuICAgIEBwYXJhbSBbbnVtYmVyXTogQ3VycmVudCB2YWx1ZVxuICAgIEBwYXJhbSBbaW50XTogTnVtYmVyIG9mIHN0ZXBzXG4gICAgQHJldHVybiBbbnVtYmVyXTogU3RlcHBlZCB2YWx1ZVxuKi9cbmV4cG9ydCBjb25zdCBzdGVwUHJvZ3Jlc3MgPSAocHJvZ3Jlc3MsIHN0ZXBzKSA9PiB7XG4gICAgY29uc3Qgc2VnbWVudCA9IDEgLyAoc3RlcHMgLSAxKTtcbiAgICBjb25zdCB0YXJnZXQgPSAxIC0gKDEgLyBzdGVwcyk7XG4gICAgY29uc3QgcHJvZ3Jlc3NPZlRhcmdldCA9IE1hdGgubWluKHByb2dyZXNzIC8gdGFyZ2V0LCAxKTtcblxuICAgIHJldHVybiBNYXRoLmZsb29yKHByb2dyZXNzT2ZUYXJnZXQgLyBzZWdtZW50KSAqIHNlZ21lbnQ7XG59OyJdfQ==

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _createEasing = __webpack_require__(47);
	
	var _createEasing2 = _interopRequireDefault(_createEasing);
	
	var _createBezier = __webpack_require__(48);
	
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
	exports.default = {
	    defaultProps: {
	        unit: 'deg'
	    }
	};
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy92YWx1ZS10eXBlcy9hbmdsZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7a0JBQWU7QUFDWCxnQkFBWSxFQUFFO0FBQ1YsWUFBSSxFQUFFLEtBQUs7S0FDZDtDQUNKIiwiZmlsZSI6ImFuZ2xlLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9NYXR0UGVycnkvU2l0ZXMvcG9wbW90aW9uIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQge1xuICAgIGRlZmF1bHRQcm9wczoge1xuICAgICAgICB1bml0OiAnZGVnJ1xuICAgIH1cbn07Il19

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _utils = __webpack_require__(2);
	
	var _px = __webpack_require__(28);
	
	var _px2 = _interopRequireDefault(_px);
	
	var _dictionary = __webpack_require__(45);
	
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
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _defaultProps = __webpack_require__(46);
	
	exports.default = {
	    defaultProps: _defaultProps.opacity
	};
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy92YWx1ZS10eXBlcy9hbHBoYS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7a0JBRWU7QUFDWCxnQkFBWSxnQkFIUCxPQUFPLEFBR1M7Q0FDeEIiLCJmaWxlIjoiYWxwaGEuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL01hdHRQZXJyeS9TaXRlcy9wb3Btb3Rpb24iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBvcGFjaXR5IH0gZnJvbSAnLi9zZXR0aW5ncy9kZWZhdWx0LXByb3BzJztcblxuZXhwb3J0IGRlZmF1bHQge1xuICAgIGRlZmF1bHRQcm9wczogb3BhY2l0eVxufTsiXX0=

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
	        return (0, _utils.isArray)(matches) && matches.length > 0;
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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy92YWx1ZS10eXBlcy9jb21wbGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUVBLElBQU0sV0FBVyxHQUFHLGtCQUFrQixDQUFDO0FBQ3ZDLElBQU0sYUFBYSxHQUFHLFVBQUMsS0FBSztXQUFLLElBQUksR0FBRyxLQUFLLEdBQUcsR0FBRztDQUFBLENBQUM7O2tCQUVyQzs7QUFFWCxRQUFJLEVBQUUsVUFBQyxLQUFLLEVBQUs7QUFDYixZQUFNLE9BQU8sR0FBRyxLQUFLLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxDQUFDO0FBQ3pDLGVBQVEsV0FUUCxPQUFPLEVBU1EsT0FBTyxDQUFDLElBQUksT0FBTyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUU7S0FDbkQ7O0FBRUQsWUFBUSxFQUFFLFVBQUMsS0FBSyxFQUFLO0FBQ2pCLFlBQUksT0FBTyxHQUFHLENBQUMsQ0FBQztBQUNoQixlQUFPLEtBQUssQ0FBQyxPQUFPLENBQUMsV0FBVyxFQUFFO21CQUFNLGFBQWEsQ0FBQyxPQUFPLEVBQUUsQ0FBQztTQUFBLENBQUMsQ0FBQztLQUNyRTs7QUFFRCxTQUFLLEVBQUUsVUFBQyxLQUFLLEVBQUs7QUFDZCxZQUFNLFVBQVUsR0FBRyxFQUFFLENBQUM7O0FBRXRCLGFBQUssQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLENBQUMsT0FBTyxDQUFDLFVBQUMsS0FBSyxFQUFFLENBQUM7bUJBQUssVUFBVSxDQUFDLENBQUMsQ0FBQyxHQUFHLEtBQUs7U0FBQSxDQUFDLENBQUM7O0FBRXRFLGVBQU8sVUFBVSxDQUFDO0tBQ3JCOztBQUVELFdBQU8sRUFBRSxVQUFDLE1BQU0sRUFBRSxRQUFRLEVBQUs7QUFDM0IsYUFBSyxJQUFJLEdBQUcsSUFBSSxNQUFNLEVBQUU7QUFDcEIsZ0JBQUksTUFBTSxDQUFDLGNBQWMsQ0FBQyxHQUFHLENBQUMsRUFBRTtBQUM1Qix3QkFBUSxHQUFHLFFBQVEsQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxFQUFFLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO2FBQ2hFO1NBQ0o7O0FBRUQsZUFBTyxRQUFRLENBQUM7S0FDbkI7O0NBRUoiLCJmaWxlIjoiY29tcGxleC5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvTWF0dFBlcnJ5L1NpdGVzL3BvcG1vdGlvbiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGlzQXJyYXkgfSBmcm9tICcuLi9pbmMvdXRpbHMnO1xuXG5jb25zdCBGTE9BVF9SRUdFWCA9IC8oLSk/KFxcZFtcXGRcXC5dKikvZztcbmNvbnN0IGdlbmVyYXRlVG9rZW4gPSAodG9rZW4pID0+ICckeycgKyB0b2tlbiArICd9JztcblxuZXhwb3J0IGRlZmF1bHQge1xuXG4gICAgdGVzdDogKHZhbHVlKSA9PiB7XG4gICAgICAgIGNvbnN0IG1hdGNoZXMgPSB2YWx1ZS5tYXRjaChGTE9BVF9SRUdFWCk7XG4gICAgICAgIHJldHVybiAoaXNBcnJheShtYXRjaGVzKSAmJiBtYXRjaGVzLmxlbmd0aCA+IDApO1xuICAgIH0sXG5cbiAgICB0ZW1wbGF0ZTogKHZhbHVlKSA9PiB7XG4gICAgICAgIGxldCBjb3VudGVyID0gMDtcbiAgICAgICAgcmV0dXJuIHZhbHVlLnJlcGxhY2UoRkxPQVRfUkVHRVgsICgpID0+IGdlbmVyYXRlVG9rZW4oY291bnRlcisrKSk7XG4gICAgfSxcblxuICAgIHNwbGl0OiAodmFsdWUpID0+IHtcbiAgICAgICAgY29uc3Qgc3BsaXRWYWx1ZSA9IHt9O1xuICAgICAgICBcbiAgICAgICAgdmFsdWUubWF0Y2goRkxPQVRfUkVHRVgpLmZvckVhY2goKHZhbHVlLCBpKSA9PiBzcGxpdFZhbHVlW2ldID0gdmFsdWUpO1xuXG4gICAgICAgIHJldHVybiBzcGxpdFZhbHVlO1xuICAgIH0sXG5cbiAgICBjb21iaW5lOiAodmFsdWVzLCB0ZW1wbGF0ZSkgPT4ge1xuICAgICAgICBmb3IgKGxldCBrZXkgaW4gdmFsdWVzKSB7XG4gICAgICAgICAgICBpZiAodmFsdWVzLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICAgICAgICB0ZW1wbGF0ZSA9IHRlbXBsYXRlLnJlcGxhY2UoZ2VuZXJhdGVUb2tlbihrZXkpLCB2YWx1ZXNba2V5XSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGVtcGxhdGU7XG4gICAgfVxuXG59OyJdfQ==

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
	
	var _defaultProps = __webpack_require__(46);
	
	var _dictionary = __webpack_require__(45);
	
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
	
	var _dictionary = __webpack_require__(45);
	
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
	exports.default = {
	    defaultProps: {
	        unit: 'px'
	    }
	};
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy92YWx1ZS10eXBlcy9weC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7a0JBQWU7QUFDWCxnQkFBWSxFQUFFO0FBQ1YsWUFBSSxFQUFFLElBQUk7S0FDYjtDQUNKIiwiZmlsZSI6InB4LmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9NYXR0UGVycnkvU2l0ZXMvcG9wbW90aW9uIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQge1xuICAgIGRlZmF1bHRQcm9wczoge1xuICAgICAgICB1bml0OiAncHgnXG4gICAgfVxufTsiXX0=

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _utils = __webpack_require__(2);
	
	var _dictionary = __webpack_require__(45);
	
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
	
	var _dictionary = __webpack_require__(45);
	
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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9pbmMvdHJhbnNmb3JtZXJzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFFTyxJQUFNLFlBQVksV0FBWixZQUFZLEdBQUcsVUFBQyxJQUFJLEVBQUUsRUFBRSxFQUFLO0FBQ3RDLFFBQU0sU0FBUyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUM7O0FBRTlCLFdBQU8sVUFBQyxLQUFLLEVBQUs7QUFDZCxhQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsU0FBUyxFQUFFLENBQUMsRUFBRSxFQUFFO0FBQ2hDLGdCQUFJLEtBQUssR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLFNBQVMsRUFBRTtBQUNwQyx1QkFBTyxVQVJRLG9CQUFvQixFQVFQLFVBUlMsUUFBUSxFQVFSLFVBUjVDLG9CQUFvQixFQVE2QyxLQUFLLEVBQUUsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQzthQUNwSDtTQUNKO0tBQ0osQ0FBQztDQUNMLENBQUM7O0FBRUssSUFBTSxjQUFjLFdBQWQsY0FBYyxHQUFHLFVBQUMsQ0FBQyxFQUFFLEdBQUc7UUFBSSxNQUFNLFFBQU4sTUFBTTtXQUMzQyxVQWYyRCx5QkFBeUIsRUFlMUQ7QUFDdEIsU0FBQyxFQUFFLE1BQU0sQ0FBQyxPQUFPLENBQUMsT0FBTztBQUN6QixTQUFDLEVBQUUsTUFBTSxDQUFDLE9BQU8sQ0FBQyxPQUFPO0tBQzVCLEVBQUUsTUFBTSxDQUFDLEtBQUssQ0FBQyxPQUFPLEVBQUUsTUFBTSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQyxHQUFHLENBQUM7Q0FBQSxDQUFDIiwiZmlsZSI6InRyYW5zZm9ybWVycy5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvTWF0dFBlcnJ5L1NpdGVzL3BvcG1vdGlvbiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGdldFByb2dyZXNzRnJvbVZhbHVlLCBnZXRWYWx1ZUZyb21Qcm9ncmVzcywgcmVzdHJpY3QsIHBvaW50RnJvbUFuZ2xlQW5kRGlzdGFuY2UgfSBmcm9tICcuLi9pbmMvY2FsYyc7XG5cbmV4cG9ydCBjb25zdCBjcmVhdGVNYXBwZXIgPSAoZnJvbSwgdG8pID0+IHtcbiAgICBjb25zdCBtYXBMZW5ndGggPSBmcm9tLmxlbmd0aDtcblxuICAgIHJldHVybiAodmFsdWUpID0+IHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPCBtYXBMZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKHZhbHVlIDwgZnJvbVtpXSB8fCBpID09PSBtYXBMZW5ndGgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZ2V0VmFsdWVGcm9tUHJvZ3Jlc3MocmVzdHJpY3QoZ2V0UHJvZ3Jlc3NGcm9tVmFsdWUodmFsdWUsIGZyb21baSAtIDFdLCBmcm9tW2ldKSwgMCwgMSksIHRvW2kgLSAxXSwgdG9baV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcbn07XG5cbmV4cG9ydCBjb25zdCBjaXJjdWxhck1vdGlvbiA9ICh2LCBrZXksIHsgdmFsdWVzIH0pID0+IFxuICAgIHBvaW50RnJvbUFuZ2xlQW5kRGlzdGFuY2Uoe1xuICAgICAgICB4OiB2YWx1ZXMub3JpZ2luWC5jdXJyZW50LFxuICAgICAgICB5OiB2YWx1ZXMub3JpZ2luWS5jdXJyZW50IFxuICAgIH0sIHZhbHVlcy5hbmdsZS5jdXJyZW50LCB2YWx1ZXMuZGlzdGFuY2UuY3VycmVudClba2V5XTtcblxuIl19

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	exports.__esModule = true;
	
	var _Process2 = __webpack_require__(8);
	
	var _Process3 = _interopRequireDefault(_Process2);
	
	var _calc = __webpack_require__(18);
	
	var _utils = __webpack_require__(2);
	
	var _bindAdapter = __webpack_require__(49);
	
	var _bindAdapter2 = _interopRequireDefault(_bindAdapter);
	
	var _color = __webpack_require__(23);
	
	var _color2 = _interopRequireDefault(_color);
	
	var _complex = __webpack_require__(24);
	
	var _complex2 = _interopRequireDefault(_complex);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var DEFAULT_PROP = 'current';
	var NUMERICAL_VALUES = [DEFAULT_PROP, 'from', 'to', 'min', 'max'];
	var NUM_NUMERICAL_VALUES = NUMERICAL_VALUES.length;
	
	var Action = (function (_Process) {
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
	                            } else if ((0, _utils.isString)(newValue.current)) {
	                                // Test if this is a color value
	                                if (_color2.default.test(newValue.current)) {
	                                    valueType = _color2.default;
	                                } else if (_complex2.default.test(newValue.current)) {
	                                    valueType = _complex2.default;
	                                }
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
	
	                                        var valueSplitFromUnit = (0, _utils.splitValueUnit)(splitValue);
	                                        childValues[splitKey][propName] = valueSplitFromUnit.value;
	                                        childValues[splitKey].unit = valueSplitFromUnit.unit;
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
	
	                            for (var i = 0; i < NUM_NUMERICAL_VALUES; i++) {
	                                var propName = NUMERICAL_VALUES[i];
	
	                                if ((0, _utils.isString)(newValue[propName])) {
	                                    var splitUnit = (0, _utils.splitValueUnit)(newValue[propName]);
	                                    newValue[propName] = splitUnit.value;
	                                    newValue.unit = splitUnit.unit;
	                                }
	                            }
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
	})(_Process3.default);
	
	exports.default = Action;
	//# sourceMappingURL=data:application/json;base64,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QyxPQUFPLENBQUM7YUFDL0Q7U0FDSjtLQUNKOzs7Ozs7O0FBNVNnQixVQUFNLFdBbVR2QixlQUFlLDhCQUFHO0FBQ2QsZUFBTztBQUNILG1CQUFPLEVBQUUsQ0FBQztBQUNWLG9CQUFRLEVBQUUsQ0FBQztBQUNYLGlCQUFLLEVBQUUsS0FBSztTQUNmLENBQUM7S0FDTDs7Ozs7Ozs7QUF6VGdCLFVBQU0sV0FpVXZCLG1CQUFtQixrQ0FBRztBQUNsQixlQUFPLFlBQVksQ0FBQztLQUN2Qjs7V0FuVWdCLE1BQU07OztrQkFBTixNQUFNIiwiZmlsZSI6IkFjdGlvbi5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvTWF0dFBlcnJ5L1NpdGVzL3BvcG1vdGlvbiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBQcm9jZXNzIGZyb20gJy4uL3Byb2Nlc3MvUHJvY2Vzcyc7XG5pbXBvcnQgeyBzcGVlZFBlclNlY29uZCB9IGZyb20gJy4uL2luYy9jYWxjJztcbmltcG9ydCB7IGlzTnVtLCBpc09iaiwgaXNTdHJpbmcsIHNwbGl0VmFsdWVVbml0IH0gZnJvbSAnLi4vaW5jL3V0aWxzJztcbmltcG9ydCBiaW5kQWRhcHRlciBmcm9tICcuLi9pbmMvYmluZC1hZGFwdGVyJztcbmltcG9ydCBjb2xvclR5cGUgZnJvbSAnLi4vdmFsdWUtdHlwZXMvY29sb3InO1xuaW1wb3J0IGNvbXBsZXhUeXBlIGZyb20gJy4uL3ZhbHVlLXR5cGVzL2NvbXBsZXgnO1xuXG5jb25zdCBERUZBVUxUX1BST1AgPSAnY3VycmVudCc7XG5jb25zdCBOVU1FUklDQUxfVkFMVUVTID0gW0RFRkFVTFRfUFJPUCwgJ2Zyb20nLCAndG8nLCAnbWluJywgJ21heCddO1xuY29uc3QgTlVNX05VTUVSSUNBTF9WQUxVRVMgPSBOVU1FUklDQUxfVkFMVUVTLmxlbmd0aDtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQWN0aW9uIGV4dGVuZHMgUHJvY2VzcyB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgcHJvcHMuc3RhdGUgPSB7fTtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgIH1cblxuICAgIC8qXG4gICAgICAgICMgU2V0IEFjdGlvbiBwcm9wZXJ0aWVzXG4gICAgICAgICMjIFNldCB1c2VyLWRlZmluZWQgQWN0aW9uIHByb3BlcnRpZXNcblxuICAgICAgICBAcGFyYW0gW29iamVjdF1cbiAgICAgICAgQHJldHVybiBbQWN0aW9uXVxuICAgICovXG4gICAgc2V0KHByb3BzID0ge30pIHtcbiAgICAgICAgY29uc3QgeyB2YWx1ZXMsIG9uLCAuLi5wcm9wc1RvU2V0IH0gPSBwcm9wcztcblxuICAgICAgICBzdXBlci5zZXQocHJvcHNUb1NldCk7XG5cbiAgICAgICAgaWYgKG9uKSB7XG4gICAgICAgICAgICAvLyBEdWNrdHlwaXNoIGNoZWNrIGZvciBBZGFwdGVyXG4gICAgICAgICAgICB0aGlzLm9uID0gKCFvbi5zZXR0ZXIpID8gYmluZEFkYXB0ZXIob24pIDogb247XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnZhbHVlcyA9IHRoaXMudmFsdWVzIHx8IHt9O1xuICAgICAgICB0aGlzLnZhbHVlS2V5cyA9IHRoaXMudmFsdWVLZXlzIHx8IFtdO1xuICAgICAgICB0aGlzLnBhcmVudEtleXMgPSB0aGlzLnBhcmVudEtleXMgfHwgW107XG5cbiAgICAgICAgLy8gTWVyZ2UgbmV3IGB2YWx1ZWAgcHJvcGVydGllcyB3aXRoIGV4aXN0aW5nXG4gICAgICAgIGNvbnN0IGN1cnJlbnRWYWx1ZXMgPSB0aGlzLnZhbHVlcztcbiAgICAgICAgY29uc3QgZGVmYXVsdFZhbHVlID0gdGhpcy5nZXREZWZhdWx0VmFsdWUoKTtcbiAgICAgICAgY29uc3QgZGVmYXVsdFZhbHVlUHJvcCA9IHRoaXMuZ2V0RGVmYXVsdFZhbHVlUHJvcCgpO1xuXG4gICAgICAgIC8vIEluaGVyaXQgdmFsdWUgcHJvcGVydGllcyBmcm9tIGBwcm9wc2BcbiAgICAgICAgZm9yIChsZXQga2V5IGluIGRlZmF1bHRWYWx1ZSkge1xuICAgICAgICAgICAgaWYgKGRlZmF1bHRWYWx1ZS5oYXNPd25Qcm9wZXJ0eShrZXkpICYmIHByb3BzVG9TZXQuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgICAgICAgIGlmIChwcm9wc1RvU2V0W2tleV0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0VmFsdWVba2V5XSA9IHByb3BzVG9TZXRba2V5XTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyBDaGVjayBhbGwgdmFsdWVzIGFuZCBzcGxpdCBpbnRvIGNoaWxkIHZhbHVlcyBhcyBuZWNjZXNzYXJ5XG4gICAgICAgIGZvciAobGV0IGtleSBpbiB2YWx1ZXMpIHtcbiAgICAgICAgICAgIGlmICh2YWx1ZXMuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHZhbHVlID0gdmFsdWVzW2tleV07XG4gICAgICAgICAgICAgICAgY29uc3QgZXhpc3RpbmdWYWx1ZSA9IGN1cnJlbnRWYWx1ZXNba2V5XTtcbiAgICAgICAgICAgICAgICBsZXQgdmFsdWVUeXBlO1xuICAgICAgICAgICAgICAgIGxldCBuZXdWYWx1ZSA9IHt9O1xuXG4gICAgICAgICAgICAgICAgLy8gQ29udmVydCBuZXcgdmFsdWUgaW50byBvYmplY3QgaWYgaXQgaXNuJ3QgYWxyZWFkeVxuICAgICAgICAgICAgICAgIGlmIChpc09iaih2YWx1ZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgbmV3VmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBuZXdWYWx1ZVtkZWZhdWx0VmFsdWVQcm9wXSA9IHZhbHVlO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC8vIElmIHZhbHVlIGFscmVhZHkgZXhpc3RzLCBjaGVjayBmb3IgYW5kIHVzZSBleGlzdGluZyB0eXBlXG4gICAgICAgICAgICAgICAgaWYgKGV4aXN0aW5nVmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgbmV3VmFsdWUgPSB7IC4uLmV4aXN0aW5nVmFsdWUsIC4uLm5ld1ZhbHVlIH07XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlVHlwZSA9ICh0aGlzLm9uICYmIHRoaXMub24uZ2V0VmFsdWVUeXBlKSA/IHRoaXMub24uZ2V0VmFsdWVUeXBlKGtleSkgOiBleGlzdGluZ1ZhbHVlLnR5cGU7XG5cbiAgICAgICAgICAgICAgICAvLyBJZiB0aGlzIGlzIGEgbmV3IHZhbHVlLCBjaGVjayBmb3IgdHlwZVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChuZXdWYWx1ZS5mcm9tICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ld1ZhbHVlLmN1cnJlbnQgPSBuZXdWYWx1ZS5mcm9tO1xuXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAobmV3VmFsdWUuY3VycmVudCA9PT0gdW5kZWZpbmVkICYmIHRoaXMub24pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ld1ZhbHVlLmN1cnJlbnQgPSB0aGlzLm9uLmdldChrZXkpIHx8IDA7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBpZiAobmV3VmFsdWUuZnJvbSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBuZXdWYWx1ZS5mcm9tID0gbmV3VmFsdWUuY3VycmVudDtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIG5ld1ZhbHVlID0geyAuLi5kZWZhdWx0VmFsdWUsIC4uLm5ld1ZhbHVlIH07XG5cbiAgICAgICAgICAgICAgICAgICAgbmV3VmFsdWUucHJldiA9IG5ld1ZhbHVlLmN1cnJlbnQ7XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gSWYgb25lIGlzIGV4cGxpY2l0bHkgYXNzaWduZWQsIHVzZSB0aGF0XG4gICAgICAgICAgICAgICAgICAgIGlmICh2YWx1ZS50eXBlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZVR5cGUgPSB2YWx1ZS50eXBlO1xuXG4gICAgICAgICAgICAgICAgICAgIC8vIE9yIGlmIG91ciBBZGFwdGVyIGhhcyBhIHR5cGVNYXAsIHVzZSB0aGF0XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5vbiAmJiB0aGlzLm9uLmdldFZhbHVlVHlwZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWVUeXBlID0gdGhpcy5vbi5nZXRWYWx1ZVR5cGUoa2V5KTtcblxuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGlzU3RyaW5nKG5ld1ZhbHVlLmN1cnJlbnQpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBUZXN0IGlmIHRoaXMgaXMgYSBjb2xvciB2YWx1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNvbG9yVHlwZS50ZXN0KG5ld1ZhbHVlLmN1cnJlbnQpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWVUeXBlID0gY29sb3JUeXBlO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChjb21wbGV4VHlwZS50ZXN0KG5ld1ZhbHVlLmN1cnJlbnQpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWVUeXBlID0gY29tcGxleFR5cGU7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAvLyBJZiB3ZSd2ZSBnb3QgYSB2YWx1ZVR5cGUgdGhlbiBwcmVwcm9jZXNzIHRoZSB2YWx1ZSBhY2NvcmRpbmdseVxuICAgICAgICAgICAgICAgIGlmICh2YWx1ZVR5cGUpIHtcbiAgICAgICAgICAgICAgICAgICAgbmV3VmFsdWUudHlwZSA9IHZhbHVlVHlwZTtcblxuICAgICAgICAgICAgICAgICAgICAvLyBJZiB0aGlzIHZhbHVlIHNob3VsZCBiZSBzcGxpdCwgc3BsaXRcbiAgICAgICAgICAgICAgICAgICAgaWYgKHZhbHVlVHlwZS5zcGxpdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgY2hpbGRWYWx1ZXMgPSB7fTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gTG9vcCBvdmVyIG51bWVyaWNhbCB2YWx1ZXMgYW5kIHNwbGl0IGFueSBwcmVzZW50XG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IE5VTV9OVU1FUklDQUxfVkFMVUVTOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBwcm9wTmFtZSA9IE5VTUVSSUNBTF9WQUxVRVNbaV07XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAobmV3VmFsdWUuaGFzT3duUHJvcGVydHkocHJvcE5hbWUpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHNwbGl0VmFsdWVzID0gdmFsdWVUeXBlLnNwbGl0KG5ld1ZhbHVlW3Byb3BOYW1lXSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgc3BsaXRLZXkgaW4gc3BsaXRWYWx1ZXMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzcGxpdFZhbHVlcy5oYXNPd25Qcm9wZXJ0eShzcGxpdEtleSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBzcGxpdFZhbHVlID0gc3BsaXRWYWx1ZXNbc3BsaXRLZXldO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIENyZWF0ZSBuZXcgY2hpbGQgdmFsdWUgaWYgZG9lc24ndCBleGlzdFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghY2hpbGRWYWx1ZXNbc3BsaXRLZXldKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoaWxkVmFsdWVzW3NwbGl0S2V5XSA9IHsgLi4ubmV3VmFsdWUsIHBhcmVudDoga2V5LCBjaGlsZEtleTogc3BsaXRLZXkgfTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodmFsdWVUeXBlLmRlZmF1bHRQcm9wcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hpbGRWYWx1ZXNbc3BsaXRLZXldID0gKHZhbHVlVHlwZS5kZWZhdWx0UHJvcHNbc3BsaXRLZXldKSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyAuLi5jaGlsZFZhbHVlc1tzcGxpdEtleV0sIC4uLnZhbHVlVHlwZS5kZWZhdWx0UHJvcHNbc3BsaXRLZXldIH0gOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgLi4uY2hpbGRWYWx1ZXNbc3BsaXRLZXldLCAuLi52YWx1ZVR5cGUuZGVmYXVsdFByb3BzIH07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB2YWx1ZVNwbGl0RnJvbVVuaXQgPSBzcGxpdFZhbHVlVW5pdChzcGxpdFZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGlsZFZhbHVlc1tzcGxpdEtleV1bcHJvcE5hbWVdID0gdmFsdWVTcGxpdEZyb21Vbml0LnZhbHVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoaWxkVmFsdWVzW3NwbGl0S2V5XS51bml0ID0gdmFsdWVTcGxpdEZyb21Vbml0LnVuaXQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIG5ld1ZhbHVlLmNoaWxkcmVuID0ge307XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIE5vdyBsb29wIHRocm91Z2ggYWxsIGNoaWxkIHZhbHVlcyBhbmQgYWRkIHRoZW0gYXMgbm9ybWFsIHZhbHVlc1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgY2hpbGRLZXkgaW4gY2hpbGRWYWx1ZXMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoY2hpbGRWYWx1ZXMuaGFzT3duUHJvcGVydHkoY2hpbGRLZXkpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGNoaWxkVmFsdWUgPSBjaGlsZFZhbHVlc1tjaGlsZEtleV07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGNvbWJpbmVkS2V5ID0ga2V5ICsgY2hpbGRLZXk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3VmFsdWUuY2hpbGRyZW5bY2hpbGRLZXldID0gY2hpbGRWYWx1ZS5jdXJyZW50O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50VmFsdWVzW2NvbWJpbmVkS2V5XSA9IGNoaWxkVmFsdWU7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMudmFsdWVLZXlzLmluZGV4T2YoY29tYmluZWRLZXkpID09PSAtMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy52YWx1ZUtleXMucHVzaChjb21iaW5lZEtleSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFNhdmUgYSB0ZW1wbGF0ZSBmb3IgcmVjb21iaW5hdGlvbiBpZiBwcmVzZW50XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodmFsdWVUeXBlLnRlbXBsYXRlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3VmFsdWUudGVtcGxhdGUgPSBuZXdWYWx1ZS50ZW1wbGF0ZSB8fCB2YWx1ZVR5cGUudGVtcGxhdGUobmV3VmFsdWUuY3VycmVudCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gT3Igd2UganVzdCBoYXZlIGRlZmF1bHQgdmFsdWUgcHJvcHMsIGxvYWQgdGhvc2UgICBcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmICh2YWx1ZVR5cGUuZGVmYXVsdFByb3BzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBuZXdWYWx1ZSA9IHsgLi4udmFsdWVUeXBlLmRlZmF1bHRQcm9wcywgLi4ubmV3VmFsdWUgfTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBOVU1fTlVNRVJJQ0FMX1ZBTFVFUzsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcHJvcE5hbWUgPSBOVU1FUklDQUxfVkFMVUVTW2ldO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGlzU3RyaW5nKG5ld1ZhbHVlW3Byb3BOYW1lXSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgc3BsaXRVbml0ID0gc3BsaXRWYWx1ZVVuaXQobmV3VmFsdWVbcHJvcE5hbWVdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3VmFsdWVbcHJvcE5hbWVdID0gc3BsaXRVbml0LnZhbHVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXdWYWx1ZS51bml0ID0gc3BsaXRVbml0LnVuaXQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLy8gVXBkYXRlIGFwcHJvcHJpYXRlIGxpc3RzIHdpdGggdmFsdWUga2V5XG4gICAgICAgICAgICAgICAgaWYgKG5ld1ZhbHVlLmNoaWxkcmVuKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnBhcmVudEtleXMuaW5kZXhPZihrZXkpID09PSAtMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wYXJlbnRLZXlzLnB1c2goa2V5KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnZhbHVlS2V5cy5pbmRleE9mKGtleSkgPT09IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnZhbHVlS2V5cy5wdXNoKGtleSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBjdXJyZW50VmFsdWVzW2tleV0gPSBuZXdWYWx1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFByZWNvbXB1dGUgdmFsdWUga2V5IGFuZCBwYXJlbnQga2V5IGxlbmd0aCB0byBwcmV2ZW50IHBlci1mcmFtZSBtZWFzdXJlbWVudFxuICAgICAgICB0aGlzLm51bVZhbHVlS2V5cyA9IHRoaXMudmFsdWVLZXlzLmxlbmd0aDtcbiAgICAgICAgdGhpcy5udW1QYXJlbnRLZXlzID0gdGhpcy5wYXJlbnRLZXlzLmxlbmd0aDtcblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICAvKlxuICAgICAgICBEZWNpZGUgd2hldGhlciB0aGlzIEFjdGlvbiB3aWxsIHJlbmRlciBvbiBuZXh0IGZyYW1lXG5cbiAgICAgICAgQHBhcmFtIFtBY3Rpb25dXG4gICAgICAgIEBwYXJhbSBbbnVtYmVyXVxuICAgICAgICBAcGFyYW0gW251bWJlcl1cbiAgICAgICAgQHJldHVybiBbYm9vbGVhbl06IFJldHVybiB0cnVlIHRvIHJlbmRlclxuICAgICovXG4gICAgd2lsbFJlbmRlcihhY3Rpb24sIGZyYW1lU3RhbXAsIGVsYXBzZWQpIHtcbiAgICAgICAgbGV0IGhhc0NoYW5nZWQgPSBmYWxzZTtcblxuICAgICAgICAvLyBDaGVjayBpZiBiYXNlIHZhbHVlcyBoYXZlIHVwZGF0ZWQgXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5udW1WYWx1ZUtleXM7IGkrKykge1xuICAgICAgICAgICAgY29uc3Qga2V5ID0gdGhpcy52YWx1ZUtleXNbaV07XG4gICAgICAgICAgICBjb25zdCB2YWx1ZSA9IHRoaXMudmFsdWVzW2tleV07XG5cbiAgICAgICAgICAgIC8vIFJ1biB0cmFuc2Zvcm0gZnVuY3Rpb24gKGlmIHByZXNlbnQpXG4gICAgICAgICAgICBpZiAodmFsdWUudHJhbnNmb3JtKSB7XG4gICAgICAgICAgICAgICAgdmFsdWUuY3VycmVudCA9IHZhbHVlLnRyYW5zZm9ybSh2YWx1ZS5jdXJyZW50LCBrZXksIHRoaXMpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBDYXAgbWluaW11bVxuICAgICAgICAgICAgaWYgKGlzTnVtKHZhbHVlLm1pbikpIHtcbiAgICAgICAgICAgICAgICB2YWx1ZS5jdXJyZW50ID0gTWF0aC5tYXgodmFsdWUuY3VycmVudCwgdmFsdWUubWluKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gQ2FwIG1heGltdW1cbiAgICAgICAgICAgIGlmIChpc051bSh2YWx1ZS5tYXgpKSB7XG4gICAgICAgICAgICAgICAgdmFsdWUuY3VycmVudCA9IE1hdGgubWluKHZhbHVlLmN1cnJlbnQsIHZhbHVlLm1heCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIFJvdW5kIG51bWJlclxuICAgICAgICAgICAgaWYgKHZhbHVlLnJvdW5kKSB7XG4gICAgICAgICAgICAgICAgdmFsdWUuY3VycmVudCA9IE1hdGgucm91bmQodmFsdWUuY3VycmVudCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIFVwZGF0ZSB2ZWxvY2l0eVxuICAgICAgICAgICAgaWYgKCF0aGlzLmNhbGN1bGF0ZXNWZWxvY2l0eSkge1xuICAgICAgICAgICAgICAgIHZhbHVlLnZlbG9jaXR5ID0gc3BlZWRQZXJTZWNvbmQodmFsdWUuY3VycmVudCAtIHZhbHVlLnByZXYsIGVsYXBzZWQpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBJZiB0aGlzIHZhbHVlIGhhcyBjaGFuZ2VkXG4gICAgICAgICAgICBpZiAodmFsdWUucHJldiAhPT0gdmFsdWUuY3VycmVudCkge1xuICAgICAgICAgICAgICAgIGhhc0NoYW5nZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHZhbHVlLnByZXYgPSB2YWx1ZS5jdXJyZW50O1xuXG4gICAgICAgICAgICAgICAgLy8gQXBwZW5kIHVuaXRcbiAgICAgICAgICAgICAgICBjb25zdCB2YWx1ZUZvclN0YXRlID0gKHZhbHVlLnVuaXQpID8gdmFsdWUuY3VycmVudCArIHZhbHVlLnVuaXQgOiB2YWx1ZS5jdXJyZW50O1xuXG4gICAgICAgICAgICAgICAgLy8gQWRkIHRvIHN0YXRlIGlmIHRoaXMgaXMgbm90IGEgY2hpbGQgdmF1ZVxuICAgICAgICAgICAgICAgIGlmICghdmFsdWUucGFyZW50KSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGVba2V5XSA9IHZhbHVlRm9yU3RhdGU7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy52YWx1ZXNbdmFsdWUucGFyZW50XS5jaGlsZHJlblt2YWx1ZS5jaGlsZEtleV0gPSB2YWx1ZUZvclN0YXRlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiAodGhpcy5vbkNsZWFudXApID8gdHJ1ZSA6IGhhc0NoYW5nZWQ7XG4gICAgfVxuXG4gICAgLypcbiAgICAgICAgSWYgd2UgYXJlIHJlbmRlcmluZywgcmVjb21iaW5lIHBhcmVudCB2YWx1ZXMgZmlyc3RcbiAgICAqL1xuICAgIG9uUHJlUmVuZGVyKCkge1xuICAgICAgICAvLyBVcGRhdGUgcGFyZW50IHZhbHVlc1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubnVtUGFyZW50S2V5czsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCBrZXkgPSB0aGlzLnBhcmVudEtleXNbaV07XG4gICAgICAgICAgICBjb25zdCB2YWx1ZSA9IHRoaXMudmFsdWVzW2tleV07XG5cbiAgICAgICAgICAgIHZhbHVlLmN1cnJlbnQgPSB2YWx1ZS50eXBlLmNvbWJpbmUodmFsdWUuY2hpbGRyZW4sIHZhbHVlLnRlbXBsYXRlKTtcblxuICAgICAgICAgICAgaWYgKHRoaXMuc3RhdGVba2V5XSAhPT0gdmFsdWUuY3VycmVudCkge1xuICAgICAgICAgICAgICAgIHRoaXMuc3RhdGVba2V5XSA9IHZhbHVlLmN1cnJlbnQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBvblJlbmRlcih7IHN0YXRlLCBvbiB9KSB7XG4gICAgICAgIGlmIChvbiAmJiBvbi5zZXQpIHtcbiAgICAgICAgICAgIG9uLnNldChzdGF0ZSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5vbkZyYW1lKSB7XG4gICAgICAgICAgICB0aGlzLm9uRnJhbWUodGhpcyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwYXVzZSgpIHtcbiAgICAgICAgc3VwZXIuc3RvcCgpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICByZXN1bWUoKSB7XG4gICAgICAgIHN1cGVyLnN0YXJ0KCk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIHN0YXJ0KCkge1xuICAgICAgICBjb25zdCB2YWx1ZXMgPSB0aGlzLnZhbHVlcztcbiAgICAgICAgc3VwZXIuc3RhcnQoKTtcblxuICAgICAgICBmb3IgKGxldCBrZXkgaW4gdmFsdWVzKSB7XG4gICAgICAgICAgICBpZiAodmFsdWVzLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICAgICAgICB2YWx1ZXNba2V5XS5wcmV2ID0gdmFsdWVzW2tleV0ub3JpZ2luID0gdmFsdWVzW2tleV0uY3VycmVudDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qXG4gICAgICAgICMgR2V0IGRlZmF1bHQgQWN0aW9uIHZhbHVlIHByb3BlcnRpZXNcblxuICAgICAgICBAcmV0dXJuIFtvYmplY3RdXG4gICAgKi9cbiAgICBnZXREZWZhdWx0VmFsdWUoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBjdXJyZW50OiAwLFxuICAgICAgICAgICAgdmVsb2NpdHk6IDAsXG4gICAgICAgICAgICByb3VuZDogZmFsc2VcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICAvKlxuICAgICAgICAjIEdldCBkZWZhdWx0IEFjdGlvbiB2YWx1ZSBwcm9wZXJ0eSBuYW1lXG4gICAgICAgICMjIFNldCB0aGlzIGB2YWx1ZWAgcHJvcGVydHkgd2hlbiBzZXQgYXMgdmFsdWUgaW5zdGVhZCBvZiBvYmplY3RcblxuICAgICAgICBAcmV0dXJuIFtzdHJpbmddXG4gICAgKi9cbiAgICBnZXREZWZhdWx0VmFsdWVQcm9wKCkge1xuICAgICAgICByZXR1cm4gREVGQVVMVF9QUk9QO1xuICAgIH1cbn1cbiJdfQ==

/***/ },
/* 34 */
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
	//# sourceMappingURL=data:application/json;base64,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QVosWUFBWSxHQUFHLGtCQUFRLFlBQVk7Ozs7OztBQUFDLEFBTTFDLFNBQVMsUUFBUSxDQUFDLEVBQUUsRUFBRSxPQUFPLEVBQUU7QUFDbEMsc0JBQVEsUUFBUSxDQUFDLEVBQUUsRUFBRSxPQUFPLENBQUMsQ0FBQzs7QUFFOUIsUUFBSSxDQUFDLFNBQVMsRUFBRTtBQUNaLGFBQUssRUFBRSxDQUFDO0tBQ1g7Q0FDSjs7Ozs7QUFBQSxBQUtNLElBQU0sVUFBVSxXQUFWLFVBQVUsR0FBRyxrQkFBUSxVQUFVLENBQUMiLCJmaWxlIjoibG9vcC5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvTWF0dFBlcnJ5L1NpdGVzL3BvcG1vdGlvbiIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gICAgQ29yZSByZW5kZXIgbG9vcFxuXG4gICAgU29tZSBkZWNpY2lzb25zIGhlcmUgaGF2ZSBiZWVuIHRha2VuIGluIHRoZSBuYW1lIG9mIHBlcmZvcm1hbmNlLiBBbGwgaGFpbCBwZXJmb3JtYW5jZS5cbiAgICAoSXQgdHVybnMgb3V0IG1pY3Jvb3B0aW1pc2F0aW9ucyBkbyBtYXR0ZXIgd2hlbiB5b3UgaGF2ZSAxNm1zKVxuKi9cbmltcG9ydCB0aW1lciBmcm9tICcuL3RpbWVyJztcbmltcG9ydCB0aWNrIGZyb20gJy4vdGljayc7XG5pbXBvcnQgbWFuYWdlciBmcm9tICcuL21hbmFnZXInO1xuXG5jb25zdCBwcm9jZXNzU3RlcE9yZGVyID0gW1xuICAgIHsgbmFtZTogJ29uRnJhbWVTdGFydCcgfSxcbiAgICB7IG5hbWU6ICdvblVwZGF0ZScgfSxcbiAgICB7IG5hbWU6ICd3aWxsUmVuZGVyJywgZGVjaWRlUmVuZGVyOiB0cnVlIH0sXG4gICAgeyBuYW1lOiAnb25QcmVSZW5kZXInLCBpc1JlbmRlcjogdHJ1ZSB9LFxuICAgIHsgbmFtZTogJ29uUmVuZGVyJywgaXNSZW5kZXI6IHRydWUgfSxcbiAgICB7IG5hbWU6ICdvblBvc3RSZW5kZXInLCBpc1JlbmRlcjogdHJ1ZSB9LFxuICAgIHsgbmFtZTogJ29uRnJhbWVFbmQnIH0sXG4gICAgeyBuYW1lOiAnb25DbGVhbnVwJyB9XG5dO1xuY29uc3QgbnVtUHJvY2Vzc1N0ZXBzID0gcHJvY2Vzc1N0ZXBPcmRlci5sZW5ndGg7XG5cbi8vIFtib29sZWFuXTogSXMgbG9vcCBydW5uaW5nP1xubGV0IGlzUnVubmluZyA9IGZhbHNlO1xuXG4vKlxuICAgIFt0aW1lc3RhbXBdOiBGcmFtZSB0aW1lc3RhbXBcbiAgICBbaW50XTogVGltZSBzaW5jZSBsYXN0IGZyYW1lXG4qL1xuZnVuY3Rpb24gZmlyZUFsbChmcmFtZVN0YW1wLCBlbGFwc2VkKSB7XG4gICAgY29uc3QgYWN0aXZlSWRzID0gbWFuYWdlci5nZXRBY3RpdmVJZHMoKTtcbiAgICBjb25zdCBhY3RpdmVQcm9jZXNzQ291bnQgPSBhY3RpdmVJZHMubGVuZ3RoO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBudW1Qcm9jZXNzU3RlcHM7IGkrKykge1xuICAgICAgICBjb25zdCBzdGVwID0gcHJvY2Vzc1N0ZXBPcmRlcltpXTtcblxuICAgICAgICBmb3IgKGxldCBpMiA9IDA7IGkyIDwgYWN0aXZlUHJvY2Vzc0NvdW50OyBpMisrKSB7XG4gICAgICAgICAgICBjb25zdCBwcm9jZXNzID0gbWFuYWdlci5hY3RpdmVQcm9jZXNzZXNbYWN0aXZlSWRzW2kyXV07XG4gICAgICAgICAgICBsZXQgcmVzdWx0ID0gZmFsc2U7XG5cbiAgICAgICAgICAgIC8vIENoZWNrIGlmIHRoaXMgcHJvY2VzcyBoYXMgdGhpcyBzdGVwLCBvciBpZiBpdCdzIGEgcmVuZGVyIHN0ZXAgdGhhdCB3ZSdyZSByZW5kZXJpbmcgdGhpcyBmcmFtZVxuICAgICAgICAgICAgaWYgKHByb2Nlc3MgJiYgcHJvY2Vzc1tzdGVwLm5hbWVdICYmICghc3RlcC5pc1JlbmRlciB8fCAoc3RlcC5pc1JlbmRlciAmJiBwcm9jZXNzLl9yZW5kZXJUaGlzRnJhbWUgPT09IHRydWUpKSkge1xuICAgICAgICAgICAgICAgIHJlc3VsdCA9IHByb2Nlc3Nbc3RlcC5uYW1lXS5jYWxsKHByb2Nlc3MsIHByb2Nlc3MsIGZyYW1lU3RhbXAsIGVsYXBzZWQpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBJZiB0aGlzIGlzIGEgZGVjaWRlIHJlbmRlciBzdGVwIGFuZCBpdCByZXR1cm5zIGBmYWxzZWAsIHNldCB3aWxsUmVuZGVyIHRvIGZhbHNlXG4gICAgICAgICAgICBpZiAoc3RlcC5kZWNpZGVSZW5kZXIpIHtcbiAgICAgICAgICAgICAgICBwcm9jZXNzLl9yZW5kZXJUaGlzRnJhbWUgPSAocHJvY2Vzc1tzdGVwLm5hbWVdICYmIHJlc3VsdCAhPT0gdHJ1ZSkgPyBmYWxzZSA6IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gbWFuYWdlci5nZXROb25CYWNrZ3JvdW5kUnVubmluZ0NvdW50KCk7XG59XG5cbi8vIEZ1bmN0aW9uIHRvIGZpcmUgZXZlcnkgZnJhbWVcbmZ1bmN0aW9uIGZyYW1lKGZyYW1lU3RhbXApIHtcbiAgICB0aW1lci51cGRhdGUoZnJhbWVTdGFtcCk7XG4gICAgaXNSdW5uaW5nID0gZmlyZUFsbChmcmFtZVN0YW1wLCB0aW1lci5nZXRFbGFwc2VkKCkpO1xuXG4gICAgaWYgKGlzUnVubmluZykge1xuICAgICAgICB0aWNrKGZyYW1lKTtcbiAgICB9XG59XG5cbi8vIFN0YXJ0IGxvb3BcbmZ1bmN0aW9uIHN0YXJ0KCkge1xuICAgIGlmICghaXNSdW5uaW5nKSB7XG4gICAgICAgIHRpbWVyLnN0YXJ0KCk7XG4gICAgICAgIGlzUnVubmluZyA9IHRydWU7XG4gICAgICAgIHRpY2soZnJhbWUpO1xuICAgIH1cbn1cblxuLy8gRXhwb3J0c1xuZXhwb3J0IGNvbnN0IGdldFByb2Nlc3NJZCA9IG1hbmFnZXIuZ2V0UHJvY2Vzc0lkO1xuXG4vKlxuICAgIFtpbnRdOiBQcm9jZXNzIElEIHRvIGFjdGl2YXRlXG4gICAgW1Byb2Nlc3NdOiBQcm9jZXNzIHRvIGFjdGl2YXRlXG4qL1xuZXhwb3J0IGZ1bmN0aW9uIGFjdGl2YXRlKGlkLCBwcm9jZXNzKSB7XG4gICAgbWFuYWdlci5hY3RpdmF0ZShpZCwgcHJvY2Vzcyk7XG5cbiAgICBpZiAoIWlzUnVubmluZykge1xuICAgICAgICBzdGFydCgpO1xuICAgIH1cbn1cblxuLypcbiAgICBbaW50XTogUHJvY2VzcyBJRCB0byBkZWFjdGl2YXRlXG4qL1xuZXhwb3J0IGNvbnN0IGRlYWN0aXZhdGUgPSBtYW5hZ2VyLmRlYWN0aXZhdGU7Il19

/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _Input2 = __webpack_require__(9);
	
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
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _angle = __webpack_require__(20);
	
	var _angle2 = _interopRequireDefault(_angle);
	
	var _alpha = __webpack_require__(22);
	
	var _alpha2 = _interopRequireDefault(_alpha);
	
	var _axes = __webpack_require__(21);
	
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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hZGFwdGVyL2Nzcy9zdGF0ZS1tYXAuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsSUFBTSxTQUFTLEdBQUcsV0FBVyxDQUFDOztrQkFFZjtBQUNYLEtBQUMsRUFBRSxTQUFTLEdBQUcsR0FBRztBQUNsQixLQUFDLEVBQUUsU0FBUyxHQUFHLEdBQUc7QUFDbEIsS0FBQyxFQUFFLFNBQVMsR0FBRyxHQUFHO0NBQ3JCIiwiZmlsZSI6InN0YXRlLW1hcC5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvTWF0dFBlcnJ5L1NpdGVzL3BvcG1vdGlvbiIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IFRSQU5TTEFURSA9ICd0cmFuc2xhdGUnO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgeDogVFJBTlNMQVRFICsgJ1gnLFxuICAgIHk6IFRSQU5TTEFURSArICdZJyxcbiAgICB6OiBUUkFOU0xBVEUgKyAnWidcbn07Il19

/***/ },
/* 38 */
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
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _transformProps = __webpack_require__(40);
	
	var _transformProps2 = _interopRequireDefault(_transformProps);
	
	var _prefixer = __webpack_require__(38);
	
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
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _dictionary = __webpack_require__(45);
	
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
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports.default = build;
	
	var _utils = __webpack_require__(2);
	
	var _transformProps = __webpack_require__(40);
	
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
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _alpha = __webpack_require__(22);
	
	var _alpha2 = _interopRequireDefault(_alpha);
	
	var _axes = __webpack_require__(21);
	
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
/* 43 */
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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hZGFwdGVyL3N2Zy1wYXRoL3N0YXRlLW1hcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFFQSxJQUFNLE1BQU0sR0FBRyxTQUFTLENBQUM7OztBQUlyQixXQUFPLEVBQUssTUFBTSxZQUFTO0FBQzNCLFNBQUssRUFBSyxNQUFNLFVBQU87QUFDdkIsY0FBVSxFQUFLLE1BQU0sZUFBWSIsImZpbGUiOiJzdGF0ZS1tYXAuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL01hdHRQZXJyeS9TaXRlcy9wb3Btb3Rpb24iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY3NzU3RhdGVNYXAgZnJvbSAnLi4vY3NzL3N0YXRlLW1hcCc7XG5cbmNvbnN0IFNUUk9LRSA9ICdzdHJva2UtJztcblxuZXhwb3J0IGRlZmF1bHQge1xuICAgIC4uLmNzc1N0YXRlTWFwLFxuICAgIG9wYWNpdHk6IGAke1NUUk9LRX1vcGFjaXR5YCxcbiAgICB3aWR0aDogYCR7U1RST0tFfXdpZHRoYCxcbiAgICBtaXRlcmxpbWl0OiBgJHtTVFJPS0V9bWl0ZXJsaW1pdGBcbn07Il19

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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hZGFwdGVyL3N2Zy1wYXRoL2J1aWxkLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztrQkFRd0IsS0FBSzs7Ozs7OztBQUY3QixJQUFNLGVBQWUsR0FBRyxVQUFDLE9BQU8sRUFBRSxNQUFNO1dBQUssQUFBQyxVQUFVLENBQUMsT0FBTyxDQUFDLEdBQUcsR0FBRyxHQUFJLE1BQU0sR0FBRyxJQUFJO0NBQUEsQ0FBQzs7QUFFMUUsU0FBUyxLQUFLLENBQUMsS0FBSyxFQUFFLE1BQU0sRUFBRTtBQUN6QyxRQUFNLE1BQU0sR0FBRyxFQUFFLENBQUM7QUFDbEIsUUFBTSxlQUFlLEdBQUc7QUFDcEIsY0FBTSxFQUFFLENBQUM7QUFDVCxlQUFPLEVBQUUsTUFBTSxHQUFHLElBQUk7S0FDekIsQ0FBQztBQUNGLFFBQUksWUFBWSxHQUFHLEtBQUssQ0FBQzs7QUFFekIsU0FBSyxJQUFJLEdBQUcsSUFBSSxLQUFLLEVBQUU7QUFDbkIsWUFBSSxLQUFLLENBQUMsY0FBYyxDQUFDLEdBQUcsQ0FBQyxFQUFFO0FBQzNCLGdCQUFNLEtBQUssR0FBRyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7O0FBRXpCLG9CQUFRLEdBQUc7QUFDWCxxQkFBSyxRQUFRLENBQUM7QUFDZCxxQkFBSyxTQUFTO0FBQ1YsZ0NBQVksR0FBRyxJQUFJLENBQUM7QUFDcEIsbUNBQWUsQ0FBQyxHQUFHLENBQUMsR0FBRyxlQUFlLENBQUMsS0FBSyxFQUFFLE1BQU0sQ0FBQyxDQUFDO0FBQ3RELDBCQUFNO0FBQUEsQUFDVixxQkFBSyxRQUFRO0FBQ1QsMEJBQU0sQ0FBQyxtQkFBbUIsQ0FBQyxHQUFHLGVBQWUsQ0FBQyxDQUFDLEtBQUssRUFBRSxNQUFNLENBQUMsQ0FBQztBQUM5RCwwQkFBTTtBQUFBLEFBQ1Y7QUFDSSwwQkFBTSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEtBQUssQ0FBQztBQUFBLGFBQ3ZCO1NBQ0o7S0FDSjs7QUFFRCxRQUFJLFlBQVksRUFBRTtBQUNkLGNBQU0sQ0FBQyxrQkFBa0IsQ0FBQyxHQUFHLGVBQWUsQ0FBQyxNQUFNLEdBQUcsR0FBRyxHQUFHLGVBQWUsQ0FBQyxPQUFPLENBQUM7S0FDdkY7O0FBRUQsV0FBTyxNQUFNLENBQUM7Q0FDakIiLCJmaWxlIjoiYnVpbGQuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL01hdHRQZXJyeS9TaXRlcy9wb3Btb3Rpb24iLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICAgIENvbnZlcnQgcGVyY2VudGFnZSB0byBwaXhlbHNcbiAgICBcbiAgICBAcGFyYW0gW251bWJlcl06IFBlcmNlbnRhZ2Ugb2YgdG90YWwgbGVuZ3RoXG4gICAgQHBhcmFtIFtudW1iZXJdOiBUb3RhbCBsZW5ndGhcbiovXG5jb25zdCBwZXJjZW50VG9QaXhlbHMgPSAocGVyY2VudCwgbGVuZ3RoKSA9PiAocGFyc2VGbG9hdChwZXJjZW50KSAvIDEwMCkgKiBsZW5ndGggKyAncHgnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBidWlsZChzdGF0ZSwgbGVuZ3RoKSB7XG4gICAgY29uc3Qgc3R5bGVzID0ge307XG4gICAgY29uc3QgZGFzaEFycmF5U3R5bGVzID0ge1xuICAgICAgICBsZW5ndGg6IDAsXG4gICAgICAgIHNwYWNpbmc6IGxlbmd0aCArICdweCdcbiAgICB9O1xuICAgIGxldCBoYXNEYXNoQXJyYXkgPSBmYWxzZTtcblxuICAgIGZvciAobGV0IGtleSBpbiBzdGF0ZSkge1xuICAgICAgICBpZiAoc3RhdGUuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgICAgY29uc3QgdmFsdWUgPSBzdGF0ZVtrZXldO1xuXG4gICAgICAgICAgICBzd2l0Y2ggKGtleSkge1xuICAgICAgICAgICAgY2FzZSAnbGVuZ3RoJzpcbiAgICAgICAgICAgIGNhc2UgJ3NwYWNpbmcnOlxuICAgICAgICAgICAgICAgIGhhc0Rhc2hBcnJheSA9IHRydWU7XG4gICAgICAgICAgICAgICAgZGFzaEFycmF5U3R5bGVzW2tleV0gPSBwZXJjZW50VG9QaXhlbHModmFsdWUsIGxlbmd0aCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdvZmZzZXQnOlxuICAgICAgICAgICAgICAgIHN0eWxlc1snc3Ryb2tlLWRhc2hvZmZzZXQnXSA9IHBlcmNlbnRUb1BpeGVscygtdmFsdWUsIGxlbmd0aCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIHN0eWxlc1trZXldID0gdmFsdWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoaGFzRGFzaEFycmF5KSB7XG4gICAgICAgIHN0eWxlc1snc3Ryb2tlLWRhc2hhcnJheSddID0gZGFzaEFycmF5U3R5bGVzLmxlbmd0aCArICcgJyArIGRhc2hBcnJheVN0eWxlcy5zcGFjaW5nO1xuICAgIH1cblxuICAgIHJldHVybiBzdHlsZXM7XG59Il19

/***/ },
/* 45 */
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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy92YWx1ZS10eXBlcy9zZXR0aW5ncy9kZWZhdWx0LXByb3BzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFPLElBQU0sR0FBRyxXQUFILEdBQUcsR0FBRztBQUNmLE9BQUcsRUFBRSxDQUFDO0FBQ04sT0FBRyxFQUFFLEdBQUc7QUFDUixTQUFLLEVBQUUsSUFBSTtDQUNkLENBQUM7O0FBRUssSUFBTSxPQUFPLFdBQVAsT0FBTyxHQUFHO0FBQ25CLE9BQUcsRUFBRSxDQUFDO0FBQ04sT0FBRyxFQUFFLENBQUM7Q0FDVCxDQUFDOztBQUVLLElBQU0sT0FBTyxXQUFQLE9BQU8sR0FBRztBQUNuQixPQUFHLEVBQUUsQ0FBQztBQUNOLE9BQUcsRUFBRSxHQUFHO0FBQ1IsUUFBSSxFQUFFLEdBQUc7Q0FDWixDQUFDIiwiZmlsZSI6ImRlZmF1bHQtcHJvcHMuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL01hdHRQZXJyeS9TaXRlcy9wb3Btb3Rpb24iLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgcmdiID0ge1xuICAgIG1pbjogMCxcbiAgICBtYXg6IDI1NSxcbiAgICByb3VuZDogdHJ1ZVxufTtcblxuZXhwb3J0IGNvbnN0IG9wYWNpdHkgPSB7XG4gICAgbWluOiAwLFxuICAgIG1heDogMVxufTtcblxuZXhwb3J0IGNvbnN0IHBlcmNlbnQgPSB7XG4gICAgbWluOiAwLFxuICAgIG1heDogMTAwLFxuICAgIHVuaXQ6ICclJ1xufTsiXX0=

/***/ },
/* 47 */
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
/* 48 */
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
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9pbmMvYmluZC1hZGFwdGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUlBLElBQU0sU0FBUyxHQUFHLGNBQWMsQ0FBQzs7a0JBRWxCLFVBQUMsT0FBTyxFQUFLOztBQUV4QixRQUFJLE9BQU8sQ0FBQyxTQUFTLENBQUMsRUFBRTtBQUNwQixlQUFPLE9BQU8sQ0FBQyxTQUFTLENBQUM7OztBQUFDLEtBRzdCLE1BQU07QUFDSCxnQkFBSSxPQUFPLFlBQUE7OztBQUFDLEFBR1osZ0JBQUksT0FBTyxZQUFZLFdBQVcsSUFBSSxPQUFPLENBQUMsT0FBTyxLQUFLLEtBQUssRUFBRTtBQUM3RCx1QkFBTyx1QkFBYTs7O0FBQUMsYUFHeEIsTUFBTSxJQUFJLE9BQU8sWUFBWSxVQUFVLEVBQUU7QUFDdEMsd0JBQUksT0FBTyxDQUFDLE9BQU8sS0FBSyxNQUFNLEVBQUU7QUFDNUIsK0JBQU8sMkJBQWlCLENBQUM7cUJBQzVCLE1BQU07QUFDSCwrQkFBTyx1QkFBYSxDQUFDO3FCQUN4QjtpQkFDSjs7O0FBQUEsQUFHRCxrQkFBTSxDQUFDLGNBQWMsQ0FBQyxPQUFPLEVBQUUsU0FBUyxFQUFFO0FBQ3RDLDBCQUFVLEVBQUUsS0FBSztBQUNqQixxQkFBSyxFQUFFLE9BQU87YUFDakIsQ0FBQyxDQUFDOztBQUVILG1CQUFPLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQztTQUMzQjtDQUNKIiwiZmlsZSI6ImJpbmQtYWRhcHRlci5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvTWF0dFBlcnJ5L1NpdGVzL3BvcG1vdGlvbiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjc3NBZGFwdGVyIGZyb20gJy4uL2FkYXB0ZXIvY3NzLWFkYXB0ZXInO1xuaW1wb3J0IHN2Z0FkYXB0ZXIgZnJvbSAnLi4vYWRhcHRlci9zdmctYWRhcHRlcic7XG5pbXBvcnQgc3ZnUGF0aEFkYXB0ZXIgZnJvbSAnLi4vYWRhcHRlci9zdmctcGF0aC1hZGFwdGVyJztcblxuY29uc3QgU0FWRV9QUk9QID0gJ19fcG1fYWRhcHRlcic7XG5cbmV4cG9ydCBkZWZhdWx0IChlbGVtZW50KSA9PiB7XG4gICAgLy8gUmV0dXJuIGJvdW5kIGFkYXB0ZXIgaWYgcHJlc2VudFxuICAgIGlmIChlbGVtZW50W1NBVkVfUFJPUF0pIHtcbiAgICAgICAgcmV0dXJuIGVsZW1lbnRbU0FWRV9QUk9QXTtcblxuICAgIC8vIE9yIGRldGVjdCBhbmQgYmluZCBhZGFwdGVyXG4gICAgfSBlbHNlIHtcbiAgICAgICAgbGV0IGFkYXB0ZXI7XG5cbiAgICAgICAgLy8gSWYgSFRNTEVsZW1lbnQgbG9hZCBDU1NcbiAgICAgICAgaWYgKGVsZW1lbnQgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCB8fCBlbGVtZW50LnRhZ05hbWUgPT09ICdzdmcnKSB7XG4gICAgICAgICAgICBhZGFwdGVyID0gY3NzQWRhcHRlcjtcblxuICAgICAgICAvLyBPciBTVkdcbiAgICAgICAgfSBlbHNlIGlmIChlbGVtZW50IGluc3RhbmNlb2YgU1ZHRWxlbWVudCkge1xuICAgICAgICAgICAgaWYgKGVsZW1lbnQudGFnTmFtZSA9PT0gJ3BhdGgnKSB7XG4gICAgICAgICAgICAgICAgYWRhcHRlciA9IHN2Z1BhdGhBZGFwdGVyO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBhZGFwdGVyID0gc3ZnQWRhcHRlcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEJpbmQgYWRhcHRlciB0byBlbGVtZW50XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlbGVtZW50LCBTQVZFX1BST1AsIHtcbiAgICAgICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgICAgICAgdmFsdWU6IGFkYXB0ZXJcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIGFkYXB0ZXIoZWxlbWVudCk7XG4gICAgfVxufTtcbiJdfQ==

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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9wcm9jZXNzL3RpY2suanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUlBLElBQU0sTUFBTSxHQUFHLEFBQUMsT0FBTyxNQUFNLEtBQUssV0FBVyxJQUFJLE1BQU0sQ0FBQyxxQkFBcUIsR0FBSSxJQUFJLEdBQUcsS0FBSyxDQUFDOztBQUU5RixJQUFJLElBQUksWUFBQSxDQUFDOztBQUVULElBQUksTUFBTSxFQUFFO0FBQ1IsUUFBSSxHQUFHLFVBQUMsUUFBUTtlQUFLLE1BQU0sQ0FBQyxxQkFBcUIsQ0FBQyxRQUFRLENBQUM7S0FBQSxDQUFDO0NBRS9ELE1BQU07Ozs7Ozs7Ozs7Ozs7OztBQWVILFlBQUksUUFBUSxHQUFHLENBQUMsQ0FBQzs7QUFFakIsWUFBSSxHQUFHLFVBQUMsUUFBUSxFQUFLO0FBQ2pCLGdCQUFNLFdBQVcsR0FBRyxJQUFJLElBQUksRUFBRSxDQUFDLE9BQU8sRUFBRSxDQUFDO0FBQ3pDLGdCQUFNLFVBQVUsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxFQUFFLElBQUksV0FBVyxHQUFHLFFBQVEsQ0FBQSxBQUFDLENBQUMsQ0FBQzs7QUFFOUQsb0JBQVEsR0FBRyxXQUFXLEdBQUcsVUFBVSxDQUFDOztBQUVwQyxzQkFBVSxDQUFDO3VCQUFNLFFBQVEsQ0FBQyxRQUFRLENBQUM7YUFBQSxFQUFFLFVBQVUsQ0FBQyxDQUFDO1NBQ3BELENBQUM7O0NBQ0w7O2tCQUVjLElBQUkiLCJmaWxlIjoidGljay5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvTWF0dFBlcnJ5L1NpdGVzL3BvcG1vdGlvbiIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gICAgRGV0ZWN0IGFuZCBsb2FkIGFuIGFwcHJvcHJpYXRlIGNsb2NrIHNldHRpbmcgZm9yIHRoZSBlbnZpcm9ubWVudFxuKi9cblxuY29uc3QgaGFzUkFGID0gKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUpID8gdHJ1ZSA6IGZhbHNlO1xuXG5sZXQgdGljaztcblxuaWYgKGhhc1JBRikge1xuICAgIHRpY2sgPSAoY2FsbGJhY2spID0+IHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoY2FsbGJhY2spO1xuXG59IGVsc2Uge1xuICAgIC8qXG4gICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSBwb2x5ZmlsbFxuICAgICAgICBcbiAgICAgICAgRm9yIElFOC85IEZsaW5zdG9uZXMgYW5kIG5vbi1icm93c2VyIGVudmlyb25tZW50c1xuXG4gICAgICAgIFRha2VuIGZyb20gUGF1bCBJcmlzaC4gV2UndmUgc3RyaXBwZWQgb3V0IGNhbmNlbEFuaW1hdGlvbkZyYW1lIGNoZWNrcyBiZWNhdXNlIHdlIGRvbid0IGZveCB3aXRoIHRoYXRcbiAgICAgICAgXG4gICAgICAgIGh0dHA6Ly9wYXVsaXJpc2guY29tLzIwMTEvcmVxdWVzdGFuaW1hdGlvbmZyYW1lLWZvci1zbWFydC1hbmltYXRpbmcvXG4gICAgICAgIGh0dHA6Ly9teS5vcGVyYS5jb20vZW1vbGxlci9ibG9nLzIwMTEvMTIvMjAvcmVxdWVzdGFuaW1hdGlvbmZyYW1lLWZvci1zbWFydC1lci1hbmltYXRpbmdcbiAgICAgICAgIFxuICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUgcG9seWZpbGwgYnkgRXJpayBNw7ZsbGVyLiBmaXhlcyBmcm9tIFBhdWwgSXJpc2ggYW5kIFRpbm8gWmlqZGVsXG4gICAgICAgICBcbiAgICAgICAgTUlUIGxpY2Vuc2VcbiAgICAqL1xuICAgIGxldCBsYXN0VGltZSA9IDA7XG5cbiAgICB0aWNrID0gKGNhbGxiYWNrKSA9PiB7XG4gICAgICAgIGNvbnN0IGN1cnJlbnRUaW1lID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XG4gICAgICAgIGNvbnN0IHRpbWVUb0NhbGwgPSBNYXRoLm1heCgwLCAxNiAtIChjdXJyZW50VGltZSAtIGxhc3RUaW1lKSk7XG5cbiAgICAgICAgbGFzdFRpbWUgPSBjdXJyZW50VGltZSArIHRpbWVUb0NhbGw7XG5cbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiBjYWxsYmFjayhsYXN0VGltZSksIHRpbWVUb0NhbGwpO1xuICAgIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IHRpY2s7Il19

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
	//# sourceMappingURL=data:application/json;base64,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O0FBQ3RCLDRCQUFPLENBQUMsWUFBWSxDQUFDLFFBQU8sQ0FBQyxDQUFDO2lCQUNqQzthQUNKO1NBQ0o7Ozs7OztBQUFBLEFBTUQsdUJBQWUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLHFCQUFxQixDQUFDOzs7OztBQUFDLEFBS2pELFlBQU0sbUJBQW1CLEdBQUcsYUFBYSxDQUFDLE1BQU0sQ0FBQzs7QUFFakQsYUFBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLG1CQUFtQixFQUFFLENBQUMsRUFBRSxFQUFFO0FBQzFDLGdCQUFNLEVBQUUsR0FBRyxhQUFhLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDNUIsZ0JBQU0sYUFBYSxHQUFHLFVBQVUsQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLENBQUM7QUFDN0MsZ0JBQU0sU0FBTyxHQUFHLGVBQWUsQ0FBQyxFQUFFLENBQUM7OztBQUFDLEFBR3BDLGdCQUFJLGFBQWEsS0FBSyxDQUFDLENBQUMsSUFBSSxTQUFPLEVBQUU7QUFDakMsb0JBQUksU0FBTyxDQUFDLFVBQVUsRUFBRTtBQUNwQiw4QkFBVSxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsQ0FBQztpQkFDMUIsTUFBTTtBQUNILDhCQUFVLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO2lCQUN2Qjs7QUFFRCxrQ0FBa0IsQ0FBQyxJQUFJLEVBQUUsU0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDOztBQUV6QyxvQkFBSSxTQUFPLENBQUMsVUFBVSxFQUFFO0FBQ3BCLDZCQUFPLENBQUMsVUFBVSxDQUFDLFNBQU8sQ0FBQyxDQUFDO2lCQUMvQjthQUNKO1NBQ0o7O0FBRUQscUJBQWEsQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLG1CQUFtQixDQUFDLENBQUM7O0FBRTdDLGVBQU8sVUFBVSxDQUFDO0tBQ3JCO0NBQ0oiLCJmaWxlIjoibWFuYWdlci5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvTWF0dFBlcnJ5L1NpdGVzL3BvcG1vdGlvbiIsInNvdXJjZXNDb250ZW50IjpbIi8vIFtpbnRdOiBJbmNyZW1lbnRlZCBmb3IgZWFjaCBuZXcgcnVubmluZyBwcm9jZXNzXG5sZXQgY3VycmVudFByb2Nlc3NJZCA9IDA7XG5cbi8vIFtpbnRdOiBOdW1iZXIgb2YgYWxsIHJ1bm5pbmcgcHJvY2Vzc2VzXG5sZXQgdG90YWxSdW5uaW5nQ291bnQgPSAwO1xuXG4vLyBbaW50XTogTnVtYmVyIG9mIHJ1bm5pbmcgcHJvY2Vzc2VzIGV4Y2x1ZGluZyBiYWNrZ3JvdW5kIHByb2Nlc3Nlc1xubGV0IG5vbkJhY2tncm91bmRSdW5uaW5nQ291bnQgPSAwO1xuXG4vLyBbYXJyYXldOiBBcnJheSBvZiBydW5uaW5nIHByb2Nlc3MgSURzXG5jb25zdCBydW5uaW5nSWRzID0gW107XG5cbi8vIFtvYmplY3RdOiBNYXAgb2YgcnVubmluZyBwcm9jZXNzZXNcbmNvbnN0IGFjdGl2ZVByb2Nlc3NlcyA9IHt9O1xuXG4vLyBbYXJyYXldOiBBcnJheSBvZiBwcm9jZXNzIElEcyBxdWV1ZWQgZm9yIGFjdGl2YXRpb25cbmNvbnN0IGFjdGl2YXRlUXVldWUgPSBbXTtcblxuLy8gW2FycmF5XTogQXJyYXkgb2YgcHJvY2VzcyBJRHMgcXVldWVkIGZvciBkZWFjdGl2YXRpb25cbmNvbnN0IGRlYWN0aXZhdGVRdWV1ZSA9IFtdO1xuXG4vKlxuICAgIFVwZGF0ZSBhY3RpdmF0ZS9kZWFjdGl2YXRlIHF1ZXVlc1xuXG4gICAgQHBhcmFtIFtudW1iZXJdXG4gICAgQHBhcmFtIFthcnJheV1cbiAgICBAcGFyYW0gW2FycmF5XVxuKi9cbmNvbnN0IHVwZGF0ZVF1ZXVlcyA9IChpZCwgaW5MaXN0LCBvdXRMaXN0KSA9PiB7XG4gICAgY29uc3QgaW5Qb3NpdGlvbiA9IGluTGlzdC5pbmRleE9mKGlkKTtcbiAgICBjb25zdCBvdXRQb3NpdGlvbiA9IG91dExpc3QuaW5kZXhPZihpZCk7XG5cbiAgICBpZiAoaW5Qb3NpdGlvbiA9PT0gLTEpIHtcbiAgICAgICAgaW5MaXN0LnB1c2goaWQpO1xuICAgIH1cblxuICAgIGlmIChvdXRQb3NpdGlvbiA+IC0xKSB7XG4gICAgICAgIG91dExpc3Quc3BsaWNlKG91dFBvc2l0aW9uLCAxKTtcbiAgICB9XG59O1xuXG4vKlxuICAgIFVwZGF0ZSBydW5uaW5nXG5cbiAgICBbYm9vbGVhbl06IGB0cnVlYCB0byBhZGRcbiAgICBbYm9vbGVhbl06IGB0cnVlYCBpZiBsYXp5XG4qL1xuY29uc3QgdXBkYXRlUnVubmluZ0NvdW50ID0gKGFkZCwgaXNMYXp5KSA9PiB7XG4gICAgY29uc3QgbW9kaWZ5ID0gYWRkID8gMSA6IC0xO1xuXG4gICAgdG90YWxSdW5uaW5nQ291bnQgKz0gbW9kaWZ5O1xuXG4gICAgaWYgKCFpc0xhenkpIHtcbiAgICAgICAgbm9uQmFja2dyb3VuZFJ1bm5pbmdDb3VudCArPSBtb2RpZnk7XG4gICAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQge1xuICAgIGFjdGl2ZVByb2Nlc3NlcyxcblxuICAgIC8vIEFjdGl2YXRlIGEgcHJvY2Vzc1xuICAgIGFjdGl2YXRlOiAoaWQsIHByb2Nlc3MpID0+IHtcbiAgICAgICAgYWN0aXZlUHJvY2Vzc2VzW2lkXSA9IHByb2Nlc3M7XG4gICAgICAgIHByb2Nlc3MuaXNBY3RpdmUgPSB0cnVlO1xuICAgICAgICB1cGRhdGVRdWV1ZXMoaWQsIGFjdGl2YXRlUXVldWUsIGRlYWN0aXZhdGVRdWV1ZSk7XG4gICAgfSxcblxuICAgIC8vIERlYWN0aXZhdGUgYSBwcm9jZXNzXG4gICAgZGVhY3RpdmF0ZTogKGlkKSA9PiB7XG4gICAgICAgIHByb2Nlc3MuaXNBY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgdXBkYXRlUXVldWVzKGlkLCBkZWFjdGl2YXRlUXVldWUsIGFjdGl2YXRlUXVldWUpO1xuICAgIH0sXG5cbiAgICAvLyBOdW1iZXIgYmFja2dyb3VuZCBwcm9jZXNzZXNcbiAgICBnZXROb25CYWNrZ3JvdW5kUnVubmluZ0NvdW50OiAoKSA9PiBub25CYWNrZ3JvdW5kUnVubmluZ0NvdW50LFxuXG4gICAgLy8gSW5jcmVtZW50IGN1cnJlbnQgcHJvY2VzcyBJRCBhbmQgcmV0dXJuXG4gICAgZ2V0UHJvY2Vzc0lkOiAoKSA9PiBjdXJyZW50UHJvY2Vzc0lkKyssXG5cbiAgICAvLyBSZXNvbHZlIGFjdGl2YXRlL2RlYWN0aXZhdGUgcHJvY2Vzc2VzIGFuZCByZXR1cm4gYWN0aXZlIGlkc1xuICAgIGdldEFjdGl2ZUlkczogKCkgPT4ge1xuICAgICAgICAvKlxuICAgICAgICAgICAgUHJvY2VzcyBkZWFjdGl2YXRlIHF1ZXVlXG4gICAgICAgICovXG4gICAgICAgIGNvbnN0IGRlYWN0aXZhdGVRdWV1ZUxlbmd0aCA9IGRlYWN0aXZhdGVRdWV1ZS5sZW5ndGg7XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBkZWFjdGl2YXRlUXVldWVMZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgY29uc3QgaWQgPSBkZWFjdGl2YXRlUXVldWVbaV07XG4gICAgICAgICAgICBjb25zdCBhY3RpdmVJZEluZGV4ID0gcnVubmluZ0lkcy5pbmRleE9mKGlkKTtcbiAgICAgICAgICAgIGNvbnN0IHByb2Nlc3MgPSBhY3RpdmVQcm9jZXNzZXNbaWRdO1xuXG4gICAgICAgICAgICAvLyBJZiB0aGlzIGlzIGEgcnVubmluZyBwcm9jZXNzLCBkZWFjdGl2YXRlXG4gICAgICAgICAgICBpZiAoYWN0aXZlSWRJbmRleCA+IC0xKSB7XG4gICAgICAgICAgICAgICAgcnVubmluZ0lkcy5zcGxpY2UoYWN0aXZlSWRJbmRleCwgMSk7XG4gICAgICAgICAgICAgICAgdXBkYXRlUnVubmluZ0NvdW50KGZhbHNlLCBwcm9jZXNzLmlzTGF6eSk7XG4gICAgICAgICAgICAgICAgZGVsZXRlIGFjdGl2ZVByb2Nlc3Nlc1tpZF07XG5cbiAgICAgICAgICAgICAgICBpZiAocHJvY2Vzcy5vbkRlYWN0aXZhdGUpIHtcbiAgICAgICAgICAgICAgICAgICAgcHJvY2Vzcy5vbkRlYWN0aXZhdGUocHJvY2Vzcyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLypcbiAgICAgICAgICAgIEVtcHR5IGRlYWN0aXZhdGUgcXVldWUuIFdlIHVzZSBgQXJyYXkuc3BsaWNlYCBiZWNhdXNlIGl0IGRvZXNuJ3RcbiAgICAgICAgICAgIHdvcmtzIG9uIHRoZSBvcmlnaW5hbCBhcnJheSBzbyB3ZSBkb24ndCBoYXZlIHRvIGdhcmJhZ2UgY29sbGVjdCBhbnl0aGluZ1xuICAgICAgICAqL1xuICAgICAgICBkZWFjdGl2YXRlUXVldWUuc3BsaWNlKDAsIGRlYWN0aXZhdGVRdWV1ZUxlbmd0aCk7XG5cbiAgICAgICAgLypcbiAgICAgICAgICAgIFByb2Nlc3MgYWN0aXZhdGUgcXVldWVcbiAgICAgICAgKi9cbiAgICAgICAgY29uc3QgYWN0aXZhdGVRdWV1ZUxlbmd0aCA9IGFjdGl2YXRlUXVldWUubGVuZ3RoO1xuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYWN0aXZhdGVRdWV1ZUxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCBpZCA9IGFjdGl2YXRlUXVldWVbaV07XG4gICAgICAgICAgICBjb25zdCBhY3RpdmVJZEluZGV4ID0gcnVubmluZ0lkcy5pbmRleE9mKGlkKTtcbiAgICAgICAgICAgIGNvbnN0IHByb2Nlc3MgPSBhY3RpdmVQcm9jZXNzZXNbaWRdO1xuXG4gICAgICAgICAgICAvLyBJZiBwcm9jZXNzIGlzbid0IGFscmVhZHkgcnVubmluZywgYWN0aXZhdGVcbiAgICAgICAgICAgIGlmIChhY3RpdmVJZEluZGV4ID09PSAtMSAmJiBwcm9jZXNzKSB7XG4gICAgICAgICAgICAgICAgaWYgKHByb2Nlc3MuaXNQcmlvcml0eSkge1xuICAgICAgICAgICAgICAgICAgICBydW5uaW5nSWRzLnVuc2hpZnQoaWQpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmdJZHMucHVzaChpZCk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgdXBkYXRlUnVubmluZ0NvdW50KHRydWUsIHByb2Nlc3MuaXNMYXp5KTtcblxuICAgICAgICAgICAgICAgIGlmIChwcm9jZXNzLm9uQWN0aXZhdGUpIHtcbiAgICAgICAgICAgICAgICAgICAgcHJvY2Vzcy5vbkFjdGl2YXRlKHByb2Nlc3MpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGFjdGl2YXRlUXVldWUuc3BsaWNlKDAsIGFjdGl2YXRlUXVldWVMZW5ndGgpO1xuXG4gICAgICAgIHJldHVybiBydW5uaW5nSWRzO1xuICAgIH1cbn07XG4iXX0=
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgM2NjMTBjOThjYTA1YjNkN2Y0Y2MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xvYWQvZ2xvYmFsLmpzIiwid2VicGFjazovLy8uL3NyYy9wb3Btb3Rpb24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luYy91dGlscy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcHJvY2Vzcy90aW1lci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYWN0aW9ucy9BY3Rvci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYWN0aW9ucy9Ud2Vlbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYWN0aW9ucy9QaHlzaWNzLmpzIiwid2VicGFjazovLy8uL3NyYy9hY3Rpb25zL1RyYWNrLmpzIiwid2VicGFjazovLy8uL3NyYy9wcm9jZXNzL1Byb2Nlc3MuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2lucHV0L0lucHV0LmpzIiwid2VicGFjazovLy8uL3NyYy9pbmMvc3RhZ2dlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5jL3RpbWVsaW5lLmpzIiwid2VicGFjazovLy8uL3NyYy9hZGFwdGVyL2FkYXB0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FkYXB0ZXIvYXR0ci1hZGFwdGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9hZGFwdGVyL2Nzcy1hZGFwdGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9hZGFwdGVyL3N2Zy1hZGFwdGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9hZGFwdGVyL3N2Zy1wYXRoLWFkYXB0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luYy9jYWxjLmpzIiwid2VicGFjazovLy8uL3NyYy9hY3Rpb25zL2Vhc2luZy9wcmVzZXQtZWFzaW5nLmpzIiwid2VicGFjazovLy8uL3NyYy92YWx1ZS10eXBlcy9hbmdsZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdmFsdWUtdHlwZXMvYXhlcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdmFsdWUtdHlwZXMvYWxwaGEuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZhbHVlLXR5cGVzL2NvbG9yLmpzIiwid2VicGFjazovLy8uL3NyYy92YWx1ZS10eXBlcy9jb21wbGV4LmpzIiwid2VicGFjazovLy8uL3NyYy92YWx1ZS10eXBlcy9oZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZhbHVlLXR5cGVzL2hzbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdmFsdWUtdHlwZXMvcG9zaXRpb25zLmpzIiwid2VicGFjazovLy8uL3NyYy92YWx1ZS10eXBlcy9weC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdmFsdWUtdHlwZXMvcmdiLmpzIiwid2VicGFjazovLy8uL3NyYy92YWx1ZS10eXBlcy9zY2FsZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdmFsdWUtdHlwZXMvc2hhZG93LmpzIiwid2VicGFjazovLy8uL3NyYy9pbmMvdHJhbnNmb3JtZXJzLmpzIiwid2VicGFjazovLy8uL3NyYy9hY3Rpb25zL0FjdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcHJvY2Vzcy9sb29wLmpzIiwid2VicGFjazovLy8uL3NyYy9pbnB1dC9Qb2ludGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9hZGFwdGVyL2Nzcy92YWx1ZS10eXBlLW1hcC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYWRhcHRlci9jc3Mvc3RhdGUtbWFwLmpzIiwid2VicGFjazovLy8uL3NyYy9hZGFwdGVyL2Nzcy9wcmVmaXhlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYWRhcHRlci9jc3MvYnVpbGQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FkYXB0ZXIvY3NzL3RyYW5zZm9ybS1wcm9wcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYWRhcHRlci9zdmcvYnVpbGQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FkYXB0ZXIvc3ZnL3ZhbHVlLXR5cGUtbWFwLmpzIiwid2VicGFjazovLy8uL3NyYy9hZGFwdGVyL3N2Zy1wYXRoL3N0YXRlLW1hcC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYWRhcHRlci9zdmctcGF0aC9idWlsZC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdmFsdWUtdHlwZXMvc2V0dGluZ3MvZGljdGlvbmFyeS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdmFsdWUtdHlwZXMvc2V0dGluZ3MvZGVmYXVsdC1wcm9wcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYWN0aW9ucy9lYXNpbmcvY3JlYXRlLWVhc2luZy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYWN0aW9ucy9lYXNpbmcvY3JlYXRlLWJlemllci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5jL2JpbmQtYWRhcHRlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcHJvY2Vzcy90aWNrLmpzIiwid2VicGFjazovLy8uL3NyYy9wcm9jZXNzL21hbmFnZXIuanMiLCJ3ZWJwYWNrOi8vLy4vfi9wcm9jZXNzL2Jyb3dzZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVCQUFlO0FBQ2Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0Esd0M7Ozs7Ozs7QUN0Q0E7O0FBRUE7O0FBRUE7O0FBRUEsd0NBQXVDLDZCQUE2QixZQUFZLEVBQUUsT0FBTyxpQkFBaUIsbUJBQW1CLHVCQUF1Qiw0RUFBNEUsRUFBRSxFQUFFLHNCQUFzQixlQUFlLEVBQUU7O0FBRTNROztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDRDQUEyQyxtdUI7Ozs7OztBQ2YzQzs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFDOztBQUVEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFDOztBQUVEOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBLHdDQUF1Qyw2QkFBNkIsWUFBWSxFQUFFLE9BQU8saUJBQWlCLG1CQUFtQix1QkFBdUIsNEVBQTRFLEVBQUUsRUFBRSxzQkFBc0IsZUFBZSxFQUFFOztBQUUzUSx1Q0FBc0MsdUNBQXVDLGdCQUFnQjs7QUFFN0Y7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtFQUFpRSxhQUFhO0FBQzlFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EscUVBQW9FLGVBQWU7QUFDbkY7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxxRUFBb0UsZUFBZTtBQUNuRjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSw0Q0FBMkMsMndIOzs7Ozs7QUMxTjNDOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBbUIscUJBQXFCO0FBQ3hDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxvQkFBbUIsY0FBYztBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUM7QUFDRDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUEsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsb0JBQW1CLG1CQUFtQjtBQUN0QztBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtB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bWhFOzs7Ozs7QUMxQzNDOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBLHVDQUFzQyx1Q0FBdUMsZ0JBQWdCOztBQUU3RjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLDRDQUEyQyx1NEM7Ozs7OztBQ2pDM0M7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDRDQUEyQyxtOGU7Ozs7OztBQzVTM0M7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUEsdUNBQXNDLHVDQUF1QyxnQkFBZ0I7O0FBRTdGO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNB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QSw0Q0FBMkMsbWtSOzs7Ozs7O0FDbkozQzs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXFCO0FBQ3JCOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDRCQUEyQjtBQUMzQjtBQUNBO0FBQ0E7QUFDQSw2QkFBNEIsVUFBVSIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuXG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRleHBvcnRzOiB7fSxcbiBcdFx0XHRpZDogbW9kdWxlSWQsXG4gXHRcdFx0bG9hZGVkOiBmYWxzZVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHdlYnBhY2svYm9vdHN0cmFwIDNjYzEwYzk4Y2EwNWIzZDdmNGNjXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgX3BvcG1vdGlvbiA9IHJlcXVpcmUoJy4uL3BvcG1vdGlvbicpO1xuXG52YXIgcG9wbW90aW9uID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQoX3BvcG1vdGlvbik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKG9iaikgeyBpZiAob2JqICYmIG9iai5fX2VzTW9kdWxlKSB7IHJldHVybiBvYmo7IH0gZWxzZSB7IHZhciBuZXdPYmogPSB7fTsgaWYgKG9iaiAhPSBudWxsKSB7IGZvciAodmFyIGtleSBpbiBvYmopIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGtleSkpIG5ld09ialtrZXldID0gb2JqW2tleV07IH0gfSBuZXdPYmouZGVmYXVsdCA9IG9iajsgcmV0dXJuIG5ld09iajsgfSB9XG5cbnZhciBVSXJlZiA9IHdpbmRvdy5tb3Rpb247XG5cbnBvcG1vdGlvbi5ub0NvbmZsaWN0ID0gZnVuY3Rpb24gKCkge1xuICAgIHdpbmRvdy5tb3Rpb24gPSBVSXJlZjtcbn07XG5cbndpbmRvdy5tb3Rpb24gPSB3aW5kb3cucG9wbW90aW9uID0gcG9wbW90aW9uO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluTnlZeTlzYjJGa0wyZHNiMkpoYkM1cWN5SmRMQ0p1WVcxbGN5STZXMTBzSW0xaGNIQnBibWR6SWpvaU96czdPMGxCUVZrc1UwRkJVenM3T3p0QlFVVnlRaXhKUVVGTkxFdEJRVXNzUjBGQlJ5eE5RVUZOTEVOQlFVTXNUVUZCVFN4RFFVRkRPenRCUVVVMVFpeFRRVUZUTEVOQlFVTXNWVUZCVlN4SFFVRkhMRmxCUVZrN1FVRkRMMElzVlVGQlRTeERRVUZETEUxQlFVMHNSMEZCUnl4TFFVRkxMRU5CUVVNN1EwRkRla0lzUTBGQlF6czdRVUZGUml4TlFVRk5MRU5CUVVNc1RVRkJUU3hIUVVGSExFMUJRVTBzUTBGQlF5eFRRVUZUTEVkQlFVY3NVMEZCVXl4RFFVRkRJaXdpWm1sc1pTSTZJbWRzYjJKaGJDNXFjeUlzSW5OdmRYSmpaVkp2YjNRaU9pSXZWWE5sY25NdlRXRjBkRkJsY25KNUwxTnBkR1Z6TDNCdmNHMXZkR2x2YmlJc0luTnZkWEpqWlhORGIyNTBaVzUwSWpwYkltbHRjRzl5ZENBcUlHRnpJSEJ2Y0cxdmRHbHZiaUJtY205dElDY3VMaTl3YjNCdGIzUnBiMjRuTzF4dVhHNWpiMjV6ZENCVlNYSmxaaUE5SUhkcGJtUnZkeTV0YjNScGIyNDdYRzVjYm5CdmNHMXZkR2x2Ymk1dWIwTnZibVpzYVdOMElEMGdablZ1WTNScGIyNGdLQ2tnZTF4dUlDQWdJSGRwYm1SdmR5NXRiM1JwYjI0Z1BTQlZTWEpsWmp0Y2JuMDdYRzVjYm5kcGJtUnZkeTV0YjNScGIyNGdQU0IzYVc1a2IzY3VjRzl3Ylc5MGFXOXVJRDBnY0c5d2JXOTBhVzl1T3lKZGZRPT1cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2xvYWQvZ2xvYmFsLmpzXG4gKiogbW9kdWxlIGlkID0gMFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0cy50cmFuc2Zvcm1lcnMgPSBleHBvcnRzLnNoYWRvd1R5cGUgPSBleHBvcnRzLnNjYWxlVHlwZSA9IGV4cG9ydHMucmdiVHlwZSA9IGV4cG9ydHMucHhUeXBlID0gZXhwb3J0cy5wb3NpdGlvbnNUeXBlID0gZXhwb3J0cy5oc2xUeXBlID0gZXhwb3J0cy5oZXhUeXBlID0gZXhwb3J0cy5jb21wbGV4VHlwZSA9IGV4cG9ydHMuY29sb3JUeXBlID0gZXhwb3J0cy5heGVzVHlwZSA9IGV4cG9ydHMuYW5nbGVUeXBlID0gZXhwb3J0cy5hbHBoYVR5cGUgPSBleHBvcnRzLnNldEdsb2JhbERpbGF0aW9uID0gZXhwb3J0cy5jb21iaW5lVHJhbnNmb3JtZXJzID0gZXhwb3J0cy51dGlscyA9IGV4cG9ydHMuY2FsYyA9IGV4cG9ydHMuZWFzaW5nID0gZXhwb3J0cy5zdmdQYXRoQWRhcHRlciA9IGV4cG9ydHMuc3ZnQWRhcHRlciA9IGV4cG9ydHMuY3NzQWRhcHRlciA9IGV4cG9ydHMuYXR0ckFkYXB0ZXIgPSBleHBvcnRzLmFkYXB0ZXIgPSBleHBvcnRzLnRpbWVsaW5lID0gZXhwb3J0cy5zdGFnZ2VyID0gZXhwb3J0cy5wcm9jZXNzID0gZXhwb3J0cy5pbnB1dCA9IGV4cG9ydHMudHJhY2tJbnB1dCA9IGV4cG9ydHMucGh5c2ljcyA9IGV4cG9ydHMudHdlZW4gPSBleHBvcnRzLmFjdG9yID0gdW5kZWZpbmVkO1xuXG52YXIgX3V0aWxzMiA9IHJlcXVpcmUoJy4vaW5jL3V0aWxzJyk7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY29tYmluZVRyYW5zZm9ybWVycycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIF91dGlsczIuY29tYmluZVRyYW5zZm9ybWVycztcbiAgfVxufSk7XG5cbnZhciBfdGltZXIgPSByZXF1aXJlKCcuL3Byb2Nlc3MvdGltZXInKTtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdzZXRHbG9iYWxEaWxhdGlvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIF90aW1lci5zZXRHbG9iYWxEaWxhdGlvbjtcbiAgfVxufSk7XG5cbnZhciBfQWN0aW9uID0gcmVxdWlyZSgnLi9hY3Rpb25zL0FjdGlvbicpO1xuXG52YXIgX0FjdGlvbjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9BY3Rpb24pO1xuXG52YXIgX0FjdG9yID0gcmVxdWlyZSgnLi9hY3Rpb25zL0FjdG9yJyk7XG5cbnZhciBfQWN0b3IyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfQWN0b3IpO1xuXG52YXIgX1R3ZWVuID0gcmVxdWlyZSgnLi9hY3Rpb25zL1R3ZWVuJyk7XG5cbnZhciBfVHdlZW4yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfVHdlZW4pO1xuXG52YXIgX1BoeXNpY3MgPSByZXF1aXJlKCcuL2FjdGlvbnMvUGh5c2ljcycpO1xuXG52YXIgX1BoeXNpY3MyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfUGh5c2ljcyk7XG5cbnZhciBfVHJhY2sgPSByZXF1aXJlKCcuL2FjdGlvbnMvVHJhY2snKTtcblxudmFyIF9UcmFjazIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9UcmFjayk7XG5cbnZhciBfUHJvY2VzcyA9IHJlcXVpcmUoJy4vcHJvY2Vzcy9Qcm9jZXNzJyk7XG5cbnZhciBfUHJvY2VzczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9Qcm9jZXNzKTtcblxudmFyIF9JbnB1dCA9IHJlcXVpcmUoJy4vaW5wdXQvSW5wdXQnKTtcblxudmFyIF9JbnB1dDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9JbnB1dCk7XG5cbnZhciBfc3RhZ2dlcjIgPSByZXF1aXJlKCcuL2luYy9zdGFnZ2VyJyk7XG5cbnZhciBfc3RhZ2dlcjMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9zdGFnZ2VyMik7XG5cbnZhciBfdGltZWxpbmUyID0gcmVxdWlyZSgnLi9pbmMvdGltZWxpbmUnKTtcblxudmFyIF90aW1lbGluZTMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF90aW1lbGluZTIpO1xuXG52YXIgX2FkYXB0ZXIyID0gcmVxdWlyZSgnLi9hZGFwdGVyL2FkYXB0ZXInKTtcblxudmFyIF9hZGFwdGVyMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2FkYXB0ZXIyKTtcblxudmFyIF9hdHRyQWRhcHRlcjIgPSByZXF1aXJlKCcuL2FkYXB0ZXIvYXR0ci1hZGFwdGVyJyk7XG5cbnZhciBfYXR0ckFkYXB0ZXIzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfYXR0ckFkYXB0ZXIyKTtcblxudmFyIF9jc3NBZGFwdGVyMiA9IHJlcXVpcmUoJy4vYWRhcHRlci9jc3MtYWRhcHRlcicpO1xuXG52YXIgX2Nzc0FkYXB0ZXIzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY3NzQWRhcHRlcjIpO1xuXG52YXIgX3N2Z0FkYXB0ZXIyID0gcmVxdWlyZSgnLi9hZGFwdGVyL3N2Zy1hZGFwdGVyJyk7XG5cbnZhciBfc3ZnQWRhcHRlcjMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9zdmdBZGFwdGVyMik7XG5cbnZhciBfc3ZnUGF0aEFkYXB0ZXIyID0gcmVxdWlyZSgnLi9hZGFwdGVyL3N2Zy1wYXRoLWFkYXB0ZXInKTtcblxudmFyIF9zdmdQYXRoQWRhcHRlcjMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9zdmdQYXRoQWRhcHRlcjIpO1xuXG52YXIgX3ByZXNldEVhc2luZyA9IHJlcXVpcmUoJy4vYWN0aW9ucy9lYXNpbmcvcHJlc2V0LWVhc2luZycpO1xuXG52YXIgX3ByZXNldEVhc2luZzIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9wcmVzZXRFYXNpbmcpO1xuXG52YXIgX2NhbGMyID0gcmVxdWlyZSgnLi9pbmMvY2FsYycpO1xuXG52YXIgX2NhbGMgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChfY2FsYzIpO1xuXG52YXIgX3V0aWxzID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQoX3V0aWxzMik7XG5cbnZhciBfYWxwaGEgPSByZXF1aXJlKCcuL3ZhbHVlLXR5cGVzL2FscGhhJyk7XG5cbnZhciBfYWxwaGEyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfYWxwaGEpO1xuXG52YXIgX2FuZ2xlID0gcmVxdWlyZSgnLi92YWx1ZS10eXBlcy9hbmdsZScpO1xuXG52YXIgX2FuZ2xlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2FuZ2xlKTtcblxudmFyIF9heGVzID0gcmVxdWlyZSgnLi92YWx1ZS10eXBlcy9heGVzJyk7XG5cbnZhciBfYXhlczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9heGVzKTtcblxudmFyIF9jb2xvciA9IHJlcXVpcmUoJy4vdmFsdWUtdHlwZXMvY29sb3InKTtcblxudmFyIF9jb2xvcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jb2xvcik7XG5cbnZhciBfY29tcGxleCA9IHJlcXVpcmUoJy4vdmFsdWUtdHlwZXMvY29tcGxleCcpO1xuXG52YXIgX2NvbXBsZXgyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY29tcGxleCk7XG5cbnZhciBfaGV4ID0gcmVxdWlyZSgnLi92YWx1ZS10eXBlcy9oZXgnKTtcblxudmFyIF9oZXgyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfaGV4KTtcblxudmFyIF9oc2wgPSByZXF1aXJlKCcuL3ZhbHVlLXR5cGVzL2hzbCcpO1xuXG52YXIgX2hzbDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9oc2wpO1xuXG52YXIgX3Bvc2l0aW9ucyA9IHJlcXVpcmUoJy4vdmFsdWUtdHlwZXMvcG9zaXRpb25zJyk7XG5cbnZhciBfcG9zaXRpb25zMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3Bvc2l0aW9ucyk7XG5cbnZhciBfcHggPSByZXF1aXJlKCcuL3ZhbHVlLXR5cGVzL3B4Jyk7XG5cbnZhciBfcHgyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcHgpO1xuXG52YXIgX3JnYiA9IHJlcXVpcmUoJy4vdmFsdWUtdHlwZXMvcmdiJyk7XG5cbnZhciBfcmdiMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JnYik7XG5cbnZhciBfc2NhbGUgPSByZXF1aXJlKCcuL3ZhbHVlLXR5cGVzL3NjYWxlJyk7XG5cbnZhciBfc2NhbGUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfc2NhbGUpO1xuXG52YXIgX3NoYWRvdyA9IHJlcXVpcmUoJy4vdmFsdWUtdHlwZXMvc2hhZG93Jyk7XG5cbnZhciBfc2hhZG93MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3NoYWRvdyk7XG5cbnZhciBfdHJhbnNmb3JtZXJzMiA9IHJlcXVpcmUoJy4vaW5jL3RyYW5zZm9ybWVycycpO1xuXG52YXIgX3RyYW5zZm9ybWVycyA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKF90cmFuc2Zvcm1lcnMyKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQob2JqKSB7IGlmIChvYmogJiYgb2JqLl9fZXNNb2R1bGUpIHsgcmV0dXJuIG9iajsgfSBlbHNlIHsgdmFyIG5ld09iaiA9IHt9OyBpZiAob2JqICE9IG51bGwpIHsgZm9yICh2YXIga2V5IGluIG9iaikgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwga2V5KSkgbmV3T2JqW2tleV0gPSBvYmpba2V5XTsgfSB9IG5ld09iai5kZWZhdWx0ID0gb2JqOyByZXR1cm4gbmV3T2JqOyB9IH1cblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuLy8gUHJvY2Vzc1xudmFyIGFjdG9yID0gZXhwb3J0cy5hY3RvciA9IGZ1bmN0aW9uIChwcm9wcykge1xuICByZXR1cm4gbmV3IF9BY3RvcjIuZGVmYXVsdChwcm9wcyk7XG59O1xuXG4vLyBJbnB1dFxuLy8gQWN0aW9uc1xuXG52YXIgdHdlZW4gPSBleHBvcnRzLnR3ZWVuID0gZnVuY3Rpb24gKHByb3BzKSB7XG4gIHJldHVybiBuZXcgX1R3ZWVuMi5kZWZhdWx0KHByb3BzKTtcbn07XG52YXIgcGh5c2ljcyA9IGV4cG9ydHMucGh5c2ljcyA9IGZ1bmN0aW9uIChwcm9wcykge1xuICByZXR1cm4gbmV3IF9QaHlzaWNzMi5kZWZhdWx0KHByb3BzKTtcbn07XG52YXIgdHJhY2tJbnB1dCA9IGV4cG9ydHMudHJhY2tJbnB1dCA9IGZ1bmN0aW9uICgpIHtcbiAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICBhcmdzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICB9XG5cbiAgcmV0dXJuIG5ldyAoRnVuY3Rpb24ucHJvdG90eXBlLmJpbmQuYXBwbHkoX1RyYWNrMi5kZWZhdWx0LCBbbnVsbF0uY29uY2F0KGFyZ3MpKSkoKTtcbn07XG52YXIgaW5wdXQgPSBleHBvcnRzLmlucHV0ID0gZnVuY3Rpb24gKCkge1xuICBmb3IgKHZhciBfbGVuMiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBBcnJheShfbGVuMiksIF9rZXkyID0gMDsgX2tleTIgPCBfbGVuMjsgX2tleTIrKykge1xuICAgIGFyZ3NbX2tleTJdID0gYXJndW1lbnRzW19rZXkyXTtcbiAgfVxuXG4gIHJldHVybiBuZXcgKEZ1bmN0aW9uLnByb3RvdHlwZS5iaW5kLmFwcGx5KF9JbnB1dDIuZGVmYXVsdCwgW251bGxdLmNvbmNhdChhcmdzKSkpKCk7XG59O1xudmFyIHByb2Nlc3MgPSBleHBvcnRzLnByb2Nlc3MgPSBmdW5jdGlvbiAoKSB7XG4gIGZvciAodmFyIF9sZW4zID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IEFycmF5KF9sZW4zKSwgX2tleTMgPSAwOyBfa2V5MyA8IF9sZW4zOyBfa2V5MysrKSB7XG4gICAgYXJnc1tfa2V5M10gPSBhcmd1bWVudHNbX2tleTNdO1xuICB9XG5cbiAgcmV0dXJuIG5ldyAoRnVuY3Rpb24ucHJvdG90eXBlLmJpbmQuYXBwbHkoX1Byb2Nlc3MyLmRlZmF1bHQsIFtudWxsXS5jb25jYXQoYXJncykpKSgpO1xufTtcbmV4cG9ydHMuc3RhZ2dlciA9IF9zdGFnZ2VyMy5kZWZhdWx0O1xuZXhwb3J0cy50aW1lbGluZSA9IF90aW1lbGluZTMuZGVmYXVsdDtcblxuLy8gQWRhcHRlcnNcblxuZXhwb3J0cy5hZGFwdGVyID0gX2FkYXB0ZXIzLmRlZmF1bHQ7XG5leHBvcnRzLmF0dHJBZGFwdGVyID0gX2F0dHJBZGFwdGVyMy5kZWZhdWx0O1xuZXhwb3J0cy5jc3NBZGFwdGVyID0gX2Nzc0FkYXB0ZXIzLmRlZmF1bHQ7XG5leHBvcnRzLnN2Z0FkYXB0ZXIgPSBfc3ZnQWRhcHRlcjMuZGVmYXVsdDtcbmV4cG9ydHMuc3ZnUGF0aEFkYXB0ZXIgPSBfc3ZnUGF0aEFkYXB0ZXIzLmRlZmF1bHQ7XG5cbi8vIEVhc2luZ1xuXG5leHBvcnRzLmVhc2luZyA9IF9wcmVzZXRFYXNpbmcyLmRlZmF1bHQ7XG5cbi8vIFV0aWxzXG5cbmV4cG9ydHMuY2FsYyA9IF9jYWxjO1xuZXhwb3J0cy51dGlscyA9IF91dGlscztcblxuLy8gVmFsdWUgdHlwZXNcblxuZXhwb3J0cy5hbHBoYVR5cGUgPSBfYWxwaGEyLmRlZmF1bHQ7XG5leHBvcnRzLmFuZ2xlVHlwZSA9IF9hbmdsZTIuZGVmYXVsdDtcbmV4cG9ydHMuYXhlc1R5cGUgPSBfYXhlczIuZGVmYXVsdDtcbmV4cG9ydHMuY29sb3JUeXBlID0gX2NvbG9yMi5kZWZhdWx0O1xuZXhwb3J0cy5jb21wbGV4VHlwZSA9IF9jb21wbGV4Mi5kZWZhdWx0O1xuZXhwb3J0cy5oZXhUeXBlID0gX2hleDIuZGVmYXVsdDtcbmV4cG9ydHMuaHNsVHlwZSA9IF9oc2wyLmRlZmF1bHQ7XG5leHBvcnRzLnBvc2l0aW9uc1R5cGUgPSBfcG9zaXRpb25zMi5kZWZhdWx0O1xuZXhwb3J0cy5weFR5cGUgPSBfcHgyLmRlZmF1bHQ7XG5leHBvcnRzLnJnYlR5cGUgPSBfcmdiMi5kZWZhdWx0O1xuZXhwb3J0cy5zY2FsZVR5cGUgPSBfc2NhbGUyLmRlZmF1bHQ7XG5leHBvcnRzLnNoYWRvd1R5cGUgPSBfc2hhZG93Mi5kZWZhdWx0O1xuXG4vLyBUcmFuc2Zvcm1lcnNcblxuZXhwb3J0cy50cmFuc2Zvcm1lcnMgPSBfdHJhbnNmb3JtZXJzO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluTnlZeTl3YjNCdGIzUnBiMjR1YW5NaVhTd2libUZ0WlhNaU9sdGRMQ0p0WVhCd2FXNW5jeUk2SWpzN096czdPenM3T3p0dFFrRnJRM0ZDTEcxQ1FVRnRRanM3T3pzN096czdPMnRDUVVNdlFpeHBRa0ZCYVVJN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN1FVRjBRbTVDTEVsQlFVMHNTMEZCU3l4WFFVRk1MRXRCUVVzc1IwRkJSeXhWUVVGRExFdEJRVXM3VTBGQlN5eHZRa0ZCVlN4TFFVRkxMRU5CUVVNN1EwRkJRVHM3T3p0QlFVRkRPMEZCUXpGRExFbEJRVTBzUzBGQlN5eFhRVUZNTEV0QlFVc3NSMEZCUnl4VlFVRkRMRXRCUVVzN1UwRkJTeXh2UWtGQlZTeExRVUZMTEVOQlFVTTdRMEZCUVN4RFFVRkRPMEZCUXpGRExFbEJRVTBzVDBGQlR5eFhRVUZRTEU5QlFVOHNSMEZCUnl4VlFVRkRMRXRCUVVzN1UwRkJTeXh6UWtGQldTeExRVUZMTEVOQlFVTTdRMEZCUVN4RFFVRkRPMEZCUXpsRExFbEJRVTBzVlVGQlZTeFhRVUZXTEZWQlFWVXNSMEZCUnp0dlEwRkJTU3hKUVVGSk8wRkJRVW9zVVVGQlNUczdPekpGUVVGclFpeEpRVUZKTzBOQlFVTXNRMEZCUXp0QlFVTnVSQ3hKUVVGTkxFdEJRVXNzVjBGQlRDeExRVUZMTEVkQlFVYzdjVU5CUVVrc1NVRkJTVHRCUVVGS0xGRkJRVWs3T3pzeVJVRkJhMElzU1VGQlNUdERRVUZETEVOQlFVTTdRVUZET1VNc1NVRkJUU3hQUVVGUExGZEJRVkFzVDBGQlR5eEhRVUZITzNGRFFVRkpMRWxCUVVrN1FVRkJTaXhSUVVGSk96czdOa1ZCUVc5Q0xFbEJRVWs3UTBGQlF5eERRVUZETzFGQlEyeEVMRTlCUVU4N1VVRkRVQ3hSUVVGUk96czdPMUZCUjFJc1QwRkJUenRSUVVOUUxGZEJRVmM3VVVGRFdDeFZRVUZWTzFGQlExWXNWVUZCVlR0UlFVTldMR05CUVdNN096czdVVUZIWkN4TlFVRk5PenM3TzFGQlIwUXNTVUZCU1R0UlFVTktMRXRCUVVzN096czdVVUZKVml4VFFVRlRPMUZCUTFRc1UwRkJVenRSUVVOVUxGRkJRVkU3VVVGRFVpeFRRVUZUTzFGQlExUXNWMEZCVnp0UlFVTllMRTlCUVU4N1VVRkRVQ3hQUVVGUE8xRkJRMUFzWVVGQllUdFJRVU5pTEUxQlFVMDdVVUZEVGl4UFFVRlBPMUZCUTFBc1UwRkJVenRSUVVOVUxGVkJRVlU3T3pzN1VVRkhUQ3haUVVGWklpd2labWxzWlNJNkluQnZjRzF2ZEdsdmJpNXFjeUlzSW5OdmRYSmpaVkp2YjNRaU9pSXZWWE5sY25NdlRXRjBkRkJsY25KNUwxTnBkR1Z6TDNCdmNHMXZkR2x2YmlJc0luTnZkWEpqWlhORGIyNTBaVzUwSWpwYklpOHZJRUZqZEdsdmJuTmNibWx0Y0c5eWRDQkJZM1JwYjI0Z1puSnZiU0FuTGk5aFkzUnBiMjV6TDBGamRHbHZiaWM3WEc1cGJYQnZjblFnUVdOMGIzSWdabkp2YlNBbkxpOWhZM1JwYjI1ekwwRmpkRzl5Snp0Y2JtbHRjRzl5ZENCVWQyVmxiaUJtY205dElDY3VMMkZqZEdsdmJuTXZWSGRsWlc0bk8xeHVhVzF3YjNKMElGQm9lWE5wWTNNZ1puSnZiU0FuTGk5aFkzUnBiMjV6TDFCb2VYTnBZM01uTzF4dWFXMXdiM0owSUZSeVlXTnJJR1p5YjIwZ0p5NHZZV04wYVc5dWN5OVVjbUZqYXljN1hHNWNiaTh2SUZCeWIyTmxjM05jYm1sdGNHOXlkQ0JRY205alpYTnpJR1p5YjIwZ0p5NHZjSEp2WTJWemN5OVFjbTlqWlhOekp6dGNibHh1THk4Z1NXNXdkWFJjYm1sdGNHOXlkQ0JKYm5CMWRDQm1jbTl0SUNjdUwybHVjSFYwTDBsdWNIVjBKenRjYmx4dVpYaHdiM0owSUdOdmJuTjBJR0ZqZEc5eUlEMGdLSEJ5YjNCektTQTlQaUJ1WlhjZ1FXTjBiM0lvY0hKdmNITXBPMXh1Wlhod2IzSjBJR052Ym5OMElIUjNaV1Z1SUQwZ0tIQnliM0J6S1NBOVBpQnVaWGNnVkhkbFpXNG9jSEp2Y0hNcE8xeHVaWGh3YjNKMElHTnZibk4wSUhCb2VYTnBZM01nUFNBb2NISnZjSE1wSUQwK0lHNWxkeUJRYUhsemFXTnpLSEJ5YjNCektUdGNibVY0Y0c5eWRDQmpiMjV6ZENCMGNtRmphMGx1Y0hWMElEMGdLQzR1TG1GeVozTXBJRDArSUc1bGR5QlVjbUZqYXlndUxpNWhjbWR6S1R0Y2JtVjRjRzl5ZENCamIyNXpkQ0JwYm5CMWRDQTlJQ2d1TGk1aGNtZHpLU0E5UGlCdVpYY2dTVzV3ZFhRb0xpNHVZWEpuY3lrN1hHNWxlSEJ2Y25RZ1kyOXVjM1FnY0hKdlkyVnpjeUE5SUNndUxpNWhjbWR6S1NBOVBpQnVaWGNnVUhKdlkyVnpjeWd1TGk1aGNtZHpLVHRjYm1WNGNHOXlkQ0J6ZEdGbloyVnlJR1p5YjIwZ0p5NHZhVzVqTDNOMFlXZG5aWEluTzF4dVpYaHdiM0owSUhScGJXVnNhVzVsSUdaeWIyMGdKeTR2YVc1akwzUnBiV1ZzYVc1bEp6dGNibHh1THk4Z1FXUmhjSFJsY25OY2JtVjRjRzl5ZENCaFpHRndkR1Z5SUdaeWIyMGdKeTR2WVdSaGNIUmxjaTloWkdGd2RHVnlKenRjYm1WNGNHOXlkQ0JoZEhSeVFXUmhjSFJsY2lCbWNtOXRJQ2N1TDJGa1lYQjBaWEl2WVhSMGNpMWhaR0Z3ZEdWeUp6dGNibVY0Y0c5eWRDQmpjM05CWkdGd2RHVnlJR1p5YjIwZ0p5NHZZV1JoY0hSbGNpOWpjM010WVdSaGNIUmxjaWM3WEc1bGVIQnZjblFnYzNablFXUmhjSFJsY2lCbWNtOXRJQ2N1TDJGa1lYQjBaWEl2YzNabkxXRmtZWEIwWlhJbk8xeHVaWGh3YjNKMElITjJaMUJoZEdoQlpHRndkR1Z5SUdaeWIyMGdKeTR2WVdSaGNIUmxjaTl6ZG1jdGNHRjBhQzFoWkdGd2RHVnlKenRjYmx4dUx5OGdSV0Z6YVc1blhHNWxlSEJ2Y25RZ1pXRnphVzVuSUdaeWIyMGdKeTR2WVdOMGFXOXVjeTlsWVhOcGJtY3ZjSEpsYzJWMExXVmhjMmx1WnljN1hHNWNiaTh2SUZWMGFXeHpYRzVsZUhCdmNuUWdLaUJoY3lCallXeGpJR1p5YjIwZ0p5NHZhVzVqTDJOaGJHTW5PMXh1Wlhod2IzSjBJQ29nWVhNZ2RYUnBiSE1zSUhzZ1kyOXRZbWx1WlZSeVlXNXpabTl5YldWeWN5QjlJR1p5YjIwZ0p5NHZhVzVqTDNWMGFXeHpKenRjYm1WNGNHOXlkQ0I3SUhObGRFZHNiMkpoYkVScGJHRjBhVzl1SUgwZ1puSnZiU0FuTGk5d2NtOWpaWE56TDNScGJXVnlKenRjYmx4dUx5OGdWbUZzZFdVZ2RIbHdaWE5jYm1WNGNHOXlkQ0JoYkhCb1lWUjVjR1VnWm5KdmJTQW5MaTkyWVd4MVpTMTBlWEJsY3k5aGJIQm9ZU2M3WEc1bGVIQnZjblFnWVc1bmJHVlVlWEJsSUdaeWIyMGdKeTR2ZG1Gc2RXVXRkSGx3WlhNdllXNW5iR1VuTzF4dVpYaHdiM0owSUdGNFpYTlVlWEJsSUdaeWIyMGdKeTR2ZG1Gc2RXVXRkSGx3WlhNdllYaGxjeWM3WEc1bGVIQnZjblFnWTI5c2IzSlVlWEJsSUdaeWIyMGdKeTR2ZG1Gc2RXVXRkSGx3WlhNdlkyOXNiM0luTzF4dVpYaHdiM0owSUdOdmJYQnNaWGhVZVhCbElHWnliMjBnSnk0dmRtRnNkV1V0ZEhsd1pYTXZZMjl0Y0d4bGVDYzdYRzVsZUhCdmNuUWdhR1Y0Vkhsd1pTQm1jbTl0SUNjdUwzWmhiSFZsTFhSNWNHVnpMMmhsZUNjN1hHNWxlSEJ2Y25RZ2FITnNWSGx3WlNCbWNtOXRJQ2N1TDNaaGJIVmxMWFI1Y0dWekwyaHpiQ2M3WEc1bGVIQnZjblFnY0c5emFYUnBiMjV6Vkhsd1pTQm1jbTl0SUNjdUwzWmhiSFZsTFhSNWNHVnpMM0J2YzJsMGFXOXVjeWM3WEc1bGVIQnZjblFnY0hoVWVYQmxJR1p5YjIwZ0p5NHZkbUZzZFdVdGRIbHdaWE12Y0hnbk8xeHVaWGh3YjNKMElISm5ZbFI1Y0dVZ1puSnZiU0FuTGk5MllXeDFaUzEwZVhCbGN5OXlaMkluTzF4dVpYaHdiM0owSUhOallXeGxWSGx3WlNCbWNtOXRJQ2N1TDNaaGJIVmxMWFI1Y0dWekwzTmpZV3hsSnp0Y2JtVjRjRzl5ZENCemFHRmtiM2RVZVhCbElHWnliMjBnSnk0dmRtRnNkV1V0ZEhsd1pYTXZjMmhoWkc5M0p6dGNibHh1THk4Z1ZISmhibk5tYjNKdFpYSnpYRzVsZUhCdmNuUWdLaUJoY3lCMGNtRnVjMlp2Y20xbGNuTWdabkp2YlNBbkxpOXBibU12ZEhKaGJuTm1iM0p0WlhKekp6c2lYWDA9XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9wb3Btb3Rpb24uanNcbiAqKiBtb2R1bGUgaWQgPSAxXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG52YXIgQ0FNRUxfQ0FTRV9QQVRURVJOID0gLyhbYS16XSkoW0EtWl0pL2c7XG52YXIgUkVQTEFDRV9URU1QTEFURSA9ICckMS0kMic7XG52YXIgSEFTX1BFUkZPUk1BTkNFX05PVyA9IHR5cGVvZiBwZXJmb3JtYW5jZSAhPT0gJ3VuZGVmaW5lZCcgJiYgcGVyZm9ybWFuY2Uubm93O1xuXG4vKlxuICAgIEdldCB2YXIgdHlwZSBhcyBzdHJpbmdcbiAgICBcbiAgICBAcGFyYW06IFZhcmlhYmxlIHRvIHRlc3RcbiAgICBAcmV0dXJuIFtzdHJpbmddOiBSZXR1cm5zLCBmb3IgaW5zdGFuY2UgJ09iamVjdCcgaWYgW29iamVjdCBPYmplY3RdXG4qL1xudmFyIHZhclR5cGUgPSBmdW5jdGlvbiAodmFyaWFibGUpIHtcbiAgICByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHZhcmlhYmxlKS5zbGljZSg4LCAtMSk7XG59O1xuXG4vKlxuICAgIENvbnZlcnQgY2FtZWxDYXNlIHRvIGRhc2gtY2FzZVxuXG4gICAgQHBhcmFtIFtzdHJpbmddXG4gICAgQHJldHVybiBbc3RyaW5nXVxuKi9cbnZhciBjYW1lbFRvRGFzaCA9IGV4cG9ydHMuY2FtZWxUb0Rhc2ggPSBmdW5jdGlvbiAoc3RyaW5nKSB7XG4gICAgcmV0dXJuIHN0cmluZy5yZXBsYWNlKENBTUVMX0NBU0VfUEFUVEVSTiwgUkVQTEFDRV9URU1QTEFURSkudG9Mb3dlckNhc2UoKTtcbn07XG5cbi8qXG4gICAgQ29tYmluZSB0cmFuc2Zvcm1lcnMgaW50byBvbmUgZnVuY3Rpb24gdGhhdCBjYWxscyBldmVyeVxuICAgIHRyYW5zZm9ybWVyIGluIHRoZSBhcnJheSBhbmQgcmV0dXJucyB0aGUgcmVzdWx0XG5cbiAgICBAcGFyYW0gW2FycmF5XVxuICAgIEByZXR1cm4gW2Z1bmN0aW9uXVxuKi9cbnZhciBjb21iaW5lVHJhbnNmb3JtZXJzID0gZXhwb3J0cy5jb21iaW5lVHJhbnNmb3JtZXJzID0gZnVuY3Rpb24gKHRyYW5zZm9ybWVycykge1xuICAgIHZhciBudW1UcmFuc2Zvcm1lcnMgPSB0cmFuc2Zvcm1lcnMubGVuZ3RoO1xuICAgIHZhciBpID0gMDtcblxuICAgIC8qXG4gICAgICAgIEBwYXJhbSBbbnVtYmVyXVxuICAgICAgICBAcGFyYW0gW3N0cmluZ11cbiAgICAgICAgQHBhcmFtIFtBY3Rpb25dXG4gICAgICAgIEByZXR1cm4gW251bWJlcl1cbiAgICAqL1xuICAgIHJldHVybiBmdW5jdGlvbiAodiwga2V5LCBhKSB7XG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBudW1UcmFuc2Zvcm1lcnM7IGkrKykge1xuICAgICAgICAgICAgdiA9IHRyYW5zZm9ybWVyc1tpXSh2LCBrZXksIGEpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHY7XG4gICAgfTtcbn07XG5cbnZhciBjcmVhdGVEZWxpbWl0ZWQgPSBleHBvcnRzLmNyZWF0ZURlbGltaXRlZCA9IGZ1bmN0aW9uICh2YWx1ZXMsIHRlcm1zLCBkZWxpbWl0ZXIsIGNob3ApIHtcbiAgICB2YXIgbnVtVGVybXMgPSB0ZXJtcy5sZW5ndGg7XG4gICAgdmFyIGNvbWJpbmVkID0gJyc7XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IG51bVRlcm1zOyBpKyspIHtcbiAgICAgICAgdmFyIHRlcm0gPSB0ZXJtc1tpXTtcbiAgICAgICAgaWYgKHZhbHVlcy5oYXNPd25Qcm9wZXJ0eSh0ZXJtKSkge1xuICAgICAgICAgICAgY29tYmluZWQgKz0gdmFsdWVzW3Rlcm1dICsgZGVsaW1pdGVyO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGNob3ApIHtcbiAgICAgICAgY29tYmluZWQgPSBjb21iaW5lZC5zbGljZSgwLCAtY2hvcCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbWJpbmVkO1xufTtcblxuLypcbiAgICBDcmVhdGUgYSBmdW5jdGlvbiBzdHJpbmdcblxuICAgICcyMHB4JywgJ3RyYW5zbGF0ZScgLT4gJ3RyYW5zbGF0ZSgyMHB4KSdcblxuICAgIEBwYXJhbSBbc3RyaW5nXVxuICAgIEBwYXJhbSBbc3RyaW5nXVxuICAgIEByZXR1cm4gW3N0cmluZ11cbiovXG52YXIgY3JlYXRlRnVuY3Rpb25TdHJpbmcgPSBleHBvcnRzLmNyZWF0ZUZ1bmN0aW9uU3RyaW5nID0gZnVuY3Rpb24gKHZhbHVlLCBwcmVmaXgpIHtcbiAgICByZXR1cm4gcHJlZml4ICsgJygnICsgdmFsdWUgKyAnKSc7XG59O1xuXG4vKlxuICAgIEdlbmVyYXRlIGN1cnJlbnQgdGltZXN0YW1wXG4gICAgXG4gICAgQHJldHVybiBbdGltZXN0YW1wXTogQ3VycmVudCBVTklYIHRpbWVzdGFtcFxuKi9cbnZhciBjdXJyZW50VGltZSA9IGV4cG9ydHMuY3VycmVudFRpbWUgPSBIQVNfUEVSRk9STUFOQ0VfTk9XID8gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBwZXJmb3JtYW5jZS5ub3coKTtcbn0gOiBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xufTtcblxuLypcbiAgICBTcGxpdCBjb2xvciBzdHJpbmcgaW50byBtYXAgb2YgY29sb3IgcHJvcGVydGllc1xuXG4gICAgXCJyZ2JhKDI1NSwgMjU1LCAyNTUsIDApXCIsIFtcIlJlZFwiLCAnR3JlZW5cIiwgXCJCbHVlXCIsIFwiQWxwaGFcIl1cblxuICAgIHsgUmVkOiAyNTUuLi4gfVxuKi9cbnZhciBnZXRDb2xvclZhbHVlcyA9IGV4cG9ydHMuZ2V0Q29sb3JWYWx1ZXMgPSBmdW5jdGlvbiAodmFsdWUsIGNvbG9yVGVybXMpIHtcbiAgICB2YXIgbnVtQ29sb3JUZXJtcyA9IGNvbG9yVGVybXMubGVuZ3RoO1xuICAgIHZhciBjb2xvclZhbHVlcyA9IHt9O1xuICAgIHZhciBjb2xvcnMgPSBzcGxpdENvbW1hRGVsaW1pdGVkKGdldFZhbHVlRnJvbUZ1bmN0aW9uU3RyaW5nKHZhbHVlKSk7XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IG51bUNvbG9yVGVybXM7IGkrKykge1xuICAgICAgICBjb2xvclZhbHVlc1tjb2xvclRlcm1zW2ldXSA9IGNvbG9yc1tpXSAhPT0gdW5kZWZpbmVkID8gY29sb3JzW2ldIDogMTtcbiAgICB9XG5cbiAgICByZXR1cm4gY29sb3JWYWx1ZXM7XG59O1xuXG4vKlxuICAgIEdldCB2YWx1ZSBmcm9tIGZ1bmN0aW9uIHN0cmluZ1xuXG4gICAgXCJ0cmFuc2xhdGVYKDIwcHgpXCIgLT4gXCIyMHB4XCJcbiovXG52YXIgZ2V0VmFsdWVGcm9tRnVuY3Rpb25TdHJpbmcgPSBleHBvcnRzLmdldFZhbHVlRnJvbUZ1bmN0aW9uU3RyaW5nID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgcmV0dXJuIHZhbHVlLnN1YnN0cmluZyh2YWx1ZS5pbmRleE9mKCcoJykgKyAxLCB2YWx1ZS5sYXN0SW5kZXhPZignKScpKTtcbn07XG5cbi8qXG4gICAgQ2hlY2sgaWYgdHdvIG9iamVjdHMgaGF2ZSBjaGFuZ2VkIGZyb20gZWFjaCBvdGhlclxuICAgIFxuICAgIEBwYXJhbSBbb2JqZWN0XTogSW5wdXQgQVxuICAgIEBwYXJhbSBbb2JqZWN0XTogSW5wdXQgQlxuICAgIEByZXR1cm4gW2Jvb2xlYW5dOiBUcnVlIGlmIGRpZmZlcmVudFxuKi9cbnZhciBoYXNDaGFuZ2VkID0gZXhwb3J0cy5oYXNDaGFuZ2VkID0gZnVuY3Rpb24gKGEsIGIpIHtcbiAgICB2YXIgY2hhbmdlZCA9IGZhbHNlO1xuXG4gICAgZm9yICh2YXIga2V5IGluIGEpIHtcbiAgICAgICAgaWYgKGEuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgICAgaWYgKGhhc1Byb3BlcnR5KGIsIGtleSkpIHtcbiAgICAgICAgICAgICAgICBpZiAoYVtrZXldICE9PSBiW2tleV0pIHtcbiAgICAgICAgICAgICAgICAgICAgY2hhbmdlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjaGFuZ2VkID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBjaGFuZ2VkO1xufTtcblxuLypcbiAgICBDaGVjayBpZiBvYmplY3QgaGFzIHByb3BlcnR5IGFuZCBpdCBpc24ndCB1bmRlZmluZWRcblxuICAgIEBwYXJhbSBbb2JqZWN0XVxuICAgIEBwYXJhbSBbc3RyaW5nXVxuICAgIEByZXR1cm4gW2Jvb2xlYW5dXG4qL1xudmFyIGhhc1Byb3BlcnR5ID0gZXhwb3J0cy5oYXNQcm9wZXJ0eSA9IGZ1bmN0aW9uIChvYmplY3QsIHByb3BlcnR5TmFtZSkge1xuICAgIHJldHVybiBvYmplY3QuaGFzT3duUHJvcGVydHkocHJvcGVydHlOYW1lKSAmJiBvYmplY3RbcHJvcGVydHlOYW1lXSAhPT0gdW5kZWZpbmVkO1xufTtcblxuLypcbiAgICBJcyB1dGlscyB2YXIgYW4gYXJyYXkgPyBcbiAgICBcbiAgICBAcGFyYW06IFZhcmlhYmxlIHRvIHRlc3RcbiAgICBAcmV0dXJuIFtib29sZWFuXTogUmV0dXJucyB0cnVlIGlmIHV0aWxzLnZhclR5cGUgPT09ICdBcnJheSdcbiovXG52YXIgaXNBcnJheSA9IGV4cG9ydHMuaXNBcnJheSA9IGZ1bmN0aW9uIChhcnIpIHtcbiAgICByZXR1cm4gdmFyVHlwZShhcnIpID09PSAnQXJyYXknO1xufTtcblxuLypcbiAgICBJcyB1dGlscyB2YXIgYSBmdW5jdGlvbiA/IFxuICAgIFxuICAgIEBwYXJhbTogVmFyaWFibGUgdG8gdGVzdFxuICAgIEByZXR1cm4gW2Jvb2xlYW5dOiBSZXR1cm5zIHRydWUgaWYgdXRpbHMudmFyVHlwZSA9PT0gJ0Z1bmN0aW9uJ1xuKi9cbnZhciBpc0Z1bmMgPSBleHBvcnRzLmlzRnVuYyA9IGZ1bmN0aW9uIChvYmopIHtcbiAgICByZXR1cm4gdmFyVHlwZShvYmopID09PSAnRnVuY3Rpb24nO1xufTtcblxuLypcbiAgICBJcyB1dGlscyB2YXIgYSBudW1iZXI/XG4gICAgXG4gICAgQHBhcmFtOiBWYXJpYWJsZSB0byB0ZXN0XG4gICAgQHJldHVybiBbYm9vbGVhbl06IFJldHVybnMgdHJ1ZSBpZiB0eXBlb2YgPT09ICdudW1iZXInXG4qL1xudmFyIGlzTnVtID0gZXhwb3J0cy5pc051bSA9IGZ1bmN0aW9uIChudW0pIHtcbiAgICByZXR1cm4gdHlwZW9mIG51bSA9PT0gJ251bWJlcic7XG59O1xuXG4vKlxuICAgIElzIHV0aWxzIHZhciBhbiBvYmplY3Q/XG4gICAgXG4gICAgQHBhcmFtOiBWYXJpYWJsZSB0byB0ZXN0XG4gICAgQHJldHVybiBbYm9vbGVhbl06IFJldHVybnMgdHJ1ZSBpZiB0eXBlb2YgPT09ICdvYmplY3QnXG4qL1xudmFyIGlzT2JqID0gZXhwb3J0cy5pc09iaiA9IGZ1bmN0aW9uIChvYmopIHtcbiAgICByZXR1cm4gdHlwZW9mIG9iaiA9PT0gJ29iamVjdCc7XG59O1xuXG4vKlxuICAgIElzIHV0aWxzIGEgcmVsYXRpdmUgdmFsdWUgYXNzaWdubWVudD9cbiAgICBcbiAgICBAcGFyYW0gW3N0cmluZ106IFZhcmlhYmxlIHRvIHRlc3RcbiAgICBAcmV0dXJuIFtib29sZWFuXTogSWYgdXRpbHMgbG9va3MgbGlrZSBhIHJlbGF0aXZlIHZhbHVlIGFzc2lnbm1lbnRcbiovXG52YXIgaXNSZWxhdGl2ZVZhbHVlID0gZXhwb3J0cy5pc1JlbGF0aXZlVmFsdWUgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICByZXR1cm4gdmFsdWUgJiYgdmFsdWUuaW5kZXhPZiAmJiB2YWx1ZS5pbmRleE9mKCc9JykgPiAwID8gdHJ1ZSA6IGZhbHNlO1xufTtcblxuLypcbiAgICBJcyB1dGlscyB2YXIgYSBzdHJpbmcgPyBcbiAgICBcbiAgICBAcGFyYW06IFZhcmlhYmxlIHRvIHRlc3RcbiAgICBAcmV0dXJuIFtib29sZWFuXTogUmV0dXJucyB0cnVlIGlmIHR5cGVvZiBzdHIgPT09ICdzdHJpbmcnXG4qL1xudmFyIGlzU3RyaW5nID0gZXhwb3J0cy5pc1N0cmluZyA9IGZ1bmN0aW9uIChzdHIpIHtcbiAgICByZXR1cm4gdHlwZW9mIHN0ciA9PT0gJ3N0cmluZyc7XG59O1xuXG4vKlxuICAgIEBwYXJhbSBbc3RyaW5nIHx8IE5vZGVMaXN0XTpcbiAgICAgICAgSWYgc3RyaW5nLCB0cmVhdGVkIGFzIHNlbGVjdG9yLlxuICAgICAgICBJZiBub3QsIHRyZWF0ZWQgYXMgcHJlZXhpc3RpbmcgTm9kZUxpc3RcblxuICAgIEByZXR1cm4gW0FycmF5XVxuKi9cbnZhciBzZWxlY3REb20gPSBleHBvcnRzLnNlbGVjdERvbSA9IGZ1bmN0aW9uIChzZWxlY3Rvcikge1xuICAgIHZhciBub2RlcyA9IHR5cGVvZiBzZWxlY3RvciA9PT0gJ3N0cmluZycgPyBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9yKSA6IHNlbGVjdG9yO1xuICAgIHJldHVybiBub2Rlcy5sZW5ndGggPyBbXS5zbGljZS5jYWxsKG5vZGVzKSA6IFtdLnB1c2gobm9kZXMpO1xufTtcblxuLypcbiAgICBTcGxpdCBjb21tYS1kZWxpbWl0ZWQgc3RyaW5nXG5cbiAgICBcImZvbyxiYXJcIiAtPiBbXCJmb29cIiwgXCJiYXJcIl1cblxuICAgIEBwYXJhbSBbc3RyaW5nXVxuICAgIEByZXR1cm4gW2FycmF5XVxuKi9cbnZhciBzcGxpdENvbW1hRGVsaW1pdGVkID0gZXhwb3J0cy5zcGxpdENvbW1hRGVsaW1pdGVkID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgcmV0dXJuIGlzU3RyaW5nKHZhbHVlKSA/IHZhbHVlLnNwbGl0KC8sXFxzKi8pIDogW3ZhbHVlXTtcbn07XG5cbi8qXG4gICAgU3BsaXQgc3BhY2UtZGVsaW1pdGVkIHN0cmluZ1xuXG4gICAgXCJmb28gYmFyXCIgLT4gW1wiZm9vXCIsIFwiYmFyXCJdXG5cbiAgICBAcGFyYW0gW3N0cmluZ11cbiAgICBAcmV0dXJuIFthcnJheV1cbiovXG52YXIgc3BsaXRTcGFjZURlbGltaXRlZCA9IGV4cG9ydHMuc3BsaXRTcGFjZURlbGltaXRlZCA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgIHJldHVybiBpc1N0cmluZyh2YWx1ZSkgPyB2YWx1ZS5zcGxpdCgnICcpIDogW3ZhbHVlXTtcbn07XG5cbi8qXG4gICAgU3BsaXQgYSB2YWx1ZSBpbnRvIGEgdmFsdWUvdW5pdCBvYmplY3RcbiAgICBcbiAgICAgICAgXCIyMDBweFwiIC0+IHsgdmFsdWU6IDIwMCwgdW5pdDogXCJweFwiIH1cbiAgICAgICAgXG4gICAgQHBhcmFtIFtzdHJpbmddOiBWYWx1ZSB0byBzcGxpdFxuICAgIEByZXR1cm4gW29iamVjdF06IE9iamVjdCB3aXRoIHZhbHVlIGFuZCB1bml0IHByb3BzXG4qL1xudmFyIHNwbGl0VmFsdWVVbml0ID0gZXhwb3J0cy5zcGxpdFZhbHVlVW5pdCA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgIGlmICh2YWx1ZS5tYXRjaCkge1xuICAgICAgICB2YXIgc3BsaXRWYWx1ZSA9IHZhbHVlLm1hdGNoKC8oLT9cXGQqXFwuP1xcZCopKC4qKS8pO1xuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB2YWx1ZTogcGFyc2VGbG9hdChzcGxpdFZhbHVlWzFdKSxcbiAgICAgICAgICAgIHVuaXQ6IHNwbGl0VmFsdWVbMl1cbiAgICAgICAgfTtcbiAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4geyB2YWx1ZTogdmFsdWUgfTtcbiAgICB9XG59O1xuXG4vKlxuICAgIENvbnZlcnQgbnVtYmVyIHRvIHggZGVjaW1hbCBwbGFjZXNcblxuICAgIEBwYXJhbSBbbnVtYmVyXVxuICAgIEBwYXJhbSBbbnVtYmVyXVxuICAgIEByZXR1cm4gW251bWJlcl1cbiovXG52YXIgdG9EZWNpbWFsID0gZXhwb3J0cy50b0RlY2ltYWwgPSBmdW5jdGlvbiAobnVtKSB7XG4gICAgdmFyIHByZWNpc2lvbiA9IGFyZ3VtZW50cy5sZW5ndGggPD0gMSB8fCBhcmd1bWVudHNbMV0gPT09IHVuZGVmaW5lZCA/IDIgOiBhcmd1bWVudHNbMV07XG5cbiAgICBwcmVjaXNpb24gPSBNYXRoLnBvdygxMCwgcHJlY2lzaW9uKTtcbiAgICByZXR1cm4gTWF0aC5yb3VuZChudW0gKiBwcmVjaXNpb24pIC8gcHJlY2lzaW9uO1xufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbk55WXk5cGJtTXZkWFJwYkhNdWFuTWlYU3dpYm1GdFpYTWlPbHRkTENKdFlYQndhVzVuY3lJNklqczdPMEZCUVVFc1NVRkJUU3hyUWtGQmEwSXNSMEZCUnl4cFFrRkJhVUlzUTBGQlF6dEJRVU0zUXl4SlFVRk5MR2RDUVVGblFpeEhRVUZITEU5QlFVOHNRMEZCUXp0QlFVTnFReXhKUVVGTkxHMUNRVUZ0UWl4SFFVRkpMRTlCUVU4c1YwRkJWeXhMUVVGTExGZEJRVmNzU1VGQlNTeFhRVUZYTEVOQlFVTXNSMEZCUnl4QlFVRkRPenM3T3pzN096dEJRVUZETEVGQlVYQkdMRWxCUVUwc1QwRkJUeXhIUVVGSExGVkJRVUVzVVVGQlVUdFhRVUZKTEUxQlFVMHNRMEZCUXl4VFFVRlRMRU5CUVVNc1VVRkJVU3hEUVVGRExFbEJRVWtzUTBGQlF5eFJRVUZSTEVOQlFVTXNRMEZCUXl4TFFVRkxMRU5CUVVNc1EwRkJReXhGUVVGRkxFTkJRVU1zUTBGQlF5eERRVUZETzBOQlFVRTdPenM3T3pzN08wRkJRVU1zUVVGUk0wVXNTVUZCVFN4WFFVRlhMRmRCUVZnc1YwRkJWeXhIUVVGSExGVkJRVU1zVFVGQlRUdFhRVUZMTEUxQlFVMHNRMEZCUXl4UFFVRlBMRU5CUVVNc2EwSkJRV3RDTEVWQlFVVXNaMEpCUVdkQ0xFTkJRVU1zUTBGQlF5eFhRVUZYTEVWQlFVVTdRMEZCUVRzN096czdPenM3TzBGQlFVTXNRVUZUYmtjc1NVRkJUU3h0UWtGQmJVSXNWMEZCYmtJc2JVSkJRVzFDTEVkQlFVY3NWVUZCUXl4WlFVRlpMRVZCUVVzN1FVRkRha1FzVVVGQlRTeGxRVUZsTEVkQlFVY3NXVUZCV1N4RFFVRkRMRTFCUVUwc1EwRkJRenRCUVVNMVF5eFJRVUZKTEVOQlFVTXNSMEZCUnl4RFFVRkRPenM3T3pzN096dEJRVUZETEVGQlVWWXNWMEZCVHl4VlFVRkRMRU5CUVVNc1JVRkJSU3hIUVVGSExFVkJRVVVzUTBGQlF5eEZRVUZMTzBGQlEyeENMR0ZCUVVzc1EwRkJReXhIUVVGSExFTkJRVU1zUlVGQlJTeERRVUZETEVkQlFVY3NaVUZCWlN4RlFVRkZMRU5CUVVNc1JVRkJSU3hGUVVGRk8wRkJRMnhETEdGQlFVTXNSMEZCUnl4WlFVRlpMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eEZRVUZGTEVkQlFVY3NSVUZCUlN4RFFVRkRMRU5CUVVNc1EwRkJRenRUUVVOc1F6czdRVUZGUkN4bFFVRlBMRU5CUVVNc1EwRkJRenRMUVVOYUxFTkJRVU03UTBGRFRDeERRVUZET3p0QlFVVkxMRWxCUVUwc1pVRkJaU3hYUVVGbUxHVkJRV1VzUjBGQlJ5eFZRVUZETEUxQlFVMHNSVUZCUlN4TFFVRkxMRVZCUVVVc1UwRkJVeXhGUVVGRkxFbEJRVWtzUlVGQlN6dEJRVU12UkN4UlFVRk5MRkZCUVZFc1IwRkJSeXhMUVVGTExFTkJRVU1zVFVGQlRTeERRVUZETzBGQlF6bENMRkZCUVVrc1VVRkJVU3hIUVVGSExFVkJRVVVzUTBGQlF6czdRVUZGYkVJc1UwRkJTeXhKUVVGSkxFTkJRVU1zUjBGQlJ5eERRVUZETEVWQlFVVXNRMEZCUXl4SFFVRkhMRkZCUVZFc1JVRkJSU3hEUVVGRExFVkJRVVVzUlVGQlJUdEJRVU12UWl4WlFVRk5MRWxCUVVrc1IwRkJSeXhMUVVGTExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTTdRVUZEZEVJc1dVRkJTU3hOUVVGTkxFTkJRVU1zWTBGQll5eERRVUZETEVsQlFVa3NRMEZCUXl4RlFVRkZPMEZCUXpkQ0xHOUNRVUZSTEVsQlFVa3NUVUZCVFN4RFFVRkRMRWxCUVVrc1EwRkJReXhIUVVGSExGTkJRVk1zUTBGQlF6dFRRVU40UXp0TFFVTktPenRCUVVWRUxGRkJRVWtzU1VGQlNTeEZRVUZGTzBGQlEwNHNaMEpCUVZFc1IwRkJSeXhSUVVGUkxFTkJRVU1zUzBGQlN5eERRVUZETEVOQlFVTXNSVUZCUlN4RFFVRkRMRWxCUVVrc1EwRkJReXhEUVVGRE8wdEJRM1pET3p0QlFVVkVMRmRCUVU4c1VVRkJVU3hEUVVGRE8wTkJRMjVDT3pzN096czdPenM3T3p0QlFVRkRMRUZCVjBzc1NVRkJUU3h2UWtGQmIwSXNWMEZCY0VJc2IwSkJRVzlDTEVkQlFVY3NWVUZCUXl4TFFVRkxMRVZCUVVVc1RVRkJUVHRYUVVGUkxFMUJRVTBzVTBGQlNTeExRVUZMTzBOQlFVYzdPenM3T3pzN1FVRkJReXhCUVU5MFJTeEpRVUZOTEZkQlFWY3NWMEZCV0N4WFFVRlhMRWRCUVVjc2JVSkJRVzFDTEVkQlFVYzdWMEZCVFN4WFFVRlhMRU5CUVVNc1IwRkJSeXhGUVVGRk8wTkJRVUVzUjBGQlJ6dFhRVUZOTEVsQlFVa3NTVUZCU1N4RlFVRkZMRU5CUVVNc1QwRkJUeXhGUVVGRk8wTkJRVUU3T3pzN096czdPenRCUVVGRExFRkJVeTlHTEVsQlFVMHNZMEZCWXl4WFFVRmtMR05CUVdNc1IwRkJSeXhWUVVGRExFdEJRVXNzUlVGQlJTeFZRVUZWTEVWQlFVczdRVUZEYWtRc1VVRkJUU3hoUVVGaExFZEJRVWNzVlVGQlZTeERRVUZETEUxQlFVMHNRMEZCUXp0QlFVTjRReXhSUVVGTkxGZEJRVmNzUjBGQlJ5eEZRVUZGTEVOQlFVTTdRVUZEZGtJc1VVRkJUU3hOUVVGTkxFZEJRVWNzYlVKQlFXMUNMRU5CUVVNc01FSkJRVEJDTEVOQlFVTXNTMEZCU3l4RFFVRkRMRU5CUVVNc1EwRkJRenM3UVVGRmRFVXNVMEZCU3l4SlFVRkpMRU5CUVVNc1IwRkJSeXhEUVVGRExFVkJRVVVzUTBGQlF5eEhRVUZITEdGQlFXRXNSVUZCUlN4RFFVRkRMRVZCUVVVc1JVRkJSVHRCUVVOd1F5eHRRa0ZCVnl4RFFVRkRMRlZCUVZVc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eEhRVUZITEVGQlFVTXNUVUZCVFN4RFFVRkRMRU5CUVVNc1EwRkJReXhMUVVGTExGTkJRVk1zUjBGQlNTeE5RVUZOTEVOQlFVTXNRMEZCUXl4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRE8wdEJRekZGT3p0QlFVVkVMRmRCUVU4c1YwRkJWeXhEUVVGRE8wTkJRM1JDT3pzN096czdPMEZCUVVNc1FVRlBTeXhKUVVGTkxEQkNRVUV3UWl4WFFVRXhRaXd3UWtGQk1FSXNSMEZCUnl4VlFVRkRMRXRCUVVzN1YwRkJTeXhMUVVGTExFTkJRVU1zVTBGQlV5eERRVUZETEV0QlFVc3NRMEZCUXl4UFFVRlBMRU5CUVVNc1IwRkJSeXhEUVVGRExFZEJRVWNzUTBGQlF5eEZRVUZGTEV0QlFVc3NRMEZCUXl4WFFVRlhMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU03UTBGQlFUczdPenM3T3pzN08wRkJRVU1zUVVGVE9VY3NTVUZCVFN4VlFVRlZMRmRCUVZZc1ZVRkJWU3hIUVVGSExGVkJRVU1zUTBGQlF5eEZRVUZGTEVOQlFVTXNSVUZCU3p0QlFVTm9ReXhSUVVGSkxFOUJRVThzUjBGQlJ5eExRVUZMTEVOQlFVTTdPMEZCUlhCQ0xGTkJRVXNzU1VGQlNTeEhRVUZITEVsQlFVa3NRMEZCUXl4RlFVRkZPMEZCUTJZc1dVRkJTU3hEUVVGRExFTkJRVU1zWTBGQll5eERRVUZETEVkQlFVY3NRMEZCUXl4RlFVRkZPMEZCUTNaQ0xHZENRVUZKTEZkQlFWY3NRMEZCUXl4RFFVRkRMRVZCUVVVc1IwRkJSeXhEUVVGRExFVkJRVVU3UVVGRGNrSXNiMEpCUVVrc1EwRkJReXhEUVVGRExFZEJRVWNzUTBGQlF5eExRVUZMTEVOQlFVTXNRMEZCUXl4SFFVRkhMRU5CUVVNc1JVRkJSVHRCUVVOdVFpd3lRa0ZCVHl4SFFVRkhMRWxCUVVrc1EwRkJRenRwUWtGRGJFSTdZVUZEU2l4TlFVRk5PMEZCUTBnc2RVSkJRVThzUjBGQlJ5eEpRVUZKTEVOQlFVTTdZVUZEYkVJN1UwRkRTanRMUVVOS096dEJRVVZFTEZkQlFVOHNUMEZCVHl4RFFVRkRPME5CUTJ4Q096czdPenM3T3pzN1FVRkJReXhCUVZOTExFbEJRVTBzVjBGQlZ5eFhRVUZZTEZkQlFWY3NSMEZCUnl4VlFVRkRMRTFCUVUwc1JVRkJSU3haUVVGWk8xZEJRVXNzVFVGQlRTeERRVUZETEdOQlFXTXNRMEZCUXl4WlFVRlpMRU5CUVVNc1NVRkJTU3hOUVVGTkxFTkJRVU1zV1VGQldTeERRVUZETEV0QlFVc3NVMEZCVXp0RFFVRkJPenM3T3pzN096dEJRVUZETEVGQlVYaElMRWxCUVUwc1QwRkJUeXhYUVVGUUxFOUJRVThzUjBGQlJ5eFZRVUZETEVkQlFVYzdWMEZCU3l4UFFVRlBMRU5CUVVNc1IwRkJSeXhEUVVGRExFdEJRVXNzVDBGQlR6dERRVUZCT3pzN096czdPenRCUVVGRExFRkJVV3hFTEVsQlFVMHNUVUZCVFN4WFFVRk9MRTFCUVUwc1IwRkJSeXhWUVVGRExFZEJRVWM3VjBGQlN5eFBRVUZQTEVOQlFVTXNSMEZCUnl4RFFVRkRMRXRCUVVzc1ZVRkJWVHREUVVGQk96czdPenM3T3p0QlFVRkRMRUZCVVhCRUxFbEJRVTBzUzBGQlN5eFhRVUZNTEV0QlFVc3NSMEZCUnl4VlFVRkRMRWRCUVVjN1YwRkJTeXhQUVVGUExFZEJRVWNzUzBGQlN5eFJRVUZSTzBOQlFVRTdPenM3T3pzN08wRkJRVU1zUVVGUkwwTXNTVUZCVFN4TFFVRkxMRmRCUVV3c1MwRkJTeXhIUVVGSExGVkJRVU1zUjBGQlJ6dFhRVUZMTEU5QlFVOHNSMEZCUnl4TFFVRkxMRkZCUVZFN1EwRkJRVHM3T3pzN096czdRVUZCUXl4QlFWRXZReXhKUVVGTkxHVkJRV1VzVjBGQlppeGxRVUZsTEVkQlFVY3NWVUZCUXl4TFFVRkxPMWRCUVVzc1FVRkJReXhMUVVGTExFbEJRVWtzUzBGQlN5eERRVUZETEU5QlFVOHNTVUZCU1N4TFFVRkxMRU5CUVVNc1QwRkJUeXhEUVVGRExFZEJRVWNzUTBGQlF5eEhRVUZITEVOQlFVTXNSMEZCU1N4SlFVRkpMRWRCUVVjc1MwRkJTenREUVVGQk96czdPenM3T3p0QlFVRkRMRUZCVVhKSExFbEJRVTBzVVVGQlVTeFhRVUZTTEZGQlFWRXNSMEZCUnl4VlFVRkRMRWRCUVVjN1YwRkJTeXhQUVVGUExFZEJRVWNzUzBGQlN5eFJRVUZSTzBOQlFVRTdPenM3T3pzN096dEJRVUZETEVGQlUyeEVMRWxCUVUwc1UwRkJVeXhYUVVGVUxGTkJRVk1zUjBGQlJ5eFZRVUZETEZGQlFWRXNSVUZCU3p0QlFVTnVReXhSUVVGTkxFdEJRVXNzUjBGQlJ5eEJRVUZETEU5QlFVOHNVVUZCVVN4TFFVRkxMRkZCUVZFc1IwRkJTU3hSUVVGUkxFTkJRVU1zWjBKQlFXZENMRU5CUVVNc1VVRkJVU3hEUVVGRExFZEJRVWNzVVVGQlVTeERRVUZETzBGQlF6bEdMRmRCUVU4c1FVRkJReXhMUVVGTExFTkJRVU1zVFVGQlRTeEhRVUZKTEVWQlFVVXNRMEZCUXl4TFFVRkxMRU5CUVVNc1NVRkJTU3hEUVVGRExFdEJRVXNzUTBGQlF5eEhRVUZITEVWQlFVVXNRMEZCUXl4SlFVRkpMRU5CUVVNc1MwRkJTeXhEUVVGRExFTkJRVU03UTBGRGFrVTdPenM3T3pzN096czdRVUZCUXl4QlFWVkxMRWxCUVUwc2JVSkJRVzFDTEZkQlFXNUNMRzFDUVVGdFFpeEhRVUZITEZWQlFVTXNTMEZCU3p0WFFVRkxMRkZCUVZFc1EwRkJReXhMUVVGTExFTkJRVU1zUjBGQlJ5eExRVUZMTEVOQlFVTXNTMEZCU3l4RFFVRkRMRTFCUVUwc1EwRkJReXhIUVVGSExFTkJRVU1zUzBGQlN5eERRVUZETzBOQlFVRTdPenM3T3pzN096czdRVUZCUXl4QlFWVjJSaXhKUVVGTkxHMUNRVUZ0UWl4WFFVRnVRaXh0UWtGQmJVSXNSMEZCUnl4VlFVRkRMRXRCUVVzN1YwRkJTeXhSUVVGUkxFTkJRVU1zUzBGQlN5eERRVUZETEVkQlFVY3NTMEZCU3l4RFFVRkRMRXRCUVVzc1EwRkJReXhIUVVGSExFTkJRVU1zUjBGQlJ5eERRVUZETEV0QlFVc3NRMEZCUXp0RFFVRkJPenM3T3pzN096czdPMEZCUVVNc1FVRlZjRVlzU1VGQlRTeGpRVUZqTEZkQlFXUXNZMEZCWXl4SFFVRkhMRlZCUVVNc1MwRkJTeXhGUVVGTE8wRkJRM0pETEZGQlFVa3NTMEZCU3l4RFFVRkRMRXRCUVVzc1JVRkJSVHRCUVVOaUxGbEJRVTBzVlVGQlZTeEhRVUZITEV0QlFVc3NRMEZCUXl4TFFVRkxMRU5CUVVNc2JVSkJRVzFDTEVOQlFVTXNRMEZCUXpzN1FVRkZjRVFzWlVGQlR6dEJRVU5JTEdsQ1FVRkxMRVZCUVVVc1ZVRkJWU3hEUVVGRExGVkJRVlVzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXp0QlFVTm9ReXhuUWtGQlNTeEZRVUZITEZWQlFWVXNRMEZCUXl4RFFVRkRMRU5CUVVNN1UwRkRka0lzUTBGQlF6dExRVU5NTEUxQlFVMDdRVUZEU0N4bFFVRlBMRVZCUVVVc1MwRkJTeXhGUVVGTUxFdEJRVXNzUlVGQlJTeERRVUZETzB0QlEzQkNPME5CUTBvN096czdPenM3T3p0QlFVRkRMRUZCVTBzc1NVRkJUU3hUUVVGVExGZEJRVlFzVTBGQlV5eEhRVUZITEZWQlFVTXNSMEZCUnl4RlFVRnZRanRSUVVGc1FpeFRRVUZUTEhsRVFVRkhMRU5CUVVNN08wRkJRM2hETEdGQlFWTXNXVUZCUnl4RlFVRkZMRVZCUVVrc1UwRkJVeXhEUVVGQkxFTkJRVU03UVVGRE5VSXNWMEZCVHl4SlFVRkpMRU5CUVVNc1MwRkJTeXhEUVVGRExFZEJRVWNzUjBGQlJ5eFRRVUZUTEVOQlFVTXNSMEZCUnl4VFFVRlRMRU5CUVVNN1EwRkRiRVFzUTBGQlF5SXNJbVpwYkdVaU9pSjFkR2xzY3k1cWN5SXNJbk52ZFhKalpWSnZiM1FpT2lJdlZYTmxjbk12VFdGMGRGQmxjbko1TDFOcGRHVnpMM0J2Y0cxdmRHbHZiaUlzSW5OdmRYSmpaWE5EYjI1MFpXNTBJanBiSW1OdmJuTjBJRU5CVFVWTVgwTkJVMFZmVUVGVVZFVlNUaUE5SUM4b1cyRXRlbDBwS0Z0QkxWcGRLUzluTzF4dVkyOXVjM1FnVWtWUVRFRkRSVjlVUlUxUVRFRlVSU0E5SUNja01TMGtNaWM3WEc1amIyNXpkQ0JJUVZOZlVFVlNSazlTVFVGT1EwVmZUazlYSUQwZ0tIUjVjR1Z2WmlCd1pYSm1iM0p0WVc1alpTQWhQVDBnSjNWdVpHVm1hVzVsWkNjZ0ppWWdjR1Z5Wm05eWJXRnVZMlV1Ym05M0tUdGNibHh1THlwY2JpQWdJQ0JIWlhRZ2RtRnlJSFI1Y0dVZ1lYTWdjM1J5YVc1blhHNGdJQ0FnWEc0Z0lDQWdRSEJoY21GdE9pQldZWEpwWVdKc1pTQjBieUIwWlhOMFhHNGdJQ0FnUUhKbGRIVnliaUJiYzNSeWFXNW5YVG9nVW1WMGRYSnVjeXdnWm05eUlHbHVjM1JoYm1ObElDZFBZbXBsWTNRbklHbG1JRnR2WW1wbFkzUWdUMkpxWldOMFhWeHVLaTljYm1OdmJuTjBJSFpoY2xSNWNHVWdQU0IyWVhKcFlXSnNaU0E5UGlCUFltcGxZM1F1Y0hKdmRHOTBlWEJsTG5SdlUzUnlhVzVuTG1OaGJHd29kbUZ5YVdGaWJHVXBMbk5zYVdObEtEZ3NJQzB4S1R0Y2JseHVMeXBjYmlBZ0lDQkRiMjUyWlhKMElHTmhiV1ZzUTJGelpTQjBieUJrWVhOb0xXTmhjMlZjYmx4dUlDQWdJRUJ3WVhKaGJTQmJjM1J5YVc1blhWeHVJQ0FnSUVCeVpYUjFjbTRnVzNOMGNtbHVaMTFjYmlvdlhHNWxlSEJ2Y25RZ1kyOXVjM1FnWTJGdFpXeFViMFJoYzJnZ1BTQW9jM1J5YVc1bktTQTlQaUJ6ZEhKcGJtY3VjbVZ3YkdGalpTaERRVTFGVEY5RFFWTkZYMUJCVkZSRlVrNHNJRkpGVUV4QlEwVmZWRVZOVUV4QlZFVXBMblJ2VEc5M1pYSkRZWE5sS0NrN1hHNWNiaThxWEc0Z0lDQWdRMjl0WW1sdVpTQjBjbUZ1YzJadmNtMWxjbk1nYVc1MGJ5QnZibVVnWm5WdVkzUnBiMjRnZEdoaGRDQmpZV3hzY3lCbGRtVnllVnh1SUNBZ0lIUnlZVzV6Wm05eWJXVnlJR2x1SUhSb1pTQmhjbkpoZVNCaGJtUWdjbVYwZFhKdWN5QjBhR1VnY21WemRXeDBYRzVjYmlBZ0lDQkFjR0Z5WVcwZ1cyRnljbUY1WFZ4dUlDQWdJRUJ5WlhSMWNtNGdXMloxYm1OMGFXOXVYVnh1S2k5Y2JtVjRjRzl5ZENCamIyNXpkQ0JqYjIxaWFXNWxWSEpoYm5ObWIzSnRaWEp6SUQwZ0tIUnlZVzV6Wm05eWJXVnljeWtnUFQ0Z2UxeHVJQ0FnSUdOdmJuTjBJRzUxYlZSeVlXNXpabTl5YldWeWN5QTlJSFJ5WVc1elptOXliV1Z5Y3k1c1pXNW5kR2c3WEc0Z0lDQWdiR1YwSUdrZ1BTQXdPMXh1WEc0Z0lDQWdMeXBjYmlBZ0lDQWdJQ0FnUUhCaGNtRnRJRnR1ZFcxaVpYSmRYRzRnSUNBZ0lDQWdJRUJ3WVhKaGJTQmJjM1J5YVc1blhWeHVJQ0FnSUNBZ0lDQkFjR0Z5WVcwZ1cwRmpkR2x2YmwxY2JpQWdJQ0FnSUNBZ1FISmxkSFZ5YmlCYmJuVnRZbVZ5WFZ4dUlDQWdJQ292WEc0Z0lDQWdjbVYwZFhKdUlDaDJMQ0JyWlhrc0lHRXBJRDArSUh0Y2JpQWdJQ0FnSUNBZ1ptOXlJQ2hwSUQwZ01Ec2dhU0E4SUc1MWJWUnlZVzV6Wm05eWJXVnljenNnYVNzcktTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNCMklEMGdkSEpoYm5ObWIzSnRaWEp6VzJsZEtIWXNJR3RsZVN3Z1lTazdYRzRnSUNBZ0lDQWdJSDFjYmx4dUlDQWdJQ0FnSUNCeVpYUjFjbTRnZGp0Y2JpQWdJQ0I5TzF4dWZUdGNibHh1Wlhod2IzSjBJR052Ym5OMElHTnlaV0YwWlVSbGJHbHRhWFJsWkNBOUlDaDJZV3gxWlhNc0lIUmxjbTF6TENCa1pXeHBiV2wwWlhJc0lHTm9iM0FwSUQwK0lIdGNiaUFnSUNCamIyNXpkQ0J1ZFcxVVpYSnRjeUE5SUhSbGNtMXpMbXhsYm1kMGFEdGNiaUFnSUNCc1pYUWdZMjl0WW1sdVpXUWdQU0FuSnp0Y2JseHVJQ0FnSUdadmNpQW9iR1YwSUdrZ1BTQXdPeUJwSUR3Z2JuVnRWR1Z5YlhNN0lHa3JLeWtnZTF4dUlDQWdJQ0FnSUNCamIyNXpkQ0IwWlhKdElEMGdkR1Z5YlhOYmFWMDdYRzRnSUNBZ0lDQWdJR2xtSUNoMllXeDFaWE11YUdGelQzZHVVSEp2Y0dWeWRIa29kR1Z5YlNrcElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUdOdmJXSnBibVZrSUNzOUlIWmhiSFZsYzF0MFpYSnRYU0FySUdSbGJHbHRhWFJsY2p0Y2JpQWdJQ0FnSUNBZ2ZWeHVJQ0FnSUgxY2JseHVJQ0FnSUdsbUlDaGphRzl3S1NCN1hHNGdJQ0FnSUNBZ0lHTnZiV0pwYm1Wa0lEMGdZMjl0WW1sdVpXUXVjMnhwWTJVb01Dd2dMV05vYjNBcE8xeHVJQ0FnSUgxY2JseHVJQ0FnSUhKbGRIVnliaUJqYjIxaWFXNWxaRHRjYm4wN1hHNWNiaThxWEc0Z0lDQWdRM0psWVhSbElHRWdablZ1WTNScGIyNGdjM1J5YVc1blhHNWNiaUFnSUNBbk1qQndlQ2NzSUNkMGNtRnVjMnhoZEdVbklDMCtJQ2QwY21GdWMyeGhkR1VvTWpCd2VDa25YRzVjYmlBZ0lDQkFjR0Z5WVcwZ1czTjBjbWx1WjExY2JpQWdJQ0JBY0dGeVlXMGdXM04wY21sdVoxMWNiaUFnSUNCQWNtVjBkWEp1SUZ0emRISnBibWRkWEc0cUwxeHVaWGh3YjNKMElHTnZibk4wSUdOeVpXRjBaVVoxYm1OMGFXOXVVM1J5YVc1bklEMGdLSFpoYkhWbExDQndjbVZtYVhncElEMCtJR0FrZTNCeVpXWnBlSDBvSkh0MllXeDFaWDBwWUR0Y2JseHVMeXBjYmlBZ0lDQkhaVzVsY21GMFpTQmpkWEp5Wlc1MElIUnBiV1Z6ZEdGdGNGeHVJQ0FnSUZ4dUlDQWdJRUJ5WlhSMWNtNGdXM1JwYldWemRHRnRjRjA2SUVOMWNuSmxiblFnVlU1SldDQjBhVzFsYzNSaGJYQmNiaW92WEc1bGVIQnZjblFnWTI5dWMzUWdZM1Z5Y21WdWRGUnBiV1VnUFNCSVFWTmZVRVZTUms5U1RVRk9RMFZmVGs5WElEOGdLQ2tnUFQ0Z2NHVnlabTl5YldGdVkyVXVibTkzS0NrZ09pQW9LU0E5UGlCdVpYY2dSR0YwWlNncExtZGxkRlJwYldVb0tUdGNibHh1THlwY2JpQWdJQ0JUY0d4cGRDQmpiMnh2Y2lCemRISnBibWNnYVc1MGJ5QnRZWEFnYjJZZ1kyOXNiM0lnY0hKdmNHVnlkR2xsYzF4dVhHNGdJQ0FnWENKeVoySmhLREkxTlN3Z01qVTFMQ0F5TlRVc0lEQXBYQ0lzSUZ0Y0lsSmxaRndpTENBblIzSmxaVzVjSWl3Z1hDSkNiSFZsWENJc0lGd2lRV3h3YUdGY0lsMWNibHh1SUNBZ0lIc2dVbVZrT2lBeU5UVXVMaTRnZlZ4dUtpOWNibVY0Y0c5eWRDQmpiMjV6ZENCblpYUkRiMnh2Y2xaaGJIVmxjeUE5SUNoMllXeDFaU3dnWTI5c2IzSlVaWEp0Y3lrZ1BUNGdlMXh1SUNBZ0lHTnZibk4wSUc1MWJVTnZiRzl5VkdWeWJYTWdQU0JqYjJ4dmNsUmxjbTF6TG14bGJtZDBhRHRjYmlBZ0lDQmpiMjV6ZENCamIyeHZjbFpoYkhWbGN5QTlJSHQ5TzF4dUlDQWdJR052Ym5OMElHTnZiRzl5Y3lBOUlITndiR2wwUTI5dGJXRkVaV3hwYldsMFpXUW9aMlYwVm1Gc2RXVkdjbTl0Um5WdVkzUnBiMjVUZEhKcGJtY29kbUZzZFdVcEtUdGNibHh1SUNBZ0lHWnZjaUFvYkdWMElHa2dQU0F3T3lCcElEd2diblZ0UTI5c2IzSlVaWEp0Y3pzZ2FTc3JLU0I3WEc0Z0lDQWdJQ0FnSUdOdmJHOXlWbUZzZFdWelcyTnZiRzl5VkdWeWJYTmJhVjFkSUQwZ0tHTnZiRzl5YzF0cFhTQWhQVDBnZFc1a1pXWnBibVZrS1NBL0lHTnZiRzl5YzF0cFhTQTZJREU3WEc0Z0lDQWdmVnh1WEc0Z0lDQWdjbVYwZFhKdUlHTnZiRzl5Vm1Gc2RXVnpPMXh1ZlR0Y2JseHVMeXBjYmlBZ0lDQkhaWFFnZG1Gc2RXVWdabkp2YlNCbWRXNWpkR2x2YmlCemRISnBibWRjYmx4dUlDQWdJRndpZEhKaGJuTnNZWFJsV0NneU1IQjRLVndpSUMwK0lGd2lNakJ3ZUZ3aVhHNHFMMXh1Wlhod2IzSjBJR052Ym5OMElHZGxkRlpoYkhWbFJuSnZiVVoxYm1OMGFXOXVVM1J5YVc1bklEMGdLSFpoYkhWbEtTQTlQaUIyWVd4MVpTNXpkV0p6ZEhKcGJtY29kbUZzZFdVdWFXNWtaWGhQWmlnbktDY3BJQ3NnTVN3Z2RtRnNkV1V1YkdGemRFbHVaR1Y0VDJZb0p5a25LU2s3WEc1Y2JpOHFYRzRnSUNBZ1EyaGxZMnNnYVdZZ2RIZHZJRzlpYW1WamRITWdhR0YyWlNCamFHRnVaMlZrSUdaeWIyMGdaV0ZqYUNCdmRHaGxjbHh1SUNBZ0lGeHVJQ0FnSUVCd1lYSmhiU0JiYjJKcVpXTjBYVG9nU1c1d2RYUWdRVnh1SUNBZ0lFQndZWEpoYlNCYmIySnFaV04wWFRvZ1NXNXdkWFFnUWx4dUlDQWdJRUJ5WlhSMWNtNGdXMkp2YjJ4bFlXNWRPaUJVY25WbElHbG1JR1JwWm1abGNtVnVkRnh1S2k5Y2JtVjRjRzl5ZENCamIyNXpkQ0JvWVhORGFHRnVaMlZrSUQwZ0tHRXNJR0lwSUQwK0lIdGNiaUFnSUNCc1pYUWdZMmhoYm1kbFpDQTlJR1poYkhObE8xeHVYRzRnSUNBZ1ptOXlJQ2hzWlhRZ2EyVjVJR2x1SUdFcElIdGNiaUFnSUNBZ0lDQWdhV1lnS0dFdWFHRnpUM2R1VUhKdmNHVnlkSGtvYTJWNUtTa2dlMXh1SUNBZ0lDQWdJQ0FnSUNBZ2FXWWdLR2hoYzFCeWIzQmxjblI1S0dJc0lHdGxlU2twSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCcFppQW9ZVnRyWlhsZElDRTlQU0JpVzJ0bGVWMHBJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ1kyaGhibWRsWkNBOUlIUnlkV1U3WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnZlZ4dUlDQWdJQ0FnSUNBZ0lDQWdmU0JsYkhObElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQmphR0Z1WjJWa0lEMGdkSEoxWlR0Y2JpQWdJQ0FnSUNBZ0lDQWdJSDFjYmlBZ0lDQWdJQ0FnZlZ4dUlDQWdJSDFjYmx4dUlDQWdJSEpsZEhWeWJpQmphR0Z1WjJWa08xeHVmVHRjYmx4dUx5cGNiaUFnSUNCRGFHVmpheUJwWmlCdlltcGxZM1FnYUdGeklIQnliM0JsY25SNUlHRnVaQ0JwZENCcGMyNG5kQ0IxYm1SbFptbHVaV1JjYmx4dUlDQWdJRUJ3WVhKaGJTQmJiMkpxWldOMFhWeHVJQ0FnSUVCd1lYSmhiU0JiYzNSeWFXNW5YVnh1SUNBZ0lFQnlaWFIxY200Z1cySnZiMnhsWVc1ZFhHNHFMMXh1Wlhod2IzSjBJR052Ym5OMElHaGhjMUJ5YjNCbGNuUjVJRDBnS0c5aWFtVmpkQ3dnY0hKdmNHVnlkSGxPWVcxbEtTQTlQaUJ2WW1wbFkzUXVhR0Z6VDNkdVVISnZjR1Z5ZEhrb2NISnZjR1Z5ZEhsT1lXMWxLU0FtSmlCdlltcGxZM1JiY0hKdmNHVnlkSGxPWVcxbFhTQWhQVDBnZFc1a1pXWnBibVZrTzF4dVhHNHZLbHh1SUNBZ0lFbHpJSFYwYVd4eklIWmhjaUJoYmlCaGNuSmhlU0EvSUZ4dUlDQWdJRnh1SUNBZ0lFQndZWEpoYlRvZ1ZtRnlhV0ZpYkdVZ2RHOGdkR1Z6ZEZ4dUlDQWdJRUJ5WlhSMWNtNGdXMkp2YjJ4bFlXNWRPaUJTWlhSMWNtNXpJSFJ5ZFdVZ2FXWWdkWFJwYkhNdWRtRnlWSGx3WlNBOVBUMGdKMEZ5Y21GNUoxeHVLaTljYm1WNGNHOXlkQ0JqYjI1emRDQnBjMEZ5Y21GNUlEMGdLR0Z5Y2lrZ1BUNGdkbUZ5Vkhsd1pTaGhjbklwSUQwOVBTQW5RWEp5WVhrbk8xeHVYRzR2S2x4dUlDQWdJRWx6SUhWMGFXeHpJSFpoY2lCaElHWjFibU4wYVc5dUlEOGdYRzRnSUNBZ1hHNGdJQ0FnUUhCaGNtRnRPaUJXWVhKcFlXSnNaU0IwYnlCMFpYTjBYRzRnSUNBZ1FISmxkSFZ5YmlCYlltOXZiR1ZoYmwwNklGSmxkSFZ5Ym5NZ2RISjFaU0JwWmlCMWRHbHNjeTUyWVhKVWVYQmxJRDA5UFNBblJuVnVZM1JwYjI0blhHNHFMMXh1Wlhod2IzSjBJR052Ym5OMElHbHpSblZ1WXlBOUlDaHZZbW9wSUQwK0lIWmhjbFI1Y0dVb2IySnFLU0E5UFQwZ0owWjFibU4wYVc5dUp6dGNibHh1THlwY2JpQWdJQ0JKY3lCMWRHbHNjeUIyWVhJZ1lTQnVkVzFpWlhJL1hHNGdJQ0FnWEc0Z0lDQWdRSEJoY21GdE9pQldZWEpwWVdKc1pTQjBieUIwWlhOMFhHNGdJQ0FnUUhKbGRIVnliaUJiWW05dmJHVmhibDA2SUZKbGRIVnlibk1nZEhKMVpTQnBaaUIwZVhCbGIyWWdQVDA5SUNkdWRXMWlaWEluWEc0cUwxeHVaWGh3YjNKMElHTnZibk4wSUdselRuVnRJRDBnS0c1MWJTa2dQVDRnZEhsd1pXOW1JRzUxYlNBOVBUMGdKMjUxYldKbGNpYzdYRzVjYmk4cVhHNGdJQ0FnU1hNZ2RYUnBiSE1nZG1GeUlHRnVJRzlpYW1WamREOWNiaUFnSUNCY2JpQWdJQ0JBY0dGeVlXMDZJRlpoY21saFlteGxJSFJ2SUhSbGMzUmNiaUFnSUNCQWNtVjBkWEp1SUZ0aWIyOXNaV0Z1WFRvZ1VtVjBkWEp1Y3lCMGNuVmxJR2xtSUhSNWNHVnZaaUE5UFQwZ0oyOWlhbVZqZENkY2Jpb3ZYRzVsZUhCdmNuUWdZMjl1YzNRZ2FYTlBZbW9nUFNBb2IySnFLU0E5UGlCMGVYQmxiMllnYjJKcUlEMDlQU0FuYjJKcVpXTjBKenRjYmx4dUx5cGNiaUFnSUNCSmN5QjFkR2xzY3lCaElISmxiR0YwYVhabElIWmhiSFZsSUdGemMybG5ibTFsYm5RL1hHNGdJQ0FnWEc0Z0lDQWdRSEJoY21GdElGdHpkSEpwYm1kZE9pQldZWEpwWVdKc1pTQjBieUIwWlhOMFhHNGdJQ0FnUUhKbGRIVnliaUJiWW05dmJHVmhibDA2SUVsbUlIVjBhV3h6SUd4dmIydHpJR3hwYTJVZ1lTQnlaV3hoZEdsMlpTQjJZV3gxWlNCaGMzTnBaMjV0Wlc1MFhHNHFMMXh1Wlhod2IzSjBJR052Ym5OMElHbHpVbVZzWVhScGRtVldZV3gxWlNBOUlDaDJZV3gxWlNrZ1BUNGdLSFpoYkhWbElDWW1JSFpoYkhWbExtbHVaR1Y0VDJZZ0ppWWdkbUZzZFdVdWFXNWtaWGhQWmlnblBTY3BJRDRnTUNrZ1B5QjBjblZsSURvZ1ptRnNjMlU3WEc1Y2JpOHFYRzRnSUNBZ1NYTWdkWFJwYkhNZ2RtRnlJR0VnYzNSeWFXNW5JRDhnWEc0Z0lDQWdYRzRnSUNBZ1FIQmhjbUZ0T2lCV1lYSnBZV0pzWlNCMGJ5QjBaWE4wWEc0Z0lDQWdRSEpsZEhWeWJpQmJZbTl2YkdWaGJsMDZJRkpsZEhWeWJuTWdkSEoxWlNCcFppQjBlWEJsYjJZZ2MzUnlJRDA5UFNBbmMzUnlhVzVuSjF4dUtpOWNibVY0Y0c5eWRDQmpiMjV6ZENCcGMxTjBjbWx1WnlBOUlDaHpkSElwSUQwK0lIUjVjR1Z2WmlCemRISWdQVDA5SUNkemRISnBibWNuTzF4dVhHNHZLbHh1SUNBZ0lFQndZWEpoYlNCYmMzUnlhVzVuSUh4OElFNXZaR1ZNYVhOMFhUcGNiaUFnSUNBZ0lDQWdTV1lnYzNSeWFXNW5MQ0IwY21WaGRHVmtJR0Z6SUhObGJHVmpkRzl5TGx4dUlDQWdJQ0FnSUNCSlppQnViM1FzSUhSeVpXRjBaV1FnWVhNZ2NISmxaWGhwYzNScGJtY2dUbTlrWlV4cGMzUmNibHh1SUNBZ0lFQnlaWFIxY200Z1cwRnljbUY1WFZ4dUtpOWNibVY0Y0c5eWRDQmpiMjV6ZENCelpXeGxZM1JFYjIwZ1BTQW9jMlZzWldOMGIzSXBJRDArSUh0Y2JpQWdJQ0JqYjI1emRDQnViMlJsY3lBOUlDaDBlWEJsYjJZZ2MyVnNaV04wYjNJZ1BUMDlJQ2R6ZEhKcGJtY25LU0EvSUdSdlkzVnRaVzUwTG5GMVpYSjVVMlZzWldOMGIzSkJiR3dvYzJWc1pXTjBiM0lwSURvZ2MyVnNaV04wYjNJN1hHNGdJQ0FnY21WMGRYSnVJQ2h1YjJSbGN5NXNaVzVuZEdncElEOGdXMTB1YzJ4cFkyVXVZMkZzYkNodWIyUmxjeWtnT2lCYlhTNXdkWE5vS0c1dlpHVnpLVHRjYm4wN1hHNWNiaThxWEc0Z0lDQWdVM0JzYVhRZ1kyOXRiV0V0WkdWc2FXMXBkR1ZrSUhOMGNtbHVaMXh1WEc0Z0lDQWdYQ0ptYjI4c1ltRnlYQ0lnTFQ0Z1cxd2labTl2WENJc0lGd2lZbUZ5WENKZFhHNWNiaUFnSUNCQWNHRnlZVzBnVzNOMGNtbHVaMTFjYmlBZ0lDQkFjbVYwZFhKdUlGdGhjbkpoZVYxY2Jpb3ZYRzVsZUhCdmNuUWdZMjl1YzNRZ2MzQnNhWFJEYjIxdFlVUmxiR2x0YVhSbFpDQTlJQ2gyWVd4MVpTa2dQVDRnYVhOVGRISnBibWNvZG1Gc2RXVXBJRDhnZG1Gc2RXVXVjM0JzYVhRb0x5eGNYSE1xTHlrZ09pQmJkbUZzZFdWZE8xeHVYRzR2S2x4dUlDQWdJRk53YkdsMElITndZV05sTFdSbGJHbHRhWFJsWkNCemRISnBibWRjYmx4dUlDQWdJRndpWm05dklHSmhjbHdpSUMwK0lGdGNJbVp2YjF3aUxDQmNJbUpoY2x3aVhWeHVYRzRnSUNBZ1FIQmhjbUZ0SUZ0emRISnBibWRkWEc0Z0lDQWdRSEpsZEhWeWJpQmJZWEp5WVhsZFhHNHFMMXh1Wlhod2IzSjBJR052Ym5OMElITndiR2wwVTNCaFkyVkVaV3hwYldsMFpXUWdQU0FvZG1Gc2RXVXBJRDArSUdselUzUnlhVzVuS0haaGJIVmxLU0EvSUhaaGJIVmxMbk53YkdsMEtDY2dKeWtnT2lCYmRtRnNkV1ZkTzF4dVhHNHZLbHh1SUNBZ0lGTndiR2wwSUdFZ2RtRnNkV1VnYVc1MGJ5QmhJSFpoYkhWbEwzVnVhWFFnYjJKcVpXTjBYRzRnSUNBZ1hHNGdJQ0FnSUNBZ0lGd2lNakF3Y0hoY0lpQXRQaUI3SUhaaGJIVmxPaUF5TURBc0lIVnVhWFE2SUZ3aWNIaGNJaUI5WEc0Z0lDQWdJQ0FnSUZ4dUlDQWdJRUJ3WVhKaGJTQmJjM1J5YVc1blhUb2dWbUZzZFdVZ2RHOGdjM0JzYVhSY2JpQWdJQ0JBY21WMGRYSnVJRnR2WW1wbFkzUmRPaUJQWW1wbFkzUWdkMmwwYUNCMllXeDFaU0JoYm1RZ2RXNXBkQ0J3Y205d2MxeHVLaTljYm1WNGNHOXlkQ0JqYjI1emRDQnpjR3hwZEZaaGJIVmxWVzVwZENBOUlDaDJZV3gxWlNrZ1BUNGdlMXh1SUNBZ0lHbG1JQ2gyWVd4MVpTNXRZWFJqYUNrZ2UxeHVJQ0FnSUNBZ0lDQmpiMjV6ZENCemNHeHBkRlpoYkhWbElEMGdkbUZzZFdVdWJXRjBZMmdvTHlndFAxeGNaQ3BjWEM0L1hGeGtLaWtvTGlvcEx5azdYRzVjYmlBZ0lDQWdJQ0FnY21WMGRYSnVJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lIWmhiSFZsT2lCd1lYSnpaVVpzYjJGMEtITndiR2wwVm1Gc2RXVmJNVjBwTEZ4dUlDQWdJQ0FnSUNBZ0lDQWdkVzVwZERvZ0lITndiR2wwVm1Gc2RXVmJNbDFjYmlBZ0lDQWdJQ0FnZlR0Y2JpQWdJQ0I5SUdWc2MyVWdlMXh1SUNBZ0lDQWdJQ0J5WlhSMWNtNGdleUIyWVd4MVpTQjlPMXh1SUNBZ0lIMWNibjA3WEc1Y2JpOHFYRzRnSUNBZ1EyOXVkbVZ5ZENCdWRXMWlaWElnZEc4Z2VDQmtaV05wYldGc0lIQnNZV05sYzF4dVhHNGdJQ0FnUUhCaGNtRnRJRnR1ZFcxaVpYSmRYRzRnSUNBZ1FIQmhjbUZ0SUZ0dWRXMWlaWEpkWEc0Z0lDQWdRSEpsZEhWeWJpQmJiblZ0WW1WeVhWeHVLaTljYm1WNGNHOXlkQ0JqYjI1emRDQjBiMFJsWTJsdFlXd2dQU0FvYm5WdExDQndjbVZqYVhOcGIyNGdQU0F5S1NBOVBpQjdYRzRnSUNBZ2NISmxZMmx6YVc5dUlEMGdNVEFnS2lvZ2NISmxZMmx6YVc5dU8xeHVJQ0FnSUhKbGRIVnliaUJOWVhSb0xuSnZkVzVrS0c1MWJTQXFJSEJ5WldOcGMybHZiaWtnTHlCd2NtVmphWE5wYjI0N1hHNTlPMXh1SWwxOVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvaW5jL3V0aWxzLmpzXG4gKiogbW9kdWxlIGlkID0gMlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0cy5zZXRHbG9iYWxEaWxhdGlvbiA9IHVuZGVmaW5lZDtcblxudmFyIF91dGlscyA9IHJlcXVpcmUoJy4uL2luYy91dGlscycpO1xuXG52YXIgTUFYX0VMQVBTRUQgPSAzMztcblxudmFyIGN1cnJlbnQgPSAwO1xudmFyIGVsYXBzZWQgPSAxNi43O1xudmFyIGRpbGF0aW9uID0gMTtcblxuZXhwb3J0cy5kZWZhdWx0ID0ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gKGZyYW1lc3RhbXApIHtcbiAgICAgICAgZWxhcHNlZCA9IE1hdGgubWF4KE1hdGgubWluKGZyYW1lc3RhbXAgLSBjdXJyZW50LCBNQVhfRUxBUFNFRCksIDEpICogZGlsYXRpb247XG4gICAgICAgIGN1cnJlbnQgPSBmcmFtZXN0YW1wO1xuICAgIH0sXG5cbiAgICBzdGFydDogZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gY3VycmVudCA9ICgwLCBfdXRpbHMuY3VycmVudFRpbWUpKCk7XG4gICAgfSxcblxuICAgIGdldEVsYXBzZWQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIGVsYXBzZWQ7XG4gICAgfVxufTtcbnZhciBzZXRHbG9iYWxEaWxhdGlvbiA9IGV4cG9ydHMuc2V0R2xvYmFsRGlsYXRpb24gPSBmdW5jdGlvbiAobmV3RGlsYXRpb24pIHtcbiAgICByZXR1cm4gZGlsYXRpb24gPSBuZXdEaWxhdGlvbjtcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5OeVl5OXdjbTlqWlhOekwzUnBiV1Z5TG1weklsMHNJbTVoYldWeklqcGJYU3dpYldGd2NHbHVaM01pT2lJN096czdPenM3UVVGRlFTeEpRVUZOTEZkQlFWY3NSMEZCUnl4RlFVRkZMRU5CUVVNN08wRkJSWFpDTEVsQlFVa3NUMEZCVHl4SFFVRkhMRU5CUVVNc1EwRkJRenRCUVVOb1FpeEpRVUZKTEU5QlFVOHNSMEZCUnl4SlFVRkpMRU5CUVVNN1FVRkRia0lzU1VGQlNTeFJRVUZSTEVkQlFVY3NRMEZCUXl4RFFVRkRPenRyUWtGRlJqdEJRVU5ZTEZWQlFVMHNSVUZCUlN4VlFVRkRMRlZCUVZVc1JVRkJTenRCUVVOd1FpeGxRVUZQTEVkQlFVY3NTVUZCU1N4RFFVRkRMRWRCUVVjc1EwRkJReXhKUVVGSkxFTkJRVU1zUjBGQlJ5eERRVUZETEZWQlFWVXNSMEZCUnl4UFFVRlBMRVZCUVVVc1YwRkJWeXhEUVVGRExFVkJRVVVzUTBGQlF5eERRVUZETEVkQlFVY3NVVUZCVVN4RFFVRkRPMEZCUXpsRkxHVkJRVThzUjBGQlJ5eFZRVUZWTEVOQlFVTTdTMEZEZUVJN08wRkJSVVFzVTBGQlN5eEZRVUZGTzJWQlFVMHNUMEZCVHl4SFFVRkhMRmRCWkd4Q0xGZEJRVmNzUjBGamIwSTdTMEZCUVRzN1FVRkZjRU1zWTBGQlZTeEZRVUZGTzJWQlFVMHNUMEZCVHp0TFFVRkJPME5CUXpWQ08wRkJSVTBzU1VGQlRTeHBRa0ZCYVVJc1YwRkJha0lzYVVKQlFXbENMRWRCUVVjc1ZVRkJReXhYUVVGWE8xZEJRVXNzVVVGQlVTeEhRVUZITEZkQlFWYzdRMEZCUVN4RFFVRkRJaXdpWm1sc1pTSTZJblJwYldWeUxtcHpJaXdpYzI5MWNtTmxVbTl2ZENJNklpOVZjMlZ5Y3k5TllYUjBVR1Z5Y25rdlUybDBaWE12Y0c5d2JXOTBhVzl1SWl3aWMyOTFjbU5sYzBOdmJuUmxiblFpT2xzaWFXMXdiM0owSUhzZ1kzVnljbVZ1ZEZScGJXVWdmU0JtY205dElDY3VMaTlwYm1NdmRYUnBiSE1uTzF4dVhHNWpiMjV6ZENCTlFWaGZSVXhCVUZORlJDQTlJRE16TzF4dVhHNXNaWFFnWTNWeWNtVnVkQ0E5SURBN1hHNXNaWFFnWld4aGNITmxaQ0E5SURFMkxqYzdYRzVzWlhRZ1pHbHNZWFJwYjI0Z1BTQXhPMXh1WEc1bGVIQnZjblFnWkdWbVlYVnNkQ0I3WEc0Z0lDQWdkWEJrWVhSbE9pQW9abkpoYldWemRHRnRjQ2tnUFQ0Z2UxeHVJQ0FnSUNBZ0lDQmxiR0Z3YzJWa0lEMGdUV0YwYUM1dFlYZ29UV0YwYUM1dGFXNG9abkpoYldWemRHRnRjQ0F0SUdOMWNuSmxiblFzSUUxQldGOUZURUZRVTBWRUtTd2dNU2tnS2lCa2FXeGhkR2x2Ymp0Y2JpQWdJQ0FnSUNBZ1kzVnljbVZ1ZENBOUlHWnlZVzFsYzNSaGJYQTdYRzRnSUNBZ2ZTeGNibHh1SUNBZ0lITjBZWEowT2lBb0tTQTlQaUJqZFhKeVpXNTBJRDBnWTNWeWNtVnVkRlJwYldVb0tTeGNibHh1SUNBZ0lHZGxkRVZzWVhCelpXUTZJQ2dwSUQwK0lHVnNZWEJ6WldSY2JuMDdYRzVjYm1WNGNHOXlkQ0JqYjI1emRDQnpaWFJIYkc5aVlXeEVhV3hoZEdsdmJpQTlJQ2h1WlhkRWFXeGhkR2x2YmlrZ1BUNGdaR2xzWVhScGIyNGdQU0J1WlhkRWFXeGhkR2x2YmpzaVhYMD1cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL3Byb2Nlc3MvdGltZXIuanNcbiAqKiBtb2R1bGUgaWQgPSAzXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfQWN0aW9uMiA9IHJlcXVpcmUoJy4uL2FjdGlvbnMvQWN0aW9uJyk7XG5cbnZhciBfQWN0aW9uMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX0FjdGlvbjIpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmICghc2VsZikgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIGNhbGwgJiYgKHR5cGVvZiBjYWxsID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpID8gY2FsbCA6IHNlbGY7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgXCIgKyB0eXBlb2Ygc3VwZXJDbGFzcyk7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgZW51bWVyYWJsZTogZmFsc2UsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcykgOiBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzOyB9XG5cbi8qXG4gICAgTWV0aG9kcyBhbmQgcHJvcGVydGllcyB0byBhZGQgdG8gYm91bmQgQWN0aW9uc1xuKi9cbnZhciBib3VuZE9uU3RhcnQgPSBmdW5jdGlvbiAoYWN0aW9uKSB7XG4gICAgcmV0dXJuIGFjdGlvbi5hY3Rvci5hY3RpdmF0ZUFjdGlvbihhY3Rpb24uaWQsIGFjdGlvbik7XG59O1xudmFyIGJvdW5kT25TdG9wID0gZnVuY3Rpb24gKGFjdGlvbikge1xuICAgIHJldHVybiBhY3Rpb24uYWN0b3IuZGVhY3RpdmF0ZUFjdGlvbihhY3Rpb24uaWQpO1xufTtcbnZhciBib3VuZFByb3BzID0gZnVuY3Rpb24gKGFjdG9yKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgYWN0b3I6IGFjdG9yLFxuICAgICAgICBpc1ByaW9yaXR5OiB0cnVlLFxuICAgICAgICBvbjogYWN0b3Iub24sXG4gICAgICAgIF9vblN0YXJ0OiBib3VuZE9uU3RhcnQsXG4gICAgICAgIF9vblN0b3A6IGJvdW5kT25TdG9wLFxuICAgICAgICBvblJlbmRlcjogdW5kZWZpbmVkXG4gICAgfTtcbn07XG5cbnZhciBBY3RvciA9IChmdW5jdGlvbiAoX0FjdGlvbikge1xuICAgIF9pbmhlcml0cyhBY3RvciwgX0FjdGlvbik7XG5cbiAgICBmdW5jdGlvbiBBY3RvcigpIHtcbiAgICAgICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIEFjdG9yKTtcblxuICAgICAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgICAgICAgYXJnc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBfdGhpcyA9IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIF9BY3Rpb24uY2FsbC5hcHBseShfQWN0aW9uLCBbdGhpc10uY29uY2F0KGFyZ3MpKSk7XG5cbiAgICAgICAgX3RoaXMuYWN0aXZlQWN0aW9ucyA9IHt9O1xuICAgICAgICBfdGhpcy5udW1BY3RpdmVBY3Rpb25zID0gMDtcbiAgICAgICAgcmV0dXJuIF90aGlzO1xuICAgIH1cblxuICAgIEFjdG9yLnByb3RvdHlwZS5zZXQgPSBmdW5jdGlvbiBzZXQocHJvcHMsIGluc3RhbnQpIHtcbiAgICAgICAgaWYgKGluc3RhbnQgfHwgIXRoaXMucmVkdWNlcikge1xuICAgICAgICAgICAgX0FjdGlvbi5wcm90b3R5cGUuc2V0LmNhbGwodGhpcywgcHJvcHMpO1xuICAgICAgICAgICAgdGhpcy5vbmNlKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB2YXIgYWN0aW9uID0gdGhpcy5yZWR1Y2VyKHByb3BzKTtcbiAgICAgICAgICAgIGlmIChhY3Rpb24pIHtcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXJ0KGFjdGlvbik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgLypcbiAgICAgICAgQmluZCBBY3Rpb24gdG8gQWN0b3JcbiAgICAqL1xuXG4gICAgQWN0b3IucHJvdG90eXBlLmJpbmQgPSBmdW5jdGlvbiBiaW5kKGFjdGlvbikge1xuICAgICAgICB2YXIgaW5oZXJpdGVkQWN0aW9uID0gYWN0aW9uLmluaGVyaXQoKTtcbiAgICAgICAgdmFyIG5ld1ZhbHVlcyA9IHt9O1xuICAgICAgICB2YXIgaGFzTmV3VmFsdWVzID0gZmFsc2U7XG5cbiAgICAgICAgLy8gQ3JlYXRlIHZhbHVlcyBvbiBhY3RvciB0aGF0IGRvbid0IGV4aXN0XG4gICAgICAgIGZvciAodmFyIGtleSBpbiBpbmhlcml0ZWRBY3Rpb24udmFsdWVzKSB7XG4gICAgICAgICAgICBpZiAoaW5oZXJpdGVkQWN0aW9uLnZhbHVlcy5oYXNPd25Qcm9wZXJ0eShrZXkpICYmICF0aGlzLnZhbHVlcy5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgICAgICAgbmV3VmFsdWVzW2tleV0gPSBpbmhlcml0ZWRBY3Rpb24udmFsdWVzW2tleV07XG4gICAgICAgICAgICAgICAgaGFzTmV3VmFsdWVzID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChoYXNOZXdWYWx1ZXMpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0KHsgdmFsdWVzOiBuZXdWYWx1ZXMgfSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gaW5oZXJpdGVkQWN0aW9uLnNldChib3VuZFByb3BzKHRoaXMsIGluaGVyaXRlZEFjdGlvbikpO1xuICAgIH07XG5cbiAgICAvKlxuICAgICAgICBTdGFydCBBY3RvclxuICAgICAgICAgSWYgQWN0aW9uIGlzIHByb3ZpZGVkLCBiaW5kIGl0IHRvIHRoaXMgQWN0b3IgYW5kIHN0YXJ0XG4gICAgICAgICBAcGFyYW0gKG9wdGlvbmFsKSBbQWN0aW9uXVxuICAgICovXG5cbiAgICBBY3Rvci5wcm90b3R5cGUuc3RhcnQgPSBmdW5jdGlvbiBzdGFydChhY3Rpb24pIHtcbiAgICAgICAgX0FjdGlvbi5wcm90b3R5cGUuc3RhcnQuY2FsbCh0aGlzKTtcblxuICAgICAgICBpZiAoYWN0aW9uKSB7XG4gICAgICAgICAgICB2YXIgYm91bmRBY3Rpb24gPSB0aGlzLmJpbmQoYWN0aW9uKTtcbiAgICAgICAgICAgIGJvdW5kQWN0aW9uLnN0YXJ0KCk7XG5cbiAgICAgICAgICAgIHJldHVybiBib3VuZEFjdGlvbjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGZvciAodmFyIGtleSBpbiB0aGlzLmFjdGl2ZUFjdGlvbnMpIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5hY3RpdmVBY3Rpb25zLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIF9hY3Rpb24gPSB0aGlzLmFjdGl2ZUFjdGlvbnNba2V5XTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFfYWN0aW9uLmlzQWN0aXZlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBfYWN0aW9uLnN0YXJ0KCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xuXG4gICAgQWN0b3IucHJvdG90eXBlLnN0b3AgPSBmdW5jdGlvbiBzdG9wKCkge1xuICAgICAgICBfQWN0aW9uLnByb3RvdHlwZS5zdG9wLmNhbGwodGhpcyk7XG5cbiAgICAgICAgZm9yICh2YXIga2V5IGluIHRoaXMuYWN0aXZlQWN0aW9ucykge1xuICAgICAgICAgICAgaWYgKHRoaXMuYWN0aXZlQWN0aW9ucy5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5hY3RpdmVBY3Rpb25zW2tleV0uc3RvcCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfTtcblxuICAgIEFjdG9yLnByb3RvdHlwZS53aWxsUmVuZGVyID0gZnVuY3Rpb24gd2lsbFJlbmRlcihhY3RvciwgZnJhbWVTdGFtcCwgZWxhcHNlZCkge1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubnVtVmFsdWVLZXlzOyBpKyspIHtcbiAgICAgICAgICAgIHZhciBrZXkgPSB0aGlzLnZhbHVlS2V5c1tpXTtcbiAgICAgICAgICAgIHZhciB2YWx1ZSA9IHRoaXMudmFsdWVzW2tleV07XG5cbiAgICAgICAgICAgIGlmICh2YWx1ZS5kcml2ZXIpIHtcbiAgICAgICAgICAgICAgICB2YWx1ZS5jdXJyZW50ID0gdGhpcy5hY3RpdmVBY3Rpb25zW3ZhbHVlLmRyaXZlcl0udmFsdWVzW2tleV0uY3VycmVudDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBfQWN0aW9uLnByb3RvdHlwZS53aWxsUmVuZGVyLmNhbGwodGhpcywgYWN0b3IsIGZyYW1lU3RhbXAsIGVsYXBzZWQpO1xuICAgIH07XG5cbiAgICAvKlxuICAgICAgICBBZGQgYWN0aXZlIGFjdGlvbnNcbiAgICAgICAgIEBwYXJhbSBbbnVtYmVyXVxuICAgICAgICBAcGFyYW0gW0FjdGlvbl1cbiAgICAqL1xuXG4gICAgQWN0b3IucHJvdG90eXBlLmFjdGl2YXRlQWN0aW9uID0gZnVuY3Rpb24gYWN0aXZhdGVBY3Rpb24oaWQsIGFjdGlvbikge1xuICAgICAgICB0aGlzLmFjdGl2ZUFjdGlvbnNbaWRdID0gYWN0aW9uO1xuICAgICAgICB0aGlzLm51bUFjdGl2ZUFjdGlvbnMrKztcblxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFjdGlvbi5udW1WYWx1ZUtleXM7IGkrKykge1xuICAgICAgICAgICAgdmFyIGtleSA9IGFjdGlvbi52YWx1ZUtleXNbaV07XG4gICAgICAgICAgICB2YXIgYWN0aW9uVmFsdWUgPSBhY3Rpb24udmFsdWVzW2tleV07XG4gICAgICAgICAgICB2YXIgdmFsdWUgPSB0aGlzLnZhbHVlc1trZXldO1xuXG4gICAgICAgICAgICB2YWx1ZS5kcml2ZXIgPSBpZDtcbiAgICAgICAgICAgIGFjdGlvblZhbHVlLmZyb20gPSB2YWx1ZS5jdXJyZW50O1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMubnVtQWN0aXZlQWN0aW9ucykge1xuICAgICAgICAgICAgX0FjdGlvbi5wcm90b3R5cGUuc3RhcnQuY2FsbCh0aGlzKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICAvKlxuICAgICAgICBSZW1vdmUgYWN0aXZlIGFjdGlvbnNcbiAgICAgICAgIEBwYXJhbSBbbnVtYmVyXVxuICAgICovXG5cbiAgICBBY3Rvci5wcm90b3R5cGUuZGVhY3RpdmF0ZUFjdGlvbiA9IGZ1bmN0aW9uIGRlYWN0aXZhdGVBY3Rpb24oaWQpIHtcbiAgICAgICAgdmFyIGFjdGlvbiA9IHRoaXMuYWN0aXZlQWN0aW9uc1tpZF07XG5cbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhY3Rpb24ubnVtVmFsdWVLZXlzOyBpKyspIHtcbiAgICAgICAgICAgIHZhciBrZXkgPSBhY3Rpb24udmFsdWVLZXlzW2ldO1xuICAgICAgICAgICAgdmFyIHZhbHVlID0gdGhpcy52YWx1ZXNba2V5XTtcblxuICAgICAgICAgICAgdmFsdWUuZHJpdmVyID0gdW5kZWZpbmVkO1xuICAgICAgICB9XG5cbiAgICAgICAgZGVsZXRlIHRoaXMuYWN0aXZlQWN0aW9uc1tpZF07XG4gICAgICAgIHRoaXMubnVtQWN0aXZlQWN0aW9ucy0tO1xuXG4gICAgICAgIGlmICghdGhpcy5udW1BY3RpdmVBY3Rpb25zICYmIHRoaXMuaXNBY3RpdmUpIHtcbiAgICAgICAgICAgIF9BY3Rpb24ucHJvdG90eXBlLnN0b3AuY2FsbCh0aGlzKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICByZXR1cm4gQWN0b3I7XG59KShfQWN0aW9uMy5kZWZhdWx0KTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gQWN0b3I7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5OeVl5OWhZM1JwYjI1ekwwRmpkRzl5TG1weklsMHNJbTVoYldWeklqcGJYU3dpYldGd2NHbHVaM01pT2lJN096czdPenM3T3pzN096czdPenM3T3pzN1FVRkxRU3hKUVVGTkxGbEJRVmtzUjBGQlJ5eFZRVUZETEUxQlFVMDdWMEZCU3l4TlFVRk5MRU5CUVVNc1MwRkJTeXhEUVVGRExHTkJRV01zUTBGQlF5eE5RVUZOTEVOQlFVTXNSVUZCUlN4RlFVRkZMRTFCUVUwc1EwRkJRenREUVVGQkxFTkJRVU03UVVGRGFFWXNTVUZCVFN4WFFVRlhMRWRCUVVjc1ZVRkJReXhOUVVGTk8xZEJRVXNzVFVGQlRTeERRVUZETEV0QlFVc3NRMEZCUXl4blFrRkJaMElzUTBGQlF5eE5RVUZOTEVOQlFVTXNSVUZCUlN4RFFVRkRPME5CUVVFc1EwRkJRenRCUVVONlJTeEpRVUZOTEZWQlFWVXNSMEZCUnl4VlFVRkRMRXRCUVVzN1YwRkJUVHRCUVVNelFpeGhRVUZMTEVWQlFVVXNTMEZCU3p0QlFVTmFMR3RDUVVGVkxFVkJRVVVzU1VGQlNUdEJRVU5vUWl4VlFVRkZMRVZCUVVVc1MwRkJTeXhEUVVGRExFVkJRVVU3UVVGRFdpeG5Ra0ZCVVN4RlFVRkZMRmxCUVZrN1FVRkRkRUlzWlVGQlR5eEZRVUZGTEZkQlFWYzdRVUZEY0VJc1owSkJRVkVzUlVGQlJTeFRRVUZUTzB0QlEzUkNPME5CUVVNc1EwRkJRenM3U1VGRmEwSXNTMEZCU3p0alFVRk1MRXRCUVVzN08wRkJRM1JDTEdGQlJHbENMRXRCUVVzc1IwRkRSRHM0UWtGRVNpeExRVUZMT3pzd1EwRkRVQ3hKUVVGSk8wRkJRVW9zWjBKQlFVazdPenR4UkVGRFppd3dRMEZCVXl4SlFVRkpMRVZCUVVNN08wRkJRMlFzWTBGQlN5eGhRVUZoTEVkQlFVY3NSVUZCUlN4RFFVRkRPMEZCUTNoQ0xHTkJRVXNzWjBKQlFXZENMRWRCUVVjc1EwRkJReXhEUVVGRE96dExRVU0zUWpzN1FVRk1aMElzVTBGQlN5eFhRVTkwUWl4SFFVRkhMR2RDUVVGRExFdEJRVXNzUlVGQlJTeFBRVUZQTEVWQlFVVTdRVUZEYUVJc1dVRkJTU3hQUVVGUExFbEJRVWtzUTBGQlF5eEpRVUZKTEVOQlFVTXNUMEZCVHl4RlFVRkZPMEZCUXpGQ0xEaENRVUZOTEVkQlFVY3NTMEZCUVN4UFFVRkRMRXRCUVVzc1EwRkJReXhEUVVGRE8wRkJRMnBDTEdkQ1FVRkpMRU5CUVVNc1NVRkJTU3hGUVVGRkxFTkJRVU03VTBGRFppeE5RVUZOTzBGQlEwZ3NaMEpCUVUwc1RVRkJUU3hIUVVGSExFbEJRVWtzUTBGQlF5eFBRVUZQTEVOQlFVTXNTMEZCU3l4RFFVRkRMRU5CUVVNN1FVRkRia01zWjBKQlFVa3NUVUZCVFN4RlFVRkZPMEZCUTFJc2IwSkJRVWtzUTBGQlF5eExRVUZMTEVOQlFVTXNUVUZCVFN4RFFVRkRMRU5CUVVNN1lVRkRkRUk3VTBGRFNqdExRVU5LT3pzN096czdRVUZxUW1kQ0xGTkJRVXNzVjBGelFuUkNMRWxCUVVrc2FVSkJRVU1zVFVGQlRTeEZRVUZGTzBGQlExUXNXVUZCVFN4bFFVRmxMRWRCUVVjc1RVRkJUU3hEUVVGRExFOUJRVThzUlVGQlJTeERRVUZETzBGQlEzcERMRmxCUVVrc1UwRkJVeXhIUVVGSExFVkJRVVVzUTBGQlF6dEJRVU51UWl4WlFVRkpMRmxCUVZrc1IwRkJSeXhMUVVGTE96czdRVUZCUXl4QlFVZDZRaXhoUVVGTExFbEJRVWtzUjBGQlJ5eEpRVUZKTEdWQlFXVXNRMEZCUXl4TlFVRk5MRVZCUVVVN1FVRkRjRU1zWjBKQlFVa3NaVUZCWlN4RFFVRkRMRTFCUVUwc1EwRkJReXhqUVVGakxFTkJRVU1zUjBGQlJ5eERRVUZETEVsQlFVa3NRMEZCUXl4SlFVRkpMRU5CUVVNc1RVRkJUU3hEUVVGRExHTkJRV01zUTBGQlF5eEhRVUZITEVOQlFVTXNSVUZCUlR0QlFVTm9SaXg1UWtGQlV5eERRVUZETEVkQlFVY3NRMEZCUXl4SFFVRkhMR1ZCUVdVc1EwRkJReXhOUVVGTkxFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTTdRVUZETjBNc05FSkJRVmtzUjBGQlJ5eEpRVUZKTEVOQlFVTTdZVUZEZGtJN1UwRkRTanM3UVVGRlJDeFpRVUZKTEZsQlFWa3NSVUZCUlR0QlFVTmtMR2RDUVVGSkxFTkJRVU1zUjBGQlJ5eERRVUZETEVWQlFVVXNUVUZCVFN4RlFVRkZMRk5CUVZNc1JVRkJSU3hEUVVGRExFTkJRVU03VTBGRGJrTTdPMEZCUlVRc1pVRkJUeXhsUVVGbExFTkJRVU1zUjBGQlJ5eERRVUZETEZWQlFWVXNRMEZCUXl4SlFVRkpMRVZCUVVVc1pVRkJaU3hEUVVGRExFTkJRVU1zUTBGQlF6dExRVU5xUlRzN096czdPenM3UVVGNFEyZENMRk5CUVVzc1YwRnBSSFJDTEV0QlFVc3NhMEpCUVVNc1RVRkJUU3hGUVVGRk8wRkJRMVlzTUVKQlFVMHNTMEZCU3l4TFFVRkJMRTFCUVVVc1EwRkJRenM3UVVGRlpDeFpRVUZKTEUxQlFVMHNSVUZCUlR0QlFVTlNMR2RDUVVGTkxGZEJRVmNzUjBGQlJ5eEpRVUZKTEVOQlFVTXNTVUZCU1N4RFFVRkRMRTFCUVUwc1EwRkJReXhEUVVGRE8wRkJRM1JETEhWQ1FVRlhMRU5CUVVNc1MwRkJTeXhGUVVGRkxFTkJRVU03TzBGQlJYQkNMRzFDUVVGUExGZEJRVmNzUTBGQlF6dFRRVU4wUWl4TlFVRk5PMEZCUTBnc2FVSkJRVXNzU1VGQlNTeEhRVUZITEVsQlFVa3NTVUZCU1N4RFFVRkRMR0ZCUVdFc1JVRkJSVHRCUVVOb1F5eHZRa0ZCU1N4SlFVRkpMRU5CUVVNc1lVRkJZU3hEUVVGRExHTkJRV01zUTBGQlF5eEhRVUZITEVOQlFVTXNSVUZCUlR0QlFVTjRReXgzUWtGQlRTeFBRVUZOTEVkQlFVY3NTVUZCU1N4RFFVRkRMR0ZCUVdFc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF6dEJRVU4yUXl4M1FrRkJTU3hEUVVGRExFOUJRVTBzUTBGQlF5eFJRVUZSTEVWQlFVVTdRVUZEYkVJc0swSkJRVTBzUTBGQlF5eExRVUZMTEVWQlFVVXNRMEZCUXp0eFFrRkRiRUk3YVVKQlEwbzdZVUZEU2p0VFFVTktPenRCUVVWRUxHVkJRVThzU1VGQlNTeERRVUZETzB0QlEyWTdPMEZCY2tWblFpeFRRVUZMTEZkQmRVVjBRaXhKUVVGSkxHMUNRVUZITzBGQlEwZ3NNRUpCUVUwc1NVRkJTU3hMUVVGQkxFMUJRVVVzUTBGQlF6czdRVUZGWWl4aFFVRkxMRWxCUVVrc1IwRkJSeXhKUVVGSkxFbEJRVWtzUTBGQlF5eGhRVUZoTEVWQlFVVTdRVUZEYUVNc1owSkJRVWtzU1VGQlNTeERRVUZETEdGQlFXRXNRMEZCUXl4alFVRmpMRU5CUVVNc1IwRkJSeXhEUVVGRExFVkJRVVU3UVVGRGVFTXNiMEpCUVVrc1EwRkJReXhoUVVGaExFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTXNTVUZCU1N4RlFVRkZMRU5CUVVNN1lVRkRiRU03VTBGRFNqczdRVUZGUkN4bFFVRlBMRWxCUVVrc1EwRkJRenRMUVVObU96dEJRV3BHWjBJc1UwRkJTeXhYUVcxR2RFSXNWVUZCVlN4MVFrRkJReXhMUVVGTExFVkJRVVVzVlVGQlZTeEZRVUZGTEU5QlFVOHNSVUZCUlR0QlFVTnVReXhoUVVGTExFbEJRVWtzUTBGQlF5eEhRVUZITEVOQlFVTXNSVUZCUlN4RFFVRkRMRWRCUVVjc1NVRkJTU3hEUVVGRExGbEJRVmtzUlVGQlJTeERRVUZETEVWQlFVVXNSVUZCUlR0QlFVTjRReXhuUWtGQlRTeEhRVUZITEVkQlFVY3NTVUZCU1N4RFFVRkRMRk5CUVZNc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF6dEJRVU01UWl4blFrRkJUU3hMUVVGTExFZEJRVWNzU1VGQlNTeERRVUZETEUxQlFVMHNRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJRenM3UVVGRkwwSXNaMEpCUVVrc1MwRkJTeXhEUVVGRExFMUJRVTBzUlVGQlJUdEJRVU5rTEhGQ1FVRkxMRU5CUVVNc1QwRkJUeXhIUVVGSExFbEJRVWtzUTBGQlF5eGhRVUZoTEVOQlFVTXNTMEZCU3l4RFFVRkRMRTFCUVUwc1EwRkJReXhEUVVGRExFMUJRVTBzUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXl4UFFVRlBMRU5CUVVNN1lVRkRlRVU3VTBGRFNqczdRVUZGUkN4bFFVRlBMR3RDUVVGTkxGVkJRVlVzUzBGQlFTeFBRVUZETEV0QlFVc3NSVUZCUlN4VlFVRlZMRVZCUVVVc1QwRkJUeXhEUVVGRExFTkJRVU03UzBGRGRrUTdPenM3T3pzN08wRkJPVVpuUWl4VFFVRkxMRmRCYzBkMFFpeGpRVUZqTERKQ1FVRkRMRVZCUVVVc1JVRkJSU3hOUVVGTkxFVkJRVVU3UVVGRGRrSXNXVUZCU1N4RFFVRkRMR0ZCUVdFc1EwRkJReXhGUVVGRkxFTkJRVU1zUjBGQlJ5eE5RVUZOTEVOQlFVTTdRVUZEYUVNc1dVRkJTU3hEUVVGRExHZENRVUZuUWl4RlFVRkZMRU5CUVVNN08wRkJSWGhDTEdGQlFVc3NTVUZCU1N4RFFVRkRMRWRCUVVjc1EwRkJReXhGUVVGRkxFTkJRVU1zUjBGQlJ5eE5RVUZOTEVOQlFVTXNXVUZCV1N4RlFVRkZMRU5CUVVNc1JVRkJSU3hGUVVGRk8wRkJRekZETEdkQ1FVRk5MRWRCUVVjc1IwRkJSeXhOUVVGTkxFTkJRVU1zVTBGQlV5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRPMEZCUTJoRExHZENRVUZOTEZkQlFWY3NSMEZCUnl4TlFVRk5MRU5CUVVNc1RVRkJUU3hEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETzBGQlEzWkRMR2RDUVVGTkxFdEJRVXNzUjBGQlJ5eEpRVUZKTEVOQlFVTXNUVUZCVFN4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRE96dEJRVVV2UWl4cFFrRkJTeXhEUVVGRExFMUJRVTBzUjBGQlJ5eEZRVUZGTEVOQlFVTTdRVUZEYkVJc2RVSkJRVmNzUTBGQlF5eEpRVUZKTEVkQlFVY3NTMEZCU3l4RFFVRkRMRTlCUVU4c1EwRkJRenRUUVVOd1F6czdRVUZGUkN4WlFVRkpMRWxCUVVrc1EwRkJReXhuUWtGQlowSXNSVUZCUlR0QlFVTjJRaXc0UWtGQlRTeExRVUZMTEV0QlFVRXNUVUZCUlN4RFFVRkRPMU5CUTJwQ08wdEJRMG83T3pzN096czdRVUYwU0dkQ0xGTkJRVXNzVjBFMlNIUkNMR2RDUVVGblFpdzJRa0ZCUXl4RlFVRkZMRVZCUVVVN1FVRkRha0lzV1VGQlRTeE5RVUZOTEVkQlFVY3NTVUZCU1N4RFFVRkRMR0ZCUVdFc1EwRkJReXhGUVVGRkxFTkJRVU1zUTBGQlF6czdRVUZGZEVNc1lVRkJTeXhKUVVGSkxFTkJRVU1zUjBGQlJ5eERRVUZETEVWQlFVVXNRMEZCUXl4SFFVRkhMRTFCUVUwc1EwRkJReXhaUVVGWkxFVkJRVVVzUTBGQlF5eEZRVUZGTEVWQlFVVTdRVUZETVVNc1owSkJRVTBzUjBGQlJ5eEhRVUZITEUxQlFVMHNRMEZCUXl4VFFVRlRMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU03UVVGRGFFTXNaMEpCUVUwc1MwRkJTeXhIUVVGSExFbEJRVWtzUTBGQlF5eE5RVUZOTEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNN08wRkJSUzlDTEdsQ1FVRkxMRU5CUVVNc1RVRkJUU3hIUVVGSExGTkJRVk1zUTBGQlF6dFRRVU0xUWpzN1FVRkZSQ3hsUVVGUExFbEJRVWtzUTBGQlF5eGhRVUZoTEVOQlFVTXNSVUZCUlN4RFFVRkRMRU5CUVVNN1FVRkRPVUlzV1VGQlNTeERRVUZETEdkQ1FVRm5RaXhGUVVGRkxFTkJRVU03TzBGQlJYaENMRmxCUVVrc1EwRkJReXhKUVVGSkxFTkJRVU1zWjBKQlFXZENMRWxCUVVrc1NVRkJTU3hEUVVGRExGRkJRVkVzUlVGQlJUdEJRVU42UXl3NFFrRkJUU3hKUVVGSkxFdEJRVUVzVFVGQlJTeERRVUZETzFOQlEyaENPMHRCUTBvN08xZEJOMGxuUWl4TFFVRkxPenM3YTBKQlFVd3NTMEZCU3lJc0ltWnBiR1VpT2lKQlkzUnZjaTVxY3lJc0luTnZkWEpqWlZKdmIzUWlPaUl2VlhObGNuTXZUV0YwZEZCbGNuSjVMMU5wZEdWekwzQnZjRzF2ZEdsdmJpSXNJbk52ZFhKalpYTkRiMjUwWlc1MElqcGJJbWx0Y0c5eWRDQkJZM1JwYjI0Z1puSnZiU0FuTGk0dllXTjBhVzl1Y3k5QlkzUnBiMjRuTzF4dVhHNHZLbHh1SUNBZ0lFMWxkR2h2WkhNZ1lXNWtJSEJ5YjNCbGNuUnBaWE1nZEc4Z1lXUmtJSFJ2SUdKdmRXNWtJRUZqZEdsdmJuTmNiaW92WEc1amIyNXpkQ0JpYjNWdVpFOXVVM1JoY25RZ1BTQW9ZV04wYVc5dUtTQTlQaUJoWTNScGIyNHVZV04wYjNJdVlXTjBhWFpoZEdWQlkzUnBiMjRvWVdOMGFXOXVMbWxrTENCaFkzUnBiMjRwTzF4dVkyOXVjM1FnWW05MWJtUlBibE4wYjNBZ1BTQW9ZV04wYVc5dUtTQTlQaUJoWTNScGIyNHVZV04wYjNJdVpHVmhZM1JwZG1GMFpVRmpkR2x2YmloaFkzUnBiMjR1YVdRcE8xeHVZMjl1YzNRZ1ltOTFibVJRY205d2N5QTlJQ2hoWTNSdmNpa2dQVDRnS0h0Y2JpQWdJQ0JoWTNSdmNqb2dZV04wYjNJc1hHNGdJQ0FnYVhOUWNtbHZjbWwwZVRvZ2RISjFaU3hjYmlBZ0lDQnZiam9nWVdOMGIzSXViMjRzWEc0Z0lDQWdYMjl1VTNSaGNuUTZJR0p2ZFc1a1QyNVRkR0Z5ZEN4Y2JpQWdJQ0JmYjI1VGRHOXdPaUJpYjNWdVpFOXVVM1J2Y0N4Y2JpQWdJQ0J2YmxKbGJtUmxjam9nZFc1a1pXWnBibVZrWEc1OUtUdGNibHh1Wlhod2IzSjBJR1JsWm1GMWJIUWdZMnhoYzNNZ1FXTjBiM0lnWlhoMFpXNWtjeUJCWTNScGIyNGdlMXh1SUNBZ0lHTnZibk4wY25WamRHOXlLQzR1TG1GeVozTXBJSHRjYmlBZ0lDQWdJQ0FnYzNWd1pYSW9MaTR1WVhKbmN5azdYRzRnSUNBZ0lDQWdJSFJvYVhNdVlXTjBhWFpsUVdOMGFXOXVjeUE5SUh0OU8xeHVJQ0FnSUNBZ0lDQjBhR2x6TG01MWJVRmpkR2wyWlVGamRHbHZibk1nUFNBd08xeHVJQ0FnSUgxY2JseHVJQ0FnSUhObGRDaHdjbTl3Y3l3Z2FXNXpkR0Z1ZENrZ2UxeHVJQ0FnSUNBZ0lDQnBaaUFvYVc1emRHRnVkQ0I4ZkNBaGRHaHBjeTV5WldSMVkyVnlLU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQnpkWEJsY2k1elpYUW9jSEp2Y0hNcE8xeHVJQ0FnSUNBZ0lDQWdJQ0FnZEdocGN5NXZibU5sS0NrN1hHNGdJQ0FnSUNBZ0lIMGdaV3h6WlNCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0JqYjI1emRDQmhZM1JwYjI0Z1BTQjBhR2x6TG5KbFpIVmpaWElvY0hKdmNITXBPMXh1SUNBZ0lDQWdJQ0FnSUNBZ2FXWWdLR0ZqZEdsdmJpa2dlMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJSFJvYVhNdWMzUmhjblFvWVdOMGFXOXVLVHRjYmlBZ0lDQWdJQ0FnSUNBZ0lIMWNiaUFnSUNBZ0lDQWdmVnh1SUNBZ0lIMWNibHh1SUNBZ0lDOHFYRzRnSUNBZ0lDQWdJRUpwYm1RZ1FXTjBhVzl1SUhSdklFRmpkRzl5WEc0Z0lDQWdLaTljYmlBZ0lDQmlhVzVrS0dGamRHbHZiaWtnZTF4dUlDQWdJQ0FnSUNCamIyNXpkQ0JwYm1obGNtbDBaV1JCWTNScGIyNGdQU0JoWTNScGIyNHVhVzVvWlhKcGRDZ3BPMXh1SUNBZ0lDQWdJQ0JzWlhRZ2JtVjNWbUZzZFdWeklEMGdlMzA3WEc0Z0lDQWdJQ0FnSUd4bGRDQm9ZWE5PWlhkV1lXeDFaWE1nUFNCbVlXeHpaVHRjYmx4dUlDQWdJQ0FnSUNBdkx5QkRjbVZoZEdVZ2RtRnNkV1Z6SUc5dUlHRmpkRzl5SUhSb1lYUWdaRzl1SjNRZ1pYaHBjM1JjYmlBZ0lDQWdJQ0FnWm05eUlDaHNaWFFnYTJWNUlHbHVJR2x1YUdWeWFYUmxaRUZqZEdsdmJpNTJZV3gxWlhNcElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUdsbUlDaHBibWhsY21sMFpXUkJZM1JwYjI0dWRtRnNkV1Z6TG1oaGMwOTNibEJ5YjNCbGNuUjVLR3RsZVNrZ0ppWWdJWFJvYVhNdWRtRnNkV1Z6TG1oaGMwOTNibEJ5YjNCbGNuUjVLR3RsZVNrcElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQnVaWGRXWVd4MVpYTmJhMlY1WFNBOUlHbHVhR1Z5YVhSbFpFRmpkR2x2Ymk1MllXeDFaWE5iYTJWNVhUdGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQm9ZWE5PWlhkV1lXeDFaWE1nUFNCMGNuVmxPMXh1SUNBZ0lDQWdJQ0FnSUNBZ2ZWeHVJQ0FnSUNBZ0lDQjlYRzVjYmlBZ0lDQWdJQ0FnYVdZZ0tHaGhjMDVsZDFaaGJIVmxjeWtnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdkR2hwY3k1elpYUW9leUIyWVd4MVpYTTZJRzVsZDFaaGJIVmxjeUI5S1R0Y2JpQWdJQ0FnSUNBZ2ZWeHVYRzRnSUNBZ0lDQWdJSEpsZEhWeWJpQnBibWhsY21sMFpXUkJZM1JwYjI0dWMyVjBLR0p2ZFc1a1VISnZjSE1vZEdocGN5d2dhVzVvWlhKcGRHVmtRV04wYVc5dUtTazdYRzRnSUNBZ2ZWeHVYRzRnSUNBZ0x5cGNiaUFnSUNBZ0lDQWdVM1JoY25RZ1FXTjBiM0pjYmx4dUlDQWdJQ0FnSUNCSlppQkJZM1JwYjI0Z2FYTWdjSEp2ZG1sa1pXUXNJR0pwYm1RZ2FYUWdkRzhnZEdocGN5QkJZM1J2Y2lCaGJtUWdjM1JoY25SY2JseHVJQ0FnSUNBZ0lDQkFjR0Z5WVcwZ0tHOXdkR2x2Ym1Gc0tTQmJRV04wYVc5dVhWeHVJQ0FnSUNvdlhHNGdJQ0FnYzNSaGNuUW9ZV04wYVc5dUtTQjdYRzRnSUNBZ0lDQWdJSE4xY0dWeUxuTjBZWEowS0NrN1hHNWNiaUFnSUNBZ0lDQWdhV1lnS0dGamRHbHZiaWtnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdZMjl1YzNRZ1ltOTFibVJCWTNScGIyNGdQU0IwYUdsekxtSnBibVFvWVdOMGFXOXVLVHRjYmlBZ0lDQWdJQ0FnSUNBZ0lHSnZkVzVrUVdOMGFXOXVMbk4wWVhKMEtDazdYRzVjYmlBZ0lDQWdJQ0FnSUNBZ0lISmxkSFZ5YmlCaWIzVnVaRUZqZEdsdmJqdGNiaUFnSUNBZ0lDQWdmU0JsYkhObElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUdadmNpQW9iR1YwSUd0bGVTQnBiaUIwYUdsekxtRmpkR2wyWlVGamRHbHZibk1wSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCcFppQW9kR2hwY3k1aFkzUnBkbVZCWTNScGIyNXpMbWhoYzA5M2JsQnliM0JsY25SNUtHdGxlU2twSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdZMjl1YzNRZ1lXTjBhVzl1SUQwZ2RHaHBjeTVoWTNScGRtVkJZM1JwYjI1elcydGxlVjA3WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lHbG1JQ2doWVdOMGFXOXVMbWx6UVdOMGFYWmxLU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0JoWTNScGIyNHVjM1JoY25Rb0tUdGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnZlZ4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUgxY2JpQWdJQ0FnSUNBZ0lDQWdJSDFjYmlBZ0lDQWdJQ0FnZlZ4dVhHNGdJQ0FnSUNBZ0lISmxkSFZ5YmlCMGFHbHpPMXh1SUNBZ0lIMWNibHh1SUNBZ0lITjBiM0FvS1NCN1hHNGdJQ0FnSUNBZ0lITjFjR1Z5TG5OMGIzQW9LVHRjYmx4dUlDQWdJQ0FnSUNCbWIzSWdLR3hsZENCclpYa2dhVzRnZEdocGN5NWhZM1JwZG1WQlkzUnBiMjV6S1NCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0JwWmlBb2RHaHBjeTVoWTNScGRtVkJZM1JwYjI1ekxtaGhjMDkzYmxCeWIzQmxjblI1S0d0bGVTa3BJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0IwYUdsekxtRmpkR2wyWlVGamRHbHZibk5iYTJWNVhTNXpkRzl3S0NrN1hHNGdJQ0FnSUNBZ0lDQWdJQ0I5WEc0Z0lDQWdJQ0FnSUgxY2JseHVJQ0FnSUNBZ0lDQnlaWFIxY200Z2RHaHBjenRjYmlBZ0lDQjlYRzVjYmlBZ0lDQjNhV3hzVW1WdVpHVnlLR0ZqZEc5eUxDQm1jbUZ0WlZOMFlXMXdMQ0JsYkdGd2MyVmtLU0I3WEc0Z0lDQWdJQ0FnSUdadmNpQW9iR1YwSUdrZ1BTQXdPeUJwSUR3Z2RHaHBjeTV1ZFcxV1lXeDFaVXRsZVhNN0lHa3JLeWtnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdZMjl1YzNRZ2EyVjVJRDBnZEdocGN5NTJZV3gxWlV0bGVYTmJhVjA3WEc0Z0lDQWdJQ0FnSUNBZ0lDQmpiMjV6ZENCMllXeDFaU0E5SUhSb2FYTXVkbUZzZFdWelcydGxlVjA3WEc1Y2JpQWdJQ0FnSUNBZ0lDQWdJR2xtSUNoMllXeDFaUzVrY21sMlpYSXBJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0IyWVd4MVpTNWpkWEp5Wlc1MElEMGdkR2hwY3k1aFkzUnBkbVZCWTNScGIyNXpXM1poYkhWbExtUnlhWFpsY2wwdWRtRnNkV1Z6VzJ0bGVWMHVZM1Z5Y21WdWREdGNiaUFnSUNBZ0lDQWdJQ0FnSUgxY2JpQWdJQ0FnSUNBZ2ZWeHVYRzRnSUNBZ0lDQWdJSEpsZEhWeWJpQnpkWEJsY2k1M2FXeHNVbVZ1WkdWeUtHRmpkRzl5TENCbWNtRnRaVk4wWVcxd0xDQmxiR0Z3YzJWa0tUdGNiaUFnSUNCOVhHNWNiaUFnSUNBdktseHVJQ0FnSUNBZ0lDQkJaR1FnWVdOMGFYWmxJR0ZqZEdsdmJuTmNibHh1SUNBZ0lDQWdJQ0JBY0dGeVlXMGdXMjUxYldKbGNsMWNiaUFnSUNBZ0lDQWdRSEJoY21GdElGdEJZM1JwYjI1ZFhHNGdJQ0FnS2k5Y2JpQWdJQ0JoWTNScGRtRjBaVUZqZEdsdmJpaHBaQ3dnWVdOMGFXOXVLU0I3WEc0Z0lDQWdJQ0FnSUhSb2FYTXVZV04wYVhabFFXTjBhVzl1YzF0cFpGMGdQU0JoWTNScGIyNDdYRzRnSUNBZ0lDQWdJSFJvYVhNdWJuVnRRV04wYVhabFFXTjBhVzl1Y3lzck8xeHVYRzRnSUNBZ0lDQWdJR1p2Y2lBb2JHVjBJR2tnUFNBd095QnBJRHdnWVdOMGFXOXVMbTUxYlZaaGJIVmxTMlY1Y3pzZ2FTc3JLU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQmpiMjV6ZENCclpYa2dQU0JoWTNScGIyNHVkbUZzZFdWTFpYbHpXMmxkTzF4dUlDQWdJQ0FnSUNBZ0lDQWdZMjl1YzNRZ1lXTjBhVzl1Vm1Gc2RXVWdQU0JoWTNScGIyNHVkbUZzZFdWelcydGxlVjA3WEc0Z0lDQWdJQ0FnSUNBZ0lDQmpiMjV6ZENCMllXeDFaU0E5SUhSb2FYTXVkbUZzZFdWelcydGxlVjA3WEc1Y2JpQWdJQ0FnSUNBZ0lDQWdJSFpoYkhWbExtUnlhWFpsY2lBOUlHbGtPMXh1SUNBZ0lDQWdJQ0FnSUNBZ1lXTjBhVzl1Vm1Gc2RXVXVabkp2YlNBOUlIWmhiSFZsTG1OMWNuSmxiblE3WEc0Z0lDQWdJQ0FnSUgxY2JseHVJQ0FnSUNBZ0lDQnBaaUFvZEdocGN5NXVkVzFCWTNScGRtVkJZM1JwYjI1ektTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNCemRYQmxjaTV6ZEdGeWRDZ3BPMXh1SUNBZ0lDQWdJQ0I5WEc0Z0lDQWdmVnh1WEc0Z0lDQWdMeXBjYmlBZ0lDQWdJQ0FnVW1WdGIzWmxJR0ZqZEdsMlpTQmhZM1JwYjI1elhHNWNiaUFnSUNBZ0lDQWdRSEJoY21GdElGdHVkVzFpWlhKZFhHNGdJQ0FnS2k5Y2JpQWdJQ0JrWldGamRHbDJZWFJsUVdOMGFXOXVLR2xrS1NCN1hHNGdJQ0FnSUNBZ0lHTnZibk4wSUdGamRHbHZiaUE5SUhSb2FYTXVZV04wYVhabFFXTjBhVzl1YzF0cFpGMDdYRzVjYmlBZ0lDQWdJQ0FnWm05eUlDaHNaWFFnYVNBOUlEQTdJR2tnUENCaFkzUnBiMjR1Ym5WdFZtRnNkV1ZMWlhsek95QnBLeXNwSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJR052Ym5OMElHdGxlU0E5SUdGamRHbHZiaTUyWVd4MVpVdGxlWE5iYVYwN1hHNGdJQ0FnSUNBZ0lDQWdJQ0JqYjI1emRDQjJZV3gxWlNBOUlIUm9hWE11ZG1Gc2RXVnpXMnRsZVYwN1hHNWNiaUFnSUNBZ0lDQWdJQ0FnSUhaaGJIVmxMbVJ5YVhabGNpQTlJSFZ1WkdWbWFXNWxaRHRjYmlBZ0lDQWdJQ0FnZlZ4dVhHNGdJQ0FnSUNBZ0lHUmxiR1YwWlNCMGFHbHpMbUZqZEdsMlpVRmpkR2x2Ym5OYmFXUmRPMXh1SUNBZ0lDQWdJQ0IwYUdsekxtNTFiVUZqZEdsMlpVRmpkR2x2Ym5NdExUdGNibHh1SUNBZ0lDQWdJQ0JwWmlBb0lYUm9hWE11Ym5WdFFXTjBhWFpsUVdOMGFXOXVjeUFtSmlCMGFHbHpMbWx6UVdOMGFYWmxLU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQnpkWEJsY2k1emRHOXdLQ2s3WEc0Z0lDQWdJQ0FnSUgxY2JpQWdJQ0I5WEc1OUlsMTlcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2FjdGlvbnMvQWN0b3IuanNcbiAqKiBtb2R1bGUgaWQgPSA0XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbnZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfQWN0aW9uMiA9IHJlcXVpcmUoJy4vQWN0aW9uJyk7XG5cbnZhciBfQWN0aW9uMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX0FjdGlvbjIpO1xuXG52YXIgX3ByZXNldEVhc2luZyA9IHJlcXVpcmUoJy4vZWFzaW5nL3ByZXNldC1lYXNpbmcnKTtcblxudmFyIF9wcmVzZXRFYXNpbmcyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcHJlc2V0RWFzaW5nKTtcblxudmFyIF91dGlscyA9IHJlcXVpcmUoJy4uL2luYy91dGlscycpO1xuXG52YXIgX2NhbGMgPSByZXF1aXJlKCcuLi9pbmMvY2FsYycpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmICghc2VsZikgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIGNhbGwgJiYgKHR5cGVvZiBjYWxsID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpID8gY2FsbCA6IHNlbGY7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgXCIgKyB0eXBlb2Ygc3VwZXJDbGFzcyk7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgZW51bWVyYWJsZTogZmFsc2UsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcykgOiBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzOyB9XG5cbnZhciBDT1VOVCA9ICdDb3VudCc7XG52YXIgTkVYVF9TVEVQUyA9IHtcbiAgICBsb29wOiAncmVzdGFydCcsXG4gICAgeW95bzogJ3JldmVyc2UnLFxuICAgIGZsaXA6ICdmbGlwVmFsdWVzJ1xufTtcblxuLypcbiAgICBFYXNlIHZhbHVlIHdpdGhpbiByYW5nZWQgcGFyYW1ldGVyc1xuICAgIFxuICAgIEBwYXJhbSBbbnVtYmVyXTogUHJvZ3Jlc3MgYmV0d2VlbiAwIGFuZCAxXG4gICAgQHBhcmFtIFtudW1iZXJdOiBWYWx1ZSBvZiAwIHByb2dyZXNzXG4gICAgQHBhcmFtIFtudW1iZXJdOiBWYWx1ZSBvZiAxIHByb2dyZXNzXG4gICAgQHBhcmFtIFtzdHJpbmcgfHwgZnVuY3Rpb25dOiBOYW1lIG9mIHByZXNldCBlYXNpbmdcbiAgICAgICAgdG8gdXNlIG9yIGdlbmVyYXRlZCBlYXNpbmcgZnVuY3Rpb25cbiAgICBAcmV0dXJuIFtudW1iZXJdOiBWYWx1ZSBvZiBlYXNlZCBwcm9ncmVzcyBpbiByYW5nZVxuKi9cbnZhciBlYXNlID0gZnVuY3Rpb24gKHByb2dyZXNzLCBmcm9tLCB0bywgZWFzZSkge1xuICAgIHZhciBwcm9ncmVzc0xpbWl0ZWQgPSAoMCwgX2NhbGMucmVzdHJpY3QpKHByb2dyZXNzLCAwLCAxKTtcbiAgICB2YXIgZWFzZWRQcm9ncmVzcyA9IGVhc2UocHJvZ3Jlc3NMaW1pdGVkKTtcblxuICAgIHJldHVybiAoMCwgX2NhbGMuZ2V0VmFsdWVGcm9tUHJvZ3Jlc3MpKGVhc2VkUHJvZ3Jlc3MsIGZyb20sIHRvKTtcbn07XG5cbnZhciBUd2VlbiA9IChmdW5jdGlvbiAoX0FjdGlvbikge1xuICAgIF9pbmhlcml0cyhUd2VlbiwgX0FjdGlvbik7XG5cbiAgICBmdW5jdGlvbiBUd2VlbigpIHtcbiAgICAgICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFR3ZWVuKTtcblxuICAgICAgICByZXR1cm4gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgX0FjdGlvbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpKTtcbiAgICB9XG5cbiAgICBUd2Vlbi5wcm90b3R5cGUuc3RhcnQgPSBmdW5jdGlvbiBzdGFydCgpIHtcbiAgICAgICAgX0FjdGlvbi5wcm90b3R5cGUuc3RhcnQuY2FsbCh0aGlzKTtcbiAgICAgICAgdGhpcy5lbGFwc2VkID0gMDtcbiAgICAgICAgdGhpcy5mbGlwQ291bnQgPSB0aGlzLnlveW9Db3VudCA9IHRoaXMubG9vcENvdW50ID0gMDtcblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xuXG4gICAgVHdlZW4ucHJvdG90eXBlLm9uVXBkYXRlID0gZnVuY3Rpb24gb25VcGRhdGUodHdlZW4sIGZyYW1lU3RhbXAsIGVsYXBzZWQpIHtcbiAgICAgICAgdmFyIHByb2dyZXNzVGFyZ2V0ID0gdGhpcy5wbGF5RGlyZWN0aW9uID09PSAxID8gMSA6IDA7XG5cbiAgICAgICAgdGhpcy5lbmRlZCA9IHRydWU7XG4gICAgICAgIHRoaXMuZWxhcHNlZCArPSBlbGFwc2VkICogdGhpcy5kaWxhdGUgKiB0aGlzLnBsYXlEaXJlY3Rpb247XG5cbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLm51bVZhbHVlS2V5czsgaSsrKSB7XG4gICAgICAgICAgICB2YXIga2V5ID0gdGhpcy52YWx1ZUtleXNbaV07XG4gICAgICAgICAgICB2YXIgdmFsdWUgPSB0aGlzLnZhbHVlc1trZXldO1xuXG4gICAgICAgICAgICB2YXIgcHJvZ3Jlc3MgPSAoMCwgX2NhbGMucmVzdHJpY3QpKCgwLCBfY2FsYy5nZXRQcm9ncmVzc0Zyb21WYWx1ZSkodGhpcy5lbGFwc2VkIC0gdmFsdWUuZGVsYXksIDAsIHZhbHVlLmR1cmF0aW9uKSwgMCwgMSk7XG5cbiAgICAgICAgICAgIC8vIE1hcmsgVHdlZW4gYXMgTk9UIGVuZGVkIGlmIHN0aWxsIGluIHByb2dyZXNzXG4gICAgICAgICAgICBpZiAocHJvZ3Jlc3MgIT09IHByb2dyZXNzVGFyZ2V0KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5lbmRlZCA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBTdGVwIHByb2dyZXNzIGlmIHdlJ3JlIHN0ZXBwaW5nXG4gICAgICAgICAgICBpZiAodmFsdWUuc3RlcHMpIHtcbiAgICAgICAgICAgICAgICBwcm9ncmVzcyA9ICgwLCBfY2FsYy5zdGVwUHJvZ3Jlc3MpKHByb2dyZXNzLCB2YWx1ZS5zdGVwcyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIEVhc2UgcHJvZ3Jlc3NcbiAgICAgICAgICAgIHZhbHVlLmN1cnJlbnQgPSBlYXNlKHByb2dyZXNzLCB2YWx1ZS5mcm9tLCB2YWx1ZS50bywgdmFsdWUuZWFzZSk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgVHdlZW4ucHJvdG90eXBlLm9uRnJhbWVFbmQgPSBmdW5jdGlvbiBvbkZyYW1lRW5kKCkge1xuICAgICAgICBpZiAodGhpcy5lbmRlZCkge1xuICAgICAgICAgICAgdmFyIHN0ZXBUYWtlbiA9IGZhbHNlO1xuXG4gICAgICAgICAgICBmb3IgKHZhciBrZXkgaW4gTkVYVF9TVEVQUykge1xuICAgICAgICAgICAgICAgIGlmIChORVhUX1NURVBTLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIG1heFN0ZXBzID0gdGhpc1trZXldO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmIChtYXhTdGVwcyA9PT0gdHJ1ZSB8fCAoMCwgX3V0aWxzLmlzTnVtKShtYXhTdGVwcykgJiYgbWF4U3RlcHMgPiB0aGlzW2tleSArIENPVU5UXSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpc1trZXkgKyBDT1VOVF0rKztcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0ZXBUYWtlbiA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzW05FWFRfU1RFUFNba2V5XV0oKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKCFzdGVwVGFrZW4pIHtcbiAgICAgICAgICAgICAgICB0aGlzLnN0b3AoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBUd2Vlbi5wcm90b3R5cGUuZmxpcFZhbHVlcyA9IGZ1bmN0aW9uIGZsaXBWYWx1ZXMoKSB7XG4gICAgICAgIHZhciB2YWx1ZXMgPSB0aGlzLnZhbHVlcztcblxuICAgICAgICB0aGlzLmVsYXBzZWQgPSB0aGlzLmR1cmF0aW9uIC0gdGhpcy5lbGFwc2VkO1xuXG4gICAgICAgIGZvciAodmFyIGtleSBpbiB2YWx1ZXMpIHtcbiAgICAgICAgICAgIGlmICh2YWx1ZXMuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgICAgICAgIHZhciB2YWx1ZSA9IHZhbHVlc1trZXldO1xuICAgICAgICAgICAgICAgIHZhciBfcmVmID0gW3ZhbHVlLmZyb20sIHZhbHVlLnRvXTtcbiAgICAgICAgICAgICAgICB2YWx1ZS50byA9IF9yZWZbMF07XG4gICAgICAgICAgICAgICAgdmFsdWUuZnJvbSA9IF9yZWZbMV07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xuXG4gICAgVHdlZW4ucHJvdG90eXBlLnJldmVyc2UgPSBmdW5jdGlvbiByZXZlcnNlKCkge1xuICAgICAgICB0aGlzLnBsYXlEaXJlY3Rpb24gKj0gLTE7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH07XG5cbiAgICBUd2Vlbi5wcm90b3R5cGUucmVzdGFydCA9IGZ1bmN0aW9uIHJlc3RhcnQoKSB7XG4gICAgICAgIHRoaXMuZWxhcHNlZCA9IHRoaXMucGxheURpcmVjdGlvbiA9PT0gMSA/IDAgOiB0aGlzLmR1cmF0aW9uO1xuICAgICAgICB0aGlzLnN0YXJ0ZWQgPSAoMCwgX3V0aWxzLmN1cnJlbnRUaW1lKSgpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xuXG4gICAgVHdlZW4ucHJvdG90eXBlLnNlZWsgPSBmdW5jdGlvbiBzZWVrKHByb2dyZXNzKSB7XG4gICAgICAgIHRoaXMuc2Vla1RpbWUodGhpcy5kdXJhdGlvbiAqIHByb2dyZXNzKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfTtcblxuICAgIFR3ZWVuLnByb3RvdHlwZS5zZWVrVGltZSA9IGZ1bmN0aW9uIHNlZWtUaW1lKGVsYXBzZWQpIHtcbiAgICAgICAgdGhpcy5vbmNlKCk7XG4gICAgICAgIHRoaXMuZWxhcHNlZCA9IGVsYXBzZWQ7XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfTtcblxuICAgIFR3ZWVuLnByb3RvdHlwZS5nZXREZWZhdWx0UHJvcHMgPSBmdW5jdGlvbiBnZXREZWZhdWx0UHJvcHMoKSB7XG4gICAgICAgIHJldHVybiBfZXh0ZW5kcyh7fSwgX0FjdGlvbi5wcm90b3R5cGUuZ2V0RGVmYXVsdFByb3BzLmNhbGwodGhpcyksIHtcbiAgICAgICAgICAgIGRlbGF5OiAwLFxuICAgICAgICAgICAgZGlsYXRlOiAxLFxuICAgICAgICAgICAgZHVyYXRpb246IDMwMCxcbiAgICAgICAgICAgIGxvb3A6IGZhbHNlLFxuICAgICAgICAgICAgeW95bzogZmFsc2UsXG4gICAgICAgICAgICBmbGlwOiBmYWxzZSxcbiAgICAgICAgICAgIHBsYXlEaXJlY3Rpb246IDEsXG4gICAgICAgICAgICBlbmRlZDogZmFsc2UsXG4gICAgICAgICAgICBlbGFwc2VkOiAwXG4gICAgICAgIH0pO1xuICAgIH07XG5cbiAgICBUd2Vlbi5wcm90b3R5cGUuZ2V0RGVmYXVsdFZhbHVlID0gZnVuY3Rpb24gZ2V0RGVmYXVsdFZhbHVlKCkge1xuICAgICAgICByZXR1cm4gX2V4dGVuZHMoe30sIF9BY3Rpb24ucHJvdG90eXBlLmdldERlZmF1bHRWYWx1ZS5jYWxsKHRoaXMpLCB7XG4gICAgICAgICAgICBkZWxheTogMCxcbiAgICAgICAgICAgIGR1cmF0aW9uOiAzMDAsXG4gICAgICAgICAgICBlYXNlOiBfcHJlc2V0RWFzaW5nMi5kZWZhdWx0LmVhc2VPdXQsXG4gICAgICAgICAgICBlbGFwc2VkOiAwLFxuICAgICAgICAgICAgc3RhZ2dlcjogMCxcbiAgICAgICAgICAgIHN0ZXBzOiAwLFxuICAgICAgICAgICAgZnJvbTogMCxcbiAgICAgICAgICAgIHRvOiAwLFxuICAgICAgICAgICAgcm91bmQ6IGZhbHNlXG4gICAgICAgIH0pO1xuICAgIH07XG5cbiAgICBUd2Vlbi5wcm90b3R5cGUuZ2V0RGVmYXVsdFZhbHVlUHJvcCA9IGZ1bmN0aW9uIGdldERlZmF1bHRWYWx1ZVByb3AoKSB7XG4gICAgICAgIHJldHVybiAndG8nO1xuICAgIH07XG5cbiAgICByZXR1cm4gVHdlZW47XG59KShfQWN0aW9uMy5kZWZhdWx0KTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gVHdlZW47XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5OeVl5OWhZM1JwYjI1ekwxUjNaV1Z1TG1weklsMHNJbTVoYldWeklqcGJYU3dpYldGd2NHbHVaM01pT2lJN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3TzBGQlZVRXNTVUZCVFN4TFFVRkxMRWRCUVVjc1QwRkJUeXhEUVVGRE8wRkJRM1JDTEVsQlFVMHNWVUZCVlN4SFFVRkhPMEZCUTJZc1VVRkJTU3hGUVVGRkxGTkJRVk03UVVGRFppeFJRVUZKTEVWQlFVVXNVMEZCVXp0QlFVTm1MRkZCUVVrc1JVRkJSU3haUVVGWk8wTkJRM0pDT3pzN096czdPenM3T3pzN1FVRkJReXhCUVZsR0xFbEJRVTBzU1VGQlNTeEhRVUZITEZWQlFVTXNVVUZCVVN4RlFVRkZMRWxCUVVrc1JVRkJSU3hGUVVGRkxFVkJRVVVzU1VGQlNTeEZRVUZMTzBGQlEzWkRMRkZCUVUwc1pVRkJaU3hIUVVGSExGVkJlRUo0UWl4UlFVRlJMRVZCZDBKNVFpeFJRVUZSTEVWQlFVVXNRMEZCUXl4RlFVRkZMRU5CUVVNc1EwRkJReXhEUVVGRE8wRkJRMnBFTEZGQlFVMHNZVUZCWVN4SFFVRkhMRWxCUVVrc1EwRkJReXhsUVVGbExFTkJRVU1zUTBGQlF6czdRVUZGTlVNc1YwRkJUeXhWUVhwQ1VDeHZRa0ZCYjBJc1JVRjVRbEVzWVVGQllTeEZRVUZGTEVsQlFVa3NSVUZCUlN4RlFVRkZMRU5CUVVNc1EwRkJRenREUVVONFJDeERRVUZET3p0SlFVVnRRaXhMUVVGTE8yTkJRVXdzUzBGQlN6czdZVUZCVEN4TFFVRkxPemhDUVVGTUxFdEJRVXM3T3pzN08wRkJRVXdzVTBGQlN5eFhRVU4wUWl4TFFVRkxMRzlDUVVGSE8wRkJRMG9zTUVKQlFVMHNTMEZCU3l4TFFVRkJMRTFCUVVVc1EwRkJRenRCUVVOa0xGbEJRVWtzUTBGQlF5eFBRVUZQTEVkQlFVY3NRMEZCUXl4RFFVRkRPMEZCUTJwQ0xGbEJRVWtzUTBGQlF5eFRRVUZUTEVkQlFVY3NTVUZCU1N4RFFVRkRMRk5CUVZNc1IwRkJSeXhKUVVGSkxFTkJRVU1zVTBGQlV5eEhRVUZITEVOQlFVTXNRMEZCUXpzN1FVRkZja1FzWlVGQlR5eEpRVUZKTEVOQlFVTTdTMEZEWmpzN1FVRlFaMElzVTBGQlN5eFhRVk4wUWl4UlFVRlJMSEZDUVVGRExFdEJRVXNzUlVGQlJTeFZRVUZWTEVWQlFVVXNUMEZCVHl4RlFVRkZPMEZCUTJwRExGbEJRVTBzWTBGQll5eEhRVUZITEVGQlFVTXNTVUZCU1N4RFFVRkRMR0ZCUVdFc1MwRkJTeXhEUVVGRExFZEJRVWtzUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXpzN1FVRkZNVVFzV1VGQlNTeERRVUZETEV0QlFVc3NSMEZCUnl4SlFVRkpMRU5CUVVNN1FVRkRiRUlzV1VGQlNTeERRVUZETEU5QlFVOHNTVUZCU1N4QlFVRkRMRTlCUVU4c1IwRkJSeXhKUVVGSkxFTkJRVU1zVFVGQlRTeEhRVUZKTEVsQlFVa3NRMEZCUXl4aFFVRmhMRU5CUVVNN08wRkJSVGRFTEdGQlFVc3NTVUZCU1N4RFFVRkRMRWRCUVVjc1EwRkJReXhGUVVGRkxFTkJRVU1zUjBGQlJ5eEpRVUZKTEVOQlFVTXNXVUZCV1N4RlFVRkZMRU5CUVVNc1JVRkJSU3hGUVVGRk8wRkJRM2hETEdkQ1FVRk5MRWRCUVVjc1IwRkJSeXhKUVVGSkxFTkJRVU1zVTBGQlV5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRPMEZCUXpsQ0xHZENRVUZOTEV0QlFVc3NSMEZCUnl4SlFVRkpMRU5CUVVNc1RVRkJUU3hEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZET3p0QlFVVXZRaXhuUWtGQlNTeFJRVUZSTEVkQlFVY3NWVUZxUkhaQ0xGRkJRVkVzUlVGcFJIZENMRlZCYUVSb1F5eHZRa0ZCYjBJc1JVRm5SR2xETEVsQlFVa3NRMEZCUXl4UFFVRlBMRWRCUVVjc1MwRkJTeXhEUVVGRExFdEJRVXNzUlVGQlJTeERRVUZETEVWQlFVVXNTMEZCU3l4RFFVRkRMRkZCUVZFc1EwRkJReXhGUVVGRkxFTkJRVU1zUlVGQlJTeERRVUZETEVOQlFVTTdPenRCUVVGRExFRkJSMjVITEdkQ1FVRkpMRkZCUVZFc1MwRkJTeXhqUVVGakxFVkJRVVU3UVVGRE4wSXNiMEpCUVVrc1EwRkJReXhMUVVGTExFZEJRVWNzUzBGQlN5eERRVUZETzJGQlEzUkNPenM3UVVGQlFTeEJRVWRFTEdkQ1FVRkpMRXRCUVVzc1EwRkJReXhMUVVGTExFVkJRVVU3UVVGRFlpeDNRa0ZCVVN4SFFVRkhMRlZCZGtSMlFpeFpRVUZaTEVWQmRVUjNRaXhSUVVGUkxFVkJRVVVzUzBGQlN5eERRVUZETEV0QlFVc3NRMEZCUXl4RFFVRkRPMkZCUTJ4RU96czdRVUZCUVN4QlFVZEVMR2xDUVVGTExFTkJRVU1zVDBGQlR5eEhRVUZITEVsQlFVa3NRMEZCUXl4UlFVRlJMRVZCUVVVc1MwRkJTeXhEUVVGRExFbEJRVWtzUlVGQlJTeExRVUZMTEVOQlFVTXNSVUZCUlN4RlFVRkZMRXRCUVVzc1EwRkJReXhKUVVGSkxFTkJRVU1zUTBGQlF6dFRRVU53UlR0TFFVTktPenRCUVd4RFowSXNVMEZCU3l4WFFXOURkRUlzVlVGQlZTeDVRa0ZCUnp0QlFVTlVMRmxCUVVrc1NVRkJTU3hEUVVGRExFdEJRVXNzUlVGQlJUdEJRVU5hTEdkQ1FVRkpMRk5CUVZNc1IwRkJSeXhMUVVGTExFTkJRVU03TzBGQlJYUkNMR2xDUVVGTExFbEJRVWtzUjBGQlJ5eEpRVUZKTEZWQlFWVXNSVUZCUlR0QlFVTjRRaXh2UWtGQlNTeFZRVUZWTEVOQlFVTXNZMEZCWXl4RFFVRkRMRWRCUVVjc1EwRkJReXhGUVVGRk8wRkJRMmhETEhkQ1FVRk5MRkZCUVZFc1IwRkJSeXhKUVVGSkxFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTTdPMEZCUlROQ0xIZENRVUZKTEZGQlFWRXNTMEZCU3l4SlFVRkpMRWxCUVVzc1YwRTFSWGhDTEV0QlFVc3NSVUUwUlhsQ0xGRkJRVkVzUTBGQlF5eEpRVUZKTEZGQlFWRXNSMEZCUnl4SlFVRkpMRU5CUVVNc1IwRkJSeXhIUVVGSExFdEJRVXNzUTBGQlF5eEJRVUZETEVWQlFVVTdRVUZEZUVVc05FSkJRVWtzUTBGQlF5eEhRVUZITEVkQlFVY3NTMEZCU3l4RFFVRkRMRVZCUVVVc1EwRkJRenRCUVVOd1FpeHBRMEZCVXl4SFFVRkhMRWxCUVVrc1EwRkJRenRCUVVOcVFpdzBRa0ZCU1N4RFFVRkRMRlZCUVZVc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF5eEZRVUZGTEVOQlFVTTdjVUpCUXpOQ08ybENRVU5LTzJGQlEwbzdPMEZCUlVRc1owSkJRVWtzUTBGQlF5eFRRVUZUTEVWQlFVVTdRVUZEV2l4dlFrRkJTU3hEUVVGRExFbEJRVWtzUlVGQlJTeERRVUZETzJGQlEyWTdVMEZEU2p0TFFVTktPenRCUVhoRVowSXNVMEZCU3l4WFFUQkVkRUlzVlVGQlZTeDVRa0ZCUnp0QlFVTlVMRmxCUVUwc1RVRkJUU3hIUVVGSExFbEJRVWtzUTBGQlF5eE5RVUZOTEVOQlFVTTdPMEZCUlROQ0xGbEJRVWtzUTBGQlF5eFBRVUZQTEVkQlFVY3NTVUZCU1N4RFFVRkRMRkZCUVZFc1IwRkJSeXhKUVVGSkxFTkJRVU1zVDBGQlR5eERRVUZET3p0QlFVVTFReXhoUVVGTExFbEJRVWtzUjBGQlJ5eEpRVUZKTEUxQlFVMHNSVUZCUlR0QlFVTndRaXhuUWtGQlNTeE5RVUZOTEVOQlFVTXNZMEZCWXl4RFFVRkRMRWRCUVVjc1EwRkJReXhGUVVGRk8wRkJRelZDTEc5Q1FVRk5MRXRCUVVzc1IwRkJSeXhOUVVGTkxFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTTdNa0pCUTBRc1EwRkJReXhMUVVGTExFTkJRVU1zU1VGQlNTeEZRVUZGTEV0QlFVc3NRMEZCUXl4RlFVRkZMRU5CUVVNN1FVRkJPVU1zY1VKQlFVc3NRMEZCUXl4RlFVRkZPMEZCUVVVc2NVSkJRVXNzUTBGQlF5eEpRVUZKTzJGQlEzaENPMU5CUTBvN08wRkJSVVFzWlVGQlR5eEpRVUZKTEVOQlFVTTdTMEZEWmpzN1FVRjJSV2RDTEZOQlFVc3NWMEY1UlhSQ0xFOUJRVThzYzBKQlFVYzdRVUZEVGl4WlFVRkpMRU5CUVVNc1lVRkJZU3hKUVVGSkxFTkJRVU1zUTBGQlF5eERRVUZETzBGQlEzcENMR1ZCUVU4c1NVRkJTU3hEUVVGRE8wdEJRMlk3TzBGQk5VVm5RaXhUUVVGTExGZEJPRVYwUWl4UFFVRlBMSE5DUVVGSE8wRkJRMDRzV1VGQlNTeERRVUZETEU5QlFVOHNSMEZCUnl4QlFVRkRMRWxCUVVrc1EwRkJReXhoUVVGaExFdEJRVXNzUTBGQlF5eEhRVUZKTEVOQlFVTXNSMEZCUnl4SlFVRkpMRU5CUVVNc1VVRkJVU3hEUVVGRE8wRkJRemxFTEZsQlFVa3NRMEZCUXl4UFFVRlBMRWRCUVVjc1YwRm9TR1FzVjBGQlZ5eEhRV2RJWjBJc1EwRkJRenRCUVVNM1FpeGxRVUZQTEVsQlFVa3NRMEZCUXp0TFFVTm1PenRCUVd4R1owSXNVMEZCU3l4WFFXOUdkRUlzU1VGQlNTeHBRa0ZCUXl4UlFVRlJMRVZCUVVVN1FVRkRXQ3haUVVGSkxFTkJRVU1zVVVGQlVTeERRVUZETEVsQlFVa3NRMEZCUXl4UlFVRlJMRWRCUVVjc1VVRkJVU3hEUVVGRExFTkJRVU03UVVGRGVFTXNaVUZCVHl4SlFVRkpMRU5CUVVNN1MwRkRaanM3UVVGMlJtZENMRk5CUVVzc1YwRjVSblJDTEZGQlFWRXNjVUpCUVVNc1QwRkJUeXhGUVVGRk8wRkJRMlFzV1VGQlNTeERRVUZETEVsQlFVa3NSVUZCUlN4RFFVRkRPMEZCUTFvc1dVRkJTU3hEUVVGRExFOUJRVThzUjBGQlJ5eFBRVUZQTEVOQlFVTTdPMEZCUlhaQ0xHVkJRVThzU1VGQlNTeERRVUZETzB0QlEyWTdPMEZCT1VablFpeFRRVUZMTEZkQlowZDBRaXhsUVVGbExEaENRVUZITzBGQlEyUXNORUpCUTA4c2EwSkJRVTBzWlVGQlpTeExRVUZCTEUxQlFVVTdRVUZETVVJc2FVSkJRVXNzUlVGQlJTeERRVUZETzBGQlExSXNhMEpCUVUwc1JVRkJSU3hEUVVGRE8wRkJRMVFzYjBKQlFWRXNSVUZCUlN4SFFVRkhPMEZCUTJJc1owSkJRVWtzUlVGQlJTeExRVUZMTzBGQlExZ3NaMEpCUVVrc1JVRkJSU3hMUVVGTE8wRkJRMWdzWjBKQlFVa3NSVUZCUlN4TFFVRkxPMEZCUTFnc2VVSkJRV0VzUlVGQlJTeERRVUZETzBGQlEyaENMR2xDUVVGTExFVkJRVVVzUzBGQlN6dEJRVU5hTEcxQ1FVRlBMRVZCUVVVc1EwRkJRenRYUVVOYU8wdEJRMHc3TzBGQk4wZG5RaXhUUVVGTExGZEJLMGQwUWl4bFFVRmxMRGhDUVVGSE8wRkJRMlFzTkVKQlEwOHNhMEpCUVUwc1pVRkJaU3hMUVVGQkxFMUJRVVU3UVVGRE1VSXNhVUpCUVVzc1JVRkJSU3hEUVVGRE8wRkJRMUlzYjBKQlFWRXNSVUZCUlN4SFFVRkhPMEZCUTJJc1owSkJRVWtzUlVGQlJTeDFRa0ZCVHl4UFFVRlBPMEZCUTNCQ0xHMUNRVUZQTEVWQlFVVXNRMEZCUXp0QlFVTldMRzFDUVVGUExFVkJRVVVzUTBGQlF6dEJRVU5XTEdsQ1FVRkxMRVZCUVVVc1EwRkJRenRCUVVOU0xHZENRVUZKTEVWQlFVVXNRMEZCUXp0QlFVTlFMR05CUVVVc1JVRkJSU3hEUVVGRE8wRkJRMHdzYVVKQlFVc3NSVUZCUlN4TFFVRkxPMWRCUTJRN1MwRkRURHM3UVVFMVNHZENMRk5CUVVzc1YwRTRTSFJDTEcxQ1FVRnRRaXhyUTBGQlJ6dEJRVU5zUWl4bFFVRlBMRWxCUVVrc1EwRkJRenRMUVVObU96dFhRV2hKWjBJc1MwRkJTenM3TzJ0Q1FVRk1MRXRCUVVzaUxDSm1hV3hsSWpvaVZIZGxaVzR1YW5NaUxDSnpiM1Z5WTJWU2IyOTBJam9pTDFWelpYSnpMMDFoZEhSUVpYSnllUzlUYVhSbGN5OXdiM0J0YjNScGIyNGlMQ0p6YjNWeVkyVnpRMjl1ZEdWdWRDSTZXeUpwYlhCdmNuUWdRV04wYVc5dUlHWnliMjBnSnk0dlFXTjBhVzl1Snp0Y2JtbHRjRzl5ZENCbFlYTnBibWNnWm5KdmJTQW5MaTlsWVhOcGJtY3ZjSEpsYzJWMExXVmhjMmx1WnljN1hHNXBiWEJ2Y25RZ2V5QmpkWEp5Wlc1MFZHbHRaU3dnYVhOT2RXMGdmU0JtY205dElDY3VMaTlwYm1NdmRYUnBiSE1uTzF4dWFXMXdiM0owSUh0Y2JpQWdJQ0J5WlhOMGNtbGpkQ3hjYmlBZ0lDQm5aWFJRY205bmNtVnpjMFp5YjIxV1lXeDFaU3hjYmlBZ0lDQm5aWFJXWVd4MVpVWnliMjFRY205bmNtVnpjeXhjYmlBZ0lDQnpkR1Z3VUhKdlozSmxjM05jYm4wZ1puSnZiU0FuTGk0dmFXNWpMMk5oYkdNbk8xeHVYRzVqYjI1emRDQkRUMVZPVkNBOUlDZERiM1Z1ZENjN1hHNWpiMjV6ZENCT1JWaFVYMU5VUlZCVElEMGdlMXh1SUNBZ0lHeHZiM0E2SUNkeVpYTjBZWEowSnl4Y2JpQWdJQ0I1YjNsdk9pQW5jbVYyWlhKelpTY3NYRzRnSUNBZ1pteHBjRG9nSjJac2FYQldZV3gxWlhNblhHNTlPMXh1WEc0dktseHVJQ0FnSUVWaGMyVWdkbUZzZFdVZ2QybDBhR2x1SUhKaGJtZGxaQ0J3WVhKaGJXVjBaWEp6WEc0Z0lDQWdYRzRnSUNBZ1FIQmhjbUZ0SUZ0dWRXMWlaWEpkT2lCUWNtOW5jbVZ6Y3lCaVpYUjNaV1Z1SURBZ1lXNWtJREZjYmlBZ0lDQkFjR0Z5WVcwZ1cyNTFiV0psY2wwNklGWmhiSFZsSUc5bUlEQWdjSEp2WjNKbGMzTmNiaUFnSUNCQWNHRnlZVzBnVzI1MWJXSmxjbDA2SUZaaGJIVmxJRzltSURFZ2NISnZaM0psYzNOY2JpQWdJQ0JBY0dGeVlXMGdXM04wY21sdVp5QjhmQ0JtZFc1amRHbHZibDA2SUU1aGJXVWdiMllnY0hKbGMyVjBJR1ZoYzJsdVoxeHVJQ0FnSUNBZ0lDQjBieUIxYzJVZ2IzSWdaMlZ1WlhKaGRHVmtJR1ZoYzJsdVp5Qm1kVzVqZEdsdmJseHVJQ0FnSUVCeVpYUjFjbTRnVzI1MWJXSmxjbDA2SUZaaGJIVmxJRzltSUdWaGMyVmtJSEJ5YjJkeVpYTnpJR2x1SUhKaGJtZGxYRzRxTHlCY2JtTnZibk4wSUdWaGMyVWdQU0FvY0hKdlozSmxjM01zSUdaeWIyMHNJSFJ2TENCbFlYTmxLU0E5UGlCN1hHNGdJQ0FnWTI5dWMzUWdjSEp2WjNKbGMzTk1hVzFwZEdWa0lEMGdjbVZ6ZEhKcFkzUW9jSEp2WjNKbGMzTXNJREFzSURFcE8xeHVJQ0FnSUdOdmJuTjBJR1ZoYzJWa1VISnZaM0psYzNNZ1BTQmxZWE5sS0hCeWIyZHlaWE56VEdsdGFYUmxaQ2s3WEc1Y2JpQWdJQ0J5WlhSMWNtNGdaMlYwVm1Gc2RXVkdjbTl0VUhKdlozSmxjM01vWldGelpXUlFjbTluY21WemN5d2dabkp2YlN3Z2RHOHBPMXh1ZlR0Y2JseHVaWGh3YjNKMElHUmxabUYxYkhRZ1kyeGhjM01nVkhkbFpXNGdaWGgwWlc1a2N5QkJZM1JwYjI0Z2UxeHVJQ0FnSUhOMFlYSjBLQ2tnZTF4dUlDQWdJQ0FnSUNCemRYQmxjaTV6ZEdGeWRDZ3BPMXh1SUNBZ0lDQWdJQ0IwYUdsekxtVnNZWEJ6WldRZ1BTQXdPMXh1SUNBZ0lDQWdJQ0IwYUdsekxtWnNhWEJEYjNWdWRDQTlJSFJvYVhNdWVXOTViME52ZFc1MElEMGdkR2hwY3k1c2IyOXdRMjkxYm5RZ1BTQXdPMXh1WEc0Z0lDQWdJQ0FnSUhKbGRIVnliaUIwYUdsek8xeHVJQ0FnSUgxY2JseHVJQ0FnSUc5dVZYQmtZWFJsS0hSM1pXVnVMQ0JtY21GdFpWTjBZVzF3TENCbGJHRndjMlZrS1NCN1hHNGdJQ0FnSUNBZ0lHTnZibk4wSUhCeWIyZHlaWE56VkdGeVoyVjBJRDBnS0hSb2FYTXVjR3hoZVVScGNtVmpkR2x2YmlBOVBUMGdNU2tnUHlBeElEb2dNRHRjYmx4dUlDQWdJQ0FnSUNCMGFHbHpMbVZ1WkdWa0lEMGdkSEoxWlR0Y2JpQWdJQ0FnSUNBZ2RHaHBjeTVsYkdGd2MyVmtJQ3M5SUNobGJHRndjMlZrSUNvZ2RHaHBjeTVrYVd4aGRHVXBJQ29nZEdocGN5NXdiR0Y1UkdseVpXTjBhVzl1TzF4dVhHNGdJQ0FnSUNBZ0lHWnZjaUFvYkdWMElHa2dQU0F3T3lCcElEd2dkR2hwY3k1dWRXMVdZV3gxWlV0bGVYTTdJR2tyS3lrZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnWTI5dWMzUWdhMlY1SUQwZ2RHaHBjeTUyWVd4MVpVdGxlWE5iYVYwN1hHNGdJQ0FnSUNBZ0lDQWdJQ0JqYjI1emRDQjJZV3gxWlNBOUlIUm9hWE11ZG1Gc2RXVnpXMnRsZVYwN1hHNWNiaUFnSUNBZ0lDQWdJQ0FnSUd4bGRDQndjbTluY21WemN5QTlJSEpsYzNSeWFXTjBLR2RsZEZCeWIyZHlaWE56Um5KdmJWWmhiSFZsS0hSb2FYTXVaV3hoY0hObFpDQXRJSFpoYkhWbExtUmxiR0Y1TENBd0xDQjJZV3gxWlM1a2RYSmhkR2x2Ymlrc0lEQXNJREVwTzF4dVhHNGdJQ0FnSUNBZ0lDQWdJQ0F2THlCTllYSnJJRlIzWldWdUlHRnpJRTVQVkNCbGJtUmxaQ0JwWmlCemRHbHNiQ0JwYmlCd2NtOW5jbVZ6YzF4dUlDQWdJQ0FnSUNBZ0lDQWdhV1lnS0hCeWIyZHlaWE56SUNFOVBTQndjbTluY21WemMxUmhjbWRsZENrZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lIUm9hWE11Wlc1a1pXUWdQU0JtWVd4elpUdGNiaUFnSUNBZ0lDQWdJQ0FnSUgxY2JseHVJQ0FnSUNBZ0lDQWdJQ0FnTHk4Z1UzUmxjQ0J3Y205bmNtVnpjeUJwWmlCM1pTZHlaU0J6ZEdWd2NHbHVaMXh1SUNBZ0lDQWdJQ0FnSUNBZ2FXWWdLSFpoYkhWbExuTjBaWEJ6S1NCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2NISnZaM0psYzNNZ1BTQnpkR1Z3VUhKdlozSmxjM01vY0hKdlozSmxjM01zSUhaaGJIVmxMbk4wWlhCektUdGNiaUFnSUNBZ0lDQWdJQ0FnSUgxY2JseHVJQ0FnSUNBZ0lDQWdJQ0FnTHk4Z1JXRnpaU0J3Y205bmNtVnpjMXh1SUNBZ0lDQWdJQ0FnSUNBZ2RtRnNkV1V1WTNWeWNtVnVkQ0E5SUdWaGMyVW9jSEp2WjNKbGMzTXNJSFpoYkhWbExtWnliMjBzSUhaaGJIVmxMblJ2TENCMllXeDFaUzVsWVhObEtUdGNiaUFnSUNBZ0lDQWdmVnh1SUNBZ0lIMWNibHh1SUNBZ0lHOXVSbkpoYldWRmJtUW9LU0I3WEc0Z0lDQWdJQ0FnSUdsbUlDaDBhR2x6TG1WdVpHVmtLU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQnNaWFFnYzNSbGNGUmhhMlZ1SUQwZ1ptRnNjMlU3WEc1Y2JpQWdJQ0FnSUNBZ0lDQWdJR1p2Y2lBb2JHVjBJR3RsZVNCcGJpQk9SVmhVWDFOVVJWQlRLU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnYVdZZ0tFNUZXRlJmVTFSRlVGTXVhR0Z6VDNkdVVISnZjR1Z5ZEhrb2EyVjVLU2tnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQmpiMjV6ZENCdFlYaFRkR1Z3Y3lBOUlIUm9hWE5iYTJWNVhUdGNibHh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCcFppQW9iV0Y0VTNSbGNITWdQVDA5SUhSeWRXVWdmSHdnS0dselRuVnRLRzFoZUZOMFpYQnpLU0FtSmlCdFlYaFRkR1Z3Y3lBK0lIUm9hWE5iYTJWNUlDc2dRMDlWVGxSZEtTa2dlMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdkR2hwYzF0clpYa2dLeUJEVDFWT1ZGMHJLenRjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJSE4wWlhCVVlXdGxiaUE5SUhSeWRXVTdYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQjBhR2x6VzA1RldGUmZVMVJGVUZOYmEyVjVYVjBvS1R0Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdmVnh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJSDFjYmlBZ0lDQWdJQ0FnSUNBZ0lIMWNibHh1SUNBZ0lDQWdJQ0FnSUNBZ2FXWWdLQ0Z6ZEdWd1ZHRnJaVzRwSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCMGFHbHpMbk4wYjNBb0tUdGNiaUFnSUNBZ0lDQWdJQ0FnSUgxY2JpQWdJQ0FnSUNBZ2ZWeHVJQ0FnSUgxY2JseHVJQ0FnSUdac2FYQldZV3gxWlhNb0tTQjdYRzRnSUNBZ0lDQWdJR052Ym5OMElIWmhiSFZsY3lBOUlIUm9hWE11ZG1Gc2RXVnpPMXh1WEc0Z0lDQWdJQ0FnSUhSb2FYTXVaV3hoY0hObFpDQTlJSFJvYVhNdVpIVnlZWFJwYjI0Z0xTQjBhR2x6TG1Wc1lYQnpaV1E3WEc1Y2JpQWdJQ0FnSUNBZ1ptOXlJQ2hzWlhRZ2EyVjVJR2x1SUhaaGJIVmxjeWtnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdhV1lnS0haaGJIVmxjeTVvWVhOUGQyNVFjbTl3WlhKMGVTaHJaWGtwS1NCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ1kyOXVjM1FnZG1Gc2RXVWdQU0IyWVd4MVpYTmJhMlY1WFR0Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCYmRtRnNkV1V1ZEc4c0lIWmhiSFZsTG1aeWIyMWRJRDBnVzNaaGJIVmxMbVp5YjIwc0lIWmhiSFZsTG5SdlhUdGNiaUFnSUNBZ0lDQWdJQ0FnSUgxY2JpQWdJQ0FnSUNBZ2ZWeHVYRzRnSUNBZ0lDQWdJSEpsZEhWeWJpQjBhR2x6TzF4dUlDQWdJSDFjYmx4dUlDQWdJSEpsZG1WeWMyVW9LU0I3WEc0Z0lDQWdJQ0FnSUhSb2FYTXVjR3hoZVVScGNtVmpkR2x2YmlBcVBTQXRNVHRjYmlBZ0lDQWdJQ0FnY21WMGRYSnVJSFJvYVhNN1hHNGdJQ0FnZlZ4dVhHNGdJQ0FnY21WemRHRnlkQ2dwSUh0Y2JpQWdJQ0FnSUNBZ2RHaHBjeTVsYkdGd2MyVmtJRDBnS0hSb2FYTXVjR3hoZVVScGNtVmpkR2x2YmlBOVBUMGdNU2tnUHlBd0lEb2dkR2hwY3k1a2RYSmhkR2x2Ymp0Y2JpQWdJQ0FnSUNBZ2RHaHBjeTV6ZEdGeWRHVmtJRDBnWTNWeWNtVnVkRlJwYldVb0tUdGNiaUFnSUNBZ0lDQWdjbVYwZFhKdUlIUm9hWE03WEc0Z0lDQWdmVnh1WEc0Z0lDQWdjMlZsYXlod2NtOW5jbVZ6Y3lrZ2UxeHVJQ0FnSUNBZ0lDQjBhR2x6TG5ObFpXdFVhVzFsS0hSb2FYTXVaSFZ5WVhScGIyNGdLaUJ3Y205bmNtVnpjeWs3WEc0Z0lDQWdJQ0FnSUhKbGRIVnliaUIwYUdsek8xeHVJQ0FnSUgxY2JseHVJQ0FnSUhObFpXdFVhVzFsS0dWc1lYQnpaV1FwSUh0Y2JpQWdJQ0FnSUNBZ2RHaHBjeTV2Ym1ObEtDazdYRzRnSUNBZ0lDQWdJSFJvYVhNdVpXeGhjSE5sWkNBOUlHVnNZWEJ6WldRN1hHNWNiaUFnSUNBZ0lDQWdjbVYwZFhKdUlIUm9hWE03WEc0Z0lDQWdmVnh1SUNBZ0lGeHVJQ0FnSUdkbGRFUmxabUYxYkhSUWNtOXdjeWdwSUh0Y2JpQWdJQ0FnSUNBZ2NtVjBkWEp1SUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJQzR1TG5OMWNHVnlMbWRsZEVSbFptRjFiSFJRY205d2N5Z3BMRnh1SUNBZ0lDQWdJQ0FnSUNBZ1pHVnNZWGs2SURBc1hHNGdJQ0FnSUNBZ0lDQWdJQ0JrYVd4aGRHVTZJREVzWEc0Z0lDQWdJQ0FnSUNBZ0lDQmtkWEpoZEdsdmJqb2dNekF3TEZ4dUlDQWdJQ0FnSUNBZ0lDQWdiRzl2Y0RvZ1ptRnNjMlVzWEc0Z0lDQWdJQ0FnSUNBZ0lDQjViM2x2T2lCbVlXeHpaU3hjYmlBZ0lDQWdJQ0FnSUNBZ0lHWnNhWEE2SUdaaGJITmxMRnh1SUNBZ0lDQWdJQ0FnSUNBZ2NHeGhlVVJwY21WamRHbHZiam9nTVN4Y2JpQWdJQ0FnSUNBZ0lDQWdJR1Z1WkdWa09pQm1ZV3h6WlN4Y2JpQWdJQ0FnSUNBZ0lDQWdJR1ZzWVhCelpXUTZJREJjYmlBZ0lDQWdJQ0FnZlR0Y2JpQWdJQ0I5WEc1Y2JpQWdJQ0JuWlhSRVpXWmhkV3gwVm1Gc2RXVW9LU0I3WEc0Z0lDQWdJQ0FnSUhKbGRIVnliaUI3WEc0Z0lDQWdJQ0FnSUNBZ0lDQXVMaTV6ZFhCbGNpNW5aWFJFWldaaGRXeDBWbUZzZFdVb0tTeGNiaUFnSUNBZ0lDQWdJQ0FnSUdSbGJHRjVPaUF3TEZ4dUlDQWdJQ0FnSUNBZ0lDQWdaSFZ5WVhScGIyNDZJRE13TUN4Y2JpQWdJQ0FnSUNBZ0lDQWdJR1ZoYzJVNklHVmhjMmx1Wnk1bFlYTmxUM1YwTEZ4dUlDQWdJQ0FnSUNBZ0lDQWdaV3hoY0hObFpEb2dNQ3hjYmlBZ0lDQWdJQ0FnSUNBZ0lITjBZV2RuWlhJNklEQXNYRzRnSUNBZ0lDQWdJQ0FnSUNCemRHVndjem9nTUN4Y2JpQWdJQ0FnSUNBZ0lDQWdJR1p5YjIwNklEQXNYRzRnSUNBZ0lDQWdJQ0FnSUNCMGJ6b2dNQ3hjYmlBZ0lDQWdJQ0FnSUNBZ0lISnZkVzVrT2lCbVlXeHpaVnh1SUNBZ0lDQWdJQ0I5TzF4dUlDQWdJSDFjYmx4dUlDQWdJR2RsZEVSbFptRjFiSFJXWVd4MVpWQnliM0FvS1NCN1hHNGdJQ0FnSUNBZ0lISmxkSFZ5YmlBbmRHOG5PMXh1SUNBZ0lIMWNibjFjYmlKZGZRPT1cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2FjdGlvbnMvVHdlZW4uanNcbiAqKiBtb2R1bGUgaWQgPSA1XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbnZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfQWN0aW9uMiA9IHJlcXVpcmUoJy4vQWN0aW9uJyk7XG5cbnZhciBfQWN0aW9uMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX0FjdGlvbjIpO1xuXG52YXIgX2NhbGMgPSByZXF1aXJlKCcuLi9pbmMvY2FsYycpO1xuXG52YXIgX3V0aWxzID0gcmVxdWlyZSgnLi4vaW5jL3V0aWxzJyk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKCFzZWxmKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gY2FsbCAmJiAodHlwZW9mIGNhbGwgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikgPyBjYWxsIDogc2VsZjsgfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb24sIG5vdCBcIiArIHR5cGVvZiBzdXBlckNsYXNzKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCBlbnVtZXJhYmxlOiBmYWxzZSwgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LnNldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKSA6IHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7IH1cblxudmFyIFBoeXNpY3MgPSAoZnVuY3Rpb24gKF9BY3Rpb24pIHtcbiAgICBfaW5oZXJpdHMoUGh5c2ljcywgX0FjdGlvbik7XG5cbiAgICBmdW5jdGlvbiBQaHlzaWNzKCkge1xuICAgICAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgUGh5c2ljcyk7XG5cbiAgICAgICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgICAgICAgIGFyZ3NbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgX3RoaXMgPSBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCBfQWN0aW9uLmNhbGwuYXBwbHkoX0FjdGlvbiwgW3RoaXNdLmNvbmNhdChhcmdzKSkpO1xuXG4gICAgICAgIF90aGlzLmluYWN0aXZlRnJhbWVzID0gMDtcbiAgICAgICAgX3RoaXMuY2FsY3VsYXRlc1ZlbG9jaXR5ID0gdHJ1ZTtcbiAgICAgICAgcmV0dXJuIF90aGlzO1xuICAgIH1cblxuICAgIFBoeXNpY3MucHJvdG90eXBlLm9uVXBkYXRlID0gZnVuY3Rpb24gb25VcGRhdGUocGh5c2ljcywgZnJhbWVTdGFtcCwgZWxhcHNlZCkge1xuICAgICAgICB0aGlzLmhhc0NoYW5nZWQgPSBmYWxzZTtcblxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubnVtVmFsdWVLZXlzOyBpKyspIHtcbiAgICAgICAgICAgIHZhciBrZXkgPSB0aGlzLnZhbHVlS2V5c1tpXTtcbiAgICAgICAgICAgIHZhciB2YWx1ZSA9IHRoaXMudmFsdWVzW2tleV07XG4gICAgICAgICAgICB2YXIgcHJldmlvdXNWYWx1ZSA9IHZhbHVlLnByZXY7XG5cbiAgICAgICAgICAgIC8vIEFwcGx5IGFjY2VsZXJhdGlvblxuICAgICAgICAgICAgdmFsdWUudmVsb2NpdHkgKz0gKDAsIF9jYWxjLnNwZWVkUGVyRnJhbWUpKHZhbHVlLmFjY2VsZXJhdGlvbiwgZWxhcHNlZCk7XG5cbiAgICAgICAgICAgIC8vIEFwcGx5IGZyaWN0aW9uXG4gICAgICAgICAgICB2YWx1ZS52ZWxvY2l0eSAqPSBNYXRoLnBvdygxIC0gdmFsdWUuZnJpY3Rpb24sIGVsYXBzZWQgLyAxMDApO1xuXG4gICAgICAgICAgICAvLyBBcHBseSBzcHJpbmdcbiAgICAgICAgICAgIGlmICh2YWx1ZS5zcHJpbmcgJiYgKDAsIF91dGlscy5pc051bSkodmFsdWUudG8pKSB7XG4gICAgICAgICAgICAgICAgdmFyIGRpc3RhbmNlVG9UYXJnZXQgPSB2YWx1ZS50byAtIHZhbHVlLmN1cnJlbnQ7XG4gICAgICAgICAgICAgICAgdmFsdWUudmVsb2NpdHkgKz0gZGlzdGFuY2VUb1RhcmdldCAqICgwLCBfY2FsYy5zcGVlZFBlckZyYW1lKSh2YWx1ZS5zcHJpbmcsIGVsYXBzZWQpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBBcHBseSBsYXRlc3QgdmVsb2NpdHlcbiAgICAgICAgICAgIHZhbHVlLmN1cnJlbnQgKz0gKDAsIF9jYWxjLnNwZWVkUGVyRnJhbWUpKHZhbHVlLnZlbG9jaXR5LCBlbGFwc2VkKTtcblxuICAgICAgICAgICAgLy8gQ2hlY2sgaWYgdmFsdWUgaGFzIGNoYW5nZWRcbiAgICAgICAgICAgIGlmICh2YWx1ZS5jdXJyZW50ICE9PSBwcmV2aW91c1ZhbHVlIHx8IE1hdGguYWJzKHZhbHVlLnZlbG9jaXR5KSA+PSB2YWx1ZS5zdG9wU3BlZWQgfHwgdmFsdWUuc3ByaW5nICYmIHZhbHVlLmN1cnJlbnQgIT09IHZhbHVlLnRvKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5oYXNDaGFuZ2VkID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBQaHlzaWNzLnByb3RvdHlwZS5vbkZyYW1lRW5kID0gZnVuY3Rpb24gb25GcmFtZUVuZCgpIHtcbiAgICAgICAgaWYgKHRoaXMuYXV0b0VuZCkge1xuICAgICAgICAgICAgdGhpcy5pbmFjdGl2ZUZyYW1lcyA9IHRoaXMuaGFzQ2hhbmdlZCA/IDEgOiB0aGlzLmluYWN0aXZlRnJhbWVzICsgMTtcblxuICAgICAgICAgICAgaWYgKHRoaXMuaW5hY3RpdmVGcmFtZXMgPj0gdGhpcy5tYXhJbmFjdGl2ZUZyYW1lcykge1xuICAgICAgICAgICAgICAgIHRoaXMuc3RvcCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcblxuICAgIC8qXG4gICAgICAgICMgR2V0IGRlZmF1bHQgU2ltdWxhdGUgcHJvcHNcbiAgICAgICAgIEByZXR1cm4gW29iamVjdF1cbiAgICAqL1xuXG4gICAgUGh5c2ljcy5wcm90b3R5cGUuZ2V0RGVmYXVsdFByb3BzID0gZnVuY3Rpb24gZ2V0RGVmYXVsdFByb3BzKCkge1xuICAgICAgICByZXR1cm4gX2V4dGVuZHMoe30sIF9BY3Rpb24ucHJvdG90eXBlLmdldERlZmF1bHRQcm9wcy5jYWxsKHRoaXMpLCB7XG4gICAgICAgICAgICBhdXRvRW5kOiB0cnVlLFxuICAgICAgICAgICAgbWF4SW5hY3RpdmVGcmFtZXM6IDNcbiAgICAgICAgfSk7XG4gICAgfTtcblxuICAgIC8qXG4gICAgICAgICMgR2V0IGRlZmF1bHQgU2ltdWxhdGUgdmFsdWUgcHJvcHNcbiAgICAgICAgIEByZXR1cm4gW29iamVjdF1cbiAgICAqL1xuXG4gICAgUGh5c2ljcy5wcm90b3R5cGUuZ2V0RGVmYXVsdFZhbHVlID0gZnVuY3Rpb24gZ2V0RGVmYXVsdFZhbHVlKCkge1xuICAgICAgICByZXR1cm4gX2V4dGVuZHMoe30sIF9BY3Rpb24ucHJvdG90eXBlLmdldERlZmF1bHRWYWx1ZS5jYWxsKHRoaXMpLCB7XG4gICAgICAgICAgICBhY2NlbGVyYXRpb246IDAsIC8vIFtudW1iZXJdOiBBY2NlbGVyYXRpb24gdG8gYXBwbHkgdG8gdmFsdWUsIGluIHVuaXRzIHBlciBzZWNvbmRcbiAgICAgICAgICAgIGJvdW5jZTogMCwgLy8gW251bWJlcl06IEZhY3RvciB0byBtdWx0aXBseSB2ZWxvY2l0eSBieSBvbiBib3VuY2VcbiAgICAgICAgICAgIHNwcmluZzogMCwgLy8gW251bWJlcl06IFNwcmluZyBzdHJlbmd0aCBkdXJpbmcgJ3N0cmluZydcbiAgICAgICAgICAgIHN0b3BTcGVlZDogMC4wMDAxLCAvLyBbbnVtYmVyXTogU3RvcCBzaW11bGF0aW9uIHVuZGVyIHRoaXMgc3BlZWRcbiAgICAgICAgICAgIGZyaWN0aW9uOiAwIC8vIFtudW1iZXJdOiBGcmljdGlvbiB0byBhcHBseSBwZXIgZnJhbWUsIDAtMVxuICAgICAgICB9KTtcbiAgICB9O1xuXG4gICAgLypcbiAgICAgICAgIyBHZXQgZGVmYXVsdCBTaW11bGF0ZSB2YWx1ZSBwcm9wZXJ0eSBuYW1lXG4gICAgICAgICMjIFNldCB2YWx1ZXMgdG8gdGhpcyB3aGVuIGEgYHZhbHVlYCBpcyBub3QgcHJvdmlkZWQgYXMgYW4gb2JqZWN0XG4gICAgICAgICBAcmV0dXJuIFtzdHJpbmddXG4gICAgKi9cblxuICAgIFBoeXNpY3MucHJvdG90eXBlLmdldERlZmF1bHRWYWx1ZVByb3AgPSBmdW5jdGlvbiBnZXREZWZhdWx0VmFsdWVQcm9wKCkge1xuICAgICAgICByZXR1cm4gJ3ZlbG9jaXR5JztcbiAgICB9O1xuXG4gICAgcmV0dXJuIFBoeXNpY3M7XG59KShfQWN0aW9uMy5kZWZhdWx0KTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gUGh5c2ljcztcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbk55WXk5aFkzUnBiMjV6TDFCb2VYTnBZM011YW5NaVhTd2libUZ0WlhNaU9sdGRMQ0p0WVhCd2FXNW5jeUk2SWpzN096czdPenM3T3pzN096czdPenM3T3pzN096dEpRVWx4UWl4UFFVRlBPMk5CUVZBc1QwRkJUenM3UVVGRmVFSXNZVUZHYVVJc1QwRkJUeXhIUVVWSU96aENRVVpLTEU5QlFVODdPekJEUVVWVUxFbEJRVWs3UVVGQlNpeG5Ra0ZCU1RzN08zRkVRVU5tTERCRFFVRlRMRWxCUVVrc1JVRkJRenM3UVVGRFpDeGpRVUZMTEdOQlFXTXNSMEZCUnl4RFFVRkRMRU5CUVVNN1FVRkRlRUlzWTBGQlN5eHJRa0ZCYTBJc1IwRkJSeXhKUVVGSkxFTkJRVU03TzB0QlEyeERPenRCUVU1blFpeFhRVUZQTEZkQlVYaENMRkZCUVZFc2NVSkJRVU1zVDBGQlR5eEZRVUZGTEZWQlFWVXNSVUZCUlN4UFFVRlBMRVZCUVVVN1FVRkRia01zV1VGQlNTeERRVUZETEZWQlFWVXNSMEZCUnl4TFFVRkxMRU5CUVVNN08wRkJSWGhDTEdGQlFVc3NTVUZCU1N4RFFVRkRMRWRCUVVjc1EwRkJReXhGUVVGRkxFTkJRVU1zUjBGQlJ5eEpRVUZKTEVOQlFVTXNXVUZCV1N4RlFVRkZMRU5CUVVNc1JVRkJSU3hGUVVGRk8wRkJRM2hETEdkQ1FVRk5MRWRCUVVjc1IwRkJSeXhKUVVGSkxFTkJRVU1zVTBGQlV5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRPMEZCUXpsQ0xHZENRVUZOTEV0QlFVc3NSMEZCUnl4SlFVRkpMRU5CUVVNc1RVRkJUU3hEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETzBGQlF5OUNMR2RDUVVGTkxHRkJRV0VzUjBGQlJ5eExRVUZMTEVOQlFVTXNTVUZCU1RzN08wRkJRVU1zUVVGSGFrTXNhVUpCUVVzc1EwRkJReXhSUVVGUkxFbEJRVWtzVlVGd1FuSkNMR0ZCUVdFc1JVRnZRbk5DTEV0QlFVc3NRMEZCUXl4WlFVRlpMRVZCUVVVc1QwRkJUeXhEUVVGRE96czdRVUZCUXl4QlFVYzNSQ3hwUWtGQlN5eERRVUZETEZGQlFWRXNZVUZCU3l4RFFVRkRMRWRCUVVjc1MwRkJTeXhEUVVGRExGRkJRVkVzUlVGQlRTeFBRVUZQTEVkQlFVY3NSMEZCUnl4RFFVRkRPenM3UVVGQlF5eEJRVWN4UkN4blFrRkJTU3hMUVVGTExFTkJRVU1zVFVGQlRTeEpRVUZKTEZkQmVrSjJRaXhMUVVGTExFVkJlVUozUWl4TFFVRkxMRU5CUVVNc1JVRkJSU3hEUVVGRExFVkJRVVU3UVVGRGFrTXNiMEpCUVUwc1owSkJRV2RDTEVkQlFVY3NTMEZCU3l4RFFVRkRMRVZCUVVVc1IwRkJSeXhMUVVGTExFTkJRVU1zVDBGQlR5eERRVUZETzBGQlEyeEVMSEZDUVVGTExFTkJRVU1zVVVGQlVTeEpRVUZKTEdkQ1FVRm5RaXhIUVVGSExGVkJOVUkxUXl4aFFVRmhMRVZCTkVJMlF5eExRVUZMTEVOQlFVTXNUVUZCVFN4RlFVRkZMRTlCUVU4c1EwRkJReXhEUVVGRE8yRkJRemRGT3pzN1FVRkJRU3hCUVVkRUxHbENRVUZMTEVOQlFVTXNUMEZCVHl4SlFVRkpMRlZCYUVOd1FpeGhRVUZoTEVWQlowTnhRaXhMUVVGTExFTkJRVU1zVVVGQlVTeEZRVUZGTEU5QlFVOHNRMEZCUXpzN08wRkJRVU1zUVVGSGVFUXNaMEpCUVVrc1MwRkJTeXhEUVVGRExFOUJRVThzUzBGQlN5eGhRVUZoTEVsQlFVa3NTVUZCU1N4RFFVRkRMRWRCUVVjc1EwRkJReXhMUVVGTExFTkJRVU1zVVVGQlVTeERRVUZETEVsQlFVa3NTMEZCU3l4RFFVRkRMRk5CUVZNc1NVRkJTeXhMUVVGTExFTkJRVU1zVFVGQlRTeEpRVUZKTEV0QlFVc3NRMEZCUXl4UFFVRlBMRXRCUVVzc1MwRkJTeXhEUVVGRExFVkJRVVVzUVVGQlF5eEZRVUZGTzBGQlEyaEpMRzlDUVVGSkxFTkJRVU1zVlVGQlZTeEhRVUZITEVsQlFVa3NRMEZCUXp0aFFVTXhRanRUUVVOS08wdEJRMG83TzBGQmNFTm5RaXhYUVVGUExGZEJjME40UWl4VlFVRlZMSGxDUVVGSE8wRkJRMVFzV1VGQlNTeEpRVUZKTEVOQlFVTXNUMEZCVHl4RlFVRkZPMEZCUTJRc1owSkJRVWtzUTBGQlF5eGpRVUZqTEVkQlFVY3NTVUZCU1N4RFFVRkRMRlZCUVZVc1IwRkJSeXhEUVVGRExFZEJRVWNzU1VGQlNTeERRVUZETEdOQlFXTXNSMEZCUnl4RFFVRkRMRU5CUVVNN08wRkJSWEJGTEdkQ1FVRkpMRWxCUVVrc1EwRkJReXhqUVVGakxFbEJRVWtzU1VGQlNTeERRVUZETEdsQ1FVRnBRaXhGUVVGRk8wRkJReTlETEc5Q1FVRkpMRU5CUVVNc1NVRkJTU3hGUVVGRkxFTkJRVU03WVVGRFpqdFRRVU5LTzB0QlEwbzdPenM3T3pzN1FVRTVRMmRDTEZkQlFVOHNWMEZ4UkhoQ0xHVkJRV1VzT0VKQlFVYzdRVUZEWkN3MFFrRkRUeXhyUWtGQlRTeGxRVUZsTEV0QlFVRXNUVUZCUlR0QlFVTXhRaXh0UWtGQlR5eEZRVUZGTEVsQlFVazdRVUZEWWl3MlFrRkJhVUlzUlVGQlJTeERRVUZETzFkQlEzUkNPMHRCUTB3N096czdPenM3UVVFelJHZENMRmRCUVU4c1YwRnJSWGhDTEdWQlFXVXNPRUpCUVVjN1FVRkRaQ3cwUWtGRFR5eHJRa0ZCVFN4bFFVRmxMRXRCUVVFc1RVRkJSVHRCUVVNeFFpeDNRa0ZCV1N4RlFVRkZMRU5CUVVNN1FVRkRaaXhyUWtGQlRTeEZRVUZGTEVOQlFVTTdRVUZEVkN4clFrRkJUU3hGUVVGRkxFTkJRVU03UVVGRFZDeHhRa0ZCVXl4RlFVRkZMRTFCUVUwN1FVRkRha0lzYjBKQlFWRXNSVUZCUlN4RFFVRkRPMEZCUVVFc1YwRkRZanRMUVVOTU96czdPenM3T3p0QlFUTkZaMElzVjBGQlR5eFhRVzFHZUVJc2JVSkJRVzFDTEd0RFFVRkhPMEZCUTJ4Q0xHVkJRVThzVlVGQlZTeERRVUZETzB0QlEzSkNPenRYUVhKR1owSXNUMEZCVHpzN08ydENRVUZRTEU5QlFVOGlMQ0ptYVd4bElqb2lVR2g1YzJsamN5NXFjeUlzSW5OdmRYSmpaVkp2YjNRaU9pSXZWWE5sY25NdlRXRjBkRkJsY25KNUwxTnBkR1Z6TDNCdmNHMXZkR2x2YmlJc0luTnZkWEpqWlhORGIyNTBaVzUwSWpwYkltbHRjRzl5ZENCQlkzUnBiMjRnWm5KdmJTQW5MaTlCWTNScGIyNG5PMXh1YVcxd2IzSjBJSHNnYzNCbFpXUlFaWEpHY21GdFpTQjlJR1p5YjIwZ0p5NHVMMmx1WXk5allXeGpKenRjYm1sdGNHOXlkQ0I3SUdselRuVnRJSDBnWm5KdmJTQW5MaTR2YVc1akwzVjBhV3h6Snp0Y2JseHVaWGh3YjNKMElHUmxabUYxYkhRZ1kyeGhjM01nVUdoNWMybGpjeUJsZUhSbGJtUnpJRUZqZEdsdmJpQjdYRzVjYmlBZ0lDQmpiMjV6ZEhKMVkzUnZjaWd1TGk1aGNtZHpLU0I3WEc0Z0lDQWdJQ0FnSUhOMWNHVnlLQzR1TG1GeVozTXBPMXh1SUNBZ0lDQWdJQ0IwYUdsekxtbHVZV04wYVhabFJuSmhiV1Z6SUQwZ01EdGNiaUFnSUNBZ0lDQWdkR2hwY3k1allXeGpkV3hoZEdWelZtVnNiMk5wZEhrZ1BTQjBjblZsTzF4dUlDQWdJSDFjYmx4dUlDQWdJRzl1VlhCa1lYUmxLSEJvZVhOcFkzTXNJR1p5WVcxbFUzUmhiWEFzSUdWc1lYQnpaV1FwSUh0Y2JpQWdJQ0FnSUNBZ2RHaHBjeTVvWVhORGFHRnVaMlZrSUQwZ1ptRnNjMlU3WEc1Y2JpQWdJQ0FnSUNBZ1ptOXlJQ2hzWlhRZ2FTQTlJREE3SUdrZ1BDQjBhR2x6TG01MWJWWmhiSFZsUzJWNWN6c2dhU3NyS1NCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0JqYjI1emRDQnJaWGtnUFNCMGFHbHpMblpoYkhWbFMyVjVjMXRwWFR0Y2JpQWdJQ0FnSUNBZ0lDQWdJR052Ym5OMElIWmhiSFZsSUQwZ2RHaHBjeTUyWVd4MVpYTmJhMlY1WFR0Y2JpQWdJQ0FnSUNBZ0lDQWdJR052Ym5OMElIQnlaWFpwYjNWelZtRnNkV1VnUFNCMllXeDFaUzV3Y21WMk8xeHVYRzRnSUNBZ0lDQWdJQ0FnSUNBdkx5QkJjSEJzZVNCaFkyTmxiR1Z5WVhScGIyNWNiaUFnSUNBZ0lDQWdJQ0FnSUhaaGJIVmxMblpsYkc5amFYUjVJQ3M5SUhOd1pXVmtVR1Z5Um5KaGJXVW9kbUZzZFdVdVlXTmpaV3hsY21GMGFXOXVMQ0JsYkdGd2MyVmtLVHRjYmx4dUlDQWdJQ0FnSUNBZ0lDQWdMeThnUVhCd2JIa2dabkpwWTNScGIyNWNiaUFnSUNBZ0lDQWdJQ0FnSUhaaGJIVmxMblpsYkc5amFYUjVJQ285SUNneElDMGdkbUZzZFdVdVpuSnBZM1JwYjI0cElDb3FJQ2hsYkdGd2MyVmtJQzhnTVRBd0tUdGNibHh1SUNBZ0lDQWdJQ0FnSUNBZ0x5OGdRWEJ3YkhrZ2MzQnlhVzVuWEc0Z0lDQWdJQ0FnSUNBZ0lDQnBaaUFvZG1Gc2RXVXVjM0J5YVc1bklDWW1JR2x6VG5WdEtIWmhiSFZsTG5SdktTa2dlMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJR052Ym5OMElHUnBjM1JoYm1ObFZHOVVZWEpuWlhRZ1BTQjJZV3gxWlM1MGJ5QXRJSFpoYkhWbExtTjFjbkpsYm5RN1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2RtRnNkV1V1ZG1Wc2IyTnBkSGtnS3owZ1pHbHpkR0Z1WTJWVWIxUmhjbWRsZENBcUlITndaV1ZrVUdWeVJuSmhiV1VvZG1Gc2RXVXVjM0J5YVc1bkxDQmxiR0Z3YzJWa0tUdGNiaUFnSUNBZ0lDQWdJQ0FnSUgxY2JseHVJQ0FnSUNBZ0lDQWdJQ0FnTHk4Z1FYQndiSGtnYkdGMFpYTjBJSFpsYkc5amFYUjVYRzRnSUNBZ0lDQWdJQ0FnSUNCMllXeDFaUzVqZFhKeVpXNTBJQ3M5SUhOd1pXVmtVR1Z5Um5KaGJXVW9kbUZzZFdVdWRtVnNiMk5wZEhrc0lHVnNZWEJ6WldRcE8xeHVJQ0FnSUNBZ0lDQWdJQ0FnWEc0Z0lDQWdJQ0FnSUNBZ0lDQXZMeUJEYUdWamF5QnBaaUIyWVd4MVpTQm9ZWE1nWTJoaGJtZGxaRnh1SUNBZ0lDQWdJQ0FnSUNBZ2FXWWdLSFpoYkhWbExtTjFjbkpsYm5RZ0lUMDlJSEJ5WlhacGIzVnpWbUZzZFdVZ2ZId2dUV0YwYUM1aFluTW9kbUZzZFdVdWRtVnNiMk5wZEhrcElENDlJSFpoYkhWbExuTjBiM0JUY0dWbFpDQjhmQ0FvZG1Gc2RXVXVjM0J5YVc1bklDWW1JSFpoYkhWbExtTjFjbkpsYm5RZ0lUMDlJSFpoYkhWbExuUnZLU2tnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUhSb2FYTXVhR0Z6UTJoaGJtZGxaQ0E5SUhSeWRXVTdYRzRnSUNBZ0lDQWdJQ0FnSUNCOVhHNGdJQ0FnSUNBZ0lIMWNiaUFnSUNCOVhHNWNiaUFnSUNCdmJrWnlZVzFsUlc1a0tDa2dlMXh1SUNBZ0lDQWdJQ0JwWmlBb2RHaHBjeTVoZFhSdlJXNWtLU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQjBhR2x6TG1sdVlXTjBhWFpsUm5KaGJXVnpJRDBnZEdocGN5NW9ZWE5EYUdGdVoyVmtJRDhnTVNBNklIUm9hWE11YVc1aFkzUnBkbVZHY21GdFpYTWdLeUF4TzF4dVhHNGdJQ0FnSUNBZ0lDQWdJQ0JwWmlBb2RHaHBjeTVwYm1GamRHbDJaVVp5WVcxbGN5QStQU0IwYUdsekxtMWhlRWx1WVdOMGFYWmxSbkpoYldWektTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdkR2hwY3k1emRHOXdLQ2s3WEc0Z0lDQWdJQ0FnSUNBZ0lDQjlYRzRnSUNBZ0lDQWdJSDFjYmlBZ0lDQjlYRzVjYmlBZ0lDQXZLbHh1SUNBZ0lDQWdJQ0FqSUVkbGRDQmtaV1poZFd4MElGTnBiWFZzWVhSbElIQnliM0J6WEc1Y2JpQWdJQ0FnSUNBZ1FISmxkSFZ5YmlCYmIySnFaV04wWFZ4dUlDQWdJQ292WEc0Z0lDQWdaMlYwUkdWbVlYVnNkRkJ5YjNCektDa2dlMXh1SUNBZ0lDQWdJQ0J5WlhSMWNtNGdlMXh1SUNBZ0lDQWdJQ0FnSUNBZ0xpNHVjM1Z3WlhJdVoyVjBSR1ZtWVhWc2RGQnliM0J6S0Nrc1hHNGdJQ0FnSUNBZ0lDQWdJQ0JoZFhSdlJXNWtPaUIwY25WbExGeHVJQ0FnSUNBZ0lDQWdJQ0FnYldGNFNXNWhZM1JwZG1WR2NtRnRaWE02SUROY2JpQWdJQ0FnSUNBZ2ZUdGNiaUFnSUNCOVhHNWNiaUFnSUNBdktseHVJQ0FnSUNBZ0lDQWpJRWRsZENCa1pXWmhkV3gwSUZOcGJYVnNZWFJsSUhaaGJIVmxJSEJ5YjNCelhHNWNiaUFnSUNBZ0lDQWdRSEpsZEhWeWJpQmJiMkpxWldOMFhWeHVJQ0FnSUNvdlhHNGdJQ0FnWjJWMFJHVm1ZWFZzZEZaaGJIVmxLQ2tnZTF4dUlDQWdJQ0FnSUNCeVpYUjFjbTRnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdMaTR1YzNWd1pYSXVaMlYwUkdWbVlYVnNkRlpoYkhWbEtDa3NYRzRnSUNBZ0lDQWdJQ0FnSUNCaFkyTmxiR1Z5WVhScGIyNDZJREFzSUM4dklGdHVkVzFpWlhKZE9pQkJZMk5sYkdWeVlYUnBiMjRnZEc4Z1lYQndiSGtnZEc4Z2RtRnNkV1VzSUdsdUlIVnVhWFJ6SUhCbGNpQnpaV052Ym1SY2JpQWdJQ0FnSUNBZ0lDQWdJR0p2ZFc1alpUb2dNQ3dnTHk4Z1cyNTFiV0psY2wwNklFWmhZM1J2Y2lCMGJ5QnRkV3gwYVhCc2VTQjJaV3h2WTJsMGVTQmllU0J2YmlCaWIzVnVZMlZjYmlBZ0lDQWdJQ0FnSUNBZ0lITndjbWx1WnpvZ01Dd2dMeThnVzI1MWJXSmxjbDA2SUZOd2NtbHVaeUJ6ZEhKbGJtZDBhQ0JrZFhKcGJtY2dKM04wY21sdVp5ZGNiaUFnSUNBZ0lDQWdJQ0FnSUhOMGIzQlRjR1ZsWkRvZ01DNHdNREF4TENBdkx5QmJiblZ0WW1WeVhUb2dVM1J2Y0NCemFXMTFiR0YwYVc5dUlIVnVaR1Z5SUhSb2FYTWdjM0JsWldSY2JpQWdJQ0FnSUNBZ0lDQWdJR1p5YVdOMGFXOXVPaUF3SUM4dklGdHVkVzFpWlhKZE9pQkdjbWxqZEdsdmJpQjBieUJoY0hCc2VTQndaWElnWm5KaGJXVXNJREF0TVZ4dUlDQWdJQ0FnSUNCOU8xeHVJQ0FnSUgxY2JseHVJQ0FnSUM4cVhHNGdJQ0FnSUNBZ0lDTWdSMlYwSUdSbFptRjFiSFFnVTJsdGRXeGhkR1VnZG1Gc2RXVWdjSEp2Y0dWeWRIa2dibUZ0WlZ4dUlDQWdJQ0FnSUNBakl5QlRaWFFnZG1Gc2RXVnpJSFJ2SUhSb2FYTWdkMmhsYmlCaElHQjJZV3gxWldBZ2FYTWdibTkwSUhCeWIzWnBaR1ZrSUdGeklHRnVJRzlpYW1WamRGeHVYRzRnSUNBZ0lDQWdJRUJ5WlhSMWNtNGdXM04wY21sdVoxMWNiaUFnSUNBcUwxeHVJQ0FnSUdkbGRFUmxabUYxYkhSV1lXeDFaVkJ5YjNBb0tTQjdYRzRnSUNBZ0lDQWdJSEpsZEhWeWJpQW5kbVZzYjJOcGRIa25PMXh1SUNBZ0lIMWNibjFjYmlKZGZRPT1cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2FjdGlvbnMvUGh5c2ljcy5qc1xuICoqIG1vZHVsZSBpZCA9IDZcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxudmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF9BY3Rpb24yID0gcmVxdWlyZSgnLi9BY3Rpb24nKTtcblxudmFyIF9BY3Rpb24zID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfQWN0aW9uMik7XG5cbnZhciBfUG9pbnRlciA9IHJlcXVpcmUoJy4uL2lucHV0L1BvaW50ZXInKTtcblxudmFyIF9Qb2ludGVyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX1BvaW50ZXIpO1xuXG52YXIgX2NhbGMgPSByZXF1aXJlKCcuLi9pbmMvY2FsYycpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmICghc2VsZikgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIGNhbGwgJiYgKHR5cGVvZiBjYWxsID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpID8gY2FsbCA6IHNlbGY7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgXCIgKyB0eXBlb2Ygc3VwZXJDbGFzcyk7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgZW51bWVyYWJsZTogZmFsc2UsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcykgOiBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzOyB9XG5cbi8qXG4gICAgU2NyYXBlIHgveSBjb29yZGluYXRlcyBmcm9tIHByb3ZpZGVkIGV2ZW50XG5cbiAgICBAcGFyYW0gW2V2ZW50XVxuICAgIEByZXR1cm4gW29iamVjdF1cbiovXG52YXIgbW91c2VFdmVudFRvUG9pbnQgPSBmdW5jdGlvbiAoZSkge1xuICAgIHJldHVybiB7XG4gICAgICAgIHg6IGUucGFnZVgsXG4gICAgICAgIHk6IGUucGFnZVlcbiAgICB9O1xufTtcblxudmFyIHRvdWNoRXZlbnRUb1BvaW50ID0gZnVuY3Rpb24gKF9yZWYpIHtcbiAgICB2YXIgY2hhbmdlZFRvdWNoZXMgPSBfcmVmLmNoYW5nZWRUb3VjaGVzO1xuICAgIHJldHVybiB7XG4gICAgICAgIHg6IGNoYW5nZWRUb3VjaGVzWzBdLmNsaWVudFgsXG4gICAgICAgIHk6IGNoYW5nZWRUb3VjaGVzWzBdLmNsaWVudFlcbiAgICB9O1xufTtcblxudmFyIGNyZWF0ZVBvaW50ZXIgPSBmdW5jdGlvbiAoZSkge1xuICAgIHJldHVybiBlLnRvdWNoZXMgPyBuZXcgX1BvaW50ZXIyLmRlZmF1bHQodG91Y2hFdmVudFRvUG9pbnQoZSksICd0b3VjaG1vdmUnLCB0b3VjaEV2ZW50VG9Qb2ludCkgOiBuZXcgX1BvaW50ZXIyLmRlZmF1bHQobW91c2VFdmVudFRvUG9pbnQoZSksICdtb3VzZW1vdmUnLCBtb3VzZUV2ZW50VG9Qb2ludCk7XG59O1xuXG52YXIgZ2V0QWN0dWFsRXZlbnQgPSBmdW5jdGlvbiAoZSkge1xuICAgIHJldHVybiBlLm9yaWdpbmFsRXZlbnQgfHwgZTtcbn07XG5cbnZhciBUcmFjayA9IChmdW5jdGlvbiAoX0FjdGlvbikge1xuICAgIF9pbmhlcml0cyhUcmFjaywgX0FjdGlvbik7XG5cbiAgICBmdW5jdGlvbiBUcmFjaygpIHtcbiAgICAgICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFRyYWNrKTtcblxuICAgICAgICByZXR1cm4gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgX0FjdGlvbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpKTtcbiAgICB9XG5cbiAgICBUcmFjay5wcm90b3R5cGUuc3RhcnQgPSBmdW5jdGlvbiBzdGFydChpbnB1dCkge1xuICAgICAgICBfQWN0aW9uLnByb3RvdHlwZS5zdGFydC5jYWxsKHRoaXMpO1xuXG4gICAgICAgIGlmIChpbnB1dCkge1xuICAgICAgICAgICAgdGhpcy5pbnB1dCA9IGlucHV0LnN0YXRlID8gaW5wdXQgOiBjcmVhdGVQb2ludGVyKGdldEFjdHVhbEV2ZW50KGlucHV0KSk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmlucHV0T2Zmc2V0ID0ge307XG4gICAgICAgIHRoaXMuaW5wdXRPcmlnaW4gPSBfZXh0ZW5kcyh7fSwgdGhpcy5pbnB1dC5zdGF0ZSk7XG4gICAgICAgIHRoaXMuaW5wdXQuc3RhcnQoKTtcbiAgICB9O1xuXG4gICAgVHJhY2sucHJvdG90eXBlLnN0b3AgPSBmdW5jdGlvbiBzdG9wKCkge1xuICAgICAgICBfQWN0aW9uLnByb3RvdHlwZS5zdG9wLmNhbGwodGhpcyk7XG4gICAgICAgIHRoaXMuaW5wdXQuc3RvcCgpO1xuICAgIH07XG5cbiAgICBUcmFjay5wcm90b3R5cGUub25VcGRhdGUgPSBmdW5jdGlvbiBvblVwZGF0ZSh0cmFjaywgZnJhbWVTdGFtcCwgZWxhcHNlZCkge1xuICAgICAgICB0aGlzLmlucHV0T2Zmc2V0ID0gKDAsIF9jYWxjLm9mZnNldCkodGhpcy5pbnB1dE9yaWdpbiwgdGhpcy5pbnB1dC5zdGF0ZSk7XG5cbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLm51bVZhbHVlS2V5czsgaSsrKSB7XG4gICAgICAgICAgICB2YXIga2V5ID0gdGhpcy52YWx1ZUtleXNbaV07XG5cbiAgICAgICAgICAgIGlmICh0aGlzLmlucHV0T2Zmc2V0Lmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICAgICAgICB2YXIgdmFsdWUgPSB0aGlzLnZhbHVlc1trZXldO1xuICAgICAgICAgICAgICAgIGlmICh2YWx1ZS5kaXJlY3QpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFsdWUuY3VycmVudCA9IHRoaXMuaW5wdXQuc3RhdGVba2V5XTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB2YWx1ZS5jdXJyZW50ID0gdmFsdWUub3JpZ2luICsgdGhpcy5pbnB1dE9mZnNldFtrZXldO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC8vIFNtb290aCB2YWx1ZSBpZiB3ZSBoYXZlIHNtb290aGluZ1xuICAgICAgICAgICAgICAgIGlmICh2YWx1ZS5zbW9vdGgpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFsdWUuY3VycmVudCA9ICgwLCBfY2FsYy5zbW9vdGgpKHZhbHVlLmN1cnJlbnQsIHZhbHVlLnByZXYsIGVsYXBzZWQsIHZhbHVlLnNtb290aCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcblxuICAgIFRyYWNrLnByb3RvdHlwZS5nZXREZWZhdWx0VmFsdWUgPSBmdW5jdGlvbiBnZXREZWZhdWx0VmFsdWUoKSB7XG4gICAgICAgIHJldHVybiBfZXh0ZW5kcyh7fSwgX0FjdGlvbi5wcm90b3R5cGUuZ2V0RGVmYXVsdFZhbHVlLmNhbGwodGhpcyksIHtcbiAgICAgICAgICAgIGFtcDogMSxcbiAgICAgICAgICAgIGVzY2FwZUFtcDogMCxcbiAgICAgICAgICAgIGRpcmVjdDogZmFsc2VcbiAgICAgICAgfSk7XG4gICAgfTtcblxuICAgIHJldHVybiBUcmFjaztcbn0pKF9BY3Rpb24zLmRlZmF1bHQpO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBUcmFjaztcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbk55WXk5aFkzUnBiMjV6TDFSeVlXTnJMbXB6SWwwc0ltNWhiV1Z6SWpwYlhTd2liV0Z3Y0dsdVozTWlPaUk3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3p0QlFWVkJMRWxCUVUwc2FVSkJRV2xDTEVkQlFVY3NWVUZCUXl4RFFVRkRPMWRCUVUwN1FVRkRPVUlzVTBGQlF5eEZRVUZGTEVOQlFVTXNRMEZCUXl4TFFVRkxPMEZCUTFZc1UwRkJReXhGUVVGRkxFTkJRVU1zUTBGQlF5eExRVUZMTzB0QlEySTdRMEZCUXl4RFFVRkRPenRCUVVWSUxFbEJRVTBzYVVKQlFXbENMRWRCUVVjN1VVRkJSeXhqUVVGakxGRkJRV1FzWTBGQll6dFhRVUZSTzBGQlF5OURMRk5CUVVNc1JVRkJSU3hqUVVGakxFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNUMEZCVHp0QlFVTTFRaXhUUVVGRExFVkJRVVVzWTBGQll5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRTlCUVU4N1MwRkRMMEk3UTBGQlF5eERRVUZET3p0QlFVVklMRWxCUVUwc1lVRkJZU3hIUVVGSExGVkJRVU1zUTBGQlF6dFhRVUZMTEVOQlFVTXNRMEZCUXl4UFFVRlBMRWRCUTJ4RExITkNRVUZaTEdsQ1FVRnBRaXhEUVVGRExFTkJRVU1zUTBGQlF5eEZRVUZGTEZkQlFWY3NSVUZCUlN4cFFrRkJhVUlzUTBGQlF5eEhRVU5xUlN4elFrRkJXU3hwUWtGQmFVSXNRMEZCUXl4RFFVRkRMRU5CUVVNc1JVRkJSU3hYUVVGWExFVkJRVVVzYVVKQlFXbENMRU5CUVVNN1EwRkJRU3hEUVVGRE96dEJRVVYwUlN4SlFVRk5MR05CUVdNc1IwRkJSeXhWUVVGRExFTkJRVU03VjBGQlN5eERRVUZETEVOQlFVTXNZVUZCWVN4SlFVRkpMRU5CUVVNN1EwRkJRU3hEUVVGRE96dEpRVVU1UWl4TFFVRkxPMk5CUVV3c1MwRkJTenM3WVVGQlRDeExRVUZMT3poQ1FVRk1MRXRCUVVzN096czdPMEZCUVV3c1UwRkJTeXhYUVVOMFFpeExRVUZMTEd0Q1FVRkRMRXRCUVVzc1JVRkJSVHRCUVVOVUxEQkNRVUZOTEV0QlFVc3NTMEZCUVN4TlFVRkZMRU5CUVVNN08wRkJSV1FzV1VGQlNTeExRVUZMTEVWQlFVVTdRVUZEVUN4blFrRkJTU3hEUVVGRExFdEJRVXNzUjBGQlJ5eExRVUZMTEVOQlFVTXNTMEZCU3l4SFFVRkhMRXRCUVVzc1IwRkJSeXhoUVVGaExFTkJRVU1zWTBGQll5eERRVUZETEV0QlFVc3NRMEZCUXl4RFFVRkRMRU5CUVVNN1UwRkRNMFU3TzBGQlJVUXNXVUZCU1N4RFFVRkRMRmRCUVZjc1IwRkJSeXhGUVVGRkxFTkJRVU03UVVGRGRFSXNXVUZCU1N4RFFVRkRMRmRCUVZjc1owSkJRVkVzU1VGQlNTeERRVUZETEV0QlFVc3NRMEZCUXl4TFFVRkxMRU5CUVVVc1EwRkJRenRCUVVNelF5eFpRVUZKTEVOQlFVTXNTMEZCU3l4RFFVRkRMRXRCUVVzc1JVRkJSU3hEUVVGRE8wdEJRM1JDT3p0QlFWaG5RaXhUUVVGTExGZEJZWFJDTEVsQlFVa3NiVUpCUVVjN1FVRkRTQ3d3UWtGQlRTeEpRVUZKTEV0QlFVRXNUVUZCUlN4RFFVRkRPMEZCUTJJc1dVRkJTU3hEUVVGRExFdEJRVXNzUTBGQlF5eEpRVUZKTEVWQlFVVXNRMEZCUXp0TFFVTnlRanM3UVVGb1FtZENMRk5CUVVzc1YwRnJRblJDTEZGQlFWRXNjVUpCUVVNc1MwRkJTeXhGUVVGRkxGVkJRVlVzUlVGQlJTeFBRVUZQTEVWQlFVVTdRVUZEYWtNc1dVRkJTU3hEUVVGRExGZEJRVmNzUjBGQlJ5eFZRVE5EVml4TlFVRk5MRVZCTWtOWExFbEJRVWtzUTBGQlF5eFhRVUZYTEVWQlFVVXNTVUZCU1N4RFFVRkRMRXRCUVVzc1EwRkJReXhMUVVGTExFTkJRVU1zUTBGQlF6czdRVUZGT1VRc1lVRkJTeXhKUVVGSkxFTkJRVU1zUjBGQlJ5eERRVUZETEVWQlFVVXNRMEZCUXl4SFFVRkhMRWxCUVVrc1EwRkJReXhaUVVGWkxFVkJRVVVzUTBGQlF5eEZRVUZGTEVWQlFVVTdRVUZEZUVNc1owSkJRVTBzUjBGQlJ5eEhRVUZITEVsQlFVa3NRMEZCUXl4VFFVRlRMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU03TzBGQlJUbENMR2RDUVVGSkxFbEJRVWtzUTBGQlF5eFhRVUZYTEVOQlFVTXNZMEZCWXl4RFFVRkRMRWRCUVVjc1EwRkJReXhGUVVGRk8wRkJRM1JETEc5Q1FVRk5MRXRCUVVzc1IwRkJSeXhKUVVGSkxFTkJRVU1zVFVGQlRTeERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRPMEZCUXk5Q0xHOUNRVUZKTEV0QlFVc3NRMEZCUXl4TlFVRk5MRVZCUVVVN1FVRkRaQ3g1UWtGQlN5eERRVUZETEU5QlFVOHNSMEZCUnl4SlFVRkpMRU5CUVVNc1MwRkJTeXhEUVVGRExFdEJRVXNzUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXp0cFFrRkRla01zVFVGQlRUdEJRVU5JTEhsQ1FVRkxMRU5CUVVNc1QwRkJUeXhIUVVGSExFdEJRVXNzUTBGQlF5eE5RVUZOTEVkQlFVY3NTVUZCU1N4RFFVRkRMRmRCUVZjc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF6dHBRa0ZEZUVRN096dEJRVUZCTEVGQlIwUXNiMEpCUVVrc1MwRkJTeXhEUVVGRExFMUJRVTBzUlVGQlJUdEJRVU5rTEhsQ1FVRkxMRU5CUVVNc1QwRkJUeXhIUVVGSExGVkJNVVF6UWl4TlFVRk5MRVZCTUVRMFFpeExRVUZMTEVOQlFVTXNUMEZCVHl4RlFVRkZMRXRCUVVzc1EwRkJReXhKUVVGSkxFVkJRVVVzVDBGQlR5eEZRVUZGTEV0QlFVc3NRMEZCUXl4TlFVRk5MRU5CUVVNc1EwRkJRenRwUWtGRE5VVTdZVUZEU2p0VFFVTktPMHRCUTBvN08wRkJkRU5uUWl4VFFVRkxMRmRCZDBOMFFpeGxRVUZsTERoQ1FVRkhPMEZCUTJRc05FSkJRMDhzYTBKQlFVMHNaVUZCWlN4TFFVRkJMRTFCUVVVN1FVRkRNVUlzWlVGQlJ5eEZRVUZGTEVOQlFVTTdRVUZEVGl4eFFrRkJVeXhGUVVGRkxFTkJRVU03UVVGRFdpeHJRa0ZCVFN4RlFVRkZMRXRCUVVzN1YwRkRaanRMUVVOTU96dFhRUzlEWjBJc1MwRkJTenM3TzJ0Q1FVRk1MRXRCUVVzaUxDSm1hV3hsSWpvaVZISmhZMnN1YW5NaUxDSnpiM1Z5WTJWU2IyOTBJam9pTDFWelpYSnpMMDFoZEhSUVpYSnllUzlUYVhSbGN5OXdiM0J0YjNScGIyNGlMQ0p6YjNWeVkyVnpRMjl1ZEdWdWRDSTZXeUpwYlhCdmNuUWdRV04wYVc5dUlHWnliMjBnSnk0dlFXTjBhVzl1Snp0Y2JtbHRjRzl5ZENCUWIybHVkR1Z5SUdaeWIyMGdKeTR1TDJsdWNIVjBMMUJ2YVc1MFpYSW5PMXh1YVcxd2IzSjBJSHNnYzIxdmIzUm9MQ0J2Wm1aelpYUWdmU0JtY205dElDY3VMaTlwYm1NdlkyRnNZeWM3WEc1Y2JpOHFYRzRnSUNBZ1UyTnlZWEJsSUhndmVTQmpiMjl5WkdsdVlYUmxjeUJtY205dElIQnliM1pwWkdWa0lHVjJaVzUwWEc1Y2JpQWdJQ0JBY0dGeVlXMGdXMlYyWlc1MFhWeHVJQ0FnSUVCeVpYUjFjbTRnVzI5aWFtVmpkRjFjYmlvdlhHNWpiMjV6ZENCdGIzVnpaVVYyWlc1MFZHOVFiMmx1ZENBOUlDaGxLU0E5UGlBb2UxeHVJQ0FnSUhnNklHVXVjR0ZuWlZnc1hHNGdJQ0FnZVRvZ1pTNXdZV2RsV1Z4dWZTazdYRzVjYm1OdmJuTjBJSFJ2ZFdOb1JYWmxiblJVYjFCdmFXNTBJRDBnS0hzZ1kyaGhibWRsWkZSdmRXTm9aWE1nZlNrZ1BUNGdLSHRjYmlBZ0lDQjRPaUJqYUdGdVoyVmtWRzkxWTJobGMxc3dYUzVqYkdsbGJuUllMRnh1SUNBZ0lIazZJR05vWVc1blpXUlViM1ZqYUdWeld6QmRMbU5zYVdWdWRGbGNibjBwTzF4dVhHNWpiMjV6ZENCamNtVmhkR1ZRYjJsdWRHVnlJRDBnS0dVcElEMCtJR1V1ZEc5MVkyaGxjeUEvWEc0Z0lDQWdibVYzSUZCdmFXNTBaWElvZEc5MVkyaEZkbVZ1ZEZSdlVHOXBiblFvWlNrc0lDZDBiM1ZqYUcxdmRtVW5MQ0IwYjNWamFFVjJaVzUwVkc5UWIybHVkQ2tnT2lCY2JpQWdJQ0J1WlhjZ1VHOXBiblJsY2lodGIzVnpaVVYyWlc1MFZHOVFiMmx1ZENobEtTd2dKMjF2ZFhObGJXOTJaU2NzSUcxdmRYTmxSWFpsYm5SVWIxQnZhVzUwS1R0Y2JseHVZMjl1YzNRZ1oyVjBRV04wZFdGc1JYWmxiblFnUFNBb1pTa2dQVDRnWlM1dmNtbG5hVzVoYkVWMlpXNTBJSHg4SUdVN1hHNWNibVY0Y0c5eWRDQmtaV1poZFd4MElHTnNZWE56SUZSeVlXTnJJR1Y0ZEdWdVpITWdRV04wYVc5dUlIdGNiaUFnSUNCemRHRnlkQ2hwYm5CMWRDa2dlMXh1SUNBZ0lDQWdJQ0J6ZFhCbGNpNXpkR0Z5ZENncE8xeHVYRzRnSUNBZ0lDQWdJR2xtSUNocGJuQjFkQ2tnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdkR2hwY3k1cGJuQjFkQ0E5SUdsdWNIVjBMbk4wWVhSbElEOGdhVzV3ZFhRZ09pQmpjbVZoZEdWUWIybHVkR1Z5S0dkbGRFRmpkSFZoYkVWMlpXNTBLR2x1Y0hWMEtTazdYRzRnSUNBZ0lDQWdJSDFjYmx4dUlDQWdJQ0FnSUNCMGFHbHpMbWx1Y0hWMFQyWm1jMlYwSUQwZ2UzMDdYRzRnSUNBZ0lDQWdJSFJvYVhNdWFXNXdkWFJQY21sbmFXNGdQU0I3SUM0dUxuUm9hWE11YVc1d2RYUXVjM1JoZEdVZ2ZUdGNiaUFnSUNBZ0lDQWdkR2hwY3k1cGJuQjFkQzV6ZEdGeWRDZ3BPMXh1SUNBZ0lIMWNibHh1SUNBZ0lITjBiM0FvS1NCN1hHNGdJQ0FnSUNBZ0lITjFjR1Z5TG5OMGIzQW9LVHRjYmlBZ0lDQWdJQ0FnZEdocGN5NXBibkIxZEM1emRHOXdLQ2s3WEc0Z0lDQWdmVnh1WEc0Z0lDQWdiMjVWY0dSaGRHVW9kSEpoWTJzc0lHWnlZVzFsVTNSaGJYQXNJR1ZzWVhCelpXUXBJSHRjYmlBZ0lDQWdJQ0FnZEdocGN5NXBibkIxZEU5bVpuTmxkQ0E5SUc5bVpuTmxkQ2gwYUdsekxtbHVjSFYwVDNKcFoybHVMQ0IwYUdsekxtbHVjSFYwTG5OMFlYUmxLVHRjYmx4dUlDQWdJQ0FnSUNCbWIzSWdLR3hsZENCcElEMGdNRHNnYVNBOElIUm9hWE11Ym5WdFZtRnNkV1ZMWlhsek95QnBLeXNwSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJR052Ym5OMElHdGxlU0E5SUhSb2FYTXVkbUZzZFdWTFpYbHpXMmxkTzF4dVhHNGdJQ0FnSUNBZ0lDQWdJQ0JwWmlBb2RHaHBjeTVwYm5CMWRFOW1abk5sZEM1b1lYTlBkMjVRY205d1pYSjBlU2hyWlhrcEtTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdZMjl1YzNRZ2RtRnNkV1VnUFNCMGFHbHpMblpoYkhWbGMxdHJaWGxkTzF4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUdsbUlDaDJZV3gxWlM1a2FYSmxZM1FwSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdkbUZzZFdVdVkzVnljbVZ1ZENBOUlIUm9hWE11YVc1d2RYUXVjM1JoZEdWYmEyVjVYVHRjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0I5SUdWc2MyVWdlMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCMllXeDFaUzVqZFhKeVpXNTBJRDBnZG1Gc2RXVXViM0pwWjJsdUlDc2dkR2hwY3k1cGJuQjFkRTltWm5ObGRGdHJaWGxkTzF4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUgxY2JseHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDOHZJRk50YjI5MGFDQjJZV3gxWlNCcFppQjNaU0JvWVhabElITnRiMjkwYUdsdVoxeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lHbG1JQ2gyWVd4MVpTNXpiVzl2ZEdncElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnZG1Gc2RXVXVZM1Z5Y21WdWRDQTlJSE50YjI5MGFDaDJZV3gxWlM1amRYSnlaVzUwTENCMllXeDFaUzV3Y21WMkxDQmxiR0Z3YzJWa0xDQjJZV3gxWlM1emJXOXZkR2dwTzF4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUgxY2JpQWdJQ0FnSUNBZ0lDQWdJSDFjYmlBZ0lDQWdJQ0FnZlZ4dUlDQWdJSDFjYmx4dUlDQWdJR2RsZEVSbFptRjFiSFJXWVd4MVpTZ3BJSHRjYmlBZ0lDQWdJQ0FnY21WMGRYSnVJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lDNHVMbk4xY0dWeUxtZGxkRVJsWm1GMWJIUldZV3gxWlNncExGeHVJQ0FnSUNBZ0lDQWdJQ0FnWVcxd09pQXhMRnh1SUNBZ0lDQWdJQ0FnSUNBZ1pYTmpZWEJsUVcxd09pQXdMRnh1SUNBZ0lDQWdJQ0FnSUNBZ1pHbHlaV04wT2lCbVlXeHpaVnh1SUNBZ0lDQWdJQ0I5TzF4dUlDQWdJSDFjYm4xY2JpSmRmUT09XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9hY3Rpb25zL1RyYWNrLmpzXG4gKiogbW9kdWxlIGlkID0gN1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX2xvb3AgPSByZXF1aXJlKCcuL2xvb3AnKTtcblxudmFyIGxvb3AgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChfbG9vcCk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKG9iaikgeyBpZiAob2JqICYmIG9iai5fX2VzTW9kdWxlKSB7IHJldHVybiBvYmo7IH0gZWxzZSB7IHZhciBuZXdPYmogPSB7fTsgaWYgKG9iaiAhPSBudWxsKSB7IGZvciAodmFyIGtleSBpbiBvYmopIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGtleSkpIG5ld09ialtrZXldID0gb2JqW2tleV07IH0gfSBuZXdPYmouZGVmYXVsdCA9IG9iajsgcmV0dXJuIG5ld09iajsgfSB9XG5cbmZ1bmN0aW9uIF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhvYmosIGtleXMpIHsgdmFyIHRhcmdldCA9IHt9OyBmb3IgKHZhciBpIGluIG9iaikgeyBpZiAoa2V5cy5pbmRleE9mKGkpID49IDApIGNvbnRpbnVlOyBpZiAoIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGkpKSBjb250aW51ZTsgdGFyZ2V0W2ldID0gb2JqW2ldOyB9IHJldHVybiB0YXJnZXQ7IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxudmFyIFByb2Nlc3MgPSAoZnVuY3Rpb24gKCkge1xuICAgIC8qXG4gICAgICAgIFtvYmplY3RdOiBQcm9wZXJ0aWVzXG4gICAgKi9cblxuICAgIGZ1bmN0aW9uIFByb2Nlc3MocHJvcHMpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcblxuICAgICAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgUHJvY2Vzcyk7XG5cbiAgICAgICAgdGhpcy5pZCA9IGxvb3AuZ2V0UHJvY2Vzc0lkKCk7XG5cbiAgICAgICAgdGhpcy5fb25DbGVhbnVwID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgX3RoaXMuc3RvcCgpO1xuICAgICAgICAgICAgX3RoaXMub25DbGVhbnVwID0gdW5kZWZpbmVkO1xuICAgICAgICB9O1xuXG4gICAgICAgIHRoaXMuX29uQWN0aXZhdGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gX3RoaXMub25DbGVhbnVwID0gX3RoaXMuX29uQ2xlYW51cDtcbiAgICAgICAgfTtcblxuICAgICAgICB0aGlzLnNldCh0aGlzLmdldERlZmF1bHRQcm9wcygpKTtcbiAgICAgICAgdGhpcy5zZXQocHJvcHMpO1xuXG4gICAgICAgIHRoaXMuaXNBY3RpdmUgPSBmYWxzZTtcbiAgICB9XG5cbiAgICBQcm9jZXNzLnByb3RvdHlwZS5zZXQgPSBmdW5jdGlvbiBzZXQocHJvcHMpIHtcbiAgICAgICAgZm9yICh2YXIga2V5IGluIHByb3BzKSB7XG4gICAgICAgICAgICBpZiAocHJvcHMuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgICAgICAgIHRoaXNba2V5XSA9IHByb3BzW2tleV07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xuXG4gICAgUHJvY2Vzcy5wcm90b3R5cGUuc3RhcnQgPSBmdW5jdGlvbiBzdGFydCgpIHtcbiAgICAgICAgbG9vcC5hY3RpdmF0ZSh0aGlzLmlkLCB0aGlzKTtcblxuICAgICAgICB0aGlzLm9uQ2xlYW51cCA9IHRoaXMub25BY3RpdmF0ZSA9IHVuZGVmaW5lZDtcblxuICAgICAgICAvLyBQcml2YXRlIGBvblN0YXJ0YFxuICAgICAgICBpZiAodGhpcy5fb25TdGFydCkge1xuICAgICAgICAgICAgdGhpcy5fb25TdGFydCh0aGlzKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFB1YmxpYyBgb25TdGFydGBcbiAgICAgICAgaWYgKHRoaXMub25TdGFydCkge1xuICAgICAgICAgICAgdGhpcy5vblN0YXJ0KHRoaXMpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfTtcblxuICAgIFByb2Nlc3MucHJvdG90eXBlLnN0b3AgPSBmdW5jdGlvbiBzdG9wKCkge1xuICAgICAgICBsb29wLmRlYWN0aXZhdGUodGhpcy5pZCk7XG5cbiAgICAgICAgLy8gUHJpdmF0ZSBgb25TdG9wYFxuICAgICAgICBpZiAodGhpcy5fb25TdG9wKSB7XG4gICAgICAgICAgICB0aGlzLl9vblN0b3AodGhpcyk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBQdWJsaWMgYG9uU3RvcGBcbiAgICAgICAgaWYgKHRoaXMub25TdG9wKSB7XG4gICAgICAgICAgICB0aGlzLm9uU3RvcCh0aGlzKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH07XG5cbiAgICBQcm9jZXNzLnByb3RvdHlwZS5vbmNlID0gZnVuY3Rpb24gb25jZSgpIHtcbiAgICAgICAgdGhpcy5zdGFydCgpO1xuICAgICAgICB0aGlzLm9uQWN0aXZhdGUgPSB0aGlzLl9vbkFjdGl2YXRlO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xuXG4gICAgLypcbiAgICAgICAgIyBHZXQgZGVmYXVsdCBBY3Rpb24gcHJvcGVydGllc1xuICAgICAgICAgQHJldHVybiBbb2JqZWN0XVxuICAgICovXG5cbiAgICBQcm9jZXNzLnByb3RvdHlwZS5nZXREZWZhdWx0UHJvcHMgPSBmdW5jdGlvbiBnZXREZWZhdWx0UHJvcHMoKSB7XG4gICAgICAgIHJldHVybiB7fTtcbiAgICB9O1xuXG4gICAgLypcbiAgICAgICAgIyBFeHRlbmQgdGhpcyBQcm9jZXNzIHdpdGggbmV3IHByb3BlcnRpZXNcbiAgICAgICAgIyMgUmV0dXJucyBuZXcgaW5zdGFuY2Ugb2YgdGhpcyBQcm9jZXNzJ3MgYHByb3RvdHlwZWAgd2l0aCBleGlzdGluZyBhbmQgbmV3IHByb3BlcnRpZXNcbiAgICAgICAgIEBwYXJhbSBbb2JqZWN0XSAob3B0aW9uYWwpXG4gICAgICAgIEByZXR1cm4gW1Byb2Nlc3NdXG4gICAgKi9cblxuICAgIFByb2Nlc3MucHJvdG90eXBlLmluaGVyaXQgPSBmdW5jdGlvbiBpbmhlcml0KHByb3BzKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXMuaWQ7XG5cbiAgICAgICAgdmFyIGluaGVyaXRlZFByb3BzID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKHRoaXMsIFsnaWQnXSk7XG5cbiAgICAgICAgdmFyIG5ld1Byb2Nlc3MgPSBuZXcgdGhpcy5jb25zdHJ1Y3Rvcihpbmhlcml0ZWRQcm9wcyk7XG4gICAgICAgIHJldHVybiBuZXdQcm9jZXNzLnNldChwcm9wcyk7XG4gICAgfTtcblxuICAgIHJldHVybiBQcm9jZXNzO1xufSkoKTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gUHJvY2Vzcztcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbk55WXk5d2NtOWpaWE56TDFCeWIyTmxjM011YW5NaVhTd2libUZ0WlhNaU9sdGRMQ0p0WVhCd2FXNW5jeUk2SWpzN096czdPMGxCUVZrc1NVRkJTVHM3T3pzN096czdTVUZGU3l4UFFVRlBPenM3T3p0QlFVbDRRaXhoUVVwcFFpeFBRVUZQTEVOQlNWb3NTMEZCU3l4RlFVRkZPenM3T0VKQlNrWXNUMEZCVHpzN1FVRkxjRUlzV1VGQlNTeERRVUZETEVWQlFVVXNSMEZCUnl4SlFVRkpMRU5CUVVNc1dVRkJXU3hGUVVGRkxFTkJRVU03TzBGQlJUbENMRmxCUVVrc1EwRkJReXhWUVVGVkxFZEJRVWNzV1VGQlRUdEJRVU53UWl4clFrRkJTeXhKUVVGSkxFVkJRVVVzUTBGQlF6dEJRVU5hTEd0Q1FVRkxMRk5CUVZNc1IwRkJSeXhUUVVGVExFTkJRVU03VTBGRE9VSXNRMEZCUXpzN1FVRkZSaXhaUVVGSkxFTkJRVU1zVjBGQlZ5eEhRVUZITzIxQ1FVRk5MRTFCUVVzc1UwRkJVeXhIUVVGSExFMUJRVXNzVlVGQlZUdFRRVUZCTEVOQlFVTTdPMEZCUlRGRUxGbEJRVWtzUTBGQlF5eEhRVUZITEVOQlFVTXNTVUZCU1N4RFFVRkRMR1ZCUVdVc1JVRkJSU3hEUVVGRExFTkJRVU03UVVGRGFrTXNXVUZCU1N4RFFVRkRMRWRCUVVjc1EwRkJReXhMUVVGTExFTkJRVU1zUTBGQlF6czdRVUZGYUVJc1dVRkJTU3hEUVVGRExGRkJRVkVzUjBGQlJ5eExRVUZMTEVOQlFVTTdTMEZEZWtJN08wRkJiRUpuUWl4WFFVRlBMRmRCYjBKNFFpeEhRVUZITEdkQ1FVRkRMRXRCUVVzc1JVRkJSVHRCUVVOUUxHRkJRVXNzU1VGQlNTeEhRVUZITEVsQlFVa3NTMEZCU3l4RlFVRkZPMEZCUTI1Q0xHZENRVUZKTEV0QlFVc3NRMEZCUXl4alFVRmpMRU5CUVVNc1IwRkJSeXhEUVVGRExFVkJRVVU3UVVGRE0wSXNiMEpCUVVrc1EwRkJReXhIUVVGSExFTkJRVU1zUjBGQlJ5eExRVUZMTEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNN1lVRkRNVUk3VTBGRFNqczdRVUZGUkN4bFFVRlBMRWxCUVVrc1EwRkJRenRMUVVObU96dEJRVFZDWjBJc1YwRkJUeXhYUVRoQ2VFSXNTMEZCU3l4dlFrRkJSenRCUVVOS0xGbEJRVWtzUTBGQlF5eFJRVUZSTEVOQlFVTXNTVUZCU1N4RFFVRkRMRVZCUVVVc1JVRkJSU3hKUVVGSkxFTkJRVU1zUTBGQlF6czdRVUZGTjBJc1dVRkJTU3hEUVVGRExGTkJRVk1zUjBGQlJ5eEpRVUZKTEVOQlFVTXNWVUZCVlN4SFFVRkhMRk5CUVZNN096dEJRVUZETEVGQlJ6ZERMRmxCUVVrc1NVRkJTU3hEUVVGRExGRkJRVkVzUlVGQlJUdEJRVU5tTEdkQ1FVRkpMRU5CUVVNc1VVRkJVU3hEUVVGRExFbEJRVWtzUTBGQlF5eERRVUZETzFOQlEzWkNPenM3UVVGQlFTeEJRVWRFTEZsQlFVa3NTVUZCU1N4RFFVRkRMRTlCUVU4c1JVRkJSVHRCUVVOa0xHZENRVUZKTEVOQlFVTXNUMEZCVHl4RFFVRkRMRWxCUVVrc1EwRkJReXhEUVVGRE8xTkJRM1JDT3p0QlFVVkVMR1ZCUVU4c1NVRkJTU3hEUVVGRE8wdEJRMlk3TzBGQk9VTm5RaXhYUVVGUExGZEJaMFI0UWl4SlFVRkpMRzFDUVVGSE8wRkJRMGdzV1VGQlNTeERRVUZETEZWQlFWVXNRMEZCUXl4SlFVRkpMRU5CUVVNc1JVRkJSU3hEUVVGRE96czdRVUZCUXl4QlFVZDZRaXhaUVVGSkxFbEJRVWtzUTBGQlF5eFBRVUZQTEVWQlFVVTdRVUZEWkN4blFrRkJTU3hEUVVGRExFOUJRVThzUTBGQlF5eEpRVUZKTEVOQlFVTXNRMEZCUXp0VFFVTjBRanM3TzBGQlFVRXNRVUZIUkN4WlFVRkpMRWxCUVVrc1EwRkJReXhOUVVGTkxFVkJRVVU3UVVGRFlpeG5Ra0ZCU1N4RFFVRkRMRTFCUVUwc1EwRkJReXhKUVVGSkxFTkJRVU1zUTBGQlF6dFRRVU55UWpzN1FVRkZSQ3hsUVVGUExFbEJRVWtzUTBGQlF6dExRVU5tT3p0QlFUbEVaMElzVjBGQlR5eFhRV2RGZUVJc1NVRkJTU3h0UWtGQlJ6dEJRVU5JTEZsQlFVa3NRMEZCUXl4TFFVRkxMRVZCUVVVc1EwRkJRenRCUVVOaUxGbEJRVWtzUTBGQlF5eFZRVUZWTEVkQlFVY3NTVUZCU1N4RFFVRkRMRmRCUVZjc1EwRkJRenRCUVVOdVF5eGxRVUZQTEVsQlFVa3NRMEZCUXp0TFFVTm1PenM3T3pzN08wRkJjRVZuUWl4WFFVRlBMRmRCTWtWNFFpeGxRVUZsTERoQ1FVRkhPMEZCUTJRc1pVRkJUeXhGUVVGRkxFTkJRVU03UzBGRFlqczdPenM3T3pzN08wRkJOMFZuUWl4WFFVRlBMRmRCYzBaNFFpeFBRVUZQTEc5Q1FVRkRMRXRCUVVzc1JVRkJSVHRaUVVOSUxFVkJRVVVzUjBGQmQwSXNTVUZCU1N4RFFVRTVRaXhGUVVGRk96dFpRVUZMTEdOQlFXTXNORUpCUVVzc1NVRkJTVHM3UVVGRGRFTXNXVUZCVFN4VlFVRlZMRWRCUVVjc1NVRkJTU3hKUVVGSkxFTkJRVU1zVjBGQlZ5eERRVUZETEdOQlFXTXNRMEZCUXl4RFFVRkRPMEZCUTNoRUxHVkJRVThzVlVGQlZTeERRVUZETEVkQlFVY3NRMEZCUXl4TFFVRkxMRU5CUVVNc1EwRkJRenRMUVVOb1F6czdWMEV4Um1kQ0xFOUJRVTg3T3p0clFrRkJVQ3hQUVVGUElpd2labWxzWlNJNklsQnliMk5sYzNNdWFuTWlMQ0p6YjNWeVkyVlNiMjkwSWpvaUwxVnpaWEp6TDAxaGRIUlFaWEp5ZVM5VGFYUmxjeTl3YjNCdGIzUnBiMjRpTENKemIzVnlZMlZ6UTI5dWRHVnVkQ0k2V3lKcGJYQnZjblFnS2lCaGN5QnNiMjl3SUdaeWIyMGdKeTR2Ykc5dmNDYzdYRzVjYm1WNGNHOXlkQ0JrWldaaGRXeDBJR05zWVhOeklGQnliMk5sYzNNZ2UxeHVJQ0FnSUM4cVhHNGdJQ0FnSUNBZ0lGdHZZbXBsWTNSZE9pQlFjbTl3WlhKMGFXVnpYRzRnSUNBZ0tpOWNiaUFnSUNCamIyNXpkSEoxWTNSdmNpaHdjbTl3Y3lrZ2UxeHVJQ0FnSUNBZ0lDQjBhR2x6TG1sa0lEMGdiRzl2Y0M1blpYUlFjbTlqWlhOelNXUW9LVHRjYmx4dUlDQWdJQ0FnSUNCMGFHbHpMbDl2YmtOc1pXRnVkWEFnUFNBb0tTQTlQaUI3WEc0Z0lDQWdJQ0FnSUNBZ0lDQjBhR2x6TG5OMGIzQW9LVHRjYmlBZ0lDQWdJQ0FnSUNBZ0lIUm9hWE11YjI1RGJHVmhiblZ3SUQwZ2RXNWtaV1pwYm1Wa08xeHVJQ0FnSUNBZ0lDQjlPMXh1WEc0Z0lDQWdJQ0FnSUhSb2FYTXVYMjl1UVdOMGFYWmhkR1VnUFNBb0tTQTlQaUIwYUdsekxtOXVRMnhsWVc1MWNDQTlJSFJvYVhNdVgyOXVRMnhsWVc1MWNEdGNibHh1SUNBZ0lDQWdJQ0IwYUdsekxuTmxkQ2gwYUdsekxtZGxkRVJsWm1GMWJIUlFjbTl3Y3lncEtUdGNiaUFnSUNBZ0lDQWdkR2hwY3k1elpYUW9jSEp2Y0hNcE8xeHVYRzRnSUNBZ0lDQWdJSFJvYVhNdWFYTkJZM1JwZG1VZ1BTQm1ZV3h6WlR0Y2JpQWdJQ0I5WEc1Y2JpQWdJQ0J6WlhRb2NISnZjSE1wSUh0Y2JpQWdJQ0FnSUNBZ1ptOXlJQ2hzWlhRZ2EyVjVJR2x1SUhCeWIzQnpLU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQnBaaUFvY0hKdmNITXVhR0Z6VDNkdVVISnZjR1Z5ZEhrb2EyVjVLU2tnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUhSb2FYTmJhMlY1WFNBOUlIQnliM0J6VzJ0bGVWMDdYRzRnSUNBZ0lDQWdJQ0FnSUNCOVhHNGdJQ0FnSUNBZ0lIMWNibHh1SUNBZ0lDQWdJQ0J5WlhSMWNtNGdkR2hwY3p0Y2JpQWdJQ0I5WEc1Y2JpQWdJQ0J6ZEdGeWRDZ3BJSHRjYmlBZ0lDQWdJQ0FnYkc5dmNDNWhZM1JwZG1GMFpTaDBhR2x6TG1sa0xDQjBhR2x6S1R0Y2JseHVJQ0FnSUNBZ0lDQjBhR2x6TG05dVEyeGxZVzUxY0NBOUlIUm9hWE11YjI1QlkzUnBkbUYwWlNBOUlIVnVaR1ZtYVc1bFpEdGNibHh1SUNBZ0lDQWdJQ0F2THlCUWNtbDJZWFJsSUdCdmJsTjBZWEowWUZ4dUlDQWdJQ0FnSUNCcFppQW9kR2hwY3k1ZmIyNVRkR0Z5ZENrZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnZEdocGN5NWZiMjVUZEdGeWRDaDBhR2x6S1R0Y2JpQWdJQ0FnSUNBZ2ZWeHVYRzRnSUNBZ0lDQWdJQzh2SUZCMVlteHBZeUJnYjI1VGRHRnlkR0JjYmlBZ0lDQWdJQ0FnYVdZZ0tIUm9hWE11YjI1VGRHRnlkQ2tnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdkR2hwY3k1dmJsTjBZWEowS0hSb2FYTXBPMXh1SUNBZ0lDQWdJQ0I5WEc1Y2JpQWdJQ0FnSUNBZ2NtVjBkWEp1SUhSb2FYTTdYRzRnSUNBZ2ZWeHVYRzRnSUNBZ2MzUnZjQ2dwSUh0Y2JpQWdJQ0FnSUNBZ2JHOXZjQzVrWldGamRHbDJZWFJsS0hSb2FYTXVhV1FwTzF4dVhHNGdJQ0FnSUNBZ0lDOHZJRkJ5YVhaaGRHVWdZRzl1VTNSdmNHQmNiaUFnSUNBZ0lDQWdhV1lnS0hSb2FYTXVYMjl1VTNSdmNDa2dlMXh1SUNBZ0lDQWdJQ0FnSUNBZ2RHaHBjeTVmYjI1VGRHOXdLSFJvYVhNcE8xeHVJQ0FnSUNBZ0lDQjlYRzVjYmlBZ0lDQWdJQ0FnTHk4Z1VIVmliR2xqSUdCdmJsTjBiM0JnWEc0Z0lDQWdJQ0FnSUdsbUlDaDBhR2x6TG05dVUzUnZjQ2tnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdkR2hwY3k1dmJsTjBiM0FvZEdocGN5azdYRzRnSUNBZ0lDQWdJSDFjYmx4dUlDQWdJQ0FnSUNCeVpYUjFjbTRnZEdocGN6dGNiaUFnSUNCOVhHNWNiaUFnSUNCdmJtTmxLQ2tnZTF4dUlDQWdJQ0FnSUNCMGFHbHpMbk4wWVhKMEtDazdYRzRnSUNBZ0lDQWdJSFJvYVhNdWIyNUJZM1JwZG1GMFpTQTlJSFJvYVhNdVgyOXVRV04wYVhaaGRHVTdYRzRnSUNBZ0lDQWdJSEpsZEhWeWJpQjBhR2x6TzF4dUlDQWdJSDFjYmx4dUlDQWdJQzhxWEc0Z0lDQWdJQ0FnSUNNZ1IyVjBJR1JsWm1GMWJIUWdRV04wYVc5dUlIQnliM0JsY25ScFpYTmNibHh1SUNBZ0lDQWdJQ0JBY21WMGRYSnVJRnR2WW1wbFkzUmRYRzRnSUNBZ0tpOWNiaUFnSUNCblpYUkVaV1poZFd4MFVISnZjSE1vS1NCN1hHNGdJQ0FnSUNBZ0lISmxkSFZ5YmlCN2ZUdGNiaUFnSUNCOVhHNWNiaUFnSUNBdktseHVJQ0FnSUNBZ0lDQWpJRVY0ZEdWdVpDQjBhR2x6SUZCeWIyTmxjM01nZDJsMGFDQnVaWGNnY0hKdmNHVnlkR2xsYzF4dUlDQWdJQ0FnSUNBakl5QlNaWFIxY201eklHNWxkeUJwYm5OMFlXNWpaU0J2WmlCMGFHbHpJRkJ5YjJObGMzTW5jeUJnY0hKdmRHOTBlWEJsWUNCM2FYUm9JR1Y0YVhOMGFXNW5JR0Z1WkNCdVpYY2djSEp2Y0dWeWRHbGxjMXh1WEc0Z0lDQWdJQ0FnSUVCd1lYSmhiU0JiYjJKcVpXTjBYU0FvYjNCMGFXOXVZV3dwWEc0Z0lDQWdJQ0FnSUVCeVpYUjFjbTRnVzFCeWIyTmxjM05kWEc0Z0lDQWdLaTljYmlBZ0lDQnBibWhsY21sMEtIQnliM0J6S1NCN1hHNGdJQ0FnSUNBZ0lHTnZibk4wSUhzZ2FXUXNJQzR1TG1sdWFHVnlhWFJsWkZCeWIzQnpJSDBnUFNCMGFHbHpPMXh1SUNBZ0lDQWdJQ0JqYjI1emRDQnVaWGRRY205alpYTnpJRDBnYm1WM0lIUm9hWE11WTI5dWMzUnlkV04wYjNJb2FXNW9aWEpwZEdWa1VISnZjSE1wTzF4dUlDQWdJQ0FnSUNCeVpYUjFjbTRnYm1WM1VISnZZMlZ6Y3k1elpYUW9jSEp2Y0hNcE8xeHVJQ0FnSUgxY2JuMGlYWDA9XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9wcm9jZXNzL1Byb2Nlc3MuanNcbiAqKiBtb2R1bGUgaWQgPSA4XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbnZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfUHJvY2VzczIgPSByZXF1aXJlKCcuLi9wcm9jZXNzL1Byb2Nlc3MnKTtcblxudmFyIF9Qcm9jZXNzMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX1Byb2Nlc3MyKTtcblxudmFyIF91dGlscyA9IHJlcXVpcmUoJy4uL2luYy91dGlscycpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmICghc2VsZikgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIGNhbGwgJiYgKHR5cGVvZiBjYWxsID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpID8gY2FsbCA6IHNlbGY7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgXCIgKyB0eXBlb2Ygc3VwZXJDbGFzcyk7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgZW51bWVyYWJsZTogZmFsc2UsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcykgOiBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzOyB9XG5cbnZhciBJbnB1dCA9IChmdW5jdGlvbiAoX1Byb2Nlc3MpIHtcbiAgICBfaW5oZXJpdHMoSW5wdXQsIF9Qcm9jZXNzKTtcblxuICAgIGZ1bmN0aW9uIElucHV0KGluaXRpYWxWYWx1ZXMsIHBvbGwpIHtcbiAgICAgICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIElucHV0KTtcblxuICAgICAgICB2YXIgX3RoaXMgPSBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCBfUHJvY2Vzcy5jYWxsKHRoaXMpKTtcblxuICAgICAgICBfdGhpcy5zdGF0ZSA9IGluaXRpYWxWYWx1ZXM7XG5cbiAgICAgICAgaWYgKCgwLCBfdXRpbHMuaXNGdW5jKShwb2xsKSkge1xuICAgICAgICAgICAgX3RoaXMub25GcmFtZVN0YXJ0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBfdGhpcy5sYXRlc3QoX3RoaXMucG9sbCgpKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIF90aGlzO1xuICAgIH1cblxuICAgIC8qXG4gICAgICAgIE1hbnVhbGx5IGFkZCBsYXRlc3QgdmFsdWVzXG4gICAgICAgICBAcGFyYW0gW29iamVjdF1cbiAgICAqL1xuXG4gICAgSW5wdXQucHJvdG90eXBlLmxhdGVzdCA9IGZ1bmN0aW9uIGxhdGVzdChwcm9wcykge1xuICAgICAgICB0aGlzLnN0YXRlID0gX2V4dGVuZHMoe30sIHRoaXMuc3RhdGUsIHByb3BzKTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIElucHV0O1xufSkoX1Byb2Nlc3MzLmRlZmF1bHQpO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBJbnB1dDtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbk55WXk5cGJuQjFkQzlKYm5CMWRDNXFjeUpkTENKdVlXMWxjeUk2VzEwc0ltMWhjSEJwYm1keklqb2lPenM3T3pzN096czdPenM3T3pzN096czdPenRKUVVkeFFpeExRVUZMTzJOQlFVd3NTMEZCU3pzN1FVRkRkRUlzWVVGRWFVSXNTMEZCU3l4RFFVTldMR0ZCUVdFc1JVRkJSU3hKUVVGSkxFVkJRVVU3T0VKQlJHaENMRXRCUVVzN08zRkVRVVZzUWl4dFFrRkJUenM3UVVGRFVDeGpRVUZMTEV0QlFVc3NSMEZCUnl4aFFVRmhMRU5CUVVNN08wRkJSVE5DTEZsQlFVa3NWMEZRU0N4TlFVRk5MRVZCVDBrc1NVRkJTU3hEUVVGRExFVkJRVVU3UVVGRFpDeHJRa0ZCU3l4WlFVRlpMRWRCUVVjN2RVSkJRVTBzVFVGQlN5eE5RVUZOTEVOQlFVTXNUVUZCU3l4SlFVRkpMRVZCUVVVc1EwRkJRenRoUVVGQkxFTkJRVU03VTBGRGRFUTdPMHRCUTBvN096czdPenRCUVVGQk8wRkJVbWRDTEZOQlFVc3NWMEZsZEVJc1RVRkJUU3h0UWtGQlF5eExRVUZMTEVWQlFVVTdRVUZEVml4WlFVRkpMRU5CUVVNc1MwRkJTeXhuUWtGQlVTeEpRVUZKTEVOQlFVTXNTMEZCU3l4RlFVRkxMRXRCUVVzc1EwRkJSU3hEUVVGRE8wdEJRelZET3p0WFFXcENaMElzUzBGQlN6czdPMnRDUVVGTUxFdEJRVXNpTENKbWFXeGxJam9pU1c1d2RYUXVhbk1pTENKemIzVnlZMlZTYjI5MElqb2lMMVZ6WlhKekwwMWhkSFJRWlhKeWVTOVRhWFJsY3k5d2IzQnRiM1JwYjI0aUxDSnpiM1Z5WTJWelEyOXVkR1Z1ZENJNld5SnBiWEJ2Y25RZ1VISnZZMlZ6Y3lCbWNtOXRJQ2N1TGk5d2NtOWpaWE56TDFCeWIyTmxjM01uTzF4dWFXMXdiM0owSUhzZ2FYTkdkVzVqSUgwZ1puSnZiU0FuTGk0dmFXNWpMM1YwYVd4ekp6dGNibHh1Wlhod2IzSjBJR1JsWm1GMWJIUWdZMnhoYzNNZ1NXNXdkWFFnWlhoMFpXNWtjeUJRY205alpYTnpJSHRjYmlBZ0lDQmpiMjV6ZEhKMVkzUnZjaWhwYm1sMGFXRnNWbUZzZFdWekxDQndiMnhzS1NCN1hHNGdJQ0FnSUNBZ0lITjFjR1Z5S0NrN1hHNGdJQ0FnSUNBZ0lIUm9hWE11YzNSaGRHVWdQU0JwYm1sMGFXRnNWbUZzZFdWek8xeHVYRzRnSUNBZ0lDQWdJR2xtSUNocGMwWjFibU1vY0c5c2JDa3BJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lIUm9hWE11YjI1R2NtRnRaVk4wWVhKMElEMGdLQ2tnUFQ0Z2RHaHBjeTVzWVhSbGMzUW9kR2hwY3k1d2IyeHNLQ2twTzF4dUlDQWdJQ0FnSUNCOVhHNGdJQ0FnZlZ4dVhHNGdJQ0FnTHlwY2JpQWdJQ0FnSUNBZ1RXRnVkV0ZzYkhrZ1lXUmtJR3hoZEdWemRDQjJZV3gxWlhOY2JseHVJQ0FnSUNBZ0lDQkFjR0Z5WVcwZ1cyOWlhbVZqZEYxY2JpQWdJQ0FxTDF4dUlDQWdJR3hoZEdWemRDaHdjbTl3Y3lrZ2UxeHVJQ0FnSUNBZ0lDQjBhR2x6TG5OMFlYUmxJRDBnZXlBdUxpNTBhR2x6TG5OMFlYUmxMQ0F1TGk1d2NtOXdjeUI5TzF4dUlDQWdJSDFjYm4xY2JpSmRmUT09XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9pbnB1dC9JbnB1dC5qc1xuICoqIG1vZHVsZSBpZCA9IDlcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHMuZGVmYXVsdCA9IHN0YWdnZXI7XG5cbnZhciBfVHdlZW4gPSByZXF1aXJlKCcuLi9hY3Rpb25zL1R3ZWVuJyk7XG5cbnZhciBfVHdlZW4yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfVHdlZW4pO1xuXG52YXIgX3ByZXNldEVhc2luZyA9IHJlcXVpcmUoJy4uL2FjdGlvbnMvZWFzaW5nL3ByZXNldC1lYXNpbmcnKTtcblxudmFyIF9wcmVzZXRFYXNpbmcyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcHJlc2V0RWFzaW5nKTtcblxudmFyIF91dGlscyA9IHJlcXVpcmUoJy4vdXRpbHMnKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxudmFyIERFRkFVTFRfSU5URVJWQUwgPSAxMDA7XG5cbmZ1bmN0aW9uIHN0YWdnZXIoYXJyYXksIGNhbGxiYWNrLCBwcm9wcykge1xuICAgIHZhciBhcnJheUxlbmd0aCA9IGFycmF5Lmxlbmd0aDtcbiAgICB2YXIgcHJvcHNJc0ludGVydmFsID0gKDAsIF91dGlscy5pc051bSkocHJvcHMpO1xuICAgIHZhciBpbnRlcnZhbCA9IHByb3BzSXNJbnRlcnZhbCA/IHByb3BzIDogcHJvcHMuaW50ZXJ2YWwgfHwgREVGQVVMVF9JTlRFUlZBTDtcbiAgICB2YXIgcHJldkluZGV4ID0gLTE7XG5cbiAgICB2YXIgc3RhZ2dlclR3ZWVuID0gbmV3IF9Ud2VlbjIuZGVmYXVsdCh7XG4gICAgICAgIGR1cmF0aW9uOiBpbnRlcnZhbCAqIGFycmF5TGVuZ3RoLFxuICAgICAgICB2YWx1ZXM6IHtcbiAgICAgICAgICAgIGk6IHtcbiAgICAgICAgICAgICAgICBmcm9tOiAwLFxuICAgICAgICAgICAgICAgIHRvOiBhcnJheUxlbmd0aCAtIDEsXG4gICAgICAgICAgICAgICAgcm91bmQ6IHRydWUsXG4gICAgICAgICAgICAgICAgZWFzZTogcHJvcHNJc0ludGVydmFsID8gX3ByZXNldEVhc2luZzIuZGVmYXVsdC5saW5lYXIgOiBwcm9wcy5lYXNlIHx8IF9wcmVzZXRFYXNpbmcyLmRlZmF1bHQubGluZWFyXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIG9uUmVuZGVyOiBmdW5jdGlvbiAodHdlZW4pIHtcbiAgICAgICAgICAgIHZhciBpID0gdHdlZW4uc3RhdGUuaTtcbiAgICAgICAgICAgIHZhciBnYXBJbmRleCA9IHByZXZJbmRleCArIDE7XG5cbiAgICAgICAgICAgIGZvciAoOyBnYXBJbmRleCA8PSBpOyBnYXBJbmRleCsrKSB7XG4gICAgICAgICAgICAgICAgY2FsbGJhY2soYXJyYXlbZ2FwSW5kZXhdLCBnYXBJbmRleCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHByZXZJbmRleCA9IGk7XG4gICAgICAgIH0sXG4gICAgICAgIG9uQ29tcGxldGU6IHByb3BzSXNJbnRlcnZhbCA/IHVuZGVmaW5lZCA6IHByb3BzLm9uQ29tcGxldGVcbiAgICB9KTtcblxuICAgIHN0YWdnZXJUd2Vlbi5zdGFydCgpO1xuXG4gICAgcmV0dXJuIHN0YWdnZXJUd2Vlbjtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbk55WXk5cGJtTXZjM1JoWjJkbGNpNXFjeUpkTENKdVlXMWxjeUk2VzEwc0ltMWhjSEJwYm1keklqb2lPenM3YTBKQlRYZENMRTlCUVU4N096czdPenM3T3pzN096czdPMEZCUmk5Q0xFbEJRVTBzWjBKQlFXZENMRWRCUVVjc1IwRkJSeXhEUVVGRE96dEJRVVZrTEZOQlFWTXNUMEZCVHl4RFFVRkRMRXRCUVVzc1JVRkJSU3hSUVVGUkxFVkJRVVVzUzBGQlN5eEZRVUZGTzBGQlEzQkVMRkZCUVUwc1YwRkJWeXhIUVVGSExFdEJRVXNzUTBGQlF5eE5RVUZOTEVOQlFVTTdRVUZEYWtNc1VVRkJUU3hsUVVGbExFZEJRVWNzVjBGT2JrSXNTMEZCU3l4RlFVMXZRaXhMUVVGTExFTkJRVU1zUTBGQlF6dEJRVU55UXl4UlFVRk5MRkZCUVZFc1IwRkJSeXhsUVVGbExFZEJRVWNzUzBGQlN5eEhRVUZITEV0QlFVc3NRMEZCUXl4UlFVRlJMRWxCUVVrc1owSkJRV2RDTEVOQlFVTTdRVUZET1VVc1VVRkJTU3hUUVVGVExFZEJRVWNzUTBGQlF5eERRVUZETEVOQlFVTTdPMEZCUlc1Q0xGRkJRVTBzV1VGQldTeEhRVUZITEc5Q1FVRlZPMEZCUXpOQ0xHZENRVUZSTEVWQlFVVXNVVUZCVVN4SFFVRkhMRmRCUVZjN1FVRkRhRU1zWTBGQlRTeEZRVUZGTzBGQlEwb3NZVUZCUXl4RlFVRkZPMEZCUTBNc2IwSkJRVWtzUlVGQlJTeERRVUZETzBGQlExQXNhMEpCUVVVc1JVRkJSU3hYUVVGWExFZEJRVWNzUTBGQlF6dEJRVU51UWl4eFFrRkJTeXhGUVVGRkxFbEJRVWs3UVVGRFdDeHZRa0ZCU1N4RlFVRkZMR1ZCUVdVc1IwRkJSeXgxUWtGQlR5eE5RVUZOTEVkQlFVY3NTMEZCU3l4RFFVRkRMRWxCUVVrc1NVRkJTU3gxUWtGQlR5eE5RVUZOTzJGQlEzUkZPMU5CUTBvN1FVRkRSQ3huUWtGQlVTeEZRVUZGTEZWQlFVTXNTMEZCU3l4RlFVRkxPMEZCUTJwQ0xHZENRVUZOTEVOQlFVTXNSMEZCUnl4TFFVRkxMRU5CUVVNc1MwRkJTeXhEUVVGRExFTkJRVU1zUTBGQlF6dEJRVU40UWl4blFrRkJTU3hSUVVGUkxFZEJRVWNzVTBGQlV5eEhRVUZITEVOQlFVTXNRMEZCUXpzN1FVRkZOMElzYlVKQlFVOHNVVUZCVVN4SlFVRkpMRU5CUVVNc1JVRkJSU3hSUVVGUkxFVkJRVVVzUlVGQlJUdEJRVU01UWl4M1FrRkJVU3hEUVVGRExFdEJRVXNzUTBGQlF5eFJRVUZSTEVOQlFVTXNSVUZCUlN4UlFVRlJMRU5CUVVNc1EwRkJRenRoUVVOMlF6czdRVUZGUkN4eFFrRkJVeXhIUVVGSExFTkJRVU1zUTBGQlF6dFRRVU5xUWp0QlFVTkVMR3RDUVVGVkxFVkJRVVVzWlVGQlpTeEhRVUZITEZOQlFWTXNSMEZCUnl4TFFVRkxMRU5CUVVNc1ZVRkJWVHRMUVVNM1JDeERRVUZETEVOQlFVTTdPMEZCUlVnc1owSkJRVmtzUTBGQlF5eExRVUZMTEVWQlFVVXNRMEZCUXpzN1FVRkZja0lzVjBGQlR5eFpRVUZaTEVOQlFVTTdRMEZEZGtJaUxDSm1hV3hsSWpvaWMzUmhaMmRsY2k1cWN5SXNJbk52ZFhKalpWSnZiM1FpT2lJdlZYTmxjbk12VFdGMGRGQmxjbko1TDFOcGRHVnpMM0J2Y0cxdmRHbHZiaUlzSW5OdmRYSmpaWE5EYjI1MFpXNTBJanBiSW1sdGNHOXlkQ0JVZDJWbGJpQm1jbTl0SUNjdUxpOWhZM1JwYjI1ekwxUjNaV1Z1Snp0Y2JtbHRjRzl5ZENCbFlYTnBibWNnWm5KdmJTQW5MaTR2WVdOMGFXOXVjeTlsWVhOcGJtY3ZjSEpsYzJWMExXVmhjMmx1WnljN1hHNXBiWEJ2Y25RZ2V5QnBjMDUxYlNCOUlHWnliMjBnSnk0dmRYUnBiSE1uTzF4dVhHNWpiMjV6ZENCRVJVWkJWVXhVWDBsT1ZFVlNWa0ZNSUQwZ01UQXdPMXh1WEc1bGVIQnZjblFnWkdWbVlYVnNkQ0JtZFc1amRHbHZiaUJ6ZEdGbloyVnlLR0Z5Y21GNUxDQmpZV3hzWW1GamF5d2djSEp2Y0hNcElIdGNiaUFnSUNCamIyNXpkQ0JoY25KaGVVeGxibWQwYUNBOUlHRnljbUY1TG14bGJtZDBhRHRjYmlBZ0lDQmpiMjV6ZENCd2NtOXdjMGx6U1c1MFpYSjJZV3dnUFNCcGMwNTFiU2h3Y205d2N5azdYRzRnSUNBZ1kyOXVjM1FnYVc1MFpYSjJZV3dnUFNCd2NtOXdjMGx6U1c1MFpYSjJZV3dnUHlCd2NtOXdjeUE2SUhCeWIzQnpMbWx1ZEdWeWRtRnNJSHg4SUVSRlJrRlZURlJmU1U1VVJWSldRVXc3WEc0Z0lDQWdiR1YwSUhCeVpYWkpibVJsZUNBOUlDMHhPMXh1WEc0Z0lDQWdZMjl1YzNRZ2MzUmhaMmRsY2xSM1pXVnVJRDBnYm1WM0lGUjNaV1Z1S0h0Y2JpQWdJQ0FnSUNBZ1pIVnlZWFJwYjI0NklHbHVkR1Z5ZG1Gc0lDb2dZWEp5WVhsTVpXNW5kR2dzWEc0Z0lDQWdJQ0FnSUhaaGJIVmxjem9nZTF4dUlDQWdJQ0FnSUNBZ0lDQWdhVG9nZTF4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUdaeWIyMDZJREFzWEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnZEc4NklHRnljbUY1VEdWdVozUm9JQzBnTVN4Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCeWIzVnVaRG9nZEhKMVpTeGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQmxZWE5sT2lCd2NtOXdjMGx6U1c1MFpYSjJZV3dnUHlCbFlYTnBibWN1YkdsdVpXRnlJRG9nY0hKdmNITXVaV0Z6WlNCOGZDQmxZWE5wYm1jdWJHbHVaV0Z5WEc0Z0lDQWdJQ0FnSUNBZ0lDQjlYRzRnSUNBZ0lDQWdJSDBzWEc0Z0lDQWdJQ0FnSUc5dVVtVnVaR1Z5T2lBb2RIZGxaVzRwSUQwK0lIdGNiaUFnSUNBZ0lDQWdJQ0FnSUdOdmJuTjBJR2tnUFNCMGQyVmxiaTV6ZEdGMFpTNXBPMXh1SUNBZ0lDQWdJQ0FnSUNBZ2JHVjBJR2RoY0VsdVpHVjRJRDBnY0hKbGRrbHVaR1Y0SUNzZ01UdGNibHh1SUNBZ0lDQWdJQ0FnSUNBZ1ptOXlJQ2c3SUdkaGNFbHVaR1Y0SUR3OUlHazdJR2RoY0VsdVpHVjRLeXNwSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCallXeHNZbUZqYXloaGNuSmhlVnRuWVhCSmJtUmxlRjBzSUdkaGNFbHVaR1Y0S1R0Y2JpQWdJQ0FnSUNBZ0lDQWdJSDFjYmx4dUlDQWdJQ0FnSUNBZ0lDQWdjSEpsZGtsdVpHVjRJRDBnYVR0Y2JpQWdJQ0FnSUNBZ2ZTeGNiaUFnSUNBZ0lDQWdiMjVEYjIxd2JHVjBaVG9nY0hKdmNITkpjMGx1ZEdWeWRtRnNJRDhnZFc1a1pXWnBibVZrSURvZ2NISnZjSE11YjI1RGIyMXdiR1YwWlZ4dUlDQWdJSDBwTzF4dVhHNGdJQ0FnYzNSaFoyZGxjbFIzWldWdUxuTjBZWEowS0NrN1hHNWNiaUFnSUNCeVpYUjFjbTRnYzNSaFoyZGxjbFIzWldWdU8xeHVmU0pkZlE9PVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvaW5jL3N0YWdnZXIuanNcbiAqKiBtb2R1bGUgaWQgPSAxMFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9O1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0cy5kZWZhdWx0ID0gdGltZWxpbmU7XG5cbnZhciBfVHdlZW4gPSByZXF1aXJlKCcuLi9hY3Rpb25zL1R3ZWVuJyk7XG5cbnZhciBfVHdlZW4yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfVHdlZW4pO1xuXG52YXIgX3ByZXNldEVhc2luZyA9IHJlcXVpcmUoJy4uL2FjdGlvbnMvZWFzaW5nL3ByZXNldC1lYXNpbmcnKTtcblxudmFyIF9wcmVzZXRFYXNpbmcyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcHJlc2V0RWFzaW5nKTtcblxudmFyIF9jYWxjID0gcmVxdWlyZSgnLi9jYWxjJyk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbi8qXG4gICAgQHBhcmFtIFthcnJheV1cbiAgICAgICAgU2VxdWVudGlhbCBhcnJheSBvZiB0d2VlbnMsIGVhY2ggaXRlbSBjYW4gYmUgYSB0d2VlbiBvciBkZWZpbml0aW9uIG9iajpcblxuICAgICAgICBbXG4gICAgICAgICAgICBuZXcgVHdlZW4oKSxcbiAgICAgICAgICAgIHN0YWdnZXIoKSxcbiAgICAgICAgICAgIHRpbWVsaW5lKCksXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdHdlZW46IG5ldyBUd2VlbigpLFxuICAgICAgICAgICAgICAgIGF0OiAxMDAsXG4gICAgICAgICAgICAgICAgb2Zmc2V0OiBcIis9MTAwXCJcbiAgICAgICAgICAgIH1cbiAgICAgICAgXVxuKi9cbnZhciBhbmFseXplID0gZnVuY3Rpb24gKGRlZnMpIHtcbiAgICB2YXIgdGltZWxpbmUgPSBbXTtcbiAgICB2YXIgbnVtRGVmcyA9IGRlZnMubGVuZ3RoO1xuICAgIHZhciBjdXJyZW50UGxheWhlYWQgPSAwO1xuXG4gICAgdmFyIF9sb29wID0gZnVuY3Rpb24gKGkpIHtcbiAgICAgICAgdmFyIGRlZiA9IGRlZnNbaV07XG4gICAgICAgIHZhciBkZWZJc09iaiA9IGRlZi50d2VlbiA/IHRydWUgOiBmYWxzZTtcbiAgICAgICAgdmFyIHR3ZWVuID0gZGVmSXNPYmogPyBkZWYudHdlZW4gOiBkZWY7XG5cbiAgICAgICAgY3VycmVudFBsYXloZWFkICs9IGRlZklzT2JqICYmIGRlZi5vZmZzZXQgPyBkZWYuYXQgfHwgKDAsIF9jYWxjLnJlbGF0aXZlVmFsdWUpKGN1cnJlbnRQbGF5aGVhZCwgZGVmLm9mZnNldCkgOiAwO1xuXG4gICAgICAgIHZhciBkdXJhdGlvbiA9IDA7XG4gICAgICAgIGZvciAodmFyIGtleSBpbiB0d2Vlbi52YWx1ZXMpIHtcbiAgICAgICAgICAgIGlmICh0d2Vlbi52YWx1ZXMuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgICAgICAgIHZhciB2YWx1ZSA9IHR3ZWVuLnZhbHVlc1trZXldO1xuICAgICAgICAgICAgICAgIGR1cmF0aW9uID0gTWF0aC5tYXgoZHVyYXRpb24sIHZhbHVlLmR1cmF0aW9uKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHRpbWVsaW5lLnB1c2goe1xuICAgICAgICAgICAgZnJvbTogY3VycmVudFBsYXloZWFkLFxuICAgICAgICAgICAgZHVyYXRpb246IGR1cmF0aW9uLFxuICAgICAgICAgICAgZmlyZTogZnVuY3Rpb24gKHRpbWUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHdlZW4uc2Vla1RpbWUodGltZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGN1cnJlbnRQbGF5aGVhZCArPSB0d2Vlbi5kdXJhdGlvbjtcbiAgICB9O1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBudW1EZWZzOyBpKyspIHtcbiAgICAgICAgX2xvb3AoaSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHsgdG90YWxUaW1lOiBjdXJyZW50UGxheWhlYWQsIHRpbWVsaW5lOiB0aW1lbGluZSB9O1xufTtcblxudmFyIHNldFR3ZWVucyA9IGZ1bmN0aW9uIChfcmVmKSB7XG4gICAgdmFyIGVsYXBzZWQgPSBfcmVmLmVsYXBzZWQ7XG4gICAgdmFyIHRpbWVsaW5lID0gX3JlZi50aW1lbGluZTtcbiAgICB2YXIgdGltZWxpbmVMZW5ndGggPSBfcmVmLnRpbWVsaW5lTGVuZ3RoO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aW1lbGluZUxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHZhciBfdHdlZW4gPSB0aW1lbGluZVtpXTtcbiAgICAgICAgdmFyIHR3ZWVuVGltZSA9IGVsYXBzZWQgLSBfdHdlZW4uZnJvbTtcblxuICAgICAgICBpZiAodHdlZW5UaW1lID4gMCAmJiB0d2VlblRpbWUgPCBfdHdlZW4uZHVyYXRpb24pIHtcbiAgICAgICAgICAgIF90d2Vlbi5maXJlKHR3ZWVuVGltZSk7XG4gICAgICAgIH1cbiAgICB9XG59O1xuXG5mdW5jdGlvbiB0aW1lbGluZShkZWYpIHtcbiAgICB2YXIgcHJvcHMgPSBhcmd1bWVudHMubGVuZ3RoIDw9IDEgfHwgYXJndW1lbnRzWzFdID09PSB1bmRlZmluZWQgPyB7fSA6IGFyZ3VtZW50c1sxXTtcblxuICAgIHZhciBfYW5hbHl6ZSA9IGFuYWx5emUoZGVmKTtcblxuICAgIHZhciB0b3RhbFRpbWUgPSBfYW5hbHl6ZS50b3RhbFRpbWU7XG4gICAgdmFyIHRpbWVsaW5lID0gX2FuYWx5emUudGltZWxpbmU7XG5cbiAgICByZXR1cm4gbmV3IF9Ud2VlbjIuZGVmYXVsdChfZXh0ZW5kcyh7fSwgcHJvcHMsIHtcbiAgICAgICAgZHVyYXRpb246IHRvdGFsVGltZSxcbiAgICAgICAgZWFzZTogX3ByZXNldEVhc2luZzIuZGVmYXVsdC5saW5lYXIsXG4gICAgICAgIHZhbHVlczoge1xuICAgICAgICAgICAgcDogMVxuICAgICAgICB9LFxuICAgICAgICB0aW1lbGluZTogdGltZWxpbmUsXG4gICAgICAgIHRpbWVsaW5lTGVuZ3RoOiB0aW1lbGluZS5sZW5ndGgsXG4gICAgICAgIG9uUmVuZGVyOiBzZXRUd2VlbnNcbiAgICB9KSk7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5OeVl5OXBibU12ZEdsdFpXeHBibVV1YW5NaVhTd2libUZ0WlhNaU9sdGRMQ0p0WVhCd2FXNW5jeUk2SWpzN096czdhMEpCSzBSM1FpeFJRVUZST3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3p0QlFUVkRhRU1zU1VGQlRTeFBRVUZQTEVkQlFVY3NWVUZCUXl4SlFVRkpMRVZCUVVzN1FVRkRkRUlzVVVGQlRTeFJRVUZSTEVkQlFVY3NSVUZCUlN4RFFVRkRPMEZCUTNCQ0xGRkJRVTBzVDBGQlR5eEhRVUZITEVsQlFVa3NRMEZCUXl4TlFVRk5MRU5CUVVNN1FVRkROVUlzVVVGQlNTeGxRVUZsTEVkQlFVY3NRMEZCUXl4RFFVRkRPenN3UWtGRlppeERRVUZETzBGQlEwNHNXVUZCVFN4SFFVRkhMRWRCUVVjc1NVRkJTU3hEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETzBGQlEzQkNMRmxCUVUwc1VVRkJVU3hIUVVGSExFZEJRVWNzUTBGQlF5eExRVUZMTEVkQlFVY3NTVUZCU1N4SFFVRkhMRXRCUVVzc1EwRkJRenRCUVVNeFF5eFpRVUZOTEV0QlFVc3NSMEZCUnl4QlFVRkRMRkZCUVZFc1IwRkJTU3hIUVVGSExFTkJRVU1zUzBGQlN5eEhRVUZITEVkQlFVY3NRMEZCUXpzN1FVRkZNME1zZFVKQlFXVXNTVUZCU3l4QlFVRkRMRkZCUVZFc1NVRkJTU3hIUVVGSExFTkJRVU1zVFVGQlRTeEhRVU4yUXl4SFFVRkhMRU5CUVVNc1JVRkJSU3hKUVVGSkxGVkJOVUppTEdGQlFXRXNSVUUwUW1Nc1pVRkJaU3hGUVVGRkxFZEJRVWNzUTBGQlF5eE5RVUZOTEVOQlFVTXNSMEZCUnl4RFFVRkRMRUZCUVVNc1EwRkJRenM3UVVGRk9VUXNXVUZCU1N4UlFVRlJMRWRCUVVjc1EwRkJReXhEUVVGRE8wRkJRMnBDTEdGQlFVc3NTVUZCU1N4SFFVRkhMRWxCUVVrc1MwRkJTeXhEUVVGRExFMUJRVTBzUlVGQlJUdEJRVU14UWl4blFrRkJTU3hMUVVGTExFTkJRVU1zVFVGQlRTeERRVUZETEdOQlFXTXNRMEZCUXl4SFFVRkhMRU5CUVVNc1JVRkJSVHRCUVVOc1F5eHZRa0ZCVFN4TFFVRkxMRWRCUVVjc1MwRkJTeXhEUVVGRExFMUJRVTBzUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXp0QlFVTm9ReXgzUWtGQlVTeEhRVUZITEVsQlFVa3NRMEZCUXl4SFFVRkhMRU5CUVVNc1VVRkJVU3hGUVVGRkxFdEJRVXNzUTBGQlF5eFJRVUZSTEVOQlFVTXNRMEZCUXp0aFFVTnFSRHRUUVVOS096dEJRVVZFTEdkQ1FVRlJMRU5CUVVNc1NVRkJTU3hEUVVGRE8wRkJRMVlzWjBKQlFVa3NSVUZCUlN4bFFVRmxPMEZCUTNKQ0xHOUNRVUZSTEVWQlFVVXNVVUZCVVR0QlFVTnNRaXhuUWtGQlNTeEZRVUZGTEZWQlFVTXNTVUZCU1R0MVFrRkJTeXhMUVVGTExFTkJRVU1zVVVGQlVTeERRVUZETEVsQlFVa3NRMEZCUXp0aFFVRkJPMU5CUTNaRExFTkJRVU1zUTBGQlF6czdRVUZGU0N4MVFrRkJaU3hKUVVGSkxFdEJRVXNzUTBGQlF5eFJRVUZSTEVOQlFVTTdPenRCUVhSQ2RFTXNVMEZCU3l4SlFVRkpMRU5CUVVNc1IwRkJSeXhEUVVGRExFVkJRVVVzUTBGQlF5eEhRVUZITEU5QlFVOHNSVUZCUlN4RFFVRkRMRVZCUVVVc1JVRkJSVHRqUVVGNlFpeERRVUZETzB0QmRVSlVPenRCUVVWRUxGZEJRVThzUlVGQlJTeFRRVUZUTEVWQlFVVXNaVUZCWlN4RlFVRkZMRkZCUVZFc1JVRkJVaXhSUVVGUkxFVkJRVVVzUTBGQlF6dERRVU51UkN4RFFVRkRPenRCUVVWR0xFbEJRVTBzVTBGQlV5eEhRVUZITEdkQ1FVRXlRenRSUVVGNFF5eFBRVUZQTEZGQlFWQXNUMEZCVHp0UlFVRkZMRkZCUVZFc1VVRkJVaXhSUVVGUk8xRkJRVVVzWTBGQll5eFJRVUZrTEdOQlFXTTdPMEZCUTJ4RUxGTkJRVXNzU1VGQlNTeERRVUZETEVkQlFVY3NRMEZCUXl4RlFVRkZMRU5CUVVNc1IwRkJSeXhqUVVGakxFVkJRVVVzUTBGQlF5eEZRVUZGTEVWQlFVVTdRVUZEY2tNc1dVRkJUU3hOUVVGTExFZEJRVWNzVVVGQlVTeERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRPMEZCUXpGQ0xGbEJRVTBzVTBGQlV5eEhRVUZITEU5QlFVOHNSMEZCUnl4TlFVRkxMRU5CUVVNc1NVRkJTU3hEUVVGRE96dEJRVVYyUXl4WlFVRkpMRk5CUVZNc1IwRkJSeXhEUVVGRExFbEJRVWtzVTBGQlV5eEhRVUZITEUxQlFVc3NRMEZCUXl4UlFVRlJMRVZCUVVVN1FVRkROME1zYTBKQlFVc3NRMEZCUXl4SlFVRkpMRU5CUVVNc1UwRkJVeXhEUVVGRExFTkJRVU03VTBGRGVrSTdTMEZEU2p0RFFVTktMRU5CUVVNN08wRkJSV0VzVTBGQlV5eFJRVUZSTEVOQlFVTXNSMEZCUnl4RlFVRmpPMUZCUVZvc1MwRkJTeXg1UkVGQlJ5eEZRVUZGT3p0dFFrRkRXaXhQUVVGUExFTkJRVU1zUjBGQlJ5eERRVUZET3p0UlFVRndReXhUUVVGVExGbEJRVlFzVTBGQlV6dFJRVUZGTEZGQlFWRXNXVUZCVWl4UlFVRlJPenRCUVVVelFpeFhRVUZQTEdsRFFVTkJMRXRCUVVzN1FVRkRVaXhuUWtGQlVTeEZRVUZGTEZOQlFWTTdRVUZEYmtJc1dVRkJTU3hGUVVGRkxIVkNRVUZQTEUxQlFVMDdRVUZEYmtJc1kwRkJUU3hGUVVGRk8wRkJRMG9zWVVGQlF5eEZRVUZGTEVOQlFVTTdVMEZEVUR0QlFVTkVMR2RDUVVGUkxFVkJRVVVzVVVGQlVUdEJRVU5zUWl4elFrRkJZeXhGUVVGRkxGRkJRVkVzUTBGQlF5eE5RVUZOTzBGQlF5OUNMR2RDUVVGUkxFVkJRVVVzVTBGQlV6dFBRVU55UWl4RFFVRkRPME5CUTA0aUxDSm1hV3hsSWpvaWRHbHRaV3hwYm1VdWFuTWlMQ0p6YjNWeVkyVlNiMjkwSWpvaUwxVnpaWEp6TDAxaGRIUlFaWEp5ZVM5VGFYUmxjeTl3YjNCdGIzUnBiMjRpTENKemIzVnlZMlZ6UTI5dWRHVnVkQ0k2V3lKcGJYQnZjblFnVkhkbFpXNGdabkp2YlNBbkxpNHZZV04wYVc5dWN5OVVkMlZsYmljN1hHNXBiWEJ2Y25RZ1pXRnphVzVuSUdaeWIyMGdKeTR1TDJGamRHbHZibk12WldGemFXNW5MM0J5WlhObGRDMWxZWE5wYm1jbk8xeHVhVzF3YjNKMElIc2djbVZzWVhScGRtVldZV3gxWlNCOUlHWnliMjBnSnk0dlkyRnNZeWM3WEc1Y2JpOHFYRzRnSUNBZ1FIQmhjbUZ0SUZ0aGNuSmhlVjFjYmlBZ0lDQWdJQ0FnVTJWeGRXVnVkR2xoYkNCaGNuSmhlU0J2WmlCMGQyVmxibk1zSUdWaFkyZ2dhWFJsYlNCallXNGdZbVVnWVNCMGQyVmxiaUJ2Y2lCa1pXWnBibWwwYVc5dUlHOWlhanBjYmx4dUlDQWdJQ0FnSUNCYlhHNGdJQ0FnSUNBZ0lDQWdJQ0J1WlhjZ1ZIZGxaVzRvS1N4Y2JpQWdJQ0FnSUNBZ0lDQWdJSE4wWVdkblpYSW9LU3hjYmlBZ0lDQWdJQ0FnSUNBZ0lIUnBiV1ZzYVc1bEtDa3NYRzRnSUNBZ0lDQWdJQ0FnSUNCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2RIZGxaVzQ2SUc1bGR5QlVkMlZsYmlncExGeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lHRjBPaUF4TURBc1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2IyWm1jMlYwT2lCY0lpczlNVEF3WENKY2JpQWdJQ0FnSUNBZ0lDQWdJSDFjYmlBZ0lDQWdJQ0FnWFZ4dUtpOWNibU52Ym5OMElHRnVZV3g1ZW1VZ1BTQW9aR1ZtY3lrZ1BUNGdlMXh1SUNBZ0lHTnZibk4wSUhScGJXVnNhVzVsSUQwZ1cxMDdYRzRnSUNBZ1kyOXVjM1FnYm5WdFJHVm1jeUE5SUdSbFpuTXViR1Z1WjNSb08xeHVJQ0FnSUd4bGRDQmpkWEp5Wlc1MFVHeGhlV2hsWVdRZ1BTQXdPMXh1WEc0Z0lDQWdabTl5SUNoc1pYUWdhU0E5SURBN0lHa2dQQ0J1ZFcxRVpXWnpPeUJwS3lzcElIdGNiaUFnSUNBZ0lDQWdZMjl1YzNRZ1pHVm1JRDBnWkdWbWMxdHBYVHRjYmlBZ0lDQWdJQ0FnWTI5dWMzUWdaR1ZtU1hOUFltb2dQU0JrWldZdWRIZGxaVzRnUHlCMGNuVmxJRG9nWm1Gc2MyVTdYRzRnSUNBZ0lDQWdJR052Ym5OMElIUjNaV1Z1SUQwZ0tHUmxaa2x6VDJKcUtTQS9JR1JsWmk1MGQyVmxiaUE2SUdSbFpqdGNibHh1SUNBZ0lDQWdJQ0JqZFhKeVpXNTBVR3hoZVdobFlXUWdLejBnS0Noa1pXWkpjMDlpYWlBbUppQmtaV1l1YjJabWMyVjBLU0EvWEc0Z0lDQWdJQ0FnSUNBZ0lDQmtaV1l1WVhRZ2ZId2djbVZzWVhScGRtVldZV3gxWlNoamRYSnlaVzUwVUd4aGVXaGxZV1FzSUdSbFppNXZabVp6WlhRcElEb2dNQ2s3WEc1Y2JpQWdJQ0FnSUNBZ2JHVjBJR1IxY21GMGFXOXVJRDBnTUR0Y2JpQWdJQ0FnSUNBZ1ptOXlJQ2hzWlhRZ2EyVjVJR2x1SUhSM1pXVnVMblpoYkhWbGN5a2dlMXh1SUNBZ0lDQWdJQ0FnSUNBZ2FXWWdLSFIzWldWdUxuWmhiSFZsY3k1b1lYTlBkMjVRY205d1pYSjBlU2hyWlhrcEtTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdZMjl1YzNRZ2RtRnNkV1VnUFNCMGQyVmxiaTUyWVd4MVpYTmJhMlY1WFR0Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCa2RYSmhkR2x2YmlBOUlFMWhkR2d1YldGNEtHUjFjbUYwYVc5dUxDQjJZV3gxWlM1a2RYSmhkR2x2YmlrN1hHNGdJQ0FnSUNBZ0lDQWdJQ0I5WEc0Z0lDQWdJQ0FnSUgxY2JseHVJQ0FnSUNBZ0lDQjBhVzFsYkdsdVpTNXdkWE5vS0h0Y2JpQWdJQ0FnSUNBZ0lDQWdJR1p5YjIwNklHTjFjbkpsYm5SUWJHRjVhR1ZoWkN4Y2JpQWdJQ0FnSUNBZ0lDQWdJR1IxY21GMGFXOXVPaUJrZFhKaGRHbHZiaXhjYmlBZ0lDQWdJQ0FnSUNBZ0lHWnBjbVU2SUNoMGFXMWxLU0E5UGlCMGQyVmxiaTV6WldWclZHbHRaU2gwYVcxbEtWeHVJQ0FnSUNBZ0lDQjlLVHRjYmx4dUlDQWdJQ0FnSUNCamRYSnlaVzUwVUd4aGVXaGxZV1FnS3owZ2RIZGxaVzR1WkhWeVlYUnBiMjQ3WEc0Z0lDQWdmVnh1WEc0Z0lDQWdjbVYwZFhKdUlIc2dkRzkwWVd4VWFXMWxPaUJqZFhKeVpXNTBVR3hoZVdobFlXUXNJSFJwYldWc2FXNWxJSDA3WEc1OU8xeHVYRzVqYjI1emRDQnpaWFJVZDJWbGJuTWdQU0FvZXlCbGJHRndjMlZrTENCMGFXMWxiR2x1WlN3Z2RHbHRaV3hwYm1WTVpXNW5kR2dnZlNrZ1BUNGdlMXh1SUNBZ0lHWnZjaUFvYkdWMElHa2dQU0F3T3lCcElEd2dkR2x0Wld4cGJtVk1aVzVuZEdnN0lHa3JLeWtnZTF4dUlDQWdJQ0FnSUNCamIyNXpkQ0IwZDJWbGJpQTlJSFJwYldWc2FXNWxXMmxkTzF4dUlDQWdJQ0FnSUNCamIyNXpkQ0IwZDJWbGJsUnBiV1VnUFNCbGJHRndjMlZrSUMwZ2RIZGxaVzR1Wm5KdmJUdGNibHh1SUNBZ0lDQWdJQ0JwWmlBb2RIZGxaVzVVYVcxbElENGdNQ0FtSmlCMGQyVmxibFJwYldVZ1BDQjBkMlZsYmk1a2RYSmhkR2x2YmlrZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnZEhkbFpXNHVabWx5WlNoMGQyVmxibFJwYldVcE8xeHVJQ0FnSUNBZ0lDQjlYRzRnSUNBZ2ZWeHVmVHRjYmx4dVpYaHdiM0owSUdSbFptRjFiSFFnWm5WdVkzUnBiMjRnZEdsdFpXeHBibVVvWkdWbUxDQndjbTl3Y3lBOUlIdDlLU0I3WEc0Z0lDQWdZMjl1YzNRZ2V5QjBiM1JoYkZScGJXVXNJSFJwYldWc2FXNWxJSDBnUFNCaGJtRnNlWHBsS0dSbFppazdYRzVjYmlBZ0lDQnlaWFIxY200Z2JtVjNJRlIzWldWdUtIdGNiaUFnSUNBZ0lDQWdMaTR1Y0hKdmNITXNYRzRnSUNBZ0lDQWdJR1IxY21GMGFXOXVPaUIwYjNSaGJGUnBiV1VzWEc0Z0lDQWdJQ0FnSUdWaGMyVTZJR1ZoYzJsdVp5NXNhVzVsWVhJc1hHNGdJQ0FnSUNBZ0lIWmhiSFZsY3pvZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnY0RvZ01WeHVJQ0FnSUNBZ0lDQjlMRnh1SUNBZ0lDQWdJQ0IwYVcxbGJHbHVaVG9nZEdsdFpXeHBibVVzWEc0Z0lDQWdJQ0FnSUhScGJXVnNhVzVsVEdWdVozUm9PaUIwYVcxbGJHbHVaUzVzWlc1bmRHZ3NYRzRnSUNBZ0lDQWdJRzl1VW1WdVpHVnlPaUJ6WlhSVWQyVmxibk5jYmlBZ0lDQjlLVHRjYm4waVhYMD1cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2luYy90aW1lbGluZS5qc1xuICoqIG1vZHVsZSBpZCA9IDExXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuLypcbiAgICAjIEFkYXB0ZXIgY2xhc3NcbiAgICAjIyBQcm92aWRlcyBhIGdldHRlci9zZXR0ZXIgd3JhcHBlciBhbmQgcHJvcGVydHkgY2FjaGUgZm9yIGRpZmZlcmVudCBlbGVtZW50IHR5cGVzXG5cbiAgICBPdmVycmlkZSBgZ2V0dGVyYCBhbmQgYHNldHRlcmAgdG8gcmVpbXBsZW1lbnQgdGhlIGludGVyZmFjZSBmb3IgbmV3IGVsZW1lbnQgdHlwZXMuXG5cbiAgICBTZXQgYEV4dGVuZGVkLnByb3RvdHlwZS5zdGF0ZU1hcGAgYXMgYW4gb2JqZWN0IGtleS92YWx1ZSBtYXAgdG8gdHJhbnNsYXRlIGluY29taW5nIGtleXMgdG9cbiAgICBBUEktc3BlY2lmaWMga2V5cy4gRm9yIGluc3RhbmNlLCB7IHg6ICd0cmFuc2xhdGVYJyB9LiBcblxuICAgIFNldCBgRXh0ZW5kZWQucHJvdG90eXBlLnZhbHVlVHlwZU1hcGAgYXMgYW4gb2JqZWN0IGtleS92YWx1ZSBtYXAgdG8gcmV0dXJuIGEgdmFsdWUgdHlwZSB3aXRoXG4gICAgYGdldFZhbHVlVHlwZShrZXkpYCAoa2V5IHdpbGwgYmUgbWFwcGVkIGFjY29yZGluZyB0byBgc3RhdGVNYXBgKVxuKi9cblxudmFyIEFkYXB0ZXIgPSAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIEFkYXB0ZXIocHJvcHMpIHtcbiAgICAgICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIEFkYXB0ZXIpO1xuXG4gICAgICAgIHRoaXMuZWxlbWVudCA9IHByb3BzLmVsZW1lbnQ7XG4gICAgICAgIHRoaXMuY2FjaGUgPSB7fTtcblxuICAgICAgICBpZiAocHJvcHMuZ2V0dGVyKSB7XG4gICAgICAgICAgICB0aGlzLmdldHRlciA9IHByb3BzLmdldHRlcjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChwcm9wcy5zZXR0ZXIpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0dGVyID0gcHJvcHMuc2V0dGVyO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHByb3BzLnN0YXRlTWFwKSB7XG4gICAgICAgICAgICB0aGlzLnN0YXRlTWFwID0gcHJvcHMuc3RhdGVNYXA7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAocHJvcHMudmFsdWVUeXBlTWFwKSB7XG4gICAgICAgICAgICB0aGlzLnZhbHVlVHlwZU1hcCA9IHByb3BzLnZhbHVlVHlwZU1hcDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qXG4gICAgICAgIEdldCBlbGVtZW50IHByb3BlcnR5XG4gICAgICAgICBAcGFyYW0gW3N0cmluZ106IEtleSB0byByZWFkXG4gICAgICAgIEBwYXJhbSBbYm9vbGVhbl06IElmIGB0cnVlYCwgd2lsbCBvdmVycmlkZSBjYWNoZWQgcHJvcGVydHlcbiAgICAqL1xuXG4gICAgQWRhcHRlci5wcm90b3R5cGUuZ2V0ID0gZnVuY3Rpb24gZ2V0KGtleSwgcmVmcmVzaCkge1xuICAgICAgICB2YXIgbWFwcGVkS2V5ID0gdGhpcy5tYXBTdGF0ZUtleShrZXkpO1xuXG4gICAgICAgIGlmIChyZWZyZXNoIHx8ICF0aGlzLmNhY2hlLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmNhY2hlW2tleV0gPSB0aGlzLmdldHRlcihtYXBwZWRLZXkpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY2FjaGVba2V5XTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICAvKlxuICAgICAgICBTZXQgZWxlbWVudCBwcm9wZXJ0aWVzXG4gICAgICAgICBAcGFyYW0gW29iamVjdF06IEtleS92YWx1ZSBwcm9wZXJ0aWVzIHRvIHNldFxuICAgICovXG5cbiAgICBBZGFwdGVyLnByb3RvdHlwZS5zZXQgPSBmdW5jdGlvbiBzZXQocHJvcHMpIHtcbiAgICAgICAgdmFyIHRyYW5zbGF0ZWRQcm9wcyA9IHt9O1xuXG4gICAgICAgIC8vIFRyYW5zbGF0ZSBwcm9wc1xuICAgICAgICBmb3IgKHZhciBrZXkgaW4gcHJvcHMpIHtcbiAgICAgICAgICAgIGlmIChwcm9wcy5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgICAgICAgdmFyIG1hcHBlZEtleSA9IHRoaXMubWFwU3RhdGVLZXkoa2V5KTtcbiAgICAgICAgICAgICAgICB0aGlzLmNhY2hlW2tleV0gPSB0cmFuc2xhdGVkUHJvcHNbbWFwcGVkS2V5XSA9IHByb3BzW2tleV07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcy5zZXR0ZXIodHJhbnNsYXRlZFByb3BzKTtcbiAgICB9O1xuXG4gICAgLypcbiAgICAgICAgT3ZlcnJpZGFibGUgZWxlbWVudCBnZXR0ZXIgLSBkZWZhdWx0IGZvciBwbGFpbiBvYmplY3QgXG4gICAgKi9cblxuICAgIEFkYXB0ZXIucHJvdG90eXBlLmdldHRlciA9IGZ1bmN0aW9uIGdldHRlcihrZXkpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZWxlbWVudFtrZXldO1xuICAgIH07XG5cbiAgICAvKlxuICAgICAgICBPdmVycmlkYWJsZSBlbGVtZW50IHNldHRlciAtIGRlZmF1bHQgZm9yIHBsYWluIG9iamVjdFxuICAgICovXG5cbiAgICBBZGFwdGVyLnByb3RvdHlwZS5zZXR0ZXIgPSBmdW5jdGlvbiBzZXR0ZXIocHJvcHMpIHtcbiAgICAgICAgZm9yICh2YXIga2V5IGluIHByb3BzKSB7XG4gICAgICAgICAgICBpZiAocHJvcHMuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgICAgICAgIHRoaXMuZWxlbWVudFtrZXldID0gcHJvcHNba2V5XTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG5cbiAgICAvKlxuICAgICAgICBNYXAgc3RhdGUga2V5IGFzIHBlciBgc3RhdGVNYXBgLCBpZiBwcmVzZW50XG4gICAgICAgICBAcGFyYW0gW3N0cmluZ106IEtleSB0byBtYXBcbiAgICAgICAgQHJldHVybiBbc3RyaW5nXTogTWFwcGVkIGtleSwgb3Igb3JpZ2luYWwga2V5IGlmIG5vbmUgZm91bmRcbiAgICAqL1xuXG4gICAgQWRhcHRlci5wcm90b3R5cGUubWFwU3RhdGVLZXkgPSBmdW5jdGlvbiBtYXBTdGF0ZUtleShrZXkpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc3RhdGVNYXAgPyB0aGlzLnN0YXRlTWFwW2tleV0gfHwga2V5IDoga2V5O1xuICAgIH07XG5cbiAgICAvKlxuICAgICAgICBHZXQgdmFsdWVUeXBlIG9mIHByb3ZpZGVkIGtleVxuICAgICAgICAgQHBhcmFtIFtzdHJpbmddOiBOYW1lIG9mIHByb3BlcnR5IHRvIG1hcFxuICAgICAgICBAcmV0dXJuIFt2YWx1ZVR5cGVdOiBWYWx1ZSB0eXBlIG9mIHByb3BlcnR5XG4gICAgKi9cblxuICAgIEFkYXB0ZXIucHJvdG90eXBlLmdldFZhbHVlVHlwZSA9IGZ1bmN0aW9uIGdldFZhbHVlVHlwZShrZXkpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudmFsdWVUeXBlTWFwID8gdGhpcy52YWx1ZVR5cGVNYXBbdGhpcy5tYXBTdGF0ZUtleShrZXkpXSA6IGZhbHNlO1xuICAgIH07XG5cbiAgICByZXR1cm4gQWRhcHRlcjtcbn0pKCk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uIChwcm9wcykge1xuICAgIHJldHVybiBuZXcgQWRhcHRlcihwcm9wcyk7XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluTnlZeTloWkdGd2RHVnlMMkZrWVhCMFpYSXVhbk1pWFN3aWJtRnRaWE1pT2x0ZExDSnRZWEJ3YVc1bmN5STZJanM3T3pzN096czdPenM3T3pzN096czdPenRKUVZsTkxFOUJRVTg3UVVGRFZDeGhRVVJGTEU5QlFVOHNRMEZEUnl4TFFVRkxMRVZCUVVVN09FSkJSR3BDTEU5QlFVODdPMEZCUlV3c1dVRkJTU3hEUVVGRExFOUJRVThzUjBGQlJ5eExRVUZMTEVOQlFVTXNUMEZCVHl4RFFVRkRPMEZCUXpkQ0xGbEJRVWtzUTBGQlF5eExRVUZMTEVkQlFVY3NSVUZCUlN4RFFVRkRPenRCUVVWb1FpeFpRVUZKTEV0QlFVc3NRMEZCUXl4TlFVRk5MRVZCUVVVN1FVRkRaQ3huUWtGQlNTeERRVUZETEUxQlFVMHNSMEZCUnl4TFFVRkxMRU5CUVVNc1RVRkJUU3hEUVVGRE8xTkJRemxDT3p0QlFVVkVMRmxCUVVrc1MwRkJTeXhEUVVGRExFMUJRVTBzUlVGQlJUdEJRVU5rTEdkQ1FVRkpMRU5CUVVNc1RVRkJUU3hIUVVGSExFdEJRVXNzUTBGQlF5eE5RVUZOTEVOQlFVTTdVMEZET1VJN08wRkJSVVFzV1VGQlNTeExRVUZMTEVOQlFVTXNVVUZCVVN4RlFVRkZPMEZCUTJoQ0xHZENRVUZKTEVOQlFVTXNVVUZCVVN4SFFVRkhMRXRCUVVzc1EwRkJReXhSUVVGUkxFTkJRVU03VTBGRGJFTTdPMEZCUlVRc1dVRkJTU3hMUVVGTExFTkJRVU1zV1VGQldTeEZRVUZGTzBGQlEzQkNMR2RDUVVGSkxFTkJRVU1zV1VGQldTeEhRVUZITEV0QlFVc3NRMEZCUXl4WlFVRlpMRU5CUVVNN1UwRkRNVU03UzBGRFNqczdPenM3T3p0QlFVRkJPMEZCY0VKRExGZEJRVThzVjBFMFFsUXNSMEZCUnl4blFrRkJReXhIUVVGSExFVkJRVVVzVDBGQlR5eEZRVUZGTzBGQlEyUXNXVUZCVFN4VFFVRlRMRWRCUVVjc1NVRkJTU3hEUVVGRExGZEJRVmNzUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXpzN1FVRkZlRU1zV1VGQlNTeFBRVUZQTEVsQlFVa3NRMEZCUXl4SlFVRkpMRU5CUVVNc1MwRkJTeXhEUVVGRExHTkJRV01zUTBGQlF5eEhRVUZITEVOQlFVTXNSVUZCUlR0QlFVTTFReXh0UWtGQlR5eEpRVUZKTEVOQlFVTXNTMEZCU3l4RFFVRkRMRWRCUVVjc1EwRkJReXhIUVVGSExFbEJRVWtzUTBGQlF5eE5RVUZOTEVOQlFVTXNVMEZCVXl4RFFVRkRMRU5CUVVNN1UwRkRia1FzVFVGQlRUdEJRVU5JTEcxQ1FVRlBMRWxCUVVrc1EwRkJReXhMUVVGTExFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTTdVMEZETVVJN1MwRkRTanM3T3pzN096dEJRWEJEUXl4WFFVRlBMRmRCTWtOVUxFZEJRVWNzWjBKQlFVTXNTMEZCU3l4RlFVRkZPMEZCUTFBc1dVRkJUU3hsUVVGbExFZEJRVWNzUlVGQlJUczdPMEZCUVVNc1FVRkhNMElzWVVGQlN5eEpRVUZKTEVkQlFVY3NTVUZCU1N4TFFVRkxMRVZCUVVVN1FVRkRia0lzWjBKQlFVa3NTMEZCU3l4RFFVRkRMR05CUVdNc1EwRkJReXhIUVVGSExFTkJRVU1zUlVGQlJUdEJRVU16UWl4dlFrRkJUU3hUUVVGVExFZEJRVWNzU1VGQlNTeERRVUZETEZkQlFWY3NRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJRenRCUVVONFF5eHZRa0ZCU1N4RFFVRkRMRXRCUVVzc1EwRkJReXhIUVVGSExFTkJRVU1zUjBGQlJ5eGxRVUZsTEVOQlFVTXNVMEZCVXl4RFFVRkRMRWRCUVVjc1MwRkJTeXhEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETzJGQlF6ZEVPMU5CUTBvN08wRkJSVVFzWlVGQlR5eEpRVUZKTEVOQlFVTXNUVUZCVFN4RFFVRkRMR1ZCUVdVc1EwRkJReXhEUVVGRE8wdEJRM1pET3pzN096czdRVUYyUkVNc1YwRkJUeXhYUVRSRVZDeE5RVUZOTEcxQ1FVRkRMRWRCUVVjc1JVRkJSVHRCUVVOU0xHVkJRVThzU1VGQlNTeERRVUZETEU5QlFVOHNRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJRenRMUVVNMVFqczdPenM3TzBGQk9VUkRMRmRCUVU4c1YwRnRSVlFzVFVGQlRTeHRRa0ZCUXl4TFFVRkxMRVZCUVVVN1FVRkRWaXhoUVVGTExFbEJRVWtzUjBGQlJ5eEpRVUZKTEV0QlFVc3NSVUZCUlR0QlFVTnVRaXhuUWtGQlNTeExRVUZMTEVOQlFVTXNZMEZCWXl4RFFVRkRMRWRCUVVjc1EwRkJReXhGUVVGRk8wRkJRek5DTEc5Q1FVRkpMRU5CUVVNc1QwRkJUeXhEUVVGRExFZEJRVWNzUTBGQlF5eEhRVUZITEV0QlFVc3NRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJRenRoUVVOc1F6dFRRVU5LTzB0QlEwbzdPenM3T3pzN08wRkJla1ZETEZkQlFVOHNWMEZwUmxRc1YwRkJWeXgzUWtGQlF5eEhRVUZITEVWQlFVVTdRVUZEWWl4bFFVRlBMRUZCUVVNc1NVRkJTU3hEUVVGRExGRkJRVkVzUjBGQlNTeEpRVUZKTEVOQlFVTXNVVUZCVVN4RFFVRkRMRWRCUVVjc1EwRkJReXhKUVVGSkxFZEJRVWNzUjBGQlJ5eEhRVUZITEVOQlFVTTdTMEZETlVRN096czdPenM3TzBGQmJrWkRMRmRCUVU4c1YwRXlSbFFzV1VGQldTeDVRa0ZCUXl4SFFVRkhMRVZCUVVVN1FVRkRaQ3hsUVVGUExFRkJRVU1zU1VGQlNTeERRVUZETEZsQlFWa3NSMEZCU1N4SlFVRkpMRU5CUVVNc1dVRkJXU3hEUVVGRExFbEJRVWtzUTBGQlF5eFhRVUZYTEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNc1IwRkJSeXhMUVVGTExFTkJRVU03UzBGRGFrWTdPMWRCTjBaRExFOUJRVTg3T3p0clFrRm5SMFVzVlVGQlF5eExRVUZMTzFkQlFVc3NTVUZCU1N4UFFVRlBMRU5CUVVNc1MwRkJTeXhEUVVGRE8wTkJRVUVpTENKbWFXeGxJam9pWVdSaGNIUmxjaTVxY3lJc0luTnZkWEpqWlZKdmIzUWlPaUl2VlhObGNuTXZUV0YwZEZCbGNuSjVMMU5wZEdWekwzQnZjRzF2ZEdsdmJpSXNJbk52ZFhKalpYTkRiMjUwWlc1MElqcGJJaThxWEc0Z0lDQWdJeUJCWkdGd2RHVnlJR05zWVhOelhHNGdJQ0FnSXlNZ1VISnZkbWxrWlhNZ1lTQm5aWFIwWlhJdmMyVjBkR1Z5SUhkeVlYQndaWElnWVc1a0lIQnliM0JsY25SNUlHTmhZMmhsSUdadmNpQmthV1ptWlhKbGJuUWdaV3hsYldWdWRDQjBlWEJsYzF4dVhHNGdJQ0FnVDNabGNuSnBaR1VnWUdkbGRIUmxjbUFnWVc1a0lHQnpaWFIwWlhKZ0lIUnZJSEpsYVcxd2JHVnRaVzUwSUhSb1pTQnBiblJsY21aaFkyVWdabTl5SUc1bGR5QmxiR1Z0Wlc1MElIUjVjR1Z6TGx4dVhHNGdJQ0FnVTJWMElHQkZlSFJsYm1SbFpDNXdjbTkwYjNSNWNHVXVjM1JoZEdWTllYQmdJR0Z6SUdGdUlHOWlhbVZqZENCclpYa3ZkbUZzZFdVZ2JXRndJSFJ2SUhSeVlXNXpiR0YwWlNCcGJtTnZiV2x1WnlCclpYbHpJSFJ2WEc0Z0lDQWdRVkJKTFhOd1pXTnBabWxqSUd0bGVYTXVJRVp2Y2lCcGJuTjBZVzVqWlN3Z2V5QjRPaUFuZEhKaGJuTnNZWFJsV0NjZ2ZTNGdYRzVjYmlBZ0lDQlRaWFFnWUVWNGRHVnVaR1ZrTG5CeWIzUnZkSGx3WlM1MllXeDFaVlI1Y0dWTllYQmdJR0Z6SUdGdUlHOWlhbVZqZENCclpYa3ZkbUZzZFdVZ2JXRndJSFJ2SUhKbGRIVnliaUJoSUhaaGJIVmxJSFI1Y0dVZ2QybDBhRnh1SUNBZ0lHQm5aWFJXWVd4MVpWUjVjR1VvYTJWNUtXQWdLR3RsZVNCM2FXeHNJR0psSUcxaGNIQmxaQ0JoWTJOdmNtUnBibWNnZEc4Z1lITjBZWFJsVFdGd1lDbGNiaW92WEc1amJHRnpjeUJCWkdGd2RHVnlJSHRjYmlBZ0lDQmpiMjV6ZEhKMVkzUnZjaWh3Y205d2N5a2dlMXh1SUNBZ0lDQWdJQ0IwYUdsekxtVnNaVzFsYm5RZ1BTQndjbTl3Y3k1bGJHVnRaVzUwTzF4dUlDQWdJQ0FnSUNCMGFHbHpMbU5oWTJobElEMGdlMzA3WEc1Y2JpQWdJQ0FnSUNBZ2FXWWdLSEJ5YjNCekxtZGxkSFJsY2lrZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnZEdocGN5NW5aWFIwWlhJZ1BTQndjbTl3Y3k1blpYUjBaWEk3WEc0Z0lDQWdJQ0FnSUgxY2JseHVJQ0FnSUNBZ0lDQnBaaUFvY0hKdmNITXVjMlYwZEdWeUtTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNCMGFHbHpMbk5sZEhSbGNpQTlJSEJ5YjNCekxuTmxkSFJsY2p0Y2JpQWdJQ0FnSUNBZ2ZWeHVYRzRnSUNBZ0lDQWdJR2xtSUNod2NtOXdjeTV6ZEdGMFpVMWhjQ2tnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdkR2hwY3k1emRHRjBaVTFoY0NBOUlIQnliM0J6TG5OMFlYUmxUV0Z3TzF4dUlDQWdJQ0FnSUNCOVhHNWNiaUFnSUNBZ0lDQWdhV1lnS0hCeWIzQnpMblpoYkhWbFZIbHdaVTFoY0NrZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnZEdocGN5NTJZV3gxWlZSNWNHVk5ZWEFnUFNCd2NtOXdjeTUyWVd4MVpWUjVjR1ZOWVhBN1hHNGdJQ0FnSUNBZ0lIMWNiaUFnSUNCOVhHNWNiaUFnSUNBdktseHVJQ0FnSUNBZ0lDQkhaWFFnWld4bGJXVnVkQ0J3Y205d1pYSjBlVnh1WEc0Z0lDQWdJQ0FnSUVCd1lYSmhiU0JiYzNSeWFXNW5YVG9nUzJWNUlIUnZJSEpsWVdSY2JpQWdJQ0FnSUNBZ1FIQmhjbUZ0SUZ0aWIyOXNaV0Z1WFRvZ1NXWWdZSFJ5ZFdWZ0xDQjNhV3hzSUc5MlpYSnlhV1JsSUdOaFkyaGxaQ0J3Y205d1pYSjBlVnh1SUNBZ0lDb3ZYRzRnSUNBZ1oyVjBLR3RsZVN3Z2NtVm1jbVZ6YUNrZ2UxeHVJQ0FnSUNBZ0lDQmpiMjV6ZENCdFlYQndaV1JMWlhrZ1BTQjBhR2x6TG0xaGNGTjBZWFJsUzJWNUtHdGxlU2s3WEc1Y2JpQWdJQ0FnSUNBZ2FXWWdLSEpsWm5KbGMyZ2dmSHdnSVhSb2FYTXVZMkZqYUdVdWFHRnpUM2R1VUhKdmNHVnlkSGtvYTJWNUtTa2dlMXh1SUNBZ0lDQWdJQ0FnSUNBZ2NtVjBkWEp1SUhSb2FYTXVZMkZqYUdWYmEyVjVYU0E5SUhSb2FYTXVaMlYwZEdWeUtHMWhjSEJsWkV0bGVTazdYRzRnSUNBZ0lDQWdJSDBnWld4elpTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNCeVpYUjFjbTRnZEdocGN5NWpZV05vWlZ0clpYbGRPMXh1SUNBZ0lDQWdJQ0I5WEc0Z0lDQWdmVnh1WEc0Z0lDQWdMeXBjYmlBZ0lDQWdJQ0FnVTJWMElHVnNaVzFsYm5RZ2NISnZjR1Z5ZEdsbGMxeHVYRzRnSUNBZ0lDQWdJRUJ3WVhKaGJTQmJiMkpxWldOMFhUb2dTMlY1TDNaaGJIVmxJSEJ5YjNCbGNuUnBaWE1nZEc4Z2MyVjBYRzRnSUNBZ0tpOWNiaUFnSUNCelpYUW9jSEp2Y0hNcElIdGNiaUFnSUNBZ0lDQWdZMjl1YzNRZ2RISmhibk5zWVhSbFpGQnliM0J6SUQwZ2UzMDdYRzVjYmlBZ0lDQWdJQ0FnTHk4Z1ZISmhibk5zWVhSbElIQnliM0J6WEc0Z0lDQWdJQ0FnSUdadmNpQW9iR1YwSUd0bGVTQnBiaUJ3Y205d2N5a2dlMXh1SUNBZ0lDQWdJQ0FnSUNBZ2FXWWdLSEJ5YjNCekxtaGhjMDkzYmxCeWIzQmxjblI1S0d0bGVTa3BJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0JqYjI1emRDQnRZWEJ3WldSTFpYa2dQU0IwYUdsekxtMWhjRk4wWVhSbFMyVjVLR3RsZVNrN1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2RHaHBjeTVqWVdOb1pWdHJaWGxkSUQwZ2RISmhibk5zWVhSbFpGQnliM0J6VzIxaGNIQmxaRXRsZVYwZ1BTQndjbTl3YzF0clpYbGRPMXh1SUNBZ0lDQWdJQ0FnSUNBZ2ZWeHVJQ0FnSUNBZ0lDQjlYRzVjYmlBZ0lDQWdJQ0FnY21WMGRYSnVJSFJvYVhNdWMyVjBkR1Z5S0hSeVlXNXpiR0YwWldSUWNtOXdjeWs3WEc0Z0lDQWdmVnh1WEc0Z0lDQWdMeXBjYmlBZ0lDQWdJQ0FnVDNabGNuSnBaR0ZpYkdVZ1pXeGxiV1Z1ZENCblpYUjBaWElnTFNCa1pXWmhkV3gwSUdadmNpQndiR0ZwYmlCdlltcGxZM1FnWEc0Z0lDQWdLaTljYmlBZ0lDQm5aWFIwWlhJb2EyVjVLU0I3WEc0Z0lDQWdJQ0FnSUhKbGRIVnliaUIwYUdsekxtVnNaVzFsYm5SYmEyVjVYVHRjYmlBZ0lDQjlYRzVjYmlBZ0lDQXZLbHh1SUNBZ0lDQWdJQ0JQZG1WeWNtbGtZV0pzWlNCbGJHVnRaVzUwSUhObGRIUmxjaUF0SUdSbFptRjFiSFFnWm05eUlIQnNZV2x1SUc5aWFtVmpkRnh1SUNBZ0lDb3ZYRzRnSUNBZ2MyVjBkR1Z5S0hCeWIzQnpLU0I3WEc0Z0lDQWdJQ0FnSUdadmNpQW9iR1YwSUd0bGVTQnBiaUJ3Y205d2N5a2dlMXh1SUNBZ0lDQWdJQ0FnSUNBZ2FXWWdLSEJ5YjNCekxtaGhjMDkzYmxCeWIzQmxjblI1S0d0bGVTa3BJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0IwYUdsekxtVnNaVzFsYm5SYmEyVjVYU0E5SUhCeWIzQnpXMnRsZVYwN1hHNGdJQ0FnSUNBZ0lDQWdJQ0I5WEc0Z0lDQWdJQ0FnSUgxY2JpQWdJQ0I5WEc1Y2JpQWdJQ0F2S2x4dUlDQWdJQ0FnSUNCTllYQWdjM1JoZEdVZ2EyVjVJR0Z6SUhCbGNpQmdjM1JoZEdWTllYQmdMQ0JwWmlCd2NtVnpaVzUwWEc1Y2JpQWdJQ0FnSUNBZ1FIQmhjbUZ0SUZ0emRISnBibWRkT2lCTFpYa2dkRzhnYldGd1hHNGdJQ0FnSUNBZ0lFQnlaWFIxY200Z1czTjBjbWx1WjEwNklFMWhjSEJsWkNCclpYa3NJRzl5SUc5eWFXZHBibUZzSUd0bGVTQnBaaUJ1YjI1bElHWnZkVzVrWEc0Z0lDQWdLaTljYmlBZ0lDQnRZWEJUZEdGMFpVdGxlU2hyWlhrcElIdGNiaUFnSUNBZ0lDQWdjbVYwZFhKdUlDaDBhR2x6TG5OMFlYUmxUV0Z3S1NBL0lIUm9hWE11YzNSaGRHVk5ZWEJiYTJWNVhTQjhmQ0JyWlhrZ09pQnJaWGs3WEc0Z0lDQWdmVnh1WEc0Z0lDQWdMeXBjYmlBZ0lDQWdJQ0FnUjJWMElIWmhiSFZsVkhsd1pTQnZaaUJ3Y205MmFXUmxaQ0JyWlhsY2JseHVJQ0FnSUNBZ0lDQkFjR0Z5WVcwZ1czTjBjbWx1WjEwNklFNWhiV1VnYjJZZ2NISnZjR1Z5ZEhrZ2RHOGdiV0Z3WEc0Z0lDQWdJQ0FnSUVCeVpYUjFjbTRnVzNaaGJIVmxWSGx3WlYwNklGWmhiSFZsSUhSNWNHVWdiMllnY0hKdmNHVnlkSGxjYmlBZ0lDQXFMMXh1SUNBZ0lHZGxkRlpoYkhWbFZIbHdaU2hyWlhrcElIdGNiaUFnSUNBZ0lDQWdjbVYwZFhKdUlDaDBhR2x6TG5aaGJIVmxWSGx3WlUxaGNDa2dQeUIwYUdsekxuWmhiSFZsVkhsd1pVMWhjRnQwYUdsekxtMWhjRk4wWVhSbFMyVjVLR3RsZVNsZElEb2dabUZzYzJVN1hHNGdJQ0FnZlZ4dWZWeHVYRzVsZUhCdmNuUWdaR1ZtWVhWc2RDQW9jSEp2Y0hNcElEMCtJRzVsZHlCQlpHRndkR1Z5S0hCeWIzQnpLVHNpWFgwPVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvYWRhcHRlci9hZGFwdGVyLmpzXG4gKiogbW9kdWxlIGlkID0gMTNcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHMuZ2V0dGVyID0gZ2V0dGVyO1xuZXhwb3J0cy5zZXR0ZXIgPSBzZXR0ZXI7XG5cbnZhciBfYWRhcHRlciA9IHJlcXVpcmUoJy4vYWRhcHRlcicpO1xuXG52YXIgX2FkYXB0ZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfYWRhcHRlcik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIGdldHRlcihrZXkpIHtcbiAgICByZXR1cm4gdGhpcy5lbGVtZW50LmdldEF0dHJpYnV0ZShrZXkpO1xufVxuXG5mdW5jdGlvbiBzZXR0ZXIocHJvcHMpIHtcbiAgICBmb3IgKHZhciBrZXkgaW4gcHJvcHMpIHtcbiAgICAgICAgaWYgKHByb3BzLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudC5zZXRBdHRyaWJ1dGUoa2V5LCBwcm9wc1trZXldKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gKGVsZW1lbnQpIHtcbiAgICByZXR1cm4gKDAsIF9hZGFwdGVyMi5kZWZhdWx0KSh7IGVsZW1lbnQ6IGVsZW1lbnQsIGdldHRlcjogZ2V0dGVyLCBzZXR0ZXI6IHNldHRlciB9KTtcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5OeVl5OWhaR0Z3ZEdWeUwyRjBkSEl0WVdSaGNIUmxjaTVxY3lKZExDSnVZVzFsY3lJNlcxMHNJbTFoY0hCcGJtZHpJam9pT3pzN1VVRkZaMElzVFVGQlRTeEhRVUZPTEUxQlFVMDdVVUZKVGl4TlFVRk5MRWRCUVU0c1RVRkJUVHM3T3pzN096czdRVUZLWml4VFFVRlRMRTFCUVUwc1EwRkJReXhIUVVGSExFVkJRVVU3UVVGRGVFSXNWMEZCVHl4SlFVRkpMRU5CUVVNc1QwRkJUeXhEUVVGRExGbEJRVmtzUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXp0RFFVTjZRenM3UVVGRlRTeFRRVUZUTEUxQlFVMHNRMEZCUXl4TFFVRkxMRVZCUVVVN1FVRkRNVUlzVTBGQlN5eEpRVUZKTEVkQlFVY3NTVUZCU1N4TFFVRkxMRVZCUVVVN1FVRkRia0lzV1VGQlNTeExRVUZMTEVOQlFVTXNZMEZCWXl4RFFVRkRMRWRCUVVjc1EwRkJReXhGUVVGRk8wRkJRek5DTEdkQ1FVRkpMRU5CUVVNc1QwRkJUeXhEUVVGRExGbEJRVmtzUTBGQlF5eEhRVUZITEVWQlFVVXNTMEZCU3l4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRExFTkJRVU03VTBGRE9VTTdTMEZEU2p0RFFVTktPenRyUWtGRll5eFZRVUZETEU5QlFVODdWMEZCU3l4MVFrRkJZeXhGUVVGRkxFOUJRVThzUlVGQlVDeFBRVUZQTEVWQlFVVXNUVUZCVFN4RlFVRk9MRTFCUVUwc1JVRkJSU3hOUVVGTkxFVkJRVTRzVFVGQlRTeEZRVUZGTEVOQlFVTTdRMEZCUVNJc0ltWnBiR1VpT2lKaGRIUnlMV0ZrWVhCMFpYSXVhbk1pTENKemIzVnlZMlZTYjI5MElqb2lMMVZ6WlhKekwwMWhkSFJRWlhKeWVTOVRhWFJsY3k5d2IzQnRiM1JwYjI0aUxDSnpiM1Z5WTJWelEyOXVkR1Z1ZENJNld5SnBiWEJ2Y25RZ1kzSmxZWFJsUVdSaGNIUmxjaUJtY205dElDY3VMMkZrWVhCMFpYSW5PMXh1WEc1bGVIQnZjblFnWm5WdVkzUnBiMjRnWjJWMGRHVnlLR3RsZVNrZ2UxeHVJQ0FnSUhKbGRIVnliaUIwYUdsekxtVnNaVzFsYm5RdVoyVjBRWFIwY21saWRYUmxLR3RsZVNrN1hHNTlYRzVjYm1WNGNHOXlkQ0JtZFc1amRHbHZiaUJ6WlhSMFpYSW9jSEp2Y0hNcElIdGNiaUFnSUNCbWIzSWdLR3hsZENCclpYa2dhVzRnY0hKdmNITXBJSHRjYmlBZ0lDQWdJQ0FnYVdZZ0tIQnliM0J6TG1oaGMwOTNibEJ5YjNCbGNuUjVLR3RsZVNrcElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUhSb2FYTXVaV3hsYldWdWRDNXpaWFJCZEhSeWFXSjFkR1VvYTJWNUxDQndjbTl3YzF0clpYbGRLVHRjYmlBZ0lDQWdJQ0FnZlZ4dUlDQWdJSDFjYm4xY2JseHVaWGh3YjNKMElHUmxabUYxYkhRZ0tHVnNaVzFsYm5RcElEMCtJR055WldGMFpVRmtZWEIwWlhJb2V5QmxiR1Z0Wlc1MExDQm5aWFIwWlhJc0lITmxkSFJsY2lCOUtUc2lYWDA9XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9hZGFwdGVyL2F0dHItYWRhcHRlci5qc1xuICoqIG1vZHVsZSBpZCA9IDE0XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfc3RhdGVNYXAgPSByZXF1aXJlKCcuL2Nzcy9zdGF0ZS1tYXAnKTtcblxudmFyIF9zdGF0ZU1hcDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9zdGF0ZU1hcCk7XG5cbnZhciBfdmFsdWVUeXBlTWFwID0gcmVxdWlyZSgnLi9jc3MvdmFsdWUtdHlwZS1tYXAnKTtcblxudmFyIF92YWx1ZVR5cGVNYXAyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfdmFsdWVUeXBlTWFwKTtcblxudmFyIF9idWlsZCA9IHJlcXVpcmUoJy4vY3NzL2J1aWxkJyk7XG5cbnZhciBfYnVpbGQyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfYnVpbGQpO1xuXG52YXIgX3ByZWZpeGVyID0gcmVxdWlyZSgnLi9jc3MvcHJlZml4ZXInKTtcblxudmFyIF9wcmVmaXhlcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9wcmVmaXhlcik7XG5cbnZhciBfdHJhbnNmb3JtUHJvcHMgPSByZXF1aXJlKCcuL2Nzcy90cmFuc2Zvcm0tcHJvcHMnKTtcblxudmFyIF90cmFuc2Zvcm1Qcm9wczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF90cmFuc2Zvcm1Qcm9wcyk7XG5cbnZhciBfYWRhcHRlciA9IHJlcXVpcmUoJy4vYWRhcHRlcicpO1xuXG52YXIgX2FkYXB0ZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfYWRhcHRlcik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIGdldHRlcihrZXkpIHtcbiAgICByZXR1cm4gIV90cmFuc2Zvcm1Qcm9wczIuZGVmYXVsdFtrZXldID8gd2luZG93LmdldENvbXB1dGVkU3R5bGUodGhpcy5lbGVtZW50LCBudWxsKVsoMCwgX3ByZWZpeGVyMi5kZWZhdWx0KShrZXkpXSA6IF92YWx1ZVR5cGVNYXAyLmRlZmF1bHRba2V5XS5kZWZhdWx0UHJvcHMuY3VycmVudCB8fCAwO1xufVxuXG5mdW5jdGlvbiBzZXR0ZXIocHJvcHMpIHtcbiAgICB0aGlzLmVsZW1lbnQuc3R5bGUuY3NzVGV4dCArPSAoMCwgX2J1aWxkMi5kZWZhdWx0KShwcm9wcyk7XG59XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uIChlbGVtZW50KSB7XG4gICAgcmV0dXJuICgwLCBfYWRhcHRlcjIuZGVmYXVsdCkoeyBlbGVtZW50OiBlbGVtZW50LCBzdGF0ZU1hcDogX3N0YXRlTWFwMi5kZWZhdWx0LCB2YWx1ZVR5cGVNYXA6IF92YWx1ZVR5cGVNYXAyLmRlZmF1bHQsIGdldHRlcjogZ2V0dGVyLCBzZXR0ZXI6IHNldHRlciB9KTtcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5OeVl5OWhaR0Z3ZEdWeUwyTnpjeTFoWkdGd2RHVnlMbXB6SWwwc0ltNWhiV1Z6SWpwYlhTd2liV0Z3Y0dsdVozTWlPaUk3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3p0QlFVOUJMRk5CUVZNc1RVRkJUU3hEUVVGRkxFZEJRVWNzUlVGQlJUdEJRVU5zUWl4WFFVRlBMRUZCUVVNc1EwRkJReXg1UWtGQlpTeEhRVUZITEVOQlFVTXNSMEZEZUVJc1RVRkJUU3hEUVVGRExHZENRVUZuUWl4RFFVRkRMRWxCUVVrc1EwRkJReXhQUVVGUExFVkJRVVVzU1VGQlNTeERRVUZETEVOQlFVTXNkMEpCUVZNc1IwRkJSeXhEUVVGRExFTkJRVU1zUjBGRE1VUXNkVUpCUVdFc1IwRkJSeXhEUVVGRExFTkJRVU1zV1VGQldTeERRVUZETEU5QlFVOHNTVUZCU1N4RFFVRkRMRU5CUVVNN1EwRkRia1E3TzBGQlJVUXNVMEZCVXl4TlFVRk5MRU5CUVVNc1MwRkJTeXhGUVVGRk8wRkJRMjVDTEZGQlFVa3NRMEZCUXl4UFFVRlBMRU5CUVVNc1MwRkJTeXhEUVVGRExFOUJRVThzU1VGQlNTeHhRa0ZCYjBJc1MwRkJTeXhEUVVGRExFTkJRVU03UTBGRE5VUTdPMnRDUVVWakxGVkJRVU1zVDBGQlR6dFhRVUZMTEhWQ1FVRmpMRVZCUVVVc1QwRkJUeXhGUVVGUUxFOUJRVThzUlVGQlJTeFJRVUZSTEc5Q1FVRkJMRVZCUVVVc1dVRkJXU3gzUWtGQlFTeEZRVUZGTEUxQlFVMHNSVUZCVGl4TlFVRk5MRVZCUVVVc1RVRkJUU3hGUVVGT0xFMUJRVTBzUlVGQlJTeERRVUZETzBOQlFVRWlMQ0ptYVd4bElqb2lZM056TFdGa1lYQjBaWEl1YW5NaUxDSnpiM1Z5WTJWU2IyOTBJam9pTDFWelpYSnpMMDFoZEhSUVpYSnllUzlUYVhSbGN5OXdiM0J0YjNScGIyNGlMQ0p6YjNWeVkyVnpRMjl1ZEdWdWRDSTZXeUpwYlhCdmNuUWdjM1JoZEdWTllYQWdabkp2YlNBbkxpOWpjM012YzNSaGRHVXRiV0Z3Snp0Y2JtbHRjRzl5ZENCMllXeDFaVlI1Y0dWTllYQWdabkp2YlNBbkxpOWpjM012ZG1Gc2RXVXRkSGx3WlMxdFlYQW5PMXh1YVcxd2IzSjBJR0oxYVd4a1VISnZjR1Z5ZEhsVGRISnBibWNnWm5KdmJTQW5MaTlqYzNNdlluVnBiR1FuTzF4dWFXMXdiM0owSUhCeVpXWnBlR1Z5SUdaeWIyMGdKeTR2WTNOekwzQnlaV1pwZUdWeUp6dGNibWx0Y0c5eWRDQjBjbUZ1YzJadmNtMVFjbTl3Y3lCbWNtOXRJQ2N1TDJOemN5OTBjbUZ1YzJadmNtMHRjSEp2Y0hNbk8xeHVhVzF3YjNKMElHTnlaV0YwWlVGa1lYQjBaWElnWm5KdmJTQW5MaTloWkdGd2RHVnlKenRjYmx4dVpuVnVZM1JwYjI0Z1oyVjBkR1Z5SUNoclpYa3BJSHRjYmlBZ0lDQnlaWFIxY200Z0tDRjBjbUZ1YzJadmNtMVFjbTl3YzF0clpYbGRLU0EvWEc0Z0lDQWdJQ0FnSUhkcGJtUnZkeTVuWlhSRGIyMXdkWFJsWkZOMGVXeGxLSFJvYVhNdVpXeGxiV1Z1ZEN3Z2JuVnNiQ2xiY0hKbFptbDRaWElvYTJWNUtWMGdPbHh1SUNBZ0lDQWdJQ0IyWVd4MVpWUjVjR1ZOWVhCYmEyVjVYUzVrWldaaGRXeDBVSEp2Y0hNdVkzVnljbVZ1ZENCOGZDQXdPMXh1ZlZ4dVhHNW1kVzVqZEdsdmJpQnpaWFIwWlhJb2NISnZjSE1wSUh0Y2JpQWdJQ0IwYUdsekxtVnNaVzFsYm5RdWMzUjViR1V1WTNOelZHVjRkQ0FyUFNCaWRXbHNaRkJ5YjNCbGNuUjVVM1J5YVc1bktIQnliM0J6S1R0Y2JuMWNibHh1Wlhod2IzSjBJR1JsWm1GMWJIUWdLR1ZzWlcxbGJuUXBJRDArSUdOeVpXRjBaVUZrWVhCMFpYSW9leUJsYkdWdFpXNTBMQ0J6ZEdGMFpVMWhjQ3dnZG1Gc2RXVlVlWEJsVFdGd0xDQm5aWFIwWlhJc0lITmxkSFJsY2lCOUtUc2lYWDA9XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9hZGFwdGVyL2Nzcy1hZGFwdGVyLmpzXG4gKiogbW9kdWxlIGlkID0gMTVcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHMuc2V0dGVyID0gc2V0dGVyO1xuXG52YXIgX3N0YXRlTWFwID0gcmVxdWlyZSgnLi9jc3Mvc3RhdGUtbWFwJyk7XG5cbnZhciBfc3RhdGVNYXAyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfc3RhdGVNYXApO1xuXG52YXIgX3ZhbHVlVHlwZU1hcCA9IHJlcXVpcmUoJy4vc3ZnL3ZhbHVlLXR5cGUtbWFwJyk7XG5cbnZhciBfdmFsdWVUeXBlTWFwMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3ZhbHVlVHlwZU1hcCk7XG5cbnZhciBfYnVpbGQgPSByZXF1aXJlKCcuL3N2Zy9idWlsZCcpO1xuXG52YXIgX2J1aWxkMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2J1aWxkKTtcblxudmFyIF9hdHRyQWRhcHRlciA9IHJlcXVpcmUoJy4vYXR0ci1hZGFwdGVyJyk7XG5cbnZhciBfYWRhcHRlciA9IHJlcXVpcmUoJy4vYWRhcHRlcicpO1xuXG52YXIgX2FkYXB0ZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfYWRhcHRlcik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIHNldHRlcihwcm9wcykge1xuICAgICgwLCBfYXR0ckFkYXB0ZXIuc2V0dGVyKSgoMCwgX2J1aWxkMi5kZWZhdWx0KShwcm9wcywgdGhpcy5vcmlnaW4pKTtcbn1cblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gKGVsZW1lbnQpIHtcbiAgICB2YXIgYWRhcHRlciA9ICgwLCBfYWRhcHRlcjIuZGVmYXVsdCkoeyBlbGVtZW50OiBlbGVtZW50LCBzdGF0ZU1hcDogX3N0YXRlTWFwMi5kZWZhdWx0LCB2YWx1ZVR5cGVNYXA6IF92YWx1ZVR5cGVNYXAyLmRlZmF1bHQsIGdldHRlcjogX2F0dHJBZGFwdGVyLmdldHRlciwgc2V0dGVyOiBzZXR0ZXIgfSk7XG4gICAgdmFyIGJCb3ggPSBlbGVtZW50LmdldEJCb3goKTtcbiAgICB2YXIgdHJhbnNmb3JtT3JpZ2luWSA9IDA7XG4gICAgdmFyIHRyYW5zZm9ybU9yaWdpblggPSAwO1xuXG4gICAgYWRhcHRlci5vcmlnaW4gPSB7XG4gICAgICAgIHg6IGJCb3gud2lkdGggKiAodHJhbnNmb3JtT3JpZ2luWCAvIDEwMCkgKyBiQm94LngsXG4gICAgICAgIHk6IGJCb3guaGVpZ2h0ICogKHRyYW5zZm9ybU9yaWdpblkgLyAxMDApICsgYkJveC55XG4gICAgfTtcblxuICAgIHJldHVybiBhZGFwdGVyO1xufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbk55WXk5aFpHRndkR1Z5TDNOMlp5MWhaR0Z3ZEdWeUxtcHpJbDBzSW01aGJXVnpJanBiWFN3aWJXRndjR2x1WjNNaU9pSTdPenRSUVUxblFpeE5RVUZOTEVkQlFVNHNUVUZCVFRzN096czdPenM3T3pzN096czdPenM3T3pzN096dEJRVUZtTEZOQlFWTXNUVUZCVFN4RFFVRkRMRXRCUVVzc1JVRkJSVHRCUVVNeFFpeHhRa0ZLWVN4TlFVRk5MRVZCU1ZJc2NVSkJRVTBzUzBGQlN5eEZRVUZGTEVsQlFVa3NRMEZCUXl4TlFVRk5MRU5CUVVNc1EwRkJReXhEUVVGRE8wTkJRM3BET3p0clFrRkZZeXhWUVVGRExFOUJRVThzUlVGQlN6dEJRVU40UWl4UlFVRk5MRTlCUVU4c1IwRkJSeXgxUWtGQll5eEZRVUZGTEU5QlFVOHNSVUZCVUN4UFFVRlBMRVZCUVVVc1VVRkJVU3h2UWtGQlFTeEZRVUZGTEZsQlFWa3NkMEpCUVVFc1JVRkJSU3hOUVVGTkxHVkJVbXhGTEUxQlFVMHNRVUZSTkVRc1JVRkJSU3hOUVVGTkxFVkJRVTRzVFVGQlRTeEZRVUZGTEVOQlFVTXNRMEZCUXp0QlFVTnVSaXhSUVVGTkxFbEJRVWtzUjBGQlJ5eFBRVUZQTEVOQlFVTXNUMEZCVHl4RlFVRkZMRU5CUVVNN1FVRkRMMElzVVVGQlRTeG5Ra0ZCWjBJc1IwRkJSeXhEUVVGRExFTkJRVU03UVVGRE0wSXNVVUZCVFN4blFrRkJaMElzUjBGQlJ5eERRVUZETEVOQlFVTTdPMEZCUlROQ0xGZEJRVThzUTBGQlF5eE5RVUZOTEVkQlFVYzdRVUZEWWl4VFFVRkRMRVZCUVVVc1NVRkJTU3hEUVVGRExFdEJRVXNzU1VGQlNTeG5Ra0ZCWjBJc1IwRkJSeXhIUVVGSExFTkJRVUVzUVVGQlF5eEhRVUZITEVsQlFVa3NRMEZCUXl4RFFVRkRPMEZCUTJwRUxGTkJRVU1zUlVGQlJTeEpRVUZKTEVOQlFVTXNUVUZCVFN4SlFVRkpMR2RDUVVGblFpeEhRVUZITEVkQlFVY3NRMEZCUVN4QlFVRkRMRWRCUVVjc1NVRkJTU3hEUVVGRExFTkJRVU03UzBGRGNrUXNRMEZCUXpzN1FVRkZSaXhYUVVGUExFOUJRVThzUTBGQlF6dERRVU5zUWlJc0ltWnBiR1VpT2lKemRtY3RZV1JoY0hSbGNpNXFjeUlzSW5OdmRYSmpaVkp2YjNRaU9pSXZWWE5sY25NdlRXRjBkRkJsY25KNUwxTnBkR1Z6TDNCdmNHMXZkR2x2YmlJc0luTnZkWEpqWlhORGIyNTBaVzUwSWpwYkltbHRjRzl5ZENCemRHRjBaVTFoY0NCbWNtOXRJQ2N1TDJOemN5OXpkR0YwWlMxdFlYQW5PMXh1YVcxd2IzSjBJSFpoYkhWbFZIbHdaVTFoY0NCbWNtOXRJQ2N1TDNOMlp5OTJZV3gxWlMxMGVYQmxMVzFoY0NjN1hHNXBiWEJ2Y25RZ1luVnBiR1FnWm5KdmJTQW5MaTl6ZG1jdlluVnBiR1FuTzF4dWFXMXdiM0owSUhzZ1oyVjBkR1Z5TENCelpYUjBaWElnWVhNZ1lYUjBjbE5sZEhSbGNpQjlJR1p5YjIwZ0p5NHZZWFIwY2kxaFpHRndkR1Z5Snp0Y2JtbHRjRzl5ZENCamNtVmhkR1ZCWkdGd2RHVnlJR1p5YjIwZ0p5NHZZV1JoY0hSbGNpYzdYRzVjYm1WNGNHOXlkQ0JtZFc1amRHbHZiaUJ6WlhSMFpYSW9jSEp2Y0hNcElIdGNiaUFnSUNCaGRIUnlVMlYwZEdWeUtHSjFhV3hrS0hCeWIzQnpMQ0IwYUdsekxtOXlhV2RwYmlrcE8xeHVmVnh1WEc1bGVIQnZjblFnWkdWbVlYVnNkQ0FvWld4bGJXVnVkQ2tnUFQ0Z2UxeHVJQ0FnSUdOdmJuTjBJR0ZrWVhCMFpYSWdQU0JqY21WaGRHVkJaR0Z3ZEdWeUtIc2daV3hsYldWdWRDd2djM1JoZEdWTllYQXNJSFpoYkhWbFZIbHdaVTFoY0N3Z1oyVjBkR1Z5TENCelpYUjBaWElnZlNrN1hHNGdJQ0FnWTI5dWMzUWdZa0p2ZUNBOUlHVnNaVzFsYm5RdVoyVjBRa0p2ZUNncE8xeHVJQ0FnSUdOdmJuTjBJSFJ5WVc1elptOXliVTl5YVdkcGJsa2dQU0F3TzF4dUlDQWdJR052Ym5OMElIUnlZVzV6Wm05eWJVOXlhV2RwYmxnZ1BTQXdPMXh1WEc0Z0lDQWdZV1JoY0hSbGNpNXZjbWxuYVc0Z1BTQjdYRzRnSUNBZ0lDQWdJSGc2SUdKQ2IzZ3VkMmxrZEdnZ0tpQW9kSEpoYm5ObWIzSnRUM0pwWjJsdVdDQXZJREV3TUNrZ0t5QmlRbTk0TG5nc1hHNGdJQ0FnSUNBZ0lIazZJR0pDYjNndWFHVnBaMmgwSUNvZ0tIUnlZVzV6Wm05eWJVOXlhV2RwYmxrZ0x5QXhNREFwSUNzZ1lrSnZlQzU1WEc0Z0lDQWdmVHRjYmx4dUlDQWdJSEpsZEhWeWJpQmhaR0Z3ZEdWeU8xeHVmVHRjYmx4dUlsMTlcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2FkYXB0ZXIvc3ZnLWFkYXB0ZXIuanNcbiAqKiBtb2R1bGUgaWQgPSAxNlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX2J1aWxkID0gcmVxdWlyZSgnLi9zdmctcGF0aC9idWlsZCcpO1xuXG52YXIgX2J1aWxkMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2J1aWxkKTtcblxudmFyIF9zdGF0ZU1hcCA9IHJlcXVpcmUoJy4vc3ZnLXBhdGgvc3RhdGUtbWFwJyk7XG5cbnZhciBfc3RhdGVNYXAyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfc3RhdGVNYXApO1xuXG52YXIgX3N2Z0FkYXB0ZXIgPSByZXF1aXJlKCcuL3N2Zy1hZGFwdGVyJyk7XG5cbnZhciBfc3ZnQWRhcHRlcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9zdmdBZGFwdGVyKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gc2V0dGVyKHByb3BzKSB7XG4gICAgdGhpcy5zdmdTZXR0ZXIoKDAsIF9idWlsZDIuZGVmYXVsdCkocHJvcHMsIHRoaXMucGF0aExlbmd0aCkpO1xufVxuXG5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbiAoZWxlbWVudCkge1xuICAgIHZhciBhZGFwdGVyID0gKDAsIF9zdmdBZGFwdGVyMi5kZWZhdWx0KShlbGVtZW50KTtcblxuICAgIGFkYXB0ZXIuc3RhdGVNYXAgPSBfc3RhdGVNYXAyLmRlZmF1bHQ7XG4gICAgYWRhcHRlci5zZXR0ZXIgPSBzZXR0ZXI7XG4gICAgYWRhcHRlci5zdmdTZXR0ZXIgPSBfc3ZnQWRhcHRlci5zZXR0ZXI7XG5cbiAgICBhZGFwdGVyLnBhdGhMZW5ndGggPSBlbGVtZW50LmdldFRvdGFsTGVuZ3RoKCk7XG5cbiAgICByZXR1cm4gYWRhcHRlcjtcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5OeVl5OWhaR0Z3ZEdWeUwzTjJaeTF3WVhSb0xXRmtZWEIwWlhJdWFuTWlYU3dpYm1GdFpYTWlPbHRkTENKdFlYQndhVzVuY3lJNklqczdPenM3T3pzN096czdPenM3T3pzN08wRkJTVUVzVTBGQlV5eE5RVUZOTEVOQlFVTXNTMEZCU3l4RlFVRkZPMEZCUTI1Q0xGRkJRVWtzUTBGQlF5eFRRVUZUTEVOQlFVTXNjVUpCUVUwc1MwRkJTeXhGUVVGRkxFbEJRVWtzUTBGQlF5eFZRVUZWTEVOQlFVTXNRMEZCUXl4RFFVRkRPME5CUTJwRU96dHJRa0ZGWXl4VlFVRkRMRTlCUVU4c1JVRkJTenRCUVVONFFpeFJRVUZOTEU5QlFVOHNSMEZCUnl3d1FrRkJWeXhQUVVGUExFTkJRVU1zUTBGQlF6czdRVUZGY0VNc1YwRkJUeXhEUVVGRExGRkJRVkVzY1VKQlFWY3NRMEZCUXp0QlFVTTFRaXhYUVVGUExFTkJRVU1zVFVGQlRTeEhRVUZITEUxQlFVMHNRMEZCUXp0QlFVTjRRaXhYUVVGUExFTkJRVU1zVTBGQlV5eGxRVmhCTEUxQlFVMHNRVUZYVFN4RFFVRkRPenRCUVVVNVFpeFhRVUZQTEVOQlFVTXNWVUZCVlN4SFFVRkhMRTlCUVU4c1EwRkJReXhqUVVGakxFVkJRVVVzUTBGQlF6czdRVUZGT1VNc1YwRkJUeXhQUVVGUExFTkJRVU03UTBGRGJFSWlMQ0ptYVd4bElqb2ljM1puTFhCaGRHZ3RZV1JoY0hSbGNpNXFjeUlzSW5OdmRYSmpaVkp2YjNRaU9pSXZWWE5sY25NdlRXRjBkRkJsY25KNUwxTnBkR1Z6TDNCdmNHMXZkR2x2YmlJc0luTnZkWEpqWlhORGIyNTBaVzUwSWpwYkltbHRjRzl5ZENCaWRXbHNaQ0JtY205dElDY3VMM04yWnkxd1lYUm9MMkoxYVd4a0p6dGNibWx0Y0c5eWRDQnpkR0YwWlUxaGNDQm1jbTl0SUNjdUwzTjJaeTF3WVhSb0wzTjBZWFJsTFcxaGNDYzdYRzVwYlhCdmNuUWdjM1puUVdSaGNIUmxjaXdnZXlCelpYUjBaWElnWVhNZ2MzWm5VMlYwZEdWeUlIMGdabkp2YlNBbkxpOXpkbWN0WVdSaGNIUmxjaWM3WEc1Y2JtWjFibU4wYVc5dUlITmxkSFJsY2lod2NtOXdjeWtnZTF4dUlDQWdJSFJvYVhNdWMzWm5VMlYwZEdWeUtHSjFhV3hrS0hCeWIzQnpMQ0IwYUdsekxuQmhkR2hNWlc1bmRHZ3BLVHRjYm4xY2JseHVaWGh3YjNKMElHUmxabUYxYkhRZ0tHVnNaVzFsYm5RcElEMCtJSHRjYmlBZ0lDQmpiMjV6ZENCaFpHRndkR1Z5SUQwZ2MzWm5RV1JoY0hSbGNpaGxiR1Z0Wlc1MEtUdGNibHh1SUNBZ0lHRmtZWEIwWlhJdWMzUmhkR1ZOWVhBZ1BTQnpkR0YwWlUxaGNEdGNiaUFnSUNCaFpHRndkR1Z5TG5ObGRIUmxjaUE5SUhObGRIUmxjanRjYmlBZ0lDQmhaR0Z3ZEdWeUxuTjJaMU5sZEhSbGNpQTlJSE4yWjFObGRIUmxjanRjYmx4dUlDQWdJR0ZrWVhCMFpYSXVjR0YwYUV4bGJtZDBhQ0E5SUdWc1pXMWxiblF1WjJWMFZHOTBZV3hNWlc1bmRHZ29LVHRjYmx4dUlDQWdJSEpsZEhWeWJpQmhaR0Z3ZEdWeU8xeHVmVHRjYmlKZGZRPT1cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2FkYXB0ZXIvc3ZnLXBhdGgtYWRhcHRlci5qc1xuICoqIG1vZHVsZSBpZCA9IDE3XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzLnN0ZXBQcm9ncmVzcyA9IGV4cG9ydHMuc3BlZWRQZXJTZWNvbmQgPSBleHBvcnRzLnNwZWVkUGVyRnJhbWUgPSBleHBvcnRzLnNtb290aCA9IGV4cG9ydHMucmVzdHJpY3QgPSBleHBvcnRzLnJlbGF0aXZlVmFsdWUgPSBleHBvcnRzLnJhbmRvbSA9IGV4cG9ydHMucmFkaWFuc1RvRGVncmVlcyA9IGV4cG9ydHMucG9pbnRGcm9tQW5nbGVBbmREaXN0YW5jZSA9IGV4cG9ydHMub2Zmc2V0ID0gZXhwb3J0cy5nZXRQcm9ncmVzc0Zyb21WYWx1ZSA9IGV4cG9ydHMuZ2V0VmFsdWVGcm9tUHJvZ3Jlc3MgPSBleHBvcnRzLmh5cG90ZW51c2UgPSBleHBvcnRzLmRpc3RhbmNlID0gZXhwb3J0cy5kaWxhdGUgPSBleHBvcnRzLmRlZ3JlZXNUb1JhZGlhbnMgPSBleHBvcnRzLmFuZ2xlID0gdW5kZWZpbmVkO1xuXG52YXIgX3V0aWxzID0gcmVxdWlyZSgnLi91dGlscycpO1xuXG52YXIgWkVST19QT0lOVCA9IHtcbiAgICB4OiAwLFxuICAgIHk6IDAsXG4gICAgejogMFxufTtcblxudmFyIGRpc3RhbmNlMUQgPSBmdW5jdGlvbiAoYSwgYikge1xuICAgIHJldHVybiBNYXRoLmFicyhhIC0gYik7XG59O1xuXG4vKlxuICAgIEFuZ2xlIGJldHdlZW4gcG9pbnRzXG4gICAgXG4gICAgVHJhbnNsYXRlcyB0aGUgaHlwb3RoZXRpY2FsIGxpbmUgc28gdGhhdCB0aGUgJ2Zyb20nIGNvb3JkaW5hdGVzXG4gICAgYXJlIGF0IDAsMCwgdGhlbiByZXR1cm4gdGhlIGFuZ2xlIHVzaW5nIC5hbmdsZUZyb21DZW50ZXIoKVxuICAgIFxuICAgIEBwYXJhbSBbb2JqZWN0XTogWCBhbmQgWSBjb29yZGluYXRlcyBvZiBmcm9tIHBvaW50XG4gICAgQHBhcmFtIFtvYmplY3RdOiBYIGFuZCBZIGNvcmRpbmF0ZXMgb2YgdG8gcG9pbnRcbiAgICBAcmV0dXJuIFtyYWRpYW5dOiBBbmdsZSBiZXR3ZWVuIHRoZSB0d28gcG9pbnRzIGluIHJhZGlhbnNcbiovXG52YXIgYW5nbGUgPSBleHBvcnRzLmFuZ2xlID0gZnVuY3Rpb24gKGEpIHtcbiAgICB2YXIgYiA9IGFyZ3VtZW50cy5sZW5ndGggPD0gMSB8fCBhcmd1bWVudHNbMV0gPT09IHVuZGVmaW5lZCA/IFpFUk9fUE9JTlQgOiBhcmd1bWVudHNbMV07XG4gICAgcmV0dXJuIHJhZGlhbnNUb0RlZ3JlZXMoTWF0aC5hdGFuMihhLnggLSBiLngsIGEueSAtIGIueSkpO1xufTtcblxuLypcbiAgICBDb252ZXJ0IGRlZ3JlZXMgdG8gcmFkaWFuc1xuICAgIFxuICAgIEBwYXJhbSBbbnVtYmVyXTogVmFsdWUgaW4gZGVncmVlc1xuICAgIEByZXR1cm4gW251bWJlcl06IFZhbHVlIGluIHJhZGlhbnNcbiovXG52YXIgZGVncmVlc1RvUmFkaWFucyA9IGV4cG9ydHMuZGVncmVlc1RvUmFkaWFucyA9IGZ1bmN0aW9uIChkZWdyZWVzKSB7XG4gICAgcmV0dXJuIGRlZ3JlZXMgKiBNYXRoLlBJIC8gMTgwO1xufTtcblxuLypcbiAgICBEaWxhdGVcbiAgICBcbiAgICBDaGFuZ2UgdGhlIHByb2dyZXNzaW9uIGJldHdlZW4gYSBhbmQgYiBhY2NvcmRpbmcgdG8gZGlsYXRpb24uXG4gICAgXG4gICAgU28gZGlsYXRpb24gPSAwLjUgd291bGQgY2hhbmdlXG4gICAgXG4gICAgYSAtLS0tLS0tLS0gYlxuICAgIFxuICAgIHRvXG4gICAgXG4gICAgYSAtLS0tIGJcbiAgICBcbiAgICBAcGFyYW0gW251bWJlcl06IFByZXZpb3VzIHZhbHVlXG4gICAgQHBhcmFtIFtudW1iZXJdOiBDdXJyZW50IHZhbHVlXG4gICAgQHBhcmFtIFtudW1iZXJdOiBEaWxhdGUgcHJvZ3Jlc3MgYnkgeFxuICAgIEByZXR1cm4gW251bWJlcl06IFByZXZpb3VzIHZhbHVlIHBsdXMgdGhlIGRpbGF0ZWQgZGlmZmVyZW5jZVxuKi9cbnZhciBkaWxhdGUgPSBleHBvcnRzLmRpbGF0ZSA9IGZ1bmN0aW9uIChhLCBiLCBkaWxhdGlvbikge1xuICAgIHJldHVybiBhICsgKGIgLSBhKSAqIGRpbGF0aW9uO1xufTtcblxuLypcbiAgICBEaXN0YW5jZVxuICAgIFxuICAgIFJldHVybnMgdGhlIGRpc3RhbmNlIGJldHdlZW4gdHdvIG4gZGltZW5zaW9uYWwgcG9pbnRzLlxuICAgIFxuICAgIEBwYXJhbSBbb2JqZWN0L251bWJlcl06IHggYW5kIHkgb3IganVzdCB4IG9mIHBvaW50IEFcbiAgICBAcGFyYW0gW29iamVjdC9udW1iZXJdOiAob3B0aW9uYWwpOiB4IGFuZCB5IG9yIGp1c3QgeCBvZiBwb2ludCBCXG4gICAgQHJldHVybiBbbnVtYmVyXTogVGhlIGRpc3RhbmNlIGJldHdlZW4gdGhlIHR3byBwb2ludHNcbiovXG52YXIgZGlzdGFuY2UgPSBleHBvcnRzLmRpc3RhbmNlID0gZnVuY3Rpb24gKGEpIHtcbiAgICB2YXIgYiA9IGFyZ3VtZW50cy5sZW5ndGggPD0gMSB8fCBhcmd1bWVudHNbMV0gPT09IHVuZGVmaW5lZCA/IFpFUk9fUE9JTlQgOiBhcmd1bWVudHNbMV07XG5cbiAgICAvLyAxRCBkaW1lbnNpb25zXG4gICAgaWYgKCgwLCBfdXRpbHMuaXNOdW0pKGEpKSB7XG4gICAgICAgIHJldHVybiBkaXN0YW5jZTFEKGEsIGIpO1xuXG4gICAgICAgIC8vIE11bHRpLWRpbWVuc2lvbmFsXG4gICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHZhciB4RGVsdGEgPSBkaXN0YW5jZTFEKGEueCwgYi54KTtcbiAgICAgICAgICAgIHZhciB5RGVsdGEgPSBkaXN0YW5jZTFEKGEueSwgYi55KTtcbiAgICAgICAgICAgIHZhciB6RGVsdGEgPSAoMCwgX3V0aWxzLmlzTnVtKShhLnopID8gZGlzdGFuY2UxRChhLnosIGIueikgOiAwO1xuXG4gICAgICAgICAgICByZXR1cm4gTWF0aC5zcXJ0KE1hdGgucG93KHhEZWx0YSwgMikgKyBNYXRoLnBvdyh5RGVsdGEsIDIpICsgTWF0aC5wb3coekRlbHRhLCAyKSk7XG4gICAgICAgIH1cbn07XG5cbi8qXG4gICAgSHlwb3RlbnVzZVxuICAgIFxuICAgIFJldHVybnMgdGhlIGh5cG90ZW51c2UsIHNpZGUgQywgZ2l2ZW4gdGhlIGxlbmd0aHMgb2Ygc2lkZXMgQSBhbmQgQi5cbiAgICBcbiAgICBAcGFyYW0gW251bWJlcl06IExlbmd0aCBvZiBBXG4gICAgQHBhcmFtIFtudW1iZXJdOiBMZW5ndGggb2YgQlxuICAgIEByZXR1cm4gW251bWJlcl06IExlbmd0aCBvZiBDXG4qL1xudmFyIGh5cG90ZW51c2UgPSBleHBvcnRzLmh5cG90ZW51c2UgPSBmdW5jdGlvbiAoYSwgYikge1xuICAgIHJldHVybiBNYXRoLnNxcnQoYSAqIGEgKyBiICogYik7XG59O1xuXG4vKlxuICAgIFZhbHVlIGluIHJhbmdlIGZyb20gcHJvZ3Jlc3NcbiAgICBcbiAgICBHaXZlbiBhIGxvd2VyIGxpbWl0IGFuZCBhbiB1cHBlciBsaW1pdCwgd2UgcmV0dXJuIHRoZSB2YWx1ZSB3aXRoaW5cbiAgICB0aGF0IHJhbmdlIGFzIGV4cHJlc3NlZCBieSBwcm9ncmVzcyAoYSBudW1iZXIgZnJvbSAwLTEpXG4gICAgXG4gICAgQHBhcmFtIFtudW1iZXJdOiBUaGUgcHJvZ3Jlc3MgYmV0d2VlbiBsb3dlciBhbmQgdXBwZXIgbGltaXRzIGV4cHJlc3NlZCAwLTFcbiAgICBAcGFyYW0gW251bWJlcl06IExvd2VyIGxpbWl0IG9mIHJhbmdlXG4gICAgQHBhcmFtIFtudW1iZXJdOiBVcHBlciBsaW1pdCBvZiByYW5nZVxuICAgIEByZXR1cm4gW251bWJlcl06IFZhbHVlIGFzIGNhbGN1bGF0ZWQgZnJvbSBwcm9ncmVzcyB3aXRoaW4gcmFuZ2UgKG5vdCBsaW1pdGVkIHdpdGhpbiByYW5nZSlcbiovXG52YXIgZ2V0VmFsdWVGcm9tUHJvZ3Jlc3MgPSBleHBvcnRzLmdldFZhbHVlRnJvbVByb2dyZXNzID0gZnVuY3Rpb24gKHByb2dyZXNzLCBmcm9tLCB0bykge1xuICAgIHJldHVybiAtcHJvZ3Jlc3MgKiBmcm9tICsgcHJvZ3Jlc3MgKiB0byArIGZyb207XG59O1xuXG4vKlxuICAgIFByb2dyZXNzIHdpdGhpbiBnaXZlbiByYW5nZVxuICAgIFxuICAgIEdpdmVuIGEgbG93ZXIgbGltaXQgYW5kIGFuIHVwcGVyIGxpbWl0LCB3ZSByZXR1cm4gdGhlIHByb2dyZXNzXG4gICAgKGV4cHJlc3NlZCBhcyBhIG51bWJlciAwLTEpIHJlcHJlc2VudGVkIGJ5IHRoZSBnaXZlbiB2YWx1ZSwgYW5kXG4gICAgbGltaXQgdGhhdCBwcm9ncmVzcyB0byB3aXRoaW4gMC0xLlxuICAgIFxuICAgIEBwYXJhbSBbbnVtYmVyXTogVmFsdWUgdG8gZmluZCBwcm9ncmVzcyB3aXRoaW4gZ2l2ZW4gcmFuZ2VcbiAgICBAcGFyYW0gW251bWJlcl06IExvd2VyIGxpbWl0IFxuICAgIEBwYXJhbSBbbnVtYmVyXTogVXBwZXIgbGltaXRcbiAgICBAcmV0dXJuIFtudW1iZXJdOiBQcm9ncmVzcyBvZiB2YWx1ZSB3aXRoaW4gcmFuZ2UgYXMgZXhwcmVzc2VkIDAtMVxuKi9cbnZhciBnZXRQcm9ncmVzc0Zyb21WYWx1ZSA9IGV4cG9ydHMuZ2V0UHJvZ3Jlc3NGcm9tVmFsdWUgPSBmdW5jdGlvbiAodmFsdWUsIGZyb20sIHRvKSB7XG4gICAgcmV0dXJuICh2YWx1ZSAtIGZyb20pIC8gKHRvIC0gZnJvbSk7XG59O1xuXG4vKlxuICAgIE9mZnNldCBiZXR3ZWVuIHR3byBvYmplY3RzIG9mIG51bWJlcnNcblxuICAgIElmIHByb3BlcnR5IGlzIGZvdW5kIGluIGIgbm90IHByZXNlbnQgaW4gYSwgaXQgd2lsbCByZXR1cm4gYDBgIGZvciB0aGF0IHByb3AuXG4gICAgXG4gICAgQHBhcmFtIFtQb2ludF06IEZpcnN0IG9iamVjdFxuICAgIEBwYXJhbSBbUG9pbnRdOiBTZWNvbmQgb2JqZWN0XG4gICAgQHJldHVybiBbT2Zmc2V0XTogRGlzdGFuY2UgbWV0cmljcyBiZXR3ZWVuIHR3byBwb2ludHNcbiovXG52YXIgb2Zmc2V0ID0gZXhwb3J0cy5vZmZzZXQgPSBmdW5jdGlvbiAoYSwgYikge1xuICAgIHZhciBvZmZzZXQgPSB7fTtcblxuICAgIGZvciAodmFyIGtleSBpbiBiKSB7XG4gICAgICAgIGlmIChiLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICAgIG9mZnNldFtrZXldID0gKDAsIF91dGlscy5oYXNQcm9wZXJ0eSkoYSwga2V5KSA/IGJba2V5XSAtIGFba2V5XSA6IDA7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gb2Zmc2V0O1xufTtcblxuLypcbiAgICBQb2ludCBmcm9tIGFuZ2xlIGFuZCBkaXN0YW5jZVxuICAgIFxuICAgIEBwYXJhbSBbb2JqZWN0XTogMkQgcG9pbnQgb2Ygb3JpZ2luXG4gICAgQHBhcmFtIFtudW1iZXJdOiBBbmdsZSBmcm9tIG9yaWdpblxuICAgIEBwYXJhbSBbbnVtYmVyXTogRGlzdGFuY2UgZnJvbSBvcmlnaW5cbiAgICBAcmV0dXJuIFtvYmplY3RdOiBDYWxjdWxhdGVkIDJEIHBvaW50XG4qL1xudmFyIHBvaW50RnJvbUFuZ2xlQW5kRGlzdGFuY2UgPSBleHBvcnRzLnBvaW50RnJvbUFuZ2xlQW5kRGlzdGFuY2UgPSBmdW5jdGlvbiAob3JpZ2luLCBhbmdsZSwgZGlzdGFuY2UpIHtcbiAgICBhbmdsZSA9IGRlZ3JlZXNUb1JhZGlhbnMoYW5nbGUpO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgeDogZGlzdGFuY2UgKiBNYXRoLmNvcyhhbmdsZSkgKyBvcmlnaW4ueCxcbiAgICAgICAgeTogZGlzdGFuY2UgKiBNYXRoLnNpbihhbmdsZSkgKyBvcmlnaW4ueVxuICAgIH07XG59O1xuXG4vKlxuICAgIENvbnZlcnQgcmFkaWFucyB0byBkZWdyZWVzXG4gICAgXG4gICAgQHBhcmFtIFtudW1iZXJdOiBWYWx1ZSBpbiByYWRpYW5zXG4gICAgQHJldHVybiBbbnVtYmVyXTogVmFsdWUgaW4gZGVncmVlc1xuKi9cbnZhciByYWRpYW5zVG9EZWdyZWVzID0gZXhwb3J0cy5yYWRpYW5zVG9EZWdyZWVzID0gZnVuY3Rpb24gKHJhZGlhbnMpIHtcbiAgICByZXR1cm4gcmFkaWFucyAqIDE4MCAvIE1hdGguUEk7XG59O1xuXG4vKlxuICAgIFJldHVybiByYW5kb20gbnVtYmVyIGJldHdlZW4gcmFuZ2VcbiAgICBcbiAgICBAcGFyYW0gW251bWJlcl0gKG9wdGlvbmFsKTogT3V0cHV0IG1pbmltdW1cbiAgICBAcGFyYW0gW251bWJlcl0gKG9wdGlvbmFsKTogT3V0cHV0IG1heGltdW1cbiAgICBAcmV0dXJuIFtudW1iZXJdOiBSYW5kb20gbnVtYmVyIHdpdGhpbiByYW5nZSwgb3IgMCBhbmQgMSBpZiBub25lIHByb3ZpZGVkXG4qL1xudmFyIHJhbmRvbSA9IGV4cG9ydHMucmFuZG9tID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciBtaW4gPSBhcmd1bWVudHMubGVuZ3RoIDw9IDAgfHwgYXJndW1lbnRzWzBdID09PSB1bmRlZmluZWQgPyAwIDogYXJndW1lbnRzWzBdO1xuICAgIHZhciBtYXggPSBhcmd1bWVudHMubGVuZ3RoIDw9IDEgfHwgYXJndW1lbnRzWzFdID09PSB1bmRlZmluZWQgPyAxIDogYXJndW1lbnRzWzFdO1xuICAgIHJldHVybiBNYXRoLnJhbmRvbSgpICogKG1heCAtIG1pbikgKyBtaW47XG59O1xuXG4vKlxuICAgIENhbGN1bGF0ZSByZWxhdGl2ZSB2YWx1ZVxuICAgIFxuICAgIFRha2VzIHRoZSBvcGVyYXRvciBhbmQgdmFsdWUgZnJvbSBhIHN0cmluZywgaWUgXCIrPTVcIiwgYW5kIGFwcGxpZXNcbiAgICB0byB0aGUgY3VycmVudCB2YWx1ZSB0byByZXNvbHZlIGEgbmV3IHRhcmdldC5cbiAgICBcbiAgICBAcGFyYW0gW251bWJlcl06IEN1cnJlbnQgdmFsdWVcbiAgICBAcGFyYW0gW3N0cmluZ106IFJlbGF0aXZlIHZhbHVlXG4gICAgQHJldHVybiBbbnVtYmVyXTogTmV3IHZhbHVlXG4qL1xudmFyIHJlbGF0aXZlVmFsdWUgPSBleHBvcnRzLnJlbGF0aXZlVmFsdWUgPSBmdW5jdGlvbiAoY3VycmVudCwgcmVsYXRpdmUpIHtcbiAgICB2YXIgbmV3VmFsdWUgPSBjdXJyZW50O1xuICAgIHZhciBlcXVhdGlvbiA9IHJlbGF0aXZlLnNwbGl0KCc9Jyk7XG4gICAgdmFyIG9wZXJhdG9yID0gZXF1YXRpb25bMF07XG5cbiAgICB2YXIgX3NwbGl0VmFsdWVVbml0ID0gKDAsIF91dGlscy5zcGxpdFZhbHVlVW5pdCkoZXF1YXRpb25bMV0pO1xuXG4gICAgdmFyIHVuaXQgPSBfc3BsaXRWYWx1ZVVuaXQudW5pdDtcbiAgICB2YXIgdmFsdWUgPSBfc3BsaXRWYWx1ZVVuaXQudmFsdWU7XG5cbiAgICB2YWx1ZSA9IHBhcnNlRmxvYXQodmFsdWUpO1xuXG4gICAgc3dpdGNoIChvcGVyYXRvcikge1xuICAgICAgICBjYXNlICcrJzpcbiAgICAgICAgICAgIG5ld1ZhbHVlICs9IHZhbHVlO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJy0nOlxuICAgICAgICAgICAgbmV3VmFsdWUgLT0gdmFsdWU7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnKic6XG4gICAgICAgICAgICBuZXdWYWx1ZSAqPSB2YWx1ZTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICcvJzpcbiAgICAgICAgICAgIG5ld1ZhbHVlIC89IHZhbHVlO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgaWYgKHVuaXQpIHtcbiAgICAgICAgbmV3VmFsdWUgKz0gdW5pdDtcbiAgICB9XG5cbiAgICByZXR1cm4gbmV3VmFsdWU7XG59O1xuXG4vKlxuICAgIFJlc3RyaWN0IHZhbHVlIHRvIHJhbmdlXG4gICAgXG4gICAgUmV0dXJuIHZhbHVlIHdpdGhpbiB0aGUgcmFuZ2Ugb2YgbG93ZXJMaW1pdCBhbmQgdXBwZXJMaW1pdFxuICAgIFxuICAgIEBwYXJhbSBbbnVtYmVyXTogVmFsdWUgdG8ga2VlcCB3aXRoaW4gcmFuZ2VcbiAgICBAcGFyYW0gW251bWJlcl06IExvd2VyIGxpbWl0IG9mIHJhbmdlXG4gICAgQHBhcmFtIFtudW1iZXJdOiBVcHBlciBsaW1pdCBvZiByYW5nZVxuICAgIEByZXR1cm4gW251bWJlcl06IFZhbHVlIGFzIGxpbWl0ZWQgd2l0aGluIGdpdmVuIHJhbmdlXG4qL1xudmFyIHJlc3RyaWN0ID0gZXhwb3J0cy5yZXN0cmljdCA9IGZ1bmN0aW9uICh2YWx1ZSwgbWluLCBtYXgpIHtcbiAgICByZXR1cm4gTWF0aC5tYXgoTWF0aC5taW4odmFsdWUsIG1heCksIG1pbik7XG59O1xuXG4vKlxuICAgIEZyYW1lcmF0ZS1pbmRlcGVuZGVudCBzbW9vdGhpbmdcblxuICAgIEBwYXJhbSBbbnVtYmVyXTogTmV3IHZhbHVlXG4gICAgQHBhcmFtIFtudW1iZXJdOiBPbGQgdmFsdWVcbiAgICBAcGFyYW0gW251bWJlcl06IEZyYW1lIGR1cmF0aW9uXG4gICAgQHBhcmFtIFtudW1iZXJdIChvcHRpb25hbCk6IFNtb290aGluZyAoMCBpcyBub25lKVxuKi9cbnZhciBzbW9vdGggPSBleHBvcnRzLnNtb290aCA9IGZ1bmN0aW9uIChuZXdWYWx1ZSwgb2xkVmFsdWUsIGR1cmF0aW9uKSB7XG4gICAgdmFyIHNtb290aGluZyA9IGFyZ3VtZW50cy5sZW5ndGggPD0gMyB8fCBhcmd1bWVudHNbM10gPT09IHVuZGVmaW5lZCA/IDAgOiBhcmd1bWVudHNbM107XG4gICAgcmV0dXJuICgwLCBfdXRpbHMudG9EZWNpbWFsKShvbGRWYWx1ZSArIGR1cmF0aW9uICogKG5ld1ZhbHVlIC0gb2xkVmFsdWUpIC8gTWF0aC5tYXgoc21vb3RoaW5nLCBkdXJhdGlvbikpO1xufTtcblxuLypcbiAgICBDb252ZXJ0IHggcGVyIHNlY29uZCB0byBwZXIgZnJhbWUgdmVsb2NpdHkgYmFzZWQgb24gZnBzXG4gICAgXG4gICAgQHBhcmFtIFtudW1iZXJdOiBVbml0IHBlciBzZWNvbmRcbiAgICBAcGFyYW0gW251bWJlcl06IEZyYW1lIGR1cmF0aW9uIGluIG1zXG4qL1xudmFyIHNwZWVkUGVyRnJhbWUgPSBleHBvcnRzLnNwZWVkUGVyRnJhbWUgPSBmdW5jdGlvbiAoeHBzLCBmcmFtZUR1cmF0aW9uKSB7XG4gICAgcmV0dXJuICgwLCBfdXRpbHMuaXNOdW0pKHhwcykgPyB4cHMgLyAoMTAwMCAvIGZyYW1lRHVyYXRpb24pIDogMDtcbn07XG5cbi8qXG4gICAgQ29udmVydCB2ZWxvY2l0eSBpbnRvIHZlbGljaXR5IHBlciBzZWNvbmRcbiAgICBcbiAgICBAcGFyYW0gW251bWJlcl06IFVuaXQgcGVyIGZyYW1lXG4gICAgQHBhcmFtIFtudW1iZXJdOiBGcmFtZSBkdXJhdGlvbiBpbiBtc1xuKi9cbnZhciBzcGVlZFBlclNlY29uZCA9IGV4cG9ydHMuc3BlZWRQZXJTZWNvbmQgPSBmdW5jdGlvbiAodmVsb2NpdHksIGZyYW1lRHVyYXRpb24pIHtcbiAgICByZXR1cm4gdmVsb2NpdHkgKiAoMTAwMCAvIGZyYW1lRHVyYXRpb24pO1xufTtcblxuLypcbiAgICBDcmVhdGUgc3RlcHBlZCB2ZXJzaW9uIG9mIDAtMSBwcm9ncmVzc1xuICAgIFxuICAgIEBwYXJhbSBbbnVtYmVyXTogQ3VycmVudCB2YWx1ZVxuICAgIEBwYXJhbSBbaW50XTogTnVtYmVyIG9mIHN0ZXBzXG4gICAgQHJldHVybiBbbnVtYmVyXTogU3RlcHBlZCB2YWx1ZVxuKi9cbnZhciBzdGVwUHJvZ3Jlc3MgPSBleHBvcnRzLnN0ZXBQcm9ncmVzcyA9IGZ1bmN0aW9uIChwcm9ncmVzcywgc3RlcHMpIHtcbiAgICB2YXIgc2VnbWVudCA9IDEgLyAoc3RlcHMgLSAxKTtcbiAgICB2YXIgdGFyZ2V0ID0gMSAtIDEgLyBzdGVwcztcbiAgICB2YXIgcHJvZ3Jlc3NPZlRhcmdldCA9IE1hdGgubWluKHByb2dyZXNzIC8gdGFyZ2V0LCAxKTtcblxuICAgIHJldHVybiBNYXRoLmZsb29yKHByb2dyZXNzT2ZUYXJnZXQgLyBzZWdtZW50KSAqIHNlZ21lbnQ7XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluTnlZeTlwYm1NdlkyRnNZeTVxY3lKZExDSnVZVzFsY3lJNlcxMHNJbTFoY0hCcGJtZHpJam9pT3pzN096czdPMEZCVDBFc1NVRkJUU3hWUVVGVkxFZEJRVWM3UVVGRFppeExRVUZETEVWQlFVVXNRMEZCUXp0QlFVTktMRXRCUVVNc1JVRkJSU3hEUVVGRE8wRkJRMG9zUzBGQlF5eEZRVUZGTEVOQlFVTTdRMEZEVUN4RFFVRkRPenRCUVVWR0xFbEJRVTBzVlVGQlZTeEhRVUZITEZWQlFVTXNRMEZCUXl4RlFVRkZMRU5CUVVNN1YwRkJTeXhKUVVGSkxFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNN1EwRkJRVHM3T3pzN096czdPenM3TzBGQlFVTXNRVUZaZEVNc1NVRkJUU3hMUVVGTExGZEJRVXdzUzBGQlN5eEhRVUZITEZWQlFVTXNRMEZCUXp0UlFVRkZMRU5CUVVNc2VVUkJRVWNzVlVGQlZUdFhRVUZMTEdkQ1FVRm5RaXhEUVVGRExFbEJRVWtzUTBGQlF5eExRVUZMTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU1zUTBGQlF5eEZRVUZGTEVOQlFVTXNRMEZCUXl4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETzBOQlFVRTdPenM3T3pzN08wRkJRVU1zUVVGUmVFWXNTVUZCVFN4blFrRkJaMElzVjBGQmFFSXNaMEpCUVdkQ0xFZEJRVWNzVlVGQlF5eFBRVUZQTzFkQlFVc3NUMEZCVHl4SFFVRkhMRWxCUVVrc1EwRkJReXhGUVVGRkxFZEJRVWNzUjBGQlJ6dERRVUZCT3pzN096czdPenM3T3pzN096czdPenM3T3p0QlFVRkRMRUZCYjBJNVJDeEpRVUZOTEUxQlFVMHNWMEZCVGl4TlFVRk5MRWRCUVVjc1ZVRkJReXhEUVVGRExFVkJRVVVzUTBGQlF5eEZRVUZGTEZGQlFWRTdWMEZCU3l4RFFVRkRMRWRCUVVrc1EwRkJReXhEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZCTEVkQlFVa3NVVUZCVVN4QlFVRkRPME5CUVVFN096czdPenM3T3pzN08wRkJRVU1zUVVGWE5VUXNTVUZCVFN4UlFVRlJMRmRCUVZJc1VVRkJVU3hIUVVGSExGVkJRVU1zUTBGQlF5eEZRVUZ4UWp0UlFVRnVRaXhEUVVGRExIbEVRVUZITEZWQlFWVTdPenRCUVVWMFF5eFJRVUZKTEZkQmFFVktMRXRCUVVzc1JVRm5SVXNzUTBGQlF5eERRVUZETEVWQlFVVTdRVUZEVml4bFFVRlBMRlZCUVZVc1EwRkJReXhEUVVGRExFVkJRVVVzUTBGQlF5eERRVUZET3pzN1FVRkJReXhMUVVjelFpeE5RVUZOTzBGQlEwZ3NaMEpCUVUwc1RVRkJUU3hIUVVGSExGVkJRVlVzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4RlFVRkZMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF6dEJRVU53UXl4blFrRkJUU3hOUVVGTkxFZEJRVWNzVlVGQlZTeERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRVZCUVVVc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETzBGQlEzQkRMR2RDUVVGTkxFMUJRVTBzUjBGQlJ5eEJRVUZETEZkQmRrVndRaXhMUVVGTExFVkJkVVZ4UWl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFZEJRVWtzVlVGQlZTeERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRVZCUVVVc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXpzN1FVRkZka1FzYlVKQlFVOHNTVUZCU1N4RFFVRkRMRWxCUVVrc1EwRkJReXhUUVVGRExFMUJRVTBzUlVGQlNTeERRVUZETEdGQlFVc3NUVUZCVFN4RlFVRkpMRU5CUVVNc1EwRkJReXhaUVVGSkxFMUJRVTBzUlVGQlNTeERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRPMU5CUTI1Rk8wTkJRMG83T3pzN096czdPenM3TzBGQlFVTXNRVUZYU3l4SlFVRk5MRlZCUVZVc1YwRkJWaXhWUVVGVkxFZEJRVWNzVlVGQlF5eERRVUZETEVWQlFVVXNRMEZCUXp0WFFVRkxMRWxCUVVrc1EwRkJReXhKUVVGSkxFTkJRVU1zUVVGQlF5eERRVUZETEVkQlFVY3NRMEZCUXl4SFFVRkxMRU5CUVVNc1IwRkJSeXhEUVVGRExFRkJRVU1zUTBGQlF6dERRVUZCT3pzN096czdPenM3T3pzN08wRkJRVU1zUVVGaE1VUXNTVUZCVFN4dlFrRkJiMElzVjBGQmNFSXNiMEpCUVc5Q0xFZEJRVWNzVlVGQlF5eFJRVUZSTEVWQlFVVXNTVUZCU1N4RlFVRkZMRVZCUVVVN1YwRkJTeXhCUVVGRExFTkJRVVVzVVVGQlVTeEhRVUZITEVsQlFVa3NSMEZCU3l4UlFVRlJMRWRCUVVjc1JVRkJSU3hCUVVGRExFZEJRVWNzU1VGQlNUdERRVUZCT3pzN096czdPenM3T3pzN096dEJRVUZETEVGQlkyeEhMRWxCUVUwc2IwSkJRVzlDTEZkQlFYQkNMRzlDUVVGdlFpeEhRVUZITEZWQlFVTXNTMEZCU3l4RlFVRkZMRWxCUVVrc1JVRkJSU3hGUVVGRk8xZEJRVXNzUTBGQlF5eExRVUZMTEVkQlFVY3NTVUZCU1N4RFFVRkJMRWxCUVVzc1JVRkJSU3hIUVVGSExFbEJRVWtzUTBGQlFTeEJRVUZETzBOQlFVRTdPenM3T3pzN096czdPMEZCUVVNc1FVRlhMMFVzU1VGQlRTeE5RVUZOTEZkQlFVNHNUVUZCVFN4SFFVRkhMRlZCUVVNc1EwRkJReXhGUVVGRkxFTkJRVU1zUlVGQlN6dEJRVU0xUWl4UlFVRk5MRTFCUVUwc1IwRkJSeXhGUVVGRkxFTkJRVU03TzBGQlJXeENMRk5CUVVzc1NVRkJTU3hIUVVGSExFbEJRVWtzUTBGQlF5eEZRVUZGTzBGQlEyWXNXVUZCU1N4RFFVRkRMRU5CUVVNc1kwRkJZeXhEUVVGRExFZEJRVWNzUTBGQlF5eEZRVUZGTzBGQlEzWkNMR3RDUVVGTkxFTkJRVU1zUjBGQlJ5eERRVUZETEVkQlFVY3NWMEZzU1hSQ0xGZEJRVmNzUlVGclNYVkNMRU5CUVVNc1JVRkJSU3hIUVVGSExFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTXNSMEZCUnl4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRExFZEJRVWNzUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXp0VFFVTXpSRHRMUVVOS096dEJRVVZFTEZkQlFVOHNUVUZCVFN4RFFVRkRPME5CUTJwQ096czdPenM3T3pzN08wRkJRVU1zUVVGVlN5eEpRVUZOTEhsQ1FVRjVRaXhYUVVGNlFpeDVRa0ZCZVVJc1IwRkJSeXhWUVVGRExFMUJRVTBzUlVGQlJTeExRVUZMTEVWQlFVVXNVVUZCVVN4RlFVRkxPMEZCUTJ4RkxGTkJRVXNzUjBGQlJ5eG5Ra0ZCWjBJc1EwRkJReXhMUVVGTExFTkJRVU1zUTBGQlF6czdRVUZGYUVNc1YwRkJUenRCUVVOSUxGTkJRVU1zUlVGQlJTeFJRVUZSTEVkQlFVY3NTVUZCU1N4RFFVRkRMRWRCUVVjc1EwRkJReXhMUVVGTExFTkJRVU1zUjBGQlJ5eE5RVUZOTEVOQlFVTXNRMEZCUXp0QlFVTjRReXhUUVVGRExFVkJRVVVzVVVGQlVTeEhRVUZITEVsQlFVa3NRMEZCUXl4SFFVRkhMRU5CUVVNc1MwRkJTeXhEUVVGRExFZEJRVWNzVFVGQlRTeERRVUZETEVOQlFVTTdTMEZETTBNc1EwRkJRenREUVVOTU96czdPenM3T3p0QlFVRkRMRUZCVVVzc1NVRkJUU3huUWtGQlowSXNWMEZCYUVJc1owSkJRV2RDTEVkQlFVY3NWVUZCUXl4UFFVRlBPMWRCUVVzc1QwRkJUeXhIUVVGSExFZEJRVWNzUjBGQlJ5eEpRVUZKTEVOQlFVTXNSVUZCUlR0RFFVRkJPenM3T3pzN096czdRVUZCUXl4QlFWTTVSQ3hKUVVGTkxFMUJRVTBzVjBGQlRpeE5RVUZOTEVkQlFVYzdVVUZCUXl4SFFVRkhMSGxFUVVGSExFTkJRVU03VVVGQlJTeEhRVUZITEhsRVFVRkhMRU5CUVVNN1YwRkJTeXhKUVVGSkxFTkJRVU1zVFVGQlRTeEZRVUZGTEVsQlFVa3NSMEZCUnl4SFFVRkhMRWRCUVVjc1EwRkJRU3hCUVVGRExFZEJRVWNzUjBGQlJ6dERRVUZCT3pzN096czdPenM3T3pzN1FVRkJReXhCUVZsMlJTeEpRVUZOTEdGQlFXRXNWMEZCWWl4aFFVRmhMRWRCUVVjc1ZVRkJReXhQUVVGUExFVkJRVVVzVVVGQlVTeEZRVUZMTzBGQlEyaEVMRkZCUVVrc1VVRkJVU3hIUVVGSExFOUJRVThzUTBGQlF6dEJRVU4yUWl4UlFVRk5MRkZCUVZFc1IwRkJSeXhSUVVGUkxFTkJRVU1zUzBGQlN5eERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRPMEZCUTNKRExGRkJRVTBzVVVGQlVTeEhRVUZITEZGQlFWRXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJRenM3TUVKQlExQXNWMEYyVEhSQ0xHTkJRV01zUlVGMVRIVkNMRkZCUVZFc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF6czdVVUZCTTBNc1NVRkJTU3h0UWtGQlNpeEpRVUZKTzFGQlFVVXNTMEZCU3l4dFFrRkJUQ3hMUVVGTE96dEJRVVZxUWl4VFFVRkxMRWRCUVVjc1ZVRkJWU3hEUVVGRExFdEJRVXNzUTBGQlF5eERRVUZET3p0QlFVVXhRaXhaUVVGUkxGRkJRVkU3UVVGRGFFSXNZVUZCU3l4SFFVRkhPMEZCUTBvc2IwSkJRVkVzU1VGQlNTeExRVUZMTEVOQlFVTTdRVUZEYkVJc2EwSkJRVTA3UVVGQlFTeEJRVU5XTEdGQlFVc3NSMEZCUnp0QlFVTktMRzlDUVVGUkxFbEJRVWtzUzBGQlN5eERRVUZETzBGQlEyeENMR3RDUVVGTk8wRkJRVUVzUVVGRFZpeGhRVUZMTEVkQlFVYzdRVUZEU2l4dlFrRkJVU3hKUVVGSkxFdEJRVXNzUTBGQlF6dEJRVU5zUWl4clFrRkJUVHRCUVVGQkxFRkJRMVlzWVVGQlN5eEhRVUZITzBGQlEwb3NiMEpCUVZFc1NVRkJTU3hMUVVGTExFTkJRVU03UVVGRGJFSXNhMEpCUVUwN1FVRkJRU3hMUVVOVU96dEJRVVZFTEZGQlFVa3NTVUZCU1N4RlFVRkZPMEZCUTA0c1owSkJRVkVzU1VGQlNTeEpRVUZKTEVOQlFVTTdTMEZEY0VJN08wRkJSVVFzVjBGQlR5eFJRVUZSTEVOQlFVTTdRMEZEYmtJN096czdPenM3T3pzN096dEJRVUZETEVGQldVc3NTVUZCVFN4UlFVRlJMRmRCUVZJc1VVRkJVU3hIUVVGSExGVkJRVU1zUzBGQlN5eEZRVUZGTEVkQlFVY3NSVUZCUlN4SFFVRkhPMWRCUVVzc1NVRkJTU3hEUVVGRExFZEJRVWNzUTBGQlF5eEpRVUZKTEVOQlFVTXNSMEZCUnl4RFFVRkRMRXRCUVVzc1JVRkJSU3hIUVVGSExFTkJRVU1zUlVGQlJTeEhRVUZITEVOQlFVTTdRMEZCUVRzN096czdPenM3T3p0QlFVRkRMRUZCVlRGRkxFbEJRVTBzVFVGQlRTeFhRVUZPTEUxQlFVMHNSMEZCUnl4VlFVRkRMRkZCUVZFc1JVRkJSU3hSUVVGUkxFVkJRVVVzVVVGQlVUdFJRVUZGTEZOQlFWTXNlVVJCUVVjc1EwRkJRenRYUVVGTExGZEJjRTl1UlN4VFFVRlRMRVZCYjA5dlJTeFJRVUZSTEVkQlFVa3NVVUZCVVN4SlFVRkpMRkZCUVZFc1IwRkJSeXhSUVVGUkxFTkJRVUVzUVVGQlF5eEhRVUZITEVsQlFVa3NRMEZCUXl4SFFVRkhMRU5CUVVNc1UwRkJVeXhGUVVGRkxGRkJRVkVzUTBGQlF5eEJRVUZETEVOQlFVTTdRMEZCUVRzN096czdPenM3UVVGQlF5eEJRVkY2U2l4SlFVRk5MR0ZCUVdFc1YwRkJZaXhoUVVGaExFZEJRVWNzVlVGQlF5eEhRVUZITEVWQlFVVXNZVUZCWVR0WFFVRkxMRUZCUVVNc1YwRTVUMnhFTEV0QlFVc3NSVUU0VDIxRUxFZEJRVWNzUTBGQlF5eEhRVUZKTEVkQlFVY3NTVUZCU1N4SlFVRkpMRWRCUVVjc1lVRkJZU3hEUVVGQkxFRkJRVU1zUjBGQlJ5eERRVUZETzBOQlFVRTdPenM3T3pzN08wRkJRVU1zUVVGUk9VWXNTVUZCVFN4alFVRmpMRmRCUVdRc1kwRkJZeXhIUVVGSExGVkJRVU1zVVVGQlVTeEZRVUZGTEdGQlFXRTdWMEZCU3l4UlFVRlJMRWxCUVVrc1NVRkJTU3hIUVVGSExHRkJRV0VzUTBGQlFTeEJRVUZETzBOQlFVRTdPenM3T3pzN096dEJRVUZETEVGQlUzUkdMRWxCUVUwc1dVRkJXU3hYUVVGYUxGbEJRVmtzUjBGQlJ5eFZRVUZETEZGQlFWRXNSVUZCUlN4TFFVRkxMRVZCUVVzN1FVRkROME1zVVVGQlRTeFBRVUZQTEVkQlFVY3NRMEZCUXl4SlFVRkpMRXRCUVVzc1IwRkJSeXhEUVVGRExFTkJRVUVzUVVGQlF5eERRVUZETzBGQlEyaERMRkZCUVUwc1RVRkJUU3hIUVVGSExFTkJRVU1zUjBGQlNTeERRVUZETEVkQlFVY3NTMEZCU3l4QlFVRkRMRU5CUVVNN1FVRkRMMElzVVVGQlRTeG5Ra0ZCWjBJc1IwRkJSeXhKUVVGSkxFTkJRVU1zUjBGQlJ5eERRVUZETEZGQlFWRXNSMEZCUnl4TlFVRk5MRVZCUVVVc1EwRkJReXhEUVVGRExFTkJRVU03TzBGQlJYaEVMRmRCUVU4c1NVRkJTU3hEUVVGRExFdEJRVXNzUTBGQlF5eG5Ra0ZCWjBJc1IwRkJSeXhQUVVGUExFTkJRVU1zUjBGQlJ5eFBRVUZQTEVOQlFVTTdRMEZETTBRc1EwRkJReUlzSW1acGJHVWlPaUpqWVd4akxtcHpJaXdpYzI5MWNtTmxVbTl2ZENJNklpOVZjMlZ5Y3k5TllYUjBVR1Z5Y25rdlUybDBaWE12Y0c5d2JXOTBhVzl1SWl3aWMyOTFjbU5sYzBOdmJuUmxiblFpT2xzaWFXMXdiM0owSUh0Y2JpQWdJQ0JvWVhOUWNtOXdaWEowZVN4Y2JpQWdJQ0JwYzA1MWJTeGNiaUFnSUNCemNHeHBkRlpoYkhWbFZXNXBkQ3hjYmlBZ0lDQjBiMFJsWTJsdFlXeGNibjBnWm5KdmJTQW5MaTkxZEdsc2N5YzdYRzVjYm1OdmJuTjBJRnBGVWs5ZlVFOUpUbFFnUFNCN1hHNGdJQ0FnZURvZ01DeGNiaUFnSUNCNU9pQXdMRnh1SUNBZ0lIbzZJREJjYm4wN1hHNWNibU52Ym5OMElHUnBjM1JoYm1ObE1VUWdQU0FvWVN3Z1lpa2dQVDRnVFdGMGFDNWhZbk1vWVNBdElHSXBPMXh1WEc0dktseHVJQ0FnSUVGdVoyeGxJR0psZEhkbFpXNGdjRzlwYm5SelhHNGdJQ0FnWEc0Z0lDQWdWSEpoYm5Oc1lYUmxjeUIwYUdVZ2FIbHdiM1JvWlhScFkyRnNJR3hwYm1VZ2MyOGdkR2hoZENCMGFHVWdKMlp5YjIwbklHTnZiM0prYVc1aGRHVnpYRzRnSUNBZ1lYSmxJR0YwSURBc01Dd2dkR2hsYmlCeVpYUjFjbTRnZEdobElHRnVaMnhsSUhWemFXNW5JQzVoYm1kc1pVWnliMjFEWlc1MFpYSW9LVnh1SUNBZ0lGeHVJQ0FnSUVCd1lYSmhiU0JiYjJKcVpXTjBYVG9nV0NCaGJtUWdXU0JqYjI5eVpHbHVZWFJsY3lCdlppQm1jbTl0SUhCdmFXNTBYRzRnSUNBZ1FIQmhjbUZ0SUZ0dlltcGxZM1JkT2lCWUlHRnVaQ0JaSUdOdmNtUnBibUYwWlhNZ2IyWWdkRzhnY0c5cGJuUmNiaUFnSUNCQWNtVjBkWEp1SUZ0eVlXUnBZVzVkT2lCQmJtZHNaU0JpWlhSM1pXVnVJSFJvWlNCMGQyOGdjRzlwYm5SeklHbHVJSEpoWkdsaGJuTmNiaW92WEc1bGVIQnZjblFnWTI5dWMzUWdZVzVuYkdVZ1BTQW9ZU3dnWWlBOUlGcEZVazlmVUU5SlRsUXBJRDArSUhKaFpHbGhibk5VYjBSbFozSmxaWE1vVFdGMGFDNWhkR0Z1TWloaExuZ2dMU0JpTG5nc0lHRXVlU0F0SUdJdWVTa3BPMXh1WEc0dktseHVJQ0FnSUVOdmJuWmxjblFnWkdWbmNtVmxjeUIwYnlCeVlXUnBZVzV6WEc0Z0lDQWdYRzRnSUNBZ1FIQmhjbUZ0SUZ0dWRXMWlaWEpkT2lCV1lXeDFaU0JwYmlCa1pXZHlaV1Z6WEc0Z0lDQWdRSEpsZEhWeWJpQmJiblZ0WW1WeVhUb2dWbUZzZFdVZ2FXNGdjbUZrYVdGdWMxeHVLaTljYm1WNGNHOXlkQ0JqYjI1emRDQmtaV2R5WldWelZHOVNZV1JwWVc1eklEMGdLR1JsWjNKbFpYTXBJRDArSUdSbFozSmxaWE1nS2lCTllYUm9MbEJKSUM4Z01UZ3dPMXh1WEc0dktseHVJQ0FnSUVScGJHRjBaVnh1SUNBZ0lGeHVJQ0FnSUVOb1lXNW5aU0IwYUdVZ2NISnZaM0psYzNOcGIyNGdZbVYwZDJWbGJpQmhJR0Z1WkNCaUlHRmpZMjl5WkdsdVp5QjBieUJrYVd4aGRHbHZiaTVjYmlBZ0lDQmNiaUFnSUNCVGJ5QmthV3hoZEdsdmJpQTlJREF1TlNCM2IzVnNaQ0JqYUdGdVoyVmNiaUFnSUNCY2JpQWdJQ0JoSUMwdExTMHRMUzB0TFNCaVhHNGdJQ0FnWEc0Z0lDQWdkRzljYmlBZ0lDQmNiaUFnSUNCaElDMHRMUzBnWWx4dUlDQWdJRnh1SUNBZ0lFQndZWEpoYlNCYmJuVnRZbVZ5WFRvZ1VISmxkbWx2ZFhNZ2RtRnNkV1ZjYmlBZ0lDQkFjR0Z5WVcwZ1cyNTFiV0psY2wwNklFTjFjbkpsYm5RZ2RtRnNkV1ZjYmlBZ0lDQkFjR0Z5WVcwZ1cyNTFiV0psY2wwNklFUnBiR0YwWlNCd2NtOW5jbVZ6Y3lCaWVTQjRYRzRnSUNBZ1FISmxkSFZ5YmlCYmJuVnRZbVZ5WFRvZ1VISmxkbWx2ZFhNZ2RtRnNkV1VnY0d4MWN5QjBhR1VnWkdsc1lYUmxaQ0JrYVdabVpYSmxibU5sWEc0cUwxeHVaWGh3YjNKMElHTnZibk4wSUdScGJHRjBaU0E5SUNoaExDQmlMQ0JrYVd4aGRHbHZiaWtnUFQ0Z1lTQXJJQ2dvWWlBdElHRXBJQ29nWkdsc1lYUnBiMjRwTzF4dVhHNHZLbHh1SUNBZ0lFUnBjM1JoYm1ObFhHNGdJQ0FnWEc0Z0lDQWdVbVYwZFhKdWN5QjBhR1VnWkdsemRHRnVZMlVnWW1WMGQyVmxiaUIwZDI4Z2JpQmthVzFsYm5OcGIyNWhiQ0J3YjJsdWRITXVYRzRnSUNBZ1hHNGdJQ0FnUUhCaGNtRnRJRnR2WW1wbFkzUXZiblZ0WW1WeVhUb2dlQ0JoYm1RZ2VTQnZjaUJxZFhOMElIZ2diMllnY0c5cGJuUWdRVnh1SUNBZ0lFQndZWEpoYlNCYmIySnFaV04wTDI1MWJXSmxjbDA2SUNodmNIUnBiMjVoYkNrNklIZ2dZVzVrSUhrZ2IzSWdhblZ6ZENCNElHOW1JSEJ2YVc1MElFSmNiaUFnSUNCQWNtVjBkWEp1SUZ0dWRXMWlaWEpkT2lCVWFHVWdaR2x6ZEdGdVkyVWdZbVYwZDJWbGJpQjBhR1VnZEhkdklIQnZhVzUwYzF4dUtpOWNibVY0Y0c5eWRDQmpiMjV6ZENCa2FYTjBZVzVqWlNBOUlDaGhMQ0JpSUQwZ1drVlNUMTlRVDBsT1ZDa2dQVDRnZTF4dUlDQWdJQzh2SURGRUlHUnBiV1Z1YzJsdmJuTmNiaUFnSUNCcFppQW9hWE5PZFcwb1lTa3BJSHRjYmlBZ0lDQWdJQ0FnY21WMGRYSnVJR1JwYzNSaGJtTmxNVVFvWVN3Z1lpazdYRzVjYmlBZ0lDQXZMeUJOZFd4MGFTMWthVzFsYm5OcGIyNWhiRnh1SUNBZ0lIMGdaV3h6WlNCN1hHNGdJQ0FnSUNBZ0lHTnZibk4wSUhoRVpXeDBZU0E5SUdScGMzUmhibU5sTVVRb1lTNTRMQ0JpTG5ncE8xeHVJQ0FnSUNBZ0lDQmpiMjV6ZENCNVJHVnNkR0VnUFNCa2FYTjBZVzVqWlRGRUtHRXVlU3dnWWk1NUtUdGNiaUFnSUNBZ0lDQWdZMjl1YzNRZ2VrUmxiSFJoSUQwZ0tHbHpUblZ0S0dFdWVpa3BJRDhnWkdsemRHRnVZMlV4UkNoaExub3NJR0l1ZWlrZ09pQXdPMXh1WEc0Z0lDQWdJQ0FnSUhKbGRIVnliaUJOWVhSb0xuTnhjblFvS0hoRVpXeDBZU0FxS2lBeUtTQXJJQ2g1UkdWc2RHRWdLaW9nTWlrZ0t5QW9la1JsYkhSaElDb3FJRElwS1R0Y2JpQWdJQ0I5WEc1OU8xeHVJRnh1THlwY2JpQWdJQ0JJZVhCdmRHVnVkWE5sWEc0Z0lDQWdYRzRnSUNBZ1VtVjBkWEp1Y3lCMGFHVWdhSGx3YjNSbGJuVnpaU3dnYzJsa1pTQkRMQ0JuYVhabGJpQjBhR1VnYkdWdVozUm9jeUJ2WmlCemFXUmxjeUJCSUdGdVpDQkNMbHh1SUNBZ0lGeHVJQ0FnSUVCd1lYSmhiU0JiYm5WdFltVnlYVG9nVEdWdVozUm9JRzltSUVGY2JpQWdJQ0JBY0dGeVlXMGdXMjUxYldKbGNsMDZJRXhsYm1kMGFDQnZaaUJDWEc0Z0lDQWdRSEpsZEhWeWJpQmJiblZ0WW1WeVhUb2dUR1Z1WjNSb0lHOW1JRU5jYmlvdlhHNWxlSEJ2Y25RZ1kyOXVjM1FnYUhsd2IzUmxiblZ6WlNBOUlDaGhMQ0JpS1NBOVBpQk5ZWFJvTG5OeGNuUW9LR0VnS2lCaEtTQXJJQ2hpSUNvZ1lpa3BPMXh1WEc0dktseHVJQ0FnSUZaaGJIVmxJR2x1SUhKaGJtZGxJR1p5YjIwZ2NISnZaM0psYzNOY2JpQWdJQ0JjYmlBZ0lDQkhhWFpsYmlCaElHeHZkMlZ5SUd4cGJXbDBJR0Z1WkNCaGJpQjFjSEJsY2lCc2FXMXBkQ3dnZDJVZ2NtVjBkWEp1SUhSb1pTQjJZV3gxWlNCM2FYUm9hVzVjYmlBZ0lDQjBhR0YwSUhKaGJtZGxJR0Z6SUdWNGNISmxjM05sWkNCaWVTQndjbTluY21WemN5QW9ZU0J1ZFcxaVpYSWdabkp2YlNBd0xURXBYRzRnSUNBZ1hHNGdJQ0FnUUhCaGNtRnRJRnR1ZFcxaVpYSmRPaUJVYUdVZ2NISnZaM0psYzNNZ1ltVjBkMlZsYmlCc2IzZGxjaUJoYm1RZ2RYQndaWElnYkdsdGFYUnpJR1Y0Y0hKbGMzTmxaQ0F3TFRGY2JpQWdJQ0JBY0dGeVlXMGdXMjUxYldKbGNsMDZJRXh2ZDJWeUlHeHBiV2wwSUc5bUlISmhibWRsWEc0Z0lDQWdRSEJoY21GdElGdHVkVzFpWlhKZE9pQlZjSEJsY2lCc2FXMXBkQ0J2WmlCeVlXNW5aVnh1SUNBZ0lFQnlaWFIxY200Z1cyNTFiV0psY2wwNklGWmhiSFZsSUdGeklHTmhiR04xYkdGMFpXUWdabkp2YlNCd2NtOW5jbVZ6Y3lCM2FYUm9hVzRnY21GdVoyVWdLRzV2ZENCc2FXMXBkR1ZrSUhkcGRHaHBiaUJ5WVc1blpTbGNiaW92WEc1bGVIQnZjblFnWTI5dWMzUWdaMlYwVm1Gc2RXVkdjbTl0VUhKdlozSmxjM01nUFNBb2NISnZaM0psYzNNc0lHWnliMjBzSUhSdktTQTlQaUFvTFNCd2NtOW5jbVZ6Y3lBcUlHWnliMjBwSUNzZ0tIQnliMmR5WlhOeklDb2dkRzhwSUNzZ1puSnZiVHRjYmx4dUx5cGNiaUFnSUNCUWNtOW5jbVZ6Y3lCM2FYUm9hVzRnWjJsMlpXNGdjbUZ1WjJWY2JpQWdJQ0JjYmlBZ0lDQkhhWFpsYmlCaElHeHZkMlZ5SUd4cGJXbDBJR0Z1WkNCaGJpQjFjSEJsY2lCc2FXMXBkQ3dnZDJVZ2NtVjBkWEp1SUhSb1pTQndjbTluY21WemMxeHVJQ0FnSUNobGVIQnlaWE56WldRZ1lYTWdZU0J1ZFcxaVpYSWdNQzB4S1NCeVpYQnlaWE5sYm5SbFpDQmllU0IwYUdVZ1oybDJaVzRnZG1Gc2RXVXNJR0Z1WkZ4dUlDQWdJR3hwYldsMElIUm9ZWFFnY0hKdlozSmxjM01nZEc4Z2QybDBhR2x1SURBdE1TNWNiaUFnSUNCY2JpQWdJQ0JBY0dGeVlXMGdXMjUxYldKbGNsMDZJRlpoYkhWbElIUnZJR1pwYm1RZ2NISnZaM0psYzNNZ2QybDBhR2x1SUdkcGRtVnVJSEpoYm1kbFhHNGdJQ0FnUUhCaGNtRnRJRnR1ZFcxaVpYSmRPaUJNYjNkbGNpQnNhVzFwZENCY2JpQWdJQ0JBY0dGeVlXMGdXMjUxYldKbGNsMDZJRlZ3Y0dWeUlHeHBiV2wwWEc0Z0lDQWdRSEpsZEhWeWJpQmJiblZ0WW1WeVhUb2dVSEp2WjNKbGMzTWdiMllnZG1Gc2RXVWdkMmwwYUdsdUlISmhibWRsSUdGeklHVjRjSEpsYzNObFpDQXdMVEZjYmlvdlhHNWxlSEJ2Y25RZ1kyOXVjM1FnWjJWMFVISnZaM0psYzNOR2NtOXRWbUZzZFdVZ1BTQW9kbUZzZFdVc0lHWnliMjBzSUhSdktTQTlQaUFvZG1Gc2RXVWdMU0JtY205dEtTQXZJQ2gwYnlBdElHWnliMjBwTzF4dVhHNHZLbHh1SUNBZ0lFOW1abk5sZENCaVpYUjNaV1Z1SUhSM2J5QnZZbXBsWTNSeklHOW1JRzUxYldKbGNuTmNibHh1SUNBZ0lFbG1JSEJ5YjNCbGNuUjVJR2x6SUdadmRXNWtJR2x1SUdJZ2JtOTBJSEJ5WlhObGJuUWdhVzRnWVN3Z2FYUWdkMmxzYkNCeVpYUjFjbTRnWURCZ0lHWnZjaUIwYUdGMElIQnliM0F1WEc0Z0lDQWdYRzRnSUNBZ1FIQmhjbUZ0SUZ0UWIybHVkRjA2SUVacGNuTjBJRzlpYW1WamRGeHVJQ0FnSUVCd1lYSmhiU0JiVUc5cGJuUmRPaUJUWldOdmJtUWdiMkpxWldOMFhHNGdJQ0FnUUhKbGRIVnliaUJiVDJabWMyVjBYVG9nUkdsemRHRnVZMlVnYldWMGNtbGpjeUJpWlhSM1pXVnVJSFIzYnlCd2IybHVkSE5jYmlvdlhHNWxlSEJ2Y25RZ1kyOXVjM1FnYjJabWMyVjBJRDBnS0dFc0lHSXBJRDArSUh0Y2JpQWdJQ0JqYjI1emRDQnZabVp6WlhRZ1BTQjdmVHRjYmx4dUlDQWdJR1p2Y2lBb2JHVjBJR3RsZVNCcGJpQmlLU0I3WEc0Z0lDQWdJQ0FnSUdsbUlDaGlMbWhoYzA5M2JsQnliM0JsY25SNUtHdGxlU2twSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJRzltWm5ObGRGdHJaWGxkSUQwZ2FHRnpVSEp2Y0dWeWRIa29ZU3dnYTJWNUtTQS9JR0piYTJWNVhTQXRJR0ZiYTJWNVhTQTZJREE3WEc0Z0lDQWdJQ0FnSUgxY2JpQWdJQ0I5WEc1Y2JpQWdJQ0J5WlhSMWNtNGdiMlptYzJWME8xeHVmVHRjYmx4dUx5cGNiaUFnSUNCUWIybHVkQ0JtY205dElHRnVaMnhsSUdGdVpDQmthWE4wWVc1alpWeHVJQ0FnSUZ4dUlDQWdJRUJ3WVhKaGJTQmJiMkpxWldOMFhUb2dNa1FnY0c5cGJuUWdiMllnYjNKcFoybHVYRzRnSUNBZ1FIQmhjbUZ0SUZ0dWRXMWlaWEpkT2lCQmJtZHNaU0JtY205dElHOXlhV2RwYmx4dUlDQWdJRUJ3WVhKaGJTQmJiblZ0WW1WeVhUb2dSR2x6ZEdGdVkyVWdabkp2YlNCdmNtbG5hVzVjYmlBZ0lDQkFjbVYwZFhKdUlGdHZZbXBsWTNSZE9pQkRZV3hqZFd4aGRHVmtJREpFSUhCdmFXNTBYRzRxTDF4dVpYaHdiM0owSUdOdmJuTjBJSEJ2YVc1MFJuSnZiVUZ1WjJ4bFFXNWtSR2x6ZEdGdVkyVWdQU0FvYjNKcFoybHVMQ0JoYm1kc1pTd2daR2x6ZEdGdVkyVXBJRDArSUh0Y2JpQWdJQ0JoYm1kc1pTQTlJR1JsWjNKbFpYTlViMUpoWkdsaGJuTW9ZVzVuYkdVcE8xeHVYRzRnSUNBZ2NtVjBkWEp1SUh0Y2JpQWdJQ0FnSUNBZ2VEb2daR2x6ZEdGdVkyVWdLaUJOWVhSb0xtTnZjeWhoYm1kc1pTa2dLeUJ2Y21sbmFXNHVlQ3hjYmlBZ0lDQWdJQ0FnZVRvZ1pHbHpkR0Z1WTJVZ0tpQk5ZWFJvTG5OcGJpaGhibWRzWlNrZ0t5QnZjbWxuYVc0dWVWeHVJQ0FnSUgwN1hHNTlPMXh1WEc0dktseHVJQ0FnSUVOdmJuWmxjblFnY21Ga2FXRnVjeUIwYnlCa1pXZHlaV1Z6WEc0Z0lDQWdYRzRnSUNBZ1FIQmhjbUZ0SUZ0dWRXMWlaWEpkT2lCV1lXeDFaU0JwYmlCeVlXUnBZVzV6WEc0Z0lDQWdRSEpsZEhWeWJpQmJiblZ0WW1WeVhUb2dWbUZzZFdVZ2FXNGdaR1ZuY21WbGMxeHVLaTljYm1WNGNHOXlkQ0JqYjI1emRDQnlZV1JwWVc1elZHOUVaV2R5WldWeklEMGdLSEpoWkdsaGJuTXBJRDArSUhKaFpHbGhibk1nS2lBeE9EQWdMeUJOWVhSb0xsQkpPMXh1WEc0dktseHVJQ0FnSUZKbGRIVnliaUJ5WVc1a2IyMGdiblZ0WW1WeUlHSmxkSGRsWlc0Z2NtRnVaMlZjYmlBZ0lDQmNiaUFnSUNCQWNHRnlZVzBnVzI1MWJXSmxjbDBnS0c5d2RHbHZibUZzS1RvZ1QzVjBjSFYwSUcxcGJtbHRkVzFjYmlBZ0lDQkFjR0Z5WVcwZ1cyNTFiV0psY2wwZ0tHOXdkR2x2Ym1Gc0tUb2dUM1YwY0hWMElHMWhlR2x0ZFcxY2JpQWdJQ0JBY21WMGRYSnVJRnR1ZFcxaVpYSmRPaUJTWVc1a2IyMGdiblZ0WW1WeUlIZHBkR2hwYmlCeVlXNW5aU3dnYjNJZ01DQmhibVFnTVNCcFppQnViMjVsSUhCeWIzWnBaR1ZrWEc0cUwxeHVaWGh3YjNKMElHTnZibk4wSUhKaGJtUnZiU0E5SUNodGFXNGdQU0F3TENCdFlYZ2dQU0F4S1NBOVBpQk5ZWFJvTG5KaGJtUnZiU2dwSUNvZ0tHMWhlQ0F0SUcxcGJpa2dLeUJ0YVc0N1hHNWNiaThxWEc0Z0lDQWdRMkZzWTNWc1lYUmxJSEpsYkdGMGFYWmxJSFpoYkhWbFhHNGdJQ0FnWEc0Z0lDQWdWR0ZyWlhNZ2RHaGxJRzl3WlhKaGRHOXlJR0Z1WkNCMllXeDFaU0JtY205dElHRWdjM1J5YVc1bkxDQnBaU0JjSWlzOU5Wd2lMQ0JoYm1RZ1lYQndiR2xsYzF4dUlDQWdJSFJ2SUhSb1pTQmpkWEp5Wlc1MElIWmhiSFZsSUhSdklISmxjMjlzZG1VZ1lTQnVaWGNnZEdGeVoyVjBMbHh1SUNBZ0lGeHVJQ0FnSUVCd1lYSmhiU0JiYm5WdFltVnlYVG9nUTNWeWNtVnVkQ0IyWVd4MVpWeHVJQ0FnSUVCd1lYSmhiU0JiYzNSeWFXNW5YVG9nVW1Wc1lYUnBkbVVnZG1Gc2RXVmNiaUFnSUNCQWNtVjBkWEp1SUZ0dWRXMWlaWEpkT2lCT1pYY2dkbUZzZFdWY2Jpb3ZYRzVsZUhCdmNuUWdZMjl1YzNRZ2NtVnNZWFJwZG1WV1lXeDFaU0E5SUNoamRYSnlaVzUwTENCeVpXeGhkR2wyWlNrZ1BUNGdlMXh1SUNBZ0lHeGxkQ0J1WlhkV1lXeDFaU0E5SUdOMWNuSmxiblE3WEc0Z0lDQWdZMjl1YzNRZ1pYRjFZWFJwYjI0Z1BTQnlaV3hoZEdsMlpTNXpjR3hwZENnblBTY3BPMXh1SUNBZ0lHTnZibk4wSUc5d1pYSmhkRzl5SUQwZ1pYRjFZWFJwYjI1Yk1GMDdYRzRnSUNBZ2JHVjBJSHNnZFc1cGRDd2dkbUZzZFdVZ2ZTQTlJSE53YkdsMFZtRnNkV1ZWYm1sMEtHVnhkV0YwYVc5dVd6RmRLVHRjYmx4dUlDQWdJSFpoYkhWbElEMGdjR0Z5YzJWR2JHOWhkQ2gyWVd4MVpTazdYRzVjYmlBZ0lDQnpkMmwwWTJnZ0tHOXdaWEpoZEc5eUtTQjdYRzRnSUNBZ1kyRnpaU0FuS3ljNlhHNGdJQ0FnSUNBZ0lHNWxkMVpoYkhWbElDczlJSFpoYkhWbE8xeHVJQ0FnSUNBZ0lDQmljbVZoYXp0Y2JpQWdJQ0JqWVhObElDY3RKenBjYmlBZ0lDQWdJQ0FnYm1WM1ZtRnNkV1VnTFQwZ2RtRnNkV1U3WEc0Z0lDQWdJQ0FnSUdKeVpXRnJPMXh1SUNBZ0lHTmhjMlVnSnlvbk9seHVJQ0FnSUNBZ0lDQnVaWGRXWVd4MVpTQXFQU0IyWVd4MVpUdGNiaUFnSUNBZ0lDQWdZbkpsWVdzN1hHNGdJQ0FnWTJGelpTQW5MeWM2WEc0Z0lDQWdJQ0FnSUc1bGQxWmhiSFZsSUM4OUlIWmhiSFZsTzF4dUlDQWdJQ0FnSUNCaWNtVmhhenRjYmlBZ0lDQjlYRzRnSUNBZ1hHNGdJQ0FnYVdZZ0tIVnVhWFFwSUh0Y2JpQWdJQ0FnSUNBZ2JtVjNWbUZzZFdVZ0t6MGdkVzVwZER0Y2JpQWdJQ0I5WEc1Y2JpQWdJQ0J5WlhSMWNtNGdibVYzVm1Gc2RXVTdYRzU5TzF4dVhHNHZLbHh1SUNBZ0lGSmxjM1J5YVdOMElIWmhiSFZsSUhSdklISmhibWRsWEc0Z0lDQWdYRzRnSUNBZ1VtVjBkWEp1SUhaaGJIVmxJSGRwZEdocGJpQjBhR1VnY21GdVoyVWdiMllnYkc5M1pYSk1hVzFwZENCaGJtUWdkWEJ3WlhKTWFXMXBkRnh1SUNBZ0lGeHVJQ0FnSUVCd1lYSmhiU0JiYm5WdFltVnlYVG9nVm1Gc2RXVWdkRzhnYTJWbGNDQjNhWFJvYVc0Z2NtRnVaMlZjYmlBZ0lDQkFjR0Z5WVcwZ1cyNTFiV0psY2wwNklFeHZkMlZ5SUd4cGJXbDBJRzltSUhKaGJtZGxYRzRnSUNBZ1FIQmhjbUZ0SUZ0dWRXMWlaWEpkT2lCVmNIQmxjaUJzYVcxcGRDQnZaaUJ5WVc1blpWeHVJQ0FnSUVCeVpYUjFjbTRnVzI1MWJXSmxjbDA2SUZaaGJIVmxJR0Z6SUd4cGJXbDBaV1FnZDJsMGFHbHVJR2RwZG1WdUlISmhibWRsWEc0cUwxeHVaWGh3YjNKMElHTnZibk4wSUhKbGMzUnlhV04wSUQwZ0tIWmhiSFZsTENCdGFXNHNJRzFoZUNrZ1BUNGdUV0YwYUM1dFlYZ29UV0YwYUM1dGFXNG9kbUZzZFdVc0lHMWhlQ2tzSUcxcGJpazdYRzVjYmk4cVhHNGdJQ0FnUm5KaGJXVnlZWFJsTFdsdVpHVndaVzVrWlc1MElITnRiMjkwYUdsdVoxeHVYRzRnSUNBZ1FIQmhjbUZ0SUZ0dWRXMWlaWEpkT2lCT1pYY2dkbUZzZFdWY2JpQWdJQ0JBY0dGeVlXMGdXMjUxYldKbGNsMDZJRTlzWkNCMllXeDFaVnh1SUNBZ0lFQndZWEpoYlNCYmJuVnRZbVZ5WFRvZ1JuSmhiV1VnWkhWeVlYUnBiMjVjYmlBZ0lDQkFjR0Z5WVcwZ1cyNTFiV0psY2wwZ0tHOXdkR2x2Ym1Gc0tUb2dVMjF2YjNSb2FXNW5JQ2d3SUdseklHNXZibVVwWEc0cUwxeHVaWGh3YjNKMElHTnZibk4wSUhOdGIyOTBhQ0E5SUNodVpYZFdZV3gxWlN3Z2IyeGtWbUZzZFdVc0lHUjFjbUYwYVc5dUxDQnpiVzl2ZEdocGJtY2dQU0F3S1NBOVBpQjBiMFJsWTJsdFlXd29iMnhrVm1Gc2RXVWdLeUFvWkhWeVlYUnBiMjRnS2lBb2JtVjNWbUZzZFdVZ0xTQnZiR1JXWVd4MVpTa2dMeUJOWVhSb0xtMWhlQ2h6Ylc5dmRHaHBibWNzSUdSMWNtRjBhVzl1S1NrcE8xeHVYRzR2S2x4dUlDQWdJRU52Ym5abGNuUWdlQ0J3WlhJZ2MyVmpiMjVrSUhSdklIQmxjaUJtY21GdFpTQjJaV3h2WTJsMGVTQmlZWE5sWkNCdmJpQm1jSE5jYmlBZ0lDQmNiaUFnSUNCQWNHRnlZVzBnVzI1MWJXSmxjbDA2SUZWdWFYUWdjR1Z5SUhObFkyOXVaRnh1SUNBZ0lFQndZWEpoYlNCYmJuVnRZbVZ5WFRvZ1JuSmhiV1VnWkhWeVlYUnBiMjRnYVc0Z2JYTmNiaW92WEc1bGVIQnZjblFnWTI5dWMzUWdjM0JsWldSUVpYSkdjbUZ0WlNBOUlDaDRjSE1zSUdaeVlXMWxSSFZ5WVhScGIyNHBJRDArSUNocGMwNTFiU2g0Y0hNcEtTQS9JSGh3Y3lBdklDZ3hNREF3SUM4Z1puSmhiV1ZFZFhKaGRHbHZiaWtnT2lBd08xeHVYRzR2S2x4dUlDQWdJRU52Ym5abGNuUWdkbVZzYjJOcGRIa2dhVzUwYnlCMlpXeHBZMmwwZVNCd1pYSWdjMlZqYjI1a1hHNGdJQ0FnWEc0Z0lDQWdRSEJoY21GdElGdHVkVzFpWlhKZE9pQlZibWwwSUhCbGNpQm1jbUZ0WlZ4dUlDQWdJRUJ3WVhKaGJTQmJiblZ0WW1WeVhUb2dSbkpoYldVZ1pIVnlZWFJwYjI0Z2FXNGdiWE5jYmlvdlhHNWxlSEJ2Y25RZ1kyOXVjM1FnYzNCbFpXUlFaWEpUWldOdmJtUWdQU0FvZG1Wc2IyTnBkSGtzSUdaeVlXMWxSSFZ5WVhScGIyNHBJRDArSUhabGJHOWphWFI1SUNvZ0tERXdNREFnTHlCbWNtRnRaVVIxY21GMGFXOXVLVHRjYmx4dUx5cGNiaUFnSUNCRGNtVmhkR1VnYzNSbGNIQmxaQ0IyWlhKemFXOXVJRzltSURBdE1TQndjbTluY21WemMxeHVJQ0FnSUZ4dUlDQWdJRUJ3WVhKaGJTQmJiblZ0WW1WeVhUb2dRM1Z5Y21WdWRDQjJZV3gxWlZ4dUlDQWdJRUJ3WVhKaGJTQmJhVzUwWFRvZ1RuVnRZbVZ5SUc5bUlITjBaWEJ6WEc0Z0lDQWdRSEpsZEhWeWJpQmJiblZ0WW1WeVhUb2dVM1JsY0hCbFpDQjJZV3gxWlZ4dUtpOWNibVY0Y0c5eWRDQmpiMjV6ZENCemRHVndVSEp2WjNKbGMzTWdQU0FvY0hKdlozSmxjM01zSUhOMFpYQnpLU0E5UGlCN1hHNGdJQ0FnWTI5dWMzUWdjMlZuYldWdWRDQTlJREVnTHlBb2MzUmxjSE1nTFNBeEtUdGNiaUFnSUNCamIyNXpkQ0IwWVhKblpYUWdQU0F4SUMwZ0tERWdMeUJ6ZEdWd2N5azdYRzRnSUNBZ1kyOXVjM1FnY0hKdlozSmxjM05QWmxSaGNtZGxkQ0E5SUUxaGRHZ3ViV2x1S0hCeWIyZHlaWE56SUM4Z2RHRnlaMlYwTENBeEtUdGNibHh1SUNBZ0lISmxkSFZ5YmlCTllYUm9MbVpzYjI5eUtIQnliMmR5WlhOelQyWlVZWEpuWlhRZ0x5QnpaV2R0Wlc1MEtTQXFJSE5sWjIxbGJuUTdYRzU5T3lKZGZRPT1cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2luYy9jYWxjLmpzXG4gKiogbW9kdWxlIGlkID0gMThcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF9jcmVhdGVFYXNpbmcgPSByZXF1aXJlKCcuL2NyZWF0ZS1lYXNpbmcnKTtcblxudmFyIF9jcmVhdGVFYXNpbmcyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY3JlYXRlRWFzaW5nKTtcblxudmFyIF9jcmVhdGVCZXppZXIgPSByZXF1aXJlKCcuL2NyZWF0ZS1iZXppZXInKTtcblxudmFyIF9jcmVhdGVCZXppZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY3JlYXRlQmV6aWVyKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuLy8gVmFsdWVzXG4vKlxuICAgIEVhc2luZyBmdW5jdGlvbnNcbiAgICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgXG4gICAgR2VuZXJhdGVzIGFuZCBwcm92aWRlcyBlYXNpbmcgZnVuY3Rpb25zIGJhc2VkIG9uIGJhc2VGdW5jdGlvbiBkZWZpbml0aW9uc1xuICAgIFxuICAgIEEgY2FsbCB0byBlYXNpbmdGdW5jdGlvbi5nZXQoJ2Z1bmN0aW9uTmFtZScpIHJldHVybnMgYSBmdW5jdGlvbiB0aGF0IGNhbiBiZSBwYXNzZWQ6XG4gICAgICAgIEBwYXJhbSBbbnVtYmVyXTogUHJvZ3Jlc3MgMC0xXG4gICAgICAgIEBwYXJhbSBbbnVtYmVyXSAob3B0aW9uYWwpOiBBbXAgbW9kaWZpZXIsIG9ubHkgYWNjZXB0ZWQgaW4gc29tZSBlYXNpbmcgZnVuY3Rpb25zXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbmQgaXMgdXNlZCB0byBhZGp1c3Qgb3ZlcmFsbCBzdHJlbmd0aFxuICAgICAgICBAcmV0dXJuIFtudW1iZXJdOiBFYXNlZCBwcm9ncmVzc1xuICAgICAgICBcbiAgICBXZSBjYW4gZ2VuZXJhdGUgbmV3IGZ1bmN0aW9ucyBieSBzZW5kaW5nIGFuIGVhc2luZyBmdW5jdGlvbiB0aHJvdWdoIGVhc2luZ0Z1bmN0aW9uLmV4dGVuZChuYW1lLCBtZXRob2QpLlxuICAgIFdoaWNoIHdpbGwgbWFrZSBuYW1lSW4sIG5hbWVPdXQgYW5kIG5hbWVJbk91dCBmdW5jdGlvbnMgYXZhaWxhYmxlIHRvIHVzZS5cbiAgICAgICAgXG4gICAgRWFzaW5nIGZ1bmN0aW9ucyBmcm9tIFJvYmVydCBQZW5uZXJcbiAgICBodHRwOi8vd3d3LnJvYmVydHBlbm5lci5jb20vZWFzaW5nL1xuICAgICAgICBcbiAgICBCZXppZXIgY3VydmUgaW50ZXJwcmV0b3IgY3JlYXRlZCBmcm9tIEdhw6t0YW4gUmVuYXVkZWF1J3Mgb3JpZ2luYWwgQmV6aWVyRWFzaW5nICBcbiAgICBodHRwczovL2dpdGh1Yi5jb20vZ3JlL2Jlemllci1lYXNpbmcvYmxvYi9tYXN0ZXIvaW5kZXguanMgIFxuICAgIGh0dHBzOi8vZ2l0aHViLmNvbS9ncmUvYmV6aWVyLWVhc2luZy9ibG9iL21hc3Rlci9MSUNFTlNFXG5cbiAgICBBbnRpY2lwYXRlIGVhc2luZyBjcmVhdGVkIGJ5IEVsbGlvdCBHaW5vXG4gICAgaHR0cHM6Ly90d2l0dGVyLmNvbS9FbGxpb3RHZW5vXG4qL1xuLy8gSW1wb3J0c1xudmFyIERFRkFVTFRfQkFDS19TVFJFTkdUSCA9IDEuNTI1O1xudmFyIERFRkFVTFRfUE9XX1NUUkVOR1RIID0gMjtcblxuLypcbiAgICBFYWNoIG9mIHRoZXNlIGJhc2UgZnVuY3Rpb25zIGlzIGFuIGVhc2VJblxuICAgIFxuICAgIE9uIGluaXQsIHdlIHVzZSAubWlycm9yIGFuZCAucmV2ZXJzZSB0byBnZW5lcmF0ZSBlYXNlSW5PdXQgYW5kXG4gICAgZWFzZU91dCBmdW5jdGlvbnMgcmVzcGVjdGl2ZWx5LlxuKi9cbnZhciBiYXNlRWFzaW5nID0ge1xuICAgIGVhc2U6IGZ1bmN0aW9uIChwcm9ncmVzcykge1xuICAgICAgICB2YXIgc3RyZW5ndGggPSBhcmd1bWVudHMubGVuZ3RoIDw9IDEgfHwgYXJndW1lbnRzWzFdID09PSB1bmRlZmluZWQgPyBERUZBVUxUX1BPV19TVFJFTkdUSCA6IGFyZ3VtZW50c1sxXTtcbiAgICAgICAgcmV0dXJuIE1hdGgucG93KHByb2dyZXNzLCBzdHJlbmd0aCk7XG4gICAgfSxcbiAgICBjaXJjOiBmdW5jdGlvbiAocHJvZ3Jlc3MpIHtcbiAgICAgICAgcmV0dXJuIDEgLSBNYXRoLnNpbihNYXRoLmFjb3MocHJvZ3Jlc3MpKTtcbiAgICB9LFxuICAgIGJhY2s6IGZ1bmN0aW9uIChwcm9ncmVzcykge1xuICAgICAgICB2YXIgc3RyZW5ndGggPSBhcmd1bWVudHMubGVuZ3RoIDw9IDEgfHwgYXJndW1lbnRzWzFdID09PSB1bmRlZmluZWQgPyBERUZBVUxUX0JBQ0tfU1RSRU5HVEggOiBhcmd1bWVudHNbMV07XG4gICAgICAgIHJldHVybiBwcm9ncmVzcyAqIHByb2dyZXNzICogKChzdHJlbmd0aCArIDEpICogcHJvZ3Jlc3MgLSBzdHJlbmd0aCk7XG4gICAgfVxufTtcblxuLy8gVXRpbGl0eSBmdW5jdGlvbnNcbnZhciBnZW5lcmF0ZVBvd2VyRWFzaW5nID0gZnVuY3Rpb24gKHN0cmVuZ3RoKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChwcm9ncmVzcykge1xuICAgICAgICByZXR1cm4gYmFzZUVhc2luZy5lYXNlKHByb2dyZXNzLCBzdHJlbmd0aCk7XG4gICAgfTtcbn07XG5cblsnY3ViaWMnLCAncXVhcnQnLCAncXVpbnQnXS5mb3JFYWNoKGZ1bmN0aW9uIChlYXNpbmdOYW1lLCBpKSB7XG4gICAgcmV0dXJuIGJhc2VFYXNpbmdbZWFzaW5nTmFtZV0gPSBnZW5lcmF0ZVBvd2VyRWFzaW5nKGkgKyAzKTtcbn0pO1xuXG4vLyBHZW5lcmF0ZSBpbi9vdXQvaW5PdXQgdmFyaWF0aW9uc1xuZm9yICh2YXIga2V5IGluIGJhc2VFYXNpbmcpIHtcbiAgICBpZiAoYmFzZUVhc2luZy5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgIHZhciBlYXNpbmdGdW5jdGlvbiA9ICgwLCBfY3JlYXRlRWFzaW5nMi5kZWZhdWx0KShiYXNlRWFzaW5nW2tleV0pO1xuICAgICAgICBiYXNlRWFzaW5nW2tleSArICdJbiddID0gZWFzaW5nRnVuY3Rpb24uaW47XG4gICAgICAgIGJhc2VFYXNpbmdba2V5ICsgJ091dCddID0gZWFzaW5nRnVuY3Rpb24ub3V0O1xuICAgICAgICBiYXNlRWFzaW5nW2tleSArICdJbk91dCddID0gZWFzaW5nRnVuY3Rpb24uaW5PdXQ7XG4gICAgfVxufVxuXG5iYXNlRWFzaW5nLmxpbmVhciA9IGZ1bmN0aW9uIChwcm9ncmVzcykge1xuICAgIHJldHVybiBwcm9ncmVzcztcbn07XG5iYXNlRWFzaW5nLmFudGljaXBhdGUgPSBmdW5jdGlvbiAocHJvZ3Jlc3MpIHtcbiAgICB2YXIgc3RyZW5ndGggPSBhcmd1bWVudHMubGVuZ3RoIDw9IDEgfHwgYXJndW1lbnRzWzFdID09PSB1bmRlZmluZWQgPyBERUZBVUxUX0JBQ0tfU1RSRU5HVEggOiBhcmd1bWVudHNbMV07XG4gICAgcmV0dXJuIChwcm9ncmVzcyAqPSAyKSA8IDEgPyAwLjUgKiBiYXNlRWFzaW5nLmJhY2tJbihwcm9ncmVzcywgc3RyZW5ndGgpIDogMC41ICogKDIgLSBNYXRoLnBvdygyLCAtMTAgKiAocHJvZ3Jlc3MgLSAxKSkpO1xufTtcblxuYmFzZUVhc2luZy5lYXNpbmdGdW5jdGlvbiA9IF9jcmVhdGVFYXNpbmcyLmRlZmF1bHQ7XG5iYXNlRWFzaW5nLmN1YmljQmV6aWVyID0gX2NyZWF0ZUJlemllcjIuZGVmYXVsdDtcbmJhc2VFYXNpbmcubW9kaWZ5RWFzZSA9IGZ1bmN0aW9uIChlYXNpbmcpIHtcbiAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IEFycmF5KF9sZW4gPiAxID8gX2xlbiAtIDEgOiAwKSwgX2tleSA9IDE7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgICAgYXJnc1tfa2V5IC0gMV0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgfVxuXG4gICAgcmV0dXJuIGZ1bmN0aW9uIChwcm9ncmVzcykge1xuICAgICAgICByZXR1cm4gZWFzaW5nLmFwcGx5KHVuZGVmaW5lZCwgW3Byb2dyZXNzXS5jb25jYXQoYXJncykpO1xuICAgIH07XG59O1xuXG5leHBvcnRzLmRlZmF1bHQgPSBiYXNlRWFzaW5nO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluTnlZeTloWTNScGIyNXpMMlZoYzJsdVp5OXdjbVZ6WlhRdFpXRnphVzVuTG1weklsMHNJbTVoYldWeklqcGJYU3dpYldGd2NHbHVaM01pT2lJN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPMEZCT0VKQkxFbEJRVTBzY1VKQlFYRkNMRWRCUVVjc1MwRkJTeXhEUVVGRE8wRkJRM0JETEVsQlFVMHNiMEpCUVc5Q0xFZEJRVWNzUTBGQlF6czdPenM3T3pzN1FVRkJReXhCUVZFdlFpeEpRVUZOTEZWQlFWVXNSMEZCUnp0QlFVTm1MRkZCUVVrc1JVRkJSU3hWUVVGRExGRkJRVkU3V1VGQlJTeFJRVUZSTEhsRVFVRkhMRzlDUVVGdlFqdDNRa0ZCU3l4UlFVRlJMRVZCUVVrc1VVRkJVVHRMUVVGQk8wRkJRM3BGTEZGQlFVa3NSVUZCUlN4VlFVRkJMRkZCUVZFN1pVRkJTU3hEUVVGRExFZEJRVWNzU1VGQlNTeERRVUZETEVkQlFVY3NRMEZCUXl4SlFVRkpMRU5CUVVNc1NVRkJTU3hEUVVGRExGRkJRVkVzUTBGQlF5eERRVUZETzB0QlFVRTdRVUZEYmtRc1VVRkJTU3hGUVVGRkxGVkJRVU1zVVVGQlVUdFpRVUZGTEZGQlFWRXNlVVJCUVVjc2NVSkJRWEZDTzJWQlFVc3NRVUZCUXl4UlFVRlJMRWRCUVVjc1VVRkJVU3hKUVVGTExFTkJRVU1zVVVGQlVTeEhRVUZITEVOQlFVTXNRMEZCUVN4SFFVRkpMRkZCUVZFc1IwRkJSeXhSUVVGUkxFTkJRVUVzUVVGQlF6dExRVUZCTzBOQlEzWklPenM3UVVGQlF5eEJRVWRHTEVsQlFVMHNiVUpCUVcxQ0xFZEJRVWNzVlVGQlF5eFJRVUZSTzFkQlFVc3NWVUZCUXl4UlFVRlJPMlZCUVVzc1ZVRkJWU3hEUVVGRExFbEJRVWtzUTBGQlF5eFJRVUZSTEVWQlFVVXNVVUZCVVN4RFFVRkRPMHRCUVVFN1EwRkJRU3hEUVVGRE96dEJRVVUxUml4RFFVRkRMRTlCUVU4c1JVRkJSU3hQUVVGUExFVkJRVVVzVDBGQlR5eERRVUZETEVOQlFVTXNUMEZCVHl4RFFVRkRMRlZCUVVNc1ZVRkJWU3hGUVVGRkxFTkJRVU03VjBGQlN5eFZRVUZWTEVOQlFVTXNWVUZCVlN4RFFVRkRMRWRCUVVjc2JVSkJRVzFDTEVOQlFVTXNRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJRenREUVVGQkxFTkJRVU03T3p0QlFVRkRMRUZCUnpWSExFdEJRVXNzU1VGQlNTeEhRVUZITEVsQlFVa3NWVUZCVlN4RlFVRkZPMEZCUTNoQ0xGRkJRVWtzVlVGQlZTeERRVUZETEdOQlFXTXNRMEZCUXl4SFFVRkhMRU5CUVVNc1JVRkJSVHRCUVVOb1F5eFpRVUZOTEdOQlFXTXNSMEZCUnl3MFFrRkJjVUlzVlVGQlZTeERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRMRU5CUVVNN1FVRkROMFFzYTBKQlFWVXNRMEZCU1N4SFFVRkhMRkZCUVVzc1IwRkJSeXhqUVVGakxFTkJRVU1zUlVGQlJTeERRVUZETzBGQlF6TkRMR3RDUVVGVkxFTkJRVWtzUjBGQlJ5eFRRVUZOTEVkQlFVY3NZMEZCWXl4RFFVRkRMRWRCUVVjc1EwRkJRenRCUVVNM1F5eHJRa0ZCVlN4RFFVRkpMRWRCUVVjc1YwRkJVU3hIUVVGSExHTkJRV01zUTBGQlF5eExRVUZMTEVOQlFVTTdTMEZEY0VRN1EwRkRTanM3UVVGRlJDeFZRVUZWTEVOQlFVTXNUVUZCVFN4SFFVRkhMRlZCUVVFc1VVRkJVVHRYUVVGSkxGRkJRVkU3UTBGQlFTeERRVUZETzBGQlEzcERMRlZCUVZVc1EwRkJReXhWUVVGVkxFZEJRVWNzVlVGQlF5eFJRVUZSTzFGQlFVVXNVVUZCVVN4NVJFRkJSeXh4UWtGQmNVSTdWMEZETDBRc1FVRkJReXhEUVVGRExGRkJRVkVzU1VGQlJTeERRVUZETEVOQlFVRXNSMEZCU1N4RFFVRkRMRWRCUVVrc1IwRkJSeXhIUVVGSExGVkJRVlVzUTBGQlF5eE5RVUZOTEVOQlFVTXNVVUZCVVN4RlFVRkZMRkZCUVZFc1EwRkJReXhIUVVGSkxFZEJRVWNzU1VGQlNTeERRVUZETEVkQlFVY3NTVUZCU1N4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRExFVkJRVVVzUTBGQlF5eEZRVUZGTEVsQlFVa3NVVUZCVVN4SFFVRkhMRU5CUVVNc1EwRkJRU3hCUVVGRExFTkJRVU1zUTBGQlFTeEJRVUZETzBOQlFVRXNRMEZCUXpzN1FVRkZka2dzVlVGQlZTeERRVUZETEdOQlFXTXNlVUpCUVhWQ0xFTkJRVU03UVVGRGFrUXNWVUZCVlN4RFFVRkRMRmRCUVZjc2VVSkJRV01zUTBGQlF6dEJRVU55UXl4VlFVRlZMRU5CUVVNc1ZVRkJWU3hIUVVGSExGVkJRVU1zVFVGQlRUdHpRMEZCU3l4SlFVRkpPMEZCUVVvc1dVRkJTVHM3TzFkQlFVc3NWVUZCUXl4UlFVRlJPMlZCUVVzc1RVRkJUU3h0UWtGQlF5eFJRVUZSTEZOQlFVc3NTVUZCU1N4RlFVRkRPMHRCUVVFN1EwRkJRU3hEUVVGRE96dHJRa0ZGZEVVc1ZVRkJWU0lzSW1acGJHVWlPaUp3Y21WelpYUXRaV0Z6YVc1bkxtcHpJaXdpYzI5MWNtTmxVbTl2ZENJNklpOVZjMlZ5Y3k5TllYUjBVR1Z5Y25rdlUybDBaWE12Y0c5d2JXOTBhVzl1SWl3aWMyOTFjbU5sYzBOdmJuUmxiblFpT2xzaUx5cGNiaUFnSUNCRllYTnBibWNnWm5WdVkzUnBiMjV6WEc0Z0lDQWdMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFZ4dUlDQWdJRnh1SUNBZ0lFZGxibVZ5WVhSbGN5QmhibVFnY0hKdmRtbGtaWE1nWldGemFXNW5JR1oxYm1OMGFXOXVjeUJpWVhObFpDQnZiaUJpWVhObFJuVnVZM1JwYjI0Z1pHVm1hVzVwZEdsdmJuTmNiaUFnSUNCY2JpQWdJQ0JCSUdOaGJHd2dkRzhnWldGemFXNW5SblZ1WTNScGIyNHVaMlYwS0NkbWRXNWpkR2x2Yms1aGJXVW5LU0J5WlhSMWNtNXpJR0VnWm5WdVkzUnBiMjRnZEdoaGRDQmpZVzRnWW1VZ2NHRnpjMlZrT2x4dUlDQWdJQ0FnSUNCQWNHRnlZVzBnVzI1MWJXSmxjbDA2SUZCeWIyZHlaWE56SURBdE1WeHVJQ0FnSUNBZ0lDQkFjR0Z5WVcwZ1cyNTFiV0psY2wwZ0tHOXdkR2x2Ym1Gc0tUb2dRVzF3SUcxdlpHbG1hV1Z5TENCdmJteDVJR0ZqWTJWd2RHVmtJR2x1SUhOdmJXVWdaV0Z6YVc1bklHWjFibU4wYVc5dWMxeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdZVzVrSUdseklIVnpaV1FnZEc4Z1lXUnFkWE4wSUc5MlpYSmhiR3dnYzNSeVpXNW5kR2hjYmlBZ0lDQWdJQ0FnUUhKbGRIVnliaUJiYm5WdFltVnlYVG9nUldGelpXUWdjSEp2WjNKbGMzTmNiaUFnSUNBZ0lDQWdYRzRnSUNBZ1YyVWdZMkZ1SUdkbGJtVnlZWFJsSUc1bGR5Qm1kVzVqZEdsdmJuTWdZbmtnYzJWdVpHbHVaeUJoYmlCbFlYTnBibWNnWm5WdVkzUnBiMjRnZEdoeWIzVm5hQ0JsWVhOcGJtZEdkVzVqZEdsdmJpNWxlSFJsYm1Rb2JtRnRaU3dnYldWMGFHOWtLUzVjYmlBZ0lDQlhhR2xqYUNCM2FXeHNJRzFoYTJVZ2JtRnRaVWx1TENCdVlXMWxUM1YwSUdGdVpDQnVZVzFsU1c1UGRYUWdablZ1WTNScGIyNXpJR0YyWVdsc1lXSnNaU0IwYnlCMWMyVXVYRzRnSUNBZ0lDQWdJRnh1SUNBZ0lFVmhjMmx1WnlCbWRXNWpkR2x2Ym5NZ1puSnZiU0JTYjJKbGNuUWdVR1Z1Ym1WeVhHNGdJQ0FnYUhSMGNEb3ZMM2QzZHk1eWIySmxjblJ3Wlc1dVpYSXVZMjl0TDJWaGMybHVaeTljYmlBZ0lDQWdJQ0FnWEc0Z0lDQWdRbVY2YVdWeUlHTjFjblpsSUdsdWRHVnljSEpsZEc5eUlHTnlaV0YwWldRZ1puSnZiU0JIWWNPcmRHRnVJRkpsYm1GMVpHVmhkU2R6SUc5eWFXZHBibUZzSUVKbGVtbGxja1ZoYzJsdVp5QWdYRzRnSUNBZ2FIUjBjSE02THk5bmFYUm9kV0l1WTI5dEwyZHlaUzlpWlhwcFpYSXRaV0Z6YVc1bkwySnNiMkl2YldGemRHVnlMMmx1WkdWNExtcHpJQ0JjYmlBZ0lDQm9kSFJ3Y3pvdkwyZHBkR2gxWWk1amIyMHZaM0psTDJKbGVtbGxjaTFsWVhOcGJtY3ZZbXh2WWk5dFlYTjBaWEl2VEVsRFJVNVRSVnh1WEc0Z0lDQWdRVzUwYVdOcGNHRjBaU0JsWVhOcGJtY2dZM0psWVhSbFpDQmllU0JGYkd4cGIzUWdSMmx1YjF4dUlDQWdJR2gwZEhCek9pOHZkSGRwZEhSbGNpNWpiMjB2Uld4c2FXOTBSMlZ1YjF4dUtpOWNiaTh2SUVsdGNHOXlkSE5jYm1sdGNHOXlkQ0JqY21WaGRHVkZZWE5wYm1kR2RXNWpkR2x2YmlCbWNtOXRJQ2N1TDJOeVpXRjBaUzFsWVhOcGJtY25PMXh1YVcxd2IzSjBJR04xWW1salFtVjZhV1Z5SUdaeWIyMGdKeTR2WTNKbFlYUmxMV0psZW1sbGNpYzdYRzVjYmk4dklGWmhiSFZsYzF4dVkyOXVjM1FnUkVWR1FWVk1WRjlDUVVOTFgxTlVVa1ZPUjFSSUlEMGdNUzQxTWpVN1hHNWpiMjV6ZENCRVJVWkJWVXhVWDFCUFYxOVRWRkpGVGtkVVNDQTlJREk3WEc1Y2JpOHFYRzRnSUNBZ1JXRmphQ0J2WmlCMGFHVnpaU0JpWVhObElHWjFibU4wYVc5dWN5QnBjeUJoYmlCbFlYTmxTVzVjYmlBZ0lDQmNiaUFnSUNCUGJpQnBibWwwTENCM1pTQjFjMlVnTG0xcGNuSnZjaUJoYm1RZ0xuSmxkbVZ5YzJVZ2RHOGdaMlZ1WlhKaGRHVWdaV0Z6WlVsdVQzVjBJR0Z1WkZ4dUlDQWdJR1ZoYzJWUGRYUWdablZ1WTNScGIyNXpJSEpsYzNCbFkzUnBkbVZzZVM1Y2Jpb3ZYRzVqYjI1emRDQmlZWE5sUldGemFXNW5JRDBnZTF4dUlDQWdJR1ZoYzJVNklDaHdjbTluY21WemN5d2djM1J5Wlc1bmRHZ2dQU0JFUlVaQlZVeFVYMUJQVjE5VFZGSkZUa2RVU0NrZ1BUNGdjSEp2WjNKbGMzTWdLaW9nYzNSeVpXNW5kR2dzWEc0Z0lDQWdZMmx5WXpvZ2NISnZaM0psYzNNZ1BUNGdNU0F0SUUxaGRHZ3VjMmx1S0UxaGRHZ3VZV052Y3lod2NtOW5jbVZ6Y3lrcExGeHVJQ0FnSUdKaFkyczZJQ2h3Y205bmNtVnpjeXdnYzNSeVpXNW5kR2dnUFNCRVJVWkJWVXhVWDBKQlEwdGZVMVJTUlU1SFZFZ3BJRDArSUNod2NtOW5jbVZ6Y3lBcUlIQnliMmR5WlhOektTQXFJQ2dvYzNSeVpXNW5kR2dnS3lBeEtTQXFJSEJ5YjJkeVpYTnpJQzBnYzNSeVpXNW5kR2dwWEc1OU8xeHVYRzR2THlCVmRHbHNhWFI1SUdaMWJtTjBhVzl1YzF4dVkyOXVjM1FnWjJWdVpYSmhkR1ZRYjNkbGNrVmhjMmx1WnlBOUlDaHpkSEpsYm1kMGFDa2dQVDRnS0hCeWIyZHlaWE56S1NBOVBpQmlZWE5sUldGemFXNW5MbVZoYzJVb2NISnZaM0psYzNNc0lITjBjbVZ1WjNSb0tUdGNibHh1V3lkamRXSnBZeWNzSUNkeGRXRnlkQ2NzSUNkeGRXbHVkQ2RkTG1admNrVmhZMmdvS0dWaGMybHVaMDVoYldVc0lHa3BJRDArSUdKaGMyVkZZWE5wYm1kYlpXRnphVzVuVG1GdFpWMGdQU0JuWlc1bGNtRjBaVkJ2ZDJWeVJXRnphVzVuS0drZ0t5QXpLU2s3WEc1Y2JpOHZJRWRsYm1WeVlYUmxJR2x1TDI5MWRDOXBiazkxZENCMllYSnBZWFJwYjI1elhHNW1iM0lnS0d4bGRDQnJaWGtnYVc0Z1ltRnpaVVZoYzJsdVp5a2dlMXh1SUNBZ0lHbG1JQ2hpWVhObFJXRnphVzVuTG1oaGMwOTNibEJ5YjNCbGNuUjVLR3RsZVNrcElIdGNiaUFnSUNBZ0lDQWdZMjl1YzNRZ1pXRnphVzVuUm5WdVkzUnBiMjRnUFNCamNtVmhkR1ZGWVhOcGJtZEdkVzVqZEdsdmJpaGlZWE5sUldGemFXNW5XMnRsZVYwcE8xeHVJQ0FnSUNBZ0lDQmlZWE5sUldGemFXNW5XMkFrZTJ0bGVYMUpibUJkSUQwZ1pXRnphVzVuUm5WdVkzUnBiMjR1YVc0N1hHNGdJQ0FnSUNBZ0lHSmhjMlZGWVhOcGJtZGJZQ1I3YTJWNWZVOTFkR0JkSUQwZ1pXRnphVzVuUm5WdVkzUnBiMjR1YjNWME8xeHVJQ0FnSUNBZ0lDQmlZWE5sUldGemFXNW5XMkFrZTJ0bGVYMUpiazkxZEdCZElEMGdaV0Z6YVc1blJuVnVZM1JwYjI0dWFXNVBkWFE3WEc0Z0lDQWdmVnh1ZlZ4dVhHNWlZWE5sUldGemFXNW5MbXhwYm1WaGNpQTlJSEJ5YjJkeVpYTnpJRDArSUhCeWIyZHlaWE56TzF4dVltRnpaVVZoYzJsdVp5NWhiblJwWTJsd1lYUmxJRDBnS0hCeWIyZHlaWE56TENCemRISmxibWQwYUNBOUlFUkZSa0ZWVEZSZlFrRkRTMTlUVkZKRlRrZFVTQ2tnUFQ1Y2JpQWdJQ0FvS0hCeWIyZHlaWE56S2oweUtTQThJREVwSUQ4Z01DNDFJQ29nWW1GelpVVmhjMmx1Wnk1aVlXTnJTVzRvY0hKdlozSmxjM01zSUhOMGNtVnVaM1JvS1NBNklDQXdMalVnS2lBb01pQXRJRTFoZEdndWNHOTNLRElzSUMweE1DQXFJQ2h3Y205bmNtVnpjeUF0SURFcEtTazdYRzVjYm1KaGMyVkZZWE5wYm1jdVpXRnphVzVuUm5WdVkzUnBiMjRnUFNCamNtVmhkR1ZGWVhOcGJtZEdkVzVqZEdsdmJqdGNibUpoYzJWRllYTnBibWN1WTNWaWFXTkNaWHBwWlhJZ1BTQmpkV0pwWTBKbGVtbGxjanRjYm1KaGMyVkZZWE5wYm1jdWJXOWthV1o1UldGelpTQTlJQ2hsWVhOcGJtY3NJQzR1TG1GeVozTXBJRDArSUNod2NtOW5jbVZ6Y3lrZ1BUNGdaV0Z6YVc1bktIQnliMmR5WlhOekxDQXVMaTVoY21kektUdGNibHh1Wlhod2IzSjBJR1JsWm1GMWJIUWdZbUZ6WlVWaGMybHVaenNpWFgwPVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvYWN0aW9ucy9lYXNpbmcvcHJlc2V0LWVhc2luZy5qc1xuICoqIG1vZHVsZSBpZCA9IDE5XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzLmRlZmF1bHQgPSB7XG4gICAgZGVmYXVsdFByb3BzOiB7XG4gICAgICAgIHVuaXQ6ICdkZWcnXG4gICAgfVxufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbk55WXk5MllXeDFaUzEwZVhCbGN5OWhibWRzWlM1cWN5SmRMQ0p1WVcxbGN5STZXMTBzSW0xaGNIQnBibWR6SWpvaU96czdhMEpCUVdVN1FVRkRXQ3huUWtGQldTeEZRVUZGTzBGQlExWXNXVUZCU1N4RlFVRkZMRXRCUVVzN1MwRkRaRHREUVVOS0lpd2labWxzWlNJNkltRnVaMnhsTG1weklpd2ljMjkxY21ObFVtOXZkQ0k2SWk5VmMyVnljeTlOWVhSMFVHVnljbmt2VTJsMFpYTXZjRzl3Ylc5MGFXOXVJaXdpYzI5MWNtTmxjME52Ym5SbGJuUWlPbHNpWlhod2IzSjBJR1JsWm1GMWJIUWdlMXh1SUNBZ0lHUmxabUYxYkhSUWNtOXdjem9nZTF4dUlDQWdJQ0FnSUNCMWJtbDBPaUFuWkdWbkoxeHVJQ0FnSUgxY2JuMDdJbDE5XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy92YWx1ZS10eXBlcy9hbmdsZS5qc1xuICoqIG1vZHVsZSBpZCA9IDIwXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfdXRpbHMgPSByZXF1aXJlKCcuLi9pbmMvdXRpbHMnKTtcblxudmFyIF9weCA9IHJlcXVpcmUoJy4vcHgnKTtcblxudmFyIF9weDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9weCk7XG5cbnZhciBfZGljdGlvbmFyeSA9IHJlcXVpcmUoJy4vc2V0dGluZ3MvZGljdGlvbmFyeScpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5leHBvcnRzLmRlZmF1bHQgPSB7XG4gICAgZGVmYXVsdFByb3BzOiBfcHgyLmRlZmF1bHQuZGVmYXVsdFByb3BzLFxuXG4gICAgLypcbiAgICAgICAgU3BsaXQgcG9zaXRpb25zIGluIGZvcm1hdCBcIlggWSBaXCJcbiAgICAgICAgXG4gICAgICAgIEBwYXJhbSBbc3RyaW5nXTogUG9zaXRpb24gdmFsdWVzXG4gICAgICAgICAgICBcIjIwJSAzMCUgMFwiIC0+IHsyMCUsIDMwJSwgMH1cbiAgICAgICAgICAgIFwiMjAlIDMwJVwiIC0+IHsyMCUsIDMwJX1cbiAgICAgICAgICAgIFwiMjAlXCIgLT4gezIwJSwgMjAlfVxuICAgICovXG4gICAgc3BsaXQ6IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICB2YXIgc3BsaXRWYWx1ZXMgPSAoMCwgX3V0aWxzLnNwbGl0U3BhY2VEZWxpbWl0ZWQpKHZhbHVlKTtcbiAgICAgICAgdmFyIG51bUF4ZXMgPSBzcGxpdFZhbHVlcy5sZW5ndGg7XG4gICAgICAgIHZhciBzcGxpdFZhbHVlID0ge1xuICAgICAgICAgICAgWDogc3BsaXRWYWx1ZXNbMF0sXG4gICAgICAgICAgICBZOiBudW1BeGVzID4gMSA/IHNwbGl0VmFsdWVzWzFdIDogc3BsaXRWYWx1ZXNbMF1cbiAgICAgICAgfTtcblxuICAgICAgICBpZiAobnVtQXhlcyA+IDIpIHtcbiAgICAgICAgICAgIHNwbGl0VmFsdWUuWiA9IHNwbGl0VmFsdWVzWzJdO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHNwbGl0VmFsdWU7XG4gICAgfSxcblxuICAgIGNvbWJpbmU6IGZ1bmN0aW9uICh2YWx1ZXMpIHtcbiAgICAgICAgcmV0dXJuICgwLCBfdXRpbHMuY3JlYXRlRGVsaW1pdGVkKSh2YWx1ZXMsIF9kaWN0aW9uYXJ5LmF4ZXMsICcgJyk7XG4gICAgfVxufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbk55WXk5MllXeDFaUzEwZVhCbGN5OWhlR1Z6TG1weklsMHNJbTVoYldWeklqcGJYU3dpYldGd2NHbHVaM01pT2lJN096czdPenM3T3pzN096czdPMnRDUVVsbE8wRkJRMWdzWjBKQlFWa3NSVUZCUlN4aFFVRlpMRmxCUVZrN096czdPenM3T3pzN1FVRlZkRU1zVTBGQlN5eEZRVUZGTEZWQlFVTXNTMEZCU3l4RlFVRkxPMEZCUTJRc1dVRkJUU3hYUVVGWExFZEJRVWNzVjBGb1FrWXNiVUpCUVcxQ0xFVkJaMEpITEV0QlFVc3NRMEZCUXl4RFFVRkRPMEZCUXk5RExGbEJRVTBzVDBGQlR5eEhRVUZITEZkQlFWY3NRMEZCUXl4TlFVRk5MRU5CUVVNN1FVRkRia01zV1VGQlRTeFZRVUZWTEVkQlFVYzdRVUZEWml4aFFVRkRMRVZCUVVVc1YwRkJWeXhEUVVGRExFTkJRVU1zUTBGQlF6dEJRVU5xUWl4aFFVRkRMRVZCUVVVc1FVRkJReXhQUVVGUExFZEJRVWNzUTBGQlF5eEhRVUZKTEZkQlFWY3NRMEZCUXl4RFFVRkRMRU5CUVVNc1IwRkJSeXhYUVVGWExFTkJRVU1zUTBGQlF5eERRVUZETzFOQlEzSkVMRU5CUVVNN08wRkJSVVlzV1VGQlNTeFBRVUZQTEVkQlFVY3NRMEZCUXl4RlFVRkZPMEZCUTJJc2MwSkJRVlVzUTBGQlF5eERRVUZETEVkQlFVY3NWMEZCVnl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRE8xTkJRMnBET3p0QlFVVkVMR1ZCUVU4c1ZVRkJWU3hEUVVGRE8wdEJRM0pDT3p0QlFVVkVMRmRCUVU4c1JVRkJSU3hWUVVGRExFMUJRVTA3WlVGQlN5eFhRVGxDYUVJc1pVRkJaU3hGUVRoQ2FVSXNUVUZCVFN4alFUVkNkRU1zU1VGQlNTeEZRVFJDTUVNc1IwRkJSeXhEUVVGRE8wdEJRVUU3UTBGRE1VUWlMQ0ptYVd4bElqb2lZWGhsY3k1cWN5SXNJbk52ZFhKalpWSnZiM1FpT2lJdlZYTmxjbk12VFdGMGRGQmxjbko1TDFOcGRHVnpMM0J2Y0cxdmRHbHZiaUlzSW5OdmRYSmpaWE5EYjI1MFpXNTBJanBiSW1sdGNHOXlkQ0I3SUdOeVpXRjBaVVJsYkdsdGFYUmxaQ3dnYzNCc2FYUlRjR0ZqWlVSbGJHbHRhWFJsWkNCOUlHWnliMjBnSnk0dUwybHVZeTkxZEdsc2N5YzdYRzVwYlhCdmNuUWdjSGhXWVd4MVpWUjVjR1VnWm5KdmJTQW5MaTl3ZUNjN1hHNXBiWEJ2Y25RZ2V5QmhlR1Z6SUgwZ1puSnZiU0FuTGk5elpYUjBhVzVuY3k5a2FXTjBhVzl1WVhKNUp6dGNibHh1Wlhod2IzSjBJR1JsWm1GMWJIUWdlMXh1SUNBZ0lHUmxabUYxYkhSUWNtOXdjem9nY0hoV1lXeDFaVlI1Y0dVdVpHVm1ZWFZzZEZCeWIzQnpMRnh1SUNBZ0lDQWdJQ0JjYmlBZ0lDQXZLbHh1SUNBZ0lDQWdJQ0JUY0d4cGRDQndiM05wZEdsdmJuTWdhVzRnWm05eWJXRjBJRndpV0NCWklGcGNJbHh1SUNBZ0lDQWdJQ0JjYmlBZ0lDQWdJQ0FnUUhCaGNtRnRJRnR6ZEhKcGJtZGRPaUJRYjNOcGRHbHZiaUIyWVd4MVpYTmNiaUFnSUNBZ0lDQWdJQ0FnSUZ3aU1qQWxJRE13SlNBd1hDSWdMVDRnZXpJd0pTd2dNekFsTENBd2ZWeHVJQ0FnSUNBZ0lDQWdJQ0FnWENJeU1DVWdNekFsWENJZ0xUNGdlekl3SlN3Z016QWxmVnh1SUNBZ0lDQWdJQ0FnSUNBZ1hDSXlNQ1ZjSWlBdFBpQjdNakFsTENBeU1DVjlYRzRnSUNBZ0tpOWNiaUFnSUNCemNHeHBkRG9nS0haaGJIVmxLU0E5UGlCN1hHNGdJQ0FnSUNBZ0lHTnZibk4wSUhOd2JHbDBWbUZzZFdWeklEMGdjM0JzYVhSVGNHRmpaVVJsYkdsdGFYUmxaQ2gyWVd4MVpTazdYRzRnSUNBZ0lDQWdJR052Ym5OMElHNTFiVUY0WlhNZ1BTQnpjR3hwZEZaaGJIVmxjeTVzWlc1bmRHZzdYRzRnSUNBZ0lDQWdJR052Ym5OMElITndiR2wwVm1Gc2RXVWdQU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQllPaUJ6Y0d4cGRGWmhiSFZsYzFzd1hTeGNiaUFnSUNBZ0lDQWdJQ0FnSUZrNklDaHVkVzFCZUdWeklENGdNU2tnUHlCemNHeHBkRlpoYkhWbGMxc3hYU0E2SUhOd2JHbDBWbUZzZFdWeld6QmRYRzRnSUNBZ0lDQWdJSDA3WEc1Y2JpQWdJQ0FnSUNBZ2FXWWdLRzUxYlVGNFpYTWdQaUF5S1NCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0J6Y0d4cGRGWmhiSFZsTGxvZ1BTQnpjR3hwZEZaaGJIVmxjMXN5WFR0Y2JpQWdJQ0FnSUNBZ2ZWeHVYRzRnSUNBZ0lDQWdJSEpsZEhWeWJpQnpjR3hwZEZaaGJIVmxPMXh1SUNBZ0lIMHNYRzVjYmlBZ0lDQmpiMjFpYVc1bE9pQW9kbUZzZFdWektTQTlQaUJqY21WaGRHVkVaV3hwYldsMFpXUW9kbUZzZFdWekxDQmhlR1Z6TENBbklDY3BYRzU5TzF4dUlsMTlcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL3ZhbHVlLXR5cGVzL2F4ZXMuanNcbiAqKiBtb2R1bGUgaWQgPSAyMVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX2RlZmF1bHRQcm9wcyA9IHJlcXVpcmUoJy4vc2V0dGluZ3MvZGVmYXVsdC1wcm9wcycpO1xuXG5leHBvcnRzLmRlZmF1bHQgPSB7XG4gICAgZGVmYXVsdFByb3BzOiBfZGVmYXVsdFByb3BzLm9wYWNpdHlcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5OeVl5OTJZV3gxWlMxMGVYQmxjeTloYkhCb1lTNXFjeUpkTENKdVlXMWxjeUk2VzEwc0ltMWhjSEJwYm1keklqb2lPenM3T3pzN2EwSkJSV1U3UVVGRFdDeG5Ra0ZCV1N4blFrRklVQ3hQUVVGUExFRkJSMU03UTBGRGVFSWlMQ0ptYVd4bElqb2lZV3h3YUdFdWFuTWlMQ0p6YjNWeVkyVlNiMjkwSWpvaUwxVnpaWEp6TDAxaGRIUlFaWEp5ZVM5VGFYUmxjeTl3YjNCdGIzUnBiMjRpTENKemIzVnlZMlZ6UTI5dWRHVnVkQ0k2V3lKcGJYQnZjblFnZXlCdmNHRmphWFI1SUgwZ1puSnZiU0FuTGk5elpYUjBhVzVuY3k5a1pXWmhkV3gwTFhCeWIzQnpKenRjYmx4dVpYaHdiM0owSUdSbFptRjFiSFFnZTF4dUlDQWdJR1JsWm1GMWJIUlFjbTl3Y3pvZ2IzQmhZMmwwZVZ4dWZUc2lYWDA9XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy92YWx1ZS10eXBlcy9hbHBoYS5qc1xuICoqIG1vZHVsZSBpZCA9IDIyXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbnZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfcmdiID0gcmVxdWlyZSgnLi9yZ2InKTtcblxudmFyIF9yZ2IyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmdiKTtcblxudmFyIF9oc2wgPSByZXF1aXJlKCcuL2hzbCcpO1xuXG52YXIgX2hzbDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9oc2wpO1xuXG52YXIgX2hleCA9IHJlcXVpcmUoJy4vaGV4Jyk7XG5cbnZhciBfaGV4MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2hleCk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbnZhciBjb2xvclR5cGVzID0gW19yZ2IyLmRlZmF1bHQsIF9oc2wyLmRlZmF1bHQsIF9oZXgyLmRlZmF1bHRdO1xudmFyIG51bUNvbG9yVHlwZXMgPSBjb2xvclR5cGVzLmxlbmd0aDtcblxuZXhwb3J0cy5kZWZhdWx0ID0ge1xuICAgIGRlZmF1bHRQcm9wczogX2V4dGVuZHMoe30sIF9yZ2IyLmRlZmF1bHQuZGVmYXVsdFByb3BzLCBfaHNsMi5kZWZhdWx0LmRlZmF1bHRQcm9wcyksXG5cbiAgICB0ZXN0OiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIF9yZ2IyLmRlZmF1bHQudGVzdCh2YWx1ZSkgfHwgX2hleDIuZGVmYXVsdC50ZXN0KHZhbHVlKSB8fCBfaHNsMi5kZWZhdWx0LnRlc3QodmFsdWUpO1xuICAgIH0sXG5cbiAgICBzcGxpdDogZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbnVtQ29sb3JUeXBlczsgaSsrKSB7XG4gICAgICAgICAgICBpZiAoY29sb3JUeXBlc1tpXS50ZXN0KHZhbHVlKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBjb2xvclR5cGVzW2ldLnNwbGl0KHZhbHVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICBjb21iaW5lOiBmdW5jdGlvbiAodmFsdWVzKSB7XG4gICAgICAgIHJldHVybiB2YWx1ZXMuUmVkICE9PSB1bmRlZmluZWQgPyBfcmdiMi5kZWZhdWx0LmNvbWJpbmUodmFsdWVzKSA6IF9oc2wyLmRlZmF1bHQuY29tYmluZSh2YWx1ZXMpO1xuICAgIH1cbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5OeVl5OTJZV3gxWlMxMGVYQmxjeTlqYjJ4dmNpNXFjeUpkTENKdVlXMWxjeUk2VzEwc0ltMWhjSEJwYm1keklqb2lPenM3T3pzN096czdPenM3T3pzN096czdPenRCUVVsQkxFbEJRVTBzVlVGQlZTeEhRVUZITERaRFFVRmxMRU5CUVVNN1FVRkRia01zU1VGQlRTeGhRVUZoTEVkQlFVY3NWVUZCVlN4RFFVRkRMRTFCUVUwc1EwRkJRenM3YTBKQlJYcENPMEZCUTFnc1owSkJRVmtzWlVGQlR5eGpRVUZKTEZsQlFWa3NSVUZCU3l4alFVRkpMRmxCUVZrc1EwRkJSVHM3UVVGRk1VUXNVVUZCU1N4RlFVRkZMRlZCUVVNc1MwRkJTenRsUVVGTExHTkJRVWtzU1VGQlNTeERRVUZETEV0QlFVc3NRMEZCUXl4SlFVRkpMR05CUVVrc1NVRkJTU3hEUVVGRExFdEJRVXNzUTBGQlF5eEpRVUZKTEdOQlFVa3NTVUZCU1N4RFFVRkRMRXRCUVVzc1EwRkJRenRMUVVGQk96dEJRVVYwUlN4VFFVRkxMRVZCUVVVc1ZVRkJReXhMUVVGTExFVkJRVXM3UVVGRFpDeGhRVUZMTEVsQlFVa3NRMEZCUXl4SFFVRkhMRU5CUVVNc1JVRkJSU3hEUVVGRExFZEJRVWNzWVVGQllTeEZRVUZGTEVOQlFVTXNSVUZCUlN4RlFVRkZPMEZCUTNCRExHZENRVUZKTEZWQlFWVXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhKUVVGSkxFTkJRVU1zUzBGQlN5eERRVUZETEVWQlFVVTdRVUZETTBJc2RVSkJRVThzVlVGQlZTeERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRXRCUVVzc1EwRkJReXhMUVVGTExFTkJRVU1zUTBGQlF6dGhRVU55UXp0VFFVTktPMHRCUTBvN08wRkJSVVFzVjBGQlR5eEZRVUZGTEZWQlFVTXNUVUZCVFR0bFFVRkxMRUZCUVVNc1RVRkJUU3hEUVVGRExFZEJRVWNzUzBGQlN5eFRRVUZUTEVkQlFVa3NZMEZCU1N4UFFVRlBMRU5CUVVNc1RVRkJUU3hEUVVGRExFZEJRVWNzWTBGQlNTeFBRVUZQTEVOQlFVTXNUVUZCVFN4RFFVRkRPMHRCUVVFN1EwRkRPVVlpTENKbWFXeGxJam9pWTI5c2IzSXVhbk1pTENKemIzVnlZMlZTYjI5MElqb2lMMVZ6WlhKekwwMWhkSFJRWlhKeWVTOVRhWFJsY3k5d2IzQnRiM1JwYjI0aUxDSnpiM1Z5WTJWelEyOXVkR1Z1ZENJNld5SnBiWEJ2Y25RZ2NtZGlJR1p5YjIwZ0p5NHZjbWRpSnp0Y2JtbHRjRzl5ZENCb2Myd2dabkp2YlNBbkxpOW9jMnduTzF4dWFXMXdiM0owSUdobGVDQm1jbTl0SUNjdUwyaGxlQ2M3WEc1Y2JtTnZibk4wSUdOdmJHOXlWSGx3WlhNZ1BTQmJjbWRpTENCb2Myd3NJR2hsZUYwN1hHNWpiMjV6ZENCdWRXMURiMnh2Y2xSNWNHVnpJRDBnWTI5c2IzSlVlWEJsY3k1c1pXNW5kR2c3WEc1Y2JtVjRjRzl5ZENCa1pXWmhkV3gwSUh0Y2JpQWdJQ0JrWldaaGRXeDBVSEp2Y0hNNklIc2dMaTR1Y21kaUxtUmxabUYxYkhSUWNtOXdjeXdnTGk0dWFITnNMbVJsWm1GMWJIUlFjbTl3Y3lCOUxGeHVYRzRnSUNBZ2RHVnpkRG9nS0haaGJIVmxLU0E5UGlCeVoySXVkR1Z6ZENoMllXeDFaU2tnZkh3Z2FHVjRMblJsYzNRb2RtRnNkV1VwSUh4OElHaHpiQzUwWlhOMEtIWmhiSFZsS1N4Y2JseHVJQ0FnSUhOd2JHbDBPaUFvZG1Gc2RXVXBJRDArSUh0Y2JpQWdJQ0FnSUNBZ1ptOXlJQ2hzWlhRZ2FTQTlJREE3SUdrZ1BDQnVkVzFEYjJ4dmNsUjVjR1Z6T3lCcEt5c3BJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lHbG1JQ2hqYjJ4dmNsUjVjR1Z6VzJsZExuUmxjM1FvZG1Gc2RXVXBLU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnY21WMGRYSnVJR052Ykc5eVZIbHdaWE5iYVYwdWMzQnNhWFFvZG1Gc2RXVXBPMXh1SUNBZ0lDQWdJQ0FnSUNBZ2ZWeHVJQ0FnSUNBZ0lDQjlYRzRnSUNBZ2ZTeGNibHh1SUNBZ0lHTnZiV0pwYm1VNklDaDJZV3gxWlhNcElEMCtJQ2gyWVd4MVpYTXVVbVZrSUNFOVBTQjFibVJsWm1sdVpXUXBJRDhnY21kaUxtTnZiV0pwYm1Vb2RtRnNkV1Z6S1NBNklHaHpiQzVqYjIxaWFXNWxLSFpoYkhWbGN5bGNibjA3WEc0aVhYMD1cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL3ZhbHVlLXR5cGVzL2NvbG9yLmpzXG4gKiogbW9kdWxlIGlkID0gMjNcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF91dGlscyA9IHJlcXVpcmUoJy4uL2luYy91dGlscycpO1xuXG52YXIgRkxPQVRfUkVHRVggPSAvKC0pPyhcXGRbXFxkXFwuXSopL2c7XG52YXIgZ2VuZXJhdGVUb2tlbiA9IGZ1bmN0aW9uICh0b2tlbikge1xuICAgIHJldHVybiAnJHsnICsgdG9rZW4gKyAnfSc7XG59O1xuXG5leHBvcnRzLmRlZmF1bHQgPSB7XG5cbiAgICB0ZXN0OiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgdmFyIG1hdGNoZXMgPSB2YWx1ZS5tYXRjaChGTE9BVF9SRUdFWCk7XG4gICAgICAgIHJldHVybiAoMCwgX3V0aWxzLmlzQXJyYXkpKG1hdGNoZXMpICYmIG1hdGNoZXMubGVuZ3RoID4gMDtcbiAgICB9LFxuXG4gICAgdGVtcGxhdGU6IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICB2YXIgY291bnRlciA9IDA7XG4gICAgICAgIHJldHVybiB2YWx1ZS5yZXBsYWNlKEZMT0FUX1JFR0VYLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gZ2VuZXJhdGVUb2tlbihjb3VudGVyKyspO1xuICAgICAgICB9KTtcbiAgICB9LFxuXG4gICAgc3BsaXQ6IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICB2YXIgc3BsaXRWYWx1ZSA9IHt9O1xuXG4gICAgICAgIHZhbHVlLm1hdGNoKEZMT0FUX1JFR0VYKS5mb3JFYWNoKGZ1bmN0aW9uICh2YWx1ZSwgaSkge1xuICAgICAgICAgICAgcmV0dXJuIHNwbGl0VmFsdWVbaV0gPSB2YWx1ZTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIHNwbGl0VmFsdWU7XG4gICAgfSxcblxuICAgIGNvbWJpbmU6IGZ1bmN0aW9uICh2YWx1ZXMsIHRlbXBsYXRlKSB7XG4gICAgICAgIGZvciAodmFyIGtleSBpbiB2YWx1ZXMpIHtcbiAgICAgICAgICAgIGlmICh2YWx1ZXMuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgICAgICAgIHRlbXBsYXRlID0gdGVtcGxhdGUucmVwbGFjZShnZW5lcmF0ZVRva2VuKGtleSksIHZhbHVlc1trZXldKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0ZW1wbGF0ZTtcbiAgICB9XG5cbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5OeVl5OTJZV3gxWlMxMGVYQmxjeTlqYjIxd2JHVjRMbXB6SWwwc0ltNWhiV1Z6SWpwYlhTd2liV0Z3Y0dsdVozTWlPaUk3T3pzN096dEJRVVZCTEVsQlFVMHNWMEZCVnl4SFFVRkhMR3RDUVVGclFpeERRVUZETzBGQlEzWkRMRWxCUVUwc1lVRkJZU3hIUVVGSExGVkJRVU1zUzBGQlN6dFhRVUZMTEVsQlFVa3NSMEZCUnl4TFFVRkxMRWRCUVVjc1IwRkJSenREUVVGQkxFTkJRVU03TzJ0Q1FVVnlRenM3UVVGRldDeFJRVUZKTEVWQlFVVXNWVUZCUXl4TFFVRkxMRVZCUVVzN1FVRkRZaXhaUVVGTkxFOUJRVThzUjBGQlJ5eExRVUZMTEVOQlFVTXNTMEZCU3l4RFFVRkRMRmRCUVZjc1EwRkJReXhEUVVGRE8wRkJRM3BETEdWQlFWRXNWMEZVVUN4UFFVRlBMRVZCVTFFc1QwRkJUeXhEUVVGRExFbEJRVWtzVDBGQlR5eERRVUZETEUxQlFVMHNSMEZCUnl4RFFVRkRMRU5CUVVVN1MwRkRia1E3TzBGQlJVUXNXVUZCVVN4RlFVRkZMRlZCUVVNc1MwRkJTeXhGUVVGTE8wRkJRMnBDTEZsQlFVa3NUMEZCVHl4SFFVRkhMRU5CUVVNc1EwRkJRenRCUVVOb1FpeGxRVUZQTEV0QlFVc3NRMEZCUXl4UFFVRlBMRU5CUVVNc1YwRkJWeXhGUVVGRk8yMUNRVUZOTEdGQlFXRXNRMEZCUXl4UFFVRlBMRVZCUVVVc1EwRkJRenRUUVVGQkxFTkJRVU1zUTBGQlF6dExRVU55UlRzN1FVRkZSQ3hUUVVGTExFVkJRVVVzVlVGQlF5eExRVUZMTEVWQlFVczdRVUZEWkN4WlFVRk5MRlZCUVZVc1IwRkJSeXhGUVVGRkxFTkJRVU03TzBGQlJYUkNMR0ZCUVVzc1EwRkJReXhMUVVGTExFTkJRVU1zVjBGQlZ5eERRVUZETEVOQlFVTXNUMEZCVHl4RFFVRkRMRlZCUVVNc1MwRkJTeXhGUVVGRkxFTkJRVU03YlVKQlFVc3NWVUZCVlN4RFFVRkRMRU5CUVVNc1EwRkJReXhIUVVGSExFdEJRVXM3VTBGQlFTeERRVUZETEVOQlFVTTdPMEZCUlhSRkxHVkJRVThzVlVGQlZTeERRVUZETzB0QlEzSkNPenRCUVVWRUxGZEJRVThzUlVGQlJTeFZRVUZETEUxQlFVMHNSVUZCUlN4UlFVRlJMRVZCUVVzN1FVRkRNMElzWVVGQlN5eEpRVUZKTEVkQlFVY3NTVUZCU1N4TlFVRk5MRVZCUVVVN1FVRkRjRUlzWjBKQlFVa3NUVUZCVFN4RFFVRkRMR05CUVdNc1EwRkJReXhIUVVGSExFTkJRVU1zUlVGQlJUdEJRVU0xUWl4M1FrRkJVU3hIUVVGSExGRkJRVkVzUTBGQlF5eFBRVUZQTEVOQlFVTXNZVUZCWVN4RFFVRkRMRWRCUVVjc1EwRkJReXhGUVVGRkxFMUJRVTBzUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXl4RFFVRkRPMkZCUTJoRk8xTkJRMG83TzBGQlJVUXNaVUZCVHl4UlFVRlJMRU5CUVVNN1MwRkRia0k3TzBOQlJVb2lMQ0ptYVd4bElqb2lZMjl0Y0d4bGVDNXFjeUlzSW5OdmRYSmpaVkp2YjNRaU9pSXZWWE5sY25NdlRXRjBkRkJsY25KNUwxTnBkR1Z6TDNCdmNHMXZkR2x2YmlJc0luTnZkWEpqWlhORGIyNTBaVzUwSWpwYkltbHRjRzl5ZENCN0lHbHpRWEp5WVhrZ2ZTQm1jbTl0SUNjdUxpOXBibU12ZFhScGJITW5PMXh1WEc1amIyNXpkQ0JHVEU5QlZGOVNSVWRGV0NBOUlDOG9MU2svS0Z4Y1pGdGNYR1JjWEM1ZEtpa3ZaenRjYm1OdmJuTjBJR2RsYm1WeVlYUmxWRzlyWlc0Z1BTQW9kRzlyWlc0cElEMCtJQ2NrZXljZ0t5QjBiMnRsYmlBcklDZDlKenRjYmx4dVpYaHdiM0owSUdSbFptRjFiSFFnZTF4dVhHNGdJQ0FnZEdWemREb2dLSFpoYkhWbEtTQTlQaUI3WEc0Z0lDQWdJQ0FnSUdOdmJuTjBJRzFoZEdOb1pYTWdQU0IyWVd4MVpTNXRZWFJqYUNoR1RFOUJWRjlTUlVkRldDazdYRzRnSUNBZ0lDQWdJSEpsZEhWeWJpQW9hWE5CY25KaGVTaHRZWFJqYUdWektTQW1KaUJ0WVhSamFHVnpMbXhsYm1kMGFDQStJREFwTzF4dUlDQWdJSDBzWEc1Y2JpQWdJQ0IwWlcxd2JHRjBaVG9nS0haaGJIVmxLU0E5UGlCN1hHNGdJQ0FnSUNBZ0lHeGxkQ0JqYjNWdWRHVnlJRDBnTUR0Y2JpQWdJQ0FnSUNBZ2NtVjBkWEp1SUhaaGJIVmxMbkpsY0d4aFkyVW9Sa3hQUVZSZlVrVkhSVmdzSUNncElEMCtJR2RsYm1WeVlYUmxWRzlyWlc0b1kyOTFiblJsY2lzcktTazdYRzRnSUNBZ2ZTeGNibHh1SUNBZ0lITndiR2wwT2lBb2RtRnNkV1VwSUQwK0lIdGNiaUFnSUNBZ0lDQWdZMjl1YzNRZ2MzQnNhWFJXWVd4MVpTQTlJSHQ5TzF4dUlDQWdJQ0FnSUNCY2JpQWdJQ0FnSUNBZ2RtRnNkV1V1YldGMFkyZ29Sa3hQUVZSZlVrVkhSVmdwTG1admNrVmhZMmdvS0haaGJIVmxMQ0JwS1NBOVBpQnpjR3hwZEZaaGJIVmxXMmxkSUQwZ2RtRnNkV1VwTzF4dVhHNGdJQ0FnSUNBZ0lISmxkSFZ5YmlCemNHeHBkRlpoYkhWbE8xeHVJQ0FnSUgwc1hHNWNiaUFnSUNCamIyMWlhVzVsT2lBb2RtRnNkV1Z6TENCMFpXMXdiR0YwWlNrZ1BUNGdlMXh1SUNBZ0lDQWdJQ0JtYjNJZ0tHeGxkQ0JyWlhrZ2FXNGdkbUZzZFdWektTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNCcFppQW9kbUZzZFdWekxtaGhjMDkzYmxCeWIzQmxjblI1S0d0bGVTa3BJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0IwWlcxd2JHRjBaU0E5SUhSbGJYQnNZWFJsTG5KbGNHeGhZMlVvWjJWdVpYSmhkR1ZVYjJ0bGJpaHJaWGtwTENCMllXeDFaWE5iYTJWNVhTazdYRzRnSUNBZ0lDQWdJQ0FnSUNCOVhHNGdJQ0FnSUNBZ0lIMWNibHh1SUNBZ0lDQWdJQ0J5WlhSMWNtNGdkR1Z0Y0d4aGRHVTdYRzRnSUNBZ2ZWeHVYRzU5T3lKZGZRPT1cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL3ZhbHVlLXR5cGVzL2NvbXBsZXguanNcbiAqKiBtb2R1bGUgaWQgPSAyNFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX3JnYiA9IHJlcXVpcmUoJy4vcmdiJyk7XG5cbnZhciBfcmdiMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JnYik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmV4cG9ydHMuZGVmYXVsdCA9IHtcbiAgICBkZWZhdWx0UHJvcHM6IF9yZ2IyLmRlZmF1bHQuZGVmYXVsdFByb3BzLFxuXG4gICAgdGVzdDogZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgIHJldHVybiB2YWx1ZSAmJiB2YWx1ZS5pbmRleE9mKCcjJykgPiAtMTtcbiAgICB9LFxuXG4gICAgc3BsaXQ6IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICB2YXIgciA9IHVuZGVmaW5lZCxcbiAgICAgICAgICAgIGcgPSB1bmRlZmluZWQsXG4gICAgICAgICAgICBiID0gdW5kZWZpbmVkO1xuXG4gICAgICAgIC8vIElmIHdlIGhhdmUgNiBjaGFyYWN0ZXJzLCBpZSAjRkYwMDAwXG4gICAgICAgIGlmICh2YWx1ZS5sZW5ndGggPiA0KSB7XG4gICAgICAgICAgICByID0gdmFsdWUuc3Vic3RyKDEsIDIpO1xuICAgICAgICAgICAgZyA9IHZhbHVlLnN1YnN0cigzLCAyKTtcbiAgICAgICAgICAgIGIgPSB2YWx1ZS5zdWJzdHIoNSwgMik7XG5cbiAgICAgICAgICAgIC8vIE9yIHdlIGhhdmUgMyBjaGFyYWN0ZXJzLCBpZSAjRjAwXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgciA9IHZhbHVlLnN1YnN0cigxLCAxKTtcbiAgICAgICAgICAgICAgICBnID0gdmFsdWUuc3Vic3RyKDIsIDEpO1xuICAgICAgICAgICAgICAgIGIgPSB2YWx1ZS5zdWJzdHIoMywgMSk7XG4gICAgICAgICAgICAgICAgciArPSByO1xuICAgICAgICAgICAgICAgIGcgKz0gZztcbiAgICAgICAgICAgICAgICBiICs9IGI7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIFJlZDogcGFyc2VJbnQociwgMTYpLFxuICAgICAgICAgICAgR3JlZW46IHBhcnNlSW50KGcsIDE2KSxcbiAgICAgICAgICAgIEJsdWU6IHBhcnNlSW50KGIsIDE2KSxcbiAgICAgICAgICAgIEFscGhhOiAxXG4gICAgICAgIH07XG4gICAgfSxcblxuICAgIGNvbWJpbmU6IGZ1bmN0aW9uICh2YWx1ZXMpIHtcbiAgICAgICAgcmV0dXJuIF9yZ2IyLmRlZmF1bHQuY29tYmluZSh2YWx1ZXMpO1xuICAgIH1cbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5OeVl5OTJZV3gxWlMxMGVYQmxjeTlvWlhndWFuTWlYU3dpYm1GdFpYTWlPbHRkTENKdFlYQndhVzVuY3lJNklqczdPenM3T3pzN096dHJRa0ZGWlR0QlFVTllMR2RDUVVGWkxFVkJRVVVzWTBGQlNTeFpRVUZaT3p0QlFVVTVRaXhSUVVGSkxFVkJRVVVzVlVGQlF5eExRVUZMTzJWQlFVMHNTMEZCU3l4SlFVRkpMRXRCUVVzc1EwRkJReXhQUVVGUExFTkJRVU1zUjBGQlJ5eERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRPMHRCUVVNN08wRkJSVzVFTEZOQlFVc3NSVUZCUlN4VlFVRkRMRXRCUVVzc1JVRkJTenRCUVVOa0xGbEJRVWtzUTBGQlF5eFpRVUZCTzFsQlFVVXNRMEZCUXl4WlFVRkJPMWxCUVVVc1EwRkJReXhaUVVGQk96czdRVUZCUXl4QlFVZGFMRmxCUVVrc1MwRkJTeXhEUVVGRExFMUJRVTBzUjBGQlJ5eERRVUZETEVWQlFVVTdRVUZEYkVJc1lVRkJReXhIUVVGSExFdEJRVXNzUTBGQlF5eE5RVUZOTEVOQlFVTXNRMEZCUXl4RlFVRkZMRU5CUVVNc1EwRkJReXhEUVVGRE8wRkJRM1pDTEdGQlFVTXNSMEZCUnl4TFFVRkxMRU5CUVVNc1RVRkJUU3hEUVVGRExFTkJRVU1zUlVGQlJTeERRVUZETEVOQlFVTXNRMEZCUXp0QlFVTjJRaXhoUVVGRExFZEJRVWNzUzBGQlN5eERRVUZETEUxQlFVMHNRMEZCUXl4RFFVRkRMRVZCUVVVc1EwRkJReXhEUVVGRE96czdRVUZCUXl4VFFVY3hRaXhOUVVGTk8wRkJRMGdzYVVKQlFVTXNSMEZCUnl4TFFVRkxMRU5CUVVNc1RVRkJUU3hEUVVGRExFTkJRVU1zUlVGQlJTeERRVUZETEVOQlFVTXNRMEZCUXp0QlFVTjJRaXhwUWtGQlF5eEhRVUZITEV0QlFVc3NRMEZCUXl4TlFVRk5MRU5CUVVNc1EwRkJReXhGUVVGRkxFTkJRVU1zUTBGQlF5eERRVUZETzBGQlEzWkNMR2xDUVVGRExFZEJRVWNzUzBGQlN5eERRVUZETEUxQlFVMHNRMEZCUXl4RFFVRkRMRVZCUVVVc1EwRkJReXhEUVVGRExFTkJRVU03UVVGRGRrSXNhVUpCUVVNc1NVRkJTU3hEUVVGRExFTkJRVU03UVVGRFVDeHBRa0ZCUXl4SlFVRkpMRU5CUVVNc1EwRkJRenRCUVVOUUxHbENRVUZETEVsQlFVa3NRMEZCUXl4RFFVRkRPMkZCUTFZN08wRkJSVVFzWlVGQlR6dEJRVU5JTEdWQlFVY3NSVUZCUlN4UlFVRlJMRU5CUVVNc1EwRkJReXhGUVVGRkxFVkJRVVVzUTBGQlF6dEJRVU53UWl4cFFrRkJTeXhGUVVGRkxGRkJRVkVzUTBGQlF5eERRVUZETEVWQlFVVXNSVUZCUlN4RFFVRkRPMEZCUTNSQ0xHZENRVUZKTEVWQlFVVXNVVUZCVVN4RFFVRkRMRU5CUVVNc1JVRkJSU3hGUVVGRkxFTkJRVU03UVVGRGNrSXNhVUpCUVVzc1JVRkJSU3hEUVVGRE8xTkJRMWdzUTBGQlF6dExRVU5NT3p0QlFVVkVMRmRCUVU4c1JVRkJSU3hWUVVGRExFMUJRVTA3WlVGQlN5eGpRVUZKTEU5QlFVOHNRMEZCUXl4TlFVRk5MRU5CUVVNN1MwRkJRVHREUVVNelF5SXNJbVpwYkdVaU9pSm9aWGd1YW5NaUxDSnpiM1Z5WTJWU2IyOTBJam9pTDFWelpYSnpMMDFoZEhSUVpYSnllUzlUYVhSbGN5OXdiM0J0YjNScGIyNGlMQ0p6YjNWeVkyVnpRMjl1ZEdWdWRDSTZXeUpwYlhCdmNuUWdjbWRpSUdaeWIyMGdKeTR2Y21kaUp6dGNibHh1Wlhod2IzSjBJR1JsWm1GMWJIUWdlMXh1SUNBZ0lHUmxabUYxYkhSUWNtOXdjem9nY21kaUxtUmxabUYxYkhSUWNtOXdjeXhjYmx4dUlDQWdJSFJsYzNRNklDaDJZV3gxWlNrZ1BUNGdLSFpoYkhWbElDWW1JSFpoYkhWbExtbHVaR1Y0VDJZb0p5TW5LU0ErSUMweEtTeGNibHh1SUNBZ0lITndiR2wwT2lBb2RtRnNkV1VwSUQwK0lIdGNiaUFnSUNBZ0lDQWdiR1YwSUhJc0lHY3NJR0k3WEc1Y2JpQWdJQ0FnSUNBZ0x5OGdTV1lnZDJVZ2FHRjJaU0EySUdOb1lYSmhZM1JsY25Nc0lHbGxJQ05HUmpBd01EQmNiaUFnSUNBZ0lDQWdhV1lnS0haaGJIVmxMbXhsYm1kMGFDQStJRFFwSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJSElnUFNCMllXeDFaUzV6ZFdKemRISW9NU3dnTWlrN1hHNGdJQ0FnSUNBZ0lDQWdJQ0JuSUQwZ2RtRnNkV1V1YzNWaWMzUnlLRE1zSURJcE8xeHVJQ0FnSUNBZ0lDQWdJQ0FnWWlBOUlIWmhiSFZsTG5OMVluTjBjaWcxTENBeUtUdGNibHh1SUNBZ0lDQWdJQ0F2THlCUGNpQjNaU0JvWVhabElETWdZMmhoY21GamRHVnljeXdnYVdVZ0kwWXdNRnh1SUNBZ0lDQWdJQ0I5SUdWc2MyVWdlMXh1SUNBZ0lDQWdJQ0FnSUNBZ2NpQTlJSFpoYkhWbExuTjFZbk4wY2lneExDQXhLVHRjYmlBZ0lDQWdJQ0FnSUNBZ0lHY2dQU0IyWVd4MVpTNXpkV0p6ZEhJb01pd2dNU2s3WEc0Z0lDQWdJQ0FnSUNBZ0lDQmlJRDBnZG1Gc2RXVXVjM1ZpYzNSeUtETXNJREVwTzF4dUlDQWdJQ0FnSUNBZ0lDQWdjaUFyUFNCeU8xeHVJQ0FnSUNBZ0lDQWdJQ0FnWnlBclBTQm5PMXh1SUNBZ0lDQWdJQ0FnSUNBZ1lpQXJQU0JpTzF4dUlDQWdJQ0FnSUNCOVhHNWNiaUFnSUNBZ0lDQWdjbVYwZFhKdUlIdGNiaUFnSUNBZ0lDQWdJQ0FnSUZKbFpEb2djR0Z5YzJWSmJuUW9jaXdnTVRZcExGeHVJQ0FnSUNBZ0lDQWdJQ0FnUjNKbFpXNDZJSEJoY25ObFNXNTBLR2NzSURFMktTeGNiaUFnSUNBZ0lDQWdJQ0FnSUVKc2RXVTZJSEJoY25ObFNXNTBLR0lzSURFMktTeGNiaUFnSUNBZ0lDQWdJQ0FnSUVGc2NHaGhPaUF4WEc0Z0lDQWdJQ0FnSUgwN1hHNGdJQ0FnZlN4Y2JseHVJQ0FnSUdOdmJXSnBibVU2SUNoMllXeDFaWE1wSUQwK0lISm5ZaTVqYjIxaWFXNWxLSFpoYkhWbGN5bGNibjA3SWwxOVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvdmFsdWUtdHlwZXMvaGV4LmpzXG4gKiogbW9kdWxlIGlkID0gMjVcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF9kZWZhdWx0UHJvcHMgPSByZXF1aXJlKCcuL3NldHRpbmdzL2RlZmF1bHQtcHJvcHMnKTtcblxudmFyIF9kaWN0aW9uYXJ5ID0gcmVxdWlyZSgnLi9zZXR0aW5ncy9kaWN0aW9uYXJ5Jyk7XG5cbnZhciBfdXRpbHMgPSByZXF1aXJlKCcuLi9pbmMvdXRpbHMnKTtcblxuZXhwb3J0cy5kZWZhdWx0ID0ge1xuICAgIGRlZmF1bHRQcm9wczoge1xuICAgICAgICBIdWU6IHtcbiAgICAgICAgICAgIG1pbjogMCxcbiAgICAgICAgICAgIG1heDogMzYwXG4gICAgICAgIH0sXG4gICAgICAgIFNhdHVyYXRpb246IF9kZWZhdWx0UHJvcHMucGVyY2VudCxcbiAgICAgICAgTGlnaHRuZXNzOiBfZGVmYXVsdFByb3BzLnBlcmNlbnQsXG4gICAgICAgIEFscGhhOiBfZGVmYXVsdFByb3BzLm9wYWNpdHlcbiAgICB9LFxuXG4gICAgdGVzdDogZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgIHJldHVybiB2YWx1ZSAmJiB2YWx1ZS5pbmRleE9mKCdoc2wnKSA+IC0xO1xuICAgIH0sXG5cbiAgICBzcGxpdDogZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgIHJldHVybiAoMCwgX3V0aWxzLmdldENvbG9yVmFsdWVzKSh2YWx1ZSwgX2RpY3Rpb25hcnkuaHNsKTtcbiAgICB9LFxuXG4gICAgY29tYmluZTogZnVuY3Rpb24gKHZhbHVlcykge1xuICAgICAgICByZXR1cm4gKDAsIF91dGlscy5jcmVhdGVGdW5jdGlvblN0cmluZykoKDAsIF91dGlscy5jcmVhdGVEZWxpbWl0ZWQpKHZhbHVlcywgX2RpY3Rpb25hcnkuaHNsLCAnLCAnLCAyKSwgJ2hzbGEnKTtcbiAgICB9XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluTnlZeTkyWVd4MVpTMTBlWEJsY3k5b2Myd3Vhbk1pWFN3aWJtRnRaWE1pT2x0ZExDSnRZWEJ3YVc1bmN5STZJanM3T3pzN096czdPenRyUWtGSlpUdEJRVU5ZTEdkQ1FVRlpMRVZCUVVVN1FVRkRWaXhYUVVGSExFVkJRVVU3UVVGRFJDeGxRVUZITEVWQlFVVXNRMEZCUXp0QlFVTk9MR1ZCUVVjc1JVRkJSU3hIUVVGSE8xTkJRMWc3UVVGRFJDeHJRa0ZCVlN4blFrRldWQ3hQUVVGUExFRkJWVmM3UVVGRGJrSXNhVUpCUVZNc1owSkJXRklzVDBGQlR5eEJRVmRWTzBGQlEyeENMR0ZCUVVzc1owSkJXa3NzVDBGQlR5eEJRVmxJTzB0QlEycENPenRCUVVWRUxGRkJRVWtzUlVGQlJTeFZRVUZETEV0QlFVczdaVUZCVFN4TFFVRkxMRWxCUVVrc1MwRkJTeXhEUVVGRExFOUJRVThzUTBGQlF5eExRVUZMTEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNN1MwRkJRenM3UVVGRmNrUXNVMEZCU3l4RlFVRkZMRlZCUVVNc1MwRkJTenRsUVVGTExGZEJaakJDTEdOQlFXTXNSVUZsZWtJc1MwRkJTeXhqUVdoQ2FrTXNSMEZCUnl4RFFXZENlVU03UzBGQlFUczdRVUZGYWtRc1YwRkJUeXhGUVVGRkxGVkJRVU1zVFVGQlRUdGxRVUZMTEZkQmFrSkRMRzlDUVVGdlFpeEZRV2xDUVN4WFFXcENja01zWlVGQlpTeEZRV2xDYzBNc1RVRkJUU3hqUVd4Q00wUXNSMEZCUnl4RlFXdENiMFVzU1VGQlNTeEZRVUZGTEVOQlFVTXNRMEZCUXl4RlFVRkZMRTFCUVUwc1EwRkJRenRMUVVGQk8wTkJRMmhISWl3aVptbHNaU0k2SW1oemJDNXFjeUlzSW5OdmRYSmpaVkp2YjNRaU9pSXZWWE5sY25NdlRXRjBkRkJsY25KNUwxTnBkR1Z6TDNCdmNHMXZkR2x2YmlJc0luTnZkWEpqWlhORGIyNTBaVzUwSWpwYkltbHRjRzl5ZENCN0lIQmxjbU5sYm5Rc0lHOXdZV05wZEhrZ2ZTQm1jbTl0SUNjdUwzTmxkSFJwYm1kekwyUmxabUYxYkhRdGNISnZjSE1uTzF4dWFXMXdiM0owSUhzZ2FITnNJR0Z6SUdoemJGUmxjbTF6SUgwZ1puSnZiU0FuTGk5elpYUjBhVzVuY3k5a2FXTjBhVzl1WVhKNUp6dGNibWx0Y0c5eWRDQjdJR055WldGMFpVUmxiR2x0YVhSbFpDd2dZM0psWVhSbFJuVnVZM1JwYjI1VGRISnBibWNzSUdkbGRFTnZiRzl5Vm1Gc2RXVnpJSDBnWm5KdmJTQW5MaTR2YVc1akwzVjBhV3h6Snp0Y2JseHVaWGh3YjNKMElHUmxabUYxYkhRZ2UxeHVJQ0FnSUdSbFptRjFiSFJRY205d2N6b2dlMXh1SUNBZ0lDQWdJQ0JJZFdVNklIdGNiaUFnSUNBZ0lDQWdJQ0FnSUcxcGJqb2dNQ3hjYmlBZ0lDQWdJQ0FnSUNBZ0lHMWhlRG9nTXpZd1hHNGdJQ0FnSUNBZ0lIMHNYRzRnSUNBZ0lDQWdJRk5oZEhWeVlYUnBiMjQ2SUhCbGNtTmxiblFzWEc0Z0lDQWdJQ0FnSUV4cFoyaDBibVZ6Y3pvZ2NHVnlZMlZ1ZEN4Y2JpQWdJQ0FnSUNBZ1FXeHdhR0U2SUc5d1lXTnBkSGxjYmlBZ0lDQjlMRnh1WEc0Z0lDQWdkR1Z6ZERvZ0tIWmhiSFZsS1NBOVBpQW9kbUZzZFdVZ0ppWWdkbUZzZFdVdWFXNWtaWGhQWmlnbmFITnNKeWtnUGlBdE1Ta3NYRzVjYmlBZ0lDQnpjR3hwZERvZ0tIWmhiSFZsS1NBOVBpQm5aWFJEYjJ4dmNsWmhiSFZsY3loMllXeDFaU3dnYUhOc1ZHVnliWE1wTEZ4dVhHNGdJQ0FnWTI5dFltbHVaVG9nS0haaGJIVmxjeWtnUFQ0Z1kzSmxZWFJsUm5WdVkzUnBiMjVUZEhKcGJtY29ZM0psWVhSbFJHVnNhVzFwZEdWa0tIWmhiSFZsY3l3Z2FITnNWR1Z5YlhNc0lDY3NJQ2NzSURJcExDQW5hSE5zWVNjcFhHNTlPMXh1SWwxOVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvdmFsdWUtdHlwZXMvaHNsLmpzXG4gKiogbW9kdWxlIGlkID0gMjZcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF9kaWN0aW9uYXJ5ID0gcmVxdWlyZSgnLi9zZXR0aW5ncy9kaWN0aW9uYXJ5Jyk7XG5cbnZhciBfdXRpbHMgPSByZXF1aXJlKCcuLi9pbmMvdXRpbHMnKTtcblxudmFyIF9weCA9IHJlcXVpcmUoJy4vcHgnKTtcblxudmFyIF9weDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9weCk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmV4cG9ydHMuZGVmYXVsdCA9IHtcbiAgICBkZWZhdWx0UHJvcHM6IF9weDIuZGVmYXVsdC5kZWZhdWx0UHJvcHMsXG5cbiAgICAvKlxuICAgICAgICBTcGxpdCBkaW1lbnNpb25zIGluIGZvcm1hdCBcIlRvcCBSaWdodCBCb3R0b20gTGVmdFwiXG4gICAgICAgIFxuICAgICAgICBAcGFyYW0gW3N0cmluZ106IFBvc2l0aW9uIHZhbHVlc1xuICAgICAgICAgICAgXCIyMHB4IDAgMzBweCA0MHB4XCIgLT4gezIwcHgsIDAsIDMwcHgsIDQwcHh9XG4gICAgICAgICAgICBcIjIwcHggMCAzMHB4XCIgLT4gezIwcHgsIDAsIDMwcHgsIDB9XG4gICAgICAgICAgICBcIjIwcHggMFwiIC0+IHsyMHB4LCAwLCAyMHB4LCAwfVxuICAgICAgICAgICAgXCIyMHB4XCIgLT4gezIwcHgsIDIwcHgsIDIwcHgsIDIwcHh9XG4gICAgICAgIFxuICAgICAgICBAcmV0dXJuIFtvYmplY3RdOiBPYmplY3Qgd2l0aCBUL1IvQi9MIG1ldHJpY3NcbiAgICAqL1xuICAgIHNwbGl0OiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgdmFyIHNwbGl0VmFsdWUgPSB7fTtcbiAgICAgICAgdmFyIHNwbGl0UG9zaXRpb25zID0gKDAsIF91dGlscy5zcGxpdFNwYWNlRGVsaW1pdGVkKSh2YWx1ZSk7XG4gICAgICAgIHZhciBudW1Qb3NpdGlvbnMgPSBzcGxpdFBvc2l0aW9ucy5sZW5ndGg7XG4gICAgICAgIHZhciBqdW1wQmFjayA9IG51bVBvc2l0aW9ucyAhPT0gMSA/IDIgOiAxO1xuICAgICAgICB2YXIgaiA9IDA7XG5cbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCA0OyBpKyspIHtcbiAgICAgICAgICAgIHNwbGl0VmFsdWVbX2RpY3Rpb25hcnkucG9zaXRpb25zW2ldXSA9IHNwbGl0UG9zaXRpb25zW2pdO1xuXG4gICAgICAgICAgICAvLyBKdW1wIGJhY2sgKHRvIHN0YXJ0KSBjb3VudGVyIGlmIHdlJ3ZlIHJlYWNoZWQgdGhlIGVuZCBvZiBvdXIgdmFsdWVzXG4gICAgICAgICAgICBqKys7XG4gICAgICAgICAgICBqID0gaiA9PT0gbnVtUG9zaXRpb25zID8gaiAtIGp1bXBCYWNrIDogajtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBzcGxpdFZhbHVlO1xuICAgIH0sXG5cbiAgICBjb21iaW5lOiBmdW5jdGlvbiAodmFsdWVzKSB7XG4gICAgICAgIHJldHVybiAoMCwgX3V0aWxzLmNyZWF0ZURlbGltaXRlZCkodmFsdWVzLCBfZGljdGlvbmFyeS5wb3NpdGlvbnMsICcgJyk7XG4gICAgfVxufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbk55WXk5MllXeDFaUzEwZVhCbGN5OXdiM05wZEdsdmJuTXVhbk1pWFN3aWJtRnRaWE1pT2x0ZExDSnRZWEJ3YVc1bmN5STZJanM3T3pzN096czdPenM3T3pzN2EwSkJTV1U3UVVGRFdDeG5Ra0ZCV1N4RlFVRkZMR0ZCUVZrc1dVRkJXVHM3T3pzN096czdPenM3T3p0QlFXRjBReXhUUVVGTExFVkJRVVVzVlVGQlF5eExRVUZMTEVWQlFVczdRVUZEWkN4WlFVRk5MRlZCUVZVc1IwRkJSeXhGUVVGRkxFTkJRVU03UVVGRGRFSXNXVUZCVFN4alFVRmpMRWRCUVVjc1YwRnVRa3dzYlVKQlFXMUNMRVZCYlVKTkxFdEJRVXNzUTBGQlF5eERRVUZETzBGQlEyeEVMRmxCUVUwc1dVRkJXU3hIUVVGSExHTkJRV01zUTBGQlF5eE5RVUZOTEVOQlFVTTdRVUZETTBNc1dVRkJUU3hSUVVGUkxFZEJRVWNzUVVGQlF5eFpRVUZaTEV0QlFVc3NRMEZCUXl4SFFVRkpMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU03UVVGRE9VTXNXVUZCU1N4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRE96dEJRVVZXTEdGQlFVc3NTVUZCU1N4RFFVRkRMRWRCUVVjc1EwRkJReXhGUVVGRkxFTkJRVU1zUjBGQlJ5eERRVUZETEVWQlFVVXNRMEZCUXl4RlFVRkZMRVZCUVVVN1FVRkRlRUlzYzBKQlFWVXNRMEZCUXl4WlFURkNaQ3hUUVVGVExFTkJNRUpsTEVOQlFVTXNRMEZCUXl4RFFVRkRMRWRCUVVjc1kwRkJZeXhEUVVGRExFTkJRVU1zUTBGQlF6czdPMEZCUVVNc1FVRkhOME1zWVVGQlF5eEZRVUZGTEVOQlFVTTdRVUZEU2l4aFFVRkRMRWRCUVVjc1FVRkJReXhEUVVGRExFdEJRVXNzV1VGQldTeEhRVUZKTEVOQlFVTXNSMEZCUnl4UlFVRlJMRWRCUVVjc1EwRkJReXhEUVVGRE8xTkJReTlET3p0QlFVVkVMR1ZCUVU4c1ZVRkJWU3hEUVVGRE8wdEJRM0pDT3p0QlFVVkVMRmRCUVU4c1JVRkJSU3hWUVVGRExFMUJRVTA3WlVGQlN5eFhRVzVEYUVJc1pVRkJaU3hGUVcxRGFVSXNUVUZCVFN4alFYQkRkRU1zVTBGQlV5eEZRVzlETUVNc1IwRkJSeXhEUVVGRE8wdEJRVUU3UTBGREwwUWlMQ0ptYVd4bElqb2ljRzl6YVhScGIyNXpMbXB6SWl3aWMyOTFjbU5sVW05dmRDSTZJaTlWYzJWeWN5OU5ZWFIwVUdWeWNua3ZVMmwwWlhNdmNHOXdiVzkwYVc5dUlpd2ljMjkxY21ObGMwTnZiblJsYm5RaU9sc2lhVzF3YjNKMElIc2djRzl6YVhScGIyNXpJSDBnWm5KdmJTQW5MaTl6WlhSMGFXNW5jeTlrYVdOMGFXOXVZWEo1Snp0Y2JtbHRjRzl5ZENCN0lHTnlaV0YwWlVSbGJHbHRhWFJsWkN3Z2MzQnNhWFJUY0dGalpVUmxiR2x0YVhSbFpDQjlJR1p5YjIwZ0p5NHVMMmx1WXk5MWRHbHNjeWM3WEc1cGJYQnZjblFnY0hoV1lXeDFaVlI1Y0dVZ1puSnZiU0FuTGk5d2VDYzdYRzVjYm1WNGNHOXlkQ0JrWldaaGRXeDBJSHRjYmlBZ0lDQmtaV1poZFd4MFVISnZjSE02SUhCNFZtRnNkV1ZVZVhCbExtUmxabUYxYkhSUWNtOXdjeXhjYmx4dUlDQWdJQzhxWEc0Z0lDQWdJQ0FnSUZOd2JHbDBJR1JwYldWdWMybHZibk1nYVc0Z1ptOXliV0YwSUZ3aVZHOXdJRkpwWjJoMElFSnZkSFJ2YlNCTVpXWjBYQ0pjYmlBZ0lDQWdJQ0FnWEc0Z0lDQWdJQ0FnSUVCd1lYSmhiU0JiYzNSeWFXNW5YVG9nVUc5emFYUnBiMjRnZG1Gc2RXVnpYRzRnSUNBZ0lDQWdJQ0FnSUNCY0lqSXdjSGdnTUNBek1IQjRJRFF3Y0hoY0lpQXRQaUI3TWpCd2VDd2dNQ3dnTXpCd2VDd2dOREJ3ZUgxY2JpQWdJQ0FnSUNBZ0lDQWdJRndpTWpCd2VDQXdJRE13Y0hoY0lpQXRQaUI3TWpCd2VDd2dNQ3dnTXpCd2VDd2dNSDFjYmlBZ0lDQWdJQ0FnSUNBZ0lGd2lNakJ3ZUNBd1hDSWdMVDRnZXpJd2NIZ3NJREFzSURJd2NIZ3NJREI5WEc0Z0lDQWdJQ0FnSUNBZ0lDQmNJakl3Y0hoY0lpQXRQaUI3TWpCd2VDd2dNakJ3ZUN3Z01qQndlQ3dnTWpCd2VIMWNiaUFnSUNBZ0lDQWdYRzRnSUNBZ0lDQWdJRUJ5WlhSMWNtNGdXMjlpYW1WamRGMDZJRTlpYW1WamRDQjNhWFJvSUZRdlVpOUNMMHdnYldWMGNtbGpjMXh1SUNBZ0lDb3ZYRzRnSUNBZ2MzQnNhWFE2SUNoMllXeDFaU2tnUFQ0Z2UxeHVJQ0FnSUNBZ0lDQmpiMjV6ZENCemNHeHBkRlpoYkhWbElEMGdlMzA3WEc0Z0lDQWdJQ0FnSUdOdmJuTjBJSE53YkdsMFVHOXphWFJwYjI1eklEMGdjM0JzYVhSVGNHRmpaVVJsYkdsdGFYUmxaQ2gyWVd4MVpTazdYRzRnSUNBZ0lDQWdJR052Ym5OMElHNTFiVkJ2YzJsMGFXOXVjeUE5SUhOd2JHbDBVRzl6YVhScGIyNXpMbXhsYm1kMGFEdGNiaUFnSUNBZ0lDQWdZMjl1YzNRZ2FuVnRjRUpoWTJzZ1BTQW9iblZ0VUc5emFYUnBiMjV6SUNFOVBTQXhLU0EvSURJZ09pQXhPMXh1SUNBZ0lDQWdJQ0JzWlhRZ2FpQTlJREE3WEc1Y2JpQWdJQ0FnSUNBZ1ptOXlJQ2hzWlhRZ2FTQTlJREE3SUdrZ1BDQTBPeUJwS3lzcElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUhOd2JHbDBWbUZzZFdWYmNHOXphWFJwYjI1elcybGRYU0E5SUhOd2JHbDBVRzl6YVhScGIyNXpXMnBkTzF4dVhHNGdJQ0FnSUNBZ0lDQWdJQ0F2THlCS2RXMXdJR0poWTJzZ0tIUnZJSE4wWVhKMEtTQmpiM1Z1ZEdWeUlHbG1JSGRsSjNabElISmxZV05vWldRZ2RHaGxJR1Z1WkNCdlppQnZkWElnZG1Gc2RXVnpYRzRnSUNBZ0lDQWdJQ0FnSUNCcUt5czdYRzRnSUNBZ0lDQWdJQ0FnSUNCcUlEMGdLR29nUFQwOUlHNTFiVkJ2YzJsMGFXOXVjeWtnUHlCcUlDMGdhblZ0Y0VKaFkyc2dPaUJxTzF4dUlDQWdJQ0FnSUNCOVhHNWNiaUFnSUNBZ0lDQWdjbVYwZFhKdUlITndiR2wwVm1Gc2RXVTdYRzRnSUNBZ2ZTeGNibHh1SUNBZ0lHTnZiV0pwYm1VNklDaDJZV3gxWlhNcElEMCtJR055WldGMFpVUmxiR2x0YVhSbFpDaDJZV3gxWlhNc0lIQnZjMmwwYVc5dWN5d2dKeUFuS1Z4dWZUc2lYWDA9XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy92YWx1ZS10eXBlcy9wb3NpdGlvbnMuanNcbiAqKiBtb2R1bGUgaWQgPSAyN1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0cy5kZWZhdWx0ID0ge1xuICAgIGRlZmF1bHRQcm9wczoge1xuICAgICAgICB1bml0OiAncHgnXG4gICAgfVxufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbk55WXk5MllXeDFaUzEwZVhCbGN5OXdlQzVxY3lKZExDSnVZVzFsY3lJNlcxMHNJbTFoY0hCcGJtZHpJam9pT3pzN2EwSkJRV1U3UVVGRFdDeG5Ra0ZCV1N4RlFVRkZPMEZCUTFZc1dVRkJTU3hGUVVGRkxFbEJRVWs3UzBGRFlqdERRVU5LSWl3aVptbHNaU0k2SW5CNExtcHpJaXdpYzI5MWNtTmxVbTl2ZENJNklpOVZjMlZ5Y3k5TllYUjBVR1Z5Y25rdlUybDBaWE12Y0c5d2JXOTBhVzl1SWl3aWMyOTFjbU5sYzBOdmJuUmxiblFpT2xzaVpYaHdiM0owSUdSbFptRjFiSFFnZTF4dUlDQWdJR1JsWm1GMWJIUlFjbTl3Y3pvZ2UxeHVJQ0FnSUNBZ0lDQjFibWwwT2lBbmNIZ25YRzRnSUNBZ2ZWeHVmVHNpWFgwPVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvdmFsdWUtdHlwZXMvcHguanNcbiAqKiBtb2R1bGUgaWQgPSAyOFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX3V0aWxzID0gcmVxdWlyZSgnLi4vaW5jL3V0aWxzJyk7XG5cbnZhciBfZGljdGlvbmFyeSA9IHJlcXVpcmUoJy4vc2V0dGluZ3MvZGljdGlvbmFyeScpO1xuXG52YXIgX2RlZmF1bHRQcm9wcyA9IHJlcXVpcmUoJy4vc2V0dGluZ3MvZGVmYXVsdC1wcm9wcycpO1xuXG5leHBvcnRzLmRlZmF1bHQgPSB7XG4gICAgZGVmYXVsdFByb3BzOiB7XG4gICAgICAgIFJlZDogX2RlZmF1bHRQcm9wcy5yZ2IsXG4gICAgICAgIEdyZWVuOiBfZGVmYXVsdFByb3BzLnJnYixcbiAgICAgICAgQmx1ZTogX2RlZmF1bHRQcm9wcy5yZ2IsXG4gICAgICAgIEFscGhhOiBfZGVmYXVsdFByb3BzLm9wYWNpdHlcbiAgICB9LFxuXG4gICAgdGVzdDogZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgIHJldHVybiB2YWx1ZSAmJiB2YWx1ZS5pbmRleE9mKCdyZ2InKSA+IC0xO1xuICAgIH0sXG5cbiAgICBzcGxpdDogZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgIHJldHVybiAoMCwgX3V0aWxzLmdldENvbG9yVmFsdWVzKSh2YWx1ZSwgX2RpY3Rpb25hcnkucmdiKTtcbiAgICB9LFxuXG4gICAgY29tYmluZTogZnVuY3Rpb24gKHZhbHVlcykge1xuICAgICAgICByZXR1cm4gKDAsIF91dGlscy5jcmVhdGVGdW5jdGlvblN0cmluZykoKDAsIF91dGlscy5jcmVhdGVEZWxpbWl0ZWQpKHZhbHVlcywgX2RpY3Rpb25hcnkucmdiLCAnLCAnLCAyKSwgJ3JnYmEnKTtcbiAgICB9XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluTnlZeTkyWVd4MVpTMTBlWEJsY3k5eVoySXVhbk1pWFN3aWJtRnRaWE1pT2x0ZExDSnRZWEJ3YVc1bmN5STZJanM3T3pzN096czdPenRyUWtGSlpUdEJRVU5ZTEdkQ1FVRlpMRVZCUVVVN1FVRkRWaXhYUVVGSExHZENRVXBHTEVkQlFVY3NRVUZKVnp0QlFVTm1MR0ZCUVVzc1owSkJURW9zUjBGQlJ5eEJRVXRoTzBGQlEycENMRmxCUVVrc1owSkJUa2dzUjBGQlJ5eEJRVTFaTzBGQlEyaENMR0ZCUVVzc1owSkJVR1VzVDBGQlR5eEJRVTlPTzB0QlEzaENPenRCUVVWRUxGRkJRVWtzUlVGQlJTeFZRVUZETEV0QlFVczdaVUZCVFN4TFFVRkxMRWxCUVVrc1MwRkJTeXhEUVVGRExFOUJRVThzUTBGQlF5eExRVUZMTEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNN1MwRkJRenM3UVVGRmNrUXNVMEZCU3l4RlFVRkZMRlZCUVVNc1MwRkJTenRsUVVGTExGZEJaREJDTEdOQlFXTXNSVUZqZWtJc1MwRkJTeXhqUVdKcVF5eEhRVUZITEVOQllYbERPMHRCUVVFN08wRkJSV3BFTEZkQlFVOHNSVUZCUlN4VlFVRkRMRTFCUVUwN1pVRkJTeXhYUVdoQ1F5eHZRa0ZCYjBJc1JVRm5Ra0VzVjBGb1FuSkRMR1ZCUVdVc1JVRm5Rbk5ETEUxQlFVMHNZMEZtTTBRc1IwRkJSeXhGUVdWdlJTeEpRVUZKTEVWQlFVVXNRMEZCUXl4RFFVRkRMRVZCUVVVc1RVRkJUU3hEUVVGRE8wdEJRVUU3UTBGRGFFY2lMQ0ptYVd4bElqb2ljbWRpTG1weklpd2ljMjkxY21ObFVtOXZkQ0k2SWk5VmMyVnljeTlOWVhSMFVHVnljbmt2VTJsMFpYTXZjRzl3Ylc5MGFXOXVJaXdpYzI5MWNtTmxjME52Ym5SbGJuUWlPbHNpYVcxd2IzSjBJSHNnWTNKbFlYUmxSR1ZzYVcxcGRHVmtMQ0JqY21WaGRHVkdkVzVqZEdsdmJsTjBjbWx1Wnl3Z1oyVjBRMjlzYjNKV1lXeDFaWE1nZlNCbWNtOXRJQ2N1TGk5cGJtTXZkWFJwYkhNbk8xeHVhVzF3YjNKMElIc2djbWRpSUdGeklISm5ZbFJsY20xeklIMGdabkp2YlNBbkxpOXpaWFIwYVc1bmN5OWthV04wYVc5dVlYSjVKenRjYm1sdGNHOXlkQ0I3SUhKbllpQmhjeUJrWldaaGRXeDBVa2RDTENCdmNHRmphWFI1SUdGeklHUmxabUYxYkhSUGNHRmphWFI1SUgwZ1puSnZiU0FuTGk5elpYUjBhVzVuY3k5a1pXWmhkV3gwTFhCeWIzQnpKenRjYmx4dVpYaHdiM0owSUdSbFptRjFiSFFnZTF4dUlDQWdJR1JsWm1GMWJIUlFjbTl3Y3pvZ2UxeHVJQ0FnSUNBZ0lDQlNaV1E2SUdSbFptRjFiSFJTUjBJc1hHNGdJQ0FnSUNBZ0lFZHlaV1Z1T2lCa1pXWmhkV3gwVWtkQ0xGeHVJQ0FnSUNBZ0lDQkNiSFZsT2lCa1pXWmhkV3gwVWtkQ0xGeHVJQ0FnSUNBZ0lDQkJiSEJvWVRvZ1pHVm1ZWFZzZEU5d1lXTnBkSGxjYmlBZ0lDQjlMRnh1WEc0Z0lDQWdkR1Z6ZERvZ0tIWmhiSFZsS1NBOVBpQW9kbUZzZFdVZ0ppWWdkbUZzZFdVdWFXNWtaWGhQWmlnbmNtZGlKeWtnUGlBdE1Ta3NYRzVjYmlBZ0lDQnpjR3hwZERvZ0tIWmhiSFZsS1NBOVBpQm5aWFJEYjJ4dmNsWmhiSFZsY3loMllXeDFaU3dnY21kaVZHVnliWE1wTEZ4dVhHNGdJQ0FnWTI5dFltbHVaVG9nS0haaGJIVmxjeWtnUFQ0Z1kzSmxZWFJsUm5WdVkzUnBiMjVUZEhKcGJtY29ZM0psWVhSbFJHVnNhVzFwZEdWa0tIWmhiSFZsY3l3Z2NtZGlWR1Z5YlhNc0lDY3NJQ2NzSURJcExDQW5jbWRpWVNjcFhHNTlPeUpkZlE9PVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvdmFsdWUtdHlwZXMvcmdiLmpzXG4gKiogbW9kdWxlIGlkID0gMjlcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0cy5kZWZhdWx0ID0ge1xuICAgIGRlZmF1bHRQcm9wczoge1xuICAgICAgICBjdXJyZW50OiAxXG4gICAgfVxufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbk55WXk5MllXeDFaUzEwZVhCbGN5OXpZMkZzWlM1cWN5SmRMQ0p1WVcxbGN5STZXMTBzSW0xaGNIQnBibWR6SWpvaU96czdhMEpCUVdVN1FVRkRXQ3huUWtGQldTeEZRVUZGTzBGQlExWXNaVUZCVHl4RlFVRkZMRU5CUVVNN1MwRkRZanREUVVOS0lpd2labWxzWlNJNkluTmpZV3hsTG1weklpd2ljMjkxY21ObFVtOXZkQ0k2SWk5VmMyVnljeTlOWVhSMFVHVnljbmt2VTJsMFpYTXZjRzl3Ylc5MGFXOXVJaXdpYzI5MWNtTmxjME52Ym5SbGJuUWlPbHNpWlhod2IzSjBJR1JsWm1GMWJIUWdlMXh1SUNBZ0lHUmxabUYxYkhSUWNtOXdjem9nZTF4dUlDQWdJQ0FnSUNCamRYSnlaVzUwT2lBeFhHNGdJQ0FnZlZ4dWZUc2lYWDA9XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy92YWx1ZS10eXBlcy9zY2FsZS5qc1xuICoqIG1vZHVsZSBpZCA9IDMwXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbnZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfY29sb3IgPSByZXF1aXJlKCcuL2NvbG9yJyk7XG5cbnZhciBfY29sb3IyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY29sb3IpO1xuXG52YXIgX3B4ID0gcmVxdWlyZSgnLi9weCcpO1xuXG52YXIgX2RpY3Rpb25hcnkgPSByZXF1aXJlKCcuL3NldHRpbmdzL2RpY3Rpb25hcnknKTtcblxudmFyIF91dGlscyA9IHJlcXVpcmUoJy4uL2luYy91dGlscycpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG52YXIgc2hhZG93V2l0aG91dENvbG9yVGVybXMgPSBfZGljdGlvbmFyeS5zaGFkb3cuc2xpY2UoMCwgNCk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IHtcbiAgICBkZWZhdWx0UHJvcHM6IF9leHRlbmRzKHt9LCBfY29sb3IyLmRlZmF1bHQuZGVmYXVsdFByb3BzLCB7XG4gICAgICAgIFg6IF9weC5kZWZhdWx0UHJvcHMsXG4gICAgICAgIFk6IF9weC5kZWZhdWx0UHJvcHMsXG4gICAgICAgIFJhZGl1czogX3B4LmRlZmF1bHRQcm9wcyxcbiAgICAgICAgU3ByZWFkOiBfcHguZGVmYXVsdFByb3BzXG4gICAgfSksXG5cbiAgICBzcGxpdDogZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgIHZhciBiaXRzID0gKDAsIF91dGlscy5zcGxpdFNwYWNlRGVsaW1pdGVkKSh2YWx1ZSk7XG4gICAgICAgIHZhciBoYXNSZWFjaGVkQ29sb3IgPSBmYWxzZTtcbiAgICAgICAgdmFyIGNvbG9yUHJvcCA9ICcnO1xuICAgICAgICB2YXIgc3BsaXRWYWx1ZSA9IHt9O1xuXG4gICAgICAgIGJpdHMuZm9yRWFjaChmdW5jdGlvbiAoYml0LCBpKSB7XG4gICAgICAgICAgICAvLyBJZiB3ZSd2ZSByZWFjaGVkIHRoZSBjb2xvciBwcm9wcywgYXBwZW5kIHRvIGNvbG9yIHN0cmluZ1xuICAgICAgICAgICAgaWYgKGhhc1JlYWNoZWRDb2xvciB8fCBfY29sb3IyLmRlZmF1bHQudGVzdChiaXQpKSB7XG4gICAgICAgICAgICAgICAgaGFzUmVhY2hlZENvbG9yID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBjb2xvclByb3AgKz0gYml0O1xuXG4gICAgICAgICAgICAgICAgLy8gRWxzZSBwcm9jZXNzIHNoYWRvdyB2YWx1ZVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgc3BsaXRWYWx1ZVtfZGljdGlvbmFyeS5zaGFkb3dbaV1dID0gYml0O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgdmFyIHNwbGl0Q29sb3JQcm9wcyA9IF9jb2xvcjIuZGVmYXVsdC5zcGxpdChjb2xvclByb3ApO1xuXG4gICAgICAgIHJldHVybiBfZXh0ZW5kcyh7fSwgc3BsaXRWYWx1ZSwgeyBzcGxpdENvbG9yUHJvcHM6IHNwbGl0Q29sb3JQcm9wcyB9KTtcbiAgICB9LFxuXG4gICAgY29tYmluZTogZnVuY3Rpb24gKHZhbHVlcykge1xuICAgICAgICByZXR1cm4gKDAsIF91dGlscy5jcmVhdGVEZWxpbWl0ZWQpKHZhbHVlcywgc2hhZG93V2l0aG91dENvbG9yVGVybXMsICcgJykgKyBfY29sb3IyLmRlZmF1bHQuY29tYmluZSh2YWx1ZXMpO1xuICAgIH1cbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5OeVl5OTJZV3gxWlMxMGVYQmxjeTl6YUdGa2IzY3Vhbk1pWFN3aWJtRnRaWE1pT2x0ZExDSnRZWEJ3YVc1bmN5STZJanM3T3pzN096czdPenM3T3pzN096czdPMEZCUzBFc1NVRkJUU3gxUWtGQmRVSXNSMEZCUnl4WlFVaDJRaXhOUVVGTkxFTkJSelpDTEV0QlFVc3NRMEZCUXl4RFFVRkRMRVZCUVVVc1EwRkJReXhEUVVGRExFTkJRVU03TzJ0Q1FVVjZRenRCUVVOWUxHZENRVUZaTEdWQlEwd3NaMEpCUVUwc1dVRkJXVHRCUVVOeVFpeFRRVUZETEUxQlZFRXNXVUZCV1N4QlFWTkpPMEZCUTJwQ0xGTkJRVU1zVFVGV1FTeFpRVUZaTEVGQlZVazdRVUZEYWtJc1kwRkJUU3hOUVZoTUxGbEJRVmtzUVVGWFV6dEJRVU4wUWl4alFVRk5MRTFCV2t3c1dVRkJXU3hCUVZsVE8wMUJRM3BDT3p0QlFVVkVMRk5CUVVzc1JVRkJSU3hWUVVGRExFdEJRVXNzUlVGQlN6dEJRVU5rTEZsQlFVMHNTVUZCU1N4SFFVRkhMRmRCWkZvc2JVSkJRVzFDTEVWQlkyRXNTMEZCU3l4RFFVRkRMRU5CUVVNN1FVRkRlRU1zV1VGQlNTeGxRVUZsTEVkQlFVY3NTMEZCU3l4RFFVRkRPMEZCUXpWQ0xGbEJRVWtzVTBGQlV5eEhRVUZITEVWQlFVVXNRMEZCUXp0QlFVTnVRaXhaUVVGSkxGVkJRVlVzUjBGQlJ5eEZRVUZGTEVOQlFVTTdPMEZCUlhCQ0xGbEJRVWtzUTBGQlF5eFBRVUZQTEVOQlFVTXNWVUZCUXl4SFFVRkhMRVZCUVVVc1EwRkJReXhGUVVGTE96dEJRVVZ5UWl4blFrRkJTU3hsUVVGbExFbEJRVWtzWjBKQlFVMHNTVUZCU1N4RFFVRkRMRWRCUVVjc1EwRkJReXhGUVVGRk8wRkJRM0JETEN0Q1FVRmxMRWRCUVVjc1NVRkJTU3hEUVVGRE8wRkJRM1pDTEhsQ1FVRlRMRWxCUVVrc1IwRkJSenM3TzBGQlFVTXNZVUZIY0VJc1RVRkJUVHRCUVVOSUxEaENRVUZWTEVOQlFVTXNXVUUxUW14Q0xFMUJRVTBzUTBFMFFuZENMRU5CUVVNc1EwRkJReXhEUVVGRExFZEJRVWNzUjBGQlJ5eERRVUZETzJsQ1FVTndRenRUUVVOS0xFTkJRVU1zUTBGQlF6czdRVUZGU0N4WlFVRk5MR1ZCUVdVc1IwRkJSeXhuUWtGQlRTeExRVUZMTEVOQlFVTXNVMEZCVXl4RFFVRkRMRU5CUVVNN08wRkJSUzlETERSQ1FVRlpMRlZCUVZVc1NVRkJSU3hsUVVGbExFVkJRV1lzWlVGQlpTeEpRVUZITzB0QlF6ZERPenRCUVVWRUxGZEJRVThzUlVGQlJTeFZRVUZETEUxQlFVMDdaVUZCU3l4WFFYQkRTeXhsUVVGbExFVkJiME5LTEUxQlFVMHNSVUZCUlN4MVFrRkJkVUlzUlVGQlJTeEhRVUZITEVOQlFVTXNSMEZCUnl4blFrRkJUU3hQUVVGUExFTkJRVU1zVFVGQlRTeERRVUZETzB0QlFVRTdRMEZEY2tjaUxDSm1hV3hsSWpvaWMyaGhaRzkzTG1weklpd2ljMjkxY21ObFVtOXZkQ0k2SWk5VmMyVnljeTlOWVhSMFVHVnljbmt2VTJsMFpYTXZjRzl3Ylc5MGFXOXVJaXdpYzI5MWNtTmxjME52Ym5SbGJuUWlPbHNpYVcxd2IzSjBJR052Ykc5eUlHWnliMjBnSnk0dlkyOXNiM0luTzF4dWFXMXdiM0owSUhzZ1pHVm1ZWFZzZEZCeWIzQnpJR0Z6SUhCNFJHVm1ZWFZzZEZCeWIzQnpJSDBnWm5KdmJTQW5MaTl3ZUNjN1hHNXBiWEJ2Y25RZ2V5QnphR0ZrYjNjZ1lYTWdjMmhoWkc5M1ZHVnliWE1nZlNCbWNtOXRJQ2N1TDNObGRIUnBibWR6TDJScFkzUnBiMjVoY25rbk8xeHVhVzF3YjNKMElIc2djM0JzYVhSVGNHRmpaVVJsYkdsdGFYUmxaQ3dnWTNKbFlYUmxSR1ZzYVcxcGRHVmtJSDBnWm5KdmJTQW5MaTR2YVc1akwzVjBhV3h6Snp0Y2JseHVZMjl1YzNRZ2MyaGhaRzkzVjJsMGFHOTFkRU52Ykc5eVZHVnliWE1nUFNCemFHRmtiM2RVWlhKdGN5NXpiR2xqWlNnd0xDQTBLVHRjYmx4dVpYaHdiM0owSUdSbFptRjFiSFFnZTF4dUlDQWdJR1JsWm1GMWJIUlFjbTl3Y3pvZ2UxeHVJQ0FnSUNBZ0lDQXVMaTVqYjJ4dmNpNWtaV1poZFd4MFVISnZjSE1zWEc0Z0lDQWdJQ0FnSUZnNklIQjRSR1ZtWVhWc2RGQnliM0J6TEZ4dUlDQWdJQ0FnSUNCWk9pQndlRVJsWm1GMWJIUlFjbTl3Y3l4Y2JpQWdJQ0FnSUNBZ1VtRmthWFZ6T2lCd2VFUmxabUYxYkhSUWNtOXdjeXhjYmlBZ0lDQWdJQ0FnVTNCeVpXRmtPaUJ3ZUVSbFptRjFiSFJRY205d2MxeHVJQ0FnSUgwc1hHNWNiaUFnSUNCemNHeHBkRG9nS0haaGJIVmxLU0E5UGlCN1hHNGdJQ0FnSUNBZ0lHTnZibk4wSUdKcGRITWdQU0J6Y0d4cGRGTndZV05sUkdWc2FXMXBkR1ZrS0haaGJIVmxLVHRjYmlBZ0lDQWdJQ0FnYkdWMElHaGhjMUpsWVdOb1pXUkRiMnh2Y2lBOUlHWmhiSE5sTzF4dUlDQWdJQ0FnSUNCc1pYUWdZMjlzYjNKUWNtOXdJRDBnSnljN1hHNGdJQ0FnSUNBZ0lHeGxkQ0J6Y0d4cGRGWmhiSFZsSUQwZ2UzMDdYRzVjYmlBZ0lDQWdJQ0FnWW1sMGN5NW1iM0pGWVdOb0tDaGlhWFFzSUdrcElEMCtJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lDOHZJRWxtSUhkbEozWmxJSEpsWVdOb1pXUWdkR2hsSUdOdmJHOXlJSEJ5YjNCekxDQmhjSEJsYm1RZ2RHOGdZMjlzYjNJZ2MzUnlhVzVuWEc0Z0lDQWdJQ0FnSUNBZ0lDQnBaaUFvYUdGelVtVmhZMmhsWkVOdmJHOXlJSHg4SUdOdmJHOXlMblJsYzNRb1ltbDBLU2tnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUdoaGMxSmxZV05vWldSRGIyeHZjaUE5SUhSeWRXVTdYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdZMjlzYjNKUWNtOXdJQ3M5SUdKcGREdGNibHh1SUNBZ0lDQWdJQ0FnSUNBZ0x5OGdSV3h6WlNCd2NtOWpaWE56SUhOb1lXUnZkeUIyWVd4MVpWeHVJQ0FnSUNBZ0lDQWdJQ0FnZlNCbGJITmxJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0J6Y0d4cGRGWmhiSFZsVzNOb1lXUnZkMVJsY20xelcybGRYU0E5SUdKcGREdGNiaUFnSUNBZ0lDQWdJQ0FnSUgxY2JpQWdJQ0FnSUNBZ2ZTazdYRzVjYmlBZ0lDQWdJQ0FnWTI5dWMzUWdjM0JzYVhSRGIyeHZjbEJ5YjNCeklEMGdZMjlzYjNJdWMzQnNhWFFvWTI5c2IzSlFjbTl3S1R0Y2JseHVJQ0FnSUNBZ0lDQnlaWFIxY200Z2V5QXVMaTV6Y0d4cGRGWmhiSFZsTENCemNHeHBkRU52Ykc5eVVISnZjSE1nZlR0Y2JpQWdJQ0I5TEZ4dVhHNGdJQ0FnWTI5dFltbHVaVG9nS0haaGJIVmxjeWtnUFQ0Z1kzSmxZWFJsUkdWc2FXMXBkR1ZrS0haaGJIVmxjeXdnYzJoaFpHOTNWMmwwYUc5MWRFTnZiRzl5VkdWeWJYTXNJQ2NnSnlrZ0t5QmpiMnh2Y2k1amIyMWlhVzVsS0haaGJIVmxjeWxjYm4wN1hHNGlYWDA9XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy92YWx1ZS10eXBlcy9zaGFkb3cuanNcbiAqKiBtb2R1bGUgaWQgPSAzMVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0cy5jaXJjdWxhck1vdGlvbiA9IGV4cG9ydHMuY3JlYXRlTWFwcGVyID0gdW5kZWZpbmVkO1xuXG52YXIgX2NhbGMgPSByZXF1aXJlKCcuLi9pbmMvY2FsYycpO1xuXG52YXIgY3JlYXRlTWFwcGVyID0gZXhwb3J0cy5jcmVhdGVNYXBwZXIgPSBmdW5jdGlvbiAoZnJvbSwgdG8pIHtcbiAgICB2YXIgbWFwTGVuZ3RoID0gZnJvbS5sZW5ndGg7XG5cbiAgICByZXR1cm4gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAxOyBpIDwgbWFwTGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmICh2YWx1ZSA8IGZyb21baV0gfHwgaSA9PT0gbWFwTGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuICgwLCBfY2FsYy5nZXRWYWx1ZUZyb21Qcm9ncmVzcykoKDAsIF9jYWxjLnJlc3RyaWN0KSgoMCwgX2NhbGMuZ2V0UHJvZ3Jlc3NGcm9tVmFsdWUpKHZhbHVlLCBmcm9tW2kgLSAxXSwgZnJvbVtpXSksIDAsIDEpLCB0b1tpIC0gMV0sIHRvW2ldKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG59O1xuXG52YXIgY2lyY3VsYXJNb3Rpb24gPSBleHBvcnRzLmNpcmN1bGFyTW90aW9uID0gZnVuY3Rpb24gKHYsIGtleSwgX3JlZikge1xuICAgIHZhciB2YWx1ZXMgPSBfcmVmLnZhbHVlcztcbiAgICByZXR1cm4gKDAsIF9jYWxjLnBvaW50RnJvbUFuZ2xlQW5kRGlzdGFuY2UpKHtcbiAgICAgICAgeDogdmFsdWVzLm9yaWdpblguY3VycmVudCxcbiAgICAgICAgeTogdmFsdWVzLm9yaWdpblkuY3VycmVudFxuICAgIH0sIHZhbHVlcy5hbmdsZS5jdXJyZW50LCB2YWx1ZXMuZGlzdGFuY2UuY3VycmVudClba2V5XTtcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5OeVl5OXBibU12ZEhKaGJuTm1iM0p0WlhKekxtcHpJbDBzSW01aGJXVnpJanBiWFN3aWJXRndjR2x1WjNNaU9pSTdPenM3T3pzN1FVRkZUeXhKUVVGTkxGbEJRVmtzVjBGQldpeFpRVUZaTEVkQlFVY3NWVUZCUXl4SlFVRkpMRVZCUVVVc1JVRkJSU3hGUVVGTE8wRkJRM1JETEZGQlFVMHNVMEZCVXl4SFFVRkhMRWxCUVVrc1EwRkJReXhOUVVGTkxFTkJRVU03TzBGQlJUbENMRmRCUVU4c1ZVRkJReXhMUVVGTExFVkJRVXM3UVVGRFpDeGhRVUZMTEVsQlFVa3NRMEZCUXl4SFFVRkhMRU5CUVVNc1JVRkJSU3hEUVVGRExFZEJRVWNzVTBGQlV5eEZRVUZGTEVOQlFVTXNSVUZCUlN4RlFVRkZPMEZCUTJoRExHZENRVUZKTEV0QlFVc3NSMEZCUnl4SlFVRkpMRU5CUVVNc1EwRkJReXhEUVVGRExFbEJRVWtzUTBGQlF5eExRVUZMTEZOQlFWTXNSVUZCUlR0QlFVTndReXgxUWtGQlR5eFZRVkpSTEc5Q1FVRnZRaXhGUVZGUUxGVkJVbE1zVVVGQlVTeEZRVkZTTEZWQlVqVkRMRzlDUVVGdlFpeEZRVkUyUXl4TFFVRkxMRVZCUVVVc1NVRkJTU3hEUVVGRExFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTXNSVUZCUlN4SlFVRkpMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUlVGQlJTeERRVUZETEVWQlFVVXNRMEZCUXl4RFFVRkRMRVZCUVVVc1JVRkJSU3hEUVVGRExFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTXNSVUZCUlN4RlFVRkZMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF6dGhRVU53U0R0VFFVTktPMHRCUTBvc1EwRkJRenREUVVOTUxFTkJRVU03TzBGQlJVc3NTVUZCVFN4alFVRmpMRmRCUVdRc1kwRkJZeXhIUVVGSExGVkJRVU1zUTBGQlF5eEZRVUZGTEVkQlFVYzdVVUZCU1N4TlFVRk5MRkZCUVU0c1RVRkJUVHRYUVVNelF5eFZRV1l5UkN4NVFrRkJlVUlzUlVGbE1VUTdRVUZEZEVJc1UwRkJReXhGUVVGRkxFMUJRVTBzUTBGQlF5eFBRVUZQTEVOQlFVTXNUMEZCVHp0QlFVTjZRaXhUUVVGRExFVkJRVVVzVFVGQlRTeERRVUZETEU5QlFVOHNRMEZCUXl4UFFVRlBPMHRCUXpWQ0xFVkJRVVVzVFVGQlRTeERRVUZETEV0QlFVc3NRMEZCUXl4UFFVRlBMRVZCUVVVc1RVRkJUU3hEUVVGRExGRkJRVkVzUTBGQlF5eFBRVUZQTEVOQlFVTXNRMEZCUXl4SFFVRkhMRU5CUVVNN1EwRkJRU3hEUVVGRElpd2labWxzWlNJNkluUnlZVzV6Wm05eWJXVnljeTVxY3lJc0luTnZkWEpqWlZKdmIzUWlPaUl2VlhObGNuTXZUV0YwZEZCbGNuSjVMMU5wZEdWekwzQnZjRzF2ZEdsdmJpSXNJbk52ZFhKalpYTkRiMjUwWlc1MElqcGJJbWx0Y0c5eWRDQjdJR2RsZEZCeWIyZHlaWE56Um5KdmJWWmhiSFZsTENCblpYUldZV3gxWlVaeWIyMVFjbTluY21WemN5d2djbVZ6ZEhKcFkzUXNJSEJ2YVc1MFJuSnZiVUZ1WjJ4bFFXNWtSR2x6ZEdGdVkyVWdmU0JtY205dElDY3VMaTlwYm1NdlkyRnNZeWM3WEc1Y2JtVjRjRzl5ZENCamIyNXpkQ0JqY21WaGRHVk5ZWEJ3WlhJZ1BTQW9abkp2YlN3Z2RHOHBJRDArSUh0Y2JpQWdJQ0JqYjI1emRDQnRZWEJNWlc1bmRHZ2dQU0JtY205dExteGxibWQwYUR0Y2JseHVJQ0FnSUhKbGRIVnliaUFvZG1Gc2RXVXBJRDArSUh0Y2JpQWdJQ0FnSUNBZ1ptOXlJQ2hzWlhRZ2FTQTlJREU3SUdrZ1BDQnRZWEJNWlc1bmRHZzdJR2tyS3lrZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnYVdZZ0tIWmhiSFZsSUR3Z1puSnZiVnRwWFNCOGZDQnBJRDA5UFNCdFlYQk1aVzVuZEdncElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQnlaWFIxY200Z1oyVjBWbUZzZFdWR2NtOXRVSEp2WjNKbGMzTW9jbVZ6ZEhKcFkzUW9aMlYwVUhKdlozSmxjM05HY205dFZtRnNkV1VvZG1Gc2RXVXNJR1p5YjIxYmFTQXRJREZkTENCbWNtOXRXMmxkS1N3Z01Dd2dNU2tzSUhSdlcya2dMU0F4WFN3Z2RHOWJhVjBwTzF4dUlDQWdJQ0FnSUNBZ0lDQWdmVnh1SUNBZ0lDQWdJQ0I5WEc0Z0lDQWdmVHRjYm4wN1hHNWNibVY0Y0c5eWRDQmpiMjV6ZENCamFYSmpkV3hoY2sxdmRHbHZiaUE5SUNoMkxDQnJaWGtzSUhzZ2RtRnNkV1Z6SUgwcElEMCtJRnh1SUNBZ0lIQnZhVzUwUm5KdmJVRnVaMnhsUVc1a1JHbHpkR0Z1WTJVb2UxeHVJQ0FnSUNBZ0lDQjRPaUIyWVd4MVpYTXViM0pwWjJsdVdDNWpkWEp5Wlc1MExGeHVJQ0FnSUNBZ0lDQjVPaUIyWVd4MVpYTXViM0pwWjJsdVdTNWpkWEp5Wlc1MElGeHVJQ0FnSUgwc0lIWmhiSFZsY3k1aGJtZHNaUzVqZFhKeVpXNTBMQ0IyWVd4MVpYTXVaR2x6ZEdGdVkyVXVZM1Z5Y21WdWRDbGJhMlY1WFR0Y2JseHVJbDE5XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9pbmMvdHJhbnNmb3JtZXJzLmpzXG4gKiogbW9kdWxlIGlkID0gMzJcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxudmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF9Qcm9jZXNzMiA9IHJlcXVpcmUoJy4uL3Byb2Nlc3MvUHJvY2VzcycpO1xuXG52YXIgX1Byb2Nlc3MzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfUHJvY2VzczIpO1xuXG52YXIgX2NhbGMgPSByZXF1aXJlKCcuLi9pbmMvY2FsYycpO1xuXG52YXIgX3V0aWxzID0gcmVxdWlyZSgnLi4vaW5jL3V0aWxzJyk7XG5cbnZhciBfYmluZEFkYXB0ZXIgPSByZXF1aXJlKCcuLi9pbmMvYmluZC1hZGFwdGVyJyk7XG5cbnZhciBfYmluZEFkYXB0ZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfYmluZEFkYXB0ZXIpO1xuXG52YXIgX2NvbG9yID0gcmVxdWlyZSgnLi4vdmFsdWUtdHlwZXMvY29sb3InKTtcblxudmFyIF9jb2xvcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jb2xvcik7XG5cbnZhciBfY29tcGxleCA9IHJlcXVpcmUoJy4uL3ZhbHVlLXR5cGVzL2NvbXBsZXgnKTtcblxudmFyIF9jb21wbGV4MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NvbXBsZXgpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMob2JqLCBrZXlzKSB7IHZhciB0YXJnZXQgPSB7fTsgZm9yICh2YXIgaSBpbiBvYmopIHsgaWYgKGtleXMuaW5kZXhPZihpKSA+PSAwKSBjb250aW51ZTsgaWYgKCFPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBpKSkgY29udGludWU7IHRhcmdldFtpXSA9IG9ialtpXTsgfSByZXR1cm4gdGFyZ2V0OyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKCFzZWxmKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gY2FsbCAmJiAodHlwZW9mIGNhbGwgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikgPyBjYWxsIDogc2VsZjsgfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb24sIG5vdCBcIiArIHR5cGVvZiBzdXBlckNsYXNzKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCBlbnVtZXJhYmxlOiBmYWxzZSwgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LnNldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKSA6IHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7IH1cblxudmFyIERFRkFVTFRfUFJPUCA9ICdjdXJyZW50JztcbnZhciBOVU1FUklDQUxfVkFMVUVTID0gW0RFRkFVTFRfUFJPUCwgJ2Zyb20nLCAndG8nLCAnbWluJywgJ21heCddO1xudmFyIE5VTV9OVU1FUklDQUxfVkFMVUVTID0gTlVNRVJJQ0FMX1ZBTFVFUy5sZW5ndGg7XG5cbnZhciBBY3Rpb24gPSAoZnVuY3Rpb24gKF9Qcm9jZXNzKSB7XG4gICAgX2luaGVyaXRzKEFjdGlvbiwgX1Byb2Nlc3MpO1xuXG4gICAgZnVuY3Rpb24gQWN0aW9uKHByb3BzKSB7XG4gICAgICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBBY3Rpb24pO1xuXG4gICAgICAgIHByb3BzLnN0YXRlID0ge307XG4gICAgICAgIHJldHVybiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCBfUHJvY2Vzcy5jYWxsKHRoaXMsIHByb3BzKSk7XG4gICAgfVxuXG4gICAgLypcbiAgICAgICAgIyBTZXQgQWN0aW9uIHByb3BlcnRpZXNcbiAgICAgICAgIyMgU2V0IHVzZXItZGVmaW5lZCBBY3Rpb24gcHJvcGVydGllc1xuICAgICAgICAgQHBhcmFtIFtvYmplY3RdXG4gICAgICAgIEByZXR1cm4gW0FjdGlvbl1cbiAgICAqL1xuXG4gICAgQWN0aW9uLnByb3RvdHlwZS5zZXQgPSBmdW5jdGlvbiBzZXQoKSB7XG4gICAgICAgIHZhciBwcm9wcyA9IGFyZ3VtZW50cy5sZW5ndGggPD0gMCB8fCBhcmd1bWVudHNbMF0gPT09IHVuZGVmaW5lZCA/IHt9IDogYXJndW1lbnRzWzBdO1xuICAgICAgICB2YXIgdmFsdWVzID0gcHJvcHMudmFsdWVzO1xuICAgICAgICB2YXIgb24gPSBwcm9wcy5vbjtcblxuICAgICAgICB2YXIgcHJvcHNUb1NldCA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhwcm9wcywgWyd2YWx1ZXMnLCAnb24nXSk7XG5cbiAgICAgICAgX1Byb2Nlc3MucHJvdG90eXBlLnNldC5jYWxsKHRoaXMsIHByb3BzVG9TZXQpO1xuXG4gICAgICAgIGlmIChvbikge1xuICAgICAgICAgICAgLy8gRHVja3R5cGlzaCBjaGVjayBmb3IgQWRhcHRlclxuICAgICAgICAgICAgdGhpcy5vbiA9ICFvbi5zZXR0ZXIgPyAoMCwgX2JpbmRBZGFwdGVyMi5kZWZhdWx0KShvbikgOiBvbjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMudmFsdWVzID0gdGhpcy52YWx1ZXMgfHwge307XG4gICAgICAgIHRoaXMudmFsdWVLZXlzID0gdGhpcy52YWx1ZUtleXMgfHwgW107XG4gICAgICAgIHRoaXMucGFyZW50S2V5cyA9IHRoaXMucGFyZW50S2V5cyB8fCBbXTtcblxuICAgICAgICAvLyBNZXJnZSBuZXcgYHZhbHVlYCBwcm9wZXJ0aWVzIHdpdGggZXhpc3RpbmdcbiAgICAgICAgdmFyIGN1cnJlbnRWYWx1ZXMgPSB0aGlzLnZhbHVlcztcbiAgICAgICAgdmFyIGRlZmF1bHRWYWx1ZSA9IHRoaXMuZ2V0RGVmYXVsdFZhbHVlKCk7XG4gICAgICAgIHZhciBkZWZhdWx0VmFsdWVQcm9wID0gdGhpcy5nZXREZWZhdWx0VmFsdWVQcm9wKCk7XG5cbiAgICAgICAgLy8gSW5oZXJpdCB2YWx1ZSBwcm9wZXJ0aWVzIGZyb20gYHByb3BzYFxuICAgICAgICBmb3IgKHZhciBrZXkgaW4gZGVmYXVsdFZhbHVlKSB7XG4gICAgICAgICAgICBpZiAoZGVmYXVsdFZhbHVlLmhhc093blByb3BlcnR5KGtleSkgJiYgcHJvcHNUb1NldC5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgICAgICAgaWYgKHByb3BzVG9TZXRba2V5XSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZVtrZXldID0gcHJvcHNUb1NldFtrZXldO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIENoZWNrIGFsbCB2YWx1ZXMgYW5kIHNwbGl0IGludG8gY2hpbGQgdmFsdWVzIGFzIG5lY2Nlc3NhcnlcbiAgICAgICAgZm9yICh2YXIga2V5IGluIHZhbHVlcykge1xuICAgICAgICAgICAgaWYgKHZhbHVlcy5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgICAgICAgdmFyIHZhbHVlID0gdmFsdWVzW2tleV07XG4gICAgICAgICAgICAgICAgdmFyIGV4aXN0aW5nVmFsdWUgPSBjdXJyZW50VmFsdWVzW2tleV07XG4gICAgICAgICAgICAgICAgdmFyIHZhbHVlVHlwZSA9IHVuZGVmaW5lZDtcbiAgICAgICAgICAgICAgICB2YXIgbmV3VmFsdWUgPSB7fTtcblxuICAgICAgICAgICAgICAgIC8vIENvbnZlcnQgbmV3IHZhbHVlIGludG8gb2JqZWN0IGlmIGl0IGlzbid0IGFscmVhZHlcbiAgICAgICAgICAgICAgICBpZiAoKDAsIF91dGlscy5pc09iaikodmFsdWUpKSB7XG4gICAgICAgICAgICAgICAgICAgIG5ld1ZhbHVlID0gdmFsdWU7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgbmV3VmFsdWVbZGVmYXVsdFZhbHVlUHJvcF0gPSB2YWx1ZTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAvLyBJZiB2YWx1ZSBhbHJlYWR5IGV4aXN0cywgY2hlY2sgZm9yIGFuZCB1c2UgZXhpc3RpbmcgdHlwZVxuICAgICAgICAgICAgICAgIGlmIChleGlzdGluZ1ZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgIG5ld1ZhbHVlID0gX2V4dGVuZHMoe30sIGV4aXN0aW5nVmFsdWUsIG5ld1ZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgdmFsdWVUeXBlID0gdGhpcy5vbiAmJiB0aGlzLm9uLmdldFZhbHVlVHlwZSA/IHRoaXMub24uZ2V0VmFsdWVUeXBlKGtleSkgOiBleGlzdGluZ1ZhbHVlLnR5cGU7XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gSWYgdGhpcyBpcyBhIG5ldyB2YWx1ZSwgY2hlY2sgZm9yIHR5cGVcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG5ld1ZhbHVlLmZyb20gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ld1ZhbHVlLmN1cnJlbnQgPSBuZXdWYWx1ZS5mcm9tO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChuZXdWYWx1ZS5jdXJyZW50ID09PSB1bmRlZmluZWQgJiYgdGhpcy5vbikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ld1ZhbHVlLmN1cnJlbnQgPSB0aGlzLm9uLmdldChrZXkpIHx8IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChuZXdWYWx1ZS5mcm9tID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXdWYWx1ZS5mcm9tID0gbmV3VmFsdWUuY3VycmVudDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgbmV3VmFsdWUgPSBfZXh0ZW5kcyh7fSwgZGVmYXVsdFZhbHVlLCBuZXdWYWx1ZSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIG5ld1ZhbHVlLnByZXYgPSBuZXdWYWx1ZS5jdXJyZW50O1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBJZiBvbmUgaXMgZXhwbGljaXRseSBhc3NpZ25lZCwgdXNlIHRoYXRcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh2YWx1ZS50eXBlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWVUeXBlID0gdmFsdWUudHlwZTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIE9yIGlmIG91ciBBZGFwdGVyIGhhcyBhIHR5cGVNYXAsIHVzZSB0aGF0XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMub24gJiYgdGhpcy5vbi5nZXRWYWx1ZVR5cGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWVUeXBlID0gdGhpcy5vbi5nZXRWYWx1ZVR5cGUoa2V5KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKCgwLCBfdXRpbHMuaXNTdHJpbmcpKG5ld1ZhbHVlLmN1cnJlbnQpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFRlc3QgaWYgdGhpcyBpcyBhIGNvbG9yIHZhbHVlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChfY29sb3IyLmRlZmF1bHQudGVzdChuZXdWYWx1ZS5jdXJyZW50KSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWVUeXBlID0gX2NvbG9yMi5kZWZhdWx0O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKF9jb21wbGV4Mi5kZWZhdWx0LnRlc3QobmV3VmFsdWUuY3VycmVudCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlVHlwZSA9IF9jb21wbGV4Mi5kZWZhdWx0O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAvLyBJZiB3ZSd2ZSBnb3QgYSB2YWx1ZVR5cGUgdGhlbiBwcmVwcm9jZXNzIHRoZSB2YWx1ZSBhY2NvcmRpbmdseVxuICAgICAgICAgICAgICAgIGlmICh2YWx1ZVR5cGUpIHtcbiAgICAgICAgICAgICAgICAgICAgbmV3VmFsdWUudHlwZSA9IHZhbHVlVHlwZTtcblxuICAgICAgICAgICAgICAgICAgICAvLyBJZiB0aGlzIHZhbHVlIHNob3VsZCBiZSBzcGxpdCwgc3BsaXRcbiAgICAgICAgICAgICAgICAgICAgaWYgKHZhbHVlVHlwZS5zcGxpdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGNoaWxkVmFsdWVzID0ge307XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIExvb3Agb3ZlciBudW1lcmljYWwgdmFsdWVzIGFuZCBzcGxpdCBhbnkgcHJlc2VudFxuICAgICAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBOVU1fTlVNRVJJQ0FMX1ZBTFVFUzsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHByb3BOYW1lID0gTlVNRVJJQ0FMX1ZBTFVFU1tpXTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChuZXdWYWx1ZS5oYXNPd25Qcm9wZXJ0eShwcm9wTmFtZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHNwbGl0VmFsdWVzID0gdmFsdWVUeXBlLnNwbGl0KG5ld1ZhbHVlW3Byb3BOYW1lXSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgc3BsaXRLZXkgaW4gc3BsaXRWYWx1ZXMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzcGxpdFZhbHVlcy5oYXNPd25Qcm9wZXJ0eShzcGxpdEtleSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgc3BsaXRWYWx1ZSA9IHNwbGl0VmFsdWVzW3NwbGl0S2V5XTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBDcmVhdGUgbmV3IGNoaWxkIHZhbHVlIGlmIGRvZXNuJ3QgZXhpc3RcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWNoaWxkVmFsdWVzW3NwbGl0S2V5XSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGlsZFZhbHVlc1tzcGxpdEtleV0gPSBfZXh0ZW5kcyh7fSwgbmV3VmFsdWUsIHsgcGFyZW50OiBrZXksIGNoaWxkS2V5OiBzcGxpdEtleSB9KTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodmFsdWVUeXBlLmRlZmF1bHRQcm9wcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hpbGRWYWx1ZXNbc3BsaXRLZXldID0gdmFsdWVUeXBlLmRlZmF1bHRQcm9wc1tzcGxpdEtleV0gPyBfZXh0ZW5kcyh7fSwgY2hpbGRWYWx1ZXNbc3BsaXRLZXldLCB2YWx1ZVR5cGUuZGVmYXVsdFByb3BzW3NwbGl0S2V5XSkgOiBfZXh0ZW5kcyh7fSwgY2hpbGRWYWx1ZXNbc3BsaXRLZXldLCB2YWx1ZVR5cGUuZGVmYXVsdFByb3BzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciB2YWx1ZVNwbGl0RnJvbVVuaXQgPSAoMCwgX3V0aWxzLnNwbGl0VmFsdWVVbml0KShzcGxpdFZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGlsZFZhbHVlc1tzcGxpdEtleV1bcHJvcE5hbWVdID0gdmFsdWVTcGxpdEZyb21Vbml0LnZhbHVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoaWxkVmFsdWVzW3NwbGl0S2V5XS51bml0ID0gdmFsdWVTcGxpdEZyb21Vbml0LnVuaXQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIG5ld1ZhbHVlLmNoaWxkcmVuID0ge307XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIE5vdyBsb29wIHRocm91Z2ggYWxsIGNoaWxkIHZhbHVlcyBhbmQgYWRkIHRoZW0gYXMgbm9ybWFsIHZhbHVlc1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgY2hpbGRLZXkgaW4gY2hpbGRWYWx1ZXMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoY2hpbGRWYWx1ZXMuaGFzT3duUHJvcGVydHkoY2hpbGRLZXkpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBjaGlsZFZhbHVlID0gY2hpbGRWYWx1ZXNbY2hpbGRLZXldO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgY29tYmluZWRLZXkgPSBrZXkgKyBjaGlsZEtleTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXdWYWx1ZS5jaGlsZHJlbltjaGlsZEtleV0gPSBjaGlsZFZhbHVlLmN1cnJlbnQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnRWYWx1ZXNbY29tYmluZWRLZXldID0gY2hpbGRWYWx1ZTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy52YWx1ZUtleXMuaW5kZXhPZihjb21iaW5lZEtleSkgPT09IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnZhbHVlS2V5cy5wdXNoKGNvbWJpbmVkS2V5KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gU2F2ZSBhIHRlbXBsYXRlIGZvciByZWNvbWJpbmF0aW9uIGlmIHByZXNlbnRcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh2YWx1ZVR5cGUudGVtcGxhdGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXdWYWx1ZS50ZW1wbGF0ZSA9IG5ld1ZhbHVlLnRlbXBsYXRlIHx8IHZhbHVlVHlwZS50ZW1wbGF0ZShuZXdWYWx1ZS5jdXJyZW50KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gT3Igd2UganVzdCBoYXZlIGRlZmF1bHQgdmFsdWUgcHJvcHMsIGxvYWQgdGhvc2UgXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodmFsdWVUeXBlLmRlZmF1bHRQcm9wcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ld1ZhbHVlID0gX2V4dGVuZHMoe30sIHZhbHVlVHlwZS5kZWZhdWx0UHJvcHMsIG5ld1ZhbHVlKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgTlVNX05VTUVSSUNBTF9WQUxVRVM7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgcHJvcE5hbWUgPSBOVU1FUklDQUxfVkFMVUVTW2ldO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICgoMCwgX3V0aWxzLmlzU3RyaW5nKShuZXdWYWx1ZVtwcm9wTmFtZV0pKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgc3BsaXRVbml0ID0gKDAsIF91dGlscy5zcGxpdFZhbHVlVW5pdCkobmV3VmFsdWVbcHJvcE5hbWVdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ld1ZhbHVlW3Byb3BOYW1lXSA9IHNwbGl0VW5pdC52YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ld1ZhbHVlLnVuaXQgPSBzcGxpdFVuaXQudW5pdDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAvLyBVcGRhdGUgYXBwcm9wcmlhdGUgbGlzdHMgd2l0aCB2YWx1ZSBrZXlcbiAgICAgICAgICAgICAgICBpZiAobmV3VmFsdWUuY2hpbGRyZW4pIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMucGFyZW50S2V5cy5pbmRleE9mKGtleSkgPT09IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnBhcmVudEtleXMucHVzaChrZXkpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMudmFsdWVLZXlzLmluZGV4T2Yoa2V5KSA9PT0gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudmFsdWVLZXlzLnB1c2goa2V5KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGN1cnJlbnRWYWx1ZXNba2V5XSA9IG5ld1ZhbHVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gUHJlY29tcHV0ZSB2YWx1ZSBrZXkgYW5kIHBhcmVudCBrZXkgbGVuZ3RoIHRvIHByZXZlbnQgcGVyLWZyYW1lIG1lYXN1cmVtZW50XG4gICAgICAgIHRoaXMubnVtVmFsdWVLZXlzID0gdGhpcy52YWx1ZUtleXMubGVuZ3RoO1xuICAgICAgICB0aGlzLm51bVBhcmVudEtleXMgPSB0aGlzLnBhcmVudEtleXMubGVuZ3RoO1xuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH07XG5cbiAgICAvKlxuICAgICAgICBEZWNpZGUgd2hldGhlciB0aGlzIEFjdGlvbiB3aWxsIHJlbmRlciBvbiBuZXh0IGZyYW1lXG4gICAgICAgICBAcGFyYW0gW0FjdGlvbl1cbiAgICAgICAgQHBhcmFtIFtudW1iZXJdXG4gICAgICAgIEBwYXJhbSBbbnVtYmVyXVxuICAgICAgICBAcmV0dXJuIFtib29sZWFuXTogUmV0dXJuIHRydWUgdG8gcmVuZGVyXG4gICAgKi9cblxuICAgIEFjdGlvbi5wcm90b3R5cGUud2lsbFJlbmRlciA9IGZ1bmN0aW9uIHdpbGxSZW5kZXIoYWN0aW9uLCBmcmFtZVN0YW1wLCBlbGFwc2VkKSB7XG4gICAgICAgIHZhciBoYXNDaGFuZ2VkID0gZmFsc2U7XG5cbiAgICAgICAgLy8gQ2hlY2sgaWYgYmFzZSB2YWx1ZXMgaGF2ZSB1cGRhdGVkXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5udW1WYWx1ZUtleXM7IGkrKykge1xuICAgICAgICAgICAgdmFyIGtleSA9IHRoaXMudmFsdWVLZXlzW2ldO1xuICAgICAgICAgICAgdmFyIHZhbHVlID0gdGhpcy52YWx1ZXNba2V5XTtcblxuICAgICAgICAgICAgLy8gUnVuIHRyYW5zZm9ybSBmdW5jdGlvbiAoaWYgcHJlc2VudClcbiAgICAgICAgICAgIGlmICh2YWx1ZS50cmFuc2Zvcm0pIHtcbiAgICAgICAgICAgICAgICB2YWx1ZS5jdXJyZW50ID0gdmFsdWUudHJhbnNmb3JtKHZhbHVlLmN1cnJlbnQsIGtleSwgdGhpcyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIENhcCBtaW5pbXVtXG4gICAgICAgICAgICBpZiAoKDAsIF91dGlscy5pc051bSkodmFsdWUubWluKSkge1xuICAgICAgICAgICAgICAgIHZhbHVlLmN1cnJlbnQgPSBNYXRoLm1heCh2YWx1ZS5jdXJyZW50LCB2YWx1ZS5taW4pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBDYXAgbWF4aW11bVxuICAgICAgICAgICAgaWYgKCgwLCBfdXRpbHMuaXNOdW0pKHZhbHVlLm1heCkpIHtcbiAgICAgICAgICAgICAgICB2YWx1ZS5jdXJyZW50ID0gTWF0aC5taW4odmFsdWUuY3VycmVudCwgdmFsdWUubWF4KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gUm91bmQgbnVtYmVyXG4gICAgICAgICAgICBpZiAodmFsdWUucm91bmQpIHtcbiAgICAgICAgICAgICAgICB2YWx1ZS5jdXJyZW50ID0gTWF0aC5yb3VuZCh2YWx1ZS5jdXJyZW50KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gVXBkYXRlIHZlbG9jaXR5XG4gICAgICAgICAgICBpZiAoIXRoaXMuY2FsY3VsYXRlc1ZlbG9jaXR5KSB7XG4gICAgICAgICAgICAgICAgdmFsdWUudmVsb2NpdHkgPSAoMCwgX2NhbGMuc3BlZWRQZXJTZWNvbmQpKHZhbHVlLmN1cnJlbnQgLSB2YWx1ZS5wcmV2LCBlbGFwc2VkKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gSWYgdGhpcyB2YWx1ZSBoYXMgY2hhbmdlZFxuICAgICAgICAgICAgaWYgKHZhbHVlLnByZXYgIT09IHZhbHVlLmN1cnJlbnQpIHtcbiAgICAgICAgICAgICAgICBoYXNDaGFuZ2VkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB2YWx1ZS5wcmV2ID0gdmFsdWUuY3VycmVudDtcblxuICAgICAgICAgICAgICAgIC8vIEFwcGVuZCB1bml0XG4gICAgICAgICAgICAgICAgdmFyIHZhbHVlRm9yU3RhdGUgPSB2YWx1ZS51bml0ID8gdmFsdWUuY3VycmVudCArIHZhbHVlLnVuaXQgOiB2YWx1ZS5jdXJyZW50O1xuXG4gICAgICAgICAgICAgICAgLy8gQWRkIHRvIHN0YXRlIGlmIHRoaXMgaXMgbm90IGEgY2hpbGQgdmF1ZVxuICAgICAgICAgICAgICAgIGlmICghdmFsdWUucGFyZW50KSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGVba2V5XSA9IHZhbHVlRm9yU3RhdGU7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy52YWx1ZXNbdmFsdWUucGFyZW50XS5jaGlsZHJlblt2YWx1ZS5jaGlsZEtleV0gPSB2YWx1ZUZvclN0YXRlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzLm9uQ2xlYW51cCA/IHRydWUgOiBoYXNDaGFuZ2VkO1xuICAgIH07XG5cbiAgICAvKlxuICAgICAgICBJZiB3ZSBhcmUgcmVuZGVyaW5nLCByZWNvbWJpbmUgcGFyZW50IHZhbHVlcyBmaXJzdFxuICAgICovXG5cbiAgICBBY3Rpb24ucHJvdG90eXBlLm9uUHJlUmVuZGVyID0gZnVuY3Rpb24gb25QcmVSZW5kZXIoKSB7XG4gICAgICAgIC8vIFVwZGF0ZSBwYXJlbnQgdmFsdWVzXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5udW1QYXJlbnRLZXlzOyBpKyspIHtcbiAgICAgICAgICAgIHZhciBrZXkgPSB0aGlzLnBhcmVudEtleXNbaV07XG4gICAgICAgICAgICB2YXIgdmFsdWUgPSB0aGlzLnZhbHVlc1trZXldO1xuXG4gICAgICAgICAgICB2YWx1ZS5jdXJyZW50ID0gdmFsdWUudHlwZS5jb21iaW5lKHZhbHVlLmNoaWxkcmVuLCB2YWx1ZS50ZW1wbGF0ZSk7XG5cbiAgICAgICAgICAgIGlmICh0aGlzLnN0YXRlW2tleV0gIT09IHZhbHVlLmN1cnJlbnQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXRlW2tleV0gPSB2YWx1ZS5jdXJyZW50O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcblxuICAgIEFjdGlvbi5wcm90b3R5cGUub25SZW5kZXIgPSBmdW5jdGlvbiBvblJlbmRlcihfcmVmKSB7XG4gICAgICAgIHZhciBzdGF0ZSA9IF9yZWYuc3RhdGU7XG4gICAgICAgIHZhciBvbiA9IF9yZWYub247XG5cbiAgICAgICAgaWYgKG9uICYmIG9uLnNldCkge1xuICAgICAgICAgICAgb24uc2V0KHN0YXRlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLm9uRnJhbWUpIHtcbiAgICAgICAgICAgIHRoaXMub25GcmFtZSh0aGlzKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBBY3Rpb24ucHJvdG90eXBlLnBhdXNlID0gZnVuY3Rpb24gcGF1c2UoKSB7XG4gICAgICAgIF9Qcm9jZXNzLnByb3RvdHlwZS5zdG9wLmNhbGwodGhpcyk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH07XG5cbiAgICBBY3Rpb24ucHJvdG90eXBlLnJlc3VtZSA9IGZ1bmN0aW9uIHJlc3VtZSgpIHtcbiAgICAgICAgX1Byb2Nlc3MucHJvdG90eXBlLnN0YXJ0LmNhbGwodGhpcyk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH07XG5cbiAgICBBY3Rpb24ucHJvdG90eXBlLnN0YXJ0ID0gZnVuY3Rpb24gc3RhcnQoKSB7XG4gICAgICAgIHZhciB2YWx1ZXMgPSB0aGlzLnZhbHVlcztcbiAgICAgICAgX1Byb2Nlc3MucHJvdG90eXBlLnN0YXJ0LmNhbGwodGhpcyk7XG5cbiAgICAgICAgZm9yICh2YXIga2V5IGluIHZhbHVlcykge1xuICAgICAgICAgICAgaWYgKHZhbHVlcy5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgICAgICAgdmFsdWVzW2tleV0ucHJldiA9IHZhbHVlc1trZXldLm9yaWdpbiA9IHZhbHVlc1trZXldLmN1cnJlbnQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgLypcbiAgICAgICAgIyBHZXQgZGVmYXVsdCBBY3Rpb24gdmFsdWUgcHJvcGVydGllc1xuICAgICAgICAgQHJldHVybiBbb2JqZWN0XVxuICAgICovXG5cbiAgICBBY3Rpb24ucHJvdG90eXBlLmdldERlZmF1bHRWYWx1ZSA9IGZ1bmN0aW9uIGdldERlZmF1bHRWYWx1ZSgpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGN1cnJlbnQ6IDAsXG4gICAgICAgICAgICB2ZWxvY2l0eTogMCxcbiAgICAgICAgICAgIHJvdW5kOiBmYWxzZVxuICAgICAgICB9O1xuICAgIH07XG5cbiAgICAvKlxuICAgICAgICAjIEdldCBkZWZhdWx0IEFjdGlvbiB2YWx1ZSBwcm9wZXJ0eSBuYW1lXG4gICAgICAgICMjIFNldCB0aGlzIGB2YWx1ZWAgcHJvcGVydHkgd2hlbiBzZXQgYXMgdmFsdWUgaW5zdGVhZCBvZiBvYmplY3RcbiAgICAgICAgIEByZXR1cm4gW3N0cmluZ11cbiAgICAqL1xuXG4gICAgQWN0aW9uLnByb3RvdHlwZS5nZXREZWZhdWx0VmFsdWVQcm9wID0gZnVuY3Rpb24gZ2V0RGVmYXVsdFZhbHVlUHJvcCgpIHtcbiAgICAgICAgcmV0dXJuIERFRkFVTFRfUFJPUDtcbiAgICB9O1xuXG4gICAgcmV0dXJuIEFjdGlvbjtcbn0pKF9Qcm9jZXNzMy5kZWZhdWx0KTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gQWN0aW9uO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluTnlZeTloWTNScGIyNXpMMEZqZEdsdmJpNXFjeUpkTENKdVlXMWxjeUk2VzEwc0ltMWhjSEJwYm1keklqb2lPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdRVUZQUVN4SlFVRk5MRmxCUVZrc1IwRkJSeXhUUVVGVExFTkJRVU03UVVGREwwSXNTVUZCVFN4blFrRkJaMElzUjBGQlJ5eERRVUZETEZsQlFWa3NSVUZCUlN4TlFVRk5MRVZCUVVVc1NVRkJTU3hGUVVGRkxFdEJRVXNzUlVGQlJTeExRVUZMTEVOQlFVTXNRMEZCUXp0QlFVTndSU3hKUVVGTkxHOUNRVUZ2UWl4SFFVRkhMR2RDUVVGblFpeERRVUZETEUxQlFVMHNRMEZCUXpzN1NVRkZhRU1zVFVGQlRUdGpRVUZPTEUxQlFVMDdPMEZCUTNaQ0xHRkJSR2xDTEUxQlFVMHNRMEZEV0N4TFFVRkxMRVZCUVVVN09FSkJSRVlzVFVGQlRUczdRVUZGYmtJc1lVRkJTeXhEUVVGRExFdEJRVXNzUjBGQlJ5eEZRVUZGTEVOQlFVTTdaMFJCUTJwQ0xHOUNRVUZOTEV0QlFVc3NRMEZCUXp0TFFVTm1PenM3T3pzN096dEJRVUZCTzBGQlNtZENMRlZCUVUwc1YwRmhka0lzUjBGQlJ5eHJRa0ZCWVR0WlFVRmFMRXRCUVVzc2VVUkJRVWNzUlVGQlJUdFpRVU5HTEUxQlFVMHNSMEZCZDBJc1MwRkJTeXhEUVVGdVF5eE5RVUZOTzFsQlFVVXNSVUZCUlN4SFFVRnZRaXhMUVVGTExFTkJRVE5DTEVWQlFVVTdPMWxCUVVzc1ZVRkJWU3cwUWtGQlN5eExRVUZMT3p0QlFVVXpReXd5UWtGQlRTeEhRVUZITEV0QlFVRXNUMEZCUXl4VlFVRlZMRU5CUVVNc1EwRkJRenM3UVVGRmRFSXNXVUZCU1N4RlFVRkZMRVZCUVVVN08wRkJSVW9zWjBKQlFVa3NRMEZCUXl4RlFVRkZMRWRCUVVjc1FVRkJReXhEUVVGRExFVkJRVVVzUTBGQlF5eE5RVUZOTEVkQlFVa3NNa0pCUVZrc1JVRkJSU3hEUVVGRExFZEJRVWNzUlVGQlJTeERRVUZETzFOQlEycEVPenRCUVVWRUxGbEJRVWtzUTBGQlF5eE5RVUZOTEVkQlFVY3NTVUZCU1N4RFFVRkRMRTFCUVUwc1NVRkJTU3hGUVVGRkxFTkJRVU03UVVGRGFFTXNXVUZCU1N4RFFVRkRMRk5CUVZNc1IwRkJSeXhKUVVGSkxFTkJRVU1zVTBGQlV5eEpRVUZKTEVWQlFVVXNRMEZCUXp0QlFVTjBReXhaUVVGSkxFTkJRVU1zVlVGQlZTeEhRVUZITEVsQlFVa3NRMEZCUXl4VlFVRlZMRWxCUVVrc1JVRkJSVHM3TzBGQlFVTXNRVUZIZUVNc1dVRkJUU3hoUVVGaExFZEJRVWNzU1VGQlNTeERRVUZETEUxQlFVMHNRMEZCUXp0QlFVTnNReXhaUVVGTkxGbEJRVmtzUjBGQlJ5eEpRVUZKTEVOQlFVTXNaVUZCWlN4RlFVRkZMRU5CUVVNN1FVRkROVU1zV1VGQlRTeG5Ra0ZCWjBJc1IwRkJSeXhKUVVGSkxFTkJRVU1zYlVKQlFXMUNMRVZCUVVVN096dEJRVUZETEVGQlIzQkVMR0ZCUVVzc1NVRkJTU3hIUVVGSExFbEJRVWtzV1VGQldTeEZRVUZGTzBGQlF6RkNMR2RDUVVGSkxGbEJRVmtzUTBGQlF5eGpRVUZqTEVOQlFVTXNSMEZCUnl4RFFVRkRMRWxCUVVrc1ZVRkJWU3hEUVVGRExHTkJRV01zUTBGQlF5eEhRVUZITEVOQlFVTXNSVUZCUlR0QlFVTndSU3h2UWtGQlNTeFZRVUZWTEVOQlFVTXNSMEZCUnl4RFFVRkRMRXRCUVVzc1UwRkJVeXhGUVVGRk8wRkJReTlDTEdkRFFVRlpMRU5CUVVNc1IwRkJSeXhEUVVGRExFZEJRVWNzVlVGQlZTeERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRPMmxDUVVOMlF6dGhRVU5LTzFOQlEwbzdPenRCUVVGQkxFRkJSMFFzWVVGQlN5eEpRVUZKTEVkQlFVY3NTVUZCU1N4TlFVRk5MRVZCUVVVN1FVRkRjRUlzWjBKQlFVa3NUVUZCVFN4RFFVRkRMR05CUVdNc1EwRkJReXhIUVVGSExFTkJRVU1zUlVGQlJUdEJRVU0xUWl4dlFrRkJUU3hMUVVGTExFZEJRVWNzVFVGQlRTeERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRPMEZCUXpGQ0xHOUNRVUZOTEdGQlFXRXNSMEZCUnl4aFFVRmhMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU03UVVGRGVrTXNiMEpCUVVrc1UwRkJVeXhaUVVGQkxFTkJRVU03UVVGRFpDeHZRa0ZCU1N4UlFVRlJMRWRCUVVjc1JVRkJSVHM3TzBGQlFVTXNRVUZIYkVJc2IwSkJRVWtzVjBFelJFb3NTMEZCU3l4RlFUSkVTeXhMUVVGTExFTkJRVU1zUlVGQlJUdEJRVU5rTERSQ1FVRlJMRWRCUVVjc1MwRkJTeXhEUVVGRE8ybENRVU53UWl4TlFVRk5PMEZCUTBnc05FSkJRVkVzUTBGQlF5eG5Ra0ZCWjBJc1EwRkJReXhIUVVGSExFdEJRVXNzUTBGQlF6dHBRa0ZEZEVNN096dEJRVUZCTEVGQlIwUXNiMEpCUVVrc1lVRkJZU3hGUVVGRk8wRkJRMllzTkVKQlFWRXNaMEpCUVZFc1lVRkJZU3hGUVVGTExGRkJRVkVzUTBGQlJTeERRVUZETzBGQlF6ZERMRFpDUVVGVExFZEJRVWNzUVVGQlF5eEpRVUZKTEVOQlFVTXNSVUZCUlN4SlFVRkpMRWxCUVVrc1EwRkJReXhGUVVGRkxFTkJRVU1zV1VGQldTeEhRVUZKTEVsQlFVa3NRMEZCUXl4RlFVRkZMRU5CUVVNc1dVRkJXU3hEUVVGRExFZEJRVWNzUTBGQlF5eEhRVUZITEdGQlFXRXNRMEZCUXl4SlFVRkpPenM3UVVGQlF5eHBRa0ZIYkVjc1RVRkJUVHRCUVVOSUxEUkNRVUZKTEZGQlFWRXNRMEZCUXl4SlFVRkpMRXRCUVVzc1UwRkJVeXhGUVVGRk8wRkJRemRDTEc5RFFVRlJMRU5CUVVNc1QwRkJUeXhIUVVGSExGRkJRVkVzUTBGQlF5eEpRVUZKTEVOQlFVTTdlVUpCUlhCRExFMUJRVTBzU1VGQlNTeFJRVUZSTEVOQlFVTXNUMEZCVHl4TFFVRkxMRk5CUVZNc1NVRkJTU3hKUVVGSkxFTkJRVU1zUlVGQlJTeEZRVUZGTzBGQlEyeEVMRzlEUVVGUkxFTkJRVU1zVDBGQlR5eEhRVUZITEVsQlFVa3NRMEZCUXl4RlFVRkZMRU5CUVVNc1IwRkJSeXhEUVVGRExFZEJRVWNzUTBGQlF5eEpRVUZKTEVOQlFVTXNRMEZCUXp0NVFrRkROVU03TzBGQlJVUXNORUpCUVVrc1VVRkJVU3hEUVVGRExFbEJRVWtzUzBGQlN5eFRRVUZUTEVWQlFVVTdRVUZETjBJc2IwTkJRVkVzUTBGQlF5eEpRVUZKTEVkQlFVY3NVVUZCVVN4RFFVRkRMRTlCUVU4c1EwRkJRenQ1UWtGRGNFTTdPMEZCUlVRc1owTkJRVkVzWjBKQlFWRXNXVUZCV1N4RlFVRkxMRkZCUVZFc1EwRkJSU3hEUVVGRE96dEJRVVUxUXl4blEwRkJVU3hEUVVGRExFbEJRVWtzUjBGQlJ5eFJRVUZSTEVOQlFVTXNUMEZCVHpzN08wRkJRVU1zUVVGSGFrTXNORUpCUVVrc1MwRkJTeXhEUVVGRExFbEJRVWtzUlVGQlJUdEJRVU5hTEhGRFFVRlRMRWRCUVVjc1MwRkJTeXhEUVVGRExFbEJRVWs3T3p0QlFVRkRMSGxDUVVjeFFpeE5RVUZOTEVsQlFVa3NTVUZCU1N4RFFVRkRMRVZCUVVVc1NVRkJTU3hKUVVGSkxFTkJRVU1zUlVGQlJTeERRVUZETEZsQlFWa3NSVUZCUlR0QlFVTjRReXg1UTBGQlV5eEhRVUZITEVsQlFVa3NRMEZCUXl4RlFVRkZMRU5CUVVNc1dVRkJXU3hEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZET3paQ1FVVjZReXhOUVVGTkxFbEJRVWtzVjBFdlJsSXNVVUZCVVN4RlFTdEdVeXhSUVVGUkxFTkJRVU1zVDBGQlR5eERRVUZETEVWQlFVVTdPMEZCUlc1RExHOURRVUZKTEdkQ1FVRlZMRWxCUVVrc1EwRkJReXhSUVVGUkxFTkJRVU1zVDBGQlR5eERRVUZETEVWQlFVVTdRVUZEYkVNc05rTkJRVk1zYTBKQlFWa3NRMEZCUXp0cFEwRkRla0lzVFVGQlRTeEpRVUZKTEd0Q1FVRlpMRWxCUVVrc1EwRkJReXhSUVVGUkxFTkJRVU1zVDBGQlR5eERRVUZETEVWQlFVVTdRVUZETTBNc05rTkJRVk1zYjBKQlFXTXNRMEZCUXp0cFEwRkRNMEk3TmtKQlEwbzdjVUpCUTBvN096dEJRVUZCTEVGQlIwUXNiMEpCUVVrc1UwRkJVeXhGUVVGRk8wRkJRMWdzTkVKQlFWRXNRMEZCUXl4SlFVRkpMRWRCUVVjc1UwRkJVenM3TzBGQlFVTXNRVUZITVVJc2QwSkJRVWtzVTBGQlV5eERRVUZETEV0QlFVc3NSVUZCUlR0QlFVTnFRaXcwUWtGQlRTeFhRVUZYTEVkQlFVY3NSVUZCUlRzN08wRkJRVU1zUVVGSGRrSXNOa0pCUVVzc1NVRkJTU3hEUVVGRExFZEJRVWNzUTBGQlF5eEZRVUZGTEVOQlFVTXNSMEZCUnl4dlFrRkJiMElzUlVGQlJTeERRVUZETEVWQlFVVXNSVUZCUlR0QlFVTXpReXhuUTBGQlRTeFJRVUZSTEVkQlFVY3NaMEpCUVdkQ0xFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTTdPMEZCUlhKRExHZERRVUZKTEZGQlFWRXNRMEZCUXl4alFVRmpMRU5CUVVNc1VVRkJVU3hEUVVGRExFVkJRVVU3UVVGRGJrTXNiME5CUVUwc1YwRkJWeXhIUVVGSExGTkJRVk1zUTBGQlF5eExRVUZMTEVOQlFVTXNVVUZCVVN4RFFVRkRMRkZCUVZFc1EwRkJReXhEUVVGRExFTkJRVU03TzBGQlJYaEVMSEZEUVVGTExFbEJRVWtzVVVGQlVTeEpRVUZKTEZkQlFWY3NSVUZCUlR0QlFVTTVRaXgzUTBGQlNTeFhRVUZYTEVOQlFVTXNZMEZCWXl4RFFVRkRMRkZCUVZFc1EwRkJReXhGUVVGRk8wRkJRM1JETERSRFFVRk5MRlZCUVZVc1IwRkJSeXhYUVVGWExFTkJRVU1zVVVGQlVTeERRVUZET3p0QlFVRkRMRUZCUlhwRExEUkRRVUZKTEVOQlFVTXNWMEZCVnl4RFFVRkRMRkZCUVZFc1EwRkJReXhGUVVGRk8wRkJRM2hDTEhWRVFVRlhMRU5CUVVNc1VVRkJVU3hEUVVGRExHZENRVUZSTEZGQlFWRXNTVUZCUlN4TlFVRk5MRVZCUVVVc1IwRkJSeXhGUVVGRkxGRkJRVkVzUlVGQlJTeFJRVUZSTEVkQlFVVXNRMEZCUXpzN1FVRkZla1VzWjBSQlFVa3NVMEZCVXl4RFFVRkRMRmxCUVZrc1JVRkJSVHRCUVVONFFpd3lSRUZCVnl4RFFVRkRMRkZCUVZFc1EwRkJReXhIUVVGSExFRkJRVU1zVTBGQlV5eERRVUZETEZsQlFWa3NRMEZCUXl4UlFVRlJMRU5CUVVNc1owSkJRMmhFTEZkQlFWY3NRMEZCUXl4UlFVRlJMRU5CUVVNc1JVRkJTeXhUUVVGVExFTkJRVU1zV1VGQldTeERRVUZETEZGQlFWRXNRMEZCUXl4cFFrRkRNVVFzVjBGQlZ5eERRVUZETEZGQlFWRXNRMEZCUXl4RlFVRkxMRk5CUVZNc1EwRkJReXhaUVVGWkxFTkJRVVVzUTBGQlF6czJRMEZETDBRN2VVTkJRMG83TzBGQlJVUXNORU5CUVUwc2EwSkJRV3RDTEVkQlFVY3NWMEYwU1d4RExHTkJRV01zUlVGelNXMURMRlZCUVZVc1EwRkJReXhEUVVGRE8wRkJRM1JFTEcxRVFVRlhMRU5CUVVNc1VVRkJVU3hEUVVGRExFTkJRVU1zVVVGQlVTeERRVUZETEVkQlFVY3NhMEpCUVd0Q0xFTkJRVU1zUzBGQlN5eERRVUZETzBGQlF6TkVMRzFFUVVGWExFTkJRVU1zVVVGQlVTeERRVUZETEVOQlFVTXNTVUZCU1N4SFFVRkhMR3RDUVVGclFpeERRVUZETEVsQlFVa3NRMEZCUXp0eFEwRkRlRVE3YVVOQlEwbzdOa0pCUTBvN2VVSkJRMG83TzBGQlJVUXNaME5CUVZFc1EwRkJReXhSUVVGUkxFZEJRVWNzUlVGQlJUczdPMEZCUVVNc1FVRkhka0lzTmtKQlFVc3NTVUZCU1N4UlFVRlJMRWxCUVVrc1YwRkJWeXhGUVVGRk8wRkJRemxDTEdkRFFVRkpMRmRCUVZjc1EwRkJReXhqUVVGakxFTkJRVU1zVVVGQlVTeERRVUZETEVWQlFVVTdRVUZEZEVNc2IwTkJRVTBzVlVGQlZTeEhRVUZITEZkQlFWY3NRMEZCUXl4UlFVRlJMRU5CUVVNc1EwRkJRenRCUVVONlF5eHZRMEZCVFN4WFFVRlhMRWRCUVVjc1IwRkJSeXhIUVVGSExGRkJRVkVzUTBGQlF6czdRVUZGYmtNc2QwTkJRVkVzUTBGQlF5eFJRVUZSTEVOQlFVTXNVVUZCVVN4RFFVRkRMRWRCUVVjc1ZVRkJWU3hEUVVGRExFOUJRVThzUTBGQlF6dEJRVU5xUkN3MlEwRkJZU3hEUVVGRExGZEJRVmNzUTBGQlF5eEhRVUZITEZWQlFWVXNRMEZCUXpzN1FVRkZlRU1zYjBOQlFVa3NTVUZCU1N4RFFVRkRMRk5CUVZNc1EwRkJReXhQUVVGUExFTkJRVU1zVjBGQlZ5eERRVUZETEV0QlFVc3NRMEZCUXl4RFFVRkRMRVZCUVVVN1FVRkROVU1zZDBOQlFVa3NRMEZCUXl4VFFVRlRMRU5CUVVNc1NVRkJTU3hEUVVGRExGZEJRVmNzUTBGQlF5eERRVUZETzJsRFFVTndRenMyUWtGRFNqdDVRa0ZEU2pzN08wRkJRVUVzUVVGSFJDdzBRa0ZCU1N4VFFVRlRMRU5CUVVNc1VVRkJVU3hGUVVGRk8wRkJRM0JDTEc5RFFVRlJMRU5CUVVNc1VVRkJVU3hIUVVGSExGRkJRVkVzUTBGQlF5eFJRVUZSTEVsQlFVa3NVMEZCVXl4RFFVRkRMRkZCUVZFc1EwRkJReXhSUVVGUkxFTkJRVU1zVDBGQlR5eERRVUZETEVOQlFVTTdlVUpCUTJwR096czdRVUZCUVN4eFFrRkhTaXhOUVVGTkxFbEJRVWtzVTBGQlV5eERRVUZETEZsQlFWa3NSVUZCUlR0QlFVTXZRaXh2UTBGQlVTeG5Ra0ZCVVN4VFFVRlRMRU5CUVVNc1dVRkJXU3hGUVVGTExGRkJRVkVzUTBGQlJTeERRVUZET3p0QlFVVjBSQ3hwUTBGQlN5eEpRVUZKTEVOQlFVTXNSMEZCUnl4RFFVRkRMRVZCUVVVc1EwRkJReXhIUVVGSExHOUNRVUZ2UWl4RlFVRkZMRU5CUVVNc1JVRkJSU3hGUVVGRk8wRkJRek5ETEc5RFFVRk5MRkZCUVZFc1IwRkJSeXhuUWtGQlowSXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJRenM3UVVGRmNrTXNiME5CUVVrc1YwRXpTMVFzVVVGQlVTeEZRVEpMVlN4UlFVRlJMRU5CUVVNc1VVRkJVU3hEUVVGRExFTkJRVU1zUlVGQlJUdEJRVU01UWl4M1EwRkJUU3hUUVVGVExFZEJRVWNzVjBFMVMycENMR05CUVdNc1JVRTBTMnRDTEZGQlFWRXNRMEZCUXl4UlFVRlJMRU5CUVVNc1EwRkJReXhEUVVGRE8wRkJRM0pFTERSRFFVRlJMRU5CUVVNc1VVRkJVU3hEUVVGRExFZEJRVWNzVTBGQlV5eERRVUZETEV0QlFVc3NRMEZCUXp0QlFVTnlReXcwUTBGQlVTeERRVUZETEVsQlFVa3NSMEZCUnl4VFFVRlRMRU5CUVVNc1NVRkJTU3hEUVVGRE8ybERRVU5zUXpzMlFrRkRTanQ1UWtGRFNqdHBRa0ZEU2pzN08wRkJRVUVzUVVGSFJDeHZRa0ZCU1N4UlFVRlJMRU5CUVVNc1VVRkJVU3hGUVVGRk8wRkJRMjVDTEhkQ1FVRkpMRWxCUVVrc1EwRkJReXhWUVVGVkxFTkJRVU1zVDBGQlR5eERRVUZETEVkQlFVY3NRMEZCUXl4TFFVRkxMRU5CUVVNc1EwRkJReXhGUVVGRk8wRkJRM0pETERSQ1FVRkpMRU5CUVVNc1ZVRkJWU3hEUVVGRExFbEJRVWtzUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXp0eFFrRkROMEk3YVVKQlEwb3NUVUZCVFR0QlFVTklMSGRDUVVGSkxFbEJRVWtzUTBGQlF5eFRRVUZUTEVOQlFVTXNUMEZCVHl4RFFVRkRMRWRCUVVjc1EwRkJReXhMUVVGTExFTkJRVU1zUTBGQlF5eEZRVUZGTzBGQlEzQkRMRFJDUVVGSkxFTkJRVU1zVTBGQlV5eERRVUZETEVsQlFVa3NRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJRenR4UWtGRE5VSTdhVUpCUTBvN08wRkJSVVFzTmtKQlFXRXNRMEZCUXl4SFFVRkhMRU5CUVVNc1IwRkJSeXhSUVVGUkxFTkJRVU03WVVGRGFrTTdVMEZEU2pzN08wRkJRVUVzUVVGSFJDeFpRVUZKTEVOQlFVTXNXVUZCV1N4SFFVRkhMRWxCUVVrc1EwRkJReXhUUVVGVExFTkJRVU1zVFVGQlRTeERRVUZETzBGQlF6RkRMRmxCUVVrc1EwRkJReXhoUVVGaExFZEJRVWNzU1VGQlNTeERRVUZETEZWQlFWVXNRMEZCUXl4TlFVRk5MRU5CUVVNN08wRkJSVFZETEdWQlFVOHNTVUZCU1N4RFFVRkRPMHRCUTJZN096czdPenM3T3pzN1FVRXZUR2RDTEZWQlFVMHNWMEY1VFhaQ0xGVkJRVlVzZFVKQlFVTXNUVUZCVFN4RlFVRkZMRlZCUVZVc1JVRkJSU3hQUVVGUExFVkJRVVU3UVVGRGNFTXNXVUZCU1N4VlFVRlZMRWRCUVVjc1MwRkJTenM3TzBGQlFVTXNRVUZIZGtJc1lVRkJTeXhKUVVGSkxFTkJRVU1zUjBGQlJ5eERRVUZETEVWQlFVVXNRMEZCUXl4SFFVRkhMRWxCUVVrc1EwRkJReXhaUVVGWkxFVkJRVVVzUTBGQlF5eEZRVUZGTEVWQlFVVTdRVUZEZUVNc1owSkJRVTBzUjBGQlJ5eEhRVUZITEVsQlFVa3NRMEZCUXl4VFFVRlRMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU03UVVGRE9VSXNaMEpCUVUwc1MwRkJTeXhIUVVGSExFbEJRVWtzUTBGQlF5eE5RVUZOTEVOQlFVTXNSMEZCUnl4RFFVRkRPenM3UVVGQlF5eEJRVWN2UWl4blFrRkJTU3hMUVVGTExFTkJRVU1zVTBGQlV5eEZRVUZGTzBGQlEycENMSEZDUVVGTExFTkJRVU1zVDBGQlR5eEhRVUZITEV0QlFVc3NRMEZCUXl4VFFVRlRMRU5CUVVNc1MwRkJTeXhEUVVGRExFOUJRVThzUlVGQlJTeEhRVUZITEVWQlFVVXNTVUZCU1N4RFFVRkRMRU5CUVVNN1lVRkROMFE3T3p0QlFVRkJMRUZCUjBRc1owSkJRVWtzVjBGb1QxQXNTMEZCU3l4RlFXZFBVU3hMUVVGTExFTkJRVU1zUjBGQlJ5eERRVUZETEVWQlFVVTdRVUZEYkVJc2NVSkJRVXNzUTBGQlF5eFBRVUZQTEVkQlFVY3NTVUZCU1N4RFFVRkRMRWRCUVVjc1EwRkJReXhMUVVGTExFTkJRVU1zVDBGQlR5eEZRVUZGTEV0QlFVc3NRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJRenRoUVVOMFJEczdPMEZCUVVFc1FVRkhSQ3huUWtGQlNTeFhRWEpQVUN4TFFVRkxMRVZCY1U5UkxFdEJRVXNzUTBGQlF5eEhRVUZITEVOQlFVTXNSVUZCUlR0QlFVTnNRaXh4UWtGQlN5eERRVUZETEU5QlFVOHNSMEZCUnl4SlFVRkpMRU5CUVVNc1IwRkJSeXhEUVVGRExFdEJRVXNzUTBGQlF5eFBRVUZQTEVWQlFVVXNTMEZCU3l4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRE8yRkJRM1JFT3pzN1FVRkJRU3hCUVVkRUxHZENRVUZKTEV0QlFVc3NRMEZCUXl4TFFVRkxMRVZCUVVVN1FVRkRZaXh4UWtGQlN5eERRVUZETEU5QlFVOHNSMEZCUnl4SlFVRkpMRU5CUVVNc1MwRkJTeXhEUVVGRExFdEJRVXNzUTBGQlF5eFBRVUZQTEVOQlFVTXNRMEZCUXp0aFFVTTNRenM3TzBGQlFVRXNRVUZIUkN4blFrRkJTU3hEUVVGRExFbEJRVWtzUTBGQlF5eHJRa0ZCYTBJc1JVRkJSVHRCUVVNeFFpeHhRa0ZCU3l4RFFVRkRMRkZCUVZFc1IwRkJSeXhWUVdwUWVFSXNZMEZCWXl4RlFXbFFlVUlzUzBGQlN5eERRVUZETEU5QlFVOHNSMEZCUnl4TFFVRkxMRU5CUVVNc1NVRkJTU3hGUVVGRkxFOUJRVThzUTBGQlF5eERRVUZETzJGQlEzaEZPenM3UVVGQlFTeEJRVWRFTEdkQ1FVRkpMRXRCUVVzc1EwRkJReXhKUVVGSkxFdEJRVXNzUzBGQlN5eERRVUZETEU5QlFVOHNSVUZCUlR0QlFVTTVRaXd3UWtGQlZTeEhRVUZITEVsQlFVa3NRMEZCUXp0QlFVTnNRaXh4UWtGQlN5eERRVUZETEVsQlFVa3NSMEZCUnl4TFFVRkxMRU5CUVVNc1QwRkJUenM3TzBGQlFVTXNRVUZITTBJc2IwSkJRVTBzWVVGQllTeEhRVUZITEVGQlFVTXNTMEZCU3l4RFFVRkRMRWxCUVVrc1IwRkJTU3hMUVVGTExFTkJRVU1zVDBGQlR5eEhRVUZITEV0QlFVc3NRMEZCUXl4SlFVRkpMRWRCUVVjc1MwRkJTeXhEUVVGRExFOUJRVTg3T3p0QlFVRkRMRUZCUjJoR0xHOUNRVUZKTEVOQlFVTXNTMEZCU3l4RFFVRkRMRTFCUVUwc1JVRkJSVHRCUVVObUxIZENRVUZKTEVOQlFVTXNTMEZCU3l4RFFVRkRMRWRCUVVjc1EwRkJReXhIUVVGSExHRkJRV0VzUTBGQlF6dHBRa0ZEYmtNc1RVRkJUVHRCUVVOSUxIZENRVUZKTEVOQlFVTXNUVUZCVFN4RFFVRkRMRXRCUVVzc1EwRkJReXhOUVVGTkxFTkJRVU1zUTBGQlF5eFJRVUZSTEVOQlFVTXNTMEZCU3l4RFFVRkRMRkZCUVZFc1EwRkJReXhIUVVGSExHRkJRV0VzUTBGQlF6dHBRa0ZEZEVVN1lVRkRTanRUUVVOS096dEJRVVZFTEdWQlFVOHNRVUZCUXl4SlFVRkpMRU5CUVVNc1UwRkJVeXhIUVVGSkxFbEJRVWtzUjBGQlJ5eFZRVUZWTEVOQlFVTTdTMEZETDBNN096czdPenRCUVRWUVowSXNWVUZCVFN4WFFXbFJka0lzVjBGQlZ5d3dRa0ZCUnpzN1FVRkZWaXhoUVVGTExFbEJRVWtzUTBGQlF5eEhRVUZITEVOQlFVTXNSVUZCUlN4RFFVRkRMRWRCUVVjc1NVRkJTU3hEUVVGRExHRkJRV0VzUlVGQlJTeERRVUZETEVWQlFVVXNSVUZCUlR0QlFVTjZReXhuUWtGQlRTeEhRVUZITEVkQlFVY3NTVUZCU1N4RFFVRkRMRlZCUVZVc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF6dEJRVU12UWl4blFrRkJUU3hMUVVGTExFZEJRVWNzU1VGQlNTeERRVUZETEUxQlFVMHNRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJRenM3UVVGRkwwSXNhVUpCUVVzc1EwRkJReXhQUVVGUExFZEJRVWNzUzBGQlN5eERRVUZETEVsQlFVa3NRMEZCUXl4UFFVRlBMRU5CUVVNc1MwRkJTeXhEUVVGRExGRkJRVkVzUlVGQlJTeExRVUZMTEVOQlFVTXNVVUZCVVN4RFFVRkRMRU5CUVVNN08wRkJSVzVGTEdkQ1FVRkpMRWxCUVVrc1EwRkJReXhMUVVGTExFTkJRVU1zUjBGQlJ5eERRVUZETEV0QlFVc3NTMEZCU3l4RFFVRkRMRTlCUVU4c1JVRkJSVHRCUVVOdVF5eHZRa0ZCU1N4RFFVRkRMRXRCUVVzc1EwRkJReXhIUVVGSExFTkJRVU1zUjBGQlJ5eExRVUZMTEVOQlFVTXNUMEZCVHl4RFFVRkRPMkZCUTI1RE8xTkJRMG83UzBGRFNqczdRVUUzVVdkQ0xGVkJRVTBzVjBFclVYWkNMRkZCUVZFc01rSkJRV2RDTzFsQlFXSXNTMEZCU3l4UlFVRk1MRXRCUVVzN1dVRkJSU3hGUVVGRkxGRkJRVVlzUlVGQlJUczdRVUZEYUVJc1dVRkJTU3hGUVVGRkxFbEJRVWtzUlVGQlJTeERRVUZETEVkQlFVY3NSVUZCUlR0QlFVTmtMR05CUVVVc1EwRkJReXhIUVVGSExFTkJRVU1zUzBGQlN5eERRVUZETEVOQlFVTTdVMEZEYWtJN08wRkJSVVFzV1VGQlNTeEpRVUZKTEVOQlFVTXNUMEZCVHl4RlFVRkZPMEZCUTJRc1owSkJRVWtzUTBGQlF5eFBRVUZQTEVOQlFVTXNTVUZCU1N4RFFVRkRMRU5CUVVNN1UwRkRkRUk3UzBGRFNqczdRVUYyVW1kQ0xGVkJRVTBzVjBGNVVuWkNMRXRCUVVzc2IwSkJRVWM3UVVGRFNpd3lRa0ZCVFN4SlFVRkpMRXRCUVVFc1RVRkJSU3hEUVVGRE8wRkJRMklzWlVGQlR5eEpRVUZKTEVOQlFVTTdTMEZEWmpzN1FVRTFVbWRDTEZWQlFVMHNWMEU0VW5aQ0xFMUJRVTBzY1VKQlFVYzdRVUZEVEN3eVFrRkJUU3hMUVVGTExFdEJRVUVzVFVGQlJTeERRVUZETzBGQlEyUXNaVUZCVHl4SlFVRkpMRU5CUVVNN1MwRkRaanM3UVVGcVUyZENMRlZCUVUwc1YwRnRVM1pDTEV0QlFVc3NiMEpCUVVjN1FVRkRTaXhaUVVGTkxFMUJRVTBzUjBGQlJ5eEpRVUZKTEVOQlFVTXNUVUZCVFN4RFFVRkRPMEZCUXpOQ0xESkNRVUZOTEV0QlFVc3NTMEZCUVN4TlFVRkZMRU5CUVVNN08wRkJSV1FzWVVGQlN5eEpRVUZKTEVkQlFVY3NTVUZCU1N4TlFVRk5MRVZCUVVVN1FVRkRjRUlzWjBKQlFVa3NUVUZCVFN4RFFVRkRMR05CUVdNc1EwRkJReXhIUVVGSExFTkJRVU1zUlVGQlJUdEJRVU0xUWl4elFrRkJUU3hEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETEVsQlFVa3NSMEZCUnl4TlFVRk5MRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU1zVFVGQlRTeEhRVUZITEUxQlFVMHNRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJReXhQUVVGUExFTkJRVU03WVVGREwwUTdVMEZEU2p0TFFVTktPenM3T3pzN08wRkJOVk5uUWl4VlFVRk5MRmRCYlZSMlFpeGxRVUZsTERoQ1FVRkhPMEZCUTJRc1pVRkJUenRCUVVOSUxHMUNRVUZQTEVWQlFVVXNRMEZCUXp0QlFVTldMRzlDUVVGUkxFVkJRVVVzUTBGQlF6dEJRVU5ZTEdsQ1FVRkxMRVZCUVVVc1MwRkJTenRUUVVObUxFTkJRVU03UzBGRFREczdPenM3T3pzN1FVRjZWR2RDTEZWQlFVMHNWMEZwVlhaQ0xHMUNRVUZ0UWl4clEwRkJSenRCUVVOc1FpeGxRVUZQTEZsQlFWa3NRMEZCUXp0TFFVTjJRanM3VjBGdVZXZENMRTFCUVUwN096dHJRa0ZCVGl4TlFVRk5JaXdpWm1sc1pTSTZJa0ZqZEdsdmJpNXFjeUlzSW5OdmRYSmpaVkp2YjNRaU9pSXZWWE5sY25NdlRXRjBkRkJsY25KNUwxTnBkR1Z6TDNCdmNHMXZkR2x2YmlJc0luTnZkWEpqWlhORGIyNTBaVzUwSWpwYkltbHRjRzl5ZENCUWNtOWpaWE56SUdaeWIyMGdKeTR1TDNCeWIyTmxjM012VUhKdlkyVnpjeWM3WEc1cGJYQnZjblFnZXlCemNHVmxaRkJsY2xObFkyOXVaQ0I5SUdaeWIyMGdKeTR1TDJsdVl5OWpZV3hqSnp0Y2JtbHRjRzl5ZENCN0lHbHpUblZ0TENCcGMwOWlhaXdnYVhOVGRISnBibWNzSUhOd2JHbDBWbUZzZFdWVmJtbDBJSDBnWm5KdmJTQW5MaTR2YVc1akwzVjBhV3h6Snp0Y2JtbHRjRzl5ZENCaWFXNWtRV1JoY0hSbGNpQm1jbTl0SUNjdUxpOXBibU12WW1sdVpDMWhaR0Z3ZEdWeUp6dGNibWx0Y0c5eWRDQmpiMnh2Y2xSNWNHVWdabkp2YlNBbkxpNHZkbUZzZFdVdGRIbHdaWE12WTI5c2IzSW5PMXh1YVcxd2IzSjBJR052YlhCc1pYaFVlWEJsSUdaeWIyMGdKeTR1TDNaaGJIVmxMWFI1Y0dWekwyTnZiWEJzWlhnbk8xeHVYRzVqYjI1emRDQkVSVVpCVlV4VVgxQlNUMUFnUFNBblkzVnljbVZ1ZENjN1hHNWpiMjV6ZENCT1ZVMUZVa2xEUVV4ZlZrRk1WVVZUSUQwZ1cwUkZSa0ZWVEZSZlVGSlBVQ3dnSjJaeWIyMG5MQ0FuZEc4bkxDQW5iV2x1Snl3Z0oyMWhlQ2RkTzF4dVkyOXVjM1FnVGxWTlgwNVZUVVZTU1VOQlRGOVdRVXhWUlZNZ1BTQk9WVTFGVWtsRFFVeGZWa0ZNVlVWVExteGxibWQwYUR0Y2JseHVaWGh3YjNKMElHUmxabUYxYkhRZ1kyeGhjM01nUVdOMGFXOXVJR1Y0ZEdWdVpITWdVSEp2WTJWemN5QjdYRzRnSUNBZ1kyOXVjM1J5ZFdOMGIzSW9jSEp2Y0hNcElIdGNiaUFnSUNBZ0lDQWdjSEp2Y0hNdWMzUmhkR1VnUFNCN2ZUdGNiaUFnSUNBZ0lDQWdjM1Z3WlhJb2NISnZjSE1wTzF4dUlDQWdJSDFjYmx4dUlDQWdJQzhxWEc0Z0lDQWdJQ0FnSUNNZ1UyVjBJRUZqZEdsdmJpQndjbTl3WlhKMGFXVnpYRzRnSUNBZ0lDQWdJQ01qSUZObGRDQjFjMlZ5TFdSbFptbHVaV1FnUVdOMGFXOXVJSEJ5YjNCbGNuUnBaWE5jYmx4dUlDQWdJQ0FnSUNCQWNHRnlZVzBnVzI5aWFtVmpkRjFjYmlBZ0lDQWdJQ0FnUUhKbGRIVnliaUJiUVdOMGFXOXVYVnh1SUNBZ0lDb3ZYRzRnSUNBZ2MyVjBLSEJ5YjNCeklEMGdlMzBwSUh0Y2JpQWdJQ0FnSUNBZ1kyOXVjM1FnZXlCMllXeDFaWE1zSUc5dUxDQXVMaTV3Y205d2MxUnZVMlYwSUgwZ1BTQndjbTl3Y3p0Y2JseHVJQ0FnSUNBZ0lDQnpkWEJsY2k1elpYUW9jSEp2Y0hOVWIxTmxkQ2s3WEc1Y2JpQWdJQ0FnSUNBZ2FXWWdLRzl1S1NCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0F2THlCRWRXTnJkSGx3YVhOb0lHTm9aV05ySUdadmNpQkJaR0Z3ZEdWeVhHNGdJQ0FnSUNBZ0lDQWdJQ0IwYUdsekxtOXVJRDBnS0NGdmJpNXpaWFIwWlhJcElEOGdZbWx1WkVGa1lYQjBaWElvYjI0cElEb2diMjQ3WEc0Z0lDQWdJQ0FnSUgxY2JseHVJQ0FnSUNBZ0lDQjBhR2x6TG5aaGJIVmxjeUE5SUhSb2FYTXVkbUZzZFdWeklIeDhJSHQ5TzF4dUlDQWdJQ0FnSUNCMGFHbHpMblpoYkhWbFMyVjVjeUE5SUhSb2FYTXVkbUZzZFdWTFpYbHpJSHg4SUZ0ZE8xeHVJQ0FnSUNBZ0lDQjBhR2x6TG5CaGNtVnVkRXRsZVhNZ1BTQjBhR2x6TG5CaGNtVnVkRXRsZVhNZ2ZId2dXMTA3WEc1Y2JpQWdJQ0FnSUNBZ0x5OGdUV1Z5WjJVZ2JtVjNJR0IyWVd4MVpXQWdjSEp2Y0dWeWRHbGxjeUIzYVhSb0lHVjRhWE4wYVc1blhHNGdJQ0FnSUNBZ0lHTnZibk4wSUdOMWNuSmxiblJXWVd4MVpYTWdQU0IwYUdsekxuWmhiSFZsY3p0Y2JpQWdJQ0FnSUNBZ1kyOXVjM1FnWkdWbVlYVnNkRlpoYkhWbElEMGdkR2hwY3k1blpYUkVaV1poZFd4MFZtRnNkV1VvS1R0Y2JpQWdJQ0FnSUNBZ1kyOXVjM1FnWkdWbVlYVnNkRlpoYkhWbFVISnZjQ0E5SUhSb2FYTXVaMlYwUkdWbVlYVnNkRlpoYkhWbFVISnZjQ2dwTzF4dVhHNGdJQ0FnSUNBZ0lDOHZJRWx1YUdWeWFYUWdkbUZzZFdVZ2NISnZjR1Z5ZEdsbGN5Qm1jbTl0SUdCd2NtOXdjMkJjYmlBZ0lDQWdJQ0FnWm05eUlDaHNaWFFnYTJWNUlHbHVJR1JsWm1GMWJIUldZV3gxWlNrZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnYVdZZ0tHUmxabUYxYkhSV1lXeDFaUzVvWVhOUGQyNVFjbTl3WlhKMGVTaHJaWGtwSUNZbUlIQnliM0J6Vkc5VFpYUXVhR0Z6VDNkdVVISnZjR1Z5ZEhrb2EyVjVLU2tnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUdsbUlDaHdjbTl3YzFSdlUyVjBXMnRsZVYwZ0lUMDlJSFZ1WkdWbWFXNWxaQ2tnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQmtaV1poZFd4MFZtRnNkV1ZiYTJWNVhTQTlJSEJ5YjNCelZHOVRaWFJiYTJWNVhUdGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQjlYRzRnSUNBZ0lDQWdJQ0FnSUNCOVhHNGdJQ0FnSUNBZ0lIMWNibHh1SUNBZ0lDQWdJQ0F2THlCRGFHVmpheUJoYkd3Z2RtRnNkV1Z6SUdGdVpDQnpjR3hwZENCcGJuUnZJR05vYVd4a0lIWmhiSFZsY3lCaGN5QnVaV05qWlhOellYSjVYRzRnSUNBZ0lDQWdJR1p2Y2lBb2JHVjBJR3RsZVNCcGJpQjJZV3gxWlhNcElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUdsbUlDaDJZV3gxWlhNdWFHRnpUM2R1VUhKdmNHVnlkSGtvYTJWNUtTa2dlMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJR052Ym5OMElIWmhiSFZsSUQwZ2RtRnNkV1Z6VzJ0bGVWMDdYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdZMjl1YzNRZ1pYaHBjM1JwYm1kV1lXeDFaU0E5SUdOMWNuSmxiblJXWVd4MVpYTmJhMlY1WFR0Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCc1pYUWdkbUZzZFdWVWVYQmxPMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJR3hsZENCdVpYZFdZV3gxWlNBOUlIdDlPMXh1WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnTHk4Z1EyOXVkbVZ5ZENCdVpYY2dkbUZzZFdVZ2FXNTBieUJ2WW1wbFkzUWdhV1lnYVhRZ2FYTnVKM1FnWVd4eVpXRmtlVnh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJR2xtSUNocGMwOWlhaWgyWVd4MVpTa3BJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2JtVjNWbUZzZFdVZ1BTQjJZV3gxWlR0Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCOUlHVnNjMlVnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQnVaWGRXWVd4MVpWdGtaV1poZFd4MFZtRnNkV1ZRY205d1hTQTlJSFpoYkhWbE8xeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lIMWNibHh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQzh2SUVsbUlIWmhiSFZsSUdGc2NtVmhaSGtnWlhocGMzUnpMQ0JqYUdWamF5Qm1iM0lnWVc1a0lIVnpaU0JsZUdsemRHbHVaeUIwZVhCbFhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2FXWWdLR1Y0YVhOMGFXNW5WbUZzZFdVcElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnYm1WM1ZtRnNkV1VnUFNCN0lDNHVMbVY0YVhOMGFXNW5WbUZzZFdVc0lDNHVMbTVsZDFaaGJIVmxJSDA3WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lIWmhiSFZsVkhsd1pTQTlJQ2gwYUdsekxtOXVJQ1ltSUhSb2FYTXViMjR1WjJWMFZtRnNkV1ZVZVhCbEtTQS9JSFJvYVhNdWIyNHVaMlYwVm1Gc2RXVlVlWEJsS0d0bGVTa2dPaUJsZUdsemRHbHVaMVpoYkhWbExuUjVjR1U3WEc1Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBdkx5QkpaaUIwYUdseklHbHpJR0VnYm1WM0lIWmhiSFZsTENCamFHVmpheUJtYjNJZ2RIbHdaVnh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJSDBnWld4elpTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUdsbUlDaHVaWGRXWVd4MVpTNW1jbTl0SUNFOVBTQjFibVJsWm1sdVpXUXBJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJRzVsZDFaaGJIVmxMbU4xY25KbGJuUWdQU0J1WlhkV1lXeDFaUzVtY205dE8xeHVYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUgwZ1pXeHpaU0JwWmlBb2JtVjNWbUZzZFdVdVkzVnljbVZ1ZENBOVBUMGdkVzVrWldacGJtVmtJQ1ltSUhSb2FYTXViMjRwSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUc1bGQxWmhiSFZsTG1OMWNuSmxiblFnUFNCMGFHbHpMbTl1TG1kbGRDaHJaWGtwSUh4OElEQTdYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUgxY2JseHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0JwWmlBb2JtVjNWbUZzZFdVdVpuSnZiU0E5UFQwZ2RXNWtaV1pwYm1Wa0tTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQnVaWGRXWVd4MVpTNW1jbTl0SUQwZ2JtVjNWbUZzZFdVdVkzVnljbVZ1ZER0Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdmVnh1WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lHNWxkMVpoYkhWbElEMGdleUF1TGk1a1pXWmhkV3gwVm1Gc2RXVXNJQzR1TG01bGQxWmhiSFZsSUgwN1hHNWNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnYm1WM1ZtRnNkV1V1Y0hKbGRpQTlJRzVsZDFaaGJIVmxMbU4xY25KbGJuUTdYRzVjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0x5OGdTV1lnYjI1bElHbHpJR1Y0Y0d4cFkybDBiSGtnWVhOemFXZHVaV1FzSUhWelpTQjBhR0YwWEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lHbG1JQ2gyWVd4MVpTNTBlWEJsS1NCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCMllXeDFaVlI1Y0dVZ1BTQjJZV3gxWlM1MGVYQmxPMXh1WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDOHZJRTl5SUdsbUlHOTFjaUJCWkdGd2RHVnlJR2hoY3lCaElIUjVjR1ZOWVhBc0lIVnpaU0IwYUdGMFhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJSDBnWld4elpTQnBaaUFvZEdocGN5NXZiaUFtSmlCMGFHbHpMbTl1TG1kbGRGWmhiSFZsVkhsd1pTa2dlMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdkbUZzZFdWVWVYQmxJRDBnZEdocGN5NXZiaTVuWlhSV1lXeDFaVlI1Y0dVb2EyVjVLVHRjYmx4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQjlJR1ZzYzJVZ2FXWWdLR2x6VTNSeWFXNW5LRzVsZDFaaGJIVmxMbU4xY25KbGJuUXBLU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0F2THlCVVpYTjBJR2xtSUhSb2FYTWdhWE1nWVNCamIyeHZjaUIyWVd4MVpWeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2FXWWdLR052Ykc5eVZIbHdaUzUwWlhOMEtHNWxkMVpoYkhWbExtTjFjbkpsYm5RcEtTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnZG1Gc2RXVlVlWEJsSUQwZ1kyOXNiM0pVZVhCbE8xeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2ZTQmxiSE5sSUdsbUlDaGpiMjF3YkdWNFZIbHdaUzUwWlhOMEtHNWxkMVpoYkhWbExtTjFjbkpsYm5RcEtTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnZG1Gc2RXVlVlWEJsSUQwZ1kyOXRjR3hsZUZSNWNHVTdYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQjlYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUgxY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCOVhHNWNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQXZMeUJKWmlCM1pTZDJaU0JuYjNRZ1lTQjJZV3gxWlZSNWNHVWdkR2hsYmlCd2NtVndjbTlqWlhOeklIUm9aU0IyWVd4MVpTQmhZMk52Y21ScGJtZHNlVnh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJR2xtSUNoMllXeDFaVlI1Y0dVcElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnYm1WM1ZtRnNkV1V1ZEhsd1pTQTlJSFpoYkhWbFZIbHdaVHRjYmx4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQXZMeUJKWmlCMGFHbHpJSFpoYkhWbElITm9iM1ZzWkNCaVpTQnpjR3hwZEN3Z2MzQnNhWFJjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2FXWWdLSFpoYkhWbFZIbHdaUzV6Y0d4cGRDa2dlMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdZMjl1YzNRZ1kyaHBiR1JXWVd4MVpYTWdQU0I3ZlR0Y2JseHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0x5OGdURzl2Y0NCdmRtVnlJRzUxYldWeWFXTmhiQ0IyWVd4MVpYTWdZVzVrSUhOd2JHbDBJR0Z1ZVNCd2NtVnpaVzUwWEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0JtYjNJZ0tHeGxkQ0JwSUQwZ01Ec2dhU0E4SUU1VlRWOU9WVTFGVWtsRFFVeGZWa0ZNVlVWVE95QnBLeXNwSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQmpiMjV6ZENCd2NtOXdUbUZ0WlNBOUlFNVZUVVZTU1VOQlRGOVdRVXhWUlZOYmFWMDdYRzVjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCcFppQW9ibVYzVm1Gc2RXVXVhR0Z6VDNkdVVISnZjR1Z5ZEhrb2NISnZjRTVoYldVcEtTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lHTnZibk4wSUhOd2JHbDBWbUZzZFdWeklEMGdkbUZzZFdWVWVYQmxMbk53YkdsMEtHNWxkMVpoYkhWbFczQnliM0JPWVcxbFhTazdYRzVjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdabTl5SUNoc1pYUWdjM0JzYVhSTFpYa2dhVzRnYzNCc2FYUldZV3gxWlhNcElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJR2xtSUNoemNHeHBkRlpoYkhWbGN5NW9ZWE5QZDI1UWNtOXdaWEowZVNoemNHeHBkRXRsZVNrcElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCamIyNXpkQ0J6Y0d4cGRGWmhiSFZsSUQwZ2MzQnNhWFJXWVd4MVpYTmJjM0JzYVhSTFpYbGRPMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDOHZJRU55WldGMFpTQnVaWGNnWTJocGJHUWdkbUZzZFdVZ2FXWWdaRzlsYzI0bmRDQmxlR2x6ZEZ4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJR2xtSUNnaFkyaHBiR1JXWVd4MVpYTmJjM0JzYVhSTFpYbGRLU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUdOb2FXeGtWbUZzZFdWelczTndiR2wwUzJWNVhTQTlJSHNnTGk0dWJtVjNWbUZzZFdVc0lIQmhjbVZ1ZERvZ2EyVjVMQ0JqYUdsc1pFdGxlVG9nYzNCc2FYUkxaWGtnZlR0Y2JseHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQnBaaUFvZG1Gc2RXVlVlWEJsTG1SbFptRjFiSFJRY205d2N5a2dlMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ1kyaHBiR1JXWVd4MVpYTmJjM0JzYVhSTFpYbGRJRDBnS0haaGJIVmxWSGx3WlM1a1pXWmhkV3gwVUhKdmNITmJjM0JzYVhSTFpYbGRLU0EvWEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnZXlBdUxpNWphR2xzWkZaaGJIVmxjMXR6Y0d4cGRFdGxlVjBzSUM0dUxuWmhiSFZsVkhsd1pTNWtaV1poZFd4MFVISnZjSE5iYzNCc2FYUkxaWGxkSUgwZ09seHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lIc2dMaTR1WTJocGJHUldZV3gxWlhOYmMzQnNhWFJMWlhsZExDQXVMaTUyWVd4MVpWUjVjR1V1WkdWbVlYVnNkRkJ5YjNCeklIMDdYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJSDFjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQjlYRzVjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQmpiMjV6ZENCMllXeDFaVk53YkdsMFJuSnZiVlZ1YVhRZ1BTQnpjR3hwZEZaaGJIVmxWVzVwZENoemNHeHBkRlpoYkhWbEtUdGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCamFHbHNaRlpoYkhWbGMxdHpjR3hwZEV0bGVWMWJjSEp2Y0U1aGJXVmRJRDBnZG1Gc2RXVlRjR3hwZEVaeWIyMVZibWwwTG5aaGJIVmxPMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lHTm9hV3hrVm1Gc2RXVnpXM053YkdsMFMyVjVYUzUxYm1sMElEMGdkbUZzZFdWVGNHeHBkRVp5YjIxVmJtbDBMblZ1YVhRN1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQjlYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lIMWNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0I5WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0I5WEc1Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUc1bGQxWmhiSFZsTG1Ob2FXeGtjbVZ1SUQwZ2UzMDdYRzVjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQzh2SUU1dmR5QnNiMjl3SUhSb2NtOTFaMmdnWVd4c0lHTm9hV3hrSUhaaGJIVmxjeUJoYm1RZ1lXUmtJSFJvWlcwZ1lYTWdibTl5YldGc0lIWmhiSFZsYzF4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnWm05eUlDaHNaWFFnWTJocGJHUkxaWGtnYVc0Z1kyaHBiR1JXWVd4MVpYTXBJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCcFppQW9ZMmhwYkdSV1lXeDFaWE11YUdGelQzZHVVSEp2Y0dWeWRIa29ZMmhwYkdSTFpYa3BLU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJR052Ym5OMElHTm9hV3hrVm1Gc2RXVWdQU0JqYUdsc1pGWmhiSFZsYzF0amFHbHNaRXRsZVYwN1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUdOdmJuTjBJR052YldKcGJtVmtTMlY1SUQwZ2EyVjVJQ3NnWTJocGJHUkxaWGs3WEc1Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnYm1WM1ZtRnNkV1V1WTJocGJHUnlaVzViWTJocGJHUkxaWGxkSUQwZ1kyaHBiR1JXWVd4MVpTNWpkWEp5Wlc1ME8xeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCamRYSnlaVzUwVm1Gc2RXVnpXMk52YldKcGJtVmtTMlY1WFNBOUlHTm9hV3hrVm1Gc2RXVTdYRzVjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdhV1lnS0hSb2FYTXVkbUZzZFdWTFpYbHpMbWx1WkdWNFQyWW9ZMjl0WW1sdVpXUkxaWGtwSUQwOVBTQXRNU2tnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2RHaHBjeTUyWVd4MVpVdGxlWE11Y0hWemFDaGpiMjFpYVc1bFpFdGxlU2s3WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJSDFjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCOVhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCOVhHNWNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDOHZJRk5oZG1VZ1lTQjBaVzF3YkdGMFpTQm1iM0lnY21WamIyMWlhVzVoZEdsdmJpQnBaaUJ3Y21WelpXNTBYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQnBaaUFvZG1Gc2RXVlVlWEJsTG5SbGJYQnNZWFJsS1NCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdibVYzVm1Gc2RXVXVkR1Z0Y0d4aGRHVWdQU0J1WlhkV1lXeDFaUzUwWlcxd2JHRjBaU0I4ZkNCMllXeDFaVlI1Y0dVdWRHVnRjR3hoZEdVb2JtVjNWbUZzZFdVdVkzVnljbVZ1ZENrN1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCOVhHNWNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnTHk4Z1QzSWdkMlVnYW5WemRDQm9ZWFpsSUdSbFptRjFiSFFnZG1Gc2RXVWdjSEp2Y0hNc0lHeHZZV1FnZEdodmMyVWdJQ0JjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2ZTQmxiSE5sSUdsbUlDaDJZV3gxWlZSNWNHVXVaR1ZtWVhWc2RGQnliM0J6S1NCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCdVpYZFdZV3gxWlNBOUlIc2dMaTR1ZG1Gc2RXVlVlWEJsTG1SbFptRjFiSFJRY205d2N5d2dMaTR1Ym1WM1ZtRnNkV1VnZlR0Y2JseHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ1ptOXlJQ2hzWlhRZ2FTQTlJREE3SUdrZ1BDQk9WVTFmVGxWTlJWSkpRMEZNWDFaQlRGVkZVenNnYVNzcktTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnWTI5dWMzUWdjSEp2Y0U1aGJXVWdQU0JPVlUxRlVrbERRVXhmVmtGTVZVVlRXMmxkTzF4dVhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdhV1lnS0dselUzUnlhVzVuS0c1bGQxWmhiSFZsVzNCeWIzQk9ZVzFsWFNrcElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ1kyOXVjM1FnYzNCc2FYUlZibWwwSUQwZ2MzQnNhWFJXWVd4MVpWVnVhWFFvYm1WM1ZtRnNkV1ZiY0hKdmNFNWhiV1ZkS1R0Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnYm1WM1ZtRnNkV1ZiY0hKdmNFNWhiV1ZkSUQwZ2MzQnNhWFJWYm1sMExuWmhiSFZsTzF4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0J1WlhkV1lXeDFaUzUxYm1sMElEMGdjM0JzYVhSVmJtbDBMblZ1YVhRN1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdmVnh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdmVnh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCOVhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2ZWeHVYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdMeThnVlhCa1lYUmxJR0Z3Y0hKdmNISnBZWFJsSUd4cGMzUnpJSGRwZEdnZ2RtRnNkV1VnYTJWNVhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2FXWWdLRzVsZDFaaGJIVmxMbU5vYVd4a2NtVnVLU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lHbG1JQ2gwYUdsekxuQmhjbVZ1ZEV0bGVYTXVhVzVrWlhoUFppaHJaWGtwSUQwOVBTQXRNU2tnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnZEdocGN5NXdZWEpsYm5STFpYbHpMbkIxYzJnb2EyVjVLVHRjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2ZWeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lIMGdaV3h6WlNCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJR2xtSUNoMGFHbHpMblpoYkhWbFMyVjVjeTVwYm1SbGVFOW1LR3RsZVNrZ1BUMDlJQzB4S1NCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCMGFHbHpMblpoYkhWbFMyVjVjeTV3ZFhOb0tHdGxlU2s3WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lIMWNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQjlYRzVjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0JqZFhKeVpXNTBWbUZzZFdWelcydGxlVjBnUFNCdVpYZFdZV3gxWlR0Y2JpQWdJQ0FnSUNBZ0lDQWdJSDFjYmlBZ0lDQWdJQ0FnZlZ4dVhHNGdJQ0FnSUNBZ0lDOHZJRkJ5WldOdmJYQjFkR1VnZG1Gc2RXVWdhMlY1SUdGdVpDQndZWEpsYm5RZ2EyVjVJR3hsYm1kMGFDQjBieUJ3Y21WMlpXNTBJSEJsY2kxbWNtRnRaU0J0WldGemRYSmxiV1Z1ZEZ4dUlDQWdJQ0FnSUNCMGFHbHpMbTUxYlZaaGJIVmxTMlY1Y3lBOUlIUm9hWE11ZG1Gc2RXVkxaWGx6TG14bGJtZDBhRHRjYmlBZ0lDQWdJQ0FnZEdocGN5NXVkVzFRWVhKbGJuUkxaWGx6SUQwZ2RHaHBjeTV3WVhKbGJuUkxaWGx6TG14bGJtZDBhRHRjYmx4dUlDQWdJQ0FnSUNCeVpYUjFjbTRnZEdocGN6dGNiaUFnSUNCOVhHNWNiaUFnSUNBdktseHVJQ0FnSUNBZ0lDQkVaV05wWkdVZ2QyaGxkR2hsY2lCMGFHbHpJRUZqZEdsdmJpQjNhV3hzSUhKbGJtUmxjaUJ2YmlCdVpYaDBJR1p5WVcxbFhHNWNiaUFnSUNBZ0lDQWdRSEJoY21GdElGdEJZM1JwYjI1ZFhHNGdJQ0FnSUNBZ0lFQndZWEpoYlNCYmJuVnRZbVZ5WFZ4dUlDQWdJQ0FnSUNCQWNHRnlZVzBnVzI1MWJXSmxjbDFjYmlBZ0lDQWdJQ0FnUUhKbGRIVnliaUJiWW05dmJHVmhibDA2SUZKbGRIVnliaUIwY25WbElIUnZJSEpsYm1SbGNseHVJQ0FnSUNvdlhHNGdJQ0FnZDJsc2JGSmxibVJsY2loaFkzUnBiMjRzSUdaeVlXMWxVM1JoYlhBc0lHVnNZWEJ6WldRcElIdGNiaUFnSUNBZ0lDQWdiR1YwSUdoaGMwTm9ZVzVuWldRZ1BTQm1ZV3h6WlR0Y2JseHVJQ0FnSUNBZ0lDQXZMeUJEYUdWamF5QnBaaUJpWVhObElIWmhiSFZsY3lCb1lYWmxJSFZ3WkdGMFpXUWdYRzRnSUNBZ0lDQWdJR1p2Y2lBb2JHVjBJR2tnUFNBd095QnBJRHdnZEdocGN5NXVkVzFXWVd4MVpVdGxlWE03SUdrckt5a2dlMXh1SUNBZ0lDQWdJQ0FnSUNBZ1kyOXVjM1FnYTJWNUlEMGdkR2hwY3k1MllXeDFaVXRsZVhOYmFWMDdYRzRnSUNBZ0lDQWdJQ0FnSUNCamIyNXpkQ0IyWVd4MVpTQTlJSFJvYVhNdWRtRnNkV1Z6VzJ0bGVWMDdYRzVjYmlBZ0lDQWdJQ0FnSUNBZ0lDOHZJRkoxYmlCMGNtRnVjMlp2Y20wZ1puVnVZM1JwYjI0Z0tHbG1JSEJ5WlhObGJuUXBYRzRnSUNBZ0lDQWdJQ0FnSUNCcFppQW9kbUZzZFdVdWRISmhibk5tYjNKdEtTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdkbUZzZFdVdVkzVnljbVZ1ZENBOUlIWmhiSFZsTG5SeVlXNXpabTl5YlNoMllXeDFaUzVqZFhKeVpXNTBMQ0JyWlhrc0lIUm9hWE1wTzF4dUlDQWdJQ0FnSUNBZ0lDQWdmVnh1WEc0Z0lDQWdJQ0FnSUNBZ0lDQXZMeUJEWVhBZ2JXbHVhVzExYlZ4dUlDQWdJQ0FnSUNBZ0lDQWdhV1lnS0dselRuVnRLSFpoYkhWbExtMXBiaWtwSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCMllXeDFaUzVqZFhKeVpXNTBJRDBnVFdGMGFDNXRZWGdvZG1Gc2RXVXVZM1Z5Y21WdWRDd2dkbUZzZFdVdWJXbHVLVHRjYmlBZ0lDQWdJQ0FnSUNBZ0lIMWNibHh1SUNBZ0lDQWdJQ0FnSUNBZ0x5OGdRMkZ3SUcxaGVHbHRkVzFjYmlBZ0lDQWdJQ0FnSUNBZ0lHbG1JQ2hwYzA1MWJTaDJZV3gxWlM1dFlYZ3BLU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnZG1Gc2RXVXVZM1Z5Y21WdWRDQTlJRTFoZEdndWJXbHVLSFpoYkhWbExtTjFjbkpsYm5Rc0lIWmhiSFZsTG0xaGVDazdYRzRnSUNBZ0lDQWdJQ0FnSUNCOVhHNWNiaUFnSUNBZ0lDQWdJQ0FnSUM4dklGSnZkVzVrSUc1MWJXSmxjbHh1SUNBZ0lDQWdJQ0FnSUNBZ2FXWWdLSFpoYkhWbExuSnZkVzVrS1NCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2RtRnNkV1V1WTNWeWNtVnVkQ0E5SUUxaGRHZ3VjbTkxYm1Rb2RtRnNkV1V1WTNWeWNtVnVkQ2s3WEc0Z0lDQWdJQ0FnSUNBZ0lDQjlYRzVjYmlBZ0lDQWdJQ0FnSUNBZ0lDOHZJRlZ3WkdGMFpTQjJaV3h2WTJsMGVWeHVJQ0FnSUNBZ0lDQWdJQ0FnYVdZZ0tDRjBhR2x6TG1OaGJHTjFiR0YwWlhOV1pXeHZZMmwwZVNrZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lIWmhiSFZsTG5abGJHOWphWFI1SUQwZ2MzQmxaV1JRWlhKVFpXTnZibVFvZG1Gc2RXVXVZM1Z5Y21WdWRDQXRJSFpoYkhWbExuQnlaWFlzSUdWc1lYQnpaV1FwTzF4dUlDQWdJQ0FnSUNBZ0lDQWdmVnh1WEc0Z0lDQWdJQ0FnSUNBZ0lDQXZMeUJKWmlCMGFHbHpJSFpoYkhWbElHaGhjeUJqYUdGdVoyVmtYRzRnSUNBZ0lDQWdJQ0FnSUNCcFppQW9kbUZzZFdVdWNISmxkaUFoUFQwZ2RtRnNkV1V1WTNWeWNtVnVkQ2tnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUdoaGMwTm9ZVzVuWldRZ1BTQjBjblZsTzF4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUhaaGJIVmxMbkJ5WlhZZ1BTQjJZV3gxWlM1amRYSnlaVzUwTzF4dVhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0x5OGdRWEJ3Wlc1a0lIVnVhWFJjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0JqYjI1emRDQjJZV3gxWlVadmNsTjBZWFJsSUQwZ0tIWmhiSFZsTG5WdWFYUXBJRDhnZG1Gc2RXVXVZM1Z5Y21WdWRDQXJJSFpoYkhWbExuVnVhWFFnT2lCMllXeDFaUzVqZFhKeVpXNTBPMXh1WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnTHk4Z1FXUmtJSFJ2SUhOMFlYUmxJR2xtSUhSb2FYTWdhWE1nYm05MElHRWdZMmhwYkdRZ2RtRjFaVnh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJR2xtSUNnaGRtRnNkV1V1Y0dGeVpXNTBLU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lIUm9hWE11YzNSaGRHVmJhMlY1WFNBOUlIWmhiSFZsUm05eVUzUmhkR1U3WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnZlNCbGJITmxJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2RHaHBjeTUyWVd4MVpYTmJkbUZzZFdVdWNHRnlaVzUwWFM1amFHbHNaSEpsYmx0MllXeDFaUzVqYUdsc1pFdGxlVjBnUFNCMllXeDFaVVp2Y2xOMFlYUmxPMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJSDFjYmlBZ0lDQWdJQ0FnSUNBZ0lIMWNiaUFnSUNBZ0lDQWdmVnh1WEc0Z0lDQWdJQ0FnSUhKbGRIVnliaUFvZEdocGN5NXZia05zWldGdWRYQXBJRDhnZEhKMVpTQTZJR2hoYzBOb1lXNW5aV1E3WEc0Z0lDQWdmVnh1WEc0Z0lDQWdMeXBjYmlBZ0lDQWdJQ0FnU1dZZ2QyVWdZWEpsSUhKbGJtUmxjbWx1Wnl3Z2NtVmpiMjFpYVc1bElIQmhjbVZ1ZENCMllXeDFaWE1nWm1seWMzUmNiaUFnSUNBcUwxeHVJQ0FnSUc5dVVISmxVbVZ1WkdWeUtDa2dlMXh1SUNBZ0lDQWdJQ0F2THlCVmNHUmhkR1VnY0dGeVpXNTBJSFpoYkhWbGMxeHVJQ0FnSUNBZ0lDQm1iM0lnS0d4bGRDQnBJRDBnTURzZ2FTQThJSFJvYVhNdWJuVnRVR0Z5Wlc1MFMyVjVjenNnYVNzcktTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNCamIyNXpkQ0JyWlhrZ1BTQjBhR2x6TG5CaGNtVnVkRXRsZVhOYmFWMDdYRzRnSUNBZ0lDQWdJQ0FnSUNCamIyNXpkQ0IyWVd4MVpTQTlJSFJvYVhNdWRtRnNkV1Z6VzJ0bGVWMDdYRzVjYmlBZ0lDQWdJQ0FnSUNBZ0lIWmhiSFZsTG1OMWNuSmxiblFnUFNCMllXeDFaUzUwZVhCbExtTnZiV0pwYm1Vb2RtRnNkV1V1WTJocGJHUnlaVzRzSUhaaGJIVmxMblJsYlhCc1lYUmxLVHRjYmx4dUlDQWdJQ0FnSUNBZ0lDQWdhV1lnS0hSb2FYTXVjM1JoZEdWYmEyVjVYU0FoUFQwZ2RtRnNkV1V1WTNWeWNtVnVkQ2tnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUhSb2FYTXVjM1JoZEdWYmEyVjVYU0E5SUhaaGJIVmxMbU4xY25KbGJuUTdYRzRnSUNBZ0lDQWdJQ0FnSUNCOVhHNGdJQ0FnSUNBZ0lIMWNiaUFnSUNCOVhHNWNiaUFnSUNCdmJsSmxibVJsY2loN0lITjBZWFJsTENCdmJpQjlLU0I3WEc0Z0lDQWdJQ0FnSUdsbUlDaHZiaUFtSmlCdmJpNXpaWFFwSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJRzl1TG5ObGRDaHpkR0YwWlNrN1hHNGdJQ0FnSUNBZ0lIMWNibHh1SUNBZ0lDQWdJQ0JwWmlBb2RHaHBjeTV2YmtaeVlXMWxLU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQjBhR2x6TG05dVJuSmhiV1VvZEdocGN5azdYRzRnSUNBZ0lDQWdJSDFjYmlBZ0lDQjlYRzVjYmlBZ0lDQndZWFZ6WlNncElIdGNiaUFnSUNBZ0lDQWdjM1Z3WlhJdWMzUnZjQ2dwTzF4dUlDQWdJQ0FnSUNCeVpYUjFjbTRnZEdocGN6dGNiaUFnSUNCOVhHNWNiaUFnSUNCeVpYTjFiV1VvS1NCN1hHNGdJQ0FnSUNBZ0lITjFjR1Z5TG5OMFlYSjBLQ2s3WEc0Z0lDQWdJQ0FnSUhKbGRIVnliaUIwYUdsek8xeHVJQ0FnSUgxY2JseHVJQ0FnSUhOMFlYSjBLQ2tnZTF4dUlDQWdJQ0FnSUNCamIyNXpkQ0IyWVd4MVpYTWdQU0IwYUdsekxuWmhiSFZsY3p0Y2JpQWdJQ0FnSUNBZ2MzVndaWEl1YzNSaGNuUW9LVHRjYmx4dUlDQWdJQ0FnSUNCbWIzSWdLR3hsZENCclpYa2dhVzRnZG1Gc2RXVnpLU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQnBaaUFvZG1Gc2RXVnpMbWhoYzA5M2JsQnliM0JsY25SNUtHdGxlU2twSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCMllXeDFaWE5iYTJWNVhTNXdjbVYySUQwZ2RtRnNkV1Z6VzJ0bGVWMHViM0pwWjJsdUlEMGdkbUZzZFdWelcydGxlVjB1WTNWeWNtVnVkRHRjYmlBZ0lDQWdJQ0FnSUNBZ0lIMWNiaUFnSUNBZ0lDQWdmVnh1SUNBZ0lIMWNibHh1SUNBZ0lDOHFYRzRnSUNBZ0lDQWdJQ01nUjJWMElHUmxabUYxYkhRZ1FXTjBhVzl1SUhaaGJIVmxJSEJ5YjNCbGNuUnBaWE5jYmx4dUlDQWdJQ0FnSUNCQWNtVjBkWEp1SUZ0dlltcGxZM1JkWEc0Z0lDQWdLaTljYmlBZ0lDQm5aWFJFWldaaGRXeDBWbUZzZFdVb0tTQjdYRzRnSUNBZ0lDQWdJSEpsZEhWeWJpQjdYRzRnSUNBZ0lDQWdJQ0FnSUNCamRYSnlaVzUwT2lBd0xGeHVJQ0FnSUNBZ0lDQWdJQ0FnZG1Wc2IyTnBkSGs2SURBc1hHNGdJQ0FnSUNBZ0lDQWdJQ0J5YjNWdVpEb2dabUZzYzJWY2JpQWdJQ0FnSUNBZ2ZUdGNiaUFnSUNCOVhHNWNiaUFnSUNBdktseHVJQ0FnSUNBZ0lDQWpJRWRsZENCa1pXWmhkV3gwSUVGamRHbHZiaUIyWVd4MVpTQndjbTl3WlhKMGVTQnVZVzFsWEc0Z0lDQWdJQ0FnSUNNaklGTmxkQ0IwYUdseklHQjJZV3gxWldBZ2NISnZjR1Z5ZEhrZ2QyaGxiaUJ6WlhRZ1lYTWdkbUZzZFdVZ2FXNXpkR1ZoWkNCdlppQnZZbXBsWTNSY2JseHVJQ0FnSUNBZ0lDQkFjbVYwZFhKdUlGdHpkSEpwYm1kZFhHNGdJQ0FnS2k5Y2JpQWdJQ0JuWlhSRVpXWmhkV3gwVm1Gc2RXVlFjbTl3S0NrZ2UxeHVJQ0FnSUNBZ0lDQnlaWFIxY200Z1JFVkdRVlZNVkY5UVVrOVFPMXh1SUNBZ0lIMWNibjFjYmlKZGZRPT1cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2FjdGlvbnMvQWN0aW9uLmpzXG4gKiogbW9kdWxlIGlkID0gMzNcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHMuZGVhY3RpdmF0ZSA9IGV4cG9ydHMuZ2V0UHJvY2Vzc0lkID0gdW5kZWZpbmVkO1xuZXhwb3J0cy5hY3RpdmF0ZSA9IGFjdGl2YXRlO1xuXG52YXIgX3RpbWVyID0gcmVxdWlyZSgnLi90aW1lcicpO1xuXG52YXIgX3RpbWVyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3RpbWVyKTtcblxudmFyIF90aWNrID0gcmVxdWlyZSgnLi90aWNrJyk7XG5cbnZhciBfdGljazIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF90aWNrKTtcblxudmFyIF9tYW5hZ2VyID0gcmVxdWlyZSgnLi9tYW5hZ2VyJyk7XG5cbnZhciBfbWFuYWdlcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9tYW5hZ2VyKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxudmFyIHByb2Nlc3NTdGVwT3JkZXIgPSBbeyBuYW1lOiAnb25GcmFtZVN0YXJ0JyB9LCB7IG5hbWU6ICdvblVwZGF0ZScgfSwgeyBuYW1lOiAnd2lsbFJlbmRlcicsIGRlY2lkZVJlbmRlcjogdHJ1ZSB9LCB7IG5hbWU6ICdvblByZVJlbmRlcicsIGlzUmVuZGVyOiB0cnVlIH0sIHsgbmFtZTogJ29uUmVuZGVyJywgaXNSZW5kZXI6IHRydWUgfSwgeyBuYW1lOiAnb25Qb3N0UmVuZGVyJywgaXNSZW5kZXI6IHRydWUgfSwgeyBuYW1lOiAnb25GcmFtZUVuZCcgfSwgeyBuYW1lOiAnb25DbGVhbnVwJyB9XTsgLypcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBDb3JlIHJlbmRlciBsb29wXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBTb21lIGRlY2ljaXNvbnMgaGVyZSBoYXZlIGJlZW4gdGFrZW4gaW4gdGhlIG5hbWUgb2YgcGVyZm9ybWFuY2UuIEFsbCBoYWlsIHBlcmZvcm1hbmNlLlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChJdCB0dXJucyBvdXQgbWljcm9vcHRpbWlzYXRpb25zIGRvIG1hdHRlciB3aGVuIHlvdSBoYXZlIDE2bXMpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqL1xuXG52YXIgbnVtUHJvY2Vzc1N0ZXBzID0gcHJvY2Vzc1N0ZXBPcmRlci5sZW5ndGg7XG5cbi8vIFtib29sZWFuXTogSXMgbG9vcCBydW5uaW5nP1xudmFyIGlzUnVubmluZyA9IGZhbHNlO1xuXG4vKlxuICAgIFt0aW1lc3RhbXBdOiBGcmFtZSB0aW1lc3RhbXBcbiAgICBbaW50XTogVGltZSBzaW5jZSBsYXN0IGZyYW1lXG4qL1xuZnVuY3Rpb24gZmlyZUFsbChmcmFtZVN0YW1wLCBlbGFwc2VkKSB7XG4gICAgdmFyIGFjdGl2ZUlkcyA9IF9tYW5hZ2VyMi5kZWZhdWx0LmdldEFjdGl2ZUlkcygpO1xuICAgIHZhciBhY3RpdmVQcm9jZXNzQ291bnQgPSBhY3RpdmVJZHMubGVuZ3RoO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBudW1Qcm9jZXNzU3RlcHM7IGkrKykge1xuICAgICAgICB2YXIgc3RlcCA9IHByb2Nlc3NTdGVwT3JkZXJbaV07XG5cbiAgICAgICAgZm9yICh2YXIgaTIgPSAwOyBpMiA8IGFjdGl2ZVByb2Nlc3NDb3VudDsgaTIrKykge1xuICAgICAgICAgICAgdmFyIHByb2Nlc3MgPSBfbWFuYWdlcjIuZGVmYXVsdC5hY3RpdmVQcm9jZXNzZXNbYWN0aXZlSWRzW2kyXV07XG4gICAgICAgICAgICB2YXIgcmVzdWx0ID0gZmFsc2U7XG5cbiAgICAgICAgICAgIC8vIENoZWNrIGlmIHRoaXMgcHJvY2VzcyBoYXMgdGhpcyBzdGVwLCBvciBpZiBpdCdzIGEgcmVuZGVyIHN0ZXAgdGhhdCB3ZSdyZSByZW5kZXJpbmcgdGhpcyBmcmFtZVxuICAgICAgICAgICAgaWYgKHByb2Nlc3MgJiYgcHJvY2Vzc1tzdGVwLm5hbWVdICYmICghc3RlcC5pc1JlbmRlciB8fCBzdGVwLmlzUmVuZGVyICYmIHByb2Nlc3MuX3JlbmRlclRoaXNGcmFtZSA9PT0gdHJ1ZSkpIHtcbiAgICAgICAgICAgICAgICByZXN1bHQgPSBwcm9jZXNzW3N0ZXAubmFtZV0uY2FsbChwcm9jZXNzLCBwcm9jZXNzLCBmcmFtZVN0YW1wLCBlbGFwc2VkKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gSWYgdGhpcyBpcyBhIGRlY2lkZSByZW5kZXIgc3RlcCBhbmQgaXQgcmV0dXJucyBgZmFsc2VgLCBzZXQgd2lsbFJlbmRlciB0byBmYWxzZVxuICAgICAgICAgICAgaWYgKHN0ZXAuZGVjaWRlUmVuZGVyKSB7XG4gICAgICAgICAgICAgICAgcHJvY2Vzcy5fcmVuZGVyVGhpc0ZyYW1lID0gcHJvY2Vzc1tzdGVwLm5hbWVdICYmIHJlc3VsdCAhPT0gdHJ1ZSA/IGZhbHNlIDogdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBfbWFuYWdlcjIuZGVmYXVsdC5nZXROb25CYWNrZ3JvdW5kUnVubmluZ0NvdW50KCk7XG59XG5cbi8vIEZ1bmN0aW9uIHRvIGZpcmUgZXZlcnkgZnJhbWVcbmZ1bmN0aW9uIGZyYW1lKGZyYW1lU3RhbXApIHtcbiAgICBfdGltZXIyLmRlZmF1bHQudXBkYXRlKGZyYW1lU3RhbXApO1xuICAgIGlzUnVubmluZyA9IGZpcmVBbGwoZnJhbWVTdGFtcCwgX3RpbWVyMi5kZWZhdWx0LmdldEVsYXBzZWQoKSk7XG5cbiAgICBpZiAoaXNSdW5uaW5nKSB7XG4gICAgICAgICgwLCBfdGljazIuZGVmYXVsdCkoZnJhbWUpO1xuICAgIH1cbn1cblxuLy8gU3RhcnQgbG9vcFxuZnVuY3Rpb24gc3RhcnQoKSB7XG4gICAgaWYgKCFpc1J1bm5pbmcpIHtcbiAgICAgICAgX3RpbWVyMi5kZWZhdWx0LnN0YXJ0KCk7XG4gICAgICAgIGlzUnVubmluZyA9IHRydWU7XG4gICAgICAgICgwLCBfdGljazIuZGVmYXVsdCkoZnJhbWUpO1xuICAgIH1cbn1cblxuLy8gRXhwb3J0c1xudmFyIGdldFByb2Nlc3NJZCA9IGV4cG9ydHMuZ2V0UHJvY2Vzc0lkID0gX21hbmFnZXIyLmRlZmF1bHQuZ2V0UHJvY2Vzc0lkO1xuXG4vKlxuICAgIFtpbnRdOiBQcm9jZXNzIElEIHRvIGFjdGl2YXRlXG4gICAgW1Byb2Nlc3NdOiBQcm9jZXNzIHRvIGFjdGl2YXRlXG4qL1xuZnVuY3Rpb24gYWN0aXZhdGUoaWQsIHByb2Nlc3MpIHtcbiAgICBfbWFuYWdlcjIuZGVmYXVsdC5hY3RpdmF0ZShpZCwgcHJvY2Vzcyk7XG5cbiAgICBpZiAoIWlzUnVubmluZykge1xuICAgICAgICBzdGFydCgpO1xuICAgIH1cbn1cblxuLypcbiAgICBbaW50XTogUHJvY2VzcyBJRCB0byBkZWFjdGl2YXRlXG4qL1xudmFyIGRlYWN0aXZhdGUgPSBleHBvcnRzLmRlYWN0aXZhdGUgPSBfbWFuYWdlcjIuZGVmYXVsdC5kZWFjdGl2YXRlO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluTnlZeTl3Y205alpYTnpMMnh2YjNBdWFuTWlYU3dpYm1GdFpYTWlPbHRkTENKdFlYQndhVzVuY3lJNklqczdPenRSUVdsR1owSXNVVUZCVVN4SFFVRlNMRkZCUVZFN096czdPenM3T3pzN096czdPenM3UVVGMlJYaENMRWxCUVUwc1owSkJRV2RDTEVkQlFVY3NRMEZEY2tJc1JVRkJSU3hKUVVGSkxFVkJRVVVzWTBGQll5eEZRVUZGTEVWQlEzaENMRVZCUVVVc1NVRkJTU3hGUVVGRkxGVkJRVlVzUlVGQlJTeEZRVU53UWl4RlFVRkZMRWxCUVVrc1JVRkJSU3haUVVGWkxFVkJRVVVzV1VGQldTeEZRVUZGTEVsQlFVa3NSVUZCUlN4RlFVTXhReXhGUVVGRkxFbEJRVWtzUlVGQlJTeGhRVUZoTEVWQlFVVXNVVUZCVVN4RlFVRkZMRWxCUVVrc1JVRkJSU3hGUVVOMlF5eEZRVUZGTEVsQlFVa3NSVUZCUlN4VlFVRlZMRVZCUVVVc1VVRkJVU3hGUVVGRkxFbEJRVWtzUlVGQlJTeEZRVU53UXl4RlFVRkZMRWxCUVVrc1JVRkJSU3hqUVVGakxFVkJRVVVzVVVGQlVTeEZRVUZGTEVsQlFVa3NSVUZCUlN4RlFVTjRReXhGUVVGRkxFbEJRVWtzUlVGQlJTeFpRVUZaTEVWQlFVVXNSVUZEZEVJc1JVRkJSU3hKUVVGSkxFVkJRVVVzVjBGQlZ5eEZRVUZGTEVOQlEzaENPenM3T3pzN1FVRkJRenRCUVVOR0xFbEJRVTBzWlVGQlpTeEhRVUZITEdkQ1FVRm5RaXhEUVVGRExFMUJRVTA3T3p0QlFVRkRMRUZCUjJoRUxFbEJRVWtzVTBGQlV5eEhRVUZITEV0QlFVczdPenM3T3p0QlFVRkRMRUZCVFhSQ0xGTkJRVk1zVDBGQlR5eERRVUZETEZWQlFWVXNSVUZCUlN4UFFVRlBMRVZCUVVVN1FVRkRiRU1zVVVGQlRTeFRRVUZUTEVkQlFVY3NhMEpCUVZFc1dVRkJXU3hGUVVGRkxFTkJRVU03UVVGRGVrTXNVVUZCVFN4clFrRkJhMElzUjBGQlJ5eFRRVUZUTEVOQlFVTXNUVUZCVFN4RFFVRkRPenRCUVVVMVF5eFRRVUZMTEVsQlFVa3NRMEZCUXl4SFFVRkhMRU5CUVVNc1JVRkJSU3hEUVVGRExFZEJRVWNzWlVGQlpTeEZRVUZGTEVOQlFVTXNSVUZCUlN4RlFVRkZPMEZCUTNSRExGbEJRVTBzU1VGQlNTeEhRVUZITEdkQ1FVRm5RaXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZET3p0QlFVVnFReXhoUVVGTExFbEJRVWtzUlVGQlJTeEhRVUZITEVOQlFVTXNSVUZCUlN4RlFVRkZMRWRCUVVjc2EwSkJRV3RDTEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVN1FVRkROVU1zWjBKQlFVMHNUMEZCVHl4SFFVRkhMR3RDUVVGUkxHVkJRV1VzUTBGQlF5eFRRVUZUTEVOQlFVTXNSVUZCUlN4RFFVRkRMRU5CUVVNc1EwRkJRenRCUVVOMlJDeG5Ra0ZCU1N4TlFVRk5MRWRCUVVjc1MwRkJTenM3TzBGQlFVTXNRVUZIYmtJc1owSkJRVWtzVDBGQlR5eEpRVUZKTEU5QlFVOHNRMEZCUXl4SlFVRkpMRU5CUVVNc1NVRkJTU3hEUVVGRExFdEJRVXNzUTBGQlF5eEpRVUZKTEVOQlFVTXNVVUZCVVN4SlFVRkxMRWxCUVVrc1EwRkJReXhSUVVGUkxFbEJRVWtzVDBGQlR5eERRVUZETEdkQ1FVRm5RaXhMUVVGTExFbEJRVWtzUTBGQlF5eEJRVUZETEVWQlFVVTdRVUZETTBjc2MwSkJRVTBzUjBGQlJ5eFBRVUZQTEVOQlFVTXNTVUZCU1N4RFFVRkRMRWxCUVVrc1EwRkJReXhEUVVGRExFbEJRVWtzUTBGQlF5eFBRVUZQTEVWQlFVVXNUMEZCVHl4RlFVRkZMRlZCUVZVc1JVRkJSU3hQUVVGUExFTkJRVU1zUTBGQlF6dGhRVU16UlRzN08wRkJRVUVzUVVGSFJDeG5Ra0ZCU1N4SlFVRkpMRU5CUVVNc1dVRkJXU3hGUVVGRk8wRkJRMjVDTEhWQ1FVRlBMRU5CUVVNc1owSkJRV2RDTEVkQlFVY3NRVUZCUXl4UFFVRlBMRU5CUVVNc1NVRkJTU3hEUVVGRExFbEJRVWtzUTBGQlF5eEpRVUZKTEUxQlFVMHNTMEZCU3l4SlFVRkpMRWRCUVVrc1MwRkJTeXhIUVVGSExFbEJRVWtzUTBGQlF6dGhRVU55Ump0VFFVTktPMHRCUTBvN08wRkJSVVFzVjBGQlR5eHJRa0ZCVVN3MFFrRkJORUlzUlVGQlJTeERRVUZETzBOQlEycEVPenM3UVVGQlFTeEJRVWRFTEZOQlFWTXNTMEZCU3l4RFFVRkRMRlZCUVZVc1JVRkJSVHRCUVVOMlFpeHZRa0ZCVFN4TlFVRk5MRU5CUVVNc1ZVRkJWU3hEUVVGRExFTkJRVU03UVVGRGVrSXNZVUZCVXl4SFFVRkhMRTlCUVU4c1EwRkJReXhWUVVGVkxFVkJRVVVzWjBKQlFVMHNWVUZCVlN4RlFVRkZMRU5CUVVNc1EwRkJRenM3UVVGRmNFUXNVVUZCU1N4VFFVRlRMRVZCUVVVN1FVRkRXQ3cwUWtGQlN5eExRVUZMTEVOQlFVTXNRMEZCUXp0TFFVTm1PME5CUTBvN096dEJRVUZCTEVGQlIwUXNVMEZCVXl4TFFVRkxMRWRCUVVjN1FVRkRZaXhSUVVGSkxFTkJRVU1zVTBGQlV5eEZRVUZGTzBGQlExb3NkMEpCUVUwc1MwRkJTeXhGUVVGRkxFTkJRVU03UVVGRFpDeHBRa0ZCVXl4SFFVRkhMRWxCUVVrc1EwRkJRenRCUVVOcVFpdzBRa0ZCU3l4TFFVRkxMRU5CUVVNc1EwRkJRenRMUVVObU8wTkJRMG83T3p0QlFVRkJMRUZCUjAwc1NVRkJUU3haUVVGWkxGZEJRVm9zV1VGQldTeEhRVUZITEd0Q1FVRlJMRmxCUVZrN096czdPenRCUVVGRExFRkJUVEZETEZOQlFWTXNVVUZCVVN4RFFVRkRMRVZCUVVVc1JVRkJSU3hQUVVGUExFVkJRVVU3UVVGRGJFTXNjMEpCUVZFc1VVRkJVU3hEUVVGRExFVkJRVVVzUlVGQlJTeFBRVUZQTEVOQlFVTXNRMEZCUXpzN1FVRkZPVUlzVVVGQlNTeERRVUZETEZOQlFWTXNSVUZCUlR0QlFVTmFMR0ZCUVVzc1JVRkJSU3hEUVVGRE8wdEJRMWc3UTBGRFNqczdPenM3UVVGQlFTeEJRVXROTEVsQlFVMHNWVUZCVlN4WFFVRldMRlZCUVZVc1IwRkJSeXhyUWtGQlVTeFZRVUZWTEVOQlFVTWlMQ0ptYVd4bElqb2liRzl2Y0M1cWN5SXNJbk52ZFhKalpWSnZiM1FpT2lJdlZYTmxjbk12VFdGMGRGQmxjbko1TDFOcGRHVnpMM0J2Y0cxdmRHbHZiaUlzSW5OdmRYSmpaWE5EYjI1MFpXNTBJanBiSWk4cVhHNGdJQ0FnUTI5eVpTQnlaVzVrWlhJZ2JHOXZjRnh1WEc0Z0lDQWdVMjl0WlNCa1pXTnBZMmx6YjI1eklHaGxjbVVnYUdGMlpTQmlaV1Z1SUhSaGEyVnVJR2x1SUhSb1pTQnVZVzFsSUc5bUlIQmxjbVp2Y20xaGJtTmxMaUJCYkd3Z2FHRnBiQ0J3WlhKbWIzSnRZVzVqWlM1Y2JpQWdJQ0FvU1hRZ2RIVnlibk1nYjNWMElHMXBZM0p2YjNCMGFXMXBjMkYwYVc5dWN5QmtieUJ0WVhSMFpYSWdkMmhsYmlCNWIzVWdhR0YyWlNBeE5tMXpLVnh1S2k5Y2JtbHRjRzl5ZENCMGFXMWxjaUJtY205dElDY3VMM1JwYldWeUp6dGNibWx0Y0c5eWRDQjBhV05ySUdaeWIyMGdKeTR2ZEdsamF5YzdYRzVwYlhCdmNuUWdiV0Z1WVdkbGNpQm1jbTl0SUNjdUwyMWhibUZuWlhJbk8xeHVYRzVqYjI1emRDQndjbTlqWlhOelUzUmxjRTl5WkdWeUlEMGdXMXh1SUNBZ0lIc2dibUZ0WlRvZ0oyOXVSbkpoYldWVGRHRnlkQ2NnZlN4Y2JpQWdJQ0I3SUc1aGJXVTZJQ2R2YmxWd1pHRjBaU2NnZlN4Y2JpQWdJQ0I3SUc1aGJXVTZJQ2QzYVd4c1VtVnVaR1Z5Snl3Z1pHVmphV1JsVW1WdVpHVnlPaUIwY25WbElIMHNYRzRnSUNBZ2V5QnVZVzFsT2lBbmIyNVFjbVZTWlc1a1pYSW5MQ0JwYzFKbGJtUmxjam9nZEhKMVpTQjlMRnh1SUNBZ0lIc2dibUZ0WlRvZ0oyOXVVbVZ1WkdWeUp5d2dhWE5TWlc1a1pYSTZJSFJ5ZFdVZ2ZTeGNiaUFnSUNCN0lHNWhiV1U2SUNkdmJsQnZjM1JTWlc1a1pYSW5MQ0JwYzFKbGJtUmxjam9nZEhKMVpTQjlMRnh1SUNBZ0lIc2dibUZ0WlRvZ0oyOXVSbkpoYldWRmJtUW5JSDBzWEc0Z0lDQWdleUJ1WVcxbE9pQW5iMjVEYkdWaGJuVndKeUI5WEc1ZE8xeHVZMjl1YzNRZ2JuVnRVSEp2WTJWemMxTjBaWEJ6SUQwZ2NISnZZMlZ6YzFOMFpYQlBjbVJsY2k1c1pXNW5kR2c3WEc1Y2JpOHZJRnRpYjI5c1pXRnVYVG9nU1hNZ2JHOXZjQ0J5ZFc1dWFXNW5QMXh1YkdWMElHbHpVblZ1Ym1sdVp5QTlJR1poYkhObE8xeHVYRzR2S2x4dUlDQWdJRnQwYVcxbGMzUmhiWEJkT2lCR2NtRnRaU0IwYVcxbGMzUmhiWEJjYmlBZ0lDQmJhVzUwWFRvZ1ZHbHRaU0J6YVc1alpTQnNZWE4wSUdaeVlXMWxYRzRxTDF4dVpuVnVZM1JwYjI0Z1ptbHlaVUZzYkNobWNtRnRaVk4wWVcxd0xDQmxiR0Z3YzJWa0tTQjdYRzRnSUNBZ1kyOXVjM1FnWVdOMGFYWmxTV1J6SUQwZ2JXRnVZV2RsY2k1blpYUkJZM1JwZG1WSlpITW9LVHRjYmlBZ0lDQmpiMjV6ZENCaFkzUnBkbVZRY205alpYTnpRMjkxYm5RZ1BTQmhZM1JwZG1WSlpITXViR1Z1WjNSb08xeHVYRzRnSUNBZ1ptOXlJQ2hzWlhRZ2FTQTlJREE3SUdrZ1BDQnVkVzFRY205alpYTnpVM1JsY0hNN0lHa3JLeWtnZTF4dUlDQWdJQ0FnSUNCamIyNXpkQ0J6ZEdWd0lEMGdjSEp2WTJWemMxTjBaWEJQY21SbGNsdHBYVHRjYmx4dUlDQWdJQ0FnSUNCbWIzSWdLR3hsZENCcE1pQTlJREE3SUdreUlEd2dZV04wYVhabFVISnZZMlZ6YzBOdmRXNTBPeUJwTWlzcktTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNCamIyNXpkQ0J3Y205alpYTnpJRDBnYldGdVlXZGxjaTVoWTNScGRtVlFjbTlqWlhOelpYTmJZV04wYVhabFNXUnpXMmt5WFYwN1hHNGdJQ0FnSUNBZ0lDQWdJQ0JzWlhRZ2NtVnpkV3gwSUQwZ1ptRnNjMlU3WEc1Y2JpQWdJQ0FnSUNBZ0lDQWdJQzh2SUVOb1pXTnJJR2xtSUhSb2FYTWdjSEp2WTJWemN5Qm9ZWE1nZEdocGN5QnpkR1Z3TENCdmNpQnBaaUJwZENkeklHRWdjbVZ1WkdWeUlITjBaWEFnZEdoaGRDQjNaU2R5WlNCeVpXNWtaWEpwYm1jZ2RHaHBjeUJtY21GdFpWeHVJQ0FnSUNBZ0lDQWdJQ0FnYVdZZ0tIQnliMk5sYzNNZ0ppWWdjSEp2WTJWemMxdHpkR1Z3TG01aGJXVmRJQ1ltSUNnaGMzUmxjQzVwYzFKbGJtUmxjaUI4ZkNBb2MzUmxjQzVwYzFKbGJtUmxjaUFtSmlCd2NtOWpaWE56TGw5eVpXNWtaWEpVYUdselJuSmhiV1VnUFQwOUlIUnlkV1VwS1NrZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lISmxjM1ZzZENBOUlIQnliMk5sYzNOYmMzUmxjQzV1WVcxbFhTNWpZV3hzS0hCeWIyTmxjM01zSUhCeWIyTmxjM01zSUdaeVlXMWxVM1JoYlhBc0lHVnNZWEJ6WldRcE8xeHVJQ0FnSUNBZ0lDQWdJQ0FnZlZ4dVhHNGdJQ0FnSUNBZ0lDQWdJQ0F2THlCSlppQjBhR2x6SUdseklHRWdaR1ZqYVdSbElISmxibVJsY2lCemRHVndJR0Z1WkNCcGRDQnlaWFIxY201eklHQm1ZV3h6WldBc0lITmxkQ0IzYVd4c1VtVnVaR1Z5SUhSdklHWmhiSE5sWEc0Z0lDQWdJQ0FnSUNBZ0lDQnBaaUFvYzNSbGNDNWtaV05wWkdWU1pXNWtaWElwSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCd2NtOWpaWE56TGw5eVpXNWtaWEpVYUdselJuSmhiV1VnUFNBb2NISnZZMlZ6YzF0emRHVndMbTVoYldWZElDWW1JSEpsYzNWc2RDQWhQVDBnZEhKMVpTa2dQeUJtWVd4elpTQTZJSFJ5ZFdVN1hHNGdJQ0FnSUNBZ0lDQWdJQ0I5WEc0Z0lDQWdJQ0FnSUgxY2JpQWdJQ0I5WEc1Y2JpQWdJQ0J5WlhSMWNtNGdiV0Z1WVdkbGNpNW5aWFJPYjI1Q1lXTnJaM0p2ZFc1a1VuVnVibWx1WjBOdmRXNTBLQ2s3WEc1OVhHNWNiaTh2SUVaMWJtTjBhVzl1SUhSdklHWnBjbVVnWlhabGNua2dabkpoYldWY2JtWjFibU4wYVc5dUlHWnlZVzFsS0daeVlXMWxVM1JoYlhBcElIdGNiaUFnSUNCMGFXMWxjaTUxY0dSaGRHVW9abkpoYldWVGRHRnRjQ2s3WEc0Z0lDQWdhWE5TZFc1dWFXNW5JRDBnWm1seVpVRnNiQ2htY21GdFpWTjBZVzF3TENCMGFXMWxjaTVuWlhSRmJHRndjMlZrS0NrcE8xeHVYRzRnSUNBZ2FXWWdLR2x6VW5WdWJtbHVaeWtnZTF4dUlDQWdJQ0FnSUNCMGFXTnJLR1p5WVcxbEtUdGNiaUFnSUNCOVhHNTlYRzVjYmk4dklGTjBZWEowSUd4dmIzQmNibVoxYm1OMGFXOXVJSE4wWVhKMEtDa2dlMXh1SUNBZ0lHbG1JQ2doYVhOU2RXNXVhVzVuS1NCN1hHNGdJQ0FnSUNBZ0lIUnBiV1Z5TG5OMFlYSjBLQ2s3WEc0Z0lDQWdJQ0FnSUdselVuVnVibWx1WnlBOUlIUnlkV1U3WEc0Z0lDQWdJQ0FnSUhScFkyc29abkpoYldVcE8xeHVJQ0FnSUgxY2JuMWNibHh1THk4Z1JYaHdiM0owYzF4dVpYaHdiM0owSUdOdmJuTjBJR2RsZEZCeWIyTmxjM05KWkNBOUlHMWhibUZuWlhJdVoyVjBVSEp2WTJWemMwbGtPMXh1WEc0dktseHVJQ0FnSUZ0cGJuUmRPaUJRY205alpYTnpJRWxFSUhSdklHRmpkR2wyWVhSbFhHNGdJQ0FnVzFCeWIyTmxjM05kT2lCUWNtOWpaWE56SUhSdklHRmpkR2wyWVhSbFhHNHFMMXh1Wlhod2IzSjBJR1oxYm1OMGFXOXVJR0ZqZEdsMllYUmxLR2xrTENCd2NtOWpaWE56S1NCN1hHNGdJQ0FnYldGdVlXZGxjaTVoWTNScGRtRjBaU2hwWkN3Z2NISnZZMlZ6Y3lrN1hHNWNiaUFnSUNCcFppQW9JV2x6VW5WdWJtbHVaeWtnZTF4dUlDQWdJQ0FnSUNCemRHRnlkQ2dwTzF4dUlDQWdJSDFjYm4xY2JseHVMeXBjYmlBZ0lDQmJhVzUwWFRvZ1VISnZZMlZ6Y3lCSlJDQjBieUJrWldGamRHbDJZWFJsWEc0cUwxeHVaWGh3YjNKMElHTnZibk4wSUdSbFlXTjBhWFpoZEdVZ1BTQnRZVzVoWjJWeUxtUmxZV04wYVhaaGRHVTdJbDE5XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9wcm9jZXNzL2xvb3AuanNcbiAqKiBtb2R1bGUgaWQgPSAzNFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX0lucHV0MiA9IHJlcXVpcmUoJy4vSW5wdXQnKTtcblxudmFyIF9JbnB1dDMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9JbnB1dDIpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmICghc2VsZikgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIGNhbGwgJiYgKHR5cGVvZiBjYWxsID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpID8gY2FsbCA6IHNlbGY7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgXCIgKyB0eXBlb2Ygc3VwZXJDbGFzcyk7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgZW51bWVyYWJsZTogZmFsc2UsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcykgOiBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzOyB9XG5cbnZhciBQb2ludGVyID0gKGZ1bmN0aW9uIChfSW5wdXQpIHtcbiAgICBfaW5oZXJpdHMoUG9pbnRlciwgX0lucHV0KTtcblxuICAgIGZ1bmN0aW9uIFBvaW50ZXIoaW5pdGlhbFN0YXRlLCBtb3ZlRXZlbnQsIGV2ZW50VG9Qb2ludCkge1xuICAgICAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgUG9pbnRlcik7XG5cbiAgICAgICAgdmFyIF90aGlzID0gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgX0lucHV0LmNhbGwodGhpcywgaW5pdGlhbFN0YXRlKSk7XG5cbiAgICAgICAgX3RoaXMuZXZlbnRUb1BvaW50ID0gZXZlbnRUb1BvaW50O1xuICAgICAgICBfdGhpcy5tb3ZlRXZlbnQgPSBtb3ZlRXZlbnQ7XG4gICAgICAgIHJldHVybiBfdGhpcztcbiAgICB9XG5cbiAgICBQb2ludGVyLnByb3RvdHlwZS5sYXRlc3QgPSBmdW5jdGlvbiBsYXRlc3QoZSkge1xuICAgICAgICBfSW5wdXQucHJvdG90eXBlLmxhdGVzdC5jYWxsKHRoaXMsIHRoaXMuZXZlbnRUb1BvaW50KGUpKTtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH07XG5cbiAgICBQb2ludGVyLnByb3RvdHlwZS5zdGFydCA9IGZ1bmN0aW9uIHN0YXJ0KCkge1xuICAgICAgICB2YXIgX3RoaXMyID0gdGhpcztcblxuICAgICAgICBfSW5wdXQucHJvdG90eXBlLnN0YXJ0LmNhbGwodGhpcyk7XG4gICAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5hZGRFdmVudExpc3RlbmVyKHRoaXMubW92ZUV2ZW50LCBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgcmV0dXJuIF90aGlzMi5sYXRlc3QoZSk7XG4gICAgICAgIH0pO1xuICAgIH07XG5cbiAgICBQb2ludGVyLnByb3RvdHlwZS5zdG9wID0gZnVuY3Rpb24gc3RvcCgpIHtcbiAgICAgICAgdmFyIF90aGlzMyA9IHRoaXM7XG5cbiAgICAgICAgX0lucHV0LnByb3RvdHlwZS5zdG9wLmNhbGwodGhpcyk7XG4gICAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKHRoaXMubW92ZUV2ZW50LCBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgcmV0dXJuIF90aGlzMy5sYXRlc3QoZSk7XG4gICAgICAgIH0pO1xuICAgIH07XG5cbiAgICByZXR1cm4gUG9pbnRlcjtcbn0pKF9JbnB1dDMuZGVmYXVsdCk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IFBvaW50ZXI7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5OeVl5OXBibkIxZEM5UWIybHVkR1Z5TG1weklsMHNJbTVoYldWeklqcGJYU3dpYldGd2NHbHVaM01pT2lJN096czdPenM3T3pzN096czdPenM3U1VGRmNVSXNUMEZCVHp0alFVRlFMRTlCUVU4N08wRkJRM2hDTEdGQlJHbENMRTlCUVU4c1EwRkRXaXhaUVVGWkxFVkJRVVVzVTBGQlV5eEZRVUZGTEZsQlFWa3NSVUZCUlRzNFFrRkViRU1zVDBGQlR6czdjVVJCUlhCQ0xHdENRVUZOTEZsQlFWa3NRMEZCUXpzN1FVRkRia0lzWTBGQlN5eFpRVUZaTEVkQlFVY3NXVUZCV1N4RFFVRkRPMEZCUTJwRExHTkJRVXNzVTBGQlV5eEhRVUZITEZOQlFWTXNRMEZCUXpzN1MwRkRPVUk3TzBGQlRHZENMRmRCUVU4c1YwRlBlRUlzVFVGQlRTeHRRa0ZCUXl4RFFVRkRMRVZCUVVVN1FVRkRUaXg1UWtGQlRTeE5RVUZOTEV0QlFVRXNUMEZCUXl4SlFVRkpMRU5CUVVNc1dVRkJXU3hEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTTdRVUZEYmtNc1UwRkJReXhEUVVGRExHTkJRV01zUlVGQlJTeERRVUZETzB0QlEzUkNPenRCUVZablFpeFhRVUZQTEZkQldYaENMRXRCUVVzc2IwSkJRVWM3T3p0QlFVTktMSGxDUVVGTkxFdEJRVXNzUzBGQlFTeE5RVUZGTEVOQlFVTTdRVUZEWkN4blFrRkJVU3hEUVVGRExHVkJRV1VzUTBGQlF5eG5Ra0ZCWjBJc1EwRkJReXhKUVVGSkxFTkJRVU1zVTBGQlV5eEZRVUZGTEZWQlFVTXNRMEZCUXp0dFFrRkJTeXhQUVVGTExFMUJRVTBzUTBGQlF5eERRVUZETEVOQlFVTTdVMEZCUVN4RFFVRkRMRU5CUVVNN1MwRkRjRVk3TzBGQlptZENMRmRCUVU4c1YwRnBRbmhDTEVsQlFVa3NiVUpCUVVjN096dEJRVU5JTEhsQ1FVRk5MRWxCUVVrc1MwRkJRU3hOUVVGRkxFTkJRVU03UVVGRFlpeG5Ra0ZCVVN4RFFVRkRMR1ZCUVdVc1EwRkJReXh0UWtGQmJVSXNRMEZCUXl4SlFVRkpMRU5CUVVNc1UwRkJVeXhGUVVGRkxGVkJRVU1zUTBGQlF6dHRRa0ZCU3l4UFFVRkxMRTFCUVUwc1EwRkJReXhEUVVGRExFTkJRVU03VTBGQlFTeERRVUZETEVOQlFVTTdTMEZEZGtZN08xZEJjRUpuUWl4UFFVRlBPenM3YTBKQlFWQXNUMEZCVHlJc0ltWnBiR1VpT2lKUWIybHVkR1Z5TG1weklpd2ljMjkxY21ObFVtOXZkQ0k2SWk5VmMyVnljeTlOWVhSMFVHVnljbmt2VTJsMFpYTXZjRzl3Ylc5MGFXOXVJaXdpYzI5MWNtTmxjME52Ym5SbGJuUWlPbHNpYVcxd2IzSjBJRWx1Y0hWMElHWnliMjBnSnk0dlNXNXdkWFFuTzF4dVhHNWxlSEJ2Y25RZ1pHVm1ZWFZzZENCamJHRnpjeUJRYjJsdWRHVnlJR1Y0ZEdWdVpITWdTVzV3ZFhRZ2UxeHVJQ0FnSUdOdmJuTjBjblZqZEc5eUtHbHVhWFJwWVd4VGRHRjBaU3dnYlc5MlpVVjJaVzUwTENCbGRtVnVkRlJ2VUc5cGJuUXBJSHRjYmlBZ0lDQWdJQ0FnYzNWd1pYSW9hVzVwZEdsaGJGTjBZWFJsS1R0Y2JpQWdJQ0FnSUNBZ2RHaHBjeTVsZG1WdWRGUnZVRzlwYm5RZ1BTQmxkbVZ1ZEZSdlVHOXBiblE3WEc0Z0lDQWdJQ0FnSUhSb2FYTXViVzkyWlVWMlpXNTBJRDBnYlc5MlpVVjJaVzUwTzF4dUlDQWdJSDFjYmx4dUlDQWdJR3hoZEdWemRDaGxLU0I3WEc0Z0lDQWdJQ0FnSUhOMWNHVnlMbXhoZEdWemRDaDBhR2x6TG1WMlpXNTBWRzlRYjJsdWRDaGxLU2s3WEc0Z0lDQWdJQ0FnSUdVdWNISmxkbVZ1ZEVSbFptRjFiSFFvS1R0Y2JpQWdJQ0I5WEc1Y2JpQWdJQ0J6ZEdGeWRDZ3BJSHRjYmlBZ0lDQWdJQ0FnYzNWd1pYSXVjM1JoY25Rb0tUdGNiaUFnSUNBZ0lDQWdaRzlqZFcxbGJuUXVaRzlqZFcxbGJuUkZiR1Z0Wlc1MExtRmtaRVYyWlc1MFRHbHpkR1Z1WlhJb2RHaHBjeTV0YjNabFJYWmxiblFzSUNobEtTQTlQaUIwYUdsekxteGhkR1Z6ZENobEtTazdYRzRnSUNBZ2ZWeHVYRzRnSUNBZ2MzUnZjQ2dwSUh0Y2JpQWdJQ0FnSUNBZ2MzVndaWEl1YzNSdmNDZ3BPMXh1SUNBZ0lDQWdJQ0JrYjJOMWJXVnVkQzVrYjJOMWJXVnVkRVZzWlcxbGJuUXVjbVZ0YjNabFJYWmxiblJNYVhOMFpXNWxjaWgwYUdsekxtMXZkbVZGZG1WdWRDd2dLR1VwSUQwK0lIUm9hWE11YkdGMFpYTjBLR1VwS1R0Y2JpQWdJQ0I5WEc1OVhHNGlYWDA9XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9pbnB1dC9Qb2ludGVyLmpzXG4gKiogbW9kdWxlIGlkID0gMzVcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF9hbmdsZSA9IHJlcXVpcmUoJy4uLy4uL3ZhbHVlLXR5cGVzL2FuZ2xlJyk7XG5cbnZhciBfYW5nbGUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfYW5nbGUpO1xuXG52YXIgX2FscGhhID0gcmVxdWlyZSgnLi4vLi4vdmFsdWUtdHlwZXMvYWxwaGEnKTtcblxudmFyIF9hbHBoYTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9hbHBoYSk7XG5cbnZhciBfYXhlcyA9IHJlcXVpcmUoJy4uLy4uL3ZhbHVlLXR5cGVzL2F4ZXMnKTtcblxudmFyIF9heGVzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2F4ZXMpO1xuXG52YXIgX2NvbG9yID0gcmVxdWlyZSgnLi4vLi4vdmFsdWUtdHlwZXMvY29sb3InKTtcblxudmFyIF9jb2xvcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jb2xvcik7XG5cbnZhciBfc2NhbGUgPSByZXF1aXJlKCcuLi8uLi92YWx1ZS10eXBlcy9zY2FsZScpO1xuXG52YXIgX3NjYWxlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3NjYWxlKTtcblxudmFyIF9zaGFkb3cgPSByZXF1aXJlKCcuLi8uLi92YWx1ZS10eXBlcy9zaGFkb3cnKTtcblxudmFyIF9zaGFkb3cyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfc2hhZG93KTtcblxudmFyIF9wb3NpdGlvbnMgPSByZXF1aXJlKCcuLi8uLi92YWx1ZS10eXBlcy9wb3NpdGlvbnMnKTtcblxudmFyIF9wb3NpdGlvbnMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcG9zaXRpb25zKTtcblxudmFyIF9weCA9IHJlcXVpcmUoJy4uLy4uL3ZhbHVlLXR5cGVzL3B4Jyk7XG5cbnZhciBfcHgyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcHgpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5leHBvcnRzLmRlZmF1bHQgPSB7XG4gICAgLy8gQ29sb3IgcHJvcHNcbiAgICBjb2xvcjogX2NvbG9yMi5kZWZhdWx0LFxuICAgIGJhY2tncm91bmRDb2xvcjogX2NvbG9yMi5kZWZhdWx0LFxuICAgIG91dGxpbmVDb2xvcjogX2NvbG9yMi5kZWZhdWx0LFxuICAgIGZpbGw6IF9jb2xvcjIuZGVmYXVsdCxcbiAgICBzdHJva2U6IF9jb2xvcjIuZGVmYXVsdCxcblxuICAgIC8vIEJvcmRlciBwcm9wc1xuICAgIGJvcmRlckNvbG9yOiBfY29sb3IyLmRlZmF1bHQsXG4gICAgYm9yZGVyVG9wQ29sb3I6IF9jb2xvcjIuZGVmYXVsdCxcbiAgICBib3JkZXJSaWdodENvbG9yOiBfY29sb3IyLmRlZmF1bHQsXG4gICAgYm9yZGVyQm90dG9tQ29sb3I6IF9jb2xvcjIuZGVmYXVsdCxcbiAgICBib3JkZXJMZWZ0Q29sb3I6IF9jb2xvcjIuZGVmYXVsdCxcbiAgICBib3JkZXJSYWRpdXM6IF9weDIuZGVmYXVsdCxcblxuICAgIC8vIFBvc2l0aW9uaW5nXG4gICAgbWFyZ2luOiBfcG9zaXRpb25zMi5kZWZhdWx0LFxuICAgIHBhZGRpbmc6IF9wb3NpdGlvbnMyLmRlZmF1bHQsXG4gICAgd2lkdGg6IF9weDIuZGVmYXVsdCxcbiAgICBoZWlnaHQ6IF9weDIuZGVmYXVsdCxcblxuICAgIC8vIEF4ZXNcbiAgICBiYWNrZ3JvdW5kUG9zaXRpb246IF9heGVzMi5kZWZhdWx0LFxuICAgIHBlcnNwZWN0aXZlT3JpZ2luOiBfYXhlczIuZGVmYXVsdCxcbiAgICB0cmFuc2Zvcm1PcmlnaW46IF9heGVzMi5kZWZhdWx0LFxuXG4gICAgLy8gU2hhZG93c1xuICAgIHRleHRTaGFkb3c6IF9zaGFkb3cyLmRlZmF1bHQsXG4gICAgYm94U2hhZG93OiBfc2hhZG93Mi5kZWZhdWx0LFxuXG4gICAgLy8gVHJhbnNmb3JtIHByb3BlcnRpZXNcbiAgICByb3RhdGU6IF9hbmdsZTIuZGVmYXVsdCxcbiAgICByb3RhdGVYOiBfYW5nbGUyLmRlZmF1bHQsXG4gICAgcm90YXRlWTogX2FuZ2xlMi5kZWZhdWx0LFxuICAgIHJvdGF0ZVo6IF9hbmdsZTIuZGVmYXVsdCxcbiAgICBzY2FsZTogX3NjYWxlMi5kZWZhdWx0LFxuICAgIHNjYWxlWDogX3NjYWxlMi5kZWZhdWx0LFxuICAgIHNjYWxlWTogX3NjYWxlMi5kZWZhdWx0LFxuICAgIHNjYWxlWjogX3NjYWxlMi5kZWZhdWx0LFxuICAgIHNrZXdYOiBfYW5nbGUyLmRlZmF1bHQsXG4gICAgc2tld1k6IF9hbmdsZTIuZGVmYXVsdCxcbiAgICBkaXN0YW5jZTogX3B4Mi5kZWZhdWx0LFxuICAgIHRyYW5zbGF0ZVg6IF9weDIuZGVmYXVsdCxcbiAgICB0cmFuc2xhdGVZOiBfcHgyLmRlZmF1bHQsXG4gICAgdHJhbnNsYXRlWjogX3B4Mi5kZWZhdWx0LFxuICAgIHBlcnNwZWN0aXZlOiBfcHgyLmRlZmF1bHQsXG4gICAgb3BhY2l0eTogX2FscGhhMi5kZWZhdWx0XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluTnlZeTloWkdGd2RHVnlMMk56Y3k5MllXeDFaUzEwZVhCbExXMWhjQzVxY3lKZExDSnVZVzFsY3lJNlcxMHNJbTFoY0hCcGJtZHpJam9pT3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3p0clFrRlRaVHM3UVVGRldDeFRRVUZMTEdsQ1FVRlBPMEZCUTFvc2JVSkJRV1VzYVVKQlFVODdRVUZEZEVJc1owSkJRVmtzYVVKQlFVODdRVUZEYmtJc1VVRkJTU3hwUWtGQlR6dEJRVU5ZTEZWQlFVMHNhVUpCUVU4N096dEJRVWRpTEdWQlFWY3NhVUpCUVU4N1FVRkRiRUlzYTBKQlFXTXNhVUpCUVU4N1FVRkRja0lzYjBKQlFXZENMR2xDUVVGUE8wRkJRM1pDTEhGQ1FVRnBRaXhwUWtGQlR6dEJRVU40UWl4dFFrRkJaU3hwUWtGQlR6dEJRVU4wUWl4blFrRkJXU3hqUVVGSk96czdRVUZIYUVJc1ZVRkJUU3h4UWtGQlZ6dEJRVU5xUWl4WFFVRlBMSEZDUVVGWE8wRkJRMnhDTEZOQlFVc3NZMEZCU1R0QlFVTlVMRlZCUVUwc1kwRkJTVHM3TzBGQlIxWXNjMEpCUVd0Q0xHZENRVUZOTzBGQlEzaENMSEZDUVVGcFFpeG5Ra0ZCVFR0QlFVTjJRaXh0UWtGQlpTeG5Ra0ZCVFRzN08wRkJSM0pDTEdOQlFWVXNhMEpCUVZFN1FVRkRiRUlzWVVGQlV5eHJRa0ZCVVRzN08wRkJSMnBDTEZWQlFVMHNhVUpCUVU4N1FVRkRZaXhYUVVGUExHbENRVUZQTzBGQlEyUXNWMEZCVHl4cFFrRkJUenRCUVVOa0xGZEJRVThzYVVKQlFVODdRVUZEWkN4VFFVRkxMR2xDUVVGUE8wRkJRMW9zVlVGQlRTeHBRa0ZCVHp0QlFVTmlMRlZCUVUwc2FVSkJRVTg3UVVGRFlpeFZRVUZOTEdsQ1FVRlBPMEZCUTJJc1UwRkJTeXhwUWtGQlR6dEJRVU5hTEZOQlFVc3NhVUpCUVU4N1FVRkRXaXhaUVVGUkxHTkJRVWs3UVVGRFdpeGpRVUZWTEdOQlFVazdRVUZEWkN4alFVRlZMR05CUVVrN1FVRkRaQ3hqUVVGVkxHTkJRVWs3UVVGRFpDeGxRVUZYTEdOQlFVazdRVUZEWml4WFFVRlBMR2xDUVVGUE8wTkJRMnBDSWl3aVptbHNaU0k2SW5aaGJIVmxMWFI1Y0dVdGJXRndMbXB6SWl3aWMyOTFjbU5sVW05dmRDSTZJaTlWYzJWeWN5OU5ZWFIwVUdWeWNua3ZVMmwwWlhNdmNHOXdiVzkwYVc5dUlpd2ljMjkxY21ObGMwTnZiblJsYm5RaU9sc2lhVzF3YjNKMElHRnVaMnhsSUdaeWIyMGdKeTR1THk0dUwzWmhiSFZsTFhSNWNHVnpMMkZ1WjJ4bEp6dGNibWx0Y0c5eWRDQmhiSEJvWVNCbWNtOXRJQ2N1TGk4dUxpOTJZV3gxWlMxMGVYQmxjeTloYkhCb1lTYzdYRzVwYlhCdmNuUWdZWGhsY3lCbWNtOXRJQ2N1TGk4dUxpOTJZV3gxWlMxMGVYQmxjeTloZUdWekp6dGNibWx0Y0c5eWRDQmpiMnh2Y2lCbWNtOXRJQ2N1TGk4dUxpOTJZV3gxWlMxMGVYQmxjeTlqYjJ4dmNpYzdYRzVwYlhCdmNuUWdjMk5oYkdVZ1puSnZiU0FuTGk0dkxpNHZkbUZzZFdVdGRIbHdaWE12YzJOaGJHVW5PMXh1YVcxd2IzSjBJSE5vWVdSdmR5Qm1jbTl0SUNjdUxpOHVMaTkyWVd4MVpTMTBlWEJsY3k5emFHRmtiM2NuTzF4dWFXMXdiM0owSUhCdmMybDBhVzl1Y3lCbWNtOXRJQ2N1TGk4dUxpOTJZV3gxWlMxMGVYQmxjeTl3YjNOcGRHbHZibk1uTzF4dWFXMXdiM0owSUhCNElHWnliMjBnSnk0dUx5NHVMM1poYkhWbExYUjVjR1Z6TDNCNEp6dGNibHh1Wlhod2IzSjBJR1JsWm1GMWJIUWdlMXh1SUNBZ0lDOHZJRU52Ykc5eUlIQnliM0J6WEc0Z0lDQWdZMjlzYjNJNklHTnZiRzl5TEZ4dUlDQWdJR0poWTJ0bmNtOTFibVJEYjJ4dmNqb2dZMjlzYjNJc1hHNGdJQ0FnYjNWMGJHbHVaVU52Ykc5eU9pQmpiMnh2Y2l4Y2JpQWdJQ0JtYVd4c09pQmpiMnh2Y2l4Y2JpQWdJQ0J6ZEhKdmEyVTZJR052Ykc5eUxGeHVYRzRnSUNBZ0x5OGdRbTl5WkdWeUlIQnliM0J6WEc0Z0lDQWdZbTl5WkdWeVEyOXNiM0k2SUdOdmJHOXlMRnh1SUNBZ0lHSnZjbVJsY2xSdmNFTnZiRzl5T2lCamIyeHZjaXhjYmlBZ0lDQmliM0prWlhKU2FXZG9kRU52Ykc5eU9pQmpiMnh2Y2l4Y2JpQWdJQ0JpYjNKa1pYSkNiM1IwYjIxRGIyeHZjam9nWTI5c2IzSXNYRzRnSUNBZ1ltOXlaR1Z5VEdWbWRFTnZiRzl5T2lCamIyeHZjaXhjYmlBZ0lDQmliM0prWlhKU1lXUnBkWE02SUhCNExGeHVYRzRnSUNBZ0x5OGdVRzl6YVhScGIyNXBibWRjYmlBZ0lDQnRZWEpuYVc0NklIQnZjMmwwYVc5dWN5eGNiaUFnSUNCd1lXUmthVzVuT2lCd2IzTnBkR2x2Ym5Nc1hHNGdJQ0FnZDJsa2RHZzZJSEI0TEZ4dUlDQWdJR2hsYVdkb2REb2djSGdzWEc1Y2JpQWdJQ0F2THlCQmVHVnpYRzRnSUNBZ1ltRmphMmR5YjNWdVpGQnZjMmwwYVc5dU9pQmhlR1Z6TEZ4dUlDQWdJSEJsY25Od1pXTjBhWFpsVDNKcFoybHVPaUJoZUdWekxGeHVJQ0FnSUhSeVlXNXpabTl5YlU5eWFXZHBiam9nWVhobGN5eGNibHh1SUNBZ0lDOHZJRk5vWVdSdmQzTmNiaUFnSUNCMFpYaDBVMmhoWkc5M09pQnphR0ZrYjNjc1hHNGdJQ0FnWW05NFUyaGhaRzkzT2lCemFHRmtiM2NzSUNBZ1hHNWNiaUFnSUNBdkx5QlVjbUZ1YzJadmNtMGdjSEp2Y0dWeWRHbGxjMXh1SUNBZ0lISnZkR0YwWlRvZ1lXNW5iR1VzWEc0Z0lDQWdjbTkwWVhSbFdEb2dZVzVuYkdVc1hHNGdJQ0FnY205MFlYUmxXVG9nWVc1bmJHVXNYRzRnSUNBZ2NtOTBZWFJsV2pvZ1lXNW5iR1VzWEc0Z0lDQWdjMk5oYkdVNklITmpZV3hsTEZ4dUlDQWdJSE5qWVd4bFdEb2djMk5oYkdVc1hHNGdJQ0FnYzJOaGJHVlpPaUJ6WTJGc1pTeGNiaUFnSUNCelkyRnNaVm82SUhOallXeGxMRnh1SUNBZ0lITnJaWGRZT2lCaGJtZHNaU3hjYmlBZ0lDQnphMlYzV1RvZ1lXNW5iR1VzWEc0Z0lDQWdaR2x6ZEdGdVkyVTZJSEI0TEZ4dUlDQWdJSFJ5WVc1emJHRjBaVmc2SUhCNExGeHVJQ0FnSUhSeVlXNXpiR0YwWlZrNklIQjRMRnh1SUNBZ0lIUnlZVzV6YkdGMFpWbzZJSEI0TEZ4dUlDQWdJSEJsY25Od1pXTjBhWFpsT2lCd2VDeGNiaUFnSUNCdmNHRmphWFI1T2lCaGJIQm9ZVnh1ZlRzaVhYMD1cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2FkYXB0ZXIvY3NzL3ZhbHVlLXR5cGUtbWFwLmpzXG4gKiogbW9kdWxlIGlkID0gMzZcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbnZhciBUUkFOU0xBVEUgPSAndHJhbnNsYXRlJztcblxuZXhwb3J0cy5kZWZhdWx0ID0ge1xuICAgIHg6IFRSQU5TTEFURSArICdYJyxcbiAgICB5OiBUUkFOU0xBVEUgKyAnWScsXG4gICAgejogVFJBTlNMQVRFICsgJ1onXG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluTnlZeTloWkdGd2RHVnlMMk56Y3k5emRHRjBaUzF0WVhBdWFuTWlYU3dpYm1GdFpYTWlPbHRkTENKdFlYQndhVzVuY3lJNklqczdPMEZCUVVFc1NVRkJUU3hUUVVGVExFZEJRVWNzVjBGQlZ5eERRVUZET3p0clFrRkZaanRCUVVOWUxFdEJRVU1zUlVGQlJTeFRRVUZUTEVkQlFVY3NSMEZCUnp0QlFVTnNRaXhMUVVGRExFVkJRVVVzVTBGQlV5eEhRVUZITEVkQlFVYzdRVUZEYkVJc1MwRkJReXhGUVVGRkxGTkJRVk1zUjBGQlJ5eEhRVUZITzBOQlEzSkNJaXdpWm1sc1pTSTZJbk4wWVhSbExXMWhjQzVxY3lJc0luTnZkWEpqWlZKdmIzUWlPaUl2VlhObGNuTXZUV0YwZEZCbGNuSjVMMU5wZEdWekwzQnZjRzF2ZEdsdmJpSXNJbk52ZFhKalpYTkRiMjUwWlc1MElqcGJJbU52Ym5OMElGUlNRVTVUVEVGVVJTQTlJQ2QwY21GdWMyeGhkR1VuTzF4dVhHNWxlSEJ2Y25RZ1pHVm1ZWFZzZENCN1hHNGdJQ0FnZURvZ1ZGSkJUbE5NUVZSRklDc2dKMWduTEZ4dUlDQWdJSGs2SUZSU1FVNVRURUZVUlNBcklDZFpKeXhjYmlBZ0lDQjZPaUJVVWtGT1UweEJWRVVnS3lBbldpZGNibjA3SWwxOVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvYWRhcHRlci9jc3Mvc3RhdGUtbWFwLmpzXG4gKiogbW9kdWxlIGlkID0gMzdcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbnZhciBjYWNoZSA9IHt9O1xudmFyIHByZWZpeGVzID0gWydXZWJraXQnLCAnTW96JywgJ08nLCAnbXMnLCAnJ107XG52YXIgbnVtUHJlZml4ZXMgPSBwcmVmaXhlcy5sZW5ndGg7XG52YXIgdGVzdEVsZW1lbnQgPSB1bmRlZmluZWQ7XG5cbi8qXG4gICAgVGVzdCBzdHlsZSBwcm9wZXJ0eSBmb3IgcHJlZml4ZWQgdmVyc2lvblxuICAgIFxuICAgIEBwYXJhbSBbc3RyaW5nXTogU3R5bGUgcHJvcGVydHlcbiAgICBAcmV0dXJuIFtzdHJpbmddOiBDYWNoZWQgcHJvcGVydHkgbmFtZVxuKi9cbnZhciB0ZXN0UHJlZml4ID0gZnVuY3Rpb24gKGtleSkge1xuICAgIHRlc3RFbGVtZW50ID0gdGVzdEVsZW1lbnQgfHwgZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICBpZiAoY2FjaGVba2V5XSA9PT0gZmFsc2UpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGNhY2hlW2tleV0gPSBmYWxzZTtcbiAgICB9XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IG51bVByZWZpeGVzOyBpKyspIHtcbiAgICAgICAgdmFyIHByZWZpeCA9IHByZWZpeGVzW2ldLFxuICAgICAgICAgICAgcHJlZml4ZWQgPSBwcmVmaXggPT09ICcnID8ga2V5IDogcHJlZml4ICsga2V5LmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsga2V5LnNsaWNlKDEpO1xuXG4gICAgICAgIGlmIChwcmVmaXhlZCBpbiB0ZXN0RWxlbWVudC5zdHlsZSkge1xuICAgICAgICAgICAgY2FjaGVba2V5XSA9IHByZWZpeGVkO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGNhY2hlW2tleV07XG59O1xuXG5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbiAoa2V5KSB7XG4gICAgcmV0dXJuIGNhY2hlW2tleV0gfHwgdGVzdFByZWZpeChrZXkpO1xufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbk55WXk5aFpHRndkR1Z5TDJOemN5OXdjbVZtYVhobGNpNXFjeUpkTENKdVlXMWxjeUk2VzEwc0ltMWhjSEJwYm1keklqb2lPenM3UVVGQlFTeEpRVUZOTEV0QlFVc3NSMEZCUnl4RlFVRkZMRU5CUVVNN1FVRkRha0lzU1VGQlRTeFJRVUZSTEVkQlFVY3NRMEZCUXl4UlFVRlJMRVZCUVVNc1MwRkJTeXhGUVVGRExFZEJRVWNzUlVGQlF5eEpRVUZKTEVWQlFVVXNSVUZCUlN4RFFVRkRMRU5CUVVNN1FVRkRMME1zU1VGQlRTeFhRVUZYTEVkQlFVY3NVVUZCVVN4RFFVRkRMRTFCUVUwc1EwRkJRenRCUVVOd1F5eEpRVUZKTEZkQlFWY3NXVUZCUVRzN096czdPenM3UVVGQlF5eEJRVkZvUWl4SlFVRk5MRlZCUVZVc1IwRkJSeXhWUVVGRExFZEJRVWNzUlVGQlN6dEJRVU40UWl4bFFVRlhMRWRCUVVjc1YwRkJWeXhKUVVGSkxGRkJRVkVzUTBGQlF5eGhRVUZoTEVOQlFVTXNTMEZCU3l4RFFVRkRMRU5CUVVNN08wRkJSVE5FTEZGQlFVa3NTMEZCU3l4RFFVRkRMRWRCUVVjc1EwRkJReXhMUVVGTExFdEJRVXNzUlVGQlJUdEJRVU4wUWl4bFFVRlBMRXRCUVVzc1EwRkJRenRMUVVOb1FpeE5RVUZOTzBGQlEwZ3NZVUZCU3l4RFFVRkRMRWRCUVVjc1EwRkJReXhIUVVGSExFdEJRVXNzUTBGQlF6dExRVU4wUWpzN1FVRkZSQ3hUUVVGTExFbEJRVWtzUTBGQlF5eEhRVUZITEVOQlFVTXNSVUZCUlN4RFFVRkRMRWRCUVVjc1YwRkJWeXhGUVVGRkxFTkJRVU1zUlVGQlJTeEZRVUZGTzBGQlEyeERMRmxCUVVrc1RVRkJUU3hIUVVGSExGRkJRVkVzUTBGQlF5eERRVUZETEVOQlFVTTdXVUZEY0VJc1VVRkJVU3hIUVVGSExFRkJRVU1zVFVGQlRTeExRVUZMTEVWQlFVVXNSMEZCU1N4SFFVRkhMRWRCUVVjc1RVRkJUU3hIUVVGSExFZEJRVWNzUTBGQlF5eE5RVUZOTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1YwRkJWeXhGUVVGRkxFZEJRVWNzUjBGQlJ5eERRVUZETEV0QlFVc3NRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJRenM3UVVGRk0wWXNXVUZCU1N4UlFVRlJMRWxCUVVrc1YwRkJWeXhEUVVGRExFdEJRVXNzUlVGQlJUdEJRVU12UWl4cFFrRkJTeXhEUVVGRExFZEJRVWNzUTBGQlF5eEhRVUZITEZGQlFWRXNRMEZCUXp0VFFVTjZRanRMUVVOS096dEJRVVZFTEZkQlFVOHNTMEZCU3l4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRE8wTkJRM0pDTEVOQlFVTTdPMnRDUVVWaExGVkJRVU1zUjBGQlJ6dFhRVUZMTEV0QlFVc3NRMEZCUXl4SFFVRkhMRU5CUVVNc1NVRkJTU3hWUVVGVkxFTkJRVU1zUjBGQlJ5eERRVUZETzBOQlFVRWlMQ0ptYVd4bElqb2ljSEpsWm1sNFpYSXVhbk1pTENKemIzVnlZMlZTYjI5MElqb2lMMVZ6WlhKekwwMWhkSFJRWlhKeWVTOVRhWFJsY3k5d2IzQnRiM1JwYjI0aUxDSnpiM1Z5WTJWelEyOXVkR1Z1ZENJNld5SmpiMjV6ZENCallXTm9aU0E5SUh0OU8xeHVZMjl1YzNRZ2NISmxabWw0WlhNZ1BTQmJKMWRsWW10cGRDY3NKMDF2ZWljc0owOG5MQ2R0Y3ljc0lDY25YVHRjYm1OdmJuTjBJRzUxYlZCeVpXWnBlR1Z6SUQwZ2NISmxabWw0WlhNdWJHVnVaM1JvTzF4dWJHVjBJSFJsYzNSRmJHVnRaVzUwTzF4dVhHNHZLbHh1SUNBZ0lGUmxjM1FnYzNSNWJHVWdjSEp2Y0dWeWRIa2dabTl5SUhCeVpXWnBlR1ZrSUhabGNuTnBiMjVjYmlBZ0lDQmNiaUFnSUNCQWNHRnlZVzBnVzNOMGNtbHVaMTA2SUZOMGVXeGxJSEJ5YjNCbGNuUjVYRzRnSUNBZ1FISmxkSFZ5YmlCYmMzUnlhVzVuWFRvZ1EyRmphR1ZrSUhCeWIzQmxjblI1SUc1aGJXVmNiaW92WEc1amIyNXpkQ0IwWlhOMFVISmxabWw0SUQwZ0tHdGxlU2tnUFQ0Z2UxeHVJQ0FnSUhSbGMzUkZiR1Z0Wlc1MElEMGdkR1Z6ZEVWc1pXMWxiblFnZkh3Z1pHOWpkVzFsYm5RdVkzSmxZWFJsUld4bGJXVnVkQ2duWkdsMkp5azdYRzVjYmlBZ0lDQnBaaUFvWTJGamFHVmJhMlY1WFNBOVBUMGdabUZzYzJVcElIdGNiaUFnSUNBZ0lDQWdjbVYwZFhKdUlHWmhiSE5sTzF4dUlDQWdJSDBnWld4elpTQjdYRzRnSUNBZ0lDQWdJR05oWTJobFcydGxlVjBnUFNCbVlXeHpaVHRjYmlBZ0lDQjlYRzVjYmlBZ0lDQm1iM0lnS0haaGNpQnBJRDBnTURzZ2FTQThJRzUxYlZCeVpXWnBlR1Z6T3lCcEt5c3BJSHRjYmlBZ0lDQWdJQ0FnZG1GeUlIQnlaV1pwZUNBOUlIQnlaV1pwZUdWelcybGRMRnh1SUNBZ0lDQWdJQ0FnSUNBZ2NISmxabWw0WldRZ1BTQW9jSEpsWm1sNElEMDlQU0FuSnlrZ1B5QnJaWGtnT2lCd2NtVm1hWGdnS3lCclpYa3VZMmhoY2tGMEtEQXBMblJ2VlhCd1pYSkRZWE5sS0NrZ0t5QnJaWGt1YzJ4cFkyVW9NU2s3WEc1Y2JpQWdJQ0FnSUNBZ2FXWWdLSEJ5WldacGVHVmtJR2x1SUhSbGMzUkZiR1Z0Wlc1MExuTjBlV3hsS1NCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0JqWVdOb1pWdHJaWGxkSUQwZ2NISmxabWw0WldRN1hHNGdJQ0FnSUNBZ0lIMWNiaUFnSUNCOVhHNGdJQ0FnWEc0Z0lDQWdjbVYwZFhKdUlHTmhZMmhsVzJ0bGVWMDdYRzU5TzF4dVhHNWxlSEJ2Y25RZ1pHVm1ZWFZzZENBb2EyVjVLU0E5UGlCallXTm9aVnRyWlhsZElIeDhJSFJsYzNSUWNtVm1hWGdvYTJWNUtUc2lYWDA9XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9hZGFwdGVyL2Nzcy9wcmVmaXhlci5qc1xuICoqIG1vZHVsZSBpZCA9IDM4XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfdHJhbnNmb3JtUHJvcHMgPSByZXF1aXJlKCcuL3RyYW5zZm9ybS1wcm9wcycpO1xuXG52YXIgX3RyYW5zZm9ybVByb3BzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3RyYW5zZm9ybVByb3BzKTtcblxudmFyIF9wcmVmaXhlciA9IHJlcXVpcmUoJy4vcHJlZml4ZXInKTtcblxudmFyIF9wcmVmaXhlcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9wcmVmaXhlcik7XG5cbnZhciBfdXRpbHMgPSByZXF1aXJlKCcuLi8uLi9pbmMvdXRpbHMnKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxudmFyIFRSQU5TTEFURV9aID0gJ3RyYW5zbGF0ZVonO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbiAoc3RhdGUsIGRpc2FibGVIYXJkd2FyZUFjY2VsZXJhdGlvbikge1xuICAgIHZhciBwcm9wZXJ0eVN0cmluZyA9ICcnO1xuICAgIHZhciB0cmFuc2Zvcm1TdHJpbmcgPSAnJztcbiAgICB2YXIgdHJhbnNmb3JtSGFzWiA9IGZhbHNlO1xuXG4gICAgZm9yICh2YXIga2V5IGluIHN0YXRlKSB7XG4gICAgICAgIGlmIChzdGF0ZS5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgICB2YXIgdmFsdWUgPSBzdGF0ZVtrZXldO1xuXG4gICAgICAgICAgICBpZiAoX3RyYW5zZm9ybVByb3BzMi5kZWZhdWx0W2tleV0pIHtcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm1TdHJpbmcgKz0ga2V5ICsgJygnICsgdmFsdWUgKyAnKSAnO1xuICAgICAgICAgICAgICAgIHRyYW5zZm9ybUhhc1ogPSBrZXkgPT09IFRSQU5TTEFURV9aID8gdHJ1ZSA6IHRyYW5zZm9ybUhhc1o7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHByb3BlcnR5U3RyaW5nICs9ICc7JyArICgwLCBfcHJlZml4ZXIyLmRlZmF1bHQpKCgwLCBfdXRpbHMuY2FtZWxUb0Rhc2gpKGtleSkpICsgJzonICsgdmFsdWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodHJhbnNmb3JtU3RyaW5nICE9PSAnJykge1xuICAgICAgICBpZiAoIXRyYW5zZm9ybUhhc1ogJiYgIWRpc2FibGVIYXJkd2FyZUFjY2VsZXJhdGlvbikge1xuICAgICAgICAgICAgdHJhbnNmb3JtU3RyaW5nICs9IFRSQU5TTEFURV9aICsgJygwcHgpJztcbiAgICAgICAgfVxuXG4gICAgICAgIHByb3BlcnR5U3RyaW5nICs9ICc7JyArICgwLCBfcHJlZml4ZXIyLmRlZmF1bHQpKCd0cmFuc2Zvcm0nKSArICc6JyArIHRyYW5zZm9ybVN0cmluZztcbiAgICB9XG5cbiAgICByZXR1cm4gcHJvcGVydHlTdHJpbmc7XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluTnlZeTloWkdGd2RHVnlMMk56Y3k5aWRXbHNaQzVxY3lKZExDSnVZVzFsY3lJNlcxMHNJbTFoY0hCcGJtZHpJam9pT3pzN096czdPenM3T3pzN096czdPMEZCU1VFc1NVRkJUU3hYUVVGWExFZEJRVWNzV1VGQldTeERRVUZET3p0clFrRkZiRUlzVlVGQlF5eExRVUZMTEVWQlFVVXNNa0pCUVRKQ0xFVkJRVXM3UVVGRGJrUXNVVUZCU1N4alFVRmpMRWRCUVVjc1JVRkJSU3hEUVVGRE8wRkJRM2hDTEZGQlFVa3NaVUZCWlN4SFFVRkhMRVZCUVVVc1EwRkJRenRCUVVONlFpeFJRVUZKTEdGQlFXRXNSMEZCUnl4TFFVRkxMRU5CUVVNN08wRkJSVEZDTEZOQlFVc3NTVUZCU1N4SFFVRkhMRWxCUVVrc1MwRkJTeXhGUVVGRk8wRkJRMjVDTEZsQlFVa3NTMEZCU3l4RFFVRkRMR05CUVdNc1EwRkJReXhIUVVGSExFTkJRVU1zUlVGQlJUdEJRVU16UWl4blFrRkJUU3hMUVVGTExFZEJRVWNzUzBGQlN5eERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRPenRCUVVWNlFpeG5Ra0ZCU1N4NVFrRkJaU3hIUVVGSExFTkJRVU1zUlVGQlJUdEJRVU55UWl3clFrRkJaU3hKUVVGSkxFZEJRVWNzUjBGQlJ5eEhRVUZITEVkQlFVY3NTMEZCU3l4SFFVRkhMRWxCUVVrc1EwRkJRenRCUVVNMVF5dzJRa0ZCWVN4SFFVRkhMRUZCUVVNc1IwRkJSeXhMUVVGTExGZEJRVmNzUjBGQlNTeEpRVUZKTEVkQlFVY3NZVUZCWVN4RFFVRkRPMkZCUldoRkxFMUJRVTA3UVVGRFNDdzRRa0ZCWXl4SlFVRkpMRWRCUVVjc1IwRkJSeXgzUWtGQlV5eFhRV3hDZUVNc1YwRkJWeXhGUVd0Q2VVTXNSMEZCUnl4RFFVRkRMRU5CUVVNc1IwRkJSeXhIUVVGSExFZEJRVWNzUzBGQlN5eERRVUZETzJGQlEzQkZPMU5CUTBvN1MwRkRTanM3UVVGRlJDeFJRVUZKTEdWQlFXVXNTMEZCU3l4RlFVRkZMRVZCUVVVN1FVRkRlRUlzV1VGQlNTeERRVUZETEdGQlFXRXNTVUZCU1N4RFFVRkRMREpDUVVFeVFpeEZRVUZGTzBGQlEyaEVMREpDUVVGbExFbEJRVWtzVjBGQlZ5eEhRVUZITEU5QlFVOHNRMEZCUXp0VFFVTTFRenM3UVVGRlJDeHpRa0ZCWXl4SlFVRkpMRWRCUVVjc1IwRkJSeXgzUWtGQlV5eFhRVUZYTEVOQlFVTXNSMEZCUnl4SFFVRkhMRWRCUVVjc1pVRkJaU3hEUVVGRE8wdEJRM3BGT3p0QlFVVkVMRmRCUVU4c1kwRkJZeXhEUVVGRE8wTkJRM3BDSWl3aVptbHNaU0k2SW1KMWFXeGtMbXB6SWl3aWMyOTFjbU5sVW05dmRDSTZJaTlWYzJWeWN5OU5ZWFIwVUdWeWNua3ZVMmwwWlhNdmNHOXdiVzkwYVc5dUlpd2ljMjkxY21ObGMwTnZiblJsYm5RaU9sc2lhVzF3YjNKMElIUnlZVzV6Wm05eWJWQnliM0J6SUdaeWIyMGdKeTR2ZEhKaGJuTm1iM0p0TFhCeWIzQnpKenRjYm1sdGNHOXlkQ0J3Y21WbWFYaGxjaUJtY205dElDY3VMM0J5WldacGVHVnlKenRjYm1sdGNHOXlkQ0I3SUdOaGJXVnNWRzlFWVhOb0lIMGdabkp2YlNBbkxpNHZMaTR2YVc1akwzVjBhV3h6Snp0Y2JseHVZMjl1YzNRZ1ZGSkJUbE5NUVZSRlgxb2dQU0FuZEhKaGJuTnNZWFJsV2ljN1hHNWNibVY0Y0c5eWRDQmtaV1poZFd4MElDaHpkR0YwWlN3Z1pHbHpZV0pzWlVoaGNtUjNZWEpsUVdOalpXeGxjbUYwYVc5dUtTQTlQaUI3WEc0Z0lDQWdiR1YwSUhCeWIzQmxjblI1VTNSeWFXNW5JRDBnSnljN1hHNGdJQ0FnYkdWMElIUnlZVzV6Wm05eWJWTjBjbWx1WnlBOUlDY25PMXh1SUNBZ0lHeGxkQ0IwY21GdWMyWnZjbTFJWVhOYUlEMGdabUZzYzJVN1hHNWNiaUFnSUNCbWIzSWdLR3hsZENCclpYa2dhVzRnYzNSaGRHVXBJSHRjYmlBZ0lDQWdJQ0FnYVdZZ0tITjBZWFJsTG1oaGMwOTNibEJ5YjNCbGNuUjVLR3RsZVNrcElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUdOdmJuTjBJSFpoYkhWbElEMGdjM1JoZEdWYmEyVjVYVHRjYmx4dUlDQWdJQ0FnSUNBZ0lDQWdhV1lnS0hSeVlXNXpabTl5YlZCeWIzQnpXMnRsZVYwcElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQjBjbUZ1YzJadmNtMVRkSEpwYm1jZ0t6MGdhMlY1SUNzZ0p5Z25JQ3NnZG1Gc2RXVWdLeUFuS1NBbk8xeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lIUnlZVzV6Wm05eWJVaGhjMW9nUFNBb2EyVjVJRDA5UFNCVVVrRk9VMHhCVkVWZldpa2dQeUIwY25WbElEb2dkSEpoYm5ObWIzSnRTR0Z6V2p0Y2JseHVJQ0FnSUNBZ0lDQWdJQ0FnZlNCbGJITmxJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0J3Y205d1pYSjBlVk4wY21sdVp5QXJQU0FuT3ljZ0t5QndjbVZtYVhobGNpaGpZVzFsYkZSdlJHRnphQ2hyWlhrcEtTQXJJQ2M2SnlBcklIWmhiSFZsTzF4dUlDQWdJQ0FnSUNBZ0lDQWdmVnh1SUNBZ0lDQWdJQ0I5WEc0Z0lDQWdmVnh1WEc0Z0lDQWdhV1lnS0hSeVlXNXpabTl5YlZOMGNtbHVaeUFoUFQwZ0p5Y3BJSHRjYmlBZ0lDQWdJQ0FnYVdZZ0tDRjBjbUZ1YzJadmNtMUlZWE5hSUNZbUlDRmthWE5oWW14bFNHRnlaSGRoY21WQlkyTmxiR1Z5WVhScGIyNHBJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lIUnlZVzV6Wm05eWJWTjBjbWx1WnlBclBTQlVVa0ZPVTB4QlZFVmZXaUFySUNjb01IQjRLU2M3WEc0Z0lDQWdJQ0FnSUgxY2JseHVJQ0FnSUNBZ0lDQndjbTl3WlhKMGVWTjBjbWx1WnlBclBTQW5PeWNnS3lCd2NtVm1hWGhsY2lnbmRISmhibk5tYjNKdEp5a2dLeUFuT2ljZ0t5QjBjbUZ1YzJadmNtMVRkSEpwYm1jN1hHNGdJQ0FnZlZ4dVhHNGdJQ0FnY21WMGRYSnVJSEJ5YjNCbGNuUjVVM1J5YVc1bk8xeHVmVHNpWFgwPVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvYWRhcHRlci9jc3MvYnVpbGQuanNcbiAqKiBtb2R1bGUgaWQgPSAzOVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX2RpY3Rpb25hcnkgPSByZXF1aXJlKCcuLi8uLi92YWx1ZS10eXBlcy9zZXR0aW5ncy9kaWN0aW9uYXJ5Jyk7XG5cbnZhciB0cmFuc2Zvcm1Qcm9wcyA9IHt9O1xuXG52YXIgU0NBTEUgPSAnc2NhbGUnO1xudmFyIFJPVEFURSA9ICdyb3RhdGUnO1xudmFyIFRSQU5TRk9STV9QRVJTUEVDVElWRSA9ICd0cmFuc2Zvcm1QZXJzcGVjdGl2ZSc7XG52YXIgVEVSTVMgPSBbJ3RyYW5zbGF0ZScsIFNDQUxFLCBST1RBVEUsICdza2V3JywgVFJBTlNGT1JNX1BFUlNQRUNUSVZFXTtcblxudHJhbnNmb3JtUHJvcHNbUk9UQVRFXSA9IHRyYW5zZm9ybVByb3BzW1NDQUxFXSA9IHRyYW5zZm9ybVByb3BzW1RSQU5TRk9STV9QRVJTUEVDVElWRV0gPSB0cnVlO1xuXG5URVJNUy5mb3JFYWNoKGZ1bmN0aW9uICh0ZXJtKSB7XG4gIHJldHVybiBfZGljdGlvbmFyeS5heGVzLmZvckVhY2goZnVuY3Rpb24gKGF4aXMpIHtcbiAgICByZXR1cm4gdHJhbnNmb3JtUHJvcHNbdGVybSArIGF4aXNdID0gdHJ1ZTtcbiAgfSk7XG59KTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gdHJhbnNmb3JtUHJvcHM7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5OeVl5OWhaR0Z3ZEdWeUwyTnpjeTkwY21GdWMyWnZjbTB0Y0hKdmNITXVhbk1pWFN3aWJtRnRaWE1pT2x0ZExDSnRZWEJ3YVc1bmN5STZJanM3T3pzN08wRkJSVUVzU1VGQlNTeGpRVUZqTEVkQlFVY3NSVUZCUlN4RFFVRkRPenRCUVVWNFFpeEpRVUZOTEV0QlFVc3NSMEZCUnl4UFFVRlBMRU5CUVVNN1FVRkRkRUlzU1VGQlRTeE5RVUZOTEVkQlFVY3NVVUZCVVN4RFFVRkRPMEZCUTNoQ0xFbEJRVTBzY1VKQlFYRkNMRWRCUVVjc2MwSkJRWE5DTEVOQlFVTTdRVUZEY2tRc1NVRkJUU3hMUVVGTExFZEJRVWNzUTBGQlF5eFhRVUZYTEVWQlFVVXNTMEZCU3l4RlFVRkZMRTFCUVUwc1JVRkJSU3hOUVVGTkxFVkJRVVVzY1VKQlFYRkNMRU5CUVVNc1EwRkJRenM3UVVGRk1VVXNZMEZCWXl4RFFVRkRMRTFCUVUwc1EwRkJReXhIUVVGSExHTkJRV01zUTBGQlF5eExRVUZMTEVOQlFVTXNSMEZCUnl4alFVRmpMRU5CUVVNc2NVSkJRWEZDTEVOQlFVTXNSMEZCUnl4SlFVRkpMRU5CUVVNN08wRkJSVGxHTEV0QlFVc3NRMEZCUXl4UFFVRlBMRU5CUVVNc1ZVRkJReXhKUVVGSk8xTkJRVXNzV1VGWVppeEpRVUZKTEVOQlYyZENMRTlCUVU4c1EwRkJReXhWUVVGRExFbEJRVWs3VjBGQlN5eGpRVUZqTEVOQlFVTXNTVUZCU1N4SFFVRkhMRWxCUVVrc1EwRkJReXhIUVVGSExFbEJRVWs3UjBGQlFTeERRVUZETzBOQlFVRXNRMEZCUXl4RFFVRkRPenRyUWtGRmNrVXNZMEZCWXlJc0ltWnBiR1VpT2lKMGNtRnVjMlp2Y20wdGNISnZjSE11YW5NaUxDSnpiM1Z5WTJWU2IyOTBJam9pTDFWelpYSnpMMDFoZEhSUVpYSnllUzlUYVhSbGN5OXdiM0J0YjNScGIyNGlMQ0p6YjNWeVkyVnpRMjl1ZEdWdWRDSTZXeUpwYlhCdmNuUWdleUJoZUdWeklIMGdabkp2YlNBbkxpNHZMaTR2ZG1Gc2RXVXRkSGx3WlhNdmMyVjBkR2x1WjNNdlpHbGpkR2x2Ym1GeWVTYzdYRzVjYm14bGRDQjBjbUZ1YzJadmNtMVFjbTl3Y3lBOUlIdDlPMXh1WEc1amIyNXpkQ0JUUTBGTVJTQTlJQ2R6WTJGc1pTYzdYRzVqYjI1emRDQlNUMVJCVkVVZ1BTQW5jbTkwWVhSbEp6dGNibU52Ym5OMElGUlNRVTVUUms5U1RWOVFSVkpUVUVWRFZFbFdSU0E5SUNkMGNtRnVjMlp2Y20xUVpYSnpjR1ZqZEdsMlpTYzdYRzVqYjI1emRDQlVSVkpOVXlBOUlGc25kSEpoYm5Oc1lYUmxKeXdnVTBOQlRFVXNJRkpQVkVGVVJTd2dKM05yWlhjbkxDQlVVa0ZPVTBaUFVrMWZVRVZTVTFCRlExUkpWa1ZkTzF4dVhHNTBjbUZ1YzJadmNtMVFjbTl3YzF0U1QxUkJWRVZkSUQwZ2RISmhibk5tYjNKdFVISnZjSE5iVTBOQlRFVmRJRDBnZEhKaGJuTm1iM0p0VUhKdmNITmJWRkpCVGxOR1QxSk5YMUJGVWxOUVJVTlVTVlpGWFNBOUlIUnlkV1U3WEc1Y2JsUkZVazFUTG1admNrVmhZMmdvS0hSbGNtMHBJRDArSUdGNFpYTXVabTl5UldGamFDZ29ZWGhwY3lrZ1BUNGdkSEpoYm5ObWIzSnRVSEp2Y0hOYmRHVnliU0FySUdGNGFYTmRJRDBnZEhKMVpTa3BPMXh1WEc1bGVIQnZjblFnWkdWbVlYVnNkQ0IwY21GdWMyWnZjbTFRY205d2N6c2lYWDA9XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9hZGFwdGVyL2Nzcy90cmFuc2Zvcm0tcHJvcHMuanNcbiAqKiBtb2R1bGUgaWQgPSA0MFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0cy5kZWZhdWx0ID0gYnVpbGQ7XG5cbnZhciBfdXRpbHMgPSByZXF1aXJlKCcuLi8uLi9pbmMvdXRpbHMnKTtcblxudmFyIF90cmFuc2Zvcm1Qcm9wcyA9IHJlcXVpcmUoJy4uL2Nzcy90cmFuc2Zvcm0tcHJvcHMnKTtcblxudmFyIF90cmFuc2Zvcm1Qcm9wczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF90cmFuc2Zvcm1Qcm9wcyk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbnZhciBaRVJPX05PVF9aRVJPID0gMC4wMDAxO1xuXG5mdW5jdGlvbiBidWlsZChzdGF0ZSwgb3JpZ2luKSB7XG4gICAgdmFyIHByb3BzID0ge30sXG4gICAgICAgIGhhc1RyYW5zZm9ybSA9IGZhbHNlLFxuICAgICAgICBzY2FsZSA9IHN0YXRlLnNjYWxlICE9PSB1bmRlZmluZWQgPyBzdGF0ZS5zY2FsZSB8fCBaRVJPX05PVF9aRVJPIDogc3RhdGUuc2NhbGVYIHx8IDEsXG4gICAgICAgIHNjYWxlWSA9IHN0YXRlLnNjYWxlWSAhPT0gdW5kZWZpbmVkID8gc3RhdGUuc2NhbGVZIHx8IFpFUk9fTk9UX1pFUk8gOiBzY2FsZSB8fCAxLFxuICAgICAgICB0cmFuc2Zvcm1PcmlnaW5YID0gb3JpZ2luLngsXG4gICAgICAgIHRyYW5zZm9ybU9yaWdpblkgPSBvcmlnaW4ueSxcbiAgICAgICAgc2NhbGVUcmFuc2Zvcm1YID0gLXRyYW5zZm9ybU9yaWdpblggKiAoc2NhbGUgKiAxKSxcbiAgICAgICAgc2NhbGVUcmFuc2Zvcm1ZID0gLXRyYW5zZm9ybU9yaWdpblkgKiAoc2NhbGVZICogMSksXG4gICAgICAgIHNjYWxlUmVwbGFjZVggPSB0cmFuc2Zvcm1PcmlnaW5YIC8gc2NhbGUsXG4gICAgICAgIHNjYWxlUmVwbGFjZVkgPSB0cmFuc2Zvcm1PcmlnaW5ZIC8gc2NhbGVZLFxuICAgICAgICB0cmFuc2Zvcm0gPSB7XG4gICAgICAgIHRyYW5zbGF0ZTogJ3RyYW5zbGF0ZSgnICsgc3RhdGUudHJhbnNsYXRlWCArICcsICcgKyBzdGF0ZS50cmFuc2xhdGVZICsgJykgJyxcbiAgICAgICAgc2NhbGU6ICd0cmFuc2xhdGUoJyArIHNjYWxlVHJhbnNmb3JtWCArICcsICcgKyBzY2FsZVRyYW5zZm9ybVkgKyAnKSBzY2FsZSgnICsgc2NhbGUgKyAnLCAnICsgc2NhbGVZICsgJykgdHJhbnNsYXRlKCcgKyBzY2FsZVJlcGxhY2VYICsgJywgJyArIHNjYWxlUmVwbGFjZVkgKyAnKSAnLFxuICAgICAgICByb3RhdGU6ICdyb3RhdGUoJyArIHN0YXRlLnJvdGF0ZSArICcsICcgKyB0cmFuc2Zvcm1PcmlnaW5YICsgJywgJyArIHRyYW5zZm9ybU9yaWdpblkgKyAnKSAnLFxuICAgICAgICBza2V3WDogJ3NrZXdYKCcgKyBzdGF0ZS5za2V3WCArICcpICcsXG4gICAgICAgIHNrZXdZOiAnc2tld1koJyArIHN0YXRlLnNrZXdZICsgJykgJ1xuICAgIH07XG5cbiAgICBmb3IgKHZhciBrZXkgaW4gc3RhdGUpIHtcbiAgICAgICAgaWYgKHN0YXRlLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICAgIGlmIChfdHJhbnNmb3JtUHJvcHMyLmRlZmF1bHRba2V5XSkge1xuICAgICAgICAgICAgICAgIGhhc1RyYW5zZm9ybSA9IHRydWU7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHByb3BzWygwLCBfdXRpbHMuY2FtZWxUb0Rhc2gpKGtleSldID0gc3RhdGVba2V5XTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGlmIChoYXNUcmFuc2Zvcm0pIHtcbiAgICAgICAgcHJvcHMudHJhbnNmb3JtID0gJyc7XG5cbiAgICAgICAgZm9yICh2YXIga2V5IGluIHRyYW5zZm9ybSkge1xuICAgICAgICAgICAgaWYgKHRyYW5zZm9ybS5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgICAgICAgdmFyIGRlZmF1bHRWYWx1ZSA9IGtleSA9PT0gJ3NjYWxlJyA/ICcxJyA6ICcwJztcbiAgICAgICAgICAgICAgICBwcm9wcy50cmFuc2Zvcm0gKz0gdHJhbnNmb3JtW2tleV0ucmVwbGFjZSgvdW5kZWZpbmVkL2csIGRlZmF1bHRWYWx1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gcHJvcHM7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5OeVl5OWhaR0Z3ZEdWeUwzTjJaeTlpZFdsc1pDNXFjeUpkTENKdVlXMWxjeUk2VzEwc0ltMWhjSEJwYm1keklqb2lPenM3YTBKQlMzZENMRXRCUVVzN096czdPenM3T3pzN1FVRkdOMElzU1VGQlRTeGhRVUZoTEVkQlFVY3NUVUZCVFN4RFFVRkRPenRCUVVWa0xGTkJRVk1zUzBGQlN5eERRVUZETEV0QlFVc3NSVUZCUlN4TlFVRk5MRVZCUVVVN1FVRkRla01zVVVGQlNTeExRVUZMTEVkQlFVY3NSVUZCUlR0UlFVTldMRmxCUVZrc1IwRkJSeXhMUVVGTE8xRkJRM0JDTEV0QlFVc3NSMEZCUnl4TFFVRkxMRU5CUVVNc1MwRkJTeXhMUVVGTExGTkJRVk1zUjBGQlJ5eExRVUZMTEVOQlFVTXNTMEZCU3l4SlFVRkpMR0ZCUVdFc1IwRkJSeXhMUVVGTExFTkJRVU1zVFVGQlRTeEpRVUZKTEVOQlFVTTdVVUZEY0VZc1RVRkJUU3hIUVVGSExFdEJRVXNzUTBGQlF5eE5RVUZOTEV0QlFVc3NVMEZCVXl4SFFVRkhMRXRCUVVzc1EwRkJReXhOUVVGTkxFbEJRVWtzWVVGQllTeEhRVUZITEV0QlFVc3NTVUZCU1N4RFFVRkRPMUZCUTJoR0xHZENRVUZuUWl4SFFVRkhMRTFCUVUwc1EwRkJReXhEUVVGRE8xRkJRek5DTEdkQ1FVRm5RaXhIUVVGSExFMUJRVTBzUTBGQlF5eERRVUZETzFGQlF6TkNMR1ZCUVdVc1IwRkJSeXhEUVVGRkxHZENRVUZuUWl4SlFVRkpMRXRCUVVzc1IwRkJSeXhEUVVGRExFTkJRVUVzUVVGQlF6dFJRVU5zUkN4bFFVRmxMRWRCUVVjc1EwRkJSU3huUWtGQlowSXNTVUZCU1N4TlFVRk5MRWRCUVVjc1EwRkJReXhEUVVGQkxFRkJRVU03VVVGRGJrUXNZVUZCWVN4SFFVRkhMR2RDUVVGblFpeEhRVUZITEV0QlFVczdVVUZEZUVNc1lVRkJZU3hIUVVGSExHZENRVUZuUWl4SFFVRkhMRTFCUVUwN1VVRkRla01zVTBGQlV5eEhRVUZITzBGQlExSXNhVUpCUVZNc2FVSkJRV1VzUzBGQlN5eERRVUZETEZWQlFWVXNWVUZCU3l4TFFVRkxMRU5CUVVNc1ZVRkJWU3hQUVVGSk8wRkJRMnBGTEdGQlFVc3NhVUpCUVdVc1pVRkJaU3hWUVVGTExHVkJRV1VzWjBKQlFWY3NTMEZCU3l4VlFVRkxMRTFCUVUwc2IwSkJRV1VzWVVGQllTeFZRVUZMTEdGQlFXRXNUMEZCU1R0QlFVTndTU3hqUVVGTkxHTkJRVmtzUzBGQlN5eERRVUZETEUxQlFVMHNWVUZCU3l4blFrRkJaMElzVlVGQlN5eG5Ra0ZCWjBJc1QwRkJTVHRCUVVNMVJTeGhRVUZMTEdGQlFWY3NTMEZCU3l4RFFVRkRMRXRCUVVzc1QwRkJTVHRCUVVNdlFpeGhRVUZMTEdGQlFWY3NTMEZCU3l4RFFVRkRMRXRCUVVzc1QwRkJTVHRMUVVOc1F5eERRVUZET3p0QlFVVk9MRk5CUVVzc1NVRkJTU3hIUVVGSExFbEJRVWtzUzBGQlN5eEZRVUZGTzBGQlEyNUNMRmxCUVVrc1MwRkJTeXhEUVVGRExHTkJRV01zUTBGQlF5eEhRVUZITEVOQlFVTXNSVUZCUlR0QlFVTXpRaXhuUWtGQlNTeDVRa0ZCWlN4SFFVRkhMRU5CUVVNc1JVRkJSVHRCUVVOeVFpdzBRa0ZCV1N4SFFVRkhMRWxCUVVrc1EwRkJRenRoUVVOMlFpeE5RVUZOTzBGQlEwZ3NjVUpCUVVzc1EwRkJReXhYUVRkQ1lpeFhRVUZYTEVWQk5rSmpMRWRCUVVjc1EwRkJReXhEUVVGRExFZEJRVWNzUzBGQlN5eERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRPMkZCUTNoRE8xTkJRMG83UzBGRFNqczdRVUZGUkN4UlFVRkpMRmxCUVZrc1JVRkJSVHRCUVVOa0xHRkJRVXNzUTBGQlF5eFRRVUZUTEVkQlFVY3NSVUZCUlN4RFFVRkRPenRCUVVWeVFpeGhRVUZMTEVsQlFVa3NSMEZCUnl4SlFVRkpMRk5CUVZNc1JVRkJSVHRCUVVOMlFpeG5Ra0ZCU1N4VFFVRlRMRU5CUVVNc1kwRkJZeXhEUVVGRExFZEJRVWNzUTBGQlF5eEZRVUZGTzBGQlF5OUNMRzlDUVVGTkxGbEJRVmtzUjBGQlJ5eEJRVUZETEVkQlFVY3NTMEZCU3l4UFFVRlBMRWRCUVVrc1IwRkJSeXhIUVVGSExFZEJRVWNzUTBGQlF6dEJRVU51UkN4eFFrRkJTeXhEUVVGRExGTkJRVk1zU1VGQlNTeFRRVUZUTEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNc1QwRkJUeXhEUVVGRExGbEJRVmtzUlVGQlJTeFpRVUZaTEVOQlFVTXNRMEZCUXp0aFFVTjZSVHRUUVVOS08wdEJRMG83TzBGQlJVUXNWMEZCVHl4TFFVRkxMRU5CUVVNN1EwRkRhRUlpTENKbWFXeGxJam9pWW5WcGJHUXVhbk1pTENKemIzVnlZMlZTYjI5MElqb2lMMVZ6WlhKekwwMWhkSFJRWlhKeWVTOVRhWFJsY3k5d2IzQnRiM1JwYjI0aUxDSnpiM1Z5WTJWelEyOXVkR1Z1ZENJNld5SnBiWEJ2Y25RZ2V5QmpZVzFsYkZSdlJHRnphQ0I5SUdaeWIyMGdKeTR1THk0dUwybHVZeTkxZEdsc2N5YzdYRzVwYlhCdmNuUWdkSEpoYm5ObWIzSnRVSEp2Y0hNZ1puSnZiU0FuTGk0dlkzTnpMM1J5WVc1elptOXliUzF3Y205d2N5YzdYRzVjYm1OdmJuTjBJRnBGVWs5ZlRrOVVYMXBGVWs4Z1BTQXdMakF3TURFN1hHNWNibVY0Y0c5eWRDQmtaV1poZFd4MElHWjFibU4wYVc5dUlHSjFhV3hrS0hOMFlYUmxMQ0J2Y21sbmFXNHBJSHRjYmlBZ0lDQnNaWFFnY0hKdmNITWdQU0I3ZlN4Y2JpQWdJQ0FnSUNBZ2FHRnpWSEpoYm5ObWIzSnRJRDBnWm1Gc2MyVXNYRzRnSUNBZ0lDQWdJSE5qWVd4bElEMGdjM1JoZEdVdWMyTmhiR1VnSVQwOUlIVnVaR1ZtYVc1bFpDQS9JSE4wWVhSbExuTmpZV3hsSUh4OElGcEZVazlmVGs5VVgxcEZVazhnT2lCemRHRjBaUzV6WTJGc1pWZ2dmSHdnTVN4Y2JpQWdJQ0FnSUNBZ2MyTmhiR1ZaSUQwZ2MzUmhkR1V1YzJOaGJHVlpJQ0U5UFNCMWJtUmxabWx1WldRZ1B5QnpkR0YwWlM1elkyRnNaVmtnZkh3Z1drVlNUMTlPVDFSZldrVlNUeUE2SUhOallXeGxJSHg4SURFc1hHNGdJQ0FnSUNBZ0lIUnlZVzV6Wm05eWJVOXlhV2RwYmxnZ1BTQnZjbWxuYVc0dWVDeGNiaUFnSUNBZ0lDQWdkSEpoYm5ObWIzSnRUM0pwWjJsdVdTQTlJRzl5YVdkcGJpNTVMRnh1SUNBZ0lDQWdJQ0J6WTJGc1pWUnlZVzV6Wm05eWJWZ2dQU0F0SUhSeVlXNXpabTl5YlU5eWFXZHBibGdnS2lBb2MyTmhiR1VnS2lBeEtTeGNiaUFnSUNBZ0lDQWdjMk5oYkdWVWNtRnVjMlp2Y20xWklEMGdMU0IwY21GdWMyWnZjbTFQY21sbmFXNVpJQ29nS0hOallXeGxXU0FxSURFcExGeHVJQ0FnSUNBZ0lDQnpZMkZzWlZKbGNHeGhZMlZZSUQwZ2RISmhibk5tYjNKdFQzSnBaMmx1V0NBdklITmpZV3hsTEZ4dUlDQWdJQ0FnSUNCelkyRnNaVkpsY0d4aFkyVlpJRDBnZEhKaGJuTm1iM0p0VDNKcFoybHVXU0F2SUhOallXeGxXU3hjYmlBZ0lDQWdJQ0FnZEhKaGJuTm1iM0p0SUQwZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnZEhKaGJuTnNZWFJsT2lCZ2RISmhibk5zWVhSbEtDUjdjM1JoZEdVdWRISmhibk5zWVhSbFdIMHNJQ1I3YzNSaGRHVXVkSEpoYm5Oc1lYUmxXWDBwSUdBc1hHNGdJQ0FnSUNBZ0lDQWdJQ0J6WTJGc1pUb2dZSFJ5WVc1emJHRjBaU2drZTNOallXeGxWSEpoYm5ObWIzSnRXSDBzSUNSN2MyTmhiR1ZVY21GdWMyWnZjbTFaZlNrZ2MyTmhiR1VvSkh0elkyRnNaWDBzSUNSN2MyTmhiR1ZaZlNrZ2RISmhibk5zWVhSbEtDUjdjMk5oYkdWU1pYQnNZV05sV0gwc0lDUjdjMk5oYkdWU1pYQnNZV05sV1gwcElHQXNYRzRnSUNBZ0lDQWdJQ0FnSUNCeWIzUmhkR1U2SUdCeWIzUmhkR1VvSkh0emRHRjBaUzV5YjNSaGRHVjlMQ0FrZTNSeVlXNXpabTl5YlU5eWFXZHBibGg5TENBa2UzUnlZVzV6Wm05eWJVOXlhV2RwYmxsOUtTQmdMRnh1SUNBZ0lDQWdJQ0FnSUNBZ2MydGxkMWc2SUdCemEyVjNXQ2drZTNOMFlYUmxMbk5yWlhkWWZTa2dZQ3hjYmlBZ0lDQWdJQ0FnSUNBZ0lITnJaWGRaT2lCZ2MydGxkMWtvSkh0emRHRjBaUzV6YTJWM1dYMHBJR0JjYmlBZ0lDQWdJQ0FnZlR0Y2JseHVJQ0FnSUdadmNpQW9iR1YwSUd0bGVTQnBiaUJ6ZEdGMFpTa2dlMXh1SUNBZ0lDQWdJQ0JwWmlBb2MzUmhkR1V1YUdGelQzZHVVSEp2Y0dWeWRIa29hMlY1S1NrZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnYVdZZ0tIUnlZVzV6Wm05eWJWQnliM0J6VzJ0bGVWMHBJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0JvWVhOVWNtRnVjMlp2Y20wZ1BTQjBjblZsTzF4dUlDQWdJQ0FnSUNBZ0lDQWdmU0JsYkhObElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQndjbTl3YzF0allXMWxiRlJ2UkdGemFDaHJaWGtwWFNBOUlITjBZWFJsVzJ0bGVWMDdYRzRnSUNBZ0lDQWdJQ0FnSUNCOVhHNGdJQ0FnSUNBZ0lIMWNiaUFnSUNCOVhHNWNiaUFnSUNCcFppQW9hR0Z6VkhKaGJuTm1iM0p0S1NCN1hHNGdJQ0FnSUNBZ0lIQnliM0J6TG5SeVlXNXpabTl5YlNBOUlDY25PMXh1WEc0Z0lDQWdJQ0FnSUdadmNpQW9iR1YwSUd0bGVTQnBiaUIwY21GdWMyWnZjbTBwSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJR2xtSUNoMGNtRnVjMlp2Y20wdWFHRnpUM2R1VUhKdmNHVnlkSGtvYTJWNUtTa2dlMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJR052Ym5OMElHUmxabUYxYkhSV1lXeDFaU0E5SUNoclpYa2dQVDA5SUNkelkyRnNaU2NwSUQ4Z0p6RW5JRG9nSnpBbk8xeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lIQnliM0J6TG5SeVlXNXpabTl5YlNBclBTQjBjbUZ1YzJadmNtMWJhMlY1WFM1eVpYQnNZV05sS0M5MWJtUmxabWx1WldRdlp5d2daR1ZtWVhWc2RGWmhiSFZsS1R0Y2JpQWdJQ0FnSUNBZ0lDQWdJSDFjYmlBZ0lDQWdJQ0FnZlZ4dUlDQWdJSDFjYmx4dUlDQWdJSEpsZEhWeWJpQndjbTl3Y3p0Y2JuMGlYWDA9XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9hZGFwdGVyL3N2Zy9idWlsZC5qc1xuICoqIG1vZHVsZSBpZCA9IDQxXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfYWxwaGEgPSByZXF1aXJlKCcuLi8uLi92YWx1ZS10eXBlcy9hbHBoYScpO1xuXG52YXIgX2FscGhhMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2FscGhhKTtcblxudmFyIF9heGVzID0gcmVxdWlyZSgnLi4vLi4vdmFsdWUtdHlwZXMvYXhlcycpO1xuXG52YXIgX2F4ZXMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfYXhlcyk7XG5cbnZhciBfY29sb3IgPSByZXF1aXJlKCcuLi8uLi92YWx1ZS10eXBlcy9jb2xvcicpO1xuXG52YXIgX2NvbG9yMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NvbG9yKTtcblxudmFyIF9jb21wbGV4ID0gcmVxdWlyZSgnLi4vLi4vdmFsdWUtdHlwZXMvY29tcGxleCcpO1xuXG52YXIgX2NvbXBsZXgyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY29tcGxleCk7XG5cbnZhciBfc2NhbGUgPSByZXF1aXJlKCcuLi8uLi92YWx1ZS10eXBlcy9zY2FsZScpO1xuXG52YXIgX3NjYWxlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3NjYWxlKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZXhwb3J0cy5kZWZhdWx0ID0ge1xuICAgIGZpbGw6IF9jb2xvcjIuZGVmYXVsdCxcbiAgICBzdHJva2U6IF9jb2xvcjIuZGVmYXVsdCxcbiAgICBzY2FsZTogX3NjYWxlMi5kZWZhdWx0LFxuICAgIHNjYWxlWDogX3NjYWxlMi5kZWZhdWx0LFxuICAgIHNjYWxlWTogX3NjYWxlMi5kZWZhdWx0LFxuICAgIHRyYW5zZm9ybU9yaWdpbjogX2F4ZXMyLmRlZmF1bHQsXG4gICAgZDogX2NvbXBsZXgyLmRlZmF1bHQsXG4gICAgb3BhY2l0eTogX2FscGhhMi5kZWZhdWx0LFxuICAgIGZpbGxPcGFjaXR5OiBfYWxwaGEyLmRlZmF1bHQsXG4gICAgc3Ryb2tlT3BhY2l0eTogX2FscGhhMi5kZWZhdWx0XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluTnlZeTloWkdGd2RHVnlMM04yWnk5MllXeDFaUzEwZVhCbExXMWhjQzVxY3lKZExDSnVZVzFsY3lJNlcxMHNJbTFoY0hCcGJtZHpJam9pT3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenRyUWtGTlpUdEJRVU5ZTEZGQlFVa3NhVUpCUVU4N1FVRkRXQ3hWUVVGTkxHbENRVUZQTzBGQlEySXNVMEZCU3l4cFFrRkJUenRCUVVOYUxGVkJRVTBzYVVKQlFVODdRVUZEWWl4VlFVRk5MR2xDUVVGUE8wRkJRMklzYlVKQlFXVXNaMEpCUVUwN1FVRkRja0lzUzBGQlF5eHRRa0ZCVXp0QlFVTldMRmRCUVU4c2FVSkJRVTg3UVVGRFpDeGxRVUZYTEdsQ1FVRlBPMEZCUTJ4Q0xHbENRVUZoTEdsQ1FVRlBPME5CUTNaQ0lpd2labWxzWlNJNkluWmhiSFZsTFhSNWNHVXRiV0Z3TG1weklpd2ljMjkxY21ObFVtOXZkQ0k2SWk5VmMyVnljeTlOWVhSMFVHVnljbmt2VTJsMFpYTXZjRzl3Ylc5MGFXOXVJaXdpYzI5MWNtTmxjME52Ym5SbGJuUWlPbHNpYVcxd2IzSjBJR0ZzY0doaElHWnliMjBnSnk0dUx5NHVMM1poYkhWbExYUjVjR1Z6TDJGc2NHaGhKenRjYm1sdGNHOXlkQ0JoZUdWeklHWnliMjBnSnk0dUx5NHVMM1poYkhWbExYUjVjR1Z6TDJGNFpYTW5PMXh1YVcxd2IzSjBJR052Ykc5eUlHWnliMjBnSnk0dUx5NHVMM1poYkhWbExYUjVjR1Z6TDJOdmJHOXlKenRjYm1sdGNHOXlkQ0JqYjIxd2JHVjRJR1p5YjIwZ0p5NHVMeTR1TDNaaGJIVmxMWFI1Y0dWekwyTnZiWEJzWlhnbk8xeHVhVzF3YjNKMElITmpZV3hsSUdaeWIyMGdKeTR1THk0dUwzWmhiSFZsTFhSNWNHVnpMM05qWVd4bEp6dGNibHh1Wlhod2IzSjBJR1JsWm1GMWJIUWdlMXh1SUNBZ0lHWnBiR3c2SUdOdmJHOXlMRnh1SUNBZ0lITjBjbTlyWlRvZ1kyOXNiM0lzWEc0Z0lDQWdjMk5oYkdVNklITmpZV3hsTEZ4dUlDQWdJSE5qWVd4bFdEb2djMk5oYkdVc1hHNGdJQ0FnYzJOaGJHVlpPaUJ6WTJGc1pTeGNiaUFnSUNCMGNtRnVjMlp2Y20xUGNtbG5hVzQ2SUdGNFpYTXNYRzRnSUNBZ1pEb2dZMjl0Y0d4bGVDeGNiaUFnSUNCdmNHRmphWFI1T2lCaGJIQm9ZU3hjYmlBZ0lDQm1hV3hzVDNCaFkybDBlVG9nWVd4d2FHRXNYRzRnSUNBZ2MzUnliMnRsVDNCaFkybDBlVG9nWVd4d2FHRmNibjA3SWwxOVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvYWRhcHRlci9zdmcvdmFsdWUtdHlwZS1tYXAuanNcbiAqKiBtb2R1bGUgaWQgPSA0MlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9O1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX3N0YXRlTWFwID0gcmVxdWlyZSgnLi4vY3NzL3N0YXRlLW1hcCcpO1xuXG52YXIgX3N0YXRlTWFwMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3N0YXRlTWFwKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxudmFyIFNUUk9LRSA9ICdzdHJva2UtJztcblxuZXhwb3J0cy5kZWZhdWx0ID0gX2V4dGVuZHMoe30sIF9zdGF0ZU1hcDIuZGVmYXVsdCwge1xuICAgIG9wYWNpdHk6IFNUUk9LRSArICdvcGFjaXR5JyxcbiAgICB3aWR0aDogU1RST0tFICsgJ3dpZHRoJyxcbiAgICBtaXRlcmxpbWl0OiBTVFJPS0UgKyAnbWl0ZXJsaW1pdCdcbn0pO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluTnlZeTloWkdGd2RHVnlMM04yWnkxd1lYUm9MM04wWVhSbExXMWhjQzVxY3lKZExDSnVZVzFsY3lJNlcxMHNJbTFoY0hCcGJtZHpJam9pT3pzN096czdPenM3T3pzN1FVRkZRU3hKUVVGTkxFMUJRVTBzUjBGQlJ5eFRRVUZUTEVOQlFVTTdPenRCUVVseVFpeFhRVUZQTEVWQlFVc3NUVUZCVFN4WlFVRlRPMEZCUXpOQ0xGTkJRVXNzUlVGQlN5eE5RVUZOTEZWQlFVODdRVUZEZGtJc1kwRkJWU3hGUVVGTExFMUJRVTBzWlVGQldTSXNJbVpwYkdVaU9pSnpkR0YwWlMxdFlYQXVhbk1pTENKemIzVnlZMlZTYjI5MElqb2lMMVZ6WlhKekwwMWhkSFJRWlhKeWVTOVRhWFJsY3k5d2IzQnRiM1JwYjI0aUxDSnpiM1Z5WTJWelEyOXVkR1Z1ZENJNld5SnBiWEJ2Y25RZ1kzTnpVM1JoZEdWTllYQWdabkp2YlNBbkxpNHZZM056TDNOMFlYUmxMVzFoY0NjN1hHNWNibU52Ym5OMElGTlVVazlMUlNBOUlDZHpkSEp2YTJVdEp6dGNibHh1Wlhod2IzSjBJR1JsWm1GMWJIUWdlMXh1SUNBZ0lDNHVMbU56YzFOMFlYUmxUV0Z3TEZ4dUlDQWdJRzl3WVdOcGRIazZJR0FrZTFOVVVrOUxSWDF2Y0dGamFYUjVZQ3hjYmlBZ0lDQjNhV1IwYURvZ1lDUjdVMVJTVDB0RmZYZHBaSFJvWUN4Y2JpQWdJQ0J0YVhSbGNteHBiV2wwT2lCZ0pIdFRWRkpQUzBWOWJXbDBaWEpzYVcxcGRHQmNibjA3SWwxOVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvYWRhcHRlci9zdmctcGF0aC9zdGF0ZS1tYXAuanNcbiAqKiBtb2R1bGUgaWQgPSA0M1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0cy5kZWZhdWx0ID0gYnVpbGQ7XG4vKlxuICAgIENvbnZlcnQgcGVyY2VudGFnZSB0byBwaXhlbHNcbiAgICBcbiAgICBAcGFyYW0gW251bWJlcl06IFBlcmNlbnRhZ2Ugb2YgdG90YWwgbGVuZ3RoXG4gICAgQHBhcmFtIFtudW1iZXJdOiBUb3RhbCBsZW5ndGhcbiovXG52YXIgcGVyY2VudFRvUGl4ZWxzID0gZnVuY3Rpb24gKHBlcmNlbnQsIGxlbmd0aCkge1xuICAgIHJldHVybiBwYXJzZUZsb2F0KHBlcmNlbnQpIC8gMTAwICogbGVuZ3RoICsgJ3B4Jztcbn07XG5cbmZ1bmN0aW9uIGJ1aWxkKHN0YXRlLCBsZW5ndGgpIHtcbiAgICB2YXIgc3R5bGVzID0ge307XG4gICAgdmFyIGRhc2hBcnJheVN0eWxlcyA9IHtcbiAgICAgICAgbGVuZ3RoOiAwLFxuICAgICAgICBzcGFjaW5nOiBsZW5ndGggKyAncHgnXG4gICAgfTtcbiAgICB2YXIgaGFzRGFzaEFycmF5ID0gZmFsc2U7XG5cbiAgICBmb3IgKHZhciBrZXkgaW4gc3RhdGUpIHtcbiAgICAgICAgaWYgKHN0YXRlLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICAgIHZhciB2YWx1ZSA9IHN0YXRlW2tleV07XG5cbiAgICAgICAgICAgIHN3aXRjaCAoa2V5KSB7XG4gICAgICAgICAgICAgICAgY2FzZSAnbGVuZ3RoJzpcbiAgICAgICAgICAgICAgICBjYXNlICdzcGFjaW5nJzpcbiAgICAgICAgICAgICAgICAgICAgaGFzRGFzaEFycmF5ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgZGFzaEFycmF5U3R5bGVzW2tleV0gPSBwZXJjZW50VG9QaXhlbHModmFsdWUsIGxlbmd0aCk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgJ29mZnNldCc6XG4gICAgICAgICAgICAgICAgICAgIHN0eWxlc1snc3Ryb2tlLWRhc2hvZmZzZXQnXSA9IHBlcmNlbnRUb1BpeGVscygtdmFsdWUsIGxlbmd0aCk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgIHN0eWxlc1trZXldID0gdmFsdWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoaGFzRGFzaEFycmF5KSB7XG4gICAgICAgIHN0eWxlc1snc3Ryb2tlLWRhc2hhcnJheSddID0gZGFzaEFycmF5U3R5bGVzLmxlbmd0aCArICcgJyArIGRhc2hBcnJheVN0eWxlcy5zcGFjaW5nO1xuICAgIH1cblxuICAgIHJldHVybiBzdHlsZXM7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5OeVl5OWhaR0Z3ZEdWeUwzTjJaeTF3WVhSb0wySjFhV3hrTG1weklsMHNJbTVoYldWeklqcGJYU3dpYldGd2NHbHVaM01pT2lJN096dHJRa0ZSZDBJc1MwRkJTenM3T3pzN096dEJRVVkzUWl4SlFVRk5MR1ZCUVdVc1IwRkJSeXhWUVVGRExFOUJRVThzUlVGQlJTeE5RVUZOTzFkQlFVc3NRVUZCUXl4VlFVRlZMRU5CUVVNc1QwRkJUeXhEUVVGRExFZEJRVWNzUjBGQlJ5eEhRVUZKTEUxQlFVMHNSMEZCUnl4SlFVRkpPME5CUVVFc1EwRkJRenM3UVVGRk1VVXNVMEZCVXl4TFFVRkxMRU5CUVVNc1MwRkJTeXhGUVVGRkxFMUJRVTBzUlVGQlJUdEJRVU42UXl4UlFVRk5MRTFCUVUwc1IwRkJSeXhGUVVGRkxFTkJRVU03UVVGRGJFSXNVVUZCVFN4bFFVRmxMRWRCUVVjN1FVRkRjRUlzWTBGQlRTeEZRVUZGTEVOQlFVTTdRVUZEVkN4bFFVRlBMRVZCUVVVc1RVRkJUU3hIUVVGSExFbEJRVWs3UzBGRGVrSXNRMEZCUXp0QlFVTkdMRkZCUVVrc1dVRkJXU3hIUVVGSExFdEJRVXNzUTBGQlF6czdRVUZGZWtJc1UwRkJTeXhKUVVGSkxFZEJRVWNzU1VGQlNTeExRVUZMTEVWQlFVVTdRVUZEYmtJc1dVRkJTU3hMUVVGTExFTkJRVU1zWTBGQll5eERRVUZETEVkQlFVY3NRMEZCUXl4RlFVRkZPMEZCUXpOQ0xHZENRVUZOTEV0QlFVc3NSMEZCUnl4TFFVRkxMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU03TzBGQlJYcENMRzlDUVVGUkxFZEJRVWM3UVVGRFdDeHhRa0ZCU3l4UlFVRlJMRU5CUVVNN1FVRkRaQ3h4UWtGQlN5eFRRVUZUTzBGQlExWXNaME5CUVZrc1IwRkJSeXhKUVVGSkxFTkJRVU03UVVGRGNFSXNiVU5CUVdVc1EwRkJReXhIUVVGSExFTkJRVU1zUjBGQlJ5eGxRVUZsTEVOQlFVTXNTMEZCU3l4RlFVRkZMRTFCUVUwc1EwRkJReXhEUVVGRE8wRkJRM1JFTERCQ1FVRk5PMEZCUVVFc1FVRkRWaXh4UWtGQlN5eFJRVUZSTzBGQlExUXNNRUpCUVUwc1EwRkJReXh0UWtGQmJVSXNRMEZCUXl4SFFVRkhMR1ZCUVdVc1EwRkJReXhEUVVGRExFdEJRVXNzUlVGQlJTeE5RVUZOTEVOQlFVTXNRMEZCUXp0QlFVTTVSQ3d3UWtGQlRUdEJRVUZCTEVGQlExWTdRVUZEU1N3d1FrRkJUU3hEUVVGRExFZEJRVWNzUTBGQlF5eEhRVUZITEV0QlFVc3NRMEZCUXp0QlFVRkJMR0ZCUTNaQ08xTkJRMG83UzBGRFNqczdRVUZGUkN4UlFVRkpMRmxCUVZrc1JVRkJSVHRCUVVOa0xHTkJRVTBzUTBGQlF5eHJRa0ZCYTBJc1EwRkJReXhIUVVGSExHVkJRV1VzUTBGQlF5eE5RVUZOTEVkQlFVY3NSMEZCUnl4SFFVRkhMR1ZCUVdVc1EwRkJReXhQUVVGUExFTkJRVU03UzBGRGRrWTdPMEZCUlVRc1YwRkJUeXhOUVVGTkxFTkJRVU03UTBGRGFrSWlMQ0ptYVd4bElqb2lZblZwYkdRdWFuTWlMQ0p6YjNWeVkyVlNiMjkwSWpvaUwxVnpaWEp6TDAxaGRIUlFaWEp5ZVM5VGFYUmxjeTl3YjNCdGIzUnBiMjRpTENKemIzVnlZMlZ6UTI5dWRHVnVkQ0k2V3lJdktseHVJQ0FnSUVOdmJuWmxjblFnY0dWeVkyVnVkR0ZuWlNCMGJ5QndhWGhsYkhOY2JpQWdJQ0JjYmlBZ0lDQkFjR0Z5WVcwZ1cyNTFiV0psY2wwNklGQmxjbU5sYm5SaFoyVWdiMllnZEc5MFlXd2diR1Z1WjNSb1hHNGdJQ0FnUUhCaGNtRnRJRnR1ZFcxaVpYSmRPaUJVYjNSaGJDQnNaVzVuZEdoY2Jpb3ZYRzVqYjI1emRDQndaWEpqWlc1MFZHOVFhWGhsYkhNZ1BTQW9jR1Z5WTJWdWRDd2diR1Z1WjNSb0tTQTlQaUFvY0dGeWMyVkdiRzloZENod1pYSmpaVzUwS1NBdklERXdNQ2tnS2lCc1pXNW5kR2dnS3lBbmNIZ25PMXh1WEc1bGVIQnZjblFnWkdWbVlYVnNkQ0JtZFc1amRHbHZiaUJpZFdsc1pDaHpkR0YwWlN3Z2JHVnVaM1JvS1NCN1hHNGdJQ0FnWTI5dWMzUWdjM1I1YkdWeklEMGdlMzA3WEc0Z0lDQWdZMjl1YzNRZ1pHRnphRUZ5Y21GNVUzUjViR1Z6SUQwZ2UxeHVJQ0FnSUNBZ0lDQnNaVzVuZEdnNklEQXNYRzRnSUNBZ0lDQWdJSE53WVdOcGJtYzZJR3hsYm1kMGFDQXJJQ2R3ZUNkY2JpQWdJQ0I5TzF4dUlDQWdJR3hsZENCb1lYTkVZWE5vUVhKeVlYa2dQU0JtWVd4elpUdGNibHh1SUNBZ0lHWnZjaUFvYkdWMElHdGxlU0JwYmlCemRHRjBaU2tnZTF4dUlDQWdJQ0FnSUNCcFppQW9jM1JoZEdVdWFHRnpUM2R1VUhKdmNHVnlkSGtvYTJWNUtTa2dlMXh1SUNBZ0lDQWdJQ0FnSUNBZ1kyOXVjM1FnZG1Gc2RXVWdQU0J6ZEdGMFpWdHJaWGxkTzF4dVhHNGdJQ0FnSUNBZ0lDQWdJQ0J6ZDJsMFkyZ2dLR3RsZVNrZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnWTJGelpTQW5iR1Z1WjNSb0p6cGNiaUFnSUNBZ0lDQWdJQ0FnSUdOaGMyVWdKM053WVdOcGJtY25PbHh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJR2hoYzBSaGMyaEJjbkpoZVNBOUlIUnlkV1U3WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnWkdGemFFRnljbUY1VTNSNWJHVnpXMnRsZVYwZ1BTQndaWEpqWlc1MFZHOVFhWGhsYkhNb2RtRnNkV1VzSUd4bGJtZDBhQ2s3WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnWW5KbFlXczdYRzRnSUNBZ0lDQWdJQ0FnSUNCallYTmxJQ2R2Wm1aelpYUW5PbHh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJSE4wZVd4bGMxc25jM1J5YjJ0bExXUmhjMmh2Wm1aelpYUW5YU0E5SUhCbGNtTmxiblJVYjFCcGVHVnNjeWd0ZG1Gc2RXVXNJR3hsYm1kMGFDazdYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdZbkpsWVdzN1hHNGdJQ0FnSUNBZ0lDQWdJQ0JrWldaaGRXeDBPbHh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJSE4wZVd4bGMxdHJaWGxkSUQwZ2RtRnNkV1U3WEc0Z0lDQWdJQ0FnSUNBZ0lDQjlYRzRnSUNBZ0lDQWdJSDFjYmlBZ0lDQjlYRzVjYmlBZ0lDQnBaaUFvYUdGelJHRnphRUZ5Y21GNUtTQjdYRzRnSUNBZ0lDQWdJSE4wZVd4bGMxc25jM1J5YjJ0bExXUmhjMmhoY25KaGVTZGRJRDBnWkdGemFFRnljbUY1VTNSNWJHVnpMbXhsYm1kMGFDQXJJQ2NnSnlBcklHUmhjMmhCY25KaGVWTjBlV3hsY3k1emNHRmphVzVuTzF4dUlDQWdJSDFjYmx4dUlDQWdJSEpsZEhWeWJpQnpkSGxzWlhNN1hHNTlJbDE5XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9hZGFwdGVyL3N2Zy1wYXRoL2J1aWxkLmpzXG4gKiogbW9kdWxlIGlkID0gNDRcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbnZhciBYID0gJ1gnO1xudmFyIFkgPSAnWSc7XG52YXIgQUxQSEEgPSAnQWxwaGEnO1xuXG52YXIgYXhlcyA9IGV4cG9ydHMuYXhlcyA9IFtYLCBZLCAnWiddO1xudmFyIHJnYiA9IGV4cG9ydHMucmdiID0gWydSZWQnLCAnR3JlZW4nLCAnQmx1ZScsIEFMUEhBXTtcbnZhciBoc2wgPSBleHBvcnRzLmhzbCA9IFsnSHVlJywgJ1NhdHVyYXRpb24nLCAnTGlnaHRuZXNzJywgQUxQSEFdO1xudmFyIHBvc2l0aW9ucyA9IGV4cG9ydHMucG9zaXRpb25zID0gWydUb3AnLCAnUmlnaHQnLCAnQm90dG9tJywgJ0xlZnQnXTtcbnZhciBzaGFkb3cgPSBleHBvcnRzLnNoYWRvdyA9IFtYLCBZLCAnUmFkaXVzJywgJ1NwcmVhZCcsICdDb2xvciddO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluTnlZeTkyWVd4MVpTMTBlWEJsY3k5elpYUjBhVzVuY3k5a2FXTjBhVzl1WVhKNUxtcHpJbDBzSW01aGJXVnpJanBiWFN3aWJXRndjR2x1WjNNaU9pSTdPenRCUVVGQkxFbEJRVTBzUTBGQlF5eEhRVUZITEVkQlFVY3NRMEZCUXp0QlFVTmtMRWxCUVUwc1EwRkJReXhIUVVGSExFZEJRVWNzUTBGQlF6dEJRVU5rTEVsQlFVMHNTMEZCU3l4SFFVRkhMRTlCUVU4c1EwRkJRenM3UVVGRlppeEpRVUZOTEVsQlFVa3NWMEZCU2l4SlFVRkpMRWRCUVVjc1EwRkJReXhEUVVGRExFVkJRVVVzUTBGQlF5eEZRVUZGTEVkQlFVY3NRMEZCUXl4RFFVRkRPMEZCUTNwQ0xFbEJRVTBzUjBGQlJ5eFhRVUZJTEVkQlFVY3NSMEZCUnl4RFFVRkRMRXRCUVVzc1JVRkJSU3hQUVVGUExFVkJRVVVzVFVGQlRTeEZRVUZGTEV0QlFVc3NRMEZCUXl4RFFVRkRPMEZCUXpWRExFbEJRVTBzUjBGQlJ5eFhRVUZJTEVkQlFVY3NSMEZCUnl4RFFVRkRMRXRCUVVzc1JVRkJSU3haUVVGWkxFVkJRVVVzVjBGQlZ5eEZRVUZGTEV0QlFVc3NRMEZCUXl4RFFVRkRPMEZCUTNSRUxFbEJRVTBzVTBGQlV5eFhRVUZVTEZOQlFWTXNSMEZCUnl4RFFVRkRMRXRCUVVzc1JVRkJSU3hQUVVGUExFVkJRVVVzVVVGQlVTeEZRVUZGTEUxQlFVMHNRMEZCUXl4RFFVRkRPMEZCUTNKRUxFbEJRVTBzVFVGQlRTeFhRVUZPTEUxQlFVMHNSMEZCUnl4RFFVRkRMRU5CUVVNc1JVRkJSU3hEUVVGRExFVkJRVVVzVVVGQlVTeEZRVUZGTEZGQlFWRXNSVUZCUlN4UFFVRlBMRU5CUVVNc1EwRkJReUlzSW1acGJHVWlPaUprYVdOMGFXOXVZWEo1TG1weklpd2ljMjkxY21ObFVtOXZkQ0k2SWk5VmMyVnljeTlOWVhSMFVHVnljbmt2VTJsMFpYTXZjRzl3Ylc5MGFXOXVJaXdpYzI5MWNtTmxjME52Ym5SbGJuUWlPbHNpWTI5dWMzUWdXQ0E5SUNkWUp6dGNibU52Ym5OMElGa2dQU0FuV1NjN1hHNWpiMjV6ZENCQlRGQklRU0E5SUNkQmJIQm9ZU2M3WEc1Y2JtVjRjRzl5ZENCamIyNXpkQ0JoZUdWeklEMGdXMWdzSUZrc0lDZGFKMTA3WEc1bGVIQnZjblFnWTI5dWMzUWdjbWRpSUQwZ1d5ZFNaV1FuTENBblIzSmxaVzRuTENBblFteDFaU2NzSUVGTVVFaEJYVHRjYm1WNGNHOXlkQ0JqYjI1emRDQm9jMndnUFNCYkowaDFaU2NzSUNkVFlYUjFjbUYwYVc5dUp5d2dKMHhwWjJoMGJtVnpjeWNzSUVGTVVFaEJYVHRjYm1WNGNHOXlkQ0JqYjI1emRDQndiM05wZEdsdmJuTWdQU0JiSjFSdmNDY3NJQ2RTYVdkb2RDY3NJQ2RDYjNSMGIyMG5MQ0FuVEdWbWRDZGRPMXh1Wlhod2IzSjBJR052Ym5OMElITm9ZV1J2ZHlBOUlGdFlMQ0JaTENBblVtRmthWFZ6Snl3Z0oxTndjbVZoWkNjc0lDZERiMnh2Y2lkZE95SmRmUT09XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy92YWx1ZS10eXBlcy9zZXR0aW5ncy9kaWN0aW9uYXJ5LmpzXG4gKiogbW9kdWxlIGlkID0gNDVcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbnZhciByZ2IgPSBleHBvcnRzLnJnYiA9IHtcbiAgICBtaW46IDAsXG4gICAgbWF4OiAyNTUsXG4gICAgcm91bmQ6IHRydWVcbn07XG5cbnZhciBvcGFjaXR5ID0gZXhwb3J0cy5vcGFjaXR5ID0ge1xuICAgIG1pbjogMCxcbiAgICBtYXg6IDFcbn07XG5cbnZhciBwZXJjZW50ID0gZXhwb3J0cy5wZXJjZW50ID0ge1xuICAgIG1pbjogMCxcbiAgICBtYXg6IDEwMCxcbiAgICB1bml0OiAnJSdcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5OeVl5OTJZV3gxWlMxMGVYQmxjeTl6WlhSMGFXNW5jeTlrWldaaGRXeDBMWEJ5YjNCekxtcHpJbDBzSW01aGJXVnpJanBiWFN3aWJXRndjR2x1WjNNaU9pSTdPenRCUVVGUExFbEJRVTBzUjBGQlJ5eFhRVUZJTEVkQlFVY3NSMEZCUnp0QlFVTm1MRTlCUVVjc1JVRkJSU3hEUVVGRE8wRkJRMDRzVDBGQlJ5eEZRVUZGTEVkQlFVYzdRVUZEVWl4VFFVRkxMRVZCUVVVc1NVRkJTVHREUVVOa0xFTkJRVU03TzBGQlJVc3NTVUZCVFN4UFFVRlBMRmRCUVZBc1QwRkJUeXhIUVVGSE8wRkJRMjVDTEU5QlFVY3NSVUZCUlN4RFFVRkRPMEZCUTA0c1QwRkJSeXhGUVVGRkxFTkJRVU03UTBGRFZDeERRVUZET3p0QlFVVkxMRWxCUVUwc1QwRkJUeXhYUVVGUUxFOUJRVThzUjBGQlJ6dEJRVU51UWl4UFFVRkhMRVZCUVVVc1EwRkJRenRCUVVOT0xFOUJRVWNzUlVGQlJTeEhRVUZITzBGQlExSXNVVUZCU1N4RlFVRkZMRWRCUVVjN1EwRkRXaXhEUVVGRElpd2labWxzWlNJNkltUmxabUYxYkhRdGNISnZjSE11YW5NaUxDSnpiM1Z5WTJWU2IyOTBJam9pTDFWelpYSnpMMDFoZEhSUVpYSnllUzlUYVhSbGN5OXdiM0J0YjNScGIyNGlMQ0p6YjNWeVkyVnpRMjl1ZEdWdWRDSTZXeUpsZUhCdmNuUWdZMjl1YzNRZ2NtZGlJRDBnZTF4dUlDQWdJRzFwYmpvZ01DeGNiaUFnSUNCdFlYZzZJREkxTlN4Y2JpQWdJQ0J5YjNWdVpEb2dkSEoxWlZ4dWZUdGNibHh1Wlhod2IzSjBJR052Ym5OMElHOXdZV05wZEhrZ1BTQjdYRzRnSUNBZ2JXbHVPaUF3TEZ4dUlDQWdJRzFoZURvZ01WeHVmVHRjYmx4dVpYaHdiM0owSUdOdmJuTjBJSEJsY21ObGJuUWdQU0I3WEc0Z0lDQWdiV2x1T2lBd0xGeHVJQ0FnSUcxaGVEb2dNVEF3TEZ4dUlDQWdJSFZ1YVhRNklDY2xKMXh1ZlRzaVhYMD1cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL3ZhbHVlLXR5cGVzL3NldHRpbmdzL2RlZmF1bHQtcHJvcHMuanNcbiAqKiBtb2R1bGUgaWQgPSA0NlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzLmRlZmF1bHQgPSBjcmVhdGVFYXNpbmdGdW5jdGlvbjtcbi8qXG4gICAgTWlycm9yIGVhc2luZ1xuICAgIFxuICAgIE1pcnJvcnMgdGhlIHByb3ZpZGVkIGVhc2luZyBmdW5jdGlvbiwgdXNlZCBoZXJlIGZvciBtaXJyb3JpbmcgYW5cbiAgICBlYXNlSW4gaW50byBhbiBlYXNlSW5PdXRcbiAgICBcbiAgICBAcGFyYW0gW251bWJlcl06IFByb2dyZXNzLCBmcm9tIDAgLSAxLCBvZiBjdXJyZW50IHNoaWZ0XG4gICAgQHBhcmFtIFtmdW5jdGlvbl06IFRoZSBlYXNpbmcgZnVuY3Rpb24gdG8gbWlycm9yXG4gICAgQHJldHVybnMgW251bWJlcl06IFRoZSBlYXNpbmctYWRqdXN0ZWQgZGVsdGFcbiovXG52YXIgbWlycm9yRWFzaW5nID0gZnVuY3Rpb24gKG1ldGhvZCkge1xuICAgIHJldHVybiBmdW5jdGlvbiAocHJvZ3Jlc3MsIHN0cmVuZ3RoKSB7XG4gICAgICAgIHJldHVybiBwcm9ncmVzcyA8PSAwLjUgPyBtZXRob2QoMiAqIHByb2dyZXNzLCBzdHJlbmd0aCkgLyAyIDogKDIgLSBtZXRob2QoMiAqICgxIC0gcHJvZ3Jlc3MpLCBzdHJlbmd0aCkpIC8gMjtcbiAgICB9O1xufTtcblxuLypcbiAgICBSZXZlcnNlIGVhc2luZ1xuICAgIFxuICAgIFJldmVyc2VzIHRoZSBvdXRwdXQgb2YgdGhlIHByb3ZpZGVkIGVhc2luZyBmdW5jdGlvbiwgdXNlZCBmb3IgZmxpcHBpbmcgZWFzZUluXG4gICAgY3VydmUgdG8gYW4gZWFzZU91dC5cbiAgICBcbiAgICBAcGFyYW0gW251bWJlcl06IFByb2dyZXNzLCBmcm9tIDAgLSAxLCBvZiBjdXJyZW50IHNoaWZ0XG4gICAgQHBhcmFtIFtmdW5jdGlvbl06IFRoZSBlYXNpbmcgZnVuY3Rpb24gdG8gcmV2ZXJzZVxuICAgIEByZXR1cm5zIFtudW1iZXJdOiBUaGUgZWFzaW5nLWFkanVzdGVkIGRlbHRhXG4qL1xudmFyIHJldmVyc2VFYXNpbmcgPSBmdW5jdGlvbiAobWV0aG9kKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChwcm9ncmVzcywgc3RyZW5ndGgpIHtcbiAgICAgICAgcmV0dXJuIDEgLSBtZXRob2QoMSAtIHByb2dyZXNzLCBzdHJlbmd0aCk7XG4gICAgfTtcbn07XG5cbi8qXG4gICAgRWFzaW5nIGNsYXNzXG5cbiAgICBJZiBwcm92aWRlZCBlYXNpbmcgZnVuY3Rpb24sIHJldHVybnMgZWFzaW5nIGZ1bmN0aW9uIHdpdGggXG4gICAgaW4vb3V0L2luT3V0IHZhcmlhdGlvbnNcblxuICAgIElmIHByb3ZpZGVkIGZvdXIgYXJndW1lbnRzLCByZXR1cm5zIG5ldyBCZXppZXIgY2xhc3MgaW5zdGVhZC5cbiovXG5mdW5jdGlvbiBjcmVhdGVFYXNpbmdGdW5jdGlvbihtZXRob2QpIHtcbiAgICB2YXIgZWFzaW5nRnVuY3Rpb24gPSBmdW5jdGlvbiAocHJvZ3Jlc3MsIHN0cmVuZ3RoKSB7XG4gICAgICAgIHJldHVybiBtZXRob2QocHJvZ3Jlc3MsIHN0cmVuZ3RoKTtcbiAgICB9O1xuXG4gICAgZWFzaW5nRnVuY3Rpb24uaW4gPSBmdW5jdGlvbiAocHJvZ3Jlc3MsIHN0cmVuZ3RoKSB7XG4gICAgICAgIHJldHVybiBtZXRob2QocHJvZ3Jlc3MsIHN0cmVuZ3RoKTtcbiAgICB9O1xuICAgIGVhc2luZ0Z1bmN0aW9uLm91dCA9IHJldmVyc2VFYXNpbmcobWV0aG9kKTtcbiAgICBlYXNpbmdGdW5jdGlvbi5pbk91dCA9IG1pcnJvckVhc2luZyhtZXRob2QpO1xuXG4gICAgcmV0dXJuIGVhc2luZ0Z1bmN0aW9uO1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluTnlZeTloWTNScGIyNXpMMlZoYzJsdVp5OWpjbVZoZEdVdFpXRnphVzVuTG1weklsMHNJbTVoYldWeklqcGJYU3dpYldGd2NHbHVaM01pT2lJN096dHJRa0ZuUTNkQ0xHOUNRVUZ2UWpzN096czdPenM3T3pzN1FVRjBRalZETEVsQlFVMHNXVUZCV1N4SFFVRkhMRlZCUVVNc1RVRkJUVHRYUVVGTExGVkJRVU1zVVVGQlVTeEZRVUZGTEZGQlFWRTdaVUZCU3l4QlFVRkRMRkZCUVZFc1NVRkJTU3hIUVVGSExFZEJRVWtzVFVGQlRTeERRVUZETEVOQlFVTXNSMEZCUnl4UlFVRlJMRVZCUVVVc1VVRkJVU3hEUVVGRExFZEJRVWNzUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXl4SFFVRkhMRTFCUVUwc1EwRkJReXhEUVVGRExFbEJRVWtzUTBGQlF5eEhRVUZITEZGQlFWRXNRMEZCUVN4QlFVRkRMRVZCUVVVc1VVRkJVU3hEUVVGRExFTkJRVUVzUjBGQlNTeERRVUZETzB0QlFVRTdRMEZCUVRzN096czdPenM3T3pzN08wRkJRVU1zUVVGWmFrc3NTVUZCVFN4aFFVRmhMRWRCUVVjc1ZVRkJReXhOUVVGTk8xZEJRVXNzVlVGQlF5eFJRVUZSTEVWQlFVVXNVVUZCVVR0bFFVRkxMRU5CUVVNc1IwRkJSeXhOUVVGTkxFTkJRVU1zUTBGQlF5eEhRVUZITEZGQlFWRXNSVUZCUlN4UlFVRlJMRU5CUVVNN1MwRkJRVHREUVVGQk96czdPenM3T3pzN08wRkJRVU1zUVVGVk9VVXNVMEZCVXl4dlFrRkJiMElzUTBGQlF5eE5RVUZOTEVWQlFVVTdRVUZEYWtRc1VVRkJTU3hqUVVGakxFZEJRVWNzVlVGQlF5eFJRVUZSTEVWQlFVVXNVVUZCVVR0bFFVRkxMRTFCUVUwc1EwRkJReXhSUVVGUkxFVkJRVVVzVVVGQlVTeERRVUZETzB0QlFVRXNRMEZCUXpzN1FVRkZlRVVzYTBKQlFXTXNRMEZCUXl4RlFVRkZMRWRCUVVjc1ZVRkJReXhSUVVGUkxFVkJRVVVzVVVGQlVUdGxRVUZMTEUxQlFVMHNRMEZCUXl4UlFVRlJMRVZCUVVVc1VVRkJVU3hEUVVGRE8wdEJRVUVzUTBGQlF6dEJRVU4yUlN4clFrRkJZeXhEUVVGRExFZEJRVWNzUjBGQlJ5eGhRVUZoTEVOQlFVTXNUVUZCVFN4RFFVRkRMRU5CUVVNN1FVRkRNME1zYTBKQlFXTXNRMEZCUXl4TFFVRkxMRWRCUVVjc1dVRkJXU3hEUVVGRExFMUJRVTBzUTBGQlF5eERRVUZET3p0QlFVVTFReXhYUVVGUExHTkJRV01zUTBGQlF6dERRVU42UWlJc0ltWnBiR1VpT2lKamNtVmhkR1V0WldGemFXNW5MbXB6SWl3aWMyOTFjbU5sVW05dmRDSTZJaTlWYzJWeWN5OU5ZWFIwVUdWeWNua3ZVMmwwWlhNdmNHOXdiVzkwYVc5dUlpd2ljMjkxY21ObGMwTnZiblJsYm5RaU9sc2lMeXBjYmlBZ0lDQk5hWEp5YjNJZ1pXRnphVzVuWEc0Z0lDQWdYRzRnSUNBZ1RXbHljbTl5Y3lCMGFHVWdjSEp2ZG1sa1pXUWdaV0Z6YVc1bklHWjFibU4wYVc5dUxDQjFjMlZrSUdobGNtVWdabTl5SUcxcGNuSnZjbWx1WnlCaGJseHVJQ0FnSUdWaGMyVkpiaUJwYm5SdklHRnVJR1ZoYzJWSmJrOTFkRnh1SUNBZ0lGeHVJQ0FnSUVCd1lYSmhiU0JiYm5WdFltVnlYVG9nVUhKdlozSmxjM01zSUdaeWIyMGdNQ0F0SURFc0lHOW1JR04xY25KbGJuUWdjMmhwWm5SY2JpQWdJQ0JBY0dGeVlXMGdXMloxYm1OMGFXOXVYVG9nVkdobElHVmhjMmx1WnlCbWRXNWpkR2x2YmlCMGJ5QnRhWEp5YjNKY2JpQWdJQ0JBY21WMGRYSnVjeUJiYm5WdFltVnlYVG9nVkdobElHVmhjMmx1WnkxaFpHcDFjM1JsWkNCa1pXeDBZVnh1S2k5Y2JtTnZibk4wSUcxcGNuSnZja1ZoYzJsdVp5QTlJQ2h0WlhSb2IyUXBJRDArSUNod2NtOW5jbVZ6Y3l3Z2MzUnlaVzVuZEdncElEMCtJQ2h3Y205bmNtVnpjeUE4UFNBd0xqVXBJRDhnYldWMGFHOWtLRElnS2lCd2NtOW5jbVZ6Y3l3Z2MzUnlaVzVuZEdncElDOGdNaUE2SUNneUlDMGdiV1YwYUc5a0tESWdLaUFvTVNBdElIQnliMmR5WlhOektTd2djM1J5Wlc1bmRHZ3BLU0F2SURJN1hHNGdJQ0FnSUNBZ0lGeHVMeXBjYmlBZ0lDQlNaWFpsY25ObElHVmhjMmx1WjF4dUlDQWdJRnh1SUNBZ0lGSmxkbVZ5YzJWeklIUm9aU0J2ZFhSd2RYUWdiMllnZEdobElIQnliM1pwWkdWa0lHVmhjMmx1WnlCbWRXNWpkR2x2Yml3Z2RYTmxaQ0JtYjNJZ1pteHBjSEJwYm1jZ1pXRnpaVWx1WEc0Z0lDQWdZM1Z5ZG1VZ2RHOGdZVzRnWldGelpVOTFkQzVjYmlBZ0lDQmNiaUFnSUNCQWNHRnlZVzBnVzI1MWJXSmxjbDA2SUZCeWIyZHlaWE56TENCbWNtOXRJREFnTFNBeExDQnZaaUJqZFhKeVpXNTBJSE5vYVdaMFhHNGdJQ0FnUUhCaGNtRnRJRnRtZFc1amRHbHZibDA2SUZSb1pTQmxZWE5wYm1jZ1puVnVZM1JwYjI0Z2RHOGdjbVYyWlhKelpWeHVJQ0FnSUVCeVpYUjFjbTV6SUZ0dWRXMWlaWEpkT2lCVWFHVWdaV0Z6YVc1bkxXRmthblZ6ZEdWa0lHUmxiSFJoWEc0cUwxeHVZMjl1YzNRZ2NtVjJaWEp6WlVWaGMybHVaeUE5SUNodFpYUm9iMlFwSUQwK0lDaHdjbTluY21WemN5d2djM1J5Wlc1bmRHZ3BJRDArSURFZ0xTQnRaWFJvYjJRb01TQXRJSEJ5YjJkeVpYTnpMQ0J6ZEhKbGJtZDBhQ2s3WEc1Y2JpOHFYRzRnSUNBZ1JXRnphVzVuSUdOc1lYTnpYRzVjYmlBZ0lDQkpaaUJ3Y205MmFXUmxaQ0JsWVhOcGJtY2dablZ1WTNScGIyNHNJSEpsZEhWeWJuTWdaV0Z6YVc1bklHWjFibU4wYVc5dUlIZHBkR2dnWEc0Z0lDQWdhVzR2YjNWMEwybHVUM1YwSUhaaGNtbGhkR2x2Ym5OY2JseHVJQ0FnSUVsbUlIQnliM1pwWkdWa0lHWnZkWElnWVhKbmRXMWxiblJ6TENCeVpYUjFjbTV6SUc1bGR5QkNaWHBwWlhJZ1kyeGhjM01nYVc1emRHVmhaQzVjYmlvdlhHNWxlSEJ2Y25RZ1pHVm1ZWFZzZENCbWRXNWpkR2x2YmlCamNtVmhkR1ZGWVhOcGJtZEdkVzVqZEdsdmJpaHRaWFJvYjJRcElIdGNiaUFnSUNCc1pYUWdaV0Z6YVc1blJuVnVZM1JwYjI0Z1BTQW9jSEp2WjNKbGMzTXNJSE4wY21WdVozUm9LU0E5UGlCdFpYUm9iMlFvY0hKdlozSmxjM01zSUhOMGNtVnVaM1JvS1R0Y2JseHVJQ0FnSUdWaGMybHVaMFoxYm1OMGFXOXVMbWx1SUQwZ0tIQnliMmR5WlhOekxDQnpkSEpsYm1kMGFDa2dQVDRnYldWMGFHOWtLSEJ5YjJkeVpYTnpMQ0J6ZEhKbGJtZDBhQ2s3WEc0Z0lDQWdaV0Z6YVc1blJuVnVZM1JwYjI0dWIzVjBJRDBnY21WMlpYSnpaVVZoYzJsdVp5aHRaWFJvYjJRcE8xeHVJQ0FnSUdWaGMybHVaMFoxYm1OMGFXOXVMbWx1VDNWMElEMGdiV2x5Y205eVJXRnphVzVuS0cxbGRHaHZaQ2s3WEc1Y2JpQWdJQ0J5WlhSMWNtNGdaV0Z6YVc1blJuVnVZM1JwYjI0N1hHNTlYRzRpWFgwPVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvYWN0aW9ucy9lYXNpbmcvY3JlYXRlLWVhc2luZy5qc1xuICoqIG1vZHVsZSBpZCA9IDQ3XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzLmRlZmF1bHQgPSBjdWJpY0Jlemllcjtcbi8qXG4gICAgQmV6aWVyIGZ1bmN0aW9uIGdlbmVyYXRvclxuICAgICAgICBcbiAgICBHYcOrdGFuIFJlbmF1ZGVhdSdzIEJlemllckVhc2luZ1xuICAgIGh0dHBzOi8vZ2l0aHViLmNvbS9ncmUvYmV6aWVyLWVhc2luZy9ibG9iL21hc3Rlci9pbmRleC5qcyAgXG4gICAgaHR0cHM6Ly9naXRodWIuY29tL2dyZS9iZXppZXItZWFzaW5nL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcbiAgICBZb3UncmUgYSBoZXJvXG4gICAgXG4gICAgVXNlXG4gICAgXG4gICAgICAgIHZhciBlYXNlT3V0ID0gbmV3IEJlemllciguMTcsLjY3LC44MywuNjcpLFxuICAgICAgICAgICAgeCA9IGVhc2VPdXQoMC41KTsgLy8gcmV0dXJucyAwLjYyNy4uLlxuKi9cblxuLy8gQ29uc3RhbnRzXG52YXIgTkVXVE9OX0lURVJBVElPTlMgPSA4O1xudmFyIE5FV1RPTl9NSU5fU0xPUEUgPSAwLjAwMTtcbnZhciBTVUJESVZJU0lPTl9QUkVDSVNJT04gPSAwLjAwMDAwMDE7XG52YXIgU1VCRElWSVNJT05fTUFYX0lURVJBVElPTlMgPSAxMDtcbnZhciBLX1NQTElORV9UQUJMRV9TSVpFID0gMTE7XG52YXIgS19TQU1QTEVfU1RFUF9TSVpFID0gMS4wIC8gKEtfU1BMSU5FX1RBQkxFX1NJWkUgLSAxLjApO1xudmFyIEZMT0FUXzMyX1NVUFBPUlRFRCA9IHR5cGVvZiBGbG9hdDMyQXJyYXkgIT09ICd1bmRlZmluZWQnO1xuXG4vLyBIZWxwZXIgbWV0aG9kc1xudmFyIGEgPSBmdW5jdGlvbiAoYTEsIGEyKSB7XG4gICAgcmV0dXJuIDEuMCAtIDMuMCAqIGEyICsgMy4wICogYTE7XG59O1xudmFyIGIgPSBmdW5jdGlvbiAoYTEsIGEyKSB7XG4gICAgcmV0dXJuIDMuMCAqIGEyIC0gNi4wICogYTE7XG59O1xudmFyIGMgPSBmdW5jdGlvbiAoYTEpIHtcbiAgICByZXR1cm4gMy4wICogYTE7XG59O1xuXG52YXIgZ2V0U2xvcGUgPSBmdW5jdGlvbiAodCwgYTEsIGEyKSB7XG4gICAgcmV0dXJuIDMuMCAqIGEoYTEsIGEyKSAqIHQgKiB0ICsgMi4wICogYihhMSwgYTIpICogdCArIGMoYTEpO1xufTtcblxudmFyIGNhbGNCZXppZXIgPSBmdW5jdGlvbiAodCwgYTEsIGEyKSB7XG4gICAgcmV0dXJuICgoYShhMSwgYTIpICogdCArIGIoYTEsIGEyKSkgKiB0ICsgYyhhMSkpICogdDtcbn07XG5cbi8qXG4gICAgQ3JlYXRlIGEgY3ViaWMgYmV6aWVyIHJlc29sdmVyXG4qL1xuZnVuY3Rpb24gY3ViaWNCZXppZXIobVgxLCBtWTEsIG1YMiwgbVkyKSB7XG4gICAgdmFyIHNhbXBsZVZhbHVlcyA9IEZMT0FUXzMyX1NVUFBPUlRFRCA/IG5ldyBGbG9hdDMyQXJyYXkoS19TUExJTkVfVEFCTEVfU0laRSkgOiBuZXcgQXJyYXkoS19TUExJTkVfVEFCTEVfU0laRSk7XG4gICAgdmFyIF9wcmVjb21wdXRlZCA9IGZhbHNlO1xuXG4gICAgdmFyIGJpbmFyeVN1YmRpdmlkZSA9IGZ1bmN0aW9uIChhWCwgYUEsIGFCKSB7XG4gICAgICAgIHZhciBpID0gMDtcbiAgICAgICAgdmFyIGN1cnJlbnRYID0gdW5kZWZpbmVkO1xuICAgICAgICB2YXIgY3VycmVudFQgPSB1bmRlZmluZWQ7XG5cbiAgICAgICAgZG8ge1xuICAgICAgICAgICAgY3VycmVudFQgPSBhQSArIChhQiAtIGFBKSAvIDIuMDtcbiAgICAgICAgICAgIGN1cnJlbnRYID0gY2FsY0JlemllcihjdXJyZW50VCwgbVgxLCBtWDIpIC0gYVg7XG4gICAgICAgICAgICBpZiAoY3VycmVudFggPiAwLjApIHtcbiAgICAgICAgICAgICAgICBhQiA9IGN1cnJlbnRUO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBhQSA9IGN1cnJlbnRUO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IHdoaWxlIChNYXRoLmFicyhjdXJyZW50WCkgPiBTVUJESVZJU0lPTl9QUkVDSVNJT04gJiYgKytpIDwgU1VCRElWSVNJT05fTUFYX0lURVJBVElPTlMpO1xuXG4gICAgICAgIHJldHVybiBjdXJyZW50VDtcbiAgICB9O1xuXG4gICAgdmFyIG5ld3RvblJhcGhzb25JdGVyYXRlID0gZnVuY3Rpb24gKGFYLCBhR3Vlc3NUKSB7XG4gICAgICAgIHZhciBpID0gMDtcbiAgICAgICAgdmFyIGN1cnJlbnRTbG9wZSA9IDA7XG4gICAgICAgIHZhciBjdXJyZW50WCA9IHVuZGVmaW5lZDtcblxuICAgICAgICBmb3IgKDsgaSA8IE5FV1RPTl9JVEVSQVRJT05TOyArK2kpIHtcbiAgICAgICAgICAgIGN1cnJlbnRTbG9wZSA9IGdldFNsb3BlKGFHdWVzc1QsIG1YMSwgbVgyKTtcblxuICAgICAgICAgICAgaWYgKGN1cnJlbnRTbG9wZSA9PT0gMC4wKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGFHdWVzc1Q7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGN1cnJlbnRYID0gY2FsY0JlemllcihhR3Vlc3NULCBtWDEsIG1YMikgLSBhWDtcbiAgICAgICAgICAgIGFHdWVzc1QgLT0gY3VycmVudFggLyBjdXJyZW50U2xvcGU7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gYUd1ZXNzVDtcbiAgICB9O1xuXG4gICAgdmFyIGNhbGNTYW1wbGVWYWx1ZXMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgS19TUExJTkVfVEFCTEVfU0laRTsgKytpKSB7XG4gICAgICAgICAgICBzYW1wbGVWYWx1ZXNbaV0gPSBjYWxjQmV6aWVyKGkgKiBLX1NBTVBMRV9TVEVQX1NJWkUsIG1YMSwgbVgyKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICB2YXIgZ2V0VEZvclggPSBmdW5jdGlvbiAoYVgpIHtcbiAgICAgICAgdmFyIGludGVydmFsU3RhcnQgPSAwLjA7XG4gICAgICAgIHZhciBjdXJyZW50U2FtcGxlID0gMTtcbiAgICAgICAgdmFyIGxhc3RTYW1wbGUgPSBLX1NQTElORV9UQUJMRV9TSVpFIC0gMTtcbiAgICAgICAgdmFyIGRpc3QgPSAwLjA7XG4gICAgICAgIHZhciBndWVzc0ZvclQgPSAwLjA7XG4gICAgICAgIHZhciBpbml0aWFsU2xvcGUgPSAwLjA7XG5cbiAgICAgICAgZm9yICg7IGN1cnJlbnRTYW1wbGUgIT0gbGFzdFNhbXBsZSAmJiBzYW1wbGVWYWx1ZXNbY3VycmVudFNhbXBsZV0gPD0gYVg7ICsrY3VycmVudFNhbXBsZSkge1xuICAgICAgICAgICAgaW50ZXJ2YWxTdGFydCArPSBLX1NBTVBMRV9TVEVQX1NJWkU7XG4gICAgICAgIH1cblxuICAgICAgICAtLWN1cnJlbnRTYW1wbGU7XG5cbiAgICAgICAgZGlzdCA9IChhWCAtIHNhbXBsZVZhbHVlc1tjdXJyZW50U2FtcGxlXSkgLyAoc2FtcGxlVmFsdWVzW2N1cnJlbnRTYW1wbGUgKyAxXSAtIHNhbXBsZVZhbHVlc1tjdXJyZW50U2FtcGxlXSk7XG4gICAgICAgIGd1ZXNzRm9yVCA9IGludGVydmFsU3RhcnQgKyBkaXN0ICogS19TQU1QTEVfU1RFUF9TSVpFO1xuXG4gICAgICAgIGluaXRpYWxTbG9wZSA9IGdldFNsb3BlKGd1ZXNzRm9yVCwgbVgxLCBtWDIpO1xuXG4gICAgICAgIC8vIElmIHNsb3BlIGlzIGdyZWF0ZXIgdGhhbiBtaW5cbiAgICAgICAgaWYgKGluaXRpYWxTbG9wZSA+PSBORVdUT05fTUlOX1NMT1BFKSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3dG9uUmFwaHNvbkl0ZXJhdGUoYVgsIGd1ZXNzRm9yVCk7XG4gICAgICAgICAgICAvLyBTbG9wZSBpcyBlcXVhbCB0byBtaW5cbiAgICAgICAgfSBlbHNlIGlmIChpbml0aWFsU2xvcGUgPT09IDAuMCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBndWVzc0ZvclQ7XG4gICAgICAgICAgICAgICAgLy8gU2xvcGUgaXMgbGVzcyB0aGFuIG1pblxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGJpbmFyeVN1YmRpdmlkZShhWCwgaW50ZXJ2YWxTdGFydCwgaW50ZXJ2YWxTdGFydCArIEtfU0FNUExFX1NURVBfU0laRSk7XG4gICAgICAgICAgICAgICAgfVxuICAgIH07XG5cbiAgICB2YXIgcHJlY29tcHV0ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgX3ByZWNvbXB1dGVkID0gdHJ1ZTtcbiAgICAgICAgaWYgKG1YMSAhPSBtWTEgfHwgbVgyICE9IG1ZMikge1xuICAgICAgICAgICAgY2FsY1NhbXBsZVZhbHVlcygpO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIHZhciByZXNvbHZlciA9IGZ1bmN0aW9uIChhWCkge1xuICAgICAgICB2YXIgcmV0dXJuVmFsdWUgPSB1bmRlZmluZWQ7XG5cbiAgICAgICAgaWYgKCFfcHJlY29tcHV0ZWQpIHtcbiAgICAgICAgICAgIHByZWNvbXB1dGUoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIElmIGxpbmVhciBncmFkaWVudCwgcmV0dXJuIFggYXMgVFxuICAgICAgICBpZiAobVgxID09PSBtWTEgJiYgbVgyID09PSBtWTIpIHtcbiAgICAgICAgICAgIHJldHVyblZhbHVlID0gYVg7XG5cbiAgICAgICAgICAgIC8vIElmIGF0IHN0YXJ0LCByZXR1cm4gMFxuICAgICAgICB9IGVsc2UgaWYgKGFYID09PSAwKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuVmFsdWUgPSAwO1xuXG4gICAgICAgICAgICAgICAgLy8gSWYgYXQgZW5kLCByZXR1cm4gMVxuICAgICAgICAgICAgfSBlbHNlIGlmIChhWCA9PT0gMSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm5WYWx1ZSA9IDE7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuVmFsdWUgPSBjYWxjQmV6aWVyKGdldFRGb3JYKGFYKSwgbVkxLCBtWTIpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcmV0dXJuVmFsdWU7XG4gICAgfTtcblxuICAgIHJldHVybiByZXNvbHZlcjtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbk55WXk5aFkzUnBiMjV6TDJWaGMybHVaeTlqY21WaGRHVXRZbVY2YVdWeUxtcHpJbDBzSW01aGJXVnpJanBiWFN3aWJXRndjR2x1WjNNaU9pSTdPenRyUWtGdFEzZENMRmRCUVZjN096czdPenM3T3pzN096czdPenM3UVVGd1FtNURMRWxCUVUwc2FVSkJRV2xDTEVkQlFVY3NRMEZCUXl4RFFVRkRPMEZCUXpWQ0xFbEJRVTBzWjBKQlFXZENMRWRCUVVjc1MwRkJTeXhEUVVGRE8wRkJReTlDTEVsQlFVMHNjVUpCUVhGQ0xFZEJRVWNzVTBGQlV5eERRVUZETzBGQlEzaERMRWxCUVUwc01FSkJRVEJDTEVkQlFVY3NSVUZCUlN4RFFVRkRPMEZCUTNSRExFbEJRVTBzYlVKQlFXMUNMRWRCUVVjc1JVRkJSU3hEUVVGRE8wRkJReTlDTEVsQlFVMHNhMEpCUVd0Q0xFZEJRVWNzUjBGQlJ5eEpRVUZKTEcxQ1FVRnRRaXhIUVVGSExFZEJRVWNzUTBGQlFTeEJRVUZETEVOQlFVTTdRVUZETjBRc1NVRkJUU3hyUWtGQmEwSXNSMEZCU1N4UFFVRlBMRmxCUVZrc1MwRkJTeXhYUVVGWExFRkJRVU03T3p0QlFVRkRMRUZCUjJwRkxFbEJRVTBzUTBGQlF5eEhRVUZITEZWQlFVTXNSVUZCUlN4RlFVRkZMRVZCUVVVN1YwRkJTeXhIUVVGSExFZEJRVWNzUjBGQlJ5eEhRVUZITEVWQlFVVXNSMEZCUnl4SFFVRkhMRWRCUVVjc1JVRkJSVHREUVVGQkxFTkJRVU03UVVGRGFFUXNTVUZCVFN4RFFVRkRMRWRCUVVjc1ZVRkJReXhGUVVGRkxFVkJRVVVzUlVGQlJUdFhRVUZMTEVkQlFVY3NSMEZCUnl4RlFVRkZMRWRCUVVjc1IwRkJSeXhIUVVGSExFVkJRVVU3UTBGQlFTeERRVUZETzBGQlF6RkRMRWxCUVUwc1EwRkJReXhIUVVGSExGVkJRVU1zUlVGQlJUdFhRVUZMTEVkQlFVY3NSMEZCUnl4RlFVRkZPME5CUVVFc1EwRkJRenM3UVVGRk0wSXNTVUZCVFN4UlFVRlJMRWRCUVVjc1ZVRkJReXhEUVVGRExFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVTdWMEZCU3l4SFFVRkhMRWRCUVVjc1EwRkJReXhEUVVGRExFVkJRVVVzUlVGQlJTeEZRVUZGTEVOQlFVTXNSMEZCUnl4RFFVRkRMRWRCUVVjc1EwRkJReXhIUVVGSExFZEJRVWNzUjBGQlJ5eERRVUZETEVOQlFVTXNSVUZCUlN4RlFVRkZMRVZCUVVVc1EwRkJReXhIUVVGSExFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTXNSVUZCUlN4RFFVRkRPME5CUVVFc1EwRkJRenM3UVVGRmRFWXNTVUZCVFN4VlFVRlZMRWRCUVVjc1ZVRkJReXhEUVVGRExFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVVTdWMEZCU3l4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFVkJRVVVzUlVGQlJTeEZRVUZGTEVOQlFVTXNSMEZCUnl4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRExFVkJRVVVzUlVGQlJTeEZRVUZGTEVOQlFVTXNRMEZCUVN4SFFVRkpMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU1zUlVGQlJTeERRVUZETEVOQlFVRXNSMEZCU1N4RFFVRkRPME5CUVVFN096czdPMEZCUVVNc1FVRkxha1VzVTBGQlV5eFhRVUZYTEVOQlFVTXNSMEZCUnl4RlFVRkZMRWRCUVVjc1JVRkJSU3hIUVVGSExFVkJRVVVzUjBGQlJ5eEZRVUZGTzBGQlEzQkVMRkZCUVUwc1dVRkJXU3hIUVVGSExHdENRVUZyUWl4SFFVRkhMRWxCUVVrc1dVRkJXU3hEUVVGRExHMUNRVUZ0UWl4RFFVRkRMRWRCUVVjc1NVRkJTU3hMUVVGTExFTkJRVU1zYlVKQlFXMUNMRU5CUVVNc1EwRkJRenRCUVVOcVNDeFJRVUZKTEZsQlFWa3NSMEZCUnl4TFFVRkxMRU5CUVVNN08wRkJSWHBDTEZGQlFVMHNaVUZCWlN4SFFVRkhMRlZCUVVNc1JVRkJSU3hGUVVGRkxFVkJRVVVzUlVGQlJTeEZRVUZGTEVWQlFVczdRVUZEY0VNc1dVRkJTU3hEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETzBGQlExWXNXVUZCU1N4UlFVRlJMRmxCUVVFc1EwRkJRenRCUVVOaUxGbEJRVWtzVVVGQlVTeFpRVUZCTEVOQlFVTTdPMEZCUldJc1YwRkJSenRCUVVORExHOUNRVUZSTEVkQlFVY3NSVUZCUlN4SFFVRkhMRU5CUVVNc1JVRkJSU3hIUVVGSExFVkJRVVVzUTBGQlFTeEhRVUZKTEVkQlFVY3NRMEZCUXp0QlFVTm9ReXh2UWtGQlVTeEhRVUZITEZWQlFWVXNRMEZCUXl4UlFVRlJMRVZCUVVVc1IwRkJSeXhGUVVGRkxFZEJRVWNzUTBGQlF5eEhRVUZITEVWQlFVVXNRMEZCUXp0QlFVTXZReXhuUWtGQlNTeFJRVUZSTEVkQlFVY3NSMEZCUnl4RlFVRkZPMEZCUTJoQ0xHdENRVUZGTEVkQlFVY3NVVUZCVVN4RFFVRkRPMkZCUTJwQ0xFMUJRVTA3UVVGRFNDeHJRa0ZCUlN4SFFVRkhMRkZCUVZFc1EwRkJRenRoUVVOcVFqdFRRVU5LTEZGQlFWRXNTVUZCU1N4RFFVRkRMRWRCUVVjc1EwRkJReXhSUVVGUkxFTkJRVU1zUjBGQlJ5eHhRa0ZCY1VJc1NVRkJTU3hGUVVGRkxFTkJRVU1zUjBGQlJ5d3dRa0ZCTUVJc1JVRkJSVHM3UVVGRmVrWXNaVUZCVHl4UlFVRlJMRU5CUVVNN1MwRkRia0lzUTBGQlF6czdRVUZGUml4UlFVRk5MRzlDUVVGdlFpeEhRVUZITEZWQlFVTXNSVUZCUlN4RlFVRkZMRTlCUVU4c1JVRkJTenRCUVVNeFF5eFpRVUZKTEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNN1FVRkRWaXhaUVVGSkxGbEJRVmtzUjBGQlJ5eERRVUZETEVOQlFVTTdRVUZEY2tJc1dVRkJTU3hSUVVGUkxGbEJRVUVzUTBGQlF6czdRVUZGWWl4bFFVRlBMRU5CUVVNc1IwRkJSeXhwUWtGQmFVSXNSVUZCUlN4RlFVRkZMRU5CUVVNc1JVRkJSVHRCUVVNdlFpeDNRa0ZCV1N4SFFVRkhMRkZCUVZFc1EwRkJReXhQUVVGUExFVkJRVVVzUjBGQlJ5eEZRVUZGTEVkQlFVY3NRMEZCUXl4RFFVRkRPenRCUVVVelF5eG5Ra0ZCU1N4WlFVRlpMRXRCUVVzc1IwRkJSeXhGUVVGRk8wRkJRM1JDTEhWQ1FVRlBMRTlCUVU4c1EwRkJRenRoUVVOc1FqczdRVUZGUkN4dlFrRkJVU3hIUVVGSExGVkJRVlVzUTBGQlF5eFBRVUZQTEVWQlFVVXNSMEZCUnl4RlFVRkZMRWRCUVVjc1EwRkJReXhIUVVGSExFVkJRVVVzUTBGQlF6dEJRVU01UXl4dFFrRkJUeXhKUVVGSkxGRkJRVkVzUjBGQlJ5eFpRVUZaTEVOQlFVTTdVMEZEZEVNN08wRkJSVVFzWlVGQlR5eFBRVUZQTEVOQlFVTTdTMEZEYkVJc1EwRkJRenM3UVVGRlJpeFJRVUZOTEdkQ1FVRm5RaXhIUVVGSExGbEJRVTA3UVVGRE0wSXNZVUZCU3l4SlFVRkpMRU5CUVVNc1IwRkJSeXhEUVVGRExFVkJRVVVzUTBGQlF5eEhRVUZITEcxQ1FVRnRRaXhGUVVGRkxFVkJRVVVzUTBGQlF5eEZRVUZGTzBGQlF6RkRMSGRDUVVGWkxFTkJRVU1zUTBGQlF5eERRVUZETEVkQlFVY3NWVUZCVlN4RFFVRkRMRU5CUVVNc1IwRkJSeXhyUWtGQmEwSXNSVUZCUlN4SFFVRkhMRVZCUVVVc1IwRkJSeXhEUVVGRExFTkJRVU03VTBGRGJFVTdTMEZEU2l4RFFVRkRPenRCUVVWR0xGRkJRVTBzVVVGQlVTeEhRVUZITEZWQlFVTXNSVUZCUlN4RlFVRkxPMEZCUTNKQ0xGbEJRVWtzWVVGQllTeEhRVUZITEVkQlFVY3NRMEZCUXp0QlFVTjRRaXhaUVVGSkxHRkJRV0VzUjBGQlJ5eERRVUZETEVOQlFVTTdRVUZEZEVJc1dVRkJTU3hWUVVGVkxFZEJRVWNzYlVKQlFXMUNMRWRCUVVjc1EwRkJReXhEUVVGRE8wRkJRM3BETEZsQlFVa3NTVUZCU1N4SFFVRkhMRWRCUVVjc1EwRkJRenRCUVVObUxGbEJRVWtzVTBGQlV5eEhRVUZITEVkQlFVY3NRMEZCUXp0QlFVTndRaXhaUVVGSkxGbEJRVmtzUjBGQlJ5eEhRVUZITEVOQlFVTTdPMEZCUlhaQ0xHVkJRVThzWVVGQllTeEpRVUZKTEZWQlFWVXNTVUZCU1N4WlFVRlpMRU5CUVVNc1lVRkJZU3hEUVVGRExFbEJRVWtzUlVGQlJTeEZRVUZGTEVWQlFVVXNZVUZCWVN4RlFVRkZPMEZCUTNSR0xIbENRVUZoTEVsQlFVa3NhMEpCUVd0Q0xFTkJRVU03VTBGRGRrTTdPMEZCUlVRc1ZVRkJSU3hoUVVGaExFTkJRVU03TzBGQlJXaENMRmxCUVVrc1IwRkJSeXhEUVVGRExFVkJRVVVzUjBGQlJ5eFpRVUZaTEVOQlFVTXNZVUZCWVN4RFFVRkRMRU5CUVVFc1NVRkJTeXhaUVVGWkxFTkJRVU1zWVVGQllTeEhRVUZETEVOQlFVTXNRMEZCUXl4SFFVRkhMRmxCUVZrc1EwRkJReXhoUVVGaExFTkJRVU1zUTBGQlFTeEJRVUZETEVOQlFVTTdRVUZETVVjc2FVSkJRVk1zUjBGQlJ5eGhRVUZoTEVkQlFVY3NTVUZCU1N4SFFVRkhMR3RDUVVGclFpeERRVUZET3p0QlFVVjBSQ3h2UWtGQldTeEhRVUZITEZGQlFWRXNRMEZCUXl4VFFVRlRMRVZCUVVVc1IwRkJSeXhGUVVGRkxFZEJRVWNzUTBGQlF6czdPMEZCUVVNc1FVRkhOME1zV1VGQlNTeFpRVUZaTEVsQlFVa3NaMEpCUVdkQ0xFVkJRVVU3UVVGRGJFTXNiVUpCUVU4c2IwSkJRVzlDTEVOQlFVTXNSVUZCUlN4RlFVRkZMRk5CUVZNc1EwRkJRenM3UVVGQlF5eFRRVVU1UXl4TlFVRk5MRWxCUVVrc1dVRkJXU3hMUVVGTExFZEJRVWNzUlVGQlJUdEJRVU0zUWl4MVFrRkJUeXhUUVVGVE96dEJRVUZETEdGQlJYQkNMRTFCUVUwN1FVRkRTQ3d5UWtGQlR5eGxRVUZsTEVOQlFVTXNSVUZCUlN4RlFVRkZMR0ZCUVdFc1JVRkJSU3hoUVVGaExFZEJRVWNzYTBKQlFXdENMRU5CUVVNc1EwRkJRenRwUWtGRGFrWTdTMEZEU2l4RFFVRkRPenRCUVVWR0xGRkJRVTBzVlVGQlZTeEhRVUZITEZsQlFVMDdRVUZEY2tJc2IwSkJRVmtzUjBGQlJ5eEpRVUZKTEVOQlFVTTdRVUZEY0VJc1dVRkJTU3hIUVVGSExFbEJRVWtzUjBGQlJ5eEpRVUZKTEVkQlFVY3NTVUZCU1N4SFFVRkhMRVZCUVVVN1FVRkRNVUlzTkVKQlFXZENMRVZCUVVVc1EwRkJRenRUUVVOMFFqdExRVU5LTEVOQlFVTTdPMEZCUlVZc1VVRkJUU3hSUVVGUkxFZEJRVWNzVlVGQlF5eEZRVUZGTEVWQlFVczdRVUZEY2tJc1dVRkJTU3hYUVVGWExGbEJRVUVzUTBGQlF6czdRVUZGYUVJc1dVRkJTU3hEUVVGRExGbEJRVmtzUlVGQlJUdEJRVU5tTEhOQ1FVRlZMRVZCUVVVc1EwRkJRenRUUVVOb1FqczdPMEZCUVVFc1FVRkhSQ3haUVVGSkxFZEJRVWNzUzBGQlN5eEhRVUZITEVsQlFVa3NSMEZCUnl4TFFVRkxMRWRCUVVjc1JVRkJSVHRCUVVNMVFpeDFRa0ZCVnl4SFFVRkhMRVZCUVVVN096dEJRVUZETEZOQlIzQkNMRTFCUVUwc1NVRkJTU3hGUVVGRkxFdEJRVXNzUTBGQlF5eEZRVUZGTzBGQlEycENMREpDUVVGWExFZEJRVWNzUTBGQlF6czdPMEZCUVVNc1lVRkhia0lzVFVGQlRTeEpRVUZKTEVWQlFVVXNTMEZCU3l4RFFVRkRMRVZCUVVVN1FVRkRha0lzSzBKQlFWY3NSMEZCUnl4RFFVRkRMRU5CUVVNN2FVSkJSVzVDTEUxQlFVMDdRVUZEU0N3clFrRkJWeXhIUVVGSExGVkJRVlVzUTBGQlF5eFJRVUZSTEVOQlFVTXNSVUZCUlN4RFFVRkRMRVZCUVVVc1IwRkJSeXhGUVVGRkxFZEJRVWNzUTBGQlF5eERRVUZETzJsQ1FVTndSRHM3UVVGRlJDeGxRVUZQTEZkQlFWY3NRMEZCUXp0TFFVTjBRaXhEUVVGRE96dEJRVVZHTEZkQlFVOHNVVUZCVVN4RFFVRkRPME5CUTI1Q0lpd2labWxzWlNJNkltTnlaV0YwWlMxaVpYcHBaWEl1YW5NaUxDSnpiM1Z5WTJWU2IyOTBJam9pTDFWelpYSnpMMDFoZEhSUVpYSnllUzlUYVhSbGN5OXdiM0J0YjNScGIyNGlMQ0p6YjNWeVkyVnpRMjl1ZEdWdWRDSTZXeUl2S2x4dUlDQWdJRUpsZW1sbGNpQm1kVzVqZEdsdmJpQm5aVzVsY21GMGIzSmNiaUFnSUNBZ0lDQWdYRzRnSUNBZ1IySERxM1JoYmlCU1pXNWhkV1JsWVhVbmN5QkNaWHBwWlhKRllYTnBibWRjYmlBZ0lDQm9kSFJ3Y3pvdkwyZHBkR2gxWWk1amIyMHZaM0psTDJKbGVtbGxjaTFsWVhOcGJtY3ZZbXh2WWk5dFlYTjBaWEl2YVc1a1pYZ3Vhbk1nSUZ4dUlDQWdJR2gwZEhCek9pOHZaMmwwYUhWaUxtTnZiUzluY21VdlltVjZhV1Z5TFdWaGMybHVaeTlpYkc5aUwyMWhjM1JsY2k5TVNVTkZUbE5GWEc0Z0lDQWdXVzkxSjNKbElHRWdhR1Z5YjF4dUlDQWdJRnh1SUNBZ0lGVnpaVnh1SUNBZ0lGeHVJQ0FnSUNBZ0lDQjJZWElnWldGelpVOTFkQ0E5SUc1bGR5QkNaWHBwWlhJb0xqRTNMQzQyTnl3dU9ETXNMalkzS1N4Y2JpQWdJQ0FnSUNBZ0lDQWdJSGdnUFNCbFlYTmxUM1YwS0RBdU5TazdJQzh2SUhKbGRIVnlibk1nTUM0Mk1qY3VMaTVjYmlvdlhHNWNiaTh2SUVOdmJuTjBZVzUwYzF4dVkyOXVjM1FnVGtWWFZFOU9YMGxVUlZKQlZFbFBUbE1nUFNBNE8xeHVZMjl1YzNRZ1RrVlhWRTlPWDAxSlRsOVRURTlRUlNBOUlEQXVNREF4TzF4dVkyOXVjM1FnVTFWQ1JFbFdTVk5KVDA1ZlVGSkZRMGxUU1U5T0lEMGdNQzR3TURBd01EQXhPMXh1WTI5dWMzUWdVMVZDUkVsV1NWTkpUMDVmVFVGWVgwbFVSVkpCVkVsUFRsTWdQU0F4TUR0Y2JtTnZibk4wSUV0ZlUxQk1TVTVGWDFSQlFreEZYMU5KV2tVZ1BTQXhNVHRjYm1OdmJuTjBJRXRmVTBGTlVFeEZYMU5VUlZCZlUwbGFSU0E5SURFdU1DQXZJQ2hMWDFOUVRFbE9SVjlVUVVKTVJWOVRTVnBGSUMwZ01TNHdLVHRjYm1OdmJuTjBJRVpNVDBGVVh6TXlYMU5WVUZCUFVsUkZSQ0E5SUNoMGVYQmxiMllnUm14dllYUXpNa0Z5Y21GNUlDRTlQU0FuZFc1a1pXWnBibVZrSnlrN1hHNWNiaTh2SUVobGJIQmxjaUJ0WlhSb2IyUnpYRzVqYjI1emRDQmhJRDBnS0dFeExDQmhNaWtnUFQ0Z01TNHdJQzBnTXk0d0lDb2dZVElnS3lBekxqQWdLaUJoTVR0Y2JtTnZibk4wSUdJZ1BTQW9ZVEVzSUdFeUtTQTlQaUF6TGpBZ0tpQmhNaUF0SURZdU1DQXFJR0V4TzF4dVkyOXVjM1FnWXlBOUlDaGhNU2tnUFQ0Z015NHdJQ29nWVRFN1hHNWNibU52Ym5OMElHZGxkRk5zYjNCbElEMGdLSFFzSUdFeExDQmhNaWtnUFQ0Z015NHdJQ29nWVNoaE1Td2dZVElwSUNvZ2RDQXFJSFFnS3lBeUxqQWdLaUJpS0dFeExDQmhNaWtnS2lCMElDc2dZeWhoTVNrN1hHNWNibU52Ym5OMElHTmhiR05DWlhwcFpYSWdQU0FvZEN3Z1lURXNJR0V5S1NBOVBpQW9LR0VvWVRFc0lHRXlLU0FxSUhRZ0t5QmlLR0V4TENCaE1pa3BJQ29nZENBcklHTW9ZVEVwS1NBcUlIUTdYRzVjYmk4cVhHNGdJQ0FnUTNKbFlYUmxJR0VnWTNWaWFXTWdZbVY2YVdWeUlISmxjMjlzZG1WeVhHNHFMMXh1Wlhod2IzSjBJR1JsWm1GMWJIUWdablZ1WTNScGIyNGdZM1ZpYVdOQ1pYcHBaWElvYlZneExDQnRXVEVzSUcxWU1pd2diVmt5S1NCN1hHNGdJQ0FnWTI5dWMzUWdjMkZ0Y0d4bFZtRnNkV1Z6SUQwZ1JreFBRVlJmTXpKZlUxVlFVRTlTVkVWRUlEOGdibVYzSUVac2IyRjBNekpCY25KaGVTaExYMU5RVEVsT1JWOVVRVUpNUlY5VFNWcEZLU0E2SUc1bGR5QkJjbkpoZVNoTFgxTlFURWxPUlY5VVFVSk1SVjlUU1ZwRktUdGNiaUFnSUNCc1pYUWdYM0J5WldOdmJYQjFkR1ZrSUQwZ1ptRnNjMlU3WEc1Y2JpQWdJQ0JqYjI1emRDQmlhVzVoY25sVGRXSmthWFpwWkdVZ1BTQW9ZVmdzSUdGQkxDQmhRaWtnUFQ0Z2UxeHVJQ0FnSUNBZ0lDQnNaWFFnYVNBOUlEQTdYRzRnSUNBZ0lDQWdJR3hsZENCamRYSnlaVzUwV0R0Y2JpQWdJQ0FnSUNBZ2JHVjBJR04xY25KbGJuUlVPMXh1WEc0Z0lDQWdJQ0FnSUdSdklIdGNiaUFnSUNBZ0lDQWdJQ0FnSUdOMWNuSmxiblJVSUQwZ1lVRWdLeUFvWVVJZ0xTQmhRU2tnTHlBeUxqQTdYRzRnSUNBZ0lDQWdJQ0FnSUNCamRYSnlaVzUwV0NBOUlHTmhiR05DWlhwcFpYSW9ZM1Z5Y21WdWRGUXNJRzFZTVN3Z2JWZ3lLU0F0SUdGWU8xeHVJQ0FnSUNBZ0lDQWdJQ0FnYVdZZ0tHTjFjbkpsYm5SWUlENGdNQzR3S1NCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ1lVSWdQU0JqZFhKeVpXNTBWRHRjYmlBZ0lDQWdJQ0FnSUNBZ0lIMGdaV3h6WlNCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ1lVRWdQU0JqZFhKeVpXNTBWRHRjYmlBZ0lDQWdJQ0FnSUNBZ0lIMWNiaUFnSUNBZ0lDQWdmU0IzYUdsc1pTQW9UV0YwYUM1aFluTW9ZM1Z5Y21WdWRGZ3BJRDRnVTFWQ1JFbFdTVk5KVDA1ZlVGSkZRMGxUU1U5T0lDWW1JQ3NyYVNBOElGTlZRa1JKVmtsVFNVOU9YMDFCV0Y5SlZFVlNRVlJKVDA1VEtUdGNibHh1SUNBZ0lDQWdJQ0J5WlhSMWNtNGdZM1Z5Y21WdWRGUTdYRzRnSUNBZ2ZUdGNibHh1SUNBZ0lHTnZibk4wSUc1bGQzUnZibEpoY0doemIyNUpkR1Z5WVhSbElEMGdLR0ZZTENCaFIzVmxjM05VS1NBOVBpQjdYRzRnSUNBZ0lDQWdJR3hsZENCcElEMGdNRHRjYmlBZ0lDQWdJQ0FnYkdWMElHTjFjbkpsYm5SVGJHOXdaU0E5SURBN1hHNGdJQ0FnSUNBZ0lHeGxkQ0JqZFhKeVpXNTBXRHRjYmx4dUlDQWdJQ0FnSUNCbWIzSWdLRHNnYVNBOElFNUZWMVJQVGw5SlZFVlNRVlJKVDA1VE95QXJLMmtwSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJR04xY25KbGJuUlRiRzl3WlNBOUlHZGxkRk5zYjNCbEtHRkhkV1Z6YzFRc0lHMVlNU3dnYlZneUtUdGNiaUFnSUNBZ0lDQWdJQ0FnSUZ4dUlDQWdJQ0FnSUNBZ0lDQWdhV1lnS0dOMWNuSmxiblJUYkc5d1pTQTlQVDBnTUM0d0tTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdjbVYwZFhKdUlHRkhkV1Z6YzFRN1hHNGdJQ0FnSUNBZ0lDQWdJQ0I5WEc0Z0lDQWdJQ0FnSUNBZ0lDQmNiaUFnSUNBZ0lDQWdJQ0FnSUdOMWNuSmxiblJZSUQwZ1kyRnNZMEpsZW1sbGNpaGhSM1ZsYzNOVUxDQnRXREVzSUcxWU1pa2dMU0JoV0R0Y2JpQWdJQ0FnSUNBZ0lDQWdJR0ZIZFdWemMxUWdMVDBnWTNWeWNtVnVkRmdnTHlCamRYSnlaVzUwVTJ4dmNHVTdYRzRnSUNBZ0lDQWdJSDFjYmlBZ0lDQWdJQ0FnWEc0Z0lDQWdJQ0FnSUhKbGRIVnliaUJoUjNWbGMzTlVPMXh1SUNBZ0lIMDdYRzVjYmlBZ0lDQmpiMjV6ZENCallXeGpVMkZ0Y0d4bFZtRnNkV1Z6SUQwZ0tDa2dQVDRnZTF4dUlDQWdJQ0FnSUNCbWIzSWdLR3hsZENCcElEMGdNRHNnYVNBOElFdGZVMUJNU1U1RlgxUkJRa3hGWDFOSldrVTdJQ3NyYVNrZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnYzJGdGNHeGxWbUZzZFdWelcybGRJRDBnWTJGc1kwSmxlbWxsY2locElDb2dTMTlUUVUxUVRFVmZVMVJGVUY5VFNWcEZMQ0J0V0RFc0lHMVlNaWs3WEc0Z0lDQWdJQ0FnSUgxY2JpQWdJQ0I5TzF4dVhHNGdJQ0FnWTI5dWMzUWdaMlYwVkVadmNsZ2dQU0FvWVZncElEMCtJSHRjYmlBZ0lDQWdJQ0FnYkdWMElHbHVkR1Z5ZG1Gc1UzUmhjblFnUFNBd0xqQTdYRzRnSUNBZ0lDQWdJR3hsZENCamRYSnlaVzUwVTJGdGNHeGxJRDBnTVR0Y2JpQWdJQ0FnSUNBZ2JHVjBJR3hoYzNSVFlXMXdiR1VnUFNCTFgxTlFURWxPUlY5VVFVSk1SVjlUU1ZwRklDMGdNVHRjYmlBZ0lDQWdJQ0FnYkdWMElHUnBjM1FnUFNBd0xqQTdYRzRnSUNBZ0lDQWdJR3hsZENCbmRXVnpjMFp2Y2xRZ1BTQXdMakE3WEc0Z0lDQWdJQ0FnSUd4bGRDQnBibWwwYVdGc1UyeHZjR1VnUFNBd0xqQTdYRzRnSUNBZ0lDQWdJQ0FnSUNCY2JpQWdJQ0FnSUNBZ1ptOXlJQ2c3SUdOMWNuSmxiblJUWVcxd2JHVWdJVDBnYkdGemRGTmhiWEJzWlNBbUppQnpZVzF3YkdWV1lXeDFaWE5iWTNWeWNtVnVkRk5oYlhCc1pWMGdQRDBnWVZnN0lDc3JZM1Z5Y21WdWRGTmhiWEJzWlNrZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnYVc1MFpYSjJZV3hUZEdGeWRDQXJQU0JMWDFOQlRWQk1SVjlUVkVWUVgxTkpXa1U3WEc0Z0lDQWdJQ0FnSUgxY2JpQWdJQ0FnSUNBZ1hHNGdJQ0FnSUNBZ0lDMHRZM1Z5Y21WdWRGTmhiWEJzWlR0Y2JpQWdJQ0FnSUNBZ1hHNGdJQ0FnSUNBZ0lHUnBjM1FnUFNBb1lWZ2dMU0J6WVcxd2JHVldZV3gxWlhOYlkzVnljbVZ1ZEZOaGJYQnNaVjBwSUM4Z0tITmhiWEJzWlZaaGJIVmxjMXRqZFhKeVpXNTBVMkZ0Y0d4bEt6RmRJQzBnYzJGdGNHeGxWbUZzZFdWelcyTjFjbkpsYm5SVFlXMXdiR1ZkS1R0Y2JpQWdJQ0FnSUNBZ1ozVmxjM05HYjNKVUlEMGdhVzUwWlhKMllXeFRkR0Z5ZENBcklHUnBjM1FnS2lCTFgxTkJUVkJNUlY5VFZFVlFYMU5KV2tVN1hHNGdJQ0FnSUNBZ0lGeHVJQ0FnSUNBZ0lDQnBibWwwYVdGc1UyeHZjR1VnUFNCblpYUlRiRzl3WlNobmRXVnpjMFp2Y2xRc0lHMVlNU3dnYlZneUtUdGNiaUFnSUNBZ0lDQWdYRzRnSUNBZ0lDQWdJQzh2SUVsbUlITnNiM0JsSUdseklHZHlaV0YwWlhJZ2RHaGhiaUJ0YVc1Y2JpQWdJQ0FnSUNBZ2FXWWdLR2x1YVhScFlXeFRiRzl3WlNBK1BTQk9SVmRVVDA1ZlRVbE9YMU5NVDFCRktTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNCeVpYUjFjbTRnYm1WM2RHOXVVbUZ3YUhOdmJrbDBaWEpoZEdVb1lWZ3NJR2QxWlhOelJtOXlWQ2s3WEc0Z0lDQWdJQ0FnSUM4dklGTnNiM0JsSUdseklHVnhkV0ZzSUhSdklHMXBibHh1SUNBZ0lDQWdJQ0I5SUdWc2MyVWdhV1lnS0dsdWFYUnBZV3hUYkc5d1pTQTlQVDBnTUM0d0tTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNCeVpYUjFjbTRnWjNWbGMzTkdiM0pVTzF4dUlDQWdJQ0FnSUNBdkx5QlRiRzl3WlNCcGN5QnNaWE56SUhSb1lXNGdiV2x1WEc0Z0lDQWdJQ0FnSUgwZ1pXeHpaU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQnlaWFIxY200Z1ltbHVZWEo1VTNWaVpHbDJhV1JsS0dGWUxDQnBiblJsY25aaGJGTjBZWEowTENCcGJuUmxjblpoYkZOMFlYSjBJQ3NnUzE5VFFVMVFURVZmVTFSRlVGOVRTVnBGS1R0Y2JpQWdJQ0FnSUNBZ2ZWeHVJQ0FnSUgwN1hHNWNiaUFnSUNCamIyNXpkQ0J3Y21WamIyMXdkWFJsSUQwZ0tDa2dQVDRnZTF4dUlDQWdJQ0FnSUNCZmNISmxZMjl0Y0hWMFpXUWdQU0IwY25WbE8xeHVJQ0FnSUNBZ0lDQnBaaUFvYlZneElDRTlJRzFaTVNCOGZDQnRXRElnSVQwZ2JWa3lLU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQmpZV3hqVTJGdGNHeGxWbUZzZFdWektDazdYRzRnSUNBZ0lDQWdJSDFjYmlBZ0lDQjlPMXh1WEc0Z0lDQWdZMjl1YzNRZ2NtVnpiMngyWlhJZ1BTQW9ZVmdwSUQwK0lIdGNiaUFnSUNBZ0lDQWdiR1YwSUhKbGRIVnlibFpoYkhWbE8xeHVYRzRnSUNBZ0lDQWdJR2xtSUNnaFgzQnlaV052YlhCMWRHVmtLU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQndjbVZqYjIxd2RYUmxLQ2s3WEc0Z0lDQWdJQ0FnSUgxY2JpQWdJQ0FnSUNBZ1hHNGdJQ0FnSUNBZ0lDOHZJRWxtSUd4cGJtVmhjaUJuY21Ga2FXVnVkQ3dnY21WMGRYSnVJRmdnWVhNZ1ZGeHVJQ0FnSUNBZ0lDQnBaaUFvYlZneElEMDlQU0J0V1RFZ0ppWWdiVmd5SUQwOVBTQnRXVElwSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJSEpsZEhWeWJsWmhiSFZsSUQwZ1lWZzdYRzRnSUNBZ0lDQWdJQ0FnSUNCY2JpQWdJQ0FnSUNBZ0x5OGdTV1lnWVhRZ2MzUmhjblFzSUhKbGRIVnliaUF3WEc0Z0lDQWdJQ0FnSUgwZ1pXeHpaU0JwWmlBb1lWZ2dQVDA5SURBcElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUhKbGRIVnlibFpoYkhWbElEMGdNRHRjYmlBZ0lDQWdJQ0FnSUNBZ0lGeHVJQ0FnSUNBZ0lDQXZMeUJKWmlCaGRDQmxibVFzSUhKbGRIVnliaUF4WEc0Z0lDQWdJQ0FnSUgwZ1pXeHpaU0JwWmlBb1lWZ2dQVDA5SURFcElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUhKbGRIVnlibFpoYkhWbElEMGdNVHRjYmx4dUlDQWdJQ0FnSUNCOUlHVnNjMlVnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdjbVYwZFhKdVZtRnNkV1VnUFNCallXeGpRbVY2YVdWeUtHZGxkRlJHYjNKWUtHRllLU3dnYlZreExDQnRXVElwTzF4dUlDQWdJQ0FnSUNCOVhHNGdJQ0FnSUNBZ0lGeHVJQ0FnSUNBZ0lDQnlaWFIxY200Z2NtVjBkWEp1Vm1Gc2RXVTdYRzRnSUNBZ2ZUdGNibHh1SUNBZ0lISmxkSFZ5YmlCeVpYTnZiSFpsY2p0Y2JuMWNiaUpkZlE9PVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvYWN0aW9ucy9lYXNpbmcvY3JlYXRlLWJlemllci5qc1xuICoqIG1vZHVsZSBpZCA9IDQ4XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfY3NzQWRhcHRlciA9IHJlcXVpcmUoJy4uL2FkYXB0ZXIvY3NzLWFkYXB0ZXInKTtcblxudmFyIF9jc3NBZGFwdGVyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2Nzc0FkYXB0ZXIpO1xuXG52YXIgX3N2Z0FkYXB0ZXIgPSByZXF1aXJlKCcuLi9hZGFwdGVyL3N2Zy1hZGFwdGVyJyk7XG5cbnZhciBfc3ZnQWRhcHRlcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9zdmdBZGFwdGVyKTtcblxudmFyIF9zdmdQYXRoQWRhcHRlciA9IHJlcXVpcmUoJy4uL2FkYXB0ZXIvc3ZnLXBhdGgtYWRhcHRlcicpO1xuXG52YXIgX3N2Z1BhdGhBZGFwdGVyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3N2Z1BhdGhBZGFwdGVyKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxudmFyIFNBVkVfUFJPUCA9ICdfX3BtX2FkYXB0ZXInO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbiAoZWxlbWVudCkge1xuICAgIC8vIFJldHVybiBib3VuZCBhZGFwdGVyIGlmIHByZXNlbnRcbiAgICBpZiAoZWxlbWVudFtTQVZFX1BST1BdKSB7XG4gICAgICAgIHJldHVybiBlbGVtZW50W1NBVkVfUFJPUF07XG5cbiAgICAgICAgLy8gT3IgZGV0ZWN0IGFuZCBiaW5kIGFkYXB0ZXJcbiAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdmFyIGFkYXB0ZXIgPSB1bmRlZmluZWQ7XG5cbiAgICAgICAgICAgIC8vIElmIEhUTUxFbGVtZW50IGxvYWQgQ1NTXG4gICAgICAgICAgICBpZiAoZWxlbWVudCBpbnN0YW5jZW9mIEhUTUxFbGVtZW50IHx8IGVsZW1lbnQudGFnTmFtZSA9PT0gJ3N2ZycpIHtcbiAgICAgICAgICAgICAgICBhZGFwdGVyID0gX2Nzc0FkYXB0ZXIyLmRlZmF1bHQ7XG5cbiAgICAgICAgICAgICAgICAvLyBPciBTVkdcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoZWxlbWVudCBpbnN0YW5jZW9mIFNWR0VsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGVsZW1lbnQudGFnTmFtZSA9PT0gJ3BhdGgnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhZGFwdGVyID0gX3N2Z1BhdGhBZGFwdGVyMi5kZWZhdWx0O1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgYWRhcHRlciA9IF9zdmdBZGFwdGVyMi5kZWZhdWx0O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBCaW5kIGFkYXB0ZXIgdG8gZWxlbWVudFxuICAgICAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGVsZW1lbnQsIFNBVkVfUFJPUCwge1xuICAgICAgICAgICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgICAgICAgICAgIHZhbHVlOiBhZGFwdGVyXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgcmV0dXJuIGFkYXB0ZXIoZWxlbWVudCk7XG4gICAgICAgIH1cbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5OeVl5OXBibU12WW1sdVpDMWhaR0Z3ZEdWeUxtcHpJbDBzSW01aGJXVnpJanBiWFN3aWJXRndjR2x1WjNNaU9pSTdPenM3T3pzN096czdPenM3T3pzN096dEJRVWxCTEVsQlFVMHNVMEZCVXl4SFFVRkhMR05CUVdNc1EwRkJRenM3YTBKQlJXeENMRlZCUVVNc1QwRkJUeXhGUVVGTE96dEJRVVY0UWl4UlFVRkpMRTlCUVU4c1EwRkJReXhUUVVGVExFTkJRVU1zUlVGQlJUdEJRVU53UWl4bFFVRlBMRTlCUVU4c1EwRkJReXhUUVVGVExFTkJRVU03T3p0QlFVRkRMRXRCUnpkQ0xFMUJRVTA3UVVGRFNDeG5Ra0ZCU1N4UFFVRlBMRmxCUVVFN096dEJRVUZETEVGQlIxb3NaMEpCUVVrc1QwRkJUeXhaUVVGWkxGZEJRVmNzU1VGQlNTeFBRVUZQTEVOQlFVTXNUMEZCVHl4TFFVRkxMRXRCUVVzc1JVRkJSVHRCUVVNM1JDeDFRa0ZCVHl4MVFrRkJZVHM3TzBGQlFVTXNZVUZIZUVJc1RVRkJUU3hKUVVGSkxFOUJRVThzV1VGQldTeFZRVUZWTEVWQlFVVTdRVUZEZEVNc2QwSkJRVWtzVDBGQlR5eERRVUZETEU5QlFVOHNTMEZCU3l4TlFVRk5MRVZCUVVVN1FVRkROVUlzSzBKQlFVOHNNa0pCUVdsQ0xFTkJRVU03Y1VKQlF6VkNMRTFCUVUwN1FVRkRTQ3dyUWtGQlR5eDFRa0ZCWVN4RFFVRkRPM0ZDUVVONFFqdHBRa0ZEU2pzN08wRkJRVUVzUVVGSFJDeHJRa0ZCVFN4RFFVRkRMR05CUVdNc1EwRkJReXhQUVVGUExFVkJRVVVzVTBGQlV5eEZRVUZGTzBGQlEzUkRMREJDUVVGVkxFVkJRVVVzUzBGQlN6dEJRVU5xUWl4eFFrRkJTeXhGUVVGRkxFOUJRVTg3WVVGRGFrSXNRMEZCUXl4RFFVRkRPenRCUVVWSUxHMUNRVUZQTEU5QlFVOHNRMEZCUXl4UFFVRlBMRU5CUVVNc1EwRkJRenRUUVVNelFqdERRVU5LSWl3aVptbHNaU0k2SW1KcGJtUXRZV1JoY0hSbGNpNXFjeUlzSW5OdmRYSmpaVkp2YjNRaU9pSXZWWE5sY25NdlRXRjBkRkJsY25KNUwxTnBkR1Z6TDNCdmNHMXZkR2x2YmlJc0luTnZkWEpqWlhORGIyNTBaVzUwSWpwYkltbHRjRzl5ZENCamMzTkJaR0Z3ZEdWeUlHWnliMjBnSnk0dUwyRmtZWEIwWlhJdlkzTnpMV0ZrWVhCMFpYSW5PMXh1YVcxd2IzSjBJSE4yWjBGa1lYQjBaWElnWm5KdmJTQW5MaTR2WVdSaGNIUmxjaTl6ZG1jdFlXUmhjSFJsY2ljN1hHNXBiWEJ2Y25RZ2MzWm5VR0YwYUVGa1lYQjBaWElnWm5KdmJTQW5MaTR2WVdSaGNIUmxjaTl6ZG1jdGNHRjBhQzFoWkdGd2RHVnlKenRjYmx4dVkyOXVjM1FnVTBGV1JWOVFVazlRSUQwZ0oxOWZjRzFmWVdSaGNIUmxjaWM3WEc1Y2JtVjRjRzl5ZENCa1pXWmhkV3gwSUNobGJHVnRaVzUwS1NBOVBpQjdYRzRnSUNBZ0x5OGdVbVYwZFhKdUlHSnZkVzVrSUdGa1lYQjBaWElnYVdZZ2NISmxjMlZ1ZEZ4dUlDQWdJR2xtSUNobGJHVnRaVzUwVzFOQlZrVmZVRkpQVUYwcElIdGNiaUFnSUNBZ0lDQWdjbVYwZFhKdUlHVnNaVzFsYm5SYlUwRldSVjlRVWs5UVhUdGNibHh1SUNBZ0lDOHZJRTl5SUdSbGRHVmpkQ0JoYm1RZ1ltbHVaQ0JoWkdGd2RHVnlYRzRnSUNBZ2ZTQmxiSE5sSUh0Y2JpQWdJQ0FnSUNBZ2JHVjBJR0ZrWVhCMFpYSTdYRzVjYmlBZ0lDQWdJQ0FnTHk4Z1NXWWdTRlJOVEVWc1pXMWxiblFnYkc5aFpDQkRVMU5jYmlBZ0lDQWdJQ0FnYVdZZ0tHVnNaVzFsYm5RZ2FXNXpkR0Z1WTJWdlppQklWRTFNUld4bGJXVnVkQ0I4ZkNCbGJHVnRaVzUwTG5SaFowNWhiV1VnUFQwOUlDZHpkbWNuS1NCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0JoWkdGd2RHVnlJRDBnWTNOelFXUmhjSFJsY2p0Y2JseHVJQ0FnSUNBZ0lDQXZMeUJQY2lCVFZrZGNiaUFnSUNBZ0lDQWdmU0JsYkhObElHbG1JQ2hsYkdWdFpXNTBJR2x1YzNSaGJtTmxiMllnVTFaSFJXeGxiV1Z1ZENrZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnYVdZZ0tHVnNaVzFsYm5RdWRHRm5UbUZ0WlNBOVBUMGdKM0JoZEdnbktTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdZV1JoY0hSbGNpQTlJSE4yWjFCaGRHaEJaR0Z3ZEdWeU8xeHVJQ0FnSUNBZ0lDQWdJQ0FnZlNCbGJITmxJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0JoWkdGd2RHVnlJRDBnYzNablFXUmhjSFJsY2p0Y2JpQWdJQ0FnSUNBZ0lDQWdJSDFjYmlBZ0lDQWdJQ0FnZlZ4dVhHNGdJQ0FnSUNBZ0lDOHZJRUpwYm1RZ1lXUmhjSFJsY2lCMGJ5QmxiR1Z0Wlc1MFhHNGdJQ0FnSUNBZ0lFOWlhbVZqZEM1a1pXWnBibVZRY205d1pYSjBlU2hsYkdWdFpXNTBMQ0JUUVZaRlgxQlNUMUFzSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJR1Z1ZFcxbGNtRmliR1U2SUdaaGJITmxMRnh1SUNBZ0lDQWdJQ0FnSUNBZ2RtRnNkV1U2SUdGa1lYQjBaWEpjYmlBZ0lDQWdJQ0FnZlNrN1hHNWNiaUFnSUNBZ0lDQWdjbVYwZFhKdUlHRmtZWEIwWlhJb1pXeGxiV1Z1ZENrN1hHNGdJQ0FnZlZ4dWZUdGNiaUpkZlE9PVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvaW5jL2JpbmQtYWRhcHRlci5qc1xuICoqIG1vZHVsZSBpZCA9IDQ5XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG4vKlxuICAgIERldGVjdCBhbmQgbG9hZCBhbiBhcHByb3ByaWF0ZSBjbG9jayBzZXR0aW5nIGZvciB0aGUgZW52aXJvbm1lbnRcbiovXG5cbnZhciBoYXNSQUYgPSB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lID8gdHJ1ZSA6IGZhbHNlO1xuXG52YXIgdGljayA9IHVuZGVmaW5lZDtcblxuaWYgKGhhc1JBRikge1xuICAgIHRpY2sgPSBmdW5jdGlvbiAoY2FsbGJhY2spIHtcbiAgICAgICAgcmV0dXJuIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoY2FsbGJhY2spO1xuICAgIH07XG59IGVsc2Uge1xuICAgIChmdW5jdGlvbiAoKSB7XG4gICAgICAgIC8qXG4gICAgICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUgcG9seWZpbGxcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgRm9yIElFOC85IEZsaW5zdG9uZXMgYW5kIG5vbi1icm93c2VyIGVudmlyb25tZW50c1xuICAgICAgICAgICAgIFRha2VuIGZyb20gUGF1bCBJcmlzaC4gV2UndmUgc3RyaXBwZWQgb3V0IGNhbmNlbEFuaW1hdGlvbkZyYW1lIGNoZWNrcyBiZWNhdXNlIHdlIGRvbid0IGZveCB3aXRoIHRoYXRcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgaHR0cDovL3BhdWxpcmlzaC5jb20vMjAxMS9yZXF1ZXN0YW5pbWF0aW9uZnJhbWUtZm9yLXNtYXJ0LWFuaW1hdGluZy9cbiAgICAgICAgICAgIGh0dHA6Ly9teS5vcGVyYS5jb20vZW1vbGxlci9ibG9nLzIwMTEvMTIvMjAvcmVxdWVzdGFuaW1hdGlvbmZyYW1lLWZvci1zbWFydC1lci1hbmltYXRpbmdcbiAgICAgICAgICAgICBcbiAgICAgICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSBwb2x5ZmlsbCBieSBFcmlrIE3DtmxsZXIuIGZpeGVzIGZyb20gUGF1bCBJcmlzaCBhbmQgVGlubyBaaWpkZWxcbiAgICAgICAgICAgICBcbiAgICAgICAgICAgIE1JVCBsaWNlbnNlXG4gICAgICAgICovXG4gICAgICAgIHZhciBsYXN0VGltZSA9IDA7XG5cbiAgICAgICAgdGljayA9IGZ1bmN0aW9uIChjYWxsYmFjaykge1xuICAgICAgICAgICAgdmFyIGN1cnJlbnRUaW1lID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XG4gICAgICAgICAgICB2YXIgdGltZVRvQ2FsbCA9IE1hdGgubWF4KDAsIDE2IC0gKGN1cnJlbnRUaW1lIC0gbGFzdFRpbWUpKTtcblxuICAgICAgICAgICAgbGFzdFRpbWUgPSBjdXJyZW50VGltZSArIHRpbWVUb0NhbGw7XG5cbiAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBjYWxsYmFjayhsYXN0VGltZSk7XG4gICAgICAgICAgICB9LCB0aW1lVG9DYWxsKTtcbiAgICAgICAgfTtcbiAgICB9KSgpO1xufVxuXG5leHBvcnRzLmRlZmF1bHQgPSB0aWNrO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluTnlZeTl3Y205alpYTnpMM1JwWTJzdWFuTWlYU3dpYm1GdFpYTWlPbHRkTENKdFlYQndhVzVuY3lJNklqczdPenM3T3p0QlFVbEJMRWxCUVUwc1RVRkJUU3hIUVVGSExFRkJRVU1zVDBGQlR5eE5RVUZOTEV0QlFVc3NWMEZCVnl4SlFVRkpMRTFCUVUwc1EwRkJReXh4UWtGQmNVSXNSMEZCU1N4SlFVRkpMRWRCUVVjc1MwRkJTeXhEUVVGRE96dEJRVVU1Uml4SlFVRkpMRWxCUVVrc1dVRkJRU3hEUVVGRE96dEJRVVZVTEVsQlFVa3NUVUZCVFN4RlFVRkZPMEZCUTFJc1VVRkJTU3hIUVVGSExGVkJRVU1zVVVGQlVUdGxRVUZMTEUxQlFVMHNRMEZCUXl4eFFrRkJjVUlzUTBGQlF5eFJRVUZSTEVOQlFVTTdTMEZCUVN4RFFVRkRPME5CUlM5RUxFMUJRVTA3T3pzN096czdPenM3T3pzN096dEJRV1ZJTEZsQlFVa3NVVUZCVVN4SFFVRkhMRU5CUVVNc1EwRkJRenM3UVVGRmFrSXNXVUZCU1N4SFFVRkhMRlZCUVVNc1VVRkJVU3hGUVVGTE8wRkJRMnBDTEdkQ1FVRk5MRmRCUVZjc1IwRkJSeXhKUVVGSkxFbEJRVWtzUlVGQlJTeERRVUZETEU5QlFVOHNSVUZCUlN4RFFVRkRPMEZCUTNwRExHZENRVUZOTEZWQlFWVXNSMEZCUnl4SlFVRkpMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU1zUlVGQlJTeEZRVUZGTEVsQlFVa3NWMEZCVnl4SFFVRkhMRkZCUVZFc1EwRkJRU3hCUVVGRExFTkJRVU1zUTBGQlF6czdRVUZGT1VRc2IwSkJRVkVzUjBGQlJ5eFhRVUZYTEVkQlFVY3NWVUZCVlN4RFFVRkRPenRCUVVWd1F5eHpRa0ZCVlN4RFFVRkRPM1ZDUVVGTkxGRkJRVkVzUTBGQlF5eFJRVUZSTEVOQlFVTTdZVUZCUVN4RlFVRkZMRlZCUVZVc1EwRkJReXhEUVVGRE8xTkJRM0JFTEVOQlFVTTdPME5CUTB3N08ydENRVVZqTEVsQlFVa2lMQ0ptYVd4bElqb2lkR2xqYXk1cWN5SXNJbk52ZFhKalpWSnZiM1FpT2lJdlZYTmxjbk12VFdGMGRGQmxjbko1TDFOcGRHVnpMM0J2Y0cxdmRHbHZiaUlzSW5OdmRYSmpaWE5EYjI1MFpXNTBJanBiSWk4cVhHNGdJQ0FnUkdWMFpXTjBJR0Z1WkNCc2IyRmtJR0Z1SUdGd2NISnZjSEpwWVhSbElHTnNiMk5ySUhObGRIUnBibWNnWm05eUlIUm9aU0JsYm5acGNtOXViV1Z1ZEZ4dUtpOWNibHh1WTI5dWMzUWdhR0Z6VWtGR0lEMGdLSFI1Y0dWdlppQjNhVzVrYjNjZ0lUMDlJQ2QxYm1SbFptbHVaV1FuSUNZbUlIZHBibVJ2ZHk1eVpYRjFaWE4wUVc1cGJXRjBhVzl1Um5KaGJXVXBJRDhnZEhKMVpTQTZJR1poYkhObE8xeHVYRzVzWlhRZ2RHbGphenRjYmx4dWFXWWdLR2hoYzFKQlJpa2dlMXh1SUNBZ0lIUnBZMnNnUFNBb1kyRnNiR0poWTJzcElEMCtJSGRwYm1SdmR5NXlaWEYxWlhOMFFXNXBiV0YwYVc5dVJuSmhiV1VvWTJGc2JHSmhZMnNwTzF4dVhHNTlJR1ZzYzJVZ2UxeHVJQ0FnSUM4cVhHNGdJQ0FnSUNBZ0lISmxjWFZsYzNSQmJtbHRZWFJwYjI1R2NtRnRaU0J3YjJ4NVptbHNiRnh1SUNBZ0lDQWdJQ0JjYmlBZ0lDQWdJQ0FnUm05eUlFbEZPQzg1SUVac2FXNXpkRzl1WlhNZ1lXNWtJRzV2YmkxaWNtOTNjMlZ5SUdWdWRtbHliMjV0Wlc1MGMxeHVYRzRnSUNBZ0lDQWdJRlJoYTJWdUlHWnliMjBnVUdGMWJDQkpjbWx6YUM0Z1YyVW5kbVVnYzNSeWFYQndaV1FnYjNWMElHTmhibU5sYkVGdWFXMWhkR2x2YmtaeVlXMWxJR05vWldOcmN5QmlaV05oZFhObElIZGxJR1J2YmlkMElHWnZlQ0IzYVhSb0lIUm9ZWFJjYmlBZ0lDQWdJQ0FnWEc0Z0lDQWdJQ0FnSUdoMGRIQTZMeTl3WVhWc2FYSnBjMmd1WTI5dEx6SXdNVEV2Y21WeGRXVnpkR0Z1YVcxaGRHbHZibVp5WVcxbExXWnZjaTF6YldGeWRDMWhibWx0WVhScGJtY3ZYRzRnSUNBZ0lDQWdJR2gwZEhBNkx5OXRlUzV2Y0dWeVlTNWpiMjB2WlcxdmJHeGxjaTlpYkc5bkx6SXdNVEV2TVRJdk1qQXZjbVZ4ZFdWemRHRnVhVzFoZEdsdmJtWnlZVzFsTFdadmNpMXpiV0Z5ZEMxbGNpMWhibWx0WVhScGJtZGNiaUFnSUNBZ0lDQWdJRnh1SUNBZ0lDQWdJQ0J5WlhGMVpYTjBRVzVwYldGMGFXOXVSbkpoYldVZ2NHOXNlV1pwYkd3Z1lua2dSWEpwYXlCTnc3WnNiR1Z5TGlCbWFYaGxjeUJtY205dElGQmhkV3dnU1hKcGMyZ2dZVzVrSUZScGJtOGdXbWxxWkdWc1hHNGdJQ0FnSUNBZ0lDQmNiaUFnSUNBZ0lDQWdUVWxVSUd4cFkyVnVjMlZjYmlBZ0lDQXFMMXh1SUNBZ0lHeGxkQ0JzWVhOMFZHbHRaU0E5SURBN1hHNWNiaUFnSUNCMGFXTnJJRDBnS0dOaGJHeGlZV05yS1NBOVBpQjdYRzRnSUNBZ0lDQWdJR052Ym5OMElHTjFjbkpsYm5SVWFXMWxJRDBnYm1WM0lFUmhkR1VvS1M1blpYUlVhVzFsS0NrN1hHNGdJQ0FnSUNBZ0lHTnZibk4wSUhScGJXVlViME5oYkd3Z1BTQk5ZWFJvTG0xaGVDZ3dMQ0F4TmlBdElDaGpkWEp5Wlc1MFZHbHRaU0F0SUd4aGMzUlVhVzFsS1NrN1hHNWNiaUFnSUNBZ0lDQWdiR0Z6ZEZScGJXVWdQU0JqZFhKeVpXNTBWR2x0WlNBcklIUnBiV1ZVYjBOaGJHdzdYRzVjYmlBZ0lDQWdJQ0FnYzJWMFZHbHRaVzkxZENnb0tTQTlQaUJqWVd4c1ltRmpheWhzWVhOMFZHbHRaU2tzSUhScGJXVlViME5oYkd3cE8xeHVJQ0FnSUgwN1hHNTlYRzVjYm1WNGNHOXlkQ0JrWldaaGRXeDBJSFJwWTJzN0lsMTlcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL3Byb2Nlc3MvdGljay5qc1xuICoqIG1vZHVsZSBpZCA9IDUwXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbi8vIFtpbnRdOiBJbmNyZW1lbnRlZCBmb3IgZWFjaCBuZXcgcnVubmluZyBwcm9jZXNzXG52YXIgY3VycmVudFByb2Nlc3NJZCA9IDA7XG5cbi8vIFtpbnRdOiBOdW1iZXIgb2YgYWxsIHJ1bm5pbmcgcHJvY2Vzc2VzXG52YXIgdG90YWxSdW5uaW5nQ291bnQgPSAwO1xuXG4vLyBbaW50XTogTnVtYmVyIG9mIHJ1bm5pbmcgcHJvY2Vzc2VzIGV4Y2x1ZGluZyBiYWNrZ3JvdW5kIHByb2Nlc3Nlc1xudmFyIG5vbkJhY2tncm91bmRSdW5uaW5nQ291bnQgPSAwO1xuXG4vLyBbYXJyYXldOiBBcnJheSBvZiBydW5uaW5nIHByb2Nlc3MgSURzXG52YXIgcnVubmluZ0lkcyA9IFtdO1xuXG4vLyBbb2JqZWN0XTogTWFwIG9mIHJ1bm5pbmcgcHJvY2Vzc2VzXG52YXIgYWN0aXZlUHJvY2Vzc2VzID0ge307XG5cbi8vIFthcnJheV06IEFycmF5IG9mIHByb2Nlc3MgSURzIHF1ZXVlZCBmb3IgYWN0aXZhdGlvblxudmFyIGFjdGl2YXRlUXVldWUgPSBbXTtcblxuLy8gW2FycmF5XTogQXJyYXkgb2YgcHJvY2VzcyBJRHMgcXVldWVkIGZvciBkZWFjdGl2YXRpb25cbnZhciBkZWFjdGl2YXRlUXVldWUgPSBbXTtcblxuLypcbiAgICBVcGRhdGUgYWN0aXZhdGUvZGVhY3RpdmF0ZSBxdWV1ZXNcblxuICAgIEBwYXJhbSBbbnVtYmVyXVxuICAgIEBwYXJhbSBbYXJyYXldXG4gICAgQHBhcmFtIFthcnJheV1cbiovXG52YXIgdXBkYXRlUXVldWVzID0gZnVuY3Rpb24gKGlkLCBpbkxpc3QsIG91dExpc3QpIHtcbiAgICB2YXIgaW5Qb3NpdGlvbiA9IGluTGlzdC5pbmRleE9mKGlkKTtcbiAgICB2YXIgb3V0UG9zaXRpb24gPSBvdXRMaXN0LmluZGV4T2YoaWQpO1xuXG4gICAgaWYgKGluUG9zaXRpb24gPT09IC0xKSB7XG4gICAgICAgIGluTGlzdC5wdXNoKGlkKTtcbiAgICB9XG5cbiAgICBpZiAob3V0UG9zaXRpb24gPiAtMSkge1xuICAgICAgICBvdXRMaXN0LnNwbGljZShvdXRQb3NpdGlvbiwgMSk7XG4gICAgfVxufTtcblxuLypcbiAgICBVcGRhdGUgcnVubmluZ1xuXG4gICAgW2Jvb2xlYW5dOiBgdHJ1ZWAgdG8gYWRkXG4gICAgW2Jvb2xlYW5dOiBgdHJ1ZWAgaWYgbGF6eVxuKi9cbnZhciB1cGRhdGVSdW5uaW5nQ291bnQgPSBmdW5jdGlvbiAoYWRkLCBpc0xhenkpIHtcbiAgICB2YXIgbW9kaWZ5ID0gYWRkID8gMSA6IC0xO1xuXG4gICAgdG90YWxSdW5uaW5nQ291bnQgKz0gbW9kaWZ5O1xuXG4gICAgaWYgKCFpc0xhenkpIHtcbiAgICAgICAgbm9uQmFja2dyb3VuZFJ1bm5pbmdDb3VudCArPSBtb2RpZnk7XG4gICAgfVxufTtcblxuZXhwb3J0cy5kZWZhdWx0ID0ge1xuICAgIGFjdGl2ZVByb2Nlc3NlczogYWN0aXZlUHJvY2Vzc2VzLFxuXG4gICAgLy8gQWN0aXZhdGUgYSBwcm9jZXNzXG4gICAgYWN0aXZhdGU6IGZ1bmN0aW9uIChpZCwgcHJvY2Vzcykge1xuICAgICAgICBhY3RpdmVQcm9jZXNzZXNbaWRdID0gcHJvY2VzcztcbiAgICAgICAgcHJvY2Vzcy5pc0FjdGl2ZSA9IHRydWU7XG4gICAgICAgIHVwZGF0ZVF1ZXVlcyhpZCwgYWN0aXZhdGVRdWV1ZSwgZGVhY3RpdmF0ZVF1ZXVlKTtcbiAgICB9LFxuXG4gICAgLy8gRGVhY3RpdmF0ZSBhIHByb2Nlc3NcbiAgICBkZWFjdGl2YXRlOiBmdW5jdGlvbiAoaWQpIHtcbiAgICAgICAgcHJvY2Vzcy5pc0FjdGl2ZSA9IGZhbHNlO1xuICAgICAgICB1cGRhdGVRdWV1ZXMoaWQsIGRlYWN0aXZhdGVRdWV1ZSwgYWN0aXZhdGVRdWV1ZSk7XG4gICAgfSxcblxuICAgIC8vIE51bWJlciBiYWNrZ3JvdW5kIHByb2Nlc3Nlc1xuICAgIGdldE5vbkJhY2tncm91bmRSdW5uaW5nQ291bnQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIG5vbkJhY2tncm91bmRSdW5uaW5nQ291bnQ7XG4gICAgfSxcblxuICAgIC8vIEluY3JlbWVudCBjdXJyZW50IHByb2Nlc3MgSUQgYW5kIHJldHVyblxuICAgIGdldFByb2Nlc3NJZDogZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gY3VycmVudFByb2Nlc3NJZCsrO1xuICAgIH0sXG5cbiAgICAvLyBSZXNvbHZlIGFjdGl2YXRlL2RlYWN0aXZhdGUgcHJvY2Vzc2VzIGFuZCByZXR1cm4gYWN0aXZlIGlkc1xuICAgIGdldEFjdGl2ZUlkczogZnVuY3Rpb24gKCkge1xuICAgICAgICAvKlxuICAgICAgICAgICAgUHJvY2VzcyBkZWFjdGl2YXRlIHF1ZXVlXG4gICAgICAgICovXG4gICAgICAgIHZhciBkZWFjdGl2YXRlUXVldWVMZW5ndGggPSBkZWFjdGl2YXRlUXVldWUubGVuZ3RoO1xuXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZGVhY3RpdmF0ZVF1ZXVlTGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHZhciBpZCA9IGRlYWN0aXZhdGVRdWV1ZVtpXTtcbiAgICAgICAgICAgIHZhciBhY3RpdmVJZEluZGV4ID0gcnVubmluZ0lkcy5pbmRleE9mKGlkKTtcbiAgICAgICAgICAgIHZhciBfcHJvY2VzcyA9IGFjdGl2ZVByb2Nlc3Nlc1tpZF07XG5cbiAgICAgICAgICAgIC8vIElmIHRoaXMgaXMgYSBydW5uaW5nIHByb2Nlc3MsIGRlYWN0aXZhdGVcbiAgICAgICAgICAgIGlmIChhY3RpdmVJZEluZGV4ID4gLTEpIHtcbiAgICAgICAgICAgICAgICBydW5uaW5nSWRzLnNwbGljZShhY3RpdmVJZEluZGV4LCAxKTtcbiAgICAgICAgICAgICAgICB1cGRhdGVSdW5uaW5nQ291bnQoZmFsc2UsIF9wcm9jZXNzLmlzTGF6eSk7XG4gICAgICAgICAgICAgICAgZGVsZXRlIGFjdGl2ZVByb2Nlc3Nlc1tpZF07XG5cbiAgICAgICAgICAgICAgICBpZiAoX3Byb2Nlc3Mub25EZWFjdGl2YXRlKSB7XG4gICAgICAgICAgICAgICAgICAgIF9wcm9jZXNzLm9uRGVhY3RpdmF0ZShfcHJvY2Vzcyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLypcbiAgICAgICAgICAgIEVtcHR5IGRlYWN0aXZhdGUgcXVldWUuIFdlIHVzZSBgQXJyYXkuc3BsaWNlYCBiZWNhdXNlIGl0IGRvZXNuJ3RcbiAgICAgICAgICAgIHdvcmtzIG9uIHRoZSBvcmlnaW5hbCBhcnJheSBzbyB3ZSBkb24ndCBoYXZlIHRvIGdhcmJhZ2UgY29sbGVjdCBhbnl0aGluZ1xuICAgICAgICAqL1xuICAgICAgICBkZWFjdGl2YXRlUXVldWUuc3BsaWNlKDAsIGRlYWN0aXZhdGVRdWV1ZUxlbmd0aCk7XG5cbiAgICAgICAgLypcbiAgICAgICAgICAgIFByb2Nlc3MgYWN0aXZhdGUgcXVldWVcbiAgICAgICAgKi9cbiAgICAgICAgdmFyIGFjdGl2YXRlUXVldWVMZW5ndGggPSBhY3RpdmF0ZVF1ZXVlLmxlbmd0aDtcblxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFjdGl2YXRlUXVldWVMZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdmFyIGlkID0gYWN0aXZhdGVRdWV1ZVtpXTtcbiAgICAgICAgICAgIHZhciBhY3RpdmVJZEluZGV4ID0gcnVubmluZ0lkcy5pbmRleE9mKGlkKTtcbiAgICAgICAgICAgIHZhciBfcHJvY2VzczIgPSBhY3RpdmVQcm9jZXNzZXNbaWRdO1xuXG4gICAgICAgICAgICAvLyBJZiBwcm9jZXNzIGlzbid0IGFscmVhZHkgcnVubmluZywgYWN0aXZhdGVcbiAgICAgICAgICAgIGlmIChhY3RpdmVJZEluZGV4ID09PSAtMSAmJiBfcHJvY2VzczIpIHtcbiAgICAgICAgICAgICAgICBpZiAoX3Byb2Nlc3MyLmlzUHJpb3JpdHkpIHtcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ0lkcy51bnNoaWZ0KGlkKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBydW5uaW5nSWRzLnB1c2goaWQpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHVwZGF0ZVJ1bm5pbmdDb3VudCh0cnVlLCBfcHJvY2VzczIuaXNMYXp5KTtcblxuICAgICAgICAgICAgICAgIGlmIChfcHJvY2VzczIub25BY3RpdmF0ZSkge1xuICAgICAgICAgICAgICAgICAgICBfcHJvY2VzczIub25BY3RpdmF0ZShfcHJvY2VzczIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGFjdGl2YXRlUXVldWUuc3BsaWNlKDAsIGFjdGl2YXRlUXVldWVMZW5ndGgpO1xuXG4gICAgICAgIHJldHVybiBydW5uaW5nSWRzO1xuICAgIH1cbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5OeVl5OXdjbTlqWlhOekwyMWhibUZuWlhJdWFuTWlYU3dpYm1GdFpYTWlPbHRkTENKdFlYQndhVzVuY3lJNklqczdPenRCUVVOQkxFbEJRVWtzWjBKQlFXZENMRWRCUVVjc1EwRkJRenM3TzBGQlFVTXNRVUZIZWtJc1NVRkJTU3hwUWtGQmFVSXNSMEZCUnl4RFFVRkRPenM3UVVGQlF5eEJRVWN4UWl4SlFVRkpMSGxDUVVGNVFpeEhRVUZITEVOQlFVTTdPenRCUVVGRExFRkJSMnhETEVsQlFVMHNWVUZCVlN4SFFVRkhMRVZCUVVVN096dEJRVUZETEVGQlIzUkNMRWxCUVUwc1pVRkJaU3hIUVVGSExFVkJRVVU3T3p0QlFVRkRMRUZCUnpOQ0xFbEJRVTBzWVVGQllTeEhRVUZITEVWQlFVVTdPenRCUVVGRExFRkJSM3BDTEVsQlFVMHNaVUZCWlN4SFFVRkhMRVZCUVVVN096czdPenM3T3p0QlFVRkRMRUZCVXpOQ0xFbEJRVTBzV1VGQldTeEhRVUZITEZWQlFVTXNSVUZCUlN4RlFVRkZMRTFCUVUwc1JVRkJSU3hQUVVGUExFVkJRVXM3UVVGRE1VTXNVVUZCVFN4VlFVRlZMRWRCUVVjc1RVRkJUU3hEUVVGRExFOUJRVThzUTBGQlF5eEZRVUZGTEVOQlFVTXNRMEZCUXp0QlFVTjBReXhSUVVGTkxGZEJRVmNzUjBGQlJ5eFBRVUZQTEVOQlFVTXNUMEZCVHl4RFFVRkRMRVZCUVVVc1EwRkJReXhEUVVGRE96dEJRVVY0UXl4UlFVRkpMRlZCUVZVc1MwRkJTeXhEUVVGRExFTkJRVU1zUlVGQlJUdEJRVU51UWl4alFVRk5MRU5CUVVNc1NVRkJTU3hEUVVGRExFVkJRVVVzUTBGQlF5eERRVUZETzB0QlEyNUNPenRCUVVWRUxGRkJRVWtzVjBGQlZ5eEhRVUZITEVOQlFVTXNRMEZCUXl4RlFVRkZPMEZCUTJ4Q0xHVkJRVThzUTBGQlF5eE5RVUZOTEVOQlFVTXNWMEZCVnl4RlFVRkZMRU5CUVVNc1EwRkJReXhEUVVGRE8wdEJRMnhETzBOQlEwbzdPenM3T3pzN08wRkJRVU1zUVVGUlJpeEpRVUZOTEd0Q1FVRnJRaXhIUVVGSExGVkJRVU1zUjBGQlJ5eEZRVUZGTEUxQlFVMHNSVUZCU3p0QlFVTjRReXhSUVVGTkxFMUJRVTBzUjBGQlJ5eEhRVUZITEVkQlFVY3NRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJReXhEUVVGRE96dEJRVVUxUWl4eFFrRkJhVUlzU1VGQlNTeE5RVUZOTEVOQlFVTTdPMEZCUlRWQ0xGRkJRVWtzUTBGQlF5eE5RVUZOTEVWQlFVVTdRVUZEVkN4cFEwRkJlVUlzU1VGQlNTeE5RVUZOTEVOQlFVTTdTMEZEZGtNN1EwRkRTaXhEUVVGRE96dHJRa0ZGWVR0QlFVTllMRzFDUVVGbExFVkJRV1lzWlVGQlpUczdPMEZCUjJZc1dVRkJVU3hGUVVGRkxGVkJRVU1zUlVGQlJTeEZRVUZGTEU5QlFVOHNSVUZCU3p0QlFVTjJRaXgxUWtGQlpTeERRVUZETEVWQlFVVXNRMEZCUXl4SFFVRkhMRTlCUVU4c1EwRkJRenRCUVVNNVFpeGxRVUZQTEVOQlFVTXNVVUZCVVN4SFFVRkhMRWxCUVVrc1EwRkJRenRCUVVONFFpeHZRa0ZCV1N4RFFVRkRMRVZCUVVVc1JVRkJSU3hoUVVGaExFVkJRVVVzWlVGQlpTeERRVUZETEVOQlFVTTdTMEZEY0VRN096dEJRVWRFTEdOQlFWVXNSVUZCUlN4VlFVRkRMRVZCUVVVc1JVRkJTenRCUVVOb1FpeGxRVUZQTEVOQlFVTXNVVUZCVVN4SFFVRkhMRXRCUVVzc1EwRkJRenRCUVVONlFpeHZRa0ZCV1N4RFFVRkRMRVZCUVVVc1JVRkJSU3hsUVVGbExFVkJRVVVzWVVGQllTeERRVUZETEVOQlFVTTdTMEZEY0VRN096dEJRVWRFTEdkRFFVRTBRaXhGUVVGRk8yVkJRVTBzZVVKQlFYbENPMHRCUVVFN096dEJRVWMzUkN4blFrRkJXU3hGUVVGRk8yVkJRVTBzWjBKQlFXZENMRVZCUVVVN1MwRkJRVHM3TzBGQlIzUkRMR2RDUVVGWkxFVkJRVVVzV1VGQlRUczdPenRCUVVsb1FpeFpRVUZOTEhGQ1FVRnhRaXhIUVVGSExHVkJRV1VzUTBGQlF5eE5RVUZOTEVOQlFVTTdPMEZCUlhKRUxHRkJRVXNzU1VGQlNTeERRVUZETEVkQlFVY3NRMEZCUXl4RlFVRkZMRU5CUVVNc1IwRkJSeXh4UWtGQmNVSXNSVUZCUlN4RFFVRkRMRVZCUVVVc1JVRkJSVHRCUVVNMVF5eG5Ra0ZCVFN4RlFVRkZMRWRCUVVjc1pVRkJaU3hEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETzBGQlF6bENMR2RDUVVGTkxHRkJRV0VzUjBGQlJ5eFZRVUZWTEVOQlFVTXNUMEZCVHl4RFFVRkRMRVZCUVVVc1EwRkJReXhEUVVGRE8wRkJRemRETEdkQ1FVRk5MRkZCUVU4c1IwRkJSeXhsUVVGbExFTkJRVU1zUlVGQlJTeERRVUZET3pzN1FVRkJReXhCUVVkd1F5eG5Ra0ZCU1N4aFFVRmhMRWRCUVVjc1EwRkJReXhEUVVGRExFVkJRVVU3UVVGRGNFSXNNRUpCUVZVc1EwRkJReXhOUVVGTkxFTkJRVU1zWVVGQllTeEZRVUZGTEVOQlFVTXNRMEZCUXl4RFFVRkRPMEZCUTNCRExHdERRVUZyUWl4RFFVRkRMRXRCUVVzc1JVRkJSU3hSUVVGUExFTkJRVU1zVFVGQlRTeERRVUZETEVOQlFVTTdRVUZETVVNc2RVSkJRVThzWlVGQlpTeERRVUZETEVWQlFVVXNRMEZCUXl4RFFVRkRPenRCUVVVelFpeHZRa0ZCU1N4UlFVRlBMRU5CUVVNc1dVRkJXU3hGUVVGRk8wRkJRM1JDTERSQ1FVRlBMRU5CUVVNc1dVRkJXU3hEUVVGRExGRkJRVThzUTBGQlF5eERRVUZETzJsQ1FVTnFRenRoUVVOS08xTkJRMG83T3pzN096dEJRVUZCTEVGQlRVUXNkVUpCUVdVc1EwRkJReXhOUVVGTkxFTkJRVU1zUTBGQlF5eEZRVUZGTEhGQ1FVRnhRaXhEUVVGRE96czdPenRCUVVGRExFRkJTMnBFTEZsQlFVMHNiVUpCUVcxQ0xFZEJRVWNzWVVGQllTeERRVUZETEUxQlFVMHNRMEZCUXpzN1FVRkZha1FzWVVGQlN5eEpRVUZKTEVOQlFVTXNSMEZCUnl4RFFVRkRMRVZCUVVVc1EwRkJReXhIUVVGSExHMUNRVUZ0UWl4RlFVRkZMRU5CUVVNc1JVRkJSU3hGUVVGRk8wRkJRekZETEdkQ1FVRk5MRVZCUVVVc1IwRkJSeXhoUVVGaExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTTdRVUZETlVJc1owSkJRVTBzWVVGQllTeEhRVUZITEZWQlFWVXNRMEZCUXl4UFFVRlBMRU5CUVVNc1JVRkJSU3hEUVVGRExFTkJRVU03UVVGRE4wTXNaMEpCUVUwc1UwRkJUeXhIUVVGSExHVkJRV1VzUTBGQlF5eEZRVUZGTEVOQlFVTTdPenRCUVVGRExFRkJSM0JETEdkQ1FVRkpMR0ZCUVdFc1MwRkJTeXhEUVVGRExFTkJRVU1zU1VGQlNTeFRRVUZQTEVWQlFVVTdRVUZEYWtNc2IwSkJRVWtzVTBGQlR5eERRVUZETEZWQlFWVXNSVUZCUlR0QlFVTndRaXc0UWtGQlZTeERRVUZETEU5QlFVOHNRMEZCUXl4RlFVRkZMRU5CUVVNc1EwRkJRenRwUWtGRE1VSXNUVUZCVFR0QlFVTklMRGhDUVVGVkxFTkJRVU1zU1VGQlNTeERRVUZETEVWQlFVVXNRMEZCUXl4RFFVRkRPMmxDUVVOMlFqczdRVUZGUkN4clEwRkJhMElzUTBGQlF5eEpRVUZKTEVWQlFVVXNVMEZCVHl4RFFVRkRMRTFCUVUwc1EwRkJReXhEUVVGRE96dEJRVVY2UXl4dlFrRkJTU3hUUVVGUExFTkJRVU1zVlVGQlZTeEZRVUZGTzBGQlEzQkNMRFpDUVVGUExFTkJRVU1zVlVGQlZTeERRVUZETEZOQlFVOHNRMEZCUXl4RFFVRkRPMmxDUVVNdlFqdGhRVU5LTzFOQlEwbzdPMEZCUlVRc2NVSkJRV0VzUTBGQlF5eE5RVUZOTEVOQlFVTXNRMEZCUXl4RlFVRkZMRzFDUVVGdFFpeERRVUZETEVOQlFVTTdPMEZCUlRkRExHVkJRVThzVlVGQlZTeERRVUZETzB0QlEzSkNPME5CUTBvaUxDSm1hV3hsSWpvaWJXRnVZV2RsY2k1cWN5SXNJbk52ZFhKalpWSnZiM1FpT2lJdlZYTmxjbk12VFdGMGRGQmxjbko1TDFOcGRHVnpMM0J2Y0cxdmRHbHZiaUlzSW5OdmRYSmpaWE5EYjI1MFpXNTBJanBiSWk4dklGdHBiblJkT2lCSmJtTnlaVzFsYm5SbFpDQm1iM0lnWldGamFDQnVaWGNnY25WdWJtbHVaeUJ3Y205alpYTnpYRzVzWlhRZ1kzVnljbVZ1ZEZCeWIyTmxjM05KWkNBOUlEQTdYRzVjYmk4dklGdHBiblJkT2lCT2RXMWlaWElnYjJZZ1lXeHNJSEoxYm01cGJtY2djSEp2WTJWemMyVnpYRzVzWlhRZ2RHOTBZV3hTZFc1dWFXNW5RMjkxYm5RZ1BTQXdPMXh1WEc0dkx5QmJhVzUwWFRvZ1RuVnRZbVZ5SUc5bUlISjFibTVwYm1jZ2NISnZZMlZ6YzJWeklHVjRZMngxWkdsdVp5QmlZV05yWjNKdmRXNWtJSEJ5YjJObGMzTmxjMXh1YkdWMElHNXZia0poWTJ0bmNtOTFibVJTZFc1dWFXNW5RMjkxYm5RZ1BTQXdPMXh1WEc0dkx5QmJZWEp5WVhsZE9pQkJjbkpoZVNCdlppQnlkVzV1YVc1bklIQnliMk5sYzNNZ1NVUnpYRzVqYjI1emRDQnlkVzV1YVc1blNXUnpJRDBnVzEwN1hHNWNiaTh2SUZ0dlltcGxZM1JkT2lCTllYQWdiMllnY25WdWJtbHVaeUJ3Y205alpYTnpaWE5jYm1OdmJuTjBJR0ZqZEdsMlpWQnliMk5sYzNObGN5QTlJSHQ5TzF4dVhHNHZMeUJiWVhKeVlYbGRPaUJCY25KaGVTQnZaaUJ3Y205alpYTnpJRWxFY3lCeGRXVjFaV1FnWm05eUlHRmpkR2wyWVhScGIyNWNibU52Ym5OMElHRmpkR2wyWVhSbFVYVmxkV1VnUFNCYlhUdGNibHh1THk4Z1cyRnljbUY1WFRvZ1FYSnlZWGtnYjJZZ2NISnZZMlZ6Y3lCSlJITWdjWFZsZFdWa0lHWnZjaUJrWldGamRHbDJZWFJwYjI1Y2JtTnZibk4wSUdSbFlXTjBhWFpoZEdWUmRXVjFaU0E5SUZ0ZE8xeHVYRzR2S2x4dUlDQWdJRlZ3WkdGMFpTQmhZM1JwZG1GMFpTOWtaV0ZqZEdsMllYUmxJSEYxWlhWbGMxeHVYRzRnSUNBZ1FIQmhjbUZ0SUZ0dWRXMWlaWEpkWEc0Z0lDQWdRSEJoY21GdElGdGhjbkpoZVYxY2JpQWdJQ0JBY0dGeVlXMGdXMkZ5Y21GNVhWeHVLaTljYm1OdmJuTjBJSFZ3WkdGMFpWRjFaWFZsY3lBOUlDaHBaQ3dnYVc1TWFYTjBMQ0J2ZFhSTWFYTjBLU0E5UGlCN1hHNGdJQ0FnWTI5dWMzUWdhVzVRYjNOcGRHbHZiaUE5SUdsdVRHbHpkQzVwYm1SbGVFOW1LR2xrS1R0Y2JpQWdJQ0JqYjI1emRDQnZkWFJRYjNOcGRHbHZiaUE5SUc5MWRFeHBjM1F1YVc1a1pYaFBaaWhwWkNrN1hHNWNiaUFnSUNCcFppQW9hVzVRYjNOcGRHbHZiaUE5UFQwZ0xURXBJSHRjYmlBZ0lDQWdJQ0FnYVc1TWFYTjBMbkIxYzJnb2FXUXBPMXh1SUNBZ0lIMWNibHh1SUNBZ0lHbG1JQ2h2ZFhSUWIzTnBkR2x2YmlBK0lDMHhLU0I3WEc0Z0lDQWdJQ0FnSUc5MWRFeHBjM1F1YzNCc2FXTmxLRzkxZEZCdmMybDBhVzl1TENBeEtUdGNiaUFnSUNCOVhHNTlPMXh1WEc0dktseHVJQ0FnSUZWd1pHRjBaU0J5ZFc1dWFXNW5YRzVjYmlBZ0lDQmJZbTl2YkdWaGJsMDZJR0IwY25WbFlDQjBieUJoWkdSY2JpQWdJQ0JiWW05dmJHVmhibDA2SUdCMGNuVmxZQ0JwWmlCc1lYcDVYRzRxTDF4dVkyOXVjM1FnZFhCa1lYUmxVblZ1Ym1sdVowTnZkVzUwSUQwZ0tHRmtaQ3dnYVhOTVlYcDVLU0E5UGlCN1hHNGdJQ0FnWTI5dWMzUWdiVzlrYVdaNUlEMGdZV1JrSUQ4Z01TQTZJQzB4TzF4dVhHNGdJQ0FnZEc5MFlXeFNkVzV1YVc1blEyOTFiblFnS3owZ2JXOWthV1o1TzF4dVhHNGdJQ0FnYVdZZ0tDRnBjMHhoZW5rcElIdGNiaUFnSUNBZ0lDQWdibTl1UW1GamEyZHliM1Z1WkZKMWJtNXBibWREYjNWdWRDQXJQU0J0YjJScFpuazdYRzRnSUNBZ2ZWeHVmVHRjYmx4dVpYaHdiM0owSUdSbFptRjFiSFFnZTF4dUlDQWdJR0ZqZEdsMlpWQnliMk5sYzNObGN5eGNibHh1SUNBZ0lDOHZJRUZqZEdsMllYUmxJR0VnY0hKdlkyVnpjMXh1SUNBZ0lHRmpkR2wyWVhSbE9pQW9hV1FzSUhCeWIyTmxjM01wSUQwK0lIdGNiaUFnSUNBZ0lDQWdZV04wYVhabFVISnZZMlZ6YzJWelcybGtYU0E5SUhCeWIyTmxjM003WEc0Z0lDQWdJQ0FnSUhCeWIyTmxjM011YVhOQlkzUnBkbVVnUFNCMGNuVmxPMXh1SUNBZ0lDQWdJQ0IxY0dSaGRHVlJkV1YxWlhNb2FXUXNJR0ZqZEdsMllYUmxVWFZsZFdVc0lHUmxZV04wYVhaaGRHVlJkV1YxWlNrN1hHNGdJQ0FnZlN4Y2JseHVJQ0FnSUM4dklFUmxZV04wYVhaaGRHVWdZU0J3Y205alpYTnpYRzRnSUNBZ1pHVmhZM1JwZG1GMFpUb2dLR2xrS1NBOVBpQjdYRzRnSUNBZ0lDQWdJSEJ5YjJObGMzTXVhWE5CWTNScGRtVWdQU0JtWVd4elpUdGNiaUFnSUNBZ0lDQWdkWEJrWVhSbFVYVmxkV1Z6S0dsa0xDQmtaV0ZqZEdsMllYUmxVWFZsZFdVc0lHRmpkR2wyWVhSbFVYVmxkV1VwTzF4dUlDQWdJSDBzWEc1Y2JpQWdJQ0F2THlCT2RXMWlaWElnWW1GamEyZHliM1Z1WkNCd2NtOWpaWE56WlhOY2JpQWdJQ0JuWlhST2IyNUNZV05yWjNKdmRXNWtVblZ1Ym1sdVowTnZkVzUwT2lBb0tTQTlQaUJ1YjI1Q1lXTnJaM0p2ZFc1a1VuVnVibWx1WjBOdmRXNTBMRnh1WEc0Z0lDQWdMeThnU1c1amNtVnRaVzUwSUdOMWNuSmxiblFnY0hKdlkyVnpjeUJKUkNCaGJtUWdjbVYwZFhKdVhHNGdJQ0FnWjJWMFVISnZZMlZ6YzBsa09pQW9LU0E5UGlCamRYSnlaVzUwVUhKdlkyVnpjMGxrS3lzc1hHNWNiaUFnSUNBdkx5QlNaWE52YkhabElHRmpkR2wyWVhSbEwyUmxZV04wYVhaaGRHVWdjSEp2WTJWemMyVnpJR0Z1WkNCeVpYUjFjbTRnWVdOMGFYWmxJR2xrYzF4dUlDQWdJR2RsZEVGamRHbDJaVWxrY3pvZ0tDa2dQVDRnZTF4dUlDQWdJQ0FnSUNBdktseHVJQ0FnSUNBZ0lDQWdJQ0FnVUhKdlkyVnpjeUJrWldGamRHbDJZWFJsSUhGMVpYVmxYRzRnSUNBZ0lDQWdJQ292WEc0Z0lDQWdJQ0FnSUdOdmJuTjBJR1JsWVdOMGFYWmhkR1ZSZFdWMVpVeGxibWQwYUNBOUlHUmxZV04wYVhaaGRHVlJkV1YxWlM1c1pXNW5kR2c3WEc1Y2JpQWdJQ0FnSUNBZ1ptOXlJQ2hzWlhRZ2FTQTlJREE3SUdrZ1BDQmtaV0ZqZEdsMllYUmxVWFZsZFdWTVpXNW5kR2c3SUdrckt5a2dlMXh1SUNBZ0lDQWdJQ0FnSUNBZ1kyOXVjM1FnYVdRZ1BTQmtaV0ZqZEdsMllYUmxVWFZsZFdWYmFWMDdYRzRnSUNBZ0lDQWdJQ0FnSUNCamIyNXpkQ0JoWTNScGRtVkpaRWx1WkdWNElEMGdjblZ1Ym1sdVowbGtjeTVwYm1SbGVFOW1LR2xrS1R0Y2JpQWdJQ0FnSUNBZ0lDQWdJR052Ym5OMElIQnliMk5sYzNNZ1BTQmhZM1JwZG1WUWNtOWpaWE56WlhOYmFXUmRPMXh1WEc0Z0lDQWdJQ0FnSUNBZ0lDQXZMeUJKWmlCMGFHbHpJR2x6SUdFZ2NuVnVibWx1WnlCd2NtOWpaWE56TENCa1pXRmpkR2wyWVhSbFhHNGdJQ0FnSUNBZ0lDQWdJQ0JwWmlBb1lXTjBhWFpsU1dSSmJtUmxlQ0ErSUMweEtTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdjblZ1Ym1sdVowbGtjeTV6Y0d4cFkyVW9ZV04wYVhabFNXUkpibVJsZUN3Z01TazdYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdkWEJrWVhSbFVuVnVibWx1WjBOdmRXNTBLR1poYkhObExDQndjbTlqWlhOekxtbHpUR0Y2ZVNrN1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ1pHVnNaWFJsSUdGamRHbDJaVkJ5YjJObGMzTmxjMXRwWkYwN1hHNWNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQnBaaUFvY0hKdlkyVnpjeTV2YmtSbFlXTjBhWFpoZEdVcElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnY0hKdlkyVnpjeTV2YmtSbFlXTjBhWFpoZEdVb2NISnZZMlZ6Y3lrN1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2ZWeHVJQ0FnSUNBZ0lDQWdJQ0FnZlZ4dUlDQWdJQ0FnSUNCOVhHNWNiaUFnSUNBZ0lDQWdMeXBjYmlBZ0lDQWdJQ0FnSUNBZ0lFVnRjSFI1SUdSbFlXTjBhWFpoZEdVZ2NYVmxkV1V1SUZkbElIVnpaU0JnUVhKeVlYa3VjM0JzYVdObFlDQmlaV05oZFhObElHbDBJR1J2WlhOdUozUmNiaUFnSUNBZ0lDQWdJQ0FnSUhkdmNtdHpJRzl1SUhSb1pTQnZjbWxuYVc1aGJDQmhjbkpoZVNCemJ5QjNaU0JrYjI0bmRDQm9ZWFpsSUhSdklHZGhjbUpoWjJVZ1kyOXNiR1ZqZENCaGJubDBhR2x1WjF4dUlDQWdJQ0FnSUNBcUwxeHVJQ0FnSUNBZ0lDQmtaV0ZqZEdsMllYUmxVWFZsZFdVdWMzQnNhV05sS0RBc0lHUmxZV04wYVhaaGRHVlJkV1YxWlV4bGJtZDBhQ2s3WEc1Y2JpQWdJQ0FnSUNBZ0x5cGNiaUFnSUNBZ0lDQWdJQ0FnSUZCeWIyTmxjM01nWVdOMGFYWmhkR1VnY1hWbGRXVmNiaUFnSUNBZ0lDQWdLaTljYmlBZ0lDQWdJQ0FnWTI5dWMzUWdZV04wYVhaaGRHVlJkV1YxWlV4bGJtZDBhQ0E5SUdGamRHbDJZWFJsVVhWbGRXVXViR1Z1WjNSb08xeHVYRzRnSUNBZ0lDQWdJR1p2Y2lBb2JHVjBJR2tnUFNBd095QnBJRHdnWVdOMGFYWmhkR1ZSZFdWMVpVeGxibWQwYURzZ2FTc3JLU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQmpiMjV6ZENCcFpDQTlJR0ZqZEdsMllYUmxVWFZsZFdWYmFWMDdYRzRnSUNBZ0lDQWdJQ0FnSUNCamIyNXpkQ0JoWTNScGRtVkpaRWx1WkdWNElEMGdjblZ1Ym1sdVowbGtjeTVwYm1SbGVFOW1LR2xrS1R0Y2JpQWdJQ0FnSUNBZ0lDQWdJR052Ym5OMElIQnliMk5sYzNNZ1BTQmhZM1JwZG1WUWNtOWpaWE56WlhOYmFXUmRPMXh1WEc0Z0lDQWdJQ0FnSUNBZ0lDQXZMeUJKWmlCd2NtOWpaWE56SUdsemJpZDBJR0ZzY21WaFpIa2djblZ1Ym1sdVp5d2dZV04wYVhaaGRHVmNiaUFnSUNBZ0lDQWdJQ0FnSUdsbUlDaGhZM1JwZG1WSlpFbHVaR1Y0SUQwOVBTQXRNU0FtSmlCd2NtOWpaWE56S1NCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2FXWWdLSEJ5YjJObGMzTXVhWE5RY21sdmNtbDBlU2tnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQnlkVzV1YVc1blNXUnpMblZ1YzJocFpuUW9hV1FwTzF4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUgwZ1pXeHpaU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lISjFibTVwYm1kSlpITXVjSFZ6YUNocFpDazdYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdmVnh1WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnZFhCa1lYUmxVblZ1Ym1sdVowTnZkVzUwS0hSeWRXVXNJSEJ5YjJObGMzTXVhWE5NWVhwNUtUdGNibHh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJR2xtSUNod2NtOWpaWE56TG05dVFXTjBhWFpoZEdVcElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnY0hKdlkyVnpjeTV2YmtGamRHbDJZWFJsS0hCeWIyTmxjM01wTzF4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUgxY2JpQWdJQ0FnSUNBZ0lDQWdJSDFjYmlBZ0lDQWdJQ0FnZlZ4dVhHNGdJQ0FnSUNBZ0lHRmpkR2wyWVhSbFVYVmxkV1V1YzNCc2FXTmxLREFzSUdGamRHbDJZWFJsVVhWbGRXVk1aVzVuZEdncE8xeHVYRzRnSUNBZ0lDQWdJSEpsZEhWeWJpQnlkVzV1YVc1blNXUnpPMXh1SUNBZ0lIMWNibjA3WEc0aVhYMD1cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL3Byb2Nlc3MvbWFuYWdlci5qc1xuICoqIG1vZHVsZSBpZCA9IDUxXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvLyBzaGltIGZvciB1c2luZyBwcm9jZXNzIGluIGJyb3dzZXJcblxudmFyIHByb2Nlc3MgPSBtb2R1bGUuZXhwb3J0cyA9IHt9O1xudmFyIHF1ZXVlID0gW107XG52YXIgZHJhaW5pbmcgPSBmYWxzZTtcblxuZnVuY3Rpb24gZHJhaW5RdWV1ZSgpIHtcbiAgICBpZiAoZHJhaW5pbmcpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBkcmFpbmluZyA9IHRydWU7XG4gICAgdmFyIGN1cnJlbnRRdWV1ZTtcbiAgICB2YXIgbGVuID0gcXVldWUubGVuZ3RoO1xuICAgIHdoaWxlKGxlbikge1xuICAgICAgICBjdXJyZW50UXVldWUgPSBxdWV1ZTtcbiAgICAgICAgcXVldWUgPSBbXTtcbiAgICAgICAgdmFyIGkgPSAtMTtcbiAgICAgICAgd2hpbGUgKCsraSA8IGxlbikge1xuICAgICAgICAgICAgY3VycmVudFF1ZXVlW2ldKCk7XG4gICAgICAgIH1cbiAgICAgICAgbGVuID0gcXVldWUubGVuZ3RoO1xuICAgIH1cbiAgICBkcmFpbmluZyA9IGZhbHNlO1xufVxucHJvY2Vzcy5uZXh0VGljayA9IGZ1bmN0aW9uIChmdW4pIHtcbiAgICBxdWV1ZS5wdXNoKGZ1bik7XG4gICAgaWYgKCFkcmFpbmluZykge1xuICAgICAgICBzZXRUaW1lb3V0KGRyYWluUXVldWUsIDApO1xuICAgIH1cbn07XG5cbnByb2Nlc3MudGl0bGUgPSAnYnJvd3Nlcic7XG5wcm9jZXNzLmJyb3dzZXIgPSB0cnVlO1xucHJvY2Vzcy5lbnYgPSB7fTtcbnByb2Nlc3MuYXJndiA9IFtdO1xucHJvY2Vzcy52ZXJzaW9uID0gJyc7IC8vIGVtcHR5IHN0cmluZyB0byBhdm9pZCByZWdleHAgaXNzdWVzXG5wcm9jZXNzLnZlcnNpb25zID0ge307XG5cbmZ1bmN0aW9uIG5vb3AoKSB7fVxuXG5wcm9jZXNzLm9uID0gbm9vcDtcbnByb2Nlc3MuYWRkTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5vbmNlID0gbm9vcDtcbnByb2Nlc3Mub2ZmID0gbm9vcDtcbnByb2Nlc3MucmVtb3ZlTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVBbGxMaXN0ZW5lcnMgPSBub29wO1xucHJvY2Vzcy5lbWl0ID0gbm9vcDtcblxucHJvY2Vzcy5iaW5kaW5nID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuYmluZGluZyBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xuXG4vLyBUT0RPKHNodHlsbWFuKVxucHJvY2Vzcy5jd2QgPSBmdW5jdGlvbiAoKSB7IHJldHVybiAnLycgfTtcbnByb2Nlc3MuY2hkaXIgPSBmdW5jdGlvbiAoZGlyKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmNoZGlyIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn07XG5wcm9jZXNzLnVtYXNrID0gZnVuY3Rpb24oKSB7IHJldHVybiAwOyB9O1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vcHJvY2Vzcy9icm93c2VyLmpzXG4gKiogbW9kdWxlIGlkID0gNTJcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyJdLCJzb3VyY2VSb290IjoiIiwiZmlsZSI6InBvcG1vdGlvbi5nbG9iYWwuanMifQ==