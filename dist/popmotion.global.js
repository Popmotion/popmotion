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
	exports.transformers = exports.shadowType = exports.scaleType = exports.rgbType = exports.pxType = exports.positionsType = exports.hslType = exports.hexType = exports.complexType = exports.colorType = exports.axesType = exports.angleType = exports.alphaType = exports.setGlobalDilation = exports.calc = exports.easing = exports.svgPathAdapter = exports.svgAdapter = exports.cssAdapter = exports.attrAdapter = exports.adapter = exports.timeline = exports.stagger = exports.process = exports.input = exports.trackInput = exports.physics = exports.tween = exports.actor = undefined;
	
	var _timer = __webpack_require__(2);
	
	Object.defineProperty(exports, 'setGlobalDilation', {
	  enumerable: true,
	  get: function () {
	    return _timer.setGlobalDilation;
	  }
	});
	
	var _Actor = __webpack_require__(3);
	
	var _Actor2 = _interopRequireDefault(_Actor);
	
	var _Tween = __webpack_require__(4);
	
	var _Tween2 = _interopRequireDefault(_Tween);
	
	var _Physics = __webpack_require__(5);
	
	var _Physics2 = _interopRequireDefault(_Physics);
	
	var _Track = __webpack_require__(6);
	
	var _Track2 = _interopRequireDefault(_Track);
	
	var _Process = __webpack_require__(7);
	
	var _Process2 = _interopRequireDefault(_Process);
	
	var _Input = __webpack_require__(8);
	
	var _Input2 = _interopRequireDefault(_Input);
	
	var _stagger2 = __webpack_require__(9);
	
	var _stagger3 = _interopRequireDefault(_stagger2);
	
	var _timeline2 = __webpack_require__(10);
	
	var _timeline3 = _interopRequireDefault(_timeline2);
	
	var _adapter2 = __webpack_require__(11);
	
	var _adapter3 = _interopRequireDefault(_adapter2);
	
	var _attrAdapter2 = __webpack_require__(12);
	
	var _attrAdapter3 = _interopRequireDefault(_attrAdapter2);
	
	var _cssAdapter2 = __webpack_require__(13);
	
	var _cssAdapter3 = _interopRequireDefault(_cssAdapter2);
	
	var _svgAdapter2 = __webpack_require__(14);
	
	var _svgAdapter3 = _interopRequireDefault(_svgAdapter2);
	
	var _svgPathAdapter2 = __webpack_require__(15);
	
	var _svgPathAdapter3 = _interopRequireDefault(_svgPathAdapter2);
	
	var _presetEasing = __webpack_require__(16);
	
	var _presetEasing2 = _interopRequireDefault(_presetEasing);
	
	var _calc2 = __webpack_require__(17);
	
	var _calc = _interopRequireWildcard(_calc2);
	
	var _alpha = __webpack_require__(18);
	
	var _alpha2 = _interopRequireDefault(_alpha);
	
	var _angle = __webpack_require__(19);
	
	var _angle2 = _interopRequireDefault(_angle);
	
	var _axes = __webpack_require__(20);
	
	var _axes2 = _interopRequireDefault(_axes);
	
	var _color = __webpack_require__(21);
	
	var _color2 = _interopRequireDefault(_color);
	
	var _complex = __webpack_require__(22);
	
	var _complex2 = _interopRequireDefault(_complex);
	
	var _hex = __webpack_require__(23);
	
	var _hex2 = _interopRequireDefault(_hex);
	
	var _hsl = __webpack_require__(24);
	
	var _hsl2 = _interopRequireDefault(_hsl);
	
	var _positions = __webpack_require__(25);
	
	var _positions2 = _interopRequireDefault(_positions);
	
	var _px = __webpack_require__(26);
	
	var _px2 = _interopRequireDefault(_px);
	
	var _rgb = __webpack_require__(27);
	
	var _rgb2 = _interopRequireDefault(_rgb);
	
	var _scale = __webpack_require__(28);
	
	var _scale2 = _interopRequireDefault(_scale);
	
	var _shadow = __webpack_require__(29);
	
	var _shadow2 = _interopRequireDefault(_shadow);
	
	var _transformers2 = __webpack_require__(30);
	
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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9wb3Btb3Rpb24uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztrQkFtQ1MsaUJBQWlCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXJCbkIsSUFBTSxLQUFLLFdBQUwsS0FBSyxHQUFHLFVBQUMsS0FBSztTQUFLLG9CQUFVLEtBQUssQ0FBQztDQUFBOzs7OztBQUFDO0FBQzFDLElBQU0sS0FBSyxXQUFMLEtBQUssR0FBRyxVQUFDLEtBQUs7U0FBSyxvQkFBVSxLQUFLLENBQUM7Q0FBQSxDQUFDO0FBQzFDLElBQU0sT0FBTyxXQUFQLE9BQU8sR0FBRyxVQUFDLEtBQUs7U0FBSyxzQkFBWSxLQUFLLENBQUM7Q0FBQSxDQUFDO0FBQzlDLElBQU0sVUFBVSxXQUFWLFVBQVUsR0FBRztvQ0FBSSxJQUFJO0FBQUosUUFBSTs7OzJFQUFrQixJQUFJO0NBQUMsQ0FBQztBQUNuRCxJQUFNLEtBQUssV0FBTCxLQUFLLEdBQUc7cUNBQUksSUFBSTtBQUFKLFFBQUk7OzsyRUFBa0IsSUFBSTtDQUFDLENBQUM7QUFDOUMsSUFBTSxPQUFPLFdBQVAsT0FBTyxHQUFHO3FDQUFJLElBQUk7QUFBSixRQUFJOzs7NkVBQW9CLElBQUk7Q0FBQyxDQUFDO1FBQ2xELE9BQU87UUFDUCxRQUFROzs7O1FBR1IsT0FBTztRQUNQLFdBQVc7UUFDWCxVQUFVO1FBQ1YsVUFBVTtRQUNWLGNBQWM7Ozs7UUFHZCxNQUFNOzs7O1FBR0QsSUFBSTs7OztRQUlULFNBQVM7UUFDVCxTQUFTO1FBQ1QsUUFBUTtRQUNSLFNBQVM7UUFDVCxXQUFXO1FBQ1gsT0FBTztRQUNQLE9BQU87UUFDUCxhQUFhO1FBQ2IsTUFBTTtRQUNOLE9BQU87UUFDUCxTQUFTO1FBQ1QsVUFBVTs7OztRQUdMLFlBQVkiLCJmaWxlIjoicG9wbW90aW9uLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9NYXR0UGVycnkvU2l0ZXMvcG9wbW90aW9uIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQWN0b3JcbmltcG9ydCBBY3RvciBmcm9tICcuL2FjdG9yL0FjdG9yJztcblxuLy8gQWN0aW9uc1xuaW1wb3J0IFR3ZWVuIGZyb20gJy4vYWN0aW9ucy9Ud2Vlbic7XG5pbXBvcnQgUGh5c2ljcyBmcm9tICcuL2FjdGlvbnMvUGh5c2ljcyc7XG5pbXBvcnQgVHJhY2sgZnJvbSAnLi9hY3Rpb25zL1RyYWNrJztcblxuLy8gUHJvY2Vzc1xuaW1wb3J0IFByb2Nlc3MgZnJvbSAnLi9wcm9jZXNzL1Byb2Nlc3MnO1xuXG4vLyBJbnB1dFxuaW1wb3J0IElucHV0IGZyb20gJy4vaW5wdXQvSW5wdXQnO1xuXG5leHBvcnQgY29uc3QgYWN0b3IgPSAocHJvcHMpID0+IG5ldyBBY3Rvcihwcm9wcyk7XG5leHBvcnQgY29uc3QgdHdlZW4gPSAocHJvcHMpID0+IG5ldyBUd2Vlbihwcm9wcyk7XG5leHBvcnQgY29uc3QgcGh5c2ljcyA9IChwcm9wcykgPT4gbmV3IFBoeXNpY3MocHJvcHMpO1xuZXhwb3J0IGNvbnN0IHRyYWNrSW5wdXQgPSAoLi4uYXJncykgPT4gbmV3IFRyYWNrKC4uLmFyZ3MpO1xuZXhwb3J0IGNvbnN0IGlucHV0ID0gKC4uLmFyZ3MpID0+IG5ldyBJbnB1dCguLi5hcmdzKTtcbmV4cG9ydCBjb25zdCBwcm9jZXNzID0gKC4uLmFyZ3MpID0+IG5ldyBQcm9jZXNzKC4uLmFyZ3MpO1xuZXhwb3J0IHN0YWdnZXIgZnJvbSAnLi9pbmMvc3RhZ2dlcic7XG5leHBvcnQgdGltZWxpbmUgZnJvbSAnLi9pbmMvdGltZWxpbmUnO1xuXG4vLyBBZGFwdGVyc1xuZXhwb3J0IGFkYXB0ZXIgZnJvbSAnLi9hZGFwdGVyL2FkYXB0ZXInO1xuZXhwb3J0IGF0dHJBZGFwdGVyIGZyb20gJy4vYWRhcHRlci9hdHRyLWFkYXB0ZXInO1xuZXhwb3J0IGNzc0FkYXB0ZXIgZnJvbSAnLi9hZGFwdGVyL2Nzcy1hZGFwdGVyJztcbmV4cG9ydCBzdmdBZGFwdGVyIGZyb20gJy4vYWRhcHRlci9zdmctYWRhcHRlcic7XG5leHBvcnQgc3ZnUGF0aEFkYXB0ZXIgZnJvbSAnLi9hZGFwdGVyL3N2Zy1wYXRoLWFkYXB0ZXInO1xuXG4vLyBFYXNpbmdcbmV4cG9ydCBlYXNpbmcgZnJvbSAnLi9hY3Rpb25zL2Vhc2luZy9wcmVzZXQtZWFzaW5nJztcblxuLy8gVXRpbHNcbmV4cG9ydCAqIGFzIGNhbGMgZnJvbSAnLi9pbmMvY2FsYyc7XG5leHBvcnQgeyBzZXRHbG9iYWxEaWxhdGlvbiB9IGZyb20gJy4vcHJvY2Vzcy90aW1lcic7XG5cbi8vIFZhbHVlIHR5cGVzXG5leHBvcnQgYWxwaGFUeXBlIGZyb20gJy4vdmFsdWUtdHlwZXMvYWxwaGEnO1xuZXhwb3J0IGFuZ2xlVHlwZSBmcm9tICcuL3ZhbHVlLXR5cGVzL2FuZ2xlJztcbmV4cG9ydCBheGVzVHlwZSBmcm9tICcuL3ZhbHVlLXR5cGVzL2F4ZXMnO1xuZXhwb3J0IGNvbG9yVHlwZSBmcm9tICcuL3ZhbHVlLXR5cGVzL2NvbG9yJztcbmV4cG9ydCBjb21wbGV4VHlwZSBmcm9tICcuL3ZhbHVlLXR5cGVzL2NvbXBsZXgnO1xuZXhwb3J0IGhleFR5cGUgZnJvbSAnLi92YWx1ZS10eXBlcy9oZXgnO1xuZXhwb3J0IGhzbFR5cGUgZnJvbSAnLi92YWx1ZS10eXBlcy9oc2wnO1xuZXhwb3J0IHBvc2l0aW9uc1R5cGUgZnJvbSAnLi92YWx1ZS10eXBlcy9wb3NpdGlvbnMnO1xuZXhwb3J0IHB4VHlwZSBmcm9tICcuL3ZhbHVlLXR5cGVzL3B4JztcbmV4cG9ydCByZ2JUeXBlIGZyb20gJy4vdmFsdWUtdHlwZXMvcmdiJztcbmV4cG9ydCBzY2FsZVR5cGUgZnJvbSAnLi92YWx1ZS10eXBlcy9zY2FsZSc7XG5leHBvcnQgc2hhZG93VHlwZSBmcm9tICcuL3ZhbHVlLXR5cGVzL3NoYWRvdyc7XG5cbi8vIFRyYW5zZm9ybWVyc1xuZXhwb3J0ICogYXMgdHJhbnNmb3JtZXJzIGZyb20gJy4vaW5jL3RyYW5zZm9ybWVycyc7Il19

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports.setGlobalDilation = undefined;
	
	var _utils = __webpack_require__(32);
	
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
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _Action2 = __webpack_require__(31);
	
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
	var boundProps = function (actor, action) {
	    return {
	        actor: actor,
	        isPriority: true,
	        on: actor.on,
	        onStart: boundOnStart,
	        onStop: boundOnStop,
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
	            var value = this.values[key];
	
	            value.driver = id;
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
	//# sourceMappingURL=data:application/json;base64,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QyxFQUFFLENBQUMsQ0FBQztBQUM5QixZQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQzs7QUFFeEIsWUFBSSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFO0FBQ3pDLDhCQUFNLElBQUksS0FBQSxNQUFFLENBQUM7U0FDaEI7S0FDSjs7V0F6SWdCLEtBQUs7OztrQkFBTCxLQUFLIiwiZmlsZSI6IkFjdG9yLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9NYXR0UGVycnkvU2l0ZXMvcG9wbW90aW9uIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEFjdGlvbiBmcm9tICcuLi9hY3Rpb25zL0FjdGlvbic7XG5cbi8qXG4gICAgTWV0aG9kcyBhbmQgcHJvcGVydGllcyB0byBhZGQgdG8gYm91bmQgQWN0aW9uc1xuKi9cbmNvbnN0IGJvdW5kT25TdGFydCA9IChhY3Rpb24pID0+IGFjdGlvbi5hY3Rvci5hY3RpdmF0ZUFjdGlvbihhY3Rpb24uaWQsIGFjdGlvbik7XG5jb25zdCBib3VuZE9uU3RvcCA9IChhY3Rpb24pID0+IGFjdGlvbi5hY3Rvci5kZWFjdGl2YXRlQWN0aW9uKGFjdGlvbi5pZCk7XG5jb25zdCBib3VuZFByb3BzID0gKGFjdG9yLCBhY3Rpb24pID0+ICh7XG4gICAgYWN0b3I6IGFjdG9yLFxuICAgIGlzUHJpb3JpdHk6IHRydWUsXG4gICAgb246IGFjdG9yLm9uLFxuICAgIG9uU3RhcnQ6IGJvdW5kT25TdGFydCxcbiAgICBvblN0b3A6IGJvdW5kT25TdG9wLFxuICAgIG9uUmVuZGVyOiB1bmRlZmluZWRcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBY3RvciBleHRlbmRzIEFjdGlvbiB7XG4gICAgY29uc3RydWN0b3IoLi4uYXJncykge1xuICAgICAgICBzdXBlciguLi5hcmdzKTtcbiAgICAgICAgdGhpcy5hY3RpdmVBY3Rpb25zID0ge307XG4gICAgICAgIHRoaXMubnVtQWN0aXZlQWN0aW9ucyA9IDA7XG4gICAgfVxuXG4gICAgc2V0KHByb3BzLCBpbnN0YW50KSB7XG4gICAgICAgIGlmIChpbnN0YW50IHx8ICF0aGlzLnJlZHVjZXIpIHtcbiAgICAgICAgICAgIHN1cGVyLnNldChwcm9wcyk7XG4gICAgICAgICAgICB0aGlzLm9uY2UoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnN0IGFjdGlvbiA9IHRoaXMucmVkdWNlcihwcm9wcyk7XG4gICAgICAgICAgICBpZiAoYWN0aW9uKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zdGFydChhY3Rpb24pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLypcbiAgICAgICAgQmluZCBBY3Rpb24gdG8gQWN0b3JcbiAgICAqL1xuICAgIGJpbmQoYWN0aW9uKSB7XG4gICAgICAgIGNvbnN0IGluaGVyaXRlZEFjdGlvbiA9IGFjdGlvbi5pbmhlcml0KCk7XG4gICAgICAgIGxldCBuZXdWYWx1ZXMgPSB7fTtcbiAgICAgICAgbGV0IGhhc05ld1ZhbHVlcyA9IGZhbHNlO1xuXG4gICAgICAgIC8vIENyZWF0ZSB2YWx1ZXMgb24gYWN0b3IgdGhhdCBkb24ndCBleGlzdFxuICAgICAgICBmb3IgKGxldCBrZXkgaW4gaW5oZXJpdGVkQWN0aW9uLnZhbHVlcykge1xuICAgICAgICAgICAgaWYgKGluaGVyaXRlZEFjdGlvbi52YWx1ZXMuaGFzT3duUHJvcGVydHkoa2V5KSAmJiAhdGhpcy52YWx1ZXMuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgICAgICAgIG5ld1ZhbHVlc1trZXldID0gaW5oZXJpdGVkQWN0aW9uLnZhbHVlc1trZXldO1xuICAgICAgICAgICAgICAgIGhhc05ld1ZhbHVlcyA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoaGFzTmV3VmFsdWVzKSB7XG4gICAgICAgICAgICB0aGlzLnNldCh7IHZhbHVlczogbmV3VmFsdWVzIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGluaGVyaXRlZEFjdGlvbi5zZXQoYm91bmRQcm9wcyh0aGlzLCBpbmhlcml0ZWRBY3Rpb24pKTtcbiAgICB9XG5cbiAgICAvKlxuICAgICAgICBTdGFydCBBY3RvclxuXG4gICAgICAgIElmIEFjdGlvbiBpcyBwcm92aWRlZCwgYmluZCBpdCB0byB0aGlzIEFjdG9yIGFuZCBzdGFydFxuXG4gICAgICAgIEBwYXJhbSAob3B0aW9uYWwpIFtBY3Rpb25dXG4gICAgKi9cbiAgICBzdGFydChhY3Rpb24pIHtcbiAgICAgICAgc3VwZXIuc3RhcnQoKTtcblxuICAgICAgICBpZiAoYWN0aW9uKSB7XG4gICAgICAgICAgICBjb25zdCBib3VuZEFjdGlvbiA9IHRoaXMuYmluZChhY3Rpb24pO1xuICAgICAgICAgICAgYm91bmRBY3Rpb24uc3RhcnQoKTtcblxuICAgICAgICAgICAgcmV0dXJuIGJvdW5kQWN0aW9uO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZm9yIChsZXQga2V5IGluIHRoaXMuYWN0aXZlQWN0aW9ucykge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmFjdGl2ZUFjdGlvbnMuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBhY3Rpb24gPSB0aGlzLmFjdGl2ZUFjdGlvbnNba2V5XTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFhY3Rpb24uaXNBY3RpdmUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFjdGlvbi5zdGFydCgpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgc3RvcCgpIHtcbiAgICAgICAgc3VwZXIuc3RvcCgpO1xuXG4gICAgICAgIGZvciAobGV0IGtleSBpbiB0aGlzLmFjdGl2ZUFjdGlvbnMpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmFjdGl2ZUFjdGlvbnMuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgICAgICAgIHRoaXMuYWN0aXZlQWN0aW9uc1trZXldLnN0b3AoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHdpbGxSZW5kZXIoYWN0b3IsIGZyYW1lU3RhbXAsIGVsYXBzZWQpIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLm51bVZhbHVlS2V5czsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCBrZXkgPSB0aGlzLnZhbHVlS2V5c1tpXTtcbiAgICAgICAgICAgIGNvbnN0IHZhbHVlID0gdGhpcy52YWx1ZXNba2V5XTtcblxuICAgICAgICAgICAgaWYgKHZhbHVlLmRyaXZlcikge1xuICAgICAgICAgICAgICAgIHZhbHVlLmN1cnJlbnQgPSB0aGlzLmFjdGl2ZUFjdGlvbnNbdmFsdWUuZHJpdmVyXS52YWx1ZXNba2V5XS5jdXJyZW50O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHN1cGVyLndpbGxSZW5kZXIoYWN0b3IsIGZyYW1lU3RhbXAsIGVsYXBzZWQpO1xuICAgIH1cblxuICAgIC8qXG4gICAgICAgIEFkZCBhY3RpdmUgYWN0aW9uc1xuXG4gICAgICAgIEBwYXJhbSBbbnVtYmVyXVxuICAgICAgICBAcGFyYW0gW0FjdGlvbl1cbiAgICAqL1xuICAgIGFjdGl2YXRlQWN0aW9uKGlkLCBhY3Rpb24pIHtcbiAgICAgICAgdGhpcy5hY3RpdmVBY3Rpb25zW2lkXSA9IGFjdGlvbjtcbiAgICAgICAgdGhpcy5udW1BY3RpdmVBY3Rpb25zKys7XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhY3Rpb24ubnVtVmFsdWVLZXlzOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IGtleSA9IGFjdGlvbi52YWx1ZUtleXNbaV07XG4gICAgICAgICAgICBjb25zdCB2YWx1ZSA9IHRoaXMudmFsdWVzW2tleV07XG5cbiAgICAgICAgICAgIHZhbHVlLmRyaXZlciA9IGlkO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMubnVtQWN0aXZlQWN0aW9ucykge1xuICAgICAgICAgICAgc3VwZXIuc3RhcnQoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qXG4gICAgICAgIFJlbW92ZSBhY3RpdmUgYWN0aW9uc1xuXG4gICAgICAgIEBwYXJhbSBbbnVtYmVyXVxuICAgICovXG4gICAgZGVhY3RpdmF0ZUFjdGlvbihpZCkge1xuICAgICAgICBjb25zdCBhY3Rpb24gPSB0aGlzLmFjdGl2ZUFjdGlvbnNbaWRdO1xuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYWN0aW9uLm51bVZhbHVlS2V5czsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCBrZXkgPSBhY3Rpb24udmFsdWVLZXlzW2ldO1xuICAgICAgICAgICAgY29uc3QgdmFsdWUgPSB0aGlzLnZhbHVlc1trZXldO1xuXG4gICAgICAgICAgICB2YWx1ZS5kcml2ZXIgPSB1bmRlZmluZWQ7XG4gICAgICAgIH1cblxuICAgICAgICBkZWxldGUgdGhpcy5hY3RpdmVBY3Rpb25zW2lkXTtcbiAgICAgICAgdGhpcy5udW1BY3RpdmVBY3Rpb25zLS07XG5cbiAgICAgICAgaWYgKCF0aGlzLm51bUFjdGl2ZUFjdGlvbnMgJiYgdGhpcy5pc0FjdGl2ZSkge1xuICAgICAgICAgICAgc3VwZXIuc3RvcCgpO1xuICAgICAgICB9XG4gICAgfVxufSJdfQ==

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	exports.__esModule = true;
	
	var _Action2 = __webpack_require__(31);
	
	var _Action3 = _interopRequireDefault(_Action2);
	
	var _presetEasing = __webpack_require__(16);
	
	var _presetEasing2 = _interopRequireDefault(_presetEasing);
	
	var _utils = __webpack_require__(32);
	
	var _calc = __webpack_require__(17);
	
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
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	exports.__esModule = true;
	
	var _Action2 = __webpack_require__(31);
	
	var _Action3 = _interopRequireDefault(_Action2);
	
	var _calc = __webpack_require__(17);
	
	var _utils = __webpack_require__(32);
	
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
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	exports.__esModule = true;
	
	var _Action2 = __webpack_require__(31);
	
	var _Action3 = _interopRequireDefault(_Action2);
	
	var _Pointer = __webpack_require__(33);
	
	var _Pointer2 = _interopRequireDefault(_Pointer);
	
	var _calc = __webpack_require__(17);
	
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
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _loop = __webpack_require__(44);
	
	var loop = _interopRequireWildcard(_loop);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Process = (function () {
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
	
	        if (this.onStart) {
	            this.onStart(this);
	        }
	
	        return this;
	    };
	
	    Process.prototype.stop = function stop() {
	        loop.deactivate(this.id);
	
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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9wcm9jZXNzL1Byb2Nlc3MuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0lBQVksSUFBSTs7Ozs7Ozs7SUFFSyxPQUFPOzs7Ozs7QUFLeEIsYUFMaUIsT0FBTyxDQUtaLEtBQUssRUFBRSxNQUFNLEVBQUU7Ozs4QkFMVixPQUFPOztBQU1wQixZQUFJLENBQUMsRUFBRSxHQUFHLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQzs7QUFFOUIsWUFBSSxDQUFDLFVBQVUsR0FBRyxZQUFNO0FBQ3BCLGtCQUFLLElBQUksRUFBRSxDQUFDO0FBQ1osa0JBQUssU0FBUyxHQUFHLFNBQVMsQ0FBQztTQUM5QixDQUFDOztBQUVGLFlBQUksQ0FBQyxXQUFXLEdBQUc7bUJBQU0sTUFBSyxTQUFTLEdBQUcsTUFBSyxVQUFVO1NBQUEsQ0FBQzs7QUFFMUQsWUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsZUFBZSxFQUFFLENBQUMsQ0FBQztBQUNqQyxZQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDOztBQUVoQixZQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sSUFBSSxLQUFLLENBQUM7QUFDOUIsWUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7S0FDekI7O0FBcEJnQixXQUFPLFdBc0J4QixHQUFHLGdCQUFDLEtBQUssRUFBRTtBQUNQLGFBQUssSUFBSSxHQUFHLElBQUksS0FBSyxFQUFFO0FBQ25CLGdCQUFJLEtBQUssQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDLEVBQUU7QUFDM0Isb0JBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7YUFDMUI7U0FDSjs7QUFFRCxlQUFPLElBQUksQ0FBQztLQUNmOztBQTlCZ0IsV0FBTyxXQWdDeEIsS0FBSyxvQkFBRztBQUNKLFlBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEVBQUUsRUFBRSxJQUFJLENBQUMsQ0FBQzs7QUFFN0IsWUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsVUFBVSxHQUFHLFNBQVMsQ0FBQzs7QUFFN0MsWUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFO0FBQ2QsZ0JBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDdEI7O0FBRUQsZUFBTyxJQUFJLENBQUM7S0FDZjs7QUExQ2dCLFdBQU8sV0E0Q3hCLElBQUksbUJBQUc7QUFDSCxZQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQzs7QUFFekIsWUFBSSxJQUFJLENBQUMsTUFBTSxFQUFFO0FBQ2IsZ0JBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDckI7O0FBRUQsZUFBTyxJQUFJLENBQUM7S0FDZjs7QUFwRGdCLFdBQU8sV0FzRHhCLElBQUksbUJBQUc7QUFDSCxZQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7QUFDYixZQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUM7QUFDbkMsZUFBTyxJQUFJLENBQUM7S0FDZjs7Ozs7OztBQTFEZ0IsV0FBTyxXQWlFeEIsZUFBZSw4QkFBRztBQUNkLGVBQU8sRUFBRSxDQUFDO0tBQ2I7Ozs7Ozs7OztBQW5FZ0IsV0FBTyxXQTRFeEIsT0FBTyxvQkFBQyxLQUFLLEVBQUU7WUFDSCxFQUFFLEdBQXdCLElBQUksQ0FBOUIsRUFBRTs7WUFBSyxjQUFjLDRCQUFLLElBQUk7O0FBQ3RDLFlBQU0sVUFBVSxHQUFHLElBQUksSUFBSSxDQUFDLFdBQVcsQ0FBQyxjQUFjLENBQUMsQ0FBQztBQUN4RCxlQUFPLFVBQVUsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7S0FDaEM7O1dBaEZnQixPQUFPOzs7a0JBQVAsT0FBTyIsImZpbGUiOiJQcm9jZXNzLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9NYXR0UGVycnkvU2l0ZXMvcG9wbW90aW9uIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgbG9vcCBmcm9tICcuL2xvb3AnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQcm9jZXNzIHtcbiAgICAvKlxuICAgICAgICBbb2JqZWN0XTogUHJvcGVydGllc1xuICAgICAgICBbYm9vbGVhbl0gKG9wdGlvbmFsKTogSXMgUHJvY2VzcyBsYXp5P1xuICAgICovXG4gICAgY29uc3RydWN0b3IocHJvcHMsIGlzTGF6eSkge1xuICAgICAgICB0aGlzLmlkID0gbG9vcC5nZXRQcm9jZXNzSWQoKTtcblxuICAgICAgICB0aGlzLl9vbkNsZWFudXAgPSAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnN0b3AoKTtcbiAgICAgICAgICAgIHRoaXMub25DbGVhbnVwID0gdW5kZWZpbmVkO1xuICAgICAgICB9O1xuXG4gICAgICAgIHRoaXMuX29uQWN0aXZhdGUgPSAoKSA9PiB0aGlzLm9uQ2xlYW51cCA9IHRoaXMuX29uQ2xlYW51cDtcblxuICAgICAgICB0aGlzLnNldCh0aGlzLmdldERlZmF1bHRQcm9wcygpKTtcbiAgICAgICAgdGhpcy5zZXQocHJvcHMpO1xuXG4gICAgICAgIHRoaXMuaXNMYXp5ID0gaXNMYXp5IHx8IGZhbHNlO1xuICAgICAgICB0aGlzLmlzQWN0aXZlID0gZmFsc2U7XG4gICAgfVxuXG4gICAgc2V0KHByb3BzKSB7XG4gICAgICAgIGZvciAobGV0IGtleSBpbiBwcm9wcykge1xuICAgICAgICAgICAgaWYgKHByb3BzLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICAgICAgICB0aGlzW2tleV0gPSBwcm9wc1trZXldO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgc3RhcnQoKSB7XG4gICAgICAgIGxvb3AuYWN0aXZhdGUodGhpcy5pZCwgdGhpcyk7XG5cbiAgICAgICAgdGhpcy5vbkNsZWFudXAgPSB0aGlzLm9uQWN0aXZhdGUgPSB1bmRlZmluZWQ7XG5cbiAgICAgICAgaWYgKHRoaXMub25TdGFydCkge1xuICAgICAgICAgICAgdGhpcy5vblN0YXJ0KHRoaXMpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgc3RvcCgpIHtcbiAgICAgICAgbG9vcC5kZWFjdGl2YXRlKHRoaXMuaWQpO1xuXG4gICAgICAgIGlmICh0aGlzLm9uU3RvcCkge1xuICAgICAgICAgICAgdGhpcy5vblN0b3AodGhpcyk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBvbmNlKCkge1xuICAgICAgICB0aGlzLnN0YXJ0KCk7XG4gICAgICAgIHRoaXMub25BY3RpdmF0ZSA9IHRoaXMuX29uQWN0aXZhdGU7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIC8qXG4gICAgICAgICMgR2V0IGRlZmF1bHQgQWN0aW9uIHByb3BlcnRpZXNcblxuICAgICAgICBAcmV0dXJuIFtvYmplY3RdXG4gICAgKi9cbiAgICBnZXREZWZhdWx0UHJvcHMoKSB7XG4gICAgICAgIHJldHVybiB7fTtcbiAgICB9XG5cbiAgICAvKlxuICAgICAgICAjIEV4dGVuZCB0aGlzIFByb2Nlc3Mgd2l0aCBuZXcgcHJvcGVydGllc1xuICAgICAgICAjIyBSZXR1cm5zIG5ldyBpbnN0YW5jZSBvZiB0aGlzIFByb2Nlc3MncyBgcHJvdG90eXBlYCB3aXRoIGV4aXN0aW5nIGFuZCBuZXcgcHJvcGVydGllc1xuXG4gICAgICAgIEBwYXJhbSBbb2JqZWN0XSAob3B0aW9uYWwpXG4gICAgICAgIEByZXR1cm4gW1Byb2Nlc3NdXG4gICAgKi9cbiAgICBpbmhlcml0KHByb3BzKSB7XG4gICAgICAgIGNvbnN0IHsgaWQsIC4uLmluaGVyaXRlZFByb3BzIH0gPSB0aGlzO1xuICAgICAgICBjb25zdCBuZXdQcm9jZXNzID0gbmV3IHRoaXMuY29uc3RydWN0b3IoaW5oZXJpdGVkUHJvcHMpO1xuICAgICAgICByZXR1cm4gbmV3UHJvY2Vzcy5zZXQocHJvcHMpO1xuICAgIH1cbn0iXX0=

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	exports.__esModule = true;
	
	var _Process2 = __webpack_require__(7);
	
	var _Process3 = _interopRequireDefault(_Process2);
	
	var _utils = __webpack_require__(32);
	
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
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports.default = stagger;
	
	var _Tween = __webpack_require__(4);
	
	var _Tween2 = _interopRequireDefault(_Tween);
	
	var _presetEasing = __webpack_require__(16);
	
	var _presetEasing2 = _interopRequireDefault(_presetEasing);
	
	var _utils = __webpack_require__(32);
	
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
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	exports.__esModule = true;
	exports.default = timeline;
	
	var _Tween = __webpack_require__(4);
	
	var _Tween2 = _interopRequireDefault(_Tween);
	
	var _presetEasing = __webpack_require__(16);
	
	var _presetEasing2 = _interopRequireDefault(_presetEasing);
	
	var _calc = __webpack_require__(17);
	
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
/* 11 */
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
	
	exports.default = Adapter;
	
	exports.default = function (props) {
	    return new Adapter(props);
	};
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hZGFwdGVyL2FkYXB0ZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQVlxQixPQUFPO0FBQ3hCLGFBRGlCLE9BQU8sQ0FDWixLQUFLLEVBQUU7OEJBREYsT0FBTzs7QUFFcEIsWUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUMsT0FBTyxDQUFDO0FBQzdCLFlBQUksQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDOztBQUVoQixZQUFJLEtBQUssQ0FBQyxNQUFNLEVBQUU7QUFDZCxnQkFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDO1NBQzlCOztBQUVELFlBQUksS0FBSyxDQUFDLE1BQU0sRUFBRTtBQUNkLGdCQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUM7U0FDOUI7O0FBRUQsWUFBSSxLQUFLLENBQUMsUUFBUSxFQUFFO0FBQ2hCLGdCQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQyxRQUFRLENBQUM7U0FDbEM7O0FBRUQsWUFBSSxLQUFLLENBQUMsWUFBWSxFQUFFO0FBQ3BCLGdCQUFJLENBQUMsWUFBWSxHQUFHLEtBQUssQ0FBQyxZQUFZLENBQUM7U0FDMUM7S0FDSjs7Ozs7OztBQUFBO0FBcEJnQixXQUFPLFdBNEJ4QixHQUFHLGdCQUFDLEdBQUcsRUFBRSxPQUFPLEVBQUU7QUFDZCxZQUFNLFNBQVMsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxDQUFDOztBQUV4QyxZQUFJLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsY0FBYyxDQUFDLEdBQUcsQ0FBQyxFQUFFO0FBQzVDLG1CQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQztTQUNuRCxNQUFNO0FBQ0gsbUJBQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztTQUMxQjtLQUNKOzs7Ozs7O0FBcENnQixXQUFPLFdBMkN4QixHQUFHLGdCQUFDLEtBQUssRUFBRTtBQUNQLFlBQU0sZUFBZSxHQUFHLEVBQUU7OztBQUFDLEFBRzNCLGFBQUssSUFBSSxHQUFHLElBQUksS0FBSyxFQUFFO0FBQ25CLGdCQUFJLEtBQUssQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDLEVBQUU7QUFDM0Isb0JBQU0sU0FBUyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLENBQUM7QUFDeEMsb0JBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLEdBQUcsZUFBZSxDQUFDLFNBQVMsQ0FBQyxHQUFHLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQzthQUM3RDtTQUNKOztBQUVELGVBQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxlQUFlLENBQUMsQ0FBQztLQUN2Qzs7Ozs7O0FBdkRnQixXQUFPLFdBNER4QixNQUFNLG1CQUFDLEdBQUcsRUFBRTtBQUNSLGVBQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQztLQUM1Qjs7Ozs7O0FBOURnQixXQUFPLFdBbUV4QixNQUFNLG1CQUFDLEtBQUssRUFBRTtBQUNWLGFBQUssSUFBSSxHQUFHLElBQUksS0FBSyxFQUFFO0FBQ25CLGdCQUFJLEtBQUssQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDLEVBQUU7QUFDM0Isb0JBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO2FBQ2xDO1NBQ0o7S0FDSjs7Ozs7Ozs7QUF6RWdCLFdBQU8sV0FpRnhCLFdBQVcsd0JBQUMsR0FBRyxFQUFFO0FBQ2IsZUFBTyxBQUFDLElBQUksQ0FBQyxRQUFRLEdBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsSUFBSSxHQUFHLEdBQUcsR0FBRyxDQUFDO0tBQzVEOzs7Ozs7OztBQW5GZ0IsV0FBTyxXQTJGeEIsWUFBWSx5QkFBQyxHQUFHLEVBQUU7QUFDZCxlQUFPLEFBQUMsSUFBSSxDQUFDLFlBQVksR0FBSSxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUM7S0FDakY7O1dBN0ZnQixPQUFPOzs7a0JBQVAsT0FBTzs7a0JBZ0diLFVBQUMsS0FBSztXQUFLLElBQUksT0FBTyxDQUFDLEtBQUssQ0FBQztDQUFBIiwiZmlsZSI6ImFkYXB0ZXIuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL01hdHRQZXJyeS9TaXRlcy9wb3Btb3Rpb24iLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICAgICMgQWRhcHRlciBjbGFzc1xuICAgICMjIFByb3ZpZGVzIGEgZ2V0dGVyL3NldHRlciB3cmFwcGVyIGFuZCBwcm9wZXJ0eSBjYWNoZSBmb3IgZGlmZmVyZW50IGVsZW1lbnQgdHlwZXNcblxuICAgIE92ZXJyaWRlIGBnZXR0ZXJgIGFuZCBgc2V0dGVyYCB0byByZWltcGxlbWVudCB0aGUgaW50ZXJmYWNlIGZvciBuZXcgZWxlbWVudCB0eXBlcy5cblxuICAgIFNldCBgRXh0ZW5kZWQucHJvdG90eXBlLnN0YXRlTWFwYCBhcyBhbiBvYmplY3Qga2V5L3ZhbHVlIG1hcCB0byB0cmFuc2xhdGUgaW5jb21pbmcga2V5cyB0b1xuICAgIEFQSS1zcGVjaWZpYyBrZXlzLiBGb3IgaW5zdGFuY2UsIHsgeDogJ3RyYW5zbGF0ZVgnIH0uIFxuXG4gICAgU2V0IGBFeHRlbmRlZC5wcm90b3R5cGUudmFsdWVUeXBlTWFwYCBhcyBhbiBvYmplY3Qga2V5L3ZhbHVlIG1hcCB0byByZXR1cm4gYSB2YWx1ZSB0eXBlIHdpdGhcbiAgICBgZ2V0VmFsdWVUeXBlKGtleSlgIChrZXkgd2lsbCBiZSBtYXBwZWQgYWNjb3JkaW5nIHRvIGBzdGF0ZU1hcGApXG4qL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQWRhcHRlciB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgdGhpcy5lbGVtZW50ID0gcHJvcHMuZWxlbWVudDtcbiAgICAgICAgdGhpcy5jYWNoZSA9IHt9O1xuXG4gICAgICAgIGlmIChwcm9wcy5nZXR0ZXIpIHtcbiAgICAgICAgICAgIHRoaXMuZ2V0dGVyID0gcHJvcHMuZ2V0dGVyO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHByb3BzLnNldHRlcikge1xuICAgICAgICAgICAgdGhpcy5zZXR0ZXIgPSBwcm9wcy5zZXR0ZXI7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAocHJvcHMuc3RhdGVNYXApIHtcbiAgICAgICAgICAgIHRoaXMuc3RhdGVNYXAgPSBwcm9wcy5zdGF0ZU1hcDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChwcm9wcy52YWx1ZVR5cGVNYXApIHtcbiAgICAgICAgICAgIHRoaXMudmFsdWVUeXBlTWFwID0gcHJvcHMudmFsdWVUeXBlTWFwO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLypcbiAgICAgICAgR2V0IGVsZW1lbnQgcHJvcGVydHlcblxuICAgICAgICBAcGFyYW0gW3N0cmluZ106IEtleSB0byByZWFkXG4gICAgICAgIEBwYXJhbSBbYm9vbGVhbl06IElmIGB0cnVlYCwgd2lsbCBvdmVycmlkZSBjYWNoZWQgcHJvcGVydHlcbiAgICAqL1xuICAgIGdldChrZXksIHJlZnJlc2gpIHtcbiAgICAgICAgY29uc3QgbWFwcGVkS2V5ID0gdGhpcy5tYXBTdGF0ZUtleShrZXkpO1xuXG4gICAgICAgIGlmIChyZWZyZXNoIHx8ICF0aGlzLmNhY2hlLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmNhY2hlW2tleV0gPSB0aGlzLmdldHRlcihtYXBwZWRLZXkpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY2FjaGVba2V5XTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qXG4gICAgICAgIFNldCBlbGVtZW50IHByb3BlcnRpZXNcblxuICAgICAgICBAcGFyYW0gW29iamVjdF06IEtleS92YWx1ZSBwcm9wZXJ0aWVzIHRvIHNldFxuICAgICovXG4gICAgc2V0KHByb3BzKSB7XG4gICAgICAgIGNvbnN0IHRyYW5zbGF0ZWRQcm9wcyA9IHt9O1xuXG4gICAgICAgIC8vIFRyYW5zbGF0ZSBwcm9wc1xuICAgICAgICBmb3IgKGxldCBrZXkgaW4gcHJvcHMpIHtcbiAgICAgICAgICAgIGlmIChwcm9wcy5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgbWFwcGVkS2V5ID0gdGhpcy5tYXBTdGF0ZUtleShrZXkpO1xuICAgICAgICAgICAgICAgIHRoaXMuY2FjaGVba2V5XSA9IHRyYW5zbGF0ZWRQcm9wc1ttYXBwZWRLZXldID0gcHJvcHNba2V5XTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzLnNldHRlcih0cmFuc2xhdGVkUHJvcHMpO1xuICAgIH1cblxuICAgIC8qXG4gICAgICAgIE92ZXJyaWRhYmxlIGVsZW1lbnQgZ2V0dGVyIC0gZGVmYXVsdCBmb3IgcGxhaW4gb2JqZWN0IFxuICAgICovXG4gICAgZ2V0dGVyKGtleSkge1xuICAgICAgICByZXR1cm4gdGhpcy5lbGVtZW50W2tleV07XG4gICAgfVxuXG4gICAgLypcbiAgICAgICAgT3ZlcnJpZGFibGUgZWxlbWVudCBzZXR0ZXIgLSBkZWZhdWx0IGZvciBwbGFpbiBvYmplY3RcbiAgICAqL1xuICAgIHNldHRlcihwcm9wcykge1xuICAgICAgICBmb3IgKGxldCBrZXkgaW4gcHJvcHMpIHtcbiAgICAgICAgICAgIGlmIChwcm9wcy5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5lbGVtZW50W2tleV0gPSBwcm9wc1trZXldO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLypcbiAgICAgICAgTWFwIHN0YXRlIGtleSBhcyBwZXIgYHN0YXRlTWFwYCwgaWYgcHJlc2VudFxuXG4gICAgICAgIEBwYXJhbSBbc3RyaW5nXTogS2V5IHRvIG1hcFxuICAgICAgICBAcmV0dXJuIFtzdHJpbmddOiBNYXBwZWQga2V5LCBvciBvcmlnaW5hbCBrZXkgaWYgbm9uZSBmb3VuZFxuICAgICovXG4gICAgbWFwU3RhdGVLZXkoa2V5KSB7XG4gICAgICAgIHJldHVybiAodGhpcy5zdGF0ZU1hcCkgPyB0aGlzLnN0YXRlTWFwW2tleV0gfHwga2V5IDoga2V5O1xuICAgIH1cblxuICAgIC8qXG4gICAgICAgIEdldCB2YWx1ZVR5cGUgb2YgcHJvdmlkZWQga2V5XG5cbiAgICAgICAgQHBhcmFtIFtzdHJpbmddOiBOYW1lIG9mIHByb3BlcnR5IHRvIG1hcFxuICAgICAgICBAcmV0dXJuIFt2YWx1ZVR5cGVdOiBWYWx1ZSB0eXBlIG9mIHByb3BlcnR5XG4gICAgKi9cbiAgICBnZXRWYWx1ZVR5cGUoa2V5KSB7XG4gICAgICAgIHJldHVybiAodGhpcy52YWx1ZVR5cGVNYXApID8gdGhpcy52YWx1ZVR5cGVNYXBbdGhpcy5tYXBTdGF0ZUtleShrZXkpXSA6IGZhbHNlO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgKHByb3BzKSA9PiBuZXcgQWRhcHRlcihwcm9wcyk7Il19

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports.getter = getter;
	exports.setter = setter;
	
	var _adapter = __webpack_require__(11);
	
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
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _stateMap = __webpack_require__(34);
	
	var _stateMap2 = _interopRequireDefault(_stateMap);
	
	var _valueTypeMap = __webpack_require__(35);
	
	var _valueTypeMap2 = _interopRequireDefault(_valueTypeMap);
	
	var _build = __webpack_require__(36);
	
	var _build2 = _interopRequireDefault(_build);
	
	var _prefixer = __webpack_require__(37);
	
	var _prefixer2 = _interopRequireDefault(_prefixer);
	
	var _adapter = __webpack_require__(11);
	
	var _adapter2 = _interopRequireDefault(_adapter);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function getter(key) {
	    return window.getComputedStyle(this.element, null)[(0, _prefixer2.default)(key)];
	}
	
	function setter(props) {
	    this.element.style.cssText += (0, _build2.default)(props);
	}
	
	exports.default = function (element) {
	    return (0, _adapter2.default)({ element: element, stateMap: _stateMap2.default, valueTypeMap: _valueTypeMap2.default, getter: getter, setter: setter });
	};
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hZGFwdGVyL2Nzcy1hZGFwdGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTUEsU0FBUyxNQUFNLENBQUUsR0FBRyxFQUFFO0FBQ2xCLFdBQU8sTUFBTSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLENBQUMsd0JBQVMsR0FBRyxDQUFDLENBQUMsQ0FBQztDQUNyRTs7QUFFRCxTQUFTLE1BQU0sQ0FBQyxLQUFLLEVBQUU7QUFDbkIsUUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsT0FBTyxJQUFJLHFCQUFvQixLQUFLLENBQUMsQ0FBQztDQUM1RDs7a0JBRWMsVUFBQyxPQUFPO1dBQUssdUJBQWMsRUFBRSxPQUFPLEVBQVAsT0FBTyxFQUFFLFFBQVEsb0JBQUEsRUFBRSxZQUFZLHdCQUFBLEVBQUUsTUFBTSxFQUFOLE1BQU0sRUFBRSxNQUFNLEVBQU4sTUFBTSxFQUFFLENBQUM7Q0FBQSIsImZpbGUiOiJjc3MtYWRhcHRlci5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvTWF0dFBlcnJ5L1NpdGVzL3BvcG1vdGlvbiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdGF0ZU1hcCBmcm9tICcuL2Nzcy9zdGF0ZS1tYXAnO1xuaW1wb3J0IHZhbHVlVHlwZU1hcCBmcm9tICcuL2Nzcy92YWx1ZS10eXBlLW1hcCc7XG5pbXBvcnQgYnVpbGRQcm9wZXJ0eVN0cmluZyBmcm9tICcuL2Nzcy9idWlsZCc7XG5pbXBvcnQgcHJlZml4ZXIgZnJvbSAnLi9jc3MvcHJlZml4ZXInO1xuaW1wb3J0IGNyZWF0ZUFkYXB0ZXIgZnJvbSAnLi9hZGFwdGVyJztcblxuZnVuY3Rpb24gZ2V0dGVyIChrZXkpIHtcbiAgICByZXR1cm4gd2luZG93LmdldENvbXB1dGVkU3R5bGUodGhpcy5lbGVtZW50LCBudWxsKVtwcmVmaXhlcihrZXkpXTtcbn1cblxuZnVuY3Rpb24gc2V0dGVyKHByb3BzKSB7XG4gICAgdGhpcy5lbGVtZW50LnN0eWxlLmNzc1RleHQgKz0gYnVpbGRQcm9wZXJ0eVN0cmluZyhwcm9wcyk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IChlbGVtZW50KSA9PiBjcmVhdGVBZGFwdGVyKHsgZWxlbWVudCwgc3RhdGVNYXAsIHZhbHVlVHlwZU1hcCwgZ2V0dGVyLCBzZXR0ZXIgfSk7Il19

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports.setter = setter;
	
	var _stateMap = __webpack_require__(34);
	
	var _stateMap2 = _interopRequireDefault(_stateMap);
	
	var _valueTypeMap = __webpack_require__(38);
	
	var _valueTypeMap2 = _interopRequireDefault(_valueTypeMap);
	
	var _build = __webpack_require__(39);
	
	var _build2 = _interopRequireDefault(_build);
	
	var _attrAdapter = __webpack_require__(12);
	
	var _adapter = __webpack_require__(11);
	
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
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _build = __webpack_require__(40);
	
	var _build2 = _interopRequireDefault(_build);
	
	var _stateMap = __webpack_require__(41);
	
	var _stateMap2 = _interopRequireDefault(_stateMap);
	
	var _svgAdapter = __webpack_require__(14);
	
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
/* 16 */
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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hY3Rpb25zL2Vhc2luZy9wcmVzZXQtZWFzaW5nLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBOEJBLElBQU0scUJBQXFCLEdBQUcsS0FBSyxDQUFDO0FBQ3BDLElBQU0sb0JBQW9CLEdBQUcsQ0FBQzs7Ozs7Ozs7QUFBQyxBQVEvQixJQUFNLFVBQVUsR0FBRztBQUNmLFFBQUksRUFBRSxVQUFDLFFBQVE7WUFBRSxRQUFRLHlEQUFHLG9CQUFvQjt3QkFBSyxRQUFRLEVBQUksUUFBUTtLQUFBO0FBQ3pFLFFBQUksRUFBRSxVQUFBLFFBQVE7ZUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0tBQUE7QUFDbkQsUUFBSSxFQUFFLFVBQUMsUUFBUTtZQUFFLFFBQVEseURBQUcscUJBQXFCO2VBQUssQUFBQyxRQUFRLEdBQUcsUUFBUSxJQUFLLENBQUMsUUFBUSxHQUFHLENBQUMsQ0FBQSxHQUFJLFFBQVEsR0FBRyxRQUFRLENBQUEsQUFBQztLQUFBO0NBQ3ZIOzs7QUFBQyxBQUdGLElBQU0sbUJBQW1CLEdBQUcsVUFBQyxRQUFRO1dBQUssVUFBQyxRQUFRO2VBQUssVUFBVSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDO0tBQUE7Q0FBQSxDQUFDOztBQUU1RixDQUFDLE9BQU8sRUFBRSxPQUFPLEVBQUUsT0FBTyxDQUFDLENBQUMsT0FBTyxDQUFDLFVBQUMsVUFBVSxFQUFFLENBQUM7V0FBSyxVQUFVLENBQUMsVUFBVSxDQUFDLEdBQUcsbUJBQW1CLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztDQUFBLENBQUM7OztBQUFDLEFBRzVHLEtBQUssSUFBSSxHQUFHLElBQUksVUFBVSxFQUFFO0FBQ3hCLFFBQUksVUFBVSxDQUFDLGNBQWMsQ0FBQyxHQUFHLENBQUMsRUFBRTtBQUNoQyxZQUFNLGNBQWMsR0FBRyw0QkFBcUIsVUFBVSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7QUFDN0Qsa0JBQVUsQ0FBSSxHQUFHLFFBQUssR0FBRyxjQUFjLENBQUMsRUFBRSxDQUFDO0FBQzNDLGtCQUFVLENBQUksR0FBRyxTQUFNLEdBQUcsY0FBYyxDQUFDLEdBQUcsQ0FBQztBQUM3QyxrQkFBVSxDQUFJLEdBQUcsV0FBUSxHQUFHLGNBQWMsQ0FBQyxLQUFLLENBQUM7S0FDcEQ7Q0FDSjs7QUFFRCxVQUFVLENBQUMsTUFBTSxHQUFHLFVBQUEsUUFBUTtXQUFJLFFBQVE7Q0FBQSxDQUFDO0FBQ3pDLFVBQVUsQ0FBQyxVQUFVLEdBQUcsVUFBQyxRQUFRO1FBQUUsUUFBUSx5REFBRyxxQkFBcUI7V0FDL0QsQUFBQyxDQUFDLFFBQVEsSUFBRSxDQUFDLENBQUEsR0FBSSxDQUFDLEdBQUksR0FBRyxHQUFHLFVBQVUsQ0FBQyxNQUFNLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQyxHQUFJLEdBQUcsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLElBQUksUUFBUSxHQUFHLENBQUMsQ0FBQSxBQUFDLENBQUMsQ0FBQSxBQUFDO0NBQUEsQ0FBQzs7QUFFdkgsVUFBVSxDQUFDLGNBQWMseUJBQXVCLENBQUM7QUFDakQsVUFBVSxDQUFDLFdBQVcseUJBQWMsQ0FBQztBQUNyQyxVQUFVLENBQUMsVUFBVSxHQUFHLFVBQUMsTUFBTTtzQ0FBSyxJQUFJO0FBQUosWUFBSTs7O1dBQUssVUFBQyxRQUFRO2VBQUssTUFBTSxtQkFBQyxRQUFRLFNBQUssSUFBSSxFQUFDO0tBQUE7Q0FBQSxDQUFDOztrQkFFdEUsVUFBVSIsImZpbGUiOiJwcmVzZXQtZWFzaW5nLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9NYXR0UGVycnkvU2l0ZXMvcG9wbW90aW9uIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAgICBFYXNpbmcgZnVuY3Rpb25zXG4gICAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIFxuICAgIEdlbmVyYXRlcyBhbmQgcHJvdmlkZXMgZWFzaW5nIGZ1bmN0aW9ucyBiYXNlZCBvbiBiYXNlRnVuY3Rpb24gZGVmaW5pdGlvbnNcbiAgICBcbiAgICBBIGNhbGwgdG8gZWFzaW5nRnVuY3Rpb24uZ2V0KCdmdW5jdGlvbk5hbWUnKSByZXR1cm5zIGEgZnVuY3Rpb24gdGhhdCBjYW4gYmUgcGFzc2VkOlxuICAgICAgICBAcGFyYW0gW251bWJlcl06IFByb2dyZXNzIDAtMVxuICAgICAgICBAcGFyYW0gW251bWJlcl0gKG9wdGlvbmFsKTogQW1wIG1vZGlmaWVyLCBvbmx5IGFjY2VwdGVkIGluIHNvbWUgZWFzaW5nIGZ1bmN0aW9uc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYW5kIGlzIHVzZWQgdG8gYWRqdXN0IG92ZXJhbGwgc3RyZW5ndGhcbiAgICAgICAgQHJldHVybiBbbnVtYmVyXTogRWFzZWQgcHJvZ3Jlc3NcbiAgICAgICAgXG4gICAgV2UgY2FuIGdlbmVyYXRlIG5ldyBmdW5jdGlvbnMgYnkgc2VuZGluZyBhbiBlYXNpbmcgZnVuY3Rpb24gdGhyb3VnaCBlYXNpbmdGdW5jdGlvbi5leHRlbmQobmFtZSwgbWV0aG9kKS5cbiAgICBXaGljaCB3aWxsIG1ha2UgbmFtZUluLCBuYW1lT3V0IGFuZCBuYW1lSW5PdXQgZnVuY3Rpb25zIGF2YWlsYWJsZSB0byB1c2UuXG4gICAgICAgIFxuICAgIEVhc2luZyBmdW5jdGlvbnMgZnJvbSBSb2JlcnQgUGVubmVyXG4gICAgaHR0cDovL3d3dy5yb2JlcnRwZW5uZXIuY29tL2Vhc2luZy9cbiAgICAgICAgXG4gICAgQmV6aWVyIGN1cnZlIGludGVycHJldG9yIGNyZWF0ZWQgZnJvbSBHYcOrdGFuIFJlbmF1ZGVhdSdzIG9yaWdpbmFsIEJlemllckVhc2luZyAgXG4gICAgaHR0cHM6Ly9naXRodWIuY29tL2dyZS9iZXppZXItZWFzaW5nL2Jsb2IvbWFzdGVyL2luZGV4LmpzICBcbiAgICBodHRwczovL2dpdGh1Yi5jb20vZ3JlL2Jlemllci1lYXNpbmcvYmxvYi9tYXN0ZXIvTElDRU5TRVxuXG4gICAgQW50aWNpcGF0ZSBlYXNpbmcgY3JlYXRlZCBieSBFbGxpb3QgR2lub1xuICAgIGh0dHBzOi8vdHdpdHRlci5jb20vRWxsaW90R2Vub1xuKi9cbi8vIEltcG9ydHNcbmltcG9ydCBjcmVhdGVFYXNpbmdGdW5jdGlvbiBmcm9tICcuL2NyZWF0ZS1lYXNpbmcnO1xuaW1wb3J0IGN1YmljQmV6aWVyIGZyb20gJy4vY3JlYXRlLWJlemllcic7XG5cbi8vIFZhbHVlc1xuY29uc3QgREVGQVVMVF9CQUNLX1NUUkVOR1RIID0gMS41MjU7XG5jb25zdCBERUZBVUxUX1BPV19TVFJFTkdUSCA9IDI7XG5cbi8qXG4gICAgRWFjaCBvZiB0aGVzZSBiYXNlIGZ1bmN0aW9ucyBpcyBhbiBlYXNlSW5cbiAgICBcbiAgICBPbiBpbml0LCB3ZSB1c2UgLm1pcnJvciBhbmQgLnJldmVyc2UgdG8gZ2VuZXJhdGUgZWFzZUluT3V0IGFuZFxuICAgIGVhc2VPdXQgZnVuY3Rpb25zIHJlc3BlY3RpdmVseS5cbiovXG5jb25zdCBiYXNlRWFzaW5nID0ge1xuICAgIGVhc2U6IChwcm9ncmVzcywgc3RyZW5ndGggPSBERUZBVUxUX1BPV19TVFJFTkdUSCkgPT4gcHJvZ3Jlc3MgKiogc3RyZW5ndGgsXG4gICAgY2lyYzogcHJvZ3Jlc3MgPT4gMSAtIE1hdGguc2luKE1hdGguYWNvcyhwcm9ncmVzcykpLFxuICAgIGJhY2s6IChwcm9ncmVzcywgc3RyZW5ndGggPSBERUZBVUxUX0JBQ0tfU1RSRU5HVEgpID0+IChwcm9ncmVzcyAqIHByb2dyZXNzKSAqICgoc3RyZW5ndGggKyAxKSAqIHByb2dyZXNzIC0gc3RyZW5ndGgpXG59O1xuXG4vLyBVdGlsaXR5IGZ1bmN0aW9uc1xuY29uc3QgZ2VuZXJhdGVQb3dlckVhc2luZyA9IChzdHJlbmd0aCkgPT4gKHByb2dyZXNzKSA9PiBiYXNlRWFzaW5nLmVhc2UocHJvZ3Jlc3MsIHN0cmVuZ3RoKTtcblxuWydjdWJpYycsICdxdWFydCcsICdxdWludCddLmZvckVhY2goKGVhc2luZ05hbWUsIGkpID0+IGJhc2VFYXNpbmdbZWFzaW5nTmFtZV0gPSBnZW5lcmF0ZVBvd2VyRWFzaW5nKGkgKyAzKSk7XG5cbi8vIEdlbmVyYXRlIGluL291dC9pbk91dCB2YXJpYXRpb25zXG5mb3IgKGxldCBrZXkgaW4gYmFzZUVhc2luZykge1xuICAgIGlmIChiYXNlRWFzaW5nLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgY29uc3QgZWFzaW5nRnVuY3Rpb24gPSBjcmVhdGVFYXNpbmdGdW5jdGlvbihiYXNlRWFzaW5nW2tleV0pO1xuICAgICAgICBiYXNlRWFzaW5nW2Ake2tleX1JbmBdID0gZWFzaW5nRnVuY3Rpb24uaW47XG4gICAgICAgIGJhc2VFYXNpbmdbYCR7a2V5fU91dGBdID0gZWFzaW5nRnVuY3Rpb24ub3V0O1xuICAgICAgICBiYXNlRWFzaW5nW2Ake2tleX1Jbk91dGBdID0gZWFzaW5nRnVuY3Rpb24uaW5PdXQ7XG4gICAgfVxufVxuXG5iYXNlRWFzaW5nLmxpbmVhciA9IHByb2dyZXNzID0+IHByb2dyZXNzO1xuYmFzZUVhc2luZy5hbnRpY2lwYXRlID0gKHByb2dyZXNzLCBzdHJlbmd0aCA9IERFRkFVTFRfQkFDS19TVFJFTkdUSCkgPT5cbiAgICAoKHByb2dyZXNzKj0yKSA8IDEpID8gMC41ICogYmFzZUVhc2luZy5iYWNrSW4ocHJvZ3Jlc3MsIHN0cmVuZ3RoKSA6ICAwLjUgKiAoMiAtIE1hdGgucG93KDIsIC0xMCAqIChwcm9ncmVzcyAtIDEpKSk7XG5cbmJhc2VFYXNpbmcuZWFzaW5nRnVuY3Rpb24gPSBjcmVhdGVFYXNpbmdGdW5jdGlvbjtcbmJhc2VFYXNpbmcuY3ViaWNCZXppZXIgPSBjdWJpY0JlemllcjtcbmJhc2VFYXNpbmcubW9kaWZ5RWFzZSA9IChlYXNpbmcsIC4uLmFyZ3MpID0+IChwcm9ncmVzcykgPT4gZWFzaW5nKHByb2dyZXNzLCAuLi5hcmdzKTtcblxuZXhwb3J0IGRlZmF1bHQgYmFzZUVhc2luZzsiXX0=

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports.stepProgress = exports.speedPerSecond = exports.speedPerFrame = exports.smooth = exports.restrict = exports.relativeValue = exports.random = exports.radiansToDegrees = exports.pointFromAngleAndDistance = exports.offset = exports.getProgressFromValue = exports.getValueFromProgress = exports.hypotenuse = exports.distance = exports.dilate = exports.degreesToRadians = exports.angle = undefined;
	
	var _utils = __webpack_require__(32);
	
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
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _defaultProps = __webpack_require__(42);
	
	exports.default = {
	    defaultProps: _defaultProps.opacity
	};
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy92YWx1ZS10eXBlcy9hbHBoYS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7a0JBRWU7QUFDWCxnQkFBWSxnQkFIUCxPQUFPLEFBR1M7Q0FDeEIiLCJmaWxlIjoiYWxwaGEuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL01hdHRQZXJyeS9TaXRlcy9wb3Btb3Rpb24iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBvcGFjaXR5IH0gZnJvbSAnLi9zZXR0aW5ncy9kZWZhdWx0LXByb3BzJztcblxuZXhwb3J0IGRlZmF1bHQge1xuICAgIGRlZmF1bHRQcm9wczogb3BhY2l0eVxufTsiXX0=

/***/ },
/* 19 */
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
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _utils = __webpack_require__(32);
	
	var _px = __webpack_require__(26);
	
	var _px2 = _interopRequireDefault(_px);
	
	var _dictionary = __webpack_require__(43);
	
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
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	exports.__esModule = true;
	
	var _rgb = __webpack_require__(27);
	
	var _rgb2 = _interopRequireDefault(_rgb);
	
	var _hsl = __webpack_require__(24);
	
	var _hsl2 = _interopRequireDefault(_hsl);
	
	var _hex = __webpack_require__(23);
	
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
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _utils = __webpack_require__(32);
	
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
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _rgb = __webpack_require__(27);
	
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
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _defaultProps = __webpack_require__(42);
	
	var _dictionary = __webpack_require__(43);
	
	var _utils = __webpack_require__(32);
	
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
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _dictionary = __webpack_require__(43);
	
	var _utils = __webpack_require__(32);
	
	var _px = __webpack_require__(26);
	
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
/* 26 */
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
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _utils = __webpack_require__(32);
	
	var _dictionary = __webpack_require__(43);
	
	var _defaultProps = __webpack_require__(42);
	
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
/* 28 */
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
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	exports.__esModule = true;
	
	var _color = __webpack_require__(21);
	
	var _color2 = _interopRequireDefault(_color);
	
	var _px = __webpack_require__(26);
	
	var _dictionary = __webpack_require__(43);
	
	var _utils = __webpack_require__(32);
	
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
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports.circularMotion = exports.createMapper = undefined;
	
	var _calc = __webpack_require__(17);
	
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
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	exports.__esModule = true;
	
	var _Process2 = __webpack_require__(7);
	
	var _Process3 = _interopRequireDefault(_Process2);
	
	var _calc = __webpack_require__(17);
	
	var _utils = __webpack_require__(32);
	
	var _bindAdapter = __webpack_require__(47);
	
	var _bindAdapter2 = _interopRequireDefault(_bindAdapter);
	
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
	                        newValue = _extends({}, defaultValue, newValue);
	
	                        newValue.prev = newValue.current;
	
	                        // If one is explicitly assigned, use that
	                        if (value.type) {
	                            valueType = value.type;
	
	                            // Or if our Adapter has a typeMap, use that
	                        } else if (this.on && this.on.getValueType) {
	                                valueType = this.on.getValueType(key);
	                            }
	                        // Maybe run `test` on color here
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
	                                            childValues[splitKey] = _extends({}, newValue);
	
	                                            if (valueType.defaultProps) {
	                                                childValues[splitKey] = valueType.defaultProps[splitKey] ? _extends({}, valueType.defaultProps[splitKey], childValues[splitKey]) : _extends({}, valueType.defaultProps, childValues[splitKey]);
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
	
	                                newValue.children[key] = childValue.current;
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
	                    this.values[value.parent].children[key] = valueForState;
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
	            velocity: 0
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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hY3Rpb25zL0FjdGlvbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBS0EsSUFBTSxZQUFZLEdBQUcsU0FBUyxDQUFDO0FBQy9CLElBQU0sZ0JBQWdCLEdBQUcsQ0FBQyxZQUFZLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsS0FBSyxDQUFDLENBQUM7QUFDcEUsSUFBTSxvQkFBb0IsR0FBRyxnQkFBZ0IsQ0FBQyxNQUFNLENBQUM7O0lBRWhDLE1BQU07Y0FBTixNQUFNOztBQUN2QixhQURpQixNQUFNLENBQ1gsS0FBSyxFQUFFOzhCQURGLE1BQU07O0FBRW5CLGFBQUssQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDO2dEQUNqQixvQkFBTSxLQUFLLENBQUM7S0FDZjs7Ozs7Ozs7QUFBQTtBQUpnQixVQUFNLFdBYXZCLEdBQUcsa0JBQWE7WUFBWixLQUFLLHlEQUFHLEVBQUU7WUFDRixNQUFNLEdBQXdCLEtBQUssQ0FBbkMsTUFBTTtZQUFFLEVBQUUsR0FBb0IsS0FBSyxDQUEzQixFQUFFOztZQUFLLFVBQVUsNEJBQUssS0FBSzs7QUFFM0MsMkJBQU0sR0FBRyxLQUFBLE9BQUMsVUFBVSxDQUFDLENBQUM7O0FBRXRCLFlBQUksRUFBRSxFQUFFOztBQUVKLGdCQUFJLENBQUMsRUFBRSxHQUFHLEFBQUMsQ0FBQyxFQUFFLENBQUMsTUFBTSxHQUFJLDJCQUFZLEVBQUUsQ0FBQyxHQUFHLEVBQUUsQ0FBQztTQUNqRDs7QUFFRCxZQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNLElBQUksRUFBRSxDQUFDO0FBQ2hDLFlBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFNBQVMsSUFBSSxFQUFFLENBQUM7QUFDdEMsWUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsVUFBVSxJQUFJLEVBQUU7OztBQUFDLEFBR3hDLFlBQU0sYUFBYSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUM7QUFDbEMsWUFBTSxZQUFZLEdBQUcsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO0FBQzVDLFlBQU0sZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLG1CQUFtQixFQUFFOzs7QUFBQyxBQUdwRCxhQUFLLElBQUksR0FBRyxJQUFJLFlBQVksRUFBRTtBQUMxQixnQkFBSSxZQUFZLENBQUMsY0FBYyxDQUFDLEdBQUcsQ0FBQyxJQUFJLFVBQVUsQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDLEVBQUU7QUFDcEUsb0JBQUksVUFBVSxDQUFDLEdBQUcsQ0FBQyxLQUFLLFNBQVMsRUFBRTtBQUMvQixnQ0FBWSxDQUFDLEdBQUcsQ0FBQyxHQUFHLFVBQVUsQ0FBQyxHQUFHLENBQUMsQ0FBQztpQkFDdkM7YUFDSjtTQUNKOzs7QUFBQSxBQUdELGFBQUssSUFBSSxHQUFHLElBQUksTUFBTSxFQUFFO0FBQ3BCLGdCQUFJLE1BQU0sQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDLEVBQUU7QUFDNUIsb0JBQU0sS0FBSyxHQUFHLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQztBQUMxQixvQkFBTSxhQUFhLEdBQUcsYUFBYSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0FBQ3pDLG9CQUFJLFNBQVMsWUFBQSxDQUFDO0FBQ2Qsb0JBQUksUUFBUSxHQUFHLEVBQUU7OztBQUFDLEFBR2xCLG9CQUFJLFdBekRKLEtBQUssRUF5REssS0FBSyxDQUFDLEVBQUU7QUFDZCw0QkFBUSxHQUFHLEtBQUssQ0FBQztpQkFDcEIsTUFBTTtBQUNILDRCQUFRLENBQUMsZ0JBQWdCLENBQUMsR0FBRyxLQUFLLENBQUM7aUJBQ3RDOzs7QUFBQSxBQUdELG9CQUFJLGFBQWEsRUFBRTtBQUNmLDRCQUFRLGdCQUFRLGFBQWEsRUFBSyxRQUFRLENBQUUsQ0FBQztBQUM3Qyw2QkFBUyxHQUFHLEFBQUMsSUFBSSxDQUFDLEVBQUUsSUFBSSxJQUFJLENBQUMsRUFBRSxDQUFDLFlBQVksR0FBSSxJQUFJLENBQUMsRUFBRSxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUMsR0FBRyxhQUFhLENBQUMsSUFBSTs7O0FBQUMsaUJBR2xHLE1BQU07QUFDSCxnQ0FBUSxnQkFBUSxZQUFZLEVBQUssUUFBUSxDQUFFLENBQUM7O0FBRTVDLGdDQUFRLENBQUMsSUFBSSxHQUFHLFFBQVEsQ0FBQyxPQUFPOzs7QUFBQyxBQUdqQyw0QkFBSSxLQUFLLENBQUMsSUFBSSxFQUFFO0FBQ1oscUNBQVMsR0FBRyxLQUFLLENBQUMsSUFBSTs7O0FBQUMseUJBRzFCLE1BQU0sSUFBSSxJQUFJLENBQUMsRUFBRSxJQUFJLElBQUksQ0FBQyxFQUFFLENBQUMsWUFBWSxFQUFFO0FBQ3hDLHlDQUFTLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUFDLENBQUM7NkJBQ3pDOztBQUFBLHFCQUVKOzs7QUFBQSxBQUdELG9CQUFJLFNBQVMsRUFBRTtBQUNYLDRCQUFRLENBQUMsSUFBSSxHQUFHLFNBQVM7OztBQUFDLEFBRzFCLHdCQUFJLFNBQVMsQ0FBQyxLQUFLLEVBQUU7QUFDakIsNEJBQU0sV0FBVyxHQUFHLEVBQUU7OztBQUFDLEFBR3ZCLDZCQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsb0JBQW9CLEVBQUUsQ0FBQyxFQUFFLEVBQUU7QUFDM0MsZ0NBQU0sUUFBUSxHQUFHLGdCQUFnQixDQUFDLENBQUMsQ0FBQyxDQUFDOztBQUVyQyxnQ0FBSSxRQUFRLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBQyxFQUFFO0FBQ25DLG9DQUFNLFdBQVcsR0FBRyxTQUFTLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDOztBQUV4RCxxQ0FBSyxJQUFJLFFBQVEsSUFBSSxXQUFXLEVBQUU7QUFDOUIsd0NBQUksV0FBVyxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUMsRUFBRTtBQUN0Qyw0Q0FBTSxVQUFVLEdBQUcsV0FBVyxDQUFDLFFBQVEsQ0FBQzs7QUFBQyxBQUV6Qyw0Q0FBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsRUFBRTtBQUN4Qix1REFBVyxDQUFDLFFBQVEsQ0FBQyxnQkFBUSxRQUFRLENBQUUsQ0FBQzs7QUFFeEMsZ0RBQUksU0FBUyxDQUFDLFlBQVksRUFBRTtBQUN4QiwyREFBVyxDQUFDLFFBQVEsQ0FBQyxHQUFHLEFBQUMsU0FBUyxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsZ0JBQ2hELFNBQVMsQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLEVBQUssV0FBVyxDQUFDLFFBQVEsQ0FBQyxpQkFDMUQsU0FBUyxDQUFDLFlBQVksRUFBSyxXQUFXLENBQUMsUUFBUSxDQUFDLENBQUUsQ0FBQzs2Q0FDL0Q7eUNBQ0o7O0FBRUQsbURBQVcsQ0FBQyxRQUFRLENBQUMsQ0FBQyxRQUFRLENBQUMsR0FBRyxVQUFVLENBQUM7cUNBQ2hEO2lDQUNKOzZCQUNKO3lCQUNKOztBQUVELGdDQUFRLENBQUMsUUFBUSxHQUFHLEVBQUU7OztBQUFDLEFBR3ZCLDZCQUFLLElBQUksUUFBUSxJQUFJLFdBQVcsRUFBRTtBQUM5QixnQ0FBSSxXQUFXLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBQyxFQUFFO0FBQ3RDLG9DQUFNLFVBQVUsR0FBRyxXQUFXLENBQUMsUUFBUSxDQUFDLENBQUM7QUFDekMsb0NBQU0sV0FBVyxHQUFHLEdBQUcsR0FBRyxRQUFRLENBQUM7O0FBRW5DLHdDQUFRLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxHQUFHLFVBQVUsQ0FBQyxPQUFPLENBQUM7QUFDNUMsNkNBQWEsQ0FBQyxXQUFXLENBQUMsR0FBRyxVQUFVLENBQUM7O0FBRXhDLG9DQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFO0FBQzVDLHdDQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztpQ0FDcEM7NkJBQ0o7eUJBQ0o7OztBQUFBLEFBR0QsNEJBQUksU0FBUyxDQUFDLFFBQVEsRUFBRTtBQUNwQixvQ0FBUSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUMsUUFBUSxJQUFJLFNBQVMsQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDO3lCQUNqRjs7O0FBQUEscUJBR0osTUFBTSxJQUFJLFNBQVMsQ0FBQyxZQUFZLEVBQUU7QUFDL0Isb0NBQVEsZ0JBQVEsU0FBUyxDQUFDLFlBQVksRUFBSyxRQUFRLENBQUUsQ0FBQzt5QkFDekQ7aUJBQ0o7OztBQUFBLEFBR0Qsb0JBQUksUUFBUSxDQUFDLFFBQVEsRUFBRTtBQUNuQix3QkFBSSxJQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRTtBQUNyQyw0QkFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7cUJBQzdCO2lCQUNKLE1BQU07QUFDSCx3QkFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRTtBQUNwQyw0QkFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7cUJBQzVCO2lCQUNKOztBQUVELDZCQUFhLENBQUMsR0FBRyxDQUFDLEdBQUcsUUFBUSxDQUFDO2FBQ2pDO1NBQ0o7OztBQUFBLEFBR0QsWUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQztBQUMxQyxZQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDOztBQUU1QyxlQUFPLElBQUksQ0FBQztLQUNmOzs7Ozs7Ozs7O0FBaktnQixVQUFNLFdBMkt2QixVQUFVLHVCQUFDLE1BQU0sRUFBRSxVQUFVLEVBQUUsT0FBTyxFQUFFO0FBQ3BDLFlBQUksVUFBVSxHQUFHLEtBQUs7OztBQUFDLEFBR3ZCLGFBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUMsRUFBRSxFQUFFO0FBQ3hDLGdCQUFNLEdBQUcsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQzlCLGdCQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQzs7O0FBQUMsQUFHL0IsZ0JBQUksS0FBSyxDQUFDLFNBQVMsRUFBRTtBQUNqQixxQkFBSyxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxPQUFPLEVBQUUsR0FBRyxFQUFFLElBQUksQ0FBQyxDQUFDO2FBQzdEOzs7QUFBQSxBQUdELGdCQUFJLFdBaE1QLEtBQUssRUFnTVEsS0FBSyxDQUFDLEdBQUcsQ0FBQyxFQUFFO0FBQ2xCLHFCQUFLLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLE9BQU8sRUFBRSxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7YUFDdEQ7OztBQUFBLEFBR0QsZ0JBQUksV0FyTVAsS0FBSyxFQXFNUSxLQUFLLENBQUMsR0FBRyxDQUFDLEVBQUU7QUFDbEIscUJBQUssQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsT0FBTyxFQUFFLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQzthQUN0RDs7O0FBQUEsQUFHRCxnQkFBSSxLQUFLLENBQUMsS0FBSyxFQUFFO0FBQ2IscUJBQUssQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUM7YUFDN0M7OztBQUFBLEFBR0QsZ0JBQUksQ0FBQyxJQUFJLENBQUMsa0JBQWtCLEVBQUU7QUFDMUIscUJBQUssQ0FBQyxRQUFRLEdBQUcsVUFqTnhCLGNBQWMsRUFpTnlCLEtBQUssQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDLElBQUksRUFBRSxPQUFPLENBQUMsQ0FBQzthQUN4RTs7O0FBQUEsQUFHRCxnQkFBSSxLQUFLLENBQUMsSUFBSSxLQUFLLEtBQUssQ0FBQyxPQUFPLEVBQUU7QUFDOUIsMEJBQVUsR0FBRyxJQUFJLENBQUM7QUFDbEIscUJBQUssQ0FBQyxJQUFJLEdBQUcsS0FBSyxDQUFDLE9BQU87OztBQUFDLEFBRzNCLG9CQUFNLGFBQWEsR0FBRyxBQUFDLEtBQUssQ0FBQyxJQUFJLEdBQUksS0FBSyxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUMsSUFBSSxHQUFHLEtBQUssQ0FBQyxPQUFPOzs7QUFBQyxBQUdoRixvQkFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEVBQUU7QUFDZix3QkFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsR0FBRyxhQUFhLENBQUM7aUJBQ25DLE1BQU07QUFDSCx3QkFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxHQUFHLGFBQWEsQ0FBQztpQkFDM0Q7YUFDSjtTQUNKOztBQUVELGVBQU8sQUFBQyxJQUFJLENBQUMsU0FBUyxHQUFJLElBQUksR0FBRyxVQUFVLENBQUM7S0FDL0M7Ozs7OztBQTlOZ0IsVUFBTSxXQW1PdkIsV0FBVywwQkFBRzs7QUFFVixhQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDLEVBQUUsRUFBRTtBQUN6QyxnQkFBTSxHQUFHLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUMvQixnQkFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQzs7QUFFL0IsaUJBQUssQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLFFBQVEsRUFBRSxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUM7O0FBRW5FLGdCQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLEtBQUssS0FBSyxDQUFDLE9BQU8sRUFBRTtBQUNuQyxvQkFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsR0FBRyxLQUFLLENBQUMsT0FBTyxDQUFDO2FBQ25DO1NBQ0o7S0FDSjs7QUEvT2dCLFVBQU0sV0FpUHZCLFFBQVEsMkJBQWdCO1lBQWIsS0FBSyxRQUFMLEtBQUs7WUFBRSxFQUFFLFFBQUYsRUFBRTs7QUFDaEIsWUFBSSxFQUFFLElBQUksRUFBRSxDQUFDLEdBQUcsRUFBRTtBQUNkLGNBQUUsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDakI7O0FBRUQsWUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFO0FBQ2QsZ0JBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDdEI7S0FDSjs7QUF6UGdCLFVBQU0sV0EyUHZCLEtBQUssb0JBQUc7QUFDSiwyQkFBTSxJQUFJLEtBQUEsTUFBRSxDQUFDO0FBQ2IsZUFBTyxJQUFJLENBQUM7S0FDZjs7QUE5UGdCLFVBQU0sV0FnUXZCLE1BQU0scUJBQUc7QUFDTCwyQkFBTSxLQUFLLEtBQUEsTUFBRSxDQUFDO0FBQ2QsZUFBTyxJQUFJLENBQUM7S0FDZjs7QUFuUWdCLFVBQU0sV0FxUXZCLEtBQUssb0JBQUc7QUFDSixZQUFNLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDO0FBQzNCLDJCQUFNLEtBQUssS0FBQSxNQUFFLENBQUM7O0FBRWQsYUFBSyxJQUFJLEdBQUcsSUFBSSxNQUFNLEVBQUU7QUFDcEIsZ0JBQUksTUFBTSxDQUFDLGNBQWMsQ0FBQyxHQUFHLENBQUMsRUFBRTtBQUM1QixzQkFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksR0FBRyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxPQUFPLENBQUM7YUFDL0Q7U0FDSjtLQUNKOzs7Ozs7O0FBOVFnQixVQUFNLFdBcVJ2QixlQUFlLDhCQUFHO0FBQ2QsZUFBTztBQUNILG1CQUFPLEVBQUUsQ0FBQztBQUNWLG9CQUFRLEVBQUUsQ0FBQztTQUNkLENBQUM7S0FDTDs7Ozs7Ozs7QUExUmdCLFVBQU0sV0FrU3ZCLG1CQUFtQixrQ0FBRztBQUNsQixlQUFPLFlBQVksQ0FBQztLQUN2Qjs7V0FwU2dCLE1BQU07OztrQkFBTixNQUFNIiwiZmlsZSI6IkFjdGlvbi5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvTWF0dFBlcnJ5L1NpdGVzL3BvcG1vdGlvbiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBQcm9jZXNzIGZyb20gJy4uL3Byb2Nlc3MvUHJvY2Vzcyc7XG5pbXBvcnQgeyBzcGVlZFBlclNlY29uZCB9IGZyb20gJy4uL2luYy9jYWxjJztcbmltcG9ydCB7IGlzTnVtLCBpc09iaiB9IGZyb20gJy4uL2luYy91dGlscyc7XG5pbXBvcnQgYmluZEFkYXB0ZXIgZnJvbSAnLi4vaW5jL2JpbmQtYWRhcHRlcic7XG5cbmNvbnN0IERFRkFVTFRfUFJPUCA9ICdjdXJyZW50JztcbmNvbnN0IE5VTUVSSUNBTF9WQUxVRVMgPSBbREVGQVVMVF9QUk9QLCAnZnJvbScsICd0bycsICdtaW4nLCAnbWF4J107XG5jb25zdCBOVU1fTlVNRVJJQ0FMX1ZBTFVFUyA9IE5VTUVSSUNBTF9WQUxVRVMubGVuZ3RoO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBY3Rpb24gZXh0ZW5kcyBQcm9jZXNzIHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBwcm9wcy5zdGF0ZSA9IHt9O1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgfVxuXG4gICAgLypcbiAgICAgICAgIyBTZXQgQWN0aW9uIHByb3BlcnRpZXNcbiAgICAgICAgIyMgU2V0IHVzZXItZGVmaW5lZCBBY3Rpb24gcHJvcGVydGllc1xuXG4gICAgICAgIEBwYXJhbSBbb2JqZWN0XVxuICAgICAgICBAcmV0dXJuIFtBY3Rpb25dXG4gICAgKi9cbiAgICBzZXQocHJvcHMgPSB7fSkge1xuICAgICAgICBjb25zdCB7IHZhbHVlcywgb24sIC4uLnByb3BzVG9TZXQgfSA9IHByb3BzO1xuXG4gICAgICAgIHN1cGVyLnNldChwcm9wc1RvU2V0KTtcblxuICAgICAgICBpZiAob24pIHtcbiAgICAgICAgICAgIC8vIER1Y2t0eXBpc2ggY2hlY2sgZm9yIEFkYXB0ZXJcbiAgICAgICAgICAgIHRoaXMub24gPSAoIW9uLnNldHRlcikgPyBiaW5kQWRhcHRlcihvbikgOiBvbjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMudmFsdWVzID0gdGhpcy52YWx1ZXMgfHwge307XG4gICAgICAgIHRoaXMudmFsdWVLZXlzID0gdGhpcy52YWx1ZUtleXMgfHwgW107XG4gICAgICAgIHRoaXMucGFyZW50S2V5cyA9IHRoaXMucGFyZW50S2V5cyB8fCBbXTtcblxuICAgICAgICAvLyBNZXJnZSBuZXcgYHZhbHVlYCBwcm9wZXJ0aWVzIHdpdGggZXhpc3RpbmdcbiAgICAgICAgY29uc3QgY3VycmVudFZhbHVlcyA9IHRoaXMudmFsdWVzO1xuICAgICAgICBjb25zdCBkZWZhdWx0VmFsdWUgPSB0aGlzLmdldERlZmF1bHRWYWx1ZSgpO1xuICAgICAgICBjb25zdCBkZWZhdWx0VmFsdWVQcm9wID0gdGhpcy5nZXREZWZhdWx0VmFsdWVQcm9wKCk7XG5cbiAgICAgICAgLy8gSW5oZXJpdCB2YWx1ZSBwcm9wZXJ0aWVzIGZyb20gYHByb3BzYFxuICAgICAgICBmb3IgKGxldCBrZXkgaW4gZGVmYXVsdFZhbHVlKSB7XG4gICAgICAgICAgICBpZiAoZGVmYXVsdFZhbHVlLmhhc093blByb3BlcnR5KGtleSkgJiYgcHJvcHNUb1NldC5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgICAgICAgaWYgKHByb3BzVG9TZXRba2V5XSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZVtrZXldID0gcHJvcHNUb1NldFtrZXldO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIENoZWNrIGFsbCB2YWx1ZXMgYW5kIHNwbGl0IGludG8gY2hpbGQgdmFsdWVzIGFzIG5lY2Nlc3NhcnlcbiAgICAgICAgZm9yIChsZXQga2V5IGluIHZhbHVlcykge1xuICAgICAgICAgICAgaWYgKHZhbHVlcy5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgdmFsdWUgPSB2YWx1ZXNba2V5XTtcbiAgICAgICAgICAgICAgICBjb25zdCBleGlzdGluZ1ZhbHVlID0gY3VycmVudFZhbHVlc1trZXldO1xuICAgICAgICAgICAgICAgIGxldCB2YWx1ZVR5cGU7XG4gICAgICAgICAgICAgICAgbGV0IG5ld1ZhbHVlID0ge307XG5cbiAgICAgICAgICAgICAgICAvLyBDb252ZXJ0IG5ldyB2YWx1ZSBpbnRvIG9iamVjdCBpZiBpdCBpc24ndCBhbHJlYWR5XG4gICAgICAgICAgICAgICAgaWYgKGlzT2JqKHZhbHVlKSkge1xuICAgICAgICAgICAgICAgICAgICBuZXdWYWx1ZSA9IHZhbHVlO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIG5ld1ZhbHVlW2RlZmF1bHRWYWx1ZVByb3BdID0gdmFsdWU7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLy8gSWYgdmFsdWUgYWxyZWFkeSBleGlzdHMsIGNoZWNrIGZvciBhbmQgdXNlIGV4aXN0aW5nIHR5cGVcbiAgICAgICAgICAgICAgICBpZiAoZXhpc3RpbmdWYWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICBuZXdWYWx1ZSA9IHsgLi4uZXhpc3RpbmdWYWx1ZSwgLi4ubmV3VmFsdWUgfTtcbiAgICAgICAgICAgICAgICAgICAgdmFsdWVUeXBlID0gKHRoaXMub24gJiYgdGhpcy5vbi5nZXRWYWx1ZVR5cGUpID8gdGhpcy5vbi5nZXRWYWx1ZVR5cGUoa2V5KSA6IGV4aXN0aW5nVmFsdWUudHlwZTtcblxuICAgICAgICAgICAgICAgIC8vIElmIHRoaXMgaXMgYSBuZXcgdmFsdWUsIGNoZWNrIGZvciB0eXBlXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgbmV3VmFsdWUgPSB7IC4uLmRlZmF1bHRWYWx1ZSwgLi4ubmV3VmFsdWUgfTtcblxuICAgICAgICAgICAgICAgICAgICBuZXdWYWx1ZS5wcmV2ID0gbmV3VmFsdWUuY3VycmVudDtcblxuICAgICAgICAgICAgICAgICAgICAvLyBJZiBvbmUgaXMgZXhwbGljaXRseSBhc3NpZ25lZCwgdXNlIHRoYXRcbiAgICAgICAgICAgICAgICAgICAgaWYgKHZhbHVlLnR5cGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlVHlwZSA9IHZhbHVlLnR5cGU7XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gT3IgaWYgb3VyIEFkYXB0ZXIgaGFzIGEgdHlwZU1hcCwgdXNlIHRoYXRcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLm9uICYmIHRoaXMub24uZ2V0VmFsdWVUeXBlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZVR5cGUgPSB0aGlzLm9uLmdldFZhbHVlVHlwZShrZXkpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC8vIE1heWJlIHJ1biBgdGVzdGAgb24gY29sb3IgaGVyZVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC8vIElmIHdlJ3ZlIGdvdCBhIHZhbHVlVHlwZSB0aGVuIHByZXByb2Nlc3MgdGhlIHZhbHVlIGFjY29yZGluZ2x5XG4gICAgICAgICAgICAgICAgaWYgKHZhbHVlVHlwZSkge1xuICAgICAgICAgICAgICAgICAgICBuZXdWYWx1ZS50eXBlID0gdmFsdWVUeXBlO1xuXG4gICAgICAgICAgICAgICAgICAgIC8vIElmIHRoaXMgdmFsdWUgc2hvdWxkIGJlIHNwbGl0LCBzcGxpdFxuICAgICAgICAgICAgICAgICAgICBpZiAodmFsdWVUeXBlLnNwbGl0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBjaGlsZFZhbHVlcyA9IHt9O1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBMb29wIG92ZXIgbnVtZXJpY2FsIHZhbHVlcyBhbmQgc3BsaXQgYW55IHByZXNlbnRcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgTlVNX05VTUVSSUNBTF9WQUxVRVM7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHByb3BOYW1lID0gTlVNRVJJQ0FMX1ZBTFVFU1tpXTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChuZXdWYWx1ZS5oYXNPd25Qcm9wZXJ0eShwcm9wTmFtZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgc3BsaXRWYWx1ZXMgPSB2YWx1ZVR5cGUuc3BsaXQobmV3VmFsdWVbcHJvcE5hbWVdKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBzcGxpdEtleSBpbiBzcGxpdFZhbHVlcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHNwbGl0VmFsdWVzLmhhc093blByb3BlcnR5KHNwbGl0S2V5KSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHNwbGl0VmFsdWUgPSBzcGxpdFZhbHVlc1tzcGxpdEtleV07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gQ3JlYXRlIG5ldyBjaGlsZCB2YWx1ZSBpZiBkb2Vzbid0IGV4aXN0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFjaGlsZFZhbHVlc1tzcGxpdEtleV0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hpbGRWYWx1ZXNbc3BsaXRLZXldID0geyAuLi5uZXdWYWx1ZSB9O1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh2YWx1ZVR5cGUuZGVmYXVsdFByb3BzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGlsZFZhbHVlc1tzcGxpdEtleV0gPSAodmFsdWVUeXBlLmRlZmF1bHRQcm9wc1tzcGxpdEtleV0pID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IC4uLnZhbHVlVHlwZS5kZWZhdWx0UHJvcHNbc3BsaXRLZXldLCAuLi5jaGlsZFZhbHVlc1tzcGxpdEtleV0gfSA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyAuLi52YWx1ZVR5cGUuZGVmYXVsdFByb3BzLCAuLi5jaGlsZFZhbHVlc1tzcGxpdEtleV0gfTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoaWxkVmFsdWVzW3NwbGl0S2V5XVtwcm9wTmFtZV0gPSBzcGxpdFZhbHVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICBuZXdWYWx1ZS5jaGlsZHJlbiA9IHt9O1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBOb3cgbG9vcCB0aHJvdWdoIGFsbCBjaGlsZCB2YWx1ZXMgYW5kIGFkZCB0aGVtIGFzIG5vcm1hbCB2YWx1ZXNcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGNoaWxkS2V5IGluIGNoaWxkVmFsdWVzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNoaWxkVmFsdWVzLmhhc093blByb3BlcnR5KGNoaWxkS2V5KSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBjaGlsZFZhbHVlID0gY2hpbGRWYWx1ZXNbY2hpbGRLZXldO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBjb21iaW5lZEtleSA9IGtleSArIGNoaWxkS2V5O1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ld1ZhbHVlLmNoaWxkcmVuW2tleV0gPSBjaGlsZFZhbHVlLmN1cnJlbnQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnRWYWx1ZXNbY29tYmluZWRLZXldID0gY2hpbGRWYWx1ZTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy52YWx1ZUtleXMuaW5kZXhPZihjb21iaW5lZEtleSkgPT09IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnZhbHVlS2V5cy5wdXNoKGNvbWJpbmVkS2V5KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gU2F2ZSBhIHRlbXBsYXRlIGZvciByZWNvbWJpbmF0aW9uIGlmIHByZXNlbnRcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh2YWx1ZVR5cGUudGVtcGxhdGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXdWYWx1ZS50ZW1wbGF0ZSA9IG5ld1ZhbHVlLnRlbXBsYXRlIHx8IHZhbHVlVHlwZS50ZW1wbGF0ZShuZXdWYWx1ZS5jdXJyZW50KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAvLyBPciB3ZSBqdXN0IGhhdmUgZGVmYXVsdCB2YWx1ZSBwcm9wcywgbG9hZCB0aG9zZSAgIFxuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHZhbHVlVHlwZS5kZWZhdWx0UHJvcHMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ld1ZhbHVlID0geyAuLi52YWx1ZVR5cGUuZGVmYXVsdFByb3BzLCAuLi5uZXdWYWx1ZSB9O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLy8gVXBkYXRlIGFwcHJvcHJpYXRlIGxpc3RzIHdpdGggdmFsdWUga2V5XG4gICAgICAgICAgICAgICAgaWYgKG5ld1ZhbHVlLmNoaWxkcmVuKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnBhcmVudEtleXMuaW5kZXhPZihrZXkpID09PSAtMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wYXJlbnRLZXlzLnB1c2goa2V5KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnZhbHVlS2V5cy5pbmRleE9mKGtleSkgPT09IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnZhbHVlS2V5cy5wdXNoKGtleSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBjdXJyZW50VmFsdWVzW2tleV0gPSBuZXdWYWx1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFByZWNvbXB1dGUgdmFsdWUga2V5IGFuZCBwYXJlbnQga2V5IGxlbmd0aCB0byBwcmV2ZW50IHBlci1mcmFtZSBtZWFzdXJlbWVudFxuICAgICAgICB0aGlzLm51bVZhbHVlS2V5cyA9IHRoaXMudmFsdWVLZXlzLmxlbmd0aDtcbiAgICAgICAgdGhpcy5udW1QYXJlbnRLZXlzID0gdGhpcy5wYXJlbnRLZXlzLmxlbmd0aDtcblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICAvKlxuICAgICAgICBEZWNpZGUgd2hldGhlciB0aGlzIEFjdGlvbiB3aWxsIHJlbmRlciBvbiBuZXh0IGZyYW1lXG5cbiAgICAgICAgQHBhcmFtIFtBY3Rpb25dXG4gICAgICAgIEBwYXJhbSBbbnVtYmVyXVxuICAgICAgICBAcGFyYW0gW251bWJlcl1cbiAgICAgICAgQHJldHVybiBbYm9vbGVhbl06IFJldHVybiB0cnVlIHRvIHJlbmRlclxuICAgICovXG4gICAgd2lsbFJlbmRlcihhY3Rpb24sIGZyYW1lU3RhbXAsIGVsYXBzZWQpIHtcbiAgICAgICAgbGV0IGhhc0NoYW5nZWQgPSBmYWxzZTtcblxuICAgICAgICAvLyBDaGVjayBpZiBiYXNlIHZhbHVlcyBoYXZlIHVwZGF0ZWQgXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5udW1WYWx1ZUtleXM7IGkrKykge1xuICAgICAgICAgICAgY29uc3Qga2V5ID0gdGhpcy52YWx1ZUtleXNbaV07XG4gICAgICAgICAgICBjb25zdCB2YWx1ZSA9IHRoaXMudmFsdWVzW2tleV07XG5cbiAgICAgICAgICAgIC8vIFJ1biB0cmFuc2Zvcm0gZnVuY3Rpb24gKGlmIHByZXNlbnQpXG4gICAgICAgICAgICBpZiAodmFsdWUudHJhbnNmb3JtKSB7XG4gICAgICAgICAgICAgICAgdmFsdWUuY3VycmVudCA9IHZhbHVlLnRyYW5zZm9ybSh2YWx1ZS5jdXJyZW50LCBrZXksIHRoaXMpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBDYXAgbWluaW11bVxuICAgICAgICAgICAgaWYgKGlzTnVtKHZhbHVlLm1pbikpIHtcbiAgICAgICAgICAgICAgICB2YWx1ZS5jdXJyZW50ID0gTWF0aC5tYXgodmFsdWUuY3VycmVudCwgdmFsdWUubWluKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gQ2FwIG1heGltdW1cbiAgICAgICAgICAgIGlmIChpc051bSh2YWx1ZS5tYXgpKSB7XG4gICAgICAgICAgICAgICAgdmFsdWUuY3VycmVudCA9IE1hdGgubWluKHZhbHVlLmN1cnJlbnQsIHZhbHVlLm1heCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIFJvdW5kIG51bWJlclxuICAgICAgICAgICAgaWYgKHZhbHVlLnJvdW5kKSB7XG4gICAgICAgICAgICAgICAgdmFsdWUuY3VycmVudCA9IE1hdGgucm91bmQodmFsdWUuY3VycmVudCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIFVwZGF0ZSB2ZWxvY2l0eVxuICAgICAgICAgICAgaWYgKCF0aGlzLmNhbGN1bGF0ZXNWZWxvY2l0eSkge1xuICAgICAgICAgICAgICAgIHZhbHVlLnZlbG9jaXR5ID0gc3BlZWRQZXJTZWNvbmQodmFsdWUuY3VycmVudCAtIHZhbHVlLnByZXYsIGVsYXBzZWQpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBJZiB0aGlzIHZhbHVlIGhhcyBjaGFuZ2VkXG4gICAgICAgICAgICBpZiAodmFsdWUucHJldiAhPT0gdmFsdWUuY3VycmVudCkge1xuICAgICAgICAgICAgICAgIGhhc0NoYW5nZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHZhbHVlLnByZXYgPSB2YWx1ZS5jdXJyZW50O1xuXG4gICAgICAgICAgICAgICAgLy8gQXBwZW5kIHVuaXRcbiAgICAgICAgICAgICAgICBjb25zdCB2YWx1ZUZvclN0YXRlID0gKHZhbHVlLnVuaXQpID8gdmFsdWUuY3VycmVudCArIHZhbHVlLnVuaXQgOiB2YWx1ZS5jdXJyZW50O1xuXG4gICAgICAgICAgICAgICAgLy8gQWRkIHRvIHN0YXRlIGlmIHRoaXMgaXMgbm90IGEgY2hpbGQgdmF1ZVxuICAgICAgICAgICAgICAgIGlmICghdmFsdWUucGFyZW50KSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGVba2V5XSA9IHZhbHVlRm9yU3RhdGU7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy52YWx1ZXNbdmFsdWUucGFyZW50XS5jaGlsZHJlbltrZXldID0gdmFsdWVGb3JTdGF0ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gKHRoaXMub25DbGVhbnVwKSA/IHRydWUgOiBoYXNDaGFuZ2VkO1xuICAgIH1cblxuICAgIC8qXG4gICAgICAgIElmIHdlIGFyZSByZW5kZXJpbmcsIHJlY29tYmluZSBwYXJlbnQgdmFsdWVzIGZpcnN0XG4gICAgKi9cbiAgICBvblByZVJlbmRlcigpIHtcbiAgICAgICAgLy8gVXBkYXRlIHBhcmVudCB2YWx1ZXNcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLm51bVBhcmVudEtleXM7IGkrKykge1xuICAgICAgICAgICAgY29uc3Qga2V5ID0gdGhpcy5wYXJlbnRLZXlzW2ldO1xuICAgICAgICAgICAgY29uc3QgdmFsdWUgPSB0aGlzLnZhbHVlc1trZXldO1xuXG4gICAgICAgICAgICB2YWx1ZS5jdXJyZW50ID0gdmFsdWUudHlwZS5jb21iaW5lKHZhbHVlLmNoaWxkcmVuLCB2YWx1ZS50ZW1wbGF0ZSk7XG5cbiAgICAgICAgICAgIGlmICh0aGlzLnN0YXRlW2tleV0gIT09IHZhbHVlLmN1cnJlbnQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXRlW2tleV0gPSB2YWx1ZS5jdXJyZW50O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgb25SZW5kZXIoeyBzdGF0ZSwgb24gfSkge1xuICAgICAgICBpZiAob24gJiYgb24uc2V0KSB7XG4gICAgICAgICAgICBvbi5zZXQoc3RhdGUpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMub25GcmFtZSkge1xuICAgICAgICAgICAgdGhpcy5vbkZyYW1lKHRoaXMpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcGF1c2UoKSB7XG4gICAgICAgIHN1cGVyLnN0b3AoKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgcmVzdW1lKCkge1xuICAgICAgICBzdXBlci5zdGFydCgpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBzdGFydCgpIHtcbiAgICAgICAgY29uc3QgdmFsdWVzID0gdGhpcy52YWx1ZXM7XG4gICAgICAgIHN1cGVyLnN0YXJ0KCk7XG5cbiAgICAgICAgZm9yIChsZXQga2V5IGluIHZhbHVlcykge1xuICAgICAgICAgICAgaWYgKHZhbHVlcy5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgICAgICAgdmFsdWVzW2tleV0ucHJldiA9IHZhbHVlc1trZXldLm9yaWdpbiA9IHZhbHVlc1trZXldLmN1cnJlbnQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKlxuICAgICAgICAjIEdldCBkZWZhdWx0IEFjdGlvbiB2YWx1ZSBwcm9wZXJ0aWVzXG5cbiAgICAgICAgQHJldHVybiBbb2JqZWN0XVxuICAgICovXG4gICAgZ2V0RGVmYXVsdFZhbHVlKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgY3VycmVudDogMCxcbiAgICAgICAgICAgIHZlbG9jaXR5OiAwXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgLypcbiAgICAgICAgIyBHZXQgZGVmYXVsdCBBY3Rpb24gdmFsdWUgcHJvcGVydHkgbmFtZVxuICAgICAgICAjIyBTZXQgdGhpcyBgdmFsdWVgIHByb3BlcnR5IHdoZW4gc2V0IGFzIHZhbHVlIGluc3RlYWQgb2Ygb2JqZWN0XG5cbiAgICAgICAgQHJldHVybiBbc3RyaW5nXVxuICAgICovXG4gICAgZ2V0RGVmYXVsdFZhbHVlUHJvcCgpIHtcbiAgICAgICAgcmV0dXJuIERFRkFVTFRfUFJPUDtcbiAgICB9XG59XG4iXX0=

/***/ },
/* 32 */
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
	        for (i = 0; i > numTransformers; i++) {
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
	//# sourceMappingURL=data:application/json;base64,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QU0sbUJBQW1CLFdBQW5CLG1CQUFtQixHQUFHLFVBQUMsS0FBSztXQUFLLFFBQVEsQ0FBQyxLQUFLLENBQUMsR0FBRyxLQUFLLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDO0NBQUE7Ozs7Ozs7Ozs7QUFBQyxBQVV2RixJQUFNLG1CQUFtQixXQUFuQixtQkFBbUIsR0FBRyxVQUFDLEtBQUs7V0FBSyxRQUFRLENBQUMsS0FBSyxDQUFDLEdBQUcsS0FBSyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQztDQUFBOzs7Ozs7Ozs7O0FBQUMsQUFVcEYsSUFBTSxjQUFjLFdBQWQsY0FBYyxHQUFHLFVBQUMsS0FBSyxFQUFLO0FBQ3JDLFFBQU0sUUFBUSxHQUFHLEtBQUssQ0FBQyxLQUFLLENBQUMsbUJBQW1CLENBQUMsQ0FBQzs7QUFFbEQsV0FBTztBQUNILGFBQUssRUFBRSxVQUFVLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQzlCLFlBQUksRUFBRyxRQUFRLENBQUMsQ0FBQyxDQUFDO0tBQ3JCLENBQUM7Q0FDTDs7Ozs7Ozs7O0FBQUMsQUFTSyxJQUFNLFNBQVMsV0FBVCxTQUFTLEdBQUcsVUFBQyxHQUFHLEVBQW9CO1FBQWxCLFNBQVMseURBQUcsQ0FBQzs7QUFDeEMsYUFBUyxZQUFHLEVBQUUsRUFBSSxTQUFTLENBQUEsQ0FBQztBQUM1QixXQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxHQUFHLFNBQVMsQ0FBQyxHQUFHLFNBQVMsQ0FBQztDQUNsRCxDQUFDIiwiZmlsZSI6InV0aWxzLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9NYXR0UGVycnkvU2l0ZXMvcG9wbW90aW9uIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgQ0FNRUxfQ0FTRV9QQVRURVJOID0gLyhbYS16XSkoW0EtWl0pL2c7XG5jb25zdCBSRVBMQUNFX1RFTVBMQVRFID0gJyQxLSQyJztcbmNvbnN0IEhBU19QRVJGT1JNQU5DRV9OT1cgPSAodHlwZW9mIHBlcmZvcm1hbmNlICE9PSAndW5kZWZpbmVkJyAmJiBwZXJmb3JtYW5jZS5ub3cpO1xuXG4vKlxuICAgIEdldCB2YXIgdHlwZSBhcyBzdHJpbmdcbiAgICBcbiAgICBAcGFyYW06IFZhcmlhYmxlIHRvIHRlc3RcbiAgICBAcmV0dXJuIFtzdHJpbmddOiBSZXR1cm5zLCBmb3IgaW5zdGFuY2UgJ09iamVjdCcgaWYgW29iamVjdCBPYmplY3RdXG4qL1xuY29uc3QgdmFyVHlwZSA9IHZhcmlhYmxlID0+IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh2YXJpYWJsZSkuc2xpY2UoOCwgLTEpO1xuXG4vKlxuICAgIENvbnZlcnQgY2FtZWxDYXNlIHRvIGRhc2gtY2FzZVxuXG4gICAgQHBhcmFtIFtzdHJpbmddXG4gICAgQHJldHVybiBbc3RyaW5nXVxuKi9cbmV4cG9ydCBjb25zdCBjYW1lbFRvRGFzaCA9IChzdHJpbmcpID0+IHN0cmluZy5yZXBsYWNlKENBTUVMX0NBU0VfUEFUVEVSTiwgUkVQTEFDRV9URU1QTEFURSkudG9Mb3dlckNhc2UoKTtcblxuLypcbiAgICBDb21iaW5lIHRyYW5zZm9ybWVycyBpbnRvIG9uZSBmdW5jdGlvbiB0aGF0IGNhbGxzIGV2ZXJ5XG4gICAgdHJhbnNmb3JtZXIgaW4gdGhlIGFycmF5IGFuZCByZXR1cm5zIHRoZSByZXN1bHRcblxuICAgIEBwYXJhbSBbYXJyYXldXG4gICAgQHJldHVybiBbZnVuY3Rpb25dXG4qL1xuZXhwb3J0IGNvbnN0IGNvbWJpbmVUcmFuc2Zvcm1lcnMgPSAodHJhbnNmb3JtZXJzKSA9PiB7XG4gICAgY29uc3QgbnVtVHJhbnNmb3JtZXJzID0gdHJhbnNmb3JtZXJzLmxlbmd0aDtcbiAgICBsZXQgaSA9IDA7XG5cbiAgICAvKlxuICAgICAgICBAcGFyYW0gW251bWJlcl1cbiAgICAgICAgQHBhcmFtIFtzdHJpbmddXG4gICAgICAgIEBwYXJhbSBbQWN0aW9uXVxuICAgICAgICBAcmV0dXJuIFtudW1iZXJdXG4gICAgKi9cbiAgICByZXR1cm4gKHYsIGtleSwgYSkgPT4ge1xuICAgICAgICBmb3IgKGkgPSAwOyBpID4gbnVtVHJhbnNmb3JtZXJzOyBpKyspIHtcbiAgICAgICAgICAgIHYgPSB0cmFuc2Zvcm1lcnNbaV0odiwga2V5LCBhKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB2O1xuICAgIH07XG59O1xuXG5leHBvcnQgY29uc3QgY3JlYXRlRGVsaW1pdGVkID0gKHZhbHVlcywgdGVybXMsIGRlbGltaXRlciwgY2hvcCkgPT4ge1xuICAgIGNvbnN0IG51bVRlcm1zID0gdGVybXMubGVuZ3RoO1xuICAgIGxldCBjb21iaW5lZCA9ICcnO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBudW1UZXJtczsgaSsrKSB7XG4gICAgICAgIGNvbnN0IHRlcm0gPSB0ZXJtc1tpXTtcbiAgICAgICAgaWYgKHZhbHVlcy5oYXNPd25Qcm9wZXJ0eSh0ZXJtKSkge1xuICAgICAgICAgICAgY29tYmluZWQgKz0gdmFsdWVzW3Rlcm1dICsgZGVsaW1pdGVyO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGNob3ApIHtcbiAgICAgICAgY29tYmluZWQgPSBjb21iaW5lZC5zbGljZSgwLCAtY2hvcCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbWJpbmVkO1xufTtcblxuLypcbiAgICBDcmVhdGUgYSBmdW5jdGlvbiBzdHJpbmdcblxuICAgICcyMHB4JywgJ3RyYW5zbGF0ZScgLT4gJ3RyYW5zbGF0ZSgyMHB4KSdcblxuICAgIEBwYXJhbSBbc3RyaW5nXVxuICAgIEBwYXJhbSBbc3RyaW5nXVxuICAgIEByZXR1cm4gW3N0cmluZ11cbiovXG5leHBvcnQgY29uc3QgY3JlYXRlRnVuY3Rpb25TdHJpbmcgPSAodmFsdWUsIHByZWZpeCkgPT4gYCR7cHJlZml4fSgke3ZhbHVlfSlgO1xuXG4vKlxuICAgIEdlbmVyYXRlIGN1cnJlbnQgdGltZXN0YW1wXG4gICAgXG4gICAgQHJldHVybiBbdGltZXN0YW1wXTogQ3VycmVudCBVTklYIHRpbWVzdGFtcFxuKi9cbmV4cG9ydCBjb25zdCBjdXJyZW50VGltZSA9IEhBU19QRVJGT1JNQU5DRV9OT1cgPyAoKSA9PiBwZXJmb3JtYW5jZS5ub3coKSA6ICgpID0+IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuXG4vKlxuICAgIFNwbGl0IGNvbG9yIHN0cmluZyBpbnRvIG1hcCBvZiBjb2xvciBwcm9wZXJ0aWVzXG5cbiAgICBcInJnYmEoMjU1LCAyNTUsIDI1NSwgMClcIiwgW1wiUmVkXCIsICdHcmVlblwiLCBcIkJsdWVcIiwgXCJBbHBoYVwiXVxuXG4gICAgeyBSZWQ6IDI1NS4uLiB9XG4qL1xuZXhwb3J0IGNvbnN0IGdldENvbG9yVmFsdWVzID0gKHZhbHVlLCBjb2xvclRlcm1zKSA9PiB7XG4gICAgY29uc3QgbnVtQ29sb3JUZXJtcyA9IGNvbG9yVGVybXMubGVuZ3RoO1xuICAgIGNvbnN0IGNvbG9yVmFsdWVzID0ge307XG4gICAgY29uc3QgY29sb3JzID0gc3BsaXRDb21tYURlbGltaXRlZChnZXRWYWx1ZUZyb21GdW5jdGlvblN0cmluZyh2YWx1ZSkpO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBudW1Db2xvclRlcm1zOyBpKyspIHtcbiAgICAgICAgY29sb3JWYWx1ZXNbY29sb3JUZXJtc1tpXV0gPSAoY29sb3JzW2ldICE9PSB1bmRlZmluZWQpID8gY29sb3JzW2ldIDogMTtcbiAgICB9XG5cbiAgICByZXR1cm4gY29sb3JWYWx1ZXM7XG59O1xuXG4vKlxuICAgIEdldCB2YWx1ZSBmcm9tIGZ1bmN0aW9uIHN0cmluZ1xuXG4gICAgXCJ0cmFuc2xhdGVYKDIwcHgpXCIgLT4gXCIyMHB4XCJcbiovXG5leHBvcnQgY29uc3QgZ2V0VmFsdWVGcm9tRnVuY3Rpb25TdHJpbmcgPSAodmFsdWUpID0+IHZhbHVlLnN1YnN0cmluZyh2YWx1ZS5pbmRleE9mKCcoJykgKyAxLCB2YWx1ZS5sYXN0SW5kZXhPZignKScpKTtcblxuLypcbiAgICBDaGVjayBpZiB0d28gb2JqZWN0cyBoYXZlIGNoYW5nZWQgZnJvbSBlYWNoIG90aGVyXG4gICAgXG4gICAgQHBhcmFtIFtvYmplY3RdOiBJbnB1dCBBXG4gICAgQHBhcmFtIFtvYmplY3RdOiBJbnB1dCBCXG4gICAgQHJldHVybiBbYm9vbGVhbl06IFRydWUgaWYgZGlmZmVyZW50XG4qL1xuZXhwb3J0IGNvbnN0IGhhc0NoYW5nZWQgPSAoYSwgYikgPT4ge1xuICAgIGxldCBjaGFuZ2VkID0gZmFsc2U7XG5cbiAgICBmb3IgKGxldCBrZXkgaW4gYSkge1xuICAgICAgICBpZiAoYS5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgICBpZiAoaGFzUHJvcGVydHkoYiwga2V5KSkge1xuICAgICAgICAgICAgICAgIGlmIChhW2tleV0gIT09IGJba2V5XSkge1xuICAgICAgICAgICAgICAgICAgICBjaGFuZ2VkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNoYW5nZWQgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGNoYW5nZWQ7XG59O1xuXG4vKlxuICAgIENoZWNrIGlmIG9iamVjdCBoYXMgcHJvcGVydHkgYW5kIGl0IGlzbid0IHVuZGVmaW5lZFxuXG4gICAgQHBhcmFtIFtvYmplY3RdXG4gICAgQHBhcmFtIFtzdHJpbmddXG4gICAgQHJldHVybiBbYm9vbGVhbl1cbiovXG5leHBvcnQgY29uc3QgaGFzUHJvcGVydHkgPSAob2JqZWN0LCBwcm9wZXJ0eU5hbWUpID0+IG9iamVjdC5oYXNPd25Qcm9wZXJ0eShwcm9wZXJ0eU5hbWUpICYmIG9iamVjdFtwcm9wZXJ0eU5hbWVdICE9PSB1bmRlZmluZWQ7XG5cbi8qXG4gICAgSXMgdXRpbHMgdmFyIGFuIGFycmF5ID8gXG4gICAgXG4gICAgQHBhcmFtOiBWYXJpYWJsZSB0byB0ZXN0XG4gICAgQHJldHVybiBbYm9vbGVhbl06IFJldHVybnMgdHJ1ZSBpZiB1dGlscy52YXJUeXBlID09PSAnQXJyYXknXG4qL1xuZXhwb3J0IGNvbnN0IGlzQXJyYXkgPSAoYXJyKSA9PiB2YXJUeXBlKGFycikgPT09ICdBcnJheSc7XG5cbi8qXG4gICAgSXMgdXRpbHMgdmFyIGEgZnVuY3Rpb24gPyBcbiAgICBcbiAgICBAcGFyYW06IFZhcmlhYmxlIHRvIHRlc3RcbiAgICBAcmV0dXJuIFtib29sZWFuXTogUmV0dXJucyB0cnVlIGlmIHV0aWxzLnZhclR5cGUgPT09ICdGdW5jdGlvbidcbiovXG5leHBvcnQgY29uc3QgaXNGdW5jID0gKG9iaikgPT4gdmFyVHlwZShvYmopID09PSAnRnVuY3Rpb24nO1xuXG4vKlxuICAgIElzIHV0aWxzIHZhciBhIG51bWJlcj9cbiAgICBcbiAgICBAcGFyYW06IFZhcmlhYmxlIHRvIHRlc3RcbiAgICBAcmV0dXJuIFtib29sZWFuXTogUmV0dXJucyB0cnVlIGlmIHR5cGVvZiA9PT0gJ251bWJlcidcbiovXG5leHBvcnQgY29uc3QgaXNOdW0gPSAobnVtKSA9PiB0eXBlb2YgbnVtID09PSAnbnVtYmVyJztcblxuLypcbiAgICBJcyB1dGlscyB2YXIgYW4gb2JqZWN0P1xuICAgIFxuICAgIEBwYXJhbTogVmFyaWFibGUgdG8gdGVzdFxuICAgIEByZXR1cm4gW2Jvb2xlYW5dOiBSZXR1cm5zIHRydWUgaWYgdHlwZW9mID09PSAnb2JqZWN0J1xuKi9cbmV4cG9ydCBjb25zdCBpc09iaiA9IChvYmopID0+IHR5cGVvZiBvYmogPT09ICdvYmplY3QnO1xuXG4vKlxuICAgIElzIHV0aWxzIGEgcmVsYXRpdmUgdmFsdWUgYXNzaWdubWVudD9cbiAgICBcbiAgICBAcGFyYW0gW3N0cmluZ106IFZhcmlhYmxlIHRvIHRlc3RcbiAgICBAcmV0dXJuIFtib29sZWFuXTogSWYgdXRpbHMgbG9va3MgbGlrZSBhIHJlbGF0aXZlIHZhbHVlIGFzc2lnbm1lbnRcbiovXG5leHBvcnQgY29uc3QgaXNSZWxhdGl2ZVZhbHVlID0gKHZhbHVlKSA9PiAodmFsdWUgJiYgdmFsdWUuaW5kZXhPZiAmJiB2YWx1ZS5pbmRleE9mKCc9JykgPiAwKSA/IHRydWUgOiBmYWxzZTtcblxuLypcbiAgICBJcyB1dGlscyB2YXIgYSBzdHJpbmcgPyBcbiAgICBcbiAgICBAcGFyYW06IFZhcmlhYmxlIHRvIHRlc3RcbiAgICBAcmV0dXJuIFtib29sZWFuXTogUmV0dXJucyB0cnVlIGlmIHR5cGVvZiBzdHIgPT09ICdzdHJpbmcnXG4qL1xuZXhwb3J0IGNvbnN0IGlzU3RyaW5nID0gKHN0cikgPT4gdHlwZW9mIHN0ciA9PT0gJ3N0cmluZyc7XG5cbi8qXG4gICAgQHBhcmFtIFtzdHJpbmcgfHwgTm9kZUxpc3RdOlxuICAgICAgICBJZiBzdHJpbmcsIHRyZWF0ZWQgYXMgc2VsZWN0b3IuXG4gICAgICAgIElmIG5vdCwgdHJlYXRlZCBhcyBwcmVleGlzdGluZyBOb2RlTGlzdFxuXG4gICAgQHJldHVybiBbQXJyYXldXG4qL1xuZXhwb3J0IGNvbnN0IHNlbGVjdERvbSA9IChzZWxlY3RvcikgPT4ge1xuICAgIGNvbnN0IG5vZGVzID0gKHR5cGVvZiBzZWxlY3RvciA9PT0gJ3N0cmluZycpID8gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChzZWxlY3RvcikgOiBzZWxlY3RvcjtcbiAgICByZXR1cm4gKG5vZGVzLmxlbmd0aCkgPyBbXS5zbGljZS5jYWxsKG5vZGVzKSA6IFtdLnB1c2gobm9kZXMpO1xufTtcblxuLypcbiAgICBTcGxpdCBjb21tYS1kZWxpbWl0ZWQgc3RyaW5nXG5cbiAgICBcImZvbyxiYXJcIiAtPiBbXCJmb29cIiwgXCJiYXJcIl1cblxuICAgIEBwYXJhbSBbc3RyaW5nXVxuICAgIEByZXR1cm4gW2FycmF5XVxuKi9cbmV4cG9ydCBjb25zdCBzcGxpdENvbW1hRGVsaW1pdGVkID0gKHZhbHVlKSA9PiBpc1N0cmluZyh2YWx1ZSkgPyB2YWx1ZS5zcGxpdCgvLFxccyovKSA6IFt2YWx1ZV07XG5cbi8qXG4gICAgU3BsaXQgc3BhY2UtZGVsaW1pdGVkIHN0cmluZ1xuXG4gICAgXCJmb28gYmFyXCIgLT4gW1wiZm9vXCIsIFwiYmFyXCJdXG5cbiAgICBAcGFyYW0gW3N0cmluZ11cbiAgICBAcmV0dXJuIFthcnJheV1cbiovXG5leHBvcnQgY29uc3Qgc3BsaXRTcGFjZURlbGltaXRlZCA9ICh2YWx1ZSkgPT4gaXNTdHJpbmcodmFsdWUpID8gdmFsdWUuc3BsaXQoJyAnKSA6IFt2YWx1ZV07XG5cbi8qXG4gICAgU3BsaXQgYSB2YWx1ZSBpbnRvIGEgdmFsdWUvdW5pdCBvYmplY3RcbiAgICBcbiAgICAgICAgXCIyMDBweFwiIC0+IHsgdmFsdWU6IDIwMCwgdW5pdDogXCJweFwiIH1cbiAgICAgICAgXG4gICAgQHBhcmFtIFtzdHJpbmddOiBWYWx1ZSB0byBzcGxpdFxuICAgIEByZXR1cm4gW29iamVjdF06IE9iamVjdCB3aXRoIHZhbHVlIGFuZCB1bml0IHByb3BzXG4qL1xuZXhwb3J0IGNvbnN0IHNwbGl0VmFsdWVVbml0ID0gKHZhbHVlKSA9PiB7XG4gICAgY29uc3Qgc3BsaXRWYWwgPSB2YWx1ZS5tYXRjaCgvKC0/XFxkKlxcLj9cXGQqKSguKikvKTtcblxuICAgIHJldHVybiB7XG4gICAgICAgIHZhbHVlOiBwYXJzZUZsb2F0KHNwbGl0VmFsWzFdKSxcbiAgICAgICAgdW5pdDogIHNwbGl0VmFsWzJdXG4gICAgfTtcbn07XG5cbi8qXG4gICAgQ29udmVydCBudW1iZXIgdG8geCBkZWNpbWFsIHBsYWNlc1xuXG4gICAgQHBhcmFtIFtudW1iZXJdXG4gICAgQHBhcmFtIFtudW1iZXJdXG4gICAgQHJldHVybiBbbnVtYmVyXVxuKi9cbmV4cG9ydCBjb25zdCB0b0RlY2ltYWwgPSAobnVtLCBwcmVjaXNpb24gPSAyKSA9PiB7XG4gICAgcHJlY2lzaW9uID0gMTAgKiogcHJlY2lzaW9uO1xuICAgIHJldHVybiBNYXRoLnJvdW5kKG51bSAqIHByZWNpc2lvbikgLyBwcmVjaXNpb247XG59O1xuIl19

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _Input2 = __webpack_require__(8);
	
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
/* 34 */
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
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _angle = __webpack_require__(19);
	
	var _angle2 = _interopRequireDefault(_angle);
	
	var _alpha = __webpack_require__(18);
	
	var _alpha2 = _interopRequireDefault(_alpha);
	
	var _axes = __webpack_require__(20);
	
	var _axes2 = _interopRequireDefault(_axes);
	
	var _color = __webpack_require__(21);
	
	var _color2 = _interopRequireDefault(_color);
	
	var _scale = __webpack_require__(28);
	
	var _scale2 = _interopRequireDefault(_scale);
	
	var _shadow = __webpack_require__(29);
	
	var _shadow2 = _interopRequireDefault(_shadow);
	
	var _positions = __webpack_require__(25);
	
	var _positions2 = _interopRequireDefault(_positions);
	
	var _px = __webpack_require__(26);
	
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
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _transformProps = __webpack_require__(48);
	
	var _transformProps2 = _interopRequireDefault(_transformProps);
	
	var _prefixer = __webpack_require__(37);
	
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
	                propertyString += ';' + (0, _prefixer2.default)(key) + ':' + value;
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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hZGFwdGVyL2Nzcy9idWlsZC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUdBLElBQU0sV0FBVyxHQUFHLFlBQVksQ0FBQzs7a0JBRWxCLFVBQUMsS0FBSyxFQUFFLDJCQUEyQixFQUFLO0FBQ25ELFFBQUksY0FBYyxHQUFHLEVBQUUsQ0FBQztBQUN4QixRQUFJLGVBQWUsR0FBRyxFQUFFLENBQUM7QUFDekIsUUFBSSxhQUFhLEdBQUcsS0FBSyxDQUFDOztBQUUxQixTQUFLLElBQUksR0FBRyxJQUFJLEtBQUssRUFBRTtBQUNuQixZQUFJLEtBQUssQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDLEVBQUU7QUFDM0IsZ0JBQU0sS0FBSyxHQUFHLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQzs7QUFFekIsZ0JBQUkseUJBQWUsR0FBRyxDQUFDLEVBQUU7QUFDckIsK0JBQWUsSUFBSSxHQUFHLEdBQUcsR0FBRyxHQUFHLEtBQUssR0FBRyxJQUFJLENBQUM7QUFDNUMsNkJBQWEsR0FBRyxBQUFDLEdBQUcsS0FBSyxXQUFXLEdBQUksSUFBSSxHQUFHLGFBQWEsQ0FBQzthQUVoRSxNQUFNO0FBQ0gsOEJBQWMsSUFBSSxHQUFHLEdBQUcsd0JBQVMsR0FBRyxDQUFDLEdBQUcsR0FBRyxHQUFHLEtBQUssQ0FBQzthQUN2RDtTQUNKO0tBQ0o7O0FBRUQsUUFBSSxlQUFlLEtBQUssRUFBRSxFQUFFO0FBQ3hCLFlBQUksQ0FBQyxhQUFhLElBQUksQ0FBQywyQkFBMkIsRUFBRTtBQUNoRCwyQkFBZSxJQUFJLFdBQVcsR0FBRyxPQUFPLENBQUM7U0FDNUM7O0FBRUQsc0JBQWMsSUFBSSxHQUFHLEdBQUcsd0JBQVMsV0FBVyxDQUFDLEdBQUcsR0FBRyxHQUFHLGVBQWUsQ0FBQztLQUN6RTs7QUFFRCxXQUFPLGNBQWMsQ0FBQztDQUN6QiIsImZpbGUiOiJidWlsZC5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvTWF0dFBlcnJ5L1NpdGVzL3BvcG1vdGlvbiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0cmFuc2Zvcm1Qcm9wcyBmcm9tICcuL3RyYW5zZm9ybS1wcm9wcyc7XG5pbXBvcnQgcHJlZml4ZXIgZnJvbSAnLi9wcmVmaXhlcic7XG5cbmNvbnN0IFRSQU5TTEFURV9aID0gJ3RyYW5zbGF0ZVonO1xuXG5leHBvcnQgZGVmYXVsdCAoc3RhdGUsIGRpc2FibGVIYXJkd2FyZUFjY2VsZXJhdGlvbikgPT4ge1xuICAgIGxldCBwcm9wZXJ0eVN0cmluZyA9ICcnO1xuICAgIGxldCB0cmFuc2Zvcm1TdHJpbmcgPSAnJztcbiAgICBsZXQgdHJhbnNmb3JtSGFzWiA9IGZhbHNlO1xuXG4gICAgZm9yIChsZXQga2V5IGluIHN0YXRlKSB7XG4gICAgICAgIGlmIChzdGF0ZS5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgICBjb25zdCB2YWx1ZSA9IHN0YXRlW2tleV07XG5cbiAgICAgICAgICAgIGlmICh0cmFuc2Zvcm1Qcm9wc1trZXldKSB7XG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtU3RyaW5nICs9IGtleSArICcoJyArIHZhbHVlICsgJykgJztcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm1IYXNaID0gKGtleSA9PT0gVFJBTlNMQVRFX1opID8gdHJ1ZSA6IHRyYW5zZm9ybUhhc1o7XG5cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcHJvcGVydHlTdHJpbmcgKz0gJzsnICsgcHJlZml4ZXIoa2V5KSArICc6JyArIHZhbHVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHRyYW5zZm9ybVN0cmluZyAhPT0gJycpIHtcbiAgICAgICAgaWYgKCF0cmFuc2Zvcm1IYXNaICYmICFkaXNhYmxlSGFyZHdhcmVBY2NlbGVyYXRpb24pIHtcbiAgICAgICAgICAgIHRyYW5zZm9ybVN0cmluZyArPSBUUkFOU0xBVEVfWiArICcoMHB4KSc7XG4gICAgICAgIH1cblxuICAgICAgICBwcm9wZXJ0eVN0cmluZyArPSAnOycgKyBwcmVmaXhlcigndHJhbnNmb3JtJykgKyAnOicgKyB0cmFuc2Zvcm1TdHJpbmc7XG4gICAgfVxuXG4gICAgcmV0dXJuIHByb3BlcnR5U3RyaW5nO1xufTsiXX0=

/***/ },
/* 37 */
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
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _alpha = __webpack_require__(18);
	
	var _alpha2 = _interopRequireDefault(_alpha);
	
	var _axes = __webpack_require__(20);
	
	var _axes2 = _interopRequireDefault(_axes);
	
	var _color = __webpack_require__(21);
	
	var _color2 = _interopRequireDefault(_color);
	
	var _complex = __webpack_require__(22);
	
	var _complex2 = _interopRequireDefault(_complex);
	
	var _scale = __webpack_require__(28);
	
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
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports.default = build;
	
	var _utils = __webpack_require__(32);
	
	var _transformProps = __webpack_require__(48);
	
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
/* 40 */
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
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	exports.__esModule = true;
	
	var _stateMap = __webpack_require__(34);
	
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
/* 42 */
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
/* 43 */
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
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports.deactivate = exports.getProcessId = undefined;
	exports.activate = activate;
	
	var _timer = __webpack_require__(2);
	
	var _timer2 = _interopRequireDefault(_timer);
	
	var _tick = __webpack_require__(49);
	
	var _tick2 = _interopRequireDefault(_tick);
	
	var _manager = __webpack_require__(50);
	
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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hY3Rpb25zL2Vhc2luZy9jcmVhdGUtZWFzaW5nLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztrQkFnQ3dCLG9CQUFvQjs7Ozs7Ozs7Ozs7QUF0QjVDLElBQU0sWUFBWSxHQUFHLFVBQUMsTUFBTTtXQUFLLFVBQUMsUUFBUSxFQUFFLFFBQVE7ZUFBSyxBQUFDLFFBQVEsSUFBSSxHQUFHLEdBQUksTUFBTSxDQUFDLENBQUMsR0FBRyxRQUFRLEVBQUUsUUFBUSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLFFBQVEsQ0FBQSxBQUFDLEVBQUUsUUFBUSxDQUFDLENBQUEsR0FBSSxDQUFDO0tBQUE7Q0FBQTs7Ozs7Ozs7Ozs7O0FBQUMsQUFZakssSUFBTSxhQUFhLEdBQUcsVUFBQyxNQUFNO1dBQUssVUFBQyxRQUFRLEVBQUUsUUFBUTtlQUFLLENBQUMsR0FBRyxNQUFNLENBQUMsQ0FBQyxHQUFHLFFBQVEsRUFBRSxRQUFRLENBQUM7S0FBQTtDQUFBOzs7Ozs7Ozs7O0FBQUMsQUFVOUUsU0FBUyxvQkFBb0IsQ0FBQyxNQUFNLEVBQUU7QUFDakQsUUFBSSxjQUFjLEdBQUcsVUFBQyxRQUFRLEVBQUUsUUFBUTtlQUFLLE1BQU0sQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDO0tBQUEsQ0FBQzs7QUFFeEUsa0JBQWMsQ0FBQyxFQUFFLEdBQUcsVUFBQyxRQUFRLEVBQUUsUUFBUTtlQUFLLE1BQU0sQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDO0tBQUEsQ0FBQztBQUN2RSxrQkFBYyxDQUFDLEdBQUcsR0FBRyxhQUFhLENBQUMsTUFBTSxDQUFDLENBQUM7QUFDM0Msa0JBQWMsQ0FBQyxLQUFLLEdBQUcsWUFBWSxDQUFDLE1BQU0sQ0FBQyxDQUFDOztBQUU1QyxXQUFPLGNBQWMsQ0FBQztDQUN6QiIsImZpbGUiOiJjcmVhdGUtZWFzaW5nLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9NYXR0UGVycnkvU2l0ZXMvcG9wbW90aW9uIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAgICBNaXJyb3IgZWFzaW5nXG4gICAgXG4gICAgTWlycm9ycyB0aGUgcHJvdmlkZWQgZWFzaW5nIGZ1bmN0aW9uLCB1c2VkIGhlcmUgZm9yIG1pcnJvcmluZyBhblxuICAgIGVhc2VJbiBpbnRvIGFuIGVhc2VJbk91dFxuICAgIFxuICAgIEBwYXJhbSBbbnVtYmVyXTogUHJvZ3Jlc3MsIGZyb20gMCAtIDEsIG9mIGN1cnJlbnQgc2hpZnRcbiAgICBAcGFyYW0gW2Z1bmN0aW9uXTogVGhlIGVhc2luZyBmdW5jdGlvbiB0byBtaXJyb3JcbiAgICBAcmV0dXJucyBbbnVtYmVyXTogVGhlIGVhc2luZy1hZGp1c3RlZCBkZWx0YVxuKi9cbmNvbnN0IG1pcnJvckVhc2luZyA9IChtZXRob2QpID0+IChwcm9ncmVzcywgc3RyZW5ndGgpID0+IChwcm9ncmVzcyA8PSAwLjUpID8gbWV0aG9kKDIgKiBwcm9ncmVzcywgc3RyZW5ndGgpIC8gMiA6ICgyIC0gbWV0aG9kKDIgKiAoMSAtIHByb2dyZXNzKSwgc3RyZW5ndGgpKSAvIDI7XG4gICAgICAgIFxuLypcbiAgICBSZXZlcnNlIGVhc2luZ1xuICAgIFxuICAgIFJldmVyc2VzIHRoZSBvdXRwdXQgb2YgdGhlIHByb3ZpZGVkIGVhc2luZyBmdW5jdGlvbiwgdXNlZCBmb3IgZmxpcHBpbmcgZWFzZUluXG4gICAgY3VydmUgdG8gYW4gZWFzZU91dC5cbiAgICBcbiAgICBAcGFyYW0gW251bWJlcl06IFByb2dyZXNzLCBmcm9tIDAgLSAxLCBvZiBjdXJyZW50IHNoaWZ0XG4gICAgQHBhcmFtIFtmdW5jdGlvbl06IFRoZSBlYXNpbmcgZnVuY3Rpb24gdG8gcmV2ZXJzZVxuICAgIEByZXR1cm5zIFtudW1iZXJdOiBUaGUgZWFzaW5nLWFkanVzdGVkIGRlbHRhXG4qL1xuY29uc3QgcmV2ZXJzZUVhc2luZyA9IChtZXRob2QpID0+IChwcm9ncmVzcywgc3RyZW5ndGgpID0+IDEgLSBtZXRob2QoMSAtIHByb2dyZXNzLCBzdHJlbmd0aCk7XG5cbi8qXG4gICAgRWFzaW5nIGNsYXNzXG5cbiAgICBJZiBwcm92aWRlZCBlYXNpbmcgZnVuY3Rpb24sIHJldHVybnMgZWFzaW5nIGZ1bmN0aW9uIHdpdGggXG4gICAgaW4vb3V0L2luT3V0IHZhcmlhdGlvbnNcblxuICAgIElmIHByb3ZpZGVkIGZvdXIgYXJndW1lbnRzLCByZXR1cm5zIG5ldyBCZXppZXIgY2xhc3MgaW5zdGVhZC5cbiovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVFYXNpbmdGdW5jdGlvbihtZXRob2QpIHtcbiAgICBsZXQgZWFzaW5nRnVuY3Rpb24gPSAocHJvZ3Jlc3MsIHN0cmVuZ3RoKSA9PiBtZXRob2QocHJvZ3Jlc3MsIHN0cmVuZ3RoKTtcblxuICAgIGVhc2luZ0Z1bmN0aW9uLmluID0gKHByb2dyZXNzLCBzdHJlbmd0aCkgPT4gbWV0aG9kKHByb2dyZXNzLCBzdHJlbmd0aCk7XG4gICAgZWFzaW5nRnVuY3Rpb24ub3V0ID0gcmV2ZXJzZUVhc2luZyhtZXRob2QpO1xuICAgIGVhc2luZ0Z1bmN0aW9uLmluT3V0ID0gbWlycm9yRWFzaW5nKG1ldGhvZCk7XG5cbiAgICByZXR1cm4gZWFzaW5nRnVuY3Rpb247XG59XG4iXX0=

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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hY3Rpb25zL2Vhc2luZy9jcmVhdGUtYmV6aWVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztrQkFtQ3dCLFdBQVc7Ozs7Ozs7Ozs7Ozs7Ozs7QUFwQm5DLElBQU0saUJBQWlCLEdBQUcsQ0FBQyxDQUFDO0FBQzVCLElBQU0sZ0JBQWdCLEdBQUcsS0FBSyxDQUFDO0FBQy9CLElBQU0scUJBQXFCLEdBQUcsU0FBUyxDQUFDO0FBQ3hDLElBQU0sMEJBQTBCLEdBQUcsRUFBRSxDQUFDO0FBQ3RDLElBQU0sbUJBQW1CLEdBQUcsRUFBRSxDQUFDO0FBQy9CLElBQU0sa0JBQWtCLEdBQUcsR0FBRyxJQUFJLG1CQUFtQixHQUFHLEdBQUcsQ0FBQSxBQUFDLENBQUM7QUFDN0QsSUFBTSxrQkFBa0IsR0FBSSxPQUFPLFlBQVksS0FBSyxXQUFXLEFBQUM7OztBQUFDLEFBR2pFLElBQU0sQ0FBQyxHQUFHLFVBQUMsRUFBRSxFQUFFLEVBQUU7V0FBSyxHQUFHLEdBQUcsR0FBRyxHQUFHLEVBQUUsR0FBRyxHQUFHLEdBQUcsRUFBRTtDQUFBLENBQUM7QUFDaEQsSUFBTSxDQUFDLEdBQUcsVUFBQyxFQUFFLEVBQUUsRUFBRTtXQUFLLEdBQUcsR0FBRyxFQUFFLEdBQUcsR0FBRyxHQUFHLEVBQUU7Q0FBQSxDQUFDO0FBQzFDLElBQU0sQ0FBQyxHQUFHLFVBQUMsRUFBRTtXQUFLLEdBQUcsR0FBRyxFQUFFO0NBQUEsQ0FBQzs7QUFFM0IsSUFBTSxRQUFRLEdBQUcsVUFBQyxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUU7V0FBSyxHQUFHLEdBQUcsQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDO0NBQUEsQ0FBQzs7QUFFdEYsSUFBTSxVQUFVLEdBQUcsVUFBQyxDQUFDLEVBQUUs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QUM1Qix1QkFBVyxHQUFHLEVBQUU7OztBQUFDLFNBR3BCLE1BQU0sSUFBSSxFQUFFLEtBQUssQ0FBQyxFQUFFO0FBQ2pCLDJCQUFXLEdBQUcsQ0FBQzs7O0FBQUMsYUFHbkIsTUFBTSxJQUFJLEVBQUUsS0FBSyxDQUFDLEVBQUU7QUFDakIsK0JBQVcsR0FBRyxDQUFDLENBQUM7aUJBRW5CLE1BQU07QUFDSCwrQkFBVyxHQUFHLFVBQVUsQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDO2lCQUNwRDs7QUFFRCxlQUFPLFdBQVcsQ0FBQztLQUN0QixDQUFDOztBQUVGLFdBQU8sUUFBUSxDQUFDO0NBQ25CIiwiZmlsZSI6ImNyZWF0ZS1iZXppZXIuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL01hdHRQZXJyeS9TaXRlcy9wb3Btb3Rpb24iLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICAgIEJlemllciBmdW5jdGlvbiBnZW5lcmF0b3JcbiAgICAgICAgXG4gICAgR2HDq3RhbiBSZW5hdWRlYXUncyBCZXppZXJFYXNpbmdcbiAgICBodHRwczovL2dpdGh1Yi5jb20vZ3JlL2Jlemllci1lYXNpbmcvYmxvYi9tYXN0ZXIvaW5kZXguanMgIFxuICAgIGh0dHBzOi8vZ2l0aHViLmNvbS9ncmUvYmV6aWVyLWVhc2luZy9ibG9iL21hc3Rlci9MSUNFTlNFXG4gICAgWW91J3JlIGEgaGVyb1xuICAgIFxuICAgIFVzZVxuICAgIFxuICAgICAgICB2YXIgZWFzZU91dCA9IG5ldyBCZXppZXIoLjE3LC42NywuODMsLjY3KSxcbiAgICAgICAgICAgIHggPSBlYXNlT3V0KDAuNSk7IC8vIHJldHVybnMgMC42MjcuLi5cbiovXG5cbi8vIENvbnN0YW50c1xuY29uc3QgTkVXVE9OX0lURVJBVElPTlMgPSA4O1xuY29uc3QgTkVXVE9OX01JTl9TTE9QRSA9IDAuMDAxO1xuY29uc3QgU1VCRElWSVNJT05fUFJFQ0lTSU9OID0gMC4wMDAwMDAxO1xuY29uc3QgU1VCRElWSVNJT05fTUFYX0lURVJBVElPTlMgPSAxMDtcbmNvbnN0IEtfU1BMSU5FX1RBQkxFX1NJWkUgPSAxMTtcbmNvbnN0IEtfU0FNUExFX1NURVBfU0laRSA9IDEuMCAvIChLX1NQTElORV9UQUJMRV9TSVpFIC0gMS4wKTtcbmNvbnN0IEZMT0FUXzMyX1NVUFBPUlRFRCA9ICh0eXBlb2YgRmxvYXQzMkFycmF5ICE9PSAndW5kZWZpbmVkJyk7XG5cbi8vIEhlbHBlciBtZXRob2RzXG5jb25zdCBhID0gKGExLCBhMikgPT4gMS4wIC0gMy4wICogYTIgKyAzLjAgKiBhMTtcbmNvbnN0IGIgPSAoYTEsIGEyKSA9PiAzLjAgKiBhMiAtIDYuMCAqIGExO1xuY29uc3QgYyA9IChhMSkgPT4gMy4wICogYTE7XG5cbmNvbnN0IGdldFNsb3BlID0gKHQsIGExLCBhMikgPT4gMy4wICogYShhMSwgYTIpICogdCAqIHQgKyAyLjAgKiBiKGExLCBhMikgKiB0ICsgYyhhMSk7XG5cbmNvbnN0IGNhbGNCZXppZXIgPSAodCwgYTEsIGEyKSA9PiAoKGEoYTEsIGEyKSAqIHQgKyBiKGExLCBhMikpICogdCArIGMoYTEpKSAqIHQ7XG5cbi8qXG4gICAgQ3JlYXRlIGEgY3ViaWMgYmV6aWVyIHJlc29sdmVyXG4qL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3ViaWNCZXppZXIobVgxLCBtWTEsIG1YMiwgbVkyKSB7XG4gICAgY29uc3Qgc2FtcGxlVmFsdWVzID0gRkxPQVRfMzJfU1VQUE9SVEVEID8gbmV3IEZsb2F0MzJBcnJheShLX1NQTElORV9UQUJMRV9TSVpFKSA6IG5ldyBBcnJheShLX1NQTElORV9UQUJMRV9TSVpFKTtcbiAgICBsZXQgX3ByZWNvbXB1dGVkID0gZmFsc2U7XG5cbiAgICBjb25zdCBiaW5hcnlTdWJkaXZpZGUgPSAoYVgsIGFBLCBhQikgPT4ge1xuICAgICAgICBsZXQgaSA9IDA7XG4gICAgICAgIGxldCBjdXJyZW50WDtcbiAgICAgICAgbGV0IGN1cnJlbnRUO1xuXG4gICAgICAgIGRvIHtcbiAgICAgICAgICAgIGN1cnJlbnRUID0gYUEgKyAoYUIgLSBhQSkgLyAyLjA7XG4gICAgICAgICAgICBjdXJyZW50WCA9IGNhbGNCZXppZXIoY3VycmVudFQsIG1YMSwgbVgyKSAtIGFYO1xuICAgICAgICAgICAgaWYgKGN1cnJlbnRYID4gMC4wKSB7XG4gICAgICAgICAgICAgICAgYUIgPSBjdXJyZW50VDtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgYUEgPSBjdXJyZW50VDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSB3aGlsZSAoTWF0aC5hYnMoY3VycmVudFgpID4gU1VCRElWSVNJT05fUFJFQ0lTSU9OICYmICsraSA8IFNVQkRJVklTSU9OX01BWF9JVEVSQVRJT05TKTtcblxuICAgICAgICByZXR1cm4gY3VycmVudFQ7XG4gICAgfTtcblxuICAgIGNvbnN0IG5ld3RvblJhcGhzb25JdGVyYXRlID0gKGFYLCBhR3Vlc3NUKSA9PiB7XG4gICAgICAgIGxldCBpID0gMDtcbiAgICAgICAgbGV0IGN1cnJlbnRTbG9wZSA9IDA7XG4gICAgICAgIGxldCBjdXJyZW50WDtcblxuICAgICAgICBmb3IgKDsgaSA8IE5FV1RPTl9JVEVSQVRJT05TOyArK2kpIHtcbiAgICAgICAgICAgIGN1cnJlbnRTbG9wZSA9IGdldFNsb3BlKGFHdWVzc1QsIG1YMSwgbVgyKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgaWYgKGN1cnJlbnRTbG9wZSA9PT0gMC4wKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGFHdWVzc1Q7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGN1cnJlbnRYID0gY2FsY0JlemllcihhR3Vlc3NULCBtWDEsIG1YMikgLSBhWDtcbiAgICAgICAgICAgIGFHdWVzc1QgLT0gY3VycmVudFggLyBjdXJyZW50U2xvcGU7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIHJldHVybiBhR3Vlc3NUO1xuICAgIH07XG5cbiAgICBjb25zdCBjYWxjU2FtcGxlVmFsdWVzID0gKCkgPT4ge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IEtfU1BMSU5FX1RBQkxFX1NJWkU7ICsraSkge1xuICAgICAgICAgICAgc2FtcGxlVmFsdWVzW2ldID0gY2FsY0JlemllcihpICogS19TQU1QTEVfU1RFUF9TSVpFLCBtWDEsIG1YMik7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgY29uc3QgZ2V0VEZvclggPSAoYVgpID0+IHtcbiAgICAgICAgbGV0IGludGVydmFsU3RhcnQgPSAwLjA7XG4gICAgICAgIGxldCBjdXJyZW50U2FtcGxlID0gMTtcbiAgICAgICAgbGV0IGxhc3RTYW1wbGUgPSBLX1NQTElORV9UQUJMRV9TSVpFIC0gMTtcbiAgICAgICAgbGV0IGRpc3QgPSAwLjA7XG4gICAgICAgIGxldCBndWVzc0ZvclQgPSAwLjA7XG4gICAgICAgIGxldCBpbml0aWFsU2xvcGUgPSAwLjA7XG4gICAgICAgICAgICBcbiAgICAgICAgZm9yICg7IGN1cnJlbnRTYW1wbGUgIT0gbGFzdFNhbXBsZSAmJiBzYW1wbGVWYWx1ZXNbY3VycmVudFNhbXBsZV0gPD0gYVg7ICsrY3VycmVudFNhbXBsZSkge1xuICAgICAgICAgICAgaW50ZXJ2YWxTdGFydCArPSBLX1NBTVBMRV9TVEVQX1NJWkU7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIC0tY3VycmVudFNhbXBsZTtcbiAgICAgICAgXG4gICAgICAgIGRpc3QgPSAoYVggLSBzYW1wbGVWYWx1ZXNbY3VycmVudFNhbXBsZV0pIC8gKHNhbXBsZVZhbHVlc1tjdXJyZW50U2FtcGxlKzFdIC0gc2FtcGxlVmFsdWVzW2N1cnJlbnRTYW1wbGVdKTtcbiAgICAgICAgZ3Vlc3NGb3JUID0gaW50ZXJ2YWxTdGFydCArIGRpc3QgKiBLX1NBTVBMRV9TVEVQX1NJWkU7XG4gICAgICAgIFxuICAgICAgICBpbml0aWFsU2xvcGUgPSBnZXRTbG9wZShndWVzc0ZvclQsIG1YMSwgbVgyKTtcbiAgICAgICAgXG4gICAgICAgIC8vIElmIHNsb3BlIGlzIGdyZWF0ZXIgdGhhbiBtaW5cbiAgICAgICAgaWYgKGluaXRpYWxTbG9wZSA+PSBORVdUT05fTUlOX1NMT1BFKSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3dG9uUmFwaHNvbkl0ZXJhdGUoYVgsIGd1ZXNzRm9yVCk7XG4gICAgICAgIC8vIFNsb3BlIGlzIGVxdWFsIHRvIG1pblxuICAgICAgICB9IGVsc2UgaWYgKGluaXRpYWxTbG9wZSA9PT0gMC4wKSB7XG4gICAgICAgICAgICByZXR1cm4gZ3Vlc3NGb3JUO1xuICAgICAgICAvLyBTbG9wZSBpcyBsZXNzIHRoYW4gbWluXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gYmluYXJ5U3ViZGl2aWRlKGFYLCBpbnRlcnZhbFN0YXJ0LCBpbnRlcnZhbFN0YXJ0ICsgS19TQU1QTEVfU1RFUF9TSVpFKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBjb25zdCBwcmVjb21wdXRlID0gKCkgPT4ge1xuICAgICAgICBfcHJlY29tcHV0ZWQgPSB0cnVlO1xuICAgICAgICBpZiAobVgxICE9IG1ZMSB8fCBtWDIgIT0gbVkyKSB7XG4gICAgICAgICAgICBjYWxjU2FtcGxlVmFsdWVzKCk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgY29uc3QgcmVzb2x2ZXIgPSAoYVgpID0+IHtcbiAgICAgICAgbGV0IHJldHVyblZhbHVlO1xuXG4gICAgICAgIGlmICghX3ByZWNvbXB1dGVkKSB7XG4gICAgICAgICAgICBwcmVjb21wdXRlKCk7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIC8vIElmIGxpbmVhciBncmFkaWVudCwgcmV0dXJuIFggYXMgVFxuICAgICAgICBpZiAobVgxID09PSBtWTEgJiYgbVgyID09PSBtWTIpIHtcbiAgICAgICAgICAgIHJldHVyblZhbHVlID0gYVg7XG4gICAgICAgICAgICBcbiAgICAgICAgLy8gSWYgYXQgc3RhcnQsIHJldHVybiAwXG4gICAgICAgIH0gZWxzZSBpZiAoYVggPT09IDApIHtcbiAgICAgICAgICAgIHJldHVyblZhbHVlID0gMDtcbiAgICAgICAgICAgIFxuICAgICAgICAvLyBJZiBhdCBlbmQsIHJldHVybiAxXG4gICAgICAgIH0gZWxzZSBpZiAoYVggPT09IDEpIHtcbiAgICAgICAgICAgIHJldHVyblZhbHVlID0gMTtcblxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuVmFsdWUgPSBjYWxjQmV6aWVyKGdldFRGb3JYKGFYKSwgbVkxLCBtWTIpO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICByZXR1cm4gcmV0dXJuVmFsdWU7XG4gICAgfTtcblxuICAgIHJldHVybiByZXNvbHZlcjtcbn1cbiJdfQ==

/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _cssAdapter = __webpack_require__(13);
	
	var _cssAdapter2 = _interopRequireDefault(_cssAdapter);
	
	var _svgAdapter = __webpack_require__(14);
	
	var _svgAdapter2 = _interopRequireDefault(_svgAdapter);
	
	var _svgPathAdapter = __webpack_require__(15);
	
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
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _dictionary = __webpack_require__(43);
	
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
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	/*
	    Detect and load an appropriate clock setting for the environment
	*/
	
	var hasRAF = typeof window !== 'undefined' && window.requestAnimationFrame ? true : false;
	
	var tick = undefined;
	
	if (hasRAF) {
	    tick = window.requestAnimationFrame;
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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9wcm9jZXNzL3RpY2suanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUlBLElBQU0sTUFBTSxHQUFHLEFBQUMsT0FBTyxNQUFNLEtBQUssV0FBVyxJQUFJLE1BQU0sQ0FBQyxxQkFBcUIsR0FBSSxJQUFJLEdBQUcsS0FBSyxDQUFDOztBQUU5RixJQUFJLElBQUksWUFBQSxDQUFDOztBQUVULElBQUksTUFBTSxFQUFFO0FBQ1IsUUFBSSxHQUFHLE1BQU0sQ0FBQyxxQkFBcUIsQ0FBQztDQUV2QyxNQUFNOzs7Ozs7Ozs7Ozs7Ozs7QUFlSCxZQUFJLFFBQVEsR0FBRyxDQUFDLENBQUM7O0FBRWpCLFlBQUksR0FBRyxVQUFDLFFBQVEsRUFBSztBQUNqQixnQkFBTSxXQUFXLEdBQUcsSUFBSSxJQUFJLEVBQUUsQ0FBQyxPQUFPLEVBQUUsQ0FBQztBQUN6QyxnQkFBTSxVQUFVLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsRUFBRSxJQUFJLFdBQVcsR0FBRyxRQUFRLENBQUEsQUFBQyxDQUFDLENBQUM7O0FBRTlELG9CQUFRLEdBQUcsV0FBVyxHQUFHLFVBQVUsQ0FBQzs7QUFFcEMsc0JBQVUsQ0FBQzt1QkFBTSxRQUFRLENBQUMsUUFBUSxDQUFDO2FBQUEsRUFBRSxVQUFVLENBQUMsQ0FBQztTQUNwRCxDQUFDOztDQUNMOztrQkFFYyxJQUFJIiwiZmlsZSI6InRpY2suanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL01hdHRQZXJyeS9TaXRlcy9wb3Btb3Rpb24iLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICAgIERldGVjdCBhbmQgbG9hZCBhbiBhcHByb3ByaWF0ZSBjbG9jayBzZXR0aW5nIGZvciB0aGUgZW52aXJvbm1lbnRcbiovXG5cbmNvbnN0IGhhc1JBRiA9ICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKSA/IHRydWUgOiBmYWxzZTtcblxubGV0IHRpY2s7XG5cbmlmIChoYXNSQUYpIHtcbiAgICB0aWNrID0gd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZTtcblxufSBlbHNlIHtcbiAgICAvKlxuICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUgcG9seWZpbGxcbiAgICAgICAgXG4gICAgICAgIEZvciBJRTgvOSBGbGluc3RvbmVzIGFuZCBub24tYnJvd3NlciBlbnZpcm9ubWVudHNcblxuICAgICAgICBUYWtlbiBmcm9tIFBhdWwgSXJpc2guIFdlJ3ZlIHN0cmlwcGVkIG91dCBjYW5jZWxBbmltYXRpb25GcmFtZSBjaGVja3MgYmVjYXVzZSB3ZSBkb24ndCBmb3ggd2l0aCB0aGF0XG4gICAgICAgIFxuICAgICAgICBodHRwOi8vcGF1bGlyaXNoLmNvbS8yMDExL3JlcXVlc3RhbmltYXRpb25mcmFtZS1mb3Itc21hcnQtYW5pbWF0aW5nL1xuICAgICAgICBodHRwOi8vbXkub3BlcmEuY29tL2Vtb2xsZXIvYmxvZy8yMDExLzEyLzIwL3JlcXVlc3RhbmltYXRpb25mcmFtZS1mb3Itc21hcnQtZXItYW5pbWF0aW5nXG4gICAgICAgICBcbiAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lIHBvbHlmaWxsIGJ5IEVyaWsgTcO2bGxlci4gZml4ZXMgZnJvbSBQYXVsIElyaXNoIGFuZCBUaW5vIFppamRlbFxuICAgICAgICAgXG4gICAgICAgIE1JVCBsaWNlbnNlXG4gICAgKi9cbiAgICBsZXQgbGFzdFRpbWUgPSAwO1xuXG4gICAgdGljayA9IChjYWxsYmFjaykgPT4ge1xuICAgICAgICBjb25zdCBjdXJyZW50VGltZSA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuICAgICAgICBjb25zdCB0aW1lVG9DYWxsID0gTWF0aC5tYXgoMCwgMTYgLSAoY3VycmVudFRpbWUgLSBsYXN0VGltZSkpO1xuXG4gICAgICAgIGxhc3RUaW1lID0gY3VycmVudFRpbWUgKyB0aW1lVG9DYWxsO1xuXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4gY2FsbGJhY2sobGFzdFRpbWUpLCB0aW1lVG9DYWxsKTtcbiAgICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCB0aWNrOyJdfQ==

/***/ },
/* 50 */
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
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(51)))

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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMTAxMGQ5Y2E2ZTE5Y2Q1M2E3MGMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xvYWQvZ2xvYmFsLmpzIiwid2VicGFjazovLy8uL3NyYy9wb3Btb3Rpb24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Byb2Nlc3MvdGltZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FjdG9yL0FjdG9yLmpzIiwid2VicGFjazovLy8uL3NyYy9hY3Rpb25zL1R3ZWVuLmpzIiwid2VicGFjazovLy8uL3NyYy9hY3Rpb25zL1BoeXNpY3MuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FjdGlvbnMvVHJhY2suanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Byb2Nlc3MvUHJvY2Vzcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5wdXQvSW5wdXQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luYy9zdGFnZ2VyLmpzIiwid2VicGFjazovLy8uL3NyYy9pbmMvdGltZWxpbmUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FkYXB0ZXIvYWRhcHRlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYWRhcHRlci9hdHRyLWFkYXB0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FkYXB0ZXIvY3NzLWFkYXB0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FkYXB0ZXIvc3ZnLWFkYXB0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FkYXB0ZXIvc3ZnLXBhdGgtYWRhcHRlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYWN0aW9ucy9lYXNpbmcvcHJlc2V0LWVhc2luZy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5jL2NhbGMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZhbHVlLXR5cGVzL2FscGhhLmpzIiwid2VicGFjazovLy8uL3NyYy92YWx1ZS10eXBlcy9hbmdsZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdmFsdWUtdHlwZXMvYXhlcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdmFsdWUtdHlwZXMvY29sb3IuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZhbHVlLXR5cGVzL2NvbXBsZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZhbHVlLXR5cGVzL2hleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdmFsdWUtdHlwZXMvaHNsLmpzIiwid2VicGFjazovLy8uL3NyYy92YWx1ZS10eXBlcy9wb3NpdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZhbHVlLXR5cGVzL3B4LmpzIiwid2VicGFjazovLy8uL3NyYy92YWx1ZS10eXBlcy9yZ2IuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZhbHVlLXR5cGVzL3NjYWxlLmpzIiwid2VicGFjazovLy8uL3NyYy92YWx1ZS10eXBlcy9zaGFkb3cuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luYy90cmFuc2Zvcm1lcnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FjdGlvbnMvQWN0aW9uLmpzIiwid2VicGFjazovLy8uL3NyYy9pbmMvdXRpbHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2lucHV0L1BvaW50ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FkYXB0ZXIvY3NzL3N0YXRlLW1hcC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYWRhcHRlci9jc3MvdmFsdWUtdHlwZS1tYXAuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FkYXB0ZXIvY3NzL2J1aWxkLmpzIiwid2VicGFjazovLy8uL3NyYy9hZGFwdGVyL2Nzcy9wcmVmaXhlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYWRhcHRlci9zdmcvdmFsdWUtdHlwZS1tYXAuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FkYXB0ZXIvc3ZnL2J1aWxkLmpzIiwid2VicGFjazovLy8uL3NyYy9hZGFwdGVyL3N2Zy1wYXRoL2J1aWxkLmpzIiwid2VicGFjazovLy8uL3NyYy9hZGFwdGVyL3N2Zy1wYXRoL3N0YXRlLW1hcC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdmFsdWUtdHlwZXMvc2V0dGluZ3MvZGVmYXVsdC1wcm9wcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdmFsdWUtdHlwZXMvc2V0dGluZ3MvZGljdGlvbmFyeS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcHJvY2Vzcy9sb29wLmpzIiwid2VicGFjazovLy8uL3NyYy9hY3Rpb25zL2Vhc2luZy9jcmVhdGUtZWFzaW5nLmpzIiwid2VicGFjazovLy8uL3NyYy9hY3Rpb25zL2Vhc2luZy9jcmVhdGUtYmV6aWVyLmpzIiwid2VicGFjazovLy8uL3NyYy9pbmMvYmluZC1hZGFwdGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9hZGFwdGVyL2Nzcy90cmFuc2Zvcm0tcHJvcHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Byb2Nlc3MvdGljay5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcHJvY2Vzcy9tYW5hZ2VyLmpzIiwid2VicGFjazovLy8uL34vcHJvY2Vzcy9icm93c2VyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1QkFBZTtBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLHdDOzs7Ozs7O0FDdENBOztBQUVBOztBQUVBOztBQUVBLHdDQUF1Qyw2QkFBNkIsWUFBWSxFQUFFLE9BQU8saUJBQWlCLG1CQUFtQix1QkFBdUIsNEVBQTRFLEVBQUUsRUFBRSxzQkFBc0IsZUFBZSxFQUFFOztBQUUzUTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw0Q0FBMkMsbXVCOzs7Ozs7QUNmM0M7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBQzs7QUFFRDs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7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Q0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHVGQUFzRixhQUFhO0FBQ25HO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw0Q0FBMkMsKzZMOzs7Ozs7QUMxRzNDOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7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Q0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBLE1BQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0EsTUFBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsd0JBQXVCLDJCQUEyQjtBQUNsRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsd0JBQXVCLHlCQUF5QjtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBaUI7QUFDakI7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLDRDQUEyQyxta1I7Ozs7Ozs7QUNuSjNDOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBcUI7QUFDckI7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsNEJBQTJCO0FBQzNCO0FBQ0E7QUFDQTtBQUNBLDZCQUE0QixVQUFVIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGV4cG9ydHM6IHt9LFxuIFx0XHRcdGlkOiBtb2R1bGVJZCxcbiBcdFx0XHRsb2FkZWQ6IGZhbHNlXG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oMCk7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogd2VicGFjay9ib290c3RyYXAgMTAxMGQ5Y2E2ZTE5Y2Q1M2E3MGNcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbnZhciBfcG9wbW90aW9uID0gcmVxdWlyZSgnLi4vcG9wbW90aW9uJyk7XG5cbnZhciBwb3Btb3Rpb24gPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChfcG9wbW90aW9uKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQob2JqKSB7IGlmIChvYmogJiYgb2JqLl9fZXNNb2R1bGUpIHsgcmV0dXJuIG9iajsgfSBlbHNlIHsgdmFyIG5ld09iaiA9IHt9OyBpZiAob2JqICE9IG51bGwpIHsgZm9yICh2YXIga2V5IGluIG9iaikgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwga2V5KSkgbmV3T2JqW2tleV0gPSBvYmpba2V5XTsgfSB9IG5ld09iai5kZWZhdWx0ID0gb2JqOyByZXR1cm4gbmV3T2JqOyB9IH1cblxudmFyIFVJcmVmID0gd2luZG93Lm1vdGlvbjtcblxucG9wbW90aW9uLm5vQ29uZmxpY3QgPSBmdW5jdGlvbiAoKSB7XG4gICAgd2luZG93Lm1vdGlvbiA9IFVJcmVmO1xufTtcblxud2luZG93Lm1vdGlvbiA9IHdpbmRvdy5wb3Btb3Rpb24gPSBwb3Btb3Rpb247XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5OeVl5OXNiMkZrTDJkc2IySmhiQzVxY3lKZExDSnVZVzFsY3lJNlcxMHNJbTFoY0hCcGJtZHpJam9pT3pzN08wbEJRVmtzVTBGQlV6czdPenRCUVVWeVFpeEpRVUZOTEV0QlFVc3NSMEZCUnl4TlFVRk5MRU5CUVVNc1RVRkJUU3hEUVVGRE96dEJRVVUxUWl4VFFVRlRMRU5CUVVNc1ZVRkJWU3hIUVVGSExGbEJRVms3UVVGREwwSXNWVUZCVFN4RFFVRkRMRTFCUVUwc1IwRkJSeXhMUVVGTExFTkJRVU03UTBGRGVrSXNRMEZCUXpzN1FVRkZSaXhOUVVGTkxFTkJRVU1zVFVGQlRTeEhRVUZITEUxQlFVMHNRMEZCUXl4VFFVRlRMRWRCUVVjc1UwRkJVeXhEUVVGRElpd2labWxzWlNJNkltZHNiMkpoYkM1cWN5SXNJbk52ZFhKalpWSnZiM1FpT2lJdlZYTmxjbk12VFdGMGRGQmxjbko1TDFOcGRHVnpMM0J2Y0cxdmRHbHZiaUlzSW5OdmRYSmpaWE5EYjI1MFpXNTBJanBiSW1sdGNHOXlkQ0FxSUdGeklIQnZjRzF2ZEdsdmJpQm1jbTl0SUNjdUxpOXdiM0J0YjNScGIyNG5PMXh1WEc1amIyNXpkQ0JWU1hKbFppQTlJSGRwYm1SdmR5NXRiM1JwYjI0N1hHNWNibkJ2Y0cxdmRHbHZiaTV1YjBOdmJtWnNhV04wSUQwZ1puVnVZM1JwYjI0Z0tDa2dlMXh1SUNBZ0lIZHBibVJ2ZHk1dGIzUnBiMjRnUFNCVlNYSmxaanRjYm4wN1hHNWNibmRwYm1SdmR5NXRiM1JwYjI0Z1BTQjNhVzVrYjNjdWNHOXdiVzkwYVc5dUlEMGdjRzl3Ylc5MGFXOXVPeUpkZlE9PVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvbG9hZC9nbG9iYWwuanNcbiAqKiBtb2R1bGUgaWQgPSAwXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzLnRyYW5zZm9ybWVycyA9IGV4cG9ydHMuc2hhZG93VHlwZSA9IGV4cG9ydHMuc2NhbGVUeXBlID0gZXhwb3J0cy5yZ2JUeXBlID0gZXhwb3J0cy5weFR5cGUgPSBleHBvcnRzLnBvc2l0aW9uc1R5cGUgPSBleHBvcnRzLmhzbFR5cGUgPSBleHBvcnRzLmhleFR5cGUgPSBleHBvcnRzLmNvbXBsZXhUeXBlID0gZXhwb3J0cy5jb2xvclR5cGUgPSBleHBvcnRzLmF4ZXNUeXBlID0gZXhwb3J0cy5hbmdsZVR5cGUgPSBleHBvcnRzLmFscGhhVHlwZSA9IGV4cG9ydHMuc2V0R2xvYmFsRGlsYXRpb24gPSBleHBvcnRzLmNhbGMgPSBleHBvcnRzLmVhc2luZyA9IGV4cG9ydHMuc3ZnUGF0aEFkYXB0ZXIgPSBleHBvcnRzLnN2Z0FkYXB0ZXIgPSBleHBvcnRzLmNzc0FkYXB0ZXIgPSBleHBvcnRzLmF0dHJBZGFwdGVyID0gZXhwb3J0cy5hZGFwdGVyID0gZXhwb3J0cy50aW1lbGluZSA9IGV4cG9ydHMuc3RhZ2dlciA9IGV4cG9ydHMucHJvY2VzcyA9IGV4cG9ydHMuaW5wdXQgPSBleHBvcnRzLnRyYWNrSW5wdXQgPSBleHBvcnRzLnBoeXNpY3MgPSBleHBvcnRzLnR3ZWVuID0gZXhwb3J0cy5hY3RvciA9IHVuZGVmaW5lZDtcblxudmFyIF90aW1lciA9IHJlcXVpcmUoJy4vcHJvY2Vzcy90aW1lcicpO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3NldEdsb2JhbERpbGF0aW9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gX3RpbWVyLnNldEdsb2JhbERpbGF0aW9uO1xuICB9XG59KTtcblxudmFyIF9BY3RvciA9IHJlcXVpcmUoJy4vYWN0b3IvQWN0b3InKTtcblxudmFyIF9BY3RvcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9BY3Rvcik7XG5cbnZhciBfVHdlZW4gPSByZXF1aXJlKCcuL2FjdGlvbnMvVHdlZW4nKTtcblxudmFyIF9Ud2VlbjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9Ud2Vlbik7XG5cbnZhciBfUGh5c2ljcyA9IHJlcXVpcmUoJy4vYWN0aW9ucy9QaHlzaWNzJyk7XG5cbnZhciBfUGh5c2ljczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9QaHlzaWNzKTtcblxudmFyIF9UcmFjayA9IHJlcXVpcmUoJy4vYWN0aW9ucy9UcmFjaycpO1xuXG52YXIgX1RyYWNrMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX1RyYWNrKTtcblxudmFyIF9Qcm9jZXNzID0gcmVxdWlyZSgnLi9wcm9jZXNzL1Byb2Nlc3MnKTtcblxudmFyIF9Qcm9jZXNzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX1Byb2Nlc3MpO1xuXG52YXIgX0lucHV0ID0gcmVxdWlyZSgnLi9pbnB1dC9JbnB1dCcpO1xuXG52YXIgX0lucHV0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX0lucHV0KTtcblxudmFyIF9zdGFnZ2VyMiA9IHJlcXVpcmUoJy4vaW5jL3N0YWdnZXInKTtcblxudmFyIF9zdGFnZ2VyMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3N0YWdnZXIyKTtcblxudmFyIF90aW1lbGluZTIgPSByZXF1aXJlKCcuL2luYy90aW1lbGluZScpO1xuXG52YXIgX3RpbWVsaW5lMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3RpbWVsaW5lMik7XG5cbnZhciBfYWRhcHRlcjIgPSByZXF1aXJlKCcuL2FkYXB0ZXIvYWRhcHRlcicpO1xuXG52YXIgX2FkYXB0ZXIzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfYWRhcHRlcjIpO1xuXG52YXIgX2F0dHJBZGFwdGVyMiA9IHJlcXVpcmUoJy4vYWRhcHRlci9hdHRyLWFkYXB0ZXInKTtcblxudmFyIF9hdHRyQWRhcHRlcjMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9hdHRyQWRhcHRlcjIpO1xuXG52YXIgX2Nzc0FkYXB0ZXIyID0gcmVxdWlyZSgnLi9hZGFwdGVyL2Nzcy1hZGFwdGVyJyk7XG5cbnZhciBfY3NzQWRhcHRlcjMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jc3NBZGFwdGVyMik7XG5cbnZhciBfc3ZnQWRhcHRlcjIgPSByZXF1aXJlKCcuL2FkYXB0ZXIvc3ZnLWFkYXB0ZXInKTtcblxudmFyIF9zdmdBZGFwdGVyMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3N2Z0FkYXB0ZXIyKTtcblxudmFyIF9zdmdQYXRoQWRhcHRlcjIgPSByZXF1aXJlKCcuL2FkYXB0ZXIvc3ZnLXBhdGgtYWRhcHRlcicpO1xuXG52YXIgX3N2Z1BhdGhBZGFwdGVyMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3N2Z1BhdGhBZGFwdGVyMik7XG5cbnZhciBfcHJlc2V0RWFzaW5nID0gcmVxdWlyZSgnLi9hY3Rpb25zL2Vhc2luZy9wcmVzZXQtZWFzaW5nJyk7XG5cbnZhciBfcHJlc2V0RWFzaW5nMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3ByZXNldEVhc2luZyk7XG5cbnZhciBfY2FsYzIgPSByZXF1aXJlKCcuL2luYy9jYWxjJyk7XG5cbnZhciBfY2FsYyA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKF9jYWxjMik7XG5cbnZhciBfYWxwaGEgPSByZXF1aXJlKCcuL3ZhbHVlLXR5cGVzL2FscGhhJyk7XG5cbnZhciBfYWxwaGEyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfYWxwaGEpO1xuXG52YXIgX2FuZ2xlID0gcmVxdWlyZSgnLi92YWx1ZS10eXBlcy9hbmdsZScpO1xuXG52YXIgX2FuZ2xlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2FuZ2xlKTtcblxudmFyIF9heGVzID0gcmVxdWlyZSgnLi92YWx1ZS10eXBlcy9heGVzJyk7XG5cbnZhciBfYXhlczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9heGVzKTtcblxudmFyIF9jb2xvciA9IHJlcXVpcmUoJy4vdmFsdWUtdHlwZXMvY29sb3InKTtcblxudmFyIF9jb2xvcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jb2xvcik7XG5cbnZhciBfY29tcGxleCA9IHJlcXVpcmUoJy4vdmFsdWUtdHlwZXMvY29tcGxleCcpO1xuXG52YXIgX2NvbXBsZXgyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY29tcGxleCk7XG5cbnZhciBfaGV4ID0gcmVxdWlyZSgnLi92YWx1ZS10eXBlcy9oZXgnKTtcblxudmFyIF9oZXgyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfaGV4KTtcblxudmFyIF9oc2wgPSByZXF1aXJlKCcuL3ZhbHVlLXR5cGVzL2hzbCcpO1xuXG52YXIgX2hzbDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9oc2wpO1xuXG52YXIgX3Bvc2l0aW9ucyA9IHJlcXVpcmUoJy4vdmFsdWUtdHlwZXMvcG9zaXRpb25zJyk7XG5cbnZhciBfcG9zaXRpb25zMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3Bvc2l0aW9ucyk7XG5cbnZhciBfcHggPSByZXF1aXJlKCcuL3ZhbHVlLXR5cGVzL3B4Jyk7XG5cbnZhciBfcHgyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcHgpO1xuXG52YXIgX3JnYiA9IHJlcXVpcmUoJy4vdmFsdWUtdHlwZXMvcmdiJyk7XG5cbnZhciBfcmdiMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JnYik7XG5cbnZhciBfc2NhbGUgPSByZXF1aXJlKCcuL3ZhbHVlLXR5cGVzL3NjYWxlJyk7XG5cbnZhciBfc2NhbGUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfc2NhbGUpO1xuXG52YXIgX3NoYWRvdyA9IHJlcXVpcmUoJy4vdmFsdWUtdHlwZXMvc2hhZG93Jyk7XG5cbnZhciBfc2hhZG93MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3NoYWRvdyk7XG5cbnZhciBfdHJhbnNmb3JtZXJzMiA9IHJlcXVpcmUoJy4vaW5jL3RyYW5zZm9ybWVycycpO1xuXG52YXIgX3RyYW5zZm9ybWVycyA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKF90cmFuc2Zvcm1lcnMyKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQob2JqKSB7IGlmIChvYmogJiYgb2JqLl9fZXNNb2R1bGUpIHsgcmV0dXJuIG9iajsgfSBlbHNlIHsgdmFyIG5ld09iaiA9IHt9OyBpZiAob2JqICE9IG51bGwpIHsgZm9yICh2YXIga2V5IGluIG9iaikgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwga2V5KSkgbmV3T2JqW2tleV0gPSBvYmpba2V5XTsgfSB9IG5ld09iai5kZWZhdWx0ID0gb2JqOyByZXR1cm4gbmV3T2JqOyB9IH1cblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuLy8gUHJvY2Vzc1xuLy8gQWN0b3JcbnZhciBhY3RvciA9IGV4cG9ydHMuYWN0b3IgPSBmdW5jdGlvbiAocHJvcHMpIHtcbiAgcmV0dXJuIG5ldyBfQWN0b3IyLmRlZmF1bHQocHJvcHMpO1xufTtcblxuLy8gSW5wdXRcblxuLy8gQWN0aW9uc1xuXG52YXIgdHdlZW4gPSBleHBvcnRzLnR3ZWVuID0gZnVuY3Rpb24gKHByb3BzKSB7XG4gIHJldHVybiBuZXcgX1R3ZWVuMi5kZWZhdWx0KHByb3BzKTtcbn07XG52YXIgcGh5c2ljcyA9IGV4cG9ydHMucGh5c2ljcyA9IGZ1bmN0aW9uIChwcm9wcykge1xuICByZXR1cm4gbmV3IF9QaHlzaWNzMi5kZWZhdWx0KHByb3BzKTtcbn07XG52YXIgdHJhY2tJbnB1dCA9IGV4cG9ydHMudHJhY2tJbnB1dCA9IGZ1bmN0aW9uICgpIHtcbiAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICBhcmdzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICB9XG5cbiAgcmV0dXJuIG5ldyAoRnVuY3Rpb24ucHJvdG90eXBlLmJpbmQuYXBwbHkoX1RyYWNrMi5kZWZhdWx0LCBbbnVsbF0uY29uY2F0KGFyZ3MpKSkoKTtcbn07XG52YXIgaW5wdXQgPSBleHBvcnRzLmlucHV0ID0gZnVuY3Rpb24gKCkge1xuICBmb3IgKHZhciBfbGVuMiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBBcnJheShfbGVuMiksIF9rZXkyID0gMDsgX2tleTIgPCBfbGVuMjsgX2tleTIrKykge1xuICAgIGFyZ3NbX2tleTJdID0gYXJndW1lbnRzW19rZXkyXTtcbiAgfVxuXG4gIHJldHVybiBuZXcgKEZ1bmN0aW9uLnByb3RvdHlwZS5iaW5kLmFwcGx5KF9JbnB1dDIuZGVmYXVsdCwgW251bGxdLmNvbmNhdChhcmdzKSkpKCk7XG59O1xudmFyIHByb2Nlc3MgPSBleHBvcnRzLnByb2Nlc3MgPSBmdW5jdGlvbiAoKSB7XG4gIGZvciAodmFyIF9sZW4zID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IEFycmF5KF9sZW4zKSwgX2tleTMgPSAwOyBfa2V5MyA8IF9sZW4zOyBfa2V5MysrKSB7XG4gICAgYXJnc1tfa2V5M10gPSBhcmd1bWVudHNbX2tleTNdO1xuICB9XG5cbiAgcmV0dXJuIG5ldyAoRnVuY3Rpb24ucHJvdG90eXBlLmJpbmQuYXBwbHkoX1Byb2Nlc3MyLmRlZmF1bHQsIFtudWxsXS5jb25jYXQoYXJncykpKSgpO1xufTtcbmV4cG9ydHMuc3RhZ2dlciA9IF9zdGFnZ2VyMy5kZWZhdWx0O1xuZXhwb3J0cy50aW1lbGluZSA9IF90aW1lbGluZTMuZGVmYXVsdDtcblxuLy8gQWRhcHRlcnNcblxuZXhwb3J0cy5hZGFwdGVyID0gX2FkYXB0ZXIzLmRlZmF1bHQ7XG5leHBvcnRzLmF0dHJBZGFwdGVyID0gX2F0dHJBZGFwdGVyMy5kZWZhdWx0O1xuZXhwb3J0cy5jc3NBZGFwdGVyID0gX2Nzc0FkYXB0ZXIzLmRlZmF1bHQ7XG5leHBvcnRzLnN2Z0FkYXB0ZXIgPSBfc3ZnQWRhcHRlcjMuZGVmYXVsdDtcbmV4cG9ydHMuc3ZnUGF0aEFkYXB0ZXIgPSBfc3ZnUGF0aEFkYXB0ZXIzLmRlZmF1bHQ7XG5cbi8vIEVhc2luZ1xuXG5leHBvcnRzLmVhc2luZyA9IF9wcmVzZXRFYXNpbmcyLmRlZmF1bHQ7XG5cbi8vIFV0aWxzXG5cbmV4cG9ydHMuY2FsYyA9IF9jYWxjO1xuXG4vLyBWYWx1ZSB0eXBlc1xuXG5leHBvcnRzLmFscGhhVHlwZSA9IF9hbHBoYTIuZGVmYXVsdDtcbmV4cG9ydHMuYW5nbGVUeXBlID0gX2FuZ2xlMi5kZWZhdWx0O1xuZXhwb3J0cy5heGVzVHlwZSA9IF9heGVzMi5kZWZhdWx0O1xuZXhwb3J0cy5jb2xvclR5cGUgPSBfY29sb3IyLmRlZmF1bHQ7XG5leHBvcnRzLmNvbXBsZXhUeXBlID0gX2NvbXBsZXgyLmRlZmF1bHQ7XG5leHBvcnRzLmhleFR5cGUgPSBfaGV4Mi5kZWZhdWx0O1xuZXhwb3J0cy5oc2xUeXBlID0gX2hzbDIuZGVmYXVsdDtcbmV4cG9ydHMucG9zaXRpb25zVHlwZSA9IF9wb3NpdGlvbnMyLmRlZmF1bHQ7XG5leHBvcnRzLnB4VHlwZSA9IF9weDIuZGVmYXVsdDtcbmV4cG9ydHMucmdiVHlwZSA9IF9yZ2IyLmRlZmF1bHQ7XG5leHBvcnRzLnNjYWxlVHlwZSA9IF9zY2FsZTIuZGVmYXVsdDtcbmV4cG9ydHMuc2hhZG93VHlwZSA9IF9zaGFkb3cyLmRlZmF1bHQ7XG5cbi8vIFRyYW5zZm9ybWVyc1xuXG5leHBvcnRzLnRyYW5zZm9ybWVycyA9IF90cmFuc2Zvcm1lcnM7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5OeVl5OXdiM0J0YjNScGIyNHVhbk1pWFN3aWJtRnRaWE1pT2x0ZExDSnRZWEJ3YVc1bmN5STZJanM3T3pzN096czdPenRyUWtGdFExTXNhVUpCUVdsQ096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenRCUVhKQ2JrSXNTVUZCVFN4TFFVRkxMRmRCUVV3c1MwRkJTeXhIUVVGSExGVkJRVU1zUzBGQlN6dFRRVUZMTEc5Q1FVRlZMRXRCUVVzc1EwRkJRenREUVVGQk96czdPenRCUVVGRE8wRkJRekZETEVsQlFVMHNTMEZCU3l4WFFVRk1MRXRCUVVzc1IwRkJSeXhWUVVGRExFdEJRVXM3VTBGQlN5eHZRa0ZCVlN4TFFVRkxMRU5CUVVNN1EwRkJRU3hEUVVGRE8wRkJRekZETEVsQlFVMHNUMEZCVHl4WFFVRlFMRTlCUVU4c1IwRkJSeXhWUVVGRExFdEJRVXM3VTBGQlN5eHpRa0ZCV1N4TFFVRkxMRU5CUVVNN1EwRkJRU3hEUVVGRE8wRkJRemxETEVsQlFVMHNWVUZCVlN4WFFVRldMRlZCUVZVc1IwRkJSenR2UTBGQlNTeEpRVUZKTzBGQlFVb3NVVUZCU1RzN096SkZRVUZyUWl4SlFVRkpPME5CUVVNc1EwRkJRenRCUVVOdVJDeEpRVUZOTEV0QlFVc3NWMEZCVEN4TFFVRkxMRWRCUVVjN2NVTkJRVWtzU1VGQlNUdEJRVUZLTEZGQlFVazdPenN5UlVGQmEwSXNTVUZCU1R0RFFVRkRMRU5CUVVNN1FVRkRPVU1zU1VGQlRTeFBRVUZQTEZkQlFWQXNUMEZCVHl4SFFVRkhPM0ZEUVVGSkxFbEJRVWs3UVVGQlNpeFJRVUZKT3pzN05rVkJRVzlDTEVsQlFVazdRMEZCUXl4RFFVRkRPMUZCUTJ4RUxFOUJRVTg3VVVGRFVDeFJRVUZST3pzN08xRkJSMUlzVDBGQlR6dFJRVU5RTEZkQlFWYzdVVUZEV0N4VlFVRlZPMUZCUTFZc1ZVRkJWVHRSUVVOV0xHTkJRV003T3pzN1VVRkhaQ3hOUVVGTk96czdPMUZCUjBRc1NVRkJTVHM3T3p0UlFVbFVMRk5CUVZNN1VVRkRWQ3hUUVVGVE8xRkJRMVFzVVVGQlVUdFJRVU5TTEZOQlFWTTdVVUZEVkN4WFFVRlhPMUZCUTFnc1QwRkJUenRSUVVOUUxFOUJRVTg3VVVGRFVDeGhRVUZoTzFGQlEySXNUVUZCVFR0UlFVTk9MRTlCUVU4N1VVRkRVQ3hUUVVGVE8xRkJRMVFzVlVGQlZUczdPenRSUVVkTUxGbEJRVmtpTENKbWFXeGxJam9pY0c5d2JXOTBhVzl1TG1weklpd2ljMjkxY21ObFVtOXZkQ0k2SWk5VmMyVnljeTlOWVhSMFVHVnljbmt2VTJsMFpYTXZjRzl3Ylc5MGFXOXVJaXdpYzI5MWNtTmxjME52Ym5SbGJuUWlPbHNpTHk4Z1FXTjBiM0pjYm1sdGNHOXlkQ0JCWTNSdmNpQm1jbTl0SUNjdUwyRmpkRzl5TDBGamRHOXlKenRjYmx4dUx5OGdRV04wYVc5dWMxeHVhVzF3YjNKMElGUjNaV1Z1SUdaeWIyMGdKeTR2WVdOMGFXOXVjeTlVZDJWbGJpYzdYRzVwYlhCdmNuUWdVR2g1YzJsamN5Qm1jbTl0SUNjdUwyRmpkR2x2Ym5NdlVHaDVjMmxqY3ljN1hHNXBiWEJ2Y25RZ1ZISmhZMnNnWm5KdmJTQW5MaTloWTNScGIyNXpMMVJ5WVdOckp6dGNibHh1THk4Z1VISnZZMlZ6YzF4dWFXMXdiM0owSUZCeWIyTmxjM01nWm5KdmJTQW5MaTl3Y205alpYTnpMMUJ5YjJObGMzTW5PMXh1WEc0dkx5QkpibkIxZEZ4dWFXMXdiM0owSUVsdWNIVjBJR1p5YjIwZ0p5NHZhVzV3ZFhRdlNXNXdkWFFuTzF4dVhHNWxlSEJ2Y25RZ1kyOXVjM1FnWVdOMGIzSWdQU0FvY0hKdmNITXBJRDArSUc1bGR5QkJZM1J2Y2lod2NtOXdjeWs3WEc1bGVIQnZjblFnWTI5dWMzUWdkSGRsWlc0Z1BTQW9jSEp2Y0hNcElEMCtJRzVsZHlCVWQyVmxiaWh3Y205d2N5azdYRzVsZUhCdmNuUWdZMjl1YzNRZ2NHaDVjMmxqY3lBOUlDaHdjbTl3Y3lrZ1BUNGdibVYzSUZCb2VYTnBZM01vY0hKdmNITXBPMXh1Wlhod2IzSjBJR052Ym5OMElIUnlZV05yU1c1d2RYUWdQU0FvTGk0dVlYSm5jeWtnUFQ0Z2JtVjNJRlJ5WVdOcktDNHVMbUZ5WjNNcE8xeHVaWGh3YjNKMElHTnZibk4wSUdsdWNIVjBJRDBnS0M0dUxtRnlaM01wSUQwK0lHNWxkeUJKYm5CMWRDZ3VMaTVoY21kektUdGNibVY0Y0c5eWRDQmpiMjV6ZENCd2NtOWpaWE56SUQwZ0tDNHVMbUZ5WjNNcElEMCtJRzVsZHlCUWNtOWpaWE56S0M0dUxtRnlaM01wTzF4dVpYaHdiM0owSUhOMFlXZG5aWElnWm5KdmJTQW5MaTlwYm1NdmMzUmhaMmRsY2ljN1hHNWxlSEJ2Y25RZ2RHbHRaV3hwYm1VZ1puSnZiU0FuTGk5cGJtTXZkR2x0Wld4cGJtVW5PMXh1WEc0dkx5QkJaR0Z3ZEdWeWMxeHVaWGh3YjNKMElHRmtZWEIwWlhJZ1puSnZiU0FuTGk5aFpHRndkR1Z5TDJGa1lYQjBaWEluTzF4dVpYaHdiM0owSUdGMGRISkJaR0Z3ZEdWeUlHWnliMjBnSnk0dllXUmhjSFJsY2k5aGRIUnlMV0ZrWVhCMFpYSW5PMXh1Wlhod2IzSjBJR056YzBGa1lYQjBaWElnWm5KdmJTQW5MaTloWkdGd2RHVnlMMk56Y3kxaFpHRndkR1Z5Snp0Y2JtVjRjRzl5ZENCemRtZEJaR0Z3ZEdWeUlHWnliMjBnSnk0dllXUmhjSFJsY2k5emRtY3RZV1JoY0hSbGNpYzdYRzVsZUhCdmNuUWdjM1puVUdGMGFFRmtZWEIwWlhJZ1puSnZiU0FuTGk5aFpHRndkR1Z5TDNOMlp5MXdZWFJvTFdGa1lYQjBaWEluTzF4dVhHNHZMeUJGWVhOcGJtZGNibVY0Y0c5eWRDQmxZWE5wYm1jZ1puSnZiU0FuTGk5aFkzUnBiMjV6TDJWaGMybHVaeTl3Y21WelpYUXRaV0Z6YVc1bkp6dGNibHh1THk4Z1ZYUnBiSE5jYm1WNGNHOXlkQ0FxSUdGeklHTmhiR01nWm5KdmJTQW5MaTlwYm1NdlkyRnNZeWM3WEc1bGVIQnZjblFnZXlCelpYUkhiRzlpWVd4RWFXeGhkR2x2YmlCOUlHWnliMjBnSnk0dmNISnZZMlZ6Y3k5MGFXMWxjaWM3WEc1Y2JpOHZJRlpoYkhWbElIUjVjR1Z6WEc1bGVIQnZjblFnWVd4d2FHRlVlWEJsSUdaeWIyMGdKeTR2ZG1Gc2RXVXRkSGx3WlhNdllXeHdhR0VuTzF4dVpYaHdiM0owSUdGdVoyeGxWSGx3WlNCbWNtOXRJQ2N1TDNaaGJIVmxMWFI1Y0dWekwyRnVaMnhsSnp0Y2JtVjRjRzl5ZENCaGVHVnpWSGx3WlNCbWNtOXRJQ2N1TDNaaGJIVmxMWFI1Y0dWekwyRjRaWE1uTzF4dVpYaHdiM0owSUdOdmJHOXlWSGx3WlNCbWNtOXRJQ2N1TDNaaGJIVmxMWFI1Y0dWekwyTnZiRzl5Snp0Y2JtVjRjRzl5ZENCamIyMXdiR1Y0Vkhsd1pTQm1jbTl0SUNjdUwzWmhiSFZsTFhSNWNHVnpMMk52YlhCc1pYZ25PMXh1Wlhod2IzSjBJR2hsZUZSNWNHVWdabkp2YlNBbkxpOTJZV3gxWlMxMGVYQmxjeTlvWlhnbk8xeHVaWGh3YjNKMElHaHpiRlI1Y0dVZ1puSnZiU0FuTGk5MllXeDFaUzEwZVhCbGN5OW9jMnduTzF4dVpYaHdiM0owSUhCdmMybDBhVzl1YzFSNWNHVWdabkp2YlNBbkxpOTJZV3gxWlMxMGVYQmxjeTl3YjNOcGRHbHZibk1uTzF4dVpYaHdiM0owSUhCNFZIbHdaU0JtY205dElDY3VMM1poYkhWbExYUjVjR1Z6TDNCNEp6dGNibVY0Y0c5eWRDQnlaMkpVZVhCbElHWnliMjBnSnk0dmRtRnNkV1V0ZEhsd1pYTXZjbWRpSnp0Y2JtVjRjRzl5ZENCelkyRnNaVlI1Y0dVZ1puSnZiU0FuTGk5MllXeDFaUzEwZVhCbGN5OXpZMkZzWlNjN1hHNWxlSEJ2Y25RZ2MyaGhaRzkzVkhsd1pTQm1jbTl0SUNjdUwzWmhiSFZsTFhSNWNHVnpMM05vWVdSdmR5YzdYRzVjYmk4dklGUnlZVzV6Wm05eWJXVnljMXh1Wlhod2IzSjBJQ29nWVhNZ2RISmhibk5tYjNKdFpYSnpJR1p5YjIwZ0p5NHZhVzVqTDNSeVlXNXpabTl5YldWeWN5YzdJbDE5XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9wb3Btb3Rpb24uanNcbiAqKiBtb2R1bGUgaWQgPSAxXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzLnNldEdsb2JhbERpbGF0aW9uID0gdW5kZWZpbmVkO1xuXG52YXIgX3V0aWxzID0gcmVxdWlyZSgnLi4vaW5jL3V0aWxzJyk7XG5cbnZhciBNQVhfRUxBUFNFRCA9IDMzO1xuXG52YXIgY3VycmVudCA9IDA7XG52YXIgZWxhcHNlZCA9IDE2Ljc7XG52YXIgZGlsYXRpb24gPSAxO1xuXG5leHBvcnRzLmRlZmF1bHQgPSB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiAoZnJhbWVzdGFtcCkge1xuICAgICAgICBlbGFwc2VkID0gTWF0aC5tYXgoTWF0aC5taW4oZnJhbWVzdGFtcCAtIGN1cnJlbnQsIE1BWF9FTEFQU0VEKSwgMSkgKiBkaWxhdGlvbjtcbiAgICAgICAgY3VycmVudCA9IGZyYW1lc3RhbXA7XG4gICAgfSxcblxuICAgIHN0YXJ0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBjdXJyZW50ID0gKDAsIF91dGlscy5jdXJyZW50VGltZSkoKTtcbiAgICB9LFxuXG4gICAgZ2V0RWxhcHNlZDogZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gZWxhcHNlZDtcbiAgICB9XG59O1xudmFyIHNldEdsb2JhbERpbGF0aW9uID0gZXhwb3J0cy5zZXRHbG9iYWxEaWxhdGlvbiA9IGZ1bmN0aW9uIChuZXdEaWxhdGlvbikge1xuICAgIHJldHVybiBkaWxhdGlvbiA9IG5ld0RpbGF0aW9uO1xufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbk55WXk5d2NtOWpaWE56TDNScGJXVnlMbXB6SWwwc0ltNWhiV1Z6SWpwYlhTd2liV0Z3Y0dsdVozTWlPaUk3T3pzN096czdRVUZGUVN4SlFVRk5MRmRCUVZjc1IwRkJSeXhGUVVGRkxFTkJRVU03TzBGQlJYWkNMRWxCUVVrc1QwRkJUeXhIUVVGSExFTkJRVU1zUTBGQlF6dEJRVU5vUWl4SlFVRkpMRTlCUVU4c1IwRkJSeXhKUVVGSkxFTkJRVU03UVVGRGJrSXNTVUZCU1N4UlFVRlJMRWRCUVVjc1EwRkJReXhEUVVGRE96dHJRa0ZGUmp0QlFVTllMRlZCUVUwc1JVRkJSU3hWUVVGRExGVkJRVlVzUlVGQlN6dEJRVU53UWl4bFFVRlBMRWRCUVVjc1NVRkJTU3hEUVVGRExFZEJRVWNzUTBGQlF5eEpRVUZKTEVOQlFVTXNSMEZCUnl4RFFVRkRMRlZCUVZVc1IwRkJSeXhQUVVGUExFVkJRVVVzVjBGQlZ5eERRVUZETEVWQlFVVXNRMEZCUXl4RFFVRkRMRWRCUVVjc1VVRkJVU3hEUVVGRE8wRkJRemxGTEdWQlFVOHNSMEZCUnl4VlFVRlZMRU5CUVVNN1MwRkRlRUk3TzBGQlJVUXNVMEZCU3l4RlFVRkZPMlZCUVUwc1QwRkJUeXhIUVVGSExGZEJaR3hDTEZkQlFWY3NSMEZqYjBJN1MwRkJRVHM3UVVGRmNFTXNZMEZCVlN4RlFVRkZPMlZCUVUwc1QwRkJUenRMUVVGQk8wTkJRelZDTzBGQlJVMHNTVUZCVFN4cFFrRkJhVUlzVjBGQmFrSXNhVUpCUVdsQ0xFZEJRVWNzVlVGQlF5eFhRVUZYTzFkQlFVc3NVVUZCVVN4SFFVRkhMRmRCUVZjN1EwRkJRU3hEUVVGRElpd2labWxzWlNJNkluUnBiV1Z5TG1weklpd2ljMjkxY21ObFVtOXZkQ0k2SWk5VmMyVnljeTlOWVhSMFVHVnljbmt2VTJsMFpYTXZjRzl3Ylc5MGFXOXVJaXdpYzI5MWNtTmxjME52Ym5SbGJuUWlPbHNpYVcxd2IzSjBJSHNnWTNWeWNtVnVkRlJwYldVZ2ZTQm1jbTl0SUNjdUxpOXBibU12ZFhScGJITW5PMXh1WEc1amIyNXpkQ0JOUVZoZlJVeEJVRk5GUkNBOUlETXpPMXh1WEc1c1pYUWdZM1Z5Y21WdWRDQTlJREE3WEc1c1pYUWdaV3hoY0hObFpDQTlJREUyTGpjN1hHNXNaWFFnWkdsc1lYUnBiMjRnUFNBeE8xeHVYRzVsZUhCdmNuUWdaR1ZtWVhWc2RDQjdYRzRnSUNBZ2RYQmtZWFJsT2lBb1puSmhiV1Z6ZEdGdGNDa2dQVDRnZTF4dUlDQWdJQ0FnSUNCbGJHRndjMlZrSUQwZ1RXRjBhQzV0WVhnb1RXRjBhQzV0YVc0b1puSmhiV1Z6ZEdGdGNDQXRJR04xY25KbGJuUXNJRTFCV0Y5RlRFRlFVMFZFS1N3Z01Ta2dLaUJrYVd4aGRHbHZianRjYmlBZ0lDQWdJQ0FnWTNWeWNtVnVkQ0E5SUdaeVlXMWxjM1JoYlhBN1hHNGdJQ0FnZlN4Y2JseHVJQ0FnSUhOMFlYSjBPaUFvS1NBOVBpQmpkWEp5Wlc1MElEMGdZM1Z5Y21WdWRGUnBiV1VvS1N4Y2JseHVJQ0FnSUdkbGRFVnNZWEJ6WldRNklDZ3BJRDArSUdWc1lYQnpaV1JjYm4wN1hHNWNibVY0Y0c5eWRDQmpiMjV6ZENCelpYUkhiRzlpWVd4RWFXeGhkR2x2YmlBOUlDaHVaWGRFYVd4aGRHbHZiaWtnUFQ0Z1pHbHNZWFJwYjI0Z1BTQnVaWGRFYVd4aGRHbHZianNpWFgwPVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvcHJvY2Vzcy90aW1lci5qc1xuICoqIG1vZHVsZSBpZCA9IDJcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF9BY3Rpb24yID0gcmVxdWlyZSgnLi4vYWN0aW9ucy9BY3Rpb24nKTtcblxudmFyIF9BY3Rpb24zID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfQWN0aW9uMik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKCFzZWxmKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gY2FsbCAmJiAodHlwZW9mIGNhbGwgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikgPyBjYWxsIDogc2VsZjsgfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb24sIG5vdCBcIiArIHR5cGVvZiBzdXBlckNsYXNzKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCBlbnVtZXJhYmxlOiBmYWxzZSwgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LnNldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKSA6IHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7IH1cblxuLypcbiAgICBNZXRob2RzIGFuZCBwcm9wZXJ0aWVzIHRvIGFkZCB0byBib3VuZCBBY3Rpb25zXG4qL1xudmFyIGJvdW5kT25TdGFydCA9IGZ1bmN0aW9uIChhY3Rpb24pIHtcbiAgICByZXR1cm4gYWN0aW9uLmFjdG9yLmFjdGl2YXRlQWN0aW9uKGFjdGlvbi5pZCwgYWN0aW9uKTtcbn07XG52YXIgYm91bmRPblN0b3AgPSBmdW5jdGlvbiAoYWN0aW9uKSB7XG4gICAgcmV0dXJuIGFjdGlvbi5hY3Rvci5kZWFjdGl2YXRlQWN0aW9uKGFjdGlvbi5pZCk7XG59O1xudmFyIGJvdW5kUHJvcHMgPSBmdW5jdGlvbiAoYWN0b3IsIGFjdGlvbikge1xuICAgIHJldHVybiB7XG4gICAgICAgIGFjdG9yOiBhY3RvcixcbiAgICAgICAgaXNQcmlvcml0eTogdHJ1ZSxcbiAgICAgICAgb246IGFjdG9yLm9uLFxuICAgICAgICBvblN0YXJ0OiBib3VuZE9uU3RhcnQsXG4gICAgICAgIG9uU3RvcDogYm91bmRPblN0b3AsXG4gICAgICAgIG9uUmVuZGVyOiB1bmRlZmluZWRcbiAgICB9O1xufTtcblxudmFyIEFjdG9yID0gKGZ1bmN0aW9uIChfQWN0aW9uKSB7XG4gICAgX2luaGVyaXRzKEFjdG9yLCBfQWN0aW9uKTtcblxuICAgIGZ1bmN0aW9uIEFjdG9yKCkge1xuICAgICAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgQWN0b3IpO1xuXG4gICAgICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICAgICAgICBhcmdzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIF90aGlzID0gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgX0FjdGlvbi5jYWxsLmFwcGx5KF9BY3Rpb24sIFt0aGlzXS5jb25jYXQoYXJncykpKTtcblxuICAgICAgICBfdGhpcy5hY3RpdmVBY3Rpb25zID0ge307XG4gICAgICAgIF90aGlzLm51bUFjdGl2ZUFjdGlvbnMgPSAwO1xuICAgICAgICByZXR1cm4gX3RoaXM7XG4gICAgfVxuXG4gICAgQWN0b3IucHJvdG90eXBlLnNldCA9IGZ1bmN0aW9uIHNldChwcm9wcywgaW5zdGFudCkge1xuICAgICAgICBpZiAoaW5zdGFudCB8fCAhdGhpcy5yZWR1Y2VyKSB7XG4gICAgICAgICAgICBfQWN0aW9uLnByb3RvdHlwZS5zZXQuY2FsbCh0aGlzLCBwcm9wcyk7XG4gICAgICAgICAgICB0aGlzLm9uY2UoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHZhciBhY3Rpb24gPSB0aGlzLnJlZHVjZXIocHJvcHMpO1xuICAgICAgICAgICAgaWYgKGFjdGlvbikge1xuICAgICAgICAgICAgICAgIHRoaXMuc3RhcnQoYWN0aW9uKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG5cbiAgICAvKlxuICAgICAgICBCaW5kIEFjdGlvbiB0byBBY3RvclxuICAgICovXG5cbiAgICBBY3Rvci5wcm90b3R5cGUuYmluZCA9IGZ1bmN0aW9uIGJpbmQoYWN0aW9uKSB7XG4gICAgICAgIHZhciBpbmhlcml0ZWRBY3Rpb24gPSBhY3Rpb24uaW5oZXJpdCgpO1xuICAgICAgICB2YXIgbmV3VmFsdWVzID0ge307XG4gICAgICAgIHZhciBoYXNOZXdWYWx1ZXMgPSBmYWxzZTtcblxuICAgICAgICAvLyBDcmVhdGUgdmFsdWVzIG9uIGFjdG9yIHRoYXQgZG9uJ3QgZXhpc3RcbiAgICAgICAgZm9yICh2YXIga2V5IGluIGluaGVyaXRlZEFjdGlvbi52YWx1ZXMpIHtcbiAgICAgICAgICAgIGlmIChpbmhlcml0ZWRBY3Rpb24udmFsdWVzLmhhc093blByb3BlcnR5KGtleSkgJiYgIXRoaXMudmFsdWVzLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICAgICAgICBuZXdWYWx1ZXNba2V5XSA9IGluaGVyaXRlZEFjdGlvbi52YWx1ZXNba2V5XTtcbiAgICAgICAgICAgICAgICBoYXNOZXdWYWx1ZXMgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGhhc05ld1ZhbHVlcykge1xuICAgICAgICAgICAgdGhpcy5zZXQoeyB2YWx1ZXM6IG5ld1ZhbHVlcyB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBpbmhlcml0ZWRBY3Rpb24uc2V0KGJvdW5kUHJvcHModGhpcywgaW5oZXJpdGVkQWN0aW9uKSk7XG4gICAgfTtcblxuICAgIC8qXG4gICAgICAgIFN0YXJ0IEFjdG9yXG4gICAgICAgICBJZiBBY3Rpb24gaXMgcHJvdmlkZWQsIGJpbmQgaXQgdG8gdGhpcyBBY3RvciBhbmQgc3RhcnRcbiAgICAgICAgIEBwYXJhbSAob3B0aW9uYWwpIFtBY3Rpb25dXG4gICAgKi9cblxuICAgIEFjdG9yLnByb3RvdHlwZS5zdGFydCA9IGZ1bmN0aW9uIHN0YXJ0KGFjdGlvbikge1xuICAgICAgICBfQWN0aW9uLnByb3RvdHlwZS5zdGFydC5jYWxsKHRoaXMpO1xuXG4gICAgICAgIGlmIChhY3Rpb24pIHtcbiAgICAgICAgICAgIHZhciBib3VuZEFjdGlvbiA9IHRoaXMuYmluZChhY3Rpb24pO1xuICAgICAgICAgICAgYm91bmRBY3Rpb24uc3RhcnQoKTtcblxuICAgICAgICAgICAgcmV0dXJuIGJvdW5kQWN0aW9uO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZm9yICh2YXIga2V5IGluIHRoaXMuYWN0aXZlQWN0aW9ucykge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmFjdGl2ZUFjdGlvbnMuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgX2FjdGlvbiA9IHRoaXMuYWN0aXZlQWN0aW9uc1trZXldO1xuICAgICAgICAgICAgICAgICAgICBpZiAoIV9hY3Rpb24uaXNBY3RpdmUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9hY3Rpb24uc3RhcnQoKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH07XG5cbiAgICBBY3Rvci5wcm90b3R5cGUuc3RvcCA9IGZ1bmN0aW9uIHN0b3AoKSB7XG4gICAgICAgIF9BY3Rpb24ucHJvdG90eXBlLnN0b3AuY2FsbCh0aGlzKTtcblxuICAgICAgICBmb3IgKHZhciBrZXkgaW4gdGhpcy5hY3RpdmVBY3Rpb25zKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5hY3RpdmVBY3Rpb25zLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmFjdGl2ZUFjdGlvbnNba2V5XS5zdG9wKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgQWN0b3IucHJvdG90eXBlLndpbGxSZW5kZXIgPSBmdW5jdGlvbiB3aWxsUmVuZGVyKGFjdG9yLCBmcmFtZVN0YW1wLCBlbGFwc2VkKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5udW1WYWx1ZUtleXM7IGkrKykge1xuICAgICAgICAgICAgdmFyIGtleSA9IHRoaXMudmFsdWVLZXlzW2ldO1xuICAgICAgICAgICAgdmFyIHZhbHVlID0gdGhpcy52YWx1ZXNba2V5XTtcblxuICAgICAgICAgICAgaWYgKHZhbHVlLmRyaXZlcikge1xuICAgICAgICAgICAgICAgIHZhbHVlLmN1cnJlbnQgPSB0aGlzLmFjdGl2ZUFjdGlvbnNbdmFsdWUuZHJpdmVyXS52YWx1ZXNba2V5XS5jdXJyZW50O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIF9BY3Rpb24ucHJvdG90eXBlLndpbGxSZW5kZXIuY2FsbCh0aGlzLCBhY3RvciwgZnJhbWVTdGFtcCwgZWxhcHNlZCk7XG4gICAgfTtcblxuICAgIC8qXG4gICAgICAgIEFkZCBhY3RpdmUgYWN0aW9uc1xuICAgICAgICAgQHBhcmFtIFtudW1iZXJdXG4gICAgICAgIEBwYXJhbSBbQWN0aW9uXVxuICAgICovXG5cbiAgICBBY3Rvci5wcm90b3R5cGUuYWN0aXZhdGVBY3Rpb24gPSBmdW5jdGlvbiBhY3RpdmF0ZUFjdGlvbihpZCwgYWN0aW9uKSB7XG4gICAgICAgIHRoaXMuYWN0aXZlQWN0aW9uc1tpZF0gPSBhY3Rpb247XG4gICAgICAgIHRoaXMubnVtQWN0aXZlQWN0aW9ucysrO1xuXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYWN0aW9uLm51bVZhbHVlS2V5czsgaSsrKSB7XG4gICAgICAgICAgICB2YXIga2V5ID0gYWN0aW9uLnZhbHVlS2V5c1tpXTtcbiAgICAgICAgICAgIHZhciB2YWx1ZSA9IHRoaXMudmFsdWVzW2tleV07XG5cbiAgICAgICAgICAgIHZhbHVlLmRyaXZlciA9IGlkO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMubnVtQWN0aXZlQWN0aW9ucykge1xuICAgICAgICAgICAgX0FjdGlvbi5wcm90b3R5cGUuc3RhcnQuY2FsbCh0aGlzKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICAvKlxuICAgICAgICBSZW1vdmUgYWN0aXZlIGFjdGlvbnNcbiAgICAgICAgIEBwYXJhbSBbbnVtYmVyXVxuICAgICovXG5cbiAgICBBY3Rvci5wcm90b3R5cGUuZGVhY3RpdmF0ZUFjdGlvbiA9IGZ1bmN0aW9uIGRlYWN0aXZhdGVBY3Rpb24oaWQpIHtcbiAgICAgICAgdmFyIGFjdGlvbiA9IHRoaXMuYWN0aXZlQWN0aW9uc1tpZF07XG5cbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhY3Rpb24ubnVtVmFsdWVLZXlzOyBpKyspIHtcbiAgICAgICAgICAgIHZhciBrZXkgPSBhY3Rpb24udmFsdWVLZXlzW2ldO1xuICAgICAgICAgICAgdmFyIHZhbHVlID0gdGhpcy52YWx1ZXNba2V5XTtcblxuICAgICAgICAgICAgdmFsdWUuZHJpdmVyID0gdW5kZWZpbmVkO1xuICAgICAgICB9XG5cbiAgICAgICAgZGVsZXRlIHRoaXMuYWN0aXZlQWN0aW9uc1tpZF07XG4gICAgICAgIHRoaXMubnVtQWN0aXZlQWN0aW9ucy0tO1xuXG4gICAgICAgIGlmICghdGhpcy5udW1BY3RpdmVBY3Rpb25zICYmIHRoaXMuaXNBY3RpdmUpIHtcbiAgICAgICAgICAgIF9BY3Rpb24ucHJvdG90eXBlLnN0b3AuY2FsbCh0aGlzKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICByZXR1cm4gQWN0b3I7XG59KShfQWN0aW9uMy5kZWZhdWx0KTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gQWN0b3I7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5OeVl5OWhZM1J2Y2k5QlkzUnZjaTVxY3lKZExDSnVZVzFsY3lJNlcxMHNJbTFoY0hCcGJtZHpJam9pT3pzN096czdPenM3T3pzN096czdPenM3TzBGQlMwRXNTVUZCVFN4WlFVRlpMRWRCUVVjc1ZVRkJReXhOUVVGTk8xZEJRVXNzVFVGQlRTeERRVUZETEV0QlFVc3NRMEZCUXl4alFVRmpMRU5CUVVNc1RVRkJUU3hEUVVGRExFVkJRVVVzUlVGQlJTeE5RVUZOTEVOQlFVTTdRMEZCUVN4RFFVRkRPMEZCUTJoR0xFbEJRVTBzVjBGQlZ5eEhRVUZITEZWQlFVTXNUVUZCVFR0WFFVRkxMRTFCUVUwc1EwRkJReXhMUVVGTExFTkJRVU1zWjBKQlFXZENMRU5CUVVNc1RVRkJUU3hEUVVGRExFVkJRVVVzUTBGQlF6dERRVUZCTEVOQlFVTTdRVUZEZWtVc1NVRkJUU3hWUVVGVkxFZEJRVWNzVlVGQlF5eExRVUZMTEVWQlFVVXNUVUZCVFR0WFFVRk5PMEZCUTI1RExHRkJRVXNzUlVGQlJTeExRVUZMTzBGQlExb3NhMEpCUVZVc1JVRkJSU3hKUVVGSk8wRkJRMmhDTEZWQlFVVXNSVUZCUlN4TFFVRkxMRU5CUVVNc1JVRkJSVHRCUVVOYUxHVkJRVThzUlVGQlJTeFpRVUZaTzBGQlEzSkNMR05CUVUwc1JVRkJSU3hYUVVGWE8wRkJRMjVDTEdkQ1FVRlJMRVZCUVVVc1UwRkJVenRMUVVOMFFqdERRVUZETEVOQlFVTTdPMGxCUld0Q0xFdEJRVXM3WTBGQlRDeExRVUZMT3p0QlFVTjBRaXhoUVVScFFpeExRVUZMTEVkQlEwUTdPRUpCUkVvc1MwRkJTenM3TUVOQlExQXNTVUZCU1R0QlFVRktMR2RDUVVGSk96czdjVVJCUTJZc01FTkJRVk1zU1VGQlNTeEZRVUZET3p0QlFVTmtMR05CUVVzc1lVRkJZU3hIUVVGSExFVkJRVVVzUTBGQlF6dEJRVU40UWl4alFVRkxMR2RDUVVGblFpeEhRVUZITEVOQlFVTXNRMEZCUXpzN1MwRkROMEk3TzBGQlRHZENMRk5CUVVzc1YwRlBkRUlzUjBGQlJ5eG5Ra0ZCUXl4TFFVRkxMRVZCUVVVc1QwRkJUeXhGUVVGRk8wRkJRMmhDTEZsQlFVa3NUMEZCVHl4SlFVRkpMRU5CUVVNc1NVRkJTU3hEUVVGRExFOUJRVThzUlVGQlJUdEJRVU14UWl3NFFrRkJUU3hIUVVGSExFdEJRVUVzVDBGQlF5eExRVUZMTEVOQlFVTXNRMEZCUXp0QlFVTnFRaXhuUWtGQlNTeERRVUZETEVsQlFVa3NSVUZCUlN4RFFVRkRPMU5CUTJZc1RVRkJUVHRCUVVOSUxHZENRVUZOTEUxQlFVMHNSMEZCUnl4SlFVRkpMRU5CUVVNc1QwRkJUeXhEUVVGRExFdEJRVXNzUTBGQlF5eERRVUZETzBGQlEyNURMR2RDUVVGSkxFMUJRVTBzUlVGQlJUdEJRVU5TTEc5Q1FVRkpMRU5CUVVNc1MwRkJTeXhEUVVGRExFMUJRVTBzUTBGQlF5eERRVUZETzJGQlEzUkNPMU5CUTBvN1MwRkRTanM3T3pzN08wRkJha0puUWl4VFFVRkxMRmRCYzBKMFFpeEpRVUZKTEdsQ1FVRkRMRTFCUVUwc1JVRkJSVHRCUVVOVUxGbEJRVTBzWlVGQlpTeEhRVUZITEUxQlFVMHNRMEZCUXl4UFFVRlBMRVZCUVVVc1EwRkJRenRCUVVONlF5eFpRVUZKTEZOQlFWTXNSMEZCUnl4RlFVRkZMRU5CUVVNN1FVRkRia0lzV1VGQlNTeFpRVUZaTEVkQlFVY3NTMEZCU3pzN08wRkJRVU1zUVVGSGVrSXNZVUZCU3l4SlFVRkpMRWRCUVVjc1NVRkJTU3hsUVVGbExFTkJRVU1zVFVGQlRTeEZRVUZGTzBGQlEzQkRMR2RDUVVGSkxHVkJRV1VzUTBGQlF5eE5RVUZOTEVOQlFVTXNZMEZCWXl4RFFVRkRMRWRCUVVjc1EwRkJReXhKUVVGSkxFTkJRVU1zU1VGQlNTeERRVUZETEUxQlFVMHNRMEZCUXl4alFVRmpMRU5CUVVNc1IwRkJSeXhEUVVGRExFVkJRVVU3UVVGRGFFWXNlVUpCUVZNc1EwRkJReXhIUVVGSExFTkJRVU1zUjBGQlJ5eGxRVUZsTEVOQlFVTXNUVUZCVFN4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRE8wRkJRemRETERSQ1FVRlpMRWRCUVVjc1NVRkJTU3hEUVVGRE8yRkJRM1pDTzFOQlEwbzdPMEZCUlVRc1dVRkJTU3haUVVGWkxFVkJRVVU3UVVGRFpDeG5Ra0ZCU1N4RFFVRkRMRWRCUVVjc1EwRkJReXhGUVVGRkxFMUJRVTBzUlVGQlJTeFRRVUZUTEVWQlFVVXNRMEZCUXl4RFFVRkRPMU5CUTI1RE96dEJRVVZFTEdWQlFVOHNaVUZCWlN4RFFVRkRMRWRCUVVjc1EwRkJReXhWUVVGVkxFTkJRVU1zU1VGQlNTeEZRVUZGTEdWQlFXVXNRMEZCUXl4RFFVRkRMRU5CUVVNN1MwRkRha1U3T3pzN096czdPMEZCZUVOblFpeFRRVUZMTEZkQmFVUjBRaXhMUVVGTExHdENRVUZETEUxQlFVMHNSVUZCUlR0QlFVTldMREJDUVVGTkxFdEJRVXNzUzBGQlFTeE5RVUZGTEVOQlFVTTdPMEZCUldRc1dVRkJTU3hOUVVGTkxFVkJRVVU3UVVGRFVpeG5Ra0ZCVFN4WFFVRlhMRWRCUVVjc1NVRkJTU3hEUVVGRExFbEJRVWtzUTBGQlF5eE5RVUZOTEVOQlFVTXNRMEZCUXp0QlFVTjBReXgxUWtGQlZ5eERRVUZETEV0QlFVc3NSVUZCUlN4RFFVRkRPenRCUVVWd1FpeHRRa0ZCVHl4WFFVRlhMRU5CUVVNN1UwRkRkRUlzVFVGQlRUdEJRVU5JTEdsQ1FVRkxMRWxCUVVrc1IwRkJSeXhKUVVGSkxFbEJRVWtzUTBGQlF5eGhRVUZoTEVWQlFVVTdRVUZEYUVNc2IwSkJRVWtzU1VGQlNTeERRVUZETEdGQlFXRXNRMEZCUXl4alFVRmpMRU5CUVVNc1IwRkJSeXhEUVVGRExFVkJRVVU3UVVGRGVFTXNkMEpCUVUwc1QwRkJUU3hIUVVGSExFbEJRVWtzUTBGQlF5eGhRVUZoTEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNN1FVRkRka01zZDBKQlFVa3NRMEZCUXl4UFFVRk5MRU5CUVVNc1VVRkJVU3hGUVVGRk8wRkJRMnhDTEN0Q1FVRk5MRU5CUVVNc1MwRkJTeXhGUVVGRkxFTkJRVU03Y1VKQlEyeENPMmxDUVVOS08yRkJRMG83VTBGRFNqczdRVUZGUkN4bFFVRlBMRWxCUVVrc1EwRkJRenRMUVVObU96dEJRWEpGWjBJc1UwRkJTeXhYUVhWRmRFSXNTVUZCU1N4dFFrRkJSenRCUVVOSUxEQkNRVUZOTEVsQlFVa3NTMEZCUVN4TlFVRkZMRU5CUVVNN08wRkJSV0lzWVVGQlN5eEpRVUZKTEVkQlFVY3NTVUZCU1N4SlFVRkpMRU5CUVVNc1lVRkJZU3hGUVVGRk8wRkJRMmhETEdkQ1FVRkpMRWxCUVVrc1EwRkJReXhoUVVGaExFTkJRVU1zWTBGQll5eERRVUZETEVkQlFVY3NRMEZCUXl4RlFVRkZPMEZCUTNoRExHOUNRVUZKTEVOQlFVTXNZVUZCWVN4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRExFbEJRVWtzUlVGQlJTeERRVUZETzJGQlEyeERPMU5CUTBvN1MwRkRTanM3UVVFdlJXZENMRk5CUVVzc1YwRnBSblJDTEZWQlFWVXNkVUpCUVVNc1MwRkJTeXhGUVVGRkxGVkJRVlVzUlVGQlJTeFBRVUZQTEVWQlFVVTdRVUZEYmtNc1lVRkJTeXhKUVVGSkxFTkJRVU1zUjBGQlJ5eERRVUZETEVWQlFVVXNRMEZCUXl4SFFVRkhMRWxCUVVrc1EwRkJReXhaUVVGWkxFVkJRVVVzUTBGQlF5eEZRVUZGTEVWQlFVVTdRVUZEZUVNc1owSkJRVTBzUjBGQlJ5eEhRVUZITEVsQlFVa3NRMEZCUXl4VFFVRlRMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU03UVVGRE9VSXNaMEpCUVUwc1MwRkJTeXhIUVVGSExFbEJRVWtzUTBGQlF5eE5RVUZOTEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNN08wRkJSUzlDTEdkQ1FVRkpMRXRCUVVzc1EwRkJReXhOUVVGTkxFVkJRVVU3UVVGRFpDeHhRa0ZCU3l4RFFVRkRMRTlCUVU4c1IwRkJSeXhKUVVGSkxFTkJRVU1zWVVGQllTeERRVUZETEV0QlFVc3NRMEZCUXl4TlFVRk5MRU5CUVVNc1EwRkJReXhOUVVGTkxFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTXNUMEZCVHl4RFFVRkRPMkZCUTNoRk8xTkJRMG83TzBGQlJVUXNaVUZCVHl4clFrRkJUU3hWUVVGVkxFdEJRVUVzVDBGQlF5eExRVUZMTEVWQlFVVXNWVUZCVlN4RlFVRkZMRTlCUVU4c1EwRkJReXhEUVVGRE8wdEJRM1pFT3pzN096czdPenRCUVRWR1owSXNVMEZCU3l4WFFXOUhkRUlzWTBGQll5d3lRa0ZCUXl4RlFVRkZMRVZCUVVVc1RVRkJUU3hGUVVGRk8wRkJRM1pDTEZsQlFVa3NRMEZCUXl4aFFVRmhMRU5CUVVNc1JVRkJSU3hEUVVGRExFZEJRVWNzVFVGQlRTeERRVUZETzBGQlEyaERMRmxCUVVrc1EwRkJReXhuUWtGQlowSXNSVUZCUlN4RFFVRkRPenRCUVVWNFFpeGhRVUZMTEVsQlFVa3NRMEZCUXl4SFFVRkhMRU5CUVVNc1JVRkJSU3hEUVVGRExFZEJRVWNzVFVGQlRTeERRVUZETEZsQlFWa3NSVUZCUlN4RFFVRkRMRVZCUVVVc1JVRkJSVHRCUVVNeFF5eG5Ra0ZCVFN4SFFVRkhMRWRCUVVjc1RVRkJUU3hEUVVGRExGTkJRVk1zUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXp0QlFVTm9ReXhuUWtGQlRTeExRVUZMTEVkQlFVY3NTVUZCU1N4RFFVRkRMRTFCUVUwc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF6czdRVUZGTDBJc2FVSkJRVXNzUTBGQlF5eE5RVUZOTEVkQlFVY3NSVUZCUlN4RFFVRkRPMU5CUTNKQ096dEJRVVZFTEZsQlFVa3NTVUZCU1N4RFFVRkRMR2RDUVVGblFpeEZRVUZGTzBGQlEzWkNMRGhDUVVGTkxFdEJRVXNzUzBGQlFTeE5RVUZGTEVOQlFVTTdVMEZEYWtJN1MwRkRTanM3T3pzN096dEJRV3hJWjBJc1UwRkJTeXhYUVhsSWRFSXNaMEpCUVdkQ0xEWkNRVUZETEVWQlFVVXNSVUZCUlR0QlFVTnFRaXhaUVVGTkxFMUJRVTBzUjBGQlJ5eEpRVUZKTEVOQlFVTXNZVUZCWVN4RFFVRkRMRVZCUVVVc1EwRkJReXhEUVVGRE96dEJRVVYwUXl4aFFVRkxMRWxCUVVrc1EwRkJReXhIUVVGSExFTkJRVU1zUlVGQlJTeERRVUZETEVkQlFVY3NUVUZCVFN4RFFVRkRMRmxCUVZrc1JVRkJSU3hEUVVGRExFVkJRVVVzUlVGQlJUdEJRVU14UXl4blFrRkJUU3hIUVVGSExFZEJRVWNzVFVGQlRTeERRVUZETEZOQlFWTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJRenRCUVVOb1F5eG5Ra0ZCVFN4TFFVRkxMRWRCUVVjc1NVRkJTU3hEUVVGRExFMUJRVTBzUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXpzN1FVRkZMMElzYVVKQlFVc3NRMEZCUXl4TlFVRk5MRWRCUVVjc1UwRkJVeXhEUVVGRE8xTkJRelZDT3p0QlFVVkVMR1ZCUVU4c1NVRkJTU3hEUVVGRExHRkJRV0VzUTBGQlF5eEZRVUZGTEVOQlFVTXNRMEZCUXp0QlFVTTVRaXhaUVVGSkxFTkJRVU1zWjBKQlFXZENMRVZCUVVVc1EwRkJRenM3UVVGRmVFSXNXVUZCU1N4RFFVRkRMRWxCUVVrc1EwRkJReXhuUWtGQlowSXNTVUZCU1N4SlFVRkpMRU5CUVVNc1VVRkJVU3hGUVVGRk8wRkJRM3BETERoQ1FVRk5MRWxCUVVrc1MwRkJRU3hOUVVGRkxFTkJRVU03VTBGRGFFSTdTMEZEU2pzN1YwRjZTV2RDTEV0QlFVczdPenRyUWtGQlRDeExRVUZMSWl3aVptbHNaU0k2SWtGamRHOXlMbXB6SWl3aWMyOTFjbU5sVW05dmRDSTZJaTlWYzJWeWN5OU5ZWFIwVUdWeWNua3ZVMmwwWlhNdmNHOXdiVzkwYVc5dUlpd2ljMjkxY21ObGMwTnZiblJsYm5RaU9sc2lhVzF3YjNKMElFRmpkR2x2YmlCbWNtOXRJQ2N1TGk5aFkzUnBiMjV6TDBGamRHbHZiaWM3WEc1Y2JpOHFYRzRnSUNBZ1RXVjBhRzlrY3lCaGJtUWdjSEp2Y0dWeWRHbGxjeUIwYnlCaFpHUWdkRzhnWW05MWJtUWdRV04wYVc5dWMxeHVLaTljYm1OdmJuTjBJR0p2ZFc1a1QyNVRkR0Z5ZENBOUlDaGhZM1JwYjI0cElEMCtJR0ZqZEdsdmJpNWhZM1J2Y2k1aFkzUnBkbUYwWlVGamRHbHZiaWhoWTNScGIyNHVhV1FzSUdGamRHbHZiaWs3WEc1amIyNXpkQ0JpYjNWdVpFOXVVM1J2Y0NBOUlDaGhZM1JwYjI0cElEMCtJR0ZqZEdsdmJpNWhZM1J2Y2k1a1pXRmpkR2wyWVhSbFFXTjBhVzl1S0dGamRHbHZiaTVwWkNrN1hHNWpiMjV6ZENCaWIzVnVaRkJ5YjNCeklEMGdLR0ZqZEc5eUxDQmhZM1JwYjI0cElEMCtJQ2g3WEc0Z0lDQWdZV04wYjNJNklHRmpkRzl5TEZ4dUlDQWdJR2x6VUhKcGIzSnBkSGs2SUhSeWRXVXNYRzRnSUNBZ2IyNDZJR0ZqZEc5eUxtOXVMRnh1SUNBZ0lHOXVVM1JoY25RNklHSnZkVzVrVDI1VGRHRnlkQ3hjYmlBZ0lDQnZibE4wYjNBNklHSnZkVzVrVDI1VGRHOXdMRnh1SUNBZ0lHOXVVbVZ1WkdWeU9pQjFibVJsWm1sdVpXUmNibjBwTzF4dVhHNWxlSEJ2Y25RZ1pHVm1ZWFZzZENCamJHRnpjeUJCWTNSdmNpQmxlSFJsYm1SeklFRmpkR2x2YmlCN1hHNGdJQ0FnWTI5dWMzUnlkV04wYjNJb0xpNHVZWEpuY3lrZ2UxeHVJQ0FnSUNBZ0lDQnpkWEJsY2lndUxpNWhjbWR6S1R0Y2JpQWdJQ0FnSUNBZ2RHaHBjeTVoWTNScGRtVkJZM1JwYjI1eklEMGdlMzA3WEc0Z0lDQWdJQ0FnSUhSb2FYTXViblZ0UVdOMGFYWmxRV04wYVc5dWN5QTlJREE3WEc0Z0lDQWdmVnh1WEc0Z0lDQWdjMlYwS0hCeWIzQnpMQ0JwYm5OMFlXNTBLU0I3WEc0Z0lDQWdJQ0FnSUdsbUlDaHBibk4wWVc1MElIeDhJQ0YwYUdsekxuSmxaSFZqWlhJcElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUhOMWNHVnlMbk5sZENod2NtOXdjeWs3WEc0Z0lDQWdJQ0FnSUNBZ0lDQjBhR2x6TG05dVkyVW9LVHRjYmlBZ0lDQWdJQ0FnZlNCbGJITmxJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lHTnZibk4wSUdGamRHbHZiaUE5SUhSb2FYTXVjbVZrZFdObGNpaHdjbTl3Y3lrN1hHNGdJQ0FnSUNBZ0lDQWdJQ0JwWmlBb1lXTjBhVzl1S1NCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2RHaHBjeTV6ZEdGeWRDaGhZM1JwYjI0cE8xeHVJQ0FnSUNBZ0lDQWdJQ0FnZlZ4dUlDQWdJQ0FnSUNCOVhHNGdJQ0FnZlZ4dVhHNGdJQ0FnTHlwY2JpQWdJQ0FnSUNBZ1FtbHVaQ0JCWTNScGIyNGdkRzhnUVdOMGIzSmNiaUFnSUNBcUwxeHVJQ0FnSUdKcGJtUW9ZV04wYVc5dUtTQjdYRzRnSUNBZ0lDQWdJR052Ym5OMElHbHVhR1Z5YVhSbFpFRmpkR2x2YmlBOUlHRmpkR2x2Ymk1cGJtaGxjbWwwS0NrN1hHNGdJQ0FnSUNBZ0lHeGxkQ0J1WlhkV1lXeDFaWE1nUFNCN2ZUdGNiaUFnSUNBZ0lDQWdiR1YwSUdoaGMwNWxkMVpoYkhWbGN5QTlJR1poYkhObE8xeHVYRzRnSUNBZ0lDQWdJQzh2SUVOeVpXRjBaU0IyWVd4MVpYTWdiMjRnWVdOMGIzSWdkR2hoZENCa2IyNG5kQ0JsZUdsemRGeHVJQ0FnSUNBZ0lDQm1iM0lnS0d4bGRDQnJaWGtnYVc0Z2FXNW9aWEpwZEdWa1FXTjBhVzl1TG5aaGJIVmxjeWtnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdhV1lnS0dsdWFHVnlhWFJsWkVGamRHbHZiaTUyWVd4MVpYTXVhR0Z6VDNkdVVISnZjR1Z5ZEhrb2EyVjVLU0FtSmlBaGRHaHBjeTUyWVd4MVpYTXVhR0Z6VDNkdVVISnZjR1Z5ZEhrb2EyVjVLU2tnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUc1bGQxWmhiSFZsYzF0clpYbGRJRDBnYVc1b1pYSnBkR1ZrUVdOMGFXOXVMblpoYkhWbGMxdHJaWGxkTzF4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUdoaGMwNWxkMVpoYkhWbGN5QTlJSFJ5ZFdVN1hHNGdJQ0FnSUNBZ0lDQWdJQ0I5WEc0Z0lDQWdJQ0FnSUgxY2JseHVJQ0FnSUNBZ0lDQnBaaUFvYUdGelRtVjNWbUZzZFdWektTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNCMGFHbHpMbk5sZENoN0lIWmhiSFZsY3pvZ2JtVjNWbUZzZFdWeklIMHBPMXh1SUNBZ0lDQWdJQ0I5WEc1Y2JpQWdJQ0FnSUNBZ2NtVjBkWEp1SUdsdWFHVnlhWFJsWkVGamRHbHZiaTV6WlhRb1ltOTFibVJRY205d2N5aDBhR2x6TENCcGJtaGxjbWwwWldSQlkzUnBiMjRwS1R0Y2JpQWdJQ0I5WEc1Y2JpQWdJQ0F2S2x4dUlDQWdJQ0FnSUNCVGRHRnlkQ0JCWTNSdmNseHVYRzRnSUNBZ0lDQWdJRWxtSUVGamRHbHZiaUJwY3lCd2NtOTJhV1JsWkN3Z1ltbHVaQ0JwZENCMGJ5QjBhR2x6SUVGamRHOXlJR0Z1WkNCemRHRnlkRnh1WEc0Z0lDQWdJQ0FnSUVCd1lYSmhiU0FvYjNCMGFXOXVZV3dwSUZ0QlkzUnBiMjVkWEc0Z0lDQWdLaTljYmlBZ0lDQnpkR0Z5ZENoaFkzUnBiMjRwSUh0Y2JpQWdJQ0FnSUNBZ2MzVndaWEl1YzNSaGNuUW9LVHRjYmx4dUlDQWdJQ0FnSUNCcFppQW9ZV04wYVc5dUtTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNCamIyNXpkQ0JpYjNWdVpFRmpkR2x2YmlBOUlIUm9hWE11WW1sdVpDaGhZM1JwYjI0cE8xeHVJQ0FnSUNBZ0lDQWdJQ0FnWW05MWJtUkJZM1JwYjI0dWMzUmhjblFvS1R0Y2JseHVJQ0FnSUNBZ0lDQWdJQ0FnY21WMGRYSnVJR0p2ZFc1a1FXTjBhVzl1TzF4dUlDQWdJQ0FnSUNCOUlHVnNjMlVnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdabTl5SUNoc1pYUWdhMlY1SUdsdUlIUm9hWE11WVdOMGFYWmxRV04wYVc5dWN5a2dlMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJR2xtSUNoMGFHbHpMbUZqZEdsMlpVRmpkR2x2Ym5NdWFHRnpUM2R1VUhKdmNHVnlkSGtvYTJWNUtTa2dlMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCamIyNXpkQ0JoWTNScGIyNGdQU0IwYUdsekxtRmpkR2wyWlVGamRHbHZibk5iYTJWNVhUdGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnYVdZZ0tDRmhZM1JwYjI0dWFYTkJZM1JwZG1VcElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lHRmpkR2x2Ymk1emRHRnlkQ2dwTzF4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQjlYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdmVnh1SUNBZ0lDQWdJQ0FnSUNBZ2ZWeHVJQ0FnSUNBZ0lDQjlYRzVjYmlBZ0lDQWdJQ0FnY21WMGRYSnVJSFJvYVhNN1hHNGdJQ0FnZlZ4dVhHNGdJQ0FnYzNSdmNDZ3BJSHRjYmlBZ0lDQWdJQ0FnYzNWd1pYSXVjM1J2Y0NncE8xeHVYRzRnSUNBZ0lDQWdJR1p2Y2lBb2JHVjBJR3RsZVNCcGJpQjBhR2x6TG1GamRHbDJaVUZqZEdsdmJuTXBJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lHbG1JQ2gwYUdsekxtRmpkR2wyWlVGamRHbHZibk11YUdGelQzZHVVSEp2Y0dWeWRIa29hMlY1S1NrZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lIUm9hWE11WVdOMGFYWmxRV04wYVc5dWMxdHJaWGxkTG5OMGIzQW9LVHRjYmlBZ0lDQWdJQ0FnSUNBZ0lIMWNiaUFnSUNBZ0lDQWdmVnh1SUNBZ0lIMWNibHh1SUNBZ0lIZHBiR3hTWlc1a1pYSW9ZV04wYjNJc0lHWnlZVzFsVTNSaGJYQXNJR1ZzWVhCelpXUXBJSHRjYmlBZ0lDQWdJQ0FnWm05eUlDaHNaWFFnYVNBOUlEQTdJR2tnUENCMGFHbHpMbTUxYlZaaGJIVmxTMlY1Y3pzZ2FTc3JLU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQmpiMjV6ZENCclpYa2dQU0IwYUdsekxuWmhiSFZsUzJWNWMxdHBYVHRjYmlBZ0lDQWdJQ0FnSUNBZ0lHTnZibk4wSUhaaGJIVmxJRDBnZEdocGN5NTJZV3gxWlhOYmEyVjVYVHRjYmx4dUlDQWdJQ0FnSUNBZ0lDQWdhV1lnS0haaGJIVmxMbVJ5YVhabGNpa2dlMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJSFpoYkhWbExtTjFjbkpsYm5RZ1BTQjBhR2x6TG1GamRHbDJaVUZqZEdsdmJuTmJkbUZzZFdVdVpISnBkbVZ5WFM1MllXeDFaWE5iYTJWNVhTNWpkWEp5Wlc1ME8xeHVJQ0FnSUNBZ0lDQWdJQ0FnZlZ4dUlDQWdJQ0FnSUNCOVhHNWNiaUFnSUNBZ0lDQWdjbVYwZFhKdUlITjFjR1Z5TG5kcGJHeFNaVzVrWlhJb1lXTjBiM0lzSUdaeVlXMWxVM1JoYlhBc0lHVnNZWEJ6WldRcE8xeHVJQ0FnSUgxY2JseHVJQ0FnSUM4cVhHNGdJQ0FnSUNBZ0lFRmtaQ0JoWTNScGRtVWdZV04wYVc5dWMxeHVYRzRnSUNBZ0lDQWdJRUJ3WVhKaGJTQmJiblZ0WW1WeVhWeHVJQ0FnSUNBZ0lDQkFjR0Z5WVcwZ1cwRmpkR2x2YmwxY2JpQWdJQ0FxTDF4dUlDQWdJR0ZqZEdsMllYUmxRV04wYVc5dUtHbGtMQ0JoWTNScGIyNHBJSHRjYmlBZ0lDQWdJQ0FnZEdocGN5NWhZM1JwZG1WQlkzUnBiMjV6VzJsa1hTQTlJR0ZqZEdsdmJqdGNiaUFnSUNBZ0lDQWdkR2hwY3k1dWRXMUJZM1JwZG1WQlkzUnBiMjV6S3lzN1hHNWNiaUFnSUNBZ0lDQWdabTl5SUNoc1pYUWdhU0E5SURBN0lHa2dQQ0JoWTNScGIyNHViblZ0Vm1Gc2RXVkxaWGx6T3lCcEt5c3BJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lHTnZibk4wSUd0bGVTQTlJR0ZqZEdsdmJpNTJZV3gxWlV0bGVYTmJhVjA3WEc0Z0lDQWdJQ0FnSUNBZ0lDQmpiMjV6ZENCMllXeDFaU0E5SUhSb2FYTXVkbUZzZFdWelcydGxlVjA3WEc1Y2JpQWdJQ0FnSUNBZ0lDQWdJSFpoYkhWbExtUnlhWFpsY2lBOUlHbGtPMXh1SUNBZ0lDQWdJQ0I5WEc1Y2JpQWdJQ0FnSUNBZ2FXWWdLSFJvYVhNdWJuVnRRV04wYVhabFFXTjBhVzl1Y3lrZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnYzNWd1pYSXVjM1JoY25Rb0tUdGNiaUFnSUNBZ0lDQWdmVnh1SUNBZ0lIMWNibHh1SUNBZ0lDOHFYRzRnSUNBZ0lDQWdJRkpsYlc5MlpTQmhZM1JwZG1VZ1lXTjBhVzl1YzF4dVhHNGdJQ0FnSUNBZ0lFQndZWEpoYlNCYmJuVnRZbVZ5WFZ4dUlDQWdJQ292WEc0Z0lDQWdaR1ZoWTNScGRtRjBaVUZqZEdsdmJpaHBaQ2tnZTF4dUlDQWdJQ0FnSUNCamIyNXpkQ0JoWTNScGIyNGdQU0IwYUdsekxtRmpkR2wyWlVGamRHbHZibk5iYVdSZE8xeHVYRzRnSUNBZ0lDQWdJR1p2Y2lBb2JHVjBJR2tnUFNBd095QnBJRHdnWVdOMGFXOXVMbTUxYlZaaGJIVmxTMlY1Y3pzZ2FTc3JLU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQmpiMjV6ZENCclpYa2dQU0JoWTNScGIyNHVkbUZzZFdWTFpYbHpXMmxkTzF4dUlDQWdJQ0FnSUNBZ0lDQWdZMjl1YzNRZ2RtRnNkV1VnUFNCMGFHbHpMblpoYkhWbGMxdHJaWGxkTzF4dVhHNGdJQ0FnSUNBZ0lDQWdJQ0IyWVd4MVpTNWtjbWwyWlhJZ1BTQjFibVJsWm1sdVpXUTdYRzRnSUNBZ0lDQWdJSDFjYmx4dUlDQWdJQ0FnSUNCa1pXeGxkR1VnZEdocGN5NWhZM1JwZG1WQlkzUnBiMjV6VzJsa1hUdGNiaUFnSUNBZ0lDQWdkR2hwY3k1dWRXMUJZM1JwZG1WQlkzUnBiMjV6TFMwN1hHNWNiaUFnSUNBZ0lDQWdhV1lnS0NGMGFHbHpMbTUxYlVGamRHbDJaVUZqZEdsdmJuTWdKaVlnZEdocGN5NXBjMEZqZEdsMlpTa2dlMXh1SUNBZ0lDQWdJQ0FnSUNBZ2MzVndaWEl1YzNSdmNDZ3BPMXh1SUNBZ0lDQWdJQ0I5WEc0Z0lDQWdmVnh1ZlNKZGZRPT1cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2FjdG9yL0FjdG9yLmpzXG4gKiogbW9kdWxlIGlkID0gM1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9O1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX0FjdGlvbjIgPSByZXF1aXJlKCcuL0FjdGlvbicpO1xuXG52YXIgX0FjdGlvbjMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9BY3Rpb24yKTtcblxudmFyIF9wcmVzZXRFYXNpbmcgPSByZXF1aXJlKCcuL2Vhc2luZy9wcmVzZXQtZWFzaW5nJyk7XG5cbnZhciBfcHJlc2V0RWFzaW5nMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3ByZXNldEVhc2luZyk7XG5cbnZhciBfdXRpbHMgPSByZXF1aXJlKCcuLi9pbmMvdXRpbHMnKTtcblxudmFyIF9jYWxjID0gcmVxdWlyZSgnLi4vaW5jL2NhbGMnKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoIXNlbGYpIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBjYWxsICYmICh0eXBlb2YgY2FsbCA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSA/IGNhbGwgOiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90IFwiICsgdHlwZW9mIHN1cGVyQ2xhc3MpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIGVudW1lcmFibGU6IGZhbHNlLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIDogc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzczsgfVxuXG52YXIgQ09VTlQgPSAnQ291bnQnO1xudmFyIE5FWFRfU1RFUFMgPSB7XG4gICAgbG9vcDogJ3Jlc3RhcnQnLFxuICAgIHlveW86ICdyZXZlcnNlJyxcbiAgICBmbGlwOiAnZmxpcFZhbHVlcydcbn07XG5cbi8qXG4gICAgRWFzZSB2YWx1ZSB3aXRoaW4gcmFuZ2VkIHBhcmFtZXRlcnNcbiAgICBcbiAgICBAcGFyYW0gW251bWJlcl06IFByb2dyZXNzIGJldHdlZW4gMCBhbmQgMVxuICAgIEBwYXJhbSBbbnVtYmVyXTogVmFsdWUgb2YgMCBwcm9ncmVzc1xuICAgIEBwYXJhbSBbbnVtYmVyXTogVmFsdWUgb2YgMSBwcm9ncmVzc1xuICAgIEBwYXJhbSBbc3RyaW5nIHx8IGZ1bmN0aW9uXTogTmFtZSBvZiBwcmVzZXQgZWFzaW5nXG4gICAgICAgIHRvIHVzZSBvciBnZW5lcmF0ZWQgZWFzaW5nIGZ1bmN0aW9uXG4gICAgQHJldHVybiBbbnVtYmVyXTogVmFsdWUgb2YgZWFzZWQgcHJvZ3Jlc3MgaW4gcmFuZ2VcbiovXG52YXIgZWFzZSA9IGZ1bmN0aW9uIChwcm9ncmVzcywgZnJvbSwgdG8sIGVhc2UpIHtcbiAgICB2YXIgcHJvZ3Jlc3NMaW1pdGVkID0gKDAsIF9jYWxjLnJlc3RyaWN0KShwcm9ncmVzcywgMCwgMSk7XG4gICAgdmFyIGVhc2VkUHJvZ3Jlc3MgPSBlYXNlKHByb2dyZXNzTGltaXRlZCk7XG5cbiAgICByZXR1cm4gKDAsIF9jYWxjLmdldFZhbHVlRnJvbVByb2dyZXNzKShlYXNlZFByb2dyZXNzLCBmcm9tLCB0byk7XG59O1xuXG52YXIgVHdlZW4gPSAoZnVuY3Rpb24gKF9BY3Rpb24pIHtcbiAgICBfaW5oZXJpdHMoVHdlZW4sIF9BY3Rpb24pO1xuXG4gICAgZnVuY3Rpb24gVHdlZW4oKSB7XG4gICAgICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBUd2Vlbik7XG5cbiAgICAgICAgcmV0dXJuIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIF9BY3Rpb24uYXBwbHkodGhpcywgYXJndW1lbnRzKSk7XG4gICAgfVxuXG4gICAgVHdlZW4ucHJvdG90eXBlLnN0YXJ0ID0gZnVuY3Rpb24gc3RhcnQoKSB7XG4gICAgICAgIF9BY3Rpb24ucHJvdG90eXBlLnN0YXJ0LmNhbGwodGhpcyk7XG4gICAgICAgIHRoaXMuZWxhcHNlZCA9IDA7XG4gICAgICAgIHRoaXMuZmxpcENvdW50ID0gdGhpcy55b3lvQ291bnQgPSB0aGlzLmxvb3BDb3VudCA9IDA7XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfTtcblxuICAgIFR3ZWVuLnByb3RvdHlwZS5vblVwZGF0ZSA9IGZ1bmN0aW9uIG9uVXBkYXRlKHR3ZWVuLCBmcmFtZVN0YW1wLCBlbGFwc2VkKSB7XG4gICAgICAgIHZhciBwcm9ncmVzc1RhcmdldCA9IHRoaXMucGxheURpcmVjdGlvbiA9PT0gMSA/IDEgOiAwO1xuXG4gICAgICAgIHRoaXMuZW5kZWQgPSB0cnVlO1xuICAgICAgICB0aGlzLmVsYXBzZWQgKz0gZWxhcHNlZCAqIHRoaXMuZGlsYXRlICogdGhpcy5wbGF5RGlyZWN0aW9uO1xuXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5udW1WYWx1ZUtleXM7IGkrKykge1xuICAgICAgICAgICAgdmFyIGtleSA9IHRoaXMudmFsdWVLZXlzW2ldO1xuICAgICAgICAgICAgdmFyIHZhbHVlID0gdGhpcy52YWx1ZXNba2V5XTtcblxuICAgICAgICAgICAgdmFyIHByb2dyZXNzID0gKDAsIF9jYWxjLnJlc3RyaWN0KSgoMCwgX2NhbGMuZ2V0UHJvZ3Jlc3NGcm9tVmFsdWUpKHRoaXMuZWxhcHNlZCAtIHZhbHVlLmRlbGF5LCAwLCB2YWx1ZS5kdXJhdGlvbiksIDAsIDEpO1xuXG4gICAgICAgICAgICAvLyBNYXJrIFR3ZWVuIGFzIE5PVCBlbmRlZCBpZiBzdGlsbCBpbiBwcm9ncmVzc1xuICAgICAgICAgICAgaWYgKHByb2dyZXNzICE9PSBwcm9ncmVzc1RhcmdldCkge1xuICAgICAgICAgICAgICAgIHRoaXMuZW5kZWQgPSBmYWxzZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gU3RlcCBwcm9ncmVzcyBpZiB3ZSdyZSBzdGVwcGluZ1xuICAgICAgICAgICAgaWYgKHZhbHVlLnN0ZXBzKSB7XG4gICAgICAgICAgICAgICAgcHJvZ3Jlc3MgPSAoMCwgX2NhbGMuc3RlcFByb2dyZXNzKShwcm9ncmVzcywgdmFsdWUuc3RlcHMpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBFYXNlIHByb2dyZXNzXG4gICAgICAgICAgICB2YWx1ZS5jdXJyZW50ID0gZWFzZShwcm9ncmVzcywgdmFsdWUuZnJvbSwgdmFsdWUudG8sIHZhbHVlLmVhc2UpO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIFR3ZWVuLnByb3RvdHlwZS5vbkZyYW1lRW5kID0gZnVuY3Rpb24gb25GcmFtZUVuZCgpIHtcbiAgICAgICAgaWYgKHRoaXMuZW5kZWQpIHtcbiAgICAgICAgICAgIHZhciBzdGVwVGFrZW4gPSBmYWxzZTtcblxuICAgICAgICAgICAgZm9yICh2YXIga2V5IGluIE5FWFRfU1RFUFMpIHtcbiAgICAgICAgICAgICAgICBpZiAoTkVYVF9TVEVQUy5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBtYXhTdGVwcyA9IHRoaXNba2V5XTtcblxuICAgICAgICAgICAgICAgICAgICBpZiAobWF4U3RlcHMgPT09IHRydWUgfHwgKDAsIF91dGlscy5pc051bSkobWF4U3RlcHMpICYmIG1heFN0ZXBzID4gdGhpc1trZXkgKyBDT1VOVF0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXNba2V5ICsgQ09VTlRdKys7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdGVwVGFrZW4gPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpc1tORVhUX1NURVBTW2tleV1dKCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICghc3RlcFRha2VuKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zdG9wKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgVHdlZW4ucHJvdG90eXBlLmZsaXBWYWx1ZXMgPSBmdW5jdGlvbiBmbGlwVmFsdWVzKCkge1xuICAgICAgICB2YXIgdmFsdWVzID0gdGhpcy52YWx1ZXM7XG5cbiAgICAgICAgdGhpcy5lbGFwc2VkID0gdGhpcy5kdXJhdGlvbiAtIHRoaXMuZWxhcHNlZDtcblxuICAgICAgICBmb3IgKHZhciBrZXkgaW4gdmFsdWVzKSB7XG4gICAgICAgICAgICBpZiAodmFsdWVzLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICAgICAgICB2YXIgdmFsdWUgPSB2YWx1ZXNba2V5XTtcbiAgICAgICAgICAgICAgICB2YXIgX3JlZiA9IFt2YWx1ZS5mcm9tLCB2YWx1ZS50b107XG4gICAgICAgICAgICAgICAgdmFsdWUudG8gPSBfcmVmWzBdO1xuICAgICAgICAgICAgICAgIHZhbHVlLmZyb20gPSBfcmVmWzFdO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfTtcblxuICAgIFR3ZWVuLnByb3RvdHlwZS5yZXZlcnNlID0gZnVuY3Rpb24gcmV2ZXJzZSgpIHtcbiAgICAgICAgdGhpcy5wbGF5RGlyZWN0aW9uICo9IC0xO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xuXG4gICAgVHdlZW4ucHJvdG90eXBlLnJlc3RhcnQgPSBmdW5jdGlvbiByZXN0YXJ0KCkge1xuICAgICAgICB0aGlzLmVsYXBzZWQgPSB0aGlzLnBsYXlEaXJlY3Rpb24gPT09IDEgPyAwIDogdGhpcy5kdXJhdGlvbjtcbiAgICAgICAgdGhpcy5zdGFydGVkID0gKDAsIF91dGlscy5jdXJyZW50VGltZSkoKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfTtcblxuICAgIFR3ZWVuLnByb3RvdHlwZS5zZWVrID0gZnVuY3Rpb24gc2Vlayhwcm9ncmVzcykge1xuICAgICAgICB0aGlzLnNlZWtUaW1lKHRoaXMuZHVyYXRpb24gKiBwcm9ncmVzcyk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH07XG5cbiAgICBUd2Vlbi5wcm90b3R5cGUuc2Vla1RpbWUgPSBmdW5jdGlvbiBzZWVrVGltZShlbGFwc2VkKSB7XG4gICAgICAgIHRoaXMub25jZSgpO1xuICAgICAgICB0aGlzLmVsYXBzZWQgPSBlbGFwc2VkO1xuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH07XG5cbiAgICBUd2Vlbi5wcm90b3R5cGUuZ2V0RGVmYXVsdFByb3BzID0gZnVuY3Rpb24gZ2V0RGVmYXVsdFByb3BzKCkge1xuICAgICAgICByZXR1cm4gX2V4dGVuZHMoe30sIF9BY3Rpb24ucHJvdG90eXBlLmdldERlZmF1bHRQcm9wcy5jYWxsKHRoaXMpLCB7XG4gICAgICAgICAgICBkZWxheTogMCxcbiAgICAgICAgICAgIGRpbGF0ZTogMSxcbiAgICAgICAgICAgIGR1cmF0aW9uOiAzMDAsXG4gICAgICAgICAgICBsb29wOiBmYWxzZSxcbiAgICAgICAgICAgIHlveW86IGZhbHNlLFxuICAgICAgICAgICAgZmxpcDogZmFsc2UsXG4gICAgICAgICAgICBwbGF5RGlyZWN0aW9uOiAxLFxuICAgICAgICAgICAgZW5kZWQ6IGZhbHNlLFxuICAgICAgICAgICAgZWxhcHNlZDogMFxuICAgICAgICB9KTtcbiAgICB9O1xuXG4gICAgVHdlZW4ucHJvdG90eXBlLmdldERlZmF1bHRWYWx1ZSA9IGZ1bmN0aW9uIGdldERlZmF1bHRWYWx1ZSgpIHtcbiAgICAgICAgcmV0dXJuIF9leHRlbmRzKHt9LCBfQWN0aW9uLnByb3RvdHlwZS5nZXREZWZhdWx0VmFsdWUuY2FsbCh0aGlzKSwge1xuICAgICAgICAgICAgZGVsYXk6IDAsXG4gICAgICAgICAgICBkdXJhdGlvbjogMzAwLFxuICAgICAgICAgICAgZWFzZTogX3ByZXNldEVhc2luZzIuZGVmYXVsdC5lYXNlT3V0LFxuICAgICAgICAgICAgZWxhcHNlZDogMCxcbiAgICAgICAgICAgIHN0YWdnZXI6IDAsXG4gICAgICAgICAgICBzdGVwczogMCxcbiAgICAgICAgICAgIGZyb206IDAsXG4gICAgICAgICAgICB0bzogMCxcbiAgICAgICAgICAgIHJvdW5kOiBmYWxzZVxuICAgICAgICB9KTtcbiAgICB9O1xuXG4gICAgVHdlZW4ucHJvdG90eXBlLmdldERlZmF1bHRWYWx1ZVByb3AgPSBmdW5jdGlvbiBnZXREZWZhdWx0VmFsdWVQcm9wKCkge1xuICAgICAgICByZXR1cm4gJ3RvJztcbiAgICB9O1xuXG4gICAgcmV0dXJuIFR3ZWVuO1xufSkoX0FjdGlvbjMuZGVmYXVsdCk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IFR3ZWVuO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluTnlZeTloWTNScGIyNXpMMVIzWldWdUxtcHpJbDBzSW01aGJXVnpJanBiWFN3aWJXRndjR2x1WjNNaU9pSTdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN08wRkJWVUVzU1VGQlRTeExRVUZMTEVkQlFVY3NUMEZCVHl4RFFVRkRPMEZCUTNSQ0xFbEJRVTBzVlVGQlZTeEhRVUZITzBGQlEyWXNVVUZCU1N4RlFVRkZMRk5CUVZNN1FVRkRaaXhSUVVGSkxFVkJRVVVzVTBGQlV6dEJRVU5tTEZGQlFVa3NSVUZCUlN4WlFVRlpPME5CUTNKQ096czdPenM3T3pzN096czdRVUZCUXl4QlFWbEdMRWxCUVUwc1NVRkJTU3hIUVVGSExGVkJRVU1zVVVGQlVTeEZRVUZGTEVsQlFVa3NSVUZCUlN4RlFVRkZMRVZCUVVVc1NVRkJTU3hGUVVGTE8wRkJRM1pETEZGQlFVMHNaVUZCWlN4SFFVRkhMRlZCZUVKNFFpeFJRVUZSTEVWQmQwSjVRaXhSUVVGUkxFVkJRVVVzUTBGQlF5eEZRVUZGTEVOQlFVTXNRMEZCUXl4RFFVRkRPMEZCUTJwRUxGRkJRVTBzWVVGQllTeEhRVUZITEVsQlFVa3NRMEZCUXl4bFFVRmxMRU5CUVVNc1EwRkJRenM3UVVGRk5VTXNWMEZCVHl4VlFYcENVQ3h2UWtGQmIwSXNSVUY1UWxFc1lVRkJZU3hGUVVGRkxFbEJRVWtzUlVGQlJTeEZRVUZGTEVOQlFVTXNRMEZCUXp0RFFVTjRSQ3hEUVVGRE96dEpRVVZ0UWl4TFFVRkxPMk5CUVV3c1MwRkJTenM3WVVGQlRDeExRVUZMT3poQ1FVRk1MRXRCUVVzN096czdPMEZCUVV3c1UwRkJTeXhYUVVOMFFpeExRVUZMTEc5Q1FVRkhPMEZCUTBvc01FSkJRVTBzUzBGQlN5eExRVUZCTEUxQlFVVXNRMEZCUXp0QlFVTmtMRmxCUVVrc1EwRkJReXhQUVVGUExFZEJRVWNzUTBGQlF5eERRVUZETzBGQlEycENMRmxCUVVrc1EwRkJReXhUUVVGVExFZEJRVWNzU1VGQlNTeERRVUZETEZOQlFWTXNSMEZCUnl4SlFVRkpMRU5CUVVNc1UwRkJVeXhIUVVGSExFTkJRVU1zUTBGQlF6czdRVUZGY2tRc1pVRkJUeXhKUVVGSkxFTkJRVU03UzBGRFpqczdRVUZRWjBJc1UwRkJTeXhYUVZOMFFpeFJRVUZSTEhGQ1FVRkRMRXRCUVVzc1JVRkJSU3hWUVVGVkxFVkJRVVVzVDBGQlR5eEZRVUZGTzBGQlEycERMRmxCUVUwc1kwRkJZeXhIUVVGSExFRkJRVU1zU1VGQlNTeERRVUZETEdGQlFXRXNTMEZCU3l4RFFVRkRMRWRCUVVrc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF6czdRVUZGTVVRc1dVRkJTU3hEUVVGRExFdEJRVXNzUjBGQlJ5eEpRVUZKTEVOQlFVTTdRVUZEYkVJc1dVRkJTU3hEUVVGRExFOUJRVThzU1VGQlNTeEJRVUZETEU5QlFVOHNSMEZCUnl4SlFVRkpMRU5CUVVNc1RVRkJUU3hIUVVGSkxFbEJRVWtzUTBGQlF5eGhRVUZoTEVOQlFVTTdPMEZCUlRkRUxHRkJRVXNzU1VGQlNTeERRVUZETEVkQlFVY3NRMEZCUXl4RlFVRkZMRU5CUVVNc1IwRkJSeXhKUVVGSkxFTkJRVU1zV1VGQldTeEZRVUZGTEVOQlFVTXNSVUZCUlN4RlFVRkZPMEZCUTNoRExHZENRVUZOTEVkQlFVY3NSMEZCUnl4SlFVRkpMRU5CUVVNc1UwRkJVeXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETzBGQlF6bENMR2RDUVVGTkxFdEJRVXNzUjBGQlJ5eEpRVUZKTEVOQlFVTXNUVUZCVFN4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRE96dEJRVVV2UWl4blFrRkJTU3hSUVVGUkxFZEJRVWNzVlVGcVJIWkNMRkZCUVZFc1JVRnBSSGRDTEZWQmFFUm9ReXh2UWtGQmIwSXNSVUZuUkdsRExFbEJRVWtzUTBGQlF5eFBRVUZQTEVkQlFVY3NTMEZCU3l4RFFVRkRMRXRCUVVzc1JVRkJSU3hEUVVGRExFVkJRVVVzUzBGQlN5eERRVUZETEZGQlFWRXNRMEZCUXl4RlFVRkZMRU5CUVVNc1JVRkJSU3hEUVVGRExFTkJRVU03T3p0QlFVRkRMRUZCUjI1SExHZENRVUZKTEZGQlFWRXNTMEZCU3l4alFVRmpMRVZCUVVVN1FVRkROMElzYjBKQlFVa3NRMEZCUXl4TFFVRkxMRWRCUVVjc1MwRkJTeXhEUVVGRE8yRkJRM1JDT3pzN1FVRkJRU3hCUVVkRUxHZENRVUZKTEV0QlFVc3NRMEZCUXl4TFFVRkxMRVZCUVVVN1FVRkRZaXgzUWtGQlVTeEhRVUZITEZWQmRrUjJRaXhaUVVGWkxFVkJkVVIzUWl4UlFVRlJMRVZCUVVVc1MwRkJTeXhEUVVGRExFdEJRVXNzUTBGQlF5eERRVUZETzJGQlEyeEVPenM3UVVGQlFTeEJRVWRFTEdsQ1FVRkxMRU5CUVVNc1QwRkJUeXhIUVVGSExFbEJRVWtzUTBGQlF5eFJRVUZSTEVWQlFVVXNTMEZCU3l4RFFVRkRMRWxCUVVrc1JVRkJSU3hMUVVGTExFTkJRVU1zUlVGQlJTeEZRVUZGTEV0QlFVc3NRMEZCUXl4SlFVRkpMRU5CUVVNc1EwRkJRenRUUVVOd1JUdExRVU5LT3p0QlFXeERaMElzVTBGQlN5eFhRVzlEZEVJc1ZVRkJWU3g1UWtGQlJ6dEJRVU5VTEZsQlFVa3NTVUZCU1N4RFFVRkRMRXRCUVVzc1JVRkJSVHRCUVVOYUxHZENRVUZKTEZOQlFWTXNSMEZCUnl4TFFVRkxMRU5CUVVNN08wRkJSWFJDTEdsQ1FVRkxMRWxCUVVrc1IwRkJSeXhKUVVGSkxGVkJRVlVzUlVGQlJUdEJRVU40UWl4dlFrRkJTU3hWUVVGVkxFTkJRVU1zWTBGQll5eERRVUZETEVkQlFVY3NRMEZCUXl4RlFVRkZPMEZCUTJoRExIZENRVUZOTEZGQlFWRXNSMEZCUnl4SlFVRkpMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU03TzBGQlJUTkNMSGRDUVVGSkxGRkJRVkVzUzBGQlN5eEpRVUZKTEVsQlFVc3NWMEUxUlhoQ0xFdEJRVXNzUlVFMFJYbENMRkZCUVZFc1EwRkJReXhKUVVGSkxGRkJRVkVzUjBGQlJ5eEpRVUZKTEVOQlFVTXNSMEZCUnl4SFFVRkhMRXRCUVVzc1EwRkJReXhCUVVGRExFVkJRVVU3UVVGRGVFVXNORUpCUVVrc1EwRkJReXhIUVVGSExFZEJRVWNzUzBGQlN5eERRVUZETEVWQlFVVXNRMEZCUXp0QlFVTndRaXhwUTBGQlV5eEhRVUZITEVsQlFVa3NRMEZCUXp0QlFVTnFRaXcwUWtGQlNTeERRVUZETEZWQlFWVXNRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJReXhGUVVGRkxFTkJRVU03Y1VKQlF6TkNPMmxDUVVOS08yRkJRMG83TzBGQlJVUXNaMEpCUVVrc1EwRkJReXhUUVVGVExFVkJRVVU3UVVGRFdpeHZRa0ZCU1N4RFFVRkRMRWxCUVVrc1JVRkJSU3hEUVVGRE8yRkJRMlk3VTBGRFNqdExRVU5LT3p0QlFYaEVaMElzVTBGQlN5eFhRVEJFZEVJc1ZVRkJWU3g1UWtGQlJ6dEJRVU5VTEZsQlFVMHNUVUZCVFN4SFFVRkhMRWxCUVVrc1EwRkJReXhOUVVGTkxFTkJRVU03TzBGQlJUTkNMRmxCUVVrc1EwRkJReXhQUVVGUExFZEJRVWNzU1VGQlNTeERRVUZETEZGQlFWRXNSMEZCUnl4SlFVRkpMRU5CUVVNc1QwRkJUeXhEUVVGRE96dEJRVVUxUXl4aFFVRkxMRWxCUVVrc1IwRkJSeXhKUVVGSkxFMUJRVTBzUlVGQlJUdEJRVU53UWl4blFrRkJTU3hOUVVGTkxFTkJRVU1zWTBGQll5eERRVUZETEVkQlFVY3NRMEZCUXl4RlFVRkZPMEZCUXpWQ0xHOUNRVUZOTEV0QlFVc3NSMEZCUnl4TlFVRk5MRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU03TWtKQlEwUXNRMEZCUXl4TFFVRkxMRU5CUVVNc1NVRkJTU3hGUVVGRkxFdEJRVXNzUTBGQlF5eEZRVUZGTEVOQlFVTTdRVUZCT1VNc2NVSkJRVXNzUTBGQlF5eEZRVUZGTzBGQlFVVXNjVUpCUVVzc1EwRkJReXhKUVVGSk8yRkJRM2hDTzFOQlEwbzdPMEZCUlVRc1pVRkJUeXhKUVVGSkxFTkJRVU03UzBGRFpqczdRVUYyUldkQ0xGTkJRVXNzVjBGNVJYUkNMRTlCUVU4c2MwSkJRVWM3UVVGRFRpeFpRVUZKTEVOQlFVTXNZVUZCWVN4SlFVRkpMRU5CUVVNc1EwRkJReXhEUVVGRE8wRkJRM3BDTEdWQlFVOHNTVUZCU1N4RFFVRkRPMHRCUTJZN08wRkJOVVZuUWl4VFFVRkxMRmRCT0VWMFFpeFBRVUZQTEhOQ1FVRkhPMEZCUTA0c1dVRkJTU3hEUVVGRExFOUJRVThzUjBGQlJ5eEJRVUZETEVsQlFVa3NRMEZCUXl4aFFVRmhMRXRCUVVzc1EwRkJReXhIUVVGSkxFTkJRVU1zUjBGQlJ5eEpRVUZKTEVOQlFVTXNVVUZCVVN4RFFVRkRPMEZCUXpsRUxGbEJRVWtzUTBGQlF5eFBRVUZQTEVkQlFVY3NWMEZvU0dRc1YwRkJWeXhIUVdkSVowSXNRMEZCUXp0QlFVTTNRaXhsUVVGUExFbEJRVWtzUTBGQlF6dExRVU5tT3p0QlFXeEdaMElzVTBGQlN5eFhRVzlHZEVJc1NVRkJTU3hwUWtGQlF5eFJRVUZSTEVWQlFVVTdRVUZEV0N4WlFVRkpMRU5CUVVNc1VVRkJVU3hEUVVGRExFbEJRVWtzUTBGQlF5eFJRVUZSTEVkQlFVY3NVVUZCVVN4RFFVRkRMRU5CUVVNN1FVRkRlRU1zWlVGQlR5eEpRVUZKTEVOQlFVTTdTMEZEWmpzN1FVRjJSbWRDTEZOQlFVc3NWMEY1Um5SQ0xGRkJRVkVzY1VKQlFVTXNUMEZCVHl4RlFVRkZPMEZCUTJRc1dVRkJTU3hEUVVGRExFbEJRVWtzUlVGQlJTeERRVUZETzBGQlExb3NXVUZCU1N4RFFVRkRMRTlCUVU4c1IwRkJSeXhQUVVGUExFTkJRVU03TzBGQlJYWkNMR1ZCUVU4c1NVRkJTU3hEUVVGRE8wdEJRMlk3TzBGQk9VWm5RaXhUUVVGTExGZEJaMGQwUWl4bFFVRmxMRGhDUVVGSE8wRkJRMlFzTkVKQlEwOHNhMEpCUVUwc1pVRkJaU3hMUVVGQkxFMUJRVVU3UVVGRE1VSXNhVUpCUVVzc1JVRkJSU3hEUVVGRE8wRkJRMUlzYTBKQlFVMHNSVUZCUlN4RFFVRkRPMEZCUTFRc2IwSkJRVkVzUlVGQlJTeEhRVUZITzBGQlEySXNaMEpCUVVrc1JVRkJSU3hMUVVGTE8wRkJRMWdzWjBKQlFVa3NSVUZCUlN4TFFVRkxPMEZCUTFnc1owSkJRVWtzUlVGQlJTeExRVUZMTzBGQlExZ3NlVUpCUVdFc1JVRkJSU3hEUVVGRE8wRkJRMmhDTEdsQ1FVRkxMRVZCUVVVc1MwRkJTenRCUVVOYUxHMUNRVUZQTEVWQlFVVXNRMEZCUXp0WFFVTmFPMHRCUTB3N08wRkJOMGRuUWl4VFFVRkxMRmRCSzBkMFFpeGxRVUZsTERoQ1FVRkhPMEZCUTJRc05FSkJRMDhzYTBKQlFVMHNaVUZCWlN4TFFVRkJMRTFCUVVVN1FVRkRNVUlzYVVKQlFVc3NSVUZCUlN4RFFVRkRPMEZCUTFJc2IwSkJRVkVzUlVGQlJTeEhRVUZITzBGQlEySXNaMEpCUVVrc1JVRkJSU3gxUWtGQlR5eFBRVUZQTzBGQlEzQkNMRzFDUVVGUExFVkJRVVVzUTBGQlF6dEJRVU5XTEcxQ1FVRlBMRVZCUVVVc1EwRkJRenRCUVVOV0xHbENRVUZMTEVWQlFVVXNRMEZCUXp0QlFVTlNMR2RDUVVGSkxFVkJRVVVzUTBGQlF6dEJRVU5RTEdOQlFVVXNSVUZCUlN4RFFVRkRPMEZCUTB3c2FVSkJRVXNzUlVGQlJTeExRVUZMTzFkQlEyUTdTMEZEVERzN1FVRTFTR2RDTEZOQlFVc3NWMEU0U0hSQ0xHMUNRVUZ0UWl4clEwRkJSenRCUVVOc1FpeGxRVUZQTEVsQlFVa3NRMEZCUXp0TFFVTm1PenRYUVdoSlowSXNTMEZCU3pzN08ydENRVUZNTEV0QlFVc2lMQ0ptYVd4bElqb2lWSGRsWlc0dWFuTWlMQ0p6YjNWeVkyVlNiMjkwSWpvaUwxVnpaWEp6TDAxaGRIUlFaWEp5ZVM5VGFYUmxjeTl3YjNCdGIzUnBiMjRpTENKemIzVnlZMlZ6UTI5dWRHVnVkQ0k2V3lKcGJYQnZjblFnUVdOMGFXOXVJR1p5YjIwZ0p5NHZRV04wYVc5dUp6dGNibWx0Y0c5eWRDQmxZWE5wYm1jZ1puSnZiU0FuTGk5bFlYTnBibWN2Y0hKbGMyVjBMV1ZoYzJsdVp5YzdYRzVwYlhCdmNuUWdleUJqZFhKeVpXNTBWR2x0WlN3Z2FYTk9kVzBnZlNCbWNtOXRJQ2N1TGk5cGJtTXZkWFJwYkhNbk8xeHVhVzF3YjNKMElIdGNiaUFnSUNCeVpYTjBjbWxqZEN4Y2JpQWdJQ0JuWlhSUWNtOW5jbVZ6YzBaeWIyMVdZV3gxWlN4Y2JpQWdJQ0JuWlhSV1lXeDFaVVp5YjIxUWNtOW5jbVZ6Y3l4Y2JpQWdJQ0J6ZEdWd1VISnZaM0psYzNOY2JuMGdabkp2YlNBbkxpNHZhVzVqTDJOaGJHTW5PMXh1WEc1amIyNXpkQ0JEVDFWT1ZDQTlJQ2REYjNWdWRDYzdYRzVqYjI1emRDQk9SVmhVWDFOVVJWQlRJRDBnZTF4dUlDQWdJR3h2YjNBNklDZHlaWE4wWVhKMEp5eGNiaUFnSUNCNWIzbHZPaUFuY21WMlpYSnpaU2NzWEc0Z0lDQWdabXhwY0RvZ0oyWnNhWEJXWVd4MVpYTW5YRzU5TzF4dVhHNHZLbHh1SUNBZ0lFVmhjMlVnZG1Gc2RXVWdkMmwwYUdsdUlISmhibWRsWkNCd1lYSmhiV1YwWlhKelhHNGdJQ0FnWEc0Z0lDQWdRSEJoY21GdElGdHVkVzFpWlhKZE9pQlFjbTluY21WemN5QmlaWFIzWldWdUlEQWdZVzVrSURGY2JpQWdJQ0JBY0dGeVlXMGdXMjUxYldKbGNsMDZJRlpoYkhWbElHOW1JREFnY0hKdlozSmxjM05jYmlBZ0lDQkFjR0Z5WVcwZ1cyNTFiV0psY2wwNklGWmhiSFZsSUc5bUlERWdjSEp2WjNKbGMzTmNiaUFnSUNCQWNHRnlZVzBnVzNOMGNtbHVaeUI4ZkNCbWRXNWpkR2x2YmwwNklFNWhiV1VnYjJZZ2NISmxjMlYwSUdWaGMybHVaMXh1SUNBZ0lDQWdJQ0IwYnlCMWMyVWdiM0lnWjJWdVpYSmhkR1ZrSUdWaGMybHVaeUJtZFc1amRHbHZibHh1SUNBZ0lFQnlaWFIxY200Z1cyNTFiV0psY2wwNklGWmhiSFZsSUc5bUlHVmhjMlZrSUhCeWIyZHlaWE56SUdsdUlISmhibWRsWEc0cUx5QmNibU52Ym5OMElHVmhjMlVnUFNBb2NISnZaM0psYzNNc0lHWnliMjBzSUhSdkxDQmxZWE5sS1NBOVBpQjdYRzRnSUNBZ1kyOXVjM1FnY0hKdlozSmxjM05NYVcxcGRHVmtJRDBnY21WemRISnBZM1FvY0hKdlozSmxjM01zSURBc0lERXBPMXh1SUNBZ0lHTnZibk4wSUdWaGMyVmtVSEp2WjNKbGMzTWdQU0JsWVhObEtIQnliMmR5WlhOelRHbHRhWFJsWkNrN1hHNWNiaUFnSUNCeVpYUjFjbTRnWjJWMFZtRnNkV1ZHY205dFVISnZaM0psYzNNb1pXRnpaV1JRY205bmNtVnpjeXdnWm5KdmJTd2dkRzhwTzF4dWZUdGNibHh1Wlhod2IzSjBJR1JsWm1GMWJIUWdZMnhoYzNNZ1ZIZGxaVzRnWlhoMFpXNWtjeUJCWTNScGIyNGdlMXh1SUNBZ0lITjBZWEowS0NrZ2UxeHVJQ0FnSUNBZ0lDQnpkWEJsY2k1emRHRnlkQ2dwTzF4dUlDQWdJQ0FnSUNCMGFHbHpMbVZzWVhCelpXUWdQU0F3TzF4dUlDQWdJQ0FnSUNCMGFHbHpMbVpzYVhCRGIzVnVkQ0E5SUhSb2FYTXVlVzk1YjBOdmRXNTBJRDBnZEdocGN5NXNiMjl3UTI5MWJuUWdQU0F3TzF4dVhHNGdJQ0FnSUNBZ0lISmxkSFZ5YmlCMGFHbHpPMXh1SUNBZ0lIMWNibHh1SUNBZ0lHOXVWWEJrWVhSbEtIUjNaV1Z1TENCbWNtRnRaVk4wWVcxd0xDQmxiR0Z3YzJWa0tTQjdYRzRnSUNBZ0lDQWdJR052Ym5OMElIQnliMmR5WlhOelZHRnlaMlYwSUQwZ0tIUm9hWE11Y0d4aGVVUnBjbVZqZEdsdmJpQTlQVDBnTVNrZ1B5QXhJRG9nTUR0Y2JseHVJQ0FnSUNBZ0lDQjBhR2x6TG1WdVpHVmtJRDBnZEhKMVpUdGNiaUFnSUNBZ0lDQWdkR2hwY3k1bGJHRndjMlZrSUNzOUlDaGxiR0Z3YzJWa0lDb2dkR2hwY3k1a2FXeGhkR1VwSUNvZ2RHaHBjeTV3YkdGNVJHbHlaV04wYVc5dU8xeHVYRzRnSUNBZ0lDQWdJR1p2Y2lBb2JHVjBJR2tnUFNBd095QnBJRHdnZEdocGN5NXVkVzFXWVd4MVpVdGxlWE03SUdrckt5a2dlMXh1SUNBZ0lDQWdJQ0FnSUNBZ1kyOXVjM1FnYTJWNUlEMGdkR2hwY3k1MllXeDFaVXRsZVhOYmFWMDdYRzRnSUNBZ0lDQWdJQ0FnSUNCamIyNXpkQ0IyWVd4MVpTQTlJSFJvYVhNdWRtRnNkV1Z6VzJ0bGVWMDdYRzVjYmlBZ0lDQWdJQ0FnSUNBZ0lHeGxkQ0J3Y205bmNtVnpjeUE5SUhKbGMzUnlhV04wS0dkbGRGQnliMmR5WlhOelJuSnZiVlpoYkhWbEtIUm9hWE11Wld4aGNITmxaQ0F0SUhaaGJIVmxMbVJsYkdGNUxDQXdMQ0IyWVd4MVpTNWtkWEpoZEdsdmJpa3NJREFzSURFcE8xeHVYRzRnSUNBZ0lDQWdJQ0FnSUNBdkx5Qk5ZWEpySUZSM1pXVnVJR0Z6SUU1UFZDQmxibVJsWkNCcFppQnpkR2xzYkNCcGJpQndjbTluY21WemMxeHVJQ0FnSUNBZ0lDQWdJQ0FnYVdZZ0tIQnliMmR5WlhOeklDRTlQU0J3Y205bmNtVnpjMVJoY21kbGRDa2dlMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJSFJvYVhNdVpXNWtaV1FnUFNCbVlXeHpaVHRjYmlBZ0lDQWdJQ0FnSUNBZ0lIMWNibHh1SUNBZ0lDQWdJQ0FnSUNBZ0x5OGdVM1JsY0NCd2NtOW5jbVZ6Y3lCcFppQjNaU2R5WlNCemRHVndjR2x1WjF4dUlDQWdJQ0FnSUNBZ0lDQWdhV1lnS0haaGJIVmxMbk4wWlhCektTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdjSEp2WjNKbGMzTWdQU0J6ZEdWd1VISnZaM0psYzNNb2NISnZaM0psYzNNc0lIWmhiSFZsTG5OMFpYQnpLVHRjYmlBZ0lDQWdJQ0FnSUNBZ0lIMWNibHh1SUNBZ0lDQWdJQ0FnSUNBZ0x5OGdSV0Z6WlNCd2NtOW5jbVZ6YzF4dUlDQWdJQ0FnSUNBZ0lDQWdkbUZzZFdVdVkzVnljbVZ1ZENBOUlHVmhjMlVvY0hKdlozSmxjM01zSUhaaGJIVmxMbVp5YjIwc0lIWmhiSFZsTG5SdkxDQjJZV3gxWlM1bFlYTmxLVHRjYmlBZ0lDQWdJQ0FnZlZ4dUlDQWdJSDFjYmx4dUlDQWdJRzl1Um5KaGJXVkZibVFvS1NCN1hHNGdJQ0FnSUNBZ0lHbG1JQ2gwYUdsekxtVnVaR1ZrS1NCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0JzWlhRZ2MzUmxjRlJoYTJWdUlEMGdabUZzYzJVN1hHNWNiaUFnSUNBZ0lDQWdJQ0FnSUdadmNpQW9iR1YwSUd0bGVTQnBiaUJPUlZoVVgxTlVSVkJUS1NCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2FXWWdLRTVGV0ZSZlUxUkZVRk11YUdGelQzZHVVSEp2Y0dWeWRIa29hMlY1S1NrZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0JqYjI1emRDQnRZWGhUZEdWd2N5QTlJSFJvYVhOYmEyVjVYVHRjYmx4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQnBaaUFvYldGNFUzUmxjSE1nUFQwOUlIUnlkV1VnZkh3Z0tHbHpUblZ0S0cxaGVGTjBaWEJ6S1NBbUppQnRZWGhUZEdWd2N5QStJSFJvYVhOYmEyVjVJQ3NnUTA5VlRsUmRLU2tnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnZEdocGMxdHJaWGtnS3lCRFQxVk9WRjByS3p0Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUhOMFpYQlVZV3RsYmlBOUlIUnlkV1U3WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0IwYUdselcwNUZXRlJmVTFSRlVGTmJhMlY1WFYwb0tUdGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnZlZ4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUgxY2JpQWdJQ0FnSUNBZ0lDQWdJSDFjYmx4dUlDQWdJQ0FnSUNBZ0lDQWdhV1lnS0NGemRHVndWR0ZyWlc0cElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQjBhR2x6TG5OMGIzQW9LVHRjYmlBZ0lDQWdJQ0FnSUNBZ0lIMWNiaUFnSUNBZ0lDQWdmVnh1SUNBZ0lIMWNibHh1SUNBZ0lHWnNhWEJXWVd4MVpYTW9LU0I3WEc0Z0lDQWdJQ0FnSUdOdmJuTjBJSFpoYkhWbGN5QTlJSFJvYVhNdWRtRnNkV1Z6TzF4dVhHNGdJQ0FnSUNBZ0lIUm9hWE11Wld4aGNITmxaQ0E5SUhSb2FYTXVaSFZ5WVhScGIyNGdMU0IwYUdsekxtVnNZWEJ6WldRN1hHNWNiaUFnSUNBZ0lDQWdabTl5SUNoc1pYUWdhMlY1SUdsdUlIWmhiSFZsY3lrZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnYVdZZ0tIWmhiSFZsY3k1b1lYTlBkMjVRY205d1pYSjBlU2hyWlhrcEtTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdZMjl1YzNRZ2RtRnNkV1VnUFNCMllXeDFaWE5iYTJWNVhUdGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQmJkbUZzZFdVdWRHOHNJSFpoYkhWbExtWnliMjFkSUQwZ1czWmhiSFZsTG1aeWIyMHNJSFpoYkhWbExuUnZYVHRjYmlBZ0lDQWdJQ0FnSUNBZ0lIMWNiaUFnSUNBZ0lDQWdmVnh1WEc0Z0lDQWdJQ0FnSUhKbGRIVnliaUIwYUdsek8xeHVJQ0FnSUgxY2JseHVJQ0FnSUhKbGRtVnljMlVvS1NCN1hHNGdJQ0FnSUNBZ0lIUm9hWE11Y0d4aGVVUnBjbVZqZEdsdmJpQXFQU0F0TVR0Y2JpQWdJQ0FnSUNBZ2NtVjBkWEp1SUhSb2FYTTdYRzRnSUNBZ2ZWeHVYRzRnSUNBZ2NtVnpkR0Z5ZENncElIdGNiaUFnSUNBZ0lDQWdkR2hwY3k1bGJHRndjMlZrSUQwZ0tIUm9hWE11Y0d4aGVVUnBjbVZqZEdsdmJpQTlQVDBnTVNrZ1B5QXdJRG9nZEdocGN5NWtkWEpoZEdsdmJqdGNiaUFnSUNBZ0lDQWdkR2hwY3k1emRHRnlkR1ZrSUQwZ1kzVnljbVZ1ZEZScGJXVW9LVHRjYmlBZ0lDQWdJQ0FnY21WMGRYSnVJSFJvYVhNN1hHNGdJQ0FnZlZ4dVhHNGdJQ0FnYzJWbGF5aHdjbTluY21WemN5a2dlMXh1SUNBZ0lDQWdJQ0IwYUdsekxuTmxaV3RVYVcxbEtIUm9hWE11WkhWeVlYUnBiMjRnS2lCd2NtOW5jbVZ6Y3lrN1hHNGdJQ0FnSUNBZ0lISmxkSFZ5YmlCMGFHbHpPMXh1SUNBZ0lIMWNibHh1SUNBZ0lITmxaV3RVYVcxbEtHVnNZWEJ6WldRcElIdGNiaUFnSUNBZ0lDQWdkR2hwY3k1dmJtTmxLQ2s3WEc0Z0lDQWdJQ0FnSUhSb2FYTXVaV3hoY0hObFpDQTlJR1ZzWVhCelpXUTdYRzVjYmlBZ0lDQWdJQ0FnY21WMGRYSnVJSFJvYVhNN1hHNGdJQ0FnZlZ4dUlDQWdJRnh1SUNBZ0lHZGxkRVJsWm1GMWJIUlFjbTl3Y3lncElIdGNiaUFnSUNBZ0lDQWdjbVYwZFhKdUlIdGNiaUFnSUNBZ0lDQWdJQ0FnSUM0dUxuTjFjR1Z5TG1kbGRFUmxabUYxYkhSUWNtOXdjeWdwTEZ4dUlDQWdJQ0FnSUNBZ0lDQWdaR1ZzWVhrNklEQXNYRzRnSUNBZ0lDQWdJQ0FnSUNCa2FXeGhkR1U2SURFc1hHNGdJQ0FnSUNBZ0lDQWdJQ0JrZFhKaGRHbHZiam9nTXpBd0xGeHVJQ0FnSUNBZ0lDQWdJQ0FnYkc5dmNEb2dabUZzYzJVc1hHNGdJQ0FnSUNBZ0lDQWdJQ0I1YjNsdk9pQm1ZV3h6WlN4Y2JpQWdJQ0FnSUNBZ0lDQWdJR1pzYVhBNklHWmhiSE5sTEZ4dUlDQWdJQ0FnSUNBZ0lDQWdjR3hoZVVScGNtVmpkR2x2YmpvZ01TeGNiaUFnSUNBZ0lDQWdJQ0FnSUdWdVpHVmtPaUJtWVd4elpTeGNiaUFnSUNBZ0lDQWdJQ0FnSUdWc1lYQnpaV1E2SURCY2JpQWdJQ0FnSUNBZ2ZUdGNiaUFnSUNCOVhHNWNiaUFnSUNCblpYUkVaV1poZFd4MFZtRnNkV1VvS1NCN1hHNGdJQ0FnSUNBZ0lISmxkSFZ5YmlCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0F1TGk1emRYQmxjaTVuWlhSRVpXWmhkV3gwVm1Gc2RXVW9LU3hjYmlBZ0lDQWdJQ0FnSUNBZ0lHUmxiR0Y1T2lBd0xGeHVJQ0FnSUNBZ0lDQWdJQ0FnWkhWeVlYUnBiMjQ2SURNd01DeGNiaUFnSUNBZ0lDQWdJQ0FnSUdWaGMyVTZJR1ZoYzJsdVp5NWxZWE5sVDNWMExGeHVJQ0FnSUNBZ0lDQWdJQ0FnWld4aGNITmxaRG9nTUN4Y2JpQWdJQ0FnSUNBZ0lDQWdJSE4wWVdkblpYSTZJREFzWEc0Z0lDQWdJQ0FnSUNBZ0lDQnpkR1Z3Y3pvZ01DeGNiaUFnSUNBZ0lDQWdJQ0FnSUdaeWIyMDZJREFzWEc0Z0lDQWdJQ0FnSUNBZ0lDQjBiem9nTUN4Y2JpQWdJQ0FnSUNBZ0lDQWdJSEp2ZFc1a09pQm1ZV3h6WlZ4dUlDQWdJQ0FnSUNCOU8xeHVJQ0FnSUgxY2JseHVJQ0FnSUdkbGRFUmxabUYxYkhSV1lXeDFaVkJ5YjNBb0tTQjdYRzRnSUNBZ0lDQWdJSEpsZEhWeWJpQW5kRzhuTzF4dUlDQWdJSDFjYm4xY2JpSmRmUT09XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9hY3Rpb25zL1R3ZWVuLmpzXG4gKiogbW9kdWxlIGlkID0gNFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9O1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX0FjdGlvbjIgPSByZXF1aXJlKCcuL0FjdGlvbicpO1xuXG52YXIgX0FjdGlvbjMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9BY3Rpb24yKTtcblxudmFyIF9jYWxjID0gcmVxdWlyZSgnLi4vaW5jL2NhbGMnKTtcblxudmFyIF91dGlscyA9IHJlcXVpcmUoJy4uL2luYy91dGlscycpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmICghc2VsZikgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIGNhbGwgJiYgKHR5cGVvZiBjYWxsID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpID8gY2FsbCA6IHNlbGY7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgXCIgKyB0eXBlb2Ygc3VwZXJDbGFzcyk7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgZW51bWVyYWJsZTogZmFsc2UsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcykgOiBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzOyB9XG5cbnZhciBQaHlzaWNzID0gKGZ1bmN0aW9uIChfQWN0aW9uKSB7XG4gICAgX2luaGVyaXRzKFBoeXNpY3MsIF9BY3Rpb24pO1xuXG4gICAgZnVuY3Rpb24gUGh5c2ljcygpIHtcbiAgICAgICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFBoeXNpY3MpO1xuXG4gICAgICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICAgICAgICBhcmdzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIF90aGlzID0gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgX0FjdGlvbi5jYWxsLmFwcGx5KF9BY3Rpb24sIFt0aGlzXS5jb25jYXQoYXJncykpKTtcblxuICAgICAgICBfdGhpcy5pbmFjdGl2ZUZyYW1lcyA9IDA7XG4gICAgICAgIF90aGlzLmNhbGN1bGF0ZXNWZWxvY2l0eSA9IHRydWU7XG4gICAgICAgIHJldHVybiBfdGhpcztcbiAgICB9XG5cbiAgICBQaHlzaWNzLnByb3RvdHlwZS5vblVwZGF0ZSA9IGZ1bmN0aW9uIG9uVXBkYXRlKHBoeXNpY3MsIGZyYW1lU3RhbXAsIGVsYXBzZWQpIHtcbiAgICAgICAgdGhpcy5oYXNDaGFuZ2VkID0gZmFsc2U7XG5cbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLm51bVZhbHVlS2V5czsgaSsrKSB7XG4gICAgICAgICAgICB2YXIga2V5ID0gdGhpcy52YWx1ZUtleXNbaV07XG4gICAgICAgICAgICB2YXIgdmFsdWUgPSB0aGlzLnZhbHVlc1trZXldO1xuICAgICAgICAgICAgdmFyIHByZXZpb3VzVmFsdWUgPSB2YWx1ZS5wcmV2O1xuXG4gICAgICAgICAgICAvLyBBcHBseSBhY2NlbGVyYXRpb25cbiAgICAgICAgICAgIHZhbHVlLnZlbG9jaXR5ICs9ICgwLCBfY2FsYy5zcGVlZFBlckZyYW1lKSh2YWx1ZS5hY2NlbGVyYXRpb24sIGVsYXBzZWQpO1xuXG4gICAgICAgICAgICAvLyBBcHBseSBmcmljdGlvblxuICAgICAgICAgICAgdmFsdWUudmVsb2NpdHkgKj0gTWF0aC5wb3coMSAtIHZhbHVlLmZyaWN0aW9uLCBlbGFwc2VkIC8gMTAwKTtcblxuICAgICAgICAgICAgLy8gQXBwbHkgc3ByaW5nXG4gICAgICAgICAgICBpZiAodmFsdWUuc3ByaW5nICYmICgwLCBfdXRpbHMuaXNOdW0pKHZhbHVlLnRvKSkge1xuICAgICAgICAgICAgICAgIHZhciBkaXN0YW5jZVRvVGFyZ2V0ID0gdmFsdWUudG8gLSB2YWx1ZS5jdXJyZW50O1xuICAgICAgICAgICAgICAgIHZhbHVlLnZlbG9jaXR5ICs9IGRpc3RhbmNlVG9UYXJnZXQgKiAoMCwgX2NhbGMuc3BlZWRQZXJGcmFtZSkodmFsdWUuc3ByaW5nLCBlbGFwc2VkKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gQXBwbHkgbGF0ZXN0IHZlbG9jaXR5XG4gICAgICAgICAgICB2YWx1ZS5jdXJyZW50ICs9ICgwLCBfY2FsYy5zcGVlZFBlckZyYW1lKSh2YWx1ZS52ZWxvY2l0eSwgZWxhcHNlZCk7XG5cbiAgICAgICAgICAgIC8vIENoZWNrIGlmIHZhbHVlIGhhcyBjaGFuZ2VkXG4gICAgICAgICAgICBpZiAodmFsdWUuY3VycmVudCAhPT0gcHJldmlvdXNWYWx1ZSB8fCBNYXRoLmFicyh2YWx1ZS52ZWxvY2l0eSkgPj0gdmFsdWUuc3RvcFNwZWVkIHx8IHZhbHVlLnNwcmluZyAmJiB2YWx1ZS5jdXJyZW50ICE9PSB2YWx1ZS50bykge1xuICAgICAgICAgICAgICAgIHRoaXMuaGFzQ2hhbmdlZCA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgUGh5c2ljcy5wcm90b3R5cGUub25GcmFtZUVuZCA9IGZ1bmN0aW9uIG9uRnJhbWVFbmQoKSB7XG4gICAgICAgIGlmICh0aGlzLmF1dG9FbmQpIHtcbiAgICAgICAgICAgIHRoaXMuaW5hY3RpdmVGcmFtZXMgPSB0aGlzLmhhc0NoYW5nZWQgPyAxIDogdGhpcy5pbmFjdGl2ZUZyYW1lcyArIDE7XG5cbiAgICAgICAgICAgIGlmICh0aGlzLmluYWN0aXZlRnJhbWVzID49IHRoaXMubWF4SW5hY3RpdmVGcmFtZXMpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnN0b3AoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG5cbiAgICAvKlxuICAgICAgICAjIEdldCBkZWZhdWx0IFNpbXVsYXRlIHByb3BzXG4gICAgICAgICBAcmV0dXJuIFtvYmplY3RdXG4gICAgKi9cblxuICAgIFBoeXNpY3MucHJvdG90eXBlLmdldERlZmF1bHRQcm9wcyA9IGZ1bmN0aW9uIGdldERlZmF1bHRQcm9wcygpIHtcbiAgICAgICAgcmV0dXJuIF9leHRlbmRzKHt9LCBfQWN0aW9uLnByb3RvdHlwZS5nZXREZWZhdWx0UHJvcHMuY2FsbCh0aGlzKSwge1xuICAgICAgICAgICAgYXV0b0VuZDogdHJ1ZSxcbiAgICAgICAgICAgIG1heEluYWN0aXZlRnJhbWVzOiAzXG4gICAgICAgIH0pO1xuICAgIH07XG5cbiAgICAvKlxuICAgICAgICAjIEdldCBkZWZhdWx0IFNpbXVsYXRlIHZhbHVlIHByb3BzXG4gICAgICAgICBAcmV0dXJuIFtvYmplY3RdXG4gICAgKi9cblxuICAgIFBoeXNpY3MucHJvdG90eXBlLmdldERlZmF1bHRWYWx1ZSA9IGZ1bmN0aW9uIGdldERlZmF1bHRWYWx1ZSgpIHtcbiAgICAgICAgcmV0dXJuIF9leHRlbmRzKHt9LCBfQWN0aW9uLnByb3RvdHlwZS5nZXREZWZhdWx0VmFsdWUuY2FsbCh0aGlzKSwge1xuICAgICAgICAgICAgYWNjZWxlcmF0aW9uOiAwLCAvLyBbbnVtYmVyXTogQWNjZWxlcmF0aW9uIHRvIGFwcGx5IHRvIHZhbHVlLCBpbiB1bml0cyBwZXIgc2Vjb25kXG4gICAgICAgICAgICBib3VuY2U6IDAsIC8vIFtudW1iZXJdOiBGYWN0b3IgdG8gbXVsdGlwbHkgdmVsb2NpdHkgYnkgb24gYm91bmNlXG4gICAgICAgICAgICBzcHJpbmc6IDAsIC8vIFtudW1iZXJdOiBTcHJpbmcgc3RyZW5ndGggZHVyaW5nICdzdHJpbmcnXG4gICAgICAgICAgICBzdG9wU3BlZWQ6IDAuMDAwMSwgLy8gW251bWJlcl06IFN0b3Agc2ltdWxhdGlvbiB1bmRlciB0aGlzIHNwZWVkXG4gICAgICAgICAgICBmcmljdGlvbjogMCAvLyBbbnVtYmVyXTogRnJpY3Rpb24gdG8gYXBwbHkgcGVyIGZyYW1lLCAwLTFcbiAgICAgICAgfSk7XG4gICAgfTtcblxuICAgIC8qXG4gICAgICAgICMgR2V0IGRlZmF1bHQgU2ltdWxhdGUgdmFsdWUgcHJvcGVydHkgbmFtZVxuICAgICAgICAjIyBTZXQgdmFsdWVzIHRvIHRoaXMgd2hlbiBhIGB2YWx1ZWAgaXMgbm90IHByb3ZpZGVkIGFzIGFuIG9iamVjdFxuICAgICAgICAgQHJldHVybiBbc3RyaW5nXVxuICAgICovXG5cbiAgICBQaHlzaWNzLnByb3RvdHlwZS5nZXREZWZhdWx0VmFsdWVQcm9wID0gZnVuY3Rpb24gZ2V0RGVmYXVsdFZhbHVlUHJvcCgpIHtcbiAgICAgICAgcmV0dXJuICd2ZWxvY2l0eSc7XG4gICAgfTtcblxuICAgIHJldHVybiBQaHlzaWNzO1xufSkoX0FjdGlvbjMuZGVmYXVsdCk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IFBoeXNpY3M7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5OeVl5OWhZM1JwYjI1ekwxQm9lWE5wWTNNdWFuTWlYU3dpYm1GdFpYTWlPbHRkTENKdFlYQndhVzVuY3lJNklqczdPenM3T3pzN096czdPenM3T3pzN096czdPenRKUVVseFFpeFBRVUZQTzJOQlFWQXNUMEZCVHpzN1FVRkZlRUlzWVVGR2FVSXNUMEZCVHl4SFFVVklPemhDUVVaS0xFOUJRVTg3T3pCRFFVVlVMRWxCUVVrN1FVRkJTaXhuUWtGQlNUczdPM0ZFUVVObUxEQkRRVUZUTEVsQlFVa3NSVUZCUXpzN1FVRkRaQ3hqUVVGTExHTkJRV01zUjBGQlJ5eERRVUZETEVOQlFVTTdRVUZEZUVJc1kwRkJTeXhyUWtGQmEwSXNSMEZCUnl4SlFVRkpMRU5CUVVNN08wdEJRMnhET3p0QlFVNW5RaXhYUVVGUExGZEJVWGhDTEZGQlFWRXNjVUpCUVVNc1QwRkJUeXhGUVVGRkxGVkJRVlVzUlVGQlJTeFBRVUZQTEVWQlFVVTdRVUZEYmtNc1dVRkJTU3hEUVVGRExGVkJRVlVzUjBGQlJ5eExRVUZMTEVOQlFVTTdPMEZCUlhoQ0xHRkJRVXNzU1VGQlNTeERRVUZETEVkQlFVY3NRMEZCUXl4RlFVRkZMRU5CUVVNc1IwRkJSeXhKUVVGSkxFTkJRVU1zV1VGQldTeEZRVUZGTEVOQlFVTXNSVUZCUlN4RlFVRkZPMEZCUTNoRExHZENRVUZOTEVkQlFVY3NSMEZCUnl4SlFVRkpMRU5CUVVNc1UwRkJVeXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETzBGQlF6bENMR2RDUVVGTkxFdEJRVXNzUjBGQlJ5eEpRVUZKTEVOQlFVTXNUVUZCVFN4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRE8wRkJReTlDTEdkQ1FVRk5MR0ZCUVdFc1IwRkJSeXhMUVVGTExFTkJRVU1zU1VGQlNUczdPMEZCUVVNc1FVRkhha01zYVVKQlFVc3NRMEZCUXl4UlFVRlJMRWxCUVVrc1ZVRndRbkpDTEdGQlFXRXNSVUZ2UW5OQ0xFdEJRVXNzUTBGQlF5eFpRVUZaTEVWQlFVVXNUMEZCVHl4RFFVRkRPenM3UVVGQlF5eEJRVWMzUkN4cFFrRkJTeXhEUVVGRExGRkJRVkVzWVVGQlN5eERRVUZETEVkQlFVY3NTMEZCU3l4RFFVRkRMRkZCUVZFc1JVRkJUU3hQUVVGUExFZEJRVWNzUjBGQlJ5eERRVUZET3pzN1FVRkJReXhCUVVjeFJDeG5Ra0ZCU1N4TFFVRkxMRU5CUVVNc1RVRkJUU3hKUVVGSkxGZEJla0oyUWl4TFFVRkxMRVZCZVVKM1FpeExRVUZMTEVOQlFVTXNSVUZCUlN4RFFVRkRMRVZCUVVVN1FVRkRha01zYjBKQlFVMHNaMEpCUVdkQ0xFZEJRVWNzUzBGQlN5eERRVUZETEVWQlFVVXNSMEZCUnl4TFFVRkxMRU5CUVVNc1QwRkJUeXhEUVVGRE8wRkJRMnhFTEhGQ1FVRkxMRU5CUVVNc1VVRkJVU3hKUVVGSkxHZENRVUZuUWl4SFFVRkhMRlZCTlVJMVF5eGhRVUZoTEVWQk5FSTJReXhMUVVGTExFTkJRVU1zVFVGQlRTeEZRVUZGTEU5QlFVOHNRMEZCUXl4RFFVRkRPMkZCUXpkRk96czdRVUZCUVN4QlFVZEVMR2xDUVVGTExFTkJRVU1zVDBGQlR5eEpRVUZKTEZWQmFFTndRaXhoUVVGaExFVkJaME54UWl4TFFVRkxMRU5CUVVNc1VVRkJVU3hGUVVGRkxFOUJRVThzUTBGQlF6czdPMEZCUVVNc1FVRkhlRVFzWjBKQlFVa3NTMEZCU3l4RFFVRkRMRTlCUVU4c1MwRkJTeXhoUVVGaExFbEJRVWtzU1VGQlNTeERRVUZETEVkQlFVY3NRMEZCUXl4TFFVRkxMRU5CUVVNc1VVRkJVU3hEUVVGRExFbEJRVWtzUzBGQlN5eERRVUZETEZOQlFWTXNTVUZCU3l4TFFVRkxMRU5CUVVNc1RVRkJUU3hKUVVGSkxFdEJRVXNzUTBGQlF5eFBRVUZQTEV0QlFVc3NTMEZCU3l4RFFVRkRMRVZCUVVVc1FVRkJReXhGUVVGRk8wRkJRMmhKTEc5Q1FVRkpMRU5CUVVNc1ZVRkJWU3hIUVVGSExFbEJRVWtzUTBGQlF6dGhRVU14UWp0VFFVTktPMHRCUTBvN08wRkJjRU5uUWl4WFFVRlBMRmRCYzBONFFpeFZRVUZWTEhsQ1FVRkhPMEZCUTFRc1dVRkJTU3hKUVVGSkxFTkJRVU1zVDBGQlR5eEZRVUZGTzBGQlEyUXNaMEpCUVVrc1EwRkJReXhqUVVGakxFZEJRVWNzU1VGQlNTeERRVUZETEZWQlFWVXNSMEZCUnl4RFFVRkRMRWRCUVVjc1NVRkJTU3hEUVVGRExHTkJRV01zUjBGQlJ5eERRVUZETEVOQlFVTTdPMEZCUlhCRkxHZENRVUZKTEVsQlFVa3NRMEZCUXl4alFVRmpMRWxCUVVrc1NVRkJTU3hEUVVGRExHbENRVUZwUWl4RlFVRkZPMEZCUXk5RExHOUNRVUZKTEVOQlFVTXNTVUZCU1N4RlFVRkZMRU5CUVVNN1lVRkRaanRUUVVOS08wdEJRMG83T3pzN096czdRVUU1UTJkQ0xGZEJRVThzVjBGeFJIaENMR1ZCUVdVc09FSkJRVWM3UVVGRFpDdzBRa0ZEVHl4clFrRkJUU3hsUVVGbExFdEJRVUVzVFVGQlJUdEJRVU14UWl4dFFrRkJUeXhGUVVGRkxFbEJRVWs3UVVGRFlpdzJRa0ZCYVVJc1JVRkJSU3hEUVVGRE8xZEJRM1JDTzB0QlEwdzdPenM3T3pzN1FVRXpSR2RDTEZkQlFVOHNWMEZyUlhoQ0xHVkJRV1VzT0VKQlFVYzdRVUZEWkN3MFFrRkRUeXhyUWtGQlRTeGxRVUZsTEV0QlFVRXNUVUZCUlR0QlFVTXhRaXgzUWtGQldTeEZRVUZGTEVOQlFVTTdRVUZEWml4clFrRkJUU3hGUVVGRkxFTkJRVU03UVVGRFZDeHJRa0ZCVFN4RlFVRkZMRU5CUVVNN1FVRkRWQ3h4UWtGQlV5eEZRVUZGTEUxQlFVMDdRVUZEYWtJc2IwSkJRVkVzUlVGQlJTeERRVUZETzBGQlFVRXNWMEZEWWp0TFFVTk1PenM3T3pzN096dEJRVE5GWjBJc1YwRkJUeXhYUVcxR2VFSXNiVUpCUVcxQ0xHdERRVUZITzBGQlEyeENMR1ZCUVU4c1ZVRkJWU3hEUVVGRE8wdEJRM0pDT3p0WFFYSkdaMElzVDBGQlR6czdPMnRDUVVGUUxFOUJRVThpTENKbWFXeGxJam9pVUdoNWMybGpjeTVxY3lJc0luTnZkWEpqWlZKdmIzUWlPaUl2VlhObGNuTXZUV0YwZEZCbGNuSjVMMU5wZEdWekwzQnZjRzF2ZEdsdmJpSXNJbk52ZFhKalpYTkRiMjUwWlc1MElqcGJJbWx0Y0c5eWRDQkJZM1JwYjI0Z1puSnZiU0FuTGk5QlkzUnBiMjRuTzF4dWFXMXdiM0owSUhzZ2MzQmxaV1JRWlhKR2NtRnRaU0I5SUdaeWIyMGdKeTR1TDJsdVl5OWpZV3hqSnp0Y2JtbHRjRzl5ZENCN0lHbHpUblZ0SUgwZ1puSnZiU0FuTGk0dmFXNWpMM1YwYVd4ekp6dGNibHh1Wlhod2IzSjBJR1JsWm1GMWJIUWdZMnhoYzNNZ1VHaDVjMmxqY3lCbGVIUmxibVJ6SUVGamRHbHZiaUI3WEc1Y2JpQWdJQ0JqYjI1emRISjFZM1J2Y2lndUxpNWhjbWR6S1NCN1hHNGdJQ0FnSUNBZ0lITjFjR1Z5S0M0dUxtRnlaM01wTzF4dUlDQWdJQ0FnSUNCMGFHbHpMbWx1WVdOMGFYWmxSbkpoYldWeklEMGdNRHRjYmlBZ0lDQWdJQ0FnZEdocGN5NWpZV3hqZFd4aGRHVnpWbVZzYjJOcGRIa2dQU0IwY25WbE8xeHVJQ0FnSUgxY2JseHVJQ0FnSUc5dVZYQmtZWFJsS0hCb2VYTnBZM01zSUdaeVlXMWxVM1JoYlhBc0lHVnNZWEJ6WldRcElIdGNiaUFnSUNBZ0lDQWdkR2hwY3k1b1lYTkRhR0Z1WjJWa0lEMGdabUZzYzJVN1hHNWNiaUFnSUNBZ0lDQWdabTl5SUNoc1pYUWdhU0E5SURBN0lHa2dQQ0IwYUdsekxtNTFiVlpoYkhWbFMyVjVjenNnYVNzcktTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNCamIyNXpkQ0JyWlhrZ1BTQjBhR2x6TG5aaGJIVmxTMlY1YzF0cFhUdGNiaUFnSUNBZ0lDQWdJQ0FnSUdOdmJuTjBJSFpoYkhWbElEMGdkR2hwY3k1MllXeDFaWE5iYTJWNVhUdGNiaUFnSUNBZ0lDQWdJQ0FnSUdOdmJuTjBJSEJ5WlhacGIzVnpWbUZzZFdVZ1BTQjJZV3gxWlM1d2NtVjJPMXh1WEc0Z0lDQWdJQ0FnSUNBZ0lDQXZMeUJCY0hCc2VTQmhZMk5sYkdWeVlYUnBiMjVjYmlBZ0lDQWdJQ0FnSUNBZ0lIWmhiSFZsTG5abGJHOWphWFI1SUNzOUlITndaV1ZrVUdWeVJuSmhiV1VvZG1Gc2RXVXVZV05qWld4bGNtRjBhVzl1TENCbGJHRndjMlZrS1R0Y2JseHVJQ0FnSUNBZ0lDQWdJQ0FnTHk4Z1FYQndiSGtnWm5KcFkzUnBiMjVjYmlBZ0lDQWdJQ0FnSUNBZ0lIWmhiSFZsTG5abGJHOWphWFI1SUNvOUlDZ3hJQzBnZG1Gc2RXVXVabkpwWTNScGIyNHBJQ29xSUNobGJHRndjMlZrSUM4Z01UQXdLVHRjYmx4dUlDQWdJQ0FnSUNBZ0lDQWdMeThnUVhCd2JIa2djM0J5YVc1blhHNGdJQ0FnSUNBZ0lDQWdJQ0JwWmlBb2RtRnNkV1V1YzNCeWFXNW5JQ1ltSUdselRuVnRLSFpoYkhWbExuUnZLU2tnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUdOdmJuTjBJR1JwYzNSaGJtTmxWRzlVWVhKblpYUWdQU0IyWVd4MVpTNTBieUF0SUhaaGJIVmxMbU4xY25KbGJuUTdYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdkbUZzZFdVdWRtVnNiMk5wZEhrZ0t6MGdaR2x6ZEdGdVkyVlViMVJoY21kbGRDQXFJSE53WldWa1VHVnlSbkpoYldVb2RtRnNkV1V1YzNCeWFXNW5MQ0JsYkdGd2MyVmtLVHRjYmlBZ0lDQWdJQ0FnSUNBZ0lIMWNibHh1SUNBZ0lDQWdJQ0FnSUNBZ0x5OGdRWEJ3YkhrZ2JHRjBaWE4wSUhabGJHOWphWFI1WEc0Z0lDQWdJQ0FnSUNBZ0lDQjJZV3gxWlM1amRYSnlaVzUwSUNzOUlITndaV1ZrVUdWeVJuSmhiV1VvZG1Gc2RXVXVkbVZzYjJOcGRIa3NJR1ZzWVhCelpXUXBPMXh1SUNBZ0lDQWdJQ0FnSUNBZ1hHNGdJQ0FnSUNBZ0lDQWdJQ0F2THlCRGFHVmpheUJwWmlCMllXeDFaU0JvWVhNZ1kyaGhibWRsWkZ4dUlDQWdJQ0FnSUNBZ0lDQWdhV1lnS0haaGJIVmxMbU4xY25KbGJuUWdJVDA5SUhCeVpYWnBiM1Z6Vm1Gc2RXVWdmSHdnVFdGMGFDNWhZbk1vZG1Gc2RXVXVkbVZzYjJOcGRIa3BJRDQ5SUhaaGJIVmxMbk4wYjNCVGNHVmxaQ0I4ZkNBb2RtRnNkV1V1YzNCeWFXNW5JQ1ltSUhaaGJIVmxMbU4xY25KbGJuUWdJVDA5SUhaaGJIVmxMblJ2S1NrZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lIUm9hWE11YUdGelEyaGhibWRsWkNBOUlIUnlkV1U3WEc0Z0lDQWdJQ0FnSUNBZ0lDQjlYRzRnSUNBZ0lDQWdJSDFjYmlBZ0lDQjlYRzVjYmlBZ0lDQnZia1p5WVcxbFJXNWtLQ2tnZTF4dUlDQWdJQ0FnSUNCcFppQW9kR2hwY3k1aGRYUnZSVzVrS1NCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0IwYUdsekxtbHVZV04wYVhabFJuSmhiV1Z6SUQwZ2RHaHBjeTVvWVhORGFHRnVaMlZrSUQ4Z01TQTZJSFJvYVhNdWFXNWhZM1JwZG1WR2NtRnRaWE1nS3lBeE8xeHVYRzRnSUNBZ0lDQWdJQ0FnSUNCcFppQW9kR2hwY3k1cGJtRmpkR2wyWlVaeVlXMWxjeUErUFNCMGFHbHpMbTFoZUVsdVlXTjBhWFpsUm5KaGJXVnpLU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnZEdocGN5NXpkRzl3S0NrN1hHNGdJQ0FnSUNBZ0lDQWdJQ0I5WEc0Z0lDQWdJQ0FnSUgxY2JpQWdJQ0I5WEc1Y2JpQWdJQ0F2S2x4dUlDQWdJQ0FnSUNBaklFZGxkQ0JrWldaaGRXeDBJRk5wYlhWc1lYUmxJSEJ5YjNCelhHNWNiaUFnSUNBZ0lDQWdRSEpsZEhWeWJpQmJiMkpxWldOMFhWeHVJQ0FnSUNvdlhHNGdJQ0FnWjJWMFJHVm1ZWFZzZEZCeWIzQnpLQ2tnZTF4dUlDQWdJQ0FnSUNCeVpYUjFjbTRnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdMaTR1YzNWd1pYSXVaMlYwUkdWbVlYVnNkRkJ5YjNCektDa3NYRzRnSUNBZ0lDQWdJQ0FnSUNCaGRYUnZSVzVrT2lCMGNuVmxMRnh1SUNBZ0lDQWdJQ0FnSUNBZ2JXRjRTVzVoWTNScGRtVkdjbUZ0WlhNNklETmNiaUFnSUNBZ0lDQWdmVHRjYmlBZ0lDQjlYRzVjYmlBZ0lDQXZLbHh1SUNBZ0lDQWdJQ0FqSUVkbGRDQmtaV1poZFd4MElGTnBiWFZzWVhSbElIWmhiSFZsSUhCeWIzQnpYRzVjYmlBZ0lDQWdJQ0FnUUhKbGRIVnliaUJiYjJKcVpXTjBYVnh1SUNBZ0lDb3ZYRzRnSUNBZ1oyVjBSR1ZtWVhWc2RGWmhiSFZsS0NrZ2UxeHVJQ0FnSUNBZ0lDQnlaWFIxY200Z2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnTGk0dWMzVndaWEl1WjJWMFJHVm1ZWFZzZEZaaGJIVmxLQ2tzWEc0Z0lDQWdJQ0FnSUNBZ0lDQmhZMk5sYkdWeVlYUnBiMjQ2SURBc0lDOHZJRnR1ZFcxaVpYSmRPaUJCWTJObGJHVnlZWFJwYjI0Z2RHOGdZWEJ3YkhrZ2RHOGdkbUZzZFdVc0lHbHVJSFZ1YVhSeklIQmxjaUJ6WldOdmJtUmNiaUFnSUNBZ0lDQWdJQ0FnSUdKdmRXNWpaVG9nTUN3Z0x5OGdXMjUxYldKbGNsMDZJRVpoWTNSdmNpQjBieUJ0ZFd4MGFYQnNlU0IyWld4dlkybDBlU0JpZVNCdmJpQmliM1Z1WTJWY2JpQWdJQ0FnSUNBZ0lDQWdJSE53Y21sdVp6b2dNQ3dnTHk4Z1cyNTFiV0psY2wwNklGTndjbWx1WnlCemRISmxibWQwYUNCa2RYSnBibWNnSjNOMGNtbHVaeWRjYmlBZ0lDQWdJQ0FnSUNBZ0lITjBiM0JUY0dWbFpEb2dNQzR3TURBeExDQXZMeUJiYm5WdFltVnlYVG9nVTNSdmNDQnphVzExYkdGMGFXOXVJSFZ1WkdWeUlIUm9hWE1nYzNCbFpXUmNiaUFnSUNBZ0lDQWdJQ0FnSUdaeWFXTjBhVzl1T2lBd0lDOHZJRnR1ZFcxaVpYSmRPaUJHY21samRHbHZiaUIwYnlCaGNIQnNlU0J3WlhJZ1puSmhiV1VzSURBdE1WeHVJQ0FnSUNBZ0lDQjlPMXh1SUNBZ0lIMWNibHh1SUNBZ0lDOHFYRzRnSUNBZ0lDQWdJQ01nUjJWMElHUmxabUYxYkhRZ1UybHRkV3hoZEdVZ2RtRnNkV1VnY0hKdmNHVnlkSGtnYm1GdFpWeHVJQ0FnSUNBZ0lDQWpJeUJUWlhRZ2RtRnNkV1Z6SUhSdklIUm9hWE1nZDJobGJpQmhJR0IyWVd4MVpXQWdhWE1nYm05MElIQnliM1pwWkdWa0lHRnpJR0Z1SUc5aWFtVmpkRnh1WEc0Z0lDQWdJQ0FnSUVCeVpYUjFjbTRnVzNOMGNtbHVaMTFjYmlBZ0lDQXFMMXh1SUNBZ0lHZGxkRVJsWm1GMWJIUldZV3gxWlZCeWIzQW9LU0I3WEc0Z0lDQWdJQ0FnSUhKbGRIVnliaUFuZG1Wc2IyTnBkSGtuTzF4dUlDQWdJSDFjYm4xY2JpSmRmUT09XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9hY3Rpb25zL1BoeXNpY3MuanNcbiAqKiBtb2R1bGUgaWQgPSA1XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbnZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfQWN0aW9uMiA9IHJlcXVpcmUoJy4vQWN0aW9uJyk7XG5cbnZhciBfQWN0aW9uMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX0FjdGlvbjIpO1xuXG52YXIgX1BvaW50ZXIgPSByZXF1aXJlKCcuLi9pbnB1dC9Qb2ludGVyJyk7XG5cbnZhciBfUG9pbnRlcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9Qb2ludGVyKTtcblxudmFyIF9jYWxjID0gcmVxdWlyZSgnLi4vaW5jL2NhbGMnKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoIXNlbGYpIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBjYWxsICYmICh0eXBlb2YgY2FsbCA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSA/IGNhbGwgOiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90IFwiICsgdHlwZW9mIHN1cGVyQ2xhc3MpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIGVudW1lcmFibGU6IGZhbHNlLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIDogc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzczsgfVxuXG4vKlxuICAgIFNjcmFwZSB4L3kgY29vcmRpbmF0ZXMgZnJvbSBwcm92aWRlZCBldmVudFxuXG4gICAgQHBhcmFtIFtldmVudF1cbiAgICBAcmV0dXJuIFtvYmplY3RdXG4qL1xudmFyIG1vdXNlRXZlbnRUb1BvaW50ID0gZnVuY3Rpb24gKGUpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICB4OiBlLnBhZ2VYLFxuICAgICAgICB5OiBlLnBhZ2VZXG4gICAgfTtcbn07XG5cbnZhciB0b3VjaEV2ZW50VG9Qb2ludCA9IGZ1bmN0aW9uIChfcmVmKSB7XG4gICAgdmFyIGNoYW5nZWRUb3VjaGVzID0gX3JlZi5jaGFuZ2VkVG91Y2hlcztcbiAgICByZXR1cm4ge1xuICAgICAgICB4OiBjaGFuZ2VkVG91Y2hlc1swXS5jbGllbnRYLFxuICAgICAgICB5OiBjaGFuZ2VkVG91Y2hlc1swXS5jbGllbnRZXG4gICAgfTtcbn07XG5cbnZhciBjcmVhdGVQb2ludGVyID0gZnVuY3Rpb24gKGUpIHtcbiAgICByZXR1cm4gZS50b3VjaGVzID8gbmV3IF9Qb2ludGVyMi5kZWZhdWx0KHRvdWNoRXZlbnRUb1BvaW50KGUpLCAndG91Y2htb3ZlJywgdG91Y2hFdmVudFRvUG9pbnQpIDogbmV3IF9Qb2ludGVyMi5kZWZhdWx0KG1vdXNlRXZlbnRUb1BvaW50KGUpLCAnbW91c2Vtb3ZlJywgbW91c2VFdmVudFRvUG9pbnQpO1xufTtcblxudmFyIGdldEFjdHVhbEV2ZW50ID0gZnVuY3Rpb24gKGUpIHtcbiAgICByZXR1cm4gZS5vcmlnaW5hbEV2ZW50IHx8IGU7XG59O1xuXG52YXIgVHJhY2sgPSAoZnVuY3Rpb24gKF9BY3Rpb24pIHtcbiAgICBfaW5oZXJpdHMoVHJhY2ssIF9BY3Rpb24pO1xuXG4gICAgZnVuY3Rpb24gVHJhY2soKSB7XG4gICAgICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBUcmFjayk7XG5cbiAgICAgICAgcmV0dXJuIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIF9BY3Rpb24uYXBwbHkodGhpcywgYXJndW1lbnRzKSk7XG4gICAgfVxuXG4gICAgVHJhY2sucHJvdG90eXBlLnN0YXJ0ID0gZnVuY3Rpb24gc3RhcnQoaW5wdXQpIHtcbiAgICAgICAgX0FjdGlvbi5wcm90b3R5cGUuc3RhcnQuY2FsbCh0aGlzKTtcblxuICAgICAgICBpZiAoaW5wdXQpIHtcbiAgICAgICAgICAgIHRoaXMuaW5wdXQgPSBpbnB1dC5zdGF0ZSA/IGlucHV0IDogY3JlYXRlUG9pbnRlcihnZXRBY3R1YWxFdmVudChpbnB1dCkpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5pbnB1dE9mZnNldCA9IHt9O1xuICAgICAgICB0aGlzLmlucHV0T3JpZ2luID0gX2V4dGVuZHMoe30sIHRoaXMuaW5wdXQuc3RhdGUpO1xuICAgICAgICB0aGlzLmlucHV0LnN0YXJ0KCk7XG4gICAgfTtcblxuICAgIFRyYWNrLnByb3RvdHlwZS5zdG9wID0gZnVuY3Rpb24gc3RvcCgpIHtcbiAgICAgICAgX0FjdGlvbi5wcm90b3R5cGUuc3RvcC5jYWxsKHRoaXMpO1xuICAgICAgICB0aGlzLmlucHV0LnN0b3AoKTtcbiAgICB9O1xuXG4gICAgVHJhY2sucHJvdG90eXBlLm9uVXBkYXRlID0gZnVuY3Rpb24gb25VcGRhdGUodHJhY2ssIGZyYW1lU3RhbXAsIGVsYXBzZWQpIHtcbiAgICAgICAgdGhpcy5pbnB1dE9mZnNldCA9ICgwLCBfY2FsYy5vZmZzZXQpKHRoaXMuaW5wdXRPcmlnaW4sIHRoaXMuaW5wdXQuc3RhdGUpO1xuXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5udW1WYWx1ZUtleXM7IGkrKykge1xuICAgICAgICAgICAgdmFyIGtleSA9IHRoaXMudmFsdWVLZXlzW2ldO1xuXG4gICAgICAgICAgICBpZiAodGhpcy5pbnB1dE9mZnNldC5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgICAgICAgdmFyIHZhbHVlID0gdGhpcy52YWx1ZXNba2V5XTtcbiAgICAgICAgICAgICAgICBpZiAodmFsdWUuZGlyZWN0KSB7XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlLmN1cnJlbnQgPSB0aGlzLmlucHV0LnN0YXRlW2tleV07XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdmFsdWUuY3VycmVudCA9IHZhbHVlLm9yaWdpbiArIHRoaXMuaW5wdXRPZmZzZXRba2V5XTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAvLyBTbW9vdGggdmFsdWUgaWYgd2UgaGF2ZSBzbW9vdGhpbmdcbiAgICAgICAgICAgICAgICBpZiAodmFsdWUuc21vb3RoKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlLmN1cnJlbnQgPSAoMCwgX2NhbGMuc21vb3RoKSh2YWx1ZS5jdXJyZW50LCB2YWx1ZS5wcmV2LCBlbGFwc2VkLCB2YWx1ZS5zbW9vdGgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBUcmFjay5wcm90b3R5cGUuZ2V0RGVmYXVsdFZhbHVlID0gZnVuY3Rpb24gZ2V0RGVmYXVsdFZhbHVlKCkge1xuICAgICAgICByZXR1cm4gX2V4dGVuZHMoe30sIF9BY3Rpb24ucHJvdG90eXBlLmdldERlZmF1bHRWYWx1ZS5jYWxsKHRoaXMpLCB7XG4gICAgICAgICAgICBhbXA6IDEsXG4gICAgICAgICAgICBlc2NhcGVBbXA6IDAsXG4gICAgICAgICAgICBkaXJlY3Q6IGZhbHNlXG4gICAgICAgIH0pO1xuICAgIH07XG5cbiAgICByZXR1cm4gVHJhY2s7XG59KShfQWN0aW9uMy5kZWZhdWx0KTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gVHJhY2s7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5OeVl5OWhZM1JwYjI1ekwxUnlZV05yTG1weklsMHNJbTVoYldWeklqcGJYU3dpYldGd2NHbHVaM01pT2lJN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096dEJRVlZCTEVsQlFVMHNhVUpCUVdsQ0xFZEJRVWNzVlVGQlF5eERRVUZETzFkQlFVMDdRVUZET1VJc1UwRkJReXhGUVVGRkxFTkJRVU1zUTBGQlF5eExRVUZMTzBGQlExWXNVMEZCUXl4RlFVRkZMRU5CUVVNc1EwRkJReXhMUVVGTE8wdEJRMkk3UTBGQlF5eERRVUZET3p0QlFVVklMRWxCUVUwc2FVSkJRV2xDTEVkQlFVYzdVVUZCUnl4alFVRmpMRkZCUVdRc1kwRkJZenRYUVVGUk8wRkJReTlETEZOQlFVTXNSVUZCUlN4alFVRmpMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zVDBGQlR6dEJRVU0xUWl4VFFVRkRMRVZCUVVVc1kwRkJZeXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEU5QlFVODdTMEZETDBJN1EwRkJReXhEUVVGRE96dEJRVVZJTEVsQlFVMHNZVUZCWVN4SFFVRkhMRlZCUVVNc1EwRkJRenRYUVVGTExFTkJRVU1zUTBGQlF5eFBRVUZQTEVkQlEyeERMSE5DUVVGWkxHbENRVUZwUWl4RFFVRkRMRU5CUVVNc1EwRkJReXhGUVVGRkxGZEJRVmNzUlVGQlJTeHBRa0ZCYVVJc1EwRkJReXhIUVVOcVJTeHpRa0ZCV1N4cFFrRkJhVUlzUTBGQlF5eERRVUZETEVOQlFVTXNSVUZCUlN4WFFVRlhMRVZCUVVVc2FVSkJRV2xDTEVOQlFVTTdRMEZCUVN4RFFVRkRPenRCUVVWMFJTeEpRVUZOTEdOQlFXTXNSMEZCUnl4VlFVRkRMRU5CUVVNN1YwRkJTeXhEUVVGRExFTkJRVU1zWVVGQllTeEpRVUZKTEVOQlFVTTdRMEZCUVN4RFFVRkRPenRKUVVVNVFpeExRVUZMTzJOQlFVd3NTMEZCU3pzN1lVRkJUQ3hMUVVGTE96aENRVUZNTEV0QlFVczdPenM3TzBGQlFVd3NVMEZCU3l4WFFVTjBRaXhMUVVGTExHdENRVUZETEV0QlFVc3NSVUZCUlR0QlFVTlVMREJDUVVGTkxFdEJRVXNzUzBGQlFTeE5RVUZGTEVOQlFVTTdPMEZCUldRc1dVRkJTU3hMUVVGTExFVkJRVVU3UVVGRFVDeG5Ra0ZCU1N4RFFVRkRMRXRCUVVzc1IwRkJSeXhMUVVGTExFTkJRVU1zUzBGQlN5eEhRVUZITEV0QlFVc3NSMEZCUnl4aFFVRmhMRU5CUVVNc1kwRkJZeXhEUVVGRExFdEJRVXNzUTBGQlF5eERRVUZETEVOQlFVTTdVMEZETTBVN08wRkJSVVFzV1VGQlNTeERRVUZETEZkQlFWY3NSMEZCUnl4RlFVRkZMRU5CUVVNN1FVRkRkRUlzV1VGQlNTeERRVUZETEZkQlFWY3NaMEpCUVZFc1NVRkJTU3hEUVVGRExFdEJRVXNzUTBGQlF5eExRVUZMTEVOQlFVVXNRMEZCUXp0QlFVTXpReXhaUVVGSkxFTkJRVU1zUzBGQlN5eERRVUZETEV0QlFVc3NSVUZCUlN4RFFVRkRPMHRCUTNSQ096dEJRVmhuUWl4VFFVRkxMRmRCWVhSQ0xFbEJRVWtzYlVKQlFVYzdRVUZEU0N3d1FrRkJUU3hKUVVGSkxFdEJRVUVzVFVGQlJTeERRVUZETzBGQlEySXNXVUZCU1N4RFFVRkRMRXRCUVVzc1EwRkJReXhKUVVGSkxFVkJRVVVzUTBGQlF6dExRVU55UWpzN1FVRm9RbWRDTEZOQlFVc3NWMEZyUW5SQ0xGRkJRVkVzY1VKQlFVTXNTMEZCU3l4RlFVRkZMRlZCUVZVc1JVRkJSU3hQUVVGUExFVkJRVVU3UVVGRGFrTXNXVUZCU1N4RFFVRkRMRmRCUVZjc1IwRkJSeXhWUVRORFZpeE5RVUZOTEVWQk1rTlhMRWxCUVVrc1EwRkJReXhYUVVGWExFVkJRVVVzU1VGQlNTeERRVUZETEV0QlFVc3NRMEZCUXl4TFFVRkxMRU5CUVVNc1EwRkJRenM3UVVGRk9VUXNZVUZCU3l4SlFVRkpMRU5CUVVNc1IwRkJSeXhEUVVGRExFVkJRVVVzUTBGQlF5eEhRVUZITEVsQlFVa3NRMEZCUXl4WlFVRlpMRVZCUVVVc1EwRkJReXhGUVVGRkxFVkJRVVU3UVVGRGVFTXNaMEpCUVUwc1IwRkJSeXhIUVVGSExFbEJRVWtzUTBGQlF5eFRRVUZUTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNN08wRkJSVGxDTEdkQ1FVRkpMRWxCUVVrc1EwRkJReXhYUVVGWExFTkJRVU1zWTBGQll5eERRVUZETEVkQlFVY3NRMEZCUXl4RlFVRkZPMEZCUTNSRExHOUNRVUZOTEV0QlFVc3NSMEZCUnl4SlFVRkpMRU5CUVVNc1RVRkJUU3hEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETzBGQlF5OUNMRzlDUVVGSkxFdEJRVXNzUTBGQlF5eE5RVUZOTEVWQlFVVTdRVUZEWkN4NVFrRkJTeXhEUVVGRExFOUJRVThzUjBGQlJ5eEpRVUZKTEVOQlFVTXNTMEZCU3l4RFFVRkRMRXRCUVVzc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF6dHBRa0ZEZWtNc1RVRkJUVHRCUVVOSUxIbENRVUZMTEVOQlFVTXNUMEZCVHl4SFFVRkhMRXRCUVVzc1EwRkJReXhOUVVGTkxFZEJRVWNzU1VGQlNTeERRVUZETEZkQlFWY3NRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJRenRwUWtGRGVFUTdPenRCUVVGQkxFRkJSMFFzYjBKQlFVa3NTMEZCU3l4RFFVRkRMRTFCUVUwc1JVRkJSVHRCUVVOa0xIbENRVUZMTEVOQlFVTXNUMEZCVHl4SFFVRkhMRlZCTVVRelFpeE5RVUZOTEVWQk1FUTBRaXhMUVVGTExFTkJRVU1zVDBGQlR5eEZRVUZGTEV0QlFVc3NRMEZCUXl4SlFVRkpMRVZCUVVVc1QwRkJUeXhGUVVGRkxFdEJRVXNzUTBGQlF5eE5RVUZOTEVOQlFVTXNRMEZCUXp0cFFrRkROVVU3WVVGRFNqdFRRVU5LTzB0QlEwbzdPMEZCZEVOblFpeFRRVUZMTEZkQmQwTjBRaXhsUVVGbExEaENRVUZITzBGQlEyUXNORUpCUTA4c2EwSkJRVTBzWlVGQlpTeExRVUZCTEUxQlFVVTdRVUZETVVJc1pVRkJSeXhGUVVGRkxFTkJRVU03UVVGRFRpeHhRa0ZCVXl4RlFVRkZMRU5CUVVNN1FVRkRXaXhyUWtGQlRTeEZRVUZGTEV0QlFVczdWMEZEWmp0TFFVTk1PenRYUVM5RFowSXNTMEZCU3pzN08ydENRVUZNTEV0QlFVc2lMQ0ptYVd4bElqb2lWSEpoWTJzdWFuTWlMQ0p6YjNWeVkyVlNiMjkwSWpvaUwxVnpaWEp6TDAxaGRIUlFaWEp5ZVM5VGFYUmxjeTl3YjNCdGIzUnBiMjRpTENKemIzVnlZMlZ6UTI5dWRHVnVkQ0k2V3lKcGJYQnZjblFnUVdOMGFXOXVJR1p5YjIwZ0p5NHZRV04wYVc5dUp6dGNibWx0Y0c5eWRDQlFiMmx1ZEdWeUlHWnliMjBnSnk0dUwybHVjSFYwTDFCdmFXNTBaWEluTzF4dWFXMXdiM0owSUhzZ2MyMXZiM1JvTENCdlptWnpaWFFnZlNCbWNtOXRJQ2N1TGk5cGJtTXZZMkZzWXljN1hHNWNiaThxWEc0Z0lDQWdVMk55WVhCbElIZ3ZlU0JqYjI5eVpHbHVZWFJsY3lCbWNtOXRJSEJ5YjNacFpHVmtJR1YyWlc1MFhHNWNiaUFnSUNCQWNHRnlZVzBnVzJWMlpXNTBYVnh1SUNBZ0lFQnlaWFIxY200Z1cyOWlhbVZqZEYxY2Jpb3ZYRzVqYjI1emRDQnRiM1Z6WlVWMlpXNTBWRzlRYjJsdWRDQTlJQ2hsS1NBOVBpQW9lMXh1SUNBZ0lIZzZJR1V1Y0dGblpWZ3NYRzRnSUNBZ2VUb2daUzV3WVdkbFdWeHVmU2s3WEc1Y2JtTnZibk4wSUhSdmRXTm9SWFpsYm5SVWIxQnZhVzUwSUQwZ0tIc2dZMmhoYm1kbFpGUnZkV05vWlhNZ2ZTa2dQVDRnS0h0Y2JpQWdJQ0I0T2lCamFHRnVaMlZrVkc5MVkyaGxjMXN3WFM1amJHbGxiblJZTEZ4dUlDQWdJSGs2SUdOb1lXNW5aV1JVYjNWamFHVnpXekJkTG1Oc2FXVnVkRmxjYm4wcE8xeHVYRzVqYjI1emRDQmpjbVZoZEdWUWIybHVkR1Z5SUQwZ0tHVXBJRDArSUdVdWRHOTFZMmhsY3lBL1hHNGdJQ0FnYm1WM0lGQnZhVzUwWlhJb2RHOTFZMmhGZG1WdWRGUnZVRzlwYm5Rb1pTa3NJQ2QwYjNWamFHMXZkbVVuTENCMGIzVmphRVYyWlc1MFZHOVFiMmx1ZENrZ09pQmNiaUFnSUNCdVpYY2dVRzlwYm5SbGNpaHRiM1Z6WlVWMlpXNTBWRzlRYjJsdWRDaGxLU3dnSjIxdmRYTmxiVzkyWlNjc0lHMXZkWE5sUlhabGJuUlViMUJ2YVc1MEtUdGNibHh1WTI5dWMzUWdaMlYwUVdOMGRXRnNSWFpsYm5RZ1BTQW9aU2tnUFQ0Z1pTNXZjbWxuYVc1aGJFVjJaVzUwSUh4OElHVTdYRzVjYm1WNGNHOXlkQ0JrWldaaGRXeDBJR05zWVhOeklGUnlZV05ySUdWNGRHVnVaSE1nUVdOMGFXOXVJSHRjYmlBZ0lDQnpkR0Z5ZENocGJuQjFkQ2tnZTF4dUlDQWdJQ0FnSUNCemRYQmxjaTV6ZEdGeWRDZ3BPMXh1WEc0Z0lDQWdJQ0FnSUdsbUlDaHBibkIxZENrZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnZEdocGN5NXBibkIxZENBOUlHbHVjSFYwTG5OMFlYUmxJRDhnYVc1d2RYUWdPaUJqY21WaGRHVlFiMmx1ZEdWeUtHZGxkRUZqZEhWaGJFVjJaVzUwS0dsdWNIVjBLU2s3WEc0Z0lDQWdJQ0FnSUgxY2JseHVJQ0FnSUNBZ0lDQjBhR2x6TG1sdWNIVjBUMlptYzJWMElEMGdlMzA3WEc0Z0lDQWdJQ0FnSUhSb2FYTXVhVzV3ZFhSUGNtbG5hVzRnUFNCN0lDNHVMblJvYVhNdWFXNXdkWFF1YzNSaGRHVWdmVHRjYmlBZ0lDQWdJQ0FnZEdocGN5NXBibkIxZEM1emRHRnlkQ2dwTzF4dUlDQWdJSDFjYmx4dUlDQWdJSE4wYjNBb0tTQjdYRzRnSUNBZ0lDQWdJSE4xY0dWeUxuTjBiM0FvS1R0Y2JpQWdJQ0FnSUNBZ2RHaHBjeTVwYm5CMWRDNXpkRzl3S0NrN1hHNGdJQ0FnZlZ4dVhHNGdJQ0FnYjI1VmNHUmhkR1VvZEhKaFkyc3NJR1p5WVcxbFUzUmhiWEFzSUdWc1lYQnpaV1FwSUh0Y2JpQWdJQ0FnSUNBZ2RHaHBjeTVwYm5CMWRFOW1abk5sZENBOUlHOW1abk5sZENoMGFHbHpMbWx1Y0hWMFQzSnBaMmx1TENCMGFHbHpMbWx1Y0hWMExuTjBZWFJsS1R0Y2JseHVJQ0FnSUNBZ0lDQm1iM0lnS0d4bGRDQnBJRDBnTURzZ2FTQThJSFJvYVhNdWJuVnRWbUZzZFdWTFpYbHpPeUJwS3lzcElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUdOdmJuTjBJR3RsZVNBOUlIUm9hWE11ZG1Gc2RXVkxaWGx6VzJsZE8xeHVYRzRnSUNBZ0lDQWdJQ0FnSUNCcFppQW9kR2hwY3k1cGJuQjFkRTltWm5ObGRDNW9ZWE5QZDI1UWNtOXdaWEowZVNoclpYa3BLU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnWTI5dWMzUWdkbUZzZFdVZ1BTQjBhR2x6TG5aaGJIVmxjMXRyWlhsZE8xeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lHbG1JQ2gyWVd4MVpTNWthWEpsWTNRcElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnZG1Gc2RXVXVZM1Z5Y21WdWRDQTlJSFJvYVhNdWFXNXdkWFF1YzNSaGRHVmJhMlY1WFR0Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCOUlHVnNjMlVnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQjJZV3gxWlM1amRYSnlaVzUwSUQwZ2RtRnNkV1V1YjNKcFoybHVJQ3NnZEdocGN5NXBibkIxZEU5bVpuTmxkRnRyWlhsZE8xeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lIMWNibHh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQzh2SUZOdGIyOTBhQ0IyWVd4MVpTQnBaaUIzWlNCb1lYWmxJSE50YjI5MGFHbHVaMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJR2xtSUNoMllXeDFaUzV6Ylc5dmRHZ3BJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2RtRnNkV1V1WTNWeWNtVnVkQ0E5SUhOdGIyOTBhQ2gyWVd4MVpTNWpkWEp5Wlc1MExDQjJZV3gxWlM1d2NtVjJMQ0JsYkdGd2MyVmtMQ0IyWVd4MVpTNXpiVzl2ZEdncE8xeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lIMWNiaUFnSUNBZ0lDQWdJQ0FnSUgxY2JpQWdJQ0FnSUNBZ2ZWeHVJQ0FnSUgxY2JseHVJQ0FnSUdkbGRFUmxabUYxYkhSV1lXeDFaU2dwSUh0Y2JpQWdJQ0FnSUNBZ2NtVjBkWEp1SUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJQzR1TG5OMWNHVnlMbWRsZEVSbFptRjFiSFJXWVd4MVpTZ3BMRnh1SUNBZ0lDQWdJQ0FnSUNBZ1lXMXdPaUF4TEZ4dUlDQWdJQ0FnSUNBZ0lDQWdaWE5qWVhCbFFXMXdPaUF3TEZ4dUlDQWdJQ0FnSUNBZ0lDQWdaR2x5WldOME9pQm1ZV3h6WlZ4dUlDQWdJQ0FnSUNCOU8xeHVJQ0FnSUgxY2JuMWNiaUpkZlE9PVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvYWN0aW9ucy9UcmFjay5qc1xuICoqIG1vZHVsZSBpZCA9IDZcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF9sb29wID0gcmVxdWlyZSgnLi9sb29wJyk7XG5cbnZhciBsb29wID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQoX2xvb3ApO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChvYmopIHsgaWYgKG9iaiAmJiBvYmouX19lc01vZHVsZSkgeyByZXR1cm4gb2JqOyB9IGVsc2UgeyB2YXIgbmV3T2JqID0ge307IGlmIChvYmogIT0gbnVsbCkgeyBmb3IgKHZhciBrZXkgaW4gb2JqKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBrZXkpKSBuZXdPYmpba2V5XSA9IG9ialtrZXldOyB9IH0gbmV3T2JqLmRlZmF1bHQgPSBvYmo7IHJldHVybiBuZXdPYmo7IH0gfVxuXG5mdW5jdGlvbiBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMob2JqLCBrZXlzKSB7IHZhciB0YXJnZXQgPSB7fTsgZm9yICh2YXIgaSBpbiBvYmopIHsgaWYgKGtleXMuaW5kZXhPZihpKSA+PSAwKSBjb250aW51ZTsgaWYgKCFPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBpKSkgY29udGludWU7IHRhcmdldFtpXSA9IG9ialtpXTsgfSByZXR1cm4gdGFyZ2V0OyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbnZhciBQcm9jZXNzID0gKGZ1bmN0aW9uICgpIHtcbiAgICAvKlxuICAgICAgICBbb2JqZWN0XTogUHJvcGVydGllc1xuICAgICAgICBbYm9vbGVhbl0gKG9wdGlvbmFsKTogSXMgUHJvY2VzcyBsYXp5P1xuICAgICovXG5cbiAgICBmdW5jdGlvbiBQcm9jZXNzKHByb3BzLCBpc0xhenkpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcblxuICAgICAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgUHJvY2Vzcyk7XG5cbiAgICAgICAgdGhpcy5pZCA9IGxvb3AuZ2V0UHJvY2Vzc0lkKCk7XG5cbiAgICAgICAgdGhpcy5fb25DbGVhbnVwID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgX3RoaXMuc3RvcCgpO1xuICAgICAgICAgICAgX3RoaXMub25DbGVhbnVwID0gdW5kZWZpbmVkO1xuICAgICAgICB9O1xuXG4gICAgICAgIHRoaXMuX29uQWN0aXZhdGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gX3RoaXMub25DbGVhbnVwID0gX3RoaXMuX29uQ2xlYW51cDtcbiAgICAgICAgfTtcblxuICAgICAgICB0aGlzLnNldCh0aGlzLmdldERlZmF1bHRQcm9wcygpKTtcbiAgICAgICAgdGhpcy5zZXQocHJvcHMpO1xuXG4gICAgICAgIHRoaXMuaXNMYXp5ID0gaXNMYXp5IHx8IGZhbHNlO1xuICAgICAgICB0aGlzLmlzQWN0aXZlID0gZmFsc2U7XG4gICAgfVxuXG4gICAgUHJvY2Vzcy5wcm90b3R5cGUuc2V0ID0gZnVuY3Rpb24gc2V0KHByb3BzKSB7XG4gICAgICAgIGZvciAodmFyIGtleSBpbiBwcm9wcykge1xuICAgICAgICAgICAgaWYgKHByb3BzLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICAgICAgICB0aGlzW2tleV0gPSBwcm9wc1trZXldO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfTtcblxuICAgIFByb2Nlc3MucHJvdG90eXBlLnN0YXJ0ID0gZnVuY3Rpb24gc3RhcnQoKSB7XG4gICAgICAgIGxvb3AuYWN0aXZhdGUodGhpcy5pZCwgdGhpcyk7XG5cbiAgICAgICAgdGhpcy5vbkNsZWFudXAgPSB0aGlzLm9uQWN0aXZhdGUgPSB1bmRlZmluZWQ7XG5cbiAgICAgICAgaWYgKHRoaXMub25TdGFydCkge1xuICAgICAgICAgICAgdGhpcy5vblN0YXJ0KHRoaXMpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfTtcblxuICAgIFByb2Nlc3MucHJvdG90eXBlLnN0b3AgPSBmdW5jdGlvbiBzdG9wKCkge1xuICAgICAgICBsb29wLmRlYWN0aXZhdGUodGhpcy5pZCk7XG5cbiAgICAgICAgaWYgKHRoaXMub25TdG9wKSB7XG4gICAgICAgICAgICB0aGlzLm9uU3RvcCh0aGlzKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH07XG5cbiAgICBQcm9jZXNzLnByb3RvdHlwZS5vbmNlID0gZnVuY3Rpb24gb25jZSgpIHtcbiAgICAgICAgdGhpcy5zdGFydCgpO1xuICAgICAgICB0aGlzLm9uQWN0aXZhdGUgPSB0aGlzLl9vbkFjdGl2YXRlO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xuXG4gICAgLypcbiAgICAgICAgIyBHZXQgZGVmYXVsdCBBY3Rpb24gcHJvcGVydGllc1xuICAgICAgICAgQHJldHVybiBbb2JqZWN0XVxuICAgICovXG5cbiAgICBQcm9jZXNzLnByb3RvdHlwZS5nZXREZWZhdWx0UHJvcHMgPSBmdW5jdGlvbiBnZXREZWZhdWx0UHJvcHMoKSB7XG4gICAgICAgIHJldHVybiB7fTtcbiAgICB9O1xuXG4gICAgLypcbiAgICAgICAgIyBFeHRlbmQgdGhpcyBQcm9jZXNzIHdpdGggbmV3IHByb3BlcnRpZXNcbiAgICAgICAgIyMgUmV0dXJucyBuZXcgaW5zdGFuY2Ugb2YgdGhpcyBQcm9jZXNzJ3MgYHByb3RvdHlwZWAgd2l0aCBleGlzdGluZyBhbmQgbmV3IHByb3BlcnRpZXNcbiAgICAgICAgIEBwYXJhbSBbb2JqZWN0XSAob3B0aW9uYWwpXG4gICAgICAgIEByZXR1cm4gW1Byb2Nlc3NdXG4gICAgKi9cblxuICAgIFByb2Nlc3MucHJvdG90eXBlLmluaGVyaXQgPSBmdW5jdGlvbiBpbmhlcml0KHByb3BzKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXMuaWQ7XG5cbiAgICAgICAgdmFyIGluaGVyaXRlZFByb3BzID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKHRoaXMsIFsnaWQnXSk7XG5cbiAgICAgICAgdmFyIG5ld1Byb2Nlc3MgPSBuZXcgdGhpcy5jb25zdHJ1Y3Rvcihpbmhlcml0ZWRQcm9wcyk7XG4gICAgICAgIHJldHVybiBuZXdQcm9jZXNzLnNldChwcm9wcyk7XG4gICAgfTtcblxuICAgIHJldHVybiBQcm9jZXNzO1xufSkoKTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gUHJvY2Vzcztcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbk55WXk5d2NtOWpaWE56TDFCeWIyTmxjM011YW5NaVhTd2libUZ0WlhNaU9sdGRMQ0p0WVhCd2FXNW5jeUk2SWpzN096czdPMGxCUVZrc1NVRkJTVHM3T3pzN096czdTVUZGU3l4UFFVRlBPenM3T3pzN1FVRkxlRUlzWVVGTWFVSXNUMEZCVHl4RFFVdGFMRXRCUVVzc1JVRkJSU3hOUVVGTkxFVkJRVVU3T3pzNFFrRk1WaXhQUVVGUE96dEJRVTF3UWl4WlFVRkpMRU5CUVVNc1JVRkJSU3hIUVVGSExFbEJRVWtzUTBGQlF5eFpRVUZaTEVWQlFVVXNRMEZCUXpzN1FVRkZPVUlzV1VGQlNTeERRVUZETEZWQlFWVXNSMEZCUnl4WlFVRk5PMEZCUTNCQ0xHdENRVUZMTEVsQlFVa3NSVUZCUlN4RFFVRkRPMEZCUTFvc2EwSkJRVXNzVTBGQlV5eEhRVUZITEZOQlFWTXNRMEZCUXp0VFFVTTVRaXhEUVVGRE96dEJRVVZHTEZsQlFVa3NRMEZCUXl4WFFVRlhMRWRCUVVjN2JVSkJRVTBzVFVGQlN5eFRRVUZUTEVkQlFVY3NUVUZCU3l4VlFVRlZPMU5CUVVFc1EwRkJRenM3UVVGRk1VUXNXVUZCU1N4RFFVRkRMRWRCUVVjc1EwRkJReXhKUVVGSkxFTkJRVU1zWlVGQlpTeEZRVUZGTEVOQlFVTXNRMEZCUXp0QlFVTnFReXhaUVVGSkxFTkJRVU1zUjBGQlJ5eERRVUZETEV0QlFVc3NRMEZCUXl4RFFVRkRPenRCUVVWb1FpeFpRVUZKTEVOQlFVTXNUVUZCVFN4SFFVRkhMRTFCUVUwc1NVRkJTU3hMUVVGTExFTkJRVU03UVVGRE9VSXNXVUZCU1N4RFFVRkRMRkZCUVZFc1IwRkJSeXhMUVVGTExFTkJRVU03UzBGRGVrSTdPMEZCY0VKblFpeFhRVUZQTEZkQmMwSjRRaXhIUVVGSExHZENRVUZETEV0QlFVc3NSVUZCUlR0QlFVTlFMR0ZCUVVzc1NVRkJTU3hIUVVGSExFbEJRVWtzUzBGQlN5eEZRVUZGTzBGQlEyNUNMR2RDUVVGSkxFdEJRVXNzUTBGQlF5eGpRVUZqTEVOQlFVTXNSMEZCUnl4RFFVRkRMRVZCUVVVN1FVRkRNMElzYjBKQlFVa3NRMEZCUXl4SFFVRkhMRU5CUVVNc1IwRkJSeXhMUVVGTExFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTTdZVUZETVVJN1UwRkRTanM3UVVGRlJDeGxRVUZQTEVsQlFVa3NRMEZCUXp0TFFVTm1PenRCUVRsQ1owSXNWMEZCVHl4WFFXZERlRUlzUzBGQlN5eHZRa0ZCUnp0QlFVTktMRmxCUVVrc1EwRkJReXhSUVVGUkxFTkJRVU1zU1VGQlNTeERRVUZETEVWQlFVVXNSVUZCUlN4SlFVRkpMRU5CUVVNc1EwRkJRenM3UVVGRk4wSXNXVUZCU1N4RFFVRkRMRk5CUVZNc1IwRkJSeXhKUVVGSkxFTkJRVU1zVlVGQlZTeEhRVUZITEZOQlFWTXNRMEZCUXpzN1FVRkZOME1zV1VGQlNTeEpRVUZKTEVOQlFVTXNUMEZCVHl4RlFVRkZPMEZCUTJRc1owSkJRVWtzUTBGQlF5eFBRVUZQTEVOQlFVTXNTVUZCU1N4RFFVRkRMRU5CUVVNN1UwRkRkRUk3TzBGQlJVUXNaVUZCVHl4SlFVRkpMRU5CUVVNN1MwRkRaanM3UVVFeFEyZENMRmRCUVU4c1YwRTBRM2hDTEVsQlFVa3NiVUpCUVVjN1FVRkRTQ3haUVVGSkxFTkJRVU1zVlVGQlZTeERRVUZETEVsQlFVa3NRMEZCUXl4RlFVRkZMRU5CUVVNc1EwRkJRenM3UVVGRmVrSXNXVUZCU1N4SlFVRkpMRU5CUVVNc1RVRkJUU3hGUVVGRk8wRkJRMklzWjBKQlFVa3NRMEZCUXl4TlFVRk5MRU5CUVVNc1NVRkJTU3hEUVVGRExFTkJRVU03VTBGRGNrSTdPMEZCUlVRc1pVRkJUeXhKUVVGSkxFTkJRVU03UzBGRFpqczdRVUZ3UkdkQ0xGZEJRVThzVjBGelJIaENMRWxCUVVrc2JVSkJRVWM3UVVGRFNDeFpRVUZKTEVOQlFVTXNTMEZCU3l4RlFVRkZMRU5CUVVNN1FVRkRZaXhaUVVGSkxFTkJRVU1zVlVGQlZTeEhRVUZITEVsQlFVa3NRMEZCUXl4WFFVRlhMRU5CUVVNN1FVRkRia01zWlVGQlR5eEpRVUZKTEVOQlFVTTdTMEZEWmpzN096czdPenRCUVRGRVowSXNWMEZCVHl4WFFXbEZlRUlzWlVGQlpTdzRRa0ZCUnp0QlFVTmtMR1ZCUVU4c1JVRkJSU3hEUVVGRE8wdEJRMkk3T3pzN096czdPenRCUVc1RlowSXNWMEZCVHl4WFFUUkZlRUlzVDBGQlR5eHZRa0ZCUXl4TFFVRkxMRVZCUVVVN1dVRkRTQ3hGUVVGRkxFZEJRWGRDTEVsQlFVa3NRMEZCT1VJc1JVRkJSVHM3V1VGQlN5eGpRVUZqTERSQ1FVRkxMRWxCUVVrN08wRkJRM1JETEZsQlFVMHNWVUZCVlN4SFFVRkhMRWxCUVVrc1NVRkJTU3hEUVVGRExGZEJRVmNzUTBGQlF5eGpRVUZqTEVOQlFVTXNRMEZCUXp0QlFVTjRSQ3hsUVVGUExGVkJRVlVzUTBGQlF5eEhRVUZITEVOQlFVTXNTMEZCU3l4RFFVRkRMRU5CUVVNN1MwRkRhRU03TzFkQmFFWm5RaXhQUVVGUE96czdhMEpCUVZBc1QwRkJUeUlzSW1acGJHVWlPaUpRY205alpYTnpMbXB6SWl3aWMyOTFjbU5sVW05dmRDSTZJaTlWYzJWeWN5OU5ZWFIwVUdWeWNua3ZVMmwwWlhNdmNHOXdiVzkwYVc5dUlpd2ljMjkxY21ObGMwTnZiblJsYm5RaU9sc2lhVzF3YjNKMElDb2dZWE1nYkc5dmNDQm1jbTl0SUNjdUwyeHZiM0FuTzF4dVhHNWxlSEJ2Y25RZ1pHVm1ZWFZzZENCamJHRnpjeUJRY205alpYTnpJSHRjYmlBZ0lDQXZLbHh1SUNBZ0lDQWdJQ0JiYjJKcVpXTjBYVG9nVUhKdmNHVnlkR2xsYzF4dUlDQWdJQ0FnSUNCYlltOXZiR1ZoYmwwZ0tHOXdkR2x2Ym1Gc0tUb2dTWE1nVUhKdlkyVnpjeUJzWVhwNVAxeHVJQ0FnSUNvdlhHNGdJQ0FnWTI5dWMzUnlkV04wYjNJb2NISnZjSE1zSUdselRHRjZlU2tnZTF4dUlDQWdJQ0FnSUNCMGFHbHpMbWxrSUQwZ2JHOXZjQzVuWlhSUWNtOWpaWE56U1dRb0tUdGNibHh1SUNBZ0lDQWdJQ0IwYUdsekxsOXZia05zWldGdWRYQWdQU0FvS1NBOVBpQjdYRzRnSUNBZ0lDQWdJQ0FnSUNCMGFHbHpMbk4wYjNBb0tUdGNiaUFnSUNBZ0lDQWdJQ0FnSUhSb2FYTXViMjVEYkdWaGJuVndJRDBnZFc1a1pXWnBibVZrTzF4dUlDQWdJQ0FnSUNCOU8xeHVYRzRnSUNBZ0lDQWdJSFJvYVhNdVgyOXVRV04wYVhaaGRHVWdQU0FvS1NBOVBpQjBhR2x6TG05dVEyeGxZVzUxY0NBOUlIUm9hWE11WDI5dVEyeGxZVzUxY0R0Y2JseHVJQ0FnSUNBZ0lDQjBhR2x6TG5ObGRDaDBhR2x6TG1kbGRFUmxabUYxYkhSUWNtOXdjeWdwS1R0Y2JpQWdJQ0FnSUNBZ2RHaHBjeTV6WlhRb2NISnZjSE1wTzF4dVhHNGdJQ0FnSUNBZ0lIUm9hWE11YVhOTVlYcDVJRDBnYVhOTVlYcDVJSHg4SUdaaGJITmxPMXh1SUNBZ0lDQWdJQ0IwYUdsekxtbHpRV04wYVhabElEMGdabUZzYzJVN1hHNGdJQ0FnZlZ4dVhHNGdJQ0FnYzJWMEtIQnliM0J6S1NCN1hHNGdJQ0FnSUNBZ0lHWnZjaUFvYkdWMElHdGxlU0JwYmlCd2NtOXdjeWtnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdhV1lnS0hCeWIzQnpMbWhoYzA5M2JsQnliM0JsY25SNUtHdGxlU2twSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCMGFHbHpXMnRsZVYwZ1BTQndjbTl3YzF0clpYbGRPMXh1SUNBZ0lDQWdJQ0FnSUNBZ2ZWeHVJQ0FnSUNBZ0lDQjlYRzVjYmlBZ0lDQWdJQ0FnY21WMGRYSnVJSFJvYVhNN1hHNGdJQ0FnZlZ4dVhHNGdJQ0FnYzNSaGNuUW9LU0I3WEc0Z0lDQWdJQ0FnSUd4dmIzQXVZV04wYVhaaGRHVW9kR2hwY3k1cFpDd2dkR2hwY3lrN1hHNWNiaUFnSUNBZ0lDQWdkR2hwY3k1dmJrTnNaV0Z1ZFhBZ1BTQjBhR2x6TG05dVFXTjBhWFpoZEdVZ1BTQjFibVJsWm1sdVpXUTdYRzVjYmlBZ0lDQWdJQ0FnYVdZZ0tIUm9hWE11YjI1VGRHRnlkQ2tnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdkR2hwY3k1dmJsTjBZWEowS0hSb2FYTXBPMXh1SUNBZ0lDQWdJQ0I5WEc1Y2JpQWdJQ0FnSUNBZ2NtVjBkWEp1SUhSb2FYTTdYRzRnSUNBZ2ZWeHVYRzRnSUNBZ2MzUnZjQ2dwSUh0Y2JpQWdJQ0FnSUNBZ2JHOXZjQzVrWldGamRHbDJZWFJsS0hSb2FYTXVhV1FwTzF4dVhHNGdJQ0FnSUNBZ0lHbG1JQ2gwYUdsekxtOXVVM1J2Y0NrZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnZEdocGN5NXZibE4wYjNBb2RHaHBjeWs3WEc0Z0lDQWdJQ0FnSUgxY2JseHVJQ0FnSUNBZ0lDQnlaWFIxY200Z2RHaHBjenRjYmlBZ0lDQjlYRzVjYmlBZ0lDQnZibU5sS0NrZ2UxeHVJQ0FnSUNBZ0lDQjBhR2x6TG5OMFlYSjBLQ2s3WEc0Z0lDQWdJQ0FnSUhSb2FYTXViMjVCWTNScGRtRjBaU0E5SUhSb2FYTXVYMjl1UVdOMGFYWmhkR1U3WEc0Z0lDQWdJQ0FnSUhKbGRIVnliaUIwYUdsek8xeHVJQ0FnSUgxY2JseHVJQ0FnSUM4cVhHNGdJQ0FnSUNBZ0lDTWdSMlYwSUdSbFptRjFiSFFnUVdOMGFXOXVJSEJ5YjNCbGNuUnBaWE5jYmx4dUlDQWdJQ0FnSUNCQWNtVjBkWEp1SUZ0dlltcGxZM1JkWEc0Z0lDQWdLaTljYmlBZ0lDQm5aWFJFWldaaGRXeDBVSEp2Y0hNb0tTQjdYRzRnSUNBZ0lDQWdJSEpsZEhWeWJpQjdmVHRjYmlBZ0lDQjlYRzVjYmlBZ0lDQXZLbHh1SUNBZ0lDQWdJQ0FqSUVWNGRHVnVaQ0IwYUdseklGQnliMk5sYzNNZ2QybDBhQ0J1WlhjZ2NISnZjR1Z5ZEdsbGMxeHVJQ0FnSUNBZ0lDQWpJeUJTWlhSMWNtNXpJRzVsZHlCcGJuTjBZVzVqWlNCdlppQjBhR2x6SUZCeWIyTmxjM01uY3lCZ2NISnZkRzkwZVhCbFlDQjNhWFJvSUdWNGFYTjBhVzVuSUdGdVpDQnVaWGNnY0hKdmNHVnlkR2xsYzF4dVhHNGdJQ0FnSUNBZ0lFQndZWEpoYlNCYmIySnFaV04wWFNBb2IzQjBhVzl1WVd3cFhHNGdJQ0FnSUNBZ0lFQnlaWFIxY200Z1cxQnliMk5sYzNOZFhHNGdJQ0FnS2k5Y2JpQWdJQ0JwYm1obGNtbDBLSEJ5YjNCektTQjdYRzRnSUNBZ0lDQWdJR052Ym5OMElIc2dhV1FzSUM0dUxtbHVhR1Z5YVhSbFpGQnliM0J6SUgwZ1BTQjBhR2x6TzF4dUlDQWdJQ0FnSUNCamIyNXpkQ0J1WlhkUWNtOWpaWE56SUQwZ2JtVjNJSFJvYVhNdVkyOXVjM1J5ZFdOMGIzSW9hVzVvWlhKcGRHVmtVSEp2Y0hNcE8xeHVJQ0FnSUNBZ0lDQnlaWFIxY200Z2JtVjNVSEp2WTJWemN5NXpaWFFvY0hKdmNITXBPMXh1SUNBZ0lIMWNibjBpWFgwPVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvcHJvY2Vzcy9Qcm9jZXNzLmpzXG4gKiogbW9kdWxlIGlkID0gN1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9O1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX1Byb2Nlc3MyID0gcmVxdWlyZSgnLi4vcHJvY2Vzcy9Qcm9jZXNzJyk7XG5cbnZhciBfUHJvY2VzczMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9Qcm9jZXNzMik7XG5cbnZhciBfdXRpbHMgPSByZXF1aXJlKCcuLi9pbmMvdXRpbHMnKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoIXNlbGYpIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBjYWxsICYmICh0eXBlb2YgY2FsbCA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSA/IGNhbGwgOiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90IFwiICsgdHlwZW9mIHN1cGVyQ2xhc3MpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIGVudW1lcmFibGU6IGZhbHNlLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIDogc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzczsgfVxuXG52YXIgSW5wdXQgPSAoZnVuY3Rpb24gKF9Qcm9jZXNzKSB7XG4gICAgX2luaGVyaXRzKElucHV0LCBfUHJvY2Vzcyk7XG5cbiAgICBmdW5jdGlvbiBJbnB1dChpbml0aWFsVmFsdWVzLCBwb2xsKSB7XG4gICAgICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBJbnB1dCk7XG5cbiAgICAgICAgdmFyIF90aGlzID0gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgX1Byb2Nlc3MuY2FsbCh0aGlzKSk7XG5cbiAgICAgICAgX3RoaXMuc3RhdGUgPSBpbml0aWFsVmFsdWVzO1xuXG4gICAgICAgIGlmICgoMCwgX3V0aWxzLmlzRnVuYykocG9sbCkpIHtcbiAgICAgICAgICAgIF90aGlzLm9uRnJhbWVTdGFydCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gX3RoaXMubGF0ZXN0KF90aGlzLnBvbGwoKSk7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBfdGhpcztcbiAgICB9XG5cbiAgICAvKlxuICAgICAgICBNYW51YWxseSBhZGQgbGF0ZXN0IHZhbHVlc1xuICAgICAgICAgQHBhcmFtIFtvYmplY3RdXG4gICAgKi9cblxuICAgIElucHV0LnByb3RvdHlwZS5sYXRlc3QgPSBmdW5jdGlvbiBsYXRlc3QocHJvcHMpIHtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IF9leHRlbmRzKHt9LCB0aGlzLnN0YXRlLCBwcm9wcyk7XG4gICAgfTtcblxuICAgIHJldHVybiBJbnB1dDtcbn0pKF9Qcm9jZXNzMy5kZWZhdWx0KTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gSW5wdXQ7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5OeVl5OXBibkIxZEM5SmJuQjFkQzVxY3lKZExDSnVZVzFsY3lJNlcxMHNJbTFoY0hCcGJtZHpJam9pT3pzN096czdPenM3T3pzN096czdPenM3T3p0SlFVZHhRaXhMUVVGTE8yTkJRVXdzUzBGQlN6czdRVUZEZEVJc1lVRkVhVUlzUzBGQlN5eERRVU5XTEdGQlFXRXNSVUZCUlN4SlFVRkpMRVZCUVVVN09FSkJSR2hDTEV0QlFVczdPM0ZFUVVWc1FpeHRRa0ZCVHpzN1FVRkRVQ3hqUVVGTExFdEJRVXNzUjBGQlJ5eGhRVUZoTEVOQlFVTTdPMEZCUlROQ0xGbEJRVWtzVjBGUVNDeE5RVUZOTEVWQlQwa3NTVUZCU1N4RFFVRkRMRVZCUVVVN1FVRkRaQ3hyUWtGQlN5eFpRVUZaTEVkQlFVYzdkVUpCUVUwc1RVRkJTeXhOUVVGTkxFTkJRVU1zVFVGQlN5eEpRVUZKTEVWQlFVVXNRMEZCUXp0aFFVRkJMRU5CUVVNN1UwRkRkRVE3TzB0QlEwbzdPenM3T3p0QlFVRkJPMEZCVW1kQ0xGTkJRVXNzVjBGbGRFSXNUVUZCVFN4dFFrRkJReXhMUVVGTExFVkJRVVU3UVVGRFZpeFpRVUZKTEVOQlFVTXNTMEZCU3l4blFrRkJVU3hKUVVGSkxFTkJRVU1zUzBGQlN5eEZRVUZMTEV0QlFVc3NRMEZCUlN4RFFVRkRPMHRCUXpWRE96dFhRV3BDWjBJc1MwRkJTenM3TzJ0Q1FVRk1MRXRCUVVzaUxDSm1hV3hsSWpvaVNXNXdkWFF1YW5NaUxDSnpiM1Z5WTJWU2IyOTBJam9pTDFWelpYSnpMMDFoZEhSUVpYSnllUzlUYVhSbGN5OXdiM0J0YjNScGIyNGlMQ0p6YjNWeVkyVnpRMjl1ZEdWdWRDSTZXeUpwYlhCdmNuUWdVSEp2WTJWemN5Qm1jbTl0SUNjdUxpOXdjbTlqWlhOekwxQnliMk5sYzNNbk8xeHVhVzF3YjNKMElIc2dhWE5HZFc1aklIMGdabkp2YlNBbkxpNHZhVzVqTDNWMGFXeHpKenRjYmx4dVpYaHdiM0owSUdSbFptRjFiSFFnWTJ4aGMzTWdTVzV3ZFhRZ1pYaDBaVzVrY3lCUWNtOWpaWE56SUh0Y2JpQWdJQ0JqYjI1emRISjFZM1J2Y2locGJtbDBhV0ZzVm1Gc2RXVnpMQ0J3YjJ4c0tTQjdYRzRnSUNBZ0lDQWdJSE4xY0dWeUtDazdYRzRnSUNBZ0lDQWdJSFJvYVhNdWMzUmhkR1VnUFNCcGJtbDBhV0ZzVm1Gc2RXVnpPMXh1WEc0Z0lDQWdJQ0FnSUdsbUlDaHBjMFoxYm1Nb2NHOXNiQ2twSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJSFJvYVhNdWIyNUdjbUZ0WlZOMFlYSjBJRDBnS0NrZ1BUNGdkR2hwY3k1c1lYUmxjM1FvZEdocGN5NXdiMnhzS0NrcE8xeHVJQ0FnSUNBZ0lDQjlYRzRnSUNBZ2ZWeHVYRzRnSUNBZ0x5cGNiaUFnSUNBZ0lDQWdUV0Z1ZFdGc2JIa2dZV1JrSUd4aGRHVnpkQ0IyWVd4MVpYTmNibHh1SUNBZ0lDQWdJQ0JBY0dGeVlXMGdXMjlpYW1WamRGMWNiaUFnSUNBcUwxeHVJQ0FnSUd4aGRHVnpkQ2h3Y205d2N5a2dlMXh1SUNBZ0lDQWdJQ0IwYUdsekxuTjBZWFJsSUQwZ2V5QXVMaTUwYUdsekxuTjBZWFJsTENBdUxpNXdjbTl3Y3lCOU8xeHVJQ0FnSUgxY2JuMWNiaUpkZlE9PVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvaW5wdXQvSW5wdXQuanNcbiAqKiBtb2R1bGUgaWQgPSA4XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzLmRlZmF1bHQgPSBzdGFnZ2VyO1xuXG52YXIgX1R3ZWVuID0gcmVxdWlyZSgnLi4vYWN0aW9ucy9Ud2VlbicpO1xuXG52YXIgX1R3ZWVuMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX1R3ZWVuKTtcblxudmFyIF9wcmVzZXRFYXNpbmcgPSByZXF1aXJlKCcuLi9hY3Rpb25zL2Vhc2luZy9wcmVzZXQtZWFzaW5nJyk7XG5cbnZhciBfcHJlc2V0RWFzaW5nMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3ByZXNldEVhc2luZyk7XG5cbnZhciBfdXRpbHMgPSByZXF1aXJlKCcuL3V0aWxzJyk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbnZhciBERUZBVUxUX0lOVEVSVkFMID0gMTAwO1xuXG5mdW5jdGlvbiBzdGFnZ2VyKGFycmF5LCBjYWxsYmFjaywgcHJvcHMpIHtcbiAgICB2YXIgYXJyYXlMZW5ndGggPSBhcnJheS5sZW5ndGg7XG4gICAgdmFyIHByb3BzSXNJbnRlcnZhbCA9ICgwLCBfdXRpbHMuaXNOdW0pKHByb3BzKTtcbiAgICB2YXIgaW50ZXJ2YWwgPSBwcm9wc0lzSW50ZXJ2YWwgPyBwcm9wcyA6IHByb3BzLmludGVydmFsIHx8IERFRkFVTFRfSU5URVJWQUw7XG4gICAgdmFyIHByZXZJbmRleCA9IC0xO1xuXG4gICAgdmFyIHN0YWdnZXJUd2VlbiA9IG5ldyBfVHdlZW4yLmRlZmF1bHQoe1xuICAgICAgICBkdXJhdGlvbjogaW50ZXJ2YWwgKiBhcnJheUxlbmd0aCxcbiAgICAgICAgdmFsdWVzOiB7XG4gICAgICAgICAgICBpOiB7XG4gICAgICAgICAgICAgICAgZnJvbTogMCxcbiAgICAgICAgICAgICAgICB0bzogYXJyYXlMZW5ndGggLSAxLFxuICAgICAgICAgICAgICAgIHJvdW5kOiB0cnVlLFxuICAgICAgICAgICAgICAgIGVhc2U6IHByb3BzSXNJbnRlcnZhbCA/IF9wcmVzZXRFYXNpbmcyLmRlZmF1bHQubGluZWFyIDogcHJvcHMuZWFzZSB8fCBfcHJlc2V0RWFzaW5nMi5kZWZhdWx0LmxpbmVhclxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBvblJlbmRlcjogZnVuY3Rpb24gKHR3ZWVuKSB7XG4gICAgICAgICAgICB2YXIgaSA9IHR3ZWVuLnN0YXRlLmk7XG4gICAgICAgICAgICB2YXIgZ2FwSW5kZXggPSBwcmV2SW5kZXggKyAxO1xuXG4gICAgICAgICAgICBmb3IgKDsgZ2FwSW5kZXggPD0gaTsgZ2FwSW5kZXgrKykge1xuICAgICAgICAgICAgICAgIGNhbGxiYWNrKGFycmF5W2dhcEluZGV4XSwgZ2FwSW5kZXgpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBwcmV2SW5kZXggPSBpO1xuICAgICAgICB9LFxuICAgICAgICBvbkNvbXBsZXRlOiBwcm9wc0lzSW50ZXJ2YWwgPyB1bmRlZmluZWQgOiBwcm9wcy5vbkNvbXBsZXRlXG4gICAgfSk7XG5cbiAgICBzdGFnZ2VyVHdlZW4uc3RhcnQoKTtcblxuICAgIHJldHVybiBzdGFnZ2VyVHdlZW47XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5OeVl5OXBibU12YzNSaFoyZGxjaTVxY3lKZExDSnVZVzFsY3lJNlcxMHNJbTFoY0hCcGJtZHpJam9pT3pzN2EwSkJUWGRDTEU5QlFVODdPenM3T3pzN096czdPenM3TzBGQlJpOUNMRWxCUVUwc1owSkJRV2RDTEVkQlFVY3NSMEZCUnl4RFFVRkRPenRCUVVWa0xGTkJRVk1zVDBGQlR5eERRVUZETEV0QlFVc3NSVUZCUlN4UlFVRlJMRVZCUVVVc1MwRkJTeXhGUVVGRk8wRkJRM0JFTEZGQlFVMHNWMEZCVnl4SFFVRkhMRXRCUVVzc1EwRkJReXhOUVVGTkxFTkJRVU03UVVGRGFrTXNVVUZCVFN4bFFVRmxMRWRCUVVjc1YwRk9ia0lzUzBGQlN5eEZRVTF2UWl4TFFVRkxMRU5CUVVNc1EwRkJRenRCUVVOeVF5eFJRVUZOTEZGQlFWRXNSMEZCUnl4bFFVRmxMRWRCUVVjc1MwRkJTeXhIUVVGSExFdEJRVXNzUTBGQlF5eFJRVUZSTEVsQlFVa3NaMEpCUVdkQ0xFTkJRVU03UVVGRE9VVXNVVUZCU1N4VFFVRlRMRWRCUVVjc1EwRkJReXhEUVVGRExFTkJRVU03TzBGQlJXNUNMRkZCUVUwc1dVRkJXU3hIUVVGSExHOUNRVUZWTzBGQlF6TkNMR2RDUVVGUkxFVkJRVVVzVVVGQlVTeEhRVUZITEZkQlFWYzdRVUZEYUVNc1kwRkJUU3hGUVVGRk8wRkJRMG9zWVVGQlF5eEZRVUZGTzBGQlEwTXNiMEpCUVVrc1JVRkJSU3hEUVVGRE8wRkJRMUFzYTBKQlFVVXNSVUZCUlN4WFFVRlhMRWRCUVVjc1EwRkJRenRCUVVOdVFpeHhRa0ZCU3l4RlFVRkZMRWxCUVVrN1FVRkRXQ3h2UWtGQlNTeEZRVUZGTEdWQlFXVXNSMEZCUnl4MVFrRkJUeXhOUVVGTkxFZEJRVWNzUzBGQlN5eERRVUZETEVsQlFVa3NTVUZCU1N4MVFrRkJUeXhOUVVGTk8yRkJRM1JGTzFOQlEwbzdRVUZEUkN4blFrRkJVU3hGUVVGRkxGVkJRVU1zUzBGQlN5eEZRVUZMTzBGQlEycENMR2RDUVVGTkxFTkJRVU1zUjBGQlJ5eExRVUZMTEVOQlFVTXNTMEZCU3l4RFFVRkRMRU5CUVVNc1EwRkJRenRCUVVONFFpeG5Ra0ZCU1N4UlFVRlJMRWRCUVVjc1UwRkJVeXhIUVVGSExFTkJRVU1zUTBGQlF6czdRVUZGTjBJc2JVSkJRVThzVVVGQlVTeEpRVUZKTEVOQlFVTXNSVUZCUlN4UlFVRlJMRVZCUVVVc1JVRkJSVHRCUVVNNVFpeDNRa0ZCVVN4RFFVRkRMRXRCUVVzc1EwRkJReXhSUVVGUkxFTkJRVU1zUlVGQlJTeFJRVUZSTEVOQlFVTXNRMEZCUXp0aFFVTjJRenM3UVVGRlJDeHhRa0ZCVXl4SFFVRkhMRU5CUVVNc1EwRkJRenRUUVVOcVFqdEJRVU5FTEd0Q1FVRlZMRVZCUVVVc1pVRkJaU3hIUVVGSExGTkJRVk1zUjBGQlJ5eExRVUZMTEVOQlFVTXNWVUZCVlR0TFFVTTNSQ3hEUVVGRExFTkJRVU03TzBGQlJVZ3NaMEpCUVZrc1EwRkJReXhMUVVGTExFVkJRVVVzUTBGQlF6czdRVUZGY2tJc1YwRkJUeXhaUVVGWkxFTkJRVU03UTBGRGRrSWlMQ0ptYVd4bElqb2ljM1JoWjJkbGNpNXFjeUlzSW5OdmRYSmpaVkp2YjNRaU9pSXZWWE5sY25NdlRXRjBkRkJsY25KNUwxTnBkR1Z6TDNCdmNHMXZkR2x2YmlJc0luTnZkWEpqWlhORGIyNTBaVzUwSWpwYkltbHRjRzl5ZENCVWQyVmxiaUJtY205dElDY3VMaTloWTNScGIyNXpMMVIzWldWdUp6dGNibWx0Y0c5eWRDQmxZWE5wYm1jZ1puSnZiU0FuTGk0dllXTjBhVzl1Y3k5bFlYTnBibWN2Y0hKbGMyVjBMV1ZoYzJsdVp5YzdYRzVwYlhCdmNuUWdleUJwYzA1MWJTQjlJR1p5YjIwZ0p5NHZkWFJwYkhNbk8xeHVYRzVqYjI1emRDQkVSVVpCVlV4VVgwbE9WRVZTVmtGTUlEMGdNVEF3TzF4dVhHNWxlSEJ2Y25RZ1pHVm1ZWFZzZENCbWRXNWpkR2x2YmlCemRHRm5aMlZ5S0dGeWNtRjVMQ0JqWVd4c1ltRmpheXdnY0hKdmNITXBJSHRjYmlBZ0lDQmpiMjV6ZENCaGNuSmhlVXhsYm1kMGFDQTlJR0Z5Y21GNUxteGxibWQwYUR0Y2JpQWdJQ0JqYjI1emRDQndjbTl3YzBselNXNTBaWEoyWVd3Z1BTQnBjMDUxYlNod2NtOXdjeWs3WEc0Z0lDQWdZMjl1YzNRZ2FXNTBaWEoyWVd3Z1BTQndjbTl3YzBselNXNTBaWEoyWVd3Z1B5QndjbTl3Y3lBNklIQnliM0J6TG1sdWRHVnlkbUZzSUh4OElFUkZSa0ZWVEZSZlNVNVVSVkpXUVV3N1hHNGdJQ0FnYkdWMElIQnlaWFpKYm1SbGVDQTlJQzB4TzF4dVhHNGdJQ0FnWTI5dWMzUWdjM1JoWjJkbGNsUjNaV1Z1SUQwZ2JtVjNJRlIzWldWdUtIdGNiaUFnSUNBZ0lDQWdaSFZ5WVhScGIyNDZJR2x1ZEdWeWRtRnNJQ29nWVhKeVlYbE1aVzVuZEdnc1hHNGdJQ0FnSUNBZ0lIWmhiSFZsY3pvZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnYVRvZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lHWnliMjA2SURBc1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2RHODZJR0Z5Y21GNVRHVnVaM1JvSUMwZ01TeGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQnliM1Z1WkRvZ2RISjFaU3hjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0JsWVhObE9pQndjbTl3YzBselNXNTBaWEoyWVd3Z1B5QmxZWE5wYm1jdWJHbHVaV0Z5SURvZ2NISnZjSE11WldGelpTQjhmQ0JsWVhOcGJtY3ViR2x1WldGeVhHNGdJQ0FnSUNBZ0lDQWdJQ0I5WEc0Z0lDQWdJQ0FnSUgwc1hHNGdJQ0FnSUNBZ0lHOXVVbVZ1WkdWeU9pQW9kSGRsWlc0cElEMCtJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lHTnZibk4wSUdrZ1BTQjBkMlZsYmk1emRHRjBaUzVwTzF4dUlDQWdJQ0FnSUNBZ0lDQWdiR1YwSUdkaGNFbHVaR1Y0SUQwZ2NISmxka2x1WkdWNElDc2dNVHRjYmx4dUlDQWdJQ0FnSUNBZ0lDQWdabTl5SUNnN0lHZGhjRWx1WkdWNElEdzlJR2s3SUdkaGNFbHVaR1Y0S3lzcElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQmpZV3hzWW1GamF5aGhjbkpoZVZ0bllYQkpibVJsZUYwc0lHZGhjRWx1WkdWNEtUdGNiaUFnSUNBZ0lDQWdJQ0FnSUgxY2JseHVJQ0FnSUNBZ0lDQWdJQ0FnY0hKbGRrbHVaR1Y0SUQwZ2FUdGNiaUFnSUNBZ0lDQWdmU3hjYmlBZ0lDQWdJQ0FnYjI1RGIyMXdiR1YwWlRvZ2NISnZjSE5KYzBsdWRHVnlkbUZzSUQ4Z2RXNWtaV1pwYm1Wa0lEb2djSEp2Y0hNdWIyNURiMjF3YkdWMFpWeHVJQ0FnSUgwcE8xeHVYRzRnSUNBZ2MzUmhaMmRsY2xSM1pXVnVMbk4wWVhKMEtDazdYRzVjYmlBZ0lDQnlaWFIxY200Z2MzUmhaMmRsY2xSM1pXVnVPMXh1ZlNKZGZRPT1cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2luYy9zdGFnZ2VyLmpzXG4gKiogbW9kdWxlIGlkID0gOVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9O1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0cy5kZWZhdWx0ID0gdGltZWxpbmU7XG5cbnZhciBfVHdlZW4gPSByZXF1aXJlKCcuLi9hY3Rpb25zL1R3ZWVuJyk7XG5cbnZhciBfVHdlZW4yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfVHdlZW4pO1xuXG52YXIgX3ByZXNldEVhc2luZyA9IHJlcXVpcmUoJy4uL2FjdGlvbnMvZWFzaW5nL3ByZXNldC1lYXNpbmcnKTtcblxudmFyIF9wcmVzZXRFYXNpbmcyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcHJlc2V0RWFzaW5nKTtcblxudmFyIF9jYWxjID0gcmVxdWlyZSgnLi9jYWxjJyk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbi8qXG4gICAgQHBhcmFtIFthcnJheV1cbiAgICAgICAgU2VxdWVudGlhbCBhcnJheSBvZiB0d2VlbnMsIGVhY2ggaXRlbSBjYW4gYmUgYSB0d2VlbiBvciBkZWZpbml0aW9uIG9iajpcblxuICAgICAgICBbXG4gICAgICAgICAgICBuZXcgVHdlZW4oKSxcbiAgICAgICAgICAgIHN0YWdnZXIoKSxcbiAgICAgICAgICAgIHRpbWVsaW5lKCksXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdHdlZW46IG5ldyBUd2VlbigpLFxuICAgICAgICAgICAgICAgIGF0OiAxMDAsXG4gICAgICAgICAgICAgICAgb2Zmc2V0OiBcIis9MTAwXCJcbiAgICAgICAgICAgIH1cbiAgICAgICAgXVxuKi9cbnZhciBhbmFseXplID0gZnVuY3Rpb24gKGRlZnMpIHtcbiAgICB2YXIgdGltZWxpbmUgPSBbXTtcbiAgICB2YXIgbnVtRGVmcyA9IGRlZnMubGVuZ3RoO1xuICAgIHZhciBjdXJyZW50UGxheWhlYWQgPSAwO1xuXG4gICAgdmFyIF9sb29wID0gZnVuY3Rpb24gKGkpIHtcbiAgICAgICAgdmFyIGRlZiA9IGRlZnNbaV07XG4gICAgICAgIHZhciBkZWZJc09iaiA9IGRlZi50d2VlbiA/IHRydWUgOiBmYWxzZTtcbiAgICAgICAgdmFyIHR3ZWVuID0gZGVmSXNPYmogPyBkZWYudHdlZW4gOiBkZWY7XG5cbiAgICAgICAgY3VycmVudFBsYXloZWFkICs9IGRlZklzT2JqICYmIGRlZi5vZmZzZXQgPyBkZWYuYXQgfHwgKDAsIF9jYWxjLnJlbGF0aXZlVmFsdWUpKGN1cnJlbnRQbGF5aGVhZCwgZGVmLm9mZnNldCkgOiAwO1xuXG4gICAgICAgIHZhciBkdXJhdGlvbiA9IDA7XG4gICAgICAgIGZvciAodmFyIGtleSBpbiB0d2Vlbi52YWx1ZXMpIHtcbiAgICAgICAgICAgIGlmICh0d2Vlbi52YWx1ZXMuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgICAgICAgIHZhciB2YWx1ZSA9IHR3ZWVuLnZhbHVlc1trZXldO1xuICAgICAgICAgICAgICAgIGR1cmF0aW9uID0gTWF0aC5tYXgoZHVyYXRpb24sIHZhbHVlLmR1cmF0aW9uKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHRpbWVsaW5lLnB1c2goe1xuICAgICAgICAgICAgZnJvbTogY3VycmVudFBsYXloZWFkLFxuICAgICAgICAgICAgZHVyYXRpb246IGR1cmF0aW9uLFxuICAgICAgICAgICAgZmlyZTogZnVuY3Rpb24gKHRpbWUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHdlZW4uc2Vla1RpbWUodGltZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGN1cnJlbnRQbGF5aGVhZCArPSB0d2Vlbi5kdXJhdGlvbjtcbiAgICB9O1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBudW1EZWZzOyBpKyspIHtcbiAgICAgICAgX2xvb3AoaSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHsgdG90YWxUaW1lOiBjdXJyZW50UGxheWhlYWQsIHRpbWVsaW5lOiB0aW1lbGluZSB9O1xufTtcblxudmFyIHNldFR3ZWVucyA9IGZ1bmN0aW9uIChfcmVmKSB7XG4gICAgdmFyIGVsYXBzZWQgPSBfcmVmLmVsYXBzZWQ7XG4gICAgdmFyIHRpbWVsaW5lID0gX3JlZi50aW1lbGluZTtcbiAgICB2YXIgdGltZWxpbmVMZW5ndGggPSBfcmVmLnRpbWVsaW5lTGVuZ3RoO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aW1lbGluZUxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHZhciBfdHdlZW4gPSB0aW1lbGluZVtpXTtcbiAgICAgICAgdmFyIHR3ZWVuVGltZSA9IGVsYXBzZWQgLSBfdHdlZW4uZnJvbTtcblxuICAgICAgICBpZiAodHdlZW5UaW1lID4gMCAmJiB0d2VlblRpbWUgPCBfdHdlZW4uZHVyYXRpb24pIHtcbiAgICAgICAgICAgIF90d2Vlbi5maXJlKHR3ZWVuVGltZSk7XG4gICAgICAgIH1cbiAgICB9XG59O1xuXG5mdW5jdGlvbiB0aW1lbGluZShkZWYpIHtcbiAgICB2YXIgcHJvcHMgPSBhcmd1bWVudHMubGVuZ3RoIDw9IDEgfHwgYXJndW1lbnRzWzFdID09PSB1bmRlZmluZWQgPyB7fSA6IGFyZ3VtZW50c1sxXTtcblxuICAgIHZhciBfYW5hbHl6ZSA9IGFuYWx5emUoZGVmKTtcblxuICAgIHZhciB0b3RhbFRpbWUgPSBfYW5hbHl6ZS50b3RhbFRpbWU7XG4gICAgdmFyIHRpbWVsaW5lID0gX2FuYWx5emUudGltZWxpbmU7XG5cbiAgICByZXR1cm4gbmV3IF9Ud2VlbjIuZGVmYXVsdChfZXh0ZW5kcyh7fSwgcHJvcHMsIHtcbiAgICAgICAgZHVyYXRpb246IHRvdGFsVGltZSxcbiAgICAgICAgZWFzZTogX3ByZXNldEVhc2luZzIuZGVmYXVsdC5saW5lYXIsXG4gICAgICAgIHZhbHVlczoge1xuICAgICAgICAgICAgcDogMVxuICAgICAgICB9LFxuICAgICAgICB0aW1lbGluZTogdGltZWxpbmUsXG4gICAgICAgIHRpbWVsaW5lTGVuZ3RoOiB0aW1lbGluZS5sZW5ndGgsXG4gICAgICAgIG9uUmVuZGVyOiBzZXRUd2VlbnNcbiAgICB9KSk7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5OeVl5OXBibU12ZEdsdFpXeHBibVV1YW5NaVhTd2libUZ0WlhNaU9sdGRMQ0p0WVhCd2FXNW5jeUk2SWpzN096czdhMEpCSzBSM1FpeFJRVUZST3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3p0QlFUVkRhRU1zU1VGQlRTeFBRVUZQTEVkQlFVY3NWVUZCUXl4SlFVRkpMRVZCUVVzN1FVRkRkRUlzVVVGQlRTeFJRVUZSTEVkQlFVY3NSVUZCUlN4RFFVRkRPMEZCUTNCQ0xGRkJRVTBzVDBGQlR5eEhRVUZITEVsQlFVa3NRMEZCUXl4TlFVRk5MRU5CUVVNN1FVRkROVUlzVVVGQlNTeGxRVUZsTEVkQlFVY3NRMEZCUXl4RFFVRkRPenN3UWtGRlppeERRVUZETzBGQlEwNHNXVUZCVFN4SFFVRkhMRWRCUVVjc1NVRkJTU3hEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETzBGQlEzQkNMRmxCUVUwc1VVRkJVU3hIUVVGSExFZEJRVWNzUTBGQlF5eExRVUZMTEVkQlFVY3NTVUZCU1N4SFFVRkhMRXRCUVVzc1EwRkJRenRCUVVNeFF5eFpRVUZOTEV0QlFVc3NSMEZCUnl4QlFVRkRMRkZCUVZFc1IwRkJTU3hIUVVGSExFTkJRVU1zUzBGQlN5eEhRVUZITEVkQlFVY3NRMEZCUXpzN1FVRkZNME1zZFVKQlFXVXNTVUZCU3l4QlFVRkRMRkZCUVZFc1NVRkJTU3hIUVVGSExFTkJRVU1zVFVGQlRTeEhRVU4yUXl4SFFVRkhMRU5CUVVNc1JVRkJSU3hKUVVGSkxGVkJOVUppTEdGQlFXRXNSVUUwUW1Nc1pVRkJaU3hGUVVGRkxFZEJRVWNzUTBGQlF5eE5RVUZOTEVOQlFVTXNSMEZCUnl4RFFVRkRMRUZCUVVNc1EwRkJRenM3UVVGRk9VUXNXVUZCU1N4UlFVRlJMRWRCUVVjc1EwRkJReXhEUVVGRE8wRkJRMnBDTEdGQlFVc3NTVUZCU1N4SFFVRkhMRWxCUVVrc1MwRkJTeXhEUVVGRExFMUJRVTBzUlVGQlJUdEJRVU14UWl4blFrRkJTU3hMUVVGTExFTkJRVU1zVFVGQlRTeERRVUZETEdOQlFXTXNRMEZCUXl4SFFVRkhMRU5CUVVNc1JVRkJSVHRCUVVOc1F5eHZRa0ZCVFN4TFFVRkxMRWRCUVVjc1MwRkJTeXhEUVVGRExFMUJRVTBzUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXp0QlFVTm9ReXgzUWtGQlVTeEhRVUZITEVsQlFVa3NRMEZCUXl4SFFVRkhMRU5CUVVNc1VVRkJVU3hGUVVGRkxFdEJRVXNzUTBGQlF5eFJRVUZSTEVOQlFVTXNRMEZCUXp0aFFVTnFSRHRUUVVOS096dEJRVVZFTEdkQ1FVRlJMRU5CUVVNc1NVRkJTU3hEUVVGRE8wRkJRMVlzWjBKQlFVa3NSVUZCUlN4bFFVRmxPMEZCUTNKQ0xHOUNRVUZSTEVWQlFVVXNVVUZCVVR0QlFVTnNRaXhuUWtGQlNTeEZRVUZGTEZWQlFVTXNTVUZCU1R0MVFrRkJTeXhMUVVGTExFTkJRVU1zVVVGQlVTeERRVUZETEVsQlFVa3NRMEZCUXp0aFFVRkJPMU5CUTNaRExFTkJRVU1zUTBGQlF6czdRVUZGU0N4MVFrRkJaU3hKUVVGSkxFdEJRVXNzUTBGQlF5eFJRVUZSTEVOQlFVTTdPenRCUVhSQ2RFTXNVMEZCU3l4SlFVRkpMRU5CUVVNc1IwRkJSeXhEUVVGRExFVkJRVVVzUTBGQlF5eEhRVUZITEU5QlFVOHNSVUZCUlN4RFFVRkRMRVZCUVVVc1JVRkJSVHRqUVVGNlFpeERRVUZETzB0QmRVSlVPenRCUVVWRUxGZEJRVThzUlVGQlJTeFRRVUZUTEVWQlFVVXNaVUZCWlN4RlFVRkZMRkZCUVZFc1JVRkJVaXhSUVVGUkxFVkJRVVVzUTBGQlF6dERRVU51UkN4RFFVRkRPenRCUVVWR0xFbEJRVTBzVTBGQlV5eEhRVUZITEdkQ1FVRXlRenRSUVVGNFF5eFBRVUZQTEZGQlFWQXNUMEZCVHp0UlFVRkZMRkZCUVZFc1VVRkJVaXhSUVVGUk8xRkJRVVVzWTBGQll5eFJRVUZrTEdOQlFXTTdPMEZCUTJ4RUxGTkJRVXNzU1VGQlNTeERRVUZETEVkQlFVY3NRMEZCUXl4RlFVRkZMRU5CUVVNc1IwRkJSeXhqUVVGakxFVkJRVVVzUTBGQlF5eEZRVUZGTEVWQlFVVTdRVUZEY2tNc1dVRkJUU3hOUVVGTExFZEJRVWNzVVVGQlVTeERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRPMEZCUXpGQ0xGbEJRVTBzVTBGQlV5eEhRVUZITEU5QlFVOHNSMEZCUnl4TlFVRkxMRU5CUVVNc1NVRkJTU3hEUVVGRE96dEJRVVYyUXl4WlFVRkpMRk5CUVZNc1IwRkJSeXhEUVVGRExFbEJRVWtzVTBGQlV5eEhRVUZITEUxQlFVc3NRMEZCUXl4UlFVRlJMRVZCUVVVN1FVRkROME1zYTBKQlFVc3NRMEZCUXl4SlFVRkpMRU5CUVVNc1UwRkJVeXhEUVVGRExFTkJRVU03VTBGRGVrSTdTMEZEU2p0RFFVTktMRU5CUVVNN08wRkJSV0VzVTBGQlV5eFJRVUZSTEVOQlFVTXNSMEZCUnl4RlFVRmpPMUZCUVZvc1MwRkJTeXg1UkVGQlJ5eEZRVUZGT3p0dFFrRkRXaXhQUVVGUExFTkJRVU1zUjBGQlJ5eERRVUZET3p0UlFVRndReXhUUVVGVExGbEJRVlFzVTBGQlV6dFJRVUZGTEZGQlFWRXNXVUZCVWl4UlFVRlJPenRCUVVVelFpeFhRVUZQTEdsRFFVTkJMRXRCUVVzN1FVRkRVaXhuUWtGQlVTeEZRVUZGTEZOQlFWTTdRVUZEYmtJc1dVRkJTU3hGUVVGRkxIVkNRVUZQTEUxQlFVMDdRVUZEYmtJc1kwRkJUU3hGUVVGRk8wRkJRMG9zWVVGQlF5eEZRVUZGTEVOQlFVTTdVMEZEVUR0QlFVTkVMR2RDUVVGUkxFVkJRVVVzVVVGQlVUdEJRVU5zUWl4elFrRkJZeXhGUVVGRkxGRkJRVkVzUTBGQlF5eE5RVUZOTzBGQlF5OUNMR2RDUVVGUkxFVkJRVVVzVTBGQlV6dFBRVU55UWl4RFFVRkRPME5CUTA0aUxDSm1hV3hsSWpvaWRHbHRaV3hwYm1VdWFuTWlMQ0p6YjNWeVkyVlNiMjkwSWpvaUwxVnpaWEp6TDAxaGRIUlFaWEp5ZVM5VGFYUmxjeTl3YjNCdGIzUnBiMjRpTENKemIzVnlZMlZ6UTI5dWRHVnVkQ0k2V3lKcGJYQnZjblFnVkhkbFpXNGdabkp2YlNBbkxpNHZZV04wYVc5dWN5OVVkMlZsYmljN1hHNXBiWEJ2Y25RZ1pXRnphVzVuSUdaeWIyMGdKeTR1TDJGamRHbHZibk12WldGemFXNW5MM0J5WlhObGRDMWxZWE5wYm1jbk8xeHVhVzF3YjNKMElIc2djbVZzWVhScGRtVldZV3gxWlNCOUlHWnliMjBnSnk0dlkyRnNZeWM3WEc1Y2JpOHFYRzRnSUNBZ1FIQmhjbUZ0SUZ0aGNuSmhlVjFjYmlBZ0lDQWdJQ0FnVTJWeGRXVnVkR2xoYkNCaGNuSmhlU0J2WmlCMGQyVmxibk1zSUdWaFkyZ2dhWFJsYlNCallXNGdZbVVnWVNCMGQyVmxiaUJ2Y2lCa1pXWnBibWwwYVc5dUlHOWlhanBjYmx4dUlDQWdJQ0FnSUNCYlhHNGdJQ0FnSUNBZ0lDQWdJQ0J1WlhjZ1ZIZGxaVzRvS1N4Y2JpQWdJQ0FnSUNBZ0lDQWdJSE4wWVdkblpYSW9LU3hjYmlBZ0lDQWdJQ0FnSUNBZ0lIUnBiV1ZzYVc1bEtDa3NYRzRnSUNBZ0lDQWdJQ0FnSUNCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2RIZGxaVzQ2SUc1bGR5QlVkMlZsYmlncExGeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lHRjBPaUF4TURBc1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2IyWm1jMlYwT2lCY0lpczlNVEF3WENKY2JpQWdJQ0FnSUNBZ0lDQWdJSDFjYmlBZ0lDQWdJQ0FnWFZ4dUtpOWNibU52Ym5OMElHRnVZV3g1ZW1VZ1BTQW9aR1ZtY3lrZ1BUNGdlMXh1SUNBZ0lHTnZibk4wSUhScGJXVnNhVzVsSUQwZ1cxMDdYRzRnSUNBZ1kyOXVjM1FnYm5WdFJHVm1jeUE5SUdSbFpuTXViR1Z1WjNSb08xeHVJQ0FnSUd4bGRDQmpkWEp5Wlc1MFVHeGhlV2hsWVdRZ1BTQXdPMXh1WEc0Z0lDQWdabTl5SUNoc1pYUWdhU0E5SURBN0lHa2dQQ0J1ZFcxRVpXWnpPeUJwS3lzcElIdGNiaUFnSUNBZ0lDQWdZMjl1YzNRZ1pHVm1JRDBnWkdWbWMxdHBYVHRjYmlBZ0lDQWdJQ0FnWTI5dWMzUWdaR1ZtU1hOUFltb2dQU0JrWldZdWRIZGxaVzRnUHlCMGNuVmxJRG9nWm1Gc2MyVTdYRzRnSUNBZ0lDQWdJR052Ym5OMElIUjNaV1Z1SUQwZ0tHUmxaa2x6VDJKcUtTQS9JR1JsWmk1MGQyVmxiaUE2SUdSbFpqdGNibHh1SUNBZ0lDQWdJQ0JqZFhKeVpXNTBVR3hoZVdobFlXUWdLejBnS0Noa1pXWkpjMDlpYWlBbUppQmtaV1l1YjJabWMyVjBLU0EvWEc0Z0lDQWdJQ0FnSUNBZ0lDQmtaV1l1WVhRZ2ZId2djbVZzWVhScGRtVldZV3gxWlNoamRYSnlaVzUwVUd4aGVXaGxZV1FzSUdSbFppNXZabVp6WlhRcElEb2dNQ2s3WEc1Y2JpQWdJQ0FnSUNBZ2JHVjBJR1IxY21GMGFXOXVJRDBnTUR0Y2JpQWdJQ0FnSUNBZ1ptOXlJQ2hzWlhRZ2EyVjVJR2x1SUhSM1pXVnVMblpoYkhWbGN5a2dlMXh1SUNBZ0lDQWdJQ0FnSUNBZ2FXWWdLSFIzWldWdUxuWmhiSFZsY3k1b1lYTlBkMjVRY205d1pYSjBlU2hyWlhrcEtTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdZMjl1YzNRZ2RtRnNkV1VnUFNCMGQyVmxiaTUyWVd4MVpYTmJhMlY1WFR0Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCa2RYSmhkR2x2YmlBOUlFMWhkR2d1YldGNEtHUjFjbUYwYVc5dUxDQjJZV3gxWlM1a2RYSmhkR2x2YmlrN1hHNGdJQ0FnSUNBZ0lDQWdJQ0I5WEc0Z0lDQWdJQ0FnSUgxY2JseHVJQ0FnSUNBZ0lDQjBhVzFsYkdsdVpTNXdkWE5vS0h0Y2JpQWdJQ0FnSUNBZ0lDQWdJR1p5YjIwNklHTjFjbkpsYm5SUWJHRjVhR1ZoWkN4Y2JpQWdJQ0FnSUNBZ0lDQWdJR1IxY21GMGFXOXVPaUJrZFhKaGRHbHZiaXhjYmlBZ0lDQWdJQ0FnSUNBZ0lHWnBjbVU2SUNoMGFXMWxLU0E5UGlCMGQyVmxiaTV6WldWclZHbHRaU2gwYVcxbEtWeHVJQ0FnSUNBZ0lDQjlLVHRjYmx4dUlDQWdJQ0FnSUNCamRYSnlaVzUwVUd4aGVXaGxZV1FnS3owZ2RIZGxaVzR1WkhWeVlYUnBiMjQ3WEc0Z0lDQWdmVnh1WEc0Z0lDQWdjbVYwZFhKdUlIc2dkRzkwWVd4VWFXMWxPaUJqZFhKeVpXNTBVR3hoZVdobFlXUXNJSFJwYldWc2FXNWxJSDA3WEc1OU8xeHVYRzVqYjI1emRDQnpaWFJVZDJWbGJuTWdQU0FvZXlCbGJHRndjMlZrTENCMGFXMWxiR2x1WlN3Z2RHbHRaV3hwYm1WTVpXNW5kR2dnZlNrZ1BUNGdlMXh1SUNBZ0lHWnZjaUFvYkdWMElHa2dQU0F3T3lCcElEd2dkR2x0Wld4cGJtVk1aVzVuZEdnN0lHa3JLeWtnZTF4dUlDQWdJQ0FnSUNCamIyNXpkQ0IwZDJWbGJpQTlJSFJwYldWc2FXNWxXMmxkTzF4dUlDQWdJQ0FnSUNCamIyNXpkQ0IwZDJWbGJsUnBiV1VnUFNCbGJHRndjMlZrSUMwZ2RIZGxaVzR1Wm5KdmJUdGNibHh1SUNBZ0lDQWdJQ0JwWmlBb2RIZGxaVzVVYVcxbElENGdNQ0FtSmlCMGQyVmxibFJwYldVZ1BDQjBkMlZsYmk1a2RYSmhkR2x2YmlrZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnZEhkbFpXNHVabWx5WlNoMGQyVmxibFJwYldVcE8xeHVJQ0FnSUNBZ0lDQjlYRzRnSUNBZ2ZWeHVmVHRjYmx4dVpYaHdiM0owSUdSbFptRjFiSFFnWm5WdVkzUnBiMjRnZEdsdFpXeHBibVVvWkdWbUxDQndjbTl3Y3lBOUlIdDlLU0I3WEc0Z0lDQWdZMjl1YzNRZ2V5QjBiM1JoYkZScGJXVXNJSFJwYldWc2FXNWxJSDBnUFNCaGJtRnNlWHBsS0dSbFppazdYRzVjYmlBZ0lDQnlaWFIxY200Z2JtVjNJRlIzWldWdUtIdGNiaUFnSUNBZ0lDQWdMaTR1Y0hKdmNITXNYRzRnSUNBZ0lDQWdJR1IxY21GMGFXOXVPaUIwYjNSaGJGUnBiV1VzWEc0Z0lDQWdJQ0FnSUdWaGMyVTZJR1ZoYzJsdVp5NXNhVzVsWVhJc1hHNGdJQ0FnSUNBZ0lIWmhiSFZsY3pvZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnY0RvZ01WeHVJQ0FnSUNBZ0lDQjlMRnh1SUNBZ0lDQWdJQ0IwYVcxbGJHbHVaVG9nZEdsdFpXeHBibVVzWEc0Z0lDQWdJQ0FnSUhScGJXVnNhVzVsVEdWdVozUm9PaUIwYVcxbGJHbHVaUzVzWlc1bmRHZ3NYRzRnSUNBZ0lDQWdJRzl1VW1WdVpHVnlPaUJ6WlhSVWQyVmxibk5jYmlBZ0lDQjlLVHRjYm4waVhYMD1cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2luYy90aW1lbGluZS5qc1xuICoqIG1vZHVsZSBpZCA9IDEwXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuLypcbiAgICAjIEFkYXB0ZXIgY2xhc3NcbiAgICAjIyBQcm92aWRlcyBhIGdldHRlci9zZXR0ZXIgd3JhcHBlciBhbmQgcHJvcGVydHkgY2FjaGUgZm9yIGRpZmZlcmVudCBlbGVtZW50IHR5cGVzXG5cbiAgICBPdmVycmlkZSBgZ2V0dGVyYCBhbmQgYHNldHRlcmAgdG8gcmVpbXBsZW1lbnQgdGhlIGludGVyZmFjZSBmb3IgbmV3IGVsZW1lbnQgdHlwZXMuXG5cbiAgICBTZXQgYEV4dGVuZGVkLnByb3RvdHlwZS5zdGF0ZU1hcGAgYXMgYW4gb2JqZWN0IGtleS92YWx1ZSBtYXAgdG8gdHJhbnNsYXRlIGluY29taW5nIGtleXMgdG9cbiAgICBBUEktc3BlY2lmaWMga2V5cy4gRm9yIGluc3RhbmNlLCB7IHg6ICd0cmFuc2xhdGVYJyB9LiBcblxuICAgIFNldCBgRXh0ZW5kZWQucHJvdG90eXBlLnZhbHVlVHlwZU1hcGAgYXMgYW4gb2JqZWN0IGtleS92YWx1ZSBtYXAgdG8gcmV0dXJuIGEgdmFsdWUgdHlwZSB3aXRoXG4gICAgYGdldFZhbHVlVHlwZShrZXkpYCAoa2V5IHdpbGwgYmUgbWFwcGVkIGFjY29yZGluZyB0byBgc3RhdGVNYXBgKVxuKi9cblxudmFyIEFkYXB0ZXIgPSAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIEFkYXB0ZXIocHJvcHMpIHtcbiAgICAgICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIEFkYXB0ZXIpO1xuXG4gICAgICAgIHRoaXMuZWxlbWVudCA9IHByb3BzLmVsZW1lbnQ7XG4gICAgICAgIHRoaXMuY2FjaGUgPSB7fTtcblxuICAgICAgICBpZiAocHJvcHMuZ2V0dGVyKSB7XG4gICAgICAgICAgICB0aGlzLmdldHRlciA9IHByb3BzLmdldHRlcjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChwcm9wcy5zZXR0ZXIpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0dGVyID0gcHJvcHMuc2V0dGVyO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHByb3BzLnN0YXRlTWFwKSB7XG4gICAgICAgICAgICB0aGlzLnN0YXRlTWFwID0gcHJvcHMuc3RhdGVNYXA7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAocHJvcHMudmFsdWVUeXBlTWFwKSB7XG4gICAgICAgICAgICB0aGlzLnZhbHVlVHlwZU1hcCA9IHByb3BzLnZhbHVlVHlwZU1hcDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qXG4gICAgICAgIEdldCBlbGVtZW50IHByb3BlcnR5XG4gICAgICAgICBAcGFyYW0gW3N0cmluZ106IEtleSB0byByZWFkXG4gICAgICAgIEBwYXJhbSBbYm9vbGVhbl06IElmIGB0cnVlYCwgd2lsbCBvdmVycmlkZSBjYWNoZWQgcHJvcGVydHlcbiAgICAqL1xuXG4gICAgQWRhcHRlci5wcm90b3R5cGUuZ2V0ID0gZnVuY3Rpb24gZ2V0KGtleSwgcmVmcmVzaCkge1xuICAgICAgICB2YXIgbWFwcGVkS2V5ID0gdGhpcy5tYXBTdGF0ZUtleShrZXkpO1xuXG4gICAgICAgIGlmIChyZWZyZXNoIHx8ICF0aGlzLmNhY2hlLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmNhY2hlW2tleV0gPSB0aGlzLmdldHRlcihtYXBwZWRLZXkpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY2FjaGVba2V5XTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICAvKlxuICAgICAgICBTZXQgZWxlbWVudCBwcm9wZXJ0aWVzXG4gICAgICAgICBAcGFyYW0gW29iamVjdF06IEtleS92YWx1ZSBwcm9wZXJ0aWVzIHRvIHNldFxuICAgICovXG5cbiAgICBBZGFwdGVyLnByb3RvdHlwZS5zZXQgPSBmdW5jdGlvbiBzZXQocHJvcHMpIHtcbiAgICAgICAgdmFyIHRyYW5zbGF0ZWRQcm9wcyA9IHt9O1xuXG4gICAgICAgIC8vIFRyYW5zbGF0ZSBwcm9wc1xuICAgICAgICBmb3IgKHZhciBrZXkgaW4gcHJvcHMpIHtcbiAgICAgICAgICAgIGlmIChwcm9wcy5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgICAgICAgdmFyIG1hcHBlZEtleSA9IHRoaXMubWFwU3RhdGVLZXkoa2V5KTtcbiAgICAgICAgICAgICAgICB0aGlzLmNhY2hlW2tleV0gPSB0cmFuc2xhdGVkUHJvcHNbbWFwcGVkS2V5XSA9IHByb3BzW2tleV07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcy5zZXR0ZXIodHJhbnNsYXRlZFByb3BzKTtcbiAgICB9O1xuXG4gICAgLypcbiAgICAgICAgT3ZlcnJpZGFibGUgZWxlbWVudCBnZXR0ZXIgLSBkZWZhdWx0IGZvciBwbGFpbiBvYmplY3QgXG4gICAgKi9cblxuICAgIEFkYXB0ZXIucHJvdG90eXBlLmdldHRlciA9IGZ1bmN0aW9uIGdldHRlcihrZXkpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZWxlbWVudFtrZXldO1xuICAgIH07XG5cbiAgICAvKlxuICAgICAgICBPdmVycmlkYWJsZSBlbGVtZW50IHNldHRlciAtIGRlZmF1bHQgZm9yIHBsYWluIG9iamVjdFxuICAgICovXG5cbiAgICBBZGFwdGVyLnByb3RvdHlwZS5zZXR0ZXIgPSBmdW5jdGlvbiBzZXR0ZXIocHJvcHMpIHtcbiAgICAgICAgZm9yICh2YXIga2V5IGluIHByb3BzKSB7XG4gICAgICAgICAgICBpZiAocHJvcHMuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgICAgICAgIHRoaXMuZWxlbWVudFtrZXldID0gcHJvcHNba2V5XTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG5cbiAgICAvKlxuICAgICAgICBNYXAgc3RhdGUga2V5IGFzIHBlciBgc3RhdGVNYXBgLCBpZiBwcmVzZW50XG4gICAgICAgICBAcGFyYW0gW3N0cmluZ106IEtleSB0byBtYXBcbiAgICAgICAgQHJldHVybiBbc3RyaW5nXTogTWFwcGVkIGtleSwgb3Igb3JpZ2luYWwga2V5IGlmIG5vbmUgZm91bmRcbiAgICAqL1xuXG4gICAgQWRhcHRlci5wcm90b3R5cGUubWFwU3RhdGVLZXkgPSBmdW5jdGlvbiBtYXBTdGF0ZUtleShrZXkpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc3RhdGVNYXAgPyB0aGlzLnN0YXRlTWFwW2tleV0gfHwga2V5IDoga2V5O1xuICAgIH07XG5cbiAgICAvKlxuICAgICAgICBHZXQgdmFsdWVUeXBlIG9mIHByb3ZpZGVkIGtleVxuICAgICAgICAgQHBhcmFtIFtzdHJpbmddOiBOYW1lIG9mIHByb3BlcnR5IHRvIG1hcFxuICAgICAgICBAcmV0dXJuIFt2YWx1ZVR5cGVdOiBWYWx1ZSB0eXBlIG9mIHByb3BlcnR5XG4gICAgKi9cblxuICAgIEFkYXB0ZXIucHJvdG90eXBlLmdldFZhbHVlVHlwZSA9IGZ1bmN0aW9uIGdldFZhbHVlVHlwZShrZXkpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudmFsdWVUeXBlTWFwID8gdGhpcy52YWx1ZVR5cGVNYXBbdGhpcy5tYXBTdGF0ZUtleShrZXkpXSA6IGZhbHNlO1xuICAgIH07XG5cbiAgICByZXR1cm4gQWRhcHRlcjtcbn0pKCk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IEFkYXB0ZXI7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uIChwcm9wcykge1xuICAgIHJldHVybiBuZXcgQWRhcHRlcihwcm9wcyk7XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluTnlZeTloWkdGd2RHVnlMMkZrWVhCMFpYSXVhbk1pWFN3aWJtRnRaWE1pT2x0ZExDSnRZWEJ3YVc1bmN5STZJanM3T3pzN096czdPenM3T3pzN096czdPenRKUVZseFFpeFBRVUZQTzBGQlEzaENMR0ZCUkdsQ0xFOUJRVThzUTBGRFdpeExRVUZMTEVWQlFVVTdPRUpCUkVZc1QwRkJUenM3UVVGRmNFSXNXVUZCU1N4RFFVRkRMRTlCUVU4c1IwRkJSeXhMUVVGTExFTkJRVU1zVDBGQlR5eERRVUZETzBGQlF6ZENMRmxCUVVrc1EwRkJReXhMUVVGTExFZEJRVWNzUlVGQlJTeERRVUZET3p0QlFVVm9RaXhaUVVGSkxFdEJRVXNzUTBGQlF5eE5RVUZOTEVWQlFVVTdRVUZEWkN4blFrRkJTU3hEUVVGRExFMUJRVTBzUjBGQlJ5eExRVUZMTEVOQlFVTXNUVUZCVFN4RFFVRkRPMU5CUXpsQ096dEJRVVZFTEZsQlFVa3NTMEZCU3l4RFFVRkRMRTFCUVUwc1JVRkJSVHRCUVVOa0xHZENRVUZKTEVOQlFVTXNUVUZCVFN4SFFVRkhMRXRCUVVzc1EwRkJReXhOUVVGTkxFTkJRVU03VTBGRE9VSTdPMEZCUlVRc1dVRkJTU3hMUVVGTExFTkJRVU1zVVVGQlVTeEZRVUZGTzBGQlEyaENMR2RDUVVGSkxFTkJRVU1zVVVGQlVTeEhRVUZITEV0QlFVc3NRMEZCUXl4UlFVRlJMRU5CUVVNN1UwRkRiRU03TzBGQlJVUXNXVUZCU1N4TFFVRkxMRU5CUVVNc1dVRkJXU3hGUVVGRk8wRkJRM0JDTEdkQ1FVRkpMRU5CUVVNc1dVRkJXU3hIUVVGSExFdEJRVXNzUTBGQlF5eFpRVUZaTEVOQlFVTTdVMEZETVVNN1MwRkRTanM3T3pzN096dEJRVUZCTzBGQmNFSm5RaXhYUVVGUExGZEJORUo0UWl4SFFVRkhMR2RDUVVGRExFZEJRVWNzUlVGQlJTeFBRVUZQTEVWQlFVVTdRVUZEWkN4WlFVRk5MRk5CUVZNc1IwRkJSeXhKUVVGSkxFTkJRVU1zVjBGQlZ5eERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRPenRCUVVWNFF5eFpRVUZKTEU5QlFVOHNTVUZCU1N4RFFVRkRMRWxCUVVrc1EwRkJReXhMUVVGTExFTkJRVU1zWTBGQll5eERRVUZETEVkQlFVY3NRMEZCUXl4RlFVRkZPMEZCUXpWRExHMUNRVUZQTEVsQlFVa3NRMEZCUXl4TFFVRkxMRU5CUVVNc1IwRkJSeXhEUVVGRExFZEJRVWNzU1VGQlNTeERRVUZETEUxQlFVMHNRMEZCUXl4VFFVRlRMRU5CUVVNc1EwRkJRenRUUVVOdVJDeE5RVUZOTzBGQlEwZ3NiVUpCUVU4c1NVRkJTU3hEUVVGRExFdEJRVXNzUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXp0VFFVTXhRanRMUVVOS096czdPenM3TzBGQmNFTm5RaXhYUVVGUExGZEJNa040UWl4SFFVRkhMR2RDUVVGRExFdEJRVXNzUlVGQlJUdEJRVU5RTEZsQlFVMHNaVUZCWlN4SFFVRkhMRVZCUVVVN096dEJRVUZETEVGQlJ6TkNMR0ZCUVVzc1NVRkJTU3hIUVVGSExFbEJRVWtzUzBGQlN5eEZRVUZGTzBGQlEyNUNMR2RDUVVGSkxFdEJRVXNzUTBGQlF5eGpRVUZqTEVOQlFVTXNSMEZCUnl4RFFVRkRMRVZCUVVVN1FVRkRNMElzYjBKQlFVMHNVMEZCVXl4SFFVRkhMRWxCUVVrc1EwRkJReXhYUVVGWExFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTTdRVUZEZUVNc2IwSkJRVWtzUTBGQlF5eExRVUZMTEVOQlFVTXNSMEZCUnl4RFFVRkRMRWRCUVVjc1pVRkJaU3hEUVVGRExGTkJRVk1zUTBGQlF5eEhRVUZITEV0QlFVc3NRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJRenRoUVVNM1JEdFRRVU5LT3p0QlFVVkVMR1ZCUVU4c1NVRkJTU3hEUVVGRExFMUJRVTBzUTBGQlF5eGxRVUZsTEVOQlFVTXNRMEZCUXp0TFFVTjJRenM3T3pzN08wRkJka1JuUWl4WFFVRlBMRmRCTkVSNFFpeE5RVUZOTEcxQ1FVRkRMRWRCUVVjc1JVRkJSVHRCUVVOU0xHVkJRVThzU1VGQlNTeERRVUZETEU5QlFVOHNRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJRenRMUVVNMVFqczdPenM3TzBGQk9VUm5RaXhYUVVGUExGZEJiVVY0UWl4TlFVRk5MRzFDUVVGRExFdEJRVXNzUlVGQlJUdEJRVU5XTEdGQlFVc3NTVUZCU1N4SFFVRkhMRWxCUVVrc1MwRkJTeXhGUVVGRk8wRkJRMjVDTEdkQ1FVRkpMRXRCUVVzc1EwRkJReXhqUVVGakxFTkJRVU1zUjBGQlJ5eERRVUZETEVWQlFVVTdRVUZETTBJc2IwSkJRVWtzUTBGQlF5eFBRVUZQTEVOQlFVTXNSMEZCUnl4RFFVRkRMRWRCUVVjc1MwRkJTeXhEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETzJGQlEyeERPMU5CUTBvN1MwRkRTanM3T3pzN096czdRVUY2UldkQ0xGZEJRVThzVjBGcFJuaENMRmRCUVZjc2QwSkJRVU1zUjBGQlJ5eEZRVUZGTzBGQlEySXNaVUZCVHl4QlFVRkRMRWxCUVVrc1EwRkJReXhSUVVGUkxFZEJRVWtzU1VGQlNTeERRVUZETEZGQlFWRXNRMEZCUXl4SFFVRkhMRU5CUVVNc1NVRkJTU3hIUVVGSExFZEJRVWNzUjBGQlJ5eERRVUZETzB0QlF6VkVPenM3T3pzN096dEJRVzVHWjBJc1YwRkJUeXhYUVRKR2VFSXNXVUZCV1N4NVFrRkJReXhIUVVGSExFVkJRVVU3UVVGRFpDeGxRVUZQTEVGQlFVTXNTVUZCU1N4RFFVRkRMRmxCUVZrc1IwRkJTU3hKUVVGSkxFTkJRVU1zV1VGQldTeERRVUZETEVsQlFVa3NRMEZCUXl4WFFVRlhMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU1zUjBGQlJ5eExRVUZMTEVOQlFVTTdTMEZEYWtZN08xZEJOMFpuUWl4UFFVRlBPenM3YTBKQlFWQXNUMEZCVHpzN2EwSkJaMGRpTEZWQlFVTXNTMEZCU3p0WFFVRkxMRWxCUVVrc1QwRkJUeXhEUVVGRExFdEJRVXNzUTBGQlF6dERRVUZCSWl3aVptbHNaU0k2SW1Ga1lYQjBaWEl1YW5NaUxDSnpiM1Z5WTJWU2IyOTBJam9pTDFWelpYSnpMMDFoZEhSUVpYSnllUzlUYVhSbGN5OXdiM0J0YjNScGIyNGlMQ0p6YjNWeVkyVnpRMjl1ZEdWdWRDSTZXeUl2S2x4dUlDQWdJQ01nUVdSaGNIUmxjaUJqYkdGemMxeHVJQ0FnSUNNaklGQnliM1pwWkdWeklHRWdaMlYwZEdWeUwzTmxkSFJsY2lCM2NtRndjR1Z5SUdGdVpDQndjbTl3WlhKMGVTQmpZV05vWlNCbWIzSWdaR2xtWm1WeVpXNTBJR1ZzWlcxbGJuUWdkSGx3WlhOY2JseHVJQ0FnSUU5MlpYSnlhV1JsSUdCblpYUjBaWEpnSUdGdVpDQmdjMlYwZEdWeVlDQjBieUJ5WldsdGNHeGxiV1Z1ZENCMGFHVWdhVzUwWlhKbVlXTmxJR1p2Y2lCdVpYY2daV3hsYldWdWRDQjBlWEJsY3k1Y2JseHVJQ0FnSUZObGRDQmdSWGgwWlc1a1pXUXVjSEp2ZEc5MGVYQmxMbk4wWVhSbFRXRndZQ0JoY3lCaGJpQnZZbXBsWTNRZ2EyVjVMM1poYkhWbElHMWhjQ0IwYnlCMGNtRnVjMnhoZEdVZ2FXNWpiMjFwYm1jZ2EyVjVjeUIwYjF4dUlDQWdJRUZRU1MxemNHVmphV1pwWXlCclpYbHpMaUJHYjNJZ2FXNXpkR0Z1WTJVc0lIc2dlRG9nSjNSeVlXNXpiR0YwWlZnbklIMHVJRnh1WEc0Z0lDQWdVMlYwSUdCRmVIUmxibVJsWkM1d2NtOTBiM1I1Y0dVdWRtRnNkV1ZVZVhCbFRXRndZQ0JoY3lCaGJpQnZZbXBsWTNRZ2EyVjVMM1poYkhWbElHMWhjQ0IwYnlCeVpYUjFjbTRnWVNCMllXeDFaU0IwZVhCbElIZHBkR2hjYmlBZ0lDQmdaMlYwVm1Gc2RXVlVlWEJsS0d0bGVTbGdJQ2hyWlhrZ2QybHNiQ0JpWlNCdFlYQndaV1FnWVdOamIzSmthVzVuSUhSdklHQnpkR0YwWlUxaGNHQXBYRzRxTDF4dVpYaHdiM0owSUdSbFptRjFiSFFnWTJ4aGMzTWdRV1JoY0hSbGNpQjdYRzRnSUNBZ1kyOXVjM1J5ZFdOMGIzSW9jSEp2Y0hNcElIdGNiaUFnSUNBZ0lDQWdkR2hwY3k1bGJHVnRaVzUwSUQwZ2NISnZjSE11Wld4bGJXVnVkRHRjYmlBZ0lDQWdJQ0FnZEdocGN5NWpZV05vWlNBOUlIdDlPMXh1WEc0Z0lDQWdJQ0FnSUdsbUlDaHdjbTl3Y3k1blpYUjBaWElwSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJSFJvYVhNdVoyVjBkR1Z5SUQwZ2NISnZjSE11WjJWMGRHVnlPMXh1SUNBZ0lDQWdJQ0I5WEc1Y2JpQWdJQ0FnSUNBZ2FXWWdLSEJ5YjNCekxuTmxkSFJsY2lrZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnZEdocGN5NXpaWFIwWlhJZ1BTQndjbTl3Y3k1elpYUjBaWEk3WEc0Z0lDQWdJQ0FnSUgxY2JseHVJQ0FnSUNBZ0lDQnBaaUFvY0hKdmNITXVjM1JoZEdWTllYQXBJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lIUm9hWE11YzNSaGRHVk5ZWEFnUFNCd2NtOXdjeTV6ZEdGMFpVMWhjRHRjYmlBZ0lDQWdJQ0FnZlZ4dVhHNGdJQ0FnSUNBZ0lHbG1JQ2h3Y205d2N5NTJZV3gxWlZSNWNHVk5ZWEFwSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJSFJvYVhNdWRtRnNkV1ZVZVhCbFRXRndJRDBnY0hKdmNITXVkbUZzZFdWVWVYQmxUV0Z3TzF4dUlDQWdJQ0FnSUNCOVhHNGdJQ0FnZlZ4dVhHNGdJQ0FnTHlwY2JpQWdJQ0FnSUNBZ1IyVjBJR1ZzWlcxbGJuUWdjSEp2Y0dWeWRIbGNibHh1SUNBZ0lDQWdJQ0JBY0dGeVlXMGdXM04wY21sdVoxMDZJRXRsZVNCMGJ5QnlaV0ZrWEc0Z0lDQWdJQ0FnSUVCd1lYSmhiU0JiWW05dmJHVmhibDA2SUVsbUlHQjBjblZsWUN3Z2QybHNiQ0J2ZG1WeWNtbGtaU0JqWVdOb1pXUWdjSEp2Y0dWeWRIbGNiaUFnSUNBcUwxeHVJQ0FnSUdkbGRDaHJaWGtzSUhKbFpuSmxjMmdwSUh0Y2JpQWdJQ0FnSUNBZ1kyOXVjM1FnYldGd2NHVmtTMlY1SUQwZ2RHaHBjeTV0WVhCVGRHRjBaVXRsZVNoclpYa3BPMXh1WEc0Z0lDQWdJQ0FnSUdsbUlDaHlaV1p5WlhOb0lIeDhJQ0YwYUdsekxtTmhZMmhsTG1oaGMwOTNibEJ5YjNCbGNuUjVLR3RsZVNrcElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUhKbGRIVnliaUIwYUdsekxtTmhZMmhsVzJ0bGVWMGdQU0IwYUdsekxtZGxkSFJsY2lodFlYQndaV1JMWlhrcE8xeHVJQ0FnSUNBZ0lDQjlJR1ZzYzJVZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnY21WMGRYSnVJSFJvYVhNdVkyRmphR1ZiYTJWNVhUdGNiaUFnSUNBZ0lDQWdmVnh1SUNBZ0lIMWNibHh1SUNBZ0lDOHFYRzRnSUNBZ0lDQWdJRk5sZENCbGJHVnRaVzUwSUhCeWIzQmxjblJwWlhOY2JseHVJQ0FnSUNBZ0lDQkFjR0Z5WVcwZ1cyOWlhbVZqZEYwNklFdGxlUzkyWVd4MVpTQndjbTl3WlhKMGFXVnpJSFJ2SUhObGRGeHVJQ0FnSUNvdlhHNGdJQ0FnYzJWMEtIQnliM0J6S1NCN1hHNGdJQ0FnSUNBZ0lHTnZibk4wSUhSeVlXNXpiR0YwWldSUWNtOXdjeUE5SUh0OU8xeHVYRzRnSUNBZ0lDQWdJQzh2SUZSeVlXNXpiR0YwWlNCd2NtOXdjMXh1SUNBZ0lDQWdJQ0JtYjNJZ0tHeGxkQ0JyWlhrZ2FXNGdjSEp2Y0hNcElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUdsbUlDaHdjbTl3Y3k1b1lYTlBkMjVRY205d1pYSjBlU2hyWlhrcEtTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdZMjl1YzNRZ2JXRndjR1ZrUzJWNUlEMGdkR2hwY3k1dFlYQlRkR0YwWlV0bGVTaHJaWGtwTzF4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUhSb2FYTXVZMkZqYUdWYmEyVjVYU0E5SUhSeVlXNXpiR0YwWldSUWNtOXdjMXR0WVhCd1pXUkxaWGxkSUQwZ2NISnZjSE5iYTJWNVhUdGNiaUFnSUNBZ0lDQWdJQ0FnSUgxY2JpQWdJQ0FnSUNBZ2ZWeHVYRzRnSUNBZ0lDQWdJSEpsZEhWeWJpQjBhR2x6TG5ObGRIUmxjaWgwY21GdWMyeGhkR1ZrVUhKdmNITXBPMXh1SUNBZ0lIMWNibHh1SUNBZ0lDOHFYRzRnSUNBZ0lDQWdJRTkyWlhKeWFXUmhZbXhsSUdWc1pXMWxiblFnWjJWMGRHVnlJQzBnWkdWbVlYVnNkQ0JtYjNJZ2NHeGhhVzRnYjJKcVpXTjBJRnh1SUNBZ0lDb3ZYRzRnSUNBZ1oyVjBkR1Z5S0d0bGVTa2dlMXh1SUNBZ0lDQWdJQ0J5WlhSMWNtNGdkR2hwY3k1bGJHVnRaVzUwVzJ0bGVWMDdYRzRnSUNBZ2ZWeHVYRzRnSUNBZ0x5cGNiaUFnSUNBZ0lDQWdUM1psY25KcFpHRmliR1VnWld4bGJXVnVkQ0J6WlhSMFpYSWdMU0JrWldaaGRXeDBJR1p2Y2lCd2JHRnBiaUJ2WW1wbFkzUmNiaUFnSUNBcUwxeHVJQ0FnSUhObGRIUmxjaWh3Y205d2N5a2dlMXh1SUNBZ0lDQWdJQ0JtYjNJZ0tHeGxkQ0JyWlhrZ2FXNGdjSEp2Y0hNcElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUdsbUlDaHdjbTl3Y3k1b1lYTlBkMjVRY205d1pYSjBlU2hyWlhrcEtTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdkR2hwY3k1bGJHVnRaVzUwVzJ0bGVWMGdQU0J3Y205d2MxdHJaWGxkTzF4dUlDQWdJQ0FnSUNBZ0lDQWdmVnh1SUNBZ0lDQWdJQ0I5WEc0Z0lDQWdmVnh1WEc0Z0lDQWdMeXBjYmlBZ0lDQWdJQ0FnVFdGd0lITjBZWFJsSUd0bGVTQmhjeUJ3WlhJZ1lITjBZWFJsVFdGd1lDd2dhV1lnY0hKbGMyVnVkRnh1WEc0Z0lDQWdJQ0FnSUVCd1lYSmhiU0JiYzNSeWFXNW5YVG9nUzJWNUlIUnZJRzFoY0Z4dUlDQWdJQ0FnSUNCQWNtVjBkWEp1SUZ0emRISnBibWRkT2lCTllYQndaV1FnYTJWNUxDQnZjaUJ2Y21sbmFXNWhiQ0JyWlhrZ2FXWWdibTl1WlNCbWIzVnVaRnh1SUNBZ0lDb3ZYRzRnSUNBZ2JXRndVM1JoZEdWTFpYa29hMlY1S1NCN1hHNGdJQ0FnSUNBZ0lISmxkSFZ5YmlBb2RHaHBjeTV6ZEdGMFpVMWhjQ2tnUHlCMGFHbHpMbk4wWVhSbFRXRndXMnRsZVYwZ2ZId2dhMlY1SURvZ2EyVjVPMXh1SUNBZ0lIMWNibHh1SUNBZ0lDOHFYRzRnSUNBZ0lDQWdJRWRsZENCMllXeDFaVlI1Y0dVZ2IyWWdjSEp2ZG1sa1pXUWdhMlY1WEc1Y2JpQWdJQ0FnSUNBZ1FIQmhjbUZ0SUZ0emRISnBibWRkT2lCT1lXMWxJRzltSUhCeWIzQmxjblI1SUhSdklHMWhjRnh1SUNBZ0lDQWdJQ0JBY21WMGRYSnVJRnQyWVd4MVpWUjVjR1ZkT2lCV1lXeDFaU0IwZVhCbElHOW1JSEJ5YjNCbGNuUjVYRzRnSUNBZ0tpOWNiaUFnSUNCblpYUldZV3gxWlZSNWNHVW9hMlY1S1NCN1hHNGdJQ0FnSUNBZ0lISmxkSFZ5YmlBb2RHaHBjeTUyWVd4MVpWUjVjR1ZOWVhBcElEOGdkR2hwY3k1MllXeDFaVlI1Y0dWTllYQmJkR2hwY3k1dFlYQlRkR0YwWlV0bGVTaHJaWGtwWFNBNklHWmhiSE5sTzF4dUlDQWdJSDFjYm4xY2JseHVaWGh3YjNKMElHUmxabUYxYkhRZ0tIQnliM0J6S1NBOVBpQnVaWGNnUVdSaGNIUmxjaWh3Y205d2N5azdJbDE5XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9hZGFwdGVyL2FkYXB0ZXIuanNcbiAqKiBtb2R1bGUgaWQgPSAxMVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0cy5nZXR0ZXIgPSBnZXR0ZXI7XG5leHBvcnRzLnNldHRlciA9IHNldHRlcjtcblxudmFyIF9hZGFwdGVyID0gcmVxdWlyZSgnLi9hZGFwdGVyJyk7XG5cbnZhciBfYWRhcHRlcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9hZGFwdGVyKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gZ2V0dGVyKGtleSkge1xuICAgIHJldHVybiB0aGlzLmVsZW1lbnQuZ2V0QXR0cmlidXRlKGtleSk7XG59XG5cbmZ1bmN0aW9uIHNldHRlcihwcm9wcykge1xuICAgIGZvciAodmFyIGtleSBpbiBwcm9wcykge1xuICAgICAgICBpZiAocHJvcHMuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgICAgdGhpcy5lbGVtZW50LnNldEF0dHJpYnV0ZShrZXksIHByb3BzW2tleV0pO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbiAoZWxlbWVudCkge1xuICAgIHJldHVybiAoMCwgX2FkYXB0ZXIyLmRlZmF1bHQpKHsgZWxlbWVudDogZWxlbWVudCwgZ2V0dGVyOiBnZXR0ZXIsIHNldHRlcjogc2V0dGVyIH0pO1xufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbk55WXk5aFpHRndkR1Z5TDJGMGRISXRZV1JoY0hSbGNpNXFjeUpkTENKdVlXMWxjeUk2VzEwc0ltMWhjSEJwYm1keklqb2lPenM3VVVGRlowSXNUVUZCVFN4SFFVRk9MRTFCUVUwN1VVRkpUaXhOUVVGTkxFZEJRVTRzVFVGQlRUczdPenM3T3pzN1FVRktaaXhUUVVGVExFMUJRVTBzUTBGQlF5eEhRVUZITEVWQlFVVTdRVUZEZUVJc1YwRkJUeXhKUVVGSkxFTkJRVU1zVDBGQlR5eERRVUZETEZsQlFWa3NRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJRenREUVVONlF6czdRVUZGVFN4VFFVRlRMRTFCUVUwc1EwRkJReXhMUVVGTExFVkJRVVU3UVVGRE1VSXNVMEZCU3l4SlFVRkpMRWRCUVVjc1NVRkJTU3hMUVVGTExFVkJRVVU3UVVGRGJrSXNXVUZCU1N4TFFVRkxMRU5CUVVNc1kwRkJZeXhEUVVGRExFZEJRVWNzUTBGQlF5eEZRVUZGTzBGQlF6TkNMR2RDUVVGSkxFTkJRVU1zVDBGQlR5eERRVUZETEZsQlFWa3NRMEZCUXl4SFFVRkhMRVZCUVVVc1MwRkJTeXhEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETEVOQlFVTTdVMEZET1VNN1MwRkRTanREUVVOS096dHJRa0ZGWXl4VlFVRkRMRTlCUVU4N1YwRkJTeXgxUWtGQll5eEZRVUZGTEU5QlFVOHNSVUZCVUN4UFFVRlBMRVZCUVVVc1RVRkJUU3hGUVVGT0xFMUJRVTBzUlVGQlJTeE5RVUZOTEVWQlFVNHNUVUZCVFN4RlFVRkZMRU5CUVVNN1EwRkJRU0lzSW1acGJHVWlPaUpoZEhSeUxXRmtZWEIwWlhJdWFuTWlMQ0p6YjNWeVkyVlNiMjkwSWpvaUwxVnpaWEp6TDAxaGRIUlFaWEp5ZVM5VGFYUmxjeTl3YjNCdGIzUnBiMjRpTENKemIzVnlZMlZ6UTI5dWRHVnVkQ0k2V3lKcGJYQnZjblFnWTNKbFlYUmxRV1JoY0hSbGNpQm1jbTl0SUNjdUwyRmtZWEIwWlhJbk8xeHVYRzVsZUhCdmNuUWdablZ1WTNScGIyNGdaMlYwZEdWeUtHdGxlU2tnZTF4dUlDQWdJSEpsZEhWeWJpQjBhR2x6TG1Wc1pXMWxiblF1WjJWMFFYUjBjbWxpZFhSbEtHdGxlU2s3WEc1OVhHNWNibVY0Y0c5eWRDQm1kVzVqZEdsdmJpQnpaWFIwWlhJb2NISnZjSE1wSUh0Y2JpQWdJQ0JtYjNJZ0tHeGxkQ0JyWlhrZ2FXNGdjSEp2Y0hNcElIdGNiaUFnSUNBZ0lDQWdhV1lnS0hCeWIzQnpMbWhoYzA5M2JsQnliM0JsY25SNUtHdGxlU2twSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJSFJvYVhNdVpXeGxiV1Z1ZEM1elpYUkJkSFJ5YVdKMWRHVW9hMlY1TENCd2NtOXdjMXRyWlhsZEtUdGNiaUFnSUNBZ0lDQWdmVnh1SUNBZ0lIMWNibjFjYmx4dVpYaHdiM0owSUdSbFptRjFiSFFnS0dWc1pXMWxiblFwSUQwK0lHTnlaV0YwWlVGa1lYQjBaWElvZXlCbGJHVnRaVzUwTENCblpYUjBaWElzSUhObGRIUmxjaUI5S1RzaVhYMD1cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2FkYXB0ZXIvYXR0ci1hZGFwdGVyLmpzXG4gKiogbW9kdWxlIGlkID0gMTJcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF9zdGF0ZU1hcCA9IHJlcXVpcmUoJy4vY3NzL3N0YXRlLW1hcCcpO1xuXG52YXIgX3N0YXRlTWFwMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3N0YXRlTWFwKTtcblxudmFyIF92YWx1ZVR5cGVNYXAgPSByZXF1aXJlKCcuL2Nzcy92YWx1ZS10eXBlLW1hcCcpO1xuXG52YXIgX3ZhbHVlVHlwZU1hcDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF92YWx1ZVR5cGVNYXApO1xuXG52YXIgX2J1aWxkID0gcmVxdWlyZSgnLi9jc3MvYnVpbGQnKTtcblxudmFyIF9idWlsZDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9idWlsZCk7XG5cbnZhciBfcHJlZml4ZXIgPSByZXF1aXJlKCcuL2Nzcy9wcmVmaXhlcicpO1xuXG52YXIgX3ByZWZpeGVyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3ByZWZpeGVyKTtcblxudmFyIF9hZGFwdGVyID0gcmVxdWlyZSgnLi9hZGFwdGVyJyk7XG5cbnZhciBfYWRhcHRlcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9hZGFwdGVyKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gZ2V0dGVyKGtleSkge1xuICAgIHJldHVybiB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZSh0aGlzLmVsZW1lbnQsIG51bGwpWygwLCBfcHJlZml4ZXIyLmRlZmF1bHQpKGtleSldO1xufVxuXG5mdW5jdGlvbiBzZXR0ZXIocHJvcHMpIHtcbiAgICB0aGlzLmVsZW1lbnQuc3R5bGUuY3NzVGV4dCArPSAoMCwgX2J1aWxkMi5kZWZhdWx0KShwcm9wcyk7XG59XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uIChlbGVtZW50KSB7XG4gICAgcmV0dXJuICgwLCBfYWRhcHRlcjIuZGVmYXVsdCkoeyBlbGVtZW50OiBlbGVtZW50LCBzdGF0ZU1hcDogX3N0YXRlTWFwMi5kZWZhdWx0LCB2YWx1ZVR5cGVNYXA6IF92YWx1ZVR5cGVNYXAyLmRlZmF1bHQsIGdldHRlcjogZ2V0dGVyLCBzZXR0ZXI6IHNldHRlciB9KTtcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5OeVl5OWhaR0Z3ZEdWeUwyTnpjeTFoWkdGd2RHVnlMbXB6SWwwc0ltNWhiV1Z6SWpwYlhTd2liV0Z3Y0dsdVozTWlPaUk3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPMEZCVFVFc1UwRkJVeXhOUVVGTkxFTkJRVVVzUjBGQlJ5eEZRVUZGTzBGQlEyeENMRmRCUVU4c1RVRkJUU3hEUVVGRExHZENRVUZuUWl4RFFVRkRMRWxCUVVrc1EwRkJReXhQUVVGUExFVkJRVVVzU1VGQlNTeERRVUZETEVOQlFVTXNkMEpCUVZNc1IwRkJSeXhEUVVGRExFTkJRVU1zUTBGQlF6dERRVU55UlRzN1FVRkZSQ3hUUVVGVExFMUJRVTBzUTBGQlF5eExRVUZMTEVWQlFVVTdRVUZEYmtJc1VVRkJTU3hEUVVGRExFOUJRVThzUTBGQlF5eExRVUZMTEVOQlFVTXNUMEZCVHl4SlFVRkpMSEZDUVVGdlFpeExRVUZMTEVOQlFVTXNRMEZCUXp0RFFVTTFSRHM3YTBKQlJXTXNWVUZCUXl4UFFVRlBPMWRCUVVzc2RVSkJRV01zUlVGQlJTeFBRVUZQTEVWQlFWQXNUMEZCVHl4RlFVRkZMRkZCUVZFc2IwSkJRVUVzUlVGQlJTeFpRVUZaTEhkQ1FVRkJMRVZCUVVVc1RVRkJUU3hGUVVGT0xFMUJRVTBzUlVGQlJTeE5RVUZOTEVWQlFVNHNUVUZCVFN4RlFVRkZMRU5CUVVNN1EwRkJRU0lzSW1acGJHVWlPaUpqYzNNdFlXUmhjSFJsY2k1cWN5SXNJbk52ZFhKalpWSnZiM1FpT2lJdlZYTmxjbk12VFdGMGRGQmxjbko1TDFOcGRHVnpMM0J2Y0cxdmRHbHZiaUlzSW5OdmRYSmpaWE5EYjI1MFpXNTBJanBiSW1sdGNHOXlkQ0J6ZEdGMFpVMWhjQ0JtY205dElDY3VMMk56Y3k5emRHRjBaUzF0WVhBbk8xeHVhVzF3YjNKMElIWmhiSFZsVkhsd1pVMWhjQ0JtY205dElDY3VMMk56Y3k5MllXeDFaUzEwZVhCbExXMWhjQ2M3WEc1cGJYQnZjblFnWW5WcGJHUlFjbTl3WlhKMGVWTjBjbWx1WnlCbWNtOXRJQ2N1TDJOemN5OWlkV2xzWkNjN1hHNXBiWEJ2Y25RZ2NISmxabWw0WlhJZ1puSnZiU0FuTGk5amMzTXZjSEpsWm1sNFpYSW5PMXh1YVcxd2IzSjBJR055WldGMFpVRmtZWEIwWlhJZ1puSnZiU0FuTGk5aFpHRndkR1Z5Snp0Y2JseHVablZ1WTNScGIyNGdaMlYwZEdWeUlDaHJaWGtwSUh0Y2JpQWdJQ0J5WlhSMWNtNGdkMmx1Wkc5M0xtZGxkRU52YlhCMWRHVmtVM1I1YkdVb2RHaHBjeTVsYkdWdFpXNTBMQ0J1ZFd4c0tWdHdjbVZtYVhobGNpaHJaWGtwWFR0Y2JuMWNibHh1Wm5WdVkzUnBiMjRnYzJWMGRHVnlLSEJ5YjNCektTQjdYRzRnSUNBZ2RHaHBjeTVsYkdWdFpXNTBMbk4wZVd4bExtTnpjMVJsZUhRZ0t6MGdZblZwYkdSUWNtOXdaWEowZVZOMGNtbHVaeWh3Y205d2N5azdYRzU5WEc1Y2JtVjRjRzl5ZENCa1pXWmhkV3gwSUNobGJHVnRaVzUwS1NBOVBpQmpjbVZoZEdWQlpHRndkR1Z5S0hzZ1pXeGxiV1Z1ZEN3Z2MzUmhkR1ZOWVhBc0lIWmhiSFZsVkhsd1pVMWhjQ3dnWjJWMGRHVnlMQ0J6WlhSMFpYSWdmU2s3SWwxOVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvYWRhcHRlci9jc3MtYWRhcHRlci5qc1xuICoqIG1vZHVsZSBpZCA9IDEzXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzLnNldHRlciA9IHNldHRlcjtcblxudmFyIF9zdGF0ZU1hcCA9IHJlcXVpcmUoJy4vY3NzL3N0YXRlLW1hcCcpO1xuXG52YXIgX3N0YXRlTWFwMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3N0YXRlTWFwKTtcblxudmFyIF92YWx1ZVR5cGVNYXAgPSByZXF1aXJlKCcuL3N2Zy92YWx1ZS10eXBlLW1hcCcpO1xuXG52YXIgX3ZhbHVlVHlwZU1hcDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF92YWx1ZVR5cGVNYXApO1xuXG52YXIgX2J1aWxkID0gcmVxdWlyZSgnLi9zdmcvYnVpbGQnKTtcblxudmFyIF9idWlsZDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9idWlsZCk7XG5cbnZhciBfYXR0ckFkYXB0ZXIgPSByZXF1aXJlKCcuL2F0dHItYWRhcHRlcicpO1xuXG52YXIgX2FkYXB0ZXIgPSByZXF1aXJlKCcuL2FkYXB0ZXInKTtcblxudmFyIF9hZGFwdGVyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2FkYXB0ZXIpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBzZXR0ZXIocHJvcHMpIHtcbiAgICAoMCwgX2F0dHJBZGFwdGVyLnNldHRlcikoKDAsIF9idWlsZDIuZGVmYXVsdCkocHJvcHMsIHRoaXMub3JpZ2luKSk7XG59XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uIChlbGVtZW50KSB7XG4gICAgdmFyIGFkYXB0ZXIgPSAoMCwgX2FkYXB0ZXIyLmRlZmF1bHQpKHsgZWxlbWVudDogZWxlbWVudCwgc3RhdGVNYXA6IF9zdGF0ZU1hcDIuZGVmYXVsdCwgdmFsdWVUeXBlTWFwOiBfdmFsdWVUeXBlTWFwMi5kZWZhdWx0LCBnZXR0ZXI6IF9hdHRyQWRhcHRlci5nZXR0ZXIsIHNldHRlcjogc2V0dGVyIH0pO1xuICAgIHZhciBiQm94ID0gZWxlbWVudC5nZXRCQm94KCk7XG4gICAgdmFyIHRyYW5zZm9ybU9yaWdpblkgPSAwO1xuICAgIHZhciB0cmFuc2Zvcm1PcmlnaW5YID0gMDtcblxuICAgIGFkYXB0ZXIub3JpZ2luID0ge1xuICAgICAgICB4OiBiQm94LndpZHRoICogKHRyYW5zZm9ybU9yaWdpblggLyAxMDApICsgYkJveC54LFxuICAgICAgICB5OiBiQm94LmhlaWdodCAqICh0cmFuc2Zvcm1PcmlnaW5ZIC8gMTAwKSArIGJCb3gueVxuICAgIH07XG5cbiAgICByZXR1cm4gYWRhcHRlcjtcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5OeVl5OWhaR0Z3ZEdWeUwzTjJaeTFoWkdGd2RHVnlMbXB6SWwwc0ltNWhiV1Z6SWpwYlhTd2liV0Z3Y0dsdVozTWlPaUk3T3p0UlFVMW5RaXhOUVVGTkxFZEJRVTRzVFVGQlRUczdPenM3T3pzN096czdPenM3T3pzN096czdPenRCUVVGbUxGTkJRVk1zVFVGQlRTeERRVUZETEV0QlFVc3NSVUZCUlR0QlFVTXhRaXh4UWtGS1lTeE5RVUZOTEVWQlNWSXNjVUpCUVUwc1MwRkJTeXhGUVVGRkxFbEJRVWtzUTBGQlF5eE5RVUZOTEVOQlFVTXNRMEZCUXl4RFFVRkRPME5CUTNwRE96dHJRa0ZGWXl4VlFVRkRMRTlCUVU4c1JVRkJTenRCUVVONFFpeFJRVUZOTEU5QlFVOHNSMEZCUnl4MVFrRkJZeXhGUVVGRkxFOUJRVThzUlVGQlVDeFBRVUZQTEVWQlFVVXNVVUZCVVN4dlFrRkJRU3hGUVVGRkxGbEJRVmtzZDBKQlFVRXNSVUZCUlN4TlFVRk5MR1ZCVW14RkxFMUJRVTBzUVVGUk5FUXNSVUZCUlN4TlFVRk5MRVZCUVU0c1RVRkJUU3hGUVVGRkxFTkJRVU1zUTBGQlF6dEJRVU51Uml4UlFVRk5MRWxCUVVrc1IwRkJSeXhQUVVGUExFTkJRVU1zVDBGQlR5eEZRVUZGTEVOQlFVTTdRVUZETDBJc1VVRkJUU3huUWtGQlowSXNSMEZCUnl4RFFVRkRMRU5CUVVNN1FVRkRNMElzVVVGQlRTeG5Ra0ZCWjBJc1IwRkJSeXhEUVVGRExFTkJRVU03TzBGQlJUTkNMRmRCUVU4c1EwRkJReXhOUVVGTkxFZEJRVWM3UVVGRFlpeFRRVUZETEVWQlFVVXNTVUZCU1N4RFFVRkRMRXRCUVVzc1NVRkJTU3huUWtGQlowSXNSMEZCUnl4SFFVRkhMRU5CUVVFc1FVRkJReXhIUVVGSExFbEJRVWtzUTBGQlF5eERRVUZETzBGQlEycEVMRk5CUVVNc1JVRkJSU3hKUVVGSkxFTkJRVU1zVFVGQlRTeEpRVUZKTEdkQ1FVRm5RaXhIUVVGSExFZEJRVWNzUTBGQlFTeEJRVUZETEVkQlFVY3NTVUZCU1N4RFFVRkRMRU5CUVVNN1MwRkRja1FzUTBGQlF6czdRVUZGUml4WFFVRlBMRTlCUVU4c1EwRkJRenREUVVOc1FpSXNJbVpwYkdVaU9pSnpkbWN0WVdSaGNIUmxjaTVxY3lJc0luTnZkWEpqWlZKdmIzUWlPaUl2VlhObGNuTXZUV0YwZEZCbGNuSjVMMU5wZEdWekwzQnZjRzF2ZEdsdmJpSXNJbk52ZFhKalpYTkRiMjUwWlc1MElqcGJJbWx0Y0c5eWRDQnpkR0YwWlUxaGNDQm1jbTl0SUNjdUwyTnpjeTl6ZEdGMFpTMXRZWEFuTzF4dWFXMXdiM0owSUhaaGJIVmxWSGx3WlUxaGNDQm1jbTl0SUNjdUwzTjJaeTkyWVd4MVpTMTBlWEJsTFcxaGNDYzdYRzVwYlhCdmNuUWdZblZwYkdRZ1puSnZiU0FuTGk5emRtY3ZZblZwYkdRbk8xeHVhVzF3YjNKMElIc2daMlYwZEdWeUxDQnpaWFIwWlhJZ1lYTWdZWFIwY2xObGRIUmxjaUI5SUdaeWIyMGdKeTR2WVhSMGNpMWhaR0Z3ZEdWeUp6dGNibWx0Y0c5eWRDQmpjbVZoZEdWQlpHRndkR1Z5SUdaeWIyMGdKeTR2WVdSaGNIUmxjaWM3WEc1Y2JtVjRjRzl5ZENCbWRXNWpkR2x2YmlCelpYUjBaWElvY0hKdmNITXBJSHRjYmlBZ0lDQmhkSFJ5VTJWMGRHVnlLR0oxYVd4a0tIQnliM0J6TENCMGFHbHpMbTl5YVdkcGJpa3BPMXh1ZlZ4dVhHNWxlSEJ2Y25RZ1pHVm1ZWFZzZENBb1pXeGxiV1Z1ZENrZ1BUNGdlMXh1SUNBZ0lHTnZibk4wSUdGa1lYQjBaWElnUFNCamNtVmhkR1ZCWkdGd2RHVnlLSHNnWld4bGJXVnVkQ3dnYzNSaGRHVk5ZWEFzSUhaaGJIVmxWSGx3WlUxaGNDd2daMlYwZEdWeUxDQnpaWFIwWlhJZ2ZTazdYRzRnSUNBZ1kyOXVjM1FnWWtKdmVDQTlJR1ZzWlcxbGJuUXVaMlYwUWtKdmVDZ3BPMXh1SUNBZ0lHTnZibk4wSUhSeVlXNXpabTl5YlU5eWFXZHBibGtnUFNBd08xeHVJQ0FnSUdOdmJuTjBJSFJ5WVc1elptOXliVTl5YVdkcGJsZ2dQU0F3TzF4dVhHNGdJQ0FnWVdSaGNIUmxjaTV2Y21sbmFXNGdQU0I3WEc0Z0lDQWdJQ0FnSUhnNklHSkNiM2d1ZDJsa2RHZ2dLaUFvZEhKaGJuTm1iM0p0VDNKcFoybHVXQ0F2SURFd01Da2dLeUJpUW05NExuZ3NYRzRnSUNBZ0lDQWdJSGs2SUdKQ2IzZ3VhR1ZwWjJoMElDb2dLSFJ5WVc1elptOXliVTl5YVdkcGJsa2dMeUF4TURBcElDc2dZa0p2ZUM1NVhHNGdJQ0FnZlR0Y2JseHVJQ0FnSUhKbGRIVnliaUJoWkdGd2RHVnlPMXh1ZlR0Y2JseHVJbDE5XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9hZGFwdGVyL3N2Zy1hZGFwdGVyLmpzXG4gKiogbW9kdWxlIGlkID0gMTRcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF9idWlsZCA9IHJlcXVpcmUoJy4vc3ZnLXBhdGgvYnVpbGQnKTtcblxudmFyIF9idWlsZDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9idWlsZCk7XG5cbnZhciBfc3RhdGVNYXAgPSByZXF1aXJlKCcuL3N2Zy1wYXRoL3N0YXRlLW1hcCcpO1xuXG52YXIgX3N0YXRlTWFwMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3N0YXRlTWFwKTtcblxudmFyIF9zdmdBZGFwdGVyID0gcmVxdWlyZSgnLi9zdmctYWRhcHRlcicpO1xuXG52YXIgX3N2Z0FkYXB0ZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfc3ZnQWRhcHRlcik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIHNldHRlcihwcm9wcykge1xuICAgIHRoaXMuc3ZnU2V0dGVyKCgwLCBfYnVpbGQyLmRlZmF1bHQpKHByb3BzLCB0aGlzLnBhdGhMZW5ndGgpKTtcbn1cblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gKGVsZW1lbnQpIHtcbiAgICB2YXIgYWRhcHRlciA9ICgwLCBfc3ZnQWRhcHRlcjIuZGVmYXVsdCkoZWxlbWVudCk7XG5cbiAgICBhZGFwdGVyLnN0YXRlTWFwID0gX3N0YXRlTWFwMi5kZWZhdWx0O1xuICAgIGFkYXB0ZXIuc2V0dGVyID0gc2V0dGVyO1xuICAgIGFkYXB0ZXIuc3ZnU2V0dGVyID0gX3N2Z0FkYXB0ZXIuc2V0dGVyO1xuXG4gICAgYWRhcHRlci5wYXRoTGVuZ3RoID0gZWxlbWVudC5nZXRUb3RhbExlbmd0aCgpO1xuXG4gICAgcmV0dXJuIGFkYXB0ZXI7XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluTnlZeTloWkdGd2RHVnlMM04yWnkxd1lYUm9MV0ZrWVhCMFpYSXVhbk1pWFN3aWJtRnRaWE1pT2x0ZExDSnRZWEJ3YVc1bmN5STZJanM3T3pzN096czdPenM3T3pzN096czdPMEZCU1VFc1UwRkJVeXhOUVVGTkxFTkJRVU1zUzBGQlN5eEZRVUZGTzBGQlEyNUNMRkZCUVVrc1EwRkJReXhUUVVGVExFTkJRVU1zY1VKQlFVMHNTMEZCU3l4RlFVRkZMRWxCUVVrc1EwRkJReXhWUVVGVkxFTkJRVU1zUTBGQlF5eERRVUZETzBOQlEycEVPenRyUWtGRll5eFZRVUZETEU5QlFVOHNSVUZCU3p0QlFVTjRRaXhSUVVGTkxFOUJRVThzUjBGQlJ5d3dRa0ZCVnl4UFFVRlBMRU5CUVVNc1EwRkJRenM3UVVGRmNFTXNWMEZCVHl4RFFVRkRMRkZCUVZFc2NVSkJRVmNzUTBGQlF6dEJRVU0xUWl4WFFVRlBMRU5CUVVNc1RVRkJUU3hIUVVGSExFMUJRVTBzUTBGQlF6dEJRVU40UWl4WFFVRlBMRU5CUVVNc1UwRkJVeXhsUVZoQkxFMUJRVTBzUVVGWFRTeERRVUZET3p0QlFVVTVRaXhYUVVGUExFTkJRVU1zVlVGQlZTeEhRVUZITEU5QlFVOHNRMEZCUXl4alFVRmpMRVZCUVVVc1EwRkJRenM3UVVGRk9VTXNWMEZCVHl4UFFVRlBMRU5CUVVNN1EwRkRiRUlpTENKbWFXeGxJam9pYzNabkxYQmhkR2d0WVdSaGNIUmxjaTVxY3lJc0luTnZkWEpqWlZKdmIzUWlPaUl2VlhObGNuTXZUV0YwZEZCbGNuSjVMMU5wZEdWekwzQnZjRzF2ZEdsdmJpSXNJbk52ZFhKalpYTkRiMjUwWlc1MElqcGJJbWx0Y0c5eWRDQmlkV2xzWkNCbWNtOXRJQ2N1TDNOMlp5MXdZWFJvTDJKMWFXeGtKenRjYm1sdGNHOXlkQ0J6ZEdGMFpVMWhjQ0JtY205dElDY3VMM04yWnkxd1lYUm9MM04wWVhSbExXMWhjQ2M3WEc1cGJYQnZjblFnYzNablFXUmhjSFJsY2l3Z2V5QnpaWFIwWlhJZ1lYTWdjM1puVTJWMGRHVnlJSDBnWm5KdmJTQW5MaTl6ZG1jdFlXUmhjSFJsY2ljN1hHNWNibVoxYm1OMGFXOXVJSE5sZEhSbGNpaHdjbTl3Y3lrZ2UxeHVJQ0FnSUhSb2FYTXVjM1puVTJWMGRHVnlLR0oxYVd4a0tIQnliM0J6TENCMGFHbHpMbkJoZEdoTVpXNW5kR2dwS1R0Y2JuMWNibHh1Wlhod2IzSjBJR1JsWm1GMWJIUWdLR1ZzWlcxbGJuUXBJRDArSUh0Y2JpQWdJQ0JqYjI1emRDQmhaR0Z3ZEdWeUlEMGdjM1puUVdSaGNIUmxjaWhsYkdWdFpXNTBLVHRjYmx4dUlDQWdJR0ZrWVhCMFpYSXVjM1JoZEdWTllYQWdQU0J6ZEdGMFpVMWhjRHRjYmlBZ0lDQmhaR0Z3ZEdWeUxuTmxkSFJsY2lBOUlITmxkSFJsY2p0Y2JpQWdJQ0JoWkdGd2RHVnlMbk4yWjFObGRIUmxjaUE5SUhOMloxTmxkSFJsY2p0Y2JseHVJQ0FnSUdGa1lYQjBaWEl1Y0dGMGFFeGxibWQwYUNBOUlHVnNaVzFsYm5RdVoyVjBWRzkwWVd4TVpXNW5kR2dvS1R0Y2JseHVJQ0FnSUhKbGRIVnliaUJoWkdGd2RHVnlPMXh1ZlR0Y2JpSmRmUT09XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9hZGFwdGVyL3N2Zy1wYXRoLWFkYXB0ZXIuanNcbiAqKiBtb2R1bGUgaWQgPSAxNVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX2NyZWF0ZUVhc2luZyA9IHJlcXVpcmUoJy4vY3JlYXRlLWVhc2luZycpO1xuXG52YXIgX2NyZWF0ZUVhc2luZzIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jcmVhdGVFYXNpbmcpO1xuXG52YXIgX2NyZWF0ZUJlemllciA9IHJlcXVpcmUoJy4vY3JlYXRlLWJlemllcicpO1xuXG52YXIgX2NyZWF0ZUJlemllcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jcmVhdGVCZXppZXIpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG4vLyBWYWx1ZXNcbi8qXG4gICAgRWFzaW5nIGZ1bmN0aW9uc1xuICAgIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICBcbiAgICBHZW5lcmF0ZXMgYW5kIHByb3ZpZGVzIGVhc2luZyBmdW5jdGlvbnMgYmFzZWQgb24gYmFzZUZ1bmN0aW9uIGRlZmluaXRpb25zXG4gICAgXG4gICAgQSBjYWxsIHRvIGVhc2luZ0Z1bmN0aW9uLmdldCgnZnVuY3Rpb25OYW1lJykgcmV0dXJucyBhIGZ1bmN0aW9uIHRoYXQgY2FuIGJlIHBhc3NlZDpcbiAgICAgICAgQHBhcmFtIFtudW1iZXJdOiBQcm9ncmVzcyAwLTFcbiAgICAgICAgQHBhcmFtIFtudW1iZXJdIChvcHRpb25hbCk6IEFtcCBtb2RpZmllciwgb25seSBhY2NlcHRlZCBpbiBzb21lIGVhc2luZyBmdW5jdGlvbnNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFuZCBpcyB1c2VkIHRvIGFkanVzdCBvdmVyYWxsIHN0cmVuZ3RoXG4gICAgICAgIEByZXR1cm4gW251bWJlcl06IEVhc2VkIHByb2dyZXNzXG4gICAgICAgIFxuICAgIFdlIGNhbiBnZW5lcmF0ZSBuZXcgZnVuY3Rpb25zIGJ5IHNlbmRpbmcgYW4gZWFzaW5nIGZ1bmN0aW9uIHRocm91Z2ggZWFzaW5nRnVuY3Rpb24uZXh0ZW5kKG5hbWUsIG1ldGhvZCkuXG4gICAgV2hpY2ggd2lsbCBtYWtlIG5hbWVJbiwgbmFtZU91dCBhbmQgbmFtZUluT3V0IGZ1bmN0aW9ucyBhdmFpbGFibGUgdG8gdXNlLlxuICAgICAgICBcbiAgICBFYXNpbmcgZnVuY3Rpb25zIGZyb20gUm9iZXJ0IFBlbm5lclxuICAgIGh0dHA6Ly93d3cucm9iZXJ0cGVubmVyLmNvbS9lYXNpbmcvXG4gICAgICAgIFxuICAgIEJlemllciBjdXJ2ZSBpbnRlcnByZXRvciBjcmVhdGVkIGZyb20gR2HDq3RhbiBSZW5hdWRlYXUncyBvcmlnaW5hbCBCZXppZXJFYXNpbmcgIFxuICAgIGh0dHBzOi8vZ2l0aHViLmNvbS9ncmUvYmV6aWVyLWVhc2luZy9ibG9iL21hc3Rlci9pbmRleC5qcyAgXG4gICAgaHR0cHM6Ly9naXRodWIuY29tL2dyZS9iZXppZXItZWFzaW5nL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcblxuICAgIEFudGljaXBhdGUgZWFzaW5nIGNyZWF0ZWQgYnkgRWxsaW90IEdpbm9cbiAgICBodHRwczovL3R3aXR0ZXIuY29tL0VsbGlvdEdlbm9cbiovXG4vLyBJbXBvcnRzXG52YXIgREVGQVVMVF9CQUNLX1NUUkVOR1RIID0gMS41MjU7XG52YXIgREVGQVVMVF9QT1dfU1RSRU5HVEggPSAyO1xuXG4vKlxuICAgIEVhY2ggb2YgdGhlc2UgYmFzZSBmdW5jdGlvbnMgaXMgYW4gZWFzZUluXG4gICAgXG4gICAgT24gaW5pdCwgd2UgdXNlIC5taXJyb3IgYW5kIC5yZXZlcnNlIHRvIGdlbmVyYXRlIGVhc2VJbk91dCBhbmRcbiAgICBlYXNlT3V0IGZ1bmN0aW9ucyByZXNwZWN0aXZlbHkuXG4qL1xudmFyIGJhc2VFYXNpbmcgPSB7XG4gICAgZWFzZTogZnVuY3Rpb24gKHByb2dyZXNzKSB7XG4gICAgICAgIHZhciBzdHJlbmd0aCA9IGFyZ3VtZW50cy5sZW5ndGggPD0gMSB8fCBhcmd1bWVudHNbMV0gPT09IHVuZGVmaW5lZCA/IERFRkFVTFRfUE9XX1NUUkVOR1RIIDogYXJndW1lbnRzWzFdO1xuICAgICAgICByZXR1cm4gTWF0aC5wb3cocHJvZ3Jlc3MsIHN0cmVuZ3RoKTtcbiAgICB9LFxuICAgIGNpcmM6IGZ1bmN0aW9uIChwcm9ncmVzcykge1xuICAgICAgICByZXR1cm4gMSAtIE1hdGguc2luKE1hdGguYWNvcyhwcm9ncmVzcykpO1xuICAgIH0sXG4gICAgYmFjazogZnVuY3Rpb24gKHByb2dyZXNzKSB7XG4gICAgICAgIHZhciBzdHJlbmd0aCA9IGFyZ3VtZW50cy5sZW5ndGggPD0gMSB8fCBhcmd1bWVudHNbMV0gPT09IHVuZGVmaW5lZCA/IERFRkFVTFRfQkFDS19TVFJFTkdUSCA6IGFyZ3VtZW50c1sxXTtcbiAgICAgICAgcmV0dXJuIHByb2dyZXNzICogcHJvZ3Jlc3MgKiAoKHN0cmVuZ3RoICsgMSkgKiBwcm9ncmVzcyAtIHN0cmVuZ3RoKTtcbiAgICB9XG59O1xuXG4vLyBVdGlsaXR5IGZ1bmN0aW9uc1xudmFyIGdlbmVyYXRlUG93ZXJFYXNpbmcgPSBmdW5jdGlvbiAoc3RyZW5ndGgpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gKHByb2dyZXNzKSB7XG4gICAgICAgIHJldHVybiBiYXNlRWFzaW5nLmVhc2UocHJvZ3Jlc3MsIHN0cmVuZ3RoKTtcbiAgICB9O1xufTtcblxuWydjdWJpYycsICdxdWFydCcsICdxdWludCddLmZvckVhY2goZnVuY3Rpb24gKGVhc2luZ05hbWUsIGkpIHtcbiAgICByZXR1cm4gYmFzZUVhc2luZ1tlYXNpbmdOYW1lXSA9IGdlbmVyYXRlUG93ZXJFYXNpbmcoaSArIDMpO1xufSk7XG5cbi8vIEdlbmVyYXRlIGluL291dC9pbk91dCB2YXJpYXRpb25zXG5mb3IgKHZhciBrZXkgaW4gYmFzZUVhc2luZykge1xuICAgIGlmIChiYXNlRWFzaW5nLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgdmFyIGVhc2luZ0Z1bmN0aW9uID0gKDAsIF9jcmVhdGVFYXNpbmcyLmRlZmF1bHQpKGJhc2VFYXNpbmdba2V5XSk7XG4gICAgICAgIGJhc2VFYXNpbmdba2V5ICsgJ0luJ10gPSBlYXNpbmdGdW5jdGlvbi5pbjtcbiAgICAgICAgYmFzZUVhc2luZ1trZXkgKyAnT3V0J10gPSBlYXNpbmdGdW5jdGlvbi5vdXQ7XG4gICAgICAgIGJhc2VFYXNpbmdba2V5ICsgJ0luT3V0J10gPSBlYXNpbmdGdW5jdGlvbi5pbk91dDtcbiAgICB9XG59XG5cbmJhc2VFYXNpbmcubGluZWFyID0gZnVuY3Rpb24gKHByb2dyZXNzKSB7XG4gICAgcmV0dXJuIHByb2dyZXNzO1xufTtcbmJhc2VFYXNpbmcuYW50aWNpcGF0ZSA9IGZ1bmN0aW9uIChwcm9ncmVzcykge1xuICAgIHZhciBzdHJlbmd0aCA9IGFyZ3VtZW50cy5sZW5ndGggPD0gMSB8fCBhcmd1bWVudHNbMV0gPT09IHVuZGVmaW5lZCA/IERFRkFVTFRfQkFDS19TVFJFTkdUSCA6IGFyZ3VtZW50c1sxXTtcbiAgICByZXR1cm4gKHByb2dyZXNzICo9IDIpIDwgMSA/IDAuNSAqIGJhc2VFYXNpbmcuYmFja0luKHByb2dyZXNzLCBzdHJlbmd0aCkgOiAwLjUgKiAoMiAtIE1hdGgucG93KDIsIC0xMCAqIChwcm9ncmVzcyAtIDEpKSk7XG59O1xuXG5iYXNlRWFzaW5nLmVhc2luZ0Z1bmN0aW9uID0gX2NyZWF0ZUVhc2luZzIuZGVmYXVsdDtcbmJhc2VFYXNpbmcuY3ViaWNCZXppZXIgPSBfY3JlYXRlQmV6aWVyMi5kZWZhdWx0O1xuYmFzZUVhc2luZy5tb2RpZnlFYXNlID0gZnVuY3Rpb24gKGVhc2luZykge1xuICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gQXJyYXkoX2xlbiA+IDEgPyBfbGVuIC0gMSA6IDApLCBfa2V5ID0gMTsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgICBhcmdzW19rZXkgLSAxXSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICB9XG5cbiAgICByZXR1cm4gZnVuY3Rpb24gKHByb2dyZXNzKSB7XG4gICAgICAgIHJldHVybiBlYXNpbmcuYXBwbHkodW5kZWZpbmVkLCBbcHJvZ3Jlc3NdLmNvbmNhdChhcmdzKSk7XG4gICAgfTtcbn07XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGJhc2VFYXNpbmc7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5OeVl5OWhZM1JwYjI1ekwyVmhjMmx1Wnk5d2NtVnpaWFF0WldGemFXNW5MbXB6SWwwc0ltNWhiV1Z6SWpwYlhTd2liV0Z3Y0dsdVozTWlPaUk3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN08wRkJPRUpCTEVsQlFVMHNjVUpCUVhGQ0xFZEJRVWNzUzBGQlN5eERRVUZETzBGQlEzQkRMRWxCUVUwc2IwSkJRVzlDTEVkQlFVY3NRMEZCUXpzN096czdPenM3UVVGQlF5eEJRVkV2UWl4SlFVRk5MRlZCUVZVc1IwRkJSenRCUVVObUxGRkJRVWtzUlVGQlJTeFZRVUZETEZGQlFWRTdXVUZCUlN4UlFVRlJMSGxFUVVGSExHOUNRVUZ2UWp0M1FrRkJTeXhSUVVGUkxFVkJRVWtzVVVGQlVUdExRVUZCTzBGQlEzcEZMRkZCUVVrc1JVRkJSU3hWUVVGQkxGRkJRVkU3WlVGQlNTeERRVUZETEVkQlFVY3NTVUZCU1N4RFFVRkRMRWRCUVVjc1EwRkJReXhKUVVGSkxFTkJRVU1zU1VGQlNTeERRVUZETEZGQlFWRXNRMEZCUXl4RFFVRkRPMHRCUVVFN1FVRkRia1FzVVVGQlNTeEZRVUZGTEZWQlFVTXNVVUZCVVR0WlFVRkZMRkZCUVZFc2VVUkJRVWNzY1VKQlFYRkNPMlZCUVVzc1FVRkJReXhSUVVGUkxFZEJRVWNzVVVGQlVTeEpRVUZMTEVOQlFVTXNVVUZCVVN4SFFVRkhMRU5CUVVNc1EwRkJRU3hIUVVGSkxGRkJRVkVzUjBGQlJ5eFJRVUZSTEVOQlFVRXNRVUZCUXp0TFFVRkJPME5CUTNaSU96czdRVUZCUXl4QlFVZEdMRWxCUVUwc2JVSkJRVzFDTEVkQlFVY3NWVUZCUXl4UlFVRlJPMWRCUVVzc1ZVRkJReXhSUVVGUk8yVkJRVXNzVlVGQlZTeERRVUZETEVsQlFVa3NRMEZCUXl4UlFVRlJMRVZCUVVVc1VVRkJVU3hEUVVGRE8wdEJRVUU3UTBGQlFTeERRVUZET3p0QlFVVTFSaXhEUVVGRExFOUJRVThzUlVGQlJTeFBRVUZQTEVWQlFVVXNUMEZCVHl4RFFVRkRMRU5CUVVNc1QwRkJUeXhEUVVGRExGVkJRVU1zVlVGQlZTeEZRVUZGTEVOQlFVTTdWMEZCU3l4VlFVRlZMRU5CUVVNc1ZVRkJWU3hEUVVGRExFZEJRVWNzYlVKQlFXMUNMRU5CUVVNc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF6dERRVUZCTEVOQlFVTTdPenRCUVVGRExFRkJSelZITEV0QlFVc3NTVUZCU1N4SFFVRkhMRWxCUVVrc1ZVRkJWU3hGUVVGRk8wRkJRM2hDTEZGQlFVa3NWVUZCVlN4RFFVRkRMR05CUVdNc1EwRkJReXhIUVVGSExFTkJRVU1zUlVGQlJUdEJRVU5vUXl4WlFVRk5MR05CUVdNc1IwRkJSeXcwUWtGQmNVSXNWVUZCVlN4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRExFTkJRVU03UVVGRE4wUXNhMEpCUVZVc1EwRkJTU3hIUVVGSExGRkJRVXNzUjBGQlJ5eGpRVUZqTEVOQlFVTXNSVUZCUlN4RFFVRkRPMEZCUXpORExHdENRVUZWTEVOQlFVa3NSMEZCUnl4VFFVRk5MRWRCUVVjc1kwRkJZeXhEUVVGRExFZEJRVWNzUTBGQlF6dEJRVU0zUXl4clFrRkJWU3hEUVVGSkxFZEJRVWNzVjBGQlVTeEhRVUZITEdOQlFXTXNRMEZCUXl4TFFVRkxMRU5CUVVNN1MwRkRjRVE3UTBGRFNqczdRVUZGUkN4VlFVRlZMRU5CUVVNc1RVRkJUU3hIUVVGSExGVkJRVUVzVVVGQlVUdFhRVUZKTEZGQlFWRTdRMEZCUVN4RFFVRkRPMEZCUTNwRExGVkJRVlVzUTBGQlF5eFZRVUZWTEVkQlFVY3NWVUZCUXl4UlFVRlJPMUZCUVVVc1VVRkJVU3g1UkVGQlJ5eHhRa0ZCY1VJN1YwRkRMMFFzUVVGQlF5eERRVUZETEZGQlFWRXNTVUZCUlN4RFFVRkRMRU5CUVVFc1IwRkJTU3hEUVVGRExFZEJRVWtzUjBGQlJ5eEhRVUZITEZWQlFWVXNRMEZCUXl4TlFVRk5MRU5CUVVNc1VVRkJVU3hGUVVGRkxGRkJRVkVzUTBGQlF5eEhRVUZKTEVkQlFVY3NTVUZCU1N4RFFVRkRMRWRCUVVjc1NVRkJTU3hEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETEVWQlFVVXNRMEZCUXl4RlFVRkZMRWxCUVVrc1VVRkJVU3hIUVVGSExFTkJRVU1zUTBGQlFTeEJRVUZETEVOQlFVTXNRMEZCUVN4QlFVRkRPME5CUVVFc1EwRkJRenM3UVVGRmRrZ3NWVUZCVlN4RFFVRkRMR05CUVdNc2VVSkJRWFZDTEVOQlFVTTdRVUZEYWtRc1ZVRkJWU3hEUVVGRExGZEJRVmNzZVVKQlFXTXNRMEZCUXp0QlFVTnlReXhWUVVGVkxFTkJRVU1zVlVGQlZTeEhRVUZITEZWQlFVTXNUVUZCVFR0elEwRkJTeXhKUVVGSk8wRkJRVW9zV1VGQlNUczdPMWRCUVVzc1ZVRkJReXhSUVVGUk8yVkJRVXNzVFVGQlRTeHRRa0ZCUXl4UlFVRlJMRk5CUVVzc1NVRkJTU3hGUVVGRE8wdEJRVUU3UTBGQlFTeERRVUZET3p0clFrRkZkRVVzVlVGQlZTSXNJbVpwYkdVaU9pSndjbVZ6WlhRdFpXRnphVzVuTG1weklpd2ljMjkxY21ObFVtOXZkQ0k2SWk5VmMyVnljeTlOWVhSMFVHVnljbmt2VTJsMFpYTXZjRzl3Ylc5MGFXOXVJaXdpYzI5MWNtTmxjME52Ym5SbGJuUWlPbHNpTHlwY2JpQWdJQ0JGWVhOcGJtY2dablZ1WTNScGIyNXpYRzRnSUNBZ0xTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMVnh1SUNBZ0lGeHVJQ0FnSUVkbGJtVnlZWFJsY3lCaGJtUWdjSEp2ZG1sa1pYTWdaV0Z6YVc1bklHWjFibU4wYVc5dWN5QmlZWE5sWkNCdmJpQmlZWE5sUm5WdVkzUnBiMjRnWkdWbWFXNXBkR2x2Ym5OY2JpQWdJQ0JjYmlBZ0lDQkJJR05oYkd3Z2RHOGdaV0Z6YVc1blJuVnVZM1JwYjI0dVoyVjBLQ2RtZFc1amRHbHZiazVoYldVbktTQnlaWFIxY201eklHRWdablZ1WTNScGIyNGdkR2hoZENCallXNGdZbVVnY0dGemMyVmtPbHh1SUNBZ0lDQWdJQ0JBY0dGeVlXMGdXMjUxYldKbGNsMDZJRkJ5YjJkeVpYTnpJREF0TVZ4dUlDQWdJQ0FnSUNCQWNHRnlZVzBnVzI1MWJXSmxjbDBnS0c5d2RHbHZibUZzS1RvZ1FXMXdJRzF2WkdsbWFXVnlMQ0J2Ym14NUlHRmpZMlZ3ZEdWa0lHbHVJSE52YldVZ1pXRnphVzVuSUdaMWJtTjBhVzl1YzF4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ1lXNWtJR2x6SUhWelpXUWdkRzhnWVdScWRYTjBJRzkyWlhKaGJHd2djM1J5Wlc1bmRHaGNiaUFnSUNBZ0lDQWdRSEpsZEhWeWJpQmJiblZ0WW1WeVhUb2dSV0Z6WldRZ2NISnZaM0psYzNOY2JpQWdJQ0FnSUNBZ1hHNGdJQ0FnVjJVZ1kyRnVJR2RsYm1WeVlYUmxJRzVsZHlCbWRXNWpkR2x2Ym5NZ1lua2djMlZ1WkdsdVp5QmhiaUJsWVhOcGJtY2dablZ1WTNScGIyNGdkR2h5YjNWbmFDQmxZWE5wYm1kR2RXNWpkR2x2Ymk1bGVIUmxibVFvYm1GdFpTd2diV1YwYUc5a0tTNWNiaUFnSUNCWGFHbGphQ0IzYVd4c0lHMWhhMlVnYm1GdFpVbHVMQ0J1WVcxbFQzVjBJR0Z1WkNCdVlXMWxTVzVQZFhRZ1puVnVZM1JwYjI1eklHRjJZV2xzWVdKc1pTQjBieUIxYzJVdVhHNGdJQ0FnSUNBZ0lGeHVJQ0FnSUVWaGMybHVaeUJtZFc1amRHbHZibk1nWm5KdmJTQlNiMkpsY25RZ1VHVnVibVZ5WEc0Z0lDQWdhSFIwY0RvdkwzZDNkeTV5YjJKbGNuUndaVzV1WlhJdVkyOXRMMlZoYzJsdVp5OWNiaUFnSUNBZ0lDQWdYRzRnSUNBZ1FtVjZhV1Z5SUdOMWNuWmxJR2x1ZEdWeWNISmxkRzl5SUdOeVpXRjBaV1FnWm5KdmJTQkhZY09yZEdGdUlGSmxibUYxWkdWaGRTZHpJRzl5YVdkcGJtRnNJRUpsZW1sbGNrVmhjMmx1WnlBZ1hHNGdJQ0FnYUhSMGNITTZMeTluYVhSb2RXSXVZMjl0TDJkeVpTOWlaWHBwWlhJdFpXRnphVzVuTDJKc2IySXZiV0Z6ZEdWeUwybHVaR1Y0TG1weklDQmNiaUFnSUNCb2RIUndjem92TDJkcGRHaDFZaTVqYjIwdlozSmxMMkpsZW1sbGNpMWxZWE5wYm1jdllteHZZaTl0WVhOMFpYSXZURWxEUlU1VFJWeHVYRzRnSUNBZ1FXNTBhV05wY0dGMFpTQmxZWE5wYm1jZ1kzSmxZWFJsWkNCaWVTQkZiR3hwYjNRZ1IybHViMXh1SUNBZ0lHaDBkSEJ6T2k4dmRIZHBkSFJsY2k1amIyMHZSV3hzYVc5MFIyVnViMXh1S2k5Y2JpOHZJRWx0Y0c5eWRITmNibWx0Y0c5eWRDQmpjbVZoZEdWRllYTnBibWRHZFc1amRHbHZiaUJtY205dElDY3VMMk55WldGMFpTMWxZWE5wYm1jbk8xeHVhVzF3YjNKMElHTjFZbWxqUW1WNmFXVnlJR1p5YjIwZ0p5NHZZM0psWVhSbExXSmxlbWxsY2ljN1hHNWNiaTh2SUZaaGJIVmxjMXh1WTI5dWMzUWdSRVZHUVZWTVZGOUNRVU5MWDFOVVVrVk9SMVJJSUQwZ01TNDFNalU3WEc1amIyNXpkQ0JFUlVaQlZVeFVYMUJQVjE5VFZGSkZUa2RVU0NBOUlESTdYRzVjYmk4cVhHNGdJQ0FnUldGamFDQnZaaUIwYUdWelpTQmlZWE5sSUdaMWJtTjBhVzl1Y3lCcGN5QmhiaUJsWVhObFNXNWNiaUFnSUNCY2JpQWdJQ0JQYmlCcGJtbDBMQ0IzWlNCMWMyVWdMbTFwY25KdmNpQmhibVFnTG5KbGRtVnljMlVnZEc4Z1oyVnVaWEpoZEdVZ1pXRnpaVWx1VDNWMElHRnVaRnh1SUNBZ0lHVmhjMlZQZFhRZ1puVnVZM1JwYjI1eklISmxjM0JsWTNScGRtVnNlUzVjYmlvdlhHNWpiMjV6ZENCaVlYTmxSV0Z6YVc1bklEMGdlMXh1SUNBZ0lHVmhjMlU2SUNod2NtOW5jbVZ6Y3l3Z2MzUnlaVzVuZEdnZ1BTQkVSVVpCVlV4VVgxQlBWMTlUVkZKRlRrZFVTQ2tnUFQ0Z2NISnZaM0psYzNNZ0tpb2djM1J5Wlc1bmRHZ3NYRzRnSUNBZ1kybHlZem9nY0hKdlozSmxjM01nUFQ0Z01TQXRJRTFoZEdndWMybHVLRTFoZEdndVlXTnZjeWh3Y205bmNtVnpjeWtwTEZ4dUlDQWdJR0poWTJzNklDaHdjbTluY21WemN5d2djM1J5Wlc1bmRHZ2dQU0JFUlVaQlZVeFVYMEpCUTB0ZlUxUlNSVTVIVkVncElEMCtJQ2h3Y205bmNtVnpjeUFxSUhCeWIyZHlaWE56S1NBcUlDZ29jM1J5Wlc1bmRHZ2dLeUF4S1NBcUlIQnliMmR5WlhOeklDMGdjM1J5Wlc1bmRHZ3BYRzU5TzF4dVhHNHZMeUJWZEdsc2FYUjVJR1oxYm1OMGFXOXVjMXh1WTI5dWMzUWdaMlZ1WlhKaGRHVlFiM2RsY2tWaGMybHVaeUE5SUNoemRISmxibWQwYUNrZ1BUNGdLSEJ5YjJkeVpYTnpLU0E5UGlCaVlYTmxSV0Z6YVc1bkxtVmhjMlVvY0hKdlozSmxjM01zSUhOMGNtVnVaM1JvS1R0Y2JseHVXeWRqZFdKcFl5Y3NJQ2R4ZFdGeWRDY3NJQ2R4ZFdsdWRDZGRMbVp2Y2tWaFkyZ29LR1ZoYzJsdVowNWhiV1VzSUdrcElEMCtJR0poYzJWRllYTnBibWRiWldGemFXNW5UbUZ0WlYwZ1BTQm5aVzVsY21GMFpWQnZkMlZ5UldGemFXNW5LR2tnS3lBektTazdYRzVjYmk4dklFZGxibVZ5WVhSbElHbHVMMjkxZEM5cGJrOTFkQ0IyWVhKcFlYUnBiMjV6WEc1bWIzSWdLR3hsZENCclpYa2dhVzRnWW1GelpVVmhjMmx1WnlrZ2UxeHVJQ0FnSUdsbUlDaGlZWE5sUldGemFXNW5MbWhoYzA5M2JsQnliM0JsY25SNUtHdGxlU2twSUh0Y2JpQWdJQ0FnSUNBZ1kyOXVjM1FnWldGemFXNW5SblZ1WTNScGIyNGdQU0JqY21WaGRHVkZZWE5wYm1kR2RXNWpkR2x2YmloaVlYTmxSV0Z6YVc1blcydGxlVjBwTzF4dUlDQWdJQ0FnSUNCaVlYTmxSV0Z6YVc1blcyQWtlMnRsZVgxSmJtQmRJRDBnWldGemFXNW5SblZ1WTNScGIyNHVhVzQ3WEc0Z0lDQWdJQ0FnSUdKaGMyVkZZWE5wYm1kYllDUjdhMlY1ZlU5MWRHQmRJRDBnWldGemFXNW5SblZ1WTNScGIyNHViM1YwTzF4dUlDQWdJQ0FnSUNCaVlYTmxSV0Z6YVc1blcyQWtlMnRsZVgxSmJrOTFkR0JkSUQwZ1pXRnphVzVuUm5WdVkzUnBiMjR1YVc1UGRYUTdYRzRnSUNBZ2ZWeHVmVnh1WEc1aVlYTmxSV0Z6YVc1bkxteHBibVZoY2lBOUlIQnliMmR5WlhOeklEMCtJSEJ5YjJkeVpYTnpPMXh1WW1GelpVVmhjMmx1Wnk1aGJuUnBZMmx3WVhSbElEMGdLSEJ5YjJkeVpYTnpMQ0J6ZEhKbGJtZDBhQ0E5SUVSRlJrRlZURlJmUWtGRFMxOVRWRkpGVGtkVVNDa2dQVDVjYmlBZ0lDQW9LSEJ5YjJkeVpYTnpLajB5S1NBOElERXBJRDhnTUM0MUlDb2dZbUZ6WlVWaGMybHVaeTVpWVdOclNXNG9jSEp2WjNKbGMzTXNJSE4wY21WdVozUm9LU0E2SUNBd0xqVWdLaUFvTWlBdElFMWhkR2d1Y0c5M0tESXNJQzB4TUNBcUlDaHdjbTluY21WemN5QXRJREVwS1NrN1hHNWNibUpoYzJWRllYTnBibWN1WldGemFXNW5SblZ1WTNScGIyNGdQU0JqY21WaGRHVkZZWE5wYm1kR2RXNWpkR2x2Ymp0Y2JtSmhjMlZGWVhOcGJtY3VZM1ZpYVdOQ1pYcHBaWElnUFNCamRXSnBZMEpsZW1sbGNqdGNibUpoYzJWRllYTnBibWN1Ylc5a2FXWjVSV0Z6WlNBOUlDaGxZWE5wYm1jc0lDNHVMbUZ5WjNNcElEMCtJQ2h3Y205bmNtVnpjeWtnUFQ0Z1pXRnphVzVuS0hCeWIyZHlaWE56TENBdUxpNWhjbWR6S1R0Y2JseHVaWGh3YjNKMElHUmxabUYxYkhRZ1ltRnpaVVZoYzJsdVp6c2lYWDA9XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9hY3Rpb25zL2Vhc2luZy9wcmVzZXQtZWFzaW5nLmpzXG4gKiogbW9kdWxlIGlkID0gMTZcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHMuc3RlcFByb2dyZXNzID0gZXhwb3J0cy5zcGVlZFBlclNlY29uZCA9IGV4cG9ydHMuc3BlZWRQZXJGcmFtZSA9IGV4cG9ydHMuc21vb3RoID0gZXhwb3J0cy5yZXN0cmljdCA9IGV4cG9ydHMucmVsYXRpdmVWYWx1ZSA9IGV4cG9ydHMucmFuZG9tID0gZXhwb3J0cy5yYWRpYW5zVG9EZWdyZWVzID0gZXhwb3J0cy5wb2ludEZyb21BbmdsZUFuZERpc3RhbmNlID0gZXhwb3J0cy5vZmZzZXQgPSBleHBvcnRzLmdldFByb2dyZXNzRnJvbVZhbHVlID0gZXhwb3J0cy5nZXRWYWx1ZUZyb21Qcm9ncmVzcyA9IGV4cG9ydHMuaHlwb3RlbnVzZSA9IGV4cG9ydHMuZGlzdGFuY2UgPSBleHBvcnRzLmRpbGF0ZSA9IGV4cG9ydHMuZGVncmVlc1RvUmFkaWFucyA9IGV4cG9ydHMuYW5nbGUgPSB1bmRlZmluZWQ7XG5cbnZhciBfdXRpbHMgPSByZXF1aXJlKCcuL3V0aWxzJyk7XG5cbnZhciBaRVJPX1BPSU5UID0ge1xuICAgIHg6IDAsXG4gICAgeTogMCxcbiAgICB6OiAwXG59O1xuXG52YXIgZGlzdGFuY2UxRCA9IGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgcmV0dXJuIE1hdGguYWJzKGEgLSBiKTtcbn07XG5cbi8qXG4gICAgQW5nbGUgYmV0d2VlbiBwb2ludHNcbiAgICBcbiAgICBUcmFuc2xhdGVzIHRoZSBoeXBvdGhldGljYWwgbGluZSBzbyB0aGF0IHRoZSAnZnJvbScgY29vcmRpbmF0ZXNcbiAgICBhcmUgYXQgMCwwLCB0aGVuIHJldHVybiB0aGUgYW5nbGUgdXNpbmcgLmFuZ2xlRnJvbUNlbnRlcigpXG4gICAgXG4gICAgQHBhcmFtIFtvYmplY3RdOiBYIGFuZCBZIGNvb3JkaW5hdGVzIG9mIGZyb20gcG9pbnRcbiAgICBAcGFyYW0gW29iamVjdF06IFggYW5kIFkgY29yZGluYXRlcyBvZiB0byBwb2ludFxuICAgIEByZXR1cm4gW3JhZGlhbl06IEFuZ2xlIGJldHdlZW4gdGhlIHR3byBwb2ludHMgaW4gcmFkaWFuc1xuKi9cbnZhciBhbmdsZSA9IGV4cG9ydHMuYW5nbGUgPSBmdW5jdGlvbiAoYSkge1xuICAgIHZhciBiID0gYXJndW1lbnRzLmxlbmd0aCA8PSAxIHx8IGFyZ3VtZW50c1sxXSA9PT0gdW5kZWZpbmVkID8gWkVST19QT0lOVCA6IGFyZ3VtZW50c1sxXTtcbiAgICByZXR1cm4gcmFkaWFuc1RvRGVncmVlcyhNYXRoLmF0YW4yKGEueCAtIGIueCwgYS55IC0gYi55KSk7XG59O1xuXG4vKlxuICAgIENvbnZlcnQgZGVncmVlcyB0byByYWRpYW5zXG4gICAgXG4gICAgQHBhcmFtIFtudW1iZXJdOiBWYWx1ZSBpbiBkZWdyZWVzXG4gICAgQHJldHVybiBbbnVtYmVyXTogVmFsdWUgaW4gcmFkaWFuc1xuKi9cbnZhciBkZWdyZWVzVG9SYWRpYW5zID0gZXhwb3J0cy5kZWdyZWVzVG9SYWRpYW5zID0gZnVuY3Rpb24gKGRlZ3JlZXMpIHtcbiAgICByZXR1cm4gZGVncmVlcyAqIE1hdGguUEkgLyAxODA7XG59O1xuXG4vKlxuICAgIERpbGF0ZVxuICAgIFxuICAgIENoYW5nZSB0aGUgcHJvZ3Jlc3Npb24gYmV0d2VlbiBhIGFuZCBiIGFjY29yZGluZyB0byBkaWxhdGlvbi5cbiAgICBcbiAgICBTbyBkaWxhdGlvbiA9IDAuNSB3b3VsZCBjaGFuZ2VcbiAgICBcbiAgICBhIC0tLS0tLS0tLSBiXG4gICAgXG4gICAgdG9cbiAgICBcbiAgICBhIC0tLS0gYlxuICAgIFxuICAgIEBwYXJhbSBbbnVtYmVyXTogUHJldmlvdXMgdmFsdWVcbiAgICBAcGFyYW0gW251bWJlcl06IEN1cnJlbnQgdmFsdWVcbiAgICBAcGFyYW0gW251bWJlcl06IERpbGF0ZSBwcm9ncmVzcyBieSB4XG4gICAgQHJldHVybiBbbnVtYmVyXTogUHJldmlvdXMgdmFsdWUgcGx1cyB0aGUgZGlsYXRlZCBkaWZmZXJlbmNlXG4qL1xudmFyIGRpbGF0ZSA9IGV4cG9ydHMuZGlsYXRlID0gZnVuY3Rpb24gKGEsIGIsIGRpbGF0aW9uKSB7XG4gICAgcmV0dXJuIGEgKyAoYiAtIGEpICogZGlsYXRpb247XG59O1xuXG4vKlxuICAgIERpc3RhbmNlXG4gICAgXG4gICAgUmV0dXJucyB0aGUgZGlzdGFuY2UgYmV0d2VlbiB0d28gbiBkaW1lbnNpb25hbCBwb2ludHMuXG4gICAgXG4gICAgQHBhcmFtIFtvYmplY3QvbnVtYmVyXTogeCBhbmQgeSBvciBqdXN0IHggb2YgcG9pbnQgQVxuICAgIEBwYXJhbSBbb2JqZWN0L251bWJlcl06IChvcHRpb25hbCk6IHggYW5kIHkgb3IganVzdCB4IG9mIHBvaW50IEJcbiAgICBAcmV0dXJuIFtudW1iZXJdOiBUaGUgZGlzdGFuY2UgYmV0d2VlbiB0aGUgdHdvIHBvaW50c1xuKi9cbnZhciBkaXN0YW5jZSA9IGV4cG9ydHMuZGlzdGFuY2UgPSBmdW5jdGlvbiAoYSkge1xuICAgIHZhciBiID0gYXJndW1lbnRzLmxlbmd0aCA8PSAxIHx8IGFyZ3VtZW50c1sxXSA9PT0gdW5kZWZpbmVkID8gWkVST19QT0lOVCA6IGFyZ3VtZW50c1sxXTtcblxuICAgIC8vIDFEIGRpbWVuc2lvbnNcbiAgICBpZiAoKDAsIF91dGlscy5pc051bSkoYSkpIHtcbiAgICAgICAgcmV0dXJuIGRpc3RhbmNlMUQoYSwgYik7XG5cbiAgICAgICAgLy8gTXVsdGktZGltZW5zaW9uYWxcbiAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdmFyIHhEZWx0YSA9IGRpc3RhbmNlMUQoYS54LCBiLngpO1xuICAgICAgICAgICAgdmFyIHlEZWx0YSA9IGRpc3RhbmNlMUQoYS55LCBiLnkpO1xuICAgICAgICAgICAgdmFyIHpEZWx0YSA9ICgwLCBfdXRpbHMuaXNOdW0pKGEueikgPyBkaXN0YW5jZTFEKGEueiwgYi56KSA6IDA7XG5cbiAgICAgICAgICAgIHJldHVybiBNYXRoLnNxcnQoTWF0aC5wb3coeERlbHRhLCAyKSArIE1hdGgucG93KHlEZWx0YSwgMikgKyBNYXRoLnBvdyh6RGVsdGEsIDIpKTtcbiAgICAgICAgfVxufTtcblxuLypcbiAgICBIeXBvdGVudXNlXG4gICAgXG4gICAgUmV0dXJucyB0aGUgaHlwb3RlbnVzZSwgc2lkZSBDLCBnaXZlbiB0aGUgbGVuZ3RocyBvZiBzaWRlcyBBIGFuZCBCLlxuICAgIFxuICAgIEBwYXJhbSBbbnVtYmVyXTogTGVuZ3RoIG9mIEFcbiAgICBAcGFyYW0gW251bWJlcl06IExlbmd0aCBvZiBCXG4gICAgQHJldHVybiBbbnVtYmVyXTogTGVuZ3RoIG9mIENcbiovXG52YXIgaHlwb3RlbnVzZSA9IGV4cG9ydHMuaHlwb3RlbnVzZSA9IGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgcmV0dXJuIE1hdGguc3FydChhICogYSArIGIgKiBiKTtcbn07XG5cbi8qXG4gICAgVmFsdWUgaW4gcmFuZ2UgZnJvbSBwcm9ncmVzc1xuICAgIFxuICAgIEdpdmVuIGEgbG93ZXIgbGltaXQgYW5kIGFuIHVwcGVyIGxpbWl0LCB3ZSByZXR1cm4gdGhlIHZhbHVlIHdpdGhpblxuICAgIHRoYXQgcmFuZ2UgYXMgZXhwcmVzc2VkIGJ5IHByb2dyZXNzIChhIG51bWJlciBmcm9tIDAtMSlcbiAgICBcbiAgICBAcGFyYW0gW251bWJlcl06IFRoZSBwcm9ncmVzcyBiZXR3ZWVuIGxvd2VyIGFuZCB1cHBlciBsaW1pdHMgZXhwcmVzc2VkIDAtMVxuICAgIEBwYXJhbSBbbnVtYmVyXTogTG93ZXIgbGltaXQgb2YgcmFuZ2VcbiAgICBAcGFyYW0gW251bWJlcl06IFVwcGVyIGxpbWl0IG9mIHJhbmdlXG4gICAgQHJldHVybiBbbnVtYmVyXTogVmFsdWUgYXMgY2FsY3VsYXRlZCBmcm9tIHByb2dyZXNzIHdpdGhpbiByYW5nZSAobm90IGxpbWl0ZWQgd2l0aGluIHJhbmdlKVxuKi9cbnZhciBnZXRWYWx1ZUZyb21Qcm9ncmVzcyA9IGV4cG9ydHMuZ2V0VmFsdWVGcm9tUHJvZ3Jlc3MgPSBmdW5jdGlvbiAocHJvZ3Jlc3MsIGZyb20sIHRvKSB7XG4gICAgcmV0dXJuIC1wcm9ncmVzcyAqIGZyb20gKyBwcm9ncmVzcyAqIHRvICsgZnJvbTtcbn07XG5cbi8qXG4gICAgUHJvZ3Jlc3Mgd2l0aGluIGdpdmVuIHJhbmdlXG4gICAgXG4gICAgR2l2ZW4gYSBsb3dlciBsaW1pdCBhbmQgYW4gdXBwZXIgbGltaXQsIHdlIHJldHVybiB0aGUgcHJvZ3Jlc3NcbiAgICAoZXhwcmVzc2VkIGFzIGEgbnVtYmVyIDAtMSkgcmVwcmVzZW50ZWQgYnkgdGhlIGdpdmVuIHZhbHVlLCBhbmRcbiAgICBsaW1pdCB0aGF0IHByb2dyZXNzIHRvIHdpdGhpbiAwLTEuXG4gICAgXG4gICAgQHBhcmFtIFtudW1iZXJdOiBWYWx1ZSB0byBmaW5kIHByb2dyZXNzIHdpdGhpbiBnaXZlbiByYW5nZVxuICAgIEBwYXJhbSBbbnVtYmVyXTogTG93ZXIgbGltaXQgXG4gICAgQHBhcmFtIFtudW1iZXJdOiBVcHBlciBsaW1pdFxuICAgIEByZXR1cm4gW251bWJlcl06IFByb2dyZXNzIG9mIHZhbHVlIHdpdGhpbiByYW5nZSBhcyBleHByZXNzZWQgMC0xXG4qL1xudmFyIGdldFByb2dyZXNzRnJvbVZhbHVlID0gZXhwb3J0cy5nZXRQcm9ncmVzc0Zyb21WYWx1ZSA9IGZ1bmN0aW9uICh2YWx1ZSwgZnJvbSwgdG8pIHtcbiAgICByZXR1cm4gKHZhbHVlIC0gZnJvbSkgLyAodG8gLSBmcm9tKTtcbn07XG5cbi8qXG4gICAgT2Zmc2V0IGJldHdlZW4gdHdvIG9iamVjdHMgb2YgbnVtYmVyc1xuXG4gICAgSWYgcHJvcGVydHkgaXMgZm91bmQgaW4gYiBub3QgcHJlc2VudCBpbiBhLCBpdCB3aWxsIHJldHVybiBgMGAgZm9yIHRoYXQgcHJvcC5cbiAgICBcbiAgICBAcGFyYW0gW1BvaW50XTogRmlyc3Qgb2JqZWN0XG4gICAgQHBhcmFtIFtQb2ludF06IFNlY29uZCBvYmplY3RcbiAgICBAcmV0dXJuIFtPZmZzZXRdOiBEaXN0YW5jZSBtZXRyaWNzIGJldHdlZW4gdHdvIHBvaW50c1xuKi9cbnZhciBvZmZzZXQgPSBleHBvcnRzLm9mZnNldCA9IGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgdmFyIG9mZnNldCA9IHt9O1xuXG4gICAgZm9yICh2YXIga2V5IGluIGIpIHtcbiAgICAgICAgaWYgKGIuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgICAgb2Zmc2V0W2tleV0gPSAoMCwgX3V0aWxzLmhhc1Byb3BlcnR5KShhLCBrZXkpID8gYltrZXldIC0gYVtrZXldIDogMDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBvZmZzZXQ7XG59O1xuXG4vKlxuICAgIFBvaW50IGZyb20gYW5nbGUgYW5kIGRpc3RhbmNlXG4gICAgXG4gICAgQHBhcmFtIFtvYmplY3RdOiAyRCBwb2ludCBvZiBvcmlnaW5cbiAgICBAcGFyYW0gW251bWJlcl06IEFuZ2xlIGZyb20gb3JpZ2luXG4gICAgQHBhcmFtIFtudW1iZXJdOiBEaXN0YW5jZSBmcm9tIG9yaWdpblxuICAgIEByZXR1cm4gW29iamVjdF06IENhbGN1bGF0ZWQgMkQgcG9pbnRcbiovXG52YXIgcG9pbnRGcm9tQW5nbGVBbmREaXN0YW5jZSA9IGV4cG9ydHMucG9pbnRGcm9tQW5nbGVBbmREaXN0YW5jZSA9IGZ1bmN0aW9uIChvcmlnaW4sIGFuZ2xlLCBkaXN0YW5jZSkge1xuICAgIGFuZ2xlID0gZGVncmVlc1RvUmFkaWFucyhhbmdsZSk7XG5cbiAgICByZXR1cm4ge1xuICAgICAgICB4OiBkaXN0YW5jZSAqIE1hdGguY29zKGFuZ2xlKSArIG9yaWdpbi54LFxuICAgICAgICB5OiBkaXN0YW5jZSAqIE1hdGguc2luKGFuZ2xlKSArIG9yaWdpbi55XG4gICAgfTtcbn07XG5cbi8qXG4gICAgQ29udmVydCByYWRpYW5zIHRvIGRlZ3JlZXNcbiAgICBcbiAgICBAcGFyYW0gW251bWJlcl06IFZhbHVlIGluIHJhZGlhbnNcbiAgICBAcmV0dXJuIFtudW1iZXJdOiBWYWx1ZSBpbiBkZWdyZWVzXG4qL1xudmFyIHJhZGlhbnNUb0RlZ3JlZXMgPSBleHBvcnRzLnJhZGlhbnNUb0RlZ3JlZXMgPSBmdW5jdGlvbiAocmFkaWFucykge1xuICAgIHJldHVybiByYWRpYW5zICogMTgwIC8gTWF0aC5QSTtcbn07XG5cbi8qXG4gICAgUmV0dXJuIHJhbmRvbSBudW1iZXIgYmV0d2VlbiByYW5nZVxuICAgIFxuICAgIEBwYXJhbSBbbnVtYmVyXSAob3B0aW9uYWwpOiBPdXRwdXQgbWluaW11bVxuICAgIEBwYXJhbSBbbnVtYmVyXSAob3B0aW9uYWwpOiBPdXRwdXQgbWF4aW11bVxuICAgIEByZXR1cm4gW251bWJlcl06IFJhbmRvbSBudW1iZXIgd2l0aGluIHJhbmdlLCBvciAwIGFuZCAxIGlmIG5vbmUgcHJvdmlkZWRcbiovXG52YXIgcmFuZG9tID0gZXhwb3J0cy5yYW5kb20gPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIG1pbiA9IGFyZ3VtZW50cy5sZW5ndGggPD0gMCB8fCBhcmd1bWVudHNbMF0gPT09IHVuZGVmaW5lZCA/IDAgOiBhcmd1bWVudHNbMF07XG4gICAgdmFyIG1heCA9IGFyZ3VtZW50cy5sZW5ndGggPD0gMSB8fCBhcmd1bWVudHNbMV0gPT09IHVuZGVmaW5lZCA/IDEgOiBhcmd1bWVudHNbMV07XG4gICAgcmV0dXJuIE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluKSArIG1pbjtcbn07XG5cbi8qXG4gICAgQ2FsY3VsYXRlIHJlbGF0aXZlIHZhbHVlXG4gICAgXG4gICAgVGFrZXMgdGhlIG9wZXJhdG9yIGFuZCB2YWx1ZSBmcm9tIGEgc3RyaW5nLCBpZSBcIis9NVwiLCBhbmQgYXBwbGllc1xuICAgIHRvIHRoZSBjdXJyZW50IHZhbHVlIHRvIHJlc29sdmUgYSBuZXcgdGFyZ2V0LlxuICAgIFxuICAgIEBwYXJhbSBbbnVtYmVyXTogQ3VycmVudCB2YWx1ZVxuICAgIEBwYXJhbSBbc3RyaW5nXTogUmVsYXRpdmUgdmFsdWVcbiAgICBAcmV0dXJuIFtudW1iZXJdOiBOZXcgdmFsdWVcbiovXG52YXIgcmVsYXRpdmVWYWx1ZSA9IGV4cG9ydHMucmVsYXRpdmVWYWx1ZSA9IGZ1bmN0aW9uIChjdXJyZW50LCByZWxhdGl2ZSkge1xuICAgIHZhciBuZXdWYWx1ZSA9IGN1cnJlbnQ7XG4gICAgdmFyIGVxdWF0aW9uID0gcmVsYXRpdmUuc3BsaXQoJz0nKTtcbiAgICB2YXIgb3BlcmF0b3IgPSBlcXVhdGlvblswXTtcblxuICAgIHZhciBfc3BsaXRWYWx1ZVVuaXQgPSAoMCwgX3V0aWxzLnNwbGl0VmFsdWVVbml0KShlcXVhdGlvblsxXSk7XG5cbiAgICB2YXIgdW5pdCA9IF9zcGxpdFZhbHVlVW5pdC51bml0O1xuICAgIHZhciB2YWx1ZSA9IF9zcGxpdFZhbHVlVW5pdC52YWx1ZTtcblxuICAgIHZhbHVlID0gcGFyc2VGbG9hdCh2YWx1ZSk7XG5cbiAgICBzd2l0Y2ggKG9wZXJhdG9yKSB7XG4gICAgICAgIGNhc2UgJysnOlxuICAgICAgICAgICAgbmV3VmFsdWUgKz0gdmFsdWU7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnLSc6XG4gICAgICAgICAgICBuZXdWYWx1ZSAtPSB2YWx1ZTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICcqJzpcbiAgICAgICAgICAgIG5ld1ZhbHVlICo9IHZhbHVlO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJy8nOlxuICAgICAgICAgICAgbmV3VmFsdWUgLz0gdmFsdWU7XG4gICAgICAgICAgICBicmVhaztcbiAgICB9XG5cbiAgICBpZiAodW5pdCkge1xuICAgICAgICBuZXdWYWx1ZSArPSB1bml0O1xuICAgIH1cblxuICAgIHJldHVybiBuZXdWYWx1ZTtcbn07XG5cbi8qXG4gICAgUmVzdHJpY3QgdmFsdWUgdG8gcmFuZ2VcbiAgICBcbiAgICBSZXR1cm4gdmFsdWUgd2l0aGluIHRoZSByYW5nZSBvZiBsb3dlckxpbWl0IGFuZCB1cHBlckxpbWl0XG4gICAgXG4gICAgQHBhcmFtIFtudW1iZXJdOiBWYWx1ZSB0byBrZWVwIHdpdGhpbiByYW5nZVxuICAgIEBwYXJhbSBbbnVtYmVyXTogTG93ZXIgbGltaXQgb2YgcmFuZ2VcbiAgICBAcGFyYW0gW251bWJlcl06IFVwcGVyIGxpbWl0IG9mIHJhbmdlXG4gICAgQHJldHVybiBbbnVtYmVyXTogVmFsdWUgYXMgbGltaXRlZCB3aXRoaW4gZ2l2ZW4gcmFuZ2VcbiovXG52YXIgcmVzdHJpY3QgPSBleHBvcnRzLnJlc3RyaWN0ID0gZnVuY3Rpb24gKHZhbHVlLCBtaW4sIG1heCkge1xuICAgIHJldHVybiBNYXRoLm1heChNYXRoLm1pbih2YWx1ZSwgbWF4KSwgbWluKTtcbn07XG5cbi8qXG4gICAgRnJhbWVyYXRlLWluZGVwZW5kZW50IHNtb290aGluZ1xuXG4gICAgQHBhcmFtIFtudW1iZXJdOiBOZXcgdmFsdWVcbiAgICBAcGFyYW0gW251bWJlcl06IE9sZCB2YWx1ZVxuICAgIEBwYXJhbSBbbnVtYmVyXTogRnJhbWUgZHVyYXRpb25cbiAgICBAcGFyYW0gW251bWJlcl0gKG9wdGlvbmFsKTogU21vb3RoaW5nICgwIGlzIG5vbmUpXG4qL1xudmFyIHNtb290aCA9IGV4cG9ydHMuc21vb3RoID0gZnVuY3Rpb24gKG5ld1ZhbHVlLCBvbGRWYWx1ZSwgZHVyYXRpb24pIHtcbiAgICB2YXIgc21vb3RoaW5nID0gYXJndW1lbnRzLmxlbmd0aCA8PSAzIHx8IGFyZ3VtZW50c1szXSA9PT0gdW5kZWZpbmVkID8gMCA6IGFyZ3VtZW50c1szXTtcbiAgICByZXR1cm4gKDAsIF91dGlscy50b0RlY2ltYWwpKG9sZFZhbHVlICsgZHVyYXRpb24gKiAobmV3VmFsdWUgLSBvbGRWYWx1ZSkgLyBNYXRoLm1heChzbW9vdGhpbmcsIGR1cmF0aW9uKSk7XG59O1xuXG4vKlxuICAgIENvbnZlcnQgeCBwZXIgc2Vjb25kIHRvIHBlciBmcmFtZSB2ZWxvY2l0eSBiYXNlZCBvbiBmcHNcbiAgICBcbiAgICBAcGFyYW0gW251bWJlcl06IFVuaXQgcGVyIHNlY29uZFxuICAgIEBwYXJhbSBbbnVtYmVyXTogRnJhbWUgZHVyYXRpb24gaW4gbXNcbiovXG52YXIgc3BlZWRQZXJGcmFtZSA9IGV4cG9ydHMuc3BlZWRQZXJGcmFtZSA9IGZ1bmN0aW9uICh4cHMsIGZyYW1lRHVyYXRpb24pIHtcbiAgICByZXR1cm4gKDAsIF91dGlscy5pc051bSkoeHBzKSA/IHhwcyAvICgxMDAwIC8gZnJhbWVEdXJhdGlvbikgOiAwO1xufTtcblxuLypcbiAgICBDb252ZXJ0IHZlbG9jaXR5IGludG8gdmVsaWNpdHkgcGVyIHNlY29uZFxuICAgIFxuICAgIEBwYXJhbSBbbnVtYmVyXTogVW5pdCBwZXIgZnJhbWVcbiAgICBAcGFyYW0gW251bWJlcl06IEZyYW1lIGR1cmF0aW9uIGluIG1zXG4qL1xudmFyIHNwZWVkUGVyU2Vjb25kID0gZXhwb3J0cy5zcGVlZFBlclNlY29uZCA9IGZ1bmN0aW9uICh2ZWxvY2l0eSwgZnJhbWVEdXJhdGlvbikge1xuICAgIHJldHVybiB2ZWxvY2l0eSAqICgxMDAwIC8gZnJhbWVEdXJhdGlvbik7XG59O1xuXG4vKlxuICAgIENyZWF0ZSBzdGVwcGVkIHZlcnNpb24gb2YgMC0xIHByb2dyZXNzXG4gICAgXG4gICAgQHBhcmFtIFtudW1iZXJdOiBDdXJyZW50IHZhbHVlXG4gICAgQHBhcmFtIFtpbnRdOiBOdW1iZXIgb2Ygc3RlcHNcbiAgICBAcmV0dXJuIFtudW1iZXJdOiBTdGVwcGVkIHZhbHVlXG4qL1xudmFyIHN0ZXBQcm9ncmVzcyA9IGV4cG9ydHMuc3RlcFByb2dyZXNzID0gZnVuY3Rpb24gKHByb2dyZXNzLCBzdGVwcykge1xuICAgIHZhciBzZWdtZW50ID0gMSAvIChzdGVwcyAtIDEpO1xuICAgIHZhciB0YXJnZXQgPSAxIC0gMSAvIHN0ZXBzO1xuICAgIHZhciBwcm9ncmVzc09mVGFyZ2V0ID0gTWF0aC5taW4ocHJvZ3Jlc3MgLyB0YXJnZXQsIDEpO1xuXG4gICAgcmV0dXJuIE1hdGguZmxvb3IocHJvZ3Jlc3NPZlRhcmdldCAvIHNlZ21lbnQpICogc2VnbWVudDtcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5OeVl5OXBibU12WTJGc1l5NXFjeUpkTENKdVlXMWxjeUk2VzEwc0ltMWhjSEJwYm1keklqb2lPenM3T3pzN08wRkJUMEVzU1VGQlRTeFZRVUZWTEVkQlFVYzdRVUZEWml4TFFVRkRMRVZCUVVVc1EwRkJRenRCUVVOS0xFdEJRVU1zUlVGQlJTeERRVUZETzBGQlEwb3NTMEZCUXl4RlFVRkZMRU5CUVVNN1EwRkRVQ3hEUVVGRE96dEJRVVZHTEVsQlFVMHNWVUZCVlN4SFFVRkhMRlZCUVVNc1EwRkJReXhGUVVGRkxFTkJRVU03VjBGQlN5eEpRVUZKTEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU03UTBGQlFUczdPenM3T3pzN096czdPMEZCUVVNc1FVRlpkRU1zU1VGQlRTeExRVUZMTEZkQlFVd3NTMEZCU3l4SFFVRkhMRlZCUVVNc1EwRkJRenRSUVVGRkxFTkJRVU1zZVVSQlFVY3NWVUZCVlR0WFFVRkxMR2RDUVVGblFpeERRVUZETEVsQlFVa3NRMEZCUXl4TFFVRkxMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTXNRMEZCUXl4RlFVRkZMRU5CUVVNc1EwRkJReXhEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRPME5CUVVFN096czdPenM3TzBGQlFVTXNRVUZSZUVZc1NVRkJUU3huUWtGQlowSXNWMEZCYUVJc1owSkJRV2RDTEVkQlFVY3NWVUZCUXl4UFFVRlBPMWRCUVVzc1QwRkJUeXhIUVVGSExFbEJRVWtzUTBGQlF5eEZRVUZGTEVkQlFVY3NSMEZCUnp0RFFVRkJPenM3T3pzN096czdPenM3T3pzN096czdPenRCUVVGRExFRkJiMEk1UkN4SlFVRk5MRTFCUVUwc1YwRkJUaXhOUVVGTkxFZEJRVWNzVlVGQlF5eERRVUZETEVWQlFVVXNRMEZCUXl4RlFVRkZMRkZCUVZFN1YwRkJTeXhEUVVGRExFZEJRVWtzUTBGQlF5eERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkJMRWRCUVVrc1VVRkJVU3hCUVVGRE8wTkJRVUU3T3pzN096czdPenM3TzBGQlFVTXNRVUZYTlVRc1NVRkJUU3hSUVVGUkxGZEJRVklzVVVGQlVTeEhRVUZITEZWQlFVTXNRMEZCUXl4RlFVRnhRanRSUVVGdVFpeERRVUZETEhsRVFVRkhMRlZCUVZVN096dEJRVVYwUXl4UlFVRkpMRmRCYUVWS0xFdEJRVXNzUlVGblJVc3NRMEZCUXl4RFFVRkRMRVZCUVVVN1FVRkRWaXhsUVVGUExGVkJRVlVzUTBGQlF5eERRVUZETEVWQlFVVXNRMEZCUXl4RFFVRkRPenM3UVVGQlF5eExRVWN6UWl4TlFVRk5PMEZCUTBnc1owSkJRVTBzVFVGQlRTeEhRVUZITEZWQlFWVXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhGUVVGRkxFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXp0QlFVTndReXhuUWtGQlRTeE5RVUZOTEVkQlFVY3NWVUZCVlN4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFVkJRVVVzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRPMEZCUTNCRExHZENRVUZOTEUxQlFVMHNSMEZCUnl4QlFVRkRMRmRCZGtWd1FpeExRVUZMTEVWQmRVVnhRaXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVkQlFVa3NWVUZCVlN4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFVkJRVVVzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJRenM3UVVGRmRrUXNiVUpCUVU4c1NVRkJTU3hEUVVGRExFbEJRVWtzUTBGQlF5eFRRVUZETEUxQlFVMHNSVUZCU1N4RFFVRkRMR0ZCUVVzc1RVRkJUU3hGUVVGSkxFTkJRVU1zUTBGQlF5eFpRVUZKTEUxQlFVMHNSVUZCU1N4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRE8xTkJRMjVGTzBOQlEwbzdPenM3T3pzN096czdPMEZCUVVNc1FVRlhTeXhKUVVGTkxGVkJRVlVzVjBGQlZpeFZRVUZWTEVkQlFVY3NWVUZCUXl4RFFVRkRMRVZCUVVVc1EwRkJRenRYUVVGTExFbEJRVWtzUTBGQlF5eEpRVUZKTEVOQlFVTXNRVUZCUXl4RFFVRkRMRWRCUVVjc1EwRkJReXhIUVVGTExFTkJRVU1zUjBGQlJ5eERRVUZETEVGQlFVTXNRMEZCUXp0RFFVRkJPenM3T3pzN096czdPenM3TzBGQlFVTXNRVUZoTVVRc1NVRkJUU3h2UWtGQmIwSXNWMEZCY0VJc2IwSkJRVzlDTEVkQlFVY3NWVUZCUXl4UlFVRlJMRVZCUVVVc1NVRkJTU3hGUVVGRkxFVkJRVVU3VjBGQlN5eEJRVUZETEVOQlFVVXNVVUZCVVN4SFFVRkhMRWxCUVVrc1IwRkJTeXhSUVVGUkxFZEJRVWNzUlVGQlJTeEJRVUZETEVkQlFVY3NTVUZCU1R0RFFVRkJPenM3T3pzN096czdPenM3T3p0QlFVRkRMRUZCWTJ4SExFbEJRVTBzYjBKQlFXOUNMRmRCUVhCQ0xHOUNRVUZ2UWl4SFFVRkhMRlZCUVVNc1MwRkJTeXhGUVVGRkxFbEJRVWtzUlVGQlJTeEZRVUZGTzFkQlFVc3NRMEZCUXl4TFFVRkxMRWRCUVVjc1NVRkJTU3hEUVVGQkxFbEJRVXNzUlVGQlJTeEhRVUZITEVsQlFVa3NRMEZCUVN4QlFVRkRPME5CUVVFN096czdPenM3T3pzN08wRkJRVU1zUVVGWEwwVXNTVUZCVFN4TlFVRk5MRmRCUVU0c1RVRkJUU3hIUVVGSExGVkJRVU1zUTBGQlF5eEZRVUZGTEVOQlFVTXNSVUZCU3p0QlFVTTFRaXhSUVVGTkxFMUJRVTBzUjBGQlJ5eEZRVUZGTEVOQlFVTTdPMEZCUld4Q0xGTkJRVXNzU1VGQlNTeEhRVUZITEVsQlFVa3NRMEZCUXl4RlFVRkZPMEZCUTJZc1dVRkJTU3hEUVVGRExFTkJRVU1zWTBGQll5eERRVUZETEVkQlFVY3NRMEZCUXl4RlFVRkZPMEZCUTNaQ0xHdENRVUZOTEVOQlFVTXNSMEZCUnl4RFFVRkRMRWRCUVVjc1YwRnNTWFJDTEZkQlFWY3NSVUZyU1hWQ0xFTkJRVU1zUlVGQlJTeEhRVUZITEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNc1IwRkJSeXhEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETEVkQlFVY3NRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJRenRUUVVNelJEdExRVU5LT3p0QlFVVkVMRmRCUVU4c1RVRkJUU3hEUVVGRE8wTkJRMnBDT3pzN096czdPenM3TzBGQlFVTXNRVUZWU3l4SlFVRk5MSGxDUVVGNVFpeFhRVUY2UWl4NVFrRkJlVUlzUjBGQlJ5eFZRVUZETEUxQlFVMHNSVUZCUlN4TFFVRkxMRVZCUVVVc1VVRkJVU3hGUVVGTE8wRkJRMnhGTEZOQlFVc3NSMEZCUnl4blFrRkJaMElzUTBGQlF5eExRVUZMTEVOQlFVTXNRMEZCUXpzN1FVRkZhRU1zVjBGQlR6dEJRVU5JTEZOQlFVTXNSVUZCUlN4UlFVRlJMRWRCUVVjc1NVRkJTU3hEUVVGRExFZEJRVWNzUTBGQlF5eExRVUZMTEVOQlFVTXNSMEZCUnl4TlFVRk5MRU5CUVVNc1EwRkJRenRCUVVONFF5eFRRVUZETEVWQlFVVXNVVUZCVVN4SFFVRkhMRWxCUVVrc1EwRkJReXhIUVVGSExFTkJRVU1zUzBGQlN5eERRVUZETEVkQlFVY3NUVUZCVFN4RFFVRkRMRU5CUVVNN1MwRkRNME1zUTBGQlF6dERRVU5NT3pzN096czdPenRCUVVGRExFRkJVVXNzU1VGQlRTeG5Ra0ZCWjBJc1YwRkJhRUlzWjBKQlFXZENMRWRCUVVjc1ZVRkJReXhQUVVGUE8xZEJRVXNzVDBGQlR5eEhRVUZITEVkQlFVY3NSMEZCUnl4SlFVRkpMRU5CUVVNc1JVRkJSVHREUVVGQk96czdPenM3T3pzN1FVRkJReXhCUVZNNVJDeEpRVUZOTEUxQlFVMHNWMEZCVGl4TlFVRk5MRWRCUVVjN1VVRkJReXhIUVVGSExIbEVRVUZITEVOQlFVTTdVVUZCUlN4SFFVRkhMSGxFUVVGSExFTkJRVU03VjBGQlN5eEpRVUZKTEVOQlFVTXNUVUZCVFN4RlFVRkZMRWxCUVVrc1IwRkJSeXhIUVVGSExFZEJRVWNzUTBGQlFTeEJRVUZETEVkQlFVY3NSMEZCUnp0RFFVRkJPenM3T3pzN096czdPenM3UVVGQlF5eEJRVmwyUlN4SlFVRk5MR0ZCUVdFc1YwRkJZaXhoUVVGaExFZEJRVWNzVlVGQlF5eFBRVUZQTEVWQlFVVXNVVUZCVVN4RlFVRkxPMEZCUTJoRUxGRkJRVWtzVVVGQlVTeEhRVUZITEU5QlFVOHNRMEZCUXp0QlFVTjJRaXhSUVVGTkxGRkJRVkVzUjBGQlJ5eFJRVUZSTEVOQlFVTXNTMEZCU3l4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRE8wRkJRM0pETEZGQlFVMHNVVUZCVVN4SFFVRkhMRkZCUVZFc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF6czdNRUpCUTFBc1YwRjJUSFJDTEdOQlFXTXNSVUYxVEhWQ0xGRkJRVkVzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXpzN1VVRkJNME1zU1VGQlNTeHRRa0ZCU2l4SlFVRkpPMUZCUVVVc1MwRkJTeXh0UWtGQlRDeExRVUZMT3p0QlFVVnFRaXhUUVVGTExFZEJRVWNzVlVGQlZTeERRVUZETEV0QlFVc3NRMEZCUXl4RFFVRkRPenRCUVVVeFFpeFpRVUZSTEZGQlFWRTdRVUZEYUVJc1lVRkJTeXhIUVVGSE8wRkJRMG9zYjBKQlFWRXNTVUZCU1N4TFFVRkxMRU5CUVVNN1FVRkRiRUlzYTBKQlFVMDdRVUZCUVN4QlFVTldMR0ZCUVVzc1IwRkJSenRCUVVOS0xHOUNRVUZSTEVsQlFVa3NTMEZCU3l4RFFVRkRPMEZCUTJ4Q0xHdENRVUZOTzBGQlFVRXNRVUZEVml4aFFVRkxMRWRCUVVjN1FVRkRTaXh2UWtGQlVTeEpRVUZKTEV0QlFVc3NRMEZCUXp0QlFVTnNRaXhyUWtGQlRUdEJRVUZCTEVGQlExWXNZVUZCU3l4SFFVRkhPMEZCUTBvc2IwSkJRVkVzU1VGQlNTeExRVUZMTEVOQlFVTTdRVUZEYkVJc2EwSkJRVTA3UVVGQlFTeExRVU5VT3p0QlFVVkVMRkZCUVVrc1NVRkJTU3hGUVVGRk8wRkJRMDRzWjBKQlFWRXNTVUZCU1N4SlFVRkpMRU5CUVVNN1MwRkRjRUk3TzBGQlJVUXNWMEZCVHl4UlFVRlJMRU5CUVVNN1EwRkRia0k3T3pzN096czdPenM3T3p0QlFVRkRMRUZCV1Vzc1NVRkJUU3hSUVVGUkxGZEJRVklzVVVGQlVTeEhRVUZITEZWQlFVTXNTMEZCU3l4RlFVRkZMRWRCUVVjc1JVRkJSU3hIUVVGSE8xZEJRVXNzU1VGQlNTeERRVUZETEVkQlFVY3NRMEZCUXl4SlFVRkpMRU5CUVVNc1IwRkJSeXhEUVVGRExFdEJRVXNzUlVGQlJTeEhRVUZITEVOQlFVTXNSVUZCUlN4SFFVRkhMRU5CUVVNN1EwRkJRVHM3T3pzN096czdPenRCUVVGRExFRkJWVEZGTEVsQlFVMHNUVUZCVFN4WFFVRk9MRTFCUVUwc1IwRkJSeXhWUVVGRExGRkJRVkVzUlVGQlJTeFJRVUZSTEVWQlFVVXNVVUZCVVR0UlFVRkZMRk5CUVZNc2VVUkJRVWNzUTBGQlF6dFhRVUZMTEZkQmNFOXVSU3hUUVVGVExFVkJiMDl2UlN4UlFVRlJMRWRCUVVrc1VVRkJVU3hKUVVGSkxGRkJRVkVzUjBGQlJ5eFJRVUZSTEVOQlFVRXNRVUZCUXl4SFFVRkhMRWxCUVVrc1EwRkJReXhIUVVGSExFTkJRVU1zVTBGQlV5eEZRVUZGTEZGQlFWRXNRMEZCUXl4QlFVRkRMRU5CUVVNN1EwRkJRVHM3T3pzN096czdRVUZCUXl4QlFWRjZTaXhKUVVGTkxHRkJRV0VzVjBGQllpeGhRVUZoTEVkQlFVY3NWVUZCUXl4SFFVRkhMRVZCUVVVc1lVRkJZVHRYUVVGTExFRkJRVU1zVjBFNVQyeEVMRXRCUVVzc1JVRTRUMjFFTEVkQlFVY3NRMEZCUXl4SFFVRkpMRWRCUVVjc1NVRkJTU3hKUVVGSkxFZEJRVWNzWVVGQllTeERRVUZCTEVGQlFVTXNSMEZCUnl4RFFVRkRPME5CUVVFN096czdPenM3TzBGQlFVTXNRVUZST1VZc1NVRkJUU3hqUVVGakxGZEJRV1FzWTBGQll5eEhRVUZITEZWQlFVTXNVVUZCVVN4RlFVRkZMR0ZCUVdFN1YwRkJTeXhSUVVGUkxFbEJRVWtzU1VGQlNTeEhRVUZITEdGQlFXRXNRMEZCUVN4QlFVRkRPME5CUVVFN096czdPenM3T3p0QlFVRkRMRUZCVTNSR0xFbEJRVTBzV1VGQldTeFhRVUZhTEZsQlFWa3NSMEZCUnl4VlFVRkRMRkZCUVZFc1JVRkJSU3hMUVVGTExFVkJRVXM3UVVGRE4wTXNVVUZCVFN4UFFVRlBMRWRCUVVjc1EwRkJReXhKUVVGSkxFdEJRVXNzUjBGQlJ5eERRVUZETEVOQlFVRXNRVUZCUXl4RFFVRkRPMEZCUTJoRExGRkJRVTBzVFVGQlRTeEhRVUZITEVOQlFVTXNSMEZCU1N4RFFVRkRMRWRCUVVjc1MwRkJTeXhCUVVGRExFTkJRVU03UVVGREwwSXNVVUZCVFN4blFrRkJaMElzUjBGQlJ5eEpRVUZKTEVOQlFVTXNSMEZCUnl4RFFVRkRMRkZCUVZFc1IwRkJSeXhOUVVGTkxFVkJRVVVzUTBGQlF5eERRVUZETEVOQlFVTTdPMEZCUlhoRUxGZEJRVThzU1VGQlNTeERRVUZETEV0QlFVc3NRMEZCUXl4blFrRkJaMElzUjBGQlJ5eFBRVUZQTEVOQlFVTXNSMEZCUnl4UFFVRlBMRU5CUVVNN1EwRkRNMFFzUTBGQlF5SXNJbVpwYkdVaU9pSmpZV3hqTG1weklpd2ljMjkxY21ObFVtOXZkQ0k2SWk5VmMyVnljeTlOWVhSMFVHVnljbmt2VTJsMFpYTXZjRzl3Ylc5MGFXOXVJaXdpYzI5MWNtTmxjME52Ym5SbGJuUWlPbHNpYVcxd2IzSjBJSHRjYmlBZ0lDQm9ZWE5RY205d1pYSjBlU3hjYmlBZ0lDQnBjMDUxYlN4Y2JpQWdJQ0J6Y0d4cGRGWmhiSFZsVlc1cGRDeGNiaUFnSUNCMGIwUmxZMmx0WVd4Y2JuMGdabkp2YlNBbkxpOTFkR2xzY3ljN1hHNWNibU52Ym5OMElGcEZVazlmVUU5SlRsUWdQU0I3WEc0Z0lDQWdlRG9nTUN4Y2JpQWdJQ0I1T2lBd0xGeHVJQ0FnSUhvNklEQmNibjA3WEc1Y2JtTnZibk4wSUdScGMzUmhibU5sTVVRZ1BTQW9ZU3dnWWlrZ1BUNGdUV0YwYUM1aFluTW9ZU0F0SUdJcE8xeHVYRzR2S2x4dUlDQWdJRUZ1WjJ4bElHSmxkSGRsWlc0Z2NHOXBiblJ6WEc0Z0lDQWdYRzRnSUNBZ1ZISmhibk5zWVhSbGN5QjBhR1VnYUhsd2IzUm9aWFJwWTJGc0lHeHBibVVnYzI4Z2RHaGhkQ0IwYUdVZ0oyWnliMjBuSUdOdmIzSmthVzVoZEdWelhHNGdJQ0FnWVhKbElHRjBJREFzTUN3Z2RHaGxiaUJ5WlhSMWNtNGdkR2hsSUdGdVoyeGxJSFZ6YVc1bklDNWhibWRzWlVaeWIyMURaVzUwWlhJb0tWeHVJQ0FnSUZ4dUlDQWdJRUJ3WVhKaGJTQmJiMkpxWldOMFhUb2dXQ0JoYm1RZ1dTQmpiMjl5WkdsdVlYUmxjeUJ2WmlCbWNtOXRJSEJ2YVc1MFhHNGdJQ0FnUUhCaGNtRnRJRnR2WW1wbFkzUmRPaUJZSUdGdVpDQlpJR052Y21ScGJtRjBaWE1nYjJZZ2RHOGdjRzlwYm5SY2JpQWdJQ0JBY21WMGRYSnVJRnR5WVdScFlXNWRPaUJCYm1kc1pTQmlaWFIzWldWdUlIUm9aU0IwZDI4Z2NHOXBiblJ6SUdsdUlISmhaR2xoYm5OY2Jpb3ZYRzVsZUhCdmNuUWdZMjl1YzNRZ1lXNW5iR1VnUFNBb1lTd2dZaUE5SUZwRlVrOWZVRTlKVGxRcElEMCtJSEpoWkdsaGJuTlViMFJsWjNKbFpYTW9UV0YwYUM1aGRHRnVNaWhoTG5nZ0xTQmlMbmdzSUdFdWVTQXRJR0l1ZVNrcE8xeHVYRzR2S2x4dUlDQWdJRU52Ym5abGNuUWdaR1ZuY21WbGN5QjBieUJ5WVdScFlXNXpYRzRnSUNBZ1hHNGdJQ0FnUUhCaGNtRnRJRnR1ZFcxaVpYSmRPaUJXWVd4MVpTQnBiaUJrWldkeVpXVnpYRzRnSUNBZ1FISmxkSFZ5YmlCYmJuVnRZbVZ5WFRvZ1ZtRnNkV1VnYVc0Z2NtRmthV0Z1YzF4dUtpOWNibVY0Y0c5eWRDQmpiMjV6ZENCa1pXZHlaV1Z6Vkc5U1lXUnBZVzV6SUQwZ0tHUmxaM0psWlhNcElEMCtJR1JsWjNKbFpYTWdLaUJOWVhSb0xsQkpJQzhnTVRnd08xeHVYRzR2S2x4dUlDQWdJRVJwYkdGMFpWeHVJQ0FnSUZ4dUlDQWdJRU5vWVc1blpTQjBhR1VnY0hKdlozSmxjM05wYjI0Z1ltVjBkMlZsYmlCaElHRnVaQ0JpSUdGalkyOXlaR2x1WnlCMGJ5QmthV3hoZEdsdmJpNWNiaUFnSUNCY2JpQWdJQ0JUYnlCa2FXeGhkR2x2YmlBOUlEQXVOU0IzYjNWc1pDQmphR0Z1WjJWY2JpQWdJQ0JjYmlBZ0lDQmhJQzB0TFMwdExTMHRMU0JpWEc0Z0lDQWdYRzRnSUNBZ2RHOWNiaUFnSUNCY2JpQWdJQ0JoSUMwdExTMGdZbHh1SUNBZ0lGeHVJQ0FnSUVCd1lYSmhiU0JiYm5WdFltVnlYVG9nVUhKbGRtbHZkWE1nZG1Gc2RXVmNiaUFnSUNCQWNHRnlZVzBnVzI1MWJXSmxjbDA2SUVOMWNuSmxiblFnZG1Gc2RXVmNiaUFnSUNCQWNHRnlZVzBnVzI1MWJXSmxjbDA2SUVScGJHRjBaU0J3Y205bmNtVnpjeUJpZVNCNFhHNGdJQ0FnUUhKbGRIVnliaUJiYm5WdFltVnlYVG9nVUhKbGRtbHZkWE1nZG1Gc2RXVWdjR3gxY3lCMGFHVWdaR2xzWVhSbFpDQmthV1ptWlhKbGJtTmxYRzRxTDF4dVpYaHdiM0owSUdOdmJuTjBJR1JwYkdGMFpTQTlJQ2hoTENCaUxDQmthV3hoZEdsdmJpa2dQVDRnWVNBcklDZ29ZaUF0SUdFcElDb2daR2xzWVhScGIyNHBPMXh1WEc0dktseHVJQ0FnSUVScGMzUmhibU5sWEc0Z0lDQWdYRzRnSUNBZ1VtVjBkWEp1Y3lCMGFHVWdaR2x6ZEdGdVkyVWdZbVYwZDJWbGJpQjBkMjhnYmlCa2FXMWxibk5wYjI1aGJDQndiMmx1ZEhNdVhHNGdJQ0FnWEc0Z0lDQWdRSEJoY21GdElGdHZZbXBsWTNRdmJuVnRZbVZ5WFRvZ2VDQmhibVFnZVNCdmNpQnFkWE4wSUhnZ2IyWWdjRzlwYm5RZ1FWeHVJQ0FnSUVCd1lYSmhiU0JiYjJKcVpXTjBMMjUxYldKbGNsMDZJQ2h2Y0hScGIyNWhiQ2s2SUhnZ1lXNWtJSGtnYjNJZ2FuVnpkQ0I0SUc5bUlIQnZhVzUwSUVKY2JpQWdJQ0JBY21WMGRYSnVJRnR1ZFcxaVpYSmRPaUJVYUdVZ1pHbHpkR0Z1WTJVZ1ltVjBkMlZsYmlCMGFHVWdkSGR2SUhCdmFXNTBjMXh1S2k5Y2JtVjRjRzl5ZENCamIyNXpkQ0JrYVhOMFlXNWpaU0E5SUNoaExDQmlJRDBnV2tWU1QxOVFUMGxPVkNrZ1BUNGdlMXh1SUNBZ0lDOHZJREZFSUdScGJXVnVjMmx2Ym5OY2JpQWdJQ0JwWmlBb2FYTk9kVzBvWVNrcElIdGNiaUFnSUNBZ0lDQWdjbVYwZFhKdUlHUnBjM1JoYm1ObE1VUW9ZU3dnWWlrN1hHNWNiaUFnSUNBdkx5Qk5kV3gwYVMxa2FXMWxibk5wYjI1aGJGeHVJQ0FnSUgwZ1pXeHpaU0I3WEc0Z0lDQWdJQ0FnSUdOdmJuTjBJSGhFWld4MFlTQTlJR1JwYzNSaGJtTmxNVVFvWVM1NExDQmlMbmdwTzF4dUlDQWdJQ0FnSUNCamIyNXpkQ0I1UkdWc2RHRWdQU0JrYVhOMFlXNWpaVEZFS0dFdWVTd2dZaTU1S1R0Y2JpQWdJQ0FnSUNBZ1kyOXVjM1FnZWtSbGJIUmhJRDBnS0dselRuVnRLR0V1ZWlrcElEOGdaR2x6ZEdGdVkyVXhSQ2hoTG5vc0lHSXVlaWtnT2lBd08xeHVYRzRnSUNBZ0lDQWdJSEpsZEhWeWJpQk5ZWFJvTG5OeGNuUW9LSGhFWld4MFlTQXFLaUF5S1NBcklDaDVSR1ZzZEdFZ0tpb2dNaWtnS3lBb2VrUmxiSFJoSUNvcUlESXBLVHRjYmlBZ0lDQjlYRzU5TzF4dUlGeHVMeXBjYmlBZ0lDQkllWEJ2ZEdWdWRYTmxYRzRnSUNBZ1hHNGdJQ0FnVW1WMGRYSnVjeUIwYUdVZ2FIbHdiM1JsYm5WelpTd2djMmxrWlNCRExDQm5hWFpsYmlCMGFHVWdiR1Z1WjNSb2N5QnZaaUJ6YVdSbGN5QkJJR0Z1WkNCQ0xseHVJQ0FnSUZ4dUlDQWdJRUJ3WVhKaGJTQmJiblZ0WW1WeVhUb2dUR1Z1WjNSb0lHOW1JRUZjYmlBZ0lDQkFjR0Z5WVcwZ1cyNTFiV0psY2wwNklFeGxibWQwYUNCdlppQkNYRzRnSUNBZ1FISmxkSFZ5YmlCYmJuVnRZbVZ5WFRvZ1RHVnVaM1JvSUc5bUlFTmNiaW92WEc1bGVIQnZjblFnWTI5dWMzUWdhSGx3YjNSbGJuVnpaU0E5SUNoaExDQmlLU0E5UGlCTllYUm9Mbk54Y25Rb0tHRWdLaUJoS1NBcklDaGlJQ29nWWlrcE8xeHVYRzR2S2x4dUlDQWdJRlpoYkhWbElHbHVJSEpoYm1kbElHWnliMjBnY0hKdlozSmxjM05jYmlBZ0lDQmNiaUFnSUNCSGFYWmxiaUJoSUd4dmQyVnlJR3hwYldsMElHRnVaQ0JoYmlCMWNIQmxjaUJzYVcxcGRDd2dkMlVnY21WMGRYSnVJSFJvWlNCMllXeDFaU0IzYVhSb2FXNWNiaUFnSUNCMGFHRjBJSEpoYm1kbElHRnpJR1Y0Y0hKbGMzTmxaQ0JpZVNCd2NtOW5jbVZ6Y3lBb1lTQnVkVzFpWlhJZ1puSnZiU0F3TFRFcFhHNGdJQ0FnWEc0Z0lDQWdRSEJoY21GdElGdHVkVzFpWlhKZE9pQlVhR1VnY0hKdlozSmxjM01nWW1WMGQyVmxiaUJzYjNkbGNpQmhibVFnZFhCd1pYSWdiR2x0YVhSeklHVjRjSEpsYzNObFpDQXdMVEZjYmlBZ0lDQkFjR0Z5WVcwZ1cyNTFiV0psY2wwNklFeHZkMlZ5SUd4cGJXbDBJRzltSUhKaGJtZGxYRzRnSUNBZ1FIQmhjbUZ0SUZ0dWRXMWlaWEpkT2lCVmNIQmxjaUJzYVcxcGRDQnZaaUJ5WVc1blpWeHVJQ0FnSUVCeVpYUjFjbTRnVzI1MWJXSmxjbDA2SUZaaGJIVmxJR0Z6SUdOaGJHTjFiR0YwWldRZ1puSnZiU0J3Y205bmNtVnpjeUIzYVhSb2FXNGdjbUZ1WjJVZ0tHNXZkQ0JzYVcxcGRHVmtJSGRwZEdocGJpQnlZVzVuWlNsY2Jpb3ZYRzVsZUhCdmNuUWdZMjl1YzNRZ1oyVjBWbUZzZFdWR2NtOXRVSEp2WjNKbGMzTWdQU0FvY0hKdlozSmxjM01zSUdaeWIyMHNJSFJ2S1NBOVBpQW9MU0J3Y205bmNtVnpjeUFxSUdaeWIyMHBJQ3NnS0hCeWIyZHlaWE56SUNvZ2RHOHBJQ3NnWm5KdmJUdGNibHh1THlwY2JpQWdJQ0JRY205bmNtVnpjeUIzYVhSb2FXNGdaMmwyWlc0Z2NtRnVaMlZjYmlBZ0lDQmNiaUFnSUNCSGFYWmxiaUJoSUd4dmQyVnlJR3hwYldsMElHRnVaQ0JoYmlCMWNIQmxjaUJzYVcxcGRDd2dkMlVnY21WMGRYSnVJSFJvWlNCd2NtOW5jbVZ6YzF4dUlDQWdJQ2hsZUhCeVpYTnpaV1FnWVhNZ1lTQnVkVzFpWlhJZ01DMHhLU0J5WlhCeVpYTmxiblJsWkNCaWVTQjBhR1VnWjJsMlpXNGdkbUZzZFdVc0lHRnVaRnh1SUNBZ0lHeHBiV2wwSUhSb1lYUWdjSEp2WjNKbGMzTWdkRzhnZDJsMGFHbHVJREF0TVM1Y2JpQWdJQ0JjYmlBZ0lDQkFjR0Z5WVcwZ1cyNTFiV0psY2wwNklGWmhiSFZsSUhSdklHWnBibVFnY0hKdlozSmxjM01nZDJsMGFHbHVJR2RwZG1WdUlISmhibWRsWEc0Z0lDQWdRSEJoY21GdElGdHVkVzFpWlhKZE9pQk1iM2RsY2lCc2FXMXBkQ0JjYmlBZ0lDQkFjR0Z5WVcwZ1cyNTFiV0psY2wwNklGVndjR1Z5SUd4cGJXbDBYRzRnSUNBZ1FISmxkSFZ5YmlCYmJuVnRZbVZ5WFRvZ1VISnZaM0psYzNNZ2IyWWdkbUZzZFdVZ2QybDBhR2x1SUhKaGJtZGxJR0Z6SUdWNGNISmxjM05sWkNBd0xURmNiaW92WEc1bGVIQnZjblFnWTI5dWMzUWdaMlYwVUhKdlozSmxjM05HY205dFZtRnNkV1VnUFNBb2RtRnNkV1VzSUdaeWIyMHNJSFJ2S1NBOVBpQW9kbUZzZFdVZ0xTQm1jbTl0S1NBdklDaDBieUF0SUdaeWIyMHBPMXh1WEc0dktseHVJQ0FnSUU5bVpuTmxkQ0JpWlhSM1pXVnVJSFIzYnlCdlltcGxZM1J6SUc5bUlHNTFiV0psY25OY2JseHVJQ0FnSUVsbUlIQnliM0JsY25SNUlHbHpJR1p2ZFc1a0lHbHVJR0lnYm05MElIQnlaWE5sYm5RZ2FXNGdZU3dnYVhRZ2QybHNiQ0J5WlhSMWNtNGdZREJnSUdadmNpQjBhR0YwSUhCeWIzQXVYRzRnSUNBZ1hHNGdJQ0FnUUhCaGNtRnRJRnRRYjJsdWRGMDZJRVpwY25OMElHOWlhbVZqZEZ4dUlDQWdJRUJ3WVhKaGJTQmJVRzlwYm5SZE9pQlRaV052Ym1RZ2IySnFaV04wWEc0Z0lDQWdRSEpsZEhWeWJpQmJUMlptYzJWMFhUb2dSR2x6ZEdGdVkyVWdiV1YwY21samN5QmlaWFIzWldWdUlIUjNieUJ3YjJsdWRITmNiaW92WEc1bGVIQnZjblFnWTI5dWMzUWdiMlptYzJWMElEMGdLR0VzSUdJcElEMCtJSHRjYmlBZ0lDQmpiMjV6ZENCdlptWnpaWFFnUFNCN2ZUdGNibHh1SUNBZ0lHWnZjaUFvYkdWMElHdGxlU0JwYmlCaUtTQjdYRzRnSUNBZ0lDQWdJR2xtSUNoaUxtaGhjMDkzYmxCeWIzQmxjblI1S0d0bGVTa3BJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lHOW1abk5sZEZ0clpYbGRJRDBnYUdGelVISnZjR1Z5ZEhrb1lTd2dhMlY1S1NBL0lHSmJhMlY1WFNBdElHRmJhMlY1WFNBNklEQTdYRzRnSUNBZ0lDQWdJSDFjYmlBZ0lDQjlYRzVjYmlBZ0lDQnlaWFIxY200Z2IyWm1jMlYwTzF4dWZUdGNibHh1THlwY2JpQWdJQ0JRYjJsdWRDQm1jbTl0SUdGdVoyeGxJR0Z1WkNCa2FYTjBZVzVqWlZ4dUlDQWdJRnh1SUNBZ0lFQndZWEpoYlNCYmIySnFaV04wWFRvZ01rUWdjRzlwYm5RZ2IyWWdiM0pwWjJsdVhHNGdJQ0FnUUhCaGNtRnRJRnR1ZFcxaVpYSmRPaUJCYm1kc1pTQm1jbTl0SUc5eWFXZHBibHh1SUNBZ0lFQndZWEpoYlNCYmJuVnRZbVZ5WFRvZ1JHbHpkR0Z1WTJVZ1puSnZiU0J2Y21sbmFXNWNiaUFnSUNCQWNtVjBkWEp1SUZ0dlltcGxZM1JkT2lCRFlXeGpkV3hoZEdWa0lESkVJSEJ2YVc1MFhHNHFMMXh1Wlhod2IzSjBJR052Ym5OMElIQnZhVzUwUm5KdmJVRnVaMnhsUVc1a1JHbHpkR0Z1WTJVZ1BTQW9iM0pwWjJsdUxDQmhibWRzWlN3Z1pHbHpkR0Z1WTJVcElEMCtJSHRjYmlBZ0lDQmhibWRzWlNBOUlHUmxaM0psWlhOVWIxSmhaR2xoYm5Nb1lXNW5iR1VwTzF4dVhHNGdJQ0FnY21WMGRYSnVJSHRjYmlBZ0lDQWdJQ0FnZURvZ1pHbHpkR0Z1WTJVZ0tpQk5ZWFJvTG1OdmN5aGhibWRzWlNrZ0t5QnZjbWxuYVc0dWVDeGNiaUFnSUNBZ0lDQWdlVG9nWkdsemRHRnVZMlVnS2lCTllYUm9Mbk5wYmloaGJtZHNaU2tnS3lCdmNtbG5hVzR1ZVZ4dUlDQWdJSDA3WEc1OU8xeHVYRzR2S2x4dUlDQWdJRU52Ym5abGNuUWdjbUZrYVdGdWN5QjBieUJrWldkeVpXVnpYRzRnSUNBZ1hHNGdJQ0FnUUhCaGNtRnRJRnR1ZFcxaVpYSmRPaUJXWVd4MVpTQnBiaUJ5WVdScFlXNXpYRzRnSUNBZ1FISmxkSFZ5YmlCYmJuVnRZbVZ5WFRvZ1ZtRnNkV1VnYVc0Z1pHVm5jbVZsYzF4dUtpOWNibVY0Y0c5eWRDQmpiMjV6ZENCeVlXUnBZVzV6Vkc5RVpXZHlaV1Z6SUQwZ0tISmhaR2xoYm5NcElEMCtJSEpoWkdsaGJuTWdLaUF4T0RBZ0x5Qk5ZWFJvTGxCSk8xeHVYRzR2S2x4dUlDQWdJRkpsZEhWeWJpQnlZVzVrYjIwZ2JuVnRZbVZ5SUdKbGRIZGxaVzRnY21GdVoyVmNiaUFnSUNCY2JpQWdJQ0JBY0dGeVlXMGdXMjUxYldKbGNsMGdLRzl3ZEdsdmJtRnNLVG9nVDNWMGNIVjBJRzFwYm1sdGRXMWNiaUFnSUNCQWNHRnlZVzBnVzI1MWJXSmxjbDBnS0c5d2RHbHZibUZzS1RvZ1QzVjBjSFYwSUcxaGVHbHRkVzFjYmlBZ0lDQkFjbVYwZFhKdUlGdHVkVzFpWlhKZE9pQlNZVzVrYjIwZ2JuVnRZbVZ5SUhkcGRHaHBiaUJ5WVc1blpTd2diM0lnTUNCaGJtUWdNU0JwWmlCdWIyNWxJSEJ5YjNacFpHVmtYRzRxTDF4dVpYaHdiM0owSUdOdmJuTjBJSEpoYm1SdmJTQTlJQ2h0YVc0Z1BTQXdMQ0J0WVhnZ1BTQXhLU0E5UGlCTllYUm9MbkpoYm1SdmJTZ3BJQ29nS0cxaGVDQXRJRzFwYmlrZ0t5QnRhVzQ3WEc1Y2JpOHFYRzRnSUNBZ1EyRnNZM1ZzWVhSbElISmxiR0YwYVhabElIWmhiSFZsWEc0Z0lDQWdYRzRnSUNBZ1ZHRnJaWE1nZEdobElHOXdaWEpoZEc5eUlHRnVaQ0IyWVd4MVpTQm1jbTl0SUdFZ2MzUnlhVzVuTENCcFpTQmNJaXM5TlZ3aUxDQmhibVFnWVhCd2JHbGxjMXh1SUNBZ0lIUnZJSFJvWlNCamRYSnlaVzUwSUhaaGJIVmxJSFJ2SUhKbGMyOXNkbVVnWVNCdVpYY2dkR0Z5WjJWMExseHVJQ0FnSUZ4dUlDQWdJRUJ3WVhKaGJTQmJiblZ0WW1WeVhUb2dRM1Z5Y21WdWRDQjJZV3gxWlZ4dUlDQWdJRUJ3WVhKaGJTQmJjM1J5YVc1blhUb2dVbVZzWVhScGRtVWdkbUZzZFdWY2JpQWdJQ0JBY21WMGRYSnVJRnR1ZFcxaVpYSmRPaUJPWlhjZ2RtRnNkV1ZjYmlvdlhHNWxlSEJ2Y25RZ1kyOXVjM1FnY21Wc1lYUnBkbVZXWVd4MVpTQTlJQ2hqZFhKeVpXNTBMQ0J5Wld4aGRHbDJaU2tnUFQ0Z2UxeHVJQ0FnSUd4bGRDQnVaWGRXWVd4MVpTQTlJR04xY25KbGJuUTdYRzRnSUNBZ1kyOXVjM1FnWlhGMVlYUnBiMjRnUFNCeVpXeGhkR2wyWlM1emNHeHBkQ2duUFNjcE8xeHVJQ0FnSUdOdmJuTjBJRzl3WlhKaGRHOXlJRDBnWlhGMVlYUnBiMjViTUYwN1hHNGdJQ0FnYkdWMElIc2dkVzVwZEN3Z2RtRnNkV1VnZlNBOUlITndiR2wwVm1Gc2RXVlZibWwwS0dWeGRXRjBhVzl1V3pGZEtUdGNibHh1SUNBZ0lIWmhiSFZsSUQwZ2NHRnljMlZHYkc5aGRDaDJZV3gxWlNrN1hHNWNiaUFnSUNCemQybDBZMmdnS0c5d1pYSmhkRzl5S1NCN1hHNGdJQ0FnWTJGelpTQW5LeWM2WEc0Z0lDQWdJQ0FnSUc1bGQxWmhiSFZsSUNzOUlIWmhiSFZsTzF4dUlDQWdJQ0FnSUNCaWNtVmhhenRjYmlBZ0lDQmpZWE5sSUNjdEp6cGNiaUFnSUNBZ0lDQWdibVYzVm1Gc2RXVWdMVDBnZG1Gc2RXVTdYRzRnSUNBZ0lDQWdJR0p5WldGck8xeHVJQ0FnSUdOaGMyVWdKeW9uT2x4dUlDQWdJQ0FnSUNCdVpYZFdZV3gxWlNBcVBTQjJZV3gxWlR0Y2JpQWdJQ0FnSUNBZ1luSmxZV3M3WEc0Z0lDQWdZMkZ6WlNBbkx5YzZYRzRnSUNBZ0lDQWdJRzVsZDFaaGJIVmxJQzg5SUhaaGJIVmxPMXh1SUNBZ0lDQWdJQ0JpY21WaGF6dGNiaUFnSUNCOVhHNGdJQ0FnWEc0Z0lDQWdhV1lnS0hWdWFYUXBJSHRjYmlBZ0lDQWdJQ0FnYm1WM1ZtRnNkV1VnS3owZ2RXNXBkRHRjYmlBZ0lDQjlYRzVjYmlBZ0lDQnlaWFIxY200Z2JtVjNWbUZzZFdVN1hHNTlPMXh1WEc0dktseHVJQ0FnSUZKbGMzUnlhV04wSUhaaGJIVmxJSFJ2SUhKaGJtZGxYRzRnSUNBZ1hHNGdJQ0FnVW1WMGRYSnVJSFpoYkhWbElIZHBkR2hwYmlCMGFHVWdjbUZ1WjJVZ2IyWWdiRzkzWlhKTWFXMXBkQ0JoYm1RZ2RYQndaWEpNYVcxcGRGeHVJQ0FnSUZ4dUlDQWdJRUJ3WVhKaGJTQmJiblZ0WW1WeVhUb2dWbUZzZFdVZ2RHOGdhMlZsY0NCM2FYUm9hVzRnY21GdVoyVmNiaUFnSUNCQWNHRnlZVzBnVzI1MWJXSmxjbDA2SUV4dmQyVnlJR3hwYldsMElHOW1JSEpoYm1kbFhHNGdJQ0FnUUhCaGNtRnRJRnR1ZFcxaVpYSmRPaUJWY0hCbGNpQnNhVzFwZENCdlppQnlZVzVuWlZ4dUlDQWdJRUJ5WlhSMWNtNGdXMjUxYldKbGNsMDZJRlpoYkhWbElHRnpJR3hwYldsMFpXUWdkMmwwYUdsdUlHZHBkbVZ1SUhKaGJtZGxYRzRxTDF4dVpYaHdiM0owSUdOdmJuTjBJSEpsYzNSeWFXTjBJRDBnS0haaGJIVmxMQ0J0YVc0c0lHMWhlQ2tnUFQ0Z1RXRjBhQzV0WVhnb1RXRjBhQzV0YVc0b2RtRnNkV1VzSUcxaGVDa3NJRzFwYmlrN1hHNWNiaThxWEc0Z0lDQWdSbkpoYldWeVlYUmxMV2x1WkdWd1pXNWtaVzUwSUhOdGIyOTBhR2x1WjF4dVhHNGdJQ0FnUUhCaGNtRnRJRnR1ZFcxaVpYSmRPaUJPWlhjZ2RtRnNkV1ZjYmlBZ0lDQkFjR0Z5WVcwZ1cyNTFiV0psY2wwNklFOXNaQ0IyWVd4MVpWeHVJQ0FnSUVCd1lYSmhiU0JiYm5WdFltVnlYVG9nUm5KaGJXVWdaSFZ5WVhScGIyNWNiaUFnSUNCQWNHRnlZVzBnVzI1MWJXSmxjbDBnS0c5d2RHbHZibUZzS1RvZ1UyMXZiM1JvYVc1bklDZ3dJR2x6SUc1dmJtVXBYRzRxTDF4dVpYaHdiM0owSUdOdmJuTjBJSE50YjI5MGFDQTlJQ2h1WlhkV1lXeDFaU3dnYjJ4a1ZtRnNkV1VzSUdSMWNtRjBhVzl1TENCemJXOXZkR2hwYm1jZ1BTQXdLU0E5UGlCMGIwUmxZMmx0WVd3b2IyeGtWbUZzZFdVZ0t5QW9aSFZ5WVhScGIyNGdLaUFvYm1WM1ZtRnNkV1VnTFNCdmJHUldZV3gxWlNrZ0x5Qk5ZWFJvTG0xaGVDaHpiVzl2ZEdocGJtY3NJR1IxY21GMGFXOXVLU2twTzF4dVhHNHZLbHh1SUNBZ0lFTnZiblpsY25RZ2VDQndaWElnYzJWamIyNWtJSFJ2SUhCbGNpQm1jbUZ0WlNCMlpXeHZZMmwwZVNCaVlYTmxaQ0J2YmlCbWNITmNiaUFnSUNCY2JpQWdJQ0JBY0dGeVlXMGdXMjUxYldKbGNsMDZJRlZ1YVhRZ2NHVnlJSE5sWTI5dVpGeHVJQ0FnSUVCd1lYSmhiU0JiYm5WdFltVnlYVG9nUm5KaGJXVWdaSFZ5WVhScGIyNGdhVzRnYlhOY2Jpb3ZYRzVsZUhCdmNuUWdZMjl1YzNRZ2MzQmxaV1JRWlhKR2NtRnRaU0E5SUNoNGNITXNJR1p5WVcxbFJIVnlZWFJwYjI0cElEMCtJQ2hwYzA1MWJTaDRjSE1wS1NBL0lIaHdjeUF2SUNneE1EQXdJQzhnWm5KaGJXVkVkWEpoZEdsdmJpa2dPaUF3TzF4dVhHNHZLbHh1SUNBZ0lFTnZiblpsY25RZ2RtVnNiMk5wZEhrZ2FXNTBieUIyWld4cFkybDBlU0J3WlhJZ2MyVmpiMjVrWEc0Z0lDQWdYRzRnSUNBZ1FIQmhjbUZ0SUZ0dWRXMWlaWEpkT2lCVmJtbDBJSEJsY2lCbWNtRnRaVnh1SUNBZ0lFQndZWEpoYlNCYmJuVnRZbVZ5WFRvZ1JuSmhiV1VnWkhWeVlYUnBiMjRnYVc0Z2JYTmNiaW92WEc1bGVIQnZjblFnWTI5dWMzUWdjM0JsWldSUVpYSlRaV052Ym1RZ1BTQW9kbVZzYjJOcGRIa3NJR1p5WVcxbFJIVnlZWFJwYjI0cElEMCtJSFpsYkc5amFYUjVJQ29nS0RFd01EQWdMeUJtY21GdFpVUjFjbUYwYVc5dUtUdGNibHh1THlwY2JpQWdJQ0JEY21WaGRHVWdjM1JsY0hCbFpDQjJaWEp6YVc5dUlHOW1JREF0TVNCd2NtOW5jbVZ6YzF4dUlDQWdJRnh1SUNBZ0lFQndZWEpoYlNCYmJuVnRZbVZ5WFRvZ1EzVnljbVZ1ZENCMllXeDFaVnh1SUNBZ0lFQndZWEpoYlNCYmFXNTBYVG9nVG5WdFltVnlJRzltSUhOMFpYQnpYRzRnSUNBZ1FISmxkSFZ5YmlCYmJuVnRZbVZ5WFRvZ1UzUmxjSEJsWkNCMllXeDFaVnh1S2k5Y2JtVjRjRzl5ZENCamIyNXpkQ0J6ZEdWd1VISnZaM0psYzNNZ1BTQW9jSEp2WjNKbGMzTXNJSE4wWlhCektTQTlQaUI3WEc0Z0lDQWdZMjl1YzNRZ2MyVm5iV1Z1ZENBOUlERWdMeUFvYzNSbGNITWdMU0F4S1R0Y2JpQWdJQ0JqYjI1emRDQjBZWEpuWlhRZ1BTQXhJQzBnS0RFZ0x5QnpkR1Z3Y3lrN1hHNGdJQ0FnWTI5dWMzUWdjSEp2WjNKbGMzTlBabFJoY21kbGRDQTlJRTFoZEdndWJXbHVLSEJ5YjJkeVpYTnpJQzhnZEdGeVoyVjBMQ0F4S1R0Y2JseHVJQ0FnSUhKbGRIVnliaUJOWVhSb0xtWnNiMjl5S0hCeWIyZHlaWE56VDJaVVlYSm5aWFFnTHlCelpXZHRaVzUwS1NBcUlITmxaMjFsYm5RN1hHNTlPeUpkZlE9PVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvaW5jL2NhbGMuanNcbiAqKiBtb2R1bGUgaWQgPSAxN1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX2RlZmF1bHRQcm9wcyA9IHJlcXVpcmUoJy4vc2V0dGluZ3MvZGVmYXVsdC1wcm9wcycpO1xuXG5leHBvcnRzLmRlZmF1bHQgPSB7XG4gICAgZGVmYXVsdFByb3BzOiBfZGVmYXVsdFByb3BzLm9wYWNpdHlcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5OeVl5OTJZV3gxWlMxMGVYQmxjeTloYkhCb1lTNXFjeUpkTENKdVlXMWxjeUk2VzEwc0ltMWhjSEJwYm1keklqb2lPenM3T3pzN2EwSkJSV1U3UVVGRFdDeG5Ra0ZCV1N4blFrRklVQ3hQUVVGUExFRkJSMU03UTBGRGVFSWlMQ0ptYVd4bElqb2lZV3h3YUdFdWFuTWlMQ0p6YjNWeVkyVlNiMjkwSWpvaUwxVnpaWEp6TDAxaGRIUlFaWEp5ZVM5VGFYUmxjeTl3YjNCdGIzUnBiMjRpTENKemIzVnlZMlZ6UTI5dWRHVnVkQ0k2V3lKcGJYQnZjblFnZXlCdmNHRmphWFI1SUgwZ1puSnZiU0FuTGk5elpYUjBhVzVuY3k5a1pXWmhkV3gwTFhCeWIzQnpKenRjYmx4dVpYaHdiM0owSUdSbFptRjFiSFFnZTF4dUlDQWdJR1JsWm1GMWJIUlFjbTl3Y3pvZ2IzQmhZMmwwZVZ4dWZUc2lYWDA9XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy92YWx1ZS10eXBlcy9hbHBoYS5qc1xuICoqIG1vZHVsZSBpZCA9IDE4XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzLmRlZmF1bHQgPSB7XG4gICAgZGVmYXVsdFByb3BzOiB7XG4gICAgICAgIHVuaXQ6ICdkZWcnXG4gICAgfVxufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbk55WXk5MllXeDFaUzEwZVhCbGN5OWhibWRzWlM1cWN5SmRMQ0p1WVcxbGN5STZXMTBzSW0xaGNIQnBibWR6SWpvaU96czdhMEpCUVdVN1FVRkRXQ3huUWtGQldTeEZRVUZGTzBGQlExWXNXVUZCU1N4RlFVRkZMRXRCUVVzN1MwRkRaRHREUVVOS0lpd2labWxzWlNJNkltRnVaMnhsTG1weklpd2ljMjkxY21ObFVtOXZkQ0k2SWk5VmMyVnljeTlOWVhSMFVHVnljbmt2VTJsMFpYTXZjRzl3Ylc5MGFXOXVJaXdpYzI5MWNtTmxjME52Ym5SbGJuUWlPbHNpWlhod2IzSjBJR1JsWm1GMWJIUWdlMXh1SUNBZ0lHUmxabUYxYkhSUWNtOXdjem9nZTF4dUlDQWdJQ0FnSUNCMWJtbDBPaUFuWkdWbkoxeHVJQ0FnSUgxY2JuMDdJbDE5XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy92YWx1ZS10eXBlcy9hbmdsZS5qc1xuICoqIG1vZHVsZSBpZCA9IDE5XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfdXRpbHMgPSByZXF1aXJlKCcuLi9pbmMvdXRpbHMnKTtcblxudmFyIF9weCA9IHJlcXVpcmUoJy4vcHgnKTtcblxudmFyIF9weDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9weCk7XG5cbnZhciBfZGljdGlvbmFyeSA9IHJlcXVpcmUoJy4vc2V0dGluZ3MvZGljdGlvbmFyeScpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5leHBvcnRzLmRlZmF1bHQgPSB7XG4gICAgZGVmYXVsdFByb3BzOiBfcHgyLmRlZmF1bHQuZGVmYXVsdFByb3BzLFxuXG4gICAgLypcbiAgICAgICAgU3BsaXQgcG9zaXRpb25zIGluIGZvcm1hdCBcIlggWSBaXCJcbiAgICAgICAgXG4gICAgICAgIEBwYXJhbSBbc3RyaW5nXTogUG9zaXRpb24gdmFsdWVzXG4gICAgICAgICAgICBcIjIwJSAzMCUgMFwiIC0+IHsyMCUsIDMwJSwgMH1cbiAgICAgICAgICAgIFwiMjAlIDMwJVwiIC0+IHsyMCUsIDMwJX1cbiAgICAgICAgICAgIFwiMjAlXCIgLT4gezIwJSwgMjAlfVxuICAgICovXG4gICAgc3BsaXQ6IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICB2YXIgc3BsaXRWYWx1ZXMgPSAoMCwgX3V0aWxzLnNwbGl0U3BhY2VEZWxpbWl0ZWQpKHZhbHVlKTtcbiAgICAgICAgdmFyIG51bUF4ZXMgPSBzcGxpdFZhbHVlcy5sZW5ndGg7XG4gICAgICAgIHZhciBzcGxpdFZhbHVlID0ge1xuICAgICAgICAgICAgWDogc3BsaXRWYWx1ZXNbMF0sXG4gICAgICAgICAgICBZOiBudW1BeGVzID4gMSA/IHNwbGl0VmFsdWVzWzFdIDogc3BsaXRWYWx1ZXNbMF1cbiAgICAgICAgfTtcblxuICAgICAgICBpZiAobnVtQXhlcyA+IDIpIHtcbiAgICAgICAgICAgIHNwbGl0VmFsdWUuWiA9IHNwbGl0VmFsdWVzWzJdO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHNwbGl0VmFsdWU7XG4gICAgfSxcblxuICAgIGNvbWJpbmU6IGZ1bmN0aW9uICh2YWx1ZXMpIHtcbiAgICAgICAgcmV0dXJuICgwLCBfdXRpbHMuY3JlYXRlRGVsaW1pdGVkKSh2YWx1ZXMsIF9kaWN0aW9uYXJ5LmF4ZXMsICcgJyk7XG4gICAgfVxufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbk55WXk5MllXeDFaUzEwZVhCbGN5OWhlR1Z6TG1weklsMHNJbTVoYldWeklqcGJYU3dpYldGd2NHbHVaM01pT2lJN096czdPenM3T3pzN096czdPMnRDUVVsbE8wRkJRMWdzWjBKQlFWa3NSVUZCUlN4aFFVRlpMRmxCUVZrN096czdPenM3T3pzN1FVRlZkRU1zVTBGQlN5eEZRVUZGTEZWQlFVTXNTMEZCU3l4RlFVRkxPMEZCUTJRc1dVRkJUU3hYUVVGWExFZEJRVWNzVjBGb1FrWXNiVUpCUVcxQ0xFVkJaMEpITEV0QlFVc3NRMEZCUXl4RFFVRkRPMEZCUXk5RExGbEJRVTBzVDBGQlR5eEhRVUZITEZkQlFWY3NRMEZCUXl4TlFVRk5MRU5CUVVNN1FVRkRia01zV1VGQlRTeFZRVUZWTEVkQlFVYzdRVUZEWml4aFFVRkRMRVZCUVVVc1YwRkJWeXhEUVVGRExFTkJRVU1zUTBGQlF6dEJRVU5xUWl4aFFVRkRMRVZCUVVVc1FVRkJReXhQUVVGUExFZEJRVWNzUTBGQlF5eEhRVUZKTEZkQlFWY3NRMEZCUXl4RFFVRkRMRU5CUVVNc1IwRkJSeXhYUVVGWExFTkJRVU1zUTBGQlF5eERRVUZETzFOQlEzSkVMRU5CUVVNN08wRkJSVVlzV1VGQlNTeFBRVUZQTEVkQlFVY3NRMEZCUXl4RlFVRkZPMEZCUTJJc2MwSkJRVlVzUTBGQlF5eERRVUZETEVkQlFVY3NWMEZCVnl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRE8xTkJRMnBET3p0QlFVVkVMR1ZCUVU4c1ZVRkJWU3hEUVVGRE8wdEJRM0pDT3p0QlFVVkVMRmRCUVU4c1JVRkJSU3hWUVVGRExFMUJRVTA3WlVGQlN5eFhRVGxDYUVJc1pVRkJaU3hGUVRoQ2FVSXNUVUZCVFN4alFUVkNkRU1zU1VGQlNTeEZRVFJDTUVNc1IwRkJSeXhEUVVGRE8wdEJRVUU3UTBGRE1VUWlMQ0ptYVd4bElqb2lZWGhsY3k1cWN5SXNJbk52ZFhKalpWSnZiM1FpT2lJdlZYTmxjbk12VFdGMGRGQmxjbko1TDFOcGRHVnpMM0J2Y0cxdmRHbHZiaUlzSW5OdmRYSmpaWE5EYjI1MFpXNTBJanBiSW1sdGNHOXlkQ0I3SUdOeVpXRjBaVVJsYkdsdGFYUmxaQ3dnYzNCc2FYUlRjR0ZqWlVSbGJHbHRhWFJsWkNCOUlHWnliMjBnSnk0dUwybHVZeTkxZEdsc2N5YzdYRzVwYlhCdmNuUWdjSGhXWVd4MVpWUjVjR1VnWm5KdmJTQW5MaTl3ZUNjN1hHNXBiWEJ2Y25RZ2V5QmhlR1Z6SUgwZ1puSnZiU0FuTGk5elpYUjBhVzVuY3k5a2FXTjBhVzl1WVhKNUp6dGNibHh1Wlhod2IzSjBJR1JsWm1GMWJIUWdlMXh1SUNBZ0lHUmxabUYxYkhSUWNtOXdjem9nY0hoV1lXeDFaVlI1Y0dVdVpHVm1ZWFZzZEZCeWIzQnpMRnh1SUNBZ0lDQWdJQ0JjYmlBZ0lDQXZLbHh1SUNBZ0lDQWdJQ0JUY0d4cGRDQndiM05wZEdsdmJuTWdhVzRnWm05eWJXRjBJRndpV0NCWklGcGNJbHh1SUNBZ0lDQWdJQ0JjYmlBZ0lDQWdJQ0FnUUhCaGNtRnRJRnR6ZEhKcGJtZGRPaUJRYjNOcGRHbHZiaUIyWVd4MVpYTmNiaUFnSUNBZ0lDQWdJQ0FnSUZ3aU1qQWxJRE13SlNBd1hDSWdMVDRnZXpJd0pTd2dNekFsTENBd2ZWeHVJQ0FnSUNBZ0lDQWdJQ0FnWENJeU1DVWdNekFsWENJZ0xUNGdlekl3SlN3Z016QWxmVnh1SUNBZ0lDQWdJQ0FnSUNBZ1hDSXlNQ1ZjSWlBdFBpQjdNakFsTENBeU1DVjlYRzRnSUNBZ0tpOWNiaUFnSUNCemNHeHBkRG9nS0haaGJIVmxLU0E5UGlCN1hHNGdJQ0FnSUNBZ0lHTnZibk4wSUhOd2JHbDBWbUZzZFdWeklEMGdjM0JzYVhSVGNHRmpaVVJsYkdsdGFYUmxaQ2gyWVd4MVpTazdYRzRnSUNBZ0lDQWdJR052Ym5OMElHNTFiVUY0WlhNZ1BTQnpjR3hwZEZaaGJIVmxjeTVzWlc1bmRHZzdYRzRnSUNBZ0lDQWdJR052Ym5OMElITndiR2wwVm1Gc2RXVWdQU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQllPaUJ6Y0d4cGRGWmhiSFZsYzFzd1hTeGNiaUFnSUNBZ0lDQWdJQ0FnSUZrNklDaHVkVzFCZUdWeklENGdNU2tnUHlCemNHeHBkRlpoYkhWbGMxc3hYU0E2SUhOd2JHbDBWbUZzZFdWeld6QmRYRzRnSUNBZ0lDQWdJSDA3WEc1Y2JpQWdJQ0FnSUNBZ2FXWWdLRzUxYlVGNFpYTWdQaUF5S1NCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0J6Y0d4cGRGWmhiSFZsTGxvZ1BTQnpjR3hwZEZaaGJIVmxjMXN5WFR0Y2JpQWdJQ0FnSUNBZ2ZWeHVYRzRnSUNBZ0lDQWdJSEpsZEhWeWJpQnpjR3hwZEZaaGJIVmxPMXh1SUNBZ0lIMHNYRzVjYmlBZ0lDQmpiMjFpYVc1bE9pQW9kbUZzZFdWektTQTlQaUJqY21WaGRHVkVaV3hwYldsMFpXUW9kbUZzZFdWekxDQmhlR1Z6TENBbklDY3BYRzU5TzF4dUlsMTlcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL3ZhbHVlLXR5cGVzL2F4ZXMuanNcbiAqKiBtb2R1bGUgaWQgPSAyMFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9O1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX3JnYiA9IHJlcXVpcmUoJy4vcmdiJyk7XG5cbnZhciBfcmdiMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JnYik7XG5cbnZhciBfaHNsID0gcmVxdWlyZSgnLi9oc2wnKTtcblxudmFyIF9oc2wyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfaHNsKTtcblxudmFyIF9oZXggPSByZXF1aXJlKCcuL2hleCcpO1xuXG52YXIgX2hleDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9oZXgpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG52YXIgY29sb3JUeXBlcyA9IFtfcmdiMi5kZWZhdWx0LCBfaHNsMi5kZWZhdWx0LCBfaGV4Mi5kZWZhdWx0XTtcbnZhciBudW1Db2xvclR5cGVzID0gY29sb3JUeXBlcy5sZW5ndGg7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IHtcbiAgICBkZWZhdWx0UHJvcHM6IF9leHRlbmRzKHt9LCBfcmdiMi5kZWZhdWx0LmRlZmF1bHRQcm9wcywgX2hzbDIuZGVmYXVsdC5kZWZhdWx0UHJvcHMpLFxuXG4gICAgdGVzdDogZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgIHJldHVybiBfcmdiMi5kZWZhdWx0LnRlc3QodmFsdWUpIHx8IF9oZXgyLmRlZmF1bHQudGVzdCh2YWx1ZSkgfHwgX2hzbDIuZGVmYXVsdC50ZXN0KHZhbHVlKTtcbiAgICB9LFxuXG4gICAgc3BsaXQ6IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IG51bUNvbG9yVHlwZXM7IGkrKykge1xuICAgICAgICAgICAgaWYgKGNvbG9yVHlwZXNbaV0udGVzdCh2YWx1ZSkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gY29sb3JUeXBlc1tpXS5zcGxpdCh2YWx1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgY29tYmluZTogZnVuY3Rpb24gKHZhbHVlcykge1xuICAgICAgICByZXR1cm4gdmFsdWVzLlJlZCAhPT0gdW5kZWZpbmVkID8gX3JnYjIuZGVmYXVsdC5jb21iaW5lKHZhbHVlcykgOiBfaHNsMi5kZWZhdWx0LmNvbWJpbmUodmFsdWVzKTtcbiAgICB9XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluTnlZeTkyWVd4MVpTMTBlWEJsY3k5amIyeHZjaTVxY3lKZExDSnVZVzFsY3lJNlcxMHNJbTFoY0hCcGJtZHpJam9pT3pzN096czdPenM3T3pzN096czdPenM3T3p0QlFVbEJMRWxCUVUwc1ZVRkJWU3hIUVVGSExEWkRRVUZsTEVOQlFVTTdRVUZEYmtNc1NVRkJUU3hoUVVGaExFZEJRVWNzVlVGQlZTeERRVUZETEUxQlFVMHNRMEZCUXpzN2EwSkJSWHBDTzBGQlExZ3NaMEpCUVZrc1pVRkJUeXhqUVVGSkxGbEJRVmtzUlVGQlN5eGpRVUZKTEZsQlFWa3NRMEZCUlRzN1FVRkZNVVFzVVVGQlNTeEZRVUZGTEZWQlFVTXNTMEZCU3p0bFFVRkxMR05CUVVrc1NVRkJTU3hEUVVGRExFdEJRVXNzUTBGQlF5eEpRVUZKTEdOQlFVa3NTVUZCU1N4RFFVRkRMRXRCUVVzc1EwRkJReXhKUVVGSkxHTkJRVWtzU1VGQlNTeERRVUZETEV0QlFVc3NRMEZCUXp0TFFVRkJPenRCUVVWMFJTeFRRVUZMTEVWQlFVVXNWVUZCUXl4TFFVRkxMRVZCUVVzN1FVRkRaQ3hoUVVGTExFbEJRVWtzUTBGQlF5eEhRVUZITEVOQlFVTXNSVUZCUlN4RFFVRkRMRWRCUVVjc1lVRkJZU3hGUVVGRkxFTkJRVU1zUlVGQlJTeEZRVUZGTzBGQlEzQkRMR2RDUVVGSkxGVkJRVlVzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4SlFVRkpMRU5CUVVNc1MwRkJTeXhEUVVGRExFVkJRVVU3UVVGRE0wSXNkVUpCUVU4c1ZVRkJWU3hEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEV0QlFVc3NRMEZCUXl4TFFVRkxMRU5CUVVNc1EwRkJRenRoUVVOeVF6dFRRVU5LTzB0QlEwbzdPMEZCUlVRc1YwRkJUeXhGUVVGRkxGVkJRVU1zVFVGQlRUdGxRVUZMTEVGQlFVTXNUVUZCVFN4RFFVRkRMRWRCUVVjc1MwRkJTeXhUUVVGVExFZEJRVWtzWTBGQlNTeFBRVUZQTEVOQlFVTXNUVUZCVFN4RFFVRkRMRWRCUVVjc1kwRkJTU3hQUVVGUExFTkJRVU1zVFVGQlRTeERRVUZETzB0QlFVRTdRMEZET1VZaUxDSm1hV3hsSWpvaVkyOXNiM0l1YW5NaUxDSnpiM1Z5WTJWU2IyOTBJam9pTDFWelpYSnpMMDFoZEhSUVpYSnllUzlUYVhSbGN5OXdiM0J0YjNScGIyNGlMQ0p6YjNWeVkyVnpRMjl1ZEdWdWRDSTZXeUpwYlhCdmNuUWdjbWRpSUdaeWIyMGdKeTR2Y21kaUp6dGNibWx0Y0c5eWRDQm9jMndnWm5KdmJTQW5MaTlvYzJ3bk8xeHVhVzF3YjNKMElHaGxlQ0JtY205dElDY3VMMmhsZUNjN1hHNWNibU52Ym5OMElHTnZiRzl5Vkhsd1pYTWdQU0JiY21kaUxDQm9jMndzSUdobGVGMDdYRzVqYjI1emRDQnVkVzFEYjJ4dmNsUjVjR1Z6SUQwZ1kyOXNiM0pVZVhCbGN5NXNaVzVuZEdnN1hHNWNibVY0Y0c5eWRDQmtaV1poZFd4MElIdGNiaUFnSUNCa1pXWmhkV3gwVUhKdmNITTZJSHNnTGk0dWNtZGlMbVJsWm1GMWJIUlFjbTl3Y3l3Z0xpNHVhSE5zTG1SbFptRjFiSFJRY205d2N5QjlMRnh1WEc0Z0lDQWdkR1Z6ZERvZ0tIWmhiSFZsS1NBOVBpQnlaMkl1ZEdWemRDaDJZV3gxWlNrZ2ZId2dhR1Y0TG5SbGMzUW9kbUZzZFdVcElIeDhJR2h6YkM1MFpYTjBLSFpoYkhWbEtTeGNibHh1SUNBZ0lITndiR2wwT2lBb2RtRnNkV1VwSUQwK0lIdGNiaUFnSUNBZ0lDQWdabTl5SUNoc1pYUWdhU0E5SURBN0lHa2dQQ0J1ZFcxRGIyeHZjbFI1Y0dWek95QnBLeXNwSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJR2xtSUNoamIyeHZjbFI1Y0dWelcybGRMblJsYzNRb2RtRnNkV1VwS1NCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2NtVjBkWEp1SUdOdmJHOXlWSGx3WlhOYmFWMHVjM0JzYVhRb2RtRnNkV1VwTzF4dUlDQWdJQ0FnSUNBZ0lDQWdmVnh1SUNBZ0lDQWdJQ0I5WEc0Z0lDQWdmU3hjYmx4dUlDQWdJR052YldKcGJtVTZJQ2gyWVd4MVpYTXBJRDArSUNoMllXeDFaWE11VW1Wa0lDRTlQU0IxYm1SbFptbHVaV1FwSUQ4Z2NtZGlMbU52YldKcGJtVW9kbUZzZFdWektTQTZJR2h6YkM1amIyMWlhVzVsS0haaGJIVmxjeWxjYm4wN1hHNGlYWDA9XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy92YWx1ZS10eXBlcy9jb2xvci5qc1xuICoqIG1vZHVsZSBpZCA9IDIxXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfdXRpbHMgPSByZXF1aXJlKCcuLi9pbmMvdXRpbHMnKTtcblxudmFyIEZMT0FUX1JFR0VYID0gLygtKT8oXFxkW1xcZFxcLl0qKS9nO1xudmFyIGdlbmVyYXRlVG9rZW4gPSBmdW5jdGlvbiAodG9rZW4pIHtcbiAgICByZXR1cm4gJyR7JyArIHRva2VuICsgJ30nO1xufTtcblxuZXhwb3J0cy5kZWZhdWx0ID0ge1xuXG4gICAgdGVzdDogZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgIHZhciBtYXRjaGVzID0gdmFsdWUubWF0Y2goRkxPQVRfUkVHRVgpO1xuICAgICAgICByZXR1cm4gKDAsIF91dGlscy5pc0FycmF5KShtYXRjaGVzKSAmJiBtYXRjaGVzLmxlbmd0aCA+IDE7XG4gICAgfSxcblxuICAgIHRlbXBsYXRlOiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgdmFyIGNvdW50ZXIgPSAwO1xuICAgICAgICByZXR1cm4gdmFsdWUucmVwbGFjZShGTE9BVF9SRUdFWCwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIGdlbmVyYXRlVG9rZW4oY291bnRlcisrKTtcbiAgICAgICAgfSk7XG4gICAgfSxcblxuICAgIHNwbGl0OiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgdmFyIHNwbGl0VmFsdWUgPSB7fTtcblxuICAgICAgICB2YWx1ZS5tYXRjaChGTE9BVF9SRUdFWCkuZm9yRWFjaChmdW5jdGlvbiAodmFsdWUsIGkpIHtcbiAgICAgICAgICAgIHJldHVybiBzcGxpdFZhbHVlW2ldID0gdmFsdWU7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiBzcGxpdFZhbHVlO1xuICAgIH0sXG5cbiAgICBjb21iaW5lOiBmdW5jdGlvbiAodmFsdWVzLCB0ZW1wbGF0ZSkge1xuICAgICAgICBmb3IgKHZhciBrZXkgaW4gdmFsdWVzKSB7XG4gICAgICAgICAgICBpZiAodmFsdWVzLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICAgICAgICB0ZW1wbGF0ZSA9IHRlbXBsYXRlLnJlcGxhY2UoZ2VuZXJhdGVUb2tlbihrZXkpLCB2YWx1ZXNba2V5XSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGVtcGxhdGU7XG4gICAgfVxuXG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluTnlZeTkyWVd4MVpTMTBlWEJsY3k5amIyMXdiR1Y0TG1weklsMHNJbTVoYldWeklqcGJYU3dpYldGd2NHbHVaM01pT2lJN096czdPenRCUVVWQkxFbEJRVTBzVjBGQlZ5eEhRVUZITEd0Q1FVRnJRaXhEUVVGRE8wRkJRM1pETEVsQlFVMHNZVUZCWVN4SFFVRkhMRlZCUVVNc1MwRkJTenRYUVVGTExFbEJRVWtzUjBGQlJ5eExRVUZMTEVkQlFVY3NSMEZCUnp0RFFVRkJMRU5CUVVNN08ydENRVVZ5UXpzN1FVRkZXQ3hSUVVGSkxFVkJRVVVzVlVGQlF5eExRVUZMTEVWQlFVczdRVUZEWWl4WlFVRk5MRTlCUVU4c1IwRkJSeXhMUVVGTExFTkJRVU1zUzBGQlN5eERRVUZETEZkQlFWY3NRMEZCUXl4RFFVRkRPMEZCUTNwRExHVkJRVkVzVjBGVVVDeFBRVUZQTEVWQlUxRXNUMEZCVHl4RFFVRkRMRWxCUVVrc1QwRkJUeXhEUVVGRExFMUJRVTBzUjBGQlJ5eERRVUZETEVOQlFVVTdTMEZEYmtRN08wRkJSVVFzV1VGQlVTeEZRVUZGTEZWQlFVTXNTMEZCU3l4RlFVRkxPMEZCUTJwQ0xGbEJRVWtzVDBGQlR5eEhRVUZITEVOQlFVTXNRMEZCUXp0QlFVTm9RaXhsUVVGUExFdEJRVXNzUTBGQlF5eFBRVUZQTEVOQlFVTXNWMEZCVnl4RlFVRkZPMjFDUVVGTkxHRkJRV0VzUTBGQlF5eFBRVUZQTEVWQlFVVXNRMEZCUXp0VFFVRkJMRU5CUVVNc1EwRkJRenRMUVVOeVJUczdRVUZGUkN4VFFVRkxMRVZCUVVVc1ZVRkJReXhMUVVGTExFVkJRVXM3UVVGRFpDeFpRVUZOTEZWQlFWVXNSMEZCUnl4RlFVRkZMRU5CUVVNN08wRkJSWFJDTEdGQlFVc3NRMEZCUXl4TFFVRkxMRU5CUVVNc1YwRkJWeXhEUVVGRExFTkJRVU1zVDBGQlR5eERRVUZETEZWQlFVTXNTMEZCU3l4RlFVRkZMRU5CUVVNN2JVSkJRVXNzVlVGQlZTeERRVUZETEVOQlFVTXNRMEZCUXl4SFFVRkhMRXRCUVVzN1UwRkJRU3hEUVVGRExFTkJRVU03TzBGQlJYUkZMR1ZCUVU4c1ZVRkJWU3hEUVVGRE8wdEJRM0pDT3p0QlFVVkVMRmRCUVU4c1JVRkJSU3hWUVVGRExFMUJRVTBzUlVGQlJTeFJRVUZSTEVWQlFVczdRVUZETTBJc1lVRkJTeXhKUVVGSkxFZEJRVWNzU1VGQlNTeE5RVUZOTEVWQlFVVTdRVUZEY0VJc1owSkJRVWtzVFVGQlRTeERRVUZETEdOQlFXTXNRMEZCUXl4SFFVRkhMRU5CUVVNc1JVRkJSVHRCUVVNMVFpeDNRa0ZCVVN4SFFVRkhMRkZCUVZFc1EwRkJReXhQUVVGUExFTkJRVU1zWVVGQllTeERRVUZETEVkQlFVY3NRMEZCUXl4RlFVRkZMRTFCUVUwc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF5eERRVUZETzJGQlEyaEZPMU5CUTBvN08wRkJSVVFzWlVGQlR5eFJRVUZSTEVOQlFVTTdTMEZEYmtJN08wTkJSVW9pTENKbWFXeGxJam9pWTI5dGNHeGxlQzVxY3lJc0luTnZkWEpqWlZKdmIzUWlPaUl2VlhObGNuTXZUV0YwZEZCbGNuSjVMMU5wZEdWekwzQnZjRzF2ZEdsdmJpSXNJbk52ZFhKalpYTkRiMjUwWlc1MElqcGJJbWx0Y0c5eWRDQjdJR2x6UVhKeVlYa2dmU0JtY205dElDY3VMaTlwYm1NdmRYUnBiSE1uTzF4dVhHNWpiMjV6ZENCR1RFOUJWRjlTUlVkRldDQTlJQzhvTFNrL0tGeGNaRnRjWEdSY1hDNWRLaWt2Wnp0Y2JtTnZibk4wSUdkbGJtVnlZWFJsVkc5clpXNGdQU0FvZEc5clpXNHBJRDArSUNja2V5Y2dLeUIwYjJ0bGJpQXJJQ2Q5Snp0Y2JseHVaWGh3YjNKMElHUmxabUYxYkhRZ2UxeHVYRzRnSUNBZ2RHVnpkRG9nS0haaGJIVmxLU0E5UGlCN1hHNGdJQ0FnSUNBZ0lHTnZibk4wSUcxaGRHTm9aWE1nUFNCMllXeDFaUzV0WVhSamFDaEdURTlCVkY5U1JVZEZXQ2s3WEc0Z0lDQWdJQ0FnSUhKbGRIVnliaUFvYVhOQmNuSmhlU2h0WVhSamFHVnpLU0FtSmlCdFlYUmphR1Z6TG14bGJtZDBhQ0ErSURFcE8xeHVJQ0FnSUgwc1hHNWNiaUFnSUNCMFpXMXdiR0YwWlRvZ0tIWmhiSFZsS1NBOVBpQjdYRzRnSUNBZ0lDQWdJR3hsZENCamIzVnVkR1Z5SUQwZ01EdGNiaUFnSUNBZ0lDQWdjbVYwZFhKdUlIWmhiSFZsTG5KbGNHeGhZMlVvUmt4UFFWUmZVa1ZIUlZnc0lDZ3BJRDArSUdkbGJtVnlZWFJsVkc5clpXNG9ZMjkxYm5SbGNpc3JLU2s3WEc0Z0lDQWdmU3hjYmx4dUlDQWdJSE53YkdsME9pQW9kbUZzZFdVcElEMCtJSHRjYmlBZ0lDQWdJQ0FnWTI5dWMzUWdjM0JzYVhSV1lXeDFaU0E5SUh0OU8xeHVJQ0FnSUNBZ0lDQmNiaUFnSUNBZ0lDQWdkbUZzZFdVdWJXRjBZMmdvUmt4UFFWUmZVa1ZIUlZncExtWnZja1ZoWTJnb0tIWmhiSFZsTENCcEtTQTlQaUJ6Y0d4cGRGWmhiSFZsVzJsZElEMGdkbUZzZFdVcE8xeHVYRzRnSUNBZ0lDQWdJSEpsZEhWeWJpQnpjR3hwZEZaaGJIVmxPMXh1SUNBZ0lIMHNYRzVjYmlBZ0lDQmpiMjFpYVc1bE9pQW9kbUZzZFdWekxDQjBaVzF3YkdGMFpTa2dQVDRnZTF4dUlDQWdJQ0FnSUNCbWIzSWdLR3hsZENCclpYa2dhVzRnZG1Gc2RXVnpLU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQnBaaUFvZG1Gc2RXVnpMbWhoYzA5M2JsQnliM0JsY25SNUtHdGxlU2twSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCMFpXMXdiR0YwWlNBOUlIUmxiWEJzWVhSbExuSmxjR3hoWTJVb1oyVnVaWEpoZEdWVWIydGxiaWhyWlhrcExDQjJZV3gxWlhOYmEyVjVYU2s3WEc0Z0lDQWdJQ0FnSUNBZ0lDQjlYRzRnSUNBZ0lDQWdJSDFjYmx4dUlDQWdJQ0FnSUNCeVpYUjFjbTRnZEdWdGNHeGhkR1U3WEc0Z0lDQWdmVnh1WEc1OU95SmRmUT09XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy92YWx1ZS10eXBlcy9jb21wbGV4LmpzXG4gKiogbW9kdWxlIGlkID0gMjJcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF9yZ2IgPSByZXF1aXJlKCcuL3JnYicpO1xuXG52YXIgX3JnYjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZ2IpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5leHBvcnRzLmRlZmF1bHQgPSB7XG4gICAgZGVmYXVsdFByb3BzOiBfcmdiMi5kZWZhdWx0LmRlZmF1bHRQcm9wcyxcblxuICAgIHRlc3Q6IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICByZXR1cm4gdmFsdWUgJiYgdmFsdWUuaW5kZXhPZignIycpID4gLTE7XG4gICAgfSxcblxuICAgIHNwbGl0OiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgdmFyIHIgPSB1bmRlZmluZWQsXG4gICAgICAgICAgICBnID0gdW5kZWZpbmVkLFxuICAgICAgICAgICAgYiA9IHVuZGVmaW5lZDtcblxuICAgICAgICAvLyBJZiB3ZSBoYXZlIDYgY2hhcmFjdGVycywgaWUgI0ZGMDAwMFxuICAgICAgICBpZiAodmFsdWUubGVuZ3RoID4gNCkge1xuICAgICAgICAgICAgciA9IHZhbHVlLnN1YnN0cigxLCAyKTtcbiAgICAgICAgICAgIGcgPSB2YWx1ZS5zdWJzdHIoMywgMik7XG4gICAgICAgICAgICBiID0gdmFsdWUuc3Vic3RyKDUsIDIpO1xuXG4gICAgICAgICAgICAvLyBPciB3ZSBoYXZlIDMgY2hhcmFjdGVycywgaWUgI0YwMFxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHIgPSB2YWx1ZS5zdWJzdHIoMSwgMSk7XG4gICAgICAgICAgICAgICAgZyA9IHZhbHVlLnN1YnN0cigyLCAxKTtcbiAgICAgICAgICAgICAgICBiID0gdmFsdWUuc3Vic3RyKDMsIDEpO1xuICAgICAgICAgICAgICAgIHIgKz0gcjtcbiAgICAgICAgICAgICAgICBnICs9IGc7XG4gICAgICAgICAgICAgICAgYiArPSBiO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBSZWQ6IHBhcnNlSW50KHIsIDE2KSxcbiAgICAgICAgICAgIEdyZWVuOiBwYXJzZUludChnLCAxNiksXG4gICAgICAgICAgICBCbHVlOiBwYXJzZUludChiLCAxNiksXG4gICAgICAgICAgICBBbHBoYTogMVxuICAgICAgICB9O1xuICAgIH0sXG5cbiAgICBjb21iaW5lOiBmdW5jdGlvbiAodmFsdWVzKSB7XG4gICAgICAgIHJldHVybiBfcmdiMi5kZWZhdWx0LmNvbWJpbmUodmFsdWVzKTtcbiAgICB9XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluTnlZeTkyWVd4MVpTMTBlWEJsY3k5b1pYZ3Vhbk1pWFN3aWJtRnRaWE1pT2x0ZExDSnRZWEJ3YVc1bmN5STZJanM3T3pzN096czdPenRyUWtGRlpUdEJRVU5ZTEdkQ1FVRlpMRVZCUVVVc1kwRkJTU3haUVVGWk96dEJRVVU1UWl4UlFVRkpMRVZCUVVVc1ZVRkJReXhMUVVGTE8yVkJRVTBzUzBGQlN5eEpRVUZKTEV0QlFVc3NRMEZCUXl4UFFVRlBMRU5CUVVNc1IwRkJSeXhEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETzB0QlFVTTdPMEZCUlc1RUxGTkJRVXNzUlVGQlJTeFZRVUZETEV0QlFVc3NSVUZCU3p0QlFVTmtMRmxCUVVrc1EwRkJReXhaUVVGQk8xbEJRVVVzUTBGQlF5eFpRVUZCTzFsQlFVVXNRMEZCUXl4WlFVRkJPenM3UVVGQlF5eEJRVWRhTEZsQlFVa3NTMEZCU3l4RFFVRkRMRTFCUVUwc1IwRkJSeXhEUVVGRExFVkJRVVU3UVVGRGJFSXNZVUZCUXl4SFFVRkhMRXRCUVVzc1EwRkJReXhOUVVGTkxFTkJRVU1zUTBGQlF5eEZRVUZGTEVOQlFVTXNRMEZCUXl4RFFVRkRPMEZCUTNaQ0xHRkJRVU1zUjBGQlJ5eExRVUZMTEVOQlFVTXNUVUZCVFN4RFFVRkRMRU5CUVVNc1JVRkJSU3hEUVVGRExFTkJRVU1zUTBGQlF6dEJRVU4yUWl4aFFVRkRMRWRCUVVjc1MwRkJTeXhEUVVGRExFMUJRVTBzUTBGQlF5eERRVUZETEVWQlFVVXNRMEZCUXl4RFFVRkRPenM3UVVGQlF5eFRRVWN4UWl4TlFVRk5PMEZCUTBnc2FVSkJRVU1zUjBGQlJ5eExRVUZMTEVOQlFVTXNUVUZCVFN4RFFVRkRMRU5CUVVNc1JVRkJSU3hEUVVGRExFTkJRVU1zUTBGQlF6dEJRVU4yUWl4cFFrRkJReXhIUVVGSExFdEJRVXNzUTBGQlF5eE5RVUZOTEVOQlFVTXNRMEZCUXl4RlFVRkZMRU5CUVVNc1EwRkJReXhEUVVGRE8wRkJRM1pDTEdsQ1FVRkRMRWRCUVVjc1MwRkJTeXhEUVVGRExFMUJRVTBzUTBGQlF5eERRVUZETEVWQlFVVXNRMEZCUXl4RFFVRkRMRU5CUVVNN1FVRkRka0lzYVVKQlFVTXNTVUZCU1N4RFFVRkRMRU5CUVVNN1FVRkRVQ3hwUWtGQlF5eEpRVUZKTEVOQlFVTXNRMEZCUXp0QlFVTlFMR2xDUVVGRExFbEJRVWtzUTBGQlF5eERRVUZETzJGQlExWTdPMEZCUlVRc1pVRkJUenRCUVVOSUxHVkJRVWNzUlVGQlJTeFJRVUZSTEVOQlFVTXNRMEZCUXl4RlFVRkZMRVZCUVVVc1EwRkJRenRCUVVOd1FpeHBRa0ZCU3l4RlFVRkZMRkZCUVZFc1EwRkJReXhEUVVGRExFVkJRVVVzUlVGQlJTeERRVUZETzBGQlEzUkNMR2RDUVVGSkxFVkJRVVVzVVVGQlVTeERRVUZETEVOQlFVTXNSVUZCUlN4RlFVRkZMRU5CUVVNN1FVRkRja0lzYVVKQlFVc3NSVUZCUlN4RFFVRkRPMU5CUTFnc1EwRkJRenRMUVVOTU96dEJRVVZFTEZkQlFVOHNSVUZCUlN4VlFVRkRMRTFCUVUwN1pVRkJTeXhqUVVGSkxFOUJRVThzUTBGQlF5eE5RVUZOTEVOQlFVTTdTMEZCUVR0RFFVTXpReUlzSW1acGJHVWlPaUpvWlhndWFuTWlMQ0p6YjNWeVkyVlNiMjkwSWpvaUwxVnpaWEp6TDAxaGRIUlFaWEp5ZVM5VGFYUmxjeTl3YjNCdGIzUnBiMjRpTENKemIzVnlZMlZ6UTI5dWRHVnVkQ0k2V3lKcGJYQnZjblFnY21kaUlHWnliMjBnSnk0dmNtZGlKenRjYmx4dVpYaHdiM0owSUdSbFptRjFiSFFnZTF4dUlDQWdJR1JsWm1GMWJIUlFjbTl3Y3pvZ2NtZGlMbVJsWm1GMWJIUlFjbTl3Y3l4Y2JseHVJQ0FnSUhSbGMzUTZJQ2gyWVd4MVpTa2dQVDRnS0haaGJIVmxJQ1ltSUhaaGJIVmxMbWx1WkdWNFQyWW9KeU1uS1NBK0lDMHhLU3hjYmx4dUlDQWdJSE53YkdsME9pQW9kbUZzZFdVcElEMCtJSHRjYmlBZ0lDQWdJQ0FnYkdWMElISXNJR2NzSUdJN1hHNWNiaUFnSUNBZ0lDQWdMeThnU1dZZ2QyVWdhR0YyWlNBMklHTm9ZWEpoWTNSbGNuTXNJR2xsSUNOR1JqQXdNREJjYmlBZ0lDQWdJQ0FnYVdZZ0tIWmhiSFZsTG14bGJtZDBhQ0ErSURRcElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUhJZ1BTQjJZV3gxWlM1emRXSnpkSElvTVN3Z01pazdYRzRnSUNBZ0lDQWdJQ0FnSUNCbklEMGdkbUZzZFdVdWMzVmljM1J5S0RNc0lESXBPMXh1SUNBZ0lDQWdJQ0FnSUNBZ1lpQTlJSFpoYkhWbExuTjFZbk4wY2lnMUxDQXlLVHRjYmx4dUlDQWdJQ0FnSUNBdkx5QlBjaUIzWlNCb1lYWmxJRE1nWTJoaGNtRmpkR1Z5Y3l3Z2FXVWdJMFl3TUZ4dUlDQWdJQ0FnSUNCOUlHVnNjMlVnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdjaUE5SUhaaGJIVmxMbk4xWW5OMGNpZ3hMQ0F4S1R0Y2JpQWdJQ0FnSUNBZ0lDQWdJR2NnUFNCMllXeDFaUzV6ZFdKemRISW9NaXdnTVNrN1hHNGdJQ0FnSUNBZ0lDQWdJQ0JpSUQwZ2RtRnNkV1V1YzNWaWMzUnlLRE1zSURFcE8xeHVJQ0FnSUNBZ0lDQWdJQ0FnY2lBclBTQnlPMXh1SUNBZ0lDQWdJQ0FnSUNBZ1p5QXJQU0JuTzF4dUlDQWdJQ0FnSUNBZ0lDQWdZaUFyUFNCaU8xeHVJQ0FnSUNBZ0lDQjlYRzVjYmlBZ0lDQWdJQ0FnY21WMGRYSnVJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lGSmxaRG9nY0dGeWMyVkpiblFvY2l3Z01UWXBMRnh1SUNBZ0lDQWdJQ0FnSUNBZ1IzSmxaVzQ2SUhCaGNuTmxTVzUwS0djc0lERTJLU3hjYmlBZ0lDQWdJQ0FnSUNBZ0lFSnNkV1U2SUhCaGNuTmxTVzUwS0dJc0lERTJLU3hjYmlBZ0lDQWdJQ0FnSUNBZ0lFRnNjR2hoT2lBeFhHNGdJQ0FnSUNBZ0lIMDdYRzRnSUNBZ2ZTeGNibHh1SUNBZ0lHTnZiV0pwYm1VNklDaDJZV3gxWlhNcElEMCtJSEpuWWk1amIyMWlhVzVsS0haaGJIVmxjeWxjYm4wN0lsMTlcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL3ZhbHVlLXR5cGVzL2hleC5qc1xuICoqIG1vZHVsZSBpZCA9IDIzXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfZGVmYXVsdFByb3BzID0gcmVxdWlyZSgnLi9zZXR0aW5ncy9kZWZhdWx0LXByb3BzJyk7XG5cbnZhciBfZGljdGlvbmFyeSA9IHJlcXVpcmUoJy4vc2V0dGluZ3MvZGljdGlvbmFyeScpO1xuXG52YXIgX3V0aWxzID0gcmVxdWlyZSgnLi4vaW5jL3V0aWxzJyk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IHtcbiAgICBkZWZhdWx0UHJvcHM6IHtcbiAgICAgICAgSHVlOiB7XG4gICAgICAgICAgICBtaW46IDAsXG4gICAgICAgICAgICBtYXg6IDM2MFxuICAgICAgICB9LFxuICAgICAgICBTYXR1cmF0aW9uOiBfZGVmYXVsdFByb3BzLnBlcmNlbnQsXG4gICAgICAgIExpZ2h0bmVzczogX2RlZmF1bHRQcm9wcy5wZXJjZW50LFxuICAgICAgICBBbHBoYTogX2RlZmF1bHRQcm9wcy5vcGFjaXR5XG4gICAgfSxcblxuICAgIHRlc3Q6IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICByZXR1cm4gdmFsdWUgJiYgdmFsdWUuaW5kZXhPZignaHNsJykgPiAtMTtcbiAgICB9LFxuXG4gICAgc3BsaXQ6IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICByZXR1cm4gKDAsIF91dGlscy5nZXRDb2xvclZhbHVlcykodmFsdWUsIF9kaWN0aW9uYXJ5LmhzbCk7XG4gICAgfSxcblxuICAgIGNvbWJpbmU6IGZ1bmN0aW9uICh2YWx1ZXMpIHtcbiAgICAgICAgcmV0dXJuICgwLCBfdXRpbHMuY3JlYXRlRnVuY3Rpb25TdHJpbmcpKCgwLCBfdXRpbHMuY3JlYXRlRGVsaW1pdGVkKSh2YWx1ZXMsIF9kaWN0aW9uYXJ5LmhzbCwgJywgJywgMiksICdoc2xhJyk7XG4gICAgfVxufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbk55WXk5MllXeDFaUzEwZVhCbGN5OW9jMnd1YW5NaVhTd2libUZ0WlhNaU9sdGRMQ0p0WVhCd2FXNW5jeUk2SWpzN096czdPenM3T3p0clFrRkpaVHRCUVVOWUxHZENRVUZaTEVWQlFVVTdRVUZEVml4WFFVRkhMRVZCUVVVN1FVRkRSQ3hsUVVGSExFVkJRVVVzUTBGQlF6dEJRVU5PTEdWQlFVY3NSVUZCUlN4SFFVRkhPMU5CUTFnN1FVRkRSQ3hyUWtGQlZTeG5Ra0ZXVkN4UFFVRlBMRUZCVlZjN1FVRkRia0lzYVVKQlFWTXNaMEpCV0ZJc1QwRkJUeXhCUVZkVk8wRkJRMnhDTEdGQlFVc3NaMEpCV2tzc1QwRkJUeXhCUVZsSU8wdEJRMnBDT3p0QlFVVkVMRkZCUVVrc1JVRkJSU3hWUVVGRExFdEJRVXM3WlVGQlRTeExRVUZMTEVsQlFVa3NTMEZCU3l4RFFVRkRMRTlCUVU4c1EwRkJReXhMUVVGTExFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTTdTMEZCUXpzN1FVRkZja1FzVTBGQlN5eEZRVUZGTEZWQlFVTXNTMEZCU3p0bFFVRkxMRmRCWmpCQ0xHTkJRV01zUlVGbGVrSXNTMEZCU3l4alFXaENha01zUjBGQlJ5eERRV2RDZVVNN1MwRkJRVHM3UVVGRmFrUXNWMEZCVHl4RlFVRkZMRlZCUVVNc1RVRkJUVHRsUVVGTExGZEJha0pETEc5Q1FVRnZRaXhGUVdsQ1FTeFhRV3BDY2tNc1pVRkJaU3hGUVdsQ2MwTXNUVUZCVFN4alFXeENNMFFzUjBGQlJ5eEZRV3RDYjBVc1NVRkJTU3hGUVVGRkxFTkJRVU1zUTBGQlF5eEZRVUZGTEUxQlFVMHNRMEZCUXp0TFFVRkJPME5CUTJoSElpd2labWxzWlNJNkltaHpiQzVxY3lJc0luTnZkWEpqWlZKdmIzUWlPaUl2VlhObGNuTXZUV0YwZEZCbGNuSjVMMU5wZEdWekwzQnZjRzF2ZEdsdmJpSXNJbk52ZFhKalpYTkRiMjUwWlc1MElqcGJJbWx0Y0c5eWRDQjdJSEJsY21ObGJuUXNJRzl3WVdOcGRIa2dmU0JtY205dElDY3VMM05sZEhScGJtZHpMMlJsWm1GMWJIUXRjSEp2Y0hNbk8xeHVhVzF3YjNKMElIc2dhSE5zSUdGeklHaHpiRlJsY20xeklIMGdabkp2YlNBbkxpOXpaWFIwYVc1bmN5OWthV04wYVc5dVlYSjVKenRjYm1sdGNHOXlkQ0I3SUdOeVpXRjBaVVJsYkdsdGFYUmxaQ3dnWTNKbFlYUmxSblZ1WTNScGIyNVRkSEpwYm1jc0lHZGxkRU52Ykc5eVZtRnNkV1Z6SUgwZ1puSnZiU0FuTGk0dmFXNWpMM1YwYVd4ekp6dGNibHh1Wlhod2IzSjBJR1JsWm1GMWJIUWdlMXh1SUNBZ0lHUmxabUYxYkhSUWNtOXdjem9nZTF4dUlDQWdJQ0FnSUNCSWRXVTZJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lHMXBiam9nTUN4Y2JpQWdJQ0FnSUNBZ0lDQWdJRzFoZURvZ016WXdYRzRnSUNBZ0lDQWdJSDBzWEc0Z0lDQWdJQ0FnSUZOaGRIVnlZWFJwYjI0NklIQmxjbU5sYm5Rc1hHNGdJQ0FnSUNBZ0lFeHBaMmgwYm1WemN6b2djR1Z5WTJWdWRDeGNiaUFnSUNBZ0lDQWdRV3h3YUdFNklHOXdZV05wZEhsY2JpQWdJQ0I5TEZ4dVhHNGdJQ0FnZEdWemREb2dLSFpoYkhWbEtTQTlQaUFvZG1Gc2RXVWdKaVlnZG1Gc2RXVXVhVzVrWlhoUFppZ25hSE5zSnlrZ1BpQXRNU2tzWEc1Y2JpQWdJQ0J6Y0d4cGREb2dLSFpoYkhWbEtTQTlQaUJuWlhSRGIyeHZjbFpoYkhWbGN5aDJZV3gxWlN3Z2FITnNWR1Z5YlhNcExGeHVYRzRnSUNBZ1kyOXRZbWx1WlRvZ0tIWmhiSFZsY3lrZ1BUNGdZM0psWVhSbFJuVnVZM1JwYjI1VGRISnBibWNvWTNKbFlYUmxSR1ZzYVcxcGRHVmtLSFpoYkhWbGN5d2dhSE5zVkdWeWJYTXNJQ2NzSUNjc0lESXBMQ0FuYUhOc1lTY3BYRzU5TzF4dUlsMTlcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL3ZhbHVlLXR5cGVzL2hzbC5qc1xuICoqIG1vZHVsZSBpZCA9IDI0XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfZGljdGlvbmFyeSA9IHJlcXVpcmUoJy4vc2V0dGluZ3MvZGljdGlvbmFyeScpO1xuXG52YXIgX3V0aWxzID0gcmVxdWlyZSgnLi4vaW5jL3V0aWxzJyk7XG5cbnZhciBfcHggPSByZXF1aXJlKCcuL3B4Jyk7XG5cbnZhciBfcHgyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcHgpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5leHBvcnRzLmRlZmF1bHQgPSB7XG4gICAgZGVmYXVsdFByb3BzOiBfcHgyLmRlZmF1bHQuZGVmYXVsdFByb3BzLFxuXG4gICAgLypcbiAgICAgICAgU3BsaXQgZGltZW5zaW9ucyBpbiBmb3JtYXQgXCJUb3AgUmlnaHQgQm90dG9tIExlZnRcIlxuICAgICAgICBcbiAgICAgICAgQHBhcmFtIFtzdHJpbmddOiBQb3NpdGlvbiB2YWx1ZXNcbiAgICAgICAgICAgIFwiMjBweCAwIDMwcHggNDBweFwiIC0+IHsyMHB4LCAwLCAzMHB4LCA0MHB4fVxuICAgICAgICAgICAgXCIyMHB4IDAgMzBweFwiIC0+IHsyMHB4LCAwLCAzMHB4LCAwfVxuICAgICAgICAgICAgXCIyMHB4IDBcIiAtPiB7MjBweCwgMCwgMjBweCwgMH1cbiAgICAgICAgICAgIFwiMjBweFwiIC0+IHsyMHB4LCAyMHB4LCAyMHB4LCAyMHB4fVxuICAgICAgICBcbiAgICAgICAgQHJldHVybiBbb2JqZWN0XTogT2JqZWN0IHdpdGggVC9SL0IvTCBtZXRyaWNzXG4gICAgKi9cbiAgICBzcGxpdDogZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgIHZhciBzcGxpdFZhbHVlID0ge307XG4gICAgICAgIHZhciBzcGxpdFBvc2l0aW9ucyA9ICgwLCBfdXRpbHMuc3BsaXRTcGFjZURlbGltaXRlZCkodmFsdWUpO1xuICAgICAgICB2YXIgbnVtUG9zaXRpb25zID0gc3BsaXRQb3NpdGlvbnMubGVuZ3RoO1xuICAgICAgICB2YXIganVtcEJhY2sgPSBudW1Qb3NpdGlvbnMgIT09IDEgPyAyIDogMTtcbiAgICAgICAgdmFyIGogPSAwO1xuXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgNDsgaSsrKSB7XG4gICAgICAgICAgICBzcGxpdFZhbHVlW19kaWN0aW9uYXJ5LnBvc2l0aW9uc1tpXV0gPSBzcGxpdFBvc2l0aW9uc1tqXTtcblxuICAgICAgICAgICAgLy8gSnVtcCBiYWNrICh0byBzdGFydCkgY291bnRlciBpZiB3ZSd2ZSByZWFjaGVkIHRoZSBlbmQgb2Ygb3VyIHZhbHVlc1xuICAgICAgICAgICAgaisrO1xuICAgICAgICAgICAgaiA9IGogPT09IG51bVBvc2l0aW9ucyA/IGogLSBqdW1wQmFjayA6IGo7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gc3BsaXRWYWx1ZTtcbiAgICB9LFxuXG4gICAgY29tYmluZTogZnVuY3Rpb24gKHZhbHVlcykge1xuICAgICAgICByZXR1cm4gKDAsIF91dGlscy5jcmVhdGVEZWxpbWl0ZWQpKHZhbHVlcywgX2RpY3Rpb25hcnkucG9zaXRpb25zLCAnICcpO1xuICAgIH1cbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5OeVl5OTJZV3gxWlMxMGVYQmxjeTl3YjNOcGRHbHZibk11YW5NaVhTd2libUZ0WlhNaU9sdGRMQ0p0WVhCd2FXNW5jeUk2SWpzN096czdPenM3T3pzN096czdhMEpCU1dVN1FVRkRXQ3huUWtGQldTeEZRVUZGTEdGQlFWa3NXVUZCV1RzN096czdPenM3T3pzN096dEJRV0YwUXl4VFFVRkxMRVZCUVVVc1ZVRkJReXhMUVVGTExFVkJRVXM3UVVGRFpDeFpRVUZOTEZWQlFWVXNSMEZCUnl4RlFVRkZMRU5CUVVNN1FVRkRkRUlzV1VGQlRTeGpRVUZqTEVkQlFVY3NWMEZ1UWt3c2JVSkJRVzFDTEVWQmJVSk5MRXRCUVVzc1EwRkJReXhEUVVGRE8wRkJRMnhFTEZsQlFVMHNXVUZCV1N4SFFVRkhMR05CUVdNc1EwRkJReXhOUVVGTkxFTkJRVU03UVVGRE0wTXNXVUZCVFN4UlFVRlJMRWRCUVVjc1FVRkJReXhaUVVGWkxFdEJRVXNzUTBGQlF5eEhRVUZKTEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNN1FVRkRPVU1zV1VGQlNTeERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRPenRCUVVWV0xHRkJRVXNzU1VGQlNTeERRVUZETEVkQlFVY3NRMEZCUXl4RlFVRkZMRU5CUVVNc1IwRkJSeXhEUVVGRExFVkJRVVVzUTBGQlF5eEZRVUZGTEVWQlFVVTdRVUZEZUVJc2MwSkJRVlVzUTBGQlF5eFpRVEZDWkN4VFFVRlRMRU5CTUVKbExFTkJRVU1zUTBGQlF5eERRVUZETEVkQlFVY3NZMEZCWXl4RFFVRkRMRU5CUVVNc1EwRkJRenM3TzBGQlFVTXNRVUZITjBNc1lVRkJReXhGUVVGRkxFTkJRVU03UVVGRFNpeGhRVUZETEVkQlFVY3NRVUZCUXl4RFFVRkRMRXRCUVVzc1dVRkJXU3hIUVVGSkxFTkJRVU1zUjBGQlJ5eFJRVUZSTEVkQlFVY3NRMEZCUXl4RFFVRkRPMU5CUXk5RE96dEJRVVZFTEdWQlFVOHNWVUZCVlN4RFFVRkRPMHRCUTNKQ096dEJRVVZFTEZkQlFVOHNSVUZCUlN4VlFVRkRMRTFCUVUwN1pVRkJTeXhYUVc1RGFFSXNaVUZCWlN4RlFXMURhVUlzVFVGQlRTeGpRWEJEZEVNc1UwRkJVeXhGUVc5RE1FTXNSMEZCUnl4RFFVRkRPMHRCUVVFN1EwRkRMMFFpTENKbWFXeGxJam9pY0c5emFYUnBiMjV6TG1weklpd2ljMjkxY21ObFVtOXZkQ0k2SWk5VmMyVnljeTlOWVhSMFVHVnljbmt2VTJsMFpYTXZjRzl3Ylc5MGFXOXVJaXdpYzI5MWNtTmxjME52Ym5SbGJuUWlPbHNpYVcxd2IzSjBJSHNnY0c5emFYUnBiMjV6SUgwZ1puSnZiU0FuTGk5elpYUjBhVzVuY3k5a2FXTjBhVzl1WVhKNUp6dGNibWx0Y0c5eWRDQjdJR055WldGMFpVUmxiR2x0YVhSbFpDd2djM0JzYVhSVGNHRmpaVVJsYkdsdGFYUmxaQ0I5SUdaeWIyMGdKeTR1TDJsdVl5OTFkR2xzY3ljN1hHNXBiWEJ2Y25RZ2NIaFdZV3gxWlZSNWNHVWdabkp2YlNBbkxpOXdlQ2M3WEc1Y2JtVjRjRzl5ZENCa1pXWmhkV3gwSUh0Y2JpQWdJQ0JrWldaaGRXeDBVSEp2Y0hNNklIQjRWbUZzZFdWVWVYQmxMbVJsWm1GMWJIUlFjbTl3Y3l4Y2JseHVJQ0FnSUM4cVhHNGdJQ0FnSUNBZ0lGTndiR2wwSUdScGJXVnVjMmx2Ym5NZ2FXNGdabTl5YldGMElGd2lWRzl3SUZKcFoyaDBJRUp2ZEhSdmJTQk1aV1owWENKY2JpQWdJQ0FnSUNBZ1hHNGdJQ0FnSUNBZ0lFQndZWEpoYlNCYmMzUnlhVzVuWFRvZ1VHOXphWFJwYjI0Z2RtRnNkV1Z6WEc0Z0lDQWdJQ0FnSUNBZ0lDQmNJakl3Y0hnZ01DQXpNSEI0SURRd2NIaGNJaUF0UGlCN01qQndlQ3dnTUN3Z016QndlQ3dnTkRCd2VIMWNiaUFnSUNBZ0lDQWdJQ0FnSUZ3aU1qQndlQ0F3SURNd2NIaGNJaUF0UGlCN01qQndlQ3dnTUN3Z016QndlQ3dnTUgxY2JpQWdJQ0FnSUNBZ0lDQWdJRndpTWpCd2VDQXdYQ0lnTFQ0Z2V6SXdjSGdzSURBc0lESXdjSGdzSURCOVhHNGdJQ0FnSUNBZ0lDQWdJQ0JjSWpJd2NIaGNJaUF0UGlCN01qQndlQ3dnTWpCd2VDd2dNakJ3ZUN3Z01qQndlSDFjYmlBZ0lDQWdJQ0FnWEc0Z0lDQWdJQ0FnSUVCeVpYUjFjbTRnVzI5aWFtVmpkRjA2SUU5aWFtVmpkQ0IzYVhSb0lGUXZVaTlDTDB3Z2JXVjBjbWxqYzF4dUlDQWdJQ292WEc0Z0lDQWdjM0JzYVhRNklDaDJZV3gxWlNrZ1BUNGdlMXh1SUNBZ0lDQWdJQ0JqYjI1emRDQnpjR3hwZEZaaGJIVmxJRDBnZTMwN1hHNGdJQ0FnSUNBZ0lHTnZibk4wSUhOd2JHbDBVRzl6YVhScGIyNXpJRDBnYzNCc2FYUlRjR0ZqWlVSbGJHbHRhWFJsWkNoMllXeDFaU2s3WEc0Z0lDQWdJQ0FnSUdOdmJuTjBJRzUxYlZCdmMybDBhVzl1Y3lBOUlITndiR2wwVUc5emFYUnBiMjV6TG14bGJtZDBhRHRjYmlBZ0lDQWdJQ0FnWTI5dWMzUWdhblZ0Y0VKaFkyc2dQU0FvYm5WdFVHOXphWFJwYjI1eklDRTlQU0F4S1NBL0lESWdPaUF4TzF4dUlDQWdJQ0FnSUNCc1pYUWdhaUE5SURBN1hHNWNiaUFnSUNBZ0lDQWdabTl5SUNoc1pYUWdhU0E5SURBN0lHa2dQQ0EwT3lCcEt5c3BJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lITndiR2wwVm1Gc2RXVmJjRzl6YVhScGIyNXpXMmxkWFNBOUlITndiR2wwVUc5emFYUnBiMjV6VzJwZE8xeHVYRzRnSUNBZ0lDQWdJQ0FnSUNBdkx5QktkVzF3SUdKaFkyc2dLSFJ2SUhOMFlYSjBLU0JqYjNWdWRHVnlJR2xtSUhkbEozWmxJSEpsWVdOb1pXUWdkR2hsSUdWdVpDQnZaaUJ2ZFhJZ2RtRnNkV1Z6WEc0Z0lDQWdJQ0FnSUNBZ0lDQnFLeXM3WEc0Z0lDQWdJQ0FnSUNBZ0lDQnFJRDBnS0dvZ1BUMDlJRzUxYlZCdmMybDBhVzl1Y3lrZ1B5QnFJQzBnYW5WdGNFSmhZMnNnT2lCcU8xeHVJQ0FnSUNBZ0lDQjlYRzVjYmlBZ0lDQWdJQ0FnY21WMGRYSnVJSE53YkdsMFZtRnNkV1U3WEc0Z0lDQWdmU3hjYmx4dUlDQWdJR052YldKcGJtVTZJQ2gyWVd4MVpYTXBJRDArSUdOeVpXRjBaVVJsYkdsdGFYUmxaQ2gyWVd4MVpYTXNJSEJ2YzJsMGFXOXVjeXdnSnlBbktWeHVmVHNpWFgwPVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvdmFsdWUtdHlwZXMvcG9zaXRpb25zLmpzXG4gKiogbW9kdWxlIGlkID0gMjVcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHMuZGVmYXVsdCA9IHtcbiAgICBkZWZhdWx0UHJvcHM6IHtcbiAgICAgICAgdW5pdDogJ3B4J1xuICAgIH1cbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5OeVl5OTJZV3gxWlMxMGVYQmxjeTl3ZUM1cWN5SmRMQ0p1WVcxbGN5STZXMTBzSW0xaGNIQnBibWR6SWpvaU96czdhMEpCUVdVN1FVRkRXQ3huUWtGQldTeEZRVUZGTzBGQlExWXNXVUZCU1N4RlFVRkZMRWxCUVVrN1MwRkRZanREUVVOS0lpd2labWxzWlNJNkluQjRMbXB6SWl3aWMyOTFjbU5sVW05dmRDSTZJaTlWYzJWeWN5OU5ZWFIwVUdWeWNua3ZVMmwwWlhNdmNHOXdiVzkwYVc5dUlpd2ljMjkxY21ObGMwTnZiblJsYm5RaU9sc2laWGh3YjNKMElHUmxabUYxYkhRZ2UxeHVJQ0FnSUdSbFptRjFiSFJRY205d2N6b2dlMXh1SUNBZ0lDQWdJQ0IxYm1sME9pQW5jSGduWEc0Z0lDQWdmVnh1ZlRzaVhYMD1cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL3ZhbHVlLXR5cGVzL3B4LmpzXG4gKiogbW9kdWxlIGlkID0gMjZcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF91dGlscyA9IHJlcXVpcmUoJy4uL2luYy91dGlscycpO1xuXG52YXIgX2RpY3Rpb25hcnkgPSByZXF1aXJlKCcuL3NldHRpbmdzL2RpY3Rpb25hcnknKTtcblxudmFyIF9kZWZhdWx0UHJvcHMgPSByZXF1aXJlKCcuL3NldHRpbmdzL2RlZmF1bHQtcHJvcHMnKTtcblxuZXhwb3J0cy5kZWZhdWx0ID0ge1xuICAgIGRlZmF1bHRQcm9wczoge1xuICAgICAgICBSZWQ6IF9kZWZhdWx0UHJvcHMucmdiLFxuICAgICAgICBHcmVlbjogX2RlZmF1bHRQcm9wcy5yZ2IsXG4gICAgICAgIEJsdWU6IF9kZWZhdWx0UHJvcHMucmdiLFxuICAgICAgICBBbHBoYTogX2RlZmF1bHRQcm9wcy5vcGFjaXR5XG4gICAgfSxcblxuICAgIHRlc3Q6IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICByZXR1cm4gdmFsdWUgJiYgdmFsdWUuaW5kZXhPZigncmdiJykgPiAtMTtcbiAgICB9LFxuXG4gICAgc3BsaXQ6IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICByZXR1cm4gKDAsIF91dGlscy5nZXRDb2xvclZhbHVlcykodmFsdWUsIF9kaWN0aW9uYXJ5LnJnYik7XG4gICAgfSxcblxuICAgIGNvbWJpbmU6IGZ1bmN0aW9uICh2YWx1ZXMpIHtcbiAgICAgICAgcmV0dXJuICgwLCBfdXRpbHMuY3JlYXRlRnVuY3Rpb25TdHJpbmcpKCgwLCBfdXRpbHMuY3JlYXRlRGVsaW1pdGVkKSh2YWx1ZXMsIF9kaWN0aW9uYXJ5LnJnYiwgJywgJywgMiksICdyZ2JhJyk7XG4gICAgfVxufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbk55WXk5MllXeDFaUzEwZVhCbGN5OXlaMkl1YW5NaVhTd2libUZ0WlhNaU9sdGRMQ0p0WVhCd2FXNW5jeUk2SWpzN096czdPenM3T3p0clFrRkpaVHRCUVVOWUxHZENRVUZaTEVWQlFVVTdRVUZEVml4WFFVRkhMR2RDUVVwR0xFZEJRVWNzUVVGSlZ6dEJRVU5tTEdGQlFVc3NaMEpCVEVvc1IwRkJSeXhCUVV0aE8wRkJRMnBDTEZsQlFVa3NaMEpCVGtnc1IwRkJSeXhCUVUxWk8wRkJRMmhDTEdGQlFVc3NaMEpCVUdVc1QwRkJUeXhCUVU5T08wdEJRM2hDT3p0QlFVVkVMRkZCUVVrc1JVRkJSU3hWUVVGRExFdEJRVXM3WlVGQlRTeExRVUZMTEVsQlFVa3NTMEZCU3l4RFFVRkRMRTlCUVU4c1EwRkJReXhMUVVGTExFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTTdTMEZCUXpzN1FVRkZja1FzVTBGQlN5eEZRVUZGTEZWQlFVTXNTMEZCU3p0bFFVRkxMRmRCWkRCQ0xHTkJRV01zUlVGamVrSXNTMEZCU3l4alFXSnFReXhIUVVGSExFTkJZWGxETzB0QlFVRTdPMEZCUldwRUxGZEJRVThzUlVGQlJTeFZRVUZETEUxQlFVMDdaVUZCU3l4WFFXaENReXh2UWtGQmIwSXNSVUZuUWtFc1YwRm9RbkpETEdWQlFXVXNSVUZuUW5ORExFMUJRVTBzWTBGbU0wUXNSMEZCUnl4RlFXVnZSU3hKUVVGSkxFVkJRVVVzUTBGQlF5eERRVUZETEVWQlFVVXNUVUZCVFN4RFFVRkRPMHRCUVVFN1EwRkRhRWNpTENKbWFXeGxJam9pY21kaUxtcHpJaXdpYzI5MWNtTmxVbTl2ZENJNklpOVZjMlZ5Y3k5TllYUjBVR1Z5Y25rdlUybDBaWE12Y0c5d2JXOTBhVzl1SWl3aWMyOTFjbU5sYzBOdmJuUmxiblFpT2xzaWFXMXdiM0owSUhzZ1kzSmxZWFJsUkdWc2FXMXBkR1ZrTENCamNtVmhkR1ZHZFc1amRHbHZibE4wY21sdVp5d2daMlYwUTI5c2IzSldZV3gxWlhNZ2ZTQm1jbTl0SUNjdUxpOXBibU12ZFhScGJITW5PMXh1YVcxd2IzSjBJSHNnY21kaUlHRnpJSEpuWWxSbGNtMXpJSDBnWm5KdmJTQW5MaTl6WlhSMGFXNW5jeTlrYVdOMGFXOXVZWEo1Snp0Y2JtbHRjRzl5ZENCN0lISm5ZaUJoY3lCa1pXWmhkV3gwVWtkQ0xDQnZjR0ZqYVhSNUlHRnpJR1JsWm1GMWJIUlBjR0ZqYVhSNUlIMGdabkp2YlNBbkxpOXpaWFIwYVc1bmN5OWtaV1poZFd4MExYQnliM0J6Snp0Y2JseHVaWGh3YjNKMElHUmxabUYxYkhRZ2UxeHVJQ0FnSUdSbFptRjFiSFJRY205d2N6b2dlMXh1SUNBZ0lDQWdJQ0JTWldRNklHUmxabUYxYkhSU1IwSXNYRzRnSUNBZ0lDQWdJRWR5WldWdU9pQmtaV1poZFd4MFVrZENMRnh1SUNBZ0lDQWdJQ0JDYkhWbE9pQmtaV1poZFd4MFVrZENMRnh1SUNBZ0lDQWdJQ0JCYkhCb1lUb2daR1ZtWVhWc2RFOXdZV05wZEhsY2JpQWdJQ0I5TEZ4dVhHNGdJQ0FnZEdWemREb2dLSFpoYkhWbEtTQTlQaUFvZG1Gc2RXVWdKaVlnZG1Gc2RXVXVhVzVrWlhoUFppZ25jbWRpSnlrZ1BpQXRNU2tzWEc1Y2JpQWdJQ0J6Y0d4cGREb2dLSFpoYkhWbEtTQTlQaUJuWlhSRGIyeHZjbFpoYkhWbGN5aDJZV3gxWlN3Z2NtZGlWR1Z5YlhNcExGeHVYRzRnSUNBZ1kyOXRZbWx1WlRvZ0tIWmhiSFZsY3lrZ1BUNGdZM0psWVhSbFJuVnVZM1JwYjI1VGRISnBibWNvWTNKbFlYUmxSR1ZzYVcxcGRHVmtLSFpoYkhWbGN5d2djbWRpVkdWeWJYTXNJQ2NzSUNjc0lESXBMQ0FuY21kaVlTY3BYRzU5T3lKZGZRPT1cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL3ZhbHVlLXR5cGVzL3JnYi5qc1xuICoqIG1vZHVsZSBpZCA9IDI3XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHMuZGVmYXVsdCA9IHtcbiAgICBkZWZhdWx0UHJvcHM6IHtcbiAgICAgICAgY3VycmVudDogMVxuICAgIH1cbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5OeVl5OTJZV3gxWlMxMGVYQmxjeTl6WTJGc1pTNXFjeUpkTENKdVlXMWxjeUk2VzEwc0ltMWhjSEJwYm1keklqb2lPenM3YTBKQlFXVTdRVUZEV0N4blFrRkJXU3hGUVVGRk8wRkJRMVlzWlVGQlR5eEZRVUZGTEVOQlFVTTdTMEZEWWp0RFFVTktJaXdpWm1sc1pTSTZJbk5qWVd4bExtcHpJaXdpYzI5MWNtTmxVbTl2ZENJNklpOVZjMlZ5Y3k5TllYUjBVR1Z5Y25rdlUybDBaWE12Y0c5d2JXOTBhVzl1SWl3aWMyOTFjbU5sYzBOdmJuUmxiblFpT2xzaVpYaHdiM0owSUdSbFptRjFiSFFnZTF4dUlDQWdJR1JsWm1GMWJIUlFjbTl3Y3pvZ2UxeHVJQ0FnSUNBZ0lDQmpkWEp5Wlc1ME9pQXhYRzRnSUNBZ2ZWeHVmVHNpWFgwPVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvdmFsdWUtdHlwZXMvc2NhbGUuanNcbiAqKiBtb2R1bGUgaWQgPSAyOFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9O1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX2NvbG9yID0gcmVxdWlyZSgnLi9jb2xvcicpO1xuXG52YXIgX2NvbG9yMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NvbG9yKTtcblxudmFyIF9weCA9IHJlcXVpcmUoJy4vcHgnKTtcblxudmFyIF9kaWN0aW9uYXJ5ID0gcmVxdWlyZSgnLi9zZXR0aW5ncy9kaWN0aW9uYXJ5Jyk7XG5cbnZhciBfdXRpbHMgPSByZXF1aXJlKCcuLi9pbmMvdXRpbHMnKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxudmFyIHNoYWRvd1dpdGhvdXRDb2xvclRlcm1zID0gX2RpY3Rpb25hcnkuc2hhZG93LnNsaWNlKDAsIDQpO1xuXG5leHBvcnRzLmRlZmF1bHQgPSB7XG4gICAgZGVmYXVsdFByb3BzOiBfZXh0ZW5kcyh7fSwgX2NvbG9yMi5kZWZhdWx0LmRlZmF1bHRQcm9wcywge1xuICAgICAgICBYOiBfcHguZGVmYXVsdFByb3BzLFxuICAgICAgICBZOiBfcHguZGVmYXVsdFByb3BzLFxuICAgICAgICBSYWRpdXM6IF9weC5kZWZhdWx0UHJvcHMsXG4gICAgICAgIFNwcmVhZDogX3B4LmRlZmF1bHRQcm9wc1xuICAgIH0pLFxuXG4gICAgc3BsaXQ6IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICB2YXIgYml0cyA9ICgwLCBfdXRpbHMuc3BsaXRTcGFjZURlbGltaXRlZCkodmFsdWUpO1xuICAgICAgICB2YXIgaGFzUmVhY2hlZENvbG9yID0gZmFsc2U7XG4gICAgICAgIHZhciBjb2xvclByb3AgPSAnJztcbiAgICAgICAgdmFyIHNwbGl0VmFsdWUgPSB7fTtcblxuICAgICAgICBiaXRzLmZvckVhY2goZnVuY3Rpb24gKGJpdCwgaSkge1xuICAgICAgICAgICAgLy8gSWYgd2UndmUgcmVhY2hlZCB0aGUgY29sb3IgcHJvcHMsIGFwcGVuZCB0byBjb2xvciBzdHJpbmdcbiAgICAgICAgICAgIGlmIChoYXNSZWFjaGVkQ29sb3IgfHwgX2NvbG9yMi5kZWZhdWx0LnRlc3QoYml0KSkge1xuICAgICAgICAgICAgICAgIGhhc1JlYWNoZWRDb2xvciA9IHRydWU7XG4gICAgICAgICAgICAgICAgY29sb3JQcm9wICs9IGJpdDtcblxuICAgICAgICAgICAgICAgIC8vIEVsc2UgcHJvY2VzcyBzaGFkb3cgdmFsdWVcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHNwbGl0VmFsdWVbX2RpY3Rpb25hcnkuc2hhZG93W2ldXSA9IGJpdDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHZhciBzcGxpdENvbG9yUHJvcHMgPSBfY29sb3IyLmRlZmF1bHQuc3BsaXQoY29sb3JQcm9wKTtcblxuICAgICAgICByZXR1cm4gX2V4dGVuZHMoe30sIHNwbGl0VmFsdWUsIHsgc3BsaXRDb2xvclByb3BzOiBzcGxpdENvbG9yUHJvcHMgfSk7XG4gICAgfSxcblxuICAgIGNvbWJpbmU6IGZ1bmN0aW9uICh2YWx1ZXMpIHtcbiAgICAgICAgcmV0dXJuICgwLCBfdXRpbHMuY3JlYXRlRGVsaW1pdGVkKSh2YWx1ZXMsIHNoYWRvd1dpdGhvdXRDb2xvclRlcm1zLCAnICcpICsgX2NvbG9yMi5kZWZhdWx0LmNvbWJpbmUodmFsdWVzKTtcbiAgICB9XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluTnlZeTkyWVd4MVpTMTBlWEJsY3k5emFHRmtiM2N1YW5NaVhTd2libUZ0WlhNaU9sdGRMQ0p0WVhCd2FXNW5jeUk2SWpzN096czdPenM3T3pzN096czdPenM3TzBGQlMwRXNTVUZCVFN4MVFrRkJkVUlzUjBGQlJ5eFpRVWgyUWl4TlFVRk5MRU5CUnpaQ0xFdEJRVXNzUTBGQlF5eERRVUZETEVWQlFVVXNRMEZCUXl4RFFVRkRMRU5CUVVNN08ydENRVVY2UXp0QlFVTllMR2RDUVVGWkxHVkJRMHdzWjBKQlFVMHNXVUZCV1R0QlFVTnlRaXhUUVVGRExFMUJWRUVzV1VGQldTeEJRVk5KTzBGQlEycENMRk5CUVVNc1RVRldRU3haUVVGWkxFRkJWVWs3UVVGRGFrSXNZMEZCVFN4TlFWaE1MRmxCUVZrc1FVRlhVenRCUVVOMFFpeGpRVUZOTEUxQldrd3NXVUZCV1N4QlFWbFRPMDFCUTNwQ096dEJRVVZFTEZOQlFVc3NSVUZCUlN4VlFVRkRMRXRCUVVzc1JVRkJTenRCUVVOa0xGbEJRVTBzU1VGQlNTeEhRVUZITEZkQlpGb3NiVUpCUVcxQ0xFVkJZMkVzUzBGQlN5eERRVUZETEVOQlFVTTdRVUZEZUVNc1dVRkJTU3hsUVVGbExFZEJRVWNzUzBGQlN5eERRVUZETzBGQlF6VkNMRmxCUVVrc1UwRkJVeXhIUVVGSExFVkJRVVVzUTBGQlF6dEJRVU51UWl4WlFVRkpMRlZCUVZVc1IwRkJSeXhGUVVGRkxFTkJRVU03TzBGQlJYQkNMRmxCUVVrc1EwRkJReXhQUVVGUExFTkJRVU1zVlVGQlF5eEhRVUZITEVWQlFVVXNRMEZCUXl4RlFVRkxPenRCUVVWeVFpeG5Ra0ZCU1N4bFFVRmxMRWxCUVVrc1owSkJRVTBzU1VGQlNTeERRVUZETEVkQlFVY3NRMEZCUXl4RlFVRkZPMEZCUTNCRExDdENRVUZsTEVkQlFVY3NTVUZCU1N4RFFVRkRPMEZCUTNaQ0xIbENRVUZUTEVsQlFVa3NSMEZCUnpzN08wRkJRVU1zWVVGSGNFSXNUVUZCVFR0QlFVTklMRGhDUVVGVkxFTkJRVU1zV1VFMVFteENMRTFCUVUwc1EwRTBRbmRDTEVOQlFVTXNRMEZCUXl4RFFVRkRMRWRCUVVjc1IwRkJSeXhEUVVGRE8ybENRVU53UXp0VFFVTktMRU5CUVVNc1EwRkJRenM3UVVGRlNDeFpRVUZOTEdWQlFXVXNSMEZCUnl4blFrRkJUU3hMUVVGTExFTkJRVU1zVTBGQlV5eERRVUZETEVOQlFVTTdPMEZCUlM5RExEUkNRVUZaTEZWQlFWVXNTVUZCUlN4bFFVRmxMRVZCUVdZc1pVRkJaU3hKUVVGSE8wdEJRemRET3p0QlFVVkVMRmRCUVU4c1JVRkJSU3hWUVVGRExFMUJRVTA3WlVGQlN5eFhRWEJEU3l4bFFVRmxMRVZCYjBOS0xFMUJRVTBzUlVGQlJTeDFRa0ZCZFVJc1JVRkJSU3hIUVVGSExFTkJRVU1zUjBGQlJ5eG5Ra0ZCVFN4UFFVRlBMRU5CUVVNc1RVRkJUU3hEUVVGRE8wdEJRVUU3UTBGRGNrY2lMQ0ptYVd4bElqb2ljMmhoWkc5M0xtcHpJaXdpYzI5MWNtTmxVbTl2ZENJNklpOVZjMlZ5Y3k5TllYUjBVR1Z5Y25rdlUybDBaWE12Y0c5d2JXOTBhVzl1SWl3aWMyOTFjbU5sYzBOdmJuUmxiblFpT2xzaWFXMXdiM0owSUdOdmJHOXlJR1p5YjIwZ0p5NHZZMjlzYjNJbk8xeHVhVzF3YjNKMElIc2daR1ZtWVhWc2RGQnliM0J6SUdGeklIQjRSR1ZtWVhWc2RGQnliM0J6SUgwZ1puSnZiU0FuTGk5d2VDYzdYRzVwYlhCdmNuUWdleUJ6YUdGa2IzY2dZWE1nYzJoaFpHOTNWR1Z5YlhNZ2ZTQm1jbTl0SUNjdUwzTmxkSFJwYm1kekwyUnBZM1JwYjI1aGNua25PMXh1YVcxd2IzSjBJSHNnYzNCc2FYUlRjR0ZqWlVSbGJHbHRhWFJsWkN3Z1kzSmxZWFJsUkdWc2FXMXBkR1ZrSUgwZ1puSnZiU0FuTGk0dmFXNWpMM1YwYVd4ekp6dGNibHh1WTI5dWMzUWdjMmhoWkc5M1YybDBhRzkxZEVOdmJHOXlWR1Z5YlhNZ1BTQnphR0ZrYjNkVVpYSnRjeTV6YkdsalpTZ3dMQ0EwS1R0Y2JseHVaWGh3YjNKMElHUmxabUYxYkhRZ2UxeHVJQ0FnSUdSbFptRjFiSFJRY205d2N6b2dlMXh1SUNBZ0lDQWdJQ0F1TGk1amIyeHZjaTVrWldaaGRXeDBVSEp2Y0hNc1hHNGdJQ0FnSUNBZ0lGZzZJSEI0UkdWbVlYVnNkRkJ5YjNCekxGeHVJQ0FnSUNBZ0lDQlpPaUJ3ZUVSbFptRjFiSFJRY205d2N5eGNiaUFnSUNBZ0lDQWdVbUZrYVhWek9pQndlRVJsWm1GMWJIUlFjbTl3Y3l4Y2JpQWdJQ0FnSUNBZ1UzQnlaV0ZrT2lCd2VFUmxabUYxYkhSUWNtOXdjMXh1SUNBZ0lIMHNYRzVjYmlBZ0lDQnpjR3hwZERvZ0tIWmhiSFZsS1NBOVBpQjdYRzRnSUNBZ0lDQWdJR052Ym5OMElHSnBkSE1nUFNCemNHeHBkRk53WVdObFJHVnNhVzFwZEdWa0tIWmhiSFZsS1R0Y2JpQWdJQ0FnSUNBZ2JHVjBJR2hoYzFKbFlXTm9aV1JEYjJ4dmNpQTlJR1poYkhObE8xeHVJQ0FnSUNBZ0lDQnNaWFFnWTI5c2IzSlFjbTl3SUQwZ0p5YzdYRzRnSUNBZ0lDQWdJR3hsZENCemNHeHBkRlpoYkhWbElEMGdlMzA3WEc1Y2JpQWdJQ0FnSUNBZ1ltbDBjeTVtYjNKRllXTm9LQ2hpYVhRc0lHa3BJRDArSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJQzh2SUVsbUlIZGxKM1psSUhKbFlXTm9aV1FnZEdobElHTnZiRzl5SUhCeWIzQnpMQ0JoY0hCbGJtUWdkRzhnWTI5c2IzSWdjM1J5YVc1blhHNGdJQ0FnSUNBZ0lDQWdJQ0JwWmlBb2FHRnpVbVZoWTJobFpFTnZiRzl5SUh4OElHTnZiRzl5TG5SbGMzUW9ZbWwwS1NrZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lHaGhjMUpsWVdOb1pXUkRiMnh2Y2lBOUlIUnlkV1U3WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnWTI5c2IzSlFjbTl3SUNzOUlHSnBkRHRjYmx4dUlDQWdJQ0FnSUNBZ0lDQWdMeThnUld4elpTQndjbTlqWlhOeklITm9ZV1J2ZHlCMllXeDFaVnh1SUNBZ0lDQWdJQ0FnSUNBZ2ZTQmxiSE5sSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCemNHeHBkRlpoYkhWbFczTm9ZV1J2ZDFSbGNtMXpXMmxkWFNBOUlHSnBkRHRjYmlBZ0lDQWdJQ0FnSUNBZ0lIMWNiaUFnSUNBZ0lDQWdmU2s3WEc1Y2JpQWdJQ0FnSUNBZ1kyOXVjM1FnYzNCc2FYUkRiMnh2Y2xCeWIzQnpJRDBnWTI5c2IzSXVjM0JzYVhRb1kyOXNiM0pRY205d0tUdGNibHh1SUNBZ0lDQWdJQ0J5WlhSMWNtNGdleUF1TGk1emNHeHBkRlpoYkhWbExDQnpjR3hwZEVOdmJHOXlVSEp2Y0hNZ2ZUdGNiaUFnSUNCOUxGeHVYRzRnSUNBZ1kyOXRZbWx1WlRvZ0tIWmhiSFZsY3lrZ1BUNGdZM0psWVhSbFJHVnNhVzFwZEdWa0tIWmhiSFZsY3l3Z2MyaGhaRzkzVjJsMGFHOTFkRU52Ykc5eVZHVnliWE1zSUNjZ0p5a2dLeUJqYjJ4dmNpNWpiMjFpYVc1bEtIWmhiSFZsY3lsY2JuMDdYRzRpWFgwPVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvdmFsdWUtdHlwZXMvc2hhZG93LmpzXG4gKiogbW9kdWxlIGlkID0gMjlcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHMuY2lyY3VsYXJNb3Rpb24gPSBleHBvcnRzLmNyZWF0ZU1hcHBlciA9IHVuZGVmaW5lZDtcblxudmFyIF9jYWxjID0gcmVxdWlyZSgnLi4vaW5jL2NhbGMnKTtcblxudmFyIGNyZWF0ZU1hcHBlciA9IGV4cG9ydHMuY3JlYXRlTWFwcGVyID0gZnVuY3Rpb24gKGZyb20sIHRvKSB7XG4gICAgdmFyIG1hcExlbmd0aCA9IGZyb20ubGVuZ3RoO1xuXG4gICAgcmV0dXJuIGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICBmb3IgKHZhciBpID0gMTsgaSA8IG1hcExlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAodmFsdWUgPCBmcm9tW2ldIHx8IGkgPT09IG1hcExlbmd0aCkge1xuICAgICAgICAgICAgICAgIHJldHVybiAoMCwgX2NhbGMuZ2V0VmFsdWVGcm9tUHJvZ3Jlc3MpKCgwLCBfY2FsYy5yZXN0cmljdCkoKDAsIF9jYWxjLmdldFByb2dyZXNzRnJvbVZhbHVlKSh2YWx1ZSwgZnJvbVtpIC0gMV0sIGZyb21baV0pLCAwLCAxKSwgdG9baSAtIDFdLCB0b1tpXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xufTtcblxudmFyIGNpcmN1bGFyTW90aW9uID0gZXhwb3J0cy5jaXJjdWxhck1vdGlvbiA9IGZ1bmN0aW9uICh2LCBrZXksIF9yZWYpIHtcbiAgICB2YXIgdmFsdWVzID0gX3JlZi52YWx1ZXM7XG4gICAgcmV0dXJuICgwLCBfY2FsYy5wb2ludEZyb21BbmdsZUFuZERpc3RhbmNlKSh7XG4gICAgICAgIHg6IHZhbHVlcy5vcmlnaW5YLmN1cnJlbnQsXG4gICAgICAgIHk6IHZhbHVlcy5vcmlnaW5ZLmN1cnJlbnRcbiAgICB9LCB2YWx1ZXMuYW5nbGUuY3VycmVudCwgdmFsdWVzLmRpc3RhbmNlLmN1cnJlbnQpW2tleV07XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluTnlZeTlwYm1NdmRISmhibk5tYjNKdFpYSnpMbXB6SWwwc0ltNWhiV1Z6SWpwYlhTd2liV0Z3Y0dsdVozTWlPaUk3T3pzN096czdRVUZGVHl4SlFVRk5MRmxCUVZrc1YwRkJXaXhaUVVGWkxFZEJRVWNzVlVGQlF5eEpRVUZKTEVWQlFVVXNSVUZCUlN4RlFVRkxPMEZCUTNSRExGRkJRVTBzVTBGQlV5eEhRVUZITEVsQlFVa3NRMEZCUXl4TlFVRk5MRU5CUVVNN08wRkJSVGxDTEZkQlFVOHNWVUZCUXl4TFFVRkxMRVZCUVVzN1FVRkRaQ3hoUVVGTExFbEJRVWtzUTBGQlF5eEhRVUZITEVOQlFVTXNSVUZCUlN4RFFVRkRMRWRCUVVjc1UwRkJVeXhGUVVGRkxFTkJRVU1zUlVGQlJTeEZRVUZGTzBGQlEyaERMR2RDUVVGSkxFdEJRVXNzUjBGQlJ5eEpRVUZKTEVOQlFVTXNRMEZCUXl4RFFVRkRMRWxCUVVrc1EwRkJReXhMUVVGTExGTkJRVk1zUlVGQlJUdEJRVU53UXl4MVFrRkJUeXhWUVZKUkxHOUNRVUZ2UWl4RlFWRlFMRlZCVWxNc1VVRkJVU3hGUVZGU0xGVkJValZETEc5Q1FVRnZRaXhGUVZFMlF5eExRVUZMTEVWQlFVVXNTVUZCU1N4RFFVRkRMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU1zUlVGQlJTeEpRVUZKTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1JVRkJSU3hEUVVGRExFVkJRVVVzUTBGQlF5eERRVUZETEVWQlFVVXNSVUZCUlN4RFFVRkRMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU1zUlVGQlJTeEZRVUZGTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJRenRoUVVOd1NEdFRRVU5LTzB0QlEwb3NRMEZCUXp0RFFVTk1MRU5CUVVNN08wRkJSVXNzU1VGQlRTeGpRVUZqTEZkQlFXUXNZMEZCWXl4SFFVRkhMRlZCUVVNc1EwRkJReXhGUVVGRkxFZEJRVWM3VVVGQlNTeE5RVUZOTEZGQlFVNHNUVUZCVFR0WFFVTXpReXhWUVdZeVJDeDVRa0ZCZVVJc1JVRmxNVVE3UVVGRGRFSXNVMEZCUXl4RlFVRkZMRTFCUVUwc1EwRkJReXhQUVVGUExFTkJRVU1zVDBGQlR6dEJRVU42UWl4VFFVRkRMRVZCUVVVc1RVRkJUU3hEUVVGRExFOUJRVThzUTBGQlF5eFBRVUZQTzB0QlF6VkNMRVZCUVVVc1RVRkJUU3hEUVVGRExFdEJRVXNzUTBGQlF5eFBRVUZQTEVWQlFVVXNUVUZCVFN4RFFVRkRMRkZCUVZFc1EwRkJReXhQUVVGUExFTkJRVU1zUTBGQlF5eEhRVUZITEVOQlFVTTdRMEZCUVN4RFFVRkRJaXdpWm1sc1pTSTZJblJ5WVc1elptOXliV1Z5Y3k1cWN5SXNJbk52ZFhKalpWSnZiM1FpT2lJdlZYTmxjbk12VFdGMGRGQmxjbko1TDFOcGRHVnpMM0J2Y0cxdmRHbHZiaUlzSW5OdmRYSmpaWE5EYjI1MFpXNTBJanBiSW1sdGNHOXlkQ0I3SUdkbGRGQnliMmR5WlhOelJuSnZiVlpoYkhWbExDQm5aWFJXWVd4MVpVWnliMjFRY205bmNtVnpjeXdnY21WemRISnBZM1FzSUhCdmFXNTBSbkp2YlVGdVoyeGxRVzVrUkdsemRHRnVZMlVnZlNCbWNtOXRJQ2N1TGk5cGJtTXZZMkZzWXljN1hHNWNibVY0Y0c5eWRDQmpiMjV6ZENCamNtVmhkR1ZOWVhCd1pYSWdQU0FvWm5KdmJTd2dkRzhwSUQwK0lIdGNiaUFnSUNCamIyNXpkQ0J0WVhCTVpXNW5kR2dnUFNCbWNtOXRMbXhsYm1kMGFEdGNibHh1SUNBZ0lISmxkSFZ5YmlBb2RtRnNkV1VwSUQwK0lIdGNiaUFnSUNBZ0lDQWdabTl5SUNoc1pYUWdhU0E5SURFN0lHa2dQQ0J0WVhCTVpXNW5kR2c3SUdrckt5a2dlMXh1SUNBZ0lDQWdJQ0FnSUNBZ2FXWWdLSFpoYkhWbElEd2dabkp2YlZ0cFhTQjhmQ0JwSUQwOVBTQnRZWEJNWlc1bmRHZ3BJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0J5WlhSMWNtNGdaMlYwVm1Gc2RXVkdjbTl0VUhKdlozSmxjM01vY21WemRISnBZM1FvWjJWMFVISnZaM0psYzNOR2NtOXRWbUZzZFdVb2RtRnNkV1VzSUdaeWIyMWJhU0F0SURGZExDQm1jbTl0VzJsZEtTd2dNQ3dnTVNrc0lIUnZXMmtnTFNBeFhTd2dkRzliYVYwcE8xeHVJQ0FnSUNBZ0lDQWdJQ0FnZlZ4dUlDQWdJQ0FnSUNCOVhHNGdJQ0FnZlR0Y2JuMDdYRzVjYm1WNGNHOXlkQ0JqYjI1emRDQmphWEpqZFd4aGNrMXZkR2x2YmlBOUlDaDJMQ0JyWlhrc0lIc2dkbUZzZFdWeklIMHBJRDArSUZ4dUlDQWdJSEJ2YVc1MFJuSnZiVUZ1WjJ4bFFXNWtSR2x6ZEdGdVkyVW9lMXh1SUNBZ0lDQWdJQ0I0T2lCMllXeDFaWE11YjNKcFoybHVXQzVqZFhKeVpXNTBMRnh1SUNBZ0lDQWdJQ0I1T2lCMllXeDFaWE11YjNKcFoybHVXUzVqZFhKeVpXNTBJRnh1SUNBZ0lIMHNJSFpoYkhWbGN5NWhibWRzWlM1amRYSnlaVzUwTENCMllXeDFaWE11WkdsemRHRnVZMlV1WTNWeWNtVnVkQ2xiYTJWNVhUdGNibHh1SWwxOVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvaW5jL3RyYW5zZm9ybWVycy5qc1xuICoqIG1vZHVsZSBpZCA9IDMwXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbnZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfUHJvY2VzczIgPSByZXF1aXJlKCcuLi9wcm9jZXNzL1Byb2Nlc3MnKTtcblxudmFyIF9Qcm9jZXNzMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX1Byb2Nlc3MyKTtcblxudmFyIF9jYWxjID0gcmVxdWlyZSgnLi4vaW5jL2NhbGMnKTtcblxudmFyIF91dGlscyA9IHJlcXVpcmUoJy4uL2luYy91dGlscycpO1xuXG52YXIgX2JpbmRBZGFwdGVyID0gcmVxdWlyZSgnLi4vaW5jL2JpbmQtYWRhcHRlcicpO1xuXG52YXIgX2JpbmRBZGFwdGVyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2JpbmRBZGFwdGVyKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKG9iaiwga2V5cykgeyB2YXIgdGFyZ2V0ID0ge307IGZvciAodmFyIGkgaW4gb2JqKSB7IGlmIChrZXlzLmluZGV4T2YoaSkgPj0gMCkgY29udGludWU7IGlmICghT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgaSkpIGNvbnRpbnVlOyB0YXJnZXRbaV0gPSBvYmpbaV07IH0gcmV0dXJuIHRhcmdldDsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmICghc2VsZikgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIGNhbGwgJiYgKHR5cGVvZiBjYWxsID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpID8gY2FsbCA6IHNlbGY7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgXCIgKyB0eXBlb2Ygc3VwZXJDbGFzcyk7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgZW51bWVyYWJsZTogZmFsc2UsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcykgOiBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzOyB9XG5cbnZhciBERUZBVUxUX1BST1AgPSAnY3VycmVudCc7XG52YXIgTlVNRVJJQ0FMX1ZBTFVFUyA9IFtERUZBVUxUX1BST1AsICdmcm9tJywgJ3RvJywgJ21pbicsICdtYXgnXTtcbnZhciBOVU1fTlVNRVJJQ0FMX1ZBTFVFUyA9IE5VTUVSSUNBTF9WQUxVRVMubGVuZ3RoO1xuXG52YXIgQWN0aW9uID0gKGZ1bmN0aW9uIChfUHJvY2Vzcykge1xuICAgIF9pbmhlcml0cyhBY3Rpb24sIF9Qcm9jZXNzKTtcblxuICAgIGZ1bmN0aW9uIEFjdGlvbihwcm9wcykge1xuICAgICAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgQWN0aW9uKTtcblxuICAgICAgICBwcm9wcy5zdGF0ZSA9IHt9O1xuICAgICAgICByZXR1cm4gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgX1Byb2Nlc3MuY2FsbCh0aGlzLCBwcm9wcykpO1xuICAgIH1cblxuICAgIC8qXG4gICAgICAgICMgU2V0IEFjdGlvbiBwcm9wZXJ0aWVzXG4gICAgICAgICMjIFNldCB1c2VyLWRlZmluZWQgQWN0aW9uIHByb3BlcnRpZXNcbiAgICAgICAgIEBwYXJhbSBbb2JqZWN0XVxuICAgICAgICBAcmV0dXJuIFtBY3Rpb25dXG4gICAgKi9cblxuICAgIEFjdGlvbi5wcm90b3R5cGUuc2V0ID0gZnVuY3Rpb24gc2V0KCkge1xuICAgICAgICB2YXIgcHJvcHMgPSBhcmd1bWVudHMubGVuZ3RoIDw9IDAgfHwgYXJndW1lbnRzWzBdID09PSB1bmRlZmluZWQgPyB7fSA6IGFyZ3VtZW50c1swXTtcbiAgICAgICAgdmFyIHZhbHVlcyA9IHByb3BzLnZhbHVlcztcbiAgICAgICAgdmFyIG9uID0gcHJvcHMub247XG5cbiAgICAgICAgdmFyIHByb3BzVG9TZXQgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMocHJvcHMsIFsndmFsdWVzJywgJ29uJ10pO1xuXG4gICAgICAgIF9Qcm9jZXNzLnByb3RvdHlwZS5zZXQuY2FsbCh0aGlzLCBwcm9wc1RvU2V0KTtcblxuICAgICAgICBpZiAob24pIHtcbiAgICAgICAgICAgIC8vIER1Y2t0eXBpc2ggY2hlY2sgZm9yIEFkYXB0ZXJcbiAgICAgICAgICAgIHRoaXMub24gPSAhb24uc2V0dGVyID8gKDAsIF9iaW5kQWRhcHRlcjIuZGVmYXVsdCkob24pIDogb247XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnZhbHVlcyA9IHRoaXMudmFsdWVzIHx8IHt9O1xuICAgICAgICB0aGlzLnZhbHVlS2V5cyA9IHRoaXMudmFsdWVLZXlzIHx8IFtdO1xuICAgICAgICB0aGlzLnBhcmVudEtleXMgPSB0aGlzLnBhcmVudEtleXMgfHwgW107XG5cbiAgICAgICAgLy8gTWVyZ2UgbmV3IGB2YWx1ZWAgcHJvcGVydGllcyB3aXRoIGV4aXN0aW5nXG4gICAgICAgIHZhciBjdXJyZW50VmFsdWVzID0gdGhpcy52YWx1ZXM7XG4gICAgICAgIHZhciBkZWZhdWx0VmFsdWUgPSB0aGlzLmdldERlZmF1bHRWYWx1ZSgpO1xuICAgICAgICB2YXIgZGVmYXVsdFZhbHVlUHJvcCA9IHRoaXMuZ2V0RGVmYXVsdFZhbHVlUHJvcCgpO1xuXG4gICAgICAgIC8vIEluaGVyaXQgdmFsdWUgcHJvcGVydGllcyBmcm9tIGBwcm9wc2BcbiAgICAgICAgZm9yICh2YXIga2V5IGluIGRlZmF1bHRWYWx1ZSkge1xuICAgICAgICAgICAgaWYgKGRlZmF1bHRWYWx1ZS5oYXNPd25Qcm9wZXJ0eShrZXkpICYmIHByb3BzVG9TZXQuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgICAgICAgIGlmIChwcm9wc1RvU2V0W2tleV0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0VmFsdWVba2V5XSA9IHByb3BzVG9TZXRba2V5XTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyBDaGVjayBhbGwgdmFsdWVzIGFuZCBzcGxpdCBpbnRvIGNoaWxkIHZhbHVlcyBhcyBuZWNjZXNzYXJ5XG4gICAgICAgIGZvciAodmFyIGtleSBpbiB2YWx1ZXMpIHtcbiAgICAgICAgICAgIGlmICh2YWx1ZXMuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgICAgICAgIHZhciB2YWx1ZSA9IHZhbHVlc1trZXldO1xuICAgICAgICAgICAgICAgIHZhciBleGlzdGluZ1ZhbHVlID0gY3VycmVudFZhbHVlc1trZXldO1xuICAgICAgICAgICAgICAgIHZhciB2YWx1ZVR5cGUgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgICAgICAgdmFyIG5ld1ZhbHVlID0ge307XG5cbiAgICAgICAgICAgICAgICAvLyBDb252ZXJ0IG5ldyB2YWx1ZSBpbnRvIG9iamVjdCBpZiBpdCBpc24ndCBhbHJlYWR5XG4gICAgICAgICAgICAgICAgaWYgKCgwLCBfdXRpbHMuaXNPYmopKHZhbHVlKSkge1xuICAgICAgICAgICAgICAgICAgICBuZXdWYWx1ZSA9IHZhbHVlO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIG5ld1ZhbHVlW2RlZmF1bHRWYWx1ZVByb3BdID0gdmFsdWU7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLy8gSWYgdmFsdWUgYWxyZWFkeSBleGlzdHMsIGNoZWNrIGZvciBhbmQgdXNlIGV4aXN0aW5nIHR5cGVcbiAgICAgICAgICAgICAgICBpZiAoZXhpc3RpbmdWYWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICBuZXdWYWx1ZSA9IF9leHRlbmRzKHt9LCBleGlzdGluZ1ZhbHVlLCBuZXdWYWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlVHlwZSA9IHRoaXMub24gJiYgdGhpcy5vbi5nZXRWYWx1ZVR5cGUgPyB0aGlzLm9uLmdldFZhbHVlVHlwZShrZXkpIDogZXhpc3RpbmdWYWx1ZS50eXBlO1xuXG4gICAgICAgICAgICAgICAgICAgIC8vIElmIHRoaXMgaXMgYSBuZXcgdmFsdWUsIGNoZWNrIGZvciB0eXBlXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ld1ZhbHVlID0gX2V4dGVuZHMoe30sIGRlZmF1bHRWYWx1ZSwgbmV3VmFsdWUpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBuZXdWYWx1ZS5wcmV2ID0gbmV3VmFsdWUuY3VycmVudDtcblxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gSWYgb25lIGlzIGV4cGxpY2l0bHkgYXNzaWduZWQsIHVzZSB0aGF0XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodmFsdWUudHlwZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlVHlwZSA9IHZhbHVlLnR5cGU7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBPciBpZiBvdXIgQWRhcHRlciBoYXMgYSB0eXBlTWFwLCB1c2UgdGhhdFxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLm9uICYmIHRoaXMub24uZ2V0VmFsdWVUeXBlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlVHlwZSA9IHRoaXMub24uZ2V0VmFsdWVUeXBlKGtleSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gTWF5YmUgcnVuIGB0ZXN0YCBvbiBjb2xvciBoZXJlXG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC8vIElmIHdlJ3ZlIGdvdCBhIHZhbHVlVHlwZSB0aGVuIHByZXByb2Nlc3MgdGhlIHZhbHVlIGFjY29yZGluZ2x5XG4gICAgICAgICAgICAgICAgaWYgKHZhbHVlVHlwZSkge1xuICAgICAgICAgICAgICAgICAgICBuZXdWYWx1ZS50eXBlID0gdmFsdWVUeXBlO1xuXG4gICAgICAgICAgICAgICAgICAgIC8vIElmIHRoaXMgdmFsdWUgc2hvdWxkIGJlIHNwbGl0LCBzcGxpdFxuICAgICAgICAgICAgICAgICAgICBpZiAodmFsdWVUeXBlLnNwbGl0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgY2hpbGRWYWx1ZXMgPSB7fTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gTG9vcCBvdmVyIG51bWVyaWNhbCB2YWx1ZXMgYW5kIHNwbGl0IGFueSBwcmVzZW50XG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IE5VTV9OVU1FUklDQUxfVkFMVUVTOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgcHJvcE5hbWUgPSBOVU1FUklDQUxfVkFMVUVTW2ldO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG5ld1ZhbHVlLmhhc093blByb3BlcnR5KHByb3BOYW1lKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgc3BsaXRWYWx1ZXMgPSB2YWx1ZVR5cGUuc3BsaXQobmV3VmFsdWVbcHJvcE5hbWVdKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBzcGxpdEtleSBpbiBzcGxpdFZhbHVlcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHNwbGl0VmFsdWVzLmhhc093blByb3BlcnR5KHNwbGl0S2V5KSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBzcGxpdFZhbHVlID0gc3BsaXRWYWx1ZXNbc3BsaXRLZXldO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIENyZWF0ZSBuZXcgY2hpbGQgdmFsdWUgaWYgZG9lc24ndCBleGlzdFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghY2hpbGRWYWx1ZXNbc3BsaXRLZXldKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoaWxkVmFsdWVzW3NwbGl0S2V5XSA9IF9leHRlbmRzKHt9LCBuZXdWYWx1ZSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHZhbHVlVHlwZS5kZWZhdWx0UHJvcHMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoaWxkVmFsdWVzW3NwbGl0S2V5XSA9IHZhbHVlVHlwZS5kZWZhdWx0UHJvcHNbc3BsaXRLZXldID8gX2V4dGVuZHMoe30sIHZhbHVlVHlwZS5kZWZhdWx0UHJvcHNbc3BsaXRLZXldLCBjaGlsZFZhbHVlc1tzcGxpdEtleV0pIDogX2V4dGVuZHMoe30sIHZhbHVlVHlwZS5kZWZhdWx0UHJvcHMsIGNoaWxkVmFsdWVzW3NwbGl0S2V5XSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGlsZFZhbHVlc1tzcGxpdEtleV1bcHJvcE5hbWVdID0gc3BsaXRWYWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgbmV3VmFsdWUuY2hpbGRyZW4gPSB7fTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gTm93IGxvb3AgdGhyb3VnaCBhbGwgY2hpbGQgdmFsdWVzIGFuZCBhZGQgdGhlbSBhcyBub3JtYWwgdmFsdWVzXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBjaGlsZEtleSBpbiBjaGlsZFZhbHVlcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjaGlsZFZhbHVlcy5oYXNPd25Qcm9wZXJ0eShjaGlsZEtleSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGNoaWxkVmFsdWUgPSBjaGlsZFZhbHVlc1tjaGlsZEtleV07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBjb21iaW5lZEtleSA9IGtleSArIGNoaWxkS2V5O1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ld1ZhbHVlLmNoaWxkcmVuW2tleV0gPSBjaGlsZFZhbHVlLmN1cnJlbnQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnRWYWx1ZXNbY29tYmluZWRLZXldID0gY2hpbGRWYWx1ZTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy52YWx1ZUtleXMuaW5kZXhPZihjb21iaW5lZEtleSkgPT09IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnZhbHVlS2V5cy5wdXNoKGNvbWJpbmVkS2V5KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gU2F2ZSBhIHRlbXBsYXRlIGZvciByZWNvbWJpbmF0aW9uIGlmIHByZXNlbnRcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh2YWx1ZVR5cGUudGVtcGxhdGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXdWYWx1ZS50ZW1wbGF0ZSA9IG5ld1ZhbHVlLnRlbXBsYXRlIHx8IHZhbHVlVHlwZS50ZW1wbGF0ZShuZXdWYWx1ZS5jdXJyZW50KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gT3Igd2UganVzdCBoYXZlIGRlZmF1bHQgdmFsdWUgcHJvcHMsIGxvYWQgdGhvc2UgXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodmFsdWVUeXBlLmRlZmF1bHRQcm9wcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ld1ZhbHVlID0gX2V4dGVuZHMoe30sIHZhbHVlVHlwZS5kZWZhdWx0UHJvcHMsIG5ld1ZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAvLyBVcGRhdGUgYXBwcm9wcmlhdGUgbGlzdHMgd2l0aCB2YWx1ZSBrZXlcbiAgICAgICAgICAgICAgICBpZiAobmV3VmFsdWUuY2hpbGRyZW4pIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMucGFyZW50S2V5cy5pbmRleE9mKGtleSkgPT09IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnBhcmVudEtleXMucHVzaChrZXkpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMudmFsdWVLZXlzLmluZGV4T2Yoa2V5KSA9PT0gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudmFsdWVLZXlzLnB1c2goa2V5KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGN1cnJlbnRWYWx1ZXNba2V5XSA9IG5ld1ZhbHVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gUHJlY29tcHV0ZSB2YWx1ZSBrZXkgYW5kIHBhcmVudCBrZXkgbGVuZ3RoIHRvIHByZXZlbnQgcGVyLWZyYW1lIG1lYXN1cmVtZW50XG4gICAgICAgIHRoaXMubnVtVmFsdWVLZXlzID0gdGhpcy52YWx1ZUtleXMubGVuZ3RoO1xuICAgICAgICB0aGlzLm51bVBhcmVudEtleXMgPSB0aGlzLnBhcmVudEtleXMubGVuZ3RoO1xuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH07XG5cbiAgICAvKlxuICAgICAgICBEZWNpZGUgd2hldGhlciB0aGlzIEFjdGlvbiB3aWxsIHJlbmRlciBvbiBuZXh0IGZyYW1lXG4gICAgICAgICBAcGFyYW0gW0FjdGlvbl1cbiAgICAgICAgQHBhcmFtIFtudW1iZXJdXG4gICAgICAgIEBwYXJhbSBbbnVtYmVyXVxuICAgICAgICBAcmV0dXJuIFtib29sZWFuXTogUmV0dXJuIHRydWUgdG8gcmVuZGVyXG4gICAgKi9cblxuICAgIEFjdGlvbi5wcm90b3R5cGUud2lsbFJlbmRlciA9IGZ1bmN0aW9uIHdpbGxSZW5kZXIoYWN0aW9uLCBmcmFtZVN0YW1wLCBlbGFwc2VkKSB7XG4gICAgICAgIHZhciBoYXNDaGFuZ2VkID0gZmFsc2U7XG5cbiAgICAgICAgLy8gQ2hlY2sgaWYgYmFzZSB2YWx1ZXMgaGF2ZSB1cGRhdGVkXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5udW1WYWx1ZUtleXM7IGkrKykge1xuICAgICAgICAgICAgdmFyIGtleSA9IHRoaXMudmFsdWVLZXlzW2ldO1xuICAgICAgICAgICAgdmFyIHZhbHVlID0gdGhpcy52YWx1ZXNba2V5XTtcblxuICAgICAgICAgICAgLy8gUnVuIHRyYW5zZm9ybSBmdW5jdGlvbiAoaWYgcHJlc2VudClcbiAgICAgICAgICAgIGlmICh2YWx1ZS50cmFuc2Zvcm0pIHtcbiAgICAgICAgICAgICAgICB2YWx1ZS5jdXJyZW50ID0gdmFsdWUudHJhbnNmb3JtKHZhbHVlLmN1cnJlbnQsIGtleSwgdGhpcyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIENhcCBtaW5pbXVtXG4gICAgICAgICAgICBpZiAoKDAsIF91dGlscy5pc051bSkodmFsdWUubWluKSkge1xuICAgICAgICAgICAgICAgIHZhbHVlLmN1cnJlbnQgPSBNYXRoLm1heCh2YWx1ZS5jdXJyZW50LCB2YWx1ZS5taW4pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBDYXAgbWF4aW11bVxuICAgICAgICAgICAgaWYgKCgwLCBfdXRpbHMuaXNOdW0pKHZhbHVlLm1heCkpIHtcbiAgICAgICAgICAgICAgICB2YWx1ZS5jdXJyZW50ID0gTWF0aC5taW4odmFsdWUuY3VycmVudCwgdmFsdWUubWF4KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gUm91bmQgbnVtYmVyXG4gICAgICAgICAgICBpZiAodmFsdWUucm91bmQpIHtcbiAgICAgICAgICAgICAgICB2YWx1ZS5jdXJyZW50ID0gTWF0aC5yb3VuZCh2YWx1ZS5jdXJyZW50KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gVXBkYXRlIHZlbG9jaXR5XG4gICAgICAgICAgICBpZiAoIXRoaXMuY2FsY3VsYXRlc1ZlbG9jaXR5KSB7XG4gICAgICAgICAgICAgICAgdmFsdWUudmVsb2NpdHkgPSAoMCwgX2NhbGMuc3BlZWRQZXJTZWNvbmQpKHZhbHVlLmN1cnJlbnQgLSB2YWx1ZS5wcmV2LCBlbGFwc2VkKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gSWYgdGhpcyB2YWx1ZSBoYXMgY2hhbmdlZFxuICAgICAgICAgICAgaWYgKHZhbHVlLnByZXYgIT09IHZhbHVlLmN1cnJlbnQpIHtcbiAgICAgICAgICAgICAgICBoYXNDaGFuZ2VkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB2YWx1ZS5wcmV2ID0gdmFsdWUuY3VycmVudDtcblxuICAgICAgICAgICAgICAgIC8vIEFwcGVuZCB1bml0XG4gICAgICAgICAgICAgICAgdmFyIHZhbHVlRm9yU3RhdGUgPSB2YWx1ZS51bml0ID8gdmFsdWUuY3VycmVudCArIHZhbHVlLnVuaXQgOiB2YWx1ZS5jdXJyZW50O1xuXG4gICAgICAgICAgICAgICAgLy8gQWRkIHRvIHN0YXRlIGlmIHRoaXMgaXMgbm90IGEgY2hpbGQgdmF1ZVxuICAgICAgICAgICAgICAgIGlmICghdmFsdWUucGFyZW50KSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGVba2V5XSA9IHZhbHVlRm9yU3RhdGU7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy52YWx1ZXNbdmFsdWUucGFyZW50XS5jaGlsZHJlbltrZXldID0gdmFsdWVGb3JTdGF0ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcy5vbkNsZWFudXAgPyB0cnVlIDogaGFzQ2hhbmdlZDtcbiAgICB9O1xuXG4gICAgLypcbiAgICAgICAgSWYgd2UgYXJlIHJlbmRlcmluZywgcmVjb21iaW5lIHBhcmVudCB2YWx1ZXMgZmlyc3RcbiAgICAqL1xuXG4gICAgQWN0aW9uLnByb3RvdHlwZS5vblByZVJlbmRlciA9IGZ1bmN0aW9uIG9uUHJlUmVuZGVyKCkge1xuICAgICAgICAvLyBVcGRhdGUgcGFyZW50IHZhbHVlc1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubnVtUGFyZW50S2V5czsgaSsrKSB7XG4gICAgICAgICAgICB2YXIga2V5ID0gdGhpcy5wYXJlbnRLZXlzW2ldO1xuICAgICAgICAgICAgdmFyIHZhbHVlID0gdGhpcy52YWx1ZXNba2V5XTtcblxuICAgICAgICAgICAgdmFsdWUuY3VycmVudCA9IHZhbHVlLnR5cGUuY29tYmluZSh2YWx1ZS5jaGlsZHJlbiwgdmFsdWUudGVtcGxhdGUpO1xuXG4gICAgICAgICAgICBpZiAodGhpcy5zdGF0ZVtrZXldICE9PSB2YWx1ZS5jdXJyZW50KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zdGF0ZVtrZXldID0gdmFsdWUuY3VycmVudDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBBY3Rpb24ucHJvdG90eXBlLm9uUmVuZGVyID0gZnVuY3Rpb24gb25SZW5kZXIoX3JlZikge1xuICAgICAgICB2YXIgc3RhdGUgPSBfcmVmLnN0YXRlO1xuICAgICAgICB2YXIgb24gPSBfcmVmLm9uO1xuXG4gICAgICAgIGlmIChvbiAmJiBvbi5zZXQpIHtcbiAgICAgICAgICAgIG9uLnNldChzdGF0ZSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5vbkZyYW1lKSB7XG4gICAgICAgICAgICB0aGlzLm9uRnJhbWUodGhpcyk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgQWN0aW9uLnByb3RvdHlwZS5wYXVzZSA9IGZ1bmN0aW9uIHBhdXNlKCkge1xuICAgICAgICBfUHJvY2Vzcy5wcm90b3R5cGUuc3RvcC5jYWxsKHRoaXMpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xuXG4gICAgQWN0aW9uLnByb3RvdHlwZS5yZXN1bWUgPSBmdW5jdGlvbiByZXN1bWUoKSB7XG4gICAgICAgIF9Qcm9jZXNzLnByb3RvdHlwZS5zdGFydC5jYWxsKHRoaXMpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xuXG4gICAgQWN0aW9uLnByb3RvdHlwZS5zdGFydCA9IGZ1bmN0aW9uIHN0YXJ0KCkge1xuICAgICAgICB2YXIgdmFsdWVzID0gdGhpcy52YWx1ZXM7XG4gICAgICAgIF9Qcm9jZXNzLnByb3RvdHlwZS5zdGFydC5jYWxsKHRoaXMpO1xuXG4gICAgICAgIGZvciAodmFyIGtleSBpbiB2YWx1ZXMpIHtcbiAgICAgICAgICAgIGlmICh2YWx1ZXMuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgICAgICAgIHZhbHVlc1trZXldLnByZXYgPSB2YWx1ZXNba2V5XS5vcmlnaW4gPSB2YWx1ZXNba2V5XS5jdXJyZW50O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcblxuICAgIC8qXG4gICAgICAgICMgR2V0IGRlZmF1bHQgQWN0aW9uIHZhbHVlIHByb3BlcnRpZXNcbiAgICAgICAgIEByZXR1cm4gW29iamVjdF1cbiAgICAqL1xuXG4gICAgQWN0aW9uLnByb3RvdHlwZS5nZXREZWZhdWx0VmFsdWUgPSBmdW5jdGlvbiBnZXREZWZhdWx0VmFsdWUoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBjdXJyZW50OiAwLFxuICAgICAgICAgICAgdmVsb2NpdHk6IDBcbiAgICAgICAgfTtcbiAgICB9O1xuXG4gICAgLypcbiAgICAgICAgIyBHZXQgZGVmYXVsdCBBY3Rpb24gdmFsdWUgcHJvcGVydHkgbmFtZVxuICAgICAgICAjIyBTZXQgdGhpcyBgdmFsdWVgIHByb3BlcnR5IHdoZW4gc2V0IGFzIHZhbHVlIGluc3RlYWQgb2Ygb2JqZWN0XG4gICAgICAgICBAcmV0dXJuIFtzdHJpbmddXG4gICAgKi9cblxuICAgIEFjdGlvbi5wcm90b3R5cGUuZ2V0RGVmYXVsdFZhbHVlUHJvcCA9IGZ1bmN0aW9uIGdldERlZmF1bHRWYWx1ZVByb3AoKSB7XG4gICAgICAgIHJldHVybiBERUZBVUxUX1BST1A7XG4gICAgfTtcblxuICAgIHJldHVybiBBY3Rpb247XG59KShfUHJvY2VzczMuZGVmYXVsdCk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IEFjdGlvbjtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbk55WXk5aFkzUnBiMjV6TDBGamRHbHZiaTVxY3lKZExDSnVZVzFsY3lJNlcxMHNJbTFoY0hCcGJtZHpJam9pT3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3TzBGQlMwRXNTVUZCVFN4WlFVRlpMRWRCUVVjc1UwRkJVeXhEUVVGRE8wRkJReTlDTEVsQlFVMHNaMEpCUVdkQ0xFZEJRVWNzUTBGQlF5eFpRVUZaTEVWQlFVVXNUVUZCVFN4RlFVRkZMRWxCUVVrc1JVRkJSU3hMUVVGTExFVkJRVVVzUzBGQlN5eERRVUZETEVOQlFVTTdRVUZEY0VVc1NVRkJUU3h2UWtGQmIwSXNSMEZCUnl4blFrRkJaMElzUTBGQlF5eE5RVUZOTEVOQlFVTTdPMGxCUldoRExFMUJRVTA3WTBGQlRpeE5RVUZOT3p0QlFVTjJRaXhoUVVScFFpeE5RVUZOTEVOQlExZ3NTMEZCU3l4RlFVRkZPemhDUVVSR0xFMUJRVTA3TzBGQlJXNUNMR0ZCUVVzc1EwRkJReXhMUVVGTExFZEJRVWNzUlVGQlJTeERRVUZETzJkRVFVTnFRaXh2UWtGQlRTeExRVUZMTEVOQlFVTTdTMEZEWmpzN096czdPenM3UVVGQlFUdEJRVXBuUWl4VlFVRk5MRmRCWVhaQ0xFZEJRVWNzYTBKQlFXRTdXVUZCV2l4TFFVRkxMSGxFUVVGSExFVkJRVVU3V1VGRFJpeE5RVUZOTEVkQlFYZENMRXRCUVVzc1EwRkJia01zVFVGQlRUdFpRVUZGTEVWQlFVVXNSMEZCYjBJc1MwRkJTeXhEUVVFelFpeEZRVUZGT3p0WlFVRkxMRlZCUVZVc05FSkJRVXNzUzBGQlN6czdRVUZGTTBNc01rSkJRVTBzUjBGQlJ5eExRVUZCTEU5QlFVTXNWVUZCVlN4RFFVRkRMRU5CUVVNN08wRkJSWFJDTEZsQlFVa3NSVUZCUlN4RlFVRkZPenRCUVVWS0xHZENRVUZKTEVOQlFVTXNSVUZCUlN4SFFVRkhMRUZCUVVNc1EwRkJReXhGUVVGRkxFTkJRVU1zVFVGQlRTeEhRVUZKTERKQ1FVRlpMRVZCUVVVc1EwRkJReXhIUVVGSExFVkJRVVVzUTBGQlF6dFRRVU5xUkRzN1FVRkZSQ3haUVVGSkxFTkJRVU1zVFVGQlRTeEhRVUZITEVsQlFVa3NRMEZCUXl4TlFVRk5MRWxCUVVrc1JVRkJSU3hEUVVGRE8wRkJRMmhETEZsQlFVa3NRMEZCUXl4VFFVRlRMRWRCUVVjc1NVRkJTU3hEUVVGRExGTkJRVk1zU1VGQlNTeEZRVUZGTEVOQlFVTTdRVUZEZEVNc1dVRkJTU3hEUVVGRExGVkJRVlVzUjBGQlJ5eEpRVUZKTEVOQlFVTXNWVUZCVlN4SlFVRkpMRVZCUVVVN096dEJRVUZETEVGQlIzaERMRmxCUVUwc1lVRkJZU3hIUVVGSExFbEJRVWtzUTBGQlF5eE5RVUZOTEVOQlFVTTdRVUZEYkVNc1dVRkJUU3haUVVGWkxFZEJRVWNzU1VGQlNTeERRVUZETEdWQlFXVXNSVUZCUlN4RFFVRkRPMEZCUXpWRExGbEJRVTBzWjBKQlFXZENMRWRCUVVjc1NVRkJTU3hEUVVGRExHMUNRVUZ0UWl4RlFVRkZPenM3UVVGQlF5eEJRVWR3UkN4aFFVRkxMRWxCUVVrc1IwRkJSeXhKUVVGSkxGbEJRVmtzUlVGQlJUdEJRVU14UWl4blFrRkJTU3haUVVGWkxFTkJRVU1zWTBGQll5eERRVUZETEVkQlFVY3NRMEZCUXl4SlFVRkpMRlZCUVZVc1EwRkJReXhqUVVGakxFTkJRVU1zUjBGQlJ5eERRVUZETEVWQlFVVTdRVUZEY0VVc2IwSkJRVWtzVlVGQlZTeERRVUZETEVkQlFVY3NRMEZCUXl4TFFVRkxMRk5CUVZNc1JVRkJSVHRCUVVNdlFpeG5RMEZCV1N4RFFVRkRMRWRCUVVjc1EwRkJReXhIUVVGSExGVkJRVlVzUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXp0cFFrRkRka003WVVGRFNqdFRRVU5LT3pzN1FVRkJRU3hCUVVkRUxHRkJRVXNzU1VGQlNTeEhRVUZITEVsQlFVa3NUVUZCVFN4RlFVRkZPMEZCUTNCQ0xHZENRVUZKTEUxQlFVMHNRMEZCUXl4alFVRmpMRU5CUVVNc1IwRkJSeXhEUVVGRExFVkJRVVU3UVVGRE5VSXNiMEpCUVUwc1MwRkJTeXhIUVVGSExFMUJRVTBzUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXp0QlFVTXhRaXh2UWtGQlRTeGhRVUZoTEVkQlFVY3NZVUZCWVN4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRE8wRkJRM3BETEc5Q1FVRkpMRk5CUVZNc1dVRkJRU3hEUVVGRE8wRkJRMlFzYjBKQlFVa3NVVUZCVVN4SFFVRkhMRVZCUVVVN096dEJRVUZETEVGQlIyeENMRzlDUVVGSkxGZEJla1JLTEV0QlFVc3NSVUY1UkVzc1MwRkJTeXhEUVVGRExFVkJRVVU3UVVGRFpDdzBRa0ZCVVN4SFFVRkhMRXRCUVVzc1EwRkJRenRwUWtGRGNFSXNUVUZCVFR0QlFVTklMRFJDUVVGUkxFTkJRVU1zWjBKQlFXZENMRU5CUVVNc1IwRkJSeXhMUVVGTExFTkJRVU03YVVKQlEzUkRPenM3UVVGQlFTeEJRVWRFTEc5Q1FVRkpMR0ZCUVdFc1JVRkJSVHRCUVVObUxEUkNRVUZSTEdkQ1FVRlJMR0ZCUVdFc1JVRkJTeXhSUVVGUkxFTkJRVVVzUTBGQlF6dEJRVU0zUXl3MlFrRkJVeXhIUVVGSExFRkJRVU1zU1VGQlNTeERRVUZETEVWQlFVVXNTVUZCU1N4SlFVRkpMRU5CUVVNc1JVRkJSU3hEUVVGRExGbEJRVmtzUjBGQlNTeEpRVUZKTEVOQlFVTXNSVUZCUlN4RFFVRkRMRmxCUVZrc1EwRkJReXhIUVVGSExFTkJRVU1zUjBGQlJ5eGhRVUZoTEVOQlFVTXNTVUZCU1RzN08wRkJRVU1zYVVKQlIyeEhMRTFCUVUwN1FVRkRTQ3huUTBGQlVTeG5Ra0ZCVVN4WlFVRlpMRVZCUVVzc1VVRkJVU3hEUVVGRkxFTkJRVU03TzBGQlJUVkRMR2REUVVGUkxFTkJRVU1zU1VGQlNTeEhRVUZITEZGQlFWRXNRMEZCUXl4UFFVRlBPenM3UVVGQlF5eEJRVWRxUXl3MFFrRkJTU3hMUVVGTExFTkJRVU1zU1VGQlNTeEZRVUZGTzBGQlExb3NjVU5CUVZNc1IwRkJSeXhMUVVGTExFTkJRVU1zU1VGQlNUczdPMEZCUVVNc2VVSkJSekZDTEUxQlFVMHNTVUZCU1N4SlFVRkpMRU5CUVVNc1JVRkJSU3hKUVVGSkxFbEJRVWtzUTBGQlF5eEZRVUZGTEVOQlFVTXNXVUZCV1N4RlFVRkZPMEZCUTNoRExIbERRVUZUTEVkQlFVY3NTVUZCU1N4RFFVRkRMRVZCUVVVc1EwRkJReXhaUVVGWkxFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTTdOa0pCUTNwRE96dEJRVUZCTEhGQ1FVVktPenM3UVVGQlFTeEJRVWRFTEc5Q1FVRkpMRk5CUVZNc1JVRkJSVHRCUVVOWUxEUkNRVUZSTEVOQlFVTXNTVUZCU1N4SFFVRkhMRk5CUVZNN096dEJRVUZETEVGQlJ6RkNMSGRDUVVGSkxGTkJRVk1zUTBGQlF5eExRVUZMTEVWQlFVVTdRVUZEYWtJc05FSkJRVTBzVjBGQlZ5eEhRVUZITEVWQlFVVTdPenRCUVVGRExFRkJSM1pDTERaQ1FVRkxMRWxCUVVrc1EwRkJReXhIUVVGSExFTkJRVU1zUlVGQlJTeERRVUZETEVkQlFVY3NiMEpCUVc5Q0xFVkJRVVVzUTBGQlF5eEZRVUZGTEVWQlFVVTdRVUZETTBNc1owTkJRVTBzVVVGQlVTeEhRVUZITEdkQ1FVRm5RaXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZET3p0QlFVVnlReXhuUTBGQlNTeFJRVUZSTEVOQlFVTXNZMEZCWXl4RFFVRkRMRkZCUVZFc1EwRkJReXhGUVVGRk8wRkJRMjVETEc5RFFVRk5MRmRCUVZjc1IwRkJSeXhUUVVGVExFTkJRVU1zUzBGQlN5eERRVUZETEZGQlFWRXNRMEZCUXl4UlFVRlJMRU5CUVVNc1EwRkJReXhEUVVGRE96dEJRVVY0UkN4eFEwRkJTeXhKUVVGSkxGRkJRVkVzU1VGQlNTeFhRVUZYTEVWQlFVVTdRVUZET1VJc2QwTkJRVWtzVjBGQlZ5eERRVUZETEdOQlFXTXNRMEZCUXl4UlFVRlJMRU5CUVVNc1JVRkJSVHRCUVVOMFF5dzBRMEZCVFN4VlFVRlZMRWRCUVVjc1YwRkJWeXhEUVVGRExGRkJRVkVzUTBGQlF6czdRVUZCUXl4QlFVVjZReXcwUTBGQlNTeERRVUZETEZkQlFWY3NRMEZCUXl4UlFVRlJMRU5CUVVNc1JVRkJSVHRCUVVONFFpeDFSRUZCVnl4RFFVRkRMRkZCUVZFc1EwRkJReXhuUWtGQlVTeFJRVUZSTEVOQlFVVXNRMEZCUXpzN1FVRkZlRU1zWjBSQlFVa3NVMEZCVXl4RFFVRkRMRmxCUVZrc1JVRkJSVHRCUVVONFFpd3lSRUZCVnl4RFFVRkRMRkZCUVZFc1EwRkJReXhIUVVGSExFRkJRVU1zVTBGQlV5eERRVUZETEZsQlFWa3NRMEZCUXl4UlFVRlJMRU5CUVVNc1owSkJRMmhFTEZOQlFWTXNRMEZCUXl4WlFVRlpMRU5CUVVNc1VVRkJVU3hEUVVGRExFVkJRVXNzVjBGQlZ5eERRVUZETEZGQlFWRXNRMEZCUXl4cFFrRkRNVVFzVTBGQlV5eERRVUZETEZsQlFWa3NSVUZCU3l4WFFVRlhMRU5CUVVNc1VVRkJVU3hEUVVGRExFTkJRVVVzUTBGQlF6czJRMEZETDBRN2VVTkJRMG83TzBGQlJVUXNiVVJCUVZjc1EwRkJReXhSUVVGUkxFTkJRVU1zUTBGQlF5eFJRVUZSTEVOQlFVTXNSMEZCUnl4VlFVRlZMRU5CUVVNN2NVTkJRMmhFTzJsRFFVTktPelpDUVVOS08zbENRVU5LT3p0QlFVVkVMR2REUVVGUkxFTkJRVU1zVVVGQlVTeEhRVUZITEVWQlFVVTdPenRCUVVGRExFRkJSM1pDTERaQ1FVRkxMRWxCUVVrc1VVRkJVU3hKUVVGSkxGZEJRVmNzUlVGQlJUdEJRVU01UWl4blEwRkJTU3hYUVVGWExFTkJRVU1zWTBGQll5eERRVUZETEZGQlFWRXNRMEZCUXl4RlFVRkZPMEZCUTNSRExHOURRVUZOTEZWQlFWVXNSMEZCUnl4WFFVRlhMRU5CUVVNc1VVRkJVU3hEUVVGRExFTkJRVU03UVVGRGVrTXNiME5CUVUwc1YwRkJWeXhIUVVGSExFZEJRVWNzUjBGQlJ5eFJRVUZSTEVOQlFVTTdPMEZCUlc1RExIZERRVUZSTEVOQlFVTXNVVUZCVVN4RFFVRkRMRWRCUVVjc1EwRkJReXhIUVVGSExGVkJRVlVzUTBGQlF5eFBRVUZQTEVOQlFVTTdRVUZETlVNc05rTkJRV0VzUTBGQlF5eFhRVUZYTEVOQlFVTXNSMEZCUnl4VlFVRlZMRU5CUVVNN08wRkJSWGhETEc5RFFVRkpMRWxCUVVrc1EwRkJReXhUUVVGVExFTkJRVU1zVDBGQlR5eERRVUZETEZkQlFWY3NRMEZCUXl4TFFVRkxMRU5CUVVNc1EwRkJReXhGUVVGRk8wRkJRelZETEhkRFFVRkpMRU5CUVVNc1UwRkJVeXhEUVVGRExFbEJRVWtzUTBGQlF5eFhRVUZYTEVOQlFVTXNRMEZCUXp0cFEwRkRjRU03TmtKQlEwbzdlVUpCUTBvN096dEJRVUZCTEVGQlIwUXNORUpCUVVrc1UwRkJVeXhEUVVGRExGRkJRVkVzUlVGQlJUdEJRVU53UWl4dlEwRkJVU3hEUVVGRExGRkJRVkVzUjBGQlJ5eFJRVUZSTEVOQlFVTXNVVUZCVVN4SlFVRkpMRk5CUVZNc1EwRkJReXhSUVVGUkxFTkJRVU1zVVVGQlVTeERRVUZETEU5QlFVOHNRMEZCUXl4RFFVRkRPM2xDUVVOcVJqczdPMEZCUVVFc2NVSkJSMG9zVFVGQlRTeEpRVUZKTEZOQlFWTXNRMEZCUXl4WlFVRlpMRVZCUVVVN1FVRkRMMElzYjBOQlFWRXNaMEpCUVZFc1UwRkJVeXhEUVVGRExGbEJRVmtzUlVGQlN5eFJRVUZSTEVOQlFVVXNRMEZCUXp0NVFrRkRla1E3YVVKQlEwbzdPenRCUVVGQkxFRkJSMFFzYjBKQlFVa3NVVUZCVVN4RFFVRkRMRkZCUVZFc1JVRkJSVHRCUVVOdVFpeDNRa0ZCU1N4SlFVRkpMRU5CUVVNc1ZVRkJWU3hEUVVGRExFOUJRVThzUTBGQlF5eEhRVUZITEVOQlFVTXNTMEZCU3l4RFFVRkRMRU5CUVVNc1JVRkJSVHRCUVVOeVF5dzBRa0ZCU1N4RFFVRkRMRlZCUVZVc1EwRkJReXhKUVVGSkxFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTTdjVUpCUXpkQ08ybENRVU5LTEUxQlFVMDdRVUZEU0N4M1FrRkJTU3hKUVVGSkxFTkJRVU1zVTBGQlV5eERRVUZETEU5QlFVOHNRMEZCUXl4SFFVRkhMRU5CUVVNc1MwRkJTeXhEUVVGRExFTkJRVU1zUlVGQlJUdEJRVU53UXl3MFFrRkJTU3hEUVVGRExGTkJRVk1zUTBGQlF5eEpRVUZKTEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNN2NVSkJRelZDTzJsQ1FVTktPenRCUVVWRUxEWkNRVUZoTEVOQlFVTXNSMEZCUnl4RFFVRkRMRWRCUVVjc1VVRkJVU3hEUVVGRE8yRkJRMnBETzFOQlEwbzdPenRCUVVGQkxFRkJSMFFzV1VGQlNTeERRVUZETEZsQlFWa3NSMEZCUnl4SlFVRkpMRU5CUVVNc1UwRkJVeXhEUVVGRExFMUJRVTBzUTBGQlF6dEJRVU14UXl4WlFVRkpMRU5CUVVNc1lVRkJZU3hIUVVGSExFbEJRVWtzUTBGQlF5eFZRVUZWTEVOQlFVTXNUVUZCVFN4RFFVRkRPenRCUVVVMVF5eGxRVUZQTEVsQlFVa3NRMEZCUXp0TFFVTm1PenM3T3pzN096czdPMEZCYWt0blFpeFZRVUZOTEZkQk1rdDJRaXhWUVVGVkxIVkNRVUZETEUxQlFVMHNSVUZCUlN4VlFVRlZMRVZCUVVVc1QwRkJUeXhGUVVGRk8wRkJRM0JETEZsQlFVa3NWVUZCVlN4SFFVRkhMRXRCUVVzN096dEJRVUZETEVGQlIzWkNMR0ZCUVVzc1NVRkJTU3hEUVVGRExFZEJRVWNzUTBGQlF5eEZRVUZGTEVOQlFVTXNSMEZCUnl4SlFVRkpMRU5CUVVNc1dVRkJXU3hGUVVGRkxFTkJRVU1zUlVGQlJTeEZRVUZGTzBGQlEzaERMR2RDUVVGTkxFZEJRVWNzUjBGQlJ5eEpRVUZKTEVOQlFVTXNVMEZCVXl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRE8wRkJRemxDTEdkQ1FVRk5MRXRCUVVzc1IwRkJSeXhKUVVGSkxFTkJRVU1zVFVGQlRTeERRVUZETEVkQlFVY3NRMEZCUXpzN08wRkJRVU1zUVVGSEwwSXNaMEpCUVVrc1MwRkJTeXhEUVVGRExGTkJRVk1zUlVGQlJUdEJRVU5xUWl4eFFrRkJTeXhEUVVGRExFOUJRVThzUjBGQlJ5eExRVUZMTEVOQlFVTXNVMEZCVXl4RFFVRkRMRXRCUVVzc1EwRkJReXhQUVVGUExFVkJRVVVzUjBGQlJ5eEZRVUZGTEVsQlFVa3NRMEZCUXl4RFFVRkRPMkZCUXpkRU96czdRVUZCUVN4QlFVZEVMR2RDUVVGSkxGZEJhRTFRTEV0QlFVc3NSVUZuVFZFc1MwRkJTeXhEUVVGRExFZEJRVWNzUTBGQlF5eEZRVUZGTzBGQlEyeENMSEZDUVVGTExFTkJRVU1zVDBGQlR5eEhRVUZITEVsQlFVa3NRMEZCUXl4SFFVRkhMRU5CUVVNc1MwRkJTeXhEUVVGRExFOUJRVThzUlVGQlJTeExRVUZMTEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNN1lVRkRkRVE3T3p0QlFVRkJMRUZCUjBRc1owSkJRVWtzVjBGeVRWQXNTMEZCU3l4RlFYRk5VU3hMUVVGTExFTkJRVU1zUjBGQlJ5eERRVUZETEVWQlFVVTdRVUZEYkVJc2NVSkJRVXNzUTBGQlF5eFBRVUZQTEVkQlFVY3NTVUZCU1N4RFFVRkRMRWRCUVVjc1EwRkJReXhMUVVGTExFTkJRVU1zVDBGQlR5eEZRVUZGTEV0QlFVc3NRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJRenRoUVVOMFJEczdPMEZCUVVFc1FVRkhSQ3huUWtGQlNTeExRVUZMTEVOQlFVTXNTMEZCU3l4RlFVRkZPMEZCUTJJc2NVSkJRVXNzUTBGQlF5eFBRVUZQTEVkQlFVY3NTVUZCU1N4RFFVRkRMRXRCUVVzc1EwRkJReXhMUVVGTExFTkJRVU1zVDBGQlR5eERRVUZETEVOQlFVTTdZVUZETjBNN096dEJRVUZCTEVGQlIwUXNaMEpCUVVrc1EwRkJReXhKUVVGSkxFTkJRVU1zYTBKQlFXdENMRVZCUVVVN1FVRkRNVUlzY1VKQlFVc3NRMEZCUXl4UlFVRlJMRWRCUVVjc1ZVRnFUbmhDTEdOQlFXTXNSVUZwVG5sQ0xFdEJRVXNzUTBGQlF5eFBRVUZQTEVkQlFVY3NTMEZCU3l4RFFVRkRMRWxCUVVrc1JVRkJSU3hQUVVGUExFTkJRVU1zUTBGQlF6dGhRVU40UlRzN08wRkJRVUVzUVVGSFJDeG5Ra0ZCU1N4TFFVRkxMRU5CUVVNc1NVRkJTU3hMUVVGTExFdEJRVXNzUTBGQlF5eFBRVUZQTEVWQlFVVTdRVUZET1VJc01FSkJRVlVzUjBGQlJ5eEpRVUZKTEVOQlFVTTdRVUZEYkVJc2NVSkJRVXNzUTBGQlF5eEpRVUZKTEVkQlFVY3NTMEZCU3l4RFFVRkRMRTlCUVU4N096dEJRVUZETEVGQlJ6TkNMRzlDUVVGTkxHRkJRV0VzUjBGQlJ5eEJRVUZETEV0QlFVc3NRMEZCUXl4SlFVRkpMRWRCUVVrc1MwRkJTeXhEUVVGRExFOUJRVThzUjBGQlJ5eExRVUZMTEVOQlFVTXNTVUZCU1N4SFFVRkhMRXRCUVVzc1EwRkJReXhQUVVGUE96czdRVUZCUXl4QlFVZG9SaXh2UWtGQlNTeERRVUZETEV0QlFVc3NRMEZCUXl4TlFVRk5MRVZCUVVVN1FVRkRaaXgzUWtGQlNTeERRVUZETEV0QlFVc3NRMEZCUXl4SFFVRkhMRU5CUVVNc1IwRkJSeXhoUVVGaExFTkJRVU03YVVKQlEyNURMRTFCUVUwN1FVRkRTQ3gzUWtGQlNTeERRVUZETEUxQlFVMHNRMEZCUXl4TFFVRkxMRU5CUVVNc1RVRkJUU3hEUVVGRExFTkJRVU1zVVVGQlVTeERRVUZETEVkQlFVY3NRMEZCUXl4SFFVRkhMR0ZCUVdFc1EwRkJRenRwUWtGRE0wUTdZVUZEU2p0VFFVTktPenRCUVVWRUxHVkJRVThzUVVGQlF5eEpRVUZKTEVOQlFVTXNVMEZCVXl4SFFVRkpMRWxCUVVrc1IwRkJSeXhWUVVGVkxFTkJRVU03UzBGREwwTTdPenM3T3p0QlFUbE9aMElzVlVGQlRTeFhRVzFQZGtJc1YwRkJWeXd3UWtGQlJ6czdRVUZGVml4aFFVRkxMRWxCUVVrc1EwRkJReXhIUVVGSExFTkJRVU1zUlVGQlJTeERRVUZETEVkQlFVY3NTVUZCU1N4RFFVRkRMR0ZCUVdFc1JVRkJSU3hEUVVGRExFVkJRVVVzUlVGQlJUdEJRVU42UXl4blFrRkJUU3hIUVVGSExFZEJRVWNzU1VGQlNTeERRVUZETEZWQlFWVXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJRenRCUVVNdlFpeG5Ra0ZCVFN4TFFVRkxMRWRCUVVjc1NVRkJTU3hEUVVGRExFMUJRVTBzUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXpzN1FVRkZMMElzYVVKQlFVc3NRMEZCUXl4UFFVRlBMRWRCUVVjc1MwRkJTeXhEUVVGRExFbEJRVWtzUTBGQlF5eFBRVUZQTEVOQlFVTXNTMEZCU3l4RFFVRkRMRkZCUVZFc1JVRkJSU3hMUVVGTExFTkJRVU1zVVVGQlVTeERRVUZETEVOQlFVTTdPMEZCUlc1RkxHZENRVUZKTEVsQlFVa3NRMEZCUXl4TFFVRkxMRU5CUVVNc1IwRkJSeXhEUVVGRExFdEJRVXNzUzBGQlN5eERRVUZETEU5QlFVOHNSVUZCUlR0QlFVTnVReXh2UWtGQlNTeERRVUZETEV0QlFVc3NRMEZCUXl4SFFVRkhMRU5CUVVNc1IwRkJSeXhMUVVGTExFTkJRVU1zVDBGQlR5eERRVUZETzJGQlEyNURPMU5CUTBvN1MwRkRTanM3UVVFdlQyZENMRlZCUVUwc1YwRnBVSFpDTEZGQlFWRXNNa0pCUVdkQ08xbEJRV0lzUzBGQlN5eFJRVUZNTEV0QlFVczdXVUZCUlN4RlFVRkZMRkZCUVVZc1JVRkJSVHM3UVVGRGFFSXNXVUZCU1N4RlFVRkZMRWxCUVVrc1JVRkJSU3hEUVVGRExFZEJRVWNzUlVGQlJUdEJRVU5rTEdOQlFVVXNRMEZCUXl4SFFVRkhMRU5CUVVNc1MwRkJTeXhEUVVGRExFTkJRVU03VTBGRGFrSTdPMEZCUlVRc1dVRkJTU3hKUVVGSkxFTkJRVU1zVDBGQlR5eEZRVUZGTzBGQlEyUXNaMEpCUVVrc1EwRkJReXhQUVVGUExFTkJRVU1zU1VGQlNTeERRVUZETEVOQlFVTTdVMEZEZEVJN1MwRkRTanM3UVVGNlVHZENMRlZCUVUwc1YwRXlVSFpDTEV0QlFVc3NiMEpCUVVjN1FVRkRTaXd5UWtGQlRTeEpRVUZKTEV0QlFVRXNUVUZCUlN4RFFVRkRPMEZCUTJJc1pVRkJUeXhKUVVGSkxFTkJRVU03UzBGRFpqczdRVUU1VUdkQ0xGVkJRVTBzVjBGblVYWkNMRTFCUVUwc2NVSkJRVWM3UVVGRFRDd3lRa0ZCVFN4TFFVRkxMRXRCUVVFc1RVRkJSU3hEUVVGRE8wRkJRMlFzWlVGQlR5eEpRVUZKTEVOQlFVTTdTMEZEWmpzN1FVRnVVV2RDTEZWQlFVMHNWMEZ4VVhaQ0xFdEJRVXNzYjBKQlFVYzdRVUZEU2l4WlFVRk5MRTFCUVUwc1IwRkJSeXhKUVVGSkxFTkJRVU1zVFVGQlRTeERRVUZETzBGQlF6TkNMREpDUVVGTkxFdEJRVXNzUzBGQlFTeE5RVUZGTEVOQlFVTTdPMEZCUldRc1lVRkJTeXhKUVVGSkxFZEJRVWNzU1VGQlNTeE5RVUZOTEVWQlFVVTdRVUZEY0VJc1owSkJRVWtzVFVGQlRTeERRVUZETEdOQlFXTXNRMEZCUXl4SFFVRkhMRU5CUVVNc1JVRkJSVHRCUVVNMVFpeHpRa0ZCVFN4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRExFbEJRVWtzUjBGQlJ5eE5RVUZOTEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNc1RVRkJUU3hIUVVGSExFMUJRVTBzUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXl4UFFVRlBMRU5CUVVNN1lVRkRMMFE3VTBGRFNqdExRVU5LT3pzN096czdPMEZCT1ZGblFpeFZRVUZOTEZkQmNWSjJRaXhsUVVGbExEaENRVUZITzBGQlEyUXNaVUZCVHp0QlFVTklMRzFDUVVGUExFVkJRVVVzUTBGQlF6dEJRVU5XTEc5Q1FVRlJMRVZCUVVVc1EwRkJRenRUUVVOa0xFTkJRVU03UzBGRFREczdPenM3T3pzN1FVRXhVbWRDTEZWQlFVMHNWMEZyVTNaQ0xHMUNRVUZ0UWl4clEwRkJSenRCUVVOc1FpeGxRVUZQTEZsQlFWa3NRMEZCUXp0TFFVTjJRanM3VjBGd1UyZENMRTFCUVUwN096dHJRa0ZCVGl4TlFVRk5JaXdpWm1sc1pTSTZJa0ZqZEdsdmJpNXFjeUlzSW5OdmRYSmpaVkp2YjNRaU9pSXZWWE5sY25NdlRXRjBkRkJsY25KNUwxTnBkR1Z6TDNCdmNHMXZkR2x2YmlJc0luTnZkWEpqWlhORGIyNTBaVzUwSWpwYkltbHRjRzl5ZENCUWNtOWpaWE56SUdaeWIyMGdKeTR1TDNCeWIyTmxjM012VUhKdlkyVnpjeWM3WEc1cGJYQnZjblFnZXlCemNHVmxaRkJsY2xObFkyOXVaQ0I5SUdaeWIyMGdKeTR1TDJsdVl5OWpZV3hqSnp0Y2JtbHRjRzl5ZENCN0lHbHpUblZ0TENCcGMwOWlhaUI5SUdaeWIyMGdKeTR1TDJsdVl5OTFkR2xzY3ljN1hHNXBiWEJ2Y25RZ1ltbHVaRUZrWVhCMFpYSWdabkp2YlNBbkxpNHZhVzVqTDJKcGJtUXRZV1JoY0hSbGNpYzdYRzVjYm1OdmJuTjBJRVJGUmtGVlRGUmZVRkpQVUNBOUlDZGpkWEp5Wlc1MEp6dGNibU52Ym5OMElFNVZUVVZTU1VOQlRGOVdRVXhWUlZNZ1BTQmJSRVZHUVZWTVZGOVFVazlRTENBblpuSnZiU2NzSUNkMGJ5Y3NJQ2R0YVc0bkxDQW5iV0Y0SjEwN1hHNWpiMjV6ZENCT1ZVMWZUbFZOUlZKSlEwRk1YMVpCVEZWRlV5QTlJRTVWVFVWU1NVTkJURjlXUVV4VlJWTXViR1Z1WjNSb08xeHVYRzVsZUhCdmNuUWdaR1ZtWVhWc2RDQmpiR0Z6Y3lCQlkzUnBiMjRnWlhoMFpXNWtjeUJRY205alpYTnpJSHRjYmlBZ0lDQmpiMjV6ZEhKMVkzUnZjaWh3Y205d2N5a2dlMXh1SUNBZ0lDQWdJQ0J3Y205d2N5NXpkR0YwWlNBOUlIdDlPMXh1SUNBZ0lDQWdJQ0J6ZFhCbGNpaHdjbTl3Y3lrN1hHNGdJQ0FnZlZ4dVhHNGdJQ0FnTHlwY2JpQWdJQ0FnSUNBZ0l5QlRaWFFnUVdOMGFXOXVJSEJ5YjNCbGNuUnBaWE5jYmlBZ0lDQWdJQ0FnSXlNZ1UyVjBJSFZ6WlhJdFpHVm1hVzVsWkNCQlkzUnBiMjRnY0hKdmNHVnlkR2xsYzF4dVhHNGdJQ0FnSUNBZ0lFQndZWEpoYlNCYmIySnFaV04wWFZ4dUlDQWdJQ0FnSUNCQWNtVjBkWEp1SUZ0QlkzUnBiMjVkWEc0Z0lDQWdLaTljYmlBZ0lDQnpaWFFvY0hKdmNITWdQU0I3ZlNrZ2UxeHVJQ0FnSUNBZ0lDQmpiMjV6ZENCN0lIWmhiSFZsY3l3Z2IyNHNJQzR1TG5CeWIzQnpWRzlUWlhRZ2ZTQTlJSEJ5YjNCek8xeHVYRzRnSUNBZ0lDQWdJSE4xY0dWeUxuTmxkQ2h3Y205d2MxUnZVMlYwS1R0Y2JseHVJQ0FnSUNBZ0lDQnBaaUFvYjI0cElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUM4dklFUjFZMnQwZVhCcGMyZ2dZMmhsWTJzZ1ptOXlJRUZrWVhCMFpYSmNiaUFnSUNBZ0lDQWdJQ0FnSUhSb2FYTXViMjRnUFNBb0lXOXVMbk5sZEhSbGNpa2dQeUJpYVc1a1FXUmhjSFJsY2lodmJpa2dPaUJ2Ymp0Y2JpQWdJQ0FnSUNBZ2ZWeHVYRzRnSUNBZ0lDQWdJSFJvYVhNdWRtRnNkV1Z6SUQwZ2RHaHBjeTUyWVd4MVpYTWdmSHdnZTMwN1hHNGdJQ0FnSUNBZ0lIUm9hWE11ZG1Gc2RXVkxaWGx6SUQwZ2RHaHBjeTUyWVd4MVpVdGxlWE1nZkh3Z1cxMDdYRzRnSUNBZ0lDQWdJSFJvYVhNdWNHRnlaVzUwUzJWNWN5QTlJSFJvYVhNdWNHRnlaVzUwUzJWNWN5QjhmQ0JiWFR0Y2JseHVJQ0FnSUNBZ0lDQXZMeUJOWlhKblpTQnVaWGNnWUhaaGJIVmxZQ0J3Y205d1pYSjBhV1Z6SUhkcGRHZ2daWGhwYzNScGJtZGNiaUFnSUNBZ0lDQWdZMjl1YzNRZ1kzVnljbVZ1ZEZaaGJIVmxjeUE5SUhSb2FYTXVkbUZzZFdWek8xeHVJQ0FnSUNBZ0lDQmpiMjV6ZENCa1pXWmhkV3gwVm1Gc2RXVWdQU0IwYUdsekxtZGxkRVJsWm1GMWJIUldZV3gxWlNncE8xeHVJQ0FnSUNBZ0lDQmpiMjV6ZENCa1pXWmhkV3gwVm1Gc2RXVlFjbTl3SUQwZ2RHaHBjeTVuWlhSRVpXWmhkV3gwVm1Gc2RXVlFjbTl3S0NrN1hHNWNiaUFnSUNBZ0lDQWdMeThnU1c1b1pYSnBkQ0IyWVd4MVpTQndjbTl3WlhKMGFXVnpJR1p5YjIwZ1lIQnliM0J6WUZ4dUlDQWdJQ0FnSUNCbWIzSWdLR3hsZENCclpYa2dhVzRnWkdWbVlYVnNkRlpoYkhWbEtTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNCcFppQW9aR1ZtWVhWc2RGWmhiSFZsTG1oaGMwOTNibEJ5YjNCbGNuUjVLR3RsZVNrZ0ppWWdjSEp2Y0hOVWIxTmxkQzVvWVhOUGQyNVFjbTl3WlhKMGVTaHJaWGtwS1NCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2FXWWdLSEJ5YjNCelZHOVRaWFJiYTJWNVhTQWhQVDBnZFc1a1pXWnBibVZrS1NCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJR1JsWm1GMWJIUldZV3gxWlZ0clpYbGRJRDBnY0hKdmNITlViMU5sZEZ0clpYbGRPMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJSDFjYmlBZ0lDQWdJQ0FnSUNBZ0lIMWNiaUFnSUNBZ0lDQWdmVnh1WEc0Z0lDQWdJQ0FnSUM4dklFTm9aV05ySUdGc2JDQjJZV3gxWlhNZ1lXNWtJSE53YkdsMElHbHVkRzhnWTJocGJHUWdkbUZzZFdWeklHRnpJRzVsWTJObGMzTmhjbmxjYmlBZ0lDQWdJQ0FnWm05eUlDaHNaWFFnYTJWNUlHbHVJSFpoYkhWbGN5a2dlMXh1SUNBZ0lDQWdJQ0FnSUNBZ2FXWWdLSFpoYkhWbGN5NW9ZWE5QZDI1UWNtOXdaWEowZVNoclpYa3BLU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnWTI5dWMzUWdkbUZzZFdVZ1BTQjJZV3gxWlhOYmEyVjVYVHRjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0JqYjI1emRDQmxlR2x6ZEdsdVoxWmhiSFZsSUQwZ1kzVnljbVZ1ZEZaaGJIVmxjMXRyWlhsZE8xeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lHeGxkQ0IyWVd4MVpWUjVjR1U3WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnYkdWMElHNWxkMVpoYkhWbElEMGdlMzA3WEc1Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBdkx5QkRiMjUyWlhKMElHNWxkeUIyWVd4MVpTQnBiblJ2SUc5aWFtVmpkQ0JwWmlCcGRDQnBjMjRuZENCaGJISmxZV1I1WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnYVdZZ0tHbHpUMkpxS0haaGJIVmxLU2tnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQnVaWGRXWVd4MVpTQTlJSFpoYkhWbE8xeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lIMGdaV3h6WlNCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJRzVsZDFaaGJIVmxXMlJsWm1GMWJIUldZV3gxWlZCeWIzQmRJRDBnZG1Gc2RXVTdYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdmVnh1WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnTHk4Z1NXWWdkbUZzZFdVZ1lXeHlaV0ZrZVNCbGVHbHpkSE1zSUdOb1pXTnJJR1p2Y2lCaGJtUWdkWE5sSUdWNGFYTjBhVzVuSUhSNWNHVmNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQnBaaUFvWlhocGMzUnBibWRXWVd4MVpTa2dlMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCdVpYZFdZV3gxWlNBOUlIc2dMaTR1WlhocGMzUnBibWRXWVd4MVpTd2dMaTR1Ym1WM1ZtRnNkV1VnZlR0Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdkbUZzZFdWVWVYQmxJRDBnS0hSb2FYTXViMjRnSmlZZ2RHaHBjeTV2Ymk1blpYUldZV3gxWlZSNWNHVXBJRDhnZEdocGN5NXZiaTVuWlhSV1lXeDFaVlI1Y0dVb2EyVjVLU0E2SUdWNGFYTjBhVzVuVm1Gc2RXVXVkSGx3WlR0Y2JseHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDOHZJRWxtSUhSb2FYTWdhWE1nWVNCdVpYY2dkbUZzZFdVc0lHTm9aV05ySUdadmNpQjBlWEJsWEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnZlNCbGJITmxJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2JtVjNWbUZzZFdVZ1BTQjdJQzR1TG1SbFptRjFiSFJXWVd4MVpTd2dMaTR1Ym1WM1ZtRnNkV1VnZlR0Y2JseHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0J1WlhkV1lXeDFaUzV3Y21WMklEMGdibVYzVm1Gc2RXVXVZM1Z5Y21WdWREdGNibHh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBdkx5QkpaaUJ2Ym1VZ2FYTWdaWGh3YkdsamFYUnNlU0JoYzNOcFoyNWxaQ3dnZFhObElIUm9ZWFJjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2FXWWdLSFpoYkhWbExuUjVjR1VwSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUhaaGJIVmxWSGx3WlNBOUlIWmhiSFZsTG5SNWNHVTdYRzVjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0x5OGdUM0lnYVdZZ2IzVnlJRUZrWVhCMFpYSWdhR0Z6SUdFZ2RIbHdaVTFoY0N3Z2RYTmxJSFJvWVhSY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdmU0JsYkhObElHbG1JQ2gwYUdsekxtOXVJQ1ltSUhSb2FYTXViMjR1WjJWMFZtRnNkV1ZVZVhCbEtTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQjJZV3gxWlZSNWNHVWdQU0IwYUdsekxtOXVMbWRsZEZaaGJIVmxWSGx3WlNoclpYa3BPMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCOVhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQzh2SUUxaGVXSmxJSEoxYmlCZ2RHVnpkR0FnYjI0Z1kyOXNiM0lnYUdWeVpWeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lIMWNibHh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQzh2SUVsbUlIZGxKM1psSUdkdmRDQmhJSFpoYkhWbFZIbHdaU0IwYUdWdUlIQnlaWEJ5YjJObGMzTWdkR2hsSUhaaGJIVmxJR0ZqWTI5eVpHbHVaMng1WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnYVdZZ0tIWmhiSFZsVkhsd1pTa2dlMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCdVpYZFdZV3gxWlM1MGVYQmxJRDBnZG1Gc2RXVlVlWEJsTzF4dVhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQzh2SUVsbUlIUm9hWE1nZG1Gc2RXVWdjMmh2ZFd4a0lHSmxJSE53YkdsMExDQnpjR3hwZEZ4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQnBaaUFvZG1Gc2RXVlVlWEJsTG5Od2JHbDBLU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0JqYjI1emRDQmphR2xzWkZaaGJIVmxjeUE5SUh0OU8xeHVYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQXZMeUJNYjI5d0lHOTJaWElnYm5WdFpYSnBZMkZzSUhaaGJIVmxjeUJoYm1RZ2MzQnNhWFFnWVc1NUlIQnlaWE5sYm5SY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUdadmNpQW9iR1YwSUdrZ1BTQXdPeUJwSUR3Z1RsVk5YMDVWVFVWU1NVTkJURjlXUVV4VlJWTTdJR2tyS3lrZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJR052Ym5OMElIQnliM0JPWVcxbElEMGdUbFZOUlZKSlEwRk1YMVpCVEZWRlUxdHBYVHRjYmx4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lHbG1JQ2h1WlhkV1lXeDFaUzVvWVhOUGQyNVFjbTl3WlhKMGVTaHdjbTl3VG1GdFpTa3BJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdZMjl1YzNRZ2MzQnNhWFJXWVd4MVpYTWdQU0IyWVd4MVpWUjVjR1V1YzNCc2FYUW9ibVYzVm1Gc2RXVmJjSEp2Y0U1aGJXVmRLVHRjYmx4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0JtYjNJZ0tHeGxkQ0J6Y0d4cGRFdGxlU0JwYmlCemNHeHBkRlpoYkhWbGN5a2dlMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnYVdZZ0tITndiR2wwVm1Gc2RXVnpMbWhoYzA5M2JsQnliM0JsY25SNUtITndiR2wwUzJWNUtTa2dlMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lHTnZibk4wSUhOd2JHbDBWbUZzZFdVZ1BTQnpjR3hwZEZaaGJIVmxjMXR6Y0d4cGRFdGxlVjA3WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdMeThnUTNKbFlYUmxJRzVsZHlCamFHbHNaQ0IyWVd4MVpTQnBaaUJrYjJWemJpZDBJR1Y0YVhOMFhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnYVdZZ0tDRmphR2xzWkZaaGJIVmxjMXR6Y0d4cGRFdGxlVjBwSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ1kyaHBiR1JXWVd4MVpYTmJjM0JzYVhSTFpYbGRJRDBnZXlBdUxpNXVaWGRXWVd4MVpTQjlPMXh1WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUdsbUlDaDJZV3gxWlZSNWNHVXVaR1ZtWVhWc2RGQnliM0J6S1NCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0JqYUdsc1pGWmhiSFZsYzF0emNHeHBkRXRsZVYwZ1BTQW9kbUZzZFdWVWVYQmxMbVJsWm1GMWJIUlFjbTl3YzF0emNHeHBkRXRsZVYwcElEOWNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQjdJQzR1TG5aaGJIVmxWSGx3WlM1a1pXWmhkV3gwVUhKdmNITmJjM0JzYVhSTFpYbGRMQ0F1TGk1amFHbHNaRlpoYkhWbGMxdHpjR3hwZEV0bGVWMGdmU0E2WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnZXlBdUxpNTJZV3gxWlZSNWNHVXVaR1ZtWVhWc2RGQnliM0J6TENBdUxpNWphR2xzWkZaaGJIVmxjMXR6Y0d4cGRFdGxlVjBnZlR0Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2ZWeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUgxY2JseHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUdOb2FXeGtWbUZzZFdWelczTndiR2wwUzJWNVhWdHdjbTl3VG1GdFpWMGdQU0J6Y0d4cGRGWmhiSFZsTzF4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2ZWeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCOVhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdmVnh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdmVnh1WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0J1WlhkV1lXeDFaUzVqYUdsc1pISmxiaUE5SUh0OU8xeHVYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQXZMeUJPYjNjZ2JHOXZjQ0IwYUhKdmRXZG9JR0ZzYkNCamFHbHNaQ0IyWVd4MVpYTWdZVzVrSUdGa1pDQjBhR1Z0SUdGeklHNXZjbTFoYkNCMllXeDFaWE5jYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJR1p2Y2lBb2JHVjBJR05vYVd4a1MyVjVJR2x1SUdOb2FXeGtWbUZzZFdWektTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnYVdZZ0tHTm9hV3hrVm1Gc2RXVnpMbWhoYzA5M2JsQnliM0JsY25SNUtHTm9hV3hrUzJWNUtTa2dlMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQmpiMjV6ZENCamFHbHNaRlpoYkhWbElEMGdZMmhwYkdSV1lXeDFaWE5iWTJocGJHUkxaWGxkTzF4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0JqYjI1emRDQmpiMjFpYVc1bFpFdGxlU0E5SUd0bGVTQXJJR05vYVd4a1MyVjVPMXh1WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJRzVsZDFaaGJIVmxMbU5vYVd4a2NtVnVXMnRsZVYwZ1BTQmphR2xzWkZaaGJIVmxMbU4xY25KbGJuUTdYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lHTjFjbkpsYm5SV1lXeDFaWE5iWTI5dFltbHVaV1JMWlhsZElEMGdZMmhwYkdSV1lXeDFaVHRjYmx4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0JwWmlBb2RHaHBjeTUyWVd4MVpVdGxlWE11YVc1a1pYaFBaaWhqYjIxaWFXNWxaRXRsZVNrZ1BUMDlJQzB4S1NCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQjBhR2x6TG5aaGJIVmxTMlY1Y3k1d2RYTm9LR052YldKcGJtVmtTMlY1S1R0Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnZlZ4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lIMWNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lIMWNibHh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdMeThnVTJGMlpTQmhJSFJsYlhCc1lYUmxJR1p2Y2lCeVpXTnZiV0pwYm1GMGFXOXVJR2xtSUhCeVpYTmxiblJjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJR2xtSUNoMllXeDFaVlI1Y0dVdWRHVnRjR3hoZEdVcElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0J1WlhkV1lXeDFaUzUwWlcxd2JHRjBaU0E5SUc1bGQxWmhiSFZsTG5SbGJYQnNZWFJsSUh4OElIWmhiSFZsVkhsd1pTNTBaVzF3YkdGMFpTaHVaWGRXWVd4MVpTNWpkWEp5Wlc1MEtUdGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lIMWNibHh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBdkx5QlBjaUIzWlNCcWRYTjBJR2hoZG1VZ1pHVm1ZWFZzZENCMllXeDFaU0J3Y205d2N5d2diRzloWkNCMGFHOXpaU0FnSUZ4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQjlJR1ZzYzJVZ2FXWWdLSFpoYkhWbFZIbHdaUzVrWldaaGRXeDBVSEp2Y0hNcElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lHNWxkMVpoYkhWbElEMGdleUF1TGk1MllXeDFaVlI1Y0dVdVpHVm1ZWFZzZEZCeWIzQnpMQ0F1TGk1dVpYZFdZV3gxWlNCOU8xeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0I5WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnZlZ4dVhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0x5OGdWWEJrWVhSbElHRndjSEp2Y0hKcFlYUmxJR3hwYzNSeklIZHBkR2dnZG1Gc2RXVWdhMlY1WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnYVdZZ0tHNWxkMVpoYkhWbExtTm9hV3hrY21WdUtTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUdsbUlDaDBhR2x6TG5CaGNtVnVkRXRsZVhNdWFXNWtaWGhQWmloclpYa3BJRDA5UFNBdE1Ta2dlMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdkR2hwY3k1d1lYSmxiblJMWlhsekxuQjFjMmdvYTJWNUtUdGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnZlZ4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUgwZ1pXeHpaU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lHbG1JQ2gwYUdsekxuWmhiSFZsUzJWNWN5NXBibVJsZUU5bUtHdGxlU2tnUFQwOUlDMHhLU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0IwYUdsekxuWmhiSFZsUzJWNWN5NXdkWE5vS0d0bGVTazdYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUgxY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCOVhHNWNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQmpkWEp5Wlc1MFZtRnNkV1Z6VzJ0bGVWMGdQU0J1WlhkV1lXeDFaVHRjYmlBZ0lDQWdJQ0FnSUNBZ0lIMWNiaUFnSUNBZ0lDQWdmVnh1WEc0Z0lDQWdJQ0FnSUM4dklGQnlaV052YlhCMWRHVWdkbUZzZFdVZ2EyVjVJR0Z1WkNCd1lYSmxiblFnYTJWNUlHeGxibWQwYUNCMGJ5QndjbVYyWlc1MElIQmxjaTFtY21GdFpTQnRaV0Z6ZFhKbGJXVnVkRnh1SUNBZ0lDQWdJQ0IwYUdsekxtNTFiVlpoYkhWbFMyVjVjeUE5SUhSb2FYTXVkbUZzZFdWTFpYbHpMbXhsYm1kMGFEdGNiaUFnSUNBZ0lDQWdkR2hwY3k1dWRXMVFZWEpsYm5STFpYbHpJRDBnZEdocGN5NXdZWEpsYm5STFpYbHpMbXhsYm1kMGFEdGNibHh1SUNBZ0lDQWdJQ0J5WlhSMWNtNGdkR2hwY3p0Y2JpQWdJQ0I5WEc1Y2JpQWdJQ0F2S2x4dUlDQWdJQ0FnSUNCRVpXTnBaR1VnZDJobGRHaGxjaUIwYUdseklFRmpkR2x2YmlCM2FXeHNJSEpsYm1SbGNpQnZiaUJ1WlhoMElHWnlZVzFsWEc1Y2JpQWdJQ0FnSUNBZ1FIQmhjbUZ0SUZ0QlkzUnBiMjVkWEc0Z0lDQWdJQ0FnSUVCd1lYSmhiU0JiYm5WdFltVnlYVnh1SUNBZ0lDQWdJQ0JBY0dGeVlXMGdXMjUxYldKbGNsMWNiaUFnSUNBZ0lDQWdRSEpsZEhWeWJpQmJZbTl2YkdWaGJsMDZJRkpsZEhWeWJpQjBjblZsSUhSdklISmxibVJsY2x4dUlDQWdJQ292WEc0Z0lDQWdkMmxzYkZKbGJtUmxjaWhoWTNScGIyNHNJR1p5WVcxbFUzUmhiWEFzSUdWc1lYQnpaV1FwSUh0Y2JpQWdJQ0FnSUNBZ2JHVjBJR2hoYzBOb1lXNW5aV1FnUFNCbVlXeHpaVHRjYmx4dUlDQWdJQ0FnSUNBdkx5QkRhR1ZqYXlCcFppQmlZWE5sSUhaaGJIVmxjeUJvWVhabElIVndaR0YwWldRZ1hHNGdJQ0FnSUNBZ0lHWnZjaUFvYkdWMElHa2dQU0F3T3lCcElEd2dkR2hwY3k1dWRXMVdZV3gxWlV0bGVYTTdJR2tyS3lrZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnWTI5dWMzUWdhMlY1SUQwZ2RHaHBjeTUyWVd4MVpVdGxlWE5iYVYwN1hHNGdJQ0FnSUNBZ0lDQWdJQ0JqYjI1emRDQjJZV3gxWlNBOUlIUm9hWE11ZG1Gc2RXVnpXMnRsZVYwN1hHNWNiaUFnSUNBZ0lDQWdJQ0FnSUM4dklGSjFiaUIwY21GdWMyWnZjbTBnWm5WdVkzUnBiMjRnS0dsbUlIQnlaWE5sYm5RcFhHNGdJQ0FnSUNBZ0lDQWdJQ0JwWmlBb2RtRnNkV1V1ZEhKaGJuTm1iM0p0S1NCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2RtRnNkV1V1WTNWeWNtVnVkQ0E5SUhaaGJIVmxMblJ5WVc1elptOXliU2gyWVd4MVpTNWpkWEp5Wlc1MExDQnJaWGtzSUhSb2FYTXBPMXh1SUNBZ0lDQWdJQ0FnSUNBZ2ZWeHVYRzRnSUNBZ0lDQWdJQ0FnSUNBdkx5QkRZWEFnYldsdWFXMTFiVnh1SUNBZ0lDQWdJQ0FnSUNBZ2FXWWdLR2x6VG5WdEtIWmhiSFZsTG0xcGJpa3BJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0IyWVd4MVpTNWpkWEp5Wlc1MElEMGdUV0YwYUM1dFlYZ29kbUZzZFdVdVkzVnljbVZ1ZEN3Z2RtRnNkV1V1YldsdUtUdGNiaUFnSUNBZ0lDQWdJQ0FnSUgxY2JseHVJQ0FnSUNBZ0lDQWdJQ0FnTHk4Z1EyRndJRzFoZUdsdGRXMWNiaUFnSUNBZ0lDQWdJQ0FnSUdsbUlDaHBjMDUxYlNoMllXeDFaUzV0WVhncEtTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdkbUZzZFdVdVkzVnljbVZ1ZENBOUlFMWhkR2d1YldsdUtIWmhiSFZsTG1OMWNuSmxiblFzSUhaaGJIVmxMbTFoZUNrN1hHNGdJQ0FnSUNBZ0lDQWdJQ0I5WEc1Y2JpQWdJQ0FnSUNBZ0lDQWdJQzh2SUZKdmRXNWtJRzUxYldKbGNseHVJQ0FnSUNBZ0lDQWdJQ0FnYVdZZ0tIWmhiSFZsTG5KdmRXNWtLU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnZG1Gc2RXVXVZM1Z5Y21WdWRDQTlJRTFoZEdndWNtOTFibVFvZG1Gc2RXVXVZM1Z5Y21WdWRDazdYRzRnSUNBZ0lDQWdJQ0FnSUNCOVhHNWNiaUFnSUNBZ0lDQWdJQ0FnSUM4dklGVndaR0YwWlNCMlpXeHZZMmwwZVZ4dUlDQWdJQ0FnSUNBZ0lDQWdhV1lnS0NGMGFHbHpMbU5oYkdOMWJHRjBaWE5XWld4dlkybDBlU2tnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUhaaGJIVmxMblpsYkc5amFYUjVJRDBnYzNCbFpXUlFaWEpUWldOdmJtUW9kbUZzZFdVdVkzVnljbVZ1ZENBdElIWmhiSFZsTG5CeVpYWXNJR1ZzWVhCelpXUXBPMXh1SUNBZ0lDQWdJQ0FnSUNBZ2ZWeHVYRzRnSUNBZ0lDQWdJQ0FnSUNBdkx5QkpaaUIwYUdseklIWmhiSFZsSUdoaGN5QmphR0Z1WjJWa1hHNGdJQ0FnSUNBZ0lDQWdJQ0JwWmlBb2RtRnNkV1V1Y0hKbGRpQWhQVDBnZG1Gc2RXVXVZM1Z5Y21WdWRDa2dlMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJR2hoYzBOb1lXNW5aV1FnUFNCMGNuVmxPMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJSFpoYkhWbExuQnlaWFlnUFNCMllXeDFaUzVqZFhKeVpXNTBPMXh1WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnTHk4Z1FYQndaVzVrSUhWdWFYUmNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQmpiMjV6ZENCMllXeDFaVVp2Y2xOMFlYUmxJRDBnS0haaGJIVmxMblZ1YVhRcElEOGdkbUZzZFdVdVkzVnljbVZ1ZENBcklIWmhiSFZsTG5WdWFYUWdPaUIyWVd4MVpTNWpkWEp5Wlc1ME8xeHVYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdMeThnUVdSa0lIUnZJSE4wWVhSbElHbG1JSFJvYVhNZ2FYTWdibTkwSUdFZ1kyaHBiR1FnZG1GMVpWeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lHbG1JQ2doZG1Gc2RXVXVjR0Z5Wlc1MEtTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUhSb2FYTXVjM1JoZEdWYmEyVjVYU0E5SUhaaGJIVmxSbTl5VTNSaGRHVTdYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdmU0JsYkhObElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnZEdocGN5NTJZV3gxWlhOYmRtRnNkV1V1Y0dGeVpXNTBYUzVqYUdsc1pISmxibHRyWlhsZElEMGdkbUZzZFdWR2IzSlRkR0YwWlR0Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCOVhHNGdJQ0FnSUNBZ0lDQWdJQ0I5WEc0Z0lDQWdJQ0FnSUgxY2JseHVJQ0FnSUNBZ0lDQnlaWFIxY200Z0tIUm9hWE11YjI1RGJHVmhiblZ3S1NBL0lIUnlkV1VnT2lCb1lYTkRhR0Z1WjJWa08xeHVJQ0FnSUgxY2JseHVJQ0FnSUM4cVhHNGdJQ0FnSUNBZ0lFbG1JSGRsSUdGeVpTQnlaVzVrWlhKcGJtY3NJSEpsWTI5dFltbHVaU0J3WVhKbGJuUWdkbUZzZFdWeklHWnBjbk4wWEc0Z0lDQWdLaTljYmlBZ0lDQnZibEJ5WlZKbGJtUmxjaWdwSUh0Y2JpQWdJQ0FnSUNBZ0x5OGdWWEJrWVhSbElIQmhjbVZ1ZENCMllXeDFaWE5jYmlBZ0lDQWdJQ0FnWm05eUlDaHNaWFFnYVNBOUlEQTdJR2tnUENCMGFHbHpMbTUxYlZCaGNtVnVkRXRsZVhNN0lHa3JLeWtnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdZMjl1YzNRZ2EyVjVJRDBnZEdocGN5NXdZWEpsYm5STFpYbHpXMmxkTzF4dUlDQWdJQ0FnSUNBZ0lDQWdZMjl1YzNRZ2RtRnNkV1VnUFNCMGFHbHpMblpoYkhWbGMxdHJaWGxkTzF4dVhHNGdJQ0FnSUNBZ0lDQWdJQ0IyWVd4MVpTNWpkWEp5Wlc1MElEMGdkbUZzZFdVdWRIbHdaUzVqYjIxaWFXNWxLSFpoYkhWbExtTm9hV3hrY21WdUxDQjJZV3gxWlM1MFpXMXdiR0YwWlNrN1hHNWNiaUFnSUNBZ0lDQWdJQ0FnSUdsbUlDaDBhR2x6TG5OMFlYUmxXMnRsZVYwZ0lUMDlJSFpoYkhWbExtTjFjbkpsYm5RcElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQjBhR2x6TG5OMFlYUmxXMnRsZVYwZ1BTQjJZV3gxWlM1amRYSnlaVzUwTzF4dUlDQWdJQ0FnSUNBZ0lDQWdmVnh1SUNBZ0lDQWdJQ0I5WEc0Z0lDQWdmVnh1WEc0Z0lDQWdiMjVTWlc1a1pYSW9leUJ6ZEdGMFpTd2diMjRnZlNrZ2UxeHVJQ0FnSUNBZ0lDQnBaaUFvYjI0Z0ppWWdiMjR1YzJWMEtTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNCdmJpNXpaWFFvYzNSaGRHVXBPMXh1SUNBZ0lDQWdJQ0I5WEc1Y2JpQWdJQ0FnSUNBZ2FXWWdLSFJvYVhNdWIyNUdjbUZ0WlNrZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnZEdocGN5NXZia1p5WVcxbEtIUm9hWE1wTzF4dUlDQWdJQ0FnSUNCOVhHNGdJQ0FnZlZ4dVhHNGdJQ0FnY0dGMWMyVW9LU0I3WEc0Z0lDQWdJQ0FnSUhOMWNHVnlMbk4wYjNBb0tUdGNiaUFnSUNBZ0lDQWdjbVYwZFhKdUlIUm9hWE03WEc0Z0lDQWdmVnh1WEc0Z0lDQWdjbVZ6ZFcxbEtDa2dlMXh1SUNBZ0lDQWdJQ0J6ZFhCbGNpNXpkR0Z5ZENncE8xeHVJQ0FnSUNBZ0lDQnlaWFIxY200Z2RHaHBjenRjYmlBZ0lDQjlYRzVjYmlBZ0lDQnpkR0Z5ZENncElIdGNiaUFnSUNBZ0lDQWdZMjl1YzNRZ2RtRnNkV1Z6SUQwZ2RHaHBjeTUyWVd4MVpYTTdYRzRnSUNBZ0lDQWdJSE4xY0dWeUxuTjBZWEowS0NrN1hHNWNiaUFnSUNBZ0lDQWdabTl5SUNoc1pYUWdhMlY1SUdsdUlIWmhiSFZsY3lrZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnYVdZZ0tIWmhiSFZsY3k1b1lYTlBkMjVRY205d1pYSjBlU2hyWlhrcEtTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdkbUZzZFdWelcydGxlVjB1Y0hKbGRpQTlJSFpoYkhWbGMxdHJaWGxkTG05eWFXZHBiaUE5SUhaaGJIVmxjMXRyWlhsZExtTjFjbkpsYm5RN1hHNGdJQ0FnSUNBZ0lDQWdJQ0I5WEc0Z0lDQWdJQ0FnSUgxY2JpQWdJQ0I5WEc1Y2JpQWdJQ0F2S2x4dUlDQWdJQ0FnSUNBaklFZGxkQ0JrWldaaGRXeDBJRUZqZEdsdmJpQjJZV3gxWlNCd2NtOXdaWEowYVdWelhHNWNiaUFnSUNBZ0lDQWdRSEpsZEhWeWJpQmJiMkpxWldOMFhWeHVJQ0FnSUNvdlhHNGdJQ0FnWjJWMFJHVm1ZWFZzZEZaaGJIVmxLQ2tnZTF4dUlDQWdJQ0FnSUNCeVpYUjFjbTRnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdZM1Z5Y21WdWREb2dNQ3hjYmlBZ0lDQWdJQ0FnSUNBZ0lIWmxiRzlqYVhSNU9pQXdYRzRnSUNBZ0lDQWdJSDA3WEc0Z0lDQWdmVnh1WEc0Z0lDQWdMeXBjYmlBZ0lDQWdJQ0FnSXlCSFpYUWdaR1ZtWVhWc2RDQkJZM1JwYjI0Z2RtRnNkV1VnY0hKdmNHVnlkSGtnYm1GdFpWeHVJQ0FnSUNBZ0lDQWpJeUJUWlhRZ2RHaHBjeUJnZG1Gc2RXVmdJSEJ5YjNCbGNuUjVJSGRvWlc0Z2MyVjBJR0Z6SUhaaGJIVmxJR2x1YzNSbFlXUWdiMllnYjJKcVpXTjBYRzVjYmlBZ0lDQWdJQ0FnUUhKbGRIVnliaUJiYzNSeWFXNW5YVnh1SUNBZ0lDb3ZYRzRnSUNBZ1oyVjBSR1ZtWVhWc2RGWmhiSFZsVUhKdmNDZ3BJSHRjYmlBZ0lDQWdJQ0FnY21WMGRYSnVJRVJGUmtGVlRGUmZVRkpQVUR0Y2JpQWdJQ0I5WEc1OVhHNGlYWDA9XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9hY3Rpb25zL0FjdGlvbi5qc1xuICoqIG1vZHVsZSBpZCA9IDMxXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG52YXIgQ0FNRUxfQ0FTRV9QQVRURVJOID0gLyhbYS16XSkoW0EtWl0pL2c7XG52YXIgUkVQTEFDRV9URU1QTEFURSA9ICckMS0kMic7XG52YXIgSEFTX1BFUkZPUk1BTkNFX05PVyA9IHR5cGVvZiBwZXJmb3JtYW5jZSAhPT0gJ3VuZGVmaW5lZCcgJiYgcGVyZm9ybWFuY2Uubm93O1xuXG4vKlxuICAgIEdldCB2YXIgdHlwZSBhcyBzdHJpbmdcbiAgICBcbiAgICBAcGFyYW06IFZhcmlhYmxlIHRvIHRlc3RcbiAgICBAcmV0dXJuIFtzdHJpbmddOiBSZXR1cm5zLCBmb3IgaW5zdGFuY2UgJ09iamVjdCcgaWYgW29iamVjdCBPYmplY3RdXG4qL1xudmFyIHZhclR5cGUgPSBmdW5jdGlvbiAodmFyaWFibGUpIHtcbiAgICByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHZhcmlhYmxlKS5zbGljZSg4LCAtMSk7XG59O1xuXG4vKlxuICAgIENvbnZlcnQgY2FtZWxDYXNlIHRvIGRhc2gtY2FzZVxuXG4gICAgQHBhcmFtIFtzdHJpbmddXG4gICAgQHJldHVybiBbc3RyaW5nXVxuKi9cbnZhciBjYW1lbFRvRGFzaCA9IGV4cG9ydHMuY2FtZWxUb0Rhc2ggPSBmdW5jdGlvbiAoc3RyaW5nKSB7XG4gICAgcmV0dXJuIHN0cmluZy5yZXBsYWNlKENBTUVMX0NBU0VfUEFUVEVSTiwgUkVQTEFDRV9URU1QTEFURSkudG9Mb3dlckNhc2UoKTtcbn07XG5cbi8qXG4gICAgQ29tYmluZSB0cmFuc2Zvcm1lcnMgaW50byBvbmUgZnVuY3Rpb24gdGhhdCBjYWxscyBldmVyeVxuICAgIHRyYW5zZm9ybWVyIGluIHRoZSBhcnJheSBhbmQgcmV0dXJucyB0aGUgcmVzdWx0XG5cbiAgICBAcGFyYW0gW2FycmF5XVxuICAgIEByZXR1cm4gW2Z1bmN0aW9uXVxuKi9cbnZhciBjb21iaW5lVHJhbnNmb3JtZXJzID0gZXhwb3J0cy5jb21iaW5lVHJhbnNmb3JtZXJzID0gZnVuY3Rpb24gKHRyYW5zZm9ybWVycykge1xuICAgIHZhciBudW1UcmFuc2Zvcm1lcnMgPSB0cmFuc2Zvcm1lcnMubGVuZ3RoO1xuICAgIHZhciBpID0gMDtcblxuICAgIC8qXG4gICAgICAgIEBwYXJhbSBbbnVtYmVyXVxuICAgICAgICBAcGFyYW0gW3N0cmluZ11cbiAgICAgICAgQHBhcmFtIFtBY3Rpb25dXG4gICAgICAgIEByZXR1cm4gW251bWJlcl1cbiAgICAqL1xuICAgIHJldHVybiBmdW5jdGlvbiAodiwga2V5LCBhKSB7XG4gICAgICAgIGZvciAoaSA9IDA7IGkgPiBudW1UcmFuc2Zvcm1lcnM7IGkrKykge1xuICAgICAgICAgICAgdiA9IHRyYW5zZm9ybWVyc1tpXSh2LCBrZXksIGEpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHY7XG4gICAgfTtcbn07XG5cbnZhciBjcmVhdGVEZWxpbWl0ZWQgPSBleHBvcnRzLmNyZWF0ZURlbGltaXRlZCA9IGZ1bmN0aW9uICh2YWx1ZXMsIHRlcm1zLCBkZWxpbWl0ZXIsIGNob3ApIHtcbiAgICB2YXIgbnVtVGVybXMgPSB0ZXJtcy5sZW5ndGg7XG4gICAgdmFyIGNvbWJpbmVkID0gJyc7XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IG51bVRlcm1zOyBpKyspIHtcbiAgICAgICAgdmFyIHRlcm0gPSB0ZXJtc1tpXTtcbiAgICAgICAgaWYgKHZhbHVlcy5oYXNPd25Qcm9wZXJ0eSh0ZXJtKSkge1xuICAgICAgICAgICAgY29tYmluZWQgKz0gdmFsdWVzW3Rlcm1dICsgZGVsaW1pdGVyO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGNob3ApIHtcbiAgICAgICAgY29tYmluZWQgPSBjb21iaW5lZC5zbGljZSgwLCAtY2hvcCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbWJpbmVkO1xufTtcblxuLypcbiAgICBDcmVhdGUgYSBmdW5jdGlvbiBzdHJpbmdcblxuICAgICcyMHB4JywgJ3RyYW5zbGF0ZScgLT4gJ3RyYW5zbGF0ZSgyMHB4KSdcblxuICAgIEBwYXJhbSBbc3RyaW5nXVxuICAgIEBwYXJhbSBbc3RyaW5nXVxuICAgIEByZXR1cm4gW3N0cmluZ11cbiovXG52YXIgY3JlYXRlRnVuY3Rpb25TdHJpbmcgPSBleHBvcnRzLmNyZWF0ZUZ1bmN0aW9uU3RyaW5nID0gZnVuY3Rpb24gKHZhbHVlLCBwcmVmaXgpIHtcbiAgICByZXR1cm4gcHJlZml4ICsgJygnICsgdmFsdWUgKyAnKSc7XG59O1xuXG4vKlxuICAgIEdlbmVyYXRlIGN1cnJlbnQgdGltZXN0YW1wXG4gICAgXG4gICAgQHJldHVybiBbdGltZXN0YW1wXTogQ3VycmVudCBVTklYIHRpbWVzdGFtcFxuKi9cbnZhciBjdXJyZW50VGltZSA9IGV4cG9ydHMuY3VycmVudFRpbWUgPSBIQVNfUEVSRk9STUFOQ0VfTk9XID8gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBwZXJmb3JtYW5jZS5ub3coKTtcbn0gOiBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xufTtcblxuLypcbiAgICBTcGxpdCBjb2xvciBzdHJpbmcgaW50byBtYXAgb2YgY29sb3IgcHJvcGVydGllc1xuXG4gICAgXCJyZ2JhKDI1NSwgMjU1LCAyNTUsIDApXCIsIFtcIlJlZFwiLCAnR3JlZW5cIiwgXCJCbHVlXCIsIFwiQWxwaGFcIl1cblxuICAgIHsgUmVkOiAyNTUuLi4gfVxuKi9cbnZhciBnZXRDb2xvclZhbHVlcyA9IGV4cG9ydHMuZ2V0Q29sb3JWYWx1ZXMgPSBmdW5jdGlvbiAodmFsdWUsIGNvbG9yVGVybXMpIHtcbiAgICB2YXIgbnVtQ29sb3JUZXJtcyA9IGNvbG9yVGVybXMubGVuZ3RoO1xuICAgIHZhciBjb2xvclZhbHVlcyA9IHt9O1xuICAgIHZhciBjb2xvcnMgPSBzcGxpdENvbW1hRGVsaW1pdGVkKGdldFZhbHVlRnJvbUZ1bmN0aW9uU3RyaW5nKHZhbHVlKSk7XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IG51bUNvbG9yVGVybXM7IGkrKykge1xuICAgICAgICBjb2xvclZhbHVlc1tjb2xvclRlcm1zW2ldXSA9IGNvbG9yc1tpXSAhPT0gdW5kZWZpbmVkID8gY29sb3JzW2ldIDogMTtcbiAgICB9XG5cbiAgICByZXR1cm4gY29sb3JWYWx1ZXM7XG59O1xuXG4vKlxuICAgIEdldCB2YWx1ZSBmcm9tIGZ1bmN0aW9uIHN0cmluZ1xuXG4gICAgXCJ0cmFuc2xhdGVYKDIwcHgpXCIgLT4gXCIyMHB4XCJcbiovXG52YXIgZ2V0VmFsdWVGcm9tRnVuY3Rpb25TdHJpbmcgPSBleHBvcnRzLmdldFZhbHVlRnJvbUZ1bmN0aW9uU3RyaW5nID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgcmV0dXJuIHZhbHVlLnN1YnN0cmluZyh2YWx1ZS5pbmRleE9mKCcoJykgKyAxLCB2YWx1ZS5sYXN0SW5kZXhPZignKScpKTtcbn07XG5cbi8qXG4gICAgQ2hlY2sgaWYgdHdvIG9iamVjdHMgaGF2ZSBjaGFuZ2VkIGZyb20gZWFjaCBvdGhlclxuICAgIFxuICAgIEBwYXJhbSBbb2JqZWN0XTogSW5wdXQgQVxuICAgIEBwYXJhbSBbb2JqZWN0XTogSW5wdXQgQlxuICAgIEByZXR1cm4gW2Jvb2xlYW5dOiBUcnVlIGlmIGRpZmZlcmVudFxuKi9cbnZhciBoYXNDaGFuZ2VkID0gZXhwb3J0cy5oYXNDaGFuZ2VkID0gZnVuY3Rpb24gKGEsIGIpIHtcbiAgICB2YXIgY2hhbmdlZCA9IGZhbHNlO1xuXG4gICAgZm9yICh2YXIga2V5IGluIGEpIHtcbiAgICAgICAgaWYgKGEuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgICAgaWYgKGhhc1Byb3BlcnR5KGIsIGtleSkpIHtcbiAgICAgICAgICAgICAgICBpZiAoYVtrZXldICE9PSBiW2tleV0pIHtcbiAgICAgICAgICAgICAgICAgICAgY2hhbmdlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjaGFuZ2VkID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBjaGFuZ2VkO1xufTtcblxuLypcbiAgICBDaGVjayBpZiBvYmplY3QgaGFzIHByb3BlcnR5IGFuZCBpdCBpc24ndCB1bmRlZmluZWRcblxuICAgIEBwYXJhbSBbb2JqZWN0XVxuICAgIEBwYXJhbSBbc3RyaW5nXVxuICAgIEByZXR1cm4gW2Jvb2xlYW5dXG4qL1xudmFyIGhhc1Byb3BlcnR5ID0gZXhwb3J0cy5oYXNQcm9wZXJ0eSA9IGZ1bmN0aW9uIChvYmplY3QsIHByb3BlcnR5TmFtZSkge1xuICAgIHJldHVybiBvYmplY3QuaGFzT3duUHJvcGVydHkocHJvcGVydHlOYW1lKSAmJiBvYmplY3RbcHJvcGVydHlOYW1lXSAhPT0gdW5kZWZpbmVkO1xufTtcblxuLypcbiAgICBJcyB1dGlscyB2YXIgYW4gYXJyYXkgPyBcbiAgICBcbiAgICBAcGFyYW06IFZhcmlhYmxlIHRvIHRlc3RcbiAgICBAcmV0dXJuIFtib29sZWFuXTogUmV0dXJucyB0cnVlIGlmIHV0aWxzLnZhclR5cGUgPT09ICdBcnJheSdcbiovXG52YXIgaXNBcnJheSA9IGV4cG9ydHMuaXNBcnJheSA9IGZ1bmN0aW9uIChhcnIpIHtcbiAgICByZXR1cm4gdmFyVHlwZShhcnIpID09PSAnQXJyYXknO1xufTtcblxuLypcbiAgICBJcyB1dGlscyB2YXIgYSBmdW5jdGlvbiA/IFxuICAgIFxuICAgIEBwYXJhbTogVmFyaWFibGUgdG8gdGVzdFxuICAgIEByZXR1cm4gW2Jvb2xlYW5dOiBSZXR1cm5zIHRydWUgaWYgdXRpbHMudmFyVHlwZSA9PT0gJ0Z1bmN0aW9uJ1xuKi9cbnZhciBpc0Z1bmMgPSBleHBvcnRzLmlzRnVuYyA9IGZ1bmN0aW9uIChvYmopIHtcbiAgICByZXR1cm4gdmFyVHlwZShvYmopID09PSAnRnVuY3Rpb24nO1xufTtcblxuLypcbiAgICBJcyB1dGlscyB2YXIgYSBudW1iZXI/XG4gICAgXG4gICAgQHBhcmFtOiBWYXJpYWJsZSB0byB0ZXN0XG4gICAgQHJldHVybiBbYm9vbGVhbl06IFJldHVybnMgdHJ1ZSBpZiB0eXBlb2YgPT09ICdudW1iZXInXG4qL1xudmFyIGlzTnVtID0gZXhwb3J0cy5pc051bSA9IGZ1bmN0aW9uIChudW0pIHtcbiAgICByZXR1cm4gdHlwZW9mIG51bSA9PT0gJ251bWJlcic7XG59O1xuXG4vKlxuICAgIElzIHV0aWxzIHZhciBhbiBvYmplY3Q/XG4gICAgXG4gICAgQHBhcmFtOiBWYXJpYWJsZSB0byB0ZXN0XG4gICAgQHJldHVybiBbYm9vbGVhbl06IFJldHVybnMgdHJ1ZSBpZiB0eXBlb2YgPT09ICdvYmplY3QnXG4qL1xudmFyIGlzT2JqID0gZXhwb3J0cy5pc09iaiA9IGZ1bmN0aW9uIChvYmopIHtcbiAgICByZXR1cm4gdHlwZW9mIG9iaiA9PT0gJ29iamVjdCc7XG59O1xuXG4vKlxuICAgIElzIHV0aWxzIGEgcmVsYXRpdmUgdmFsdWUgYXNzaWdubWVudD9cbiAgICBcbiAgICBAcGFyYW0gW3N0cmluZ106IFZhcmlhYmxlIHRvIHRlc3RcbiAgICBAcmV0dXJuIFtib29sZWFuXTogSWYgdXRpbHMgbG9va3MgbGlrZSBhIHJlbGF0aXZlIHZhbHVlIGFzc2lnbm1lbnRcbiovXG52YXIgaXNSZWxhdGl2ZVZhbHVlID0gZXhwb3J0cy5pc1JlbGF0aXZlVmFsdWUgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICByZXR1cm4gdmFsdWUgJiYgdmFsdWUuaW5kZXhPZiAmJiB2YWx1ZS5pbmRleE9mKCc9JykgPiAwID8gdHJ1ZSA6IGZhbHNlO1xufTtcblxuLypcbiAgICBJcyB1dGlscyB2YXIgYSBzdHJpbmcgPyBcbiAgICBcbiAgICBAcGFyYW06IFZhcmlhYmxlIHRvIHRlc3RcbiAgICBAcmV0dXJuIFtib29sZWFuXTogUmV0dXJucyB0cnVlIGlmIHR5cGVvZiBzdHIgPT09ICdzdHJpbmcnXG4qL1xudmFyIGlzU3RyaW5nID0gZXhwb3J0cy5pc1N0cmluZyA9IGZ1bmN0aW9uIChzdHIpIHtcbiAgICByZXR1cm4gdHlwZW9mIHN0ciA9PT0gJ3N0cmluZyc7XG59O1xuXG4vKlxuICAgIEBwYXJhbSBbc3RyaW5nIHx8IE5vZGVMaXN0XTpcbiAgICAgICAgSWYgc3RyaW5nLCB0cmVhdGVkIGFzIHNlbGVjdG9yLlxuICAgICAgICBJZiBub3QsIHRyZWF0ZWQgYXMgcHJlZXhpc3RpbmcgTm9kZUxpc3RcblxuICAgIEByZXR1cm4gW0FycmF5XVxuKi9cbnZhciBzZWxlY3REb20gPSBleHBvcnRzLnNlbGVjdERvbSA9IGZ1bmN0aW9uIChzZWxlY3Rvcikge1xuICAgIHZhciBub2RlcyA9IHR5cGVvZiBzZWxlY3RvciA9PT0gJ3N0cmluZycgPyBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9yKSA6IHNlbGVjdG9yO1xuICAgIHJldHVybiBub2Rlcy5sZW5ndGggPyBbXS5zbGljZS5jYWxsKG5vZGVzKSA6IFtdLnB1c2gobm9kZXMpO1xufTtcblxuLypcbiAgICBTcGxpdCBjb21tYS1kZWxpbWl0ZWQgc3RyaW5nXG5cbiAgICBcImZvbyxiYXJcIiAtPiBbXCJmb29cIiwgXCJiYXJcIl1cblxuICAgIEBwYXJhbSBbc3RyaW5nXVxuICAgIEByZXR1cm4gW2FycmF5XVxuKi9cbnZhciBzcGxpdENvbW1hRGVsaW1pdGVkID0gZXhwb3J0cy5zcGxpdENvbW1hRGVsaW1pdGVkID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgcmV0dXJuIGlzU3RyaW5nKHZhbHVlKSA/IHZhbHVlLnNwbGl0KC8sXFxzKi8pIDogW3ZhbHVlXTtcbn07XG5cbi8qXG4gICAgU3BsaXQgc3BhY2UtZGVsaW1pdGVkIHN0cmluZ1xuXG4gICAgXCJmb28gYmFyXCIgLT4gW1wiZm9vXCIsIFwiYmFyXCJdXG5cbiAgICBAcGFyYW0gW3N0cmluZ11cbiAgICBAcmV0dXJuIFthcnJheV1cbiovXG52YXIgc3BsaXRTcGFjZURlbGltaXRlZCA9IGV4cG9ydHMuc3BsaXRTcGFjZURlbGltaXRlZCA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgIHJldHVybiBpc1N0cmluZyh2YWx1ZSkgPyB2YWx1ZS5zcGxpdCgnICcpIDogW3ZhbHVlXTtcbn07XG5cbi8qXG4gICAgU3BsaXQgYSB2YWx1ZSBpbnRvIGEgdmFsdWUvdW5pdCBvYmplY3RcbiAgICBcbiAgICAgICAgXCIyMDBweFwiIC0+IHsgdmFsdWU6IDIwMCwgdW5pdDogXCJweFwiIH1cbiAgICAgICAgXG4gICAgQHBhcmFtIFtzdHJpbmddOiBWYWx1ZSB0byBzcGxpdFxuICAgIEByZXR1cm4gW29iamVjdF06IE9iamVjdCB3aXRoIHZhbHVlIGFuZCB1bml0IHByb3BzXG4qL1xudmFyIHNwbGl0VmFsdWVVbml0ID0gZXhwb3J0cy5zcGxpdFZhbHVlVW5pdCA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgIHZhciBzcGxpdFZhbCA9IHZhbHVlLm1hdGNoKC8oLT9cXGQqXFwuP1xcZCopKC4qKS8pO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgdmFsdWU6IHBhcnNlRmxvYXQoc3BsaXRWYWxbMV0pLFxuICAgICAgICB1bml0OiBzcGxpdFZhbFsyXVxuICAgIH07XG59O1xuXG4vKlxuICAgIENvbnZlcnQgbnVtYmVyIHRvIHggZGVjaW1hbCBwbGFjZXNcblxuICAgIEBwYXJhbSBbbnVtYmVyXVxuICAgIEBwYXJhbSBbbnVtYmVyXVxuICAgIEByZXR1cm4gW251bWJlcl1cbiovXG52YXIgdG9EZWNpbWFsID0gZXhwb3J0cy50b0RlY2ltYWwgPSBmdW5jdGlvbiAobnVtKSB7XG4gICAgdmFyIHByZWNpc2lvbiA9IGFyZ3VtZW50cy5sZW5ndGggPD0gMSB8fCBhcmd1bWVudHNbMV0gPT09IHVuZGVmaW5lZCA/IDIgOiBhcmd1bWVudHNbMV07XG5cbiAgICBwcmVjaXNpb24gPSBNYXRoLnBvdygxMCwgcHJlY2lzaW9uKTtcbiAgICByZXR1cm4gTWF0aC5yb3VuZChudW0gKiBwcmVjaXNpb24pIC8gcHJlY2lzaW9uO1xufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbk55WXk5cGJtTXZkWFJwYkhNdWFuTWlYU3dpYm1GdFpYTWlPbHRkTENKdFlYQndhVzVuY3lJNklqczdPMEZCUVVFc1NVRkJUU3hyUWtGQmEwSXNSMEZCUnl4cFFrRkJhVUlzUTBGQlF6dEJRVU0zUXl4SlFVRk5MR2RDUVVGblFpeEhRVUZITEU5QlFVOHNRMEZCUXp0QlFVTnFReXhKUVVGTkxHMUNRVUZ0UWl4SFFVRkpMRTlCUVU4c1YwRkJWeXhMUVVGTExGZEJRVmNzU1VGQlNTeFhRVUZYTEVOQlFVTXNSMEZCUnl4QlFVRkRPenM3T3pzN096dEJRVUZETEVGQlVYQkdMRWxCUVUwc1QwRkJUeXhIUVVGSExGVkJRVUVzVVVGQlVUdFhRVUZKTEUxQlFVMHNRMEZCUXl4VFFVRlRMRU5CUVVNc1VVRkJVU3hEUVVGRExFbEJRVWtzUTBGQlF5eFJRVUZSTEVOQlFVTXNRMEZCUXl4TFFVRkxMRU5CUVVNc1EwRkJReXhGUVVGRkxFTkJRVU1zUTBGQlF5eERRVUZETzBOQlFVRTdPenM3T3pzN08wRkJRVU1zUVVGUk0wVXNTVUZCVFN4WFFVRlhMRmRCUVZnc1YwRkJWeXhIUVVGSExGVkJRVU1zVFVGQlRUdFhRVUZMTEUxQlFVMHNRMEZCUXl4UFFVRlBMRU5CUVVNc2EwSkJRV3RDTEVWQlFVVXNaMEpCUVdkQ0xFTkJRVU1zUTBGQlF5eFhRVUZYTEVWQlFVVTdRMEZCUVRzN096czdPenM3TzBGQlFVTXNRVUZUYmtjc1NVRkJUU3h0UWtGQmJVSXNWMEZCYmtJc2JVSkJRVzFDTEVkQlFVY3NWVUZCUXl4WlFVRlpMRVZCUVVzN1FVRkRha1FzVVVGQlRTeGxRVUZsTEVkQlFVY3NXVUZCV1N4RFFVRkRMRTFCUVUwc1EwRkJRenRCUVVNMVF5eFJRVUZKTEVOQlFVTXNSMEZCUnl4RFFVRkRPenM3T3pzN096dEJRVUZETEVGQlVWWXNWMEZCVHl4VlFVRkRMRU5CUVVNc1JVRkJSU3hIUVVGSExFVkJRVVVzUTBGQlF5eEZRVUZMTzBGQlEyeENMR0ZCUVVzc1EwRkJReXhIUVVGSExFTkJRVU1zUlVGQlJTeERRVUZETEVkQlFVY3NaVUZCWlN4RlFVRkZMRU5CUVVNc1JVRkJSU3hGUVVGRk8wRkJRMnhETEdGQlFVTXNSMEZCUnl4WlFVRlpMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eEZRVUZGTEVkQlFVY3NSVUZCUlN4RFFVRkRMRU5CUVVNc1EwRkJRenRUUVVOc1F6czdRVUZGUkN4bFFVRlBMRU5CUVVNc1EwRkJRenRMUVVOYUxFTkJRVU03UTBGRFRDeERRVUZET3p0QlFVVkxMRWxCUVUwc1pVRkJaU3hYUVVGbUxHVkJRV1VzUjBGQlJ5eFZRVUZETEUxQlFVMHNSVUZCUlN4TFFVRkxMRVZCUVVVc1UwRkJVeXhGUVVGRkxFbEJRVWtzUlVGQlN6dEJRVU12UkN4UlFVRk5MRkZCUVZFc1IwRkJSeXhMUVVGTExFTkJRVU1zVFVGQlRTeERRVUZETzBGQlF6bENMRkZCUVVrc1VVRkJVU3hIUVVGSExFVkJRVVVzUTBGQlF6czdRVUZGYkVJc1UwRkJTeXhKUVVGSkxFTkJRVU1zUjBGQlJ5eERRVUZETEVWQlFVVXNRMEZCUXl4SFFVRkhMRkZCUVZFc1JVRkJSU3hEUVVGRExFVkJRVVVzUlVGQlJUdEJRVU12UWl4WlFVRk5MRWxCUVVrc1IwRkJSeXhMUVVGTExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTTdRVUZEZEVJc1dVRkJTU3hOUVVGTkxFTkJRVU1zWTBGQll5eERRVUZETEVsQlFVa3NRMEZCUXl4RlFVRkZPMEZCUXpkQ0xHOUNRVUZSTEVsQlFVa3NUVUZCVFN4RFFVRkRMRWxCUVVrc1EwRkJReXhIUVVGSExGTkJRVk1zUTBGQlF6dFRRVU40UXp0TFFVTktPenRCUVVWRUxGRkJRVWtzU1VGQlNTeEZRVUZGTzBGQlEwNHNaMEpCUVZFc1IwRkJSeXhSUVVGUkxFTkJRVU1zUzBGQlN5eERRVUZETEVOQlFVTXNSVUZCUlN4RFFVRkRMRWxCUVVrc1EwRkJReXhEUVVGRE8wdEJRM1pET3p0QlFVVkVMRmRCUVU4c1VVRkJVU3hEUVVGRE8wTkJRMjVDT3pzN096czdPenM3T3p0QlFVRkRMRUZCVjBzc1NVRkJUU3h2UWtGQmIwSXNWMEZCY0VJc2IwSkJRVzlDTEVkQlFVY3NWVUZCUXl4TFFVRkxMRVZCUVVVc1RVRkJUVHRYUVVGUkxFMUJRVTBzVTBGQlNTeExRVUZMTzBOQlFVYzdPenM3T3pzN1FVRkJReXhCUVU5MFJTeEpRVUZOTEZkQlFWY3NWMEZCV0N4WFFVRlhMRWRCUVVjc2JVSkJRVzFDTEVkQlFVYzdWMEZCVFN4WFFVRlhMRU5CUVVNc1IwRkJSeXhGUVVGRk8wTkJRVUVzUjBGQlJ6dFhRVUZOTEVsQlFVa3NTVUZCU1N4RlFVRkZMRU5CUVVNc1QwRkJUeXhGUVVGRk8wTkJRVUU3T3pzN096czdPenRCUVVGRExFRkJVeTlHTEVsQlFVMHNZMEZCWXl4WFFVRmtMR05CUVdNc1IwRkJSeXhWUVVGRExFdEJRVXNzUlVGQlJTeFZRVUZWTEVWQlFVczdRVUZEYWtRc1VVRkJUU3hoUVVGaExFZEJRVWNzVlVGQlZTeERRVUZETEUxQlFVMHNRMEZCUXp0QlFVTjRReXhSUVVGTkxGZEJRVmNzUjBGQlJ5eEZRVUZGTEVOQlFVTTdRVUZEZGtJc1VVRkJUU3hOUVVGTkxFZEJRVWNzYlVKQlFXMUNMRU5CUVVNc01FSkJRVEJDTEVOQlFVTXNTMEZCU3l4RFFVRkRMRU5CUVVNc1EwRkJRenM3UVVGRmRFVXNVMEZCU3l4SlFVRkpMRU5CUVVNc1IwRkJSeXhEUVVGRExFVkJRVVVzUTBGQlF5eEhRVUZITEdGQlFXRXNSVUZCUlN4RFFVRkRMRVZCUVVVc1JVRkJSVHRCUVVOd1F5eHRRa0ZCVnl4RFFVRkRMRlZCUVZVc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eEhRVUZITEVGQlFVTXNUVUZCVFN4RFFVRkRMRU5CUVVNc1EwRkJReXhMUVVGTExGTkJRVk1zUjBGQlNTeE5RVUZOTEVOQlFVTXNRMEZCUXl4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRE8wdEJRekZGT3p0QlFVVkVMRmRCUVU4c1YwRkJWeXhEUVVGRE8wTkJRM1JDT3pzN096czdPMEZCUVVNc1FVRlBTeXhKUVVGTkxEQkNRVUV3UWl4WFFVRXhRaXd3UWtGQk1FSXNSMEZCUnl4VlFVRkRMRXRCUVVzN1YwRkJTeXhMUVVGTExFTkJRVU1zVTBGQlV5eERRVUZETEV0QlFVc3NRMEZCUXl4UFFVRlBMRU5CUVVNc1IwRkJSeXhEUVVGRExFZEJRVWNzUTBGQlF5eEZRVUZGTEV0QlFVc3NRMEZCUXl4WFFVRlhMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU03UTBGQlFUczdPenM3T3pzN08wRkJRVU1zUVVGVE9VY3NTVUZCVFN4VlFVRlZMRmRCUVZZc1ZVRkJWU3hIUVVGSExGVkJRVU1zUTBGQlF5eEZRVUZGTEVOQlFVTXNSVUZCU3p0QlFVTm9ReXhSUVVGSkxFOUJRVThzUjBGQlJ5eExRVUZMTEVOQlFVTTdPMEZCUlhCQ0xGTkJRVXNzU1VGQlNTeEhRVUZITEVsQlFVa3NRMEZCUXl4RlFVRkZPMEZCUTJZc1dVRkJTU3hEUVVGRExFTkJRVU1zWTBGQll5eERRVUZETEVkQlFVY3NRMEZCUXl4RlFVRkZPMEZCUTNaQ0xHZENRVUZKTEZkQlFWY3NRMEZCUXl4RFFVRkRMRVZCUVVVc1IwRkJSeXhEUVVGRExFVkJRVVU3UVVGRGNrSXNiMEpCUVVrc1EwRkJReXhEUVVGRExFZEJRVWNzUTBGQlF5eExRVUZMTEVOQlFVTXNRMEZCUXl4SFFVRkhMRU5CUVVNc1JVRkJSVHRCUVVOdVFpd3lRa0ZCVHl4SFFVRkhMRWxCUVVrc1EwRkJRenRwUWtGRGJFSTdZVUZEU2l4TlFVRk5PMEZCUTBnc2RVSkJRVThzUjBGQlJ5eEpRVUZKTEVOQlFVTTdZVUZEYkVJN1UwRkRTanRMUVVOS096dEJRVVZFTEZkQlFVOHNUMEZCVHl4RFFVRkRPME5CUTJ4Q096czdPenM3T3pzN1FVRkJReXhCUVZOTExFbEJRVTBzVjBGQlZ5eFhRVUZZTEZkQlFWY3NSMEZCUnl4VlFVRkRMRTFCUVUwc1JVRkJSU3haUVVGWk8xZEJRVXNzVFVGQlRTeERRVUZETEdOQlFXTXNRMEZCUXl4WlFVRlpMRU5CUVVNc1NVRkJTU3hOUVVGTkxFTkJRVU1zV1VGQldTeERRVUZETEV0QlFVc3NVMEZCVXp0RFFVRkJPenM3T3pzN096dEJRVUZETEVGQlVYaElMRWxCUVUwc1QwRkJUeXhYUVVGUUxFOUJRVThzUjBGQlJ5eFZRVUZETEVkQlFVYzdWMEZCU3l4UFFVRlBMRU5CUVVNc1IwRkJSeXhEUVVGRExFdEJRVXNzVDBGQlR6dERRVUZCT3pzN096czdPenRCUVVGRExFRkJVV3hFTEVsQlFVMHNUVUZCVFN4WFFVRk9MRTFCUVUwc1IwRkJSeXhWUVVGRExFZEJRVWM3VjBGQlN5eFBRVUZQTEVOQlFVTXNSMEZCUnl4RFFVRkRMRXRCUVVzc1ZVRkJWVHREUVVGQk96czdPenM3T3p0QlFVRkRMRUZCVVhCRUxFbEJRVTBzUzBGQlN5eFhRVUZNTEV0QlFVc3NSMEZCUnl4VlFVRkRMRWRCUVVjN1YwRkJTeXhQUVVGUExFZEJRVWNzUzBGQlN5eFJRVUZSTzBOQlFVRTdPenM3T3pzN08wRkJRVU1zUVVGUkwwTXNTVUZCVFN4TFFVRkxMRmRCUVV3c1MwRkJTeXhIUVVGSExGVkJRVU1zUjBGQlJ6dFhRVUZMTEU5QlFVOHNSMEZCUnl4TFFVRkxMRkZCUVZFN1EwRkJRVHM3T3pzN096czdRVUZCUXl4QlFWRXZReXhKUVVGTkxHVkJRV1VzVjBGQlppeGxRVUZsTEVkQlFVY3NWVUZCUXl4TFFVRkxPMWRCUVVzc1FVRkJReXhMUVVGTExFbEJRVWtzUzBGQlN5eERRVUZETEU5QlFVOHNTVUZCU1N4TFFVRkxMRU5CUVVNc1QwRkJUeXhEUVVGRExFZEJRVWNzUTBGQlF5eEhRVUZITEVOQlFVTXNSMEZCU1N4SlFVRkpMRWRCUVVjc1MwRkJTenREUVVGQk96czdPenM3T3p0QlFVRkRMRUZCVVhKSExFbEJRVTBzVVVGQlVTeFhRVUZTTEZGQlFWRXNSMEZCUnl4VlFVRkRMRWRCUVVjN1YwRkJTeXhQUVVGUExFZEJRVWNzUzBGQlN5eFJRVUZSTzBOQlFVRTdPenM3T3pzN096dEJRVUZETEVGQlUyeEVMRWxCUVUwc1UwRkJVeXhYUVVGVUxGTkJRVk1zUjBGQlJ5eFZRVUZETEZGQlFWRXNSVUZCU3p0QlFVTnVReXhSUVVGTkxFdEJRVXNzUjBGQlJ5eEJRVUZETEU5QlFVOHNVVUZCVVN4TFFVRkxMRkZCUVZFc1IwRkJTU3hSUVVGUkxFTkJRVU1zWjBKQlFXZENMRU5CUVVNc1VVRkJVU3hEUVVGRExFZEJRVWNzVVVGQlVTeERRVUZETzBGQlF6bEdMRmRCUVU4c1FVRkJReXhMUVVGTExFTkJRVU1zVFVGQlRTeEhRVUZKTEVWQlFVVXNRMEZCUXl4TFFVRkxMRU5CUVVNc1NVRkJTU3hEUVVGRExFdEJRVXNzUTBGQlF5eEhRVUZITEVWQlFVVXNRMEZCUXl4SlFVRkpMRU5CUVVNc1MwRkJTeXhEUVVGRExFTkJRVU03UTBGRGFrVTdPenM3T3pzN096czdRVUZCUXl4QlFWVkxMRWxCUVUwc2JVSkJRVzFDTEZkQlFXNUNMRzFDUVVGdFFpeEhRVUZITEZWQlFVTXNTMEZCU3p0WFFVRkxMRkZCUVZFc1EwRkJReXhMUVVGTExFTkJRVU1zUjBGQlJ5eExRVUZMTEVOQlFVTXNTMEZCU3l4RFFVRkRMRTFCUVUwc1EwRkJReXhIUVVGSExFTkJRVU1zUzBGQlN5eERRVUZETzBOQlFVRTdPenM3T3pzN096czdRVUZCUXl4QlFWVjJSaXhKUVVGTkxHMUNRVUZ0UWl4WFFVRnVRaXh0UWtGQmJVSXNSMEZCUnl4VlFVRkRMRXRCUVVzN1YwRkJTeXhSUVVGUkxFTkJRVU1zUzBGQlN5eERRVUZETEVkQlFVY3NTMEZCU3l4RFFVRkRMRXRCUVVzc1EwRkJReXhIUVVGSExFTkJRVU1zUjBGQlJ5eERRVUZETEV0QlFVc3NRMEZCUXp0RFFVRkJPenM3T3pzN096czdPMEZCUVVNc1FVRlZjRVlzU1VGQlRTeGpRVUZqTEZkQlFXUXNZMEZCWXl4SFFVRkhMRlZCUVVNc1MwRkJTeXhGUVVGTE8wRkJRM0pETEZGQlFVMHNVVUZCVVN4SFFVRkhMRXRCUVVzc1EwRkJReXhMUVVGTExFTkJRVU1zYlVKQlFXMUNMRU5CUVVNc1EwRkJRenM3UVVGRmJFUXNWMEZCVHp0QlFVTklMR0ZCUVVzc1JVRkJSU3hWUVVGVkxFTkJRVU1zVVVGQlVTeERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRPMEZCUXpsQ0xGbEJRVWtzUlVGQlJ5eFJRVUZSTEVOQlFVTXNRMEZCUXl4RFFVRkRPMHRCUTNKQ0xFTkJRVU03UTBGRFREczdPenM3T3pzN08wRkJRVU1zUVVGVFN5eEpRVUZOTEZOQlFWTXNWMEZCVkN4VFFVRlRMRWRCUVVjc1ZVRkJReXhIUVVGSExFVkJRVzlDTzFGQlFXeENMRk5CUVZNc2VVUkJRVWNzUTBGQlF6czdRVUZEZUVNc1lVRkJVeXhaUVVGSExFVkJRVVVzUlVGQlNTeFRRVUZUTEVOQlFVRXNRMEZCUXp0QlFVTTFRaXhYUVVGUExFbEJRVWtzUTBGQlF5eExRVUZMTEVOQlFVTXNSMEZCUnl4SFFVRkhMRk5CUVZNc1EwRkJReXhIUVVGSExGTkJRVk1zUTBGQlF6dERRVU5zUkN4RFFVRkRJaXdpWm1sc1pTSTZJblYwYVd4ekxtcHpJaXdpYzI5MWNtTmxVbTl2ZENJNklpOVZjMlZ5Y3k5TllYUjBVR1Z5Y25rdlUybDBaWE12Y0c5d2JXOTBhVzl1SWl3aWMyOTFjbU5sYzBOdmJuUmxiblFpT2xzaVkyOXVjM1FnUTBGTlJVeGZRMEZUUlY5UVFWUlVSVkpPSUQwZ0x5aGJZUzE2WFNrb1cwRXRXbDBwTDJjN1hHNWpiMjV6ZENCU1JWQk1RVU5GWDFSRlRWQk1RVlJGSUQwZ0p5UXhMU1F5Snp0Y2JtTnZibk4wSUVoQlUxOVFSVkpHVDFKTlFVNURSVjlPVDFjZ1BTQW9kSGx3Wlc5bUlIQmxjbVp2Y20xaGJtTmxJQ0U5UFNBbmRXNWtaV1pwYm1Wa0p5QW1KaUJ3WlhKbWIzSnRZVzVqWlM1dWIzY3BPMXh1WEc0dktseHVJQ0FnSUVkbGRDQjJZWElnZEhsd1pTQmhjeUJ6ZEhKcGJtZGNiaUFnSUNCY2JpQWdJQ0JBY0dGeVlXMDZJRlpoY21saFlteGxJSFJ2SUhSbGMzUmNiaUFnSUNCQWNtVjBkWEp1SUZ0emRISnBibWRkT2lCU1pYUjFjbTV6TENCbWIzSWdhVzV6ZEdGdVkyVWdKMDlpYW1WamRDY2dhV1lnVzI5aWFtVmpkQ0JQWW1wbFkzUmRYRzRxTDF4dVkyOXVjM1FnZG1GeVZIbHdaU0E5SUhaaGNtbGhZbXhsSUQwK0lFOWlhbVZqZEM1d2NtOTBiM1I1Y0dVdWRHOVRkSEpwYm1jdVkyRnNiQ2gyWVhKcFlXSnNaU2t1YzJ4cFkyVW9PQ3dnTFRFcE8xeHVYRzR2S2x4dUlDQWdJRU52Ym5abGNuUWdZMkZ0Wld4RFlYTmxJSFJ2SUdSaGMyZ3RZMkZ6WlZ4dVhHNGdJQ0FnUUhCaGNtRnRJRnR6ZEhKcGJtZGRYRzRnSUNBZ1FISmxkSFZ5YmlCYmMzUnlhVzVuWFZ4dUtpOWNibVY0Y0c5eWRDQmpiMjV6ZENCallXMWxiRlJ2UkdGemFDQTlJQ2h6ZEhKcGJtY3BJRDArSUhOMGNtbHVaeTV5WlhCc1lXTmxLRU5CVFVWTVgwTkJVMFZmVUVGVVZFVlNUaXdnVWtWUVRFRkRSVjlVUlUxUVRFRlVSU2t1ZEc5TWIzZGxja05oYzJVb0tUdGNibHh1THlwY2JpQWdJQ0JEYjIxaWFXNWxJSFJ5WVc1elptOXliV1Z5Y3lCcGJuUnZJRzl1WlNCbWRXNWpkR2x2YmlCMGFHRjBJR05oYkd4eklHVjJaWEo1WEc0Z0lDQWdkSEpoYm5ObWIzSnRaWElnYVc0Z2RHaGxJR0Z5Y21GNUlHRnVaQ0J5WlhSMWNtNXpJSFJvWlNCeVpYTjFiSFJjYmx4dUlDQWdJRUJ3WVhKaGJTQmJZWEp5WVhsZFhHNGdJQ0FnUUhKbGRIVnliaUJiWm5WdVkzUnBiMjVkWEc0cUwxeHVaWGh3YjNKMElHTnZibk4wSUdOdmJXSnBibVZVY21GdWMyWnZjbTFsY25NZ1BTQW9kSEpoYm5ObWIzSnRaWEp6S1NBOVBpQjdYRzRnSUNBZ1kyOXVjM1FnYm5WdFZISmhibk5tYjNKdFpYSnpJRDBnZEhKaGJuTm1iM0p0WlhKekxteGxibWQwYUR0Y2JpQWdJQ0JzWlhRZ2FTQTlJREE3WEc1Y2JpQWdJQ0F2S2x4dUlDQWdJQ0FnSUNCQWNHRnlZVzBnVzI1MWJXSmxjbDFjYmlBZ0lDQWdJQ0FnUUhCaGNtRnRJRnR6ZEhKcGJtZGRYRzRnSUNBZ0lDQWdJRUJ3WVhKaGJTQmJRV04wYVc5dVhWeHVJQ0FnSUNBZ0lDQkFjbVYwZFhKdUlGdHVkVzFpWlhKZFhHNGdJQ0FnS2k5Y2JpQWdJQ0J5WlhSMWNtNGdLSFlzSUd0bGVTd2dZU2tnUFQ0Z2UxeHVJQ0FnSUNBZ0lDQm1iM0lnS0drZ1BTQXdPeUJwSUQ0Z2JuVnRWSEpoYm5ObWIzSnRaWEp6T3lCcEt5c3BJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lIWWdQU0IwY21GdWMyWnZjbTFsY25OYmFWMG9kaXdnYTJWNUxDQmhLVHRjYmlBZ0lDQWdJQ0FnZlZ4dVhHNGdJQ0FnSUNBZ0lISmxkSFZ5YmlCMk8xeHVJQ0FnSUgwN1hHNTlPMXh1WEc1bGVIQnZjblFnWTI5dWMzUWdZM0psWVhSbFJHVnNhVzFwZEdWa0lEMGdLSFpoYkhWbGN5d2dkR1Z5YlhNc0lHUmxiR2x0YVhSbGNpd2dZMmh2Y0NrZ1BUNGdlMXh1SUNBZ0lHTnZibk4wSUc1MWJWUmxjbTF6SUQwZ2RHVnliWE11YkdWdVozUm9PMXh1SUNBZ0lHeGxkQ0JqYjIxaWFXNWxaQ0E5SUNjbk8xeHVYRzRnSUNBZ1ptOXlJQ2hzWlhRZ2FTQTlJREE3SUdrZ1BDQnVkVzFVWlhKdGN6c2dhU3NyS1NCN1hHNGdJQ0FnSUNBZ0lHTnZibk4wSUhSbGNtMGdQU0IwWlhKdGMxdHBYVHRjYmlBZ0lDQWdJQ0FnYVdZZ0tIWmhiSFZsY3k1b1lYTlBkMjVRY205d1pYSjBlU2gwWlhKdEtTa2dlMXh1SUNBZ0lDQWdJQ0FnSUNBZ1kyOXRZbWx1WldRZ0t6MGdkbUZzZFdWelczUmxjbTFkSUNzZ1pHVnNhVzFwZEdWeU8xeHVJQ0FnSUNBZ0lDQjlYRzRnSUNBZ2ZWeHVYRzRnSUNBZ2FXWWdLR05vYjNBcElIdGNiaUFnSUNBZ0lDQWdZMjl0WW1sdVpXUWdQU0JqYjIxaWFXNWxaQzV6YkdsalpTZ3dMQ0F0WTJodmNDazdYRzRnSUNBZ2ZWeHVYRzRnSUNBZ2NtVjBkWEp1SUdOdmJXSnBibVZrTzF4dWZUdGNibHh1THlwY2JpQWdJQ0JEY21WaGRHVWdZU0JtZFc1amRHbHZiaUJ6ZEhKcGJtZGNibHh1SUNBZ0lDY3lNSEI0Snl3Z0ozUnlZVzV6YkdGMFpTY2dMVDRnSjNSeVlXNXpiR0YwWlNneU1IQjRLU2RjYmx4dUlDQWdJRUJ3WVhKaGJTQmJjM1J5YVc1blhWeHVJQ0FnSUVCd1lYSmhiU0JiYzNSeWFXNW5YVnh1SUNBZ0lFQnlaWFIxY200Z1czTjBjbWx1WjExY2Jpb3ZYRzVsZUhCdmNuUWdZMjl1YzNRZ1kzSmxZWFJsUm5WdVkzUnBiMjVUZEhKcGJtY2dQU0FvZG1Gc2RXVXNJSEJ5WldacGVDa2dQVDRnWUNSN2NISmxabWw0ZlNna2UzWmhiSFZsZlNsZ08xeHVYRzR2S2x4dUlDQWdJRWRsYm1WeVlYUmxJR04xY25KbGJuUWdkR2x0WlhOMFlXMXdYRzRnSUNBZ1hHNGdJQ0FnUUhKbGRIVnliaUJiZEdsdFpYTjBZVzF3WFRvZ1EzVnljbVZ1ZENCVlRrbFlJSFJwYldWemRHRnRjRnh1S2k5Y2JtVjRjRzl5ZENCamIyNXpkQ0JqZFhKeVpXNTBWR2x0WlNBOUlFaEJVMTlRUlZKR1QxSk5RVTVEUlY5T1QxY2dQeUFvS1NBOVBpQndaWEptYjNKdFlXNWpaUzV1YjNjb0tTQTZJQ2dwSUQwK0lHNWxkeUJFWVhSbEtDa3VaMlYwVkdsdFpTZ3BPMXh1WEc0dktseHVJQ0FnSUZOd2JHbDBJR052Ykc5eUlITjBjbWx1WnlCcGJuUnZJRzFoY0NCdlppQmpiMnh2Y2lCd2NtOXdaWEowYVdWelhHNWNiaUFnSUNCY0luSm5ZbUVvTWpVMUxDQXlOVFVzSURJMU5Td2dNQ2xjSWl3Z1cxd2lVbVZrWENJc0lDZEhjbVZsYmx3aUxDQmNJa0pzZFdWY0lpd2dYQ0pCYkhCb1lWd2lYVnh1WEc0Z0lDQWdleUJTWldRNklESTFOUzR1TGlCOVhHNHFMMXh1Wlhod2IzSjBJR052Ym5OMElHZGxkRU52Ykc5eVZtRnNkV1Z6SUQwZ0tIWmhiSFZsTENCamIyeHZjbFJsY20xektTQTlQaUI3WEc0Z0lDQWdZMjl1YzNRZ2JuVnRRMjlzYjNKVVpYSnRjeUE5SUdOdmJHOXlWR1Z5YlhNdWJHVnVaM1JvTzF4dUlDQWdJR052Ym5OMElHTnZiRzl5Vm1Gc2RXVnpJRDBnZTMwN1hHNGdJQ0FnWTI5dWMzUWdZMjlzYjNKeklEMGdjM0JzYVhSRGIyMXRZVVJsYkdsdGFYUmxaQ2huWlhSV1lXeDFaVVp5YjIxR2RXNWpkR2x2YmxOMGNtbHVaeWgyWVd4MVpTa3BPMXh1WEc0Z0lDQWdabTl5SUNoc1pYUWdhU0E5SURBN0lHa2dQQ0J1ZFcxRGIyeHZjbFJsY20xek95QnBLeXNwSUh0Y2JpQWdJQ0FnSUNBZ1kyOXNiM0pXWVd4MVpYTmJZMjlzYjNKVVpYSnRjMXRwWFYwZ1BTQW9ZMjlzYjNKelcybGRJQ0U5UFNCMWJtUmxabWx1WldRcElEOGdZMjlzYjNKelcybGRJRG9nTVR0Y2JpQWdJQ0I5WEc1Y2JpQWdJQ0J5WlhSMWNtNGdZMjlzYjNKV1lXeDFaWE03WEc1OU8xeHVYRzR2S2x4dUlDQWdJRWRsZENCMllXeDFaU0JtY205dElHWjFibU4wYVc5dUlITjBjbWx1WjF4dVhHNGdJQ0FnWENKMGNtRnVjMnhoZEdWWUtESXdjSGdwWENJZ0xUNGdYQ0l5TUhCNFhDSmNiaW92WEc1bGVIQnZjblFnWTI5dWMzUWdaMlYwVm1Gc2RXVkdjbTl0Um5WdVkzUnBiMjVUZEhKcGJtY2dQU0FvZG1Gc2RXVXBJRDArSUhaaGJIVmxMbk4xWW5OMGNtbHVaeWgyWVd4MVpTNXBibVJsZUU5bUtDY29KeWtnS3lBeExDQjJZV3gxWlM1c1lYTjBTVzVrWlhoUFppZ25LU2NwS1R0Y2JseHVMeXBjYmlBZ0lDQkRhR1ZqYXlCcFppQjBkMjhnYjJKcVpXTjBjeUJvWVhabElHTm9ZVzVuWldRZ1puSnZiU0JsWVdOb0lHOTBhR1Z5WEc0Z0lDQWdYRzRnSUNBZ1FIQmhjbUZ0SUZ0dlltcGxZM1JkT2lCSmJuQjFkQ0JCWEc0Z0lDQWdRSEJoY21GdElGdHZZbXBsWTNSZE9pQkpibkIxZENCQ1hHNGdJQ0FnUUhKbGRIVnliaUJiWW05dmJHVmhibDA2SUZSeWRXVWdhV1lnWkdsbVptVnlaVzUwWEc0cUwxeHVaWGh3YjNKMElHTnZibk4wSUdoaGMwTm9ZVzVuWldRZ1BTQW9ZU3dnWWlrZ1BUNGdlMXh1SUNBZ0lHeGxkQ0JqYUdGdVoyVmtJRDBnWm1Gc2MyVTdYRzVjYmlBZ0lDQm1iM0lnS0d4bGRDQnJaWGtnYVc0Z1lTa2dlMXh1SUNBZ0lDQWdJQ0JwWmlBb1lTNW9ZWE5QZDI1UWNtOXdaWEowZVNoclpYa3BLU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQnBaaUFvYUdGelVISnZjR1Z5ZEhrb1lpd2dhMlY1S1NrZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lHbG1JQ2hoVzJ0bGVWMGdJVDA5SUdKYmEyVjVYU2tnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQmphR0Z1WjJWa0lEMGdkSEoxWlR0Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCOVhHNGdJQ0FnSUNBZ0lDQWdJQ0I5SUdWc2MyVWdlMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJR05vWVc1blpXUWdQU0IwY25WbE8xeHVJQ0FnSUNBZ0lDQWdJQ0FnZlZ4dUlDQWdJQ0FnSUNCOVhHNGdJQ0FnZlZ4dVhHNGdJQ0FnY21WMGRYSnVJR05vWVc1blpXUTdYRzU5TzF4dVhHNHZLbHh1SUNBZ0lFTm9aV05ySUdsbUlHOWlhbVZqZENCb1lYTWdjSEp2Y0dWeWRIa2dZVzVrSUdsMElHbHpiaWQwSUhWdVpHVm1hVzVsWkZ4dVhHNGdJQ0FnUUhCaGNtRnRJRnR2WW1wbFkzUmRYRzRnSUNBZ1FIQmhjbUZ0SUZ0emRISnBibWRkWEc0Z0lDQWdRSEpsZEhWeWJpQmJZbTl2YkdWaGJsMWNiaW92WEc1bGVIQnZjblFnWTI5dWMzUWdhR0Z6VUhKdmNHVnlkSGtnUFNBb2IySnFaV04wTENCd2NtOXdaWEowZVU1aGJXVXBJRDArSUc5aWFtVmpkQzVvWVhOUGQyNVFjbTl3WlhKMGVTaHdjbTl3WlhKMGVVNWhiV1VwSUNZbUlHOWlhbVZqZEZ0d2NtOXdaWEowZVU1aGJXVmRJQ0U5UFNCMWJtUmxabWx1WldRN1hHNWNiaThxWEc0Z0lDQWdTWE1nZFhScGJITWdkbUZ5SUdGdUlHRnljbUY1SUQ4Z1hHNGdJQ0FnWEc0Z0lDQWdRSEJoY21GdE9pQldZWEpwWVdKc1pTQjBieUIwWlhOMFhHNGdJQ0FnUUhKbGRIVnliaUJiWW05dmJHVmhibDA2SUZKbGRIVnlibk1nZEhKMVpTQnBaaUIxZEdsc2N5NTJZWEpVZVhCbElEMDlQU0FuUVhKeVlYa25YRzRxTDF4dVpYaHdiM0owSUdOdmJuTjBJR2x6UVhKeVlYa2dQU0FvWVhKeUtTQTlQaUIyWVhKVWVYQmxLR0Z5Y2lrZ1BUMDlJQ2RCY25KaGVTYzdYRzVjYmk4cVhHNGdJQ0FnU1hNZ2RYUnBiSE1nZG1GeUlHRWdablZ1WTNScGIyNGdQeUJjYmlBZ0lDQmNiaUFnSUNCQWNHRnlZVzA2SUZaaGNtbGhZbXhsSUhSdklIUmxjM1JjYmlBZ0lDQkFjbVYwZFhKdUlGdGliMjlzWldGdVhUb2dVbVYwZFhKdWN5QjBjblZsSUdsbUlIVjBhV3h6TG5aaGNsUjVjR1VnUFQwOUlDZEdkVzVqZEdsdmJpZGNiaW92WEc1bGVIQnZjblFnWTI5dWMzUWdhWE5HZFc1aklEMGdLRzlpYWlrZ1BUNGdkbUZ5Vkhsd1pTaHZZbW9wSUQwOVBTQW5SblZ1WTNScGIyNG5PMXh1WEc0dktseHVJQ0FnSUVseklIVjBhV3h6SUhaaGNpQmhJRzUxYldKbGNqOWNiaUFnSUNCY2JpQWdJQ0JBY0dGeVlXMDZJRlpoY21saFlteGxJSFJ2SUhSbGMzUmNiaUFnSUNCQWNtVjBkWEp1SUZ0aWIyOXNaV0Z1WFRvZ1VtVjBkWEp1Y3lCMGNuVmxJR2xtSUhSNWNHVnZaaUE5UFQwZ0oyNTFiV0psY2lkY2Jpb3ZYRzVsZUhCdmNuUWdZMjl1YzNRZ2FYTk9kVzBnUFNBb2JuVnRLU0E5UGlCMGVYQmxiMllnYm5WdElEMDlQU0FuYm5WdFltVnlKenRjYmx4dUx5cGNiaUFnSUNCSmN5QjFkR2xzY3lCMllYSWdZVzRnYjJKcVpXTjBQMXh1SUNBZ0lGeHVJQ0FnSUVCd1lYSmhiVG9nVm1GeWFXRmliR1VnZEc4Z2RHVnpkRnh1SUNBZ0lFQnlaWFIxY200Z1cySnZiMnhsWVc1ZE9pQlNaWFIxY201eklIUnlkV1VnYVdZZ2RIbHdaVzltSUQwOVBTQW5iMkpxWldOMEoxeHVLaTljYm1WNGNHOXlkQ0JqYjI1emRDQnBjMDlpYWlBOUlDaHZZbW9wSUQwK0lIUjVjR1Z2WmlCdlltb2dQVDA5SUNkdlltcGxZM1FuTzF4dVhHNHZLbHh1SUNBZ0lFbHpJSFYwYVd4eklHRWdjbVZzWVhScGRtVWdkbUZzZFdVZ1lYTnphV2R1YldWdWREOWNiaUFnSUNCY2JpQWdJQ0JBY0dGeVlXMGdXM04wY21sdVoxMDZJRlpoY21saFlteGxJSFJ2SUhSbGMzUmNiaUFnSUNCQWNtVjBkWEp1SUZ0aWIyOXNaV0Z1WFRvZ1NXWWdkWFJwYkhNZ2JHOXZhM01nYkdsclpTQmhJSEpsYkdGMGFYWmxJSFpoYkhWbElHRnpjMmxuYm0xbGJuUmNiaW92WEc1bGVIQnZjblFnWTI5dWMzUWdhWE5TWld4aGRHbDJaVlpoYkhWbElEMGdLSFpoYkhWbEtTQTlQaUFvZG1Gc2RXVWdKaVlnZG1Gc2RXVXVhVzVrWlhoUFppQW1KaUIyWVd4MVpTNXBibVJsZUU5bUtDYzlKeWtnUGlBd0tTQS9JSFJ5ZFdVZ09pQm1ZV3h6WlR0Y2JseHVMeXBjYmlBZ0lDQkpjeUIxZEdsc2N5QjJZWElnWVNCemRISnBibWNnUHlCY2JpQWdJQ0JjYmlBZ0lDQkFjR0Z5WVcwNklGWmhjbWxoWW14bElIUnZJSFJsYzNSY2JpQWdJQ0JBY21WMGRYSnVJRnRpYjI5c1pXRnVYVG9nVW1WMGRYSnVjeUIwY25WbElHbG1JSFI1Y0dWdlppQnpkSElnUFQwOUlDZHpkSEpwYm1jblhHNHFMMXh1Wlhod2IzSjBJR052Ym5OMElHbHpVM1J5YVc1bklEMGdLSE4wY2lrZ1BUNGdkSGx3Wlc5bUlITjBjaUE5UFQwZ0ozTjBjbWx1WnljN1hHNWNiaThxWEc0Z0lDQWdRSEJoY21GdElGdHpkSEpwYm1jZ2ZId2dUbTlrWlV4cGMzUmRPbHh1SUNBZ0lDQWdJQ0JKWmlCemRISnBibWNzSUhSeVpXRjBaV1FnWVhNZ2MyVnNaV04wYjNJdVhHNGdJQ0FnSUNBZ0lFbG1JRzV2ZEN3Z2RISmxZWFJsWkNCaGN5QndjbVZsZUdsemRHbHVaeUJPYjJSbFRHbHpkRnh1WEc0Z0lDQWdRSEpsZEhWeWJpQmJRWEp5WVhsZFhHNHFMMXh1Wlhod2IzSjBJR052Ym5OMElITmxiR1ZqZEVSdmJTQTlJQ2h6Wld4bFkzUnZjaWtnUFQ0Z2UxeHVJQ0FnSUdOdmJuTjBJRzV2WkdWeklEMGdLSFI1Y0dWdlppQnpaV3hsWTNSdmNpQTlQVDBnSjNOMGNtbHVaeWNwSUQ4Z1pHOWpkVzFsYm5RdWNYVmxjbmxUWld4bFkzUnZja0ZzYkNoelpXeGxZM1J2Y2lrZ09pQnpaV3hsWTNSdmNqdGNiaUFnSUNCeVpYUjFjbTRnS0c1dlpHVnpMbXhsYm1kMGFDa2dQeUJiWFM1emJHbGpaUzVqWVd4c0tHNXZaR1Z6S1NBNklGdGRMbkIxYzJnb2JtOWtaWE1wTzF4dWZUdGNibHh1THlwY2JpQWdJQ0JUY0d4cGRDQmpiMjF0WVMxa1pXeHBiV2wwWldRZ2MzUnlhVzVuWEc1Y2JpQWdJQ0JjSW1admJ5eGlZWEpjSWlBdFBpQmJYQ0ptYjI5Y0lpd2dYQ0ppWVhKY0lsMWNibHh1SUNBZ0lFQndZWEpoYlNCYmMzUnlhVzVuWFZ4dUlDQWdJRUJ5WlhSMWNtNGdXMkZ5Y21GNVhWeHVLaTljYm1WNGNHOXlkQ0JqYjI1emRDQnpjR3hwZEVOdmJXMWhSR1ZzYVcxcGRHVmtJRDBnS0haaGJIVmxLU0E5UGlCcGMxTjBjbWx1WnloMllXeDFaU2tnUHlCMllXeDFaUzV6Y0d4cGRDZ3ZMRnhjY3lvdktTQTZJRnQyWVd4MVpWMDdYRzVjYmk4cVhHNGdJQ0FnVTNCc2FYUWdjM0JoWTJVdFpHVnNhVzFwZEdWa0lITjBjbWx1WjF4dVhHNGdJQ0FnWENKbWIyOGdZbUZ5WENJZ0xUNGdXMXdpWm05dlhDSXNJRndpWW1GeVhDSmRYRzVjYmlBZ0lDQkFjR0Z5WVcwZ1czTjBjbWx1WjExY2JpQWdJQ0JBY21WMGRYSnVJRnRoY25KaGVWMWNiaW92WEc1bGVIQnZjblFnWTI5dWMzUWdjM0JzYVhSVGNHRmpaVVJsYkdsdGFYUmxaQ0E5SUNoMllXeDFaU2tnUFQ0Z2FYTlRkSEpwYm1jb2RtRnNkV1VwSUQ4Z2RtRnNkV1V1YzNCc2FYUW9KeUFuS1NBNklGdDJZV3gxWlYwN1hHNWNiaThxWEc0Z0lDQWdVM0JzYVhRZ1lTQjJZV3gxWlNCcGJuUnZJR0VnZG1Gc2RXVXZkVzVwZENCdlltcGxZM1JjYmlBZ0lDQmNiaUFnSUNBZ0lDQWdYQ0l5TURCd2VGd2lJQzArSUhzZ2RtRnNkV1U2SURJd01Dd2dkVzVwZERvZ1hDSndlRndpSUgxY2JpQWdJQ0FnSUNBZ1hHNGdJQ0FnUUhCaGNtRnRJRnR6ZEhKcGJtZGRPaUJXWVd4MVpTQjBieUJ6Y0d4cGRGeHVJQ0FnSUVCeVpYUjFjbTRnVzI5aWFtVmpkRjA2SUU5aWFtVmpkQ0IzYVhSb0lIWmhiSFZsSUdGdVpDQjFibWwwSUhCeWIzQnpYRzRxTDF4dVpYaHdiM0owSUdOdmJuTjBJSE53YkdsMFZtRnNkV1ZWYm1sMElEMGdLSFpoYkhWbEtTQTlQaUI3WEc0Z0lDQWdZMjl1YzNRZ2MzQnNhWFJXWVd3Z1BTQjJZV3gxWlM1dFlYUmphQ2d2S0MwL1hGeGtLbHhjTGo5Y1hHUXFLU2d1S2lrdktUdGNibHh1SUNBZ0lISmxkSFZ5YmlCN1hHNGdJQ0FnSUNBZ0lIWmhiSFZsT2lCd1lYSnpaVVpzYjJGMEtITndiR2wwVm1Gc1d6RmRLU3hjYmlBZ0lDQWdJQ0FnZFc1cGREb2dJSE53YkdsMFZtRnNXekpkWEc0Z0lDQWdmVHRjYm4wN1hHNWNiaThxWEc0Z0lDQWdRMjl1ZG1WeWRDQnVkVzFpWlhJZ2RHOGdlQ0JrWldOcGJXRnNJSEJzWVdObGMxeHVYRzRnSUNBZ1FIQmhjbUZ0SUZ0dWRXMWlaWEpkWEc0Z0lDQWdRSEJoY21GdElGdHVkVzFpWlhKZFhHNGdJQ0FnUUhKbGRIVnliaUJiYm5WdFltVnlYVnh1S2k5Y2JtVjRjRzl5ZENCamIyNXpkQ0IwYjBSbFkybHRZV3dnUFNBb2JuVnRMQ0J3Y21WamFYTnBiMjRnUFNBeUtTQTlQaUI3WEc0Z0lDQWdjSEpsWTJsemFXOXVJRDBnTVRBZ0tpb2djSEpsWTJsemFXOXVPMXh1SUNBZ0lISmxkSFZ5YmlCTllYUm9Mbkp2ZFc1a0tHNTFiU0FxSUhCeVpXTnBjMmx2YmlrZ0x5QndjbVZqYVhOcGIyNDdYRzU5TzF4dUlsMTlcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2luYy91dGlscy5qc1xuICoqIG1vZHVsZSBpZCA9IDMyXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfSW5wdXQyID0gcmVxdWlyZSgnLi9JbnB1dCcpO1xuXG52YXIgX0lucHV0MyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX0lucHV0Mik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKCFzZWxmKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gY2FsbCAmJiAodHlwZW9mIGNhbGwgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikgPyBjYWxsIDogc2VsZjsgfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb24sIG5vdCBcIiArIHR5cGVvZiBzdXBlckNsYXNzKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCBlbnVtZXJhYmxlOiBmYWxzZSwgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LnNldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKSA6IHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7IH1cblxudmFyIFBvaW50ZXIgPSAoZnVuY3Rpb24gKF9JbnB1dCkge1xuICAgIF9pbmhlcml0cyhQb2ludGVyLCBfSW5wdXQpO1xuXG4gICAgZnVuY3Rpb24gUG9pbnRlcihpbml0aWFsU3RhdGUsIG1vdmVFdmVudCwgZXZlbnRUb1BvaW50KSB7XG4gICAgICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBQb2ludGVyKTtcblxuICAgICAgICB2YXIgX3RoaXMgPSBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCBfSW5wdXQuY2FsbCh0aGlzLCBpbml0aWFsU3RhdGUpKTtcblxuICAgICAgICBfdGhpcy5ldmVudFRvUG9pbnQgPSBldmVudFRvUG9pbnQ7XG4gICAgICAgIF90aGlzLm1vdmVFdmVudCA9IG1vdmVFdmVudDtcbiAgICAgICAgcmV0dXJuIF90aGlzO1xuICAgIH1cblxuICAgIFBvaW50ZXIucHJvdG90eXBlLmxhdGVzdCA9IGZ1bmN0aW9uIGxhdGVzdChlKSB7XG4gICAgICAgIF9JbnB1dC5wcm90b3R5cGUubGF0ZXN0LmNhbGwodGhpcywgdGhpcy5ldmVudFRvUG9pbnQoZSkpO1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgfTtcblxuICAgIFBvaW50ZXIucHJvdG90eXBlLnN0YXJ0ID0gZnVuY3Rpb24gc3RhcnQoKSB7XG4gICAgICAgIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gICAgICAgIF9JbnB1dC5wcm90b3R5cGUuc3RhcnQuY2FsbCh0aGlzKTtcbiAgICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIodGhpcy5tb3ZlRXZlbnQsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICByZXR1cm4gX3RoaXMyLmxhdGVzdChlKTtcbiAgICAgICAgfSk7XG4gICAgfTtcblxuICAgIFBvaW50ZXIucHJvdG90eXBlLnN0b3AgPSBmdW5jdGlvbiBzdG9wKCkge1xuICAgICAgICB2YXIgX3RoaXMzID0gdGhpcztcblxuICAgICAgICBfSW5wdXQucHJvdG90eXBlLnN0b3AuY2FsbCh0aGlzKTtcbiAgICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIodGhpcy5tb3ZlRXZlbnQsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICByZXR1cm4gX3RoaXMzLmxhdGVzdChlKTtcbiAgICAgICAgfSk7XG4gICAgfTtcblxuICAgIHJldHVybiBQb2ludGVyO1xufSkoX0lucHV0My5kZWZhdWx0KTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gUG9pbnRlcjtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbk55WXk5cGJuQjFkQzlRYjJsdWRHVnlMbXB6SWwwc0ltNWhiV1Z6SWpwYlhTd2liV0Z3Y0dsdVozTWlPaUk3T3pzN096czdPenM3T3pzN096czdTVUZGY1VJc1QwRkJUenRqUVVGUUxFOUJRVTg3TzBGQlEzaENMR0ZCUkdsQ0xFOUJRVThzUTBGRFdpeFpRVUZaTEVWQlFVVXNVMEZCVXl4RlFVRkZMRmxCUVZrc1JVRkJSVHM0UWtGRWJFTXNUMEZCVHpzN2NVUkJSWEJDTEd0Q1FVRk5MRmxCUVZrc1EwRkJRenM3UVVGRGJrSXNZMEZCU3l4WlFVRlpMRWRCUVVjc1dVRkJXU3hEUVVGRE8wRkJRMnBETEdOQlFVc3NVMEZCVXl4SFFVRkhMRk5CUVZNc1EwRkJRenM3UzBGRE9VSTdPMEZCVEdkQ0xGZEJRVThzVjBGUGVFSXNUVUZCVFN4dFFrRkJReXhEUVVGRExFVkJRVVU3UVVGRFRpeDVRa0ZCVFN4TlFVRk5MRXRCUVVFc1QwRkJReXhKUVVGSkxFTkJRVU1zV1VGQldTeERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNN1FVRkRia01zVTBGQlF5eERRVUZETEdOQlFXTXNSVUZCUlN4RFFVRkRPMHRCUTNSQ096dEJRVlpuUWl4WFFVRlBMRmRCV1hoQ0xFdEJRVXNzYjBKQlFVYzdPenRCUVVOS0xIbENRVUZOTEV0QlFVc3NTMEZCUVN4TlFVRkZMRU5CUVVNN1FVRkRaQ3huUWtGQlVTeERRVUZETEdWQlFXVXNRMEZCUXl4blFrRkJaMElzUTBGQlF5eEpRVUZKTEVOQlFVTXNVMEZCVXl4RlFVRkZMRlZCUVVNc1EwRkJRenR0UWtGQlN5eFBRVUZMTEUxQlFVMHNRMEZCUXl4RFFVRkRMRU5CUVVNN1UwRkJRU3hEUVVGRExFTkJRVU03UzBGRGNFWTdPMEZCWm1kQ0xGZEJRVThzVjBGcFFuaENMRWxCUVVrc2JVSkJRVWM3T3p0QlFVTklMSGxDUVVGTkxFbEJRVWtzUzBGQlFTeE5RVUZGTEVOQlFVTTdRVUZEWWl4blFrRkJVU3hEUVVGRExHVkJRV1VzUTBGQlF5eHRRa0ZCYlVJc1EwRkJReXhKUVVGSkxFTkJRVU1zVTBGQlV5eEZRVUZGTEZWQlFVTXNRMEZCUXp0dFFrRkJTeXhQUVVGTExFMUJRVTBzUTBGQlF5eERRVUZETEVOQlFVTTdVMEZCUVN4RFFVRkRMRU5CUVVNN1MwRkRka1k3TzFkQmNFSm5RaXhQUVVGUE96czdhMEpCUVZBc1QwRkJUeUlzSW1acGJHVWlPaUpRYjJsdWRHVnlMbXB6SWl3aWMyOTFjbU5sVW05dmRDSTZJaTlWYzJWeWN5OU5ZWFIwVUdWeWNua3ZVMmwwWlhNdmNHOXdiVzkwYVc5dUlpd2ljMjkxY21ObGMwTnZiblJsYm5RaU9sc2lhVzF3YjNKMElFbHVjSFYwSUdaeWIyMGdKeTR2U1c1d2RYUW5PMXh1WEc1bGVIQnZjblFnWkdWbVlYVnNkQ0JqYkdGemN5QlFiMmx1ZEdWeUlHVjRkR1Z1WkhNZ1NXNXdkWFFnZTF4dUlDQWdJR052Ym5OMGNuVmpkRzl5S0dsdWFYUnBZV3hUZEdGMFpTd2diVzkyWlVWMlpXNTBMQ0JsZG1WdWRGUnZVRzlwYm5RcElIdGNiaUFnSUNBZ0lDQWdjM1Z3WlhJb2FXNXBkR2xoYkZOMFlYUmxLVHRjYmlBZ0lDQWdJQ0FnZEdocGN5NWxkbVZ1ZEZSdlVHOXBiblFnUFNCbGRtVnVkRlJ2VUc5cGJuUTdYRzRnSUNBZ0lDQWdJSFJvYVhNdWJXOTJaVVYyWlc1MElEMGdiVzkyWlVWMlpXNTBPMXh1SUNBZ0lIMWNibHh1SUNBZ0lHeGhkR1Z6ZENobEtTQjdYRzRnSUNBZ0lDQWdJSE4xY0dWeUxteGhkR1Z6ZENoMGFHbHpMbVYyWlc1MFZHOVFiMmx1ZENobEtTazdYRzRnSUNBZ0lDQWdJR1V1Y0hKbGRtVnVkRVJsWm1GMWJIUW9LVHRjYmlBZ0lDQjlYRzVjYmlBZ0lDQnpkR0Z5ZENncElIdGNiaUFnSUNBZ0lDQWdjM1Z3WlhJdWMzUmhjblFvS1R0Y2JpQWdJQ0FnSUNBZ1pHOWpkVzFsYm5RdVpHOWpkVzFsYm5SRmJHVnRaVzUwTG1Ga1pFVjJaVzUwVEdsemRHVnVaWElvZEdocGN5NXRiM1psUlhabGJuUXNJQ2hsS1NBOVBpQjBhR2x6TG14aGRHVnpkQ2hsS1NrN1hHNGdJQ0FnZlZ4dVhHNGdJQ0FnYzNSdmNDZ3BJSHRjYmlBZ0lDQWdJQ0FnYzNWd1pYSXVjM1J2Y0NncE8xeHVJQ0FnSUNBZ0lDQmtiMk4xYldWdWRDNWtiMk4xYldWdWRFVnNaVzFsYm5RdWNtVnRiM1psUlhabGJuUk1hWE4wWlc1bGNpaDBhR2x6TG0xdmRtVkZkbVZ1ZEN3Z0tHVXBJRDArSUhSb2FYTXViR0YwWlhOMEtHVXBLVHRjYmlBZ0lDQjlYRzU5WEc0aVhYMD1cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2lucHV0L1BvaW50ZXIuanNcbiAqKiBtb2R1bGUgaWQgPSAzM1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xudmFyIFRSQU5TTEFURSA9ICd0cmFuc2xhdGUnO1xuXG5leHBvcnRzLmRlZmF1bHQgPSB7XG4gICAgeDogVFJBTlNMQVRFICsgJ1gnLFxuICAgIHk6IFRSQU5TTEFURSArICdZJyxcbiAgICB6OiBUUkFOU0xBVEUgKyAnWidcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5OeVl5OWhaR0Z3ZEdWeUwyTnpjeTl6ZEdGMFpTMXRZWEF1YW5NaVhTd2libUZ0WlhNaU9sdGRMQ0p0WVhCd2FXNW5jeUk2SWpzN08wRkJRVUVzU1VGQlRTeFRRVUZUTEVkQlFVY3NWMEZCVnl4RFFVRkRPenRyUWtGRlpqdEJRVU5ZTEV0QlFVTXNSVUZCUlN4VFFVRlRMRWRCUVVjc1IwRkJSenRCUVVOc1FpeExRVUZETEVWQlFVVXNVMEZCVXl4SFFVRkhMRWRCUVVjN1FVRkRiRUlzUzBGQlF5eEZRVUZGTEZOQlFWTXNSMEZCUnl4SFFVRkhPME5CUTNKQ0lpd2labWxzWlNJNkluTjBZWFJsTFcxaGNDNXFjeUlzSW5OdmRYSmpaVkp2YjNRaU9pSXZWWE5sY25NdlRXRjBkRkJsY25KNUwxTnBkR1Z6TDNCdmNHMXZkR2x2YmlJc0luTnZkWEpqWlhORGIyNTBaVzUwSWpwYkltTnZibk4wSUZSU1FVNVRURUZVUlNBOUlDZDBjbUZ1YzJ4aGRHVW5PMXh1WEc1bGVIQnZjblFnWkdWbVlYVnNkQ0I3WEc0Z0lDQWdlRG9nVkZKQlRsTk1RVlJGSUNzZ0oxZ25MRnh1SUNBZ0lIazZJRlJTUVU1VFRFRlVSU0FySUNkWkp5eGNiaUFnSUNCNk9pQlVVa0ZPVTB4QlZFVWdLeUFuV2lkY2JuMDdJbDE5XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9hZGFwdGVyL2Nzcy9zdGF0ZS1tYXAuanNcbiAqKiBtb2R1bGUgaWQgPSAzNFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX2FuZ2xlID0gcmVxdWlyZSgnLi4vLi4vdmFsdWUtdHlwZXMvYW5nbGUnKTtcblxudmFyIF9hbmdsZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9hbmdsZSk7XG5cbnZhciBfYWxwaGEgPSByZXF1aXJlKCcuLi8uLi92YWx1ZS10eXBlcy9hbHBoYScpO1xuXG52YXIgX2FscGhhMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2FscGhhKTtcblxudmFyIF9heGVzID0gcmVxdWlyZSgnLi4vLi4vdmFsdWUtdHlwZXMvYXhlcycpO1xuXG52YXIgX2F4ZXMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfYXhlcyk7XG5cbnZhciBfY29sb3IgPSByZXF1aXJlKCcuLi8uLi92YWx1ZS10eXBlcy9jb2xvcicpO1xuXG52YXIgX2NvbG9yMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NvbG9yKTtcblxudmFyIF9zY2FsZSA9IHJlcXVpcmUoJy4uLy4uL3ZhbHVlLXR5cGVzL3NjYWxlJyk7XG5cbnZhciBfc2NhbGUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfc2NhbGUpO1xuXG52YXIgX3NoYWRvdyA9IHJlcXVpcmUoJy4uLy4uL3ZhbHVlLXR5cGVzL3NoYWRvdycpO1xuXG52YXIgX3NoYWRvdzIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9zaGFkb3cpO1xuXG52YXIgX3Bvc2l0aW9ucyA9IHJlcXVpcmUoJy4uLy4uL3ZhbHVlLXR5cGVzL3Bvc2l0aW9ucycpO1xuXG52YXIgX3Bvc2l0aW9uczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9wb3NpdGlvbnMpO1xuXG52YXIgX3B4ID0gcmVxdWlyZSgnLi4vLi4vdmFsdWUtdHlwZXMvcHgnKTtcblxudmFyIF9weDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9weCk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmV4cG9ydHMuZGVmYXVsdCA9IHtcbiAgICAvLyBDb2xvciBwcm9wc1xuICAgIGNvbG9yOiBfY29sb3IyLmRlZmF1bHQsXG4gICAgYmFja2dyb3VuZENvbG9yOiBfY29sb3IyLmRlZmF1bHQsXG4gICAgb3V0bGluZUNvbG9yOiBfY29sb3IyLmRlZmF1bHQsXG4gICAgZmlsbDogX2NvbG9yMi5kZWZhdWx0LFxuICAgIHN0cm9rZTogX2NvbG9yMi5kZWZhdWx0LFxuXG4gICAgLy8gQm9yZGVyIHByb3BzXG4gICAgYm9yZGVyQ29sb3I6IF9jb2xvcjIuZGVmYXVsdCxcbiAgICBib3JkZXJUb3BDb2xvcjogX2NvbG9yMi5kZWZhdWx0LFxuICAgIGJvcmRlclJpZ2h0Q29sb3I6IF9jb2xvcjIuZGVmYXVsdCxcbiAgICBib3JkZXJCb3R0b21Db2xvcjogX2NvbG9yMi5kZWZhdWx0LFxuICAgIGJvcmRlckxlZnRDb2xvcjogX2NvbG9yMi5kZWZhdWx0LFxuICAgIGJvcmRlclJhZGl1czogX3B4Mi5kZWZhdWx0LFxuXG4gICAgLy8gUG9zaXRpb25pbmdcbiAgICBtYXJnaW46IF9wb3NpdGlvbnMyLmRlZmF1bHQsXG4gICAgcGFkZGluZzogX3Bvc2l0aW9uczIuZGVmYXVsdCxcbiAgICB3aWR0aDogX3B4Mi5kZWZhdWx0LFxuICAgIGhlaWdodDogX3B4Mi5kZWZhdWx0LFxuXG4gICAgLy8gQXhlc1xuICAgIGJhY2tncm91bmRQb3NpdGlvbjogX2F4ZXMyLmRlZmF1bHQsXG4gICAgcGVyc3BlY3RpdmVPcmlnaW46IF9heGVzMi5kZWZhdWx0LFxuICAgIHRyYW5zZm9ybU9yaWdpbjogX2F4ZXMyLmRlZmF1bHQsXG5cbiAgICAvLyBTaGFkb3dzXG4gICAgdGV4dFNoYWRvdzogX3NoYWRvdzIuZGVmYXVsdCxcbiAgICBib3hTaGFkb3c6IF9zaGFkb3cyLmRlZmF1bHQsXG5cbiAgICAvLyBUcmFuc2Zvcm0gcHJvcGVydGllc1xuICAgIHJvdGF0ZTogX2FuZ2xlMi5kZWZhdWx0LFxuICAgIHJvdGF0ZVg6IF9hbmdsZTIuZGVmYXVsdCxcbiAgICByb3RhdGVZOiBfYW5nbGUyLmRlZmF1bHQsXG4gICAgcm90YXRlWjogX2FuZ2xlMi5kZWZhdWx0LFxuICAgIHNjYWxlOiBfc2NhbGUyLmRlZmF1bHQsXG4gICAgc2NhbGVYOiBfc2NhbGUyLmRlZmF1bHQsXG4gICAgc2NhbGVZOiBfc2NhbGUyLmRlZmF1bHQsXG4gICAgc2NhbGVaOiBfc2NhbGUyLmRlZmF1bHQsXG4gICAgc2tld1g6IF9hbmdsZTIuZGVmYXVsdCxcbiAgICBza2V3WTogX2FuZ2xlMi5kZWZhdWx0LFxuICAgIGRpc3RhbmNlOiBfcHgyLmRlZmF1bHQsXG4gICAgdHJhbnNsYXRlWDogX3B4Mi5kZWZhdWx0LFxuICAgIHRyYW5zbGF0ZVk6IF9weDIuZGVmYXVsdCxcbiAgICB0cmFuc2xhdGVaOiBfcHgyLmRlZmF1bHQsXG4gICAgcGVyc3BlY3RpdmU6IF9weDIuZGVmYXVsdCxcbiAgICBvcGFjaXR5OiBfYWxwaGEyLmRlZmF1bHRcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5OeVl5OWhaR0Z3ZEdWeUwyTnpjeTkyWVd4MVpTMTBlWEJsTFcxaGNDNXFjeUpkTENKdVlXMWxjeUk2VzEwc0ltMWhjSEJwYm1keklqb2lPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenRyUWtGVFpUczdRVUZGV0N4VFFVRkxMR2xDUVVGUE8wRkJRMW9zYlVKQlFXVXNhVUpCUVU4N1FVRkRkRUlzWjBKQlFWa3NhVUpCUVU4N1FVRkRia0lzVVVGQlNTeHBRa0ZCVHp0QlFVTllMRlZCUVUwc2FVSkJRVTg3T3p0QlFVZGlMR1ZCUVZjc2FVSkJRVTg3UVVGRGJFSXNhMEpCUVdNc2FVSkJRVTg3UVVGRGNrSXNiMEpCUVdkQ0xHbENRVUZQTzBGQlEzWkNMSEZDUVVGcFFpeHBRa0ZCVHp0QlFVTjRRaXh0UWtGQlpTeHBRa0ZCVHp0QlFVTjBRaXhuUWtGQldTeGpRVUZKT3pzN1FVRkhhRUlzVlVGQlRTeHhRa0ZCVnp0QlFVTnFRaXhYUVVGUExIRkNRVUZYTzBGQlEyeENMRk5CUVVzc1kwRkJTVHRCUVVOVUxGVkJRVTBzWTBGQlNUczdPMEZCUjFZc2MwSkJRV3RDTEdkQ1FVRk5PMEZCUTNoQ0xIRkNRVUZwUWl4blFrRkJUVHRCUVVOMlFpeHRRa0ZCWlN4blFrRkJUVHM3TzBGQlIzSkNMR05CUVZVc2EwSkJRVkU3UVVGRGJFSXNZVUZCVXl4clFrRkJVVHM3TzBGQlIycENMRlZCUVUwc2FVSkJRVTg3UVVGRFlpeFhRVUZQTEdsQ1FVRlBPMEZCUTJRc1YwRkJUeXhwUWtGQlR6dEJRVU5rTEZkQlFVOHNhVUpCUVU4N1FVRkRaQ3hUUVVGTExHbENRVUZQTzBGQlExb3NWVUZCVFN4cFFrRkJUenRCUVVOaUxGVkJRVTBzYVVKQlFVODdRVUZEWWl4VlFVRk5MR2xDUVVGUE8wRkJRMklzVTBGQlN5eHBRa0ZCVHp0QlFVTmFMRk5CUVVzc2FVSkJRVTg3UVVGRFdpeFpRVUZSTEdOQlFVazdRVUZEV2l4alFVRlZMR05CUVVrN1FVRkRaQ3hqUVVGVkxHTkJRVWs3UVVGRFpDeGpRVUZWTEdOQlFVazdRVUZEWkN4bFFVRlhMR05CUVVrN1FVRkRaaXhYUVVGUExHbENRVUZQTzBOQlEycENJaXdpWm1sc1pTSTZJblpoYkhWbExYUjVjR1V0YldGd0xtcHpJaXdpYzI5MWNtTmxVbTl2ZENJNklpOVZjMlZ5Y3k5TllYUjBVR1Z5Y25rdlUybDBaWE12Y0c5d2JXOTBhVzl1SWl3aWMyOTFjbU5sYzBOdmJuUmxiblFpT2xzaWFXMXdiM0owSUdGdVoyeGxJR1p5YjIwZ0p5NHVMeTR1TDNaaGJIVmxMWFI1Y0dWekwyRnVaMnhsSnp0Y2JtbHRjRzl5ZENCaGJIQm9ZU0JtY205dElDY3VMaTh1TGk5MllXeDFaUzEwZVhCbGN5OWhiSEJvWVNjN1hHNXBiWEJ2Y25RZ1lYaGxjeUJtY205dElDY3VMaTh1TGk5MllXeDFaUzEwZVhCbGN5OWhlR1Z6Snp0Y2JtbHRjRzl5ZENCamIyeHZjaUJtY205dElDY3VMaTh1TGk5MllXeDFaUzEwZVhCbGN5OWpiMnh2Y2ljN1hHNXBiWEJ2Y25RZ2MyTmhiR1VnWm5KdmJTQW5MaTR2TGk0dmRtRnNkV1V0ZEhsd1pYTXZjMk5oYkdVbk8xeHVhVzF3YjNKMElITm9ZV1J2ZHlCbWNtOXRJQ2N1TGk4dUxpOTJZV3gxWlMxMGVYQmxjeTl6YUdGa2IzY25PMXh1YVcxd2IzSjBJSEJ2YzJsMGFXOXVjeUJtY205dElDY3VMaTh1TGk5MllXeDFaUzEwZVhCbGN5OXdiM05wZEdsdmJuTW5PMXh1YVcxd2IzSjBJSEI0SUdaeWIyMGdKeTR1THk0dUwzWmhiSFZsTFhSNWNHVnpMM0I0Snp0Y2JseHVaWGh3YjNKMElHUmxabUYxYkhRZ2UxeHVJQ0FnSUM4dklFTnZiRzl5SUhCeWIzQnpYRzRnSUNBZ1kyOXNiM0k2SUdOdmJHOXlMRnh1SUNBZ0lHSmhZMnRuY205MWJtUkRiMnh2Y2pvZ1kyOXNiM0lzWEc0Z0lDQWdiM1YwYkdsdVpVTnZiRzl5T2lCamIyeHZjaXhjYmlBZ0lDQm1hV3hzT2lCamIyeHZjaXhjYmlBZ0lDQnpkSEp2YTJVNklHTnZiRzl5TEZ4dVhHNGdJQ0FnTHk4Z1FtOXlaR1Z5SUhCeWIzQnpYRzRnSUNBZ1ltOXlaR1Z5UTI5c2IzSTZJR052Ykc5eUxGeHVJQ0FnSUdKdmNtUmxjbFJ2Y0VOdmJHOXlPaUJqYjJ4dmNpeGNiaUFnSUNCaWIzSmtaWEpTYVdkb2RFTnZiRzl5T2lCamIyeHZjaXhjYmlBZ0lDQmliM0prWlhKQ2IzUjBiMjFEYjJ4dmNqb2dZMjlzYjNJc1hHNGdJQ0FnWW05eVpHVnlUR1ZtZEVOdmJHOXlPaUJqYjJ4dmNpeGNiaUFnSUNCaWIzSmtaWEpTWVdScGRYTTZJSEI0TEZ4dVhHNGdJQ0FnTHk4Z1VHOXphWFJwYjI1cGJtZGNiaUFnSUNCdFlYSm5hVzQ2SUhCdmMybDBhVzl1Y3l4Y2JpQWdJQ0J3WVdSa2FXNW5PaUJ3YjNOcGRHbHZibk1zWEc0Z0lDQWdkMmxrZEdnNklIQjRMRnh1SUNBZ0lHaGxhV2RvZERvZ2NIZ3NYRzVjYmlBZ0lDQXZMeUJCZUdWelhHNGdJQ0FnWW1GamEyZHliM1Z1WkZCdmMybDBhVzl1T2lCaGVHVnpMRnh1SUNBZ0lIQmxjbk53WldOMGFYWmxUM0pwWjJsdU9pQmhlR1Z6TEZ4dUlDQWdJSFJ5WVc1elptOXliVTl5YVdkcGJqb2dZWGhsY3l4Y2JseHVJQ0FnSUM4dklGTm9ZV1J2ZDNOY2JpQWdJQ0IwWlhoMFUyaGhaRzkzT2lCemFHRmtiM2NzWEc0Z0lDQWdZbTk0VTJoaFpHOTNPaUJ6YUdGa2IzY3NJQ0FnWEc1Y2JpQWdJQ0F2THlCVWNtRnVjMlp2Y20wZ2NISnZjR1Z5ZEdsbGMxeHVJQ0FnSUhKdmRHRjBaVG9nWVc1bmJHVXNYRzRnSUNBZ2NtOTBZWFJsV0RvZ1lXNW5iR1VzWEc0Z0lDQWdjbTkwWVhSbFdUb2dZVzVuYkdVc1hHNGdJQ0FnY205MFlYUmxXam9nWVc1bmJHVXNYRzRnSUNBZ2MyTmhiR1U2SUhOallXeGxMRnh1SUNBZ0lITmpZV3hsV0RvZ2MyTmhiR1VzWEc0Z0lDQWdjMk5oYkdWWk9pQnpZMkZzWlN4Y2JpQWdJQ0J6WTJGc1pWbzZJSE5qWVd4bExGeHVJQ0FnSUhOclpYZFlPaUJoYm1kc1pTeGNiaUFnSUNCemEyVjNXVG9nWVc1bmJHVXNYRzRnSUNBZ1pHbHpkR0Z1WTJVNklIQjRMRnh1SUNBZ0lIUnlZVzV6YkdGMFpWZzZJSEI0TEZ4dUlDQWdJSFJ5WVc1emJHRjBaVms2SUhCNExGeHVJQ0FnSUhSeVlXNXpiR0YwWlZvNklIQjRMRnh1SUNBZ0lIQmxjbk53WldOMGFYWmxPaUJ3ZUN4Y2JpQWdJQ0J2Y0dGamFYUjVPaUJoYkhCb1lWeHVmVHNpWFgwPVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvYWRhcHRlci9jc3MvdmFsdWUtdHlwZS1tYXAuanNcbiAqKiBtb2R1bGUgaWQgPSAzNVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX3RyYW5zZm9ybVByb3BzID0gcmVxdWlyZSgnLi90cmFuc2Zvcm0tcHJvcHMnKTtcblxudmFyIF90cmFuc2Zvcm1Qcm9wczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF90cmFuc2Zvcm1Qcm9wcyk7XG5cbnZhciBfcHJlZml4ZXIgPSByZXF1aXJlKCcuL3ByZWZpeGVyJyk7XG5cbnZhciBfcHJlZml4ZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcHJlZml4ZXIpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG52YXIgVFJBTlNMQVRFX1ogPSAndHJhbnNsYXRlWic7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uIChzdGF0ZSwgZGlzYWJsZUhhcmR3YXJlQWNjZWxlcmF0aW9uKSB7XG4gICAgdmFyIHByb3BlcnR5U3RyaW5nID0gJyc7XG4gICAgdmFyIHRyYW5zZm9ybVN0cmluZyA9ICcnO1xuICAgIHZhciB0cmFuc2Zvcm1IYXNaID0gZmFsc2U7XG5cbiAgICBmb3IgKHZhciBrZXkgaW4gc3RhdGUpIHtcbiAgICAgICAgaWYgKHN0YXRlLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICAgIHZhciB2YWx1ZSA9IHN0YXRlW2tleV07XG5cbiAgICAgICAgICAgIGlmIChfdHJhbnNmb3JtUHJvcHMyLmRlZmF1bHRba2V5XSkge1xuICAgICAgICAgICAgICAgIHRyYW5zZm9ybVN0cmluZyArPSBrZXkgKyAnKCcgKyB2YWx1ZSArICcpICc7XG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtSGFzWiA9IGtleSA9PT0gVFJBTlNMQVRFX1ogPyB0cnVlIDogdHJhbnNmb3JtSGFzWjtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcHJvcGVydHlTdHJpbmcgKz0gJzsnICsgKDAsIF9wcmVmaXhlcjIuZGVmYXVsdCkoa2V5KSArICc6JyArIHZhbHVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHRyYW5zZm9ybVN0cmluZyAhPT0gJycpIHtcbiAgICAgICAgaWYgKCF0cmFuc2Zvcm1IYXNaICYmICFkaXNhYmxlSGFyZHdhcmVBY2NlbGVyYXRpb24pIHtcbiAgICAgICAgICAgIHRyYW5zZm9ybVN0cmluZyArPSBUUkFOU0xBVEVfWiArICcoMHB4KSc7XG4gICAgICAgIH1cblxuICAgICAgICBwcm9wZXJ0eVN0cmluZyArPSAnOycgKyAoMCwgX3ByZWZpeGVyMi5kZWZhdWx0KSgndHJhbnNmb3JtJykgKyAnOicgKyB0cmFuc2Zvcm1TdHJpbmc7XG4gICAgfVxuXG4gICAgcmV0dXJuIHByb3BlcnR5U3RyaW5nO1xufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbk55WXk5aFpHRndkR1Z5TDJOemN5OWlkV2xzWkM1cWN5SmRMQ0p1WVcxbGN5STZXMTBzSW0xaGNIQnBibWR6SWpvaU96czdPenM3T3pzN096czdPenRCUVVkQkxFbEJRVTBzVjBGQlZ5eEhRVUZITEZsQlFWa3NRMEZCUXpzN2EwSkJSV3hDTEZWQlFVTXNTMEZCU3l4RlFVRkZMREpDUVVFeVFpeEZRVUZMTzBGQlEyNUVMRkZCUVVrc1kwRkJZeXhIUVVGSExFVkJRVVVzUTBGQlF6dEJRVU40UWl4UlFVRkpMR1ZCUVdVc1IwRkJSeXhGUVVGRkxFTkJRVU03UVVGRGVrSXNVVUZCU1N4aFFVRmhMRWRCUVVjc1MwRkJTeXhEUVVGRE96dEJRVVV4UWl4VFFVRkxMRWxCUVVrc1IwRkJSeXhKUVVGSkxFdEJRVXNzUlVGQlJUdEJRVU51UWl4WlFVRkpMRXRCUVVzc1EwRkJReXhqUVVGakxFTkJRVU1zUjBGQlJ5eERRVUZETEVWQlFVVTdRVUZETTBJc1owSkJRVTBzUzBGQlN5eEhRVUZITEV0QlFVc3NRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJRenM3UVVGRmVrSXNaMEpCUVVrc2VVSkJRV1VzUjBGQlJ5eERRVUZETEVWQlFVVTdRVUZEY2tJc0swSkJRV1VzU1VGQlNTeEhRVUZITEVkQlFVY3NSMEZCUnl4SFFVRkhMRXRCUVVzc1IwRkJSeXhKUVVGSkxFTkJRVU03UVVGRE5VTXNOa0pCUVdFc1IwRkJSeXhCUVVGRExFZEJRVWNzUzBGQlN5eFhRVUZYTEVkQlFVa3NTVUZCU1N4SFFVRkhMR0ZCUVdFc1EwRkJRenRoUVVWb1JTeE5RVUZOTzBGQlEwZ3NPRUpCUVdNc1NVRkJTU3hIUVVGSExFZEJRVWNzZDBKQlFWTXNSMEZCUnl4RFFVRkRMRWRCUVVjc1IwRkJSeXhIUVVGSExFdEJRVXNzUTBGQlF6dGhRVU4yUkR0VFFVTktPMHRCUTBvN08wRkJSVVFzVVVGQlNTeGxRVUZsTEV0QlFVc3NSVUZCUlN4RlFVRkZPMEZCUTNoQ0xGbEJRVWtzUTBGQlF5eGhRVUZoTEVsQlFVa3NRMEZCUXl3eVFrRkJNa0lzUlVGQlJUdEJRVU5vUkN3eVFrRkJaU3hKUVVGSkxGZEJRVmNzUjBGQlJ5eFBRVUZQTEVOQlFVTTdVMEZETlVNN08wRkJSVVFzYzBKQlFXTXNTVUZCU1N4SFFVRkhMRWRCUVVjc2QwSkJRVk1zVjBGQlZ5eERRVUZETEVkQlFVY3NSMEZCUnl4SFFVRkhMR1ZCUVdVc1EwRkJRenRMUVVONlJUczdRVUZGUkN4WFFVRlBMR05CUVdNc1EwRkJRenREUVVONlFpSXNJbVpwYkdVaU9pSmlkV2xzWkM1cWN5SXNJbk52ZFhKalpWSnZiM1FpT2lJdlZYTmxjbk12VFdGMGRGQmxjbko1TDFOcGRHVnpMM0J2Y0cxdmRHbHZiaUlzSW5OdmRYSmpaWE5EYjI1MFpXNTBJanBiSW1sdGNHOXlkQ0IwY21GdWMyWnZjbTFRY205d2N5Qm1jbTl0SUNjdUwzUnlZVzV6Wm05eWJTMXdjbTl3Y3ljN1hHNXBiWEJ2Y25RZ2NISmxabWw0WlhJZ1puSnZiU0FuTGk5d2NtVm1hWGhsY2ljN1hHNWNibU52Ym5OMElGUlNRVTVUVEVGVVJWOWFJRDBnSjNSeVlXNXpiR0YwWlZvbk8xeHVYRzVsZUhCdmNuUWdaR1ZtWVhWc2RDQW9jM1JoZEdVc0lHUnBjMkZpYkdWSVlYSmtkMkZ5WlVGalkyVnNaWEpoZEdsdmJpa2dQVDRnZTF4dUlDQWdJR3hsZENCd2NtOXdaWEowZVZOMGNtbHVaeUE5SUNjbk8xeHVJQ0FnSUd4bGRDQjBjbUZ1YzJadmNtMVRkSEpwYm1jZ1BTQW5KenRjYmlBZ0lDQnNaWFFnZEhKaGJuTm1iM0p0U0dGeldpQTlJR1poYkhObE8xeHVYRzRnSUNBZ1ptOXlJQ2hzWlhRZ2EyVjVJR2x1SUhOMFlYUmxLU0I3WEc0Z0lDQWdJQ0FnSUdsbUlDaHpkR0YwWlM1b1lYTlBkMjVRY205d1pYSjBlU2hyWlhrcEtTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNCamIyNXpkQ0IyWVd4MVpTQTlJSE4wWVhSbFcydGxlVjA3WEc1Y2JpQWdJQ0FnSUNBZ0lDQWdJR2xtSUNoMGNtRnVjMlp2Y20xUWNtOXdjMXRyWlhsZEtTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdkSEpoYm5ObWIzSnRVM1J5YVc1bklDczlJR3RsZVNBcklDY29KeUFySUhaaGJIVmxJQ3NnSnlrZ0p6dGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQjBjbUZ1YzJadmNtMUlZWE5hSUQwZ0tHdGxlU0E5UFQwZ1ZGSkJUbE5NUVZSRlgxb3BJRDhnZEhKMVpTQTZJSFJ5WVc1elptOXliVWhoYzFvN1hHNWNiaUFnSUNBZ0lDQWdJQ0FnSUgwZ1pXeHpaU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnY0hKdmNHVnlkSGxUZEhKcGJtY2dLejBnSnpzbklDc2djSEpsWm1sNFpYSW9hMlY1S1NBcklDYzZKeUFySUhaaGJIVmxPMXh1SUNBZ0lDQWdJQ0FnSUNBZ2ZWeHVJQ0FnSUNBZ0lDQjlYRzRnSUNBZ2ZWeHVYRzRnSUNBZ2FXWWdLSFJ5WVc1elptOXliVk4wY21sdVp5QWhQVDBnSnljcElIdGNiaUFnSUNBZ0lDQWdhV1lnS0NGMGNtRnVjMlp2Y20xSVlYTmFJQ1ltSUNGa2FYTmhZbXhsU0dGeVpIZGhjbVZCWTJObGJHVnlZWFJwYjI0cElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUhSeVlXNXpabTl5YlZOMGNtbHVaeUFyUFNCVVVrRk9VMHhCVkVWZldpQXJJQ2NvTUhCNEtTYzdYRzRnSUNBZ0lDQWdJSDFjYmx4dUlDQWdJQ0FnSUNCd2NtOXdaWEowZVZOMGNtbHVaeUFyUFNBbk95Y2dLeUJ3Y21WbWFYaGxjaWduZEhKaGJuTm1iM0p0SnlrZ0t5QW5PaWNnS3lCMGNtRnVjMlp2Y20xVGRISnBibWM3WEc0Z0lDQWdmVnh1WEc0Z0lDQWdjbVYwZFhKdUlIQnliM0JsY25SNVUzUnlhVzVuTzF4dWZUc2lYWDA9XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9hZGFwdGVyL2Nzcy9idWlsZC5qc1xuICoqIG1vZHVsZSBpZCA9IDM2XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG52YXIgY2FjaGUgPSB7fTtcbnZhciBwcmVmaXhlcyA9IFsnV2Via2l0JywgJ01veicsICdPJywgJ21zJywgJyddO1xudmFyIG51bVByZWZpeGVzID0gcHJlZml4ZXMubGVuZ3RoO1xudmFyIHRlc3RFbGVtZW50ID0gdW5kZWZpbmVkO1xuXG4vKlxuICAgIFRlc3Qgc3R5bGUgcHJvcGVydHkgZm9yIHByZWZpeGVkIHZlcnNpb25cbiAgICBcbiAgICBAcGFyYW0gW3N0cmluZ106IFN0eWxlIHByb3BlcnR5XG4gICAgQHJldHVybiBbc3RyaW5nXTogQ2FjaGVkIHByb3BlcnR5IG5hbWVcbiovXG52YXIgdGVzdFByZWZpeCA9IGZ1bmN0aW9uIChrZXkpIHtcbiAgICB0ZXN0RWxlbWVudCA9IHRlc3RFbGVtZW50IHx8IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgaWYgKGNhY2hlW2tleV0gPT09IGZhbHNlKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBjYWNoZVtrZXldID0gZmFsc2U7XG4gICAgfVxuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBudW1QcmVmaXhlczsgaSsrKSB7XG4gICAgICAgIHZhciBwcmVmaXggPSBwcmVmaXhlc1tpXSxcbiAgICAgICAgICAgIHByZWZpeGVkID0gcHJlZml4ID09PSAnJyA/IGtleSA6IHByZWZpeCArIGtleS5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIGtleS5zbGljZSgxKTtcblxuICAgICAgICBpZiAocHJlZml4ZWQgaW4gdGVzdEVsZW1lbnQuc3R5bGUpIHtcbiAgICAgICAgICAgIGNhY2hlW2tleV0gPSBwcmVmaXhlZDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBjYWNoZVtrZXldO1xufTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gKGtleSkge1xuICAgIHJldHVybiBjYWNoZVtrZXldIHx8IHRlc3RQcmVmaXgoa2V5KTtcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5OeVl5OWhaR0Z3ZEdWeUwyTnpjeTl3Y21WbWFYaGxjaTVxY3lKZExDSnVZVzFsY3lJNlcxMHNJbTFoY0hCcGJtZHpJam9pT3pzN1FVRkJRU3hKUVVGTkxFdEJRVXNzUjBGQlJ5eEZRVUZGTEVOQlFVTTdRVUZEYWtJc1NVRkJUU3hSUVVGUkxFZEJRVWNzUTBGQlF5eFJRVUZSTEVWQlFVTXNTMEZCU3l4RlFVRkRMRWRCUVVjc1JVRkJReXhKUVVGSkxFVkJRVVVzUlVGQlJTeERRVUZETEVOQlFVTTdRVUZETDBNc1NVRkJUU3hYUVVGWExFZEJRVWNzVVVGQlVTeERRVUZETEUxQlFVMHNRMEZCUXp0QlFVTndReXhKUVVGSkxGZEJRVmNzV1VGQlFUczdPenM3T3pzN1FVRkJReXhCUVZGb1FpeEpRVUZOTEZWQlFWVXNSMEZCUnl4VlFVRkRMRWRCUVVjc1JVRkJTenRCUVVONFFpeGxRVUZYTEVkQlFVY3NWMEZCVnl4SlFVRkpMRkZCUVZFc1EwRkJReXhoUVVGaExFTkJRVU1zUzBGQlN5eERRVUZETEVOQlFVTTdPMEZCUlRORUxGRkJRVWtzUzBGQlN5eERRVUZETEVkQlFVY3NRMEZCUXl4TFFVRkxMRXRCUVVzc1JVRkJSVHRCUVVOMFFpeGxRVUZQTEV0QlFVc3NRMEZCUXp0TFFVTm9RaXhOUVVGTk8wRkJRMGdzWVVGQlN5eERRVUZETEVkQlFVY3NRMEZCUXl4SFFVRkhMRXRCUVVzc1EwRkJRenRMUVVOMFFqczdRVUZGUkN4VFFVRkxMRWxCUVVrc1EwRkJReXhIUVVGSExFTkJRVU1zUlVGQlJTeERRVUZETEVkQlFVY3NWMEZCVnl4RlFVRkZMRU5CUVVNc1JVRkJSU3hGUVVGRk8wRkJRMnhETEZsQlFVa3NUVUZCVFN4SFFVRkhMRkZCUVZFc1EwRkJReXhEUVVGRExFTkJRVU03V1VGRGNFSXNVVUZCVVN4SFFVRkhMRUZCUVVNc1RVRkJUU3hMUVVGTExFVkJRVVVzUjBGQlNTeEhRVUZITEVkQlFVY3NUVUZCVFN4SFFVRkhMRWRCUVVjc1EwRkJReXhOUVVGTkxFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNWMEZCVnl4RlFVRkZMRWRCUVVjc1IwRkJSeXhEUVVGRExFdEJRVXNzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXpzN1FVRkZNMFlzV1VGQlNTeFJRVUZSTEVsQlFVa3NWMEZCVnl4RFFVRkRMRXRCUVVzc1JVRkJSVHRCUVVNdlFpeHBRa0ZCU3l4RFFVRkRMRWRCUVVjc1EwRkJReXhIUVVGSExGRkJRVkVzUTBGQlF6dFRRVU42UWp0TFFVTktPenRCUVVWRUxGZEJRVThzUzBGQlN5eERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRPME5CUTNKQ0xFTkJRVU03TzJ0Q1FVVmhMRlZCUVVNc1IwRkJSenRYUVVGTExFdEJRVXNzUTBGQlF5eEhRVUZITEVOQlFVTXNTVUZCU1N4VlFVRlZMRU5CUVVNc1IwRkJSeXhEUVVGRE8wTkJRVUVpTENKbWFXeGxJam9pY0hKbFptbDRaWEl1YW5NaUxDSnpiM1Z5WTJWU2IyOTBJam9pTDFWelpYSnpMMDFoZEhSUVpYSnllUzlUYVhSbGN5OXdiM0J0YjNScGIyNGlMQ0p6YjNWeVkyVnpRMjl1ZEdWdWRDSTZXeUpqYjI1emRDQmpZV05vWlNBOUlIdDlPMXh1WTI5dWMzUWdjSEpsWm1sNFpYTWdQU0JiSjFkbFltdHBkQ2NzSjAxdmVpY3NKMDhuTENkdGN5Y3NJQ2NuWFR0Y2JtTnZibk4wSUc1MWJWQnlaV1pwZUdWeklEMGdjSEpsWm1sNFpYTXViR1Z1WjNSb08xeHViR1YwSUhSbGMzUkZiR1Z0Wlc1ME8xeHVYRzR2S2x4dUlDQWdJRlJsYzNRZ2MzUjViR1VnY0hKdmNHVnlkSGtnWm05eUlIQnlaV1pwZUdWa0lIWmxjbk5wYjI1Y2JpQWdJQ0JjYmlBZ0lDQkFjR0Z5WVcwZ1czTjBjbWx1WjEwNklGTjBlV3hsSUhCeWIzQmxjblI1WEc0Z0lDQWdRSEpsZEhWeWJpQmJjM1J5YVc1blhUb2dRMkZqYUdWa0lIQnliM0JsY25SNUlHNWhiV1ZjYmlvdlhHNWpiMjV6ZENCMFpYTjBVSEpsWm1sNElEMGdLR3RsZVNrZ1BUNGdlMXh1SUNBZ0lIUmxjM1JGYkdWdFpXNTBJRDBnZEdWemRFVnNaVzFsYm5RZ2ZId2daRzlqZFcxbGJuUXVZM0psWVhSbFJXeGxiV1Z1ZENnblpHbDJKeWs3WEc1Y2JpQWdJQ0JwWmlBb1kyRmphR1ZiYTJWNVhTQTlQVDBnWm1Gc2MyVXBJSHRjYmlBZ0lDQWdJQ0FnY21WMGRYSnVJR1poYkhObE8xeHVJQ0FnSUgwZ1pXeHpaU0I3WEc0Z0lDQWdJQ0FnSUdOaFkyaGxXMnRsZVYwZ1BTQm1ZV3h6WlR0Y2JpQWdJQ0I5WEc1Y2JpQWdJQ0JtYjNJZ0tIWmhjaUJwSUQwZ01Ec2dhU0E4SUc1MWJWQnlaV1pwZUdWek95QnBLeXNwSUh0Y2JpQWdJQ0FnSUNBZ2RtRnlJSEJ5WldacGVDQTlJSEJ5WldacGVHVnpXMmxkTEZ4dUlDQWdJQ0FnSUNBZ0lDQWdjSEpsWm1sNFpXUWdQU0FvY0hKbFptbDRJRDA5UFNBbkp5a2dQeUJyWlhrZ09pQndjbVZtYVhnZ0t5QnJaWGt1WTJoaGNrRjBLREFwTG5SdlZYQndaWEpEWVhObEtDa2dLeUJyWlhrdWMyeHBZMlVvTVNrN1hHNWNiaUFnSUNBZ0lDQWdhV1lnS0hCeVpXWnBlR1ZrSUdsdUlIUmxjM1JGYkdWdFpXNTBMbk4wZVd4bEtTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNCallXTm9aVnRyWlhsZElEMGdjSEpsWm1sNFpXUTdYRzRnSUNBZ0lDQWdJSDFjYmlBZ0lDQjlYRzRnSUNBZ1hHNGdJQ0FnY21WMGRYSnVJR05oWTJobFcydGxlVjA3WEc1OU8xeHVYRzVsZUhCdmNuUWdaR1ZtWVhWc2RDQW9hMlY1S1NBOVBpQmpZV05vWlZ0clpYbGRJSHg4SUhSbGMzUlFjbVZtYVhnb2EyVjVLVHNpWFgwPVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvYWRhcHRlci9jc3MvcHJlZml4ZXIuanNcbiAqKiBtb2R1bGUgaWQgPSAzN1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX2FscGhhID0gcmVxdWlyZSgnLi4vLi4vdmFsdWUtdHlwZXMvYWxwaGEnKTtcblxudmFyIF9hbHBoYTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9hbHBoYSk7XG5cbnZhciBfYXhlcyA9IHJlcXVpcmUoJy4uLy4uL3ZhbHVlLXR5cGVzL2F4ZXMnKTtcblxudmFyIF9heGVzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2F4ZXMpO1xuXG52YXIgX2NvbG9yID0gcmVxdWlyZSgnLi4vLi4vdmFsdWUtdHlwZXMvY29sb3InKTtcblxudmFyIF9jb2xvcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jb2xvcik7XG5cbnZhciBfY29tcGxleCA9IHJlcXVpcmUoJy4uLy4uL3ZhbHVlLXR5cGVzL2NvbXBsZXgnKTtcblxudmFyIF9jb21wbGV4MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NvbXBsZXgpO1xuXG52YXIgX3NjYWxlID0gcmVxdWlyZSgnLi4vLi4vdmFsdWUtdHlwZXMvc2NhbGUnKTtcblxudmFyIF9zY2FsZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9zY2FsZSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmV4cG9ydHMuZGVmYXVsdCA9IHtcbiAgICBmaWxsOiBfY29sb3IyLmRlZmF1bHQsXG4gICAgc3Ryb2tlOiBfY29sb3IyLmRlZmF1bHQsXG4gICAgc2NhbGU6IF9zY2FsZTIuZGVmYXVsdCxcbiAgICBzY2FsZVg6IF9zY2FsZTIuZGVmYXVsdCxcbiAgICBzY2FsZVk6IF9zY2FsZTIuZGVmYXVsdCxcbiAgICB0cmFuc2Zvcm1PcmlnaW46IF9heGVzMi5kZWZhdWx0LFxuICAgIGQ6IF9jb21wbGV4Mi5kZWZhdWx0LFxuICAgIG9wYWNpdHk6IF9hbHBoYTIuZGVmYXVsdCxcbiAgICBmaWxsT3BhY2l0eTogX2FscGhhMi5kZWZhdWx0LFxuICAgIHN0cm9rZU9wYWNpdHk6IF9hbHBoYTIuZGVmYXVsdFxufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbk55WXk5aFpHRndkR1Z5TDNOMlp5OTJZV3gxWlMxMGVYQmxMVzFoY0M1cWN5SmRMQ0p1WVcxbGN5STZXMTBzSW0xaGNIQnBibWR6SWpvaU96czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3p0clFrRk5aVHRCUVVOWUxGRkJRVWtzYVVKQlFVODdRVUZEV0N4VlFVRk5MR2xDUVVGUE8wRkJRMklzVTBGQlN5eHBRa0ZCVHp0QlFVTmFMRlZCUVUwc2FVSkJRVTg3UVVGRFlpeFZRVUZOTEdsQ1FVRlBPMEZCUTJJc2JVSkJRV1VzWjBKQlFVMDdRVUZEY2tJc1MwRkJReXh0UWtGQlV6dEJRVU5XTEZkQlFVOHNhVUpCUVU4N1FVRkRaQ3hsUVVGWExHbENRVUZQTzBGQlEyeENMR2xDUVVGaExHbENRVUZQTzBOQlEzWkNJaXdpWm1sc1pTSTZJblpoYkhWbExYUjVjR1V0YldGd0xtcHpJaXdpYzI5MWNtTmxVbTl2ZENJNklpOVZjMlZ5Y3k5TllYUjBVR1Z5Y25rdlUybDBaWE12Y0c5d2JXOTBhVzl1SWl3aWMyOTFjbU5sYzBOdmJuUmxiblFpT2xzaWFXMXdiM0owSUdGc2NHaGhJR1p5YjIwZ0p5NHVMeTR1TDNaaGJIVmxMWFI1Y0dWekwyRnNjR2hoSnp0Y2JtbHRjRzl5ZENCaGVHVnpJR1p5YjIwZ0p5NHVMeTR1TDNaaGJIVmxMWFI1Y0dWekwyRjRaWE1uTzF4dWFXMXdiM0owSUdOdmJHOXlJR1p5YjIwZ0p5NHVMeTR1TDNaaGJIVmxMWFI1Y0dWekwyTnZiRzl5Snp0Y2JtbHRjRzl5ZENCamIyMXdiR1Y0SUdaeWIyMGdKeTR1THk0dUwzWmhiSFZsTFhSNWNHVnpMMk52YlhCc1pYZ25PMXh1YVcxd2IzSjBJSE5qWVd4bElHWnliMjBnSnk0dUx5NHVMM1poYkhWbExYUjVjR1Z6TDNOallXeGxKenRjYmx4dVpYaHdiM0owSUdSbFptRjFiSFFnZTF4dUlDQWdJR1pwYkd3NklHTnZiRzl5TEZ4dUlDQWdJSE4wY205clpUb2dZMjlzYjNJc1hHNGdJQ0FnYzJOaGJHVTZJSE5qWVd4bExGeHVJQ0FnSUhOallXeGxXRG9nYzJOaGJHVXNYRzRnSUNBZ2MyTmhiR1ZaT2lCelkyRnNaU3hjYmlBZ0lDQjBjbUZ1YzJadmNtMVBjbWxuYVc0NklHRjRaWE1zWEc0Z0lDQWdaRG9nWTI5dGNHeGxlQ3hjYmlBZ0lDQnZjR0ZqYVhSNU9pQmhiSEJvWVN4Y2JpQWdJQ0JtYVd4c1QzQmhZMmwwZVRvZ1lXeHdhR0VzWEc0Z0lDQWdjM1J5YjJ0bFQzQmhZMmwwZVRvZ1lXeHdhR0ZjYm4wN0lsMTlcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2FkYXB0ZXIvc3ZnL3ZhbHVlLXR5cGUtbWFwLmpzXG4gKiogbW9kdWxlIGlkID0gMzhcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHMuZGVmYXVsdCA9IGJ1aWxkO1xuXG52YXIgX3V0aWxzID0gcmVxdWlyZSgnLi4vLi4vaW5jL3V0aWxzJyk7XG5cbnZhciBfdHJhbnNmb3JtUHJvcHMgPSByZXF1aXJlKCcuLi9jc3MvdHJhbnNmb3JtLXByb3BzJyk7XG5cbnZhciBfdHJhbnNmb3JtUHJvcHMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfdHJhbnNmb3JtUHJvcHMpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG52YXIgWkVST19OT1RfWkVSTyA9IDAuMDAwMTtcblxuZnVuY3Rpb24gYnVpbGQoc3RhdGUsIG9yaWdpbikge1xuICAgIHZhciBwcm9wcyA9IHt9LFxuICAgICAgICBoYXNUcmFuc2Zvcm0gPSBmYWxzZSxcbiAgICAgICAgc2NhbGUgPSBzdGF0ZS5zY2FsZSAhPT0gdW5kZWZpbmVkID8gc3RhdGUuc2NhbGUgfHwgWkVST19OT1RfWkVSTyA6IHN0YXRlLnNjYWxlWCB8fCAxLFxuICAgICAgICBzY2FsZVkgPSBzdGF0ZS5zY2FsZVkgIT09IHVuZGVmaW5lZCA/IHN0YXRlLnNjYWxlWSB8fCBaRVJPX05PVF9aRVJPIDogc2NhbGUgfHwgMSxcbiAgICAgICAgdHJhbnNmb3JtT3JpZ2luWCA9IG9yaWdpbi54LFxuICAgICAgICB0cmFuc2Zvcm1PcmlnaW5ZID0gb3JpZ2luLnksXG4gICAgICAgIHNjYWxlVHJhbnNmb3JtWCA9IC10cmFuc2Zvcm1PcmlnaW5YICogKHNjYWxlICogMSksXG4gICAgICAgIHNjYWxlVHJhbnNmb3JtWSA9IC10cmFuc2Zvcm1PcmlnaW5ZICogKHNjYWxlWSAqIDEpLFxuICAgICAgICBzY2FsZVJlcGxhY2VYID0gdHJhbnNmb3JtT3JpZ2luWCAvIHNjYWxlLFxuICAgICAgICBzY2FsZVJlcGxhY2VZID0gdHJhbnNmb3JtT3JpZ2luWSAvIHNjYWxlWSxcbiAgICAgICAgdHJhbnNmb3JtID0ge1xuICAgICAgICB0cmFuc2xhdGU6ICd0cmFuc2xhdGUoJyArIHN0YXRlLnRyYW5zbGF0ZVggKyAnLCAnICsgc3RhdGUudHJhbnNsYXRlWSArICcpICcsXG4gICAgICAgIHNjYWxlOiAndHJhbnNsYXRlKCcgKyBzY2FsZVRyYW5zZm9ybVggKyAnLCAnICsgc2NhbGVUcmFuc2Zvcm1ZICsgJykgc2NhbGUoJyArIHNjYWxlICsgJywgJyArIHNjYWxlWSArICcpIHRyYW5zbGF0ZSgnICsgc2NhbGVSZXBsYWNlWCArICcsICcgKyBzY2FsZVJlcGxhY2VZICsgJykgJyxcbiAgICAgICAgcm90YXRlOiAncm90YXRlKCcgKyBzdGF0ZS5yb3RhdGUgKyAnLCAnICsgdHJhbnNmb3JtT3JpZ2luWCArICcsICcgKyB0cmFuc2Zvcm1PcmlnaW5ZICsgJykgJyxcbiAgICAgICAgc2tld1g6ICdza2V3WCgnICsgc3RhdGUuc2tld1ggKyAnKSAnLFxuICAgICAgICBza2V3WTogJ3NrZXdZKCcgKyBzdGF0ZS5za2V3WSArICcpICdcbiAgICB9O1xuXG4gICAgZm9yICh2YXIga2V5IGluIHN0YXRlKSB7XG4gICAgICAgIGlmIChzdGF0ZS5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgICBpZiAoX3RyYW5zZm9ybVByb3BzMi5kZWZhdWx0W2tleV0pIHtcbiAgICAgICAgICAgICAgICBoYXNUcmFuc2Zvcm0gPSB0cnVlO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBwcm9wc1soMCwgX3V0aWxzLmNhbWVsVG9EYXNoKShrZXkpXSA9IHN0YXRlW2tleV07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoaGFzVHJhbnNmb3JtKSB7XG4gICAgICAgIHByb3BzLnRyYW5zZm9ybSA9ICcnO1xuXG4gICAgICAgIGZvciAodmFyIGtleSBpbiB0cmFuc2Zvcm0pIHtcbiAgICAgICAgICAgIGlmICh0cmFuc2Zvcm0uaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgICAgICAgIHZhciBkZWZhdWx0VmFsdWUgPSBrZXkgPT09ICdzY2FsZScgPyAnMScgOiAnMCc7XG4gICAgICAgICAgICAgICAgcHJvcHMudHJhbnNmb3JtICs9IHRyYW5zZm9ybVtrZXldLnJlcGxhY2UoL3VuZGVmaW5lZC9nLCBkZWZhdWx0VmFsdWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHByb3BzO1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluTnlZeTloWkdGd2RHVnlMM04yWnk5aWRXbHNaQzVxY3lKZExDSnVZVzFsY3lJNlcxMHNJbTFoY0hCcGJtZHpJam9pT3pzN2EwSkJTM2RDTEV0QlFVczdPenM3T3pzN096czdRVUZHTjBJc1NVRkJUU3hoUVVGaExFZEJRVWNzVFVGQlRTeERRVUZET3p0QlFVVmtMRk5CUVZNc1MwRkJTeXhEUVVGRExFdEJRVXNzUlVGQlJTeE5RVUZOTEVWQlFVVTdRVUZEZWtNc1VVRkJTU3hMUVVGTExFZEJRVWNzUlVGQlJUdFJRVU5XTEZsQlFWa3NSMEZCUnl4TFFVRkxPMUZCUTNCQ0xFdEJRVXNzUjBGQlJ5eExRVUZMTEVOQlFVTXNTMEZCU3l4TFFVRkxMRk5CUVZNc1IwRkJSeXhMUVVGTExFTkJRVU1zUzBGQlN5eEpRVUZKTEdGQlFXRXNSMEZCUnl4TFFVRkxMRU5CUVVNc1RVRkJUU3hKUVVGSkxFTkJRVU03VVVGRGNFWXNUVUZCVFN4SFFVRkhMRXRCUVVzc1EwRkJReXhOUVVGTkxFdEJRVXNzVTBGQlV5eEhRVUZITEV0QlFVc3NRMEZCUXl4TlFVRk5MRWxCUVVrc1lVRkJZU3hIUVVGSExFdEJRVXNzU1VGQlNTeERRVUZETzFGQlEyaEdMR2RDUVVGblFpeEhRVUZITEUxQlFVMHNRMEZCUXl4RFFVRkRPMUZCUXpOQ0xHZENRVUZuUWl4SFFVRkhMRTFCUVUwc1EwRkJReXhEUVVGRE8xRkJRek5DTEdWQlFXVXNSMEZCUnl4RFFVRkZMR2RDUVVGblFpeEpRVUZKTEV0QlFVc3NSMEZCUnl4RFFVRkRMRU5CUVVFc1FVRkJRenRSUVVOc1JDeGxRVUZsTEVkQlFVY3NRMEZCUlN4blFrRkJaMElzU1VGQlNTeE5RVUZOTEVkQlFVY3NRMEZCUXl4RFFVRkJMRUZCUVVNN1VVRkRia1FzWVVGQllTeEhRVUZITEdkQ1FVRm5RaXhIUVVGSExFdEJRVXM3VVVGRGVFTXNZVUZCWVN4SFFVRkhMR2RDUVVGblFpeEhRVUZITEUxQlFVMDdVVUZEZWtNc1UwRkJVeXhIUVVGSE8wRkJRMUlzYVVKQlFWTXNhVUpCUVdVc1MwRkJTeXhEUVVGRExGVkJRVlVzVlVGQlN5eExRVUZMTEVOQlFVTXNWVUZCVlN4UFFVRkpPMEZCUTJwRkxHRkJRVXNzYVVKQlFXVXNaVUZCWlN4VlFVRkxMR1ZCUVdVc1owSkJRVmNzUzBGQlN5eFZRVUZMTEUxQlFVMHNiMEpCUVdVc1lVRkJZU3hWUVVGTExHRkJRV0VzVDBGQlNUdEJRVU53U1N4alFVRk5MR05CUVZrc1MwRkJTeXhEUVVGRExFMUJRVTBzVlVGQlN5eG5Ra0ZCWjBJc1ZVRkJTeXhuUWtGQlowSXNUMEZCU1R0QlFVTTFSU3hoUVVGTExHRkJRVmNzUzBGQlN5eERRVUZETEV0QlFVc3NUMEZCU1R0QlFVTXZRaXhoUVVGTExHRkJRVmNzUzBGQlN5eERRVUZETEV0QlFVc3NUMEZCU1R0TFFVTnNReXhEUVVGRE96dEJRVVZPTEZOQlFVc3NTVUZCU1N4SFFVRkhMRWxCUVVrc1MwRkJTeXhGUVVGRk8wRkJRMjVDTEZsQlFVa3NTMEZCU3l4RFFVRkRMR05CUVdNc1EwRkJReXhIUVVGSExFTkJRVU1zUlVGQlJUdEJRVU16UWl4blFrRkJTU3g1UWtGQlpTeEhRVUZITEVOQlFVTXNSVUZCUlR0QlFVTnlRaXcwUWtGQldTeEhRVUZITEVsQlFVa3NRMEZCUXp0aFFVTjJRaXhOUVVGTk8wRkJRMGdzY1VKQlFVc3NRMEZCUXl4WFFUZENZaXhYUVVGWExFVkJOa0pqTEVkQlFVY3NRMEZCUXl4RFFVRkRMRWRCUVVjc1MwRkJTeXhEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETzJGQlEzaERPMU5CUTBvN1MwRkRTanM3UVVGRlJDeFJRVUZKTEZsQlFWa3NSVUZCUlR0QlFVTmtMR0ZCUVVzc1EwRkJReXhUUVVGVExFZEJRVWNzUlVGQlJTeERRVUZET3p0QlFVVnlRaXhoUVVGTExFbEJRVWtzUjBGQlJ5eEpRVUZKTEZOQlFWTXNSVUZCUlR0QlFVTjJRaXhuUWtGQlNTeFRRVUZUTEVOQlFVTXNZMEZCWXl4RFFVRkRMRWRCUVVjc1EwRkJReXhGUVVGRk8wRkJReTlDTEc5Q1FVRk5MRmxCUVZrc1IwRkJSeXhCUVVGRExFZEJRVWNzUzBGQlN5eFBRVUZQTEVkQlFVa3NSMEZCUnl4SFFVRkhMRWRCUVVjc1EwRkJRenRCUVVOdVJDeHhRa0ZCU3l4RFFVRkRMRk5CUVZNc1NVRkJTU3hUUVVGVExFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTXNUMEZCVHl4RFFVRkRMRmxCUVZrc1JVRkJSU3haUVVGWkxFTkJRVU1zUTBGQlF6dGhRVU42UlR0VFFVTktPMHRCUTBvN08wRkJSVVFzVjBGQlR5eExRVUZMTEVOQlFVTTdRMEZEYUVJaUxDSm1hV3hsSWpvaVluVnBiR1F1YW5NaUxDSnpiM1Z5WTJWU2IyOTBJam9pTDFWelpYSnpMMDFoZEhSUVpYSnllUzlUYVhSbGN5OXdiM0J0YjNScGIyNGlMQ0p6YjNWeVkyVnpRMjl1ZEdWdWRDSTZXeUpwYlhCdmNuUWdleUJqWVcxbGJGUnZSR0Z6YUNCOUlHWnliMjBnSnk0dUx5NHVMMmx1WXk5MWRHbHNjeWM3WEc1cGJYQnZjblFnZEhKaGJuTm1iM0p0VUhKdmNITWdabkp2YlNBbkxpNHZZM056TDNSeVlXNXpabTl5YlMxd2NtOXdjeWM3WEc1Y2JtTnZibk4wSUZwRlVrOWZUazlVWDFwRlVrOGdQU0F3TGpBd01ERTdYRzVjYm1WNGNHOXlkQ0JrWldaaGRXeDBJR1oxYm1OMGFXOXVJR0oxYVd4a0tITjBZWFJsTENCdmNtbG5hVzRwSUh0Y2JpQWdJQ0JzWlhRZ2NISnZjSE1nUFNCN2ZTeGNiaUFnSUNBZ0lDQWdhR0Z6VkhKaGJuTm1iM0p0SUQwZ1ptRnNjMlVzWEc0Z0lDQWdJQ0FnSUhOallXeGxJRDBnYzNSaGRHVXVjMk5oYkdVZ0lUMDlJSFZ1WkdWbWFXNWxaQ0EvSUhOMFlYUmxMbk5qWVd4bElIeDhJRnBGVWs5ZlRrOVVYMXBGVWs4Z09pQnpkR0YwWlM1elkyRnNaVmdnZkh3Z01TeGNiaUFnSUNBZ0lDQWdjMk5oYkdWWklEMGdjM1JoZEdVdWMyTmhiR1ZaSUNFOVBTQjFibVJsWm1sdVpXUWdQeUJ6ZEdGMFpTNXpZMkZzWlZrZ2ZId2dXa1ZTVDE5T1QxUmZXa1ZTVHlBNklITmpZV3hsSUh4OElERXNYRzRnSUNBZ0lDQWdJSFJ5WVc1elptOXliVTl5YVdkcGJsZ2dQU0J2Y21sbmFXNHVlQ3hjYmlBZ0lDQWdJQ0FnZEhKaGJuTm1iM0p0VDNKcFoybHVXU0E5SUc5eWFXZHBiaTU1TEZ4dUlDQWdJQ0FnSUNCelkyRnNaVlJ5WVc1elptOXliVmdnUFNBdElIUnlZVzV6Wm05eWJVOXlhV2RwYmxnZ0tpQW9jMk5oYkdVZ0tpQXhLU3hjYmlBZ0lDQWdJQ0FnYzJOaGJHVlVjbUZ1YzJadmNtMVpJRDBnTFNCMGNtRnVjMlp2Y20xUGNtbG5hVzVaSUNvZ0tITmpZV3hsV1NBcUlERXBMRnh1SUNBZ0lDQWdJQ0J6WTJGc1pWSmxjR3hoWTJWWUlEMGdkSEpoYm5ObWIzSnRUM0pwWjJsdVdDQXZJSE5qWVd4bExGeHVJQ0FnSUNBZ0lDQnpZMkZzWlZKbGNHeGhZMlZaSUQwZ2RISmhibk5tYjNKdFQzSnBaMmx1V1NBdklITmpZV3hsV1N4Y2JpQWdJQ0FnSUNBZ2RISmhibk5tYjNKdElEMGdlMXh1SUNBZ0lDQWdJQ0FnSUNBZ2RISmhibk5zWVhSbE9pQmdkSEpoYm5Oc1lYUmxLQ1I3YzNSaGRHVXVkSEpoYm5Oc1lYUmxXSDBzSUNSN2MzUmhkR1V1ZEhKaGJuTnNZWFJsV1gwcElHQXNYRzRnSUNBZ0lDQWdJQ0FnSUNCelkyRnNaVG9nWUhSeVlXNXpiR0YwWlNna2UzTmpZV3hsVkhKaGJuTm1iM0p0V0gwc0lDUjdjMk5oYkdWVWNtRnVjMlp2Y20xWmZTa2djMk5oYkdVb0pIdHpZMkZzWlgwc0lDUjdjMk5oYkdWWmZTa2dkSEpoYm5Oc1lYUmxLQ1I3YzJOaGJHVlNaWEJzWVdObFdIMHNJQ1I3YzJOaGJHVlNaWEJzWVdObFdYMHBJR0FzWEc0Z0lDQWdJQ0FnSUNBZ0lDQnliM1JoZEdVNklHQnliM1JoZEdVb0pIdHpkR0YwWlM1eWIzUmhkR1Y5TENBa2UzUnlZVzV6Wm05eWJVOXlhV2RwYmxoOUxDQWtlM1J5WVc1elptOXliVTl5YVdkcGJsbDlLU0JnTEZ4dUlDQWdJQ0FnSUNBZ0lDQWdjMnRsZDFnNklHQnphMlYzV0Nna2UzTjBZWFJsTG5OclpYZFlmU2tnWUN4Y2JpQWdJQ0FnSUNBZ0lDQWdJSE5yWlhkWk9pQmdjMnRsZDFrb0pIdHpkR0YwWlM1emEyVjNXWDBwSUdCY2JpQWdJQ0FnSUNBZ2ZUdGNibHh1SUNBZ0lHWnZjaUFvYkdWMElHdGxlU0JwYmlCemRHRjBaU2tnZTF4dUlDQWdJQ0FnSUNCcFppQW9jM1JoZEdVdWFHRnpUM2R1VUhKdmNHVnlkSGtvYTJWNUtTa2dlMXh1SUNBZ0lDQWdJQ0FnSUNBZ2FXWWdLSFJ5WVc1elptOXliVkJ5YjNCelcydGxlVjBwSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCb1lYTlVjbUZ1YzJadmNtMGdQU0IwY25WbE8xeHVJQ0FnSUNBZ0lDQWdJQ0FnZlNCbGJITmxJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0J3Y205d2MxdGpZVzFsYkZSdlJHRnphQ2hyWlhrcFhTQTlJSE4wWVhSbFcydGxlVjA3WEc0Z0lDQWdJQ0FnSUNBZ0lDQjlYRzRnSUNBZ0lDQWdJSDFjYmlBZ0lDQjlYRzVjYmlBZ0lDQnBaaUFvYUdGelZISmhibk5tYjNKdEtTQjdYRzRnSUNBZ0lDQWdJSEJ5YjNCekxuUnlZVzV6Wm05eWJTQTlJQ2NuTzF4dVhHNGdJQ0FnSUNBZ0lHWnZjaUFvYkdWMElHdGxlU0JwYmlCMGNtRnVjMlp2Y20wcElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUdsbUlDaDBjbUZ1YzJadmNtMHVhR0Z6VDNkdVVISnZjR1Z5ZEhrb2EyVjVLU2tnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUdOdmJuTjBJR1JsWm1GMWJIUldZV3gxWlNBOUlDaHJaWGtnUFQwOUlDZHpZMkZzWlNjcElEOGdKekVuSURvZ0p6QW5PMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJSEJ5YjNCekxuUnlZVzV6Wm05eWJTQXJQU0IwY21GdWMyWnZjbTFiYTJWNVhTNXlaWEJzWVdObEtDOTFibVJsWm1sdVpXUXZaeXdnWkdWbVlYVnNkRlpoYkhWbEtUdGNiaUFnSUNBZ0lDQWdJQ0FnSUgxY2JpQWdJQ0FnSUNBZ2ZWeHVJQ0FnSUgxY2JseHVJQ0FnSUhKbGRIVnliaUJ3Y205d2N6dGNibjBpWFgwPVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvYWRhcHRlci9zdmcvYnVpbGQuanNcbiAqKiBtb2R1bGUgaWQgPSAzOVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0cy5kZWZhdWx0ID0gYnVpbGQ7XG4vKlxuICAgIENvbnZlcnQgcGVyY2VudGFnZSB0byBwaXhlbHNcbiAgICBcbiAgICBAcGFyYW0gW251bWJlcl06IFBlcmNlbnRhZ2Ugb2YgdG90YWwgbGVuZ3RoXG4gICAgQHBhcmFtIFtudW1iZXJdOiBUb3RhbCBsZW5ndGhcbiovXG52YXIgcGVyY2VudFRvUGl4ZWxzID0gZnVuY3Rpb24gKHBlcmNlbnQsIGxlbmd0aCkge1xuICAgIHJldHVybiBwYXJzZUZsb2F0KHBlcmNlbnQpIC8gMTAwICogbGVuZ3RoICsgJ3B4Jztcbn07XG5cbmZ1bmN0aW9uIGJ1aWxkKHN0YXRlLCBsZW5ndGgpIHtcbiAgICB2YXIgc3R5bGVzID0ge307XG4gICAgdmFyIGRhc2hBcnJheVN0eWxlcyA9IHtcbiAgICAgICAgbGVuZ3RoOiAwLFxuICAgICAgICBzcGFjaW5nOiBsZW5ndGggKyAncHgnXG4gICAgfTtcbiAgICB2YXIgaGFzRGFzaEFycmF5ID0gZmFsc2U7XG5cbiAgICBmb3IgKHZhciBrZXkgaW4gc3RhdGUpIHtcbiAgICAgICAgaWYgKHN0YXRlLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICAgIHZhciB2YWx1ZSA9IHN0YXRlW2tleV07XG5cbiAgICAgICAgICAgIHN3aXRjaCAoa2V5KSB7XG4gICAgICAgICAgICAgICAgY2FzZSAnbGVuZ3RoJzpcbiAgICAgICAgICAgICAgICBjYXNlICdzcGFjaW5nJzpcbiAgICAgICAgICAgICAgICAgICAgaGFzRGFzaEFycmF5ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgZGFzaEFycmF5U3R5bGVzW2tleV0gPSBwZXJjZW50VG9QaXhlbHModmFsdWUsIGxlbmd0aCk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgJ29mZnNldCc6XG4gICAgICAgICAgICAgICAgICAgIHN0eWxlc1snc3Ryb2tlLWRhc2hvZmZzZXQnXSA9IHBlcmNlbnRUb1BpeGVscygtdmFsdWUsIGxlbmd0aCk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgIHN0eWxlc1trZXldID0gdmFsdWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoaGFzRGFzaEFycmF5KSB7XG4gICAgICAgIHN0eWxlc1snc3Ryb2tlLWRhc2hhcnJheSddID0gZGFzaEFycmF5U3R5bGVzLmxlbmd0aCArICcgJyArIGRhc2hBcnJheVN0eWxlcy5zcGFjaW5nO1xuICAgIH1cblxuICAgIHJldHVybiBzdHlsZXM7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5OeVl5OWhaR0Z3ZEdWeUwzTjJaeTF3WVhSb0wySjFhV3hrTG1weklsMHNJbTVoYldWeklqcGJYU3dpYldGd2NHbHVaM01pT2lJN096dHJRa0ZSZDBJc1MwRkJTenM3T3pzN096dEJRVVkzUWl4SlFVRk5MR1ZCUVdVc1IwRkJSeXhWUVVGRExFOUJRVThzUlVGQlJTeE5RVUZOTzFkQlFVc3NRVUZCUXl4VlFVRlZMRU5CUVVNc1QwRkJUeXhEUVVGRExFZEJRVWNzUjBGQlJ5eEhRVUZKTEUxQlFVMHNSMEZCUnl4SlFVRkpPME5CUVVFc1EwRkJRenM3UVVGRk1VVXNVMEZCVXl4TFFVRkxMRU5CUVVNc1MwRkJTeXhGUVVGRkxFMUJRVTBzUlVGQlJUdEJRVU42UXl4UlFVRk5MRTFCUVUwc1IwRkJSeXhGUVVGRkxFTkJRVU03UVVGRGJFSXNVVUZCVFN4bFFVRmxMRWRCUVVjN1FVRkRjRUlzWTBGQlRTeEZRVUZGTEVOQlFVTTdRVUZEVkN4bFFVRlBMRVZCUVVVc1RVRkJUU3hIUVVGSExFbEJRVWs3UzBGRGVrSXNRMEZCUXp0QlFVTkdMRkZCUVVrc1dVRkJXU3hIUVVGSExFdEJRVXNzUTBGQlF6czdRVUZGZWtJc1UwRkJTeXhKUVVGSkxFZEJRVWNzU1VGQlNTeExRVUZMTEVWQlFVVTdRVUZEYmtJc1dVRkJTU3hMUVVGTExFTkJRVU1zWTBGQll5eERRVUZETEVkQlFVY3NRMEZCUXl4RlFVRkZPMEZCUXpOQ0xHZENRVUZOTEV0QlFVc3NSMEZCUnl4TFFVRkxMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU03TzBGQlJYcENMRzlDUVVGUkxFZEJRVWM3UVVGRFdDeHhRa0ZCU3l4UlFVRlJMRU5CUVVNN1FVRkRaQ3h4UWtGQlN5eFRRVUZUTzBGQlExWXNaME5CUVZrc1IwRkJSeXhKUVVGSkxFTkJRVU03UVVGRGNFSXNiVU5CUVdVc1EwRkJReXhIUVVGSExFTkJRVU1zUjBGQlJ5eGxRVUZsTEVOQlFVTXNTMEZCU3l4RlFVRkZMRTFCUVUwc1EwRkJReXhEUVVGRE8wRkJRM1JFTERCQ1FVRk5PMEZCUVVFc1FVRkRWaXh4UWtGQlN5eFJRVUZSTzBGQlExUXNNRUpCUVUwc1EwRkJReXh0UWtGQmJVSXNRMEZCUXl4SFFVRkhMR1ZCUVdVc1EwRkJReXhEUVVGRExFdEJRVXNzUlVGQlJTeE5RVUZOTEVOQlFVTXNRMEZCUXp0QlFVTTVSQ3d3UWtGQlRUdEJRVUZCTEVGQlExWTdRVUZEU1N3d1FrRkJUU3hEUVVGRExFZEJRVWNzUTBGQlF5eEhRVUZITEV0QlFVc3NRMEZCUXp0QlFVRkJMR0ZCUTNaQ08xTkJRMG83UzBGRFNqczdRVUZGUkN4UlFVRkpMRmxCUVZrc1JVRkJSVHRCUVVOa0xHTkJRVTBzUTBGQlF5eHJRa0ZCYTBJc1EwRkJReXhIUVVGSExHVkJRV1VzUTBGQlF5eE5RVUZOTEVkQlFVY3NSMEZCUnl4SFFVRkhMR1ZCUVdVc1EwRkJReXhQUVVGUExFTkJRVU03UzBGRGRrWTdPMEZCUlVRc1YwRkJUeXhOUVVGTkxFTkJRVU03UTBGRGFrSWlMQ0ptYVd4bElqb2lZblZwYkdRdWFuTWlMQ0p6YjNWeVkyVlNiMjkwSWpvaUwxVnpaWEp6TDAxaGRIUlFaWEp5ZVM5VGFYUmxjeTl3YjNCdGIzUnBiMjRpTENKemIzVnlZMlZ6UTI5dWRHVnVkQ0k2V3lJdktseHVJQ0FnSUVOdmJuWmxjblFnY0dWeVkyVnVkR0ZuWlNCMGJ5QndhWGhsYkhOY2JpQWdJQ0JjYmlBZ0lDQkFjR0Z5WVcwZ1cyNTFiV0psY2wwNklGQmxjbU5sYm5SaFoyVWdiMllnZEc5MFlXd2diR1Z1WjNSb1hHNGdJQ0FnUUhCaGNtRnRJRnR1ZFcxaVpYSmRPaUJVYjNSaGJDQnNaVzVuZEdoY2Jpb3ZYRzVqYjI1emRDQndaWEpqWlc1MFZHOVFhWGhsYkhNZ1BTQW9jR1Z5WTJWdWRDd2diR1Z1WjNSb0tTQTlQaUFvY0dGeWMyVkdiRzloZENod1pYSmpaVzUwS1NBdklERXdNQ2tnS2lCc1pXNW5kR2dnS3lBbmNIZ25PMXh1WEc1bGVIQnZjblFnWkdWbVlYVnNkQ0JtZFc1amRHbHZiaUJpZFdsc1pDaHpkR0YwWlN3Z2JHVnVaM1JvS1NCN1hHNGdJQ0FnWTI5dWMzUWdjM1I1YkdWeklEMGdlMzA3WEc0Z0lDQWdZMjl1YzNRZ1pHRnphRUZ5Y21GNVUzUjViR1Z6SUQwZ2UxeHVJQ0FnSUNBZ0lDQnNaVzVuZEdnNklEQXNYRzRnSUNBZ0lDQWdJSE53WVdOcGJtYzZJR3hsYm1kMGFDQXJJQ2R3ZUNkY2JpQWdJQ0I5TzF4dUlDQWdJR3hsZENCb1lYTkVZWE5vUVhKeVlYa2dQU0JtWVd4elpUdGNibHh1SUNBZ0lHWnZjaUFvYkdWMElHdGxlU0JwYmlCemRHRjBaU2tnZTF4dUlDQWdJQ0FnSUNCcFppQW9jM1JoZEdVdWFHRnpUM2R1VUhKdmNHVnlkSGtvYTJWNUtTa2dlMXh1SUNBZ0lDQWdJQ0FnSUNBZ1kyOXVjM1FnZG1Gc2RXVWdQU0J6ZEdGMFpWdHJaWGxkTzF4dVhHNGdJQ0FnSUNBZ0lDQWdJQ0J6ZDJsMFkyZ2dLR3RsZVNrZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnWTJGelpTQW5iR1Z1WjNSb0p6cGNiaUFnSUNBZ0lDQWdJQ0FnSUdOaGMyVWdKM053WVdOcGJtY25PbHh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJR2hoYzBSaGMyaEJjbkpoZVNBOUlIUnlkV1U3WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnWkdGemFFRnljbUY1VTNSNWJHVnpXMnRsZVYwZ1BTQndaWEpqWlc1MFZHOVFhWGhsYkhNb2RtRnNkV1VzSUd4bGJtZDBhQ2s3WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnWW5KbFlXczdYRzRnSUNBZ0lDQWdJQ0FnSUNCallYTmxJQ2R2Wm1aelpYUW5PbHh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJSE4wZVd4bGMxc25jM1J5YjJ0bExXUmhjMmh2Wm1aelpYUW5YU0E5SUhCbGNtTmxiblJVYjFCcGVHVnNjeWd0ZG1Gc2RXVXNJR3hsYm1kMGFDazdYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdZbkpsWVdzN1hHNGdJQ0FnSUNBZ0lDQWdJQ0JrWldaaGRXeDBPbHh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJSE4wZVd4bGMxdHJaWGxkSUQwZ2RtRnNkV1U3WEc0Z0lDQWdJQ0FnSUNBZ0lDQjlYRzRnSUNBZ0lDQWdJSDFjYmlBZ0lDQjlYRzVjYmlBZ0lDQnBaaUFvYUdGelJHRnphRUZ5Y21GNUtTQjdYRzRnSUNBZ0lDQWdJSE4wZVd4bGMxc25jM1J5YjJ0bExXUmhjMmhoY25KaGVTZGRJRDBnWkdGemFFRnljbUY1VTNSNWJHVnpMbXhsYm1kMGFDQXJJQ2NnSnlBcklHUmhjMmhCY25KaGVWTjBlV3hsY3k1emNHRmphVzVuTzF4dUlDQWdJSDFjYmx4dUlDQWdJSEpsZEhWeWJpQnpkSGxzWlhNN1hHNTlJbDE5XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9hZGFwdGVyL3N2Zy1wYXRoL2J1aWxkLmpzXG4gKiogbW9kdWxlIGlkID0gNDBcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxudmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF9zdGF0ZU1hcCA9IHJlcXVpcmUoJy4uL2Nzcy9zdGF0ZS1tYXAnKTtcblxudmFyIF9zdGF0ZU1hcDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9zdGF0ZU1hcCk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbnZhciBTVFJPS0UgPSAnc3Ryb2tlLSc7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IF9leHRlbmRzKHt9LCBfc3RhdGVNYXAyLmRlZmF1bHQsIHtcbiAgICBvcGFjaXR5OiBTVFJPS0UgKyAnb3BhY2l0eScsXG4gICAgd2lkdGg6IFNUUk9LRSArICd3aWR0aCcsXG4gICAgbWl0ZXJsaW1pdDogU1RST0tFICsgJ21pdGVybGltaXQnXG59KTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbk55WXk5aFpHRndkR1Z5TDNOMlp5MXdZWFJvTDNOMFlYUmxMVzFoY0M1cWN5SmRMQ0p1WVcxbGN5STZXMTBzSW0xaGNIQnBibWR6SWpvaU96czdPenM3T3pzN096czdRVUZGUVN4SlFVRk5MRTFCUVUwc1IwRkJSeXhUUVVGVExFTkJRVU03T3p0QlFVbHlRaXhYUVVGUExFVkJRVXNzVFVGQlRTeFpRVUZUTzBGQlF6TkNMRk5CUVVzc1JVRkJTeXhOUVVGTkxGVkJRVTg3UVVGRGRrSXNZMEZCVlN4RlFVRkxMRTFCUVUwc1pVRkJXU0lzSW1acGJHVWlPaUp6ZEdGMFpTMXRZWEF1YW5NaUxDSnpiM1Z5WTJWU2IyOTBJam9pTDFWelpYSnpMMDFoZEhSUVpYSnllUzlUYVhSbGN5OXdiM0J0YjNScGIyNGlMQ0p6YjNWeVkyVnpRMjl1ZEdWdWRDSTZXeUpwYlhCdmNuUWdZM056VTNSaGRHVk5ZWEFnWm5KdmJTQW5MaTR2WTNOekwzTjBZWFJsTFcxaGNDYzdYRzVjYm1OdmJuTjBJRk5VVWs5TFJTQTlJQ2R6ZEhKdmEyVXRKenRjYmx4dVpYaHdiM0owSUdSbFptRjFiSFFnZTF4dUlDQWdJQzR1TG1OemMxTjBZWFJsVFdGd0xGeHVJQ0FnSUc5d1lXTnBkSGs2SUdBa2UxTlVVazlMUlgxdmNHRmphWFI1WUN4Y2JpQWdJQ0IzYVdSMGFEb2dZQ1I3VTFSU1QwdEZmWGRwWkhSb1lDeGNiaUFnSUNCdGFYUmxjbXhwYldsME9pQmdKSHRUVkZKUFMwVjliV2wwWlhKc2FXMXBkR0JjYm4wN0lsMTlcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2FkYXB0ZXIvc3ZnLXBhdGgvc3RhdGUtbWFwLmpzXG4gKiogbW9kdWxlIGlkID0gNDFcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbnZhciByZ2IgPSBleHBvcnRzLnJnYiA9IHtcbiAgICBtaW46IDAsXG4gICAgbWF4OiAyNTUsXG4gICAgcm91bmQ6IHRydWVcbn07XG5cbnZhciBvcGFjaXR5ID0gZXhwb3J0cy5vcGFjaXR5ID0ge1xuICAgIG1pbjogMCxcbiAgICBtYXg6IDFcbn07XG5cbnZhciBwZXJjZW50ID0gZXhwb3J0cy5wZXJjZW50ID0ge1xuICAgIG1pbjogMCxcbiAgICBtYXg6IDEwMCxcbiAgICB1bml0OiAnJSdcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5OeVl5OTJZV3gxWlMxMGVYQmxjeTl6WlhSMGFXNW5jeTlrWldaaGRXeDBMWEJ5YjNCekxtcHpJbDBzSW01aGJXVnpJanBiWFN3aWJXRndjR2x1WjNNaU9pSTdPenRCUVVGUExFbEJRVTBzUjBGQlJ5eFhRVUZJTEVkQlFVY3NSMEZCUnp0QlFVTm1MRTlCUVVjc1JVRkJSU3hEUVVGRE8wRkJRMDRzVDBGQlJ5eEZRVUZGTEVkQlFVYzdRVUZEVWl4VFFVRkxMRVZCUVVVc1NVRkJTVHREUVVOa0xFTkJRVU03TzBGQlJVc3NTVUZCVFN4UFFVRlBMRmRCUVZBc1QwRkJUeXhIUVVGSE8wRkJRMjVDTEU5QlFVY3NSVUZCUlN4RFFVRkRPMEZCUTA0c1QwRkJSeXhGUVVGRkxFTkJRVU03UTBGRFZDeERRVUZET3p0QlFVVkxMRWxCUVUwc1QwRkJUeXhYUVVGUUxFOUJRVThzUjBGQlJ6dEJRVU51UWl4UFFVRkhMRVZCUVVVc1EwRkJRenRCUVVOT0xFOUJRVWNzUlVGQlJTeEhRVUZITzBGQlExSXNVVUZCU1N4RlFVRkZMRWRCUVVjN1EwRkRXaXhEUVVGRElpd2labWxzWlNJNkltUmxabUYxYkhRdGNISnZjSE11YW5NaUxDSnpiM1Z5WTJWU2IyOTBJam9pTDFWelpYSnpMMDFoZEhSUVpYSnllUzlUYVhSbGN5OXdiM0J0YjNScGIyNGlMQ0p6YjNWeVkyVnpRMjl1ZEdWdWRDSTZXeUpsZUhCdmNuUWdZMjl1YzNRZ2NtZGlJRDBnZTF4dUlDQWdJRzFwYmpvZ01DeGNiaUFnSUNCdFlYZzZJREkxTlN4Y2JpQWdJQ0J5YjNWdVpEb2dkSEoxWlZ4dWZUdGNibHh1Wlhod2IzSjBJR052Ym5OMElHOXdZV05wZEhrZ1BTQjdYRzRnSUNBZ2JXbHVPaUF3TEZ4dUlDQWdJRzFoZURvZ01WeHVmVHRjYmx4dVpYaHdiM0owSUdOdmJuTjBJSEJsY21ObGJuUWdQU0I3WEc0Z0lDQWdiV2x1T2lBd0xGeHVJQ0FnSUcxaGVEb2dNVEF3TEZ4dUlDQWdJSFZ1YVhRNklDY2xKMXh1ZlRzaVhYMD1cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL3ZhbHVlLXR5cGVzL3NldHRpbmdzL2RlZmF1bHQtcHJvcHMuanNcbiAqKiBtb2R1bGUgaWQgPSA0MlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xudmFyIFggPSAnWCc7XG52YXIgWSA9ICdZJztcbnZhciBBTFBIQSA9ICdBbHBoYSc7XG5cbnZhciBheGVzID0gZXhwb3J0cy5heGVzID0gW1gsIFksICdaJ107XG52YXIgcmdiID0gZXhwb3J0cy5yZ2IgPSBbJ1JlZCcsICdHcmVlbicsICdCbHVlJywgQUxQSEFdO1xudmFyIGhzbCA9IGV4cG9ydHMuaHNsID0gWydIdWUnLCAnU2F0dXJhdGlvbicsICdMaWdodG5lc3MnLCBBTFBIQV07XG52YXIgcG9zaXRpb25zID0gZXhwb3J0cy5wb3NpdGlvbnMgPSBbJ1RvcCcsICdSaWdodCcsICdCb3R0b20nLCAnTGVmdCddO1xudmFyIHNoYWRvdyA9IGV4cG9ydHMuc2hhZG93ID0gW1gsIFksICdSYWRpdXMnLCAnU3ByZWFkJywgJ0NvbG9yJ107XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5OeVl5OTJZV3gxWlMxMGVYQmxjeTl6WlhSMGFXNW5jeTlrYVdOMGFXOXVZWEo1TG1weklsMHNJbTVoYldWeklqcGJYU3dpYldGd2NHbHVaM01pT2lJN096dEJRVUZCTEVsQlFVMHNRMEZCUXl4SFFVRkhMRWRCUVVjc1EwRkJRenRCUVVOa0xFbEJRVTBzUTBGQlF5eEhRVUZITEVkQlFVY3NRMEZCUXp0QlFVTmtMRWxCUVUwc1MwRkJTeXhIUVVGSExFOUJRVThzUTBGQlF6czdRVUZGWml4SlFVRk5MRWxCUVVrc1YwRkJTaXhKUVVGSkxFZEJRVWNzUTBGQlF5eERRVUZETEVWQlFVVXNRMEZCUXl4RlFVRkZMRWRCUVVjc1EwRkJReXhEUVVGRE8wRkJRM3BDTEVsQlFVMHNSMEZCUnl4WFFVRklMRWRCUVVjc1IwRkJSeXhEUVVGRExFdEJRVXNzUlVGQlJTeFBRVUZQTEVWQlFVVXNUVUZCVFN4RlFVRkZMRXRCUVVzc1EwRkJReXhEUVVGRE8wRkJRelZETEVsQlFVMHNSMEZCUnl4WFFVRklMRWRCUVVjc1IwRkJSeXhEUVVGRExFdEJRVXNzUlVGQlJTeFpRVUZaTEVWQlFVVXNWMEZCVnl4RlFVRkZMRXRCUVVzc1EwRkJReXhEUVVGRE8wRkJRM1JFTEVsQlFVMHNVMEZCVXl4WFFVRlVMRk5CUVZNc1IwRkJSeXhEUVVGRExFdEJRVXNzUlVGQlJTeFBRVUZQTEVWQlFVVXNVVUZCVVN4RlFVRkZMRTFCUVUwc1EwRkJReXhEUVVGRE8wRkJRM0pFTEVsQlFVMHNUVUZCVFN4WFFVRk9MRTFCUVUwc1IwRkJSeXhEUVVGRExFTkJRVU1zUlVGQlJTeERRVUZETEVWQlFVVXNVVUZCVVN4RlFVRkZMRkZCUVZFc1JVRkJSU3hQUVVGUExFTkJRVU1zUTBGQlF5SXNJbVpwYkdVaU9pSmthV04wYVc5dVlYSjVMbXB6SWl3aWMyOTFjbU5sVW05dmRDSTZJaTlWYzJWeWN5OU5ZWFIwVUdWeWNua3ZVMmwwWlhNdmNHOXdiVzkwYVc5dUlpd2ljMjkxY21ObGMwTnZiblJsYm5RaU9sc2lZMjl1YzNRZ1dDQTlJQ2RZSnp0Y2JtTnZibk4wSUZrZ1BTQW5XU2M3WEc1amIyNXpkQ0JCVEZCSVFTQTlJQ2RCYkhCb1lTYzdYRzVjYm1WNGNHOXlkQ0JqYjI1emRDQmhlR1Z6SUQwZ1cxZ3NJRmtzSUNkYUoxMDdYRzVsZUhCdmNuUWdZMjl1YzNRZ2NtZGlJRDBnV3lkU1pXUW5MQ0FuUjNKbFpXNG5MQ0FuUW14MVpTY3NJRUZNVUVoQlhUdGNibVY0Y0c5eWRDQmpiMjV6ZENCb2Myd2dQU0JiSjBoMVpTY3NJQ2RUWVhSMWNtRjBhVzl1Snl3Z0oweHBaMmgwYm1WemN5Y3NJRUZNVUVoQlhUdGNibVY0Y0c5eWRDQmpiMjV6ZENCd2IzTnBkR2x2Ym5NZ1BTQmJKMVJ2Y0Njc0lDZFNhV2RvZENjc0lDZENiM1IwYjIwbkxDQW5UR1ZtZENkZE8xeHVaWGh3YjNKMElHTnZibk4wSUhOb1lXUnZkeUE5SUZ0WUxDQlpMQ0FuVW1Ga2FYVnpKeXdnSjFOd2NtVmhaQ2NzSUNkRGIyeHZjaWRkT3lKZGZRPT1cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL3ZhbHVlLXR5cGVzL3NldHRpbmdzL2RpY3Rpb25hcnkuanNcbiAqKiBtb2R1bGUgaWQgPSA0M1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0cy5kZWFjdGl2YXRlID0gZXhwb3J0cy5nZXRQcm9jZXNzSWQgPSB1bmRlZmluZWQ7XG5leHBvcnRzLmFjdGl2YXRlID0gYWN0aXZhdGU7XG5cbnZhciBfdGltZXIgPSByZXF1aXJlKCcuL3RpbWVyJyk7XG5cbnZhciBfdGltZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfdGltZXIpO1xuXG52YXIgX3RpY2sgPSByZXF1aXJlKCcuL3RpY2snKTtcblxudmFyIF90aWNrMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3RpY2spO1xuXG52YXIgX21hbmFnZXIgPSByZXF1aXJlKCcuL21hbmFnZXInKTtcblxudmFyIF9tYW5hZ2VyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX21hbmFnZXIpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG52YXIgcHJvY2Vzc1N0ZXBPcmRlciA9IFt7IG5hbWU6ICdvbkZyYW1lU3RhcnQnIH0sIHsgbmFtZTogJ29uVXBkYXRlJyB9LCB7IG5hbWU6ICd3aWxsUmVuZGVyJywgZGVjaWRlUmVuZGVyOiB0cnVlIH0sIHsgbmFtZTogJ29uUHJlUmVuZGVyJywgaXNSZW5kZXI6IHRydWUgfSwgeyBuYW1lOiAnb25SZW5kZXInLCBpc1JlbmRlcjogdHJ1ZSB9LCB7IG5hbWU6ICdvblBvc3RSZW5kZXInLCBpc1JlbmRlcjogdHJ1ZSB9LCB7IG5hbWU6ICdvbkZyYW1lRW5kJyB9LCB7IG5hbWU6ICdvbkNsZWFudXAnIH1dOyAvKlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIENvcmUgcmVuZGVyIGxvb3BcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFNvbWUgZGVjaWNpc29ucyBoZXJlIGhhdmUgYmVlbiB0YWtlbiBpbiB0aGUgbmFtZSBvZiBwZXJmb3JtYW5jZS4gQWxsIGhhaWwgcGVyZm9ybWFuY2UuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKEl0IHR1cm5zIG91dCBtaWNyb29wdGltaXNhdGlvbnMgZG8gbWF0dGVyIHdoZW4geW91IGhhdmUgMTZtcylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICovXG5cbnZhciBudW1Qcm9jZXNzU3RlcHMgPSBwcm9jZXNzU3RlcE9yZGVyLmxlbmd0aDtcblxuLy8gW2Jvb2xlYW5dOiBJcyBsb29wIHJ1bm5pbmc/XG52YXIgaXNSdW5uaW5nID0gZmFsc2U7XG5cbi8qXG4gICAgW3RpbWVzdGFtcF06IEZyYW1lIHRpbWVzdGFtcFxuICAgIFtpbnRdOiBUaW1lIHNpbmNlIGxhc3QgZnJhbWVcbiovXG5mdW5jdGlvbiBmaXJlQWxsKGZyYW1lU3RhbXAsIGVsYXBzZWQpIHtcbiAgICB2YXIgYWN0aXZlSWRzID0gX21hbmFnZXIyLmRlZmF1bHQuZ2V0QWN0aXZlSWRzKCk7XG4gICAgdmFyIGFjdGl2ZVByb2Nlc3NDb3VudCA9IGFjdGl2ZUlkcy5sZW5ndGg7XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IG51bVByb2Nlc3NTdGVwczsgaSsrKSB7XG4gICAgICAgIHZhciBzdGVwID0gcHJvY2Vzc1N0ZXBPcmRlcltpXTtcblxuICAgICAgICBmb3IgKHZhciBpMiA9IDA7IGkyIDwgYWN0aXZlUHJvY2Vzc0NvdW50OyBpMisrKSB7XG4gICAgICAgICAgICB2YXIgcHJvY2VzcyA9IF9tYW5hZ2VyMi5kZWZhdWx0LmFjdGl2ZVByb2Nlc3Nlc1thY3RpdmVJZHNbaTJdXTtcbiAgICAgICAgICAgIHZhciByZXN1bHQgPSBmYWxzZTtcblxuICAgICAgICAgICAgLy8gQ2hlY2sgaWYgdGhpcyBwcm9jZXNzIGhhcyB0aGlzIHN0ZXAsIG9yIGlmIGl0J3MgYSByZW5kZXIgc3RlcCB0aGF0IHdlJ3JlIHJlbmRlcmluZyB0aGlzIGZyYW1lXG4gICAgICAgICAgICBpZiAocHJvY2VzcyAmJiBwcm9jZXNzW3N0ZXAubmFtZV0gJiYgKCFzdGVwLmlzUmVuZGVyIHx8IHN0ZXAuaXNSZW5kZXIgJiYgcHJvY2Vzcy5fcmVuZGVyVGhpc0ZyYW1lID09PSB0cnVlKSkge1xuICAgICAgICAgICAgICAgIHJlc3VsdCA9IHByb2Nlc3Nbc3RlcC5uYW1lXS5jYWxsKHByb2Nlc3MsIHByb2Nlc3MsIGZyYW1lU3RhbXAsIGVsYXBzZWQpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBJZiB0aGlzIGlzIGEgZGVjaWRlIHJlbmRlciBzdGVwIGFuZCBpdCByZXR1cm5zIGBmYWxzZWAsIHNldCB3aWxsUmVuZGVyIHRvIGZhbHNlXG4gICAgICAgICAgICBpZiAoc3RlcC5kZWNpZGVSZW5kZXIpIHtcbiAgICAgICAgICAgICAgICBwcm9jZXNzLl9yZW5kZXJUaGlzRnJhbWUgPSBwcm9jZXNzW3N0ZXAubmFtZV0gJiYgcmVzdWx0ICE9PSB0cnVlID8gZmFsc2UgOiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIF9tYW5hZ2VyMi5kZWZhdWx0LmdldE5vbkJhY2tncm91bmRSdW5uaW5nQ291bnQoKTtcbn1cblxuLy8gRnVuY3Rpb24gdG8gZmlyZSBldmVyeSBmcmFtZVxuZnVuY3Rpb24gZnJhbWUoZnJhbWVTdGFtcCkge1xuICAgIF90aW1lcjIuZGVmYXVsdC51cGRhdGUoZnJhbWVTdGFtcCk7XG4gICAgaXNSdW5uaW5nID0gZmlyZUFsbChmcmFtZVN0YW1wLCBfdGltZXIyLmRlZmF1bHQuZ2V0RWxhcHNlZCgpKTtcblxuICAgIGlmIChpc1J1bm5pbmcpIHtcbiAgICAgICAgKDAsIF90aWNrMi5kZWZhdWx0KShmcmFtZSk7XG4gICAgfVxufVxuXG4vLyBTdGFydCBsb29wXG5mdW5jdGlvbiBzdGFydCgpIHtcbiAgICBpZiAoIWlzUnVubmluZykge1xuICAgICAgICBfdGltZXIyLmRlZmF1bHQuc3RhcnQoKTtcbiAgICAgICAgaXNSdW5uaW5nID0gdHJ1ZTtcbiAgICAgICAgKDAsIF90aWNrMi5kZWZhdWx0KShmcmFtZSk7XG4gICAgfVxufVxuXG4vLyBFeHBvcnRzXG52YXIgZ2V0UHJvY2Vzc0lkID0gZXhwb3J0cy5nZXRQcm9jZXNzSWQgPSBfbWFuYWdlcjIuZGVmYXVsdC5nZXRQcm9jZXNzSWQ7XG5cbi8qXG4gICAgW2ludF06IFByb2Nlc3MgSUQgdG8gYWN0aXZhdGVcbiAgICBbUHJvY2Vzc106IFByb2Nlc3MgdG8gYWN0aXZhdGVcbiovXG5mdW5jdGlvbiBhY3RpdmF0ZShpZCwgcHJvY2Vzcykge1xuICAgIF9tYW5hZ2VyMi5kZWZhdWx0LmFjdGl2YXRlKGlkLCBwcm9jZXNzKTtcblxuICAgIGlmICghaXNSdW5uaW5nKSB7XG4gICAgICAgIHN0YXJ0KCk7XG4gICAgfVxufVxuXG4vKlxuICAgIFtpbnRdOiBQcm9jZXNzIElEIHRvIGRlYWN0aXZhdGVcbiovXG52YXIgZGVhY3RpdmF0ZSA9IGV4cG9ydHMuZGVhY3RpdmF0ZSA9IF9tYW5hZ2VyMi5kZWZhdWx0LmRlYWN0aXZhdGU7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5OeVl5OXdjbTlqWlhOekwyeHZiM0F1YW5NaVhTd2libUZ0WlhNaU9sdGRMQ0p0WVhCd2FXNW5jeUk2SWpzN096dFJRV2xHWjBJc1VVRkJVU3hIUVVGU0xGRkJRVkU3T3pzN096czdPenM3T3pzN096czdRVUYyUlhoQ0xFbEJRVTBzWjBKQlFXZENMRWRCUVVjc1EwRkRja0lzUlVGQlJTeEpRVUZKTEVWQlFVVXNZMEZCWXl4RlFVRkZMRVZCUTNoQ0xFVkJRVVVzU1VGQlNTeEZRVUZGTEZWQlFWVXNSVUZCUlN4RlFVTndRaXhGUVVGRkxFbEJRVWtzUlVGQlJTeFpRVUZaTEVWQlFVVXNXVUZCV1N4RlFVRkZMRWxCUVVrc1JVRkJSU3hGUVVNeFF5eEZRVUZGTEVsQlFVa3NSVUZCUlN4aFFVRmhMRVZCUVVVc1VVRkJVU3hGUVVGRkxFbEJRVWtzUlVGQlJTeEZRVU4yUXl4RlFVRkZMRWxCUVVrc1JVRkJSU3hWUVVGVkxFVkJRVVVzVVVGQlVTeEZRVUZGTEVsQlFVa3NSVUZCUlN4RlFVTndReXhGUVVGRkxFbEJRVWtzUlVGQlJTeGpRVUZqTEVWQlFVVXNVVUZCVVN4RlFVRkZMRWxCUVVrc1JVRkJSU3hGUVVONFF5eEZRVUZGTEVsQlFVa3NSVUZCUlN4WlFVRlpMRVZCUVVVc1JVRkRkRUlzUlVGQlJTeEpRVUZKTEVWQlFVVXNWMEZCVnl4RlFVRkZMRU5CUTNoQ096czdPenM3UVVGQlF6dEJRVU5HTEVsQlFVMHNaVUZCWlN4SFFVRkhMR2RDUVVGblFpeERRVUZETEUxQlFVMDdPenRCUVVGRExFRkJSMmhFTEVsQlFVa3NVMEZCVXl4SFFVRkhMRXRCUVVzN096czdPenRCUVVGRExFRkJUWFJDTEZOQlFWTXNUMEZCVHl4RFFVRkRMRlZCUVZVc1JVRkJSU3hQUVVGUExFVkJRVVU3UVVGRGJFTXNVVUZCVFN4VFFVRlRMRWRCUVVjc2EwSkJRVkVzV1VGQldTeEZRVUZGTEVOQlFVTTdRVUZEZWtNc1VVRkJUU3hyUWtGQmEwSXNSMEZCUnl4VFFVRlRMRU5CUVVNc1RVRkJUU3hEUVVGRE96dEJRVVUxUXl4VFFVRkxMRWxCUVVrc1EwRkJReXhIUVVGSExFTkJRVU1zUlVGQlJTeERRVUZETEVkQlFVY3NaVUZCWlN4RlFVRkZMRU5CUVVNc1JVRkJSU3hGUVVGRk8wRkJRM1JETEZsQlFVMHNTVUZCU1N4SFFVRkhMR2RDUVVGblFpeERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRPenRCUVVWcVF5eGhRVUZMTEVsQlFVa3NSVUZCUlN4SFFVRkhMRU5CUVVNc1JVRkJSU3hGUVVGRkxFZEJRVWNzYTBKQlFXdENMRVZCUVVVc1JVRkJSU3hGUVVGRkxFVkJRVVU3UVVGRE5VTXNaMEpCUVUwc1QwRkJUeXhIUVVGSExHdENRVUZSTEdWQlFXVXNRMEZCUXl4VFFVRlRMRU5CUVVNc1JVRkJSU3hEUVVGRExFTkJRVU1zUTBGQlF6dEJRVU4yUkN4blFrRkJTU3hOUVVGTkxFZEJRVWNzUzBGQlN6czdPMEZCUVVNc1FVRkhia0lzWjBKQlFVa3NUMEZCVHl4SlFVRkpMRTlCUVU4c1EwRkJReXhKUVVGSkxFTkJRVU1zU1VGQlNTeERRVUZETEV0QlFVc3NRMEZCUXl4SlFVRkpMRU5CUVVNc1VVRkJVU3hKUVVGTExFbEJRVWtzUTBGQlF5eFJRVUZSTEVsQlFVa3NUMEZCVHl4RFFVRkRMR2RDUVVGblFpeExRVUZMTEVsQlFVa3NRMEZCUXl4QlFVRkRMRVZCUVVVN1FVRkRNMGNzYzBKQlFVMHNSMEZCUnl4UFFVRlBMRU5CUVVNc1NVRkJTU3hEUVVGRExFbEJRVWtzUTBGQlF5eERRVUZETEVsQlFVa3NRMEZCUXl4UFFVRlBMRVZCUVVVc1QwRkJUeXhGUVVGRkxGVkJRVlVzUlVGQlJTeFBRVUZQTEVOQlFVTXNRMEZCUXp0aFFVTXpSVHM3TzBGQlFVRXNRVUZIUkN4blFrRkJTU3hKUVVGSkxFTkJRVU1zV1VGQldTeEZRVUZGTzBGQlEyNUNMSFZDUVVGUExFTkJRVU1zWjBKQlFXZENMRWRCUVVjc1FVRkJReXhQUVVGUExFTkJRVU1zU1VGQlNTeERRVUZETEVsQlFVa3NRMEZCUXl4SlFVRkpMRTFCUVUwc1MwRkJTeXhKUVVGSkxFZEJRVWtzUzBGQlN5eEhRVUZITEVsQlFVa3NRMEZCUXp0aFFVTnlSanRUUVVOS08wdEJRMG83TzBGQlJVUXNWMEZCVHl4clFrRkJVU3cwUWtGQk5FSXNSVUZCUlN4RFFVRkRPME5CUTJwRU96czdRVUZCUVN4QlFVZEVMRk5CUVZNc1MwRkJTeXhEUVVGRExGVkJRVlVzUlVGQlJUdEJRVU4yUWl4dlFrRkJUU3hOUVVGTkxFTkJRVU1zVlVGQlZTeERRVUZETEVOQlFVTTdRVUZEZWtJc1lVRkJVeXhIUVVGSExFOUJRVThzUTBGQlF5eFZRVUZWTEVWQlFVVXNaMEpCUVUwc1ZVRkJWU3hGUVVGRkxFTkJRVU1zUTBGQlF6czdRVUZGY0VRc1VVRkJTU3hUUVVGVExFVkJRVVU3UVVGRFdDdzBRa0ZCU3l4TFFVRkxMRU5CUVVNc1EwRkJRenRMUVVObU8wTkJRMG83T3p0QlFVRkJMRUZCUjBRc1UwRkJVeXhMUVVGTExFZEJRVWM3UVVGRFlpeFJRVUZKTEVOQlFVTXNVMEZCVXl4RlFVRkZPMEZCUTFvc2QwSkJRVTBzUzBGQlN5eEZRVUZGTEVOQlFVTTdRVUZEWkN4cFFrRkJVeXhIUVVGSExFbEJRVWtzUTBGQlF6dEJRVU5xUWl3MFFrRkJTeXhMUVVGTExFTkJRVU1zUTBGQlF6dExRVU5tTzBOQlEwbzdPenRCUVVGQkxFRkJSMDBzU1VGQlRTeFpRVUZaTEZkQlFWb3NXVUZCV1N4SFFVRkhMR3RDUVVGUkxGbEJRVms3T3pzN096dEJRVUZETEVGQlRURkRMRk5CUVZNc1VVRkJVU3hEUVVGRExFVkJRVVVzUlVGQlJTeFBRVUZQTEVWQlFVVTdRVUZEYkVNc2MwSkJRVkVzVVVGQlVTeERRVUZETEVWQlFVVXNSVUZCUlN4UFFVRlBMRU5CUVVNc1EwRkJRenM3UVVGRk9VSXNVVUZCU1N4RFFVRkRMRk5CUVZNc1JVRkJSVHRCUVVOYUxHRkJRVXNzUlVGQlJTeERRVUZETzB0QlExZzdRMEZEU2pzN096czdRVUZCUVN4QlFVdE5MRWxCUVUwc1ZVRkJWU3hYUVVGV0xGVkJRVlVzUjBGQlJ5eHJRa0ZCVVN4VlFVRlZMRU5CUVVNaUxDSm1hV3hsSWpvaWJHOXZjQzVxY3lJc0luTnZkWEpqWlZKdmIzUWlPaUl2VlhObGNuTXZUV0YwZEZCbGNuSjVMMU5wZEdWekwzQnZjRzF2ZEdsdmJpSXNJbk52ZFhKalpYTkRiMjUwWlc1MElqcGJJaThxWEc0Z0lDQWdRMjl5WlNCeVpXNWtaWElnYkc5dmNGeHVYRzRnSUNBZ1UyOXRaU0JrWldOcFkybHpiMjV6SUdobGNtVWdhR0YyWlNCaVpXVnVJSFJoYTJWdUlHbHVJSFJvWlNCdVlXMWxJRzltSUhCbGNtWnZjbTFoYm1ObExpQkJiR3dnYUdGcGJDQndaWEptYjNKdFlXNWpaUzVjYmlBZ0lDQW9TWFFnZEhWeWJuTWdiM1YwSUcxcFkzSnZiM0IwYVcxcGMyRjBhVzl1Y3lCa2J5QnRZWFIwWlhJZ2QyaGxiaUI1YjNVZ2FHRjJaU0F4Tm0xektWeHVLaTljYm1sdGNHOXlkQ0IwYVcxbGNpQm1jbTl0SUNjdUwzUnBiV1Z5Snp0Y2JtbHRjRzl5ZENCMGFXTnJJR1p5YjIwZ0p5NHZkR2xqYXljN1hHNXBiWEJ2Y25RZ2JXRnVZV2RsY2lCbWNtOXRJQ2N1TDIxaGJtRm5aWEluTzF4dVhHNWpiMjV6ZENCd2NtOWpaWE56VTNSbGNFOXlaR1Z5SUQwZ1cxeHVJQ0FnSUhzZ2JtRnRaVG9nSjI5dVJuSmhiV1ZUZEdGeWRDY2dmU3hjYmlBZ0lDQjdJRzVoYldVNklDZHZibFZ3WkdGMFpTY2dmU3hjYmlBZ0lDQjdJRzVoYldVNklDZDNhV3hzVW1WdVpHVnlKeXdnWkdWamFXUmxVbVZ1WkdWeU9pQjBjblZsSUgwc1hHNGdJQ0FnZXlCdVlXMWxPaUFuYjI1UWNtVlNaVzVrWlhJbkxDQnBjMUpsYm1SbGNqb2dkSEoxWlNCOUxGeHVJQ0FnSUhzZ2JtRnRaVG9nSjI5dVVtVnVaR1Z5Snl3Z2FYTlNaVzVrWlhJNklIUnlkV1VnZlN4Y2JpQWdJQ0I3SUc1aGJXVTZJQ2R2YmxCdmMzUlNaVzVrWlhJbkxDQnBjMUpsYm1SbGNqb2dkSEoxWlNCOUxGeHVJQ0FnSUhzZ2JtRnRaVG9nSjI5dVJuSmhiV1ZGYm1RbklIMHNYRzRnSUNBZ2V5QnVZVzFsT2lBbmIyNURiR1ZoYm5Wd0p5QjlYRzVkTzF4dVkyOXVjM1FnYm5WdFVISnZZMlZ6YzFOMFpYQnpJRDBnY0hKdlkyVnpjMU4wWlhCUGNtUmxjaTVzWlc1bmRHZzdYRzVjYmk4dklGdGliMjlzWldGdVhUb2dTWE1nYkc5dmNDQnlkVzV1YVc1blAxeHViR1YwSUdselVuVnVibWx1WnlBOUlHWmhiSE5sTzF4dVhHNHZLbHh1SUNBZ0lGdDBhVzFsYzNSaGJYQmRPaUJHY21GdFpTQjBhVzFsYzNSaGJYQmNiaUFnSUNCYmFXNTBYVG9nVkdsdFpTQnphVzVqWlNCc1lYTjBJR1p5WVcxbFhHNHFMMXh1Wm5WdVkzUnBiMjRnWm1seVpVRnNiQ2htY21GdFpWTjBZVzF3TENCbGJHRndjMlZrS1NCN1hHNGdJQ0FnWTI5dWMzUWdZV04wYVhabFNXUnpJRDBnYldGdVlXZGxjaTVuWlhSQlkzUnBkbVZKWkhNb0tUdGNiaUFnSUNCamIyNXpkQ0JoWTNScGRtVlFjbTlqWlhOelEyOTFiblFnUFNCaFkzUnBkbVZKWkhNdWJHVnVaM1JvTzF4dVhHNGdJQ0FnWm05eUlDaHNaWFFnYVNBOUlEQTdJR2tnUENCdWRXMVFjbTlqWlhOelUzUmxjSE03SUdrckt5a2dlMXh1SUNBZ0lDQWdJQ0JqYjI1emRDQnpkR1Z3SUQwZ2NISnZZMlZ6YzFOMFpYQlBjbVJsY2x0cFhUdGNibHh1SUNBZ0lDQWdJQ0JtYjNJZ0tHeGxkQ0JwTWlBOUlEQTdJR2t5SUR3Z1lXTjBhWFpsVUhKdlkyVnpjME52ZFc1ME95QnBNaXNyS1NCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0JqYjI1emRDQndjbTlqWlhOeklEMGdiV0Z1WVdkbGNpNWhZM1JwZG1WUWNtOWpaWE56WlhOYllXTjBhWFpsU1dSelcya3lYVjA3WEc0Z0lDQWdJQ0FnSUNBZ0lDQnNaWFFnY21WemRXeDBJRDBnWm1Gc2MyVTdYRzVjYmlBZ0lDQWdJQ0FnSUNBZ0lDOHZJRU5vWldOcklHbG1JSFJvYVhNZ2NISnZZMlZ6Y3lCb1lYTWdkR2hwY3lCemRHVndMQ0J2Y2lCcFppQnBkQ2R6SUdFZ2NtVnVaR1Z5SUhOMFpYQWdkR2hoZENCM1pTZHlaU0J5Wlc1a1pYSnBibWNnZEdocGN5Qm1jbUZ0WlZ4dUlDQWdJQ0FnSUNBZ0lDQWdhV1lnS0hCeWIyTmxjM01nSmlZZ2NISnZZMlZ6YzF0emRHVndMbTVoYldWZElDWW1JQ2doYzNSbGNDNXBjMUpsYm1SbGNpQjhmQ0FvYzNSbGNDNXBjMUpsYm1SbGNpQW1KaUJ3Y205alpYTnpMbDl5Wlc1a1pYSlVhR2x6Um5KaGJXVWdQVDA5SUhSeWRXVXBLU2tnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUhKbGMzVnNkQ0E5SUhCeWIyTmxjM05iYzNSbGNDNXVZVzFsWFM1allXeHNLSEJ5YjJObGMzTXNJSEJ5YjJObGMzTXNJR1p5WVcxbFUzUmhiWEFzSUdWc1lYQnpaV1FwTzF4dUlDQWdJQ0FnSUNBZ0lDQWdmVnh1WEc0Z0lDQWdJQ0FnSUNBZ0lDQXZMeUJKWmlCMGFHbHpJR2x6SUdFZ1pHVmphV1JsSUhKbGJtUmxjaUJ6ZEdWd0lHRnVaQ0JwZENCeVpYUjFjbTV6SUdCbVlXeHpaV0FzSUhObGRDQjNhV3hzVW1WdVpHVnlJSFJ2SUdaaGJITmxYRzRnSUNBZ0lDQWdJQ0FnSUNCcFppQW9jM1JsY0M1a1pXTnBaR1ZTWlc1a1pYSXBJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0J3Y205alpYTnpMbDl5Wlc1a1pYSlVhR2x6Um5KaGJXVWdQU0FvY0hKdlkyVnpjMXR6ZEdWd0xtNWhiV1ZkSUNZbUlISmxjM1ZzZENBaFBUMGdkSEoxWlNrZ1B5Qm1ZV3h6WlNBNklIUnlkV1U3WEc0Z0lDQWdJQ0FnSUNBZ0lDQjlYRzRnSUNBZ0lDQWdJSDFjYmlBZ0lDQjlYRzVjYmlBZ0lDQnlaWFIxY200Z2JXRnVZV2RsY2k1blpYUk9iMjVDWVdOclozSnZkVzVrVW5WdWJtbHVaME52ZFc1MEtDazdYRzU5WEc1Y2JpOHZJRVoxYm1OMGFXOXVJSFJ2SUdacGNtVWdaWFpsY25rZ1puSmhiV1ZjYm1aMWJtTjBhVzl1SUdaeVlXMWxLR1p5WVcxbFUzUmhiWEFwSUh0Y2JpQWdJQ0IwYVcxbGNpNTFjR1JoZEdVb1puSmhiV1ZUZEdGdGNDazdYRzRnSUNBZ2FYTlNkVzV1YVc1bklEMGdabWx5WlVGc2JDaG1jbUZ0WlZOMFlXMXdMQ0IwYVcxbGNpNW5aWFJGYkdGd2MyVmtLQ2twTzF4dVhHNGdJQ0FnYVdZZ0tHbHpVblZ1Ym1sdVp5a2dlMXh1SUNBZ0lDQWdJQ0IwYVdOcktHWnlZVzFsS1R0Y2JpQWdJQ0I5WEc1OVhHNWNiaTh2SUZOMFlYSjBJR3h2YjNCY2JtWjFibU4wYVc5dUlITjBZWEowS0NrZ2UxeHVJQ0FnSUdsbUlDZ2hhWE5TZFc1dWFXNW5LU0I3WEc0Z0lDQWdJQ0FnSUhScGJXVnlMbk4wWVhKMEtDazdYRzRnSUNBZ0lDQWdJR2x6VW5WdWJtbHVaeUE5SUhSeWRXVTdYRzRnSUNBZ0lDQWdJSFJwWTJzb1puSmhiV1VwTzF4dUlDQWdJSDFjYm4xY2JseHVMeThnUlhod2IzSjBjMXh1Wlhod2IzSjBJR052Ym5OMElHZGxkRkJ5YjJObGMzTkpaQ0E5SUcxaGJtRm5aWEl1WjJWMFVISnZZMlZ6YzBsa08xeHVYRzR2S2x4dUlDQWdJRnRwYm5SZE9pQlFjbTlqWlhOeklFbEVJSFJ2SUdGamRHbDJZWFJsWEc0Z0lDQWdXMUJ5YjJObGMzTmRPaUJRY205alpYTnpJSFJ2SUdGamRHbDJZWFJsWEc0cUwxeHVaWGh3YjNKMElHWjFibU4wYVc5dUlHRmpkR2wyWVhSbEtHbGtMQ0J3Y205alpYTnpLU0I3WEc0Z0lDQWdiV0Z1WVdkbGNpNWhZM1JwZG1GMFpTaHBaQ3dnY0hKdlkyVnpjeWs3WEc1Y2JpQWdJQ0JwWmlBb0lXbHpVblZ1Ym1sdVp5a2dlMXh1SUNBZ0lDQWdJQ0J6ZEdGeWRDZ3BPMXh1SUNBZ0lIMWNibjFjYmx4dUx5cGNiaUFnSUNCYmFXNTBYVG9nVUhKdlkyVnpjeUJKUkNCMGJ5QmtaV0ZqZEdsMllYUmxYRzRxTDF4dVpYaHdiM0owSUdOdmJuTjBJR1JsWVdOMGFYWmhkR1VnUFNCdFlXNWhaMlZ5TG1SbFlXTjBhWFpoZEdVN0lsMTlcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL3Byb2Nlc3MvbG9vcC5qc1xuICoqIG1vZHVsZSBpZCA9IDQ0XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHMuZGVmYXVsdCA9IGNyZWF0ZUVhc2luZ0Z1bmN0aW9uO1xuLypcbiAgICBNaXJyb3IgZWFzaW5nXG4gICAgXG4gICAgTWlycm9ycyB0aGUgcHJvdmlkZWQgZWFzaW5nIGZ1bmN0aW9uLCB1c2VkIGhlcmUgZm9yIG1pcnJvcmluZyBhblxuICAgIGVhc2VJbiBpbnRvIGFuIGVhc2VJbk91dFxuICAgIFxuICAgIEBwYXJhbSBbbnVtYmVyXTogUHJvZ3Jlc3MsIGZyb20gMCAtIDEsIG9mIGN1cnJlbnQgc2hpZnRcbiAgICBAcGFyYW0gW2Z1bmN0aW9uXTogVGhlIGVhc2luZyBmdW5jdGlvbiB0byBtaXJyb3JcbiAgICBAcmV0dXJucyBbbnVtYmVyXTogVGhlIGVhc2luZy1hZGp1c3RlZCBkZWx0YVxuKi9cbnZhciBtaXJyb3JFYXNpbmcgPSBmdW5jdGlvbiAobWV0aG9kKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChwcm9ncmVzcywgc3RyZW5ndGgpIHtcbiAgICAgICAgcmV0dXJuIHByb2dyZXNzIDw9IDAuNSA/IG1ldGhvZCgyICogcHJvZ3Jlc3MsIHN0cmVuZ3RoKSAvIDIgOiAoMiAtIG1ldGhvZCgyICogKDEgLSBwcm9ncmVzcyksIHN0cmVuZ3RoKSkgLyAyO1xuICAgIH07XG59O1xuXG4vKlxuICAgIFJldmVyc2UgZWFzaW5nXG4gICAgXG4gICAgUmV2ZXJzZXMgdGhlIG91dHB1dCBvZiB0aGUgcHJvdmlkZWQgZWFzaW5nIGZ1bmN0aW9uLCB1c2VkIGZvciBmbGlwcGluZyBlYXNlSW5cbiAgICBjdXJ2ZSB0byBhbiBlYXNlT3V0LlxuICAgIFxuICAgIEBwYXJhbSBbbnVtYmVyXTogUHJvZ3Jlc3MsIGZyb20gMCAtIDEsIG9mIGN1cnJlbnQgc2hpZnRcbiAgICBAcGFyYW0gW2Z1bmN0aW9uXTogVGhlIGVhc2luZyBmdW5jdGlvbiB0byByZXZlcnNlXG4gICAgQHJldHVybnMgW251bWJlcl06IFRoZSBlYXNpbmctYWRqdXN0ZWQgZGVsdGFcbiovXG52YXIgcmV2ZXJzZUVhc2luZyA9IGZ1bmN0aW9uIChtZXRob2QpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gKHByb2dyZXNzLCBzdHJlbmd0aCkge1xuICAgICAgICByZXR1cm4gMSAtIG1ldGhvZCgxIC0gcHJvZ3Jlc3MsIHN0cmVuZ3RoKTtcbiAgICB9O1xufTtcblxuLypcbiAgICBFYXNpbmcgY2xhc3NcblxuICAgIElmIHByb3ZpZGVkIGVhc2luZyBmdW5jdGlvbiwgcmV0dXJucyBlYXNpbmcgZnVuY3Rpb24gd2l0aCBcbiAgICBpbi9vdXQvaW5PdXQgdmFyaWF0aW9uc1xuXG4gICAgSWYgcHJvdmlkZWQgZm91ciBhcmd1bWVudHMsIHJldHVybnMgbmV3IEJlemllciBjbGFzcyBpbnN0ZWFkLlxuKi9cbmZ1bmN0aW9uIGNyZWF0ZUVhc2luZ0Z1bmN0aW9uKG1ldGhvZCkge1xuICAgIHZhciBlYXNpbmdGdW5jdGlvbiA9IGZ1bmN0aW9uIChwcm9ncmVzcywgc3RyZW5ndGgpIHtcbiAgICAgICAgcmV0dXJuIG1ldGhvZChwcm9ncmVzcywgc3RyZW5ndGgpO1xuICAgIH07XG5cbiAgICBlYXNpbmdGdW5jdGlvbi5pbiA9IGZ1bmN0aW9uIChwcm9ncmVzcywgc3RyZW5ndGgpIHtcbiAgICAgICAgcmV0dXJuIG1ldGhvZChwcm9ncmVzcywgc3RyZW5ndGgpO1xuICAgIH07XG4gICAgZWFzaW5nRnVuY3Rpb24ub3V0ID0gcmV2ZXJzZUVhc2luZyhtZXRob2QpO1xuICAgIGVhc2luZ0Z1bmN0aW9uLmluT3V0ID0gbWlycm9yRWFzaW5nKG1ldGhvZCk7XG5cbiAgICByZXR1cm4gZWFzaW5nRnVuY3Rpb247XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5OeVl5OWhZM1JwYjI1ekwyVmhjMmx1Wnk5amNtVmhkR1V0WldGemFXNW5MbXB6SWwwc0ltNWhiV1Z6SWpwYlhTd2liV0Z3Y0dsdVozTWlPaUk3T3p0clFrRm5RM2RDTEc5Q1FVRnZRanM3T3pzN096czdPenM3UVVGMFFqVkRMRWxCUVUwc1dVRkJXU3hIUVVGSExGVkJRVU1zVFVGQlRUdFhRVUZMTEZWQlFVTXNVVUZCVVN4RlFVRkZMRkZCUVZFN1pVRkJTeXhCUVVGRExGRkJRVkVzU1VGQlNTeEhRVUZITEVkQlFVa3NUVUZCVFN4RFFVRkRMRU5CUVVNc1IwRkJSeXhSUVVGUkxFVkJRVVVzVVVGQlVTeERRVUZETEVkQlFVY3NRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJReXhIUVVGSExFMUJRVTBzUTBGQlF5eERRVUZETEVsQlFVa3NRMEZCUXl4SFFVRkhMRkZCUVZFc1EwRkJRU3hCUVVGRExFVkJRVVVzVVVGQlVTeERRVUZETEVOQlFVRXNSMEZCU1N4RFFVRkRPMHRCUVVFN1EwRkJRVHM3T3pzN096czdPenM3TzBGQlFVTXNRVUZaYWtzc1NVRkJUU3hoUVVGaExFZEJRVWNzVlVGQlF5eE5RVUZOTzFkQlFVc3NWVUZCUXl4UlFVRlJMRVZCUVVVc1VVRkJVVHRsUVVGTExFTkJRVU1zUjBGQlJ5eE5RVUZOTEVOQlFVTXNRMEZCUXl4SFFVRkhMRkZCUVZFc1JVRkJSU3hSUVVGUkxFTkJRVU03UzBGQlFUdERRVUZCT3pzN096czdPenM3TzBGQlFVTXNRVUZWT1VVc1UwRkJVeXh2UWtGQmIwSXNRMEZCUXl4TlFVRk5MRVZCUVVVN1FVRkRha1FzVVVGQlNTeGpRVUZqTEVkQlFVY3NWVUZCUXl4UlFVRlJMRVZCUVVVc1VVRkJVVHRsUVVGTExFMUJRVTBzUTBGQlF5eFJRVUZSTEVWQlFVVXNVVUZCVVN4RFFVRkRPMHRCUVVFc1EwRkJRenM3UVVGRmVFVXNhMEpCUVdNc1EwRkJReXhGUVVGRkxFZEJRVWNzVlVGQlF5eFJRVUZSTEVWQlFVVXNVVUZCVVR0bFFVRkxMRTFCUVUwc1EwRkJReXhSUVVGUkxFVkJRVVVzVVVGQlVTeERRVUZETzB0QlFVRXNRMEZCUXp0QlFVTjJSU3hyUWtGQll5eERRVUZETEVkQlFVY3NSMEZCUnl4aFFVRmhMRU5CUVVNc1RVRkJUU3hEUVVGRExFTkJRVU03UVVGRE0wTXNhMEpCUVdNc1EwRkJReXhMUVVGTExFZEJRVWNzV1VGQldTeERRVUZETEUxQlFVMHNRMEZCUXl4RFFVRkRPenRCUVVVMVF5eFhRVUZQTEdOQlFXTXNRMEZCUXp0RFFVTjZRaUlzSW1acGJHVWlPaUpqY21WaGRHVXRaV0Z6YVc1bkxtcHpJaXdpYzI5MWNtTmxVbTl2ZENJNklpOVZjMlZ5Y3k5TllYUjBVR1Z5Y25rdlUybDBaWE12Y0c5d2JXOTBhVzl1SWl3aWMyOTFjbU5sYzBOdmJuUmxiblFpT2xzaUx5cGNiaUFnSUNCTmFYSnliM0lnWldGemFXNW5YRzRnSUNBZ1hHNGdJQ0FnVFdseWNtOXljeUIwYUdVZ2NISnZkbWxrWldRZ1pXRnphVzVuSUdaMWJtTjBhVzl1TENCMWMyVmtJR2hsY21VZ1ptOXlJRzFwY25KdmNtbHVaeUJoYmx4dUlDQWdJR1ZoYzJWSmJpQnBiblJ2SUdGdUlHVmhjMlZKYms5MWRGeHVJQ0FnSUZ4dUlDQWdJRUJ3WVhKaGJTQmJiblZ0WW1WeVhUb2dVSEp2WjNKbGMzTXNJR1p5YjIwZ01DQXRJREVzSUc5bUlHTjFjbkpsYm5RZ2MyaHBablJjYmlBZ0lDQkFjR0Z5WVcwZ1cyWjFibU4wYVc5dVhUb2dWR2hsSUdWaGMybHVaeUJtZFc1amRHbHZiaUIwYnlCdGFYSnliM0pjYmlBZ0lDQkFjbVYwZFhKdWN5QmJiblZ0WW1WeVhUb2dWR2hsSUdWaGMybHVaeTFoWkdwMWMzUmxaQ0JrWld4MFlWeHVLaTljYm1OdmJuTjBJRzFwY25KdmNrVmhjMmx1WnlBOUlDaHRaWFJvYjJRcElEMCtJQ2h3Y205bmNtVnpjeXdnYzNSeVpXNW5kR2dwSUQwK0lDaHdjbTluY21WemN5QThQU0F3TGpVcElEOGdiV1YwYUc5a0tESWdLaUJ3Y205bmNtVnpjeXdnYzNSeVpXNW5kR2dwSUM4Z01pQTZJQ2d5SUMwZ2JXVjBhRzlrS0RJZ0tpQW9NU0F0SUhCeWIyZHlaWE56S1N3Z2MzUnlaVzVuZEdncEtTQXZJREk3WEc0Z0lDQWdJQ0FnSUZ4dUx5cGNiaUFnSUNCU1pYWmxjbk5sSUdWaGMybHVaMXh1SUNBZ0lGeHVJQ0FnSUZKbGRtVnljMlZ6SUhSb1pTQnZkWFJ3ZFhRZ2IyWWdkR2hsSUhCeWIzWnBaR1ZrSUdWaGMybHVaeUJtZFc1amRHbHZiaXdnZFhObFpDQm1iM0lnWm14cGNIQnBibWNnWldGelpVbHVYRzRnSUNBZ1kzVnlkbVVnZEc4Z1lXNGdaV0Z6WlU5MWRDNWNiaUFnSUNCY2JpQWdJQ0JBY0dGeVlXMGdXMjUxYldKbGNsMDZJRkJ5YjJkeVpYTnpMQ0JtY205dElEQWdMU0F4TENCdlppQmpkWEp5Wlc1MElITm9hV1owWEc0Z0lDQWdRSEJoY21GdElGdG1kVzVqZEdsdmJsMDZJRlJvWlNCbFlYTnBibWNnWm5WdVkzUnBiMjRnZEc4Z2NtVjJaWEp6WlZ4dUlDQWdJRUJ5WlhSMWNtNXpJRnR1ZFcxaVpYSmRPaUJVYUdVZ1pXRnphVzVuTFdGa2FuVnpkR1ZrSUdSbGJIUmhYRzRxTDF4dVkyOXVjM1FnY21WMlpYSnpaVVZoYzJsdVp5QTlJQ2h0WlhSb2IyUXBJRDArSUNod2NtOW5jbVZ6Y3l3Z2MzUnlaVzVuZEdncElEMCtJREVnTFNCdFpYUm9iMlFvTVNBdElIQnliMmR5WlhOekxDQnpkSEpsYm1kMGFDazdYRzVjYmk4cVhHNGdJQ0FnUldGemFXNW5JR05zWVhOelhHNWNiaUFnSUNCSlppQndjbTkyYVdSbFpDQmxZWE5wYm1jZ1puVnVZM1JwYjI0c0lISmxkSFZ5Ym5NZ1pXRnphVzVuSUdaMWJtTjBhVzl1SUhkcGRHZ2dYRzRnSUNBZ2FXNHZiM1YwTDJsdVQzVjBJSFpoY21saGRHbHZibk5jYmx4dUlDQWdJRWxtSUhCeWIzWnBaR1ZrSUdadmRYSWdZWEpuZFcxbGJuUnpMQ0J5WlhSMWNtNXpJRzVsZHlCQ1pYcHBaWElnWTJ4aGMzTWdhVzV6ZEdWaFpDNWNiaW92WEc1bGVIQnZjblFnWkdWbVlYVnNkQ0JtZFc1amRHbHZiaUJqY21WaGRHVkZZWE5wYm1kR2RXNWpkR2x2YmlodFpYUm9iMlFwSUh0Y2JpQWdJQ0JzWlhRZ1pXRnphVzVuUm5WdVkzUnBiMjRnUFNBb2NISnZaM0psYzNNc0lITjBjbVZ1WjNSb0tTQTlQaUJ0WlhSb2IyUW9jSEp2WjNKbGMzTXNJSE4wY21WdVozUm9LVHRjYmx4dUlDQWdJR1ZoYzJsdVowWjFibU4wYVc5dUxtbHVJRDBnS0hCeWIyZHlaWE56TENCemRISmxibWQwYUNrZ1BUNGdiV1YwYUc5a0tIQnliMmR5WlhOekxDQnpkSEpsYm1kMGFDazdYRzRnSUNBZ1pXRnphVzVuUm5WdVkzUnBiMjR1YjNWMElEMGdjbVYyWlhKelpVVmhjMmx1WnlodFpYUm9iMlFwTzF4dUlDQWdJR1ZoYzJsdVowWjFibU4wYVc5dUxtbHVUM1YwSUQwZ2JXbHljbTl5UldGemFXNW5LRzFsZEdodlpDazdYRzVjYmlBZ0lDQnlaWFIxY200Z1pXRnphVzVuUm5WdVkzUnBiMjQ3WEc1OVhHNGlYWDA9XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9hY3Rpb25zL2Vhc2luZy9jcmVhdGUtZWFzaW5nLmpzXG4gKiogbW9kdWxlIGlkID0gNDVcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHMuZGVmYXVsdCA9IGN1YmljQmV6aWVyO1xuLypcbiAgICBCZXppZXIgZnVuY3Rpb24gZ2VuZXJhdG9yXG4gICAgICAgIFxuICAgIEdhw6t0YW4gUmVuYXVkZWF1J3MgQmV6aWVyRWFzaW5nXG4gICAgaHR0cHM6Ly9naXRodWIuY29tL2dyZS9iZXppZXItZWFzaW5nL2Jsb2IvbWFzdGVyL2luZGV4LmpzICBcbiAgICBodHRwczovL2dpdGh1Yi5jb20vZ3JlL2Jlemllci1lYXNpbmcvYmxvYi9tYXN0ZXIvTElDRU5TRVxuICAgIFlvdSdyZSBhIGhlcm9cbiAgICBcbiAgICBVc2VcbiAgICBcbiAgICAgICAgdmFyIGVhc2VPdXQgPSBuZXcgQmV6aWVyKC4xNywuNjcsLjgzLC42NyksXG4gICAgICAgICAgICB4ID0gZWFzZU91dCgwLjUpOyAvLyByZXR1cm5zIDAuNjI3Li4uXG4qL1xuXG4vLyBDb25zdGFudHNcbnZhciBORVdUT05fSVRFUkFUSU9OUyA9IDg7XG52YXIgTkVXVE9OX01JTl9TTE9QRSA9IDAuMDAxO1xudmFyIFNVQkRJVklTSU9OX1BSRUNJU0lPTiA9IDAuMDAwMDAwMTtcbnZhciBTVUJESVZJU0lPTl9NQVhfSVRFUkFUSU9OUyA9IDEwO1xudmFyIEtfU1BMSU5FX1RBQkxFX1NJWkUgPSAxMTtcbnZhciBLX1NBTVBMRV9TVEVQX1NJWkUgPSAxLjAgLyAoS19TUExJTkVfVEFCTEVfU0laRSAtIDEuMCk7XG52YXIgRkxPQVRfMzJfU1VQUE9SVEVEID0gdHlwZW9mIEZsb2F0MzJBcnJheSAhPT0gJ3VuZGVmaW5lZCc7XG5cbi8vIEhlbHBlciBtZXRob2RzXG52YXIgYSA9IGZ1bmN0aW9uIChhMSwgYTIpIHtcbiAgICByZXR1cm4gMS4wIC0gMy4wICogYTIgKyAzLjAgKiBhMTtcbn07XG52YXIgYiA9IGZ1bmN0aW9uIChhMSwgYTIpIHtcbiAgICByZXR1cm4gMy4wICogYTIgLSA2LjAgKiBhMTtcbn07XG52YXIgYyA9IGZ1bmN0aW9uIChhMSkge1xuICAgIHJldHVybiAzLjAgKiBhMTtcbn07XG5cbnZhciBnZXRTbG9wZSA9IGZ1bmN0aW9uICh0LCBhMSwgYTIpIHtcbiAgICByZXR1cm4gMy4wICogYShhMSwgYTIpICogdCAqIHQgKyAyLjAgKiBiKGExLCBhMikgKiB0ICsgYyhhMSk7XG59O1xuXG52YXIgY2FsY0JlemllciA9IGZ1bmN0aW9uICh0LCBhMSwgYTIpIHtcbiAgICByZXR1cm4gKChhKGExLCBhMikgKiB0ICsgYihhMSwgYTIpKSAqIHQgKyBjKGExKSkgKiB0O1xufTtcblxuLypcbiAgICBDcmVhdGUgYSBjdWJpYyBiZXppZXIgcmVzb2x2ZXJcbiovXG5mdW5jdGlvbiBjdWJpY0JlemllcihtWDEsIG1ZMSwgbVgyLCBtWTIpIHtcbiAgICB2YXIgc2FtcGxlVmFsdWVzID0gRkxPQVRfMzJfU1VQUE9SVEVEID8gbmV3IEZsb2F0MzJBcnJheShLX1NQTElORV9UQUJMRV9TSVpFKSA6IG5ldyBBcnJheShLX1NQTElORV9UQUJMRV9TSVpFKTtcbiAgICB2YXIgX3ByZWNvbXB1dGVkID0gZmFsc2U7XG5cbiAgICB2YXIgYmluYXJ5U3ViZGl2aWRlID0gZnVuY3Rpb24gKGFYLCBhQSwgYUIpIHtcbiAgICAgICAgdmFyIGkgPSAwO1xuICAgICAgICB2YXIgY3VycmVudFggPSB1bmRlZmluZWQ7XG4gICAgICAgIHZhciBjdXJyZW50VCA9IHVuZGVmaW5lZDtcblxuICAgICAgICBkbyB7XG4gICAgICAgICAgICBjdXJyZW50VCA9IGFBICsgKGFCIC0gYUEpIC8gMi4wO1xuICAgICAgICAgICAgY3VycmVudFggPSBjYWxjQmV6aWVyKGN1cnJlbnRULCBtWDEsIG1YMikgLSBhWDtcbiAgICAgICAgICAgIGlmIChjdXJyZW50WCA+IDAuMCkge1xuICAgICAgICAgICAgICAgIGFCID0gY3VycmVudFQ7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGFBID0gY3VycmVudFQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gd2hpbGUgKE1hdGguYWJzKGN1cnJlbnRYKSA+IFNVQkRJVklTSU9OX1BSRUNJU0lPTiAmJiArK2kgPCBTVUJESVZJU0lPTl9NQVhfSVRFUkFUSU9OUyk7XG5cbiAgICAgICAgcmV0dXJuIGN1cnJlbnRUO1xuICAgIH07XG5cbiAgICB2YXIgbmV3dG9uUmFwaHNvbkl0ZXJhdGUgPSBmdW5jdGlvbiAoYVgsIGFHdWVzc1QpIHtcbiAgICAgICAgdmFyIGkgPSAwO1xuICAgICAgICB2YXIgY3VycmVudFNsb3BlID0gMDtcbiAgICAgICAgdmFyIGN1cnJlbnRYID0gdW5kZWZpbmVkO1xuXG4gICAgICAgIGZvciAoOyBpIDwgTkVXVE9OX0lURVJBVElPTlM7ICsraSkge1xuICAgICAgICAgICAgY3VycmVudFNsb3BlID0gZ2V0U2xvcGUoYUd1ZXNzVCwgbVgxLCBtWDIpO1xuXG4gICAgICAgICAgICBpZiAoY3VycmVudFNsb3BlID09PSAwLjApIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gYUd1ZXNzVDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY3VycmVudFggPSBjYWxjQmV6aWVyKGFHdWVzc1QsIG1YMSwgbVgyKSAtIGFYO1xuICAgICAgICAgICAgYUd1ZXNzVCAtPSBjdXJyZW50WCAvIGN1cnJlbnRTbG9wZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBhR3Vlc3NUO1xuICAgIH07XG5cbiAgICB2YXIgY2FsY1NhbXBsZVZhbHVlcyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBLX1NQTElORV9UQUJMRV9TSVpFOyArK2kpIHtcbiAgICAgICAgICAgIHNhbXBsZVZhbHVlc1tpXSA9IGNhbGNCZXppZXIoaSAqIEtfU0FNUExFX1NURVBfU0laRSwgbVgxLCBtWDIpO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIHZhciBnZXRURm9yWCA9IGZ1bmN0aW9uIChhWCkge1xuICAgICAgICB2YXIgaW50ZXJ2YWxTdGFydCA9IDAuMDtcbiAgICAgICAgdmFyIGN1cnJlbnRTYW1wbGUgPSAxO1xuICAgICAgICB2YXIgbGFzdFNhbXBsZSA9IEtfU1BMSU5FX1RBQkxFX1NJWkUgLSAxO1xuICAgICAgICB2YXIgZGlzdCA9IDAuMDtcbiAgICAgICAgdmFyIGd1ZXNzRm9yVCA9IDAuMDtcbiAgICAgICAgdmFyIGluaXRpYWxTbG9wZSA9IDAuMDtcblxuICAgICAgICBmb3IgKDsgY3VycmVudFNhbXBsZSAhPSBsYXN0U2FtcGxlICYmIHNhbXBsZVZhbHVlc1tjdXJyZW50U2FtcGxlXSA8PSBhWDsgKytjdXJyZW50U2FtcGxlKSB7XG4gICAgICAgICAgICBpbnRlcnZhbFN0YXJ0ICs9IEtfU0FNUExFX1NURVBfU0laRTtcbiAgICAgICAgfVxuXG4gICAgICAgIC0tY3VycmVudFNhbXBsZTtcblxuICAgICAgICBkaXN0ID0gKGFYIC0gc2FtcGxlVmFsdWVzW2N1cnJlbnRTYW1wbGVdKSAvIChzYW1wbGVWYWx1ZXNbY3VycmVudFNhbXBsZSArIDFdIC0gc2FtcGxlVmFsdWVzW2N1cnJlbnRTYW1wbGVdKTtcbiAgICAgICAgZ3Vlc3NGb3JUID0gaW50ZXJ2YWxTdGFydCArIGRpc3QgKiBLX1NBTVBMRV9TVEVQX1NJWkU7XG5cbiAgICAgICAgaW5pdGlhbFNsb3BlID0gZ2V0U2xvcGUoZ3Vlc3NGb3JULCBtWDEsIG1YMik7XG5cbiAgICAgICAgLy8gSWYgc2xvcGUgaXMgZ3JlYXRlciB0aGFuIG1pblxuICAgICAgICBpZiAoaW5pdGlhbFNsb3BlID49IE5FV1RPTl9NSU5fU0xPUEUpIHtcbiAgICAgICAgICAgIHJldHVybiBuZXd0b25SYXBoc29uSXRlcmF0ZShhWCwgZ3Vlc3NGb3JUKTtcbiAgICAgICAgICAgIC8vIFNsb3BlIGlzIGVxdWFsIHRvIG1pblxuICAgICAgICB9IGVsc2UgaWYgKGluaXRpYWxTbG9wZSA9PT0gMC4wKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGd1ZXNzRm9yVDtcbiAgICAgICAgICAgICAgICAvLyBTbG9wZSBpcyBsZXNzIHRoYW4gbWluXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gYmluYXJ5U3ViZGl2aWRlKGFYLCBpbnRlcnZhbFN0YXJ0LCBpbnRlcnZhbFN0YXJ0ICsgS19TQU1QTEVfU1RFUF9TSVpFKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgfTtcblxuICAgIHZhciBwcmVjb21wdXRlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBfcHJlY29tcHV0ZWQgPSB0cnVlO1xuICAgICAgICBpZiAobVgxICE9IG1ZMSB8fCBtWDIgIT0gbVkyKSB7XG4gICAgICAgICAgICBjYWxjU2FtcGxlVmFsdWVzKCk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgdmFyIHJlc29sdmVyID0gZnVuY3Rpb24gKGFYKSB7XG4gICAgICAgIHZhciByZXR1cm5WYWx1ZSA9IHVuZGVmaW5lZDtcblxuICAgICAgICBpZiAoIV9wcmVjb21wdXRlZCkge1xuICAgICAgICAgICAgcHJlY29tcHV0ZSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gSWYgbGluZWFyIGdyYWRpZW50LCByZXR1cm4gWCBhcyBUXG4gICAgICAgIGlmIChtWDEgPT09IG1ZMSAmJiBtWDIgPT09IG1ZMikge1xuICAgICAgICAgICAgcmV0dXJuVmFsdWUgPSBhWDtcblxuICAgICAgICAgICAgLy8gSWYgYXQgc3RhcnQsIHJldHVybiAwXG4gICAgICAgIH0gZWxzZSBpZiAoYVggPT09IDApIHtcbiAgICAgICAgICAgICAgICByZXR1cm5WYWx1ZSA9IDA7XG5cbiAgICAgICAgICAgICAgICAvLyBJZiBhdCBlbmQsIHJldHVybiAxXG4gICAgICAgICAgICB9IGVsc2UgaWYgKGFYID09PSAxKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVyblZhbHVlID0gMTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm5WYWx1ZSA9IGNhbGNCZXppZXIoZ2V0VEZvclgoYVgpLCBtWTEsIG1ZMik7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiByZXR1cm5WYWx1ZTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIHJlc29sdmVyO1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluTnlZeTloWTNScGIyNXpMMlZoYzJsdVp5OWpjbVZoZEdVdFltVjZhV1Z5TG1weklsMHNJbTVoYldWeklqcGJYU3dpYldGd2NHbHVaM01pT2lJN096dHJRa0Z0UTNkQ0xGZEJRVmM3T3pzN096czdPenM3T3pzN096czdRVUZ3UW01RExFbEJRVTBzYVVKQlFXbENMRWRCUVVjc1EwRkJReXhEUVVGRE8wRkJRelZDTEVsQlFVMHNaMEpCUVdkQ0xFZEJRVWNzUzBGQlN5eERRVUZETzBGQlF5OUNMRWxCUVUwc2NVSkJRWEZDTEVkQlFVY3NVMEZCVXl4RFFVRkRPMEZCUTNoRExFbEJRVTBzTUVKQlFUQkNMRWRCUVVjc1JVRkJSU3hEUVVGRE8wRkJRM1JETEVsQlFVMHNiVUpCUVcxQ0xFZEJRVWNzUlVGQlJTeERRVUZETzBGQlF5OUNMRWxCUVUwc2EwSkJRV3RDTEVkQlFVY3NSMEZCUnl4SlFVRkpMRzFDUVVGdFFpeEhRVUZITEVkQlFVY3NRMEZCUVN4QlFVRkRMRU5CUVVNN1FVRkROMFFzU1VGQlRTeHJRa0ZCYTBJc1IwRkJTU3hQUVVGUExGbEJRVmtzUzBGQlN5eFhRVUZYTEVGQlFVTTdPenRCUVVGRExFRkJSMnBGTEVsQlFVMHNRMEZCUXl4SFFVRkhMRlZCUVVNc1JVRkJSU3hGUVVGRkxFVkJRVVU3VjBGQlN5eEhRVUZITEVkQlFVY3NSMEZCUnl4SFFVRkhMRVZCUVVVc1IwRkJSeXhIUVVGSExFZEJRVWNzUlVGQlJUdERRVUZCTEVOQlFVTTdRVUZEYUVRc1NVRkJUU3hEUVVGRExFZEJRVWNzVlVGQlF5eEZRVUZGTEVWQlFVVXNSVUZCUlR0WFFVRkxMRWRCUVVjc1IwRkJSeXhGUVVGRkxFZEJRVWNzUjBGQlJ5eEhRVUZITEVWQlFVVTdRMEZCUVN4RFFVRkRPMEZCUXpGRExFbEJRVTBzUTBGQlF5eEhRVUZITEZWQlFVTXNSVUZCUlR0WFFVRkxMRWRCUVVjc1IwRkJSeXhGUVVGRk8wTkJRVUVzUTBGQlF6czdRVUZGTTBJc1NVRkJUU3hSUVVGUkxFZEJRVWNzVlVGQlF5eERRVUZETEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVN1YwRkJTeXhIUVVGSExFZEJRVWNzUTBGQlF5eERRVUZETEVWQlFVVXNSVUZCUlN4RlFVRkZMRU5CUVVNc1IwRkJSeXhEUVVGRExFZEJRVWNzUTBGQlF5eEhRVUZITEVkQlFVY3NSMEZCUnl4RFFVRkRMRU5CUVVNc1JVRkJSU3hGUVVGRkxFVkJRVVVzUTBGQlF5eEhRVUZITEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNc1JVRkJSU3hEUVVGRE8wTkJRVUVzUTBGQlF6czdRVUZGZEVZc1NVRkJUU3hWUVVGVkxFZEJRVWNzVlVGQlF5eERRVUZETEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVN1YwRkJTeXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETEVWQlFVVXNSVUZCUlN4RlFVRkZMRU5CUVVNc1IwRkJSeXhEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETEVWQlFVVXNSVUZCUlN4RlFVRkZMRU5CUVVNc1EwRkJRU3hIUVVGSkxFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTXNSVUZCUlN4RFFVRkRMRU5CUVVFc1IwRkJTU3hEUVVGRE8wTkJRVUU3T3pzN08wRkJRVU1zUVVGTGFrVXNVMEZCVXl4WFFVRlhMRU5CUVVNc1IwRkJSeXhGUVVGRkxFZEJRVWNzUlVGQlJTeEhRVUZITEVWQlFVVXNSMEZCUnl4RlFVRkZPMEZCUTNCRUxGRkJRVTBzV1VGQldTeEhRVUZITEd0Q1FVRnJRaXhIUVVGSExFbEJRVWtzV1VGQldTeERRVUZETEcxQ1FVRnRRaXhEUVVGRExFZEJRVWNzU1VGQlNTeExRVUZMTEVOQlFVTXNiVUpCUVcxQ0xFTkJRVU1zUTBGQlF6dEJRVU5xU0N4UlFVRkpMRmxCUVZrc1IwRkJSeXhMUVVGTExFTkJRVU03TzBGQlJYcENMRkZCUVUwc1pVRkJaU3hIUVVGSExGVkJRVU1zUlVGQlJTeEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVzN1FVRkRjRU1zV1VGQlNTeERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRPMEZCUTFZc1dVRkJTU3hSUVVGUkxGbEJRVUVzUTBGQlF6dEJRVU5pTEZsQlFVa3NVVUZCVVN4WlFVRkJMRU5CUVVNN08wRkJSV0lzVjBGQlJ6dEJRVU5ETEc5Q1FVRlJMRWRCUVVjc1JVRkJSU3hIUVVGSExFTkJRVU1zUlVGQlJTeEhRVUZITEVWQlFVVXNRMEZCUVN4SFFVRkpMRWRCUVVjc1EwRkJRenRCUVVOb1F5eHZRa0ZCVVN4SFFVRkhMRlZCUVZVc1EwRkJReXhSUVVGUkxFVkJRVVVzUjBGQlJ5eEZRVUZGTEVkQlFVY3NRMEZCUXl4SFFVRkhMRVZCUVVVc1EwRkJRenRCUVVNdlF5eG5Ra0ZCU1N4UlFVRlJMRWRCUVVjc1IwRkJSeXhGUVVGRk8wRkJRMmhDTEd0Q1FVRkZMRWRCUVVjc1VVRkJVU3hEUVVGRE8yRkJRMnBDTEUxQlFVMDdRVUZEU0N4clFrRkJSU3hIUVVGSExGRkJRVkVzUTBGQlF6dGhRVU5xUWp0VFFVTktMRkZCUVZFc1NVRkJTU3hEUVVGRExFZEJRVWNzUTBGQlF5eFJRVUZSTEVOQlFVTXNSMEZCUnl4eFFrRkJjVUlzU1VGQlNTeEZRVUZGTEVOQlFVTXNSMEZCUnl3d1FrRkJNRUlzUlVGQlJUczdRVUZGZWtZc1pVRkJUeXhSUVVGUkxFTkJRVU03UzBGRGJrSXNRMEZCUXpzN1FVRkZSaXhSUVVGTkxHOUNRVUZ2UWl4SFFVRkhMRlZCUVVNc1JVRkJSU3hGUVVGRkxFOUJRVThzUlVGQlN6dEJRVU14UXl4WlFVRkpMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU03UVVGRFZpeFpRVUZKTEZsQlFWa3NSMEZCUnl4RFFVRkRMRU5CUVVNN1FVRkRja0lzV1VGQlNTeFJRVUZSTEZsQlFVRXNRMEZCUXpzN1FVRkZZaXhsUVVGUExFTkJRVU1zUjBGQlJ5eHBRa0ZCYVVJc1JVRkJSU3hGUVVGRkxFTkJRVU1zUlVGQlJUdEJRVU12UWl4M1FrRkJXU3hIUVVGSExGRkJRVkVzUTBGQlF5eFBRVUZQTEVWQlFVVXNSMEZCUnl4RlFVRkZMRWRCUVVjc1EwRkJReXhEUVVGRE96dEJRVVV6UXl4blFrRkJTU3haUVVGWkxFdEJRVXNzUjBGQlJ5eEZRVUZGTzBGQlEzUkNMSFZDUVVGUExFOUJRVThzUTBGQlF6dGhRVU5zUWpzN1FVRkZSQ3h2UWtGQlVTeEhRVUZITEZWQlFWVXNRMEZCUXl4UFFVRlBMRVZCUVVVc1IwRkJSeXhGUVVGRkxFZEJRVWNzUTBGQlF5eEhRVUZITEVWQlFVVXNRMEZCUXp0QlFVTTVReXh0UWtGQlR5eEpRVUZKTEZGQlFWRXNSMEZCUnl4WlFVRlpMRU5CUVVNN1UwRkRkRU03TzBGQlJVUXNaVUZCVHl4UFFVRlBMRU5CUVVNN1MwRkRiRUlzUTBGQlF6czdRVUZGUml4UlFVRk5MR2RDUVVGblFpeEhRVUZITEZsQlFVMDdRVUZETTBJc1lVRkJTeXhKUVVGSkxFTkJRVU1zUjBGQlJ5eERRVUZETEVWQlFVVXNRMEZCUXl4SFFVRkhMRzFDUVVGdFFpeEZRVUZGTEVWQlFVVXNRMEZCUXl4RlFVRkZPMEZCUXpGRExIZENRVUZaTEVOQlFVTXNRMEZCUXl4RFFVRkRMRWRCUVVjc1ZVRkJWU3hEUVVGRExFTkJRVU1zUjBGQlJ5eHJRa0ZCYTBJc1JVRkJSU3hIUVVGSExFVkJRVVVzUjBGQlJ5eERRVUZETEVOQlFVTTdVMEZEYkVVN1MwRkRTaXhEUVVGRE96dEJRVVZHTEZGQlFVMHNVVUZCVVN4SFFVRkhMRlZCUVVNc1JVRkJSU3hGUVVGTE8wRkJRM0pDTEZsQlFVa3NZVUZCWVN4SFFVRkhMRWRCUVVjc1EwRkJRenRCUVVONFFpeFpRVUZKTEdGQlFXRXNSMEZCUnl4RFFVRkRMRU5CUVVNN1FVRkRkRUlzV1VGQlNTeFZRVUZWTEVkQlFVY3NiVUpCUVcxQ0xFZEJRVWNzUTBGQlF5eERRVUZETzBGQlEzcERMRmxCUVVrc1NVRkJTU3hIUVVGSExFZEJRVWNzUTBGQlF6dEJRVU5tTEZsQlFVa3NVMEZCVXl4SFFVRkhMRWRCUVVjc1EwRkJRenRCUVVOd1FpeFpRVUZKTEZsQlFWa3NSMEZCUnl4SFFVRkhMRU5CUVVNN08wRkJSWFpDTEdWQlFVOHNZVUZCWVN4SlFVRkpMRlZCUVZVc1NVRkJTU3haUVVGWkxFTkJRVU1zWVVGQllTeERRVUZETEVsQlFVa3NSVUZCUlN4RlFVRkZMRVZCUVVVc1lVRkJZU3hGUVVGRk8wRkJRM1JHTEhsQ1FVRmhMRWxCUVVrc2EwSkJRV3RDTEVOQlFVTTdVMEZEZGtNN08wRkJSVVFzVlVGQlJTeGhRVUZoTEVOQlFVTTdPMEZCUldoQ0xGbEJRVWtzUjBGQlJ5eERRVUZETEVWQlFVVXNSMEZCUnl4WlFVRlpMRU5CUVVNc1lVRkJZU3hEUVVGRExFTkJRVUVzU1VGQlN5eFpRVUZaTEVOQlFVTXNZVUZCWVN4SFFVRkRMRU5CUVVNc1EwRkJReXhIUVVGSExGbEJRVmtzUTBGQlF5eGhRVUZoTEVOQlFVTXNRMEZCUVN4QlFVRkRMRU5CUVVNN1FVRkRNVWNzYVVKQlFWTXNSMEZCUnl4aFFVRmhMRWRCUVVjc1NVRkJTU3hIUVVGSExHdENRVUZyUWl4RFFVRkRPenRCUVVWMFJDeHZRa0ZCV1N4SFFVRkhMRkZCUVZFc1EwRkJReXhUUVVGVExFVkJRVVVzUjBGQlJ5eEZRVUZGTEVkQlFVY3NRMEZCUXpzN08wRkJRVU1zUVVGSE4wTXNXVUZCU1N4WlFVRlpMRWxCUVVrc1owSkJRV2RDTEVWQlFVVTdRVUZEYkVNc2JVSkJRVThzYjBKQlFXOUNMRU5CUVVNc1JVRkJSU3hGUVVGRkxGTkJRVk1zUTBGQlF6czdRVUZCUXl4VFFVVTVReXhOUVVGTkxFbEJRVWtzV1VGQldTeExRVUZMTEVkQlFVY3NSVUZCUlR0QlFVTTNRaXgxUWtGQlR5eFRRVUZUT3p0QlFVRkRMR0ZCUlhCQ0xFMUJRVTA3UVVGRFNDd3lRa0ZCVHl4bFFVRmxMRU5CUVVNc1JVRkJSU3hGUVVGRkxHRkJRV0VzUlVGQlJTeGhRVUZoTEVkQlFVY3NhMEpCUVd0Q0xFTkJRVU1zUTBGQlF6dHBRa0ZEYWtZN1MwRkRTaXhEUVVGRE96dEJRVVZHTEZGQlFVMHNWVUZCVlN4SFFVRkhMRmxCUVUwN1FVRkRja0lzYjBKQlFWa3NSMEZCUnl4SlFVRkpMRU5CUVVNN1FVRkRjRUlzV1VGQlNTeEhRVUZITEVsQlFVa3NSMEZCUnl4SlFVRkpMRWRCUVVjc1NVRkJTU3hIUVVGSExFVkJRVVU3UVVGRE1VSXNORUpCUVdkQ0xFVkJRVVVzUTBGQlF6dFRRVU4wUWp0TFFVTktMRU5CUVVNN08wRkJSVVlzVVVGQlRTeFJRVUZSTEVkQlFVY3NWVUZCUXl4RlFVRkZMRVZCUVVzN1FVRkRja0lzV1VGQlNTeFhRVUZYTEZsQlFVRXNRMEZCUXpzN1FVRkZhRUlzV1VGQlNTeERRVUZETEZsQlFWa3NSVUZCUlR0QlFVTm1MSE5DUVVGVkxFVkJRVVVzUTBGQlF6dFRRVU5vUWpzN08wRkJRVUVzUVVGSFJDeFpRVUZKTEVkQlFVY3NTMEZCU3l4SFFVRkhMRWxCUVVrc1IwRkJSeXhMUVVGTExFZEJRVWNzUlVGQlJUdEJRVU0xUWl4MVFrRkJWeXhIUVVGSExFVkJRVVU3T3p0QlFVRkRMRk5CUjNCQ0xFMUJRVTBzU1VGQlNTeEZRVUZGTEV0QlFVc3NRMEZCUXl4RlFVRkZPMEZCUTJwQ0xESkNRVUZYTEVkQlFVY3NRMEZCUXpzN08wRkJRVU1zWVVGSGJrSXNUVUZCVFN4SlFVRkpMRVZCUVVVc1MwRkJTeXhEUVVGRExFVkJRVVU3UVVGRGFrSXNLMEpCUVZjc1IwRkJSeXhEUVVGRExFTkJRVU03YVVKQlJXNUNMRTFCUVUwN1FVRkRTQ3dyUWtGQlZ5eEhRVUZITEZWQlFWVXNRMEZCUXl4UlFVRlJMRU5CUVVNc1JVRkJSU3hEUVVGRExFVkJRVVVzUjBGQlJ5eEZRVUZGTEVkQlFVY3NRMEZCUXl4RFFVRkRPMmxDUVVOd1JEczdRVUZGUkN4bFFVRlBMRmRCUVZjc1EwRkJRenRMUVVOMFFpeERRVUZET3p0QlFVVkdMRmRCUVU4c1VVRkJVU3hEUVVGRE8wTkJRMjVDSWl3aVptbHNaU0k2SW1OeVpXRjBaUzFpWlhwcFpYSXVhbk1pTENKemIzVnlZMlZTYjI5MElqb2lMMVZ6WlhKekwwMWhkSFJRWlhKeWVTOVRhWFJsY3k5d2IzQnRiM1JwYjI0aUxDSnpiM1Z5WTJWelEyOXVkR1Z1ZENJNld5SXZLbHh1SUNBZ0lFSmxlbWxsY2lCbWRXNWpkR2x2YmlCblpXNWxjbUYwYjNKY2JpQWdJQ0FnSUNBZ1hHNGdJQ0FnUjJIRHEzUmhiaUJTWlc1aGRXUmxZWFVuY3lCQ1pYcHBaWEpGWVhOcGJtZGNiaUFnSUNCb2RIUndjem92TDJkcGRHaDFZaTVqYjIwdlozSmxMMkpsZW1sbGNpMWxZWE5wYm1jdllteHZZaTl0WVhOMFpYSXZhVzVrWlhndWFuTWdJRnh1SUNBZ0lHaDBkSEJ6T2k4dloybDBhSFZpTG1OdmJTOW5jbVV2WW1WNmFXVnlMV1ZoYzJsdVp5OWliRzlpTDIxaGMzUmxjaTlNU1VORlRsTkZYRzRnSUNBZ1dXOTFKM0psSUdFZ2FHVnliMXh1SUNBZ0lGeHVJQ0FnSUZWelpWeHVJQ0FnSUZ4dUlDQWdJQ0FnSUNCMllYSWdaV0Z6WlU5MWRDQTlJRzVsZHlCQ1pYcHBaWElvTGpFM0xDNDJOeXd1T0RNc0xqWTNLU3hjYmlBZ0lDQWdJQ0FnSUNBZ0lIZ2dQU0JsWVhObFQzVjBLREF1TlNrN0lDOHZJSEpsZEhWeWJuTWdNQzQyTWpjdUxpNWNiaW92WEc1Y2JpOHZJRU52Ym5OMFlXNTBjMXh1WTI5dWMzUWdUa1ZYVkU5T1gwbFVSVkpCVkVsUFRsTWdQU0E0TzF4dVkyOXVjM1FnVGtWWFZFOU9YMDFKVGw5VFRFOVFSU0E5SURBdU1EQXhPMXh1WTI5dWMzUWdVMVZDUkVsV1NWTkpUMDVmVUZKRlEwbFRTVTlPSUQwZ01DNHdNREF3TURBeE8xeHVZMjl1YzNRZ1UxVkNSRWxXU1ZOSlQwNWZUVUZZWDBsVVJWSkJWRWxQVGxNZ1BTQXhNRHRjYm1OdmJuTjBJRXRmVTFCTVNVNUZYMVJCUWt4RlgxTkpXa1VnUFNBeE1UdGNibU52Ym5OMElFdGZVMEZOVUV4RlgxTlVSVkJmVTBsYVJTQTlJREV1TUNBdklDaExYMU5RVEVsT1JWOVVRVUpNUlY5VFNWcEZJQzBnTVM0d0tUdGNibU52Ym5OMElFWk1UMEZVWHpNeVgxTlZVRkJQVWxSRlJDQTlJQ2gwZVhCbGIyWWdSbXh2WVhRek1rRnljbUY1SUNFOVBTQW5kVzVrWldacGJtVmtKeWs3WEc1Y2JpOHZJRWhsYkhCbGNpQnRaWFJvYjJSelhHNWpiMjV6ZENCaElEMGdLR0V4TENCaE1pa2dQVDRnTVM0d0lDMGdNeTR3SUNvZ1lUSWdLeUF6TGpBZ0tpQmhNVHRjYm1OdmJuTjBJR0lnUFNBb1lURXNJR0V5S1NBOVBpQXpMakFnS2lCaE1pQXRJRFl1TUNBcUlHRXhPMXh1WTI5dWMzUWdZeUE5SUNoaE1Ta2dQVDRnTXk0d0lDb2dZVEU3WEc1Y2JtTnZibk4wSUdkbGRGTnNiM0JsSUQwZ0tIUXNJR0V4TENCaE1pa2dQVDRnTXk0d0lDb2dZU2hoTVN3Z1lUSXBJQ29nZENBcUlIUWdLeUF5TGpBZ0tpQmlLR0V4TENCaE1pa2dLaUIwSUNzZ1l5aGhNU2s3WEc1Y2JtTnZibk4wSUdOaGJHTkNaWHBwWlhJZ1BTQW9kQ3dnWVRFc0lHRXlLU0E5UGlBb0tHRW9ZVEVzSUdFeUtTQXFJSFFnS3lCaUtHRXhMQ0JoTWlrcElDb2dkQ0FySUdNb1lURXBLU0FxSUhRN1hHNWNiaThxWEc0Z0lDQWdRM0psWVhSbElHRWdZM1ZpYVdNZ1ltVjZhV1Z5SUhKbGMyOXNkbVZ5WEc0cUwxeHVaWGh3YjNKMElHUmxabUYxYkhRZ1puVnVZM1JwYjI0Z1kzVmlhV05DWlhwcFpYSW9iVmd4TENCdFdURXNJRzFZTWl3Z2JWa3lLU0I3WEc0Z0lDQWdZMjl1YzNRZ2MyRnRjR3hsVm1Gc2RXVnpJRDBnUmt4UFFWUmZNekpmVTFWUVVFOVNWRVZFSUQ4Z2JtVjNJRVpzYjJGME16SkJjbkpoZVNoTFgxTlFURWxPUlY5VVFVSk1SVjlUU1ZwRktTQTZJRzVsZHlCQmNuSmhlU2hMWDFOUVRFbE9SVjlVUVVKTVJWOVRTVnBGS1R0Y2JpQWdJQ0JzWlhRZ1gzQnlaV052YlhCMWRHVmtJRDBnWm1Gc2MyVTdYRzVjYmlBZ0lDQmpiMjV6ZENCaWFXNWhjbmxUZFdKa2FYWnBaR1VnUFNBb1lWZ3NJR0ZCTENCaFFpa2dQVDRnZTF4dUlDQWdJQ0FnSUNCc1pYUWdhU0E5SURBN1hHNGdJQ0FnSUNBZ0lHeGxkQ0JqZFhKeVpXNTBXRHRjYmlBZ0lDQWdJQ0FnYkdWMElHTjFjbkpsYm5SVU8xeHVYRzRnSUNBZ0lDQWdJR1J2SUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJR04xY25KbGJuUlVJRDBnWVVFZ0t5QW9ZVUlnTFNCaFFTa2dMeUF5TGpBN1hHNGdJQ0FnSUNBZ0lDQWdJQ0JqZFhKeVpXNTBXQ0E5SUdOaGJHTkNaWHBwWlhJb1kzVnljbVZ1ZEZRc0lHMVlNU3dnYlZneUtTQXRJR0ZZTzF4dUlDQWdJQ0FnSUNBZ0lDQWdhV1lnS0dOMWNuSmxiblJZSUQ0Z01DNHdLU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnWVVJZ1BTQmpkWEp5Wlc1MFZEdGNiaUFnSUNBZ0lDQWdJQ0FnSUgwZ1pXeHpaU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnWVVFZ1BTQmpkWEp5Wlc1MFZEdGNiaUFnSUNBZ0lDQWdJQ0FnSUgxY2JpQWdJQ0FnSUNBZ2ZTQjNhR2xzWlNBb1RXRjBhQzVoWW5Nb1kzVnljbVZ1ZEZncElENGdVMVZDUkVsV1NWTkpUMDVmVUZKRlEwbFRTVTlPSUNZbUlDc3JhU0E4SUZOVlFrUkpWa2xUU1U5T1gwMUJXRjlKVkVWU1FWUkpUMDVUS1R0Y2JseHVJQ0FnSUNBZ0lDQnlaWFIxY200Z1kzVnljbVZ1ZEZRN1hHNGdJQ0FnZlR0Y2JseHVJQ0FnSUdOdmJuTjBJRzVsZDNSdmJsSmhjR2h6YjI1SmRHVnlZWFJsSUQwZ0tHRllMQ0JoUjNWbGMzTlVLU0E5UGlCN1hHNGdJQ0FnSUNBZ0lHeGxkQ0JwSUQwZ01EdGNiaUFnSUNBZ0lDQWdiR1YwSUdOMWNuSmxiblJUYkc5d1pTQTlJREE3WEc0Z0lDQWdJQ0FnSUd4bGRDQmpkWEp5Wlc1MFdEdGNibHh1SUNBZ0lDQWdJQ0JtYjNJZ0tEc2dhU0E4SUU1RlYxUlBUbDlKVkVWU1FWUkpUMDVUT3lBcksya3BJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lHTjFjbkpsYm5SVGJHOXdaU0E5SUdkbGRGTnNiM0JsS0dGSGRXVnpjMVFzSUcxWU1Td2diVmd5S1R0Y2JpQWdJQ0FnSUNBZ0lDQWdJRnh1SUNBZ0lDQWdJQ0FnSUNBZ2FXWWdLR04xY25KbGJuUlRiRzl3WlNBOVBUMGdNQzR3S1NCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2NtVjBkWEp1SUdGSGRXVnpjMVE3WEc0Z0lDQWdJQ0FnSUNBZ0lDQjlYRzRnSUNBZ0lDQWdJQ0FnSUNCY2JpQWdJQ0FnSUNBZ0lDQWdJR04xY25KbGJuUllJRDBnWTJGc1kwSmxlbWxsY2loaFIzVmxjM05VTENCdFdERXNJRzFZTWlrZ0xTQmhXRHRjYmlBZ0lDQWdJQ0FnSUNBZ0lHRkhkV1Z6YzFRZ0xUMGdZM1Z5Y21WdWRGZ2dMeUJqZFhKeVpXNTBVMnh2Y0dVN1hHNGdJQ0FnSUNBZ0lIMWNiaUFnSUNBZ0lDQWdYRzRnSUNBZ0lDQWdJSEpsZEhWeWJpQmhSM1ZsYzNOVU8xeHVJQ0FnSUgwN1hHNWNiaUFnSUNCamIyNXpkQ0JqWVd4alUyRnRjR3hsVm1Gc2RXVnpJRDBnS0NrZ1BUNGdlMXh1SUNBZ0lDQWdJQ0JtYjNJZ0tHeGxkQ0JwSUQwZ01Ec2dhU0E4SUV0ZlUxQk1TVTVGWDFSQlFreEZYMU5KV2tVN0lDc3JhU2tnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdjMkZ0Y0d4bFZtRnNkV1Z6VzJsZElEMGdZMkZzWTBKbGVtbGxjaWhwSUNvZ1MxOVRRVTFRVEVWZlUxUkZVRjlUU1ZwRkxDQnRXREVzSUcxWU1pazdYRzRnSUNBZ0lDQWdJSDFjYmlBZ0lDQjlPMXh1WEc0Z0lDQWdZMjl1YzNRZ1oyVjBWRVp2Y2xnZ1BTQW9ZVmdwSUQwK0lIdGNiaUFnSUNBZ0lDQWdiR1YwSUdsdWRHVnlkbUZzVTNSaGNuUWdQU0F3TGpBN1hHNGdJQ0FnSUNBZ0lHeGxkQ0JqZFhKeVpXNTBVMkZ0Y0d4bElEMGdNVHRjYmlBZ0lDQWdJQ0FnYkdWMElHeGhjM1JUWVcxd2JHVWdQU0JMWDFOUVRFbE9SVjlVUVVKTVJWOVRTVnBGSUMwZ01UdGNiaUFnSUNBZ0lDQWdiR1YwSUdScGMzUWdQU0F3TGpBN1hHNGdJQ0FnSUNBZ0lHeGxkQ0JuZFdWemMwWnZjbFFnUFNBd0xqQTdYRzRnSUNBZ0lDQWdJR3hsZENCcGJtbDBhV0ZzVTJ4dmNHVWdQU0F3TGpBN1hHNGdJQ0FnSUNBZ0lDQWdJQ0JjYmlBZ0lDQWdJQ0FnWm05eUlDZzdJR04xY25KbGJuUlRZVzF3YkdVZ0lUMGdiR0Z6ZEZOaGJYQnNaU0FtSmlCellXMXdiR1ZXWVd4MVpYTmJZM1Z5Y21WdWRGTmhiWEJzWlYwZ1BEMGdZVmc3SUNzclkzVnljbVZ1ZEZOaGJYQnNaU2tnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdhVzUwWlhKMllXeFRkR0Z5ZENBclBTQkxYMU5CVFZCTVJWOVRWRVZRWDFOSldrVTdYRzRnSUNBZ0lDQWdJSDFjYmlBZ0lDQWdJQ0FnWEc0Z0lDQWdJQ0FnSUMwdFkzVnljbVZ1ZEZOaGJYQnNaVHRjYmlBZ0lDQWdJQ0FnWEc0Z0lDQWdJQ0FnSUdScGMzUWdQU0FvWVZnZ0xTQnpZVzF3YkdWV1lXeDFaWE5iWTNWeWNtVnVkRk5oYlhCc1pWMHBJQzhnS0hOaGJYQnNaVlpoYkhWbGMxdGpkWEp5Wlc1MFUyRnRjR3hsS3pGZElDMGdjMkZ0Y0d4bFZtRnNkV1Z6VzJOMWNuSmxiblJUWVcxd2JHVmRLVHRjYmlBZ0lDQWdJQ0FnWjNWbGMzTkdiM0pVSUQwZ2FXNTBaWEoyWVd4VGRHRnlkQ0FySUdScGMzUWdLaUJMWDFOQlRWQk1SVjlUVkVWUVgxTkpXa1U3WEc0Z0lDQWdJQ0FnSUZ4dUlDQWdJQ0FnSUNCcGJtbDBhV0ZzVTJ4dmNHVWdQU0JuWlhSVGJHOXdaU2huZFdWemMwWnZjbFFzSUcxWU1Td2diVmd5S1R0Y2JpQWdJQ0FnSUNBZ1hHNGdJQ0FnSUNBZ0lDOHZJRWxtSUhOc2IzQmxJR2x6SUdkeVpXRjBaWElnZEdoaGJpQnRhVzVjYmlBZ0lDQWdJQ0FnYVdZZ0tHbHVhWFJwWVd4VGJHOXdaU0ErUFNCT1JWZFVUMDVmVFVsT1gxTk1UMUJGS1NCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0J5WlhSMWNtNGdibVYzZEc5dVVtRndhSE52YmtsMFpYSmhkR1VvWVZnc0lHZDFaWE56Um05eVZDazdYRzRnSUNBZ0lDQWdJQzh2SUZOc2IzQmxJR2x6SUdWeGRXRnNJSFJ2SUcxcGJseHVJQ0FnSUNBZ0lDQjlJR1ZzYzJVZ2FXWWdLR2x1YVhScFlXeFRiRzl3WlNBOVBUMGdNQzR3S1NCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0J5WlhSMWNtNGdaM1ZsYzNOR2IzSlVPMXh1SUNBZ0lDQWdJQ0F2THlCVGJHOXdaU0JwY3lCc1pYTnpJSFJvWVc0Z2JXbHVYRzRnSUNBZ0lDQWdJSDBnWld4elpTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNCeVpYUjFjbTRnWW1sdVlYSjVVM1ZpWkdsMmFXUmxLR0ZZTENCcGJuUmxjblpoYkZOMFlYSjBMQ0JwYm5SbGNuWmhiRk4wWVhKMElDc2dTMTlUUVUxUVRFVmZVMVJGVUY5VFNWcEZLVHRjYmlBZ0lDQWdJQ0FnZlZ4dUlDQWdJSDA3WEc1Y2JpQWdJQ0JqYjI1emRDQndjbVZqYjIxd2RYUmxJRDBnS0NrZ1BUNGdlMXh1SUNBZ0lDQWdJQ0JmY0hKbFkyOXRjSFYwWldRZ1BTQjBjblZsTzF4dUlDQWdJQ0FnSUNCcFppQW9iVmd4SUNFOUlHMVpNU0I4ZkNCdFdESWdJVDBnYlZreUtTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNCallXeGpVMkZ0Y0d4bFZtRnNkV1Z6S0NrN1hHNGdJQ0FnSUNBZ0lIMWNiaUFnSUNCOU8xeHVYRzRnSUNBZ1kyOXVjM1FnY21WemIyeDJaWElnUFNBb1lWZ3BJRDArSUh0Y2JpQWdJQ0FnSUNBZ2JHVjBJSEpsZEhWeWJsWmhiSFZsTzF4dVhHNGdJQ0FnSUNBZ0lHbG1JQ2doWDNCeVpXTnZiWEIxZEdWa0tTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNCd2NtVmpiMjF3ZFhSbEtDazdYRzRnSUNBZ0lDQWdJSDFjYmlBZ0lDQWdJQ0FnWEc0Z0lDQWdJQ0FnSUM4dklFbG1JR3hwYm1WaGNpQm5jbUZrYVdWdWRDd2djbVYwZFhKdUlGZ2dZWE1nVkZ4dUlDQWdJQ0FnSUNCcFppQW9iVmd4SUQwOVBTQnRXVEVnSmlZZ2JWZ3lJRDA5UFNCdFdUSXBJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lISmxkSFZ5YmxaaGJIVmxJRDBnWVZnN1hHNGdJQ0FnSUNBZ0lDQWdJQ0JjYmlBZ0lDQWdJQ0FnTHk4Z1NXWWdZWFFnYzNSaGNuUXNJSEpsZEhWeWJpQXdYRzRnSUNBZ0lDQWdJSDBnWld4elpTQnBaaUFvWVZnZ1BUMDlJREFwSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJSEpsZEhWeWJsWmhiSFZsSUQwZ01EdGNiaUFnSUNBZ0lDQWdJQ0FnSUZ4dUlDQWdJQ0FnSUNBdkx5QkpaaUJoZENCbGJtUXNJSEpsZEhWeWJpQXhYRzRnSUNBZ0lDQWdJSDBnWld4elpTQnBaaUFvWVZnZ1BUMDlJREVwSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJSEpsZEhWeWJsWmhiSFZsSUQwZ01UdGNibHh1SUNBZ0lDQWdJQ0I5SUdWc2MyVWdlMXh1SUNBZ0lDQWdJQ0FnSUNBZ2NtVjBkWEp1Vm1Gc2RXVWdQU0JqWVd4alFtVjZhV1Z5S0dkbGRGUkdiM0pZS0dGWUtTd2diVmt4TENCdFdUSXBPMXh1SUNBZ0lDQWdJQ0I5WEc0Z0lDQWdJQ0FnSUZ4dUlDQWdJQ0FnSUNCeVpYUjFjbTRnY21WMGRYSnVWbUZzZFdVN1hHNGdJQ0FnZlR0Y2JseHVJQ0FnSUhKbGRIVnliaUJ5WlhOdmJIWmxjanRjYm4xY2JpSmRmUT09XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9hY3Rpb25zL2Vhc2luZy9jcmVhdGUtYmV6aWVyLmpzXG4gKiogbW9kdWxlIGlkID0gNDZcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF9jc3NBZGFwdGVyID0gcmVxdWlyZSgnLi4vYWRhcHRlci9jc3MtYWRhcHRlcicpO1xuXG52YXIgX2Nzc0FkYXB0ZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY3NzQWRhcHRlcik7XG5cbnZhciBfc3ZnQWRhcHRlciA9IHJlcXVpcmUoJy4uL2FkYXB0ZXIvc3ZnLWFkYXB0ZXInKTtcblxudmFyIF9zdmdBZGFwdGVyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3N2Z0FkYXB0ZXIpO1xuXG52YXIgX3N2Z1BhdGhBZGFwdGVyID0gcmVxdWlyZSgnLi4vYWRhcHRlci9zdmctcGF0aC1hZGFwdGVyJyk7XG5cbnZhciBfc3ZnUGF0aEFkYXB0ZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfc3ZnUGF0aEFkYXB0ZXIpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG52YXIgU0FWRV9QUk9QID0gJ19fcG1fYWRhcHRlcic7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uIChlbGVtZW50KSB7XG4gICAgLy8gUmV0dXJuIGJvdW5kIGFkYXB0ZXIgaWYgcHJlc2VudFxuICAgIGlmIChlbGVtZW50W1NBVkVfUFJPUF0pIHtcbiAgICAgICAgcmV0dXJuIGVsZW1lbnRbU0FWRV9QUk9QXTtcblxuICAgICAgICAvLyBPciBkZXRlY3QgYW5kIGJpbmQgYWRhcHRlclxuICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB2YXIgYWRhcHRlciA9IHVuZGVmaW5lZDtcblxuICAgICAgICAgICAgLy8gSWYgSFRNTEVsZW1lbnQgbG9hZCBDU1NcbiAgICAgICAgICAgIGlmIChlbGVtZW50IGluc3RhbmNlb2YgSFRNTEVsZW1lbnQgfHwgZWxlbWVudC50YWdOYW1lID09PSAnc3ZnJykge1xuICAgICAgICAgICAgICAgIGFkYXB0ZXIgPSBfY3NzQWRhcHRlcjIuZGVmYXVsdDtcblxuICAgICAgICAgICAgICAgIC8vIE9yIFNWR1xuICAgICAgICAgICAgfSBlbHNlIGlmIChlbGVtZW50IGluc3RhbmNlb2YgU1ZHRWxlbWVudCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoZWxlbWVudC50YWdOYW1lID09PSAncGF0aCcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFkYXB0ZXIgPSBfc3ZnUGF0aEFkYXB0ZXIyLmRlZmF1bHQ7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhZGFwdGVyID0gX3N2Z0FkYXB0ZXIyLmRlZmF1bHQ7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIEJpbmQgYWRhcHRlciB0byBlbGVtZW50XG4gICAgICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZWxlbWVudCwgU0FWRV9QUk9QLCB7XG4gICAgICAgICAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICAgICAgICAgICAgdmFsdWU6IGFkYXB0ZXJcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICByZXR1cm4gYWRhcHRlcihlbGVtZW50KTtcbiAgICAgICAgfVxufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbk55WXk5cGJtTXZZbWx1WkMxaFpHRndkR1Z5TG1weklsMHNJbTVoYldWeklqcGJYU3dpYldGd2NHbHVaM01pT2lJN096czdPenM3T3pzN096czdPenM3T3p0QlFVbEJMRWxCUVUwc1UwRkJVeXhIUVVGSExHTkJRV01zUTBGQlF6czdhMEpCUld4Q0xGVkJRVU1zVDBGQlR5eEZRVUZMT3p0QlFVVjRRaXhSUVVGSkxFOUJRVThzUTBGQlF5eFRRVUZUTEVOQlFVTXNSVUZCUlR0QlFVTndRaXhsUVVGUExFOUJRVThzUTBGQlF5eFRRVUZUTEVOQlFVTTdPenRCUVVGRExFdEJSemRDTEUxQlFVMDdRVUZEU0N4blFrRkJTU3hQUVVGUExGbEJRVUU3T3p0QlFVRkRMRUZCUjFvc1owSkJRVWtzVDBGQlR5eFpRVUZaTEZkQlFWY3NTVUZCU1N4UFFVRlBMRU5CUVVNc1QwRkJUeXhMUVVGTExFdEJRVXNzUlVGQlJUdEJRVU0zUkN4MVFrRkJUeXgxUWtGQllUczdPMEZCUVVNc1lVRkhlRUlzVFVGQlRTeEpRVUZKTEU5QlFVOHNXVUZCV1N4VlFVRlZMRVZCUVVVN1FVRkRkRU1zZDBKQlFVa3NUMEZCVHl4RFFVRkRMRTlCUVU4c1MwRkJTeXhOUVVGTkxFVkJRVVU3UVVGRE5VSXNLMEpCUVU4c01rSkJRV2xDTEVOQlFVTTdjVUpCUXpWQ0xFMUJRVTA3UVVGRFNDd3JRa0ZCVHl4MVFrRkJZU3hEUVVGRE8zRkNRVU40UWp0cFFrRkRTanM3TzBGQlFVRXNRVUZIUkN4clFrRkJUU3hEUVVGRExHTkJRV01zUTBGQlF5eFBRVUZQTEVWQlFVVXNVMEZCVXl4RlFVRkZPMEZCUTNSRExEQkNRVUZWTEVWQlFVVXNTMEZCU3p0QlFVTnFRaXh4UWtGQlN5eEZRVUZGTEU5QlFVODdZVUZEYWtJc1EwRkJReXhEUVVGRE96dEJRVVZJTEcxQ1FVRlBMRTlCUVU4c1EwRkJReXhQUVVGUExFTkJRVU1zUTBGQlF6dFRRVU16UWp0RFFVTktJaXdpWm1sc1pTSTZJbUpwYm1RdFlXUmhjSFJsY2k1cWN5SXNJbk52ZFhKalpWSnZiM1FpT2lJdlZYTmxjbk12VFdGMGRGQmxjbko1TDFOcGRHVnpMM0J2Y0cxdmRHbHZiaUlzSW5OdmRYSmpaWE5EYjI1MFpXNTBJanBiSW1sdGNHOXlkQ0JqYzNOQlpHRndkR1Z5SUdaeWIyMGdKeTR1TDJGa1lYQjBaWEl2WTNOekxXRmtZWEIwWlhJbk8xeHVhVzF3YjNKMElITjJaMEZrWVhCMFpYSWdabkp2YlNBbkxpNHZZV1JoY0hSbGNpOXpkbWN0WVdSaGNIUmxjaWM3WEc1cGJYQnZjblFnYzNablVHRjBhRUZrWVhCMFpYSWdabkp2YlNBbkxpNHZZV1JoY0hSbGNpOXpkbWN0Y0dGMGFDMWhaR0Z3ZEdWeUp6dGNibHh1WTI5dWMzUWdVMEZXUlY5UVVrOVFJRDBnSjE5ZmNHMWZZV1JoY0hSbGNpYzdYRzVjYm1WNGNHOXlkQ0JrWldaaGRXeDBJQ2hsYkdWdFpXNTBLU0E5UGlCN1hHNGdJQ0FnTHk4Z1VtVjBkWEp1SUdKdmRXNWtJR0ZrWVhCMFpYSWdhV1lnY0hKbGMyVnVkRnh1SUNBZ0lHbG1JQ2hsYkdWdFpXNTBXMU5CVmtWZlVGSlBVRjBwSUh0Y2JpQWdJQ0FnSUNBZ2NtVjBkWEp1SUdWc1pXMWxiblJiVTBGV1JWOVFVazlRWFR0Y2JseHVJQ0FnSUM4dklFOXlJR1JsZEdWamRDQmhibVFnWW1sdVpDQmhaR0Z3ZEdWeVhHNGdJQ0FnZlNCbGJITmxJSHRjYmlBZ0lDQWdJQ0FnYkdWMElHRmtZWEIwWlhJN1hHNWNiaUFnSUNBZ0lDQWdMeThnU1dZZ1NGUk5URVZzWlcxbGJuUWdiRzloWkNCRFUxTmNiaUFnSUNBZ0lDQWdhV1lnS0dWc1pXMWxiblFnYVc1emRHRnVZMlZ2WmlCSVZFMU1SV3hsYldWdWRDQjhmQ0JsYkdWdFpXNTBMblJoWjA1aGJXVWdQVDA5SUNkemRtY25LU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQmhaR0Z3ZEdWeUlEMGdZM056UVdSaGNIUmxjanRjYmx4dUlDQWdJQ0FnSUNBdkx5QlBjaUJUVmtkY2JpQWdJQ0FnSUNBZ2ZTQmxiSE5sSUdsbUlDaGxiR1Z0Wlc1MElHbHVjM1JoYm1ObGIyWWdVMVpIUld4bGJXVnVkQ2tnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdhV1lnS0dWc1pXMWxiblF1ZEdGblRtRnRaU0E5UFQwZ0ozQmhkR2duS1NCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ1lXUmhjSFJsY2lBOUlITjJaMUJoZEdoQlpHRndkR1Z5TzF4dUlDQWdJQ0FnSUNBZ0lDQWdmU0JsYkhObElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQmhaR0Z3ZEdWeUlEMGdjM1puUVdSaGNIUmxjanRjYmlBZ0lDQWdJQ0FnSUNBZ0lIMWNiaUFnSUNBZ0lDQWdmVnh1WEc0Z0lDQWdJQ0FnSUM4dklFSnBibVFnWVdSaGNIUmxjaUIwYnlCbGJHVnRaVzUwWEc0Z0lDQWdJQ0FnSUU5aWFtVmpkQzVrWldacGJtVlFjbTl3WlhKMGVTaGxiR1Z0Wlc1MExDQlRRVlpGWDFCU1QxQXNJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lHVnVkVzFsY21GaWJHVTZJR1poYkhObExGeHVJQ0FnSUNBZ0lDQWdJQ0FnZG1Gc2RXVTZJR0ZrWVhCMFpYSmNiaUFnSUNBZ0lDQWdmU2s3WEc1Y2JpQWdJQ0FnSUNBZ2NtVjBkWEp1SUdGa1lYQjBaWElvWld4bGJXVnVkQ2s3WEc0Z0lDQWdmVnh1ZlR0Y2JpSmRmUT09XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9pbmMvYmluZC1hZGFwdGVyLmpzXG4gKiogbW9kdWxlIGlkID0gNDdcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF9kaWN0aW9uYXJ5ID0gcmVxdWlyZSgnLi4vLi4vdmFsdWUtdHlwZXMvc2V0dGluZ3MvZGljdGlvbmFyeScpO1xuXG52YXIgdHJhbnNmb3JtUHJvcHMgPSB7fTtcblxudmFyIFNDQUxFID0gJ3NjYWxlJztcbnZhciBST1RBVEUgPSAncm90YXRlJztcbnZhciBUUkFOU0ZPUk1fUEVSU1BFQ1RJVkUgPSAndHJhbnNmb3JtUGVyc3BlY3RpdmUnO1xudmFyIFRFUk1TID0gWyd0cmFuc2xhdGUnLCBTQ0FMRSwgUk9UQVRFLCAnc2tldycsIFRSQU5TRk9STV9QRVJTUEVDVElWRV07XG5cbnRyYW5zZm9ybVByb3BzW1JPVEFURV0gPSB0cmFuc2Zvcm1Qcm9wc1tTQ0FMRV0gPSB0cmFuc2Zvcm1Qcm9wc1tUUkFOU0ZPUk1fUEVSU1BFQ1RJVkVdID0gdHJ1ZTtcblxuVEVSTVMuZm9yRWFjaChmdW5jdGlvbiAodGVybSkge1xuICByZXR1cm4gX2RpY3Rpb25hcnkuYXhlcy5mb3JFYWNoKGZ1bmN0aW9uIChheGlzKSB7XG4gICAgcmV0dXJuIHRyYW5zZm9ybVByb3BzW3Rlcm0gKyBheGlzXSA9IHRydWU7XG4gIH0pO1xufSk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IHRyYW5zZm9ybVByb3BzO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluTnlZeTloWkdGd2RHVnlMMk56Y3k5MGNtRnVjMlp2Y20wdGNISnZjSE11YW5NaVhTd2libUZ0WlhNaU9sdGRMQ0p0WVhCd2FXNW5jeUk2SWpzN096czdPMEZCUlVFc1NVRkJTU3hqUVVGakxFZEJRVWNzUlVGQlJTeERRVUZET3p0QlFVVjRRaXhKUVVGTkxFdEJRVXNzUjBGQlJ5eFBRVUZQTEVOQlFVTTdRVUZEZEVJc1NVRkJUU3hOUVVGTkxFZEJRVWNzVVVGQlVTeERRVUZETzBGQlEzaENMRWxCUVUwc2NVSkJRWEZDTEVkQlFVY3NjMEpCUVhOQ0xFTkJRVU03UVVGRGNrUXNTVUZCVFN4TFFVRkxMRWRCUVVjc1EwRkJReXhYUVVGWExFVkJRVVVzUzBGQlN5eEZRVUZGTEUxQlFVMHNSVUZCUlN4TlFVRk5MRVZCUVVVc2NVSkJRWEZDTEVOQlFVTXNRMEZCUXpzN1FVRkZNVVVzWTBGQll5eERRVUZETEUxQlFVMHNRMEZCUXl4SFFVRkhMR05CUVdNc1EwRkJReXhMUVVGTExFTkJRVU1zUjBGQlJ5eGpRVUZqTEVOQlFVTXNjVUpCUVhGQ0xFTkJRVU1zUjBGQlJ5eEpRVUZKTEVOQlFVTTdPMEZCUlRsR0xFdEJRVXNzUTBGQlF5eFBRVUZQTEVOQlFVTXNWVUZCUXl4SlFVRkpPMU5CUVVzc1dVRllaaXhKUVVGSkxFTkJWMmRDTEU5QlFVOHNRMEZCUXl4VlFVRkRMRWxCUVVrN1YwRkJTeXhqUVVGakxFTkJRVU1zU1VGQlNTeEhRVUZITEVsQlFVa3NRMEZCUXl4SFFVRkhMRWxCUVVrN1IwRkJRU3hEUVVGRE8wTkJRVUVzUTBGQlF5eERRVUZET3p0clFrRkZja1VzWTBGQll5SXNJbVpwYkdVaU9pSjBjbUZ1YzJadmNtMHRjSEp2Y0hNdWFuTWlMQ0p6YjNWeVkyVlNiMjkwSWpvaUwxVnpaWEp6TDAxaGRIUlFaWEp5ZVM5VGFYUmxjeTl3YjNCdGIzUnBiMjRpTENKemIzVnlZMlZ6UTI5dWRHVnVkQ0k2V3lKcGJYQnZjblFnZXlCaGVHVnpJSDBnWm5KdmJTQW5MaTR2TGk0dmRtRnNkV1V0ZEhsd1pYTXZjMlYwZEdsdVozTXZaR2xqZEdsdmJtRnllU2M3WEc1Y2JteGxkQ0IwY21GdWMyWnZjbTFRY205d2N5QTlJSHQ5TzF4dVhHNWpiMjV6ZENCVFEwRk1SU0E5SUNkelkyRnNaU2M3WEc1amIyNXpkQ0JTVDFSQlZFVWdQU0FuY205MFlYUmxKenRjYm1OdmJuTjBJRlJTUVU1VFJrOVNUVjlRUlZKVFVFVkRWRWxXUlNBOUlDZDBjbUZ1YzJadmNtMVFaWEp6Y0dWamRHbDJaU2M3WEc1amIyNXpkQ0JVUlZKTlV5QTlJRnNuZEhKaGJuTnNZWFJsSnl3Z1UwTkJURVVzSUZKUFZFRlVSU3dnSjNOclpYY25MQ0JVVWtGT1UwWlBVazFmVUVWU1UxQkZRMVJKVmtWZE8xeHVYRzUwY21GdWMyWnZjbTFRY205d2MxdFNUMVJCVkVWZElEMGdkSEpoYm5ObWIzSnRVSEp2Y0hOYlUwTkJURVZkSUQwZ2RISmhibk5tYjNKdFVISnZjSE5iVkZKQlRsTkdUMUpOWDFCRlVsTlFSVU5VU1ZaRlhTQTlJSFJ5ZFdVN1hHNWNibFJGVWsxVExtWnZja1ZoWTJnb0tIUmxjbTBwSUQwK0lHRjRaWE11Wm05eVJXRmphQ2dvWVhocGN5a2dQVDRnZEhKaGJuTm1iM0p0VUhKdmNITmJkR1Z5YlNBcklHRjRhWE5kSUQwZ2RISjFaU2twTzF4dVhHNWxlSEJ2Y25RZ1pHVm1ZWFZzZENCMGNtRnVjMlp2Y20xUWNtOXdjenNpWFgwPVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvYWRhcHRlci9jc3MvdHJhbnNmb3JtLXByb3BzLmpzXG4gKiogbW9kdWxlIGlkID0gNDhcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbi8qXG4gICAgRGV0ZWN0IGFuZCBsb2FkIGFuIGFwcHJvcHJpYXRlIGNsb2NrIHNldHRpbmcgZm9yIHRoZSBlbnZpcm9ubWVudFxuKi9cblxudmFyIGhhc1JBRiA9IHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUgPyB0cnVlIDogZmFsc2U7XG5cbnZhciB0aWNrID0gdW5kZWZpbmVkO1xuXG5pZiAoaGFzUkFGKSB7XG4gICAgdGljayA9IHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWU7XG59IGVsc2Uge1xuICAgIChmdW5jdGlvbiAoKSB7XG4gICAgICAgIC8qXG4gICAgICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUgcG9seWZpbGxcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgRm9yIElFOC85IEZsaW5zdG9uZXMgYW5kIG5vbi1icm93c2VyIGVudmlyb25tZW50c1xuICAgICAgICAgICAgIFRha2VuIGZyb20gUGF1bCBJcmlzaC4gV2UndmUgc3RyaXBwZWQgb3V0IGNhbmNlbEFuaW1hdGlvbkZyYW1lIGNoZWNrcyBiZWNhdXNlIHdlIGRvbid0IGZveCB3aXRoIHRoYXRcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgaHR0cDovL3BhdWxpcmlzaC5jb20vMjAxMS9yZXF1ZXN0YW5pbWF0aW9uZnJhbWUtZm9yLXNtYXJ0LWFuaW1hdGluZy9cbiAgICAgICAgICAgIGh0dHA6Ly9teS5vcGVyYS5jb20vZW1vbGxlci9ibG9nLzIwMTEvMTIvMjAvcmVxdWVzdGFuaW1hdGlvbmZyYW1lLWZvci1zbWFydC1lci1hbmltYXRpbmdcbiAgICAgICAgICAgICBcbiAgICAgICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSBwb2x5ZmlsbCBieSBFcmlrIE3DtmxsZXIuIGZpeGVzIGZyb20gUGF1bCBJcmlzaCBhbmQgVGlubyBaaWpkZWxcbiAgICAgICAgICAgICBcbiAgICAgICAgICAgIE1JVCBsaWNlbnNlXG4gICAgICAgICovXG4gICAgICAgIHZhciBsYXN0VGltZSA9IDA7XG5cbiAgICAgICAgdGljayA9IGZ1bmN0aW9uIChjYWxsYmFjaykge1xuICAgICAgICAgICAgdmFyIGN1cnJlbnRUaW1lID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XG4gICAgICAgICAgICB2YXIgdGltZVRvQ2FsbCA9IE1hdGgubWF4KDAsIDE2IC0gKGN1cnJlbnRUaW1lIC0gbGFzdFRpbWUpKTtcblxuICAgICAgICAgICAgbGFzdFRpbWUgPSBjdXJyZW50VGltZSArIHRpbWVUb0NhbGw7XG5cbiAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBjYWxsYmFjayhsYXN0VGltZSk7XG4gICAgICAgICAgICB9LCB0aW1lVG9DYWxsKTtcbiAgICAgICAgfTtcbiAgICB9KSgpO1xufVxuXG5leHBvcnRzLmRlZmF1bHQgPSB0aWNrO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluTnlZeTl3Y205alpYTnpMM1JwWTJzdWFuTWlYU3dpYm1GdFpYTWlPbHRkTENKdFlYQndhVzVuY3lJNklqczdPenM3T3p0QlFVbEJMRWxCUVUwc1RVRkJUU3hIUVVGSExFRkJRVU1zVDBGQlR5eE5RVUZOTEV0QlFVc3NWMEZCVnl4SlFVRkpMRTFCUVUwc1EwRkJReXh4UWtGQmNVSXNSMEZCU1N4SlFVRkpMRWRCUVVjc1MwRkJTeXhEUVVGRE96dEJRVVU1Uml4SlFVRkpMRWxCUVVrc1dVRkJRU3hEUVVGRE96dEJRVVZVTEVsQlFVa3NUVUZCVFN4RlFVRkZPMEZCUTFJc1VVRkJTU3hIUVVGSExFMUJRVTBzUTBGQlF5eHhRa0ZCY1VJc1EwRkJRenREUVVWMlF5eE5RVUZOT3pzN096czdPenM3T3pzN096czdRVUZsU0N4WlFVRkpMRkZCUVZFc1IwRkJSeXhEUVVGRExFTkJRVU03TzBGQlJXcENMRmxCUVVrc1IwRkJSeXhWUVVGRExGRkJRVkVzUlVGQlN6dEJRVU5xUWl4blFrRkJUU3hYUVVGWExFZEJRVWNzU1VGQlNTeEpRVUZKTEVWQlFVVXNRMEZCUXl4UFFVRlBMRVZCUVVVc1EwRkJRenRCUVVONlF5eG5Ra0ZCVFN4VlFVRlZMRWRCUVVjc1NVRkJTU3hEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETEVWQlFVVXNSVUZCUlN4SlFVRkpMRmRCUVZjc1IwRkJSeXhSUVVGUkxFTkJRVUVzUVVGQlF5eERRVUZETEVOQlFVTTdPMEZCUlRsRUxHOUNRVUZSTEVkQlFVY3NWMEZCVnl4SFFVRkhMRlZCUVZVc1EwRkJRenM3UVVGRmNFTXNjMEpCUVZVc1EwRkJRenQxUWtGQlRTeFJRVUZSTEVOQlFVTXNVVUZCVVN4RFFVRkRPMkZCUVVFc1JVRkJSU3hWUVVGVkxFTkJRVU1zUTBGQlF6dFRRVU53UkN4RFFVRkRPenREUVVOTU96dHJRa0ZGWXl4SlFVRkpJaXdpWm1sc1pTSTZJblJwWTJzdWFuTWlMQ0p6YjNWeVkyVlNiMjkwSWpvaUwxVnpaWEp6TDAxaGRIUlFaWEp5ZVM5VGFYUmxjeTl3YjNCdGIzUnBiMjRpTENKemIzVnlZMlZ6UTI5dWRHVnVkQ0k2V3lJdktseHVJQ0FnSUVSbGRHVmpkQ0JoYm1RZ2JHOWhaQ0JoYmlCaGNIQnliM0J5YVdGMFpTQmpiRzlqYXlCelpYUjBhVzVuSUdadmNpQjBhR1VnWlc1MmFYSnZibTFsYm5SY2Jpb3ZYRzVjYm1OdmJuTjBJR2hoYzFKQlJpQTlJQ2gwZVhCbGIyWWdkMmx1Wkc5M0lDRTlQU0FuZFc1a1pXWnBibVZrSnlBbUppQjNhVzVrYjNjdWNtVnhkV1Z6ZEVGdWFXMWhkR2x2YmtaeVlXMWxLU0EvSUhSeWRXVWdPaUJtWVd4elpUdGNibHh1YkdWMElIUnBZMnM3WEc1Y2JtbG1JQ2hvWVhOU1FVWXBJSHRjYmlBZ0lDQjBhV05ySUQwZ2QybHVaRzkzTG5KbGNYVmxjM1JCYm1sdFlYUnBiMjVHY21GdFpUdGNibHh1ZlNCbGJITmxJSHRjYmlBZ0lDQXZLbHh1SUNBZ0lDQWdJQ0J5WlhGMVpYTjBRVzVwYldGMGFXOXVSbkpoYldVZ2NHOXNlV1pwYkd4Y2JpQWdJQ0FnSUNBZ1hHNGdJQ0FnSUNBZ0lFWnZjaUJKUlRndk9TQkdiR2x1YzNSdmJtVnpJR0Z1WkNCdWIyNHRZbkp2ZDNObGNpQmxiblpwY205dWJXVnVkSE5jYmx4dUlDQWdJQ0FnSUNCVVlXdGxiaUJtY205dElGQmhkV3dnU1hKcGMyZ3VJRmRsSjNabElITjBjbWx3Y0dWa0lHOTFkQ0JqWVc1alpXeEJibWx0WVhScGIyNUdjbUZ0WlNCamFHVmphM01nWW1WallYVnpaU0IzWlNCa2IyNG5kQ0JtYjNnZ2QybDBhQ0IwYUdGMFhHNGdJQ0FnSUNBZ0lGeHVJQ0FnSUNBZ0lDQm9kSFJ3T2k4dmNHRjFiR2x5YVhOb0xtTnZiUzh5TURFeEwzSmxjWFZsYzNSaGJtbHRZWFJwYjI1bWNtRnRaUzFtYjNJdGMyMWhjblF0WVc1cGJXRjBhVzVuTDF4dUlDQWdJQ0FnSUNCb2RIUndPaTh2YlhrdWIzQmxjbUV1WTI5dEwyVnRiMnhzWlhJdllteHZaeTh5TURFeEx6RXlMekl3TDNKbGNYVmxjM1JoYm1sdFlYUnBiMjVtY21GdFpTMW1iM0l0YzIxaGNuUXRaWEl0WVc1cGJXRjBhVzVuWEc0Z0lDQWdJQ0FnSUNCY2JpQWdJQ0FnSUNBZ2NtVnhkV1Z6ZEVGdWFXMWhkR2x2YmtaeVlXMWxJSEJ2YkhsbWFXeHNJR0o1SUVWeWFXc2dUY08yYkd4bGNpNGdabWw0WlhNZ1puSnZiU0JRWVhWc0lFbHlhWE5vSUdGdVpDQlVhVzV2SUZwcGFtUmxiRnh1SUNBZ0lDQWdJQ0FnWEc0Z0lDQWdJQ0FnSUUxSlZDQnNhV05sYm5ObFhHNGdJQ0FnS2k5Y2JpQWdJQ0JzWlhRZ2JHRnpkRlJwYldVZ1BTQXdPMXh1WEc0Z0lDQWdkR2xqYXlBOUlDaGpZV3hzWW1GamF5a2dQVDRnZTF4dUlDQWdJQ0FnSUNCamIyNXpkQ0JqZFhKeVpXNTBWR2x0WlNBOUlHNWxkeUJFWVhSbEtDa3VaMlYwVkdsdFpTZ3BPMXh1SUNBZ0lDQWdJQ0JqYjI1emRDQjBhVzFsVkc5RFlXeHNJRDBnVFdGMGFDNXRZWGdvTUN3Z01UWWdMU0FvWTNWeWNtVnVkRlJwYldVZ0xTQnNZWE4wVkdsdFpTa3BPMXh1WEc0Z0lDQWdJQ0FnSUd4aGMzUlVhVzFsSUQwZ1kzVnljbVZ1ZEZScGJXVWdLeUIwYVcxbFZHOURZV3hzTzF4dVhHNGdJQ0FnSUNBZ0lITmxkRlJwYldWdmRYUW9LQ2tnUFQ0Z1kyRnNiR0poWTJzb2JHRnpkRlJwYldVcExDQjBhVzFsVkc5RFlXeHNLVHRjYmlBZ0lDQjlPMXh1ZlZ4dVhHNWxlSEJ2Y25RZ1pHVm1ZWFZzZENCMGFXTnJPeUpkZlE9PVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvcHJvY2Vzcy90aWNrLmpzXG4gKiogbW9kdWxlIGlkID0gNDlcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuLy8gW2ludF06IEluY3JlbWVudGVkIGZvciBlYWNoIG5ldyBydW5uaW5nIHByb2Nlc3NcbnZhciBjdXJyZW50UHJvY2Vzc0lkID0gMDtcblxuLy8gW2ludF06IE51bWJlciBvZiBhbGwgcnVubmluZyBwcm9jZXNzZXNcbnZhciB0b3RhbFJ1bm5pbmdDb3VudCA9IDA7XG5cbi8vIFtpbnRdOiBOdW1iZXIgb2YgcnVubmluZyBwcm9jZXNzZXMgZXhjbHVkaW5nIGJhY2tncm91bmQgcHJvY2Vzc2VzXG52YXIgbm9uQmFja2dyb3VuZFJ1bm5pbmdDb3VudCA9IDA7XG5cbi8vIFthcnJheV06IEFycmF5IG9mIHJ1bm5pbmcgcHJvY2VzcyBJRHNcbnZhciBydW5uaW5nSWRzID0gW107XG5cbi8vIFtvYmplY3RdOiBNYXAgb2YgcnVubmluZyBwcm9jZXNzZXNcbnZhciBhY3RpdmVQcm9jZXNzZXMgPSB7fTtcblxuLy8gW2FycmF5XTogQXJyYXkgb2YgcHJvY2VzcyBJRHMgcXVldWVkIGZvciBhY3RpdmF0aW9uXG52YXIgYWN0aXZhdGVRdWV1ZSA9IFtdO1xuXG4vLyBbYXJyYXldOiBBcnJheSBvZiBwcm9jZXNzIElEcyBxdWV1ZWQgZm9yIGRlYWN0aXZhdGlvblxudmFyIGRlYWN0aXZhdGVRdWV1ZSA9IFtdO1xuXG4vKlxuICAgIFVwZGF0ZSBhY3RpdmF0ZS9kZWFjdGl2YXRlIHF1ZXVlc1xuXG4gICAgQHBhcmFtIFtudW1iZXJdXG4gICAgQHBhcmFtIFthcnJheV1cbiAgICBAcGFyYW0gW2FycmF5XVxuKi9cbnZhciB1cGRhdGVRdWV1ZXMgPSBmdW5jdGlvbiAoaWQsIGluTGlzdCwgb3V0TGlzdCkge1xuICAgIHZhciBpblBvc2l0aW9uID0gaW5MaXN0LmluZGV4T2YoaWQpO1xuICAgIHZhciBvdXRQb3NpdGlvbiA9IG91dExpc3QuaW5kZXhPZihpZCk7XG5cbiAgICBpZiAoaW5Qb3NpdGlvbiA9PT0gLTEpIHtcbiAgICAgICAgaW5MaXN0LnB1c2goaWQpO1xuICAgIH1cblxuICAgIGlmIChvdXRQb3NpdGlvbiA+IC0xKSB7XG4gICAgICAgIG91dExpc3Quc3BsaWNlKG91dFBvc2l0aW9uLCAxKTtcbiAgICB9XG59O1xuXG4vKlxuICAgIFVwZGF0ZSBydW5uaW5nXG5cbiAgICBbYm9vbGVhbl06IGB0cnVlYCB0byBhZGRcbiAgICBbYm9vbGVhbl06IGB0cnVlYCBpZiBsYXp5XG4qL1xudmFyIHVwZGF0ZVJ1bm5pbmdDb3VudCA9IGZ1bmN0aW9uIChhZGQsIGlzTGF6eSkge1xuICAgIHZhciBtb2RpZnkgPSBhZGQgPyAxIDogLTE7XG5cbiAgICB0b3RhbFJ1bm5pbmdDb3VudCArPSBtb2RpZnk7XG5cbiAgICBpZiAoIWlzTGF6eSkge1xuICAgICAgICBub25CYWNrZ3JvdW5kUnVubmluZ0NvdW50ICs9IG1vZGlmeTtcbiAgICB9XG59O1xuXG5leHBvcnRzLmRlZmF1bHQgPSB7XG4gICAgYWN0aXZlUHJvY2Vzc2VzOiBhY3RpdmVQcm9jZXNzZXMsXG5cbiAgICAvLyBBY3RpdmF0ZSBhIHByb2Nlc3NcbiAgICBhY3RpdmF0ZTogZnVuY3Rpb24gKGlkLCBwcm9jZXNzKSB7XG4gICAgICAgIGFjdGl2ZVByb2Nlc3Nlc1tpZF0gPSBwcm9jZXNzO1xuICAgICAgICBwcm9jZXNzLmlzQWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgdXBkYXRlUXVldWVzKGlkLCBhY3RpdmF0ZVF1ZXVlLCBkZWFjdGl2YXRlUXVldWUpO1xuICAgIH0sXG5cbiAgICAvLyBEZWFjdGl2YXRlIGEgcHJvY2Vzc1xuICAgIGRlYWN0aXZhdGU6IGZ1bmN0aW9uIChpZCkge1xuICAgICAgICBwcm9jZXNzLmlzQWN0aXZlID0gZmFsc2U7XG4gICAgICAgIHVwZGF0ZVF1ZXVlcyhpZCwgZGVhY3RpdmF0ZVF1ZXVlLCBhY3RpdmF0ZVF1ZXVlKTtcbiAgICB9LFxuXG4gICAgLy8gTnVtYmVyIGJhY2tncm91bmQgcHJvY2Vzc2VzXG4gICAgZ2V0Tm9uQmFja2dyb3VuZFJ1bm5pbmdDb3VudDogZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gbm9uQmFja2dyb3VuZFJ1bm5pbmdDb3VudDtcbiAgICB9LFxuXG4gICAgLy8gSW5jcmVtZW50IGN1cnJlbnQgcHJvY2VzcyBJRCBhbmQgcmV0dXJuXG4gICAgZ2V0UHJvY2Vzc0lkOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBjdXJyZW50UHJvY2Vzc0lkKys7XG4gICAgfSxcblxuICAgIC8vIFJlc29sdmUgYWN0aXZhdGUvZGVhY3RpdmF0ZSBwcm9jZXNzZXMgYW5kIHJldHVybiBhY3RpdmUgaWRzXG4gICAgZ2V0QWN0aXZlSWRzOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIC8qXG4gICAgICAgICAgICBQcm9jZXNzIGRlYWN0aXZhdGUgcXVldWVcbiAgICAgICAgKi9cbiAgICAgICAgdmFyIGRlYWN0aXZhdGVRdWV1ZUxlbmd0aCA9IGRlYWN0aXZhdGVRdWV1ZS5sZW5ndGg7XG5cbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBkZWFjdGl2YXRlUXVldWVMZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdmFyIGlkID0gZGVhY3RpdmF0ZVF1ZXVlW2ldO1xuICAgICAgICAgICAgdmFyIGFjdGl2ZUlkSW5kZXggPSBydW5uaW5nSWRzLmluZGV4T2YoaWQpO1xuICAgICAgICAgICAgdmFyIF9wcm9jZXNzID0gYWN0aXZlUHJvY2Vzc2VzW2lkXTtcblxuICAgICAgICAgICAgLy8gSWYgdGhpcyBpcyBhIHJ1bm5pbmcgcHJvY2VzcywgZGVhY3RpdmF0ZVxuICAgICAgICAgICAgaWYgKGFjdGl2ZUlkSW5kZXggPiAtMSkge1xuICAgICAgICAgICAgICAgIHJ1bm5pbmdJZHMuc3BsaWNlKGFjdGl2ZUlkSW5kZXgsIDEpO1xuICAgICAgICAgICAgICAgIHVwZGF0ZVJ1bm5pbmdDb3VudChmYWxzZSwgX3Byb2Nlc3MuaXNMYXp5KTtcbiAgICAgICAgICAgICAgICBkZWxldGUgYWN0aXZlUHJvY2Vzc2VzW2lkXTtcblxuICAgICAgICAgICAgICAgIGlmIChfcHJvY2Vzcy5vbkRlYWN0aXZhdGUpIHtcbiAgICAgICAgICAgICAgICAgICAgX3Byb2Nlc3Mub25EZWFjdGl2YXRlKF9wcm9jZXNzKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvKlxuICAgICAgICAgICAgRW1wdHkgZGVhY3RpdmF0ZSBxdWV1ZS4gV2UgdXNlIGBBcnJheS5zcGxpY2VgIGJlY2F1c2UgaXQgZG9lc24ndFxuICAgICAgICAgICAgd29ya3Mgb24gdGhlIG9yaWdpbmFsIGFycmF5IHNvIHdlIGRvbid0IGhhdmUgdG8gZ2FyYmFnZSBjb2xsZWN0IGFueXRoaW5nXG4gICAgICAgICovXG4gICAgICAgIGRlYWN0aXZhdGVRdWV1ZS5zcGxpY2UoMCwgZGVhY3RpdmF0ZVF1ZXVlTGVuZ3RoKTtcblxuICAgICAgICAvKlxuICAgICAgICAgICAgUHJvY2VzcyBhY3RpdmF0ZSBxdWV1ZVxuICAgICAgICAqL1xuICAgICAgICB2YXIgYWN0aXZhdGVRdWV1ZUxlbmd0aCA9IGFjdGl2YXRlUXVldWUubGVuZ3RoO1xuXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYWN0aXZhdGVRdWV1ZUxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgaWQgPSBhY3RpdmF0ZVF1ZXVlW2ldO1xuICAgICAgICAgICAgdmFyIGFjdGl2ZUlkSW5kZXggPSBydW5uaW5nSWRzLmluZGV4T2YoaWQpO1xuICAgICAgICAgICAgdmFyIF9wcm9jZXNzMiA9IGFjdGl2ZVByb2Nlc3Nlc1tpZF07XG5cbiAgICAgICAgICAgIC8vIElmIHByb2Nlc3MgaXNuJ3QgYWxyZWFkeSBydW5uaW5nLCBhY3RpdmF0ZVxuICAgICAgICAgICAgaWYgKGFjdGl2ZUlkSW5kZXggPT09IC0xICYmIF9wcm9jZXNzMikge1xuICAgICAgICAgICAgICAgIGlmIChfcHJvY2VzczIuaXNQcmlvcml0eSkge1xuICAgICAgICAgICAgICAgICAgICBydW5uaW5nSWRzLnVuc2hpZnQoaWQpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmdJZHMucHVzaChpZCk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgdXBkYXRlUnVubmluZ0NvdW50KHRydWUsIF9wcm9jZXNzMi5pc0xhenkpO1xuXG4gICAgICAgICAgICAgICAgaWYgKF9wcm9jZXNzMi5vbkFjdGl2YXRlKSB7XG4gICAgICAgICAgICAgICAgICAgIF9wcm9jZXNzMi5vbkFjdGl2YXRlKF9wcm9jZXNzMik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgYWN0aXZhdGVRdWV1ZS5zcGxpY2UoMCwgYWN0aXZhdGVRdWV1ZUxlbmd0aCk7XG5cbiAgICAgICAgcmV0dXJuIHJ1bm5pbmdJZHM7XG4gICAgfVxufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbk55WXk5d2NtOWpaWE56TDIxaGJtRm5aWEl1YW5NaVhTd2libUZ0WlhNaU9sdGRMQ0p0WVhCd2FXNW5jeUk2SWpzN096dEJRVU5CTEVsQlFVa3NaMEpCUVdkQ0xFZEJRVWNzUTBGQlF6czdPMEZCUVVNc1FVRkhla0lzU1VGQlNTeHBRa0ZCYVVJc1IwRkJSeXhEUVVGRE96czdRVUZCUXl4QlFVY3hRaXhKUVVGSkxIbENRVUY1UWl4SFFVRkhMRU5CUVVNN096dEJRVUZETEVGQlIyeERMRWxCUVUwc1ZVRkJWU3hIUVVGSExFVkJRVVU3T3p0QlFVRkRMRUZCUjNSQ0xFbEJRVTBzWlVGQlpTeEhRVUZITEVWQlFVVTdPenRCUVVGRExFRkJSek5DTEVsQlFVMHNZVUZCWVN4SFFVRkhMRVZCUVVVN096dEJRVUZETEVGQlIzcENMRWxCUVUwc1pVRkJaU3hIUVVGSExFVkJRVVU3T3pzN096czdPenRCUVVGRExFRkJVek5DTEVsQlFVMHNXVUZCV1N4SFFVRkhMRlZCUVVNc1JVRkJSU3hGUVVGRkxFMUJRVTBzUlVGQlJTeFBRVUZQTEVWQlFVczdRVUZETVVNc1VVRkJUU3hWUVVGVkxFZEJRVWNzVFVGQlRTeERRVUZETEU5QlFVOHNRMEZCUXl4RlFVRkZMRU5CUVVNc1EwRkJRenRCUVVOMFF5eFJRVUZOTEZkQlFWY3NSMEZCUnl4UFFVRlBMRU5CUVVNc1QwRkJUeXhEUVVGRExFVkJRVVVzUTBGQlF5eERRVUZET3p0QlFVVjRReXhSUVVGSkxGVkJRVlVzUzBGQlN5eERRVUZETEVOQlFVTXNSVUZCUlR0QlFVTnVRaXhqUVVGTkxFTkJRVU1zU1VGQlNTeERRVUZETEVWQlFVVXNRMEZCUXl4RFFVRkRPMHRCUTI1Q096dEJRVVZFTEZGQlFVa3NWMEZCVnl4SFFVRkhMRU5CUVVNc1EwRkJReXhGUVVGRk8wRkJRMnhDTEdWQlFVOHNRMEZCUXl4TlFVRk5MRU5CUVVNc1YwRkJWeXhGUVVGRkxFTkJRVU1zUTBGQlF5eERRVUZETzB0QlEyeERPME5CUTBvN096czdPenM3TzBGQlFVTXNRVUZSUml4SlFVRk5MR3RDUVVGclFpeEhRVUZITEZWQlFVTXNSMEZCUnl4RlFVRkZMRTFCUVUwc1JVRkJTenRCUVVONFF5eFJRVUZOTEUxQlFVMHNSMEZCUnl4SFFVRkhMRWRCUVVjc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF5eERRVUZET3p0QlFVVTFRaXh4UWtGQmFVSXNTVUZCU1N4TlFVRk5MRU5CUVVNN08wRkJSVFZDTEZGQlFVa3NRMEZCUXl4TlFVRk5MRVZCUVVVN1FVRkRWQ3hwUTBGQmVVSXNTVUZCU1N4TlFVRk5MRU5CUVVNN1MwRkRka003UTBGRFNpeERRVUZET3p0clFrRkZZVHRCUVVOWUxHMUNRVUZsTEVWQlFXWXNaVUZCWlRzN08wRkJSMllzV1VGQlVTeEZRVUZGTEZWQlFVTXNSVUZCUlN4RlFVRkZMRTlCUVU4c1JVRkJTenRCUVVOMlFpeDFRa0ZCWlN4RFFVRkRMRVZCUVVVc1EwRkJReXhIUVVGSExFOUJRVThzUTBGQlF6dEJRVU01UWl4bFFVRlBMRU5CUVVNc1VVRkJVU3hIUVVGSExFbEJRVWtzUTBGQlF6dEJRVU40UWl4dlFrRkJXU3hEUVVGRExFVkJRVVVzUlVGQlJTeGhRVUZoTEVWQlFVVXNaVUZCWlN4RFFVRkRMRU5CUVVNN1MwRkRjRVE3T3p0QlFVZEVMR05CUVZVc1JVRkJSU3hWUVVGRExFVkJRVVVzUlVGQlN6dEJRVU5vUWl4bFFVRlBMRU5CUVVNc1VVRkJVU3hIUVVGSExFdEJRVXNzUTBGQlF6dEJRVU42UWl4dlFrRkJXU3hEUVVGRExFVkJRVVVzUlVGQlJTeGxRVUZsTEVWQlFVVXNZVUZCWVN4RFFVRkRMRU5CUVVNN1MwRkRjRVE3T3p0QlFVZEVMR2REUVVFMFFpeEZRVUZGTzJWQlFVMHNlVUpCUVhsQ08wdEJRVUU3T3p0QlFVYzNSQ3huUWtGQldTeEZRVUZGTzJWQlFVMHNaMEpCUVdkQ0xFVkJRVVU3UzBGQlFUczdPMEZCUjNSRExHZENRVUZaTEVWQlFVVXNXVUZCVFRzN096dEJRVWxvUWl4WlFVRk5MSEZDUVVGeFFpeEhRVUZITEdWQlFXVXNRMEZCUXl4TlFVRk5MRU5CUVVNN08wRkJSWEpFTEdGQlFVc3NTVUZCU1N4RFFVRkRMRWRCUVVjc1EwRkJReXhGUVVGRkxFTkJRVU1zUjBGQlJ5eHhRa0ZCY1VJc1JVRkJSU3hEUVVGRExFVkJRVVVzUlVGQlJUdEJRVU0xUXl4blFrRkJUU3hGUVVGRkxFZEJRVWNzWlVGQlpTeERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRPMEZCUXpsQ0xHZENRVUZOTEdGQlFXRXNSMEZCUnl4VlFVRlZMRU5CUVVNc1QwRkJUeXhEUVVGRExFVkJRVVVzUTBGQlF5eERRVUZETzBGQlF6ZERMR2RDUVVGTkxGRkJRVThzUjBGQlJ5eGxRVUZsTEVOQlFVTXNSVUZCUlN4RFFVRkRPenM3UVVGQlF5eEJRVWR3UXl4blFrRkJTU3hoUVVGaExFZEJRVWNzUTBGQlF5eERRVUZETEVWQlFVVTdRVUZEY0VJc01FSkJRVlVzUTBGQlF5eE5RVUZOTEVOQlFVTXNZVUZCWVN4RlFVRkZMRU5CUVVNc1EwRkJReXhEUVVGRE8wRkJRM0JETEd0RFFVRnJRaXhEUVVGRExFdEJRVXNzUlVGQlJTeFJRVUZQTEVOQlFVTXNUVUZCVFN4RFFVRkRMRU5CUVVNN1FVRkRNVU1zZFVKQlFVOHNaVUZCWlN4RFFVRkRMRVZCUVVVc1EwRkJReXhEUVVGRE96dEJRVVV6UWl4dlFrRkJTU3hSUVVGUExFTkJRVU1zV1VGQldTeEZRVUZGTzBGQlEzUkNMRFJDUVVGUExFTkJRVU1zV1VGQldTeERRVUZETEZGQlFVOHNRMEZCUXl4RFFVRkRPMmxDUVVOcVF6dGhRVU5LTzFOQlEwbzdPenM3T3p0QlFVRkJMRUZCVFVRc2RVSkJRV1VzUTBGQlF5eE5RVUZOTEVOQlFVTXNRMEZCUXl4RlFVRkZMSEZDUVVGeFFpeERRVUZET3pzN096dEJRVUZETEVGQlMycEVMRmxCUVUwc2JVSkJRVzFDTEVkQlFVY3NZVUZCWVN4RFFVRkRMRTFCUVUwc1EwRkJRenM3UVVGRmFrUXNZVUZCU3l4SlFVRkpMRU5CUVVNc1IwRkJSeXhEUVVGRExFVkJRVVVzUTBGQlF5eEhRVUZITEcxQ1FVRnRRaXhGUVVGRkxFTkJRVU1zUlVGQlJTeEZRVUZGTzBGQlF6RkRMR2RDUVVGTkxFVkJRVVVzUjBGQlJ5eGhRVUZoTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNN1FVRkROVUlzWjBKQlFVMHNZVUZCWVN4SFFVRkhMRlZCUVZVc1EwRkJReXhQUVVGUExFTkJRVU1zUlVGQlJTeERRVUZETEVOQlFVTTdRVUZETjBNc1owSkJRVTBzVTBGQlR5eEhRVUZITEdWQlFXVXNRMEZCUXl4RlFVRkZMRU5CUVVNN096dEJRVUZETEVGQlIzQkRMR2RDUVVGSkxHRkJRV0VzUzBGQlN5eERRVUZETEVOQlFVTXNTVUZCU1N4VFFVRlBMRVZCUVVVN1FVRkRha01zYjBKQlFVa3NVMEZCVHl4RFFVRkRMRlZCUVZVc1JVRkJSVHRCUVVOd1FpdzRRa0ZCVlN4RFFVRkRMRTlCUVU4c1EwRkJReXhGUVVGRkxFTkJRVU1zUTBGQlF6dHBRa0ZETVVJc1RVRkJUVHRCUVVOSUxEaENRVUZWTEVOQlFVTXNTVUZCU1N4RFFVRkRMRVZCUVVVc1EwRkJReXhEUVVGRE8ybENRVU4yUWpzN1FVRkZSQ3hyUTBGQmEwSXNRMEZCUXl4SlFVRkpMRVZCUVVVc1UwRkJUeXhEUVVGRExFMUJRVTBzUTBGQlF5eERRVUZET3p0QlFVVjZReXh2UWtGQlNTeFRRVUZQTEVOQlFVTXNWVUZCVlN4RlFVRkZPMEZCUTNCQ0xEWkNRVUZQTEVOQlFVTXNWVUZCVlN4RFFVRkRMRk5CUVU4c1EwRkJReXhEUVVGRE8ybENRVU12UWp0aFFVTktPMU5CUTBvN08wRkJSVVFzY1VKQlFXRXNRMEZCUXl4TlFVRk5MRU5CUVVNc1EwRkJReXhGUVVGRkxHMUNRVUZ0UWl4RFFVRkRMRU5CUVVNN08wRkJSVGRETEdWQlFVOHNWVUZCVlN4RFFVRkRPMHRCUTNKQ08wTkJRMG9pTENKbWFXeGxJam9pYldGdVlXZGxjaTVxY3lJc0luTnZkWEpqWlZKdmIzUWlPaUl2VlhObGNuTXZUV0YwZEZCbGNuSjVMMU5wZEdWekwzQnZjRzF2ZEdsdmJpSXNJbk52ZFhKalpYTkRiMjUwWlc1MElqcGJJaTh2SUZ0cGJuUmRPaUJKYm1OeVpXMWxiblJsWkNCbWIzSWdaV0ZqYUNCdVpYY2djblZ1Ym1sdVp5QndjbTlqWlhOelhHNXNaWFFnWTNWeWNtVnVkRkJ5YjJObGMzTkpaQ0E5SURBN1hHNWNiaTh2SUZ0cGJuUmRPaUJPZFcxaVpYSWdiMllnWVd4c0lISjFibTVwYm1jZ2NISnZZMlZ6YzJWelhHNXNaWFFnZEc5MFlXeFNkVzV1YVc1blEyOTFiblFnUFNBd08xeHVYRzR2THlCYmFXNTBYVG9nVG5WdFltVnlJRzltSUhKMWJtNXBibWNnY0hKdlkyVnpjMlZ6SUdWNFkyeDFaR2x1WnlCaVlXTnJaM0p2ZFc1a0lIQnliMk5sYzNObGMxeHViR1YwSUc1dmJrSmhZMnRuY205MWJtUlNkVzV1YVc1blEyOTFiblFnUFNBd08xeHVYRzR2THlCYllYSnlZWGxkT2lCQmNuSmhlU0J2WmlCeWRXNXVhVzVuSUhCeWIyTmxjM01nU1VSelhHNWpiMjV6ZENCeWRXNXVhVzVuU1dSeklEMGdXMTA3WEc1Y2JpOHZJRnR2WW1wbFkzUmRPaUJOWVhBZ2IyWWdjblZ1Ym1sdVp5QndjbTlqWlhOelpYTmNibU52Ym5OMElHRmpkR2wyWlZCeWIyTmxjM05sY3lBOUlIdDlPMXh1WEc0dkx5QmJZWEp5WVhsZE9pQkJjbkpoZVNCdlppQndjbTlqWlhOeklFbEVjeUJ4ZFdWMVpXUWdabTl5SUdGamRHbDJZWFJwYjI1Y2JtTnZibk4wSUdGamRHbDJZWFJsVVhWbGRXVWdQU0JiWFR0Y2JseHVMeThnVzJGeWNtRjVYVG9nUVhKeVlYa2diMllnY0hKdlkyVnpjeUJKUkhNZ2NYVmxkV1ZrSUdadmNpQmtaV0ZqZEdsMllYUnBiMjVjYm1OdmJuTjBJR1JsWVdOMGFYWmhkR1ZSZFdWMVpTQTlJRnRkTzF4dVhHNHZLbHh1SUNBZ0lGVndaR0YwWlNCaFkzUnBkbUYwWlM5a1pXRmpkR2wyWVhSbElIRjFaWFZsYzF4dVhHNGdJQ0FnUUhCaGNtRnRJRnR1ZFcxaVpYSmRYRzRnSUNBZ1FIQmhjbUZ0SUZ0aGNuSmhlVjFjYmlBZ0lDQkFjR0Z5WVcwZ1cyRnljbUY1WFZ4dUtpOWNibU52Ym5OMElIVndaR0YwWlZGMVpYVmxjeUE5SUNocFpDd2dhVzVNYVhOMExDQnZkWFJNYVhOMEtTQTlQaUI3WEc0Z0lDQWdZMjl1YzNRZ2FXNVFiM05wZEdsdmJpQTlJR2x1VEdsemRDNXBibVJsZUU5bUtHbGtLVHRjYmlBZ0lDQmpiMjV6ZENCdmRYUlFiM05wZEdsdmJpQTlJRzkxZEV4cGMzUXVhVzVrWlhoUFppaHBaQ2s3WEc1Y2JpQWdJQ0JwWmlBb2FXNVFiM05wZEdsdmJpQTlQVDBnTFRFcElIdGNiaUFnSUNBZ0lDQWdhVzVNYVhOMExuQjFjMmdvYVdRcE8xeHVJQ0FnSUgxY2JseHVJQ0FnSUdsbUlDaHZkWFJRYjNOcGRHbHZiaUErSUMweEtTQjdYRzRnSUNBZ0lDQWdJRzkxZEV4cGMzUXVjM0JzYVdObEtHOTFkRkJ2YzJsMGFXOXVMQ0F4S1R0Y2JpQWdJQ0I5WEc1OU8xeHVYRzR2S2x4dUlDQWdJRlZ3WkdGMFpTQnlkVzV1YVc1blhHNWNiaUFnSUNCYlltOXZiR1ZoYmwwNklHQjBjblZsWUNCMGJ5QmhaR1JjYmlBZ0lDQmJZbTl2YkdWaGJsMDZJR0IwY25WbFlDQnBaaUJzWVhwNVhHNHFMMXh1WTI5dWMzUWdkWEJrWVhSbFVuVnVibWx1WjBOdmRXNTBJRDBnS0dGa1pDd2dhWE5NWVhwNUtTQTlQaUI3WEc0Z0lDQWdZMjl1YzNRZ2JXOWthV1o1SUQwZ1lXUmtJRDhnTVNBNklDMHhPMXh1WEc0Z0lDQWdkRzkwWVd4U2RXNXVhVzVuUTI5MWJuUWdLejBnYlc5a2FXWjVPMXh1WEc0Z0lDQWdhV1lnS0NGcGMweGhlbmtwSUh0Y2JpQWdJQ0FnSUNBZ2JtOXVRbUZqYTJkeWIzVnVaRkoxYm01cGJtZERiM1Z1ZENBclBTQnRiMlJwWm5rN1hHNGdJQ0FnZlZ4dWZUdGNibHh1Wlhod2IzSjBJR1JsWm1GMWJIUWdlMXh1SUNBZ0lHRmpkR2wyWlZCeWIyTmxjM05sY3l4Y2JseHVJQ0FnSUM4dklFRmpkR2wyWVhSbElHRWdjSEp2WTJWemMxeHVJQ0FnSUdGamRHbDJZWFJsT2lBb2FXUXNJSEJ5YjJObGMzTXBJRDArSUh0Y2JpQWdJQ0FnSUNBZ1lXTjBhWFpsVUhKdlkyVnpjMlZ6VzJsa1hTQTlJSEJ5YjJObGMzTTdYRzRnSUNBZ0lDQWdJSEJ5YjJObGMzTXVhWE5CWTNScGRtVWdQU0IwY25WbE8xeHVJQ0FnSUNBZ0lDQjFjR1JoZEdWUmRXVjFaWE1vYVdRc0lHRmpkR2wyWVhSbFVYVmxkV1VzSUdSbFlXTjBhWFpoZEdWUmRXVjFaU2s3WEc0Z0lDQWdmU3hjYmx4dUlDQWdJQzh2SUVSbFlXTjBhWFpoZEdVZ1lTQndjbTlqWlhOelhHNGdJQ0FnWkdWaFkzUnBkbUYwWlRvZ0tHbGtLU0E5UGlCN1hHNGdJQ0FnSUNBZ0lIQnliMk5sYzNNdWFYTkJZM1JwZG1VZ1BTQm1ZV3h6WlR0Y2JpQWdJQ0FnSUNBZ2RYQmtZWFJsVVhWbGRXVnpLR2xrTENCa1pXRmpkR2wyWVhSbFVYVmxkV1VzSUdGamRHbDJZWFJsVVhWbGRXVXBPMXh1SUNBZ0lIMHNYRzVjYmlBZ0lDQXZMeUJPZFcxaVpYSWdZbUZqYTJkeWIzVnVaQ0J3Y205alpYTnpaWE5jYmlBZ0lDQm5aWFJPYjI1Q1lXTnJaM0p2ZFc1a1VuVnVibWx1WjBOdmRXNTBPaUFvS1NBOVBpQnViMjVDWVdOclozSnZkVzVrVW5WdWJtbHVaME52ZFc1MExGeHVYRzRnSUNBZ0x5OGdTVzVqY21WdFpXNTBJR04xY25KbGJuUWdjSEp2WTJWemN5QkpSQ0JoYm1RZ2NtVjBkWEp1WEc0Z0lDQWdaMlYwVUhKdlkyVnpjMGxrT2lBb0tTQTlQaUJqZFhKeVpXNTBVSEp2WTJWemMwbGtLeXNzWEc1Y2JpQWdJQ0F2THlCU1pYTnZiSFpsSUdGamRHbDJZWFJsTDJSbFlXTjBhWFpoZEdVZ2NISnZZMlZ6YzJWeklHRnVaQ0J5WlhSMWNtNGdZV04wYVhabElHbGtjMXh1SUNBZ0lHZGxkRUZqZEdsMlpVbGtjem9nS0NrZ1BUNGdlMXh1SUNBZ0lDQWdJQ0F2S2x4dUlDQWdJQ0FnSUNBZ0lDQWdVSEp2WTJWemN5QmtaV0ZqZEdsMllYUmxJSEYxWlhWbFhHNGdJQ0FnSUNBZ0lDb3ZYRzRnSUNBZ0lDQWdJR052Ym5OMElHUmxZV04wYVhaaGRHVlJkV1YxWlV4bGJtZDBhQ0E5SUdSbFlXTjBhWFpoZEdWUmRXVjFaUzVzWlc1bmRHZzdYRzVjYmlBZ0lDQWdJQ0FnWm05eUlDaHNaWFFnYVNBOUlEQTdJR2tnUENCa1pXRmpkR2wyWVhSbFVYVmxkV1ZNWlc1bmRHZzdJR2tyS3lrZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnWTI5dWMzUWdhV1FnUFNCa1pXRmpkR2wyWVhSbFVYVmxkV1ZiYVYwN1hHNGdJQ0FnSUNBZ0lDQWdJQ0JqYjI1emRDQmhZM1JwZG1WSlpFbHVaR1Y0SUQwZ2NuVnVibWx1WjBsa2N5NXBibVJsZUU5bUtHbGtLVHRjYmlBZ0lDQWdJQ0FnSUNBZ0lHTnZibk4wSUhCeWIyTmxjM01nUFNCaFkzUnBkbVZRY205alpYTnpaWE5iYVdSZE8xeHVYRzRnSUNBZ0lDQWdJQ0FnSUNBdkx5QkpaaUIwYUdseklHbHpJR0VnY25WdWJtbHVaeUJ3Y205alpYTnpMQ0JrWldGamRHbDJZWFJsWEc0Z0lDQWdJQ0FnSUNBZ0lDQnBaaUFvWVdOMGFYWmxTV1JKYm1SbGVDQStJQzB4S1NCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2NuVnVibWx1WjBsa2N5NXpjR3hwWTJVb1lXTjBhWFpsU1dSSmJtUmxlQ3dnTVNrN1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2RYQmtZWFJsVW5WdWJtbHVaME52ZFc1MEtHWmhiSE5sTENCd2NtOWpaWE56TG1selRHRjZlU2s3WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnWkdWc1pYUmxJR0ZqZEdsMlpWQnliMk5sYzNObGMxdHBaRjA3WEc1Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCcFppQW9jSEp2WTJWemN5NXZia1JsWVdOMGFYWmhkR1VwSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdjSEp2WTJWemN5NXZia1JsWVdOMGFYWmhkR1VvY0hKdlkyVnpjeWs3WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnZlZ4dUlDQWdJQ0FnSUNBZ0lDQWdmVnh1SUNBZ0lDQWdJQ0I5WEc1Y2JpQWdJQ0FnSUNBZ0x5cGNiaUFnSUNBZ0lDQWdJQ0FnSUVWdGNIUjVJR1JsWVdOMGFYWmhkR1VnY1hWbGRXVXVJRmRsSUhWelpTQmdRWEp5WVhrdWMzQnNhV05sWUNCaVpXTmhkWE5sSUdsMElHUnZaWE51SjNSY2JpQWdJQ0FnSUNBZ0lDQWdJSGR2Y210eklHOXVJSFJvWlNCdmNtbG5hVzVoYkNCaGNuSmhlU0J6YnlCM1pTQmtiMjRuZENCb1lYWmxJSFJ2SUdkaGNtSmhaMlVnWTI5c2JHVmpkQ0JoYm5sMGFHbHVaMXh1SUNBZ0lDQWdJQ0FxTDF4dUlDQWdJQ0FnSUNCa1pXRmpkR2wyWVhSbFVYVmxkV1V1YzNCc2FXTmxLREFzSUdSbFlXTjBhWFpoZEdWUmRXVjFaVXhsYm1kMGFDazdYRzVjYmlBZ0lDQWdJQ0FnTHlwY2JpQWdJQ0FnSUNBZ0lDQWdJRkJ5YjJObGMzTWdZV04wYVhaaGRHVWdjWFZsZFdWY2JpQWdJQ0FnSUNBZ0tpOWNiaUFnSUNBZ0lDQWdZMjl1YzNRZ1lXTjBhWFpoZEdWUmRXVjFaVXhsYm1kMGFDQTlJR0ZqZEdsMllYUmxVWFZsZFdVdWJHVnVaM1JvTzF4dVhHNGdJQ0FnSUNBZ0lHWnZjaUFvYkdWMElHa2dQU0F3T3lCcElEd2dZV04wYVhaaGRHVlJkV1YxWlV4bGJtZDBhRHNnYVNzcktTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNCamIyNXpkQ0JwWkNBOUlHRmpkR2wyWVhSbFVYVmxkV1ZiYVYwN1hHNGdJQ0FnSUNBZ0lDQWdJQ0JqYjI1emRDQmhZM1JwZG1WSlpFbHVaR1Y0SUQwZ2NuVnVibWx1WjBsa2N5NXBibVJsZUU5bUtHbGtLVHRjYmlBZ0lDQWdJQ0FnSUNBZ0lHTnZibk4wSUhCeWIyTmxjM01nUFNCaFkzUnBkbVZRY205alpYTnpaWE5iYVdSZE8xeHVYRzRnSUNBZ0lDQWdJQ0FnSUNBdkx5QkpaaUJ3Y205alpYTnpJR2x6YmlkMElHRnNjbVZoWkhrZ2NuVnVibWx1Wnl3Z1lXTjBhWFpoZEdWY2JpQWdJQ0FnSUNBZ0lDQWdJR2xtSUNoaFkzUnBkbVZKWkVsdVpHVjRJRDA5UFNBdE1TQW1KaUJ3Y205alpYTnpLU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnYVdZZ0tIQnliMk5sYzNNdWFYTlFjbWx2Y21sMGVTa2dlMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCeWRXNXVhVzVuU1dSekxuVnVjMmhwWm5Rb2FXUXBPMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJSDBnWld4elpTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUhKMWJtNXBibWRKWkhNdWNIVnphQ2hwWkNrN1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2ZWeHVYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdkWEJrWVhSbFVuVnVibWx1WjBOdmRXNTBLSFJ5ZFdVc0lIQnliMk5sYzNNdWFYTk1ZWHA1S1R0Y2JseHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lHbG1JQ2h3Y205alpYTnpMbTl1UVdOMGFYWmhkR1VwSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdjSEp2WTJWemN5NXZia0ZqZEdsMllYUmxLSEJ5YjJObGMzTXBPMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJSDFjYmlBZ0lDQWdJQ0FnSUNBZ0lIMWNiaUFnSUNBZ0lDQWdmVnh1WEc0Z0lDQWdJQ0FnSUdGamRHbDJZWFJsVVhWbGRXVXVjM0JzYVdObEtEQXNJR0ZqZEdsMllYUmxVWFZsZFdWTVpXNW5kR2dwTzF4dVhHNGdJQ0FnSUNBZ0lISmxkSFZ5YmlCeWRXNXVhVzVuU1dSek8xeHVJQ0FnSUgxY2JuMDdYRzRpWFgwPVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvcHJvY2Vzcy9tYW5hZ2VyLmpzXG4gKiogbW9kdWxlIGlkID0gNTBcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8vIHNoaW0gZm9yIHVzaW5nIHByb2Nlc3MgaW4gYnJvd3NlclxuXG52YXIgcHJvY2VzcyA9IG1vZHVsZS5leHBvcnRzID0ge307XG52YXIgcXVldWUgPSBbXTtcbnZhciBkcmFpbmluZyA9IGZhbHNlO1xuXG5mdW5jdGlvbiBkcmFpblF1ZXVlKCkge1xuICAgIGlmIChkcmFpbmluZykge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGRyYWluaW5nID0gdHJ1ZTtcbiAgICB2YXIgY3VycmVudFF1ZXVlO1xuICAgIHZhciBsZW4gPSBxdWV1ZS5sZW5ndGg7XG4gICAgd2hpbGUobGVuKSB7XG4gICAgICAgIGN1cnJlbnRRdWV1ZSA9IHF1ZXVlO1xuICAgICAgICBxdWV1ZSA9IFtdO1xuICAgICAgICB2YXIgaSA9IC0xO1xuICAgICAgICB3aGlsZSAoKytpIDwgbGVuKSB7XG4gICAgICAgICAgICBjdXJyZW50UXVldWVbaV0oKTtcbiAgICAgICAgfVxuICAgICAgICBsZW4gPSBxdWV1ZS5sZW5ndGg7XG4gICAgfVxuICAgIGRyYWluaW5nID0gZmFsc2U7XG59XG5wcm9jZXNzLm5leHRUaWNrID0gZnVuY3Rpb24gKGZ1bikge1xuICAgIHF1ZXVlLnB1c2goZnVuKTtcbiAgICBpZiAoIWRyYWluaW5nKSB7XG4gICAgICAgIHNldFRpbWVvdXQoZHJhaW5RdWV1ZSwgMCk7XG4gICAgfVxufTtcblxucHJvY2Vzcy50aXRsZSA9ICdicm93c2VyJztcbnByb2Nlc3MuYnJvd3NlciA9IHRydWU7XG5wcm9jZXNzLmVudiA9IHt9O1xucHJvY2Vzcy5hcmd2ID0gW107XG5wcm9jZXNzLnZlcnNpb24gPSAnJzsgLy8gZW1wdHkgc3RyaW5nIHRvIGF2b2lkIHJlZ2V4cCBpc3N1ZXNcbnByb2Nlc3MudmVyc2lvbnMgPSB7fTtcblxuZnVuY3Rpb24gbm9vcCgpIHt9XG5cbnByb2Nlc3Mub24gPSBub29wO1xucHJvY2Vzcy5hZGRMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLm9uY2UgPSBub29wO1xucHJvY2Vzcy5vZmYgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLnJlbW92ZUFsbExpc3RlbmVycyA9IG5vb3A7XG5wcm9jZXNzLmVtaXQgPSBub29wO1xuXG5wcm9jZXNzLmJpbmRpbmcgPSBmdW5jdGlvbiAobmFtZSkge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5iaW5kaW5nIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn07XG5cbi8vIFRPRE8oc2h0eWxtYW4pXG5wcm9jZXNzLmN3ZCA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuICcvJyB9O1xucHJvY2Vzcy5jaGRpciA9IGZ1bmN0aW9uIChkaXIpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuY2hkaXIgaXMgbm90IHN1cHBvcnRlZCcpO1xufTtcbnByb2Nlc3MudW1hc2sgPSBmdW5jdGlvbigpIHsgcmV0dXJuIDA7IH07XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9wcm9jZXNzL2Jyb3dzZXIuanNcbiAqKiBtb2R1bGUgaWQgPSA1MVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIl0sInNvdXJjZVJvb3QiOiIiLCJmaWxlIjoicG9wbW90aW9uLmdsb2JhbC5qcyJ9