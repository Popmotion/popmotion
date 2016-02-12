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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9wb3Btb3Rpb24uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztrQkFtQ1M7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBckJGLElBQU0sd0JBQVEsVUFBQyxLQUFEO1NBQVcsb0JBQVUsS0FBVjtDQUFYOzs7Ozs7QUFDZCxJQUFNLHdCQUFRLFVBQUMsS0FBRDtTQUFXLG9CQUFVLEtBQVY7Q0FBWDtBQUNkLElBQU0sNEJBQVUsVUFBQyxLQUFEO1NBQVcsc0JBQVksS0FBWjtDQUFYO0FBQ2hCLElBQU0sa0NBQWE7b0NBQUk7Ozs7MkVBQXNCO0NBQTFCO0FBQ25CLElBQU0sd0JBQVE7cUNBQUk7Ozs7MkVBQXNCO0NBQTFCO0FBQ2QsSUFBTSw0QkFBVTtxQ0FBSTs7Ozs2RUFBd0I7Q0FBNUI7UUFDaEI7UUFDQTs7OztRQUdBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7Ozs7UUFHQTs7OztRQUdLOzs7O1FBSUw7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOzs7O1FBR0siLCJmaWxlIjoicG9wbW90aW9uLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9NYXR0L1NpdGVzL3BvcG1vdGlvbiIsInNvdXJjZXNDb250ZW50IjpbIi8vIEFjdG9yXG5pbXBvcnQgQWN0b3IgZnJvbSAnLi9hY3Rvci9BY3Rvcic7XG5cbi8vIEFjdGlvbnNcbmltcG9ydCBUd2VlbiBmcm9tICcuL2FjdGlvbnMvVHdlZW4nO1xuaW1wb3J0IFBoeXNpY3MgZnJvbSAnLi9hY3Rpb25zL1BoeXNpY3MnO1xuaW1wb3J0IFRyYWNrIGZyb20gJy4vYWN0aW9ucy9UcmFjayc7XG5cbi8vIFByb2Nlc3NcbmltcG9ydCBQcm9jZXNzIGZyb20gJy4vcHJvY2Vzcy9Qcm9jZXNzJztcblxuLy8gSW5wdXRcbmltcG9ydCBJbnB1dCBmcm9tICcuL2lucHV0L0lucHV0JztcblxuZXhwb3J0IGNvbnN0IGFjdG9yID0gKHByb3BzKSA9PiBuZXcgQWN0b3IocHJvcHMpO1xuZXhwb3J0IGNvbnN0IHR3ZWVuID0gKHByb3BzKSA9PiBuZXcgVHdlZW4ocHJvcHMpO1xuZXhwb3J0IGNvbnN0IHBoeXNpY3MgPSAocHJvcHMpID0+IG5ldyBQaHlzaWNzKHByb3BzKTtcbmV4cG9ydCBjb25zdCB0cmFja0lucHV0ID0gKC4uLmFyZ3MpID0+IG5ldyBUcmFjayguLi5hcmdzKTtcbmV4cG9ydCBjb25zdCBpbnB1dCA9ICguLi5hcmdzKSA9PiBuZXcgSW5wdXQoLi4uYXJncyk7XG5leHBvcnQgY29uc3QgcHJvY2VzcyA9ICguLi5hcmdzKSA9PiBuZXcgUHJvY2VzcyguLi5hcmdzKTtcbmV4cG9ydCBzdGFnZ2VyIGZyb20gJy4vaW5jL3N0YWdnZXInO1xuZXhwb3J0IHRpbWVsaW5lIGZyb20gJy4vaW5jL3RpbWVsaW5lJztcblxuLy8gQWRhcHRlcnNcbmV4cG9ydCBhZGFwdGVyIGZyb20gJy4vYWRhcHRlci9hZGFwdGVyJztcbmV4cG9ydCBhdHRyQWRhcHRlciBmcm9tICcuL2FkYXB0ZXIvYXR0ci1hZGFwdGVyJztcbmV4cG9ydCBjc3NBZGFwdGVyIGZyb20gJy4vYWRhcHRlci9jc3MtYWRhcHRlcic7XG5leHBvcnQgc3ZnQWRhcHRlciBmcm9tICcuL2FkYXB0ZXIvc3ZnLWFkYXB0ZXInO1xuZXhwb3J0IHN2Z1BhdGhBZGFwdGVyIGZyb20gJy4vYWRhcHRlci9zdmctcGF0aC1hZGFwdGVyJztcblxuLy8gRWFzaW5nXG5leHBvcnQgZWFzaW5nIGZyb20gJy4vYWN0aW9ucy9lYXNpbmcvcHJlc2V0LWVhc2luZyc7XG5cbi8vIFV0aWxzXG5leHBvcnQgKiBhcyBjYWxjIGZyb20gJy4vaW5jL2NhbGMnO1xuZXhwb3J0IHsgc2V0R2xvYmFsRGlsYXRpb24gfSBmcm9tICcuL3Byb2Nlc3MvdGltZXInO1xuXG4vLyBWYWx1ZSB0eXBlc1xuZXhwb3J0IGFscGhhVHlwZSBmcm9tICcuL3ZhbHVlLXR5cGVzL2FscGhhJztcbmV4cG9ydCBhbmdsZVR5cGUgZnJvbSAnLi92YWx1ZS10eXBlcy9hbmdsZSc7XG5leHBvcnQgYXhlc1R5cGUgZnJvbSAnLi92YWx1ZS10eXBlcy9heGVzJztcbmV4cG9ydCBjb2xvclR5cGUgZnJvbSAnLi92YWx1ZS10eXBlcy9jb2xvcic7XG5leHBvcnQgY29tcGxleFR5cGUgZnJvbSAnLi92YWx1ZS10eXBlcy9jb21wbGV4JztcbmV4cG9ydCBoZXhUeXBlIGZyb20gJy4vdmFsdWUtdHlwZXMvaGV4JztcbmV4cG9ydCBoc2xUeXBlIGZyb20gJy4vdmFsdWUtdHlwZXMvaHNsJztcbmV4cG9ydCBwb3NpdGlvbnNUeXBlIGZyb20gJy4vdmFsdWUtdHlwZXMvcG9zaXRpb25zJztcbmV4cG9ydCBweFR5cGUgZnJvbSAnLi92YWx1ZS10eXBlcy9weCc7XG5leHBvcnQgcmdiVHlwZSBmcm9tICcuL3ZhbHVlLXR5cGVzL3JnYic7XG5leHBvcnQgc2NhbGVUeXBlIGZyb20gJy4vdmFsdWUtdHlwZXMvc2NhbGUnO1xuZXhwb3J0IHNoYWRvd1R5cGUgZnJvbSAnLi92YWx1ZS10eXBlcy9zaGFkb3cnO1xuXG4vLyBUcmFuc2Zvcm1lcnNcbmV4cG9ydCAqIGFzIHRyYW5zZm9ybWVycyBmcm9tICcuL2luYy90cmFuc2Zvcm1lcnMnOyJdfQ==

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports.setGlobalDilation = undefined;
	
	var _utils = __webpack_require__(31);
	
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
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _Action2 = __webpack_require__(32);
	
	var _Action3 = _interopRequireDefault(_Action2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var boundProps = function (actor, action) {
	    return {
	        on: actor.on,
	
	        onStart: function () {
	            actor.activateAction(action.id, action);
	
	            // Copy Actor properties to Action
	            for (var key in action.values) {
	                if (action.values.hasOwnProperty(key)) {
	                    var actorValue = actor.values[key];
	                    var actionValue = action.values[key];
	                    // replace property copy with current transfer - maybe replace willRender?
	                    for (var propKey in actorValue) {
	                        if (actorValue.hasOwnProperty(propKey)) {
	                            actionValue[propKey] = actorValue[propKey];
	                        }
	                    }
	                }
	            }
	        },
	
	        onStop: function () {
	            actor.deactivateAction(action.id);
	        },
	
	        willRender: function (_ref) {
	            var state = _ref.state;
	            var values = _ref.values;
	
	            // Update actor values with incoming state values
	            for (var key in state) {
	                if (state.hasOwnProperty(key)) {
	                    actor.state[key] = state[key];
	                    actor.values[key].current = values[key].current;
	                    actor.values[key].velocity = values[key].velocity;
	                }
	            }
	
	            return false;
	        }
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
	                newValues[key] = {};
	            }
	        }
	
	        if (hasNewValues) {
	            this.set(newValues);
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
	
	    /*
	        Add active actions
	         @param [number]
	        @param [Action]
	    */
	
	    Actor.prototype.activateAction = function activateAction(id, action) {
	        this.activeActions[id] = action;
	        this.numActiveActions++;
	
	        if (this.numActiveActions) {
	            _Action.prototype.start.call(this);
	        }
	    };
	
	    /*
	        Remove active actions
	         @param [number]
	    */
	
	    Actor.prototype.deactivateAction = function deactivateAction(id) {
	        delete this.activeActions[id];
	        this.numActiveActions--;
	
	        if (!this.numActiveActions && this.isActive) {
	            _Action.prototype.stop.call(this);
	        }
	    };
	
	    return Actor;
	}(_Action3.default);
	
	exports.default = Actor;
	//# sourceMappingURL=data:application/json;base64,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QUVqQixhQUFLLGdCQUFMLEdBRmlCOztBQUlqQixZQUFJLENBQUMsS0FBSyxnQkFBTCxJQUF5QixLQUFLLFFBQUwsRUFBZTtBQUN6Qyw4QkFBTSxJQUFOLFlBRHlDO1NBQTdDOzs7V0F4R2EiLCJmaWxlIjoiQWN0b3IuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL01hdHQvU2l0ZXMvcG9wbW90aW9uIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEFjdGlvbiBmcm9tICcuLi9hY3Rpb25zL0FjdGlvbic7XG5cbmNvbnN0IGJvdW5kUHJvcHMgPSAoYWN0b3IsIGFjdGlvbikgPT4gKHtcbiAgICBvbjogYWN0b3Iub24sXG5cbiAgICBvblN0YXJ0OiAoKSA9PiB7XG4gICAgICAgIGFjdG9yLmFjdGl2YXRlQWN0aW9uKGFjdGlvbi5pZCwgYWN0aW9uKTtcblxuICAgICAgICAvLyBDb3B5IEFjdG9yIHByb3BlcnRpZXMgdG8gQWN0aW9uXG4gICAgICAgIGZvciAobGV0IGtleSBpbiBhY3Rpb24udmFsdWVzKSB7XG4gICAgICAgICAgICBpZiAoYWN0aW9uLnZhbHVlcy5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgYWN0b3JWYWx1ZSA9IGFjdG9yLnZhbHVlc1trZXldO1xuICAgICAgICAgICAgICAgIGNvbnN0IGFjdGlvblZhbHVlID0gYWN0aW9uLnZhbHVlc1trZXldO1xuICAgICAgICAgICAgICAgIC8vIHJlcGxhY2UgcHJvcGVydHkgY29weSB3aXRoIGN1cnJlbnQgdHJhbnNmZXIgLSBtYXliZSByZXBsYWNlIHdpbGxSZW5kZXI/XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgcHJvcEtleSBpbiBhY3RvclZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChhY3RvclZhbHVlLmhhc093blByb3BlcnR5KHByb3BLZXkpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhY3Rpb25WYWx1ZVtwcm9wS2V5XSA9IGFjdG9yVmFsdWVbcHJvcEtleV07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgb25TdG9wOiAoKSA9PiB7XG4gICAgICAgIGFjdG9yLmRlYWN0aXZhdGVBY3Rpb24oYWN0aW9uLmlkKTtcbiAgICB9LFxuXG4gICAgd2lsbFJlbmRlcjogKHsgc3RhdGUsIHZhbHVlcyB9KSA9PiB7XG4gICAgICAgIC8vIFVwZGF0ZSBhY3RvciB2YWx1ZXMgd2l0aCBpbmNvbWluZyBzdGF0ZSB2YWx1ZXNcbiAgICAgICAgZm9yIChsZXQga2V5IGluIHN0YXRlKSB7XG4gICAgICAgICAgICBpZiAoc3RhdGUuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgICAgICAgIGFjdG9yLnN0YXRlW2tleV0gPSBzdGF0ZVtrZXldO1xuICAgICAgICAgICAgICAgIGFjdG9yLnZhbHVlc1trZXldLmN1cnJlbnQgPSB2YWx1ZXNba2V5XS5jdXJyZW50O1xuICAgICAgICAgICAgICAgIGFjdG9yLnZhbHVlc1trZXldLnZlbG9jaXR5ID0gdmFsdWVzW2tleV0udmVsb2NpdHk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFjdG9yIGV4dGVuZHMgQWN0aW9uIHtcbiAgICBjb25zdHJ1Y3RvciguLi5hcmdzKSB7XG4gICAgICAgIHN1cGVyKC4uLmFyZ3MpO1xuICAgICAgICB0aGlzLmFjdGl2ZUFjdGlvbnMgPSB7fTtcbiAgICAgICAgdGhpcy5udW1BY3RpdmVBY3Rpb25zID0gMDtcbiAgICB9XG5cbiAgICBzZXQocHJvcHMsIGluc3RhbnQpIHtcbiAgICAgICAgaWYgKGluc3RhbnQgfHwgIXRoaXMucmVkdWNlcikge1xuICAgICAgICAgICAgc3VwZXIuc2V0KHByb3BzKTtcbiAgICAgICAgICAgIHRoaXMub25jZSgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc3QgYWN0aW9uID0gdGhpcy5yZWR1Y2VyKHByb3BzKTtcbiAgICAgICAgICAgIGlmIChhY3Rpb24pIHtcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXJ0KGFjdGlvbik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKlxuICAgICAgICBCaW5kIEFjdGlvbiB0byBBY3RvclxuICAgICovXG4gICAgYmluZChhY3Rpb24pIHtcbiAgICAgICAgY29uc3QgaW5oZXJpdGVkQWN0aW9uID0gYWN0aW9uLmluaGVyaXQoKTtcbiAgICAgICAgbGV0IG5ld1ZhbHVlcyA9IHt9O1xuICAgICAgICBsZXQgaGFzTmV3VmFsdWVzID0gZmFsc2U7XG5cbiAgICAgICAgLy8gQ3JlYXRlIHZhbHVlcyBvbiBhY3RvciB0aGF0IGRvbid0IGV4aXN0XG4gICAgICAgIGZvciAobGV0IGtleSBpbiBpbmhlcml0ZWRBY3Rpb24udmFsdWVzKSB7XG4gICAgICAgICAgICBpZiAoaW5oZXJpdGVkQWN0aW9uLnZhbHVlcy5oYXNPd25Qcm9wZXJ0eShrZXkpICYmICF0aGlzLnZhbHVlcy5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgICAgICAgbmV3VmFsdWVzW2tleV0gPSB7fTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChoYXNOZXdWYWx1ZXMpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0KG5ld1ZhbHVlcyk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gaW5oZXJpdGVkQWN0aW9uLnNldChib3VuZFByb3BzKHRoaXMsIGluaGVyaXRlZEFjdGlvbikpO1xuICAgIH1cblxuICAgIC8qXG4gICAgICAgIFN0YXJ0IEFjdG9yXG5cbiAgICAgICAgSWYgQWN0aW9uIGlzIHByb3ZpZGVkLCBiaW5kIGl0IHRvIHRoaXMgQWN0b3IgYW5kIHN0YXJ0XG5cbiAgICAgICAgQHBhcmFtIChvcHRpb25hbCkgW0FjdGlvbl1cbiAgICAqL1xuICAgIHN0YXJ0KGFjdGlvbikge1xuICAgICAgICBzdXBlci5zdGFydCgpO1xuXG4gICAgICAgIGlmIChhY3Rpb24pIHtcbiAgICAgICAgICAgIGNvbnN0IGJvdW5kQWN0aW9uID0gdGhpcy5iaW5kKGFjdGlvbik7XG4gICAgICAgICAgICBib3VuZEFjdGlvbi5zdGFydCgpO1xuXG4gICAgICAgICAgICByZXR1cm4gYm91bmRBY3Rpb247XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBmb3IgKGxldCBrZXkgaW4gdGhpcy5hY3RpdmVBY3Rpb25zKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuYWN0aXZlQWN0aW9ucy5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGFjdGlvbiA9IHRoaXMuYWN0aXZlQWN0aW9uc1trZXldO1xuICAgICAgICAgICAgICAgICAgICBpZiAoIWFjdGlvbi5pc0FjdGl2ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgYWN0aW9uLnN0YXJ0KCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBzdG9wKCkge1xuICAgICAgICBzdXBlci5zdG9wKCk7XG5cbiAgICAgICAgZm9yIChsZXQga2V5IGluIHRoaXMuYWN0aXZlQWN0aW9ucykge1xuICAgICAgICAgICAgaWYgKHRoaXMuYWN0aXZlQWN0aW9ucy5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5hY3RpdmVBY3Rpb25zW2tleV0uc3RvcCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLypcbiAgICAgICAgQWRkIGFjdGl2ZSBhY3Rpb25zXG5cbiAgICAgICAgQHBhcmFtIFtudW1iZXJdXG4gICAgICAgIEBwYXJhbSBbQWN0aW9uXVxuICAgICovXG4gICAgYWN0aXZhdGVBY3Rpb24oaWQsIGFjdGlvbikge1xuICAgICAgICB0aGlzLmFjdGl2ZUFjdGlvbnNbaWRdID0gYWN0aW9uO1xuICAgICAgICB0aGlzLm51bUFjdGl2ZUFjdGlvbnMrKztcblxuICAgICAgICBpZiAodGhpcy5udW1BY3RpdmVBY3Rpb25zKSB7XG4gICAgICAgICAgICBzdXBlci5zdGFydCgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLypcbiAgICAgICAgUmVtb3ZlIGFjdGl2ZSBhY3Rpb25zXG5cbiAgICAgICAgQHBhcmFtIFtudW1iZXJdXG4gICAgKi9cbiAgICBkZWFjdGl2YXRlQWN0aW9uKGlkKSB7XG4gICAgICAgIGRlbGV0ZSB0aGlzLmFjdGl2ZUFjdGlvbnNbaWRdO1xuICAgICAgICB0aGlzLm51bUFjdGl2ZUFjdGlvbnMtLTtcblxuICAgICAgICBpZiAoIXRoaXMubnVtQWN0aXZlQWN0aW9ucyAmJiB0aGlzLmlzQWN0aXZlKSB7XG4gICAgICAgICAgICBzdXBlci5zdG9wKCk7XG4gICAgICAgIH1cbiAgICB9XG59Il19

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	exports.__esModule = true;
	
	var _Action2 = __webpack_require__(32);
	
	var _Action3 = _interopRequireDefault(_Action2);
	
	var _presetEasing = __webpack_require__(16);
	
	var _presetEasing2 = _interopRequireDefault(_presetEasing);
	
	var _utils = __webpack_require__(31);
	
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
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	exports.__esModule = true;
	
	var _Action2 = __webpack_require__(32);
	
	var _Action3 = _interopRequireDefault(_Action2);
	
	var _calc = __webpack_require__(17);
	
	var _utils = __webpack_require__(31);
	
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
	
	        for (var key in this.values) {
	            if (this.values.hasOwnProperty(key)) {
	                var value = this.values[key];
	                var previousValue = value.current;
	
	                // Apply acceleration
	                value.velocity += (0, _calc.speedPerFrame)(value.force, elapsed);
	
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
	            force: 0, // [number]: Acceleration to apply to value, in units per second
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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hY3Rpb25zL1BoeXNpY3MuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUlxQjs7O0FBRWpCLGFBRmlCLE9BRWpCLEdBQXFCOzhCQUZKLFNBRUk7OzBDQUFOOztTQUFNOztxREFDakIsMENBQVMsS0FBVCxHQURpQjs7QUFFakIsY0FBSyxjQUFMLEdBQXNCLENBQXRCLENBRmlCO0FBR2pCLGNBQUssa0JBQUwsR0FBMEIsSUFBMUIsQ0FIaUI7O0tBQXJCOztBQUZpQixzQkFRakIsNkJBQVMsU0FBUyxZQUFZLFNBQVM7QUFDbkMsYUFBSyxVQUFMLEdBQWtCLEtBQWxCLENBRG1DOztBQUduQyxhQUFLLElBQUksR0FBSixJQUFXLEtBQUssTUFBTCxFQUFhO0FBQ3pCLGdCQUFJLEtBQUssTUFBTCxDQUFZLGNBQVosQ0FBMkIsR0FBM0IsQ0FBSixFQUFxQztBQUNqQyxvQkFBTSxRQUFRLEtBQUssTUFBTCxDQUFZLEdBQVosQ0FBUixDQUQyQjtBQUVqQyxvQkFBTSxnQkFBZ0IsTUFBTSxPQUFOOzs7QUFGVyxxQkFLakMsQ0FBTSxRQUFOLElBQWtCLHlCQUFjLE1BQU0sS0FBTixFQUFhLE9BQTNCLENBQWxCOzs7QUFMaUMscUJBUWpDLENBQU0sUUFBTixhQUFtQixJQUFJLE1BQU0sUUFBTixFQUFvQixVQUFVLEdBQVYsQ0FBM0M7OztBQVJpQyxvQkFXN0IsTUFBTSxNQUFOLElBQWdCLGtCQUFNLE1BQU0sRUFBTixDQUF0QixFQUFpQztBQUNqQyx3QkFBTSxtQkFBbUIsTUFBTSxFQUFOLEdBQVcsTUFBTSxPQUFOLENBREg7QUFFakMsMEJBQU0sUUFBTixJQUFrQixtQkFBbUIseUJBQWMsTUFBTSxNQUFOLEVBQWMsT0FBNUIsQ0FBbkIsQ0FGZTtpQkFBckM7OztBQVhpQyxxQkFpQmpDLENBQU0sT0FBTixJQUFpQix5QkFBYyxNQUFNLFFBQU4sRUFBZ0IsT0FBOUIsQ0FBakI7OztBQWpCaUMsb0JBb0I3QixNQUFNLE9BQU4sS0FBa0IsYUFBbEIsSUFBbUMsS0FBSyxHQUFMLENBQVMsTUFBTSxRQUFOLENBQVQsSUFBNEIsTUFBTSxTQUFOLElBQW9CLE1BQU0sTUFBTixJQUFnQixNQUFNLE9BQU4sS0FBa0IsTUFBTSxFQUFOLEVBQVc7QUFDaEkseUJBQUssVUFBTCxHQUFrQixJQUFsQixDQURnSTtpQkFBcEk7YUFwQko7U0FESjs7O0FBWGEsc0JBdUNqQixtQ0FBYTtBQUNULFlBQUksS0FBSyxPQUFMLEVBQWM7QUFDZCxpQkFBSyxjQUFMLEdBQXNCLEtBQUssVUFBTCxHQUFrQixDQUFsQixHQUFzQixLQUFLLGNBQUwsR0FBc0IsQ0FBdEIsQ0FEOUI7O0FBR2QsZ0JBQUksS0FBSyxjQUFMLElBQXVCLEtBQUssaUJBQUwsRUFBd0I7QUFDL0MscUJBQUssSUFBTCxHQUQrQzthQUFuRDtTQUhKOzs7Ozs7OztBQXhDYSxzQkFzRGpCLDZDQUFrQjtBQUNkLDRCQUNPLGtCQUFNLGVBQU47QUFDSCxxQkFBUyxJQUFUO0FBQ0EsK0JBQW1CLENBQW5CO1VBSEosQ0FEYzs7Ozs7Ozs7QUF0REQsc0JBbUVqQiw2Q0FBa0I7QUFDZCw0QkFDTyxrQkFBTSxlQUFOO0FBQ0gsbUJBQU8sQ0FBUDtBQUNBLG9CQUFRLENBQVI7QUFDQSxvQkFBUSxDQUFSO0FBQ0EsdUJBQVcsTUFBWDtBQUNBLHNCQUFVLENBQVY7VUFOSixDQURjOzs7Ozs7Ozs7QUFuRUQsc0JBb0ZqQixxREFBc0I7QUFDbEIsZUFBTyxVQUFQLENBRGtCOzs7V0FwRkwiLCJmaWxlIjoiUGh5c2ljcy5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvTWF0dC9TaXRlcy9wb3Btb3Rpb24iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQWN0aW9uIGZyb20gJy4vQWN0aW9uJztcbmltcG9ydCB7IHNwZWVkUGVyRnJhbWUgfSBmcm9tICcuLi9pbmMvY2FsYyc7XG5pbXBvcnQgeyBpc051bSB9IGZyb20gJy4uL2luYy91dGlscyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBoeXNpY3MgZXh0ZW5kcyBBY3Rpb24ge1xuXG4gICAgY29uc3RydWN0b3IoLi4uYXJncykge1xuICAgICAgICBzdXBlciguLi5hcmdzKTtcbiAgICAgICAgdGhpcy5pbmFjdGl2ZUZyYW1lcyA9IDA7XG4gICAgICAgIHRoaXMuY2FsY3VsYXRlc1ZlbG9jaXR5ID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBvblVwZGF0ZShwaHlzaWNzLCBmcmFtZVN0YW1wLCBlbGFwc2VkKSB7XG4gICAgICAgIHRoaXMuaGFzQ2hhbmdlZCA9IGZhbHNlO1xuXG4gICAgICAgIGZvciAobGV0IGtleSBpbiB0aGlzLnZhbHVlcykge1xuICAgICAgICAgICAgaWYgKHRoaXMudmFsdWVzLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICAgICAgICBjb25zdCB2YWx1ZSA9IHRoaXMudmFsdWVzW2tleV07XG4gICAgICAgICAgICAgICAgY29uc3QgcHJldmlvdXNWYWx1ZSA9IHZhbHVlLmN1cnJlbnQ7XG5cbiAgICAgICAgICAgICAgICAvLyBBcHBseSBhY2NlbGVyYXRpb25cbiAgICAgICAgICAgICAgICB2YWx1ZS52ZWxvY2l0eSArPSBzcGVlZFBlckZyYW1lKHZhbHVlLmZvcmNlLCBlbGFwc2VkKTtcblxuICAgICAgICAgICAgICAgIC8vIEFwcGx5IGZyaWN0aW9uXG4gICAgICAgICAgICAgICAgdmFsdWUudmVsb2NpdHkgKj0gKDEgLSB2YWx1ZS5mcmljdGlvbikgKiogKGVsYXBzZWQgLyAxMDApO1xuXG4gICAgICAgICAgICAgICAgLy8gQXBwbHkgc3ByaW5nXG4gICAgICAgICAgICAgICAgaWYgKHZhbHVlLnNwcmluZyAmJiBpc051bSh2YWx1ZS50bykpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZGlzdGFuY2VUb1RhcmdldCA9IHZhbHVlLnRvIC0gdmFsdWUuY3VycmVudDtcbiAgICAgICAgICAgICAgICAgICAgdmFsdWUudmVsb2NpdHkgKz0gZGlzdGFuY2VUb1RhcmdldCAqIHNwZWVkUGVyRnJhbWUodmFsdWUuc3ByaW5nLCBlbGFwc2VkKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAvLyBBcHBseSBsYXRlc3QgdmVsb2NpdHlcbiAgICAgICAgICAgICAgICB2YWx1ZS5jdXJyZW50ICs9IHNwZWVkUGVyRnJhbWUodmFsdWUudmVsb2NpdHksIGVsYXBzZWQpO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIC8vIENoZWNrIGlmIHZhbHVlIGhhcyBjaGFuZ2VkXG4gICAgICAgICAgICAgICAgaWYgKHZhbHVlLmN1cnJlbnQgIT09IHByZXZpb3VzVmFsdWUgfHwgTWF0aC5hYnModmFsdWUudmVsb2NpdHkpID49IHZhbHVlLnN0b3BTcGVlZCB8fCAodmFsdWUuc3ByaW5nICYmIHZhbHVlLmN1cnJlbnQgIT09IHZhbHVlLnRvKSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmhhc0NoYW5nZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIG9uRnJhbWVFbmQoKSB7XG4gICAgICAgIGlmICh0aGlzLmF1dG9FbmQpIHtcbiAgICAgICAgICAgIHRoaXMuaW5hY3RpdmVGcmFtZXMgPSB0aGlzLmhhc0NoYW5nZWQgPyAxIDogdGhpcy5pbmFjdGl2ZUZyYW1lcyArIDE7XG5cbiAgICAgICAgICAgIGlmICh0aGlzLmluYWN0aXZlRnJhbWVzID49IHRoaXMubWF4SW5hY3RpdmVGcmFtZXMpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnN0b3AoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qXG4gICAgICAgICMgR2V0IGRlZmF1bHQgU2ltdWxhdGUgcHJvcHNcblxuICAgICAgICBAcmV0dXJuIFtvYmplY3RdXG4gICAgKi9cbiAgICBnZXREZWZhdWx0UHJvcHMoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAuLi5zdXBlci5nZXREZWZhdWx0UHJvcHMoKSxcbiAgICAgICAgICAgIGF1dG9FbmQ6IHRydWUsXG4gICAgICAgICAgICBtYXhJbmFjdGl2ZUZyYW1lczogM1xuICAgICAgICB9O1xuICAgIH1cblxuICAgIC8qXG4gICAgICAgICMgR2V0IGRlZmF1bHQgU2ltdWxhdGUgdmFsdWUgcHJvcHNcblxuICAgICAgICBAcmV0dXJuIFtvYmplY3RdXG4gICAgKi9cbiAgICBnZXREZWZhdWx0VmFsdWUoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAuLi5zdXBlci5nZXREZWZhdWx0VmFsdWUoKSxcbiAgICAgICAgICAgIGZvcmNlOiAwLCAvLyBbbnVtYmVyXTogQWNjZWxlcmF0aW9uIHRvIGFwcGx5IHRvIHZhbHVlLCBpbiB1bml0cyBwZXIgc2Vjb25kXG4gICAgICAgICAgICBib3VuY2U6IDAsIC8vIFtudW1iZXJdOiBGYWN0b3IgdG8gbXVsdGlwbHkgdmVsb2NpdHkgYnkgb24gYm91bmNlXG4gICAgICAgICAgICBzcHJpbmc6IDAsIC8vIFtudW1iZXJdOiBTcHJpbmcgc3RyZW5ndGggZHVyaW5nICdzdHJpbmcnXG4gICAgICAgICAgICBzdG9wU3BlZWQ6IDAuMDAwMSwgLy8gW251bWJlcl06IFN0b3Agc2ltdWxhdGlvbiB1bmRlciB0aGlzIHNwZWVkXG4gICAgICAgICAgICBmcmljdGlvbjogMCAvLyBbbnVtYmVyXTogRnJpY3Rpb24gdG8gYXBwbHkgcGVyIGZyYW1lLCAwLTFcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICAvKlxuICAgICAgICAjIEdldCBkZWZhdWx0IFNpbXVsYXRlIHZhbHVlIHByb3BlcnR5IG5hbWVcbiAgICAgICAgIyMgU2V0IHZhbHVlcyB0byB0aGlzIHdoZW4gYSBgdmFsdWVgIGlzIG5vdCBwcm92aWRlZCBhcyBhbiBvYmplY3RcblxuICAgICAgICBAcmV0dXJuIFtzdHJpbmddXG4gICAgKi9cbiAgICBnZXREZWZhdWx0VmFsdWVQcm9wKCkge1xuICAgICAgICByZXR1cm4gJ3ZlbG9jaXR5JztcbiAgICB9XG59XG4iXX0=

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	exports.__esModule = true;
	
	var _Action2 = __webpack_require__(32);
	
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
	
	    Track.prototype.onUpdate = function onUpdate() {
	        var values = this.values;
	        this.inputOffset = (0, _calc.offset)(this.inputOrigin, this.input.state);
	
	        for (var key in values) {
	            if (values.hasOwnProperty(key) && this.inputOffset.hasOwnProperty(key)) {
	                var value = values[key];
	                if (value.direct) {
	                    value.current = this.input.state[key];
	                } else {
	                    value.current = value.origin + this.inputOffset[key];
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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hY3Rpb25zL1RyYWNrLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVVBLElBQU0sb0JBQW9CLFVBQUMsQ0FBRDtXQUFRO0FBQzlCLFdBQUcsRUFBRSxLQUFGO0FBQ0gsV0FBRyxFQUFFLEtBQUY7O0NBRm1COztBQUsxQixJQUFNLG9CQUFvQjtRQUFHO1dBQXNCO0FBQy9DLFdBQUcsZUFBZSxDQUFmLEVBQWtCLE9BQWxCO0FBQ0gsV0FBRyxlQUFlLENBQWYsRUFBa0IsT0FBbEI7O0NBRm1COztBQUsxQixJQUFNLGdCQUFnQixVQUFDLENBQUQ7V0FBTyxFQUFFLE9BQUYsR0FDekIsc0JBQVksa0JBQWtCLENBQWxCLENBQVosRUFBa0MsV0FBbEMsRUFBK0MsaUJBQS9DLENBRHlCLEdBRXpCLHNCQUFZLGtCQUFrQixDQUFsQixDQUFaLEVBQWtDLFdBQWxDLEVBQStDLGlCQUEvQyxDQUZ5QjtDQUFQOztBQUl0QixJQUFNLGlCQUFpQixVQUFDLENBQUQ7V0FBTyxFQUFFLGFBQUYsSUFBbUIsQ0FBbkI7Q0FBUDs7SUFFRjs7Ozs7Ozs7O29CQUNqQix1QkFBTSxPQUFPO0FBQ1QsMEJBQU0sS0FBTixZQURTOztBQUdULFlBQUksS0FBSixFQUFXO0FBQ1AsaUJBQUssS0FBTCxHQUFhLE1BQU0sS0FBTixHQUFjLEtBQWQsR0FBc0IsY0FBYyxlQUFlLEtBQWYsQ0FBZCxDQUF0QixDQUROO1NBQVg7O0FBSUEsYUFBSyxXQUFMLEdBQW1CLEVBQW5CLENBUFM7QUFRVCxhQUFLLFdBQUwsZ0JBQXdCLEtBQUssS0FBTCxDQUFXLEtBQVgsQ0FBeEIsQ0FSUztBQVNULGFBQUssS0FBTCxDQUFXLEtBQVgsR0FUUzs7O0FBREksb0JBYWpCLHVCQUFPO0FBQ0gsMEJBQU0sSUFBTixZQURHO0FBRUgsYUFBSyxLQUFMLENBQVcsSUFBWCxHQUZHOzs7QUFiVSxvQkFrQmpCLCtCQUFXO0FBQ1AsWUFBTSxTQUFTLEtBQUssTUFBTCxDQURSO0FBRVAsYUFBSyxXQUFMLEdBQW1CLGtCQUFPLEtBQUssV0FBTCxFQUFrQixLQUFLLEtBQUwsQ0FBVyxLQUFYLENBQTVDLENBRk87O0FBSVAsYUFBSyxJQUFJLEdBQUosSUFBVyxNQUFoQixFQUF3QjtBQUNwQixnQkFBSSxPQUFPLGNBQVAsQ0FBc0IsR0FBdEIsS0FBOEIsS0FBSyxXQUFMLENBQWlCLGNBQWpCLENBQWdDLEdBQWhDLENBQTlCLEVBQW9FO0FBQ3BFLG9CQUFNLFFBQVEsT0FBTyxHQUFQLENBQVIsQ0FEOEQ7QUFFcEUsb0JBQUksTUFBTSxNQUFOLEVBQWM7QUFDZCwwQkFBTSxPQUFOLEdBQWdCLEtBQUssS0FBTCxDQUFXLEtBQVgsQ0FBaUIsR0FBakIsQ0FBaEIsQ0FEYztpQkFBbEIsTUFFTztBQUNILDBCQUFNLE9BQU4sR0FBZ0IsTUFBTSxNQUFOLEdBQWUsS0FBSyxXQUFMLENBQWlCLEdBQWpCLENBQWYsQ0FEYjtpQkFGUDthQUZKO1NBREo7OztBQXRCYSxvQkFrQ2pCLDZDQUFrQjtBQUNkLDRCQUNPLGtCQUFNLGVBQU47QUFDSCxpQkFBSyxDQUFMO0FBQ0EsdUJBQVcsQ0FBWDtBQUNBLG9CQUFRLEtBQVI7VUFKSixDQURjOzs7V0FsQ0QiLCJmaWxlIjoiVHJhY2suanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL01hdHQvU2l0ZXMvcG9wbW90aW9uIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEFjdGlvbiBmcm9tICcuL0FjdGlvbic7XG5pbXBvcnQgUG9pbnRlciBmcm9tICcuLi9pbnB1dC9Qb2ludGVyJztcbmltcG9ydCB7IG9mZnNldCB9IGZyb20gJy4uL2luYy9jYWxjJztcblxuLypcbiAgICBTY3JhcGUgeC95IGNvb3JkaW5hdGVzIGZyb20gcHJvdmlkZWQgZXZlbnRcblxuICAgIEBwYXJhbSBbZXZlbnRdXG4gICAgQHJldHVybiBbb2JqZWN0XVxuKi9cbmNvbnN0IG1vdXNlRXZlbnRUb1BvaW50ID0gKGUpID0+ICh7XG4gICAgeDogZS5wYWdlWCxcbiAgICB5OiBlLnBhZ2VZXG59KTtcblxuY29uc3QgdG91Y2hFdmVudFRvUG9pbnQgPSAoeyBjaGFuZ2VkVG91Y2hlcyB9KSA9PiAoe1xuICAgIHg6IGNoYW5nZWRUb3VjaGVzWzBdLmNsaWVudFgsXG4gICAgeTogY2hhbmdlZFRvdWNoZXNbMF0uY2xpZW50WVxufSk7XG5cbmNvbnN0IGNyZWF0ZVBvaW50ZXIgPSAoZSkgPT4gZS50b3VjaGVzID9cbiAgICBuZXcgUG9pbnRlcih0b3VjaEV2ZW50VG9Qb2ludChlKSwgJ3RvdWNobW92ZScsIHRvdWNoRXZlbnRUb1BvaW50KSA6IFxuICAgIG5ldyBQb2ludGVyKG1vdXNlRXZlbnRUb1BvaW50KGUpLCAnbW91c2Vtb3ZlJywgbW91c2VFdmVudFRvUG9pbnQpO1xuXG5jb25zdCBnZXRBY3R1YWxFdmVudCA9IChlKSA9PiBlLm9yaWdpbmFsRXZlbnQgfHwgZTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVHJhY2sgZXh0ZW5kcyBBY3Rpb24ge1xuICAgIHN0YXJ0KGlucHV0KSB7XG4gICAgICAgIHN1cGVyLnN0YXJ0KCk7XG5cbiAgICAgICAgaWYgKGlucHV0KSB7XG4gICAgICAgICAgICB0aGlzLmlucHV0ID0gaW5wdXQuc3RhdGUgPyBpbnB1dCA6IGNyZWF0ZVBvaW50ZXIoZ2V0QWN0dWFsRXZlbnQoaW5wdXQpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuaW5wdXRPZmZzZXQgPSB7fTtcbiAgICAgICAgdGhpcy5pbnB1dE9yaWdpbiA9IHsgLi4udGhpcy5pbnB1dC5zdGF0ZSB9O1xuICAgICAgICB0aGlzLmlucHV0LnN0YXJ0KCk7XG4gICAgfVxuXG4gICAgc3RvcCgpIHtcbiAgICAgICAgc3VwZXIuc3RvcCgpO1xuICAgICAgICB0aGlzLmlucHV0LnN0b3AoKTtcbiAgICB9XG5cbiAgICBvblVwZGF0ZSgpIHtcbiAgICAgICAgY29uc3QgdmFsdWVzID0gdGhpcy52YWx1ZXM7XG4gICAgICAgIHRoaXMuaW5wdXRPZmZzZXQgPSBvZmZzZXQodGhpcy5pbnB1dE9yaWdpbiwgdGhpcy5pbnB1dC5zdGF0ZSk7XG5cbiAgICAgICAgZm9yIChsZXQga2V5IGluIHZhbHVlcykge1xuICAgICAgICAgICAgaWYgKHZhbHVlcy5oYXNPd25Qcm9wZXJ0eShrZXkpICYmIHRoaXMuaW5wdXRPZmZzZXQuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHZhbHVlID0gdmFsdWVzW2tleV07XG4gICAgICAgICAgICAgICAgaWYgKHZhbHVlLmRpcmVjdCkge1xuICAgICAgICAgICAgICAgICAgICB2YWx1ZS5jdXJyZW50ID0gdGhpcy5pbnB1dC5zdGF0ZVtrZXldO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlLmN1cnJlbnQgPSB2YWx1ZS5vcmlnaW4gKyB0aGlzLmlucHV0T2Zmc2V0W2tleV07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZ2V0RGVmYXVsdFZhbHVlKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgLi4uc3VwZXIuZ2V0RGVmYXVsdFZhbHVlKCksXG4gICAgICAgICAgICBhbXA6IDEsXG4gICAgICAgICAgICBlc2NhcGVBbXA6IDAsXG4gICAgICAgICAgICBkaXJlY3Q6IGZhbHNlXG4gICAgICAgIH07XG4gICAgfVxufVxuIl19

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
	}();
	
	exports.default = Process;
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9wcm9jZXNzL1Byb2Nlc3MuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0lBQVk7Ozs7Ozs7O0lBRVM7Ozs7OztBQUtqQixhQUxpQixPQUtqQixDQUFZLEtBQVosRUFBbUIsTUFBbkIsRUFBMkI7Ozs4QkFMVixTQUtVOztBQUN2QixhQUFLLEVBQUwsR0FBVSxLQUFLLFlBQUwsRUFBVixDQUR1Qjs7QUFHdkIsYUFBSyxVQUFMLEdBQWtCLFlBQU07QUFDcEIsa0JBQUssSUFBTCxHQURvQjtBQUVwQixrQkFBSyxTQUFMLEdBQWlCLFNBQWpCLENBRm9CO1NBQU4sQ0FISzs7QUFRdkIsYUFBSyxXQUFMLEdBQW1CO21CQUFNLE1BQUssU0FBTCxHQUFpQixNQUFLLFVBQUw7U0FBdkIsQ0FSSTs7QUFVdkIsYUFBSyxHQUFMLENBQVMsS0FBSyxlQUFMLEVBQVQsRUFWdUI7QUFXdkIsYUFBSyxHQUFMLENBQVMsS0FBVCxFQVh1Qjs7QUFhdkIsYUFBSyxNQUFMLEdBQWMsVUFBVSxLQUFWLENBYlM7QUFjdkIsYUFBSyxRQUFMLEdBQWdCLEtBQWhCLENBZHVCO0tBQTNCOztBQUxpQixzQkFzQmpCLG1CQUFJLE9BQU87QUFDUCxhQUFLLElBQUksR0FBSixJQUFXLEtBQWhCLEVBQXVCO0FBQ25CLGdCQUFJLE1BQU0sY0FBTixDQUFxQixHQUFyQixDQUFKLEVBQStCO0FBQzNCLHFCQUFLLEdBQUwsSUFBWSxNQUFNLEdBQU4sQ0FBWixDQUQyQjthQUEvQjtTQURKOztBQU1BLGVBQU8sSUFBUCxDQVBPOzs7QUF0Qk0sc0JBZ0NqQix5QkFBUTtBQUNKLGFBQUssUUFBTCxDQUFjLEtBQUssRUFBTCxFQUFTLElBQXZCLEVBREk7O0FBR0osYUFBSyxTQUFMLEdBQWlCLEtBQUssVUFBTCxHQUFrQixTQUFsQixDQUhiOztBQUtKLFlBQUksS0FBSyxPQUFMLEVBQWM7QUFDZCxpQkFBSyxPQUFMLENBQWEsSUFBYixFQURjO1NBQWxCOztBQUlBLGVBQU8sSUFBUCxDQVRJOzs7QUFoQ1Msc0JBNENqQix1QkFBTztBQUNILGFBQUssVUFBTCxDQUFnQixLQUFLLEVBQUwsQ0FBaEIsQ0FERzs7QUFHSCxZQUFJLEtBQUssTUFBTCxFQUFhO0FBQ2IsaUJBQUssTUFBTCxDQUFZLElBQVosRUFEYTtTQUFqQjs7QUFJQSxlQUFPLElBQVAsQ0FQRzs7O0FBNUNVLHNCQXNEakIsdUJBQU87QUFDSCxhQUFLLEtBQUwsR0FERztBQUVILGFBQUssVUFBTCxHQUFrQixLQUFLLFdBQUwsQ0FGZjtBQUdILGVBQU8sSUFBUCxDQUhHOzs7Ozs7OztBQXREVSxzQkFpRWpCLDZDQUFrQjtBQUNkLGVBQU8sRUFBUCxDQURjOzs7Ozs7Ozs7O0FBakVELHNCQTRFakIsMkJBQVEsT0FBTztZQUNILEtBQTBCLEtBQTFCLEdBREc7O1lBQ0ksMENBQW1CLGNBRHZCOztBQUVYLFlBQU0sYUFBYSxJQUFJLEtBQUssV0FBTCxDQUFpQixjQUFyQixDQUFiLENBRks7QUFHWCxlQUFPLFdBQVcsR0FBWCxDQUFlLEtBQWYsQ0FBUCxDQUhXOzs7V0E1RUUiLCJmaWxlIjoiUHJvY2Vzcy5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvTWF0dC9TaXRlcy9wb3Btb3Rpb24iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBsb29wIGZyb20gJy4vbG9vcCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFByb2Nlc3Mge1xuICAgIC8qXG4gICAgICAgIFtvYmplY3RdOiBQcm9wZXJ0aWVzXG4gICAgICAgIFtib29sZWFuXSAob3B0aW9uYWwpOiBJcyBQcm9jZXNzIGxhenk/XG4gICAgKi9cbiAgICBjb25zdHJ1Y3Rvcihwcm9wcywgaXNMYXp5KSB7XG4gICAgICAgIHRoaXMuaWQgPSBsb29wLmdldFByb2Nlc3NJZCgpO1xuXG4gICAgICAgIHRoaXMuX29uQ2xlYW51cCA9ICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuc3RvcCgpO1xuICAgICAgICAgICAgdGhpcy5vbkNsZWFudXAgPSB1bmRlZmluZWQ7XG4gICAgICAgIH07XG5cbiAgICAgICAgdGhpcy5fb25BY3RpdmF0ZSA9ICgpID0+IHRoaXMub25DbGVhbnVwID0gdGhpcy5fb25DbGVhbnVwO1xuXG4gICAgICAgIHRoaXMuc2V0KHRoaXMuZ2V0RGVmYXVsdFByb3BzKCkpO1xuICAgICAgICB0aGlzLnNldChwcm9wcyk7XG5cbiAgICAgICAgdGhpcy5pc0xhenkgPSBpc0xhenkgfHwgZmFsc2U7XG4gICAgICAgIHRoaXMuaXNBY3RpdmUgPSBmYWxzZTtcbiAgICB9XG5cbiAgICBzZXQocHJvcHMpIHtcbiAgICAgICAgZm9yIChsZXQga2V5IGluIHByb3BzKSB7XG4gICAgICAgICAgICBpZiAocHJvcHMuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgICAgICAgIHRoaXNba2V5XSA9IHByb3BzW2tleV07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBzdGFydCgpIHtcbiAgICAgICAgbG9vcC5hY3RpdmF0ZSh0aGlzLmlkLCB0aGlzKTtcblxuICAgICAgICB0aGlzLm9uQ2xlYW51cCA9IHRoaXMub25BY3RpdmF0ZSA9IHVuZGVmaW5lZDtcblxuICAgICAgICBpZiAodGhpcy5vblN0YXJ0KSB7XG4gICAgICAgICAgICB0aGlzLm9uU3RhcnQodGhpcyk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBzdG9wKCkge1xuICAgICAgICBsb29wLmRlYWN0aXZhdGUodGhpcy5pZCk7XG5cbiAgICAgICAgaWYgKHRoaXMub25TdG9wKSB7XG4gICAgICAgICAgICB0aGlzLm9uU3RvcCh0aGlzKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIG9uY2UoKSB7XG4gICAgICAgIHRoaXMuc3RhcnQoKTtcbiAgICAgICAgdGhpcy5vbkFjdGl2YXRlID0gdGhpcy5fb25BY3RpdmF0ZTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgLypcbiAgICAgICAgIyBHZXQgZGVmYXVsdCBBY3Rpb24gcHJvcGVydGllc1xuXG4gICAgICAgIEByZXR1cm4gW29iamVjdF1cbiAgICAqL1xuICAgIGdldERlZmF1bHRQcm9wcygpIHtcbiAgICAgICAgcmV0dXJuIHt9O1xuICAgIH1cblxuICAgIC8qXG4gICAgICAgICMgRXh0ZW5kIHRoaXMgUHJvY2VzcyB3aXRoIG5ldyBwcm9wZXJ0aWVzXG4gICAgICAgICMjIFJldHVybnMgbmV3IGluc3RhbmNlIG9mIHRoaXMgUHJvY2VzcydzIGBwcm90b3R5cGVgIHdpdGggZXhpc3RpbmcgYW5kIG5ldyBwcm9wZXJ0aWVzXG5cbiAgICAgICAgQHBhcmFtIFtvYmplY3RdIChvcHRpb25hbClcbiAgICAgICAgQHJldHVybiBbUHJvY2Vzc11cbiAgICAqL1xuICAgIGluaGVyaXQocHJvcHMpIHtcbiAgICAgICAgY29uc3QgeyBpZCwgLi4uaW5oZXJpdGVkUHJvcHMgfSA9IHRoaXM7XG4gICAgICAgIGNvbnN0IG5ld1Byb2Nlc3MgPSBuZXcgdGhpcy5jb25zdHJ1Y3Rvcihpbmhlcml0ZWRQcm9wcyk7XG4gICAgICAgIHJldHVybiBuZXdQcm9jZXNzLnNldChwcm9wcyk7XG4gICAgfVxufSJdfQ==

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	exports.__esModule = true;
	
	var _Process2 = __webpack_require__(7);
	
	var _Process3 = _interopRequireDefault(_Process2);
	
	var _utils = __webpack_require__(31);
	
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
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports.default = stagger;
	
	var _Tween = __webpack_require__(4);
	
	var _Tween2 = _interopRequireDefault(_Tween);
	
	var _presetEasing = __webpack_require__(16);
	
	var _presetEasing2 = _interopRequireDefault(_presetEasing);
	
	var _utils = __webpack_require__(31);
	
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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9pbmMvdGltZWxpbmUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7a0JBK0R3Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUE1Q3hCLElBQU0sVUFBVSxVQUFDLElBQUQsRUFBVTtBQUN0QixRQUFNLFdBQVcsRUFBWCxDQURnQjtBQUV0QixRQUFNLFVBQVUsS0FBSyxNQUFMLENBRk07QUFHdEIsUUFBSSxrQkFBa0IsQ0FBbEIsQ0FIa0I7OzBCQUtiO0FBQ0wsWUFBTSxNQUFNLEtBQUssQ0FBTCxDQUFOO0FBQ04sWUFBTSxXQUFXLElBQUksS0FBSixHQUFZLElBQVosR0FBbUIsS0FBbkI7QUFDakIsWUFBTSxRQUFRLFdBQWEsSUFBSSxLQUFKLEdBQVksR0FBekI7O0FBRWQsMkJBQW9CLFFBQUMsSUFBWSxJQUFJLE1BQUosR0FDN0IsSUFBSSxFQUFKLElBQVUseUJBQWMsZUFBZCxFQUErQixJQUFJLE1BQUosQ0FBekMsR0FBdUQsQ0FEdkM7O0FBR3BCLFlBQUksV0FBVyxDQUFYO0FBQ0osYUFBSyxJQUFJLEdBQUosSUFBVyxNQUFNLE1BQU4sRUFBYztBQUMxQixnQkFBSSxNQUFNLE1BQU4sQ0FBYSxjQUFiLENBQTRCLEdBQTVCLENBQUosRUFBc0M7QUFDbEMsb0JBQU0sUUFBUSxNQUFNLE1BQU4sQ0FBYSxHQUFiLENBQVIsQ0FENEI7QUFFbEMsMkJBQVcsS0FBSyxHQUFMLENBQVMsUUFBVCxFQUFtQixNQUFNLFFBQU4sQ0FBOUIsQ0FGa0M7YUFBdEM7U0FESjs7QUFPQSxpQkFBUyxJQUFULENBQWM7QUFDVixrQkFBTSxlQUFOO0FBQ0Esc0JBQVUsUUFBVjtBQUNBLGtCQUFNLFVBQUMsSUFBRDt1QkFBVSxNQUFNLFFBQU4sQ0FBZSxJQUFmO2FBQVY7U0FIVjs7QUFNQSwyQkFBbUIsTUFBTSxRQUFOO01BM0JEOztBQUt0QixTQUFLLElBQUksSUFBSSxDQUFKLEVBQU8sSUFBSSxPQUFKLEVBQWEsR0FBN0IsRUFBa0M7Y0FBekIsR0FBeUI7S0FBbEM7O0FBeUJBLFdBQU8sRUFBRSxXQUFXLGVBQVgsRUFBNEIsa0JBQTlCLEVBQVAsQ0E5QnNCO0NBQVY7O0FBaUNoQixJQUFNLFlBQVksZ0JBQTJDO1FBQXhDLHVCQUF3QztRQUEvQix5QkFBK0I7UUFBckIscUNBQXFCOztBQUN6RCxTQUFLLElBQUksSUFBSSxDQUFKLEVBQU8sSUFBSSxjQUFKLEVBQW9CLEdBQXBDLEVBQXlDO0FBQ3JDLFlBQU0sU0FBUSxTQUFTLENBQVQsQ0FBUixDQUQrQjtBQUVyQyxZQUFNLFlBQVksVUFBVSxPQUFNLElBQU4sQ0FGUzs7QUFJckMsWUFBSSxZQUFZLENBQVosSUFBaUIsWUFBWSxPQUFNLFFBQU4sRUFBZ0I7QUFDN0MsbUJBQU0sSUFBTixDQUFXLFNBQVgsRUFENkM7U0FBakQ7S0FKSjtDQURjOztBQVdILFNBQVMsUUFBVCxDQUFrQixHQUFsQixFQUFtQztRQUFaLDhEQUFRLGtCQUFJOzttQkFDZCxRQUFRLEdBQVIsRUFEYzs7UUFDdEMsK0JBRHNDO1FBQzNCLDZCQUQyQjs7QUFHOUMsV0FBTyxpQ0FDQTtBQUNILGtCQUFVLFNBQVY7QUFDQSxjQUFNLHVCQUFPLE1BQVA7QUFDTixnQkFBUTtBQUNKLGVBQUcsQ0FBSDtTQURKO0FBR0Esa0JBQVUsUUFBVjtBQUNBLHdCQUFnQixTQUFTLE1BQVQ7QUFDaEIsa0JBQVUsU0FBVjtNQVRHLENBQVAsQ0FIOEM7Q0FBbkMiLCJmaWxlIjoidGltZWxpbmUuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL01hdHQvU2l0ZXMvcG9wbW90aW9uIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFR3ZWVuIGZyb20gJy4uL2FjdGlvbnMvVHdlZW4nO1xuaW1wb3J0IGVhc2luZyBmcm9tICcuLi9hY3Rpb25zL2Vhc2luZy9wcmVzZXQtZWFzaW5nJztcbmltcG9ydCB7IHJlbGF0aXZlVmFsdWUgfSBmcm9tICcuL2NhbGMnO1xuXG4vKlxuICAgIEBwYXJhbSBbYXJyYXldXG4gICAgICAgIFNlcXVlbnRpYWwgYXJyYXkgb2YgdHdlZW5zLCBlYWNoIGl0ZW0gY2FuIGJlIGEgdHdlZW4gb3IgZGVmaW5pdGlvbiBvYmo6XG5cbiAgICAgICAgW1xuICAgICAgICAgICAgbmV3IFR3ZWVuKCksXG4gICAgICAgICAgICBzdGFnZ2VyKCksXG4gICAgICAgICAgICB0aW1lbGluZSgpLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHR3ZWVuOiBuZXcgVHdlZW4oKSxcbiAgICAgICAgICAgICAgICBhdDogMTAwLFxuICAgICAgICAgICAgICAgIG9mZnNldDogXCIrPTEwMFwiXG4gICAgICAgICAgICB9XG4gICAgICAgIF1cbiovXG5jb25zdCBhbmFseXplID0gKGRlZnMpID0+IHtcbiAgICBjb25zdCB0aW1lbGluZSA9IFtdO1xuICAgIGNvbnN0IG51bURlZnMgPSBkZWZzLmxlbmd0aDtcbiAgICBsZXQgY3VycmVudFBsYXloZWFkID0gMDtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbnVtRGVmczsgaSsrKSB7XG4gICAgICAgIGNvbnN0IGRlZiA9IGRlZnNbaV07XG4gICAgICAgIGNvbnN0IGRlZklzT2JqID0gZGVmLnR3ZWVuID8gdHJ1ZSA6IGZhbHNlO1xuICAgICAgICBjb25zdCB0d2VlbiA9IChkZWZJc09iaikgPyBkZWYudHdlZW4gOiBkZWY7XG5cbiAgICAgICAgY3VycmVudFBsYXloZWFkICs9ICgoZGVmSXNPYmogJiYgZGVmLm9mZnNldCkgP1xuICAgICAgICAgICAgZGVmLmF0IHx8IHJlbGF0aXZlVmFsdWUoY3VycmVudFBsYXloZWFkLCBkZWYub2Zmc2V0KSA6IDApO1xuXG4gICAgICAgIGxldCBkdXJhdGlvbiA9IDA7XG4gICAgICAgIGZvciAobGV0IGtleSBpbiB0d2Vlbi52YWx1ZXMpIHtcbiAgICAgICAgICAgIGlmICh0d2Vlbi52YWx1ZXMuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHZhbHVlID0gdHdlZW4udmFsdWVzW2tleV07XG4gICAgICAgICAgICAgICAgZHVyYXRpb24gPSBNYXRoLm1heChkdXJhdGlvbiwgdmFsdWUuZHVyYXRpb24pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgdGltZWxpbmUucHVzaCh7XG4gICAgICAgICAgICBmcm9tOiBjdXJyZW50UGxheWhlYWQsXG4gICAgICAgICAgICBkdXJhdGlvbjogZHVyYXRpb24sXG4gICAgICAgICAgICBmaXJlOiAodGltZSkgPT4gdHdlZW4uc2Vla1RpbWUodGltZSlcbiAgICAgICAgfSk7XG5cbiAgICAgICAgY3VycmVudFBsYXloZWFkICs9IHR3ZWVuLmR1cmF0aW9uO1xuICAgIH1cblxuICAgIHJldHVybiB7IHRvdGFsVGltZTogY3VycmVudFBsYXloZWFkLCB0aW1lbGluZSB9O1xufTtcblxuY29uc3Qgc2V0VHdlZW5zID0gKHsgZWxhcHNlZCwgdGltZWxpbmUsIHRpbWVsaW5lTGVuZ3RoIH0pID0+IHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRpbWVsaW5lTGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY29uc3QgdHdlZW4gPSB0aW1lbGluZVtpXTtcbiAgICAgICAgY29uc3QgdHdlZW5UaW1lID0gZWxhcHNlZCAtIHR3ZWVuLmZyb207XG5cbiAgICAgICAgaWYgKHR3ZWVuVGltZSA+IDAgJiYgdHdlZW5UaW1lIDwgdHdlZW4uZHVyYXRpb24pIHtcbiAgICAgICAgICAgIHR3ZWVuLmZpcmUodHdlZW5UaW1lKTtcbiAgICAgICAgfVxuICAgIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHRpbWVsaW5lKGRlZiwgcHJvcHMgPSB7fSkge1xuICAgIGNvbnN0IHsgdG90YWxUaW1lLCB0aW1lbGluZSB9ID0gYW5hbHl6ZShkZWYpO1xuXG4gICAgcmV0dXJuIG5ldyBUd2Vlbih7XG4gICAgICAgIC4uLnByb3BzLFxuICAgICAgICBkdXJhdGlvbjogdG90YWxUaW1lLFxuICAgICAgICBlYXNlOiBlYXNpbmcubGluZWFyLFxuICAgICAgICB2YWx1ZXM6IHtcbiAgICAgICAgICAgIHA6IDFcbiAgICAgICAgfSxcbiAgICAgICAgdGltZWxpbmU6IHRpbWVsaW5lLFxuICAgICAgICB0aW1lbGluZUxlbmd0aDogdGltZWxpbmUubGVuZ3RoLFxuICAgICAgICBvblJlbmRlcjogc2V0VHdlZW5zXG4gICAgfSk7XG59Il19

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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hZGFwdGVyL2F0dHItYWRhcHRlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7UUFFZ0I7UUFJQTs7Ozs7Ozs7QUFKVCxTQUFTLE1BQVQsQ0FBZ0IsR0FBaEIsRUFBcUI7QUFDeEIsV0FBTyxLQUFLLE9BQUwsQ0FBYSxZQUFiLENBQTBCLEdBQTFCLENBQVAsQ0FEd0I7Q0FBckI7O0FBSUEsU0FBUyxNQUFULENBQWdCLEtBQWhCLEVBQXVCO0FBQzFCLFNBQUssSUFBSSxHQUFKLElBQVcsS0FBaEIsRUFBdUI7QUFDbkIsWUFBSSxNQUFNLGNBQU4sQ0FBcUIsR0FBckIsQ0FBSixFQUErQjtBQUMzQixpQkFBSyxPQUFMLENBQWEsWUFBYixDQUEwQixHQUExQixFQUErQixNQUFNLEdBQU4sQ0FBL0IsRUFEMkI7U0FBL0I7S0FESjtDQURHOztrQkFRUSxVQUFDLE9BQUQ7V0FBYSx1QkFBYyxFQUFFLGdCQUFGLEVBQVcsY0FBWCxFQUFtQixjQUFuQixFQUFkO0NBQWIiLCJmaWxlIjoiYXR0ci1hZGFwdGVyLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9NYXR0L1NpdGVzL3BvcG1vdGlvbiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjcmVhdGVBZGFwdGVyIGZyb20gJy4vYWRhcHRlcic7XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXR0ZXIoa2V5KSB7XG4gICAgcmV0dXJuIHRoaXMuZWxlbWVudC5nZXRBdHRyaWJ1dGUoa2V5KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNldHRlcihwcm9wcykge1xuICAgIGZvciAobGV0IGtleSBpbiBwcm9wcykge1xuICAgICAgICBpZiAocHJvcHMuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgICAgdGhpcy5lbGVtZW50LnNldEF0dHJpYnV0ZShrZXksIHByb3BzW2tleV0pO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCAoZWxlbWVudCkgPT4gY3JlYXRlQWRhcHRlcih7IGVsZW1lbnQsIGdldHRlciwgc2V0dGVyIH0pOyJdfQ==

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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hZGFwdGVyL2Nzcy1hZGFwdGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTUEsU0FBUyxNQUFULENBQWlCLEdBQWpCLEVBQXNCO0FBQ2xCLFdBQU8sT0FBTyxnQkFBUCxDQUF3QixLQUFLLE9BQUwsRUFBYyxJQUF0QyxFQUE0Qyx3QkFBUyxHQUFULENBQTVDLENBQVAsQ0FEa0I7Q0FBdEI7O0FBSUEsU0FBUyxNQUFULENBQWdCLEtBQWhCLEVBQXVCO0FBQ25CLFNBQUssT0FBTCxDQUFhLEtBQWIsQ0FBbUIsT0FBbkIsSUFBOEIscUJBQW9CLEtBQXBCLENBQTlCLENBRG1CO0NBQXZCOztrQkFJZSxVQUFDLE9BQUQ7V0FBYSx1QkFBYyxFQUFFLGdCQUFGLEVBQVcsNEJBQVgsRUFBcUIsb0NBQXJCLEVBQW1DLGNBQW5DLEVBQTJDLGNBQTNDLEVBQWQ7Q0FBYiIsImZpbGUiOiJjc3MtYWRhcHRlci5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvTWF0dC9TaXRlcy9wb3Btb3Rpb24iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3RhdGVNYXAgZnJvbSAnLi9jc3Mvc3RhdGUtbWFwJztcbmltcG9ydCB2YWx1ZVR5cGVNYXAgZnJvbSAnLi9jc3MvdmFsdWUtdHlwZS1tYXAnO1xuaW1wb3J0IGJ1aWxkUHJvcGVydHlTdHJpbmcgZnJvbSAnLi9jc3MvYnVpbGQnO1xuaW1wb3J0IHByZWZpeGVyIGZyb20gJy4vY3NzL3ByZWZpeGVyJztcbmltcG9ydCBjcmVhdGVBZGFwdGVyIGZyb20gJy4vYWRhcHRlcic7XG5cbmZ1bmN0aW9uIGdldHRlciAoa2V5KSB7XG4gICAgcmV0dXJuIHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKHRoaXMuZWxlbWVudCwgbnVsbClbcHJlZml4ZXIoa2V5KV07XG59XG5cbmZ1bmN0aW9uIHNldHRlcihwcm9wcykge1xuICAgIHRoaXMuZWxlbWVudC5zdHlsZS5jc3NUZXh0ICs9IGJ1aWxkUHJvcGVydHlTdHJpbmcocHJvcHMpO1xufVxuXG5leHBvcnQgZGVmYXVsdCAoZWxlbWVudCkgPT4gY3JlYXRlQWRhcHRlcih7IGVsZW1lbnQsIHN0YXRlTWFwLCB2YWx1ZVR5cGVNYXAsIGdldHRlciwgc2V0dGVyIH0pOyJdfQ==

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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hZGFwdGVyL3N2Zy1hZGFwdGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztRQU1nQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFULFNBQVMsTUFBVCxDQUFnQixLQUFoQixFQUF1QjtBQUMxQiw2QkFBVyxxQkFBTSxLQUFOLEVBQWEsS0FBSyxNQUFMLENBQXhCLEVBRDBCO0NBQXZCOztrQkFJUSxVQUFDLE9BQUQsRUFBYTtBQUN4QixRQUFNLFVBQVUsdUJBQWMsRUFBRSxnQkFBRixFQUFXLDRCQUFYLEVBQXFCLG9DQUFyQixFQUFtQywyQkFBbkMsRUFBMkMsY0FBM0MsRUFBZCxDQUFWLENBRGtCO0FBRXhCLFFBQU0sT0FBTyxRQUFRLE9BQVIsRUFBUCxDQUZrQjtBQUd4QixRQUFNLG1CQUFtQixDQUFuQixDQUhrQjtBQUl4QixRQUFNLG1CQUFtQixDQUFuQixDQUprQjs7QUFNeEIsWUFBUSxNQUFSLEdBQWlCO0FBQ2IsV0FBRyxLQUFLLEtBQUwsSUFBYyxtQkFBbUIsR0FBbkIsQ0FBZCxHQUF3QyxLQUFLLENBQUw7QUFDM0MsV0FBRyxLQUFLLE1BQUwsSUFBZSxtQkFBbUIsR0FBbkIsQ0FBZixHQUF5QyxLQUFLLENBQUw7S0FGaEQsQ0FOd0I7O0FBV3hCLFdBQU8sT0FBUCxDQVh3QjtDQUFiIiwiZmlsZSI6InN2Zy1hZGFwdGVyLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9NYXR0L1NpdGVzL3BvcG1vdGlvbiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdGF0ZU1hcCBmcm9tICcuL2Nzcy9zdGF0ZS1tYXAnO1xuaW1wb3J0IHZhbHVlVHlwZU1hcCBmcm9tICcuL3N2Zy92YWx1ZS10eXBlLW1hcCc7XG5pbXBvcnQgYnVpbGQgZnJvbSAnLi9zdmcvYnVpbGQnO1xuaW1wb3J0IHsgZ2V0dGVyLCBzZXR0ZXIgYXMgYXR0clNldHRlciB9IGZyb20gJy4vYXR0ci1hZGFwdGVyJztcbmltcG9ydCBjcmVhdGVBZGFwdGVyIGZyb20gJy4vYWRhcHRlcic7XG5cbmV4cG9ydCBmdW5jdGlvbiBzZXR0ZXIocHJvcHMpIHtcbiAgICBhdHRyU2V0dGVyKGJ1aWxkKHByb3BzLCB0aGlzLm9yaWdpbikpO1xufVxuXG5leHBvcnQgZGVmYXVsdCAoZWxlbWVudCkgPT4ge1xuICAgIGNvbnN0IGFkYXB0ZXIgPSBjcmVhdGVBZGFwdGVyKHsgZWxlbWVudCwgc3RhdGVNYXAsIHZhbHVlVHlwZU1hcCwgZ2V0dGVyLCBzZXR0ZXIgfSk7XG4gICAgY29uc3QgYkJveCA9IGVsZW1lbnQuZ2V0QkJveCgpO1xuICAgIGNvbnN0IHRyYW5zZm9ybU9yaWdpblkgPSAwO1xuICAgIGNvbnN0IHRyYW5zZm9ybU9yaWdpblggPSAwO1xuXG4gICAgYWRhcHRlci5vcmlnaW4gPSB7XG4gICAgICAgIHg6IGJCb3gud2lkdGggKiAodHJhbnNmb3JtT3JpZ2luWCAvIDEwMCkgKyBiQm94LngsXG4gICAgICAgIHk6IGJCb3guaGVpZ2h0ICogKHRyYW5zZm9ybU9yaWdpblkgLyAxMDApICsgYkJveC55XG4gICAgfTtcblxuICAgIHJldHVybiBhZGFwdGVyO1xufTtcblxuIl19

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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hZGFwdGVyL3N2Zy1wYXRoLWFkYXB0ZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSUEsU0FBUyxNQUFULENBQWdCLEtBQWhCLEVBQXVCO0FBQ25CLFNBQUssU0FBTCxDQUFlLHFCQUFNLEtBQU4sRUFBYSxLQUFLLFVBQUwsQ0FBNUIsRUFEbUI7Q0FBdkI7O2tCQUllLFVBQUMsT0FBRCxFQUFhO0FBQ3hCLFFBQU0sVUFBVSwwQkFBVyxPQUFYLENBQVYsQ0FEa0I7O0FBR3hCLFlBQVEsUUFBUixzQkFId0I7QUFJeEIsWUFBUSxNQUFSLEdBQWlCLE1BQWpCLENBSndCO0FBS3hCLFlBQVEsU0FBUixzQkFMd0I7O0FBT3hCLFlBQVEsVUFBUixHQUFxQixRQUFRLGNBQVIsRUFBckIsQ0FQd0I7O0FBU3hCLFdBQU8sT0FBUCxDQVR3QjtDQUFiIiwiZmlsZSI6InN2Zy1wYXRoLWFkYXB0ZXIuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL01hdHQvU2l0ZXMvcG9wbW90aW9uIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGJ1aWxkIGZyb20gJy4vc3ZnLXBhdGgvYnVpbGQnO1xuaW1wb3J0IHN0YXRlTWFwIGZyb20gJy4vc3ZnLXBhdGgvc3RhdGUtbWFwJztcbmltcG9ydCBzdmdBZGFwdGVyLCB7IHNldHRlciBhcyBzdmdTZXR0ZXIgfSBmcm9tICcuL3N2Zy1hZGFwdGVyJztcblxuZnVuY3Rpb24gc2V0dGVyKHByb3BzKSB7XG4gICAgdGhpcy5zdmdTZXR0ZXIoYnVpbGQocHJvcHMsIHRoaXMucGF0aExlbmd0aCkpO1xufVxuXG5leHBvcnQgZGVmYXVsdCAoZWxlbWVudCkgPT4ge1xuICAgIGNvbnN0IGFkYXB0ZXIgPSBzdmdBZGFwdGVyKGVsZW1lbnQpO1xuXG4gICAgYWRhcHRlci5zdGF0ZU1hcCA9IHN0YXRlTWFwO1xuICAgIGFkYXB0ZXIuc2V0dGVyID0gc2V0dGVyO1xuICAgIGFkYXB0ZXIuc3ZnU2V0dGVyID0gc3ZnU2V0dGVyO1xuXG4gICAgYWRhcHRlci5wYXRoTGVuZ3RoID0gZWxlbWVudC5nZXRUb3RhbExlbmd0aCgpO1xuXG4gICAgcmV0dXJuIGFkYXB0ZXI7XG59O1xuIl19

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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hY3Rpb25zL2Vhc2luZy9wcmVzZXQtZWFzaW5nLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBOEJBLElBQU0sd0JBQXdCLEtBQXhCO0FBQ04sSUFBTSx1QkFBdUIsQ0FBdkI7Ozs7Ozs7O0FBUU4sSUFBTSxhQUFhO0FBQ2YsVUFBTSxVQUFDLFFBQUQ7WUFBVyxpRUFBVzt3QkFBeUIsVUFBWTtLQUEzRDtBQUNOLFVBQU07ZUFBWSxJQUFJLEtBQUssR0FBTCxDQUFTLEtBQUssSUFBTCxDQUFVLFFBQVYsQ0FBVCxDQUFKO0tBQVo7QUFDTixVQUFNLFVBQUMsUUFBRDtZQUFXLGlFQUFXO2VBQTBCLFFBQUMsR0FBVyxRQUFYLElBQXdCLENBQUMsV0FBVyxDQUFYLENBQUQsR0FBaUIsUUFBakIsR0FBNEIsUUFBNUIsQ0FBekI7S0FBaEQ7Q0FISjs7O0FBT04sSUFBTSxzQkFBc0IsVUFBQyxRQUFEO1dBQWMsVUFBQyxRQUFEO2VBQWMsV0FBVyxJQUFYLENBQWdCLFFBQWhCLEVBQTBCLFFBQTFCO0tBQWQ7Q0FBZDs7QUFFNUIsQ0FBQyxPQUFELEVBQVUsT0FBVixFQUFtQixPQUFuQixFQUE0QixPQUE1QixDQUFvQyxVQUFDLFVBQUQsRUFBYSxDQUFiO1dBQW1CLFdBQVcsVUFBWCxJQUF5QixvQkFBb0IsSUFBSSxDQUFKLENBQTdDO0NBQW5CLENBQXBDOzs7QUFHQSxLQUFLLElBQUksR0FBSixJQUFXLFVBQWhCLEVBQTRCO0FBQ3hCLFFBQUksV0FBVyxjQUFYLENBQTBCLEdBQTFCLENBQUosRUFBb0M7QUFDaEMsWUFBTSxpQkFBaUIsNEJBQXFCLFdBQVcsR0FBWCxDQUFyQixDQUFqQixDQUQwQjtBQUVoQyxtQkFBYyxVQUFkLElBQXlCLGVBQWUsRUFBZixDQUZPO0FBR2hDLG1CQUFjLFdBQWQsSUFBMEIsZUFBZSxHQUFmLENBSE07QUFJaEMsbUJBQWMsYUFBZCxJQUE0QixlQUFlLEtBQWYsQ0FKSTtLQUFwQztDQURKOztBQVNBLFdBQVcsTUFBWCxHQUFvQjtXQUFZO0NBQVo7QUFDcEIsV0FBVyxVQUFYLEdBQXdCLFVBQUMsUUFBRDtRQUFXLGlFQUFXO1dBQzFDLENBQUUsWUFBVSxDQUFWLENBQUQsR0FBZ0IsQ0FBaEIsR0FBcUIsTUFBTSxXQUFXLE1BQVgsQ0FBa0IsUUFBbEIsRUFBNEIsUUFBNUIsQ0FBTixHQUErQyxPQUFPLElBQUksS0FBSyxHQUFMLENBQVMsQ0FBVCxFQUFZLENBQUMsRUFBRCxJQUFPLFdBQVcsQ0FBWCxDQUFQLENBQWhCLENBQVA7Q0FEakQ7O0FBR3hCLFdBQVcsY0FBWDtBQUNBLFdBQVcsV0FBWDtBQUNBLFdBQVcsVUFBWCxHQUF3QixVQUFDLE1BQUQ7c0NBQVk7Ozs7V0FBUyxVQUFDLFFBQUQ7ZUFBYyx5QkFBTyxpQkFBYSxLQUFwQjtLQUFkO0NBQXJCOztrQkFFVCIsImZpbGUiOiJwcmVzZXQtZWFzaW5nLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9NYXR0L1NpdGVzL3BvcG1vdGlvbiIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gICAgRWFzaW5nIGZ1bmN0aW9uc1xuICAgIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICBcbiAgICBHZW5lcmF0ZXMgYW5kIHByb3ZpZGVzIGVhc2luZyBmdW5jdGlvbnMgYmFzZWQgb24gYmFzZUZ1bmN0aW9uIGRlZmluaXRpb25zXG4gICAgXG4gICAgQSBjYWxsIHRvIGVhc2luZ0Z1bmN0aW9uLmdldCgnZnVuY3Rpb25OYW1lJykgcmV0dXJucyBhIGZ1bmN0aW9uIHRoYXQgY2FuIGJlIHBhc3NlZDpcbiAgICAgICAgQHBhcmFtIFtudW1iZXJdOiBQcm9ncmVzcyAwLTFcbiAgICAgICAgQHBhcmFtIFtudW1iZXJdIChvcHRpb25hbCk6IEFtcCBtb2RpZmllciwgb25seSBhY2NlcHRlZCBpbiBzb21lIGVhc2luZyBmdW5jdGlvbnNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFuZCBpcyB1c2VkIHRvIGFkanVzdCBvdmVyYWxsIHN0cmVuZ3RoXG4gICAgICAgIEByZXR1cm4gW251bWJlcl06IEVhc2VkIHByb2dyZXNzXG4gICAgICAgIFxuICAgIFdlIGNhbiBnZW5lcmF0ZSBuZXcgZnVuY3Rpb25zIGJ5IHNlbmRpbmcgYW4gZWFzaW5nIGZ1bmN0aW9uIHRocm91Z2ggZWFzaW5nRnVuY3Rpb24uZXh0ZW5kKG5hbWUsIG1ldGhvZCkuXG4gICAgV2hpY2ggd2lsbCBtYWtlIG5hbWVJbiwgbmFtZU91dCBhbmQgbmFtZUluT3V0IGZ1bmN0aW9ucyBhdmFpbGFibGUgdG8gdXNlLlxuICAgICAgICBcbiAgICBFYXNpbmcgZnVuY3Rpb25zIGZyb20gUm9iZXJ0IFBlbm5lclxuICAgIGh0dHA6Ly93d3cucm9iZXJ0cGVubmVyLmNvbS9lYXNpbmcvXG4gICAgICAgIFxuICAgIEJlemllciBjdXJ2ZSBpbnRlcnByZXRvciBjcmVhdGVkIGZyb20gR2HDq3RhbiBSZW5hdWRlYXUncyBvcmlnaW5hbCBCZXppZXJFYXNpbmcgIFxuICAgIGh0dHBzOi8vZ2l0aHViLmNvbS9ncmUvYmV6aWVyLWVhc2luZy9ibG9iL21hc3Rlci9pbmRleC5qcyAgXG4gICAgaHR0cHM6Ly9naXRodWIuY29tL2dyZS9iZXppZXItZWFzaW5nL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcblxuICAgIEFudGljaXBhdGUgZWFzaW5nIGNyZWF0ZWQgYnkgRWxsaW90IEdpbm9cbiAgICBodHRwczovL3R3aXR0ZXIuY29tL0VsbGlvdEdlbm9cbiovXG4vLyBJbXBvcnRzXG5pbXBvcnQgY3JlYXRlRWFzaW5nRnVuY3Rpb24gZnJvbSAnLi9jcmVhdGUtZWFzaW5nJztcbmltcG9ydCBjdWJpY0JlemllciBmcm9tICcuL2NyZWF0ZS1iZXppZXInO1xuXG4vLyBWYWx1ZXNcbmNvbnN0IERFRkFVTFRfQkFDS19TVFJFTkdUSCA9IDEuNTI1O1xuY29uc3QgREVGQVVMVF9QT1dfU1RSRU5HVEggPSAyO1xuXG4vKlxuICAgIEVhY2ggb2YgdGhlc2UgYmFzZSBmdW5jdGlvbnMgaXMgYW4gZWFzZUluXG4gICAgXG4gICAgT24gaW5pdCwgd2UgdXNlIC5taXJyb3IgYW5kIC5yZXZlcnNlIHRvIGdlbmVyYXRlIGVhc2VJbk91dCBhbmRcbiAgICBlYXNlT3V0IGZ1bmN0aW9ucyByZXNwZWN0aXZlbHkuXG4qL1xuY29uc3QgYmFzZUVhc2luZyA9IHtcbiAgICBlYXNlOiAocHJvZ3Jlc3MsIHN0cmVuZ3RoID0gREVGQVVMVF9QT1dfU1RSRU5HVEgpID0+IHByb2dyZXNzICoqIHN0cmVuZ3RoLFxuICAgIGNpcmM6IHByb2dyZXNzID0+IDEgLSBNYXRoLnNpbihNYXRoLmFjb3MocHJvZ3Jlc3MpKSxcbiAgICBiYWNrOiAocHJvZ3Jlc3MsIHN0cmVuZ3RoID0gREVGQVVMVF9CQUNLX1NUUkVOR1RIKSA9PiAocHJvZ3Jlc3MgKiBwcm9ncmVzcykgKiAoKHN0cmVuZ3RoICsgMSkgKiBwcm9ncmVzcyAtIHN0cmVuZ3RoKVxufTtcblxuLy8gVXRpbGl0eSBmdW5jdGlvbnNcbmNvbnN0IGdlbmVyYXRlUG93ZXJFYXNpbmcgPSAoc3RyZW5ndGgpID0+IChwcm9ncmVzcykgPT4gYmFzZUVhc2luZy5lYXNlKHByb2dyZXNzLCBzdHJlbmd0aCk7XG5cblsnY3ViaWMnLCAncXVhcnQnLCAncXVpbnQnXS5mb3JFYWNoKChlYXNpbmdOYW1lLCBpKSA9PiBiYXNlRWFzaW5nW2Vhc2luZ05hbWVdID0gZ2VuZXJhdGVQb3dlckVhc2luZyhpICsgMykpO1xuXG4vLyBHZW5lcmF0ZSBpbi9vdXQvaW5PdXQgdmFyaWF0aW9uc1xuZm9yIChsZXQga2V5IGluIGJhc2VFYXNpbmcpIHtcbiAgICBpZiAoYmFzZUVhc2luZy5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgIGNvbnN0IGVhc2luZ0Z1bmN0aW9uID0gY3JlYXRlRWFzaW5nRnVuY3Rpb24oYmFzZUVhc2luZ1trZXldKTtcbiAgICAgICAgYmFzZUVhc2luZ1tgJHtrZXl9SW5gXSA9IGVhc2luZ0Z1bmN0aW9uLmluO1xuICAgICAgICBiYXNlRWFzaW5nW2Ake2tleX1PdXRgXSA9IGVhc2luZ0Z1bmN0aW9uLm91dDtcbiAgICAgICAgYmFzZUVhc2luZ1tgJHtrZXl9SW5PdXRgXSA9IGVhc2luZ0Z1bmN0aW9uLmluT3V0O1xuICAgIH1cbn1cblxuYmFzZUVhc2luZy5saW5lYXIgPSBwcm9ncmVzcyA9PiBwcm9ncmVzcztcbmJhc2VFYXNpbmcuYW50aWNpcGF0ZSA9IChwcm9ncmVzcywgc3RyZW5ndGggPSBERUZBVUxUX0JBQ0tfU1RSRU5HVEgpID0+XG4gICAgKChwcm9ncmVzcyo9MikgPCAxKSA/IDAuNSAqIGJhc2VFYXNpbmcuYmFja0luKHByb2dyZXNzLCBzdHJlbmd0aCkgOiAgMC41ICogKDIgLSBNYXRoLnBvdygyLCAtMTAgKiAocHJvZ3Jlc3MgLSAxKSkpO1xuXG5iYXNlRWFzaW5nLmVhc2luZ0Z1bmN0aW9uID0gY3JlYXRlRWFzaW5nRnVuY3Rpb247XG5iYXNlRWFzaW5nLmN1YmljQmV6aWVyID0gY3ViaWNCZXppZXI7XG5iYXNlRWFzaW5nLm1vZGlmeUVhc2UgPSAoZWFzaW5nLCAuLi5hcmdzKSA9PiAocHJvZ3Jlc3MpID0+IGVhc2luZyhwcm9ncmVzcywgLi4uYXJncyk7XG5cbmV4cG9ydCBkZWZhdWx0IGJhc2VFYXNpbmc7Il19

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports.stepProgress = exports.speedPerSecond = exports.speedPerFrame = exports.smooth = exports.restrict = exports.relativeValue = exports.random = exports.radiansToDegrees = exports.pointFromAngleAndDistance = exports.offset = exports.getProgressFromValue = exports.getValueFromProgress = exports.hypotenuse = exports.distance = exports.dilate = exports.degreesToRadians = exports.angle = undefined;
	
	var _utils = __webpack_require__(31);
	
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
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _defaultProps = __webpack_require__(42);
	
	exports.default = {
	    defaultProps: _defaultProps.opacity
	};
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy92YWx1ZS10eXBlcy9hbHBoYS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7a0JBRWU7QUFDWCx1Q0FEVyIsImZpbGUiOiJhbHBoYS5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvTWF0dC9TaXRlcy9wb3Btb3Rpb24iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBvcGFjaXR5IH0gZnJvbSAnLi9zZXR0aW5ncy9kZWZhdWx0LXByb3BzJztcblxuZXhwb3J0IGRlZmF1bHQge1xuICAgIGRlZmF1bHRQcm9wczogb3BhY2l0eVxufTsiXX0=

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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy92YWx1ZS10eXBlcy9hbmdsZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7a0JBQWU7QUFDWCxrQkFBYztBQUNWLGNBQU0sS0FBTjtLQURKIiwiZmlsZSI6ImFuZ2xlLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9NYXR0L1NpdGVzL3BvcG1vdGlvbiIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IHtcbiAgICBkZWZhdWx0UHJvcHM6IHtcbiAgICAgICAgdW5pdDogJ2RlZydcbiAgICB9XG59OyJdfQ==

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _utils = __webpack_require__(31);
	
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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy92YWx1ZS10eXBlcy9heGVzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O2tCQUllO0FBQ1gsa0JBQWMsYUFBWSxZQUFaOzs7Ozs7Ozs7O0FBVWQsV0FBTyxVQUFDLEtBQUQsRUFBVztBQUNkLFlBQU0sY0FBYyxnQ0FBb0IsS0FBcEIsQ0FBZCxDQURRO0FBRWQsWUFBTSxVQUFVLFlBQVksTUFBWixDQUZGO0FBR2QsWUFBTSxhQUFhO0FBQ2YsZUFBRyxZQUFZLENBQVosQ0FBSDtBQUNBLGVBQUcsT0FBQyxHQUFVLENBQVYsR0FBZSxZQUFZLENBQVosQ0FBaEIsR0FBaUMsWUFBWSxDQUFaLENBQWpDO1NBRkQsQ0FIUTs7QUFRZCxZQUFJLFVBQVUsQ0FBVixFQUFhO0FBQ2IsdUJBQVcsQ0FBWCxHQUFlLFlBQVksQ0FBWixDQUFmLENBRGE7U0FBakI7O0FBSUEsZUFBTyxVQUFQLENBWmM7S0FBWDs7QUFlUCxhQUFTLFVBQUMsTUFBRDtlQUFZLDRCQUFnQixNQUFoQixvQkFBOEIsR0FBOUI7S0FBWiIsImZpbGUiOiJheGVzLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9NYXR0L1NpdGVzL3BvcG1vdGlvbiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZURlbGltaXRlZCwgc3BsaXRTcGFjZURlbGltaXRlZCB9IGZyb20gJy4uL2luYy91dGlscyc7XG5pbXBvcnQgcHhWYWx1ZVR5cGUgZnJvbSAnLi9weCc7XG5pbXBvcnQgeyBheGVzIH0gZnJvbSAnLi9zZXR0aW5ncy9kaWN0aW9uYXJ5JztcblxuZXhwb3J0IGRlZmF1bHQge1xuICAgIGRlZmF1bHRQcm9wczogcHhWYWx1ZVR5cGUuZGVmYXVsdFByb3BzLFxuICAgICAgICBcbiAgICAvKlxuICAgICAgICBTcGxpdCBwb3NpdGlvbnMgaW4gZm9ybWF0IFwiWCBZIFpcIlxuICAgICAgICBcbiAgICAgICAgQHBhcmFtIFtzdHJpbmddOiBQb3NpdGlvbiB2YWx1ZXNcbiAgICAgICAgICAgIFwiMjAlIDMwJSAwXCIgLT4gezIwJSwgMzAlLCAwfVxuICAgICAgICAgICAgXCIyMCUgMzAlXCIgLT4gezIwJSwgMzAlfVxuICAgICAgICAgICAgXCIyMCVcIiAtPiB7MjAlLCAyMCV9XG4gICAgKi9cbiAgICBzcGxpdDogKHZhbHVlKSA9PiB7XG4gICAgICAgIGNvbnN0IHNwbGl0VmFsdWVzID0gc3BsaXRTcGFjZURlbGltaXRlZCh2YWx1ZSk7XG4gICAgICAgIGNvbnN0IG51bUF4ZXMgPSBzcGxpdFZhbHVlcy5sZW5ndGg7XG4gICAgICAgIGNvbnN0IHNwbGl0VmFsdWUgPSB7XG4gICAgICAgICAgICBYOiBzcGxpdFZhbHVlc1swXSxcbiAgICAgICAgICAgIFk6IChudW1BeGVzID4gMSkgPyBzcGxpdFZhbHVlc1sxXSA6IHNwbGl0VmFsdWVzWzBdXG4gICAgICAgIH07XG5cbiAgICAgICAgaWYgKG51bUF4ZXMgPiAyKSB7XG4gICAgICAgICAgICBzcGxpdFZhbHVlLlogPSBzcGxpdFZhbHVlc1syXTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBzcGxpdFZhbHVlO1xuICAgIH0sXG5cbiAgICBjb21iaW5lOiAodmFsdWVzKSA9PiBjcmVhdGVEZWxpbWl0ZWQodmFsdWVzLCBheGVzLCAnICcpXG59O1xuIl19

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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy92YWx1ZS10eXBlcy9jb2xvci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUlBLElBQU0sYUFBYSw2Q0FBYjtBQUNOLElBQU0sZ0JBQWdCLFdBQVcsTUFBWDs7a0JBRVA7QUFDWCwrQkFBbUIsY0FBSSxZQUFKLEVBQXFCLGNBQUksWUFBSixDQUF4Qzs7QUFFQSxVQUFNLFVBQUMsS0FBRDtlQUFXLGNBQUksSUFBSixDQUFTLEtBQVQsS0FBbUIsY0FBSSxJQUFKLENBQVMsS0FBVCxDQUFuQixJQUFzQyxjQUFJLElBQUosQ0FBUyxLQUFULENBQXRDO0tBQVg7O0FBRU4sV0FBTyxVQUFDLEtBQUQsRUFBVztBQUNkLGFBQUssSUFBSSxJQUFJLENBQUosRUFBTyxJQUFJLGFBQUosRUFBbUIsR0FBbkMsRUFBd0M7QUFDcEMsZ0JBQUksV0FBVyxDQUFYLEVBQWMsSUFBZCxDQUFtQixLQUFuQixDQUFKLEVBQStCO0FBQzNCLHVCQUFPLFdBQVcsQ0FBWCxFQUFjLEtBQWQsQ0FBb0IsS0FBcEIsQ0FBUCxDQUQyQjthQUEvQjtTQURKO0tBREc7O0FBUVAsYUFBUyxVQUFDLE1BQUQ7ZUFBWSxNQUFDLENBQU8sR0FBUCxLQUFlLFNBQWYsR0FBNEIsY0FBSSxPQUFKLENBQVksTUFBWixDQUE3QixHQUFtRCxjQUFJLE9BQUosQ0FBWSxNQUFaLENBQW5EO0tBQVoiLCJmaWxlIjoiY29sb3IuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL01hdHQvU2l0ZXMvcG9wbW90aW9uIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHJnYiBmcm9tICcuL3JnYic7XG5pbXBvcnQgaHNsIGZyb20gJy4vaHNsJztcbmltcG9ydCBoZXggZnJvbSAnLi9oZXgnO1xuXG5jb25zdCBjb2xvclR5cGVzID0gW3JnYiwgaHNsLCBoZXhdO1xuY29uc3QgbnVtQ29sb3JUeXBlcyA9IGNvbG9yVHlwZXMubGVuZ3RoO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgZGVmYXVsdFByb3BzOiB7IC4uLnJnYi5kZWZhdWx0UHJvcHMsIC4uLmhzbC5kZWZhdWx0UHJvcHMgfSxcblxuICAgIHRlc3Q6ICh2YWx1ZSkgPT4gcmdiLnRlc3QodmFsdWUpIHx8IGhleC50ZXN0KHZhbHVlKSB8fCBoc2wudGVzdCh2YWx1ZSksXG5cbiAgICBzcGxpdDogKHZhbHVlKSA9PiB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbnVtQ29sb3JUeXBlczsgaSsrKSB7XG4gICAgICAgICAgICBpZiAoY29sb3JUeXBlc1tpXS50ZXN0KHZhbHVlKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBjb2xvclR5cGVzW2ldLnNwbGl0KHZhbHVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICBjb21iaW5lOiAodmFsdWVzKSA9PiAodmFsdWVzLlJlZCAhPT0gdW5kZWZpbmVkKSA/IHJnYi5jb21iaW5lKHZhbHVlcykgOiBoc2wuY29tYmluZSh2YWx1ZXMpXG59O1xuIl19

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _utils = __webpack_require__(31);
	
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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy92YWx1ZS10eXBlcy9oZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztrQkFFZTtBQUNYLGtCQUFjLGNBQUksWUFBSjs7QUFFZCxVQUFNLFVBQUMsS0FBRDtlQUFZLFNBQVMsTUFBTSxPQUFOLENBQWMsR0FBZCxJQUFxQixDQUFDLENBQUQ7S0FBMUM7O0FBRU4sV0FBTyxVQUFDLEtBQUQsRUFBVztBQUNkLFlBQUksYUFBSjtZQUFPLGFBQVA7WUFBVSxhQUFWOzs7QUFEYyxZQUlWLE1BQU0sTUFBTixHQUFlLENBQWYsRUFBa0I7QUFDbEIsZ0JBQUksTUFBTSxNQUFOLENBQWEsQ0FBYixFQUFnQixDQUFoQixDQUFKLENBRGtCO0FBRWxCLGdCQUFJLE1BQU0sTUFBTixDQUFhLENBQWIsRUFBZ0IsQ0FBaEIsQ0FBSixDQUZrQjtBQUdsQixnQkFBSSxNQUFNLE1BQU4sQ0FBYSxDQUFiLEVBQWdCLENBQWhCLENBQUo7OztBQUhrQixTQUF0QixNQU1PO0FBQ0gsb0JBQUksTUFBTSxNQUFOLENBQWEsQ0FBYixFQUFnQixDQUFoQixDQUFKLENBREc7QUFFSCxvQkFBSSxNQUFNLE1BQU4sQ0FBYSxDQUFiLEVBQWdCLENBQWhCLENBQUosQ0FGRztBQUdILG9CQUFJLE1BQU0sTUFBTixDQUFhLENBQWIsRUFBZ0IsQ0FBaEIsQ0FBSixDQUhHO0FBSUgscUJBQUssQ0FBTCxDQUpHO0FBS0gscUJBQUssQ0FBTCxDQUxHO0FBTUgscUJBQUssQ0FBTCxDQU5HO2FBTlA7O0FBZUEsZUFBTztBQUNILGlCQUFLLFNBQVMsQ0FBVCxFQUFZLEVBQVosQ0FBTDtBQUNBLG1CQUFPLFNBQVMsQ0FBVCxFQUFZLEVBQVosQ0FBUDtBQUNBLGtCQUFNLFNBQVMsQ0FBVCxFQUFZLEVBQVosQ0FBTjtBQUNBLG1CQUFPLENBQVA7U0FKSixDQW5CYztLQUFYOztBQTJCUCxhQUFTLFVBQUMsTUFBRDtlQUFZLGNBQUksT0FBSixDQUFZLE1BQVo7S0FBWiIsImZpbGUiOiJoZXguanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL01hdHQvU2l0ZXMvcG9wbW90aW9uIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHJnYiBmcm9tICcuL3JnYic7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBkZWZhdWx0UHJvcHM6IHJnYi5kZWZhdWx0UHJvcHMsXG5cbiAgICB0ZXN0OiAodmFsdWUpID0+ICh2YWx1ZSAmJiB2YWx1ZS5pbmRleE9mKCcjJykgPiAtMSksXG5cbiAgICBzcGxpdDogKHZhbHVlKSA9PiB7XG4gICAgICAgIGxldCByLCBnLCBiO1xuXG4gICAgICAgIC8vIElmIHdlIGhhdmUgNiBjaGFyYWN0ZXJzLCBpZSAjRkYwMDAwXG4gICAgICAgIGlmICh2YWx1ZS5sZW5ndGggPiA0KSB7XG4gICAgICAgICAgICByID0gdmFsdWUuc3Vic3RyKDEsIDIpO1xuICAgICAgICAgICAgZyA9IHZhbHVlLnN1YnN0cigzLCAyKTtcbiAgICAgICAgICAgIGIgPSB2YWx1ZS5zdWJzdHIoNSwgMik7XG5cbiAgICAgICAgLy8gT3Igd2UgaGF2ZSAzIGNoYXJhY3RlcnMsIGllICNGMDBcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHIgPSB2YWx1ZS5zdWJzdHIoMSwgMSk7XG4gICAgICAgICAgICBnID0gdmFsdWUuc3Vic3RyKDIsIDEpO1xuICAgICAgICAgICAgYiA9IHZhbHVlLnN1YnN0cigzLCAxKTtcbiAgICAgICAgICAgIHIgKz0gcjtcbiAgICAgICAgICAgIGcgKz0gZztcbiAgICAgICAgICAgIGIgKz0gYjtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBSZWQ6IHBhcnNlSW50KHIsIDE2KSxcbiAgICAgICAgICAgIEdyZWVuOiBwYXJzZUludChnLCAxNiksXG4gICAgICAgICAgICBCbHVlOiBwYXJzZUludChiLCAxNiksXG4gICAgICAgICAgICBBbHBoYTogMVxuICAgICAgICB9O1xuICAgIH0sXG5cbiAgICBjb21iaW5lOiAodmFsdWVzKSA9PiByZ2IuY29tYmluZSh2YWx1ZXMpXG59OyJdfQ==

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _defaultProps = __webpack_require__(42);
	
	var _dictionary = __webpack_require__(43);
	
	var _utils = __webpack_require__(31);
	
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
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _dictionary = __webpack_require__(43);
	
	var _utils = __webpack_require__(31);
	
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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy92YWx1ZS10eXBlcy9wb3NpdGlvbnMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7a0JBSWU7QUFDWCxrQkFBYyxhQUFZLFlBQVo7Ozs7Ozs7Ozs7Ozs7QUFhZCxXQUFPLFVBQUMsS0FBRCxFQUFXO0FBQ2QsWUFBTSxhQUFhLEVBQWIsQ0FEUTtBQUVkLFlBQU0saUJBQWlCLGdDQUFvQixLQUFwQixDQUFqQixDQUZRO0FBR2QsWUFBTSxlQUFlLGVBQWUsTUFBZixDQUhQO0FBSWQsWUFBTSxXQUFXLFlBQUMsS0FBaUIsQ0FBakIsR0FBc0IsQ0FBdkIsR0FBMkIsQ0FBM0IsQ0FKSDtBQUtkLFlBQUksSUFBSSxDQUFKLENBTFU7O0FBT2QsYUFBSyxJQUFJLElBQUksQ0FBSixFQUFPLElBQUksQ0FBSixFQUFPLEdBQXZCLEVBQTRCO0FBQ3hCLHVCQUFXLHNCQUFVLENBQVYsQ0FBWCxJQUEyQixlQUFlLENBQWYsQ0FBM0I7OztBQUR3QixhQUl4QixHQUp3QjtBQUt4QixnQkFBSSxDQUFDLEtBQU0sWUFBTixHQUFzQixJQUFJLFFBQUosR0FBZSxDQUF0QyxDQUxvQjtTQUE1Qjs7QUFRQSxlQUFPLFVBQVAsQ0FmYztLQUFYOztBQWtCUCxhQUFTLFVBQUMsTUFBRDtlQUFZLDRCQUFnQixNQUFoQix5QkFBbUMsR0FBbkM7S0FBWiIsImZpbGUiOiJwb3NpdGlvbnMuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL01hdHQvU2l0ZXMvcG9wbW90aW9uIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgcG9zaXRpb25zIH0gZnJvbSAnLi9zZXR0aW5ncy9kaWN0aW9uYXJ5JztcbmltcG9ydCB7IGNyZWF0ZURlbGltaXRlZCwgc3BsaXRTcGFjZURlbGltaXRlZCB9IGZyb20gJy4uL2luYy91dGlscyc7XG5pbXBvcnQgcHhWYWx1ZVR5cGUgZnJvbSAnLi9weCc7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBkZWZhdWx0UHJvcHM6IHB4VmFsdWVUeXBlLmRlZmF1bHRQcm9wcyxcblxuICAgIC8qXG4gICAgICAgIFNwbGl0IGRpbWVuc2lvbnMgaW4gZm9ybWF0IFwiVG9wIFJpZ2h0IEJvdHRvbSBMZWZ0XCJcbiAgICAgICAgXG4gICAgICAgIEBwYXJhbSBbc3RyaW5nXTogUG9zaXRpb24gdmFsdWVzXG4gICAgICAgICAgICBcIjIwcHggMCAzMHB4IDQwcHhcIiAtPiB7MjBweCwgMCwgMzBweCwgNDBweH1cbiAgICAgICAgICAgIFwiMjBweCAwIDMwcHhcIiAtPiB7MjBweCwgMCwgMzBweCwgMH1cbiAgICAgICAgICAgIFwiMjBweCAwXCIgLT4gezIwcHgsIDAsIDIwcHgsIDB9XG4gICAgICAgICAgICBcIjIwcHhcIiAtPiB7MjBweCwgMjBweCwgMjBweCwgMjBweH1cbiAgICAgICAgXG4gICAgICAgIEByZXR1cm4gW29iamVjdF06IE9iamVjdCB3aXRoIFQvUi9CL0wgbWV0cmljc1xuICAgICovXG4gICAgc3BsaXQ6ICh2YWx1ZSkgPT4ge1xuICAgICAgICBjb25zdCBzcGxpdFZhbHVlID0ge307XG4gICAgICAgIGNvbnN0IHNwbGl0UG9zaXRpb25zID0gc3BsaXRTcGFjZURlbGltaXRlZCh2YWx1ZSk7XG4gICAgICAgIGNvbnN0IG51bVBvc2l0aW9ucyA9IHNwbGl0UG9zaXRpb25zLmxlbmd0aDtcbiAgICAgICAgY29uc3QganVtcEJhY2sgPSAobnVtUG9zaXRpb25zICE9PSAxKSA/IDIgOiAxO1xuICAgICAgICBsZXQgaiA9IDA7XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCA0OyBpKyspIHtcbiAgICAgICAgICAgIHNwbGl0VmFsdWVbcG9zaXRpb25zW2ldXSA9IHNwbGl0UG9zaXRpb25zW2pdO1xuXG4gICAgICAgICAgICAvLyBKdW1wIGJhY2sgKHRvIHN0YXJ0KSBjb3VudGVyIGlmIHdlJ3ZlIHJlYWNoZWQgdGhlIGVuZCBvZiBvdXIgdmFsdWVzXG4gICAgICAgICAgICBqKys7XG4gICAgICAgICAgICBqID0gKGogPT09IG51bVBvc2l0aW9ucykgPyBqIC0ganVtcEJhY2sgOiBqO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHNwbGl0VmFsdWU7XG4gICAgfSxcblxuICAgIGNvbWJpbmU6ICh2YWx1ZXMpID0+IGNyZWF0ZURlbGltaXRlZCh2YWx1ZXMsIHBvc2l0aW9ucywgJyAnKVxufTsiXX0=

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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy92YWx1ZS10eXBlcy9weC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7a0JBQWU7QUFDWCxrQkFBYztBQUNWLGNBQU0sSUFBTjtLQURKIiwiZmlsZSI6InB4LmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9NYXR0L1NpdGVzL3BvcG1vdGlvbiIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IHtcbiAgICBkZWZhdWx0UHJvcHM6IHtcbiAgICAgICAgdW5pdDogJ3B4J1xuICAgIH1cbn07Il19

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _utils = __webpack_require__(31);
	
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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy92YWx1ZS10eXBlcy9yZ2IuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztrQkFJZTtBQUNYLGtCQUFjO0FBQ1YsOEJBRFU7QUFFVixnQ0FGVTtBQUdWLCtCQUhVO0FBSVYsb0NBSlU7S0FBZDs7QUFPQSxVQUFNLFVBQUMsS0FBRDtlQUFZLFNBQVMsTUFBTSxPQUFOLENBQWMsS0FBZCxJQUF1QixDQUFDLENBQUQ7S0FBNUM7O0FBRU4sV0FBTyxVQUFDLEtBQUQ7ZUFBVywyQkFBZSxLQUFmO0tBQVg7O0FBRVAsYUFBUyxVQUFDLE1BQUQ7ZUFBWSxpQ0FBcUIsNEJBQWdCLE1BQWhCLG1CQUFrQyxJQUFsQyxFQUF3QyxDQUF4QyxDQUFyQixFQUFpRSxNQUFqRTtLQUFaIiwiZmlsZSI6InJnYi5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvTWF0dC9TaXRlcy9wb3Btb3Rpb24iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVEZWxpbWl0ZWQsIGNyZWF0ZUZ1bmN0aW9uU3RyaW5nLCBnZXRDb2xvclZhbHVlcyB9IGZyb20gJy4uL2luYy91dGlscyc7XG5pbXBvcnQgeyByZ2IgYXMgcmdiVGVybXMgfSBmcm9tICcuL3NldHRpbmdzL2RpY3Rpb25hcnknO1xuaW1wb3J0IHsgcmdiIGFzIGRlZmF1bHRSR0IsIG9wYWNpdHkgYXMgZGVmYXVsdE9wYWNpdHkgfSBmcm9tICcuL3NldHRpbmdzL2RlZmF1bHQtcHJvcHMnO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgZGVmYXVsdFByb3BzOiB7XG4gICAgICAgIFJlZDogZGVmYXVsdFJHQixcbiAgICAgICAgR3JlZW46IGRlZmF1bHRSR0IsXG4gICAgICAgIEJsdWU6IGRlZmF1bHRSR0IsXG4gICAgICAgIEFscGhhOiBkZWZhdWx0T3BhY2l0eVxuICAgIH0sXG5cbiAgICB0ZXN0OiAodmFsdWUpID0+ICh2YWx1ZSAmJiB2YWx1ZS5pbmRleE9mKCdyZ2InKSA+IC0xKSxcblxuICAgIHNwbGl0OiAodmFsdWUpID0+IGdldENvbG9yVmFsdWVzKHZhbHVlLCByZ2JUZXJtcyksXG5cbiAgICBjb21iaW5lOiAodmFsdWVzKSA9PiBjcmVhdGVGdW5jdGlvblN0cmluZyhjcmVhdGVEZWxpbWl0ZWQodmFsdWVzLCByZ2JUZXJtcywgJywgJywgMiksICdyZ2JhJylcbn07Il19

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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy92YWx1ZS10eXBlcy9zY2FsZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7a0JBQWU7QUFDWCxrQkFBYztBQUNWLGlCQUFTLENBQVQ7S0FESiIsImZpbGUiOiJzY2FsZS5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvTWF0dC9TaXRlcy9wb3Btb3Rpb24iLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCB7XG4gICAgZGVmYXVsdFByb3BzOiB7XG4gICAgICAgIGN1cnJlbnQ6IDFcbiAgICB9XG59OyJdfQ==

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
	
	var _utils = __webpack_require__(31);
	
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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9pbmMvdHJhbnNmb3JtZXJzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFFTyxJQUFNLHNDQUFlLFVBQUMsSUFBRCxFQUFPLEVBQVAsRUFBYztBQUN0QyxRQUFNLFlBQVksS0FBSyxNQUFMLENBRG9COztBQUd0QyxXQUFPLFVBQUMsS0FBRCxFQUFXO0FBQ2QsYUFBSyxJQUFJLElBQUksQ0FBSixFQUFPLElBQUksU0FBSixFQUFlLEdBQS9CLEVBQW9DO0FBQ2hDLGdCQUFJLFFBQVEsS0FBSyxDQUFMLENBQVIsSUFBbUIsTUFBTSxTQUFOLEVBQWlCO0FBQ3BDLHVCQUFPLGdDQUFxQixvQkFBUyxnQ0FBcUIsS0FBckIsRUFBNEIsS0FBSyxJQUFJLENBQUosQ0FBakMsRUFBeUMsS0FBSyxDQUFMLENBQXpDLENBQVQsRUFBNEQsQ0FBNUQsRUFBK0QsQ0FBL0QsQ0FBckIsRUFBd0YsR0FBRyxJQUFJLENBQUosQ0FBM0YsRUFBbUcsR0FBRyxDQUFILENBQW5HLENBQVAsQ0FEb0M7YUFBeEM7U0FESjtLQURHLENBSCtCO0NBQWQ7O0FBWXJCLElBQU0sMENBQWlCLFVBQUMsQ0FBRCxFQUFJLEdBQUo7UUFBVztXQUNyQyxxQ0FBMEI7QUFDdEIsV0FBRyxPQUFPLE9BQVAsQ0FBZSxPQUFmO0FBQ0gsV0FBRyxPQUFPLE9BQVAsQ0FBZSxPQUFmO0tBRlAsRUFHRyxPQUFPLEtBQVAsQ0FBYSxPQUFiLEVBQXNCLE9BQU8sUUFBUCxDQUFnQixPQUFoQixDQUh6QixDQUdrRCxHQUhsRDtDQUQwQiIsImZpbGUiOiJ0cmFuc2Zvcm1lcnMuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL01hdHQvU2l0ZXMvcG9wbW90aW9uIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZ2V0UHJvZ3Jlc3NGcm9tVmFsdWUsIGdldFZhbHVlRnJvbVByb2dyZXNzLCByZXN0cmljdCwgcG9pbnRGcm9tQW5nbGVBbmREaXN0YW5jZSB9IGZyb20gJy4uL2luYy9jYWxjJztcblxuZXhwb3J0IGNvbnN0IGNyZWF0ZU1hcHBlciA9IChmcm9tLCB0bykgPT4ge1xuICAgIGNvbnN0IG1hcExlbmd0aCA9IGZyb20ubGVuZ3RoO1xuXG4gICAgcmV0dXJuICh2YWx1ZSkgPT4ge1xuICAgICAgICBmb3IgKGxldCBpID0gMTsgaSA8IG1hcExlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAodmFsdWUgPCBmcm9tW2ldIHx8IGkgPT09IG1hcExlbmd0aCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBnZXRWYWx1ZUZyb21Qcm9ncmVzcyhyZXN0cmljdChnZXRQcm9ncmVzc0Zyb21WYWx1ZSh2YWx1ZSwgZnJvbVtpIC0gMV0sIGZyb21baV0pLCAwLCAxKSwgdG9baSAtIDFdLCB0b1tpXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xufTtcblxuZXhwb3J0IGNvbnN0IGNpcmN1bGFyTW90aW9uID0gKHYsIGtleSwgeyB2YWx1ZXMgfSkgPT4gXG4gICAgcG9pbnRGcm9tQW5nbGVBbmREaXN0YW5jZSh7XG4gICAgICAgIHg6IHZhbHVlcy5vcmlnaW5YLmN1cnJlbnQsXG4gICAgICAgIHk6IHZhbHVlcy5vcmlnaW5ZLmN1cnJlbnQgXG4gICAgfSwgdmFsdWVzLmFuZ2xlLmN1cnJlbnQsIHZhbHVlcy5kaXN0YW5jZS5jdXJyZW50KVtrZXldO1xuXG4iXX0=

/***/ },
/* 31 */
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
	//# sourceMappingURL=data:application/json;base64,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VUFBQyxRQUFELEVBQWM7QUFDbkMsUUFBTSxRQUFRLE9BQVEsUUFBUCxLQUFvQixRQUFwQixHQUFnQyxTQUFTLGdCQUFULENBQTBCLFFBQTFCLENBQWpDLEdBQXVFLFFBQXZFLENBRHFCO0FBRW5DLFdBQU8sS0FBQyxDQUFNLE1BQU4sR0FBZ0IsR0FBRyxLQUFILENBQVMsSUFBVCxDQUFjLEtBQWQsQ0FBakIsR0FBd0MsR0FBRyxJQUFILENBQVEsS0FBUixDQUF4QyxDQUY0QjtDQUFkOzs7Ozs7Ozs7O0FBYWxCLElBQU0sb0RBQXNCLFVBQUMsS0FBRDtXQUFXLFNBQVMsS0FBVCxJQUFrQixNQUFNLEtBQU4sQ0FBWSxNQUFaLENBQWxCLEdBQXdDLENBQUMsS0FBRCxDQUF4QztDQUFYOzs7Ozs7Ozs7O0FBVTVCLElBQU0sb0RBQXNCLFVBQUMsS0FBRDtXQUFXLFNBQVMsS0FBVCxJQUFrQixNQUFNLEtBQU4sQ0FBWSxHQUFaLENBQWxCLEdBQXFDLENBQUMsS0FBRCxDQUFyQztDQUFYOzs7Ozs7Ozs7O0FBVTVCLElBQU0sMENBQWlCLFVBQUMsS0FBRCxFQUFXO0FBQ3JDLFFBQU0sV0FBVyxNQUFNLEtBQU4sQ0FBWSxtQkFBWixDQUFYLENBRCtCOztBQUdyQyxXQUFPO0FBQ0gsZUFBTyxXQUFXLFNBQVMsQ0FBVCxDQUFYLENBQVA7QUFDQSxjQUFPLFNBQVMsQ0FBVCxDQUFQO0tBRkosQ0FIcUM7Q0FBWDs7Ozs7Ozs7O0FBZ0J2QixJQUFNLGdDQUFZLFVBQUMsR0FBRCxFQUF3QjtRQUFsQixrRUFBWSxpQkFBTTs7QUFDN0MseUJBQVksSUFBTSxVQUFsQixDQUQ2QztBQUU3QyxXQUFPLEtBQUssS0FBTCxDQUFXLE1BQU0sU0FBTixDQUFYLEdBQThCLFNBQTlCLENBRnNDO0NBQXhCIiwiZmlsZSI6InV0aWxzLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9NYXR0L1NpdGVzL3BvcG1vdGlvbiIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IENBTUVMX0NBU0VfUEFUVEVSTiA9IC8oW2Etel0pKFtBLVpdKS9nO1xuY29uc3QgUkVQTEFDRV9URU1QTEFURSA9ICckMS0kMic7XG5jb25zdCBIQVNfUEVSRk9STUFOQ0VfTk9XID0gKHR5cGVvZiBwZXJmb3JtYW5jZSAhPT0gJ3VuZGVmaW5lZCcgJiYgcGVyZm9ybWFuY2Uubm93KTtcblxuLypcbiAgICBHZXQgdmFyIHR5cGUgYXMgc3RyaW5nXG4gICAgXG4gICAgQHBhcmFtOiBWYXJpYWJsZSB0byB0ZXN0XG4gICAgQHJldHVybiBbc3RyaW5nXTogUmV0dXJucywgZm9yIGluc3RhbmNlICdPYmplY3QnIGlmIFtvYmplY3QgT2JqZWN0XVxuKi9cbmNvbnN0IHZhclR5cGUgPSB2YXJpYWJsZSA9PiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwodmFyaWFibGUpLnNsaWNlKDgsIC0xKTtcblxuLypcbiAgICBDb252ZXJ0IGNhbWVsQ2FzZSB0byBkYXNoLWNhc2VcblxuICAgIEBwYXJhbSBbc3RyaW5nXVxuICAgIEByZXR1cm4gW3N0cmluZ11cbiovXG5leHBvcnQgY29uc3QgY2FtZWxUb0Rhc2ggPSAoc3RyaW5nKSA9PiBzdHJpbmcucmVwbGFjZShDQU1FTF9DQVNFX1BBVFRFUk4sIFJFUExBQ0VfVEVNUExBVEUpLnRvTG93ZXJDYXNlKCk7XG5cbi8qXG4gICAgQ29tYmluZSB0cmFuc2Zvcm1lcnMgaW50byBvbmUgZnVuY3Rpb24gdGhhdCBjYWxscyBldmVyeVxuICAgIHRyYW5zZm9ybWVyIGluIHRoZSBhcnJheSBhbmQgcmV0dXJucyB0aGUgcmVzdWx0XG5cbiAgICBAcGFyYW0gW2FycmF5XVxuICAgIEByZXR1cm4gW2Z1bmN0aW9uXVxuKi9cbmV4cG9ydCBjb25zdCBjb21iaW5lVHJhbnNmb3JtZXJzID0gKHRyYW5zZm9ybWVycykgPT4ge1xuICAgIGNvbnN0IG51bVRyYW5zZm9ybWVycyA9IHRyYW5zZm9ybWVycy5sZW5ndGg7XG4gICAgbGV0IGkgPSAwO1xuXG4gICAgLypcbiAgICAgICAgQHBhcmFtIFtudW1iZXJdXG4gICAgICAgIEBwYXJhbSBbc3RyaW5nXVxuICAgICAgICBAcGFyYW0gW0FjdGlvbl1cbiAgICAgICAgQHJldHVybiBbbnVtYmVyXVxuICAgICovXG4gICAgcmV0dXJuICh2LCBrZXksIGEpID0+IHtcbiAgICAgICAgZm9yIChpID0gMDsgaSA+IG51bVRyYW5zZm9ybWVyczsgaSsrKSB7XG4gICAgICAgICAgICB2ID0gdHJhbnNmb3JtZXJzW2ldKHYsIGtleSwgYSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdjtcbiAgICB9O1xufTtcblxuZXhwb3J0IGNvbnN0IGNyZWF0ZURlbGltaXRlZCA9ICh2YWx1ZXMsIHRlcm1zLCBkZWxpbWl0ZXIsIGNob3ApID0+IHtcbiAgICBjb25zdCBudW1UZXJtcyA9IHRlcm1zLmxlbmd0aDtcbiAgICBsZXQgY29tYmluZWQgPSAnJztcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbnVtVGVybXM7IGkrKykge1xuICAgICAgICBjb25zdCB0ZXJtID0gdGVybXNbaV07XG4gICAgICAgIGlmICh2YWx1ZXMuaGFzT3duUHJvcGVydHkodGVybSkpIHtcbiAgICAgICAgICAgIGNvbWJpbmVkICs9IHZhbHVlc1t0ZXJtXSArIGRlbGltaXRlcjtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGlmIChjaG9wKSB7XG4gICAgICAgIGNvbWJpbmVkID0gY29tYmluZWQuc2xpY2UoMCwgLWNob3ApO1xuICAgIH1cblxuICAgIHJldHVybiBjb21iaW5lZDtcbn07XG5cbi8qXG4gICAgQ3JlYXRlIGEgZnVuY3Rpb24gc3RyaW5nXG5cbiAgICAnMjBweCcsICd0cmFuc2xhdGUnIC0+ICd0cmFuc2xhdGUoMjBweCknXG5cbiAgICBAcGFyYW0gW3N0cmluZ11cbiAgICBAcGFyYW0gW3N0cmluZ11cbiAgICBAcmV0dXJuIFtzdHJpbmddXG4qL1xuZXhwb3J0IGNvbnN0IGNyZWF0ZUZ1bmN0aW9uU3RyaW5nID0gKHZhbHVlLCBwcmVmaXgpID0+IGAke3ByZWZpeH0oJHt2YWx1ZX0pYDtcblxuLypcbiAgICBHZW5lcmF0ZSBjdXJyZW50IHRpbWVzdGFtcFxuICAgIFxuICAgIEByZXR1cm4gW3RpbWVzdGFtcF06IEN1cnJlbnQgVU5JWCB0aW1lc3RhbXBcbiovXG5leHBvcnQgY29uc3QgY3VycmVudFRpbWUgPSBIQVNfUEVSRk9STUFOQ0VfTk9XID8gKCkgPT4gcGVyZm9ybWFuY2Uubm93KCkgOiAoKSA9PiBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcblxuLypcbiAgICBTcGxpdCBjb2xvciBzdHJpbmcgaW50byBtYXAgb2YgY29sb3IgcHJvcGVydGllc1xuXG4gICAgXCJyZ2JhKDI1NSwgMjU1LCAyNTUsIDApXCIsIFtcIlJlZFwiLCAnR3JlZW5cIiwgXCJCbHVlXCIsIFwiQWxwaGFcIl1cblxuICAgIHsgUmVkOiAyNTUuLi4gfVxuKi9cbmV4cG9ydCBjb25zdCBnZXRDb2xvclZhbHVlcyA9ICh2YWx1ZSwgY29sb3JUZXJtcykgPT4ge1xuICAgIGNvbnN0IG51bUNvbG9yVGVybXMgPSBjb2xvclRlcm1zLmxlbmd0aDtcbiAgICBjb25zdCBjb2xvclZhbHVlcyA9IHt9O1xuICAgIGNvbnN0IGNvbG9ycyA9IHNwbGl0Q29tbWFEZWxpbWl0ZWQoZ2V0VmFsdWVGcm9tRnVuY3Rpb25TdHJpbmcodmFsdWUpKTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbnVtQ29sb3JUZXJtczsgaSsrKSB7XG4gICAgICAgIGNvbG9yVmFsdWVzW2NvbG9yVGVybXNbaV1dID0gKGNvbG9yc1tpXSAhPT0gdW5kZWZpbmVkKSA/IGNvbG9yc1tpXSA6IDE7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbG9yVmFsdWVzO1xufTtcblxuLypcbiAgICBHZXQgdmFsdWUgZnJvbSBmdW5jdGlvbiBzdHJpbmdcblxuICAgIFwidHJhbnNsYXRlWCgyMHB4KVwiIC0+IFwiMjBweFwiXG4qL1xuZXhwb3J0IGNvbnN0IGdldFZhbHVlRnJvbUZ1bmN0aW9uU3RyaW5nID0gKHZhbHVlKSA9PiB2YWx1ZS5zdWJzdHJpbmcodmFsdWUuaW5kZXhPZignKCcpICsgMSwgdmFsdWUubGFzdEluZGV4T2YoJyknKSk7XG5cbi8qXG4gICAgQ2hlY2sgaWYgdHdvIG9iamVjdHMgaGF2ZSBjaGFuZ2VkIGZyb20gZWFjaCBvdGhlclxuICAgIFxuICAgIEBwYXJhbSBbb2JqZWN0XTogSW5wdXQgQVxuICAgIEBwYXJhbSBbb2JqZWN0XTogSW5wdXQgQlxuICAgIEByZXR1cm4gW2Jvb2xlYW5dOiBUcnVlIGlmIGRpZmZlcmVudFxuKi9cbmV4cG9ydCBjb25zdCBoYXNDaGFuZ2VkID0gKGEsIGIpID0+IHtcbiAgICBsZXQgY2hhbmdlZCA9IGZhbHNlO1xuXG4gICAgZm9yIChsZXQga2V5IGluIGEpIHtcbiAgICAgICAgaWYgKGEuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgICAgaWYgKGhhc1Byb3BlcnR5KGIsIGtleSkpIHtcbiAgICAgICAgICAgICAgICBpZiAoYVtrZXldICE9PSBiW2tleV0pIHtcbiAgICAgICAgICAgICAgICAgICAgY2hhbmdlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjaGFuZ2VkID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBjaGFuZ2VkO1xufTtcblxuLypcbiAgICBDaGVjayBpZiBvYmplY3QgaGFzIHByb3BlcnR5IGFuZCBpdCBpc24ndCB1bmRlZmluZWRcblxuICAgIEBwYXJhbSBbb2JqZWN0XVxuICAgIEBwYXJhbSBbc3RyaW5nXVxuICAgIEByZXR1cm4gW2Jvb2xlYW5dXG4qL1xuZXhwb3J0IGNvbnN0IGhhc1Byb3BlcnR5ID0gKG9iamVjdCwgcHJvcGVydHlOYW1lKSA9PiBvYmplY3QuaGFzT3duUHJvcGVydHkocHJvcGVydHlOYW1lKSAmJiBvYmplY3RbcHJvcGVydHlOYW1lXSAhPT0gdW5kZWZpbmVkO1xuXG4vKlxuICAgIElzIHV0aWxzIHZhciBhbiBhcnJheSA/IFxuICAgIFxuICAgIEBwYXJhbTogVmFyaWFibGUgdG8gdGVzdFxuICAgIEByZXR1cm4gW2Jvb2xlYW5dOiBSZXR1cm5zIHRydWUgaWYgdXRpbHMudmFyVHlwZSA9PT0gJ0FycmF5J1xuKi9cbmV4cG9ydCBjb25zdCBpc0FycmF5ID0gKGFycikgPT4gdmFyVHlwZShhcnIpID09PSAnQXJyYXknO1xuXG4vKlxuICAgIElzIHV0aWxzIHZhciBhIGZ1bmN0aW9uID8gXG4gICAgXG4gICAgQHBhcmFtOiBWYXJpYWJsZSB0byB0ZXN0XG4gICAgQHJldHVybiBbYm9vbGVhbl06IFJldHVybnMgdHJ1ZSBpZiB1dGlscy52YXJUeXBlID09PSAnRnVuY3Rpb24nXG4qL1xuZXhwb3J0IGNvbnN0IGlzRnVuYyA9IChvYmopID0+IHZhclR5cGUob2JqKSA9PT0gJ0Z1bmN0aW9uJztcblxuLypcbiAgICBJcyB1dGlscyB2YXIgYSBudW1iZXI/XG4gICAgXG4gICAgQHBhcmFtOiBWYXJpYWJsZSB0byB0ZXN0XG4gICAgQHJldHVybiBbYm9vbGVhbl06IFJldHVybnMgdHJ1ZSBpZiB0eXBlb2YgPT09ICdudW1iZXInXG4qL1xuZXhwb3J0IGNvbnN0IGlzTnVtID0gKG51bSkgPT4gdHlwZW9mIG51bSA9PT0gJ251bWJlcic7XG5cbi8qXG4gICAgSXMgdXRpbHMgdmFyIGFuIG9iamVjdD9cbiAgICBcbiAgICBAcGFyYW06IFZhcmlhYmxlIHRvIHRlc3RcbiAgICBAcmV0dXJuIFtib29sZWFuXTogUmV0dXJucyB0cnVlIGlmIHR5cGVvZiA9PT0gJ29iamVjdCdcbiovXG5leHBvcnQgY29uc3QgaXNPYmogPSAob2JqKSA9PiB0eXBlb2Ygb2JqID09PSAnb2JqZWN0JztcblxuLypcbiAgICBJcyB1dGlscyBhIHJlbGF0aXZlIHZhbHVlIGFzc2lnbm1lbnQ/XG4gICAgXG4gICAgQHBhcmFtIFtzdHJpbmddOiBWYXJpYWJsZSB0byB0ZXN0XG4gICAgQHJldHVybiBbYm9vbGVhbl06IElmIHV0aWxzIGxvb2tzIGxpa2UgYSByZWxhdGl2ZSB2YWx1ZSBhc3NpZ25tZW50XG4qL1xuZXhwb3J0IGNvbnN0IGlzUmVsYXRpdmVWYWx1ZSA9ICh2YWx1ZSkgPT4gKHZhbHVlICYmIHZhbHVlLmluZGV4T2YgJiYgdmFsdWUuaW5kZXhPZignPScpID4gMCkgPyB0cnVlIDogZmFsc2U7XG5cbi8qXG4gICAgSXMgdXRpbHMgdmFyIGEgc3RyaW5nID8gXG4gICAgXG4gICAgQHBhcmFtOiBWYXJpYWJsZSB0byB0ZXN0XG4gICAgQHJldHVybiBbYm9vbGVhbl06IFJldHVybnMgdHJ1ZSBpZiB0eXBlb2Ygc3RyID09PSAnc3RyaW5nJ1xuKi9cbmV4cG9ydCBjb25zdCBpc1N0cmluZyA9IChzdHIpID0+IHR5cGVvZiBzdHIgPT09ICdzdHJpbmcnO1xuXG4vKlxuICAgIEBwYXJhbSBbc3RyaW5nIHx8IE5vZGVMaXN0XTpcbiAgICAgICAgSWYgc3RyaW5nLCB0cmVhdGVkIGFzIHNlbGVjdG9yLlxuICAgICAgICBJZiBub3QsIHRyZWF0ZWQgYXMgcHJlZXhpc3RpbmcgTm9kZUxpc3RcblxuICAgIEByZXR1cm4gW0FycmF5XVxuKi9cbmV4cG9ydCBjb25zdCBzZWxlY3REb20gPSAoc2VsZWN0b3IpID0+IHtcbiAgICBjb25zdCBub2RlcyA9ICh0eXBlb2Ygc2VsZWN0b3IgPT09ICdzdHJpbmcnKSA/IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoc2VsZWN0b3IpIDogc2VsZWN0b3I7XG4gICAgcmV0dXJuIChub2Rlcy5sZW5ndGgpID8gW10uc2xpY2UuY2FsbChub2RlcykgOiBbXS5wdXNoKG5vZGVzKTtcbn07XG5cbi8qXG4gICAgU3BsaXQgY29tbWEtZGVsaW1pdGVkIHN0cmluZ1xuXG4gICAgXCJmb28sYmFyXCIgLT4gW1wiZm9vXCIsIFwiYmFyXCJdXG5cbiAgICBAcGFyYW0gW3N0cmluZ11cbiAgICBAcmV0dXJuIFthcnJheV1cbiovXG5leHBvcnQgY29uc3Qgc3BsaXRDb21tYURlbGltaXRlZCA9ICh2YWx1ZSkgPT4gaXNTdHJpbmcodmFsdWUpID8gdmFsdWUuc3BsaXQoLyxcXHMqLykgOiBbdmFsdWVdO1xuXG4vKlxuICAgIFNwbGl0IHNwYWNlLWRlbGltaXRlZCBzdHJpbmdcblxuICAgIFwiZm9vIGJhclwiIC0+IFtcImZvb1wiLCBcImJhclwiXVxuXG4gICAgQHBhcmFtIFtzdHJpbmddXG4gICAgQHJldHVybiBbYXJyYXldXG4qL1xuZXhwb3J0IGNvbnN0IHNwbGl0U3BhY2VEZWxpbWl0ZWQgPSAodmFsdWUpID0+IGlzU3RyaW5nKHZhbHVlKSA/IHZhbHVlLnNwbGl0KCcgJykgOiBbdmFsdWVdO1xuXG4vKlxuICAgIFNwbGl0IGEgdmFsdWUgaW50byBhIHZhbHVlL3VuaXQgb2JqZWN0XG4gICAgXG4gICAgICAgIFwiMjAwcHhcIiAtPiB7IHZhbHVlOiAyMDAsIHVuaXQ6IFwicHhcIiB9XG4gICAgICAgIFxuICAgIEBwYXJhbSBbc3RyaW5nXTogVmFsdWUgdG8gc3BsaXRcbiAgICBAcmV0dXJuIFtvYmplY3RdOiBPYmplY3Qgd2l0aCB2YWx1ZSBhbmQgdW5pdCBwcm9wc1xuKi9cbmV4cG9ydCBjb25zdCBzcGxpdFZhbHVlVW5pdCA9ICh2YWx1ZSkgPT4ge1xuICAgIGNvbnN0IHNwbGl0VmFsID0gdmFsdWUubWF0Y2goLygtP1xcZCpcXC4/XFxkKikoLiopLyk7XG5cbiAgICByZXR1cm4ge1xuICAgICAgICB2YWx1ZTogcGFyc2VGbG9hdChzcGxpdFZhbFsxXSksXG4gICAgICAgIHVuaXQ6ICBzcGxpdFZhbFsyXVxuICAgIH07XG59O1xuXG4vKlxuICAgIENvbnZlcnQgbnVtYmVyIHRvIHggZGVjaW1hbCBwbGFjZXNcblxuICAgIEBwYXJhbSBbbnVtYmVyXVxuICAgIEBwYXJhbSBbbnVtYmVyXVxuICAgIEByZXR1cm4gW251bWJlcl1cbiovXG5leHBvcnQgY29uc3QgdG9EZWNpbWFsID0gKG51bSwgcHJlY2lzaW9uID0gMikgPT4ge1xuICAgIHByZWNpc2lvbiA9IDEwICoqIHByZWNpc2lvbjtcbiAgICByZXR1cm4gTWF0aC5yb3VuZChudW0gKiBwcmVjaXNpb24pIC8gcHJlY2lzaW9uO1xufTtcbiJdfQ==

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	exports.__esModule = true;
	
	var _Process2 = __webpack_require__(7);
	
	var _Process3 = _interopRequireDefault(_Process2);
	
	var _calc = __webpack_require__(17);
	
	var _utils = __webpack_require__(31);
	
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
	            if (!on.setter) {
	                this.on = (0, _bindAdapter2.default)(on);
	            }
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
	                var valueType = {};
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
	                    valueType = existingValue.type;
	
	                    // If this is a new value, check for type
	                } else {
	                        newValue = _extends({}, defaultValue, newValue);
	
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
	
	        // Update base values
	        for (var i = 0; i < this.numValueKeys; i++) {
	            var key = this.valueKeys[i];
	            var value = this.values[key];
	            var updatedValue = value.current;
	
	            // Run transform function (if present)
	            if (value.transform) {
	                updatedValue = value.transform(updatedValue, key, this);
	            }
	
	            // Smooth value if we have smoothing
	            if (value.smooth) {
	                updatedValue = (0, _calc.smooth)(updatedValue, value.prev, elapsed, value.smooth);
	            }
	
	            if (!this.calculatesVelocity) {
	                value.velocity = (0, _calc.speedPerSecond)(updatedValue - value.current, elapsed);
	            }
	
	            value.prev = value.current = updatedValue;
	
	            var valueForState = value.unit ? value.current + value.unit : value.current;
	
	            // Add straight to state if no parent
	            if (!value.parent) {
	                if (this.state[key] !== valueForState) {
	                    this.state[key] = valueForState;
	                    hasChanged = true;
	                }
	                // Or add to parent
	            } else {
	                    this.values[value.parent].children[key] = valueForState;
	                }
	        }
	
	        // Update parent values
	        for (var i = 0; i < this.numParentKeys; i++) {
	            var key = this.parentKeys[i];
	            var value = this.values[key];
	
	            value.current = value.type.combine(value.children, value.template);
	
	            if (this.state[key] !== value.current) {
	                this.state[key] = value.current;
	                hasChanged = true;
	            }
	        }
	
	        return this.onCleanup ? true : hasChanged;
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
	}(_Process3.default);
	
	exports.default = Action;
	//# sourceMappingURL=data:application/json;base64,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QixHQUF0QixDQUFKLEVBQWdDO0FBQzVCLHVCQUFPLEdBQVAsRUFBWSxJQUFaLEdBQW1CLE9BQU8sR0FBUCxFQUFZLE1BQVosR0FBcUIsT0FBTyxHQUFQLEVBQVksT0FBWixDQURaO2FBQWhDO1NBREo7Ozs7Ozs7O0FBM1BhLHFCQXVRakIsNkNBQWtCO0FBQ2QsZUFBTztBQUNILHFCQUFTLENBQVQ7QUFDQSxzQkFBVSxDQUFWO1NBRkosQ0FEYzs7Ozs7Ozs7O0FBdlFELHFCQW9SakIscURBQXNCO0FBQ2xCLGVBQU8sWUFBUCxDQURrQjs7O1dBcFJMIiwiZmlsZSI6IkFjdGlvbi5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvTWF0dC9TaXRlcy9wb3Btb3Rpb24iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUHJvY2VzcyBmcm9tICcuLi9wcm9jZXNzL1Byb2Nlc3MnO1xuaW1wb3J0IHsgc21vb3RoLCBzcGVlZFBlclNlY29uZCB9IGZyb20gJy4uL2luYy9jYWxjJztcbmltcG9ydCB7IGlzT2JqIH0gZnJvbSAnLi4vaW5jL3V0aWxzJztcbmltcG9ydCBiaW5kQWRhcHRlciBmcm9tICcuLi9pbmMvYmluZC1hZGFwdGVyJztcblxuY29uc3QgREVGQVVMVF9QUk9QID0gJ2N1cnJlbnQnO1xuY29uc3QgTlVNRVJJQ0FMX1ZBTFVFUyA9IFtERUZBVUxUX1BST1AsICdmcm9tJywgJ3RvJywgJ21pbicsICdtYXgnXTtcbmNvbnN0IE5VTV9OVU1FUklDQUxfVkFMVUVTID0gTlVNRVJJQ0FMX1ZBTFVFUy5sZW5ndGg7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFjdGlvbiBleHRlbmRzIFByb2Nlc3Mge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHByb3BzLnN0YXRlID0ge307XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICB9XG5cbiAgICAvKlxuICAgICAgICAjIFNldCBBY3Rpb24gcHJvcGVydGllc1xuICAgICAgICAjIyBTZXQgdXNlci1kZWZpbmVkIEFjdGlvbiBwcm9wZXJ0aWVzXG5cbiAgICAgICAgQHBhcmFtIFtvYmplY3RdXG4gICAgICAgIEByZXR1cm4gW0FjdGlvbl1cbiAgICAqL1xuICAgIHNldChwcm9wcyA9IHt9KSB7XG4gICAgICAgIGNvbnN0IHsgdmFsdWVzLCBvbiwgLi4ucHJvcHNUb1NldCB9ID0gcHJvcHM7XG5cbiAgICAgICAgc3VwZXIuc2V0KHByb3BzVG9TZXQpO1xuXG4gICAgICAgIGlmIChvbikge1xuICAgICAgICAgICAgLy8gRHVja3R5cGlzaCBjaGVjayBmb3IgQWRhcHRlclxuICAgICAgICAgICAgaWYgKCFvbi5zZXR0ZXIpIHtcbiAgICAgICAgICAgICAgICB0aGlzLm9uID0gYmluZEFkYXB0ZXIob24pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy52YWx1ZXMgPSB0aGlzLnZhbHVlcyB8fCB7fTtcbiAgICAgICAgdGhpcy52YWx1ZUtleXMgPSB0aGlzLnZhbHVlS2V5cyB8fCBbXTtcbiAgICAgICAgdGhpcy5wYXJlbnRLZXlzID0gdGhpcy5wYXJlbnRLZXlzIHx8IFtdO1xuXG4gICAgICAgIC8vIE1lcmdlIG5ldyBgdmFsdWVgIHByb3BlcnRpZXMgd2l0aCBleGlzdGluZ1xuICAgICAgICBjb25zdCBjdXJyZW50VmFsdWVzID0gdGhpcy52YWx1ZXM7XG4gICAgICAgIGNvbnN0IGRlZmF1bHRWYWx1ZSA9IHRoaXMuZ2V0RGVmYXVsdFZhbHVlKCk7XG4gICAgICAgIGNvbnN0IGRlZmF1bHRWYWx1ZVByb3AgPSB0aGlzLmdldERlZmF1bHRWYWx1ZVByb3AoKTtcblxuICAgICAgICAvLyBJbmhlcml0IHZhbHVlIHByb3BlcnRpZXMgZnJvbSBgcHJvcHNgXG4gICAgICAgIGZvciAobGV0IGtleSBpbiBkZWZhdWx0VmFsdWUpIHtcbiAgICAgICAgICAgIGlmIChkZWZhdWx0VmFsdWUuaGFzT3duUHJvcGVydHkoa2V5KSAmJiBwcm9wc1RvU2V0Lmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICAgICAgICBpZiAocHJvcHNUb1NldFtrZXldICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlW2tleV0gPSBwcm9wc1RvU2V0W2tleV07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gQ2hlY2sgYWxsIHZhbHVlcyBhbmQgc3BsaXQgaW50byBjaGlsZCB2YWx1ZXMgYXMgbmVjY2Vzc2FyeVxuICAgICAgICBmb3IgKGxldCBrZXkgaW4gdmFsdWVzKSB7XG4gICAgICAgICAgICBpZiAodmFsdWVzLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICAgICAgICBjb25zdCB2YWx1ZSA9IHZhbHVlc1trZXldO1xuICAgICAgICAgICAgICAgIGNvbnN0IGV4aXN0aW5nVmFsdWUgPSBjdXJyZW50VmFsdWVzW2tleV07XG4gICAgICAgICAgICAgICAgbGV0IHZhbHVlVHlwZSA9IHt9O1xuICAgICAgICAgICAgICAgIGxldCBuZXdWYWx1ZSA9IHt9O1xuXG4gICAgICAgICAgICAgICAgLy8gQ29udmVydCBuZXcgdmFsdWUgaW50byBvYmplY3QgaWYgaXQgaXNuJ3QgYWxyZWFkeVxuICAgICAgICAgICAgICAgIGlmIChpc09iaih2YWx1ZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgbmV3VmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBuZXdWYWx1ZVtkZWZhdWx0VmFsdWVQcm9wXSA9IHZhbHVlO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC8vIElmIHZhbHVlIGFscmVhZHkgZXhpc3RzLCBjaGVjayBmb3IgYW5kIHVzZSBleGlzdGluZyB0eXBlXG4gICAgICAgICAgICAgICAgaWYgKGV4aXN0aW5nVmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgbmV3VmFsdWUgPSB7IC4uLmV4aXN0aW5nVmFsdWUsIC4uLm5ld1ZhbHVlIH07XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlVHlwZSA9IGV4aXN0aW5nVmFsdWUudHlwZTtcblxuICAgICAgICAgICAgICAgIC8vIElmIHRoaXMgaXMgYSBuZXcgdmFsdWUsIGNoZWNrIGZvciB0eXBlXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgbmV3VmFsdWUgPSB7IC4uLmRlZmF1bHRWYWx1ZSwgLi4ubmV3VmFsdWUgfTtcblxuICAgICAgICAgICAgICAgICAgICAvLyBJZiBvbmUgaXMgZXhwbGljaXRseSBhc3NpZ25lZCwgdXNlIHRoYXRcbiAgICAgICAgICAgICAgICAgICAgaWYgKHZhbHVlLnR5cGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlVHlwZSA9IHZhbHVlLnR5cGU7XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gT3IgaWYgb3VyIEFkYXB0ZXIgaGFzIGEgdHlwZU1hcCwgdXNlIHRoYXRcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLm9uICYmIHRoaXMub24uZ2V0VmFsdWVUeXBlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZVR5cGUgPSB0aGlzLm9uLmdldFZhbHVlVHlwZShrZXkpO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gTWF5YmUgcnVuIGB0ZXN0YCBvbiBjb2xvciBoZXJlXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLy8gSWYgd2UndmUgZ290IGEgdmFsdWVUeXBlIHRoZW4gcHJlcHJvY2VzcyB0aGUgdmFsdWUgYWNjb3JkaW5nbHlcbiAgICAgICAgICAgICAgICBpZiAodmFsdWVUeXBlKSB7XG4gICAgICAgICAgICAgICAgICAgIG5ld1ZhbHVlLnR5cGUgPSB2YWx1ZVR5cGU7XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gSWYgdGhpcyB2YWx1ZSBzaG91bGQgYmUgc3BsaXQsIHNwbGl0XG4gICAgICAgICAgICAgICAgICAgIGlmICh2YWx1ZVR5cGUuc3BsaXQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGNoaWxkVmFsdWVzID0ge307XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIExvb3Agb3ZlciBudW1lcmljYWwgdmFsdWVzIGFuZCBzcGxpdCBhbnkgcHJlc2VudFxuICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBOVU1fTlVNRVJJQ0FMX1ZBTFVFUzsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcHJvcE5hbWUgPSBOVU1FUklDQUxfVkFMVUVTW2ldO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG5ld1ZhbHVlLmhhc093blByb3BlcnR5KHByb3BOYW1lKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBzcGxpdFZhbHVlcyA9IHZhbHVlVHlwZS5zcGxpdChuZXdWYWx1ZVtwcm9wTmFtZV0pO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAobGV0IHNwbGl0S2V5IGluIHNwbGl0VmFsdWVzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoc3BsaXRWYWx1ZXMuaGFzT3duUHJvcGVydHkoc3BsaXRLZXkpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgc3BsaXRWYWx1ZSA9IHNwbGl0VmFsdWVzW3NwbGl0S2V5XTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBDcmVhdGUgbmV3IGNoaWxkIHZhbHVlIGlmIGRvZXNuJ3QgZXhpc3RcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWNoaWxkVmFsdWVzW3NwbGl0S2V5XSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGlsZFZhbHVlc1tzcGxpdEtleV0gPSB7IC4uLm5ld1ZhbHVlIH07XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHZhbHVlVHlwZS5kZWZhdWx0UHJvcHMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoaWxkVmFsdWVzW3NwbGl0S2V5XSA9ICh2YWx1ZVR5cGUuZGVmYXVsdFByb3BzW3NwbGl0S2V5XSkgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgLi4udmFsdWVUeXBlLmRlZmF1bHRQcm9wc1tzcGxpdEtleV0sIC4uLmNoaWxkVmFsdWVzW3NwbGl0S2V5XSB9IDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IC4uLnZhbHVlVHlwZS5kZWZhdWx0UHJvcHMsIC4uLmNoaWxkVmFsdWVzW3NwbGl0S2V5XSB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hpbGRWYWx1ZXNbc3BsaXRLZXldW3Byb3BOYW1lXSA9IHNwbGl0VmFsdWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIG5ld1ZhbHVlLmNoaWxkcmVuID0ge307XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIE5vdyBsb29wIHRocm91Z2ggYWxsIGNoaWxkIHZhbHVlcyBhbmQgYWRkIHRoZW0gYXMgbm9ybWFsIHZhbHVlc1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgY2hpbGRLZXkgaW4gY2hpbGRWYWx1ZXMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoY2hpbGRWYWx1ZXMuaGFzT3duUHJvcGVydHkoY2hpbGRLZXkpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGNoaWxkVmFsdWUgPSBjaGlsZFZhbHVlc1tjaGlsZEtleV07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGNvbWJpbmVkS2V5ID0ga2V5ICsgY2hpbGRLZXk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3VmFsdWUuY2hpbGRyZW5ba2V5XSA9IGNoaWxkVmFsdWUuY3VycmVudDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudFZhbHVlc1tjb21iaW5lZEtleV0gPSBjaGlsZFZhbHVlO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnZhbHVlS2V5cy5pbmRleE9mKGNvbWJpbmVkS2V5KSA9PT0gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudmFsdWVLZXlzLnB1c2goY29tYmluZWRLZXkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBTYXZlIGEgdGVtcGxhdGUgZm9yIHJlY29tYmluYXRpb24gaWYgcHJlc2VudFxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHZhbHVlVHlwZS50ZW1wbGF0ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ld1ZhbHVlLnRlbXBsYXRlID0gbmV3VmFsdWUudGVtcGxhdGUgfHwgdmFsdWVUeXBlLnRlbXBsYXRlKG5ld1ZhbHVlLmN1cnJlbnQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIC8vIE9yIHdlIGp1c3QgaGF2ZSBkZWZhdWx0IHZhbHVlIHByb3BzLCBsb2FkIHRob3NlICAgXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodmFsdWVUeXBlLmRlZmF1bHRQcm9wcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgbmV3VmFsdWUgPSB7IC4uLnZhbHVlVHlwZS5kZWZhdWx0UHJvcHMsIC4uLm5ld1ZhbHVlIH07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAvLyBVcGRhdGUgYXBwcm9wcmlhdGUgbGlzdHMgd2l0aCB2YWx1ZSBrZXlcbiAgICAgICAgICAgICAgICBpZiAobmV3VmFsdWUuY2hpbGRyZW4pIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMucGFyZW50S2V5cy5pbmRleE9mKGtleSkgPT09IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnBhcmVudEtleXMucHVzaChrZXkpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMudmFsdWVLZXlzLmluZGV4T2Yoa2V5KSA9PT0gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudmFsdWVLZXlzLnB1c2goa2V5KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGN1cnJlbnRWYWx1ZXNba2V5XSA9IG5ld1ZhbHVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gUHJlY29tcHV0ZSB2YWx1ZSBrZXkgYW5kIHBhcmVudCBrZXkgbGVuZ3RoIHRvIHByZXZlbnQgcGVyLWZyYW1lIG1lYXN1cmVtZW50XG4gICAgICAgIHRoaXMubnVtVmFsdWVLZXlzID0gdGhpcy52YWx1ZUtleXMubGVuZ3RoO1xuICAgICAgICB0aGlzLm51bVBhcmVudEtleXMgPSB0aGlzLnBhcmVudEtleXMubGVuZ3RoO1xuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIC8qXG4gICAgICAgIERlY2lkZSB3aGV0aGVyIHRoaXMgQWN0aW9uIHdpbGwgcmVuZGVyIG9uIG5leHQgZnJhbWVcblxuICAgICAgICBAcGFyYW0gW0FjdGlvbl1cbiAgICAgICAgQHBhcmFtIFtudW1iZXJdXG4gICAgICAgIEBwYXJhbSBbbnVtYmVyXVxuICAgICAgICBAcmV0dXJuIFtib29sZWFuXTogUmV0dXJuIHRydWUgdG8gcmVuZGVyXG4gICAgKi9cbiAgICB3aWxsUmVuZGVyKGFjdGlvbiwgZnJhbWVTdGFtcCwgZWxhcHNlZCkge1xuICAgICAgICBsZXQgaGFzQ2hhbmdlZCA9IGZhbHNlO1xuXG4gICAgICAgIC8vIFVwZGF0ZSBiYXNlIHZhbHVlc1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubnVtVmFsdWVLZXlzOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IGtleSA9IHRoaXMudmFsdWVLZXlzW2ldO1xuICAgICAgICAgICAgY29uc3QgdmFsdWUgPSB0aGlzLnZhbHVlc1trZXldO1xuICAgICAgICAgICAgbGV0IHVwZGF0ZWRWYWx1ZSA9IHZhbHVlLmN1cnJlbnQ7XG5cbiAgICAgICAgICAgIC8vIFJ1biB0cmFuc2Zvcm0gZnVuY3Rpb24gKGlmIHByZXNlbnQpXG4gICAgICAgICAgICBpZiAodmFsdWUudHJhbnNmb3JtKSB7XG4gICAgICAgICAgICAgICAgdXBkYXRlZFZhbHVlID0gdmFsdWUudHJhbnNmb3JtKHVwZGF0ZWRWYWx1ZSwga2V5LCB0aGlzKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gU21vb3RoIHZhbHVlIGlmIHdlIGhhdmUgc21vb3RoaW5nXG4gICAgICAgICAgICBpZiAodmFsdWUuc21vb3RoKSB7XG4gICAgICAgICAgICAgICAgdXBkYXRlZFZhbHVlID0gc21vb3RoKHVwZGF0ZWRWYWx1ZSwgdmFsdWUucHJldiwgZWxhcHNlZCwgdmFsdWUuc21vb3RoKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKCF0aGlzLmNhbGN1bGF0ZXNWZWxvY2l0eSkge1xuICAgICAgICAgICAgICAgIHZhbHVlLnZlbG9jaXR5ID0gc3BlZWRQZXJTZWNvbmQodXBkYXRlZFZhbHVlIC0gdmFsdWUuY3VycmVudCwgZWxhcHNlZCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHZhbHVlLnByZXYgPSB2YWx1ZS5jdXJyZW50ID0gdXBkYXRlZFZhbHVlO1xuXG4gICAgICAgICAgICBjb25zdCB2YWx1ZUZvclN0YXRlID0gKHZhbHVlLnVuaXQpID8gdmFsdWUuY3VycmVudCArIHZhbHVlLnVuaXQgOiB2YWx1ZS5jdXJyZW50O1xuXG4gICAgICAgICAgICAvLyBBZGQgc3RyYWlnaHQgdG8gc3RhdGUgaWYgbm8gcGFyZW50XG4gICAgICAgICAgICBpZiAoIXZhbHVlLnBhcmVudCkge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLnN0YXRlW2tleV0gIT09IHZhbHVlRm9yU3RhdGUpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZVtrZXldID0gdmFsdWVGb3JTdGF0ZTtcbiAgICAgICAgICAgICAgICAgICAgaGFzQ2hhbmdlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gT3IgYWRkIHRvIHBhcmVudFxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLnZhbHVlc1t2YWx1ZS5wYXJlbnRdLmNoaWxkcmVuW2tleV0gPSB2YWx1ZUZvclN0YXRlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gVXBkYXRlIHBhcmVudCB2YWx1ZXNcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLm51bVBhcmVudEtleXM7IGkrKykge1xuICAgICAgICAgICAgY29uc3Qga2V5ID0gdGhpcy5wYXJlbnRLZXlzW2ldO1xuICAgICAgICAgICAgY29uc3QgdmFsdWUgPSB0aGlzLnZhbHVlc1trZXldO1xuXG4gICAgICAgICAgICB2YWx1ZS5jdXJyZW50ID0gdmFsdWUudHlwZS5jb21iaW5lKHZhbHVlLmNoaWxkcmVuLCB2YWx1ZS50ZW1wbGF0ZSk7XG5cbiAgICAgICAgICAgIGlmICh0aGlzLnN0YXRlW2tleV0gIT09IHZhbHVlLmN1cnJlbnQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXRlW2tleV0gPSB2YWx1ZS5jdXJyZW50O1xuICAgICAgICAgICAgICAgIGhhc0NoYW5nZWQgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuICh0aGlzLm9uQ2xlYW51cCkgPyB0cnVlIDogaGFzQ2hhbmdlZDtcbiAgICB9XG5cbiAgICBvblJlbmRlcih7IHN0YXRlLCBvbiB9KSB7XG4gICAgICAgIGlmIChvbiAmJiBvbi5zZXQpIHtcbiAgICAgICAgICAgIG9uLnNldChzdGF0ZSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5vbkZyYW1lKSB7XG4gICAgICAgICAgICB0aGlzLm9uRnJhbWUodGhpcyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwYXVzZSgpIHtcbiAgICAgICAgc3VwZXIuc3RvcCgpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICByZXN1bWUoKSB7XG4gICAgICAgIHN1cGVyLnN0YXJ0KCk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIHN0YXJ0KCkge1xuICAgICAgICBjb25zdCB2YWx1ZXMgPSB0aGlzLnZhbHVlcztcbiAgICAgICAgc3VwZXIuc3RhcnQoKTtcblxuICAgICAgICBmb3IgKGxldCBrZXkgaW4gdmFsdWVzKSB7XG4gICAgICAgICAgICBpZiAodmFsdWVzLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICAgICAgICB2YWx1ZXNba2V5XS5wcmV2ID0gdmFsdWVzW2tleV0ub3JpZ2luID0gdmFsdWVzW2tleV0uY3VycmVudDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qXG4gICAgICAgICMgR2V0IGRlZmF1bHQgQWN0aW9uIHZhbHVlIHByb3BlcnRpZXNcblxuICAgICAgICBAcmV0dXJuIFtvYmplY3RdXG4gICAgKi9cbiAgICBnZXREZWZhdWx0VmFsdWUoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBjdXJyZW50OiAwLFxuICAgICAgICAgICAgdmVsb2NpdHk6IDBcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICAvKlxuICAgICAgICAjIEdldCBkZWZhdWx0IEFjdGlvbiB2YWx1ZSBwcm9wZXJ0eSBuYW1lXG4gICAgICAgICMjIFNldCB0aGlzIGB2YWx1ZWAgcHJvcGVydHkgd2hlbiBzZXQgYXMgdmFsdWUgaW5zdGVhZCBvZiBvYmplY3RcblxuICAgICAgICBAcmV0dXJuIFtzdHJpbmddXG4gICAgKi9cbiAgICBnZXREZWZhdWx0VmFsdWVQcm9wKCkge1xuICAgICAgICByZXR1cm4gREVGQVVMVF9QUk9QO1xuICAgIH1cbn1cbiJdfQ==

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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hZGFwdGVyL2Nzcy9zdGF0ZS1tYXAuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsSUFBTSxZQUFZLFdBQVo7O2tCQUVTO0FBQ1gsT0FBRyxZQUFZLEdBQVo7QUFDSCxPQUFHLFlBQVksR0FBWjtBQUNILE9BQUcsWUFBWSxHQUFaIiwiZmlsZSI6InN0YXRlLW1hcC5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvTWF0dC9TaXRlcy9wb3Btb3Rpb24iLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBUUkFOU0xBVEUgPSAndHJhbnNsYXRlJztcblxuZXhwb3J0IGRlZmF1bHQge1xuICAgIHg6IFRSQU5TTEFURSArICdYJyxcbiAgICB5OiBUUkFOU0xBVEUgKyAnWScsXG4gICAgejogVFJBTlNMQVRFICsgJ1onXG59OyJdfQ==

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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hZGFwdGVyL2Nzcy92YWx1ZS10eXBlLW1hcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztrQkFTZTs7QUFFWCwwQkFGVztBQUdYLG9DQUhXO0FBSVgsaUNBSlc7QUFLWCx5QkFMVztBQU1YLDJCQU5XOzs7QUFTWCxnQ0FUVztBQVVYLG1DQVZXO0FBV1gscUNBWFc7QUFZWCxzQ0FaVztBQWFYLG9DQWJXO0FBY1gsOEJBZFc7OztBQWlCWCwrQkFqQlc7QUFrQlgsZ0NBbEJXO0FBbUJYLHVCQW5CVztBQW9CWCx3QkFwQlc7OztBQXVCWCxzQ0F2Qlc7QUF3QlgscUNBeEJXO0FBeUJYLG1DQXpCVzs7O0FBNEJYLGdDQTVCVztBQTZCWCwrQkE3Qlc7OztBQWdDWCwyQkFoQ1c7QUFpQ1gsNEJBakNXO0FBa0NYLDRCQWxDVztBQW1DWCw0QkFuQ1c7QUFvQ1gsMEJBcENXO0FBcUNYLDJCQXJDVztBQXNDWCwyQkF0Q1c7QUF1Q1gsMkJBdkNXO0FBd0NYLDBCQXhDVztBQXlDWCwwQkF6Q1c7QUEwQ1gsMEJBMUNXO0FBMkNYLDRCQTNDVztBQTRDWCw0QkE1Q1c7QUE2Q1gsNEJBN0NXO0FBOENYLDZCQTlDVztBQStDWCw0QkEvQ1ciLCJmaWxlIjoidmFsdWUtdHlwZS1tYXAuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL01hdHQvU2l0ZXMvcG9wbW90aW9uIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGFuZ2xlIGZyb20gJy4uLy4uL3ZhbHVlLXR5cGVzL2FuZ2xlJztcbmltcG9ydCBhbHBoYSBmcm9tICcuLi8uLi92YWx1ZS10eXBlcy9hbHBoYSc7XG5pbXBvcnQgYXhlcyBmcm9tICcuLi8uLi92YWx1ZS10eXBlcy9heGVzJztcbmltcG9ydCBjb2xvciBmcm9tICcuLi8uLi92YWx1ZS10eXBlcy9jb2xvcic7XG5pbXBvcnQgc2NhbGUgZnJvbSAnLi4vLi4vdmFsdWUtdHlwZXMvc2NhbGUnO1xuaW1wb3J0IHNoYWRvdyBmcm9tICcuLi8uLi92YWx1ZS10eXBlcy9zaGFkb3cnO1xuaW1wb3J0IHBvc2l0aW9ucyBmcm9tICcuLi8uLi92YWx1ZS10eXBlcy9wb3NpdGlvbnMnO1xuaW1wb3J0IHB4IGZyb20gJy4uLy4uL3ZhbHVlLXR5cGVzL3B4JztcblxuZXhwb3J0IGRlZmF1bHQge1xuICAgIC8vIENvbG9yIHByb3BzXG4gICAgY29sb3I6IGNvbG9yLFxuICAgIGJhY2tncm91bmRDb2xvcjogY29sb3IsXG4gICAgb3V0bGluZUNvbG9yOiBjb2xvcixcbiAgICBmaWxsOiBjb2xvcixcbiAgICBzdHJva2U6IGNvbG9yLFxuXG4gICAgLy8gQm9yZGVyIHByb3BzXG4gICAgYm9yZGVyQ29sb3I6IGNvbG9yLFxuICAgIGJvcmRlclRvcENvbG9yOiBjb2xvcixcbiAgICBib3JkZXJSaWdodENvbG9yOiBjb2xvcixcbiAgICBib3JkZXJCb3R0b21Db2xvcjogY29sb3IsXG4gICAgYm9yZGVyTGVmdENvbG9yOiBjb2xvcixcbiAgICBib3JkZXJSYWRpdXM6IHB4LFxuXG4gICAgLy8gUG9zaXRpb25pbmdcbiAgICBtYXJnaW46IHBvc2l0aW9ucyxcbiAgICBwYWRkaW5nOiBwb3NpdGlvbnMsXG4gICAgd2lkdGg6IHB4LFxuICAgIGhlaWdodDogcHgsXG5cbiAgICAvLyBBeGVzXG4gICAgYmFja2dyb3VuZFBvc2l0aW9uOiBheGVzLFxuICAgIHBlcnNwZWN0aXZlT3JpZ2luOiBheGVzLFxuICAgIHRyYW5zZm9ybU9yaWdpbjogYXhlcyxcblxuICAgIC8vIFNoYWRvd3NcbiAgICB0ZXh0U2hhZG93OiBzaGFkb3csXG4gICAgYm94U2hhZG93OiBzaGFkb3csICAgXG5cbiAgICAvLyBUcmFuc2Zvcm0gcHJvcGVydGllc1xuICAgIHJvdGF0ZTogYW5nbGUsXG4gICAgcm90YXRlWDogYW5nbGUsXG4gICAgcm90YXRlWTogYW5nbGUsXG4gICAgcm90YXRlWjogYW5nbGUsXG4gICAgc2NhbGU6IHNjYWxlLFxuICAgIHNjYWxlWDogc2NhbGUsXG4gICAgc2NhbGVZOiBzY2FsZSxcbiAgICBzY2FsZVo6IHNjYWxlLFxuICAgIHNrZXdYOiBhbmdsZSxcbiAgICBza2V3WTogYW5nbGUsXG4gICAgZGlzdGFuY2U6IHB4LFxuICAgIHRyYW5zbGF0ZVg6IHB4LFxuICAgIHRyYW5zbGF0ZVk6IHB4LFxuICAgIHRyYW5zbGF0ZVo6IHB4LFxuICAgIHBlcnNwZWN0aXZlOiBweCxcbiAgICBvcGFjaXR5OiBhbHBoYVxufTsiXX0=

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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hZGFwdGVyL2Nzcy9idWlsZC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUdBLElBQU0sY0FBYyxZQUFkOztrQkFFUyxVQUFDLEtBQUQsRUFBUSwyQkFBUixFQUF3QztBQUNuRCxRQUFJLGlCQUFpQixFQUFqQixDQUQrQztBQUVuRCxRQUFJLGtCQUFrQixFQUFsQixDQUYrQztBQUduRCxRQUFJLGdCQUFnQixLQUFoQixDQUgrQzs7QUFLbkQsU0FBSyxJQUFJLEdBQUosSUFBVyxLQUFoQixFQUF1QjtBQUNuQixZQUFJLE1BQU0sY0FBTixDQUFxQixHQUFyQixDQUFKLEVBQStCO0FBQzNCLGdCQUFNLFFBQVEsTUFBTSxHQUFOLENBQVIsQ0FEcUI7O0FBRzNCLGdCQUFJLHlCQUFlLEdBQWYsQ0FBSixFQUF5QjtBQUNyQixtQ0FBbUIsTUFBTSxHQUFOLEdBQVksS0FBWixHQUFvQixJQUFwQixDQURFO0FBRXJCLGdDQUFnQixHQUFDLEtBQVEsV0FBUixHQUF1QixJQUF4QixHQUErQixhQUEvQixDQUZLO2FBQXpCLE1BSU87QUFDSCxrQ0FBa0IsTUFBTSx3QkFBUyxHQUFULENBQU4sR0FBc0IsR0FBdEIsR0FBNEIsS0FBNUIsQ0FEZjthQUpQO1NBSEo7S0FESjs7QUFjQSxRQUFJLG9CQUFvQixFQUFwQixFQUF3QjtBQUN4QixZQUFJLENBQUMsYUFBRCxJQUFrQixDQUFDLDJCQUFELEVBQThCO0FBQ2hELCtCQUFtQixjQUFjLE9BQWQsQ0FENkI7U0FBcEQ7O0FBSUEsMEJBQWtCLE1BQU0sd0JBQVMsV0FBVCxDQUFOLEdBQThCLEdBQTlCLEdBQW9DLGVBQXBDLENBTE07S0FBNUI7O0FBUUEsV0FBTyxjQUFQLENBM0JtRDtDQUF4QyIsImZpbGUiOiJidWlsZC5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvTWF0dC9TaXRlcy9wb3Btb3Rpb24iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdHJhbnNmb3JtUHJvcHMgZnJvbSAnLi90cmFuc2Zvcm0tcHJvcHMnO1xuaW1wb3J0IHByZWZpeGVyIGZyb20gJy4vcHJlZml4ZXInO1xuXG5jb25zdCBUUkFOU0xBVEVfWiA9ICd0cmFuc2xhdGVaJztcblxuZXhwb3J0IGRlZmF1bHQgKHN0YXRlLCBkaXNhYmxlSGFyZHdhcmVBY2NlbGVyYXRpb24pID0+IHtcbiAgICBsZXQgcHJvcGVydHlTdHJpbmcgPSAnJztcbiAgICBsZXQgdHJhbnNmb3JtU3RyaW5nID0gJyc7XG4gICAgbGV0IHRyYW5zZm9ybUhhc1ogPSBmYWxzZTtcblxuICAgIGZvciAobGV0IGtleSBpbiBzdGF0ZSkge1xuICAgICAgICBpZiAoc3RhdGUuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgICAgY29uc3QgdmFsdWUgPSBzdGF0ZVtrZXldO1xuXG4gICAgICAgICAgICBpZiAodHJhbnNmb3JtUHJvcHNba2V5XSkge1xuICAgICAgICAgICAgICAgIHRyYW5zZm9ybVN0cmluZyArPSBrZXkgKyAnKCcgKyB2YWx1ZSArICcpICc7XG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtSGFzWiA9IChrZXkgPT09IFRSQU5TTEFURV9aKSA/IHRydWUgOiB0cmFuc2Zvcm1IYXNaO1xuXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHByb3BlcnR5U3RyaW5nICs9ICc7JyArIHByZWZpeGVyKGtleSkgKyAnOicgKyB2YWx1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGlmICh0cmFuc2Zvcm1TdHJpbmcgIT09ICcnKSB7XG4gICAgICAgIGlmICghdHJhbnNmb3JtSGFzWiAmJiAhZGlzYWJsZUhhcmR3YXJlQWNjZWxlcmF0aW9uKSB7XG4gICAgICAgICAgICB0cmFuc2Zvcm1TdHJpbmcgKz0gVFJBTlNMQVRFX1ogKyAnKDBweCknO1xuICAgICAgICB9XG5cbiAgICAgICAgcHJvcGVydHlTdHJpbmcgKz0gJzsnICsgcHJlZml4ZXIoJ3RyYW5zZm9ybScpICsgJzonICsgdHJhbnNmb3JtU3RyaW5nO1xuICAgIH1cblxuICAgIHJldHVybiBwcm9wZXJ0eVN0cmluZztcbn07Il19

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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hZGFwdGVyL2Nzcy9wcmVmaXhlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxJQUFNLFFBQVEsRUFBUjtBQUNOLElBQU0sV0FBVyxDQUFDLFFBQUQsRUFBVSxLQUFWLEVBQWdCLEdBQWhCLEVBQW9CLElBQXBCLEVBQTBCLEVBQTFCLENBQVg7QUFDTixJQUFNLGNBQWMsU0FBUyxNQUFUO0FBQ3BCLElBQUksdUJBQUo7Ozs7Ozs7O0FBUUEsSUFBTSxhQUFhLFVBQUMsR0FBRCxFQUFTO0FBQ3hCLGtCQUFjLGVBQWUsU0FBUyxhQUFULENBQXVCLEtBQXZCLENBQWYsQ0FEVTs7QUFHeEIsUUFBSSxNQUFNLEdBQU4sTUFBZSxLQUFmLEVBQXNCO0FBQ3RCLGVBQU8sS0FBUCxDQURzQjtLQUExQixNQUVPO0FBQ0gsY0FBTSxHQUFOLElBQWEsS0FBYixDQURHO0tBRlA7O0FBTUEsU0FBSyxJQUFJLElBQUksQ0FBSixFQUFPLElBQUksV0FBSixFQUFpQixHQUFqQyxFQUFzQztBQUNsQyxZQUFJLFNBQVMsU0FBUyxDQUFULENBQVQ7WUFDQSxXQUFXLE1BQUMsS0FBVyxFQUFYLEdBQWlCLEdBQWxCLEdBQXdCLFNBQVMsSUFBSSxNQUFKLENBQVcsQ0FBWCxFQUFjLFdBQWQsRUFBVCxHQUF1QyxJQUFJLEtBQUosQ0FBVSxDQUFWLENBQXZDLENBRkw7O0FBSWxDLFlBQUksWUFBWSxZQUFZLEtBQVosRUFBbUI7QUFDL0Isa0JBQU0sR0FBTixJQUFhLFFBQWIsQ0FEK0I7U0FBbkM7S0FKSjs7QUFTQSxXQUFPLE1BQU0sR0FBTixDQUFQLENBbEJ3QjtDQUFUOztrQkFxQkosVUFBQyxHQUFEO1dBQVMsTUFBTSxHQUFOLEtBQWMsV0FBVyxHQUFYLENBQWQ7Q0FBVCIsImZpbGUiOiJwcmVmaXhlci5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvTWF0dC9TaXRlcy9wb3Btb3Rpb24iLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBjYWNoZSA9IHt9O1xuY29uc3QgcHJlZml4ZXMgPSBbJ1dlYmtpdCcsJ01veicsJ08nLCdtcycsICcnXTtcbmNvbnN0IG51bVByZWZpeGVzID0gcHJlZml4ZXMubGVuZ3RoO1xubGV0IHRlc3RFbGVtZW50O1xuXG4vKlxuICAgIFRlc3Qgc3R5bGUgcHJvcGVydHkgZm9yIHByZWZpeGVkIHZlcnNpb25cbiAgICBcbiAgICBAcGFyYW0gW3N0cmluZ106IFN0eWxlIHByb3BlcnR5XG4gICAgQHJldHVybiBbc3RyaW5nXTogQ2FjaGVkIHByb3BlcnR5IG5hbWVcbiovXG5jb25zdCB0ZXN0UHJlZml4ID0gKGtleSkgPT4ge1xuICAgIHRlc3RFbGVtZW50ID0gdGVzdEVsZW1lbnQgfHwgZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICBpZiAoY2FjaGVba2V5XSA9PT0gZmFsc2UpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGNhY2hlW2tleV0gPSBmYWxzZTtcbiAgICB9XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IG51bVByZWZpeGVzOyBpKyspIHtcbiAgICAgICAgdmFyIHByZWZpeCA9IHByZWZpeGVzW2ldLFxuICAgICAgICAgICAgcHJlZml4ZWQgPSAocHJlZml4ID09PSAnJykgPyBrZXkgOiBwcmVmaXggKyBrZXkuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyBrZXkuc2xpY2UoMSk7XG5cbiAgICAgICAgaWYgKHByZWZpeGVkIGluIHRlc3RFbGVtZW50LnN0eWxlKSB7XG4gICAgICAgICAgICBjYWNoZVtrZXldID0gcHJlZml4ZWQ7XG4gICAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgcmV0dXJuIGNhY2hlW2tleV07XG59O1xuXG5leHBvcnQgZGVmYXVsdCAoa2V5KSA9PiBjYWNoZVtrZXldIHx8IHRlc3RQcmVmaXgoa2V5KTsiXX0=

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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hZGFwdGVyL3N2Zy92YWx1ZS10eXBlLW1hcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztrQkFNZTtBQUNYLHlCQURXO0FBRVgsMkJBRlc7QUFHWCwwQkFIVztBQUlYLDJCQUpXO0FBS1gsMkJBTFc7QUFNWCxtQ0FOVztBQU9YLHdCQVBXO0FBUVgsNEJBUlc7QUFTWCxnQ0FUVztBQVVYLGtDQVZXIiwiZmlsZSI6InZhbHVlLXR5cGUtbWFwLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9NYXR0L1NpdGVzL3BvcG1vdGlvbiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBhbHBoYSBmcm9tICcuLi8uLi92YWx1ZS10eXBlcy9hbHBoYSc7XG5pbXBvcnQgYXhlcyBmcm9tICcuLi8uLi92YWx1ZS10eXBlcy9heGVzJztcbmltcG9ydCBjb2xvciBmcm9tICcuLi8uLi92YWx1ZS10eXBlcy9jb2xvcic7XG5pbXBvcnQgY29tcGxleCBmcm9tICcuLi8uLi92YWx1ZS10eXBlcy9jb21wbGV4JztcbmltcG9ydCBzY2FsZSBmcm9tICcuLi8uLi92YWx1ZS10eXBlcy9zY2FsZSc7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBmaWxsOiBjb2xvcixcbiAgICBzdHJva2U6IGNvbG9yLFxuICAgIHNjYWxlOiBzY2FsZSxcbiAgICBzY2FsZVg6IHNjYWxlLFxuICAgIHNjYWxlWTogc2NhbGUsXG4gICAgdHJhbnNmb3JtT3JpZ2luOiBheGVzLFxuICAgIGQ6IGNvbXBsZXgsXG4gICAgb3BhY2l0eTogYWxwaGEsXG4gICAgZmlsbE9wYWNpdHk6IGFscGhhLFxuICAgIHN0cm9rZU9wYWNpdHk6IGFscGhhXG59OyJdfQ==

/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports.default = build;
	
	var _utils = __webpack_require__(31);
	
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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hZGFwdGVyL3N2Zy9idWlsZC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7a0JBS3dCOzs7Ozs7Ozs7O0FBRnhCLElBQU0sZ0JBQWdCLE1BQWhCOztBQUVTLFNBQVMsS0FBVCxDQUFlLEtBQWYsRUFBc0IsTUFBdEIsRUFBOEI7QUFDekMsUUFBSSxRQUFRLEVBQVI7UUFDQSxlQUFlLEtBQWY7UUFDQSxRQUFRLE1BQU0sS0FBTixLQUFnQixTQUFoQixHQUE0QixNQUFNLEtBQU4sSUFBZSxhQUFmLEdBQStCLE1BQU0sTUFBTixJQUFnQixDQUFoQjtRQUNuRSxTQUFTLE1BQU0sTUFBTixLQUFpQixTQUFqQixHQUE2QixNQUFNLE1BQU4sSUFBZ0IsYUFBaEIsR0FBZ0MsU0FBUyxDQUFUO1FBQ3RFLG1CQUFtQixPQUFPLENBQVA7UUFDbkIsbUJBQW1CLE9BQU8sQ0FBUDtRQUNuQixrQkFBa0IsQ0FBRSxnQkFBRixJQUFzQixRQUFRLENBQVIsQ0FBdEI7UUFDbEIsa0JBQWtCLENBQUUsZ0JBQUYsSUFBc0IsU0FBUyxDQUFULENBQXRCO1FBQ2xCLGdCQUFnQixtQkFBbUIsS0FBbkI7UUFDaEIsZ0JBQWdCLG1CQUFtQixNQUFuQjtRQUNoQixZQUFZO0FBQ1Isa0NBQXdCLE1BQU0sVUFBTixVQUFxQixNQUFNLFVBQU4sT0FBN0M7QUFDQSw4QkFBb0IseUJBQW9CLCtCQUEwQixlQUFVLDBCQUFxQix1QkFBa0Isb0JBQW5IO0FBQ0EsNEJBQWtCLE1BQU0sTUFBTixVQUFpQiwwQkFBcUIsdUJBQXhEO0FBQ0EsMEJBQWdCLE1BQU0sS0FBTixPQUFoQjtBQUNBLDBCQUFnQixNQUFNLEtBQU4sT0FBaEI7S0FMSixDQVhxQzs7QUFtQnpDLFNBQUssSUFBSSxHQUFKLElBQVcsS0FBaEIsRUFBdUI7QUFDbkIsWUFBSSxNQUFNLGNBQU4sQ0FBcUIsR0FBckIsQ0FBSixFQUErQjtBQUMzQixnQkFBSSx5QkFBZSxHQUFmLENBQUosRUFBeUI7QUFDckIsK0JBQWUsSUFBZixDQURxQjthQUF6QixNQUVPO0FBQ0gsc0JBQU0sd0JBQVksR0FBWixDQUFOLElBQTBCLE1BQU0sR0FBTixDQUExQixDQURHO2FBRlA7U0FESjtLQURKOztBQVVBLFFBQUksWUFBSixFQUFrQjtBQUNkLGNBQU0sU0FBTixHQUFrQixFQUFsQixDQURjOztBQUdkLGFBQUssSUFBSSxHQUFKLElBQVcsU0FBaEIsRUFBMkI7QUFDdkIsZ0JBQUksVUFBVSxjQUFWLENBQXlCLEdBQXpCLENBQUosRUFBbUM7QUFDL0Isb0JBQU0sZUFBZSxHQUFDLEtBQVEsT0FBUixHQUFtQixHQUFwQixHQUEwQixHQUExQixDQURVO0FBRS9CLHNCQUFNLFNBQU4sSUFBbUIsVUFBVSxHQUFWLEVBQWUsT0FBZixDQUF1QixZQUF2QixFQUFxQyxZQUFyQyxDQUFuQixDQUYrQjthQUFuQztTQURKO0tBSEo7O0FBV0EsV0FBTyxLQUFQLENBeEN5QztDQUE5QiIsImZpbGUiOiJidWlsZC5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvTWF0dC9TaXRlcy9wb3Btb3Rpb24iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjYW1lbFRvRGFzaCB9IGZyb20gJy4uLy4uL2luYy91dGlscyc7XG5pbXBvcnQgdHJhbnNmb3JtUHJvcHMgZnJvbSAnLi4vY3NzL3RyYW5zZm9ybS1wcm9wcyc7XG5cbmNvbnN0IFpFUk9fTk9UX1pFUk8gPSAwLjAwMDE7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGJ1aWxkKHN0YXRlLCBvcmlnaW4pIHtcbiAgICBsZXQgcHJvcHMgPSB7fSxcbiAgICAgICAgaGFzVHJhbnNmb3JtID0gZmFsc2UsXG4gICAgICAgIHNjYWxlID0gc3RhdGUuc2NhbGUgIT09IHVuZGVmaW5lZCA/IHN0YXRlLnNjYWxlIHx8IFpFUk9fTk9UX1pFUk8gOiBzdGF0ZS5zY2FsZVggfHwgMSxcbiAgICAgICAgc2NhbGVZID0gc3RhdGUuc2NhbGVZICE9PSB1bmRlZmluZWQgPyBzdGF0ZS5zY2FsZVkgfHwgWkVST19OT1RfWkVSTyA6IHNjYWxlIHx8IDEsXG4gICAgICAgIHRyYW5zZm9ybU9yaWdpblggPSBvcmlnaW4ueCxcbiAgICAgICAgdHJhbnNmb3JtT3JpZ2luWSA9IG9yaWdpbi55LFxuICAgICAgICBzY2FsZVRyYW5zZm9ybVggPSAtIHRyYW5zZm9ybU9yaWdpblggKiAoc2NhbGUgKiAxKSxcbiAgICAgICAgc2NhbGVUcmFuc2Zvcm1ZID0gLSB0cmFuc2Zvcm1PcmlnaW5ZICogKHNjYWxlWSAqIDEpLFxuICAgICAgICBzY2FsZVJlcGxhY2VYID0gdHJhbnNmb3JtT3JpZ2luWCAvIHNjYWxlLFxuICAgICAgICBzY2FsZVJlcGxhY2VZID0gdHJhbnNmb3JtT3JpZ2luWSAvIHNjYWxlWSxcbiAgICAgICAgdHJhbnNmb3JtID0ge1xuICAgICAgICAgICAgdHJhbnNsYXRlOiBgdHJhbnNsYXRlKCR7c3RhdGUudHJhbnNsYXRlWH0sICR7c3RhdGUudHJhbnNsYXRlWX0pIGAsXG4gICAgICAgICAgICBzY2FsZTogYHRyYW5zbGF0ZSgke3NjYWxlVHJhbnNmb3JtWH0sICR7c2NhbGVUcmFuc2Zvcm1ZfSkgc2NhbGUoJHtzY2FsZX0sICR7c2NhbGVZfSkgdHJhbnNsYXRlKCR7c2NhbGVSZXBsYWNlWH0sICR7c2NhbGVSZXBsYWNlWX0pIGAsXG4gICAgICAgICAgICByb3RhdGU6IGByb3RhdGUoJHtzdGF0ZS5yb3RhdGV9LCAke3RyYW5zZm9ybU9yaWdpblh9LCAke3RyYW5zZm9ybU9yaWdpbll9KSBgLFxuICAgICAgICAgICAgc2tld1g6IGBza2V3WCgke3N0YXRlLnNrZXdYfSkgYCxcbiAgICAgICAgICAgIHNrZXdZOiBgc2tld1koJHtzdGF0ZS5za2V3WX0pIGBcbiAgICAgICAgfTtcblxuICAgIGZvciAobGV0IGtleSBpbiBzdGF0ZSkge1xuICAgICAgICBpZiAoc3RhdGUuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgICAgaWYgKHRyYW5zZm9ybVByb3BzW2tleV0pIHtcbiAgICAgICAgICAgICAgICBoYXNUcmFuc2Zvcm0gPSB0cnVlO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBwcm9wc1tjYW1lbFRvRGFzaChrZXkpXSA9IHN0YXRlW2tleV07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoaGFzVHJhbnNmb3JtKSB7XG4gICAgICAgIHByb3BzLnRyYW5zZm9ybSA9ICcnO1xuXG4gICAgICAgIGZvciAobGV0IGtleSBpbiB0cmFuc2Zvcm0pIHtcbiAgICAgICAgICAgIGlmICh0cmFuc2Zvcm0uaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGRlZmF1bHRWYWx1ZSA9IChrZXkgPT09ICdzY2FsZScpID8gJzEnIDogJzAnO1xuICAgICAgICAgICAgICAgIHByb3BzLnRyYW5zZm9ybSArPSB0cmFuc2Zvcm1ba2V5XS5yZXBsYWNlKC91bmRlZmluZWQvZywgZGVmYXVsdFZhbHVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBwcm9wcztcbn0iXX0=

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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hZGFwdGVyL3N2Zy1wYXRoL2J1aWxkLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztrQkFRd0I7Ozs7Ozs7QUFGeEIsSUFBTSxrQkFBa0IsVUFBQyxPQUFELEVBQVUsTUFBVjtXQUFxQixVQUFDLENBQVcsT0FBWCxJQUFzQixHQUF0QixHQUE2QixNQUE5QixHQUF1QyxJQUF2QztDQUFyQjs7QUFFVCxTQUFTLEtBQVQsQ0FBZSxLQUFmLEVBQXNCLE1BQXRCLEVBQThCO0FBQ3pDLFFBQU0sU0FBUyxFQUFULENBRG1DO0FBRXpDLFFBQU0sa0JBQWtCO0FBQ3BCLGdCQUFRLENBQVI7QUFDQSxpQkFBUyxTQUFTLElBQVQ7S0FGUCxDQUZtQztBQU16QyxRQUFJLGVBQWUsS0FBZixDQU5xQzs7QUFRekMsU0FBSyxJQUFJLEdBQUosSUFBVyxLQUFoQixFQUF1QjtBQUNuQixZQUFJLE1BQU0sY0FBTixDQUFxQixHQUFyQixDQUFKLEVBQStCO0FBQzNCLGdCQUFNLFFBQVEsTUFBTSxHQUFOLENBQVIsQ0FEcUI7O0FBRzNCLG9CQUFRLEdBQVI7QUFDQSxxQkFBSyxRQUFMLENBREE7QUFFQSxxQkFBSyxTQUFMO0FBQ0ksbUNBQWUsSUFBZixDQURKO0FBRUksb0NBQWdCLEdBQWhCLElBQXVCLGdCQUFnQixLQUFoQixFQUF1QixNQUF2QixDQUF2QixDQUZKO0FBR0ksMEJBSEo7QUFGQSxxQkFNSyxRQUFMO0FBQ0ksMkJBQU8sbUJBQVAsSUFBOEIsZ0JBQWdCLENBQUMsS0FBRCxFQUFRLE1BQXhCLENBQTlCLENBREo7QUFFSSwwQkFGSjtBQU5BO0FBVUksMkJBQU8sR0FBUCxJQUFjLEtBQWQsQ0FESjtBQVRBLGFBSDJCO1NBQS9CO0tBREo7O0FBbUJBLFFBQUksWUFBSixFQUFrQjtBQUNkLGVBQU8sa0JBQVAsSUFBNkIsZ0JBQWdCLE1BQWhCLEdBQXlCLEdBQXpCLEdBQStCLGdCQUFnQixPQUFoQixDQUQ5QztLQUFsQjs7QUFJQSxXQUFPLE1BQVAsQ0EvQnlDO0NBQTlCIiwiZmlsZSI6ImJ1aWxkLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9NYXR0L1NpdGVzL3BvcG1vdGlvbiIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gICAgQ29udmVydCBwZXJjZW50YWdlIHRvIHBpeGVsc1xuICAgIFxuICAgIEBwYXJhbSBbbnVtYmVyXTogUGVyY2VudGFnZSBvZiB0b3RhbCBsZW5ndGhcbiAgICBAcGFyYW0gW251bWJlcl06IFRvdGFsIGxlbmd0aFxuKi9cbmNvbnN0IHBlcmNlbnRUb1BpeGVscyA9IChwZXJjZW50LCBsZW5ndGgpID0+IChwYXJzZUZsb2F0KHBlcmNlbnQpIC8gMTAwKSAqIGxlbmd0aCArICdweCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGJ1aWxkKHN0YXRlLCBsZW5ndGgpIHtcbiAgICBjb25zdCBzdHlsZXMgPSB7fTtcbiAgICBjb25zdCBkYXNoQXJyYXlTdHlsZXMgPSB7XG4gICAgICAgIGxlbmd0aDogMCxcbiAgICAgICAgc3BhY2luZzogbGVuZ3RoICsgJ3B4J1xuICAgIH07XG4gICAgbGV0IGhhc0Rhc2hBcnJheSA9IGZhbHNlO1xuXG4gICAgZm9yIChsZXQga2V5IGluIHN0YXRlKSB7XG4gICAgICAgIGlmIChzdGF0ZS5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgICBjb25zdCB2YWx1ZSA9IHN0YXRlW2tleV07XG5cbiAgICAgICAgICAgIHN3aXRjaCAoa2V5KSB7XG4gICAgICAgICAgICBjYXNlICdsZW5ndGgnOlxuICAgICAgICAgICAgY2FzZSAnc3BhY2luZyc6XG4gICAgICAgICAgICAgICAgaGFzRGFzaEFycmF5ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBkYXNoQXJyYXlTdHlsZXNba2V5XSA9IHBlcmNlbnRUb1BpeGVscyh2YWx1ZSwgbGVuZ3RoKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ29mZnNldCc6XG4gICAgICAgICAgICAgICAgc3R5bGVzWydzdHJva2UtZGFzaG9mZnNldCddID0gcGVyY2VudFRvUGl4ZWxzKC12YWx1ZSwgbGVuZ3RoKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgc3R5bGVzW2tleV0gPSB2YWx1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGlmIChoYXNEYXNoQXJyYXkpIHtcbiAgICAgICAgc3R5bGVzWydzdHJva2UtZGFzaGFycmF5J10gPSBkYXNoQXJyYXlTdHlsZXMubGVuZ3RoICsgJyAnICsgZGFzaEFycmF5U3R5bGVzLnNwYWNpbmc7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN0eWxlcztcbn0iXX0=

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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hZGFwdGVyL3N2Zy1wYXRoL3N0YXRlLW1hcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFFQSxJQUFNLFNBQVMsU0FBVDs7O0FBSUYsYUFBWSxrQkFBWjtBQUNBLFdBQVUsZ0JBQVY7QUFDQSxnQkFBZSxxQkFBZiIsImZpbGUiOiJzdGF0ZS1tYXAuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL01hdHQvU2l0ZXMvcG9wbW90aW9uIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNzc1N0YXRlTWFwIGZyb20gJy4uL2Nzcy9zdGF0ZS1tYXAnO1xuXG5jb25zdCBTVFJPS0UgPSAnc3Ryb2tlLSc7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgICAuLi5jc3NTdGF0ZU1hcCxcbiAgICBvcGFjaXR5OiBgJHtTVFJPS0V9b3BhY2l0eWAsXG4gICAgd2lkdGg6IGAke1NUUk9LRX13aWR0aGAsXG4gICAgbWl0ZXJsaW1pdDogYCR7U1RST0tFfW1pdGVybGltaXRgXG59OyJdfQ==

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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy92YWx1ZS10eXBlcy9zZXR0aW5ncy9kZWZhdWx0LXByb3BzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFPLElBQU0sb0JBQU07QUFDZixTQUFLLENBQUw7QUFDQSxTQUFLLEdBQUw7QUFDQSxXQUFPLElBQVA7Q0FIUzs7QUFNTixJQUFNLDRCQUFVO0FBQ25CLFNBQUssQ0FBTDtBQUNBLFNBQUssQ0FBTDtDQUZTOztBQUtOLElBQU0sNEJBQVU7QUFDbkIsU0FBSyxDQUFMO0FBQ0EsU0FBSyxHQUFMO0FBQ0EsVUFBTSxHQUFOO0NBSFMiLCJmaWxlIjoiZGVmYXVsdC1wcm9wcy5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvTWF0dC9TaXRlcy9wb3Btb3Rpb24iLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgcmdiID0ge1xuICAgIG1pbjogMCxcbiAgICBtYXg6IDI1NSxcbiAgICByb3VuZDogdHJ1ZVxufTtcblxuZXhwb3J0IGNvbnN0IG9wYWNpdHkgPSB7XG4gICAgbWluOiAwLFxuICAgIG1heDogMVxufTtcblxuZXhwb3J0IGNvbnN0IHBlcmNlbnQgPSB7XG4gICAgbWluOiAwLFxuICAgIG1heDogMTAwLFxuICAgIHVuaXQ6ICclJ1xufTsiXX0=

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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy92YWx1ZS10eXBlcy9zZXR0aW5ncy9kaWN0aW9uYXJ5LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLElBQU0sSUFBSSxHQUFKO0FBQ04sSUFBTSxJQUFJLEdBQUo7QUFDTixJQUFNLFFBQVEsT0FBUjs7QUFFQyxJQUFNLHNCQUFPLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxHQUFQLENBQVA7QUFDTixJQUFNLG9CQUFNLENBQUMsS0FBRCxFQUFRLE9BQVIsRUFBaUIsTUFBakIsRUFBeUIsS0FBekIsQ0FBTjtBQUNOLElBQU0sb0JBQU0sQ0FBQyxLQUFELEVBQVEsWUFBUixFQUFzQixXQUF0QixFQUFtQyxLQUFuQyxDQUFOO0FBQ04sSUFBTSxnQ0FBWSxDQUFDLEtBQUQsRUFBUSxPQUFSLEVBQWlCLFFBQWpCLEVBQTJCLE1BQTNCLENBQVo7QUFDTixJQUFNLDBCQUFTLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxRQUFQLEVBQWlCLFFBQWpCLEVBQTJCLE9BQTNCLENBQVQiLCJmaWxlIjoiZGljdGlvbmFyeS5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvTWF0dC9TaXRlcy9wb3Btb3Rpb24iLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBYID0gJ1gnO1xuY29uc3QgWSA9ICdZJztcbmNvbnN0IEFMUEhBID0gJ0FscGhhJztcblxuZXhwb3J0IGNvbnN0IGF4ZXMgPSBbWCwgWSwgJ1onXTtcbmV4cG9ydCBjb25zdCByZ2IgPSBbJ1JlZCcsICdHcmVlbicsICdCbHVlJywgQUxQSEFdO1xuZXhwb3J0IGNvbnN0IGhzbCA9IFsnSHVlJywgJ1NhdHVyYXRpb24nLCAnTGlnaHRuZXNzJywgQUxQSEFdO1xuZXhwb3J0IGNvbnN0IHBvc2l0aW9ucyA9IFsnVG9wJywgJ1JpZ2h0JywgJ0JvdHRvbScsICdMZWZ0J107XG5leHBvcnQgY29uc3Qgc2hhZG93ID0gW1gsIFksICdSYWRpdXMnLCAnU3ByZWFkJywgJ0NvbG9yJ107Il19

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
	//# sourceMappingURL=data:application/json;base64,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b3VyY2VzQ29udGVudCI6WyIvKlxuICAgIENvcmUgcmVuZGVyIGxvb3BcblxuICAgIFNvbWUgZGVjaWNpc29ucyBoZXJlIGhhdmUgYmVlbiB0YWtlbiBpbiB0aGUgbmFtZSBvZiBwZXJmb3JtYW5jZS4gQWxsIGhhaWwgcGVyZm9ybWFuY2UuXG4gICAgKEl0IHR1cm5zIG91dCBtaWNyb29wdGltaXNhdGlvbnMgZG8gbWF0dGVyIHdoZW4geW91IGhhdmUgMTZtcylcbiovXG5pbXBvcnQgdGltZXIgZnJvbSAnLi90aW1lcic7XG5pbXBvcnQgdGljayBmcm9tICcuL3RpY2snO1xuaW1wb3J0IG1hbmFnZXIgZnJvbSAnLi9tYW5hZ2VyJztcblxuY29uc3QgcHJvY2Vzc1N0ZXBPcmRlciA9IFtcbiAgICB7IG5hbWU6ICdvbkZyYW1lU3RhcnQnIH0sXG4gICAgeyBuYW1lOiAnb25VcGRhdGUnIH0sXG4gICAgeyBuYW1lOiAnd2lsbFJlbmRlcicsIGRlY2lkZVJlbmRlcjogdHJ1ZSB9LFxuICAgIHsgbmFtZTogJ29uUHJlUmVuZGVyJywgaXNSZW5kZXI6IHRydWUgfSxcbiAgICB7IG5hbWU6ICdvblJlbmRlcicsIGlzUmVuZGVyOiB0cnVlIH0sXG4gICAgeyBuYW1lOiAnb25Qb3N0UmVuZGVyJywgaXNSZW5kZXI6IHRydWUgfSxcbiAgICB7IG5hbWU6ICdvbkZyYW1lRW5kJyB9LFxuICAgIHsgbmFtZTogJ29uQ2xlYW51cCcgfVxuXTtcbmNvbnN0IG51bVByb2Nlc3NTdGVwcyA9IHByb2Nlc3NTdGVwT3JkZXIubGVuZ3RoO1xuXG4vLyBbYm9vbGVhbl06IElzIGxvb3AgcnVubmluZz9cbmxldCBpc1J1bm5pbmcgPSBmYWxzZTtcblxuLypcbiAgICBbdGltZXN0YW1wXTogRnJhbWUgdGltZXN0YW1wXG4gICAgW2ludF06IFRpbWUgc2luY2UgbGFzdCBmcmFtZVxuKi9cbmZ1bmN0aW9uIGZpcmVBbGwoZnJhbWVTdGFtcCwgZWxhcHNlZCkge1xuICAgIGNvbnN0IGFjdGl2ZUlkcyA9IG1hbmFnZXIuZ2V0QWN0aXZlSWRzKCk7XG4gICAgY29uc3QgYWN0aXZlUHJvY2Vzc0NvdW50ID0gYWN0aXZlSWRzLmxlbmd0aDtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbnVtUHJvY2Vzc1N0ZXBzOyBpKyspIHtcbiAgICAgICAgY29uc3Qgc3RlcCA9IHByb2Nlc3NTdGVwT3JkZXJbaV07XG5cbiAgICAgICAgZm9yIChsZXQgaTIgPSAwOyBpMiA8IGFjdGl2ZVByb2Nlc3NDb3VudDsgaTIrKykge1xuICAgICAgICAgICAgY29uc3QgcHJvY2VzcyA9IG1hbmFnZXIuYWN0aXZlUHJvY2Vzc2VzW2FjdGl2ZUlkc1tpMl1dO1xuICAgICAgICAgICAgbGV0IHJlc3VsdCA9IGZhbHNlO1xuXG4gICAgICAgICAgICAvLyBDaGVjayBpZiB0aGlzIHByb2Nlc3MgaGFzIHRoaXMgc3RlcCwgb3IgaWYgaXQncyBhIHJlbmRlciBzdGVwIHRoYXQgd2UncmUgcmVuZGVyaW5nIHRoaXMgZnJhbWVcbiAgICAgICAgICAgIGlmIChwcm9jZXNzICYmIHByb2Nlc3Nbc3RlcC5uYW1lXSAmJiAoIXN0ZXAuaXNSZW5kZXIgfHwgKHN0ZXAuaXNSZW5kZXIgJiYgcHJvY2Vzcy5fcmVuZGVyVGhpc0ZyYW1lID09PSB0cnVlKSkpIHtcbiAgICAgICAgICAgICAgICByZXN1bHQgPSBwcm9jZXNzW3N0ZXAubmFtZV0uY2FsbChwcm9jZXNzLCBwcm9jZXNzLCBmcmFtZVN0YW1wLCBlbGFwc2VkKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gSWYgdGhpcyBpcyBhIGRlY2lkZSByZW5kZXIgc3RlcCBhbmQgaXQgcmV0dXJucyBgZmFsc2VgLCBzZXQgd2lsbFJlbmRlciB0byBmYWxzZVxuICAgICAgICAgICAgaWYgKHN0ZXAuZGVjaWRlUmVuZGVyKSB7XG4gICAgICAgICAgICAgICAgcHJvY2Vzcy5fcmVuZGVyVGhpc0ZyYW1lID0gKHByb2Nlc3Nbc3RlcC5uYW1lXSAmJiByZXN1bHQgIT09IHRydWUpID8gZmFsc2UgOiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG1hbmFnZXIuZ2V0Tm9uQmFja2dyb3VuZFJ1bm5pbmdDb3VudCgpO1xufVxuXG4vLyBGdW5jdGlvbiB0byBmaXJlIGV2ZXJ5IGZyYW1lXG5mdW5jdGlvbiBmcmFtZShmcmFtZVN0YW1wKSB7XG4gICAgdGltZXIudXBkYXRlKGZyYW1lU3RhbXApO1xuICAgIGlzUnVubmluZyA9IGZpcmVBbGwoZnJhbWVTdGFtcCwgdGltZXIuZ2V0RWxhcHNlZCgpKTtcblxuICAgIGlmIChpc1J1bm5pbmcpIHtcbiAgICAgICAgdGljayhmcmFtZSk7XG4gICAgfVxufVxuXG4vLyBTdGFydCBsb29wXG5mdW5jdGlvbiBzdGFydCgpIHtcbiAgICBpZiAoIWlzUnVubmluZykge1xuICAgICAgICB0aW1lci5zdGFydCgpO1xuICAgICAgICBpc1J1bm5pbmcgPSB0cnVlO1xuICAgICAgICB0aWNrKGZyYW1lKTtcbiAgICB9XG59XG5cbi8vIEV4cG9ydHNcbmV4cG9ydCBjb25zdCBnZXRQcm9jZXNzSWQgPSBtYW5hZ2VyLmdldFByb2Nlc3NJZDtcblxuLypcbiAgICBbaW50XTogUHJvY2VzcyBJRCB0byBhY3RpdmF0ZVxuICAgIFtQcm9jZXNzXTogUHJvY2VzcyB0byBhY3RpdmF0ZVxuKi9cbmV4cG9ydCBmdW5jdGlvbiBhY3RpdmF0ZShpZCwgcHJvY2Vzcykge1xuICAgIG1hbmFnZXIuYWN0aXZhdGUoaWQsIHByb2Nlc3MpO1xuXG4gICAgaWYgKCFpc1J1bm5pbmcpIHtcbiAgICAgICAgc3RhcnQoKTtcbiAgICB9XG59XG5cbi8qXG4gICAgW2ludF06IFByb2Nlc3MgSUQgdG8gZGVhY3RpdmF0ZVxuKi9cbmV4cG9ydCBjb25zdCBkZWFjdGl2YXRlID0gbWFuYWdlci5kZWFjdGl2YXRlOyJdfQ==

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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9pbmMvYmluZC1hZGFwdGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUlBLElBQU0sWUFBWSxjQUFaOztrQkFFUyxVQUFDLE9BQUQsRUFBYTs7QUFFeEIsUUFBSSxRQUFRLFNBQVIsQ0FBSixFQUF3QjtBQUNwQixlQUFPLFFBQVEsU0FBUixDQUFQOzs7QUFEb0IsS0FBeEIsTUFJTztBQUNILGdCQUFJLG1CQUFKOzs7QUFERyxnQkFJQyxtQkFBbUIsV0FBbkIsSUFBa0MsUUFBUSxPQUFSLEtBQW9CLEtBQXBCLEVBQTJCO0FBQzdEOzs7QUFENkQsYUFBakUsTUFJTyxJQUFJLG1CQUFtQixVQUFuQixFQUErQjtBQUN0Qyx3QkFBSSxRQUFRLE9BQVIsS0FBb0IsTUFBcEIsRUFBNEI7QUFDNUIsMkRBRDRCO3FCQUFoQyxNQUVPO0FBQ0gsdURBREc7cUJBRlA7aUJBREc7OztBQVJKLGtCQWlCSCxDQUFPLGNBQVAsQ0FBc0IsT0FBdEIsRUFBK0IsU0FBL0IsRUFBMEM7QUFDdEMsNEJBQVksS0FBWjtBQUNBLHVCQUFPLE9BQVA7YUFGSixFQWpCRzs7QUFzQkgsbUJBQU8sUUFBUSxPQUFSLENBQVAsQ0F0Qkc7U0FKUDtDQUZXIiwiZmlsZSI6ImJpbmQtYWRhcHRlci5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvTWF0dC9TaXRlcy9wb3Btb3Rpb24iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY3NzQWRhcHRlciBmcm9tICcuLi9hZGFwdGVyL2Nzcy1hZGFwdGVyJztcbmltcG9ydCBzdmdBZGFwdGVyIGZyb20gJy4uL2FkYXB0ZXIvc3ZnLWFkYXB0ZXInO1xuaW1wb3J0IHN2Z1BhdGhBZGFwdGVyIGZyb20gJy4uL2FkYXB0ZXIvc3ZnLXBhdGgtYWRhcHRlcic7XG5cbmNvbnN0IFNBVkVfUFJPUCA9ICdfX3BtX2FkYXB0ZXInO1xuXG5leHBvcnQgZGVmYXVsdCAoZWxlbWVudCkgPT4ge1xuICAgIC8vIFJldHVybiBib3VuZCBhZGFwdGVyIGlmIHByZXNlbnRcbiAgICBpZiAoZWxlbWVudFtTQVZFX1BST1BdKSB7XG4gICAgICAgIHJldHVybiBlbGVtZW50W1NBVkVfUFJPUF07XG5cbiAgICAvLyBPciBkZXRlY3QgYW5kIGJpbmQgYWRhcHRlclxuICAgIH0gZWxzZSB7XG4gICAgICAgIGxldCBhZGFwdGVyO1xuXG4gICAgICAgIC8vIElmIEhUTUxFbGVtZW50IGxvYWQgQ1NTXG4gICAgICAgIGlmIChlbGVtZW50IGluc3RhbmNlb2YgSFRNTEVsZW1lbnQgfHwgZWxlbWVudC50YWdOYW1lID09PSAnc3ZnJykge1xuICAgICAgICAgICAgYWRhcHRlciA9IGNzc0FkYXB0ZXI7XG5cbiAgICAgICAgLy8gT3IgU1ZHXG4gICAgICAgIH0gZWxzZSBpZiAoZWxlbWVudCBpbnN0YW5jZW9mIFNWR0VsZW1lbnQpIHtcbiAgICAgICAgICAgIGlmIChlbGVtZW50LnRhZ05hbWUgPT09ICdwYXRoJykge1xuICAgICAgICAgICAgICAgIGFkYXB0ZXIgPSBzdmdQYXRoQWRhcHRlcjtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgYWRhcHRlciA9IHN2Z0FkYXB0ZXI7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyBCaW5kIGFkYXB0ZXIgdG8gZWxlbWVudFxuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZWxlbWVudCwgU0FWRV9QUk9QLCB7XG4gICAgICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgICAgICAgIHZhbHVlOiBhZGFwdGVyXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiBhZGFwdGVyKGVsZW1lbnQpO1xuICAgIH1cbn07XG4iXX0=

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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hZGFwdGVyL2Nzcy90cmFuc2Zvcm0tcHJvcHMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBRUEsSUFBSSxpQkFBaUIsRUFBakI7O0FBRUosSUFBTSxRQUFRLE9BQVI7QUFDTixJQUFNLFNBQVMsUUFBVDtBQUNOLElBQU0sd0JBQXdCLHNCQUF4QjtBQUNOLElBQU0sUUFBUSxDQUFDLFdBQUQsRUFBYyxLQUFkLEVBQXFCLE1BQXJCLEVBQTZCLE1BQTdCLEVBQXFDLHFCQUFyQyxDQUFSOztBQUVOLGVBQWUsTUFBZixJQUF5QixlQUFlLEtBQWYsSUFBd0IsZUFBZSxxQkFBZixJQUF3QyxJQUF4Qzs7QUFFakQsTUFBTSxPQUFOLENBQWMsVUFBQyxJQUFEO1NBQVUsaUJBQUssT0FBTCxDQUFhLFVBQUMsSUFBRDtXQUFVLGVBQWUsT0FBTyxJQUFQLENBQWYsR0FBOEIsSUFBOUI7R0FBVjtDQUF2QixDQUFkOztrQkFFZSIsImZpbGUiOiJ0cmFuc2Zvcm0tcHJvcHMuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL01hdHQvU2l0ZXMvcG9wbW90aW9uIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgYXhlcyB9IGZyb20gJy4uLy4uL3ZhbHVlLXR5cGVzL3NldHRpbmdzL2RpY3Rpb25hcnknO1xuXG5sZXQgdHJhbnNmb3JtUHJvcHMgPSB7fTtcblxuY29uc3QgU0NBTEUgPSAnc2NhbGUnO1xuY29uc3QgUk9UQVRFID0gJ3JvdGF0ZSc7XG5jb25zdCBUUkFOU0ZPUk1fUEVSU1BFQ1RJVkUgPSAndHJhbnNmb3JtUGVyc3BlY3RpdmUnO1xuY29uc3QgVEVSTVMgPSBbJ3RyYW5zbGF0ZScsIFNDQUxFLCBST1RBVEUsICdza2V3JywgVFJBTlNGT1JNX1BFUlNQRUNUSVZFXTtcblxudHJhbnNmb3JtUHJvcHNbUk9UQVRFXSA9IHRyYW5zZm9ybVByb3BzW1NDQUxFXSA9IHRyYW5zZm9ybVByb3BzW1RSQU5TRk9STV9QRVJTUEVDVElWRV0gPSB0cnVlO1xuXG5URVJNUy5mb3JFYWNoKCh0ZXJtKSA9PiBheGVzLmZvckVhY2goKGF4aXMpID0+IHRyYW5zZm9ybVByb3BzW3Rlcm0gKyBheGlzXSA9IHRydWUpKTtcblxuZXhwb3J0IGRlZmF1bHQgdHJhbnNmb3JtUHJvcHM7Il19

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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9wcm9jZXNzL3RpY2suanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUlBLElBQU0sU0FBUyxPQUFRLE1BQVAsS0FBa0IsV0FBbEIsSUFBaUMsT0FBTyxxQkFBUCxHQUFnQyxJQUFsRSxHQUF5RSxLQUF6RTs7QUFFZixJQUFJLGdCQUFKOztBQUVBLElBQUksTUFBSixFQUFZO0FBQ1IsV0FBTyxPQUFPLHFCQUFQLENBREM7Q0FBWixNQUdPOzs7Ozs7Ozs7Ozs7Ozs7QUFlSCxZQUFJLFdBQVcsQ0FBWDs7QUFFSixlQUFPLFVBQUMsUUFBRCxFQUFjO0FBQ2pCLGdCQUFNLGNBQWMsSUFBSSxJQUFKLEdBQVcsT0FBWCxFQUFkLENBRFc7QUFFakIsZ0JBQU0sYUFBYSxLQUFLLEdBQUwsQ0FBUyxDQUFULEVBQVksTUFBTSxjQUFjLFFBQWQsQ0FBTixDQUF6QixDQUZXOztBQUlqQix1QkFBVyxjQUFjLFVBQWQsQ0FKTTs7QUFNakIsdUJBQVc7dUJBQU0sU0FBUyxRQUFUO2FBQU4sRUFBMEIsVUFBckMsRUFOaUI7U0FBZDtTQWpCSjtDQUhQOztrQkE4QmUiLCJmaWxlIjoidGljay5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvTWF0dC9TaXRlcy9wb3Btb3Rpb24iLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICAgIERldGVjdCBhbmQgbG9hZCBhbiBhcHByb3ByaWF0ZSBjbG9jayBzZXR0aW5nIGZvciB0aGUgZW52aXJvbm1lbnRcbiovXG5cbmNvbnN0IGhhc1JBRiA9ICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKSA/IHRydWUgOiBmYWxzZTtcblxubGV0IHRpY2s7XG5cbmlmIChoYXNSQUYpIHtcbiAgICB0aWNrID0gd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZTtcblxufSBlbHNlIHtcbiAgICAvKlxuICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUgcG9seWZpbGxcbiAgICAgICAgXG4gICAgICAgIEZvciBJRTgvOSBGbGluc3RvbmVzIGFuZCBub24tYnJvd3NlciBlbnZpcm9ubWVudHNcblxuICAgICAgICBUYWtlbiBmcm9tIFBhdWwgSXJpc2guIFdlJ3ZlIHN0cmlwcGVkIG91dCBjYW5jZWxBbmltYXRpb25GcmFtZSBjaGVja3MgYmVjYXVzZSB3ZSBkb24ndCBmb3ggd2l0aCB0aGF0XG4gICAgICAgIFxuICAgICAgICBodHRwOi8vcGF1bGlyaXNoLmNvbS8yMDExL3JlcXVlc3RhbmltYXRpb25mcmFtZS1mb3Itc21hcnQtYW5pbWF0aW5nL1xuICAgICAgICBodHRwOi8vbXkub3BlcmEuY29tL2Vtb2xsZXIvYmxvZy8yMDExLzEyLzIwL3JlcXVlc3RhbmltYXRpb25mcmFtZS1mb3Itc21hcnQtZXItYW5pbWF0aW5nXG4gICAgICAgICBcbiAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lIHBvbHlmaWxsIGJ5IEVyaWsgTcO2bGxlci4gZml4ZXMgZnJvbSBQYXVsIElyaXNoIGFuZCBUaW5vIFppamRlbFxuICAgICAgICAgXG4gICAgICAgIE1JVCBsaWNlbnNlXG4gICAgKi9cbiAgICBsZXQgbGFzdFRpbWUgPSAwO1xuXG4gICAgdGljayA9IChjYWxsYmFjaykgPT4ge1xuICAgICAgICBjb25zdCBjdXJyZW50VGltZSA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuICAgICAgICBjb25zdCB0aW1lVG9DYWxsID0gTWF0aC5tYXgoMCwgMTYgLSAoY3VycmVudFRpbWUgLSBsYXN0VGltZSkpO1xuXG4gICAgICAgIGxhc3RUaW1lID0gY3VycmVudFRpbWUgKyB0aW1lVG9DYWxsO1xuXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4gY2FsbGJhY2sobGFzdFRpbWUpLCB0aW1lVG9DYWxsKTtcbiAgICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCB0aWNrOyJdfQ==

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
	                runningIds.push(id);
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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9wcm9jZXNzL21hbmFnZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUNBLElBQUksbUJBQW1CLENBQW5COzs7QUFHSixJQUFJLG9CQUFvQixDQUFwQjs7O0FBR0osSUFBSSw0QkFBNEIsQ0FBNUI7OztBQUdKLElBQU0sYUFBYSxFQUFiOzs7QUFHTixJQUFNLGtCQUFrQixFQUFsQjs7O0FBR04sSUFBTSxnQkFBZ0IsRUFBaEI7OztBQUdOLElBQU0sa0JBQWtCLEVBQWxCOzs7Ozs7Ozs7QUFTTixJQUFNLGVBQWUsVUFBQyxFQUFELEVBQUssTUFBTCxFQUFhLE9BQWIsRUFBeUI7QUFDMUMsUUFBTSxhQUFhLE9BQU8sT0FBUCxDQUFlLEVBQWYsQ0FBYixDQURvQztBQUUxQyxRQUFNLGNBQWMsUUFBUSxPQUFSLENBQWdCLEVBQWhCLENBQWQsQ0FGb0M7O0FBSTFDLFFBQUksZUFBZSxDQUFDLENBQUQsRUFBSTtBQUNuQixlQUFPLElBQVAsQ0FBWSxFQUFaLEVBRG1CO0tBQXZCOztBQUlBLFFBQUksY0FBYyxDQUFDLENBQUQsRUFBSTtBQUNsQixnQkFBUSxNQUFSLENBQWUsV0FBZixFQUE0QixDQUE1QixFQURrQjtLQUF0QjtDQVJpQjs7Ozs7Ozs7QUFtQnJCLElBQU0scUJBQXFCLFVBQUMsR0FBRCxFQUFNLE1BQU4sRUFBaUI7QUFDeEMsUUFBTSxTQUFTLE1BQU0sQ0FBTixHQUFVLENBQUMsQ0FBRCxDQURlOztBQUd4Qyx5QkFBcUIsTUFBckIsQ0FId0M7O0FBS3hDLFFBQUksQ0FBQyxNQUFELEVBQVM7QUFDVCxxQ0FBNkIsTUFBN0IsQ0FEUztLQUFiO0NBTHVCOztrQkFVWjtBQUNYLG9DQURXOzs7QUFJWCxjQUFVLFVBQUMsRUFBRCxFQUFLLE9BQUwsRUFBaUI7QUFDdkIsd0JBQWdCLEVBQWhCLElBQXNCLE9BQXRCLENBRHVCO0FBRXZCLGdCQUFRLFFBQVIsR0FBbUIsSUFBbkIsQ0FGdUI7QUFHdkIscUJBQWEsRUFBYixFQUFpQixhQUFqQixFQUFnQyxlQUFoQyxFQUh1QjtLQUFqQjs7O0FBT1YsZ0JBQVksVUFBQyxFQUFELEVBQVE7QUFDaEIsZ0JBQVEsUUFBUixHQUFtQixLQUFuQixDQURnQjtBQUVoQixxQkFBYSxFQUFiLEVBQWlCLGVBQWpCLEVBQWtDLGFBQWxDLEVBRmdCO0tBQVI7OztBQU1aLGtDQUE4QjtlQUFNO0tBQU47OztBQUc5QixrQkFBYztlQUFNO0tBQU47OztBQUdkLGtCQUFjLFlBQU07Ozs7QUFJaEIsWUFBTSx3QkFBd0IsZ0JBQWdCLE1BQWhCLENBSmQ7O0FBTWhCLGFBQUssSUFBSSxJQUFJLENBQUosRUFBTyxJQUFJLHFCQUFKLEVBQTJCLEdBQTNDLEVBQWdEO0FBQzVDLGdCQUFNLEtBQUssZ0JBQWdCLENBQWhCLENBQUwsQ0FEc0M7QUFFNUMsZ0JBQU0sZ0JBQWdCLFdBQVcsT0FBWCxDQUFtQixFQUFuQixDQUFoQixDQUZzQztBQUc1QyxnQkFBTSxXQUFVLGdCQUFnQixFQUFoQixDQUFWOzs7QUFIc0MsZ0JBTXhDLGdCQUFnQixDQUFDLENBQUQsRUFBSTtBQUNwQiwyQkFBVyxNQUFYLENBQWtCLGFBQWxCLEVBQWlDLENBQWpDLEVBRG9CO0FBRXBCLG1DQUFtQixLQUFuQixFQUEwQixTQUFRLE1BQVIsQ0FBMUIsQ0FGb0I7QUFHcEIsdUJBQU8sZ0JBQWdCLEVBQWhCLENBQVAsQ0FIb0I7O0FBS3BCLG9CQUFJLFNBQVEsWUFBUixFQUFzQjtBQUN0Qiw2QkFBUSxZQUFSLENBQXFCLFFBQXJCLEVBRHNCO2lCQUExQjthQUxKO1NBTko7Ozs7OztBQU5nQix1QkEyQmhCLENBQWdCLE1BQWhCLENBQXVCLENBQXZCLEVBQTBCLHFCQUExQjs7Ozs7QUEzQmdCLFlBZ0NWLHNCQUFzQixjQUFjLE1BQWQsQ0FoQ1o7O0FBa0NoQixhQUFLLElBQUksSUFBSSxDQUFKLEVBQU8sSUFBSSxtQkFBSixFQUF5QixHQUF6QyxFQUE4QztBQUMxQyxnQkFBTSxLQUFLLGNBQWMsQ0FBZCxDQUFMLENBRG9DO0FBRTFDLGdCQUFNLGdCQUFnQixXQUFXLE9BQVgsQ0FBbUIsRUFBbkIsQ0FBaEIsQ0FGb0M7QUFHMUMsZ0JBQU0sWUFBVSxnQkFBZ0IsRUFBaEIsQ0FBVjs7O0FBSG9DLGdCQU10QyxrQkFBa0IsQ0FBQyxDQUFELElBQU0sU0FBeEIsRUFBaUM7QUFDakMsMkJBQVcsSUFBWCxDQUFnQixFQUFoQixFQURpQztBQUVqQyxtQ0FBbUIsSUFBbkIsRUFBeUIsVUFBUSxNQUFSLENBQXpCLENBRmlDOztBQUlqQyxvQkFBSSxVQUFRLFVBQVIsRUFBb0I7QUFDcEIsOEJBQVEsVUFBUixDQUFtQixTQUFuQixFQURvQjtpQkFBeEI7YUFKSjtTQU5KOztBQWdCQSxzQkFBYyxNQUFkLENBQXFCLENBQXJCLEVBQXdCLG1CQUF4QixFQWxEZ0I7O0FBb0RoQixlQUFPLFVBQVAsQ0FwRGdCO0tBQU4iLCJmaWxlIjoibWFuYWdlci5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvTWF0dC9TaXRlcy9wb3Btb3Rpb24iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBbaW50XTogSW5jcmVtZW50ZWQgZm9yIGVhY2ggbmV3IHJ1bm5pbmcgcHJvY2Vzc1xubGV0IGN1cnJlbnRQcm9jZXNzSWQgPSAwO1xuXG4vLyBbaW50XTogTnVtYmVyIG9mIGFsbCBydW5uaW5nIHByb2Nlc3Nlc1xubGV0IHRvdGFsUnVubmluZ0NvdW50ID0gMDtcblxuLy8gW2ludF06IE51bWJlciBvZiBydW5uaW5nIHByb2Nlc3NlcyBleGNsdWRpbmcgYmFja2dyb3VuZCBwcm9jZXNzZXNcbmxldCBub25CYWNrZ3JvdW5kUnVubmluZ0NvdW50ID0gMDtcblxuLy8gW2FycmF5XTogQXJyYXkgb2YgcnVubmluZyBwcm9jZXNzIElEc1xuY29uc3QgcnVubmluZ0lkcyA9IFtdO1xuXG4vLyBbb2JqZWN0XTogTWFwIG9mIHJ1bm5pbmcgcHJvY2Vzc2VzXG5jb25zdCBhY3RpdmVQcm9jZXNzZXMgPSB7fTtcblxuLy8gW2FycmF5XTogQXJyYXkgb2YgcHJvY2VzcyBJRHMgcXVldWVkIGZvciBhY3RpdmF0aW9uXG5jb25zdCBhY3RpdmF0ZVF1ZXVlID0gW107XG5cbi8vIFthcnJheV06IEFycmF5IG9mIHByb2Nlc3MgSURzIHF1ZXVlZCBmb3IgZGVhY3RpdmF0aW9uXG5jb25zdCBkZWFjdGl2YXRlUXVldWUgPSBbXTtcblxuLypcbiAgICBVcGRhdGUgYWN0aXZhdGUvZGVhY3RpdmF0ZSBxdWV1ZXNcblxuICAgIEBwYXJhbSBbbnVtYmVyXVxuICAgIEBwYXJhbSBbYXJyYXldXG4gICAgQHBhcmFtIFthcnJheV1cbiovXG5jb25zdCB1cGRhdGVRdWV1ZXMgPSAoaWQsIGluTGlzdCwgb3V0TGlzdCkgPT4ge1xuICAgIGNvbnN0IGluUG9zaXRpb24gPSBpbkxpc3QuaW5kZXhPZihpZCk7XG4gICAgY29uc3Qgb3V0UG9zaXRpb24gPSBvdXRMaXN0LmluZGV4T2YoaWQpO1xuXG4gICAgaWYgKGluUG9zaXRpb24gPT09IC0xKSB7XG4gICAgICAgIGluTGlzdC5wdXNoKGlkKTtcbiAgICB9XG5cbiAgICBpZiAob3V0UG9zaXRpb24gPiAtMSkge1xuICAgICAgICBvdXRMaXN0LnNwbGljZShvdXRQb3NpdGlvbiwgMSk7XG4gICAgfVxufTtcblxuLypcbiAgICBVcGRhdGUgcnVubmluZ1xuXG4gICAgW2Jvb2xlYW5dOiBgdHJ1ZWAgdG8gYWRkXG4gICAgW2Jvb2xlYW5dOiBgdHJ1ZWAgaWYgbGF6eVxuKi9cbmNvbnN0IHVwZGF0ZVJ1bm5pbmdDb3VudCA9IChhZGQsIGlzTGF6eSkgPT4ge1xuICAgIGNvbnN0IG1vZGlmeSA9IGFkZCA/IDEgOiAtMTtcblxuICAgIHRvdGFsUnVubmluZ0NvdW50ICs9IG1vZGlmeTtcblxuICAgIGlmICghaXNMYXp5KSB7XG4gICAgICAgIG5vbkJhY2tncm91bmRSdW5uaW5nQ291bnQgKz0gbW9kaWZ5O1xuICAgIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBhY3RpdmVQcm9jZXNzZXMsXG5cbiAgICAvLyBBY3RpdmF0ZSBhIHByb2Nlc3NcbiAgICBhY3RpdmF0ZTogKGlkLCBwcm9jZXNzKSA9PiB7XG4gICAgICAgIGFjdGl2ZVByb2Nlc3Nlc1tpZF0gPSBwcm9jZXNzO1xuICAgICAgICBwcm9jZXNzLmlzQWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgdXBkYXRlUXVldWVzKGlkLCBhY3RpdmF0ZVF1ZXVlLCBkZWFjdGl2YXRlUXVldWUpO1xuICAgIH0sXG5cbiAgICAvLyBEZWFjdGl2YXRlIGEgcHJvY2Vzc1xuICAgIGRlYWN0aXZhdGU6IChpZCkgPT4ge1xuICAgICAgICBwcm9jZXNzLmlzQWN0aXZlID0gZmFsc2U7XG4gICAgICAgIHVwZGF0ZVF1ZXVlcyhpZCwgZGVhY3RpdmF0ZVF1ZXVlLCBhY3RpdmF0ZVF1ZXVlKTtcbiAgICB9LFxuXG4gICAgLy8gTnVtYmVyIGJhY2tncm91bmQgcHJvY2Vzc2VzXG4gICAgZ2V0Tm9uQmFja2dyb3VuZFJ1bm5pbmdDb3VudDogKCkgPT4gbm9uQmFja2dyb3VuZFJ1bm5pbmdDb3VudCxcblxuICAgIC8vIEluY3JlbWVudCBjdXJyZW50IHByb2Nlc3MgSUQgYW5kIHJldHVyblxuICAgIGdldFByb2Nlc3NJZDogKCkgPT4gY3VycmVudFByb2Nlc3NJZCsrLFxuXG4gICAgLy8gUmVzb2x2ZSBhY3RpdmF0ZS9kZWFjdGl2YXRlIHByb2Nlc3NlcyBhbmQgcmV0dXJuIGFjdGl2ZSBpZHNcbiAgICBnZXRBY3RpdmVJZHM6ICgpID0+IHtcbiAgICAgICAgLypcbiAgICAgICAgICAgIFByb2Nlc3MgZGVhY3RpdmF0ZSBxdWV1ZVxuICAgICAgICAqL1xuICAgICAgICBjb25zdCBkZWFjdGl2YXRlUXVldWVMZW5ndGggPSBkZWFjdGl2YXRlUXVldWUubGVuZ3RoO1xuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZGVhY3RpdmF0ZVF1ZXVlTGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IGlkID0gZGVhY3RpdmF0ZVF1ZXVlW2ldO1xuICAgICAgICAgICAgY29uc3QgYWN0aXZlSWRJbmRleCA9IHJ1bm5pbmdJZHMuaW5kZXhPZihpZCk7XG4gICAgICAgICAgICBjb25zdCBwcm9jZXNzID0gYWN0aXZlUHJvY2Vzc2VzW2lkXTtcblxuICAgICAgICAgICAgLy8gSWYgdGhpcyBpcyBhIHJ1bm5pbmcgcHJvY2VzcywgZGVhY3RpdmF0ZVxuICAgICAgICAgICAgaWYgKGFjdGl2ZUlkSW5kZXggPiAtMSkge1xuICAgICAgICAgICAgICAgIHJ1bm5pbmdJZHMuc3BsaWNlKGFjdGl2ZUlkSW5kZXgsIDEpO1xuICAgICAgICAgICAgICAgIHVwZGF0ZVJ1bm5pbmdDb3VudChmYWxzZSwgcHJvY2Vzcy5pc0xhenkpO1xuICAgICAgICAgICAgICAgIGRlbGV0ZSBhY3RpdmVQcm9jZXNzZXNbaWRdO1xuXG4gICAgICAgICAgICAgICAgaWYgKHByb2Nlc3Mub25EZWFjdGl2YXRlKSB7XG4gICAgICAgICAgICAgICAgICAgIHByb2Nlc3Mub25EZWFjdGl2YXRlKHByb2Nlc3MpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8qXG4gICAgICAgICAgICBFbXB0eSBkZWFjdGl2YXRlIHF1ZXVlLiBXZSB1c2UgYEFycmF5LnNwbGljZWAgYmVjYXVzZSBpdCBkb2Vzbid0XG4gICAgICAgICAgICB3b3JrcyBvbiB0aGUgb3JpZ2luYWwgYXJyYXkgc28gd2UgZG9uJ3QgaGF2ZSB0byBnYXJiYWdlIGNvbGxlY3QgYW55dGhpbmdcbiAgICAgICAgKi9cbiAgICAgICAgZGVhY3RpdmF0ZVF1ZXVlLnNwbGljZSgwLCBkZWFjdGl2YXRlUXVldWVMZW5ndGgpO1xuXG4gICAgICAgIC8qXG4gICAgICAgICAgICBQcm9jZXNzIGFjdGl2YXRlIHF1ZXVlXG4gICAgICAgICovXG4gICAgICAgIGNvbnN0IGFjdGl2YXRlUXVldWVMZW5ndGggPSBhY3RpdmF0ZVF1ZXVlLmxlbmd0aDtcblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFjdGl2YXRlUXVldWVMZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgY29uc3QgaWQgPSBhY3RpdmF0ZVF1ZXVlW2ldO1xuICAgICAgICAgICAgY29uc3QgYWN0aXZlSWRJbmRleCA9IHJ1bm5pbmdJZHMuaW5kZXhPZihpZCk7XG4gICAgICAgICAgICBjb25zdCBwcm9jZXNzID0gYWN0aXZlUHJvY2Vzc2VzW2lkXTtcblxuICAgICAgICAgICAgLy8gSWYgcHJvY2VzcyBpc24ndCBhbHJlYWR5IHJ1bm5pbmcsIGFjdGl2YXRlXG4gICAgICAgICAgICBpZiAoYWN0aXZlSWRJbmRleCA9PT0gLTEgJiYgcHJvY2Vzcykge1xuICAgICAgICAgICAgICAgIHJ1bm5pbmdJZHMucHVzaChpZCk7XG4gICAgICAgICAgICAgICAgdXBkYXRlUnVubmluZ0NvdW50KHRydWUsIHByb2Nlc3MuaXNMYXp5KTtcblxuICAgICAgICAgICAgICAgIGlmIChwcm9jZXNzLm9uQWN0aXZhdGUpIHtcbiAgICAgICAgICAgICAgICAgICAgcHJvY2Vzcy5vbkFjdGl2YXRlKHByb2Nlc3MpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGFjdGl2YXRlUXVldWUuc3BsaWNlKDAsIGFjdGl2YXRlUXVldWVMZW5ndGgpO1xuXG4gICAgICAgIHJldHVybiBydW5uaW5nSWRzO1xuICAgIH1cbn07XG4iXX0=
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNTUzOGYyYzkwMmZmM2E4ZWQ1Y2EiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xvYWQvZ2xvYmFsLmpzIiwid2VicGFjazovLy8uL3NyYy9wb3Btb3Rpb24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Byb2Nlc3MvdGltZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FjdG9yL0FjdG9yLmpzIiwid2VicGFjazovLy8uL3NyYy9hY3Rpb25zL1R3ZWVuLmpzIiwid2VicGFjazovLy8uL3NyYy9hY3Rpb25zL1BoeXNpY3MuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FjdGlvbnMvVHJhY2suanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Byb2Nlc3MvUHJvY2Vzcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5wdXQvSW5wdXQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luYy9zdGFnZ2VyLmpzIiwid2VicGFjazovLy8uL3NyYy9pbmMvdGltZWxpbmUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FkYXB0ZXIvYWRhcHRlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYWRhcHRlci9hdHRyLWFkYXB0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FkYXB0ZXIvY3NzLWFkYXB0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FkYXB0ZXIvc3ZnLWFkYXB0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FkYXB0ZXIvc3ZnLXBhdGgtYWRhcHRlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYWN0aW9ucy9lYXNpbmcvcHJlc2V0LWVhc2luZy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5jL2NhbGMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZhbHVlLXR5cGVzL2FscGhhLmpzIiwid2VicGFjazovLy8uL3NyYy92YWx1ZS10eXBlcy9hbmdsZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdmFsdWUtdHlwZXMvYXhlcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdmFsdWUtdHlwZXMvY29sb3IuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZhbHVlLXR5cGVzL2NvbXBsZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZhbHVlLXR5cGVzL2hleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdmFsdWUtdHlwZXMvaHNsLmpzIiwid2VicGFjazovLy8uL3NyYy92YWx1ZS10eXBlcy9wb3NpdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZhbHVlLXR5cGVzL3B4LmpzIiwid2VicGFjazovLy8uL3NyYy92YWx1ZS10eXBlcy9yZ2IuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZhbHVlLXR5cGVzL3NjYWxlLmpzIiwid2VicGFjazovLy8uL3NyYy92YWx1ZS10eXBlcy9zaGFkb3cuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luYy90cmFuc2Zvcm1lcnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luYy91dGlscy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYWN0aW9ucy9BY3Rpb24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2lucHV0L1BvaW50ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FkYXB0ZXIvY3NzL3N0YXRlLW1hcC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYWRhcHRlci9jc3MvdmFsdWUtdHlwZS1tYXAuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FkYXB0ZXIvY3NzL2J1aWxkLmpzIiwid2VicGFjazovLy8uL3NyYy9hZGFwdGVyL2Nzcy9wcmVmaXhlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYWRhcHRlci9zdmcvdmFsdWUtdHlwZS1tYXAuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FkYXB0ZXIvc3ZnL2J1aWxkLmpzIiwid2VicGFjazovLy8uL3NyYy9hZGFwdGVyL3N2Zy1wYXRoL2J1aWxkLmpzIiwid2VicGFjazovLy8uL3NyYy9hZGFwdGVyL3N2Zy1wYXRoL3N0YXRlLW1hcC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdmFsdWUtdHlwZXMvc2V0dGluZ3MvZGVmYXVsdC1wcm9wcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdmFsdWUtdHlwZXMvc2V0dGluZ3MvZGljdGlvbmFyeS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcHJvY2Vzcy9sb29wLmpzIiwid2VicGFjazovLy8uL3NyYy9hY3Rpb25zL2Vhc2luZy9jcmVhdGUtZWFzaW5nLmpzIiwid2VicGFjazovLy8uL3NyYy9hY3Rpb25zL2Vhc2luZy9jcmVhdGUtYmV6aWVyLmpzIiwid2VicGFjazovLy8uL3NyYy9pbmMvYmluZC1hZGFwdGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9hZGFwdGVyL2Nzcy90cmFuc2Zvcm0tcHJvcHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Byb2Nlc3MvdGljay5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcHJvY2Vzcy9tYW5hZ2VyLmpzIiwid2VicGFjazovLy8od2VicGFjaykvfi9ub2RlLWxpYnMtYnJvd3Nlci9+L3Byb2Nlc3MvYnJvd3Nlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdUJBQWU7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSx3Qzs7Ozs7OztBQ3RDQTs7QUFFQTs7QUFFQTs7QUFFQSx3Q0FBdUMsNkJBQTZCLFlBQVksRUFBRSxPQUFPLGlCQUFpQixtQkFBbUIsdUJBQXVCLDRFQUE0RSxFQUFFLEVBQUUsc0JBQXNCLGVBQWUsRUFBRTs7QUFFM1E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsNENBQTJDLCtwQjs7Ozs7O0FDZjNDOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUM7O0FBRUQ7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FB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QTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDRDQUEyQywyOEs7Ozs7OztBQzFHM0M7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FB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QUNBLE1BQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0EsTUFBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQSxNQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSx3QkFBdUIsMkJBQTJCO0FBQ2xEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSx3QkFBdUIseUJBQXlCO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLDRDQUEyQywyeVA7Ozs7Ozs7QUM5STNDOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBcUI7QUFDckI7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsNEJBQTJCO0FBQzNCO0FBQ0E7QUFDQTtBQUNBLDZCQUE0QixVQUFVIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGV4cG9ydHM6IHt9LFxuIFx0XHRcdGlkOiBtb2R1bGVJZCxcbiBcdFx0XHRsb2FkZWQ6IGZhbHNlXG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oMCk7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogd2VicGFjay9ib290c3RyYXAgNTUzOGYyYzkwMmZmM2E4ZWQ1Y2FcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbnZhciBfcG9wbW90aW9uID0gcmVxdWlyZSgnLi4vcG9wbW90aW9uJyk7XG5cbnZhciBwb3Btb3Rpb24gPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChfcG9wbW90aW9uKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQob2JqKSB7IGlmIChvYmogJiYgb2JqLl9fZXNNb2R1bGUpIHsgcmV0dXJuIG9iajsgfSBlbHNlIHsgdmFyIG5ld09iaiA9IHt9OyBpZiAob2JqICE9IG51bGwpIHsgZm9yICh2YXIga2V5IGluIG9iaikgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwga2V5KSkgbmV3T2JqW2tleV0gPSBvYmpba2V5XTsgfSB9IG5ld09iai5kZWZhdWx0ID0gb2JqOyByZXR1cm4gbmV3T2JqOyB9IH1cblxudmFyIFVJcmVmID0gd2luZG93Lm1vdGlvbjtcblxucG9wbW90aW9uLm5vQ29uZmxpY3QgPSBmdW5jdGlvbiAoKSB7XG4gICAgd2luZG93Lm1vdGlvbiA9IFVJcmVmO1xufTtcblxud2luZG93Lm1vdGlvbiA9IHdpbmRvdy5wb3Btb3Rpb24gPSBwb3Btb3Rpb247XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5OeVl5OXNiMkZrTDJkc2IySmhiQzVxY3lKZExDSnVZVzFsY3lJNlcxMHNJbTFoY0hCcGJtZHpJam9pT3pzN08wbEJRVms3T3pzN1FVRkZXaXhKUVVGTkxGRkJRVkVzVDBGQlR5eE5RVUZRT3p0QlFVVmtMRlZCUVZVc1ZVRkJWaXhIUVVGMVFpeFpRVUZaTzBGQlF5OUNMRmRCUVU4c1RVRkJVQ3hIUVVGblFpeExRVUZvUWl4RFFVUXJRanREUVVGYU96dEJRVWwyUWl4UFFVRlBMRTFCUVZBc1IwRkJaMElzVDBGQlR5eFRRVUZRTEVkQlFXMUNMRk5CUVc1Q0lpd2labWxzWlNJNkltZHNiMkpoYkM1cWN5SXNJbk52ZFhKalpWSnZiM1FpT2lJdlZYTmxjbk12VFdGMGRDOVRhWFJsY3k5d2IzQnRiM1JwYjI0aUxDSnpiM1Z5WTJWelEyOXVkR1Z1ZENJNld5SnBiWEJ2Y25RZ0tpQmhjeUJ3YjNCdGIzUnBiMjRnWm5KdmJTQW5MaTR2Y0c5d2JXOTBhVzl1Snp0Y2JseHVZMjl1YzNRZ1ZVbHlaV1lnUFNCM2FXNWtiM2N1Ylc5MGFXOXVPMXh1WEc1d2IzQnRiM1JwYjI0dWJtOURiMjVtYkdsamRDQTlJR1oxYm1OMGFXOXVJQ2dwSUh0Y2JpQWdJQ0IzYVc1a2IzY3ViVzkwYVc5dUlEMGdWVWx5WldZN1hHNTlPMXh1WEc1M2FXNWtiM2N1Ylc5MGFXOXVJRDBnZDJsdVpHOTNMbkJ2Y0cxdmRHbHZiaUE5SUhCdmNHMXZkR2x2YmpzaVhYMD1cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2xvYWQvZ2xvYmFsLmpzXG4gKiogbW9kdWxlIGlkID0gMFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0cy50cmFuc2Zvcm1lcnMgPSBleHBvcnRzLnNoYWRvd1R5cGUgPSBleHBvcnRzLnNjYWxlVHlwZSA9IGV4cG9ydHMucmdiVHlwZSA9IGV4cG9ydHMucHhUeXBlID0gZXhwb3J0cy5wb3NpdGlvbnNUeXBlID0gZXhwb3J0cy5oc2xUeXBlID0gZXhwb3J0cy5oZXhUeXBlID0gZXhwb3J0cy5jb21wbGV4VHlwZSA9IGV4cG9ydHMuY29sb3JUeXBlID0gZXhwb3J0cy5heGVzVHlwZSA9IGV4cG9ydHMuYW5nbGVUeXBlID0gZXhwb3J0cy5hbHBoYVR5cGUgPSBleHBvcnRzLnNldEdsb2JhbERpbGF0aW9uID0gZXhwb3J0cy5jYWxjID0gZXhwb3J0cy5lYXNpbmcgPSBleHBvcnRzLnN2Z1BhdGhBZGFwdGVyID0gZXhwb3J0cy5zdmdBZGFwdGVyID0gZXhwb3J0cy5jc3NBZGFwdGVyID0gZXhwb3J0cy5hdHRyQWRhcHRlciA9IGV4cG9ydHMuYWRhcHRlciA9IGV4cG9ydHMudGltZWxpbmUgPSBleHBvcnRzLnN0YWdnZXIgPSBleHBvcnRzLnByb2Nlc3MgPSBleHBvcnRzLmlucHV0ID0gZXhwb3J0cy50cmFja0lucHV0ID0gZXhwb3J0cy5waHlzaWNzID0gZXhwb3J0cy50d2VlbiA9IGV4cG9ydHMuYWN0b3IgPSB1bmRlZmluZWQ7XG5cbnZhciBfdGltZXIgPSByZXF1aXJlKCcuL3Byb2Nlc3MvdGltZXInKTtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdzZXRHbG9iYWxEaWxhdGlvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIF90aW1lci5zZXRHbG9iYWxEaWxhdGlvbjtcbiAgfVxufSk7XG5cbnZhciBfQWN0b3IgPSByZXF1aXJlKCcuL2FjdG9yL0FjdG9yJyk7XG5cbnZhciBfQWN0b3IyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfQWN0b3IpO1xuXG52YXIgX1R3ZWVuID0gcmVxdWlyZSgnLi9hY3Rpb25zL1R3ZWVuJyk7XG5cbnZhciBfVHdlZW4yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfVHdlZW4pO1xuXG52YXIgX1BoeXNpY3MgPSByZXF1aXJlKCcuL2FjdGlvbnMvUGh5c2ljcycpO1xuXG52YXIgX1BoeXNpY3MyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfUGh5c2ljcyk7XG5cbnZhciBfVHJhY2sgPSByZXF1aXJlKCcuL2FjdGlvbnMvVHJhY2snKTtcblxudmFyIF9UcmFjazIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9UcmFjayk7XG5cbnZhciBfUHJvY2VzcyA9IHJlcXVpcmUoJy4vcHJvY2Vzcy9Qcm9jZXNzJyk7XG5cbnZhciBfUHJvY2VzczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9Qcm9jZXNzKTtcblxudmFyIF9JbnB1dCA9IHJlcXVpcmUoJy4vaW5wdXQvSW5wdXQnKTtcblxudmFyIF9JbnB1dDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9JbnB1dCk7XG5cbnZhciBfc3RhZ2dlcjIgPSByZXF1aXJlKCcuL2luYy9zdGFnZ2VyJyk7XG5cbnZhciBfc3RhZ2dlcjMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9zdGFnZ2VyMik7XG5cbnZhciBfdGltZWxpbmUyID0gcmVxdWlyZSgnLi9pbmMvdGltZWxpbmUnKTtcblxudmFyIF90aW1lbGluZTMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF90aW1lbGluZTIpO1xuXG52YXIgX2FkYXB0ZXIyID0gcmVxdWlyZSgnLi9hZGFwdGVyL2FkYXB0ZXInKTtcblxudmFyIF9hZGFwdGVyMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2FkYXB0ZXIyKTtcblxudmFyIF9hdHRyQWRhcHRlcjIgPSByZXF1aXJlKCcuL2FkYXB0ZXIvYXR0ci1hZGFwdGVyJyk7XG5cbnZhciBfYXR0ckFkYXB0ZXIzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfYXR0ckFkYXB0ZXIyKTtcblxudmFyIF9jc3NBZGFwdGVyMiA9IHJlcXVpcmUoJy4vYWRhcHRlci9jc3MtYWRhcHRlcicpO1xuXG52YXIgX2Nzc0FkYXB0ZXIzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY3NzQWRhcHRlcjIpO1xuXG52YXIgX3N2Z0FkYXB0ZXIyID0gcmVxdWlyZSgnLi9hZGFwdGVyL3N2Zy1hZGFwdGVyJyk7XG5cbnZhciBfc3ZnQWRhcHRlcjMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9zdmdBZGFwdGVyMik7XG5cbnZhciBfc3ZnUGF0aEFkYXB0ZXIyID0gcmVxdWlyZSgnLi9hZGFwdGVyL3N2Zy1wYXRoLWFkYXB0ZXInKTtcblxudmFyIF9zdmdQYXRoQWRhcHRlcjMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9zdmdQYXRoQWRhcHRlcjIpO1xuXG52YXIgX3ByZXNldEVhc2luZyA9IHJlcXVpcmUoJy4vYWN0aW9ucy9lYXNpbmcvcHJlc2V0LWVhc2luZycpO1xuXG52YXIgX3ByZXNldEVhc2luZzIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9wcmVzZXRFYXNpbmcpO1xuXG52YXIgX2NhbGMyID0gcmVxdWlyZSgnLi9pbmMvY2FsYycpO1xuXG52YXIgX2NhbGMgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChfY2FsYzIpO1xuXG52YXIgX2FscGhhID0gcmVxdWlyZSgnLi92YWx1ZS10eXBlcy9hbHBoYScpO1xuXG52YXIgX2FscGhhMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2FscGhhKTtcblxudmFyIF9hbmdsZSA9IHJlcXVpcmUoJy4vdmFsdWUtdHlwZXMvYW5nbGUnKTtcblxudmFyIF9hbmdsZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9hbmdsZSk7XG5cbnZhciBfYXhlcyA9IHJlcXVpcmUoJy4vdmFsdWUtdHlwZXMvYXhlcycpO1xuXG52YXIgX2F4ZXMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfYXhlcyk7XG5cbnZhciBfY29sb3IgPSByZXF1aXJlKCcuL3ZhbHVlLXR5cGVzL2NvbG9yJyk7XG5cbnZhciBfY29sb3IyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY29sb3IpO1xuXG52YXIgX2NvbXBsZXggPSByZXF1aXJlKCcuL3ZhbHVlLXR5cGVzL2NvbXBsZXgnKTtcblxudmFyIF9jb21wbGV4MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NvbXBsZXgpO1xuXG52YXIgX2hleCA9IHJlcXVpcmUoJy4vdmFsdWUtdHlwZXMvaGV4Jyk7XG5cbnZhciBfaGV4MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2hleCk7XG5cbnZhciBfaHNsID0gcmVxdWlyZSgnLi92YWx1ZS10eXBlcy9oc2wnKTtcblxudmFyIF9oc2wyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfaHNsKTtcblxudmFyIF9wb3NpdGlvbnMgPSByZXF1aXJlKCcuL3ZhbHVlLXR5cGVzL3Bvc2l0aW9ucycpO1xuXG52YXIgX3Bvc2l0aW9uczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9wb3NpdGlvbnMpO1xuXG52YXIgX3B4ID0gcmVxdWlyZSgnLi92YWx1ZS10eXBlcy9weCcpO1xuXG52YXIgX3B4MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3B4KTtcblxudmFyIF9yZ2IgPSByZXF1aXJlKCcuL3ZhbHVlLXR5cGVzL3JnYicpO1xuXG52YXIgX3JnYjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZ2IpO1xuXG52YXIgX3NjYWxlID0gcmVxdWlyZSgnLi92YWx1ZS10eXBlcy9zY2FsZScpO1xuXG52YXIgX3NjYWxlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3NjYWxlKTtcblxudmFyIF9zaGFkb3cgPSByZXF1aXJlKCcuL3ZhbHVlLXR5cGVzL3NoYWRvdycpO1xuXG52YXIgX3NoYWRvdzIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9zaGFkb3cpO1xuXG52YXIgX3RyYW5zZm9ybWVyczIgPSByZXF1aXJlKCcuL2luYy90cmFuc2Zvcm1lcnMnKTtcblxudmFyIF90cmFuc2Zvcm1lcnMgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChfdHJhbnNmb3JtZXJzMik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKG9iaikgeyBpZiAob2JqICYmIG9iai5fX2VzTW9kdWxlKSB7IHJldHVybiBvYmo7IH0gZWxzZSB7IHZhciBuZXdPYmogPSB7fTsgaWYgKG9iaiAhPSBudWxsKSB7IGZvciAodmFyIGtleSBpbiBvYmopIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGtleSkpIG5ld09ialtrZXldID0gb2JqW2tleV07IH0gfSBuZXdPYmouZGVmYXVsdCA9IG9iajsgcmV0dXJuIG5ld09iajsgfSB9XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbi8vIFByb2Nlc3Ncbi8vIEFjdG9yXG52YXIgYWN0b3IgPSBleHBvcnRzLmFjdG9yID0gZnVuY3Rpb24gKHByb3BzKSB7XG4gIHJldHVybiBuZXcgX0FjdG9yMi5kZWZhdWx0KHByb3BzKTtcbn07XG5cbi8vIElucHV0XG5cbi8vIEFjdGlvbnNcblxudmFyIHR3ZWVuID0gZXhwb3J0cy50d2VlbiA9IGZ1bmN0aW9uIChwcm9wcykge1xuICByZXR1cm4gbmV3IF9Ud2VlbjIuZGVmYXVsdChwcm9wcyk7XG59O1xudmFyIHBoeXNpY3MgPSBleHBvcnRzLnBoeXNpY3MgPSBmdW5jdGlvbiAocHJvcHMpIHtcbiAgcmV0dXJuIG5ldyBfUGh5c2ljczIuZGVmYXVsdChwcm9wcyk7XG59O1xudmFyIHRyYWNrSW5wdXQgPSBleHBvcnRzLnRyYWNrSW5wdXQgPSBmdW5jdGlvbiAoKSB7XG4gIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgYXJnc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgfVxuXG4gIHJldHVybiBuZXcgKEZ1bmN0aW9uLnByb3RvdHlwZS5iaW5kLmFwcGx5KF9UcmFjazIuZGVmYXVsdCwgW251bGxdLmNvbmNhdChhcmdzKSkpKCk7XG59O1xudmFyIGlucHV0ID0gZXhwb3J0cy5pbnB1dCA9IGZ1bmN0aW9uICgpIHtcbiAgZm9yICh2YXIgX2xlbjIgPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gQXJyYXkoX2xlbjIpLCBfa2V5MiA9IDA7IF9rZXkyIDwgX2xlbjI7IF9rZXkyKyspIHtcbiAgICBhcmdzW19rZXkyXSA9IGFyZ3VtZW50c1tfa2V5Ml07XG4gIH1cblxuICByZXR1cm4gbmV3IChGdW5jdGlvbi5wcm90b3R5cGUuYmluZC5hcHBseShfSW5wdXQyLmRlZmF1bHQsIFtudWxsXS5jb25jYXQoYXJncykpKSgpO1xufTtcbnZhciBwcm9jZXNzID0gZXhwb3J0cy5wcm9jZXNzID0gZnVuY3Rpb24gKCkge1xuICBmb3IgKHZhciBfbGVuMyA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBBcnJheShfbGVuMyksIF9rZXkzID0gMDsgX2tleTMgPCBfbGVuMzsgX2tleTMrKykge1xuICAgIGFyZ3NbX2tleTNdID0gYXJndW1lbnRzW19rZXkzXTtcbiAgfVxuXG4gIHJldHVybiBuZXcgKEZ1bmN0aW9uLnByb3RvdHlwZS5iaW5kLmFwcGx5KF9Qcm9jZXNzMi5kZWZhdWx0LCBbbnVsbF0uY29uY2F0KGFyZ3MpKSkoKTtcbn07XG5leHBvcnRzLnN0YWdnZXIgPSBfc3RhZ2dlcjMuZGVmYXVsdDtcbmV4cG9ydHMudGltZWxpbmUgPSBfdGltZWxpbmUzLmRlZmF1bHQ7XG5cbi8vIEFkYXB0ZXJzXG5cbmV4cG9ydHMuYWRhcHRlciA9IF9hZGFwdGVyMy5kZWZhdWx0O1xuZXhwb3J0cy5hdHRyQWRhcHRlciA9IF9hdHRyQWRhcHRlcjMuZGVmYXVsdDtcbmV4cG9ydHMuY3NzQWRhcHRlciA9IF9jc3NBZGFwdGVyMy5kZWZhdWx0O1xuZXhwb3J0cy5zdmdBZGFwdGVyID0gX3N2Z0FkYXB0ZXIzLmRlZmF1bHQ7XG5leHBvcnRzLnN2Z1BhdGhBZGFwdGVyID0gX3N2Z1BhdGhBZGFwdGVyMy5kZWZhdWx0O1xuXG4vLyBFYXNpbmdcblxuZXhwb3J0cy5lYXNpbmcgPSBfcHJlc2V0RWFzaW5nMi5kZWZhdWx0O1xuXG4vLyBVdGlsc1xuXG5leHBvcnRzLmNhbGMgPSBfY2FsYztcblxuLy8gVmFsdWUgdHlwZXNcblxuZXhwb3J0cy5hbHBoYVR5cGUgPSBfYWxwaGEyLmRlZmF1bHQ7XG5leHBvcnRzLmFuZ2xlVHlwZSA9IF9hbmdsZTIuZGVmYXVsdDtcbmV4cG9ydHMuYXhlc1R5cGUgPSBfYXhlczIuZGVmYXVsdDtcbmV4cG9ydHMuY29sb3JUeXBlID0gX2NvbG9yMi5kZWZhdWx0O1xuZXhwb3J0cy5jb21wbGV4VHlwZSA9IF9jb21wbGV4Mi5kZWZhdWx0O1xuZXhwb3J0cy5oZXhUeXBlID0gX2hleDIuZGVmYXVsdDtcbmV4cG9ydHMuaHNsVHlwZSA9IF9oc2wyLmRlZmF1bHQ7XG5leHBvcnRzLnBvc2l0aW9uc1R5cGUgPSBfcG9zaXRpb25zMi5kZWZhdWx0O1xuZXhwb3J0cy5weFR5cGUgPSBfcHgyLmRlZmF1bHQ7XG5leHBvcnRzLnJnYlR5cGUgPSBfcmdiMi5kZWZhdWx0O1xuZXhwb3J0cy5zY2FsZVR5cGUgPSBfc2NhbGUyLmRlZmF1bHQ7XG5leHBvcnRzLnNoYWRvd1R5cGUgPSBfc2hhZG93Mi5kZWZhdWx0O1xuXG4vLyBUcmFuc2Zvcm1lcnNcblxuZXhwb3J0cy50cmFuc2Zvcm1lcnMgPSBfdHJhbnNmb3JtZXJzO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluTnlZeTl3YjNCdGIzUnBiMjR1YW5NaVhTd2libUZ0WlhNaU9sdGRMQ0p0WVhCd2FXNW5jeUk2SWpzN096czdPenM3T3p0clFrRnRRMU03T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN08wRkJja0pHTEVsQlFVMHNkMEpCUVZFc1ZVRkJReXhMUVVGRU8xTkJRVmNzYjBKQlFWVXNTMEZCVmp0RFFVRllPenM3T3pzN1FVRkRaQ3hKUVVGTkxIZENRVUZSTEZWQlFVTXNTMEZCUkR0VFFVRlhMRzlDUVVGVkxFdEJRVlk3UTBGQldEdEJRVU5rTEVsQlFVMHNORUpCUVZVc1ZVRkJReXhMUVVGRU8xTkJRVmNzYzBKQlFWa3NTMEZCV2p0RFFVRllPMEZCUTJoQ0xFbEJRVTBzYTBOQlFXRTdiME5CUVVrN096czdNa1ZCUVhOQ08wTkJRVEZDTzBGQlEyNUNMRWxCUVUwc2QwSkJRVkU3Y1VOQlFVazdPenM3TWtWQlFYTkNPME5CUVRGQ08wRkJRMlFzU1VGQlRTdzBRa0ZCVlR0eFEwRkJTVHM3T3pzMlJVRkJkMEk3UTBGQk5VSTdVVUZEYUVJN1VVRkRRVHM3T3p0UlFVZEJPMUZCUTBFN1VVRkRRVHRSUVVOQk8xRkJRMEU3T3pzN1VVRkhRVHM3T3p0UlFVZExPenM3TzFGQlNVdzdVVUZEUVR0UlFVTkJPMUZCUTBFN1VVRkRRVHRSUVVOQk8xRkJRMEU3VVVGRFFUdFJRVU5CTzFGQlEwRTdVVUZEUVR0UlFVTkJPenM3TzFGQlIwc2lMQ0ptYVd4bElqb2ljRzl3Ylc5MGFXOXVMbXB6SWl3aWMyOTFjbU5sVW05dmRDSTZJaTlWYzJWeWN5OU5ZWFIwTDFOcGRHVnpMM0J2Y0cxdmRHbHZiaUlzSW5OdmRYSmpaWE5EYjI1MFpXNTBJanBiSWk4dklFRmpkRzl5WEc1cGJYQnZjblFnUVdOMGIzSWdabkp2YlNBbkxpOWhZM1J2Y2k5QlkzUnZjaWM3WEc1Y2JpOHZJRUZqZEdsdmJuTmNibWx0Y0c5eWRDQlVkMlZsYmlCbWNtOXRJQ2N1TDJGamRHbHZibk12VkhkbFpXNG5PMXh1YVcxd2IzSjBJRkJvZVhOcFkzTWdabkp2YlNBbkxpOWhZM1JwYjI1ekwxQm9lWE5wWTNNbk8xeHVhVzF3YjNKMElGUnlZV05ySUdaeWIyMGdKeTR2WVdOMGFXOXVjeTlVY21GamF5YzdYRzVjYmk4dklGQnliMk5sYzNOY2JtbHRjRzl5ZENCUWNtOWpaWE56SUdaeWIyMGdKeTR2Y0hKdlkyVnpjeTlRY205alpYTnpKenRjYmx4dUx5OGdTVzV3ZFhSY2JtbHRjRzl5ZENCSmJuQjFkQ0JtY205dElDY3VMMmx1Y0hWMEwwbHVjSFYwSnp0Y2JseHVaWGh3YjNKMElHTnZibk4wSUdGamRHOXlJRDBnS0hCeWIzQnpLU0E5UGlCdVpYY2dRV04wYjNJb2NISnZjSE1wTzF4dVpYaHdiM0owSUdOdmJuTjBJSFIzWldWdUlEMGdLSEJ5YjNCektTQTlQaUJ1WlhjZ1ZIZGxaVzRvY0hKdmNITXBPMXh1Wlhod2IzSjBJR052Ym5OMElIQm9lWE5wWTNNZ1BTQW9jSEp2Y0hNcElEMCtJRzVsZHlCUWFIbHphV056S0hCeWIzQnpLVHRjYm1WNGNHOXlkQ0JqYjI1emRDQjBjbUZqYTBsdWNIVjBJRDBnS0M0dUxtRnlaM01wSUQwK0lHNWxkeUJVY21GamF5Z3VMaTVoY21kektUdGNibVY0Y0c5eWRDQmpiMjV6ZENCcGJuQjFkQ0E5SUNndUxpNWhjbWR6S1NBOVBpQnVaWGNnU1c1d2RYUW9MaTR1WVhKbmN5azdYRzVsZUhCdmNuUWdZMjl1YzNRZ2NISnZZMlZ6Y3lBOUlDZ3VMaTVoY21kektTQTlQaUJ1WlhjZ1VISnZZMlZ6Y3lndUxpNWhjbWR6S1R0Y2JtVjRjRzl5ZENCemRHRm5aMlZ5SUdaeWIyMGdKeTR2YVc1akwzTjBZV2RuWlhJbk8xeHVaWGh3YjNKMElIUnBiV1ZzYVc1bElHWnliMjBnSnk0dmFXNWpMM1JwYldWc2FXNWxKenRjYmx4dUx5OGdRV1JoY0hSbGNuTmNibVY0Y0c5eWRDQmhaR0Z3ZEdWeUlHWnliMjBnSnk0dllXUmhjSFJsY2k5aFpHRndkR1Z5Snp0Y2JtVjRjRzl5ZENCaGRIUnlRV1JoY0hSbGNpQm1jbTl0SUNjdUwyRmtZWEIwWlhJdllYUjBjaTFoWkdGd2RHVnlKenRjYm1WNGNHOXlkQ0JqYzNOQlpHRndkR1Z5SUdaeWIyMGdKeTR2WVdSaGNIUmxjaTlqYzNNdFlXUmhjSFJsY2ljN1hHNWxlSEJ2Y25RZ2MzWm5RV1JoY0hSbGNpQm1jbTl0SUNjdUwyRmtZWEIwWlhJdmMzWm5MV0ZrWVhCMFpYSW5PMXh1Wlhod2IzSjBJSE4yWjFCaGRHaEJaR0Z3ZEdWeUlHWnliMjBnSnk0dllXUmhjSFJsY2k5emRtY3RjR0YwYUMxaFpHRndkR1Z5Snp0Y2JseHVMeThnUldGemFXNW5YRzVsZUhCdmNuUWdaV0Z6YVc1bklHWnliMjBnSnk0dllXTjBhVzl1Y3k5bFlYTnBibWN2Y0hKbGMyVjBMV1ZoYzJsdVp5YzdYRzVjYmk4dklGVjBhV3h6WEc1bGVIQnZjblFnS2lCaGN5QmpZV3hqSUdaeWIyMGdKeTR2YVc1akwyTmhiR01uTzF4dVpYaHdiM0owSUhzZ2MyVjBSMnh2WW1Gc1JHbHNZWFJwYjI0Z2ZTQm1jbTl0SUNjdUwzQnliMk5sYzNNdmRHbHRaWEluTzF4dVhHNHZMeUJXWVd4MVpTQjBlWEJsYzF4dVpYaHdiM0owSUdGc2NHaGhWSGx3WlNCbWNtOXRJQ2N1TDNaaGJIVmxMWFI1Y0dWekwyRnNjR2hoSnp0Y2JtVjRjRzl5ZENCaGJtZHNaVlI1Y0dVZ1puSnZiU0FuTGk5MllXeDFaUzEwZVhCbGN5OWhibWRzWlNjN1hHNWxlSEJ2Y25RZ1lYaGxjMVI1Y0dVZ1puSnZiU0FuTGk5MllXeDFaUzEwZVhCbGN5OWhlR1Z6Snp0Y2JtVjRjRzl5ZENCamIyeHZjbFI1Y0dVZ1puSnZiU0FuTGk5MllXeDFaUzEwZVhCbGN5OWpiMnh2Y2ljN1hHNWxlSEJ2Y25RZ1kyOXRjR3hsZUZSNWNHVWdabkp2YlNBbkxpOTJZV3gxWlMxMGVYQmxjeTlqYjIxd2JHVjRKenRjYm1WNGNHOXlkQ0JvWlhoVWVYQmxJR1p5YjIwZ0p5NHZkbUZzZFdVdGRIbHdaWE12YUdWNEp6dGNibVY0Y0c5eWRDQm9jMnhVZVhCbElHWnliMjBnSnk0dmRtRnNkV1V0ZEhsd1pYTXZhSE5zSnp0Y2JtVjRjRzl5ZENCd2IzTnBkR2x2Ym5OVWVYQmxJR1p5YjIwZ0p5NHZkbUZzZFdVdGRIbHdaWE12Y0c5emFYUnBiMjV6Snp0Y2JtVjRjRzl5ZENCd2VGUjVjR1VnWm5KdmJTQW5MaTkyWVd4MVpTMTBlWEJsY3k5d2VDYzdYRzVsZUhCdmNuUWdjbWRpVkhsd1pTQm1jbTl0SUNjdUwzWmhiSFZsTFhSNWNHVnpMM0puWWljN1hHNWxlSEJ2Y25RZ2MyTmhiR1ZVZVhCbElHWnliMjBnSnk0dmRtRnNkV1V0ZEhsd1pYTXZjMk5oYkdVbk8xeHVaWGh3YjNKMElITm9ZV1J2ZDFSNWNHVWdabkp2YlNBbkxpOTJZV3gxWlMxMGVYQmxjeTl6YUdGa2IzY25PMXh1WEc0dkx5QlVjbUZ1YzJadmNtMWxjbk5jYm1WNGNHOXlkQ0FxSUdGeklIUnlZVzV6Wm05eWJXVnljeUJtY205dElDY3VMMmx1WXk5MGNtRnVjMlp2Y20xbGNuTW5PeUpkZlE9PVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvcG9wbW90aW9uLmpzXG4gKiogbW9kdWxlIGlkID0gMVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0cy5zZXRHbG9iYWxEaWxhdGlvbiA9IHVuZGVmaW5lZDtcblxudmFyIF91dGlscyA9IHJlcXVpcmUoJy4uL2luYy91dGlscycpO1xuXG52YXIgTUFYX0VMQVBTRUQgPSAzMztcblxudmFyIGN1cnJlbnQgPSAwO1xudmFyIGVsYXBzZWQgPSAxNi43O1xudmFyIGRpbGF0aW9uID0gMTtcblxuZXhwb3J0cy5kZWZhdWx0ID0ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gKGZyYW1lc3RhbXApIHtcbiAgICAgICAgZWxhcHNlZCA9IE1hdGgubWF4KE1hdGgubWluKGZyYW1lc3RhbXAgLSBjdXJyZW50LCBNQVhfRUxBUFNFRCksIDEpICogZGlsYXRpb247XG4gICAgICAgIGN1cnJlbnQgPSBmcmFtZXN0YW1wO1xuICAgIH0sXG5cbiAgICBzdGFydDogZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gY3VycmVudCA9ICgwLCBfdXRpbHMuY3VycmVudFRpbWUpKCk7XG4gICAgfSxcblxuICAgIGdldEVsYXBzZWQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIGVsYXBzZWQ7XG4gICAgfVxufTtcbnZhciBzZXRHbG9iYWxEaWxhdGlvbiA9IGV4cG9ydHMuc2V0R2xvYmFsRGlsYXRpb24gPSBmdW5jdGlvbiAobmV3RGlsYXRpb24pIHtcbiAgICByZXR1cm4gZGlsYXRpb24gPSBuZXdEaWxhdGlvbjtcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5OeVl5OXdjbTlqWlhOekwzUnBiV1Z5TG1weklsMHNJbTVoYldWeklqcGJYU3dpYldGd2NHbHVaM01pT2lJN096czdPenM3UVVGRlFTeEpRVUZOTEdOQlFXTXNSVUZCWkRzN1FVRkZUaXhKUVVGSkxGVkJRVlVzUTBGQlZqdEJRVU5LTEVsQlFVa3NWVUZCVlN4SlFVRldPMEZCUTBvc1NVRkJTU3hYUVVGWExFTkJRVmc3TzJ0Q1FVVlhPMEZCUTFnc1dVRkJVU3hWUVVGRExGVkJRVVFzUlVGQlowSTdRVUZEY0VJc2EwSkJRVlVzUzBGQlN5eEhRVUZNTEVOQlFWTXNTMEZCU3l4SFFVRk1MRU5CUVZNc1lVRkJZU3hQUVVGaUxFVkJRWE5DTEZkQlFTOUNMRU5CUVZRc1JVRkJjMFFzUTBGQmRFUXNTVUZCTWtRc1VVRkJNMFFzUTBGRVZUdEJRVVZ3UWl4clFrRkJWU3hWUVVGV0xFTkJSbTlDTzB0QlFXaENPenRCUVV0U0xGZEJRVTg3WlVGQlRTeFZRVUZWTEhsQ1FVRldPMHRCUVU0N08wRkJSVkFzWjBKQlFWazdaVUZCVFR0TFFVRk9PenRCUVVkVUxFbEJRVTBzWjBSQlFXOUNMRlZCUVVNc1YwRkJSRHRYUVVGcFFpeFhRVUZYTEZkQlFWZzdRMEZCYWtJaUxDSm1hV3hsSWpvaWRHbHRaWEl1YW5NaUxDSnpiM1Z5WTJWU2IyOTBJam9pTDFWelpYSnpMMDFoZEhRdlUybDBaWE12Y0c5d2JXOTBhVzl1SWl3aWMyOTFjbU5sYzBOdmJuUmxiblFpT2xzaWFXMXdiM0owSUhzZ1kzVnljbVZ1ZEZScGJXVWdmU0JtY205dElDY3VMaTlwYm1NdmRYUnBiSE1uTzF4dVhHNWpiMjV6ZENCTlFWaGZSVXhCVUZORlJDQTlJRE16TzF4dVhHNXNaWFFnWTNWeWNtVnVkQ0E5SURBN1hHNXNaWFFnWld4aGNITmxaQ0E5SURFMkxqYzdYRzVzWlhRZ1pHbHNZWFJwYjI0Z1BTQXhPMXh1WEc1bGVIQnZjblFnWkdWbVlYVnNkQ0I3WEc0Z0lDQWdkWEJrWVhSbE9pQW9abkpoYldWemRHRnRjQ2tnUFQ0Z2UxeHVJQ0FnSUNBZ0lDQmxiR0Z3YzJWa0lEMGdUV0YwYUM1dFlYZ29UV0YwYUM1dGFXNG9abkpoYldWemRHRnRjQ0F0SUdOMWNuSmxiblFzSUUxQldGOUZURUZRVTBWRUtTd2dNU2tnS2lCa2FXeGhkR2x2Ymp0Y2JpQWdJQ0FnSUNBZ1kzVnljbVZ1ZENBOUlHWnlZVzFsYzNSaGJYQTdYRzRnSUNBZ2ZTeGNibHh1SUNBZ0lITjBZWEowT2lBb0tTQTlQaUJqZFhKeVpXNTBJRDBnWTNWeWNtVnVkRlJwYldVb0tTeGNibHh1SUNBZ0lHZGxkRVZzWVhCelpXUTZJQ2dwSUQwK0lHVnNZWEJ6WldSY2JuMDdYRzVjYm1WNGNHOXlkQ0JqYjI1emRDQnpaWFJIYkc5aVlXeEVhV3hoZEdsdmJpQTlJQ2h1WlhkRWFXeGhkR2x2YmlrZ1BUNGdaR2xzWVhScGIyNGdQU0J1WlhkRWFXeGhkR2x2YmpzaVhYMD1cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL3Byb2Nlc3MvdGltZXIuanNcbiAqKiBtb2R1bGUgaWQgPSAyXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfQWN0aW9uMiA9IHJlcXVpcmUoJy4uL2FjdGlvbnMvQWN0aW9uJyk7XG5cbnZhciBfQWN0aW9uMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX0FjdGlvbjIpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmICghc2VsZikgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIGNhbGwgJiYgKHR5cGVvZiBjYWxsID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpID8gY2FsbCA6IHNlbGY7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgXCIgKyB0eXBlb2Ygc3VwZXJDbGFzcyk7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgZW51bWVyYWJsZTogZmFsc2UsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcykgOiBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzOyB9XG5cbnZhciBib3VuZFByb3BzID0gZnVuY3Rpb24gKGFjdG9yLCBhY3Rpb24pIHtcbiAgICByZXR1cm4ge1xuICAgICAgICBvbjogYWN0b3Iub24sXG5cbiAgICAgICAgb25TdGFydDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgYWN0b3IuYWN0aXZhdGVBY3Rpb24oYWN0aW9uLmlkLCBhY3Rpb24pO1xuXG4gICAgICAgICAgICAvLyBDb3B5IEFjdG9yIHByb3BlcnRpZXMgdG8gQWN0aW9uXG4gICAgICAgICAgICBmb3IgKHZhciBrZXkgaW4gYWN0aW9uLnZhbHVlcykge1xuICAgICAgICAgICAgICAgIGlmIChhY3Rpb24udmFsdWVzLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGFjdG9yVmFsdWUgPSBhY3Rvci52YWx1ZXNba2V5XTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGFjdGlvblZhbHVlID0gYWN0aW9uLnZhbHVlc1trZXldO1xuICAgICAgICAgICAgICAgICAgICAvLyByZXBsYWNlIHByb3BlcnR5IGNvcHkgd2l0aCBjdXJyZW50IHRyYW5zZmVyIC0gbWF5YmUgcmVwbGFjZSB3aWxsUmVuZGVyP1xuICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBwcm9wS2V5IGluIGFjdG9yVmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChhY3RvclZhbHVlLmhhc093blByb3BlcnR5KHByb3BLZXkpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWN0aW9uVmFsdWVbcHJvcEtleV0gPSBhY3RvclZhbHVlW3Byb3BLZXldO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuXG4gICAgICAgIG9uU3RvcDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgYWN0b3IuZGVhY3RpdmF0ZUFjdGlvbihhY3Rpb24uaWQpO1xuICAgICAgICB9LFxuXG4gICAgICAgIHdpbGxSZW5kZXI6IGZ1bmN0aW9uIChfcmVmKSB7XG4gICAgICAgICAgICB2YXIgc3RhdGUgPSBfcmVmLnN0YXRlO1xuICAgICAgICAgICAgdmFyIHZhbHVlcyA9IF9yZWYudmFsdWVzO1xuXG4gICAgICAgICAgICAvLyBVcGRhdGUgYWN0b3IgdmFsdWVzIHdpdGggaW5jb21pbmcgc3RhdGUgdmFsdWVzXG4gICAgICAgICAgICBmb3IgKHZhciBrZXkgaW4gc3RhdGUpIHtcbiAgICAgICAgICAgICAgICBpZiAoc3RhdGUuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgICAgICAgICAgICBhY3Rvci5zdGF0ZVtrZXldID0gc3RhdGVba2V5XTtcbiAgICAgICAgICAgICAgICAgICAgYWN0b3IudmFsdWVzW2tleV0uY3VycmVudCA9IHZhbHVlc1trZXldLmN1cnJlbnQ7XG4gICAgICAgICAgICAgICAgICAgIGFjdG9yLnZhbHVlc1trZXldLnZlbG9jaXR5ID0gdmFsdWVzW2tleV0udmVsb2NpdHk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9O1xufTtcblxudmFyIEFjdG9yID0gZnVuY3Rpb24gKF9BY3Rpb24pIHtcbiAgICBfaW5oZXJpdHMoQWN0b3IsIF9BY3Rpb24pO1xuXG4gICAgZnVuY3Rpb24gQWN0b3IoKSB7XG4gICAgICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBBY3Rvcik7XG5cbiAgICAgICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgICAgICAgIGFyZ3NbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgX3RoaXMgPSBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCBfQWN0aW9uLmNhbGwuYXBwbHkoX0FjdGlvbiwgW3RoaXNdLmNvbmNhdChhcmdzKSkpO1xuXG4gICAgICAgIF90aGlzLmFjdGl2ZUFjdGlvbnMgPSB7fTtcbiAgICAgICAgX3RoaXMubnVtQWN0aXZlQWN0aW9ucyA9IDA7XG4gICAgICAgIHJldHVybiBfdGhpcztcbiAgICB9XG5cbiAgICBBY3Rvci5wcm90b3R5cGUuc2V0ID0gZnVuY3Rpb24gc2V0KHByb3BzLCBpbnN0YW50KSB7XG4gICAgICAgIGlmIChpbnN0YW50IHx8ICF0aGlzLnJlZHVjZXIpIHtcbiAgICAgICAgICAgIF9BY3Rpb24ucHJvdG90eXBlLnNldC5jYWxsKHRoaXMsIHByb3BzKTtcbiAgICAgICAgICAgIHRoaXMub25jZSgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdmFyIGFjdGlvbiA9IHRoaXMucmVkdWNlcihwcm9wcyk7XG4gICAgICAgICAgICBpZiAoYWN0aW9uKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zdGFydChhY3Rpb24pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcblxuICAgIC8qXG4gICAgICAgIEJpbmQgQWN0aW9uIHRvIEFjdG9yXG4gICAgKi9cblxuICAgIEFjdG9yLnByb3RvdHlwZS5iaW5kID0gZnVuY3Rpb24gYmluZChhY3Rpb24pIHtcbiAgICAgICAgdmFyIGluaGVyaXRlZEFjdGlvbiA9IGFjdGlvbi5pbmhlcml0KCk7XG4gICAgICAgIHZhciBuZXdWYWx1ZXMgPSB7fTtcbiAgICAgICAgdmFyIGhhc05ld1ZhbHVlcyA9IGZhbHNlO1xuXG4gICAgICAgIC8vIENyZWF0ZSB2YWx1ZXMgb24gYWN0b3IgdGhhdCBkb24ndCBleGlzdFxuICAgICAgICBmb3IgKHZhciBrZXkgaW4gaW5oZXJpdGVkQWN0aW9uLnZhbHVlcykge1xuICAgICAgICAgICAgaWYgKGluaGVyaXRlZEFjdGlvbi52YWx1ZXMuaGFzT3duUHJvcGVydHkoa2V5KSAmJiAhdGhpcy52YWx1ZXMuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgICAgICAgIG5ld1ZhbHVlc1trZXldID0ge307XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoaGFzTmV3VmFsdWVzKSB7XG4gICAgICAgICAgICB0aGlzLnNldChuZXdWYWx1ZXMpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGluaGVyaXRlZEFjdGlvbi5zZXQoYm91bmRQcm9wcyh0aGlzLCBpbmhlcml0ZWRBY3Rpb24pKTtcbiAgICB9O1xuXG4gICAgLypcbiAgICAgICAgU3RhcnQgQWN0b3JcbiAgICAgICAgIElmIEFjdGlvbiBpcyBwcm92aWRlZCwgYmluZCBpdCB0byB0aGlzIEFjdG9yIGFuZCBzdGFydFxuICAgICAgICAgQHBhcmFtIChvcHRpb25hbCkgW0FjdGlvbl1cbiAgICAqL1xuXG4gICAgQWN0b3IucHJvdG90eXBlLnN0YXJ0ID0gZnVuY3Rpb24gc3RhcnQoYWN0aW9uKSB7XG4gICAgICAgIF9BY3Rpb24ucHJvdG90eXBlLnN0YXJ0LmNhbGwodGhpcyk7XG5cbiAgICAgICAgaWYgKGFjdGlvbikge1xuICAgICAgICAgICAgdmFyIGJvdW5kQWN0aW9uID0gdGhpcy5iaW5kKGFjdGlvbik7XG4gICAgICAgICAgICBib3VuZEFjdGlvbi5zdGFydCgpO1xuXG4gICAgICAgICAgICByZXR1cm4gYm91bmRBY3Rpb247XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBmb3IgKHZhciBrZXkgaW4gdGhpcy5hY3RpdmVBY3Rpb25zKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuYWN0aXZlQWN0aW9ucy5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBfYWN0aW9uID0gdGhpcy5hY3RpdmVBY3Rpb25zW2tleV07XG4gICAgICAgICAgICAgICAgICAgIGlmICghX2FjdGlvbi5pc0FjdGl2ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgX2FjdGlvbi5zdGFydCgpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfTtcblxuICAgIEFjdG9yLnByb3RvdHlwZS5zdG9wID0gZnVuY3Rpb24gc3RvcCgpIHtcbiAgICAgICAgX0FjdGlvbi5wcm90b3R5cGUuc3RvcC5jYWxsKHRoaXMpO1xuXG4gICAgICAgIGZvciAodmFyIGtleSBpbiB0aGlzLmFjdGl2ZUFjdGlvbnMpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmFjdGl2ZUFjdGlvbnMuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgICAgICAgIHRoaXMuYWN0aXZlQWN0aW9uc1trZXldLnN0b3AoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG5cbiAgICAvKlxuICAgICAgICBBZGQgYWN0aXZlIGFjdGlvbnNcbiAgICAgICAgIEBwYXJhbSBbbnVtYmVyXVxuICAgICAgICBAcGFyYW0gW0FjdGlvbl1cbiAgICAqL1xuXG4gICAgQWN0b3IucHJvdG90eXBlLmFjdGl2YXRlQWN0aW9uID0gZnVuY3Rpb24gYWN0aXZhdGVBY3Rpb24oaWQsIGFjdGlvbikge1xuICAgICAgICB0aGlzLmFjdGl2ZUFjdGlvbnNbaWRdID0gYWN0aW9uO1xuICAgICAgICB0aGlzLm51bUFjdGl2ZUFjdGlvbnMrKztcblxuICAgICAgICBpZiAodGhpcy5udW1BY3RpdmVBY3Rpb25zKSB7XG4gICAgICAgICAgICBfQWN0aW9uLnByb3RvdHlwZS5zdGFydC5jYWxsKHRoaXMpO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIC8qXG4gICAgICAgIFJlbW92ZSBhY3RpdmUgYWN0aW9uc1xuICAgICAgICAgQHBhcmFtIFtudW1iZXJdXG4gICAgKi9cblxuICAgIEFjdG9yLnByb3RvdHlwZS5kZWFjdGl2YXRlQWN0aW9uID0gZnVuY3Rpb24gZGVhY3RpdmF0ZUFjdGlvbihpZCkge1xuICAgICAgICBkZWxldGUgdGhpcy5hY3RpdmVBY3Rpb25zW2lkXTtcbiAgICAgICAgdGhpcy5udW1BY3RpdmVBY3Rpb25zLS07XG5cbiAgICAgICAgaWYgKCF0aGlzLm51bUFjdGl2ZUFjdGlvbnMgJiYgdGhpcy5pc0FjdGl2ZSkge1xuICAgICAgICAgICAgX0FjdGlvbi5wcm90b3R5cGUuc3RvcC5jYWxsKHRoaXMpO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIHJldHVybiBBY3Rvcjtcbn0oX0FjdGlvbjMuZGVmYXVsdCk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IEFjdG9yO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluTnlZeTloWTNSdmNpOUJZM1J2Y2k1cWN5SmRMQ0p1WVcxbGN5STZXMTBzSW0xaGNIQnBibWR6SWpvaU96czdPenM3T3pzN096czdPenM3TzBGQlJVRXNTVUZCVFN4aFFVRmhMRlZCUVVNc1MwRkJSQ3hGUVVGUkxFMUJRVkk3VjBGQmIwSTdRVUZEYmtNc1dVRkJTU3hOUVVGTkxFVkJRVTQ3TzBGQlJVb3NhVUpCUVZNc1dVRkJUVHRCUVVOWUxHdENRVUZOTEdOQlFVNHNRMEZCY1VJc1QwRkJUeXhGUVVGUUxFVkJRVmNzVFVGQmFFTTdPenRCUVVSWExHbENRVWxPTEVsQlFVa3NSMEZCU2l4SlFVRlhMRTlCUVU4c1RVRkJVQ3hGUVVGbE8wRkJRek5DTEc5Q1FVRkpMRTlCUVU4c1RVRkJVQ3hEUVVGakxHTkJRV1FzUTBGQk5rSXNSMEZCTjBJc1EwRkJTaXhGUVVGMVF6dEJRVU51UXl4M1FrRkJUU3hoUVVGaExFMUJRVTBzVFVGQlRpeERRVUZoTEVkQlFXSXNRMEZCWWl4RFFVUTJRanRCUVVWdVF5eDNRa0ZCVFN4alFVRmpMRTlCUVU4c1RVRkJVQ3hEUVVGakxFZEJRV1FzUTBGQlpEczdRVUZHTmtJc2VVSkJTVGxDTEVsQlFVa3NUMEZCU2l4SlFVRmxMRlZCUVhCQ0xFVkJRV2RETzBGQlF6VkNMRFJDUVVGSkxGZEJRVmNzWTBGQldDeERRVUV3UWl4UFFVRXhRaXhEUVVGS0xFVkJRWGRETzBGQlEzQkRMSGREUVVGWkxFOUJRVm9zU1VGQmRVSXNWMEZCVnl4UFFVRllMRU5CUVhaQ0xFTkJSRzlETzNsQ1FVRjRRenR4UWtGRVNqdHBRa0ZLU2p0aFFVUktPMU5CU2tzN08wRkJhMEpVTEdkQ1FVRlJMRmxCUVUwN1FVRkRWaXhyUWtGQlRTeG5Ra0ZCVGl4RFFVRjFRaXhQUVVGUExFVkJRVkFzUTBGQmRrSXNRMEZFVlR0VFFVRk9PenRCUVVsU0xHOUNRVUZaTEdkQ1FVRjFRanRuUWtGQmNFSXNiVUpCUVc5Q08yZENRVUZpTEhGQ1FVRmhPenM3UVVGRkwwSXNhVUpCUVVzc1NVRkJTU3hIUVVGS0xFbEJRVmNzUzBGQmFFSXNSVUZCZFVJN1FVRkRia0lzYjBKQlFVa3NUVUZCVFN4alFVRk9MRU5CUVhGQ0xFZEJRWEpDTEVOQlFVb3NSVUZCSzBJN1FVRkRNMElzTUVKQlFVMHNTMEZCVGl4RFFVRlpMRWRCUVZvc1NVRkJiVUlzVFVGQlRTeEhRVUZPTEVOQlFXNUNMRU5CUkRKQ08wRkJSVE5DTERCQ1FVRk5MRTFCUVU0c1EwRkJZU3hIUVVGaUxFVkJRV3RDTEU5QlFXeENMRWRCUVRSQ0xFOUJRVThzUjBGQlVDeEZRVUZaTEU5QlFWb3NRMEZHUkR0QlFVY3pRaXd3UWtGQlRTeE5RVUZPTEVOQlFXRXNSMEZCWWl4RlFVRnJRaXhSUVVGc1FpeEhRVUUyUWl4UFFVRlBMRWRCUVZBc1JVRkJXU3hSUVVGYUxFTkJTRVk3YVVKQlFTOUNPMkZCUkVvN08wRkJVVUVzYlVKQlFVOHNTMEZCVUN4RFFWWXJRanRUUVVGMlFqczdRMEY2UWtjN08wbEJkVU5GT3pzN1FVRkRha0lzWVVGRWFVSXNTMEZEYWtJc1IwRkJjVUk3T0VKQlJFb3NUMEZEU1RzN01FTkJRVTQ3TzFOQlFVMDdPM0ZFUVVOcVFpd3dRMEZCVXl4TFFVRlVMRWRCUkdsQ096dEJRVVZxUWl4alFVRkxMR0ZCUVV3c1IwRkJjVUlzUlVGQmNrSXNRMEZHYVVJN1FVRkhha0lzWTBGQlN5eG5Ra0ZCVEN4SFFVRjNRaXhEUVVGNFFpeERRVWhwUWpzN1MwRkJja0k3TzBGQlJHbENMRzlDUVU5cVFpeHRRa0ZCU1N4UFFVRlBMRk5CUVZNN1FVRkRhRUlzV1VGQlNTeFhRVUZYTEVOQlFVTXNTMEZCU3l4UFFVRk1MRVZCUVdNN1FVRkRNVUlzT0VKQlFVMHNSMEZCVGl4WlFVRlZMRXRCUVZZc1JVRkVNRUk3UVVGRk1VSXNhVUpCUVVzc1NVRkJUQ3hIUVVZd1FqdFRRVUU1UWl4TlFVZFBPMEZCUTBnc1owSkJRVTBzVTBGQlV5eExRVUZMTEU5QlFVd3NRMEZCWVN4TFFVRmlMRU5CUVZRc1EwRkVTRHRCUVVWSUxHZENRVUZKTEUxQlFVb3NSVUZCV1R0QlFVTlNMSEZDUVVGTExFdEJRVXdzUTBGQlZ5eE5RVUZZTEVWQlJGRTdZVUZCV2p0VFFVeEtPenM3T3pzN08wRkJVbUVzYjBKQmMwSnFRaXh4UWtGQlN5eFJRVUZSTzBGQlExUXNXVUZCVFN4clFrRkJhMElzVDBGQlR5eFBRVUZRTEVWQlFXeENMRU5CUkVjN1FVRkZWQ3haUVVGSkxGbEJRVmtzUlVGQldpeERRVVpMTzBGQlIxUXNXVUZCU1N4bFFVRmxMRXRCUVdZN096dEJRVWhMTEdGQlRVb3NTVUZCU1N4SFFVRktMRWxCUVZjc1owSkJRV2RDTEUxQlFXaENMRVZCUVhkQ08wRkJRM0JETEdkQ1FVRkpMR2RDUVVGblFpeE5RVUZvUWl4RFFVRjFRaXhqUVVGMlFpeERRVUZ6UXl4SFFVRjBReXhMUVVFNFF5eERRVUZETEV0QlFVc3NUVUZCVEN4RFFVRlpMR05CUVZvc1EwRkJNa0lzUjBGQk0wSXNRMEZCUkN4RlFVRnJRenRCUVVOb1Jpd3dRa0ZCVlN4SFFVRldMRWxCUVdsQ0xFVkJRV3BDTEVOQlJHZEdPMkZCUVhCR08xTkJSRW83TzBGQlRVRXNXVUZCU1N4WlFVRktMRVZCUVd0Q08wRkJRMlFzYVVKQlFVc3NSMEZCVEN4RFFVRlRMRk5CUVZRc1JVRkVZenRUUVVGc1FqczdRVUZKUVN4bFFVRlBMR2RDUVVGblFpeEhRVUZvUWl4RFFVRnZRaXhYUVVGWExFbEJRVmdzUlVGQmFVSXNaVUZCYWtJc1EwRkJjRUlzUTBGQlVDeERRV2hDVXpzN096czdPenM3TzBGQmRFSkpMRzlDUVdkRWFrSXNkVUpCUVUwc1VVRkJVVHRCUVVOV0xEQkNRVUZOTEV0QlFVNHNXVUZFVlRzN1FVRkhWaXhaUVVGSkxFMUJRVW9zUlVGQldUdEJRVU5TTEdkQ1FVRk5MR05CUVdNc1MwRkJTeXhKUVVGTUxFTkJRVlVzVFVGQlZpeERRVUZrTEVOQlJFVTdRVUZGVWl4M1FrRkJXU3hMUVVGYUxFZEJSbEU3TzBGQlNWSXNiVUpCUVU4c1YwRkJVQ3hEUVVwUk8xTkJRVm9zVFVGTFR6dEJRVU5JTEdsQ1FVRkxMRWxCUVVrc1IwRkJTaXhKUVVGWExFdEJRVXNzWVVGQlRDeEZRVUZ2UWp0QlFVTm9ReXh2UWtGQlNTeExRVUZMTEdGQlFVd3NRMEZCYlVJc1kwRkJia0lzUTBGQmEwTXNSMEZCYkVNc1EwRkJTaXhGUVVFMFF6dEJRVU40UXl4M1FrRkJUU3hWUVVGVExFdEJRVXNzWVVGQlRDeERRVUZ0UWl4SFFVRnVRaXhEUVVGVUxFTkJSR3RETzBGQlJYaERMSGRDUVVGSkxFTkJRVU1zVVVGQlR5eFJRVUZRTEVWQlFXbENPMEZCUTJ4Q0xHZERRVUZQTEV0QlFWQXNSMEZFYTBJN2NVSkJRWFJDTzJsQ1FVWktPMkZCUkVvN1UwRk9TanM3UVVGblFrRXNaVUZCVHl4SlFVRlFMRU5CYmtKVk96czdRVUZvUkVjc2IwSkJjMFZxUWl4MVFrRkJUenRCUVVOSUxEQkNRVUZOTEVsQlFVNHNXVUZFUnpzN1FVRkhTQ3hoUVVGTExFbEJRVWtzUjBGQlNpeEpRVUZYTEV0QlFVc3NZVUZCVEN4RlFVRnZRanRCUVVOb1F5eG5Ra0ZCU1N4TFFVRkxMR0ZCUVV3c1EwRkJiVUlzWTBGQmJrSXNRMEZCYTBNc1IwRkJiRU1zUTBGQlNpeEZRVUUwUXp0QlFVTjRReXh4UWtGQlN5eGhRVUZNTEVOQlFXMUNMRWRCUVc1Q0xFVkJRWGRDTEVsQlFYaENMRWRCUkhkRE8yRkJRVFZETzFOQlJFbzdPenM3T3pzN096dEJRWHBGWVN4dlFrRnpSbXBDTEhsRFFVRmxMRWxCUVVrc1VVRkJVVHRCUVVOMlFpeGhRVUZMTEdGQlFVd3NRMEZCYlVJc1JVRkJia0lzU1VGQmVVSXNUVUZCZWtJc1EwRkVkVUk3UVVGRmRrSXNZVUZCU3l4blFrRkJUQ3hIUVVaMVFqczdRVUZKZGtJc1dVRkJTU3hMUVVGTExHZENRVUZNTEVWQlFYVkNPMEZCUTNaQ0xEaENRVUZOTEV0QlFVNHNXVUZFZFVJN1UwRkJNMEk3T3pzN096czdPMEZCTVVaaExHOUNRVzlIYWtJc05rTkJRV2xDTEVsQlFVazdRVUZEYWtJc1pVRkJUeXhMUVVGTExHRkJRVXdzUTBGQmJVSXNSVUZCYmtJc1EwRkJVQ3hEUVVScFFqdEJRVVZxUWl4aFFVRkxMR2RDUVVGTUxFZEJSbWxDT3p0QlFVbHFRaXhaUVVGSkxFTkJRVU1zUzBGQlN5eG5Ra0ZCVEN4SlFVRjVRaXhMUVVGTExGRkJRVXdzUlVGQlpUdEJRVU42UXl3NFFrRkJUU3hKUVVGT0xGbEJSSGxETzFOQlFUZERPenM3VjBGNFIyRWlMQ0ptYVd4bElqb2lRV04wYjNJdWFuTWlMQ0p6YjNWeVkyVlNiMjkwSWpvaUwxVnpaWEp6TDAxaGRIUXZVMmwwWlhNdmNHOXdiVzkwYVc5dUlpd2ljMjkxY21ObGMwTnZiblJsYm5RaU9sc2lhVzF3YjNKMElFRmpkR2x2YmlCbWNtOXRJQ2N1TGk5aFkzUnBiMjV6TDBGamRHbHZiaWM3WEc1Y2JtTnZibk4wSUdKdmRXNWtVSEp2Y0hNZ1BTQW9ZV04wYjNJc0lHRmpkR2x2YmlrZ1BUNGdLSHRjYmlBZ0lDQnZiam9nWVdOMGIzSXViMjRzWEc1Y2JpQWdJQ0J2YmxOMFlYSjBPaUFvS1NBOVBpQjdYRzRnSUNBZ0lDQWdJR0ZqZEc5eUxtRmpkR2wyWVhSbFFXTjBhVzl1S0dGamRHbHZiaTVwWkN3Z1lXTjBhVzl1S1R0Y2JseHVJQ0FnSUNBZ0lDQXZMeUJEYjNCNUlFRmpkRzl5SUhCeWIzQmxjblJwWlhNZ2RHOGdRV04wYVc5dVhHNGdJQ0FnSUNBZ0lHWnZjaUFvYkdWMElHdGxlU0JwYmlCaFkzUnBiMjR1ZG1Gc2RXVnpLU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQnBaaUFvWVdOMGFXOXVMblpoYkhWbGN5NW9ZWE5QZDI1UWNtOXdaWEowZVNoclpYa3BLU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnWTI5dWMzUWdZV04wYjNKV1lXeDFaU0E5SUdGamRHOXlMblpoYkhWbGMxdHJaWGxkTzF4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUdOdmJuTjBJR0ZqZEdsdmJsWmhiSFZsSUQwZ1lXTjBhVzl1TG5aaGJIVmxjMXRyWlhsZE8xeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDOHZJSEpsY0d4aFkyVWdjSEp2Y0dWeWRIa2dZMjl3ZVNCM2FYUm9JR04xY25KbGJuUWdkSEpoYm5ObVpYSWdMU0J0WVhsaVpTQnlaWEJzWVdObElIZHBiR3hTWlc1a1pYSS9YRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdabTl5SUNoc1pYUWdjSEp2Y0V0bGVTQnBiaUJoWTNSdmNsWmhiSFZsS1NCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJR2xtSUNoaFkzUnZjbFpoYkhWbExtaGhjMDkzYmxCeWIzQmxjblI1S0hCeWIzQkxaWGtwS1NCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCaFkzUnBiMjVXWVd4MVpWdHdjbTl3UzJWNVhTQTlJR0ZqZEc5eVZtRnNkV1ZiY0hKdmNFdGxlVjA3WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lIMWNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQjlYRzRnSUNBZ0lDQWdJQ0FnSUNCOVhHNGdJQ0FnSUNBZ0lIMWNiaUFnSUNCOUxGeHVYRzRnSUNBZ2IyNVRkRzl3T2lBb0tTQTlQaUI3WEc0Z0lDQWdJQ0FnSUdGamRHOXlMbVJsWVdOMGFYWmhkR1ZCWTNScGIyNG9ZV04wYVc5dUxtbGtLVHRjYmlBZ0lDQjlMRnh1WEc0Z0lDQWdkMmxzYkZKbGJtUmxjam9nS0hzZ2MzUmhkR1VzSUhaaGJIVmxjeUI5S1NBOVBpQjdYRzRnSUNBZ0lDQWdJQzh2SUZWd1pHRjBaU0JoWTNSdmNpQjJZV3gxWlhNZ2QybDBhQ0JwYm1OdmJXbHVaeUJ6ZEdGMFpTQjJZV3gxWlhOY2JpQWdJQ0FnSUNBZ1ptOXlJQ2hzWlhRZ2EyVjVJR2x1SUhOMFlYUmxLU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQnBaaUFvYzNSaGRHVXVhR0Z6VDNkdVVISnZjR1Z5ZEhrb2EyVjVLU2tnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUdGamRHOXlMbk4wWVhSbFcydGxlVjBnUFNCemRHRjBaVnRyWlhsZE8xeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lHRmpkRzl5TG5aaGJIVmxjMXRyWlhsZExtTjFjbkpsYm5RZ1BTQjJZV3gxWlhOYmEyVjVYUzVqZFhKeVpXNTBPMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJR0ZqZEc5eUxuWmhiSFZsYzF0clpYbGRMblpsYkc5amFYUjVJRDBnZG1Gc2RXVnpXMnRsZVYwdWRtVnNiMk5wZEhrN1hHNGdJQ0FnSUNBZ0lDQWdJQ0I5WEc0Z0lDQWdJQ0FnSUgxY2JseHVJQ0FnSUNBZ0lDQnlaWFIxY200Z1ptRnNjMlU3WEc0Z0lDQWdmVnh1ZlNrN1hHNWNibVY0Y0c5eWRDQmtaV1poZFd4MElHTnNZWE56SUVGamRHOXlJR1Y0ZEdWdVpITWdRV04wYVc5dUlIdGNiaUFnSUNCamIyNXpkSEoxWTNSdmNpZ3VMaTVoY21kektTQjdYRzRnSUNBZ0lDQWdJSE4xY0dWeUtDNHVMbUZ5WjNNcE8xeHVJQ0FnSUNBZ0lDQjBhR2x6TG1GamRHbDJaVUZqZEdsdmJuTWdQU0I3ZlR0Y2JpQWdJQ0FnSUNBZ2RHaHBjeTV1ZFcxQlkzUnBkbVZCWTNScGIyNXpJRDBnTUR0Y2JpQWdJQ0I5WEc1Y2JpQWdJQ0J6WlhRb2NISnZjSE1zSUdsdWMzUmhiblFwSUh0Y2JpQWdJQ0FnSUNBZ2FXWWdLR2x1YzNSaGJuUWdmSHdnSVhSb2FYTXVjbVZrZFdObGNpa2dlMXh1SUNBZ0lDQWdJQ0FnSUNBZ2MzVndaWEl1YzJWMEtIQnliM0J6S1R0Y2JpQWdJQ0FnSUNBZ0lDQWdJSFJvYVhNdWIyNWpaU2dwTzF4dUlDQWdJQ0FnSUNCOUlHVnNjMlVnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdZMjl1YzNRZ1lXTjBhVzl1SUQwZ2RHaHBjeTV5WldSMVkyVnlLSEJ5YjNCektUdGNiaUFnSUNBZ0lDQWdJQ0FnSUdsbUlDaGhZM1JwYjI0cElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQjBhR2x6TG5OMFlYSjBLR0ZqZEdsdmJpazdYRzRnSUNBZ0lDQWdJQ0FnSUNCOVhHNGdJQ0FnSUNBZ0lIMWNiaUFnSUNCOVhHNWNiaUFnSUNBdktseHVJQ0FnSUNBZ0lDQkNhVzVrSUVGamRHbHZiaUIwYnlCQlkzUnZjbHh1SUNBZ0lDb3ZYRzRnSUNBZ1ltbHVaQ2hoWTNScGIyNHBJSHRjYmlBZ0lDQWdJQ0FnWTI5dWMzUWdhVzVvWlhKcGRHVmtRV04wYVc5dUlEMGdZV04wYVc5dUxtbHVhR1Z5YVhRb0tUdGNiaUFnSUNBZ0lDQWdiR1YwSUc1bGQxWmhiSFZsY3lBOUlIdDlPMXh1SUNBZ0lDQWdJQ0JzWlhRZ2FHRnpUbVYzVm1Gc2RXVnpJRDBnWm1Gc2MyVTdYRzVjYmlBZ0lDQWdJQ0FnTHk4Z1EzSmxZWFJsSUhaaGJIVmxjeUJ2YmlCaFkzUnZjaUIwYUdGMElHUnZiaWQwSUdWNGFYTjBYRzRnSUNBZ0lDQWdJR1p2Y2lBb2JHVjBJR3RsZVNCcGJpQnBibWhsY21sMFpXUkJZM1JwYjI0dWRtRnNkV1Z6S1NCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0JwWmlBb2FXNW9aWEpwZEdWa1FXTjBhVzl1TG5aaGJIVmxjeTVvWVhOUGQyNVFjbTl3WlhKMGVTaHJaWGtwSUNZbUlDRjBhR2x6TG5aaGJIVmxjeTVvWVhOUGQyNVFjbTl3WlhKMGVTaHJaWGtwS1NCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2JtVjNWbUZzZFdWelcydGxlVjBnUFNCN2ZUdGNiaUFnSUNBZ0lDQWdJQ0FnSUgxY2JpQWdJQ0FnSUNBZ2ZWeHVYRzRnSUNBZ0lDQWdJR2xtSUNob1lYTk9aWGRXWVd4MVpYTXBJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lIUm9hWE11YzJWMEtHNWxkMVpoYkhWbGN5azdYRzRnSUNBZ0lDQWdJSDFjYmx4dUlDQWdJQ0FnSUNCeVpYUjFjbTRnYVc1b1pYSnBkR1ZrUVdOMGFXOXVMbk5sZENoaWIzVnVaRkJ5YjNCektIUm9hWE1zSUdsdWFHVnlhWFJsWkVGamRHbHZiaWtwTzF4dUlDQWdJSDFjYmx4dUlDQWdJQzhxWEc0Z0lDQWdJQ0FnSUZOMFlYSjBJRUZqZEc5eVhHNWNiaUFnSUNBZ0lDQWdTV1lnUVdOMGFXOXVJR2x6SUhCeWIzWnBaR1ZrTENCaWFXNWtJR2wwSUhSdklIUm9hWE1nUVdOMGIzSWdZVzVrSUhOMFlYSjBYRzVjYmlBZ0lDQWdJQ0FnUUhCaGNtRnRJQ2h2Y0hScGIyNWhiQ2tnVzBGamRHbHZibDFjYmlBZ0lDQXFMMXh1SUNBZ0lITjBZWEowS0dGamRHbHZiaWtnZTF4dUlDQWdJQ0FnSUNCemRYQmxjaTV6ZEdGeWRDZ3BPMXh1WEc0Z0lDQWdJQ0FnSUdsbUlDaGhZM1JwYjI0cElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUdOdmJuTjBJR0p2ZFc1a1FXTjBhVzl1SUQwZ2RHaHBjeTVpYVc1a0tHRmpkR2x2YmlrN1hHNGdJQ0FnSUNBZ0lDQWdJQ0JpYjNWdVpFRmpkR2x2Ymk1emRHRnlkQ2dwTzF4dVhHNGdJQ0FnSUNBZ0lDQWdJQ0J5WlhSMWNtNGdZbTkxYm1SQlkzUnBiMjQ3WEc0Z0lDQWdJQ0FnSUgwZ1pXeHpaU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQm1iM0lnS0d4bGRDQnJaWGtnYVc0Z2RHaHBjeTVoWTNScGRtVkJZM1JwYjI1ektTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdhV1lnS0hSb2FYTXVZV04wYVhabFFXTjBhVzl1Y3k1b1lYTlBkMjVRY205d1pYSjBlU2hyWlhrcEtTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUdOdmJuTjBJR0ZqZEdsdmJpQTlJSFJvYVhNdVlXTjBhWFpsUVdOMGFXOXVjMXRyWlhsZE8xeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0JwWmlBb0lXRmpkR2x2Ymk1cGMwRmpkR2wyWlNrZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ1lXTjBhVzl1TG5OMFlYSjBLQ2s3WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lIMWNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQjlYRzRnSUNBZ0lDQWdJQ0FnSUNCOVhHNGdJQ0FnSUNBZ0lIMWNibHh1SUNBZ0lDQWdJQ0J5WlhSMWNtNGdkR2hwY3p0Y2JpQWdJQ0I5WEc1Y2JpQWdJQ0J6ZEc5d0tDa2dlMXh1SUNBZ0lDQWdJQ0J6ZFhCbGNpNXpkRzl3S0NrN1hHNWNiaUFnSUNBZ0lDQWdabTl5SUNoc1pYUWdhMlY1SUdsdUlIUm9hWE11WVdOMGFYWmxRV04wYVc5dWN5a2dlMXh1SUNBZ0lDQWdJQ0FnSUNBZ2FXWWdLSFJvYVhNdVlXTjBhWFpsUVdOMGFXOXVjeTVvWVhOUGQyNVFjbTl3WlhKMGVTaHJaWGtwS1NCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2RHaHBjeTVoWTNScGRtVkJZM1JwYjI1elcydGxlVjB1YzNSdmNDZ3BPMXh1SUNBZ0lDQWdJQ0FnSUNBZ2ZWeHVJQ0FnSUNBZ0lDQjlYRzRnSUNBZ2ZWeHVYRzRnSUNBZ0x5cGNiaUFnSUNBZ0lDQWdRV1JrSUdGamRHbDJaU0JoWTNScGIyNXpYRzVjYmlBZ0lDQWdJQ0FnUUhCaGNtRnRJRnR1ZFcxaVpYSmRYRzRnSUNBZ0lDQWdJRUJ3WVhKaGJTQmJRV04wYVc5dVhWeHVJQ0FnSUNvdlhHNGdJQ0FnWVdOMGFYWmhkR1ZCWTNScGIyNG9hV1FzSUdGamRHbHZiaWtnZTF4dUlDQWdJQ0FnSUNCMGFHbHpMbUZqZEdsMlpVRmpkR2x2Ym5OYmFXUmRJRDBnWVdOMGFXOXVPMXh1SUNBZ0lDQWdJQ0IwYUdsekxtNTFiVUZqZEdsMlpVRmpkR2x2Ym5Nckt6dGNibHh1SUNBZ0lDQWdJQ0JwWmlBb2RHaHBjeTV1ZFcxQlkzUnBkbVZCWTNScGIyNXpLU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQnpkWEJsY2k1emRHRnlkQ2dwTzF4dUlDQWdJQ0FnSUNCOVhHNGdJQ0FnZlZ4dVhHNGdJQ0FnTHlwY2JpQWdJQ0FnSUNBZ1VtVnRiM1psSUdGamRHbDJaU0JoWTNScGIyNXpYRzVjYmlBZ0lDQWdJQ0FnUUhCaGNtRnRJRnR1ZFcxaVpYSmRYRzRnSUNBZ0tpOWNiaUFnSUNCa1pXRmpkR2wyWVhSbFFXTjBhVzl1S0dsa0tTQjdYRzRnSUNBZ0lDQWdJR1JsYkdWMFpTQjBhR2x6TG1GamRHbDJaVUZqZEdsdmJuTmJhV1JkTzF4dUlDQWdJQ0FnSUNCMGFHbHpMbTUxYlVGamRHbDJaVUZqZEdsdmJuTXRMVHRjYmx4dUlDQWdJQ0FnSUNCcFppQW9JWFJvYVhNdWJuVnRRV04wYVhabFFXTjBhVzl1Y3lBbUppQjBhR2x6TG1selFXTjBhWFpsS1NCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0J6ZFhCbGNpNXpkRzl3S0NrN1hHNGdJQ0FnSUNBZ0lIMWNiaUFnSUNCOVhHNTlJbDE5XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9hY3Rvci9BY3Rvci5qc1xuICoqIG1vZHVsZSBpZCA9IDNcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxudmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF9BY3Rpb24yID0gcmVxdWlyZSgnLi9BY3Rpb24nKTtcblxudmFyIF9BY3Rpb24zID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfQWN0aW9uMik7XG5cbnZhciBfcHJlc2V0RWFzaW5nID0gcmVxdWlyZSgnLi9lYXNpbmcvcHJlc2V0LWVhc2luZycpO1xuXG52YXIgX3ByZXNldEVhc2luZzIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9wcmVzZXRFYXNpbmcpO1xuXG52YXIgX3V0aWxzID0gcmVxdWlyZSgnLi4vaW5jL3V0aWxzJyk7XG5cbnZhciBfY2FsYyA9IHJlcXVpcmUoJy4uL2luYy9jYWxjJyk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKCFzZWxmKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gY2FsbCAmJiAodHlwZW9mIGNhbGwgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikgPyBjYWxsIDogc2VsZjsgfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb24sIG5vdCBcIiArIHR5cGVvZiBzdXBlckNsYXNzKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCBlbnVtZXJhYmxlOiBmYWxzZSwgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LnNldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKSA6IHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7IH1cblxudmFyIENPVU5UID0gJ0NvdW50JztcbnZhciBORVhUX1NURVBTID0ge1xuICAgIGxvb3A6ICdyZXN0YXJ0JyxcbiAgICB5b3lvOiAncmV2ZXJzZScsXG4gICAgZmxpcDogJ2ZsaXBWYWx1ZXMnXG59O1xuXG4vKlxuICAgIEVhc2UgdmFsdWUgd2l0aGluIHJhbmdlZCBwYXJhbWV0ZXJzXG4gICAgXG4gICAgQHBhcmFtIFtudW1iZXJdOiBQcm9ncmVzcyBiZXR3ZWVuIDAgYW5kIDFcbiAgICBAcGFyYW0gW251bWJlcl06IFZhbHVlIG9mIDAgcHJvZ3Jlc3NcbiAgICBAcGFyYW0gW251bWJlcl06IFZhbHVlIG9mIDEgcHJvZ3Jlc3NcbiAgICBAcGFyYW0gW3N0cmluZyB8fCBmdW5jdGlvbl06IE5hbWUgb2YgcHJlc2V0IGVhc2luZ1xuICAgICAgICB0byB1c2Ugb3IgZ2VuZXJhdGVkIGVhc2luZyBmdW5jdGlvblxuICAgIEByZXR1cm4gW251bWJlcl06IFZhbHVlIG9mIGVhc2VkIHByb2dyZXNzIGluIHJhbmdlXG4qL1xudmFyIGVhc2UgPSBmdW5jdGlvbiAocHJvZ3Jlc3MsIGZyb20sIHRvLCBlYXNlKSB7XG4gICAgdmFyIHByb2dyZXNzTGltaXRlZCA9ICgwLCBfY2FsYy5yZXN0cmljdCkocHJvZ3Jlc3MsIDAsIDEpO1xuICAgIHZhciBlYXNlZFByb2dyZXNzID0gZWFzZShwcm9ncmVzc0xpbWl0ZWQpO1xuXG4gICAgcmV0dXJuICgwLCBfY2FsYy5nZXRWYWx1ZUZyb21Qcm9ncmVzcykoZWFzZWRQcm9ncmVzcywgZnJvbSwgdG8pO1xufTtcblxudmFyIFR3ZWVuID0gZnVuY3Rpb24gKF9BY3Rpb24pIHtcbiAgICBfaW5oZXJpdHMoVHdlZW4sIF9BY3Rpb24pO1xuXG4gICAgZnVuY3Rpb24gVHdlZW4oKSB7XG4gICAgICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBUd2Vlbik7XG5cbiAgICAgICAgcmV0dXJuIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIF9BY3Rpb24uYXBwbHkodGhpcywgYXJndW1lbnRzKSk7XG4gICAgfVxuXG4gICAgVHdlZW4ucHJvdG90eXBlLnN0YXJ0ID0gZnVuY3Rpb24gc3RhcnQoKSB7XG4gICAgICAgIF9BY3Rpb24ucHJvdG90eXBlLnN0YXJ0LmNhbGwodGhpcyk7XG4gICAgICAgIHRoaXMuZWxhcHNlZCA9IDA7XG4gICAgICAgIHRoaXMuZmxpcENvdW50ID0gdGhpcy55b3lvQ291bnQgPSB0aGlzLmxvb3BDb3VudCA9IDA7XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfTtcblxuICAgIFR3ZWVuLnByb3RvdHlwZS5vblVwZGF0ZSA9IGZ1bmN0aW9uIG9uVXBkYXRlKHR3ZWVuLCBmcmFtZVN0YW1wLCBlbGFwc2VkKSB7XG4gICAgICAgIHZhciBwcm9ncmVzc1RhcmdldCA9IHRoaXMucGxheURpcmVjdGlvbiA9PT0gMSA/IDEgOiAwO1xuXG4gICAgICAgIHRoaXMuZW5kZWQgPSB0cnVlO1xuICAgICAgICB0aGlzLmVsYXBzZWQgKz0gZWxhcHNlZCAqIHRoaXMuZGlsYXRlICogdGhpcy5wbGF5RGlyZWN0aW9uO1xuXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5udW1WYWx1ZUtleXM7IGkrKykge1xuICAgICAgICAgICAgdmFyIGtleSA9IHRoaXMudmFsdWVLZXlzW2ldO1xuICAgICAgICAgICAgdmFyIHZhbHVlID0gdGhpcy52YWx1ZXNba2V5XTtcblxuICAgICAgICAgICAgdmFyIHByb2dyZXNzID0gKDAsIF9jYWxjLnJlc3RyaWN0KSgoMCwgX2NhbGMuZ2V0UHJvZ3Jlc3NGcm9tVmFsdWUpKHRoaXMuZWxhcHNlZCAtIHZhbHVlLmRlbGF5LCAwLCB2YWx1ZS5kdXJhdGlvbiksIDAsIDEpO1xuXG4gICAgICAgICAgICAvLyBNYXJrIFR3ZWVuIGFzIE5PVCBlbmRlZCBpZiBzdGlsbCBpbiBwcm9ncmVzc1xuICAgICAgICAgICAgaWYgKHByb2dyZXNzICE9PSBwcm9ncmVzc1RhcmdldCkge1xuICAgICAgICAgICAgICAgIHRoaXMuZW5kZWQgPSBmYWxzZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gU3RlcCBwcm9ncmVzcyBpZiB3ZSdyZSBzdGVwcGluZ1xuICAgICAgICAgICAgaWYgKHZhbHVlLnN0ZXBzKSB7XG4gICAgICAgICAgICAgICAgcHJvZ3Jlc3MgPSAoMCwgX2NhbGMuc3RlcFByb2dyZXNzKShwcm9ncmVzcywgdmFsdWUuc3RlcHMpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBFYXNlIHByb2dyZXNzXG4gICAgICAgICAgICB2YWx1ZS5jdXJyZW50ID0gZWFzZShwcm9ncmVzcywgdmFsdWUuZnJvbSwgdmFsdWUudG8sIHZhbHVlLmVhc2UpO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIFR3ZWVuLnByb3RvdHlwZS5vbkZyYW1lRW5kID0gZnVuY3Rpb24gb25GcmFtZUVuZCgpIHtcbiAgICAgICAgaWYgKHRoaXMuZW5kZWQpIHtcbiAgICAgICAgICAgIHZhciBzdGVwVGFrZW4gPSBmYWxzZTtcblxuICAgICAgICAgICAgZm9yICh2YXIga2V5IGluIE5FWFRfU1RFUFMpIHtcbiAgICAgICAgICAgICAgICBpZiAoTkVYVF9TVEVQUy5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBtYXhTdGVwcyA9IHRoaXNba2V5XTtcblxuICAgICAgICAgICAgICAgICAgICBpZiAobWF4U3RlcHMgPT09IHRydWUgfHwgKDAsIF91dGlscy5pc051bSkobWF4U3RlcHMpICYmIG1heFN0ZXBzID4gdGhpc1trZXkgKyBDT1VOVF0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXNba2V5ICsgQ09VTlRdKys7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdGVwVGFrZW4gPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpc1tORVhUX1NURVBTW2tleV1dKCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICghc3RlcFRha2VuKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zdG9wKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgVHdlZW4ucHJvdG90eXBlLmZsaXBWYWx1ZXMgPSBmdW5jdGlvbiBmbGlwVmFsdWVzKCkge1xuICAgICAgICB2YXIgdmFsdWVzID0gdGhpcy52YWx1ZXM7XG5cbiAgICAgICAgdGhpcy5lbGFwc2VkID0gdGhpcy5kdXJhdGlvbiAtIHRoaXMuZWxhcHNlZDtcblxuICAgICAgICBmb3IgKHZhciBrZXkgaW4gdmFsdWVzKSB7XG4gICAgICAgICAgICBpZiAodmFsdWVzLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICAgICAgICB2YXIgdmFsdWUgPSB2YWx1ZXNba2V5XTtcbiAgICAgICAgICAgICAgICB2YXIgX3JlZiA9IFt2YWx1ZS5mcm9tLCB2YWx1ZS50b107XG4gICAgICAgICAgICAgICAgdmFsdWUudG8gPSBfcmVmWzBdO1xuICAgICAgICAgICAgICAgIHZhbHVlLmZyb20gPSBfcmVmWzFdO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfTtcblxuICAgIFR3ZWVuLnByb3RvdHlwZS5yZXZlcnNlID0gZnVuY3Rpb24gcmV2ZXJzZSgpIHtcbiAgICAgICAgdGhpcy5wbGF5RGlyZWN0aW9uICo9IC0xO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xuXG4gICAgVHdlZW4ucHJvdG90eXBlLnJlc3RhcnQgPSBmdW5jdGlvbiByZXN0YXJ0KCkge1xuICAgICAgICB0aGlzLmVsYXBzZWQgPSB0aGlzLnBsYXlEaXJlY3Rpb24gPT09IDEgPyAwIDogdGhpcy5kdXJhdGlvbjtcbiAgICAgICAgdGhpcy5zdGFydGVkID0gKDAsIF91dGlscy5jdXJyZW50VGltZSkoKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfTtcblxuICAgIFR3ZWVuLnByb3RvdHlwZS5zZWVrID0gZnVuY3Rpb24gc2Vlayhwcm9ncmVzcykge1xuICAgICAgICB0aGlzLnNlZWtUaW1lKHRoaXMuZHVyYXRpb24gKiBwcm9ncmVzcyk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH07XG5cbiAgICBUd2Vlbi5wcm90b3R5cGUuc2Vla1RpbWUgPSBmdW5jdGlvbiBzZWVrVGltZShlbGFwc2VkKSB7XG4gICAgICAgIHRoaXMub25jZSgpO1xuICAgICAgICB0aGlzLmVsYXBzZWQgPSBlbGFwc2VkO1xuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH07XG5cbiAgICBUd2Vlbi5wcm90b3R5cGUuZ2V0RGVmYXVsdFByb3BzID0gZnVuY3Rpb24gZ2V0RGVmYXVsdFByb3BzKCkge1xuICAgICAgICByZXR1cm4gX2V4dGVuZHMoe30sIF9BY3Rpb24ucHJvdG90eXBlLmdldERlZmF1bHRQcm9wcy5jYWxsKHRoaXMpLCB7XG4gICAgICAgICAgICBkZWxheTogMCxcbiAgICAgICAgICAgIGRpbGF0ZTogMSxcbiAgICAgICAgICAgIGR1cmF0aW9uOiAzMDAsXG4gICAgICAgICAgICBsb29wOiBmYWxzZSxcbiAgICAgICAgICAgIHlveW86IGZhbHNlLFxuICAgICAgICAgICAgZmxpcDogZmFsc2UsXG4gICAgICAgICAgICBwbGF5RGlyZWN0aW9uOiAxLFxuICAgICAgICAgICAgZW5kZWQ6IGZhbHNlLFxuICAgICAgICAgICAgZWxhcHNlZDogMFxuICAgICAgICB9KTtcbiAgICB9O1xuXG4gICAgVHdlZW4ucHJvdG90eXBlLmdldERlZmF1bHRWYWx1ZSA9IGZ1bmN0aW9uIGdldERlZmF1bHRWYWx1ZSgpIHtcbiAgICAgICAgcmV0dXJuIF9leHRlbmRzKHt9LCBfQWN0aW9uLnByb3RvdHlwZS5nZXREZWZhdWx0VmFsdWUuY2FsbCh0aGlzKSwge1xuICAgICAgICAgICAgZGVsYXk6IDAsXG4gICAgICAgICAgICBkdXJhdGlvbjogMzAwLFxuICAgICAgICAgICAgZWFzZTogX3ByZXNldEVhc2luZzIuZGVmYXVsdC5lYXNlT3V0LFxuICAgICAgICAgICAgZWxhcHNlZDogMCxcbiAgICAgICAgICAgIHN0YWdnZXI6IDAsXG4gICAgICAgICAgICBzdGVwczogMCxcbiAgICAgICAgICAgIGZyb206IDAsXG4gICAgICAgICAgICB0bzogMCxcbiAgICAgICAgICAgIHJvdW5kOiBmYWxzZVxuICAgICAgICB9KTtcbiAgICB9O1xuXG4gICAgVHdlZW4ucHJvdG90eXBlLmdldERlZmF1bHRWYWx1ZVByb3AgPSBmdW5jdGlvbiBnZXREZWZhdWx0VmFsdWVQcm9wKCkge1xuICAgICAgICByZXR1cm4gJ3RvJztcbiAgICB9O1xuXG4gICAgcmV0dXJuIFR3ZWVuO1xufShfQWN0aW9uMy5kZWZhdWx0KTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gVHdlZW47XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5OeVl5OWhZM1JwYjI1ekwxUjNaV1Z1TG1weklsMHNJbTVoYldWeklqcGJYU3dpYldGd2NHbHVaM01pT2lJN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3TzBGQlZVRXNTVUZCVFN4UlFVRlJMRTlCUVZJN1FVRkRUaXhKUVVGTkxHRkJRV0U3UVVGRFppeFZRVUZOTEZOQlFVNDdRVUZEUVN4VlFVRk5MRk5CUVU0N1FVRkRRU3hWUVVGTkxGbEJRVTQ3UTBGSVJUczdPenM3T3pzN096czdPMEZCWjBKT0xFbEJRVTBzVDBGQlR5eFZRVUZETEZGQlFVUXNSVUZCVnl4SlFVRllMRVZCUVdsQ0xFVkJRV3BDTEVWQlFYRkNMRWxCUVhKQ0xFVkJRVGhDTzBGQlEzWkRMRkZCUVUwc2EwSkJRV3RDTEc5Q1FVRlRMRkZCUVZRc1JVRkJiVUlzUTBGQmJrSXNSVUZCYzBJc1EwRkJkRUlzUTBGQmJFSXNRMEZFYVVNN1FVRkZka01zVVVGQlRTeG5Ra0ZCWjBJc1MwRkJTeXhsUVVGTUxFTkJRV2hDTEVOQlJtbERPenRCUVVsMlF5eFhRVUZQTEdkRFFVRnhRaXhoUVVGeVFpeEZRVUZ2UXl4SlFVRndReXhGUVVFd1F5eEZRVUV4UXl4RFFVRlFMRU5CU25WRE8wTkJRVGxDT3p0SlFVOVJPenM3T3pzN096czdiMEpCUTJwQ0xIbENRVUZSTzBGQlEwb3NNRUpCUVUwc1MwRkJUaXhaUVVSSk8wRkJSVW9zWVVGQlN5eFBRVUZNTEVkQlFXVXNRMEZCWml4RFFVWkpPMEZCUjBvc1lVRkJTeXhUUVVGTUxFZEJRV2xDTEV0QlFVc3NVMEZCVEN4SFFVRnBRaXhMUVVGTExGTkJRVXdzUjBGQmFVSXNRMEZCYWtJc1EwRklPVUk3TzBGQlMwb3NaVUZCVHl4SlFVRlFMRU5CVEVrN096dEJRVVJUTEc5Q1FWTnFRaXcyUWtGQlV5eFBRVUZQTEZsQlFWa3NVMEZCVXp0QlFVTnFReXhaUVVGTkxHbENRVUZwUWl4SlFVRkRMRU5CUVVzc1lVRkJUQ3hMUVVGMVFpeERRVUYyUWl4SFFVRTBRaXhEUVVFM1FpeEhRVUZwUXl4RFFVRnFReXhEUVVSVk96dEJRVWRxUXl4aFFVRkxMRXRCUVV3c1IwRkJZU3hKUVVGaUxFTkJTR2xETzBGQlNXcERMR0ZCUVVzc1QwRkJUQ3hKUVVGblFpeFBRVUZETEVkQlFWVXNTMEZCU3l4TlFVRk1MRWRCUVdVc1MwRkJTeXhoUVVGTUxFTkJTbFE3TzBGQlRXcERMR0ZCUVVzc1NVRkJTU3hKUVVGSkxFTkJRVW9zUlVGQlR5eEpRVUZKTEV0QlFVc3NXVUZCVEN4RlFVRnRRaXhIUVVGMlF5eEZRVUUwUXp0QlFVTjRReXhuUWtGQlRTeE5RVUZOTEV0QlFVc3NVMEZCVEN4RFFVRmxMRU5CUVdZc1EwRkJUaXhEUVVSclF6dEJRVVY0UXl4blFrRkJUU3hSUVVGUkxFdEJRVXNzVFVGQlRDeERRVUZaTEVkQlFWb3NRMEZCVWl4RFFVWnJRenM3UVVGSmVFTXNaMEpCUVVrc1YwRkJWeXh2UWtGQlV5eG5RMEZCY1VJc1MwRkJTeXhQUVVGTUxFZEJRV1VzVFVGQlRTeExRVUZPTEVWQlFXRXNRMEZCYWtRc1JVRkJiMFFzVFVGQlRTeFJRVUZPTEVOQlFUZEVMRVZCUVRoRkxFTkJRVGxGTEVWQlFXbEdMRU5CUVdwR0xFTkJRVmc3T3p0QlFVcHZReXhuUWtGUGNFTXNZVUZCWVN4alFVRmlMRVZCUVRaQ08wRkJRemRDTEhGQ1FVRkxMRXRCUVV3c1IwRkJZU3hMUVVGaUxFTkJSRFpDTzJGQlFXcERPenM3UVVGUWQwTXNaMEpCV1hCRExFMUJRVTBzUzBGQlRpeEZRVUZoTzBGQlEySXNNa0pCUVZjc2QwSkJRV0VzVVVGQllpeEZRVUYxUWl4TlFVRk5MRXRCUVU0c1EwRkJiRU1zUTBGRVlUdGhRVUZxUWpzN08wRkJXbmRETEdsQ1FXbENlRU1zUTBGQlRTeFBRVUZPTEVkQlFXZENMRXRCUVVzc1VVRkJUQ3hGUVVGbExFMUJRVTBzU1VGQlRpeEZRVUZaTEUxQlFVMHNSVUZCVGl4RlFVRlZMRTFCUVUwc1NVRkJUaXhEUVVGeVJDeERRV3BDZDBNN1UwRkJOVU03T3p0QlFXWmhMRzlDUVc5RGFrSXNiVU5CUVdFN1FVRkRWQ3haUVVGSkxFdEJRVXNzUzBGQlRDeEZRVUZaTzBGQlExb3NaMEpCUVVrc1dVRkJXU3hMUVVGYUxFTkJSRkU3TzBGQlIxb3NhVUpCUVVzc1NVRkJTU3hIUVVGS0xFbEJRVmNzVlVGQmFFSXNSVUZCTkVJN1FVRkRlRUlzYjBKQlFVa3NWMEZCVnl4alFVRllMRU5CUVRCQ0xFZEJRVEZDTEVOQlFVb3NSVUZCYjBNN1FVRkRhRU1zZDBKQlFVMHNWMEZCVnl4TFFVRkxMRWRCUVV3c1EwRkJXQ3hEUVVRd1FqczdRVUZIYUVNc2QwSkJRVWtzWVVGQllTeEpRVUZpTEVsQlFYTkNMR3RDUVVGTkxGRkJRVTRzUzBGQmJVSXNWMEZCVnl4TFFVRkxMRTFCUVUwc1MwRkJUaXhEUVVGb1FpeEZRVUVyUWp0QlFVTjRSU3cyUWtGQlN5eE5RVUZOTEV0QlFVNHNRMEZCVEN4SFFVUjNSVHRCUVVWNFJTeHZRMEZCV1N4SlFVRmFMRU5CUm5kRk8wRkJSM2hGTERaQ1FVRkxMRmRCUVZjc1IwRkJXQ3hEUVVGTUxFbEJTSGRGTzNGQ1FVRTFSVHRwUWtGSVNqdGhRVVJLT3p0QlFWbEJMR2RDUVVGSkxFTkJRVU1zVTBGQlJDeEZRVUZaTzBGQlExb3NjVUpCUVVzc1NVRkJUQ3hIUVVSWk8yRkJRV2hDTzFOQlprbzdPenRCUVhKRFlTeHZRa0V3UkdwQ0xHMURRVUZoTzBGQlExUXNXVUZCVFN4VFFVRlRMRXRCUVVzc1RVRkJUQ3hEUVVST096dEJRVWRVTEdGQlFVc3NUMEZCVEN4SFFVRmxMRXRCUVVzc1VVRkJUQ3hIUVVGblFpeExRVUZMTEU5QlFVd3NRMEZJZEVJN08wRkJTMVFzWVVGQlN5eEpRVUZKTEVkQlFVb3NTVUZCVnl4TlFVRm9RaXhGUVVGM1FqdEJRVU53UWl4blFrRkJTU3hQUVVGUExHTkJRVkFzUTBGQmMwSXNSMEZCZEVJc1EwRkJTaXhGUVVGblF6dEJRVU0xUWl4dlFrRkJUU3hSUVVGUkxFOUJRVThzUjBGQlVDeERRVUZTTEVOQlJITkNPekpDUVVWSUxFTkJRVU1zVFVGQlRTeEpRVUZPTEVWQlFWa3NUVUZCVFN4RlFVRk9MRVZCUmxZN1FVRkZNMElzYzBKQlFVMHNSVUZCVGl4WFFVWXlRanRCUVVWcVFpeHpRa0ZCVFN4SlFVRk9MRmRCUm1sQ08yRkJRV2hETzFOQlJFbzdPMEZCVDBFc1pVRkJUeXhKUVVGUUxFTkJXbE03T3p0QlFURkVTU3h2UWtGNVJXcENMRFpDUVVGVk8wRkJRMDRzWVVGQlN5eGhRVUZNTEVsQlFYTkNMRU5CUVVNc1EwRkJSQ3hEUVVSb1FqdEJRVVZPTEdWQlFVOHNTVUZCVUN4RFFVWk5PenM3UVVGNlJVOHNiMEpCT0VWcVFpdzJRa0ZCVlR0QlFVTk9MR0ZCUVVzc1QwRkJUQ3hIUVVGbExFbEJRVU1zUTBGQlN5eGhRVUZNTEV0QlFYVkNMRU5CUVhaQ0xFZEJRVFJDTEVOQlFUZENMRWRCUVdsRExFdEJRVXNzVVVGQlRDeERRVVF4UXp0QlFVVk9MR0ZCUVVzc1QwRkJUQ3hIUVVGbExIbENRVUZtTEVOQlJrMDdRVUZIVGl4bFFVRlBMRWxCUVZBc1EwRklUVHM3TzBGQk9VVlBMRzlDUVc5R2FrSXNjVUpCUVVzc1ZVRkJWVHRCUVVOWUxHRkJRVXNzVVVGQlRDeERRVUZqTEV0QlFVc3NVVUZCVEN4SFFVRm5RaXhSUVVGb1FpeERRVUZrTEVOQlJGYzdRVUZGV0N4bFFVRlBMRWxCUVZBc1EwRkdWenM3TzBGQmNFWkZMRzlDUVhsR2FrSXNOa0pCUVZNc1UwRkJVenRCUVVOa0xHRkJRVXNzU1VGQlRDeEhRVVJqTzBGQlJXUXNZVUZCU3l4UFFVRk1MRWRCUVdVc1QwRkJaaXhEUVVaak96dEJRVWxrTEdWQlFVOHNTVUZCVUN4RFFVcGpPenM3UVVGNlJrUXNiMEpCWjBkcVFpdzJRMEZCYTBJN1FVRkRaQ3cwUWtGRFR5eHJRa0ZCVFN4bFFVRk9PMEZCUTBnc2JVSkJRVThzUTBGQlVEdEJRVU5CTEc5Q1FVRlJMRU5CUVZJN1FVRkRRU3h6UWtGQlZTeEhRVUZXTzBGQlEwRXNhMEpCUVUwc1MwRkJUanRCUVVOQkxHdENRVUZOTEV0QlFVNDdRVUZEUVN4clFrRkJUU3hMUVVGT08wRkJRMEVzTWtKQlFXVXNRMEZCWmp0QlFVTkJMRzFDUVVGUExFdEJRVkE3UVVGRFFTeHhRa0ZCVXl4RFFVRlVPMVZCVmtvc1EwRkVZenM3TzBGQmFFZEVMRzlDUVN0SGFrSXNOa05CUVd0Q08wRkJRMlFzTkVKQlEwOHNhMEpCUVUwc1pVRkJUanRCUVVOSUxHMUNRVUZQTEVOQlFWQTdRVUZEUVN4elFrRkJWU3hIUVVGV08wRkJRMEVzYTBKQlFVMHNkVUpCUVU4c1QwRkJVRHRCUVVOT0xIRkNRVUZUTEVOQlFWUTdRVUZEUVN4eFFrRkJVeXhEUVVGVU8wRkJRMEVzYlVKQlFVOHNRMEZCVUR0QlFVTkJMR3RDUVVGTkxFTkJRVTQ3UVVGRFFTeG5Ra0ZCU1N4RFFVRktPMEZCUTBFc2JVSkJRVThzUzBGQlVEdFZRVlpLTEVOQlJHTTdPenRCUVM5SFJDeHZRa0U0U0dwQ0xIRkVRVUZ6UWp0QlFVTnNRaXhsUVVGUExFbEJRVkFzUTBGRWEwSTdPenRYUVRsSVRDSXNJbVpwYkdVaU9pSlVkMlZsYmk1cWN5SXNJbk52ZFhKalpWSnZiM1FpT2lJdlZYTmxjbk12VFdGMGRDOVRhWFJsY3k5d2IzQnRiM1JwYjI0aUxDSnpiM1Z5WTJWelEyOXVkR1Z1ZENJNld5SnBiWEJ2Y25RZ1FXTjBhVzl1SUdaeWIyMGdKeTR2UVdOMGFXOXVKenRjYm1sdGNHOXlkQ0JsWVhOcGJtY2dabkp2YlNBbkxpOWxZWE5wYm1jdmNISmxjMlYwTFdWaGMybHVaeWM3WEc1cGJYQnZjblFnZXlCamRYSnlaVzUwVkdsdFpTd2dhWE5PZFcwZ2ZTQm1jbTl0SUNjdUxpOXBibU12ZFhScGJITW5PMXh1YVcxd2IzSjBJSHRjYmlBZ0lDQnlaWE4wY21samRDeGNiaUFnSUNCblpYUlFjbTluY21WemMwWnliMjFXWVd4MVpTeGNiaUFnSUNCblpYUldZV3gxWlVaeWIyMVFjbTluY21WemN5eGNiaUFnSUNCemRHVndVSEp2WjNKbGMzTmNibjBnWm5KdmJTQW5MaTR2YVc1akwyTmhiR01uTzF4dVhHNWpiMjV6ZENCRFQxVk9WQ0E5SUNkRGIzVnVkQ2M3WEc1amIyNXpkQ0JPUlZoVVgxTlVSVkJUSUQwZ2UxeHVJQ0FnSUd4dmIzQTZJQ2R5WlhOMFlYSjBKeXhjYmlBZ0lDQjViM2x2T2lBbmNtVjJaWEp6WlNjc1hHNGdJQ0FnWm14cGNEb2dKMlpzYVhCV1lXeDFaWE1uWEc1OU8xeHVYRzR2S2x4dUlDQWdJRVZoYzJVZ2RtRnNkV1VnZDJsMGFHbHVJSEpoYm1kbFpDQndZWEpoYldWMFpYSnpYRzRnSUNBZ1hHNGdJQ0FnUUhCaGNtRnRJRnR1ZFcxaVpYSmRPaUJRY205bmNtVnpjeUJpWlhSM1pXVnVJREFnWVc1a0lERmNiaUFnSUNCQWNHRnlZVzBnVzI1MWJXSmxjbDA2SUZaaGJIVmxJRzltSURBZ2NISnZaM0psYzNOY2JpQWdJQ0JBY0dGeVlXMGdXMjUxYldKbGNsMDZJRlpoYkhWbElHOW1JREVnY0hKdlozSmxjM05jYmlBZ0lDQkFjR0Z5WVcwZ1czTjBjbWx1WnlCOGZDQm1kVzVqZEdsdmJsMDZJRTVoYldVZ2IyWWdjSEpsYzJWMElHVmhjMmx1WjF4dUlDQWdJQ0FnSUNCMGJ5QjFjMlVnYjNJZ1oyVnVaWEpoZEdWa0lHVmhjMmx1WnlCbWRXNWpkR2x2Ymx4dUlDQWdJRUJ5WlhSMWNtNGdXMjUxYldKbGNsMDZJRlpoYkhWbElHOW1JR1ZoYzJWa0lIQnliMmR5WlhOeklHbHVJSEpoYm1kbFhHNHFMeUJjYm1OdmJuTjBJR1ZoYzJVZ1BTQW9jSEp2WjNKbGMzTXNJR1p5YjIwc0lIUnZMQ0JsWVhObEtTQTlQaUI3WEc0Z0lDQWdZMjl1YzNRZ2NISnZaM0psYzNOTWFXMXBkR1ZrSUQwZ2NtVnpkSEpwWTNRb2NISnZaM0psYzNNc0lEQXNJREVwTzF4dUlDQWdJR052Ym5OMElHVmhjMlZrVUhKdlozSmxjM01nUFNCbFlYTmxLSEJ5YjJkeVpYTnpUR2x0YVhSbFpDazdYRzVjYmlBZ0lDQnlaWFIxY200Z1oyVjBWbUZzZFdWR2NtOXRVSEp2WjNKbGMzTW9aV0Z6WldSUWNtOW5jbVZ6Y3l3Z1puSnZiU3dnZEc4cE8xeHVmVHRjYmx4dVpYaHdiM0owSUdSbFptRjFiSFFnWTJ4aGMzTWdWSGRsWlc0Z1pYaDBaVzVrY3lCQlkzUnBiMjRnZTF4dUlDQWdJSE4wWVhKMEtDa2dlMXh1SUNBZ0lDQWdJQ0J6ZFhCbGNpNXpkR0Z5ZENncE8xeHVJQ0FnSUNBZ0lDQjBhR2x6TG1Wc1lYQnpaV1FnUFNBd08xeHVJQ0FnSUNBZ0lDQjBhR2x6TG1ac2FYQkRiM1Z1ZENBOUlIUm9hWE11ZVc5NWIwTnZkVzUwSUQwZ2RHaHBjeTVzYjI5d1EyOTFiblFnUFNBd08xeHVYRzRnSUNBZ0lDQWdJSEpsZEhWeWJpQjBhR2x6TzF4dUlDQWdJSDFjYmx4dUlDQWdJRzl1VlhCa1lYUmxLSFIzWldWdUxDQm1jbUZ0WlZOMFlXMXdMQ0JsYkdGd2MyVmtLU0I3WEc0Z0lDQWdJQ0FnSUdOdmJuTjBJSEJ5YjJkeVpYTnpWR0Z5WjJWMElEMGdLSFJvYVhNdWNHeGhlVVJwY21WamRHbHZiaUE5UFQwZ01Ta2dQeUF4SURvZ01EdGNibHh1SUNBZ0lDQWdJQ0IwYUdsekxtVnVaR1ZrSUQwZ2RISjFaVHRjYmlBZ0lDQWdJQ0FnZEdocGN5NWxiR0Z3YzJWa0lDczlJQ2hsYkdGd2MyVmtJQ29nZEdocGN5NWthV3hoZEdVcElDb2dkR2hwY3k1d2JHRjVSR2x5WldOMGFXOXVPMXh1WEc0Z0lDQWdJQ0FnSUdadmNpQW9iR1YwSUdrZ1BTQXdPeUJwSUR3Z2RHaHBjeTV1ZFcxV1lXeDFaVXRsZVhNN0lHa3JLeWtnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdZMjl1YzNRZ2EyVjVJRDBnZEdocGN5NTJZV3gxWlV0bGVYTmJhVjA3WEc0Z0lDQWdJQ0FnSUNBZ0lDQmpiMjV6ZENCMllXeDFaU0E5SUhSb2FYTXVkbUZzZFdWelcydGxlVjA3WEc1Y2JpQWdJQ0FnSUNBZ0lDQWdJR3hsZENCd2NtOW5jbVZ6Y3lBOUlISmxjM1J5YVdOMEtHZGxkRkJ5YjJkeVpYTnpSbkp2YlZaaGJIVmxLSFJvYVhNdVpXeGhjSE5sWkNBdElIWmhiSFZsTG1SbGJHRjVMQ0F3TENCMllXeDFaUzVrZFhKaGRHbHZiaWtzSURBc0lERXBPMXh1WEc0Z0lDQWdJQ0FnSUNBZ0lDQXZMeUJOWVhKcklGUjNaV1Z1SUdGeklFNVBWQ0JsYm1SbFpDQnBaaUJ6ZEdsc2JDQnBiaUJ3Y205bmNtVnpjMXh1SUNBZ0lDQWdJQ0FnSUNBZ2FXWWdLSEJ5YjJkeVpYTnpJQ0U5UFNCd2NtOW5jbVZ6YzFSaGNtZGxkQ2tnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUhSb2FYTXVaVzVrWldRZ1BTQm1ZV3h6WlR0Y2JpQWdJQ0FnSUNBZ0lDQWdJSDFjYmx4dUlDQWdJQ0FnSUNBZ0lDQWdMeThnVTNSbGNDQndjbTluY21WemN5QnBaaUIzWlNkeVpTQnpkR1Z3Y0dsdVoxeHVJQ0FnSUNBZ0lDQWdJQ0FnYVdZZ0tIWmhiSFZsTG5OMFpYQnpLU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnY0hKdlozSmxjM01nUFNCemRHVndVSEp2WjNKbGMzTW9jSEp2WjNKbGMzTXNJSFpoYkhWbExuTjBaWEJ6S1R0Y2JpQWdJQ0FnSUNBZ0lDQWdJSDFjYmx4dUlDQWdJQ0FnSUNBZ0lDQWdMeThnUldGelpTQndjbTluY21WemMxeHVJQ0FnSUNBZ0lDQWdJQ0FnZG1Gc2RXVXVZM1Z5Y21WdWRDQTlJR1ZoYzJVb2NISnZaM0psYzNNc0lIWmhiSFZsTG1aeWIyMHNJSFpoYkhWbExuUnZMQ0IyWVd4MVpTNWxZWE5sS1R0Y2JpQWdJQ0FnSUNBZ2ZWeHVJQ0FnSUgxY2JseHVJQ0FnSUc5dVJuSmhiV1ZGYm1Rb0tTQjdYRzRnSUNBZ0lDQWdJR2xtSUNoMGFHbHpMbVZ1WkdWa0tTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNCc1pYUWdjM1JsY0ZSaGEyVnVJRDBnWm1Gc2MyVTdYRzVjYmlBZ0lDQWdJQ0FnSUNBZ0lHWnZjaUFvYkdWMElHdGxlU0JwYmlCT1JWaFVYMU5VUlZCVEtTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdhV1lnS0U1RldGUmZVMVJGVUZNdWFHRnpUM2R1VUhKdmNHVnlkSGtvYTJWNUtTa2dlMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCamIyNXpkQ0J0WVhoVGRHVndjeUE5SUhSb2FYTmJhMlY1WFR0Y2JseHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0JwWmlBb2JXRjRVM1JsY0hNZ1BUMDlJSFJ5ZFdVZ2ZId2dLR2x6VG5WdEtHMWhlRk4wWlhCektTQW1KaUJ0WVhoVGRHVndjeUErSUhSb2FYTmJhMlY1SUNzZ1EwOVZUbFJkS1NrZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2RHaHBjMXRyWlhrZ0t5QkRUMVZPVkYwckt6dGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lITjBaWEJVWVd0bGJpQTlJSFJ5ZFdVN1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCMGFHbHpXMDVGV0ZSZlUxUkZVRk5iYTJWNVhWMG9LVHRjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2ZWeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lIMWNiaUFnSUNBZ0lDQWdJQ0FnSUgxY2JseHVJQ0FnSUNBZ0lDQWdJQ0FnYVdZZ0tDRnpkR1Z3VkdGclpXNHBJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0IwYUdsekxuTjBiM0FvS1R0Y2JpQWdJQ0FnSUNBZ0lDQWdJSDFjYmlBZ0lDQWdJQ0FnZlZ4dUlDQWdJSDFjYmx4dUlDQWdJR1pzYVhCV1lXeDFaWE1vS1NCN1hHNGdJQ0FnSUNBZ0lHTnZibk4wSUhaaGJIVmxjeUE5SUhSb2FYTXVkbUZzZFdWek8xeHVYRzRnSUNBZ0lDQWdJSFJvYVhNdVpXeGhjSE5sWkNBOUlIUm9hWE11WkhWeVlYUnBiMjRnTFNCMGFHbHpMbVZzWVhCelpXUTdYRzVjYmlBZ0lDQWdJQ0FnWm05eUlDaHNaWFFnYTJWNUlHbHVJSFpoYkhWbGN5a2dlMXh1SUNBZ0lDQWdJQ0FnSUNBZ2FXWWdLSFpoYkhWbGN5NW9ZWE5QZDI1UWNtOXdaWEowZVNoclpYa3BLU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnWTI5dWMzUWdkbUZzZFdVZ1BTQjJZV3gxWlhOYmEyVjVYVHRjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0JiZG1Gc2RXVXVkRzhzSUhaaGJIVmxMbVp5YjIxZElEMGdXM1poYkhWbExtWnliMjBzSUhaaGJIVmxMblJ2WFR0Y2JpQWdJQ0FnSUNBZ0lDQWdJSDFjYmlBZ0lDQWdJQ0FnZlZ4dVhHNGdJQ0FnSUNBZ0lISmxkSFZ5YmlCMGFHbHpPMXh1SUNBZ0lIMWNibHh1SUNBZ0lISmxkbVZ5YzJVb0tTQjdYRzRnSUNBZ0lDQWdJSFJvYVhNdWNHeGhlVVJwY21WamRHbHZiaUFxUFNBdE1UdGNiaUFnSUNBZ0lDQWdjbVYwZFhKdUlIUm9hWE03WEc0Z0lDQWdmVnh1WEc0Z0lDQWdjbVZ6ZEdGeWRDZ3BJSHRjYmlBZ0lDQWdJQ0FnZEdocGN5NWxiR0Z3YzJWa0lEMGdLSFJvYVhNdWNHeGhlVVJwY21WamRHbHZiaUE5UFQwZ01Ta2dQeUF3SURvZ2RHaHBjeTVrZFhKaGRHbHZianRjYmlBZ0lDQWdJQ0FnZEdocGN5NXpkR0Z5ZEdWa0lEMGdZM1Z5Y21WdWRGUnBiV1VvS1R0Y2JpQWdJQ0FnSUNBZ2NtVjBkWEp1SUhSb2FYTTdYRzRnSUNBZ2ZWeHVYRzRnSUNBZ2MyVmxheWh3Y205bmNtVnpjeWtnZTF4dUlDQWdJQ0FnSUNCMGFHbHpMbk5sWld0VWFXMWxLSFJvYVhNdVpIVnlZWFJwYjI0Z0tpQndjbTluY21WemN5azdYRzRnSUNBZ0lDQWdJSEpsZEhWeWJpQjBhR2x6TzF4dUlDQWdJSDFjYmx4dUlDQWdJSE5sWld0VWFXMWxLR1ZzWVhCelpXUXBJSHRjYmlBZ0lDQWdJQ0FnZEdocGN5NXZibU5sS0NrN1hHNGdJQ0FnSUNBZ0lIUm9hWE11Wld4aGNITmxaQ0E5SUdWc1lYQnpaV1E3WEc1Y2JpQWdJQ0FnSUNBZ2NtVjBkWEp1SUhSb2FYTTdYRzRnSUNBZ2ZWeHVJQ0FnSUZ4dUlDQWdJR2RsZEVSbFptRjFiSFJRY205d2N5Z3BJSHRjYmlBZ0lDQWdJQ0FnY21WMGRYSnVJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lDNHVMbk4xY0dWeUxtZGxkRVJsWm1GMWJIUlFjbTl3Y3lncExGeHVJQ0FnSUNBZ0lDQWdJQ0FnWkdWc1lYazZJREFzWEc0Z0lDQWdJQ0FnSUNBZ0lDQmthV3hoZEdVNklERXNYRzRnSUNBZ0lDQWdJQ0FnSUNCa2RYSmhkR2x2YmpvZ016QXdMRnh1SUNBZ0lDQWdJQ0FnSUNBZ2JHOXZjRG9nWm1Gc2MyVXNYRzRnSUNBZ0lDQWdJQ0FnSUNCNWIzbHZPaUJtWVd4elpTeGNiaUFnSUNBZ0lDQWdJQ0FnSUdac2FYQTZJR1poYkhObExGeHVJQ0FnSUNBZ0lDQWdJQ0FnY0d4aGVVUnBjbVZqZEdsdmJqb2dNU3hjYmlBZ0lDQWdJQ0FnSUNBZ0lHVnVaR1ZrT2lCbVlXeHpaU3hjYmlBZ0lDQWdJQ0FnSUNBZ0lHVnNZWEJ6WldRNklEQmNiaUFnSUNBZ0lDQWdmVHRjYmlBZ0lDQjlYRzVjYmlBZ0lDQm5aWFJFWldaaGRXeDBWbUZzZFdVb0tTQjdYRzRnSUNBZ0lDQWdJSEpsZEhWeWJpQjdYRzRnSUNBZ0lDQWdJQ0FnSUNBdUxpNXpkWEJsY2k1blpYUkVaV1poZFd4MFZtRnNkV1VvS1N4Y2JpQWdJQ0FnSUNBZ0lDQWdJR1JsYkdGNU9pQXdMRnh1SUNBZ0lDQWdJQ0FnSUNBZ1pIVnlZWFJwYjI0NklETXdNQ3hjYmlBZ0lDQWdJQ0FnSUNBZ0lHVmhjMlU2SUdWaGMybHVaeTVsWVhObFQzVjBMRnh1SUNBZ0lDQWdJQ0FnSUNBZ1pXeGhjSE5sWkRvZ01DeGNiaUFnSUNBZ0lDQWdJQ0FnSUhOMFlXZG5aWEk2SURBc1hHNGdJQ0FnSUNBZ0lDQWdJQ0J6ZEdWd2N6b2dNQ3hjYmlBZ0lDQWdJQ0FnSUNBZ0lHWnliMjA2SURBc1hHNGdJQ0FnSUNBZ0lDQWdJQ0IwYnpvZ01DeGNiaUFnSUNBZ0lDQWdJQ0FnSUhKdmRXNWtPaUJtWVd4elpWeHVJQ0FnSUNBZ0lDQjlPMXh1SUNBZ0lIMWNibHh1SUNBZ0lHZGxkRVJsWm1GMWJIUldZV3gxWlZCeWIzQW9LU0I3WEc0Z0lDQWdJQ0FnSUhKbGRIVnliaUFuZEc4bk8xeHVJQ0FnSUgxY2JuMWNiaUpkZlE9PVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvYWN0aW9ucy9Ud2Vlbi5qc1xuICoqIG1vZHVsZSBpZCA9IDRcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxudmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF9BY3Rpb24yID0gcmVxdWlyZSgnLi9BY3Rpb24nKTtcblxudmFyIF9BY3Rpb24zID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfQWN0aW9uMik7XG5cbnZhciBfY2FsYyA9IHJlcXVpcmUoJy4uL2luYy9jYWxjJyk7XG5cbnZhciBfdXRpbHMgPSByZXF1aXJlKCcuLi9pbmMvdXRpbHMnKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoIXNlbGYpIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBjYWxsICYmICh0eXBlb2YgY2FsbCA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSA/IGNhbGwgOiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90IFwiICsgdHlwZW9mIHN1cGVyQ2xhc3MpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIGVudW1lcmFibGU6IGZhbHNlLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIDogc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzczsgfVxuXG52YXIgUGh5c2ljcyA9IGZ1bmN0aW9uIChfQWN0aW9uKSB7XG4gICAgX2luaGVyaXRzKFBoeXNpY3MsIF9BY3Rpb24pO1xuXG4gICAgZnVuY3Rpb24gUGh5c2ljcygpIHtcbiAgICAgICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFBoeXNpY3MpO1xuXG4gICAgICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICAgICAgICBhcmdzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIF90aGlzID0gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgX0FjdGlvbi5jYWxsLmFwcGx5KF9BY3Rpb24sIFt0aGlzXS5jb25jYXQoYXJncykpKTtcblxuICAgICAgICBfdGhpcy5pbmFjdGl2ZUZyYW1lcyA9IDA7XG4gICAgICAgIF90aGlzLmNhbGN1bGF0ZXNWZWxvY2l0eSA9IHRydWU7XG4gICAgICAgIHJldHVybiBfdGhpcztcbiAgICB9XG5cbiAgICBQaHlzaWNzLnByb3RvdHlwZS5vblVwZGF0ZSA9IGZ1bmN0aW9uIG9uVXBkYXRlKHBoeXNpY3MsIGZyYW1lU3RhbXAsIGVsYXBzZWQpIHtcbiAgICAgICAgdGhpcy5oYXNDaGFuZ2VkID0gZmFsc2U7XG5cbiAgICAgICAgZm9yICh2YXIga2V5IGluIHRoaXMudmFsdWVzKSB7XG4gICAgICAgICAgICBpZiAodGhpcy52YWx1ZXMuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgICAgICAgIHZhciB2YWx1ZSA9IHRoaXMudmFsdWVzW2tleV07XG4gICAgICAgICAgICAgICAgdmFyIHByZXZpb3VzVmFsdWUgPSB2YWx1ZS5jdXJyZW50O1xuXG4gICAgICAgICAgICAgICAgLy8gQXBwbHkgYWNjZWxlcmF0aW9uXG4gICAgICAgICAgICAgICAgdmFsdWUudmVsb2NpdHkgKz0gKDAsIF9jYWxjLnNwZWVkUGVyRnJhbWUpKHZhbHVlLmZvcmNlLCBlbGFwc2VkKTtcblxuICAgICAgICAgICAgICAgIC8vIEFwcGx5IGZyaWN0aW9uXG4gICAgICAgICAgICAgICAgdmFsdWUudmVsb2NpdHkgKj0gTWF0aC5wb3coMSAtIHZhbHVlLmZyaWN0aW9uLCBlbGFwc2VkIC8gMTAwKTtcblxuICAgICAgICAgICAgICAgIC8vIEFwcGx5IHNwcmluZ1xuICAgICAgICAgICAgICAgIGlmICh2YWx1ZS5zcHJpbmcgJiYgKDAsIF91dGlscy5pc051bSkodmFsdWUudG8pKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBkaXN0YW5jZVRvVGFyZ2V0ID0gdmFsdWUudG8gLSB2YWx1ZS5jdXJyZW50O1xuICAgICAgICAgICAgICAgICAgICB2YWx1ZS52ZWxvY2l0eSArPSBkaXN0YW5jZVRvVGFyZ2V0ICogKDAsIF9jYWxjLnNwZWVkUGVyRnJhbWUpKHZhbHVlLnNwcmluZywgZWxhcHNlZCk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLy8gQXBwbHkgbGF0ZXN0IHZlbG9jaXR5XG4gICAgICAgICAgICAgICAgdmFsdWUuY3VycmVudCArPSAoMCwgX2NhbGMuc3BlZWRQZXJGcmFtZSkodmFsdWUudmVsb2NpdHksIGVsYXBzZWQpO1xuXG4gICAgICAgICAgICAgICAgLy8gQ2hlY2sgaWYgdmFsdWUgaGFzIGNoYW5nZWRcbiAgICAgICAgICAgICAgICBpZiAodmFsdWUuY3VycmVudCAhPT0gcHJldmlvdXNWYWx1ZSB8fCBNYXRoLmFicyh2YWx1ZS52ZWxvY2l0eSkgPj0gdmFsdWUuc3RvcFNwZWVkIHx8IHZhbHVlLnNwcmluZyAmJiB2YWx1ZS5jdXJyZW50ICE9PSB2YWx1ZS50bykge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmhhc0NoYW5nZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBQaHlzaWNzLnByb3RvdHlwZS5vbkZyYW1lRW5kID0gZnVuY3Rpb24gb25GcmFtZUVuZCgpIHtcbiAgICAgICAgaWYgKHRoaXMuYXV0b0VuZCkge1xuICAgICAgICAgICAgdGhpcy5pbmFjdGl2ZUZyYW1lcyA9IHRoaXMuaGFzQ2hhbmdlZCA/IDEgOiB0aGlzLmluYWN0aXZlRnJhbWVzICsgMTtcblxuICAgICAgICAgICAgaWYgKHRoaXMuaW5hY3RpdmVGcmFtZXMgPj0gdGhpcy5tYXhJbmFjdGl2ZUZyYW1lcykge1xuICAgICAgICAgICAgICAgIHRoaXMuc3RvcCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcblxuICAgIC8qXG4gICAgICAgICMgR2V0IGRlZmF1bHQgU2ltdWxhdGUgcHJvcHNcbiAgICAgICAgIEByZXR1cm4gW29iamVjdF1cbiAgICAqL1xuXG4gICAgUGh5c2ljcy5wcm90b3R5cGUuZ2V0RGVmYXVsdFByb3BzID0gZnVuY3Rpb24gZ2V0RGVmYXVsdFByb3BzKCkge1xuICAgICAgICByZXR1cm4gX2V4dGVuZHMoe30sIF9BY3Rpb24ucHJvdG90eXBlLmdldERlZmF1bHRQcm9wcy5jYWxsKHRoaXMpLCB7XG4gICAgICAgICAgICBhdXRvRW5kOiB0cnVlLFxuICAgICAgICAgICAgbWF4SW5hY3RpdmVGcmFtZXM6IDNcbiAgICAgICAgfSk7XG4gICAgfTtcblxuICAgIC8qXG4gICAgICAgICMgR2V0IGRlZmF1bHQgU2ltdWxhdGUgdmFsdWUgcHJvcHNcbiAgICAgICAgIEByZXR1cm4gW29iamVjdF1cbiAgICAqL1xuXG4gICAgUGh5c2ljcy5wcm90b3R5cGUuZ2V0RGVmYXVsdFZhbHVlID0gZnVuY3Rpb24gZ2V0RGVmYXVsdFZhbHVlKCkge1xuICAgICAgICByZXR1cm4gX2V4dGVuZHMoe30sIF9BY3Rpb24ucHJvdG90eXBlLmdldERlZmF1bHRWYWx1ZS5jYWxsKHRoaXMpLCB7XG4gICAgICAgICAgICBmb3JjZTogMCwgLy8gW251bWJlcl06IEFjY2VsZXJhdGlvbiB0byBhcHBseSB0byB2YWx1ZSwgaW4gdW5pdHMgcGVyIHNlY29uZFxuICAgICAgICAgICAgYm91bmNlOiAwLCAvLyBbbnVtYmVyXTogRmFjdG9yIHRvIG11bHRpcGx5IHZlbG9jaXR5IGJ5IG9uIGJvdW5jZVxuICAgICAgICAgICAgc3ByaW5nOiAwLCAvLyBbbnVtYmVyXTogU3ByaW5nIHN0cmVuZ3RoIGR1cmluZyAnc3RyaW5nJ1xuICAgICAgICAgICAgc3RvcFNwZWVkOiAwLjAwMDEsIC8vIFtudW1iZXJdOiBTdG9wIHNpbXVsYXRpb24gdW5kZXIgdGhpcyBzcGVlZFxuICAgICAgICAgICAgZnJpY3Rpb246IDAgLy8gW251bWJlcl06IEZyaWN0aW9uIHRvIGFwcGx5IHBlciBmcmFtZSwgMC0xXG4gICAgICAgIH0pO1xuICAgIH07XG5cbiAgICAvKlxuICAgICAgICAjIEdldCBkZWZhdWx0IFNpbXVsYXRlIHZhbHVlIHByb3BlcnR5IG5hbWVcbiAgICAgICAgIyMgU2V0IHZhbHVlcyB0byB0aGlzIHdoZW4gYSBgdmFsdWVgIGlzIG5vdCBwcm92aWRlZCBhcyBhbiBvYmplY3RcbiAgICAgICAgIEByZXR1cm4gW3N0cmluZ11cbiAgICAqL1xuXG4gICAgUGh5c2ljcy5wcm90b3R5cGUuZ2V0RGVmYXVsdFZhbHVlUHJvcCA9IGZ1bmN0aW9uIGdldERlZmF1bHRWYWx1ZVByb3AoKSB7XG4gICAgICAgIHJldHVybiAndmVsb2NpdHknO1xuICAgIH07XG5cbiAgICByZXR1cm4gUGh5c2ljcztcbn0oX0FjdGlvbjMuZGVmYXVsdCk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IFBoeXNpY3M7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5OeVl5OWhZM1JwYjI1ekwxQm9lWE5wWTNNdWFuTWlYU3dpYm1GdFpYTWlPbHRkTENKdFlYQndhVzVuY3lJNklqczdPenM3T3pzN096czdPenM3T3pzN096czdPenRKUVVseFFqczdPMEZCUldwQ0xHRkJSbWxDTEU5QlJXcENMRWRCUVhGQ096aENRVVpLTEZOQlJVazdPekJEUVVGT096dFRRVUZOT3p0eFJFRkRha0lzTUVOQlFWTXNTMEZCVkN4SFFVUnBRanM3UVVGRmFrSXNZMEZCU3l4alFVRk1MRWRCUVhOQ0xFTkJRWFJDTEVOQlJtbENPMEZCUjJwQ0xHTkJRVXNzYTBKQlFVd3NSMEZCTUVJc1NVRkJNVUlzUTBGSWFVSTdPMHRCUVhKQ096dEJRVVpwUWl4elFrRlJha0lzTmtKQlFWTXNVMEZCVXl4WlFVRlpMRk5CUVZNN1FVRkRia01zWVVGQlN5eFZRVUZNTEVkQlFXdENMRXRCUVd4Q0xFTkJSRzFET3p0QlFVZHVReXhoUVVGTExFbEJRVWtzUjBGQlNpeEpRVUZYTEV0QlFVc3NUVUZCVEN4RlFVRmhPMEZCUTNwQ0xHZENRVUZKTEV0QlFVc3NUVUZCVEN4RFFVRlpMR05CUVZvc1EwRkJNa0lzUjBGQk0wSXNRMEZCU2l4RlFVRnhRenRCUVVOcVF5eHZRa0ZCVFN4UlFVRlJMRXRCUVVzc1RVRkJUQ3hEUVVGWkxFZEJRVm9zUTBGQlVpeERRVVF5UWp0QlFVVnFReXh2UWtGQlRTeG5Ra0ZCWjBJc1RVRkJUU3hQUVVGT096czdRVUZHVnl4eFFrRkxha01zUTBGQlRTeFJRVUZPTEVsQlFXdENMSGxDUVVGakxFMUJRVTBzUzBGQlRpeEZRVUZoTEU5QlFUTkNMRU5CUVd4Q096czdRVUZNYVVNc2NVSkJVV3BETEVOQlFVMHNVVUZCVGl4aFFVRnRRaXhKUVVGSkxFMUJRVTBzVVVGQlRpeEZRVUZ2UWl4VlFVRlZMRWRCUVZZc1EwRkJNME03T3p0QlFWSnBReXh2UWtGWE4wSXNUVUZCVFN4TlFVRk9MRWxCUVdkQ0xHdENRVUZOTEUxQlFVMHNSVUZCVGl4RFFVRjBRaXhGUVVGcFF6dEJRVU5xUXl4M1FrRkJUU3h0UWtGQmJVSXNUVUZCVFN4RlFVRk9MRWRCUVZjc1RVRkJUU3hQUVVGT0xFTkJSRWc3UVVGRmFrTXNNRUpCUVUwc1VVRkJUaXhKUVVGclFpeHRRa0ZCYlVJc2VVSkJRV01zVFVGQlRTeE5RVUZPTEVWQlFXTXNUMEZCTlVJc1EwRkJia0lzUTBGR1pUdHBRa0ZCY2tNN096dEJRVmhwUXl4eFFrRnBRbXBETEVOQlFVMHNUMEZCVGl4SlFVRnBRaXg1UWtGQll5eE5RVUZOTEZGQlFVNHNSVUZCWjBJc1QwRkJPVUlzUTBGQmFrSTdPenRCUVdwQ2FVTXNiMEpCYjBJM1FpeE5RVUZOTEU5QlFVNHNTMEZCYTBJc1lVRkJiRUlzU1VGQmJVTXNTMEZCU3l4SFFVRk1MRU5CUVZNc1RVRkJUU3hSUVVGT0xFTkJRVlFzU1VGQk5FSXNUVUZCVFN4VFFVRk9MRWxCUVc5Q0xFMUJRVTBzVFVGQlRpeEpRVUZuUWl4TlFVRk5MRTlCUVU0c1MwRkJhMElzVFVGQlRTeEZRVUZPTEVWQlFWYzdRVUZEYUVrc2VVSkJRVXNzVlVGQlRDeEhRVUZyUWl4SlFVRnNRaXhEUVVSblNUdHBRa0ZCY0VrN1lVRndRa283VTBGRVNqczdPMEZCV0dFc2MwSkJkVU5xUWl4dFEwRkJZVHRCUVVOVUxGbEJRVWtzUzBGQlN5eFBRVUZNTEVWQlFXTTdRVUZEWkN4cFFrRkJTeXhqUVVGTUxFZEJRWE5DTEV0QlFVc3NWVUZCVEN4SFFVRnJRaXhEUVVGc1FpeEhRVUZ6UWl4TFFVRkxMR05CUVV3c1IwRkJjMElzUTBGQmRFSXNRMEZFT1VJN08wRkJSMlFzWjBKQlFVa3NTMEZCU3l4alFVRk1MRWxCUVhWQ0xFdEJRVXNzYVVKQlFVd3NSVUZCZDBJN1FVRkRMME1zY1VKQlFVc3NTVUZCVEN4SFFVUXJRenRoUVVGdVJEdFRRVWhLT3pzN096czdPenRCUVhoRFlTeHpRa0Z6UkdwQ0xEWkRRVUZyUWp0QlFVTmtMRFJDUVVOUExHdENRVUZOTEdWQlFVNDdRVUZEU0N4eFFrRkJVeXhKUVVGVU8wRkJRMEVzSzBKQlFXMUNMRU5CUVc1Q08xVkJTRW9zUTBGRVl6czdPenM3T3pzN1FVRjBSRVFzYzBKQmJVVnFRaXcyUTBGQmEwSTdRVUZEWkN3MFFrRkRUeXhyUWtGQlRTeGxRVUZPTzBGQlEwZ3NiVUpCUVU4c1EwRkJVRHRCUVVOQkxHOUNRVUZSTEVOQlFWSTdRVUZEUVN4dlFrRkJVU3hEUVVGU08wRkJRMEVzZFVKQlFWY3NUVUZCV0R0QlFVTkJMSE5DUVVGVkxFTkJRVlk3VlVGT1NpeERRVVJqT3pzN096czdPenM3UVVGdVJVUXNjMEpCYjBacVFpeHhSRUZCYzBJN1FVRkRiRUlzWlVGQlR5eFZRVUZRTEVOQlJHdENPenM3VjBGd1Jrd2lMQ0ptYVd4bElqb2lVR2g1YzJsamN5NXFjeUlzSW5OdmRYSmpaVkp2YjNRaU9pSXZWWE5sY25NdlRXRjBkQzlUYVhSbGN5OXdiM0J0YjNScGIyNGlMQ0p6YjNWeVkyVnpRMjl1ZEdWdWRDSTZXeUpwYlhCdmNuUWdRV04wYVc5dUlHWnliMjBnSnk0dlFXTjBhVzl1Snp0Y2JtbHRjRzl5ZENCN0lITndaV1ZrVUdWeVJuSmhiV1VnZlNCbWNtOXRJQ2N1TGk5cGJtTXZZMkZzWXljN1hHNXBiWEJ2Y25RZ2V5QnBjMDUxYlNCOUlHWnliMjBnSnk0dUwybHVZeTkxZEdsc2N5YzdYRzVjYm1WNGNHOXlkQ0JrWldaaGRXeDBJR05zWVhOeklGQm9lWE5wWTNNZ1pYaDBaVzVrY3lCQlkzUnBiMjRnZTF4dVhHNGdJQ0FnWTI5dWMzUnlkV04wYjNJb0xpNHVZWEpuY3lrZ2UxeHVJQ0FnSUNBZ0lDQnpkWEJsY2lndUxpNWhjbWR6S1R0Y2JpQWdJQ0FnSUNBZ2RHaHBjeTVwYm1GamRHbDJaVVp5WVcxbGN5QTlJREE3WEc0Z0lDQWdJQ0FnSUhSb2FYTXVZMkZzWTNWc1lYUmxjMVpsYkc5amFYUjVJRDBnZEhKMVpUdGNiaUFnSUNCOVhHNWNiaUFnSUNCdmJsVndaR0YwWlNod2FIbHphV056TENCbWNtRnRaVk4wWVcxd0xDQmxiR0Z3YzJWa0tTQjdYRzRnSUNBZ0lDQWdJSFJvYVhNdWFHRnpRMmhoYm1kbFpDQTlJR1poYkhObE8xeHVYRzRnSUNBZ0lDQWdJR1p2Y2lBb2JHVjBJR3RsZVNCcGJpQjBhR2x6TG5aaGJIVmxjeWtnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdhV1lnS0hSb2FYTXVkbUZzZFdWekxtaGhjMDkzYmxCeWIzQmxjblI1S0d0bGVTa3BJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0JqYjI1emRDQjJZV3gxWlNBOUlIUm9hWE11ZG1Gc2RXVnpXMnRsZVYwN1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ1kyOXVjM1FnY0hKbGRtbHZkWE5XWVd4MVpTQTlJSFpoYkhWbExtTjFjbkpsYm5RN1hHNWNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQXZMeUJCY0hCc2VTQmhZMk5sYkdWeVlYUnBiMjVjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0IyWVd4MVpTNTJaV3h2WTJsMGVTQXJQU0J6Y0dWbFpGQmxja1p5WVcxbEtIWmhiSFZsTG1admNtTmxMQ0JsYkdGd2MyVmtLVHRjYmx4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUM4dklFRndjR3g1SUdaeWFXTjBhVzl1WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnZG1Gc2RXVXVkbVZzYjJOcGRIa2dLajBnS0RFZ0xTQjJZV3gxWlM1bWNtbGpkR2x2YmlrZ0tpb2dLR1ZzWVhCelpXUWdMeUF4TURBcE8xeHVYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdMeThnUVhCd2JIa2djM0J5YVc1blhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2FXWWdLSFpoYkhWbExuTndjbWx1WnlBbUppQnBjMDUxYlNoMllXeDFaUzUwYnlrcElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnWTI5dWMzUWdaR2x6ZEdGdVkyVlViMVJoY21kbGRDQTlJSFpoYkhWbExuUnZJQzBnZG1Gc2RXVXVZM1Z5Y21WdWREdGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnZG1Gc2RXVXVkbVZzYjJOcGRIa2dLejBnWkdsemRHRnVZMlZVYjFSaGNtZGxkQ0FxSUhOd1pXVmtVR1Z5Um5KaGJXVW9kbUZzZFdVdWMzQnlhVzVuTENCbGJHRndjMlZrS1R0Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCOVhHNWNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQXZMeUJCY0hCc2VTQnNZWFJsYzNRZ2RtVnNiMk5wZEhsY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCMllXeDFaUzVqZFhKeVpXNTBJQ3M5SUhOd1pXVmtVR1Z5Um5KaGJXVW9kbUZzZFdVdWRtVnNiMk5wZEhrc0lHVnNZWEJ6WldRcE8xeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lGeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDOHZJRU5vWldOcklHbG1JSFpoYkhWbElHaGhjeUJqYUdGdVoyVmtYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdhV1lnS0haaGJIVmxMbU4xY25KbGJuUWdJVDA5SUhCeVpYWnBiM1Z6Vm1Gc2RXVWdmSHdnVFdGMGFDNWhZbk1vZG1Gc2RXVXVkbVZzYjJOcGRIa3BJRDQ5SUhaaGJIVmxMbk4wYjNCVGNHVmxaQ0I4ZkNBb2RtRnNkV1V1YzNCeWFXNW5JQ1ltSUhaaGJIVmxMbU4xY25KbGJuUWdJVDA5SUhaaGJIVmxMblJ2S1NrZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0IwYUdsekxtaGhjME5vWVc1blpXUWdQU0IwY25WbE8xeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lIMWNiaUFnSUNBZ0lDQWdJQ0FnSUgxY2JpQWdJQ0FnSUNBZ2ZWeHVJQ0FnSUgxY2JseHVJQ0FnSUc5dVJuSmhiV1ZGYm1Rb0tTQjdYRzRnSUNBZ0lDQWdJR2xtSUNoMGFHbHpMbUYxZEc5RmJtUXBJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lIUm9hWE11YVc1aFkzUnBkbVZHY21GdFpYTWdQU0IwYUdsekxtaGhjME5vWVc1blpXUWdQeUF4SURvZ2RHaHBjeTVwYm1GamRHbDJaVVp5WVcxbGN5QXJJREU3WEc1Y2JpQWdJQ0FnSUNBZ0lDQWdJR2xtSUNoMGFHbHpMbWx1WVdOMGFYWmxSbkpoYldWeklENDlJSFJvYVhNdWJXRjRTVzVoWTNScGRtVkdjbUZ0WlhNcElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQjBhR2x6TG5OMGIzQW9LVHRjYmlBZ0lDQWdJQ0FnSUNBZ0lIMWNiaUFnSUNBZ0lDQWdmVnh1SUNBZ0lIMWNibHh1SUNBZ0lDOHFYRzRnSUNBZ0lDQWdJQ01nUjJWMElHUmxabUYxYkhRZ1UybHRkV3hoZEdVZ2NISnZjSE5jYmx4dUlDQWdJQ0FnSUNCQWNtVjBkWEp1SUZ0dlltcGxZM1JkWEc0Z0lDQWdLaTljYmlBZ0lDQm5aWFJFWldaaGRXeDBVSEp2Y0hNb0tTQjdYRzRnSUNBZ0lDQWdJSEpsZEhWeWJpQjdYRzRnSUNBZ0lDQWdJQ0FnSUNBdUxpNXpkWEJsY2k1blpYUkVaV1poZFd4MFVISnZjSE1vS1N4Y2JpQWdJQ0FnSUNBZ0lDQWdJR0YxZEc5RmJtUTZJSFJ5ZFdVc1hHNGdJQ0FnSUNBZ0lDQWdJQ0J0WVhoSmJtRmpkR2wyWlVaeVlXMWxjem9nTTF4dUlDQWdJQ0FnSUNCOU8xeHVJQ0FnSUgxY2JseHVJQ0FnSUM4cVhHNGdJQ0FnSUNBZ0lDTWdSMlYwSUdSbFptRjFiSFFnVTJsdGRXeGhkR1VnZG1Gc2RXVWdjSEp2Y0hOY2JseHVJQ0FnSUNBZ0lDQkFjbVYwZFhKdUlGdHZZbXBsWTNSZFhHNGdJQ0FnS2k5Y2JpQWdJQ0JuWlhSRVpXWmhkV3gwVm1Gc2RXVW9LU0I3WEc0Z0lDQWdJQ0FnSUhKbGRIVnliaUI3WEc0Z0lDQWdJQ0FnSUNBZ0lDQXVMaTV6ZFhCbGNpNW5aWFJFWldaaGRXeDBWbUZzZFdVb0tTeGNiaUFnSUNBZ0lDQWdJQ0FnSUdadmNtTmxPaUF3TENBdkx5QmJiblZ0WW1WeVhUb2dRV05qWld4bGNtRjBhVzl1SUhSdklHRndjR3g1SUhSdklIWmhiSFZsTENCcGJpQjFibWwwY3lCd1pYSWdjMlZqYjI1a1hHNGdJQ0FnSUNBZ0lDQWdJQ0JpYjNWdVkyVTZJREFzSUM4dklGdHVkVzFpWlhKZE9pQkdZV04wYjNJZ2RHOGdiWFZzZEdsd2JIa2dkbVZzYjJOcGRIa2dZbmtnYjI0Z1ltOTFibU5sWEc0Z0lDQWdJQ0FnSUNBZ0lDQnpjSEpwYm1jNklEQXNJQzh2SUZ0dWRXMWlaWEpkT2lCVGNISnBibWNnYzNSeVpXNW5kR2dnWkhWeWFXNW5JQ2R6ZEhKcGJtY25YRzRnSUNBZ0lDQWdJQ0FnSUNCemRHOXdVM0JsWldRNklEQXVNREF3TVN3Z0x5OGdXMjUxYldKbGNsMDZJRk4wYjNBZ2MybHRkV3hoZEdsdmJpQjFibVJsY2lCMGFHbHpJSE53WldWa1hHNGdJQ0FnSUNBZ0lDQWdJQ0JtY21samRHbHZiam9nTUNBdkx5QmJiblZ0WW1WeVhUb2dSbkpwWTNScGIyNGdkRzhnWVhCd2JIa2djR1Z5SUdaeVlXMWxMQ0F3TFRGY2JpQWdJQ0FnSUNBZ2ZUdGNiaUFnSUNCOVhHNWNiaUFnSUNBdktseHVJQ0FnSUNBZ0lDQWpJRWRsZENCa1pXWmhkV3gwSUZOcGJYVnNZWFJsSUhaaGJIVmxJSEJ5YjNCbGNuUjVJRzVoYldWY2JpQWdJQ0FnSUNBZ0l5TWdVMlYwSUhaaGJIVmxjeUIwYnlCMGFHbHpJSGRvWlc0Z1lTQmdkbUZzZFdWZ0lHbHpJRzV2ZENCd2NtOTJhV1JsWkNCaGN5QmhiaUJ2WW1wbFkzUmNibHh1SUNBZ0lDQWdJQ0JBY21WMGRYSnVJRnR6ZEhKcGJtZGRYRzRnSUNBZ0tpOWNiaUFnSUNCblpYUkVaV1poZFd4MFZtRnNkV1ZRY205d0tDa2dlMXh1SUNBZ0lDQWdJQ0J5WlhSMWNtNGdKM1psYkc5amFYUjVKenRjYmlBZ0lDQjlYRzU5WEc0aVhYMD1cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2FjdGlvbnMvUGh5c2ljcy5qc1xuICoqIG1vZHVsZSBpZCA9IDVcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxudmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF9BY3Rpb24yID0gcmVxdWlyZSgnLi9BY3Rpb24nKTtcblxudmFyIF9BY3Rpb24zID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfQWN0aW9uMik7XG5cbnZhciBfUG9pbnRlciA9IHJlcXVpcmUoJy4uL2lucHV0L1BvaW50ZXInKTtcblxudmFyIF9Qb2ludGVyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX1BvaW50ZXIpO1xuXG52YXIgX2NhbGMgPSByZXF1aXJlKCcuLi9pbmMvY2FsYycpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmICghc2VsZikgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIGNhbGwgJiYgKHR5cGVvZiBjYWxsID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpID8gY2FsbCA6IHNlbGY7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgXCIgKyB0eXBlb2Ygc3VwZXJDbGFzcyk7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgZW51bWVyYWJsZTogZmFsc2UsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcykgOiBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzOyB9XG5cbi8qXG4gICAgU2NyYXBlIHgveSBjb29yZGluYXRlcyBmcm9tIHByb3ZpZGVkIGV2ZW50XG5cbiAgICBAcGFyYW0gW2V2ZW50XVxuICAgIEByZXR1cm4gW29iamVjdF1cbiovXG52YXIgbW91c2VFdmVudFRvUG9pbnQgPSBmdW5jdGlvbiAoZSkge1xuICAgIHJldHVybiB7XG4gICAgICAgIHg6IGUucGFnZVgsXG4gICAgICAgIHk6IGUucGFnZVlcbiAgICB9O1xufTtcblxudmFyIHRvdWNoRXZlbnRUb1BvaW50ID0gZnVuY3Rpb24gKF9yZWYpIHtcbiAgICB2YXIgY2hhbmdlZFRvdWNoZXMgPSBfcmVmLmNoYW5nZWRUb3VjaGVzO1xuICAgIHJldHVybiB7XG4gICAgICAgIHg6IGNoYW5nZWRUb3VjaGVzWzBdLmNsaWVudFgsXG4gICAgICAgIHk6IGNoYW5nZWRUb3VjaGVzWzBdLmNsaWVudFlcbiAgICB9O1xufTtcblxudmFyIGNyZWF0ZVBvaW50ZXIgPSBmdW5jdGlvbiAoZSkge1xuICAgIHJldHVybiBlLnRvdWNoZXMgPyBuZXcgX1BvaW50ZXIyLmRlZmF1bHQodG91Y2hFdmVudFRvUG9pbnQoZSksICd0b3VjaG1vdmUnLCB0b3VjaEV2ZW50VG9Qb2ludCkgOiBuZXcgX1BvaW50ZXIyLmRlZmF1bHQobW91c2VFdmVudFRvUG9pbnQoZSksICdtb3VzZW1vdmUnLCBtb3VzZUV2ZW50VG9Qb2ludCk7XG59O1xuXG52YXIgZ2V0QWN0dWFsRXZlbnQgPSBmdW5jdGlvbiAoZSkge1xuICAgIHJldHVybiBlLm9yaWdpbmFsRXZlbnQgfHwgZTtcbn07XG5cbnZhciBUcmFjayA9IGZ1bmN0aW9uIChfQWN0aW9uKSB7XG4gICAgX2luaGVyaXRzKFRyYWNrLCBfQWN0aW9uKTtcblxuICAgIGZ1bmN0aW9uIFRyYWNrKCkge1xuICAgICAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgVHJhY2spO1xuXG4gICAgICAgIHJldHVybiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCBfQWN0aW9uLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykpO1xuICAgIH1cblxuICAgIFRyYWNrLnByb3RvdHlwZS5zdGFydCA9IGZ1bmN0aW9uIHN0YXJ0KGlucHV0KSB7XG4gICAgICAgIF9BY3Rpb24ucHJvdG90eXBlLnN0YXJ0LmNhbGwodGhpcyk7XG5cbiAgICAgICAgaWYgKGlucHV0KSB7XG4gICAgICAgICAgICB0aGlzLmlucHV0ID0gaW5wdXQuc3RhdGUgPyBpbnB1dCA6IGNyZWF0ZVBvaW50ZXIoZ2V0QWN0dWFsRXZlbnQoaW5wdXQpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuaW5wdXRPZmZzZXQgPSB7fTtcbiAgICAgICAgdGhpcy5pbnB1dE9yaWdpbiA9IF9leHRlbmRzKHt9LCB0aGlzLmlucHV0LnN0YXRlKTtcbiAgICAgICAgdGhpcy5pbnB1dC5zdGFydCgpO1xuICAgIH07XG5cbiAgICBUcmFjay5wcm90b3R5cGUuc3RvcCA9IGZ1bmN0aW9uIHN0b3AoKSB7XG4gICAgICAgIF9BY3Rpb24ucHJvdG90eXBlLnN0b3AuY2FsbCh0aGlzKTtcbiAgICAgICAgdGhpcy5pbnB1dC5zdG9wKCk7XG4gICAgfTtcblxuICAgIFRyYWNrLnByb3RvdHlwZS5vblVwZGF0ZSA9IGZ1bmN0aW9uIG9uVXBkYXRlKCkge1xuICAgICAgICB2YXIgdmFsdWVzID0gdGhpcy52YWx1ZXM7XG4gICAgICAgIHRoaXMuaW5wdXRPZmZzZXQgPSAoMCwgX2NhbGMub2Zmc2V0KSh0aGlzLmlucHV0T3JpZ2luLCB0aGlzLmlucHV0LnN0YXRlKTtcblxuICAgICAgICBmb3IgKHZhciBrZXkgaW4gdmFsdWVzKSB7XG4gICAgICAgICAgICBpZiAodmFsdWVzLmhhc093blByb3BlcnR5KGtleSkgJiYgdGhpcy5pbnB1dE9mZnNldC5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgICAgICAgdmFyIHZhbHVlID0gdmFsdWVzW2tleV07XG4gICAgICAgICAgICAgICAgaWYgKHZhbHVlLmRpcmVjdCkge1xuICAgICAgICAgICAgICAgICAgICB2YWx1ZS5jdXJyZW50ID0gdGhpcy5pbnB1dC5zdGF0ZVtrZXldO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlLmN1cnJlbnQgPSB2YWx1ZS5vcmlnaW4gKyB0aGlzLmlucHV0T2Zmc2V0W2tleV07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcblxuICAgIFRyYWNrLnByb3RvdHlwZS5nZXREZWZhdWx0VmFsdWUgPSBmdW5jdGlvbiBnZXREZWZhdWx0VmFsdWUoKSB7XG4gICAgICAgIHJldHVybiBfZXh0ZW5kcyh7fSwgX0FjdGlvbi5wcm90b3R5cGUuZ2V0RGVmYXVsdFZhbHVlLmNhbGwodGhpcyksIHtcbiAgICAgICAgICAgIGFtcDogMSxcbiAgICAgICAgICAgIGVzY2FwZUFtcDogMCxcbiAgICAgICAgICAgIGRpcmVjdDogZmFsc2VcbiAgICAgICAgfSk7XG4gICAgfTtcblxuICAgIHJldHVybiBUcmFjaztcbn0oX0FjdGlvbjMuZGVmYXVsdCk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IFRyYWNrO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluTnlZeTloWTNScGIyNXpMMVJ5WVdOckxtcHpJbDBzSW01aGJXVnpJanBiWFN3aWJXRndjR2x1WjNNaU9pSTdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenRCUVZWQkxFbEJRVTBzYjBKQlFXOUNMRlZCUVVNc1EwRkJSRHRYUVVGUk8wRkJRemxDTEZkQlFVY3NSVUZCUlN4TFFVRkdPMEZCUTBnc1YwRkJSeXhGUVVGRkxFdEJRVVk3TzBOQlJtMUNPenRCUVVzeFFpeEpRVUZOTEc5Q1FVRnZRanRSUVVGSE8xZEJRWE5DTzBGQlF5OURMRmRCUVVjc1pVRkJaU3hEUVVGbUxFVkJRV3RDTEU5QlFXeENPMEZCUTBnc1YwRkJSeXhsUVVGbExFTkJRV1lzUlVGQmEwSXNUMEZCYkVJN08wTkJSbTFDT3p0QlFVc3hRaXhKUVVGTkxHZENRVUZuUWl4VlFVRkRMRU5CUVVRN1YwRkJUeXhGUVVGRkxFOUJRVVlzUjBGRGVrSXNjMEpCUVZrc2EwSkJRV3RDTEVOQlFXeENMRU5CUVZvc1JVRkJhME1zVjBGQmJFTXNSVUZCSzBNc2FVSkJRUzlETEVOQlJIbENMRWRCUlhwQ0xITkNRVUZaTEd0Q1FVRnJRaXhEUVVGc1FpeERRVUZhTEVWQlFXdERMRmRCUVd4RExFVkJRU3RETEdsQ1FVRXZReXhEUVVaNVFqdERRVUZRT3p0QlFVbDBRaXhKUVVGTkxHbENRVUZwUWl4VlFVRkRMRU5CUVVRN1YwRkJUeXhGUVVGRkxHRkJRVVlzU1VGQmJVSXNRMEZCYmtJN1EwRkJVRHM3U1VGRlJqczdPenM3T3pzN08yOUNRVU5xUWl4MVFrRkJUU3hQUVVGUE8wRkJRMVFzTUVKQlFVMHNTMEZCVGl4WlFVUlRPenRCUVVkVUxGbEJRVWtzUzBGQlNpeEZRVUZYTzBGQlExQXNhVUpCUVVzc1MwRkJUQ3hIUVVGaExFMUJRVTBzUzBGQlRpeEhRVUZqTEV0QlFXUXNSMEZCYzBJc1kwRkJZeXhsUVVGbExFdEJRV1lzUTBGQlpDeERRVUYwUWl4RFFVUk9PMU5CUVZnN08wRkJTVUVzWVVGQlN5eFhRVUZNTEVkQlFXMUNMRVZCUVc1Q0xFTkJVRk03UVVGUlZDeGhRVUZMTEZkQlFVd3NaMEpCUVhkQ0xFdEJRVXNzUzBGQlRDeERRVUZYTEV0QlFWZ3NRMEZCZUVJc1EwRlNVenRCUVZOVUxHRkJRVXNzUzBGQlRDeERRVUZYTEV0QlFWZ3NSMEZVVXpzN08wRkJSRWtzYjBKQllXcENMSFZDUVVGUE8wRkJRMGdzTUVKQlFVMHNTVUZCVGl4WlFVUkhPMEZCUlVnc1lVRkJTeXhMUVVGTUxFTkJRVmNzU1VGQldDeEhRVVpIT3pzN1FVRmlWU3h2UWtGclFtcENMQ3RDUVVGWE8wRkJRMUFzV1VGQlRTeFRRVUZUTEV0QlFVc3NUVUZCVEN4RFFVUlNPMEZCUlZBc1lVRkJTeXhYUVVGTUxFZEJRVzFDTEd0Q1FVRlBMRXRCUVVzc1YwRkJUQ3hGUVVGclFpeExRVUZMTEV0QlFVd3NRMEZCVnl4TFFVRllMRU5CUVRWRExFTkJSazg3TzBGQlNWQXNZVUZCU3l4SlFVRkpMRWRCUVVvc1NVRkJWeXhOUVVGb1FpeEZRVUYzUWp0QlFVTndRaXhuUWtGQlNTeFBRVUZQTEdOQlFWQXNRMEZCYzBJc1IwRkJkRUlzUzBGQk9FSXNTMEZCU3l4WFFVRk1MRU5CUVdsQ0xHTkJRV3BDTEVOQlFXZERMRWRCUVdoRExFTkJRVGxDTEVWQlFXOUZPMEZCUTNCRkxHOUNRVUZOTEZGQlFWRXNUMEZCVHl4SFFVRlFMRU5CUVZJc1EwRkVPRVE3UVVGRmNFVXNiMEpCUVVrc1RVRkJUU3hOUVVGT0xFVkJRV003UVVGRFpDd3dRa0ZCVFN4UFFVRk9MRWRCUVdkQ0xFdEJRVXNzUzBGQlRDeERRVUZYTEV0QlFWZ3NRMEZCYVVJc1IwRkJha0lzUTBGQmFFSXNRMEZFWXp0cFFrRkJiRUlzVFVGRlR6dEJRVU5JTERCQ1FVRk5MRTlCUVU0c1IwRkJaMElzVFVGQlRTeE5RVUZPTEVkQlFXVXNTMEZCU3l4WFFVRk1MRU5CUVdsQ0xFZEJRV3BDTEVOQlFXWXNRMEZFWWp0cFFrRkdVRHRoUVVaS08xTkJSRW83T3p0QlFYUkNZU3h2UWtGclEycENMRFpEUVVGclFqdEJRVU5rTERSQ1FVTlBMR3RDUVVGTkxHVkJRVTQ3UVVGRFNDeHBRa0ZCU3l4RFFVRk1PMEZCUTBFc2RVSkJRVmNzUTBGQldEdEJRVU5CTEc5Q1FVRlJMRXRCUVZJN1ZVRktTaXhEUVVSak96czdWMEZzUTBRaUxDSm1hV3hsSWpvaVZISmhZMnN1YW5NaUxDSnpiM1Z5WTJWU2IyOTBJam9pTDFWelpYSnpMMDFoZEhRdlUybDBaWE12Y0c5d2JXOTBhVzl1SWl3aWMyOTFjbU5sYzBOdmJuUmxiblFpT2xzaWFXMXdiM0owSUVGamRHbHZiaUJtY205dElDY3VMMEZqZEdsdmJpYzdYRzVwYlhCdmNuUWdVRzlwYm5SbGNpQm1jbTl0SUNjdUxpOXBibkIxZEM5UWIybHVkR1Z5Snp0Y2JtbHRjRzl5ZENCN0lHOW1abk5sZENCOUlHWnliMjBnSnk0dUwybHVZeTlqWVd4akp6dGNibHh1THlwY2JpQWdJQ0JUWTNKaGNHVWdlQzk1SUdOdmIzSmthVzVoZEdWeklHWnliMjBnY0hKdmRtbGtaV1FnWlhabGJuUmNibHh1SUNBZ0lFQndZWEpoYlNCYlpYWmxiblJkWEc0Z0lDQWdRSEpsZEhWeWJpQmJiMkpxWldOMFhWeHVLaTljYm1OdmJuTjBJRzF2ZFhObFJYWmxiblJVYjFCdmFXNTBJRDBnS0dVcElEMCtJQ2g3WEc0Z0lDQWdlRG9nWlM1d1lXZGxXQ3hjYmlBZ0lDQjVPaUJsTG5CaFoyVlpYRzU5S1R0Y2JseHVZMjl1YzNRZ2RHOTFZMmhGZG1WdWRGUnZVRzlwYm5RZ1BTQW9leUJqYUdGdVoyVmtWRzkxWTJobGN5QjlLU0E5UGlBb2UxeHVJQ0FnSUhnNklHTm9ZVzVuWldSVWIzVmphR1Z6V3pCZExtTnNhV1Z1ZEZnc1hHNGdJQ0FnZVRvZ1kyaGhibWRsWkZSdmRXTm9aWE5iTUYwdVkyeHBaVzUwV1Z4dWZTazdYRzVjYm1OdmJuTjBJR055WldGMFpWQnZhVzUwWlhJZ1BTQW9aU2tnUFQ0Z1pTNTBiM1ZqYUdWeklEOWNiaUFnSUNCdVpYY2dVRzlwYm5SbGNpaDBiM1ZqYUVWMlpXNTBWRzlRYjJsdWRDaGxLU3dnSjNSdmRXTm9iVzkyWlNjc0lIUnZkV05vUlhabGJuUlViMUJ2YVc1MEtTQTZJRnh1SUNBZ0lHNWxkeUJRYjJsdWRHVnlLRzF2ZFhObFJYWmxiblJVYjFCdmFXNTBLR1VwTENBbmJXOTFjMlZ0YjNabEp5d2diVzkxYzJWRmRtVnVkRlJ2VUc5cGJuUXBPMXh1WEc1amIyNXpkQ0JuWlhSQlkzUjFZV3hGZG1WdWRDQTlJQ2hsS1NBOVBpQmxMbTl5YVdkcGJtRnNSWFpsYm5RZ2ZId2daVHRjYmx4dVpYaHdiM0owSUdSbFptRjFiSFFnWTJ4aGMzTWdWSEpoWTJzZ1pYaDBaVzVrY3lCQlkzUnBiMjRnZTF4dUlDQWdJSE4wWVhKMEtHbHVjSFYwS1NCN1hHNGdJQ0FnSUNBZ0lITjFjR1Z5TG5OMFlYSjBLQ2s3WEc1Y2JpQWdJQ0FnSUNBZ2FXWWdLR2x1Y0hWMEtTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNCMGFHbHpMbWx1Y0hWMElEMGdhVzV3ZFhRdWMzUmhkR1VnUHlCcGJuQjFkQ0E2SUdOeVpXRjBaVkJ2YVc1MFpYSW9aMlYwUVdOMGRXRnNSWFpsYm5Rb2FXNXdkWFFwS1R0Y2JpQWdJQ0FnSUNBZ2ZWeHVYRzRnSUNBZ0lDQWdJSFJvYVhNdWFXNXdkWFJQWm1aelpYUWdQU0I3ZlR0Y2JpQWdJQ0FnSUNBZ2RHaHBjeTVwYm5CMWRFOXlhV2RwYmlBOUlIc2dMaTR1ZEdocGN5NXBibkIxZEM1emRHRjBaU0I5TzF4dUlDQWdJQ0FnSUNCMGFHbHpMbWx1Y0hWMExuTjBZWEowS0NrN1hHNGdJQ0FnZlZ4dVhHNGdJQ0FnYzNSdmNDZ3BJSHRjYmlBZ0lDQWdJQ0FnYzNWd1pYSXVjM1J2Y0NncE8xeHVJQ0FnSUNBZ0lDQjBhR2x6TG1sdWNIVjBMbk4wYjNBb0tUdGNiaUFnSUNCOVhHNWNiaUFnSUNCdmJsVndaR0YwWlNncElIdGNiaUFnSUNBZ0lDQWdZMjl1YzNRZ2RtRnNkV1Z6SUQwZ2RHaHBjeTUyWVd4MVpYTTdYRzRnSUNBZ0lDQWdJSFJvYVhNdWFXNXdkWFJQWm1aelpYUWdQU0J2Wm1aelpYUW9kR2hwY3k1cGJuQjFkRTl5YVdkcGJpd2dkR2hwY3k1cGJuQjFkQzV6ZEdGMFpTazdYRzVjYmlBZ0lDQWdJQ0FnWm05eUlDaHNaWFFnYTJWNUlHbHVJSFpoYkhWbGN5a2dlMXh1SUNBZ0lDQWdJQ0FnSUNBZ2FXWWdLSFpoYkhWbGN5NW9ZWE5QZDI1UWNtOXdaWEowZVNoclpYa3BJQ1ltSUhSb2FYTXVhVzV3ZFhSUFptWnpaWFF1YUdGelQzZHVVSEp2Y0dWeWRIa29hMlY1S1NrZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lHTnZibk4wSUhaaGJIVmxJRDBnZG1Gc2RXVnpXMnRsZVYwN1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2FXWWdLSFpoYkhWbExtUnBjbVZqZENrZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0IyWVd4MVpTNWpkWEp5Wlc1MElEMGdkR2hwY3k1cGJuQjFkQzV6ZEdGMFpWdHJaWGxkTzF4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUgwZ1pXeHpaU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lIWmhiSFZsTG1OMWNuSmxiblFnUFNCMllXeDFaUzV2Y21sbmFXNGdLeUIwYUdsekxtbHVjSFYwVDJabWMyVjBXMnRsZVYwN1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2ZWeHVJQ0FnSUNBZ0lDQWdJQ0FnZlZ4dUlDQWdJQ0FnSUNCOVhHNGdJQ0FnZlZ4dVhHNGdJQ0FnWjJWMFJHVm1ZWFZzZEZaaGJIVmxLQ2tnZTF4dUlDQWdJQ0FnSUNCeVpYUjFjbTRnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdMaTR1YzNWd1pYSXVaMlYwUkdWbVlYVnNkRlpoYkhWbEtDa3NYRzRnSUNBZ0lDQWdJQ0FnSUNCaGJYQTZJREVzWEc0Z0lDQWdJQ0FnSUNBZ0lDQmxjMk5oY0dWQmJYQTZJREFzWEc0Z0lDQWdJQ0FnSUNBZ0lDQmthWEpsWTNRNklHWmhiSE5sWEc0Z0lDQWdJQ0FnSUgwN1hHNGdJQ0FnZlZ4dWZWeHVJbDE5XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9hY3Rpb25zL1RyYWNrLmpzXG4gKiogbW9kdWxlIGlkID0gNlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX2xvb3AgPSByZXF1aXJlKCcuL2xvb3AnKTtcblxudmFyIGxvb3AgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChfbG9vcCk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKG9iaikgeyBpZiAob2JqICYmIG9iai5fX2VzTW9kdWxlKSB7IHJldHVybiBvYmo7IH0gZWxzZSB7IHZhciBuZXdPYmogPSB7fTsgaWYgKG9iaiAhPSBudWxsKSB7IGZvciAodmFyIGtleSBpbiBvYmopIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGtleSkpIG5ld09ialtrZXldID0gb2JqW2tleV07IH0gfSBuZXdPYmouZGVmYXVsdCA9IG9iajsgcmV0dXJuIG5ld09iajsgfSB9XG5cbmZ1bmN0aW9uIF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhvYmosIGtleXMpIHsgdmFyIHRhcmdldCA9IHt9OyBmb3IgKHZhciBpIGluIG9iaikgeyBpZiAoa2V5cy5pbmRleE9mKGkpID49IDApIGNvbnRpbnVlOyBpZiAoIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGkpKSBjb250aW51ZTsgdGFyZ2V0W2ldID0gb2JqW2ldOyB9IHJldHVybiB0YXJnZXQ7IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxudmFyIFByb2Nlc3MgPSBmdW5jdGlvbiAoKSB7XG4gICAgLypcbiAgICAgICAgW29iamVjdF06IFByb3BlcnRpZXNcbiAgICAgICAgW2Jvb2xlYW5dIChvcHRpb25hbCk6IElzIFByb2Nlc3MgbGF6eT9cbiAgICAqL1xuXG4gICAgZnVuY3Rpb24gUHJvY2Vzcyhwcm9wcywgaXNMYXp5KSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICAgICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFByb2Nlc3MpO1xuXG4gICAgICAgIHRoaXMuaWQgPSBsb29wLmdldFByb2Nlc3NJZCgpO1xuXG4gICAgICAgIHRoaXMuX29uQ2xlYW51cCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIF90aGlzLnN0b3AoKTtcbiAgICAgICAgICAgIF90aGlzLm9uQ2xlYW51cCA9IHVuZGVmaW5lZDtcbiAgICAgICAgfTtcblxuICAgICAgICB0aGlzLl9vbkFjdGl2YXRlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIF90aGlzLm9uQ2xlYW51cCA9IF90aGlzLl9vbkNsZWFudXA7XG4gICAgICAgIH07XG5cbiAgICAgICAgdGhpcy5zZXQodGhpcy5nZXREZWZhdWx0UHJvcHMoKSk7XG4gICAgICAgIHRoaXMuc2V0KHByb3BzKTtcblxuICAgICAgICB0aGlzLmlzTGF6eSA9IGlzTGF6eSB8fCBmYWxzZTtcbiAgICAgICAgdGhpcy5pc0FjdGl2ZSA9IGZhbHNlO1xuICAgIH1cblxuICAgIFByb2Nlc3MucHJvdG90eXBlLnNldCA9IGZ1bmN0aW9uIHNldChwcm9wcykge1xuICAgICAgICBmb3IgKHZhciBrZXkgaW4gcHJvcHMpIHtcbiAgICAgICAgICAgIGlmIChwcm9wcy5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgICAgICAgdGhpc1trZXldID0gcHJvcHNba2V5XTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH07XG5cbiAgICBQcm9jZXNzLnByb3RvdHlwZS5zdGFydCA9IGZ1bmN0aW9uIHN0YXJ0KCkge1xuICAgICAgICBsb29wLmFjdGl2YXRlKHRoaXMuaWQsIHRoaXMpO1xuXG4gICAgICAgIHRoaXMub25DbGVhbnVwID0gdGhpcy5vbkFjdGl2YXRlID0gdW5kZWZpbmVkO1xuXG4gICAgICAgIGlmICh0aGlzLm9uU3RhcnQpIHtcbiAgICAgICAgICAgIHRoaXMub25TdGFydCh0aGlzKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH07XG5cbiAgICBQcm9jZXNzLnByb3RvdHlwZS5zdG9wID0gZnVuY3Rpb24gc3RvcCgpIHtcbiAgICAgICAgbG9vcC5kZWFjdGl2YXRlKHRoaXMuaWQpO1xuXG4gICAgICAgIGlmICh0aGlzLm9uU3RvcCkge1xuICAgICAgICAgICAgdGhpcy5vblN0b3AodGhpcyk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xuXG4gICAgUHJvY2Vzcy5wcm90b3R5cGUub25jZSA9IGZ1bmN0aW9uIG9uY2UoKSB7XG4gICAgICAgIHRoaXMuc3RhcnQoKTtcbiAgICAgICAgdGhpcy5vbkFjdGl2YXRlID0gdGhpcy5fb25BY3RpdmF0ZTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfTtcblxuICAgIC8qXG4gICAgICAgICMgR2V0IGRlZmF1bHQgQWN0aW9uIHByb3BlcnRpZXNcbiAgICAgICAgIEByZXR1cm4gW29iamVjdF1cbiAgICAqL1xuXG4gICAgUHJvY2Vzcy5wcm90b3R5cGUuZ2V0RGVmYXVsdFByb3BzID0gZnVuY3Rpb24gZ2V0RGVmYXVsdFByb3BzKCkge1xuICAgICAgICByZXR1cm4ge307XG4gICAgfTtcblxuICAgIC8qXG4gICAgICAgICMgRXh0ZW5kIHRoaXMgUHJvY2VzcyB3aXRoIG5ldyBwcm9wZXJ0aWVzXG4gICAgICAgICMjIFJldHVybnMgbmV3IGluc3RhbmNlIG9mIHRoaXMgUHJvY2VzcydzIGBwcm90b3R5cGVgIHdpdGggZXhpc3RpbmcgYW5kIG5ldyBwcm9wZXJ0aWVzXG4gICAgICAgICBAcGFyYW0gW29iamVjdF0gKG9wdGlvbmFsKVxuICAgICAgICBAcmV0dXJuIFtQcm9jZXNzXVxuICAgICovXG5cbiAgICBQcm9jZXNzLnByb3RvdHlwZS5pbmhlcml0ID0gZnVuY3Rpb24gaW5oZXJpdChwcm9wcykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzLmlkO1xuXG4gICAgICAgIHZhciBpbmhlcml0ZWRQcm9wcyA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyh0aGlzLCBbJ2lkJ10pO1xuXG4gICAgICAgIHZhciBuZXdQcm9jZXNzID0gbmV3IHRoaXMuY29uc3RydWN0b3IoaW5oZXJpdGVkUHJvcHMpO1xuICAgICAgICByZXR1cm4gbmV3UHJvY2Vzcy5zZXQocHJvcHMpO1xuICAgIH07XG5cbiAgICByZXR1cm4gUHJvY2Vzcztcbn0oKTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gUHJvY2Vzcztcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbk55WXk5d2NtOWpaWE56TDFCeWIyTmxjM011YW5NaVhTd2libUZ0WlhNaU9sdGRMQ0p0WVhCd2FXNW5jeUk2SWpzN096czdPMGxCUVZrN096czdPenM3TzBsQlJWTTdPenM3T3p0QlFVdHFRaXhoUVV4cFFpeFBRVXRxUWl4RFFVRlpMRXRCUVZvc1JVRkJiVUlzVFVGQmJrSXNSVUZCTWtJN096czRRa0ZNVml4VFFVdFZPenRCUVVOMlFpeGhRVUZMTEVWQlFVd3NSMEZCVlN4TFFVRkxMRmxCUVV3c1JVRkJWaXhEUVVSMVFqczdRVUZIZGtJc1lVRkJTeXhWUVVGTUxFZEJRV3RDTEZsQlFVMDdRVUZEY0VJc2EwSkJRVXNzU1VGQlRDeEhRVVJ2UWp0QlFVVndRaXhyUWtGQlN5eFRRVUZNTEVkQlFXbENMRk5CUVdwQ0xFTkJSbTlDTzFOQlFVNHNRMEZJU3pzN1FVRlJka0lzWVVGQlN5eFhRVUZNTEVkQlFXMUNPMjFDUVVGTkxFMUJRVXNzVTBGQlRDeEhRVUZwUWl4TlFVRkxMRlZCUVV3N1UwRkJka0lzUTBGU1NUczdRVUZWZGtJc1lVRkJTeXhIUVVGTUxFTkJRVk1zUzBGQlN5eGxRVUZNTEVWQlFWUXNSVUZXZFVJN1FVRlhka0lzWVVGQlN5eEhRVUZNTEVOQlFWTXNTMEZCVkN4RlFWaDFRanM3UVVGaGRrSXNZVUZCU3l4TlFVRk1MRWRCUVdNc1ZVRkJWU3hMUVVGV0xFTkJZbE03UVVGamRrSXNZVUZCU3l4UlFVRk1MRWRCUVdkQ0xFdEJRV2hDTEVOQlpIVkNPMHRCUVROQ096dEJRVXhwUWl4elFrRnpRbXBDTEcxQ1FVRkpMRTlCUVU4N1FVRkRVQ3hoUVVGTExFbEJRVWtzUjBGQlNpeEpRVUZYTEV0QlFXaENMRVZCUVhWQ08wRkJRMjVDTEdkQ1FVRkpMRTFCUVUwc1kwRkJUaXhEUVVGeFFpeEhRVUZ5UWl4RFFVRktMRVZCUVN0Q08wRkJRek5DTEhGQ1FVRkxMRWRCUVV3c1NVRkJXU3hOUVVGTkxFZEJRVTRzUTBGQldpeERRVVF5UWp0aFFVRXZRanRUUVVSS096dEJRVTFCTEdWQlFVOHNTVUZCVUN4RFFWQlBPenM3UVVGMFFrMHNjMEpCWjBOcVFpeDVRa0ZCVVR0QlFVTktMR0ZCUVVzc1VVRkJUQ3hEUVVGakxFdEJRVXNzUlVGQlRDeEZRVUZUTEVsQlFYWkNMRVZCUkVrN08wRkJSMG9zWVVGQlN5eFRRVUZNTEVkQlFXbENMRXRCUVVzc1ZVRkJUQ3hIUVVGclFpeFRRVUZzUWl4RFFVaGlPenRCUVV0S0xGbEJRVWtzUzBGQlN5eFBRVUZNTEVWQlFXTTdRVUZEWkN4cFFrRkJTeXhQUVVGTUxFTkJRV0VzU1VGQllpeEZRVVJqTzFOQlFXeENPenRCUVVsQkxHVkJRVThzU1VGQlVDeERRVlJKT3pzN1FVRm9RMU1zYzBKQk5FTnFRaXgxUWtGQlR6dEJRVU5JTEdGQlFVc3NWVUZCVEN4RFFVRm5RaXhMUVVGTExFVkJRVXdzUTBGQmFFSXNRMEZFUnpzN1FVRkhTQ3haUVVGSkxFdEJRVXNzVFVGQlRDeEZRVUZoTzBGQlEySXNhVUpCUVVzc1RVRkJUQ3hEUVVGWkxFbEJRVm9zUlVGRVlUdFRRVUZxUWpzN1FVRkpRU3hsUVVGUExFbEJRVkFzUTBGUVJ6czdPMEZCTlVOVkxITkNRWE5FYWtJc2RVSkJRVTg3UVVGRFNDeGhRVUZMTEV0QlFVd3NSMEZFUnp0QlFVVklMR0ZCUVVzc1ZVRkJUQ3hIUVVGclFpeExRVUZMTEZkQlFVd3NRMEZHWmp0QlFVZElMR1ZCUVU4c1NVRkJVQ3hEUVVoSE96czdPenM3T3p0QlFYUkVWU3h6UWtGcFJXcENMRFpEUVVGclFqdEJRVU5rTEdWQlFVOHNSVUZCVUN4RFFVUmpPenM3T3pzN096czdPMEZCYWtWRUxITkNRVFJGYWtJc01rSkJRVkVzVDBGQlR6dFpRVU5JTEV0QlFUQkNMRXRCUVRGQ0xFZEJSRWM3TzFsQlEwa3NNRU5CUVcxQ0xHTkJSSFpDT3p0QlFVVllMRmxCUVUwc1lVRkJZU3hKUVVGSkxFdEJRVXNzVjBGQlRDeERRVUZwUWl4alFVRnlRaXhEUVVGaUxFTkJSa3M3UVVGSFdDeGxRVUZQTEZkQlFWY3NSMEZCV0N4RFFVRmxMRXRCUVdZc1EwRkJVQ3hEUVVoWE96czdWMEUxUlVVaUxDSm1hV3hsSWpvaVVISnZZMlZ6Y3k1cWN5SXNJbk52ZFhKalpWSnZiM1FpT2lJdlZYTmxjbk12VFdGMGRDOVRhWFJsY3k5d2IzQnRiM1JwYjI0aUxDSnpiM1Z5WTJWelEyOXVkR1Z1ZENJNld5SnBiWEJ2Y25RZ0tpQmhjeUJzYjI5d0lHWnliMjBnSnk0dmJHOXZjQ2M3WEc1Y2JtVjRjRzl5ZENCa1pXWmhkV3gwSUdOc1lYTnpJRkJ5YjJObGMzTWdlMXh1SUNBZ0lDOHFYRzRnSUNBZ0lDQWdJRnR2WW1wbFkzUmRPaUJRY205d1pYSjBhV1Z6WEc0Z0lDQWdJQ0FnSUZ0aWIyOXNaV0Z1WFNBb2IzQjBhVzl1WVd3cE9pQkpjeUJRY205alpYTnpJR3hoZW5rL1hHNGdJQ0FnS2k5Y2JpQWdJQ0JqYjI1emRISjFZM1J2Y2lod2NtOXdjeXdnYVhOTVlYcDVLU0I3WEc0Z0lDQWdJQ0FnSUhSb2FYTXVhV1FnUFNCc2IyOXdMbWRsZEZCeWIyTmxjM05KWkNncE8xeHVYRzRnSUNBZ0lDQWdJSFJvYVhNdVgyOXVRMnhsWVc1MWNDQTlJQ2dwSUQwK0lIdGNiaUFnSUNBZ0lDQWdJQ0FnSUhSb2FYTXVjM1J2Y0NncE8xeHVJQ0FnSUNBZ0lDQWdJQ0FnZEdocGN5NXZia05zWldGdWRYQWdQU0IxYm1SbFptbHVaV1E3WEc0Z0lDQWdJQ0FnSUgwN1hHNWNiaUFnSUNBZ0lDQWdkR2hwY3k1ZmIyNUJZM1JwZG1GMFpTQTlJQ2dwSUQwK0lIUm9hWE11YjI1RGJHVmhiblZ3SUQwZ2RHaHBjeTVmYjI1RGJHVmhiblZ3TzF4dVhHNGdJQ0FnSUNBZ0lIUm9hWE11YzJWMEtIUm9hWE11WjJWMFJHVm1ZWFZzZEZCeWIzQnpLQ2twTzF4dUlDQWdJQ0FnSUNCMGFHbHpMbk5sZENod2NtOXdjeWs3WEc1Y2JpQWdJQ0FnSUNBZ2RHaHBjeTVwYzB4aGVua2dQU0JwYzB4aGVua2dmSHdnWm1Gc2MyVTdYRzRnSUNBZ0lDQWdJSFJvYVhNdWFYTkJZM1JwZG1VZ1BTQm1ZV3h6WlR0Y2JpQWdJQ0I5WEc1Y2JpQWdJQ0J6WlhRb2NISnZjSE1wSUh0Y2JpQWdJQ0FnSUNBZ1ptOXlJQ2hzWlhRZ2EyVjVJR2x1SUhCeWIzQnpLU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQnBaaUFvY0hKdmNITXVhR0Z6VDNkdVVISnZjR1Z5ZEhrb2EyVjVLU2tnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUhSb2FYTmJhMlY1WFNBOUlIQnliM0J6VzJ0bGVWMDdYRzRnSUNBZ0lDQWdJQ0FnSUNCOVhHNGdJQ0FnSUNBZ0lIMWNibHh1SUNBZ0lDQWdJQ0J5WlhSMWNtNGdkR2hwY3p0Y2JpQWdJQ0I5WEc1Y2JpQWdJQ0J6ZEdGeWRDZ3BJSHRjYmlBZ0lDQWdJQ0FnYkc5dmNDNWhZM1JwZG1GMFpTaDBhR2x6TG1sa0xDQjBhR2x6S1R0Y2JseHVJQ0FnSUNBZ0lDQjBhR2x6TG05dVEyeGxZVzUxY0NBOUlIUm9hWE11YjI1QlkzUnBkbUYwWlNBOUlIVnVaR1ZtYVc1bFpEdGNibHh1SUNBZ0lDQWdJQ0JwWmlBb2RHaHBjeTV2YmxOMFlYSjBLU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQjBhR2x6TG05dVUzUmhjblFvZEdocGN5azdYRzRnSUNBZ0lDQWdJSDFjYmx4dUlDQWdJQ0FnSUNCeVpYUjFjbTRnZEdocGN6dGNiaUFnSUNCOVhHNWNiaUFnSUNCemRHOXdLQ2tnZTF4dUlDQWdJQ0FnSUNCc2IyOXdMbVJsWVdOMGFYWmhkR1VvZEdocGN5NXBaQ2s3WEc1Y2JpQWdJQ0FnSUNBZ2FXWWdLSFJvYVhNdWIyNVRkRzl3S1NCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0IwYUdsekxtOXVVM1J2Y0NoMGFHbHpLVHRjYmlBZ0lDQWdJQ0FnZlZ4dVhHNGdJQ0FnSUNBZ0lISmxkSFZ5YmlCMGFHbHpPMXh1SUNBZ0lIMWNibHh1SUNBZ0lHOXVZMlVvS1NCN1hHNGdJQ0FnSUNBZ0lIUm9hWE11YzNSaGNuUW9LVHRjYmlBZ0lDQWdJQ0FnZEdocGN5NXZia0ZqZEdsMllYUmxJRDBnZEdocGN5NWZiMjVCWTNScGRtRjBaVHRjYmlBZ0lDQWdJQ0FnY21WMGRYSnVJSFJvYVhNN1hHNGdJQ0FnZlZ4dVhHNGdJQ0FnTHlwY2JpQWdJQ0FnSUNBZ0l5QkhaWFFnWkdWbVlYVnNkQ0JCWTNScGIyNGdjSEp2Y0dWeWRHbGxjMXh1WEc0Z0lDQWdJQ0FnSUVCeVpYUjFjbTRnVzI5aWFtVmpkRjFjYmlBZ0lDQXFMMXh1SUNBZ0lHZGxkRVJsWm1GMWJIUlFjbTl3Y3lncElIdGNiaUFnSUNBZ0lDQWdjbVYwZFhKdUlIdDlPMXh1SUNBZ0lIMWNibHh1SUNBZ0lDOHFYRzRnSUNBZ0lDQWdJQ01nUlhoMFpXNWtJSFJvYVhNZ1VISnZZMlZ6Y3lCM2FYUm9JRzVsZHlCd2NtOXdaWEowYVdWelhHNGdJQ0FnSUNBZ0lDTWpJRkpsZEhWeWJuTWdibVYzSUdsdWMzUmhibU5sSUc5bUlIUm9hWE1nVUhKdlkyVnpjeWR6SUdCd2NtOTBiM1I1Y0dWZ0lIZHBkR2dnWlhocGMzUnBibWNnWVc1a0lHNWxkeUJ3Y205d1pYSjBhV1Z6WEc1Y2JpQWdJQ0FnSUNBZ1FIQmhjbUZ0SUZ0dlltcGxZM1JkSUNodmNIUnBiMjVoYkNsY2JpQWdJQ0FnSUNBZ1FISmxkSFZ5YmlCYlVISnZZMlZ6YzExY2JpQWdJQ0FxTDF4dUlDQWdJR2x1YUdWeWFYUW9jSEp2Y0hNcElIdGNiaUFnSUNBZ0lDQWdZMjl1YzNRZ2V5QnBaQ3dnTGk0dWFXNW9aWEpwZEdWa1VISnZjSE1nZlNBOUlIUm9hWE03WEc0Z0lDQWdJQ0FnSUdOdmJuTjBJRzVsZDFCeWIyTmxjM01nUFNCdVpYY2dkR2hwY3k1amIyNXpkSEoxWTNSdmNpaHBibWhsY21sMFpXUlFjbTl3Y3lrN1hHNGdJQ0FnSUNBZ0lISmxkSFZ5YmlCdVpYZFFjbTlqWlhOekxuTmxkQ2h3Y205d2N5azdYRzRnSUNBZ2ZWeHVmU0pkZlE9PVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvcHJvY2Vzcy9Qcm9jZXNzLmpzXG4gKiogbW9kdWxlIGlkID0gN1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9O1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX1Byb2Nlc3MyID0gcmVxdWlyZSgnLi4vcHJvY2Vzcy9Qcm9jZXNzJyk7XG5cbnZhciBfUHJvY2VzczMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9Qcm9jZXNzMik7XG5cbnZhciBfdXRpbHMgPSByZXF1aXJlKCcuLi9pbmMvdXRpbHMnKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoIXNlbGYpIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBjYWxsICYmICh0eXBlb2YgY2FsbCA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSA/IGNhbGwgOiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90IFwiICsgdHlwZW9mIHN1cGVyQ2xhc3MpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIGVudW1lcmFibGU6IGZhbHNlLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIDogc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzczsgfVxuXG52YXIgSW5wdXQgPSBmdW5jdGlvbiAoX1Byb2Nlc3MpIHtcbiAgICBfaW5oZXJpdHMoSW5wdXQsIF9Qcm9jZXNzKTtcblxuICAgIGZ1bmN0aW9uIElucHV0KGluaXRpYWxWYWx1ZXMsIHBvbGwpIHtcbiAgICAgICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIElucHV0KTtcblxuICAgICAgICB2YXIgX3RoaXMgPSBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCBfUHJvY2Vzcy5jYWxsKHRoaXMpKTtcblxuICAgICAgICBfdGhpcy5zdGF0ZSA9IGluaXRpYWxWYWx1ZXM7XG5cbiAgICAgICAgaWYgKCgwLCBfdXRpbHMuaXNGdW5jKShwb2xsKSkge1xuICAgICAgICAgICAgX3RoaXMub25GcmFtZVN0YXJ0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBfdGhpcy5sYXRlc3QoX3RoaXMucG9sbCgpKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIF90aGlzO1xuICAgIH1cblxuICAgIC8qXG4gICAgICAgIE1hbnVhbGx5IGFkZCBsYXRlc3QgdmFsdWVzXG4gICAgICAgICBAcGFyYW0gW29iamVjdF1cbiAgICAqL1xuXG4gICAgSW5wdXQucHJvdG90eXBlLmxhdGVzdCA9IGZ1bmN0aW9uIGxhdGVzdChwcm9wcykge1xuICAgICAgICB0aGlzLnN0YXRlID0gX2V4dGVuZHMoe30sIHRoaXMuc3RhdGUsIHByb3BzKTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIElucHV0O1xufShfUHJvY2VzczMuZGVmYXVsdCk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IElucHV0O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluTnlZeTlwYm5CMWRDOUpibkIxZEM1cWN5SmRMQ0p1WVcxbGN5STZXMTBzSW0xaGNIQnBibWR6SWpvaU96czdPenM3T3pzN096czdPenM3T3pzN096dEpRVWR4UWpzN08wRkJRMnBDTEdGQlJHbENMRXRCUTJwQ0xFTkJRVmtzWVVGQldpeEZRVUV5UWl4SlFVRXpRaXhGUVVGcFF6czRRa0ZFYUVJc1QwRkRaMEk3TzNGRVFVTTNRaXh4UWtGRU5rSTdPMEZCUlRkQ0xHTkJRVXNzUzBGQlRDeEhRVUZoTEdGQlFXSXNRMEZHTmtJN08wRkJTVGRDTEZsQlFVa3NiVUpCUVU4c1NVRkJVQ3hEUVVGS0xFVkJRV3RDTzBGQlEyUXNhMEpCUVVzc1dVRkJUQ3hIUVVGdlFqdDFRa0ZCVFN4TlFVRkxMRTFCUVV3c1EwRkJXU3hOUVVGTExFbEJRVXdzUlVGQldqdGhRVUZPTEVOQlJFNDdVMEZCYkVJN2NVSkJTalpDTzB0QlFXcERPenM3T3pzN08wRkJSR2xDTEc5Q1FXVnFRaXg1UWtGQlR5eFBRVUZQTzBGQlExWXNZVUZCU3l4TFFVRk1MR2RDUVVGclFpeExRVUZMTEV0QlFVd3NSVUZCWlN4TlFVRnFReXhEUVVSVk96czdWMEZtUnlJc0ltWnBiR1VpT2lKSmJuQjFkQzVxY3lJc0luTnZkWEpqWlZKdmIzUWlPaUl2VlhObGNuTXZUV0YwZEM5VGFYUmxjeTl3YjNCdGIzUnBiMjRpTENKemIzVnlZMlZ6UTI5dWRHVnVkQ0k2V3lKcGJYQnZjblFnVUhKdlkyVnpjeUJtY205dElDY3VMaTl3Y205alpYTnpMMUJ5YjJObGMzTW5PMXh1YVcxd2IzSjBJSHNnYVhOR2RXNWpJSDBnWm5KdmJTQW5MaTR2YVc1akwzVjBhV3h6Snp0Y2JseHVaWGh3YjNKMElHUmxabUYxYkhRZ1kyeGhjM01nU1c1d2RYUWdaWGgwWlc1a2N5QlFjbTlqWlhOeklIdGNiaUFnSUNCamIyNXpkSEoxWTNSdmNpaHBibWwwYVdGc1ZtRnNkV1Z6TENCd2IyeHNLU0I3WEc0Z0lDQWdJQ0FnSUhOMWNHVnlLQ2s3WEc0Z0lDQWdJQ0FnSUhSb2FYTXVjM1JoZEdVZ1BTQnBibWwwYVdGc1ZtRnNkV1Z6TzF4dVhHNGdJQ0FnSUNBZ0lHbG1JQ2hwYzBaMWJtTW9jRzlzYkNrcElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUhSb2FYTXViMjVHY21GdFpWTjBZWEowSUQwZ0tDa2dQVDRnZEdocGN5NXNZWFJsYzNRb2RHaHBjeTV3YjJ4c0tDa3BPMXh1SUNBZ0lDQWdJQ0I5WEc0Z0lDQWdmVnh1WEc0Z0lDQWdMeXBjYmlBZ0lDQWdJQ0FnVFdGdWRXRnNiSGtnWVdSa0lHeGhkR1Z6ZENCMllXeDFaWE5jYmx4dUlDQWdJQ0FnSUNCQWNHRnlZVzBnVzI5aWFtVmpkRjFjYmlBZ0lDQXFMMXh1SUNBZ0lHeGhkR1Z6ZENod2NtOXdjeWtnZTF4dUlDQWdJQ0FnSUNCMGFHbHpMbk4wWVhSbElEMGdleUF1TGk1MGFHbHpMbk4wWVhSbExDQXVMaTV3Y205d2N5QjlPMXh1SUNBZ0lIMWNibjFjYmlKZGZRPT1cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2lucHV0L0lucHV0LmpzXG4gKiogbW9kdWxlIGlkID0gOFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0cy5kZWZhdWx0ID0gc3RhZ2dlcjtcblxudmFyIF9Ud2VlbiA9IHJlcXVpcmUoJy4uL2FjdGlvbnMvVHdlZW4nKTtcblxudmFyIF9Ud2VlbjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9Ud2Vlbik7XG5cbnZhciBfcHJlc2V0RWFzaW5nID0gcmVxdWlyZSgnLi4vYWN0aW9ucy9lYXNpbmcvcHJlc2V0LWVhc2luZycpO1xuXG52YXIgX3ByZXNldEVhc2luZzIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9wcmVzZXRFYXNpbmcpO1xuXG52YXIgX3V0aWxzID0gcmVxdWlyZSgnLi91dGlscycpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG52YXIgREVGQVVMVF9JTlRFUlZBTCA9IDEwMDtcblxuZnVuY3Rpb24gc3RhZ2dlcihhcnJheSwgY2FsbGJhY2ssIHByb3BzKSB7XG4gICAgdmFyIGFycmF5TGVuZ3RoID0gYXJyYXkubGVuZ3RoO1xuICAgIHZhciBwcm9wc0lzSW50ZXJ2YWwgPSAoMCwgX3V0aWxzLmlzTnVtKShwcm9wcyk7XG4gICAgdmFyIGludGVydmFsID0gcHJvcHNJc0ludGVydmFsID8gcHJvcHMgOiBwcm9wcy5pbnRlcnZhbCB8fCBERUZBVUxUX0lOVEVSVkFMO1xuICAgIHZhciBwcmV2SW5kZXggPSAtMTtcblxuICAgIHZhciBzdGFnZ2VyVHdlZW4gPSBuZXcgX1R3ZWVuMi5kZWZhdWx0KHtcbiAgICAgICAgZHVyYXRpb246IGludGVydmFsICogYXJyYXlMZW5ndGgsXG4gICAgICAgIHZhbHVlczoge1xuICAgICAgICAgICAgaToge1xuICAgICAgICAgICAgICAgIGZyb206IDAsXG4gICAgICAgICAgICAgICAgdG86IGFycmF5TGVuZ3RoIC0gMSxcbiAgICAgICAgICAgICAgICByb3VuZDogdHJ1ZSxcbiAgICAgICAgICAgICAgICBlYXNlOiBwcm9wc0lzSW50ZXJ2YWwgPyBfcHJlc2V0RWFzaW5nMi5kZWZhdWx0LmxpbmVhciA6IHByb3BzLmVhc2UgfHwgX3ByZXNldEVhc2luZzIuZGVmYXVsdC5saW5lYXJcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgb25SZW5kZXI6IGZ1bmN0aW9uICh0d2Vlbikge1xuICAgICAgICAgICAgdmFyIGkgPSB0d2Vlbi5zdGF0ZS5pO1xuICAgICAgICAgICAgdmFyIGdhcEluZGV4ID0gcHJldkluZGV4ICsgMTtcblxuICAgICAgICAgICAgZm9yICg7IGdhcEluZGV4IDw9IGk7IGdhcEluZGV4KyspIHtcbiAgICAgICAgICAgICAgICBjYWxsYmFjayhhcnJheVtnYXBJbmRleF0sIGdhcEluZGV4KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcHJldkluZGV4ID0gaTtcbiAgICAgICAgfSxcbiAgICAgICAgb25Db21wbGV0ZTogcHJvcHNJc0ludGVydmFsID8gdW5kZWZpbmVkIDogcHJvcHMub25Db21wbGV0ZVxuICAgIH0pO1xuXG4gICAgc3RhZ2dlclR3ZWVuLnN0YXJ0KCk7XG5cbiAgICByZXR1cm4gc3RhZ2dlclR3ZWVuO1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluTnlZeTlwYm1NdmMzUmhaMmRsY2k1cWN5SmRMQ0p1WVcxbGN5STZXMTBzSW0xaGNIQnBibWR6SWpvaU96czdhMEpCVFhkQ096czdPenM3T3pzN096czdPenRCUVVaNFFpeEpRVUZOTEcxQ1FVRnRRaXhIUVVGdVFqczdRVUZGVXl4VFFVRlRMRTlCUVZRc1EwRkJhVUlzUzBGQmFrSXNSVUZCZDBJc1VVRkJlRUlzUlVGQmEwTXNTMEZCYkVNc1JVRkJlVU03UVVGRGNFUXNVVUZCVFN4alFVRmpMRTFCUVUwc1RVRkJUaXhEUVVSblF6dEJRVVZ3UkN4UlFVRk5MR3RDUVVGclFpeHJRa0ZCVFN4TFFVRk9MRU5CUVd4Q0xFTkJSamhETzBGQlIzQkVMRkZCUVUwc1YwRkJWeXhyUWtGQmEwSXNTMEZCYkVJc1IwRkJNRUlzVFVGQlRTeFJRVUZPTEVsQlFXdENMR2RDUVVGc1FpeERRVWhUTzBGQlNYQkVMRkZCUVVrc1dVRkJXU3hEUVVGRExFTkJRVVFzUTBGS2IwTTdPMEZCVFhCRUxGRkJRVTBzWlVGQlpTeHZRa0ZCVlR0QlFVTXpRaXhyUWtGQlZTeFhRVUZYTEZkQlFWZzdRVUZEVml4blFrRkJVVHRCUVVOS0xHVkJRVWM3UVVGRFF5eHpRa0ZCVFN4RFFVRk9PMEZCUTBFc2IwSkJRVWtzWTBGQll5eERRVUZrTzBGQlEwb3NkVUpCUVU4c1NVRkJVRHRCUVVOQkxITkNRVUZOTEd0Q1FVRnJRaXgxUWtGQlR5eE5RVUZRTEVkQlFXZENMRTFCUVUwc1NVRkJUaXhKUVVGakxIVkNRVUZQTEUxQlFWQTdZVUZLTVVRN1UwRkVTanRCUVZGQkxHdENRVUZWTEZWQlFVTXNTMEZCUkN4RlFVRlhPMEZCUTJwQ0xHZENRVUZOTEVsQlFVa3NUVUZCVFN4TFFVRk9MRU5CUVZrc1EwRkJXaXhEUVVSUE8wRkJSV3BDTEdkQ1FVRkpMRmRCUVZjc1dVRkJXU3hEUVVGYUxFTkJSa1U3TzBGQlNXcENMRzFDUVVGUExGbEJRVmtzUTBGQldpeEZRVUZsTEZWQlFYUkNMRVZCUVd0RE8wRkJRemxDTEhsQ1FVRlRMRTFCUVUwc1VVRkJUaXhEUVVGVUxFVkJRVEJDTEZGQlFURkNMRVZCUkRoQ08yRkJRV3hET3p0QlFVbEJMSGRDUVVGWkxFTkJRVm9zUTBGU2FVSTdVMEZCV0R0QlFWVldMRzlDUVVGWkxHdENRVUZyUWl4VFFVRnNRaXhIUVVFNFFpeE5RVUZOTEZWQlFVNDdTMEZ3UW5wQ0xFTkJRV1lzUTBGT09FTTdPMEZCTmtKd1JDeHBRa0ZCWVN4TFFVRmlMRWRCTjBKdlJEczdRVUVyUW5CRUxGZEJRVThzV1VGQlVDeERRUzlDYjBRN1EwRkJla01pTENKbWFXeGxJam9pYzNSaFoyZGxjaTVxY3lJc0luTnZkWEpqWlZKdmIzUWlPaUl2VlhObGNuTXZUV0YwZEM5VGFYUmxjeTl3YjNCdGIzUnBiMjRpTENKemIzVnlZMlZ6UTI5dWRHVnVkQ0k2V3lKcGJYQnZjblFnVkhkbFpXNGdabkp2YlNBbkxpNHZZV04wYVc5dWN5OVVkMlZsYmljN1hHNXBiWEJ2Y25RZ1pXRnphVzVuSUdaeWIyMGdKeTR1TDJGamRHbHZibk12WldGemFXNW5MM0J5WlhObGRDMWxZWE5wYm1jbk8xeHVhVzF3YjNKMElIc2dhWE5PZFcwZ2ZTQm1jbTl0SUNjdUwzVjBhV3h6Snp0Y2JseHVZMjl1YzNRZ1JFVkdRVlZNVkY5SlRsUkZVbFpCVENBOUlERXdNRHRjYmx4dVpYaHdiM0owSUdSbFptRjFiSFFnWm5WdVkzUnBiMjRnYzNSaFoyZGxjaWhoY25KaGVTd2dZMkZzYkdKaFkyc3NJSEJ5YjNCektTQjdYRzRnSUNBZ1kyOXVjM1FnWVhKeVlYbE1aVzVuZEdnZ1BTQmhjbkpoZVM1c1pXNW5kR2c3WEc0Z0lDQWdZMjl1YzNRZ2NISnZjSE5KYzBsdWRHVnlkbUZzSUQwZ2FYTk9kVzBvY0hKdmNITXBPMXh1SUNBZ0lHTnZibk4wSUdsdWRHVnlkbUZzSUQwZ2NISnZjSE5KYzBsdWRHVnlkbUZzSUQ4Z2NISnZjSE1nT2lCd2NtOXdjeTVwYm5SbGNuWmhiQ0I4ZkNCRVJVWkJWVXhVWDBsT1ZFVlNWa0ZNTzF4dUlDQWdJR3hsZENCd2NtVjJTVzVrWlhnZ1BTQXRNVHRjYmx4dUlDQWdJR052Ym5OMElITjBZV2RuWlhKVWQyVmxiaUE5SUc1bGR5QlVkMlZsYmloN1hHNGdJQ0FnSUNBZ0lHUjFjbUYwYVc5dU9pQnBiblJsY25aaGJDQXFJR0Z5Y21GNVRHVnVaM1JvTEZ4dUlDQWdJQ0FnSUNCMllXeDFaWE02SUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJR2s2SUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCbWNtOXRPaUF3TEZ4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUhSdk9pQmhjbkpoZVV4bGJtZDBhQ0F0SURFc1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2NtOTFibVE2SUhSeWRXVXNYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdaV0Z6WlRvZ2NISnZjSE5KYzBsdWRHVnlkbUZzSUQ4Z1pXRnphVzVuTG14cGJtVmhjaUE2SUhCeWIzQnpMbVZoYzJVZ2ZId2daV0Z6YVc1bkxteHBibVZoY2x4dUlDQWdJQ0FnSUNBZ0lDQWdmVnh1SUNBZ0lDQWdJQ0I5TEZ4dUlDQWdJQ0FnSUNCdmJsSmxibVJsY2pvZ0tIUjNaV1Z1S1NBOVBpQjdYRzRnSUNBZ0lDQWdJQ0FnSUNCamIyNXpkQ0JwSUQwZ2RIZGxaVzR1YzNSaGRHVXVhVHRjYmlBZ0lDQWdJQ0FnSUNBZ0lHeGxkQ0JuWVhCSmJtUmxlQ0E5SUhCeVpYWkpibVJsZUNBcklERTdYRzVjYmlBZ0lDQWdJQ0FnSUNBZ0lHWnZjaUFvT3lCbllYQkpibVJsZUNBOFBTQnBPeUJuWVhCSmJtUmxlQ3NyS1NCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ1kyRnNiR0poWTJzb1lYSnlZWGxiWjJGd1NXNWtaWGhkTENCbllYQkpibVJsZUNrN1hHNGdJQ0FnSUNBZ0lDQWdJQ0I5WEc1Y2JpQWdJQ0FnSUNBZ0lDQWdJSEJ5WlhaSmJtUmxlQ0E5SUdrN1hHNGdJQ0FnSUNBZ0lIMHNYRzRnSUNBZ0lDQWdJRzl1UTI5dGNHeGxkR1U2SUhCeWIzQnpTWE5KYm5SbGNuWmhiQ0EvSUhWdVpHVm1hVzVsWkNBNklIQnliM0J6TG05dVEyOXRjR3hsZEdWY2JpQWdJQ0I5S1R0Y2JseHVJQ0FnSUhOMFlXZG5aWEpVZDJWbGJpNXpkR0Z5ZENncE8xeHVYRzRnSUNBZ2NtVjBkWEp1SUhOMFlXZG5aWEpVZDJWbGJqdGNibjBpWFgwPVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvaW5jL3N0YWdnZXIuanNcbiAqKiBtb2R1bGUgaWQgPSA5XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbnZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzLmRlZmF1bHQgPSB0aW1lbGluZTtcblxudmFyIF9Ud2VlbiA9IHJlcXVpcmUoJy4uL2FjdGlvbnMvVHdlZW4nKTtcblxudmFyIF9Ud2VlbjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9Ud2Vlbik7XG5cbnZhciBfcHJlc2V0RWFzaW5nID0gcmVxdWlyZSgnLi4vYWN0aW9ucy9lYXNpbmcvcHJlc2V0LWVhc2luZycpO1xuXG52YXIgX3ByZXNldEVhc2luZzIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9wcmVzZXRFYXNpbmcpO1xuXG52YXIgX2NhbGMgPSByZXF1aXJlKCcuL2NhbGMnKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuLypcbiAgICBAcGFyYW0gW2FycmF5XVxuICAgICAgICBTZXF1ZW50aWFsIGFycmF5IG9mIHR3ZWVucywgZWFjaCBpdGVtIGNhbiBiZSBhIHR3ZWVuIG9yIGRlZmluaXRpb24gb2JqOlxuXG4gICAgICAgIFtcbiAgICAgICAgICAgIG5ldyBUd2VlbigpLFxuICAgICAgICAgICAgc3RhZ2dlcigpLFxuICAgICAgICAgICAgdGltZWxpbmUoKSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0d2VlbjogbmV3IFR3ZWVuKCksXG4gICAgICAgICAgICAgICAgYXQ6IDEwMCxcbiAgICAgICAgICAgICAgICBvZmZzZXQ6IFwiKz0xMDBcIlxuICAgICAgICAgICAgfVxuICAgICAgICBdXG4qL1xudmFyIGFuYWx5emUgPSBmdW5jdGlvbiAoZGVmcykge1xuICAgIHZhciB0aW1lbGluZSA9IFtdO1xuICAgIHZhciBudW1EZWZzID0gZGVmcy5sZW5ndGg7XG4gICAgdmFyIGN1cnJlbnRQbGF5aGVhZCA9IDA7XG5cbiAgICB2YXIgX2xvb3AgPSBmdW5jdGlvbiAoaSkge1xuICAgICAgICB2YXIgZGVmID0gZGVmc1tpXTtcbiAgICAgICAgdmFyIGRlZklzT2JqID0gZGVmLnR3ZWVuID8gdHJ1ZSA6IGZhbHNlO1xuICAgICAgICB2YXIgdHdlZW4gPSBkZWZJc09iaiA/IGRlZi50d2VlbiA6IGRlZjtcblxuICAgICAgICBjdXJyZW50UGxheWhlYWQgKz0gZGVmSXNPYmogJiYgZGVmLm9mZnNldCA/IGRlZi5hdCB8fCAoMCwgX2NhbGMucmVsYXRpdmVWYWx1ZSkoY3VycmVudFBsYXloZWFkLCBkZWYub2Zmc2V0KSA6IDA7XG5cbiAgICAgICAgdmFyIGR1cmF0aW9uID0gMDtcbiAgICAgICAgZm9yICh2YXIga2V5IGluIHR3ZWVuLnZhbHVlcykge1xuICAgICAgICAgICAgaWYgKHR3ZWVuLnZhbHVlcy5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgICAgICAgdmFyIHZhbHVlID0gdHdlZW4udmFsdWVzW2tleV07XG4gICAgICAgICAgICAgICAgZHVyYXRpb24gPSBNYXRoLm1heChkdXJhdGlvbiwgdmFsdWUuZHVyYXRpb24pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgdGltZWxpbmUucHVzaCh7XG4gICAgICAgICAgICBmcm9tOiBjdXJyZW50UGxheWhlYWQsXG4gICAgICAgICAgICBkdXJhdGlvbjogZHVyYXRpb24sXG4gICAgICAgICAgICBmaXJlOiBmdW5jdGlvbiAodGltZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0d2Vlbi5zZWVrVGltZSh0aW1lKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgY3VycmVudFBsYXloZWFkICs9IHR3ZWVuLmR1cmF0aW9uO1xuICAgIH07XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IG51bURlZnM7IGkrKykge1xuICAgICAgICBfbG9vcChpKTtcbiAgICB9XG5cbiAgICByZXR1cm4geyB0b3RhbFRpbWU6IGN1cnJlbnRQbGF5aGVhZCwgdGltZWxpbmU6IHRpbWVsaW5lIH07XG59O1xuXG52YXIgc2V0VHdlZW5zID0gZnVuY3Rpb24gKF9yZWYpIHtcbiAgICB2YXIgZWxhcHNlZCA9IF9yZWYuZWxhcHNlZDtcbiAgICB2YXIgdGltZWxpbmUgPSBfcmVmLnRpbWVsaW5lO1xuICAgIHZhciB0aW1lbGluZUxlbmd0aCA9IF9yZWYudGltZWxpbmVMZW5ndGg7XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRpbWVsaW5lTGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdmFyIF90d2VlbiA9IHRpbWVsaW5lW2ldO1xuICAgICAgICB2YXIgdHdlZW5UaW1lID0gZWxhcHNlZCAtIF90d2Vlbi5mcm9tO1xuXG4gICAgICAgIGlmICh0d2VlblRpbWUgPiAwICYmIHR3ZWVuVGltZSA8IF90d2Vlbi5kdXJhdGlvbikge1xuICAgICAgICAgICAgX3R3ZWVuLmZpcmUodHdlZW5UaW1lKTtcbiAgICAgICAgfVxuICAgIH1cbn07XG5cbmZ1bmN0aW9uIHRpbWVsaW5lKGRlZikge1xuICAgIHZhciBwcm9wcyA9IGFyZ3VtZW50cy5sZW5ndGggPD0gMSB8fCBhcmd1bWVudHNbMV0gPT09IHVuZGVmaW5lZCA/IHt9IDogYXJndW1lbnRzWzFdO1xuXG4gICAgdmFyIF9hbmFseXplID0gYW5hbHl6ZShkZWYpO1xuXG4gICAgdmFyIHRvdGFsVGltZSA9IF9hbmFseXplLnRvdGFsVGltZTtcbiAgICB2YXIgdGltZWxpbmUgPSBfYW5hbHl6ZS50aW1lbGluZTtcblxuICAgIHJldHVybiBuZXcgX1R3ZWVuMi5kZWZhdWx0KF9leHRlbmRzKHt9LCBwcm9wcywge1xuICAgICAgICBkdXJhdGlvbjogdG90YWxUaW1lLFxuICAgICAgICBlYXNlOiBfcHJlc2V0RWFzaW5nMi5kZWZhdWx0LmxpbmVhcixcbiAgICAgICAgdmFsdWVzOiB7XG4gICAgICAgICAgICBwOiAxXG4gICAgICAgIH0sXG4gICAgICAgIHRpbWVsaW5lOiB0aW1lbGluZSxcbiAgICAgICAgdGltZWxpbmVMZW5ndGg6IHRpbWVsaW5lLmxlbmd0aCxcbiAgICAgICAgb25SZW5kZXI6IHNldFR3ZWVuc1xuICAgIH0pKTtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbk55WXk5cGJtTXZkR2x0Wld4cGJtVXVhbk1pWFN3aWJtRnRaWE1pT2x0ZExDSnRZWEJ3YVc1bmN5STZJanM3T3pzN2EwSkJLMFIzUWpzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN1FVRTFRM2hDTEVsQlFVMHNWVUZCVlN4VlFVRkRMRWxCUVVRc1JVRkJWVHRCUVVOMFFpeFJRVUZOTEZkQlFWY3NSVUZCV0N4RFFVUm5RanRCUVVWMFFpeFJRVUZOTEZWQlFWVXNTMEZCU3l4TlFVRk1MRU5CUmswN1FVRkhkRUlzVVVGQlNTeHJRa0ZCYTBJc1EwRkJiRUlzUTBGSWEwSTdPekJDUVV0aU8wRkJRMHdzV1VGQlRTeE5RVUZOTEV0QlFVc3NRMEZCVEN4RFFVRk9PMEZCUTA0c1dVRkJUU3hYUVVGWExFbEJRVWtzUzBGQlNpeEhRVUZaTEVsQlFWb3NSMEZCYlVJc1MwRkJia0k3UVVGRGFrSXNXVUZCVFN4UlFVRlJMRmRCUVdFc1NVRkJTU3hMUVVGS0xFZEJRVmtzUjBGQmVrSTdPMEZCUldRc01rSkJRVzlDTEZGQlFVTXNTVUZCV1N4SlFVRkpMRTFCUVVvc1IwRkROMElzU1VGQlNTeEZRVUZLTEVsQlFWVXNlVUpCUVdNc1pVRkJaQ3hGUVVFclFpeEpRVUZKTEUxQlFVb3NRMEZCZWtNc1IwRkJkVVFzUTBGRWRrTTdPMEZCUjNCQ0xGbEJRVWtzVjBGQlZ5eERRVUZZTzBGQlEwb3NZVUZCU3l4SlFVRkpMRWRCUVVvc1NVRkJWeXhOUVVGTkxFMUJRVTRzUlVGQll6dEJRVU14UWl4blFrRkJTU3hOUVVGTkxFMUJRVTRzUTBGQllTeGpRVUZpTEVOQlFUUkNMRWRCUVRWQ0xFTkJRVW9zUlVGQmMwTTdRVUZEYkVNc2IwSkJRVTBzVVVGQlVTeE5RVUZOTEUxQlFVNHNRMEZCWVN4SFFVRmlMRU5CUVZJc1EwRkVORUk3UVVGRmJFTXNNa0pCUVZjc1MwRkJTeXhIUVVGTUxFTkJRVk1zVVVGQlZDeEZRVUZ0UWl4TlFVRk5MRkZCUVU0c1EwRkJPVUlzUTBGR2EwTTdZVUZCZEVNN1UwRkVTanM3UVVGUFFTeHBRa0ZCVXl4SlFVRlVMRU5CUVdNN1FVRkRWaXhyUWtGQlRTeGxRVUZPTzBGQlEwRXNjMEpCUVZVc1VVRkJWanRCUVVOQkxHdENRVUZOTEZWQlFVTXNTVUZCUkR0MVFrRkJWU3hOUVVGTkxGRkJRVTRzUTBGQlpTeEpRVUZtTzJGQlFWWTdVMEZJVmpzN1FVRk5RU3d5UWtGQmJVSXNUVUZCVFN4UlFVRk9PMDFCTTBKRU96dEJRVXQwUWl4VFFVRkxMRWxCUVVrc1NVRkJTU3hEUVVGS0xFVkJRVThzU1VGQlNTeFBRVUZLTEVWQlFXRXNSMEZCTjBJc1JVRkJhME03WTBGQmVrSXNSMEZCZVVJN1MwRkJiRU03TzBGQmVVSkJMRmRCUVU4c1JVRkJSU3hYUVVGWExHVkJRVmdzUlVGQk5FSXNhMEpCUVRsQ0xFVkJRVkFzUTBFNVFuTkNPME5CUVZZN08wRkJhVU5vUWl4SlFVRk5MRmxCUVZrc1owSkJRVEpETzFGQlFYaERMSFZDUVVGM1F6dFJRVUV2UWl4NVFrRkJLMEk3VVVGQmNrSXNjVU5CUVhGQ096dEJRVU42UkN4VFFVRkxMRWxCUVVrc1NVRkJTU3hEUVVGS0xFVkJRVThzU1VGQlNTeGpRVUZLTEVWQlFXOUNMRWRCUVhCRExFVkJRWGxETzBGQlEzSkRMRmxCUVUwc1UwRkJVU3hUUVVGVExFTkJRVlFzUTBGQlVpeERRVVFyUWp0QlFVVnlReXhaUVVGTkxGbEJRVmtzVlVGQlZTeFBRVUZOTEVsQlFVNHNRMEZHVXpzN1FVRkpja01zV1VGQlNTeFpRVUZaTEVOQlFWb3NTVUZCYVVJc1dVRkJXU3hQUVVGTkxGRkJRVTRzUlVGQlowSTdRVUZETjBNc2JVSkJRVTBzU1VGQlRpeERRVUZYTEZOQlFWZ3NSVUZFTmtNN1UwRkJha1E3UzBGS1NqdERRVVJqT3p0QlFWZElMRk5CUVZNc1VVRkJWQ3hEUVVGclFpeEhRVUZzUWl4RlFVRnRRenRSUVVGYUxEaEVRVUZSTEd0Q1FVRkpPenR0UWtGRFpDeFJRVUZSTEVkQlFWSXNSVUZFWXpzN1VVRkRkRU1zSzBKQlJITkRPMUZCUXpOQ0xEWkNRVVF5UWpzN1FVRkhPVU1zVjBGQlR5eHBRMEZEUVR0QlFVTklMR3RDUVVGVkxGTkJRVlk3UVVGRFFTeGpRVUZOTEhWQ1FVRlBMRTFCUVZBN1FVRkRUaXhuUWtGQlVUdEJRVU5LTEdWQlFVY3NRMEZCU0R0VFFVUktPMEZCUjBFc2EwSkJRVlVzVVVGQlZqdEJRVU5CTEhkQ1FVRm5RaXhUUVVGVExFMUJRVlE3UVVGRGFFSXNhMEpCUVZVc1UwRkJWanROUVZSSExFTkJRVkFzUTBGSU9FTTdRMEZCYmtNaUxDSm1hV3hsSWpvaWRHbHRaV3hwYm1VdWFuTWlMQ0p6YjNWeVkyVlNiMjkwSWpvaUwxVnpaWEp6TDAxaGRIUXZVMmwwWlhNdmNHOXdiVzkwYVc5dUlpd2ljMjkxY21ObGMwTnZiblJsYm5RaU9sc2lhVzF3YjNKMElGUjNaV1Z1SUdaeWIyMGdKeTR1TDJGamRHbHZibk12VkhkbFpXNG5PMXh1YVcxd2IzSjBJR1ZoYzJsdVp5Qm1jbTl0SUNjdUxpOWhZM1JwYjI1ekwyVmhjMmx1Wnk5d2NtVnpaWFF0WldGemFXNW5KenRjYm1sdGNHOXlkQ0I3SUhKbGJHRjBhWFpsVm1Gc2RXVWdmU0JtY205dElDY3VMMk5oYkdNbk8xeHVYRzR2S2x4dUlDQWdJRUJ3WVhKaGJTQmJZWEp5WVhsZFhHNGdJQ0FnSUNBZ0lGTmxjWFZsYm5ScFlXd2dZWEp5WVhrZ2IyWWdkSGRsWlc1ekxDQmxZV05vSUdsMFpXMGdZMkZ1SUdKbElHRWdkSGRsWlc0Z2IzSWdaR1ZtYVc1cGRHbHZiaUJ2WW1vNlhHNWNiaUFnSUNBZ0lDQWdXMXh1SUNBZ0lDQWdJQ0FnSUNBZ2JtVjNJRlIzWldWdUtDa3NYRzRnSUNBZ0lDQWdJQ0FnSUNCemRHRm5aMlZ5S0Nrc1hHNGdJQ0FnSUNBZ0lDQWdJQ0IwYVcxbGJHbHVaU2dwTEZ4dUlDQWdJQ0FnSUNBZ0lDQWdlMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJSFIzWldWdU9pQnVaWGNnVkhkbFpXNG9LU3hjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0JoZERvZ01UQXdMRnh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJRzltWm5ObGREb2dYQ0lyUFRFd01Gd2lYRzRnSUNBZ0lDQWdJQ0FnSUNCOVhHNGdJQ0FnSUNBZ0lGMWNiaW92WEc1amIyNXpkQ0JoYm1Gc2VYcGxJRDBnS0dSbFpuTXBJRDArSUh0Y2JpQWdJQ0JqYjI1emRDQjBhVzFsYkdsdVpTQTlJRnRkTzF4dUlDQWdJR052Ym5OMElHNTFiVVJsWm5NZ1BTQmtaV1p6TG14bGJtZDBhRHRjYmlBZ0lDQnNaWFFnWTNWeWNtVnVkRkJzWVhsb1pXRmtJRDBnTUR0Y2JseHVJQ0FnSUdadmNpQW9iR1YwSUdrZ1BTQXdPeUJwSUR3Z2JuVnRSR1ZtY3pzZ2FTc3JLU0I3WEc0Z0lDQWdJQ0FnSUdOdmJuTjBJR1JsWmlBOUlHUmxabk5iYVYwN1hHNGdJQ0FnSUNBZ0lHTnZibk4wSUdSbFprbHpUMkpxSUQwZ1pHVm1MblIzWldWdUlEOGdkSEoxWlNBNklHWmhiSE5sTzF4dUlDQWdJQ0FnSUNCamIyNXpkQ0IwZDJWbGJpQTlJQ2hrWldaSmMwOWlhaWtnUHlCa1pXWXVkSGRsWlc0Z09pQmtaV1k3WEc1Y2JpQWdJQ0FnSUNBZ1kzVnljbVZ1ZEZCc1lYbG9aV0ZrSUNzOUlDZ29aR1ZtU1hOUFltb2dKaVlnWkdWbUxtOW1abk5sZENrZ1AxeHVJQ0FnSUNBZ0lDQWdJQ0FnWkdWbUxtRjBJSHg4SUhKbGJHRjBhWFpsVm1Gc2RXVW9ZM1Z5Y21WdWRGQnNZWGxvWldGa0xDQmtaV1l1YjJabWMyVjBLU0E2SURBcE8xeHVYRzRnSUNBZ0lDQWdJR3hsZENCa2RYSmhkR2x2YmlBOUlEQTdYRzRnSUNBZ0lDQWdJR1p2Y2lBb2JHVjBJR3RsZVNCcGJpQjBkMlZsYmk1MllXeDFaWE1wSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJR2xtSUNoMGQyVmxiaTUyWVd4MVpYTXVhR0Z6VDNkdVVISnZjR1Z5ZEhrb2EyVjVLU2tnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUdOdmJuTjBJSFpoYkhWbElEMGdkSGRsWlc0dWRtRnNkV1Z6VzJ0bGVWMDdYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdaSFZ5WVhScGIyNGdQU0JOWVhSb0xtMWhlQ2hrZFhKaGRHbHZiaXdnZG1Gc2RXVXVaSFZ5WVhScGIyNHBPMXh1SUNBZ0lDQWdJQ0FnSUNBZ2ZWeHVJQ0FnSUNBZ0lDQjlYRzVjYmlBZ0lDQWdJQ0FnZEdsdFpXeHBibVV1Y0hWemFDaDdYRzRnSUNBZ0lDQWdJQ0FnSUNCbWNtOXRPaUJqZFhKeVpXNTBVR3hoZVdobFlXUXNYRzRnSUNBZ0lDQWdJQ0FnSUNCa2RYSmhkR2x2YmpvZ1pIVnlZWFJwYjI0c1hHNGdJQ0FnSUNBZ0lDQWdJQ0JtYVhKbE9pQW9kR2x0WlNrZ1BUNGdkSGRsWlc0dWMyVmxhMVJwYldVb2RHbHRaU2xjYmlBZ0lDQWdJQ0FnZlNrN1hHNWNiaUFnSUNBZ0lDQWdZM1Z5Y21WdWRGQnNZWGxvWldGa0lDczlJSFIzWldWdUxtUjFjbUYwYVc5dU8xeHVJQ0FnSUgxY2JseHVJQ0FnSUhKbGRIVnliaUI3SUhSdmRHRnNWR2x0WlRvZ1kzVnljbVZ1ZEZCc1lYbG9aV0ZrTENCMGFXMWxiR2x1WlNCOU8xeHVmVHRjYmx4dVkyOXVjM1FnYzJWMFZIZGxaVzV6SUQwZ0tIc2daV3hoY0hObFpDd2dkR2x0Wld4cGJtVXNJSFJwYldWc2FXNWxUR1Z1WjNSb0lIMHBJRDArSUh0Y2JpQWdJQ0JtYjNJZ0tHeGxkQ0JwSUQwZ01Ec2dhU0E4SUhScGJXVnNhVzVsVEdWdVozUm9PeUJwS3lzcElIdGNiaUFnSUNBZ0lDQWdZMjl1YzNRZ2RIZGxaVzRnUFNCMGFXMWxiR2x1WlZ0cFhUdGNiaUFnSUNBZ0lDQWdZMjl1YzNRZ2RIZGxaVzVVYVcxbElEMGdaV3hoY0hObFpDQXRJSFIzWldWdUxtWnliMjA3WEc1Y2JpQWdJQ0FnSUNBZ2FXWWdLSFIzWldWdVZHbHRaU0ErSURBZ0ppWWdkSGRsWlc1VWFXMWxJRHdnZEhkbFpXNHVaSFZ5WVhScGIyNHBJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lIUjNaV1Z1TG1acGNtVW9kSGRsWlc1VWFXMWxLVHRjYmlBZ0lDQWdJQ0FnZlZ4dUlDQWdJSDFjYm4wN1hHNWNibVY0Y0c5eWRDQmtaV1poZFd4MElHWjFibU4wYVc5dUlIUnBiV1ZzYVc1bEtHUmxaaXdnY0hKdmNITWdQU0I3ZlNrZ2UxeHVJQ0FnSUdOdmJuTjBJSHNnZEc5MFlXeFVhVzFsTENCMGFXMWxiR2x1WlNCOUlEMGdZVzVoYkhsNlpTaGtaV1lwTzF4dVhHNGdJQ0FnY21WMGRYSnVJRzVsZHlCVWQyVmxiaWg3WEc0Z0lDQWdJQ0FnSUM0dUxuQnliM0J6TEZ4dUlDQWdJQ0FnSUNCa2RYSmhkR2x2YmpvZ2RHOTBZV3hVYVcxbExGeHVJQ0FnSUNBZ0lDQmxZWE5sT2lCbFlYTnBibWN1YkdsdVpXRnlMRnh1SUNBZ0lDQWdJQ0IyWVd4MVpYTTZJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lIQTZJREZjYmlBZ0lDQWdJQ0FnZlN4Y2JpQWdJQ0FnSUNBZ2RHbHRaV3hwYm1VNklIUnBiV1ZzYVc1bExGeHVJQ0FnSUNBZ0lDQjBhVzFsYkdsdVpVeGxibWQwYURvZ2RHbHRaV3hwYm1VdWJHVnVaM1JvTEZ4dUlDQWdJQ0FnSUNCdmJsSmxibVJsY2pvZ2MyVjBWSGRsWlc1elhHNGdJQ0FnZlNrN1hHNTlJbDE5XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9pbmMvdGltZWxpbmUuanNcbiAqKiBtb2R1bGUgaWQgPSAxMFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbi8qXG4gICAgIyBBZGFwdGVyIGNsYXNzXG4gICAgIyMgUHJvdmlkZXMgYSBnZXR0ZXIvc2V0dGVyIHdyYXBwZXIgYW5kIHByb3BlcnR5IGNhY2hlIGZvciBkaWZmZXJlbnQgZWxlbWVudCB0eXBlc1xuXG4gICAgT3ZlcnJpZGUgYGdldHRlcmAgYW5kIGBzZXR0ZXJgIHRvIHJlaW1wbGVtZW50IHRoZSBpbnRlcmZhY2UgZm9yIG5ldyBlbGVtZW50IHR5cGVzLlxuXG4gICAgU2V0IGBFeHRlbmRlZC5wcm90b3R5cGUuc3RhdGVNYXBgIGFzIGFuIG9iamVjdCBrZXkvdmFsdWUgbWFwIHRvIHRyYW5zbGF0ZSBpbmNvbWluZyBrZXlzIHRvXG4gICAgQVBJLXNwZWNpZmljIGtleXMuIEZvciBpbnN0YW5jZSwgeyB4OiAndHJhbnNsYXRlWCcgfS4gXG5cbiAgICBTZXQgYEV4dGVuZGVkLnByb3RvdHlwZS52YWx1ZVR5cGVNYXBgIGFzIGFuIG9iamVjdCBrZXkvdmFsdWUgbWFwIHRvIHJldHVybiBhIHZhbHVlIHR5cGUgd2l0aFxuICAgIGBnZXRWYWx1ZVR5cGUoa2V5KWAgKGtleSB3aWxsIGJlIG1hcHBlZCBhY2NvcmRpbmcgdG8gYHN0YXRlTWFwYClcbiovXG5cbnZhciBBZGFwdGVyID0gZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIEFkYXB0ZXIocHJvcHMpIHtcbiAgICAgICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIEFkYXB0ZXIpO1xuXG4gICAgICAgIHRoaXMuZWxlbWVudCA9IHByb3BzLmVsZW1lbnQ7XG4gICAgICAgIHRoaXMuY2FjaGUgPSB7fTtcblxuICAgICAgICBpZiAocHJvcHMuZ2V0dGVyKSB7XG4gICAgICAgICAgICB0aGlzLmdldHRlciA9IHByb3BzLmdldHRlcjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChwcm9wcy5zZXR0ZXIpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0dGVyID0gcHJvcHMuc2V0dGVyO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHByb3BzLnN0YXRlTWFwKSB7XG4gICAgICAgICAgICB0aGlzLnN0YXRlTWFwID0gcHJvcHMuc3RhdGVNYXA7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAocHJvcHMudmFsdWVUeXBlTWFwKSB7XG4gICAgICAgICAgICB0aGlzLnZhbHVlVHlwZU1hcCA9IHByb3BzLnZhbHVlVHlwZU1hcDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qXG4gICAgICAgIEdldCBlbGVtZW50IHByb3BlcnR5XG4gICAgICAgICBAcGFyYW0gW3N0cmluZ106IEtleSB0byByZWFkXG4gICAgICAgIEBwYXJhbSBbYm9vbGVhbl06IElmIGB0cnVlYCwgd2lsbCBvdmVycmlkZSBjYWNoZWQgcHJvcGVydHlcbiAgICAqL1xuXG4gICAgQWRhcHRlci5wcm90b3R5cGUuZ2V0ID0gZnVuY3Rpb24gZ2V0KGtleSwgcmVmcmVzaCkge1xuICAgICAgICB2YXIgbWFwcGVkS2V5ID0gdGhpcy5tYXBTdGF0ZUtleShrZXkpO1xuXG4gICAgICAgIGlmIChyZWZyZXNoIHx8ICF0aGlzLmNhY2hlLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmNhY2hlW2tleV0gPSB0aGlzLmdldHRlcihtYXBwZWRLZXkpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY2FjaGVba2V5XTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICAvKlxuICAgICAgICBTZXQgZWxlbWVudCBwcm9wZXJ0aWVzXG4gICAgICAgICBAcGFyYW0gW29iamVjdF06IEtleS92YWx1ZSBwcm9wZXJ0aWVzIHRvIHNldFxuICAgICovXG5cbiAgICBBZGFwdGVyLnByb3RvdHlwZS5zZXQgPSBmdW5jdGlvbiBzZXQocHJvcHMpIHtcbiAgICAgICAgdmFyIHRyYW5zbGF0ZWRQcm9wcyA9IHt9O1xuXG4gICAgICAgIC8vIFRyYW5zbGF0ZSBwcm9wc1xuICAgICAgICBmb3IgKHZhciBrZXkgaW4gcHJvcHMpIHtcbiAgICAgICAgICAgIGlmIChwcm9wcy5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgICAgICAgdmFyIG1hcHBlZEtleSA9IHRoaXMubWFwU3RhdGVLZXkoa2V5KTtcbiAgICAgICAgICAgICAgICB0aGlzLmNhY2hlW2tleV0gPSB0cmFuc2xhdGVkUHJvcHNbbWFwcGVkS2V5XSA9IHByb3BzW2tleV07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcy5zZXR0ZXIodHJhbnNsYXRlZFByb3BzKTtcbiAgICB9O1xuXG4gICAgLypcbiAgICAgICAgT3ZlcnJpZGFibGUgZWxlbWVudCBnZXR0ZXIgLSBkZWZhdWx0IGZvciBwbGFpbiBvYmplY3QgXG4gICAgKi9cblxuICAgIEFkYXB0ZXIucHJvdG90eXBlLmdldHRlciA9IGZ1bmN0aW9uIGdldHRlcihrZXkpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZWxlbWVudFtrZXldO1xuICAgIH07XG5cbiAgICAvKlxuICAgICAgICBPdmVycmlkYWJsZSBlbGVtZW50IHNldHRlciAtIGRlZmF1bHQgZm9yIHBsYWluIG9iamVjdFxuICAgICovXG5cbiAgICBBZGFwdGVyLnByb3RvdHlwZS5zZXR0ZXIgPSBmdW5jdGlvbiBzZXR0ZXIocHJvcHMpIHtcbiAgICAgICAgZm9yICh2YXIga2V5IGluIHByb3BzKSB7XG4gICAgICAgICAgICBpZiAocHJvcHMuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgICAgICAgIHRoaXMuZWxlbWVudFtrZXldID0gcHJvcHNba2V5XTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG5cbiAgICAvKlxuICAgICAgICBNYXAgc3RhdGUga2V5IGFzIHBlciBgc3RhdGVNYXBgLCBpZiBwcmVzZW50XG4gICAgICAgICBAcGFyYW0gW3N0cmluZ106IEtleSB0byBtYXBcbiAgICAgICAgQHJldHVybiBbc3RyaW5nXTogTWFwcGVkIGtleSwgb3Igb3JpZ2luYWwga2V5IGlmIG5vbmUgZm91bmRcbiAgICAqL1xuXG4gICAgQWRhcHRlci5wcm90b3R5cGUubWFwU3RhdGVLZXkgPSBmdW5jdGlvbiBtYXBTdGF0ZUtleShrZXkpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc3RhdGVNYXAgPyB0aGlzLnN0YXRlTWFwW2tleV0gfHwga2V5IDoga2V5O1xuICAgIH07XG5cbiAgICAvKlxuICAgICAgICBHZXQgdmFsdWVUeXBlIG9mIHByb3ZpZGVkIGtleVxuICAgICAgICAgQHBhcmFtIFtzdHJpbmddOiBOYW1lIG9mIHByb3BlcnR5IHRvIG1hcFxuICAgICAgICBAcmV0dXJuIFt2YWx1ZVR5cGVdOiBWYWx1ZSB0eXBlIG9mIHByb3BlcnR5XG4gICAgKi9cblxuICAgIEFkYXB0ZXIucHJvdG90eXBlLmdldFZhbHVlVHlwZSA9IGZ1bmN0aW9uIGdldFZhbHVlVHlwZShrZXkpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudmFsdWVUeXBlTWFwID8gdGhpcy52YWx1ZVR5cGVNYXBbdGhpcy5tYXBTdGF0ZUtleShrZXkpXSA6IGZhbHNlO1xuICAgIH07XG5cbiAgICByZXR1cm4gQWRhcHRlcjtcbn0oKTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gQWRhcHRlcjtcblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gKHByb3BzKSB7XG4gICAgcmV0dXJuIG5ldyBBZGFwdGVyKHByb3BzKTtcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5OeVl5OWhaR0Z3ZEdWeUwyRmtZWEIwWlhJdWFuTWlYU3dpYm1GdFpYTWlPbHRkTENKdFlYQndhVzVuY3lJNklqczdPenM3T3pzN096czdPenM3T3pzN096dEpRVmx4UWp0QlFVTnFRaXhoUVVScFFpeFBRVU5xUWl4RFFVRlpMRXRCUVZvc1JVRkJiVUk3T0VKQlJFWXNVMEZEUlRzN1FVRkRaaXhoUVVGTExFOUJRVXdzUjBGQlpTeE5RVUZOTEU5QlFVNHNRMEZFUVR0QlFVVm1MR0ZCUVVzc1MwRkJUQ3hIUVVGaExFVkJRV0lzUTBGR1pUczdRVUZKWml4WlFVRkpMRTFCUVUwc1RVRkJUaXhGUVVGak8wRkJRMlFzYVVKQlFVc3NUVUZCVEN4SFFVRmpMRTFCUVUwc1RVRkJUaXhEUVVSQk8xTkJRV3hDT3p0QlFVbEJMRmxCUVVrc1RVRkJUU3hOUVVGT0xFVkJRV003UVVGRFpDeHBRa0ZCU3l4TlFVRk1MRWRCUVdNc1RVRkJUU3hOUVVGT0xFTkJSRUU3VTBGQmJFSTdPMEZCU1VFc1dVRkJTU3hOUVVGTkxGRkJRVTRzUlVGQlowSTdRVUZEYUVJc2FVSkJRVXNzVVVGQlRDeEhRVUZuUWl4TlFVRk5MRkZCUVU0c1EwRkVRVHRUUVVGd1FqczdRVUZKUVN4WlFVRkpMRTFCUVUwc1dVRkJUaXhGUVVGdlFqdEJRVU53UWl4cFFrRkJTeXhaUVVGTUxFZEJRVzlDTEUxQlFVMHNXVUZCVGl4RFFVUkJPMU5CUVhoQ08wdEJhRUpLT3pzN096czdPenRCUVVScFFpeHpRa0UwUW1wQ0xHMUNRVUZKTEV0QlFVc3NVMEZCVXp0QlFVTmtMRmxCUVUwc1dVRkJXU3hMUVVGTExGZEJRVXdzUTBGQmFVSXNSMEZCYWtJc1EwRkJXaXhEUVVSUk96dEJRVWRrTEZsQlFVa3NWMEZCVnl4RFFVRkRMRXRCUVVzc1MwRkJUQ3hEUVVGWExHTkJRVmdzUTBGQk1FSXNSMEZCTVVJc1EwRkJSQ3hGUVVGcFF6dEJRVU0xUXl4dFFrRkJUeXhMUVVGTExFdEJRVXdzUTBGQlZ5eEhRVUZZTEVsQlFXdENMRXRCUVVzc1RVRkJUQ3hEUVVGWkxGTkJRVm9zUTBGQmJFSXNRMEZFY1VNN1UwRkJhRVFzVFVGRlR6dEJRVU5JTEcxQ1FVRlBMRXRCUVVzc1MwRkJUQ3hEUVVGWExFZEJRVmdzUTBGQlVDeERRVVJITzFOQlJsQTdPenM3T3pzN08wRkJMMEpoTEhOQ1FUSkRha0lzYlVKQlFVa3NUMEZCVHp0QlFVTlFMRmxCUVUwc2EwSkJRV3RDTEVWQlFXeENPenM3UVVGRVF5eGhRVWxHTEVsQlFVa3NSMEZCU2l4SlFVRlhMRXRCUVdoQ0xFVkJRWFZDTzBGQlEyNUNMR2RDUVVGSkxFMUJRVTBzWTBGQlRpeERRVUZ4UWl4SFFVRnlRaXhEUVVGS0xFVkJRU3RDTzBGQlF6TkNMRzlDUVVGTkxGbEJRVmtzUzBGQlN5eFhRVUZNTEVOQlFXbENMRWRCUVdwQ0xFTkJRVm9zUTBGRWNVSTdRVUZGTTBJc2NVSkJRVXNzUzBGQlRDeERRVUZYTEVkQlFWZ3NTVUZCYTBJc1owSkJRV2RDTEZOQlFXaENMRWxCUVRaQ0xFMUJRVTBzUjBGQlRpeERRVUUzUWl4RFFVWlRPMkZCUVM5Q08xTkJSRW83TzBGQlQwRXNaVUZCVHl4TFFVRkxMRTFCUVV3c1EwRkJXU3hsUVVGYUxFTkJRVkFzUTBGWVR6czdPenM3T3p0QlFUTkRUU3h6UWtFMFJHcENMSGxDUVVGUExFdEJRVXM3UVVGRFVpeGxRVUZQTEV0QlFVc3NUMEZCVEN4RFFVRmhMRWRCUVdJc1EwRkJVQ3hEUVVSUk96czdPenM3TzBGQk5VUkxMSE5DUVcxRmFrSXNlVUpCUVU4c1QwRkJUenRCUVVOV0xHRkJRVXNzU1VGQlNTeEhRVUZLTEVsQlFWY3NTMEZCYUVJc1JVRkJkVUk3UVVGRGJrSXNaMEpCUVVrc1RVRkJUU3hqUVVGT0xFTkJRWEZDTEVkQlFYSkNMRU5CUVVvc1JVRkJLMEk3UVVGRE0wSXNjVUpCUVVzc1QwRkJUQ3hEUVVGaExFZEJRV0lzU1VGQmIwSXNUVUZCVFN4SFFVRk9MRU5CUVhCQ0xFTkJSREpDTzJGQlFTOUNPMU5CUkVvN096czdPenM3T3p0QlFYQkZZU3h6UWtGcFJtcENMRzFEUVVGWkxFdEJRVXM3UVVGRFlpeGxRVUZQTEVsQlFVTXNRMEZCU3l4UlFVRk1MRWRCUVdsQ0xFdEJRVXNzVVVGQlRDeERRVUZqTEVkQlFXUXNTMEZCYzBJc1IwRkJkRUlzUjBGQk5FSXNSMEZCT1VNc1EwRkVUVHM3T3pzN096czdPMEZCYWtaQkxITkNRVEpHYWtJc2NVTkJRV0VzUzBGQlN6dEJRVU5rTEdWQlFVOHNTVUZCUXl4RFFVRkxMRmxCUVV3c1IwRkJjVUlzUzBGQlN5eFpRVUZNTEVOQlFXdENMRXRCUVVzc1YwRkJUQ3hEUVVGcFFpeEhRVUZxUWl4RFFVRnNRaXhEUVVGMFFpeEhRVUZwUlN4TFFVRnFSU3hEUVVSUE96czdWMEV6UmtRN096czdPMnRDUVdkSFRpeFZRVUZETEV0QlFVUTdWMEZCVnl4SlFVRkpMRTlCUVVvc1EwRkJXU3hMUVVGYU8wTkJRVmdpTENKbWFXeGxJam9pWVdSaGNIUmxjaTVxY3lJc0luTnZkWEpqWlZKdmIzUWlPaUl2VlhObGNuTXZUV0YwZEM5VGFYUmxjeTl3YjNCdGIzUnBiMjRpTENKemIzVnlZMlZ6UTI5dWRHVnVkQ0k2V3lJdktseHVJQ0FnSUNNZ1FXUmhjSFJsY2lCamJHRnpjMXh1SUNBZ0lDTWpJRkJ5YjNacFpHVnpJR0VnWjJWMGRHVnlMM05sZEhSbGNpQjNjbUZ3Y0dWeUlHRnVaQ0J3Y205d1pYSjBlU0JqWVdOb1pTQm1iM0lnWkdsbVptVnlaVzUwSUdWc1pXMWxiblFnZEhsd1pYTmNibHh1SUNBZ0lFOTJaWEp5YVdSbElHQm5aWFIwWlhKZ0lHRnVaQ0JnYzJWMGRHVnlZQ0IwYnlCeVpXbHRjR3hsYldWdWRDQjBhR1VnYVc1MFpYSm1ZV05sSUdadmNpQnVaWGNnWld4bGJXVnVkQ0IwZVhCbGN5NWNibHh1SUNBZ0lGTmxkQ0JnUlhoMFpXNWtaV1F1Y0hKdmRHOTBlWEJsTG5OMFlYUmxUV0Z3WUNCaGN5QmhiaUJ2WW1wbFkzUWdhMlY1TDNaaGJIVmxJRzFoY0NCMGJ5QjBjbUZ1YzJ4aGRHVWdhVzVqYjIxcGJtY2dhMlY1Y3lCMGIxeHVJQ0FnSUVGUVNTMXpjR1ZqYVdacFl5QnJaWGx6TGlCR2IzSWdhVzV6ZEdGdVkyVXNJSHNnZURvZ0ozUnlZVzV6YkdGMFpWZ25JSDB1SUZ4dVhHNGdJQ0FnVTJWMElHQkZlSFJsYm1SbFpDNXdjbTkwYjNSNWNHVXVkbUZzZFdWVWVYQmxUV0Z3WUNCaGN5QmhiaUJ2WW1wbFkzUWdhMlY1TDNaaGJIVmxJRzFoY0NCMGJ5QnlaWFIxY200Z1lTQjJZV3gxWlNCMGVYQmxJSGRwZEdoY2JpQWdJQ0JnWjJWMFZtRnNkV1ZVZVhCbEtHdGxlU2xnSUNoclpYa2dkMmxzYkNCaVpTQnRZWEJ3WldRZ1lXTmpiM0prYVc1bklIUnZJR0J6ZEdGMFpVMWhjR0FwWEc0cUwxeHVaWGh3YjNKMElHUmxabUYxYkhRZ1kyeGhjM01nUVdSaGNIUmxjaUI3WEc0Z0lDQWdZMjl1YzNSeWRXTjBiM0lvY0hKdmNITXBJSHRjYmlBZ0lDQWdJQ0FnZEdocGN5NWxiR1Z0Wlc1MElEMGdjSEp2Y0hNdVpXeGxiV1Z1ZER0Y2JpQWdJQ0FnSUNBZ2RHaHBjeTVqWVdOb1pTQTlJSHQ5TzF4dVhHNGdJQ0FnSUNBZ0lHbG1JQ2h3Y205d2N5NW5aWFIwWlhJcElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUhSb2FYTXVaMlYwZEdWeUlEMGdjSEp2Y0hNdVoyVjBkR1Z5TzF4dUlDQWdJQ0FnSUNCOVhHNWNiaUFnSUNBZ0lDQWdhV1lnS0hCeWIzQnpMbk5sZEhSbGNpa2dlMXh1SUNBZ0lDQWdJQ0FnSUNBZ2RHaHBjeTV6WlhSMFpYSWdQU0J3Y205d2N5NXpaWFIwWlhJN1hHNGdJQ0FnSUNBZ0lIMWNibHh1SUNBZ0lDQWdJQ0JwWmlBb2NISnZjSE11YzNSaGRHVk5ZWEFwSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJSFJvYVhNdWMzUmhkR1ZOWVhBZ1BTQndjbTl3Y3k1emRHRjBaVTFoY0R0Y2JpQWdJQ0FnSUNBZ2ZWeHVYRzRnSUNBZ0lDQWdJR2xtSUNod2NtOXdjeTUyWVd4MVpWUjVjR1ZOWVhBcElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUhSb2FYTXVkbUZzZFdWVWVYQmxUV0Z3SUQwZ2NISnZjSE11ZG1Gc2RXVlVlWEJsVFdGd08xeHVJQ0FnSUNBZ0lDQjlYRzRnSUNBZ2ZWeHVYRzRnSUNBZ0x5cGNiaUFnSUNBZ0lDQWdSMlYwSUdWc1pXMWxiblFnY0hKdmNHVnlkSGxjYmx4dUlDQWdJQ0FnSUNCQWNHRnlZVzBnVzNOMGNtbHVaMTA2SUV0bGVTQjBieUJ5WldGa1hHNGdJQ0FnSUNBZ0lFQndZWEpoYlNCYlltOXZiR1ZoYmwwNklFbG1JR0IwY25WbFlDd2dkMmxzYkNCdmRtVnljbWxrWlNCallXTm9aV1FnY0hKdmNHVnlkSGxjYmlBZ0lDQXFMMXh1SUNBZ0lHZGxkQ2hyWlhrc0lISmxabkpsYzJncElIdGNiaUFnSUNBZ0lDQWdZMjl1YzNRZ2JXRndjR1ZrUzJWNUlEMGdkR2hwY3k1dFlYQlRkR0YwWlV0bGVTaHJaWGtwTzF4dVhHNGdJQ0FnSUNBZ0lHbG1JQ2h5WldaeVpYTm9JSHg4SUNGMGFHbHpMbU5oWTJobExtaGhjMDkzYmxCeWIzQmxjblI1S0d0bGVTa3BJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lISmxkSFZ5YmlCMGFHbHpMbU5oWTJobFcydGxlVjBnUFNCMGFHbHpMbWRsZEhSbGNpaHRZWEJ3WldSTFpYa3BPMXh1SUNBZ0lDQWdJQ0I5SUdWc2MyVWdlMXh1SUNBZ0lDQWdJQ0FnSUNBZ2NtVjBkWEp1SUhSb2FYTXVZMkZqYUdWYmEyVjVYVHRjYmlBZ0lDQWdJQ0FnZlZ4dUlDQWdJSDFjYmx4dUlDQWdJQzhxWEc0Z0lDQWdJQ0FnSUZObGRDQmxiR1Z0Wlc1MElIQnliM0JsY25ScFpYTmNibHh1SUNBZ0lDQWdJQ0JBY0dGeVlXMGdXMjlpYW1WamRGMDZJRXRsZVM5MllXeDFaU0J3Y205d1pYSjBhV1Z6SUhSdklITmxkRnh1SUNBZ0lDb3ZYRzRnSUNBZ2MyVjBLSEJ5YjNCektTQjdYRzRnSUNBZ0lDQWdJR052Ym5OMElIUnlZVzV6YkdGMFpXUlFjbTl3Y3lBOUlIdDlPMXh1WEc0Z0lDQWdJQ0FnSUM4dklGUnlZVzV6YkdGMFpTQndjbTl3YzF4dUlDQWdJQ0FnSUNCbWIzSWdLR3hsZENCclpYa2dhVzRnY0hKdmNITXBJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lHbG1JQ2h3Y205d2N5NW9ZWE5QZDI1UWNtOXdaWEowZVNoclpYa3BLU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnWTI5dWMzUWdiV0Z3Y0dWa1MyVjVJRDBnZEdocGN5NXRZWEJUZEdGMFpVdGxlU2hyWlhrcE8xeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lIUm9hWE11WTJGamFHVmJhMlY1WFNBOUlIUnlZVzV6YkdGMFpXUlFjbTl3YzF0dFlYQndaV1JMWlhsZElEMGdjSEp2Y0hOYmEyVjVYVHRjYmlBZ0lDQWdJQ0FnSUNBZ0lIMWNiaUFnSUNBZ0lDQWdmVnh1WEc0Z0lDQWdJQ0FnSUhKbGRIVnliaUIwYUdsekxuTmxkSFJsY2loMGNtRnVjMnhoZEdWa1VISnZjSE1wTzF4dUlDQWdJSDFjYmx4dUlDQWdJQzhxWEc0Z0lDQWdJQ0FnSUU5MlpYSnlhV1JoWW14bElHVnNaVzFsYm5RZ1oyVjBkR1Z5SUMwZ1pHVm1ZWFZzZENCbWIzSWdjR3hoYVc0Z2IySnFaV04wSUZ4dUlDQWdJQ292WEc0Z0lDQWdaMlYwZEdWeUtHdGxlU2tnZTF4dUlDQWdJQ0FnSUNCeVpYUjFjbTRnZEdocGN5NWxiR1Z0Wlc1MFcydGxlVjA3WEc0Z0lDQWdmVnh1WEc0Z0lDQWdMeXBjYmlBZ0lDQWdJQ0FnVDNabGNuSnBaR0ZpYkdVZ1pXeGxiV1Z1ZENCelpYUjBaWElnTFNCa1pXWmhkV3gwSUdadmNpQndiR0ZwYmlCdlltcGxZM1JjYmlBZ0lDQXFMMXh1SUNBZ0lITmxkSFJsY2lod2NtOXdjeWtnZTF4dUlDQWdJQ0FnSUNCbWIzSWdLR3hsZENCclpYa2dhVzRnY0hKdmNITXBJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lHbG1JQ2h3Y205d2N5NW9ZWE5QZDI1UWNtOXdaWEowZVNoclpYa3BLU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnZEdocGN5NWxiR1Z0Wlc1MFcydGxlVjBnUFNCd2NtOXdjMXRyWlhsZE8xeHVJQ0FnSUNBZ0lDQWdJQ0FnZlZ4dUlDQWdJQ0FnSUNCOVhHNGdJQ0FnZlZ4dVhHNGdJQ0FnTHlwY2JpQWdJQ0FnSUNBZ1RXRndJSE4wWVhSbElHdGxlU0JoY3lCd1pYSWdZSE4wWVhSbFRXRndZQ3dnYVdZZ2NISmxjMlZ1ZEZ4dVhHNGdJQ0FnSUNBZ0lFQndZWEpoYlNCYmMzUnlhVzVuWFRvZ1MyVjVJSFJ2SUcxaGNGeHVJQ0FnSUNBZ0lDQkFjbVYwZFhKdUlGdHpkSEpwYm1kZE9pQk5ZWEJ3WldRZ2EyVjVMQ0J2Y2lCdmNtbG5hVzVoYkNCclpYa2dhV1lnYm05dVpTQm1iM1Z1WkZ4dUlDQWdJQ292WEc0Z0lDQWdiV0Z3VTNSaGRHVkxaWGtvYTJWNUtTQjdYRzRnSUNBZ0lDQWdJSEpsZEhWeWJpQW9kR2hwY3k1emRHRjBaVTFoY0NrZ1B5QjBhR2x6TG5OMFlYUmxUV0Z3VzJ0bGVWMGdmSHdnYTJWNUlEb2dhMlY1TzF4dUlDQWdJSDFjYmx4dUlDQWdJQzhxWEc0Z0lDQWdJQ0FnSUVkbGRDQjJZV3gxWlZSNWNHVWdiMllnY0hKdmRtbGtaV1FnYTJWNVhHNWNiaUFnSUNBZ0lDQWdRSEJoY21GdElGdHpkSEpwYm1kZE9pQk9ZVzFsSUc5bUlIQnliM0JsY25SNUlIUnZJRzFoY0Z4dUlDQWdJQ0FnSUNCQWNtVjBkWEp1SUZ0MllXeDFaVlI1Y0dWZE9pQldZV3gxWlNCMGVYQmxJRzltSUhCeWIzQmxjblI1WEc0Z0lDQWdLaTljYmlBZ0lDQm5aWFJXWVd4MVpWUjVjR1VvYTJWNUtTQjdYRzRnSUNBZ0lDQWdJSEpsZEhWeWJpQW9kR2hwY3k1MllXeDFaVlI1Y0dWTllYQXBJRDhnZEdocGN5NTJZV3gxWlZSNWNHVk5ZWEJiZEdocGN5NXRZWEJUZEdGMFpVdGxlU2hyWlhrcFhTQTZJR1poYkhObE8xeHVJQ0FnSUgxY2JuMWNibHh1Wlhod2IzSjBJR1JsWm1GMWJIUWdLSEJ5YjNCektTQTlQaUJ1WlhjZ1FXUmhjSFJsY2lod2NtOXdjeWs3SWwxOVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvYWRhcHRlci9hZGFwdGVyLmpzXG4gKiogbW9kdWxlIGlkID0gMTFcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHMuZ2V0dGVyID0gZ2V0dGVyO1xuZXhwb3J0cy5zZXR0ZXIgPSBzZXR0ZXI7XG5cbnZhciBfYWRhcHRlciA9IHJlcXVpcmUoJy4vYWRhcHRlcicpO1xuXG52YXIgX2FkYXB0ZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfYWRhcHRlcik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIGdldHRlcihrZXkpIHtcbiAgICByZXR1cm4gdGhpcy5lbGVtZW50LmdldEF0dHJpYnV0ZShrZXkpO1xufVxuXG5mdW5jdGlvbiBzZXR0ZXIocHJvcHMpIHtcbiAgICBmb3IgKHZhciBrZXkgaW4gcHJvcHMpIHtcbiAgICAgICAgaWYgKHByb3BzLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudC5zZXRBdHRyaWJ1dGUoa2V5LCBwcm9wc1trZXldKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gKGVsZW1lbnQpIHtcbiAgICByZXR1cm4gKDAsIF9hZGFwdGVyMi5kZWZhdWx0KSh7IGVsZW1lbnQ6IGVsZW1lbnQsIGdldHRlcjogZ2V0dGVyLCBzZXR0ZXI6IHNldHRlciB9KTtcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5OeVl5OWhaR0Z3ZEdWeUwyRjBkSEl0WVdSaGNIUmxjaTVxY3lKZExDSnVZVzFsY3lJNlcxMHNJbTFoY0hCcGJtZHpJam9pT3pzN1VVRkZaMEk3VVVGSlFUczdPenM3T3pzN1FVRktWQ3hUUVVGVExFMUJRVlFzUTBGQlowSXNSMEZCYUVJc1JVRkJjVUk3UVVGRGVFSXNWMEZCVHl4TFFVRkxMRTlCUVV3c1EwRkJZU3haUVVGaUxFTkJRVEJDTEVkQlFURkNMRU5CUVZBc1EwRkVkMEk3UTBGQmNrSTdPMEZCU1VFc1UwRkJVeXhOUVVGVUxFTkJRV2RDTEV0QlFXaENMRVZCUVhWQ08wRkJRekZDTEZOQlFVc3NTVUZCU1N4SFFVRktMRWxCUVZjc1MwRkJhRUlzUlVGQmRVSTdRVUZEYmtJc1dVRkJTU3hOUVVGTkxHTkJRVTRzUTBGQmNVSXNSMEZCY2tJc1EwRkJTaXhGUVVFclFqdEJRVU16UWl4cFFrRkJTeXhQUVVGTUxFTkJRV0VzV1VGQllpeERRVUV3UWl4SFFVRXhRaXhGUVVFclFpeE5RVUZOTEVkQlFVNHNRMEZCTDBJc1JVRkVNa0k3VTBGQkwwSTdTMEZFU2p0RFFVUkhPenRyUWtGUlVTeFZRVUZETEU5QlFVUTdWMEZCWVN4MVFrRkJZeXhGUVVGRkxHZENRVUZHTEVWQlFWY3NZMEZCV0N4RlFVRnRRaXhqUVVGdVFpeEZRVUZrTzBOQlFXSWlMQ0ptYVd4bElqb2lZWFIwY2kxaFpHRndkR1Z5TG1weklpd2ljMjkxY21ObFVtOXZkQ0k2SWk5VmMyVnljeTlOWVhSMEwxTnBkR1Z6TDNCdmNHMXZkR2x2YmlJc0luTnZkWEpqWlhORGIyNTBaVzUwSWpwYkltbHRjRzl5ZENCamNtVmhkR1ZCWkdGd2RHVnlJR1p5YjIwZ0p5NHZZV1JoY0hSbGNpYzdYRzVjYm1WNGNHOXlkQ0JtZFc1amRHbHZiaUJuWlhSMFpYSW9hMlY1S1NCN1hHNGdJQ0FnY21WMGRYSnVJSFJvYVhNdVpXeGxiV1Z1ZEM1blpYUkJkSFJ5YVdKMWRHVW9hMlY1S1R0Y2JuMWNibHh1Wlhod2IzSjBJR1oxYm1OMGFXOXVJSE5sZEhSbGNpaHdjbTl3Y3lrZ2UxeHVJQ0FnSUdadmNpQW9iR1YwSUd0bGVTQnBiaUJ3Y205d2N5a2dlMXh1SUNBZ0lDQWdJQ0JwWmlBb2NISnZjSE11YUdGelQzZHVVSEp2Y0dWeWRIa29hMlY1S1NrZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnZEdocGN5NWxiR1Z0Wlc1MExuTmxkRUYwZEhKcFluVjBaU2hyWlhrc0lIQnliM0J6VzJ0bGVWMHBPMXh1SUNBZ0lDQWdJQ0I5WEc0Z0lDQWdmVnh1ZlZ4dVhHNWxlSEJ2Y25RZ1pHVm1ZWFZzZENBb1pXeGxiV1Z1ZENrZ1BUNGdZM0psWVhSbFFXUmhjSFJsY2loN0lHVnNaVzFsYm5Rc0lHZGxkSFJsY2l3Z2MyVjBkR1Z5SUgwcE95SmRmUT09XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9hZGFwdGVyL2F0dHItYWRhcHRlci5qc1xuICoqIG1vZHVsZSBpZCA9IDEyXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfc3RhdGVNYXAgPSByZXF1aXJlKCcuL2Nzcy9zdGF0ZS1tYXAnKTtcblxudmFyIF9zdGF0ZU1hcDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9zdGF0ZU1hcCk7XG5cbnZhciBfdmFsdWVUeXBlTWFwID0gcmVxdWlyZSgnLi9jc3MvdmFsdWUtdHlwZS1tYXAnKTtcblxudmFyIF92YWx1ZVR5cGVNYXAyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfdmFsdWVUeXBlTWFwKTtcblxudmFyIF9idWlsZCA9IHJlcXVpcmUoJy4vY3NzL2J1aWxkJyk7XG5cbnZhciBfYnVpbGQyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfYnVpbGQpO1xuXG52YXIgX3ByZWZpeGVyID0gcmVxdWlyZSgnLi9jc3MvcHJlZml4ZXInKTtcblxudmFyIF9wcmVmaXhlcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9wcmVmaXhlcik7XG5cbnZhciBfYWRhcHRlciA9IHJlcXVpcmUoJy4vYWRhcHRlcicpO1xuXG52YXIgX2FkYXB0ZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfYWRhcHRlcik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIGdldHRlcihrZXkpIHtcbiAgICByZXR1cm4gd2luZG93LmdldENvbXB1dGVkU3R5bGUodGhpcy5lbGVtZW50LCBudWxsKVsoMCwgX3ByZWZpeGVyMi5kZWZhdWx0KShrZXkpXTtcbn1cblxuZnVuY3Rpb24gc2V0dGVyKHByb3BzKSB7XG4gICAgdGhpcy5lbGVtZW50LnN0eWxlLmNzc1RleHQgKz0gKDAsIF9idWlsZDIuZGVmYXVsdCkocHJvcHMpO1xufVxuXG5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbiAoZWxlbWVudCkge1xuICAgIHJldHVybiAoMCwgX2FkYXB0ZXIyLmRlZmF1bHQpKHsgZWxlbWVudDogZWxlbWVudCwgc3RhdGVNYXA6IF9zdGF0ZU1hcDIuZGVmYXVsdCwgdmFsdWVUeXBlTWFwOiBfdmFsdWVUeXBlTWFwMi5kZWZhdWx0LCBnZXR0ZXI6IGdldHRlciwgc2V0dGVyOiBzZXR0ZXIgfSk7XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluTnlZeTloWkdGd2RHVnlMMk56Y3kxaFpHRndkR1Z5TG1weklsMHNJbTVoYldWeklqcGJYU3dpYldGd2NHbHVaM01pT2lJN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3TzBGQlRVRXNVMEZCVXl4TlFVRlVMRU5CUVdsQ0xFZEJRV3BDTEVWQlFYTkNPMEZCUTJ4Q0xGZEJRVThzVDBGQlR5eG5Ra0ZCVUN4RFFVRjNRaXhMUVVGTExFOUJRVXdzUlVGQll5eEpRVUYwUXl4RlFVRTBReXgzUWtGQlV5eEhRVUZVTEVOQlFUVkRMRU5CUVZBc1EwRkVhMEk3UTBGQmRFSTdPMEZCU1VFc1UwRkJVeXhOUVVGVUxFTkJRV2RDTEV0QlFXaENMRVZCUVhWQ08wRkJRMjVDTEZOQlFVc3NUMEZCVEN4RFFVRmhMRXRCUVdJc1EwRkJiVUlzVDBGQmJrSXNTVUZCT0VJc2NVSkJRVzlDTEV0QlFYQkNMRU5CUVRsQ0xFTkJSRzFDTzBOQlFYWkNPenRyUWtGSlpTeFZRVUZETEU5QlFVUTdWMEZCWVN4MVFrRkJZeXhGUVVGRkxHZENRVUZHTEVWQlFWY3NORUpCUVZnc1JVRkJjVUlzYjBOQlFYSkNMRVZCUVcxRExHTkJRVzVETEVWQlFUSkRMR05CUVRORExFVkJRV1E3UTBGQllpSXNJbVpwYkdVaU9pSmpjM010WVdSaGNIUmxjaTVxY3lJc0luTnZkWEpqWlZKdmIzUWlPaUl2VlhObGNuTXZUV0YwZEM5VGFYUmxjeTl3YjNCdGIzUnBiMjRpTENKemIzVnlZMlZ6UTI5dWRHVnVkQ0k2V3lKcGJYQnZjblFnYzNSaGRHVk5ZWEFnWm5KdmJTQW5MaTlqYzNNdmMzUmhkR1V0YldGd0p6dGNibWx0Y0c5eWRDQjJZV3gxWlZSNWNHVk5ZWEFnWm5KdmJTQW5MaTlqYzNNdmRtRnNkV1V0ZEhsd1pTMXRZWEFuTzF4dWFXMXdiM0owSUdKMWFXeGtVSEp2Y0dWeWRIbFRkSEpwYm1jZ1puSnZiU0FuTGk5amMzTXZZblZwYkdRbk8xeHVhVzF3YjNKMElIQnlaV1pwZUdWeUlHWnliMjBnSnk0dlkzTnpMM0J5WldacGVHVnlKenRjYm1sdGNHOXlkQ0JqY21WaGRHVkJaR0Z3ZEdWeUlHWnliMjBnSnk0dllXUmhjSFJsY2ljN1hHNWNibVoxYm1OMGFXOXVJR2RsZEhSbGNpQW9hMlY1S1NCN1hHNGdJQ0FnY21WMGRYSnVJSGRwYm1SdmR5NW5aWFJEYjIxd2RYUmxaRk4wZVd4bEtIUm9hWE11Wld4bGJXVnVkQ3dnYm5Wc2JDbGJjSEpsWm1sNFpYSW9hMlY1S1YwN1hHNTlYRzVjYm1aMWJtTjBhVzl1SUhObGRIUmxjaWh3Y205d2N5a2dlMXh1SUNBZ0lIUm9hWE11Wld4bGJXVnVkQzV6ZEhsc1pTNWpjM05VWlhoMElDczlJR0oxYVd4a1VISnZjR1Z5ZEhsVGRISnBibWNvY0hKdmNITXBPMXh1ZlZ4dVhHNWxlSEJ2Y25RZ1pHVm1ZWFZzZENBb1pXeGxiV1Z1ZENrZ1BUNGdZM0psWVhSbFFXUmhjSFJsY2loN0lHVnNaVzFsYm5Rc0lITjBZWFJsVFdGd0xDQjJZV3gxWlZSNWNHVk5ZWEFzSUdkbGRIUmxjaXdnYzJWMGRHVnlJSDBwT3lKZGZRPT1cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2FkYXB0ZXIvY3NzLWFkYXB0ZXIuanNcbiAqKiBtb2R1bGUgaWQgPSAxM1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0cy5zZXR0ZXIgPSBzZXR0ZXI7XG5cbnZhciBfc3RhdGVNYXAgPSByZXF1aXJlKCcuL2Nzcy9zdGF0ZS1tYXAnKTtcblxudmFyIF9zdGF0ZU1hcDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9zdGF0ZU1hcCk7XG5cbnZhciBfdmFsdWVUeXBlTWFwID0gcmVxdWlyZSgnLi9zdmcvdmFsdWUtdHlwZS1tYXAnKTtcblxudmFyIF92YWx1ZVR5cGVNYXAyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfdmFsdWVUeXBlTWFwKTtcblxudmFyIF9idWlsZCA9IHJlcXVpcmUoJy4vc3ZnL2J1aWxkJyk7XG5cbnZhciBfYnVpbGQyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfYnVpbGQpO1xuXG52YXIgX2F0dHJBZGFwdGVyID0gcmVxdWlyZSgnLi9hdHRyLWFkYXB0ZXInKTtcblxudmFyIF9hZGFwdGVyID0gcmVxdWlyZSgnLi9hZGFwdGVyJyk7XG5cbnZhciBfYWRhcHRlcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9hZGFwdGVyKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gc2V0dGVyKHByb3BzKSB7XG4gICAgKDAsIF9hdHRyQWRhcHRlci5zZXR0ZXIpKCgwLCBfYnVpbGQyLmRlZmF1bHQpKHByb3BzLCB0aGlzLm9yaWdpbikpO1xufVxuXG5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbiAoZWxlbWVudCkge1xuICAgIHZhciBhZGFwdGVyID0gKDAsIF9hZGFwdGVyMi5kZWZhdWx0KSh7IGVsZW1lbnQ6IGVsZW1lbnQsIHN0YXRlTWFwOiBfc3RhdGVNYXAyLmRlZmF1bHQsIHZhbHVlVHlwZU1hcDogX3ZhbHVlVHlwZU1hcDIuZGVmYXVsdCwgZ2V0dGVyOiBfYXR0ckFkYXB0ZXIuZ2V0dGVyLCBzZXR0ZXI6IHNldHRlciB9KTtcbiAgICB2YXIgYkJveCA9IGVsZW1lbnQuZ2V0QkJveCgpO1xuICAgIHZhciB0cmFuc2Zvcm1PcmlnaW5ZID0gMDtcbiAgICB2YXIgdHJhbnNmb3JtT3JpZ2luWCA9IDA7XG5cbiAgICBhZGFwdGVyLm9yaWdpbiA9IHtcbiAgICAgICAgeDogYkJveC53aWR0aCAqICh0cmFuc2Zvcm1PcmlnaW5YIC8gMTAwKSArIGJCb3gueCxcbiAgICAgICAgeTogYkJveC5oZWlnaHQgKiAodHJhbnNmb3JtT3JpZ2luWSAvIDEwMCkgKyBiQm94LnlcbiAgICB9O1xuXG4gICAgcmV0dXJuIGFkYXB0ZXI7XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluTnlZeTloWkdGd2RHVnlMM04yWnkxaFpHRndkR1Z5TG1weklsMHNJbTVoYldWeklqcGJYU3dpYldGd2NHbHVaM01pT2lJN096dFJRVTFuUWpzN096czdPenM3T3pzN096czdPenM3T3pzN096dEJRVUZVTEZOQlFWTXNUVUZCVkN4RFFVRm5RaXhMUVVGb1FpeEZRVUYxUWp0QlFVTXhRaXcyUWtGQlZ5eHhRa0ZCVFN4TFFVRk9MRVZCUVdFc1MwRkJTeXhOUVVGTUxFTkJRWGhDTEVWQlJEQkNPME5CUVhaQ096dHJRa0ZKVVN4VlFVRkRMRTlCUVVRc1JVRkJZVHRCUVVONFFpeFJRVUZOTEZWQlFWVXNkVUpCUVdNc1JVRkJSU3huUWtGQlJpeEZRVUZYTERSQ1FVRllMRVZCUVhGQ0xHOURRVUZ5UWl4RlFVRnRReXd5UWtGQmJrTXNSVUZCTWtNc1kwRkJNME1zUlVGQlpDeERRVUZXTEVOQlJHdENPMEZCUlhoQ0xGRkJRVTBzVDBGQlR5eFJRVUZSTEU5QlFWSXNSVUZCVUN4RFFVWnJRanRCUVVkNFFpeFJRVUZOTEcxQ1FVRnRRaXhEUVVGdVFpeERRVWhyUWp0QlFVbDRRaXhSUVVGTkxHMUNRVUZ0UWl4RFFVRnVRaXhEUVVwclFqczdRVUZOZUVJc1dVRkJVU3hOUVVGU0xFZEJRV2xDTzBGQlEySXNWMEZCUnl4TFFVRkxMRXRCUVV3c1NVRkJZeXh0UWtGQmJVSXNSMEZCYmtJc1EwRkJaQ3hIUVVGM1F5eExRVUZMTEVOQlFVdzdRVUZETTBNc1YwRkJSeXhMUVVGTExFMUJRVXdzU1VGQlpTeHRRa0ZCYlVJc1IwRkJia0lzUTBGQlppeEhRVUY1UXl4TFFVRkxMRU5CUVV3N1MwRkdhRVFzUTBGT2QwSTdPMEZCVjNoQ0xGZEJRVThzVDBGQlVDeERRVmgzUWp0RFFVRmlJaXdpWm1sc1pTSTZJbk4yWnkxaFpHRndkR1Z5TG1weklpd2ljMjkxY21ObFVtOXZkQ0k2SWk5VmMyVnljeTlOWVhSMEwxTnBkR1Z6TDNCdmNHMXZkR2x2YmlJc0luTnZkWEpqWlhORGIyNTBaVzUwSWpwYkltbHRjRzl5ZENCemRHRjBaVTFoY0NCbWNtOXRJQ2N1TDJOemN5OXpkR0YwWlMxdFlYQW5PMXh1YVcxd2IzSjBJSFpoYkhWbFZIbHdaVTFoY0NCbWNtOXRJQ2N1TDNOMlp5OTJZV3gxWlMxMGVYQmxMVzFoY0NjN1hHNXBiWEJ2Y25RZ1luVnBiR1FnWm5KdmJTQW5MaTl6ZG1jdlluVnBiR1FuTzF4dWFXMXdiM0owSUhzZ1oyVjBkR1Z5TENCelpYUjBaWElnWVhNZ1lYUjBjbE5sZEhSbGNpQjlJR1p5YjIwZ0p5NHZZWFIwY2kxaFpHRndkR1Z5Snp0Y2JtbHRjRzl5ZENCamNtVmhkR1ZCWkdGd2RHVnlJR1p5YjIwZ0p5NHZZV1JoY0hSbGNpYzdYRzVjYm1WNGNHOXlkQ0JtZFc1amRHbHZiaUJ6WlhSMFpYSW9jSEp2Y0hNcElIdGNiaUFnSUNCaGRIUnlVMlYwZEdWeUtHSjFhV3hrS0hCeWIzQnpMQ0IwYUdsekxtOXlhV2RwYmlrcE8xeHVmVnh1WEc1bGVIQnZjblFnWkdWbVlYVnNkQ0FvWld4bGJXVnVkQ2tnUFQ0Z2UxeHVJQ0FnSUdOdmJuTjBJR0ZrWVhCMFpYSWdQU0JqY21WaGRHVkJaR0Z3ZEdWeUtIc2daV3hsYldWdWRDd2djM1JoZEdWTllYQXNJSFpoYkhWbFZIbHdaVTFoY0N3Z1oyVjBkR1Z5TENCelpYUjBaWElnZlNrN1hHNGdJQ0FnWTI5dWMzUWdZa0p2ZUNBOUlHVnNaVzFsYm5RdVoyVjBRa0p2ZUNncE8xeHVJQ0FnSUdOdmJuTjBJSFJ5WVc1elptOXliVTl5YVdkcGJsa2dQU0F3TzF4dUlDQWdJR052Ym5OMElIUnlZVzV6Wm05eWJVOXlhV2RwYmxnZ1BTQXdPMXh1WEc0Z0lDQWdZV1JoY0hSbGNpNXZjbWxuYVc0Z1BTQjdYRzRnSUNBZ0lDQWdJSGc2SUdKQ2IzZ3VkMmxrZEdnZ0tpQW9kSEpoYm5ObWIzSnRUM0pwWjJsdVdDQXZJREV3TUNrZ0t5QmlRbTk0TG5nc1hHNGdJQ0FnSUNBZ0lIazZJR0pDYjNndWFHVnBaMmgwSUNvZ0tIUnlZVzV6Wm05eWJVOXlhV2RwYmxrZ0x5QXhNREFwSUNzZ1lrSnZlQzU1WEc0Z0lDQWdmVHRjYmx4dUlDQWdJSEpsZEhWeWJpQmhaR0Z3ZEdWeU8xeHVmVHRjYmx4dUlsMTlcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2FkYXB0ZXIvc3ZnLWFkYXB0ZXIuanNcbiAqKiBtb2R1bGUgaWQgPSAxNFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX2J1aWxkID0gcmVxdWlyZSgnLi9zdmctcGF0aC9idWlsZCcpO1xuXG52YXIgX2J1aWxkMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2J1aWxkKTtcblxudmFyIF9zdGF0ZU1hcCA9IHJlcXVpcmUoJy4vc3ZnLXBhdGgvc3RhdGUtbWFwJyk7XG5cbnZhciBfc3RhdGVNYXAyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfc3RhdGVNYXApO1xuXG52YXIgX3N2Z0FkYXB0ZXIgPSByZXF1aXJlKCcuL3N2Zy1hZGFwdGVyJyk7XG5cbnZhciBfc3ZnQWRhcHRlcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9zdmdBZGFwdGVyKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gc2V0dGVyKHByb3BzKSB7XG4gICAgdGhpcy5zdmdTZXR0ZXIoKDAsIF9idWlsZDIuZGVmYXVsdCkocHJvcHMsIHRoaXMucGF0aExlbmd0aCkpO1xufVxuXG5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbiAoZWxlbWVudCkge1xuICAgIHZhciBhZGFwdGVyID0gKDAsIF9zdmdBZGFwdGVyMi5kZWZhdWx0KShlbGVtZW50KTtcblxuICAgIGFkYXB0ZXIuc3RhdGVNYXAgPSBfc3RhdGVNYXAyLmRlZmF1bHQ7XG4gICAgYWRhcHRlci5zZXR0ZXIgPSBzZXR0ZXI7XG4gICAgYWRhcHRlci5zdmdTZXR0ZXIgPSBfc3ZnQWRhcHRlci5zZXR0ZXI7XG5cbiAgICBhZGFwdGVyLnBhdGhMZW5ndGggPSBlbGVtZW50LmdldFRvdGFsTGVuZ3RoKCk7XG5cbiAgICByZXR1cm4gYWRhcHRlcjtcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5OeVl5OWhaR0Z3ZEdWeUwzTjJaeTF3WVhSb0xXRmtZWEIwWlhJdWFuTWlYU3dpYm1GdFpYTWlPbHRkTENKdFlYQndhVzVuY3lJNklqczdPenM3T3pzN096czdPenM3T3pzN08wRkJTVUVzVTBGQlV5eE5RVUZVTEVOQlFXZENMRXRCUVdoQ0xFVkJRWFZDTzBGQlEyNUNMRk5CUVVzc1UwRkJUQ3hEUVVGbExIRkNRVUZOTEV0QlFVNHNSVUZCWVN4TFFVRkxMRlZCUVV3c1EwRkJOVUlzUlVGRWJVSTdRMEZCZGtJN08ydENRVWxsTEZWQlFVTXNUMEZCUkN4RlFVRmhPMEZCUTNoQ0xGRkJRVTBzVlVGQlZTd3dRa0ZCVnl4UFFVRllMRU5CUVZZc1EwRkVhMEk3TzBGQlIzaENMRmxCUVZFc1VVRkJVaXh6UWtGSWQwSTdRVUZKZUVJc1dVRkJVU3hOUVVGU0xFZEJRV2xDTEUxQlFXcENMRU5CU25kQ08wRkJTM2hDTEZsQlFWRXNVMEZCVWl4elFrRk1kMEk3TzBGQlQzaENMRmxCUVZFc1ZVRkJVaXhIUVVGeFFpeFJRVUZSTEdOQlFWSXNSVUZCY2tJc1EwRlFkMEk3TzBGQlUzaENMRmRCUVU4c1QwRkJVQ3hEUVZSM1FqdERRVUZpSWl3aVptbHNaU0k2SW5OMlp5MXdZWFJvTFdGa1lYQjBaWEl1YW5NaUxDSnpiM1Z5WTJWU2IyOTBJam9pTDFWelpYSnpMMDFoZEhRdlUybDBaWE12Y0c5d2JXOTBhVzl1SWl3aWMyOTFjbU5sYzBOdmJuUmxiblFpT2xzaWFXMXdiM0owSUdKMWFXeGtJR1p5YjIwZ0p5NHZjM1puTFhCaGRHZ3ZZblZwYkdRbk8xeHVhVzF3YjNKMElITjBZWFJsVFdGd0lHWnliMjBnSnk0dmMzWm5MWEJoZEdndmMzUmhkR1V0YldGd0p6dGNibWx0Y0c5eWRDQnpkbWRCWkdGd2RHVnlMQ0I3SUhObGRIUmxjaUJoY3lCemRtZFRaWFIwWlhJZ2ZTQm1jbTl0SUNjdUwzTjJaeTFoWkdGd2RHVnlKenRjYmx4dVpuVnVZM1JwYjI0Z2MyVjBkR1Z5S0hCeWIzQnpLU0I3WEc0Z0lDQWdkR2hwY3k1emRtZFRaWFIwWlhJb1luVnBiR1FvY0hKdmNITXNJSFJvYVhNdWNHRjBhRXhsYm1kMGFDa3BPMXh1ZlZ4dVhHNWxlSEJ2Y25RZ1pHVm1ZWFZzZENBb1pXeGxiV1Z1ZENrZ1BUNGdlMXh1SUNBZ0lHTnZibk4wSUdGa1lYQjBaWElnUFNCemRtZEJaR0Z3ZEdWeUtHVnNaVzFsYm5RcE8xeHVYRzRnSUNBZ1lXUmhjSFJsY2k1emRHRjBaVTFoY0NBOUlITjBZWFJsVFdGd08xeHVJQ0FnSUdGa1lYQjBaWEl1YzJWMGRHVnlJRDBnYzJWMGRHVnlPMXh1SUNBZ0lHRmtZWEIwWlhJdWMzWm5VMlYwZEdWeUlEMGdjM1puVTJWMGRHVnlPMXh1WEc0Z0lDQWdZV1JoY0hSbGNpNXdZWFJvVEdWdVozUm9JRDBnWld4bGJXVnVkQzVuWlhSVWIzUmhiRXhsYm1kMGFDZ3BPMXh1WEc0Z0lDQWdjbVYwZFhKdUlHRmtZWEIwWlhJN1hHNTlPMXh1SWwxOVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvYWRhcHRlci9zdmctcGF0aC1hZGFwdGVyLmpzXG4gKiogbW9kdWxlIGlkID0gMTVcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF9jcmVhdGVFYXNpbmcgPSByZXF1aXJlKCcuL2NyZWF0ZS1lYXNpbmcnKTtcblxudmFyIF9jcmVhdGVFYXNpbmcyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY3JlYXRlRWFzaW5nKTtcblxudmFyIF9jcmVhdGVCZXppZXIgPSByZXF1aXJlKCcuL2NyZWF0ZS1iZXppZXInKTtcblxudmFyIF9jcmVhdGVCZXppZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY3JlYXRlQmV6aWVyKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuLy8gVmFsdWVzXG4vKlxuICAgIEVhc2luZyBmdW5jdGlvbnNcbiAgICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgXG4gICAgR2VuZXJhdGVzIGFuZCBwcm92aWRlcyBlYXNpbmcgZnVuY3Rpb25zIGJhc2VkIG9uIGJhc2VGdW5jdGlvbiBkZWZpbml0aW9uc1xuICAgIFxuICAgIEEgY2FsbCB0byBlYXNpbmdGdW5jdGlvbi5nZXQoJ2Z1bmN0aW9uTmFtZScpIHJldHVybnMgYSBmdW5jdGlvbiB0aGF0IGNhbiBiZSBwYXNzZWQ6XG4gICAgICAgIEBwYXJhbSBbbnVtYmVyXTogUHJvZ3Jlc3MgMC0xXG4gICAgICAgIEBwYXJhbSBbbnVtYmVyXSAob3B0aW9uYWwpOiBBbXAgbW9kaWZpZXIsIG9ubHkgYWNjZXB0ZWQgaW4gc29tZSBlYXNpbmcgZnVuY3Rpb25zXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbmQgaXMgdXNlZCB0byBhZGp1c3Qgb3ZlcmFsbCBzdHJlbmd0aFxuICAgICAgICBAcmV0dXJuIFtudW1iZXJdOiBFYXNlZCBwcm9ncmVzc1xuICAgICAgICBcbiAgICBXZSBjYW4gZ2VuZXJhdGUgbmV3IGZ1bmN0aW9ucyBieSBzZW5kaW5nIGFuIGVhc2luZyBmdW5jdGlvbiB0aHJvdWdoIGVhc2luZ0Z1bmN0aW9uLmV4dGVuZChuYW1lLCBtZXRob2QpLlxuICAgIFdoaWNoIHdpbGwgbWFrZSBuYW1lSW4sIG5hbWVPdXQgYW5kIG5hbWVJbk91dCBmdW5jdGlvbnMgYXZhaWxhYmxlIHRvIHVzZS5cbiAgICAgICAgXG4gICAgRWFzaW5nIGZ1bmN0aW9ucyBmcm9tIFJvYmVydCBQZW5uZXJcbiAgICBodHRwOi8vd3d3LnJvYmVydHBlbm5lci5jb20vZWFzaW5nL1xuICAgICAgICBcbiAgICBCZXppZXIgY3VydmUgaW50ZXJwcmV0b3IgY3JlYXRlZCBmcm9tIEdhw6t0YW4gUmVuYXVkZWF1J3Mgb3JpZ2luYWwgQmV6aWVyRWFzaW5nICBcbiAgICBodHRwczovL2dpdGh1Yi5jb20vZ3JlL2Jlemllci1lYXNpbmcvYmxvYi9tYXN0ZXIvaW5kZXguanMgIFxuICAgIGh0dHBzOi8vZ2l0aHViLmNvbS9ncmUvYmV6aWVyLWVhc2luZy9ibG9iL21hc3Rlci9MSUNFTlNFXG5cbiAgICBBbnRpY2lwYXRlIGVhc2luZyBjcmVhdGVkIGJ5IEVsbGlvdCBHaW5vXG4gICAgaHR0cHM6Ly90d2l0dGVyLmNvbS9FbGxpb3RHZW5vXG4qL1xuLy8gSW1wb3J0c1xudmFyIERFRkFVTFRfQkFDS19TVFJFTkdUSCA9IDEuNTI1O1xudmFyIERFRkFVTFRfUE9XX1NUUkVOR1RIID0gMjtcblxuLypcbiAgICBFYWNoIG9mIHRoZXNlIGJhc2UgZnVuY3Rpb25zIGlzIGFuIGVhc2VJblxuICAgIFxuICAgIE9uIGluaXQsIHdlIHVzZSAubWlycm9yIGFuZCAucmV2ZXJzZSB0byBnZW5lcmF0ZSBlYXNlSW5PdXQgYW5kXG4gICAgZWFzZU91dCBmdW5jdGlvbnMgcmVzcGVjdGl2ZWx5LlxuKi9cbnZhciBiYXNlRWFzaW5nID0ge1xuICAgIGVhc2U6IGZ1bmN0aW9uIChwcm9ncmVzcykge1xuICAgICAgICB2YXIgc3RyZW5ndGggPSBhcmd1bWVudHMubGVuZ3RoIDw9IDEgfHwgYXJndW1lbnRzWzFdID09PSB1bmRlZmluZWQgPyBERUZBVUxUX1BPV19TVFJFTkdUSCA6IGFyZ3VtZW50c1sxXTtcbiAgICAgICAgcmV0dXJuIE1hdGgucG93KHByb2dyZXNzLCBzdHJlbmd0aCk7XG4gICAgfSxcbiAgICBjaXJjOiBmdW5jdGlvbiAocHJvZ3Jlc3MpIHtcbiAgICAgICAgcmV0dXJuIDEgLSBNYXRoLnNpbihNYXRoLmFjb3MocHJvZ3Jlc3MpKTtcbiAgICB9LFxuICAgIGJhY2s6IGZ1bmN0aW9uIChwcm9ncmVzcykge1xuICAgICAgICB2YXIgc3RyZW5ndGggPSBhcmd1bWVudHMubGVuZ3RoIDw9IDEgfHwgYXJndW1lbnRzWzFdID09PSB1bmRlZmluZWQgPyBERUZBVUxUX0JBQ0tfU1RSRU5HVEggOiBhcmd1bWVudHNbMV07XG4gICAgICAgIHJldHVybiBwcm9ncmVzcyAqIHByb2dyZXNzICogKChzdHJlbmd0aCArIDEpICogcHJvZ3Jlc3MgLSBzdHJlbmd0aCk7XG4gICAgfVxufTtcblxuLy8gVXRpbGl0eSBmdW5jdGlvbnNcbnZhciBnZW5lcmF0ZVBvd2VyRWFzaW5nID0gZnVuY3Rpb24gKHN0cmVuZ3RoKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChwcm9ncmVzcykge1xuICAgICAgICByZXR1cm4gYmFzZUVhc2luZy5lYXNlKHByb2dyZXNzLCBzdHJlbmd0aCk7XG4gICAgfTtcbn07XG5cblsnY3ViaWMnLCAncXVhcnQnLCAncXVpbnQnXS5mb3JFYWNoKGZ1bmN0aW9uIChlYXNpbmdOYW1lLCBpKSB7XG4gICAgcmV0dXJuIGJhc2VFYXNpbmdbZWFzaW5nTmFtZV0gPSBnZW5lcmF0ZVBvd2VyRWFzaW5nKGkgKyAzKTtcbn0pO1xuXG4vLyBHZW5lcmF0ZSBpbi9vdXQvaW5PdXQgdmFyaWF0aW9uc1xuZm9yICh2YXIga2V5IGluIGJhc2VFYXNpbmcpIHtcbiAgICBpZiAoYmFzZUVhc2luZy5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgIHZhciBlYXNpbmdGdW5jdGlvbiA9ICgwLCBfY3JlYXRlRWFzaW5nMi5kZWZhdWx0KShiYXNlRWFzaW5nW2tleV0pO1xuICAgICAgICBiYXNlRWFzaW5nW2tleSArICdJbiddID0gZWFzaW5nRnVuY3Rpb24uaW47XG4gICAgICAgIGJhc2VFYXNpbmdba2V5ICsgJ091dCddID0gZWFzaW5nRnVuY3Rpb24ub3V0O1xuICAgICAgICBiYXNlRWFzaW5nW2tleSArICdJbk91dCddID0gZWFzaW5nRnVuY3Rpb24uaW5PdXQ7XG4gICAgfVxufVxuXG5iYXNlRWFzaW5nLmxpbmVhciA9IGZ1bmN0aW9uIChwcm9ncmVzcykge1xuICAgIHJldHVybiBwcm9ncmVzcztcbn07XG5iYXNlRWFzaW5nLmFudGljaXBhdGUgPSBmdW5jdGlvbiAocHJvZ3Jlc3MpIHtcbiAgICB2YXIgc3RyZW5ndGggPSBhcmd1bWVudHMubGVuZ3RoIDw9IDEgfHwgYXJndW1lbnRzWzFdID09PSB1bmRlZmluZWQgPyBERUZBVUxUX0JBQ0tfU1RSRU5HVEggOiBhcmd1bWVudHNbMV07XG4gICAgcmV0dXJuIChwcm9ncmVzcyAqPSAyKSA8IDEgPyAwLjUgKiBiYXNlRWFzaW5nLmJhY2tJbihwcm9ncmVzcywgc3RyZW5ndGgpIDogMC41ICogKDIgLSBNYXRoLnBvdygyLCAtMTAgKiAocHJvZ3Jlc3MgLSAxKSkpO1xufTtcblxuYmFzZUVhc2luZy5lYXNpbmdGdW5jdGlvbiA9IF9jcmVhdGVFYXNpbmcyLmRlZmF1bHQ7XG5iYXNlRWFzaW5nLmN1YmljQmV6aWVyID0gX2NyZWF0ZUJlemllcjIuZGVmYXVsdDtcbmJhc2VFYXNpbmcubW9kaWZ5RWFzZSA9IGZ1bmN0aW9uIChlYXNpbmcpIHtcbiAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IEFycmF5KF9sZW4gPiAxID8gX2xlbiAtIDEgOiAwKSwgX2tleSA9IDE7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgICAgYXJnc1tfa2V5IC0gMV0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgfVxuXG4gICAgcmV0dXJuIGZ1bmN0aW9uIChwcm9ncmVzcykge1xuICAgICAgICByZXR1cm4gZWFzaW5nLmFwcGx5KHVuZGVmaW5lZCwgW3Byb2dyZXNzXS5jb25jYXQoYXJncykpO1xuICAgIH07XG59O1xuXG5leHBvcnRzLmRlZmF1bHQgPSBiYXNlRWFzaW5nO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluTnlZeTloWTNScGIyNXpMMlZoYzJsdVp5OXdjbVZ6WlhRdFpXRnphVzVuTG1weklsMHNJbTVoYldWeklqcGJYU3dpYldGd2NHbHVaM01pT2lJN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPMEZCT0VKQkxFbEJRVTBzZDBKQlFYZENMRXRCUVhoQ08wRkJRMDRzU1VGQlRTeDFRa0ZCZFVJc1EwRkJka0k3T3pzN096czdPMEZCVVU0c1NVRkJUU3hoUVVGaE8wRkJRMllzVlVGQlRTeFZRVUZETEZGQlFVUTdXVUZCVnl4cFJVRkJWenQzUWtGQmVVSXNWVUZCV1R0TFFVRXpSRHRCUVVOT0xGVkJRVTA3WlVGQldTeEpRVUZKTEV0QlFVc3NSMEZCVEN4RFFVRlRMRXRCUVVzc1NVRkJUQ3hEUVVGVkxGRkJRVllzUTBGQlZDeERRVUZLTzB0QlFWbzdRVUZEVGl4VlFVRk5MRlZCUVVNc1VVRkJSRHRaUVVGWExHbEZRVUZYTzJWQlFUQkNMRkZCUVVNc1IwRkJWeXhSUVVGWUxFbEJRWGRDTEVOQlFVTXNWMEZCVnl4RFFVRllMRU5CUVVRc1IwRkJhVUlzVVVGQmFrSXNSMEZCTkVJc1VVRkJOVUlzUTBGQmVrSTdTMEZCYUVRN1EwRklTanM3TzBGQlQwNHNTVUZCVFN4elFrRkJjMElzVlVGQlF5eFJRVUZFTzFkQlFXTXNWVUZCUXl4UlFVRkVPMlZCUVdNc1YwRkJWeXhKUVVGWUxFTkJRV2RDTEZGQlFXaENMRVZCUVRCQ0xGRkJRVEZDTzB0QlFXUTdRMEZCWkRzN1FVRkZOVUlzUTBGQlF5eFBRVUZFTEVWQlFWVXNUMEZCVml4RlFVRnRRaXhQUVVGdVFpeEZRVUUwUWl4UFFVRTFRaXhEUVVGdlF5eFZRVUZETEZWQlFVUXNSVUZCWVN4RFFVRmlPMWRCUVcxQ0xGZEJRVmNzVlVGQldDeEpRVUY1UWl4dlFrRkJiMElzU1VGQlNTeERRVUZLTEVOQlFUZERPME5CUVc1Q0xFTkJRWEJET3pzN1FVRkhRU3hMUVVGTExFbEJRVWtzUjBGQlNpeEpRVUZYTEZWQlFXaENMRVZCUVRSQ08wRkJRM2hDTEZGQlFVa3NWMEZCVnl4alFVRllMRU5CUVRCQ0xFZEJRVEZDTEVOQlFVb3NSVUZCYjBNN1FVRkRhRU1zV1VGQlRTeHBRa0ZCYVVJc05FSkJRWEZDTEZkQlFWY3NSMEZCV0N4RFFVRnlRaXhEUVVGcVFpeERRVVF3UWp0QlFVVm9ReXh0UWtGQll5eFZRVUZrTEVsQlFYbENMR1ZCUVdVc1JVRkJaaXhEUVVaUE8wRkJSMmhETEcxQ1FVRmpMRmRCUVdRc1NVRkJNRUlzWlVGQlpTeEhRVUZtTEVOQlNFMDdRVUZKYUVNc2JVSkJRV01zWVVGQlpDeEpRVUUwUWl4bFFVRmxMRXRCUVdZc1EwRktTVHRMUVVGd1F6dERRVVJLT3p0QlFWTkJMRmRCUVZjc1RVRkJXQ3hIUVVGdlFqdFhRVUZaTzBOQlFWbzdRVUZEY0VJc1YwRkJWeXhWUVVGWUxFZEJRWGRDTEZWQlFVTXNVVUZCUkR0UlFVRlhMR2xGUVVGWE8xZEJRekZETEVOQlFVVXNXVUZCVlN4RFFVRldMRU5CUVVRc1IwRkJaMElzUTBGQmFFSXNSMEZCY1VJc1RVRkJUU3hYUVVGWExFMUJRVmdzUTBGQmEwSXNVVUZCYkVJc1JVRkJORUlzVVVGQk5VSXNRMEZCVGl4SFFVRXJReXhQUVVGUExFbEJRVWtzUzBGQlN5eEhRVUZNTEVOQlFWTXNRMEZCVkN4RlFVRlpMRU5CUVVNc1JVRkJSQ3hKUVVGUExGZEJRVmNzUTBGQldDeERRVUZRTEVOQlFXaENMRU5CUVZBN1EwRkVha1E3TzBGQlIzaENMRmRCUVZjc1kwRkJXRHRCUVVOQkxGZEJRVmNzVjBGQldEdEJRVU5CTEZkQlFWY3NWVUZCV0N4SFFVRjNRaXhWUVVGRExFMUJRVVE3YzBOQlFWazdPenM3VjBGQlV5eFZRVUZETEZGQlFVUTdaVUZCWXl4NVFrRkJUeXhwUWtGQllTeExRVUZ3UWp0TFFVRmtPME5CUVhKQ096dHJRa0ZGVkNJc0ltWnBiR1VpT2lKd2NtVnpaWFF0WldGemFXNW5MbXB6SWl3aWMyOTFjbU5sVW05dmRDSTZJaTlWYzJWeWN5OU5ZWFIwTDFOcGRHVnpMM0J2Y0cxdmRHbHZiaUlzSW5OdmRYSmpaWE5EYjI1MFpXNTBJanBiSWk4cVhHNGdJQ0FnUldGemFXNW5JR1oxYm1OMGFXOXVjMXh1SUNBZ0lDMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzFjYmlBZ0lDQmNiaUFnSUNCSFpXNWxjbUYwWlhNZ1lXNWtJSEJ5YjNacFpHVnpJR1ZoYzJsdVp5Qm1kVzVqZEdsdmJuTWdZbUZ6WldRZ2IyNGdZbUZ6WlVaMWJtTjBhVzl1SUdSbFptbHVhWFJwYjI1elhHNGdJQ0FnWEc0Z0lDQWdRU0JqWVd4c0lIUnZJR1ZoYzJsdVowWjFibU4wYVc5dUxtZGxkQ2duWm5WdVkzUnBiMjVPWVcxbEp5a2djbVYwZFhKdWN5QmhJR1oxYm1OMGFXOXVJSFJvWVhRZ1kyRnVJR0psSUhCaGMzTmxaRHBjYmlBZ0lDQWdJQ0FnUUhCaGNtRnRJRnR1ZFcxaVpYSmRPaUJRY205bmNtVnpjeUF3TFRGY2JpQWdJQ0FnSUNBZ1FIQmhjbUZ0SUZ0dWRXMWlaWEpkSUNodmNIUnBiMjVoYkNrNklFRnRjQ0J0YjJScFptbGxjaXdnYjI1c2VTQmhZMk5sY0hSbFpDQnBiaUJ6YjIxbElHVmhjMmx1WnlCbWRXNWpkR2x2Ym5OY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lHRnVaQ0JwY3lCMWMyVmtJSFJ2SUdGa2FuVnpkQ0J2ZG1WeVlXeHNJSE4wY21WdVozUm9YRzRnSUNBZ0lDQWdJRUJ5WlhSMWNtNGdXMjUxYldKbGNsMDZJRVZoYzJWa0lIQnliMmR5WlhOelhHNGdJQ0FnSUNBZ0lGeHVJQ0FnSUZkbElHTmhiaUJuWlc1bGNtRjBaU0J1WlhjZ1puVnVZM1JwYjI1eklHSjVJSE5sYm1ScGJtY2dZVzRnWldGemFXNW5JR1oxYm1OMGFXOXVJSFJvY205MVoyZ2daV0Z6YVc1blJuVnVZM1JwYjI0dVpYaDBaVzVrS0c1aGJXVXNJRzFsZEdodlpDa3VYRzRnSUNBZ1YyaHBZMmdnZDJsc2JDQnRZV3RsSUc1aGJXVkpiaXdnYm1GdFpVOTFkQ0JoYm1RZ2JtRnRaVWx1VDNWMElHWjFibU4wYVc5dWN5QmhkbUZwYkdGaWJHVWdkRzhnZFhObExseHVJQ0FnSUNBZ0lDQmNiaUFnSUNCRllYTnBibWNnWm5WdVkzUnBiMjV6SUdaeWIyMGdVbTlpWlhKMElGQmxibTVsY2x4dUlDQWdJR2gwZEhBNkx5OTNkM2N1Y205aVpYSjBjR1Z1Ym1WeUxtTnZiUzlsWVhOcGJtY3ZYRzRnSUNBZ0lDQWdJRnh1SUNBZ0lFSmxlbWxsY2lCamRYSjJaU0JwYm5SbGNuQnlaWFJ2Y2lCamNtVmhkR1ZrSUdaeWIyMGdSMkhEcTNSaGJpQlNaVzVoZFdSbFlYVW5jeUJ2Y21sbmFXNWhiQ0JDWlhwcFpYSkZZWE5wYm1jZ0lGeHVJQ0FnSUdoMGRIQnpPaTh2WjJsMGFIVmlMbU52YlM5bmNtVXZZbVY2YVdWeUxXVmhjMmx1Wnk5aWJHOWlMMjFoYzNSbGNpOXBibVJsZUM1cWN5QWdYRzRnSUNBZ2FIUjBjSE02THk5bmFYUm9kV0l1WTI5dEwyZHlaUzlpWlhwcFpYSXRaV0Z6YVc1bkwySnNiMkl2YldGemRHVnlMMHhKUTBWT1UwVmNibHh1SUNBZ0lFRnVkR2xqYVhCaGRHVWdaV0Z6YVc1bklHTnlaV0YwWldRZ1lua2dSV3hzYVc5MElFZHBibTljYmlBZ0lDQm9kSFJ3Y3pvdkwzUjNhWFIwWlhJdVkyOXRMMFZzYkdsdmRFZGxibTljYmlvdlhHNHZMeUJKYlhCdmNuUnpYRzVwYlhCdmNuUWdZM0psWVhSbFJXRnphVzVuUm5WdVkzUnBiMjRnWm5KdmJTQW5MaTlqY21WaGRHVXRaV0Z6YVc1bkp6dGNibWx0Y0c5eWRDQmpkV0pwWTBKbGVtbGxjaUJtY205dElDY3VMMk55WldGMFpTMWlaWHBwWlhJbk8xeHVYRzR2THlCV1lXeDFaWE5jYm1OdmJuTjBJRVJGUmtGVlRGUmZRa0ZEUzE5VFZGSkZUa2RVU0NBOUlERXVOVEkxTzF4dVkyOXVjM1FnUkVWR1FWVk1WRjlRVDFkZlUxUlNSVTVIVkVnZ1BTQXlPMXh1WEc0dktseHVJQ0FnSUVWaFkyZ2diMllnZEdobGMyVWdZbUZ6WlNCbWRXNWpkR2x2Ym5NZ2FYTWdZVzRnWldGelpVbHVYRzRnSUNBZ1hHNGdJQ0FnVDI0Z2FXNXBkQ3dnZDJVZ2RYTmxJQzV0YVhKeWIzSWdZVzVrSUM1eVpYWmxjbk5sSUhSdklHZGxibVZ5WVhSbElHVmhjMlZKYms5MWRDQmhibVJjYmlBZ0lDQmxZWE5sVDNWMElHWjFibU4wYVc5dWN5QnlaWE53WldOMGFYWmxiSGt1WEc0cUwxeHVZMjl1YzNRZ1ltRnpaVVZoYzJsdVp5QTlJSHRjYmlBZ0lDQmxZWE5sT2lBb2NISnZaM0psYzNNc0lITjBjbVZ1WjNSb0lEMGdSRVZHUVZWTVZGOVFUMWRmVTFSU1JVNUhWRWdwSUQwK0lIQnliMmR5WlhOeklDb3FJSE4wY21WdVozUm9MRnh1SUNBZ0lHTnBjbU02SUhCeWIyZHlaWE56SUQwK0lERWdMU0JOWVhSb0xuTnBiaWhOWVhSb0xtRmpiM01vY0hKdlozSmxjM01wS1N4Y2JpQWdJQ0JpWVdOck9pQW9jSEp2WjNKbGMzTXNJSE4wY21WdVozUm9JRDBnUkVWR1FWVk1WRjlDUVVOTFgxTlVVa1ZPUjFSSUtTQTlQaUFvY0hKdlozSmxjM01nS2lCd2NtOW5jbVZ6Y3lrZ0tpQW9LSE4wY21WdVozUm9JQ3NnTVNrZ0tpQndjbTluY21WemN5QXRJSE4wY21WdVozUm9LVnh1ZlR0Y2JseHVMeThnVlhScGJHbDBlU0JtZFc1amRHbHZibk5jYm1OdmJuTjBJR2RsYm1WeVlYUmxVRzkzWlhKRllYTnBibWNnUFNBb2MzUnlaVzVuZEdncElEMCtJQ2h3Y205bmNtVnpjeWtnUFQ0Z1ltRnpaVVZoYzJsdVp5NWxZWE5sS0hCeWIyZHlaWE56TENCemRISmxibWQwYUNrN1hHNWNibHNuWTNWaWFXTW5MQ0FuY1hWaGNuUW5MQ0FuY1hWcGJuUW5YUzVtYjNKRllXTm9LQ2hsWVhOcGJtZE9ZVzFsTENCcEtTQTlQaUJpWVhObFJXRnphVzVuVzJWaGMybHVaMDVoYldWZElEMGdaMlZ1WlhKaGRHVlFiM2RsY2tWaGMybHVaeWhwSUNzZ015a3BPMXh1WEc0dkx5QkhaVzVsY21GMFpTQnBiaTl2ZFhRdmFXNVBkWFFnZG1GeWFXRjBhVzl1YzF4dVptOXlJQ2hzWlhRZ2EyVjVJR2x1SUdKaGMyVkZZWE5wYm1jcElIdGNiaUFnSUNCcFppQW9ZbUZ6WlVWaGMybHVaeTVvWVhOUGQyNVFjbTl3WlhKMGVTaHJaWGtwS1NCN1hHNGdJQ0FnSUNBZ0lHTnZibk4wSUdWaGMybHVaMFoxYm1OMGFXOXVJRDBnWTNKbFlYUmxSV0Z6YVc1blJuVnVZM1JwYjI0b1ltRnpaVVZoYzJsdVoxdHJaWGxkS1R0Y2JpQWdJQ0FnSUNBZ1ltRnpaVVZoYzJsdVoxdGdKSHRyWlhsOVNXNWdYU0E5SUdWaGMybHVaMFoxYm1OMGFXOXVMbWx1TzF4dUlDQWdJQ0FnSUNCaVlYTmxSV0Z6YVc1blcyQWtlMnRsZVgxUGRYUmdYU0E5SUdWaGMybHVaMFoxYm1OMGFXOXVMbTkxZER0Y2JpQWdJQ0FnSUNBZ1ltRnpaVVZoYzJsdVoxdGdKSHRyWlhsOVNXNVBkWFJnWFNBOUlHVmhjMmx1WjBaMWJtTjBhVzl1TG1sdVQzVjBPMXh1SUNBZ0lIMWNibjFjYmx4dVltRnpaVVZoYzJsdVp5NXNhVzVsWVhJZ1BTQndjbTluY21WemN5QTlQaUJ3Y205bmNtVnpjenRjYm1KaGMyVkZZWE5wYm1jdVlXNTBhV05wY0dGMFpTQTlJQ2h3Y205bmNtVnpjeXdnYzNSeVpXNW5kR2dnUFNCRVJVWkJWVXhVWDBKQlEwdGZVMVJTUlU1SFZFZ3BJRDArWEc0Z0lDQWdLQ2h3Y205bmNtVnpjeW85TWlrZ1BDQXhLU0EvSURBdU5TQXFJR0poYzJWRllYTnBibWN1WW1GamEwbHVLSEJ5YjJkeVpYTnpMQ0J6ZEhKbGJtZDBhQ2tnT2lBZ01DNDFJQ29nS0RJZ0xTQk5ZWFJvTG5CdmR5Z3lMQ0F0TVRBZ0tpQW9jSEp2WjNKbGMzTWdMU0F4S1NrcE8xeHVYRzVpWVhObFJXRnphVzVuTG1WaGMybHVaMFoxYm1OMGFXOXVJRDBnWTNKbFlYUmxSV0Z6YVc1blJuVnVZM1JwYjI0N1hHNWlZWE5sUldGemFXNW5MbU4xWW1salFtVjZhV1Z5SUQwZ1kzVmlhV05DWlhwcFpYSTdYRzVpWVhObFJXRnphVzVuTG0xdlpHbG1lVVZoYzJVZ1BTQW9aV0Z6YVc1bkxDQXVMaTVoY21kektTQTlQaUFvY0hKdlozSmxjM01wSUQwK0lHVmhjMmx1Wnlod2NtOW5jbVZ6Y3l3Z0xpNHVZWEpuY3lrN1hHNWNibVY0Y0c5eWRDQmtaV1poZFd4MElHSmhjMlZGWVhOcGJtYzdJbDE5XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9hY3Rpb25zL2Vhc2luZy9wcmVzZXQtZWFzaW5nLmpzXG4gKiogbW9kdWxlIGlkID0gMTZcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHMuc3RlcFByb2dyZXNzID0gZXhwb3J0cy5zcGVlZFBlclNlY29uZCA9IGV4cG9ydHMuc3BlZWRQZXJGcmFtZSA9IGV4cG9ydHMuc21vb3RoID0gZXhwb3J0cy5yZXN0cmljdCA9IGV4cG9ydHMucmVsYXRpdmVWYWx1ZSA9IGV4cG9ydHMucmFuZG9tID0gZXhwb3J0cy5yYWRpYW5zVG9EZWdyZWVzID0gZXhwb3J0cy5wb2ludEZyb21BbmdsZUFuZERpc3RhbmNlID0gZXhwb3J0cy5vZmZzZXQgPSBleHBvcnRzLmdldFByb2dyZXNzRnJvbVZhbHVlID0gZXhwb3J0cy5nZXRWYWx1ZUZyb21Qcm9ncmVzcyA9IGV4cG9ydHMuaHlwb3RlbnVzZSA9IGV4cG9ydHMuZGlzdGFuY2UgPSBleHBvcnRzLmRpbGF0ZSA9IGV4cG9ydHMuZGVncmVlc1RvUmFkaWFucyA9IGV4cG9ydHMuYW5nbGUgPSB1bmRlZmluZWQ7XG5cbnZhciBfdXRpbHMgPSByZXF1aXJlKCcuL3V0aWxzJyk7XG5cbnZhciBaRVJPX1BPSU5UID0ge1xuICAgIHg6IDAsXG4gICAgeTogMCxcbiAgICB6OiAwXG59O1xuXG52YXIgZGlzdGFuY2UxRCA9IGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgcmV0dXJuIE1hdGguYWJzKGEgLSBiKTtcbn07XG5cbi8qXG4gICAgQW5nbGUgYmV0d2VlbiBwb2ludHNcbiAgICBcbiAgICBUcmFuc2xhdGVzIHRoZSBoeXBvdGhldGljYWwgbGluZSBzbyB0aGF0IHRoZSAnZnJvbScgY29vcmRpbmF0ZXNcbiAgICBhcmUgYXQgMCwwLCB0aGVuIHJldHVybiB0aGUgYW5nbGUgdXNpbmcgLmFuZ2xlRnJvbUNlbnRlcigpXG4gICAgXG4gICAgQHBhcmFtIFtvYmplY3RdOiBYIGFuZCBZIGNvb3JkaW5hdGVzIG9mIGZyb20gcG9pbnRcbiAgICBAcGFyYW0gW29iamVjdF06IFggYW5kIFkgY29yZGluYXRlcyBvZiB0byBwb2ludFxuICAgIEByZXR1cm4gW3JhZGlhbl06IEFuZ2xlIGJldHdlZW4gdGhlIHR3byBwb2ludHMgaW4gcmFkaWFuc1xuKi9cbnZhciBhbmdsZSA9IGV4cG9ydHMuYW5nbGUgPSBmdW5jdGlvbiAoYSkge1xuICAgIHZhciBiID0gYXJndW1lbnRzLmxlbmd0aCA8PSAxIHx8IGFyZ3VtZW50c1sxXSA9PT0gdW5kZWZpbmVkID8gWkVST19QT0lOVCA6IGFyZ3VtZW50c1sxXTtcbiAgICByZXR1cm4gcmFkaWFuc1RvRGVncmVlcyhNYXRoLmF0YW4yKGEueCAtIGIueCwgYS55IC0gYi55KSk7XG59O1xuXG4vKlxuICAgIENvbnZlcnQgZGVncmVlcyB0byByYWRpYW5zXG4gICAgXG4gICAgQHBhcmFtIFtudW1iZXJdOiBWYWx1ZSBpbiBkZWdyZWVzXG4gICAgQHJldHVybiBbbnVtYmVyXTogVmFsdWUgaW4gcmFkaWFuc1xuKi9cbnZhciBkZWdyZWVzVG9SYWRpYW5zID0gZXhwb3J0cy5kZWdyZWVzVG9SYWRpYW5zID0gZnVuY3Rpb24gKGRlZ3JlZXMpIHtcbiAgICByZXR1cm4gZGVncmVlcyAqIE1hdGguUEkgLyAxODA7XG59O1xuXG4vKlxuICAgIERpbGF0ZVxuICAgIFxuICAgIENoYW5nZSB0aGUgcHJvZ3Jlc3Npb24gYmV0d2VlbiBhIGFuZCBiIGFjY29yZGluZyB0byBkaWxhdGlvbi5cbiAgICBcbiAgICBTbyBkaWxhdGlvbiA9IDAuNSB3b3VsZCBjaGFuZ2VcbiAgICBcbiAgICBhIC0tLS0tLS0tLSBiXG4gICAgXG4gICAgdG9cbiAgICBcbiAgICBhIC0tLS0gYlxuICAgIFxuICAgIEBwYXJhbSBbbnVtYmVyXTogUHJldmlvdXMgdmFsdWVcbiAgICBAcGFyYW0gW251bWJlcl06IEN1cnJlbnQgdmFsdWVcbiAgICBAcGFyYW0gW251bWJlcl06IERpbGF0ZSBwcm9ncmVzcyBieSB4XG4gICAgQHJldHVybiBbbnVtYmVyXTogUHJldmlvdXMgdmFsdWUgcGx1cyB0aGUgZGlsYXRlZCBkaWZmZXJlbmNlXG4qL1xudmFyIGRpbGF0ZSA9IGV4cG9ydHMuZGlsYXRlID0gZnVuY3Rpb24gKGEsIGIsIGRpbGF0aW9uKSB7XG4gICAgcmV0dXJuIGEgKyAoYiAtIGEpICogZGlsYXRpb247XG59O1xuXG4vKlxuICAgIERpc3RhbmNlXG4gICAgXG4gICAgUmV0dXJucyB0aGUgZGlzdGFuY2UgYmV0d2VlbiB0d28gbiBkaW1lbnNpb25hbCBwb2ludHMuXG4gICAgXG4gICAgQHBhcmFtIFtvYmplY3QvbnVtYmVyXTogeCBhbmQgeSBvciBqdXN0IHggb2YgcG9pbnQgQVxuICAgIEBwYXJhbSBbb2JqZWN0L251bWJlcl06IChvcHRpb25hbCk6IHggYW5kIHkgb3IganVzdCB4IG9mIHBvaW50IEJcbiAgICBAcmV0dXJuIFtudW1iZXJdOiBUaGUgZGlzdGFuY2UgYmV0d2VlbiB0aGUgdHdvIHBvaW50c1xuKi9cbnZhciBkaXN0YW5jZSA9IGV4cG9ydHMuZGlzdGFuY2UgPSBmdW5jdGlvbiAoYSkge1xuICAgIHZhciBiID0gYXJndW1lbnRzLmxlbmd0aCA8PSAxIHx8IGFyZ3VtZW50c1sxXSA9PT0gdW5kZWZpbmVkID8gWkVST19QT0lOVCA6IGFyZ3VtZW50c1sxXTtcblxuICAgIC8vIDFEIGRpbWVuc2lvbnNcbiAgICBpZiAoKDAsIF91dGlscy5pc051bSkoYSkpIHtcbiAgICAgICAgcmV0dXJuIGRpc3RhbmNlMUQoYSwgYik7XG5cbiAgICAgICAgLy8gTXVsdGktZGltZW5zaW9uYWxcbiAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdmFyIHhEZWx0YSA9IGRpc3RhbmNlMUQoYS54LCBiLngpO1xuICAgICAgICAgICAgdmFyIHlEZWx0YSA9IGRpc3RhbmNlMUQoYS55LCBiLnkpO1xuICAgICAgICAgICAgdmFyIHpEZWx0YSA9ICgwLCBfdXRpbHMuaXNOdW0pKGEueikgPyBkaXN0YW5jZTFEKGEueiwgYi56KSA6IDA7XG5cbiAgICAgICAgICAgIHJldHVybiBNYXRoLnNxcnQoTWF0aC5wb3coeERlbHRhLCAyKSArIE1hdGgucG93KHlEZWx0YSwgMikgKyBNYXRoLnBvdyh6RGVsdGEsIDIpKTtcbiAgICAgICAgfVxufTtcblxuLypcbiAgICBIeXBvdGVudXNlXG4gICAgXG4gICAgUmV0dXJucyB0aGUgaHlwb3RlbnVzZSwgc2lkZSBDLCBnaXZlbiB0aGUgbGVuZ3RocyBvZiBzaWRlcyBBIGFuZCBCLlxuICAgIFxuICAgIEBwYXJhbSBbbnVtYmVyXTogTGVuZ3RoIG9mIEFcbiAgICBAcGFyYW0gW251bWJlcl06IExlbmd0aCBvZiBCXG4gICAgQHJldHVybiBbbnVtYmVyXTogTGVuZ3RoIG9mIENcbiovXG52YXIgaHlwb3RlbnVzZSA9IGV4cG9ydHMuaHlwb3RlbnVzZSA9IGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgcmV0dXJuIE1hdGguc3FydChhICogYSArIGIgKiBiKTtcbn07XG5cbi8qXG4gICAgVmFsdWUgaW4gcmFuZ2UgZnJvbSBwcm9ncmVzc1xuICAgIFxuICAgIEdpdmVuIGEgbG93ZXIgbGltaXQgYW5kIGFuIHVwcGVyIGxpbWl0LCB3ZSByZXR1cm4gdGhlIHZhbHVlIHdpdGhpblxuICAgIHRoYXQgcmFuZ2UgYXMgZXhwcmVzc2VkIGJ5IHByb2dyZXNzIChhIG51bWJlciBmcm9tIDAtMSlcbiAgICBcbiAgICBAcGFyYW0gW251bWJlcl06IFRoZSBwcm9ncmVzcyBiZXR3ZWVuIGxvd2VyIGFuZCB1cHBlciBsaW1pdHMgZXhwcmVzc2VkIDAtMVxuICAgIEBwYXJhbSBbbnVtYmVyXTogTG93ZXIgbGltaXQgb2YgcmFuZ2VcbiAgICBAcGFyYW0gW251bWJlcl06IFVwcGVyIGxpbWl0IG9mIHJhbmdlXG4gICAgQHJldHVybiBbbnVtYmVyXTogVmFsdWUgYXMgY2FsY3VsYXRlZCBmcm9tIHByb2dyZXNzIHdpdGhpbiByYW5nZSAobm90IGxpbWl0ZWQgd2l0aGluIHJhbmdlKVxuKi9cbnZhciBnZXRWYWx1ZUZyb21Qcm9ncmVzcyA9IGV4cG9ydHMuZ2V0VmFsdWVGcm9tUHJvZ3Jlc3MgPSBmdW5jdGlvbiAocHJvZ3Jlc3MsIGZyb20sIHRvKSB7XG4gICAgcmV0dXJuIC1wcm9ncmVzcyAqIGZyb20gKyBwcm9ncmVzcyAqIHRvICsgZnJvbTtcbn07XG5cbi8qXG4gICAgUHJvZ3Jlc3Mgd2l0aGluIGdpdmVuIHJhbmdlXG4gICAgXG4gICAgR2l2ZW4gYSBsb3dlciBsaW1pdCBhbmQgYW4gdXBwZXIgbGltaXQsIHdlIHJldHVybiB0aGUgcHJvZ3Jlc3NcbiAgICAoZXhwcmVzc2VkIGFzIGEgbnVtYmVyIDAtMSkgcmVwcmVzZW50ZWQgYnkgdGhlIGdpdmVuIHZhbHVlLCBhbmRcbiAgICBsaW1pdCB0aGF0IHByb2dyZXNzIHRvIHdpdGhpbiAwLTEuXG4gICAgXG4gICAgQHBhcmFtIFtudW1iZXJdOiBWYWx1ZSB0byBmaW5kIHByb2dyZXNzIHdpdGhpbiBnaXZlbiByYW5nZVxuICAgIEBwYXJhbSBbbnVtYmVyXTogTG93ZXIgbGltaXQgXG4gICAgQHBhcmFtIFtudW1iZXJdOiBVcHBlciBsaW1pdFxuICAgIEByZXR1cm4gW251bWJlcl06IFByb2dyZXNzIG9mIHZhbHVlIHdpdGhpbiByYW5nZSBhcyBleHByZXNzZWQgMC0xXG4qL1xudmFyIGdldFByb2dyZXNzRnJvbVZhbHVlID0gZXhwb3J0cy5nZXRQcm9ncmVzc0Zyb21WYWx1ZSA9IGZ1bmN0aW9uICh2YWx1ZSwgZnJvbSwgdG8pIHtcbiAgICByZXR1cm4gKHZhbHVlIC0gZnJvbSkgLyAodG8gLSBmcm9tKTtcbn07XG5cbi8qXG4gICAgT2Zmc2V0IGJldHdlZW4gdHdvIG9iamVjdHMgb2YgbnVtYmVyc1xuXG4gICAgSWYgcHJvcGVydHkgaXMgZm91bmQgaW4gYiBub3QgcHJlc2VudCBpbiBhLCBpdCB3aWxsIHJldHVybiBgMGAgZm9yIHRoYXQgcHJvcC5cbiAgICBcbiAgICBAcGFyYW0gW1BvaW50XTogRmlyc3Qgb2JqZWN0XG4gICAgQHBhcmFtIFtQb2ludF06IFNlY29uZCBvYmplY3RcbiAgICBAcmV0dXJuIFtPZmZzZXRdOiBEaXN0YW5jZSBtZXRyaWNzIGJldHdlZW4gdHdvIHBvaW50c1xuKi9cbnZhciBvZmZzZXQgPSBleHBvcnRzLm9mZnNldCA9IGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgdmFyIG9mZnNldCA9IHt9O1xuXG4gICAgZm9yICh2YXIga2V5IGluIGIpIHtcbiAgICAgICAgaWYgKGIuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgICAgb2Zmc2V0W2tleV0gPSAoMCwgX3V0aWxzLmhhc1Byb3BlcnR5KShhLCBrZXkpID8gYltrZXldIC0gYVtrZXldIDogMDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBvZmZzZXQ7XG59O1xuXG4vKlxuICAgIFBvaW50IGZyb20gYW5nbGUgYW5kIGRpc3RhbmNlXG4gICAgXG4gICAgQHBhcmFtIFtvYmplY3RdOiAyRCBwb2ludCBvZiBvcmlnaW5cbiAgICBAcGFyYW0gW251bWJlcl06IEFuZ2xlIGZyb20gb3JpZ2luXG4gICAgQHBhcmFtIFtudW1iZXJdOiBEaXN0YW5jZSBmcm9tIG9yaWdpblxuICAgIEByZXR1cm4gW29iamVjdF06IENhbGN1bGF0ZWQgMkQgcG9pbnRcbiovXG52YXIgcG9pbnRGcm9tQW5nbGVBbmREaXN0YW5jZSA9IGV4cG9ydHMucG9pbnRGcm9tQW5nbGVBbmREaXN0YW5jZSA9IGZ1bmN0aW9uIChvcmlnaW4sIGFuZ2xlLCBkaXN0YW5jZSkge1xuICAgIGFuZ2xlID0gZGVncmVlc1RvUmFkaWFucyhhbmdsZSk7XG5cbiAgICByZXR1cm4ge1xuICAgICAgICB4OiBkaXN0YW5jZSAqIE1hdGguY29zKGFuZ2xlKSArIG9yaWdpbi54LFxuICAgICAgICB5OiBkaXN0YW5jZSAqIE1hdGguc2luKGFuZ2xlKSArIG9yaWdpbi55XG4gICAgfTtcbn07XG5cbi8qXG4gICAgQ29udmVydCByYWRpYW5zIHRvIGRlZ3JlZXNcbiAgICBcbiAgICBAcGFyYW0gW251bWJlcl06IFZhbHVlIGluIHJhZGlhbnNcbiAgICBAcmV0dXJuIFtudW1iZXJdOiBWYWx1ZSBpbiBkZWdyZWVzXG4qL1xudmFyIHJhZGlhbnNUb0RlZ3JlZXMgPSBleHBvcnRzLnJhZGlhbnNUb0RlZ3JlZXMgPSBmdW5jdGlvbiAocmFkaWFucykge1xuICAgIHJldHVybiByYWRpYW5zICogMTgwIC8gTWF0aC5QSTtcbn07XG5cbi8qXG4gICAgUmV0dXJuIHJhbmRvbSBudW1iZXIgYmV0d2VlbiByYW5nZVxuICAgIFxuICAgIEBwYXJhbSBbbnVtYmVyXSAob3B0aW9uYWwpOiBPdXRwdXQgbWluaW11bVxuICAgIEBwYXJhbSBbbnVtYmVyXSAob3B0aW9uYWwpOiBPdXRwdXQgbWF4aW11bVxuICAgIEByZXR1cm4gW251bWJlcl06IFJhbmRvbSBudW1iZXIgd2l0aGluIHJhbmdlLCBvciAwIGFuZCAxIGlmIG5vbmUgcHJvdmlkZWRcbiovXG52YXIgcmFuZG9tID0gZXhwb3J0cy5yYW5kb20gPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIG1pbiA9IGFyZ3VtZW50cy5sZW5ndGggPD0gMCB8fCBhcmd1bWVudHNbMF0gPT09IHVuZGVmaW5lZCA/IDAgOiBhcmd1bWVudHNbMF07XG4gICAgdmFyIG1heCA9IGFyZ3VtZW50cy5sZW5ndGggPD0gMSB8fCBhcmd1bWVudHNbMV0gPT09IHVuZGVmaW5lZCA/IDEgOiBhcmd1bWVudHNbMV07XG4gICAgcmV0dXJuIE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluKSArIG1pbjtcbn07XG5cbi8qXG4gICAgQ2FsY3VsYXRlIHJlbGF0aXZlIHZhbHVlXG4gICAgXG4gICAgVGFrZXMgdGhlIG9wZXJhdG9yIGFuZCB2YWx1ZSBmcm9tIGEgc3RyaW5nLCBpZSBcIis9NVwiLCBhbmQgYXBwbGllc1xuICAgIHRvIHRoZSBjdXJyZW50IHZhbHVlIHRvIHJlc29sdmUgYSBuZXcgdGFyZ2V0LlxuICAgIFxuICAgIEBwYXJhbSBbbnVtYmVyXTogQ3VycmVudCB2YWx1ZVxuICAgIEBwYXJhbSBbc3RyaW5nXTogUmVsYXRpdmUgdmFsdWVcbiAgICBAcmV0dXJuIFtudW1iZXJdOiBOZXcgdmFsdWVcbiovXG52YXIgcmVsYXRpdmVWYWx1ZSA9IGV4cG9ydHMucmVsYXRpdmVWYWx1ZSA9IGZ1bmN0aW9uIChjdXJyZW50LCByZWxhdGl2ZSkge1xuICAgIHZhciBuZXdWYWx1ZSA9IGN1cnJlbnQ7XG4gICAgdmFyIGVxdWF0aW9uID0gcmVsYXRpdmUuc3BsaXQoJz0nKTtcbiAgICB2YXIgb3BlcmF0b3IgPSBlcXVhdGlvblswXTtcblxuICAgIHZhciBfc3BsaXRWYWx1ZVVuaXQgPSAoMCwgX3V0aWxzLnNwbGl0VmFsdWVVbml0KShlcXVhdGlvblsxXSk7XG5cbiAgICB2YXIgdW5pdCA9IF9zcGxpdFZhbHVlVW5pdC51bml0O1xuICAgIHZhciB2YWx1ZSA9IF9zcGxpdFZhbHVlVW5pdC52YWx1ZTtcblxuICAgIHZhbHVlID0gcGFyc2VGbG9hdCh2YWx1ZSk7XG5cbiAgICBzd2l0Y2ggKG9wZXJhdG9yKSB7XG4gICAgICAgIGNhc2UgJysnOlxuICAgICAgICAgICAgbmV3VmFsdWUgKz0gdmFsdWU7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnLSc6XG4gICAgICAgICAgICBuZXdWYWx1ZSAtPSB2YWx1ZTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICcqJzpcbiAgICAgICAgICAgIG5ld1ZhbHVlICo9IHZhbHVlO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJy8nOlxuICAgICAgICAgICAgbmV3VmFsdWUgLz0gdmFsdWU7XG4gICAgICAgICAgICBicmVhaztcbiAgICB9XG5cbiAgICBpZiAodW5pdCkge1xuICAgICAgICBuZXdWYWx1ZSArPSB1bml0O1xuICAgIH1cblxuICAgIHJldHVybiBuZXdWYWx1ZTtcbn07XG5cbi8qXG4gICAgUmVzdHJpY3QgdmFsdWUgdG8gcmFuZ2VcbiAgICBcbiAgICBSZXR1cm4gdmFsdWUgd2l0aGluIHRoZSByYW5nZSBvZiBsb3dlckxpbWl0IGFuZCB1cHBlckxpbWl0XG4gICAgXG4gICAgQHBhcmFtIFtudW1iZXJdOiBWYWx1ZSB0byBrZWVwIHdpdGhpbiByYW5nZVxuICAgIEBwYXJhbSBbbnVtYmVyXTogTG93ZXIgbGltaXQgb2YgcmFuZ2VcbiAgICBAcGFyYW0gW251bWJlcl06IFVwcGVyIGxpbWl0IG9mIHJhbmdlXG4gICAgQHJldHVybiBbbnVtYmVyXTogVmFsdWUgYXMgbGltaXRlZCB3aXRoaW4gZ2l2ZW4gcmFuZ2VcbiovXG52YXIgcmVzdHJpY3QgPSBleHBvcnRzLnJlc3RyaWN0ID0gZnVuY3Rpb24gKHZhbHVlLCBtaW4sIG1heCkge1xuICAgIHJldHVybiBNYXRoLm1heChNYXRoLm1pbih2YWx1ZSwgbWF4KSwgbWluKTtcbn07XG5cbi8qXG4gICAgRnJhbWVyYXRlLWluZGVwZW5kZW50IHNtb290aGluZ1xuXG4gICAgQHBhcmFtIFtudW1iZXJdOiBOZXcgdmFsdWVcbiAgICBAcGFyYW0gW251bWJlcl06IE9sZCB2YWx1ZVxuICAgIEBwYXJhbSBbbnVtYmVyXTogRnJhbWUgZHVyYXRpb25cbiAgICBAcGFyYW0gW251bWJlcl0gKG9wdGlvbmFsKTogU21vb3RoaW5nICgwIGlzIG5vbmUpXG4qL1xudmFyIHNtb290aCA9IGV4cG9ydHMuc21vb3RoID0gZnVuY3Rpb24gKG5ld1ZhbHVlLCBvbGRWYWx1ZSwgZHVyYXRpb24pIHtcbiAgICB2YXIgc21vb3RoaW5nID0gYXJndW1lbnRzLmxlbmd0aCA8PSAzIHx8IGFyZ3VtZW50c1szXSA9PT0gdW5kZWZpbmVkID8gMCA6IGFyZ3VtZW50c1szXTtcbiAgICByZXR1cm4gKDAsIF91dGlscy50b0RlY2ltYWwpKG9sZFZhbHVlICsgZHVyYXRpb24gKiAobmV3VmFsdWUgLSBvbGRWYWx1ZSkgLyBNYXRoLm1heChzbW9vdGhpbmcsIGR1cmF0aW9uKSk7XG59O1xuXG4vKlxuICAgIENvbnZlcnQgeCBwZXIgc2Vjb25kIHRvIHBlciBmcmFtZSB2ZWxvY2l0eSBiYXNlZCBvbiBmcHNcbiAgICBcbiAgICBAcGFyYW0gW251bWJlcl06IFVuaXQgcGVyIHNlY29uZFxuICAgIEBwYXJhbSBbbnVtYmVyXTogRnJhbWUgZHVyYXRpb24gaW4gbXNcbiovXG52YXIgc3BlZWRQZXJGcmFtZSA9IGV4cG9ydHMuc3BlZWRQZXJGcmFtZSA9IGZ1bmN0aW9uICh4cHMsIGZyYW1lRHVyYXRpb24pIHtcbiAgICByZXR1cm4gKDAsIF91dGlscy5pc051bSkoeHBzKSA/IHhwcyAvICgxMDAwIC8gZnJhbWVEdXJhdGlvbikgOiAwO1xufTtcblxuLypcbiAgICBDb252ZXJ0IHZlbG9jaXR5IGludG8gdmVsaWNpdHkgcGVyIHNlY29uZFxuICAgIFxuICAgIEBwYXJhbSBbbnVtYmVyXTogVW5pdCBwZXIgZnJhbWVcbiAgICBAcGFyYW0gW251bWJlcl06IEZyYW1lIGR1cmF0aW9uIGluIG1zXG4qL1xudmFyIHNwZWVkUGVyU2Vjb25kID0gZXhwb3J0cy5zcGVlZFBlclNlY29uZCA9IGZ1bmN0aW9uICh2ZWxvY2l0eSwgZnJhbWVEdXJhdGlvbikge1xuICAgIHJldHVybiB2ZWxvY2l0eSAqICgxMDAwIC8gZnJhbWVEdXJhdGlvbik7XG59O1xuXG4vKlxuICAgIENyZWF0ZSBzdGVwcGVkIHZlcnNpb24gb2YgMC0xIHByb2dyZXNzXG4gICAgXG4gICAgQHBhcmFtIFtudW1iZXJdOiBDdXJyZW50IHZhbHVlXG4gICAgQHBhcmFtIFtpbnRdOiBOdW1iZXIgb2Ygc3RlcHNcbiAgICBAcmV0dXJuIFtudW1iZXJdOiBTdGVwcGVkIHZhbHVlXG4qL1xudmFyIHN0ZXBQcm9ncmVzcyA9IGV4cG9ydHMuc3RlcFByb2dyZXNzID0gZnVuY3Rpb24gKHByb2dyZXNzLCBzdGVwcykge1xuICAgIHZhciBzZWdtZW50ID0gMSAvIChzdGVwcyAtIDEpO1xuICAgIHZhciB0YXJnZXQgPSAxIC0gMSAvIHN0ZXBzO1xuICAgIHZhciBwcm9ncmVzc09mVGFyZ2V0ID0gTWF0aC5taW4ocHJvZ3Jlc3MgLyB0YXJnZXQsIDEpO1xuXG4gICAgcmV0dXJuIE1hdGguZmxvb3IocHJvZ3Jlc3NPZlRhcmdldCAvIHNlZ21lbnQpICogc2VnbWVudDtcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5OeVl5OXBibU12WTJGc1l5NXFjeUpkTENKdVlXMWxjeUk2VzEwc0ltMWhjSEJwYm1keklqb2lPenM3T3pzN08wRkJUMEVzU1VGQlRTeGhRVUZoTzBGQlEyWXNUMEZCUnl4RFFVRklPMEZCUTBFc1QwRkJSeXhEUVVGSU8wRkJRMEVzVDBGQlJ5eERRVUZJTzBOQlNFVTdPMEZCVFU0c1NVRkJUU3hoUVVGaExGVkJRVU1zUTBGQlJDeEZRVUZKTEVOQlFVbzdWMEZCVlN4TFFVRkxMRWRCUVV3c1EwRkJVeXhKUVVGSkxFTkJRVW83UTBGQmJrSTdPenM3T3pzN096czdPenRCUVZsYUxFbEJRVTBzZDBKQlFWRXNWVUZCUXl4RFFVRkVPMUZCUVVrc01FUkJRVWs3VjBGQlpTeHBRa0ZCYVVJc1MwRkJTeXhMUVVGTUxFTkJRVmNzUlVGQlJTeERRVUZHTEVkQlFVMHNSVUZCUlN4RFFVRkdMRVZCUVVzc1JVRkJSU3hEUVVGR0xFZEJRVTBzUlVGQlJTeERRVUZHTEVOQlFUZERPME5CUVhaQ096czdPenM3T3p0QlFWRmtMRWxCUVUwc09FTkJRVzFDTEZWQlFVTXNUMEZCUkR0WFFVRmhMRlZCUVZVc1MwRkJTeXhGUVVGTUxFZEJRVlVzUjBGQmNFSTdRMEZCWWpzN096czdPenM3T3pzN096czdPenM3T3pzN1FVRnZRbnBDTEVsQlFVMHNNRUpCUVZNc1ZVRkJReXhEUVVGRUxFVkJRVWtzUTBGQlNpeEZRVUZQTEZGQlFWQTdWMEZCYjBJc1NVRkJTeXhEUVVGRExFbEJRVWtzUTBGQlNpeERRVUZFTEVkQlFWVXNVVUZCVmp0RFFVRjZRanM3T3pzN096czdPenM3UVVGWFppeEpRVUZOTERoQ1FVRlhMRlZCUVVNc1EwRkJSQ3hGUVVGMVFqdFJRVUZ1UWl3d1JFRkJTU3d3UWtGQlpUczdPMEZCUlRORExGRkJRVWtzYTBKQlFVMHNRMEZCVGl4RFFVRktMRVZCUVdNN1FVRkRWaXhsUVVGUExGZEJRVmNzUTBGQldDeEZRVUZqTEVOQlFXUXNRMEZCVURzN08wRkJSRlVzUzBGQlpDeE5RVWxQTzBGQlEwZ3NaMEpCUVUwc1UwRkJVeXhYUVVGWExFVkJRVVVzUTBGQlJpeEZRVUZMTEVWQlFVVXNRMEZCUml4RFFVRjZRaXhEUVVSSU8wRkJSVWdzWjBKQlFVMHNVMEZCVXl4WFFVRlhMRVZCUVVVc1EwRkJSaXhGUVVGTExFVkJRVVVzUTBGQlJpeERRVUY2UWl4RFFVWklPMEZCUjBnc1owSkJRVTBzVTBGQlV5eHBRa0ZCUXl4RFFVRk5MRVZCUVVVc1EwRkJSaXhEUVVGUUxFZEJRV1VzVjBGQlZ5eEZRVUZGTEVOQlFVWXNSVUZCU3l4RlFVRkZMRU5CUVVZc1EwRkJMMElzUjBGQmMwTXNRMEZCZEVNc1EwRklXanM3UVVGTFNDeHRRa0ZCVHl4TFFVRkxMRWxCUVV3c1EwRkJWU3hUUVVGRExGRkJRVlVzUlVGQldDeFpRVUZwUWl4UlFVRlZMRVZCUVROQ0xGbEJRV2xETEZGQlFWVXNSVUZCTTBNc1EwRkJha0lzUTBGTVJ6dFRRVXBRTzBOQlJtOUNPenM3T3pzN096czdPenRCUVhkQ2FrSXNTVUZCVFN4clEwRkJZU3hWUVVGRExFTkJRVVFzUlVGQlNTeERRVUZLTzFkQlFWVXNTMEZCU3l4SlFVRk1MRU5CUVZVc1EwRkJReXhIUVVGSkxFTkJRVW9zUjBGQlZTeEpRVUZKTEVOQlFVbzdRMEZCTDBJN096czdPenM3T3pzN096czdRVUZoYmtJc1NVRkJUU3h6UkVGQmRVSXNWVUZCUXl4UlFVRkVMRVZCUVZjc1NVRkJXQ3hGUVVGcFFpeEZRVUZxUWp0WFFVRjNRaXhEUVVGSExGRkJRVVlzUjBGQllTeEpRVUZpTEVkQlFYTkNMRmRCUVZjc1JVRkJXQ3hIUVVGcFFpeEpRVUY0UXp0RFFVRjRRanM3T3pzN096czdPenM3T3pzN1FVRmpOMElzU1VGQlRTeHpSRUZCZFVJc1ZVRkJReXhMUVVGRUxFVkJRVkVzU1VGQlVpeEZRVUZqTEVWQlFXUTdWMEZCY1VJc1EwRkJReXhSUVVGUkxFbEJRVklzUTBGQlJDeEpRVUZyUWl4TFFVRkxMRWxCUVV3c1EwRkJiRUk3UTBGQmNrSTdPenM3T3pzN096czdPMEZCVnpkQ0xFbEJRVTBzTUVKQlFWTXNWVUZCUXl4RFFVRkVMRVZCUVVrc1EwRkJTaXhGUVVGVk8wRkJRelZDTEZGQlFVMHNVMEZCVXl4RlFVRlVMRU5CUkhOQ096dEJRVWMxUWl4VFFVRkxMRWxCUVVrc1IwRkJTaXhKUVVGWExFTkJRV2hDTEVWQlFXMUNPMEZCUTJZc1dVRkJTU3hGUVVGRkxHTkJRVVlzUTBGQmFVSXNSMEZCYWtJc1EwRkJTaXhGUVVFeVFqdEJRVU4yUWl4dFFrRkJUeXhIUVVGUUxFbEJRV01zZDBKQlFWa3NRMEZCV2l4RlFVRmxMRWRCUVdZc1NVRkJjMElzUlVGQlJTeEhRVUZHTEVsQlFWTXNSVUZCUlN4SFFVRkdMRU5CUVZRc1IwRkJhMElzUTBGQmVFTXNRMEZFVXp0VFFVRXpRanRMUVVSS096dEJRVTFCTEZkQlFVOHNUVUZCVUN4RFFWUTBRanREUVVGV096czdPenM3T3pzN08wRkJiMEptTEVsQlFVMHNaMFZCUVRSQ0xGVkJRVU1zVFVGQlJDeEZRVUZUTEV0QlFWUXNSVUZCWjBJc1VVRkJhRUlzUlVGQk5rSTdRVUZEYkVVc1dVRkJVU3hwUWtGQmFVSXNTMEZCYWtJc1EwRkJVaXhEUVVSclJUczdRVUZIYkVVc1YwRkJUenRCUVVOSUxGZEJRVWNzVjBGQlZ5eExRVUZMTEVkQlFVd3NRMEZCVXl4TFFVRlVMRU5CUVZnc1IwRkJOa0lzVDBGQlR5eERRVUZRTzBGQlEyaERMRmRCUVVjc1YwRkJWeXhMUVVGTExFZEJRVXdzUTBGQlV5eExRVUZVTEVOQlFWZ3NSMEZCTmtJc1QwRkJUeXhEUVVGUU8wdEJSbkJETEVOQlNHdEZPME5CUVRkQ096czdPenM3T3p0QlFXVnNReXhKUVVGTkxEaERRVUZ0UWl4VlFVRkRMRTlCUVVRN1YwRkJZU3hWUVVGVkxFZEJRVllzUjBGQlowSXNTMEZCU3l4RlFVRk1PME5CUVRkQ096czdPenM3T3pzN1FVRlRla0lzU1VGQlRTd3dRa0ZCVXp0UlFVRkRMRFJFUVVGTk8xRkJRVWNzTkVSQlFVMDdWMEZCVFN4TFFVRkxMRTFCUVV3c1RVRkJhVUlzVFVGQlRTeEhRVUZPTEVOQlFXcENMRWRCUVRoQ0xFZEJRVGxDTzBOQlFYUkNPenM3T3pzN096czdPenM3UVVGWlppeEpRVUZOTEhkRFFVRm5RaXhWUVVGRExFOUJRVVFzUlVGQlZTeFJRVUZXTEVWQlFYVkNPMEZCUTJoRUxGRkJRVWtzVjBGQlZ5eFBRVUZZTEVOQlJEUkRPMEZCUldoRUxGRkJRVTBzVjBGQlZ5eFRRVUZUTEV0QlFWUXNRMEZCWlN4SFFVRm1MRU5CUVZnc1EwRkdNRU03UVVGSGFFUXNVVUZCVFN4WFFVRlhMRk5CUVZNc1EwRkJWQ3hEUVVGWUxFTkJTREJET3pzd1FrRkpNVUlzTWtKQlFXVXNVMEZCVXl4RFFVRlVMRU5CUVdZc1JVRktNRUk3TzFGQlNURkRMRFJDUVVvd1F6dFJRVWx3UXl3NFFrRktiME03TzBGQlRXaEVMRmxCUVZFc1YwRkJWeXhMUVVGWUxFTkJRVklzUTBGT1owUTdPMEZCVVdoRUxGbEJRVkVzVVVGQlVqdEJRVU5CTEdGQlFVc3NSMEZCVER0QlFVTkpMSGRDUVVGWkxFdEJRVm9zUTBGRVNqdEJRVVZKTEd0Q1FVWktPMEZCUkVFc1lVRkpTeXhIUVVGTU8wRkJRMGtzZDBKQlFWa3NTMEZCV2l4RFFVUktPMEZCUlVrc2EwSkJSa283UVVGS1FTeGhRVTlMTEVkQlFVdzdRVUZEU1N4M1FrRkJXU3hMUVVGYUxFTkJSRW83UVVGRlNTeHJRa0ZHU2p0QlFWQkJMR0ZCVlVzc1IwRkJURHRCUVVOSkxIZENRVUZaTEV0QlFWb3NRMEZFU2p0QlFVVkpMR3RDUVVaS08wRkJWa0VzUzBGU1owUTdPMEZCZFVKb1JDeFJRVUZKTEVsQlFVb3NSVUZCVlR0QlFVTk9MRzlDUVVGWkxFbEJRVm9zUTBGRVRUdExRVUZXT3p0QlFVbEJMRmRCUVU4c1VVRkJVQ3hEUVROQ1owUTdRMEZCZGtJN096czdPenM3T3pzN096dEJRWGREZEVJc1NVRkJUU3c0UWtGQlZ5eFZRVUZETEV0QlFVUXNSVUZCVVN4SFFVRlNMRVZCUVdFc1IwRkJZanRYUVVGeFFpeExRVUZMTEVkQlFVd3NRMEZCVXl4TFFVRkxMRWRCUVV3c1EwRkJVeXhMUVVGVUxFVkJRV2RDTEVkQlFXaENMRU5CUVZRc1JVRkJLMElzUjBGQkwwSTdRMEZCY2tJN096czdPenM3T3pzN1FVRlZha0lzU1VGQlRTd3dRa0ZCVXl4VlFVRkRMRkZCUVVRc1JVRkJWeXhSUVVGWUxFVkJRWEZDTEZGQlFYSkNPMUZCUVN0Q0xHdEZRVUZaTzFkQlFVMHNjMEpCUVZVc1YwRkJXU3haUVVGWkxGZEJRVmNzVVVGQldDeERRVUZhTEVkQlFXMURMRXRCUVVzc1IwRkJUQ3hEUVVGVExGTkJRVlFzUlVGQmIwSXNVVUZCY0VJc1EwRkJia003UTBGQmRrVTdPenM3T3pzN08wRkJVV1lzU1VGQlRTeDNRMEZCWjBJc1ZVRkJReXhIUVVGRUxFVkJRVTBzWVVGQlRqdFhRVUYzUWl4cFFrRkJReXhEUVVGTkxFZEJRVTRzUTBGQlJDeEhRVUZsTEU5QlFVOHNUMEZCVHl4aFFVRlFMRU5CUVZBc1IwRkJLMElzUTBGQk9VTTdRMEZCZUVJN096czdPenM3TzBGQlVYUkNMRWxCUVUwc01FTkJRV2xDTEZWQlFVTXNVVUZCUkN4RlFVRlhMR0ZCUVZnN1YwRkJOa0lzV1VGQldTeFBRVUZQTEdGQlFWQXNRMEZCV2p0RFFVRTNRanM3T3pzN096czdPMEZCVTNaQ0xFbEJRVTBzYzBOQlFXVXNWVUZCUXl4UlFVRkVMRVZCUVZjc1MwRkJXQ3hGUVVGeFFqdEJRVU0zUXl4UlFVRk5MRlZCUVZVc1MwRkJTeXhSUVVGUkxFTkJRVklzUTBGQlRDeERRVVEyUWp0QlFVVTNReXhSUVVGTkxGTkJRVk1zU1VGQlN5eEpRVUZKTEV0QlFVb3NRMEZHZVVJN1FVRkhOME1zVVVGQlRTeHRRa0ZCYlVJc1MwRkJTeXhIUVVGTUxFTkJRVk1zVjBGQlZ5eE5RVUZZTEVWQlFXMUNMRU5CUVRWQ0xFTkJRVzVDTEVOQlNIVkRPenRCUVVzM1F5eFhRVUZQTEV0QlFVc3NTMEZCVEN4RFFVRlhMRzFDUVVGdFFpeFBRVUZ1UWl4RFFVRllMRWRCUVhsRExFOUJRWHBETEVOQlRITkRPME5CUVhKQ0lpd2labWxzWlNJNkltTmhiR011YW5NaUxDSnpiM1Z5WTJWU2IyOTBJam9pTDFWelpYSnpMMDFoZEhRdlUybDBaWE12Y0c5d2JXOTBhVzl1SWl3aWMyOTFjbU5sYzBOdmJuUmxiblFpT2xzaWFXMXdiM0owSUh0Y2JpQWdJQ0JvWVhOUWNtOXdaWEowZVN4Y2JpQWdJQ0JwYzA1MWJTeGNiaUFnSUNCemNHeHBkRlpoYkhWbFZXNXBkQ3hjYmlBZ0lDQjBiMFJsWTJsdFlXeGNibjBnWm5KdmJTQW5MaTkxZEdsc2N5YzdYRzVjYm1OdmJuTjBJRnBGVWs5ZlVFOUpUbFFnUFNCN1hHNGdJQ0FnZURvZ01DeGNiaUFnSUNCNU9pQXdMRnh1SUNBZ0lIbzZJREJjYm4wN1hHNWNibU52Ym5OMElHUnBjM1JoYm1ObE1VUWdQU0FvWVN3Z1lpa2dQVDRnVFdGMGFDNWhZbk1vWVNBdElHSXBPMXh1WEc0dktseHVJQ0FnSUVGdVoyeGxJR0psZEhkbFpXNGdjRzlwYm5SelhHNGdJQ0FnWEc0Z0lDQWdWSEpoYm5Oc1lYUmxjeUIwYUdVZ2FIbHdiM1JvWlhScFkyRnNJR3hwYm1VZ2MyOGdkR2hoZENCMGFHVWdKMlp5YjIwbklHTnZiM0prYVc1aGRHVnpYRzRnSUNBZ1lYSmxJR0YwSURBc01Dd2dkR2hsYmlCeVpYUjFjbTRnZEdobElHRnVaMnhsSUhWemFXNW5JQzVoYm1kc1pVWnliMjFEWlc1MFpYSW9LVnh1SUNBZ0lGeHVJQ0FnSUVCd1lYSmhiU0JiYjJKcVpXTjBYVG9nV0NCaGJtUWdXU0JqYjI5eVpHbHVZWFJsY3lCdlppQm1jbTl0SUhCdmFXNTBYRzRnSUNBZ1FIQmhjbUZ0SUZ0dlltcGxZM1JkT2lCWUlHRnVaQ0JaSUdOdmNtUnBibUYwWlhNZ2IyWWdkRzhnY0c5cGJuUmNiaUFnSUNCQWNtVjBkWEp1SUZ0eVlXUnBZVzVkT2lCQmJtZHNaU0JpWlhSM1pXVnVJSFJvWlNCMGQyOGdjRzlwYm5SeklHbHVJSEpoWkdsaGJuTmNiaW92WEc1bGVIQnZjblFnWTI5dWMzUWdZVzVuYkdVZ1BTQW9ZU3dnWWlBOUlGcEZVazlmVUU5SlRsUXBJRDArSUhKaFpHbGhibk5VYjBSbFozSmxaWE1vVFdGMGFDNWhkR0Z1TWloaExuZ2dMU0JpTG5nc0lHRXVlU0F0SUdJdWVTa3BPMXh1WEc0dktseHVJQ0FnSUVOdmJuWmxjblFnWkdWbmNtVmxjeUIwYnlCeVlXUnBZVzV6WEc0Z0lDQWdYRzRnSUNBZ1FIQmhjbUZ0SUZ0dWRXMWlaWEpkT2lCV1lXeDFaU0JwYmlCa1pXZHlaV1Z6WEc0Z0lDQWdRSEpsZEhWeWJpQmJiblZ0WW1WeVhUb2dWbUZzZFdVZ2FXNGdjbUZrYVdGdWMxeHVLaTljYm1WNGNHOXlkQ0JqYjI1emRDQmtaV2R5WldWelZHOVNZV1JwWVc1eklEMGdLR1JsWjNKbFpYTXBJRDArSUdSbFozSmxaWE1nS2lCTllYUm9MbEJKSUM4Z01UZ3dPMXh1WEc0dktseHVJQ0FnSUVScGJHRjBaVnh1SUNBZ0lGeHVJQ0FnSUVOb1lXNW5aU0IwYUdVZ2NISnZaM0psYzNOcGIyNGdZbVYwZDJWbGJpQmhJR0Z1WkNCaUlHRmpZMjl5WkdsdVp5QjBieUJrYVd4aGRHbHZiaTVjYmlBZ0lDQmNiaUFnSUNCVGJ5QmthV3hoZEdsdmJpQTlJREF1TlNCM2IzVnNaQ0JqYUdGdVoyVmNiaUFnSUNCY2JpQWdJQ0JoSUMwdExTMHRMUzB0TFNCaVhHNGdJQ0FnWEc0Z0lDQWdkRzljYmlBZ0lDQmNiaUFnSUNCaElDMHRMUzBnWWx4dUlDQWdJRnh1SUNBZ0lFQndZWEpoYlNCYmJuVnRZbVZ5WFRvZ1VISmxkbWx2ZFhNZ2RtRnNkV1ZjYmlBZ0lDQkFjR0Z5WVcwZ1cyNTFiV0psY2wwNklFTjFjbkpsYm5RZ2RtRnNkV1ZjYmlBZ0lDQkFjR0Z5WVcwZ1cyNTFiV0psY2wwNklFUnBiR0YwWlNCd2NtOW5jbVZ6Y3lCaWVTQjRYRzRnSUNBZ1FISmxkSFZ5YmlCYmJuVnRZbVZ5WFRvZ1VISmxkbWx2ZFhNZ2RtRnNkV1VnY0d4MWN5QjBhR1VnWkdsc1lYUmxaQ0JrYVdabVpYSmxibU5sWEc0cUwxeHVaWGh3YjNKMElHTnZibk4wSUdScGJHRjBaU0E5SUNoaExDQmlMQ0JrYVd4aGRHbHZiaWtnUFQ0Z1lTQXJJQ2dvWWlBdElHRXBJQ29nWkdsc1lYUnBiMjRwTzF4dVhHNHZLbHh1SUNBZ0lFUnBjM1JoYm1ObFhHNGdJQ0FnWEc0Z0lDQWdVbVYwZFhKdWN5QjBhR1VnWkdsemRHRnVZMlVnWW1WMGQyVmxiaUIwZDI4Z2JpQmthVzFsYm5OcGIyNWhiQ0J3YjJsdWRITXVYRzRnSUNBZ1hHNGdJQ0FnUUhCaGNtRnRJRnR2WW1wbFkzUXZiblZ0WW1WeVhUb2dlQ0JoYm1RZ2VTQnZjaUJxZFhOMElIZ2diMllnY0c5cGJuUWdRVnh1SUNBZ0lFQndZWEpoYlNCYmIySnFaV04wTDI1MWJXSmxjbDA2SUNodmNIUnBiMjVoYkNrNklIZ2dZVzVrSUhrZ2IzSWdhblZ6ZENCNElHOW1JSEJ2YVc1MElFSmNiaUFnSUNCQWNtVjBkWEp1SUZ0dWRXMWlaWEpkT2lCVWFHVWdaR2x6ZEdGdVkyVWdZbVYwZDJWbGJpQjBhR1VnZEhkdklIQnZhVzUwYzF4dUtpOWNibVY0Y0c5eWRDQmpiMjV6ZENCa2FYTjBZVzVqWlNBOUlDaGhMQ0JpSUQwZ1drVlNUMTlRVDBsT1ZDa2dQVDRnZTF4dUlDQWdJQzh2SURGRUlHUnBiV1Z1YzJsdmJuTmNiaUFnSUNCcFppQW9hWE5PZFcwb1lTa3BJSHRjYmlBZ0lDQWdJQ0FnY21WMGRYSnVJR1JwYzNSaGJtTmxNVVFvWVN3Z1lpazdYRzVjYmlBZ0lDQXZMeUJOZFd4MGFTMWthVzFsYm5OcGIyNWhiRnh1SUNBZ0lIMGdaV3h6WlNCN1hHNGdJQ0FnSUNBZ0lHTnZibk4wSUhoRVpXeDBZU0E5SUdScGMzUmhibU5sTVVRb1lTNTRMQ0JpTG5ncE8xeHVJQ0FnSUNBZ0lDQmpiMjV6ZENCNVJHVnNkR0VnUFNCa2FYTjBZVzVqWlRGRUtHRXVlU3dnWWk1NUtUdGNiaUFnSUNBZ0lDQWdZMjl1YzNRZ2VrUmxiSFJoSUQwZ0tHbHpUblZ0S0dFdWVpa3BJRDhnWkdsemRHRnVZMlV4UkNoaExub3NJR0l1ZWlrZ09pQXdPMXh1WEc0Z0lDQWdJQ0FnSUhKbGRIVnliaUJOWVhSb0xuTnhjblFvS0hoRVpXeDBZU0FxS2lBeUtTQXJJQ2g1UkdWc2RHRWdLaW9nTWlrZ0t5QW9la1JsYkhSaElDb3FJRElwS1R0Y2JpQWdJQ0I5WEc1OU8xeHVJRnh1THlwY2JpQWdJQ0JJZVhCdmRHVnVkWE5sWEc0Z0lDQWdYRzRnSUNBZ1VtVjBkWEp1Y3lCMGFHVWdhSGx3YjNSbGJuVnpaU3dnYzJsa1pTQkRMQ0JuYVhabGJpQjBhR1VnYkdWdVozUm9jeUJ2WmlCemFXUmxjeUJCSUdGdVpDQkNMbHh1SUNBZ0lGeHVJQ0FnSUVCd1lYSmhiU0JiYm5WdFltVnlYVG9nVEdWdVozUm9JRzltSUVGY2JpQWdJQ0JBY0dGeVlXMGdXMjUxYldKbGNsMDZJRXhsYm1kMGFDQnZaaUJDWEc0Z0lDQWdRSEpsZEhWeWJpQmJiblZ0WW1WeVhUb2dUR1Z1WjNSb0lHOW1JRU5jYmlvdlhHNWxlSEJ2Y25RZ1kyOXVjM1FnYUhsd2IzUmxiblZ6WlNBOUlDaGhMQ0JpS1NBOVBpQk5ZWFJvTG5OeGNuUW9LR0VnS2lCaEtTQXJJQ2hpSUNvZ1lpa3BPMXh1WEc0dktseHVJQ0FnSUZaaGJIVmxJR2x1SUhKaGJtZGxJR1p5YjIwZ2NISnZaM0psYzNOY2JpQWdJQ0JjYmlBZ0lDQkhhWFpsYmlCaElHeHZkMlZ5SUd4cGJXbDBJR0Z1WkNCaGJpQjFjSEJsY2lCc2FXMXBkQ3dnZDJVZ2NtVjBkWEp1SUhSb1pTQjJZV3gxWlNCM2FYUm9hVzVjYmlBZ0lDQjBhR0YwSUhKaGJtZGxJR0Z6SUdWNGNISmxjM05sWkNCaWVTQndjbTluY21WemN5QW9ZU0J1ZFcxaVpYSWdabkp2YlNBd0xURXBYRzRnSUNBZ1hHNGdJQ0FnUUhCaGNtRnRJRnR1ZFcxaVpYSmRPaUJVYUdVZ2NISnZaM0psYzNNZ1ltVjBkMlZsYmlCc2IzZGxjaUJoYm1RZ2RYQndaWElnYkdsdGFYUnpJR1Y0Y0hKbGMzTmxaQ0F3TFRGY2JpQWdJQ0JBY0dGeVlXMGdXMjUxYldKbGNsMDZJRXh2ZDJWeUlHeHBiV2wwSUc5bUlISmhibWRsWEc0Z0lDQWdRSEJoY21GdElGdHVkVzFpWlhKZE9pQlZjSEJsY2lCc2FXMXBkQ0J2WmlCeVlXNW5aVnh1SUNBZ0lFQnlaWFIxY200Z1cyNTFiV0psY2wwNklGWmhiSFZsSUdGeklHTmhiR04xYkdGMFpXUWdabkp2YlNCd2NtOW5jbVZ6Y3lCM2FYUm9hVzRnY21GdVoyVWdLRzV2ZENCc2FXMXBkR1ZrSUhkcGRHaHBiaUJ5WVc1blpTbGNiaW92WEc1bGVIQnZjblFnWTI5dWMzUWdaMlYwVm1Gc2RXVkdjbTl0VUhKdlozSmxjM01nUFNBb2NISnZaM0psYzNNc0lHWnliMjBzSUhSdktTQTlQaUFvTFNCd2NtOW5jbVZ6Y3lBcUlHWnliMjBwSUNzZ0tIQnliMmR5WlhOeklDb2dkRzhwSUNzZ1puSnZiVHRjYmx4dUx5cGNiaUFnSUNCUWNtOW5jbVZ6Y3lCM2FYUm9hVzRnWjJsMlpXNGdjbUZ1WjJWY2JpQWdJQ0JjYmlBZ0lDQkhhWFpsYmlCaElHeHZkMlZ5SUd4cGJXbDBJR0Z1WkNCaGJpQjFjSEJsY2lCc2FXMXBkQ3dnZDJVZ2NtVjBkWEp1SUhSb1pTQndjbTluY21WemMxeHVJQ0FnSUNobGVIQnlaWE56WldRZ1lYTWdZU0J1ZFcxaVpYSWdNQzB4S1NCeVpYQnlaWE5sYm5SbFpDQmllU0IwYUdVZ1oybDJaVzRnZG1Gc2RXVXNJR0Z1WkZ4dUlDQWdJR3hwYldsMElIUm9ZWFFnY0hKdlozSmxjM01nZEc4Z2QybDBhR2x1SURBdE1TNWNiaUFnSUNCY2JpQWdJQ0JBY0dGeVlXMGdXMjUxYldKbGNsMDZJRlpoYkhWbElIUnZJR1pwYm1RZ2NISnZaM0psYzNNZ2QybDBhR2x1SUdkcGRtVnVJSEpoYm1kbFhHNGdJQ0FnUUhCaGNtRnRJRnR1ZFcxaVpYSmRPaUJNYjNkbGNpQnNhVzFwZENCY2JpQWdJQ0JBY0dGeVlXMGdXMjUxYldKbGNsMDZJRlZ3Y0dWeUlHeHBiV2wwWEc0Z0lDQWdRSEpsZEhWeWJpQmJiblZ0WW1WeVhUb2dVSEp2WjNKbGMzTWdiMllnZG1Gc2RXVWdkMmwwYUdsdUlISmhibWRsSUdGeklHVjRjSEpsYzNObFpDQXdMVEZjYmlvdlhHNWxlSEJ2Y25RZ1kyOXVjM1FnWjJWMFVISnZaM0psYzNOR2NtOXRWbUZzZFdVZ1BTQW9kbUZzZFdVc0lHWnliMjBzSUhSdktTQTlQaUFvZG1Gc2RXVWdMU0JtY205dEtTQXZJQ2gwYnlBdElHWnliMjBwTzF4dVhHNHZLbHh1SUNBZ0lFOW1abk5sZENCaVpYUjNaV1Z1SUhSM2J5QnZZbXBsWTNSeklHOW1JRzUxYldKbGNuTmNibHh1SUNBZ0lFbG1JSEJ5YjNCbGNuUjVJR2x6SUdadmRXNWtJR2x1SUdJZ2JtOTBJSEJ5WlhObGJuUWdhVzRnWVN3Z2FYUWdkMmxzYkNCeVpYUjFjbTRnWURCZ0lHWnZjaUIwYUdGMElIQnliM0F1WEc0Z0lDQWdYRzRnSUNBZ1FIQmhjbUZ0SUZ0UWIybHVkRjA2SUVacGNuTjBJRzlpYW1WamRGeHVJQ0FnSUVCd1lYSmhiU0JiVUc5cGJuUmRPaUJUWldOdmJtUWdiMkpxWldOMFhHNGdJQ0FnUUhKbGRIVnliaUJiVDJabWMyVjBYVG9nUkdsemRHRnVZMlVnYldWMGNtbGpjeUJpWlhSM1pXVnVJSFIzYnlCd2IybHVkSE5jYmlvdlhHNWxlSEJ2Y25RZ1kyOXVjM1FnYjJabWMyVjBJRDBnS0dFc0lHSXBJRDArSUh0Y2JpQWdJQ0JqYjI1emRDQnZabVp6WlhRZ1BTQjdmVHRjYmx4dUlDQWdJR1p2Y2lBb2JHVjBJR3RsZVNCcGJpQmlLU0I3WEc0Z0lDQWdJQ0FnSUdsbUlDaGlMbWhoYzA5M2JsQnliM0JsY25SNUtHdGxlU2twSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJRzltWm5ObGRGdHJaWGxkSUQwZ2FHRnpVSEp2Y0dWeWRIa29ZU3dnYTJWNUtTQS9JR0piYTJWNVhTQXRJR0ZiYTJWNVhTQTZJREE3WEc0Z0lDQWdJQ0FnSUgxY2JpQWdJQ0I5WEc1Y2JpQWdJQ0J5WlhSMWNtNGdiMlptYzJWME8xeHVmVHRjYmx4dUx5cGNiaUFnSUNCUWIybHVkQ0JtY205dElHRnVaMnhsSUdGdVpDQmthWE4wWVc1alpWeHVJQ0FnSUZ4dUlDQWdJRUJ3WVhKaGJTQmJiMkpxWldOMFhUb2dNa1FnY0c5cGJuUWdiMllnYjNKcFoybHVYRzRnSUNBZ1FIQmhjbUZ0SUZ0dWRXMWlaWEpkT2lCQmJtZHNaU0JtY205dElHOXlhV2RwYmx4dUlDQWdJRUJ3WVhKaGJTQmJiblZ0WW1WeVhUb2dSR2x6ZEdGdVkyVWdabkp2YlNCdmNtbG5hVzVjYmlBZ0lDQkFjbVYwZFhKdUlGdHZZbXBsWTNSZE9pQkRZV3hqZFd4aGRHVmtJREpFSUhCdmFXNTBYRzRxTDF4dVpYaHdiM0owSUdOdmJuTjBJSEJ2YVc1MFJuSnZiVUZ1WjJ4bFFXNWtSR2x6ZEdGdVkyVWdQU0FvYjNKcFoybHVMQ0JoYm1kc1pTd2daR2x6ZEdGdVkyVXBJRDArSUh0Y2JpQWdJQ0JoYm1kc1pTQTlJR1JsWjNKbFpYTlViMUpoWkdsaGJuTW9ZVzVuYkdVcE8xeHVYRzRnSUNBZ2NtVjBkWEp1SUh0Y2JpQWdJQ0FnSUNBZ2VEb2daR2x6ZEdGdVkyVWdLaUJOWVhSb0xtTnZjeWhoYm1kc1pTa2dLeUJ2Y21sbmFXNHVlQ3hjYmlBZ0lDQWdJQ0FnZVRvZ1pHbHpkR0Z1WTJVZ0tpQk5ZWFJvTG5OcGJpaGhibWRzWlNrZ0t5QnZjbWxuYVc0dWVWeHVJQ0FnSUgwN1hHNTlPMXh1WEc0dktseHVJQ0FnSUVOdmJuWmxjblFnY21Ga2FXRnVjeUIwYnlCa1pXZHlaV1Z6WEc0Z0lDQWdYRzRnSUNBZ1FIQmhjbUZ0SUZ0dWRXMWlaWEpkT2lCV1lXeDFaU0JwYmlCeVlXUnBZVzV6WEc0Z0lDQWdRSEpsZEhWeWJpQmJiblZ0WW1WeVhUb2dWbUZzZFdVZ2FXNGdaR1ZuY21WbGMxeHVLaTljYm1WNGNHOXlkQ0JqYjI1emRDQnlZV1JwWVc1elZHOUVaV2R5WldWeklEMGdLSEpoWkdsaGJuTXBJRDArSUhKaFpHbGhibk1nS2lBeE9EQWdMeUJOWVhSb0xsQkpPMXh1WEc0dktseHVJQ0FnSUZKbGRIVnliaUJ5WVc1a2IyMGdiblZ0WW1WeUlHSmxkSGRsWlc0Z2NtRnVaMlZjYmlBZ0lDQmNiaUFnSUNCQWNHRnlZVzBnVzI1MWJXSmxjbDBnS0c5d2RHbHZibUZzS1RvZ1QzVjBjSFYwSUcxcGJtbHRkVzFjYmlBZ0lDQkFjR0Z5WVcwZ1cyNTFiV0psY2wwZ0tHOXdkR2x2Ym1Gc0tUb2dUM1YwY0hWMElHMWhlR2x0ZFcxY2JpQWdJQ0JBY21WMGRYSnVJRnR1ZFcxaVpYSmRPaUJTWVc1a2IyMGdiblZ0WW1WeUlIZHBkR2hwYmlCeVlXNW5aU3dnYjNJZ01DQmhibVFnTVNCcFppQnViMjVsSUhCeWIzWnBaR1ZrWEc0cUwxeHVaWGh3YjNKMElHTnZibk4wSUhKaGJtUnZiU0E5SUNodGFXNGdQU0F3TENCdFlYZ2dQU0F4S1NBOVBpQk5ZWFJvTG5KaGJtUnZiU2dwSUNvZ0tHMWhlQ0F0SUcxcGJpa2dLeUJ0YVc0N1hHNWNiaThxWEc0Z0lDQWdRMkZzWTNWc1lYUmxJSEpsYkdGMGFYWmxJSFpoYkhWbFhHNGdJQ0FnWEc0Z0lDQWdWR0ZyWlhNZ2RHaGxJRzl3WlhKaGRHOXlJR0Z1WkNCMllXeDFaU0JtY205dElHRWdjM1J5YVc1bkxDQnBaU0JjSWlzOU5Wd2lMQ0JoYm1RZ1lYQndiR2xsYzF4dUlDQWdJSFJ2SUhSb1pTQmpkWEp5Wlc1MElIWmhiSFZsSUhSdklISmxjMjlzZG1VZ1lTQnVaWGNnZEdGeVoyVjBMbHh1SUNBZ0lGeHVJQ0FnSUVCd1lYSmhiU0JiYm5WdFltVnlYVG9nUTNWeWNtVnVkQ0IyWVd4MVpWeHVJQ0FnSUVCd1lYSmhiU0JiYzNSeWFXNW5YVG9nVW1Wc1lYUnBkbVVnZG1Gc2RXVmNiaUFnSUNCQWNtVjBkWEp1SUZ0dWRXMWlaWEpkT2lCT1pYY2dkbUZzZFdWY2Jpb3ZYRzVsZUhCdmNuUWdZMjl1YzNRZ2NtVnNZWFJwZG1WV1lXeDFaU0E5SUNoamRYSnlaVzUwTENCeVpXeGhkR2wyWlNrZ1BUNGdlMXh1SUNBZ0lHeGxkQ0J1WlhkV1lXeDFaU0E5SUdOMWNuSmxiblE3WEc0Z0lDQWdZMjl1YzNRZ1pYRjFZWFJwYjI0Z1BTQnlaV3hoZEdsMlpTNXpjR3hwZENnblBTY3BPMXh1SUNBZ0lHTnZibk4wSUc5d1pYSmhkRzl5SUQwZ1pYRjFZWFJwYjI1Yk1GMDdYRzRnSUNBZ2JHVjBJSHNnZFc1cGRDd2dkbUZzZFdVZ2ZTQTlJSE53YkdsMFZtRnNkV1ZWYm1sMEtHVnhkV0YwYVc5dVd6RmRLVHRjYmx4dUlDQWdJSFpoYkhWbElEMGdjR0Z5YzJWR2JHOWhkQ2gyWVd4MVpTazdYRzVjYmlBZ0lDQnpkMmwwWTJnZ0tHOXdaWEpoZEc5eUtTQjdYRzRnSUNBZ1kyRnpaU0FuS3ljNlhHNGdJQ0FnSUNBZ0lHNWxkMVpoYkhWbElDczlJSFpoYkhWbE8xeHVJQ0FnSUNBZ0lDQmljbVZoYXp0Y2JpQWdJQ0JqWVhObElDY3RKenBjYmlBZ0lDQWdJQ0FnYm1WM1ZtRnNkV1VnTFQwZ2RtRnNkV1U3WEc0Z0lDQWdJQ0FnSUdKeVpXRnJPMXh1SUNBZ0lHTmhjMlVnSnlvbk9seHVJQ0FnSUNBZ0lDQnVaWGRXWVd4MVpTQXFQU0IyWVd4MVpUdGNiaUFnSUNBZ0lDQWdZbkpsWVdzN1hHNGdJQ0FnWTJGelpTQW5MeWM2WEc0Z0lDQWdJQ0FnSUc1bGQxWmhiSFZsSUM4OUlIWmhiSFZsTzF4dUlDQWdJQ0FnSUNCaWNtVmhhenRjYmlBZ0lDQjlYRzRnSUNBZ1hHNGdJQ0FnYVdZZ0tIVnVhWFFwSUh0Y2JpQWdJQ0FnSUNBZ2JtVjNWbUZzZFdVZ0t6MGdkVzVwZER0Y2JpQWdJQ0I5WEc1Y2JpQWdJQ0J5WlhSMWNtNGdibVYzVm1Gc2RXVTdYRzU5TzF4dVhHNHZLbHh1SUNBZ0lGSmxjM1J5YVdOMElIWmhiSFZsSUhSdklISmhibWRsWEc0Z0lDQWdYRzRnSUNBZ1VtVjBkWEp1SUhaaGJIVmxJSGRwZEdocGJpQjBhR1VnY21GdVoyVWdiMllnYkc5M1pYSk1hVzFwZENCaGJtUWdkWEJ3WlhKTWFXMXBkRnh1SUNBZ0lGeHVJQ0FnSUVCd1lYSmhiU0JiYm5WdFltVnlYVG9nVm1Gc2RXVWdkRzhnYTJWbGNDQjNhWFJvYVc0Z2NtRnVaMlZjYmlBZ0lDQkFjR0Z5WVcwZ1cyNTFiV0psY2wwNklFeHZkMlZ5SUd4cGJXbDBJRzltSUhKaGJtZGxYRzRnSUNBZ1FIQmhjbUZ0SUZ0dWRXMWlaWEpkT2lCVmNIQmxjaUJzYVcxcGRDQnZaaUJ5WVc1blpWeHVJQ0FnSUVCeVpYUjFjbTRnVzI1MWJXSmxjbDA2SUZaaGJIVmxJR0Z6SUd4cGJXbDBaV1FnZDJsMGFHbHVJR2RwZG1WdUlISmhibWRsWEc0cUwxeHVaWGh3YjNKMElHTnZibk4wSUhKbGMzUnlhV04wSUQwZ0tIWmhiSFZsTENCdGFXNHNJRzFoZUNrZ1BUNGdUV0YwYUM1dFlYZ29UV0YwYUM1dGFXNG9kbUZzZFdVc0lHMWhlQ2tzSUcxcGJpazdYRzVjYmk4cVhHNGdJQ0FnUm5KaGJXVnlZWFJsTFdsdVpHVndaVzVrWlc1MElITnRiMjkwYUdsdVoxeHVYRzRnSUNBZ1FIQmhjbUZ0SUZ0dWRXMWlaWEpkT2lCT1pYY2dkbUZzZFdWY2JpQWdJQ0JBY0dGeVlXMGdXMjUxYldKbGNsMDZJRTlzWkNCMllXeDFaVnh1SUNBZ0lFQndZWEpoYlNCYmJuVnRZbVZ5WFRvZ1JuSmhiV1VnWkhWeVlYUnBiMjVjYmlBZ0lDQkFjR0Z5WVcwZ1cyNTFiV0psY2wwZ0tHOXdkR2x2Ym1Gc0tUb2dVMjF2YjNSb2FXNW5JQ2d3SUdseklHNXZibVVwWEc0cUwxeHVaWGh3YjNKMElHTnZibk4wSUhOdGIyOTBhQ0E5SUNodVpYZFdZV3gxWlN3Z2IyeGtWbUZzZFdVc0lHUjFjbUYwYVc5dUxDQnpiVzl2ZEdocGJtY2dQU0F3S1NBOVBpQjBiMFJsWTJsdFlXd29iMnhrVm1Gc2RXVWdLeUFvWkhWeVlYUnBiMjRnS2lBb2JtVjNWbUZzZFdVZ0xTQnZiR1JXWVd4MVpTa2dMeUJOWVhSb0xtMWhlQ2h6Ylc5dmRHaHBibWNzSUdSMWNtRjBhVzl1S1NrcE8xeHVYRzR2S2x4dUlDQWdJRU52Ym5abGNuUWdlQ0J3WlhJZ2MyVmpiMjVrSUhSdklIQmxjaUJtY21GdFpTQjJaV3h2WTJsMGVTQmlZWE5sWkNCdmJpQm1jSE5jYmlBZ0lDQmNiaUFnSUNCQWNHRnlZVzBnVzI1MWJXSmxjbDA2SUZWdWFYUWdjR1Z5SUhObFkyOXVaRnh1SUNBZ0lFQndZWEpoYlNCYmJuVnRZbVZ5WFRvZ1JuSmhiV1VnWkhWeVlYUnBiMjRnYVc0Z2JYTmNiaW92WEc1bGVIQnZjblFnWTI5dWMzUWdjM0JsWldSUVpYSkdjbUZ0WlNBOUlDaDRjSE1zSUdaeVlXMWxSSFZ5WVhScGIyNHBJRDArSUNocGMwNTFiU2g0Y0hNcEtTQS9JSGh3Y3lBdklDZ3hNREF3SUM4Z1puSmhiV1ZFZFhKaGRHbHZiaWtnT2lBd08xeHVYRzR2S2x4dUlDQWdJRU52Ym5abGNuUWdkbVZzYjJOcGRIa2dhVzUwYnlCMlpXeHBZMmwwZVNCd1pYSWdjMlZqYjI1a1hHNGdJQ0FnWEc0Z0lDQWdRSEJoY21GdElGdHVkVzFpWlhKZE9pQlZibWwwSUhCbGNpQm1jbUZ0WlZ4dUlDQWdJRUJ3WVhKaGJTQmJiblZ0WW1WeVhUb2dSbkpoYldVZ1pIVnlZWFJwYjI0Z2FXNGdiWE5jYmlvdlhHNWxlSEJ2Y25RZ1kyOXVjM1FnYzNCbFpXUlFaWEpUWldOdmJtUWdQU0FvZG1Wc2IyTnBkSGtzSUdaeVlXMWxSSFZ5WVhScGIyNHBJRDArSUhabGJHOWphWFI1SUNvZ0tERXdNREFnTHlCbWNtRnRaVVIxY21GMGFXOXVLVHRjYmx4dUx5cGNiaUFnSUNCRGNtVmhkR1VnYzNSbGNIQmxaQ0IyWlhKemFXOXVJRzltSURBdE1TQndjbTluY21WemMxeHVJQ0FnSUZ4dUlDQWdJRUJ3WVhKaGJTQmJiblZ0WW1WeVhUb2dRM1Z5Y21WdWRDQjJZV3gxWlZ4dUlDQWdJRUJ3WVhKaGJTQmJhVzUwWFRvZ1RuVnRZbVZ5SUc5bUlITjBaWEJ6WEc0Z0lDQWdRSEpsZEhWeWJpQmJiblZ0WW1WeVhUb2dVM1JsY0hCbFpDQjJZV3gxWlZ4dUtpOWNibVY0Y0c5eWRDQmpiMjV6ZENCemRHVndVSEp2WjNKbGMzTWdQU0FvY0hKdlozSmxjM01zSUhOMFpYQnpLU0E5UGlCN1hHNGdJQ0FnWTI5dWMzUWdjMlZuYldWdWRDQTlJREVnTHlBb2MzUmxjSE1nTFNBeEtUdGNiaUFnSUNCamIyNXpkQ0IwWVhKblpYUWdQU0F4SUMwZ0tERWdMeUJ6ZEdWd2N5azdYRzRnSUNBZ1kyOXVjM1FnY0hKdlozSmxjM05QWmxSaGNtZGxkQ0E5SUUxaGRHZ3ViV2x1S0hCeWIyZHlaWE56SUM4Z2RHRnlaMlYwTENBeEtUdGNibHh1SUNBZ0lISmxkSFZ5YmlCTllYUm9MbVpzYjI5eUtIQnliMmR5WlhOelQyWlVZWEpuWlhRZ0x5QnpaV2R0Wlc1MEtTQXFJSE5sWjIxbGJuUTdYRzU5T3lKZGZRPT1cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2luYy9jYWxjLmpzXG4gKiogbW9kdWxlIGlkID0gMTdcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF9kZWZhdWx0UHJvcHMgPSByZXF1aXJlKCcuL3NldHRpbmdzL2RlZmF1bHQtcHJvcHMnKTtcblxuZXhwb3J0cy5kZWZhdWx0ID0ge1xuICAgIGRlZmF1bHRQcm9wczogX2RlZmF1bHRQcm9wcy5vcGFjaXR5XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluTnlZeTkyWVd4MVpTMTBlWEJsY3k5aGJIQm9ZUzVxY3lKZExDSnVZVzFsY3lJNlcxMHNJbTFoY0hCcGJtZHpJam9pT3pzN096czdhMEpCUldVN1FVRkRXQ3gxUTBGRVZ5SXNJbVpwYkdVaU9pSmhiSEJvWVM1cWN5SXNJbk52ZFhKalpWSnZiM1FpT2lJdlZYTmxjbk12VFdGMGRDOVRhWFJsY3k5d2IzQnRiM1JwYjI0aUxDSnpiM1Z5WTJWelEyOXVkR1Z1ZENJNld5SnBiWEJ2Y25RZ2V5QnZjR0ZqYVhSNUlIMGdabkp2YlNBbkxpOXpaWFIwYVc1bmN5OWtaV1poZFd4MExYQnliM0J6Snp0Y2JseHVaWGh3YjNKMElHUmxabUYxYkhRZ2UxeHVJQ0FnSUdSbFptRjFiSFJRY205d2N6b2diM0JoWTJsMGVWeHVmVHNpWFgwPVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvdmFsdWUtdHlwZXMvYWxwaGEuanNcbiAqKiBtb2R1bGUgaWQgPSAxOFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0cy5kZWZhdWx0ID0ge1xuICAgIGRlZmF1bHRQcm9wczoge1xuICAgICAgICB1bml0OiAnZGVnJ1xuICAgIH1cbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5OeVl5OTJZV3gxWlMxMGVYQmxjeTloYm1kc1pTNXFjeUpkTENKdVlXMWxjeUk2VzEwc0ltMWhjSEJwYm1keklqb2lPenM3YTBKQlFXVTdRVUZEV0N4clFrRkJZenRCUVVOV0xHTkJRVTBzUzBGQlRqdExRVVJLSWl3aVptbHNaU0k2SW1GdVoyeGxMbXB6SWl3aWMyOTFjbU5sVW05dmRDSTZJaTlWYzJWeWN5OU5ZWFIwTDFOcGRHVnpMM0J2Y0cxdmRHbHZiaUlzSW5OdmRYSmpaWE5EYjI1MFpXNTBJanBiSW1WNGNHOXlkQ0JrWldaaGRXeDBJSHRjYmlBZ0lDQmtaV1poZFd4MFVISnZjSE02SUh0Y2JpQWdJQ0FnSUNBZ2RXNXBkRG9nSjJSbFp5ZGNiaUFnSUNCOVhHNTlPeUpkZlE9PVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvdmFsdWUtdHlwZXMvYW5nbGUuanNcbiAqKiBtb2R1bGUgaWQgPSAxOVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX3V0aWxzID0gcmVxdWlyZSgnLi4vaW5jL3V0aWxzJyk7XG5cbnZhciBfcHggPSByZXF1aXJlKCcuL3B4Jyk7XG5cbnZhciBfcHgyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcHgpO1xuXG52YXIgX2RpY3Rpb25hcnkgPSByZXF1aXJlKCcuL3NldHRpbmdzL2RpY3Rpb25hcnknKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZXhwb3J0cy5kZWZhdWx0ID0ge1xuICAgIGRlZmF1bHRQcm9wczogX3B4Mi5kZWZhdWx0LmRlZmF1bHRQcm9wcyxcblxuICAgIC8qXG4gICAgICAgIFNwbGl0IHBvc2l0aW9ucyBpbiBmb3JtYXQgXCJYIFkgWlwiXG4gICAgICAgIFxuICAgICAgICBAcGFyYW0gW3N0cmluZ106IFBvc2l0aW9uIHZhbHVlc1xuICAgICAgICAgICAgXCIyMCUgMzAlIDBcIiAtPiB7MjAlLCAzMCUsIDB9XG4gICAgICAgICAgICBcIjIwJSAzMCVcIiAtPiB7MjAlLCAzMCV9XG4gICAgICAgICAgICBcIjIwJVwiIC0+IHsyMCUsIDIwJX1cbiAgICAqL1xuICAgIHNwbGl0OiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgdmFyIHNwbGl0VmFsdWVzID0gKDAsIF91dGlscy5zcGxpdFNwYWNlRGVsaW1pdGVkKSh2YWx1ZSk7XG4gICAgICAgIHZhciBudW1BeGVzID0gc3BsaXRWYWx1ZXMubGVuZ3RoO1xuICAgICAgICB2YXIgc3BsaXRWYWx1ZSA9IHtcbiAgICAgICAgICAgIFg6IHNwbGl0VmFsdWVzWzBdLFxuICAgICAgICAgICAgWTogbnVtQXhlcyA+IDEgPyBzcGxpdFZhbHVlc1sxXSA6IHNwbGl0VmFsdWVzWzBdXG4gICAgICAgIH07XG5cbiAgICAgICAgaWYgKG51bUF4ZXMgPiAyKSB7XG4gICAgICAgICAgICBzcGxpdFZhbHVlLlogPSBzcGxpdFZhbHVlc1syXTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBzcGxpdFZhbHVlO1xuICAgIH0sXG5cbiAgICBjb21iaW5lOiBmdW5jdGlvbiAodmFsdWVzKSB7XG4gICAgICAgIHJldHVybiAoMCwgX3V0aWxzLmNyZWF0ZURlbGltaXRlZCkodmFsdWVzLCBfZGljdGlvbmFyeS5heGVzLCAnICcpO1xuICAgIH1cbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5OeVl5OTJZV3gxWlMxMGVYQmxjeTloZUdWekxtcHpJbDBzSW01aGJXVnpJanBiWFN3aWJXRndjR2x1WjNNaU9pSTdPenM3T3pzN096czdPenM3TzJ0Q1FVbGxPMEZCUTFnc2EwSkJRV01zWVVGQldTeFpRVUZhT3pzN096czdPenM3TzBGQlZXUXNWMEZCVHl4VlFVRkRMRXRCUVVRc1JVRkJWenRCUVVOa0xGbEJRVTBzWTBGQll5eG5RMEZCYjBJc1MwRkJjRUlzUTBGQlpDeERRVVJSTzBGQlJXUXNXVUZCVFN4VlFVRlZMRmxCUVZrc1RVRkJXaXhEUVVaR08wRkJSMlFzV1VGQlRTeGhRVUZoTzBGQlEyWXNaVUZCUnl4WlFVRlpMRU5CUVZvc1EwRkJTRHRCUVVOQkxHVkJRVWNzVDBGQlF5eEhRVUZWTEVOQlFWWXNSMEZCWlN4WlFVRlpMRU5CUVZvc1EwRkJhRUlzUjBGQmFVTXNXVUZCV1N4RFFVRmFMRU5CUVdwRE8xTkJSa1FzUTBGSVVUczdRVUZSWkN4WlFVRkpMRlZCUVZVc1EwRkJWaXhGUVVGaE8wRkJRMklzZFVKQlFWY3NRMEZCV0N4SFFVRmxMRmxCUVZrc1EwRkJXaXhEUVVGbUxFTkJSR0U3VTBGQmFrSTdPMEZCU1VFc1pVRkJUeXhWUVVGUUxFTkJXbU03UzBGQldEczdRVUZsVUN4aFFVRlRMRlZCUVVNc1RVRkJSRHRsUVVGWkxEUkNRVUZuUWl4TlFVRm9RaXh2UWtGQk9FSXNSMEZCT1VJN1MwRkJXaUlzSW1acGJHVWlPaUpoZUdWekxtcHpJaXdpYzI5MWNtTmxVbTl2ZENJNklpOVZjMlZ5Y3k5TllYUjBMMU5wZEdWekwzQnZjRzF2ZEdsdmJpSXNJbk52ZFhKalpYTkRiMjUwWlc1MElqcGJJbWx0Y0c5eWRDQjdJR055WldGMFpVUmxiR2x0YVhSbFpDd2djM0JzYVhSVGNHRmpaVVJsYkdsdGFYUmxaQ0I5SUdaeWIyMGdKeTR1TDJsdVl5OTFkR2xzY3ljN1hHNXBiWEJ2Y25RZ2NIaFdZV3gxWlZSNWNHVWdabkp2YlNBbkxpOXdlQ2M3WEc1cGJYQnZjblFnZXlCaGVHVnpJSDBnWm5KdmJTQW5MaTl6WlhSMGFXNW5jeTlrYVdOMGFXOXVZWEo1Snp0Y2JseHVaWGh3YjNKMElHUmxabUYxYkhRZ2UxeHVJQ0FnSUdSbFptRjFiSFJRY205d2N6b2djSGhXWVd4MVpWUjVjR1V1WkdWbVlYVnNkRkJ5YjNCekxGeHVJQ0FnSUNBZ0lDQmNiaUFnSUNBdktseHVJQ0FnSUNBZ0lDQlRjR3hwZENCd2IzTnBkR2x2Ym5NZ2FXNGdabTl5YldGMElGd2lXQ0JaSUZwY0lseHVJQ0FnSUNBZ0lDQmNiaUFnSUNBZ0lDQWdRSEJoY21GdElGdHpkSEpwYm1kZE9pQlFiM05wZEdsdmJpQjJZV3gxWlhOY2JpQWdJQ0FnSUNBZ0lDQWdJRndpTWpBbElETXdKU0F3WENJZ0xUNGdlekl3SlN3Z016QWxMQ0F3ZlZ4dUlDQWdJQ0FnSUNBZ0lDQWdYQ0l5TUNVZ016QWxYQ0lnTFQ0Z2V6SXdKU3dnTXpBbGZWeHVJQ0FnSUNBZ0lDQWdJQ0FnWENJeU1DVmNJaUF0UGlCN01qQWxMQ0F5TUNWOVhHNGdJQ0FnS2k5Y2JpQWdJQ0J6Y0d4cGREb2dLSFpoYkhWbEtTQTlQaUI3WEc0Z0lDQWdJQ0FnSUdOdmJuTjBJSE53YkdsMFZtRnNkV1Z6SUQwZ2MzQnNhWFJUY0dGalpVUmxiR2x0YVhSbFpDaDJZV3gxWlNrN1hHNGdJQ0FnSUNBZ0lHTnZibk4wSUc1MWJVRjRaWE1nUFNCemNHeHBkRlpoYkhWbGN5NXNaVzVuZEdnN1hHNGdJQ0FnSUNBZ0lHTnZibk4wSUhOd2JHbDBWbUZzZFdVZ1BTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNCWU9pQnpjR3hwZEZaaGJIVmxjMXN3WFN4Y2JpQWdJQ0FnSUNBZ0lDQWdJRms2SUNodWRXMUJlR1Z6SUQ0Z01Ta2dQeUJ6Y0d4cGRGWmhiSFZsYzFzeFhTQTZJSE53YkdsMFZtRnNkV1Z6V3pCZFhHNGdJQ0FnSUNBZ0lIMDdYRzVjYmlBZ0lDQWdJQ0FnYVdZZ0tHNTFiVUY0WlhNZ1BpQXlLU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQnpjR3hwZEZaaGJIVmxMbG9nUFNCemNHeHBkRlpoYkhWbGMxc3lYVHRjYmlBZ0lDQWdJQ0FnZlZ4dVhHNGdJQ0FnSUNBZ0lISmxkSFZ5YmlCemNHeHBkRlpoYkhWbE8xeHVJQ0FnSUgwc1hHNWNiaUFnSUNCamIyMWlhVzVsT2lBb2RtRnNkV1Z6S1NBOVBpQmpjbVZoZEdWRVpXeHBiV2wwWldRb2RtRnNkV1Z6TENCaGVHVnpMQ0FuSUNjcFhHNTlPMXh1SWwxOVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvdmFsdWUtdHlwZXMvYXhlcy5qc1xuICoqIG1vZHVsZSBpZCA9IDIwXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbnZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfcmdiID0gcmVxdWlyZSgnLi9yZ2InKTtcblxudmFyIF9yZ2IyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmdiKTtcblxudmFyIF9oc2wgPSByZXF1aXJlKCcuL2hzbCcpO1xuXG52YXIgX2hzbDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9oc2wpO1xuXG52YXIgX2hleCA9IHJlcXVpcmUoJy4vaGV4Jyk7XG5cbnZhciBfaGV4MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2hleCk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbnZhciBjb2xvclR5cGVzID0gW19yZ2IyLmRlZmF1bHQsIF9oc2wyLmRlZmF1bHQsIF9oZXgyLmRlZmF1bHRdO1xudmFyIG51bUNvbG9yVHlwZXMgPSBjb2xvclR5cGVzLmxlbmd0aDtcblxuZXhwb3J0cy5kZWZhdWx0ID0ge1xuICAgIGRlZmF1bHRQcm9wczogX2V4dGVuZHMoe30sIF9yZ2IyLmRlZmF1bHQuZGVmYXVsdFByb3BzLCBfaHNsMi5kZWZhdWx0LmRlZmF1bHRQcm9wcyksXG5cbiAgICB0ZXN0OiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIF9yZ2IyLmRlZmF1bHQudGVzdCh2YWx1ZSkgfHwgX2hleDIuZGVmYXVsdC50ZXN0KHZhbHVlKSB8fCBfaHNsMi5kZWZhdWx0LnRlc3QodmFsdWUpO1xuICAgIH0sXG5cbiAgICBzcGxpdDogZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbnVtQ29sb3JUeXBlczsgaSsrKSB7XG4gICAgICAgICAgICBpZiAoY29sb3JUeXBlc1tpXS50ZXN0KHZhbHVlKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBjb2xvclR5cGVzW2ldLnNwbGl0KHZhbHVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICBjb21iaW5lOiBmdW5jdGlvbiAodmFsdWVzKSB7XG4gICAgICAgIHJldHVybiB2YWx1ZXMuUmVkICE9PSB1bmRlZmluZWQgPyBfcmdiMi5kZWZhdWx0LmNvbWJpbmUodmFsdWVzKSA6IF9oc2wyLmRlZmF1bHQuY29tYmluZSh2YWx1ZXMpO1xuICAgIH1cbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5OeVl5OTJZV3gxWlMxMGVYQmxjeTlqYjJ4dmNpNXFjeUpkTENKdVlXMWxjeUk2VzEwc0ltMWhjSEJwYm1keklqb2lPenM3T3pzN096czdPenM3T3pzN096czdPenRCUVVsQkxFbEJRVTBzWVVGQllTdzJRMEZCWWp0QlFVTk9MRWxCUVUwc1owSkJRV2RDTEZkQlFWY3NUVUZCV0RzN2EwSkJSVkE3UVVGRFdDd3JRa0ZCYlVJc1kwRkJTU3haUVVGS0xFVkJRWEZDTEdOQlFVa3NXVUZCU2l4RFFVRjRRenM3UVVGRlFTeFZRVUZOTEZWQlFVTXNTMEZCUkR0bFFVRlhMR05CUVVrc1NVRkJTaXhEUVVGVExFdEJRVlFzUzBGQmJVSXNZMEZCU1N4SlFVRktMRU5CUVZNc1MwRkJWQ3hEUVVGdVFpeEpRVUZ6UXl4alFVRkpMRWxCUVVvc1EwRkJVeXhMUVVGVUxFTkJRWFJETzB0QlFWZzdPMEZCUlU0c1YwRkJUeXhWUVVGRExFdEJRVVFzUlVGQlZ6dEJRVU5rTEdGQlFVc3NTVUZCU1N4SlFVRkpMRU5CUVVvc1JVRkJUeXhKUVVGSkxHRkJRVW9zUlVGQmJVSXNSMEZCYmtNc1JVRkJkME03UVVGRGNFTXNaMEpCUVVrc1YwRkJWeXhEUVVGWUxFVkJRV01zU1VGQlpDeERRVUZ0UWl4TFFVRnVRaXhEUVVGS0xFVkJRU3RDTzBGQlF6TkNMSFZDUVVGUExGZEJRVmNzUTBGQldDeEZRVUZqTEV0QlFXUXNRMEZCYjBJc1MwRkJjRUlzUTBGQlVDeERRVVF5UWp0aFFVRXZRanRUUVVSS08wdEJSRWM3TzBGQlVWQXNZVUZCVXl4VlFVRkRMRTFCUVVRN1pVRkJXU3hOUVVGRExFTkJRVThzUjBGQlVDeExRVUZsTEZOQlFXWXNSMEZCTkVJc1kwRkJTU3hQUVVGS0xFTkJRVmtzVFVGQldpeERRVUUzUWl4SFFVRnRSQ3hqUVVGSkxFOUJRVW9zUTBGQldTeE5RVUZhTEVOQlFXNUVPMHRCUVZvaUxDSm1hV3hsSWpvaVkyOXNiM0l1YW5NaUxDSnpiM1Z5WTJWU2IyOTBJam9pTDFWelpYSnpMMDFoZEhRdlUybDBaWE12Y0c5d2JXOTBhVzl1SWl3aWMyOTFjbU5sYzBOdmJuUmxiblFpT2xzaWFXMXdiM0owSUhKbllpQm1jbTl0SUNjdUwzSm5ZaWM3WEc1cGJYQnZjblFnYUhOc0lHWnliMjBnSnk0dmFITnNKenRjYm1sdGNHOXlkQ0JvWlhnZ1puSnZiU0FuTGk5b1pYZ25PMXh1WEc1amIyNXpkQ0JqYjJ4dmNsUjVjR1Z6SUQwZ1czSm5ZaXdnYUhOc0xDQm9aWGhkTzF4dVkyOXVjM1FnYm5WdFEyOXNiM0pVZVhCbGN5QTlJR052Ykc5eVZIbHdaWE11YkdWdVozUm9PMXh1WEc1bGVIQnZjblFnWkdWbVlYVnNkQ0I3WEc0Z0lDQWdaR1ZtWVhWc2RGQnliM0J6T2lCN0lDNHVMbkpuWWk1a1pXWmhkV3gwVUhKdmNITXNJQzR1TG1oemJDNWtaV1poZFd4MFVISnZjSE1nZlN4Y2JseHVJQ0FnSUhSbGMzUTZJQ2gyWVd4MVpTa2dQVDRnY21kaUxuUmxjM1FvZG1Gc2RXVXBJSHg4SUdobGVDNTBaWE4wS0haaGJIVmxLU0I4ZkNCb2Myd3VkR1Z6ZENoMllXeDFaU2tzWEc1Y2JpQWdJQ0J6Y0d4cGREb2dLSFpoYkhWbEtTQTlQaUI3WEc0Z0lDQWdJQ0FnSUdadmNpQW9iR1YwSUdrZ1BTQXdPeUJwSUR3Z2JuVnRRMjlzYjNKVWVYQmxjenNnYVNzcktTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNCcFppQW9ZMjlzYjNKVWVYQmxjMXRwWFM1MFpYTjBLSFpoYkhWbEtTa2dlMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJSEpsZEhWeWJpQmpiMnh2Y2xSNWNHVnpXMmxkTG5Od2JHbDBLSFpoYkhWbEtUdGNiaUFnSUNBZ0lDQWdJQ0FnSUgxY2JpQWdJQ0FnSUNBZ2ZWeHVJQ0FnSUgwc1hHNWNiaUFnSUNCamIyMWlhVzVsT2lBb2RtRnNkV1Z6S1NBOVBpQW9kbUZzZFdWekxsSmxaQ0FoUFQwZ2RXNWtaV1pwYm1Wa0tTQS9JSEpuWWk1amIyMWlhVzVsS0haaGJIVmxjeWtnT2lCb2Myd3VZMjl0WW1sdVpTaDJZV3gxWlhNcFhHNTlPMXh1SWwxOVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvdmFsdWUtdHlwZXMvY29sb3IuanNcbiAqKiBtb2R1bGUgaWQgPSAyMVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX3V0aWxzID0gcmVxdWlyZSgnLi4vaW5jL3V0aWxzJyk7XG5cbnZhciBGTE9BVF9SRUdFWCA9IC8oLSk/KFxcZFtcXGRcXC5dKikvZztcbnZhciBnZW5lcmF0ZVRva2VuID0gZnVuY3Rpb24gKHRva2VuKSB7XG4gICAgcmV0dXJuICckeycgKyB0b2tlbiArICd9Jztcbn07XG5cbmV4cG9ydHMuZGVmYXVsdCA9IHtcblxuICAgIHRlc3Q6IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICB2YXIgbWF0Y2hlcyA9IHZhbHVlLm1hdGNoKEZMT0FUX1JFR0VYKTtcbiAgICAgICAgcmV0dXJuICgwLCBfdXRpbHMuaXNBcnJheSkobWF0Y2hlcykgJiYgbWF0Y2hlcy5sZW5ndGggPiAxO1xuICAgIH0sXG5cbiAgICB0ZW1wbGF0ZTogZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgIHZhciBjb3VudGVyID0gMDtcbiAgICAgICAgcmV0dXJuIHZhbHVlLnJlcGxhY2UoRkxPQVRfUkVHRVgsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiBnZW5lcmF0ZVRva2VuKGNvdW50ZXIrKyk7XG4gICAgICAgIH0pO1xuICAgIH0sXG5cbiAgICBzcGxpdDogZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgIHZhciBzcGxpdFZhbHVlID0ge307XG5cbiAgICAgICAgdmFsdWUubWF0Y2goRkxPQVRfUkVHRVgpLmZvckVhY2goZnVuY3Rpb24gKHZhbHVlLCBpKSB7XG4gICAgICAgICAgICByZXR1cm4gc3BsaXRWYWx1ZVtpXSA9IHZhbHVlO1xuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gc3BsaXRWYWx1ZTtcbiAgICB9LFxuXG4gICAgY29tYmluZTogZnVuY3Rpb24gKHZhbHVlcywgdGVtcGxhdGUpIHtcbiAgICAgICAgZm9yICh2YXIga2V5IGluIHZhbHVlcykge1xuICAgICAgICAgICAgaWYgKHZhbHVlcy5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgICAgICAgdGVtcGxhdGUgPSB0ZW1wbGF0ZS5yZXBsYWNlKGdlbmVyYXRlVG9rZW4oa2V5KSwgdmFsdWVzW2tleV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRlbXBsYXRlO1xuICAgIH1cblxufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbk55WXk5MllXeDFaUzEwZVhCbGN5OWpiMjF3YkdWNExtcHpJbDBzSW01aGJXVnpJanBiWFN3aWJXRndjR2x1WjNNaU9pSTdPenM3T3p0QlFVVkJMRWxCUVUwc1kwRkJZeXhyUWtGQlpEdEJRVU5PTEVsQlFVMHNaMEpCUVdkQ0xGVkJRVU1zUzBGQlJEdFhRVUZYTEU5QlFVOHNTMEZCVUN4SFFVRmxMRWRCUVdZN1EwRkJXRHM3YTBKQlJWQTdPMEZCUlZnc1ZVRkJUU3hWUVVGRExFdEJRVVFzUlVGQlZ6dEJRVU5pTEZsQlFVMHNWVUZCVlN4TlFVRk5MRXRCUVU0c1EwRkJXU3hYUVVGYUxFTkJRVllzUTBGRVR6dEJRVVZpTEdWQlFWRXNiMEpCUVZFc1QwRkJVaXhMUVVGdlFpeFJRVUZSTEUxQlFWSXNSMEZCYVVJc1EwRkJha0lzUTBGR1pqdExRVUZZT3p0QlFVdE9MR05CUVZVc1ZVRkJReXhMUVVGRUxFVkJRVmM3UVVGRGFrSXNXVUZCU1N4VlFVRlZMRU5CUVZZc1EwRkVZVHRCUVVWcVFpeGxRVUZQTEUxQlFVMHNUMEZCVGl4RFFVRmpMRmRCUVdRc1JVRkJNa0k3YlVKQlFVMHNZMEZCWXl4VFFVRmtPMU5CUVU0c1EwRkJiRU1zUTBGR2FVSTdTMEZCV0RzN1FVRkxWaXhYUVVGUExGVkJRVU1zUzBGQlJDeEZRVUZYTzBGQlEyUXNXVUZCVFN4aFFVRmhMRVZCUVdJc1EwRkVVVHM3UVVGSFpDeGpRVUZOTEV0QlFVNHNRMEZCV1N4WFFVRmFMRVZCUVhsQ0xFOUJRWHBDTEVOQlFXbERMRlZCUVVNc1MwRkJSQ3hGUVVGUkxFTkJRVkk3YlVKQlFXTXNWMEZCVnl4RFFVRllMRWxCUVdkQ0xFdEJRV2hDTzFOQlFXUXNRMEZCYWtNc1EwRklZenM3UVVGTFpDeGxRVUZQTEZWQlFWQXNRMEZNWXp0TFFVRllPenRCUVZGUUxHRkJRVk1zVlVGQlF5eE5RVUZFTEVWQlFWTXNVVUZCVkN4RlFVRnpRanRCUVVNelFpeGhRVUZMTEVsQlFVa3NSMEZCU2l4SlFVRlhMRTFCUVdoQ0xFVkJRWGRDTzBGQlEzQkNMR2RDUVVGSkxFOUJRVThzWTBGQlVDeERRVUZ6UWl4SFFVRjBRaXhEUVVGS0xFVkJRV2RETzBGQlF6VkNMREpDUVVGWExGTkJRVk1zVDBGQlZDeERRVUZwUWl4alFVRmpMRWRCUVdRc1EwRkJha0lzUlVGQmNVTXNUMEZCVHl4SFFVRlFMRU5CUVhKRExFTkJRVmdzUTBGRU5FSTdZVUZCYUVNN1UwRkVTanM3UVVGTlFTeGxRVUZQTEZGQlFWQXNRMEZRTWtJN1MwRkJkRUlpTENKbWFXeGxJam9pWTI5dGNHeGxlQzVxY3lJc0luTnZkWEpqWlZKdmIzUWlPaUl2VlhObGNuTXZUV0YwZEM5VGFYUmxjeTl3YjNCdGIzUnBiMjRpTENKemIzVnlZMlZ6UTI5dWRHVnVkQ0k2V3lKcGJYQnZjblFnZXlCcGMwRnljbUY1SUgwZ1puSnZiU0FuTGk0dmFXNWpMM1YwYVd4ekp6dGNibHh1WTI5dWMzUWdSa3hQUVZSZlVrVkhSVmdnUFNBdktDMHBQeWhjWEdSYlhGeGtYRnd1WFNvcEwyYzdYRzVqYjI1emRDQm5aVzVsY21GMFpWUnZhMlZ1SUQwZ0tIUnZhMlZ1S1NBOVBpQW5KSHNuSUNzZ2RHOXJaVzRnS3lBbmZTYzdYRzVjYm1WNGNHOXlkQ0JrWldaaGRXeDBJSHRjYmx4dUlDQWdJSFJsYzNRNklDaDJZV3gxWlNrZ1BUNGdlMXh1SUNBZ0lDQWdJQ0JqYjI1emRDQnRZWFJqYUdWeklEMGdkbUZzZFdVdWJXRjBZMmdvUmt4UFFWUmZVa1ZIUlZncE8xeHVJQ0FnSUNBZ0lDQnlaWFIxY200Z0tHbHpRWEp5WVhrb2JXRjBZMmhsY3lrZ0ppWWdiV0YwWTJobGN5NXNaVzVuZEdnZ1BpQXhLVHRjYmlBZ0lDQjlMRnh1WEc0Z0lDQWdkR1Z0Y0d4aGRHVTZJQ2gyWVd4MVpTa2dQVDRnZTF4dUlDQWdJQ0FnSUNCc1pYUWdZMjkxYm5SbGNpQTlJREE3WEc0Z0lDQWdJQ0FnSUhKbGRIVnliaUIyWVd4MVpTNXlaWEJzWVdObEtFWk1UMEZVWDFKRlIwVllMQ0FvS1NBOVBpQm5aVzVsY21GMFpWUnZhMlZ1S0dOdmRXNTBaWElyS3lrcE8xeHVJQ0FnSUgwc1hHNWNiaUFnSUNCemNHeHBkRG9nS0haaGJIVmxLU0E5UGlCN1hHNGdJQ0FnSUNBZ0lHTnZibk4wSUhOd2JHbDBWbUZzZFdVZ1BTQjdmVHRjYmlBZ0lDQWdJQ0FnWEc0Z0lDQWdJQ0FnSUhaaGJIVmxMbTFoZEdOb0tFWk1UMEZVWDFKRlIwVllLUzVtYjNKRllXTm9LQ2gyWVd4MVpTd2dhU2tnUFQ0Z2MzQnNhWFJXWVd4MVpWdHBYU0E5SUhaaGJIVmxLVHRjYmx4dUlDQWdJQ0FnSUNCeVpYUjFjbTRnYzNCc2FYUldZV3gxWlR0Y2JpQWdJQ0I5TEZ4dVhHNGdJQ0FnWTI5dFltbHVaVG9nS0haaGJIVmxjeXdnZEdWdGNHeGhkR1VwSUQwK0lIdGNiaUFnSUNBZ0lDQWdabTl5SUNoc1pYUWdhMlY1SUdsdUlIWmhiSFZsY3lrZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnYVdZZ0tIWmhiSFZsY3k1b1lYTlBkMjVRY205d1pYSjBlU2hyWlhrcEtTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdkR1Z0Y0d4aGRHVWdQU0IwWlcxd2JHRjBaUzV5WlhCc1lXTmxLR2RsYm1WeVlYUmxWRzlyWlc0b2EyVjVLU3dnZG1Gc2RXVnpXMnRsZVYwcE8xeHVJQ0FnSUNBZ0lDQWdJQ0FnZlZ4dUlDQWdJQ0FnSUNCOVhHNWNiaUFnSUNBZ0lDQWdjbVYwZFhKdUlIUmxiWEJzWVhSbE8xeHVJQ0FnSUgxY2JseHVmVHNpWFgwPVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvdmFsdWUtdHlwZXMvY29tcGxleC5qc1xuICoqIG1vZHVsZSBpZCA9IDIyXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfcmdiID0gcmVxdWlyZSgnLi9yZ2InKTtcblxudmFyIF9yZ2IyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmdiKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZXhwb3J0cy5kZWZhdWx0ID0ge1xuICAgIGRlZmF1bHRQcm9wczogX3JnYjIuZGVmYXVsdC5kZWZhdWx0UHJvcHMsXG5cbiAgICB0ZXN0OiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIHZhbHVlICYmIHZhbHVlLmluZGV4T2YoJyMnKSA+IC0xO1xuICAgIH0sXG5cbiAgICBzcGxpdDogZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgIHZhciByID0gdW5kZWZpbmVkLFxuICAgICAgICAgICAgZyA9IHVuZGVmaW5lZCxcbiAgICAgICAgICAgIGIgPSB1bmRlZmluZWQ7XG5cbiAgICAgICAgLy8gSWYgd2UgaGF2ZSA2IGNoYXJhY3RlcnMsIGllICNGRjAwMDBcbiAgICAgICAgaWYgKHZhbHVlLmxlbmd0aCA+IDQpIHtcbiAgICAgICAgICAgIHIgPSB2YWx1ZS5zdWJzdHIoMSwgMik7XG4gICAgICAgICAgICBnID0gdmFsdWUuc3Vic3RyKDMsIDIpO1xuICAgICAgICAgICAgYiA9IHZhbHVlLnN1YnN0cig1LCAyKTtcblxuICAgICAgICAgICAgLy8gT3Igd2UgaGF2ZSAzIGNoYXJhY3RlcnMsIGllICNGMDBcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByID0gdmFsdWUuc3Vic3RyKDEsIDEpO1xuICAgICAgICAgICAgICAgIGcgPSB2YWx1ZS5zdWJzdHIoMiwgMSk7XG4gICAgICAgICAgICAgICAgYiA9IHZhbHVlLnN1YnN0cigzLCAxKTtcbiAgICAgICAgICAgICAgICByICs9IHI7XG4gICAgICAgICAgICAgICAgZyArPSBnO1xuICAgICAgICAgICAgICAgIGIgKz0gYjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgUmVkOiBwYXJzZUludChyLCAxNiksXG4gICAgICAgICAgICBHcmVlbjogcGFyc2VJbnQoZywgMTYpLFxuICAgICAgICAgICAgQmx1ZTogcGFyc2VJbnQoYiwgMTYpLFxuICAgICAgICAgICAgQWxwaGE6IDFcbiAgICAgICAgfTtcbiAgICB9LFxuXG4gICAgY29tYmluZTogZnVuY3Rpb24gKHZhbHVlcykge1xuICAgICAgICByZXR1cm4gX3JnYjIuZGVmYXVsdC5jb21iaW5lKHZhbHVlcyk7XG4gICAgfVxufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbk55WXk5MllXeDFaUzEwZVhCbGN5OW9aWGd1YW5NaVhTd2libUZ0WlhNaU9sdGRMQ0p0WVhCd2FXNW5jeUk2SWpzN096czdPenM3T3p0clFrRkZaVHRCUVVOWUxHdENRVUZqTEdOQlFVa3NXVUZCU2pzN1FVRkZaQ3hWUVVGTkxGVkJRVU1zUzBGQlJEdGxRVUZaTEZOQlFWTXNUVUZCVFN4UFFVRk9MRU5CUVdNc1IwRkJaQ3hKUVVGeFFpeERRVUZETEVOQlFVUTdTMEZCTVVNN08wRkJSVTRzVjBGQlR5eFZRVUZETEV0QlFVUXNSVUZCVnp0QlFVTmtMRmxCUVVrc1lVRkJTanRaUVVGUExHRkJRVkE3V1VGQlZTeGhRVUZXT3pzN1FVRkVZeXhaUVVsV0xFMUJRVTBzVFVGQlRpeEhRVUZsTEVOQlFXWXNSVUZCYTBJN1FVRkRiRUlzWjBKQlFVa3NUVUZCVFN4TlFVRk9MRU5CUVdFc1EwRkJZaXhGUVVGblFpeERRVUZvUWl4RFFVRktMRU5CUkd0Q08wRkJSV3hDTEdkQ1FVRkpMRTFCUVUwc1RVRkJUaXhEUVVGaExFTkJRV0lzUlVGQlowSXNRMEZCYUVJc1EwRkJTaXhEUVVaclFqdEJRVWRzUWl4blFrRkJTU3hOUVVGTkxFMUJRVTRzUTBGQllTeERRVUZpTEVWQlFXZENMRU5CUVdoQ0xFTkJRVW83T3p0QlFVaHJRaXhUUVVGMFFpeE5RVTFQTzBGQlEwZ3NiMEpCUVVrc1RVRkJUU3hOUVVGT0xFTkJRV0VzUTBGQllpeEZRVUZuUWl4RFFVRm9RaXhEUVVGS0xFTkJSRWM3UVVGRlNDeHZRa0ZCU1N4TlFVRk5MRTFCUVU0c1EwRkJZU3hEUVVGaUxFVkJRV2RDTEVOQlFXaENMRU5CUVVvc1EwRkdSenRCUVVkSUxHOUNRVUZKTEUxQlFVMHNUVUZCVGl4RFFVRmhMRU5CUVdJc1JVRkJaMElzUTBGQmFFSXNRMEZCU2l4RFFVaEhPMEZCU1Vnc2NVSkJRVXNzUTBGQlRDeERRVXBITzBGQlMwZ3NjVUpCUVVzc1EwRkJUQ3hEUVV4SE8wRkJUVWdzY1VKQlFVc3NRMEZCVEN4RFFVNUhPMkZCVGxBN08wRkJaVUVzWlVGQlR6dEJRVU5JTEdsQ1FVRkxMRk5CUVZNc1EwRkJWQ3hGUVVGWkxFVkJRVm9zUTBGQlREdEJRVU5CTEcxQ1FVRlBMRk5CUVZNc1EwRkJWQ3hGUVVGWkxFVkJRVm9zUTBGQlVEdEJRVU5CTEd0Q1FVRk5MRk5CUVZNc1EwRkJWQ3hGUVVGWkxFVkJRVm9zUTBGQlRqdEJRVU5CTEcxQ1FVRlBMRU5CUVZBN1UwRktTaXhEUVc1Q1l6dExRVUZZT3p0QlFUSkNVQ3hoUVVGVExGVkJRVU1zVFVGQlJEdGxRVUZaTEdOQlFVa3NUMEZCU2l4RFFVRlpMRTFCUVZvN1MwRkJXaUlzSW1acGJHVWlPaUpvWlhndWFuTWlMQ0p6YjNWeVkyVlNiMjkwSWpvaUwxVnpaWEp6TDAxaGRIUXZVMmwwWlhNdmNHOXdiVzkwYVc5dUlpd2ljMjkxY21ObGMwTnZiblJsYm5RaU9sc2lhVzF3YjNKMElISm5ZaUJtY205dElDY3VMM0puWWljN1hHNWNibVY0Y0c5eWRDQmtaV1poZFd4MElIdGNiaUFnSUNCa1pXWmhkV3gwVUhKdmNITTZJSEpuWWk1a1pXWmhkV3gwVUhKdmNITXNYRzVjYmlBZ0lDQjBaWE4wT2lBb2RtRnNkV1VwSUQwK0lDaDJZV3gxWlNBbUppQjJZV3gxWlM1cGJtUmxlRTltS0Njakp5a2dQaUF0TVNrc1hHNWNiaUFnSUNCemNHeHBkRG9nS0haaGJIVmxLU0E5UGlCN1hHNGdJQ0FnSUNBZ0lHeGxkQ0J5TENCbkxDQmlPMXh1WEc0Z0lDQWdJQ0FnSUM4dklFbG1JSGRsSUdoaGRtVWdOaUJqYUdGeVlXTjBaWEp6TENCcFpTQWpSa1l3TURBd1hHNGdJQ0FnSUNBZ0lHbG1JQ2gyWVd4MVpTNXNaVzVuZEdnZ1BpQTBLU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQnlJRDBnZG1Gc2RXVXVjM1ZpYzNSeUtERXNJRElwTzF4dUlDQWdJQ0FnSUNBZ0lDQWdaeUE5SUhaaGJIVmxMbk4xWW5OMGNpZ3pMQ0F5S1R0Y2JpQWdJQ0FnSUNBZ0lDQWdJR0lnUFNCMllXeDFaUzV6ZFdKemRISW9OU3dnTWlrN1hHNWNiaUFnSUNBZ0lDQWdMeThnVDNJZ2QyVWdhR0YyWlNBeklHTm9ZWEpoWTNSbGNuTXNJR2xsSUNOR01EQmNiaUFnSUNBZ0lDQWdmU0JsYkhObElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUhJZ1BTQjJZV3gxWlM1emRXSnpkSElvTVN3Z01TazdYRzRnSUNBZ0lDQWdJQ0FnSUNCbklEMGdkbUZzZFdVdWMzVmljM1J5S0RJc0lERXBPMXh1SUNBZ0lDQWdJQ0FnSUNBZ1lpQTlJSFpoYkhWbExuTjFZbk4wY2lnekxDQXhLVHRjYmlBZ0lDQWdJQ0FnSUNBZ0lISWdLejBnY2p0Y2JpQWdJQ0FnSUNBZ0lDQWdJR2NnS3owZ1p6dGNiaUFnSUNBZ0lDQWdJQ0FnSUdJZ0t6MGdZanRjYmlBZ0lDQWdJQ0FnZlZ4dVhHNGdJQ0FnSUNBZ0lISmxkSFZ5YmlCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0JTWldRNklIQmhjbk5sU1c1MEtISXNJREUyS1N4Y2JpQWdJQ0FnSUNBZ0lDQWdJRWR5WldWdU9pQndZWEp6WlVsdWRDaG5MQ0F4Tmlrc1hHNGdJQ0FnSUNBZ0lDQWdJQ0JDYkhWbE9pQndZWEp6WlVsdWRDaGlMQ0F4Tmlrc1hHNGdJQ0FnSUNBZ0lDQWdJQ0JCYkhCb1lUb2dNVnh1SUNBZ0lDQWdJQ0I5TzF4dUlDQWdJSDBzWEc1Y2JpQWdJQ0JqYjIxaWFXNWxPaUFvZG1Gc2RXVnpLU0E5UGlCeVoySXVZMjl0WW1sdVpTaDJZV3gxWlhNcFhHNTlPeUpkZlE9PVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvdmFsdWUtdHlwZXMvaGV4LmpzXG4gKiogbW9kdWxlIGlkID0gMjNcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF9kZWZhdWx0UHJvcHMgPSByZXF1aXJlKCcuL3NldHRpbmdzL2RlZmF1bHQtcHJvcHMnKTtcblxudmFyIF9kaWN0aW9uYXJ5ID0gcmVxdWlyZSgnLi9zZXR0aW5ncy9kaWN0aW9uYXJ5Jyk7XG5cbnZhciBfdXRpbHMgPSByZXF1aXJlKCcuLi9pbmMvdXRpbHMnKTtcblxuZXhwb3J0cy5kZWZhdWx0ID0ge1xuICAgIGRlZmF1bHRQcm9wczoge1xuICAgICAgICBIdWU6IHtcbiAgICAgICAgICAgIG1pbjogMCxcbiAgICAgICAgICAgIG1heDogMzYwXG4gICAgICAgIH0sXG4gICAgICAgIFNhdHVyYXRpb246IF9kZWZhdWx0UHJvcHMucGVyY2VudCxcbiAgICAgICAgTGlnaHRuZXNzOiBfZGVmYXVsdFByb3BzLnBlcmNlbnQsXG4gICAgICAgIEFscGhhOiBfZGVmYXVsdFByb3BzLm9wYWNpdHlcbiAgICB9LFxuXG4gICAgdGVzdDogZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgIHJldHVybiB2YWx1ZSAmJiB2YWx1ZS5pbmRleE9mKCdoc2wnKSA+IC0xO1xuICAgIH0sXG5cbiAgICBzcGxpdDogZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgIHJldHVybiAoMCwgX3V0aWxzLmdldENvbG9yVmFsdWVzKSh2YWx1ZSwgX2RpY3Rpb25hcnkuaHNsKTtcbiAgICB9LFxuXG4gICAgY29tYmluZTogZnVuY3Rpb24gKHZhbHVlcykge1xuICAgICAgICByZXR1cm4gKDAsIF91dGlscy5jcmVhdGVGdW5jdGlvblN0cmluZykoKDAsIF91dGlscy5jcmVhdGVEZWxpbWl0ZWQpKHZhbHVlcywgX2RpY3Rpb25hcnkuaHNsLCAnLCAnLCAyKSwgJ2hzbGEnKTtcbiAgICB9XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluTnlZeTkyWVd4MVpTMTBlWEJsY3k5b2Myd3Vhbk1pWFN3aWJtRnRaWE1pT2x0ZExDSnRZWEJ3YVc1bmN5STZJanM3T3pzN096czdPenRyUWtGSlpUdEJRVU5ZTEd0Q1FVRmpPMEZCUTFZc1lVRkJTenRCUVVORUxHbENRVUZMTEVOQlFVdzdRVUZEUVN4cFFrRkJTeXhIUVVGTU8xTkJSa283UVVGSlFTeDVRMEZNVlR0QlFVMVdMSGREUVU1Vk8wRkJUMVlzYjBOQlVGVTdTMEZCWkRzN1FVRlZRU3hWUVVGTkxGVkJRVU1zUzBGQlJEdGxRVUZaTEZOQlFWTXNUVUZCVFN4UFFVRk9MRU5CUVdNc1MwRkJaQ3hKUVVGMVFpeERRVUZETEVOQlFVUTdTMEZCTlVNN08wRkJSVTRzVjBGQlR5eFZRVUZETEV0QlFVUTdaVUZCVnl3eVFrRkJaU3hMUVVGbU8wdEJRVmc3TzBGQlJWQXNZVUZCVXl4VlFVRkRMRTFCUVVRN1pVRkJXU3hwUTBGQmNVSXNORUpCUVdkQ0xFMUJRV2hDTEcxQ1FVRnJReXhKUVVGc1F5eEZRVUYzUXl4RFFVRjRReXhEUVVGeVFpeEZRVUZwUlN4TlFVRnFSVHRMUVVGYUlpd2labWxzWlNJNkltaHpiQzVxY3lJc0luTnZkWEpqWlZKdmIzUWlPaUl2VlhObGNuTXZUV0YwZEM5VGFYUmxjeTl3YjNCdGIzUnBiMjRpTENKemIzVnlZMlZ6UTI5dWRHVnVkQ0k2V3lKcGJYQnZjblFnZXlCd1pYSmpaVzUwTENCdmNHRmphWFI1SUgwZ1puSnZiU0FuTGk5elpYUjBhVzVuY3k5a1pXWmhkV3gwTFhCeWIzQnpKenRjYm1sdGNHOXlkQ0I3SUdoemJDQmhjeUJvYzJ4VVpYSnRjeUI5SUdaeWIyMGdKeTR2YzJWMGRHbHVaM012WkdsamRHbHZibUZ5ZVNjN1hHNXBiWEJ2Y25RZ2V5QmpjbVZoZEdWRVpXeHBiV2wwWldRc0lHTnlaV0YwWlVaMWJtTjBhVzl1VTNSeWFXNW5MQ0JuWlhSRGIyeHZjbFpoYkhWbGN5QjlJR1p5YjIwZ0p5NHVMMmx1WXk5MWRHbHNjeWM3WEc1Y2JtVjRjRzl5ZENCa1pXWmhkV3gwSUh0Y2JpQWdJQ0JrWldaaGRXeDBVSEp2Y0hNNklIdGNiaUFnSUNBZ0lDQWdTSFZsT2lCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0J0YVc0NklEQXNYRzRnSUNBZ0lDQWdJQ0FnSUNCdFlYZzZJRE0yTUZ4dUlDQWdJQ0FnSUNCOUxGeHVJQ0FnSUNBZ0lDQlRZWFIxY21GMGFXOXVPaUJ3WlhKalpXNTBMRnh1SUNBZ0lDQWdJQ0JNYVdkb2RHNWxjM002SUhCbGNtTmxiblFzWEc0Z0lDQWdJQ0FnSUVGc2NHaGhPaUJ2Y0dGamFYUjVYRzRnSUNBZ2ZTeGNibHh1SUNBZ0lIUmxjM1E2SUNoMllXeDFaU2tnUFQ0Z0tIWmhiSFZsSUNZbUlIWmhiSFZsTG1sdVpHVjRUMllvSjJoemJDY3BJRDRnTFRFcExGeHVYRzRnSUNBZ2MzQnNhWFE2SUNoMllXeDFaU2tnUFQ0Z1oyVjBRMjlzYjNKV1lXeDFaWE1vZG1Gc2RXVXNJR2h6YkZSbGNtMXpLU3hjYmx4dUlDQWdJR052YldKcGJtVTZJQ2gyWVd4MVpYTXBJRDArSUdOeVpXRjBaVVoxYm1OMGFXOXVVM1J5YVc1bktHTnlaV0YwWlVSbGJHbHRhWFJsWkNoMllXeDFaWE1zSUdoemJGUmxjbTF6TENBbkxDQW5MQ0F5S1N3Z0oyaHpiR0VuS1Z4dWZUdGNiaUpkZlE9PVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvdmFsdWUtdHlwZXMvaHNsLmpzXG4gKiogbW9kdWxlIGlkID0gMjRcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF9kaWN0aW9uYXJ5ID0gcmVxdWlyZSgnLi9zZXR0aW5ncy9kaWN0aW9uYXJ5Jyk7XG5cbnZhciBfdXRpbHMgPSByZXF1aXJlKCcuLi9pbmMvdXRpbHMnKTtcblxudmFyIF9weCA9IHJlcXVpcmUoJy4vcHgnKTtcblxudmFyIF9weDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9weCk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmV4cG9ydHMuZGVmYXVsdCA9IHtcbiAgICBkZWZhdWx0UHJvcHM6IF9weDIuZGVmYXVsdC5kZWZhdWx0UHJvcHMsXG5cbiAgICAvKlxuICAgICAgICBTcGxpdCBkaW1lbnNpb25zIGluIGZvcm1hdCBcIlRvcCBSaWdodCBCb3R0b20gTGVmdFwiXG4gICAgICAgIFxuICAgICAgICBAcGFyYW0gW3N0cmluZ106IFBvc2l0aW9uIHZhbHVlc1xuICAgICAgICAgICAgXCIyMHB4IDAgMzBweCA0MHB4XCIgLT4gezIwcHgsIDAsIDMwcHgsIDQwcHh9XG4gICAgICAgICAgICBcIjIwcHggMCAzMHB4XCIgLT4gezIwcHgsIDAsIDMwcHgsIDB9XG4gICAgICAgICAgICBcIjIwcHggMFwiIC0+IHsyMHB4LCAwLCAyMHB4LCAwfVxuICAgICAgICAgICAgXCIyMHB4XCIgLT4gezIwcHgsIDIwcHgsIDIwcHgsIDIwcHh9XG4gICAgICAgIFxuICAgICAgICBAcmV0dXJuIFtvYmplY3RdOiBPYmplY3Qgd2l0aCBUL1IvQi9MIG1ldHJpY3NcbiAgICAqL1xuICAgIHNwbGl0OiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgdmFyIHNwbGl0VmFsdWUgPSB7fTtcbiAgICAgICAgdmFyIHNwbGl0UG9zaXRpb25zID0gKDAsIF91dGlscy5zcGxpdFNwYWNlRGVsaW1pdGVkKSh2YWx1ZSk7XG4gICAgICAgIHZhciBudW1Qb3NpdGlvbnMgPSBzcGxpdFBvc2l0aW9ucy5sZW5ndGg7XG4gICAgICAgIHZhciBqdW1wQmFjayA9IG51bVBvc2l0aW9ucyAhPT0gMSA/IDIgOiAxO1xuICAgICAgICB2YXIgaiA9IDA7XG5cbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCA0OyBpKyspIHtcbiAgICAgICAgICAgIHNwbGl0VmFsdWVbX2RpY3Rpb25hcnkucG9zaXRpb25zW2ldXSA9IHNwbGl0UG9zaXRpb25zW2pdO1xuXG4gICAgICAgICAgICAvLyBKdW1wIGJhY2sgKHRvIHN0YXJ0KSBjb3VudGVyIGlmIHdlJ3ZlIHJlYWNoZWQgdGhlIGVuZCBvZiBvdXIgdmFsdWVzXG4gICAgICAgICAgICBqKys7XG4gICAgICAgICAgICBqID0gaiA9PT0gbnVtUG9zaXRpb25zID8gaiAtIGp1bXBCYWNrIDogajtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBzcGxpdFZhbHVlO1xuICAgIH0sXG5cbiAgICBjb21iaW5lOiBmdW5jdGlvbiAodmFsdWVzKSB7XG4gICAgICAgIHJldHVybiAoMCwgX3V0aWxzLmNyZWF0ZURlbGltaXRlZCkodmFsdWVzLCBfZGljdGlvbmFyeS5wb3NpdGlvbnMsICcgJyk7XG4gICAgfVxufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbk55WXk5MllXeDFaUzEwZVhCbGN5OXdiM05wZEdsdmJuTXVhbk1pWFN3aWJtRnRaWE1pT2x0ZExDSnRZWEJ3YVc1bmN5STZJanM3T3pzN096czdPenM3T3pzN2EwSkJTV1U3UVVGRFdDeHJRa0ZCWXl4aFFVRlpMRmxCUVZvN096czdPenM3T3pzN096czdRVUZoWkN4WFFVRlBMRlZCUVVNc1MwRkJSQ3hGUVVGWE8wRkJRMlFzV1VGQlRTeGhRVUZoTEVWQlFXSXNRMEZFVVR0QlFVVmtMRmxCUVUwc2FVSkJRV2xDTEdkRFFVRnZRaXhMUVVGd1FpeERRVUZxUWl4RFFVWlJPMEZCUjJRc1dVRkJUU3hsUVVGbExHVkJRV1VzVFVGQlppeERRVWhRTzBGQlNXUXNXVUZCVFN4WFFVRlhMRmxCUVVNc1MwRkJhVUlzUTBGQmFrSXNSMEZCYzBJc1EwRkJka0lzUjBGQk1rSXNRMEZCTTBJc1EwRktTRHRCUVV0a0xGbEJRVWtzU1VGQlNTeERRVUZLTEVOQlRGVTdPMEZCVDJRc1lVRkJTeXhKUVVGSkxFbEJRVWtzUTBGQlNpeEZRVUZQTEVsQlFVa3NRMEZCU2l4RlFVRlBMRWRCUVhaQ0xFVkJRVFJDTzBGQlEzaENMSFZDUVVGWExITkNRVUZWTEVOQlFWWXNRMEZCV0N4SlFVRXlRaXhsUVVGbExFTkJRV1lzUTBGQk0wSTdPenRCUVVSM1FpeGhRVWw0UWl4SFFVcDNRanRCUVV0NFFpeG5Ra0ZCU1N4RFFVRkRMRXRCUVUwc1dVRkJUaXhIUVVGelFpeEpRVUZKTEZGQlFVb3NSMEZCWlN4RFFVRjBReXhEUVV4dlFqdFRRVUUxUWpzN1FVRlJRU3hsUVVGUExGVkJRVkFzUTBGbVl6dExRVUZZT3p0QlFXdENVQ3hoUVVGVExGVkJRVU1zVFVGQlJEdGxRVUZaTERSQ1FVRm5RaXhOUVVGb1FpeDVRa0ZCYlVNc1IwRkJia003UzBGQldpSXNJbVpwYkdVaU9pSndiM05wZEdsdmJuTXVhbk1pTENKemIzVnlZMlZTYjI5MElqb2lMMVZ6WlhKekwwMWhkSFF2VTJsMFpYTXZjRzl3Ylc5MGFXOXVJaXdpYzI5MWNtTmxjME52Ym5SbGJuUWlPbHNpYVcxd2IzSjBJSHNnY0c5emFYUnBiMjV6SUgwZ1puSnZiU0FuTGk5elpYUjBhVzVuY3k5a2FXTjBhVzl1WVhKNUp6dGNibWx0Y0c5eWRDQjdJR055WldGMFpVUmxiR2x0YVhSbFpDd2djM0JzYVhSVGNHRmpaVVJsYkdsdGFYUmxaQ0I5SUdaeWIyMGdKeTR1TDJsdVl5OTFkR2xzY3ljN1hHNXBiWEJ2Y25RZ2NIaFdZV3gxWlZSNWNHVWdabkp2YlNBbkxpOXdlQ2M3WEc1Y2JtVjRjRzl5ZENCa1pXWmhkV3gwSUh0Y2JpQWdJQ0JrWldaaGRXeDBVSEp2Y0hNNklIQjRWbUZzZFdWVWVYQmxMbVJsWm1GMWJIUlFjbTl3Y3l4Y2JseHVJQ0FnSUM4cVhHNGdJQ0FnSUNBZ0lGTndiR2wwSUdScGJXVnVjMmx2Ym5NZ2FXNGdabTl5YldGMElGd2lWRzl3SUZKcFoyaDBJRUp2ZEhSdmJTQk1aV1owWENKY2JpQWdJQ0FnSUNBZ1hHNGdJQ0FnSUNBZ0lFQndZWEpoYlNCYmMzUnlhVzVuWFRvZ1VHOXphWFJwYjI0Z2RtRnNkV1Z6WEc0Z0lDQWdJQ0FnSUNBZ0lDQmNJakl3Y0hnZ01DQXpNSEI0SURRd2NIaGNJaUF0UGlCN01qQndlQ3dnTUN3Z016QndlQ3dnTkRCd2VIMWNiaUFnSUNBZ0lDQWdJQ0FnSUZ3aU1qQndlQ0F3SURNd2NIaGNJaUF0UGlCN01qQndlQ3dnTUN3Z016QndlQ3dnTUgxY2JpQWdJQ0FnSUNBZ0lDQWdJRndpTWpCd2VDQXdYQ0lnTFQ0Z2V6SXdjSGdzSURBc0lESXdjSGdzSURCOVhHNGdJQ0FnSUNBZ0lDQWdJQ0JjSWpJd2NIaGNJaUF0UGlCN01qQndlQ3dnTWpCd2VDd2dNakJ3ZUN3Z01qQndlSDFjYmlBZ0lDQWdJQ0FnWEc0Z0lDQWdJQ0FnSUVCeVpYUjFjbTRnVzI5aWFtVmpkRjA2SUU5aWFtVmpkQ0IzYVhSb0lGUXZVaTlDTDB3Z2JXVjBjbWxqYzF4dUlDQWdJQ292WEc0Z0lDQWdjM0JzYVhRNklDaDJZV3gxWlNrZ1BUNGdlMXh1SUNBZ0lDQWdJQ0JqYjI1emRDQnpjR3hwZEZaaGJIVmxJRDBnZTMwN1hHNGdJQ0FnSUNBZ0lHTnZibk4wSUhOd2JHbDBVRzl6YVhScGIyNXpJRDBnYzNCc2FYUlRjR0ZqWlVSbGJHbHRhWFJsWkNoMllXeDFaU2s3WEc0Z0lDQWdJQ0FnSUdOdmJuTjBJRzUxYlZCdmMybDBhVzl1Y3lBOUlITndiR2wwVUc5emFYUnBiMjV6TG14bGJtZDBhRHRjYmlBZ0lDQWdJQ0FnWTI5dWMzUWdhblZ0Y0VKaFkyc2dQU0FvYm5WdFVHOXphWFJwYjI1eklDRTlQU0F4S1NBL0lESWdPaUF4TzF4dUlDQWdJQ0FnSUNCc1pYUWdhaUE5SURBN1hHNWNiaUFnSUNBZ0lDQWdabTl5SUNoc1pYUWdhU0E5SURBN0lHa2dQQ0EwT3lCcEt5c3BJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lITndiR2wwVm1Gc2RXVmJjRzl6YVhScGIyNXpXMmxkWFNBOUlITndiR2wwVUc5emFYUnBiMjV6VzJwZE8xeHVYRzRnSUNBZ0lDQWdJQ0FnSUNBdkx5QktkVzF3SUdKaFkyc2dLSFJ2SUhOMFlYSjBLU0JqYjNWdWRHVnlJR2xtSUhkbEozWmxJSEpsWVdOb1pXUWdkR2hsSUdWdVpDQnZaaUJ2ZFhJZ2RtRnNkV1Z6WEc0Z0lDQWdJQ0FnSUNBZ0lDQnFLeXM3WEc0Z0lDQWdJQ0FnSUNBZ0lDQnFJRDBnS0dvZ1BUMDlJRzUxYlZCdmMybDBhVzl1Y3lrZ1B5QnFJQzBnYW5WdGNFSmhZMnNnT2lCcU8xeHVJQ0FnSUNBZ0lDQjlYRzVjYmlBZ0lDQWdJQ0FnY21WMGRYSnVJSE53YkdsMFZtRnNkV1U3WEc0Z0lDQWdmU3hjYmx4dUlDQWdJR052YldKcGJtVTZJQ2gyWVd4MVpYTXBJRDArSUdOeVpXRjBaVVJsYkdsdGFYUmxaQ2gyWVd4MVpYTXNJSEJ2YzJsMGFXOXVjeXdnSnlBbktWeHVmVHNpWFgwPVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvdmFsdWUtdHlwZXMvcG9zaXRpb25zLmpzXG4gKiogbW9kdWxlIGlkID0gMjVcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHMuZGVmYXVsdCA9IHtcbiAgICBkZWZhdWx0UHJvcHM6IHtcbiAgICAgICAgdW5pdDogJ3B4J1xuICAgIH1cbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5OeVl5OTJZV3gxWlMxMGVYQmxjeTl3ZUM1cWN5SmRMQ0p1WVcxbGN5STZXMTBzSW0xaGNIQnBibWR6SWpvaU96czdhMEpCUVdVN1FVRkRXQ3hyUWtGQll6dEJRVU5XTEdOQlFVMHNTVUZCVGp0TFFVUktJaXdpWm1sc1pTSTZJbkI0TG1weklpd2ljMjkxY21ObFVtOXZkQ0k2SWk5VmMyVnljeTlOWVhSMEwxTnBkR1Z6TDNCdmNHMXZkR2x2YmlJc0luTnZkWEpqWlhORGIyNTBaVzUwSWpwYkltVjRjRzl5ZENCa1pXWmhkV3gwSUh0Y2JpQWdJQ0JrWldaaGRXeDBVSEp2Y0hNNklIdGNiaUFnSUNBZ0lDQWdkVzVwZERvZ0ozQjRKMXh1SUNBZ0lIMWNibjA3SWwxOVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvdmFsdWUtdHlwZXMvcHguanNcbiAqKiBtb2R1bGUgaWQgPSAyNlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX3V0aWxzID0gcmVxdWlyZSgnLi4vaW5jL3V0aWxzJyk7XG5cbnZhciBfZGljdGlvbmFyeSA9IHJlcXVpcmUoJy4vc2V0dGluZ3MvZGljdGlvbmFyeScpO1xuXG52YXIgX2RlZmF1bHRQcm9wcyA9IHJlcXVpcmUoJy4vc2V0dGluZ3MvZGVmYXVsdC1wcm9wcycpO1xuXG5leHBvcnRzLmRlZmF1bHQgPSB7XG4gICAgZGVmYXVsdFByb3BzOiB7XG4gICAgICAgIFJlZDogX2RlZmF1bHRQcm9wcy5yZ2IsXG4gICAgICAgIEdyZWVuOiBfZGVmYXVsdFByb3BzLnJnYixcbiAgICAgICAgQmx1ZTogX2RlZmF1bHRQcm9wcy5yZ2IsXG4gICAgICAgIEFscGhhOiBfZGVmYXVsdFByb3BzLm9wYWNpdHlcbiAgICB9LFxuXG4gICAgdGVzdDogZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgIHJldHVybiB2YWx1ZSAmJiB2YWx1ZS5pbmRleE9mKCdyZ2InKSA+IC0xO1xuICAgIH0sXG5cbiAgICBzcGxpdDogZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgIHJldHVybiAoMCwgX3V0aWxzLmdldENvbG9yVmFsdWVzKSh2YWx1ZSwgX2RpY3Rpb25hcnkucmdiKTtcbiAgICB9LFxuXG4gICAgY29tYmluZTogZnVuY3Rpb24gKHZhbHVlcykge1xuICAgICAgICByZXR1cm4gKDAsIF91dGlscy5jcmVhdGVGdW5jdGlvblN0cmluZykoKDAsIF91dGlscy5jcmVhdGVEZWxpbWl0ZWQpKHZhbHVlcywgX2RpY3Rpb25hcnkucmdiLCAnLCAnLCAyKSwgJ3JnYmEnKTtcbiAgICB9XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluTnlZeTkyWVd4MVpTMTBlWEJsY3k5eVoySXVhbk1pWFN3aWJtRnRaWE1pT2x0ZExDSnRZWEJ3YVc1bmN5STZJanM3T3pzN096czdPenRyUWtGSlpUdEJRVU5ZTEd0Q1FVRmpPMEZCUTFZc09FSkJSRlU3UVVGRlZpeG5RMEZHVlR0QlFVZFdMQ3RDUVVoVk8wRkJTVllzYjBOQlNsVTdTMEZCWkRzN1FVRlBRU3hWUVVGTkxGVkJRVU1zUzBGQlJEdGxRVUZaTEZOQlFWTXNUVUZCVFN4UFFVRk9MRU5CUVdNc1MwRkJaQ3hKUVVGMVFpeERRVUZETEVOQlFVUTdTMEZCTlVNN08wRkJSVTRzVjBGQlR5eFZRVUZETEV0QlFVUTdaVUZCVnl3eVFrRkJaU3hMUVVGbU8wdEJRVmc3TzBGQlJWQXNZVUZCVXl4VlFVRkRMRTFCUVVRN1pVRkJXU3hwUTBGQmNVSXNORUpCUVdkQ0xFMUJRV2hDTEcxQ1FVRnJReXhKUVVGc1F5eEZRVUYzUXl4RFFVRjRReXhEUVVGeVFpeEZRVUZwUlN4TlFVRnFSVHRMUVVGYUlpd2labWxzWlNJNkluSm5ZaTVxY3lJc0luTnZkWEpqWlZKdmIzUWlPaUl2VlhObGNuTXZUV0YwZEM5VGFYUmxjeTl3YjNCdGIzUnBiMjRpTENKemIzVnlZMlZ6UTI5dWRHVnVkQ0k2V3lKcGJYQnZjblFnZXlCamNtVmhkR1ZFWld4cGJXbDBaV1FzSUdOeVpXRjBaVVoxYm1OMGFXOXVVM1J5YVc1bkxDQm5aWFJEYjJ4dmNsWmhiSFZsY3lCOUlHWnliMjBnSnk0dUwybHVZeTkxZEdsc2N5YzdYRzVwYlhCdmNuUWdleUJ5WjJJZ1lYTWdjbWRpVkdWeWJYTWdmU0JtY205dElDY3VMM05sZEhScGJtZHpMMlJwWTNScGIyNWhjbmtuTzF4dWFXMXdiM0owSUhzZ2NtZGlJR0Z6SUdSbFptRjFiSFJTUjBJc0lHOXdZV05wZEhrZ1lYTWdaR1ZtWVhWc2RFOXdZV05wZEhrZ2ZTQm1jbTl0SUNjdUwzTmxkSFJwYm1kekwyUmxabUYxYkhRdGNISnZjSE1uTzF4dVhHNWxlSEJ2Y25RZ1pHVm1ZWFZzZENCN1hHNGdJQ0FnWkdWbVlYVnNkRkJ5YjNCek9pQjdYRzRnSUNBZ0lDQWdJRkpsWkRvZ1pHVm1ZWFZzZEZKSFFpeGNiaUFnSUNBZ0lDQWdSM0psWlc0NklHUmxabUYxYkhSU1IwSXNYRzRnSUNBZ0lDQWdJRUpzZFdVNklHUmxabUYxYkhSU1IwSXNYRzRnSUNBZ0lDQWdJRUZzY0doaE9pQmtaV1poZFd4MFQzQmhZMmwwZVZ4dUlDQWdJSDBzWEc1Y2JpQWdJQ0IwWlhOME9pQW9kbUZzZFdVcElEMCtJQ2gyWVd4MVpTQW1KaUIyWVd4MVpTNXBibVJsZUU5bUtDZHlaMkluS1NBK0lDMHhLU3hjYmx4dUlDQWdJSE53YkdsME9pQW9kbUZzZFdVcElEMCtJR2RsZEVOdmJHOXlWbUZzZFdWektIWmhiSFZsTENCeVoySlVaWEp0Y3lrc1hHNWNiaUFnSUNCamIyMWlhVzVsT2lBb2RtRnNkV1Z6S1NBOVBpQmpjbVZoZEdWR2RXNWpkR2x2YmxOMGNtbHVaeWhqY21WaGRHVkVaV3hwYldsMFpXUW9kbUZzZFdWekxDQnlaMkpVWlhKdGN5d2dKeXdnSnl3Z01pa3NJQ2R5WjJKaEp5bGNibjA3SWwxOVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvdmFsdWUtdHlwZXMvcmdiLmpzXG4gKiogbW9kdWxlIGlkID0gMjdcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0cy5kZWZhdWx0ID0ge1xuICAgIGRlZmF1bHRQcm9wczoge1xuICAgICAgICBjdXJyZW50OiAxXG4gICAgfVxufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbk55WXk5MllXeDFaUzEwZVhCbGN5OXpZMkZzWlM1cWN5SmRMQ0p1WVcxbGN5STZXMTBzSW0xaGNIQnBibWR6SWpvaU96czdhMEpCUVdVN1FVRkRXQ3hyUWtGQll6dEJRVU5XTEdsQ1FVRlRMRU5CUVZRN1MwRkVTaUlzSW1acGJHVWlPaUp6WTJGc1pTNXFjeUlzSW5OdmRYSmpaVkp2YjNRaU9pSXZWWE5sY25NdlRXRjBkQzlUYVhSbGN5OXdiM0J0YjNScGIyNGlMQ0p6YjNWeVkyVnpRMjl1ZEdWdWRDSTZXeUpsZUhCdmNuUWdaR1ZtWVhWc2RDQjdYRzRnSUNBZ1pHVm1ZWFZzZEZCeWIzQnpPaUI3WEc0Z0lDQWdJQ0FnSUdOMWNuSmxiblE2SURGY2JpQWdJQ0I5WEc1OU95SmRmUT09XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy92YWx1ZS10eXBlcy9zY2FsZS5qc1xuICoqIG1vZHVsZSBpZCA9IDI4XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbnZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfY29sb3IgPSByZXF1aXJlKCcuL2NvbG9yJyk7XG5cbnZhciBfY29sb3IyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY29sb3IpO1xuXG52YXIgX3B4ID0gcmVxdWlyZSgnLi9weCcpO1xuXG52YXIgX2RpY3Rpb25hcnkgPSByZXF1aXJlKCcuL3NldHRpbmdzL2RpY3Rpb25hcnknKTtcblxudmFyIF91dGlscyA9IHJlcXVpcmUoJy4uL2luYy91dGlscycpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG52YXIgc2hhZG93V2l0aG91dENvbG9yVGVybXMgPSBfZGljdGlvbmFyeS5zaGFkb3cuc2xpY2UoMCwgNCk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IHtcbiAgICBkZWZhdWx0UHJvcHM6IF9leHRlbmRzKHt9LCBfY29sb3IyLmRlZmF1bHQuZGVmYXVsdFByb3BzLCB7XG4gICAgICAgIFg6IF9weC5kZWZhdWx0UHJvcHMsXG4gICAgICAgIFk6IF9weC5kZWZhdWx0UHJvcHMsXG4gICAgICAgIFJhZGl1czogX3B4LmRlZmF1bHRQcm9wcyxcbiAgICAgICAgU3ByZWFkOiBfcHguZGVmYXVsdFByb3BzXG4gICAgfSksXG5cbiAgICBzcGxpdDogZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgIHZhciBiaXRzID0gKDAsIF91dGlscy5zcGxpdFNwYWNlRGVsaW1pdGVkKSh2YWx1ZSk7XG4gICAgICAgIHZhciBoYXNSZWFjaGVkQ29sb3IgPSBmYWxzZTtcbiAgICAgICAgdmFyIGNvbG9yUHJvcCA9ICcnO1xuICAgICAgICB2YXIgc3BsaXRWYWx1ZSA9IHt9O1xuXG4gICAgICAgIGJpdHMuZm9yRWFjaChmdW5jdGlvbiAoYml0LCBpKSB7XG4gICAgICAgICAgICAvLyBJZiB3ZSd2ZSByZWFjaGVkIHRoZSBjb2xvciBwcm9wcywgYXBwZW5kIHRvIGNvbG9yIHN0cmluZ1xuICAgICAgICAgICAgaWYgKGhhc1JlYWNoZWRDb2xvciB8fCBfY29sb3IyLmRlZmF1bHQudGVzdChiaXQpKSB7XG4gICAgICAgICAgICAgICAgaGFzUmVhY2hlZENvbG9yID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBjb2xvclByb3AgKz0gYml0O1xuXG4gICAgICAgICAgICAgICAgLy8gRWxzZSBwcm9jZXNzIHNoYWRvdyB2YWx1ZVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgc3BsaXRWYWx1ZVtfZGljdGlvbmFyeS5zaGFkb3dbaV1dID0gYml0O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgdmFyIHNwbGl0Q29sb3JQcm9wcyA9IF9jb2xvcjIuZGVmYXVsdC5zcGxpdChjb2xvclByb3ApO1xuXG4gICAgICAgIHJldHVybiBfZXh0ZW5kcyh7fSwgc3BsaXRWYWx1ZSwgeyBzcGxpdENvbG9yUHJvcHM6IHNwbGl0Q29sb3JQcm9wcyB9KTtcbiAgICB9LFxuXG4gICAgY29tYmluZTogZnVuY3Rpb24gKHZhbHVlcykge1xuICAgICAgICByZXR1cm4gKDAsIF91dGlscy5jcmVhdGVEZWxpbWl0ZWQpKHZhbHVlcywgc2hhZG93V2l0aG91dENvbG9yVGVybXMsICcgJykgKyBfY29sb3IyLmRlZmF1bHQuY29tYmluZSh2YWx1ZXMpO1xuICAgIH1cbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5OeVl5OTJZV3gxWlMxMGVYQmxjeTl6YUdGa2IzY3Vhbk1pWFN3aWJtRnRaWE1pT2x0ZExDSnRZWEJ3YVc1bmN5STZJanM3T3pzN096czdPenM3T3pzN096czdPMEZCUzBFc1NVRkJUU3d3UWtGQk1FSXNiVUpCUVZrc1MwRkJXaXhEUVVGclFpeERRVUZzUWl4RlFVRnhRaXhEUVVGeVFpeERRVUV4UWpzN2EwSkJSVk03UVVGRFdDd3JRa0ZEVHl4blFrRkJUU3haUVVGT08wRkJRMGc3UVVGRFFUdEJRVU5CTzBGQlEwRTdUVUZNU2pzN1FVRlJRU3hYUVVGUExGVkJRVU1zUzBGQlJDeEZRVUZYTzBGQlEyUXNXVUZCVFN4UFFVRlBMR2REUVVGdlFpeExRVUZ3UWl4RFFVRlFMRU5CUkZFN1FVRkZaQ3haUVVGSkxHdENRVUZyUWl4TFFVRnNRaXhEUVVaVk8wRkJSMlFzV1VGQlNTeFpRVUZaTEVWQlFWb3NRMEZJVlR0QlFVbGtMRmxCUVVrc1lVRkJZU3hGUVVGaUxFTkJTbFU3TzBGQlRXUXNZVUZCU3l4UFFVRk1MRU5CUVdFc1ZVRkJReXhIUVVGRUxFVkJRVTBzUTBGQlRpeEZRVUZaT3p0QlFVVnlRaXhuUWtGQlNTeHRRa0ZCYlVJc1owSkJRVTBzU1VGQlRpeERRVUZYTEVkQlFWZ3NRMEZCYmtJc1JVRkJiME03UVVGRGNFTXNhME5CUVd0Q0xFbEJRV3hDTEVOQlJHOURPMEZCUlhCRExEWkNRVUZoTEVkQlFXSTdPenRCUVVadlF5eGhRVUY0UXl4TlFVdFBPMEZCUTBnc0swSkJRVmNzYlVKQlFWa3NRMEZCV2l4RFFVRllMRWxCUVRaQ0xFZEJRVGRDTEVOQlJFYzdhVUpCVEZBN1UwRkdVeXhEUVVGaUxFTkJUbU03TzBGQmEwSmtMRmxCUVUwc2EwSkJRV3RDTEdkQ1FVRk5MRXRCUVU0c1EwRkJXU3hUUVVGYUxFTkJRV3hDTEVOQmJFSlJPenRCUVc5Q1pDdzBRa0ZCV1N4alFVRlpMRzFEUVVGNFFpeERRWEJDWXp0TFFVRllPenRCUVhWQ1VDeGhRVUZUTEZWQlFVTXNUVUZCUkR0bFFVRlpMRFJDUVVGblFpeE5RVUZvUWl4RlFVRjNRaXgxUWtGQmVFSXNSVUZCYVVRc1IwRkJha1FzU1VGQmQwUXNaMEpCUVUwc1QwRkJUaXhEUVVGakxFMUJRV1FzUTBGQmVFUTdTMEZCV2lJc0ltWnBiR1VpT2lKemFHRmtiM2N1YW5NaUxDSnpiM1Z5WTJWU2IyOTBJam9pTDFWelpYSnpMMDFoZEhRdlUybDBaWE12Y0c5d2JXOTBhVzl1SWl3aWMyOTFjbU5sYzBOdmJuUmxiblFpT2xzaWFXMXdiM0owSUdOdmJHOXlJR1p5YjIwZ0p5NHZZMjlzYjNJbk8xeHVhVzF3YjNKMElIc2daR1ZtWVhWc2RGQnliM0J6SUdGeklIQjRSR1ZtWVhWc2RGQnliM0J6SUgwZ1puSnZiU0FuTGk5d2VDYzdYRzVwYlhCdmNuUWdleUJ6YUdGa2IzY2dZWE1nYzJoaFpHOTNWR1Z5YlhNZ2ZTQm1jbTl0SUNjdUwzTmxkSFJwYm1kekwyUnBZM1JwYjI1aGNua25PMXh1YVcxd2IzSjBJSHNnYzNCc2FYUlRjR0ZqWlVSbGJHbHRhWFJsWkN3Z1kzSmxZWFJsUkdWc2FXMXBkR1ZrSUgwZ1puSnZiU0FuTGk0dmFXNWpMM1YwYVd4ekp6dGNibHh1WTI5dWMzUWdjMmhoWkc5M1YybDBhRzkxZEVOdmJHOXlWR1Z5YlhNZ1BTQnphR0ZrYjNkVVpYSnRjeTV6YkdsalpTZ3dMQ0EwS1R0Y2JseHVaWGh3YjNKMElHUmxabUYxYkhRZ2UxeHVJQ0FnSUdSbFptRjFiSFJRY205d2N6b2dlMXh1SUNBZ0lDQWdJQ0F1TGk1amIyeHZjaTVrWldaaGRXeDBVSEp2Y0hNc1hHNGdJQ0FnSUNBZ0lGZzZJSEI0UkdWbVlYVnNkRkJ5YjNCekxGeHVJQ0FnSUNBZ0lDQlpPaUJ3ZUVSbFptRjFiSFJRY205d2N5eGNiaUFnSUNBZ0lDQWdVbUZrYVhWek9pQndlRVJsWm1GMWJIUlFjbTl3Y3l4Y2JpQWdJQ0FnSUNBZ1UzQnlaV0ZrT2lCd2VFUmxabUYxYkhSUWNtOXdjMXh1SUNBZ0lIMHNYRzVjYmlBZ0lDQnpjR3hwZERvZ0tIWmhiSFZsS1NBOVBpQjdYRzRnSUNBZ0lDQWdJR052Ym5OMElHSnBkSE1nUFNCemNHeHBkRk53WVdObFJHVnNhVzFwZEdWa0tIWmhiSFZsS1R0Y2JpQWdJQ0FnSUNBZ2JHVjBJR2hoYzFKbFlXTm9aV1JEYjJ4dmNpQTlJR1poYkhObE8xeHVJQ0FnSUNBZ0lDQnNaWFFnWTI5c2IzSlFjbTl3SUQwZ0p5YzdYRzRnSUNBZ0lDQWdJR3hsZENCemNHeHBkRlpoYkhWbElEMGdlMzA3WEc1Y2JpQWdJQ0FnSUNBZ1ltbDBjeTVtYjNKRllXTm9LQ2hpYVhRc0lHa3BJRDArSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJQzh2SUVsbUlIZGxKM1psSUhKbFlXTm9aV1FnZEdobElHTnZiRzl5SUhCeWIzQnpMQ0JoY0hCbGJtUWdkRzhnWTI5c2IzSWdjM1J5YVc1blhHNGdJQ0FnSUNBZ0lDQWdJQ0JwWmlBb2FHRnpVbVZoWTJobFpFTnZiRzl5SUh4OElHTnZiRzl5TG5SbGMzUW9ZbWwwS1NrZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lHaGhjMUpsWVdOb1pXUkRiMnh2Y2lBOUlIUnlkV1U3WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnWTI5c2IzSlFjbTl3SUNzOUlHSnBkRHRjYmx4dUlDQWdJQ0FnSUNBZ0lDQWdMeThnUld4elpTQndjbTlqWlhOeklITm9ZV1J2ZHlCMllXeDFaVnh1SUNBZ0lDQWdJQ0FnSUNBZ2ZTQmxiSE5sSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCemNHeHBkRlpoYkhWbFczTm9ZV1J2ZDFSbGNtMXpXMmxkWFNBOUlHSnBkRHRjYmlBZ0lDQWdJQ0FnSUNBZ0lIMWNiaUFnSUNBZ0lDQWdmU2s3WEc1Y2JpQWdJQ0FnSUNBZ1kyOXVjM1FnYzNCc2FYUkRiMnh2Y2xCeWIzQnpJRDBnWTI5c2IzSXVjM0JzYVhRb1kyOXNiM0pRY205d0tUdGNibHh1SUNBZ0lDQWdJQ0J5WlhSMWNtNGdleUF1TGk1emNHeHBkRlpoYkhWbExDQnpjR3hwZEVOdmJHOXlVSEp2Y0hNZ2ZUdGNiaUFnSUNCOUxGeHVYRzRnSUNBZ1kyOXRZbWx1WlRvZ0tIWmhiSFZsY3lrZ1BUNGdZM0psWVhSbFJHVnNhVzFwZEdWa0tIWmhiSFZsY3l3Z2MyaGhaRzkzVjJsMGFHOTFkRU52Ykc5eVZHVnliWE1zSUNjZ0p5a2dLeUJqYjJ4dmNpNWpiMjFpYVc1bEtIWmhiSFZsY3lsY2JuMDdYRzRpWFgwPVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvdmFsdWUtdHlwZXMvc2hhZG93LmpzXG4gKiogbW9kdWxlIGlkID0gMjlcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHMuY2lyY3VsYXJNb3Rpb24gPSBleHBvcnRzLmNyZWF0ZU1hcHBlciA9IHVuZGVmaW5lZDtcblxudmFyIF9jYWxjID0gcmVxdWlyZSgnLi4vaW5jL2NhbGMnKTtcblxudmFyIGNyZWF0ZU1hcHBlciA9IGV4cG9ydHMuY3JlYXRlTWFwcGVyID0gZnVuY3Rpb24gKGZyb20sIHRvKSB7XG4gICAgdmFyIG1hcExlbmd0aCA9IGZyb20ubGVuZ3RoO1xuXG4gICAgcmV0dXJuIGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICBmb3IgKHZhciBpID0gMTsgaSA8IG1hcExlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAodmFsdWUgPCBmcm9tW2ldIHx8IGkgPT09IG1hcExlbmd0aCkge1xuICAgICAgICAgICAgICAgIHJldHVybiAoMCwgX2NhbGMuZ2V0VmFsdWVGcm9tUHJvZ3Jlc3MpKCgwLCBfY2FsYy5yZXN0cmljdCkoKDAsIF9jYWxjLmdldFByb2dyZXNzRnJvbVZhbHVlKSh2YWx1ZSwgZnJvbVtpIC0gMV0sIGZyb21baV0pLCAwLCAxKSwgdG9baSAtIDFdLCB0b1tpXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xufTtcblxudmFyIGNpcmN1bGFyTW90aW9uID0gZXhwb3J0cy5jaXJjdWxhck1vdGlvbiA9IGZ1bmN0aW9uICh2LCBrZXksIF9yZWYpIHtcbiAgICB2YXIgdmFsdWVzID0gX3JlZi52YWx1ZXM7XG4gICAgcmV0dXJuICgwLCBfY2FsYy5wb2ludEZyb21BbmdsZUFuZERpc3RhbmNlKSh7XG4gICAgICAgIHg6IHZhbHVlcy5vcmlnaW5YLmN1cnJlbnQsXG4gICAgICAgIHk6IHZhbHVlcy5vcmlnaW5ZLmN1cnJlbnRcbiAgICB9LCB2YWx1ZXMuYW5nbGUuY3VycmVudCwgdmFsdWVzLmRpc3RhbmNlLmN1cnJlbnQpW2tleV07XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluTnlZeTlwYm1NdmRISmhibk5tYjNKdFpYSnpMbXB6SWwwc0ltNWhiV1Z6SWpwYlhTd2liV0Z3Y0dsdVozTWlPaUk3T3pzN096czdRVUZGVHl4SlFVRk5MSE5EUVVGbExGVkJRVU1zU1VGQlJDeEZRVUZQTEVWQlFWQXNSVUZCWXp0QlFVTjBReXhSUVVGTkxGbEJRVmtzUzBGQlN5eE5RVUZNTEVOQlJHOUNPenRCUVVkMFF5eFhRVUZQTEZWQlFVTXNTMEZCUkN4RlFVRlhPMEZCUTJRc1lVRkJTeXhKUVVGSkxFbEJRVWtzUTBGQlNpeEZRVUZQTEVsQlFVa3NVMEZCU2l4RlFVRmxMRWRCUVM5Q0xFVkJRVzlETzBGQlEyaERMR2RDUVVGSkxGRkJRVkVzUzBGQlN5eERRVUZNTEVOQlFWSXNTVUZCYlVJc1RVRkJUU3hUUVVGT0xFVkJRV2xDTzBGQlEzQkRMSFZDUVVGUExHZERRVUZ4UWl4dlFrRkJVeXhuUTBGQmNVSXNTMEZCY2tJc1JVRkJORUlzUzBGQlN5eEpRVUZKTEVOQlFVb3NRMEZCYWtNc1JVRkJlVU1zUzBGQlN5eERRVUZNTEVOQlFYcERMRU5CUVZRc1JVRkJORVFzUTBGQk5VUXNSVUZCSzBRc1EwRkJMMFFzUTBGQmNrSXNSVUZCZDBZc1IwRkJSeXhKUVVGSkxFTkJRVW9zUTBGQk0wWXNSVUZCYlVjc1IwRkJSeXhEUVVGSUxFTkJRVzVITEVOQlFWQXNRMEZFYjBNN1lVRkJlRU03VTBGRVNqdExRVVJITEVOQlNDdENPME5CUVdRN08wRkJXWEpDTEVsQlFVMHNNRU5CUVdsQ0xGVkJRVU1zUTBGQlJDeEZRVUZKTEVkQlFVbzdVVUZCVnp0WFFVTnlReXh4UTBGQk1FSTdRVUZEZEVJc1YwRkJSeXhQUVVGUExFOUJRVkFzUTBGQlpTeFBRVUZtTzBGQlEwZ3NWMEZCUnl4UFFVRlBMRTlCUVZBc1EwRkJaU3hQUVVGbU8wdEJSbEFzUlVGSFJ5eFBRVUZQTEV0QlFWQXNRMEZCWVN4UFFVRmlMRVZCUVhOQ0xFOUJRVThzVVVGQlVDeERRVUZuUWl4UFFVRm9RaXhEUVVoNlFpeERRVWRyUkN4SFFVaHNSRHREUVVRd1FpSXNJbVpwYkdVaU9pSjBjbUZ1YzJadmNtMWxjbk11YW5NaUxDSnpiM1Z5WTJWU2IyOTBJam9pTDFWelpYSnpMMDFoZEhRdlUybDBaWE12Y0c5d2JXOTBhVzl1SWl3aWMyOTFjbU5sYzBOdmJuUmxiblFpT2xzaWFXMXdiM0owSUhzZ1oyVjBVSEp2WjNKbGMzTkdjbTl0Vm1Gc2RXVXNJR2RsZEZaaGJIVmxSbkp2YlZCeWIyZHlaWE56TENCeVpYTjBjbWxqZEN3Z2NHOXBiblJHY205dFFXNW5iR1ZCYm1SRWFYTjBZVzVqWlNCOUlHWnliMjBnSnk0dUwybHVZeTlqWVd4akp6dGNibHh1Wlhod2IzSjBJR052Ym5OMElHTnlaV0YwWlUxaGNIQmxjaUE5SUNobWNtOXRMQ0IwYnlrZ1BUNGdlMXh1SUNBZ0lHTnZibk4wSUcxaGNFeGxibWQwYUNBOUlHWnliMjB1YkdWdVozUm9PMXh1WEc0Z0lDQWdjbVYwZFhKdUlDaDJZV3gxWlNrZ1BUNGdlMXh1SUNBZ0lDQWdJQ0JtYjNJZ0tHeGxkQ0JwSUQwZ01Uc2dhU0E4SUcxaGNFeGxibWQwYURzZ2FTc3JLU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQnBaaUFvZG1Gc2RXVWdQQ0JtY205dFcybGRJSHg4SUdrZ1BUMDlJRzFoY0V4bGJtZDBhQ2tnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUhKbGRIVnliaUJuWlhSV1lXeDFaVVp5YjIxUWNtOW5jbVZ6Y3loeVpYTjBjbWxqZENoblpYUlFjbTluY21WemMwWnliMjFXWVd4MVpTaDJZV3gxWlN3Z1puSnZiVnRwSUMwZ01WMHNJR1p5YjIxYmFWMHBMQ0F3TENBeEtTd2dkRzliYVNBdElERmRMQ0IwYjF0cFhTazdYRzRnSUNBZ0lDQWdJQ0FnSUNCOVhHNGdJQ0FnSUNBZ0lIMWNiaUFnSUNCOU8xeHVmVHRjYmx4dVpYaHdiM0owSUdOdmJuTjBJR05wY21OMWJHRnlUVzkwYVc5dUlEMGdLSFlzSUd0bGVTd2dleUIyWVd4MVpYTWdmU2tnUFQ0Z1hHNGdJQ0FnY0c5cGJuUkdjbTl0UVc1bmJHVkJibVJFYVhOMFlXNWpaU2g3WEc0Z0lDQWdJQ0FnSUhnNklIWmhiSFZsY3k1dmNtbG5hVzVZTG1OMWNuSmxiblFzWEc0Z0lDQWdJQ0FnSUhrNklIWmhiSFZsY3k1dmNtbG5hVzVaTG1OMWNuSmxiblFnWEc0Z0lDQWdmU3dnZG1Gc2RXVnpMbUZ1WjJ4bExtTjFjbkpsYm5Rc0lIWmhiSFZsY3k1a2FYTjBZVzVqWlM1amRYSnlaVzUwS1Z0clpYbGRPMXh1WEc0aVhYMD1cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2luYy90cmFuc2Zvcm1lcnMuanNcbiAqKiBtb2R1bGUgaWQgPSAzMFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xudmFyIENBTUVMX0NBU0VfUEFUVEVSTiA9IC8oW2Etel0pKFtBLVpdKS9nO1xudmFyIFJFUExBQ0VfVEVNUExBVEUgPSAnJDEtJDInO1xudmFyIEhBU19QRVJGT1JNQU5DRV9OT1cgPSB0eXBlb2YgcGVyZm9ybWFuY2UgIT09ICd1bmRlZmluZWQnICYmIHBlcmZvcm1hbmNlLm5vdztcblxuLypcbiAgICBHZXQgdmFyIHR5cGUgYXMgc3RyaW5nXG4gICAgXG4gICAgQHBhcmFtOiBWYXJpYWJsZSB0byB0ZXN0XG4gICAgQHJldHVybiBbc3RyaW5nXTogUmV0dXJucywgZm9yIGluc3RhbmNlICdPYmplY3QnIGlmIFtvYmplY3QgT2JqZWN0XVxuKi9cbnZhciB2YXJUeXBlID0gZnVuY3Rpb24gKHZhcmlhYmxlKSB7XG4gICAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh2YXJpYWJsZSkuc2xpY2UoOCwgLTEpO1xufTtcblxuLypcbiAgICBDb252ZXJ0IGNhbWVsQ2FzZSB0byBkYXNoLWNhc2VcblxuICAgIEBwYXJhbSBbc3RyaW5nXVxuICAgIEByZXR1cm4gW3N0cmluZ11cbiovXG52YXIgY2FtZWxUb0Rhc2ggPSBleHBvcnRzLmNhbWVsVG9EYXNoID0gZnVuY3Rpb24gKHN0cmluZykge1xuICAgIHJldHVybiBzdHJpbmcucmVwbGFjZShDQU1FTF9DQVNFX1BBVFRFUk4sIFJFUExBQ0VfVEVNUExBVEUpLnRvTG93ZXJDYXNlKCk7XG59O1xuXG4vKlxuICAgIENvbWJpbmUgdHJhbnNmb3JtZXJzIGludG8gb25lIGZ1bmN0aW9uIHRoYXQgY2FsbHMgZXZlcnlcbiAgICB0cmFuc2Zvcm1lciBpbiB0aGUgYXJyYXkgYW5kIHJldHVybnMgdGhlIHJlc3VsdFxuXG4gICAgQHBhcmFtIFthcnJheV1cbiAgICBAcmV0dXJuIFtmdW5jdGlvbl1cbiovXG52YXIgY29tYmluZVRyYW5zZm9ybWVycyA9IGV4cG9ydHMuY29tYmluZVRyYW5zZm9ybWVycyA9IGZ1bmN0aW9uICh0cmFuc2Zvcm1lcnMpIHtcbiAgICB2YXIgbnVtVHJhbnNmb3JtZXJzID0gdHJhbnNmb3JtZXJzLmxlbmd0aDtcbiAgICB2YXIgaSA9IDA7XG5cbiAgICAvKlxuICAgICAgICBAcGFyYW0gW251bWJlcl1cbiAgICAgICAgQHBhcmFtIFtzdHJpbmddXG4gICAgICAgIEBwYXJhbSBbQWN0aW9uXVxuICAgICAgICBAcmV0dXJuIFtudW1iZXJdXG4gICAgKi9cbiAgICByZXR1cm4gZnVuY3Rpb24gKHYsIGtleSwgYSkge1xuICAgICAgICBmb3IgKGkgPSAwOyBpID4gbnVtVHJhbnNmb3JtZXJzOyBpKyspIHtcbiAgICAgICAgICAgIHYgPSB0cmFuc2Zvcm1lcnNbaV0odiwga2V5LCBhKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB2O1xuICAgIH07XG59O1xuXG52YXIgY3JlYXRlRGVsaW1pdGVkID0gZXhwb3J0cy5jcmVhdGVEZWxpbWl0ZWQgPSBmdW5jdGlvbiAodmFsdWVzLCB0ZXJtcywgZGVsaW1pdGVyLCBjaG9wKSB7XG4gICAgdmFyIG51bVRlcm1zID0gdGVybXMubGVuZ3RoO1xuICAgIHZhciBjb21iaW5lZCA9ICcnO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBudW1UZXJtczsgaSsrKSB7XG4gICAgICAgIHZhciB0ZXJtID0gdGVybXNbaV07XG4gICAgICAgIGlmICh2YWx1ZXMuaGFzT3duUHJvcGVydHkodGVybSkpIHtcbiAgICAgICAgICAgIGNvbWJpbmVkICs9IHZhbHVlc1t0ZXJtXSArIGRlbGltaXRlcjtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGlmIChjaG9wKSB7XG4gICAgICAgIGNvbWJpbmVkID0gY29tYmluZWQuc2xpY2UoMCwgLWNob3ApO1xuICAgIH1cblxuICAgIHJldHVybiBjb21iaW5lZDtcbn07XG5cbi8qXG4gICAgQ3JlYXRlIGEgZnVuY3Rpb24gc3RyaW5nXG5cbiAgICAnMjBweCcsICd0cmFuc2xhdGUnIC0+ICd0cmFuc2xhdGUoMjBweCknXG5cbiAgICBAcGFyYW0gW3N0cmluZ11cbiAgICBAcGFyYW0gW3N0cmluZ11cbiAgICBAcmV0dXJuIFtzdHJpbmddXG4qL1xudmFyIGNyZWF0ZUZ1bmN0aW9uU3RyaW5nID0gZXhwb3J0cy5jcmVhdGVGdW5jdGlvblN0cmluZyA9IGZ1bmN0aW9uICh2YWx1ZSwgcHJlZml4KSB7XG4gICAgcmV0dXJuIHByZWZpeCArICcoJyArIHZhbHVlICsgJyknO1xufTtcblxuLypcbiAgICBHZW5lcmF0ZSBjdXJyZW50IHRpbWVzdGFtcFxuICAgIFxuICAgIEByZXR1cm4gW3RpbWVzdGFtcF06IEN1cnJlbnQgVU5JWCB0aW1lc3RhbXBcbiovXG52YXIgY3VycmVudFRpbWUgPSBleHBvcnRzLmN1cnJlbnRUaW1lID0gSEFTX1BFUkZPUk1BTkNFX05PVyA/IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gcGVyZm9ybWFuY2Uubm93KCk7XG59IDogZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcbn07XG5cbi8qXG4gICAgU3BsaXQgY29sb3Igc3RyaW5nIGludG8gbWFwIG9mIGNvbG9yIHByb3BlcnRpZXNcblxuICAgIFwicmdiYSgyNTUsIDI1NSwgMjU1LCAwKVwiLCBbXCJSZWRcIiwgJ0dyZWVuXCIsIFwiQmx1ZVwiLCBcIkFscGhhXCJdXG5cbiAgICB7IFJlZDogMjU1Li4uIH1cbiovXG52YXIgZ2V0Q29sb3JWYWx1ZXMgPSBleHBvcnRzLmdldENvbG9yVmFsdWVzID0gZnVuY3Rpb24gKHZhbHVlLCBjb2xvclRlcm1zKSB7XG4gICAgdmFyIG51bUNvbG9yVGVybXMgPSBjb2xvclRlcm1zLmxlbmd0aDtcbiAgICB2YXIgY29sb3JWYWx1ZXMgPSB7fTtcbiAgICB2YXIgY29sb3JzID0gc3BsaXRDb21tYURlbGltaXRlZChnZXRWYWx1ZUZyb21GdW5jdGlvblN0cmluZyh2YWx1ZSkpO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBudW1Db2xvclRlcm1zOyBpKyspIHtcbiAgICAgICAgY29sb3JWYWx1ZXNbY29sb3JUZXJtc1tpXV0gPSBjb2xvcnNbaV0gIT09IHVuZGVmaW5lZCA/IGNvbG9yc1tpXSA6IDE7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbG9yVmFsdWVzO1xufTtcblxuLypcbiAgICBHZXQgdmFsdWUgZnJvbSBmdW5jdGlvbiBzdHJpbmdcblxuICAgIFwidHJhbnNsYXRlWCgyMHB4KVwiIC0+IFwiMjBweFwiXG4qL1xudmFyIGdldFZhbHVlRnJvbUZ1bmN0aW9uU3RyaW5nID0gZXhwb3J0cy5nZXRWYWx1ZUZyb21GdW5jdGlvblN0cmluZyA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgIHJldHVybiB2YWx1ZS5zdWJzdHJpbmcodmFsdWUuaW5kZXhPZignKCcpICsgMSwgdmFsdWUubGFzdEluZGV4T2YoJyknKSk7XG59O1xuXG4vKlxuICAgIENoZWNrIGlmIHR3byBvYmplY3RzIGhhdmUgY2hhbmdlZCBmcm9tIGVhY2ggb3RoZXJcbiAgICBcbiAgICBAcGFyYW0gW29iamVjdF06IElucHV0IEFcbiAgICBAcGFyYW0gW29iamVjdF06IElucHV0IEJcbiAgICBAcmV0dXJuIFtib29sZWFuXTogVHJ1ZSBpZiBkaWZmZXJlbnRcbiovXG52YXIgaGFzQ2hhbmdlZCA9IGV4cG9ydHMuaGFzQ2hhbmdlZCA9IGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgdmFyIGNoYW5nZWQgPSBmYWxzZTtcblxuICAgIGZvciAodmFyIGtleSBpbiBhKSB7XG4gICAgICAgIGlmIChhLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICAgIGlmIChoYXNQcm9wZXJ0eShiLCBrZXkpKSB7XG4gICAgICAgICAgICAgICAgaWYgKGFba2V5XSAhPT0gYltrZXldKSB7XG4gICAgICAgICAgICAgICAgICAgIGNoYW5nZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY2hhbmdlZCA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gY2hhbmdlZDtcbn07XG5cbi8qXG4gICAgQ2hlY2sgaWYgb2JqZWN0IGhhcyBwcm9wZXJ0eSBhbmQgaXQgaXNuJ3QgdW5kZWZpbmVkXG5cbiAgICBAcGFyYW0gW29iamVjdF1cbiAgICBAcGFyYW0gW3N0cmluZ11cbiAgICBAcmV0dXJuIFtib29sZWFuXVxuKi9cbnZhciBoYXNQcm9wZXJ0eSA9IGV4cG9ydHMuaGFzUHJvcGVydHkgPSBmdW5jdGlvbiAob2JqZWN0LCBwcm9wZXJ0eU5hbWUpIHtcbiAgICByZXR1cm4gb2JqZWN0Lmhhc093blByb3BlcnR5KHByb3BlcnR5TmFtZSkgJiYgb2JqZWN0W3Byb3BlcnR5TmFtZV0gIT09IHVuZGVmaW5lZDtcbn07XG5cbi8qXG4gICAgSXMgdXRpbHMgdmFyIGFuIGFycmF5ID8gXG4gICAgXG4gICAgQHBhcmFtOiBWYXJpYWJsZSB0byB0ZXN0XG4gICAgQHJldHVybiBbYm9vbGVhbl06IFJldHVybnMgdHJ1ZSBpZiB1dGlscy52YXJUeXBlID09PSAnQXJyYXknXG4qL1xudmFyIGlzQXJyYXkgPSBleHBvcnRzLmlzQXJyYXkgPSBmdW5jdGlvbiAoYXJyKSB7XG4gICAgcmV0dXJuIHZhclR5cGUoYXJyKSA9PT0gJ0FycmF5Jztcbn07XG5cbi8qXG4gICAgSXMgdXRpbHMgdmFyIGEgZnVuY3Rpb24gPyBcbiAgICBcbiAgICBAcGFyYW06IFZhcmlhYmxlIHRvIHRlc3RcbiAgICBAcmV0dXJuIFtib29sZWFuXTogUmV0dXJucyB0cnVlIGlmIHV0aWxzLnZhclR5cGUgPT09ICdGdW5jdGlvbidcbiovXG52YXIgaXNGdW5jID0gZXhwb3J0cy5pc0Z1bmMgPSBmdW5jdGlvbiAob2JqKSB7XG4gICAgcmV0dXJuIHZhclR5cGUob2JqKSA9PT0gJ0Z1bmN0aW9uJztcbn07XG5cbi8qXG4gICAgSXMgdXRpbHMgdmFyIGEgbnVtYmVyP1xuICAgIFxuICAgIEBwYXJhbTogVmFyaWFibGUgdG8gdGVzdFxuICAgIEByZXR1cm4gW2Jvb2xlYW5dOiBSZXR1cm5zIHRydWUgaWYgdHlwZW9mID09PSAnbnVtYmVyJ1xuKi9cbnZhciBpc051bSA9IGV4cG9ydHMuaXNOdW0gPSBmdW5jdGlvbiAobnVtKSB7XG4gICAgcmV0dXJuIHR5cGVvZiBudW0gPT09ICdudW1iZXInO1xufTtcblxuLypcbiAgICBJcyB1dGlscyB2YXIgYW4gb2JqZWN0P1xuICAgIFxuICAgIEBwYXJhbTogVmFyaWFibGUgdG8gdGVzdFxuICAgIEByZXR1cm4gW2Jvb2xlYW5dOiBSZXR1cm5zIHRydWUgaWYgdHlwZW9mID09PSAnb2JqZWN0J1xuKi9cbnZhciBpc09iaiA9IGV4cG9ydHMuaXNPYmogPSBmdW5jdGlvbiAob2JqKSB7XG4gICAgcmV0dXJuIHR5cGVvZiBvYmogPT09ICdvYmplY3QnO1xufTtcblxuLypcbiAgICBJcyB1dGlscyBhIHJlbGF0aXZlIHZhbHVlIGFzc2lnbm1lbnQ/XG4gICAgXG4gICAgQHBhcmFtIFtzdHJpbmddOiBWYXJpYWJsZSB0byB0ZXN0XG4gICAgQHJldHVybiBbYm9vbGVhbl06IElmIHV0aWxzIGxvb2tzIGxpa2UgYSByZWxhdGl2ZSB2YWx1ZSBhc3NpZ25tZW50XG4qL1xudmFyIGlzUmVsYXRpdmVWYWx1ZSA9IGV4cG9ydHMuaXNSZWxhdGl2ZVZhbHVlID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgcmV0dXJuIHZhbHVlICYmIHZhbHVlLmluZGV4T2YgJiYgdmFsdWUuaW5kZXhPZignPScpID4gMCA/IHRydWUgOiBmYWxzZTtcbn07XG5cbi8qXG4gICAgSXMgdXRpbHMgdmFyIGEgc3RyaW5nID8gXG4gICAgXG4gICAgQHBhcmFtOiBWYXJpYWJsZSB0byB0ZXN0XG4gICAgQHJldHVybiBbYm9vbGVhbl06IFJldHVybnMgdHJ1ZSBpZiB0eXBlb2Ygc3RyID09PSAnc3RyaW5nJ1xuKi9cbnZhciBpc1N0cmluZyA9IGV4cG9ydHMuaXNTdHJpbmcgPSBmdW5jdGlvbiAoc3RyKSB7XG4gICAgcmV0dXJuIHR5cGVvZiBzdHIgPT09ICdzdHJpbmcnO1xufTtcblxuLypcbiAgICBAcGFyYW0gW3N0cmluZyB8fCBOb2RlTGlzdF06XG4gICAgICAgIElmIHN0cmluZywgdHJlYXRlZCBhcyBzZWxlY3Rvci5cbiAgICAgICAgSWYgbm90LCB0cmVhdGVkIGFzIHByZWV4aXN0aW5nIE5vZGVMaXN0XG5cbiAgICBAcmV0dXJuIFtBcnJheV1cbiovXG52YXIgc2VsZWN0RG9tID0gZXhwb3J0cy5zZWxlY3REb20gPSBmdW5jdGlvbiAoc2VsZWN0b3IpIHtcbiAgICB2YXIgbm9kZXMgPSB0eXBlb2Ygc2VsZWN0b3IgPT09ICdzdHJpbmcnID8gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChzZWxlY3RvcikgOiBzZWxlY3RvcjtcbiAgICByZXR1cm4gbm9kZXMubGVuZ3RoID8gW10uc2xpY2UuY2FsbChub2RlcykgOiBbXS5wdXNoKG5vZGVzKTtcbn07XG5cbi8qXG4gICAgU3BsaXQgY29tbWEtZGVsaW1pdGVkIHN0cmluZ1xuXG4gICAgXCJmb28sYmFyXCIgLT4gW1wiZm9vXCIsIFwiYmFyXCJdXG5cbiAgICBAcGFyYW0gW3N0cmluZ11cbiAgICBAcmV0dXJuIFthcnJheV1cbiovXG52YXIgc3BsaXRDb21tYURlbGltaXRlZCA9IGV4cG9ydHMuc3BsaXRDb21tYURlbGltaXRlZCA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgIHJldHVybiBpc1N0cmluZyh2YWx1ZSkgPyB2YWx1ZS5zcGxpdCgvLFxccyovKSA6IFt2YWx1ZV07XG59O1xuXG4vKlxuICAgIFNwbGl0IHNwYWNlLWRlbGltaXRlZCBzdHJpbmdcblxuICAgIFwiZm9vIGJhclwiIC0+IFtcImZvb1wiLCBcImJhclwiXVxuXG4gICAgQHBhcmFtIFtzdHJpbmddXG4gICAgQHJldHVybiBbYXJyYXldXG4qL1xudmFyIHNwbGl0U3BhY2VEZWxpbWl0ZWQgPSBleHBvcnRzLnNwbGl0U3BhY2VEZWxpbWl0ZWQgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICByZXR1cm4gaXNTdHJpbmcodmFsdWUpID8gdmFsdWUuc3BsaXQoJyAnKSA6IFt2YWx1ZV07XG59O1xuXG4vKlxuICAgIFNwbGl0IGEgdmFsdWUgaW50byBhIHZhbHVlL3VuaXQgb2JqZWN0XG4gICAgXG4gICAgICAgIFwiMjAwcHhcIiAtPiB7IHZhbHVlOiAyMDAsIHVuaXQ6IFwicHhcIiB9XG4gICAgICAgIFxuICAgIEBwYXJhbSBbc3RyaW5nXTogVmFsdWUgdG8gc3BsaXRcbiAgICBAcmV0dXJuIFtvYmplY3RdOiBPYmplY3Qgd2l0aCB2YWx1ZSBhbmQgdW5pdCBwcm9wc1xuKi9cbnZhciBzcGxpdFZhbHVlVW5pdCA9IGV4cG9ydHMuc3BsaXRWYWx1ZVVuaXQgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICB2YXIgc3BsaXRWYWwgPSB2YWx1ZS5tYXRjaCgvKC0/XFxkKlxcLj9cXGQqKSguKikvKTtcblxuICAgIHJldHVybiB7XG4gICAgICAgIHZhbHVlOiBwYXJzZUZsb2F0KHNwbGl0VmFsWzFdKSxcbiAgICAgICAgdW5pdDogc3BsaXRWYWxbMl1cbiAgICB9O1xufTtcblxuLypcbiAgICBDb252ZXJ0IG51bWJlciB0byB4IGRlY2ltYWwgcGxhY2VzXG5cbiAgICBAcGFyYW0gW251bWJlcl1cbiAgICBAcGFyYW0gW251bWJlcl1cbiAgICBAcmV0dXJuIFtudW1iZXJdXG4qL1xudmFyIHRvRGVjaW1hbCA9IGV4cG9ydHMudG9EZWNpbWFsID0gZnVuY3Rpb24gKG51bSkge1xuICAgIHZhciBwcmVjaXNpb24gPSBhcmd1bWVudHMubGVuZ3RoIDw9IDEgfHwgYXJndW1lbnRzWzFdID09PSB1bmRlZmluZWQgPyAyIDogYXJndW1lbnRzWzFdO1xuXG4gICAgcHJlY2lzaW9uID0gTWF0aC5wb3coMTAsIHByZWNpc2lvbik7XG4gICAgcmV0dXJuIE1hdGgucm91bmQobnVtICogcHJlY2lzaW9uKSAvIHByZWNpc2lvbjtcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5OeVl5OXBibU12ZFhScGJITXVhbk1pWFN3aWJtRnRaWE1pT2x0ZExDSnRZWEJ3YVc1bmN5STZJanM3TzBGQlFVRXNTVUZCVFN4eFFrRkJjVUlzYVVKQlFYSkNPMEZCUTA0c1NVRkJUU3h0UWtGQmJVSXNUMEZCYmtJN1FVRkRUaXhKUVVGTkxITkNRVUYxUWl4UFFVRlBMRmRCUVZBc1MwRkJkVUlzVjBGQmRrSXNTVUZCYzBNc1dVRkJXU3hIUVVGYU96czdPenM3T3p0QlFWRnVSU3hKUVVGTkxGVkJRVlU3VjBGQldTeFBRVUZQTEZOQlFWQXNRMEZCYVVJc1VVRkJha0lzUTBGQk1FSXNTVUZCTVVJc1EwRkJLMElzVVVGQkwwSXNSVUZCZVVNc1MwRkJla01zUTBGQkswTXNRMEZCTDBNc1JVRkJhMFFzUTBGQlF5eERRVUZFTzBOQlFUbEVPenM3T3pzN096dEJRVkZVTEVsQlFVMHNiME5CUVdNc1ZVRkJReXhOUVVGRU8xZEJRVmtzVDBGQlR5eFBRVUZRTEVOQlFXVXNhMEpCUVdZc1JVRkJiVU1zWjBKQlFXNURMRVZCUVhGRUxGZEJRWEpFTzBOQlFWbzdPenM3T3pzN096dEJRVk53UWl4SlFVRk5MRzlFUVVGelFpeFZRVUZETEZsQlFVUXNSVUZCYTBJN1FVRkRha1FzVVVGQlRTeHJRa0ZCYTBJc1lVRkJZU3hOUVVGaUxFTkJSSGxDTzBGQlJXcEVMRkZCUVVrc1NVRkJTU3hEUVVGS096czdPenM3T3p0QlFVWTJReXhYUVZVeFF5eFZRVUZETEVOQlFVUXNSVUZCU1N4SFFVRktMRVZCUVZNc1EwRkJWQ3hGUVVGbE8wRkJRMnhDTEdGQlFVc3NTVUZCU1N4RFFVRktMRVZCUVU4c1NVRkJTU3hsUVVGS0xFVkJRWEZDTEVkQlFXcERMRVZCUVhORE8wRkJRMnhETEdkQ1FVRkpMR0ZCUVdFc1EwRkJZaXhGUVVGblFpeERRVUZvUWl4RlFVRnRRaXhIUVVGdVFpeEZRVUYzUWl4RFFVRjRRaXhEUVVGS0xFTkJSR3RETzFOQlFYUkRPenRCUVVsQkxHVkJRVThzUTBGQlVDeERRVXhyUWp0TFFVRm1MRU5CVmpCRE8wTkJRV3hDT3p0QlFXMUNOVUlzU1VGQlRTdzBRMEZCYTBJc1ZVRkJReXhOUVVGRUxFVkJRVk1zUzBGQlZDeEZRVUZuUWl4VFFVRm9RaXhGUVVFeVFpeEpRVUV6UWl4RlFVRnZRenRCUVVNdlJDeFJRVUZOTEZkQlFWY3NUVUZCVFN4TlFVRk9MRU5CUkRoRE8wRkJSUzlFTEZGQlFVa3NWMEZCVnl4RlFVRllMRU5CUmpKRU96dEJRVWt2UkN4VFFVRkxMRWxCUVVrc1NVRkJTU3hEUVVGS0xFVkJRVThzU1VGQlNTeFJRVUZLTEVWQlFXTXNSMEZCT1VJc1JVRkJiVU03UVVGREwwSXNXVUZCVFN4UFFVRlBMRTFCUVUwc1EwRkJUaXhEUVVGUUxFTkJSSGxDTzBGQlJTOUNMRmxCUVVrc1QwRkJUeXhqUVVGUUxFTkJRWE5DTEVsQlFYUkNMRU5CUVVvc1JVRkJhVU03UVVGRE4wSXNkMEpCUVZrc1QwRkJUeXhKUVVGUUxFbEJRV1VzVTBGQlppeERRVVJwUWp0VFFVRnFRenRMUVVaS096dEJRVTlCTEZGQlFVa3NTVUZCU2l4RlFVRlZPMEZCUTA0c2JVSkJRVmNzVTBGQlV5eExRVUZVTEVOQlFXVXNRMEZCWml4RlFVRnJRaXhEUVVGRExFbEJRVVFzUTBGQk4wSXNRMEZFVFR0TFFVRldPenRCUVVsQkxGZEJRVThzVVVGQlVDeERRV1lyUkR0RFFVRndRenM3T3pzN096czdPenM3UVVFeVFuaENMRWxCUVUwc2MwUkJRWFZDTEZWQlFVTXNTMEZCUkN4RlFVRlJMRTFCUVZJN1YwRkJjMElzWlVGQlZUdERRVUZvUXpzN096czdPenRCUVU4M1FpeEpRVUZOTEc5RFFVRmpMSE5DUVVGelFqdFhRVUZOTEZsQlFWa3NSMEZCV2p0RFFVRk9MRWRCUVRCQ08xZEJRVTBzU1VGQlNTeEpRVUZLTEVkQlFWY3NUMEZCV0R0RFFVRk9PenM3T3pzN096czdRVUZUY0VVc1NVRkJUU3d3UTBGQmFVSXNWVUZCUXl4TFFVRkVMRVZCUVZFc1ZVRkJVaXhGUVVGMVFqdEJRVU5xUkN4UlFVRk5MR2RDUVVGblFpeFhRVUZYTEUxQlFWZ3NRMEZFTWtJN1FVRkZha1FzVVVGQlRTeGpRVUZqTEVWQlFXUXNRMEZHTWtNN1FVRkhha1FzVVVGQlRTeFRRVUZUTEc5Q1FVRnZRaXd5UWtGQk1rSXNTMEZCTTBJc1EwRkJjRUlzUTBGQlZDeERRVWd5UXpzN1FVRkxha1FzVTBGQlN5eEpRVUZKTEVsQlFVa3NRMEZCU2l4RlFVRlBMRWxCUVVrc1lVRkJTaXhGUVVGdFFpeEhRVUZ1UXl4RlFVRjNRenRCUVVOd1F5eHZRa0ZCV1N4WFFVRlhMRU5CUVZnc1EwRkJXaXhKUVVFMlFpeE5RVUZETEVOQlFVOHNRMEZCVUN4TlFVRmpMRk5CUVdRc1IwRkJNa0lzVDBGQlR5eERRVUZRTEVOQlFUVkNMRWRCUVhkRExFTkJRWGhETEVOQlJFODdTMEZCZUVNN08wRkJTVUVzVjBGQlR5eFhRVUZRTEVOQlZHbEVPME5CUVhaQ096czdPenM3TzBGQmFVSjJRaXhKUVVGTkxHdEZRVUUyUWl4VlFVRkRMRXRCUVVRN1YwRkJWeXhOUVVGTkxGTkJRVTRzUTBGQlowSXNUVUZCVFN4UFFVRk9MRU5CUVdNc1IwRkJaQ3hKUVVGeFFpeERRVUZ5UWl4RlFVRjNRaXhOUVVGTkxGZEJRVTRzUTBGQmEwSXNSMEZCYkVJc1EwRkJlRU03UTBGQldEczdPenM3T3pzN08wRkJVMjVETEVsQlFVMHNhME5CUVdFc1ZVRkJReXhEUVVGRUxFVkJRVWtzUTBGQlNpeEZRVUZWTzBGQlEyaERMRkZCUVVrc1ZVRkJWU3hMUVVGV0xFTkJSRFJDT3p0QlFVZG9ReXhUUVVGTExFbEJRVWtzUjBGQlNpeEpRVUZYTEVOQlFXaENMRVZCUVcxQ08wRkJRMllzV1VGQlNTeEZRVUZGTEdOQlFVWXNRMEZCYVVJc1IwRkJha0lzUTBGQlNpeEZRVUV5UWp0QlFVTjJRaXhuUWtGQlNTeFpRVUZaTEVOQlFWb3NSVUZCWlN4SFFVRm1MRU5CUVVvc1JVRkJlVUk3UVVGRGNrSXNiMEpCUVVrc1JVRkJSU3hIUVVGR0xFMUJRVmNzUlVGQlJTeEhRVUZHTEVOQlFWZ3NSVUZCYlVJN1FVRkRia0lzT0VKQlFWVXNTVUZCVml4RFFVUnRRanRwUWtGQmRrSTdZVUZFU2l4TlFVbFBPMEZCUTBnc01FSkJRVlVzU1VGQlZpeERRVVJITzJGQlNsQTdVMEZFU2p0TFFVUktPenRCUVZsQkxGZEJRVThzVDBGQlVDeERRV1puUXp0RFFVRldPenM3T3pzN096czdRVUY1UW01Q0xFbEJRVTBzYjBOQlFXTXNWVUZCUXl4TlFVRkVMRVZCUVZNc1dVRkJWRHRYUVVFd1FpeFBRVUZQTEdOQlFWQXNRMEZCYzBJc1dVRkJkRUlzUzBGQmRVTXNUMEZCVHl4WlFVRlFMRTFCUVhsQ0xGTkJRWHBDTzBOQlFXcEZPenM3T3pzN096dEJRVkZ3UWl4SlFVRk5MRFJDUVVGVkxGVkJRVU1zUjBGQlJEdFhRVUZUTEZGQlFWRXNSMEZCVWl4TlFVRnBRaXhQUVVGcVFqdERRVUZVT3pzN096czdPenRCUVZGb1FpeEpRVUZOTERCQ1FVRlRMRlZCUVVNc1IwRkJSRHRYUVVGVExGRkJRVkVzUjBGQlVpeE5RVUZwUWl4VlFVRnFRanREUVVGVU96czdPenM3T3p0QlFWRm1MRWxCUVUwc2QwSkJRVkVzVlVGQlF5eEhRVUZFTzFkQlFWTXNUMEZCVHl4SFFVRlFMRXRCUVdVc1VVRkJaanREUVVGVU96czdPenM3T3p0QlFWRmtMRWxCUVUwc2QwSkJRVkVzVlVGQlF5eEhRVUZFTzFkQlFWTXNUMEZCVHl4SFFVRlFMRXRCUVdVc1VVRkJaanREUVVGVU96czdPenM3T3p0QlFWRmtMRWxCUVUwc05FTkJRV3RDTEZWQlFVTXNTMEZCUkR0WFFVRlhMRXRCUVVNc1NVRkJVeXhOUVVGTkxFOUJRVTRzU1VGQmFVSXNUVUZCVFN4UFFVRk9MRU5CUVdNc1IwRkJaQ3hKUVVGeFFpeERRVUZ5UWl4SFFVRXdRaXhKUVVGeVJDeEhRVUUwUkN4TFFVRTFSRHREUVVGWU96czdPenM3T3p0QlFWRjRRaXhKUVVGTkxEaENRVUZYTEZWQlFVTXNSMEZCUkR0WFFVRlRMRTlCUVU4c1IwRkJVQ3hMUVVGbExGRkJRV1k3UTBGQlZEczdPenM3T3pzN08wRkJVMnBDTEVsQlFVMHNaME5CUVZrc1ZVRkJReXhSUVVGRUxFVkJRV003UVVGRGJrTXNVVUZCVFN4UlFVRlJMRTlCUVZFc1VVRkJVQ3hMUVVGdlFpeFJRVUZ3UWl4SFFVRm5ReXhUUVVGVExHZENRVUZVTEVOQlFUQkNMRkZCUVRGQ0xFTkJRV3BETEVkQlFYVkZMRkZCUVhaRkxFTkJSSEZDTzBGQlJXNURMRmRCUVU4c1MwRkJReXhEUVVGTkxFMUJRVTRzUjBGQlowSXNSMEZCUnl4TFFVRklMRU5CUVZNc1NVRkJWQ3hEUVVGakxFdEJRV1FzUTBGQmFrSXNSMEZCZDBNc1IwRkJSeXhKUVVGSUxFTkJRVkVzUzBGQlVpeERRVUY0UXl4RFFVWTBRanREUVVGa096czdPenM3T3pzN08wRkJZV3hDTEVsQlFVMHNiMFJCUVhOQ0xGVkJRVU1zUzBGQlJEdFhRVUZYTEZOQlFWTXNTMEZCVkN4SlFVRnJRaXhOUVVGTkxFdEJRVTRzUTBGQldTeE5RVUZhTEVOQlFXeENMRWRCUVhkRExFTkJRVU1zUzBGQlJDeERRVUY0UXp0RFFVRllPenM3T3pzN096czdPMEZCVlRWQ0xFbEJRVTBzYjBSQlFYTkNMRlZCUVVNc1MwRkJSRHRYUVVGWExGTkJRVk1zUzBGQlZDeEpRVUZyUWl4TlFVRk5MRXRCUVU0c1EwRkJXU3hIUVVGYUxFTkJRV3hDTEVkQlFYRkRMRU5CUVVNc1MwRkJSQ3hEUVVGeVF6dERRVUZZT3pzN096czdPenM3TzBGQlZUVkNMRWxCUVUwc01FTkJRV2xDTEZWQlFVTXNTMEZCUkN4RlFVRlhPMEZCUTNKRExGRkJRVTBzVjBGQlZ5eE5RVUZOTEV0QlFVNHNRMEZCV1N4dFFrRkJXaXhEUVVGWUxFTkJSQ3RDT3p0QlFVZHlReXhYUVVGUE8wRkJRMGdzWlVGQlR5eFhRVUZYTEZOQlFWTXNRMEZCVkN4RFFVRllMRU5CUVZBN1FVRkRRU3hqUVVGUExGTkJRVk1zUTBGQlZDeERRVUZRTzB0QlJrb3NRMEZJY1VNN1EwRkJXRHM3T3pzN096czdPMEZCWjBKMlFpeEpRVUZOTEdkRFFVRlpMRlZCUVVNc1IwRkJSQ3hGUVVGM1FqdFJRVUZzUWl4clJVRkJXU3hwUWtGQlRUczdRVUZETjBNc2VVSkJRVmtzU1VGQlRTeFZRVUZzUWl4RFFVUTJRenRCUVVVM1F5eFhRVUZQTEV0QlFVc3NTMEZCVEN4RFFVRlhMRTFCUVUwc1UwRkJUaXhEUVVGWUxFZEJRVGhDTEZOQlFUbENMRU5CUm5ORE8wTkJRWGhDSWl3aVptbHNaU0k2SW5WMGFXeHpMbXB6SWl3aWMyOTFjbU5sVW05dmRDSTZJaTlWYzJWeWN5OU5ZWFIwTDFOcGRHVnpMM0J2Y0cxdmRHbHZiaUlzSW5OdmRYSmpaWE5EYjI1MFpXNTBJanBiSW1OdmJuTjBJRU5CVFVWTVgwTkJVMFZmVUVGVVZFVlNUaUE5SUM4b1cyRXRlbDBwS0Z0QkxWcGRLUzluTzF4dVkyOXVjM1FnVWtWUVRFRkRSVjlVUlUxUVRFRlVSU0E5SUNja01TMGtNaWM3WEc1amIyNXpkQ0JJUVZOZlVFVlNSazlTVFVGT1EwVmZUazlYSUQwZ0tIUjVjR1Z2WmlCd1pYSm1iM0p0WVc1alpTQWhQVDBnSjNWdVpHVm1hVzVsWkNjZ0ppWWdjR1Z5Wm05eWJXRnVZMlV1Ym05M0tUdGNibHh1THlwY2JpQWdJQ0JIWlhRZ2RtRnlJSFI1Y0dVZ1lYTWdjM1J5YVc1blhHNGdJQ0FnWEc0Z0lDQWdRSEJoY21GdE9pQldZWEpwWVdKc1pTQjBieUIwWlhOMFhHNGdJQ0FnUUhKbGRIVnliaUJiYzNSeWFXNW5YVG9nVW1WMGRYSnVjeXdnWm05eUlHbHVjM1JoYm1ObElDZFBZbXBsWTNRbklHbG1JRnR2WW1wbFkzUWdUMkpxWldOMFhWeHVLaTljYm1OdmJuTjBJSFpoY2xSNWNHVWdQU0IyWVhKcFlXSnNaU0E5UGlCUFltcGxZM1F1Y0hKdmRHOTBlWEJsTG5SdlUzUnlhVzVuTG1OaGJHd29kbUZ5YVdGaWJHVXBMbk5zYVdObEtEZ3NJQzB4S1R0Y2JseHVMeXBjYmlBZ0lDQkRiMjUyWlhKMElHTmhiV1ZzUTJGelpTQjBieUJrWVhOb0xXTmhjMlZjYmx4dUlDQWdJRUJ3WVhKaGJTQmJjM1J5YVc1blhWeHVJQ0FnSUVCeVpYUjFjbTRnVzNOMGNtbHVaMTFjYmlvdlhHNWxlSEJ2Y25RZ1kyOXVjM1FnWTJGdFpXeFViMFJoYzJnZ1BTQW9jM1J5YVc1bktTQTlQaUJ6ZEhKcGJtY3VjbVZ3YkdGalpTaERRVTFGVEY5RFFWTkZYMUJCVkZSRlVrNHNJRkpGVUV4QlEwVmZWRVZOVUV4QlZFVXBMblJ2VEc5M1pYSkRZWE5sS0NrN1hHNWNiaThxWEc0Z0lDQWdRMjl0WW1sdVpTQjBjbUZ1YzJadmNtMWxjbk1nYVc1MGJ5QnZibVVnWm5WdVkzUnBiMjRnZEdoaGRDQmpZV3hzY3lCbGRtVnllVnh1SUNBZ0lIUnlZVzV6Wm05eWJXVnlJR2x1SUhSb1pTQmhjbkpoZVNCaGJtUWdjbVYwZFhKdWN5QjBhR1VnY21WemRXeDBYRzVjYmlBZ0lDQkFjR0Z5WVcwZ1cyRnljbUY1WFZ4dUlDQWdJRUJ5WlhSMWNtNGdXMloxYm1OMGFXOXVYVnh1S2k5Y2JtVjRjRzl5ZENCamIyNXpkQ0JqYjIxaWFXNWxWSEpoYm5ObWIzSnRaWEp6SUQwZ0tIUnlZVzV6Wm05eWJXVnljeWtnUFQ0Z2UxeHVJQ0FnSUdOdmJuTjBJRzUxYlZSeVlXNXpabTl5YldWeWN5QTlJSFJ5WVc1elptOXliV1Z5Y3k1c1pXNW5kR2c3WEc0Z0lDQWdiR1YwSUdrZ1BTQXdPMXh1WEc0Z0lDQWdMeXBjYmlBZ0lDQWdJQ0FnUUhCaGNtRnRJRnR1ZFcxaVpYSmRYRzRnSUNBZ0lDQWdJRUJ3WVhKaGJTQmJjM1J5YVc1blhWeHVJQ0FnSUNBZ0lDQkFjR0Z5WVcwZ1cwRmpkR2x2YmwxY2JpQWdJQ0FnSUNBZ1FISmxkSFZ5YmlCYmJuVnRZbVZ5WFZ4dUlDQWdJQ292WEc0Z0lDQWdjbVYwZFhKdUlDaDJMQ0JyWlhrc0lHRXBJRDArSUh0Y2JpQWdJQ0FnSUNBZ1ptOXlJQ2hwSUQwZ01Ec2dhU0ErSUc1MWJWUnlZVzV6Wm05eWJXVnljenNnYVNzcktTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNCMklEMGdkSEpoYm5ObWIzSnRaWEp6VzJsZEtIWXNJR3RsZVN3Z1lTazdYRzRnSUNBZ0lDQWdJSDFjYmx4dUlDQWdJQ0FnSUNCeVpYUjFjbTRnZGp0Y2JpQWdJQ0I5TzF4dWZUdGNibHh1Wlhod2IzSjBJR052Ym5OMElHTnlaV0YwWlVSbGJHbHRhWFJsWkNBOUlDaDJZV3gxWlhNc0lIUmxjbTF6TENCa1pXeHBiV2wwWlhJc0lHTm9iM0FwSUQwK0lIdGNiaUFnSUNCamIyNXpkQ0J1ZFcxVVpYSnRjeUE5SUhSbGNtMXpMbXhsYm1kMGFEdGNiaUFnSUNCc1pYUWdZMjl0WW1sdVpXUWdQU0FuSnp0Y2JseHVJQ0FnSUdadmNpQW9iR1YwSUdrZ1BTQXdPeUJwSUR3Z2JuVnRWR1Z5YlhNN0lHa3JLeWtnZTF4dUlDQWdJQ0FnSUNCamIyNXpkQ0IwWlhKdElEMGdkR1Z5YlhOYmFWMDdYRzRnSUNBZ0lDQWdJR2xtSUNoMllXeDFaWE11YUdGelQzZHVVSEp2Y0dWeWRIa29kR1Z5YlNrcElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUdOdmJXSnBibVZrSUNzOUlIWmhiSFZsYzF0MFpYSnRYU0FySUdSbGJHbHRhWFJsY2p0Y2JpQWdJQ0FnSUNBZ2ZWeHVJQ0FnSUgxY2JseHVJQ0FnSUdsbUlDaGphRzl3S1NCN1hHNGdJQ0FnSUNBZ0lHTnZiV0pwYm1Wa0lEMGdZMjl0WW1sdVpXUXVjMnhwWTJVb01Dd2dMV05vYjNBcE8xeHVJQ0FnSUgxY2JseHVJQ0FnSUhKbGRIVnliaUJqYjIxaWFXNWxaRHRjYm4wN1hHNWNiaThxWEc0Z0lDQWdRM0psWVhSbElHRWdablZ1WTNScGIyNGdjM1J5YVc1blhHNWNiaUFnSUNBbk1qQndlQ2NzSUNkMGNtRnVjMnhoZEdVbklDMCtJQ2QwY21GdWMyeGhkR1VvTWpCd2VDa25YRzVjYmlBZ0lDQkFjR0Z5WVcwZ1czTjBjbWx1WjExY2JpQWdJQ0JBY0dGeVlXMGdXM04wY21sdVoxMWNiaUFnSUNCQWNtVjBkWEp1SUZ0emRISnBibWRkWEc0cUwxeHVaWGh3YjNKMElHTnZibk4wSUdOeVpXRjBaVVoxYm1OMGFXOXVVM1J5YVc1bklEMGdLSFpoYkhWbExDQndjbVZtYVhncElEMCtJR0FrZTNCeVpXWnBlSDBvSkh0MllXeDFaWDBwWUR0Y2JseHVMeXBjYmlBZ0lDQkhaVzVsY21GMFpTQmpkWEp5Wlc1MElIUnBiV1Z6ZEdGdGNGeHVJQ0FnSUZ4dUlDQWdJRUJ5WlhSMWNtNGdXM1JwYldWemRHRnRjRjA2SUVOMWNuSmxiblFnVlU1SldDQjBhVzFsYzNSaGJYQmNiaW92WEc1bGVIQnZjblFnWTI5dWMzUWdZM1Z5Y21WdWRGUnBiV1VnUFNCSVFWTmZVRVZTUms5U1RVRk9RMFZmVGs5WElEOGdLQ2tnUFQ0Z2NHVnlabTl5YldGdVkyVXVibTkzS0NrZ09pQW9LU0E5UGlCdVpYY2dSR0YwWlNncExtZGxkRlJwYldVb0tUdGNibHh1THlwY2JpQWdJQ0JUY0d4cGRDQmpiMnh2Y2lCemRISnBibWNnYVc1MGJ5QnRZWEFnYjJZZ1kyOXNiM0lnY0hKdmNHVnlkR2xsYzF4dVhHNGdJQ0FnWENKeVoySmhLREkxTlN3Z01qVTFMQ0F5TlRVc0lEQXBYQ0lzSUZ0Y0lsSmxaRndpTENBblIzSmxaVzVjSWl3Z1hDSkNiSFZsWENJc0lGd2lRV3h3YUdGY0lsMWNibHh1SUNBZ0lIc2dVbVZrT2lBeU5UVXVMaTRnZlZ4dUtpOWNibVY0Y0c5eWRDQmpiMjV6ZENCblpYUkRiMnh2Y2xaaGJIVmxjeUE5SUNoMllXeDFaU3dnWTI5c2IzSlVaWEp0Y3lrZ1BUNGdlMXh1SUNBZ0lHTnZibk4wSUc1MWJVTnZiRzl5VkdWeWJYTWdQU0JqYjJ4dmNsUmxjbTF6TG14bGJtZDBhRHRjYmlBZ0lDQmpiMjV6ZENCamIyeHZjbFpoYkhWbGN5QTlJSHQ5TzF4dUlDQWdJR052Ym5OMElHTnZiRzl5Y3lBOUlITndiR2wwUTI5dGJXRkVaV3hwYldsMFpXUW9aMlYwVm1Gc2RXVkdjbTl0Um5WdVkzUnBiMjVUZEhKcGJtY29kbUZzZFdVcEtUdGNibHh1SUNBZ0lHWnZjaUFvYkdWMElHa2dQU0F3T3lCcElEd2diblZ0UTI5c2IzSlVaWEp0Y3pzZ2FTc3JLU0I3WEc0Z0lDQWdJQ0FnSUdOdmJHOXlWbUZzZFdWelcyTnZiRzl5VkdWeWJYTmJhVjFkSUQwZ0tHTnZiRzl5YzF0cFhTQWhQVDBnZFc1a1pXWnBibVZrS1NBL0lHTnZiRzl5YzF0cFhTQTZJREU3WEc0Z0lDQWdmVnh1WEc0Z0lDQWdjbVYwZFhKdUlHTnZiRzl5Vm1Gc2RXVnpPMXh1ZlR0Y2JseHVMeXBjYmlBZ0lDQkhaWFFnZG1Gc2RXVWdabkp2YlNCbWRXNWpkR2x2YmlCemRISnBibWRjYmx4dUlDQWdJRndpZEhKaGJuTnNZWFJsV0NneU1IQjRLVndpSUMwK0lGd2lNakJ3ZUZ3aVhHNHFMMXh1Wlhod2IzSjBJR052Ym5OMElHZGxkRlpoYkhWbFJuSnZiVVoxYm1OMGFXOXVVM1J5YVc1bklEMGdLSFpoYkhWbEtTQTlQaUIyWVd4MVpTNXpkV0p6ZEhKcGJtY29kbUZzZFdVdWFXNWtaWGhQWmlnbktDY3BJQ3NnTVN3Z2RtRnNkV1V1YkdGemRFbHVaR1Y0VDJZb0p5a25LU2s3WEc1Y2JpOHFYRzRnSUNBZ1EyaGxZMnNnYVdZZ2RIZHZJRzlpYW1WamRITWdhR0YyWlNCamFHRnVaMlZrSUdaeWIyMGdaV0ZqYUNCdmRHaGxjbHh1SUNBZ0lGeHVJQ0FnSUVCd1lYSmhiU0JiYjJKcVpXTjBYVG9nU1c1d2RYUWdRVnh1SUNBZ0lFQndZWEpoYlNCYmIySnFaV04wWFRvZ1NXNXdkWFFnUWx4dUlDQWdJRUJ5WlhSMWNtNGdXMkp2YjJ4bFlXNWRPaUJVY25WbElHbG1JR1JwWm1abGNtVnVkRnh1S2k5Y2JtVjRjRzl5ZENCamIyNXpkQ0JvWVhORGFHRnVaMlZrSUQwZ0tHRXNJR0lwSUQwK0lIdGNiaUFnSUNCc1pYUWdZMmhoYm1kbFpDQTlJR1poYkhObE8xeHVYRzRnSUNBZ1ptOXlJQ2hzWlhRZ2EyVjVJR2x1SUdFcElIdGNiaUFnSUNBZ0lDQWdhV1lnS0dFdWFHRnpUM2R1VUhKdmNHVnlkSGtvYTJWNUtTa2dlMXh1SUNBZ0lDQWdJQ0FnSUNBZ2FXWWdLR2hoYzFCeWIzQmxjblI1S0dJc0lHdGxlU2twSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCcFppQW9ZVnRyWlhsZElDRTlQU0JpVzJ0bGVWMHBJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ1kyaGhibWRsWkNBOUlIUnlkV1U3WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnZlZ4dUlDQWdJQ0FnSUNBZ0lDQWdmU0JsYkhObElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQmphR0Z1WjJWa0lEMGdkSEoxWlR0Y2JpQWdJQ0FnSUNBZ0lDQWdJSDFjYmlBZ0lDQWdJQ0FnZlZ4dUlDQWdJSDFjYmx4dUlDQWdJSEpsZEhWeWJpQmphR0Z1WjJWa08xeHVmVHRjYmx4dUx5cGNiaUFnSUNCRGFHVmpheUJwWmlCdlltcGxZM1FnYUdGeklIQnliM0JsY25SNUlHRnVaQ0JwZENCcGMyNG5kQ0IxYm1SbFptbHVaV1JjYmx4dUlDQWdJRUJ3WVhKaGJTQmJiMkpxWldOMFhWeHVJQ0FnSUVCd1lYSmhiU0JiYzNSeWFXNW5YVnh1SUNBZ0lFQnlaWFIxY200Z1cySnZiMnhsWVc1ZFhHNHFMMXh1Wlhod2IzSjBJR052Ym5OMElHaGhjMUJ5YjNCbGNuUjVJRDBnS0c5aWFtVmpkQ3dnY0hKdmNHVnlkSGxPWVcxbEtTQTlQaUJ2WW1wbFkzUXVhR0Z6VDNkdVVISnZjR1Z5ZEhrb2NISnZjR1Z5ZEhsT1lXMWxLU0FtSmlCdlltcGxZM1JiY0hKdmNHVnlkSGxPWVcxbFhTQWhQVDBnZFc1a1pXWnBibVZrTzF4dVhHNHZLbHh1SUNBZ0lFbHpJSFYwYVd4eklIWmhjaUJoYmlCaGNuSmhlU0EvSUZ4dUlDQWdJRnh1SUNBZ0lFQndZWEpoYlRvZ1ZtRnlhV0ZpYkdVZ2RHOGdkR1Z6ZEZ4dUlDQWdJRUJ5WlhSMWNtNGdXMkp2YjJ4bFlXNWRPaUJTWlhSMWNtNXpJSFJ5ZFdVZ2FXWWdkWFJwYkhNdWRtRnlWSGx3WlNBOVBUMGdKMEZ5Y21GNUoxeHVLaTljYm1WNGNHOXlkQ0JqYjI1emRDQnBjMEZ5Y21GNUlEMGdLR0Z5Y2lrZ1BUNGdkbUZ5Vkhsd1pTaGhjbklwSUQwOVBTQW5RWEp5WVhrbk8xeHVYRzR2S2x4dUlDQWdJRWx6SUhWMGFXeHpJSFpoY2lCaElHWjFibU4wYVc5dUlEOGdYRzRnSUNBZ1hHNGdJQ0FnUUhCaGNtRnRPaUJXWVhKcFlXSnNaU0IwYnlCMFpYTjBYRzRnSUNBZ1FISmxkSFZ5YmlCYlltOXZiR1ZoYmwwNklGSmxkSFZ5Ym5NZ2RISjFaU0JwWmlCMWRHbHNjeTUyWVhKVWVYQmxJRDA5UFNBblJuVnVZM1JwYjI0blhHNHFMMXh1Wlhod2IzSjBJR052Ym5OMElHbHpSblZ1WXlBOUlDaHZZbW9wSUQwK0lIWmhjbFI1Y0dVb2IySnFLU0E5UFQwZ0owWjFibU4wYVc5dUp6dGNibHh1THlwY2JpQWdJQ0JKY3lCMWRHbHNjeUIyWVhJZ1lTQnVkVzFpWlhJL1hHNGdJQ0FnWEc0Z0lDQWdRSEJoY21GdE9pQldZWEpwWVdKc1pTQjBieUIwWlhOMFhHNGdJQ0FnUUhKbGRIVnliaUJiWW05dmJHVmhibDA2SUZKbGRIVnlibk1nZEhKMVpTQnBaaUIwZVhCbGIyWWdQVDA5SUNkdWRXMWlaWEluWEc0cUwxeHVaWGh3YjNKMElHTnZibk4wSUdselRuVnRJRDBnS0c1MWJTa2dQVDRnZEhsd1pXOW1JRzUxYlNBOVBUMGdKMjUxYldKbGNpYzdYRzVjYmk4cVhHNGdJQ0FnU1hNZ2RYUnBiSE1nZG1GeUlHRnVJRzlpYW1WamREOWNiaUFnSUNCY2JpQWdJQ0JBY0dGeVlXMDZJRlpoY21saFlteGxJSFJ2SUhSbGMzUmNiaUFnSUNCQWNtVjBkWEp1SUZ0aWIyOXNaV0Z1WFRvZ1VtVjBkWEp1Y3lCMGNuVmxJR2xtSUhSNWNHVnZaaUE5UFQwZ0oyOWlhbVZqZENkY2Jpb3ZYRzVsZUhCdmNuUWdZMjl1YzNRZ2FYTlBZbW9nUFNBb2IySnFLU0E5UGlCMGVYQmxiMllnYjJKcUlEMDlQU0FuYjJKcVpXTjBKenRjYmx4dUx5cGNiaUFnSUNCSmN5QjFkR2xzY3lCaElISmxiR0YwYVhabElIWmhiSFZsSUdGemMybG5ibTFsYm5RL1hHNGdJQ0FnWEc0Z0lDQWdRSEJoY21GdElGdHpkSEpwYm1kZE9pQldZWEpwWVdKc1pTQjBieUIwWlhOMFhHNGdJQ0FnUUhKbGRIVnliaUJiWW05dmJHVmhibDA2SUVsbUlIVjBhV3h6SUd4dmIydHpJR3hwYTJVZ1lTQnlaV3hoZEdsMlpTQjJZV3gxWlNCaGMzTnBaMjV0Wlc1MFhHNHFMMXh1Wlhod2IzSjBJR052Ym5OMElHbHpVbVZzWVhScGRtVldZV3gxWlNBOUlDaDJZV3gxWlNrZ1BUNGdLSFpoYkhWbElDWW1JSFpoYkhWbExtbHVaR1Y0VDJZZ0ppWWdkbUZzZFdVdWFXNWtaWGhQWmlnblBTY3BJRDRnTUNrZ1B5QjBjblZsSURvZ1ptRnNjMlU3WEc1Y2JpOHFYRzRnSUNBZ1NYTWdkWFJwYkhNZ2RtRnlJR0VnYzNSeWFXNW5JRDhnWEc0Z0lDQWdYRzRnSUNBZ1FIQmhjbUZ0T2lCV1lYSnBZV0pzWlNCMGJ5QjBaWE4wWEc0Z0lDQWdRSEpsZEhWeWJpQmJZbTl2YkdWaGJsMDZJRkpsZEhWeWJuTWdkSEoxWlNCcFppQjBlWEJsYjJZZ2MzUnlJRDA5UFNBbmMzUnlhVzVuSjF4dUtpOWNibVY0Y0c5eWRDQmpiMjV6ZENCcGMxTjBjbWx1WnlBOUlDaHpkSElwSUQwK0lIUjVjR1Z2WmlCemRISWdQVDA5SUNkemRISnBibWNuTzF4dVhHNHZLbHh1SUNBZ0lFQndZWEpoYlNCYmMzUnlhVzVuSUh4OElFNXZaR1ZNYVhOMFhUcGNiaUFnSUNBZ0lDQWdTV1lnYzNSeWFXNW5MQ0IwY21WaGRHVmtJR0Z6SUhObGJHVmpkRzl5TGx4dUlDQWdJQ0FnSUNCSlppQnViM1FzSUhSeVpXRjBaV1FnWVhNZ2NISmxaWGhwYzNScGJtY2dUbTlrWlV4cGMzUmNibHh1SUNBZ0lFQnlaWFIxY200Z1cwRnljbUY1WFZ4dUtpOWNibVY0Y0c5eWRDQmpiMjV6ZENCelpXeGxZM1JFYjIwZ1BTQW9jMlZzWldOMGIzSXBJRDArSUh0Y2JpQWdJQ0JqYjI1emRDQnViMlJsY3lBOUlDaDBlWEJsYjJZZ2MyVnNaV04wYjNJZ1BUMDlJQ2R6ZEhKcGJtY25LU0EvSUdSdlkzVnRaVzUwTG5GMVpYSjVVMlZzWldOMGIzSkJiR3dvYzJWc1pXTjBiM0lwSURvZ2MyVnNaV04wYjNJN1hHNGdJQ0FnY21WMGRYSnVJQ2h1YjJSbGN5NXNaVzVuZEdncElEOGdXMTB1YzJ4cFkyVXVZMkZzYkNodWIyUmxjeWtnT2lCYlhTNXdkWE5vS0c1dlpHVnpLVHRjYm4wN1hHNWNiaThxWEc0Z0lDQWdVM0JzYVhRZ1kyOXRiV0V0WkdWc2FXMXBkR1ZrSUhOMGNtbHVaMXh1WEc0Z0lDQWdYQ0ptYjI4c1ltRnlYQ0lnTFQ0Z1cxd2labTl2WENJc0lGd2lZbUZ5WENKZFhHNWNiaUFnSUNCQWNHRnlZVzBnVzNOMGNtbHVaMTFjYmlBZ0lDQkFjbVYwZFhKdUlGdGhjbkpoZVYxY2Jpb3ZYRzVsZUhCdmNuUWdZMjl1YzNRZ2MzQnNhWFJEYjIxdFlVUmxiR2x0YVhSbFpDQTlJQ2gyWVd4MVpTa2dQVDRnYVhOVGRISnBibWNvZG1Gc2RXVXBJRDhnZG1Gc2RXVXVjM0JzYVhRb0x5eGNYSE1xTHlrZ09pQmJkbUZzZFdWZE8xeHVYRzR2S2x4dUlDQWdJRk53YkdsMElITndZV05sTFdSbGJHbHRhWFJsWkNCemRISnBibWRjYmx4dUlDQWdJRndpWm05dklHSmhjbHdpSUMwK0lGdGNJbVp2YjF3aUxDQmNJbUpoY2x3aVhWeHVYRzRnSUNBZ1FIQmhjbUZ0SUZ0emRISnBibWRkWEc0Z0lDQWdRSEpsZEhWeWJpQmJZWEp5WVhsZFhHNHFMMXh1Wlhod2IzSjBJR052Ym5OMElITndiR2wwVTNCaFkyVkVaV3hwYldsMFpXUWdQU0FvZG1Gc2RXVXBJRDArSUdselUzUnlhVzVuS0haaGJIVmxLU0EvSUhaaGJIVmxMbk53YkdsMEtDY2dKeWtnT2lCYmRtRnNkV1ZkTzF4dVhHNHZLbHh1SUNBZ0lGTndiR2wwSUdFZ2RtRnNkV1VnYVc1MGJ5QmhJSFpoYkhWbEwzVnVhWFFnYjJKcVpXTjBYRzRnSUNBZ1hHNGdJQ0FnSUNBZ0lGd2lNakF3Y0hoY0lpQXRQaUI3SUhaaGJIVmxPaUF5TURBc0lIVnVhWFE2SUZ3aWNIaGNJaUI5WEc0Z0lDQWdJQ0FnSUZ4dUlDQWdJRUJ3WVhKaGJTQmJjM1J5YVc1blhUb2dWbUZzZFdVZ2RHOGdjM0JzYVhSY2JpQWdJQ0JBY21WMGRYSnVJRnR2WW1wbFkzUmRPaUJQWW1wbFkzUWdkMmwwYUNCMllXeDFaU0JoYm1RZ2RXNXBkQ0J3Y205d2MxeHVLaTljYm1WNGNHOXlkQ0JqYjI1emRDQnpjR3hwZEZaaGJIVmxWVzVwZENBOUlDaDJZV3gxWlNrZ1BUNGdlMXh1SUNBZ0lHTnZibk4wSUhOd2JHbDBWbUZzSUQwZ2RtRnNkV1V1YldGMFkyZ29MeWd0UDF4Y1pDcGNYQzQvWEZ4a0tpa29MaW9wTHlrN1hHNWNiaUFnSUNCeVpYUjFjbTRnZTF4dUlDQWdJQ0FnSUNCMllXeDFaVG9nY0dGeWMyVkdiRzloZENoemNHeHBkRlpoYkZzeFhTa3NYRzRnSUNBZ0lDQWdJSFZ1YVhRNklDQnpjR3hwZEZaaGJGc3lYVnh1SUNBZ0lIMDdYRzU5TzF4dVhHNHZLbHh1SUNBZ0lFTnZiblpsY25RZ2JuVnRZbVZ5SUhSdklIZ2daR1ZqYVcxaGJDQndiR0ZqWlhOY2JseHVJQ0FnSUVCd1lYSmhiU0JiYm5WdFltVnlYVnh1SUNBZ0lFQndZWEpoYlNCYmJuVnRZbVZ5WFZ4dUlDQWdJRUJ5WlhSMWNtNGdXMjUxYldKbGNsMWNiaW92WEc1bGVIQnZjblFnWTI5dWMzUWdkRzlFWldOcGJXRnNJRDBnS0c1MWJTd2djSEpsWTJsemFXOXVJRDBnTWlrZ1BUNGdlMXh1SUNBZ0lIQnlaV05wYzJsdmJpQTlJREV3SUNvcUlIQnlaV05wYzJsdmJqdGNiaUFnSUNCeVpYUjFjbTRnVFdGMGFDNXliM1Z1WkNodWRXMGdLaUJ3Y21WamFYTnBiMjRwSUM4Z2NISmxZMmx6YVc5dU8xeHVmVHRjYmlKZGZRPT1cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2luYy91dGlscy5qc1xuICoqIG1vZHVsZSBpZCA9IDMxXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbnZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfUHJvY2VzczIgPSByZXF1aXJlKCcuLi9wcm9jZXNzL1Byb2Nlc3MnKTtcblxudmFyIF9Qcm9jZXNzMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX1Byb2Nlc3MyKTtcblxudmFyIF9jYWxjID0gcmVxdWlyZSgnLi4vaW5jL2NhbGMnKTtcblxudmFyIF91dGlscyA9IHJlcXVpcmUoJy4uL2luYy91dGlscycpO1xuXG52YXIgX2JpbmRBZGFwdGVyID0gcmVxdWlyZSgnLi4vaW5jL2JpbmQtYWRhcHRlcicpO1xuXG52YXIgX2JpbmRBZGFwdGVyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2JpbmRBZGFwdGVyKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKG9iaiwga2V5cykgeyB2YXIgdGFyZ2V0ID0ge307IGZvciAodmFyIGkgaW4gb2JqKSB7IGlmIChrZXlzLmluZGV4T2YoaSkgPj0gMCkgY29udGludWU7IGlmICghT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgaSkpIGNvbnRpbnVlOyB0YXJnZXRbaV0gPSBvYmpbaV07IH0gcmV0dXJuIHRhcmdldDsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmICghc2VsZikgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIGNhbGwgJiYgKHR5cGVvZiBjYWxsID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpID8gY2FsbCA6IHNlbGY7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgXCIgKyB0eXBlb2Ygc3VwZXJDbGFzcyk7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgZW51bWVyYWJsZTogZmFsc2UsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcykgOiBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzOyB9XG5cbnZhciBERUZBVUxUX1BST1AgPSAnY3VycmVudCc7XG52YXIgTlVNRVJJQ0FMX1ZBTFVFUyA9IFtERUZBVUxUX1BST1AsICdmcm9tJywgJ3RvJywgJ21pbicsICdtYXgnXTtcbnZhciBOVU1fTlVNRVJJQ0FMX1ZBTFVFUyA9IE5VTUVSSUNBTF9WQUxVRVMubGVuZ3RoO1xuXG52YXIgQWN0aW9uID0gZnVuY3Rpb24gKF9Qcm9jZXNzKSB7XG4gICAgX2luaGVyaXRzKEFjdGlvbiwgX1Byb2Nlc3MpO1xuXG4gICAgZnVuY3Rpb24gQWN0aW9uKHByb3BzKSB7XG4gICAgICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBBY3Rpb24pO1xuXG4gICAgICAgIHByb3BzLnN0YXRlID0ge307XG4gICAgICAgIHJldHVybiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCBfUHJvY2Vzcy5jYWxsKHRoaXMsIHByb3BzKSk7XG4gICAgfVxuXG4gICAgLypcbiAgICAgICAgIyBTZXQgQWN0aW9uIHByb3BlcnRpZXNcbiAgICAgICAgIyMgU2V0IHVzZXItZGVmaW5lZCBBY3Rpb24gcHJvcGVydGllc1xuICAgICAgICAgQHBhcmFtIFtvYmplY3RdXG4gICAgICAgIEByZXR1cm4gW0FjdGlvbl1cbiAgICAqL1xuXG4gICAgQWN0aW9uLnByb3RvdHlwZS5zZXQgPSBmdW5jdGlvbiBzZXQoKSB7XG4gICAgICAgIHZhciBwcm9wcyA9IGFyZ3VtZW50cy5sZW5ndGggPD0gMCB8fCBhcmd1bWVudHNbMF0gPT09IHVuZGVmaW5lZCA/IHt9IDogYXJndW1lbnRzWzBdO1xuICAgICAgICB2YXIgdmFsdWVzID0gcHJvcHMudmFsdWVzO1xuICAgICAgICB2YXIgb24gPSBwcm9wcy5vbjtcblxuICAgICAgICB2YXIgcHJvcHNUb1NldCA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhwcm9wcywgWyd2YWx1ZXMnLCAnb24nXSk7XG5cbiAgICAgICAgX1Byb2Nlc3MucHJvdG90eXBlLnNldC5jYWxsKHRoaXMsIHByb3BzVG9TZXQpO1xuXG4gICAgICAgIGlmIChvbikge1xuICAgICAgICAgICAgLy8gRHVja3R5cGlzaCBjaGVjayBmb3IgQWRhcHRlclxuICAgICAgICAgICAgaWYgKCFvbi5zZXR0ZXIpIHtcbiAgICAgICAgICAgICAgICB0aGlzLm9uID0gKDAsIF9iaW5kQWRhcHRlcjIuZGVmYXVsdCkob24pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy52YWx1ZXMgPSB0aGlzLnZhbHVlcyB8fCB7fTtcbiAgICAgICAgdGhpcy52YWx1ZUtleXMgPSB0aGlzLnZhbHVlS2V5cyB8fCBbXTtcbiAgICAgICAgdGhpcy5wYXJlbnRLZXlzID0gdGhpcy5wYXJlbnRLZXlzIHx8IFtdO1xuXG4gICAgICAgIC8vIE1lcmdlIG5ldyBgdmFsdWVgIHByb3BlcnRpZXMgd2l0aCBleGlzdGluZ1xuICAgICAgICB2YXIgY3VycmVudFZhbHVlcyA9IHRoaXMudmFsdWVzO1xuICAgICAgICB2YXIgZGVmYXVsdFZhbHVlID0gdGhpcy5nZXREZWZhdWx0VmFsdWUoKTtcbiAgICAgICAgdmFyIGRlZmF1bHRWYWx1ZVByb3AgPSB0aGlzLmdldERlZmF1bHRWYWx1ZVByb3AoKTtcblxuICAgICAgICAvLyBJbmhlcml0IHZhbHVlIHByb3BlcnRpZXMgZnJvbSBgcHJvcHNgXG4gICAgICAgIGZvciAodmFyIGtleSBpbiBkZWZhdWx0VmFsdWUpIHtcbiAgICAgICAgICAgIGlmIChkZWZhdWx0VmFsdWUuaGFzT3duUHJvcGVydHkoa2V5KSAmJiBwcm9wc1RvU2V0Lmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICAgICAgICBpZiAocHJvcHNUb1NldFtrZXldICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlW2tleV0gPSBwcm9wc1RvU2V0W2tleV07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gQ2hlY2sgYWxsIHZhbHVlcyBhbmQgc3BsaXQgaW50byBjaGlsZCB2YWx1ZXMgYXMgbmVjY2Vzc2FyeVxuICAgICAgICBmb3IgKHZhciBrZXkgaW4gdmFsdWVzKSB7XG4gICAgICAgICAgICBpZiAodmFsdWVzLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICAgICAgICB2YXIgdmFsdWUgPSB2YWx1ZXNba2V5XTtcbiAgICAgICAgICAgICAgICB2YXIgZXhpc3RpbmdWYWx1ZSA9IGN1cnJlbnRWYWx1ZXNba2V5XTtcbiAgICAgICAgICAgICAgICB2YXIgdmFsdWVUeXBlID0ge307XG4gICAgICAgICAgICAgICAgdmFyIG5ld1ZhbHVlID0ge307XG5cbiAgICAgICAgICAgICAgICAvLyBDb252ZXJ0IG5ldyB2YWx1ZSBpbnRvIG9iamVjdCBpZiBpdCBpc24ndCBhbHJlYWR5XG4gICAgICAgICAgICAgICAgaWYgKCgwLCBfdXRpbHMuaXNPYmopKHZhbHVlKSkge1xuICAgICAgICAgICAgICAgICAgICBuZXdWYWx1ZSA9IHZhbHVlO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIG5ld1ZhbHVlW2RlZmF1bHRWYWx1ZVByb3BdID0gdmFsdWU7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLy8gSWYgdmFsdWUgYWxyZWFkeSBleGlzdHMsIGNoZWNrIGZvciBhbmQgdXNlIGV4aXN0aW5nIHR5cGVcbiAgICAgICAgICAgICAgICBpZiAoZXhpc3RpbmdWYWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICBuZXdWYWx1ZSA9IF9leHRlbmRzKHt9LCBleGlzdGluZ1ZhbHVlLCBuZXdWYWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlVHlwZSA9IGV4aXN0aW5nVmFsdWUudHlwZTtcblxuICAgICAgICAgICAgICAgICAgICAvLyBJZiB0aGlzIGlzIGEgbmV3IHZhbHVlLCBjaGVjayBmb3IgdHlwZVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBuZXdWYWx1ZSA9IF9leHRlbmRzKHt9LCBkZWZhdWx0VmFsdWUsIG5ld1ZhbHVlKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gSWYgb25lIGlzIGV4cGxpY2l0bHkgYXNzaWduZWQsIHVzZSB0aGF0XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodmFsdWUudHlwZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlVHlwZSA9IHZhbHVlLnR5cGU7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBPciBpZiBvdXIgQWRhcHRlciBoYXMgYSB0eXBlTWFwLCB1c2UgdGhhdFxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLm9uICYmIHRoaXMub24uZ2V0VmFsdWVUeXBlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlVHlwZSA9IHRoaXMub24uZ2V0VmFsdWVUeXBlKGtleSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBNYXliZSBydW4gYHRlc3RgIG9uIGNvbG9yIGhlcmVcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLy8gSWYgd2UndmUgZ290IGEgdmFsdWVUeXBlIHRoZW4gcHJlcHJvY2VzcyB0aGUgdmFsdWUgYWNjb3JkaW5nbHlcbiAgICAgICAgICAgICAgICBpZiAodmFsdWVUeXBlKSB7XG4gICAgICAgICAgICAgICAgICAgIG5ld1ZhbHVlLnR5cGUgPSB2YWx1ZVR5cGU7XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gSWYgdGhpcyB2YWx1ZSBzaG91bGQgYmUgc3BsaXQsIHNwbGl0XG4gICAgICAgICAgICAgICAgICAgIGlmICh2YWx1ZVR5cGUuc3BsaXQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBjaGlsZFZhbHVlcyA9IHt9O1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBMb29wIG92ZXIgbnVtZXJpY2FsIHZhbHVlcyBhbmQgc3BsaXQgYW55IHByZXNlbnRcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgTlVNX05VTUVSSUNBTF9WQUxVRVM7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBwcm9wTmFtZSA9IE5VTUVSSUNBTF9WQUxVRVNbaV07XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAobmV3VmFsdWUuaGFzT3duUHJvcGVydHkocHJvcE5hbWUpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBzcGxpdFZhbHVlcyA9IHZhbHVlVHlwZS5zcGxpdChuZXdWYWx1ZVtwcm9wTmFtZV0pO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAodmFyIHNwbGl0S2V5IGluIHNwbGl0VmFsdWVzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoc3BsaXRWYWx1ZXMuaGFzT3duUHJvcGVydHkoc3BsaXRLZXkpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHNwbGl0VmFsdWUgPSBzcGxpdFZhbHVlc1tzcGxpdEtleV07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gQ3JlYXRlIG5ldyBjaGlsZCB2YWx1ZSBpZiBkb2Vzbid0IGV4aXN0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFjaGlsZFZhbHVlc1tzcGxpdEtleV0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hpbGRWYWx1ZXNbc3BsaXRLZXldID0gX2V4dGVuZHMoe30sIG5ld1ZhbHVlKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodmFsdWVUeXBlLmRlZmF1bHRQcm9wcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hpbGRWYWx1ZXNbc3BsaXRLZXldID0gdmFsdWVUeXBlLmRlZmF1bHRQcm9wc1tzcGxpdEtleV0gPyBfZXh0ZW5kcyh7fSwgdmFsdWVUeXBlLmRlZmF1bHRQcm9wc1tzcGxpdEtleV0sIGNoaWxkVmFsdWVzW3NwbGl0S2V5XSkgOiBfZXh0ZW5kcyh7fSwgdmFsdWVUeXBlLmRlZmF1bHRQcm9wcywgY2hpbGRWYWx1ZXNbc3BsaXRLZXldKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoaWxkVmFsdWVzW3NwbGl0S2V5XVtwcm9wTmFtZV0gPSBzcGxpdFZhbHVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICBuZXdWYWx1ZS5jaGlsZHJlbiA9IHt9O1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBOb3cgbG9vcCB0aHJvdWdoIGFsbCBjaGlsZCB2YWx1ZXMgYW5kIGFkZCB0aGVtIGFzIG5vcm1hbCB2YWx1ZXNcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGNoaWxkS2V5IGluIGNoaWxkVmFsdWVzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNoaWxkVmFsdWVzLmhhc093blByb3BlcnR5KGNoaWxkS2V5KSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgY2hpbGRWYWx1ZSA9IGNoaWxkVmFsdWVzW2NoaWxkS2V5XTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGNvbWJpbmVkS2V5ID0ga2V5ICsgY2hpbGRLZXk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3VmFsdWUuY2hpbGRyZW5ba2V5XSA9IGNoaWxkVmFsdWUuY3VycmVudDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudFZhbHVlc1tjb21iaW5lZEtleV0gPSBjaGlsZFZhbHVlO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnZhbHVlS2V5cy5pbmRleE9mKGNvbWJpbmVkS2V5KSA9PT0gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudmFsdWVLZXlzLnB1c2goY29tYmluZWRLZXkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBTYXZlIGEgdGVtcGxhdGUgZm9yIHJlY29tYmluYXRpb24gaWYgcHJlc2VudFxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHZhbHVlVHlwZS50ZW1wbGF0ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ld1ZhbHVlLnRlbXBsYXRlID0gbmV3VmFsdWUudGVtcGxhdGUgfHwgdmFsdWVUeXBlLnRlbXBsYXRlKG5ld1ZhbHVlLmN1cnJlbnQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBPciB3ZSBqdXN0IGhhdmUgZGVmYXVsdCB2YWx1ZSBwcm9wcywgbG9hZCB0aG9zZSBcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmICh2YWx1ZVR5cGUuZGVmYXVsdFByb3BzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3VmFsdWUgPSBfZXh0ZW5kcyh7fSwgdmFsdWVUeXBlLmRlZmF1bHRQcm9wcywgbmV3VmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC8vIFVwZGF0ZSBhcHByb3ByaWF0ZSBsaXN0cyB3aXRoIHZhbHVlIGtleVxuICAgICAgICAgICAgICAgIGlmIChuZXdWYWx1ZS5jaGlsZHJlbikge1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5wYXJlbnRLZXlzLmluZGV4T2Yoa2V5KSA9PT0gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucGFyZW50S2V5cy5wdXNoKGtleSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy52YWx1ZUtleXMuaW5kZXhPZihrZXkpID09PSAtMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy52YWx1ZUtleXMucHVzaChrZXkpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgY3VycmVudFZhbHVlc1trZXldID0gbmV3VmFsdWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyBQcmVjb21wdXRlIHZhbHVlIGtleSBhbmQgcGFyZW50IGtleSBsZW5ndGggdG8gcHJldmVudCBwZXItZnJhbWUgbWVhc3VyZW1lbnRcbiAgICAgICAgdGhpcy5udW1WYWx1ZUtleXMgPSB0aGlzLnZhbHVlS2V5cy5sZW5ndGg7XG4gICAgICAgIHRoaXMubnVtUGFyZW50S2V5cyA9IHRoaXMucGFyZW50S2V5cy5sZW5ndGg7XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfTtcblxuICAgIC8qXG4gICAgICAgIERlY2lkZSB3aGV0aGVyIHRoaXMgQWN0aW9uIHdpbGwgcmVuZGVyIG9uIG5leHQgZnJhbWVcbiAgICAgICAgIEBwYXJhbSBbQWN0aW9uXVxuICAgICAgICBAcGFyYW0gW251bWJlcl1cbiAgICAgICAgQHBhcmFtIFtudW1iZXJdXG4gICAgICAgIEByZXR1cm4gW2Jvb2xlYW5dOiBSZXR1cm4gdHJ1ZSB0byByZW5kZXJcbiAgICAqL1xuXG4gICAgQWN0aW9uLnByb3RvdHlwZS53aWxsUmVuZGVyID0gZnVuY3Rpb24gd2lsbFJlbmRlcihhY3Rpb24sIGZyYW1lU3RhbXAsIGVsYXBzZWQpIHtcbiAgICAgICAgdmFyIGhhc0NoYW5nZWQgPSBmYWxzZTtcblxuICAgICAgICAvLyBVcGRhdGUgYmFzZSB2YWx1ZXNcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLm51bVZhbHVlS2V5czsgaSsrKSB7XG4gICAgICAgICAgICB2YXIga2V5ID0gdGhpcy52YWx1ZUtleXNbaV07XG4gICAgICAgICAgICB2YXIgdmFsdWUgPSB0aGlzLnZhbHVlc1trZXldO1xuICAgICAgICAgICAgdmFyIHVwZGF0ZWRWYWx1ZSA9IHZhbHVlLmN1cnJlbnQ7XG5cbiAgICAgICAgICAgIC8vIFJ1biB0cmFuc2Zvcm0gZnVuY3Rpb24gKGlmIHByZXNlbnQpXG4gICAgICAgICAgICBpZiAodmFsdWUudHJhbnNmb3JtKSB7XG4gICAgICAgICAgICAgICAgdXBkYXRlZFZhbHVlID0gdmFsdWUudHJhbnNmb3JtKHVwZGF0ZWRWYWx1ZSwga2V5LCB0aGlzKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gU21vb3RoIHZhbHVlIGlmIHdlIGhhdmUgc21vb3RoaW5nXG4gICAgICAgICAgICBpZiAodmFsdWUuc21vb3RoKSB7XG4gICAgICAgICAgICAgICAgdXBkYXRlZFZhbHVlID0gKDAsIF9jYWxjLnNtb290aCkodXBkYXRlZFZhbHVlLCB2YWx1ZS5wcmV2LCBlbGFwc2VkLCB2YWx1ZS5zbW9vdGgpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoIXRoaXMuY2FsY3VsYXRlc1ZlbG9jaXR5KSB7XG4gICAgICAgICAgICAgICAgdmFsdWUudmVsb2NpdHkgPSAoMCwgX2NhbGMuc3BlZWRQZXJTZWNvbmQpKHVwZGF0ZWRWYWx1ZSAtIHZhbHVlLmN1cnJlbnQsIGVsYXBzZWQpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB2YWx1ZS5wcmV2ID0gdmFsdWUuY3VycmVudCA9IHVwZGF0ZWRWYWx1ZTtcblxuICAgICAgICAgICAgdmFyIHZhbHVlRm9yU3RhdGUgPSB2YWx1ZS51bml0ID8gdmFsdWUuY3VycmVudCArIHZhbHVlLnVuaXQgOiB2YWx1ZS5jdXJyZW50O1xuXG4gICAgICAgICAgICAvLyBBZGQgc3RyYWlnaHQgdG8gc3RhdGUgaWYgbm8gcGFyZW50XG4gICAgICAgICAgICBpZiAoIXZhbHVlLnBhcmVudCkge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLnN0YXRlW2tleV0gIT09IHZhbHVlRm9yU3RhdGUpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZVtrZXldID0gdmFsdWVGb3JTdGF0ZTtcbiAgICAgICAgICAgICAgICAgICAgaGFzQ2hhbmdlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIE9yIGFkZCB0byBwYXJlbnRcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudmFsdWVzW3ZhbHVlLnBhcmVudF0uY2hpbGRyZW5ba2V5XSA9IHZhbHVlRm9yU3RhdGU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gVXBkYXRlIHBhcmVudCB2YWx1ZXNcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLm51bVBhcmVudEtleXM7IGkrKykge1xuICAgICAgICAgICAgdmFyIGtleSA9IHRoaXMucGFyZW50S2V5c1tpXTtcbiAgICAgICAgICAgIHZhciB2YWx1ZSA9IHRoaXMudmFsdWVzW2tleV07XG5cbiAgICAgICAgICAgIHZhbHVlLmN1cnJlbnQgPSB2YWx1ZS50eXBlLmNvbWJpbmUodmFsdWUuY2hpbGRyZW4sIHZhbHVlLnRlbXBsYXRlKTtcblxuICAgICAgICAgICAgaWYgKHRoaXMuc3RhdGVba2V5XSAhPT0gdmFsdWUuY3VycmVudCkge1xuICAgICAgICAgICAgICAgIHRoaXMuc3RhdGVba2V5XSA9IHZhbHVlLmN1cnJlbnQ7XG4gICAgICAgICAgICAgICAgaGFzQ2hhbmdlZCA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcy5vbkNsZWFudXAgPyB0cnVlIDogaGFzQ2hhbmdlZDtcbiAgICB9O1xuXG4gICAgQWN0aW9uLnByb3RvdHlwZS5vblJlbmRlciA9IGZ1bmN0aW9uIG9uUmVuZGVyKF9yZWYpIHtcbiAgICAgICAgdmFyIHN0YXRlID0gX3JlZi5zdGF0ZTtcbiAgICAgICAgdmFyIG9uID0gX3JlZi5vbjtcblxuICAgICAgICBpZiAob24gJiYgb24uc2V0KSB7XG4gICAgICAgICAgICBvbi5zZXQoc3RhdGUpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMub25GcmFtZSkge1xuICAgICAgICAgICAgdGhpcy5vbkZyYW1lKHRoaXMpO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIEFjdGlvbi5wcm90b3R5cGUucGF1c2UgPSBmdW5jdGlvbiBwYXVzZSgpIHtcbiAgICAgICAgX1Byb2Nlc3MucHJvdG90eXBlLnN0b3AuY2FsbCh0aGlzKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfTtcblxuICAgIEFjdGlvbi5wcm90b3R5cGUucmVzdW1lID0gZnVuY3Rpb24gcmVzdW1lKCkge1xuICAgICAgICBfUHJvY2Vzcy5wcm90b3R5cGUuc3RhcnQuY2FsbCh0aGlzKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfTtcblxuICAgIEFjdGlvbi5wcm90b3R5cGUuc3RhcnQgPSBmdW5jdGlvbiBzdGFydCgpIHtcbiAgICAgICAgdmFyIHZhbHVlcyA9IHRoaXMudmFsdWVzO1xuICAgICAgICBfUHJvY2Vzcy5wcm90b3R5cGUuc3RhcnQuY2FsbCh0aGlzKTtcblxuICAgICAgICBmb3IgKHZhciBrZXkgaW4gdmFsdWVzKSB7XG4gICAgICAgICAgICBpZiAodmFsdWVzLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICAgICAgICB2YWx1ZXNba2V5XS5wcmV2ID0gdmFsdWVzW2tleV0ub3JpZ2luID0gdmFsdWVzW2tleV0uY3VycmVudDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG5cbiAgICAvKlxuICAgICAgICAjIEdldCBkZWZhdWx0IEFjdGlvbiB2YWx1ZSBwcm9wZXJ0aWVzXG4gICAgICAgICBAcmV0dXJuIFtvYmplY3RdXG4gICAgKi9cblxuICAgIEFjdGlvbi5wcm90b3R5cGUuZ2V0RGVmYXVsdFZhbHVlID0gZnVuY3Rpb24gZ2V0RGVmYXVsdFZhbHVlKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgY3VycmVudDogMCxcbiAgICAgICAgICAgIHZlbG9jaXR5OiAwXG4gICAgICAgIH07XG4gICAgfTtcblxuICAgIC8qXG4gICAgICAgICMgR2V0IGRlZmF1bHQgQWN0aW9uIHZhbHVlIHByb3BlcnR5IG5hbWVcbiAgICAgICAgIyMgU2V0IHRoaXMgYHZhbHVlYCBwcm9wZXJ0eSB3aGVuIHNldCBhcyB2YWx1ZSBpbnN0ZWFkIG9mIG9iamVjdFxuICAgICAgICAgQHJldHVybiBbc3RyaW5nXVxuICAgICovXG5cbiAgICBBY3Rpb24ucHJvdG90eXBlLmdldERlZmF1bHRWYWx1ZVByb3AgPSBmdW5jdGlvbiBnZXREZWZhdWx0VmFsdWVQcm9wKCkge1xuICAgICAgICByZXR1cm4gREVGQVVMVF9QUk9QO1xuICAgIH07XG5cbiAgICByZXR1cm4gQWN0aW9uO1xufShfUHJvY2VzczMuZGVmYXVsdCk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IEFjdGlvbjtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbk55WXk5aFkzUnBiMjV6TDBGamRHbHZiaTVxY3lKZExDSnVZVzFsY3lJNlcxMHNJbTFoY0hCcGJtZHpJam9pT3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3TzBGQlMwRXNTVUZCVFN4bFFVRmxMRk5CUVdZN1FVRkRUaXhKUVVGTkxHMUNRVUZ0UWl4RFFVRkRMRmxCUVVRc1JVRkJaU3hOUVVGbUxFVkJRWFZDTEVsQlFYWkNMRVZCUVRaQ0xFdEJRVGRDTEVWQlFXOURMRXRCUVhCRExFTkJRVzVDTzBGQlEwNHNTVUZCVFN4MVFrRkJkVUlzYVVKQlFXbENMRTFCUVdwQ096dEpRVVZTT3pzN1FVRkRha0lzWVVGRWFVSXNUVUZEYWtJc1EwRkJXU3hMUVVGYUxFVkJRVzFDT3poQ1FVUkdMRkZCUTBVN08wRkJRMllzWTBGQlRTeExRVUZPTEVkQlFXTXNSVUZCWkN4RFFVUmxPMmRFUVVWbUxHOUNRVUZOTEV0QlFVNHNSMEZHWlR0TFFVRnVRanM3T3pzN096czdPMEZCUkdsQ0xIRkNRV0ZxUWl4eFFrRkJaMEk3V1VGQldpdzRSRUZCVVN4clFrRkJTVHRaUVVOS0xGTkJRVGhDTEUxQlFUbENMRTlCUkVrN1dVRkRTU3hMUVVGelFpeE5RVUYwUWl4SFFVUktPenRaUVVOWExITkRRVUZsTEhsQ1FVUXhRanM3UVVGSFdpd3lRa0ZCVFN4SFFVRk9MRmxCUVZVc1ZVRkJWaXhGUVVoWk96dEJRVXRhTEZsQlFVa3NSVUZCU2l4RlFVRlJPenRCUVVWS0xHZENRVUZKTEVOQlFVTXNSMEZCUnl4TlFVRklMRVZCUVZjN1FVRkRXaXh4UWtGQlN5eEZRVUZNTEVkQlFWVXNNa0pCUVZrc1JVRkJXaXhEUVVGV0xFTkJSRms3WVVGQmFFSTdVMEZHU2pzN1FVRlBRU3hoUVVGTExFMUJRVXdzUjBGQll5eExRVUZMTEUxQlFVd3NTVUZCWlN4RlFVRm1MRU5CV2tZN1FVRmhXaXhoUVVGTExGTkJRVXdzUjBGQmFVSXNTMEZCU3l4VFFVRk1MRWxCUVd0Q0xFVkJRV3hDTEVOQllrdzdRVUZqV2l4aFFVRkxMRlZCUVV3c1IwRkJhMElzUzBGQlN5eFZRVUZNTEVsQlFXMUNMRVZCUVc1Q096czdRVUZrVGl4WlFXbENUaXhuUWtGQlowSXNTMEZCU3l4TlFVRk1MRU5CYWtKV08wRkJhMEphTEZsQlFVMHNaVUZCWlN4TFFVRkxMR1ZCUVV3c1JVRkJaaXhEUVd4Q1RUdEJRVzFDV2l4WlFVRk5MRzFDUVVGdFFpeExRVUZMTEcxQ1FVRk1MRVZCUVc1Q096czdRVUZ1UWswc1lVRnpRbEFzU1VGQlNTeEhRVUZLTEVsQlFWY3NXVUZCYUVJc1JVRkJPRUk3UVVGRE1VSXNaMEpCUVVrc1lVRkJZU3hqUVVGaUxFTkJRVFJDTEVkQlFUVkNMRXRCUVc5RExGZEJRVmNzWTBGQldDeERRVUV3UWl4SFFVRXhRaXhEUVVGd1F5eEZRVUZ2UlR0QlFVTndSU3h2UWtGQlNTeFhRVUZYTEVkQlFWZ3NUVUZCYjBJc1UwRkJjRUlzUlVGQkswSTdRVUZETDBJc2FVTkJRV0VzUjBGQllpeEpRVUZ2UWl4WFFVRlhMRWRCUVZnc1EwRkJjRUlzUTBGRUswSTdhVUpCUVc1RE8yRkJSRW83VTBGRVNqczdPMEZCZEVKWkxHRkJLMEpRTEVsQlFVa3NSMEZCU2l4SlFVRlhMRTFCUVdoQ0xFVkJRWGRDTzBGQlEzQkNMR2RDUVVGSkxFOUJRVThzWTBGQlVDeERRVUZ6UWl4SFFVRjBRaXhEUVVGS0xFVkJRV2RETzBGQlF6VkNMRzlDUVVGTkxGRkJRVkVzVDBGQlR5eEhRVUZRTEVOQlFWSXNRMEZFYzBJN1FVRkZOVUlzYjBKQlFVMHNaMEpCUVdkQ0xHTkJRV01zUjBGQlpDeERRVUZvUWl4RFFVWnpRanRCUVVjMVFpeHZRa0ZCU1N4WlFVRlpMRVZCUVZvc1EwRklkMEk3UVVGSk5VSXNiMEpCUVVrc1YwRkJWeXhGUVVGWU96czdRVUZLZDBJc2IwSkJUM2hDTEd0Q1FVRk5MRXRCUVU0c1EwRkJTaXhGUVVGclFqdEJRVU5rTEN0Q1FVRlhMRXRCUVZnc1EwRkVZenRwUWtGQmJFSXNUVUZGVHp0QlFVTklMRFpDUVVGVExHZENRVUZVTEVsQlFUWkNMRXRCUVRkQ0xFTkJSRWM3YVVKQlJsQTdPenRCUVZBMFFpeHZRa0ZqZUVJc1lVRkJTaXhGUVVGdFFqdEJRVU5tTERSRFFVRm5RaXhsUVVGclFpeFRRVUZzUXl4RFFVUmxPMEZCUldZc1owTkJRVmtzWTBGQll5eEpRVUZrT3pzN1FVRkdSeXhwUWtGQmJrSXNUVUZMVHp0QlFVTklMR2RFUVVGblFpeGpRVUZwUWl4VFFVRnFRenM3TzBGQlJFY3NORUpCU1VNc1RVRkJUU3hKUVVGT0xFVkJRVms3UVVGRFdpeDNRMEZCV1N4TlFVRk5MRWxCUVU0N096dEJRVVJCTEhsQ1FVRm9RaXhOUVVsUExFbEJRVWtzUzBGQlN5eEZRVUZNTEVsQlFWY3NTMEZCU3l4RlFVRk1MRU5CUVZFc1dVRkJVaXhGUVVGelFqdEJRVU40UXl3MFEwRkJXU3hMUVVGTExFVkJRVXdzUTBGQlVTeFpRVUZTTEVOQlFYRkNMRWRCUVhKQ0xFTkJRVm9zUTBGRWQwTTdOa0pCUVhKRE96czdRVUZTU2l4eFFrRk1VRHM3TzBGQlpEUkNMRzlDUVcxRGVFSXNVMEZCU2l4RlFVRmxPMEZCUTFnc05rSkJRVk1zU1VGQlZDeEhRVUZuUWl4VFFVRm9RanM3TzBGQlJGY3NkMEpCU1ZBc1ZVRkJWU3hMUVVGV0xFVkJRV2xDTzBGQlEycENMRFJDUVVGTkxHTkJRV01zUlVGQlpEczdPMEZCUkZjc05rSkJTVm9zU1VGQlNTeEpRVUZKTEVOQlFVb3NSVUZCVHl4SlFVRkpMRzlDUVVGS0xFVkJRVEJDTEVkQlFURkRMRVZCUVN0RE8wRkJRek5ETEdkRFFVRk5MRmRCUVZjc2FVSkJRV2xDTEVOQlFXcENMRU5CUVZnc1EwRkVjVU03TzBGQlJ6TkRMR2REUVVGSkxGTkJRVk1zWTBGQlZDeERRVUYzUWl4UlFVRjRRaXhEUVVGS0xFVkJRWFZETzBGQlEyNURMRzlEUVVGTkxHTkJRV01zVlVGQlZTeExRVUZXTEVOQlFXZENMRk5CUVZNc1VVRkJWQ3hEUVVGb1FpeERRVUZrTEVOQlJEWkNPenRCUVVkdVF5eHhRMEZCU3l4SlFVRkpMRkZCUVVvc1NVRkJaMElzVjBGQmNrSXNSVUZCYTBNN1FVRkRPVUlzZDBOQlFVa3NXVUZCV1N4alFVRmFMRU5CUVRKQ0xGRkJRVE5DTEVOQlFVb3NSVUZCTUVNN1FVRkRkRU1zTkVOQlFVMHNZVUZCWVN4WlFVRlpMRkZCUVZvc1EwRkJZanM3UVVGRVowTXNORU5CUjJ4RExFTkJRVU1zV1VGQldTeFJRVUZhTEVOQlFVUXNSVUZCZDBJN1FVRkRlRUlzZDBSQlFWa3NVVUZCV2l4cFFrRkJOa0lzVTBGQk4wSXNRMEZFZDBJN08wRkJSM2hDTEdkRVFVRkpMRlZCUVZVc1dVRkJWaXhGUVVGM1FqdEJRVU40UWl3MFJFRkJXU3hSUVVGYUxFbEJRWGRDTEZOQlFVTXNRMEZCVlN4WlFVRldMRU5CUVhWQ0xGRkJRWFpDTEVOQlFVUXNaMEpCUTJZc1ZVRkJWU3haUVVGV0xFTkJRWFZDTEZGQlFYWkNMRWRCUVhGRExGbEJRVmtzVVVGQldpeEZRVVIwUWl4blFrRkZaaXhWUVVGVkxGbEJRVllzUlVGQk1rSXNXVUZCV1N4UlFVRmFMRVZCUmxvc1EwRkVRVHMyUTBGQk5VSTdlVU5CU0VvN08wRkJWVUVzYjBSQlFWa3NVVUZCV2l4RlFVRnpRaXhSUVVGMFFpeEpRVUZyUXl4VlFVRnNReXhEUVdKelF6dHhRMEZCTVVNN2FVTkJSRW83TmtKQlNFbzdlVUpCU0VvN08wRkJNRUpCTEdsRFFVRlRMRkZCUVZRc1IwRkJiMElzUlVGQmNFSTdPenRCUVRsQ2FVSXNOa0pCYVVOYUxFbEJRVWtzVVVGQlNpeEpRVUZuUWl4WFFVRnlRaXhGUVVGclF6dEJRVU01UWl4blEwRkJTU3haUVVGWkxHTkJRVm9zUTBGQk1rSXNVVUZCTTBJc1EwRkJTaXhGUVVFd1F6dEJRVU4wUXl4dlEwRkJUU3hoUVVGaExGbEJRVmtzVVVGQldpeERRVUZpTEVOQlJHZERPMEZCUlhSRExHOURRVUZOTEdOQlFXTXNUVUZCVFN4UlFVRk9MRU5CUm10Q096dEJRVWwwUXl4NVEwRkJVeXhSUVVGVUxFTkJRV3RDTEVkQlFXeENMRWxCUVhsQ0xGZEJRVmNzVDBGQldDeERRVXBoTzBGQlMzUkRMRGhEUVVGakxGZEJRV1FzU1VGQk5rSXNWVUZCTjBJc1EwRk1jME03TzBGQlQzUkRMRzlEUVVGSkxFdEJRVXNzVTBGQlRDeERRVUZsTEU5QlFXWXNRMEZCZFVJc1YwRkJka0lzVFVGQmQwTXNRMEZCUXl4RFFVRkVMRVZCUVVrN1FVRkROVU1zZVVOQlFVc3NVMEZCVEN4RFFVRmxMRWxCUVdZc1EwRkJiMElzVjBGQmNFSXNSVUZFTkVNN2FVTkJRV2hFT3paQ1FWQktPM2xDUVVSS096czdRVUZxUTJsQ0xEUkNRV2RFWWl4VlFVRlZMRkZCUVZZc1JVRkJiMEk3UVVGRGNFSXNjVU5CUVZNc1VVRkJWQ3hIUVVGdlFpeFRRVUZUTEZGQlFWUXNTVUZCY1VJc1ZVRkJWU3hSUVVGV0xFTkJRVzFDTEZOQlFWTXNUMEZCVkN4RFFVRjRReXhEUVVSQk8zbENRVUY0UWpzN08wRkJhRVJwUWl4eFFrRkJja0lzVFVGeFJFOHNTVUZCU1N4VlFVRlZMRmxCUVZZc1JVRkJkMEk3UVVGREwwSXNiMFJCUVdkQ0xGVkJRVlVzV1VGQlZpeEZRVUV5UWl4VFFVRXpReXhEUVVRclFqdDVRa0ZCTlVJN2FVSkJla1JZT3pzN1FVRnVRelJDTEc5Q1FXdEhlRUlzVTBGQlV5eFJRVUZVTEVWQlFXMUNPMEZCUTI1Q0xIZENRVUZKTEV0QlFVc3NWVUZCVEN4RFFVRm5RaXhQUVVGb1FpeERRVUYzUWl4SFFVRjRRaXhOUVVGcFF5eERRVUZETEVOQlFVUXNSVUZCU1R0QlFVTnlReXcyUWtGQlN5eFZRVUZNTEVOQlFXZENMRWxCUVdoQ0xFTkJRWEZDTEVkQlFYSkNMRVZCUkhGRE8zRkNRVUY2UXp0cFFrRkVTaXhOUVVsUE8wRkJRMGdzZDBKQlFVa3NTMEZCU3l4VFFVRk1MRU5CUVdVc1QwRkJaaXhEUVVGMVFpeEhRVUYyUWl4TlFVRm5ReXhEUVVGRExFTkJRVVFzUlVGQlNUdEJRVU53UXl3MlFrRkJTeXhUUVVGTUxFTkJRV1VzU1VGQlppeERRVUZ2UWl4SFFVRndRaXhGUVVSdlF6dHhRa0ZCZUVNN2FVSkJURW83TzBGQlZVRXNPRUpCUVdNc1IwRkJaQ3hKUVVGeFFpeFJRVUZ5UWl4RFFUVkhORUk3WVVGQmFFTTdVMEZFU2pzN08wRkJMMEpaTEZsQmFVcGFMRU5CUVVzc1dVRkJUQ3hIUVVGdlFpeExRVUZMTEZOQlFVd3NRMEZCWlN4TlFVRm1MRU5CYWtwU08wRkJhMHBhTEdGQlFVc3NZVUZCVEN4SFFVRnhRaXhMUVVGTExGVkJRVXdzUTBGQlowSXNUVUZCYUVJc1EwRnNTbFE3TzBGQmIwcGFMR1ZCUVU4c1NVRkJVQ3hEUVhCS1dUczdPenM3T3pzN096czdRVUZpUXl4eFFrRTBTMnBDTEdsRFFVRlhMRkZCUVZFc1dVRkJXU3hUUVVGVE8wRkJRM0JETEZsQlFVa3NZVUZCWVN4TFFVRmlPenM3UVVGRVowTXNZVUZKTDBJc1NVRkJTU3hKUVVGSkxFTkJRVW9zUlVGQlR5eEpRVUZKTEV0QlFVc3NXVUZCVEN4RlFVRnRRaXhIUVVGMlF5eEZRVUUwUXp0QlFVTjRReXhuUWtGQlRTeE5RVUZOTEV0QlFVc3NVMEZCVEN4RFFVRmxMRU5CUVdZc1EwRkJUaXhEUVVSclF6dEJRVVY0UXl4blFrRkJUU3hSUVVGUkxFdEJRVXNzVFVGQlRDeERRVUZaTEVkQlFWb3NRMEZCVWl4RFFVWnJRenRCUVVkNFF5eG5Ra0ZCU1N4bFFVRmxMRTFCUVUwc1QwRkJUanM3TzBGQlNIRkNMR2RDUVUxd1F5eE5RVUZOTEZOQlFVNHNSVUZCYVVJN1FVRkRha0lzSzBKQlFXVXNUVUZCVFN4VFFVRk9MRU5CUVdkQ0xGbEJRV2hDTEVWQlFUaENMRWRCUVRsQ0xFVkJRVzFETEVsQlFXNURMRU5CUVdZc1EwRkVhVUk3WVVGQmNrSTdPenRCUVU1M1F5eG5Ra0ZYY0VNc1RVRkJUU3hOUVVGT0xFVkJRV003UVVGRFpDd3JRa0ZCWlN4clFrRkJUeXhaUVVGUUxFVkJRWEZDTEUxQlFVMHNTVUZCVGl4RlFVRlpMRTlCUVdwRExFVkJRVEJETEUxQlFVMHNUVUZCVGl4RFFVRjZSQ3hEUVVSak8yRkJRV3hDT3p0QlFVbEJMR2RDUVVGSkxFTkJRVU1zUzBGQlN5eHJRa0ZCVEN4RlFVRjVRanRCUVVNeFFpeHpRa0ZCVFN4UlFVRk9MRWRCUVdsQ0xEQkNRVUZsTEdWQlFXVXNUVUZCVFN4UFFVRk9MRVZCUVdVc1QwRkJOME1zUTBGQmFrSXNRMEZFTUVJN1lVRkJPVUk3TzBGQlNVRXNhMEpCUVUwc1NVRkJUaXhIUVVGaExFMUJRVTBzVDBGQlRpeEhRVUZuUWl4WlFVRm9RaXhEUVc1Q01rSTdPMEZCY1VKNFF5eG5Ra0ZCVFN4blFrRkJaMElzUzBGQlF5eERRVUZOTEVsQlFVNHNSMEZCWXl4TlFVRk5MRTlCUVU0c1IwRkJaMElzVFVGQlRTeEpRVUZPTEVkQlFXRXNUVUZCVFN4UFFVRk9PenM3UVVGeVFqRkNMR2RDUVhkQ2NFTXNRMEZCUXl4TlFVRk5MRTFCUVU0c1JVRkJZenRCUVVObUxHOUNRVUZKTEV0QlFVc3NTMEZCVEN4RFFVRlhMRWRCUVZnc1RVRkJiMElzWVVGQmNFSXNSVUZCYlVNN1FVRkRia01zZVVKQlFVc3NTMEZCVEN4RFFVRlhMRWRCUVZnc1NVRkJhMElzWVVGQmJFSXNRMEZFYlVNN1FVRkZia01zYVVOQlFXRXNTVUZCWWl4RFFVWnRRenRwUWtGQmRrTTdPMEZCUkdVc1lVRkJia0lzVFVGTlR6dEJRVU5JTEhsQ1FVRkxMRTFCUVV3c1EwRkJXU3hOUVVGTkxFMUJRVTRzUTBGQldpeERRVUV3UWl4UlFVRXhRaXhEUVVGdFF5eEhRVUZ1UXl4SlFVRXdReXhoUVVFeFF5eERRVVJITzJsQ1FVNVFPMU5CZUVKS096czdRVUZLYjBNc1lVRjNReTlDTEVsQlFVa3NTVUZCU1N4RFFVRktMRVZCUVU4c1NVRkJTU3hMUVVGTExHRkJRVXdzUlVGQmIwSXNSMEZCZUVNc1JVRkJOa003UVVGRGVrTXNaMEpCUVUwc1RVRkJUU3hMUVVGTExGVkJRVXdzUTBGQlowSXNRMEZCYUVJc1EwRkJUaXhEUVVSdFF6dEJRVVY2UXl4blFrRkJUU3hSUVVGUkxFdEJRVXNzVFVGQlRDeERRVUZaTEVkQlFWb3NRMEZCVWl4RFFVWnRRenM3UVVGSmVrTXNhMEpCUVUwc1QwRkJUaXhIUVVGblFpeE5RVUZOTEVsQlFVNHNRMEZCVnl4UFFVRllMRU5CUVcxQ0xFMUJRVTBzVVVGQlRpeEZRVUZuUWl4TlFVRk5MRkZCUVU0c1EwRkJia1FzUTBGS2VVTTdPMEZCVFhwRExHZENRVUZKTEV0QlFVc3NTMEZCVEN4RFFVRlhMRWRCUVZnc1RVRkJiMElzVFVGQlRTeFBRVUZPTEVWQlFXVTdRVUZEYmtNc2NVSkJRVXNzUzBGQlRDeERRVUZYTEVkQlFWZ3NTVUZCYTBJc1RVRkJUU3hQUVVGT0xFTkJSR2xDTzBGQlJXNURMRFpDUVVGaExFbEJRV0lzUTBGR2JVTTdZVUZCZGtNN1UwRk9TanM3UVVGWlFTeGxRVUZQTEVsQlFVTXNRMEZCU3l4VFFVRk1MRWRCUVd0Q0xFbEJRVzVDTEVkQlFUQkNMRlZCUVRGQ0xFTkJjRVEyUWpzN08wRkJOVXQyUWl4eFFrRnRUMnBDTEcxRFFVRjNRanRaUVVGaUxHMUNRVUZoTzFsQlFVNHNZVUZCVFRzN1FVRkRjRUlzV1VGQlNTeE5RVUZOTEVkQlFVY3NSMEZCU0N4RlFVRlJPMEZCUTJRc1pVRkJSeXhIUVVGSUxFTkJRVThzUzBGQlVDeEZRVVJqTzFOQlFXeENPenRCUVVsQkxGbEJRVWtzUzBGQlN5eFBRVUZNTEVWQlFXTTdRVUZEWkN4cFFrRkJTeXhQUVVGTUxFTkJRV0VzU1VGQllpeEZRVVJqTzFOQlFXeENPenM3UVVGNFQyRXNjVUpCTms5cVFpeDVRa0ZCVVR0QlFVTktMREpDUVVGTkxFbEJRVTRzV1VGRVNUdEJRVVZLTEdWQlFVOHNTVUZCVUN4RFFVWkpPenM3UVVFM1QxTXNjVUpCYTFCcVFpd3lRa0ZCVXp0QlFVTk1MREpDUVVGTkxFdEJRVTRzV1VGRVN6dEJRVVZNTEdWQlFVOHNTVUZCVUN4RFFVWkxPenM3UVVGc1VGRXNjVUpCZFZCcVFpeDVRa0ZCVVR0QlFVTktMRmxCUVUwc1UwRkJVeXhMUVVGTExFMUJRVXdzUTBGRVdEdEJRVVZLTERKQ1FVRk5MRXRCUVU0c1dVRkdTVHM3UVVGSlNpeGhRVUZMTEVsQlFVa3NSMEZCU2l4SlFVRlhMRTFCUVdoQ0xFVkJRWGRDTzBGQlEzQkNMR2RDUVVGSkxFOUJRVThzWTBGQlVDeERRVUZ6UWl4SFFVRjBRaXhEUVVGS0xFVkJRV2RETzBGQlF6VkNMSFZDUVVGUExFZEJRVkFzUlVGQldTeEpRVUZhTEVkQlFXMUNMRTlCUVU4c1IwRkJVQ3hGUVVGWkxFMUJRVm9zUjBGQmNVSXNUMEZCVHl4SFFVRlFMRVZCUVZrc1QwRkJXaXhEUVVSYU8yRkJRV2hETzFOQlJFbzdPenM3T3pzN08wRkJNMUJoTEhGQ1FYVlJha0lzTmtOQlFXdENPMEZCUTJRc1pVRkJUenRCUVVOSUxIRkNRVUZUTEVOQlFWUTdRVUZEUVN4elFrRkJWU3hEUVVGV08xTkJSa29zUTBGRVl6czdPenM3T3pzN08wRkJkbEZFTEhGQ1FXOVNha0lzY1VSQlFYTkNPMEZCUTJ4Q0xHVkJRVThzV1VGQlVDeERRVVJyUWpzN08xZEJjRkpNSWl3aVptbHNaU0k2SWtGamRHbHZiaTVxY3lJc0luTnZkWEpqWlZKdmIzUWlPaUl2VlhObGNuTXZUV0YwZEM5VGFYUmxjeTl3YjNCdGIzUnBiMjRpTENKemIzVnlZMlZ6UTI5dWRHVnVkQ0k2V3lKcGJYQnZjblFnVUhKdlkyVnpjeUJtY205dElDY3VMaTl3Y205alpYTnpMMUJ5YjJObGMzTW5PMXh1YVcxd2IzSjBJSHNnYzIxdmIzUm9MQ0J6Y0dWbFpGQmxjbE5sWTI5dVpDQjlJR1p5YjIwZ0p5NHVMMmx1WXk5allXeGpKenRjYm1sdGNHOXlkQ0I3SUdselQySnFJSDBnWm5KdmJTQW5MaTR2YVc1akwzVjBhV3h6Snp0Y2JtbHRjRzl5ZENCaWFXNWtRV1JoY0hSbGNpQm1jbTl0SUNjdUxpOXBibU12WW1sdVpDMWhaR0Z3ZEdWeUp6dGNibHh1WTI5dWMzUWdSRVZHUVZWTVZGOVFVazlRSUQwZ0oyTjFjbkpsYm5Rbk8xeHVZMjl1YzNRZ1RsVk5SVkpKUTBGTVgxWkJURlZGVXlBOUlGdEVSVVpCVlV4VVgxQlNUMUFzSUNkbWNtOXRKeXdnSjNSdkp5d2dKMjFwYmljc0lDZHRZWGduWFR0Y2JtTnZibk4wSUU1VlRWOU9WVTFGVWtsRFFVeGZWa0ZNVlVWVElEMGdUbFZOUlZKSlEwRk1YMVpCVEZWRlV5NXNaVzVuZEdnN1hHNWNibVY0Y0c5eWRDQmtaV1poZFd4MElHTnNZWE56SUVGamRHbHZiaUJsZUhSbGJtUnpJRkJ5YjJObGMzTWdlMXh1SUNBZ0lHTnZibk4wY25WamRHOXlLSEJ5YjNCektTQjdYRzRnSUNBZ0lDQWdJSEJ5YjNCekxuTjBZWFJsSUQwZ2UzMDdYRzRnSUNBZ0lDQWdJSE4xY0dWeUtIQnliM0J6S1R0Y2JpQWdJQ0I5WEc1Y2JpQWdJQ0F2S2x4dUlDQWdJQ0FnSUNBaklGTmxkQ0JCWTNScGIyNGdjSEp2Y0dWeWRHbGxjMXh1SUNBZ0lDQWdJQ0FqSXlCVFpYUWdkWE5sY2kxa1pXWnBibVZrSUVGamRHbHZiaUJ3Y205d1pYSjBhV1Z6WEc1Y2JpQWdJQ0FnSUNBZ1FIQmhjbUZ0SUZ0dlltcGxZM1JkWEc0Z0lDQWdJQ0FnSUVCeVpYUjFjbTRnVzBGamRHbHZibDFjYmlBZ0lDQXFMMXh1SUNBZ0lITmxkQ2h3Y205d2N5QTlJSHQ5S1NCN1hHNGdJQ0FnSUNBZ0lHTnZibk4wSUhzZ2RtRnNkV1Z6TENCdmJpd2dMaTR1Y0hKdmNITlViMU5sZENCOUlEMGdjSEp2Y0hNN1hHNWNiaUFnSUNBZ0lDQWdjM1Z3WlhJdWMyVjBLSEJ5YjNCelZHOVRaWFFwTzF4dVhHNGdJQ0FnSUNBZ0lHbG1JQ2h2YmlrZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnTHk4Z1JIVmphM1I1Y0dsemFDQmphR1ZqYXlCbWIzSWdRV1JoY0hSbGNseHVJQ0FnSUNBZ0lDQWdJQ0FnYVdZZ0tDRnZiaTV6WlhSMFpYSXBJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0IwYUdsekxtOXVJRDBnWW1sdVpFRmtZWEIwWlhJb2IyNHBPMXh1SUNBZ0lDQWdJQ0FnSUNBZ2ZWeHVJQ0FnSUNBZ0lDQjlYRzVjYmlBZ0lDQWdJQ0FnZEdocGN5NTJZV3gxWlhNZ1BTQjBhR2x6TG5aaGJIVmxjeUI4ZkNCN2ZUdGNiaUFnSUNBZ0lDQWdkR2hwY3k1MllXeDFaVXRsZVhNZ1BTQjBhR2x6TG5aaGJIVmxTMlY1Y3lCOGZDQmJYVHRjYmlBZ0lDQWdJQ0FnZEdocGN5NXdZWEpsYm5STFpYbHpJRDBnZEdocGN5NXdZWEpsYm5STFpYbHpJSHg4SUZ0ZE8xeHVYRzRnSUNBZ0lDQWdJQzh2SUUxbGNtZGxJRzVsZHlCZ2RtRnNkV1ZnSUhCeWIzQmxjblJwWlhNZ2QybDBhQ0JsZUdsemRHbHVaMXh1SUNBZ0lDQWdJQ0JqYjI1emRDQmpkWEp5Wlc1MFZtRnNkV1Z6SUQwZ2RHaHBjeTUyWVd4MVpYTTdYRzRnSUNBZ0lDQWdJR052Ym5OMElHUmxabUYxYkhSV1lXeDFaU0E5SUhSb2FYTXVaMlYwUkdWbVlYVnNkRlpoYkhWbEtDazdYRzRnSUNBZ0lDQWdJR052Ym5OMElHUmxabUYxYkhSV1lXeDFaVkJ5YjNBZ1BTQjBhR2x6TG1kbGRFUmxabUYxYkhSV1lXeDFaVkJ5YjNBb0tUdGNibHh1SUNBZ0lDQWdJQ0F2THlCSmJtaGxjbWwwSUhaaGJIVmxJSEJ5YjNCbGNuUnBaWE1nWm5KdmJTQmdjSEp2Y0hOZ1hHNGdJQ0FnSUNBZ0lHWnZjaUFvYkdWMElHdGxlU0JwYmlCa1pXWmhkV3gwVm1Gc2RXVXBJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lHbG1JQ2hrWldaaGRXeDBWbUZzZFdVdWFHRnpUM2R1VUhKdmNHVnlkSGtvYTJWNUtTQW1KaUJ3Y205d2MxUnZVMlYwTG1oaGMwOTNibEJ5YjNCbGNuUjVLR3RsZVNrcElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQnBaaUFvY0hKdmNITlViMU5sZEZ0clpYbGRJQ0U5UFNCMWJtUmxabWx1WldRcElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnWkdWbVlYVnNkRlpoYkhWbFcydGxlVjBnUFNCd2NtOXdjMVJ2VTJWMFcydGxlVjA3WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnZlZ4dUlDQWdJQ0FnSUNBZ0lDQWdmVnh1SUNBZ0lDQWdJQ0I5WEc1Y2JpQWdJQ0FnSUNBZ0x5OGdRMmhsWTJzZ1lXeHNJSFpoYkhWbGN5QmhibVFnYzNCc2FYUWdhVzUwYnlCamFHbHNaQ0IyWVd4MVpYTWdZWE1nYm1WalkyVnpjMkZ5ZVZ4dUlDQWdJQ0FnSUNCbWIzSWdLR3hsZENCclpYa2dhVzRnZG1Gc2RXVnpLU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQnBaaUFvZG1Gc2RXVnpMbWhoYzA5M2JsQnliM0JsY25SNUtHdGxlU2twSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCamIyNXpkQ0IyWVd4MVpTQTlJSFpoYkhWbGMxdHJaWGxkTzF4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUdOdmJuTjBJR1Y0YVhOMGFXNW5WbUZzZFdVZ1BTQmpkWEp5Wlc1MFZtRnNkV1Z6VzJ0bGVWMDdYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdiR1YwSUhaaGJIVmxWSGx3WlNBOUlIdDlPMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJR3hsZENCdVpYZFdZV3gxWlNBOUlIdDlPMXh1WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnTHk4Z1EyOXVkbVZ5ZENCdVpYY2dkbUZzZFdVZ2FXNTBieUJ2WW1wbFkzUWdhV1lnYVhRZ2FYTnVKM1FnWVd4eVpXRmtlVnh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJR2xtSUNocGMwOWlhaWgyWVd4MVpTa3BJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2JtVjNWbUZzZFdVZ1BTQjJZV3gxWlR0Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCOUlHVnNjMlVnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQnVaWGRXWVd4MVpWdGtaV1poZFd4MFZtRnNkV1ZRY205d1hTQTlJSFpoYkhWbE8xeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lIMWNibHh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQzh2SUVsbUlIWmhiSFZsSUdGc2NtVmhaSGtnWlhocGMzUnpMQ0JqYUdWamF5Qm1iM0lnWVc1a0lIVnpaU0JsZUdsemRHbHVaeUIwZVhCbFhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2FXWWdLR1Y0YVhOMGFXNW5WbUZzZFdVcElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnYm1WM1ZtRnNkV1VnUFNCN0lDNHVMbVY0YVhOMGFXNW5WbUZzZFdVc0lDNHVMbTVsZDFaaGJIVmxJSDA3WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lIWmhiSFZsVkhsd1pTQTlJR1Y0YVhOMGFXNW5WbUZzZFdVdWRIbHdaVHRjYmx4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUM4dklFbG1JSFJvYVhNZ2FYTWdZU0J1WlhjZ2RtRnNkV1VzSUdOb1pXTnJJR1p2Y2lCMGVYQmxYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdmU0JsYkhObElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnYm1WM1ZtRnNkV1VnUFNCN0lDNHVMbVJsWm1GMWJIUldZV3gxWlN3Z0xpNHVibVYzVm1Gc2RXVWdmVHRjYmx4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQXZMeUJKWmlCdmJtVWdhWE1nWlhod2JHbGphWFJzZVNCaGMzTnBaMjVsWkN3Z2RYTmxJSFJvWVhSY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdhV1lnS0haaGJIVmxMblI1Y0dVcElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lIWmhiSFZsVkhsd1pTQTlJSFpoYkhWbExuUjVjR1U3WEc1Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdMeThnVDNJZ2FXWWdiM1Z5SUVGa1lYQjBaWElnYUdGeklHRWdkSGx3WlUxaGNDd2dkWE5sSUhSb1lYUmNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnZlNCbGJITmxJR2xtSUNoMGFHbHpMbTl1SUNZbUlIUm9hWE11YjI0dVoyVjBWbUZzZFdWVWVYQmxLU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0IyWVd4MVpWUjVjR1VnUFNCMGFHbHpMbTl1TG1kbGRGWmhiSFZsVkhsd1pTaHJaWGtwTzF4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQjlYRzVjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0x5OGdUV0Y1WW1VZ2NuVnVJR0IwWlhOMFlDQnZiaUJqYjJ4dmNpQm9aWEpsWEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnZlZ4dVhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0x5OGdTV1lnZDJVbmRtVWdaMjkwSUdFZ2RtRnNkV1ZVZVhCbElIUm9aVzRnY0hKbGNISnZZMlZ6Y3lCMGFHVWdkbUZzZFdVZ1lXTmpiM0prYVc1bmJIbGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQnBaaUFvZG1Gc2RXVlVlWEJsS1NCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJRzVsZDFaaGJIVmxMblI1Y0dVZ1BTQjJZV3gxWlZSNWNHVTdYRzVjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0x5OGdTV1lnZEdocGN5QjJZV3gxWlNCemFHOTFiR1FnWW1VZ2MzQnNhWFFzSUhOd2JHbDBYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUdsbUlDaDJZV3gxWlZSNWNHVXVjM0JzYVhRcElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lHTnZibk4wSUdOb2FXeGtWbUZzZFdWeklEMGdlMzA3WEc1Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUM4dklFeHZiM0FnYjNabGNpQnVkVzFsY21sallXd2dkbUZzZFdWeklHRnVaQ0J6Y0d4cGRDQmhibmtnY0hKbGMyVnVkRnh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdabTl5SUNoc1pYUWdhU0E5SURBN0lHa2dQQ0JPVlUxZlRsVk5SVkpKUTBGTVgxWkJURlZGVXpzZ2FTc3JLU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ1kyOXVjM1FnY0hKdmNFNWhiV1VnUFNCT1ZVMUZVa2xEUVV4ZlZrRk1WVVZUVzJsZE8xeHVYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnYVdZZ0tHNWxkMVpoYkhWbExtaGhjMDkzYmxCeWIzQmxjblI1S0hCeWIzQk9ZVzFsS1NrZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCamIyNXpkQ0J6Y0d4cGRGWmhiSFZsY3lBOUlIWmhiSFZsVkhsd1pTNXpjR3hwZENodVpYZFdZV3gxWlZ0d2NtOXdUbUZ0WlYwcE8xeHVYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lHWnZjaUFvYkdWMElITndiR2wwUzJWNUlHbHVJSE53YkdsMFZtRnNkV1Z6S1NCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQnBaaUFvYzNCc2FYUldZV3gxWlhNdWFHRnpUM2R1VUhKdmNHVnlkSGtvYzNCc2FYUkxaWGtwS1NCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnWTI5dWMzUWdjM0JzYVhSV1lXeDFaU0E5SUhOd2JHbDBWbUZzZFdWelczTndiR2wwUzJWNVhUdGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBdkx5QkRjbVZoZEdVZ2JtVjNJR05vYVd4a0lIWmhiSFZsSUdsbUlHUnZaWE51SjNRZ1pYaHBjM1JjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQnBaaUFvSVdOb2FXeGtWbUZzZFdWelczTndiR2wwUzJWNVhTa2dlMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0JqYUdsc1pGWmhiSFZsYzF0emNHeHBkRXRsZVYwZ1BTQjdJQzR1TG01bGQxWmhiSFZsSUgwN1hHNWNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdhV1lnS0haaGJIVmxWSGx3WlM1a1pXWmhkV3gwVUhKdmNITXBJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lHTm9hV3hrVm1Gc2RXVnpXM053YkdsMFMyVjVYU0E5SUNoMllXeDFaVlI1Y0dVdVpHVm1ZWFZzZEZCeWIzQnpXM053YkdsMFMyVjVYU2tnUDF4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUhzZ0xpNHVkbUZzZFdWVWVYQmxMbVJsWm1GMWJIUlFjbTl3YzF0emNHeHBkRXRsZVYwc0lDNHVMbU5vYVd4a1ZtRnNkV1Z6VzNOd2JHbDBTMlY1WFNCOUlEcGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQjdJQzR1TG5aaGJIVmxWSGx3WlM1a1pXWmhkV3gwVUhKdmNITXNJQzR1TG1Ob2FXeGtWbUZzZFdWelczTndiR2wwUzJWNVhTQjlPMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0I5WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdmVnh1WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdZMmhwYkdSV1lXeDFaWE5iYzNCc2FYUkxaWGxkVzNCeWIzQk9ZVzFsWFNBOUlITndiR2wwVm1Gc2RXVTdYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0I5WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJSDFjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCOVhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCOVhHNWNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lHNWxkMVpoYkhWbExtTm9hV3hrY21WdUlEMGdlMzA3WEc1Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUM4dklFNXZkeUJzYjI5d0lIUm9jbTkxWjJnZ1lXeHNJR05vYVd4a0lIWmhiSFZsY3lCaGJtUWdZV1JrSUhSb1pXMGdZWE1nYm05eWJXRnNJSFpoYkhWbGMxeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ1ptOXlJQ2hzWlhRZ1kyaHBiR1JMWlhrZ2FXNGdZMmhwYkdSV1lXeDFaWE1wSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQnBaaUFvWTJocGJHUldZV3gxWlhNdWFHRnpUM2R1VUhKdmNHVnlkSGtvWTJocGJHUkxaWGtwS1NCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUdOdmJuTjBJR05vYVd4a1ZtRnNkV1VnUFNCamFHbHNaRlpoYkhWbGMxdGphR2xzWkV0bGVWMDdYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lHTnZibk4wSUdOdmJXSnBibVZrUzJWNUlEMGdhMlY1SUNzZ1kyaHBiR1JMWlhrN1hHNWNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2JtVjNWbUZzZFdVdVkyaHBiR1J5Wlc1YmEyVjVYU0E5SUdOb2FXeGtWbUZzZFdVdVkzVnljbVZ1ZER0Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnWTNWeWNtVnVkRlpoYkhWbGMxdGpiMjFpYVc1bFpFdGxlVjBnUFNCamFHbHNaRlpoYkhWbE8xeHVYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lHbG1JQ2gwYUdsekxuWmhiSFZsUzJWNWN5NXBibVJsZUU5bUtHTnZiV0pwYm1Wa1MyVjVLU0E5UFQwZ0xURXBJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUhSb2FYTXVkbUZzZFdWTFpYbHpMbkIxYzJnb1kyOXRZbWx1WldSTFpYa3BPMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQjlYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnZlZ4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnZlZ4dVhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBdkx5QlRZWFpsSUdFZ2RHVnRjR3hoZEdVZ1ptOXlJSEpsWTI5dFltbHVZWFJwYjI0Z2FXWWdjSEpsYzJWdWRGeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2FXWWdLSFpoYkhWbFZIbHdaUzUwWlcxd2JHRjBaU2tnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lHNWxkMVpoYkhWbExuUmxiWEJzWVhSbElEMGdibVYzVm1Gc2RXVXVkR1Z0Y0d4aGRHVWdmSHdnZG1Gc2RXVlVlWEJsTG5SbGJYQnNZWFJsS0c1bGQxWmhiSFZsTG1OMWNuSmxiblFwTzF4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnZlZ4dVhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQzh2SUU5eUlIZGxJR3AxYzNRZ2FHRjJaU0JrWldaaGRXeDBJSFpoYkhWbElIQnliM0J6TENCc2IyRmtJSFJvYjNObElDQWdYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUgwZ1pXeHpaU0JwWmlBb2RtRnNkV1ZVZVhCbExtUmxabUYxYkhSUWNtOXdjeWtnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnYm1WM1ZtRnNkV1VnUFNCN0lDNHVMblpoYkhWbFZIbHdaUzVrWldaaGRXeDBVSEp2Y0hNc0lDNHVMbTVsZDFaaGJIVmxJSDA3WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lIMWNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQjlYRzVjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0F2THlCVmNHUmhkR1VnWVhCd2NtOXdjbWxoZEdVZ2JHbHpkSE1nZDJsMGFDQjJZV3gxWlNCclpYbGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQnBaaUFvYm1WM1ZtRnNkV1V1WTJocGJHUnlaVzRwSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdhV1lnS0hSb2FYTXVjR0Z5Wlc1MFMyVjVjeTVwYm1SbGVFOW1LR3RsZVNrZ1BUMDlJQzB4S1NCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCMGFHbHpMbkJoY21WdWRFdGxlWE11Y0hWemFDaHJaWGtwTzF4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQjlYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdmU0JsYkhObElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnYVdZZ0tIUm9hWE11ZG1Gc2RXVkxaWGx6TG1sdVpHVjRUMllvYTJWNUtTQTlQVDBnTFRFcElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lIUm9hWE11ZG1Gc2RXVkxaWGx6TG5CMWMyZ29hMlY1S1R0Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdmVnh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJSDFjYmx4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUdOMWNuSmxiblJXWVd4MVpYTmJhMlY1WFNBOUlHNWxkMVpoYkhWbE8xeHVJQ0FnSUNBZ0lDQWdJQ0FnZlZ4dUlDQWdJQ0FnSUNCOVhHNWNiaUFnSUNBZ0lDQWdMeThnVUhKbFkyOXRjSFYwWlNCMllXeDFaU0JyWlhrZ1lXNWtJSEJoY21WdWRDQnJaWGtnYkdWdVozUm9JSFJ2SUhCeVpYWmxiblFnY0dWeUxXWnlZVzFsSUcxbFlYTjFjbVZ0Wlc1MFhHNGdJQ0FnSUNBZ0lIUm9hWE11Ym5WdFZtRnNkV1ZMWlhseklEMGdkR2hwY3k1MllXeDFaVXRsZVhNdWJHVnVaM1JvTzF4dUlDQWdJQ0FnSUNCMGFHbHpMbTUxYlZCaGNtVnVkRXRsZVhNZ1BTQjBhR2x6TG5CaGNtVnVkRXRsZVhNdWJHVnVaM1JvTzF4dVhHNGdJQ0FnSUNBZ0lISmxkSFZ5YmlCMGFHbHpPMXh1SUNBZ0lIMWNibHh1SUNBZ0lDOHFYRzRnSUNBZ0lDQWdJRVJsWTJsa1pTQjNhR1YwYUdWeUlIUm9hWE1nUVdOMGFXOXVJSGRwYkd3Z2NtVnVaR1Z5SUc5dUlHNWxlSFFnWm5KaGJXVmNibHh1SUNBZ0lDQWdJQ0JBY0dGeVlXMGdXMEZqZEdsdmJsMWNiaUFnSUNBZ0lDQWdRSEJoY21GdElGdHVkVzFpWlhKZFhHNGdJQ0FnSUNBZ0lFQndZWEpoYlNCYmJuVnRZbVZ5WFZ4dUlDQWdJQ0FnSUNCQWNtVjBkWEp1SUZ0aWIyOXNaV0Z1WFRvZ1VtVjBkWEp1SUhSeWRXVWdkRzhnY21WdVpHVnlYRzRnSUNBZ0tpOWNiaUFnSUNCM2FXeHNVbVZ1WkdWeUtHRmpkR2x2Yml3Z1puSmhiV1ZUZEdGdGNDd2daV3hoY0hObFpDa2dlMXh1SUNBZ0lDQWdJQ0JzWlhRZ2FHRnpRMmhoYm1kbFpDQTlJR1poYkhObE8xeHVYRzRnSUNBZ0lDQWdJQzh2SUZWd1pHRjBaU0JpWVhObElIWmhiSFZsYzF4dUlDQWdJQ0FnSUNCbWIzSWdLR3hsZENCcElEMGdNRHNnYVNBOElIUm9hWE11Ym5WdFZtRnNkV1ZMWlhsek95QnBLeXNwSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJR052Ym5OMElHdGxlU0E5SUhSb2FYTXVkbUZzZFdWTFpYbHpXMmxkTzF4dUlDQWdJQ0FnSUNBZ0lDQWdZMjl1YzNRZ2RtRnNkV1VnUFNCMGFHbHpMblpoYkhWbGMxdHJaWGxkTzF4dUlDQWdJQ0FnSUNBZ0lDQWdiR1YwSUhWd1pHRjBaV1JXWVd4MVpTQTlJSFpoYkhWbExtTjFjbkpsYm5RN1hHNWNiaUFnSUNBZ0lDQWdJQ0FnSUM4dklGSjFiaUIwY21GdWMyWnZjbTBnWm5WdVkzUnBiMjRnS0dsbUlIQnlaWE5sYm5RcFhHNGdJQ0FnSUNBZ0lDQWdJQ0JwWmlBb2RtRnNkV1V1ZEhKaGJuTm1iM0p0S1NCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2RYQmtZWFJsWkZaaGJIVmxJRDBnZG1Gc2RXVXVkSEpoYm5ObWIzSnRLSFZ3WkdGMFpXUldZV3gxWlN3Z2EyVjVMQ0IwYUdsektUdGNiaUFnSUNBZ0lDQWdJQ0FnSUgxY2JseHVJQ0FnSUNBZ0lDQWdJQ0FnTHk4Z1UyMXZiM1JvSUhaaGJIVmxJR2xtSUhkbElHaGhkbVVnYzIxdmIzUm9hVzVuWEc0Z0lDQWdJQ0FnSUNBZ0lDQnBaaUFvZG1Gc2RXVXVjMjF2YjNSb0tTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdkWEJrWVhSbFpGWmhiSFZsSUQwZ2MyMXZiM1JvS0hWd1pHRjBaV1JXWVd4MVpTd2dkbUZzZFdVdWNISmxkaXdnWld4aGNITmxaQ3dnZG1Gc2RXVXVjMjF2YjNSb0tUdGNiaUFnSUNBZ0lDQWdJQ0FnSUgxY2JseHVJQ0FnSUNBZ0lDQWdJQ0FnYVdZZ0tDRjBhR2x6TG1OaGJHTjFiR0YwWlhOV1pXeHZZMmwwZVNrZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lIWmhiSFZsTG5abGJHOWphWFI1SUQwZ2MzQmxaV1JRWlhKVFpXTnZibVFvZFhCa1lYUmxaRlpoYkhWbElDMGdkbUZzZFdVdVkzVnljbVZ1ZEN3Z1pXeGhjSE5sWkNrN1hHNGdJQ0FnSUNBZ0lDQWdJQ0I5WEc1Y2JpQWdJQ0FnSUNBZ0lDQWdJSFpoYkhWbExuQnlaWFlnUFNCMllXeDFaUzVqZFhKeVpXNTBJRDBnZFhCa1lYUmxaRlpoYkhWbE8xeHVYRzRnSUNBZ0lDQWdJQ0FnSUNCamIyNXpkQ0IyWVd4MVpVWnZjbE4wWVhSbElEMGdLSFpoYkhWbExuVnVhWFFwSUQ4Z2RtRnNkV1V1WTNWeWNtVnVkQ0FySUhaaGJIVmxMblZ1YVhRZ09pQjJZV3gxWlM1amRYSnlaVzUwTzF4dVhHNGdJQ0FnSUNBZ0lDQWdJQ0F2THlCQlpHUWdjM1J5WVdsbmFIUWdkRzhnYzNSaGRHVWdhV1lnYm04Z2NHRnlaVzUwWEc0Z0lDQWdJQ0FnSUNBZ0lDQnBaaUFvSVhaaGJIVmxMbkJoY21WdWRDa2dlMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJR2xtSUNoMGFHbHpMbk4wWVhSbFcydGxlVjBnSVQwOUlIWmhiSFZsUm05eVUzUmhkR1VwSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdkR2hwY3k1emRHRjBaVnRyWlhsZElEMGdkbUZzZFdWR2IzSlRkR0YwWlR0Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdhR0Z6UTJoaGJtZGxaQ0E5SUhSeWRXVTdYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdmVnh1SUNBZ0lDQWdJQ0FnSUNBZ0x5OGdUM0lnWVdSa0lIUnZJSEJoY21WdWRGeHVJQ0FnSUNBZ0lDQWdJQ0FnZlNCbGJITmxJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0IwYUdsekxuWmhiSFZsYzF0MllXeDFaUzV3WVhKbGJuUmRMbU5vYVd4a2NtVnVXMnRsZVYwZ1BTQjJZV3gxWlVadmNsTjBZWFJsTzF4dUlDQWdJQ0FnSUNBZ0lDQWdmVnh1SUNBZ0lDQWdJQ0I5WEc1Y2JpQWdJQ0FnSUNBZ0x5OGdWWEJrWVhSbElIQmhjbVZ1ZENCMllXeDFaWE5jYmlBZ0lDQWdJQ0FnWm05eUlDaHNaWFFnYVNBOUlEQTdJR2tnUENCMGFHbHpMbTUxYlZCaGNtVnVkRXRsZVhNN0lHa3JLeWtnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdZMjl1YzNRZ2EyVjVJRDBnZEdocGN5NXdZWEpsYm5STFpYbHpXMmxkTzF4dUlDQWdJQ0FnSUNBZ0lDQWdZMjl1YzNRZ2RtRnNkV1VnUFNCMGFHbHpMblpoYkhWbGMxdHJaWGxkTzF4dVhHNGdJQ0FnSUNBZ0lDQWdJQ0IyWVd4MVpTNWpkWEp5Wlc1MElEMGdkbUZzZFdVdWRIbHdaUzVqYjIxaWFXNWxLSFpoYkhWbExtTm9hV3hrY21WdUxDQjJZV3gxWlM1MFpXMXdiR0YwWlNrN1hHNWNiaUFnSUNBZ0lDQWdJQ0FnSUdsbUlDaDBhR2x6TG5OMFlYUmxXMnRsZVYwZ0lUMDlJSFpoYkhWbExtTjFjbkpsYm5RcElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQjBhR2x6TG5OMFlYUmxXMnRsZVYwZ1BTQjJZV3gxWlM1amRYSnlaVzUwTzF4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUdoaGMwTm9ZVzVuWldRZ1BTQjBjblZsTzF4dUlDQWdJQ0FnSUNBZ0lDQWdmVnh1SUNBZ0lDQWdJQ0I5WEc1Y2JpQWdJQ0FnSUNBZ2NtVjBkWEp1SUNoMGFHbHpMbTl1UTJ4bFlXNTFjQ2tnUHlCMGNuVmxJRG9nYUdGelEyaGhibWRsWkR0Y2JpQWdJQ0I5WEc1Y2JpQWdJQ0J2YmxKbGJtUmxjaWg3SUhOMFlYUmxMQ0J2YmlCOUtTQjdYRzRnSUNBZ0lDQWdJR2xtSUNodmJpQW1KaUJ2Ymk1elpYUXBJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lHOXVMbk5sZENoemRHRjBaU2s3WEc0Z0lDQWdJQ0FnSUgxY2JseHVJQ0FnSUNBZ0lDQnBaaUFvZEdocGN5NXZia1p5WVcxbEtTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNCMGFHbHpMbTl1Um5KaGJXVW9kR2hwY3lrN1hHNGdJQ0FnSUNBZ0lIMWNiaUFnSUNCOVhHNWNiaUFnSUNCd1lYVnpaU2dwSUh0Y2JpQWdJQ0FnSUNBZ2MzVndaWEl1YzNSdmNDZ3BPMXh1SUNBZ0lDQWdJQ0J5WlhSMWNtNGdkR2hwY3p0Y2JpQWdJQ0I5WEc1Y2JpQWdJQ0J5WlhOMWJXVW9LU0I3WEc0Z0lDQWdJQ0FnSUhOMWNHVnlMbk4wWVhKMEtDazdYRzRnSUNBZ0lDQWdJSEpsZEhWeWJpQjBhR2x6TzF4dUlDQWdJSDFjYmx4dUlDQWdJSE4wWVhKMEtDa2dlMXh1SUNBZ0lDQWdJQ0JqYjI1emRDQjJZV3gxWlhNZ1BTQjBhR2x6TG5aaGJIVmxjenRjYmlBZ0lDQWdJQ0FnYzNWd1pYSXVjM1JoY25Rb0tUdGNibHh1SUNBZ0lDQWdJQ0JtYjNJZ0tHeGxkQ0JyWlhrZ2FXNGdkbUZzZFdWektTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNCcFppQW9kbUZzZFdWekxtaGhjMDkzYmxCeWIzQmxjblI1S0d0bGVTa3BJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0IyWVd4MVpYTmJhMlY1WFM1d2NtVjJJRDBnZG1Gc2RXVnpXMnRsZVYwdWIzSnBaMmx1SUQwZ2RtRnNkV1Z6VzJ0bGVWMHVZM1Z5Y21WdWREdGNiaUFnSUNBZ0lDQWdJQ0FnSUgxY2JpQWdJQ0FnSUNBZ2ZWeHVJQ0FnSUgxY2JseHVJQ0FnSUM4cVhHNGdJQ0FnSUNBZ0lDTWdSMlYwSUdSbFptRjFiSFFnUVdOMGFXOXVJSFpoYkhWbElIQnliM0JsY25ScFpYTmNibHh1SUNBZ0lDQWdJQ0JBY21WMGRYSnVJRnR2WW1wbFkzUmRYRzRnSUNBZ0tpOWNiaUFnSUNCblpYUkVaV1poZFd4MFZtRnNkV1VvS1NCN1hHNGdJQ0FnSUNBZ0lISmxkSFZ5YmlCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0JqZFhKeVpXNTBPaUF3TEZ4dUlDQWdJQ0FnSUNBZ0lDQWdkbVZzYjJOcGRIazZJREJjYmlBZ0lDQWdJQ0FnZlR0Y2JpQWdJQ0I5WEc1Y2JpQWdJQ0F2S2x4dUlDQWdJQ0FnSUNBaklFZGxkQ0JrWldaaGRXeDBJRUZqZEdsdmJpQjJZV3gxWlNCd2NtOXdaWEowZVNCdVlXMWxYRzRnSUNBZ0lDQWdJQ01qSUZObGRDQjBhR2x6SUdCMllXeDFaV0FnY0hKdmNHVnlkSGtnZDJobGJpQnpaWFFnWVhNZ2RtRnNkV1VnYVc1emRHVmhaQ0J2WmlCdlltcGxZM1JjYmx4dUlDQWdJQ0FnSUNCQWNtVjBkWEp1SUZ0emRISnBibWRkWEc0Z0lDQWdLaTljYmlBZ0lDQm5aWFJFWldaaGRXeDBWbUZzZFdWUWNtOXdLQ2tnZTF4dUlDQWdJQ0FnSUNCeVpYUjFjbTRnUkVWR1FWVk1WRjlRVWs5UU8xeHVJQ0FnSUgxY2JuMWNiaUpkZlE9PVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvYWN0aW9ucy9BY3Rpb24uanNcbiAqKiBtb2R1bGUgaWQgPSAzMlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX0lucHV0MiA9IHJlcXVpcmUoJy4vSW5wdXQnKTtcblxudmFyIF9JbnB1dDMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9JbnB1dDIpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmICghc2VsZikgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIGNhbGwgJiYgKHR5cGVvZiBjYWxsID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpID8gY2FsbCA6IHNlbGY7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgXCIgKyB0eXBlb2Ygc3VwZXJDbGFzcyk7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgZW51bWVyYWJsZTogZmFsc2UsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcykgOiBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzOyB9XG5cbnZhciBQb2ludGVyID0gZnVuY3Rpb24gKF9JbnB1dCkge1xuICAgIF9pbmhlcml0cyhQb2ludGVyLCBfSW5wdXQpO1xuXG4gICAgZnVuY3Rpb24gUG9pbnRlcihpbml0aWFsU3RhdGUsIG1vdmVFdmVudCwgZXZlbnRUb1BvaW50KSB7XG4gICAgICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBQb2ludGVyKTtcblxuICAgICAgICB2YXIgX3RoaXMgPSBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCBfSW5wdXQuY2FsbCh0aGlzLCBpbml0aWFsU3RhdGUpKTtcblxuICAgICAgICBfdGhpcy5ldmVudFRvUG9pbnQgPSBldmVudFRvUG9pbnQ7XG4gICAgICAgIF90aGlzLm1vdmVFdmVudCA9IG1vdmVFdmVudDtcbiAgICAgICAgcmV0dXJuIF90aGlzO1xuICAgIH1cblxuICAgIFBvaW50ZXIucHJvdG90eXBlLmxhdGVzdCA9IGZ1bmN0aW9uIGxhdGVzdChlKSB7XG4gICAgICAgIF9JbnB1dC5wcm90b3R5cGUubGF0ZXN0LmNhbGwodGhpcywgdGhpcy5ldmVudFRvUG9pbnQoZSkpO1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgfTtcblxuICAgIFBvaW50ZXIucHJvdG90eXBlLnN0YXJ0ID0gZnVuY3Rpb24gc3RhcnQoKSB7XG4gICAgICAgIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gICAgICAgIF9JbnB1dC5wcm90b3R5cGUuc3RhcnQuY2FsbCh0aGlzKTtcbiAgICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIodGhpcy5tb3ZlRXZlbnQsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICByZXR1cm4gX3RoaXMyLmxhdGVzdChlKTtcbiAgICAgICAgfSk7XG4gICAgfTtcblxuICAgIFBvaW50ZXIucHJvdG90eXBlLnN0b3AgPSBmdW5jdGlvbiBzdG9wKCkge1xuICAgICAgICB2YXIgX3RoaXMzID0gdGhpcztcblxuICAgICAgICBfSW5wdXQucHJvdG90eXBlLnN0b3AuY2FsbCh0aGlzKTtcbiAgICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIodGhpcy5tb3ZlRXZlbnQsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICByZXR1cm4gX3RoaXMzLmxhdGVzdChlKTtcbiAgICAgICAgfSk7XG4gICAgfTtcblxuICAgIHJldHVybiBQb2ludGVyO1xufShfSW5wdXQzLmRlZmF1bHQpO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBQb2ludGVyO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluTnlZeTlwYm5CMWRDOVFiMmx1ZEdWeUxtcHpJbDBzSW01aGJXVnpJanBiWFN3aWJXRndjR2x1WjNNaU9pSTdPenM3T3pzN096czdPenM3T3pzN1NVRkZjVUk3T3p0QlFVTnFRaXhoUVVScFFpeFBRVU5xUWl4RFFVRlpMRmxCUVZvc1JVRkJNRUlzVTBGQk1VSXNSVUZCY1VNc1dVRkJja01zUlVGQmJVUTdPRUpCUkd4RExGTkJRMnRET3p0eFJFRkRMME1zYTBKQlFVMHNXVUZCVGl4SFFVUXJRenM3UVVGRkwwTXNZMEZCU3l4WlFVRk1MRWRCUVc5Q0xGbEJRWEJDTEVOQlJpdERPMEZCUnk5RExHTkJRVXNzVTBGQlRDeEhRVUZwUWl4VFFVRnFRaXhEUVVnclF6czdTMEZCYmtRN08wRkJSR2xDTEhOQ1FVOXFRaXg1UWtGQlR5eEhRVUZITzBGQlEwNHNlVUpCUVUwc1RVRkJUaXhaUVVGaExFdEJRVXNzV1VGQlRDeERRVUZyUWl4RFFVRnNRaXhEUVVGaUxFVkJSRTA3UVVGRlRpeFZRVUZGTEdOQlFVWXNSMEZHVFRzN08wRkJVRThzYzBKQldXcENMSGxDUVVGUk96czdRVUZEU2l4NVFrRkJUU3hMUVVGT0xGbEJSRWs3UVVGRlNpeHBRa0ZCVXl4bFFVRlVMRU5CUVhsQ0xHZENRVUY2UWl4RFFVRXdReXhMUVVGTExGTkJRVXdzUlVGQlowSXNWVUZCUXl4RFFVRkVPMjFDUVVGUExFOUJRVXNzVFVGQlRDeERRVUZaTEVOQlFWbzdVMEZCVUN4RFFVRXhSQ3hEUVVaSk96czdRVUZhVXl4elFrRnBRbXBDTEhWQ1FVRlBPenM3UVVGRFNDeDVRa0ZCVFN4SlFVRk9MRmxCUkVjN1FVRkZTQ3hwUWtGQlV5eGxRVUZVTEVOQlFYbENMRzFDUVVGNlFpeERRVUUyUXl4TFFVRkxMRk5CUVV3c1JVRkJaMElzVlVGQlF5eERRVUZFTzIxQ1FVRlBMRTlCUVVzc1RVRkJUQ3hEUVVGWkxFTkJRVm83VTBGQlVDeERRVUUzUkN4RFFVWkhPenM3VjBGcVFsVWlMQ0ptYVd4bElqb2lVRzlwYm5SbGNpNXFjeUlzSW5OdmRYSmpaVkp2YjNRaU9pSXZWWE5sY25NdlRXRjBkQzlUYVhSbGN5OXdiM0J0YjNScGIyNGlMQ0p6YjNWeVkyVnpRMjl1ZEdWdWRDSTZXeUpwYlhCdmNuUWdTVzV3ZFhRZ1puSnZiU0FuTGk5SmJuQjFkQ2M3WEc1Y2JtVjRjRzl5ZENCa1pXWmhkV3gwSUdOc1lYTnpJRkJ2YVc1MFpYSWdaWGgwWlc1a2N5QkpibkIxZENCN1hHNGdJQ0FnWTI5dWMzUnlkV04wYjNJb2FXNXBkR2xoYkZOMFlYUmxMQ0J0YjNabFJYWmxiblFzSUdWMlpXNTBWRzlRYjJsdWRDa2dlMXh1SUNBZ0lDQWdJQ0J6ZFhCbGNpaHBibWwwYVdGc1UzUmhkR1VwTzF4dUlDQWdJQ0FnSUNCMGFHbHpMbVYyWlc1MFZHOVFiMmx1ZENBOUlHVjJaVzUwVkc5UWIybHVkRHRjYmlBZ0lDQWdJQ0FnZEdocGN5NXRiM1psUlhabGJuUWdQU0J0YjNabFJYWmxiblE3WEc0Z0lDQWdmVnh1WEc0Z0lDQWdiR0YwWlhOMEtHVXBJSHRjYmlBZ0lDQWdJQ0FnYzNWd1pYSXViR0YwWlhOMEtIUm9hWE11WlhabGJuUlViMUJ2YVc1MEtHVXBLVHRjYmlBZ0lDQWdJQ0FnWlM1d2NtVjJaVzUwUkdWbVlYVnNkQ2dwTzF4dUlDQWdJSDFjYmx4dUlDQWdJSE4wWVhKMEtDa2dlMXh1SUNBZ0lDQWdJQ0J6ZFhCbGNpNXpkR0Z5ZENncE8xeHVJQ0FnSUNBZ0lDQmtiMk4xYldWdWRDNWtiMk4xYldWdWRFVnNaVzFsYm5RdVlXUmtSWFpsYm5STWFYTjBaVzVsY2loMGFHbHpMbTF2ZG1WRmRtVnVkQ3dnS0dVcElEMCtJSFJvYVhNdWJHRjBaWE4wS0dVcEtUdGNiaUFnSUNCOVhHNWNiaUFnSUNCemRHOXdLQ2tnZTF4dUlDQWdJQ0FnSUNCemRYQmxjaTV6ZEc5d0tDazdYRzRnSUNBZ0lDQWdJR1J2WTNWdFpXNTBMbVJ2WTNWdFpXNTBSV3hsYldWdWRDNXlaVzF2ZG1WRmRtVnVkRXhwYzNSbGJtVnlLSFJvYVhNdWJXOTJaVVYyWlc1MExDQW9aU2tnUFQ0Z2RHaHBjeTVzWVhSbGMzUW9aU2twTzF4dUlDQWdJSDFjYm4xY2JpSmRmUT09XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9pbnB1dC9Qb2ludGVyLmpzXG4gKiogbW9kdWxlIGlkID0gMzNcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbnZhciBUUkFOU0xBVEUgPSAndHJhbnNsYXRlJztcblxuZXhwb3J0cy5kZWZhdWx0ID0ge1xuICAgIHg6IFRSQU5TTEFURSArICdYJyxcbiAgICB5OiBUUkFOU0xBVEUgKyAnWScsXG4gICAgejogVFJBTlNMQVRFICsgJ1onXG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluTnlZeTloWkdGd2RHVnlMMk56Y3k5emRHRjBaUzF0WVhBdWFuTWlYU3dpYm1GdFpYTWlPbHRkTENKdFlYQndhVzVuY3lJNklqczdPMEZCUVVFc1NVRkJUU3haUVVGWkxGZEJRVm83TzJ0Q1FVVlRPMEZCUTFnc1QwRkJSeXhaUVVGWkxFZEJRVm83UVVGRFNDeFBRVUZITEZsQlFWa3NSMEZCV2p0QlFVTklMRTlCUVVjc1dVRkJXU3hIUVVGYUlpd2labWxzWlNJNkluTjBZWFJsTFcxaGNDNXFjeUlzSW5OdmRYSmpaVkp2YjNRaU9pSXZWWE5sY25NdlRXRjBkQzlUYVhSbGN5OXdiM0J0YjNScGIyNGlMQ0p6YjNWeVkyVnpRMjl1ZEdWdWRDSTZXeUpqYjI1emRDQlVVa0ZPVTB4QlZFVWdQU0FuZEhKaGJuTnNZWFJsSnp0Y2JseHVaWGh3YjNKMElHUmxabUYxYkhRZ2UxeHVJQ0FnSUhnNklGUlNRVTVUVEVGVVJTQXJJQ2RZSnl4Y2JpQWdJQ0I1T2lCVVVrRk9VMHhCVkVVZ0t5QW5XU2NzWEc0Z0lDQWdlam9nVkZKQlRsTk1RVlJGSUNzZ0oxb25YRzU5T3lKZGZRPT1cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2FkYXB0ZXIvY3NzL3N0YXRlLW1hcC5qc1xuICoqIG1vZHVsZSBpZCA9IDM0XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfYW5nbGUgPSByZXF1aXJlKCcuLi8uLi92YWx1ZS10eXBlcy9hbmdsZScpO1xuXG52YXIgX2FuZ2xlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2FuZ2xlKTtcblxudmFyIF9hbHBoYSA9IHJlcXVpcmUoJy4uLy4uL3ZhbHVlLXR5cGVzL2FscGhhJyk7XG5cbnZhciBfYWxwaGEyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfYWxwaGEpO1xuXG52YXIgX2F4ZXMgPSByZXF1aXJlKCcuLi8uLi92YWx1ZS10eXBlcy9heGVzJyk7XG5cbnZhciBfYXhlczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9heGVzKTtcblxudmFyIF9jb2xvciA9IHJlcXVpcmUoJy4uLy4uL3ZhbHVlLXR5cGVzL2NvbG9yJyk7XG5cbnZhciBfY29sb3IyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY29sb3IpO1xuXG52YXIgX3NjYWxlID0gcmVxdWlyZSgnLi4vLi4vdmFsdWUtdHlwZXMvc2NhbGUnKTtcblxudmFyIF9zY2FsZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9zY2FsZSk7XG5cbnZhciBfc2hhZG93ID0gcmVxdWlyZSgnLi4vLi4vdmFsdWUtdHlwZXMvc2hhZG93Jyk7XG5cbnZhciBfc2hhZG93MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3NoYWRvdyk7XG5cbnZhciBfcG9zaXRpb25zID0gcmVxdWlyZSgnLi4vLi4vdmFsdWUtdHlwZXMvcG9zaXRpb25zJyk7XG5cbnZhciBfcG9zaXRpb25zMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3Bvc2l0aW9ucyk7XG5cbnZhciBfcHggPSByZXF1aXJlKCcuLi8uLi92YWx1ZS10eXBlcy9weCcpO1xuXG52YXIgX3B4MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3B4KTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZXhwb3J0cy5kZWZhdWx0ID0ge1xuICAgIC8vIENvbG9yIHByb3BzXG4gICAgY29sb3I6IF9jb2xvcjIuZGVmYXVsdCxcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IF9jb2xvcjIuZGVmYXVsdCxcbiAgICBvdXRsaW5lQ29sb3I6IF9jb2xvcjIuZGVmYXVsdCxcbiAgICBmaWxsOiBfY29sb3IyLmRlZmF1bHQsXG4gICAgc3Ryb2tlOiBfY29sb3IyLmRlZmF1bHQsXG5cbiAgICAvLyBCb3JkZXIgcHJvcHNcbiAgICBib3JkZXJDb2xvcjogX2NvbG9yMi5kZWZhdWx0LFxuICAgIGJvcmRlclRvcENvbG9yOiBfY29sb3IyLmRlZmF1bHQsXG4gICAgYm9yZGVyUmlnaHRDb2xvcjogX2NvbG9yMi5kZWZhdWx0LFxuICAgIGJvcmRlckJvdHRvbUNvbG9yOiBfY29sb3IyLmRlZmF1bHQsXG4gICAgYm9yZGVyTGVmdENvbG9yOiBfY29sb3IyLmRlZmF1bHQsXG4gICAgYm9yZGVyUmFkaXVzOiBfcHgyLmRlZmF1bHQsXG5cbiAgICAvLyBQb3NpdGlvbmluZ1xuICAgIG1hcmdpbjogX3Bvc2l0aW9uczIuZGVmYXVsdCxcbiAgICBwYWRkaW5nOiBfcG9zaXRpb25zMi5kZWZhdWx0LFxuICAgIHdpZHRoOiBfcHgyLmRlZmF1bHQsXG4gICAgaGVpZ2h0OiBfcHgyLmRlZmF1bHQsXG5cbiAgICAvLyBBeGVzXG4gICAgYmFja2dyb3VuZFBvc2l0aW9uOiBfYXhlczIuZGVmYXVsdCxcbiAgICBwZXJzcGVjdGl2ZU9yaWdpbjogX2F4ZXMyLmRlZmF1bHQsXG4gICAgdHJhbnNmb3JtT3JpZ2luOiBfYXhlczIuZGVmYXVsdCxcblxuICAgIC8vIFNoYWRvd3NcbiAgICB0ZXh0U2hhZG93OiBfc2hhZG93Mi5kZWZhdWx0LFxuICAgIGJveFNoYWRvdzogX3NoYWRvdzIuZGVmYXVsdCxcblxuICAgIC8vIFRyYW5zZm9ybSBwcm9wZXJ0aWVzXG4gICAgcm90YXRlOiBfYW5nbGUyLmRlZmF1bHQsXG4gICAgcm90YXRlWDogX2FuZ2xlMi5kZWZhdWx0LFxuICAgIHJvdGF0ZVk6IF9hbmdsZTIuZGVmYXVsdCxcbiAgICByb3RhdGVaOiBfYW5nbGUyLmRlZmF1bHQsXG4gICAgc2NhbGU6IF9zY2FsZTIuZGVmYXVsdCxcbiAgICBzY2FsZVg6IF9zY2FsZTIuZGVmYXVsdCxcbiAgICBzY2FsZVk6IF9zY2FsZTIuZGVmYXVsdCxcbiAgICBzY2FsZVo6IF9zY2FsZTIuZGVmYXVsdCxcbiAgICBza2V3WDogX2FuZ2xlMi5kZWZhdWx0LFxuICAgIHNrZXdZOiBfYW5nbGUyLmRlZmF1bHQsXG4gICAgZGlzdGFuY2U6IF9weDIuZGVmYXVsdCxcbiAgICB0cmFuc2xhdGVYOiBfcHgyLmRlZmF1bHQsXG4gICAgdHJhbnNsYXRlWTogX3B4Mi5kZWZhdWx0LFxuICAgIHRyYW5zbGF0ZVo6IF9weDIuZGVmYXVsdCxcbiAgICBwZXJzcGVjdGl2ZTogX3B4Mi5kZWZhdWx0LFxuICAgIG9wYWNpdHk6IF9hbHBoYTIuZGVmYXVsdFxufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbk55WXk5aFpHRndkR1Z5TDJOemN5OTJZV3gxWlMxMGVYQmxMVzFoY0M1cWN5SmRMQ0p1WVcxbGN5STZXMTBzSW0xaGNIQnBibWR6SWpvaU96czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096dHJRa0ZUWlRzN1FVRkZXQ3d3UWtGR1Z6dEJRVWRZTEc5RFFVaFhPMEZCU1Znc2FVTkJTbGM3UVVGTFdDeDVRa0ZNVnp0QlFVMVlMREpDUVU1WE96czdRVUZUV0N4blEwRlVWenRCUVZWWUxHMURRVlpYTzBGQlYxZ3NjVU5CV0ZjN1FVRlpXQ3h6UTBGYVZ6dEJRV0ZZTEc5RFFXSlhPMEZCWTFnc09FSkJaRmM3T3p0QlFXbENXQ3dyUWtGcVFsYzdRVUZyUWxnc1owTkJiRUpYTzBGQmJVSllMSFZDUVc1Q1Z6dEJRVzlDV0N4M1FrRndRbGM3T3p0QlFYVkNXQ3h6UTBGMlFsYzdRVUYzUWxnc2NVTkJlRUpYTzBGQmVVSllMRzFEUVhwQ1Z6czdPMEZCTkVKWUxHZERRVFZDVnp0QlFUWkNXQ3dyUWtFM1FsYzdPenRCUVdkRFdDd3lRa0ZvUTFjN1FVRnBRMWdzTkVKQmFrTlhPMEZCYTBOWUxEUkNRV3hEVnp0QlFXMURXQ3cwUWtGdVExYzdRVUZ2UTFnc01FSkJjRU5YTzBGQmNVTllMREpDUVhKRFZ6dEJRWE5EV0N3eVFrRjBRMWM3UVVGMVExZ3NNa0pCZGtOWE8wRkJkME5ZTERCQ1FYaERWenRCUVhsRFdDd3dRa0Y2UTFjN1FVRXdRMWdzTUVKQk1VTlhPMEZCTWtOWUxEUkNRVE5EVnp0QlFUUkRXQ3cwUWtFMVExYzdRVUUyUTFnc05FSkJOME5YTzBGQk9FTllMRFpDUVRsRFZ6dEJRU3REV0N3MFFrRXZRMWNpTENKbWFXeGxJam9pZG1Gc2RXVXRkSGx3WlMxdFlYQXVhbk1pTENKemIzVnlZMlZTYjI5MElqb2lMMVZ6WlhKekwwMWhkSFF2VTJsMFpYTXZjRzl3Ylc5MGFXOXVJaXdpYzI5MWNtTmxjME52Ym5SbGJuUWlPbHNpYVcxd2IzSjBJR0Z1WjJ4bElHWnliMjBnSnk0dUx5NHVMM1poYkhWbExYUjVjR1Z6TDJGdVoyeGxKenRjYm1sdGNHOXlkQ0JoYkhCb1lTQm1jbTl0SUNjdUxpOHVMaTkyWVd4MVpTMTBlWEJsY3k5aGJIQm9ZU2M3WEc1cGJYQnZjblFnWVhobGN5Qm1jbTl0SUNjdUxpOHVMaTkyWVd4MVpTMTBlWEJsY3k5aGVHVnpKenRjYm1sdGNHOXlkQ0JqYjJ4dmNpQm1jbTl0SUNjdUxpOHVMaTkyWVd4MVpTMTBlWEJsY3k5amIyeHZjaWM3WEc1cGJYQnZjblFnYzJOaGJHVWdabkp2YlNBbkxpNHZMaTR2ZG1Gc2RXVXRkSGx3WlhNdmMyTmhiR1VuTzF4dWFXMXdiM0owSUhOb1lXUnZkeUJtY205dElDY3VMaTh1TGk5MllXeDFaUzEwZVhCbGN5OXphR0ZrYjNjbk8xeHVhVzF3YjNKMElIQnZjMmwwYVc5dWN5Qm1jbTl0SUNjdUxpOHVMaTkyWVd4MVpTMTBlWEJsY3k5d2IzTnBkR2x2Ym5Nbk8xeHVhVzF3YjNKMElIQjRJR1p5YjIwZ0p5NHVMeTR1TDNaaGJIVmxMWFI1Y0dWekwzQjRKenRjYmx4dVpYaHdiM0owSUdSbFptRjFiSFFnZTF4dUlDQWdJQzh2SUVOdmJHOXlJSEJ5YjNCelhHNGdJQ0FnWTI5c2IzSTZJR052Ykc5eUxGeHVJQ0FnSUdKaFkydG5jbTkxYm1SRGIyeHZjam9nWTI5c2IzSXNYRzRnSUNBZ2IzVjBiR2x1WlVOdmJHOXlPaUJqYjJ4dmNpeGNiaUFnSUNCbWFXeHNPaUJqYjJ4dmNpeGNiaUFnSUNCemRISnZhMlU2SUdOdmJHOXlMRnh1WEc0Z0lDQWdMeThnUW05eVpHVnlJSEJ5YjNCelhHNGdJQ0FnWW05eVpHVnlRMjlzYjNJNklHTnZiRzl5TEZ4dUlDQWdJR0p2Y21SbGNsUnZjRU52Ykc5eU9pQmpiMnh2Y2l4Y2JpQWdJQ0JpYjNKa1pYSlNhV2RvZEVOdmJHOXlPaUJqYjJ4dmNpeGNiaUFnSUNCaWIzSmtaWEpDYjNSMGIyMURiMnh2Y2pvZ1kyOXNiM0lzWEc0Z0lDQWdZbTl5WkdWeVRHVm1kRU52Ykc5eU9pQmpiMnh2Y2l4Y2JpQWdJQ0JpYjNKa1pYSlNZV1JwZFhNNklIQjRMRnh1WEc0Z0lDQWdMeThnVUc5emFYUnBiMjVwYm1kY2JpQWdJQ0J0WVhKbmFXNDZJSEJ2YzJsMGFXOXVjeXhjYmlBZ0lDQndZV1JrYVc1bk9pQndiM05wZEdsdmJuTXNYRzRnSUNBZ2QybGtkR2c2SUhCNExGeHVJQ0FnSUdobGFXZG9kRG9nY0hnc1hHNWNiaUFnSUNBdkx5QkJlR1Z6WEc0Z0lDQWdZbUZqYTJkeWIzVnVaRkJ2YzJsMGFXOXVPaUJoZUdWekxGeHVJQ0FnSUhCbGNuTndaV04wYVhabFQzSnBaMmx1T2lCaGVHVnpMRnh1SUNBZ0lIUnlZVzV6Wm05eWJVOXlhV2RwYmpvZ1lYaGxjeXhjYmx4dUlDQWdJQzh2SUZOb1lXUnZkM05jYmlBZ0lDQjBaWGgwVTJoaFpHOTNPaUJ6YUdGa2IzY3NYRzRnSUNBZ1ltOTRVMmhoWkc5M09pQnphR0ZrYjNjc0lDQWdYRzVjYmlBZ0lDQXZMeUJVY21GdWMyWnZjbTBnY0hKdmNHVnlkR2xsYzF4dUlDQWdJSEp2ZEdGMFpUb2dZVzVuYkdVc1hHNGdJQ0FnY205MFlYUmxXRG9nWVc1bmJHVXNYRzRnSUNBZ2NtOTBZWFJsV1RvZ1lXNW5iR1VzWEc0Z0lDQWdjbTkwWVhSbFdqb2dZVzVuYkdVc1hHNGdJQ0FnYzJOaGJHVTZJSE5qWVd4bExGeHVJQ0FnSUhOallXeGxXRG9nYzJOaGJHVXNYRzRnSUNBZ2MyTmhiR1ZaT2lCelkyRnNaU3hjYmlBZ0lDQnpZMkZzWlZvNklITmpZV3hsTEZ4dUlDQWdJSE5yWlhkWU9pQmhibWRzWlN4Y2JpQWdJQ0J6YTJWM1dUb2dZVzVuYkdVc1hHNGdJQ0FnWkdsemRHRnVZMlU2SUhCNExGeHVJQ0FnSUhSeVlXNXpiR0YwWlZnNklIQjRMRnh1SUNBZ0lIUnlZVzV6YkdGMFpWazZJSEI0TEZ4dUlDQWdJSFJ5WVc1emJHRjBaVm82SUhCNExGeHVJQ0FnSUhCbGNuTndaV04wYVhabE9pQndlQ3hjYmlBZ0lDQnZjR0ZqYVhSNU9pQmhiSEJvWVZ4dWZUc2lYWDA9XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9hZGFwdGVyL2Nzcy92YWx1ZS10eXBlLW1hcC5qc1xuICoqIG1vZHVsZSBpZCA9IDM1XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfdHJhbnNmb3JtUHJvcHMgPSByZXF1aXJlKCcuL3RyYW5zZm9ybS1wcm9wcycpO1xuXG52YXIgX3RyYW5zZm9ybVByb3BzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3RyYW5zZm9ybVByb3BzKTtcblxudmFyIF9wcmVmaXhlciA9IHJlcXVpcmUoJy4vcHJlZml4ZXInKTtcblxudmFyIF9wcmVmaXhlcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9wcmVmaXhlcik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbnZhciBUUkFOU0xBVEVfWiA9ICd0cmFuc2xhdGVaJztcblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gKHN0YXRlLCBkaXNhYmxlSGFyZHdhcmVBY2NlbGVyYXRpb24pIHtcbiAgICB2YXIgcHJvcGVydHlTdHJpbmcgPSAnJztcbiAgICB2YXIgdHJhbnNmb3JtU3RyaW5nID0gJyc7XG4gICAgdmFyIHRyYW5zZm9ybUhhc1ogPSBmYWxzZTtcblxuICAgIGZvciAodmFyIGtleSBpbiBzdGF0ZSkge1xuICAgICAgICBpZiAoc3RhdGUuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgICAgdmFyIHZhbHVlID0gc3RhdGVba2V5XTtcblxuICAgICAgICAgICAgaWYgKF90cmFuc2Zvcm1Qcm9wczIuZGVmYXVsdFtrZXldKSB7XG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtU3RyaW5nICs9IGtleSArICcoJyArIHZhbHVlICsgJykgJztcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm1IYXNaID0ga2V5ID09PSBUUkFOU0xBVEVfWiA/IHRydWUgOiB0cmFuc2Zvcm1IYXNaO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBwcm9wZXJ0eVN0cmluZyArPSAnOycgKyAoMCwgX3ByZWZpeGVyMi5kZWZhdWx0KShrZXkpICsgJzonICsgdmFsdWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodHJhbnNmb3JtU3RyaW5nICE9PSAnJykge1xuICAgICAgICBpZiAoIXRyYW5zZm9ybUhhc1ogJiYgIWRpc2FibGVIYXJkd2FyZUFjY2VsZXJhdGlvbikge1xuICAgICAgICAgICAgdHJhbnNmb3JtU3RyaW5nICs9IFRSQU5TTEFURV9aICsgJygwcHgpJztcbiAgICAgICAgfVxuXG4gICAgICAgIHByb3BlcnR5U3RyaW5nICs9ICc7JyArICgwLCBfcHJlZml4ZXIyLmRlZmF1bHQpKCd0cmFuc2Zvcm0nKSArICc6JyArIHRyYW5zZm9ybVN0cmluZztcbiAgICB9XG5cbiAgICByZXR1cm4gcHJvcGVydHlTdHJpbmc7XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluTnlZeTloWkdGd2RHVnlMMk56Y3k5aWRXbHNaQzVxY3lKZExDSnVZVzFsY3lJNlcxMHNJbTFoY0hCcGJtZHpJam9pT3pzN096czdPenM3T3pzN096dEJRVWRCTEVsQlFVMHNZMEZCWXl4WlFVRmtPenRyUWtGRlV5eFZRVUZETEV0QlFVUXNSVUZCVVN3eVFrRkJVaXhGUVVGM1F6dEJRVU51UkN4UlFVRkpMR2xDUVVGcFFpeEZRVUZxUWl4RFFVUXJRenRCUVVWdVJDeFJRVUZKTEd0Q1FVRnJRaXhGUVVGc1FpeERRVVlyUXp0QlFVZHVSQ3hSUVVGSkxHZENRVUZuUWl4TFFVRm9RaXhEUVVnclF6czdRVUZMYmtRc1UwRkJTeXhKUVVGSkxFZEJRVW9zU1VGQlZ5eExRVUZvUWl4RlFVRjFRanRCUVVOdVFpeFpRVUZKTEUxQlFVMHNZMEZCVGl4RFFVRnhRaXhIUVVGeVFpeERRVUZLTEVWQlFTdENPMEZCUXpOQ0xHZENRVUZOTEZGQlFWRXNUVUZCVFN4SFFVRk9MRU5CUVZJc1EwRkVjVUk3TzBGQlJ6TkNMR2RDUVVGSkxIbENRVUZsTEVkQlFXWXNRMEZCU2l4RlFVRjVRanRCUVVOeVFpeHRRMEZCYlVJc1RVRkJUU3hIUVVGT0xFZEJRVmtzUzBGQldpeEhRVUZ2UWl4SlFVRndRaXhEUVVSRk8wRkJSWEpDTEdkRFFVRm5RaXhIUVVGRExFdEJRVkVzVjBGQlVpeEhRVUYxUWl4SlFVRjRRaXhIUVVFclFpeGhRVUV2UWl4RFFVWkxPMkZCUVhwQ0xFMUJTVTg3UVVGRFNDeHJRMEZCYTBJc1RVRkJUU3gzUWtGQlV5eEhRVUZVTEVOQlFVNHNSMEZCYzBJc1IwRkJkRUlzUjBGQk5FSXNTMEZCTlVJc1EwRkVaanRoUVVwUU8xTkJTRW83UzBGRVNqczdRVUZqUVN4UlFVRkpMRzlDUVVGdlFpeEZRVUZ3UWl4RlFVRjNRanRCUVVONFFpeFpRVUZKTEVOQlFVTXNZVUZCUkN4SlFVRnJRaXhEUVVGRExESkNRVUZFTEVWQlFUaENPMEZCUTJoRUxDdENRVUZ0UWl4alFVRmpMRTlCUVdRc1EwRkVOa0k3VTBGQmNFUTdPMEZCU1VFc01FSkJRV3RDTEUxQlFVMHNkMEpCUVZNc1YwRkJWQ3hEUVVGT0xFZEJRVGhDTEVkQlFUbENMRWRCUVc5RExHVkJRWEJETEVOQlRFMDdTMEZCTlVJN08wRkJVVUVzVjBGQlR5eGpRVUZRTEVOQk0wSnRSRHREUVVGNFF5SXNJbVpwYkdVaU9pSmlkV2xzWkM1cWN5SXNJbk52ZFhKalpWSnZiM1FpT2lJdlZYTmxjbk12VFdGMGRDOVRhWFJsY3k5d2IzQnRiM1JwYjI0aUxDSnpiM1Z5WTJWelEyOXVkR1Z1ZENJNld5SnBiWEJ2Y25RZ2RISmhibk5tYjNKdFVISnZjSE1nWm5KdmJTQW5MaTkwY21GdWMyWnZjbTB0Y0hKdmNITW5PMXh1YVcxd2IzSjBJSEJ5WldacGVHVnlJR1p5YjIwZ0p5NHZjSEpsWm1sNFpYSW5PMXh1WEc1amIyNXpkQ0JVVWtGT1UweEJWRVZmV2lBOUlDZDBjbUZ1YzJ4aGRHVmFKenRjYmx4dVpYaHdiM0owSUdSbFptRjFiSFFnS0hOMFlYUmxMQ0JrYVhOaFlteGxTR0Z5WkhkaGNtVkJZMk5sYkdWeVlYUnBiMjRwSUQwK0lIdGNiaUFnSUNCc1pYUWdjSEp2Y0dWeWRIbFRkSEpwYm1jZ1BTQW5KenRjYmlBZ0lDQnNaWFFnZEhKaGJuTm1iM0p0VTNSeWFXNW5JRDBnSnljN1hHNGdJQ0FnYkdWMElIUnlZVzV6Wm05eWJVaGhjMW9nUFNCbVlXeHpaVHRjYmx4dUlDQWdJR1p2Y2lBb2JHVjBJR3RsZVNCcGJpQnpkR0YwWlNrZ2UxeHVJQ0FnSUNBZ0lDQnBaaUFvYzNSaGRHVXVhR0Z6VDNkdVVISnZjR1Z5ZEhrb2EyVjVLU2tnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdZMjl1YzNRZ2RtRnNkV1VnUFNCemRHRjBaVnRyWlhsZE8xeHVYRzRnSUNBZ0lDQWdJQ0FnSUNCcFppQW9kSEpoYm5ObWIzSnRVSEp2Y0hOYmEyVjVYU2tnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUhSeVlXNXpabTl5YlZOMGNtbHVaeUFyUFNCclpYa2dLeUFuS0NjZ0t5QjJZV3gxWlNBcklDY3BJQ2M3WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnZEhKaGJuTm1iM0p0U0dGeldpQTlJQ2hyWlhrZ1BUMDlJRlJTUVU1VFRFRlVSVjlhS1NBL0lIUnlkV1VnT2lCMGNtRnVjMlp2Y20xSVlYTmFPMXh1WEc0Z0lDQWdJQ0FnSUNBZ0lDQjlJR1ZzYzJVZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lIQnliM0JsY25SNVUzUnlhVzVuSUNzOUlDYzdKeUFySUhCeVpXWnBlR1Z5S0d0bGVTa2dLeUFuT2ljZ0t5QjJZV3gxWlR0Y2JpQWdJQ0FnSUNBZ0lDQWdJSDFjYmlBZ0lDQWdJQ0FnZlZ4dUlDQWdJSDFjYmx4dUlDQWdJR2xtSUNoMGNtRnVjMlp2Y20xVGRISnBibWNnSVQwOUlDY25LU0I3WEc0Z0lDQWdJQ0FnSUdsbUlDZ2hkSEpoYm5ObWIzSnRTR0Z6V2lBbUppQWhaR2x6WVdKc1pVaGhjbVIzWVhKbFFXTmpaV3hsY21GMGFXOXVLU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQjBjbUZ1YzJadmNtMVRkSEpwYm1jZ0t6MGdWRkpCVGxOTVFWUkZYMW9nS3lBbktEQndlQ2tuTzF4dUlDQWdJQ0FnSUNCOVhHNWNiaUFnSUNBZ0lDQWdjSEp2Y0dWeWRIbFRkSEpwYm1jZ0t6MGdKenNuSUNzZ2NISmxabWw0WlhJb0ozUnlZVzV6Wm05eWJTY3BJQ3NnSnpvbklDc2dkSEpoYm5ObWIzSnRVM1J5YVc1bk8xeHVJQ0FnSUgxY2JseHVJQ0FnSUhKbGRIVnliaUJ3Y205d1pYSjBlVk4wY21sdVp6dGNibjA3SWwxOVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvYWRhcHRlci9jc3MvYnVpbGQuanNcbiAqKiBtb2R1bGUgaWQgPSAzNlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xudmFyIGNhY2hlID0ge307XG52YXIgcHJlZml4ZXMgPSBbJ1dlYmtpdCcsICdNb3onLCAnTycsICdtcycsICcnXTtcbnZhciBudW1QcmVmaXhlcyA9IHByZWZpeGVzLmxlbmd0aDtcbnZhciB0ZXN0RWxlbWVudCA9IHVuZGVmaW5lZDtcblxuLypcbiAgICBUZXN0IHN0eWxlIHByb3BlcnR5IGZvciBwcmVmaXhlZCB2ZXJzaW9uXG4gICAgXG4gICAgQHBhcmFtIFtzdHJpbmddOiBTdHlsZSBwcm9wZXJ0eVxuICAgIEByZXR1cm4gW3N0cmluZ106IENhY2hlZCBwcm9wZXJ0eSBuYW1lXG4qL1xudmFyIHRlc3RQcmVmaXggPSBmdW5jdGlvbiAoa2V5KSB7XG4gICAgdGVzdEVsZW1lbnQgPSB0ZXN0RWxlbWVudCB8fCBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICAgIGlmIChjYWNoZVtrZXldID09PSBmYWxzZSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgY2FjaGVba2V5XSA9IGZhbHNlO1xuICAgIH1cblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbnVtUHJlZml4ZXM7IGkrKykge1xuICAgICAgICB2YXIgcHJlZml4ID0gcHJlZml4ZXNbaV0sXG4gICAgICAgICAgICBwcmVmaXhlZCA9IHByZWZpeCA9PT0gJycgPyBrZXkgOiBwcmVmaXggKyBrZXkuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyBrZXkuc2xpY2UoMSk7XG5cbiAgICAgICAgaWYgKHByZWZpeGVkIGluIHRlc3RFbGVtZW50LnN0eWxlKSB7XG4gICAgICAgICAgICBjYWNoZVtrZXldID0gcHJlZml4ZWQ7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gY2FjaGVba2V5XTtcbn07XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uIChrZXkpIHtcbiAgICByZXR1cm4gY2FjaGVba2V5XSB8fCB0ZXN0UHJlZml4KGtleSk7XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluTnlZeTloWkdGd2RHVnlMMk56Y3k5d2NtVm1hWGhsY2k1cWN5SmRMQ0p1WVcxbGN5STZXMTBzSW0xaGNIQnBibWR6SWpvaU96czdRVUZCUVN4SlFVRk5MRkZCUVZFc1JVRkJVanRCUVVOT0xFbEJRVTBzVjBGQlZ5eERRVUZETEZGQlFVUXNSVUZCVlN4TFFVRldMRVZCUVdkQ0xFZEJRV2hDTEVWQlFXOUNMRWxCUVhCQ0xFVkJRVEJDTEVWQlFURkNMRU5CUVZnN1FVRkRUaXhKUVVGTkxHTkJRV01zVTBGQlV5eE5RVUZVTzBGQlEzQkNMRWxCUVVrc2RVSkJRVW83T3pzN096czdPMEZCVVVFc1NVRkJUU3hoUVVGaExGVkJRVU1zUjBGQlJDeEZRVUZUTzBGQlEzaENMR3RDUVVGakxHVkJRV1VzVTBGQlV5eGhRVUZVTEVOQlFYVkNMRXRCUVhaQ0xFTkJRV1lzUTBGRVZUczdRVUZIZUVJc1VVRkJTU3hOUVVGTkxFZEJRVTRzVFVGQlpTeExRVUZtTEVWQlFYTkNPMEZCUTNSQ0xHVkJRVThzUzBGQlVDeERRVVJ6UWp0TFFVRXhRaXhOUVVWUE8wRkJRMGdzWTBGQlRTeEhRVUZPTEVsQlFXRXNTMEZCWWl4RFFVUkhPMHRCUmxBN08wRkJUVUVzVTBGQlN5eEpRVUZKTEVsQlFVa3NRMEZCU2l4RlFVRlBMRWxCUVVrc1YwRkJTaXhGUVVGcFFpeEhRVUZxUXl4RlFVRnpRenRCUVVOc1F5eFpRVUZKTEZOQlFWTXNVMEZCVXl4RFFVRlVMRU5CUVZRN1dVRkRRU3hYUVVGWExFMUJRVU1zUzBGQlZ5eEZRVUZZTEVkQlFXbENMRWRCUVd4Q0xFZEJRWGRDTEZOQlFWTXNTVUZCU1N4TlFVRktMRU5CUVZjc1EwRkJXQ3hGUVVGakxGZEJRV1FzUlVGQlZDeEhRVUYxUXl4SlFVRkpMRXRCUVVvc1EwRkJWU3hEUVVGV0xFTkJRWFpETEVOQlJrdzdPMEZCU1d4RExGbEJRVWtzV1VGQldTeFpRVUZaTEV0QlFWb3NSVUZCYlVJN1FVRkRMMElzYTBKQlFVMHNSMEZCVGl4SlFVRmhMRkZCUVdJc1EwRkVLMEk3VTBGQmJrTTdTMEZLU2pzN1FVRlRRU3hYUVVGUExFMUJRVTBzUjBGQlRpeERRVUZRTEVOQmJFSjNRanREUVVGVU96dHJRa0Z4UWtvc1ZVRkJReXhIUVVGRU8xZEJRVk1zVFVGQlRTeEhRVUZPTEV0QlFXTXNWMEZCVnl4SFFVRllMRU5CUVdRN1EwRkJWQ0lzSW1acGJHVWlPaUp3Y21WbWFYaGxjaTVxY3lJc0luTnZkWEpqWlZKdmIzUWlPaUl2VlhObGNuTXZUV0YwZEM5VGFYUmxjeTl3YjNCdGIzUnBiMjRpTENKemIzVnlZMlZ6UTI5dWRHVnVkQ0k2V3lKamIyNXpkQ0JqWVdOb1pTQTlJSHQ5TzF4dVkyOXVjM1FnY0hKbFptbDRaWE1nUFNCYkoxZGxZbXRwZENjc0owMXZlaWNzSjA4bkxDZHRjeWNzSUNjblhUdGNibU52Ym5OMElHNTFiVkJ5WldacGVHVnpJRDBnY0hKbFptbDRaWE11YkdWdVozUm9PMXh1YkdWMElIUmxjM1JGYkdWdFpXNTBPMXh1WEc0dktseHVJQ0FnSUZSbGMzUWdjM1I1YkdVZ2NISnZjR1Z5ZEhrZ1ptOXlJSEJ5WldacGVHVmtJSFpsY25OcGIyNWNiaUFnSUNCY2JpQWdJQ0JBY0dGeVlXMGdXM04wY21sdVoxMDZJRk4wZVd4bElIQnliM0JsY25SNVhHNGdJQ0FnUUhKbGRIVnliaUJiYzNSeWFXNW5YVG9nUTJGamFHVmtJSEJ5YjNCbGNuUjVJRzVoYldWY2Jpb3ZYRzVqYjI1emRDQjBaWE4wVUhKbFptbDRJRDBnS0d0bGVTa2dQVDRnZTF4dUlDQWdJSFJsYzNSRmJHVnRaVzUwSUQwZ2RHVnpkRVZzWlcxbGJuUWdmSHdnWkc5amRXMWxiblF1WTNKbFlYUmxSV3hsYldWdWRDZ25aR2wySnlrN1hHNWNiaUFnSUNCcFppQW9ZMkZqYUdWYmEyVjVYU0E5UFQwZ1ptRnNjMlVwSUh0Y2JpQWdJQ0FnSUNBZ2NtVjBkWEp1SUdaaGJITmxPMXh1SUNBZ0lIMGdaV3h6WlNCN1hHNGdJQ0FnSUNBZ0lHTmhZMmhsVzJ0bGVWMGdQU0JtWVd4elpUdGNiaUFnSUNCOVhHNWNiaUFnSUNCbWIzSWdLSFpoY2lCcElEMGdNRHNnYVNBOElHNTFiVkJ5WldacGVHVnpPeUJwS3lzcElIdGNiaUFnSUNBZ0lDQWdkbUZ5SUhCeVpXWnBlQ0E5SUhCeVpXWnBlR1Z6VzJsZExGeHVJQ0FnSUNBZ0lDQWdJQ0FnY0hKbFptbDRaV1FnUFNBb2NISmxabWw0SUQwOVBTQW5KeWtnUHlCclpYa2dPaUJ3Y21WbWFYZ2dLeUJyWlhrdVkyaGhja0YwS0RBcExuUnZWWEJ3WlhKRFlYTmxLQ2tnS3lCclpYa3VjMnhwWTJVb01TazdYRzVjYmlBZ0lDQWdJQ0FnYVdZZ0tIQnlaV1pwZUdWa0lHbHVJSFJsYzNSRmJHVnRaVzUwTG5OMGVXeGxLU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQmpZV05vWlZ0clpYbGRJRDBnY0hKbFptbDRaV1E3WEc0Z0lDQWdJQ0FnSUgxY2JpQWdJQ0I5WEc0Z0lDQWdYRzRnSUNBZ2NtVjBkWEp1SUdOaFkyaGxXMnRsZVYwN1hHNTlPMXh1WEc1bGVIQnZjblFnWkdWbVlYVnNkQ0FvYTJWNUtTQTlQaUJqWVdOb1pWdHJaWGxkSUh4OElIUmxjM1JRY21WbWFYZ29hMlY1S1RzaVhYMD1cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2FkYXB0ZXIvY3NzL3ByZWZpeGVyLmpzXG4gKiogbW9kdWxlIGlkID0gMzdcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF9hbHBoYSA9IHJlcXVpcmUoJy4uLy4uL3ZhbHVlLXR5cGVzL2FscGhhJyk7XG5cbnZhciBfYWxwaGEyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfYWxwaGEpO1xuXG52YXIgX2F4ZXMgPSByZXF1aXJlKCcuLi8uLi92YWx1ZS10eXBlcy9heGVzJyk7XG5cbnZhciBfYXhlczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9heGVzKTtcblxudmFyIF9jb2xvciA9IHJlcXVpcmUoJy4uLy4uL3ZhbHVlLXR5cGVzL2NvbG9yJyk7XG5cbnZhciBfY29sb3IyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY29sb3IpO1xuXG52YXIgX2NvbXBsZXggPSByZXF1aXJlKCcuLi8uLi92YWx1ZS10eXBlcy9jb21wbGV4Jyk7XG5cbnZhciBfY29tcGxleDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jb21wbGV4KTtcblxudmFyIF9zY2FsZSA9IHJlcXVpcmUoJy4uLy4uL3ZhbHVlLXR5cGVzL3NjYWxlJyk7XG5cbnZhciBfc2NhbGUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfc2NhbGUpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5leHBvcnRzLmRlZmF1bHQgPSB7XG4gICAgZmlsbDogX2NvbG9yMi5kZWZhdWx0LFxuICAgIHN0cm9rZTogX2NvbG9yMi5kZWZhdWx0LFxuICAgIHNjYWxlOiBfc2NhbGUyLmRlZmF1bHQsXG4gICAgc2NhbGVYOiBfc2NhbGUyLmRlZmF1bHQsXG4gICAgc2NhbGVZOiBfc2NhbGUyLmRlZmF1bHQsXG4gICAgdHJhbnNmb3JtT3JpZ2luOiBfYXhlczIuZGVmYXVsdCxcbiAgICBkOiBfY29tcGxleDIuZGVmYXVsdCxcbiAgICBvcGFjaXR5OiBfYWxwaGEyLmRlZmF1bHQsXG4gICAgZmlsbE9wYWNpdHk6IF9hbHBoYTIuZGVmYXVsdCxcbiAgICBzdHJva2VPcGFjaXR5OiBfYWxwaGEyLmRlZmF1bHRcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5OeVl5OWhaR0Z3ZEdWeUwzTjJaeTkyWVd4MVpTMTBlWEJsTFcxaGNDNXFjeUpkTENKdVlXMWxjeUk2VzEwc0ltMWhjSEJwYm1keklqb2lPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096dHJRa0ZOWlR0QlFVTllMSGxDUVVSWE8wRkJSVmdzTWtKQlJsYzdRVUZIV0N3d1FrRklWenRCUVVsWUxESkNRVXBYTzBGQlMxZ3NNa0pCVEZjN1FVRk5XQ3h0UTBGT1Z6dEJRVTlZTEhkQ1FWQlhPMEZCVVZnc05FSkJVbGM3UVVGVFdDeG5RMEZVVnp0QlFWVllMR3REUVZaWElpd2labWxzWlNJNkluWmhiSFZsTFhSNWNHVXRiV0Z3TG1weklpd2ljMjkxY21ObFVtOXZkQ0k2SWk5VmMyVnljeTlOWVhSMEwxTnBkR1Z6TDNCdmNHMXZkR2x2YmlJc0luTnZkWEpqWlhORGIyNTBaVzUwSWpwYkltbHRjRzl5ZENCaGJIQm9ZU0JtY205dElDY3VMaTh1TGk5MllXeDFaUzEwZVhCbGN5OWhiSEJvWVNjN1hHNXBiWEJ2Y25RZ1lYaGxjeUJtY205dElDY3VMaTh1TGk5MllXeDFaUzEwZVhCbGN5OWhlR1Z6Snp0Y2JtbHRjRzl5ZENCamIyeHZjaUJtY205dElDY3VMaTh1TGk5MllXeDFaUzEwZVhCbGN5OWpiMnh2Y2ljN1hHNXBiWEJ2Y25RZ1kyOXRjR3hsZUNCbWNtOXRJQ2N1TGk4dUxpOTJZV3gxWlMxMGVYQmxjeTlqYjIxd2JHVjRKenRjYm1sdGNHOXlkQ0J6WTJGc1pTQm1jbTl0SUNjdUxpOHVMaTkyWVd4MVpTMTBlWEJsY3k5elkyRnNaU2M3WEc1Y2JtVjRjRzl5ZENCa1pXWmhkV3gwSUh0Y2JpQWdJQ0JtYVd4c09pQmpiMnh2Y2l4Y2JpQWdJQ0J6ZEhKdmEyVTZJR052Ykc5eUxGeHVJQ0FnSUhOallXeGxPaUJ6WTJGc1pTeGNiaUFnSUNCelkyRnNaVmc2SUhOallXeGxMRnh1SUNBZ0lITmpZV3hsV1RvZ2MyTmhiR1VzWEc0Z0lDQWdkSEpoYm5ObWIzSnRUM0pwWjJsdU9pQmhlR1Z6TEZ4dUlDQWdJR1E2SUdOdmJYQnNaWGdzWEc0Z0lDQWdiM0JoWTJsMGVUb2dZV3h3YUdFc1hHNGdJQ0FnWm1sc2JFOXdZV05wZEhrNklHRnNjR2hoTEZ4dUlDQWdJSE4wY205clpVOXdZV05wZEhrNklHRnNjR2hoWEc1OU95SmRmUT09XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9hZGFwdGVyL3N2Zy92YWx1ZS10eXBlLW1hcC5qc1xuICoqIG1vZHVsZSBpZCA9IDM4XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzLmRlZmF1bHQgPSBidWlsZDtcblxudmFyIF91dGlscyA9IHJlcXVpcmUoJy4uLy4uL2luYy91dGlscycpO1xuXG52YXIgX3RyYW5zZm9ybVByb3BzID0gcmVxdWlyZSgnLi4vY3NzL3RyYW5zZm9ybS1wcm9wcycpO1xuXG52YXIgX3RyYW5zZm9ybVByb3BzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3RyYW5zZm9ybVByb3BzKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxudmFyIFpFUk9fTk9UX1pFUk8gPSAwLjAwMDE7XG5cbmZ1bmN0aW9uIGJ1aWxkKHN0YXRlLCBvcmlnaW4pIHtcbiAgICB2YXIgcHJvcHMgPSB7fSxcbiAgICAgICAgaGFzVHJhbnNmb3JtID0gZmFsc2UsXG4gICAgICAgIHNjYWxlID0gc3RhdGUuc2NhbGUgIT09IHVuZGVmaW5lZCA/IHN0YXRlLnNjYWxlIHx8IFpFUk9fTk9UX1pFUk8gOiBzdGF0ZS5zY2FsZVggfHwgMSxcbiAgICAgICAgc2NhbGVZID0gc3RhdGUuc2NhbGVZICE9PSB1bmRlZmluZWQgPyBzdGF0ZS5zY2FsZVkgfHwgWkVST19OT1RfWkVSTyA6IHNjYWxlIHx8IDEsXG4gICAgICAgIHRyYW5zZm9ybU9yaWdpblggPSBvcmlnaW4ueCxcbiAgICAgICAgdHJhbnNmb3JtT3JpZ2luWSA9IG9yaWdpbi55LFxuICAgICAgICBzY2FsZVRyYW5zZm9ybVggPSAtdHJhbnNmb3JtT3JpZ2luWCAqIChzY2FsZSAqIDEpLFxuICAgICAgICBzY2FsZVRyYW5zZm9ybVkgPSAtdHJhbnNmb3JtT3JpZ2luWSAqIChzY2FsZVkgKiAxKSxcbiAgICAgICAgc2NhbGVSZXBsYWNlWCA9IHRyYW5zZm9ybU9yaWdpblggLyBzY2FsZSxcbiAgICAgICAgc2NhbGVSZXBsYWNlWSA9IHRyYW5zZm9ybU9yaWdpblkgLyBzY2FsZVksXG4gICAgICAgIHRyYW5zZm9ybSA9IHtcbiAgICAgICAgdHJhbnNsYXRlOiAndHJhbnNsYXRlKCcgKyBzdGF0ZS50cmFuc2xhdGVYICsgJywgJyArIHN0YXRlLnRyYW5zbGF0ZVkgKyAnKSAnLFxuICAgICAgICBzY2FsZTogJ3RyYW5zbGF0ZSgnICsgc2NhbGVUcmFuc2Zvcm1YICsgJywgJyArIHNjYWxlVHJhbnNmb3JtWSArICcpIHNjYWxlKCcgKyBzY2FsZSArICcsICcgKyBzY2FsZVkgKyAnKSB0cmFuc2xhdGUoJyArIHNjYWxlUmVwbGFjZVggKyAnLCAnICsgc2NhbGVSZXBsYWNlWSArICcpICcsXG4gICAgICAgIHJvdGF0ZTogJ3JvdGF0ZSgnICsgc3RhdGUucm90YXRlICsgJywgJyArIHRyYW5zZm9ybU9yaWdpblggKyAnLCAnICsgdHJhbnNmb3JtT3JpZ2luWSArICcpICcsXG4gICAgICAgIHNrZXdYOiAnc2tld1goJyArIHN0YXRlLnNrZXdYICsgJykgJyxcbiAgICAgICAgc2tld1k6ICdza2V3WSgnICsgc3RhdGUuc2tld1kgKyAnKSAnXG4gICAgfTtcblxuICAgIGZvciAodmFyIGtleSBpbiBzdGF0ZSkge1xuICAgICAgICBpZiAoc3RhdGUuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgICAgaWYgKF90cmFuc2Zvcm1Qcm9wczIuZGVmYXVsdFtrZXldKSB7XG4gICAgICAgICAgICAgICAgaGFzVHJhbnNmb3JtID0gdHJ1ZTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcHJvcHNbKDAsIF91dGlscy5jYW1lbFRvRGFzaCkoa2V5KV0gPSBzdGF0ZVtrZXldO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGhhc1RyYW5zZm9ybSkge1xuICAgICAgICBwcm9wcy50cmFuc2Zvcm0gPSAnJztcblxuICAgICAgICBmb3IgKHZhciBrZXkgaW4gdHJhbnNmb3JtKSB7XG4gICAgICAgICAgICBpZiAodHJhbnNmb3JtLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICAgICAgICB2YXIgZGVmYXVsdFZhbHVlID0ga2V5ID09PSAnc2NhbGUnID8gJzEnIDogJzAnO1xuICAgICAgICAgICAgICAgIHByb3BzLnRyYW5zZm9ybSArPSB0cmFuc2Zvcm1ba2V5XS5yZXBsYWNlKC91bmRlZmluZWQvZywgZGVmYXVsdFZhbHVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBwcm9wcztcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbk55WXk5aFpHRndkR1Z5TDNOMlp5OWlkV2xzWkM1cWN5SmRMQ0p1WVcxbGN5STZXMTBzSW0xaGNIQnBibWR6SWpvaU96czdhMEpCUzNkQ096czdPenM3T3pzN08wRkJSbmhDTEVsQlFVMHNaMEpCUVdkQ0xFMUJRV2hDT3p0QlFVVlRMRk5CUVZNc1MwRkJWQ3hEUVVGbExFdEJRV1lzUlVGQmMwSXNUVUZCZEVJc1JVRkJPRUk3UVVGRGVrTXNVVUZCU1N4UlFVRlJMRVZCUVZJN1VVRkRRU3hsUVVGbExFdEJRV1k3VVVGRFFTeFJRVUZSTEUxQlFVMHNTMEZCVGl4TFFVRm5RaXhUUVVGb1FpeEhRVUUwUWl4TlFVRk5MRXRCUVU0c1NVRkJaU3hoUVVGbUxFZEJRU3RDTEUxQlFVMHNUVUZCVGl4SlFVRm5RaXhEUVVGb1FqdFJRVU51UlN4VFFVRlRMRTFCUVUwc1RVRkJUaXhMUVVGcFFpeFRRVUZxUWl4SFFVRTJRaXhOUVVGTkxFMUJRVTRzU1VGQlowSXNZVUZCYUVJc1IwRkJaME1zVTBGQlV5eERRVUZVTzFGQlEzUkZMRzFDUVVGdFFpeFBRVUZQTEVOQlFWQTdVVUZEYmtJc2JVSkJRVzFDTEU5QlFVOHNRMEZCVUR0UlFVTnVRaXhyUWtGQmEwSXNRMEZCUlN4blFrRkJSaXhKUVVGelFpeFJRVUZSTEVOQlFWSXNRMEZCZEVJN1VVRkRiRUlzYTBKQlFXdENMRU5CUVVVc1owSkJRVVlzU1VGQmMwSXNVMEZCVXl4RFFVRlVMRU5CUVhSQ08xRkJRMnhDTEdkQ1FVRm5RaXh0UWtGQmJVSXNTMEZCYmtJN1VVRkRhRUlzWjBKQlFXZENMRzFDUVVGdFFpeE5RVUZ1UWp0UlFVTm9RaXhaUVVGWk8wRkJRMUlzYTBOQlFYZENMRTFCUVUwc1ZVRkJUaXhWUVVGeFFpeE5RVUZOTEZWQlFVNHNUMEZCTjBNN1FVRkRRU3c0UWtGQmIwSXNlVUpCUVc5Q0xDdENRVUV3UWl4bFFVRlZMREJDUVVGeFFpeDFRa0ZCYTBJc2IwSkJRVzVJTzBGQlEwRXNORUpCUVd0Q0xFMUJRVTBzVFVGQlRpeFZRVUZwUWl3d1FrRkJjVUlzZFVKQlFYaEVPMEZCUTBFc01FSkJRV2RDTEUxQlFVMHNTMEZCVGl4UFFVRm9RanRCUVVOQkxEQkNRVUZuUWl4TlFVRk5MRXRCUVU0c1QwRkJhRUk3UzBGTVNpeERRVmh4UXpzN1FVRnRRbnBETEZOQlFVc3NTVUZCU1N4SFFVRktMRWxCUVZjc1MwRkJhRUlzUlVGQmRVSTdRVUZEYmtJc1dVRkJTU3hOUVVGTkxHTkJRVTRzUTBGQmNVSXNSMEZCY2tJc1EwRkJTaXhGUVVFclFqdEJRVU16UWl4blFrRkJTU3g1UWtGQlpTeEhRVUZtTEVOQlFVb3NSVUZCZVVJN1FVRkRja0lzSzBKQlFXVXNTVUZCWml4RFFVUnhRanRoUVVGNlFpeE5RVVZQTzBGQlEwZ3NjMEpCUVUwc2QwSkJRVmtzUjBGQldpeERRVUZPTEVsQlFUQkNMRTFCUVUwc1IwRkJUaXhEUVVFeFFpeERRVVJITzJGQlJsQTdVMEZFU2p0TFFVUktPenRCUVZWQkxGRkJRVWtzV1VGQlNpeEZRVUZyUWp0QlFVTmtMR05CUVUwc1UwRkJUaXhIUVVGclFpeEZRVUZzUWl4RFFVUmpPenRCUVVka0xHRkJRVXNzU1VGQlNTeEhRVUZLTEVsQlFWY3NVMEZCYUVJc1JVRkJNa0k3UVVGRGRrSXNaMEpCUVVrc1ZVRkJWU3hqUVVGV0xFTkJRWGxDTEVkQlFYcENMRU5CUVVvc1JVRkJiVU03UVVGREwwSXNiMEpCUVUwc1pVRkJaU3hIUVVGRExFdEJRVkVzVDBGQlVpeEhRVUZ0UWl4SFFVRndRaXhIUVVFd1FpeEhRVUV4UWl4RFFVUlZPMEZCUlM5Q0xITkNRVUZOTEZOQlFVNHNTVUZCYlVJc1ZVRkJWU3hIUVVGV0xFVkJRV1VzVDBGQlppeERRVUYxUWl4WlFVRjJRaXhGUVVGeFF5eFpRVUZ5UXl4RFFVRnVRaXhEUVVZclFqdGhRVUZ1UXp0VFFVUktPMHRCU0VvN08wRkJWMEVzVjBGQlR5eExRVUZRTEVOQmVFTjVRenREUVVFNVFpSXNJbVpwYkdVaU9pSmlkV2xzWkM1cWN5SXNJbk52ZFhKalpWSnZiM1FpT2lJdlZYTmxjbk12VFdGMGRDOVRhWFJsY3k5d2IzQnRiM1JwYjI0aUxDSnpiM1Z5WTJWelEyOXVkR1Z1ZENJNld5SnBiWEJ2Y25RZ2V5QmpZVzFsYkZSdlJHRnphQ0I5SUdaeWIyMGdKeTR1THk0dUwybHVZeTkxZEdsc2N5YzdYRzVwYlhCdmNuUWdkSEpoYm5ObWIzSnRVSEp2Y0hNZ1puSnZiU0FuTGk0dlkzTnpMM1J5WVc1elptOXliUzF3Y205d2N5YzdYRzVjYm1OdmJuTjBJRnBGVWs5ZlRrOVVYMXBGVWs4Z1BTQXdMakF3TURFN1hHNWNibVY0Y0c5eWRDQmtaV1poZFd4MElHWjFibU4wYVc5dUlHSjFhV3hrS0hOMFlYUmxMQ0J2Y21sbmFXNHBJSHRjYmlBZ0lDQnNaWFFnY0hKdmNITWdQU0I3ZlN4Y2JpQWdJQ0FnSUNBZ2FHRnpWSEpoYm5ObWIzSnRJRDBnWm1Gc2MyVXNYRzRnSUNBZ0lDQWdJSE5qWVd4bElEMGdjM1JoZEdVdWMyTmhiR1VnSVQwOUlIVnVaR1ZtYVc1bFpDQS9JSE4wWVhSbExuTmpZV3hsSUh4OElGcEZVazlmVGs5VVgxcEZVazhnT2lCemRHRjBaUzV6WTJGc1pWZ2dmSHdnTVN4Y2JpQWdJQ0FnSUNBZ2MyTmhiR1ZaSUQwZ2MzUmhkR1V1YzJOaGJHVlpJQ0U5UFNCMWJtUmxabWx1WldRZ1B5QnpkR0YwWlM1elkyRnNaVmtnZkh3Z1drVlNUMTlPVDFSZldrVlNUeUE2SUhOallXeGxJSHg4SURFc1hHNGdJQ0FnSUNBZ0lIUnlZVzV6Wm05eWJVOXlhV2RwYmxnZ1BTQnZjbWxuYVc0dWVDeGNiaUFnSUNBZ0lDQWdkSEpoYm5ObWIzSnRUM0pwWjJsdVdTQTlJRzl5YVdkcGJpNTVMRnh1SUNBZ0lDQWdJQ0J6WTJGc1pWUnlZVzV6Wm05eWJWZ2dQU0F0SUhSeVlXNXpabTl5YlU5eWFXZHBibGdnS2lBb2MyTmhiR1VnS2lBeEtTeGNiaUFnSUNBZ0lDQWdjMk5oYkdWVWNtRnVjMlp2Y20xWklEMGdMU0IwY21GdWMyWnZjbTFQY21sbmFXNVpJQ29nS0hOallXeGxXU0FxSURFcExGeHVJQ0FnSUNBZ0lDQnpZMkZzWlZKbGNHeGhZMlZZSUQwZ2RISmhibk5tYjNKdFQzSnBaMmx1V0NBdklITmpZV3hsTEZ4dUlDQWdJQ0FnSUNCelkyRnNaVkpsY0d4aFkyVlpJRDBnZEhKaGJuTm1iM0p0VDNKcFoybHVXU0F2SUhOallXeGxXU3hjYmlBZ0lDQWdJQ0FnZEhKaGJuTm1iM0p0SUQwZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnZEhKaGJuTnNZWFJsT2lCZ2RISmhibk5zWVhSbEtDUjdjM1JoZEdVdWRISmhibk5zWVhSbFdIMHNJQ1I3YzNSaGRHVXVkSEpoYm5Oc1lYUmxXWDBwSUdBc1hHNGdJQ0FnSUNBZ0lDQWdJQ0J6WTJGc1pUb2dZSFJ5WVc1emJHRjBaU2drZTNOallXeGxWSEpoYm5ObWIzSnRXSDBzSUNSN2MyTmhiR1ZVY21GdWMyWnZjbTFaZlNrZ2MyTmhiR1VvSkh0elkyRnNaWDBzSUNSN2MyTmhiR1ZaZlNrZ2RISmhibk5zWVhSbEtDUjdjMk5oYkdWU1pYQnNZV05sV0gwc0lDUjdjMk5oYkdWU1pYQnNZV05sV1gwcElHQXNYRzRnSUNBZ0lDQWdJQ0FnSUNCeWIzUmhkR1U2SUdCeWIzUmhkR1VvSkh0emRHRjBaUzV5YjNSaGRHVjlMQ0FrZTNSeVlXNXpabTl5YlU5eWFXZHBibGg5TENBa2UzUnlZVzV6Wm05eWJVOXlhV2RwYmxsOUtTQmdMRnh1SUNBZ0lDQWdJQ0FnSUNBZ2MydGxkMWc2SUdCemEyVjNXQ2drZTNOMFlYUmxMbk5yWlhkWWZTa2dZQ3hjYmlBZ0lDQWdJQ0FnSUNBZ0lITnJaWGRaT2lCZ2MydGxkMWtvSkh0emRHRjBaUzV6YTJWM1dYMHBJR0JjYmlBZ0lDQWdJQ0FnZlR0Y2JseHVJQ0FnSUdadmNpQW9iR1YwSUd0bGVTQnBiaUJ6ZEdGMFpTa2dlMXh1SUNBZ0lDQWdJQ0JwWmlBb2MzUmhkR1V1YUdGelQzZHVVSEp2Y0dWeWRIa29hMlY1S1NrZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnYVdZZ0tIUnlZVzV6Wm05eWJWQnliM0J6VzJ0bGVWMHBJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0JvWVhOVWNtRnVjMlp2Y20wZ1BTQjBjblZsTzF4dUlDQWdJQ0FnSUNBZ0lDQWdmU0JsYkhObElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQndjbTl3YzF0allXMWxiRlJ2UkdGemFDaHJaWGtwWFNBOUlITjBZWFJsVzJ0bGVWMDdYRzRnSUNBZ0lDQWdJQ0FnSUNCOVhHNGdJQ0FnSUNBZ0lIMWNiaUFnSUNCOVhHNWNiaUFnSUNCcFppQW9hR0Z6VkhKaGJuTm1iM0p0S1NCN1hHNGdJQ0FnSUNBZ0lIQnliM0J6TG5SeVlXNXpabTl5YlNBOUlDY25PMXh1WEc0Z0lDQWdJQ0FnSUdadmNpQW9iR1YwSUd0bGVTQnBiaUIwY21GdWMyWnZjbTBwSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJR2xtSUNoMGNtRnVjMlp2Y20wdWFHRnpUM2R1VUhKdmNHVnlkSGtvYTJWNUtTa2dlMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJR052Ym5OMElHUmxabUYxYkhSV1lXeDFaU0E5SUNoclpYa2dQVDA5SUNkelkyRnNaU2NwSUQ4Z0p6RW5JRG9nSnpBbk8xeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lIQnliM0J6TG5SeVlXNXpabTl5YlNBclBTQjBjbUZ1YzJadmNtMWJhMlY1WFM1eVpYQnNZV05sS0M5MWJtUmxabWx1WldRdlp5d2daR1ZtWVhWc2RGWmhiSFZsS1R0Y2JpQWdJQ0FnSUNBZ0lDQWdJSDFjYmlBZ0lDQWdJQ0FnZlZ4dUlDQWdJSDFjYmx4dUlDQWdJSEpsZEhWeWJpQndjbTl3Y3p0Y2JuMGlYWDA9XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9hZGFwdGVyL3N2Zy9idWlsZC5qc1xuICoqIG1vZHVsZSBpZCA9IDM5XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzLmRlZmF1bHQgPSBidWlsZDtcbi8qXG4gICAgQ29udmVydCBwZXJjZW50YWdlIHRvIHBpeGVsc1xuICAgIFxuICAgIEBwYXJhbSBbbnVtYmVyXTogUGVyY2VudGFnZSBvZiB0b3RhbCBsZW5ndGhcbiAgICBAcGFyYW0gW251bWJlcl06IFRvdGFsIGxlbmd0aFxuKi9cbnZhciBwZXJjZW50VG9QaXhlbHMgPSBmdW5jdGlvbiAocGVyY2VudCwgbGVuZ3RoKSB7XG4gICAgcmV0dXJuIHBhcnNlRmxvYXQocGVyY2VudCkgLyAxMDAgKiBsZW5ndGggKyAncHgnO1xufTtcblxuZnVuY3Rpb24gYnVpbGQoc3RhdGUsIGxlbmd0aCkge1xuICAgIHZhciBzdHlsZXMgPSB7fTtcbiAgICB2YXIgZGFzaEFycmF5U3R5bGVzID0ge1xuICAgICAgICBsZW5ndGg6IDAsXG4gICAgICAgIHNwYWNpbmc6IGxlbmd0aCArICdweCdcbiAgICB9O1xuICAgIHZhciBoYXNEYXNoQXJyYXkgPSBmYWxzZTtcblxuICAgIGZvciAodmFyIGtleSBpbiBzdGF0ZSkge1xuICAgICAgICBpZiAoc3RhdGUuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgICAgdmFyIHZhbHVlID0gc3RhdGVba2V5XTtcblxuICAgICAgICAgICAgc3dpdGNoIChrZXkpIHtcbiAgICAgICAgICAgICAgICBjYXNlICdsZW5ndGgnOlxuICAgICAgICAgICAgICAgIGNhc2UgJ3NwYWNpbmcnOlxuICAgICAgICAgICAgICAgICAgICBoYXNEYXNoQXJyYXkgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICBkYXNoQXJyYXlTdHlsZXNba2V5XSA9IHBlcmNlbnRUb1BpeGVscyh2YWx1ZSwgbGVuZ3RoKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSAnb2Zmc2V0JzpcbiAgICAgICAgICAgICAgICAgICAgc3R5bGVzWydzdHJva2UtZGFzaG9mZnNldCddID0gcGVyY2VudFRvUGl4ZWxzKC12YWx1ZSwgbGVuZ3RoKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgc3R5bGVzW2tleV0gPSB2YWx1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGlmIChoYXNEYXNoQXJyYXkpIHtcbiAgICAgICAgc3R5bGVzWydzdHJva2UtZGFzaGFycmF5J10gPSBkYXNoQXJyYXlTdHlsZXMubGVuZ3RoICsgJyAnICsgZGFzaEFycmF5U3R5bGVzLnNwYWNpbmc7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN0eWxlcztcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbk55WXk5aFpHRndkR1Z5TDNOMlp5MXdZWFJvTDJKMWFXeGtMbXB6SWwwc0ltNWhiV1Z6SWpwYlhTd2liV0Z3Y0dsdVozTWlPaUk3T3p0clFrRlJkMEk3T3pzN096czdRVUZHZUVJc1NVRkJUU3hyUWtGQmEwSXNWVUZCUXl4UFFVRkVMRVZCUVZVc1RVRkJWanRYUVVGeFFpeFZRVUZETEVOQlFWY3NUMEZCV0N4SlFVRnpRaXhIUVVGMFFpeEhRVUUyUWl4TlFVRTVRaXhIUVVGMVF5eEpRVUYyUXp0RFFVRnlRanM3UVVGRlZDeFRRVUZUTEV0QlFWUXNRMEZCWlN4TFFVRm1MRVZCUVhOQ0xFMUJRWFJDTEVWQlFUaENPMEZCUTNwRExGRkJRVTBzVTBGQlV5eEZRVUZVTEVOQlJHMURPMEZCUlhwRExGRkJRVTBzYTBKQlFXdENPMEZCUTNCQ0xHZENRVUZSTEVOQlFWSTdRVUZEUVN4cFFrRkJVeXhUUVVGVExFbEJRVlE3UzBGR1VDeERRVVp0UXp0QlFVMTZReXhSUVVGSkxHVkJRV1VzUzBGQlppeERRVTV4UXpzN1FVRlJla01zVTBGQlN5eEpRVUZKTEVkQlFVb3NTVUZCVnl4TFFVRm9RaXhGUVVGMVFqdEJRVU51UWl4WlFVRkpMRTFCUVUwc1kwRkJUaXhEUVVGeFFpeEhRVUZ5UWl4RFFVRktMRVZCUVN0Q08wRkJRek5DTEdkQ1FVRk5MRkZCUVZFc1RVRkJUU3hIUVVGT0xFTkJRVklzUTBGRWNVSTdPMEZCUnpOQ0xHOUNRVUZSTEVkQlFWSTdRVUZEUVN4eFFrRkJTeXhSUVVGTUxFTkJSRUU3UVVGRlFTeHhRa0ZCU3l4VFFVRk1PMEZCUTBrc2JVTkJRV1VzU1VGQlppeERRVVJLTzBGQlJVa3NiME5CUVdkQ0xFZEJRV2hDTEVsQlFYVkNMR2RDUVVGblFpeExRVUZvUWl4RlFVRjFRaXhOUVVGMlFpeERRVUYyUWl4RFFVWktPMEZCUjBrc01FSkJTRW83UVVGR1FTeHhRa0ZOU3l4UlFVRk1PMEZCUTBrc01rSkJRVThzYlVKQlFWQXNTVUZCT0VJc1owSkJRV2RDTEVOQlFVTXNTMEZCUkN4RlFVRlJMRTFCUVhoQ0xFTkJRVGxDTEVOQlJFbzdRVUZGU1N3d1FrRkdTanRCUVU1Qk8wRkJWVWtzTWtKQlFVOHNSMEZCVUN4SlFVRmpMRXRCUVdRc1EwRkVTanRCUVZSQkxHRkJTREpDTzFOQlFTOUNPMHRCUkVvN08wRkJiVUpCTEZGQlFVa3NXVUZCU2l4RlFVRnJRanRCUVVOa0xHVkJRVThzYTBKQlFWQXNTVUZCTmtJc1owSkJRV2RDTEUxQlFXaENMRWRCUVhsQ0xFZEJRWHBDTEVkQlFTdENMR2RDUVVGblFpeFBRVUZvUWl4RFFVUTVRenRMUVVGc1FqczdRVUZKUVN4WFFVRlBMRTFCUVZBc1EwRXZRbmxETzBOQlFUbENJaXdpWm1sc1pTSTZJbUoxYVd4a0xtcHpJaXdpYzI5MWNtTmxVbTl2ZENJNklpOVZjMlZ5Y3k5TllYUjBMMU5wZEdWekwzQnZjRzF2ZEdsdmJpSXNJbk52ZFhKalpYTkRiMjUwWlc1MElqcGJJaThxWEc0Z0lDQWdRMjl1ZG1WeWRDQndaWEpqWlc1MFlXZGxJSFJ2SUhCcGVHVnNjMXh1SUNBZ0lGeHVJQ0FnSUVCd1lYSmhiU0JiYm5WdFltVnlYVG9nVUdWeVkyVnVkR0ZuWlNCdlppQjBiM1JoYkNCc1pXNW5kR2hjYmlBZ0lDQkFjR0Z5WVcwZ1cyNTFiV0psY2wwNklGUnZkR0ZzSUd4bGJtZDBhRnh1S2k5Y2JtTnZibk4wSUhCbGNtTmxiblJVYjFCcGVHVnNjeUE5SUNod1pYSmpaVzUwTENCc1pXNW5kR2dwSUQwK0lDaHdZWEp6WlVac2IyRjBLSEJsY21ObGJuUXBJQzhnTVRBd0tTQXFJR3hsYm1kMGFDQXJJQ2R3ZUNjN1hHNWNibVY0Y0c5eWRDQmtaV1poZFd4MElHWjFibU4wYVc5dUlHSjFhV3hrS0hOMFlYUmxMQ0JzWlc1bmRHZ3BJSHRjYmlBZ0lDQmpiMjV6ZENCemRIbHNaWE1nUFNCN2ZUdGNiaUFnSUNCamIyNXpkQ0JrWVhOb1FYSnlZWGxUZEhsc1pYTWdQU0I3WEc0Z0lDQWdJQ0FnSUd4bGJtZDBhRG9nTUN4Y2JpQWdJQ0FnSUNBZ2MzQmhZMmx1WnpvZ2JHVnVaM1JvSUNzZ0ozQjRKMXh1SUNBZ0lIMDdYRzRnSUNBZ2JHVjBJR2hoYzBSaGMyaEJjbkpoZVNBOUlHWmhiSE5sTzF4dVhHNGdJQ0FnWm05eUlDaHNaWFFnYTJWNUlHbHVJSE4wWVhSbEtTQjdYRzRnSUNBZ0lDQWdJR2xtSUNoemRHRjBaUzVvWVhOUGQyNVFjbTl3WlhKMGVTaHJaWGtwS1NCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0JqYjI1emRDQjJZV3gxWlNBOUlITjBZWFJsVzJ0bGVWMDdYRzVjYmlBZ0lDQWdJQ0FnSUNBZ0lITjNhWFJqYUNBb2EyVjVLU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQmpZWE5sSUNkc1pXNW5kR2duT2x4dUlDQWdJQ0FnSUNBZ0lDQWdZMkZ6WlNBbmMzQmhZMmx1WnljNlhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2FHRnpSR0Z6YUVGeWNtRjVJRDBnZEhKMVpUdGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQmtZWE5vUVhKeVlYbFRkSGxzWlhOYmEyVjVYU0E5SUhCbGNtTmxiblJVYjFCcGVHVnNjeWgyWVd4MVpTd2diR1Z1WjNSb0tUdGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQmljbVZoYXp0Y2JpQWdJQ0FnSUNBZ0lDQWdJR05oYzJVZ0oyOW1abk5sZENjNlhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2MzUjViR1Z6V3lkemRISnZhMlV0WkdGemFHOW1abk5sZENkZElEMGdjR1Z5WTJWdWRGUnZVR2w0Wld4ektDMTJZV3gxWlN3Z2JHVnVaM1JvS1R0Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCaWNtVmhhenRjYmlBZ0lDQWdJQ0FnSUNBZ0lHUmxabUYxYkhRNlhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2MzUjViR1Z6VzJ0bGVWMGdQU0IyWVd4MVpUdGNiaUFnSUNBZ0lDQWdJQ0FnSUgxY2JpQWdJQ0FnSUNBZ2ZWeHVJQ0FnSUgxY2JseHVJQ0FnSUdsbUlDaG9ZWE5FWVhOb1FYSnlZWGtwSUh0Y2JpQWdJQ0FnSUNBZ2MzUjViR1Z6V3lkemRISnZhMlV0WkdGemFHRnljbUY1SjEwZ1BTQmtZWE5vUVhKeVlYbFRkSGxzWlhNdWJHVnVaM1JvSUNzZ0p5QW5JQ3NnWkdGemFFRnljbUY1VTNSNWJHVnpMbk53WVdOcGJtYzdYRzRnSUNBZ2ZWeHVYRzRnSUNBZ2NtVjBkWEp1SUhOMGVXeGxjenRjYm4waVhYMD1cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2FkYXB0ZXIvc3ZnLXBhdGgvYnVpbGQuanNcbiAqKiBtb2R1bGUgaWQgPSA0MFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9O1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX3N0YXRlTWFwID0gcmVxdWlyZSgnLi4vY3NzL3N0YXRlLW1hcCcpO1xuXG52YXIgX3N0YXRlTWFwMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3N0YXRlTWFwKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxudmFyIFNUUk9LRSA9ICdzdHJva2UtJztcblxuZXhwb3J0cy5kZWZhdWx0ID0gX2V4dGVuZHMoe30sIF9zdGF0ZU1hcDIuZGVmYXVsdCwge1xuICAgIG9wYWNpdHk6IFNUUk9LRSArICdvcGFjaXR5JyxcbiAgICB3aWR0aDogU1RST0tFICsgJ3dpZHRoJyxcbiAgICBtaXRlcmxpbWl0OiBTVFJPS0UgKyAnbWl0ZXJsaW1pdCdcbn0pO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluTnlZeTloWkdGd2RHVnlMM04yWnkxd1lYUm9MM04wWVhSbExXMWhjQzVxY3lKZExDSnVZVzFsY3lJNlcxMHNJbTFoY0hCcGJtZHpJam9pT3pzN096czdPenM3T3pzN1FVRkZRU3hKUVVGTkxGTkJRVk1zVTBGQlZEczdPMEZCU1VZc1lVRkJXU3hyUWtGQldqdEJRVU5CTEZkQlFWVXNaMEpCUVZZN1FVRkRRU3huUWtGQlpTeHhRa0ZCWmlJc0ltWnBiR1VpT2lKemRHRjBaUzF0WVhBdWFuTWlMQ0p6YjNWeVkyVlNiMjkwSWpvaUwxVnpaWEp6TDAxaGRIUXZVMmwwWlhNdmNHOXdiVzkwYVc5dUlpd2ljMjkxY21ObGMwTnZiblJsYm5RaU9sc2lhVzF3YjNKMElHTnpjMU4wWVhSbFRXRndJR1p5YjIwZ0p5NHVMMk56Y3k5emRHRjBaUzF0WVhBbk8xeHVYRzVqYjI1emRDQlRWRkpQUzBVZ1BTQW5jM1J5YjJ0bExTYzdYRzVjYm1WNGNHOXlkQ0JrWldaaGRXeDBJSHRjYmlBZ0lDQXVMaTVqYzNOVGRHRjBaVTFoY0N4Y2JpQWdJQ0J2Y0dGamFYUjVPaUJnSkh0VFZGSlBTMFY5YjNCaFkybDBlV0FzWEc0Z0lDQWdkMmxrZEdnNklHQWtlMU5VVWs5TFJYMTNhV1IwYUdBc1hHNGdJQ0FnYldsMFpYSnNhVzFwZERvZ1lDUjdVMVJTVDB0RmZXMXBkR1Z5YkdsdGFYUmdYRzU5T3lKZGZRPT1cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2FkYXB0ZXIvc3ZnLXBhdGgvc3RhdGUtbWFwLmpzXG4gKiogbW9kdWxlIGlkID0gNDFcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbnZhciByZ2IgPSBleHBvcnRzLnJnYiA9IHtcbiAgICBtaW46IDAsXG4gICAgbWF4OiAyNTUsXG4gICAgcm91bmQ6IHRydWVcbn07XG5cbnZhciBvcGFjaXR5ID0gZXhwb3J0cy5vcGFjaXR5ID0ge1xuICAgIG1pbjogMCxcbiAgICBtYXg6IDFcbn07XG5cbnZhciBwZXJjZW50ID0gZXhwb3J0cy5wZXJjZW50ID0ge1xuICAgIG1pbjogMCxcbiAgICBtYXg6IDEwMCxcbiAgICB1bml0OiAnJSdcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5OeVl5OTJZV3gxWlMxMGVYQmxjeTl6WlhSMGFXNW5jeTlrWldaaGRXeDBMWEJ5YjNCekxtcHpJbDBzSW01aGJXVnpJanBiWFN3aWJXRndjR2x1WjNNaU9pSTdPenRCUVVGUExFbEJRVTBzYjBKQlFVMDdRVUZEWml4VFFVRkxMRU5CUVV3N1FVRkRRU3hUUVVGTExFZEJRVXc3UVVGRFFTeFhRVUZQTEVsQlFWQTdRMEZJVXpzN1FVRk5UaXhKUVVGTkxEUkNRVUZWTzBGQlEyNUNMRk5CUVVzc1EwRkJURHRCUVVOQkxGTkJRVXNzUTBGQlREdERRVVpUT3p0QlFVdE9MRWxCUVUwc05FSkJRVlU3UVVGRGJrSXNVMEZCU3l4RFFVRk1PMEZCUTBFc1UwRkJTeXhIUVVGTU8wRkJRMEVzVlVGQlRTeEhRVUZPTzBOQlNGTWlMQ0ptYVd4bElqb2laR1ZtWVhWc2RDMXdjbTl3Y3k1cWN5SXNJbk52ZFhKalpWSnZiM1FpT2lJdlZYTmxjbk12VFdGMGRDOVRhWFJsY3k5d2IzQnRiM1JwYjI0aUxDSnpiM1Z5WTJWelEyOXVkR1Z1ZENJNld5SmxlSEJ2Y25RZ1kyOXVjM1FnY21kaUlEMGdlMXh1SUNBZ0lHMXBiam9nTUN4Y2JpQWdJQ0J0WVhnNklESTFOU3hjYmlBZ0lDQnliM1Z1WkRvZ2RISjFaVnh1ZlR0Y2JseHVaWGh3YjNKMElHTnZibk4wSUc5d1lXTnBkSGtnUFNCN1hHNGdJQ0FnYldsdU9pQXdMRnh1SUNBZ0lHMWhlRG9nTVZ4dWZUdGNibHh1Wlhod2IzSjBJR052Ym5OMElIQmxjbU5sYm5RZ1BTQjdYRzRnSUNBZ2JXbHVPaUF3TEZ4dUlDQWdJRzFoZURvZ01UQXdMRnh1SUNBZ0lIVnVhWFE2SUNjbEoxeHVmVHNpWFgwPVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvdmFsdWUtdHlwZXMvc2V0dGluZ3MvZGVmYXVsdC1wcm9wcy5qc1xuICoqIG1vZHVsZSBpZCA9IDQyXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG52YXIgWCA9ICdYJztcbnZhciBZID0gJ1knO1xudmFyIEFMUEhBID0gJ0FscGhhJztcblxudmFyIGF4ZXMgPSBleHBvcnRzLmF4ZXMgPSBbWCwgWSwgJ1onXTtcbnZhciByZ2IgPSBleHBvcnRzLnJnYiA9IFsnUmVkJywgJ0dyZWVuJywgJ0JsdWUnLCBBTFBIQV07XG52YXIgaHNsID0gZXhwb3J0cy5oc2wgPSBbJ0h1ZScsICdTYXR1cmF0aW9uJywgJ0xpZ2h0bmVzcycsIEFMUEhBXTtcbnZhciBwb3NpdGlvbnMgPSBleHBvcnRzLnBvc2l0aW9ucyA9IFsnVG9wJywgJ1JpZ2h0JywgJ0JvdHRvbScsICdMZWZ0J107XG52YXIgc2hhZG93ID0gZXhwb3J0cy5zaGFkb3cgPSBbWCwgWSwgJ1JhZGl1cycsICdTcHJlYWQnLCAnQ29sb3InXTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbk55WXk5MllXeDFaUzEwZVhCbGN5OXpaWFIwYVc1bmN5OWthV04wYVc5dVlYSjVMbXB6SWwwc0ltNWhiV1Z6SWpwYlhTd2liV0Z3Y0dsdVozTWlPaUk3T3p0QlFVRkJMRWxCUVUwc1NVRkJTU3hIUVVGS08wRkJRMDRzU1VGQlRTeEpRVUZKTEVkQlFVbzdRVUZEVGl4SlFVRk5MRkZCUVZFc1QwRkJVanM3UVVGRlF5eEpRVUZOTEhOQ1FVRlBMRU5CUVVNc1EwRkJSQ3hGUVVGSkxFTkJRVW9zUlVGQlR5eEhRVUZRTEVOQlFWQTdRVUZEVGl4SlFVRk5MRzlDUVVGTkxFTkJRVU1zUzBGQlJDeEZRVUZSTEU5QlFWSXNSVUZCYVVJc1RVRkJha0lzUlVGQmVVSXNTMEZCZWtJc1EwRkJUanRCUVVOT0xFbEJRVTBzYjBKQlFVMHNRMEZCUXl4TFFVRkVMRVZCUVZFc1dVRkJVaXhGUVVGelFpeFhRVUYwUWl4RlFVRnRReXhMUVVGdVF5eERRVUZPTzBGQlEwNHNTVUZCVFN4blEwRkJXU3hEUVVGRExFdEJRVVFzUlVGQlVTeFBRVUZTTEVWQlFXbENMRkZCUVdwQ0xFVkJRVEpDTEUxQlFUTkNMRU5CUVZvN1FVRkRUaXhKUVVGTkxEQkNRVUZUTEVOQlFVTXNRMEZCUkN4RlFVRkpMRU5CUVVvc1JVRkJUeXhSUVVGUUxFVkJRV2xDTEZGQlFXcENMRVZCUVRKQ0xFOUJRVE5DTEVOQlFWUWlMQ0ptYVd4bElqb2laR2xqZEdsdmJtRnllUzVxY3lJc0luTnZkWEpqWlZKdmIzUWlPaUl2VlhObGNuTXZUV0YwZEM5VGFYUmxjeTl3YjNCdGIzUnBiMjRpTENKemIzVnlZMlZ6UTI5dWRHVnVkQ0k2V3lKamIyNXpkQ0JZSUQwZ0oxZ25PMXh1WTI5dWMzUWdXU0E5SUNkWkp6dGNibU52Ym5OMElFRk1VRWhCSUQwZ0owRnNjR2hoSnp0Y2JseHVaWGh3YjNKMElHTnZibk4wSUdGNFpYTWdQU0JiV0N3Z1dTd2dKMW9uWFR0Y2JtVjRjRzl5ZENCamIyNXpkQ0J5WjJJZ1BTQmJKMUpsWkNjc0lDZEhjbVZsYmljc0lDZENiSFZsSnl3Z1FVeFFTRUZkTzF4dVpYaHdiM0owSUdOdmJuTjBJR2h6YkNBOUlGc25TSFZsSnl3Z0oxTmhkSFZ5WVhScGIyNG5MQ0FuVEdsbmFIUnVaWE56Snl3Z1FVeFFTRUZkTzF4dVpYaHdiM0owSUdOdmJuTjBJSEJ2YzJsMGFXOXVjeUE5SUZzblZHOXdKeXdnSjFKcFoyaDBKeXdnSjBKdmRIUnZiU2NzSUNkTVpXWjBKMTA3WEc1bGVIQnZjblFnWTI5dWMzUWdjMmhoWkc5M0lEMGdXMWdzSUZrc0lDZFNZV1JwZFhNbkxDQW5VM0J5WldGa0p5d2dKME52Ykc5eUoxMDdJbDE5XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy92YWx1ZS10eXBlcy9zZXR0aW5ncy9kaWN0aW9uYXJ5LmpzXG4gKiogbW9kdWxlIGlkID0gNDNcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHMuZGVhY3RpdmF0ZSA9IGV4cG9ydHMuZ2V0UHJvY2Vzc0lkID0gdW5kZWZpbmVkO1xuZXhwb3J0cy5hY3RpdmF0ZSA9IGFjdGl2YXRlO1xuXG52YXIgX3RpbWVyID0gcmVxdWlyZSgnLi90aW1lcicpO1xuXG52YXIgX3RpbWVyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3RpbWVyKTtcblxudmFyIF90aWNrID0gcmVxdWlyZSgnLi90aWNrJyk7XG5cbnZhciBfdGljazIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF90aWNrKTtcblxudmFyIF9tYW5hZ2VyID0gcmVxdWlyZSgnLi9tYW5hZ2VyJyk7XG5cbnZhciBfbWFuYWdlcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9tYW5hZ2VyKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxudmFyIHByb2Nlc3NTdGVwT3JkZXIgPSBbeyBuYW1lOiAnb25GcmFtZVN0YXJ0JyB9LCB7IG5hbWU6ICdvblVwZGF0ZScgfSwgeyBuYW1lOiAnd2lsbFJlbmRlcicsIGRlY2lkZVJlbmRlcjogdHJ1ZSB9LCB7IG5hbWU6ICdvblByZVJlbmRlcicsIGlzUmVuZGVyOiB0cnVlIH0sIHsgbmFtZTogJ29uUmVuZGVyJywgaXNSZW5kZXI6IHRydWUgfSwgeyBuYW1lOiAnb25Qb3N0UmVuZGVyJywgaXNSZW5kZXI6IHRydWUgfSwgeyBuYW1lOiAnb25GcmFtZUVuZCcgfSwgeyBuYW1lOiAnb25DbGVhbnVwJyB9XTsgLypcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBDb3JlIHJlbmRlciBsb29wXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBTb21lIGRlY2ljaXNvbnMgaGVyZSBoYXZlIGJlZW4gdGFrZW4gaW4gdGhlIG5hbWUgb2YgcGVyZm9ybWFuY2UuIEFsbCBoYWlsIHBlcmZvcm1hbmNlLlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChJdCB0dXJucyBvdXQgbWljcm9vcHRpbWlzYXRpb25zIGRvIG1hdHRlciB3aGVuIHlvdSBoYXZlIDE2bXMpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqL1xuXG52YXIgbnVtUHJvY2Vzc1N0ZXBzID0gcHJvY2Vzc1N0ZXBPcmRlci5sZW5ndGg7XG5cbi8vIFtib29sZWFuXTogSXMgbG9vcCBydW5uaW5nP1xudmFyIGlzUnVubmluZyA9IGZhbHNlO1xuXG4vKlxuICAgIFt0aW1lc3RhbXBdOiBGcmFtZSB0aW1lc3RhbXBcbiAgICBbaW50XTogVGltZSBzaW5jZSBsYXN0IGZyYW1lXG4qL1xuZnVuY3Rpb24gZmlyZUFsbChmcmFtZVN0YW1wLCBlbGFwc2VkKSB7XG4gICAgdmFyIGFjdGl2ZUlkcyA9IF9tYW5hZ2VyMi5kZWZhdWx0LmdldEFjdGl2ZUlkcygpO1xuICAgIHZhciBhY3RpdmVQcm9jZXNzQ291bnQgPSBhY3RpdmVJZHMubGVuZ3RoO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBudW1Qcm9jZXNzU3RlcHM7IGkrKykge1xuICAgICAgICB2YXIgc3RlcCA9IHByb2Nlc3NTdGVwT3JkZXJbaV07XG5cbiAgICAgICAgZm9yICh2YXIgaTIgPSAwOyBpMiA8IGFjdGl2ZVByb2Nlc3NDb3VudDsgaTIrKykge1xuICAgICAgICAgICAgdmFyIHByb2Nlc3MgPSBfbWFuYWdlcjIuZGVmYXVsdC5hY3RpdmVQcm9jZXNzZXNbYWN0aXZlSWRzW2kyXV07XG4gICAgICAgICAgICB2YXIgcmVzdWx0ID0gZmFsc2U7XG5cbiAgICAgICAgICAgIC8vIENoZWNrIGlmIHRoaXMgcHJvY2VzcyBoYXMgdGhpcyBzdGVwLCBvciBpZiBpdCdzIGEgcmVuZGVyIHN0ZXAgdGhhdCB3ZSdyZSByZW5kZXJpbmcgdGhpcyBmcmFtZVxuICAgICAgICAgICAgaWYgKHByb2Nlc3MgJiYgcHJvY2Vzc1tzdGVwLm5hbWVdICYmICghc3RlcC5pc1JlbmRlciB8fCBzdGVwLmlzUmVuZGVyICYmIHByb2Nlc3MuX3JlbmRlclRoaXNGcmFtZSA9PT0gdHJ1ZSkpIHtcbiAgICAgICAgICAgICAgICByZXN1bHQgPSBwcm9jZXNzW3N0ZXAubmFtZV0uY2FsbChwcm9jZXNzLCBwcm9jZXNzLCBmcmFtZVN0YW1wLCBlbGFwc2VkKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gSWYgdGhpcyBpcyBhIGRlY2lkZSByZW5kZXIgc3RlcCBhbmQgaXQgcmV0dXJucyBgZmFsc2VgLCBzZXQgd2lsbFJlbmRlciB0byBmYWxzZVxuICAgICAgICAgICAgaWYgKHN0ZXAuZGVjaWRlUmVuZGVyKSB7XG4gICAgICAgICAgICAgICAgcHJvY2Vzcy5fcmVuZGVyVGhpc0ZyYW1lID0gcHJvY2Vzc1tzdGVwLm5hbWVdICYmIHJlc3VsdCAhPT0gdHJ1ZSA/IGZhbHNlIDogdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBfbWFuYWdlcjIuZGVmYXVsdC5nZXROb25CYWNrZ3JvdW5kUnVubmluZ0NvdW50KCk7XG59XG5cbi8vIEZ1bmN0aW9uIHRvIGZpcmUgZXZlcnkgZnJhbWVcbmZ1bmN0aW9uIGZyYW1lKGZyYW1lU3RhbXApIHtcbiAgICBfdGltZXIyLmRlZmF1bHQudXBkYXRlKGZyYW1lU3RhbXApO1xuICAgIGlzUnVubmluZyA9IGZpcmVBbGwoZnJhbWVTdGFtcCwgX3RpbWVyMi5kZWZhdWx0LmdldEVsYXBzZWQoKSk7XG5cbiAgICBpZiAoaXNSdW5uaW5nKSB7XG4gICAgICAgICgwLCBfdGljazIuZGVmYXVsdCkoZnJhbWUpO1xuICAgIH1cbn1cblxuLy8gU3RhcnQgbG9vcFxuZnVuY3Rpb24gc3RhcnQoKSB7XG4gICAgaWYgKCFpc1J1bm5pbmcpIHtcbiAgICAgICAgX3RpbWVyMi5kZWZhdWx0LnN0YXJ0KCk7XG4gICAgICAgIGlzUnVubmluZyA9IHRydWU7XG4gICAgICAgICgwLCBfdGljazIuZGVmYXVsdCkoZnJhbWUpO1xuICAgIH1cbn1cblxuLy8gRXhwb3J0c1xudmFyIGdldFByb2Nlc3NJZCA9IGV4cG9ydHMuZ2V0UHJvY2Vzc0lkID0gX21hbmFnZXIyLmRlZmF1bHQuZ2V0UHJvY2Vzc0lkO1xuXG4vKlxuICAgIFtpbnRdOiBQcm9jZXNzIElEIHRvIGFjdGl2YXRlXG4gICAgW1Byb2Nlc3NdOiBQcm9jZXNzIHRvIGFjdGl2YXRlXG4qL1xuZnVuY3Rpb24gYWN0aXZhdGUoaWQsIHByb2Nlc3MpIHtcbiAgICBfbWFuYWdlcjIuZGVmYXVsdC5hY3RpdmF0ZShpZCwgcHJvY2Vzcyk7XG5cbiAgICBpZiAoIWlzUnVubmluZykge1xuICAgICAgICBzdGFydCgpO1xuICAgIH1cbn1cblxuLypcbiAgICBbaW50XTogUHJvY2VzcyBJRCB0byBkZWFjdGl2YXRlXG4qL1xudmFyIGRlYWN0aXZhdGUgPSBleHBvcnRzLmRlYWN0aXZhdGUgPSBfbWFuYWdlcjIuZGVmYXVsdC5kZWFjdGl2YXRlO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluTnlZeTl3Y205alpYTnpMMnh2YjNBdWFuTWlYU3dpYm1GdFpYTWlPbHRkTENKdFlYQndhVzVuY3lJNklqczdPenRSUVdsR1owSTdPenM3T3pzN096czdPenM3T3pzN1FVRjJSV2hDTEVsQlFVMHNiVUpCUVcxQ0xFTkJRM0pDTEVWQlFVVXNUVUZCVFN4alFVRk9MRVZCUkcxQ0xFVkJSWEpDTEVWQlFVVXNUVUZCVFN4VlFVRk9MRVZCUm0xQ0xFVkJSM0pDTEVWQlFVVXNUVUZCVFN4WlFVRk9MRVZCUVc5Q0xHTkJRV01zU1VGQlpDeEZRVWhFTEVWQlNYSkNMRVZCUVVVc1RVRkJUU3hoUVVGT0xFVkJRWEZDTEZWQlFWVXNTVUZCVml4RlFVcEdMRVZCUzNKQ0xFVkJRVVVzVFVGQlRTeFZRVUZPTEVWQlFXdENMRlZCUVZVc1NVRkJWaXhGUVV4RExFVkJUWEpDTEVWQlFVVXNUVUZCVFN4alFVRk9MRVZCUVhOQ0xGVkJRVlVzU1VGQlZpeEZRVTVJTEVWQlQzSkNMRVZCUVVVc1RVRkJUU3haUVVGT0xFVkJVRzFDTEVWQlVYSkNMRVZCUVVVc1RVRkJUU3hYUVVGT0xFVkJVbTFDTEVOQlFXNUNPenM3T3pzN08wRkJWVTRzU1VGQlRTeHJRa0ZCYTBJc2FVSkJRV2xDTEUxQlFXcENPenM3UVVGSGVFSXNTVUZCU1N4WlFVRlpMRXRCUVZvN096czdPenRCUVUxS0xGTkJRVk1zVDBGQlZDeERRVUZwUWl4VlFVRnFRaXhGUVVFMlFpeFBRVUUzUWl4RlFVRnpRenRCUVVOc1F5eFJRVUZOTEZsQlFWa3NhMEpCUVZFc1dVRkJVaXhGUVVGYUxFTkJSRFJDTzBGQlJXeERMRkZCUVUwc2NVSkJRWEZDTEZWQlFWVXNUVUZCVml4RFFVWlBPenRCUVVsc1F5eFRRVUZMTEVsQlFVa3NTVUZCU1N4RFFVRktMRVZCUVU4c1NVRkJTU3hsUVVGS0xFVkJRWEZDTEVkQlFYSkRMRVZCUVRCRE8wRkJRM1JETEZsQlFVMHNUMEZCVHl4cFFrRkJhVUlzUTBGQmFrSXNRMEZCVUN4RFFVUm5RenM3UVVGSGRFTXNZVUZCU3l4SlFVRkpMRXRCUVVzc1EwRkJUQ3hGUVVGUkxFdEJRVXNzYTBKQlFVd3NSVUZCZVVJc1NVRkJNVU1zUlVGQlowUTdRVUZETlVNc1owSkJRVTBzVlVGQlZTeHJRa0ZCVVN4bFFVRlNMRU5CUVhkQ0xGVkJRVlVzUlVGQlZpeERRVUY0UWl4RFFVRldMRU5CUkhORE8wRkJSVFZETEdkQ1FVRkpMRk5CUVZNc1MwRkJWRHM3TzBGQlJuZERMR2RDUVV0NFF5eFhRVUZYTEZGQlFWRXNTMEZCU3l4SlFVRk1MRU5CUVc1Q0xFdEJRV3RETEVOQlFVTXNTMEZCU3l4UlFVRk1MRWxCUVd0Q0xFdEJRVXNzVVVGQlRDeEpRVUZwUWl4UlFVRlJMR2RDUVVGU0xFdEJRVFpDTEVsQlFUZENMRU5CUVhSRkxFVkJRVEpITzBGQlF6TkhMSGxDUVVGVExGRkJRVkVzUzBGQlN5eEpRVUZNTEVOQlFWSXNRMEZCYlVJc1NVRkJia0lzUTBGQmQwSXNUMEZCZUVJc1JVRkJhVU1zVDBGQmFrTXNSVUZCTUVNc1ZVRkJNVU1zUlVGQmMwUXNUMEZCZEVRc1EwRkJWQ3hEUVVReVJ6dGhRVUV2UnpzN08wRkJURFJETEdkQ1FWVjRReXhMUVVGTExGbEJRVXdzUlVGQmJVSTdRVUZEYmtJc2QwSkJRVkVzWjBKQlFWSXNSMEZCTWtJc1QwRkJReXhEUVVGUkxFdEJRVXNzU1VGQlRDeERRVUZTTEVsQlFYTkNMRmRCUVZjc1NVRkJXQ3hIUVVGdFFpeExRVUV4UXl4SFFVRnJSQ3hKUVVGc1JDeERRVVJTTzJGQlFYWkNPMU5CVmtvN1MwRklTanM3UVVGdFFrRXNWMEZCVHl4clFrRkJVU3cwUWtGQlVpeEZRVUZRTEVOQmRrSnJRenREUVVGMFF6czdPMEZCTWtKQkxGTkJRVk1zUzBGQlZDeERRVUZsTEZWQlFXWXNSVUZCTWtJN1FVRkRka0lzYjBKQlFVMHNUVUZCVGl4RFFVRmhMRlZCUVdJc1JVRkVkVUk3UVVGRmRrSXNaMEpCUVZrc1VVRkJVU3hWUVVGU0xFVkJRVzlDTEdkQ1FVRk5MRlZCUVU0c1JVRkJjRUlzUTBGQldpeERRVVoxUWpzN1FVRkpka0lzVVVGQlNTeFRRVUZLTEVWQlFXVTdRVUZEV0N3MFFrRkJTeXhMUVVGTUxFVkJSRmM3UzBGQlpqdERRVXBLT3pzN1FVRlZRU3hUUVVGVExFdEJRVlFzUjBGQmFVSTdRVUZEWWl4UlFVRkpMRU5CUVVNc1UwRkJSQ3hGUVVGWk8wRkJRMW9zZDBKQlFVMHNTMEZCVGl4SFFVUlpPMEZCUlZvc2IwSkJRVmtzU1VGQldpeERRVVpaTzBGQlIxb3NORUpCUVVzc1MwRkJUQ3hGUVVoWk8wdEJRV2hDTzBOQlJFbzdPenRCUVZOUExFbEJRVTBzYzBOQlFXVXNhMEpCUVZFc1dVRkJVanM3T3pzN08wRkJUWEpDTEZOQlFWTXNVVUZCVkN4RFFVRnJRaXhGUVVGc1FpeEZRVUZ6UWl4UFFVRjBRaXhGUVVFclFqdEJRVU5zUXl4elFrRkJVU3hSUVVGU0xFTkJRV2xDTEVWQlFXcENMRVZCUVhGQ0xFOUJRWEpDTEVWQlJHdERPenRCUVVkc1F5eFJRVUZKTEVOQlFVTXNVMEZCUkN4RlFVRlpPMEZCUTFvc1owSkJSRms3UzBGQmFFSTdRMEZJUnpzN096czdRVUZYUVN4SlFVRk5MR3REUVVGaExHdENRVUZSTEZWQlFWSWlMQ0ptYVd4bElqb2liRzl2Y0M1cWN5SXNJbk52ZFhKalpWSnZiM1FpT2lJdlZYTmxjbk12VFdGMGRDOVRhWFJsY3k5d2IzQnRiM1JwYjI0aUxDSnpiM1Z5WTJWelEyOXVkR1Z1ZENJNld5SXZLbHh1SUNBZ0lFTnZjbVVnY21WdVpHVnlJR3h2YjNCY2JseHVJQ0FnSUZOdmJXVWdaR1ZqYVdOcGMyOXVjeUJvWlhKbElHaGhkbVVnWW1WbGJpQjBZV3RsYmlCcGJpQjBhR1VnYm1GdFpTQnZaaUJ3WlhKbWIzSnRZVzVqWlM0Z1FXeHNJR2hoYVd3Z2NHVnlabTl5YldGdVkyVXVYRzRnSUNBZ0tFbDBJSFIxY201eklHOTFkQ0J0YVdOeWIyOXdkR2x0YVhOaGRHbHZibk1nWkc4Z2JXRjBkR1Z5SUhkb1pXNGdlVzkxSUdoaGRtVWdNVFp0Y3lsY2Jpb3ZYRzVwYlhCdmNuUWdkR2x0WlhJZ1puSnZiU0FuTGk5MGFXMWxjaWM3WEc1cGJYQnZjblFnZEdsamF5Qm1jbTl0SUNjdUwzUnBZMnNuTzF4dWFXMXdiM0owSUcxaGJtRm5aWElnWm5KdmJTQW5MaTl0WVc1aFoyVnlKenRjYmx4dVkyOXVjM1FnY0hKdlkyVnpjMU4wWlhCUGNtUmxjaUE5SUZ0Y2JpQWdJQ0I3SUc1aGJXVTZJQ2R2YmtaeVlXMWxVM1JoY25RbklIMHNYRzRnSUNBZ2V5QnVZVzFsT2lBbmIyNVZjR1JoZEdVbklIMHNYRzRnSUNBZ2V5QnVZVzFsT2lBbmQybHNiRkpsYm1SbGNpY3NJR1JsWTJsa1pWSmxibVJsY2pvZ2RISjFaU0I5TEZ4dUlDQWdJSHNnYm1GdFpUb2dKMjl1VUhKbFVtVnVaR1Z5Snl3Z2FYTlNaVzVrWlhJNklIUnlkV1VnZlN4Y2JpQWdJQ0I3SUc1aGJXVTZJQ2R2YmxKbGJtUmxjaWNzSUdselVtVnVaR1Z5T2lCMGNuVmxJSDBzWEc0Z0lDQWdleUJ1WVcxbE9pQW5iMjVRYjNOMFVtVnVaR1Z5Snl3Z2FYTlNaVzVrWlhJNklIUnlkV1VnZlN4Y2JpQWdJQ0I3SUc1aGJXVTZJQ2R2YmtaeVlXMWxSVzVrSnlCOUxGeHVJQ0FnSUhzZ2JtRnRaVG9nSjI5dVEyeGxZVzUxY0NjZ2ZWeHVYVHRjYm1OdmJuTjBJRzUxYlZCeWIyTmxjM05UZEdWd2N5QTlJSEJ5YjJObGMzTlRkR1Z3VDNKa1pYSXViR1Z1WjNSb08xeHVYRzR2THlCYlltOXZiR1ZoYmwwNklFbHpJR3h2YjNBZ2NuVnVibWx1Wno5Y2JteGxkQ0JwYzFKMWJtNXBibWNnUFNCbVlXeHpaVHRjYmx4dUx5cGNiaUFnSUNCYmRHbHRaWE4wWVcxd1hUb2dSbkpoYldVZ2RHbHRaWE4wWVcxd1hHNGdJQ0FnVzJsdWRGMDZJRlJwYldVZ2MybHVZMlVnYkdGemRDQm1jbUZ0WlZ4dUtpOWNibVoxYm1OMGFXOXVJR1pwY21WQmJHd29abkpoYldWVGRHRnRjQ3dnWld4aGNITmxaQ2tnZTF4dUlDQWdJR052Ym5OMElHRmpkR2wyWlVsa2N5QTlJRzFoYm1GblpYSXVaMlYwUVdOMGFYWmxTV1J6S0NrN1hHNGdJQ0FnWTI5dWMzUWdZV04wYVhabFVISnZZMlZ6YzBOdmRXNTBJRDBnWVdOMGFYWmxTV1J6TG14bGJtZDBhRHRjYmx4dUlDQWdJR1p2Y2lBb2JHVjBJR2tnUFNBd095QnBJRHdnYm5WdFVISnZZMlZ6YzFOMFpYQnpPeUJwS3lzcElIdGNiaUFnSUNBZ0lDQWdZMjl1YzNRZ2MzUmxjQ0E5SUhCeWIyTmxjM05UZEdWd1QzSmtaWEpiYVYwN1hHNWNiaUFnSUNBZ0lDQWdabTl5SUNoc1pYUWdhVElnUFNBd095QnBNaUE4SUdGamRHbDJaVkJ5YjJObGMzTkRiM1Z1ZERzZ2FUSXJLeWtnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdZMjl1YzNRZ2NISnZZMlZ6Y3lBOUlHMWhibUZuWlhJdVlXTjBhWFpsVUhKdlkyVnpjMlZ6VzJGamRHbDJaVWxrYzF0cE1sMWRPMXh1SUNBZ0lDQWdJQ0FnSUNBZ2JHVjBJSEpsYzNWc2RDQTlJR1poYkhObE8xeHVYRzRnSUNBZ0lDQWdJQ0FnSUNBdkx5QkRhR1ZqYXlCcFppQjBhR2x6SUhCeWIyTmxjM01nYUdGeklIUm9hWE1nYzNSbGNDd2diM0lnYVdZZ2FYUW5jeUJoSUhKbGJtUmxjaUJ6ZEdWd0lIUm9ZWFFnZDJVbmNtVWdjbVZ1WkdWeWFXNW5JSFJvYVhNZ1puSmhiV1ZjYmlBZ0lDQWdJQ0FnSUNBZ0lHbG1JQ2h3Y205alpYTnpJQ1ltSUhCeWIyTmxjM05iYzNSbGNDNXVZVzFsWFNBbUppQW9JWE4wWlhBdWFYTlNaVzVrWlhJZ2ZId2dLSE4wWlhBdWFYTlNaVzVrWlhJZ0ppWWdjSEp2WTJWemN5NWZjbVZ1WkdWeVZHaHBjMFp5WVcxbElEMDlQU0IwY25WbEtTa3BJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0J5WlhOMWJIUWdQU0J3Y205alpYTnpXM04wWlhBdWJtRnRaVjB1WTJGc2JDaHdjbTlqWlhOekxDQndjbTlqWlhOekxDQm1jbUZ0WlZOMFlXMXdMQ0JsYkdGd2MyVmtLVHRjYmlBZ0lDQWdJQ0FnSUNBZ0lIMWNibHh1SUNBZ0lDQWdJQ0FnSUNBZ0x5OGdTV1lnZEdocGN5QnBjeUJoSUdSbFkybGtaU0J5Wlc1a1pYSWdjM1JsY0NCaGJtUWdhWFFnY21WMGRYSnVjeUJnWm1Gc2MyVmdMQ0J6WlhRZ2QybHNiRkpsYm1SbGNpQjBieUJtWVd4elpWeHVJQ0FnSUNBZ0lDQWdJQ0FnYVdZZ0tITjBaWEF1WkdWamFXUmxVbVZ1WkdWeUtTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdjSEp2WTJWemN5NWZjbVZ1WkdWeVZHaHBjMFp5WVcxbElEMGdLSEJ5YjJObGMzTmJjM1JsY0M1dVlXMWxYU0FtSmlCeVpYTjFiSFFnSVQwOUlIUnlkV1VwSUQ4Z1ptRnNjMlVnT2lCMGNuVmxPMXh1SUNBZ0lDQWdJQ0FnSUNBZ2ZWeHVJQ0FnSUNBZ0lDQjlYRzRnSUNBZ2ZWeHVYRzRnSUNBZ2NtVjBkWEp1SUcxaGJtRm5aWEl1WjJWMFRtOXVRbUZqYTJkeWIzVnVaRkoxYm01cGJtZERiM1Z1ZENncE8xeHVmVnh1WEc0dkx5QkdkVzVqZEdsdmJpQjBieUJtYVhKbElHVjJaWEo1SUdaeVlXMWxYRzVtZFc1amRHbHZiaUJtY21GdFpTaG1jbUZ0WlZOMFlXMXdLU0I3WEc0Z0lDQWdkR2x0WlhJdWRYQmtZWFJsS0daeVlXMWxVM1JoYlhBcE8xeHVJQ0FnSUdselVuVnVibWx1WnlBOUlHWnBjbVZCYkd3b1puSmhiV1ZUZEdGdGNDd2dkR2x0WlhJdVoyVjBSV3hoY0hObFpDZ3BLVHRjYmx4dUlDQWdJR2xtSUNocGMxSjFibTVwYm1jcElIdGNiaUFnSUNBZ0lDQWdkR2xqYXlobWNtRnRaU2s3WEc0Z0lDQWdmVnh1ZlZ4dVhHNHZMeUJUZEdGeWRDQnNiMjl3WEc1bWRXNWpkR2x2YmlCemRHRnlkQ2dwSUh0Y2JpQWdJQ0JwWmlBb0lXbHpVblZ1Ym1sdVp5a2dlMXh1SUNBZ0lDQWdJQ0IwYVcxbGNpNXpkR0Z5ZENncE8xeHVJQ0FnSUNBZ0lDQnBjMUoxYm01cGJtY2dQU0IwY25WbE8xeHVJQ0FnSUNBZ0lDQjBhV05yS0daeVlXMWxLVHRjYmlBZ0lDQjlYRzU5WEc1Y2JpOHZJRVY0Y0c5eWRITmNibVY0Y0c5eWRDQmpiMjV6ZENCblpYUlFjbTlqWlhOelNXUWdQU0J0WVc1aFoyVnlMbWRsZEZCeWIyTmxjM05KWkR0Y2JseHVMeXBjYmlBZ0lDQmJhVzUwWFRvZ1VISnZZMlZ6Y3lCSlJDQjBieUJoWTNScGRtRjBaVnh1SUNBZ0lGdFFjbTlqWlhOelhUb2dVSEp2WTJWemN5QjBieUJoWTNScGRtRjBaVnh1S2k5Y2JtVjRjRzl5ZENCbWRXNWpkR2x2YmlCaFkzUnBkbUYwWlNocFpDd2djSEp2WTJWemN5a2dlMXh1SUNBZ0lHMWhibUZuWlhJdVlXTjBhWFpoZEdVb2FXUXNJSEJ5YjJObGMzTXBPMXh1WEc0Z0lDQWdhV1lnS0NGcGMxSjFibTVwYm1jcElIdGNiaUFnSUNBZ0lDQWdjM1JoY25Rb0tUdGNiaUFnSUNCOVhHNTlYRzVjYmk4cVhHNGdJQ0FnVzJsdWRGMDZJRkJ5YjJObGMzTWdTVVFnZEc4Z1pHVmhZM1JwZG1GMFpWeHVLaTljYm1WNGNHOXlkQ0JqYjI1emRDQmtaV0ZqZEdsMllYUmxJRDBnYldGdVlXZGxjaTVrWldGamRHbDJZWFJsT3lKZGZRPT1cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL3Byb2Nlc3MvbG9vcC5qc1xuICoqIG1vZHVsZSBpZCA9IDQ0XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHMuZGVmYXVsdCA9IGNyZWF0ZUVhc2luZ0Z1bmN0aW9uO1xuLypcbiAgICBNaXJyb3IgZWFzaW5nXG4gICAgXG4gICAgTWlycm9ycyB0aGUgcHJvdmlkZWQgZWFzaW5nIGZ1bmN0aW9uLCB1c2VkIGhlcmUgZm9yIG1pcnJvcmluZyBhblxuICAgIGVhc2VJbiBpbnRvIGFuIGVhc2VJbk91dFxuICAgIFxuICAgIEBwYXJhbSBbbnVtYmVyXTogUHJvZ3Jlc3MsIGZyb20gMCAtIDEsIG9mIGN1cnJlbnQgc2hpZnRcbiAgICBAcGFyYW0gW2Z1bmN0aW9uXTogVGhlIGVhc2luZyBmdW5jdGlvbiB0byBtaXJyb3JcbiAgICBAcmV0dXJucyBbbnVtYmVyXTogVGhlIGVhc2luZy1hZGp1c3RlZCBkZWx0YVxuKi9cbnZhciBtaXJyb3JFYXNpbmcgPSBmdW5jdGlvbiAobWV0aG9kKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChwcm9ncmVzcywgc3RyZW5ndGgpIHtcbiAgICAgICAgcmV0dXJuIHByb2dyZXNzIDw9IDAuNSA/IG1ldGhvZCgyICogcHJvZ3Jlc3MsIHN0cmVuZ3RoKSAvIDIgOiAoMiAtIG1ldGhvZCgyICogKDEgLSBwcm9ncmVzcyksIHN0cmVuZ3RoKSkgLyAyO1xuICAgIH07XG59O1xuXG4vKlxuICAgIFJldmVyc2UgZWFzaW5nXG4gICAgXG4gICAgUmV2ZXJzZXMgdGhlIG91dHB1dCBvZiB0aGUgcHJvdmlkZWQgZWFzaW5nIGZ1bmN0aW9uLCB1c2VkIGZvciBmbGlwcGluZyBlYXNlSW5cbiAgICBjdXJ2ZSB0byBhbiBlYXNlT3V0LlxuICAgIFxuICAgIEBwYXJhbSBbbnVtYmVyXTogUHJvZ3Jlc3MsIGZyb20gMCAtIDEsIG9mIGN1cnJlbnQgc2hpZnRcbiAgICBAcGFyYW0gW2Z1bmN0aW9uXTogVGhlIGVhc2luZyBmdW5jdGlvbiB0byByZXZlcnNlXG4gICAgQHJldHVybnMgW251bWJlcl06IFRoZSBlYXNpbmctYWRqdXN0ZWQgZGVsdGFcbiovXG52YXIgcmV2ZXJzZUVhc2luZyA9IGZ1bmN0aW9uIChtZXRob2QpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gKHByb2dyZXNzLCBzdHJlbmd0aCkge1xuICAgICAgICByZXR1cm4gMSAtIG1ldGhvZCgxIC0gcHJvZ3Jlc3MsIHN0cmVuZ3RoKTtcbiAgICB9O1xufTtcblxuLypcbiAgICBFYXNpbmcgY2xhc3NcblxuICAgIElmIHByb3ZpZGVkIGVhc2luZyBmdW5jdGlvbiwgcmV0dXJucyBlYXNpbmcgZnVuY3Rpb24gd2l0aCBcbiAgICBpbi9vdXQvaW5PdXQgdmFyaWF0aW9uc1xuXG4gICAgSWYgcHJvdmlkZWQgZm91ciBhcmd1bWVudHMsIHJldHVybnMgbmV3IEJlemllciBjbGFzcyBpbnN0ZWFkLlxuKi9cbmZ1bmN0aW9uIGNyZWF0ZUVhc2luZ0Z1bmN0aW9uKG1ldGhvZCkge1xuICAgIHZhciBlYXNpbmdGdW5jdGlvbiA9IGZ1bmN0aW9uIChwcm9ncmVzcywgc3RyZW5ndGgpIHtcbiAgICAgICAgcmV0dXJuIG1ldGhvZChwcm9ncmVzcywgc3RyZW5ndGgpO1xuICAgIH07XG5cbiAgICBlYXNpbmdGdW5jdGlvbi5pbiA9IGZ1bmN0aW9uIChwcm9ncmVzcywgc3RyZW5ndGgpIHtcbiAgICAgICAgcmV0dXJuIG1ldGhvZChwcm9ncmVzcywgc3RyZW5ndGgpO1xuICAgIH07XG4gICAgZWFzaW5nRnVuY3Rpb24ub3V0ID0gcmV2ZXJzZUVhc2luZyhtZXRob2QpO1xuICAgIGVhc2luZ0Z1bmN0aW9uLmluT3V0ID0gbWlycm9yRWFzaW5nKG1ldGhvZCk7XG5cbiAgICByZXR1cm4gZWFzaW5nRnVuY3Rpb247XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5OeVl5OWhZM1JwYjI1ekwyVmhjMmx1Wnk5amNtVmhkR1V0WldGemFXNW5MbXB6SWwwc0ltNWhiV1Z6SWpwYlhTd2liV0Z3Y0dsdVozTWlPaUk3T3p0clFrRm5RM2RDT3pzN096czdPenM3T3p0QlFYUkNlRUlzU1VGQlRTeGxRVUZsTEZWQlFVTXNUVUZCUkR0WFFVRlpMRlZCUVVNc1VVRkJSQ3hGUVVGWExGRkJRVmc3WlVGQmQwSXNVVUZCUXl4SlFVRlpMRWRCUVZvc1IwRkJiVUlzVDBGQlR5eEpRVUZKTEZGQlFVb3NSVUZCWXl4UlFVRnlRaXhKUVVGcFF5eERRVUZxUXl4SFFVRnhReXhEUVVGRExFbEJRVWtzVDBGQlR5eExRVUZMTEVsQlFVa3NVVUZCU2l4RFFVRk1MRVZCUVc5Q0xGRkJRVE5DTEVOQlFVb3NRMEZCUkN4SFFVRTJReXhEUVVFM1F6dExRVUZxUmp0RFFVRmFPenM3T3pzN096czdPenM3UVVGWmNrSXNTVUZCVFN4blFrRkJaMElzVlVGQlF5eE5RVUZFTzFkQlFWa3NWVUZCUXl4UlFVRkVMRVZCUVZjc1VVRkJXRHRsUVVGM1FpeEpRVUZKTEU5QlFVOHNTVUZCU1N4UlFVRktMRVZCUVdNc1VVRkJja0lzUTBGQlNqdExRVUY0UWp0RFFVRmFPenM3T3pzN096czdPMEZCVlZBc1UwRkJVeXh2UWtGQlZDeERRVUU0UWl4TlFVRTVRaXhGUVVGelF6dEJRVU5xUkN4UlFVRkpMR2xDUVVGcFFpeFZRVUZETEZGQlFVUXNSVUZCVnl4UlFVRllPMlZCUVhkQ0xFOUJRVThzVVVGQlVDeEZRVUZwUWl4UlFVRnFRanRMUVVGNFFpeERRVVEwUWpzN1FVRkhha1FzYlVKQlFXVXNSVUZCWml4SFFVRnZRaXhWUVVGRExGRkJRVVFzUlVGQlZ5eFJRVUZZTzJWQlFYZENMRTlCUVU4c1VVRkJVQ3hGUVVGcFFpeFJRVUZxUWp0TFFVRjRRaXhEUVVnMlFqdEJRVWxxUkN4dFFrRkJaU3hIUVVGbUxFZEJRWEZDTEdOQlFXTXNUVUZCWkN4RFFVRnlRaXhEUVVwcFJEdEJRVXRxUkN4dFFrRkJaU3hMUVVGbUxFZEJRWFZDTEdGQlFXRXNUVUZCWWl4RFFVRjJRaXhEUVV4cFJEczdRVUZQYWtRc1YwRkJUeXhqUVVGUUxFTkJVR2xFTzBOQlFYUkRJaXdpWm1sc1pTSTZJbU55WldGMFpTMWxZWE5wYm1jdWFuTWlMQ0p6YjNWeVkyVlNiMjkwSWpvaUwxVnpaWEp6TDAxaGRIUXZVMmwwWlhNdmNHOXdiVzkwYVc5dUlpd2ljMjkxY21ObGMwTnZiblJsYm5RaU9sc2lMeXBjYmlBZ0lDQk5hWEp5YjNJZ1pXRnphVzVuWEc0Z0lDQWdYRzRnSUNBZ1RXbHljbTl5Y3lCMGFHVWdjSEp2ZG1sa1pXUWdaV0Z6YVc1bklHWjFibU4wYVc5dUxDQjFjMlZrSUdobGNtVWdabTl5SUcxcGNuSnZjbWx1WnlCaGJseHVJQ0FnSUdWaGMyVkpiaUJwYm5SdklHRnVJR1ZoYzJWSmJrOTFkRnh1SUNBZ0lGeHVJQ0FnSUVCd1lYSmhiU0JiYm5WdFltVnlYVG9nVUhKdlozSmxjM01zSUdaeWIyMGdNQ0F0SURFc0lHOW1JR04xY25KbGJuUWdjMmhwWm5SY2JpQWdJQ0JBY0dGeVlXMGdXMloxYm1OMGFXOXVYVG9nVkdobElHVmhjMmx1WnlCbWRXNWpkR2x2YmlCMGJ5QnRhWEp5YjNKY2JpQWdJQ0JBY21WMGRYSnVjeUJiYm5WdFltVnlYVG9nVkdobElHVmhjMmx1WnkxaFpHcDFjM1JsWkNCa1pXeDBZVnh1S2k5Y2JtTnZibk4wSUcxcGNuSnZja1ZoYzJsdVp5QTlJQ2h0WlhSb2IyUXBJRDArSUNod2NtOW5jbVZ6Y3l3Z2MzUnlaVzVuZEdncElEMCtJQ2h3Y205bmNtVnpjeUE4UFNBd0xqVXBJRDhnYldWMGFHOWtLRElnS2lCd2NtOW5jbVZ6Y3l3Z2MzUnlaVzVuZEdncElDOGdNaUE2SUNneUlDMGdiV1YwYUc5a0tESWdLaUFvTVNBdElIQnliMmR5WlhOektTd2djM1J5Wlc1bmRHZ3BLU0F2SURJN1hHNGdJQ0FnSUNBZ0lGeHVMeXBjYmlBZ0lDQlNaWFpsY25ObElHVmhjMmx1WjF4dUlDQWdJRnh1SUNBZ0lGSmxkbVZ5YzJWeklIUm9aU0J2ZFhSd2RYUWdiMllnZEdobElIQnliM1pwWkdWa0lHVmhjMmx1WnlCbWRXNWpkR2x2Yml3Z2RYTmxaQ0JtYjNJZ1pteHBjSEJwYm1jZ1pXRnpaVWx1WEc0Z0lDQWdZM1Z5ZG1VZ2RHOGdZVzRnWldGelpVOTFkQzVjYmlBZ0lDQmNiaUFnSUNCQWNHRnlZVzBnVzI1MWJXSmxjbDA2SUZCeWIyZHlaWE56TENCbWNtOXRJREFnTFNBeExDQnZaaUJqZFhKeVpXNTBJSE5vYVdaMFhHNGdJQ0FnUUhCaGNtRnRJRnRtZFc1amRHbHZibDA2SUZSb1pTQmxZWE5wYm1jZ1puVnVZM1JwYjI0Z2RHOGdjbVYyWlhKelpWeHVJQ0FnSUVCeVpYUjFjbTV6SUZ0dWRXMWlaWEpkT2lCVWFHVWdaV0Z6YVc1bkxXRmthblZ6ZEdWa0lHUmxiSFJoWEc0cUwxeHVZMjl1YzNRZ2NtVjJaWEp6WlVWaGMybHVaeUE5SUNodFpYUm9iMlFwSUQwK0lDaHdjbTluY21WemN5d2djM1J5Wlc1bmRHZ3BJRDArSURFZ0xTQnRaWFJvYjJRb01TQXRJSEJ5YjJkeVpYTnpMQ0J6ZEhKbGJtZDBhQ2s3WEc1Y2JpOHFYRzRnSUNBZ1JXRnphVzVuSUdOc1lYTnpYRzVjYmlBZ0lDQkpaaUJ3Y205MmFXUmxaQ0JsWVhOcGJtY2dablZ1WTNScGIyNHNJSEpsZEhWeWJuTWdaV0Z6YVc1bklHWjFibU4wYVc5dUlIZHBkR2dnWEc0Z0lDQWdhVzR2YjNWMEwybHVUM1YwSUhaaGNtbGhkR2x2Ym5OY2JseHVJQ0FnSUVsbUlIQnliM1pwWkdWa0lHWnZkWElnWVhKbmRXMWxiblJ6TENCeVpYUjFjbTV6SUc1bGR5QkNaWHBwWlhJZ1kyeGhjM01nYVc1emRHVmhaQzVjYmlvdlhHNWxlSEJ2Y25RZ1pHVm1ZWFZzZENCbWRXNWpkR2x2YmlCamNtVmhkR1ZGWVhOcGJtZEdkVzVqZEdsdmJpaHRaWFJvYjJRcElIdGNiaUFnSUNCc1pYUWdaV0Z6YVc1blJuVnVZM1JwYjI0Z1BTQW9jSEp2WjNKbGMzTXNJSE4wY21WdVozUm9LU0E5UGlCdFpYUm9iMlFvY0hKdlozSmxjM01zSUhOMGNtVnVaM1JvS1R0Y2JseHVJQ0FnSUdWaGMybHVaMFoxYm1OMGFXOXVMbWx1SUQwZ0tIQnliMmR5WlhOekxDQnpkSEpsYm1kMGFDa2dQVDRnYldWMGFHOWtLSEJ5YjJkeVpYTnpMQ0J6ZEhKbGJtZDBhQ2s3WEc0Z0lDQWdaV0Z6YVc1blJuVnVZM1JwYjI0dWIzVjBJRDBnY21WMlpYSnpaVVZoYzJsdVp5aHRaWFJvYjJRcE8xeHVJQ0FnSUdWaGMybHVaMFoxYm1OMGFXOXVMbWx1VDNWMElEMGdiV2x5Y205eVJXRnphVzVuS0cxbGRHaHZaQ2s3WEc1Y2JpQWdJQ0J5WlhSMWNtNGdaV0Z6YVc1blJuVnVZM1JwYjI0N1hHNTlYRzRpWFgwPVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvYWN0aW9ucy9lYXNpbmcvY3JlYXRlLWVhc2luZy5qc1xuICoqIG1vZHVsZSBpZCA9IDQ1XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzLmRlZmF1bHQgPSBjdWJpY0Jlemllcjtcbi8qXG4gICAgQmV6aWVyIGZ1bmN0aW9uIGdlbmVyYXRvclxuICAgICAgICBcbiAgICBHYcOrdGFuIFJlbmF1ZGVhdSdzIEJlemllckVhc2luZ1xuICAgIGh0dHBzOi8vZ2l0aHViLmNvbS9ncmUvYmV6aWVyLWVhc2luZy9ibG9iL21hc3Rlci9pbmRleC5qcyAgXG4gICAgaHR0cHM6Ly9naXRodWIuY29tL2dyZS9iZXppZXItZWFzaW5nL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcbiAgICBZb3UncmUgYSBoZXJvXG4gICAgXG4gICAgVXNlXG4gICAgXG4gICAgICAgIHZhciBlYXNlT3V0ID0gbmV3IEJlemllciguMTcsLjY3LC44MywuNjcpLFxuICAgICAgICAgICAgeCA9IGVhc2VPdXQoMC41KTsgLy8gcmV0dXJucyAwLjYyNy4uLlxuKi9cblxuLy8gQ29uc3RhbnRzXG52YXIgTkVXVE9OX0lURVJBVElPTlMgPSA4O1xudmFyIE5FV1RPTl9NSU5fU0xPUEUgPSAwLjAwMTtcbnZhciBTVUJESVZJU0lPTl9QUkVDSVNJT04gPSAwLjAwMDAwMDE7XG52YXIgU1VCRElWSVNJT05fTUFYX0lURVJBVElPTlMgPSAxMDtcbnZhciBLX1NQTElORV9UQUJMRV9TSVpFID0gMTE7XG52YXIgS19TQU1QTEVfU1RFUF9TSVpFID0gMS4wIC8gKEtfU1BMSU5FX1RBQkxFX1NJWkUgLSAxLjApO1xudmFyIEZMT0FUXzMyX1NVUFBPUlRFRCA9IHR5cGVvZiBGbG9hdDMyQXJyYXkgIT09ICd1bmRlZmluZWQnO1xuXG4vLyBIZWxwZXIgbWV0aG9kc1xudmFyIGEgPSBmdW5jdGlvbiAoYTEsIGEyKSB7XG4gICAgcmV0dXJuIDEuMCAtIDMuMCAqIGEyICsgMy4wICogYTE7XG59O1xudmFyIGIgPSBmdW5jdGlvbiAoYTEsIGEyKSB7XG4gICAgcmV0dXJuIDMuMCAqIGEyIC0gNi4wICogYTE7XG59O1xudmFyIGMgPSBmdW5jdGlvbiAoYTEpIHtcbiAgICByZXR1cm4gMy4wICogYTE7XG59O1xuXG52YXIgZ2V0U2xvcGUgPSBmdW5jdGlvbiAodCwgYTEsIGEyKSB7XG4gICAgcmV0dXJuIDMuMCAqIGEoYTEsIGEyKSAqIHQgKiB0ICsgMi4wICogYihhMSwgYTIpICogdCArIGMoYTEpO1xufTtcblxudmFyIGNhbGNCZXppZXIgPSBmdW5jdGlvbiAodCwgYTEsIGEyKSB7XG4gICAgcmV0dXJuICgoYShhMSwgYTIpICogdCArIGIoYTEsIGEyKSkgKiB0ICsgYyhhMSkpICogdDtcbn07XG5cbi8qXG4gICAgQ3JlYXRlIGEgY3ViaWMgYmV6aWVyIHJlc29sdmVyXG4qL1xuZnVuY3Rpb24gY3ViaWNCZXppZXIobVgxLCBtWTEsIG1YMiwgbVkyKSB7XG4gICAgdmFyIHNhbXBsZVZhbHVlcyA9IEZMT0FUXzMyX1NVUFBPUlRFRCA/IG5ldyBGbG9hdDMyQXJyYXkoS19TUExJTkVfVEFCTEVfU0laRSkgOiBuZXcgQXJyYXkoS19TUExJTkVfVEFCTEVfU0laRSk7XG4gICAgdmFyIF9wcmVjb21wdXRlZCA9IGZhbHNlO1xuXG4gICAgdmFyIGJpbmFyeVN1YmRpdmlkZSA9IGZ1bmN0aW9uIChhWCwgYUEsIGFCKSB7XG4gICAgICAgIHZhciBpID0gMDtcbiAgICAgICAgdmFyIGN1cnJlbnRYID0gdW5kZWZpbmVkO1xuICAgICAgICB2YXIgY3VycmVudFQgPSB1bmRlZmluZWQ7XG5cbiAgICAgICAgZG8ge1xuICAgICAgICAgICAgY3VycmVudFQgPSBhQSArIChhQiAtIGFBKSAvIDIuMDtcbiAgICAgICAgICAgIGN1cnJlbnRYID0gY2FsY0JlemllcihjdXJyZW50VCwgbVgxLCBtWDIpIC0gYVg7XG4gICAgICAgICAgICBpZiAoY3VycmVudFggPiAwLjApIHtcbiAgICAgICAgICAgICAgICBhQiA9IGN1cnJlbnRUO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBhQSA9IGN1cnJlbnRUO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IHdoaWxlIChNYXRoLmFicyhjdXJyZW50WCkgPiBTVUJESVZJU0lPTl9QUkVDSVNJT04gJiYgKytpIDwgU1VCRElWSVNJT05fTUFYX0lURVJBVElPTlMpO1xuXG4gICAgICAgIHJldHVybiBjdXJyZW50VDtcbiAgICB9O1xuXG4gICAgdmFyIG5ld3RvblJhcGhzb25JdGVyYXRlID0gZnVuY3Rpb24gKGFYLCBhR3Vlc3NUKSB7XG4gICAgICAgIHZhciBpID0gMDtcbiAgICAgICAgdmFyIGN1cnJlbnRTbG9wZSA9IDA7XG4gICAgICAgIHZhciBjdXJyZW50WCA9IHVuZGVmaW5lZDtcblxuICAgICAgICBmb3IgKDsgaSA8IE5FV1RPTl9JVEVSQVRJT05TOyArK2kpIHtcbiAgICAgICAgICAgIGN1cnJlbnRTbG9wZSA9IGdldFNsb3BlKGFHdWVzc1QsIG1YMSwgbVgyKTtcblxuICAgICAgICAgICAgaWYgKGN1cnJlbnRTbG9wZSA9PT0gMC4wKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGFHdWVzc1Q7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGN1cnJlbnRYID0gY2FsY0JlemllcihhR3Vlc3NULCBtWDEsIG1YMikgLSBhWDtcbiAgICAgICAgICAgIGFHdWVzc1QgLT0gY3VycmVudFggLyBjdXJyZW50U2xvcGU7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gYUd1ZXNzVDtcbiAgICB9O1xuXG4gICAgdmFyIGNhbGNTYW1wbGVWYWx1ZXMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgS19TUExJTkVfVEFCTEVfU0laRTsgKytpKSB7XG4gICAgICAgICAgICBzYW1wbGVWYWx1ZXNbaV0gPSBjYWxjQmV6aWVyKGkgKiBLX1NBTVBMRV9TVEVQX1NJWkUsIG1YMSwgbVgyKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICB2YXIgZ2V0VEZvclggPSBmdW5jdGlvbiAoYVgpIHtcbiAgICAgICAgdmFyIGludGVydmFsU3RhcnQgPSAwLjA7XG4gICAgICAgIHZhciBjdXJyZW50U2FtcGxlID0gMTtcbiAgICAgICAgdmFyIGxhc3RTYW1wbGUgPSBLX1NQTElORV9UQUJMRV9TSVpFIC0gMTtcbiAgICAgICAgdmFyIGRpc3QgPSAwLjA7XG4gICAgICAgIHZhciBndWVzc0ZvclQgPSAwLjA7XG4gICAgICAgIHZhciBpbml0aWFsU2xvcGUgPSAwLjA7XG5cbiAgICAgICAgZm9yICg7IGN1cnJlbnRTYW1wbGUgIT0gbGFzdFNhbXBsZSAmJiBzYW1wbGVWYWx1ZXNbY3VycmVudFNhbXBsZV0gPD0gYVg7ICsrY3VycmVudFNhbXBsZSkge1xuICAgICAgICAgICAgaW50ZXJ2YWxTdGFydCArPSBLX1NBTVBMRV9TVEVQX1NJWkU7XG4gICAgICAgIH1cblxuICAgICAgICAtLWN1cnJlbnRTYW1wbGU7XG5cbiAgICAgICAgZGlzdCA9IChhWCAtIHNhbXBsZVZhbHVlc1tjdXJyZW50U2FtcGxlXSkgLyAoc2FtcGxlVmFsdWVzW2N1cnJlbnRTYW1wbGUgKyAxXSAtIHNhbXBsZVZhbHVlc1tjdXJyZW50U2FtcGxlXSk7XG4gICAgICAgIGd1ZXNzRm9yVCA9IGludGVydmFsU3RhcnQgKyBkaXN0ICogS19TQU1QTEVfU1RFUF9TSVpFO1xuXG4gICAgICAgIGluaXRpYWxTbG9wZSA9IGdldFNsb3BlKGd1ZXNzRm9yVCwgbVgxLCBtWDIpO1xuXG4gICAgICAgIC8vIElmIHNsb3BlIGlzIGdyZWF0ZXIgdGhhbiBtaW5cbiAgICAgICAgaWYgKGluaXRpYWxTbG9wZSA+PSBORVdUT05fTUlOX1NMT1BFKSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3dG9uUmFwaHNvbkl0ZXJhdGUoYVgsIGd1ZXNzRm9yVCk7XG4gICAgICAgICAgICAvLyBTbG9wZSBpcyBlcXVhbCB0byBtaW5cbiAgICAgICAgfSBlbHNlIGlmIChpbml0aWFsU2xvcGUgPT09IDAuMCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBndWVzc0ZvclQ7XG4gICAgICAgICAgICAgICAgLy8gU2xvcGUgaXMgbGVzcyB0aGFuIG1pblxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGJpbmFyeVN1YmRpdmlkZShhWCwgaW50ZXJ2YWxTdGFydCwgaW50ZXJ2YWxTdGFydCArIEtfU0FNUExFX1NURVBfU0laRSk7XG4gICAgICAgICAgICAgICAgfVxuICAgIH07XG5cbiAgICB2YXIgcHJlY29tcHV0ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgX3ByZWNvbXB1dGVkID0gdHJ1ZTtcbiAgICAgICAgaWYgKG1YMSAhPSBtWTEgfHwgbVgyICE9IG1ZMikge1xuICAgICAgICAgICAgY2FsY1NhbXBsZVZhbHVlcygpO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIHZhciByZXNvbHZlciA9IGZ1bmN0aW9uIChhWCkge1xuICAgICAgICB2YXIgcmV0dXJuVmFsdWUgPSB1bmRlZmluZWQ7XG5cbiAgICAgICAgaWYgKCFfcHJlY29tcHV0ZWQpIHtcbiAgICAgICAgICAgIHByZWNvbXB1dGUoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIElmIGxpbmVhciBncmFkaWVudCwgcmV0dXJuIFggYXMgVFxuICAgICAgICBpZiAobVgxID09PSBtWTEgJiYgbVgyID09PSBtWTIpIHtcbiAgICAgICAgICAgIHJldHVyblZhbHVlID0gYVg7XG5cbiAgICAgICAgICAgIC8vIElmIGF0IHN0YXJ0LCByZXR1cm4gMFxuICAgICAgICB9IGVsc2UgaWYgKGFYID09PSAwKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuVmFsdWUgPSAwO1xuXG4gICAgICAgICAgICAgICAgLy8gSWYgYXQgZW5kLCByZXR1cm4gMVxuICAgICAgICAgICAgfSBlbHNlIGlmIChhWCA9PT0gMSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm5WYWx1ZSA9IDE7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuVmFsdWUgPSBjYWxjQmV6aWVyKGdldFRGb3JYKGFYKSwgbVkxLCBtWTIpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcmV0dXJuVmFsdWU7XG4gICAgfTtcblxuICAgIHJldHVybiByZXNvbHZlcjtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbk55WXk5aFkzUnBiMjV6TDJWaGMybHVaeTlqY21WaGRHVXRZbVY2YVdWeUxtcHpJbDBzSW01aGJXVnpJanBiWFN3aWJXRndjR2x1WjNNaU9pSTdPenRyUWtGdFEzZENPenM3T3pzN096czdPenM3T3pzN08wRkJjRUo0UWl4SlFVRk5MRzlDUVVGdlFpeERRVUZ3UWp0QlFVTk9MRWxCUVUwc2JVSkJRVzFDTEV0QlFXNUNPMEZCUTA0c1NVRkJUU3gzUWtGQmQwSXNVMEZCZUVJN1FVRkRUaXhKUVVGTkxEWkNRVUUyUWl4RlFVRTNRanRCUVVOT0xFbEJRVTBzYzBKQlFYTkNMRVZCUVhSQ08wRkJRMDRzU1VGQlRTeHhRa0ZCY1VJc1QwRkJUeXh6UWtGQmMwSXNSMEZCZEVJc1EwRkJVRHRCUVVNelFpeEpRVUZOTEhGQ1FVRnpRaXhQUVVGUExGbEJRVkFzUzBGQmQwSXNWMEZCZUVJN096dEJRVWMxUWl4SlFVRk5MRWxCUVVrc1ZVRkJReXhGUVVGRUxFVkJRVXNzUlVGQlREdFhRVUZaTEUxQlFVMHNUVUZCVFN4RlFVRk9MRWRCUVZjc1RVRkJUU3hGUVVGT08wTkJRVGRDTzBGQlExWXNTVUZCVFN4SlFVRkpMRlZCUVVNc1JVRkJSQ3hGUVVGTExFVkJRVXc3VjBGQldTeE5RVUZOTEVWQlFVNHNSMEZCVnl4TlFVRk5MRVZCUVU0N1EwRkJka0k3UVVGRFZpeEpRVUZOTEVsQlFVa3NWVUZCUXl4RlFVRkVPMWRCUVZFc1RVRkJUU3hGUVVGT08wTkJRVkk3TzBGQlJWWXNTVUZCVFN4WFFVRlhMRlZCUVVNc1EwRkJSQ3hGUVVGSkxFVkJRVW9zUlVGQlVTeEZRVUZTTzFkQlFXVXNUVUZCVFN4RlFVRkZMRVZCUVVZc1JVRkJUU3hGUVVGT0xFTkJRVTRzUjBGQmEwSXNRMEZCYkVJc1IwRkJjMElzUTBGQmRFSXNSMEZCTUVJc1RVRkJUU3hGUVVGRkxFVkJRVVlzUlVGQlRTeEZRVUZPTEVOQlFVNHNSMEZCYTBJc1EwRkJiRUlzUjBGQmMwSXNSVUZCUlN4RlFVRkdMRU5CUVdoRU8wTkJRV1k3TzBGQlJXcENMRWxCUVUwc1lVRkJZU3hWUVVGRExFTkJRVVFzUlVGQlNTeEZRVUZLTEVWQlFWRXNSVUZCVWp0WFFVRmxMRU5CUVVNc1EwRkJReXhGUVVGRkxFVkJRVVlzUlVGQlRTeEZRVUZPTEVsQlFWa3NRMEZCV2l4SFFVRm5RaXhGUVVGRkxFVkJRVVlzUlVGQlRTeEZRVUZPTEVOQlFXaENMRU5CUVVRc1IwRkJPRUlzUTBGQk9VSXNSMEZCYTBNc1JVRkJSU3hGUVVGR0xFTkJRV3hETEVOQlFVUXNSMEZCTkVNc1EwRkJOVU03UTBGQlpqczdPenM3UVVGTFNpeFRRVUZUTEZkQlFWUXNRMEZCY1VJc1IwRkJja0lzUlVGQk1FSXNSMEZCTVVJc1JVRkJLMElzUjBGQkwwSXNSVUZCYjBNc1IwRkJjRU1zUlVGQmVVTTdRVUZEY0VRc1VVRkJUU3hsUVVGbExIRkNRVUZ4UWl4SlFVRkpMRmxCUVVvc1EwRkJhVUlzYlVKQlFXcENMRU5CUVhKQ0xFZEJRVFpFTEVsQlFVa3NTMEZCU2l4RFFVRlZMRzFDUVVGV0xFTkJRVGRFTEVOQlJDdENPMEZCUlhCRUxGRkJRVWtzWlVGQlpTeExRVUZtTEVOQlJtZEVPenRCUVVsd1JDeFJRVUZOTEd0Q1FVRnJRaXhWUVVGRExFVkJRVVFzUlVGQlN5eEZRVUZNTEVWQlFWTXNSVUZCVkN4RlFVRm5RanRCUVVOd1F5eFpRVUZKTEVsQlFVa3NRMEZCU2l4RFFVUm5RenRCUVVWd1F5eFpRVUZKTEc5Q1FVRktMRU5CUm05RE8wRkJSM0JETEZsQlFVa3NiMEpCUVVvc1EwRkliME03TzBGQlMzQkRMRmRCUVVjN1FVRkRReXgxUWtGQlZ5eExRVUZMTEVOQlFVTXNTMEZCU3l4RlFVRk1MRU5CUVVRc1IwRkJXU3hIUVVGYUxFTkJSR3BDTzBGQlJVTXNkVUpCUVZjc1YwRkJWeXhSUVVGWUxFVkJRWEZDTEVkQlFYSkNMRVZCUVRCQ0xFZEJRVEZDTEVsQlFXbERMRVZCUVdwRExFTkJSbG83UVVGSFF5eG5Ra0ZCU1N4WFFVRlhMRWRCUVZnc1JVRkJaMEk3UVVGRGFFSXNjVUpCUVVzc1VVRkJUQ3hEUVVSblFqdGhRVUZ3UWl4TlFVVlBPMEZCUTBnc2NVSkJRVXNzVVVGQlRDeERRVVJITzJGQlJsQTdVMEZJU2l4UlFWRlRMRXRCUVVzc1IwRkJUQ3hEUVVGVExGRkJRVlFzU1VGQmNVSXNjVUpCUVhKQ0xFbEJRVGhETEVWQlFVVXNRMEZCUml4SFFVRk5MREJDUVVGT0xFVkJZbTVDT3p0QlFXVndReXhsUVVGUExGRkJRVkFzUTBGbWIwTTdTMEZCYUVJc1EwRktORUk3TzBGQmMwSndSQ3hSUVVGTkxIVkNRVUYxUWl4VlFVRkRMRVZCUVVRc1JVRkJTeXhQUVVGTUxFVkJRV2xDTzBGQlF6RkRMRmxCUVVrc1NVRkJTU3hEUVVGS0xFTkJSSE5ETzBGQlJURkRMRmxCUVVrc1pVRkJaU3hEUVVGbUxFTkJSbk5ETzBGQlJ6RkRMRmxCUVVrc2IwSkJRVW9zUTBGSU1FTTdPMEZCU3pGRExHVkJRVThzU1VGQlNTeHBRa0ZCU2l4RlFVRjFRaXhGUVVGRkxFTkJRVVlzUlVGQlN6dEJRVU12UWl3eVFrRkJaU3hUUVVGVExFOUJRVlFzUlVGQmEwSXNSMEZCYkVJc1JVRkJkVUlzUjBGQmRrSXNRMEZCWml4RFFVUXJRanM3UVVGSEwwSXNaMEpCUVVrc2FVSkJRV2xDTEVkQlFXcENMRVZCUVhOQ08wRkJRM1JDTEhWQ1FVRlBMRTlCUVZBc1EwRkVjMEk3WVVGQk1VSTdPMEZCU1VFc2RVSkJRVmNzVjBGQlZ5eFBRVUZZTEVWQlFXOUNMRWRCUVhCQ0xFVkJRWGxDTEVkQlFYcENMRWxCUVdkRExFVkJRV2hETEVOQlVHOUNPMEZCVVM5Q0xIVkNRVUZYTEZkQlFWY3NXVUZCV0N4RFFWSnZRanRUUVVGdVF6czdRVUZYUVN4bFFVRlBMRTlCUVZBc1EwRm9RakJETzB0QlFXcENMRU5CZEVKMVFqczdRVUY1UTNCRUxGRkJRVTBzYlVKQlFXMUNMRmxCUVUwN1FVRkRNMElzWVVGQlN5eEpRVUZKTEVsQlFVa3NRMEZCU2l4RlFVRlBMRWxCUVVrc2JVSkJRVW9zUlVGQmVVSXNSVUZCUlN4RFFVRkdMRVZCUVVzN1FVRkRNVU1zZVVKQlFXRXNRMEZCWWl4SlFVRnJRaXhYUVVGWExFbEJRVWtzYTBKQlFVb3NSVUZCZDBJc1IwRkJia01zUlVGQmQwTXNSMEZCZUVNc1EwRkJiRUlzUTBGRU1FTTdVMEZCT1VNN1MwRkVjVUlzUTBGNlF6SkNPenRCUVN0RGNFUXNVVUZCVFN4WFFVRlhMRlZCUVVNc1JVRkJSQ3hGUVVGUk8wRkJRM0pDTEZsQlFVa3NaMEpCUVdkQ0xFZEJRV2hDTEVOQlJHbENPMEZCUlhKQ0xGbEJRVWtzWjBKQlFXZENMRU5CUVdoQ0xFTkJSbWxDTzBGQlIzSkNMRmxCUVVrc1lVRkJZU3h6UWtGQmMwSXNRMEZCZEVJc1EwRklTVHRCUVVseVFpeFpRVUZKTEU5QlFVOHNSMEZCVUN4RFFVcHBRanRCUVV0eVFpeFpRVUZKTEZsQlFWa3NSMEZCV2l4RFFVeHBRanRCUVUxeVFpeFpRVUZKTEdWQlFXVXNSMEZCWml4RFFVNXBRanM3UVVGUmNrSXNaVUZCVHl4cFFrRkJhVUlzVlVGQmFrSXNTVUZCSzBJc1lVRkJZU3hoUVVGaUxFdEJRU3RDTEVWQlFTOUNMRVZCUVcxRExFVkJRVVVzWVVGQlJpeEZRVUZwUWp0QlFVTjBSaXcyUWtGQmFVSXNhMEpCUVdwQ0xFTkJSSE5HTzFOQlFURkdPenRCUVVsQkxGVkJRVVVzWVVGQlJpeERRVnB4UWpzN1FVRmpja0lzWlVGQlR5eERRVUZETEV0QlFVc3NZVUZCWVN4aFFVRmlMRU5CUVV3c1EwRkJSQ3hKUVVGelF5eGhRVUZoTEdkQ1FVRmpMRU5CUVdRc1EwRkJZaXhIUVVGblF5eGhRVUZoTEdGQlFXSXNRMEZCYUVNc1EwRkJkRU1zUTBGa1l6dEJRV1Z5UWl4dlFrRkJXU3huUWtGQlowSXNUMEZCVHl4clFrRkJVQ3hEUVdaUU96dEJRV2xDY2tJc2RVSkJRV1VzVTBGQlV5eFRRVUZVTEVWQlFXOUNMRWRCUVhCQ0xFVkJRWGxDTEVkQlFYcENMRU5CUVdZN096dEJRV3BDY1VJc1dVRnZRbXBDTEdkQ1FVRm5RaXhuUWtGQmFFSXNSVUZCYTBNN1FVRkRiRU1zYlVKQlFVOHNjVUpCUVhGQ0xFVkJRWEpDTEVWQlFYbENMRk5CUVhwQ0xFTkJRVkE3TzBGQlJHdERMRk5CUVhSRExFMUJSMDhzU1VGQlNTeHBRa0ZCYVVJc1IwRkJha0lzUlVGQmMwSTdRVUZETjBJc2RVSkJRVThzVTBGQlVEczdRVUZFTmtJc1lVRkJNVUlzVFVGSFFUdEJRVU5JTERKQ1FVRlBMR2RDUVVGblFpeEZRVUZvUWl4RlFVRnZRaXhoUVVGd1FpeEZRVUZ0UXl4blFrRkJaMElzYTBKQlFXaENMRU5CUVRGRExFTkJSRWM3YVVKQlNFRTdTMEYyUWswc1EwRXZRMjFET3p0QlFUaEZjRVFzVVVGQlRTeGhRVUZoTEZsQlFVMDdRVUZEY2tJc2RVSkJRV1VzU1VGQlppeERRVVJ4UWp0QlFVVnlRaXhaUVVGSkxFOUJRVThzUjBGQlVDeEpRVUZqTEU5QlFVOHNSMEZCVUN4RlFVRlpPMEZCUXpGQ0xDdENRVVF3UWp0VFFVRTVRanRMUVVabExFTkJPVVZwUXpzN1FVRnhSbkJFTEZGQlFVMHNWMEZCVnl4VlFVRkRMRVZCUVVRc1JVRkJVVHRCUVVOeVFpeFpRVUZKTEhWQ1FVRktMRU5CUkhGQ096dEJRVWR5UWl4WlFVRkpMRU5CUVVNc1dVRkJSQ3hGUVVGbE8wRkJRMllzZVVKQlJHVTdVMEZCYmtJN096dEJRVWh4UWl4WlFWRnFRaXhSUVVGUkxFZEJRVklzU1VGQlpTeFJRVUZSTEVkQlFWSXNSVUZCWVR0QlFVTTFRaXd3UWtGQll5eEZRVUZrT3pzN1FVRkVORUlzVTBGQmFFTXNUVUZKVHl4SlFVRkpMRTlCUVU4c1EwRkJVQ3hGUVVGVk8wRkJRMnBDTERoQ1FVRmpMRU5CUVdRN096dEJRVVJwUWl4aFFVRmtMRTFCU1VFc1NVRkJTU3hQUVVGUExFTkJRVkFzUlVGQlZUdEJRVU5xUWl4clEwRkJZeXhEUVVGa0xFTkJSR2xDTzJsQ1FVRmtMRTFCUjBFN1FVRkRTQ3hyUTBGQll5eFhRVUZYTEZOQlFWTXNSVUZCVkN4RFFVRllMRVZCUVhsQ0xFZEJRWHBDTEVWQlFUaENMRWRCUVRsQ0xFTkJRV1FzUTBGRVJ6dHBRa0ZJUVRzN1FVRlBVQ3hsUVVGUExGZEJRVkFzUTBGMlFuRkNPMHRCUVZJc1EwRnlSbTFET3p0QlFTdEhjRVFzVjBGQlR5eFJRVUZRTEVOQkwwZHZSRHREUVVGNlF5SXNJbVpwYkdVaU9pSmpjbVZoZEdVdFltVjZhV1Z5TG1weklpd2ljMjkxY21ObFVtOXZkQ0k2SWk5VmMyVnljeTlOWVhSMEwxTnBkR1Z6TDNCdmNHMXZkR2x2YmlJc0luTnZkWEpqWlhORGIyNTBaVzUwSWpwYklpOHFYRzRnSUNBZ1FtVjZhV1Z5SUdaMWJtTjBhVzl1SUdkbGJtVnlZWFJ2Y2x4dUlDQWdJQ0FnSUNCY2JpQWdJQ0JIWWNPcmRHRnVJRkpsYm1GMVpHVmhkU2R6SUVKbGVtbGxja1ZoYzJsdVoxeHVJQ0FnSUdoMGRIQnpPaTh2WjJsMGFIVmlMbU52YlM5bmNtVXZZbVY2YVdWeUxXVmhjMmx1Wnk5aWJHOWlMMjFoYzNSbGNpOXBibVJsZUM1cWN5QWdYRzRnSUNBZ2FIUjBjSE02THk5bmFYUm9kV0l1WTI5dEwyZHlaUzlpWlhwcFpYSXRaV0Z6YVc1bkwySnNiMkl2YldGemRHVnlMMHhKUTBWT1UwVmNiaUFnSUNCWmIzVW5jbVVnWVNCb1pYSnZYRzRnSUNBZ1hHNGdJQ0FnVlhObFhHNGdJQ0FnWEc0Z0lDQWdJQ0FnSUhaaGNpQmxZWE5sVDNWMElEMGdibVYzSUVKbGVtbGxjaWd1TVRjc0xqWTNMQzQ0TXl3dU5qY3BMRnh1SUNBZ0lDQWdJQ0FnSUNBZ2VDQTlJR1ZoYzJWUGRYUW9NQzQxS1RzZ0x5OGdjbVYwZFhKdWN5QXdMall5Tnk0dUxseHVLaTljYmx4dUx5OGdRMjl1YzNSaGJuUnpYRzVqYjI1emRDQk9SVmRVVDA1ZlNWUkZVa0ZVU1U5T1V5QTlJRGc3WEc1amIyNXpkQ0JPUlZkVVQwNWZUVWxPWDFOTVQxQkZJRDBnTUM0d01ERTdYRzVqYjI1emRDQlRWVUpFU1ZaSlUwbFBUbDlRVWtWRFNWTkpUMDRnUFNBd0xqQXdNREF3TURFN1hHNWpiMjV6ZENCVFZVSkVTVlpKVTBsUFRsOU5RVmhmU1ZSRlVrRlVTVTlPVXlBOUlERXdPMXh1WTI5dWMzUWdTMTlUVUV4SlRrVmZWRUZDVEVWZlUwbGFSU0E5SURFeE8xeHVZMjl1YzNRZ1MxOVRRVTFRVEVWZlUxUkZVRjlUU1ZwRklEMGdNUzR3SUM4Z0tFdGZVMUJNU1U1RlgxUkJRa3hGWDFOSldrVWdMU0F4TGpBcE8xeHVZMjl1YzNRZ1JreFBRVlJmTXpKZlUxVlFVRTlTVkVWRUlEMGdLSFI1Y0dWdlppQkdiRzloZERNeVFYSnlZWGtnSVQwOUlDZDFibVJsWm1sdVpXUW5LVHRjYmx4dUx5OGdTR1ZzY0dWeUlHMWxkR2h2WkhOY2JtTnZibk4wSUdFZ1BTQW9ZVEVzSUdFeUtTQTlQaUF4TGpBZ0xTQXpMakFnS2lCaE1pQXJJRE11TUNBcUlHRXhPMXh1WTI5dWMzUWdZaUE5SUNoaE1Td2dZVElwSUQwK0lETXVNQ0FxSUdFeUlDMGdOaTR3SUNvZ1lURTdYRzVqYjI1emRDQmpJRDBnS0dFeEtTQTlQaUF6TGpBZ0tpQmhNVHRjYmx4dVkyOXVjM1FnWjJWMFUyeHZjR1VnUFNBb2RDd2dZVEVzSUdFeUtTQTlQaUF6TGpBZ0tpQmhLR0V4TENCaE1pa2dLaUIwSUNvZ2RDQXJJREl1TUNBcUlHSW9ZVEVzSUdFeUtTQXFJSFFnS3lCaktHRXhLVHRjYmx4dVkyOXVjM1FnWTJGc1kwSmxlbWxsY2lBOUlDaDBMQ0JoTVN3Z1lUSXBJRDArSUNnb1lTaGhNU3dnWVRJcElDb2dkQ0FySUdJb1lURXNJR0V5S1NrZ0tpQjBJQ3NnWXloaE1Ta3BJQ29nZER0Y2JseHVMeXBjYmlBZ0lDQkRjbVZoZEdVZ1lTQmpkV0pwWXlCaVpYcHBaWElnY21WemIyeDJaWEpjYmlvdlhHNWxlSEJ2Y25RZ1pHVm1ZWFZzZENCbWRXNWpkR2x2YmlCamRXSnBZMEpsZW1sbGNpaHRXREVzSUcxWk1Td2diVmd5TENCdFdUSXBJSHRjYmlBZ0lDQmpiMjV6ZENCellXMXdiR1ZXWVd4MVpYTWdQU0JHVEU5QlZGOHpNbDlUVlZCUVQxSlVSVVFnUHlCdVpYY2dSbXh2WVhRek1rRnljbUY1S0V0ZlUxQk1TVTVGWDFSQlFreEZYMU5KV2tVcElEb2dibVYzSUVGeWNtRjVLRXRmVTFCTVNVNUZYMVJCUWt4RlgxTkpXa1VwTzF4dUlDQWdJR3hsZENCZmNISmxZMjl0Y0hWMFpXUWdQU0JtWVd4elpUdGNibHh1SUNBZ0lHTnZibk4wSUdKcGJtRnllVk4xWW1ScGRtbGtaU0E5SUNoaFdDd2dZVUVzSUdGQ0tTQTlQaUI3WEc0Z0lDQWdJQ0FnSUd4bGRDQnBJRDBnTUR0Y2JpQWdJQ0FnSUNBZ2JHVjBJR04xY25KbGJuUllPMXh1SUNBZ0lDQWdJQ0JzWlhRZ1kzVnljbVZ1ZEZRN1hHNWNiaUFnSUNBZ0lDQWdaRzhnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdZM1Z5Y21WdWRGUWdQU0JoUVNBcklDaGhRaUF0SUdGQktTQXZJREl1TUR0Y2JpQWdJQ0FnSUNBZ0lDQWdJR04xY25KbGJuUllJRDBnWTJGc1kwSmxlbWxsY2loamRYSnlaVzUwVkN3Z2JWZ3hMQ0J0V0RJcElDMGdZVmc3WEc0Z0lDQWdJQ0FnSUNBZ0lDQnBaaUFvWTNWeWNtVnVkRmdnUGlBd0xqQXBJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0JoUWlBOUlHTjFjbkpsYm5SVU8xeHVJQ0FnSUNBZ0lDQWdJQ0FnZlNCbGJITmxJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0JoUVNBOUlHTjFjbkpsYm5SVU8xeHVJQ0FnSUNBZ0lDQWdJQ0FnZlZ4dUlDQWdJQ0FnSUNCOUlIZG9hV3hsSUNoTllYUm9MbUZpY3loamRYSnlaVzUwV0NrZ1BpQlRWVUpFU1ZaSlUwbFBUbDlRVWtWRFNWTkpUMDRnSmlZZ0t5dHBJRHdnVTFWQ1JFbFdTVk5KVDA1ZlRVRllYMGxVUlZKQlZFbFBUbE1wTzF4dVhHNGdJQ0FnSUNBZ0lISmxkSFZ5YmlCamRYSnlaVzUwVkR0Y2JpQWdJQ0I5TzF4dVhHNGdJQ0FnWTI5dWMzUWdibVYzZEc5dVVtRndhSE52YmtsMFpYSmhkR1VnUFNBb1lWZ3NJR0ZIZFdWemMxUXBJRDArSUh0Y2JpQWdJQ0FnSUNBZ2JHVjBJR2tnUFNBd08xeHVJQ0FnSUNBZ0lDQnNaWFFnWTNWeWNtVnVkRk5zYjNCbElEMGdNRHRjYmlBZ0lDQWdJQ0FnYkdWMElHTjFjbkpsYm5SWU8xeHVYRzRnSUNBZ0lDQWdJR1p2Y2lBb095QnBJRHdnVGtWWFZFOU9YMGxVUlZKQlZFbFBUbE03SUNzcmFTa2dlMXh1SUNBZ0lDQWdJQ0FnSUNBZ1kzVnljbVZ1ZEZOc2IzQmxJRDBnWjJWMFUyeHZjR1VvWVVkMVpYTnpWQ3dnYlZneExDQnRXRElwTzF4dUlDQWdJQ0FnSUNBZ0lDQWdYRzRnSUNBZ0lDQWdJQ0FnSUNCcFppQW9ZM1Z5Y21WdWRGTnNiM0JsSUQwOVBTQXdMakFwSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCeVpYUjFjbTRnWVVkMVpYTnpWRHRjYmlBZ0lDQWdJQ0FnSUNBZ0lIMWNiaUFnSUNBZ0lDQWdJQ0FnSUZ4dUlDQWdJQ0FnSUNBZ0lDQWdZM1Z5Y21WdWRGZ2dQU0JqWVd4alFtVjZhV1Z5S0dGSGRXVnpjMVFzSUcxWU1Td2diVmd5S1NBdElHRllPMXh1SUNBZ0lDQWdJQ0FnSUNBZ1lVZDFaWE56VkNBdFBTQmpkWEp5Wlc1MFdDQXZJR04xY25KbGJuUlRiRzl3WlR0Y2JpQWdJQ0FnSUNBZ2ZWeHVJQ0FnSUNBZ0lDQmNiaUFnSUNBZ0lDQWdjbVYwZFhKdUlHRkhkV1Z6YzFRN1hHNGdJQ0FnZlR0Y2JseHVJQ0FnSUdOdmJuTjBJR05oYkdOVFlXMXdiR1ZXWVd4MVpYTWdQU0FvS1NBOVBpQjdYRzRnSUNBZ0lDQWdJR1p2Y2lBb2JHVjBJR2tnUFNBd095QnBJRHdnUzE5VFVFeEpUa1ZmVkVGQ1RFVmZVMGxhUlRzZ0t5dHBLU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQnpZVzF3YkdWV1lXeDFaWE5iYVYwZ1BTQmpZV3hqUW1WNmFXVnlLR2tnS2lCTFgxTkJUVkJNUlY5VFZFVlFYMU5KV2tVc0lHMVlNU3dnYlZneUtUdGNiaUFnSUNBZ0lDQWdmVnh1SUNBZ0lIMDdYRzVjYmlBZ0lDQmpiMjV6ZENCblpYUlVSbTl5V0NBOUlDaGhXQ2tnUFQ0Z2UxeHVJQ0FnSUNBZ0lDQnNaWFFnYVc1MFpYSjJZV3hUZEdGeWRDQTlJREF1TUR0Y2JpQWdJQ0FnSUNBZ2JHVjBJR04xY25KbGJuUlRZVzF3YkdVZ1BTQXhPMXh1SUNBZ0lDQWdJQ0JzWlhRZ2JHRnpkRk5oYlhCc1pTQTlJRXRmVTFCTVNVNUZYMVJCUWt4RlgxTkpXa1VnTFNBeE8xeHVJQ0FnSUNBZ0lDQnNaWFFnWkdsemRDQTlJREF1TUR0Y2JpQWdJQ0FnSUNBZ2JHVjBJR2QxWlhOelJtOXlWQ0E5SURBdU1EdGNiaUFnSUNBZ0lDQWdiR1YwSUdsdWFYUnBZV3hUYkc5d1pTQTlJREF1TUR0Y2JpQWdJQ0FnSUNBZ0lDQWdJRnh1SUNBZ0lDQWdJQ0JtYjNJZ0tEc2dZM1Z5Y21WdWRGTmhiWEJzWlNBaFBTQnNZWE4wVTJGdGNHeGxJQ1ltSUhOaGJYQnNaVlpoYkhWbGMxdGpkWEp5Wlc1MFUyRnRjR3hsWFNBOFBTQmhXRHNnS3l0amRYSnlaVzUwVTJGdGNHeGxLU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQnBiblJsY25aaGJGTjBZWEowSUNzOUlFdGZVMEZOVUV4RlgxTlVSVkJmVTBsYVJUdGNiaUFnSUNBZ0lDQWdmVnh1SUNBZ0lDQWdJQ0JjYmlBZ0lDQWdJQ0FnTFMxamRYSnlaVzUwVTJGdGNHeGxPMXh1SUNBZ0lDQWdJQ0JjYmlBZ0lDQWdJQ0FnWkdsemRDQTlJQ2hoV0NBdElITmhiWEJzWlZaaGJIVmxjMXRqZFhKeVpXNTBVMkZ0Y0d4bFhTa2dMeUFvYzJGdGNHeGxWbUZzZFdWelcyTjFjbkpsYm5SVFlXMXdiR1VyTVYwZ0xTQnpZVzF3YkdWV1lXeDFaWE5iWTNWeWNtVnVkRk5oYlhCc1pWMHBPMXh1SUNBZ0lDQWdJQ0JuZFdWemMwWnZjbFFnUFNCcGJuUmxjblpoYkZOMFlYSjBJQ3NnWkdsemRDQXFJRXRmVTBGTlVFeEZYMU5VUlZCZlUwbGFSVHRjYmlBZ0lDQWdJQ0FnWEc0Z0lDQWdJQ0FnSUdsdWFYUnBZV3hUYkc5d1pTQTlJR2RsZEZOc2IzQmxLR2QxWlhOelJtOXlWQ3dnYlZneExDQnRXRElwTzF4dUlDQWdJQ0FnSUNCY2JpQWdJQ0FnSUNBZ0x5OGdTV1lnYzJ4dmNHVWdhWE1nWjNKbFlYUmxjaUIwYUdGdUlHMXBibHh1SUNBZ0lDQWdJQ0JwWmlBb2FXNXBkR2xoYkZOc2IzQmxJRDQ5SUU1RlYxUlBUbDlOU1U1ZlUweFBVRVVwSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJSEpsZEhWeWJpQnVaWGQwYjI1U1lYQm9jMjl1U1hSbGNtRjBaU2hoV0N3Z1ozVmxjM05HYjNKVUtUdGNiaUFnSUNBZ0lDQWdMeThnVTJ4dmNHVWdhWE1nWlhGMVlXd2dkRzhnYldsdVhHNGdJQ0FnSUNBZ0lIMGdaV3h6WlNCcFppQW9hVzVwZEdsaGJGTnNiM0JsSUQwOVBTQXdMakFwSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJSEpsZEhWeWJpQm5kV1Z6YzBadmNsUTdYRzRnSUNBZ0lDQWdJQzh2SUZOc2IzQmxJR2x6SUd4bGMzTWdkR2hoYmlCdGFXNWNiaUFnSUNBZ0lDQWdmU0JsYkhObElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUhKbGRIVnliaUJpYVc1aGNubFRkV0prYVhacFpHVW9ZVmdzSUdsdWRHVnlkbUZzVTNSaGNuUXNJR2x1ZEdWeWRtRnNVM1JoY25RZ0t5QkxYMU5CVFZCTVJWOVRWRVZRWDFOSldrVXBPMXh1SUNBZ0lDQWdJQ0I5WEc0Z0lDQWdmVHRjYmx4dUlDQWdJR052Ym5OMElIQnlaV052YlhCMWRHVWdQU0FvS1NBOVBpQjdYRzRnSUNBZ0lDQWdJRjl3Y21WamIyMXdkWFJsWkNBOUlIUnlkV1U3WEc0Z0lDQWdJQ0FnSUdsbUlDaHRXREVnSVQwZ2JWa3hJSHg4SUcxWU1pQWhQU0J0V1RJcElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUdOaGJHTlRZVzF3YkdWV1lXeDFaWE1vS1R0Y2JpQWdJQ0FnSUNBZ2ZWeHVJQ0FnSUgwN1hHNWNiaUFnSUNCamIyNXpkQ0J5WlhOdmJIWmxjaUE5SUNoaFdDa2dQVDRnZTF4dUlDQWdJQ0FnSUNCc1pYUWdjbVYwZFhKdVZtRnNkV1U3WEc1Y2JpQWdJQ0FnSUNBZ2FXWWdLQ0ZmY0hKbFkyOXRjSFYwWldRcElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUhCeVpXTnZiWEIxZEdVb0tUdGNiaUFnSUNBZ0lDQWdmVnh1SUNBZ0lDQWdJQ0JjYmlBZ0lDQWdJQ0FnTHk4Z1NXWWdiR2x1WldGeUlHZHlZV1JwWlc1MExDQnlaWFIxY200Z1dDQmhjeUJVWEc0Z0lDQWdJQ0FnSUdsbUlDaHRXREVnUFQwOUlHMVpNU0FtSmlCdFdESWdQVDA5SUcxWk1pa2dlMXh1SUNBZ0lDQWdJQ0FnSUNBZ2NtVjBkWEp1Vm1Gc2RXVWdQU0JoV0R0Y2JpQWdJQ0FnSUNBZ0lDQWdJRnh1SUNBZ0lDQWdJQ0F2THlCSlppQmhkQ0J6ZEdGeWRDd2djbVYwZFhKdUlEQmNiaUFnSUNBZ0lDQWdmU0JsYkhObElHbG1JQ2hoV0NBOVBUMGdNQ2tnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdjbVYwZFhKdVZtRnNkV1VnUFNBd08xeHVJQ0FnSUNBZ0lDQWdJQ0FnWEc0Z0lDQWdJQ0FnSUM4dklFbG1JR0YwSUdWdVpDd2djbVYwZFhKdUlERmNiaUFnSUNBZ0lDQWdmU0JsYkhObElHbG1JQ2hoV0NBOVBUMGdNU2tnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdjbVYwZFhKdVZtRnNkV1VnUFNBeE8xeHVYRzRnSUNBZ0lDQWdJSDBnWld4elpTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNCeVpYUjFjbTVXWVd4MVpTQTlJR05oYkdOQ1pYcHBaWElvWjJWMFZFWnZjbGdvWVZncExDQnRXVEVzSUcxWk1pazdYRzRnSUNBZ0lDQWdJSDFjYmlBZ0lDQWdJQ0FnWEc0Z0lDQWdJQ0FnSUhKbGRIVnliaUJ5WlhSMWNtNVdZV3gxWlR0Y2JpQWdJQ0I5TzF4dVhHNGdJQ0FnY21WMGRYSnVJSEpsYzI5c2RtVnlPMXh1ZlZ4dUlsMTlcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2FjdGlvbnMvZWFzaW5nL2NyZWF0ZS1iZXppZXIuanNcbiAqKiBtb2R1bGUgaWQgPSA0NlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX2Nzc0FkYXB0ZXIgPSByZXF1aXJlKCcuLi9hZGFwdGVyL2Nzcy1hZGFwdGVyJyk7XG5cbnZhciBfY3NzQWRhcHRlcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jc3NBZGFwdGVyKTtcblxudmFyIF9zdmdBZGFwdGVyID0gcmVxdWlyZSgnLi4vYWRhcHRlci9zdmctYWRhcHRlcicpO1xuXG52YXIgX3N2Z0FkYXB0ZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfc3ZnQWRhcHRlcik7XG5cbnZhciBfc3ZnUGF0aEFkYXB0ZXIgPSByZXF1aXJlKCcuLi9hZGFwdGVyL3N2Zy1wYXRoLWFkYXB0ZXInKTtcblxudmFyIF9zdmdQYXRoQWRhcHRlcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9zdmdQYXRoQWRhcHRlcik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbnZhciBTQVZFX1BST1AgPSAnX19wbV9hZGFwdGVyJztcblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gKGVsZW1lbnQpIHtcbiAgICAvLyBSZXR1cm4gYm91bmQgYWRhcHRlciBpZiBwcmVzZW50XG4gICAgaWYgKGVsZW1lbnRbU0FWRV9QUk9QXSkge1xuICAgICAgICByZXR1cm4gZWxlbWVudFtTQVZFX1BST1BdO1xuXG4gICAgICAgIC8vIE9yIGRldGVjdCBhbmQgYmluZCBhZGFwdGVyXG4gICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHZhciBhZGFwdGVyID0gdW5kZWZpbmVkO1xuXG4gICAgICAgICAgICAvLyBJZiBIVE1MRWxlbWVudCBsb2FkIENTU1xuICAgICAgICAgICAgaWYgKGVsZW1lbnQgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCB8fCBlbGVtZW50LnRhZ05hbWUgPT09ICdzdmcnKSB7XG4gICAgICAgICAgICAgICAgYWRhcHRlciA9IF9jc3NBZGFwdGVyMi5kZWZhdWx0O1xuXG4gICAgICAgICAgICAgICAgLy8gT3IgU1ZHXG4gICAgICAgICAgICB9IGVsc2UgaWYgKGVsZW1lbnQgaW5zdGFuY2VvZiBTVkdFbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChlbGVtZW50LnRhZ05hbWUgPT09ICdwYXRoJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgYWRhcHRlciA9IF9zdmdQYXRoQWRhcHRlcjIuZGVmYXVsdDtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFkYXB0ZXIgPSBfc3ZnQWRhcHRlcjIuZGVmYXVsdDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gQmluZCBhZGFwdGVyIHRvIGVsZW1lbnRcbiAgICAgICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlbGVtZW50LCBTQVZFX1BST1AsIHtcbiAgICAgICAgICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgICAgICAgICAgICB2YWx1ZTogYWRhcHRlclxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIHJldHVybiBhZGFwdGVyKGVsZW1lbnQpO1xuICAgICAgICB9XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluTnlZeTlwYm1NdlltbHVaQzFoWkdGd2RHVnlMbXB6SWwwc0ltNWhiV1Z6SWpwYlhTd2liV0Z3Y0dsdVozTWlPaUk3T3pzN096czdPenM3T3pzN096czdPenRCUVVsQkxFbEJRVTBzV1VGQldTeGpRVUZhT3p0clFrRkZVeXhWUVVGRExFOUJRVVFzUlVGQllUczdRVUZGZUVJc1VVRkJTU3hSUVVGUkxGTkJRVklzUTBGQlNpeEZRVUYzUWp0QlFVTndRaXhsUVVGUExGRkJRVkVzVTBGQlVpeERRVUZRT3pzN1FVRkViMElzUzBGQmVFSXNUVUZKVHp0QlFVTklMR2RDUVVGSkxHMUNRVUZLT3pzN1FVRkVSeXhuUWtGSlF5eHRRa0ZCYlVJc1YwRkJia0lzU1VGQmEwTXNVVUZCVVN4UFFVRlNMRXRCUVc5Q0xFdEJRWEJDTEVWQlFUSkNPMEZCUXpkRU96czdRVUZFTmtRc1lVRkJha1VzVFVGSlR5eEpRVUZKTEcxQ1FVRnRRaXhWUVVGdVFpeEZRVUVyUWp0QlFVTjBReXgzUWtGQlNTeFJRVUZSTEU5QlFWSXNTMEZCYjBJc1RVRkJjRUlzUlVGQk5FSTdRVUZETlVJc01rUkJSRFJDTzNGQ1FVRm9ReXhOUVVWUE8wRkJRMGdzZFVSQlJFYzdjVUpCUmxBN2FVSkJSRWM3T3p0QlFWSktMR3RDUVdsQ1NDeERRVUZQTEdOQlFWQXNRMEZCYzBJc1QwRkJkRUlzUlVGQkswSXNVMEZCTDBJc1JVRkJNRU03UVVGRGRFTXNORUpCUVZrc1MwRkJXanRCUVVOQkxIVkNRVUZQTEU5QlFWQTdZVUZHU2l4RlFXcENSenM3UVVGelFrZ3NiVUpCUVU4c1VVRkJVU3hQUVVGU0xFTkJRVkFzUTBGMFFrYzdVMEZLVUR0RFFVWlhJaXdpWm1sc1pTSTZJbUpwYm1RdFlXUmhjSFJsY2k1cWN5SXNJbk52ZFhKalpWSnZiM1FpT2lJdlZYTmxjbk12VFdGMGRDOVRhWFJsY3k5d2IzQnRiM1JwYjI0aUxDSnpiM1Z5WTJWelEyOXVkR1Z1ZENJNld5SnBiWEJ2Y25RZ1kzTnpRV1JoY0hSbGNpQm1jbTl0SUNjdUxpOWhaR0Z3ZEdWeUwyTnpjeTFoWkdGd2RHVnlKenRjYm1sdGNHOXlkQ0J6ZG1kQlpHRndkR1Z5SUdaeWIyMGdKeTR1TDJGa1lYQjBaWEl2YzNabkxXRmtZWEIwWlhJbk8xeHVhVzF3YjNKMElITjJaMUJoZEdoQlpHRndkR1Z5SUdaeWIyMGdKeTR1TDJGa1lYQjBaWEl2YzNabkxYQmhkR2d0WVdSaGNIUmxjaWM3WEc1Y2JtTnZibk4wSUZOQlZrVmZVRkpQVUNBOUlDZGZYM0J0WDJGa1lYQjBaWEluTzF4dVhHNWxlSEJ2Y25RZ1pHVm1ZWFZzZENBb1pXeGxiV1Z1ZENrZ1BUNGdlMXh1SUNBZ0lDOHZJRkpsZEhWeWJpQmliM1Z1WkNCaFpHRndkR1Z5SUdsbUlIQnlaWE5sYm5SY2JpQWdJQ0JwWmlBb1pXeGxiV1Z1ZEZ0VFFWWkZYMUJTVDFCZEtTQjdYRzRnSUNBZ0lDQWdJSEpsZEhWeWJpQmxiR1Z0Wlc1MFcxTkJWa1ZmVUZKUFVGMDdYRzVjYmlBZ0lDQXZMeUJQY2lCa1pYUmxZM1FnWVc1a0lHSnBibVFnWVdSaGNIUmxjbHh1SUNBZ0lIMGdaV3h6WlNCN1hHNGdJQ0FnSUNBZ0lHeGxkQ0JoWkdGd2RHVnlPMXh1WEc0Z0lDQWdJQ0FnSUM4dklFbG1JRWhVVFV4RmJHVnRaVzUwSUd4dllXUWdRMU5UWEc0Z0lDQWdJQ0FnSUdsbUlDaGxiR1Z0Wlc1MElHbHVjM1JoYm1ObGIyWWdTRlJOVEVWc1pXMWxiblFnZkh3Z1pXeGxiV1Z1ZEM1MFlXZE9ZVzFsSUQwOVBTQW5jM1puSnlrZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnWVdSaGNIUmxjaUE5SUdOemMwRmtZWEIwWlhJN1hHNWNiaUFnSUNBZ0lDQWdMeThnVDNJZ1UxWkhYRzRnSUNBZ0lDQWdJSDBnWld4elpTQnBaaUFvWld4bGJXVnVkQ0JwYm5OMFlXNWpaVzltSUZOV1IwVnNaVzFsYm5RcElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUdsbUlDaGxiR1Z0Wlc1MExuUmhaMDVoYldVZ1BUMDlJQ2R3WVhSb0p5a2dlMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJR0ZrWVhCMFpYSWdQU0J6ZG1kUVlYUm9RV1JoY0hSbGNqdGNiaUFnSUNBZ0lDQWdJQ0FnSUgwZ1pXeHpaU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnWVdSaGNIUmxjaUE5SUhOMlowRmtZWEIwWlhJN1hHNGdJQ0FnSUNBZ0lDQWdJQ0I5WEc0Z0lDQWdJQ0FnSUgxY2JseHVJQ0FnSUNBZ0lDQXZMeUJDYVc1a0lHRmtZWEIwWlhJZ2RHOGdaV3hsYldWdWRGeHVJQ0FnSUNBZ0lDQlBZbXBsWTNRdVpHVm1hVzVsVUhKdmNHVnlkSGtvWld4bGJXVnVkQ3dnVTBGV1JWOVFVazlRTENCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0JsYm5WdFpYSmhZbXhsT2lCbVlXeHpaU3hjYmlBZ0lDQWdJQ0FnSUNBZ0lIWmhiSFZsT2lCaFpHRndkR1Z5WEc0Z0lDQWdJQ0FnSUgwcE8xeHVYRzRnSUNBZ0lDQWdJSEpsZEhWeWJpQmhaR0Z3ZEdWeUtHVnNaVzFsYm5RcE8xeHVJQ0FnSUgxY2JuMDdYRzRpWFgwPVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvaW5jL2JpbmQtYWRhcHRlci5qc1xuICoqIG1vZHVsZSBpZCA9IDQ3XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfZGljdGlvbmFyeSA9IHJlcXVpcmUoJy4uLy4uL3ZhbHVlLXR5cGVzL3NldHRpbmdzL2RpY3Rpb25hcnknKTtcblxudmFyIHRyYW5zZm9ybVByb3BzID0ge307XG5cbnZhciBTQ0FMRSA9ICdzY2FsZSc7XG52YXIgUk9UQVRFID0gJ3JvdGF0ZSc7XG52YXIgVFJBTlNGT1JNX1BFUlNQRUNUSVZFID0gJ3RyYW5zZm9ybVBlcnNwZWN0aXZlJztcbnZhciBURVJNUyA9IFsndHJhbnNsYXRlJywgU0NBTEUsIFJPVEFURSwgJ3NrZXcnLCBUUkFOU0ZPUk1fUEVSU1BFQ1RJVkVdO1xuXG50cmFuc2Zvcm1Qcm9wc1tST1RBVEVdID0gdHJhbnNmb3JtUHJvcHNbU0NBTEVdID0gdHJhbnNmb3JtUHJvcHNbVFJBTlNGT1JNX1BFUlNQRUNUSVZFXSA9IHRydWU7XG5cblRFUk1TLmZvckVhY2goZnVuY3Rpb24gKHRlcm0pIHtcbiAgcmV0dXJuIF9kaWN0aW9uYXJ5LmF4ZXMuZm9yRWFjaChmdW5jdGlvbiAoYXhpcykge1xuICAgIHJldHVybiB0cmFuc2Zvcm1Qcm9wc1t0ZXJtICsgYXhpc10gPSB0cnVlO1xuICB9KTtcbn0pO1xuXG5leHBvcnRzLmRlZmF1bHQgPSB0cmFuc2Zvcm1Qcm9wcztcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbk55WXk5aFpHRndkR1Z5TDJOemN5OTBjbUZ1YzJadmNtMHRjSEp2Y0hNdWFuTWlYU3dpYm1GdFpYTWlPbHRkTENKdFlYQndhVzVuY3lJNklqczdPenM3TzBGQlJVRXNTVUZCU1N4cFFrRkJhVUlzUlVGQmFrSTdPMEZCUlVvc1NVRkJUU3hSUVVGUkxFOUJRVkk3UVVGRFRpeEpRVUZOTEZOQlFWTXNVVUZCVkR0QlFVTk9MRWxCUVUwc2QwSkJRWGRDTEhOQ1FVRjRRanRCUVVOT0xFbEJRVTBzVVVGQlVTeERRVUZETEZkQlFVUXNSVUZCWXl4TFFVRmtMRVZCUVhGQ0xFMUJRWEpDTEVWQlFUWkNMRTFCUVRkQ0xFVkJRWEZETEhGQ1FVRnlReXhEUVVGU096dEJRVVZPTEdWQlFXVXNUVUZCWml4SlFVRjVRaXhsUVVGbExFdEJRV1lzU1VGQmQwSXNaVUZCWlN4eFFrRkJaaXhKUVVGM1F5eEpRVUY0UXpzN1FVRkZha1FzVFVGQlRTeFBRVUZPTEVOQlFXTXNWVUZCUXl4SlFVRkVPMU5CUVZVc2FVSkJRVXNzVDBGQlRDeERRVUZoTEZWQlFVTXNTVUZCUkR0WFFVRlZMR1ZCUVdVc1QwRkJUeXhKUVVGUUxFTkJRV1lzUjBGQk9FSXNTVUZCT1VJN1IwRkJWanREUVVGMlFpeERRVUZrT3p0clFrRkZaU0lzSW1acGJHVWlPaUowY21GdWMyWnZjbTB0Y0hKdmNITXVhbk1pTENKemIzVnlZMlZTYjI5MElqb2lMMVZ6WlhKekwwMWhkSFF2VTJsMFpYTXZjRzl3Ylc5MGFXOXVJaXdpYzI5MWNtTmxjME52Ym5SbGJuUWlPbHNpYVcxd2IzSjBJSHNnWVhobGN5QjlJR1p5YjIwZ0p5NHVMeTR1TDNaaGJIVmxMWFI1Y0dWekwzTmxkSFJwYm1kekwyUnBZM1JwYjI1aGNua25PMXh1WEc1c1pYUWdkSEpoYm5ObWIzSnRVSEp2Y0hNZ1BTQjdmVHRjYmx4dVkyOXVjM1FnVTBOQlRFVWdQU0FuYzJOaGJHVW5PMXh1WTI5dWMzUWdVazlVUVZSRklEMGdKM0p2ZEdGMFpTYzdYRzVqYjI1emRDQlVVa0ZPVTBaUFVrMWZVRVZTVTFCRlExUkpWa1VnUFNBbmRISmhibk5tYjNKdFVHVnljM0JsWTNScGRtVW5PMXh1WTI5dWMzUWdWRVZTVFZNZ1BTQmJKM1J5WVc1emJHRjBaU2NzSUZORFFVeEZMQ0JTVDFSQlZFVXNJQ2R6YTJWM0p5d2dWRkpCVGxOR1QxSk5YMUJGVWxOUVJVTlVTVlpGWFR0Y2JseHVkSEpoYm5ObWIzSnRVSEp2Y0hOYlVrOVVRVlJGWFNBOUlIUnlZVzV6Wm05eWJWQnliM0J6VzFORFFVeEZYU0E5SUhSeVlXNXpabTl5YlZCeWIzQnpXMVJTUVU1VFJrOVNUVjlRUlZKVFVFVkRWRWxXUlYwZ1BTQjBjblZsTzF4dVhHNVVSVkpOVXk1bWIzSkZZV05vS0NoMFpYSnRLU0E5UGlCaGVHVnpMbVp2Y2tWaFkyZ29LR0Y0YVhNcElEMCtJSFJ5WVc1elptOXliVkJ5YjNCelczUmxjbTBnS3lCaGVHbHpYU0E5SUhSeWRXVXBLVHRjYmx4dVpYaHdiM0owSUdSbFptRjFiSFFnZEhKaGJuTm1iM0p0VUhKdmNITTdJbDE5XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9hZGFwdGVyL2Nzcy90cmFuc2Zvcm0tcHJvcHMuanNcbiAqKiBtb2R1bGUgaWQgPSA0OFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuLypcbiAgICBEZXRlY3QgYW5kIGxvYWQgYW4gYXBwcm9wcmlhdGUgY2xvY2sgc2V0dGluZyBmb3IgdGhlIGVudmlyb25tZW50XG4qL1xuXG52YXIgaGFzUkFGID0gdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSA/IHRydWUgOiBmYWxzZTtcblxudmFyIHRpY2sgPSB1bmRlZmluZWQ7XG5cbmlmIChoYXNSQUYpIHtcbiAgICB0aWNrID0gd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZTtcbn0gZWxzZSB7XG4gICAgKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgLypcbiAgICAgICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSBwb2x5ZmlsbFxuICAgICAgICAgICAgXG4gICAgICAgICAgICBGb3IgSUU4LzkgRmxpbnN0b25lcyBhbmQgbm9uLWJyb3dzZXIgZW52aXJvbm1lbnRzXG4gICAgICAgICAgICAgVGFrZW4gZnJvbSBQYXVsIElyaXNoLiBXZSd2ZSBzdHJpcHBlZCBvdXQgY2FuY2VsQW5pbWF0aW9uRnJhbWUgY2hlY2tzIGJlY2F1c2Ugd2UgZG9uJ3QgZm94IHdpdGggdGhhdFxuICAgICAgICAgICAgXG4gICAgICAgICAgICBodHRwOi8vcGF1bGlyaXNoLmNvbS8yMDExL3JlcXVlc3RhbmltYXRpb25mcmFtZS1mb3Itc21hcnQtYW5pbWF0aW5nL1xuICAgICAgICAgICAgaHR0cDovL215Lm9wZXJhLmNvbS9lbW9sbGVyL2Jsb2cvMjAxMS8xMi8yMC9yZXF1ZXN0YW5pbWF0aW9uZnJhbWUtZm9yLXNtYXJ0LWVyLWFuaW1hdGluZ1xuICAgICAgICAgICAgIFxuICAgICAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lIHBvbHlmaWxsIGJ5IEVyaWsgTcO2bGxlci4gZml4ZXMgZnJvbSBQYXVsIElyaXNoIGFuZCBUaW5vIFppamRlbFxuICAgICAgICAgICAgIFxuICAgICAgICAgICAgTUlUIGxpY2Vuc2VcbiAgICAgICAgKi9cbiAgICAgICAgdmFyIGxhc3RUaW1lID0gMDtcblxuICAgICAgICB0aWNrID0gZnVuY3Rpb24gKGNhbGxiYWNrKSB7XG4gICAgICAgICAgICB2YXIgY3VycmVudFRpbWUgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcbiAgICAgICAgICAgIHZhciB0aW1lVG9DYWxsID0gTWF0aC5tYXgoMCwgMTYgLSAoY3VycmVudFRpbWUgLSBsYXN0VGltZSkpO1xuXG4gICAgICAgICAgICBsYXN0VGltZSA9IGN1cnJlbnRUaW1lICsgdGltZVRvQ2FsbDtcblxuICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGNhbGxiYWNrKGxhc3RUaW1lKTtcbiAgICAgICAgICAgIH0sIHRpbWVUb0NhbGwpO1xuICAgICAgICB9O1xuICAgIH0pKCk7XG59XG5cbmV4cG9ydHMuZGVmYXVsdCA9IHRpY2s7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5OeVl5OXdjbTlqWlhOekwzUnBZMnN1YW5NaVhTd2libUZ0WlhNaU9sdGRMQ0p0WVhCd2FXNW5jeUk2SWpzN096czdPenRCUVVsQkxFbEJRVTBzVTBGQlV5eFBRVUZSTEUxQlFWQXNTMEZCYTBJc1YwRkJiRUlzU1VGQmFVTXNUMEZCVHl4eFFrRkJVQ3hIUVVGblF5eEpRVUZzUlN4SFFVRjVSU3hMUVVGNlJUczdRVUZGWml4SlFVRkpMR2RDUVVGS096dEJRVVZCTEVsQlFVa3NUVUZCU2l4RlFVRlpPMEZCUTFJc1YwRkJUeXhQUVVGUExIRkNRVUZRTEVOQlJFTTdRMEZCV2l4TlFVZFBPenM3T3pzN096czdPenM3T3pzN1FVRmxTQ3haUVVGSkxGZEJRVmNzUTBGQldEczdRVUZGU2l4bFFVRlBMRlZCUVVNc1VVRkJSQ3hGUVVGak8wRkJRMnBDTEdkQ1FVRk5MR05CUVdNc1NVRkJTU3hKUVVGS0xFZEJRVmNzVDBGQldDeEZRVUZrTEVOQlJGYzdRVUZGYWtJc1owSkJRVTBzWVVGQllTeExRVUZMTEVkQlFVd3NRMEZCVXl4RFFVRlVMRVZCUVZrc1RVRkJUU3hqUVVGakxGRkJRV1FzUTBGQlRpeERRVUY2UWl4RFFVWlhPenRCUVVscVFpeDFRa0ZCVnl4alFVRmpMRlZCUVdRc1EwRktUVHM3UVVGTmFrSXNkVUpCUVZjN2RVSkJRVTBzVTBGQlV5eFJRVUZVTzJGQlFVNHNSVUZCTUVJc1ZVRkJja01zUlVGT2FVSTdVMEZCWkR0VFFXcENTanREUVVoUU96dHJRa0U0UW1VaUxDSm1hV3hsSWpvaWRHbGpheTVxY3lJc0luTnZkWEpqWlZKdmIzUWlPaUl2VlhObGNuTXZUV0YwZEM5VGFYUmxjeTl3YjNCdGIzUnBiMjRpTENKemIzVnlZMlZ6UTI5dWRHVnVkQ0k2V3lJdktseHVJQ0FnSUVSbGRHVmpkQ0JoYm1RZ2JHOWhaQ0JoYmlCaGNIQnliM0J5YVdGMFpTQmpiRzlqYXlCelpYUjBhVzVuSUdadmNpQjBhR1VnWlc1MmFYSnZibTFsYm5SY2Jpb3ZYRzVjYm1OdmJuTjBJR2hoYzFKQlJpQTlJQ2gwZVhCbGIyWWdkMmx1Wkc5M0lDRTlQU0FuZFc1a1pXWnBibVZrSnlBbUppQjNhVzVrYjNjdWNtVnhkV1Z6ZEVGdWFXMWhkR2x2YmtaeVlXMWxLU0EvSUhSeWRXVWdPaUJtWVd4elpUdGNibHh1YkdWMElIUnBZMnM3WEc1Y2JtbG1JQ2hvWVhOU1FVWXBJSHRjYmlBZ0lDQjBhV05ySUQwZ2QybHVaRzkzTG5KbGNYVmxjM1JCYm1sdFlYUnBiMjVHY21GdFpUdGNibHh1ZlNCbGJITmxJSHRjYmlBZ0lDQXZLbHh1SUNBZ0lDQWdJQ0J5WlhGMVpYTjBRVzVwYldGMGFXOXVSbkpoYldVZ2NHOXNlV1pwYkd4Y2JpQWdJQ0FnSUNBZ1hHNGdJQ0FnSUNBZ0lFWnZjaUJKUlRndk9TQkdiR2x1YzNSdmJtVnpJR0Z1WkNCdWIyNHRZbkp2ZDNObGNpQmxiblpwY205dWJXVnVkSE5jYmx4dUlDQWdJQ0FnSUNCVVlXdGxiaUJtY205dElGQmhkV3dnU1hKcGMyZ3VJRmRsSjNabElITjBjbWx3Y0dWa0lHOTFkQ0JqWVc1alpXeEJibWx0WVhScGIyNUdjbUZ0WlNCamFHVmphM01nWW1WallYVnpaU0IzWlNCa2IyNG5kQ0JtYjNnZ2QybDBhQ0IwYUdGMFhHNGdJQ0FnSUNBZ0lGeHVJQ0FnSUNBZ0lDQm9kSFJ3T2k4dmNHRjFiR2x5YVhOb0xtTnZiUzh5TURFeEwzSmxjWFZsYzNSaGJtbHRZWFJwYjI1bWNtRnRaUzFtYjNJdGMyMWhjblF0WVc1cGJXRjBhVzVuTDF4dUlDQWdJQ0FnSUNCb2RIUndPaTh2YlhrdWIzQmxjbUV1WTI5dEwyVnRiMnhzWlhJdllteHZaeTh5TURFeEx6RXlMekl3TDNKbGNYVmxjM1JoYm1sdFlYUnBiMjVtY21GdFpTMW1iM0l0YzIxaGNuUXRaWEl0WVc1cGJXRjBhVzVuWEc0Z0lDQWdJQ0FnSUNCY2JpQWdJQ0FnSUNBZ2NtVnhkV1Z6ZEVGdWFXMWhkR2x2YmtaeVlXMWxJSEJ2YkhsbWFXeHNJR0o1SUVWeWFXc2dUY08yYkd4bGNpNGdabWw0WlhNZ1puSnZiU0JRWVhWc0lFbHlhWE5vSUdGdVpDQlVhVzV2SUZwcGFtUmxiRnh1SUNBZ0lDQWdJQ0FnWEc0Z0lDQWdJQ0FnSUUxSlZDQnNhV05sYm5ObFhHNGdJQ0FnS2k5Y2JpQWdJQ0JzWlhRZ2JHRnpkRlJwYldVZ1BTQXdPMXh1WEc0Z0lDQWdkR2xqYXlBOUlDaGpZV3hzWW1GamF5a2dQVDRnZTF4dUlDQWdJQ0FnSUNCamIyNXpkQ0JqZFhKeVpXNTBWR2x0WlNBOUlHNWxkeUJFWVhSbEtDa3VaMlYwVkdsdFpTZ3BPMXh1SUNBZ0lDQWdJQ0JqYjI1emRDQjBhVzFsVkc5RFlXeHNJRDBnVFdGMGFDNXRZWGdvTUN3Z01UWWdMU0FvWTNWeWNtVnVkRlJwYldVZ0xTQnNZWE4wVkdsdFpTa3BPMXh1WEc0Z0lDQWdJQ0FnSUd4aGMzUlVhVzFsSUQwZ1kzVnljbVZ1ZEZScGJXVWdLeUIwYVcxbFZHOURZV3hzTzF4dVhHNGdJQ0FnSUNBZ0lITmxkRlJwYldWdmRYUW9LQ2tnUFQ0Z1kyRnNiR0poWTJzb2JHRnpkRlJwYldVcExDQjBhVzFsVkc5RFlXeHNLVHRjYmlBZ0lDQjlPMXh1ZlZ4dVhHNWxlSEJ2Y25RZ1pHVm1ZWFZzZENCMGFXTnJPeUpkZlE9PVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvcHJvY2Vzcy90aWNrLmpzXG4gKiogbW9kdWxlIGlkID0gNDlcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuLy8gW2ludF06IEluY3JlbWVudGVkIGZvciBlYWNoIG5ldyBydW5uaW5nIHByb2Nlc3NcbnZhciBjdXJyZW50UHJvY2Vzc0lkID0gMDtcblxuLy8gW2ludF06IE51bWJlciBvZiBhbGwgcnVubmluZyBwcm9jZXNzZXNcbnZhciB0b3RhbFJ1bm5pbmdDb3VudCA9IDA7XG5cbi8vIFtpbnRdOiBOdW1iZXIgb2YgcnVubmluZyBwcm9jZXNzZXMgZXhjbHVkaW5nIGJhY2tncm91bmQgcHJvY2Vzc2VzXG52YXIgbm9uQmFja2dyb3VuZFJ1bm5pbmdDb3VudCA9IDA7XG5cbi8vIFthcnJheV06IEFycmF5IG9mIHJ1bm5pbmcgcHJvY2VzcyBJRHNcbnZhciBydW5uaW5nSWRzID0gW107XG5cbi8vIFtvYmplY3RdOiBNYXAgb2YgcnVubmluZyBwcm9jZXNzZXNcbnZhciBhY3RpdmVQcm9jZXNzZXMgPSB7fTtcblxuLy8gW2FycmF5XTogQXJyYXkgb2YgcHJvY2VzcyBJRHMgcXVldWVkIGZvciBhY3RpdmF0aW9uXG52YXIgYWN0aXZhdGVRdWV1ZSA9IFtdO1xuXG4vLyBbYXJyYXldOiBBcnJheSBvZiBwcm9jZXNzIElEcyBxdWV1ZWQgZm9yIGRlYWN0aXZhdGlvblxudmFyIGRlYWN0aXZhdGVRdWV1ZSA9IFtdO1xuXG4vKlxuICAgIFVwZGF0ZSBhY3RpdmF0ZS9kZWFjdGl2YXRlIHF1ZXVlc1xuXG4gICAgQHBhcmFtIFtudW1iZXJdXG4gICAgQHBhcmFtIFthcnJheV1cbiAgICBAcGFyYW0gW2FycmF5XVxuKi9cbnZhciB1cGRhdGVRdWV1ZXMgPSBmdW5jdGlvbiAoaWQsIGluTGlzdCwgb3V0TGlzdCkge1xuICAgIHZhciBpblBvc2l0aW9uID0gaW5MaXN0LmluZGV4T2YoaWQpO1xuICAgIHZhciBvdXRQb3NpdGlvbiA9IG91dExpc3QuaW5kZXhPZihpZCk7XG5cbiAgICBpZiAoaW5Qb3NpdGlvbiA9PT0gLTEpIHtcbiAgICAgICAgaW5MaXN0LnB1c2goaWQpO1xuICAgIH1cblxuICAgIGlmIChvdXRQb3NpdGlvbiA+IC0xKSB7XG4gICAgICAgIG91dExpc3Quc3BsaWNlKG91dFBvc2l0aW9uLCAxKTtcbiAgICB9XG59O1xuXG4vKlxuICAgIFVwZGF0ZSBydW5uaW5nXG5cbiAgICBbYm9vbGVhbl06IGB0cnVlYCB0byBhZGRcbiAgICBbYm9vbGVhbl06IGB0cnVlYCBpZiBsYXp5XG4qL1xudmFyIHVwZGF0ZVJ1bm5pbmdDb3VudCA9IGZ1bmN0aW9uIChhZGQsIGlzTGF6eSkge1xuICAgIHZhciBtb2RpZnkgPSBhZGQgPyAxIDogLTE7XG5cbiAgICB0b3RhbFJ1bm5pbmdDb3VudCArPSBtb2RpZnk7XG5cbiAgICBpZiAoIWlzTGF6eSkge1xuICAgICAgICBub25CYWNrZ3JvdW5kUnVubmluZ0NvdW50ICs9IG1vZGlmeTtcbiAgICB9XG59O1xuXG5leHBvcnRzLmRlZmF1bHQgPSB7XG4gICAgYWN0aXZlUHJvY2Vzc2VzOiBhY3RpdmVQcm9jZXNzZXMsXG5cbiAgICAvLyBBY3RpdmF0ZSBhIHByb2Nlc3NcbiAgICBhY3RpdmF0ZTogZnVuY3Rpb24gKGlkLCBwcm9jZXNzKSB7XG4gICAgICAgIGFjdGl2ZVByb2Nlc3Nlc1tpZF0gPSBwcm9jZXNzO1xuICAgICAgICBwcm9jZXNzLmlzQWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgdXBkYXRlUXVldWVzKGlkLCBhY3RpdmF0ZVF1ZXVlLCBkZWFjdGl2YXRlUXVldWUpO1xuICAgIH0sXG5cbiAgICAvLyBEZWFjdGl2YXRlIGEgcHJvY2Vzc1xuICAgIGRlYWN0aXZhdGU6IGZ1bmN0aW9uIChpZCkge1xuICAgICAgICBwcm9jZXNzLmlzQWN0aXZlID0gZmFsc2U7XG4gICAgICAgIHVwZGF0ZVF1ZXVlcyhpZCwgZGVhY3RpdmF0ZVF1ZXVlLCBhY3RpdmF0ZVF1ZXVlKTtcbiAgICB9LFxuXG4gICAgLy8gTnVtYmVyIGJhY2tncm91bmQgcHJvY2Vzc2VzXG4gICAgZ2V0Tm9uQmFja2dyb3VuZFJ1bm5pbmdDb3VudDogZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gbm9uQmFja2dyb3VuZFJ1bm5pbmdDb3VudDtcbiAgICB9LFxuXG4gICAgLy8gSW5jcmVtZW50IGN1cnJlbnQgcHJvY2VzcyBJRCBhbmQgcmV0dXJuXG4gICAgZ2V0UHJvY2Vzc0lkOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBjdXJyZW50UHJvY2Vzc0lkKys7XG4gICAgfSxcblxuICAgIC8vIFJlc29sdmUgYWN0aXZhdGUvZGVhY3RpdmF0ZSBwcm9jZXNzZXMgYW5kIHJldHVybiBhY3RpdmUgaWRzXG4gICAgZ2V0QWN0aXZlSWRzOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIC8qXG4gICAgICAgICAgICBQcm9jZXNzIGRlYWN0aXZhdGUgcXVldWVcbiAgICAgICAgKi9cbiAgICAgICAgdmFyIGRlYWN0aXZhdGVRdWV1ZUxlbmd0aCA9IGRlYWN0aXZhdGVRdWV1ZS5sZW5ndGg7XG5cbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBkZWFjdGl2YXRlUXVldWVMZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdmFyIGlkID0gZGVhY3RpdmF0ZVF1ZXVlW2ldO1xuICAgICAgICAgICAgdmFyIGFjdGl2ZUlkSW5kZXggPSBydW5uaW5nSWRzLmluZGV4T2YoaWQpO1xuICAgICAgICAgICAgdmFyIF9wcm9jZXNzID0gYWN0aXZlUHJvY2Vzc2VzW2lkXTtcblxuICAgICAgICAgICAgLy8gSWYgdGhpcyBpcyBhIHJ1bm5pbmcgcHJvY2VzcywgZGVhY3RpdmF0ZVxuICAgICAgICAgICAgaWYgKGFjdGl2ZUlkSW5kZXggPiAtMSkge1xuICAgICAgICAgICAgICAgIHJ1bm5pbmdJZHMuc3BsaWNlKGFjdGl2ZUlkSW5kZXgsIDEpO1xuICAgICAgICAgICAgICAgIHVwZGF0ZVJ1bm5pbmdDb3VudChmYWxzZSwgX3Byb2Nlc3MuaXNMYXp5KTtcbiAgICAgICAgICAgICAgICBkZWxldGUgYWN0aXZlUHJvY2Vzc2VzW2lkXTtcblxuICAgICAgICAgICAgICAgIGlmIChfcHJvY2Vzcy5vbkRlYWN0aXZhdGUpIHtcbiAgICAgICAgICAgICAgICAgICAgX3Byb2Nlc3Mub25EZWFjdGl2YXRlKF9wcm9jZXNzKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvKlxuICAgICAgICAgICAgRW1wdHkgZGVhY3RpdmF0ZSBxdWV1ZS4gV2UgdXNlIGBBcnJheS5zcGxpY2VgIGJlY2F1c2UgaXQgZG9lc24ndFxuICAgICAgICAgICAgd29ya3Mgb24gdGhlIG9yaWdpbmFsIGFycmF5IHNvIHdlIGRvbid0IGhhdmUgdG8gZ2FyYmFnZSBjb2xsZWN0IGFueXRoaW5nXG4gICAgICAgICovXG4gICAgICAgIGRlYWN0aXZhdGVRdWV1ZS5zcGxpY2UoMCwgZGVhY3RpdmF0ZVF1ZXVlTGVuZ3RoKTtcblxuICAgICAgICAvKlxuICAgICAgICAgICAgUHJvY2VzcyBhY3RpdmF0ZSBxdWV1ZVxuICAgICAgICAqL1xuICAgICAgICB2YXIgYWN0aXZhdGVRdWV1ZUxlbmd0aCA9IGFjdGl2YXRlUXVldWUubGVuZ3RoO1xuXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYWN0aXZhdGVRdWV1ZUxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgaWQgPSBhY3RpdmF0ZVF1ZXVlW2ldO1xuICAgICAgICAgICAgdmFyIGFjdGl2ZUlkSW5kZXggPSBydW5uaW5nSWRzLmluZGV4T2YoaWQpO1xuICAgICAgICAgICAgdmFyIF9wcm9jZXNzMiA9IGFjdGl2ZVByb2Nlc3Nlc1tpZF07XG5cbiAgICAgICAgICAgIC8vIElmIHByb2Nlc3MgaXNuJ3QgYWxyZWFkeSBydW5uaW5nLCBhY3RpdmF0ZVxuICAgICAgICAgICAgaWYgKGFjdGl2ZUlkSW5kZXggPT09IC0xICYmIF9wcm9jZXNzMikge1xuICAgICAgICAgICAgICAgIHJ1bm5pbmdJZHMucHVzaChpZCk7XG4gICAgICAgICAgICAgICAgdXBkYXRlUnVubmluZ0NvdW50KHRydWUsIF9wcm9jZXNzMi5pc0xhenkpO1xuXG4gICAgICAgICAgICAgICAgaWYgKF9wcm9jZXNzMi5vbkFjdGl2YXRlKSB7XG4gICAgICAgICAgICAgICAgICAgIF9wcm9jZXNzMi5vbkFjdGl2YXRlKF9wcm9jZXNzMik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgYWN0aXZhdGVRdWV1ZS5zcGxpY2UoMCwgYWN0aXZhdGVRdWV1ZUxlbmd0aCk7XG5cbiAgICAgICAgcmV0dXJuIHJ1bm5pbmdJZHM7XG4gICAgfVxufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbk55WXk5d2NtOWpaWE56TDIxaGJtRm5aWEl1YW5NaVhTd2libUZ0WlhNaU9sdGRMQ0p0WVhCd2FXNW5jeUk2SWpzN096dEJRVU5CTEVsQlFVa3NiVUpCUVcxQ0xFTkJRVzVDT3pzN1FVRkhTaXhKUVVGSkxHOUNRVUZ2UWl4RFFVRndRanM3TzBGQlIwb3NTVUZCU1N3MFFrRkJORUlzUTBGQk5VSTdPenRCUVVkS0xFbEJRVTBzWVVGQllTeEZRVUZpT3pzN1FVRkhUaXhKUVVGTkxHdENRVUZyUWl4RlFVRnNRanM3TzBGQlIwNHNTVUZCVFN4blFrRkJaMElzUlVGQmFFSTdPenRCUVVkT0xFbEJRVTBzYTBKQlFXdENMRVZCUVd4Q096czdPenM3T3pzN1FVRlRUaXhKUVVGTkxHVkJRV1VzVlVGQlF5eEZRVUZFTEVWQlFVc3NUVUZCVEN4RlFVRmhMRTlCUVdJc1JVRkJlVUk3UVVGRE1VTXNVVUZCVFN4aFFVRmhMRTlCUVU4c1QwRkJVQ3hEUVVGbExFVkJRV1lzUTBGQllpeERRVVJ2UXp0QlFVVXhReXhSUVVGTkxHTkJRV01zVVVGQlVTeFBRVUZTTEVOQlFXZENMRVZCUVdoQ0xFTkJRV1FzUTBGR2IwTTdPMEZCU1RGRExGRkJRVWtzWlVGQlpTeERRVUZETEVOQlFVUXNSVUZCU1R0QlFVTnVRaXhsUVVGUExFbEJRVkFzUTBGQldTeEZRVUZhTEVWQlJHMUNPMHRCUVhaQ096dEJRVWxCTEZGQlFVa3NZMEZCWXl4RFFVRkRMRU5CUVVRc1JVRkJTVHRCUVVOc1FpeG5Ra0ZCVVN4TlFVRlNMRU5CUVdVc1YwRkJaaXhGUVVFMFFpeERRVUUxUWl4RlFVUnJRanRMUVVGMFFqdERRVkpwUWpzN096czdPenM3UVVGdFFuSkNMRWxCUVUwc2NVSkJRWEZDTEZWQlFVTXNSMEZCUkN4RlFVRk5MRTFCUVU0c1JVRkJhVUk3UVVGRGVFTXNVVUZCVFN4VFFVRlRMRTFCUVUwc1EwRkJUaXhIUVVGVkxFTkJRVU1zUTBGQlJDeERRVVJsT3p0QlFVZDRReXg1UWtGQmNVSXNUVUZCY2tJc1EwRklkME03TzBGQlMzaERMRkZCUVVrc1EwRkJReXhOUVVGRUxFVkJRVk03UVVGRFZDeHhRMEZCTmtJc1RVRkJOMElzUTBGRVV6dExRVUZpTzBOQlRIVkNPenRyUWtGVldqdEJRVU5ZTEc5RFFVUlhPenM3UVVGSldDeGpRVUZWTEZWQlFVTXNSVUZCUkN4RlFVRkxMRTlCUVV3c1JVRkJhVUk3UVVGRGRrSXNkMEpCUVdkQ0xFVkJRV2hDTEVsQlFYTkNMRTlCUVhSQ0xFTkJSSFZDTzBGQlJYWkNMR2RDUVVGUkxGRkJRVklzUjBGQmJVSXNTVUZCYmtJc1EwRkdkVUk3UVVGSGRrSXNjVUpCUVdFc1JVRkJZaXhGUVVGcFFpeGhRVUZxUWl4RlFVRm5ReXhsUVVGb1F5eEZRVWgxUWp0TFFVRnFRanM3TzBGQlQxWXNaMEpCUVZrc1ZVRkJReXhGUVVGRUxFVkJRVkU3UVVGRGFFSXNaMEpCUVZFc1VVRkJVaXhIUVVGdFFpeExRVUZ1UWl4RFFVUm5RanRCUVVWb1FpeHhRa0ZCWVN4RlFVRmlMRVZCUVdsQ0xHVkJRV3BDTEVWQlFXdERMR0ZCUVd4RExFVkJSbWRDTzB0QlFWSTdPenRCUVUxYUxHdERRVUU0UWp0bFFVRk5PMHRCUVU0N096dEJRVWM1UWl4clFrRkJZenRsUVVGTk8wdEJRVTQ3T3p0QlFVZGtMR3RDUVVGakxGbEJRVTA3T3pzN1FVRkphRUlzV1VGQlRTeDNRa0ZCZDBJc1owSkJRV2RDTEUxQlFXaENMRU5CU21RN08wRkJUV2hDTEdGQlFVc3NTVUZCU1N4SlFVRkpMRU5CUVVvc1JVRkJUeXhKUVVGSkxIRkNRVUZLTEVWQlFUSkNMRWRCUVRORExFVkJRV2RFTzBGQlF6VkRMR2RDUVVGTkxFdEJRVXNzWjBKQlFXZENMRU5CUVdoQ0xFTkJRVXdzUTBGRWMwTTdRVUZGTlVNc1owSkJRVTBzWjBKQlFXZENMRmRCUVZjc1QwRkJXQ3hEUVVGdFFpeEZRVUZ1UWl4RFFVRm9RaXhEUVVaelF6dEJRVWMxUXl4blFrRkJUU3hYUVVGVkxHZENRVUZuUWl4RlFVRm9RaXhEUVVGV096czdRVUZJYzBNc1owSkJUWGhETEdkQ1FVRm5RaXhEUVVGRExFTkJRVVFzUlVGQlNUdEJRVU53UWl3eVFrRkJWeXhOUVVGWUxFTkJRV3RDTEdGQlFXeENMRVZCUVdsRExFTkJRV3BETEVWQlJHOUNPMEZCUlhCQ0xHMURRVUZ0UWl4TFFVRnVRaXhGUVVFd1FpeFRRVUZSTEUxQlFWSXNRMEZCTVVJc1EwRkdiMEk3UVVGSGNFSXNkVUpCUVU4c1owSkJRV2RDTEVWQlFXaENMRU5CUVZBc1EwRkliMEk3TzBGQlMzQkNMRzlDUVVGSkxGTkJRVkVzV1VGQlVpeEZRVUZ6UWp0QlFVTjBRaXcyUWtGQlVTeFpRVUZTTEVOQlFYRkNMRkZCUVhKQ0xFVkJSSE5DTzJsQ1FVRXhRanRoUVV4S08xTkJUa283T3pzN096dEJRVTVuUWl4MVFrRXlRbWhDTEVOQlFXZENMRTFCUVdoQ0xFTkJRWFZDTEVOQlFYWkNMRVZCUVRCQ0xIRkNRVUV4UWpzN096czdRVUV6UW1kQ0xGbEJaME5XTEhOQ1FVRnpRaXhqUVVGakxFMUJRV1FzUTBGb1ExbzdPMEZCYTBOb1FpeGhRVUZMTEVsQlFVa3NTVUZCU1N4RFFVRktMRVZCUVU4c1NVRkJTU3h0UWtGQlNpeEZRVUY1UWl4SFFVRjZReXhGUVVFNFF6dEJRVU14UXl4blFrRkJUU3hMUVVGTExHTkJRV01zUTBGQlpDeERRVUZNTEVOQlJHOURPMEZCUlRGRExHZENRVUZOTEdkQ1FVRm5RaXhYUVVGWExFOUJRVmdzUTBGQmJVSXNSVUZCYmtJc1EwRkJhRUlzUTBGR2IwTTdRVUZITVVNc1owSkJRVTBzV1VGQlZTeG5Ra0ZCWjBJc1JVRkJhRUlzUTBGQlZqczdPMEZCU0c5RExHZENRVTEwUXl4clFrRkJhMElzUTBGQlF5eERRVUZFTEVsQlFVMHNVMEZCZUVJc1JVRkJhVU03UVVGRGFrTXNNa0pCUVZjc1NVRkJXQ3hEUVVGblFpeEZRVUZvUWl4RlFVUnBRenRCUVVWcVF5eHRRMEZCYlVJc1NVRkJia0lzUlVGQmVVSXNWVUZCVVN4TlFVRlNMRU5CUVhwQ0xFTkJSbWxET3p0QlFVbHFReXh2UWtGQlNTeFZRVUZSTEZWQlFWSXNSVUZCYjBJN1FVRkRjRUlzT0VKQlFWRXNWVUZCVWl4RFFVRnRRaXhUUVVGdVFpeEZRVVJ2UWp0cFFrRkJlRUk3WVVGS1NqdFRRVTVLT3p0QlFXZENRU3h6UWtGQll5eE5RVUZrTEVOQlFYRkNMRU5CUVhKQ0xFVkJRWGRDTEcxQ1FVRjRRaXhGUVd4RVowSTdPMEZCYjBSb1FpeGxRVUZQTEZWQlFWQXNRMEZ3UkdkQ08wdEJRVTRpTENKbWFXeGxJam9pYldGdVlXZGxjaTVxY3lJc0luTnZkWEpqWlZKdmIzUWlPaUl2VlhObGNuTXZUV0YwZEM5VGFYUmxjeTl3YjNCdGIzUnBiMjRpTENKemIzVnlZMlZ6UTI5dWRHVnVkQ0k2V3lJdkx5QmJhVzUwWFRvZ1NXNWpjbVZ0Wlc1MFpXUWdabTl5SUdWaFkyZ2dibVYzSUhKMWJtNXBibWNnY0hKdlkyVnpjMXh1YkdWMElHTjFjbkpsYm5SUWNtOWpaWE56U1dRZ1BTQXdPMXh1WEc0dkx5QmJhVzUwWFRvZ1RuVnRZbVZ5SUc5bUlHRnNiQ0J5ZFc1dWFXNW5JSEJ5YjJObGMzTmxjMXh1YkdWMElIUnZkR0ZzVW5WdWJtbHVaME52ZFc1MElEMGdNRHRjYmx4dUx5OGdXMmx1ZEYwNklFNTFiV0psY2lCdlppQnlkVzV1YVc1bklIQnliMk5sYzNObGN5QmxlR05zZFdScGJtY2dZbUZqYTJkeWIzVnVaQ0J3Y205alpYTnpaWE5jYm14bGRDQnViMjVDWVdOclozSnZkVzVrVW5WdWJtbHVaME52ZFc1MElEMGdNRHRjYmx4dUx5OGdXMkZ5Y21GNVhUb2dRWEp5WVhrZ2IyWWdjblZ1Ym1sdVp5QndjbTlqWlhOeklFbEVjMXh1WTI5dWMzUWdjblZ1Ym1sdVowbGtjeUE5SUZ0ZE8xeHVYRzR2THlCYmIySnFaV04wWFRvZ1RXRndJRzltSUhKMWJtNXBibWNnY0hKdlkyVnpjMlZ6WEc1amIyNXpkQ0JoWTNScGRtVlFjbTlqWlhOelpYTWdQU0I3ZlR0Y2JseHVMeThnVzJGeWNtRjVYVG9nUVhKeVlYa2diMllnY0hKdlkyVnpjeUJKUkhNZ2NYVmxkV1ZrSUdadmNpQmhZM1JwZG1GMGFXOXVYRzVqYjI1emRDQmhZM1JwZG1GMFpWRjFaWFZsSUQwZ1cxMDdYRzVjYmk4dklGdGhjbkpoZVYwNklFRnljbUY1SUc5bUlIQnliMk5sYzNNZ1NVUnpJSEYxWlhWbFpDQm1iM0lnWkdWaFkzUnBkbUYwYVc5dVhHNWpiMjV6ZENCa1pXRmpkR2wyWVhSbFVYVmxkV1VnUFNCYlhUdGNibHh1THlwY2JpQWdJQ0JWY0dSaGRHVWdZV04wYVhaaGRHVXZaR1ZoWTNScGRtRjBaU0J4ZFdWMVpYTmNibHh1SUNBZ0lFQndZWEpoYlNCYmJuVnRZbVZ5WFZ4dUlDQWdJRUJ3WVhKaGJTQmJZWEp5WVhsZFhHNGdJQ0FnUUhCaGNtRnRJRnRoY25KaGVWMWNiaW92WEc1amIyNXpkQ0IxY0dSaGRHVlJkV1YxWlhNZ1BTQW9hV1FzSUdsdVRHbHpkQ3dnYjNWMFRHbHpkQ2tnUFQ0Z2UxeHVJQ0FnSUdOdmJuTjBJR2x1VUc5emFYUnBiMjRnUFNCcGJreHBjM1F1YVc1a1pYaFBaaWhwWkNrN1hHNGdJQ0FnWTI5dWMzUWdiM1YwVUc5emFYUnBiMjRnUFNCdmRYUk1hWE4wTG1sdVpHVjRUMllvYVdRcE8xeHVYRzRnSUNBZ2FXWWdLR2x1VUc5emFYUnBiMjRnUFQwOUlDMHhLU0I3WEc0Z0lDQWdJQ0FnSUdsdVRHbHpkQzV3ZFhOb0tHbGtLVHRjYmlBZ0lDQjlYRzVjYmlBZ0lDQnBaaUFvYjNWMFVHOXphWFJwYjI0Z1BpQXRNU2tnZTF4dUlDQWdJQ0FnSUNCdmRYUk1hWE4wTG5Od2JHbGpaU2h2ZFhSUWIzTnBkR2x2Yml3Z01TazdYRzRnSUNBZ2ZWeHVmVHRjYmx4dUx5cGNiaUFnSUNCVmNHUmhkR1VnY25WdWJtbHVaMXh1WEc0Z0lDQWdXMkp2YjJ4bFlXNWRPaUJnZEhKMVpXQWdkRzhnWVdSa1hHNGdJQ0FnVzJKdmIyeGxZVzVkT2lCZ2RISjFaV0FnYVdZZ2JHRjZlVnh1S2k5Y2JtTnZibk4wSUhWd1pHRjBaVkoxYm01cGJtZERiM1Z1ZENBOUlDaGhaR1FzSUdselRHRjZlU2tnUFQ0Z2UxeHVJQ0FnSUdOdmJuTjBJRzF2WkdsbWVTQTlJR0ZrWkNBL0lERWdPaUF0TVR0Y2JseHVJQ0FnSUhSdmRHRnNVblZ1Ym1sdVowTnZkVzUwSUNzOUlHMXZaR2xtZVR0Y2JseHVJQ0FnSUdsbUlDZ2hhWE5NWVhwNUtTQjdYRzRnSUNBZ0lDQWdJRzV2YmtKaFkydG5jbTkxYm1SU2RXNXVhVzVuUTI5MWJuUWdLejBnYlc5a2FXWjVPMXh1SUNBZ0lIMWNibjA3WEc1Y2JtVjRjRzl5ZENCa1pXWmhkV3gwSUh0Y2JpQWdJQ0JoWTNScGRtVlFjbTlqWlhOelpYTXNYRzVjYmlBZ0lDQXZMeUJCWTNScGRtRjBaU0JoSUhCeWIyTmxjM05jYmlBZ0lDQmhZM1JwZG1GMFpUb2dLR2xrTENCd2NtOWpaWE56S1NBOVBpQjdYRzRnSUNBZ0lDQWdJR0ZqZEdsMlpWQnliMk5sYzNObGMxdHBaRjBnUFNCd2NtOWpaWE56TzF4dUlDQWdJQ0FnSUNCd2NtOWpaWE56TG1selFXTjBhWFpsSUQwZ2RISjFaVHRjYmlBZ0lDQWdJQ0FnZFhCa1lYUmxVWFZsZFdWektHbGtMQ0JoWTNScGRtRjBaVkYxWlhWbExDQmtaV0ZqZEdsMllYUmxVWFZsZFdVcE8xeHVJQ0FnSUgwc1hHNWNiaUFnSUNBdkx5QkVaV0ZqZEdsMllYUmxJR0VnY0hKdlkyVnpjMXh1SUNBZ0lHUmxZV04wYVhaaGRHVTZJQ2hwWkNrZ1BUNGdlMXh1SUNBZ0lDQWdJQ0J3Y205alpYTnpMbWx6UVdOMGFYWmxJRDBnWm1Gc2MyVTdYRzRnSUNBZ0lDQWdJSFZ3WkdGMFpWRjFaWFZsY3locFpDd2daR1ZoWTNScGRtRjBaVkYxWlhWbExDQmhZM1JwZG1GMFpWRjFaWFZsS1R0Y2JpQWdJQ0I5TEZ4dVhHNGdJQ0FnTHk4Z1RuVnRZbVZ5SUdKaFkydG5jbTkxYm1RZ2NISnZZMlZ6YzJWelhHNGdJQ0FnWjJWMFRtOXVRbUZqYTJkeWIzVnVaRkoxYm01cGJtZERiM1Z1ZERvZ0tDa2dQVDRnYm05dVFtRmphMmR5YjNWdVpGSjFibTVwYm1kRGIzVnVkQ3hjYmx4dUlDQWdJQzh2SUVsdVkzSmxiV1Z1ZENCamRYSnlaVzUwSUhCeWIyTmxjM01nU1VRZ1lXNWtJSEpsZEhWeWJseHVJQ0FnSUdkbGRGQnliMk5sYzNOSlpEb2dLQ2tnUFQ0Z1kzVnljbVZ1ZEZCeWIyTmxjM05KWkNzckxGeHVYRzRnSUNBZ0x5OGdVbVZ6YjJ4MlpTQmhZM1JwZG1GMFpTOWtaV0ZqZEdsMllYUmxJSEJ5YjJObGMzTmxjeUJoYm1RZ2NtVjBkWEp1SUdGamRHbDJaU0JwWkhOY2JpQWdJQ0JuWlhSQlkzUnBkbVZKWkhNNklDZ3BJRDArSUh0Y2JpQWdJQ0FnSUNBZ0x5cGNiaUFnSUNBZ0lDQWdJQ0FnSUZCeWIyTmxjM01nWkdWaFkzUnBkbUYwWlNCeGRXVjFaVnh1SUNBZ0lDQWdJQ0FxTDF4dUlDQWdJQ0FnSUNCamIyNXpkQ0JrWldGamRHbDJZWFJsVVhWbGRXVk1aVzVuZEdnZ1BTQmtaV0ZqZEdsMllYUmxVWFZsZFdVdWJHVnVaM1JvTzF4dVhHNGdJQ0FnSUNBZ0lHWnZjaUFvYkdWMElHa2dQU0F3T3lCcElEd2daR1ZoWTNScGRtRjBaVkYxWlhWbFRHVnVaM1JvT3lCcEt5c3BJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lHTnZibk4wSUdsa0lEMGdaR1ZoWTNScGRtRjBaVkYxWlhWbFcybGRPMXh1SUNBZ0lDQWdJQ0FnSUNBZ1kyOXVjM1FnWVdOMGFYWmxTV1JKYm1SbGVDQTlJSEoxYm01cGJtZEpaSE11YVc1a1pYaFBaaWhwWkNrN1hHNGdJQ0FnSUNBZ0lDQWdJQ0JqYjI1emRDQndjbTlqWlhOeklEMGdZV04wYVhabFVISnZZMlZ6YzJWelcybGtYVHRjYmx4dUlDQWdJQ0FnSUNBZ0lDQWdMeThnU1dZZ2RHaHBjeUJwY3lCaElISjFibTVwYm1jZ2NISnZZMlZ6Y3l3Z1pHVmhZM1JwZG1GMFpWeHVJQ0FnSUNBZ0lDQWdJQ0FnYVdZZ0tHRmpkR2wyWlVsa1NXNWtaWGdnUGlBdE1Ta2dlMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJSEoxYm01cGJtZEpaSE11YzNCc2FXTmxLR0ZqZEdsMlpVbGtTVzVrWlhnc0lERXBPMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJSFZ3WkdGMFpWSjFibTVwYm1kRGIzVnVkQ2htWVd4elpTd2djSEp2WTJWemN5NXBjMHhoZW5rcE8xeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lHUmxiR1YwWlNCaFkzUnBkbVZRY205alpYTnpaWE5iYVdSZE8xeHVYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdhV1lnS0hCeWIyTmxjM011YjI1RVpXRmpkR2wyWVhSbEtTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUhCeWIyTmxjM011YjI1RVpXRmpkR2wyWVhSbEtIQnliMk5sYzNNcE8xeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lIMWNiaUFnSUNBZ0lDQWdJQ0FnSUgxY2JpQWdJQ0FnSUNBZ2ZWeHVYRzRnSUNBZ0lDQWdJQzhxWEc0Z0lDQWdJQ0FnSUNBZ0lDQkZiWEIwZVNCa1pXRmpkR2wyWVhSbElIRjFaWFZsTGlCWFpTQjFjMlVnWUVGeWNtRjVMbk53YkdsalpXQWdZbVZqWVhWelpTQnBkQ0JrYjJWemJpZDBYRzRnSUNBZ0lDQWdJQ0FnSUNCM2IzSnJjeUJ2YmlCMGFHVWdiM0pwWjJsdVlXd2dZWEp5WVhrZ2MyOGdkMlVnWkc5dUozUWdhR0YyWlNCMGJ5Qm5ZWEppWVdkbElHTnZiR3hsWTNRZ1lXNTVkR2hwYm1kY2JpQWdJQ0FnSUNBZ0tpOWNiaUFnSUNBZ0lDQWdaR1ZoWTNScGRtRjBaVkYxWlhWbExuTndiR2xqWlNnd0xDQmtaV0ZqZEdsMllYUmxVWFZsZFdWTVpXNW5kR2dwTzF4dVhHNGdJQ0FnSUNBZ0lDOHFYRzRnSUNBZ0lDQWdJQ0FnSUNCUWNtOWpaWE56SUdGamRHbDJZWFJsSUhGMVpYVmxYRzRnSUNBZ0lDQWdJQ292WEc0Z0lDQWdJQ0FnSUdOdmJuTjBJR0ZqZEdsMllYUmxVWFZsZFdWTVpXNW5kR2dnUFNCaFkzUnBkbUYwWlZGMVpYVmxMbXhsYm1kMGFEdGNibHh1SUNBZ0lDQWdJQ0JtYjNJZ0tHeGxkQ0JwSUQwZ01Ec2dhU0E4SUdGamRHbDJZWFJsVVhWbGRXVk1aVzVuZEdnN0lHa3JLeWtnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdZMjl1YzNRZ2FXUWdQU0JoWTNScGRtRjBaVkYxWlhWbFcybGRPMXh1SUNBZ0lDQWdJQ0FnSUNBZ1kyOXVjM1FnWVdOMGFYWmxTV1JKYm1SbGVDQTlJSEoxYm01cGJtZEpaSE11YVc1a1pYaFBaaWhwWkNrN1hHNGdJQ0FnSUNBZ0lDQWdJQ0JqYjI1emRDQndjbTlqWlhOeklEMGdZV04wYVhabFVISnZZMlZ6YzJWelcybGtYVHRjYmx4dUlDQWdJQ0FnSUNBZ0lDQWdMeThnU1dZZ2NISnZZMlZ6Y3lCcGMyNG5kQ0JoYkhKbFlXUjVJSEoxYm01cGJtY3NJR0ZqZEdsMllYUmxYRzRnSUNBZ0lDQWdJQ0FnSUNCcFppQW9ZV04wYVhabFNXUkpibVJsZUNBOVBUMGdMVEVnSmlZZ2NISnZZMlZ6Y3lrZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lISjFibTVwYm1kSlpITXVjSFZ6YUNocFpDazdYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdkWEJrWVhSbFVuVnVibWx1WjBOdmRXNTBLSFJ5ZFdVc0lIQnliMk5sYzNNdWFYTk1ZWHA1S1R0Y2JseHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lHbG1JQ2h3Y205alpYTnpMbTl1UVdOMGFYWmhkR1VwSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdjSEp2WTJWemN5NXZia0ZqZEdsMllYUmxLSEJ5YjJObGMzTXBPMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJSDFjYmlBZ0lDQWdJQ0FnSUNBZ0lIMWNiaUFnSUNBZ0lDQWdmVnh1WEc0Z0lDQWdJQ0FnSUdGamRHbDJZWFJsVVhWbGRXVXVjM0JzYVdObEtEQXNJR0ZqZEdsMllYUmxVWFZsZFdWTVpXNW5kR2dwTzF4dVhHNGdJQ0FnSUNBZ0lISmxkSFZ5YmlCeWRXNXVhVzVuU1dSek8xeHVJQ0FnSUgxY2JuMDdYRzRpWFgwPVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvcHJvY2Vzcy9tYW5hZ2VyLmpzXG4gKiogbW9kdWxlIGlkID0gNTBcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8vIHNoaW0gZm9yIHVzaW5nIHByb2Nlc3MgaW4gYnJvd3NlclxuXG52YXIgcHJvY2VzcyA9IG1vZHVsZS5leHBvcnRzID0ge307XG52YXIgcXVldWUgPSBbXTtcbnZhciBkcmFpbmluZyA9IGZhbHNlO1xuXG5mdW5jdGlvbiBkcmFpblF1ZXVlKCkge1xuICAgIGlmIChkcmFpbmluZykge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGRyYWluaW5nID0gdHJ1ZTtcbiAgICB2YXIgY3VycmVudFF1ZXVlO1xuICAgIHZhciBsZW4gPSBxdWV1ZS5sZW5ndGg7XG4gICAgd2hpbGUobGVuKSB7XG4gICAgICAgIGN1cnJlbnRRdWV1ZSA9IHF1ZXVlO1xuICAgICAgICBxdWV1ZSA9IFtdO1xuICAgICAgICB2YXIgaSA9IC0xO1xuICAgICAgICB3aGlsZSAoKytpIDwgbGVuKSB7XG4gICAgICAgICAgICBjdXJyZW50UXVldWVbaV0oKTtcbiAgICAgICAgfVxuICAgICAgICBsZW4gPSBxdWV1ZS5sZW5ndGg7XG4gICAgfVxuICAgIGRyYWluaW5nID0gZmFsc2U7XG59XG5wcm9jZXNzLm5leHRUaWNrID0gZnVuY3Rpb24gKGZ1bikge1xuICAgIHF1ZXVlLnB1c2goZnVuKTtcbiAgICBpZiAoIWRyYWluaW5nKSB7XG4gICAgICAgIHNldFRpbWVvdXQoZHJhaW5RdWV1ZSwgMCk7XG4gICAgfVxufTtcblxucHJvY2Vzcy50aXRsZSA9ICdicm93c2VyJztcbnByb2Nlc3MuYnJvd3NlciA9IHRydWU7XG5wcm9jZXNzLmVudiA9IHt9O1xucHJvY2Vzcy5hcmd2ID0gW107XG5wcm9jZXNzLnZlcnNpb24gPSAnJzsgLy8gZW1wdHkgc3RyaW5nIHRvIGF2b2lkIHJlZ2V4cCBpc3N1ZXNcbnByb2Nlc3MudmVyc2lvbnMgPSB7fTtcblxuZnVuY3Rpb24gbm9vcCgpIHt9XG5cbnByb2Nlc3Mub24gPSBub29wO1xucHJvY2Vzcy5hZGRMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLm9uY2UgPSBub29wO1xucHJvY2Vzcy5vZmYgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLnJlbW92ZUFsbExpc3RlbmVycyA9IG5vb3A7XG5wcm9jZXNzLmVtaXQgPSBub29wO1xuXG5wcm9jZXNzLmJpbmRpbmcgPSBmdW5jdGlvbiAobmFtZSkge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5iaW5kaW5nIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn07XG5cbi8vIFRPRE8oc2h0eWxtYW4pXG5wcm9jZXNzLmN3ZCA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuICcvJyB9O1xucHJvY2Vzcy5jaGRpciA9IGZ1bmN0aW9uIChkaXIpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuY2hkaXIgaXMgbm90IHN1cHBvcnRlZCcpO1xufTtcbnByb2Nlc3MudW1hc2sgPSBmdW5jdGlvbigpIHsgcmV0dXJuIDA7IH07XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqICh3ZWJwYWNrKS9+L25vZGUtbGlicy1icm93c2VyL34vcHJvY2Vzcy9icm93c2VyLmpzXG4gKiogbW9kdWxlIGlkID0gNTFcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyJdLCJzb3VyY2VSb290IjoiIiwiZmlsZSI6InBvcG1vdGlvbi5nbG9iYWwuanMifQ==