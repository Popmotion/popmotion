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
	exports.createMapTransform = exports.shadowType = exports.scaleType = exports.rgbType = exports.pxType = exports.positionsType = exports.hslType = exports.hexType = exports.complexType = exports.colorType = exports.axesType = exports.angleType = exports.alphaType = exports.timeline = exports.stagger = exports.setDilation = exports.$ = exports.utils = exports.calc = exports.easing = exports.renderSVGPath = exports.renderSVG = exports.renderCSS = exports.renderAttr = exports.process = exports.input = exports.track = exports.physics = exports.tween = exports.actor = undefined;
	
	var _Actor = __webpack_require__(2);
	
	var _Actor2 = _interopRequireDefault(_Actor);
	
	var _Tween = __webpack_require__(3);
	
	var _Tween2 = _interopRequireDefault(_Tween);
	
	var _Physics = __webpack_require__(4);
	
	var _Physics2 = _interopRequireDefault(_Physics);
	
	var _Track = __webpack_require__(5);
	
	var _Track2 = _interopRequireDefault(_Track);
	
	var _Process = __webpack_require__(6);
	
	var _Process2 = _interopRequireDefault(_Process);
	
	var _Input = __webpack_require__(7);
	
	var _Input2 = _interopRequireDefault(_Input);
	
	var _attr = __webpack_require__(8);
	
	var _attr2 = _interopRequireDefault(_attr);
	
	var _css = __webpack_require__(9);
	
	var _css2 = _interopRequireDefault(_css);
	
	var _svg = __webpack_require__(10);
	
	var _svg2 = _interopRequireDefault(_svg);
	
	var _svgPath = __webpack_require__(11);
	
	var _svgPath2 = _interopRequireDefault(_svgPath);
	
	var _presetEasing = __webpack_require__(12);
	
	var _presetEasing2 = _interopRequireDefault(_presetEasing);
	
	var _calc2 = __webpack_require__(13);
	
	var _calc = _interopRequireWildcard(_calc2);
	
	var _utils2 = __webpack_require__(14);
	
	var _utils = _interopRequireWildcard(_utils2);
	
	var _selectActor = __webpack_require__(15);
	
	var _selectActor2 = _interopRequireDefault(_selectActor);
	
	var _timer = __webpack_require__(16);
	
	var _timer2 = _interopRequireDefault(_timer);
	
	var _stagger2 = __webpack_require__(17);
	
	var _stagger3 = _interopRequireDefault(_stagger2);
	
	var _timeline2 = __webpack_require__(18);
	
	var _timeline3 = _interopRequireDefault(_timeline2);
	
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
	
	var _map = __webpack_require__(31);
	
	var _map2 = _interopRequireDefault(_map);
	
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
	
	// Renderers
	exports.renderAttr = _attr2.default;
	exports.renderCSS = _css2.default;
	exports.renderSVG = _svg2.default;
	exports.renderSVGPath = _svgPath2.default;
	
	// Easing
	
	exports.easing = _presetEasing2.default;
	
	// Utils
	
	exports.calc = _calc;
	exports.utils = _utils;
	exports.$ = _selectActor2.default;
	exports.setDilation = _timer2.default;
	exports.stagger = _stagger3.default;
	exports.timeline = _timeline3.default;
	
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
	
	exports.createMapTransform = _map2.default;
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9wb3Btb3Rpb24uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFjTyxJQUFNLHdCQUFRLFVBQUMsS0FBRDtTQUFXLG9CQUFVLEtBQVY7Q0FBWDs7Ozs7O0FBQ2QsSUFBTSx3QkFBUSxVQUFDLEtBQUQ7U0FBVyxvQkFBVSxLQUFWO0NBQVg7QUFDZCxJQUFNLDRCQUFVLFVBQUMsS0FBRDtTQUFXLHNCQUFZLEtBQVo7Q0FBWDtBQUNoQixJQUFNLHdCQUFRO29DQUFJOzs7OzJFQUFzQjtDQUExQjtBQUNkLElBQU0sd0JBQVE7cUNBQUk7Ozs7MkVBQXNCO0NBQTFCO0FBQ2QsSUFBTSw0QkFBVTtxQ0FBSTs7Ozs2RUFBd0I7Q0FBNUI7OztRQUdoQjtRQUNBO1FBQ0E7UUFDQTs7OztRQUdBOzs7O1FBR0s7UUFDQTtRQUNMO1FBQ0E7UUFDQTtRQUNBOzs7O1FBR0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOzs7O1FBR0EiLCJmaWxlIjoicG9wbW90aW9uLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9NYXR0L1NpdGVzL3BvcG1vdGlvbiIsInNvdXJjZXNDb250ZW50IjpbIi8vIEFjdG9yXG5pbXBvcnQgQWN0b3IgZnJvbSAnLi9hY3Rvci9BY3Rvcic7XG5cbi8vIEFjdGlvbnNcbmltcG9ydCBUd2VlbiBmcm9tICcuL2FjdGlvbnMvVHdlZW4nO1xuaW1wb3J0IFBoeXNpY3MgZnJvbSAnLi9hY3Rpb25zL1BoeXNpY3MnO1xuaW1wb3J0IFRyYWNrIGZyb20gJy4vYWN0aW9ucy9UcmFjayc7XG5cbi8vIFByb2Nlc3NcbmltcG9ydCBQcm9jZXNzIGZyb20gJy4vcHJvY2Vzcy9Qcm9jZXNzJztcblxuLy8gSW5wdXRcbmltcG9ydCBJbnB1dCBmcm9tICcuL2lucHV0L0lucHV0JztcblxuZXhwb3J0IGNvbnN0IGFjdG9yID0gKHByb3BzKSA9PiBuZXcgQWN0b3IocHJvcHMpO1xuZXhwb3J0IGNvbnN0IHR3ZWVuID0gKHByb3BzKSA9PiBuZXcgVHdlZW4ocHJvcHMpO1xuZXhwb3J0IGNvbnN0IHBoeXNpY3MgPSAocHJvcHMpID0+IG5ldyBQaHlzaWNzKHByb3BzKTtcbmV4cG9ydCBjb25zdCB0cmFjayA9ICguLi5hcmdzKSA9PiBuZXcgVHJhY2soLi4uYXJncyk7XG5leHBvcnQgY29uc3QgaW5wdXQgPSAoLi4uYXJncykgPT4gbmV3IElucHV0KC4uLmFyZ3MpO1xuZXhwb3J0IGNvbnN0IHByb2Nlc3MgPSAoLi4uYXJncykgPT4gbmV3IFByb2Nlc3MoLi4uYXJncyk7XG5cbi8vIFJlbmRlcmVyc1xuZXhwb3J0IHJlbmRlckF0dHIgZnJvbSAnLi9yZW5kZXIvYXR0cic7XG5leHBvcnQgcmVuZGVyQ1NTIGZyb20gJy4vcmVuZGVyL2Nzcyc7XG5leHBvcnQgcmVuZGVyU1ZHIGZyb20gJy4vcmVuZGVyL3N2Zyc7XG5leHBvcnQgcmVuZGVyU1ZHUGF0aCBmcm9tICcuL3JlbmRlci9zdmctcGF0aCc7XG5cbi8vIEVhc2luZ1xuZXhwb3J0IGVhc2luZyBmcm9tICcuL2FjdGlvbnMvZWFzaW5nL3ByZXNldC1lYXNpbmcnO1xuXG4vLyBVdGlsc1xuZXhwb3J0ICogYXMgY2FsYyBmcm9tICcuL2luYy9jYWxjJztcbmV4cG9ydCAqIGFzIHV0aWxzIGZyb20gJy4vaW5jL3V0aWxzJztcbmV4cG9ydCAkIGZyb20gJy4vaW5jL3NlbGVjdC1hY3Rvcic7XG5leHBvcnQgc2V0RGlsYXRpb24gZnJvbSAnLi9wcm9jZXNzL3RpbWVyJztcbmV4cG9ydCBzdGFnZ2VyIGZyb20gJy4vaW5jL3N0YWdnZXInO1xuZXhwb3J0IHRpbWVsaW5lIGZyb20gJy4vaW5jL3RpbWVsaW5lJztcblxuLy8gVmFsdWUgdHlwZXNcbmV4cG9ydCBhbHBoYVR5cGUgZnJvbSAnLi92YWx1ZS10eXBlcy9hbHBoYSc7XG5leHBvcnQgYW5nbGVUeXBlIGZyb20gJy4vdmFsdWUtdHlwZXMvYW5nbGUnO1xuZXhwb3J0IGF4ZXNUeXBlIGZyb20gJy4vdmFsdWUtdHlwZXMvYXhlcyc7XG5leHBvcnQgY29sb3JUeXBlIGZyb20gJy4vdmFsdWUtdHlwZXMvY29sb3InO1xuZXhwb3J0IGNvbXBsZXhUeXBlIGZyb20gJy4vdmFsdWUtdHlwZXMvY29tcGxleCc7XG5leHBvcnQgaGV4VHlwZSBmcm9tICcuL3ZhbHVlLXR5cGVzL2hleCc7XG5leHBvcnQgaHNsVHlwZSBmcm9tICcuL3ZhbHVlLXR5cGVzL2hzbCc7XG5leHBvcnQgcG9zaXRpb25zVHlwZSBmcm9tICcuL3ZhbHVlLXR5cGVzL3Bvc2l0aW9ucyc7XG5leHBvcnQgcHhUeXBlIGZyb20gJy4vdmFsdWUtdHlwZXMvcHgnO1xuZXhwb3J0IHJnYlR5cGUgZnJvbSAnLi92YWx1ZS10eXBlcy9yZ2InO1xuZXhwb3J0IHNjYWxlVHlwZSBmcm9tICcuL3ZhbHVlLXR5cGVzL3NjYWxlJztcbmV4cG9ydCBzaGFkb3dUeXBlIGZyb20gJy4vdmFsdWUtdHlwZXMvc2hhZG93JztcblxuLy8gVHJhbnNmb3JtZXJzXG5leHBvcnQgY3JlYXRlTWFwVHJhbnNmb3JtIGZyb20gJy4vdHJhbnNmb3JtZXJzL21hcCc7Il19

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _Action2 = __webpack_require__(32);
	
	var _Action3 = _interopRequireDefault(_Action2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Actor = function (_Action) {
	    _inherits(Actor, _Action);
	
	    function Actor() {
	        _classCallCheck(this, Actor);
	
	        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	            args[_key] = arguments[_key];
	        }
	
	        var _this = _possibleConstructorReturn(this, _Action.call.apply(_Action, [this].concat(args)));
	
	        _this.once();
	        return _this;
	    }
	
	    Actor.prototype.set = function set(props, forceInstant) {
	        _Action.prototype.set.call(this, props);
	
	        if (this.reducer) {
	            props = this.reducer(this);
	        }
	    };
	
	    Actor.prototype.bind = function bind(action) {
	        var _this2 = this;
	
	        return action.inherit({
	            preRender: function (action) {
	                for (var i = 0; i < _this2.numValueKeys; i++) {
	                    var key = _this2.valueKeys[i];
	                    var value = _this2.values[key];
	                }
	            }
	        });
	    };
	
	    Actor.prototype.start = function start(action) {
	        if (action) {
	            var boundAction = this.bind(action);
	            boundAction.start();
	
	            return boundAction;
	        }
	
	        return _Action.prototype.start.call(this);
	    };
	
	    return Actor;
	}(_Action3.default);
	
	exports.default = Actor;
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hY3Rvci9BY3Rvci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0lBRXFCOzs7QUFDakIsYUFEaUIsS0FDakIsR0FBcUI7OEJBREosT0FDSTs7MENBQU47O1NBQU07O3FEQUNqQiwwQ0FBUyxLQUFULEdBRGlCOztBQUVqQixjQUFLLElBQUwsR0FGaUI7O0tBQXJCOztBQURpQixvQkFNakIsbUJBQUksT0FBTyxjQUFjO0FBQ3JCLDBCQUFNLEdBQU4sWUFBVSxLQUFWLEVBRHFCOztBQUdyQixZQUFJLEtBQUssT0FBTCxFQUFjO0FBQ2Qsb0JBQVEsS0FBSyxPQUFMLENBQWEsSUFBYixDQUFSLENBRGM7U0FBbEI7OztBQVRhLG9CQWNqQixxQkFBSyxRQUFROzs7QUFDVCxlQUFPLE9BQU8sT0FBUCxDQUFlO0FBQ2xCLHVCQUFXLFVBQUMsTUFBRCxFQUFZO0FBQ25CLHFCQUFLLElBQUksSUFBSSxDQUFKLEVBQU8sSUFBSSxPQUFLLFlBQUwsRUFBbUIsR0FBdkMsRUFBNEM7QUFDeEMsd0JBQU0sTUFBTSxPQUFLLFNBQUwsQ0FBZSxDQUFmLENBQU4sQ0FEa0M7QUFFeEMsd0JBQU0sUUFBUSxPQUFLLE1BQUwsQ0FBWSxHQUFaLENBQVIsQ0FGa0M7aUJBQTVDO2FBRE87U0FEUixDQUFQLENBRFM7OztBQWRJLG9CQTJCakIsdUJBQU0sUUFBUTtBQUNWLFlBQUksTUFBSixFQUFZO0FBQ1IsZ0JBQU0sY0FBYyxLQUFLLElBQUwsQ0FBVSxNQUFWLENBQWQsQ0FERTtBQUVSLHdCQUFZLEtBQVosR0FGUTs7QUFJUixtQkFBTyxXQUFQLENBSlE7U0FBWjs7QUFPQSxlQUFPLGtCQUFNLEtBQU4sV0FBUCxDQVJVOzs7V0EzQkciLCJmaWxlIjoiQWN0b3IuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL01hdHQvU2l0ZXMvcG9wbW90aW9uIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEFjdGlvbiBmcm9tICcuLi9hY3Rpb25zL0FjdGlvbic7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFjdG9yIGV4dGVuZHMgQWN0aW9uIHtcbiAgICBjb25zdHJ1Y3RvciguLi5hcmdzKSB7XG4gICAgICAgIHN1cGVyKC4uLmFyZ3MpO1xuICAgICAgICB0aGlzLm9uY2UoKTtcbiAgICB9XG5cbiAgICBzZXQocHJvcHMsIGZvcmNlSW5zdGFudCkge1xuICAgICAgICBzdXBlci5zZXQocHJvcHMpO1xuXG4gICAgICAgIGlmICh0aGlzLnJlZHVjZXIpIHtcbiAgICAgICAgICAgIHByb3BzID0gdGhpcy5yZWR1Y2VyKHRoaXMpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgYmluZChhY3Rpb24pIHtcbiAgICAgICAgcmV0dXJuIGFjdGlvbi5pbmhlcml0KHtcbiAgICAgICAgICAgIHByZVJlbmRlcjogKGFjdGlvbikgPT4ge1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5udW1WYWx1ZUtleXM7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBrZXkgPSB0aGlzLnZhbHVlS2V5c1tpXTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdmFsdWUgPSB0aGlzLnZhbHVlc1trZXldO1xuXG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgc3RhcnQoYWN0aW9uKSB7XG4gICAgICAgIGlmIChhY3Rpb24pIHtcbiAgICAgICAgICAgIGNvbnN0IGJvdW5kQWN0aW9uID0gdGhpcy5iaW5kKGFjdGlvbik7XG4gICAgICAgICAgICBib3VuZEFjdGlvbi5zdGFydCgpO1xuXG4gICAgICAgICAgICByZXR1cm4gYm91bmRBY3Rpb247XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gc3VwZXIuc3RhcnQoKTtcbiAgICB9XG59Il19

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	exports.__esModule = true;
	
	var _Action2 = __webpack_require__(32);
	
	var _Action3 = _interopRequireDefault(_Action2);
	
	var _presetEasing = __webpack_require__(12);
	
	var _utils = __webpack_require__(14);
	
	var _calc = __webpack_require__(13);
	
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
	        var _this2 = this;
	
	        if (this.ended) {
	            var stepTaken = false;
	
	            (0, _utils.each)(NEXT_STEPS, function (method, step) {
	                var maxSteps = _this2[step];
	
	                if (maxSteps === true || (0, _utils.isNum)(maxSteps) && maxSteps > _this2[step + COUNT]) {
	                    _this2[step + COUNT]++;
	                    stepTaken = true;
	                    _this2[method]();
	                }
	            });
	
	            if (!stepTaken) {
	                this.stop();
	            }
	        }
	    };
	
	    Tween.prototype.flipValues = function flipValues() {
	        this.elapsed = this.duration - this.elapsed;
	
	        (0, _utils.each)(this.values, function (value) {
	            var _ref = [value.from, value.to];
	            value.to = _ref[0];
	            value.from = _ref[1];
	        });
	    };
	
	    Tween.prototype.reverse = function reverse() {
	        this.playDirection *= -1;
	    };
	
	    Tween.prototype.restart = function restart() {
	        this.elapsed = this.playDirection === 1 ? 0 : this.duration;
	        this.started = (0, _utils.currentTime)();
	    };
	
	    Tween.prototype.seek = function seek(progress) {
	        this.seekTime(this.duration * progress);
	    };
	
	    Tween.prototype.seekTime = function seekTime(elapsed) {
	        this.once();
	        this.elapsed = elapsed;
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
	            ease: _presetEasing.easeOut,
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
	//# sourceMappingURL=data:application/json;base64,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TyxJQUFQLENBRGtCOzs7V0E5R0wiLCJmaWxlIjoiVHdlZW4uanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL01hdHQvU2l0ZXMvcG9wbW90aW9uIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEFjdGlvbiBmcm9tICcuL0FjdGlvbic7XG5pbXBvcnQgeyBlYXNlT3V0IH0gZnJvbSAnLi9lYXNpbmcvcHJlc2V0LWVhc2luZyc7XG5pbXBvcnQge1xuICAgIGN1cnJlbnRUaW1lLFxuICAgIGVhY2gsXG4gICAgaXNOdW1cbn0gZnJvbSAnLi4vaW5jL3V0aWxzJztcbmltcG9ydCB7XG4gICAgcmVzdHJpY3QsXG4gICAgZ2V0UHJvZ3Jlc3NGcm9tVmFsdWUsXG4gICAgZ2V0VmFsdWVGcm9tUHJvZ3Jlc3MsXG4gICAgc3RlcFByb2dyZXNzXG59IGZyb20gJy4uL2luYy9jYWxjJztcblxuY29uc3QgQ09VTlQgPSAnQ291bnQnO1xuY29uc3QgTkVYVF9TVEVQUyA9IHtcbiAgICBsb29wOiAncmVzdGFydCcsXG4gICAgeW95bzogJ3JldmVyc2UnLFxuICAgIGZsaXA6ICdmbGlwVmFsdWVzJ1xufTtcblxuLypcbiAgICBFYXNlIHZhbHVlIHdpdGhpbiByYW5nZWQgcGFyYW1ldGVyc1xuICAgIFxuICAgIEBwYXJhbSBbbnVtYmVyXTogUHJvZ3Jlc3MgYmV0d2VlbiAwIGFuZCAxXG4gICAgQHBhcmFtIFtudW1iZXJdOiBWYWx1ZSBvZiAwIHByb2dyZXNzXG4gICAgQHBhcmFtIFtudW1iZXJdOiBWYWx1ZSBvZiAxIHByb2dyZXNzXG4gICAgQHBhcmFtIFtzdHJpbmcgfHwgZnVuY3Rpb25dOiBOYW1lIG9mIHByZXNldCBlYXNpbmdcbiAgICAgICAgdG8gdXNlIG9yIGdlbmVyYXRlZCBlYXNpbmcgZnVuY3Rpb25cbiAgICBAcmV0dXJuIFtudW1iZXJdOiBWYWx1ZSBvZiBlYXNlZCBwcm9ncmVzcyBpbiByYW5nZVxuKi8gXG5jb25zdCBlYXNlID0gKHByb2dyZXNzLCBmcm9tLCB0bywgZWFzZSkgPT4ge1xuICAgIGNvbnN0IHByb2dyZXNzTGltaXRlZCA9IHJlc3RyaWN0KHByb2dyZXNzLCAwLCAxKTtcbiAgICBjb25zdCBlYXNlZFByb2dyZXNzID0gZWFzZShwcm9ncmVzc0xpbWl0ZWQpO1xuXG4gICAgcmV0dXJuIGdldFZhbHVlRnJvbVByb2dyZXNzKGVhc2VkUHJvZ3Jlc3MsIGZyb20sIHRvKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFR3ZWVuIGV4dGVuZHMgQWN0aW9uIHtcbiAgICBzdGFydCgpIHtcbiAgICAgICAgc3VwZXIuc3RhcnQoKTtcbiAgICAgICAgdGhpcy5lbGFwc2VkID0gMDtcbiAgICAgICAgdGhpcy5mbGlwQ291bnQgPSB0aGlzLnlveW9Db3VudCA9IHRoaXMubG9vcENvdW50ID0gMDtcbiAgICB9XG5cbiAgICBvblVwZGF0ZSh0d2VlbiwgZnJhbWVTdGFtcCwgZWxhcHNlZCkge1xuICAgICAgICBjb25zdCBwcm9ncmVzc1RhcmdldCA9ICh0aGlzLnBsYXlEaXJlY3Rpb24gPT09IDEpID8gMSA6IDA7XG5cbiAgICAgICAgdGhpcy5lbmRlZCA9IHRydWU7XG4gICAgICAgIHRoaXMuZWxhcHNlZCArPSAoZWxhcHNlZCAqIHRoaXMuZGlsYXRlKSAqIHRoaXMucGxheURpcmVjdGlvbjtcblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubnVtVmFsdWVLZXlzOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IGtleSA9IHRoaXMudmFsdWVLZXlzW2ldO1xuICAgICAgICAgICAgY29uc3QgdmFsdWUgPSB0aGlzLnZhbHVlc1trZXldO1xuXG4gICAgICAgICAgICBsZXQgcHJvZ3Jlc3MgPSByZXN0cmljdChnZXRQcm9ncmVzc0Zyb21WYWx1ZSh0aGlzLmVsYXBzZWQgLSB2YWx1ZS5kZWxheSwgMCwgdmFsdWUuZHVyYXRpb24pLCAwLCAxKTtcblxuICAgICAgICAgICAgLy8gTWFyayBUd2VlbiBhcyBOT1QgZW5kZWQgaWYgc3RpbGwgaW4gcHJvZ3Jlc3NcbiAgICAgICAgICAgIGlmIChwcm9ncmVzcyAhPT0gcHJvZ3Jlc3NUYXJnZXQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmVuZGVkID0gZmFsc2U7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIFN0ZXAgcHJvZ3Jlc3MgaWYgd2UncmUgc3RlcHBpbmdcbiAgICAgICAgICAgIGlmICh2YWx1ZS5zdGVwcykge1xuICAgICAgICAgICAgICAgIHByb2dyZXNzID0gc3RlcFByb2dyZXNzKHByb2dyZXNzLCB2YWx1ZS5zdGVwcyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIEVhc2UgcHJvZ3Jlc3NcbiAgICAgICAgICAgIHZhbHVlLmN1cnJlbnQgPSBlYXNlKHByb2dyZXNzLCB2YWx1ZS5mcm9tLCB2YWx1ZS50bywgdmFsdWUuZWFzZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBvbkZyYW1lRW5kKCkge1xuICAgICAgICBpZiAodGhpcy5lbmRlZCkge1xuICAgICAgICAgICAgbGV0IHN0ZXBUYWtlbiA9IGZhbHNlO1xuXG4gICAgICAgICAgICBlYWNoKE5FWFRfU1RFUFMsIChtZXRob2QsIHN0ZXApID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBtYXhTdGVwcyA9IHRoaXNbc3RlcF07XG5cbiAgICAgICAgICAgICAgICBpZiAobWF4U3RlcHMgPT09IHRydWUgfHwgKGlzTnVtKG1heFN0ZXBzKSAmJiBtYXhTdGVwcyA+IHRoaXNbc3RlcCArIENPVU5UXSkpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpc1tzdGVwICsgQ09VTlRdKys7XG4gICAgICAgICAgICAgICAgICAgIHN0ZXBUYWtlbiA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIHRoaXNbbWV0aG9kXSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBpZiAoIXN0ZXBUYWtlbikge1xuICAgICAgICAgICAgICAgIHRoaXMuc3RvcCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZmxpcFZhbHVlcygpIHtcbiAgICAgICAgdGhpcy5lbGFwc2VkID0gdGhpcy5kdXJhdGlvbiAtIHRoaXMuZWxhcHNlZDtcblxuICAgICAgICBlYWNoKHRoaXMudmFsdWVzLCAodmFsdWUpID0+IHtcbiAgICAgICAgICAgIFt2YWx1ZS50bywgdmFsdWUuZnJvbV0gPSBbdmFsdWUuZnJvbSwgdmFsdWUudG9dO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICByZXZlcnNlKCkge1xuICAgICAgICB0aGlzLnBsYXlEaXJlY3Rpb24gKj0gLTE7XG4gICAgfVxuXG4gICAgcmVzdGFydCgpIHtcbiAgICAgICAgdGhpcy5lbGFwc2VkID0gKHRoaXMucGxheURpcmVjdGlvbiA9PT0gMSkgPyAwIDogdGhpcy5kdXJhdGlvbjtcbiAgICAgICAgdGhpcy5zdGFydGVkID0gY3VycmVudFRpbWUoKTtcbiAgICB9XG5cbiAgICBzZWVrKHByb2dyZXNzKSB7XG4gICAgICAgIHRoaXMuc2Vla1RpbWUodGhpcy5kdXJhdGlvbiAqIHByb2dyZXNzKTtcbiAgICB9XG5cbiAgICBzZWVrVGltZShlbGFwc2VkKSB7XG4gICAgICAgIHRoaXMub25jZSgpO1xuICAgICAgICB0aGlzLmVsYXBzZWQgPSBlbGFwc2VkO1xuICAgIH1cbiAgICBcbiAgICBnZXREZWZhdWx0UHJvcHMoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAuLi5zdXBlci5nZXREZWZhdWx0UHJvcHMoKSxcbiAgICAgICAgICAgIGRlbGF5OiAwLFxuICAgICAgICAgICAgZGlsYXRlOiAxLFxuICAgICAgICAgICAgZHVyYXRpb246IDMwMCxcbiAgICAgICAgICAgIGxvb3A6IGZhbHNlLFxuICAgICAgICAgICAgeW95bzogZmFsc2UsXG4gICAgICAgICAgICBmbGlwOiBmYWxzZSxcbiAgICAgICAgICAgIHBsYXlEaXJlY3Rpb246IDEsXG4gICAgICAgICAgICBlbmRlZDogZmFsc2UsXG4gICAgICAgICAgICBlbGFwc2VkOiAwXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgZ2V0RGVmYXVsdFZhbHVlKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgLi4uc3VwZXIuZ2V0RGVmYXVsdFZhbHVlKCksXG4gICAgICAgICAgICBkZWxheTogMCxcbiAgICAgICAgICAgIGR1cmF0aW9uOiAzMDAsXG4gICAgICAgICAgICBlYXNlOiBlYXNlT3V0LFxuICAgICAgICAgICAgZWxhcHNlZDogMCxcbiAgICAgICAgICAgIHN0YWdnZXI6IDAsXG4gICAgICAgICAgICBzdGVwczogMCxcbiAgICAgICAgICAgIGZyb206IDAsXG4gICAgICAgICAgICB0bzogMCxcbiAgICAgICAgICAgIHJvdW5kOiBmYWxzZVxuICAgICAgICB9O1xuICAgIH1cblxuICAgIGdldERlZmF1bHRWYWx1ZVByb3AoKSB7XG4gICAgICAgIHJldHVybiAndG8nO1xuICAgIH1cbn1cbiJdfQ==

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	exports.__esModule = true;
	
	var _Action2 = __webpack_require__(32);
	
	var _Action3 = _interopRequireDefault(_Action2);
	
	var _calc = __webpack_require__(13);
	
	var _utils = __webpack_require__(14);
	
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
	        return _this;
	    }
	
	    Physics.prototype.onUpdate = function onUpdate(physics, frameStamp, elapsed) {
	        var _this2 = this;
	
	        this.hasChanged = false;
	
	        (0, _utils.each)(this.values, function (value) {
	            var previousValue = value.current;
	
	            // Apply acceleration
	            value.velocity += (0, _calc.speedPerFrame)(value.force, elapsed);
	
	            // Apply friction
	            value.velocity *= Math.pow(1 - value.friction, elapsed / 10);
	
	            // Apply spring
	            if (value.spring && (0, _utils.isNum)(value.to)) {
	                var distanceToTarget = value.to - value.current;
	                value.velocity += distanceToTarget * (0, _calc.speedPerFrame)(value.spring, elapsed);
	            }
	
	            // Apply latest velocity
	            value.current += (0, _calc.speedPerFrame)(value.velocity, elapsed);
	
	            // Check if value has changed
	            if (value.current !== previousValue || Math.abs(value.velocity) >= value.stopSpeed) {
	                _this2.hasChanged = true;
	            }
	        });
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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hY3Rpb25zL1BoeXNpY3MuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUlxQjs7O0FBRWpCLGFBRmlCLE9BRWpCLEdBQXFCOzhCQUZKLFNBRUk7OzBDQUFOOztTQUFNOztxREFDakIsMENBQVMsS0FBVCxHQURpQjs7QUFFakIsY0FBSyxjQUFMLEdBQXNCLENBQXRCLENBRmlCOztLQUFyQjs7QUFGaUIsc0JBT2pCLDZCQUFTLFNBQVMsWUFBWSxTQUFTOzs7QUFDbkMsYUFBSyxVQUFMLEdBQWtCLEtBQWxCLENBRG1DOztBQUduQyx5QkFBSyxLQUFLLE1BQUwsRUFBYSxVQUFDLEtBQUQsRUFBVztBQUN6QixnQkFBTSxnQkFBZ0IsTUFBTSxPQUFOOzs7QUFERyxpQkFJekIsQ0FBTSxRQUFOLElBQWtCLHlCQUFjLE1BQU0sS0FBTixFQUFhLE9BQTNCLENBQWxCOzs7QUFKeUIsaUJBT3pCLENBQU0sUUFBTixhQUFtQixJQUFJLE1BQU0sUUFBTixFQUFvQixVQUFVLEVBQVYsQ0FBM0M7OztBQVB5QixnQkFVckIsTUFBTSxNQUFOLElBQWdCLGtCQUFNLE1BQU0sRUFBTixDQUF0QixFQUFpQztBQUNqQyxvQkFBTSxtQkFBbUIsTUFBTSxFQUFOLEdBQVcsTUFBTSxPQUFOLENBREg7QUFFakMsc0JBQU0sUUFBTixJQUFrQixtQkFBbUIseUJBQWMsTUFBTSxNQUFOLEVBQWMsT0FBNUIsQ0FBbkIsQ0FGZTthQUFyQzs7O0FBVnlCLGlCQWdCekIsQ0FBTSxPQUFOLElBQWlCLHlCQUFjLE1BQU0sUUFBTixFQUFnQixPQUE5QixDQUFqQjs7O0FBaEJ5QixnQkFtQnJCLE1BQU0sT0FBTixLQUFrQixhQUFsQixJQUFtQyxLQUFLLEdBQUwsQ0FBUyxNQUFNLFFBQU4sQ0FBVCxJQUE0QixNQUFNLFNBQU4sRUFBaUI7QUFDaEYsdUJBQUssVUFBTCxHQUFrQixJQUFsQixDQURnRjthQUFwRjtTQW5CYyxDQUFsQixDQUhtQzs7O0FBUHRCLHNCQW1DakIsbUNBQWE7QUFDVCxZQUFJLEtBQUssT0FBTCxFQUFjO0FBQ2QsaUJBQUssY0FBTCxHQUFzQixLQUFLLFVBQUwsR0FBa0IsQ0FBbEIsR0FBc0IsS0FBSyxjQUFMLEdBQXNCLENBQXRCLENBRDlCOztBQUdkLGdCQUFJLEtBQUssY0FBTCxJQUF1QixLQUFLLGlCQUFMLEVBQXdCO0FBQy9DLHFCQUFLLElBQUwsR0FEK0M7YUFBbkQ7U0FISjs7Ozs7Ozs7QUFwQ2Esc0JBa0RqQiw2Q0FBa0I7QUFDZCw0QkFDTyxrQkFBTSxlQUFOO0FBQ0gscUJBQVMsSUFBVDtBQUNBLCtCQUFtQixDQUFuQjtVQUhKLENBRGM7Ozs7Ozs7O0FBbERELHNCQStEakIsNkNBQWtCO0FBQ2QsNEJBQ08sa0JBQU0sZUFBTjtBQUNILG1CQUFPLENBQVA7QUFDQSxvQkFBUSxDQUFSO0FBQ0Esb0JBQVEsQ0FBUjtBQUNBLHVCQUFXLE1BQVg7QUFDQSxzQkFBVSxDQUFWO1VBTkosQ0FEYzs7Ozs7Ozs7O0FBL0RELHNCQWdGakIscURBQXNCO0FBQ2xCLGVBQU8sVUFBUCxDQURrQjs7O1dBaEZMIiwiZmlsZSI6IlBoeXNpY3MuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL01hdHQvU2l0ZXMvcG9wbW90aW9uIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEFjdGlvbiBmcm9tICcuL0FjdGlvbic7XG5pbXBvcnQgeyBzcGVlZFBlckZyYW1lIH0gZnJvbSAnLi4vaW5jL2NhbGMnO1xuaW1wb3J0IHsgZWFjaCwgaXNOdW0gfSBmcm9tICcuLi9pbmMvdXRpbHMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQaHlzaWNzIGV4dGVuZHMgQWN0aW9uIHtcblxuICAgIGNvbnN0cnVjdG9yKC4uLmFyZ3MpIHtcbiAgICAgICAgc3VwZXIoLi4uYXJncyk7XG4gICAgICAgIHRoaXMuaW5hY3RpdmVGcmFtZXMgPSAwO1xuICAgIH1cblxuICAgIG9uVXBkYXRlKHBoeXNpY3MsIGZyYW1lU3RhbXAsIGVsYXBzZWQpIHtcbiAgICAgICAgdGhpcy5oYXNDaGFuZ2VkID0gZmFsc2U7XG5cbiAgICAgICAgZWFjaCh0aGlzLnZhbHVlcywgKHZhbHVlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBwcmV2aW91c1ZhbHVlID0gdmFsdWUuY3VycmVudDtcblxuICAgICAgICAgICAgLy8gQXBwbHkgYWNjZWxlcmF0aW9uXG4gICAgICAgICAgICB2YWx1ZS52ZWxvY2l0eSArPSBzcGVlZFBlckZyYW1lKHZhbHVlLmZvcmNlLCBlbGFwc2VkKTtcblxuICAgICAgICAgICAgLy8gQXBwbHkgZnJpY3Rpb25cbiAgICAgICAgICAgIHZhbHVlLnZlbG9jaXR5ICo9ICgxIC0gdmFsdWUuZnJpY3Rpb24pICoqIChlbGFwc2VkIC8gMTApO1xuXG4gICAgICAgICAgICAvLyBBcHBseSBzcHJpbmdcbiAgICAgICAgICAgIGlmICh2YWx1ZS5zcHJpbmcgJiYgaXNOdW0odmFsdWUudG8pKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgZGlzdGFuY2VUb1RhcmdldCA9IHZhbHVlLnRvIC0gdmFsdWUuY3VycmVudDtcbiAgICAgICAgICAgICAgICB2YWx1ZS52ZWxvY2l0eSArPSBkaXN0YW5jZVRvVGFyZ2V0ICogc3BlZWRQZXJGcmFtZSh2YWx1ZS5zcHJpbmcsIGVsYXBzZWQpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBBcHBseSBsYXRlc3QgdmVsb2NpdHlcbiAgICAgICAgICAgIHZhbHVlLmN1cnJlbnQgKz0gc3BlZWRQZXJGcmFtZSh2YWx1ZS52ZWxvY2l0eSwgZWxhcHNlZCk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIC8vIENoZWNrIGlmIHZhbHVlIGhhcyBjaGFuZ2VkXG4gICAgICAgICAgICBpZiAodmFsdWUuY3VycmVudCAhPT0gcHJldmlvdXNWYWx1ZSB8fCBNYXRoLmFicyh2YWx1ZS52ZWxvY2l0eSkgPj0gdmFsdWUuc3RvcFNwZWVkKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5oYXNDaGFuZ2VkID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgb25GcmFtZUVuZCgpIHtcbiAgICAgICAgaWYgKHRoaXMuYXV0b0VuZCkge1xuICAgICAgICAgICAgdGhpcy5pbmFjdGl2ZUZyYW1lcyA9IHRoaXMuaGFzQ2hhbmdlZCA/IDEgOiB0aGlzLmluYWN0aXZlRnJhbWVzICsgMTtcblxuICAgICAgICAgICAgaWYgKHRoaXMuaW5hY3RpdmVGcmFtZXMgPj0gdGhpcy5tYXhJbmFjdGl2ZUZyYW1lcykge1xuICAgICAgICAgICAgICAgIHRoaXMuc3RvcCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLypcbiAgICAgICAgIyBHZXQgZGVmYXVsdCBTaW11bGF0ZSBwcm9wc1xuXG4gICAgICAgIEByZXR1cm4gW29iamVjdF1cbiAgICAqL1xuICAgIGdldERlZmF1bHRQcm9wcygpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIC4uLnN1cGVyLmdldERlZmF1bHRQcm9wcygpLFxuICAgICAgICAgICAgYXV0b0VuZDogdHJ1ZSxcbiAgICAgICAgICAgIG1heEluYWN0aXZlRnJhbWVzOiAzXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgLypcbiAgICAgICAgIyBHZXQgZGVmYXVsdCBTaW11bGF0ZSB2YWx1ZSBwcm9wc1xuXG4gICAgICAgIEByZXR1cm4gW29iamVjdF1cbiAgICAqL1xuICAgIGdldERlZmF1bHRWYWx1ZSgpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIC4uLnN1cGVyLmdldERlZmF1bHRWYWx1ZSgpLFxuICAgICAgICAgICAgZm9yY2U6IDAsIC8vIFtudW1iZXJdOiBBY2NlbGVyYXRpb24gdG8gYXBwbHkgdG8gdmFsdWUsIGluIHVuaXRzIHBlciBzZWNvbmRcbiAgICAgICAgICAgIGJvdW5jZTogMCwgLy8gW251bWJlcl06IEZhY3RvciB0byBtdWx0aXBseSB2ZWxvY2l0eSBieSBvbiBib3VuY2VcbiAgICAgICAgICAgIHNwcmluZzogMCwgLy8gW251bWJlcl06IFNwcmluZyBzdHJlbmd0aCBkdXJpbmcgJ3N0cmluZydcbiAgICAgICAgICAgIHN0b3BTcGVlZDogMC4wMDAxLCAvLyBbbnVtYmVyXTogU3RvcCBzaW11bGF0aW9uIHVuZGVyIHRoaXMgc3BlZWRcbiAgICAgICAgICAgIGZyaWN0aW9uOiAwIC8vIFtudW1iZXJdOiBGcmljdGlvbiB0byBhcHBseSBwZXIgZnJhbWUsIDAtMVxuICAgICAgICB9O1xuICAgIH1cblxuICAgIC8qXG4gICAgICAgICMgR2V0IGRlZmF1bHQgU2ltdWxhdGUgdmFsdWUgcHJvcGVydHkgbmFtZVxuICAgICAgICAjIyBTZXQgdmFsdWVzIHRvIHRoaXMgd2hlbiBhIGB2YWx1ZWAgaXMgbm90IHByb3ZpZGVkIGFzIGFuIG9iamVjdFxuXG4gICAgICAgIEByZXR1cm4gW3N0cmluZ11cbiAgICAqL1xuICAgIGdldERlZmF1bHRWYWx1ZVByb3AoKSB7XG4gICAgICAgIHJldHVybiAndmVsb2NpdHknO1xuICAgIH1cbn1cbiJdfQ==

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _Action2 = __webpack_require__(32);
	
	var _Action3 = _interopRequireDefault(_Action2);
	
	var _Pointer = __webpack_require__(33);
	
	var _Pointer2 = _interopRequireDefault(_Pointer);
	
	var _calc = __webpack_require__(13);
	
	var _utils = __webpack_require__(14);
	
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
	    return e.touches ? new _Pointer2.default(mouseEventToPoint(e), 'mousemove', mouseEventToPoint) : new _Pointer2.default(touchEventToPoint(e), 'touchmove', touchEventToPoint);
	};
	
	var getActualEvent = function (e) {
	    return e.originalEvent || e;
	};
	
	var Track = function (_Action) {
	    _inherits(Track, _Action);
	
	    function Track(props, input) {
	        _classCallCheck(this, Track);
	
	        var _this = _possibleConstructorReturn(this, _Action.call(this, props));
	
	        _this.input = input.state ? input : createPointer(getActualEvent(input));
	        return _this;
	    }
	
	    Track.prototype.start = function start() {
	        _Action.prototype.start.call(this);
	        this.inputOrigin = {};
	    };
	
	    Track.prototype.onUpdate = function onUpdate() {
	        var _this2 = this;
	
	        this.inputOffset = (0, _calc.offset)(this.inputOrigin, this.input.state);
	
	        (0, _utils.each)(this.values, function (value, key) {
	            if (_this2.inputOffset.hasOwnProperty(key)) {
	                if (value.direct) {
	                    value.current = _this2.input.state[key];
	                } else {
	                    value.current = value.origin + _this2.inputOffset[key];
	                }
	            }
	        });
	    };
	
	    Track.prototype.getDefaultValue = function getDefaultValue() {
	        return {
	            amp: 1,
	            escapeAmp: 0,
	            direct: false,
	            smooth: 0
	        };
	    };
	
	    return Track;
	}(_Action3.default);
	
	exports.default = Track;
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hY3Rpb25zL1RyYWNrLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVdBLElBQU0sb0JBQW9CLFVBQUMsQ0FBRDtXQUFRO0FBQzlCLFdBQUcsRUFBRSxLQUFGO0FBQ0gsV0FBRyxFQUFFLEtBQUY7O0NBRm1COztBQUsxQixJQUFNLG9CQUFvQjtRQUFHO1dBQXNCO0FBQy9DLFdBQUcsZUFBZSxDQUFmLEVBQWtCLE9BQWxCO0FBQ0gsV0FBRyxlQUFlLENBQWYsRUFBa0IsT0FBbEI7O0NBRm1COztBQUsxQixJQUFNLGdCQUFnQixVQUFDLENBQUQ7V0FBTyxFQUFFLE9BQUYsR0FDekIsc0JBQVksa0JBQWtCLENBQWxCLENBQVosRUFBa0MsV0FBbEMsRUFBK0MsaUJBQS9DLENBRHlCLEdBRXpCLHNCQUFZLGtCQUFrQixDQUFsQixDQUFaLEVBQWtDLFdBQWxDLEVBQStDLGlCQUEvQyxDQUZ5QjtDQUFQOztBQUl0QixJQUFNLGlCQUFpQixVQUFDLENBQUQ7V0FBTyxFQUFFLGFBQUYsSUFBbUIsQ0FBbkI7Q0FBUDs7SUFFRjs7O0FBQ2pCLGFBRGlCLEtBQ2pCLENBQVksS0FBWixFQUFtQixLQUFuQixFQUEwQjs4QkFEVCxPQUNTOztxREFDdEIsbUJBQU0sS0FBTixHQURzQjs7QUFFdEIsY0FBSyxLQUFMLEdBQWEsTUFBTSxLQUFOLEdBQWMsS0FBZCxHQUFzQixjQUFjLGVBQWUsS0FBZixDQUFkLENBQXRCLENBRlM7O0tBQTFCOztBQURpQixvQkFNakIseUJBQVE7QUFDSiwwQkFBTSxLQUFOLFlBREk7QUFFSixhQUFLLFdBQUwsR0FBbUIsRUFBbkIsQ0FGSTs7O0FBTlMsb0JBV2pCLCtCQUFXOzs7QUFDUCxhQUFLLFdBQUwsR0FBbUIsa0JBQU8sS0FBSyxXQUFMLEVBQWtCLEtBQUssS0FBTCxDQUFXLEtBQVgsQ0FBNUMsQ0FETzs7QUFHUCx5QkFBSyxLQUFLLE1BQUwsRUFBYSxVQUFDLEtBQUQsRUFBUSxHQUFSLEVBQWdCO0FBQzlCLGdCQUFJLE9BQUssV0FBTCxDQUFpQixjQUFqQixDQUFnQyxHQUFoQyxDQUFKLEVBQTBDO0FBQ3RDLG9CQUFJLE1BQU0sTUFBTixFQUFjO0FBQ2QsMEJBQU0sT0FBTixHQUFnQixPQUFLLEtBQUwsQ0FBVyxLQUFYLENBQWlCLEdBQWpCLENBQWhCLENBRGM7aUJBQWxCLE1BRU87QUFDSCwwQkFBTSxPQUFOLEdBQWdCLE1BQU0sTUFBTixHQUFlLE9BQUssV0FBTCxDQUFpQixHQUFqQixDQUFmLENBRGI7aUJBRlA7YUFESjtTQURjLENBQWxCLENBSE87OztBQVhNLG9CQXlCakIsNkNBQWtCO0FBQ2QsZUFBTztBQUNILGlCQUFLLENBQUw7QUFDQSx1QkFBVyxDQUFYO0FBQ0Esb0JBQVEsS0FBUjtBQUNBLG9CQUFRLENBQVI7U0FKSixDQURjOzs7V0F6QkQiLCJmaWxlIjoiVHJhY2suanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL01hdHQvU2l0ZXMvcG9wbW90aW9uIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEFjdGlvbiBmcm9tICcuL0FjdGlvbic7XG5pbXBvcnQgUG9pbnRlciBmcm9tICcuLi9pbnB1dC9Qb2ludGVyJztcbmltcG9ydCB7IG9mZnNldCB9IGZyb20gJy4uL2luYy9jYWxjJztcbmltcG9ydCB7IGVhY2ggfSBmcm9tICcuLi9pbmMvdXRpbHMnO1xuXG4vKlxuICAgIFNjcmFwZSB4L3kgY29vcmRpbmF0ZXMgZnJvbSBwcm92aWRlZCBldmVudFxuXG4gICAgQHBhcmFtIFtldmVudF1cbiAgICBAcmV0dXJuIFtvYmplY3RdXG4qL1xuY29uc3QgbW91c2VFdmVudFRvUG9pbnQgPSAoZSkgPT4gKHtcbiAgICB4OiBlLnBhZ2VYLFxuICAgIHk6IGUucGFnZVlcbn0pO1xuXG5jb25zdCB0b3VjaEV2ZW50VG9Qb2ludCA9ICh7IGNoYW5nZWRUb3VjaGVzIH0pID0+ICh7XG4gICAgeDogY2hhbmdlZFRvdWNoZXNbMF0uY2xpZW50WCxcbiAgICB5OiBjaGFuZ2VkVG91Y2hlc1swXS5jbGllbnRZXG59KTtcblxuY29uc3QgY3JlYXRlUG9pbnRlciA9IChlKSA9PiBlLnRvdWNoZXMgP1xuICAgIG5ldyBQb2ludGVyKG1vdXNlRXZlbnRUb1BvaW50KGUpLCAnbW91c2Vtb3ZlJywgbW91c2VFdmVudFRvUG9pbnQpIDpcbiAgICBuZXcgUG9pbnRlcih0b3VjaEV2ZW50VG9Qb2ludChlKSwgJ3RvdWNobW92ZScsIHRvdWNoRXZlbnRUb1BvaW50KTtcblxuY29uc3QgZ2V0QWN0dWFsRXZlbnQgPSAoZSkgPT4gZS5vcmlnaW5hbEV2ZW50IHx8IGU7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRyYWNrIGV4dGVuZHMgQWN0aW9uIHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcywgaW5wdXQpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgICAgICB0aGlzLmlucHV0ID0gaW5wdXQuc3RhdGUgPyBpbnB1dCA6IGNyZWF0ZVBvaW50ZXIoZ2V0QWN0dWFsRXZlbnQoaW5wdXQpKTtcbiAgICB9XG5cbiAgICBzdGFydCgpIHtcbiAgICAgICAgc3VwZXIuc3RhcnQoKTtcbiAgICAgICAgdGhpcy5pbnB1dE9yaWdpbiA9IHt9O1xuICAgIH1cblxuICAgIG9uVXBkYXRlKCkge1xuICAgICAgICB0aGlzLmlucHV0T2Zmc2V0ID0gb2Zmc2V0KHRoaXMuaW5wdXRPcmlnaW4sIHRoaXMuaW5wdXQuc3RhdGUpO1xuXG4gICAgICAgIGVhY2godGhpcy52YWx1ZXMsICh2YWx1ZSwga2V5KSA9PiB7XG4gICAgICAgICAgICBpZiAodGhpcy5pbnB1dE9mZnNldC5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgICAgICAgaWYgKHZhbHVlLmRpcmVjdCkge1xuICAgICAgICAgICAgICAgICAgICB2YWx1ZS5jdXJyZW50ID0gdGhpcy5pbnB1dC5zdGF0ZVtrZXldO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlLmN1cnJlbnQgPSB2YWx1ZS5vcmlnaW4gKyB0aGlzLmlucHV0T2Zmc2V0W2tleV07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBnZXREZWZhdWx0VmFsdWUoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBhbXA6IDEsXG4gICAgICAgICAgICBlc2NhcGVBbXA6IDAsXG4gICAgICAgICAgICBkaXJlY3Q6IGZhbHNlLFxuICAgICAgICAgICAgc21vb3RoOiAwXG4gICAgICAgIH07XG4gICAgfVxufVxuIl19

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	exports.__esModule = true;
	
	var _utils = __webpack_require__(14);
	
	var _loop = __webpack_require__(34);
	
	var loop = _interopRequireWildcard(_loop);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Process = function () {
	    /*
	        [object]: Properties
	        [boolean] (optional): Is Process lazy?
	    */
	
	    function Process(props, isLazy) {
	        _classCallCheck(this, Process);
	
	        this.set(this.getDefaultProps());
	        this.set(props);
	
	        this.isLazy = isLazy || false;
	        this.id = loop.getProcessId();
	        this.isActive = false;
	    }
	
	    Process.prototype.set = function set(props) {
	        var _this = this;
	
	        (0, _utils.each)(props, function (value, key) {
	            return _this[key] = value;
	        });
	        return this;
	    };
	
	    Process.prototype.start = function start() {
	        this.isActive = true;
	        loop.activate(this.id, this);
	        return this;
	    };
	
	    Process.prototype.stop = function stop() {
	        this.isActive = false;
	        loop.deactivate(this.id);
	        return this;
	    };
	
	    Process.prototype.once = function once() {
	        var _this2 = this;
	
	        this.onCleanup = function () {
	            _this2.stop();
	            _this2.onCleanup = undefined;
	        };
	
	        this.start();
	
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
	        return new this.constructor(_extends({}, this, { props: props }));
	    };
	
	    return Process;
	}();
	
	exports.default = Process;
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9wcm9jZXNzL1Byb2Nlc3MuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztJQUNZOzs7Ozs7SUFFUzs7Ozs7O0FBS2pCLGFBTGlCLE9BS2pCLENBQVksS0FBWixFQUFtQixNQUFuQixFQUEyQjs4QkFMVixTQUtVOztBQUN2QixhQUFLLEdBQUwsQ0FBUyxLQUFLLGVBQUwsRUFBVCxFQUR1QjtBQUV2QixhQUFLLEdBQUwsQ0FBUyxLQUFULEVBRnVCOztBQUl2QixhQUFLLE1BQUwsR0FBYyxVQUFVLEtBQVYsQ0FKUztBQUt2QixhQUFLLEVBQUwsR0FBVSxLQUFLLFlBQUwsRUFBVixDQUx1QjtBQU12QixhQUFLLFFBQUwsR0FBZ0IsS0FBaEIsQ0FOdUI7S0FBM0I7O0FBTGlCLHNCQWNqQixtQkFBSSxPQUFPOzs7QUFDUCx5QkFBSyxLQUFMLEVBQVksVUFBQyxLQUFELEVBQVEsR0FBUjttQkFBZ0IsTUFBSyxHQUFMLElBQVksS0FBWjtTQUFoQixDQUFaLENBRE87QUFFUCxlQUFPLElBQVAsQ0FGTzs7O0FBZE0sc0JBbUJqQix5QkFBUTtBQUNKLGFBQUssUUFBTCxHQUFnQixJQUFoQixDQURJO0FBRUosYUFBSyxRQUFMLENBQWMsS0FBSyxFQUFMLEVBQVMsSUFBdkIsRUFGSTtBQUdKLGVBQU8sSUFBUCxDQUhJOzs7QUFuQlMsc0JBeUJqQix1QkFBTztBQUNILGFBQUssUUFBTCxHQUFnQixLQUFoQixDQURHO0FBRUgsYUFBSyxVQUFMLENBQWdCLEtBQUssRUFBTCxDQUFoQixDQUZHO0FBR0gsZUFBTyxJQUFQLENBSEc7OztBQXpCVSxzQkErQmpCLHVCQUFPOzs7QUFDSCxhQUFLLFNBQUwsR0FBaUIsWUFBTTtBQUNuQixtQkFBSyxJQUFMLEdBRG1CO0FBRW5CLG1CQUFLLFNBQUwsR0FBaUIsU0FBakIsQ0FGbUI7U0FBTixDQURkOztBQU1ILGFBQUssS0FBTCxHQU5HOztBQVFILGVBQU8sSUFBUCxDQVJHOzs7Ozs7OztBQS9CVSxzQkErQ2pCLDZDQUFrQjtBQUNkLGVBQU8sRUFBUCxDQURjOzs7Ozs7Ozs7O0FBL0NELHNCQTBEakIsMkJBQVEsT0FBTztBQUNYLGVBQU8sSUFBSSxLQUFLLFdBQUwsY0FBc0IsUUFBTSxlQUFoQyxDQUFQLENBRFc7OztXQTFERSIsImZpbGUiOiJQcm9jZXNzLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9NYXR0L1NpdGVzL3BvcG1vdGlvbiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGVhY2ggfSBmcm9tICcuLi9pbmMvdXRpbHMnO1xuaW1wb3J0ICogYXMgbG9vcCBmcm9tICcuL2xvb3AnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQcm9jZXNzIHtcbiAgICAvKlxuICAgICAgICBbb2JqZWN0XTogUHJvcGVydGllc1xuICAgICAgICBbYm9vbGVhbl0gKG9wdGlvbmFsKTogSXMgUHJvY2VzcyBsYXp5P1xuICAgICovXG4gICAgY29uc3RydWN0b3IocHJvcHMsIGlzTGF6eSkge1xuICAgICAgICB0aGlzLnNldCh0aGlzLmdldERlZmF1bHRQcm9wcygpKTtcbiAgICAgICAgdGhpcy5zZXQocHJvcHMpO1xuXG4gICAgICAgIHRoaXMuaXNMYXp5ID0gaXNMYXp5IHx8IGZhbHNlO1xuICAgICAgICB0aGlzLmlkID0gbG9vcC5nZXRQcm9jZXNzSWQoKTtcbiAgICAgICAgdGhpcy5pc0FjdGl2ZSA9IGZhbHNlO1xuICAgIH1cblxuICAgIHNldChwcm9wcykge1xuICAgICAgICBlYWNoKHByb3BzLCAodmFsdWUsIGtleSkgPT4gdGhpc1trZXldID0gdmFsdWUpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBzdGFydCgpIHtcbiAgICAgICAgdGhpcy5pc0FjdGl2ZSA9IHRydWU7XG4gICAgICAgIGxvb3AuYWN0aXZhdGUodGhpcy5pZCwgdGhpcyk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIHN0b3AoKSB7XG4gICAgICAgIHRoaXMuaXNBY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgbG9vcC5kZWFjdGl2YXRlKHRoaXMuaWQpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBvbmNlKCkge1xuICAgICAgICB0aGlzLm9uQ2xlYW51cCA9ICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuc3RvcCgpO1xuICAgICAgICAgICAgdGhpcy5vbkNsZWFudXAgPSB1bmRlZmluZWQ7XG4gICAgICAgIH07XG5cbiAgICAgICAgdGhpcy5zdGFydCgpO1xuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIC8qXG4gICAgICAgICMgR2V0IGRlZmF1bHQgQWN0aW9uIHByb3BlcnRpZXNcblxuICAgICAgICBAcmV0dXJuIFtvYmplY3RdXG4gICAgKi9cbiAgICBnZXREZWZhdWx0UHJvcHMoKSB7XG4gICAgICAgIHJldHVybiB7fTtcbiAgICB9XG5cbiAgICAvKlxuICAgICAgICAjIEV4dGVuZCB0aGlzIFByb2Nlc3Mgd2l0aCBuZXcgcHJvcGVydGllc1xuICAgICAgICAjIyBSZXR1cm5zIG5ldyBpbnN0YW5jZSBvZiB0aGlzIFByb2Nlc3MncyBgcHJvdG90eXBlYCB3aXRoIGV4aXN0aW5nIGFuZCBuZXcgcHJvcGVydGllc1xuXG4gICAgICAgIEBwYXJhbSBbb2JqZWN0XSAob3B0aW9uYWwpXG4gICAgICAgIEByZXR1cm4gW1Byb2Nlc3NdXG4gICAgKi9cbiAgICBpbmhlcml0KHByb3BzKSB7XG4gICAgICAgIHJldHVybiBuZXcgdGhpcy5jb25zdHJ1Y3Rvcih7IC4uLnRoaXMsIHByb3BzIH0pO1xuICAgIH1cbn1cbiJdfQ==

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	exports.__esModule = true;
	
	var _Process2 = __webpack_require__(6);
	
	var _Process3 = _interopRequireDefault(_Process2);
	
	var _utils = __webpack_require__(14);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Input = function (_Process) {
	    _inherits(Input, _Process);
	
	    function Input(initialValues, poll) {
	        _classCallCheck(this, Input);
	
	        var _this = _possibleConstructorReturn(this, _Process.call(this));
	
	        _this.state = {};
	        _this.offset = {};
	
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
	        this.state = _extends({}, this.state, { props: props });
	    };
	
	    return Input;
	}(_Process3.default);
	
	exports.default = Input;
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9pbnB1dC9JbnB1dC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUdxQjs7O0FBQ2pCLGFBRGlCLEtBQ2pCLENBQVksYUFBWixFQUEyQixJQUEzQixFQUFpQzs4QkFEaEIsT0FDZ0I7O3FEQUM3QixxQkFENkI7O0FBRTdCLGNBQUssS0FBTCxHQUFhLEVBQWIsQ0FGNkI7QUFHN0IsY0FBSyxNQUFMLEdBQWMsRUFBZCxDQUg2Qjs7QUFLN0IsWUFBSSxtQkFBTyxJQUFQLENBQUosRUFBa0I7QUFDZCxrQkFBSyxZQUFMLEdBQW9CO3VCQUFNLE1BQUssTUFBTCxDQUFZLE1BQUssSUFBTCxFQUFaO2FBQU4sQ0FETjtTQUFsQjtxQkFMNkI7S0FBakM7Ozs7Ozs7QUFEaUIsb0JBZ0JqQix5QkFBTyxPQUFPO0FBQ1YsYUFBSyxLQUFMLGdCQUFrQixLQUFLLEtBQUwsSUFBWSxlQUE5QixDQURVOzs7V0FoQkciLCJmaWxlIjoiSW5wdXQuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL01hdHQvU2l0ZXMvcG9wbW90aW9uIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFByb2Nlc3MgZnJvbSAnLi4vcHJvY2Vzcy9Qcm9jZXNzJztcbmltcG9ydCB7IGlzRnVuYyB9IGZyb20gJy4uL2luYy91dGlscyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIElucHV0IGV4dGVuZHMgUHJvY2VzcyB7XG4gICAgY29uc3RydWN0b3IoaW5pdGlhbFZhbHVlcywgcG9sbCkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLnN0YXRlID0ge307XG4gICAgICAgIHRoaXMub2Zmc2V0ID0ge307XG5cbiAgICAgICAgaWYgKGlzRnVuYyhwb2xsKSkge1xuICAgICAgICAgICAgdGhpcy5vbkZyYW1lU3RhcnQgPSAoKSA9PiB0aGlzLmxhdGVzdCh0aGlzLnBvbGwoKSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKlxuICAgICAgICBNYW51YWxseSBhZGQgbGF0ZXN0IHZhbHVlc1xuXG4gICAgICAgIEBwYXJhbSBbb2JqZWN0XVxuICAgICovXG4gICAgbGF0ZXN0KHByb3BzKSB7XG4gICAgICAgIHRoaXMuc3RhdGUgPSB7IC4uLnRoaXMuc3RhdGUsIHByb3BzIH07XG4gICAgfVxufVxuIl19

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _utils = __webpack_require__(14);
	
	exports.default = function (_ref) {
	  var element = _ref.element;
	  var state = _ref.state;
	  return (0, _utils.each)(state, function (value, key) {
	    return element.setAttribute(key, value);
	  });
	};
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9yZW5kZXIvYXR0ci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7a0JBRWU7TUFBRztNQUFTO1NBQVksaUJBQUssS0FBTCxFQUFZLFVBQUMsS0FBRCxFQUFRLEdBQVI7V0FBZ0IsUUFBUSxZQUFSLENBQXFCLEdBQXJCLEVBQTBCLEtBQTFCO0dBQWhCO0NBQXBDIiwiZmlsZSI6ImF0dHIuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL01hdHQvU2l0ZXMvcG9wbW90aW9uIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZWFjaCB9IGZyb20gJy4uL2luYy91dGlscyc7XG5cbmV4cG9ydCBkZWZhdWx0ICh7IGVsZW1lbnQsIHN0YXRlIH0pID0+IGVhY2goc3RhdGUsICh2YWx1ZSwga2V5KSA9PiBlbGVtZW50LnNldEF0dHJpYnV0ZShrZXksIHZhbHVlKSk7Il19

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _stateMap = __webpack_require__(35);
	
	var _stateMap2 = _interopRequireDefault(_stateMap);
	
	var _valueTypeMap = __webpack_require__(36);
	
	var _valueTypeMap2 = _interopRequireDefault(_valueTypeMap);
	
	var _prefixer = __webpack_require__(37);
	
	var _prefixer2 = _interopRequireDefault(_prefixer);
	
	var _build = __webpack_require__(38);
	
	var _build2 = _interopRequireDefault(_build);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/*
	    Render CSS to provided element
	
	    @param { DOMElement, Object }
	*/
	function renderCSS(_ref) {
	    var element = _ref.element;
	    var state = _ref.state;
	
	    element.style.cssText += ';' + (0, _build2.default)(state);
	}
	
	/*
	    Get CSS property of element
	
	    @param [DOMElement]
	    @param [string]
	    @return [var]
	*/
	renderCSS.get = function (element, key) {
	    key = (0, _prefixer2.default)(key);
	
	    if (key) {
	        return window.getComputedStyle(element, null)[key];
	    }
	};
	
	renderCSS.stateMap = _stateMap2.default;
	renderCSS.valueTypeMap = _valueTypeMap2.default;
	
	exports.default = renderCSS;
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9yZW5kZXIvY3NzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVVBLFNBQVMsU0FBVCxPQUF1QztRQUFsQix1QkFBa0I7UUFBVCxtQkFBUzs7QUFDbkMsWUFBUSxLQUFSLENBQWMsT0FBZCxJQUF5QixNQUFNLHFCQUFvQixLQUFwQixDQUFOLENBRFU7Q0FBdkM7Ozs7Ozs7OztBQVdBLFVBQVUsR0FBVixHQUFnQixVQUFDLE9BQUQsRUFBVSxHQUFWLEVBQWtCO0FBQzlCLFVBQU0sd0JBQVMsR0FBVCxDQUFOLENBRDhCOztBQUc5QixRQUFJLEdBQUosRUFBUztBQUNMLGVBQU8sT0FBTyxnQkFBUCxDQUF3QixPQUF4QixFQUFpQyxJQUFqQyxFQUF1QyxHQUF2QyxDQUFQLENBREs7S0FBVDtDQUhZOztBQVFoQixVQUFVLFFBQVY7QUFDQSxVQUFVLFlBQVY7O2tCQUVlIiwiZmlsZSI6ImNzcy5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvTWF0dC9TaXRlcy9wb3Btb3Rpb24iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3RhdGVNYXAgZnJvbSAnLi9jc3Mvc3RhdGUtbWFwJztcbmltcG9ydCB2YWx1ZVR5cGVNYXAgZnJvbSAnLi9jc3MvdmFsdWUtdHlwZS1tYXAnO1xuaW1wb3J0IHByZWZpeGVyIGZyb20gJy4vY3NzL3ByZWZpeGVyJztcbmltcG9ydCBidWlsZFByb3BlcnR5U3RyaW5nIGZyb20gJy4vY3NzL2J1aWxkJztcblxuLypcbiAgICBSZW5kZXIgQ1NTIHRvIHByb3ZpZGVkIGVsZW1lbnRcblxuICAgIEBwYXJhbSB7IERPTUVsZW1lbnQsIE9iamVjdCB9XG4qL1xuZnVuY3Rpb24gcmVuZGVyQ1NTKHsgZWxlbWVudCwgc3RhdGUgfSkge1xuICAgIGVsZW1lbnQuc3R5bGUuY3NzVGV4dCArPSAnOycgKyBidWlsZFByb3BlcnR5U3RyaW5nKHN0YXRlKTtcbn1cblxuLypcbiAgICBHZXQgQ1NTIHByb3BlcnR5IG9mIGVsZW1lbnRcblxuICAgIEBwYXJhbSBbRE9NRWxlbWVudF1cbiAgICBAcGFyYW0gW3N0cmluZ11cbiAgICBAcmV0dXJuIFt2YXJdXG4qL1xucmVuZGVyQ1NTLmdldCA9IChlbGVtZW50LCBrZXkpID0+IHtcbiAgICBrZXkgPSBwcmVmaXhlcihrZXkpO1xuXG4gICAgaWYgKGtleSkge1xuICAgICAgICByZXR1cm4gd2luZG93LmdldENvbXB1dGVkU3R5bGUoZWxlbWVudCwgbnVsbClba2V5XTtcbiAgICB9XG59O1xuXG5yZW5kZXJDU1Muc3RhdGVNYXAgPSBzdGF0ZU1hcDtcbnJlbmRlckNTUy52YWx1ZVR5cGVNYXAgPSB2YWx1ZVR5cGVNYXA7XG5cbmV4cG9ydCBkZWZhdWx0IHJlbmRlckNTUzsiXX0=

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _utils = __webpack_require__(14);
	
	var _stateMap = __webpack_require__(35);
	
	var _stateMap2 = _interopRequireDefault(_stateMap);
	
	var _valueTypeMap = __webpack_require__(39);
	
	var _valueTypeMap2 = _interopRequireDefault(_valueTypeMap);
	
	var _build = __webpack_require__(40);
	
	var _build2 = _interopRequireDefault(_build);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function renderSVG(_ref) {
	    var state = _ref.state;
	    var element = _ref.element;
	    var svgOrigin = _ref.svgOrigin;
	
	    (0, _utils.each)((0, _build2.default)(state, svgOrigin), function (value, key) {
	        return element.setAttribute(key, value);
	    });
	}
	
	renderSVG.init = function (actor) {
	    var bBox = actor.element.getBBox();
	    var transformOriginX = actor.values.transformOriginX ? actor.values.transformOriginX.current : 50;
	    var transformOriginY = actor.values.transformOriginY ? actor.values.transformOriginY.current : 50;
	
	    actor.svgOrigin = {
	        x: bBox.width * (transformOriginX / 100) + bBox.x,
	        y: bBox.height * (transformOriginY / 100) + bBox.y
	    };
	};
	
	renderSVG.stateMap = _stateMap2.default;
	renderSVG.valueTypeMap = _valueTypeMap2.default;
	
	exports.default = renderSVG;
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9yZW5kZXIvc3ZnLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBS0EsU0FBUyxTQUFULE9BQWtEO1FBQTdCLG1CQUE2QjtRQUF0Qix1QkFBc0I7UUFBYiwyQkFBYTs7QUFDOUMscUJBQUsscUJBQU0sS0FBTixFQUFhLFNBQWIsQ0FBTCxFQUE4QixVQUFDLEtBQUQsRUFBUSxHQUFSO2VBQWdCLFFBQVEsWUFBUixDQUFxQixHQUFyQixFQUEwQixLQUExQjtLQUFoQixDQUE5QixDQUQ4QztDQUFsRDs7QUFJQSxVQUFVLElBQVYsR0FBaUIsVUFBQyxLQUFELEVBQVc7QUFDeEIsUUFBTSxPQUFPLE1BQU0sT0FBTixDQUFjLE9BQWQsRUFBUCxDQURrQjtBQUV4QixRQUFNLG1CQUFtQixNQUFNLE1BQU4sQ0FBYSxnQkFBYixHQUFnQyxNQUFNLE1BQU4sQ0FBYSxnQkFBYixDQUE4QixPQUE5QixHQUF3QyxFQUF4RSxDQUZEO0FBR3hCLFFBQU0sbUJBQW1CLE1BQU0sTUFBTixDQUFhLGdCQUFiLEdBQWdDLE1BQU0sTUFBTixDQUFhLGdCQUFiLENBQThCLE9BQTlCLEdBQXdDLEVBQXhFLENBSEQ7O0FBS3hCLFVBQU0sU0FBTixHQUFrQjtBQUNkLFdBQUcsS0FBSyxLQUFMLElBQWMsbUJBQW1CLEdBQW5CLENBQWQsR0FBd0MsS0FBSyxDQUFMO0FBQzNDLFdBQUcsS0FBSyxNQUFMLElBQWUsbUJBQW1CLEdBQW5CLENBQWYsR0FBeUMsS0FBSyxDQUFMO0tBRmhELENBTHdCO0NBQVg7O0FBV2pCLFVBQVUsUUFBVjtBQUNBLFVBQVUsWUFBVjs7a0JBRWUiLCJmaWxlIjoic3ZnLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9NYXR0L1NpdGVzL3BvcG1vdGlvbiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGVhY2ggfSBmcm9tICcuLi9pbmMvdXRpbHMnO1xuaW1wb3J0IHN0YXRlTWFwIGZyb20gJy4vY3NzL3N0YXRlLW1hcCc7XG5pbXBvcnQgdmFsdWVUeXBlTWFwIGZyb20gJy4vc3ZnL3ZhbHVlLXR5cGUtbWFwJztcbmltcG9ydCBidWlsZCBmcm9tICcuL3N2Zy9idWlsZCc7XG5cbmZ1bmN0aW9uIHJlbmRlclNWRyh7IHN0YXRlLCBlbGVtZW50LCBzdmdPcmlnaW4gfSkge1xuICAgIGVhY2goYnVpbGQoc3RhdGUsIHN2Z09yaWdpbiksICh2YWx1ZSwga2V5KSA9PiBlbGVtZW50LnNldEF0dHJpYnV0ZShrZXksIHZhbHVlKSk7XG59XG5cbnJlbmRlclNWRy5pbml0ID0gKGFjdG9yKSA9PiB7XG4gICAgY29uc3QgYkJveCA9IGFjdG9yLmVsZW1lbnQuZ2V0QkJveCgpO1xuICAgIGNvbnN0IHRyYW5zZm9ybU9yaWdpblggPSBhY3Rvci52YWx1ZXMudHJhbnNmb3JtT3JpZ2luWCA/IGFjdG9yLnZhbHVlcy50cmFuc2Zvcm1PcmlnaW5YLmN1cnJlbnQgOiA1MDtcbiAgICBjb25zdCB0cmFuc2Zvcm1PcmlnaW5ZID0gYWN0b3IudmFsdWVzLnRyYW5zZm9ybU9yaWdpblkgPyBhY3Rvci52YWx1ZXMudHJhbnNmb3JtT3JpZ2luWS5jdXJyZW50IDogNTA7XG5cbiAgICBhY3Rvci5zdmdPcmlnaW4gPSB7XG4gICAgICAgIHg6IGJCb3gud2lkdGggKiAodHJhbnNmb3JtT3JpZ2luWCAvIDEwMCkgKyBiQm94LngsXG4gICAgICAgIHk6IGJCb3guaGVpZ2h0ICogKHRyYW5zZm9ybU9yaWdpblkgLyAxMDApICsgYkJveC55XG4gICAgfTtcbn07XG5cbnJlbmRlclNWRy5zdGF0ZU1hcCA9IHN0YXRlTWFwO1xucmVuZGVyU1ZHLnZhbHVlVHlwZU1hcCA9IHZhbHVlVHlwZU1hcDtcblxuZXhwb3J0IGRlZmF1bHQgcmVuZGVyU1ZHOyJdfQ==

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _build = __webpack_require__(43);
	
	var _build2 = _interopRequireDefault(_build);
	
	var _stateMap = __webpack_require__(44);
	
	var _stateMap2 = _interopRequireDefault(_stateMap);
	
	var _valueTypeMap = __webpack_require__(39);
	
	var _valueTypeMap2 = _interopRequireDefault(_valueTypeMap);
	
	var _svg = __webpack_require__(10);
	
	var _svg2 = _interopRequireDefault(_svg);
	
	var _utils = __webpack_require__(14);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var renderSVGPath = function (actor) {
	    (0, _svg2.default)(actor);
	    (0, _utils.each)((0, _build2.default)(actor.state, actor.pathLength), function (value, key) {
	        return actor.element.setAttribute(key, value);
	    });
	};
	
	renderSVGPath.init = function (actor) {
	    actor.pathLength = actor.element.getTotalLength();
	    _svg2.default.init(actor);
	};
	
	renderSVGPath.stateMap = _stateMap2.default;
	renderSVGPath.valueTypeMap = _valueTypeMap2.default;
	
	exports.default = renderSVGPath;
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9yZW5kZXIvc3ZnLXBhdGguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTUEsSUFBTSxnQkFBZ0IsVUFBQyxLQUFELEVBQVc7QUFDN0IsdUJBQVUsS0FBVixFQUQ2QjtBQUU3QixxQkFBSyxxQkFBTSxNQUFNLEtBQU4sRUFBYSxNQUFNLFVBQU4sQ0FBeEIsRUFBMkMsVUFBQyxLQUFELEVBQVEsR0FBUjtlQUFnQixNQUFNLE9BQU4sQ0FBYyxZQUFkLENBQTJCLEdBQTNCLEVBQWdDLEtBQWhDO0tBQWhCLENBQTNDLENBRjZCO0NBQVg7O0FBS3RCLGNBQWMsSUFBZCxHQUFxQixVQUFDLEtBQUQsRUFBVztBQUM1QixVQUFNLFVBQU4sR0FBbUIsTUFBTSxPQUFOLENBQWMsY0FBZCxFQUFuQixDQUQ0QjtBQUU1QixrQkFBVSxJQUFWLENBQWUsS0FBZixFQUY0QjtDQUFYOztBQUtyQixjQUFjLFFBQWQ7QUFDQSxjQUFjLFlBQWQ7O2tCQUVlIiwiZmlsZSI6InN2Zy1wYXRoLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9NYXR0L1NpdGVzL3BvcG1vdGlvbiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBidWlsZCBmcm9tICcuL3N2Zy1wYXRoL2J1aWxkJztcbmltcG9ydCBzdGF0ZU1hcCBmcm9tICcuL3N2Zy1wYXRoL3N0YXRlLW1hcCc7XG5pbXBvcnQgdmFsdWVUeXBlTWFwIGZyb20gJy4vc3ZnL3ZhbHVlLXR5cGUtbWFwJztcbmltcG9ydCByZW5kZXJTVkcgZnJvbSAnLi9zdmcnO1xuaW1wb3J0IHsgZWFjaCB9IGZyb20gJy4uL2luYy91dGlscyc7XG5cbmNvbnN0IHJlbmRlclNWR1BhdGggPSAoYWN0b3IpID0+IHtcbiAgICByZW5kZXJTVkcoYWN0b3IpO1xuICAgIGVhY2goYnVpbGQoYWN0b3Iuc3RhdGUsIGFjdG9yLnBhdGhMZW5ndGgpLCAodmFsdWUsIGtleSkgPT4gYWN0b3IuZWxlbWVudC5zZXRBdHRyaWJ1dGUoa2V5LCB2YWx1ZSkpO1xufTtcblxucmVuZGVyU1ZHUGF0aC5pbml0ID0gKGFjdG9yKSA9PiB7XG4gICAgYWN0b3IucGF0aExlbmd0aCA9IGFjdG9yLmVsZW1lbnQuZ2V0VG90YWxMZW5ndGgoKTtcbiAgICByZW5kZXJTVkcuaW5pdChhY3Rvcik7XG59O1xuXG5yZW5kZXJTVkdQYXRoLnN0YXRlTWFwID0gc3RhdGVNYXA7XG5yZW5kZXJTVkdQYXRoLnZhbHVlVHlwZU1hcCA9IHZhbHVlVHlwZU1hcDtcblxuZXhwb3J0IGRlZmF1bHQgcmVuZGVyU1ZHUGF0aDsiXX0=

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _createEasing = __webpack_require__(41);
	
	var _createEasing2 = _interopRequireDefault(_createEasing);
	
	var _createBezier = __webpack_require__(42);
	
	var _createBezier2 = _interopRequireDefault(_createBezier);
	
	var _utils = __webpack_require__(14);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// Values
	var DEFAULT_BACK_STRENGTH = 1.525; /*
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
	(0, _utils.each)(baseEasing, function (baseEase, key) {
	    var easingFunction = (0, _createEasing2.default)(baseEase);
	    baseEasing[key + 'In'] = easingFunction.in;
	    baseEasing[key + 'Out'] = easingFunction.out;
	    baseEasing[key + 'InOut'] = easingFunction.inOut;
	});
	
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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hY3Rpb25zL2Vhc2luZy9wcmVzZXQtZWFzaW5nLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBK0JBLElBQU0sd0JBQXdCLEtBQXhCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDTixJQUFNLHVCQUF1QixDQUF2Qjs7Ozs7Ozs7QUFRTixJQUFJLGFBQWE7QUFDYixVQUFNLFVBQUMsUUFBRDtZQUFXLGlFQUFXO3dCQUF5QixVQUFZO0tBQTNEO0FBQ04sVUFBTTtlQUFZLElBQUksS0FBSyxHQUFMLENBQVMsS0FBSyxJQUFMLENBQVUsUUFBVixDQUFULENBQUo7S0FBWjtBQUNOLFVBQU0sVUFBQyxRQUFEO1lBQVcsaUVBQVc7ZUFBMEIsUUFBQyxHQUFXLFFBQVgsSUFBd0IsQ0FBQyxXQUFXLENBQVgsQ0FBRCxHQUFpQixRQUFqQixHQUE0QixRQUE1QixDQUF6QjtLQUFoRDtDQUhOOzs7QUFPSixJQUFNLHNCQUFzQixVQUFDLFFBQUQ7V0FBYyxVQUFDLFFBQUQ7ZUFBYyxXQUFXLElBQVgsQ0FBZ0IsUUFBaEIsRUFBMEIsUUFBMUI7S0FBZDtDQUFkOztBQUU1QixDQUFDLE9BQUQsRUFBVSxPQUFWLEVBQW1CLE9BQW5CLEVBQTRCLE9BQTVCLENBQW9DLFVBQUMsVUFBRCxFQUFhLENBQWI7V0FBbUIsV0FBVyxVQUFYLElBQXlCLG9CQUFvQixJQUFJLENBQUosQ0FBN0M7Q0FBbkIsQ0FBcEM7OztBQUdBLGlCQUFLLFVBQUwsRUFBaUIsVUFBQyxRQUFELEVBQVcsR0FBWCxFQUFtQjtBQUNoQyxRQUFJLGlCQUFpQiw0QkFBcUIsUUFBckIsQ0FBakIsQ0FENEI7QUFFaEMsZUFBYyxVQUFkLElBQXlCLGVBQWUsRUFBZixDQUZPO0FBR2hDLGVBQWMsV0FBZCxJQUEwQixlQUFlLEdBQWYsQ0FITTtBQUloQyxlQUFjLGFBQWQsSUFBNEIsZUFBZSxLQUFmLENBSkk7Q0FBbkIsQ0FBakI7O0FBT0EsV0FBVyxNQUFYLEdBQW9CO1dBQVk7Q0FBWjtBQUNwQixXQUFXLFVBQVgsR0FBd0IsVUFBQyxRQUFEO1FBQVcsaUVBQVc7V0FDMUMsQ0FBRSxZQUFVLENBQVYsQ0FBRCxHQUFnQixDQUFoQixHQUFxQixNQUFNLFdBQVcsTUFBWCxDQUFrQixRQUFsQixFQUE0QixRQUE1QixDQUFOLEdBQStDLE9BQU8sSUFBSSxLQUFLLEdBQUwsQ0FBUyxDQUFULEVBQVksQ0FBQyxFQUFELElBQU8sV0FBVyxDQUFYLENBQVAsQ0FBaEIsQ0FBUDtDQURqRDs7QUFHeEIsV0FBVyxjQUFYO0FBQ0EsV0FBVyxXQUFYO0FBQ0EsV0FBVyxVQUFYLEdBQXdCLFVBQUMsTUFBRDtzQ0FBWTs7OztXQUFTLFVBQUMsUUFBRDtlQUFjLHlCQUFPLGlCQUFhLEtBQXBCO0tBQWQ7Q0FBckI7O2tCQUVUIiwiZmlsZSI6InByZXNldC1lYXNpbmcuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL01hdHQvU2l0ZXMvcG9wbW90aW9uIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAgICBFYXNpbmcgZnVuY3Rpb25zXG4gICAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIFxuICAgIEdlbmVyYXRlcyBhbmQgcHJvdmlkZXMgZWFzaW5nIGZ1bmN0aW9ucyBiYXNlZCBvbiBiYXNlRnVuY3Rpb24gZGVmaW5pdGlvbnNcbiAgICBcbiAgICBBIGNhbGwgdG8gZWFzaW5nRnVuY3Rpb24uZ2V0KCdmdW5jdGlvbk5hbWUnKSByZXR1cm5zIGEgZnVuY3Rpb24gdGhhdCBjYW4gYmUgcGFzc2VkOlxuICAgICAgICBAcGFyYW0gW251bWJlcl06IFByb2dyZXNzIDAtMVxuICAgICAgICBAcGFyYW0gW251bWJlcl0gKG9wdGlvbmFsKTogQW1wIG1vZGlmaWVyLCBvbmx5IGFjY2VwdGVkIGluIHNvbWUgZWFzaW5nIGZ1bmN0aW9uc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYW5kIGlzIHVzZWQgdG8gYWRqdXN0IG92ZXJhbGwgc3RyZW5ndGhcbiAgICAgICAgQHJldHVybiBbbnVtYmVyXTogRWFzZWQgcHJvZ3Jlc3NcbiAgICAgICAgXG4gICAgV2UgY2FuIGdlbmVyYXRlIG5ldyBmdW5jdGlvbnMgYnkgc2VuZGluZyBhbiBlYXNpbmcgZnVuY3Rpb24gdGhyb3VnaCBlYXNpbmdGdW5jdGlvbi5leHRlbmQobmFtZSwgbWV0aG9kKS5cbiAgICBXaGljaCB3aWxsIG1ha2UgbmFtZUluLCBuYW1lT3V0IGFuZCBuYW1lSW5PdXQgZnVuY3Rpb25zIGF2YWlsYWJsZSB0byB1c2UuXG4gICAgICAgIFxuICAgIEVhc2luZyBmdW5jdGlvbnMgZnJvbSBSb2JlcnQgUGVubmVyXG4gICAgaHR0cDovL3d3dy5yb2JlcnRwZW5uZXIuY29tL2Vhc2luZy9cbiAgICAgICAgXG4gICAgQmV6aWVyIGN1cnZlIGludGVycHJldG9yIGNyZWF0ZWQgZnJvbSBHYcOrdGFuIFJlbmF1ZGVhdSdzIG9yaWdpbmFsIEJlemllckVhc2luZyAgXG4gICAgaHR0cHM6Ly9naXRodWIuY29tL2dyZS9iZXppZXItZWFzaW5nL2Jsb2IvbWFzdGVyL2luZGV4LmpzICBcbiAgICBodHRwczovL2dpdGh1Yi5jb20vZ3JlL2Jlemllci1lYXNpbmcvYmxvYi9tYXN0ZXIvTElDRU5TRVxuXG4gICAgQW50aWNpcGF0ZSBlYXNpbmcgY3JlYXRlZCBieSBFbGxpb3QgR2lub1xuICAgIGh0dHBzOi8vdHdpdHRlci5jb20vRWxsaW90R2Vub1xuKi9cbi8vIEltcG9ydHNcbmltcG9ydCBjcmVhdGVFYXNpbmdGdW5jdGlvbiBmcm9tICcuL2NyZWF0ZS1lYXNpbmcnO1xuaW1wb3J0IGN1YmljQmV6aWVyIGZyb20gJy4vY3JlYXRlLWJlemllcic7XG5pbXBvcnQgeyBlYWNoIH0gZnJvbSAnLi4vLi4vaW5jL3V0aWxzJztcblxuLy8gVmFsdWVzXG5jb25zdCBERUZBVUxUX0JBQ0tfU1RSRU5HVEggPSAxLjUyNTtcbmNvbnN0IERFRkFVTFRfUE9XX1NUUkVOR1RIID0gMjtcblxuLypcbiAgICBFYWNoIG9mIHRoZXNlIGJhc2UgZnVuY3Rpb25zIGlzIGFuIGVhc2VJblxuICAgIFxuICAgIE9uIGluaXQsIHdlIHVzZSAubWlycm9yIGFuZCAucmV2ZXJzZSB0byBnZW5lcmF0ZSBlYXNlSW5PdXQgYW5kXG4gICAgZWFzZU91dCBmdW5jdGlvbnMgcmVzcGVjdGl2ZWx5LlxuKi9cbmxldCBiYXNlRWFzaW5nID0ge1xuICAgIGVhc2U6IChwcm9ncmVzcywgc3RyZW5ndGggPSBERUZBVUxUX1BPV19TVFJFTkdUSCkgPT4gcHJvZ3Jlc3MgKiogc3RyZW5ndGgsXG4gICAgY2lyYzogcHJvZ3Jlc3MgPT4gMSAtIE1hdGguc2luKE1hdGguYWNvcyhwcm9ncmVzcykpLFxuICAgIGJhY2s6IChwcm9ncmVzcywgc3RyZW5ndGggPSBERUZBVUxUX0JBQ0tfU1RSRU5HVEgpID0+IChwcm9ncmVzcyAqIHByb2dyZXNzKSAqICgoc3RyZW5ndGggKyAxKSAqIHByb2dyZXNzIC0gc3RyZW5ndGgpXG59O1xuXG4vLyBVdGlsaXR5IGZ1bmN0aW9uc1xuY29uc3QgZ2VuZXJhdGVQb3dlckVhc2luZyA9IChzdHJlbmd0aCkgPT4gKHByb2dyZXNzKSA9PiBiYXNlRWFzaW5nLmVhc2UocHJvZ3Jlc3MsIHN0cmVuZ3RoKTtcblxuWydjdWJpYycsICdxdWFydCcsICdxdWludCddLmZvckVhY2goKGVhc2luZ05hbWUsIGkpID0+IGJhc2VFYXNpbmdbZWFzaW5nTmFtZV0gPSBnZW5lcmF0ZVBvd2VyRWFzaW5nKGkgKyAzKSk7XG5cbi8vIEdlbmVyYXRlIGluL291dC9pbk91dCB2YXJpYXRpb25zXG5lYWNoKGJhc2VFYXNpbmcsIChiYXNlRWFzZSwga2V5KSA9PiB7XG4gICAgbGV0IGVhc2luZ0Z1bmN0aW9uID0gY3JlYXRlRWFzaW5nRnVuY3Rpb24oYmFzZUVhc2UpO1xuICAgIGJhc2VFYXNpbmdbYCR7a2V5fUluYF0gPSBlYXNpbmdGdW5jdGlvbi5pbjtcbiAgICBiYXNlRWFzaW5nW2Ake2tleX1PdXRgXSA9IGVhc2luZ0Z1bmN0aW9uLm91dDtcbiAgICBiYXNlRWFzaW5nW2Ake2tleX1Jbk91dGBdID0gZWFzaW5nRnVuY3Rpb24uaW5PdXQ7XG59KTtcblxuYmFzZUVhc2luZy5saW5lYXIgPSBwcm9ncmVzcyA9PiBwcm9ncmVzcztcbmJhc2VFYXNpbmcuYW50aWNpcGF0ZSA9IChwcm9ncmVzcywgc3RyZW5ndGggPSBERUZBVUxUX0JBQ0tfU1RSRU5HVEgpID0+XG4gICAgKChwcm9ncmVzcyo9MikgPCAxKSA/IDAuNSAqIGJhc2VFYXNpbmcuYmFja0luKHByb2dyZXNzLCBzdHJlbmd0aCkgOiAgMC41ICogKDIgLSBNYXRoLnBvdygyLCAtMTAgKiAocHJvZ3Jlc3MgLSAxKSkpO1xuXG5iYXNlRWFzaW5nLmVhc2luZ0Z1bmN0aW9uID0gY3JlYXRlRWFzaW5nRnVuY3Rpb247XG5iYXNlRWFzaW5nLmN1YmljQmV6aWVyID0gY3ViaWNCZXppZXI7XG5iYXNlRWFzaW5nLm1vZGlmeUVhc2UgPSAoZWFzaW5nLCAuLi5hcmdzKSA9PiAocHJvZ3Jlc3MpID0+IGVhc2luZyhwcm9ncmVzcywgLi4uYXJncyk7XG5cbmV4cG9ydCBkZWZhdWx0IGJhc2VFYXNpbmc7Il19

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports.stepProgress = exports.speedPerSecond = exports.speedPerFrame = exports.smooth = exports.restrict = exports.relativeValue = exports.random = exports.radiansToDegrees = exports.pointFromAngleAndDistance = exports.offset = exports.getProgressFromValue = exports.getValueFromProgress = exports.hypotenuse = exports.distance = exports.dilate = exports.degreesToRadians = exports.angle = undefined;
	
	var _utils = __webpack_require__(14);
	
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
	
	    (0, _utils.each)(b, function (value, key) {
	        offset[key] = (0, _utils.hasProperty)(a, key) ? value - a[key] : 0;
	    });
	
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
	//# sourceMappingURL=data:application/json;base64,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Ozs7Ozs7OztBQVVqQixJQUFNLDBCQUFTLFVBQUMsUUFBRCxFQUFXLFFBQVgsRUFBcUIsUUFBckI7UUFBK0Isa0VBQVk7V0FBTSxzQkFBVSxXQUFZLFlBQVksV0FBVyxRQUFYLENBQVosR0FBbUMsS0FBSyxHQUFMLENBQVMsU0FBVCxFQUFvQixRQUFwQixDQUFuQztDQUF2RTs7Ozs7Ozs7QUFRZixJQUFNLHdDQUFnQixVQUFDLEdBQUQsRUFBTSxhQUFOO1dBQXdCLGlCQUFDLENBQU0sR0FBTixDQUFELEdBQWUsT0FBTyxPQUFPLGFBQVAsQ0FBUCxHQUErQixDQUE5QztDQUF4Qjs7Ozs7Ozs7QUFRdEIsSUFBTSwwQ0FBaUIsVUFBQyxRQUFELEVBQVcsYUFBWDtXQUE2QixZQUFZLE9BQU8sYUFBUCxDQUFaO0NBQTdCOzs7Ozs7Ozs7QUFTdkIsSUFBTSxzQ0FBZSxVQUFDLFFBQUQsRUFBVyxLQUFYLEVBQXFCO0FBQzdDLFFBQU0sVUFBVSxLQUFLLFFBQVEsQ0FBUixDQUFMLENBRDZCO0FBRTdDLFFBQU0sU0FBUyxJQUFLLElBQUksS0FBSixDQUZ5QjtBQUc3QyxRQUFNLG1CQUFtQixLQUFLLEdBQUwsQ0FBUyxXQUFXLE1BQVgsRUFBbUIsQ0FBNUIsQ0FBbkIsQ0FIdUM7O0FBSzdDLFdBQU8sS0FBSyxLQUFMLENBQVcsbUJBQW1CLE9BQW5CLENBQVgsR0FBeUMsT0FBekMsQ0FMc0M7Q0FBckIiLCJmaWxlIjoiY2FsYy5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvTWF0dC9TaXRlcy9wb3Btb3Rpb24iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICAgIGVhY2gsXG4gICAgaGFzUHJvcGVydHksXG4gICAgaXNOdW0sXG4gICAgc3BsaXRWYWx1ZVVuaXQsXG4gICAgdG9EZWNpbWFsXG59IGZyb20gJy4vdXRpbHMnO1xuXG5jb25zdCBaRVJPX1BPSU5UID0ge1xuICAgIHg6IDAsXG4gICAgeTogMCxcbiAgICB6OiAwXG59O1xuXG5jb25zdCBkaXN0YW5jZTFEID0gKGEsIGIpID0+IE1hdGguYWJzKGEgLSBiKTtcblxuLypcbiAgICBBbmdsZSBiZXR3ZWVuIHBvaW50c1xuICAgIFxuICAgIFRyYW5zbGF0ZXMgdGhlIGh5cG90aGV0aWNhbCBsaW5lIHNvIHRoYXQgdGhlICdmcm9tJyBjb29yZGluYXRlc1xuICAgIGFyZSBhdCAwLDAsIHRoZW4gcmV0dXJuIHRoZSBhbmdsZSB1c2luZyAuYW5nbGVGcm9tQ2VudGVyKClcbiAgICBcbiAgICBAcGFyYW0gW29iamVjdF06IFggYW5kIFkgY29vcmRpbmF0ZXMgb2YgZnJvbSBwb2ludFxuICAgIEBwYXJhbSBbb2JqZWN0XTogWCBhbmQgWSBjb3JkaW5hdGVzIG9mIHRvIHBvaW50XG4gICAgQHJldHVybiBbcmFkaWFuXTogQW5nbGUgYmV0d2VlbiB0aGUgdHdvIHBvaW50cyBpbiByYWRpYW5zXG4qL1xuZXhwb3J0IGNvbnN0IGFuZ2xlID0gKGEsIGIgPSBaRVJPX1BPSU5UKSA9PiByYWRpYW5zVG9EZWdyZWVzKE1hdGguYXRhbjIoYS54IC0gYi54LCBhLnkgLSBiLnkpKTtcblxuLypcbiAgICBDb252ZXJ0IGRlZ3JlZXMgdG8gcmFkaWFuc1xuICAgIFxuICAgIEBwYXJhbSBbbnVtYmVyXTogVmFsdWUgaW4gZGVncmVlc1xuICAgIEByZXR1cm4gW251bWJlcl06IFZhbHVlIGluIHJhZGlhbnNcbiovXG5leHBvcnQgY29uc3QgZGVncmVlc1RvUmFkaWFucyA9IChkZWdyZWVzKSA9PiBkZWdyZWVzICogTWF0aC5QSSAvIDE4MDtcblxuLypcbiAgICBEaWxhdGVcbiAgICBcbiAgICBDaGFuZ2UgdGhlIHByb2dyZXNzaW9uIGJldHdlZW4gYSBhbmQgYiBhY2NvcmRpbmcgdG8gZGlsYXRpb24uXG4gICAgXG4gICAgU28gZGlsYXRpb24gPSAwLjUgd291bGQgY2hhbmdlXG4gICAgXG4gICAgYSAtLS0tLS0tLS0gYlxuICAgIFxuICAgIHRvXG4gICAgXG4gICAgYSAtLS0tIGJcbiAgICBcbiAgICBAcGFyYW0gW251bWJlcl06IFByZXZpb3VzIHZhbHVlXG4gICAgQHBhcmFtIFtudW1iZXJdOiBDdXJyZW50IHZhbHVlXG4gICAgQHBhcmFtIFtudW1iZXJdOiBEaWxhdGUgcHJvZ3Jlc3MgYnkgeFxuICAgIEByZXR1cm4gW251bWJlcl06IFByZXZpb3VzIHZhbHVlIHBsdXMgdGhlIGRpbGF0ZWQgZGlmZmVyZW5jZVxuKi9cbmV4cG9ydCBjb25zdCBkaWxhdGUgPSAoYSwgYiwgZGlsYXRpb24pID0+IGEgKyAoKGIgLSBhKSAqIGRpbGF0aW9uKTtcblxuLypcbiAgICBEaXN0YW5jZVxuICAgIFxuICAgIFJldHVybnMgdGhlIGRpc3RhbmNlIGJldHdlZW4gdHdvIG4gZGltZW5zaW9uYWwgcG9pbnRzLlxuICAgIFxuICAgIEBwYXJhbSBbb2JqZWN0L251bWJlcl06IHggYW5kIHkgb3IganVzdCB4IG9mIHBvaW50IEFcbiAgICBAcGFyYW0gW29iamVjdC9udW1iZXJdOiAob3B0aW9uYWwpOiB4IGFuZCB5IG9yIGp1c3QgeCBvZiBwb2ludCBCXG4gICAgQHJldHVybiBbbnVtYmVyXTogVGhlIGRpc3RhbmNlIGJldHdlZW4gdGhlIHR3byBwb2ludHNcbiovXG5leHBvcnQgY29uc3QgZGlzdGFuY2UgPSAoYSwgYiA9IFpFUk9fUE9JTlQpID0+IHtcbiAgICAvLyAxRCBkaW1lbnNpb25zXG4gICAgaWYgKGlzTnVtKGEpKSB7XG4gICAgICAgIHJldHVybiBkaXN0YW5jZTFEKGEsIGIpO1xuXG4gICAgLy8gTXVsdGktZGltZW5zaW9uYWxcbiAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCB4RGVsdGEgPSBkaXN0YW5jZTFEKGEueCwgYi54KTtcbiAgICAgICAgY29uc3QgeURlbHRhID0gZGlzdGFuY2UxRChhLnksIGIueSk7XG4gICAgICAgIGNvbnN0IHpEZWx0YSA9IChpc051bShhLnopKSA/IGRpc3RhbmNlMUQoYS56LCBiLnopIDogMDtcblxuICAgICAgICByZXR1cm4gTWF0aC5zcXJ0KCh4RGVsdGEgKiogMikgKyAoeURlbHRhICoqIDIpICsgKHpEZWx0YSAqKiAyKSk7XG4gICAgfVxufTtcbiBcbi8qXG4gICAgSHlwb3RlbnVzZVxuICAgIFxuICAgIFJldHVybnMgdGhlIGh5cG90ZW51c2UsIHNpZGUgQywgZ2l2ZW4gdGhlIGxlbmd0aHMgb2Ygc2lkZXMgQSBhbmQgQi5cbiAgICBcbiAgICBAcGFyYW0gW251bWJlcl06IExlbmd0aCBvZiBBXG4gICAgQHBhcmFtIFtudW1iZXJdOiBMZW5ndGggb2YgQlxuICAgIEByZXR1cm4gW251bWJlcl06IExlbmd0aCBvZiBDXG4qL1xuZXhwb3J0IGNvbnN0IGh5cG90ZW51c2UgPSAoYSwgYikgPT4gTWF0aC5zcXJ0KChhICogYSkgKyAoYiAqIGIpKTtcblxuLypcbiAgICBWYWx1ZSBpbiByYW5nZSBmcm9tIHByb2dyZXNzXG4gICAgXG4gICAgR2l2ZW4gYSBsb3dlciBsaW1pdCBhbmQgYW4gdXBwZXIgbGltaXQsIHdlIHJldHVybiB0aGUgdmFsdWUgd2l0aGluXG4gICAgdGhhdCByYW5nZSBhcyBleHByZXNzZWQgYnkgcHJvZ3Jlc3MgKGEgbnVtYmVyIGZyb20gMC0xKVxuICAgIFxuICAgIEBwYXJhbSBbbnVtYmVyXTogVGhlIHByb2dyZXNzIGJldHdlZW4gbG93ZXIgYW5kIHVwcGVyIGxpbWl0cyBleHByZXNzZWQgMC0xXG4gICAgQHBhcmFtIFtudW1iZXJdOiBMb3dlciBsaW1pdCBvZiByYW5nZVxuICAgIEBwYXJhbSBbbnVtYmVyXTogVXBwZXIgbGltaXQgb2YgcmFuZ2VcbiAgICBAcmV0dXJuIFtudW1iZXJdOiBWYWx1ZSBhcyBjYWxjdWxhdGVkIGZyb20gcHJvZ3Jlc3Mgd2l0aGluIHJhbmdlIChub3QgbGltaXRlZCB3aXRoaW4gcmFuZ2UpXG4qL1xuZXhwb3J0IGNvbnN0IGdldFZhbHVlRnJvbVByb2dyZXNzID0gKHByb2dyZXNzLCBmcm9tLCB0bykgPT4gKC0gcHJvZ3Jlc3MgKiBmcm9tKSArIChwcm9ncmVzcyAqIHRvKSArIGZyb207XG5cbi8qXG4gICAgUHJvZ3Jlc3Mgd2l0aGluIGdpdmVuIHJhbmdlXG4gICAgXG4gICAgR2l2ZW4gYSBsb3dlciBsaW1pdCBhbmQgYW4gdXBwZXIgbGltaXQsIHdlIHJldHVybiB0aGUgcHJvZ3Jlc3NcbiAgICAoZXhwcmVzc2VkIGFzIGEgbnVtYmVyIDAtMSkgcmVwcmVzZW50ZWQgYnkgdGhlIGdpdmVuIHZhbHVlLCBhbmRcbiAgICBsaW1pdCB0aGF0IHByb2dyZXNzIHRvIHdpdGhpbiAwLTEuXG4gICAgXG4gICAgQHBhcmFtIFtudW1iZXJdOiBWYWx1ZSB0byBmaW5kIHByb2dyZXNzIHdpdGhpbiBnaXZlbiByYW5nZVxuICAgIEBwYXJhbSBbbnVtYmVyXTogTG93ZXIgbGltaXQgXG4gICAgQHBhcmFtIFtudW1iZXJdOiBVcHBlciBsaW1pdFxuICAgIEByZXR1cm4gW251bWJlcl06IFByb2dyZXNzIG9mIHZhbHVlIHdpdGhpbiByYW5nZSBhcyBleHByZXNzZWQgMC0xXG4qL1xuZXhwb3J0IGNvbnN0IGdldFByb2dyZXNzRnJvbVZhbHVlID0gKHZhbHVlLCBmcm9tLCB0bykgPT4gKHZhbHVlIC0gZnJvbSkgLyAodG8gLSBmcm9tKTtcblxuLypcbiAgICBPZmZzZXQgYmV0d2VlbiB0d28gb2JqZWN0cyBvZiBudW1iZXJzXG5cbiAgICBJZiBwcm9wZXJ0eSBpcyBmb3VuZCBpbiBiIG5vdCBwcmVzZW50IGluIGEsIGl0IHdpbGwgcmV0dXJuIGAwYCBmb3IgdGhhdCBwcm9wLlxuICAgIFxuICAgIEBwYXJhbSBbUG9pbnRdOiBGaXJzdCBvYmplY3RcbiAgICBAcGFyYW0gW1BvaW50XTogU2Vjb25kIG9iamVjdFxuICAgIEByZXR1cm4gW09mZnNldF06IERpc3RhbmNlIG1ldHJpY3MgYmV0d2VlbiB0d28gcG9pbnRzXG4qL1xuZXhwb3J0IGNvbnN0IG9mZnNldCA9IChhLCBiKSA9PiB7XG4gICAgY29uc3Qgb2Zmc2V0ID0ge307XG5cbiAgICBlYWNoKGIsICh2YWx1ZSwga2V5KSA9PiB7XG4gICAgICAgIG9mZnNldFtrZXldID0gaGFzUHJvcGVydHkoYSwga2V5KSA/IHZhbHVlIC0gYVtrZXldIDogMDtcbiAgICB9KTtcblxuICAgIHJldHVybiBvZmZzZXQ7XG59O1xuXG4vKlxuICAgIFBvaW50IGZyb20gYW5nbGUgYW5kIGRpc3RhbmNlXG4gICAgXG4gICAgQHBhcmFtIFtvYmplY3RdOiAyRCBwb2ludCBvZiBvcmlnaW5cbiAgICBAcGFyYW0gW251bWJlcl06IEFuZ2xlIGZyb20gb3JpZ2luXG4gICAgQHBhcmFtIFtudW1iZXJdOiBEaXN0YW5jZSBmcm9tIG9yaWdpblxuICAgIEByZXR1cm4gW29iamVjdF06IENhbGN1bGF0ZWQgMkQgcG9pbnRcbiovXG5leHBvcnQgY29uc3QgcG9pbnRGcm9tQW5nbGVBbmREaXN0YW5jZSA9IChvcmlnaW4sIGFuZ2xlLCBkaXN0YW5jZSkgPT4ge1xuICAgIGFuZ2xlID0gZGVncmVlc1RvUmFkaWFucyhhbmdsZSk7XG5cbiAgICByZXR1cm4ge1xuICAgICAgICB4OiBkaXN0YW5jZSAqIE1hdGguY29zKGFuZ2xlKSArIG9yaWdpbi54LFxuICAgICAgICB5OiBkaXN0YW5jZSAqIE1hdGguc2luKGFuZ2xlKSArIG9yaWdpbi55XG4gICAgfTtcbn07XG5cbi8qXG4gICAgQ29udmVydCByYWRpYW5zIHRvIGRlZ3JlZXNcbiAgICBcbiAgICBAcGFyYW0gW251bWJlcl06IFZhbHVlIGluIHJhZGlhbnNcbiAgICBAcmV0dXJuIFtudW1iZXJdOiBWYWx1ZSBpbiBkZWdyZWVzXG4qL1xuZXhwb3J0IGNvbnN0IHJhZGlhbnNUb0RlZ3JlZXMgPSAocmFkaWFucykgPT4gcmFkaWFucyAqIDE4MCAvIE1hdGguUEk7XG5cbi8qXG4gICAgUmV0dXJuIHJhbmRvbSBudW1iZXIgYmV0d2VlbiByYW5nZVxuICAgIFxuICAgIEBwYXJhbSBbbnVtYmVyXSAob3B0aW9uYWwpOiBPdXRwdXQgbWluaW11bVxuICAgIEBwYXJhbSBbbnVtYmVyXSAob3B0aW9uYWwpOiBPdXRwdXQgbWF4aW11bVxuICAgIEByZXR1cm4gW251bWJlcl06IFJhbmRvbSBudW1iZXIgd2l0aGluIHJhbmdlLCBvciAwIGFuZCAxIGlmIG5vbmUgcHJvdmlkZWRcbiovXG5leHBvcnQgY29uc3QgcmFuZG9tID0gKG1pbiA9IDAsIG1heCA9IDEpID0+IE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluKSArIG1pbjtcblxuLypcbiAgICBDYWxjdWxhdGUgcmVsYXRpdmUgdmFsdWVcbiAgICBcbiAgICBUYWtlcyB0aGUgb3BlcmF0b3IgYW5kIHZhbHVlIGZyb20gYSBzdHJpbmcsIGllIFwiKz01XCIsIGFuZCBhcHBsaWVzXG4gICAgdG8gdGhlIGN1cnJlbnQgdmFsdWUgdG8gcmVzb2x2ZSBhIG5ldyB0YXJnZXQuXG4gICAgXG4gICAgQHBhcmFtIFtudW1iZXJdOiBDdXJyZW50IHZhbHVlXG4gICAgQHBhcmFtIFtzdHJpbmddOiBSZWxhdGl2ZSB2YWx1ZVxuICAgIEByZXR1cm4gW251bWJlcl06IE5ldyB2YWx1ZVxuKi9cbmV4cG9ydCBjb25zdCByZWxhdGl2ZVZhbHVlID0gKGN1cnJlbnQsIHJlbGF0aXZlKSA9PiB7XG4gICAgbGV0IG5ld1ZhbHVlID0gY3VycmVudDtcbiAgICBjb25zdCBlcXVhdGlvbiA9IHJlbGF0aXZlLnNwbGl0KCc9Jyk7XG4gICAgY29uc3Qgb3BlcmF0b3IgPSBlcXVhdGlvblswXTtcbiAgICBsZXQgeyB1bml0LCB2YWx1ZSB9ID0gc3BsaXRWYWx1ZVVuaXQoZXF1YXRpb25bMV0pO1xuXG4gICAgdmFsdWUgPSBwYXJzZUZsb2F0KHZhbHVlKTtcblxuICAgIHN3aXRjaCAob3BlcmF0b3IpIHtcbiAgICBjYXNlICcrJzpcbiAgICAgICAgbmV3VmFsdWUgKz0gdmFsdWU7XG4gICAgICAgIGJyZWFrO1xuICAgIGNhc2UgJy0nOlxuICAgICAgICBuZXdWYWx1ZSAtPSB2YWx1ZTtcbiAgICAgICAgYnJlYWs7XG4gICAgY2FzZSAnKic6XG4gICAgICAgIG5ld1ZhbHVlICo9IHZhbHVlO1xuICAgICAgICBicmVhaztcbiAgICBjYXNlICcvJzpcbiAgICAgICAgbmV3VmFsdWUgLz0gdmFsdWU7XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgICBcbiAgICBpZiAodW5pdCkge1xuICAgICAgICBuZXdWYWx1ZSArPSB1bml0O1xuICAgIH1cblxuICAgIHJldHVybiBuZXdWYWx1ZTtcbn07XG5cbi8qXG4gICAgUmVzdHJpY3QgdmFsdWUgdG8gcmFuZ2VcbiAgICBcbiAgICBSZXR1cm4gdmFsdWUgd2l0aGluIHRoZSByYW5nZSBvZiBsb3dlckxpbWl0IGFuZCB1cHBlckxpbWl0XG4gICAgXG4gICAgQHBhcmFtIFtudW1iZXJdOiBWYWx1ZSB0byBrZWVwIHdpdGhpbiByYW5nZVxuICAgIEBwYXJhbSBbbnVtYmVyXTogTG93ZXIgbGltaXQgb2YgcmFuZ2VcbiAgICBAcGFyYW0gW251bWJlcl06IFVwcGVyIGxpbWl0IG9mIHJhbmdlXG4gICAgQHJldHVybiBbbnVtYmVyXTogVmFsdWUgYXMgbGltaXRlZCB3aXRoaW4gZ2l2ZW4gcmFuZ2VcbiovXG5leHBvcnQgY29uc3QgcmVzdHJpY3QgPSAodmFsdWUsIG1pbiwgbWF4KSA9PiBNYXRoLm1heChNYXRoLm1pbih2YWx1ZSwgbWF4KSwgbWluKTtcblxuLypcbiAgICBGcmFtZXJhdGUtaW5kZXBlbmRlbnQgc21vb3RoaW5nXG5cbiAgICBAcGFyYW0gW251bWJlcl06IE5ldyB2YWx1ZVxuICAgIEBwYXJhbSBbbnVtYmVyXTogT2xkIHZhbHVlXG4gICAgQHBhcmFtIFtudW1iZXJdOiBGcmFtZSBkdXJhdGlvblxuICAgIEBwYXJhbSBbbnVtYmVyXSAob3B0aW9uYWwpOiBTbW9vdGhpbmcgKDAgaXMgbm9uZSlcbiovXG5leHBvcnQgY29uc3Qgc21vb3RoID0gKG5ld1ZhbHVlLCBvbGRWYWx1ZSwgZHVyYXRpb24sIHNtb290aGluZyA9IDApID0+IHRvRGVjaW1hbChvbGRWYWx1ZSArIChkdXJhdGlvbiAqIChuZXdWYWx1ZSAtIG9sZFZhbHVlKSAvIE1hdGgubWF4KHNtb290aGluZywgZHVyYXRpb24pKSk7XG5cbi8qXG4gICAgQ29udmVydCB4IHBlciBzZWNvbmQgdG8gcGVyIGZyYW1lIHZlbG9jaXR5IGJhc2VkIG9uIGZwc1xuICAgIFxuICAgIEBwYXJhbSBbbnVtYmVyXTogVW5pdCBwZXIgc2Vjb25kXG4gICAgQHBhcmFtIFtudW1iZXJdOiBGcmFtZSBkdXJhdGlvbiBpbiBtc1xuKi9cbmV4cG9ydCBjb25zdCBzcGVlZFBlckZyYW1lID0gKHhwcywgZnJhbWVEdXJhdGlvbikgPT4gKGlzTnVtKHhwcykpID8geHBzIC8gKDEwMDAgLyBmcmFtZUR1cmF0aW9uKSA6IDA7XG5cbi8qXG4gICAgQ29udmVydCB2ZWxvY2l0eSBpbnRvIHZlbGljaXR5IHBlciBzZWNvbmRcbiAgICBcbiAgICBAcGFyYW0gW251bWJlcl06IFVuaXQgcGVyIGZyYW1lXG4gICAgQHBhcmFtIFtudW1iZXJdOiBGcmFtZSBkdXJhdGlvbiBpbiBtc1xuKi9cbmV4cG9ydCBjb25zdCBzcGVlZFBlclNlY29uZCA9ICh2ZWxvY2l0eSwgZnJhbWVEdXJhdGlvbikgPT4gdmVsb2NpdHkgKiAoMTAwMCAvIGZyYW1lRHVyYXRpb24pO1xuXG4vKlxuICAgIENyZWF0ZSBzdGVwcGVkIHZlcnNpb24gb2YgMC0xIHByb2dyZXNzXG4gICAgXG4gICAgQHBhcmFtIFtudW1iZXJdOiBDdXJyZW50IHZhbHVlXG4gICAgQHBhcmFtIFtpbnRdOiBOdW1iZXIgb2Ygc3RlcHNcbiAgICBAcmV0dXJuIFtudW1iZXJdOiBTdGVwcGVkIHZhbHVlXG4qL1xuZXhwb3J0IGNvbnN0IHN0ZXBQcm9ncmVzcyA9IChwcm9ncmVzcywgc3RlcHMpID0+IHtcbiAgICBjb25zdCBzZWdtZW50ID0gMSAvIChzdGVwcyAtIDEpO1xuICAgIGNvbnN0IHRhcmdldCA9IDEgLSAoMSAvIHN0ZXBzKTtcbiAgICBjb25zdCBwcm9ncmVzc09mVGFyZ2V0ID0gTWF0aC5taW4ocHJvZ3Jlc3MgLyB0YXJnZXQsIDEpO1xuXG4gICAgcmV0dXJuIE1hdGguZmxvb3IocHJvZ3Jlc3NPZlRhcmdldCAvIHNlZ21lbnQpICogc2VnbWVudDtcbn07Il19

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	function push() {
	    var _Array$prototype$push;
	
	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	        args[_key] = arguments[_key];
	    }
	
	    (_Array$prototype$push = Array.prototype.push).call.apply(_Array$prototype$push, [this].concat(args));
	
	    if (this.length >= this._maxSize) {
	        this.shift();
	    }
	}
	
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
	    Create an auto-culling buffer array
	
	    @param [array]
	    @param [int]
	    @return [array]
	*/
	var createBuffer = exports.createBuffer = function () {
	    var maxSize = arguments.length <= 0 || arguments[0] === undefined ? 3 : arguments[0];
	    var array = arguments.length <= 1 || arguments[1] === undefined ? [] : arguments[1];
	
	    array.push = push;
	    array._maxSize = maxSize || 0;
	
	    return array;
	};
	
	var createDelimited = exports.createDelimited = function (values, terms, delimiter, chop) {
	    var combined = '';
	
	    terms.forEach(function (term) {
	        if (values.hasOwnProperty(term)) {
	            combined += values[term] + delimiter;
	        }
	    });
	
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
	var currentTime = exports.currentTime = function () {
	    return HAS_PERFORMANCE_NOW ? performance.now() : new Date().getTime();
	};
	
	/*
	    Iterate over an object and fire a callback for every item in it
	
	    @param [object]: Object to iterate over
	    @param [function]: Callback to fire
	*/
	var each = exports.each = function (object, callback) {
	    var keys = object ? Object.keys(object) : [];
	    var numKeys = keys.length;
	
	    for (var i = 0; i < numKeys; i++) {
	        var key = keys[i];
	        var prop = object[key];
	
	        callback(prop, key, object);
	    }
	};
	
	/*
	    Split color string into map of color properties
	
	    "rgba(255, 255, 255, 0)", ["Red", 'Green", "Blue", "Alpha"]
	
	    { Red: 255... }
	*/
	var getColorValues = exports.getColorValues = function (value, colorTerms) {
	    var colorValues = {};
	    var colors = splitCommaDelimited(getValueFromFunctionString(value));
	
	    colorTerms.forEach(function (term, i) {
	        return colorTerms[term] = colors[i] !== undefined ? colors[i] : 1;
	    });
	
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
	
	    each(a, function (value, key) {
	        if (hasProperty(b, key)) {
	            if (value !== b[key]) {
	                changed = true;
	            }
	        } else {
	            changed = true;
	        }
	    });
	
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
	//# sourceMappingURL=data:application/json;base64,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QyxXQUFPLEtBQUssS0FBTCxDQUFXLE1BQU0sU0FBTixDQUFYLEdBQThCLFNBQTlCLENBRnNDO0NBQXhCIiwiZmlsZSI6InV0aWxzLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9NYXR0L1NpdGVzL3BvcG1vdGlvbiIsInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIHB1c2goLi4uYXJncykge1xuICAgIEFycmF5LnByb3RvdHlwZS5wdXNoLmNhbGwodGhpcywgLi4uYXJncyk7XG5cbiAgICBpZiAodGhpcy5sZW5ndGggPj0gdGhpcy5fbWF4U2l6ZSkge1xuICAgICAgICB0aGlzLnNoaWZ0KCk7XG4gICAgfVxufVxuXG5jb25zdCBDQU1FTF9DQVNFX1BBVFRFUk4gPSAvKFthLXpdKShbQS1aXSkvZztcbmNvbnN0IFJFUExBQ0VfVEVNUExBVEUgPSAnJDEtJDInO1xuY29uc3QgSEFTX1BFUkZPUk1BTkNFX05PVyA9ICh0eXBlb2YgcGVyZm9ybWFuY2UgIT09ICd1bmRlZmluZWQnICYmIHBlcmZvcm1hbmNlLm5vdyk7XG5cbi8qXG4gICAgR2V0IHZhciB0eXBlIGFzIHN0cmluZ1xuICAgIFxuICAgIEBwYXJhbTogVmFyaWFibGUgdG8gdGVzdFxuICAgIEByZXR1cm4gW3N0cmluZ106IFJldHVybnMsIGZvciBpbnN0YW5jZSAnT2JqZWN0JyBpZiBbb2JqZWN0IE9iamVjdF1cbiovXG5jb25zdCB2YXJUeXBlID0gdmFyaWFibGUgPT4gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHZhcmlhYmxlKS5zbGljZSg4LCAtMSk7XG5cbi8qXG4gICAgQ29udmVydCBjYW1lbENhc2UgdG8gZGFzaC1jYXNlXG5cbiAgICBAcGFyYW0gW3N0cmluZ11cbiAgICBAcmV0dXJuIFtzdHJpbmddXG4qL1xuZXhwb3J0IGNvbnN0IGNhbWVsVG9EYXNoID0gKHN0cmluZykgPT4gc3RyaW5nLnJlcGxhY2UoQ0FNRUxfQ0FTRV9QQVRURVJOLCBSRVBMQUNFX1RFTVBMQVRFKS50b0xvd2VyQ2FzZSgpO1xuXG4vKlxuICAgIENyZWF0ZSBhbiBhdXRvLWN1bGxpbmcgYnVmZmVyIGFycmF5XG5cbiAgICBAcGFyYW0gW2FycmF5XVxuICAgIEBwYXJhbSBbaW50XVxuICAgIEByZXR1cm4gW2FycmF5XVxuKi9cbmV4cG9ydCBjb25zdCBjcmVhdGVCdWZmZXIgPSAobWF4U2l6ZSA9IDMsIGFycmF5ID0gW10pID0+IHtcbiAgICBhcnJheS5wdXNoID0gcHVzaDtcbiAgICBhcnJheS5fbWF4U2l6ZSA9IG1heFNpemUgfHwgMDtcblxuICAgIHJldHVybiBhcnJheTtcbn07XG5cbmV4cG9ydCBjb25zdCBjcmVhdGVEZWxpbWl0ZWQgPSAodmFsdWVzLCB0ZXJtcywgZGVsaW1pdGVyLCBjaG9wKSA9PiB7XG4gICAgbGV0IGNvbWJpbmVkID0gJyc7XG5cbiAgICB0ZXJtcy5mb3JFYWNoKCh0ZXJtKSA9PiB7XG4gICAgICAgIGlmICh2YWx1ZXMuaGFzT3duUHJvcGVydHkodGVybSkpIHtcbiAgICAgICAgICAgIGNvbWJpbmVkICs9IHZhbHVlc1t0ZXJtXSArIGRlbGltaXRlcjtcbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgaWYgKGNob3ApIHtcbiAgICAgICAgY29tYmluZWQgPSBjb21iaW5lZC5zbGljZSgwLCAtY2hvcCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbWJpbmVkO1xufTtcblxuLypcbiAgICBDcmVhdGUgYSBmdW5jdGlvbiBzdHJpbmdcblxuICAgICcyMHB4JywgJ3RyYW5zbGF0ZScgLT4gJ3RyYW5zbGF0ZSgyMHB4KSdcblxuICAgIEBwYXJhbSBbc3RyaW5nXVxuICAgIEBwYXJhbSBbc3RyaW5nXVxuICAgIEByZXR1cm4gW3N0cmluZ11cbiovXG5leHBvcnQgY29uc3QgY3JlYXRlRnVuY3Rpb25TdHJpbmcgPSAodmFsdWUsIHByZWZpeCkgPT4gYCR7cHJlZml4fSgke3ZhbHVlfSlgO1xuXG4vKlxuICAgIEdlbmVyYXRlIGN1cnJlbnQgdGltZXN0YW1wXG4gICAgXG4gICAgQHJldHVybiBbdGltZXN0YW1wXTogQ3VycmVudCBVTklYIHRpbWVzdGFtcFxuKi9cbmV4cG9ydCBjb25zdCBjdXJyZW50VGltZSA9ICgpID0+IEhBU19QRVJGT1JNQU5DRV9OT1cgPyBwZXJmb3JtYW5jZS5ub3coKSA6IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuXG4vKlxuICAgIEl0ZXJhdGUgb3ZlciBhbiBvYmplY3QgYW5kIGZpcmUgYSBjYWxsYmFjayBmb3IgZXZlcnkgaXRlbSBpbiBpdFxuXG4gICAgQHBhcmFtIFtvYmplY3RdOiBPYmplY3QgdG8gaXRlcmF0ZSBvdmVyXG4gICAgQHBhcmFtIFtmdW5jdGlvbl06IENhbGxiYWNrIHRvIGZpcmVcbiovXG5leHBvcnQgY29uc3QgZWFjaCA9IChvYmplY3QsIGNhbGxiYWNrKSA9PiB7XG4gICAgY29uc3Qga2V5cyA9IG9iamVjdCA/IE9iamVjdC5rZXlzKG9iamVjdCkgOiBbXTtcbiAgICBjb25zdCBudW1LZXlzID0ga2V5cy5sZW5ndGg7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IG51bUtleXM7IGkrKykge1xuICAgICAgICBjb25zdCBrZXkgPSBrZXlzW2ldO1xuICAgICAgICBjb25zdCBwcm9wID0gb2JqZWN0W2tleV07XG5cbiAgICAgICAgY2FsbGJhY2socHJvcCwga2V5LCBvYmplY3QpO1xuICAgIH1cbn07XG5cbi8qXG4gICAgU3BsaXQgY29sb3Igc3RyaW5nIGludG8gbWFwIG9mIGNvbG9yIHByb3BlcnRpZXNcblxuICAgIFwicmdiYSgyNTUsIDI1NSwgMjU1LCAwKVwiLCBbXCJSZWRcIiwgJ0dyZWVuXCIsIFwiQmx1ZVwiLCBcIkFscGhhXCJdXG5cbiAgICB7IFJlZDogMjU1Li4uIH1cbiovXG5leHBvcnQgY29uc3QgZ2V0Q29sb3JWYWx1ZXMgPSAodmFsdWUsIGNvbG9yVGVybXMpID0+IHtcbiAgICBjb25zdCBjb2xvclZhbHVlcyA9IHt9O1xuICAgIGNvbnN0IGNvbG9ycyA9IHNwbGl0Q29tbWFEZWxpbWl0ZWQoZ2V0VmFsdWVGcm9tRnVuY3Rpb25TdHJpbmcodmFsdWUpKTtcblxuICAgIGNvbG9yVGVybXMuZm9yRWFjaCgodGVybSwgaSkgPT4gY29sb3JUZXJtc1t0ZXJtXSA9IChjb2xvcnNbaV0gIT09IHVuZGVmaW5lZCkgPyBjb2xvcnNbaV0gOiAxKTtcblxuICAgIHJldHVybiBjb2xvclZhbHVlcztcbn07XG5cbi8qXG4gICAgR2V0IHZhbHVlIGZyb20gZnVuY3Rpb24gc3RyaW5nXG5cbiAgICBcInRyYW5zbGF0ZVgoMjBweClcIiAtPiBcIjIwcHhcIlxuKi9cbmV4cG9ydCBjb25zdCBnZXRWYWx1ZUZyb21GdW5jdGlvblN0cmluZyA9ICh2YWx1ZSkgPT4gdmFsdWUuc3Vic3RyaW5nKHZhbHVlLmluZGV4T2YoJygnKSArIDEsIHZhbHVlLmxhc3RJbmRleE9mKCcpJykpO1xuXG4vKlxuICAgIENoZWNrIGlmIHR3byBvYmplY3RzIGhhdmUgY2hhbmdlZCBmcm9tIGVhY2ggb3RoZXJcbiAgICBcbiAgICBAcGFyYW0gW29iamVjdF06IElucHV0IEFcbiAgICBAcGFyYW0gW29iamVjdF06IElucHV0IEJcbiAgICBAcmV0dXJuIFtib29sZWFuXTogVHJ1ZSBpZiBkaWZmZXJlbnRcbiovXG5leHBvcnQgY29uc3QgaGFzQ2hhbmdlZCA9IChhLCBiKSA9PiB7XG4gICAgbGV0IGNoYW5nZWQgPSBmYWxzZTtcblxuICAgIGVhY2goYSwgKHZhbHVlLCBrZXkpID0+IHtcbiAgICAgICAgaWYgKGhhc1Byb3BlcnR5KGIsIGtleSkpIHtcbiAgICAgICAgICAgIGlmICh2YWx1ZSAhPT0gYltrZXldKSB7XG4gICAgICAgICAgICAgICAgY2hhbmdlZCA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjaGFuZ2VkID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIGNoYW5nZWQ7XG59O1xuXG4vKlxuICAgIENoZWNrIGlmIG9iamVjdCBoYXMgcHJvcGVydHkgYW5kIGl0IGlzbid0IHVuZGVmaW5lZFxuXG4gICAgQHBhcmFtIFtvYmplY3RdXG4gICAgQHBhcmFtIFtzdHJpbmddXG4gICAgQHJldHVybiBbYm9vbGVhbl1cbiovXG5leHBvcnQgY29uc3QgaGFzUHJvcGVydHkgPSAob2JqZWN0LCBwcm9wZXJ0eU5hbWUpID0+IG9iamVjdC5oYXNPd25Qcm9wZXJ0eShwcm9wZXJ0eU5hbWUpICYmIG9iamVjdFtwcm9wZXJ0eU5hbWVdICE9PSB1bmRlZmluZWQ7XG5cbi8qXG4gICAgSXMgdXRpbHMgdmFyIGFuIGFycmF5ID8gXG4gICAgXG4gICAgQHBhcmFtOiBWYXJpYWJsZSB0byB0ZXN0XG4gICAgQHJldHVybiBbYm9vbGVhbl06IFJldHVybnMgdHJ1ZSBpZiB1dGlscy52YXJUeXBlID09PSAnQXJyYXknXG4qL1xuZXhwb3J0IGNvbnN0IGlzQXJyYXkgPSAoYXJyKSA9PiB2YXJUeXBlKGFycikgPT09ICdBcnJheSc7XG5cbi8qXG4gICAgSXMgdXRpbHMgdmFyIGEgZnVuY3Rpb24gPyBcbiAgICBcbiAgICBAcGFyYW06IFZhcmlhYmxlIHRvIHRlc3RcbiAgICBAcmV0dXJuIFtib29sZWFuXTogUmV0dXJucyB0cnVlIGlmIHV0aWxzLnZhclR5cGUgPT09ICdGdW5jdGlvbidcbiovXG5leHBvcnQgY29uc3QgaXNGdW5jID0gKG9iaikgPT4gdmFyVHlwZShvYmopID09PSAnRnVuY3Rpb24nO1xuXG4vKlxuICAgIElzIHV0aWxzIHZhciBhIG51bWJlcj9cbiAgICBcbiAgICBAcGFyYW06IFZhcmlhYmxlIHRvIHRlc3RcbiAgICBAcmV0dXJuIFtib29sZWFuXTogUmV0dXJucyB0cnVlIGlmIHR5cGVvZiA9PT0gJ251bWJlcidcbiovXG5leHBvcnQgY29uc3QgaXNOdW0gPSAobnVtKSA9PiB0eXBlb2YgbnVtID09PSAnbnVtYmVyJztcblxuLypcbiAgICBJcyB1dGlscyB2YXIgYW4gb2JqZWN0P1xuICAgIFxuICAgIEBwYXJhbTogVmFyaWFibGUgdG8gdGVzdFxuICAgIEByZXR1cm4gW2Jvb2xlYW5dOiBSZXR1cm5zIHRydWUgaWYgdHlwZW9mID09PSAnb2JqZWN0J1xuKi9cbmV4cG9ydCBjb25zdCBpc09iaiA9IChvYmopID0+IHR5cGVvZiBvYmogPT09ICdvYmplY3QnO1xuXG4vKlxuICAgIElzIHV0aWxzIGEgcmVsYXRpdmUgdmFsdWUgYXNzaWdubWVudD9cbiAgICBcbiAgICBAcGFyYW0gW3N0cmluZ106IFZhcmlhYmxlIHRvIHRlc3RcbiAgICBAcmV0dXJuIFtib29sZWFuXTogSWYgdXRpbHMgbG9va3MgbGlrZSBhIHJlbGF0aXZlIHZhbHVlIGFzc2lnbm1lbnRcbiovXG5leHBvcnQgY29uc3QgaXNSZWxhdGl2ZVZhbHVlID0gKHZhbHVlKSA9PiAodmFsdWUgJiYgdmFsdWUuaW5kZXhPZiAmJiB2YWx1ZS5pbmRleE9mKCc9JykgPiAwKSA/IHRydWUgOiBmYWxzZTtcblxuLypcbiAgICBJcyB1dGlscyB2YXIgYSBzdHJpbmcgPyBcbiAgICBcbiAgICBAcGFyYW06IFZhcmlhYmxlIHRvIHRlc3RcbiAgICBAcmV0dXJuIFtib29sZWFuXTogUmV0dXJucyB0cnVlIGlmIHR5cGVvZiBzdHIgPT09ICdzdHJpbmcnXG4qL1xuZXhwb3J0IGNvbnN0IGlzU3RyaW5nID0gKHN0cikgPT4gdHlwZW9mIHN0ciA9PT0gJ3N0cmluZyc7XG5cbi8qXG4gICAgQHBhcmFtIFtzdHJpbmcgfHwgTm9kZUxpc3RdOlxuICAgICAgICBJZiBzdHJpbmcsIHRyZWF0ZWQgYXMgc2VsZWN0b3IuXG4gICAgICAgIElmIG5vdCwgdHJlYXRlZCBhcyBwcmVleGlzdGluZyBOb2RlTGlzdFxuXG4gICAgQHJldHVybiBbQXJyYXldXG4qL1xuZXhwb3J0IGNvbnN0IHNlbGVjdERvbSA9IChzZWxlY3RvcikgPT4ge1xuICAgIGNvbnN0IG5vZGVzID0gKHR5cGVvZiBzZWxlY3RvciA9PT0gJ3N0cmluZycpID8gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChzZWxlY3RvcikgOiBzZWxlY3RvcjtcbiAgICByZXR1cm4gKG5vZGVzLmxlbmd0aCkgPyBbXS5zbGljZS5jYWxsKG5vZGVzKSA6IFtdLnB1c2gobm9kZXMpO1xufTtcblxuLypcbiAgICBTcGxpdCBjb21tYS1kZWxpbWl0ZWQgc3RyaW5nXG5cbiAgICBcImZvbyxiYXJcIiAtPiBbXCJmb29cIiwgXCJiYXJcIl1cblxuICAgIEBwYXJhbSBbc3RyaW5nXVxuICAgIEByZXR1cm4gW2FycmF5XVxuKi9cbmV4cG9ydCBjb25zdCBzcGxpdENvbW1hRGVsaW1pdGVkID0gKHZhbHVlKSA9PiBpc1N0cmluZyh2YWx1ZSkgPyB2YWx1ZS5zcGxpdCgvLFxccyovKSA6IFt2YWx1ZV07XG5cbi8qXG4gICAgU3BsaXQgc3BhY2UtZGVsaW1pdGVkIHN0cmluZ1xuXG4gICAgXCJmb28gYmFyXCIgLT4gW1wiZm9vXCIsIFwiYmFyXCJdXG5cbiAgICBAcGFyYW0gW3N0cmluZ11cbiAgICBAcmV0dXJuIFthcnJheV1cbiovXG5leHBvcnQgY29uc3Qgc3BsaXRTcGFjZURlbGltaXRlZCA9ICh2YWx1ZSkgPT4gaXNTdHJpbmcodmFsdWUpID8gdmFsdWUuc3BsaXQoJyAnKSA6IFt2YWx1ZV07XG5cbi8qXG4gICAgU3BsaXQgYSB2YWx1ZSBpbnRvIGEgdmFsdWUvdW5pdCBvYmplY3RcbiAgICBcbiAgICAgICAgXCIyMDBweFwiIC0+IHsgdmFsdWU6IDIwMCwgdW5pdDogXCJweFwiIH1cbiAgICAgICAgXG4gICAgQHBhcmFtIFtzdHJpbmddOiBWYWx1ZSB0byBzcGxpdFxuICAgIEByZXR1cm4gW29iamVjdF06IE9iamVjdCB3aXRoIHZhbHVlIGFuZCB1bml0IHByb3BzXG4qL1xuZXhwb3J0IGNvbnN0IHNwbGl0VmFsdWVVbml0ID0gKHZhbHVlKSA9PiB7XG4gICAgY29uc3Qgc3BsaXRWYWwgPSB2YWx1ZS5tYXRjaCgvKC0/XFxkKlxcLj9cXGQqKSguKikvKTtcblxuICAgIHJldHVybiB7XG4gICAgICAgIHZhbHVlOiBwYXJzZUZsb2F0KHNwbGl0VmFsWzFdKSxcbiAgICAgICAgdW5pdDogIHNwbGl0VmFsWzJdXG4gICAgfTtcbn07XG5cbi8qXG4gICAgQ29udmVydCBudW1iZXIgdG8geCBkZWNpbWFsIHBsYWNlc1xuXG4gICAgQHBhcmFtIFtudW1iZXJdXG4gICAgQHBhcmFtIFtudW1iZXJdXG4gICAgQHJldHVybiBbbnVtYmVyXVxuKi9cbmV4cG9ydCBjb25zdCB0b0RlY2ltYWwgPSAobnVtLCBwcmVjaXNpb24gPSAyKSA9PiB7XG4gICAgcHJlY2lzaW9uID0gMTAgKiogcHJlY2lzaW9uO1xuICAgIHJldHVybiBNYXRoLnJvdW5kKG51bSAqIHByZWNpc2lvbikgLyBwcmVjaXNpb247XG59O1xuIl19

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports.default = selectActor;
	
	var _Actor = __webpack_require__(2);
	
	var _Actor2 = _interopRequireDefault(_Actor);
	
	var _utils = __webpack_require__(14);
	
	var _css = __webpack_require__(9);
	
	var _css2 = _interopRequireDefault(_css);
	
	var _svg = __webpack_require__(10);
	
	var _svg2 = _interopRequireDefault(_svg);
	
	var _svgPath = __webpack_require__(11);
	
	var _svgPath2 = _interopRequireDefault(_svgPath);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var SAVE_PROP = '__pm_actor_';
	
	var detectRenderer = function (element) {
	    // If HTMLElement load renderCSS
	    if (element instanceof HTMLElement || element.tagName === 'svg') {
	        return _css2.default;
	
	        // Or SVG
	    } else if (element instanceof SVGElement) {
	            if (element.tagName === 'path') {
	                return _svgPath2.default;
	            } else {
	                return _svg2.default;
	            }
	        }
	};
	
	function selectActor(selector) {
	    var props = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];
	
	    var elements = (0, _utils.selectDom)(selector);
	
	    var actors = elements.map(function (element) {
	        var actor = element[SAVE_PROP];
	
	        if (!actor) {
	            props.element = element;
	            props.onRender = detectRenderer(element);
	            actor = element[SAVE_PROP] = new _Actor2.default(props);
	        }
	
	        return actor;
	    });
	
	    return actors.length > 1 ? actors : actors[0];
	}
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9pbmMvc2VsZWN0LWFjdG9yLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztrQkF3QndCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBakJ4QixJQUFNLFlBQVksYUFBWjs7QUFFTixJQUFNLGlCQUFpQixVQUFDLE9BQUQsRUFBYTs7QUFFaEMsUUFBSSxtQkFBbUIsV0FBbkIsSUFBa0MsUUFBUSxPQUFSLEtBQW9CLEtBQXBCLEVBQTJCO0FBQzdEOzs7QUFENkQsS0FBakUsTUFJTyxJQUFJLG1CQUFtQixVQUFuQixFQUErQjtBQUN0QyxnQkFBSSxRQUFRLE9BQVIsS0FBb0IsTUFBcEIsRUFBNEI7QUFDNUIseUNBRDRCO2FBQWhDLE1BRU87QUFDSCxxQ0FERzthQUZQO1NBREc7Q0FOWTs7QUFlUixTQUFTLFdBQVQsQ0FBcUIsUUFBckIsRUFBMkM7UUFBWiw4REFBUSxrQkFBSTs7QUFDdEQsUUFBTSxXQUFXLHNCQUFVLFFBQVYsQ0FBWCxDQURnRDs7QUFHdEQsUUFBTSxTQUFTLFNBQVMsR0FBVCxDQUFhLFVBQUMsT0FBRCxFQUFhO0FBQ3JDLFlBQUksUUFBUSxRQUFRLFNBQVIsQ0FBUixDQURpQzs7QUFHckMsWUFBSSxDQUFDLEtBQUQsRUFBUTtBQUNSLGtCQUFNLE9BQU4sR0FBZ0IsT0FBaEIsQ0FEUTtBQUVSLGtCQUFNLFFBQU4sR0FBaUIsZUFBZSxPQUFmLENBQWpCLENBRlE7QUFHUixvQkFBUSxRQUFRLFNBQVIsSUFBcUIsb0JBQVUsS0FBVixDQUFyQixDQUhBO1NBQVo7O0FBTUEsZUFBTyxLQUFQLENBVHFDO0tBQWIsQ0FBdEIsQ0FIZ0Q7O0FBZXRELFdBQU8sTUFBQyxDQUFPLE1BQVAsR0FBZ0IsQ0FBaEIsR0FBcUIsTUFBdEIsR0FBK0IsT0FBTyxDQUFQLENBQS9CLENBZitDO0NBQTNDIiwiZmlsZSI6InNlbGVjdC1hY3Rvci5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvTWF0dC9TaXRlcy9wb3Btb3Rpb24iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQWN0b3IgZnJvbSAnLi4vYWN0b3IvQWN0b3InO1xuaW1wb3J0IHsgc2VsZWN0RG9tIH0gZnJvbSAnLi4vaW5jL3V0aWxzJztcblxuaW1wb3J0IHJlbmRlckNTUyBmcm9tICcuLi9yZW5kZXIvY3NzJztcbmltcG9ydCByZW5kZXJTVkcgZnJvbSAnLi4vcmVuZGVyL3N2Zyc7XG5pbXBvcnQgcmVuZGVyU1ZHUGF0aCBmcm9tICcuLi9yZW5kZXIvc3ZnLXBhdGgnO1xuXG5jb25zdCBTQVZFX1BST1AgPSAnX19wbV9hY3Rvcl8nO1xuXG5jb25zdCBkZXRlY3RSZW5kZXJlciA9IChlbGVtZW50KSA9PiB7XG4gICAgLy8gSWYgSFRNTEVsZW1lbnQgbG9hZCByZW5kZXJDU1NcbiAgICBpZiAoZWxlbWVudCBpbnN0YW5jZW9mIEhUTUxFbGVtZW50IHx8IGVsZW1lbnQudGFnTmFtZSA9PT0gJ3N2ZycpIHtcbiAgICAgICAgcmV0dXJuIHJlbmRlckNTUztcblxuICAgIC8vIE9yIFNWR1xuICAgIH0gZWxzZSBpZiAoZWxlbWVudCBpbnN0YW5jZW9mIFNWR0VsZW1lbnQpIHtcbiAgICAgICAgaWYgKGVsZW1lbnQudGFnTmFtZSA9PT0gJ3BhdGgnKSB7XG4gICAgICAgICAgICByZXR1cm4gcmVuZGVyU1ZHUGF0aDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiByZW5kZXJTVkc7XG4gICAgICAgIH1cbiAgICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzZWxlY3RBY3RvcihzZWxlY3RvciwgcHJvcHMgPSB7fSkge1xuICAgIGNvbnN0IGVsZW1lbnRzID0gc2VsZWN0RG9tKHNlbGVjdG9yKTtcblxuICAgIGNvbnN0IGFjdG9ycyA9IGVsZW1lbnRzLm1hcCgoZWxlbWVudCkgPT4ge1xuICAgICAgICBsZXQgYWN0b3IgPSBlbGVtZW50W1NBVkVfUFJPUF07XG5cbiAgICAgICAgaWYgKCFhY3Rvcikge1xuICAgICAgICAgICAgcHJvcHMuZWxlbWVudCA9IGVsZW1lbnQ7XG4gICAgICAgICAgICBwcm9wcy5vblJlbmRlciA9IGRldGVjdFJlbmRlcmVyKGVsZW1lbnQpO1xuICAgICAgICAgICAgYWN0b3IgPSBlbGVtZW50W1NBVkVfUFJPUF0gPSBuZXcgQWN0b3IocHJvcHMpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGFjdG9yO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIChhY3RvcnMubGVuZ3RoID4gMSkgPyBhY3RvcnMgOiBhY3RvcnNbMF07XG59XG4iXX0=

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports.setDilation = undefined;
	
	var _utils = __webpack_require__(14);
	
	var MAX_ELAPSED = 33;
	
	var current = 0;
	var elapsed = 16.7;
	var dilation = 1;
	
	exports.default = {
	    update: function (framestamp) {
	        elapsed = Math.min(framestamp - current, MAX_ELAPSED) * dilation;
	        current = framestamp;
	    },
	
	    start: function () {
	        return current = (0, _utils.currentTime)();
	    },
	
	    getElapsed: function () {
	        return elapsed;
	    }
	};
	var setDilation = exports.setDilation = function (newDilation) {
	    return dilation = newDilation;
	};
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9wcm9jZXNzL3RpbWVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFFQSxJQUFNLGNBQWMsRUFBZDs7QUFFTixJQUFJLFVBQVUsQ0FBVjtBQUNKLElBQUksVUFBVSxJQUFWO0FBQ0osSUFBSSxXQUFXLENBQVg7O2tCQUVXO0FBQ1gsWUFBUSxVQUFDLFVBQUQsRUFBZ0I7QUFDcEIsa0JBQVUsS0FBSyxHQUFMLENBQVMsYUFBYSxPQUFiLEVBQXNCLFdBQS9CLElBQThDLFFBQTlDLENBRFU7QUFFcEIsa0JBQVUsVUFBVixDQUZvQjtLQUFoQjs7QUFLUixXQUFPO2VBQU0sVUFBVSx5QkFBVjtLQUFOOztBQUVQLGdCQUFZO2VBQU07S0FBTjs7QUFHVCxJQUFNLG9DQUFjLFVBQUMsV0FBRDtXQUFpQixXQUFXLFdBQVg7Q0FBakIiLCJmaWxlIjoidGltZXIuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL01hdHQvU2l0ZXMvcG9wbW90aW9uIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3VycmVudFRpbWUgfSBmcm9tICcuLi9pbmMvdXRpbHMnO1xuXG5jb25zdCBNQVhfRUxBUFNFRCA9IDMzO1xuXG5sZXQgY3VycmVudCA9IDA7XG5sZXQgZWxhcHNlZCA9IDE2Ljc7XG5sZXQgZGlsYXRpb24gPSAxO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgdXBkYXRlOiAoZnJhbWVzdGFtcCkgPT4ge1xuICAgICAgICBlbGFwc2VkID0gTWF0aC5taW4oZnJhbWVzdGFtcCAtIGN1cnJlbnQsIE1BWF9FTEFQU0VEKSAqIGRpbGF0aW9uO1xuICAgICAgICBjdXJyZW50ID0gZnJhbWVzdGFtcDtcbiAgICB9LFxuXG4gICAgc3RhcnQ6ICgpID0+IGN1cnJlbnQgPSBjdXJyZW50VGltZSgpLFxuXG4gICAgZ2V0RWxhcHNlZDogKCkgPT4gZWxhcHNlZFxufTtcblxuZXhwb3J0IGNvbnN0IHNldERpbGF0aW9uID0gKG5ld0RpbGF0aW9uKSA9PiBkaWxhdGlvbiA9IG5ld0RpbGF0aW9uOyJdfQ==

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports.default = stagger;
	
	var _Tween = __webpack_require__(3);
	
	var _Tween2 = _interopRequireDefault(_Tween);
	
	var _presetEasing = __webpack_require__(12);
	
	var _utils = __webpack_require__(14);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var DEFAULT_INTERVAL = 100;
	
	function stagger(array, props, callback) {
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
	                ease: propsIsInterval ? _presetEasing.linear : props.ease || _presetEasing.linear
	            }
	        },
	        onRender: function (_ref) {
	            var i = _ref.i;
	
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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9pbmMvc3RhZ2dlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7a0JBTXdCOzs7Ozs7Ozs7Ozs7QUFGeEIsSUFBTSxtQkFBbUIsR0FBbkI7O0FBRVMsU0FBUyxPQUFULENBQWlCLEtBQWpCLEVBQXdCLEtBQXhCLEVBQStCLFFBQS9CLEVBQXlDO0FBQ3BELFFBQU0sY0FBYyxNQUFNLE1BQU4sQ0FEZ0M7QUFFcEQsUUFBTSxrQkFBa0Isa0JBQU0sS0FBTixDQUFsQixDQUY4QztBQUdwRCxRQUFNLFdBQVcsa0JBQWtCLEtBQWxCLEdBQTBCLE1BQU0sUUFBTixJQUFrQixnQkFBbEIsQ0FIUztBQUlwRCxRQUFJLFlBQVksQ0FBQyxDQUFELENBSm9DOztBQU1wRCxRQUFNLGVBQWUsb0JBQVU7QUFDM0Isa0JBQVUsV0FBVyxXQUFYO0FBQ1YsZ0JBQVE7QUFDSixlQUFHO0FBQ0Msc0JBQU0sQ0FBTjtBQUNBLG9CQUFJLGNBQWMsQ0FBZDtBQUNKLHVCQUFPLElBQVA7QUFDQSxzQkFBTSx5Q0FBMkIsTUFBTSxJQUFOLHdCQUEzQjthQUpWO1NBREo7QUFRQSxrQkFBVSxnQkFBVztnQkFBUixXQUFROztBQUNqQixnQkFBSSxXQUFXLFlBQVksQ0FBWixDQURFOztBQUdqQixtQkFBTyxZQUFZLENBQVosRUFBZSxVQUF0QixFQUFrQztBQUM5Qix5QkFBUyxNQUFNLFFBQU4sQ0FBVCxFQUEwQixRQUExQixFQUQ4QjthQUFsQzs7QUFJQSx3QkFBWSxDQUFaLENBUGlCO1NBQVg7QUFTVixvQkFBWSxrQkFBa0IsU0FBbEIsR0FBOEIsTUFBTSxVQUFOO0tBbkJ6QixDQUFmLENBTjhDOztBQTRCcEQsaUJBQWEsS0FBYixHQTVCb0Q7O0FBOEJwRCxXQUFPLFlBQVAsQ0E5Qm9EO0NBQXpDIiwiZmlsZSI6InN0YWdnZXIuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL01hdHQvU2l0ZXMvcG9wbW90aW9uIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFR3ZWVuIGZyb20gJy4uL2FjdGlvbnMvVHdlZW4nO1xuaW1wb3J0IHsgbGluZWFyIH0gZnJvbSAnLi4vYWN0aW9ucy9lYXNpbmcvcHJlc2V0LWVhc2luZyc7XG5pbXBvcnQgeyBpc051bSB9IGZyb20gJy4vdXRpbHMnO1xuXG5jb25zdCBERUZBVUxUX0lOVEVSVkFMID0gMTAwO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzdGFnZ2VyKGFycmF5LCBwcm9wcywgY2FsbGJhY2spIHtcbiAgICBjb25zdCBhcnJheUxlbmd0aCA9IGFycmF5Lmxlbmd0aDtcbiAgICBjb25zdCBwcm9wc0lzSW50ZXJ2YWwgPSBpc051bShwcm9wcyk7XG4gICAgY29uc3QgaW50ZXJ2YWwgPSBwcm9wc0lzSW50ZXJ2YWwgPyBwcm9wcyA6IHByb3BzLmludGVydmFsIHx8IERFRkFVTFRfSU5URVJWQUw7XG4gICAgbGV0IHByZXZJbmRleCA9IC0xO1xuXG4gICAgY29uc3Qgc3RhZ2dlclR3ZWVuID0gbmV3IFR3ZWVuKHtcbiAgICAgICAgZHVyYXRpb246IGludGVydmFsICogYXJyYXlMZW5ndGgsXG4gICAgICAgIHZhbHVlczoge1xuICAgICAgICAgICAgaToge1xuICAgICAgICAgICAgICAgIGZyb206IDAsXG4gICAgICAgICAgICAgICAgdG86IGFycmF5TGVuZ3RoIC0gMSxcbiAgICAgICAgICAgICAgICByb3VuZDogdHJ1ZSxcbiAgICAgICAgICAgICAgICBlYXNlOiBwcm9wc0lzSW50ZXJ2YWwgPyBsaW5lYXIgOiBwcm9wcy5lYXNlIHx8IGxpbmVhclxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBvblJlbmRlcjogKHsgaSB9KSA9PiB7XG4gICAgICAgICAgICBsZXQgZ2FwSW5kZXggPSBwcmV2SW5kZXggKyAxO1xuXG4gICAgICAgICAgICBmb3IgKDsgZ2FwSW5kZXggPD0gaTsgZ2FwSW5kZXgrKykge1xuICAgICAgICAgICAgICAgIGNhbGxiYWNrKGFycmF5W2dhcEluZGV4XSwgZ2FwSW5kZXgpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBwcmV2SW5kZXggPSBpO1xuICAgICAgICB9LFxuICAgICAgICBvbkNvbXBsZXRlOiBwcm9wc0lzSW50ZXJ2YWwgPyB1bmRlZmluZWQgOiBwcm9wcy5vbkNvbXBsZXRlXG4gICAgfSk7XG5cbiAgICBzdGFnZ2VyVHdlZW4uc3RhcnQoKTtcblxuICAgIHJldHVybiBzdGFnZ2VyVHdlZW47XG59Il19

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	exports.__esModule = true;
	exports.default = timeline;
	
	var _Tween = __webpack_require__(3);
	
	var _Tween2 = _interopRequireDefault(_Tween);
	
	var _presetEasing = __webpack_require__(12);
	
	var _calc = __webpack_require__(13);
	
	var _utils = __webpack_require__(14);
	
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
	    var currentPlayhead = 0;
	
	    defs.forEach(function (def) {
	        var defIsObj = def.tween ? true : false;
	        var tween = defIsObj ? def.tween : def;
	
	        currentPlayhead += defIsObj && def.offset ? def.at || (0, _calc.relativeValue)(currentPlayhead, def.offset) : 0;
	
	        var duration = 0;
	        (0, _utils.each)(tween.values, function (value) {
	            return duration = Math.max(duration, value.duration);
	        });
	
	        timeline.push({
	            from: currentPlayhead,
	            duration: duration,
	            fire: tween.seekTime
	        });
	
	        currentPlayhead += tween.duration;
	    });
	
	    return { totalTime: currentPlayhead, timeline: timeline };
	};
	
	var setTweens = function (_ref) {
	    var timeline = _ref.timeline;
	    var timelineLength = _ref.timelineLength;
	    var state = _ref.state;
	
	    var playhead = state.p;
	
	    for (var i = 0; i < timelineLength; i++) {
	        var tween = timeline[i];
	        var tweenTime = playhead - tween.from;
	
	        if (tweenTime > 0 && tweenTime < tween.duration) {
	            tween.fire(tweenTime);
	        }
	    }
	};
	
	function timeline(def) {
	    var props = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];
	
	    var _analyze = analyze(def);
	
	    var totalTime = _analyze.totalTime;
	    var timeline = _analyze.timeline;
	
	    var timelineProps = _extends({}, props, {
	        duration: totalTime,
	        ease: _presetEasing.linear,
	        values: {
	            p: 1
	        },
	        timeline: timeline,
	        timelineLength: timeline.length,
	        onRender: setTweens
	    });
	
	    return new _Tween2.default(timelineProps);
	}
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9pbmMvdGltZWxpbmUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7a0JBMkR3Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUF2Q3hCLElBQU0sVUFBVSxVQUFDLElBQUQsRUFBVTtBQUN0QixRQUFNLFdBQVcsRUFBWCxDQURnQjtBQUV0QixRQUFJLGtCQUFrQixDQUFsQixDQUZrQjs7QUFJdEIsU0FBSyxPQUFMLENBQWEsVUFBQyxHQUFELEVBQVM7QUFDbEIsWUFBTSxXQUFXLElBQUksS0FBSixHQUFZLElBQVosR0FBbUIsS0FBbkIsQ0FEQztBQUVsQixZQUFNLFFBQVEsV0FBYSxJQUFJLEtBQUosR0FBWSxHQUF6QixDQUZJOztBQUlsQiwyQkFBb0IsUUFBQyxJQUFZLElBQUksTUFBSixHQUM3QixJQUFJLEVBQUosSUFBVSx5QkFBYyxlQUFkLEVBQStCLElBQUksTUFBSixDQUF6QyxHQUF1RCxDQUR2QyxDQUpGOztBQU9sQixZQUFJLFdBQVcsQ0FBWCxDQVBjO0FBUWxCLHlCQUFLLE1BQU0sTUFBTixFQUFjLFVBQUMsS0FBRDttQkFBVyxXQUFXLEtBQUssR0FBTCxDQUFTLFFBQVQsRUFBbUIsTUFBTSxRQUFOLENBQTlCO1NBQVgsQ0FBbkIsQ0FSa0I7O0FBVWxCLGlCQUFTLElBQVQsQ0FBYztBQUNWLGtCQUFNLGVBQU47QUFDQSxzQkFBVSxRQUFWO0FBQ0Esa0JBQU0sTUFBTSxRQUFOO1NBSFYsRUFWa0I7O0FBZ0JsQiwyQkFBbUIsTUFBTSxRQUFOLENBaEJEO0tBQVQsQ0FBYixDQUpzQjs7QUF1QnRCLFdBQU8sRUFBRSxXQUFXLGVBQVgsRUFBNEIsa0JBQTlCLEVBQVAsQ0F2QnNCO0NBQVY7O0FBMEJoQixJQUFNLFlBQVksZ0JBQXlDO1FBQXRDLHlCQUFzQztRQUE1QixxQ0FBNEI7UUFBWixtQkFBWTs7QUFDdkQsUUFBTSxXQUFXLE1BQU0sQ0FBTixDQURzQzs7QUFHdkQsU0FBSyxJQUFJLElBQUksQ0FBSixFQUFPLElBQUksY0FBSixFQUFvQixHQUFwQyxFQUF5QztBQUNyQyxZQUFNLFFBQVEsU0FBUyxDQUFULENBQVIsQ0FEK0I7QUFFckMsWUFBTSxZQUFZLFdBQVcsTUFBTSxJQUFOLENBRlE7O0FBSXJDLFlBQUksWUFBWSxDQUFaLElBQWlCLFlBQVksTUFBTSxRQUFOLEVBQWdCO0FBQzdDLGtCQUFNLElBQU4sQ0FBVyxTQUFYLEVBRDZDO1NBQWpEO0tBSko7Q0FIYzs7QUFhSCxTQUFTLFFBQVQsQ0FBa0IsR0FBbEIsRUFBbUM7UUFBWiw4REFBUSxrQkFBSTs7bUJBQ2QsUUFBUSxHQUFSLEVBRGM7O1FBQ3RDLCtCQURzQztRQUMzQiw2QkFEMkI7O0FBRzlDLFFBQU0sNkJBQ0M7QUFDSCxrQkFBVSxTQUFWO0FBQ0E7QUFDQSxnQkFBUTtBQUNKLGVBQUcsQ0FBSDtTQURKO0FBR0Esa0JBQVUsUUFBVjtBQUNBLHdCQUFnQixTQUFTLE1BQVQ7QUFDaEIsa0JBQVUsU0FBVjtNQVRFLENBSHdDOztBQWU5QyxXQUFPLG9CQUFVLGFBQVYsQ0FBUCxDQWY4QztDQUFuQyIsImZpbGUiOiJ0aW1lbGluZS5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvTWF0dC9TaXRlcy9wb3Btb3Rpb24iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgVHdlZW4gZnJvbSAnLi4vYWN0aW9ucy9Ud2Vlbic7XG5pbXBvcnQgeyBsaW5lYXIgfSBmcm9tICcuLi9hY3Rpb25zL2Vhc2luZy9wcmVzZXQtZWFzaW5nJztcbmltcG9ydCB7IHJlbGF0aXZlVmFsdWUgfSBmcm9tICcuL2NhbGMnO1xuaW1wb3J0IHsgZWFjaCB9IGZyb20gJy4vdXRpbHMnO1xuXG4vKlxuICAgIEBwYXJhbSBbYXJyYXldXG4gICAgICAgIFNlcXVlbnRpYWwgYXJyYXkgb2YgdHdlZW5zLCBlYWNoIGl0ZW0gY2FuIGJlIGEgdHdlZW4gb3IgZGVmaW5pdGlvbiBvYmo6XG5cbiAgICAgICAgW1xuICAgICAgICAgICAgbmV3IFR3ZWVuKCksXG4gICAgICAgICAgICBzdGFnZ2VyKCksXG4gICAgICAgICAgICB0aW1lbGluZSgpLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHR3ZWVuOiBuZXcgVHdlZW4oKSxcbiAgICAgICAgICAgICAgICBhdDogMTAwLFxuICAgICAgICAgICAgICAgIG9mZnNldDogXCIrPTEwMFwiXG4gICAgICAgICAgICB9XG4gICAgICAgIF1cbiovXG5jb25zdCBhbmFseXplID0gKGRlZnMpID0+IHtcbiAgICBjb25zdCB0aW1lbGluZSA9IFtdO1xuICAgIGxldCBjdXJyZW50UGxheWhlYWQgPSAwO1xuXG4gICAgZGVmcy5mb3JFYWNoKChkZWYpID0+IHtcbiAgICAgICAgY29uc3QgZGVmSXNPYmogPSBkZWYudHdlZW4gPyB0cnVlIDogZmFsc2U7XG4gICAgICAgIGNvbnN0IHR3ZWVuID0gKGRlZklzT2JqKSA/IGRlZi50d2VlbiA6IGRlZjtcblxuICAgICAgICBjdXJyZW50UGxheWhlYWQgKz0gKChkZWZJc09iaiAmJiBkZWYub2Zmc2V0KSA/XG4gICAgICAgICAgICBkZWYuYXQgfHwgcmVsYXRpdmVWYWx1ZShjdXJyZW50UGxheWhlYWQsIGRlZi5vZmZzZXQpIDogMCk7XG5cbiAgICAgICAgbGV0IGR1cmF0aW9uID0gMDtcbiAgICAgICAgZWFjaCh0d2Vlbi52YWx1ZXMsICh2YWx1ZSkgPT4gZHVyYXRpb24gPSBNYXRoLm1heChkdXJhdGlvbiwgdmFsdWUuZHVyYXRpb24pKTtcblxuICAgICAgICB0aW1lbGluZS5wdXNoKHtcbiAgICAgICAgICAgIGZyb206IGN1cnJlbnRQbGF5aGVhZCxcbiAgICAgICAgICAgIGR1cmF0aW9uOiBkdXJhdGlvbixcbiAgICAgICAgICAgIGZpcmU6IHR3ZWVuLnNlZWtUaW1lXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGN1cnJlbnRQbGF5aGVhZCArPSB0d2Vlbi5kdXJhdGlvbjtcbiAgICB9KTtcblxuICAgIHJldHVybiB7IHRvdGFsVGltZTogY3VycmVudFBsYXloZWFkLCB0aW1lbGluZSB9O1xufTtcblxuY29uc3Qgc2V0VHdlZW5zID0gKHsgdGltZWxpbmUsIHRpbWVsaW5lTGVuZ3RoLCBzdGF0ZSB9KSA9PiB7XG4gICAgY29uc3QgcGxheWhlYWQgPSBzdGF0ZS5wO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aW1lbGluZUxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IHR3ZWVuID0gdGltZWxpbmVbaV07XG4gICAgICAgIGNvbnN0IHR3ZWVuVGltZSA9IHBsYXloZWFkIC0gdHdlZW4uZnJvbTtcblxuICAgICAgICBpZiAodHdlZW5UaW1lID4gMCAmJiB0d2VlblRpbWUgPCB0d2Vlbi5kdXJhdGlvbikge1xuICAgICAgICAgICAgdHdlZW4uZmlyZSh0d2VlblRpbWUpO1xuICAgICAgICB9XG4gICAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdGltZWxpbmUoZGVmLCBwcm9wcyA9IHt9KSB7XG4gICAgY29uc3QgeyB0b3RhbFRpbWUsIHRpbWVsaW5lIH0gPSBhbmFseXplKGRlZik7XG5cbiAgICBjb25zdCB0aW1lbGluZVByb3BzID0ge1xuICAgICAgICAuLi5wcm9wcyxcbiAgICAgICAgZHVyYXRpb246IHRvdGFsVGltZSxcbiAgICAgICAgZWFzZTogbGluZWFyLFxuICAgICAgICB2YWx1ZXM6IHtcbiAgICAgICAgICAgIHA6IDFcbiAgICAgICAgfSxcbiAgICAgICAgdGltZWxpbmU6IHRpbWVsaW5lLFxuICAgICAgICB0aW1lbGluZUxlbmd0aDogdGltZWxpbmUubGVuZ3RoLFxuICAgICAgICBvblJlbmRlcjogc2V0VHdlZW5zXG4gICAgfTtcblxuICAgIHJldHVybiBuZXcgVHdlZW4odGltZWxpbmVQcm9wcyk7XG59Il19

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _defaultProps = __webpack_require__(46);
	
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
	
	var _utils = __webpack_require__(14);
	
	var _px = __webpack_require__(27);
	
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
	
	var _utils = __webpack_require__(14);
	
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
	        (0, _utils.each)(values, function (value, key) {
	            return template = template.replace(generateToken(key), value);
	        });
	        return template;
	    }
	
	};
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy92YWx1ZS10eXBlcy9jb21wbGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUVBLElBQU0sY0FBYyxrQkFBZDtBQUNOLElBQU0sZ0JBQWdCLFVBQUMsS0FBRDtXQUFXLE9BQU8sS0FBUCxHQUFlLEdBQWY7Q0FBWDs7a0JBRVA7O0FBRVgsVUFBTSxVQUFDLEtBQUQsRUFBVztBQUNiLFlBQU0sVUFBVSxNQUFNLEtBQU4sQ0FBWSxXQUFaLENBQVYsQ0FETztBQUViLGVBQVEsb0JBQVEsT0FBUixLQUFvQixRQUFRLE1BQVIsR0FBaUIsQ0FBakIsQ0FGZjtLQUFYOztBQUtOLGNBQVUsVUFBQyxLQUFELEVBQVc7QUFDakIsWUFBSSxVQUFVLENBQVYsQ0FEYTtBQUVqQixlQUFPLE1BQU0sT0FBTixDQUFjLFdBQWQsRUFBMkI7bUJBQU0sY0FBYyxTQUFkO1NBQU4sQ0FBbEMsQ0FGaUI7S0FBWDs7QUFLVixXQUFPLFVBQUMsS0FBRCxFQUFXO0FBQ2QsWUFBTSxhQUFhLEVBQWIsQ0FEUTs7QUFHZCxjQUFNLEtBQU4sQ0FBWSxXQUFaLEVBQXlCLE9BQXpCLENBQWlDLFVBQUMsS0FBRCxFQUFRLENBQVI7bUJBQWMsV0FBVyxDQUFYLElBQWdCLEtBQWhCO1NBQWQsQ0FBakMsQ0FIYzs7QUFLZCxlQUFPLFVBQVAsQ0FMYztLQUFYOztBQVFQLGFBQVMsVUFBQyxNQUFELEVBQVMsUUFBVCxFQUFzQjtBQUMzQix5QkFBSyxNQUFMLEVBQWEsVUFBQyxLQUFELEVBQVEsR0FBUjttQkFBZ0IsV0FBVyxTQUFTLE9BQVQsQ0FBaUIsY0FBYyxHQUFkLENBQWpCLEVBQXFDLEtBQXJDLENBQVg7U0FBaEIsQ0FBYixDQUQyQjtBQUUzQixlQUFPLFFBQVAsQ0FGMkI7S0FBdEIiLCJmaWxlIjoiY29tcGxleC5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvTWF0dC9TaXRlcy9wb3Btb3Rpb24iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBlYWNoLCBpc0FycmF5IH0gZnJvbSAnLi4vaW5jL3V0aWxzJztcblxuY29uc3QgRkxPQVRfUkVHRVggPSAvKC0pPyhcXGRbXFxkXFwuXSopL2c7XG5jb25zdCBnZW5lcmF0ZVRva2VuID0gKHRva2VuKSA9PiAnJHsnICsgdG9rZW4gKyAnfSc7XG5cbmV4cG9ydCBkZWZhdWx0IHtcblxuICAgIHRlc3Q6ICh2YWx1ZSkgPT4ge1xuICAgICAgICBjb25zdCBtYXRjaGVzID0gdmFsdWUubWF0Y2goRkxPQVRfUkVHRVgpO1xuICAgICAgICByZXR1cm4gKGlzQXJyYXkobWF0Y2hlcykgJiYgbWF0Y2hlcy5sZW5ndGggPiAxKTtcbiAgICB9LFxuXG4gICAgdGVtcGxhdGU6ICh2YWx1ZSkgPT4ge1xuICAgICAgICBsZXQgY291bnRlciA9IDA7XG4gICAgICAgIHJldHVybiB2YWx1ZS5yZXBsYWNlKEZMT0FUX1JFR0VYLCAoKSA9PiBnZW5lcmF0ZVRva2VuKGNvdW50ZXIrKykpO1xuICAgIH0sXG5cbiAgICBzcGxpdDogKHZhbHVlKSA9PiB7XG4gICAgICAgIGNvbnN0IHNwbGl0VmFsdWUgPSB7fTtcbiAgICAgICAgXG4gICAgICAgIHZhbHVlLm1hdGNoKEZMT0FUX1JFR0VYKS5mb3JFYWNoKCh2YWx1ZSwgaSkgPT4gc3BsaXRWYWx1ZVtpXSA9IHZhbHVlKTtcblxuICAgICAgICByZXR1cm4gc3BsaXRWYWx1ZTtcbiAgICB9LFxuXG4gICAgY29tYmluZTogKHZhbHVlcywgdGVtcGxhdGUpID0+IHtcbiAgICAgICAgZWFjaCh2YWx1ZXMsICh2YWx1ZSwga2V5KSA9PiB0ZW1wbGF0ZSA9IHRlbXBsYXRlLnJlcGxhY2UoZ2VuZXJhdGVUb2tlbihrZXkpLCB2YWx1ZSkpO1xuICAgICAgICByZXR1cm4gdGVtcGxhdGU7XG4gICAgfVxuXG59OyJdfQ==

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
	
	var _defaultProps = __webpack_require__(46);
	
	var _dictionary = __webpack_require__(45);
	
	var _utils = __webpack_require__(14);
	
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
	
	var _dictionary = __webpack_require__(45);
	
	var _utils = __webpack_require__(14);
	
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
	
	var _utils = __webpack_require__(14);
	
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
	
	var _dictionary = __webpack_require__(45);
	
	var _utils = __webpack_require__(14);
	
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
	
	var _calc = __webpack_require__(13);
	
	exports.default = function (from, to) {
	    var mapLength = from.length;
	
	    return function (value) {
	        for (var i = 1; i < mapLength; i++) {
	            if (value < from[i] || i === mapLength) {
	                return (0, _calc.getValueFromProgress)((0, _calc.restrict)((0, _calc.getProgressFromValue)(value, from[i - 1], from[i]), 0, 1), to[i - 1], to[i]);
	            }
	        }
	    };
	};
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy90cmFuc2Zvcm1lcnMvbWFwLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztrQkFFZSxVQUFDLElBQUQsRUFBTyxFQUFQLEVBQWM7QUFDekIsUUFBTSxZQUFZLEtBQUssTUFBTCxDQURPOztBQUd6QixXQUFPLFVBQUMsS0FBRCxFQUFXO0FBQ2QsYUFBSyxJQUFJLElBQUksQ0FBSixFQUFPLElBQUksU0FBSixFQUFlLEdBQS9CLEVBQW9DO0FBQ2hDLGdCQUFJLFFBQVEsS0FBSyxDQUFMLENBQVIsSUFBbUIsTUFBTSxTQUFOLEVBQWlCO0FBQ3BDLHVCQUFPLGdDQUFxQixvQkFBUyxnQ0FBcUIsS0FBckIsRUFBNEIsS0FBSyxJQUFJLENBQUosQ0FBakMsRUFBeUMsS0FBSyxDQUFMLENBQXpDLENBQVQsRUFBNEQsQ0FBNUQsRUFBK0QsQ0FBL0QsQ0FBckIsRUFBd0YsR0FBRyxJQUFJLENBQUosQ0FBM0YsRUFBbUcsR0FBRyxDQUFILENBQW5HLENBQVAsQ0FEb0M7YUFBeEM7U0FESjtLQURHLENBSGtCO0NBQWQiLCJmaWxlIjoibWFwLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9NYXR0L1NpdGVzL3BvcG1vdGlvbiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGdldFByb2dyZXNzRnJvbVZhbHVlLCBnZXRWYWx1ZUZyb21Qcm9ncmVzcywgcmVzdHJpY3QgfSBmcm9tICcuLi9pbmMvY2FsYyc7XG5cbmV4cG9ydCBkZWZhdWx0IChmcm9tLCB0bykgPT4ge1xuICAgIGNvbnN0IG1hcExlbmd0aCA9IGZyb20ubGVuZ3RoO1xuXG4gICAgcmV0dXJuICh2YWx1ZSkgPT4ge1xuICAgICAgICBmb3IgKGxldCBpID0gMTsgaSA8IG1hcExlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAodmFsdWUgPCBmcm9tW2ldIHx8IGkgPT09IG1hcExlbmd0aCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBnZXRWYWx1ZUZyb21Qcm9ncmVzcyhyZXN0cmljdChnZXRQcm9ncmVzc0Zyb21WYWx1ZSh2YWx1ZSwgZnJvbVtpIC0gMV0sIGZyb21baV0pLCAwLCAxKSwgdG9baSAtIDFdLCB0b1tpXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xufTsiXX0=

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	exports.__esModule = true;
	
	var _Process2 = __webpack_require__(6);
	
	var _Process3 = _interopRequireDefault(_Process2);
	
	var _calc = __webpack_require__(13);
	
	var _utils = __webpack_require__(14);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var DEFAULT_PROP = 'current';
	var NUMERICAL_VALUES = [DEFAULT_PROP, 'from', 'to', 'min', 'max'];
	
	/*
	    Map key given given stateMap
	
	    @param [string]
	    @param [Renderer]
	    @return [string]
	*/
	var mapKey = function (key, renderer) {
	    return renderer && renderer.stateMap ? renderer.stateMap[key] || key : key;
	};
	
	var Action = function (_Process) {
	    _inherits(Action, _Process);
	
	    function Action(props) {
	        _classCallCheck(this, Action);
	
	        props.state = {};
	
	        // Initalise renderer
	
	        var _this = _possibleConstructorReturn(this, _Process.call(this, props));
	
	        if (_this.onRender && _this.onRender.init) {
	            _this.onRender.init(_this);
	        }
	        return _this;
	    }
	
	    /*
	        # Set Action properties
	        ## Set user-defined Action properties
	         @param [object]
	        @return [Action]
	    */
	
	    Action.prototype.set = function set(props) {
	        var _this2 = this;
	
	        var values = props.values;
	
	        var propsToSet = _objectWithoutProperties(props, ['values']);
	
	        _Process.prototype.set.call(this, propsToSet);
	
	        this.values = this.values || {};
	        this.valueKeys = this.valueKeys || [];
	        this.parentKeys = this.parentKeys || [];
	
	        // Merge new `value` properties with existing
	        var currentValues = this.values;
	        var defaultValue = this.getDefaultValue();
	        var defaultValueProp = this.getDefaultValueProp();
	        var renderer = this.onRender;
	        var valueTypeMap = renderer && renderer.valueTypeMap ? renderer.valueTypeMap : false;
	
	        // Inherit value properties from `props`
	        (0, _utils.each)(defaultValue, function (value, key) {
	            if (propsToSet[key] !== undefined) {
	                defaultValue[key] = propsToSet[key];
	            }
	        });
	
	        // Check all values and split into child values as neccessary
	        (0, _utils.each)(values, function (value, key) {
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
	
	                        // Or if our renderer has a typeMap, use that
	                    } else if (valueTypeMap) {
	                            valueType = valueTypeMap[mapKey(key, renderer)];
	                        }
	
	                    // Maybe run `test` on color here
	                }
	
	            // If we've got a valueType then preprocess the value accordingly
	            if (valueType) {
	                // If this value should be split, split
	                if (valueType.split) {
	                    (function () {
	                        var childValues = {};
	
	                        // Loop over numerical values and split any present
	                        NUMERICAL_VALUES.forEach(function (propName) {
	                            if (newValue.hasOwnProperty(propName)) {
	                                var splitValues = valueType.split(newValue[propName]);
	
	                                (0, _utils.each)(splitValues, function (splitValue, splitKey) {
	                                    // Create new child value if doesn't exist
	                                    if (!childValues[splitKey]) {
	                                        childValues[splitKey] = {};
	
	                                        if (valueType.defaultProps) {
	                                            childValues[splitKey] = valueType.defaultProps[splitKey] ? _extends({}, valueType.defaultProps[splitKey]) : _extends({}, valueType.defaultProps);
	                                        }
	                                    }
	
	                                    childValues[splitKey][propName] = splitValue;
	                                });
	                            }
	                        });
	
	                        newValue.children = [];
	
	                        // Now loop through all child values and add them as normal values
	                        (0, _utils.each)(childValues, function (childValue, childKey) {
	                            var combinedKey = key + childKey;
	
	                            newValue.children.push(combinedKey);
	                            currentValues[combinedKey] = childValue;
	
	                            if (_this2.valueKeys.indexOf(combinedKey) === -1) {
	                                _this2.valueKeys.push(combinedKey);
	                            }
	                        });
	
	                        // Or we just have default value props, load those 
	                    })();
	                } else if (valueType.defaultProps) {
	                        newValue = _extends({}, valueType.defaultProps, newValue);
	                    }
	            }
	
	            // Update appropriate lists with value key
	            if (newValue.children) {
	                if (_this2.parentKeys.indexOf(key) === -1) {
	                    _this2.parentKeys.push(key);
	                }
	            } else {
	                if (_this2.valueKeys.indexOf(key) === -1) {
	                    _this2.valueKeys.push(key);
	                }
	            }
	
	            currentValues[key] = newValue;
	        });
	
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
	
	        for (var i = 0; i < this.numValueKeys; i++) {
	            var key = this.valueKeys[i];
	            var value = this.values[key];
	
	            var updatedValue = value.current;
	
	            // Update value based on active action
	            if (value.action) {
	                updatedValue = value.action.values[key].current;
	            }
	
	            // Run transform function (if present)
	            if (value.transform) {
	                updatedValue = value.transform(updatedValue, key, this);
	            }
	
	            // Smooth value if we have smoothing
	            if (value.smooth) {
	                updatedValue = (0, _calc.smooth)(updatedValue, value.current, elapsed, value.smooth);
	            }
	
	            // Round value
	            if (value.round) {
	                updatedValue = Math.round(updatedValue);
	            }
	
	            // Cap to minimum value
	            if (value.min !== undefined) {
	                updatedValue = Math.max(updatedValue, value.min);
	            }
	
	            // Cap to maximum value
	            if (value.max !== undefined) {
	                updatedValue = Math.min(updatedValue, value.max);
	            }
	
	            value.velocity = (0, _calc.speedPerSecond)(updatedValue - value.current, elapsed);
	
	            if (updatedValue !== value.current) {
	                hasChanged = true;
	            }
	
	            value.current = updatedValue;
	        }
	
	        return this.onCleanup ? true : hasChanged;
	    };
	
	    Action.prototype.onPreRender = function onPreRender() {
	        for (var i = 0; i < this.numValueKeys; i++) {
	            var key = this.valueKeys[i];
	            var value = this.values[key];
	
	            var valueForState = value.unit ? value.current + value.unit : value.current;
	
	            // Add straight to state if no parent
	            if (!value.parent) {
	                this.state[mapKey(key, this.onRender)] = valueForState;
	
	                // Or add to parent
	            } else {
	                    this.values[value.parent].children[key] = valueForState;
	                }
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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hY3Rpb25zL0FjdGlvbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJQSxJQUFNLGVBQWUsU0FBZjtBQUNOLElBQU0sbUJBQW1CLENBQUMsWUFBRCxFQUFlLE1BQWYsRUFBdUIsSUFBdkIsRUFBNkIsS0FBN0IsRUFBb0MsS0FBcEMsQ0FBbkI7Ozs7Ozs7OztBQVNOLElBQU0sU0FBUyxVQUFDLEdBQUQsRUFBTSxRQUFOO1dBQW1CLFFBQUMsSUFBWSxTQUFTLFFBQVQsR0FBcUIsU0FBUyxRQUFULENBQWtCLEdBQWxCLEtBQTBCLEdBQTFCLEdBQWdDLEdBQWxFO0NBQW5COztJQUVNOzs7QUFDakIsYUFEaUIsTUFDakIsQ0FBWSxLQUFaLEVBQW1COzhCQURGLFFBQ0U7O0FBQ2YsY0FBTSxLQUFOLEdBQWMsRUFBZCxDQURlOzs7O3FEQUVmLG9CQUFNLEtBQU4sR0FGZTs7QUFLZixZQUFJLE1BQUssUUFBTCxJQUFpQixNQUFLLFFBQUwsQ0FBYyxJQUFkLEVBQW9CO0FBQ3JDLGtCQUFLLFFBQUwsQ0FBYyxJQUFkLFFBRHFDO1NBQXpDO3FCQUxlO0tBQW5COzs7Ozs7Ozs7QUFEaUIscUJBa0JqQixtQkFBSSxPQUFPOzs7WUFDQyxTQUEwQixNQUExQixPQUREOztZQUNZLHNDQUFlLG1CQUQzQjs7QUFHUCwyQkFBTSxHQUFOLFlBQVUsVUFBVixFQUhPOztBQUtQLGFBQUssTUFBTCxHQUFjLEtBQUssTUFBTCxJQUFlLEVBQWYsQ0FMUDtBQU1QLGFBQUssU0FBTCxHQUFpQixLQUFLLFNBQUwsSUFBa0IsRUFBbEIsQ0FOVjtBQU9QLGFBQUssVUFBTCxHQUFrQixLQUFLLFVBQUwsSUFBbUIsRUFBbkI7OztBQVBYLFlBVUQsZ0JBQWdCLEtBQUssTUFBTCxDQVZmO0FBV1AsWUFBTSxlQUFlLEtBQUssZUFBTCxFQUFmLENBWEM7QUFZUCxZQUFNLG1CQUFtQixLQUFLLG1CQUFMLEVBQW5CLENBWkM7QUFhUCxZQUFNLFdB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R0FBYSxNQUFNLE9BQU47OztBQUoxQixnQkFPcEMsQ0FBQyxNQUFNLE1BQU4sRUFBYztBQUNmLHFCQUFLLEtBQUwsQ0FBVyxPQUFPLEdBQVAsRUFBWSxLQUFLLFFBQUwsQ0FBdkIsSUFBeUMsYUFBekM7OztBQURlLGFBQW5CLE1BSU87QUFDSCx5QkFBSyxNQUFMLENBQVksTUFBTSxNQUFOLENBQVosQ0FBMEIsUUFBMUIsQ0FBbUMsR0FBbkMsSUFBMEMsYUFBMUMsQ0FERztpQkFKUDtTQVBKOzs7QUF6TWEscUJBME5qQix5QkFBUTtBQUNKLDJCQUFNLElBQU4sWUFESTtBQUVKLGVBQU8sSUFBUCxDQUZJOzs7QUExTlMscUJBK05qQiwyQkFBUztBQUNMLDJCQUFNLEtBQU4sWUFESztBQUVMLGVBQU8sSUFBUCxDQUZLOzs7Ozs7OztBQS9OUSxxQkF5T2pCLDZDQUFrQjtBQUNkLGVBQU87QUFDSCxxQkFBUyxDQUFUO0FBQ0Esc0JBQVUsQ0FBVjtTQUZKLENBRGM7Ozs7Ozs7OztBQXpPRCxxQkFzUGpCLHFEQUFzQjtBQUNsQixlQUFPLFlBQVAsQ0FEa0I7OztXQXRQTCIsImZpbGUiOiJBY3Rpb24uanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL01hdHQvU2l0ZXMvcG9wbW90aW9uIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFByb2Nlc3MgZnJvbSAnLi4vcHJvY2Vzcy9Qcm9jZXNzJztcbmltcG9ydCB7IHNtb290aCwgc3BlZWRQZXJTZWNvbmQgfSBmcm9tICcuLi9pbmMvY2FsYyc7XG5pbXBvcnQgeyBlYWNoLCBpc09iaiB9IGZyb20gJy4uL2luYy91dGlscyc7XG5cbmNvbnN0IERFRkFVTFRfUFJPUCA9ICdjdXJyZW50JztcbmNvbnN0IE5VTUVSSUNBTF9WQUxVRVMgPSBbREVGQVVMVF9QUk9QLCAnZnJvbScsICd0bycsICdtaW4nLCAnbWF4J107XG5cbi8qXG4gICAgTWFwIGtleSBnaXZlbiBnaXZlbiBzdGF0ZU1hcFxuXG4gICAgQHBhcmFtIFtzdHJpbmddXG4gICAgQHBhcmFtIFtSZW5kZXJlcl1cbiAgICBAcmV0dXJuIFtzdHJpbmddXG4qL1xuY29uc3QgbWFwS2V5ID0gKGtleSwgcmVuZGVyZXIpID0+IChyZW5kZXJlciAmJiByZW5kZXJlci5zdGF0ZU1hcCkgPyByZW5kZXJlci5zdGF0ZU1hcFtrZXldIHx8IGtleSA6IGtleTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQWN0aW9uIGV4dGVuZHMgUHJvY2VzcyB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgcHJvcHMuc3RhdGUgPSB7fTtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuXG4gICAgICAgIC8vIEluaXRhbGlzZSByZW5kZXJlciBcbiAgICAgICAgaWYgKHRoaXMub25SZW5kZXIgJiYgdGhpcy5vblJlbmRlci5pbml0KSB7XG4gICAgICAgICAgICB0aGlzLm9uUmVuZGVyLmluaXQodGhpcyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKlxuICAgICAgICAjIFNldCBBY3Rpb24gcHJvcGVydGllc1xuICAgICAgICAjIyBTZXQgdXNlci1kZWZpbmVkIEFjdGlvbiBwcm9wZXJ0aWVzXG5cbiAgICAgICAgQHBhcmFtIFtvYmplY3RdXG4gICAgICAgIEByZXR1cm4gW0FjdGlvbl1cbiAgICAqL1xuICAgIHNldChwcm9wcykge1xuICAgICAgICBjb25zdCB7IHZhbHVlcywgLi4ucHJvcHNUb1NldCB9ID0gcHJvcHM7XG5cbiAgICAgICAgc3VwZXIuc2V0KHByb3BzVG9TZXQpO1xuXG4gICAgICAgIHRoaXMudmFsdWVzID0gdGhpcy52YWx1ZXMgfHwge307XG4gICAgICAgIHRoaXMudmFsdWVLZXlzID0gdGhpcy52YWx1ZUtleXMgfHwgW107XG4gICAgICAgIHRoaXMucGFyZW50S2V5cyA9IHRoaXMucGFyZW50S2V5cyB8fCBbXTtcblxuICAgICAgICAvLyBNZXJnZSBuZXcgYHZhbHVlYCBwcm9wZXJ0aWVzIHdpdGggZXhpc3RpbmdcbiAgICAgICAgY29uc3QgY3VycmVudFZhbHVlcyA9IHRoaXMudmFsdWVzO1xuICAgICAgICBjb25zdCBkZWZhdWx0VmFsdWUgPSB0aGlzLmdldERlZmF1bHRWYWx1ZSgpO1xuICAgICAgICBjb25zdCBkZWZhdWx0VmFsdWVQcm9wID0gdGhpcy5nZXREZWZhdWx0VmFsdWVQcm9wKCk7XG4gICAgICAgIGNvbnN0IHJlbmRlcmVyID0gdGhpcy5vblJlbmRlcjtcbiAgICAgICAgbGV0IHZhbHVlVHlwZU1hcCA9IChyZW5kZXJlciAmJiByZW5kZXJlci52YWx1ZVR5cGVNYXApID8gcmVuZGVyZXIudmFsdWVUeXBlTWFwIDogZmFsc2U7XG5cbiAgICAgICAgLy8gSW5oZXJpdCB2YWx1ZSBwcm9wZXJ0aWVzIGZyb20gYHByb3BzYFxuICAgICAgICBlYWNoKGRlZmF1bHRWYWx1ZSwgKHZhbHVlLCBrZXkpID0+IHtcbiAgICAgICAgICAgIGlmIChwcm9wc1RvU2V0W2tleV0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZVtrZXldID0gcHJvcHNUb1NldFtrZXldO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICAvLyBDaGVjayBhbGwgdmFsdWVzIGFuZCBzcGxpdCBpbnRvIGNoaWxkIHZhbHVlcyBhcyBuZWNjZXNzYXJ5XG4gICAgICAgIGVhY2godmFsdWVzLCAodmFsdWUsIGtleSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgZXhpc3RpbmdWYWx1ZSA9IGN1cnJlbnRWYWx1ZXNba2V5XTtcbiAgICAgICAgICAgIGxldCB2YWx1ZVR5cGUgPSB7fTtcbiAgICAgICAgICAgIGxldCBuZXdWYWx1ZSA9IHt9O1xuXG4gICAgICAgICAgICAvLyBDb252ZXJ0IG5ldyB2YWx1ZSBpbnRvIG9iamVjdCBpZiBpdCBpc24ndCBhbHJlYWR5XG4gICAgICAgICAgICBpZiAoaXNPYmoodmFsdWUpKSB7XG4gICAgICAgICAgICAgICAgbmV3VmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgbmV3VmFsdWVbZGVmYXVsdFZhbHVlUHJvcF0gPSB2YWx1ZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gSWYgdmFsdWUgYWxyZWFkeSBleGlzdHMsIGNoZWNrIGZvciBhbmQgdXNlIGV4aXN0aW5nIHR5cGVcbiAgICAgICAgICAgIGlmIChleGlzdGluZ1ZhbHVlKSB7XG4gICAgICAgICAgICAgICAgbmV3VmFsdWUgPSB7IC4uLmV4aXN0aW5nVmFsdWUsIC4uLm5ld1ZhbHVlIH07XG4gICAgICAgICAgICAgICAgdmFsdWVUeXBlID0gZXhpc3RpbmdWYWx1ZS50eXBlO1xuXG4gICAgICAgICAgICAvLyBJZiB0aGlzIGlzIGEgbmV3IHZhbHVlLCBjaGVjayBmb3IgdHlwZVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBuZXdWYWx1ZSA9IHsgLi4uZGVmYXVsdFZhbHVlLCAuLi5uZXdWYWx1ZSB9O1xuICAgICAgICAgICAgICAgIC8vIElmIG9uZSBpcyBleHBsaWNpdGx5IGFzc2lnbmVkLCB1c2UgdGhhdFxuICAgICAgICAgICAgICAgIGlmICh2YWx1ZS50eXBlKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlVHlwZSA9IHZhbHVlLnR5cGU7XG5cbiAgICAgICAgICAgICAgICAvLyBPciBpZiBvdXIgcmVuZGVyZXIgaGFzIGEgdHlwZU1hcCwgdXNlIHRoYXRcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHZhbHVlVHlwZU1hcCkge1xuICAgICAgICAgICAgICAgICAgICB2YWx1ZVR5cGUgPSB2YWx1ZVR5cGVNYXBbbWFwS2V5KGtleSwgcmVuZGVyZXIpXTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAvLyBNYXliZSBydW4gYHRlc3RgIG9uIGNvbG9yIGhlcmVcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gSWYgd2UndmUgZ290IGEgdmFsdWVUeXBlIHRoZW4gcHJlcHJvY2VzcyB0aGUgdmFsdWUgYWNjb3JkaW5nbHlcbiAgICAgICAgICAgIGlmICh2YWx1ZVR5cGUpIHtcbiAgICAgICAgICAgICAgICAvLyBJZiB0aGlzIHZhbHVlIHNob3VsZCBiZSBzcGxpdCwgc3BsaXRcbiAgICAgICAgICAgICAgICBpZiAodmFsdWVUeXBlLnNwbGl0KSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGNoaWxkVmFsdWVzID0ge307XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gTG9vcCBvdmVyIG51bWVyaWNhbCB2YWx1ZXMgYW5kIHNwbGl0IGFueSBwcmVzZW50XG4gICAgICAgICAgICAgICAgICAgIE5VTUVSSUNBTF9WQUxVRVMuZm9yRWFjaCgocHJvcE5hbWUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChuZXdWYWx1ZS5oYXNPd25Qcm9wZXJ0eShwcm9wTmFtZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBzcGxpdFZhbHVlcyA9IHZhbHVlVHlwZS5zcGxpdChuZXdWYWx1ZVtwcm9wTmFtZV0pO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWFjaChzcGxpdFZhbHVlcywgKHNwbGl0VmFsdWUsIHNwbGl0S2V5KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIENyZWF0ZSBuZXcgY2hpbGQgdmFsdWUgaWYgZG9lc24ndCBleGlzdFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWNoaWxkVmFsdWVzW3NwbGl0S2V5XSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hpbGRWYWx1ZXNbc3BsaXRLZXldID0ge307XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh2YWx1ZVR5cGUuZGVmYXVsdFByb3BzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hpbGRWYWx1ZXNbc3BsaXRLZXldID0gKHZhbHVlVHlwZS5kZWZhdWx0UHJvcHNbc3BsaXRLZXldKSA/IHsgLi4udmFsdWVUeXBlLmRlZmF1bHRQcm9wc1tzcGxpdEtleV0gfSA6IHsgLi4udmFsdWVUeXBlLmRlZmF1bHRQcm9wcyB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hpbGRWYWx1ZXNbc3BsaXRLZXldW3Byb3BOYW1lXSA9IHNwbGl0VmFsdWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgICAgIG5ld1ZhbHVlLmNoaWxkcmVuID0gW107XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gTm93IGxvb3AgdGhyb3VnaCBhbGwgY2hpbGQgdmFsdWVzIGFuZCBhZGQgdGhlbSBhcyBub3JtYWwgdmFsdWVzXG4gICAgICAgICAgICAgICAgICAgIGVhY2goY2hpbGRWYWx1ZXMsIChjaGlsZFZhbHVlLCBjaGlsZEtleSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgY29tYmluZWRLZXkgPSBrZXkgKyBjaGlsZEtleTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgbmV3VmFsdWUuY2hpbGRyZW4ucHVzaChjb21iaW5lZEtleSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50VmFsdWVzW2NvbWJpbmVkS2V5XSA9IGNoaWxkVmFsdWU7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnZhbHVlS2V5cy5pbmRleE9mKGNvbWJpbmVkS2V5KSA9PT0gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnZhbHVlS2V5cy5wdXNoKGNvbWJpbmVkS2V5KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICAvLyBPciB3ZSBqdXN0IGhhdmUgZGVmYXVsdCB2YWx1ZSBwcm9wcywgbG9hZCB0aG9zZSAgIFxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodmFsdWVUeXBlLmRlZmF1bHRQcm9wcykge1xuICAgICAgICAgICAgICAgICAgICBuZXdWYWx1ZSA9IHsgLi4udmFsdWVUeXBlLmRlZmF1bHRQcm9wcywgLi4ubmV3VmFsdWUgfTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIFVwZGF0ZSBhcHByb3ByaWF0ZSBsaXN0cyB3aXRoIHZhbHVlIGtleVxuICAgICAgICAgICAgaWYgKG5ld1ZhbHVlLmNoaWxkcmVuKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMucGFyZW50S2V5cy5pbmRleE9mKGtleSkgPT09IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGFyZW50S2V5cy5wdXNoKGtleSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy52YWx1ZUtleXMuaW5kZXhPZihrZXkpID09PSAtMSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnZhbHVlS2V5cy5wdXNoKGtleSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjdXJyZW50VmFsdWVzW2tleV0gPSBuZXdWYWx1ZTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gUHJlY29tcHV0ZSB2YWx1ZSBrZXkgYW5kIHBhcmVudCBrZXkgbGVuZ3RoIHRvIHByZXZlbnQgcGVyLWZyYW1lIG1lYXN1cmVtZW50XG4gICAgICAgIHRoaXMubnVtVmFsdWVLZXlzID0gdGhpcy52YWx1ZUtleXMubGVuZ3RoO1xuICAgICAgICB0aGlzLm51bVBhcmVudEtleXMgPSB0aGlzLnBhcmVudEtleXMubGVuZ3RoO1xuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIC8qXG4gICAgICAgIERlY2lkZSB3aGV0aGVyIHRoaXMgQWN0aW9uIHdpbGwgcmVuZGVyIG9uIG5leHQgZnJhbWVcblxuICAgICAgICBAcGFyYW0gW0FjdGlvbl1cbiAgICAgICAgQHBhcmFtIFtudW1iZXJdXG4gICAgICAgIEBwYXJhbSBbbnVtYmVyXVxuICAgICAgICBAcmV0dXJuIFtib29sZWFuXTogUmV0dXJuIHRydWUgdG8gcmVuZGVyXG4gICAgKi9cbiAgICB3aWxsUmVuZGVyKGFjdGlvbiwgZnJhbWVTdGFtcCwgZWxhcHNlZCkge1xuICAgICAgICBsZXQgaGFzQ2hhbmdlZCA9IGZhbHNlO1xuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5udW1WYWx1ZUtleXM7IGkrKykge1xuICAgICAgICAgICAgY29uc3Qga2V5ID0gdGhpcy52YWx1ZUtleXNbaV07XG4gICAgICAgICAgICBjb25zdCB2YWx1ZSA9IHRoaXMudmFsdWVzW2tleV07XG5cbiAgICAgICAgICAgIGxldCB1cGRhdGVkVmFsdWUgPSB2YWx1ZS5jdXJyZW50O1xuXG4gICAgICAgICAgICAvLyBVcGRhdGUgdmFsdWUgYmFzZWQgb24gYWN0aXZlIGFjdGlvblxuICAgICAgICAgICAgaWYgKHZhbHVlLmFjdGlvbikge1xuICAgICAgICAgICAgICAgIHVwZGF0ZWRWYWx1ZSA9IHZhbHVlLmFjdGlvbi52YWx1ZXNba2V5XS5jdXJyZW50O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBSdW4gdHJhbnNmb3JtIGZ1bmN0aW9uIChpZiBwcmVzZW50KVxuICAgICAgICAgICAgaWYgKHZhbHVlLnRyYW5zZm9ybSkge1xuICAgICAgICAgICAgICAgIHVwZGF0ZWRWYWx1ZSA9IHZhbHVlLnRyYW5zZm9ybSh1cGRhdGVkVmFsdWUsIGtleSwgdGhpcyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIFNtb290aCB2YWx1ZSBpZiB3ZSBoYXZlIHNtb290aGluZ1xuICAgICAgICAgICAgaWYgKHZhbHVlLnNtb290aCkge1xuICAgICAgICAgICAgICAgIHVwZGF0ZWRWYWx1ZSA9IHNtb290aCh1cGRhdGVkVmFsdWUsIHZhbHVlLmN1cnJlbnQsIGVsYXBzZWQsIHZhbHVlLnNtb290aCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIFJvdW5kIHZhbHVlXG4gICAgICAgICAgICBpZiAodmFsdWUucm91bmQpIHtcbiAgICAgICAgICAgICAgICB1cGRhdGVkVmFsdWUgPSBNYXRoLnJvdW5kKHVwZGF0ZWRWYWx1ZSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIENhcCB0byBtaW5pbXVtIHZhbHVlXG4gICAgICAgICAgICBpZiAodmFsdWUubWluICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICB1cGRhdGVkVmFsdWUgPSBNYXRoLm1heCh1cGRhdGVkVmFsdWUsIHZhbHVlLm1pbik7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIENhcCB0byBtYXhpbXVtIHZhbHVlXG4gICAgICAgICAgICBpZiAodmFsdWUubWF4ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICB1cGRhdGVkVmFsdWUgPSBNYXRoLm1pbih1cGRhdGVkVmFsdWUsIHZhbHVlLm1heCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHZhbHVlLnZlbG9jaXR5ID0gc3BlZWRQZXJTZWNvbmQodXBkYXRlZFZhbHVlIC0gdmFsdWUuY3VycmVudCwgZWxhcHNlZCk7XG5cbiAgICAgICAgICAgIGlmICh1cGRhdGVkVmFsdWUgIT09IHZhbHVlLmN1cnJlbnQpIHtcbiAgICAgICAgICAgICAgICBoYXNDaGFuZ2VkID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdmFsdWUuY3VycmVudCA9IHVwZGF0ZWRWYWx1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiAodGhpcy5vbkNsZWFudXApID8gdHJ1ZSA6IGhhc0NoYW5nZWQ7XG4gICAgfVxuXG4gICAgb25QcmVSZW5kZXIoKSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5udW1WYWx1ZUtleXM7IGkrKykge1xuICAgICAgICAgICAgY29uc3Qga2V5ID0gdGhpcy52YWx1ZUtleXNbaV07XG4gICAgICAgICAgICBjb25zdCB2YWx1ZSA9IHRoaXMudmFsdWVzW2tleV07XG5cbiAgICAgICAgICAgIGNvbnN0IHZhbHVlRm9yU3RhdGUgPSAodmFsdWUudW5pdCkgPyB2YWx1ZS5jdXJyZW50ICsgdmFsdWUudW5pdCA6IHZhbHVlLmN1cnJlbnQ7XG5cbiAgICAgICAgICAgIC8vIEFkZCBzdHJhaWdodCB0byBzdGF0ZSBpZiBubyBwYXJlbnRcbiAgICAgICAgICAgIGlmICghdmFsdWUucGFyZW50KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zdGF0ZVttYXBLZXkoa2V5LCB0aGlzLm9uUmVuZGVyKV0gPSB2YWx1ZUZvclN0YXRlO1xuXG4gICAgICAgICAgICAvLyBPciBhZGQgdG8gcGFyZW50XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMudmFsdWVzW3ZhbHVlLnBhcmVudF0uY2hpbGRyZW5ba2V5XSA9IHZhbHVlRm9yU3RhdGU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwYXVzZSgpIHtcbiAgICAgICAgc3VwZXIuc3RvcCgpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICByZXN1bWUoKSB7XG4gICAgICAgIHN1cGVyLnN0YXJ0KCk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIC8qXG4gICAgICAgICMgR2V0IGRlZmF1bHQgQWN0aW9uIHZhbHVlIHByb3BlcnRpZXNcblxuICAgICAgICBAcmV0dXJuIFtvYmplY3RdXG4gICAgKi9cbiAgICBnZXREZWZhdWx0VmFsdWUoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBjdXJyZW50OiAwLFxuICAgICAgICAgICAgdmVsb2NpdHk6IDBcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICAvKlxuICAgICAgICAjIEdldCBkZWZhdWx0IEFjdGlvbiB2YWx1ZSBwcm9wZXJ0eSBuYW1lXG4gICAgICAgICMjIFNldCB0aGlzIGB2YWx1ZWAgcHJvcGVydHkgd2hlbiBzZXQgYXMgdmFsdWUgaW5zdGVhZCBvZiBvYmplY3RcblxuICAgICAgICBAcmV0dXJuIFtzdHJpbmddXG4gICAgKi9cbiAgICBnZXREZWZhdWx0VmFsdWVQcm9wKCkge1xuICAgICAgICByZXR1cm4gREVGQVVMVF9QUk9QO1xuICAgIH1cbn1cbiJdfQ==

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _Input2 = __webpack_require__(7);
	
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
	        _Input.prototype.start.call(this);
	        document.documentElement.addEventListener(this.moveEvent, this.latest);
	    };
	
	    Pointer.prototype.stop = function stop() {
	        _Input.prototype.stop.call(this);
	        document.documentElement.removeEventListener(this.moveEvent, this.latest);
	    };
	
	    return Pointer;
	}(_Input3.default);
	
	exports.default = Pointer;
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9pbnB1dC9Qb2ludGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFcUI7OztBQUNqQixhQURpQixPQUNqQixDQUFZLFlBQVosRUFBMEIsU0FBMUIsRUFBcUMsWUFBckMsRUFBbUQ7OEJBRGxDLFNBQ2tDOztxREFDL0Msa0JBQU0sWUFBTixHQUQrQzs7QUFFL0MsY0FBSyxZQUFMLEdBQW9CLFlBQXBCLENBRitDO0FBRy9DLGNBQUssU0FBTCxHQUFpQixTQUFqQixDQUgrQzs7S0FBbkQ7O0FBRGlCLHNCQU9qQix5QkFBTyxHQUFHO0FBQ04seUJBQU0sTUFBTixZQUFhLEtBQUssWUFBTCxDQUFrQixDQUFsQixDQUFiLEVBRE07QUFFTixVQUFFLGNBQUYsR0FGTTs7O0FBUE8sc0JBWWpCLHlCQUFRO0FBQ0oseUJBQU0sS0FBTixZQURJO0FBRUosaUJBQVMsZUFBVCxDQUF5QixnQkFBekIsQ0FBMEMsS0FBSyxTQUFMLEVBQWdCLEtBQUssTUFBTCxDQUExRCxDQUZJOzs7QUFaUyxzQkFpQmpCLHVCQUFPO0FBQ0gseUJBQU0sSUFBTixZQURHO0FBRUgsaUJBQVMsZUFBVCxDQUF5QixtQkFBekIsQ0FBNkMsS0FBSyxTQUFMLEVBQWdCLEtBQUssTUFBTCxDQUE3RCxDQUZHOzs7V0FqQlUiLCJmaWxlIjoiUG9pbnRlci5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvTWF0dC9TaXRlcy9wb3Btb3Rpb24iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSW5wdXQgZnJvbSAnLi9JbnB1dCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBvaW50ZXIgZXh0ZW5kcyBJbnB1dCB7XG4gICAgY29uc3RydWN0b3IoaW5pdGlhbFN0YXRlLCBtb3ZlRXZlbnQsIGV2ZW50VG9Qb2ludCkge1xuICAgICAgICBzdXBlcihpbml0aWFsU3RhdGUpO1xuICAgICAgICB0aGlzLmV2ZW50VG9Qb2ludCA9IGV2ZW50VG9Qb2ludDtcbiAgICAgICAgdGhpcy5tb3ZlRXZlbnQgPSBtb3ZlRXZlbnQ7XG4gICAgfVxuXG4gICAgbGF0ZXN0KGUpIHtcbiAgICAgICAgc3VwZXIubGF0ZXN0KHRoaXMuZXZlbnRUb1BvaW50KGUpKTtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH1cblxuICAgIHN0YXJ0KCkge1xuICAgICAgICBzdXBlci5zdGFydCgpO1xuICAgICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcih0aGlzLm1vdmVFdmVudCwgdGhpcy5sYXRlc3QpO1xuICAgIH1cblxuICAgIHN0b3AoKSB7XG4gICAgICAgIHN1cGVyLnN0b3AoKTtcbiAgICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIodGhpcy5tb3ZlRXZlbnQsIHRoaXMubGF0ZXN0KTtcbiAgICB9XG59XG4iXX0=

/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports.getProcessId = getProcessId;
	exports.activate = activate;
	exports.deactivate = deactivate;
	
	var _timer = __webpack_require__(16);
	
	var _timer2 = _interopRequireDefault(_timer);
	
	var _tick = __webpack_require__(47);
	
	var _tick2 = _interopRequireDefault(_tick);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var processOrder = [{ step: 'onFrameStart' }, { step: 'onUpdate' }, { step: 'willRender', decideRender: true }, { step: 'onRender', isRender: true }, { step: 'postRender', isRender: true }, { step: 'onFrameEnd' }, { step: 'onCleanup' }];
	var numProcessSteps = processOrder.length;
	
	// [boolean]: Is loop running?
	var isRunning = false;
	
	// [int]: Process ID, incremented for each new process
	var currentProcessId = 0;
	
	// [int]: Number of running processes
	var runningCount = 0;
	
	// [int]: Number of running non-background processes
	var activeCount = 0;
	
	// [array]: Array of active process IDs
	var runningIds = [];
	
	// [object]: Map of active processes
	var runningProcesses = {};
	
	// [array]: Array of process IDs queued for activation
	var activateQueue = [];
	
	// [array]: Array of process IDs queued for deactivation
	var deactivateQueue = [];
	
	/*
	    Update lists
	
	    @param [number]
	    @param [array]
	    @param [array]
	*/
	function updateLists(id, inList, outList) {
	    var inPosition = inList.indexOf(inList);
	    var outPosition = outList.indexOf(outList);
	
	    if (inPosition === -1) {
	        inList.push(id);
	    }
	
	    if (outPosition > -1) {
	        outList.splice(outPosition, 1);
	    }
	}
	
	/*
	    Update running
	
	    [boolean]: `true` to add
	    [boolean]: `true` if lazy
	*/
	function updateCount(add, isLazy) {
	    var modify = add ? 1 : -1;
	
	    runningCount += modify;
	
	    if (!isLazy) {
	        activeCount += modify;
	    }
	}
	
	function resolveQueues() {
	    var activateQueueLength = activateQueue.length;
	    var deactivateQueueLength = deactivateQueue.length;
	
	    while (deactivateQueue--) {
	        var id = deactivateQueue[deactivateQueueLength];
	        var activeIdIndex = runningIds.indexOf(id);
	        var process = runningProcesses[id];
	
	        if (activeIdIndex > -1) {
	            runningIds.splice(activeIdIndex, 1);
	            updateCount(false, process.isLazy);
	            runningProcesses[id] = undefined;
	        }
	
	        if (process.onEnd) {
	            process.onEnd(process);
	        }
	    }
	
	    while (activateQueueLength--) {
	        var id = activateQueue[activateQueueLength];
	        var activeIdIndex = runningIds.indexOf(id);
	        var process = runningProcesses[id];
	
	        if (activeIdIndex === -1) {
	            runningIds.push(id);
	        }
	
	        updateCount(true, process.isLazy);
	
	        if (process.onStart) {
	            process.onStart(process);
	        }
	    }
	
	    activateQueue = [];
	    deactivateQueue = [];
	}
	
	/*
	    [timestamp]: Frame timestamp
	    [int]: Time since last frame
	*/
	function fireAll(frameStamp, elapsed) {
	    var method = {};
	    var methodName = '';
	    var isRenderStep = false;
	    var process = undefined;
	    var result = undefined;
	
	    resolveQueues();
	
	    var numRunning = runningCount;
	
	    for (var i = 0; i < numProcessSteps; i++) {
	        method = processOrder[i];
	        methodName = method.step;
	        isRenderStep = method.isRender ? true : false;
	
	        for (var i2 = 0; i2 < numRunning; i2++) {
	            process = runningProcesses[runningIds[i2]];
	
	            if (process && process[methodName] && (!isRenderStep || isRenderStep && process._renderThisFrame === true)) {
	                result = process[methodName].call(process, process, frameStamp, elapsed);
	            }
	
	            if (method.decideRender) {
	                process._renderThisFrame = process[methodName] && result !== true ? false : true;
	            }
	        }
	    }
	
	    return activeCount ? true : false;
	}
	
	// Function to fire every frame
	function frame() {
	    (0, _tick2.default)(function (frameStamp) {
	        if (isRunning) {
	            frame();
	        }
	
	        _timer2.default.update(frameStamp);
	        isRunning = fireAll(frameStamp, _timer2.default.getElapsed());
	    });
	}
	
	// Start loop
	function start() {
	    if (!isRunning) {
	        _timer2.default.start();
	        isRunning = true;
	        frame();
	    }
	}
	
	// Exports
	function getProcessId() {
	    return currentProcessId++;
	}
	
	/*
	    [int]: Process ID to activate
	    [Process]: Process to activate
	*/
	function activate(id, process) {
	    updateLists(id, activateQueue, deactivateQueue);
	
	    runningProcesses[id] = process;
	
	    if (!isRunning) {
	        start();
	    }
	}
	
	/*
	    [int]: Process ID to deactivate
	*/
	function deactivate(id) {
	    updateLists(id, deactivateQueue, activateQueue);
	}
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9wcm9jZXNzL2xvb3AuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O1FBNEtnQjtRQVFBO1FBYUE7Ozs7Ozs7Ozs7OztBQTlMaEIsSUFBTSxlQUFlLENBQ2pCLEVBQUUsTUFBTSxjQUFOLEVBRGUsRUFFakIsRUFBRSxNQUFNLFVBQU4sRUFGZSxFQUdqQixFQUFFLE1BQU0sWUFBTixFQUFvQixjQUFjLElBQWQsRUFITCxFQUlqQixFQUFFLE1BQU0sVUFBTixFQUFrQixVQUFVLElBQVYsRUFKSCxFQUtqQixFQUFFLE1BQU0sWUFBTixFQUFvQixVQUFVLElBQVYsRUFMTCxFQU1qQixFQUFFLE1BQU0sWUFBTixFQU5lLEVBT2pCLEVBQUUsTUFBTSxXQUFOLEVBUGUsQ0FBZjtBQVNOLElBQU0sa0JBQWtCLGFBQWEsTUFBYjs7O0FBR3hCLElBQUksWUFBWSxLQUFaOzs7QUFHSixJQUFJLG1CQUFtQixDQUFuQjs7O0FBR0osSUFBSSxlQUFlLENBQWY7OztBQUdKLElBQUksY0FBYyxDQUFkOzs7QUFHSixJQUFNLGFBQWEsRUFBYjs7O0FBR04sSUFBTSxtQkFBbUIsRUFBbkI7OztBQUdOLElBQUksZ0JBQWdCLEVBQWhCOzs7QUFHSixJQUFJLGtCQUFrQixFQUFsQjs7Ozs7Ozs7O0FBU0osU0FBUyxXQUFULENBQXFCLEVBQXJCLEVBQXlCLE1BQXpCLEVBQWlDLE9BQWpDLEVBQTBDO0FBQ3RDLFFBQU0sYUFBYSxPQUFPLE9BQVAsQ0FBZSxNQUFmLENBQWIsQ0FEZ0M7QUFFdEMsUUFBTSxjQUFjLFFBQVEsT0FBUixDQUFnQixPQUFoQixDQUFkLENBRmdDOztBQUl0QyxRQUFJLGVBQWUsQ0FBQyxDQUFELEVBQUk7QUFDbkIsZUFBTyxJQUFQLENBQVksRUFBWixFQURtQjtLQUF2Qjs7QUFJQSxRQUFJLGNBQWMsQ0FBQyxDQUFELEVBQUk7QUFDbEIsZ0JBQVEsTUFBUixDQUFlLFdBQWYsRUFBNEIsQ0FBNUIsRUFEa0I7S0FBdEI7Q0FSSjs7Ozs7Ozs7QUFtQkEsU0FBUyxXQUFULENBQXFCLEdBQXJCLEVBQTBCLE1BQTFCLEVBQWtDO0FBQzlCLFFBQU0sU0FBUyxNQUFNLENBQU4sR0FBVSxDQUFDLENBQUQsQ0FESzs7QUFHOUIsb0JBQWdCLE1BQWhCLENBSDhCOztBQUs5QixRQUFJLENBQUMsTUFBRCxFQUFTO0FBQ1QsdUJBQWUsTUFBZixDQURTO0tBQWI7Q0FMSjs7QUFVQSxTQUFTLGFBQVQsR0FBeUI7QUFDckIsUUFBSSxzQkFBc0IsY0FBYyxNQUFkLENBREw7QUFFckIsUUFBSSx3QkFBd0IsZ0JBQWdCLE1BQWhCLENBRlA7O0FBSXJCLFdBQU8saUJBQVAsRUFBMEI7QUFDdEIsWUFBTSxLQUFLLGdCQUFnQixxQkFBaEIsQ0FBTCxDQURnQjtBQUV0QixZQUFNLGdCQUFnQixXQUFXLE9BQVgsQ0FBbUIsRUFBbkIsQ0FBaEIsQ0FGZ0I7QUFHdEIsWUFBTSxVQUFVLGlCQUFpQixFQUFqQixDQUFWLENBSGdCOztBQUt0QixZQUFJLGdCQUFnQixDQUFDLENBQUQsRUFBSTtBQUNwQix1QkFBVyxNQUFYLENBQWtCLGFBQWxCLEVBQWlDLENBQWpDLEVBRG9CO0FBRXBCLHdCQUFZLEtBQVosRUFBbUIsUUFBUSxNQUFSLENBQW5CLENBRm9CO0FBR3BCLDZCQUFpQixFQUFqQixJQUF1QixTQUF2QixDQUhvQjtTQUF4Qjs7QUFNQSxZQUFJLFFBQVEsS0FBUixFQUFlO0FBQ2Ysb0JBQVEsS0FBUixDQUFjLE9BQWQsRUFEZTtTQUFuQjtLQVhKOztBQWdCQSxXQUFPLHFCQUFQLEVBQThCO0FBQzFCLFlBQU0sS0FBSyxjQUFjLG1CQUFkLENBQUwsQ0FEb0I7QUFFMUIsWUFBTSxnQkFBZ0IsV0FBVyxPQUFYLENBQW1CLEVBQW5CLENBQWhCLENBRm9CO0FBRzFCLFlBQU0sVUFBVSxpQkFBaUIsRUFBakIsQ0FBVixDQUhvQjs7QUFLMUIsWUFBSSxrQkFBa0IsQ0FBQyxDQUFELEVBQUk7QUFDdEIsdUJBQVcsSUFBWCxDQUFnQixFQUFoQixFQURzQjtTQUExQjs7QUFJQSxvQkFBWSxJQUFaLEVBQWtCLFFBQVEsTUFBUixDQUFsQixDQVQwQjs7QUFXMUIsWUFBSSxRQUFRLE9BQVIsRUFBaUI7QUFDakIsb0JBQVEsT0FBUixDQUFnQixPQUFoQixFQURpQjtTQUFyQjtLQVhKOztBQWdCQSxvQkFBZ0IsRUFBaEIsQ0FwQ3FCO0FBcUNyQixzQkFBa0IsRUFBbEIsQ0FyQ3FCO0NBQXpCOzs7Ozs7QUE0Q0EsU0FBUyxPQUFULENBQWlCLFVBQWpCLEVBQTZCLE9BQTdCLEVBQXNDO0FBQ2xDLFFBQUksU0FBUyxFQUFULENBRDhCO0FBRWxDLFFBQUksYUFBYSxFQUFiLENBRjhCO0FBR2xDLFFBQUksZUFBZSxLQUFmLENBSDhCO0FBSWxDLFFBQUksbUJBQUosQ0FKa0M7QUFLbEMsUUFBSSxrQkFBSixDQUxrQzs7QUFPbEMsb0JBUGtDOztBQVNsQyxRQUFNLGFBQWEsWUFBYixDQVQ0Qjs7QUFXbEMsU0FBSyxJQUFJLElBQUksQ0FBSixFQUFPLElBQUksZUFBSixFQUFxQixHQUFyQyxFQUEwQztBQUN0QyxpQkFBUyxhQUFhLENBQWIsQ0FBVCxDQURzQztBQUV0QyxxQkFBYSxPQUFPLElBQVAsQ0FGeUI7QUFHdEMsdUJBQWUsT0FBTyxRQUFQLEdBQWtCLElBQWxCLEdBQXlCLEtBQXpCLENBSHVCOztBQUt0QyxhQUFLLElBQUksS0FBSyxDQUFMLEVBQVEsS0FBSyxVQUFMLEVBQWlCLElBQWxDLEVBQXdDO0FBQ3BDLHNCQUFVLGlCQUFpQixXQUFXLEVBQVgsQ0FBakIsQ0FBVixDQURvQzs7QUFHcEMsZ0JBQUksV0FBVyxRQUFRLFVBQVIsQ0FBWCxLQUFtQyxDQUFDLFlBQUQsSUFBa0IsZ0JBQWdCLFFBQVEsZ0JBQVIsS0FBNkIsSUFBN0IsQ0FBckUsRUFBMEc7QUFDMUcseUJBQVMsUUFBUSxVQUFSLEVBQW9CLElBQXBCLENBQXlCLE9BQXpCLEVBQWtDLE9BQWxDLEVBQTJDLFVBQTNDLEVBQXVELE9BQXZELENBQVQsQ0FEMEc7YUFBOUc7O0FBSUEsZ0JBQUksT0FBTyxZQUFQLEVBQXFCO0FBQ3JCLHdCQUFRLGdCQUFSLEdBQTJCLE9BQUMsQ0FBUSxVQUFSLEtBQXVCLFdBQVcsSUFBWCxHQUFtQixLQUEzQyxHQUFtRCxJQUFuRCxDQUROO2FBQXpCO1NBUEo7S0FMSjs7QUFrQkEsV0FBTyxjQUFjLElBQWQsR0FBcUIsS0FBckIsQ0E3QjJCO0NBQXRDOzs7QUFpQ0EsU0FBUyxLQUFULEdBQWlCO0FBQ2Isd0JBQUssVUFBQyxVQUFELEVBQWdCO0FBQ2pCLFlBQUksU0FBSixFQUFlO0FBQ1gsb0JBRFc7U0FBZjs7QUFJQSx3QkFBTSxNQUFOLENBQWEsVUFBYixFQUxpQjtBQU1qQixvQkFBWSxRQUFRLFVBQVIsRUFBb0IsZ0JBQU0sVUFBTixFQUFwQixDQUFaLENBTmlCO0tBQWhCLENBQUwsQ0FEYTtDQUFqQjs7O0FBWUEsU0FBUyxLQUFULEdBQWlCO0FBQ2IsUUFBSSxDQUFDLFNBQUQsRUFBWTtBQUNaLHdCQUFNLEtBQU4sR0FEWTtBQUVaLG9CQUFZLElBQVosQ0FGWTtBQUdaLGdCQUhZO0tBQWhCO0NBREo7OztBQVNPLFNBQVMsWUFBVCxHQUF3QjtBQUMzQixXQUFPLGtCQUFQLENBRDJCO0NBQXhCOzs7Ozs7QUFRQSxTQUFTLFFBQVQsQ0FBa0IsRUFBbEIsRUFBc0IsT0FBdEIsRUFBK0I7QUFDbEMsZ0JBQVksRUFBWixFQUFnQixhQUFoQixFQUErQixlQUEvQixFQURrQzs7QUFHbEMscUJBQWlCLEVBQWpCLElBQXVCLE9BQXZCLENBSGtDOztBQUtsQyxRQUFJLENBQUMsU0FBRCxFQUFZO0FBQ1osZ0JBRFk7S0FBaEI7Q0FMRzs7Ozs7QUFhQSxTQUFTLFVBQVQsQ0FBb0IsRUFBcEIsRUFBd0I7QUFDM0IsZ0JBQVksRUFBWixFQUFnQixlQUFoQixFQUFpQyxhQUFqQyxFQUQyQjtDQUF4QiIsImZpbGUiOiJsb29wLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9NYXR0L1NpdGVzL3BvcG1vdGlvbiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0aW1lciBmcm9tICcuL3RpbWVyJztcbmltcG9ydCB0aWNrIGZyb20gJy4vdGljayc7XG5cbmNvbnN0IHByb2Nlc3NPcmRlciA9IFtcbiAgICB7IHN0ZXA6ICdvbkZyYW1lU3RhcnQnIH0sXG4gICAgeyBzdGVwOiAnb25VcGRhdGUnIH0sXG4gICAgeyBzdGVwOiAnd2lsbFJlbmRlcicsIGRlY2lkZVJlbmRlcjogdHJ1ZSB9LFxuICAgIHsgc3RlcDogJ29uUmVuZGVyJywgaXNSZW5kZXI6IHRydWUgfSxcbiAgICB7IHN0ZXA6ICdwb3N0UmVuZGVyJywgaXNSZW5kZXI6IHRydWUgfSxcbiAgICB7IHN0ZXA6ICdvbkZyYW1lRW5kJyB9LFxuICAgIHsgc3RlcDogJ29uQ2xlYW51cCcgfVxuXTtcbmNvbnN0IG51bVByb2Nlc3NTdGVwcyA9IHByb2Nlc3NPcmRlci5sZW5ndGg7XG5cbi8vIFtib29sZWFuXTogSXMgbG9vcCBydW5uaW5nP1xubGV0IGlzUnVubmluZyA9IGZhbHNlO1xuXG4vLyBbaW50XTogUHJvY2VzcyBJRCwgaW5jcmVtZW50ZWQgZm9yIGVhY2ggbmV3IHByb2Nlc3NcbmxldCBjdXJyZW50UHJvY2Vzc0lkID0gMDtcblxuLy8gW2ludF06IE51bWJlciBvZiBydW5uaW5nIHByb2Nlc3Nlc1xubGV0IHJ1bm5pbmdDb3VudCA9IDA7XG5cbi8vIFtpbnRdOiBOdW1iZXIgb2YgcnVubmluZyBub24tYmFja2dyb3VuZCBwcm9jZXNzZXNcbmxldCBhY3RpdmVDb3VudCA9IDA7XG5cbi8vIFthcnJheV06IEFycmF5IG9mIGFjdGl2ZSBwcm9jZXNzIElEc1xuY29uc3QgcnVubmluZ0lkcyA9IFtdO1xuXG4vLyBbb2JqZWN0XTogTWFwIG9mIGFjdGl2ZSBwcm9jZXNzZXNcbmNvbnN0IHJ1bm5pbmdQcm9jZXNzZXMgPSB7fTtcblxuLy8gW2FycmF5XTogQXJyYXkgb2YgcHJvY2VzcyBJRHMgcXVldWVkIGZvciBhY3RpdmF0aW9uXG5sZXQgYWN0aXZhdGVRdWV1ZSA9IFtdO1xuXG4vLyBbYXJyYXldOiBBcnJheSBvZiBwcm9jZXNzIElEcyBxdWV1ZWQgZm9yIGRlYWN0aXZhdGlvblxubGV0IGRlYWN0aXZhdGVRdWV1ZSA9IFtdO1xuXG4vKlxuICAgIFVwZGF0ZSBsaXN0c1xuXG4gICAgQHBhcmFtIFtudW1iZXJdXG4gICAgQHBhcmFtIFthcnJheV1cbiAgICBAcGFyYW0gW2FycmF5XVxuKi9cbmZ1bmN0aW9uIHVwZGF0ZUxpc3RzKGlkLCBpbkxpc3QsIG91dExpc3QpIHtcbiAgICBjb25zdCBpblBvc2l0aW9uID0gaW5MaXN0LmluZGV4T2YoaW5MaXN0KTtcbiAgICBjb25zdCBvdXRQb3NpdGlvbiA9IG91dExpc3QuaW5kZXhPZihvdXRMaXN0KTtcblxuICAgIGlmIChpblBvc2l0aW9uID09PSAtMSkge1xuICAgICAgICBpbkxpc3QucHVzaChpZCk7XG4gICAgfVxuXG4gICAgaWYgKG91dFBvc2l0aW9uID4gLTEpIHtcbiAgICAgICAgb3V0TGlzdC5zcGxpY2Uob3V0UG9zaXRpb24sIDEpO1xuICAgIH1cbn1cblxuLypcbiAgICBVcGRhdGUgcnVubmluZ1xuXG4gICAgW2Jvb2xlYW5dOiBgdHJ1ZWAgdG8gYWRkXG4gICAgW2Jvb2xlYW5dOiBgdHJ1ZWAgaWYgbGF6eVxuKi9cbmZ1bmN0aW9uIHVwZGF0ZUNvdW50KGFkZCwgaXNMYXp5KSB7XG4gICAgY29uc3QgbW9kaWZ5ID0gYWRkID8gMSA6IC0xO1xuXG4gICAgcnVubmluZ0NvdW50ICs9IG1vZGlmeTtcblxuICAgIGlmICghaXNMYXp5KSB7XG4gICAgICAgIGFjdGl2ZUNvdW50ICs9IG1vZGlmeTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIHJlc29sdmVRdWV1ZXMoKSB7XG4gICAgbGV0IGFjdGl2YXRlUXVldWVMZW5ndGggPSBhY3RpdmF0ZVF1ZXVlLmxlbmd0aDtcbiAgICBsZXQgZGVhY3RpdmF0ZVF1ZXVlTGVuZ3RoID0gZGVhY3RpdmF0ZVF1ZXVlLmxlbmd0aDtcblxuICAgIHdoaWxlIChkZWFjdGl2YXRlUXVldWUtLSkge1xuICAgICAgICBjb25zdCBpZCA9IGRlYWN0aXZhdGVRdWV1ZVtkZWFjdGl2YXRlUXVldWVMZW5ndGhdO1xuICAgICAgICBjb25zdCBhY3RpdmVJZEluZGV4ID0gcnVubmluZ0lkcy5pbmRleE9mKGlkKTtcbiAgICAgICAgY29uc3QgcHJvY2VzcyA9IHJ1bm5pbmdQcm9jZXNzZXNbaWRdO1xuXG4gICAgICAgIGlmIChhY3RpdmVJZEluZGV4ID4gLTEpIHtcbiAgICAgICAgICAgIHJ1bm5pbmdJZHMuc3BsaWNlKGFjdGl2ZUlkSW5kZXgsIDEpO1xuICAgICAgICAgICAgdXBkYXRlQ291bnQoZmFsc2UsIHByb2Nlc3MuaXNMYXp5KTtcbiAgICAgICAgICAgIHJ1bm5pbmdQcm9jZXNzZXNbaWRdID0gdW5kZWZpbmVkO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHByb2Nlc3Mub25FbmQpIHtcbiAgICAgICAgICAgIHByb2Nlc3Mub25FbmQocHJvY2Vzcyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB3aGlsZSAoYWN0aXZhdGVRdWV1ZUxlbmd0aC0tKSB7XG4gICAgICAgIGNvbnN0IGlkID0gYWN0aXZhdGVRdWV1ZVthY3RpdmF0ZVF1ZXVlTGVuZ3RoXTtcbiAgICAgICAgY29uc3QgYWN0aXZlSWRJbmRleCA9IHJ1bm5pbmdJZHMuaW5kZXhPZihpZCk7XG4gICAgICAgIGNvbnN0IHByb2Nlc3MgPSBydW5uaW5nUHJvY2Vzc2VzW2lkXTtcblxuICAgICAgICBpZiAoYWN0aXZlSWRJbmRleCA9PT0gLTEpIHtcbiAgICAgICAgICAgIHJ1bm5pbmdJZHMucHVzaChpZCk7XG4gICAgICAgIH1cblxuICAgICAgICB1cGRhdGVDb3VudCh0cnVlLCBwcm9jZXNzLmlzTGF6eSk7XG5cbiAgICAgICAgaWYgKHByb2Nlc3Mub25TdGFydCkge1xuICAgICAgICAgICAgcHJvY2Vzcy5vblN0YXJ0KHByb2Nlc3MpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgYWN0aXZhdGVRdWV1ZSA9IFtdO1xuICAgIGRlYWN0aXZhdGVRdWV1ZSA9IFtdO1xufVxuXG4vKlxuICAgIFt0aW1lc3RhbXBdOiBGcmFtZSB0aW1lc3RhbXBcbiAgICBbaW50XTogVGltZSBzaW5jZSBsYXN0IGZyYW1lXG4qL1xuZnVuY3Rpb24gZmlyZUFsbChmcmFtZVN0YW1wLCBlbGFwc2VkKSB7XG4gICAgbGV0IG1ldGhvZCA9IHt9O1xuICAgIGxldCBtZXRob2ROYW1lID0gJyc7XG4gICAgbGV0IGlzUmVuZGVyU3RlcCA9IGZhbHNlO1xuICAgIGxldCBwcm9jZXNzO1xuICAgIGxldCByZXN1bHQ7XG5cbiAgICByZXNvbHZlUXVldWVzKCk7XG5cbiAgICBjb25zdCBudW1SdW5uaW5nID0gcnVubmluZ0NvdW50O1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBudW1Qcm9jZXNzU3RlcHM7IGkrKykge1xuICAgICAgICBtZXRob2QgPSBwcm9jZXNzT3JkZXJbaV07XG4gICAgICAgIG1ldGhvZE5hbWUgPSBtZXRob2Quc3RlcDtcbiAgICAgICAgaXNSZW5kZXJTdGVwID0gbWV0aG9kLmlzUmVuZGVyID8gdHJ1ZSA6IGZhbHNlO1xuXG4gICAgICAgIGZvciAobGV0IGkyID0gMDsgaTIgPCBudW1SdW5uaW5nOyBpMisrKSB7XG4gICAgICAgICAgICBwcm9jZXNzID0gcnVubmluZ1Byb2Nlc3Nlc1tydW5uaW5nSWRzW2kyXV07XG5cbiAgICAgICAgICAgIGlmIChwcm9jZXNzICYmIHByb2Nlc3NbbWV0aG9kTmFtZV0gJiYgKCFpc1JlbmRlclN0ZXAgfHwgKGlzUmVuZGVyU3RlcCAmJiBwcm9jZXNzLl9yZW5kZXJUaGlzRnJhbWUgPT09IHRydWUpKSkge1xuICAgICAgICAgICAgICAgIHJlc3VsdCA9IHByb2Nlc3NbbWV0aG9kTmFtZV0uY2FsbChwcm9jZXNzLCBwcm9jZXNzLCBmcmFtZVN0YW1wLCBlbGFwc2VkKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKG1ldGhvZC5kZWNpZGVSZW5kZXIpIHtcbiAgICAgICAgICAgICAgICBwcm9jZXNzLl9yZW5kZXJUaGlzRnJhbWUgPSAocHJvY2Vzc1ttZXRob2ROYW1lXSAmJiByZXN1bHQgIT09IHRydWUpID8gZmFsc2UgOiB0cnVlOyBcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBhY3RpdmVDb3VudCA/IHRydWUgOiBmYWxzZTtcbn1cblxuLy8gRnVuY3Rpb24gdG8gZmlyZSBldmVyeSBmcmFtZVxuZnVuY3Rpb24gZnJhbWUoKSB7XG4gICAgdGljaygoZnJhbWVTdGFtcCkgPT4ge1xuICAgICAgICBpZiAoaXNSdW5uaW5nKSB7XG4gICAgICAgICAgICBmcmFtZSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGltZXIudXBkYXRlKGZyYW1lU3RhbXApO1xuICAgICAgICBpc1J1bm5pbmcgPSBmaXJlQWxsKGZyYW1lU3RhbXAsIHRpbWVyLmdldEVsYXBzZWQoKSk7XG4gICAgfSk7XG59XG5cbi8vIFN0YXJ0IGxvb3BcbmZ1bmN0aW9uIHN0YXJ0KCkge1xuICAgIGlmICghaXNSdW5uaW5nKSB7XG4gICAgICAgIHRpbWVyLnN0YXJ0KCk7XG4gICAgICAgIGlzUnVubmluZyA9IHRydWU7XG4gICAgICAgIGZyYW1lKCk7XG4gICAgfVxufVxuXG4vLyBFeHBvcnRzXG5leHBvcnQgZnVuY3Rpb24gZ2V0UHJvY2Vzc0lkKCkge1xuICAgIHJldHVybiBjdXJyZW50UHJvY2Vzc0lkKys7XG59XG5cbi8qXG4gICAgW2ludF06IFByb2Nlc3MgSUQgdG8gYWN0aXZhdGVcbiAgICBbUHJvY2Vzc106IFByb2Nlc3MgdG8gYWN0aXZhdGVcbiovXG5leHBvcnQgZnVuY3Rpb24gYWN0aXZhdGUoaWQsIHByb2Nlc3MpIHtcbiAgICB1cGRhdGVMaXN0cyhpZCwgYWN0aXZhdGVRdWV1ZSwgZGVhY3RpdmF0ZVF1ZXVlKTtcbiAgICBcbiAgICBydW5uaW5nUHJvY2Vzc2VzW2lkXSA9IHByb2Nlc3M7XG5cbiAgICBpZiAoIWlzUnVubmluZykge1xuICAgICAgICBzdGFydCgpO1xuICAgIH1cbn1cblxuLypcbiAgICBbaW50XTogUHJvY2VzcyBJRCB0byBkZWFjdGl2YXRlXG4qL1xuZXhwb3J0IGZ1bmN0aW9uIGRlYWN0aXZhdGUoaWQpIHtcbiAgICB1cGRhdGVMaXN0cyhpZCwgZGVhY3RpdmF0ZVF1ZXVlLCBhY3RpdmF0ZVF1ZXVlKTtcbn0iXX0=

/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	var TRANSLATE = 'translate';
	
	exports.default = {
	    x: TRANSLATE + 'X',
	    y: TRANSLATE + 'Y',
	    z: TRANSLATE + 'Z'
	};
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9yZW5kZXIvY3NzL3N0YXRlLW1hcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxJQUFNLFlBQVksV0FBWjs7a0JBRVM7QUFDWCxPQUFHLFlBQVksR0FBWjtBQUNILE9BQUcsWUFBWSxHQUFaO0FBQ0gsT0FBRyxZQUFZLEdBQVoiLCJmaWxlIjoic3RhdGUtbWFwLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9NYXR0L1NpdGVzL3BvcG1vdGlvbiIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IFRSQU5TTEFURSA9ICd0cmFuc2xhdGUnO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgeDogVFJBTlNMQVRFICsgJ1gnLFxuICAgIHk6IFRSQU5TTEFURSArICdZJyxcbiAgICB6OiBUUkFOU0xBVEUgKyAnWidcbn07Il19

/***/ },
/* 36 */
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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9yZW5kZXIvY3NzL3ZhbHVlLXR5cGUtbWFwLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2tCQVNlOztBQUVYLDBCQUZXO0FBR1gsb0NBSFc7QUFJWCxpQ0FKVztBQUtYLHlCQUxXO0FBTVgsMkJBTlc7OztBQVNYLGdDQVRXO0FBVVgsbUNBVlc7QUFXWCxxQ0FYVztBQVlYLHNDQVpXO0FBYVgsb0NBYlc7QUFjWCw4QkFkVzs7O0FBaUJYLCtCQWpCVztBQWtCWCxnQ0FsQlc7QUFtQlgsdUJBbkJXO0FBb0JYLHdCQXBCVzs7O0FBdUJYLHNDQXZCVztBQXdCWCxxQ0F4Qlc7QUF5QlgsbUNBekJXOzs7QUE0QlgsZ0NBNUJXO0FBNkJYLCtCQTdCVzs7O0FBZ0NYLDJCQWhDVztBQWlDWCw0QkFqQ1c7QUFrQ1gsNEJBbENXO0FBbUNYLDRCQW5DVztBQW9DWCwwQkFwQ1c7QUFxQ1gsMkJBckNXO0FBc0NYLDJCQXRDVztBQXVDWCwyQkF2Q1c7QUF3Q1gsMEJBeENXO0FBeUNYLDBCQXpDVztBQTBDWCwwQkExQ1c7QUEyQ1gsNEJBM0NXO0FBNENYLDRCQTVDVztBQTZDWCw0QkE3Q1c7QUE4Q1gsNkJBOUNXO0FBK0NYLDRCQS9DVyIsImZpbGUiOiJ2YWx1ZS10eXBlLW1hcC5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvTWF0dC9TaXRlcy9wb3Btb3Rpb24iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYW5nbGUgZnJvbSAnLi4vLi4vdmFsdWUtdHlwZXMvYW5nbGUnO1xuaW1wb3J0IGFscGhhIGZyb20gJy4uLy4uL3ZhbHVlLXR5cGVzL2FscGhhJztcbmltcG9ydCBheGVzIGZyb20gJy4uLy4uL3ZhbHVlLXR5cGVzL2F4ZXMnO1xuaW1wb3J0IGNvbG9yIGZyb20gJy4uLy4uL3ZhbHVlLXR5cGVzL2NvbG9yJztcbmltcG9ydCBzY2FsZSBmcm9tICcuLi8uLi92YWx1ZS10eXBlcy9zY2FsZSc7XG5pbXBvcnQgc2hhZG93IGZyb20gJy4uLy4uL3ZhbHVlLXR5cGVzL3NoYWRvdyc7XG5pbXBvcnQgcG9zaXRpb25zIGZyb20gJy4uLy4uL3ZhbHVlLXR5cGVzL3Bvc2l0aW9ucyc7XG5pbXBvcnQgcHggZnJvbSAnLi4vLi4vdmFsdWUtdHlwZXMvcHgnO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgLy8gQ29sb3IgcHJvcHNcbiAgICBjb2xvcjogY29sb3IsXG4gICAgYmFja2dyb3VuZENvbG9yOiBjb2xvcixcbiAgICBvdXRsaW5lQ29sb3I6IGNvbG9yLFxuICAgIGZpbGw6IGNvbG9yLFxuICAgIHN0cm9rZTogY29sb3IsXG5cbiAgICAvLyBCb3JkZXIgcHJvcHNcbiAgICBib3JkZXJDb2xvcjogY29sb3IsXG4gICAgYm9yZGVyVG9wQ29sb3I6IGNvbG9yLFxuICAgIGJvcmRlclJpZ2h0Q29sb3I6IGNvbG9yLFxuICAgIGJvcmRlckJvdHRvbUNvbG9yOiBjb2xvcixcbiAgICBib3JkZXJMZWZ0Q29sb3I6IGNvbG9yLFxuICAgIGJvcmRlclJhZGl1czogcHgsXG5cbiAgICAvLyBQb3NpdGlvbmluZ1xuICAgIG1hcmdpbjogcG9zaXRpb25zLFxuICAgIHBhZGRpbmc6IHBvc2l0aW9ucyxcbiAgICB3aWR0aDogcHgsXG4gICAgaGVpZ2h0OiBweCxcblxuICAgIC8vIEF4ZXNcbiAgICBiYWNrZ3JvdW5kUG9zaXRpb246IGF4ZXMsXG4gICAgcGVyc3BlY3RpdmVPcmlnaW46IGF4ZXMsXG4gICAgdHJhbnNmb3JtT3JpZ2luOiBheGVzLFxuXG4gICAgLy8gU2hhZG93c1xuICAgIHRleHRTaGFkb3c6IHNoYWRvdyxcbiAgICBib3hTaGFkb3c6IHNoYWRvdywgICBcblxuICAgIC8vIFRyYW5zZm9ybSBwcm9wZXJ0aWVzXG4gICAgcm90YXRlOiBhbmdsZSxcbiAgICByb3RhdGVYOiBhbmdsZSxcbiAgICByb3RhdGVZOiBhbmdsZSxcbiAgICByb3RhdGVaOiBhbmdsZSxcbiAgICBzY2FsZTogc2NhbGUsXG4gICAgc2NhbGVYOiBzY2FsZSxcbiAgICBzY2FsZVk6IHNjYWxlLFxuICAgIHNjYWxlWjogc2NhbGUsXG4gICAgc2tld1g6IGFuZ2xlLFxuICAgIHNrZXdZOiBhbmdsZSxcbiAgICBkaXN0YW5jZTogcHgsXG4gICAgdHJhbnNsYXRlWDogcHgsXG4gICAgdHJhbnNsYXRlWTogcHgsXG4gICAgdHJhbnNsYXRlWjogcHgsXG4gICAgcGVyc3BlY3RpdmU6IHB4LFxuICAgIG9wYWNpdHk6IGFscGhhXG59OyJdfQ==

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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9yZW5kZXIvY3NzL3ByZWZpeGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLElBQU0sUUFBUSxFQUFSO0FBQ04sSUFBTSxXQUFXLENBQUMsUUFBRCxFQUFVLEtBQVYsRUFBZ0IsR0FBaEIsRUFBb0IsSUFBcEIsRUFBMEIsRUFBMUIsQ0FBWDtBQUNOLElBQU0sY0FBYyxTQUFTLE1BQVQ7QUFDcEIsSUFBSSx1QkFBSjs7Ozs7Ozs7QUFRQSxJQUFNLGFBQWEsVUFBQyxHQUFELEVBQVM7QUFDeEIsa0JBQWMsZUFBZSxTQUFTLGFBQVQsQ0FBdUIsS0FBdkIsQ0FBZixDQURVOztBQUd4QixRQUFJLE1BQU0sR0FBTixNQUFlLEtBQWYsRUFBc0I7QUFDdEIsZUFBTyxLQUFQLENBRHNCO0tBQTFCLE1BRU87QUFDSCxjQUFNLEdBQU4sSUFBYSxLQUFiLENBREc7S0FGUDs7QUFNQSxTQUFLLElBQUksSUFBSSxDQUFKLEVBQU8sSUFBSSxXQUFKLEVBQWlCLEdBQWpDLEVBQXNDO0FBQ2xDLFlBQUksU0FBUyxTQUFTLENBQVQsQ0FBVDtZQUNBLFdBQVcsTUFBQyxLQUFXLEVBQVgsR0FBaUIsR0FBbEIsR0FBd0IsU0FBUyxJQUFJLE1BQUosQ0FBVyxDQUFYLEVBQWMsV0FBZCxFQUFULEdBQXVDLElBQUksS0FBSixDQUFVLENBQVYsQ0FBdkMsQ0FGTDs7QUFJbEMsWUFBSSxZQUFZLFlBQVksS0FBWixFQUFtQjtBQUMvQixrQkFBTSxHQUFOLElBQWEsUUFBYixDQUQrQjtTQUFuQztLQUpKOztBQVNBLFdBQU8sTUFBTSxHQUFOLENBQVAsQ0FsQndCO0NBQVQ7O2tCQXFCSixVQUFDLEdBQUQ7V0FBUyxNQUFNLEdBQU4sS0FBYyxXQUFXLEdBQVgsQ0FBZDtDQUFUIiwiZmlsZSI6InByZWZpeGVyLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9NYXR0L1NpdGVzL3BvcG1vdGlvbiIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGNhY2hlID0ge307XG5jb25zdCBwcmVmaXhlcyA9IFsnV2Via2l0JywnTW96JywnTycsJ21zJywgJyddO1xuY29uc3QgbnVtUHJlZml4ZXMgPSBwcmVmaXhlcy5sZW5ndGg7XG5sZXQgdGVzdEVsZW1lbnQ7XG5cbi8qXG4gICAgVGVzdCBzdHlsZSBwcm9wZXJ0eSBmb3IgcHJlZml4ZWQgdmVyc2lvblxuICAgIFxuICAgIEBwYXJhbSBbc3RyaW5nXTogU3R5bGUgcHJvcGVydHlcbiAgICBAcmV0dXJuIFtzdHJpbmddOiBDYWNoZWQgcHJvcGVydHkgbmFtZVxuKi9cbmNvbnN0IHRlc3RQcmVmaXggPSAoa2V5KSA9PiB7XG4gICAgdGVzdEVsZW1lbnQgPSB0ZXN0RWxlbWVudCB8fCBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICAgIGlmIChjYWNoZVtrZXldID09PSBmYWxzZSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgY2FjaGVba2V5XSA9IGZhbHNlO1xuICAgIH1cblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbnVtUHJlZml4ZXM7IGkrKykge1xuICAgICAgICB2YXIgcHJlZml4ID0gcHJlZml4ZXNbaV0sXG4gICAgICAgICAgICBwcmVmaXhlZCA9IChwcmVmaXggPT09ICcnKSA/IGtleSA6IHByZWZpeCArIGtleS5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIGtleS5zbGljZSgxKTtcblxuICAgICAgICBpZiAocHJlZml4ZWQgaW4gdGVzdEVsZW1lbnQuc3R5bGUpIHtcbiAgICAgICAgICAgIGNhY2hlW2tleV0gPSBwcmVmaXhlZDtcbiAgICAgICAgfVxuICAgIH1cbiAgICBcbiAgICByZXR1cm4gY2FjaGVba2V5XTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IChrZXkpID0+IGNhY2hlW2tleV0gfHwgdGVzdFByZWZpeChrZXkpOyJdfQ==

/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _utils = __webpack_require__(14);
	
	var _transformProps = __webpack_require__(48);
	
	var _transformProps2 = _interopRequireDefault(_transformProps);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var TRANSLATE_Z = 'translateZ';
	
	exports.default = function (state, disableHardwareAcceleration) {
	    var propertyString = '';
	    var transformString = '';
	    var transformHasZ = false;
	
	    (0, _utils.each)(state, function (value, key) {
	        if (_transformProps2.default[key]) {
	            transformString += key + '(' + value + ') ';
	            transformHasZ = key === TRANSLATE_Z ? true : transformHasZ;
	        } else {
	            propertyString += ';' + key + ':' + value;
	        }
	    });
	
	    if (transformString !== '') {
	        if (!transformHasZ && !disableHardwareAcceleration) {
	            transformString += TRANSLATE_Z + '(0px)';
	        }
	
	        propertyString += ';transform:' + transformString;
	    }
	
	    return propertyString;
	};
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9yZW5kZXIvY3NzL2J1aWxkLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUdBLElBQU0sY0FBYyxZQUFkOztrQkFFUyxVQUFDLEtBQUQsRUFBUSwyQkFBUixFQUF3QztBQUNuRCxRQUFJLGlCQUFpQixFQUFqQixDQUQrQztBQUVuRCxRQUFJLGtCQUFrQixFQUFsQixDQUYrQztBQUduRCxRQUFJLGdCQUFnQixLQUFoQixDQUgrQzs7QUFLbkQscUJBQUssS0FBTCxFQUFZLFVBQUMsS0FBRCxFQUFRLEdBQVIsRUFBZ0I7QUFDeEIsWUFBSSx5QkFBZSxHQUFmLENBQUosRUFBeUI7QUFDckIsK0JBQW1CLE1BQU0sR0FBTixHQUFZLEtBQVosR0FBb0IsSUFBcEIsQ0FERTtBQUVyQiw0QkFBZ0IsR0FBQyxLQUFRLFdBQVIsR0FBdUIsSUFBeEIsR0FBK0IsYUFBL0IsQ0FGSztTQUF6QixNQUlPO0FBQ0gsOEJBQWtCLE1BQU0sR0FBTixHQUFZLEdBQVosR0FBa0IsS0FBbEIsQ0FEZjtTQUpQO0tBRFEsQ0FBWixDQUxtRDs7QUFlbkQsUUFBSSxvQkFBb0IsRUFBcEIsRUFBd0I7QUFDeEIsWUFBSSxDQUFDLGFBQUQsSUFBa0IsQ0FBQywyQkFBRCxFQUE4QjtBQUNoRCwrQkFBbUIsY0FBYyxPQUFkLENBRDZCO1NBQXBEOztBQUlBLDBCQUFrQixnQkFBZ0IsZUFBaEIsQ0FMTTtLQUE1Qjs7QUFRQSxXQUFPLGNBQVAsQ0F2Qm1EO0NBQXhDIiwiZmlsZSI6ImJ1aWxkLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9NYXR0L1NpdGVzL3BvcG1vdGlvbiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGVhY2ggfSBmcm9tICcuLi8uLi9pbmMvdXRpbHMnO1xuaW1wb3J0IHRyYW5zZm9ybVByb3BzIGZyb20gJy4vdHJhbnNmb3JtLXByb3BzJztcblxuY29uc3QgVFJBTlNMQVRFX1ogPSAndHJhbnNsYXRlWic7XG5cbmV4cG9ydCBkZWZhdWx0IChzdGF0ZSwgZGlzYWJsZUhhcmR3YXJlQWNjZWxlcmF0aW9uKSA9PiB7XG4gICAgbGV0IHByb3BlcnR5U3RyaW5nID0gJyc7XG4gICAgbGV0IHRyYW5zZm9ybVN0cmluZyA9ICcnO1xuICAgIGxldCB0cmFuc2Zvcm1IYXNaID0gZmFsc2U7XG5cbiAgICBlYWNoKHN0YXRlLCAodmFsdWUsIGtleSkgPT4ge1xuICAgICAgICBpZiAodHJhbnNmb3JtUHJvcHNba2V5XSkge1xuICAgICAgICAgICAgdHJhbnNmb3JtU3RyaW5nICs9IGtleSArICcoJyArIHZhbHVlICsgJykgJztcbiAgICAgICAgICAgIHRyYW5zZm9ybUhhc1ogPSAoa2V5ID09PSBUUkFOU0xBVEVfWikgPyB0cnVlIDogdHJhbnNmb3JtSGFzWjtcblxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcHJvcGVydHlTdHJpbmcgKz0gJzsnICsga2V5ICsgJzonICsgdmFsdWU7XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIGlmICh0cmFuc2Zvcm1TdHJpbmcgIT09ICcnKSB7XG4gICAgICAgIGlmICghdHJhbnNmb3JtSGFzWiAmJiAhZGlzYWJsZUhhcmR3YXJlQWNjZWxlcmF0aW9uKSB7XG4gICAgICAgICAgICB0cmFuc2Zvcm1TdHJpbmcgKz0gVFJBTlNMQVRFX1ogKyAnKDBweCknO1xuICAgICAgICB9XG5cbiAgICAgICAgcHJvcGVydHlTdHJpbmcgKz0gJzt0cmFuc2Zvcm06JyArIHRyYW5zZm9ybVN0cmluZztcbiAgICB9XG5cbiAgICByZXR1cm4gcHJvcGVydHlTdHJpbmc7XG59OyJdfQ==

/***/ },
/* 39 */
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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9yZW5kZXIvc3ZnL3ZhbHVlLXR5cGUtbWFwLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2tCQU1lO0FBQ1gseUJBRFc7QUFFWCwyQkFGVztBQUdYLDBCQUhXO0FBSVgsMkJBSlc7QUFLWCwyQkFMVztBQU1YLG1DQU5XO0FBT1gsd0JBUFc7QUFRWCw0QkFSVztBQVNYLGdDQVRXO0FBVVgsa0NBVlciLCJmaWxlIjoidmFsdWUtdHlwZS1tYXAuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL01hdHQvU2l0ZXMvcG9wbW90aW9uIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGFscGhhIGZyb20gJy4uLy4uL3ZhbHVlLXR5cGVzL2FscGhhJztcbmltcG9ydCBheGVzIGZyb20gJy4uLy4uL3ZhbHVlLXR5cGVzL2F4ZXMnO1xuaW1wb3J0IGNvbG9yIGZyb20gJy4uLy4uL3ZhbHVlLXR5cGVzL2NvbG9yJztcbmltcG9ydCBjb21wbGV4IGZyb20gJy4uLy4uL3ZhbHVlLXR5cGVzL2NvbXBsZXgnO1xuaW1wb3J0IHNjYWxlIGZyb20gJy4uLy4uL3ZhbHVlLXR5cGVzL3NjYWxlJztcblxuZXhwb3J0IGRlZmF1bHQge1xuICAgIGZpbGw6IGNvbG9yLFxuICAgIHN0cm9rZTogY29sb3IsXG4gICAgc2NhbGU6IHNjYWxlLFxuICAgIHNjYWxlWDogc2NhbGUsXG4gICAgc2NhbGVZOiBzY2FsZSxcbiAgICB0cmFuc2Zvcm1PcmlnaW46IGF4ZXMsXG4gICAgZDogY29tcGxleCxcbiAgICBvcGFjaXR5OiBhbHBoYSxcbiAgICBmaWxsT3BhY2l0eTogYWxwaGEsXG4gICAgc3Ryb2tlT3BhY2l0eTogYWxwaGFcbn07Il19

/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports.default = build;
	
	var _utils = __webpack_require__(14);
	
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
	
	    (0, _utils.each)(state, function (key, value) {
	        if (_transformProps2.default[key]) {
	            hasTransform = true;
	        } else {
	            props[(0, _utils.camelToDash)(key)] = value;
	        }
	    });
	
	    if (hasTransform) {
	        props.transform = '';
	
	        (0, _utils.each)(transform, function (key, value) {
	            var defaultValue = key === 'scale' ? '1' : '0';
	            props.transform += value.replace(/undefined/g, defaultValue);
	        });
	    }
	
	    return props;
	}
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9yZW5kZXIvc3ZnL2J1aWxkLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztrQkFLd0I7Ozs7Ozs7Ozs7QUFGeEIsSUFBTSxnQkFBZ0IsTUFBaEI7O0FBRVMsU0FBUyxLQUFULENBQWUsS0FBZixFQUFzQixNQUF0QixFQUE4QjtBQUN6QyxRQUFJLFFBQVEsRUFBUjtRQUNBLGVBQWUsS0FBZjtRQUNBLFFBQVEsTUFBTSxLQUFOLEtBQWdCLFNBQWhCLEdBQTRCLE1BQU0sS0FBTixJQUFlLGFBQWYsR0FBK0IsTUFBTSxNQUFOLElBQWdCLENBQWhCO1FBQ25FLFNBQVMsTUFBTSxNQUFOLEtBQWlCLFNBQWpCLEdBQTZCLE1BQU0sTUFBTixJQUFnQixhQUFoQixHQUFnQyxTQUFTLENBQVQ7UUFDdEUsbUJBQW1CLE9BQU8sQ0FBUDtRQUNuQixtQkFBbUIsT0FBTyxDQUFQO1FBQ25CLGtCQUFrQixDQUFFLGdCQUFGLElBQXNCLFFBQVEsQ0FBUixDQUF0QjtRQUNsQixrQkFBa0IsQ0FBRSxnQkFBRixJQUFzQixTQUFTLENBQVQsQ0FBdEI7UUFDbEIsZ0JBQWdCLG1CQUFtQixLQUFuQjtRQUNoQixnQkFBZ0IsbUJBQW1CLE1BQW5CO1FBQ2hCLFlBQVk7QUFDUixrQ0FBd0IsTUFBTSxVQUFOLFVBQXFCLE1BQU0sVUFBTixPQUE3QztBQUNBLDhCQUFvQix5QkFBb0IsK0JBQTBCLGVBQVUsMEJBQXFCLHVCQUFrQixvQkFBbkg7QUFDQSw0QkFBa0IsTUFBTSxNQUFOLFVBQWlCLDBCQUFxQix1QkFBeEQ7QUFDQSwwQkFBZ0IsTUFBTSxLQUFOLE9BQWhCO0FBQ0EsMEJBQWdCLE1BQU0sS0FBTixPQUFoQjtLQUxKLENBWHFDOztBQW1CekMscUJBQUssS0FBTCxFQUFZLFVBQUMsR0FBRCxFQUFNLEtBQU4sRUFBZ0I7QUFDeEIsWUFBSSx5QkFBZSxHQUFmLENBQUosRUFBeUI7QUFDckIsMkJBQWUsSUFBZixDQURxQjtTQUF6QixNQUVPO0FBQ0gsa0JBQU0sd0JBQVksR0FBWixDQUFOLElBQTBCLEtBQTFCLENBREc7U0FGUDtLQURRLENBQVosQ0FuQnlDOztBQTJCekMsUUFBSSxZQUFKLEVBQWtCO0FBQ2QsY0FBTSxTQUFOLEdBQWtCLEVBQWxCLENBRGM7O0FBR2QseUJBQUssU0FBTCxFQUFnQixVQUFDLEdBQUQsRUFBTSxLQUFOLEVBQWdCO0FBQzVCLGdCQUFJLGVBQWUsR0FBQyxLQUFRLE9BQVIsR0FBbUIsR0FBcEIsR0FBMEIsR0FBMUIsQ0FEUztBQUU1QixrQkFBTSxTQUFOLElBQW1CLE1BQU0sT0FBTixDQUFjLFlBQWQsRUFBNEIsWUFBNUIsQ0FBbkIsQ0FGNEI7U0FBaEIsQ0FBaEIsQ0FIYztLQUFsQjs7QUFTQSxXQUFPLEtBQVAsQ0FwQ3lDO0NBQTlCIiwiZmlsZSI6ImJ1aWxkLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9NYXR0L1NpdGVzL3BvcG1vdGlvbiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGVhY2gsIGNhbWVsVG9EYXNoIH0gZnJvbSAnLi4vLi4vaW5jL3V0aWxzJztcbmltcG9ydCB0cmFuc2Zvcm1Qcm9wcyBmcm9tICcuLi9jc3MvdHJhbnNmb3JtLXByb3BzJztcblxuY29uc3QgWkVST19OT1RfWkVSTyA9IDAuMDAwMTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYnVpbGQoc3RhdGUsIG9yaWdpbikge1xuICAgIGxldCBwcm9wcyA9IHt9LFxuICAgICAgICBoYXNUcmFuc2Zvcm0gPSBmYWxzZSxcbiAgICAgICAgc2NhbGUgPSBzdGF0ZS5zY2FsZSAhPT0gdW5kZWZpbmVkID8gc3RhdGUuc2NhbGUgfHwgWkVST19OT1RfWkVSTyA6IHN0YXRlLnNjYWxlWCB8fCAxLFxuICAgICAgICBzY2FsZVkgPSBzdGF0ZS5zY2FsZVkgIT09IHVuZGVmaW5lZCA/IHN0YXRlLnNjYWxlWSB8fCBaRVJPX05PVF9aRVJPIDogc2NhbGUgfHwgMSxcbiAgICAgICAgdHJhbnNmb3JtT3JpZ2luWCA9IG9yaWdpbi54LFxuICAgICAgICB0cmFuc2Zvcm1PcmlnaW5ZID0gb3JpZ2luLnksXG4gICAgICAgIHNjYWxlVHJhbnNmb3JtWCA9IC0gdHJhbnNmb3JtT3JpZ2luWCAqIChzY2FsZSAqIDEpLFxuICAgICAgICBzY2FsZVRyYW5zZm9ybVkgPSAtIHRyYW5zZm9ybU9yaWdpblkgKiAoc2NhbGVZICogMSksXG4gICAgICAgIHNjYWxlUmVwbGFjZVggPSB0cmFuc2Zvcm1PcmlnaW5YIC8gc2NhbGUsXG4gICAgICAgIHNjYWxlUmVwbGFjZVkgPSB0cmFuc2Zvcm1PcmlnaW5ZIC8gc2NhbGVZLFxuICAgICAgICB0cmFuc2Zvcm0gPSB7XG4gICAgICAgICAgICB0cmFuc2xhdGU6IGB0cmFuc2xhdGUoJHtzdGF0ZS50cmFuc2xhdGVYfSwgJHtzdGF0ZS50cmFuc2xhdGVZfSkgYCxcbiAgICAgICAgICAgIHNjYWxlOiBgdHJhbnNsYXRlKCR7c2NhbGVUcmFuc2Zvcm1YfSwgJHtzY2FsZVRyYW5zZm9ybVl9KSBzY2FsZSgke3NjYWxlfSwgJHtzY2FsZVl9KSB0cmFuc2xhdGUoJHtzY2FsZVJlcGxhY2VYfSwgJHtzY2FsZVJlcGxhY2VZfSkgYCxcbiAgICAgICAgICAgIHJvdGF0ZTogYHJvdGF0ZSgke3N0YXRlLnJvdGF0ZX0sICR7dHJhbnNmb3JtT3JpZ2luWH0sICR7dHJhbnNmb3JtT3JpZ2luWX0pIGAsXG4gICAgICAgICAgICBza2V3WDogYHNrZXdYKCR7c3RhdGUuc2tld1h9KSBgLFxuICAgICAgICAgICAgc2tld1k6IGBza2V3WSgke3N0YXRlLnNrZXdZfSkgYFxuICAgICAgICB9O1xuXG4gICAgZWFjaChzdGF0ZSwgKGtleSwgdmFsdWUpID0+IHtcbiAgICAgICAgaWYgKHRyYW5zZm9ybVByb3BzW2tleV0pIHtcbiAgICAgICAgICAgIGhhc1RyYW5zZm9ybSA9IHRydWU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBwcm9wc1tjYW1lbFRvRGFzaChrZXkpXSA9IHZhbHVlO1xuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICBpZiAoaGFzVHJhbnNmb3JtKSB7XG4gICAgICAgIHByb3BzLnRyYW5zZm9ybSA9ICcnO1xuXG4gICAgICAgIGVhY2godHJhbnNmb3JtLCAoa2V5LCB2YWx1ZSkgPT4ge1xuICAgICAgICAgICAgdmFyIGRlZmF1bHRWYWx1ZSA9IChrZXkgPT09ICdzY2FsZScpID8gJzEnIDogJzAnO1xuICAgICAgICAgICAgcHJvcHMudHJhbnNmb3JtICs9IHZhbHVlLnJlcGxhY2UoL3VuZGVmaW5lZC9nLCBkZWZhdWx0VmFsdWUpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gcHJvcHM7XG59Il19

/***/ },
/* 41 */
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
/* 42 */
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
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports.default = build;
	
	var _utils = __webpack_require__(14);
	
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
	
	    (0, _utils.each)(state, function (value, key) {
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
	    });
	
	    if (hasDashArray) {
	        styles['stroke-dasharray'] = dashArrayStyles.length + ' ' + dashArrayStyles.spacing;
	    }
	
	    return styles;
	}
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9yZW5kZXIvc3ZnLXBhdGgvYnVpbGQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O2tCQVV3Qjs7Ozs7Ozs7OztBQUZ4QixJQUFNLGtCQUFrQixVQUFDLE9BQUQsRUFBVSxNQUFWO1dBQXFCLFVBQUMsQ0FBVyxPQUFYLElBQXNCLEdBQXRCLEdBQTZCLE1BQTlCLEdBQXVDLElBQXZDO0NBQXJCOztBQUVULFNBQVMsS0FBVCxDQUFlLEtBQWYsRUFBc0IsTUFBdEIsRUFBOEI7QUFDekMsUUFBTSxTQUFTLEVBQVQsQ0FEbUM7QUFFekMsUUFBTSxrQkFBa0I7QUFDcEIsZ0JBQVEsQ0FBUjtBQUNBLGlCQUFTLFNBQVMsSUFBVDtLQUZQLENBRm1DO0FBTXpDLFFBQUksZUFBZSxLQUFmLENBTnFDOztBQVF6QyxxQkFBSyxLQUFMLEVBQVksVUFBQyxLQUFELEVBQVEsR0FBUixFQUFnQjtBQUN4QixnQkFBUSxHQUFSO0FBQ0EsaUJBQUssUUFBTCxDQURBO0FBRUEsaUJBQUssU0FBTDtBQUNJLCtCQUFlLElBQWYsQ0FESjtBQUVJLGdDQUFnQixHQUFoQixJQUF1QixnQkFBZ0IsS0FBaEIsRUFBdUIsTUFBdkIsQ0FBdkIsQ0FGSjtBQUdJLHNCQUhKO0FBRkEsaUJBTUssUUFBTDtBQUNJLHVCQUFPLG1CQUFQLElBQThCLGdCQUFnQixDQUFDLEtBQUQsRUFBUSxNQUF4QixDQUE5QixDQURKO0FBRUksc0JBRko7QUFOQTtBQVVJLHVCQUFPLEdBQVAsSUFBYyxLQUFkLENBREo7QUFUQSxTQUR3QjtLQUFoQixDQUFaLENBUnlDOztBQXVCekMsUUFBSSxZQUFKLEVBQWtCO0FBQ2QsZUFBTyxrQkFBUCxJQUE2QixnQkFBZ0IsTUFBaEIsR0FBeUIsR0FBekIsR0FBK0IsZ0JBQWdCLE9BQWhCLENBRDlDO0tBQWxCOztBQUlBLFdBQU8sTUFBUCxDQTNCeUM7Q0FBOUIiLCJmaWxlIjoiYnVpbGQuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL01hdHQvU2l0ZXMvcG9wbW90aW9uIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZWFjaCB9IGZyb20gJy4uLy4uL2luYy91dGlscyc7XG5cbi8qXG4gICAgQ29udmVydCBwZXJjZW50YWdlIHRvIHBpeGVsc1xuICAgIFxuICAgIEBwYXJhbSBbbnVtYmVyXTogUGVyY2VudGFnZSBvZiB0b3RhbCBsZW5ndGhcbiAgICBAcGFyYW0gW251bWJlcl06IFRvdGFsIGxlbmd0aFxuKi9cbmNvbnN0IHBlcmNlbnRUb1BpeGVscyA9IChwZXJjZW50LCBsZW5ndGgpID0+IChwYXJzZUZsb2F0KHBlcmNlbnQpIC8gMTAwKSAqIGxlbmd0aCArICdweCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGJ1aWxkKHN0YXRlLCBsZW5ndGgpIHtcbiAgICBjb25zdCBzdHlsZXMgPSB7fTtcbiAgICBjb25zdCBkYXNoQXJyYXlTdHlsZXMgPSB7XG4gICAgICAgIGxlbmd0aDogMCxcbiAgICAgICAgc3BhY2luZzogbGVuZ3RoICsgJ3B4J1xuICAgIH07XG4gICAgbGV0IGhhc0Rhc2hBcnJheSA9IGZhbHNlO1xuXG4gICAgZWFjaChzdGF0ZSwgKHZhbHVlLCBrZXkpID0+IHtcbiAgICAgICAgc3dpdGNoIChrZXkpIHtcbiAgICAgICAgY2FzZSAnbGVuZ3RoJzpcbiAgICAgICAgY2FzZSAnc3BhY2luZyc6XG4gICAgICAgICAgICBoYXNEYXNoQXJyYXkgPSB0cnVlO1xuICAgICAgICAgICAgZGFzaEFycmF5U3R5bGVzW2tleV0gPSBwZXJjZW50VG9QaXhlbHModmFsdWUsIGxlbmd0aCk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnb2Zmc2V0JzpcbiAgICAgICAgICAgIHN0eWxlc1snc3Ryb2tlLWRhc2hvZmZzZXQnXSA9IHBlcmNlbnRUb1BpeGVscygtdmFsdWUsIGxlbmd0aCk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHN0eWxlc1trZXldID0gdmFsdWU7XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIGlmIChoYXNEYXNoQXJyYXkpIHtcbiAgICAgICAgc3R5bGVzWydzdHJva2UtZGFzaGFycmF5J10gPSBkYXNoQXJyYXlTdHlsZXMubGVuZ3RoICsgJyAnICsgZGFzaEFycmF5U3R5bGVzLnNwYWNpbmc7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN0eWxlcztcbn0iXX0=

/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	exports.__esModule = true;
	
	var _stateMap = __webpack_require__(35);
	
	var _stateMap2 = _interopRequireDefault(_stateMap);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var STROKE = 'stroke-';
	
	exports.default = _extends({}, _stateMap2.default, {
	    opacity: STROKE + 'opacity',
	    width: STROKE + 'width',
	    miterlimit: STROKE + 'miterlimit'
	});
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9yZW5kZXIvc3ZnLXBhdGgvc3RhdGUtbWFwLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUVBLElBQU0sU0FBUyxTQUFUOzs7QUFJRixhQUFZLGtCQUFaO0FBQ0EsV0FBVSxnQkFBVjtBQUNBLGdCQUFlLHFCQUFmIiwiZmlsZSI6InN0YXRlLW1hcC5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvTWF0dC9TaXRlcy9wb3Btb3Rpb24iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY3NzU3RhdGVNYXAgZnJvbSAnLi4vY3NzL3N0YXRlLW1hcCc7XG5cbmNvbnN0IFNUUk9LRSA9ICdzdHJva2UtJztcblxuZXhwb3J0IGRlZmF1bHQge1xuICAgIC4uLmNzc1N0YXRlTWFwLFxuICAgIG9wYWNpdHk6IGAke1NUUk9LRX1vcGFjaXR5YCxcbiAgICB3aWR0aDogYCR7U1RST0tFfXdpZHRoYCxcbiAgICBtaXRlcmxpbWl0OiBgJHtTVFJPS0V9bWl0ZXJsaW1pdGBcbn07Il19

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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy92YWx1ZS10eXBlcy9zZXR0aW5ncy9kaWN0aW9uYXJ5LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLElBQU0sSUFBSSxHQUFKO0FBQ04sSUFBTSxJQUFJLEdBQUo7QUFDTixJQUFNLFFBQVEsT0FBUjs7QUFFQyxJQUFNLHNCQUFPLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxHQUFQLENBQVA7QUFDTixJQUFNLG9CQUFNLENBQUMsS0FBRCxFQUFRLE9BQVIsRUFBaUIsTUFBakIsRUFBeUIsS0FBekIsQ0FBTjtBQUNOLElBQU0sb0JBQU0sQ0FBQyxLQUFELEVBQVEsWUFBUixFQUFzQixXQUF0QixFQUFtQyxLQUFuQyxDQUFOO0FBQ04sSUFBTSxnQ0FBWSxDQUFDLEtBQUQsRUFBUSxPQUFSLEVBQWlCLFFBQWpCLEVBQTJCLE1BQTNCLENBQVo7QUFDTixJQUFNLDBCQUFTLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxRQUFQLEVBQWlCLFFBQWpCLEVBQTJCLE9BQTNCLENBQVQiLCJmaWxlIjoiZGljdGlvbmFyeS5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvTWF0dC9TaXRlcy9wb3Btb3Rpb24iLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBYID0gJ1gnO1xuY29uc3QgWSA9ICdZJztcbmNvbnN0IEFMUEhBID0gJ0FscGhhJztcblxuZXhwb3J0IGNvbnN0IGF4ZXMgPSBbWCwgWSwgJ1onXTtcbmV4cG9ydCBjb25zdCByZ2IgPSBbJ1JlZCcsICdHcmVlbicsICdCbHVlJywgQUxQSEFdO1xuZXhwb3J0IGNvbnN0IGhzbCA9IFsnSHVlJywgJ1NhdHVyYXRpb24nLCAnTGlnaHRuZXNzJywgQUxQSEFdO1xuZXhwb3J0IGNvbnN0IHBvc2l0aW9ucyA9IFsnVG9wJywgJ1JpZ2h0JywgJ0JvdHRvbScsICdMZWZ0J107XG5leHBvcnQgY29uc3Qgc2hhZG93ID0gW1gsIFksICdSYWRpdXMnLCAnU3ByZWFkJywgJ0NvbG9yJ107Il19

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
/* 48 */
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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9yZW5kZXIvY3NzL3RyYW5zZm9ybS1wcm9wcy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFFQSxJQUFJLGlCQUFpQixFQUFqQjs7QUFFSixJQUFNLFFBQVEsT0FBUjtBQUNOLElBQU0sU0FBUyxRQUFUO0FBQ04sSUFBTSx3QkFBd0Isc0JBQXhCO0FBQ04sSUFBTSxRQUFRLENBQUMsV0FBRCxFQUFjLEtBQWQsRUFBcUIsTUFBckIsRUFBNkIsTUFBN0IsRUFBcUMscUJBQXJDLENBQVI7O0FBRU4sZUFBZSxNQUFmLElBQXlCLGVBQWUsS0FBZixJQUF3QixlQUFlLHFCQUFmLElBQXdDLElBQXhDOztBQUVqRCxNQUFNLE9BQU4sQ0FBYyxVQUFDLElBQUQ7U0FBVSxpQkFBSyxPQUFMLENBQWEsVUFBQyxJQUFEO1dBQVUsZUFBZSxPQUFPLElBQVAsQ0FBZixHQUE4QixJQUE5QjtHQUFWO0NBQXZCLENBQWQ7O2tCQUVlIiwiZmlsZSI6InRyYW5zZm9ybS1wcm9wcy5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvTWF0dC9TaXRlcy9wb3Btb3Rpb24iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBheGVzIH0gZnJvbSAnLi4vLi4vdmFsdWUtdHlwZXMvc2V0dGluZ3MvZGljdGlvbmFyeSc7XG5cbmxldCB0cmFuc2Zvcm1Qcm9wcyA9IHt9O1xuXG5jb25zdCBTQ0FMRSA9ICdzY2FsZSc7XG5jb25zdCBST1RBVEUgPSAncm90YXRlJztcbmNvbnN0IFRSQU5TRk9STV9QRVJTUEVDVElWRSA9ICd0cmFuc2Zvcm1QZXJzcGVjdGl2ZSc7XG5jb25zdCBURVJNUyA9IFsndHJhbnNsYXRlJywgU0NBTEUsIFJPVEFURSwgJ3NrZXcnLCBUUkFOU0ZPUk1fUEVSU1BFQ1RJVkVdO1xuXG50cmFuc2Zvcm1Qcm9wc1tST1RBVEVdID0gdHJhbnNmb3JtUHJvcHNbU0NBTEVdID0gdHJhbnNmb3JtUHJvcHNbVFJBTlNGT1JNX1BFUlNQRUNUSVZFXSA9IHRydWU7XG5cblRFUk1TLmZvckVhY2goKHRlcm0pID0+IGF4ZXMuZm9yRWFjaCgoYXhpcykgPT4gdHJhbnNmb3JtUHJvcHNbdGVybSArIGF4aXNdID0gdHJ1ZSkpO1xuXG5leHBvcnQgZGVmYXVsdCB0cmFuc2Zvcm1Qcm9wczsiXX0=

/***/ }
/******/ ]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgOTE4NDZhNmRmYTE2ZWU0MmMzYzEiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xvYWQvZ2xvYmFsLmpzIiwid2VicGFjazovLy8uL3NyYy9wb3Btb3Rpb24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FjdG9yL0FjdG9yLmpzIiwid2VicGFjazovLy8uL3NyYy9hY3Rpb25zL1R3ZWVuLmpzIiwid2VicGFjazovLy8uL3NyYy9hY3Rpb25zL1BoeXNpY3MuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FjdGlvbnMvVHJhY2suanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Byb2Nlc3MvUHJvY2Vzcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5wdXQvSW5wdXQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlbmRlci9hdHRyLmpzIiwid2VicGFjazovLy8uL3NyYy9yZW5kZXIvY3NzLmpzIiwid2VicGFjazovLy8uL3NyYy9yZW5kZXIvc3ZnLmpzIiwid2VicGFjazovLy8uL3NyYy9yZW5kZXIvc3ZnLXBhdGguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FjdGlvbnMvZWFzaW5nL3ByZXNldC1lYXNpbmcuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luYy9jYWxjLmpzIiwid2VicGFjazovLy8uL3NyYy9pbmMvdXRpbHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luYy9zZWxlY3QtYWN0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Byb2Nlc3MvdGltZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luYy9zdGFnZ2VyLmpzIiwid2VicGFjazovLy8uL3NyYy9pbmMvdGltZWxpbmUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZhbHVlLXR5cGVzL2FscGhhLmpzIiwid2VicGFjazovLy8uL3NyYy92YWx1ZS10eXBlcy9hbmdsZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdmFsdWUtdHlwZXMvYXhlcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdmFsdWUtdHlwZXMvY29sb3IuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZhbHVlLXR5cGVzL2NvbXBsZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZhbHVlLXR5cGVzL2hleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdmFsdWUtdHlwZXMvaHNsLmpzIiwid2VicGFjazovLy8uL3NyYy92YWx1ZS10eXBlcy9wb3NpdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZhbHVlLXR5cGVzL3B4LmpzIiwid2VicGFjazovLy8uL3NyYy92YWx1ZS10eXBlcy9yZ2IuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZhbHVlLXR5cGVzL3NjYWxlLmpzIiwid2VicGFjazovLy8uL3NyYy92YWx1ZS10eXBlcy9zaGFkb3cuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RyYW5zZm9ybWVycy9tYXAuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FjdGlvbnMvQWN0aW9uLmpzIiwid2VicGFjazovLy8uL3NyYy9pbnB1dC9Qb2ludGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9wcm9jZXNzL2xvb3AuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlbmRlci9jc3Mvc3RhdGUtbWFwLmpzIiwid2VicGFjazovLy8uL3NyYy9yZW5kZXIvY3NzL3ZhbHVlLXR5cGUtbWFwLmpzIiwid2VicGFjazovLy8uL3NyYy9yZW5kZXIvY3NzL3ByZWZpeGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9yZW5kZXIvY3NzL2J1aWxkLmpzIiwid2VicGFjazovLy8uL3NyYy9yZW5kZXIvc3ZnL3ZhbHVlLXR5cGUtbWFwLmpzIiwid2VicGFjazovLy8uL3NyYy9yZW5kZXIvc3ZnL2J1aWxkLmpzIiwid2VicGFjazovLy8uL3NyYy9hY3Rpb25zL2Vhc2luZy9jcmVhdGUtZWFzaW5nLmpzIiwid2VicGFjazovLy8uL3NyYy9hY3Rpb25zL2Vhc2luZy9jcmVhdGUtYmV6aWVyLmpzIiwid2VicGFjazovLy8uL3NyYy9yZW5kZXIvc3ZnLXBhdGgvYnVpbGQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlbmRlci9zdmctcGF0aC9zdGF0ZS1tYXAuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZhbHVlLXR5cGVzL3NldHRpbmdzL2RpY3Rpb25hcnkuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZhbHVlLXR5cGVzL3NldHRpbmdzL2RlZmF1bHQtcHJvcHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Byb2Nlc3MvdGljay5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVuZGVyL2Nzcy90cmFuc2Zvcm0tcHJvcHMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVCQUFlO0FBQ2Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0Esd0M7Ozs7Ozs7QUN0Q0E7O0FBRUE7O0FBRUE7O0FBRUEsd0NBQXVDLDZCQUE2QixZQUFZLEVBQUUsT0FBTyxpQkFBaUIsbUJBQW1CLHVCQUF1Qiw0RUFBNEUsRUFBRSxFQUFFLHNCQUFzQixlQUFlLEVBQUU7O0FBRTNROztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDRDQUEyQywrcEI7Ozs7OztBQ2YzQzs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztB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QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsRUFBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHVGQUFzRixhQUFhO0FBQ25HO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw0Q0FBMkMsKzJLOzs7Ozs7QUMxRzNDOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsTUFBSzs7QUFFTDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsNENBQTJDLG1pYzs7Ozs7O0FDMVMzQzs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsb0VBQW1FLGFBQWE7QUFDaEY7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7O0FBRUw7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsb0JBQW1CLGFBQWE7QUFDaEM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQSxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE1BQUs7O0FBRUw7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0EsTUFBSzs7QUFFTDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEscUJB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RUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLGNBQWE7QUFDYjtBQUNBLE1BQUs7QUFDTDs7QUFFQTtBQUNBLDRDQUEyQyxteEU7Ozs7OztBQzVDM0M7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNILEVBQUM7O0FBRUQ7QUFDQSw0Q0FBMkMsKzFDIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGV4cG9ydHM6IHt9LFxuIFx0XHRcdGlkOiBtb2R1bGVJZCxcbiBcdFx0XHRsb2FkZWQ6IGZhbHNlXG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oMCk7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogd2VicGFjay9ib290c3RyYXAgOTE4NDZhNmRmYTE2ZWU0MmMzYzFcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbnZhciBfcG9wbW90aW9uID0gcmVxdWlyZSgnLi4vcG9wbW90aW9uJyk7XG5cbnZhciBwb3Btb3Rpb24gPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChfcG9wbW90aW9uKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQob2JqKSB7IGlmIChvYmogJiYgb2JqLl9fZXNNb2R1bGUpIHsgcmV0dXJuIG9iajsgfSBlbHNlIHsgdmFyIG5ld09iaiA9IHt9OyBpZiAob2JqICE9IG51bGwpIHsgZm9yICh2YXIga2V5IGluIG9iaikgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwga2V5KSkgbmV3T2JqW2tleV0gPSBvYmpba2V5XTsgfSB9IG5ld09iai5kZWZhdWx0ID0gb2JqOyByZXR1cm4gbmV3T2JqOyB9IH1cblxudmFyIFVJcmVmID0gd2luZG93Lm1vdGlvbjtcblxucG9wbW90aW9uLm5vQ29uZmxpY3QgPSBmdW5jdGlvbiAoKSB7XG4gICAgd2luZG93Lm1vdGlvbiA9IFVJcmVmO1xufTtcblxud2luZG93Lm1vdGlvbiA9IHdpbmRvdy5wb3Btb3Rpb24gPSBwb3Btb3Rpb247XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5OeVl5OXNiMkZrTDJkc2IySmhiQzVxY3lKZExDSnVZVzFsY3lJNlcxMHNJbTFoY0hCcGJtZHpJam9pT3pzN08wbEJRVms3T3pzN1FVRkZXaXhKUVVGTkxGRkJRVkVzVDBGQlR5eE5RVUZRT3p0QlFVVmtMRlZCUVZVc1ZVRkJWaXhIUVVGMVFpeFpRVUZaTzBGQlF5OUNMRmRCUVU4c1RVRkJVQ3hIUVVGblFpeExRVUZvUWl4RFFVUXJRanREUVVGYU96dEJRVWwyUWl4UFFVRlBMRTFCUVZBc1IwRkJaMElzVDBGQlR5eFRRVUZRTEVkQlFXMUNMRk5CUVc1Q0lpd2labWxzWlNJNkltZHNiMkpoYkM1cWN5SXNJbk52ZFhKalpWSnZiM1FpT2lJdlZYTmxjbk12VFdGMGRDOVRhWFJsY3k5d2IzQnRiM1JwYjI0aUxDSnpiM1Z5WTJWelEyOXVkR1Z1ZENJNld5SnBiWEJ2Y25RZ0tpQmhjeUJ3YjNCdGIzUnBiMjRnWm5KdmJTQW5MaTR2Y0c5d2JXOTBhVzl1Snp0Y2JseHVZMjl1YzNRZ1ZVbHlaV1lnUFNCM2FXNWtiM2N1Ylc5MGFXOXVPMXh1WEc1d2IzQnRiM1JwYjI0dWJtOURiMjVtYkdsamRDQTlJR1oxYm1OMGFXOXVJQ2dwSUh0Y2JpQWdJQ0IzYVc1a2IzY3ViVzkwYVc5dUlEMGdWVWx5WldZN1hHNTlPMXh1WEc1M2FXNWtiM2N1Ylc5MGFXOXVJRDBnZDJsdVpHOTNMbkJ2Y0cxdmRHbHZiaUE5SUhCdmNHMXZkR2x2YmpzaVhYMD1cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2xvYWQvZ2xvYmFsLmpzXG4gKiogbW9kdWxlIGlkID0gMFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0cy5jcmVhdGVNYXBUcmFuc2Zvcm0gPSBleHBvcnRzLnNoYWRvd1R5cGUgPSBleHBvcnRzLnNjYWxlVHlwZSA9IGV4cG9ydHMucmdiVHlwZSA9IGV4cG9ydHMucHhUeXBlID0gZXhwb3J0cy5wb3NpdGlvbnNUeXBlID0gZXhwb3J0cy5oc2xUeXBlID0gZXhwb3J0cy5oZXhUeXBlID0gZXhwb3J0cy5jb21wbGV4VHlwZSA9IGV4cG9ydHMuY29sb3JUeXBlID0gZXhwb3J0cy5heGVzVHlwZSA9IGV4cG9ydHMuYW5nbGVUeXBlID0gZXhwb3J0cy5hbHBoYVR5cGUgPSBleHBvcnRzLnRpbWVsaW5lID0gZXhwb3J0cy5zdGFnZ2VyID0gZXhwb3J0cy5zZXREaWxhdGlvbiA9IGV4cG9ydHMuJCA9IGV4cG9ydHMudXRpbHMgPSBleHBvcnRzLmNhbGMgPSBleHBvcnRzLmVhc2luZyA9IGV4cG9ydHMucmVuZGVyU1ZHUGF0aCA9IGV4cG9ydHMucmVuZGVyU1ZHID0gZXhwb3J0cy5yZW5kZXJDU1MgPSBleHBvcnRzLnJlbmRlckF0dHIgPSBleHBvcnRzLnByb2Nlc3MgPSBleHBvcnRzLmlucHV0ID0gZXhwb3J0cy50cmFjayA9IGV4cG9ydHMucGh5c2ljcyA9IGV4cG9ydHMudHdlZW4gPSBleHBvcnRzLmFjdG9yID0gdW5kZWZpbmVkO1xuXG52YXIgX0FjdG9yID0gcmVxdWlyZSgnLi9hY3Rvci9BY3RvcicpO1xuXG52YXIgX0FjdG9yMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX0FjdG9yKTtcblxudmFyIF9Ud2VlbiA9IHJlcXVpcmUoJy4vYWN0aW9ucy9Ud2VlbicpO1xuXG52YXIgX1R3ZWVuMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX1R3ZWVuKTtcblxudmFyIF9QaHlzaWNzID0gcmVxdWlyZSgnLi9hY3Rpb25zL1BoeXNpY3MnKTtcblxudmFyIF9QaHlzaWNzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX1BoeXNpY3MpO1xuXG52YXIgX1RyYWNrID0gcmVxdWlyZSgnLi9hY3Rpb25zL1RyYWNrJyk7XG5cbnZhciBfVHJhY2syID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfVHJhY2spO1xuXG52YXIgX1Byb2Nlc3MgPSByZXF1aXJlKCcuL3Byb2Nlc3MvUHJvY2VzcycpO1xuXG52YXIgX1Byb2Nlc3MyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfUHJvY2Vzcyk7XG5cbnZhciBfSW5wdXQgPSByZXF1aXJlKCcuL2lucHV0L0lucHV0Jyk7XG5cbnZhciBfSW5wdXQyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfSW5wdXQpO1xuXG52YXIgX2F0dHIgPSByZXF1aXJlKCcuL3JlbmRlci9hdHRyJyk7XG5cbnZhciBfYXR0cjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9hdHRyKTtcblxudmFyIF9jc3MgPSByZXF1aXJlKCcuL3JlbmRlci9jc3MnKTtcblxudmFyIF9jc3MyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY3NzKTtcblxudmFyIF9zdmcgPSByZXF1aXJlKCcuL3JlbmRlci9zdmcnKTtcblxudmFyIF9zdmcyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfc3ZnKTtcblxudmFyIF9zdmdQYXRoID0gcmVxdWlyZSgnLi9yZW5kZXIvc3ZnLXBhdGgnKTtcblxudmFyIF9zdmdQYXRoMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3N2Z1BhdGgpO1xuXG52YXIgX3ByZXNldEVhc2luZyA9IHJlcXVpcmUoJy4vYWN0aW9ucy9lYXNpbmcvcHJlc2V0LWVhc2luZycpO1xuXG52YXIgX3ByZXNldEVhc2luZzIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9wcmVzZXRFYXNpbmcpO1xuXG52YXIgX2NhbGMyID0gcmVxdWlyZSgnLi9pbmMvY2FsYycpO1xuXG52YXIgX2NhbGMgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChfY2FsYzIpO1xuXG52YXIgX3V0aWxzMiA9IHJlcXVpcmUoJy4vaW5jL3V0aWxzJyk7XG5cbnZhciBfdXRpbHMgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChfdXRpbHMyKTtcblxudmFyIF9zZWxlY3RBY3RvciA9IHJlcXVpcmUoJy4vaW5jL3NlbGVjdC1hY3RvcicpO1xuXG52YXIgX3NlbGVjdEFjdG9yMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3NlbGVjdEFjdG9yKTtcblxudmFyIF90aW1lciA9IHJlcXVpcmUoJy4vcHJvY2Vzcy90aW1lcicpO1xuXG52YXIgX3RpbWVyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3RpbWVyKTtcblxudmFyIF9zdGFnZ2VyMiA9IHJlcXVpcmUoJy4vaW5jL3N0YWdnZXInKTtcblxudmFyIF9zdGFnZ2VyMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3N0YWdnZXIyKTtcblxudmFyIF90aW1lbGluZTIgPSByZXF1aXJlKCcuL2luYy90aW1lbGluZScpO1xuXG52YXIgX3RpbWVsaW5lMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3RpbWVsaW5lMik7XG5cbnZhciBfYWxwaGEgPSByZXF1aXJlKCcuL3ZhbHVlLXR5cGVzL2FscGhhJyk7XG5cbnZhciBfYWxwaGEyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfYWxwaGEpO1xuXG52YXIgX2FuZ2xlID0gcmVxdWlyZSgnLi92YWx1ZS10eXBlcy9hbmdsZScpO1xuXG52YXIgX2FuZ2xlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2FuZ2xlKTtcblxudmFyIF9heGVzID0gcmVxdWlyZSgnLi92YWx1ZS10eXBlcy9heGVzJyk7XG5cbnZhciBfYXhlczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9heGVzKTtcblxudmFyIF9jb2xvciA9IHJlcXVpcmUoJy4vdmFsdWUtdHlwZXMvY29sb3InKTtcblxudmFyIF9jb2xvcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jb2xvcik7XG5cbnZhciBfY29tcGxleCA9IHJlcXVpcmUoJy4vdmFsdWUtdHlwZXMvY29tcGxleCcpO1xuXG52YXIgX2NvbXBsZXgyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY29tcGxleCk7XG5cbnZhciBfaGV4ID0gcmVxdWlyZSgnLi92YWx1ZS10eXBlcy9oZXgnKTtcblxudmFyIF9oZXgyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfaGV4KTtcblxudmFyIF9oc2wgPSByZXF1aXJlKCcuL3ZhbHVlLXR5cGVzL2hzbCcpO1xuXG52YXIgX2hzbDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9oc2wpO1xuXG52YXIgX3Bvc2l0aW9ucyA9IHJlcXVpcmUoJy4vdmFsdWUtdHlwZXMvcG9zaXRpb25zJyk7XG5cbnZhciBfcG9zaXRpb25zMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3Bvc2l0aW9ucyk7XG5cbnZhciBfcHggPSByZXF1aXJlKCcuL3ZhbHVlLXR5cGVzL3B4Jyk7XG5cbnZhciBfcHgyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcHgpO1xuXG52YXIgX3JnYiA9IHJlcXVpcmUoJy4vdmFsdWUtdHlwZXMvcmdiJyk7XG5cbnZhciBfcmdiMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JnYik7XG5cbnZhciBfc2NhbGUgPSByZXF1aXJlKCcuL3ZhbHVlLXR5cGVzL3NjYWxlJyk7XG5cbnZhciBfc2NhbGUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfc2NhbGUpO1xuXG52YXIgX3NoYWRvdyA9IHJlcXVpcmUoJy4vdmFsdWUtdHlwZXMvc2hhZG93Jyk7XG5cbnZhciBfc2hhZG93MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3NoYWRvdyk7XG5cbnZhciBfbWFwID0gcmVxdWlyZSgnLi90cmFuc2Zvcm1lcnMvbWFwJyk7XG5cbnZhciBfbWFwMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX21hcCk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKG9iaikgeyBpZiAob2JqICYmIG9iai5fX2VzTW9kdWxlKSB7IHJldHVybiBvYmo7IH0gZWxzZSB7IHZhciBuZXdPYmogPSB7fTsgaWYgKG9iaiAhPSBudWxsKSB7IGZvciAodmFyIGtleSBpbiBvYmopIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGtleSkpIG5ld09ialtrZXldID0gb2JqW2tleV07IH0gfSBuZXdPYmouZGVmYXVsdCA9IG9iajsgcmV0dXJuIG5ld09iajsgfSB9XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbi8vIFByb2Nlc3Ncbi8vIEFjdG9yXG52YXIgYWN0b3IgPSBleHBvcnRzLmFjdG9yID0gZnVuY3Rpb24gKHByb3BzKSB7XG4gIHJldHVybiBuZXcgX0FjdG9yMi5kZWZhdWx0KHByb3BzKTtcbn07XG5cbi8vIElucHV0XG5cbi8vIEFjdGlvbnNcblxudmFyIHR3ZWVuID0gZXhwb3J0cy50d2VlbiA9IGZ1bmN0aW9uIChwcm9wcykge1xuICByZXR1cm4gbmV3IF9Ud2VlbjIuZGVmYXVsdChwcm9wcyk7XG59O1xudmFyIHBoeXNpY3MgPSBleHBvcnRzLnBoeXNpY3MgPSBmdW5jdGlvbiAocHJvcHMpIHtcbiAgcmV0dXJuIG5ldyBfUGh5c2ljczIuZGVmYXVsdChwcm9wcyk7XG59O1xudmFyIHRyYWNrID0gZXhwb3J0cy50cmFjayA9IGZ1bmN0aW9uICgpIHtcbiAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICBhcmdzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICB9XG5cbiAgcmV0dXJuIG5ldyAoRnVuY3Rpb24ucHJvdG90eXBlLmJpbmQuYXBwbHkoX1RyYWNrMi5kZWZhdWx0LCBbbnVsbF0uY29uY2F0KGFyZ3MpKSkoKTtcbn07XG52YXIgaW5wdXQgPSBleHBvcnRzLmlucHV0ID0gZnVuY3Rpb24gKCkge1xuICBmb3IgKHZhciBfbGVuMiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBBcnJheShfbGVuMiksIF9rZXkyID0gMDsgX2tleTIgPCBfbGVuMjsgX2tleTIrKykge1xuICAgIGFyZ3NbX2tleTJdID0gYXJndW1lbnRzW19rZXkyXTtcbiAgfVxuXG4gIHJldHVybiBuZXcgKEZ1bmN0aW9uLnByb3RvdHlwZS5iaW5kLmFwcGx5KF9JbnB1dDIuZGVmYXVsdCwgW251bGxdLmNvbmNhdChhcmdzKSkpKCk7XG59O1xudmFyIHByb2Nlc3MgPSBleHBvcnRzLnByb2Nlc3MgPSBmdW5jdGlvbiAoKSB7XG4gIGZvciAodmFyIF9sZW4zID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IEFycmF5KF9sZW4zKSwgX2tleTMgPSAwOyBfa2V5MyA8IF9sZW4zOyBfa2V5MysrKSB7XG4gICAgYXJnc1tfa2V5M10gPSBhcmd1bWVudHNbX2tleTNdO1xuICB9XG5cbiAgcmV0dXJuIG5ldyAoRnVuY3Rpb24ucHJvdG90eXBlLmJpbmQuYXBwbHkoX1Byb2Nlc3MyLmRlZmF1bHQsIFtudWxsXS5jb25jYXQoYXJncykpKSgpO1xufTtcblxuLy8gUmVuZGVyZXJzXG5leHBvcnRzLnJlbmRlckF0dHIgPSBfYXR0cjIuZGVmYXVsdDtcbmV4cG9ydHMucmVuZGVyQ1NTID0gX2NzczIuZGVmYXVsdDtcbmV4cG9ydHMucmVuZGVyU1ZHID0gX3N2ZzIuZGVmYXVsdDtcbmV4cG9ydHMucmVuZGVyU1ZHUGF0aCA9IF9zdmdQYXRoMi5kZWZhdWx0O1xuXG4vLyBFYXNpbmdcblxuZXhwb3J0cy5lYXNpbmcgPSBfcHJlc2V0RWFzaW5nMi5kZWZhdWx0O1xuXG4vLyBVdGlsc1xuXG5leHBvcnRzLmNhbGMgPSBfY2FsYztcbmV4cG9ydHMudXRpbHMgPSBfdXRpbHM7XG5leHBvcnRzLiQgPSBfc2VsZWN0QWN0b3IyLmRlZmF1bHQ7XG5leHBvcnRzLnNldERpbGF0aW9uID0gX3RpbWVyMi5kZWZhdWx0O1xuZXhwb3J0cy5zdGFnZ2VyID0gX3N0YWdnZXIzLmRlZmF1bHQ7XG5leHBvcnRzLnRpbWVsaW5lID0gX3RpbWVsaW5lMy5kZWZhdWx0O1xuXG4vLyBWYWx1ZSB0eXBlc1xuXG5leHBvcnRzLmFscGhhVHlwZSA9IF9hbHBoYTIuZGVmYXVsdDtcbmV4cG9ydHMuYW5nbGVUeXBlID0gX2FuZ2xlMi5kZWZhdWx0O1xuZXhwb3J0cy5heGVzVHlwZSA9IF9heGVzMi5kZWZhdWx0O1xuZXhwb3J0cy5jb2xvclR5cGUgPSBfY29sb3IyLmRlZmF1bHQ7XG5leHBvcnRzLmNvbXBsZXhUeXBlID0gX2NvbXBsZXgyLmRlZmF1bHQ7XG5leHBvcnRzLmhleFR5cGUgPSBfaGV4Mi5kZWZhdWx0O1xuZXhwb3J0cy5oc2xUeXBlID0gX2hzbDIuZGVmYXVsdDtcbmV4cG9ydHMucG9zaXRpb25zVHlwZSA9IF9wb3NpdGlvbnMyLmRlZmF1bHQ7XG5leHBvcnRzLnB4VHlwZSA9IF9weDIuZGVmYXVsdDtcbmV4cG9ydHMucmdiVHlwZSA9IF9yZ2IyLmRlZmF1bHQ7XG5leHBvcnRzLnNjYWxlVHlwZSA9IF9zY2FsZTIuZGVmYXVsdDtcbmV4cG9ydHMuc2hhZG93VHlwZSA9IF9zaGFkb3cyLmRlZmF1bHQ7XG5cbi8vIFRyYW5zZm9ybWVyc1xuXG5leHBvcnRzLmNyZWF0ZU1hcFRyYW5zZm9ybSA9IF9tYXAyLmRlZmF1bHQ7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5OeVl5OXdiM0J0YjNScGIyNHVhbk1pWFN3aWJtRnRaWE1pT2x0ZExDSnRZWEJ3YVc1bmN5STZJanM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN1FVRmpUeXhKUVVGTkxIZENRVUZSTEZWQlFVTXNTMEZCUkR0VFFVRlhMRzlDUVVGVkxFdEJRVlk3UTBGQldEczdPenM3TzBGQlEyUXNTVUZCVFN4M1FrRkJVU3hWUVVGRExFdEJRVVE3VTBGQlZ5eHZRa0ZCVlN4TFFVRldPME5CUVZnN1FVRkRaQ3hKUVVGTkxEUkNRVUZWTEZWQlFVTXNTMEZCUkR0VFFVRlhMSE5DUVVGWkxFdEJRVm83UTBGQldEdEJRVU5vUWl4SlFVRk5MSGRDUVVGUk8yOURRVUZKT3pzN096SkZRVUZ6UWp0RFFVRXhRanRCUVVOa0xFbEJRVTBzZDBKQlFWRTdjVU5CUVVrN096czdNa1ZCUVhOQ08wTkJRVEZDTzBGQlEyUXNTVUZCVFN3MFFrRkJWVHR4UTBGQlNUczdPenMyUlVGQmQwSTdRMEZCTlVJN096dFJRVWRvUWp0UlFVTkJPMUZCUTBFN1VVRkRRVHM3T3p0UlFVZEJPenM3TzFGQlIwczdVVUZEUVR0UlFVTk1PMUZCUTBFN1VVRkRRVHRSUVVOQk96czdPMUZCUjBFN1VVRkRRVHRSUVVOQk8xRkJRMEU3VVVGRFFUdFJRVU5CTzFGQlEwRTdVVUZEUVR0UlFVTkJPMUZCUTBFN1VVRkRRVHRSUVVOQk96czdPMUZCUjBFaUxDSm1hV3hsSWpvaWNHOXdiVzkwYVc5dUxtcHpJaXdpYzI5MWNtTmxVbTl2ZENJNklpOVZjMlZ5Y3k5TllYUjBMMU5wZEdWekwzQnZjRzF2ZEdsdmJpSXNJbk52ZFhKalpYTkRiMjUwWlc1MElqcGJJaTh2SUVGamRHOXlYRzVwYlhCdmNuUWdRV04wYjNJZ1puSnZiU0FuTGk5aFkzUnZjaTlCWTNSdmNpYzdYRzVjYmk4dklFRmpkR2x2Ym5OY2JtbHRjRzl5ZENCVWQyVmxiaUJtY205dElDY3VMMkZqZEdsdmJuTXZWSGRsWlc0bk8xeHVhVzF3YjNKMElGQm9lWE5wWTNNZ1puSnZiU0FuTGk5aFkzUnBiMjV6TDFCb2VYTnBZM01uTzF4dWFXMXdiM0owSUZSeVlXTnJJR1p5YjIwZ0p5NHZZV04wYVc5dWN5OVVjbUZqYXljN1hHNWNiaTh2SUZCeWIyTmxjM05jYm1sdGNHOXlkQ0JRY205alpYTnpJR1p5YjIwZ0p5NHZjSEp2WTJWemN5OVFjbTlqWlhOekp6dGNibHh1THk4Z1NXNXdkWFJjYm1sdGNHOXlkQ0JKYm5CMWRDQm1jbTl0SUNjdUwybHVjSFYwTDBsdWNIVjBKenRjYmx4dVpYaHdiM0owSUdOdmJuTjBJR0ZqZEc5eUlEMGdLSEJ5YjNCektTQTlQaUJ1WlhjZ1FXTjBiM0lvY0hKdmNITXBPMXh1Wlhod2IzSjBJR052Ym5OMElIUjNaV1Z1SUQwZ0tIQnliM0J6S1NBOVBpQnVaWGNnVkhkbFpXNG9jSEp2Y0hNcE8xeHVaWGh3YjNKMElHTnZibk4wSUhCb2VYTnBZM01nUFNBb2NISnZjSE1wSUQwK0lHNWxkeUJRYUhsemFXTnpLSEJ5YjNCektUdGNibVY0Y0c5eWRDQmpiMjV6ZENCMGNtRmpheUE5SUNndUxpNWhjbWR6S1NBOVBpQnVaWGNnVkhKaFkyc29MaTR1WVhKbmN5azdYRzVsZUhCdmNuUWdZMjl1YzNRZ2FXNXdkWFFnUFNBb0xpNHVZWEpuY3lrZ1BUNGdibVYzSUVsdWNIVjBLQzR1TG1GeVozTXBPMXh1Wlhod2IzSjBJR052Ym5OMElIQnliMk5sYzNNZ1BTQW9MaTR1WVhKbmN5a2dQVDRnYm1WM0lGQnliMk5sYzNNb0xpNHVZWEpuY3lrN1hHNWNiaTh2SUZKbGJtUmxjbVZ5YzF4dVpYaHdiM0owSUhKbGJtUmxja0YwZEhJZ1puSnZiU0FuTGk5eVpXNWtaWEl2WVhSMGNpYzdYRzVsZUhCdmNuUWdjbVZ1WkdWeVExTlRJR1p5YjIwZ0p5NHZjbVZ1WkdWeUwyTnpjeWM3WEc1bGVIQnZjblFnY21WdVpHVnlVMVpISUdaeWIyMGdKeTR2Y21WdVpHVnlMM04yWnljN1hHNWxlSEJ2Y25RZ2NtVnVaR1Z5VTFaSFVHRjBhQ0JtY205dElDY3VMM0psYm1SbGNpOXpkbWN0Y0dGMGFDYzdYRzVjYmk4dklFVmhjMmx1WjF4dVpYaHdiM0owSUdWaGMybHVaeUJtY205dElDY3VMMkZqZEdsdmJuTXZaV0Z6YVc1bkwzQnlaWE5sZEMxbFlYTnBibWNuTzF4dVhHNHZMeUJWZEdsc2MxeHVaWGh3YjNKMElDb2dZWE1nWTJGc1l5Qm1jbTl0SUNjdUwybHVZeTlqWVd4akp6dGNibVY0Y0c5eWRDQXFJR0Z6SUhWMGFXeHpJR1p5YjIwZ0p5NHZhVzVqTDNWMGFXeHpKenRjYm1WNGNHOXlkQ0FrSUdaeWIyMGdKeTR2YVc1akwzTmxiR1ZqZEMxaFkzUnZjaWM3WEc1bGVIQnZjblFnYzJWMFJHbHNZWFJwYjI0Z1puSnZiU0FuTGk5d2NtOWpaWE56TDNScGJXVnlKenRjYm1WNGNHOXlkQ0J6ZEdGbloyVnlJR1p5YjIwZ0p5NHZhVzVqTDNOMFlXZG5aWEluTzF4dVpYaHdiM0owSUhScGJXVnNhVzVsSUdaeWIyMGdKeTR2YVc1akwzUnBiV1ZzYVc1bEp6dGNibHh1THk4Z1ZtRnNkV1VnZEhsd1pYTmNibVY0Y0c5eWRDQmhiSEJvWVZSNWNHVWdabkp2YlNBbkxpOTJZV3gxWlMxMGVYQmxjeTloYkhCb1lTYzdYRzVsZUhCdmNuUWdZVzVuYkdWVWVYQmxJR1p5YjIwZ0p5NHZkbUZzZFdVdGRIbHdaWE12WVc1bmJHVW5PMXh1Wlhod2IzSjBJR0Y0WlhOVWVYQmxJR1p5YjIwZ0p5NHZkbUZzZFdVdGRIbHdaWE12WVhobGN5YzdYRzVsZUhCdmNuUWdZMjlzYjNKVWVYQmxJR1p5YjIwZ0p5NHZkbUZzZFdVdGRIbHdaWE12WTI5c2IzSW5PMXh1Wlhod2IzSjBJR052YlhCc1pYaFVlWEJsSUdaeWIyMGdKeTR2ZG1Gc2RXVXRkSGx3WlhNdlkyOXRjR3hsZUNjN1hHNWxlSEJ2Y25RZ2FHVjRWSGx3WlNCbWNtOXRJQ2N1TDNaaGJIVmxMWFI1Y0dWekwyaGxlQ2M3WEc1bGVIQnZjblFnYUhOc1ZIbHdaU0JtY205dElDY3VMM1poYkhWbExYUjVjR1Z6TDJoemJDYzdYRzVsZUhCdmNuUWdjRzl6YVhScGIyNXpWSGx3WlNCbWNtOXRJQ2N1TDNaaGJIVmxMWFI1Y0dWekwzQnZjMmwwYVc5dWN5YzdYRzVsZUhCdmNuUWdjSGhVZVhCbElHWnliMjBnSnk0dmRtRnNkV1V0ZEhsd1pYTXZjSGduTzF4dVpYaHdiM0owSUhKbllsUjVjR1VnWm5KdmJTQW5MaTkyWVd4MVpTMTBlWEJsY3k5eVoySW5PMXh1Wlhod2IzSjBJSE5qWVd4bFZIbHdaU0JtY205dElDY3VMM1poYkhWbExYUjVjR1Z6TDNOallXeGxKenRjYm1WNGNHOXlkQ0J6YUdGa2IzZFVlWEJsSUdaeWIyMGdKeTR2ZG1Gc2RXVXRkSGx3WlhNdmMyaGhaRzkzSnp0Y2JseHVMeThnVkhKaGJuTm1iM0p0WlhKelhHNWxlSEJ2Y25RZ1kzSmxZWFJsVFdGd1ZISmhibk5tYjNKdElHWnliMjBnSnk0dmRISmhibk5tYjNKdFpYSnpMMjFoY0NjN0lsMTlcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL3BvcG1vdGlvbi5qc1xuICoqIG1vZHVsZSBpZCA9IDFcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF9BY3Rpb24yID0gcmVxdWlyZSgnLi4vYWN0aW9ucy9BY3Rpb24nKTtcblxudmFyIF9BY3Rpb24zID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfQWN0aW9uMik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKCFzZWxmKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gY2FsbCAmJiAodHlwZW9mIGNhbGwgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikgPyBjYWxsIDogc2VsZjsgfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb24sIG5vdCBcIiArIHR5cGVvZiBzdXBlckNsYXNzKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCBlbnVtZXJhYmxlOiBmYWxzZSwgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LnNldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKSA6IHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7IH1cblxudmFyIEFjdG9yID0gZnVuY3Rpb24gKF9BY3Rpb24pIHtcbiAgICBfaW5oZXJpdHMoQWN0b3IsIF9BY3Rpb24pO1xuXG4gICAgZnVuY3Rpb24gQWN0b3IoKSB7XG4gICAgICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBBY3Rvcik7XG5cbiAgICAgICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgICAgICAgIGFyZ3NbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgX3RoaXMgPSBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCBfQWN0aW9uLmNhbGwuYXBwbHkoX0FjdGlvbiwgW3RoaXNdLmNvbmNhdChhcmdzKSkpO1xuXG4gICAgICAgIF90aGlzLm9uY2UoKTtcbiAgICAgICAgcmV0dXJuIF90aGlzO1xuICAgIH1cblxuICAgIEFjdG9yLnByb3RvdHlwZS5zZXQgPSBmdW5jdGlvbiBzZXQocHJvcHMsIGZvcmNlSW5zdGFudCkge1xuICAgICAgICBfQWN0aW9uLnByb3RvdHlwZS5zZXQuY2FsbCh0aGlzLCBwcm9wcyk7XG5cbiAgICAgICAgaWYgKHRoaXMucmVkdWNlcikge1xuICAgICAgICAgICAgcHJvcHMgPSB0aGlzLnJlZHVjZXIodGhpcyk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgQWN0b3IucHJvdG90eXBlLmJpbmQgPSBmdW5jdGlvbiBiaW5kKGFjdGlvbikge1xuICAgICAgICB2YXIgX3RoaXMyID0gdGhpcztcblxuICAgICAgICByZXR1cm4gYWN0aW9uLmluaGVyaXQoe1xuICAgICAgICAgICAgcHJlUmVuZGVyOiBmdW5jdGlvbiAoYWN0aW9uKSB7XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBfdGhpczIubnVtVmFsdWVLZXlzOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGtleSA9IF90aGlzMi52YWx1ZUtleXNbaV07XG4gICAgICAgICAgICAgICAgICAgIHZhciB2YWx1ZSA9IF90aGlzMi52YWx1ZXNba2V5XTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH07XG5cbiAgICBBY3Rvci5wcm90b3R5cGUuc3RhcnQgPSBmdW5jdGlvbiBzdGFydChhY3Rpb24pIHtcbiAgICAgICAgaWYgKGFjdGlvbikge1xuICAgICAgICAgICAgdmFyIGJvdW5kQWN0aW9uID0gdGhpcy5iaW5kKGFjdGlvbik7XG4gICAgICAgICAgICBib3VuZEFjdGlvbi5zdGFydCgpO1xuXG4gICAgICAgICAgICByZXR1cm4gYm91bmRBY3Rpb247XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gX0FjdGlvbi5wcm90b3R5cGUuc3RhcnQuY2FsbCh0aGlzKTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIEFjdG9yO1xufShfQWN0aW9uMy5kZWZhdWx0KTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gQWN0b3I7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5OeVl5OWhZM1J2Y2k5QlkzUnZjaTVxY3lKZExDSnVZVzFsY3lJNlcxMHNJbTFoY0hCcGJtZHpJam9pT3pzN096czdPenM3T3pzN096czdPMGxCUlhGQ096czdRVUZEYWtJc1lVRkVhVUlzUzBGRGFrSXNSMEZCY1VJN09FSkJSRW9zVDBGRFNUczdNRU5CUVU0N08xTkJRVTA3TzNGRVFVTnFRaXd3UTBGQlV5eExRVUZVTEVkQlJHbENPenRCUVVWcVFpeGpRVUZMTEVsQlFVd3NSMEZHYVVJN08wdEJRWEpDT3p0QlFVUnBRaXh2UWtGTmFrSXNiVUpCUVVrc1QwRkJUeXhqUVVGak8wRkJRM0pDTERCQ1FVRk5MRWRCUVU0c1dVRkJWU3hMUVVGV0xFVkJSSEZDT3p0QlFVZHlRaXhaUVVGSkxFdEJRVXNzVDBGQlRDeEZRVUZqTzBGQlEyUXNiMEpCUVZFc1MwRkJTeXhQUVVGTUxFTkJRV0VzU1VGQllpeERRVUZTTEVOQlJHTTdVMEZCYkVJN096dEJRVlJoTEc5Q1FXTnFRaXh4UWtGQlN5eFJRVUZST3pzN1FVRkRWQ3hsUVVGUExFOUJRVThzVDBGQlVDeERRVUZsTzBGQlEyeENMSFZDUVVGWExGVkJRVU1zVFVGQlJDeEZRVUZaTzBGQlEyNUNMSEZDUVVGTExFbEJRVWtzU1VGQlNTeERRVUZLTEVWQlFVOHNTVUZCU1N4UFFVRkxMRmxCUVV3c1JVRkJiVUlzUjBGQmRrTXNSVUZCTkVNN1FVRkRlRU1zZDBKQlFVMHNUVUZCVFN4UFFVRkxMRk5CUVV3c1EwRkJaU3hEUVVGbUxFTkJRVTRzUTBGRWEwTTdRVUZGZUVNc2QwSkJRVTBzVVVGQlVTeFBRVUZMTEUxQlFVd3NRMEZCV1N4SFFVRmFMRU5CUVZJc1EwRkdhME03YVVKQlFUVkRPMkZCUkU4N1UwRkVVaXhEUVVGUUxFTkJSRk03T3p0QlFXUkpMRzlDUVRKQ2FrSXNkVUpCUVUwc1VVRkJVVHRCUVVOV0xGbEJRVWtzVFVGQlNpeEZRVUZaTzBGQlExSXNaMEpCUVUwc1kwRkJZeXhMUVVGTExFbEJRVXdzUTBGQlZTeE5RVUZXTEVOQlFXUXNRMEZFUlR0QlFVVlNMSGRDUVVGWkxFdEJRVm9zUjBGR1VUczdRVUZKVWl4dFFrRkJUeXhYUVVGUUxFTkJTbEU3VTBGQldqczdRVUZQUVN4bFFVRlBMR3RDUVVGTkxFdEJRVTRzVjBGQlVDeERRVkpWT3pzN1YwRXpRa2NpTENKbWFXeGxJam9pUVdOMGIzSXVhbk1pTENKemIzVnlZMlZTYjI5MElqb2lMMVZ6WlhKekwwMWhkSFF2VTJsMFpYTXZjRzl3Ylc5MGFXOXVJaXdpYzI5MWNtTmxjME52Ym5SbGJuUWlPbHNpYVcxd2IzSjBJRUZqZEdsdmJpQm1jbTl0SUNjdUxpOWhZM1JwYjI1ekwwRmpkR2x2YmljN1hHNWNibVY0Y0c5eWRDQmtaV1poZFd4MElHTnNZWE56SUVGamRHOXlJR1Y0ZEdWdVpITWdRV04wYVc5dUlIdGNiaUFnSUNCamIyNXpkSEoxWTNSdmNpZ3VMaTVoY21kektTQjdYRzRnSUNBZ0lDQWdJSE4xY0dWeUtDNHVMbUZ5WjNNcE8xeHVJQ0FnSUNBZ0lDQjBhR2x6TG05dVkyVW9LVHRjYmlBZ0lDQjlYRzVjYmlBZ0lDQnpaWFFvY0hKdmNITXNJR1p2Y21ObFNXNXpkR0Z1ZENrZ2UxeHVJQ0FnSUNBZ0lDQnpkWEJsY2k1elpYUW9jSEp2Y0hNcE8xeHVYRzRnSUNBZ0lDQWdJR2xtSUNoMGFHbHpMbkpsWkhWalpYSXBJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lIQnliM0J6SUQwZ2RHaHBjeTV5WldSMVkyVnlLSFJvYVhNcE8xeHVJQ0FnSUNBZ0lDQjlYRzRnSUNBZ2ZWeHVYRzRnSUNBZ1ltbHVaQ2hoWTNScGIyNHBJSHRjYmlBZ0lDQWdJQ0FnY21WMGRYSnVJR0ZqZEdsdmJpNXBibWhsY21sMEtIdGNiaUFnSUNBZ0lDQWdJQ0FnSUhCeVpWSmxibVJsY2pvZ0tHRmpkR2x2YmlrZ1BUNGdlMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJR1p2Y2lBb2JHVjBJR2tnUFNBd095QnBJRHdnZEdocGN5NXVkVzFXWVd4MVpVdGxlWE03SUdrckt5a2dlMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCamIyNXpkQ0JyWlhrZ1BTQjBhR2x6TG5aaGJIVmxTMlY1YzF0cFhUdGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnWTI5dWMzUWdkbUZzZFdVZ1BTQjBhR2x6TG5aaGJIVmxjMXRyWlhsZE8xeHVYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUZ4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUgxY2JpQWdJQ0FnSUNBZ0lDQWdJSDFjYmlBZ0lDQWdJQ0FnZlNrN1hHNGdJQ0FnZlZ4dVhHNGdJQ0FnYzNSaGNuUW9ZV04wYVc5dUtTQjdYRzRnSUNBZ0lDQWdJR2xtSUNoaFkzUnBiMjRwSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJR052Ym5OMElHSnZkVzVrUVdOMGFXOXVJRDBnZEdocGN5NWlhVzVrS0dGamRHbHZiaWs3WEc0Z0lDQWdJQ0FnSUNBZ0lDQmliM1Z1WkVGamRHbHZiaTV6ZEdGeWRDZ3BPMXh1WEc0Z0lDQWdJQ0FnSUNBZ0lDQnlaWFIxY200Z1ltOTFibVJCWTNScGIyNDdYRzRnSUNBZ0lDQWdJSDFjYmx4dUlDQWdJQ0FnSUNCeVpYUjFjbTRnYzNWd1pYSXVjM1JoY25Rb0tUdGNiaUFnSUNCOVhHNTlJbDE5XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9hY3Rvci9BY3Rvci5qc1xuICoqIG1vZHVsZSBpZCA9IDJcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxudmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF9BY3Rpb24yID0gcmVxdWlyZSgnLi9BY3Rpb24nKTtcblxudmFyIF9BY3Rpb24zID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfQWN0aW9uMik7XG5cbnZhciBfcHJlc2V0RWFzaW5nID0gcmVxdWlyZSgnLi9lYXNpbmcvcHJlc2V0LWVhc2luZycpO1xuXG52YXIgX3V0aWxzID0gcmVxdWlyZSgnLi4vaW5jL3V0aWxzJyk7XG5cbnZhciBfY2FsYyA9IHJlcXVpcmUoJy4uL2luYy9jYWxjJyk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKCFzZWxmKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gY2FsbCAmJiAodHlwZW9mIGNhbGwgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikgPyBjYWxsIDogc2VsZjsgfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb24sIG5vdCBcIiArIHR5cGVvZiBzdXBlckNsYXNzKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCBlbnVtZXJhYmxlOiBmYWxzZSwgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LnNldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKSA6IHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7IH1cblxudmFyIENPVU5UID0gJ0NvdW50JztcbnZhciBORVhUX1NURVBTID0ge1xuICAgIGxvb3A6ICdyZXN0YXJ0JyxcbiAgICB5b3lvOiAncmV2ZXJzZScsXG4gICAgZmxpcDogJ2ZsaXBWYWx1ZXMnXG59O1xuXG4vKlxuICAgIEVhc2UgdmFsdWUgd2l0aGluIHJhbmdlZCBwYXJhbWV0ZXJzXG4gICAgXG4gICAgQHBhcmFtIFtudW1iZXJdOiBQcm9ncmVzcyBiZXR3ZWVuIDAgYW5kIDFcbiAgICBAcGFyYW0gW251bWJlcl06IFZhbHVlIG9mIDAgcHJvZ3Jlc3NcbiAgICBAcGFyYW0gW251bWJlcl06IFZhbHVlIG9mIDEgcHJvZ3Jlc3NcbiAgICBAcGFyYW0gW3N0cmluZyB8fCBmdW5jdGlvbl06IE5hbWUgb2YgcHJlc2V0IGVhc2luZ1xuICAgICAgICB0byB1c2Ugb3IgZ2VuZXJhdGVkIGVhc2luZyBmdW5jdGlvblxuICAgIEByZXR1cm4gW251bWJlcl06IFZhbHVlIG9mIGVhc2VkIHByb2dyZXNzIGluIHJhbmdlXG4qL1xudmFyIGVhc2UgPSBmdW5jdGlvbiAocHJvZ3Jlc3MsIGZyb20sIHRvLCBlYXNlKSB7XG4gICAgdmFyIHByb2dyZXNzTGltaXRlZCA9ICgwLCBfY2FsYy5yZXN0cmljdCkocHJvZ3Jlc3MsIDAsIDEpO1xuICAgIHZhciBlYXNlZFByb2dyZXNzID0gZWFzZShwcm9ncmVzc0xpbWl0ZWQpO1xuXG4gICAgcmV0dXJuICgwLCBfY2FsYy5nZXRWYWx1ZUZyb21Qcm9ncmVzcykoZWFzZWRQcm9ncmVzcywgZnJvbSwgdG8pO1xufTtcblxudmFyIFR3ZWVuID0gZnVuY3Rpb24gKF9BY3Rpb24pIHtcbiAgICBfaW5oZXJpdHMoVHdlZW4sIF9BY3Rpb24pO1xuXG4gICAgZnVuY3Rpb24gVHdlZW4oKSB7XG4gICAgICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBUd2Vlbik7XG5cbiAgICAgICAgcmV0dXJuIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIF9BY3Rpb24uYXBwbHkodGhpcywgYXJndW1lbnRzKSk7XG4gICAgfVxuXG4gICAgVHdlZW4ucHJvdG90eXBlLnN0YXJ0ID0gZnVuY3Rpb24gc3RhcnQoKSB7XG4gICAgICAgIF9BY3Rpb24ucHJvdG90eXBlLnN0YXJ0LmNhbGwodGhpcyk7XG4gICAgICAgIHRoaXMuZWxhcHNlZCA9IDA7XG4gICAgICAgIHRoaXMuZmxpcENvdW50ID0gdGhpcy55b3lvQ291bnQgPSB0aGlzLmxvb3BDb3VudCA9IDA7XG4gICAgfTtcblxuICAgIFR3ZWVuLnByb3RvdHlwZS5vblVwZGF0ZSA9IGZ1bmN0aW9uIG9uVXBkYXRlKHR3ZWVuLCBmcmFtZVN0YW1wLCBlbGFwc2VkKSB7XG4gICAgICAgIHZhciBwcm9ncmVzc1RhcmdldCA9IHRoaXMucGxheURpcmVjdGlvbiA9PT0gMSA/IDEgOiAwO1xuXG4gICAgICAgIHRoaXMuZW5kZWQgPSB0cnVlO1xuICAgICAgICB0aGlzLmVsYXBzZWQgKz0gZWxhcHNlZCAqIHRoaXMuZGlsYXRlICogdGhpcy5wbGF5RGlyZWN0aW9uO1xuXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5udW1WYWx1ZUtleXM7IGkrKykge1xuICAgICAgICAgICAgdmFyIGtleSA9IHRoaXMudmFsdWVLZXlzW2ldO1xuICAgICAgICAgICAgdmFyIHZhbHVlID0gdGhpcy52YWx1ZXNba2V5XTtcblxuICAgICAgICAgICAgdmFyIHByb2dyZXNzID0gKDAsIF9jYWxjLnJlc3RyaWN0KSgoMCwgX2NhbGMuZ2V0UHJvZ3Jlc3NGcm9tVmFsdWUpKHRoaXMuZWxhcHNlZCAtIHZhbHVlLmRlbGF5LCAwLCB2YWx1ZS5kdXJhdGlvbiksIDAsIDEpO1xuXG4gICAgICAgICAgICAvLyBNYXJrIFR3ZWVuIGFzIE5PVCBlbmRlZCBpZiBzdGlsbCBpbiBwcm9ncmVzc1xuICAgICAgICAgICAgaWYgKHByb2dyZXNzICE9PSBwcm9ncmVzc1RhcmdldCkge1xuICAgICAgICAgICAgICAgIHRoaXMuZW5kZWQgPSBmYWxzZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gU3RlcCBwcm9ncmVzcyBpZiB3ZSdyZSBzdGVwcGluZ1xuICAgICAgICAgICAgaWYgKHZhbHVlLnN0ZXBzKSB7XG4gICAgICAgICAgICAgICAgcHJvZ3Jlc3MgPSAoMCwgX2NhbGMuc3RlcFByb2dyZXNzKShwcm9ncmVzcywgdmFsdWUuc3RlcHMpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBFYXNlIHByb2dyZXNzXG4gICAgICAgICAgICB2YWx1ZS5jdXJyZW50ID0gZWFzZShwcm9ncmVzcywgdmFsdWUuZnJvbSwgdmFsdWUudG8sIHZhbHVlLmVhc2UpO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIFR3ZWVuLnByb3RvdHlwZS5vbkZyYW1lRW5kID0gZnVuY3Rpb24gb25GcmFtZUVuZCgpIHtcbiAgICAgICAgdmFyIF90aGlzMiA9IHRoaXM7XG5cbiAgICAgICAgaWYgKHRoaXMuZW5kZWQpIHtcbiAgICAgICAgICAgIHZhciBzdGVwVGFrZW4gPSBmYWxzZTtcblxuICAgICAgICAgICAgKDAsIF91dGlscy5lYWNoKShORVhUX1NURVBTLCBmdW5jdGlvbiAobWV0aG9kLCBzdGVwKSB7XG4gICAgICAgICAgICAgICAgdmFyIG1heFN0ZXBzID0gX3RoaXMyW3N0ZXBdO1xuXG4gICAgICAgICAgICAgICAgaWYgKG1heFN0ZXBzID09PSB0cnVlIHx8ICgwLCBfdXRpbHMuaXNOdW0pKG1heFN0ZXBzKSAmJiBtYXhTdGVwcyA+IF90aGlzMltzdGVwICsgQ09VTlRdKSB7XG4gICAgICAgICAgICAgICAgICAgIF90aGlzMltzdGVwICsgQ09VTlRdKys7XG4gICAgICAgICAgICAgICAgICAgIHN0ZXBUYWtlbiA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIF90aGlzMlttZXRob2RdKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGlmICghc3RlcFRha2VuKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zdG9wKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgVHdlZW4ucHJvdG90eXBlLmZsaXBWYWx1ZXMgPSBmdW5jdGlvbiBmbGlwVmFsdWVzKCkge1xuICAgICAgICB0aGlzLmVsYXBzZWQgPSB0aGlzLmR1cmF0aW9uIC0gdGhpcy5lbGFwc2VkO1xuXG4gICAgICAgICgwLCBfdXRpbHMuZWFjaCkodGhpcy52YWx1ZXMsIGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgdmFyIF9yZWYgPSBbdmFsdWUuZnJvbSwgdmFsdWUudG9dO1xuICAgICAgICAgICAgdmFsdWUudG8gPSBfcmVmWzBdO1xuICAgICAgICAgICAgdmFsdWUuZnJvbSA9IF9yZWZbMV07XG4gICAgICAgIH0pO1xuICAgIH07XG5cbiAgICBUd2Vlbi5wcm90b3R5cGUucmV2ZXJzZSA9IGZ1bmN0aW9uIHJldmVyc2UoKSB7XG4gICAgICAgIHRoaXMucGxheURpcmVjdGlvbiAqPSAtMTtcbiAgICB9O1xuXG4gICAgVHdlZW4ucHJvdG90eXBlLnJlc3RhcnQgPSBmdW5jdGlvbiByZXN0YXJ0KCkge1xuICAgICAgICB0aGlzLmVsYXBzZWQgPSB0aGlzLnBsYXlEaXJlY3Rpb24gPT09IDEgPyAwIDogdGhpcy5kdXJhdGlvbjtcbiAgICAgICAgdGhpcy5zdGFydGVkID0gKDAsIF91dGlscy5jdXJyZW50VGltZSkoKTtcbiAgICB9O1xuXG4gICAgVHdlZW4ucHJvdG90eXBlLnNlZWsgPSBmdW5jdGlvbiBzZWVrKHByb2dyZXNzKSB7XG4gICAgICAgIHRoaXMuc2Vla1RpbWUodGhpcy5kdXJhdGlvbiAqIHByb2dyZXNzKTtcbiAgICB9O1xuXG4gICAgVHdlZW4ucHJvdG90eXBlLnNlZWtUaW1lID0gZnVuY3Rpb24gc2Vla1RpbWUoZWxhcHNlZCkge1xuICAgICAgICB0aGlzLm9uY2UoKTtcbiAgICAgICAgdGhpcy5lbGFwc2VkID0gZWxhcHNlZDtcbiAgICB9O1xuXG4gICAgVHdlZW4ucHJvdG90eXBlLmdldERlZmF1bHRQcm9wcyA9IGZ1bmN0aW9uIGdldERlZmF1bHRQcm9wcygpIHtcbiAgICAgICAgcmV0dXJuIF9leHRlbmRzKHt9LCBfQWN0aW9uLnByb3RvdHlwZS5nZXREZWZhdWx0UHJvcHMuY2FsbCh0aGlzKSwge1xuICAgICAgICAgICAgZGVsYXk6IDAsXG4gICAgICAgICAgICBkaWxhdGU6IDEsXG4gICAgICAgICAgICBkdXJhdGlvbjogMzAwLFxuICAgICAgICAgICAgbG9vcDogZmFsc2UsXG4gICAgICAgICAgICB5b3lvOiBmYWxzZSxcbiAgICAgICAgICAgIGZsaXA6IGZhbHNlLFxuICAgICAgICAgICAgcGxheURpcmVjdGlvbjogMSxcbiAgICAgICAgICAgIGVuZGVkOiBmYWxzZSxcbiAgICAgICAgICAgIGVsYXBzZWQ6IDBcbiAgICAgICAgfSk7XG4gICAgfTtcblxuICAgIFR3ZWVuLnByb3RvdHlwZS5nZXREZWZhdWx0VmFsdWUgPSBmdW5jdGlvbiBnZXREZWZhdWx0VmFsdWUoKSB7XG4gICAgICAgIHJldHVybiBfZXh0ZW5kcyh7fSwgX0FjdGlvbi5wcm90b3R5cGUuZ2V0RGVmYXVsdFZhbHVlLmNhbGwodGhpcyksIHtcbiAgICAgICAgICAgIGRlbGF5OiAwLFxuICAgICAgICAgICAgZHVyYXRpb246IDMwMCxcbiAgICAgICAgICAgIGVhc2U6IF9wcmVzZXRFYXNpbmcuZWFzZU91dCxcbiAgICAgICAgICAgIGVsYXBzZWQ6IDAsXG4gICAgICAgICAgICBzdGFnZ2VyOiAwLFxuICAgICAgICAgICAgc3RlcHM6IDAsXG4gICAgICAgICAgICBmcm9tOiAwLFxuICAgICAgICAgICAgdG86IDAsXG4gICAgICAgICAgICByb3VuZDogZmFsc2VcbiAgICAgICAgfSk7XG4gICAgfTtcblxuICAgIFR3ZWVuLnByb3RvdHlwZS5nZXREZWZhdWx0VmFsdWVQcm9wID0gZnVuY3Rpb24gZ2V0RGVmYXVsdFZhbHVlUHJvcCgpIHtcbiAgICAgICAgcmV0dXJuICd0byc7XG4gICAgfTtcblxuICAgIHJldHVybiBUd2Vlbjtcbn0oX0FjdGlvbjMuZGVmYXVsdCk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IFR3ZWVuO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluTnlZeTloWTNScGIyNXpMMVIzWldWdUxtcHpJbDBzSW01aGJXVnpJanBiWFN3aWJXRndjR2x1WjNNaU9pSTdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3p0QlFXTkJMRWxCUVUwc1VVRkJVU3hQUVVGU08wRkJRMDRzU1VGQlRTeGhRVUZoTzBGQlEyWXNWVUZCVFN4VFFVRk9PMEZCUTBFc1ZVRkJUU3hUUVVGT08wRkJRMEVzVlVGQlRTeFpRVUZPTzBOQlNFVTdPenM3T3pzN096czdPenRCUVdkQ1RpeEpRVUZOTEU5QlFVOHNWVUZCUXl4UlFVRkVMRVZCUVZjc1NVRkJXQ3hGUVVGcFFpeEZRVUZxUWl4RlFVRnhRaXhKUVVGeVFpeEZRVUU0UWp0QlFVTjJReXhSUVVGTkxHdENRVUZyUWl4dlFrRkJVeXhSUVVGVUxFVkJRVzFDTEVOQlFXNUNMRVZCUVhOQ0xFTkJRWFJDTEVOQlFXeENMRU5CUkdsRE8wRkJSWFpETEZGQlFVMHNaMEpCUVdkQ0xFdEJRVXNzWlVGQlRDeERRVUZvUWl4RFFVWnBRenM3UVVGSmRrTXNWMEZCVHl4blEwRkJjVUlzWVVGQmNrSXNSVUZCYjBNc1NVRkJjRU1zUlVGQk1FTXNSVUZCTVVNc1EwRkJVQ3hEUVVwMVF6dERRVUU1UWpzN1NVRlBVVHM3T3pzN096czdPMjlDUVVOcVFpeDVRa0ZCVVR0QlFVTktMREJDUVVGTkxFdEJRVTRzV1VGRVNUdEJRVVZLTEdGQlFVc3NUMEZCVEN4SFFVRmxMRU5CUVdZc1EwRkdTVHRCUVVkS0xHRkJRVXNzVTBGQlRDeEhRVUZwUWl4TFFVRkxMRk5CUVV3c1IwRkJhVUlzUzBGQlN5eFRRVUZNTEVkQlFXbENMRU5CUVdwQ0xFTkJTRGxDT3pzN1FVRkVVeXh2UWtGUGFrSXNOa0pCUVZNc1QwRkJUeXhaUVVGWkxGTkJRVk03UVVGRGFrTXNXVUZCVFN4cFFrRkJhVUlzU1VGQlF5eERRVUZMTEdGQlFVd3NTMEZCZFVJc1EwRkJka0lzUjBGQk5FSXNRMEZCTjBJc1IwRkJhVU1zUTBGQmFrTXNRMEZFVlRzN1FVRkhha01zWVVGQlN5eExRVUZNTEVkQlFXRXNTVUZCWWl4RFFVaHBRenRCUVVscVF5eGhRVUZMTEU5QlFVd3NTVUZCWjBJc1QwRkJReXhIUVVGVkxFdEJRVXNzVFVGQlRDeEhRVUZsTEV0QlFVc3NZVUZCVEN4RFFVcFVPenRCUVUxcVF5eGhRVUZMTEVsQlFVa3NTVUZCU1N4RFFVRktMRVZCUVU4c1NVRkJTU3hMUVVGTExGbEJRVXdzUlVGQmJVSXNSMEZCZGtNc1JVRkJORU03UVVGRGVFTXNaMEpCUVUwc1RVRkJUU3hMUVVGTExGTkJRVXdzUTBGQlpTeERRVUZtTEVOQlFVNHNRMEZFYTBNN1FVRkZlRU1zWjBKQlFVMHNVVUZCVVN4TFFVRkxMRTFCUVV3c1EwRkJXU3hIUVVGYUxFTkJRVklzUTBGR2EwTTdPMEZCU1hoRExHZENRVUZKTEZkQlFWY3NiMEpCUVZNc1owTkJRWEZDTEV0QlFVc3NUMEZCVEN4SFFVRmxMRTFCUVUwc1MwRkJUaXhGUVVGaExFTkJRV3BFTEVWQlFXOUVMRTFCUVUwc1VVRkJUaXhEUVVFM1JDeEZRVUU0UlN4RFFVRTVSU3hGUVVGcFJpeERRVUZxUml4RFFVRllPenM3UVVGS2IwTXNaMEpCVDNCRExHRkJRV0VzWTBGQllpeEZRVUUyUWp0QlFVTTNRaXh4UWtGQlN5eExRVUZNTEVkQlFXRXNTMEZCWWl4RFFVUTJRanRoUVVGcVF6czdPMEZCVUhkRExHZENRVmx3UXl4TlFVRk5MRXRCUVU0c1JVRkJZVHRCUVVOaUxESkNRVUZYTEhkQ1FVRmhMRkZCUVdJc1JVRkJkVUlzVFVGQlRTeExRVUZPTEVOQlFXeERMRU5CUkdFN1lVRkJha0k3T3p0QlFWcDNReXhwUWtGcFFuaERMRU5CUVUwc1QwRkJUaXhIUVVGblFpeExRVUZMTEZGQlFVd3NSVUZCWlN4TlFVRk5MRWxCUVU0c1JVRkJXU3hOUVVGTkxFVkJRVTRzUlVGQlZTeE5RVUZOTEVsQlFVNHNRMEZCY2tRc1EwRnFRbmRETzFOQlFUVkRPenM3UVVGaVlTeHZRa0ZyUTJwQ0xHMURRVUZoT3pzN1FVRkRWQ3haUVVGSkxFdEJRVXNzUzBGQlRDeEZRVUZaTzBGQlExb3NaMEpCUVVrc1dVRkJXU3hMUVVGYUxFTkJSRkU3TzBGQlIxb3NOa0pCUVVzc1ZVRkJUQ3hGUVVGcFFpeFZRVUZETEUxQlFVUXNSVUZCVXl4SlFVRlVMRVZCUVd0Q08wRkJReTlDTEc5Q1FVRk5MRmRCUVZjc1QwRkJTeXhKUVVGTUxFTkJRVmdzUTBGRWVVSTdPMEZCUnk5Q0xHOUNRVUZKTEdGQlFXRXNTVUZCWWl4SlFVRnpRaXhyUWtGQlRTeFJRVUZPTEV0QlFXMUNMRmRCUVZjc1QwRkJTeXhQUVVGUExFdEJRVkFzUTBGQmFFSXNSVUZCWjBNN1FVRkRla1VzTWtKQlFVc3NUMEZCVHl4TFFVRlFMRU5CUVV3c1IwRkVlVVU3UVVGRmVrVXNaME5CUVZrc1NVRkJXaXhEUVVaNVJUdEJRVWQ2UlN3eVFrRkJTeXhOUVVGTUxFbEJTSGxGTzJsQ1FVRTNSVHRoUVVoaExFTkJRV3BDTEVOQlNGazdPMEZCWVZvc1owSkJRVWtzUTBGQlF5eFRRVUZFTEVWQlFWazdRVUZEV2l4eFFrRkJTeXhKUVVGTUxFZEJSRms3WVVGQmFFSTdVMEZpU2pzN08wRkJia05oTEc5Q1FYTkVha0lzYlVOQlFXRTdRVUZEVkN4aFFVRkxMRTlCUVV3c1IwRkJaU3hMUVVGTExGRkJRVXdzUjBGQlowSXNTMEZCU3l4UFFVRk1MRU5CUkhSQ096dEJRVWRVTEhsQ1FVRkxMRXRCUVVzc1RVRkJUQ3hGUVVGaExGVkJRVU1zUzBGQlJDeEZRVUZYTzNWQ1FVTkJMRU5CUVVNc1RVRkJUU3hKUVVGT0xFVkJRVmtzVFVGQlRTeEZRVUZPTEVWQlJHSTdRVUZEZUVJc2EwSkJRVTBzUlVGQlRpeFhRVVIzUWp0QlFVTmtMR3RDUVVGTkxFbEJRVTRzVjBGRVl6dFRRVUZZTEVOQlFXeENMRU5CU0ZNN096dEJRWFJFU1N4dlFrRTRSR3BDTERaQ1FVRlZPMEZCUTA0c1lVRkJTeXhoUVVGTUxFbEJRWE5DTEVOQlFVTXNRMEZCUkN4RFFVUm9RanM3TzBGQk9VUlBMRzlDUVd0RmFrSXNOa0pCUVZVN1FVRkRUaXhoUVVGTExFOUJRVXdzUjBGQlpTeEpRVUZETEVOQlFVc3NZVUZCVEN4TFFVRjFRaXhEUVVGMlFpeEhRVUUwUWl4RFFVRTNRaXhIUVVGcFF5eExRVUZMTEZGQlFVd3NRMEZFTVVNN1FVRkZUaXhoUVVGTExFOUJRVXdzUjBGQlpTeDVRa0ZCWml4RFFVWk5PenM3UVVGc1JVOHNiMEpCZFVWcVFpeHhRa0ZCU3l4VlFVRlZPMEZCUTFnc1lVRkJTeXhSUVVGTUxFTkJRV01zUzBGQlN5eFJRVUZNTEVkQlFXZENMRkZCUVdoQ0xFTkJRV1FzUTBGRVZ6czdPMEZCZGtWRkxHOUNRVEpGYWtJc05rSkJRVk1zVTBGQlV6dEJRVU5rTEdGQlFVc3NTVUZCVEN4SFFVUmpPMEZCUldRc1lVRkJTeXhQUVVGTUxFZEJRV1VzVDBGQlppeERRVVpqT3pzN1FVRXpSVVFzYjBKQlowWnFRaXcyUTBGQmEwSTdRVUZEWkN3MFFrRkRUeXhyUWtGQlRTeGxRVUZPTzBGQlEwZ3NiVUpCUVU4c1EwRkJVRHRCUVVOQkxHOUNRVUZSTEVOQlFWSTdRVUZEUVN4elFrRkJWU3hIUVVGV08wRkJRMEVzYTBKQlFVMHNTMEZCVGp0QlFVTkJMR3RDUVVGTkxFdEJRVTQ3UVVGRFFTeHJRa0ZCVFN4TFFVRk9PMEZCUTBFc01rSkJRV1VzUTBGQlpqdEJRVU5CTEcxQ1FVRlBMRXRCUVZBN1FVRkRRU3h4UWtGQlV5eERRVUZVTzFWQlZrb3NRMEZFWXpzN08wRkJhRVpFTEc5Q1FTdEdha0lzTmtOQlFXdENPMEZCUTJRc05FSkJRMDhzYTBKQlFVMHNaVUZCVGp0QlFVTklMRzFDUVVGUExFTkJRVkE3UVVGRFFTeHpRa0ZCVlN4SFFVRldPMEZCUTBFN1FVRkRRU3h4UWtGQlV5eERRVUZVTzBGQlEwRXNjVUpCUVZNc1EwRkJWRHRCUVVOQkxHMUNRVUZQTEVOQlFWQTdRVUZEUVN4clFrRkJUU3hEUVVGT08wRkJRMEVzWjBKQlFVa3NRMEZCU2p0QlFVTkJMRzFDUVVGUExFdEJRVkE3VlVGV1NpeERRVVJqT3pzN1FVRXZSa1FzYjBKQk9FZHFRaXh4UkVGQmMwSTdRVUZEYkVJc1pVRkJUeXhKUVVGUUxFTkJSR3RDT3pzN1YwRTVSMHdpTENKbWFXeGxJam9pVkhkbFpXNHVhbk1pTENKemIzVnlZMlZTYjI5MElqb2lMMVZ6WlhKekwwMWhkSFF2VTJsMFpYTXZjRzl3Ylc5MGFXOXVJaXdpYzI5MWNtTmxjME52Ym5SbGJuUWlPbHNpYVcxd2IzSjBJRUZqZEdsdmJpQm1jbTl0SUNjdUwwRmpkR2x2YmljN1hHNXBiWEJ2Y25RZ2V5QmxZWE5sVDNWMElIMGdabkp2YlNBbkxpOWxZWE5wYm1jdmNISmxjMlYwTFdWaGMybHVaeWM3WEc1cGJYQnZjblFnZTF4dUlDQWdJR04xY25KbGJuUlVhVzFsTEZ4dUlDQWdJR1ZoWTJnc1hHNGdJQ0FnYVhOT2RXMWNibjBnWm5KdmJTQW5MaTR2YVc1akwzVjBhV3h6Snp0Y2JtbHRjRzl5ZENCN1hHNGdJQ0FnY21WemRISnBZM1FzWEc0Z0lDQWdaMlYwVUhKdlozSmxjM05HY205dFZtRnNkV1VzWEc0Z0lDQWdaMlYwVm1Gc2RXVkdjbTl0VUhKdlozSmxjM01zWEc0Z0lDQWdjM1JsY0ZCeWIyZHlaWE56WEc1OUlHWnliMjBnSnk0dUwybHVZeTlqWVd4akp6dGNibHh1WTI5dWMzUWdRMDlWVGxRZ1BTQW5RMjkxYm5Rbk8xeHVZMjl1YzNRZ1RrVllWRjlUVkVWUVV5QTlJSHRjYmlBZ0lDQnNiMjl3T2lBbmNtVnpkR0Z5ZENjc1hHNGdJQ0FnZVc5NWJ6b2dKM0psZG1WeWMyVW5MRnh1SUNBZ0lHWnNhWEE2SUNkbWJHbHdWbUZzZFdWekoxeHVmVHRjYmx4dUx5cGNiaUFnSUNCRllYTmxJSFpoYkhWbElIZHBkR2hwYmlCeVlXNW5aV1FnY0dGeVlXMWxkR1Z5YzF4dUlDQWdJRnh1SUNBZ0lFQndZWEpoYlNCYmJuVnRZbVZ5WFRvZ1VISnZaM0psYzNNZ1ltVjBkMlZsYmlBd0lHRnVaQ0F4WEc0Z0lDQWdRSEJoY21GdElGdHVkVzFpWlhKZE9pQldZV3gxWlNCdlppQXdJSEJ5YjJkeVpYTnpYRzRnSUNBZ1FIQmhjbUZ0SUZ0dWRXMWlaWEpkT2lCV1lXeDFaU0J2WmlBeElIQnliMmR5WlhOelhHNGdJQ0FnUUhCaGNtRnRJRnR6ZEhKcGJtY2dmSHdnWm5WdVkzUnBiMjVkT2lCT1lXMWxJRzltSUhCeVpYTmxkQ0JsWVhOcGJtZGNiaUFnSUNBZ0lDQWdkRzhnZFhObElHOXlJR2RsYm1WeVlYUmxaQ0JsWVhOcGJtY2dablZ1WTNScGIyNWNiaUFnSUNCQWNtVjBkWEp1SUZ0dWRXMWlaWEpkT2lCV1lXeDFaU0J2WmlCbFlYTmxaQ0J3Y205bmNtVnpjeUJwYmlCeVlXNW5aVnh1S2k4Z1hHNWpiMjV6ZENCbFlYTmxJRDBnS0hCeWIyZHlaWE56TENCbWNtOXRMQ0IwYnl3Z1pXRnpaU2tnUFQ0Z2UxeHVJQ0FnSUdOdmJuTjBJSEJ5YjJkeVpYTnpUR2x0YVhSbFpDQTlJSEpsYzNSeWFXTjBLSEJ5YjJkeVpYTnpMQ0F3TENBeEtUdGNiaUFnSUNCamIyNXpkQ0JsWVhObFpGQnliMmR5WlhOeklEMGdaV0Z6WlNod2NtOW5jbVZ6YzB4cGJXbDBaV1FwTzF4dVhHNGdJQ0FnY21WMGRYSnVJR2RsZEZaaGJIVmxSbkp2YlZCeWIyZHlaWE56S0dWaGMyVmtVSEp2WjNKbGMzTXNJR1p5YjIwc0lIUnZLVHRjYm4wN1hHNWNibVY0Y0c5eWRDQmtaV1poZFd4MElHTnNZWE56SUZSM1pXVnVJR1Y0ZEdWdVpITWdRV04wYVc5dUlIdGNiaUFnSUNCemRHRnlkQ2dwSUh0Y2JpQWdJQ0FnSUNBZ2MzVndaWEl1YzNSaGNuUW9LVHRjYmlBZ0lDQWdJQ0FnZEdocGN5NWxiR0Z3YzJWa0lEMGdNRHRjYmlBZ0lDQWdJQ0FnZEdocGN5NW1iR2x3UTI5MWJuUWdQU0IwYUdsekxubHZlVzlEYjNWdWRDQTlJSFJvYVhNdWJHOXZjRU52ZFc1MElEMGdNRHRjYmlBZ0lDQjlYRzVjYmlBZ0lDQnZibFZ3WkdGMFpTaDBkMlZsYml3Z1puSmhiV1ZUZEdGdGNDd2daV3hoY0hObFpDa2dlMXh1SUNBZ0lDQWdJQ0JqYjI1emRDQndjbTluY21WemMxUmhjbWRsZENBOUlDaDBhR2x6TG5Cc1lYbEVhWEpsWTNScGIyNGdQVDA5SURFcElEOGdNU0E2SURBN1hHNWNiaUFnSUNBZ0lDQWdkR2hwY3k1bGJtUmxaQ0E5SUhSeWRXVTdYRzRnSUNBZ0lDQWdJSFJvYVhNdVpXeGhjSE5sWkNBclBTQW9aV3hoY0hObFpDQXFJSFJvYVhNdVpHbHNZWFJsS1NBcUlIUm9hWE11Y0d4aGVVUnBjbVZqZEdsdmJqdGNibHh1SUNBZ0lDQWdJQ0JtYjNJZ0tHeGxkQ0JwSUQwZ01Ec2dhU0E4SUhSb2FYTXViblZ0Vm1Gc2RXVkxaWGx6T3lCcEt5c3BJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lHTnZibk4wSUd0bGVTQTlJSFJvYVhNdWRtRnNkV1ZMWlhselcybGRPMXh1SUNBZ0lDQWdJQ0FnSUNBZ1kyOXVjM1FnZG1Gc2RXVWdQU0IwYUdsekxuWmhiSFZsYzF0clpYbGRPMXh1WEc0Z0lDQWdJQ0FnSUNBZ0lDQnNaWFFnY0hKdlozSmxjM01nUFNCeVpYTjBjbWxqZENoblpYUlFjbTluY21WemMwWnliMjFXWVd4MVpTaDBhR2x6TG1Wc1lYQnpaV1FnTFNCMllXeDFaUzVrWld4aGVTd2dNQ3dnZG1Gc2RXVXVaSFZ5WVhScGIyNHBMQ0F3TENBeEtUdGNibHh1SUNBZ0lDQWdJQ0FnSUNBZ0x5OGdUV0Z5YXlCVWQyVmxiaUJoY3lCT1QxUWdaVzVrWldRZ2FXWWdjM1JwYkd3Z2FXNGdjSEp2WjNKbGMzTmNiaUFnSUNBZ0lDQWdJQ0FnSUdsbUlDaHdjbTluY21WemN5QWhQVDBnY0hKdlozSmxjM05VWVhKblpYUXBJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0IwYUdsekxtVnVaR1ZrSUQwZ1ptRnNjMlU3WEc0Z0lDQWdJQ0FnSUNBZ0lDQjlYRzVjYmlBZ0lDQWdJQ0FnSUNBZ0lDOHZJRk4wWlhBZ2NISnZaM0psYzNNZ2FXWWdkMlVuY21VZ2MzUmxjSEJwYm1kY2JpQWdJQ0FnSUNBZ0lDQWdJR2xtSUNoMllXeDFaUzV6ZEdWd2N5a2dlMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJSEJ5YjJkeVpYTnpJRDBnYzNSbGNGQnliMmR5WlhOektIQnliMmR5WlhOekxDQjJZV3gxWlM1emRHVndjeWs3WEc0Z0lDQWdJQ0FnSUNBZ0lDQjlYRzVjYmlBZ0lDQWdJQ0FnSUNBZ0lDOHZJRVZoYzJVZ2NISnZaM0psYzNOY2JpQWdJQ0FnSUNBZ0lDQWdJSFpoYkhWbExtTjFjbkpsYm5RZ1BTQmxZWE5sS0hCeWIyZHlaWE56TENCMllXeDFaUzVtY205dExDQjJZV3gxWlM1MGJ5d2dkbUZzZFdVdVpXRnpaU2s3WEc0Z0lDQWdJQ0FnSUgxY2JpQWdJQ0I5WEc1Y2JpQWdJQ0J2YmtaeVlXMWxSVzVrS0NrZ2UxeHVJQ0FnSUNBZ0lDQnBaaUFvZEdocGN5NWxibVJsWkNrZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnYkdWMElITjBaWEJVWVd0bGJpQTlJR1poYkhObE8xeHVYRzRnSUNBZ0lDQWdJQ0FnSUNCbFlXTm9LRTVGV0ZSZlUxUkZVRk1zSUNodFpYUm9iMlFzSUhOMFpYQXBJRDArSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCamIyNXpkQ0J0WVhoVGRHVndjeUE5SUhSb2FYTmJjM1JsY0YwN1hHNWNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQnBaaUFvYldGNFUzUmxjSE1nUFQwOUlIUnlkV1VnZkh3Z0tHbHpUblZ0S0cxaGVGTjBaWEJ6S1NBbUppQnRZWGhUZEdWd2N5QStJSFJvYVhOYmMzUmxjQ0FySUVOUFZVNVVYU2twSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdkR2hwYzF0emRHVndJQ3NnUTA5VlRsUmRLeXM3WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lITjBaWEJVWVd0bGJpQTlJSFJ5ZFdVN1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJSFJvYVhOYmJXVjBhRzlrWFNncE8xeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lIMWNiaUFnSUNBZ0lDQWdJQ0FnSUgwcE8xeHVYRzRnSUNBZ0lDQWdJQ0FnSUNCcFppQW9JWE4wWlhCVVlXdGxiaWtnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUhSb2FYTXVjM1J2Y0NncE8xeHVJQ0FnSUNBZ0lDQWdJQ0FnZlZ4dUlDQWdJQ0FnSUNCOVhHNGdJQ0FnZlZ4dVhHNGdJQ0FnWm14cGNGWmhiSFZsY3lncElIdGNiaUFnSUNBZ0lDQWdkR2hwY3k1bGJHRndjMlZrSUQwZ2RHaHBjeTVrZFhKaGRHbHZiaUF0SUhSb2FYTXVaV3hoY0hObFpEdGNibHh1SUNBZ0lDQWdJQ0JsWVdOb0tIUm9hWE11ZG1Gc2RXVnpMQ0FvZG1Gc2RXVXBJRDArSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJRnQyWVd4MVpTNTBieXdnZG1Gc2RXVXVabkp2YlYwZ1BTQmJkbUZzZFdVdVpuSnZiU3dnZG1Gc2RXVXVkRzlkTzF4dUlDQWdJQ0FnSUNCOUtUdGNiaUFnSUNCOVhHNWNiaUFnSUNCeVpYWmxjbk5sS0NrZ2UxeHVJQ0FnSUNBZ0lDQjBhR2x6TG5Cc1lYbEVhWEpsWTNScGIyNGdLajBnTFRFN1hHNGdJQ0FnZlZ4dVhHNGdJQ0FnY21WemRHRnlkQ2dwSUh0Y2JpQWdJQ0FnSUNBZ2RHaHBjeTVsYkdGd2MyVmtJRDBnS0hSb2FYTXVjR3hoZVVScGNtVmpkR2x2YmlBOVBUMGdNU2tnUHlBd0lEb2dkR2hwY3k1a2RYSmhkR2x2Ymp0Y2JpQWdJQ0FnSUNBZ2RHaHBjeTV6ZEdGeWRHVmtJRDBnWTNWeWNtVnVkRlJwYldVb0tUdGNiaUFnSUNCOVhHNWNiaUFnSUNCelpXVnJLSEJ5YjJkeVpYTnpLU0I3WEc0Z0lDQWdJQ0FnSUhSb2FYTXVjMlZsYTFScGJXVW9kR2hwY3k1a2RYSmhkR2x2YmlBcUlIQnliMmR5WlhOektUdGNiaUFnSUNCOVhHNWNiaUFnSUNCelpXVnJWR2x0WlNobGJHRndjMlZrS1NCN1hHNGdJQ0FnSUNBZ0lIUm9hWE11YjI1alpTZ3BPMXh1SUNBZ0lDQWdJQ0IwYUdsekxtVnNZWEJ6WldRZ1BTQmxiR0Z3YzJWa08xeHVJQ0FnSUgxY2JpQWdJQ0JjYmlBZ0lDQm5aWFJFWldaaGRXeDBVSEp2Y0hNb0tTQjdYRzRnSUNBZ0lDQWdJSEpsZEhWeWJpQjdYRzRnSUNBZ0lDQWdJQ0FnSUNBdUxpNXpkWEJsY2k1blpYUkVaV1poZFd4MFVISnZjSE1vS1N4Y2JpQWdJQ0FnSUNBZ0lDQWdJR1JsYkdGNU9pQXdMRnh1SUNBZ0lDQWdJQ0FnSUNBZ1pHbHNZWFJsT2lBeExGeHVJQ0FnSUNBZ0lDQWdJQ0FnWkhWeVlYUnBiMjQ2SURNd01DeGNiaUFnSUNBZ0lDQWdJQ0FnSUd4dmIzQTZJR1poYkhObExGeHVJQ0FnSUNBZ0lDQWdJQ0FnZVc5NWJ6b2dabUZzYzJVc1hHNGdJQ0FnSUNBZ0lDQWdJQ0JtYkdsd09pQm1ZV3h6WlN4Y2JpQWdJQ0FnSUNBZ0lDQWdJSEJzWVhsRWFYSmxZM1JwYjI0NklERXNYRzRnSUNBZ0lDQWdJQ0FnSUNCbGJtUmxaRG9nWm1Gc2MyVXNYRzRnSUNBZ0lDQWdJQ0FnSUNCbGJHRndjMlZrT2lBd1hHNGdJQ0FnSUNBZ0lIMDdYRzRnSUNBZ2ZWeHVYRzRnSUNBZ1oyVjBSR1ZtWVhWc2RGWmhiSFZsS0NrZ2UxeHVJQ0FnSUNBZ0lDQnlaWFIxY200Z2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnTGk0dWMzVndaWEl1WjJWMFJHVm1ZWFZzZEZaaGJIVmxLQ2tzWEc0Z0lDQWdJQ0FnSUNBZ0lDQmtaV3hoZVRvZ01DeGNiaUFnSUNBZ0lDQWdJQ0FnSUdSMWNtRjBhVzl1T2lBek1EQXNYRzRnSUNBZ0lDQWdJQ0FnSUNCbFlYTmxPaUJsWVhObFQzVjBMRnh1SUNBZ0lDQWdJQ0FnSUNBZ1pXeGhjSE5sWkRvZ01DeGNiaUFnSUNBZ0lDQWdJQ0FnSUhOMFlXZG5aWEk2SURBc1hHNGdJQ0FnSUNBZ0lDQWdJQ0J6ZEdWd2N6b2dNQ3hjYmlBZ0lDQWdJQ0FnSUNBZ0lHWnliMjA2SURBc1hHNGdJQ0FnSUNBZ0lDQWdJQ0IwYnpvZ01DeGNiaUFnSUNBZ0lDQWdJQ0FnSUhKdmRXNWtPaUJtWVd4elpWeHVJQ0FnSUNBZ0lDQjlPMXh1SUNBZ0lIMWNibHh1SUNBZ0lHZGxkRVJsWm1GMWJIUldZV3gxWlZCeWIzQW9LU0I3WEc0Z0lDQWdJQ0FnSUhKbGRIVnliaUFuZEc4bk8xeHVJQ0FnSUgxY2JuMWNiaUpkZlE9PVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvYWN0aW9ucy9Ud2Vlbi5qc1xuICoqIG1vZHVsZSBpZCA9IDNcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxudmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF9BY3Rpb24yID0gcmVxdWlyZSgnLi9BY3Rpb24nKTtcblxudmFyIF9BY3Rpb24zID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfQWN0aW9uMik7XG5cbnZhciBfY2FsYyA9IHJlcXVpcmUoJy4uL2luYy9jYWxjJyk7XG5cbnZhciBfdXRpbHMgPSByZXF1aXJlKCcuLi9pbmMvdXRpbHMnKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoIXNlbGYpIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBjYWxsICYmICh0eXBlb2YgY2FsbCA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSA/IGNhbGwgOiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90IFwiICsgdHlwZW9mIHN1cGVyQ2xhc3MpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIGVudW1lcmFibGU6IGZhbHNlLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIDogc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzczsgfVxuXG52YXIgUGh5c2ljcyA9IGZ1bmN0aW9uIChfQWN0aW9uKSB7XG4gICAgX2luaGVyaXRzKFBoeXNpY3MsIF9BY3Rpb24pO1xuXG4gICAgZnVuY3Rpb24gUGh5c2ljcygpIHtcbiAgICAgICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFBoeXNpY3MpO1xuXG4gICAgICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICAgICAgICBhcmdzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIF90aGlzID0gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgX0FjdGlvbi5jYWxsLmFwcGx5KF9BY3Rpb24sIFt0aGlzXS5jb25jYXQoYXJncykpKTtcblxuICAgICAgICBfdGhpcy5pbmFjdGl2ZUZyYW1lcyA9IDA7XG4gICAgICAgIHJldHVybiBfdGhpcztcbiAgICB9XG5cbiAgICBQaHlzaWNzLnByb3RvdHlwZS5vblVwZGF0ZSA9IGZ1bmN0aW9uIG9uVXBkYXRlKHBoeXNpY3MsIGZyYW1lU3RhbXAsIGVsYXBzZWQpIHtcbiAgICAgICAgdmFyIF90aGlzMiA9IHRoaXM7XG5cbiAgICAgICAgdGhpcy5oYXNDaGFuZ2VkID0gZmFsc2U7XG5cbiAgICAgICAgKDAsIF91dGlscy5lYWNoKSh0aGlzLnZhbHVlcywgZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgICB2YXIgcHJldmlvdXNWYWx1ZSA9IHZhbHVlLmN1cnJlbnQ7XG5cbiAgICAgICAgICAgIC8vIEFwcGx5IGFjY2VsZXJhdGlvblxuICAgICAgICAgICAgdmFsdWUudmVsb2NpdHkgKz0gKDAsIF9jYWxjLnNwZWVkUGVyRnJhbWUpKHZhbHVlLmZvcmNlLCBlbGFwc2VkKTtcblxuICAgICAgICAgICAgLy8gQXBwbHkgZnJpY3Rpb25cbiAgICAgICAgICAgIHZhbHVlLnZlbG9jaXR5ICo9IE1hdGgucG93KDEgLSB2YWx1ZS5mcmljdGlvbiwgZWxhcHNlZCAvIDEwKTtcblxuICAgICAgICAgICAgLy8gQXBwbHkgc3ByaW5nXG4gICAgICAgICAgICBpZiAodmFsdWUuc3ByaW5nICYmICgwLCBfdXRpbHMuaXNOdW0pKHZhbHVlLnRvKSkge1xuICAgICAgICAgICAgICAgIHZhciBkaXN0YW5jZVRvVGFyZ2V0ID0gdmFsdWUudG8gLSB2YWx1ZS5jdXJyZW50O1xuICAgICAgICAgICAgICAgIHZhbHVlLnZlbG9jaXR5ICs9IGRpc3RhbmNlVG9UYXJnZXQgKiAoMCwgX2NhbGMuc3BlZWRQZXJGcmFtZSkodmFsdWUuc3ByaW5nLCBlbGFwc2VkKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gQXBwbHkgbGF0ZXN0IHZlbG9jaXR5XG4gICAgICAgICAgICB2YWx1ZS5jdXJyZW50ICs9ICgwLCBfY2FsYy5zcGVlZFBlckZyYW1lKSh2YWx1ZS52ZWxvY2l0eSwgZWxhcHNlZCk7XG5cbiAgICAgICAgICAgIC8vIENoZWNrIGlmIHZhbHVlIGhhcyBjaGFuZ2VkXG4gICAgICAgICAgICBpZiAodmFsdWUuY3VycmVudCAhPT0gcHJldmlvdXNWYWx1ZSB8fCBNYXRoLmFicyh2YWx1ZS52ZWxvY2l0eSkgPj0gdmFsdWUuc3RvcFNwZWVkKSB7XG4gICAgICAgICAgICAgICAgX3RoaXMyLmhhc0NoYW5nZWQgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9O1xuXG4gICAgUGh5c2ljcy5wcm90b3R5cGUub25GcmFtZUVuZCA9IGZ1bmN0aW9uIG9uRnJhbWVFbmQoKSB7XG4gICAgICAgIGlmICh0aGlzLmF1dG9FbmQpIHtcbiAgICAgICAgICAgIHRoaXMuaW5hY3RpdmVGcmFtZXMgPSB0aGlzLmhhc0NoYW5nZWQgPyAxIDogdGhpcy5pbmFjdGl2ZUZyYW1lcyArIDE7XG5cbiAgICAgICAgICAgIGlmICh0aGlzLmluYWN0aXZlRnJhbWVzID49IHRoaXMubWF4SW5hY3RpdmVGcmFtZXMpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnN0b3AoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG5cbiAgICAvKlxuICAgICAgICAjIEdldCBkZWZhdWx0IFNpbXVsYXRlIHByb3BzXG4gICAgICAgICBAcmV0dXJuIFtvYmplY3RdXG4gICAgKi9cblxuICAgIFBoeXNpY3MucHJvdG90eXBlLmdldERlZmF1bHRQcm9wcyA9IGZ1bmN0aW9uIGdldERlZmF1bHRQcm9wcygpIHtcbiAgICAgICAgcmV0dXJuIF9leHRlbmRzKHt9LCBfQWN0aW9uLnByb3RvdHlwZS5nZXREZWZhdWx0UHJvcHMuY2FsbCh0aGlzKSwge1xuICAgICAgICAgICAgYXV0b0VuZDogdHJ1ZSxcbiAgICAgICAgICAgIG1heEluYWN0aXZlRnJhbWVzOiAzXG4gICAgICAgIH0pO1xuICAgIH07XG5cbiAgICAvKlxuICAgICAgICAjIEdldCBkZWZhdWx0IFNpbXVsYXRlIHZhbHVlIHByb3BzXG4gICAgICAgICBAcmV0dXJuIFtvYmplY3RdXG4gICAgKi9cblxuICAgIFBoeXNpY3MucHJvdG90eXBlLmdldERlZmF1bHRWYWx1ZSA9IGZ1bmN0aW9uIGdldERlZmF1bHRWYWx1ZSgpIHtcbiAgICAgICAgcmV0dXJuIF9leHRlbmRzKHt9LCBfQWN0aW9uLnByb3RvdHlwZS5nZXREZWZhdWx0VmFsdWUuY2FsbCh0aGlzKSwge1xuICAgICAgICAgICAgZm9yY2U6IDAsIC8vIFtudW1iZXJdOiBBY2NlbGVyYXRpb24gdG8gYXBwbHkgdG8gdmFsdWUsIGluIHVuaXRzIHBlciBzZWNvbmRcbiAgICAgICAgICAgIGJvdW5jZTogMCwgLy8gW251bWJlcl06IEZhY3RvciB0byBtdWx0aXBseSB2ZWxvY2l0eSBieSBvbiBib3VuY2VcbiAgICAgICAgICAgIHNwcmluZzogMCwgLy8gW251bWJlcl06IFNwcmluZyBzdHJlbmd0aCBkdXJpbmcgJ3N0cmluZydcbiAgICAgICAgICAgIHN0b3BTcGVlZDogMC4wMDAxLCAvLyBbbnVtYmVyXTogU3RvcCBzaW11bGF0aW9uIHVuZGVyIHRoaXMgc3BlZWRcbiAgICAgICAgICAgIGZyaWN0aW9uOiAwIC8vIFtudW1iZXJdOiBGcmljdGlvbiB0byBhcHBseSBwZXIgZnJhbWUsIDAtMVxuICAgICAgICB9KTtcbiAgICB9O1xuXG4gICAgLypcbiAgICAgICAgIyBHZXQgZGVmYXVsdCBTaW11bGF0ZSB2YWx1ZSBwcm9wZXJ0eSBuYW1lXG4gICAgICAgICMjIFNldCB2YWx1ZXMgdG8gdGhpcyB3aGVuIGEgYHZhbHVlYCBpcyBub3QgcHJvdmlkZWQgYXMgYW4gb2JqZWN0XG4gICAgICAgICBAcmV0dXJuIFtzdHJpbmddXG4gICAgKi9cblxuICAgIFBoeXNpY3MucHJvdG90eXBlLmdldERlZmF1bHRWYWx1ZVByb3AgPSBmdW5jdGlvbiBnZXREZWZhdWx0VmFsdWVQcm9wKCkge1xuICAgICAgICByZXR1cm4gJ3ZlbG9jaXR5JztcbiAgICB9O1xuXG4gICAgcmV0dXJuIFBoeXNpY3M7XG59KF9BY3Rpb24zLmRlZmF1bHQpO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBQaHlzaWNzO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluTnlZeTloWTNScGIyNXpMMUJvZVhOcFkzTXVhbk1pWFN3aWJtRnRaWE1pT2x0ZExDSnRZWEJ3YVc1bmN5STZJanM3T3pzN096czdPenM3T3pzN096czdPenM3T3p0SlFVbHhRanM3TzBGQlJXcENMR0ZCUm1sQ0xFOUJSV3BDTEVkQlFYRkNPemhDUVVaS0xGTkJSVWs3T3pCRFFVRk9PenRUUVVGTk96dHhSRUZEYWtJc01FTkJRVk1zUzBGQlZDeEhRVVJwUWpzN1FVRkZha0lzWTBGQlN5eGpRVUZNTEVkQlFYTkNMRU5CUVhSQ0xFTkJSbWxDT3p0TFFVRnlRanM3UVVGR2FVSXNjMEpCVDJwQ0xEWkNRVUZUTEZOQlFWTXNXVUZCV1N4VFFVRlRPenM3UVVGRGJrTXNZVUZCU3l4VlFVRk1MRWRCUVd0Q0xFdEJRV3hDTEVOQlJHMURPenRCUVVkdVF5eDVRa0ZCU3l4TFFVRkxMRTFCUVV3c1JVRkJZU3hWUVVGRExFdEJRVVFzUlVGQlZ6dEJRVU42UWl4blFrRkJUU3huUWtGQlowSXNUVUZCVFN4UFFVRk9PenM3UVVGRVJ5eHBRa0ZKZWtJc1EwRkJUU3hSUVVGT0xFbEJRV3RDTEhsQ1FVRmpMRTFCUVUwc1MwRkJUaXhGUVVGaExFOUJRVE5DTEVOQlFXeENPenM3UVVGS2VVSXNhVUpCVDNwQ0xFTkJRVTBzVVVGQlRpeGhRVUZ0UWl4SlFVRkpMRTFCUVUwc1VVRkJUaXhGUVVGdlFpeFZRVUZWTEVWQlFWWXNRMEZCTTBNN096dEJRVkI1UWl4blFrRlZja0lzVFVGQlRTeE5RVUZPTEVsQlFXZENMR3RDUVVGTkxFMUJRVTBzUlVGQlRpeERRVUYwUWl4RlFVRnBRenRCUVVOcVF5eHZRa0ZCVFN4dFFrRkJiVUlzVFVGQlRTeEZRVUZPTEVkQlFWY3NUVUZCVFN4UFFVRk9MRU5CUkVnN1FVRkZha01zYzBKQlFVMHNVVUZCVGl4SlFVRnJRaXh0UWtGQmJVSXNlVUpCUVdNc1RVRkJUU3hOUVVGT0xFVkJRV01zVDBGQk5VSXNRMEZCYmtJc1EwRkdaVHRoUVVGeVF6czdPMEZCVm5sQ0xHbENRV2RDZWtJc1EwRkJUU3hQUVVGT0xFbEJRV2xDTEhsQ1FVRmpMRTFCUVUwc1VVRkJUaXhGUVVGblFpeFBRVUU1UWl4RFFVRnFRanM3TzBGQmFFSjVRaXhuUWtGdFFuSkNMRTFCUVUwc1QwRkJUaXhMUVVGclFpeGhRVUZzUWl4SlFVRnRReXhMUVVGTExFZEJRVXdzUTBGQlV5eE5RVUZOTEZGQlFVNHNRMEZCVkN4SlFVRTBRaXhOUVVGTkxGTkJRVTRzUlVGQmFVSTdRVUZEYUVZc2RVSkJRVXNzVlVGQlRDeEhRVUZyUWl4SlFVRnNRaXhEUVVSblJqdGhRVUZ3Ump0VFFXNUNZeXhEUVVGc1FpeERRVWh0UXpzN08wRkJVSFJDTEhOQ1FXMURha0lzYlVOQlFXRTdRVUZEVkN4WlFVRkpMRXRCUVVzc1QwRkJUQ3hGUVVGak8wRkJRMlFzYVVKQlFVc3NZMEZCVEN4SFFVRnpRaXhMUVVGTExGVkJRVXdzUjBGQmEwSXNRMEZCYkVJc1IwRkJjMElzUzBGQlN5eGpRVUZNTEVkQlFYTkNMRU5CUVhSQ0xFTkJSRGxDT3p0QlFVZGtMR2RDUVVGSkxFdEJRVXNzWTBGQlRDeEpRVUYxUWl4TFFVRkxMR2xDUVVGTUxFVkJRWGRDTzBGQlF5OURMSEZDUVVGTExFbEJRVXdzUjBGRUswTTdZVUZCYmtRN1UwRklTanM3T3pzN096czdRVUZ3UTJFc2MwSkJhMFJxUWl3MlEwRkJhMEk3UVVGRFpDdzBRa0ZEVHl4clFrRkJUU3hsUVVGT08wRkJRMGdzY1VKQlFWTXNTVUZCVkR0QlFVTkJMQ3RDUVVGdFFpeERRVUZ1UWp0VlFVaEtMRU5CUkdNN096czdPenM3TzBGQmJFUkVMSE5DUVN0RWFrSXNOa05CUVd0Q08wRkJRMlFzTkVKQlEwOHNhMEpCUVUwc1pVRkJUanRCUVVOSUxHMUNRVUZQTEVOQlFWQTdRVUZEUVN4dlFrRkJVU3hEUVVGU08wRkJRMEVzYjBKQlFWRXNRMEZCVWp0QlFVTkJMSFZDUVVGWExFMUJRVmc3UVVGRFFTeHpRa0ZCVlN4RFFVRldPMVZCVGtvc1EwRkVZenM3T3pzN096czdPMEZCTDBSRUxITkNRV2RHYWtJc2NVUkJRWE5DTzBGQlEyeENMR1ZCUVU4c1ZVRkJVQ3hEUVVSclFqczdPMWRCYUVaTUlpd2labWxzWlNJNklsQm9lWE5wWTNNdWFuTWlMQ0p6YjNWeVkyVlNiMjkwSWpvaUwxVnpaWEp6TDAxaGRIUXZVMmwwWlhNdmNHOXdiVzkwYVc5dUlpd2ljMjkxY21ObGMwTnZiblJsYm5RaU9sc2lhVzF3YjNKMElFRmpkR2x2YmlCbWNtOXRJQ2N1TDBGamRHbHZiaWM3WEc1cGJYQnZjblFnZXlCemNHVmxaRkJsY2taeVlXMWxJSDBnWm5KdmJTQW5MaTR2YVc1akwyTmhiR01uTzF4dWFXMXdiM0owSUhzZ1pXRmphQ3dnYVhOT2RXMGdmU0JtY205dElDY3VMaTlwYm1NdmRYUnBiSE1uTzF4dVhHNWxlSEJ2Y25RZ1pHVm1ZWFZzZENCamJHRnpjeUJRYUhsemFXTnpJR1Y0ZEdWdVpITWdRV04wYVc5dUlIdGNibHh1SUNBZ0lHTnZibk4wY25WamRHOXlLQzR1TG1GeVozTXBJSHRjYmlBZ0lDQWdJQ0FnYzNWd1pYSW9MaTR1WVhKbmN5azdYRzRnSUNBZ0lDQWdJSFJvYVhNdWFXNWhZM1JwZG1WR2NtRnRaWE1nUFNBd08xeHVJQ0FnSUgxY2JseHVJQ0FnSUc5dVZYQmtZWFJsS0hCb2VYTnBZM01zSUdaeVlXMWxVM1JoYlhBc0lHVnNZWEJ6WldRcElIdGNiaUFnSUNBZ0lDQWdkR2hwY3k1b1lYTkRhR0Z1WjJWa0lEMGdabUZzYzJVN1hHNWNiaUFnSUNBZ0lDQWdaV0ZqYUNoMGFHbHpMblpoYkhWbGN5d2dLSFpoYkhWbEtTQTlQaUI3WEc0Z0lDQWdJQ0FnSUNBZ0lDQmpiMjV6ZENCd2NtVjJhVzkxYzFaaGJIVmxJRDBnZG1Gc2RXVXVZM1Z5Y21WdWREdGNibHh1SUNBZ0lDQWdJQ0FnSUNBZ0x5OGdRWEJ3YkhrZ1lXTmpaV3hsY21GMGFXOXVYRzRnSUNBZ0lDQWdJQ0FnSUNCMllXeDFaUzUyWld4dlkybDBlU0FyUFNCemNHVmxaRkJsY2taeVlXMWxLSFpoYkhWbExtWnZjbU5sTENCbGJHRndjMlZrS1R0Y2JseHVJQ0FnSUNBZ0lDQWdJQ0FnTHk4Z1FYQndiSGtnWm5KcFkzUnBiMjVjYmlBZ0lDQWdJQ0FnSUNBZ0lIWmhiSFZsTG5abGJHOWphWFI1SUNvOUlDZ3hJQzBnZG1Gc2RXVXVabkpwWTNScGIyNHBJQ29xSUNobGJHRndjMlZrSUM4Z01UQXBPMXh1WEc0Z0lDQWdJQ0FnSUNBZ0lDQXZMeUJCY0hCc2VTQnpjSEpwYm1kY2JpQWdJQ0FnSUNBZ0lDQWdJR2xtSUNoMllXeDFaUzV6Y0hKcGJtY2dKaVlnYVhOT2RXMG9kbUZzZFdVdWRHOHBLU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnWTI5dWMzUWdaR2x6ZEdGdVkyVlViMVJoY21kbGRDQTlJSFpoYkhWbExuUnZJQzBnZG1Gc2RXVXVZM1Z5Y21WdWREdGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQjJZV3gxWlM1MlpXeHZZMmwwZVNBclBTQmthWE4wWVc1alpWUnZWR0Z5WjJWMElDb2djM0JsWldSUVpYSkdjbUZ0WlNoMllXeDFaUzV6Y0hKcGJtY3NJR1ZzWVhCelpXUXBPMXh1SUNBZ0lDQWdJQ0FnSUNBZ2ZWeHVYRzRnSUNBZ0lDQWdJQ0FnSUNBdkx5QkJjSEJzZVNCc1lYUmxjM1FnZG1Wc2IyTnBkSGxjYmlBZ0lDQWdJQ0FnSUNBZ0lIWmhiSFZsTG1OMWNuSmxiblFnS3owZ2MzQmxaV1JRWlhKR2NtRnRaU2gyWVd4MVpTNTJaV3h2WTJsMGVTd2daV3hoY0hObFpDazdYRzRnSUNBZ0lDQWdJQ0FnSUNCY2JpQWdJQ0FnSUNBZ0lDQWdJQzh2SUVOb1pXTnJJR2xtSUhaaGJIVmxJR2hoY3lCamFHRnVaMlZrWEc0Z0lDQWdJQ0FnSUNBZ0lDQnBaaUFvZG1Gc2RXVXVZM1Z5Y21WdWRDQWhQVDBnY0hKbGRtbHZkWE5XWVd4MVpTQjhmQ0JOWVhSb0xtRmljeWgyWVd4MVpTNTJaV3h2WTJsMGVTa2dQajBnZG1Gc2RXVXVjM1J2Y0ZOd1pXVmtLU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnZEdocGN5NW9ZWE5EYUdGdVoyVmtJRDBnZEhKMVpUdGNiaUFnSUNBZ0lDQWdJQ0FnSUgxY2JpQWdJQ0FnSUNBZ2ZTazdYRzRnSUNBZ2ZWeHVYRzRnSUNBZ2IyNUdjbUZ0WlVWdVpDZ3BJSHRjYmlBZ0lDQWdJQ0FnYVdZZ0tIUm9hWE11WVhWMGIwVnVaQ2tnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdkR2hwY3k1cGJtRmpkR2wyWlVaeVlXMWxjeUE5SUhSb2FYTXVhR0Z6UTJoaGJtZGxaQ0EvSURFZ09pQjBhR2x6TG1sdVlXTjBhWFpsUm5KaGJXVnpJQ3NnTVR0Y2JseHVJQ0FnSUNBZ0lDQWdJQ0FnYVdZZ0tIUm9hWE11YVc1aFkzUnBkbVZHY21GdFpYTWdQajBnZEdocGN5NXRZWGhKYm1GamRHbDJaVVp5WVcxbGN5a2dlMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJSFJvYVhNdWMzUnZjQ2dwTzF4dUlDQWdJQ0FnSUNBZ0lDQWdmVnh1SUNBZ0lDQWdJQ0I5WEc0Z0lDQWdmVnh1WEc0Z0lDQWdMeXBjYmlBZ0lDQWdJQ0FnSXlCSFpYUWdaR1ZtWVhWc2RDQlRhVzExYkdGMFpTQndjbTl3YzF4dVhHNGdJQ0FnSUNBZ0lFQnlaWFIxY200Z1cyOWlhbVZqZEYxY2JpQWdJQ0FxTDF4dUlDQWdJR2RsZEVSbFptRjFiSFJRY205d2N5Z3BJSHRjYmlBZ0lDQWdJQ0FnY21WMGRYSnVJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lDNHVMbk4xY0dWeUxtZGxkRVJsWm1GMWJIUlFjbTl3Y3lncExGeHVJQ0FnSUNBZ0lDQWdJQ0FnWVhWMGIwVnVaRG9nZEhKMVpTeGNiaUFnSUNBZ0lDQWdJQ0FnSUcxaGVFbHVZV04wYVhabFJuSmhiV1Z6T2lBelhHNGdJQ0FnSUNBZ0lIMDdYRzRnSUNBZ2ZWeHVYRzRnSUNBZ0x5cGNiaUFnSUNBZ0lDQWdJeUJIWlhRZ1pHVm1ZWFZzZENCVGFXMTFiR0YwWlNCMllXeDFaU0J3Y205d2MxeHVYRzRnSUNBZ0lDQWdJRUJ5WlhSMWNtNGdXMjlpYW1WamRGMWNiaUFnSUNBcUwxeHVJQ0FnSUdkbGRFUmxabUYxYkhSV1lXeDFaU2dwSUh0Y2JpQWdJQ0FnSUNBZ2NtVjBkWEp1SUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJQzR1TG5OMWNHVnlMbWRsZEVSbFptRjFiSFJXWVd4MVpTZ3BMRnh1SUNBZ0lDQWdJQ0FnSUNBZ1ptOXlZMlU2SURBc0lDOHZJRnR1ZFcxaVpYSmRPaUJCWTJObGJHVnlZWFJwYjI0Z2RHOGdZWEJ3YkhrZ2RHOGdkbUZzZFdVc0lHbHVJSFZ1YVhSeklIQmxjaUJ6WldOdmJtUmNiaUFnSUNBZ0lDQWdJQ0FnSUdKdmRXNWpaVG9nTUN3Z0x5OGdXMjUxYldKbGNsMDZJRVpoWTNSdmNpQjBieUJ0ZFd4MGFYQnNlU0IyWld4dlkybDBlU0JpZVNCdmJpQmliM1Z1WTJWY2JpQWdJQ0FnSUNBZ0lDQWdJSE53Y21sdVp6b2dNQ3dnTHk4Z1cyNTFiV0psY2wwNklGTndjbWx1WnlCemRISmxibWQwYUNCa2RYSnBibWNnSjNOMGNtbHVaeWRjYmlBZ0lDQWdJQ0FnSUNBZ0lITjBiM0JUY0dWbFpEb2dNQzR3TURBeExDQXZMeUJiYm5WdFltVnlYVG9nVTNSdmNDQnphVzExYkdGMGFXOXVJSFZ1WkdWeUlIUm9hWE1nYzNCbFpXUmNiaUFnSUNBZ0lDQWdJQ0FnSUdaeWFXTjBhVzl1T2lBd0lDOHZJRnR1ZFcxaVpYSmRPaUJHY21samRHbHZiaUIwYnlCaGNIQnNlU0J3WlhJZ1puSmhiV1VzSURBdE1WeHVJQ0FnSUNBZ0lDQjlPMXh1SUNBZ0lIMWNibHh1SUNBZ0lDOHFYRzRnSUNBZ0lDQWdJQ01nUjJWMElHUmxabUYxYkhRZ1UybHRkV3hoZEdVZ2RtRnNkV1VnY0hKdmNHVnlkSGtnYm1GdFpWeHVJQ0FnSUNBZ0lDQWpJeUJUWlhRZ2RtRnNkV1Z6SUhSdklIUm9hWE1nZDJobGJpQmhJR0IyWVd4MVpXQWdhWE1nYm05MElIQnliM1pwWkdWa0lHRnpJR0Z1SUc5aWFtVmpkRnh1WEc0Z0lDQWdJQ0FnSUVCeVpYUjFjbTRnVzNOMGNtbHVaMTFjYmlBZ0lDQXFMMXh1SUNBZ0lHZGxkRVJsWm1GMWJIUldZV3gxWlZCeWIzQW9LU0I3WEc0Z0lDQWdJQ0FnSUhKbGRIVnliaUFuZG1Wc2IyTnBkSGtuTzF4dUlDQWdJSDFjYm4xY2JpSmRmUT09XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9hY3Rpb25zL1BoeXNpY3MuanNcbiAqKiBtb2R1bGUgaWQgPSA0XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfQWN0aW9uMiA9IHJlcXVpcmUoJy4vQWN0aW9uJyk7XG5cbnZhciBfQWN0aW9uMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX0FjdGlvbjIpO1xuXG52YXIgX1BvaW50ZXIgPSByZXF1aXJlKCcuLi9pbnB1dC9Qb2ludGVyJyk7XG5cbnZhciBfUG9pbnRlcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9Qb2ludGVyKTtcblxudmFyIF9jYWxjID0gcmVxdWlyZSgnLi4vaW5jL2NhbGMnKTtcblxudmFyIF91dGlscyA9IHJlcXVpcmUoJy4uL2luYy91dGlscycpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmICghc2VsZikgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIGNhbGwgJiYgKHR5cGVvZiBjYWxsID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpID8gY2FsbCA6IHNlbGY7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgXCIgKyB0eXBlb2Ygc3VwZXJDbGFzcyk7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgZW51bWVyYWJsZTogZmFsc2UsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcykgOiBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzOyB9XG5cbi8qXG4gICAgU2NyYXBlIHgveSBjb29yZGluYXRlcyBmcm9tIHByb3ZpZGVkIGV2ZW50XG5cbiAgICBAcGFyYW0gW2V2ZW50XVxuICAgIEByZXR1cm4gW29iamVjdF1cbiovXG52YXIgbW91c2VFdmVudFRvUG9pbnQgPSBmdW5jdGlvbiAoZSkge1xuICAgIHJldHVybiB7XG4gICAgICAgIHg6IGUucGFnZVgsXG4gICAgICAgIHk6IGUucGFnZVlcbiAgICB9O1xufTtcblxudmFyIHRvdWNoRXZlbnRUb1BvaW50ID0gZnVuY3Rpb24gKF9yZWYpIHtcbiAgICB2YXIgY2hhbmdlZFRvdWNoZXMgPSBfcmVmLmNoYW5nZWRUb3VjaGVzO1xuICAgIHJldHVybiB7XG4gICAgICAgIHg6IGNoYW5nZWRUb3VjaGVzWzBdLmNsaWVudFgsXG4gICAgICAgIHk6IGNoYW5nZWRUb3VjaGVzWzBdLmNsaWVudFlcbiAgICB9O1xufTtcblxudmFyIGNyZWF0ZVBvaW50ZXIgPSBmdW5jdGlvbiAoZSkge1xuICAgIHJldHVybiBlLnRvdWNoZXMgPyBuZXcgX1BvaW50ZXIyLmRlZmF1bHQobW91c2VFdmVudFRvUG9pbnQoZSksICdtb3VzZW1vdmUnLCBtb3VzZUV2ZW50VG9Qb2ludCkgOiBuZXcgX1BvaW50ZXIyLmRlZmF1bHQodG91Y2hFdmVudFRvUG9pbnQoZSksICd0b3VjaG1vdmUnLCB0b3VjaEV2ZW50VG9Qb2ludCk7XG59O1xuXG52YXIgZ2V0QWN0dWFsRXZlbnQgPSBmdW5jdGlvbiAoZSkge1xuICAgIHJldHVybiBlLm9yaWdpbmFsRXZlbnQgfHwgZTtcbn07XG5cbnZhciBUcmFjayA9IGZ1bmN0aW9uIChfQWN0aW9uKSB7XG4gICAgX2luaGVyaXRzKFRyYWNrLCBfQWN0aW9uKTtcblxuICAgIGZ1bmN0aW9uIFRyYWNrKHByb3BzLCBpbnB1dCkge1xuICAgICAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgVHJhY2spO1xuXG4gICAgICAgIHZhciBfdGhpcyA9IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIF9BY3Rpb24uY2FsbCh0aGlzLCBwcm9wcykpO1xuXG4gICAgICAgIF90aGlzLmlucHV0ID0gaW5wdXQuc3RhdGUgPyBpbnB1dCA6IGNyZWF0ZVBvaW50ZXIoZ2V0QWN0dWFsRXZlbnQoaW5wdXQpKTtcbiAgICAgICAgcmV0dXJuIF90aGlzO1xuICAgIH1cblxuICAgIFRyYWNrLnByb3RvdHlwZS5zdGFydCA9IGZ1bmN0aW9uIHN0YXJ0KCkge1xuICAgICAgICBfQWN0aW9uLnByb3RvdHlwZS5zdGFydC5jYWxsKHRoaXMpO1xuICAgICAgICB0aGlzLmlucHV0T3JpZ2luID0ge307XG4gICAgfTtcblxuICAgIFRyYWNrLnByb3RvdHlwZS5vblVwZGF0ZSA9IGZ1bmN0aW9uIG9uVXBkYXRlKCkge1xuICAgICAgICB2YXIgX3RoaXMyID0gdGhpcztcblxuICAgICAgICB0aGlzLmlucHV0T2Zmc2V0ID0gKDAsIF9jYWxjLm9mZnNldCkodGhpcy5pbnB1dE9yaWdpbiwgdGhpcy5pbnB1dC5zdGF0ZSk7XG5cbiAgICAgICAgKDAsIF91dGlscy5lYWNoKSh0aGlzLnZhbHVlcywgZnVuY3Rpb24gKHZhbHVlLCBrZXkpIHtcbiAgICAgICAgICAgIGlmIChfdGhpczIuaW5wdXRPZmZzZXQuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgICAgICAgIGlmICh2YWx1ZS5kaXJlY3QpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFsdWUuY3VycmVudCA9IF90aGlzMi5pbnB1dC5zdGF0ZVtrZXldO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlLmN1cnJlbnQgPSB2YWx1ZS5vcmlnaW4gKyBfdGhpczIuaW5wdXRPZmZzZXRba2V5XTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH07XG5cbiAgICBUcmFjay5wcm90b3R5cGUuZ2V0RGVmYXVsdFZhbHVlID0gZnVuY3Rpb24gZ2V0RGVmYXVsdFZhbHVlKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgYW1wOiAxLFxuICAgICAgICAgICAgZXNjYXBlQW1wOiAwLFxuICAgICAgICAgICAgZGlyZWN0OiBmYWxzZSxcbiAgICAgICAgICAgIHNtb290aDogMFxuICAgICAgICB9O1xuICAgIH07XG5cbiAgICByZXR1cm4gVHJhY2s7XG59KF9BY3Rpb24zLmRlZmF1bHQpO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBUcmFjaztcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbk55WXk5aFkzUnBiMjV6TDFSeVlXTnJMbXB6SWwwc0ltNWhiV1Z6SWpwYlhTd2liV0Z3Y0dsdVozTWlPaUk3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3p0QlFWZEJMRWxCUVUwc2IwSkJRVzlDTEZWQlFVTXNRMEZCUkR0WFFVRlJPMEZCUXpsQ0xGZEJRVWNzUlVGQlJTeExRVUZHTzBGQlEwZ3NWMEZCUnl4RlFVRkZMRXRCUVVZN08wTkJSbTFDT3p0QlFVc3hRaXhKUVVGTkxHOUNRVUZ2UWp0UlFVRkhPMWRCUVhOQ08wRkJReTlETEZkQlFVY3NaVUZCWlN4RFFVRm1MRVZCUVd0Q0xFOUJRV3hDTzBGQlEwZ3NWMEZCUnl4bFFVRmxMRU5CUVdZc1JVRkJhMElzVDBGQmJFSTdPME5CUm0xQ096dEJRVXN4UWl4SlFVRk5MR2RDUVVGblFpeFZRVUZETEVOQlFVUTdWMEZCVHl4RlFVRkZMRTlCUVVZc1IwRkRla0lzYzBKQlFWa3NhMEpCUVd0Q0xFTkJRV3hDTEVOQlFWb3NSVUZCYTBNc1YwRkJiRU1zUlVGQkswTXNhVUpCUVM5RExFTkJSSGxDTEVkQlJYcENMSE5DUVVGWkxHdENRVUZyUWl4RFFVRnNRaXhEUVVGYUxFVkJRV3RETEZkQlFXeERMRVZCUVN0RExHbENRVUV2UXl4RFFVWjVRanREUVVGUU96dEJRVWwwUWl4SlFVRk5MR2xDUVVGcFFpeFZRVUZETEVOQlFVUTdWMEZCVHl4RlFVRkZMR0ZCUVVZc1NVRkJiVUlzUTBGQmJrSTdRMEZCVURzN1NVRkZSanM3TzBGQlEycENMR0ZCUkdsQ0xFdEJRMnBDTEVOQlFWa3NTMEZCV2l4RlFVRnRRaXhMUVVGdVFpeEZRVUV3UWpzNFFrRkVWQ3hQUVVOVE96dHhSRUZEZEVJc2JVSkJRVTBzUzBGQlRpeEhRVVJ6UWpzN1FVRkZkRUlzWTBGQlN5eExRVUZNTEVkQlFXRXNUVUZCVFN4TFFVRk9MRWRCUVdNc1MwRkJaQ3hIUVVGelFpeGpRVUZqTEdWQlFXVXNTMEZCWml4RFFVRmtMRU5CUVhSQ0xFTkJSbE03TzB0QlFURkNPenRCUVVScFFpeHZRa0ZOYWtJc2VVSkJRVkU3UVVGRFNpd3dRa0ZCVFN4TFFVRk9MRmxCUkVrN1FVRkZTaXhoUVVGTExGZEJRVXdzUjBGQmJVSXNSVUZCYmtJc1EwRkdTVHM3TzBGQlRsTXNiMEpCVjJwQ0xDdENRVUZYT3pzN1FVRkRVQ3hoUVVGTExGZEJRVXdzUjBGQmJVSXNhMEpCUVU4c1MwRkJTeXhYUVVGTUxFVkJRV3RDTEV0QlFVc3NTMEZCVEN4RFFVRlhMRXRCUVZnc1EwRkJOVU1zUTBGRVR6czdRVUZIVUN4NVFrRkJTeXhMUVVGTExFMUJRVXdzUlVGQllTeFZRVUZETEV0QlFVUXNSVUZCVVN4SFFVRlNMRVZCUVdkQ08wRkJRemxDTEdkQ1FVRkpMRTlCUVVzc1YwRkJUQ3hEUVVGcFFpeGpRVUZxUWl4RFFVRm5ReXhIUVVGb1F5eERRVUZLTEVWQlFUQkRPMEZCUTNSRExHOUNRVUZKTEUxQlFVMHNUVUZCVGl4RlFVRmpPMEZCUTJRc01FSkJRVTBzVDBGQlRpeEhRVUZuUWl4UFFVRkxMRXRCUVV3c1EwRkJWeXhMUVVGWUxFTkJRV2xDTEVkQlFXcENMRU5CUVdoQ0xFTkJSR003YVVKQlFXeENMRTFCUlU4N1FVRkRTQ3d3UWtGQlRTeFBRVUZPTEVkQlFXZENMRTFCUVUwc1RVRkJUaXhIUVVGbExFOUJRVXNzVjBGQlRDeERRVUZwUWl4SFFVRnFRaXhEUVVGbUxFTkJSR0k3YVVKQlJsQTdZVUZFU2p0VFFVUmpMRU5CUVd4Q0xFTkJTRTg3T3p0QlFWaE5MRzlDUVhsQ2FrSXNOa05CUVd0Q08wRkJRMlFzWlVGQlR6dEJRVU5JTEdsQ1FVRkxMRU5CUVV3N1FVRkRRU3gxUWtGQlZ5eERRVUZZTzBGQlEwRXNiMEpCUVZFc1MwRkJVanRCUVVOQkxHOUNRVUZSTEVOQlFWSTdVMEZLU2l4RFFVUmpPenM3VjBGNlFrUWlMQ0ptYVd4bElqb2lWSEpoWTJzdWFuTWlMQ0p6YjNWeVkyVlNiMjkwSWpvaUwxVnpaWEp6TDAxaGRIUXZVMmwwWlhNdmNHOXdiVzkwYVc5dUlpd2ljMjkxY21ObGMwTnZiblJsYm5RaU9sc2lhVzF3YjNKMElFRmpkR2x2YmlCbWNtOXRJQ2N1TDBGamRHbHZiaWM3WEc1cGJYQnZjblFnVUc5cGJuUmxjaUJtY205dElDY3VMaTlwYm5CMWRDOVFiMmx1ZEdWeUp6dGNibWx0Y0c5eWRDQjdJRzltWm5ObGRDQjlJR1p5YjIwZ0p5NHVMMmx1WXk5allXeGpKenRjYm1sdGNHOXlkQ0I3SUdWaFkyZ2dmU0JtY205dElDY3VMaTlwYm1NdmRYUnBiSE1uTzF4dVhHNHZLbHh1SUNBZ0lGTmpjbUZ3WlNCNEwza2dZMjl2Y21ScGJtRjBaWE1nWm5KdmJTQndjbTkyYVdSbFpDQmxkbVZ1ZEZ4dVhHNGdJQ0FnUUhCaGNtRnRJRnRsZG1WdWRGMWNiaUFnSUNCQWNtVjBkWEp1SUZ0dlltcGxZM1JkWEc0cUwxeHVZMjl1YzNRZ2JXOTFjMlZGZG1WdWRGUnZVRzlwYm5RZ1BTQW9aU2tnUFQ0Z0tIdGNiaUFnSUNCNE9pQmxMbkJoWjJWWUxGeHVJQ0FnSUhrNklHVXVjR0ZuWlZsY2JuMHBPMXh1WEc1amIyNXpkQ0IwYjNWamFFVjJaVzUwVkc5UWIybHVkQ0E5SUNoN0lHTm9ZVzVuWldSVWIzVmphR1Z6SUgwcElEMCtJQ2g3WEc0Z0lDQWdlRG9nWTJoaGJtZGxaRlJ2ZFdOb1pYTmJNRjB1WTJ4cFpXNTBXQ3hjYmlBZ0lDQjVPaUJqYUdGdVoyVmtWRzkxWTJobGMxc3dYUzVqYkdsbGJuUlpYRzU5S1R0Y2JseHVZMjl1YzNRZ1kzSmxZWFJsVUc5cGJuUmxjaUE5SUNobEtTQTlQaUJsTG5SdmRXTm9aWE1nUDF4dUlDQWdJRzVsZHlCUWIybHVkR1Z5S0cxdmRYTmxSWFpsYm5SVWIxQnZhVzUwS0dVcExDQW5iVzkxYzJWdGIzWmxKeXdnYlc5MWMyVkZkbVZ1ZEZSdlVHOXBiblFwSURwY2JpQWdJQ0J1WlhjZ1VHOXBiblJsY2loMGIzVmphRVYyWlc1MFZHOVFiMmx1ZENobEtTd2dKM1J2ZFdOb2JXOTJaU2NzSUhSdmRXTm9SWFpsYm5SVWIxQnZhVzUwS1R0Y2JseHVZMjl1YzNRZ1oyVjBRV04wZFdGc1JYWmxiblFnUFNBb1pTa2dQVDRnWlM1dmNtbG5hVzVoYkVWMlpXNTBJSHg4SUdVN1hHNWNibVY0Y0c5eWRDQmtaV1poZFd4MElHTnNZWE56SUZSeVlXTnJJR1Y0ZEdWdVpITWdRV04wYVc5dUlIdGNiaUFnSUNCamIyNXpkSEoxWTNSdmNpaHdjbTl3Y3l3Z2FXNXdkWFFwSUh0Y2JpQWdJQ0FnSUNBZ2MzVndaWElvY0hKdmNITXBPMXh1SUNBZ0lDQWdJQ0IwYUdsekxtbHVjSFYwSUQwZ2FXNXdkWFF1YzNSaGRHVWdQeUJwYm5CMWRDQTZJR055WldGMFpWQnZhVzUwWlhJb1oyVjBRV04wZFdGc1JYWmxiblFvYVc1d2RYUXBLVHRjYmlBZ0lDQjlYRzVjYmlBZ0lDQnpkR0Z5ZENncElIdGNiaUFnSUNBZ0lDQWdjM1Z3WlhJdWMzUmhjblFvS1R0Y2JpQWdJQ0FnSUNBZ2RHaHBjeTVwYm5CMWRFOXlhV2RwYmlBOUlIdDlPMXh1SUNBZ0lIMWNibHh1SUNBZ0lHOXVWWEJrWVhSbEtDa2dlMXh1SUNBZ0lDQWdJQ0IwYUdsekxtbHVjSFYwVDJabWMyVjBJRDBnYjJabWMyVjBLSFJvYVhNdWFXNXdkWFJQY21sbmFXNHNJSFJvYVhNdWFXNXdkWFF1YzNSaGRHVXBPMXh1WEc0Z0lDQWdJQ0FnSUdWaFkyZ29kR2hwY3k1MllXeDFaWE1zSUNoMllXeDFaU3dnYTJWNUtTQTlQaUI3WEc0Z0lDQWdJQ0FnSUNBZ0lDQnBaaUFvZEdocGN5NXBibkIxZEU5bVpuTmxkQzVvWVhOUGQyNVFjbTl3WlhKMGVTaHJaWGtwS1NCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2FXWWdLSFpoYkhWbExtUnBjbVZqZENrZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0IyWVd4MVpTNWpkWEp5Wlc1MElEMGdkR2hwY3k1cGJuQjFkQzV6ZEdGMFpWdHJaWGxkTzF4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUgwZ1pXeHpaU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lIWmhiSFZsTG1OMWNuSmxiblFnUFNCMllXeDFaUzV2Y21sbmFXNGdLeUIwYUdsekxtbHVjSFYwVDJabWMyVjBXMnRsZVYwN1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2ZWeHVJQ0FnSUNBZ0lDQWdJQ0FnZlZ4dUlDQWdJQ0FnSUNCOUtUdGNiaUFnSUNCOVhHNWNiaUFnSUNCblpYUkVaV1poZFd4MFZtRnNkV1VvS1NCN1hHNGdJQ0FnSUNBZ0lISmxkSFZ5YmlCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0JoYlhBNklERXNYRzRnSUNBZ0lDQWdJQ0FnSUNCbGMyTmhjR1ZCYlhBNklEQXNYRzRnSUNBZ0lDQWdJQ0FnSUNCa2FYSmxZM1E2SUdaaGJITmxMRnh1SUNBZ0lDQWdJQ0FnSUNBZ2MyMXZiM1JvT2lBd1hHNGdJQ0FnSUNBZ0lIMDdYRzRnSUNBZ2ZWeHVmVnh1SWwxOVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvYWN0aW9ucy9UcmFjay5qc1xuICoqIG1vZHVsZSBpZCA9IDVcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxudmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF91dGlscyA9IHJlcXVpcmUoJy4uL2luYy91dGlscycpO1xuXG52YXIgX2xvb3AgPSByZXF1aXJlKCcuL2xvb3AnKTtcblxudmFyIGxvb3AgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChfbG9vcCk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKG9iaikgeyBpZiAob2JqICYmIG9iai5fX2VzTW9kdWxlKSB7IHJldHVybiBvYmo7IH0gZWxzZSB7IHZhciBuZXdPYmogPSB7fTsgaWYgKG9iaiAhPSBudWxsKSB7IGZvciAodmFyIGtleSBpbiBvYmopIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGtleSkpIG5ld09ialtrZXldID0gb2JqW2tleV07IH0gfSBuZXdPYmouZGVmYXVsdCA9IG9iajsgcmV0dXJuIG5ld09iajsgfSB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbnZhciBQcm9jZXNzID0gZnVuY3Rpb24gKCkge1xuICAgIC8qXG4gICAgICAgIFtvYmplY3RdOiBQcm9wZXJ0aWVzXG4gICAgICAgIFtib29sZWFuXSAob3B0aW9uYWwpOiBJcyBQcm9jZXNzIGxhenk/XG4gICAgKi9cblxuICAgIGZ1bmN0aW9uIFByb2Nlc3MocHJvcHMsIGlzTGF6eSkge1xuICAgICAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgUHJvY2Vzcyk7XG5cbiAgICAgICAgdGhpcy5zZXQodGhpcy5nZXREZWZhdWx0UHJvcHMoKSk7XG4gICAgICAgIHRoaXMuc2V0KHByb3BzKTtcblxuICAgICAgICB0aGlzLmlzTGF6eSA9IGlzTGF6eSB8fCBmYWxzZTtcbiAgICAgICAgdGhpcy5pZCA9IGxvb3AuZ2V0UHJvY2Vzc0lkKCk7XG4gICAgICAgIHRoaXMuaXNBY3RpdmUgPSBmYWxzZTtcbiAgICB9XG5cbiAgICBQcm9jZXNzLnByb3RvdHlwZS5zZXQgPSBmdW5jdGlvbiBzZXQocHJvcHMpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcblxuICAgICAgICAoMCwgX3V0aWxzLmVhY2gpKHByb3BzLCBmdW5jdGlvbiAodmFsdWUsIGtleSkge1xuICAgICAgICAgICAgcmV0dXJuIF90aGlzW2tleV0gPSB2YWx1ZTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH07XG5cbiAgICBQcm9jZXNzLnByb3RvdHlwZS5zdGFydCA9IGZ1bmN0aW9uIHN0YXJ0KCkge1xuICAgICAgICB0aGlzLmlzQWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgbG9vcC5hY3RpdmF0ZSh0aGlzLmlkLCB0aGlzKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfTtcblxuICAgIFByb2Nlc3MucHJvdG90eXBlLnN0b3AgPSBmdW5jdGlvbiBzdG9wKCkge1xuICAgICAgICB0aGlzLmlzQWN0aXZlID0gZmFsc2U7XG4gICAgICAgIGxvb3AuZGVhY3RpdmF0ZSh0aGlzLmlkKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfTtcblxuICAgIFByb2Nlc3MucHJvdG90eXBlLm9uY2UgPSBmdW5jdGlvbiBvbmNlKCkge1xuICAgICAgICB2YXIgX3RoaXMyID0gdGhpcztcblxuICAgICAgICB0aGlzLm9uQ2xlYW51cCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIF90aGlzMi5zdG9wKCk7XG4gICAgICAgICAgICBfdGhpczIub25DbGVhbnVwID0gdW5kZWZpbmVkO1xuICAgICAgICB9O1xuXG4gICAgICAgIHRoaXMuc3RhcnQoKTtcblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xuXG4gICAgLypcbiAgICAgICAgIyBHZXQgZGVmYXVsdCBBY3Rpb24gcHJvcGVydGllc1xuICAgICAgICAgQHJldHVybiBbb2JqZWN0XVxuICAgICovXG5cbiAgICBQcm9jZXNzLnByb3RvdHlwZS5nZXREZWZhdWx0UHJvcHMgPSBmdW5jdGlvbiBnZXREZWZhdWx0UHJvcHMoKSB7XG4gICAgICAgIHJldHVybiB7fTtcbiAgICB9O1xuXG4gICAgLypcbiAgICAgICAgIyBFeHRlbmQgdGhpcyBQcm9jZXNzIHdpdGggbmV3IHByb3BlcnRpZXNcbiAgICAgICAgIyMgUmV0dXJucyBuZXcgaW5zdGFuY2Ugb2YgdGhpcyBQcm9jZXNzJ3MgYHByb3RvdHlwZWAgd2l0aCBleGlzdGluZyBhbmQgbmV3IHByb3BlcnRpZXNcbiAgICAgICAgIEBwYXJhbSBbb2JqZWN0XSAob3B0aW9uYWwpXG4gICAgICAgIEByZXR1cm4gW1Byb2Nlc3NdXG4gICAgKi9cblxuICAgIFByb2Nlc3MucHJvdG90eXBlLmluaGVyaXQgPSBmdW5jdGlvbiBpbmhlcml0KHByb3BzKSB7XG4gICAgICAgIHJldHVybiBuZXcgdGhpcy5jb25zdHJ1Y3RvcihfZXh0ZW5kcyh7fSwgdGhpcywgeyBwcm9wczogcHJvcHMgfSkpO1xuICAgIH07XG5cbiAgICByZXR1cm4gUHJvY2Vzcztcbn0oKTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gUHJvY2Vzcztcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbk55WXk5d2NtOWpaWE56TDFCeWIyTmxjM011YW5NaVhTd2libUZ0WlhNaU9sdGRMQ0p0WVhCd2FXNW5jeUk2SWpzN096czdPenM3T3p0SlFVTlpPenM3T3pzN1NVRkZVenM3T3pzN08wRkJTMnBDTEdGQlRHbENMRTlCUzJwQ0xFTkJRVmtzUzBGQldpeEZRVUZ0UWl4TlFVRnVRaXhGUVVFeVFqczRRa0ZNVml4VFFVdFZPenRCUVVOMlFpeGhRVUZMTEVkQlFVd3NRMEZCVXl4TFFVRkxMR1ZCUVV3c1JVRkJWQ3hGUVVSMVFqdEJRVVYyUWl4aFFVRkxMRWRCUVV3c1EwRkJVeXhMUVVGVUxFVkJSblZDT3p0QlFVbDJRaXhoUVVGTExFMUJRVXdzUjBGQll5eFZRVUZWTEV0QlFWWXNRMEZLVXp0QlFVdDJRaXhoUVVGTExFVkJRVXdzUjBGQlZTeExRVUZMTEZsQlFVd3NSVUZCVml4RFFVeDFRanRCUVUxMlFpeGhRVUZMTEZGQlFVd3NSMEZCWjBJc1MwRkJhRUlzUTBGT2RVSTdTMEZCTTBJN08wRkJUR2xDTEhOQ1FXTnFRaXh0UWtGQlNTeFBRVUZQT3pzN1FVRkRVQ3g1UWtGQlN5eExRVUZNTEVWQlFWa3NWVUZCUXl4TFFVRkVMRVZCUVZFc1IwRkJVanR0UWtGQlowSXNUVUZCU3l4SFFVRk1MRWxCUVZrc1MwRkJXanRUUVVGb1FpeERRVUZhTEVOQlJFODdRVUZGVUN4bFFVRlBMRWxCUVZBc1EwRkdUenM3TzBGQlpFMHNjMEpCYlVKcVFpeDVRa0ZCVVR0QlFVTktMR0ZCUVVzc1VVRkJUQ3hIUVVGblFpeEpRVUZvUWl4RFFVUkpPMEZCUlVvc1lVRkJTeXhSUVVGTUxFTkJRV01zUzBGQlN5eEZRVUZNTEVWQlFWTXNTVUZCZGtJc1JVRkdTVHRCUVVkS0xHVkJRVThzU1VGQlVDeERRVWhKT3pzN1FVRnVRbE1zYzBKQmVVSnFRaXgxUWtGQlR6dEJRVU5JTEdGQlFVc3NVVUZCVEN4SFFVRm5RaXhMUVVGb1FpeERRVVJITzBGQlJVZ3NZVUZCU3l4VlFVRk1MRU5CUVdkQ0xFdEJRVXNzUlVGQlRDeERRVUZvUWl4RFFVWkhPMEZCUjBnc1pVRkJUeXhKUVVGUUxFTkJTRWM3T3p0QlFYcENWU3h6UWtFclFtcENMSFZDUVVGUE96czdRVUZEU0N4aFFVRkxMRk5CUVV3c1IwRkJhVUlzV1VGQlRUdEJRVU51UWl4dFFrRkJTeXhKUVVGTUxFZEJSRzFDTzBGQlJXNUNMRzFDUVVGTExGTkJRVXdzUjBGQmFVSXNVMEZCYWtJc1EwRkdiVUk3VTBGQlRpeERRVVJrT3p0QlFVMUlMR0ZCUVVzc1MwRkJUQ3hIUVU1SE96dEJRVkZJTEdWQlFVOHNTVUZCVUN4RFFWSkhPenM3T3pzN096dEJRUzlDVlN4elFrRXJRMnBDTERaRFFVRnJRanRCUVVOa0xHVkJRVThzUlVGQlVDeERRVVJqT3pzN096czdPenM3TzBGQkwwTkVMSE5DUVRCRWFrSXNNa0pCUVZFc1QwRkJUenRCUVVOWUxHVkJRVThzU1VGQlNTeExRVUZMTEZkQlFVd3NZMEZCYzBJc1VVRkJUU3hsUVVGb1F5eERRVUZRTEVOQlJGYzdPenRYUVRGRVJTSXNJbVpwYkdVaU9pSlFjbTlqWlhOekxtcHpJaXdpYzI5MWNtTmxVbTl2ZENJNklpOVZjMlZ5Y3k5TllYUjBMMU5wZEdWekwzQnZjRzF2ZEdsdmJpSXNJbk52ZFhKalpYTkRiMjUwWlc1MElqcGJJbWx0Y0c5eWRDQjdJR1ZoWTJnZ2ZTQm1jbTl0SUNjdUxpOXBibU12ZFhScGJITW5PMXh1YVcxd2IzSjBJQ29nWVhNZ2JHOXZjQ0JtY205dElDY3VMMnh2YjNBbk8xeHVYRzVsZUhCdmNuUWdaR1ZtWVhWc2RDQmpiR0Z6Y3lCUWNtOWpaWE56SUh0Y2JpQWdJQ0F2S2x4dUlDQWdJQ0FnSUNCYmIySnFaV04wWFRvZ1VISnZjR1Z5ZEdsbGMxeHVJQ0FnSUNBZ0lDQmJZbTl2YkdWaGJsMGdLRzl3ZEdsdmJtRnNLVG9nU1hNZ1VISnZZMlZ6Y3lCc1lYcDVQMXh1SUNBZ0lDb3ZYRzRnSUNBZ1kyOXVjM1J5ZFdOMGIzSW9jSEp2Y0hNc0lHbHpUR0Y2ZVNrZ2UxeHVJQ0FnSUNBZ0lDQjBhR2x6TG5ObGRDaDBhR2x6TG1kbGRFUmxabUYxYkhSUWNtOXdjeWdwS1R0Y2JpQWdJQ0FnSUNBZ2RHaHBjeTV6WlhRb2NISnZjSE1wTzF4dVhHNGdJQ0FnSUNBZ0lIUm9hWE11YVhOTVlYcDVJRDBnYVhOTVlYcDVJSHg4SUdaaGJITmxPMXh1SUNBZ0lDQWdJQ0IwYUdsekxtbGtJRDBnYkc5dmNDNW5aWFJRY205alpYTnpTV1FvS1R0Y2JpQWdJQ0FnSUNBZ2RHaHBjeTVwYzBGamRHbDJaU0E5SUdaaGJITmxPMXh1SUNBZ0lIMWNibHh1SUNBZ0lITmxkQ2h3Y205d2N5a2dlMXh1SUNBZ0lDQWdJQ0JsWVdOb0tIQnliM0J6TENBb2RtRnNkV1VzSUd0bGVTa2dQVDRnZEdocGMxdHJaWGxkSUQwZ2RtRnNkV1VwTzF4dUlDQWdJQ0FnSUNCeVpYUjFjbTRnZEdocGN6dGNiaUFnSUNCOVhHNWNiaUFnSUNCemRHRnlkQ2dwSUh0Y2JpQWdJQ0FnSUNBZ2RHaHBjeTVwYzBGamRHbDJaU0E5SUhSeWRXVTdYRzRnSUNBZ0lDQWdJR3h2YjNBdVlXTjBhWFpoZEdVb2RHaHBjeTVwWkN3Z2RHaHBjeWs3WEc0Z0lDQWdJQ0FnSUhKbGRIVnliaUIwYUdsek8xeHVJQ0FnSUgxY2JseHVJQ0FnSUhOMGIzQW9LU0I3WEc0Z0lDQWdJQ0FnSUhSb2FYTXVhWE5CWTNScGRtVWdQU0JtWVd4elpUdGNiaUFnSUNBZ0lDQWdiRzl2Y0M1a1pXRmpkR2wyWVhSbEtIUm9hWE11YVdRcE8xeHVJQ0FnSUNBZ0lDQnlaWFIxY200Z2RHaHBjenRjYmlBZ0lDQjlYRzVjYmlBZ0lDQnZibU5sS0NrZ2UxeHVJQ0FnSUNBZ0lDQjBhR2x6TG05dVEyeGxZVzUxY0NBOUlDZ3BJRDArSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJSFJvYVhNdWMzUnZjQ2dwTzF4dUlDQWdJQ0FnSUNBZ0lDQWdkR2hwY3k1dmJrTnNaV0Z1ZFhBZ1BTQjFibVJsWm1sdVpXUTdYRzRnSUNBZ0lDQWdJSDA3WEc1Y2JpQWdJQ0FnSUNBZ2RHaHBjeTV6ZEdGeWRDZ3BPMXh1WEc0Z0lDQWdJQ0FnSUhKbGRIVnliaUIwYUdsek8xeHVJQ0FnSUgxY2JseHVJQ0FnSUM4cVhHNGdJQ0FnSUNBZ0lDTWdSMlYwSUdSbFptRjFiSFFnUVdOMGFXOXVJSEJ5YjNCbGNuUnBaWE5jYmx4dUlDQWdJQ0FnSUNCQWNtVjBkWEp1SUZ0dlltcGxZM1JkWEc0Z0lDQWdLaTljYmlBZ0lDQm5aWFJFWldaaGRXeDBVSEp2Y0hNb0tTQjdYRzRnSUNBZ0lDQWdJSEpsZEhWeWJpQjdmVHRjYmlBZ0lDQjlYRzVjYmlBZ0lDQXZLbHh1SUNBZ0lDQWdJQ0FqSUVWNGRHVnVaQ0IwYUdseklGQnliMk5sYzNNZ2QybDBhQ0J1WlhjZ2NISnZjR1Z5ZEdsbGMxeHVJQ0FnSUNBZ0lDQWpJeUJTWlhSMWNtNXpJRzVsZHlCcGJuTjBZVzVqWlNCdlppQjBhR2x6SUZCeWIyTmxjM01uY3lCZ2NISnZkRzkwZVhCbFlDQjNhWFJvSUdWNGFYTjBhVzVuSUdGdVpDQnVaWGNnY0hKdmNHVnlkR2xsYzF4dVhHNGdJQ0FnSUNBZ0lFQndZWEpoYlNCYmIySnFaV04wWFNBb2IzQjBhVzl1WVd3cFhHNGdJQ0FnSUNBZ0lFQnlaWFIxY200Z1cxQnliMk5sYzNOZFhHNGdJQ0FnS2k5Y2JpQWdJQ0JwYm1obGNtbDBLSEJ5YjNCektTQjdYRzRnSUNBZ0lDQWdJSEpsZEhWeWJpQnVaWGNnZEdocGN5NWpiMjV6ZEhKMVkzUnZjaWg3SUM0dUxuUm9hWE1zSUhCeWIzQnpJSDBwTzF4dUlDQWdJSDFjYm4xY2JpSmRmUT09XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9wcm9jZXNzL1Byb2Nlc3MuanNcbiAqKiBtb2R1bGUgaWQgPSA2XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbnZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfUHJvY2VzczIgPSByZXF1aXJlKCcuLi9wcm9jZXNzL1Byb2Nlc3MnKTtcblxudmFyIF9Qcm9jZXNzMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX1Byb2Nlc3MyKTtcblxudmFyIF91dGlscyA9IHJlcXVpcmUoJy4uL2luYy91dGlscycpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmICghc2VsZikgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIGNhbGwgJiYgKHR5cGVvZiBjYWxsID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpID8gY2FsbCA6IHNlbGY7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgXCIgKyB0eXBlb2Ygc3VwZXJDbGFzcyk7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgZW51bWVyYWJsZTogZmFsc2UsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcykgOiBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzOyB9XG5cbnZhciBJbnB1dCA9IGZ1bmN0aW9uIChfUHJvY2Vzcykge1xuICAgIF9pbmhlcml0cyhJbnB1dCwgX1Byb2Nlc3MpO1xuXG4gICAgZnVuY3Rpb24gSW5wdXQoaW5pdGlhbFZhbHVlcywgcG9sbCkge1xuICAgICAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgSW5wdXQpO1xuXG4gICAgICAgIHZhciBfdGhpcyA9IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIF9Qcm9jZXNzLmNhbGwodGhpcykpO1xuXG4gICAgICAgIF90aGlzLnN0YXRlID0ge307XG4gICAgICAgIF90aGlzLm9mZnNldCA9IHt9O1xuXG4gICAgICAgIGlmICgoMCwgX3V0aWxzLmlzRnVuYykocG9sbCkpIHtcbiAgICAgICAgICAgIF90aGlzLm9uRnJhbWVTdGFydCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gX3RoaXMubGF0ZXN0KF90aGlzLnBvbGwoKSk7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBfdGhpcztcbiAgICB9XG5cbiAgICAvKlxuICAgICAgICBNYW51YWxseSBhZGQgbGF0ZXN0IHZhbHVlc1xuICAgICAgICAgQHBhcmFtIFtvYmplY3RdXG4gICAgKi9cblxuICAgIElucHV0LnByb3RvdHlwZS5sYXRlc3QgPSBmdW5jdGlvbiBsYXRlc3QocHJvcHMpIHtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IF9leHRlbmRzKHt9LCB0aGlzLnN0YXRlLCB7IHByb3BzOiBwcm9wcyB9KTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIElucHV0O1xufShfUHJvY2VzczMuZGVmYXVsdCk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IElucHV0O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluTnlZeTlwYm5CMWRDOUpibkIxZEM1cWN5SmRMQ0p1WVcxbGN5STZXMTBzSW0xaGNIQnBibWR6SWpvaU96czdPenM3T3pzN096czdPenM3T3pzN096dEpRVWR4UWpzN08wRkJRMnBDTEdGQlJHbENMRXRCUTJwQ0xFTkJRVmtzWVVGQldpeEZRVUV5UWl4SlFVRXpRaXhGUVVGcFF6czRRa0ZFYUVJc1QwRkRaMEk3TzNGRVFVTTNRaXh4UWtGRU5rSTdPMEZCUlRkQ0xHTkJRVXNzUzBGQlRDeEhRVUZoTEVWQlFXSXNRMEZHTmtJN1FVRkhOMElzWTBGQlN5eE5RVUZNTEVkQlFXTXNSVUZCWkN4RFFVZzJRanM3UVVGTE4wSXNXVUZCU1N4dFFrRkJUeXhKUVVGUUxFTkJRVW9zUlVGQmEwSTdRVUZEWkN4clFrRkJTeXhaUVVGTUxFZEJRVzlDTzNWQ1FVRk5MRTFCUVVzc1RVRkJUQ3hEUVVGWkxFMUJRVXNzU1VGQlRDeEZRVUZhTzJGQlFVNHNRMEZFVGp0VFFVRnNRanR4UWtGTU5rSTdTMEZCYWtNN096czdPenM3UVVGRWFVSXNiMEpCWjBKcVFpeDVRa0ZCVHl4UFFVRlBPMEZCUTFZc1lVRkJTeXhMUVVGTUxHZENRVUZyUWl4TFFVRkxMRXRCUVV3c1NVRkJXU3hsUVVFNVFpeERRVVJWT3pzN1YwRm9Ra2NpTENKbWFXeGxJam9pU1c1d2RYUXVhbk1pTENKemIzVnlZMlZTYjI5MElqb2lMMVZ6WlhKekwwMWhkSFF2VTJsMFpYTXZjRzl3Ylc5MGFXOXVJaXdpYzI5MWNtTmxjME52Ym5SbGJuUWlPbHNpYVcxd2IzSjBJRkJ5YjJObGMzTWdabkp2YlNBbkxpNHZjSEp2WTJWemN5OVFjbTlqWlhOekp6dGNibWx0Y0c5eWRDQjdJR2x6Um5WdVl5QjlJR1p5YjIwZ0p5NHVMMmx1WXk5MWRHbHNjeWM3WEc1Y2JtVjRjRzl5ZENCa1pXWmhkV3gwSUdOc1lYTnpJRWx1Y0hWMElHVjRkR1Z1WkhNZ1VISnZZMlZ6Y3lCN1hHNGdJQ0FnWTI5dWMzUnlkV04wYjNJb2FXNXBkR2xoYkZaaGJIVmxjeXdnY0c5c2JDa2dlMXh1SUNBZ0lDQWdJQ0J6ZFhCbGNpZ3BPMXh1SUNBZ0lDQWdJQ0IwYUdsekxuTjBZWFJsSUQwZ2UzMDdYRzRnSUNBZ0lDQWdJSFJvYVhNdWIyWm1jMlYwSUQwZ2UzMDdYRzVjYmlBZ0lDQWdJQ0FnYVdZZ0tHbHpSblZ1WXlod2IyeHNLU2tnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdkR2hwY3k1dmJrWnlZVzFsVTNSaGNuUWdQU0FvS1NBOVBpQjBhR2x6TG14aGRHVnpkQ2gwYUdsekxuQnZiR3dvS1NrN1hHNGdJQ0FnSUNBZ0lIMWNiaUFnSUNCOVhHNWNiaUFnSUNBdktseHVJQ0FnSUNBZ0lDQk5ZVzUxWVd4c2VTQmhaR1FnYkdGMFpYTjBJSFpoYkhWbGMxeHVYRzRnSUNBZ0lDQWdJRUJ3WVhKaGJTQmJiMkpxWldOMFhWeHVJQ0FnSUNvdlhHNGdJQ0FnYkdGMFpYTjBLSEJ5YjNCektTQjdYRzRnSUNBZ0lDQWdJSFJvYVhNdWMzUmhkR1VnUFNCN0lDNHVMblJvYVhNdWMzUmhkR1VzSUhCeWIzQnpJSDA3WEc0Z0lDQWdmVnh1ZlZ4dUlsMTlcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2lucHV0L0lucHV0LmpzXG4gKiogbW9kdWxlIGlkID0gN1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX3V0aWxzID0gcmVxdWlyZSgnLi4vaW5jL3V0aWxzJyk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uIChfcmVmKSB7XG4gIHZhciBlbGVtZW50ID0gX3JlZi5lbGVtZW50O1xuICB2YXIgc3RhdGUgPSBfcmVmLnN0YXRlO1xuICByZXR1cm4gKDAsIF91dGlscy5lYWNoKShzdGF0ZSwgZnVuY3Rpb24gKHZhbHVlLCBrZXkpIHtcbiAgICByZXR1cm4gZWxlbWVudC5zZXRBdHRyaWJ1dGUoa2V5LCB2YWx1ZSk7XG4gIH0pO1xufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbk55WXk5eVpXNWtaWEl2WVhSMGNpNXFjeUpkTENKdVlXMWxjeUk2VzEwc0ltMWhjSEJwYm1keklqb2lPenM3T3pzN2EwSkJSV1U3VFVGQlJ6dE5RVUZUTzFOQlFWa3NhVUpCUVVzc1MwRkJUQ3hGUVVGWkxGVkJRVU1zUzBGQlJDeEZRVUZSTEVkQlFWSTdWMEZCWjBJc1VVRkJVU3haUVVGU0xFTkJRWEZDTEVkQlFYSkNMRVZCUVRCQ0xFdEJRVEZDTzBkQlFXaENPME5CUVhCRElpd2labWxzWlNJNkltRjBkSEl1YW5NaUxDSnpiM1Z5WTJWU2IyOTBJam9pTDFWelpYSnpMMDFoZEhRdlUybDBaWE12Y0c5d2JXOTBhVzl1SWl3aWMyOTFjbU5sYzBOdmJuUmxiblFpT2xzaWFXMXdiM0owSUhzZ1pXRmphQ0I5SUdaeWIyMGdKeTR1TDJsdVl5OTFkR2xzY3ljN1hHNWNibVY0Y0c5eWRDQmtaV1poZFd4MElDaDdJR1ZzWlcxbGJuUXNJSE4wWVhSbElIMHBJRDArSUdWaFkyZ29jM1JoZEdVc0lDaDJZV3gxWlN3Z2EyVjVLU0E5UGlCbGJHVnRaVzUwTG5ObGRFRjBkSEpwWW5WMFpTaHJaWGtzSUhaaGJIVmxLU2s3SWwxOVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvcmVuZGVyL2F0dHIuanNcbiAqKiBtb2R1bGUgaWQgPSA4XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfc3RhdGVNYXAgPSByZXF1aXJlKCcuL2Nzcy9zdGF0ZS1tYXAnKTtcblxudmFyIF9zdGF0ZU1hcDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9zdGF0ZU1hcCk7XG5cbnZhciBfdmFsdWVUeXBlTWFwID0gcmVxdWlyZSgnLi9jc3MvdmFsdWUtdHlwZS1tYXAnKTtcblxudmFyIF92YWx1ZVR5cGVNYXAyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfdmFsdWVUeXBlTWFwKTtcblxudmFyIF9wcmVmaXhlciA9IHJlcXVpcmUoJy4vY3NzL3ByZWZpeGVyJyk7XG5cbnZhciBfcHJlZml4ZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcHJlZml4ZXIpO1xuXG52YXIgX2J1aWxkID0gcmVxdWlyZSgnLi9jc3MvYnVpbGQnKTtcblxudmFyIF9idWlsZDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9idWlsZCk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbi8qXG4gICAgUmVuZGVyIENTUyB0byBwcm92aWRlZCBlbGVtZW50XG5cbiAgICBAcGFyYW0geyBET01FbGVtZW50LCBPYmplY3QgfVxuKi9cbmZ1bmN0aW9uIHJlbmRlckNTUyhfcmVmKSB7XG4gICAgdmFyIGVsZW1lbnQgPSBfcmVmLmVsZW1lbnQ7XG4gICAgdmFyIHN0YXRlID0gX3JlZi5zdGF0ZTtcblxuICAgIGVsZW1lbnQuc3R5bGUuY3NzVGV4dCArPSAnOycgKyAoMCwgX2J1aWxkMi5kZWZhdWx0KShzdGF0ZSk7XG59XG5cbi8qXG4gICAgR2V0IENTUyBwcm9wZXJ0eSBvZiBlbGVtZW50XG5cbiAgICBAcGFyYW0gW0RPTUVsZW1lbnRdXG4gICAgQHBhcmFtIFtzdHJpbmddXG4gICAgQHJldHVybiBbdmFyXVxuKi9cbnJlbmRlckNTUy5nZXQgPSBmdW5jdGlvbiAoZWxlbWVudCwga2V5KSB7XG4gICAga2V5ID0gKDAsIF9wcmVmaXhlcjIuZGVmYXVsdCkoa2V5KTtcblxuICAgIGlmIChrZXkpIHtcbiAgICAgICAgcmV0dXJuIHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGVsZW1lbnQsIG51bGwpW2tleV07XG4gICAgfVxufTtcblxucmVuZGVyQ1NTLnN0YXRlTWFwID0gX3N0YXRlTWFwMi5kZWZhdWx0O1xucmVuZGVyQ1NTLnZhbHVlVHlwZU1hcCA9IF92YWx1ZVR5cGVNYXAyLmRlZmF1bHQ7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IHJlbmRlckNTUztcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbk55WXk5eVpXNWtaWEl2WTNOekxtcHpJbDBzSW01aGJXVnpJanBiWFN3aWJXRndjR2x1WjNNaU9pSTdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096dEJRVlZCTEZOQlFWTXNVMEZCVkN4UFFVRjFRenRSUVVGc1FpeDFRa0ZCYTBJN1VVRkJWQ3h0UWtGQlV6czdRVUZEYmtNc1dVRkJVU3hMUVVGU0xFTkJRV01zVDBGQlpDeEpRVUY1UWl4TlFVRk5MSEZDUVVGdlFpeExRVUZ3UWl4RFFVRk9MRU5CUkZVN1EwRkJka003T3pzN096czdPenRCUVZkQkxGVkJRVlVzUjBGQlZpeEhRVUZuUWl4VlFVRkRMRTlCUVVRc1JVRkJWU3hIUVVGV0xFVkJRV3RDTzBGQlF6bENMRlZCUVUwc2QwSkJRVk1zUjBGQlZDeERRVUZPTEVOQlJEaENPenRCUVVjNVFpeFJRVUZKTEVkQlFVb3NSVUZCVXp0QlFVTk1MR1ZCUVU4c1QwRkJUeXhuUWtGQlVDeERRVUYzUWl4UFFVRjRRaXhGUVVGcFF5eEpRVUZxUXl4RlFVRjFReXhIUVVGMlF5eERRVUZRTEVOQlJFczdTMEZCVkR0RFFVaFpPenRCUVZGb1FpeFZRVUZWTEZGQlFWWTdRVUZEUVN4VlFVRlZMRmxCUVZZN08ydENRVVZsSWl3aVptbHNaU0k2SW1OemN5NXFjeUlzSW5OdmRYSmpaVkp2YjNRaU9pSXZWWE5sY25NdlRXRjBkQzlUYVhSbGN5OXdiM0J0YjNScGIyNGlMQ0p6YjNWeVkyVnpRMjl1ZEdWdWRDSTZXeUpwYlhCdmNuUWdjM1JoZEdWTllYQWdabkp2YlNBbkxpOWpjM012YzNSaGRHVXRiV0Z3Snp0Y2JtbHRjRzl5ZENCMllXeDFaVlI1Y0dWTllYQWdabkp2YlNBbkxpOWpjM012ZG1Gc2RXVXRkSGx3WlMxdFlYQW5PMXh1YVcxd2IzSjBJSEJ5WldacGVHVnlJR1p5YjIwZ0p5NHZZM056TDNCeVpXWnBlR1Z5Snp0Y2JtbHRjRzl5ZENCaWRXbHNaRkJ5YjNCbGNuUjVVM1J5YVc1bklHWnliMjBnSnk0dlkzTnpMMkoxYVd4a0p6dGNibHh1THlwY2JpQWdJQ0JTWlc1a1pYSWdRMU5USUhSdklIQnliM1pwWkdWa0lHVnNaVzFsYm5SY2JseHVJQ0FnSUVCd1lYSmhiU0I3SUVSUFRVVnNaVzFsYm5Rc0lFOWlhbVZqZENCOVhHNHFMMXh1Wm5WdVkzUnBiMjRnY21WdVpHVnlRMU5US0hzZ1pXeGxiV1Z1ZEN3Z2MzUmhkR1VnZlNrZ2UxeHVJQ0FnSUdWc1pXMWxiblF1YzNSNWJHVXVZM056VkdWNGRDQXJQU0FuT3ljZ0t5QmlkV2xzWkZCeWIzQmxjblI1VTNSeWFXNW5LSE4wWVhSbEtUdGNibjFjYmx4dUx5cGNiaUFnSUNCSFpYUWdRMU5USUhCeWIzQmxjblI1SUc5bUlHVnNaVzFsYm5SY2JseHVJQ0FnSUVCd1lYSmhiU0JiUkU5TlJXeGxiV1Z1ZEYxY2JpQWdJQ0JBY0dGeVlXMGdXM04wY21sdVoxMWNiaUFnSUNCQWNtVjBkWEp1SUZ0MllYSmRYRzRxTDF4dWNtVnVaR1Z5UTFOVExtZGxkQ0E5SUNobGJHVnRaVzUwTENCclpYa3BJRDArSUh0Y2JpQWdJQ0JyWlhrZ1BTQndjbVZtYVhobGNpaHJaWGtwTzF4dVhHNGdJQ0FnYVdZZ0tHdGxlU2tnZTF4dUlDQWdJQ0FnSUNCeVpYUjFjbTRnZDJsdVpHOTNMbWRsZEVOdmJYQjFkR1ZrVTNSNWJHVW9aV3hsYldWdWRDd2diblZzYkNsYmEyVjVYVHRjYmlBZ0lDQjlYRzU5TzF4dVhHNXlaVzVrWlhKRFUxTXVjM1JoZEdWTllYQWdQU0J6ZEdGMFpVMWhjRHRjYm5KbGJtUmxja05UVXk1MllXeDFaVlI1Y0dWTllYQWdQU0IyWVd4MVpWUjVjR1ZOWVhBN1hHNWNibVY0Y0c5eWRDQmtaV1poZFd4MElISmxibVJsY2tOVFV6c2lYWDA9XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9yZW5kZXIvY3NzLmpzXG4gKiogbW9kdWxlIGlkID0gOVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX3V0aWxzID0gcmVxdWlyZSgnLi4vaW5jL3V0aWxzJyk7XG5cbnZhciBfc3RhdGVNYXAgPSByZXF1aXJlKCcuL2Nzcy9zdGF0ZS1tYXAnKTtcblxudmFyIF9zdGF0ZU1hcDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9zdGF0ZU1hcCk7XG5cbnZhciBfdmFsdWVUeXBlTWFwID0gcmVxdWlyZSgnLi9zdmcvdmFsdWUtdHlwZS1tYXAnKTtcblxudmFyIF92YWx1ZVR5cGVNYXAyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfdmFsdWVUeXBlTWFwKTtcblxudmFyIF9idWlsZCA9IHJlcXVpcmUoJy4vc3ZnL2J1aWxkJyk7XG5cbnZhciBfYnVpbGQyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfYnVpbGQpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiByZW5kZXJTVkcoX3JlZikge1xuICAgIHZhciBzdGF0ZSA9IF9yZWYuc3RhdGU7XG4gICAgdmFyIGVsZW1lbnQgPSBfcmVmLmVsZW1lbnQ7XG4gICAgdmFyIHN2Z09yaWdpbiA9IF9yZWYuc3ZnT3JpZ2luO1xuXG4gICAgKDAsIF91dGlscy5lYWNoKSgoMCwgX2J1aWxkMi5kZWZhdWx0KShzdGF0ZSwgc3ZnT3JpZ2luKSwgZnVuY3Rpb24gKHZhbHVlLCBrZXkpIHtcbiAgICAgICAgcmV0dXJuIGVsZW1lbnQuc2V0QXR0cmlidXRlKGtleSwgdmFsdWUpO1xuICAgIH0pO1xufVxuXG5yZW5kZXJTVkcuaW5pdCA9IGZ1bmN0aW9uIChhY3Rvcikge1xuICAgIHZhciBiQm94ID0gYWN0b3IuZWxlbWVudC5nZXRCQm94KCk7XG4gICAgdmFyIHRyYW5zZm9ybU9yaWdpblggPSBhY3Rvci52YWx1ZXMudHJhbnNmb3JtT3JpZ2luWCA/IGFjdG9yLnZhbHVlcy50cmFuc2Zvcm1PcmlnaW5YLmN1cnJlbnQgOiA1MDtcbiAgICB2YXIgdHJhbnNmb3JtT3JpZ2luWSA9IGFjdG9yLnZhbHVlcy50cmFuc2Zvcm1PcmlnaW5ZID8gYWN0b3IudmFsdWVzLnRyYW5zZm9ybU9yaWdpblkuY3VycmVudCA6IDUwO1xuXG4gICAgYWN0b3Iuc3ZnT3JpZ2luID0ge1xuICAgICAgICB4OiBiQm94LndpZHRoICogKHRyYW5zZm9ybU9yaWdpblggLyAxMDApICsgYkJveC54LFxuICAgICAgICB5OiBiQm94LmhlaWdodCAqICh0cmFuc2Zvcm1PcmlnaW5ZIC8gMTAwKSArIGJCb3gueVxuICAgIH07XG59O1xuXG5yZW5kZXJTVkcuc3RhdGVNYXAgPSBfc3RhdGVNYXAyLmRlZmF1bHQ7XG5yZW5kZXJTVkcudmFsdWVUeXBlTWFwID0gX3ZhbHVlVHlwZU1hcDIuZGVmYXVsdDtcblxuZXhwb3J0cy5kZWZhdWx0ID0gcmVuZGVyU1ZHO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluTnlZeTl5Wlc1a1pYSXZjM1puTG1weklsMHNJbTVoYldWeklqcGJYU3dpYldGd2NHbHVaM01pT2lJN096czdPenM3T3pzN096czdPenM3T3pzN08wRkJTMEVzVTBGQlV5eFRRVUZVTEU5QlFXdEVPMUZCUVRkQ0xHMUNRVUUyUWp0UlFVRjBRaXgxUWtGQmMwSTdVVUZCWWl3eVFrRkJZVHM3UVVGRE9VTXNjVUpCUVVzc2NVSkJRVTBzUzBGQlRpeEZRVUZoTEZOQlFXSXNRMEZCVEN4RlFVRTRRaXhWUVVGRExFdEJRVVFzUlVGQlVTeEhRVUZTTzJWQlFXZENMRkZCUVZFc1dVRkJVaXhEUVVGeFFpeEhRVUZ5UWl4RlFVRXdRaXhMUVVFeFFqdExRVUZvUWl4RFFVRTVRaXhEUVVRNFF6dERRVUZzUkRzN1FVRkpRU3hWUVVGVkxFbEJRVllzUjBGQmFVSXNWVUZCUXl4TFFVRkVMRVZCUVZjN1FVRkRlRUlzVVVGQlRTeFBRVUZQTEUxQlFVMHNUMEZCVGl4RFFVRmpMRTlCUVdRc1JVRkJVQ3hEUVVSclFqdEJRVVY0UWl4UlFVRk5MRzFDUVVGdFFpeE5RVUZOTEUxQlFVNHNRMEZCWVN4blFrRkJZaXhIUVVGblF5eE5RVUZOTEUxQlFVNHNRMEZCWVN4blFrRkJZaXhEUVVFNFFpeFBRVUU1UWl4SFFVRjNReXhGUVVGNFJTeERRVVpFTzBGQlIzaENMRkZCUVUwc2JVSkJRVzFDTEUxQlFVMHNUVUZCVGl4RFFVRmhMR2RDUVVGaUxFZEJRV2RETEUxQlFVMHNUVUZCVGl4RFFVRmhMR2RDUVVGaUxFTkJRVGhDTEU5QlFUbENMRWRCUVhkRExFVkJRWGhGTEVOQlNFUTdPMEZCUzNoQ0xGVkJRVTBzVTBGQlRpeEhRVUZyUWp0QlFVTmtMRmRCUVVjc1MwRkJTeXhMUVVGTUxFbEJRV01zYlVKQlFXMUNMRWRCUVc1Q0xFTkJRV1FzUjBGQmQwTXNTMEZCU3l4RFFVRk1PMEZCUXpORExGZEJRVWNzUzBGQlN5eE5RVUZNTEVsQlFXVXNiVUpCUVcxQ0xFZEJRVzVDTEVOQlFXWXNSMEZCZVVNc1MwRkJTeXhEUVVGTU8wdEJSbWhFTEVOQlRIZENPME5CUVZnN08wRkJWMnBDTEZWQlFWVXNVVUZCVmp0QlFVTkJMRlZCUVZVc1dVRkJWanM3YTBKQlJXVWlMQ0ptYVd4bElqb2ljM1puTG1weklpd2ljMjkxY21ObFVtOXZkQ0k2SWk5VmMyVnljeTlOWVhSMEwxTnBkR1Z6TDNCdmNHMXZkR2x2YmlJc0luTnZkWEpqWlhORGIyNTBaVzUwSWpwYkltbHRjRzl5ZENCN0lHVmhZMmdnZlNCbWNtOXRJQ2N1TGk5cGJtTXZkWFJwYkhNbk8xeHVhVzF3YjNKMElITjBZWFJsVFdGd0lHWnliMjBnSnk0dlkzTnpMM04wWVhSbExXMWhjQ2M3WEc1cGJYQnZjblFnZG1Gc2RXVlVlWEJsVFdGd0lHWnliMjBnSnk0dmMzWm5MM1poYkhWbExYUjVjR1V0YldGd0p6dGNibWx0Y0c5eWRDQmlkV2xzWkNCbWNtOXRJQ2N1TDNOMlp5OWlkV2xzWkNjN1hHNWNibVoxYm1OMGFXOXVJSEpsYm1SbGNsTldSeWg3SUhOMFlYUmxMQ0JsYkdWdFpXNTBMQ0J6ZG1kUGNtbG5hVzRnZlNrZ2UxeHVJQ0FnSUdWaFkyZ29ZblZwYkdRb2MzUmhkR1VzSUhOMlowOXlhV2RwYmlrc0lDaDJZV3gxWlN3Z2EyVjVLU0E5UGlCbGJHVnRaVzUwTG5ObGRFRjBkSEpwWW5WMFpTaHJaWGtzSUhaaGJIVmxLU2s3WEc1OVhHNWNibkpsYm1SbGNsTldSeTVwYm1sMElEMGdLR0ZqZEc5eUtTQTlQaUI3WEc0Z0lDQWdZMjl1YzNRZ1lrSnZlQ0E5SUdGamRHOXlMbVZzWlcxbGJuUXVaMlYwUWtKdmVDZ3BPMXh1SUNBZ0lHTnZibk4wSUhSeVlXNXpabTl5YlU5eWFXZHBibGdnUFNCaFkzUnZjaTUyWVd4MVpYTXVkSEpoYm5ObWIzSnRUM0pwWjJsdVdDQS9JR0ZqZEc5eUxuWmhiSFZsY3k1MGNtRnVjMlp2Y20xUGNtbG5hVzVZTG1OMWNuSmxiblFnT2lBMU1EdGNiaUFnSUNCamIyNXpkQ0IwY21GdWMyWnZjbTFQY21sbmFXNVpJRDBnWVdOMGIzSXVkbUZzZFdWekxuUnlZVzV6Wm05eWJVOXlhV2RwYmxrZ1B5QmhZM1J2Y2k1MllXeDFaWE11ZEhKaGJuTm1iM0p0VDNKcFoybHVXUzVqZFhKeVpXNTBJRG9nTlRBN1hHNWNiaUFnSUNCaFkzUnZjaTV6ZG1kUGNtbG5hVzRnUFNCN1hHNGdJQ0FnSUNBZ0lIZzZJR0pDYjNndWQybGtkR2dnS2lBb2RISmhibk5tYjNKdFQzSnBaMmx1V0NBdklERXdNQ2tnS3lCaVFtOTRMbmdzWEc0Z0lDQWdJQ0FnSUhrNklHSkNiM2d1YUdWcFoyaDBJQ29nS0hSeVlXNXpabTl5YlU5eWFXZHBibGtnTHlBeE1EQXBJQ3NnWWtKdmVDNTVYRzRnSUNBZ2ZUdGNibjA3WEc1Y2JuSmxibVJsY2xOV1J5NXpkR0YwWlUxaGNDQTlJSE4wWVhSbFRXRndPMXh1Y21WdVpHVnlVMVpITG5aaGJIVmxWSGx3WlUxaGNDQTlJSFpoYkhWbFZIbHdaVTFoY0R0Y2JseHVaWGh3YjNKMElHUmxabUYxYkhRZ2NtVnVaR1Z5VTFaSE95SmRmUT09XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9yZW5kZXIvc3ZnLmpzXG4gKiogbW9kdWxlIGlkID0gMTBcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF9idWlsZCA9IHJlcXVpcmUoJy4vc3ZnLXBhdGgvYnVpbGQnKTtcblxudmFyIF9idWlsZDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9idWlsZCk7XG5cbnZhciBfc3RhdGVNYXAgPSByZXF1aXJlKCcuL3N2Zy1wYXRoL3N0YXRlLW1hcCcpO1xuXG52YXIgX3N0YXRlTWFwMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3N0YXRlTWFwKTtcblxudmFyIF92YWx1ZVR5cGVNYXAgPSByZXF1aXJlKCcuL3N2Zy92YWx1ZS10eXBlLW1hcCcpO1xuXG52YXIgX3ZhbHVlVHlwZU1hcDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF92YWx1ZVR5cGVNYXApO1xuXG52YXIgX3N2ZyA9IHJlcXVpcmUoJy4vc3ZnJyk7XG5cbnZhciBfc3ZnMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3N2Zyk7XG5cbnZhciBfdXRpbHMgPSByZXF1aXJlKCcuLi9pbmMvdXRpbHMnKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxudmFyIHJlbmRlclNWR1BhdGggPSBmdW5jdGlvbiAoYWN0b3IpIHtcbiAgICAoMCwgX3N2ZzIuZGVmYXVsdCkoYWN0b3IpO1xuICAgICgwLCBfdXRpbHMuZWFjaCkoKDAsIF9idWlsZDIuZGVmYXVsdCkoYWN0b3Iuc3RhdGUsIGFjdG9yLnBhdGhMZW5ndGgpLCBmdW5jdGlvbiAodmFsdWUsIGtleSkge1xuICAgICAgICByZXR1cm4gYWN0b3IuZWxlbWVudC5zZXRBdHRyaWJ1dGUoa2V5LCB2YWx1ZSk7XG4gICAgfSk7XG59O1xuXG5yZW5kZXJTVkdQYXRoLmluaXQgPSBmdW5jdGlvbiAoYWN0b3IpIHtcbiAgICBhY3Rvci5wYXRoTGVuZ3RoID0gYWN0b3IuZWxlbWVudC5nZXRUb3RhbExlbmd0aCgpO1xuICAgIF9zdmcyLmRlZmF1bHQuaW5pdChhY3Rvcik7XG59O1xuXG5yZW5kZXJTVkdQYXRoLnN0YXRlTWFwID0gX3N0YXRlTWFwMi5kZWZhdWx0O1xucmVuZGVyU1ZHUGF0aC52YWx1ZVR5cGVNYXAgPSBfdmFsdWVUeXBlTWFwMi5kZWZhdWx0O1xuXG5leHBvcnRzLmRlZmF1bHQgPSByZW5kZXJTVkdQYXRoO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluTnlZeTl5Wlc1a1pYSXZjM1puTFhCaGRHZ3Vhbk1pWFN3aWJtRnRaWE1pT2x0ZExDSnRZWEJ3YVc1bmN5STZJanM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN08wRkJUVUVzU1VGQlRTeG5Ra0ZCWjBJc1ZVRkJReXhMUVVGRUxFVkJRVmM3UVVGRE4wSXNkVUpCUVZVc1MwRkJWaXhGUVVRMlFqdEJRVVUzUWl4eFFrRkJTeXh4UWtGQlRTeE5RVUZOTEV0QlFVNHNSVUZCWVN4TlFVRk5MRlZCUVU0c1EwRkJlRUlzUlVGQk1rTXNWVUZCUXl4TFFVRkVMRVZCUVZFc1IwRkJVanRsUVVGblFpeE5RVUZOTEU5QlFVNHNRMEZCWXl4WlFVRmtMRU5CUVRKQ0xFZEJRVE5DTEVWQlFXZERMRXRCUVdoRE8wdEJRV2hDTEVOQlFUTkRMRU5CUmpaQ08wTkJRVmc3TzBGQlMzUkNMR05CUVdNc1NVRkJaQ3hIUVVGeFFpeFZRVUZETEV0QlFVUXNSVUZCVnp0QlFVTTFRaXhWUVVGTkxGVkJRVTRzUjBGQmJVSXNUVUZCVFN4UFFVRk9MRU5CUVdNc1kwRkJaQ3hGUVVGdVFpeERRVVEwUWp0QlFVVTFRaXhyUWtGQlZTeEpRVUZXTEVOQlFXVXNTMEZCWml4RlFVWTBRanREUVVGWU96dEJRVXR5UWl4alFVRmpMRkZCUVdRN1FVRkRRU3hqUVVGakxGbEJRV1E3TzJ0Q1FVVmxJaXdpWm1sc1pTSTZJbk4yWnkxd1lYUm9MbXB6SWl3aWMyOTFjbU5sVW05dmRDSTZJaTlWYzJWeWN5OU5ZWFIwTDFOcGRHVnpMM0J2Y0cxdmRHbHZiaUlzSW5OdmRYSmpaWE5EYjI1MFpXNTBJanBiSW1sdGNHOXlkQ0JpZFdsc1pDQm1jbTl0SUNjdUwzTjJaeTF3WVhSb0wySjFhV3hrSnp0Y2JtbHRjRzl5ZENCemRHRjBaVTFoY0NCbWNtOXRJQ2N1TDNOMlp5MXdZWFJvTDNOMFlYUmxMVzFoY0NjN1hHNXBiWEJ2Y25RZ2RtRnNkV1ZVZVhCbFRXRndJR1p5YjIwZ0p5NHZjM1puTDNaaGJIVmxMWFI1Y0dVdGJXRndKenRjYm1sdGNHOXlkQ0J5Wlc1a1pYSlRWa2NnWm5KdmJTQW5MaTl6ZG1jbk8xeHVhVzF3YjNKMElIc2daV0ZqYUNCOUlHWnliMjBnSnk0dUwybHVZeTkxZEdsc2N5YzdYRzVjYm1OdmJuTjBJSEpsYm1SbGNsTldSMUJoZEdnZ1BTQW9ZV04wYjNJcElEMCtJSHRjYmlBZ0lDQnlaVzVrWlhKVFZrY29ZV04wYjNJcE8xeHVJQ0FnSUdWaFkyZ29ZblZwYkdRb1lXTjBiM0l1YzNSaGRHVXNJR0ZqZEc5eUxuQmhkR2hNWlc1bmRHZ3BMQ0FvZG1Gc2RXVXNJR3RsZVNrZ1BUNGdZV04wYjNJdVpXeGxiV1Z1ZEM1elpYUkJkSFJ5YVdKMWRHVW9hMlY1TENCMllXeDFaU2twTzF4dWZUdGNibHh1Y21WdVpHVnlVMVpIVUdGMGFDNXBibWwwSUQwZ0tHRmpkRzl5S1NBOVBpQjdYRzRnSUNBZ1lXTjBiM0l1Y0dGMGFFeGxibWQwYUNBOUlHRmpkRzl5TG1Wc1pXMWxiblF1WjJWMFZHOTBZV3hNWlc1bmRHZ29LVHRjYmlBZ0lDQnlaVzVrWlhKVFZrY3VhVzVwZENoaFkzUnZjaWs3WEc1OU8xeHVYRzV5Wlc1a1pYSlRWa2RRWVhSb0xuTjBZWFJsVFdGd0lEMGdjM1JoZEdWTllYQTdYRzV5Wlc1a1pYSlRWa2RRWVhSb0xuWmhiSFZsVkhsd1pVMWhjQ0E5SUhaaGJIVmxWSGx3WlUxaGNEdGNibHh1Wlhod2IzSjBJR1JsWm1GMWJIUWdjbVZ1WkdWeVUxWkhVR0YwYURzaVhYMD1cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL3JlbmRlci9zdmctcGF0aC5qc1xuICoqIG1vZHVsZSBpZCA9IDExXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfY3JlYXRlRWFzaW5nID0gcmVxdWlyZSgnLi9jcmVhdGUtZWFzaW5nJyk7XG5cbnZhciBfY3JlYXRlRWFzaW5nMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NyZWF0ZUVhc2luZyk7XG5cbnZhciBfY3JlYXRlQmV6aWVyID0gcmVxdWlyZSgnLi9jcmVhdGUtYmV6aWVyJyk7XG5cbnZhciBfY3JlYXRlQmV6aWVyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NyZWF0ZUJlemllcik7XG5cbnZhciBfdXRpbHMgPSByZXF1aXJlKCcuLi8uLi9pbmMvdXRpbHMnKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuLy8gVmFsdWVzXG52YXIgREVGQVVMVF9CQUNLX1NUUkVOR1RIID0gMS41MjU7IC8qXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBFYXNpbmcgZnVuY3Rpb25zXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEdlbmVyYXRlcyBhbmQgcHJvdmlkZXMgZWFzaW5nIGZ1bmN0aW9ucyBiYXNlZCBvbiBiYXNlRnVuY3Rpb24gZGVmaW5pdGlvbnNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQSBjYWxsIHRvIGVhc2luZ0Z1bmN0aW9uLmdldCgnZnVuY3Rpb25OYW1lJykgcmV0dXJucyBhIGZ1bmN0aW9uIHRoYXQgY2FuIGJlIHBhc3NlZDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBAcGFyYW0gW251bWJlcl06IFByb2dyZXNzIDAtMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEBwYXJhbSBbbnVtYmVyXSAob3B0aW9uYWwpOiBBbXAgbW9kaWZpZXIsIG9ubHkgYWNjZXB0ZWQgaW4gc29tZSBlYXNpbmcgZnVuY3Rpb25zXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFuZCBpcyB1c2VkIHRvIGFkanVzdCBvdmVyYWxsIHN0cmVuZ3RoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQHJldHVybiBbbnVtYmVyXTogRWFzZWQgcHJvZ3Jlc3NcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFdlIGNhbiBnZW5lcmF0ZSBuZXcgZnVuY3Rpb25zIGJ5IHNlbmRpbmcgYW4gZWFzaW5nIGZ1bmN0aW9uIHRocm91Z2ggZWFzaW5nRnVuY3Rpb24uZXh0ZW5kKG5hbWUsIG1ldGhvZCkuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBXaGljaCB3aWxsIG1ha2UgbmFtZUluLCBuYW1lT3V0IGFuZCBuYW1lSW5PdXQgZnVuY3Rpb25zIGF2YWlsYWJsZSB0byB1c2UuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBFYXNpbmcgZnVuY3Rpb25zIGZyb20gUm9iZXJ0IFBlbm5lclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaHR0cDovL3d3dy5yb2JlcnRwZW5uZXIuY29tL2Vhc2luZy9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEJlemllciBjdXJ2ZSBpbnRlcnByZXRvciBjcmVhdGVkIGZyb20gR2HDq3RhbiBSZW5hdWRlYXUncyBvcmlnaW5hbCBCZXppZXJFYXNpbmcgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaHR0cHM6Ly9naXRodWIuY29tL2dyZS9iZXppZXItZWFzaW5nL2Jsb2IvbWFzdGVyL2luZGV4LmpzICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGh0dHBzOi8vZ2l0aHViLmNvbS9ncmUvYmV6aWVyLWVhc2luZy9ibG9iL21hc3Rlci9MSUNFTlNFXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQW50aWNpcGF0ZSBlYXNpbmcgY3JlYXRlZCBieSBFbGxpb3QgR2lub1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaHR0cHM6Ly90d2l0dGVyLmNvbS9FbGxpb3RHZW5vXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICovXG4vLyBJbXBvcnRzXG5cbnZhciBERUZBVUxUX1BPV19TVFJFTkdUSCA9IDI7XG5cbi8qXG4gICAgRWFjaCBvZiB0aGVzZSBiYXNlIGZ1bmN0aW9ucyBpcyBhbiBlYXNlSW5cbiAgICBcbiAgICBPbiBpbml0LCB3ZSB1c2UgLm1pcnJvciBhbmQgLnJldmVyc2UgdG8gZ2VuZXJhdGUgZWFzZUluT3V0IGFuZFxuICAgIGVhc2VPdXQgZnVuY3Rpb25zIHJlc3BlY3RpdmVseS5cbiovXG52YXIgYmFzZUVhc2luZyA9IHtcbiAgICBlYXNlOiBmdW5jdGlvbiAocHJvZ3Jlc3MpIHtcbiAgICAgICAgdmFyIHN0cmVuZ3RoID0gYXJndW1lbnRzLmxlbmd0aCA8PSAxIHx8IGFyZ3VtZW50c1sxXSA9PT0gdW5kZWZpbmVkID8gREVGQVVMVF9QT1dfU1RSRU5HVEggOiBhcmd1bWVudHNbMV07XG4gICAgICAgIHJldHVybiBNYXRoLnBvdyhwcm9ncmVzcywgc3RyZW5ndGgpO1xuICAgIH0sXG4gICAgY2lyYzogZnVuY3Rpb24gKHByb2dyZXNzKSB7XG4gICAgICAgIHJldHVybiAxIC0gTWF0aC5zaW4oTWF0aC5hY29zKHByb2dyZXNzKSk7XG4gICAgfSxcbiAgICBiYWNrOiBmdW5jdGlvbiAocHJvZ3Jlc3MpIHtcbiAgICAgICAgdmFyIHN0cmVuZ3RoID0gYXJndW1lbnRzLmxlbmd0aCA8PSAxIHx8IGFyZ3VtZW50c1sxXSA9PT0gdW5kZWZpbmVkID8gREVGQVVMVF9CQUNLX1NUUkVOR1RIIDogYXJndW1lbnRzWzFdO1xuICAgICAgICByZXR1cm4gcHJvZ3Jlc3MgKiBwcm9ncmVzcyAqICgoc3RyZW5ndGggKyAxKSAqIHByb2dyZXNzIC0gc3RyZW5ndGgpO1xuICAgIH1cbn07XG5cbi8vIFV0aWxpdHkgZnVuY3Rpb25zXG52YXIgZ2VuZXJhdGVQb3dlckVhc2luZyA9IGZ1bmN0aW9uIChzdHJlbmd0aCkge1xuICAgIHJldHVybiBmdW5jdGlvbiAocHJvZ3Jlc3MpIHtcbiAgICAgICAgcmV0dXJuIGJhc2VFYXNpbmcuZWFzZShwcm9ncmVzcywgc3RyZW5ndGgpO1xuICAgIH07XG59O1xuXG5bJ2N1YmljJywgJ3F1YXJ0JywgJ3F1aW50J10uZm9yRWFjaChmdW5jdGlvbiAoZWFzaW5nTmFtZSwgaSkge1xuICAgIHJldHVybiBiYXNlRWFzaW5nW2Vhc2luZ05hbWVdID0gZ2VuZXJhdGVQb3dlckVhc2luZyhpICsgMyk7XG59KTtcblxuLy8gR2VuZXJhdGUgaW4vb3V0L2luT3V0IHZhcmlhdGlvbnNcbigwLCBfdXRpbHMuZWFjaCkoYmFzZUVhc2luZywgZnVuY3Rpb24gKGJhc2VFYXNlLCBrZXkpIHtcbiAgICB2YXIgZWFzaW5nRnVuY3Rpb24gPSAoMCwgX2NyZWF0ZUVhc2luZzIuZGVmYXVsdCkoYmFzZUVhc2UpO1xuICAgIGJhc2VFYXNpbmdba2V5ICsgJ0luJ10gPSBlYXNpbmdGdW5jdGlvbi5pbjtcbiAgICBiYXNlRWFzaW5nW2tleSArICdPdXQnXSA9IGVhc2luZ0Z1bmN0aW9uLm91dDtcbiAgICBiYXNlRWFzaW5nW2tleSArICdJbk91dCddID0gZWFzaW5nRnVuY3Rpb24uaW5PdXQ7XG59KTtcblxuYmFzZUVhc2luZy5saW5lYXIgPSBmdW5jdGlvbiAocHJvZ3Jlc3MpIHtcbiAgICByZXR1cm4gcHJvZ3Jlc3M7XG59O1xuYmFzZUVhc2luZy5hbnRpY2lwYXRlID0gZnVuY3Rpb24gKHByb2dyZXNzKSB7XG4gICAgdmFyIHN0cmVuZ3RoID0gYXJndW1lbnRzLmxlbmd0aCA8PSAxIHx8IGFyZ3VtZW50c1sxXSA9PT0gdW5kZWZpbmVkID8gREVGQVVMVF9CQUNLX1NUUkVOR1RIIDogYXJndW1lbnRzWzFdO1xuICAgIHJldHVybiAocHJvZ3Jlc3MgKj0gMikgPCAxID8gMC41ICogYmFzZUVhc2luZy5iYWNrSW4ocHJvZ3Jlc3MsIHN0cmVuZ3RoKSA6IDAuNSAqICgyIC0gTWF0aC5wb3coMiwgLTEwICogKHByb2dyZXNzIC0gMSkpKTtcbn07XG5cbmJhc2VFYXNpbmcuZWFzaW5nRnVuY3Rpb24gPSBfY3JlYXRlRWFzaW5nMi5kZWZhdWx0O1xuYmFzZUVhc2luZy5jdWJpY0JlemllciA9IF9jcmVhdGVCZXppZXIyLmRlZmF1bHQ7XG5iYXNlRWFzaW5nLm1vZGlmeUVhc2UgPSBmdW5jdGlvbiAoZWFzaW5nKSB7XG4gICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBBcnJheShfbGVuID4gMSA/IF9sZW4gLSAxIDogMCksIF9rZXkgPSAxOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICAgIGFyZ3NbX2tleSAtIDFdID0gYXJndW1lbnRzW19rZXldO1xuICAgIH1cblxuICAgIHJldHVybiBmdW5jdGlvbiAocHJvZ3Jlc3MpIHtcbiAgICAgICAgcmV0dXJuIGVhc2luZy5hcHBseSh1bmRlZmluZWQsIFtwcm9ncmVzc10uY29uY2F0KGFyZ3MpKTtcbiAgICB9O1xufTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gYmFzZUVhc2luZztcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbk55WXk5aFkzUnBiMjV6TDJWaGMybHVaeTl3Y21WelpYUXRaV0Z6YVc1bkxtcHpJbDBzSW01aGJXVnpJanBiWFN3aWJXRndjR2x1WjNNaU9pSTdPenM3T3pzN096czdPenM3T3pzN08wRkJLMEpCTEVsQlFVMHNkMEpCUVhkQ0xFdEJRWGhDT3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3UVVGRFRpeEpRVUZOTEhWQ1FVRjFRaXhEUVVGMlFqczdPenM3T3pzN1FVRlJUaXhKUVVGSkxHRkJRV0U3UVVGRFlpeFZRVUZOTEZWQlFVTXNVVUZCUkR0WlFVRlhMR2xGUVVGWE8zZENRVUY1UWl4VlFVRlpPMHRCUVRORU8wRkJRMDRzVlVGQlRUdGxRVUZaTEVsQlFVa3NTMEZCU3l4SFFVRk1MRU5CUVZNc1MwRkJTeXhKUVVGTUxFTkJRVlVzVVVGQlZpeERRVUZVTEVOQlFVbzdTMEZCV2p0QlFVTk9MRlZCUVUwc1ZVRkJReXhSUVVGRU8xbEJRVmNzYVVWQlFWYzdaVUZCTUVJc1VVRkJReXhIUVVGWExGRkJRVmdzU1VGQmQwSXNRMEZCUXl4WFFVRlhMRU5CUVZnc1EwRkJSQ3hIUVVGcFFpeFJRVUZxUWl4SFFVRTBRaXhSUVVFMVFpeERRVUY2UWp0TFFVRm9SRHREUVVoT096czdRVUZQU2l4SlFVRk5MSE5DUVVGelFpeFZRVUZETEZGQlFVUTdWMEZCWXl4VlFVRkRMRkZCUVVRN1pVRkJZeXhYUVVGWExFbEJRVmdzUTBGQlowSXNVVUZCYUVJc1JVRkJNRUlzVVVGQk1VSTdTMEZCWkR0RFFVRmtPenRCUVVVMVFpeERRVUZETEU5QlFVUXNSVUZCVlN4UFFVRldMRVZCUVcxQ0xFOUJRVzVDTEVWQlFUUkNMRTlCUVRWQ0xFTkJRVzlETEZWQlFVTXNWVUZCUkN4RlFVRmhMRU5CUVdJN1YwRkJiVUlzVjBGQlZ5eFZRVUZZTEVsQlFYbENMRzlDUVVGdlFpeEpRVUZKTEVOQlFVb3NRMEZCTjBNN1EwRkJia0lzUTBGQmNFTTdPenRCUVVkQkxHbENRVUZMTEZWQlFVd3NSVUZCYVVJc1ZVRkJReXhSUVVGRUxFVkJRVmNzUjBGQldDeEZRVUZ0UWp0QlFVTm9ReXhSUVVGSkxHbENRVUZwUWl3MFFrRkJjVUlzVVVGQmNrSXNRMEZCYWtJc1EwRkVORUk3UVVGRmFFTXNaVUZCWXl4VlFVRmtMRWxCUVhsQ0xHVkJRV1VzUlVGQlppeERRVVpQTzBGQlIyaERMR1ZCUVdNc1YwRkJaQ3hKUVVFd1FpeGxRVUZsTEVkQlFXWXNRMEZJVFR0QlFVbG9ReXhsUVVGakxHRkJRV1FzU1VGQk5FSXNaVUZCWlN4TFFVRm1MRU5CU2trN1EwRkJia0lzUTBGQmFrSTdPMEZCVDBFc1YwRkJWeXhOUVVGWUxFZEJRVzlDTzFkQlFWazdRMEZCV2p0QlFVTndRaXhYUVVGWExGVkJRVmdzUjBGQmQwSXNWVUZCUXl4UlFVRkVPMUZCUVZjc2FVVkJRVmM3VjBGRE1VTXNRMEZCUlN4WlFVRlZMRU5CUVZZc1EwRkJSQ3hIUVVGblFpeERRVUZvUWl4SFFVRnhRaXhOUVVGTkxGZEJRVmNzVFVGQldDeERRVUZyUWl4UlFVRnNRaXhGUVVFMFFpeFJRVUUxUWl4RFFVRk9MRWRCUVN0RExFOUJRVThzU1VGQlNTeExRVUZMTEVkQlFVd3NRMEZCVXl4RFFVRlVMRVZCUVZrc1EwRkJReXhGUVVGRUxFbEJRVThzVjBGQlZ5eERRVUZZTEVOQlFWQXNRMEZCYUVJc1EwRkJVRHREUVVScVJEczdRVUZIZUVJc1YwRkJWeXhqUVVGWU8wRkJRMEVzVjBGQlZ5eFhRVUZZTzBGQlEwRXNWMEZCVnl4VlFVRllMRWRCUVhkQ0xGVkJRVU1zVFVGQlJEdHpRMEZCV1RzN096dFhRVUZUTEZWQlFVTXNVVUZCUkR0bFFVRmpMSGxDUVVGUExHbENRVUZoTEV0QlFYQkNPMHRCUVdRN1EwRkJja0k3TzJ0Q1FVVlVJaXdpWm1sc1pTSTZJbkJ5WlhObGRDMWxZWE5wYm1jdWFuTWlMQ0p6YjNWeVkyVlNiMjkwSWpvaUwxVnpaWEp6TDAxaGRIUXZVMmwwWlhNdmNHOXdiVzkwYVc5dUlpd2ljMjkxY21ObGMwTnZiblJsYm5RaU9sc2lMeXBjYmlBZ0lDQkZZWE5wYm1jZ1puVnVZM1JwYjI1elhHNGdJQ0FnTFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExWeHVJQ0FnSUZ4dUlDQWdJRWRsYm1WeVlYUmxjeUJoYm1RZ2NISnZkbWxrWlhNZ1pXRnphVzVuSUdaMWJtTjBhVzl1Y3lCaVlYTmxaQ0J2YmlCaVlYTmxSblZ1WTNScGIyNGdaR1ZtYVc1cGRHbHZibk5jYmlBZ0lDQmNiaUFnSUNCQklHTmhiR3dnZEc4Z1pXRnphVzVuUm5WdVkzUnBiMjR1WjJWMEtDZG1kVzVqZEdsdmJrNWhiV1VuS1NCeVpYUjFjbTV6SUdFZ1puVnVZM1JwYjI0Z2RHaGhkQ0JqWVc0Z1ltVWdjR0Z6YzJWa09seHVJQ0FnSUNBZ0lDQkFjR0Z5WVcwZ1cyNTFiV0psY2wwNklGQnliMmR5WlhOeklEQXRNVnh1SUNBZ0lDQWdJQ0JBY0dGeVlXMGdXMjUxYldKbGNsMGdLRzl3ZEdsdmJtRnNLVG9nUVcxd0lHMXZaR2xtYVdWeUxDQnZibXg1SUdGalkyVndkR1ZrSUdsdUlITnZiV1VnWldGemFXNW5JR1oxYm1OMGFXOXVjMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnWVc1a0lHbHpJSFZ6WldRZ2RHOGdZV1JxZFhOMElHOTJaWEpoYkd3Z2MzUnlaVzVuZEdoY2JpQWdJQ0FnSUNBZ1FISmxkSFZ5YmlCYmJuVnRZbVZ5WFRvZ1JXRnpaV1FnY0hKdlozSmxjM05jYmlBZ0lDQWdJQ0FnWEc0Z0lDQWdWMlVnWTJGdUlHZGxibVZ5WVhSbElHNWxkeUJtZFc1amRHbHZibk1nWW5rZ2MyVnVaR2x1WnlCaGJpQmxZWE5wYm1jZ1puVnVZM1JwYjI0Z2RHaHliM1ZuYUNCbFlYTnBibWRHZFc1amRHbHZiaTVsZUhSbGJtUW9ibUZ0WlN3Z2JXVjBhRzlrS1M1Y2JpQWdJQ0JYYUdsamFDQjNhV3hzSUcxaGEyVWdibUZ0WlVsdUxDQnVZVzFsVDNWMElHRnVaQ0J1WVcxbFNXNVBkWFFnWm5WdVkzUnBiMjV6SUdGMllXbHNZV0pzWlNCMGJ5QjFjMlV1WEc0Z0lDQWdJQ0FnSUZ4dUlDQWdJRVZoYzJsdVp5Qm1kVzVqZEdsdmJuTWdabkp2YlNCU2IySmxjblFnVUdWdWJtVnlYRzRnSUNBZ2FIUjBjRG92TDNkM2R5NXliMkpsY25Sd1pXNXVaWEl1WTI5dEwyVmhjMmx1Wnk5Y2JpQWdJQ0FnSUNBZ1hHNGdJQ0FnUW1WNmFXVnlJR04xY25abElHbHVkR1Z5Y0hKbGRHOXlJR055WldGMFpXUWdabkp2YlNCSFljT3JkR0Z1SUZKbGJtRjFaR1ZoZFNkeklHOXlhV2RwYm1Gc0lFSmxlbWxsY2tWaGMybHVaeUFnWEc0Z0lDQWdhSFIwY0hNNkx5OW5hWFJvZFdJdVkyOXRMMmR5WlM5aVpYcHBaWEl0WldGemFXNW5MMkpzYjJJdmJXRnpkR1Z5TDJsdVpHVjRMbXB6SUNCY2JpQWdJQ0JvZEhSd2N6b3ZMMmRwZEdoMVlpNWpiMjB2WjNKbEwySmxlbWxsY2kxbFlYTnBibWN2WW14dllpOXRZWE4wWlhJdlRFbERSVTVUUlZ4dVhHNGdJQ0FnUVc1MGFXTnBjR0YwWlNCbFlYTnBibWNnWTNKbFlYUmxaQ0JpZVNCRmJHeHBiM1FnUjJsdWIxeHVJQ0FnSUdoMGRIQnpPaTh2ZEhkcGRIUmxjaTVqYjIwdlJXeHNhVzkwUjJWdWIxeHVLaTljYmk4dklFbHRjRzl5ZEhOY2JtbHRjRzl5ZENCamNtVmhkR1ZGWVhOcGJtZEdkVzVqZEdsdmJpQm1jbTl0SUNjdUwyTnlaV0YwWlMxbFlYTnBibWNuTzF4dWFXMXdiM0owSUdOMVltbGpRbVY2YVdWeUlHWnliMjBnSnk0dlkzSmxZWFJsTFdKbGVtbGxjaWM3WEc1cGJYQnZjblFnZXlCbFlXTm9JSDBnWm5KdmJTQW5MaTR2TGk0dmFXNWpMM1YwYVd4ekp6dGNibHh1THk4Z1ZtRnNkV1Z6WEc1amIyNXpkQ0JFUlVaQlZVeFVYMEpCUTB0ZlUxUlNSVTVIVkVnZ1BTQXhMalV5TlR0Y2JtTnZibk4wSUVSRlJrRlZURlJmVUU5WFgxTlVVa1ZPUjFSSUlEMGdNanRjYmx4dUx5cGNiaUFnSUNCRllXTm9JRzltSUhSb1pYTmxJR0poYzJVZ1puVnVZM1JwYjI1eklHbHpJR0Z1SUdWaGMyVkpibHh1SUNBZ0lGeHVJQ0FnSUU5dUlHbHVhWFFzSUhkbElIVnpaU0F1YldseWNtOXlJR0Z1WkNBdWNtVjJaWEp6WlNCMGJ5Qm5aVzVsY21GMFpTQmxZWE5sU1c1UGRYUWdZVzVrWEc0Z0lDQWdaV0Z6WlU5MWRDQm1kVzVqZEdsdmJuTWdjbVZ6Y0dWamRHbDJaV3g1TGx4dUtpOWNibXhsZENCaVlYTmxSV0Z6YVc1bklEMGdlMXh1SUNBZ0lHVmhjMlU2SUNod2NtOW5jbVZ6Y3l3Z2MzUnlaVzVuZEdnZ1BTQkVSVVpCVlV4VVgxQlBWMTlUVkZKRlRrZFVTQ2tnUFQ0Z2NISnZaM0psYzNNZ0tpb2djM1J5Wlc1bmRHZ3NYRzRnSUNBZ1kybHlZem9nY0hKdlozSmxjM01nUFQ0Z01TQXRJRTFoZEdndWMybHVLRTFoZEdndVlXTnZjeWh3Y205bmNtVnpjeWtwTEZ4dUlDQWdJR0poWTJzNklDaHdjbTluY21WemN5d2djM1J5Wlc1bmRHZ2dQU0JFUlVaQlZVeFVYMEpCUTB0ZlUxUlNSVTVIVkVncElEMCtJQ2h3Y205bmNtVnpjeUFxSUhCeWIyZHlaWE56S1NBcUlDZ29jM1J5Wlc1bmRHZ2dLeUF4S1NBcUlIQnliMmR5WlhOeklDMGdjM1J5Wlc1bmRHZ3BYRzU5TzF4dVhHNHZMeUJWZEdsc2FYUjVJR1oxYm1OMGFXOXVjMXh1WTI5dWMzUWdaMlZ1WlhKaGRHVlFiM2RsY2tWaGMybHVaeUE5SUNoemRISmxibWQwYUNrZ1BUNGdLSEJ5YjJkeVpYTnpLU0E5UGlCaVlYTmxSV0Z6YVc1bkxtVmhjMlVvY0hKdlozSmxjM01zSUhOMGNtVnVaM1JvS1R0Y2JseHVXeWRqZFdKcFl5Y3NJQ2R4ZFdGeWRDY3NJQ2R4ZFdsdWRDZGRMbVp2Y2tWaFkyZ29LR1ZoYzJsdVowNWhiV1VzSUdrcElEMCtJR0poYzJWRllYTnBibWRiWldGemFXNW5UbUZ0WlYwZ1BTQm5aVzVsY21GMFpWQnZkMlZ5UldGemFXNW5LR2tnS3lBektTazdYRzVjYmk4dklFZGxibVZ5WVhSbElHbHVMMjkxZEM5cGJrOTFkQ0IyWVhKcFlYUnBiMjV6WEc1bFlXTm9LR0poYzJWRllYTnBibWNzSUNoaVlYTmxSV0Z6WlN3Z2EyVjVLU0E5UGlCN1hHNGdJQ0FnYkdWMElHVmhjMmx1WjBaMWJtTjBhVzl1SUQwZ1kzSmxZWFJsUldGemFXNW5SblZ1WTNScGIyNG9ZbUZ6WlVWaGMyVXBPMXh1SUNBZ0lHSmhjMlZGWVhOcGJtZGJZQ1I3YTJWNWZVbHVZRjBnUFNCbFlYTnBibWRHZFc1amRHbHZiaTVwYmp0Y2JpQWdJQ0JpWVhObFJXRnphVzVuVzJBa2UydGxlWDFQZFhSZ1hTQTlJR1ZoYzJsdVowWjFibU4wYVc5dUxtOTFkRHRjYmlBZ0lDQmlZWE5sUldGemFXNW5XMkFrZTJ0bGVYMUpiazkxZEdCZElEMGdaV0Z6YVc1blJuVnVZM1JwYjI0dWFXNVBkWFE3WEc1OUtUdGNibHh1WW1GelpVVmhjMmx1Wnk1c2FXNWxZWElnUFNCd2NtOW5jbVZ6Y3lBOVBpQndjbTluY21WemN6dGNibUpoYzJWRllYTnBibWN1WVc1MGFXTnBjR0YwWlNBOUlDaHdjbTluY21WemN5d2djM1J5Wlc1bmRHZ2dQU0JFUlVaQlZVeFVYMEpCUTB0ZlUxUlNSVTVIVkVncElEMCtYRzRnSUNBZ0tDaHdjbTluY21WemN5bzlNaWtnUENBeEtTQS9JREF1TlNBcUlHSmhjMlZGWVhOcGJtY3VZbUZqYTBsdUtIQnliMmR5WlhOekxDQnpkSEpsYm1kMGFDa2dPaUFnTUM0MUlDb2dLRElnTFNCTllYUm9MbkJ2ZHlneUxDQXRNVEFnS2lBb2NISnZaM0psYzNNZ0xTQXhLU2twTzF4dVhHNWlZWE5sUldGemFXNW5MbVZoYzJsdVowWjFibU4wYVc5dUlEMGdZM0psWVhSbFJXRnphVzVuUm5WdVkzUnBiMjQ3WEc1aVlYTmxSV0Z6YVc1bkxtTjFZbWxqUW1WNmFXVnlJRDBnWTNWaWFXTkNaWHBwWlhJN1hHNWlZWE5sUldGemFXNW5MbTF2WkdsbWVVVmhjMlVnUFNBb1pXRnphVzVuTENBdUxpNWhjbWR6S1NBOVBpQW9jSEp2WjNKbGMzTXBJRDArSUdWaGMybHVaeWh3Y205bmNtVnpjeXdnTGk0dVlYSm5jeWs3WEc1Y2JtVjRjRzl5ZENCa1pXWmhkV3gwSUdKaGMyVkZZWE5wYm1jN0lsMTlcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2FjdGlvbnMvZWFzaW5nL3ByZXNldC1lYXNpbmcuanNcbiAqKiBtb2R1bGUgaWQgPSAxMlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0cy5zdGVwUHJvZ3Jlc3MgPSBleHBvcnRzLnNwZWVkUGVyU2Vjb25kID0gZXhwb3J0cy5zcGVlZFBlckZyYW1lID0gZXhwb3J0cy5zbW9vdGggPSBleHBvcnRzLnJlc3RyaWN0ID0gZXhwb3J0cy5yZWxhdGl2ZVZhbHVlID0gZXhwb3J0cy5yYW5kb20gPSBleHBvcnRzLnJhZGlhbnNUb0RlZ3JlZXMgPSBleHBvcnRzLnBvaW50RnJvbUFuZ2xlQW5kRGlzdGFuY2UgPSBleHBvcnRzLm9mZnNldCA9IGV4cG9ydHMuZ2V0UHJvZ3Jlc3NGcm9tVmFsdWUgPSBleHBvcnRzLmdldFZhbHVlRnJvbVByb2dyZXNzID0gZXhwb3J0cy5oeXBvdGVudXNlID0gZXhwb3J0cy5kaXN0YW5jZSA9IGV4cG9ydHMuZGlsYXRlID0gZXhwb3J0cy5kZWdyZWVzVG9SYWRpYW5zID0gZXhwb3J0cy5hbmdsZSA9IHVuZGVmaW5lZDtcblxudmFyIF91dGlscyA9IHJlcXVpcmUoJy4vdXRpbHMnKTtcblxudmFyIFpFUk9fUE9JTlQgPSB7XG4gICAgeDogMCxcbiAgICB5OiAwLFxuICAgIHo6IDBcbn07XG5cbnZhciBkaXN0YW5jZTFEID0gZnVuY3Rpb24gKGEsIGIpIHtcbiAgICByZXR1cm4gTWF0aC5hYnMoYSAtIGIpO1xufTtcblxuLypcbiAgICBBbmdsZSBiZXR3ZWVuIHBvaW50c1xuICAgIFxuICAgIFRyYW5zbGF0ZXMgdGhlIGh5cG90aGV0aWNhbCBsaW5lIHNvIHRoYXQgdGhlICdmcm9tJyBjb29yZGluYXRlc1xuICAgIGFyZSBhdCAwLDAsIHRoZW4gcmV0dXJuIHRoZSBhbmdsZSB1c2luZyAuYW5nbGVGcm9tQ2VudGVyKClcbiAgICBcbiAgICBAcGFyYW0gW29iamVjdF06IFggYW5kIFkgY29vcmRpbmF0ZXMgb2YgZnJvbSBwb2ludFxuICAgIEBwYXJhbSBbb2JqZWN0XTogWCBhbmQgWSBjb3JkaW5hdGVzIG9mIHRvIHBvaW50XG4gICAgQHJldHVybiBbcmFkaWFuXTogQW5nbGUgYmV0d2VlbiB0aGUgdHdvIHBvaW50cyBpbiByYWRpYW5zXG4qL1xudmFyIGFuZ2xlID0gZXhwb3J0cy5hbmdsZSA9IGZ1bmN0aW9uIChhKSB7XG4gICAgdmFyIGIgPSBhcmd1bWVudHMubGVuZ3RoIDw9IDEgfHwgYXJndW1lbnRzWzFdID09PSB1bmRlZmluZWQgPyBaRVJPX1BPSU5UIDogYXJndW1lbnRzWzFdO1xuICAgIHJldHVybiByYWRpYW5zVG9EZWdyZWVzKE1hdGguYXRhbjIoYS54IC0gYi54LCBhLnkgLSBiLnkpKTtcbn07XG5cbi8qXG4gICAgQ29udmVydCBkZWdyZWVzIHRvIHJhZGlhbnNcbiAgICBcbiAgICBAcGFyYW0gW251bWJlcl06IFZhbHVlIGluIGRlZ3JlZXNcbiAgICBAcmV0dXJuIFtudW1iZXJdOiBWYWx1ZSBpbiByYWRpYW5zXG4qL1xudmFyIGRlZ3JlZXNUb1JhZGlhbnMgPSBleHBvcnRzLmRlZ3JlZXNUb1JhZGlhbnMgPSBmdW5jdGlvbiAoZGVncmVlcykge1xuICAgIHJldHVybiBkZWdyZWVzICogTWF0aC5QSSAvIDE4MDtcbn07XG5cbi8qXG4gICAgRGlsYXRlXG4gICAgXG4gICAgQ2hhbmdlIHRoZSBwcm9ncmVzc2lvbiBiZXR3ZWVuIGEgYW5kIGIgYWNjb3JkaW5nIHRvIGRpbGF0aW9uLlxuICAgIFxuICAgIFNvIGRpbGF0aW9uID0gMC41IHdvdWxkIGNoYW5nZVxuICAgIFxuICAgIGEgLS0tLS0tLS0tIGJcbiAgICBcbiAgICB0b1xuICAgIFxuICAgIGEgLS0tLSBiXG4gICAgXG4gICAgQHBhcmFtIFtudW1iZXJdOiBQcmV2aW91cyB2YWx1ZVxuICAgIEBwYXJhbSBbbnVtYmVyXTogQ3VycmVudCB2YWx1ZVxuICAgIEBwYXJhbSBbbnVtYmVyXTogRGlsYXRlIHByb2dyZXNzIGJ5IHhcbiAgICBAcmV0dXJuIFtudW1iZXJdOiBQcmV2aW91cyB2YWx1ZSBwbHVzIHRoZSBkaWxhdGVkIGRpZmZlcmVuY2VcbiovXG52YXIgZGlsYXRlID0gZXhwb3J0cy5kaWxhdGUgPSBmdW5jdGlvbiAoYSwgYiwgZGlsYXRpb24pIHtcbiAgICByZXR1cm4gYSArIChiIC0gYSkgKiBkaWxhdGlvbjtcbn07XG5cbi8qXG4gICAgRGlzdGFuY2VcbiAgICBcbiAgICBSZXR1cm5zIHRoZSBkaXN0YW5jZSBiZXR3ZWVuIHR3byBuIGRpbWVuc2lvbmFsIHBvaW50cy5cbiAgICBcbiAgICBAcGFyYW0gW29iamVjdC9udW1iZXJdOiB4IGFuZCB5IG9yIGp1c3QgeCBvZiBwb2ludCBBXG4gICAgQHBhcmFtIFtvYmplY3QvbnVtYmVyXTogKG9wdGlvbmFsKTogeCBhbmQgeSBvciBqdXN0IHggb2YgcG9pbnQgQlxuICAgIEByZXR1cm4gW251bWJlcl06IFRoZSBkaXN0YW5jZSBiZXR3ZWVuIHRoZSB0d28gcG9pbnRzXG4qL1xudmFyIGRpc3RhbmNlID0gZXhwb3J0cy5kaXN0YW5jZSA9IGZ1bmN0aW9uIChhKSB7XG4gICAgdmFyIGIgPSBhcmd1bWVudHMubGVuZ3RoIDw9IDEgfHwgYXJndW1lbnRzWzFdID09PSB1bmRlZmluZWQgPyBaRVJPX1BPSU5UIDogYXJndW1lbnRzWzFdO1xuXG4gICAgLy8gMUQgZGltZW5zaW9uc1xuICAgIGlmICgoMCwgX3V0aWxzLmlzTnVtKShhKSkge1xuICAgICAgICByZXR1cm4gZGlzdGFuY2UxRChhLCBiKTtcblxuICAgICAgICAvLyBNdWx0aS1kaW1lbnNpb25hbFxuICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB2YXIgeERlbHRhID0gZGlzdGFuY2UxRChhLngsIGIueCk7XG4gICAgICAgICAgICB2YXIgeURlbHRhID0gZGlzdGFuY2UxRChhLnksIGIueSk7XG4gICAgICAgICAgICB2YXIgekRlbHRhID0gKDAsIF91dGlscy5pc051bSkoYS56KSA/IGRpc3RhbmNlMUQoYS56LCBiLnopIDogMDtcblxuICAgICAgICAgICAgcmV0dXJuIE1hdGguc3FydChNYXRoLnBvdyh4RGVsdGEsIDIpICsgTWF0aC5wb3coeURlbHRhLCAyKSArIE1hdGgucG93KHpEZWx0YSwgMikpO1xuICAgICAgICB9XG59O1xuXG4vKlxuICAgIEh5cG90ZW51c2VcbiAgICBcbiAgICBSZXR1cm5zIHRoZSBoeXBvdGVudXNlLCBzaWRlIEMsIGdpdmVuIHRoZSBsZW5ndGhzIG9mIHNpZGVzIEEgYW5kIEIuXG4gICAgXG4gICAgQHBhcmFtIFtudW1iZXJdOiBMZW5ndGggb2YgQVxuICAgIEBwYXJhbSBbbnVtYmVyXTogTGVuZ3RoIG9mIEJcbiAgICBAcmV0dXJuIFtudW1iZXJdOiBMZW5ndGggb2YgQ1xuKi9cbnZhciBoeXBvdGVudXNlID0gZXhwb3J0cy5oeXBvdGVudXNlID0gZnVuY3Rpb24gKGEsIGIpIHtcbiAgICByZXR1cm4gTWF0aC5zcXJ0KGEgKiBhICsgYiAqIGIpO1xufTtcblxuLypcbiAgICBWYWx1ZSBpbiByYW5nZSBmcm9tIHByb2dyZXNzXG4gICAgXG4gICAgR2l2ZW4gYSBsb3dlciBsaW1pdCBhbmQgYW4gdXBwZXIgbGltaXQsIHdlIHJldHVybiB0aGUgdmFsdWUgd2l0aGluXG4gICAgdGhhdCByYW5nZSBhcyBleHByZXNzZWQgYnkgcHJvZ3Jlc3MgKGEgbnVtYmVyIGZyb20gMC0xKVxuICAgIFxuICAgIEBwYXJhbSBbbnVtYmVyXTogVGhlIHByb2dyZXNzIGJldHdlZW4gbG93ZXIgYW5kIHVwcGVyIGxpbWl0cyBleHByZXNzZWQgMC0xXG4gICAgQHBhcmFtIFtudW1iZXJdOiBMb3dlciBsaW1pdCBvZiByYW5nZVxuICAgIEBwYXJhbSBbbnVtYmVyXTogVXBwZXIgbGltaXQgb2YgcmFuZ2VcbiAgICBAcmV0dXJuIFtudW1iZXJdOiBWYWx1ZSBhcyBjYWxjdWxhdGVkIGZyb20gcHJvZ3Jlc3Mgd2l0aGluIHJhbmdlIChub3QgbGltaXRlZCB3aXRoaW4gcmFuZ2UpXG4qL1xudmFyIGdldFZhbHVlRnJvbVByb2dyZXNzID0gZXhwb3J0cy5nZXRWYWx1ZUZyb21Qcm9ncmVzcyA9IGZ1bmN0aW9uIChwcm9ncmVzcywgZnJvbSwgdG8pIHtcbiAgICByZXR1cm4gLXByb2dyZXNzICogZnJvbSArIHByb2dyZXNzICogdG8gKyBmcm9tO1xufTtcblxuLypcbiAgICBQcm9ncmVzcyB3aXRoaW4gZ2l2ZW4gcmFuZ2VcbiAgICBcbiAgICBHaXZlbiBhIGxvd2VyIGxpbWl0IGFuZCBhbiB1cHBlciBsaW1pdCwgd2UgcmV0dXJuIHRoZSBwcm9ncmVzc1xuICAgIChleHByZXNzZWQgYXMgYSBudW1iZXIgMC0xKSByZXByZXNlbnRlZCBieSB0aGUgZ2l2ZW4gdmFsdWUsIGFuZFxuICAgIGxpbWl0IHRoYXQgcHJvZ3Jlc3MgdG8gd2l0aGluIDAtMS5cbiAgICBcbiAgICBAcGFyYW0gW251bWJlcl06IFZhbHVlIHRvIGZpbmQgcHJvZ3Jlc3Mgd2l0aGluIGdpdmVuIHJhbmdlXG4gICAgQHBhcmFtIFtudW1iZXJdOiBMb3dlciBsaW1pdCBcbiAgICBAcGFyYW0gW251bWJlcl06IFVwcGVyIGxpbWl0XG4gICAgQHJldHVybiBbbnVtYmVyXTogUHJvZ3Jlc3Mgb2YgdmFsdWUgd2l0aGluIHJhbmdlIGFzIGV4cHJlc3NlZCAwLTFcbiovXG52YXIgZ2V0UHJvZ3Jlc3NGcm9tVmFsdWUgPSBleHBvcnRzLmdldFByb2dyZXNzRnJvbVZhbHVlID0gZnVuY3Rpb24gKHZhbHVlLCBmcm9tLCB0bykge1xuICAgIHJldHVybiAodmFsdWUgLSBmcm9tKSAvICh0byAtIGZyb20pO1xufTtcblxuLypcbiAgICBPZmZzZXQgYmV0d2VlbiB0d28gb2JqZWN0cyBvZiBudW1iZXJzXG5cbiAgICBJZiBwcm9wZXJ0eSBpcyBmb3VuZCBpbiBiIG5vdCBwcmVzZW50IGluIGEsIGl0IHdpbGwgcmV0dXJuIGAwYCBmb3IgdGhhdCBwcm9wLlxuICAgIFxuICAgIEBwYXJhbSBbUG9pbnRdOiBGaXJzdCBvYmplY3RcbiAgICBAcGFyYW0gW1BvaW50XTogU2Vjb25kIG9iamVjdFxuICAgIEByZXR1cm4gW09mZnNldF06IERpc3RhbmNlIG1ldHJpY3MgYmV0d2VlbiB0d28gcG9pbnRzXG4qL1xudmFyIG9mZnNldCA9IGV4cG9ydHMub2Zmc2V0ID0gZnVuY3Rpb24gKGEsIGIpIHtcbiAgICB2YXIgb2Zmc2V0ID0ge307XG5cbiAgICAoMCwgX3V0aWxzLmVhY2gpKGIsIGZ1bmN0aW9uICh2YWx1ZSwga2V5KSB7XG4gICAgICAgIG9mZnNldFtrZXldID0gKDAsIF91dGlscy5oYXNQcm9wZXJ0eSkoYSwga2V5KSA/IHZhbHVlIC0gYVtrZXldIDogMDtcbiAgICB9KTtcblxuICAgIHJldHVybiBvZmZzZXQ7XG59O1xuXG4vKlxuICAgIFBvaW50IGZyb20gYW5nbGUgYW5kIGRpc3RhbmNlXG4gICAgXG4gICAgQHBhcmFtIFtvYmplY3RdOiAyRCBwb2ludCBvZiBvcmlnaW5cbiAgICBAcGFyYW0gW251bWJlcl06IEFuZ2xlIGZyb20gb3JpZ2luXG4gICAgQHBhcmFtIFtudW1iZXJdOiBEaXN0YW5jZSBmcm9tIG9yaWdpblxuICAgIEByZXR1cm4gW29iamVjdF06IENhbGN1bGF0ZWQgMkQgcG9pbnRcbiovXG52YXIgcG9pbnRGcm9tQW5nbGVBbmREaXN0YW5jZSA9IGV4cG9ydHMucG9pbnRGcm9tQW5nbGVBbmREaXN0YW5jZSA9IGZ1bmN0aW9uIChvcmlnaW4sIGFuZ2xlLCBkaXN0YW5jZSkge1xuICAgIGFuZ2xlID0gZGVncmVlc1RvUmFkaWFucyhhbmdsZSk7XG5cbiAgICByZXR1cm4ge1xuICAgICAgICB4OiBkaXN0YW5jZSAqIE1hdGguY29zKGFuZ2xlKSArIG9yaWdpbi54LFxuICAgICAgICB5OiBkaXN0YW5jZSAqIE1hdGguc2luKGFuZ2xlKSArIG9yaWdpbi55XG4gICAgfTtcbn07XG5cbi8qXG4gICAgQ29udmVydCByYWRpYW5zIHRvIGRlZ3JlZXNcbiAgICBcbiAgICBAcGFyYW0gW251bWJlcl06IFZhbHVlIGluIHJhZGlhbnNcbiAgICBAcmV0dXJuIFtudW1iZXJdOiBWYWx1ZSBpbiBkZWdyZWVzXG4qL1xudmFyIHJhZGlhbnNUb0RlZ3JlZXMgPSBleHBvcnRzLnJhZGlhbnNUb0RlZ3JlZXMgPSBmdW5jdGlvbiAocmFkaWFucykge1xuICAgIHJldHVybiByYWRpYW5zICogMTgwIC8gTWF0aC5QSTtcbn07XG5cbi8qXG4gICAgUmV0dXJuIHJhbmRvbSBudW1iZXIgYmV0d2VlbiByYW5nZVxuICAgIFxuICAgIEBwYXJhbSBbbnVtYmVyXSAob3B0aW9uYWwpOiBPdXRwdXQgbWluaW11bVxuICAgIEBwYXJhbSBbbnVtYmVyXSAob3B0aW9uYWwpOiBPdXRwdXQgbWF4aW11bVxuICAgIEByZXR1cm4gW251bWJlcl06IFJhbmRvbSBudW1iZXIgd2l0aGluIHJhbmdlLCBvciAwIGFuZCAxIGlmIG5vbmUgcHJvdmlkZWRcbiovXG52YXIgcmFuZG9tID0gZXhwb3J0cy5yYW5kb20gPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIG1pbiA9IGFyZ3VtZW50cy5sZW5ndGggPD0gMCB8fCBhcmd1bWVudHNbMF0gPT09IHVuZGVmaW5lZCA/IDAgOiBhcmd1bWVudHNbMF07XG4gICAgdmFyIG1heCA9IGFyZ3VtZW50cy5sZW5ndGggPD0gMSB8fCBhcmd1bWVudHNbMV0gPT09IHVuZGVmaW5lZCA/IDEgOiBhcmd1bWVudHNbMV07XG4gICAgcmV0dXJuIE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluKSArIG1pbjtcbn07XG5cbi8qXG4gICAgQ2FsY3VsYXRlIHJlbGF0aXZlIHZhbHVlXG4gICAgXG4gICAgVGFrZXMgdGhlIG9wZXJhdG9yIGFuZCB2YWx1ZSBmcm9tIGEgc3RyaW5nLCBpZSBcIis9NVwiLCBhbmQgYXBwbGllc1xuICAgIHRvIHRoZSBjdXJyZW50IHZhbHVlIHRvIHJlc29sdmUgYSBuZXcgdGFyZ2V0LlxuICAgIFxuICAgIEBwYXJhbSBbbnVtYmVyXTogQ3VycmVudCB2YWx1ZVxuICAgIEBwYXJhbSBbc3RyaW5nXTogUmVsYXRpdmUgdmFsdWVcbiAgICBAcmV0dXJuIFtudW1iZXJdOiBOZXcgdmFsdWVcbiovXG52YXIgcmVsYXRpdmVWYWx1ZSA9IGV4cG9ydHMucmVsYXRpdmVWYWx1ZSA9IGZ1bmN0aW9uIChjdXJyZW50LCByZWxhdGl2ZSkge1xuICAgIHZhciBuZXdWYWx1ZSA9IGN1cnJlbnQ7XG4gICAgdmFyIGVxdWF0aW9uID0gcmVsYXRpdmUuc3BsaXQoJz0nKTtcbiAgICB2YXIgb3BlcmF0b3IgPSBlcXVhdGlvblswXTtcblxuICAgIHZhciBfc3BsaXRWYWx1ZVVuaXQgPSAoMCwgX3V0aWxzLnNwbGl0VmFsdWVVbml0KShlcXVhdGlvblsxXSk7XG5cbiAgICB2YXIgdW5pdCA9IF9zcGxpdFZhbHVlVW5pdC51bml0O1xuICAgIHZhciB2YWx1ZSA9IF9zcGxpdFZhbHVlVW5pdC52YWx1ZTtcblxuICAgIHZhbHVlID0gcGFyc2VGbG9hdCh2YWx1ZSk7XG5cbiAgICBzd2l0Y2ggKG9wZXJhdG9yKSB7XG4gICAgICAgIGNhc2UgJysnOlxuICAgICAgICAgICAgbmV3VmFsdWUgKz0gdmFsdWU7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnLSc6XG4gICAgICAgICAgICBuZXdWYWx1ZSAtPSB2YWx1ZTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICcqJzpcbiAgICAgICAgICAgIG5ld1ZhbHVlICo9IHZhbHVlO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJy8nOlxuICAgICAgICAgICAgbmV3VmFsdWUgLz0gdmFsdWU7XG4gICAgICAgICAgICBicmVhaztcbiAgICB9XG5cbiAgICBpZiAodW5pdCkge1xuICAgICAgICBuZXdWYWx1ZSArPSB1bml0O1xuICAgIH1cblxuICAgIHJldHVybiBuZXdWYWx1ZTtcbn07XG5cbi8qXG4gICAgUmVzdHJpY3QgdmFsdWUgdG8gcmFuZ2VcbiAgICBcbiAgICBSZXR1cm4gdmFsdWUgd2l0aGluIHRoZSByYW5nZSBvZiBsb3dlckxpbWl0IGFuZCB1cHBlckxpbWl0XG4gICAgXG4gICAgQHBhcmFtIFtudW1iZXJdOiBWYWx1ZSB0byBrZWVwIHdpdGhpbiByYW5nZVxuICAgIEBwYXJhbSBbbnVtYmVyXTogTG93ZXIgbGltaXQgb2YgcmFuZ2VcbiAgICBAcGFyYW0gW251bWJlcl06IFVwcGVyIGxpbWl0IG9mIHJhbmdlXG4gICAgQHJldHVybiBbbnVtYmVyXTogVmFsdWUgYXMgbGltaXRlZCB3aXRoaW4gZ2l2ZW4gcmFuZ2VcbiovXG52YXIgcmVzdHJpY3QgPSBleHBvcnRzLnJlc3RyaWN0ID0gZnVuY3Rpb24gKHZhbHVlLCBtaW4sIG1heCkge1xuICAgIHJldHVybiBNYXRoLm1heChNYXRoLm1pbih2YWx1ZSwgbWF4KSwgbWluKTtcbn07XG5cbi8qXG4gICAgRnJhbWVyYXRlLWluZGVwZW5kZW50IHNtb290aGluZ1xuXG4gICAgQHBhcmFtIFtudW1iZXJdOiBOZXcgdmFsdWVcbiAgICBAcGFyYW0gW251bWJlcl06IE9sZCB2YWx1ZVxuICAgIEBwYXJhbSBbbnVtYmVyXTogRnJhbWUgZHVyYXRpb25cbiAgICBAcGFyYW0gW251bWJlcl0gKG9wdGlvbmFsKTogU21vb3RoaW5nICgwIGlzIG5vbmUpXG4qL1xudmFyIHNtb290aCA9IGV4cG9ydHMuc21vb3RoID0gZnVuY3Rpb24gKG5ld1ZhbHVlLCBvbGRWYWx1ZSwgZHVyYXRpb24pIHtcbiAgICB2YXIgc21vb3RoaW5nID0gYXJndW1lbnRzLmxlbmd0aCA8PSAzIHx8IGFyZ3VtZW50c1szXSA9PT0gdW5kZWZpbmVkID8gMCA6IGFyZ3VtZW50c1szXTtcbiAgICByZXR1cm4gKDAsIF91dGlscy50b0RlY2ltYWwpKG9sZFZhbHVlICsgZHVyYXRpb24gKiAobmV3VmFsdWUgLSBvbGRWYWx1ZSkgLyBNYXRoLm1heChzbW9vdGhpbmcsIGR1cmF0aW9uKSk7XG59O1xuXG4vKlxuICAgIENvbnZlcnQgeCBwZXIgc2Vjb25kIHRvIHBlciBmcmFtZSB2ZWxvY2l0eSBiYXNlZCBvbiBmcHNcbiAgICBcbiAgICBAcGFyYW0gW251bWJlcl06IFVuaXQgcGVyIHNlY29uZFxuICAgIEBwYXJhbSBbbnVtYmVyXTogRnJhbWUgZHVyYXRpb24gaW4gbXNcbiovXG52YXIgc3BlZWRQZXJGcmFtZSA9IGV4cG9ydHMuc3BlZWRQZXJGcmFtZSA9IGZ1bmN0aW9uICh4cHMsIGZyYW1lRHVyYXRpb24pIHtcbiAgICByZXR1cm4gKDAsIF91dGlscy5pc051bSkoeHBzKSA/IHhwcyAvICgxMDAwIC8gZnJhbWVEdXJhdGlvbikgOiAwO1xufTtcblxuLypcbiAgICBDb252ZXJ0IHZlbG9jaXR5IGludG8gdmVsaWNpdHkgcGVyIHNlY29uZFxuICAgIFxuICAgIEBwYXJhbSBbbnVtYmVyXTogVW5pdCBwZXIgZnJhbWVcbiAgICBAcGFyYW0gW251bWJlcl06IEZyYW1lIGR1cmF0aW9uIGluIG1zXG4qL1xudmFyIHNwZWVkUGVyU2Vjb25kID0gZXhwb3J0cy5zcGVlZFBlclNlY29uZCA9IGZ1bmN0aW9uICh2ZWxvY2l0eSwgZnJhbWVEdXJhdGlvbikge1xuICAgIHJldHVybiB2ZWxvY2l0eSAqICgxMDAwIC8gZnJhbWVEdXJhdGlvbik7XG59O1xuXG4vKlxuICAgIENyZWF0ZSBzdGVwcGVkIHZlcnNpb24gb2YgMC0xIHByb2dyZXNzXG4gICAgXG4gICAgQHBhcmFtIFtudW1iZXJdOiBDdXJyZW50IHZhbHVlXG4gICAgQHBhcmFtIFtpbnRdOiBOdW1iZXIgb2Ygc3RlcHNcbiAgICBAcmV0dXJuIFtudW1iZXJdOiBTdGVwcGVkIHZhbHVlXG4qL1xudmFyIHN0ZXBQcm9ncmVzcyA9IGV4cG9ydHMuc3RlcFByb2dyZXNzID0gZnVuY3Rpb24gKHByb2dyZXNzLCBzdGVwcykge1xuICAgIHZhciBzZWdtZW50ID0gMSAvIChzdGVwcyAtIDEpO1xuICAgIHZhciB0YXJnZXQgPSAxIC0gMSAvIHN0ZXBzO1xuICAgIHZhciBwcm9ncmVzc09mVGFyZ2V0ID0gTWF0aC5taW4ocHJvZ3Jlc3MgLyB0YXJnZXQsIDEpO1xuXG4gICAgcmV0dXJuIE1hdGguZmxvb3IocHJvZ3Jlc3NPZlRhcmdldCAvIHNlZ21lbnQpICogc2VnbWVudDtcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5OeVl5OXBibU12WTJGc1l5NXFjeUpkTENKdVlXMWxjeUk2VzEwc0ltMWhjSEJwYm1keklqb2lPenM3T3pzN08wRkJVVUVzU1VGQlRTeGhRVUZoTzBGQlEyWXNUMEZCUnl4RFFVRklPMEZCUTBFc1QwRkJSeXhEUVVGSU8wRkJRMEVzVDBGQlJ5eERRVUZJTzBOQlNFVTdPMEZCVFU0c1NVRkJUU3hoUVVGaExGVkJRVU1zUTBGQlJDeEZRVUZKTEVOQlFVbzdWMEZCVlN4TFFVRkxMRWRCUVV3c1EwRkJVeXhKUVVGSkxFTkJRVW83UTBGQmJrSTdPenM3T3pzN096czdPenRCUVZsYUxFbEJRVTBzZDBKQlFWRXNWVUZCUXl4RFFVRkVPMUZCUVVrc01FUkJRVWs3VjBGQlpTeHBRa0ZCYVVJc1MwRkJTeXhMUVVGTUxFTkJRVmNzUlVGQlJTeERRVUZHTEVkQlFVMHNSVUZCUlN4RFFVRkdMRVZCUVVzc1JVRkJSU3hEUVVGR0xFZEJRVTBzUlVGQlJTeERRVUZHTEVOQlFUZERPME5CUVhaQ096czdPenM3T3p0QlFWRmtMRWxCUVUwc09FTkJRVzFDTEZWQlFVTXNUMEZCUkR0WFFVRmhMRlZCUVZVc1MwRkJTeXhGUVVGTUxFZEJRVlVzUjBGQmNFSTdRMEZCWWpzN096czdPenM3T3pzN096czdPenM3T3pzN1FVRnZRbnBDTEVsQlFVMHNNRUpCUVZNc1ZVRkJReXhEUVVGRUxFVkJRVWtzUTBGQlNpeEZRVUZQTEZGQlFWQTdWMEZCYjBJc1NVRkJTeXhEUVVGRExFbEJRVWtzUTBGQlNpeERRVUZFTEVkQlFWVXNVVUZCVmp0RFFVRjZRanM3T3pzN096czdPenM3UVVGWFppeEpRVUZOTERoQ1FVRlhMRlZCUVVNc1EwRkJSQ3hGUVVGMVFqdFJRVUZ1UWl3d1JFRkJTU3d3UWtGQlpUczdPMEZCUlRORExGRkJRVWtzYTBKQlFVMHNRMEZCVGl4RFFVRktMRVZCUVdNN1FVRkRWaXhsUVVGUExGZEJRVmNzUTBGQldDeEZRVUZqTEVOQlFXUXNRMEZCVURzN08wRkJSRlVzUzBGQlpDeE5RVWxQTzBGQlEwZ3NaMEpCUVUwc1UwRkJVeXhYUVVGWExFVkJRVVVzUTBGQlJpeEZRVUZMTEVWQlFVVXNRMEZCUml4RFFVRjZRaXhEUVVSSU8wRkJSVWdzWjBKQlFVMHNVMEZCVXl4WFFVRlhMRVZCUVVVc1EwRkJSaXhGUVVGTExFVkJRVVVzUTBGQlJpeERRVUY2UWl4RFFVWklPMEZCUjBnc1owSkJRVTBzVTBGQlV5eHBRa0ZCUXl4RFFVRk5MRVZCUVVVc1EwRkJSaXhEUVVGUUxFZEJRV1VzVjBGQlZ5eEZRVUZGTEVOQlFVWXNSVUZCU3l4RlFVRkZMRU5CUVVZc1EwRkJMMElzUjBGQmMwTXNRMEZCZEVNc1EwRklXanM3UVVGTFNDeHRRa0ZCVHl4TFFVRkxMRWxCUVV3c1EwRkJWU3hUUVVGRExGRkJRVlVzUlVGQldDeFpRVUZwUWl4UlFVRlZMRVZCUVROQ0xGbEJRV2xETEZGQlFWVXNSVUZCTTBNc1EwRkJha0lzUTBGTVJ6dFRRVXBRTzBOQlJtOUNPenM3T3pzN096czdPenRCUVhkQ2FrSXNTVUZCVFN4clEwRkJZU3hWUVVGRExFTkJRVVFzUlVGQlNTeERRVUZLTzFkQlFWVXNTMEZCU3l4SlFVRk1MRU5CUVZVc1EwRkJReXhIUVVGSkxFTkJRVW9zUjBGQlZTeEpRVUZKTEVOQlFVbzdRMEZCTDBJN096czdPenM3T3pzN096czdRVUZoYmtJc1NVRkJUU3h6UkVGQmRVSXNWVUZCUXl4UlFVRkVMRVZCUVZjc1NVRkJXQ3hGUVVGcFFpeEZRVUZxUWp0WFFVRjNRaXhEUVVGSExGRkJRVVlzUjBGQllTeEpRVUZpTEVkQlFYTkNMRmRCUVZjc1JVRkJXQ3hIUVVGcFFpeEpRVUY0UXp0RFFVRjRRanM3T3pzN096czdPenM3T3pzN1FVRmpOMElzU1VGQlRTeHpSRUZCZFVJc1ZVRkJReXhMUVVGRUxFVkJRVkVzU1VGQlVpeEZRVUZqTEVWQlFXUTdWMEZCY1VJc1EwRkJReXhSUVVGUkxFbEJRVklzUTBGQlJDeEpRVUZyUWl4TFFVRkxMRWxCUVV3c1EwRkJiRUk3UTBGQmNrSTdPenM3T3pzN096czdPMEZCVnpkQ0xFbEJRVTBzTUVKQlFWTXNWVUZCUXl4RFFVRkVMRVZCUVVrc1EwRkJTaXhGUVVGVk8wRkJRelZDTEZGQlFVMHNVMEZCVXl4RlFVRlVMRU5CUkhOQ096dEJRVWMxUWl4eFFrRkJTeXhEUVVGTUxFVkJRVkVzVlVGQlF5eExRVUZFTEVWQlFWRXNSMEZCVWl4RlFVRm5RanRCUVVOd1FpeGxRVUZQTEVkQlFWQXNTVUZCWXl4M1FrRkJXU3hEUVVGYUxFVkJRV1VzUjBGQlppeEpRVUZ6UWl4UlFVRlJMRVZCUVVVc1IwRkJSaXhEUVVGU0xFZEJRV2xDTEVOQlFYWkRMRU5CUkUwN1MwRkJhRUlzUTBGQlVpeERRVWcwUWpzN1FVRlBOVUlzVjBGQlR5eE5RVUZRTEVOQlVEUkNPME5CUVZZN096czdPenM3T3pzN1FVRnJRbVlzU1VGQlRTeG5SVUZCTkVJc1ZVRkJReXhOUVVGRUxFVkJRVk1zUzBGQlZDeEZRVUZuUWl4UlFVRm9RaXhGUVVFMlFqdEJRVU5zUlN4WlFVRlJMR2xDUVVGcFFpeExRVUZxUWl4RFFVRlNMRU5CUkd0Rk96dEJRVWRzUlN4WFFVRlBPMEZCUTBnc1YwRkJSeXhYUVVGWExFdEJRVXNzUjBGQlRDeERRVUZUTEV0QlFWUXNRMEZCV0N4SFFVRTJRaXhQUVVGUExFTkJRVkE3UVVGRGFFTXNWMEZCUnl4WFFVRlhMRXRCUVVzc1IwRkJUQ3hEUVVGVExFdEJRVlFzUTBGQldDeEhRVUUyUWl4UFFVRlBMRU5CUVZBN1MwRkdjRU1zUTBGSWEwVTdRMEZCTjBJN096czdPenM3TzBGQlpXeERMRWxCUVUwc09FTkJRVzFDTEZWQlFVTXNUMEZCUkR0WFFVRmhMRlZCUVZVc1IwRkJWaXhIUVVGblFpeExRVUZMTEVWQlFVdzdRMEZCTjBJN096czdPenM3T3p0QlFWTjZRaXhKUVVGTkxEQkNRVUZUTzFGQlFVTXNORVJCUVUwN1VVRkJSeXcwUkVGQlRUdFhRVUZOTEV0QlFVc3NUVUZCVEN4TlFVRnBRaXhOUVVGTkxFZEJRVTRzUTBGQmFrSXNSMEZCT0VJc1IwRkJPVUk3UTBGQmRFSTdPenM3T3pzN096czdPenRCUVZsbUxFbEJRVTBzZDBOQlFXZENMRlZCUVVNc1QwRkJSQ3hGUVVGVkxGRkJRVllzUlVGQmRVSTdRVUZEYUVRc1VVRkJTU3hYUVVGWExFOUJRVmdzUTBGRU5FTTdRVUZGYUVRc1VVRkJUU3hYUVVGWExGTkJRVk1zUzBGQlZDeERRVUZsTEVkQlFXWXNRMEZCV0N4RFFVWXdRenRCUVVkb1JDeFJRVUZOTEZkQlFWY3NVMEZCVXl4RFFVRlVMRU5CUVZnc1EwRklNRU03T3pCQ1FVa3hRaXd5UWtGQlpTeFRRVUZUTEVOQlFWUXNRMEZCWml4RlFVb3dRanM3VVVGSk1VTXNORUpCU2pCRE8xRkJTWEJETERoQ1FVcHZRenM3UVVGTmFFUXNXVUZCVVN4WFFVRlhMRXRCUVZnc1EwRkJVaXhEUVU1blJEczdRVUZSYUVRc1dVRkJVU3hSUVVGU08wRkJRMEVzWVVGQlN5eEhRVUZNTzBGQlEwa3NkMEpCUVZrc1MwRkJXaXhEUVVSS08wRkJSVWtzYTBKQlJrbzdRVUZFUVN4aFFVbExMRWRCUVV3N1FVRkRTU3gzUWtGQldTeExRVUZhTEVOQlJFbzdRVUZGU1N4clFrRkdTanRCUVVwQkxHRkJUMHNzUjBGQlREdEJRVU5KTEhkQ1FVRlpMRXRCUVZvc1EwRkVTanRCUVVWSkxHdENRVVpLTzBGQlVFRXNZVUZWU3l4SFFVRk1PMEZCUTBrc2QwSkJRVmtzUzBGQldpeERRVVJLTzBGQlJVa3NhMEpCUmtvN1FVRldRU3hMUVZKblJEczdRVUYxUW1oRUxGRkJRVWtzU1VGQlNpeEZRVUZWTzBGQlEwNHNiMEpCUVZrc1NVRkJXaXhEUVVSTk8wdEJRVlk3TzBGQlNVRXNWMEZCVHl4UlFVRlFMRU5CTTBKblJEdERRVUYyUWpzN096czdPenM3T3pzN08wRkJkME4wUWl4SlFVRk5MRGhDUVVGWExGVkJRVU1zUzBGQlJDeEZRVUZSTEVkQlFWSXNSVUZCWVN4SFFVRmlPMWRCUVhGQ0xFdEJRVXNzUjBGQlRDeERRVUZUTEV0QlFVc3NSMEZCVEN4RFFVRlRMRXRCUVZRc1JVRkJaMElzUjBGQmFFSXNRMEZCVkN4RlFVRXJRaXhIUVVFdlFqdERRVUZ5UWpzN096czdPenM3T3p0QlFWVnFRaXhKUVVGTkxEQkNRVUZUTEZWQlFVTXNVVUZCUkN4RlFVRlhMRkZCUVZnc1JVRkJjVUlzVVVGQmNrSTdVVUZCSzBJc2EwVkJRVms3VjBGQlRTeHpRa0ZCVlN4WFFVRlpMRmxCUVZrc1YwRkJWeXhSUVVGWUxFTkJRVm9zUjBGQmJVTXNTMEZCU3l4SFFVRk1MRU5CUVZNc1UwRkJWQ3hGUVVGdlFpeFJRVUZ3UWl4RFFVRnVRenREUVVGMlJUczdPenM3T3pzN1FVRlJaaXhKUVVGTkxIZERRVUZuUWl4VlFVRkRMRWRCUVVRc1JVRkJUU3hoUVVGT08xZEJRWGRDTEdsQ1FVRkRMRU5CUVUwc1IwRkJUaXhEUVVGRUxFZEJRV1VzVDBGQlR5eFBRVUZQTEdGQlFWQXNRMEZCVUN4SFFVRXJRaXhEUVVFNVF6dERRVUY0UWpzN096czdPenM3UVVGUmRFSXNTVUZCVFN3d1EwRkJhVUlzVlVGQlF5eFJRVUZFTEVWQlFWY3NZVUZCV0R0WFFVRTJRaXhaUVVGWkxFOUJRVThzWVVGQlVDeERRVUZhTzBOQlFUZENPenM3T3pzN096czdRVUZUZGtJc1NVRkJUU3h6UTBGQlpTeFZRVUZETEZGQlFVUXNSVUZCVnl4TFFVRllMRVZCUVhGQ08wRkJRemRETEZGQlFVMHNWVUZCVlN4TFFVRkxMRkZCUVZFc1EwRkJVaXhEUVVGTUxFTkJSRFpDTzBGQlJUZERMRkZCUVUwc1UwRkJVeXhKUVVGTExFbEJRVWtzUzBGQlNpeERRVVo1UWp0QlFVYzNReXhSUVVGTkxHMUNRVUZ0UWl4TFFVRkxMRWRCUVV3c1EwRkJVeXhYUVVGWExFMUJRVmdzUlVGQmJVSXNRMEZCTlVJc1EwRkJia0lzUTBGSWRVTTdPMEZCU3pkRExGZEJRVThzUzBGQlN5eExRVUZNTEVOQlFWY3NiVUpCUVcxQ0xFOUJRVzVDTEVOQlFWZ3NSMEZCZVVNc1QwRkJla01zUTBGTWMwTTdRMEZCY2tJaUxDSm1hV3hsSWpvaVkyRnNZeTVxY3lJc0luTnZkWEpqWlZKdmIzUWlPaUl2VlhObGNuTXZUV0YwZEM5VGFYUmxjeTl3YjNCdGIzUnBiMjRpTENKemIzVnlZMlZ6UTI5dWRHVnVkQ0k2V3lKcGJYQnZjblFnZTF4dUlDQWdJR1ZoWTJnc1hHNGdJQ0FnYUdGelVISnZjR1Z5ZEhrc1hHNGdJQ0FnYVhOT2RXMHNYRzRnSUNBZ2MzQnNhWFJXWVd4MVpWVnVhWFFzWEc0Z0lDQWdkRzlFWldOcGJXRnNYRzU5SUdaeWIyMGdKeTR2ZFhScGJITW5PMXh1WEc1amIyNXpkQ0JhUlZKUFgxQlBTVTVVSUQwZ2UxeHVJQ0FnSUhnNklEQXNYRzRnSUNBZ2VUb2dNQ3hjYmlBZ0lDQjZPaUF3WEc1OU8xeHVYRzVqYjI1emRDQmthWE4wWVc1alpURkVJRDBnS0dFc0lHSXBJRDArSUUxaGRHZ3VZV0p6S0dFZ0xTQmlLVHRjYmx4dUx5cGNiaUFnSUNCQmJtZHNaU0JpWlhSM1pXVnVJSEJ2YVc1MGMxeHVJQ0FnSUZ4dUlDQWdJRlJ5WVc1emJHRjBaWE1nZEdobElHaDVjRzkwYUdWMGFXTmhiQ0JzYVc1bElITnZJSFJvWVhRZ2RHaGxJQ2RtY205dEp5QmpiMjl5WkdsdVlYUmxjMXh1SUNBZ0lHRnlaU0JoZENBd0xEQXNJSFJvWlc0Z2NtVjBkWEp1SUhSb1pTQmhibWRzWlNCMWMybHVaeUF1WVc1bmJHVkdjbTl0UTJWdWRHVnlLQ2xjYmlBZ0lDQmNiaUFnSUNCQWNHRnlZVzBnVzI5aWFtVmpkRjA2SUZnZ1lXNWtJRmtnWTI5dmNtUnBibUYwWlhNZ2IyWWdabkp2YlNCd2IybHVkRnh1SUNBZ0lFQndZWEpoYlNCYmIySnFaV04wWFRvZ1dDQmhibVFnV1NCamIzSmthVzVoZEdWeklHOW1JSFJ2SUhCdmFXNTBYRzRnSUNBZ1FISmxkSFZ5YmlCYmNtRmthV0Z1WFRvZ1FXNW5iR1VnWW1WMGQyVmxiaUIwYUdVZ2RIZHZJSEJ2YVc1MGN5QnBiaUJ5WVdScFlXNXpYRzRxTDF4dVpYaHdiM0owSUdOdmJuTjBJR0Z1WjJ4bElEMGdLR0VzSUdJZ1BTQmFSVkpQWDFCUFNVNVVLU0E5UGlCeVlXUnBZVzV6Vkc5RVpXZHlaV1Z6S0UxaGRHZ3VZWFJoYmpJb1lTNTRJQzBnWWk1NExDQmhMbmtnTFNCaUxua3BLVHRjYmx4dUx5cGNiaUFnSUNCRGIyNTJaWEowSUdSbFozSmxaWE1nZEc4Z2NtRmthV0Z1YzF4dUlDQWdJRnh1SUNBZ0lFQndZWEpoYlNCYmJuVnRZbVZ5WFRvZ1ZtRnNkV1VnYVc0Z1pHVm5jbVZsYzF4dUlDQWdJRUJ5WlhSMWNtNGdXMjUxYldKbGNsMDZJRlpoYkhWbElHbHVJSEpoWkdsaGJuTmNiaW92WEc1bGVIQnZjblFnWTI5dWMzUWdaR1ZuY21WbGMxUnZVbUZrYVdGdWN5QTlJQ2hrWldkeVpXVnpLU0E5UGlCa1pXZHlaV1Z6SUNvZ1RXRjBhQzVRU1NBdklERTRNRHRjYmx4dUx5cGNiaUFnSUNCRWFXeGhkR1ZjYmlBZ0lDQmNiaUFnSUNCRGFHRnVaMlVnZEdobElIQnliMmR5WlhOemFXOXVJR0psZEhkbFpXNGdZU0JoYm1RZ1lpQmhZMk52Y21ScGJtY2dkRzhnWkdsc1lYUnBiMjR1WEc0Z0lDQWdYRzRnSUNBZ1UyOGdaR2xzWVhScGIyNGdQU0F3TGpVZ2QyOTFiR1FnWTJoaGJtZGxYRzRnSUNBZ1hHNGdJQ0FnWVNBdExTMHRMUzB0TFMwZ1lseHVJQ0FnSUZ4dUlDQWdJSFJ2WEc0Z0lDQWdYRzRnSUNBZ1lTQXRMUzB0SUdKY2JpQWdJQ0JjYmlBZ0lDQkFjR0Z5WVcwZ1cyNTFiV0psY2wwNklGQnlaWFpwYjNWeklIWmhiSFZsWEc0Z0lDQWdRSEJoY21GdElGdHVkVzFpWlhKZE9pQkRkWEp5Wlc1MElIWmhiSFZsWEc0Z0lDQWdRSEJoY21GdElGdHVkVzFpWlhKZE9pQkVhV3hoZEdVZ2NISnZaM0psYzNNZ1lua2dlRnh1SUNBZ0lFQnlaWFIxY200Z1cyNTFiV0psY2wwNklGQnlaWFpwYjNWeklIWmhiSFZsSUhCc2RYTWdkR2hsSUdScGJHRjBaV1FnWkdsbVptVnlaVzVqWlZ4dUtpOWNibVY0Y0c5eWRDQmpiMjV6ZENCa2FXeGhkR1VnUFNBb1lTd2dZaXdnWkdsc1lYUnBiMjRwSUQwK0lHRWdLeUFvS0dJZ0xTQmhLU0FxSUdScGJHRjBhVzl1S1R0Y2JseHVMeXBjYmlBZ0lDQkVhWE4wWVc1alpWeHVJQ0FnSUZ4dUlDQWdJRkpsZEhWeWJuTWdkR2hsSUdScGMzUmhibU5sSUdKbGRIZGxaVzRnZEhkdklHNGdaR2x0Wlc1emFXOXVZV3dnY0c5cGJuUnpMbHh1SUNBZ0lGeHVJQ0FnSUVCd1lYSmhiU0JiYjJKcVpXTjBMMjUxYldKbGNsMDZJSGdnWVc1a0lIa2diM0lnYW5WemRDQjRJRzltSUhCdmFXNTBJRUZjYmlBZ0lDQkFjR0Z5WVcwZ1cyOWlhbVZqZEM5dWRXMWlaWEpkT2lBb2IzQjBhVzl1WVd3cE9pQjRJR0Z1WkNCNUlHOXlJR3AxYzNRZ2VDQnZaaUJ3YjJsdWRDQkNYRzRnSUNBZ1FISmxkSFZ5YmlCYmJuVnRZbVZ5WFRvZ1ZHaGxJR1JwYzNSaGJtTmxJR0psZEhkbFpXNGdkR2hsSUhSM2J5QndiMmx1ZEhOY2Jpb3ZYRzVsZUhCdmNuUWdZMjl1YzNRZ1pHbHpkR0Z1WTJVZ1BTQW9ZU3dnWWlBOUlGcEZVazlmVUU5SlRsUXBJRDArSUh0Y2JpQWdJQ0F2THlBeFJDQmthVzFsYm5OcGIyNXpYRzRnSUNBZ2FXWWdLR2x6VG5WdEtHRXBLU0I3WEc0Z0lDQWdJQ0FnSUhKbGRIVnliaUJrYVhOMFlXNWpaVEZFS0dFc0lHSXBPMXh1WEc0Z0lDQWdMeThnVFhWc2RHa3RaR2x0Wlc1emFXOXVZV3hjYmlBZ0lDQjlJR1ZzYzJVZ2UxeHVJQ0FnSUNBZ0lDQmpiMjV6ZENCNFJHVnNkR0VnUFNCa2FYTjBZVzVqWlRGRUtHRXVlQ3dnWWk1NEtUdGNiaUFnSUNBZ0lDQWdZMjl1YzNRZ2VVUmxiSFJoSUQwZ1pHbHpkR0Z1WTJVeFJDaGhMbmtzSUdJdWVTazdYRzRnSUNBZ0lDQWdJR052Ym5OMElIcEVaV3gwWVNBOUlDaHBjMDUxYlNoaExub3BLU0EvSUdScGMzUmhibU5sTVVRb1lTNTZMQ0JpTG5vcElEb2dNRHRjYmx4dUlDQWdJQ0FnSUNCeVpYUjFjbTRnVFdGMGFDNXpjWEowS0NoNFJHVnNkR0VnS2lvZ01pa2dLeUFvZVVSbGJIUmhJQ29xSURJcElDc2dLSHBFWld4MFlTQXFLaUF5S1NrN1hHNGdJQ0FnZlZ4dWZUdGNiaUJjYmk4cVhHNGdJQ0FnU0hsd2IzUmxiblZ6WlZ4dUlDQWdJRnh1SUNBZ0lGSmxkSFZ5Ym5NZ2RHaGxJR2g1Y0c5MFpXNTFjMlVzSUhOcFpHVWdReXdnWjJsMlpXNGdkR2hsSUd4bGJtZDBhSE1nYjJZZ2MybGtaWE1nUVNCaGJtUWdRaTVjYmlBZ0lDQmNiaUFnSUNCQWNHRnlZVzBnVzI1MWJXSmxjbDA2SUV4bGJtZDBhQ0J2WmlCQlhHNGdJQ0FnUUhCaGNtRnRJRnR1ZFcxaVpYSmRPaUJNWlc1bmRHZ2diMllnUWx4dUlDQWdJRUJ5WlhSMWNtNGdXMjUxYldKbGNsMDZJRXhsYm1kMGFDQnZaaUJEWEc0cUwxeHVaWGh3YjNKMElHTnZibk4wSUdoNWNHOTBaVzUxYzJVZ1BTQW9ZU3dnWWlrZ1BUNGdUV0YwYUM1emNYSjBLQ2hoSUNvZ1lTa2dLeUFvWWlBcUlHSXBLVHRjYmx4dUx5cGNiaUFnSUNCV1lXeDFaU0JwYmlCeVlXNW5aU0JtY205dElIQnliMmR5WlhOelhHNGdJQ0FnWEc0Z0lDQWdSMmwyWlc0Z1lTQnNiM2RsY2lCc2FXMXBkQ0JoYm1RZ1lXNGdkWEJ3WlhJZ2JHbHRhWFFzSUhkbElISmxkSFZ5YmlCMGFHVWdkbUZzZFdVZ2QybDBhR2x1WEc0Z0lDQWdkR2hoZENCeVlXNW5aU0JoY3lCbGVIQnlaWE56WldRZ1lua2djSEp2WjNKbGMzTWdLR0VnYm5WdFltVnlJR1p5YjIwZ01DMHhLVnh1SUNBZ0lGeHVJQ0FnSUVCd1lYSmhiU0JiYm5WdFltVnlYVG9nVkdobElIQnliMmR5WlhOeklHSmxkSGRsWlc0Z2JHOTNaWElnWVc1a0lIVndjR1Z5SUd4cGJXbDBjeUJsZUhCeVpYTnpaV1FnTUMweFhHNGdJQ0FnUUhCaGNtRnRJRnR1ZFcxaVpYSmRPaUJNYjNkbGNpQnNhVzFwZENCdlppQnlZVzVuWlZ4dUlDQWdJRUJ3WVhKaGJTQmJiblZ0WW1WeVhUb2dWWEJ3WlhJZ2JHbHRhWFFnYjJZZ2NtRnVaMlZjYmlBZ0lDQkFjbVYwZFhKdUlGdHVkVzFpWlhKZE9pQldZV3gxWlNCaGN5QmpZV3hqZFd4aGRHVmtJR1p5YjIwZ2NISnZaM0psYzNNZ2QybDBhR2x1SUhKaGJtZGxJQ2h1YjNRZ2JHbHRhWFJsWkNCM2FYUm9hVzRnY21GdVoyVXBYRzRxTDF4dVpYaHdiM0owSUdOdmJuTjBJR2RsZEZaaGJIVmxSbkp2YlZCeWIyZHlaWE56SUQwZ0tIQnliMmR5WlhOekxDQm1jbTl0TENCMGJ5a2dQVDRnS0MwZ2NISnZaM0psYzNNZ0tpQm1jbTl0S1NBcklDaHdjbTluY21WemN5QXFJSFJ2S1NBcklHWnliMjA3WEc1Y2JpOHFYRzRnSUNBZ1VISnZaM0psYzNNZ2QybDBhR2x1SUdkcGRtVnVJSEpoYm1kbFhHNGdJQ0FnWEc0Z0lDQWdSMmwyWlc0Z1lTQnNiM2RsY2lCc2FXMXBkQ0JoYm1RZ1lXNGdkWEJ3WlhJZ2JHbHRhWFFzSUhkbElISmxkSFZ5YmlCMGFHVWdjSEp2WjNKbGMzTmNiaUFnSUNBb1pYaHdjbVZ6YzJWa0lHRnpJR0VnYm5WdFltVnlJREF0TVNrZ2NtVndjbVZ6Wlc1MFpXUWdZbmtnZEdobElHZHBkbVZ1SUhaaGJIVmxMQ0JoYm1SY2JpQWdJQ0JzYVcxcGRDQjBhR0YwSUhCeWIyZHlaWE56SUhSdklIZHBkR2hwYmlBd0xURXVYRzRnSUNBZ1hHNGdJQ0FnUUhCaGNtRnRJRnR1ZFcxaVpYSmRPaUJXWVd4MVpTQjBieUJtYVc1a0lIQnliMmR5WlhOeklIZHBkR2hwYmlCbmFYWmxiaUJ5WVc1blpWeHVJQ0FnSUVCd1lYSmhiU0JiYm5WdFltVnlYVG9nVEc5M1pYSWdiR2x0YVhRZ1hHNGdJQ0FnUUhCaGNtRnRJRnR1ZFcxaVpYSmRPaUJWY0hCbGNpQnNhVzFwZEZ4dUlDQWdJRUJ5WlhSMWNtNGdXMjUxYldKbGNsMDZJRkJ5YjJkeVpYTnpJRzltSUhaaGJIVmxJSGRwZEdocGJpQnlZVzVuWlNCaGN5QmxlSEJ5WlhOelpXUWdNQzB4WEc0cUwxeHVaWGh3YjNKMElHTnZibk4wSUdkbGRGQnliMmR5WlhOelJuSnZiVlpoYkhWbElEMGdLSFpoYkhWbExDQm1jbTl0TENCMGJ5a2dQVDRnS0haaGJIVmxJQzBnWm5KdmJTa2dMeUFvZEc4Z0xTQm1jbTl0S1R0Y2JseHVMeXBjYmlBZ0lDQlBabVp6WlhRZ1ltVjBkMlZsYmlCMGQyOGdiMkpxWldOMGN5QnZaaUJ1ZFcxaVpYSnpYRzVjYmlBZ0lDQkpaaUJ3Y205d1pYSjBlU0JwY3lCbWIzVnVaQ0JwYmlCaUlHNXZkQ0J3Y21WelpXNTBJR2x1SUdFc0lHbDBJSGRwYkd3Z2NtVjBkWEp1SUdBd1lDQm1iM0lnZEdoaGRDQndjbTl3TGx4dUlDQWdJRnh1SUNBZ0lFQndZWEpoYlNCYlVHOXBiblJkT2lCR2FYSnpkQ0J2WW1wbFkzUmNiaUFnSUNCQWNHRnlZVzBnVzFCdmFXNTBYVG9nVTJWamIyNWtJRzlpYW1WamRGeHVJQ0FnSUVCeVpYUjFjbTRnVzA5bVpuTmxkRjA2SUVScGMzUmhibU5sSUcxbGRISnBZM01nWW1WMGQyVmxiaUIwZDI4Z2NHOXBiblJ6WEc0cUwxeHVaWGh3YjNKMElHTnZibk4wSUc5bVpuTmxkQ0E5SUNoaExDQmlLU0E5UGlCN1hHNGdJQ0FnWTI5dWMzUWdiMlptYzJWMElEMGdlMzA3WEc1Y2JpQWdJQ0JsWVdOb0tHSXNJQ2gyWVd4MVpTd2dhMlY1S1NBOVBpQjdYRzRnSUNBZ0lDQWdJRzltWm5ObGRGdHJaWGxkSUQwZ2FHRnpVSEp2Y0dWeWRIa29ZU3dnYTJWNUtTQS9JSFpoYkhWbElDMGdZVnRyWlhsZElEb2dNRHRjYmlBZ0lDQjlLVHRjYmx4dUlDQWdJSEpsZEhWeWJpQnZabVp6WlhRN1hHNTlPMXh1WEc0dktseHVJQ0FnSUZCdmFXNTBJR1p5YjIwZ1lXNW5iR1VnWVc1a0lHUnBjM1JoYm1ObFhHNGdJQ0FnWEc0Z0lDQWdRSEJoY21GdElGdHZZbXBsWTNSZE9pQXlSQ0J3YjJsdWRDQnZaaUJ2Y21sbmFXNWNiaUFnSUNCQWNHRnlZVzBnVzI1MWJXSmxjbDA2SUVGdVoyeGxJR1p5YjIwZ2IzSnBaMmx1WEc0Z0lDQWdRSEJoY21GdElGdHVkVzFpWlhKZE9pQkVhWE4wWVc1alpTQm1jbTl0SUc5eWFXZHBibHh1SUNBZ0lFQnlaWFIxY200Z1cyOWlhbVZqZEYwNklFTmhiR04xYkdGMFpXUWdNa1FnY0c5cGJuUmNiaW92WEc1bGVIQnZjblFnWTI5dWMzUWdjRzlwYm5SR2NtOXRRVzVuYkdWQmJtUkVhWE4wWVc1alpTQTlJQ2h2Y21sbmFXNHNJR0Z1WjJ4bExDQmthWE4wWVc1alpTa2dQVDRnZTF4dUlDQWdJR0Z1WjJ4bElEMGdaR1ZuY21WbGMxUnZVbUZrYVdGdWN5aGhibWRzWlNrN1hHNWNiaUFnSUNCeVpYUjFjbTRnZTF4dUlDQWdJQ0FnSUNCNE9pQmthWE4wWVc1alpTQXFJRTFoZEdndVkyOXpLR0Z1WjJ4bEtTQXJJRzl5YVdkcGJpNTRMRnh1SUNBZ0lDQWdJQ0I1T2lCa2FYTjBZVzVqWlNBcUlFMWhkR2d1YzJsdUtHRnVaMnhsS1NBcklHOXlhV2RwYmk1NVhHNGdJQ0FnZlR0Y2JuMDdYRzVjYmk4cVhHNGdJQ0FnUTI5dWRtVnlkQ0J5WVdScFlXNXpJSFJ2SUdSbFozSmxaWE5jYmlBZ0lDQmNiaUFnSUNCQWNHRnlZVzBnVzI1MWJXSmxjbDA2SUZaaGJIVmxJR2x1SUhKaFpHbGhibk5jYmlBZ0lDQkFjbVYwZFhKdUlGdHVkVzFpWlhKZE9pQldZV3gxWlNCcGJpQmtaV2R5WldWelhHNHFMMXh1Wlhod2IzSjBJR052Ym5OMElISmhaR2xoYm5OVWIwUmxaM0psWlhNZ1BTQW9jbUZrYVdGdWN5a2dQVDRnY21Ga2FXRnVjeUFxSURFNE1DQXZJRTFoZEdndVVFazdYRzVjYmk4cVhHNGdJQ0FnVW1WMGRYSnVJSEpoYm1SdmJTQnVkVzFpWlhJZ1ltVjBkMlZsYmlCeVlXNW5aVnh1SUNBZ0lGeHVJQ0FnSUVCd1lYSmhiU0JiYm5WdFltVnlYU0FvYjNCMGFXOXVZV3dwT2lCUGRYUndkWFFnYldsdWFXMTFiVnh1SUNBZ0lFQndZWEpoYlNCYmJuVnRZbVZ5WFNBb2IzQjBhVzl1WVd3cE9pQlBkWFJ3ZFhRZ2JXRjRhVzExYlZ4dUlDQWdJRUJ5WlhSMWNtNGdXMjUxYldKbGNsMDZJRkpoYm1SdmJTQnVkVzFpWlhJZ2QybDBhR2x1SUhKaGJtZGxMQ0J2Y2lBd0lHRnVaQ0F4SUdsbUlHNXZibVVnY0hKdmRtbGtaV1JjYmlvdlhHNWxlSEJ2Y25RZ1kyOXVjM1FnY21GdVpHOXRJRDBnS0cxcGJpQTlJREFzSUcxaGVDQTlJREVwSUQwK0lFMWhkR2d1Y21GdVpHOXRLQ2tnS2lBb2JXRjRJQzBnYldsdUtTQXJJRzFwYmp0Y2JseHVMeXBjYmlBZ0lDQkRZV3hqZFd4aGRHVWdjbVZzWVhScGRtVWdkbUZzZFdWY2JpQWdJQ0JjYmlBZ0lDQlVZV3RsY3lCMGFHVWdiM0JsY21GMGIzSWdZVzVrSUhaaGJIVmxJR1p5YjIwZ1lTQnpkSEpwYm1jc0lHbGxJRndpS3owMVhDSXNJR0Z1WkNCaGNIQnNhV1Z6WEc0Z0lDQWdkRzhnZEdobElHTjFjbkpsYm5RZ2RtRnNkV1VnZEc4Z2NtVnpiMngyWlNCaElHNWxkeUIwWVhKblpYUXVYRzRnSUNBZ1hHNGdJQ0FnUUhCaGNtRnRJRnR1ZFcxaVpYSmRPaUJEZFhKeVpXNTBJSFpoYkhWbFhHNGdJQ0FnUUhCaGNtRnRJRnR6ZEhKcGJtZGRPaUJTWld4aGRHbDJaU0IyWVd4MVpWeHVJQ0FnSUVCeVpYUjFjbTRnVzI1MWJXSmxjbDA2SUU1bGR5QjJZV3gxWlZ4dUtpOWNibVY0Y0c5eWRDQmpiMjV6ZENCeVpXeGhkR2wyWlZaaGJIVmxJRDBnS0dOMWNuSmxiblFzSUhKbGJHRjBhWFpsS1NBOVBpQjdYRzRnSUNBZ2JHVjBJRzVsZDFaaGJIVmxJRDBnWTNWeWNtVnVkRHRjYmlBZ0lDQmpiMjV6ZENCbGNYVmhkR2x2YmlBOUlISmxiR0YwYVhabExuTndiR2wwS0NjOUp5azdYRzRnSUNBZ1kyOXVjM1FnYjNCbGNtRjBiM0lnUFNCbGNYVmhkR2x2Ymxzd1hUdGNiaUFnSUNCc1pYUWdleUIxYm1sMExDQjJZV3gxWlNCOUlEMGdjM0JzYVhSV1lXeDFaVlZ1YVhRb1pYRjFZWFJwYjI1Yk1WMHBPMXh1WEc0Z0lDQWdkbUZzZFdVZ1BTQndZWEp6WlVac2IyRjBLSFpoYkhWbEtUdGNibHh1SUNBZ0lITjNhWFJqYUNBb2IzQmxjbUYwYjNJcElIdGNiaUFnSUNCallYTmxJQ2NySnpwY2JpQWdJQ0FnSUNBZ2JtVjNWbUZzZFdVZ0t6MGdkbUZzZFdVN1hHNGdJQ0FnSUNBZ0lHSnlaV0ZyTzF4dUlDQWdJR05oYzJVZ0p5MG5PbHh1SUNBZ0lDQWdJQ0J1WlhkV1lXeDFaU0F0UFNCMllXeDFaVHRjYmlBZ0lDQWdJQ0FnWW5KbFlXczdYRzRnSUNBZ1kyRnpaU0FuS2ljNlhHNGdJQ0FnSUNBZ0lHNWxkMVpoYkhWbElDbzlJSFpoYkhWbE8xeHVJQ0FnSUNBZ0lDQmljbVZoYXp0Y2JpQWdJQ0JqWVhObElDY3ZKenBjYmlBZ0lDQWdJQ0FnYm1WM1ZtRnNkV1VnTHowZ2RtRnNkV1U3WEc0Z0lDQWdJQ0FnSUdKeVpXRnJPMXh1SUNBZ0lIMWNiaUFnSUNCY2JpQWdJQ0JwWmlBb2RXNXBkQ2tnZTF4dUlDQWdJQ0FnSUNCdVpYZFdZV3gxWlNBclBTQjFibWwwTzF4dUlDQWdJSDFjYmx4dUlDQWdJSEpsZEhWeWJpQnVaWGRXWVd4MVpUdGNibjA3WEc1Y2JpOHFYRzRnSUNBZ1VtVnpkSEpwWTNRZ2RtRnNkV1VnZEc4Z2NtRnVaMlZjYmlBZ0lDQmNiaUFnSUNCU1pYUjFjbTRnZG1Gc2RXVWdkMmwwYUdsdUlIUm9aU0J5WVc1blpTQnZaaUJzYjNkbGNreHBiV2wwSUdGdVpDQjFjSEJsY2t4cGJXbDBYRzRnSUNBZ1hHNGdJQ0FnUUhCaGNtRnRJRnR1ZFcxaVpYSmRPaUJXWVd4MVpTQjBieUJyWldWd0lIZHBkR2hwYmlCeVlXNW5aVnh1SUNBZ0lFQndZWEpoYlNCYmJuVnRZbVZ5WFRvZ1RHOTNaWElnYkdsdGFYUWdiMllnY21GdVoyVmNiaUFnSUNCQWNHRnlZVzBnVzI1MWJXSmxjbDA2SUZWd2NHVnlJR3hwYldsMElHOW1JSEpoYm1kbFhHNGdJQ0FnUUhKbGRIVnliaUJiYm5WdFltVnlYVG9nVm1Gc2RXVWdZWE1nYkdsdGFYUmxaQ0IzYVhSb2FXNGdaMmwyWlc0Z2NtRnVaMlZjYmlvdlhHNWxlSEJ2Y25RZ1kyOXVjM1FnY21WemRISnBZM1FnUFNBb2RtRnNkV1VzSUcxcGJpd2diV0Y0S1NBOVBpQk5ZWFJvTG0xaGVDaE5ZWFJvTG0xcGJpaDJZV3gxWlN3Z2JXRjRLU3dnYldsdUtUdGNibHh1THlwY2JpQWdJQ0JHY21GdFpYSmhkR1V0YVc1a1pYQmxibVJsYm5RZ2MyMXZiM1JvYVc1blhHNWNiaUFnSUNCQWNHRnlZVzBnVzI1MWJXSmxjbDA2SUU1bGR5QjJZV3gxWlZ4dUlDQWdJRUJ3WVhKaGJTQmJiblZ0WW1WeVhUb2dUMnhrSUhaaGJIVmxYRzRnSUNBZ1FIQmhjbUZ0SUZ0dWRXMWlaWEpkT2lCR2NtRnRaU0JrZFhKaGRHbHZibHh1SUNBZ0lFQndZWEpoYlNCYmJuVnRZbVZ5WFNBb2IzQjBhVzl1WVd3cE9pQlRiVzl2ZEdocGJtY2dLREFnYVhNZ2JtOXVaU2xjYmlvdlhHNWxlSEJ2Y25RZ1kyOXVjM1FnYzIxdmIzUm9JRDBnS0c1bGQxWmhiSFZsTENCdmJHUldZV3gxWlN3Z1pIVnlZWFJwYjI0c0lITnRiMjkwYUdsdVp5QTlJREFwSUQwK0lIUnZSR1ZqYVcxaGJDaHZiR1JXWVd4MVpTQXJJQ2hrZFhKaGRHbHZiaUFxSUNodVpYZFdZV3gxWlNBdElHOXNaRlpoYkhWbEtTQXZJRTFoZEdndWJXRjRLSE50YjI5MGFHbHVaeXdnWkhWeVlYUnBiMjRwS1NrN1hHNWNiaThxWEc0Z0lDQWdRMjl1ZG1WeWRDQjRJSEJsY2lCelpXTnZibVFnZEc4Z2NHVnlJR1p5WVcxbElIWmxiRzlqYVhSNUlHSmhjMlZrSUc5dUlHWndjMXh1SUNBZ0lGeHVJQ0FnSUVCd1lYSmhiU0JiYm5WdFltVnlYVG9nVlc1cGRDQndaWElnYzJWamIyNWtYRzRnSUNBZ1FIQmhjbUZ0SUZ0dWRXMWlaWEpkT2lCR2NtRnRaU0JrZFhKaGRHbHZiaUJwYmlCdGMxeHVLaTljYm1WNGNHOXlkQ0JqYjI1emRDQnpjR1ZsWkZCbGNrWnlZVzFsSUQwZ0tIaHdjeXdnWm5KaGJXVkVkWEpoZEdsdmJpa2dQVDRnS0dselRuVnRLSGh3Y3lrcElEOGdlSEJ6SUM4Z0tERXdNREFnTHlCbWNtRnRaVVIxY21GMGFXOXVLU0E2SURBN1hHNWNiaThxWEc0Z0lDQWdRMjl1ZG1WeWRDQjJaV3h2WTJsMGVTQnBiblJ2SUhabGJHbGphWFI1SUhCbGNpQnpaV052Ym1SY2JpQWdJQ0JjYmlBZ0lDQkFjR0Z5WVcwZ1cyNTFiV0psY2wwNklGVnVhWFFnY0dWeUlHWnlZVzFsWEc0Z0lDQWdRSEJoY21GdElGdHVkVzFpWlhKZE9pQkdjbUZ0WlNCa2RYSmhkR2x2YmlCcGJpQnRjMXh1S2k5Y2JtVjRjRzl5ZENCamIyNXpkQ0J6Y0dWbFpGQmxjbE5sWTI5dVpDQTlJQ2gyWld4dlkybDBlU3dnWm5KaGJXVkVkWEpoZEdsdmJpa2dQVDRnZG1Wc2IyTnBkSGtnS2lBb01UQXdNQ0F2SUdaeVlXMWxSSFZ5WVhScGIyNHBPMXh1WEc0dktseHVJQ0FnSUVOeVpXRjBaU0J6ZEdWd2NHVmtJSFpsY25OcGIyNGdiMllnTUMweElIQnliMmR5WlhOelhHNGdJQ0FnWEc0Z0lDQWdRSEJoY21GdElGdHVkVzFpWlhKZE9pQkRkWEp5Wlc1MElIWmhiSFZsWEc0Z0lDQWdRSEJoY21GdElGdHBiblJkT2lCT2RXMWlaWElnYjJZZ2MzUmxjSE5jYmlBZ0lDQkFjbVYwZFhKdUlGdHVkVzFpWlhKZE9pQlRkR1Z3Y0dWa0lIWmhiSFZsWEc0cUwxeHVaWGh3YjNKMElHTnZibk4wSUhOMFpYQlFjbTluY21WemN5QTlJQ2h3Y205bmNtVnpjeXdnYzNSbGNITXBJRDArSUh0Y2JpQWdJQ0JqYjI1emRDQnpaV2R0Wlc1MElEMGdNU0F2SUNoemRHVndjeUF0SURFcE8xeHVJQ0FnSUdOdmJuTjBJSFJoY21kbGRDQTlJREVnTFNBb01TQXZJSE4wWlhCektUdGNiaUFnSUNCamIyNXpkQ0J3Y205bmNtVnpjMDltVkdGeVoyVjBJRDBnVFdGMGFDNXRhVzRvY0hKdlozSmxjM01nTHlCMFlYSm5aWFFzSURFcE8xeHVYRzRnSUNBZ2NtVjBkWEp1SUUxaGRHZ3VabXh2YjNJb2NISnZaM0psYzNOUFpsUmhjbWRsZENBdklITmxaMjFsYm5RcElDb2djMlZuYldWdWREdGNibjA3SWwxOVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvaW5jL2NhbGMuanNcbiAqKiBtb2R1bGUgaWQgPSAxM1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZnVuY3Rpb24gcHVzaCgpIHtcbiAgICB2YXIgX0FycmF5JHByb3RvdHlwZSRwdXNoO1xuXG4gICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgICAgYXJnc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICB9XG5cbiAgICAoX0FycmF5JHByb3RvdHlwZSRwdXNoID0gQXJyYXkucHJvdG90eXBlLnB1c2gpLmNhbGwuYXBwbHkoX0FycmF5JHByb3RvdHlwZSRwdXNoLCBbdGhpc10uY29uY2F0KGFyZ3MpKTtcblxuICAgIGlmICh0aGlzLmxlbmd0aCA+PSB0aGlzLl9tYXhTaXplKSB7XG4gICAgICAgIHRoaXMuc2hpZnQoKTtcbiAgICB9XG59XG5cbnZhciBDQU1FTF9DQVNFX1BBVFRFUk4gPSAvKFthLXpdKShbQS1aXSkvZztcbnZhciBSRVBMQUNFX1RFTVBMQVRFID0gJyQxLSQyJztcbnZhciBIQVNfUEVSRk9STUFOQ0VfTk9XID0gdHlwZW9mIHBlcmZvcm1hbmNlICE9PSAndW5kZWZpbmVkJyAmJiBwZXJmb3JtYW5jZS5ub3c7XG5cbi8qXG4gICAgR2V0IHZhciB0eXBlIGFzIHN0cmluZ1xuICAgIFxuICAgIEBwYXJhbTogVmFyaWFibGUgdG8gdGVzdFxuICAgIEByZXR1cm4gW3N0cmluZ106IFJldHVybnMsIGZvciBpbnN0YW5jZSAnT2JqZWN0JyBpZiBbb2JqZWN0IE9iamVjdF1cbiovXG52YXIgdmFyVHlwZSA9IGZ1bmN0aW9uICh2YXJpYWJsZSkge1xuICAgIHJldHVybiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwodmFyaWFibGUpLnNsaWNlKDgsIC0xKTtcbn07XG5cbi8qXG4gICAgQ29udmVydCBjYW1lbENhc2UgdG8gZGFzaC1jYXNlXG5cbiAgICBAcGFyYW0gW3N0cmluZ11cbiAgICBAcmV0dXJuIFtzdHJpbmddXG4qL1xudmFyIGNhbWVsVG9EYXNoID0gZXhwb3J0cy5jYW1lbFRvRGFzaCA9IGZ1bmN0aW9uIChzdHJpbmcpIHtcbiAgICByZXR1cm4gc3RyaW5nLnJlcGxhY2UoQ0FNRUxfQ0FTRV9QQVRURVJOLCBSRVBMQUNFX1RFTVBMQVRFKS50b0xvd2VyQ2FzZSgpO1xufTtcblxuLypcbiAgICBDcmVhdGUgYW4gYXV0by1jdWxsaW5nIGJ1ZmZlciBhcnJheVxuXG4gICAgQHBhcmFtIFthcnJheV1cbiAgICBAcGFyYW0gW2ludF1cbiAgICBAcmV0dXJuIFthcnJheV1cbiovXG52YXIgY3JlYXRlQnVmZmVyID0gZXhwb3J0cy5jcmVhdGVCdWZmZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIG1heFNpemUgPSBhcmd1bWVudHMubGVuZ3RoIDw9IDAgfHwgYXJndW1lbnRzWzBdID09PSB1bmRlZmluZWQgPyAzIDogYXJndW1lbnRzWzBdO1xuICAgIHZhciBhcnJheSA9IGFyZ3VtZW50cy5sZW5ndGggPD0gMSB8fCBhcmd1bWVudHNbMV0gPT09IHVuZGVmaW5lZCA/IFtdIDogYXJndW1lbnRzWzFdO1xuXG4gICAgYXJyYXkucHVzaCA9IHB1c2g7XG4gICAgYXJyYXkuX21heFNpemUgPSBtYXhTaXplIHx8IDA7XG5cbiAgICByZXR1cm4gYXJyYXk7XG59O1xuXG52YXIgY3JlYXRlRGVsaW1pdGVkID0gZXhwb3J0cy5jcmVhdGVEZWxpbWl0ZWQgPSBmdW5jdGlvbiAodmFsdWVzLCB0ZXJtcywgZGVsaW1pdGVyLCBjaG9wKSB7XG4gICAgdmFyIGNvbWJpbmVkID0gJyc7XG5cbiAgICB0ZXJtcy5mb3JFYWNoKGZ1bmN0aW9uICh0ZXJtKSB7XG4gICAgICAgIGlmICh2YWx1ZXMuaGFzT3duUHJvcGVydHkodGVybSkpIHtcbiAgICAgICAgICAgIGNvbWJpbmVkICs9IHZhbHVlc1t0ZXJtXSArIGRlbGltaXRlcjtcbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgaWYgKGNob3ApIHtcbiAgICAgICAgY29tYmluZWQgPSBjb21iaW5lZC5zbGljZSgwLCAtY2hvcCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbWJpbmVkO1xufTtcblxuLypcbiAgICBDcmVhdGUgYSBmdW5jdGlvbiBzdHJpbmdcblxuICAgICcyMHB4JywgJ3RyYW5zbGF0ZScgLT4gJ3RyYW5zbGF0ZSgyMHB4KSdcblxuICAgIEBwYXJhbSBbc3RyaW5nXVxuICAgIEBwYXJhbSBbc3RyaW5nXVxuICAgIEByZXR1cm4gW3N0cmluZ11cbiovXG52YXIgY3JlYXRlRnVuY3Rpb25TdHJpbmcgPSBleHBvcnRzLmNyZWF0ZUZ1bmN0aW9uU3RyaW5nID0gZnVuY3Rpb24gKHZhbHVlLCBwcmVmaXgpIHtcbiAgICByZXR1cm4gcHJlZml4ICsgJygnICsgdmFsdWUgKyAnKSc7XG59O1xuXG4vKlxuICAgIEdlbmVyYXRlIGN1cnJlbnQgdGltZXN0YW1wXG4gICAgXG4gICAgQHJldHVybiBbdGltZXN0YW1wXTogQ3VycmVudCBVTklYIHRpbWVzdGFtcFxuKi9cbnZhciBjdXJyZW50VGltZSA9IGV4cG9ydHMuY3VycmVudFRpbWUgPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIEhBU19QRVJGT1JNQU5DRV9OT1cgPyBwZXJmb3JtYW5jZS5ub3coKSA6IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xufTtcblxuLypcbiAgICBJdGVyYXRlIG92ZXIgYW4gb2JqZWN0IGFuZCBmaXJlIGEgY2FsbGJhY2sgZm9yIGV2ZXJ5IGl0ZW0gaW4gaXRcblxuICAgIEBwYXJhbSBbb2JqZWN0XTogT2JqZWN0IHRvIGl0ZXJhdGUgb3ZlclxuICAgIEBwYXJhbSBbZnVuY3Rpb25dOiBDYWxsYmFjayB0byBmaXJlXG4qL1xudmFyIGVhY2ggPSBleHBvcnRzLmVhY2ggPSBmdW5jdGlvbiAob2JqZWN0LCBjYWxsYmFjaykge1xuICAgIHZhciBrZXlzID0gb2JqZWN0ID8gT2JqZWN0LmtleXMob2JqZWN0KSA6IFtdO1xuICAgIHZhciBudW1LZXlzID0ga2V5cy5sZW5ndGg7XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IG51bUtleXM7IGkrKykge1xuICAgICAgICB2YXIga2V5ID0ga2V5c1tpXTtcbiAgICAgICAgdmFyIHByb3AgPSBvYmplY3Rba2V5XTtcblxuICAgICAgICBjYWxsYmFjayhwcm9wLCBrZXksIG9iamVjdCk7XG4gICAgfVxufTtcblxuLypcbiAgICBTcGxpdCBjb2xvciBzdHJpbmcgaW50byBtYXAgb2YgY29sb3IgcHJvcGVydGllc1xuXG4gICAgXCJyZ2JhKDI1NSwgMjU1LCAyNTUsIDApXCIsIFtcIlJlZFwiLCAnR3JlZW5cIiwgXCJCbHVlXCIsIFwiQWxwaGFcIl1cblxuICAgIHsgUmVkOiAyNTUuLi4gfVxuKi9cbnZhciBnZXRDb2xvclZhbHVlcyA9IGV4cG9ydHMuZ2V0Q29sb3JWYWx1ZXMgPSBmdW5jdGlvbiAodmFsdWUsIGNvbG9yVGVybXMpIHtcbiAgICB2YXIgY29sb3JWYWx1ZXMgPSB7fTtcbiAgICB2YXIgY29sb3JzID0gc3BsaXRDb21tYURlbGltaXRlZChnZXRWYWx1ZUZyb21GdW5jdGlvblN0cmluZyh2YWx1ZSkpO1xuXG4gICAgY29sb3JUZXJtcy5mb3JFYWNoKGZ1bmN0aW9uICh0ZXJtLCBpKSB7XG4gICAgICAgIHJldHVybiBjb2xvclRlcm1zW3Rlcm1dID0gY29sb3JzW2ldICE9PSB1bmRlZmluZWQgPyBjb2xvcnNbaV0gOiAxO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIGNvbG9yVmFsdWVzO1xufTtcblxuLypcbiAgICBHZXQgdmFsdWUgZnJvbSBmdW5jdGlvbiBzdHJpbmdcblxuICAgIFwidHJhbnNsYXRlWCgyMHB4KVwiIC0+IFwiMjBweFwiXG4qL1xudmFyIGdldFZhbHVlRnJvbUZ1bmN0aW9uU3RyaW5nID0gZXhwb3J0cy5nZXRWYWx1ZUZyb21GdW5jdGlvblN0cmluZyA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgIHJldHVybiB2YWx1ZS5zdWJzdHJpbmcodmFsdWUuaW5kZXhPZignKCcpICsgMSwgdmFsdWUubGFzdEluZGV4T2YoJyknKSk7XG59O1xuXG4vKlxuICAgIENoZWNrIGlmIHR3byBvYmplY3RzIGhhdmUgY2hhbmdlZCBmcm9tIGVhY2ggb3RoZXJcbiAgICBcbiAgICBAcGFyYW0gW29iamVjdF06IElucHV0IEFcbiAgICBAcGFyYW0gW29iamVjdF06IElucHV0IEJcbiAgICBAcmV0dXJuIFtib29sZWFuXTogVHJ1ZSBpZiBkaWZmZXJlbnRcbiovXG52YXIgaGFzQ2hhbmdlZCA9IGV4cG9ydHMuaGFzQ2hhbmdlZCA9IGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgdmFyIGNoYW5nZWQgPSBmYWxzZTtcblxuICAgIGVhY2goYSwgZnVuY3Rpb24gKHZhbHVlLCBrZXkpIHtcbiAgICAgICAgaWYgKGhhc1Byb3BlcnR5KGIsIGtleSkpIHtcbiAgICAgICAgICAgIGlmICh2YWx1ZSAhPT0gYltrZXldKSB7XG4gICAgICAgICAgICAgICAgY2hhbmdlZCA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjaGFuZ2VkID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIGNoYW5nZWQ7XG59O1xuXG4vKlxuICAgIENoZWNrIGlmIG9iamVjdCBoYXMgcHJvcGVydHkgYW5kIGl0IGlzbid0IHVuZGVmaW5lZFxuXG4gICAgQHBhcmFtIFtvYmplY3RdXG4gICAgQHBhcmFtIFtzdHJpbmddXG4gICAgQHJldHVybiBbYm9vbGVhbl1cbiovXG52YXIgaGFzUHJvcGVydHkgPSBleHBvcnRzLmhhc1Byb3BlcnR5ID0gZnVuY3Rpb24gKG9iamVjdCwgcHJvcGVydHlOYW1lKSB7XG4gICAgcmV0dXJuIG9iamVjdC5oYXNPd25Qcm9wZXJ0eShwcm9wZXJ0eU5hbWUpICYmIG9iamVjdFtwcm9wZXJ0eU5hbWVdICE9PSB1bmRlZmluZWQ7XG59O1xuXG4vKlxuICAgIElzIHV0aWxzIHZhciBhbiBhcnJheSA/IFxuICAgIFxuICAgIEBwYXJhbTogVmFyaWFibGUgdG8gdGVzdFxuICAgIEByZXR1cm4gW2Jvb2xlYW5dOiBSZXR1cm5zIHRydWUgaWYgdXRpbHMudmFyVHlwZSA9PT0gJ0FycmF5J1xuKi9cbnZhciBpc0FycmF5ID0gZXhwb3J0cy5pc0FycmF5ID0gZnVuY3Rpb24gKGFycikge1xuICAgIHJldHVybiB2YXJUeXBlKGFycikgPT09ICdBcnJheSc7XG59O1xuXG4vKlxuICAgIElzIHV0aWxzIHZhciBhIGZ1bmN0aW9uID8gXG4gICAgXG4gICAgQHBhcmFtOiBWYXJpYWJsZSB0byB0ZXN0XG4gICAgQHJldHVybiBbYm9vbGVhbl06IFJldHVybnMgdHJ1ZSBpZiB1dGlscy52YXJUeXBlID09PSAnRnVuY3Rpb24nXG4qL1xudmFyIGlzRnVuYyA9IGV4cG9ydHMuaXNGdW5jID0gZnVuY3Rpb24gKG9iaikge1xuICAgIHJldHVybiB2YXJUeXBlKG9iaikgPT09ICdGdW5jdGlvbic7XG59O1xuXG4vKlxuICAgIElzIHV0aWxzIHZhciBhIG51bWJlcj9cbiAgICBcbiAgICBAcGFyYW06IFZhcmlhYmxlIHRvIHRlc3RcbiAgICBAcmV0dXJuIFtib29sZWFuXTogUmV0dXJucyB0cnVlIGlmIHR5cGVvZiA9PT0gJ251bWJlcidcbiovXG52YXIgaXNOdW0gPSBleHBvcnRzLmlzTnVtID0gZnVuY3Rpb24gKG51bSkge1xuICAgIHJldHVybiB0eXBlb2YgbnVtID09PSAnbnVtYmVyJztcbn07XG5cbi8qXG4gICAgSXMgdXRpbHMgdmFyIGFuIG9iamVjdD9cbiAgICBcbiAgICBAcGFyYW06IFZhcmlhYmxlIHRvIHRlc3RcbiAgICBAcmV0dXJuIFtib29sZWFuXTogUmV0dXJucyB0cnVlIGlmIHR5cGVvZiA9PT0gJ29iamVjdCdcbiovXG52YXIgaXNPYmogPSBleHBvcnRzLmlzT2JqID0gZnVuY3Rpb24gKG9iaikge1xuICAgIHJldHVybiB0eXBlb2Ygb2JqID09PSAnb2JqZWN0Jztcbn07XG5cbi8qXG4gICAgSXMgdXRpbHMgYSByZWxhdGl2ZSB2YWx1ZSBhc3NpZ25tZW50P1xuICAgIFxuICAgIEBwYXJhbSBbc3RyaW5nXTogVmFyaWFibGUgdG8gdGVzdFxuICAgIEByZXR1cm4gW2Jvb2xlYW5dOiBJZiB1dGlscyBsb29rcyBsaWtlIGEgcmVsYXRpdmUgdmFsdWUgYXNzaWdubWVudFxuKi9cbnZhciBpc1JlbGF0aXZlVmFsdWUgPSBleHBvcnRzLmlzUmVsYXRpdmVWYWx1ZSA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgIHJldHVybiB2YWx1ZSAmJiB2YWx1ZS5pbmRleE9mICYmIHZhbHVlLmluZGV4T2YoJz0nKSA+IDAgPyB0cnVlIDogZmFsc2U7XG59O1xuXG4vKlxuICAgIElzIHV0aWxzIHZhciBhIHN0cmluZyA/IFxuICAgIFxuICAgIEBwYXJhbTogVmFyaWFibGUgdG8gdGVzdFxuICAgIEByZXR1cm4gW2Jvb2xlYW5dOiBSZXR1cm5zIHRydWUgaWYgdHlwZW9mIHN0ciA9PT0gJ3N0cmluZydcbiovXG52YXIgaXNTdHJpbmcgPSBleHBvcnRzLmlzU3RyaW5nID0gZnVuY3Rpb24gKHN0cikge1xuICAgIHJldHVybiB0eXBlb2Ygc3RyID09PSAnc3RyaW5nJztcbn07XG5cbi8qXG4gICAgQHBhcmFtIFtzdHJpbmcgfHwgTm9kZUxpc3RdOlxuICAgICAgICBJZiBzdHJpbmcsIHRyZWF0ZWQgYXMgc2VsZWN0b3IuXG4gICAgICAgIElmIG5vdCwgdHJlYXRlZCBhcyBwcmVleGlzdGluZyBOb2RlTGlzdFxuXG4gICAgQHJldHVybiBbQXJyYXldXG4qL1xudmFyIHNlbGVjdERvbSA9IGV4cG9ydHMuc2VsZWN0RG9tID0gZnVuY3Rpb24gKHNlbGVjdG9yKSB7XG4gICAgdmFyIG5vZGVzID0gdHlwZW9mIHNlbGVjdG9yID09PSAnc3RyaW5nJyA/IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoc2VsZWN0b3IpIDogc2VsZWN0b3I7XG4gICAgcmV0dXJuIG5vZGVzLmxlbmd0aCA/IFtdLnNsaWNlLmNhbGwobm9kZXMpIDogW10ucHVzaChub2Rlcyk7XG59O1xuXG4vKlxuICAgIFNwbGl0IGNvbW1hLWRlbGltaXRlZCBzdHJpbmdcblxuICAgIFwiZm9vLGJhclwiIC0+IFtcImZvb1wiLCBcImJhclwiXVxuXG4gICAgQHBhcmFtIFtzdHJpbmddXG4gICAgQHJldHVybiBbYXJyYXldXG4qL1xudmFyIHNwbGl0Q29tbWFEZWxpbWl0ZWQgPSBleHBvcnRzLnNwbGl0Q29tbWFEZWxpbWl0ZWQgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICByZXR1cm4gaXNTdHJpbmcodmFsdWUpID8gdmFsdWUuc3BsaXQoLyxcXHMqLykgOiBbdmFsdWVdO1xufTtcblxuLypcbiAgICBTcGxpdCBzcGFjZS1kZWxpbWl0ZWQgc3RyaW5nXG5cbiAgICBcImZvbyBiYXJcIiAtPiBbXCJmb29cIiwgXCJiYXJcIl1cblxuICAgIEBwYXJhbSBbc3RyaW5nXVxuICAgIEByZXR1cm4gW2FycmF5XVxuKi9cbnZhciBzcGxpdFNwYWNlRGVsaW1pdGVkID0gZXhwb3J0cy5zcGxpdFNwYWNlRGVsaW1pdGVkID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgcmV0dXJuIGlzU3RyaW5nKHZhbHVlKSA/IHZhbHVlLnNwbGl0KCcgJykgOiBbdmFsdWVdO1xufTtcblxuLypcbiAgICBTcGxpdCBhIHZhbHVlIGludG8gYSB2YWx1ZS91bml0IG9iamVjdFxuICAgIFxuICAgICAgICBcIjIwMHB4XCIgLT4geyB2YWx1ZTogMjAwLCB1bml0OiBcInB4XCIgfVxuICAgICAgICBcbiAgICBAcGFyYW0gW3N0cmluZ106IFZhbHVlIHRvIHNwbGl0XG4gICAgQHJldHVybiBbb2JqZWN0XTogT2JqZWN0IHdpdGggdmFsdWUgYW5kIHVuaXQgcHJvcHNcbiovXG52YXIgc3BsaXRWYWx1ZVVuaXQgPSBleHBvcnRzLnNwbGl0VmFsdWVVbml0ID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgdmFyIHNwbGl0VmFsID0gdmFsdWUubWF0Y2goLygtP1xcZCpcXC4/XFxkKikoLiopLyk7XG5cbiAgICByZXR1cm4ge1xuICAgICAgICB2YWx1ZTogcGFyc2VGbG9hdChzcGxpdFZhbFsxXSksXG4gICAgICAgIHVuaXQ6IHNwbGl0VmFsWzJdXG4gICAgfTtcbn07XG5cbi8qXG4gICAgQ29udmVydCBudW1iZXIgdG8geCBkZWNpbWFsIHBsYWNlc1xuXG4gICAgQHBhcmFtIFtudW1iZXJdXG4gICAgQHBhcmFtIFtudW1iZXJdXG4gICAgQHJldHVybiBbbnVtYmVyXVxuKi9cbnZhciB0b0RlY2ltYWwgPSBleHBvcnRzLnRvRGVjaW1hbCA9IGZ1bmN0aW9uIChudW0pIHtcbiAgICB2YXIgcHJlY2lzaW9uID0gYXJndW1lbnRzLmxlbmd0aCA8PSAxIHx8IGFyZ3VtZW50c1sxXSA9PT0gdW5kZWZpbmVkID8gMiA6IGFyZ3VtZW50c1sxXTtcblxuICAgIHByZWNpc2lvbiA9IE1hdGgucG93KDEwLCBwcmVjaXNpb24pO1xuICAgIHJldHVybiBNYXRoLnJvdW5kKG51bSAqIHByZWNpc2lvbikgLyBwcmVjaXNpb247XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluTnlZeTlwYm1NdmRYUnBiSE11YW5NaVhTd2libUZ0WlhNaU9sdGRMQ0p0WVhCd2FXNW5jeUk2SWpzN08wRkJRVUVzVTBGQlV5eEpRVUZVTEVkQlFYVkNPenM3YzBOQlFVNDdPMHRCUVUwN08wRkJRMjVDTEcxRFFVRk5MRk5CUVU0c1EwRkJaMElzU1VGQmFFSXNSVUZCY1VJc1NVRkJja0lzSzBKQlFUQkNMR0ZCUVZNc1MwRkJia01zUlVGRWJVSTdPMEZCUjI1Q0xGRkJRVWtzUzBGQlN5eE5RVUZNTEVsQlFXVXNTMEZCU3l4UlFVRk1MRVZCUVdVN1FVRkRPVUlzWVVGQlN5eExRVUZNTEVkQlJEaENPMHRCUVd4RE8wTkJTRW83TzBGQlVVRXNTVUZCVFN4eFFrRkJjVUlzYVVKQlFYSkNPMEZCUTA0c1NVRkJUU3h0UWtGQmJVSXNUMEZCYmtJN1FVRkRUaXhKUVVGTkxITkNRVUYxUWl4UFFVRlBMRmRCUVZBc1MwRkJkVUlzVjBGQmRrSXNTVUZCYzBNc1dVRkJXU3hIUVVGYU96czdPenM3T3p0QlFWRnVSU3hKUVVGTkxGVkJRVlU3VjBGQldTeFBRVUZQTEZOQlFWQXNRMEZCYVVJc1VVRkJha0lzUTBGQk1FSXNTVUZCTVVJc1EwRkJLMElzVVVGQkwwSXNSVUZCZVVNc1MwRkJla01zUTBGQkswTXNRMEZCTDBNc1JVRkJhMFFzUTBGQlF5eERRVUZFTzBOQlFUbEVPenM3T3pzN096dEJRVkZVTEVsQlFVMHNiME5CUVdNc1ZVRkJReXhOUVVGRU8xZEJRVmtzVDBGQlR5eFBRVUZRTEVOQlFXVXNhMEpCUVdZc1JVRkJiVU1zWjBKQlFXNURMRVZCUVhGRUxGZEJRWEpFTzBOQlFWbzdPenM3T3pzN096dEJRVk53UWl4SlFVRk5MSE5EUVVGbExGbEJRVFpDTzFGQlFUVkNMR2RGUVVGVkxHbENRVUZyUWp0UlFVRm1MRGhFUVVGUkxHdENRVUZQT3p0QlFVTnlSQ3hWUVVGTkxFbEJRVTRzUjBGQllTeEpRVUZpTEVOQlJIRkVPMEZCUlhKRUxGVkJRVTBzVVVGQlRpeEhRVUZwUWl4WFFVRlhMRU5CUVZnc1EwRkdiME03TzBGQlNYSkVMRmRCUVU4c1MwRkJVQ3hEUVVweFJEdERRVUUzUWpzN1FVRlBja0lzU1VGQlRTdzBRMEZCYTBJc1ZVRkJReXhOUVVGRUxFVkJRVk1zUzBGQlZDeEZRVUZuUWl4VFFVRm9RaXhGUVVFeVFpeEpRVUV6UWl4RlFVRnZRenRCUVVNdlJDeFJRVUZKTEZkQlFWY3NSVUZCV0N4RFFVUXlSRHM3UVVGSEwwUXNWVUZCVFN4UFFVRk9MRU5CUVdNc1ZVRkJReXhKUVVGRUxFVkJRVlU3UVVGRGNFSXNXVUZCU1N4UFFVRlBMR05CUVZBc1EwRkJjMElzU1VGQmRFSXNRMEZCU2l4RlFVRnBRenRCUVVNM1FpeDNRa0ZCV1N4UFFVRlBMRWxCUVZBc1NVRkJaU3hUUVVGbUxFTkJSR2xDTzFOQlFXcERPMHRCUkZVc1EwRkJaQ3hEUVVnclJEczdRVUZUTDBRc1VVRkJTU3hKUVVGS0xFVkJRVlU3UVVGRFRpeHRRa0ZCVnl4VFFVRlRMRXRCUVZRc1EwRkJaU3hEUVVGbUxFVkJRV3RDTEVOQlFVTXNTVUZCUkN4RFFVRTNRaXhEUVVSTk8wdEJRVlk3TzBGQlNVRXNWMEZCVHl4UlFVRlFMRU5CWWl0RU8wTkJRWEJET3pzN096czdPenM3T3p0QlFYbENlRUlzU1VGQlRTeHpSRUZCZFVJc1ZVRkJReXhMUVVGRUxFVkJRVkVzVFVGQlVqdFhRVUZ6UWl4bFFVRlZPME5CUVdoRE96czdPenM3TzBGQlR6ZENMRWxCUVUwc2IwTkJRV003VjBGQlRTeHpRa0ZCYzBJc1dVRkJXU3hIUVVGYUxFVkJRWFJDTEVkQlFUQkRMRWxCUVVrc1NVRkJTaXhIUVVGWExFOUJRVmdzUlVGQk1VTTdRMEZCVGpzN096czdPenM3UVVGUmNFSXNTVUZCVFN4elFrRkJUeXhWUVVGRExFMUJRVVFzUlVGQlV5eFJRVUZVTEVWQlFYTkNPMEZCUTNSRExGRkJRVTBzVDBGQlR5eFRRVUZUTEU5QlFVOHNTVUZCVUN4RFFVRlpMRTFCUVZvc1EwRkJWQ3hIUVVFclFpeEZRVUV2UWl4RFFVUjVRanRCUVVWMFF5eFJRVUZOTEZWQlFWVXNTMEZCU3l4TlFVRk1MRU5CUm5OQ096dEJRVWwwUXl4VFFVRkxMRWxCUVVrc1NVRkJTU3hEUVVGS0xFVkJRVThzU1VGQlNTeFBRVUZLTEVWQlFXRXNSMEZCTjBJc1JVRkJhME03UVVGRE9VSXNXVUZCVFN4TlFVRk5MRXRCUVVzc1EwRkJUQ3hEUVVGT0xFTkJSSGRDTzBGQlJUbENMRmxCUVUwc1QwRkJUeXhQUVVGUExFZEJRVkFzUTBGQlVDeERRVVozUWpzN1FVRkpPVUlzYVVKQlFWTXNTVUZCVkN4RlFVRmxMRWRCUVdZc1JVRkJiMElzVFVGQmNFSXNSVUZLT0VJN1MwRkJiRU03UTBGS1owSTdPenM3T3pzN096dEJRVzFDWWl4SlFVRk5MREJEUVVGcFFpeFZRVUZETEV0QlFVUXNSVUZCVVN4VlFVRlNMRVZCUVhWQ08wRkJRMnBFTEZGQlFVMHNZMEZCWXl4RlFVRmtMRU5CUkRKRE8wRkJSV3BFTEZGQlFVMHNVMEZCVXl4dlFrRkJiMElzTWtKQlFUSkNMRXRCUVROQ0xFTkJRWEJDTEVOQlFWUXNRMEZHTWtNN08wRkJTV3BFTEdWQlFWY3NUMEZCV0N4RFFVRnRRaXhWUVVGRExFbEJRVVFzUlVGQlR5eERRVUZRTzJWQlFXRXNWMEZCVnl4SlFVRllMRWxCUVcxQ0xFMUJRVU1zUTBGQlR5eERRVUZRTEUxQlFXTXNVMEZCWkN4SFFVRXlRaXhQUVVGUExFTkJRVkFzUTBGQk5VSXNSMEZCZDBNc1EwRkJlRU03UzBGQmFFTXNRMEZCYmtJc1EwRkthVVE3TzBGQlRXcEVMRmRCUVU4c1YwRkJVQ3hEUVU1cFJEdERRVUYyUWpzN096czdPenRCUVdOMlFpeEpRVUZOTEd0RlFVRTJRaXhWUVVGRExFdEJRVVE3VjBGQlZ5eE5RVUZOTEZOQlFVNHNRMEZCWjBJc1RVRkJUU3hQUVVGT0xFTkJRV01zUjBGQlpDeEpRVUZ4UWl4RFFVRnlRaXhGUVVGM1FpeE5RVUZOTEZkQlFVNHNRMEZCYTBJc1IwRkJiRUlzUTBGQmVFTTdRMEZCV0RzN096czdPenM3TzBGQlUyNURMRWxCUVUwc2EwTkJRV0VzVlVGQlF5eERRVUZFTEVWQlFVa3NRMEZCU2l4RlFVRlZPMEZCUTJoRExGRkJRVWtzVlVGQlZTeExRVUZXTEVOQlJEUkNPenRCUVVkb1F5eFRRVUZMTEVOQlFVd3NSVUZCVVN4VlFVRkRMRXRCUVVRc1JVRkJVU3hIUVVGU0xFVkJRV2RDTzBGQlEzQkNMRmxCUVVrc1dVRkJXU3hEUVVGYUxFVkJRV1VzUjBGQlppeERRVUZLTEVWQlFYbENPMEZCUTNKQ0xHZENRVUZKTEZWQlFWVXNSVUZCUlN4SFFVRkdMRU5CUVZZc1JVRkJhMEk3UVVGRGJFSXNNRUpCUVZVc1NVRkJWaXhEUVVSclFqdGhRVUYwUWp0VFFVUktMRTFCU1U4N1FVRkRTQ3h6UWtGQlZTeEpRVUZXTEVOQlJFYzdVMEZLVUR0TFFVUkpMRU5CUVZJc1EwRklaME03TzBGQllXaERMRmRCUVU4c1QwRkJVQ3hEUVdKblF6dERRVUZXT3pzN096czdPenM3UVVGMVFtNUNMRWxCUVUwc2IwTkJRV01zVlVGQlF5eE5RVUZFTEVWQlFWTXNXVUZCVkR0WFFVRXdRaXhQUVVGUExHTkJRVkFzUTBGQmMwSXNXVUZCZEVJc1MwRkJkVU1zVDBGQlR5eFpRVUZRTEUxQlFYbENMRk5CUVhwQ08wTkJRV3BGT3pzN096czdPenRCUVZGd1FpeEpRVUZOTERSQ1FVRlZMRlZCUVVNc1IwRkJSRHRYUVVGVExGRkJRVkVzUjBGQlVpeE5RVUZwUWl4UFFVRnFRanREUVVGVU96czdPenM3T3p0QlFWRm9RaXhKUVVGTkxEQkNRVUZUTEZWQlFVTXNSMEZCUkR0WFFVRlRMRkZCUVZFc1IwRkJVaXhOUVVGcFFpeFZRVUZxUWp0RFFVRlVPenM3T3pzN096dEJRVkZtTEVsQlFVMHNkMEpCUVZFc1ZVRkJReXhIUVVGRU8xZEJRVk1zVDBGQlR5eEhRVUZRTEV0QlFXVXNVVUZCWmp0RFFVRlVPenM3T3pzN096dEJRVkZrTEVsQlFVMHNkMEpCUVZFc1ZVRkJReXhIUVVGRU8xZEJRVk1zVDBGQlR5eEhRVUZRTEV0QlFXVXNVVUZCWmp0RFFVRlVPenM3T3pzN096dEJRVkZrTEVsQlFVMHNORU5CUVd0Q0xGVkJRVU1zUzBGQlJEdFhRVUZYTEV0QlFVTXNTVUZCVXl4TlFVRk5MRTlCUVU0c1NVRkJhVUlzVFVGQlRTeFBRVUZPTEVOQlFXTXNSMEZCWkN4SlFVRnhRaXhEUVVGeVFpeEhRVUV3UWl4SlFVRnlSQ3hIUVVFMFJDeExRVUUxUkR0RFFVRllPenM3T3pzN096dEJRVkY0UWl4SlFVRk5MRGhDUVVGWExGVkJRVU1zUjBGQlJEdFhRVUZUTEU5QlFVOHNSMEZCVUN4TFFVRmxMRkZCUVdZN1EwRkJWRHM3T3pzN096czdPMEZCVTJwQ0xFbEJRVTBzWjBOQlFWa3NWVUZCUXl4UlFVRkVMRVZCUVdNN1FVRkRia01zVVVGQlRTeFJRVUZSTEU5QlFWRXNVVUZCVUN4TFFVRnZRaXhSUVVGd1FpeEhRVUZuUXl4VFFVRlRMR2RDUVVGVUxFTkJRVEJDTEZGQlFURkNMRU5CUVdwRExFZEJRWFZGTEZGQlFYWkZMRU5CUkhGQ08wRkJSVzVETEZkQlFVOHNTMEZCUXl4RFFVRk5MRTFCUVU0c1IwRkJaMElzUjBGQlJ5eExRVUZJTEVOQlFWTXNTVUZCVkN4RFFVRmpMRXRCUVdRc1EwRkJha0lzUjBGQmQwTXNSMEZCUnl4SlFVRklMRU5CUVZFc1MwRkJVaXhEUVVGNFF5eERRVVkwUWp0RFFVRmtPenM3T3pzN096czdPMEZCWVd4Q0xFbEJRVTBzYjBSQlFYTkNMRlZCUVVNc1MwRkJSRHRYUVVGWExGTkJRVk1zUzBGQlZDeEpRVUZyUWl4TlFVRk5MRXRCUVU0c1EwRkJXU3hOUVVGYUxFTkJRV3hDTEVkQlFYZERMRU5CUVVNc1MwRkJSQ3hEUVVGNFF6dERRVUZZT3pzN096czdPenM3TzBGQlZUVkNMRWxCUVUwc2IwUkJRWE5DTEZWQlFVTXNTMEZCUkR0WFFVRlhMRk5CUVZNc1MwRkJWQ3hKUVVGclFpeE5RVUZOTEV0QlFVNHNRMEZCV1N4SFFVRmFMRU5CUVd4Q0xFZEJRWEZETEVOQlFVTXNTMEZCUkN4RFFVRnlRenREUVVGWU96czdPenM3T3pzN08wRkJWVFZDTEVsQlFVMHNNRU5CUVdsQ0xGVkJRVU1zUzBGQlJDeEZRVUZYTzBGQlEzSkRMRkZCUVUwc1YwRkJWeXhOUVVGTkxFdEJRVTRzUTBGQldTeHRRa0ZCV2l4RFFVRllMRU5CUkN0Q096dEJRVWR5UXl4WFFVRlBPMEZCUTBnc1pVRkJUeXhYUVVGWExGTkJRVk1zUTBGQlZDeERRVUZZTEVOQlFWQTdRVUZEUVN4alFVRlBMRk5CUVZNc1EwRkJWQ3hEUVVGUU8wdEJSa29zUTBGSWNVTTdRMEZCV0RzN096czdPenM3TzBGQlowSjJRaXhKUVVGTkxHZERRVUZaTEZWQlFVTXNSMEZCUkN4RlFVRjNRanRSUVVGc1FpeHJSVUZCV1N4cFFrRkJUVHM3UVVGRE4wTXNlVUpCUVZrc1NVRkJUU3hWUVVGc1FpeERRVVEyUXp0QlFVVTNReXhYUVVGUExFdEJRVXNzUzBGQlRDeERRVUZYTEUxQlFVMHNVMEZCVGl4RFFVRllMRWRCUVRoQ0xGTkJRVGxDTEVOQlJuTkRPME5CUVhoQ0lpd2labWxzWlNJNkluVjBhV3h6TG1weklpd2ljMjkxY21ObFVtOXZkQ0k2SWk5VmMyVnljeTlOWVhSMEwxTnBkR1Z6TDNCdmNHMXZkR2x2YmlJc0luTnZkWEpqWlhORGIyNTBaVzUwSWpwYkltWjFibU4wYVc5dUlIQjFjMmdvTGk0dVlYSm5jeWtnZTF4dUlDQWdJRUZ5Y21GNUxuQnliM1J2ZEhsd1pTNXdkWE5vTG1OaGJHd29kR2hwY3l3Z0xpNHVZWEpuY3lrN1hHNWNiaUFnSUNCcFppQW9kR2hwY3k1c1pXNW5kR2dnUGowZ2RHaHBjeTVmYldGNFUybDZaU2tnZTF4dUlDQWdJQ0FnSUNCMGFHbHpMbk5vYVdaMEtDazdYRzRnSUNBZ2ZWeHVmVnh1WEc1amIyNXpkQ0JEUVUxRlRGOURRVk5GWDFCQlZGUkZVazRnUFNBdktGdGhMWHBkS1NoYlFTMWFYU2t2Wnp0Y2JtTnZibk4wSUZKRlVFeEJRMFZmVkVWTlVFeEJWRVVnUFNBbkpERXRKREluTzF4dVkyOXVjM1FnU0VGVFgxQkZVa1pQVWsxQlRrTkZYMDVQVnlBOUlDaDBlWEJsYjJZZ2NHVnlabTl5YldGdVkyVWdJVDA5SUNkMWJtUmxabWx1WldRbklDWW1JSEJsY21admNtMWhibU5sTG01dmR5azdYRzVjYmk4cVhHNGdJQ0FnUjJWMElIWmhjaUIwZVhCbElHRnpJSE4wY21sdVoxeHVJQ0FnSUZ4dUlDQWdJRUJ3WVhKaGJUb2dWbUZ5YVdGaWJHVWdkRzhnZEdWemRGeHVJQ0FnSUVCeVpYUjFjbTRnVzNOMGNtbHVaMTA2SUZKbGRIVnlibk1zSUdadmNpQnBibk4wWVc1alpTQW5UMkpxWldOMEp5QnBaaUJiYjJKcVpXTjBJRTlpYW1WamRGMWNiaW92WEc1amIyNXpkQ0IyWVhKVWVYQmxJRDBnZG1GeWFXRmliR1VnUFQ0Z1QySnFaV04wTG5CeWIzUnZkSGx3WlM1MGIxTjBjbWx1Wnk1allXeHNLSFpoY21saFlteGxLUzV6YkdsalpTZzRMQ0F0TVNrN1hHNWNiaThxWEc0Z0lDQWdRMjl1ZG1WeWRDQmpZVzFsYkVOaGMyVWdkRzhnWkdGemFDMWpZWE5sWEc1Y2JpQWdJQ0JBY0dGeVlXMGdXM04wY21sdVoxMWNiaUFnSUNCQWNtVjBkWEp1SUZ0emRISnBibWRkWEc0cUwxeHVaWGh3YjNKMElHTnZibk4wSUdOaGJXVnNWRzlFWVhOb0lEMGdLSE4wY21sdVp5a2dQVDRnYzNSeWFXNW5MbkpsY0d4aFkyVW9RMEZOUlV4ZlEwRlRSVjlRUVZSVVJWSk9MQ0JTUlZCTVFVTkZYMVJGVFZCTVFWUkZLUzUwYjB4dmQyVnlRMkZ6WlNncE8xeHVYRzR2S2x4dUlDQWdJRU55WldGMFpTQmhiaUJoZFhSdkxXTjFiR3hwYm1jZ1luVm1abVZ5SUdGeWNtRjVYRzVjYmlBZ0lDQkFjR0Z5WVcwZ1cyRnljbUY1WFZ4dUlDQWdJRUJ3WVhKaGJTQmJhVzUwWFZ4dUlDQWdJRUJ5WlhSMWNtNGdXMkZ5Y21GNVhWeHVLaTljYm1WNGNHOXlkQ0JqYjI1emRDQmpjbVZoZEdWQ2RXWm1aWElnUFNBb2JXRjRVMmw2WlNBOUlETXNJR0Z5Y21GNUlEMGdXMTBwSUQwK0lIdGNiaUFnSUNCaGNuSmhlUzV3ZFhOb0lEMGdjSFZ6YUR0Y2JpQWdJQ0JoY25KaGVTNWZiV0Y0VTJsNlpTQTlJRzFoZUZOcGVtVWdmSHdnTUR0Y2JseHVJQ0FnSUhKbGRIVnliaUJoY25KaGVUdGNibjA3WEc1Y2JtVjRjRzl5ZENCamIyNXpkQ0JqY21WaGRHVkVaV3hwYldsMFpXUWdQU0FvZG1Gc2RXVnpMQ0IwWlhKdGN5d2daR1ZzYVcxcGRHVnlMQ0JqYUc5d0tTQTlQaUI3WEc0Z0lDQWdiR1YwSUdOdmJXSnBibVZrSUQwZ0p5YzdYRzVjYmlBZ0lDQjBaWEp0Y3k1bWIzSkZZV05vS0NoMFpYSnRLU0E5UGlCN1hHNGdJQ0FnSUNBZ0lHbG1JQ2gyWVd4MVpYTXVhR0Z6VDNkdVVISnZjR1Z5ZEhrb2RHVnliU2twSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJR052YldKcGJtVmtJQ3M5SUhaaGJIVmxjMXQwWlhKdFhTQXJJR1JsYkdsdGFYUmxjanRjYmlBZ0lDQWdJQ0FnZlZ4dUlDQWdJSDBwTzF4dVhHNGdJQ0FnYVdZZ0tHTm9iM0FwSUh0Y2JpQWdJQ0FnSUNBZ1kyOXRZbWx1WldRZ1BTQmpiMjFpYVc1bFpDNXpiR2xqWlNnd0xDQXRZMmh2Y0NrN1hHNGdJQ0FnZlZ4dVhHNGdJQ0FnY21WMGRYSnVJR052YldKcGJtVmtPMXh1ZlR0Y2JseHVMeXBjYmlBZ0lDQkRjbVZoZEdVZ1lTQm1kVzVqZEdsdmJpQnpkSEpwYm1kY2JseHVJQ0FnSUNjeU1IQjRKeXdnSjNSeVlXNXpiR0YwWlNjZ0xUNGdKM1J5WVc1emJHRjBaU2d5TUhCNEtTZGNibHh1SUNBZ0lFQndZWEpoYlNCYmMzUnlhVzVuWFZ4dUlDQWdJRUJ3WVhKaGJTQmJjM1J5YVc1blhWeHVJQ0FnSUVCeVpYUjFjbTRnVzNOMGNtbHVaMTFjYmlvdlhHNWxlSEJ2Y25RZ1kyOXVjM1FnWTNKbFlYUmxSblZ1WTNScGIyNVRkSEpwYm1jZ1BTQW9kbUZzZFdVc0lIQnlaV1pwZUNrZ1BUNGdZQ1I3Y0hKbFptbDRmU2drZTNaaGJIVmxmU2xnTzF4dVhHNHZLbHh1SUNBZ0lFZGxibVZ5WVhSbElHTjFjbkpsYm5RZ2RHbHRaWE4wWVcxd1hHNGdJQ0FnWEc0Z0lDQWdRSEpsZEhWeWJpQmJkR2x0WlhOMFlXMXdYVG9nUTNWeWNtVnVkQ0JWVGtsWUlIUnBiV1Z6ZEdGdGNGeHVLaTljYm1WNGNHOXlkQ0JqYjI1emRDQmpkWEp5Wlc1MFZHbHRaU0E5SUNncElEMCtJRWhCVTE5UVJWSkdUMUpOUVU1RFJWOU9UMWNnUHlCd1pYSm1iM0p0WVc1alpTNXViM2NvS1NBNklHNWxkeUJFWVhSbEtDa3VaMlYwVkdsdFpTZ3BPMXh1WEc0dktseHVJQ0FnSUVsMFpYSmhkR1VnYjNabGNpQmhiaUJ2WW1wbFkzUWdZVzVrSUdacGNtVWdZU0JqWVd4c1ltRmpheUJtYjNJZ1pYWmxjbmtnYVhSbGJTQnBiaUJwZEZ4dVhHNGdJQ0FnUUhCaGNtRnRJRnR2WW1wbFkzUmRPaUJQWW1wbFkzUWdkRzhnYVhSbGNtRjBaU0J2ZG1WeVhHNGdJQ0FnUUhCaGNtRnRJRnRtZFc1amRHbHZibDA2SUVOaGJHeGlZV05ySUhSdklHWnBjbVZjYmlvdlhHNWxlSEJ2Y25RZ1kyOXVjM1FnWldGamFDQTlJQ2h2WW1wbFkzUXNJR05oYkd4aVlXTnJLU0E5UGlCN1hHNGdJQ0FnWTI5dWMzUWdhMlY1Y3lBOUlHOWlhbVZqZENBL0lFOWlhbVZqZEM1clpYbHpLRzlpYW1WamRDa2dPaUJiWFR0Y2JpQWdJQ0JqYjI1emRDQnVkVzFMWlhseklEMGdhMlY1Y3k1c1pXNW5kR2c3WEc1Y2JpQWdJQ0JtYjNJZ0tHeGxkQ0JwSUQwZ01Ec2dhU0E4SUc1MWJVdGxlWE03SUdrckt5a2dlMXh1SUNBZ0lDQWdJQ0JqYjI1emRDQnJaWGtnUFNCclpYbHpXMmxkTzF4dUlDQWdJQ0FnSUNCamIyNXpkQ0J3Y205d0lEMGdiMkpxWldOMFcydGxlVjA3WEc1Y2JpQWdJQ0FnSUNBZ1kyRnNiR0poWTJzb2NISnZjQ3dnYTJWNUxDQnZZbXBsWTNRcE8xeHVJQ0FnSUgxY2JuMDdYRzVjYmk4cVhHNGdJQ0FnVTNCc2FYUWdZMjlzYjNJZ2MzUnlhVzVuSUdsdWRHOGdiV0Z3SUc5bUlHTnZiRzl5SUhCeWIzQmxjblJwWlhOY2JseHVJQ0FnSUZ3aWNtZGlZU2d5TlRVc0lESTFOU3dnTWpVMUxDQXdLVndpTENCYlhDSlNaV1JjSWl3Z0owZHlaV1Z1WENJc0lGd2lRbXgxWlZ3aUxDQmNJa0ZzY0doaFhDSmRYRzVjYmlBZ0lDQjdJRkpsWkRvZ01qVTFMaTR1SUgxY2Jpb3ZYRzVsZUhCdmNuUWdZMjl1YzNRZ1oyVjBRMjlzYjNKV1lXeDFaWE1nUFNBb2RtRnNkV1VzSUdOdmJHOXlWR1Z5YlhNcElEMCtJSHRjYmlBZ0lDQmpiMjV6ZENCamIyeHZjbFpoYkhWbGN5QTlJSHQ5TzF4dUlDQWdJR052Ym5OMElHTnZiRzl5Y3lBOUlITndiR2wwUTI5dGJXRkVaV3hwYldsMFpXUW9aMlYwVm1Gc2RXVkdjbTl0Um5WdVkzUnBiMjVUZEhKcGJtY29kbUZzZFdVcEtUdGNibHh1SUNBZ0lHTnZiRzl5VkdWeWJYTXVabTl5UldGamFDZ29kR1Z5YlN3Z2FTa2dQVDRnWTI5c2IzSlVaWEp0YzF0MFpYSnRYU0E5SUNoamIyeHZjbk5iYVYwZ0lUMDlJSFZ1WkdWbWFXNWxaQ2tnUHlCamIyeHZjbk5iYVYwZ09pQXhLVHRjYmx4dUlDQWdJSEpsZEhWeWJpQmpiMnh2Y2xaaGJIVmxjenRjYm4wN1hHNWNiaThxWEc0Z0lDQWdSMlYwSUhaaGJIVmxJR1p5YjIwZ1puVnVZM1JwYjI0Z2MzUnlhVzVuWEc1Y2JpQWdJQ0JjSW5SeVlXNXpiR0YwWlZnb01qQndlQ2xjSWlBdFBpQmNJakl3Y0hoY0lseHVLaTljYm1WNGNHOXlkQ0JqYjI1emRDQm5aWFJXWVd4MVpVWnliMjFHZFc1amRHbHZibE4wY21sdVp5QTlJQ2gyWVd4MVpTa2dQVDRnZG1Gc2RXVXVjM1ZpYzNSeWFXNW5LSFpoYkhWbExtbHVaR1Y0VDJZb0p5Z25LU0FySURFc0lIWmhiSFZsTG14aGMzUkpibVJsZUU5bUtDY3BKeWtwTzF4dVhHNHZLbHh1SUNBZ0lFTm9aV05ySUdsbUlIUjNieUJ2WW1wbFkzUnpJR2hoZG1VZ1kyaGhibWRsWkNCbWNtOXRJR1ZoWTJnZ2IzUm9aWEpjYmlBZ0lDQmNiaUFnSUNCQWNHRnlZVzBnVzI5aWFtVmpkRjA2SUVsdWNIVjBJRUZjYmlBZ0lDQkFjR0Z5WVcwZ1cyOWlhbVZqZEYwNklFbHVjSFYwSUVKY2JpQWdJQ0JBY21WMGRYSnVJRnRpYjI5c1pXRnVYVG9nVkhKMVpTQnBaaUJrYVdabVpYSmxiblJjYmlvdlhHNWxlSEJ2Y25RZ1kyOXVjM1FnYUdGelEyaGhibWRsWkNBOUlDaGhMQ0JpS1NBOVBpQjdYRzRnSUNBZ2JHVjBJR05vWVc1blpXUWdQU0JtWVd4elpUdGNibHh1SUNBZ0lHVmhZMmdvWVN3Z0tIWmhiSFZsTENCclpYa3BJRDArSUh0Y2JpQWdJQ0FnSUNBZ2FXWWdLR2hoYzFCeWIzQmxjblI1S0dJc0lHdGxlU2twSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJR2xtSUNoMllXeDFaU0FoUFQwZ1lsdHJaWGxkS1NCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ1kyaGhibWRsWkNBOUlIUnlkV1U3WEc0Z0lDQWdJQ0FnSUNBZ0lDQjlYRzRnSUNBZ0lDQWdJSDBnWld4elpTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNCamFHRnVaMlZrSUQwZ2RISjFaVHRjYmlBZ0lDQWdJQ0FnZlZ4dUlDQWdJSDBwTzF4dVhHNGdJQ0FnY21WMGRYSnVJR05vWVc1blpXUTdYRzU5TzF4dVhHNHZLbHh1SUNBZ0lFTm9aV05ySUdsbUlHOWlhbVZqZENCb1lYTWdjSEp2Y0dWeWRIa2dZVzVrSUdsMElHbHpiaWQwSUhWdVpHVm1hVzVsWkZ4dVhHNGdJQ0FnUUhCaGNtRnRJRnR2WW1wbFkzUmRYRzRnSUNBZ1FIQmhjbUZ0SUZ0emRISnBibWRkWEc0Z0lDQWdRSEpsZEhWeWJpQmJZbTl2YkdWaGJsMWNiaW92WEc1bGVIQnZjblFnWTI5dWMzUWdhR0Z6VUhKdmNHVnlkSGtnUFNBb2IySnFaV04wTENCd2NtOXdaWEowZVU1aGJXVXBJRDArSUc5aWFtVmpkQzVvWVhOUGQyNVFjbTl3WlhKMGVTaHdjbTl3WlhKMGVVNWhiV1VwSUNZbUlHOWlhbVZqZEZ0d2NtOXdaWEowZVU1aGJXVmRJQ0U5UFNCMWJtUmxabWx1WldRN1hHNWNiaThxWEc0Z0lDQWdTWE1nZFhScGJITWdkbUZ5SUdGdUlHRnljbUY1SUQ4Z1hHNGdJQ0FnWEc0Z0lDQWdRSEJoY21GdE9pQldZWEpwWVdKc1pTQjBieUIwWlhOMFhHNGdJQ0FnUUhKbGRIVnliaUJiWW05dmJHVmhibDA2SUZKbGRIVnlibk1nZEhKMVpTQnBaaUIxZEdsc2N5NTJZWEpVZVhCbElEMDlQU0FuUVhKeVlYa25YRzRxTDF4dVpYaHdiM0owSUdOdmJuTjBJR2x6UVhKeVlYa2dQU0FvWVhKeUtTQTlQaUIyWVhKVWVYQmxLR0Z5Y2lrZ1BUMDlJQ2RCY25KaGVTYzdYRzVjYmk4cVhHNGdJQ0FnU1hNZ2RYUnBiSE1nZG1GeUlHRWdablZ1WTNScGIyNGdQeUJjYmlBZ0lDQmNiaUFnSUNCQWNHRnlZVzA2SUZaaGNtbGhZbXhsSUhSdklIUmxjM1JjYmlBZ0lDQkFjbVYwZFhKdUlGdGliMjlzWldGdVhUb2dVbVYwZFhKdWN5QjBjblZsSUdsbUlIVjBhV3h6TG5aaGNsUjVjR1VnUFQwOUlDZEdkVzVqZEdsdmJpZGNiaW92WEc1bGVIQnZjblFnWTI5dWMzUWdhWE5HZFc1aklEMGdLRzlpYWlrZ1BUNGdkbUZ5Vkhsd1pTaHZZbW9wSUQwOVBTQW5SblZ1WTNScGIyNG5PMXh1WEc0dktseHVJQ0FnSUVseklIVjBhV3h6SUhaaGNpQmhJRzUxYldKbGNqOWNiaUFnSUNCY2JpQWdJQ0JBY0dGeVlXMDZJRlpoY21saFlteGxJSFJ2SUhSbGMzUmNiaUFnSUNCQWNtVjBkWEp1SUZ0aWIyOXNaV0Z1WFRvZ1VtVjBkWEp1Y3lCMGNuVmxJR2xtSUhSNWNHVnZaaUE5UFQwZ0oyNTFiV0psY2lkY2Jpb3ZYRzVsZUhCdmNuUWdZMjl1YzNRZ2FYTk9kVzBnUFNBb2JuVnRLU0E5UGlCMGVYQmxiMllnYm5WdElEMDlQU0FuYm5WdFltVnlKenRjYmx4dUx5cGNiaUFnSUNCSmN5QjFkR2xzY3lCMllYSWdZVzRnYjJKcVpXTjBQMXh1SUNBZ0lGeHVJQ0FnSUVCd1lYSmhiVG9nVm1GeWFXRmliR1VnZEc4Z2RHVnpkRnh1SUNBZ0lFQnlaWFIxY200Z1cySnZiMnhsWVc1ZE9pQlNaWFIxY201eklIUnlkV1VnYVdZZ2RIbHdaVzltSUQwOVBTQW5iMkpxWldOMEoxeHVLaTljYm1WNGNHOXlkQ0JqYjI1emRDQnBjMDlpYWlBOUlDaHZZbW9wSUQwK0lIUjVjR1Z2WmlCdlltb2dQVDA5SUNkdlltcGxZM1FuTzF4dVhHNHZLbHh1SUNBZ0lFbHpJSFYwYVd4eklHRWdjbVZzWVhScGRtVWdkbUZzZFdVZ1lYTnphV2R1YldWdWREOWNiaUFnSUNCY2JpQWdJQ0JBY0dGeVlXMGdXM04wY21sdVoxMDZJRlpoY21saFlteGxJSFJ2SUhSbGMzUmNiaUFnSUNCQWNtVjBkWEp1SUZ0aWIyOXNaV0Z1WFRvZ1NXWWdkWFJwYkhNZ2JHOXZhM01nYkdsclpTQmhJSEpsYkdGMGFYWmxJSFpoYkhWbElHRnpjMmxuYm0xbGJuUmNiaW92WEc1bGVIQnZjblFnWTI5dWMzUWdhWE5TWld4aGRHbDJaVlpoYkhWbElEMGdLSFpoYkhWbEtTQTlQaUFvZG1Gc2RXVWdKaVlnZG1Gc2RXVXVhVzVrWlhoUFppQW1KaUIyWVd4MVpTNXBibVJsZUU5bUtDYzlKeWtnUGlBd0tTQS9JSFJ5ZFdVZ09pQm1ZV3h6WlR0Y2JseHVMeXBjYmlBZ0lDQkpjeUIxZEdsc2N5QjJZWElnWVNCemRISnBibWNnUHlCY2JpQWdJQ0JjYmlBZ0lDQkFjR0Z5WVcwNklGWmhjbWxoWW14bElIUnZJSFJsYzNSY2JpQWdJQ0JBY21WMGRYSnVJRnRpYjI5c1pXRnVYVG9nVW1WMGRYSnVjeUIwY25WbElHbG1JSFI1Y0dWdlppQnpkSElnUFQwOUlDZHpkSEpwYm1jblhHNHFMMXh1Wlhod2IzSjBJR052Ym5OMElHbHpVM1J5YVc1bklEMGdLSE4wY2lrZ1BUNGdkSGx3Wlc5bUlITjBjaUE5UFQwZ0ozTjBjbWx1WnljN1hHNWNiaThxWEc0Z0lDQWdRSEJoY21GdElGdHpkSEpwYm1jZ2ZId2dUbTlrWlV4cGMzUmRPbHh1SUNBZ0lDQWdJQ0JKWmlCemRISnBibWNzSUhSeVpXRjBaV1FnWVhNZ2MyVnNaV04wYjNJdVhHNGdJQ0FnSUNBZ0lFbG1JRzV2ZEN3Z2RISmxZWFJsWkNCaGN5QndjbVZsZUdsemRHbHVaeUJPYjJSbFRHbHpkRnh1WEc0Z0lDQWdRSEpsZEhWeWJpQmJRWEp5WVhsZFhHNHFMMXh1Wlhod2IzSjBJR052Ym5OMElITmxiR1ZqZEVSdmJTQTlJQ2h6Wld4bFkzUnZjaWtnUFQ0Z2UxeHVJQ0FnSUdOdmJuTjBJRzV2WkdWeklEMGdLSFI1Y0dWdlppQnpaV3hsWTNSdmNpQTlQVDBnSjNOMGNtbHVaeWNwSUQ4Z1pHOWpkVzFsYm5RdWNYVmxjbmxUWld4bFkzUnZja0ZzYkNoelpXeGxZM1J2Y2lrZ09pQnpaV3hsWTNSdmNqdGNiaUFnSUNCeVpYUjFjbTRnS0c1dlpHVnpMbXhsYm1kMGFDa2dQeUJiWFM1emJHbGpaUzVqWVd4c0tHNXZaR1Z6S1NBNklGdGRMbkIxYzJnb2JtOWtaWE1wTzF4dWZUdGNibHh1THlwY2JpQWdJQ0JUY0d4cGRDQmpiMjF0WVMxa1pXeHBiV2wwWldRZ2MzUnlhVzVuWEc1Y2JpQWdJQ0JjSW1admJ5eGlZWEpjSWlBdFBpQmJYQ0ptYjI5Y0lpd2dYQ0ppWVhKY0lsMWNibHh1SUNBZ0lFQndZWEpoYlNCYmMzUnlhVzVuWFZ4dUlDQWdJRUJ5WlhSMWNtNGdXMkZ5Y21GNVhWeHVLaTljYm1WNGNHOXlkQ0JqYjI1emRDQnpjR3hwZEVOdmJXMWhSR1ZzYVcxcGRHVmtJRDBnS0haaGJIVmxLU0E5UGlCcGMxTjBjbWx1WnloMllXeDFaU2tnUHlCMllXeDFaUzV6Y0d4cGRDZ3ZMRnhjY3lvdktTQTZJRnQyWVd4MVpWMDdYRzVjYmk4cVhHNGdJQ0FnVTNCc2FYUWdjM0JoWTJVdFpHVnNhVzFwZEdWa0lITjBjbWx1WjF4dVhHNGdJQ0FnWENKbWIyOGdZbUZ5WENJZ0xUNGdXMXdpWm05dlhDSXNJRndpWW1GeVhDSmRYRzVjYmlBZ0lDQkFjR0Z5WVcwZ1czTjBjbWx1WjExY2JpQWdJQ0JBY21WMGRYSnVJRnRoY25KaGVWMWNiaW92WEc1bGVIQnZjblFnWTI5dWMzUWdjM0JzYVhSVGNHRmpaVVJsYkdsdGFYUmxaQ0E5SUNoMllXeDFaU2tnUFQ0Z2FYTlRkSEpwYm1jb2RtRnNkV1VwSUQ4Z2RtRnNkV1V1YzNCc2FYUW9KeUFuS1NBNklGdDJZV3gxWlYwN1hHNWNiaThxWEc0Z0lDQWdVM0JzYVhRZ1lTQjJZV3gxWlNCcGJuUnZJR0VnZG1Gc2RXVXZkVzVwZENCdlltcGxZM1JjYmlBZ0lDQmNiaUFnSUNBZ0lDQWdYQ0l5TURCd2VGd2lJQzArSUhzZ2RtRnNkV1U2SURJd01Dd2dkVzVwZERvZ1hDSndlRndpSUgxY2JpQWdJQ0FnSUNBZ1hHNGdJQ0FnUUhCaGNtRnRJRnR6ZEhKcGJtZGRPaUJXWVd4MVpTQjBieUJ6Y0d4cGRGeHVJQ0FnSUVCeVpYUjFjbTRnVzI5aWFtVmpkRjA2SUU5aWFtVmpkQ0IzYVhSb0lIWmhiSFZsSUdGdVpDQjFibWwwSUhCeWIzQnpYRzRxTDF4dVpYaHdiM0owSUdOdmJuTjBJSE53YkdsMFZtRnNkV1ZWYm1sMElEMGdLSFpoYkhWbEtTQTlQaUI3WEc0Z0lDQWdZMjl1YzNRZ2MzQnNhWFJXWVd3Z1BTQjJZV3gxWlM1dFlYUmphQ2d2S0MwL1hGeGtLbHhjTGo5Y1hHUXFLU2d1S2lrdktUdGNibHh1SUNBZ0lISmxkSFZ5YmlCN1hHNGdJQ0FnSUNBZ0lIWmhiSFZsT2lCd1lYSnpaVVpzYjJGMEtITndiR2wwVm1Gc1d6RmRLU3hjYmlBZ0lDQWdJQ0FnZFc1cGREb2dJSE53YkdsMFZtRnNXekpkWEc0Z0lDQWdmVHRjYm4wN1hHNWNiaThxWEc0Z0lDQWdRMjl1ZG1WeWRDQnVkVzFpWlhJZ2RHOGdlQ0JrWldOcGJXRnNJSEJzWVdObGMxeHVYRzRnSUNBZ1FIQmhjbUZ0SUZ0dWRXMWlaWEpkWEc0Z0lDQWdRSEJoY21GdElGdHVkVzFpWlhKZFhHNGdJQ0FnUUhKbGRIVnliaUJiYm5WdFltVnlYVnh1S2k5Y2JtVjRjRzl5ZENCamIyNXpkQ0IwYjBSbFkybHRZV3dnUFNBb2JuVnRMQ0J3Y21WamFYTnBiMjRnUFNBeUtTQTlQaUI3WEc0Z0lDQWdjSEpsWTJsemFXOXVJRDBnTVRBZ0tpb2djSEpsWTJsemFXOXVPMXh1SUNBZ0lISmxkSFZ5YmlCTllYUm9Mbkp2ZFc1a0tHNTFiU0FxSUhCeVpXTnBjMmx2YmlrZ0x5QndjbVZqYVhOcGIyNDdYRzU5TzF4dUlsMTlcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2luYy91dGlscy5qc1xuICoqIG1vZHVsZSBpZCA9IDE0XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzLmRlZmF1bHQgPSBzZWxlY3RBY3RvcjtcblxudmFyIF9BY3RvciA9IHJlcXVpcmUoJy4uL2FjdG9yL0FjdG9yJyk7XG5cbnZhciBfQWN0b3IyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfQWN0b3IpO1xuXG52YXIgX3V0aWxzID0gcmVxdWlyZSgnLi4vaW5jL3V0aWxzJyk7XG5cbnZhciBfY3NzID0gcmVxdWlyZSgnLi4vcmVuZGVyL2NzcycpO1xuXG52YXIgX2NzczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jc3MpO1xuXG52YXIgX3N2ZyA9IHJlcXVpcmUoJy4uL3JlbmRlci9zdmcnKTtcblxudmFyIF9zdmcyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfc3ZnKTtcblxudmFyIF9zdmdQYXRoID0gcmVxdWlyZSgnLi4vcmVuZGVyL3N2Zy1wYXRoJyk7XG5cbnZhciBfc3ZnUGF0aDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9zdmdQYXRoKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxudmFyIFNBVkVfUFJPUCA9ICdfX3BtX2FjdG9yXyc7XG5cbnZhciBkZXRlY3RSZW5kZXJlciA9IGZ1bmN0aW9uIChlbGVtZW50KSB7XG4gICAgLy8gSWYgSFRNTEVsZW1lbnQgbG9hZCByZW5kZXJDU1NcbiAgICBpZiAoZWxlbWVudCBpbnN0YW5jZW9mIEhUTUxFbGVtZW50IHx8IGVsZW1lbnQudGFnTmFtZSA9PT0gJ3N2ZycpIHtcbiAgICAgICAgcmV0dXJuIF9jc3MyLmRlZmF1bHQ7XG5cbiAgICAgICAgLy8gT3IgU1ZHXG4gICAgfSBlbHNlIGlmIChlbGVtZW50IGluc3RhbmNlb2YgU1ZHRWxlbWVudCkge1xuICAgICAgICAgICAgaWYgKGVsZW1lbnQudGFnTmFtZSA9PT0gJ3BhdGgnKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIF9zdmdQYXRoMi5kZWZhdWx0O1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gX3N2ZzIuZGVmYXVsdDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxufTtcblxuZnVuY3Rpb24gc2VsZWN0QWN0b3Ioc2VsZWN0b3IpIHtcbiAgICB2YXIgcHJvcHMgPSBhcmd1bWVudHMubGVuZ3RoIDw9IDEgfHwgYXJndW1lbnRzWzFdID09PSB1bmRlZmluZWQgPyB7fSA6IGFyZ3VtZW50c1sxXTtcblxuICAgIHZhciBlbGVtZW50cyA9ICgwLCBfdXRpbHMuc2VsZWN0RG9tKShzZWxlY3Rvcik7XG5cbiAgICB2YXIgYWN0b3JzID0gZWxlbWVudHMubWFwKGZ1bmN0aW9uIChlbGVtZW50KSB7XG4gICAgICAgIHZhciBhY3RvciA9IGVsZW1lbnRbU0FWRV9QUk9QXTtcblxuICAgICAgICBpZiAoIWFjdG9yKSB7XG4gICAgICAgICAgICBwcm9wcy5lbGVtZW50ID0gZWxlbWVudDtcbiAgICAgICAgICAgIHByb3BzLm9uUmVuZGVyID0gZGV0ZWN0UmVuZGVyZXIoZWxlbWVudCk7XG4gICAgICAgICAgICBhY3RvciA9IGVsZW1lbnRbU0FWRV9QUk9QXSA9IG5ldyBfQWN0b3IyLmRlZmF1bHQocHJvcHMpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGFjdG9yO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIGFjdG9ycy5sZW5ndGggPiAxID8gYWN0b3JzIDogYWN0b3JzWzBdO1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluTnlZeTlwYm1NdmMyVnNaV04wTFdGamRHOXlMbXB6SWwwc0ltNWhiV1Z6SWpwYlhTd2liV0Z3Y0dsdVozTWlPaUk3T3p0clFrRjNRbmRDT3pzN096czdPenM3T3pzN096czdPenM3T3pzN08wRkJha0o0UWl4SlFVRk5MRmxCUVZrc1lVRkJXanM3UVVGRlRpeEpRVUZOTEdsQ1FVRnBRaXhWUVVGRExFOUJRVVFzUlVGQllUczdRVUZGYUVNc1VVRkJTU3h0UWtGQmJVSXNWMEZCYmtJc1NVRkJhME1zVVVGQlVTeFBRVUZTTEV0QlFXOUNMRXRCUVhCQ0xFVkJRVEpDTzBGQlF6ZEVPenM3UVVGRU5rUXNTMEZCYWtVc1RVRkpUeXhKUVVGSkxHMUNRVUZ0UWl4VlFVRnVRaXhGUVVFclFqdEJRVU4wUXl4blFrRkJTU3hSUVVGUkxFOUJRVklzUzBGQmIwSXNUVUZCY0VJc1JVRkJORUk3UVVGRE5VSXNlVU5CUkRSQ08yRkJRV2hETEUxQlJVODdRVUZEU0N4eFEwRkVSenRoUVVaUU8xTkJSRWM3UTBGT1dUczdRVUZsVWl4VFFVRlRMRmRCUVZRc1EwRkJjVUlzVVVGQmNrSXNSVUZCTWtNN1VVRkJXaXc0UkVGQlVTeHJRa0ZCU1RzN1FVRkRkRVFzVVVGQlRTeFhRVUZYTEhOQ1FVRlZMRkZCUVZZc1EwRkJXQ3hEUVVSblJEczdRVUZIZEVRc1VVRkJUU3hUUVVGVExGTkJRVk1zUjBGQlZDeERRVUZoTEZWQlFVTXNUMEZCUkN4RlFVRmhPMEZCUTNKRExGbEJRVWtzVVVGQlVTeFJRVUZSTEZOQlFWSXNRMEZCVWl4RFFVUnBRenM3UVVGSGNrTXNXVUZCU1N4RFFVRkRMRXRCUVVRc1JVRkJVVHRCUVVOU0xHdENRVUZOTEU5QlFVNHNSMEZCWjBJc1QwRkJhRUlzUTBGRVVUdEJRVVZTTEd0Q1FVRk5MRkZCUVU0c1IwRkJhVUlzWlVGQlpTeFBRVUZtTEVOQlFXcENMRU5CUmxFN1FVRkhVaXh2UWtGQlVTeFJRVUZSTEZOQlFWSXNTVUZCY1VJc2IwSkJRVlVzUzBGQlZpeERRVUZ5UWl4RFFVaEJPMU5CUVZvN08wRkJUVUVzWlVGQlR5eExRVUZRTEVOQlZIRkRPMHRCUVdJc1EwRkJkRUlzUTBGSVowUTdPMEZCWlhSRUxGZEJRVThzVFVGQlF5eERRVUZQTEUxQlFWQXNSMEZCWjBJc1EwRkJhRUlzUjBGQmNVSXNUVUZCZEVJc1IwRkJLMElzVDBGQlR5eERRVUZRTEVOQlFTOUNMRU5CWml0RE8wTkJRVE5ESWl3aVptbHNaU0k2SW5ObGJHVmpkQzFoWTNSdmNpNXFjeUlzSW5OdmRYSmpaVkp2YjNRaU9pSXZWWE5sY25NdlRXRjBkQzlUYVhSbGN5OXdiM0J0YjNScGIyNGlMQ0p6YjNWeVkyVnpRMjl1ZEdWdWRDSTZXeUpwYlhCdmNuUWdRV04wYjNJZ1puSnZiU0FuTGk0dllXTjBiM0l2UVdOMGIzSW5PMXh1YVcxd2IzSjBJSHNnYzJWc1pXTjBSRzl0SUgwZ1puSnZiU0FuTGk0dmFXNWpMM1YwYVd4ekp6dGNibHh1YVcxd2IzSjBJSEpsYm1SbGNrTlRVeUJtY205dElDY3VMaTl5Wlc1a1pYSXZZM056Snp0Y2JtbHRjRzl5ZENCeVpXNWtaWEpUVmtjZ1puSnZiU0FuTGk0dmNtVnVaR1Z5TDNOMlp5YzdYRzVwYlhCdmNuUWdjbVZ1WkdWeVUxWkhVR0YwYUNCbWNtOXRJQ2N1TGk5eVpXNWtaWEl2YzNabkxYQmhkR2duTzF4dVhHNWpiMjV6ZENCVFFWWkZYMUJTVDFBZ1BTQW5YMTl3YlY5aFkzUnZjbDhuTzF4dVhHNWpiMjV6ZENCa1pYUmxZM1JTWlc1a1pYSmxjaUE5SUNobGJHVnRaVzUwS1NBOVBpQjdYRzRnSUNBZ0x5OGdTV1lnU0ZSTlRFVnNaVzFsYm5RZ2JHOWhaQ0J5Wlc1a1pYSkRVMU5jYmlBZ0lDQnBaaUFvWld4bGJXVnVkQ0JwYm5OMFlXNWpaVzltSUVoVVRVeEZiR1Z0Wlc1MElIeDhJR1ZzWlcxbGJuUXVkR0ZuVG1GdFpTQTlQVDBnSjNOMlp5Y3BJSHRjYmlBZ0lDQWdJQ0FnY21WMGRYSnVJSEpsYm1SbGNrTlRVenRjYmx4dUlDQWdJQzh2SUU5eUlGTldSMXh1SUNBZ0lIMGdaV3h6WlNCcFppQW9aV3hsYldWdWRDQnBibk4wWVc1alpXOW1JRk5XUjBWc1pXMWxiblFwSUh0Y2JpQWdJQ0FnSUNBZ2FXWWdLR1ZzWlcxbGJuUXVkR0ZuVG1GdFpTQTlQVDBnSjNCaGRHZ25LU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQnlaWFIxY200Z2NtVnVaR1Z5VTFaSFVHRjBhRHRjYmlBZ0lDQWdJQ0FnZlNCbGJITmxJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lISmxkSFZ5YmlCeVpXNWtaWEpUVmtjN1hHNGdJQ0FnSUNBZ0lIMWNiaUFnSUNCOVhHNTlPMXh1WEc1bGVIQnZjblFnWkdWbVlYVnNkQ0JtZFc1amRHbHZiaUJ6Wld4bFkzUkJZM1J2Y2loelpXeGxZM1J2Y2l3Z2NISnZjSE1nUFNCN2ZTa2dlMXh1SUNBZ0lHTnZibk4wSUdWc1pXMWxiblJ6SUQwZ2MyVnNaV04wUkc5dEtITmxiR1ZqZEc5eUtUdGNibHh1SUNBZ0lHTnZibk4wSUdGamRHOXljeUE5SUdWc1pXMWxiblJ6TG0xaGNDZ29aV3hsYldWdWRDa2dQVDRnZTF4dUlDQWdJQ0FnSUNCc1pYUWdZV04wYjNJZ1BTQmxiR1Z0Wlc1MFcxTkJWa1ZmVUZKUFVGMDdYRzVjYmlBZ0lDQWdJQ0FnYVdZZ0tDRmhZM1J2Y2lrZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnY0hKdmNITXVaV3hsYldWdWRDQTlJR1ZzWlcxbGJuUTdYRzRnSUNBZ0lDQWdJQ0FnSUNCd2NtOXdjeTV2YmxKbGJtUmxjaUE5SUdSbGRHVmpkRkpsYm1SbGNtVnlLR1ZzWlcxbGJuUXBPMXh1SUNBZ0lDQWdJQ0FnSUNBZ1lXTjBiM0lnUFNCbGJHVnRaVzUwVzFOQlZrVmZVRkpQVUYwZ1BTQnVaWGNnUVdOMGIzSW9jSEp2Y0hNcE8xeHVJQ0FnSUNBZ0lDQjlYRzVjYmlBZ0lDQWdJQ0FnY21WMGRYSnVJR0ZqZEc5eU8xeHVJQ0FnSUgwcE8xeHVYRzRnSUNBZ2NtVjBkWEp1SUNoaFkzUnZjbk11YkdWdVozUm9JRDRnTVNrZ1B5QmhZM1J2Y25NZ09pQmhZM1J2Y25OYk1GMDdYRzU5WEc0aVhYMD1cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2luYy9zZWxlY3QtYWN0b3IuanNcbiAqKiBtb2R1bGUgaWQgPSAxNVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0cy5zZXREaWxhdGlvbiA9IHVuZGVmaW5lZDtcblxudmFyIF91dGlscyA9IHJlcXVpcmUoJy4uL2luYy91dGlscycpO1xuXG52YXIgTUFYX0VMQVBTRUQgPSAzMztcblxudmFyIGN1cnJlbnQgPSAwO1xudmFyIGVsYXBzZWQgPSAxNi43O1xudmFyIGRpbGF0aW9uID0gMTtcblxuZXhwb3J0cy5kZWZhdWx0ID0ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gKGZyYW1lc3RhbXApIHtcbiAgICAgICAgZWxhcHNlZCA9IE1hdGgubWluKGZyYW1lc3RhbXAgLSBjdXJyZW50LCBNQVhfRUxBUFNFRCkgKiBkaWxhdGlvbjtcbiAgICAgICAgY3VycmVudCA9IGZyYW1lc3RhbXA7XG4gICAgfSxcblxuICAgIHN0YXJ0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBjdXJyZW50ID0gKDAsIF91dGlscy5jdXJyZW50VGltZSkoKTtcbiAgICB9LFxuXG4gICAgZ2V0RWxhcHNlZDogZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gZWxhcHNlZDtcbiAgICB9XG59O1xudmFyIHNldERpbGF0aW9uID0gZXhwb3J0cy5zZXREaWxhdGlvbiA9IGZ1bmN0aW9uIChuZXdEaWxhdGlvbikge1xuICAgIHJldHVybiBkaWxhdGlvbiA9IG5ld0RpbGF0aW9uO1xufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbk55WXk5d2NtOWpaWE56TDNScGJXVnlMbXB6SWwwc0ltNWhiV1Z6SWpwYlhTd2liV0Z3Y0dsdVozTWlPaUk3T3pzN096czdRVUZGUVN4SlFVRk5MR05CUVdNc1JVRkJaRHM3UVVGRlRpeEpRVUZKTEZWQlFWVXNRMEZCVmp0QlFVTktMRWxCUVVrc1ZVRkJWU3hKUVVGV08wRkJRMG9zU1VGQlNTeFhRVUZYTEVOQlFWZzdPMnRDUVVWWE8wRkJRMWdzV1VGQlVTeFZRVUZETEZWQlFVUXNSVUZCWjBJN1FVRkRjRUlzYTBKQlFWVXNTMEZCU3l4SFFVRk1MRU5CUVZNc1lVRkJZU3hQUVVGaUxFVkJRWE5DTEZkQlFTOUNMRWxCUVRoRExGRkJRVGxETEVOQlJGVTdRVUZGY0VJc2EwSkJRVlVzVlVGQlZpeERRVVp2UWp0TFFVRm9RanM3UVVGTFVpeFhRVUZQTzJWQlFVMHNWVUZCVlN4NVFrRkJWanRMUVVGT096dEJRVVZRTEdkQ1FVRlpPMlZCUVUwN1MwRkJUanM3UVVGSFZDeEpRVUZOTEc5RFFVRmpMRlZCUVVNc1YwRkJSRHRYUVVGcFFpeFhRVUZYTEZkQlFWZzdRMEZCYWtJaUxDSm1hV3hsSWpvaWRHbHRaWEl1YW5NaUxDSnpiM1Z5WTJWU2IyOTBJam9pTDFWelpYSnpMMDFoZEhRdlUybDBaWE12Y0c5d2JXOTBhVzl1SWl3aWMyOTFjbU5sYzBOdmJuUmxiblFpT2xzaWFXMXdiM0owSUhzZ1kzVnljbVZ1ZEZScGJXVWdmU0JtY205dElDY3VMaTlwYm1NdmRYUnBiSE1uTzF4dVhHNWpiMjV6ZENCTlFWaGZSVXhCVUZORlJDQTlJRE16TzF4dVhHNXNaWFFnWTNWeWNtVnVkQ0E5SURBN1hHNXNaWFFnWld4aGNITmxaQ0E5SURFMkxqYzdYRzVzWlhRZ1pHbHNZWFJwYjI0Z1BTQXhPMXh1WEc1bGVIQnZjblFnWkdWbVlYVnNkQ0I3WEc0Z0lDQWdkWEJrWVhSbE9pQW9abkpoYldWemRHRnRjQ2tnUFQ0Z2UxeHVJQ0FnSUNBZ0lDQmxiR0Z3YzJWa0lEMGdUV0YwYUM1dGFXNG9abkpoYldWemRHRnRjQ0F0SUdOMWNuSmxiblFzSUUxQldGOUZURUZRVTBWRUtTQXFJR1JwYkdGMGFXOXVPMXh1SUNBZ0lDQWdJQ0JqZFhKeVpXNTBJRDBnWm5KaGJXVnpkR0Z0Y0R0Y2JpQWdJQ0I5TEZ4dVhHNGdJQ0FnYzNSaGNuUTZJQ2dwSUQwK0lHTjFjbkpsYm5RZ1BTQmpkWEp5Wlc1MFZHbHRaU2dwTEZ4dVhHNGdJQ0FnWjJWMFJXeGhjSE5sWkRvZ0tDa2dQVDRnWld4aGNITmxaRnh1ZlR0Y2JseHVaWGh3YjNKMElHTnZibk4wSUhObGRFUnBiR0YwYVc5dUlEMGdLRzVsZDBScGJHRjBhVzl1S1NBOVBpQmthV3hoZEdsdmJpQTlJRzVsZDBScGJHRjBhVzl1T3lKZGZRPT1cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL3Byb2Nlc3MvdGltZXIuanNcbiAqKiBtb2R1bGUgaWQgPSAxNlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0cy5kZWZhdWx0ID0gc3RhZ2dlcjtcblxudmFyIF9Ud2VlbiA9IHJlcXVpcmUoJy4uL2FjdGlvbnMvVHdlZW4nKTtcblxudmFyIF9Ud2VlbjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9Ud2Vlbik7XG5cbnZhciBfcHJlc2V0RWFzaW5nID0gcmVxdWlyZSgnLi4vYWN0aW9ucy9lYXNpbmcvcHJlc2V0LWVhc2luZycpO1xuXG52YXIgX3V0aWxzID0gcmVxdWlyZSgnLi91dGlscycpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG52YXIgREVGQVVMVF9JTlRFUlZBTCA9IDEwMDtcblxuZnVuY3Rpb24gc3RhZ2dlcihhcnJheSwgcHJvcHMsIGNhbGxiYWNrKSB7XG4gICAgdmFyIGFycmF5TGVuZ3RoID0gYXJyYXkubGVuZ3RoO1xuICAgIHZhciBwcm9wc0lzSW50ZXJ2YWwgPSAoMCwgX3V0aWxzLmlzTnVtKShwcm9wcyk7XG4gICAgdmFyIGludGVydmFsID0gcHJvcHNJc0ludGVydmFsID8gcHJvcHMgOiBwcm9wcy5pbnRlcnZhbCB8fCBERUZBVUxUX0lOVEVSVkFMO1xuICAgIHZhciBwcmV2SW5kZXggPSAtMTtcblxuICAgIHZhciBzdGFnZ2VyVHdlZW4gPSBuZXcgX1R3ZWVuMi5kZWZhdWx0KHtcbiAgICAgICAgZHVyYXRpb246IGludGVydmFsICogYXJyYXlMZW5ndGgsXG4gICAgICAgIHZhbHVlczoge1xuICAgICAgICAgICAgaToge1xuICAgICAgICAgICAgICAgIGZyb206IDAsXG4gICAgICAgICAgICAgICAgdG86IGFycmF5TGVuZ3RoIC0gMSxcbiAgICAgICAgICAgICAgICByb3VuZDogdHJ1ZSxcbiAgICAgICAgICAgICAgICBlYXNlOiBwcm9wc0lzSW50ZXJ2YWwgPyBfcHJlc2V0RWFzaW5nLmxpbmVhciA6IHByb3BzLmVhc2UgfHwgX3ByZXNldEVhc2luZy5saW5lYXJcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgb25SZW5kZXI6IGZ1bmN0aW9uIChfcmVmKSB7XG4gICAgICAgICAgICB2YXIgaSA9IF9yZWYuaTtcblxuICAgICAgICAgICAgdmFyIGdhcEluZGV4ID0gcHJldkluZGV4ICsgMTtcblxuICAgICAgICAgICAgZm9yICg7IGdhcEluZGV4IDw9IGk7IGdhcEluZGV4KyspIHtcbiAgICAgICAgICAgICAgICBjYWxsYmFjayhhcnJheVtnYXBJbmRleF0sIGdhcEluZGV4KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcHJldkluZGV4ID0gaTtcbiAgICAgICAgfSxcbiAgICAgICAgb25Db21wbGV0ZTogcHJvcHNJc0ludGVydmFsID8gdW5kZWZpbmVkIDogcHJvcHMub25Db21wbGV0ZVxuICAgIH0pO1xuXG4gICAgc3RhZ2dlclR3ZWVuLnN0YXJ0KCk7XG5cbiAgICByZXR1cm4gc3RhZ2dlclR3ZWVuO1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluTnlZeTlwYm1NdmMzUmhaMmRsY2k1cWN5SmRMQ0p1WVcxbGN5STZXMTBzSW0xaGNIQnBibWR6SWpvaU96czdhMEpCVFhkQ096czdPenM3T3pzN096czdRVUZHZUVJc1NVRkJUU3h0UWtGQmJVSXNSMEZCYmtJN08wRkJSVk1zVTBGQlV5eFBRVUZVTEVOQlFXbENMRXRCUVdwQ0xFVkJRWGRDTEV0QlFYaENMRVZCUVN0Q0xGRkJRUzlDTEVWQlFYbERPMEZCUTNCRUxGRkJRVTBzWTBGQll5eE5RVUZOTEUxQlFVNHNRMEZFWjBNN1FVRkZjRVFzVVVGQlRTeHJRa0ZCYTBJc2EwSkJRVTBzUzBGQlRpeERRVUZzUWl4RFFVWTRRenRCUVVkd1JDeFJRVUZOTEZkQlFWY3NhMEpCUVd0Q0xFdEJRV3hDTEVkQlFUQkNMRTFCUVUwc1VVRkJUaXhKUVVGclFpeG5Ra0ZCYkVJc1EwRklVenRCUVVsd1JDeFJRVUZKTEZsQlFWa3NRMEZCUXl4RFFVRkVMRU5CU205RE96dEJRVTF3UkN4UlFVRk5MR1ZCUVdVc2IwSkJRVlU3UVVGRE0wSXNhMEpCUVZVc1YwRkJWeXhYUVVGWU8wRkJRMVlzWjBKQlFWRTdRVUZEU2l4bFFVRkhPMEZCUTBNc2MwSkJRVTBzUTBGQlRqdEJRVU5CTEc5Q1FVRkpMR05CUVdNc1EwRkJaRHRCUVVOS0xIVkNRVUZQTEVsQlFWQTdRVUZEUVN4elFrRkJUU3g1UTBGQk1rSXNUVUZCVFN4SlFVRk9MSGRDUVVFelFqdGhRVXBXTzFOQlJFbzdRVUZSUVN4clFrRkJWU3huUWtGQlZ6dG5Ra0ZCVWl4WFFVRlJPenRCUVVOcVFpeG5Ra0ZCU1N4WFFVRlhMRmxCUVZrc1EwRkJXaXhEUVVSRk96dEJRVWRxUWl4dFFrRkJUeXhaUVVGWkxFTkJRVm9zUlVGQlpTeFZRVUYwUWl4RlFVRnJRenRCUVVNNVFpeDVRa0ZCVXl4TlFVRk5MRkZCUVU0c1EwRkJWQ3hGUVVFd1FpeFJRVUV4UWl4RlFVUTRRanRoUVVGc1F6czdRVUZKUVN4M1FrRkJXU3hEUVVGYUxFTkJVR2xDTzFOQlFWZzdRVUZUVml4dlFrRkJXU3hyUWtGQmEwSXNVMEZCYkVJc1IwRkJPRUlzVFVGQlRTeFZRVUZPTzB0QmJrSjZRaXhEUVVGbUxFTkJUamhET3p0QlFUUkNjRVFzYVVKQlFXRXNTMEZCWWl4SFFUVkNiMFE3TzBGQk9FSndSQ3hYUVVGUExGbEJRVkFzUTBFNVFtOUVPME5CUVhwRElpd2labWxzWlNJNkluTjBZV2RuWlhJdWFuTWlMQ0p6YjNWeVkyVlNiMjkwSWpvaUwxVnpaWEp6TDAxaGRIUXZVMmwwWlhNdmNHOXdiVzkwYVc5dUlpd2ljMjkxY21ObGMwTnZiblJsYm5RaU9sc2lhVzF3YjNKMElGUjNaV1Z1SUdaeWIyMGdKeTR1TDJGamRHbHZibk12VkhkbFpXNG5PMXh1YVcxd2IzSjBJSHNnYkdsdVpXRnlJSDBnWm5KdmJTQW5MaTR2WVdOMGFXOXVjeTlsWVhOcGJtY3ZjSEpsYzJWMExXVmhjMmx1WnljN1hHNXBiWEJ2Y25RZ2V5QnBjMDUxYlNCOUlHWnliMjBnSnk0dmRYUnBiSE1uTzF4dVhHNWpiMjV6ZENCRVJVWkJWVXhVWDBsT1ZFVlNWa0ZNSUQwZ01UQXdPMXh1WEc1bGVIQnZjblFnWkdWbVlYVnNkQ0JtZFc1amRHbHZiaUJ6ZEdGbloyVnlLR0Z5Y21GNUxDQndjbTl3Y3l3Z1kyRnNiR0poWTJzcElIdGNiaUFnSUNCamIyNXpkQ0JoY25KaGVVeGxibWQwYUNBOUlHRnljbUY1TG14bGJtZDBhRHRjYmlBZ0lDQmpiMjV6ZENCd2NtOXdjMGx6U1c1MFpYSjJZV3dnUFNCcGMwNTFiU2h3Y205d2N5azdYRzRnSUNBZ1kyOXVjM1FnYVc1MFpYSjJZV3dnUFNCd2NtOXdjMGx6U1c1MFpYSjJZV3dnUHlCd2NtOXdjeUE2SUhCeWIzQnpMbWx1ZEdWeWRtRnNJSHg4SUVSRlJrRlZURlJmU1U1VVJWSldRVXc3WEc0Z0lDQWdiR1YwSUhCeVpYWkpibVJsZUNBOUlDMHhPMXh1WEc0Z0lDQWdZMjl1YzNRZ2MzUmhaMmRsY2xSM1pXVnVJRDBnYm1WM0lGUjNaV1Z1S0h0Y2JpQWdJQ0FnSUNBZ1pIVnlZWFJwYjI0NklHbHVkR1Z5ZG1Gc0lDb2dZWEp5WVhsTVpXNW5kR2dzWEc0Z0lDQWdJQ0FnSUhaaGJIVmxjem9nZTF4dUlDQWdJQ0FnSUNBZ0lDQWdhVG9nZTF4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUdaeWIyMDZJREFzWEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnZEc4NklHRnljbUY1VEdWdVozUm9JQzBnTVN4Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCeWIzVnVaRG9nZEhKMVpTeGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQmxZWE5sT2lCd2NtOXdjMGx6U1c1MFpYSjJZV3dnUHlCc2FXNWxZWElnT2lCd2NtOXdjeTVsWVhObElIeDhJR3hwYm1WaGNseHVJQ0FnSUNBZ0lDQWdJQ0FnZlZ4dUlDQWdJQ0FnSUNCOUxGeHVJQ0FnSUNBZ0lDQnZibEpsYm1SbGNqb2dLSHNnYVNCOUtTQTlQaUI3WEc0Z0lDQWdJQ0FnSUNBZ0lDQnNaWFFnWjJGd1NXNWtaWGdnUFNCd2NtVjJTVzVrWlhnZ0t5QXhPMXh1WEc0Z0lDQWdJQ0FnSUNBZ0lDQm1iM0lnS0RzZ1oyRndTVzVrWlhnZ1BEMGdhVHNnWjJGd1NXNWtaWGdyS3lrZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lHTmhiR3hpWVdOcktHRnljbUY1VzJkaGNFbHVaR1Y0WFN3Z1oyRndTVzVrWlhncE8xeHVJQ0FnSUNBZ0lDQWdJQ0FnZlZ4dVhHNGdJQ0FnSUNBZ0lDQWdJQ0J3Y21WMlNXNWtaWGdnUFNCcE8xeHVJQ0FnSUNBZ0lDQjlMRnh1SUNBZ0lDQWdJQ0J2YmtOdmJYQnNaWFJsT2lCd2NtOXdjMGx6U1c1MFpYSjJZV3dnUHlCMWJtUmxabWx1WldRZ09pQndjbTl3Y3k1dmJrTnZiWEJzWlhSbFhHNGdJQ0FnZlNrN1hHNWNiaUFnSUNCemRHRm5aMlZ5VkhkbFpXNHVjM1JoY25Rb0tUdGNibHh1SUNBZ0lISmxkSFZ5YmlCemRHRm5aMlZ5VkhkbFpXNDdYRzU5SWwxOVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvaW5jL3N0YWdnZXIuanNcbiAqKiBtb2R1bGUgaWQgPSAxN1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9O1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0cy5kZWZhdWx0ID0gdGltZWxpbmU7XG5cbnZhciBfVHdlZW4gPSByZXF1aXJlKCcuLi9hY3Rpb25zL1R3ZWVuJyk7XG5cbnZhciBfVHdlZW4yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfVHdlZW4pO1xuXG52YXIgX3ByZXNldEVhc2luZyA9IHJlcXVpcmUoJy4uL2FjdGlvbnMvZWFzaW5nL3ByZXNldC1lYXNpbmcnKTtcblxudmFyIF9jYWxjID0gcmVxdWlyZSgnLi9jYWxjJyk7XG5cbnZhciBfdXRpbHMgPSByZXF1aXJlKCcuL3V0aWxzJyk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbi8qXG4gICAgQHBhcmFtIFthcnJheV1cbiAgICAgICAgU2VxdWVudGlhbCBhcnJheSBvZiB0d2VlbnMsIGVhY2ggaXRlbSBjYW4gYmUgYSB0d2VlbiBvciBkZWZpbml0aW9uIG9iajpcblxuICAgICAgICBbXG4gICAgICAgICAgICBuZXcgVHdlZW4oKSxcbiAgICAgICAgICAgIHN0YWdnZXIoKSxcbiAgICAgICAgICAgIHRpbWVsaW5lKCksXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdHdlZW46IG5ldyBUd2VlbigpLFxuICAgICAgICAgICAgICAgIGF0OiAxMDAsXG4gICAgICAgICAgICAgICAgb2Zmc2V0OiBcIis9MTAwXCJcbiAgICAgICAgICAgIH1cbiAgICAgICAgXVxuKi9cbnZhciBhbmFseXplID0gZnVuY3Rpb24gKGRlZnMpIHtcbiAgICB2YXIgdGltZWxpbmUgPSBbXTtcbiAgICB2YXIgY3VycmVudFBsYXloZWFkID0gMDtcblxuICAgIGRlZnMuZm9yRWFjaChmdW5jdGlvbiAoZGVmKSB7XG4gICAgICAgIHZhciBkZWZJc09iaiA9IGRlZi50d2VlbiA/IHRydWUgOiBmYWxzZTtcbiAgICAgICAgdmFyIHR3ZWVuID0gZGVmSXNPYmogPyBkZWYudHdlZW4gOiBkZWY7XG5cbiAgICAgICAgY3VycmVudFBsYXloZWFkICs9IGRlZklzT2JqICYmIGRlZi5vZmZzZXQgPyBkZWYuYXQgfHwgKDAsIF9jYWxjLnJlbGF0aXZlVmFsdWUpKGN1cnJlbnRQbGF5aGVhZCwgZGVmLm9mZnNldCkgOiAwO1xuXG4gICAgICAgIHZhciBkdXJhdGlvbiA9IDA7XG4gICAgICAgICgwLCBfdXRpbHMuZWFjaCkodHdlZW4udmFsdWVzLCBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICAgIHJldHVybiBkdXJhdGlvbiA9IE1hdGgubWF4KGR1cmF0aW9uLCB2YWx1ZS5kdXJhdGlvbik7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRpbWVsaW5lLnB1c2goe1xuICAgICAgICAgICAgZnJvbTogY3VycmVudFBsYXloZWFkLFxuICAgICAgICAgICAgZHVyYXRpb246IGR1cmF0aW9uLFxuICAgICAgICAgICAgZmlyZTogdHdlZW4uc2Vla1RpbWVcbiAgICAgICAgfSk7XG5cbiAgICAgICAgY3VycmVudFBsYXloZWFkICs9IHR3ZWVuLmR1cmF0aW9uO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIHsgdG90YWxUaW1lOiBjdXJyZW50UGxheWhlYWQsIHRpbWVsaW5lOiB0aW1lbGluZSB9O1xufTtcblxudmFyIHNldFR3ZWVucyA9IGZ1bmN0aW9uIChfcmVmKSB7XG4gICAgdmFyIHRpbWVsaW5lID0gX3JlZi50aW1lbGluZTtcbiAgICB2YXIgdGltZWxpbmVMZW5ndGggPSBfcmVmLnRpbWVsaW5lTGVuZ3RoO1xuICAgIHZhciBzdGF0ZSA9IF9yZWYuc3RhdGU7XG5cbiAgICB2YXIgcGxheWhlYWQgPSBzdGF0ZS5wO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aW1lbGluZUxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHZhciB0d2VlbiA9IHRpbWVsaW5lW2ldO1xuICAgICAgICB2YXIgdHdlZW5UaW1lID0gcGxheWhlYWQgLSB0d2Vlbi5mcm9tO1xuXG4gICAgICAgIGlmICh0d2VlblRpbWUgPiAwICYmIHR3ZWVuVGltZSA8IHR3ZWVuLmR1cmF0aW9uKSB7XG4gICAgICAgICAgICB0d2Vlbi5maXJlKHR3ZWVuVGltZSk7XG4gICAgICAgIH1cbiAgICB9XG59O1xuXG5mdW5jdGlvbiB0aW1lbGluZShkZWYpIHtcbiAgICB2YXIgcHJvcHMgPSBhcmd1bWVudHMubGVuZ3RoIDw9IDEgfHwgYXJndW1lbnRzWzFdID09PSB1bmRlZmluZWQgPyB7fSA6IGFyZ3VtZW50c1sxXTtcblxuICAgIHZhciBfYW5hbHl6ZSA9IGFuYWx5emUoZGVmKTtcblxuICAgIHZhciB0b3RhbFRpbWUgPSBfYW5hbHl6ZS50b3RhbFRpbWU7XG4gICAgdmFyIHRpbWVsaW5lID0gX2FuYWx5emUudGltZWxpbmU7XG5cbiAgICB2YXIgdGltZWxpbmVQcm9wcyA9IF9leHRlbmRzKHt9LCBwcm9wcywge1xuICAgICAgICBkdXJhdGlvbjogdG90YWxUaW1lLFxuICAgICAgICBlYXNlOiBfcHJlc2V0RWFzaW5nLmxpbmVhcixcbiAgICAgICAgdmFsdWVzOiB7XG4gICAgICAgICAgICBwOiAxXG4gICAgICAgIH0sXG4gICAgICAgIHRpbWVsaW5lOiB0aW1lbGluZSxcbiAgICAgICAgdGltZWxpbmVMZW5ndGg6IHRpbWVsaW5lLmxlbmd0aCxcbiAgICAgICAgb25SZW5kZXI6IHNldFR3ZWVuc1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIG5ldyBfVHdlZW4yLmRlZmF1bHQodGltZWxpbmVQcm9wcyk7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5OeVl5OXBibU12ZEdsdFpXeHBibVV1YW5NaVhTd2libUZ0WlhNaU9sdGRMQ0p0WVhCd2FXNW5jeUk2SWpzN096czdhMEpCTWtSM1FqczdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdRVUYyUTNoQ0xFbEJRVTBzVlVGQlZTeFZRVUZETEVsQlFVUXNSVUZCVlR0QlFVTjBRaXhSUVVGTkxGZEJRVmNzUlVGQldDeERRVVJuUWp0QlFVVjBRaXhSUVVGSkxHdENRVUZyUWl4RFFVRnNRaXhEUVVaclFqczdRVUZKZEVJc1UwRkJTeXhQUVVGTUxFTkJRV0VzVlVGQlF5eEhRVUZFTEVWQlFWTTdRVUZEYkVJc1dVRkJUU3hYUVVGWExFbEJRVWtzUzBGQlNpeEhRVUZaTEVsQlFWb3NSMEZCYlVJc1MwRkJia0lzUTBGRVF6dEJRVVZzUWl4WlFVRk5MRkZCUVZFc1YwRkJZU3hKUVVGSkxFdEJRVW9zUjBGQldTeEhRVUY2UWl4RFFVWkpPenRCUVVsc1Fpd3lRa0ZCYjBJc1VVRkJReXhKUVVGWkxFbEJRVWtzVFVGQlNpeEhRVU0zUWl4SlFVRkpMRVZCUVVvc1NVRkJWU3g1UWtGQll5eGxRVUZrTEVWQlFTdENMRWxCUVVrc1RVRkJTaXhEUVVGNlF5eEhRVUYxUkN4RFFVUjJReXhEUVVwR096dEJRVTlzUWl4WlFVRkpMRmRCUVZjc1EwRkJXQ3hEUVZCak8wRkJVV3hDTEhsQ1FVRkxMRTFCUVUwc1RVRkJUaXhGUVVGakxGVkJRVU1zUzBGQlJEdHRRa0ZCVnl4WFFVRlhMRXRCUVVzc1IwRkJUQ3hEUVVGVExGRkJRVlFzUlVGQmJVSXNUVUZCVFN4UlFVRk9MRU5CUVRsQ08xTkJRVmdzUTBGQmJrSXNRMEZTYTBJN08wRkJWV3hDTEdsQ1FVRlRMRWxCUVZRc1EwRkJZenRCUVVOV0xHdENRVUZOTEdWQlFVNDdRVUZEUVN4elFrRkJWU3hSUVVGV08wRkJRMEVzYTBKQlFVMHNUVUZCVFN4UlFVRk9PMU5CU0ZZc1JVRldhMEk3TzBGQlowSnNRaXd5UWtGQmJVSXNUVUZCVFN4UlFVRk9MRU5CYUVKRU8wdEJRVlFzUTBGQllpeERRVXB6UWpzN1FVRjFRblJDTEZkQlFVOHNSVUZCUlN4WFFVRlhMR1ZCUVZnc1JVRkJORUlzYTBKQlFUbENMRVZCUVZBc1EwRjJRbk5DTzBOQlFWWTdPMEZCTUVKb1FpeEpRVUZOTEZsQlFWa3NaMEpCUVhsRE8xRkJRWFJETEhsQ1FVRnpRenRSUVVFMVFpeHhRMEZCTkVJN1VVRkJXaXh0UWtGQldUczdRVUZEZGtRc1VVRkJUU3hYUVVGWExFMUJRVTBzUTBGQlRpeERRVVJ6UXpzN1FVRkhka1FzVTBGQlN5eEpRVUZKTEVsQlFVa3NRMEZCU2l4RlFVRlBMRWxCUVVrc1kwRkJTaXhGUVVGdlFpeEhRVUZ3UXl4RlFVRjVRenRCUVVOeVF5eFpRVUZOTEZGQlFWRXNVMEZCVXl4RFFVRlVMRU5CUVZJc1EwRkVLMEk3UVVGRmNrTXNXVUZCVFN4WlFVRlpMRmRCUVZjc1RVRkJUU3hKUVVGT0xFTkJSbEU3TzBGQlNYSkRMRmxCUVVrc1dVRkJXU3hEUVVGYUxFbEJRV2xDTEZsQlFWa3NUVUZCVFN4UlFVRk9MRVZCUVdkQ08wRkJRemRETEd0Q1FVRk5MRWxCUVU0c1EwRkJWeXhUUVVGWUxFVkJSRFpETzFOQlFXcEVPMHRCU2tvN1EwRklZenM3UVVGaFNDeFRRVUZUTEZGQlFWUXNRMEZCYTBJc1IwRkJiRUlzUlVGQmJVTTdVVUZCV2l3NFJFRkJVU3hyUWtGQlNUczdiVUpCUTJRc1VVRkJVU3hIUVVGU0xFVkJSR003TzFGQlEzUkRMQ3RDUVVSelF6dFJRVU16UWl3MlFrRkVNa0k3TzBGQlJ6bERMRkZCUVUwc05rSkJRME03UVVGRFNDeHJRa0ZCVlN4VFFVRldPMEZCUTBFN1FVRkRRU3huUWtGQlVUdEJRVU5LTEdWQlFVY3NRMEZCU0R0VFFVUktPMEZCUjBFc2EwSkJRVlVzVVVGQlZqdEJRVU5CTEhkQ1FVRm5RaXhUUVVGVExFMUJRVlE3UVVGRGFFSXNhMEpCUVZVc1UwRkJWanROUVZSRkxFTkJTSGRET3p0QlFXVTVReXhYUVVGUExHOUNRVUZWTEdGQlFWWXNRMEZCVUN4RFFXWTRRenREUVVGdVF5SXNJbVpwYkdVaU9pSjBhVzFsYkdsdVpTNXFjeUlzSW5OdmRYSmpaVkp2YjNRaU9pSXZWWE5sY25NdlRXRjBkQzlUYVhSbGN5OXdiM0J0YjNScGIyNGlMQ0p6YjNWeVkyVnpRMjl1ZEdWdWRDSTZXeUpwYlhCdmNuUWdWSGRsWlc0Z1puSnZiU0FuTGk0dllXTjBhVzl1Y3k5VWQyVmxiaWM3WEc1cGJYQnZjblFnZXlCc2FXNWxZWElnZlNCbWNtOXRJQ2N1TGk5aFkzUnBiMjV6TDJWaGMybHVaeTl3Y21WelpYUXRaV0Z6YVc1bkp6dGNibWx0Y0c5eWRDQjdJSEpsYkdGMGFYWmxWbUZzZFdVZ2ZTQm1jbTl0SUNjdUwyTmhiR01uTzF4dWFXMXdiM0owSUhzZ1pXRmphQ0I5SUdaeWIyMGdKeTR2ZFhScGJITW5PMXh1WEc0dktseHVJQ0FnSUVCd1lYSmhiU0JiWVhKeVlYbGRYRzRnSUNBZ0lDQWdJRk5sY1hWbGJuUnBZV3dnWVhKeVlYa2diMllnZEhkbFpXNXpMQ0JsWVdOb0lHbDBaVzBnWTJGdUlHSmxJR0VnZEhkbFpXNGdiM0lnWkdWbWFXNXBkR2x2YmlCdlltbzZYRzVjYmlBZ0lDQWdJQ0FnVzF4dUlDQWdJQ0FnSUNBZ0lDQWdibVYzSUZSM1pXVnVLQ2tzWEc0Z0lDQWdJQ0FnSUNBZ0lDQnpkR0ZuWjJWeUtDa3NYRzRnSUNBZ0lDQWdJQ0FnSUNCMGFXMWxiR2x1WlNncExGeHVJQ0FnSUNBZ0lDQWdJQ0FnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUhSM1pXVnVPaUJ1WlhjZ1ZIZGxaVzRvS1N4Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCaGREb2dNVEF3TEZ4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUc5bVpuTmxkRG9nWENJclBURXdNRndpWEc0Z0lDQWdJQ0FnSUNBZ0lDQjlYRzRnSUNBZ0lDQWdJRjFjYmlvdlhHNWpiMjV6ZENCaGJtRnNlWHBsSUQwZ0tHUmxabk1wSUQwK0lIdGNiaUFnSUNCamIyNXpkQ0IwYVcxbGJHbHVaU0E5SUZ0ZE8xeHVJQ0FnSUd4bGRDQmpkWEp5Wlc1MFVHeGhlV2hsWVdRZ1BTQXdPMXh1WEc0Z0lDQWdaR1ZtY3k1bWIzSkZZV05vS0Noa1pXWXBJRDArSUh0Y2JpQWdJQ0FnSUNBZ1kyOXVjM1FnWkdWbVNYTlBZbW9nUFNCa1pXWXVkSGRsWlc0Z1B5QjBjblZsSURvZ1ptRnNjMlU3WEc0Z0lDQWdJQ0FnSUdOdmJuTjBJSFIzWldWdUlEMGdLR1JsWmtselQySnFLU0EvSUdSbFppNTBkMlZsYmlBNklHUmxaanRjYmx4dUlDQWdJQ0FnSUNCamRYSnlaVzUwVUd4aGVXaGxZV1FnS3owZ0tDaGtaV1pKYzA5aWFpQW1KaUJrWldZdWIyWm1jMlYwS1NBL1hHNGdJQ0FnSUNBZ0lDQWdJQ0JrWldZdVlYUWdmSHdnY21Wc1lYUnBkbVZXWVd4MVpTaGpkWEp5Wlc1MFVHeGhlV2hsWVdRc0lHUmxaaTV2Wm1aelpYUXBJRG9nTUNrN1hHNWNiaUFnSUNBZ0lDQWdiR1YwSUdSMWNtRjBhVzl1SUQwZ01EdGNiaUFnSUNBZ0lDQWdaV0ZqYUNoMGQyVmxiaTUyWVd4MVpYTXNJQ2gyWVd4MVpTa2dQVDRnWkhWeVlYUnBiMjRnUFNCTllYUm9MbTFoZUNoa2RYSmhkR2x2Yml3Z2RtRnNkV1V1WkhWeVlYUnBiMjRwS1R0Y2JseHVJQ0FnSUNBZ0lDQjBhVzFsYkdsdVpTNXdkWE5vS0h0Y2JpQWdJQ0FnSUNBZ0lDQWdJR1p5YjIwNklHTjFjbkpsYm5SUWJHRjVhR1ZoWkN4Y2JpQWdJQ0FnSUNBZ0lDQWdJR1IxY21GMGFXOXVPaUJrZFhKaGRHbHZiaXhjYmlBZ0lDQWdJQ0FnSUNBZ0lHWnBjbVU2SUhSM1pXVnVMbk5sWld0VWFXMWxYRzRnSUNBZ0lDQWdJSDBwTzF4dVhHNGdJQ0FnSUNBZ0lHTjFjbkpsYm5SUWJHRjVhR1ZoWkNBclBTQjBkMlZsYmk1a2RYSmhkR2x2Ymp0Y2JpQWdJQ0I5S1R0Y2JseHVJQ0FnSUhKbGRIVnliaUI3SUhSdmRHRnNWR2x0WlRvZ1kzVnljbVZ1ZEZCc1lYbG9aV0ZrTENCMGFXMWxiR2x1WlNCOU8xeHVmVHRjYmx4dVkyOXVjM1FnYzJWMFZIZGxaVzV6SUQwZ0tIc2dkR2x0Wld4cGJtVXNJSFJwYldWc2FXNWxUR1Z1WjNSb0xDQnpkR0YwWlNCOUtTQTlQaUI3WEc0Z0lDQWdZMjl1YzNRZ2NHeGhlV2hsWVdRZ1BTQnpkR0YwWlM1d08xeHVYRzRnSUNBZ1ptOXlJQ2hzWlhRZ2FTQTlJREE3SUdrZ1BDQjBhVzFsYkdsdVpVeGxibWQwYURzZ2FTc3JLU0I3WEc0Z0lDQWdJQ0FnSUdOdmJuTjBJSFIzWldWdUlEMGdkR2x0Wld4cGJtVmJhVjA3WEc0Z0lDQWdJQ0FnSUdOdmJuTjBJSFIzWldWdVZHbHRaU0E5SUhCc1lYbG9aV0ZrSUMwZ2RIZGxaVzR1Wm5KdmJUdGNibHh1SUNBZ0lDQWdJQ0JwWmlBb2RIZGxaVzVVYVcxbElENGdNQ0FtSmlCMGQyVmxibFJwYldVZ1BDQjBkMlZsYmk1a2RYSmhkR2x2YmlrZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnZEhkbFpXNHVabWx5WlNoMGQyVmxibFJwYldVcE8xeHVJQ0FnSUNBZ0lDQjlYRzRnSUNBZ2ZWeHVmVHRjYmx4dVpYaHdiM0owSUdSbFptRjFiSFFnWm5WdVkzUnBiMjRnZEdsdFpXeHBibVVvWkdWbUxDQndjbTl3Y3lBOUlIdDlLU0I3WEc0Z0lDQWdZMjl1YzNRZ2V5QjBiM1JoYkZScGJXVXNJSFJwYldWc2FXNWxJSDBnUFNCaGJtRnNlWHBsS0dSbFppazdYRzVjYmlBZ0lDQmpiMjV6ZENCMGFXMWxiR2x1WlZCeWIzQnpJRDBnZTF4dUlDQWdJQ0FnSUNBdUxpNXdjbTl3Y3l4Y2JpQWdJQ0FnSUNBZ1pIVnlZWFJwYjI0NklIUnZkR0ZzVkdsdFpTeGNiaUFnSUNBZ0lDQWdaV0Z6WlRvZ2JHbHVaV0Z5TEZ4dUlDQWdJQ0FnSUNCMllXeDFaWE02SUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJSEE2SURGY2JpQWdJQ0FnSUNBZ2ZTeGNiaUFnSUNBZ0lDQWdkR2x0Wld4cGJtVTZJSFJwYldWc2FXNWxMRnh1SUNBZ0lDQWdJQ0IwYVcxbGJHbHVaVXhsYm1kMGFEb2dkR2x0Wld4cGJtVXViR1Z1WjNSb0xGeHVJQ0FnSUNBZ0lDQnZibEpsYm1SbGNqb2djMlYwVkhkbFpXNXpYRzRnSUNBZ2ZUdGNibHh1SUNBZ0lISmxkSFZ5YmlCdVpYY2dWSGRsWlc0b2RHbHRaV3hwYm1WUWNtOXdjeWs3WEc1OUlsMTlcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2luYy90aW1lbGluZS5qc1xuICoqIG1vZHVsZSBpZCA9IDE4XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfZGVmYXVsdFByb3BzID0gcmVxdWlyZSgnLi9zZXR0aW5ncy9kZWZhdWx0LXByb3BzJyk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IHtcbiAgICBkZWZhdWx0UHJvcHM6IF9kZWZhdWx0UHJvcHMub3BhY2l0eVxufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbk55WXk5MllXeDFaUzEwZVhCbGN5OWhiSEJvWVM1cWN5SmRMQ0p1WVcxbGN5STZXMTBzSW0xaGNIQnBibWR6SWpvaU96czdPenM3YTBKQlJXVTdRVUZEV0N4MVEwRkVWeUlzSW1acGJHVWlPaUpoYkhCb1lTNXFjeUlzSW5OdmRYSmpaVkp2YjNRaU9pSXZWWE5sY25NdlRXRjBkQzlUYVhSbGN5OXdiM0J0YjNScGIyNGlMQ0p6YjNWeVkyVnpRMjl1ZEdWdWRDSTZXeUpwYlhCdmNuUWdleUJ2Y0dGamFYUjVJSDBnWm5KdmJTQW5MaTl6WlhSMGFXNW5jeTlrWldaaGRXeDBMWEJ5YjNCekp6dGNibHh1Wlhod2IzSjBJR1JsWm1GMWJIUWdlMXh1SUNBZ0lHUmxabUYxYkhSUWNtOXdjem9nYjNCaFkybDBlVnh1ZlRzaVhYMD1cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL3ZhbHVlLXR5cGVzL2FscGhhLmpzXG4gKiogbW9kdWxlIGlkID0gMTlcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHMuZGVmYXVsdCA9IHtcbiAgICBkZWZhdWx0UHJvcHM6IHtcbiAgICAgICAgdW5pdDogJ2RlZydcbiAgICB9XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluTnlZeTkyWVd4MVpTMTBlWEJsY3k5aGJtZHNaUzVxY3lKZExDSnVZVzFsY3lJNlcxMHNJbTFoY0hCcGJtZHpJam9pT3pzN2EwSkJRV1U3UVVGRFdDeHJRa0ZCWXp0QlFVTldMR05CUVUwc1MwRkJUanRMUVVSS0lpd2labWxzWlNJNkltRnVaMnhsTG1weklpd2ljMjkxY21ObFVtOXZkQ0k2SWk5VmMyVnljeTlOWVhSMEwxTnBkR1Z6TDNCdmNHMXZkR2x2YmlJc0luTnZkWEpqWlhORGIyNTBaVzUwSWpwYkltVjRjRzl5ZENCa1pXWmhkV3gwSUh0Y2JpQWdJQ0JrWldaaGRXeDBVSEp2Y0hNNklIdGNiaUFnSUNBZ0lDQWdkVzVwZERvZ0oyUmxaeWRjYmlBZ0lDQjlYRzU5T3lKZGZRPT1cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL3ZhbHVlLXR5cGVzL2FuZ2xlLmpzXG4gKiogbW9kdWxlIGlkID0gMjBcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF91dGlscyA9IHJlcXVpcmUoJy4uL2luYy91dGlscycpO1xuXG52YXIgX3B4ID0gcmVxdWlyZSgnLi9weCcpO1xuXG52YXIgX3B4MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3B4KTtcblxudmFyIF9kaWN0aW9uYXJ5ID0gcmVxdWlyZSgnLi9zZXR0aW5ncy9kaWN0aW9uYXJ5Jyk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmV4cG9ydHMuZGVmYXVsdCA9IHtcbiAgICBkZWZhdWx0UHJvcHM6IF9weDIuZGVmYXVsdC5kZWZhdWx0UHJvcHMsXG5cbiAgICAvKlxuICAgICAgICBTcGxpdCBwb3NpdGlvbnMgaW4gZm9ybWF0IFwiWCBZIFpcIlxuICAgICAgICBcbiAgICAgICAgQHBhcmFtIFtzdHJpbmddOiBQb3NpdGlvbiB2YWx1ZXNcbiAgICAgICAgICAgIFwiMjAlIDMwJSAwXCIgLT4gezIwJSwgMzAlLCAwfVxuICAgICAgICAgICAgXCIyMCUgMzAlXCIgLT4gezIwJSwgMzAlfVxuICAgICAgICAgICAgXCIyMCVcIiAtPiB7MjAlLCAyMCV9XG4gICAgKi9cbiAgICBzcGxpdDogZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgIHZhciBzcGxpdFZhbHVlcyA9ICgwLCBfdXRpbHMuc3BsaXRTcGFjZURlbGltaXRlZCkodmFsdWUpO1xuICAgICAgICB2YXIgbnVtQXhlcyA9IHNwbGl0VmFsdWVzLmxlbmd0aDtcbiAgICAgICAgdmFyIHNwbGl0VmFsdWUgPSB7XG4gICAgICAgICAgICBYOiBzcGxpdFZhbHVlc1swXSxcbiAgICAgICAgICAgIFk6IG51bUF4ZXMgPiAxID8gc3BsaXRWYWx1ZXNbMV0gOiBzcGxpdFZhbHVlc1swXVxuICAgICAgICB9O1xuXG4gICAgICAgIGlmIChudW1BeGVzID4gMikge1xuICAgICAgICAgICAgc3BsaXRWYWx1ZS5aID0gc3BsaXRWYWx1ZXNbMl07XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gc3BsaXRWYWx1ZTtcbiAgICB9LFxuXG4gICAgY29tYmluZTogZnVuY3Rpb24gKHZhbHVlcykge1xuICAgICAgICByZXR1cm4gKDAsIF91dGlscy5jcmVhdGVEZWxpbWl0ZWQpKHZhbHVlcywgX2RpY3Rpb25hcnkuYXhlcywgJyAnKTtcbiAgICB9XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluTnlZeTkyWVd4MVpTMTBlWEJsY3k5aGVHVnpMbXB6SWwwc0ltNWhiV1Z6SWpwYlhTd2liV0Z3Y0dsdVozTWlPaUk3T3pzN096czdPenM3T3pzN08ydENRVWxsTzBGQlExZ3NhMEpCUVdNc1lVRkJXU3haUVVGYU96czdPenM3T3pzN08wRkJWV1FzVjBGQlR5eFZRVUZETEV0QlFVUXNSVUZCVnp0QlFVTmtMRmxCUVUwc1kwRkJZeXhuUTBGQmIwSXNTMEZCY0VJc1EwRkJaQ3hEUVVSUk8wRkJSV1FzV1VGQlRTeFZRVUZWTEZsQlFWa3NUVUZCV2l4RFFVWkdPMEZCUjJRc1dVRkJUU3hoUVVGaE8wRkJRMllzWlVGQlJ5eFpRVUZaTEVOQlFWb3NRMEZCU0R0QlFVTkJMR1ZCUVVjc1QwRkJReXhIUVVGVkxFTkJRVllzUjBGQlpTeFpRVUZaTEVOQlFWb3NRMEZCYUVJc1IwRkJhVU1zV1VGQldTeERRVUZhTEVOQlFXcERPMU5CUmtRc1EwRklVVHM3UVVGUlpDeFpRVUZKTEZWQlFWVXNRMEZCVml4RlFVRmhPMEZCUTJJc2RVSkJRVmNzUTBGQldDeEhRVUZsTEZsQlFWa3NRMEZCV2l4RFFVRm1MRU5CUkdFN1UwRkJha0k3TzBGQlNVRXNaVUZCVHl4VlFVRlFMRU5CV21NN1MwRkJXRHM3UVVGbFVDeGhRVUZUTEZWQlFVTXNUVUZCUkR0bFFVRlpMRFJDUVVGblFpeE5RVUZvUWl4dlFrRkJPRUlzUjBGQk9VSTdTMEZCV2lJc0ltWnBiR1VpT2lKaGVHVnpMbXB6SWl3aWMyOTFjbU5sVW05dmRDSTZJaTlWYzJWeWN5OU5ZWFIwTDFOcGRHVnpMM0J2Y0cxdmRHbHZiaUlzSW5OdmRYSmpaWE5EYjI1MFpXNTBJanBiSW1sdGNHOXlkQ0I3SUdOeVpXRjBaVVJsYkdsdGFYUmxaQ3dnYzNCc2FYUlRjR0ZqWlVSbGJHbHRhWFJsWkNCOUlHWnliMjBnSnk0dUwybHVZeTkxZEdsc2N5YzdYRzVwYlhCdmNuUWdjSGhXWVd4MVpWUjVjR1VnWm5KdmJTQW5MaTl3ZUNjN1hHNXBiWEJ2Y25RZ2V5QmhlR1Z6SUgwZ1puSnZiU0FuTGk5elpYUjBhVzVuY3k5a2FXTjBhVzl1WVhKNUp6dGNibHh1Wlhod2IzSjBJR1JsWm1GMWJIUWdlMXh1SUNBZ0lHUmxabUYxYkhSUWNtOXdjem9nY0hoV1lXeDFaVlI1Y0dVdVpHVm1ZWFZzZEZCeWIzQnpMRnh1SUNBZ0lDQWdJQ0JjYmlBZ0lDQXZLbHh1SUNBZ0lDQWdJQ0JUY0d4cGRDQndiM05wZEdsdmJuTWdhVzRnWm05eWJXRjBJRndpV0NCWklGcGNJbHh1SUNBZ0lDQWdJQ0JjYmlBZ0lDQWdJQ0FnUUhCaGNtRnRJRnR6ZEhKcGJtZGRPaUJRYjNOcGRHbHZiaUIyWVd4MVpYTmNiaUFnSUNBZ0lDQWdJQ0FnSUZ3aU1qQWxJRE13SlNBd1hDSWdMVDRnZXpJd0pTd2dNekFsTENBd2ZWeHVJQ0FnSUNBZ0lDQWdJQ0FnWENJeU1DVWdNekFsWENJZ0xUNGdlekl3SlN3Z016QWxmVnh1SUNBZ0lDQWdJQ0FnSUNBZ1hDSXlNQ1ZjSWlBdFBpQjdNakFsTENBeU1DVjlYRzRnSUNBZ0tpOWNiaUFnSUNCemNHeHBkRG9nS0haaGJIVmxLU0E5UGlCN1hHNGdJQ0FnSUNBZ0lHTnZibk4wSUhOd2JHbDBWbUZzZFdWeklEMGdjM0JzYVhSVGNHRmpaVVJsYkdsdGFYUmxaQ2gyWVd4MVpTazdYRzRnSUNBZ0lDQWdJR052Ym5OMElHNTFiVUY0WlhNZ1BTQnpjR3hwZEZaaGJIVmxjeTVzWlc1bmRHZzdYRzRnSUNBZ0lDQWdJR052Ym5OMElITndiR2wwVm1Gc2RXVWdQU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQllPaUJ6Y0d4cGRGWmhiSFZsYzFzd1hTeGNiaUFnSUNBZ0lDQWdJQ0FnSUZrNklDaHVkVzFCZUdWeklENGdNU2tnUHlCemNHeHBkRlpoYkhWbGMxc3hYU0E2SUhOd2JHbDBWbUZzZFdWeld6QmRYRzRnSUNBZ0lDQWdJSDA3WEc1Y2JpQWdJQ0FnSUNBZ2FXWWdLRzUxYlVGNFpYTWdQaUF5S1NCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0J6Y0d4cGRGWmhiSFZsTGxvZ1BTQnpjR3hwZEZaaGJIVmxjMXN5WFR0Y2JpQWdJQ0FnSUNBZ2ZWeHVYRzRnSUNBZ0lDQWdJSEpsZEhWeWJpQnpjR3hwZEZaaGJIVmxPMXh1SUNBZ0lIMHNYRzVjYmlBZ0lDQmpiMjFpYVc1bE9pQW9kbUZzZFdWektTQTlQaUJqY21WaGRHVkVaV3hwYldsMFpXUW9kbUZzZFdWekxDQmhlR1Z6TENBbklDY3BYRzU5TzF4dUlsMTlcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL3ZhbHVlLXR5cGVzL2F4ZXMuanNcbiAqKiBtb2R1bGUgaWQgPSAyMVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9O1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX3JnYiA9IHJlcXVpcmUoJy4vcmdiJyk7XG5cbnZhciBfcmdiMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JnYik7XG5cbnZhciBfaHNsID0gcmVxdWlyZSgnLi9oc2wnKTtcblxudmFyIF9oc2wyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfaHNsKTtcblxudmFyIF9oZXggPSByZXF1aXJlKCcuL2hleCcpO1xuXG52YXIgX2hleDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9oZXgpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG52YXIgY29sb3JUeXBlcyA9IFtfcmdiMi5kZWZhdWx0LCBfaHNsMi5kZWZhdWx0LCBfaGV4Mi5kZWZhdWx0XTtcbnZhciBudW1Db2xvclR5cGVzID0gY29sb3JUeXBlcy5sZW5ndGg7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IHtcbiAgICBkZWZhdWx0UHJvcHM6IF9leHRlbmRzKHt9LCBfcmdiMi5kZWZhdWx0LmRlZmF1bHRQcm9wcywgX2hzbDIuZGVmYXVsdC5kZWZhdWx0UHJvcHMpLFxuXG4gICAgdGVzdDogZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgIHJldHVybiBfcmdiMi5kZWZhdWx0LnRlc3QodmFsdWUpIHx8IF9oZXgyLmRlZmF1bHQudGVzdCh2YWx1ZSkgfHwgX2hzbDIuZGVmYXVsdC50ZXN0KHZhbHVlKTtcbiAgICB9LFxuXG4gICAgc3BsaXQ6IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IG51bUNvbG9yVHlwZXM7IGkrKykge1xuICAgICAgICAgICAgaWYgKGNvbG9yVHlwZXNbaV0udGVzdCh2YWx1ZSkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gY29sb3JUeXBlc1tpXS5zcGxpdCh2YWx1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgY29tYmluZTogZnVuY3Rpb24gKHZhbHVlcykge1xuICAgICAgICByZXR1cm4gdmFsdWVzLlJlZCAhPT0gdW5kZWZpbmVkID8gX3JnYjIuZGVmYXVsdC5jb21iaW5lKHZhbHVlcykgOiBfaHNsMi5kZWZhdWx0LmNvbWJpbmUodmFsdWVzKTtcbiAgICB9XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluTnlZeTkyWVd4MVpTMTBlWEJsY3k5amIyeHZjaTVxY3lKZExDSnVZVzFsY3lJNlcxMHNJbTFoY0hCcGJtZHpJam9pT3pzN096czdPenM3T3pzN096czdPenM3T3p0QlFVbEJMRWxCUVUwc1lVRkJZU3cyUTBGQllqdEJRVU5PTEVsQlFVMHNaMEpCUVdkQ0xGZEJRVmNzVFVGQldEczdhMEpCUlZBN1FVRkRXQ3dyUWtGQmJVSXNZMEZCU1N4WlFVRktMRVZCUVhGQ0xHTkJRVWtzV1VGQlNpeERRVUY0UXpzN1FVRkZRU3hWUVVGTkxGVkJRVU1zUzBGQlJEdGxRVUZYTEdOQlFVa3NTVUZCU2l4RFFVRlRMRXRCUVZRc1MwRkJiVUlzWTBGQlNTeEpRVUZLTEVOQlFWTXNTMEZCVkN4RFFVRnVRaXhKUVVGelF5eGpRVUZKTEVsQlFVb3NRMEZCVXl4TFFVRlVMRU5CUVhSRE8wdEJRVmc3TzBGQlJVNHNWMEZCVHl4VlFVRkRMRXRCUVVRc1JVRkJWenRCUVVOa0xHRkJRVXNzU1VGQlNTeEpRVUZKTEVOQlFVb3NSVUZCVHl4SlFVRkpMR0ZCUVVvc1JVRkJiVUlzUjBGQmJrTXNSVUZCZDBNN1FVRkRjRU1zWjBKQlFVa3NWMEZCVnl4RFFVRllMRVZCUVdNc1NVRkJaQ3hEUVVGdFFpeExRVUZ1UWl4RFFVRktMRVZCUVN0Q08wRkJRek5DTEhWQ1FVRlBMRmRCUVZjc1EwRkJXQ3hGUVVGakxFdEJRV1FzUTBGQmIwSXNTMEZCY0VJc1EwRkJVQ3hEUVVReVFqdGhRVUV2UWp0VFFVUktPMHRCUkVjN08wRkJVVkFzWVVGQlV5eFZRVUZETEUxQlFVUTdaVUZCV1N4TlFVRkRMRU5CUVU4c1IwRkJVQ3hMUVVGbExGTkJRV1lzUjBGQk5FSXNZMEZCU1N4UFFVRktMRU5CUVZrc1RVRkJXaXhEUVVFM1FpeEhRVUZ0UkN4alFVRkpMRTlCUVVvc1EwRkJXU3hOUVVGYUxFTkJRVzVFTzB0QlFWb2lMQ0ptYVd4bElqb2lZMjlzYjNJdWFuTWlMQ0p6YjNWeVkyVlNiMjkwSWpvaUwxVnpaWEp6TDAxaGRIUXZVMmwwWlhNdmNHOXdiVzkwYVc5dUlpd2ljMjkxY21ObGMwTnZiblJsYm5RaU9sc2lhVzF3YjNKMElISm5ZaUJtY205dElDY3VMM0puWWljN1hHNXBiWEJ2Y25RZ2FITnNJR1p5YjIwZ0p5NHZhSE5zSnp0Y2JtbHRjRzl5ZENCb1pYZ2dabkp2YlNBbkxpOW9aWGduTzF4dVhHNWpiMjV6ZENCamIyeHZjbFI1Y0dWeklEMGdXM0puWWl3Z2FITnNMQ0JvWlhoZE8xeHVZMjl1YzNRZ2JuVnRRMjlzYjNKVWVYQmxjeUE5SUdOdmJHOXlWSGx3WlhNdWJHVnVaM1JvTzF4dVhHNWxlSEJ2Y25RZ1pHVm1ZWFZzZENCN1hHNGdJQ0FnWkdWbVlYVnNkRkJ5YjNCek9pQjdJQzR1TG5KbllpNWtaV1poZFd4MFVISnZjSE1zSUM0dUxtaHpiQzVrWldaaGRXeDBVSEp2Y0hNZ2ZTeGNibHh1SUNBZ0lIUmxjM1E2SUNoMllXeDFaU2tnUFQ0Z2NtZGlMblJsYzNRb2RtRnNkV1VwSUh4OElHaGxlQzUwWlhOMEtIWmhiSFZsS1NCOGZDQm9jMnd1ZEdWemRDaDJZV3gxWlNrc1hHNWNiaUFnSUNCemNHeHBkRG9nS0haaGJIVmxLU0E5UGlCN1hHNGdJQ0FnSUNBZ0lHWnZjaUFvYkdWMElHa2dQU0F3T3lCcElEd2diblZ0UTI5c2IzSlVlWEJsY3pzZ2FTc3JLU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQnBaaUFvWTI5c2IzSlVlWEJsYzF0cFhTNTBaWE4wS0haaGJIVmxLU2tnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUhKbGRIVnliaUJqYjJ4dmNsUjVjR1Z6VzJsZExuTndiR2wwS0haaGJIVmxLVHRjYmlBZ0lDQWdJQ0FnSUNBZ0lIMWNiaUFnSUNBZ0lDQWdmVnh1SUNBZ0lIMHNYRzVjYmlBZ0lDQmpiMjFpYVc1bE9pQW9kbUZzZFdWektTQTlQaUFvZG1Gc2RXVnpMbEpsWkNBaFBUMGdkVzVrWldacGJtVmtLU0EvSUhKbllpNWpiMjFpYVc1bEtIWmhiSFZsY3lrZ09pQm9jMnd1WTI5dFltbHVaU2gyWVd4MVpYTXBYRzU5TzF4dUlsMTlcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL3ZhbHVlLXR5cGVzL2NvbG9yLmpzXG4gKiogbW9kdWxlIGlkID0gMjJcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF91dGlscyA9IHJlcXVpcmUoJy4uL2luYy91dGlscycpO1xuXG52YXIgRkxPQVRfUkVHRVggPSAvKC0pPyhcXGRbXFxkXFwuXSopL2c7XG52YXIgZ2VuZXJhdGVUb2tlbiA9IGZ1bmN0aW9uICh0b2tlbikge1xuICAgIHJldHVybiAnJHsnICsgdG9rZW4gKyAnfSc7XG59O1xuXG5leHBvcnRzLmRlZmF1bHQgPSB7XG5cbiAgICB0ZXN0OiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgdmFyIG1hdGNoZXMgPSB2YWx1ZS5tYXRjaChGTE9BVF9SRUdFWCk7XG4gICAgICAgIHJldHVybiAoMCwgX3V0aWxzLmlzQXJyYXkpKG1hdGNoZXMpICYmIG1hdGNoZXMubGVuZ3RoID4gMTtcbiAgICB9LFxuXG4gICAgdGVtcGxhdGU6IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICB2YXIgY291bnRlciA9IDA7XG4gICAgICAgIHJldHVybiB2YWx1ZS5yZXBsYWNlKEZMT0FUX1JFR0VYLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gZ2VuZXJhdGVUb2tlbihjb3VudGVyKyspO1xuICAgICAgICB9KTtcbiAgICB9LFxuXG4gICAgc3BsaXQ6IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICB2YXIgc3BsaXRWYWx1ZSA9IHt9O1xuXG4gICAgICAgIHZhbHVlLm1hdGNoKEZMT0FUX1JFR0VYKS5mb3JFYWNoKGZ1bmN0aW9uICh2YWx1ZSwgaSkge1xuICAgICAgICAgICAgcmV0dXJuIHNwbGl0VmFsdWVbaV0gPSB2YWx1ZTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIHNwbGl0VmFsdWU7XG4gICAgfSxcblxuICAgIGNvbWJpbmU6IGZ1bmN0aW9uICh2YWx1ZXMsIHRlbXBsYXRlKSB7XG4gICAgICAgICgwLCBfdXRpbHMuZWFjaCkodmFsdWVzLCBmdW5jdGlvbiAodmFsdWUsIGtleSkge1xuICAgICAgICAgICAgcmV0dXJuIHRlbXBsYXRlID0gdGVtcGxhdGUucmVwbGFjZShnZW5lcmF0ZVRva2VuKGtleSksIHZhbHVlKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiB0ZW1wbGF0ZTtcbiAgICB9XG5cbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5OeVl5OTJZV3gxWlMxMGVYQmxjeTlqYjIxd2JHVjRMbXB6SWwwc0ltNWhiV1Z6SWpwYlhTd2liV0Z3Y0dsdVozTWlPaUk3T3pzN096dEJRVVZCTEVsQlFVMHNZMEZCWXl4clFrRkJaRHRCUVVOT0xFbEJRVTBzWjBKQlFXZENMRlZCUVVNc1MwRkJSRHRYUVVGWExFOUJRVThzUzBGQlVDeEhRVUZsTEVkQlFXWTdRMEZCV0RzN2EwSkJSVkE3TzBGQlJWZ3NWVUZCVFN4VlFVRkRMRXRCUVVRc1JVRkJWenRCUVVOaUxGbEJRVTBzVlVGQlZTeE5RVUZOTEV0QlFVNHNRMEZCV1N4WFFVRmFMRU5CUVZZc1EwRkVUenRCUVVWaUxHVkJRVkVzYjBKQlFWRXNUMEZCVWl4TFFVRnZRaXhSUVVGUkxFMUJRVklzUjBGQmFVSXNRMEZCYWtJc1EwRkdaanRMUVVGWU96dEJRVXRPTEdOQlFWVXNWVUZCUXl4TFFVRkVMRVZCUVZjN1FVRkRha0lzV1VGQlNTeFZRVUZWTEVOQlFWWXNRMEZFWVR0QlFVVnFRaXhsUVVGUExFMUJRVTBzVDBGQlRpeERRVUZqTEZkQlFXUXNSVUZCTWtJN2JVSkJRVTBzWTBGQll5eFRRVUZrTzFOQlFVNHNRMEZCYkVNc1EwRkdhVUk3UzBGQldEczdRVUZMVml4WFFVRlBMRlZCUVVNc1MwRkJSQ3hGUVVGWE8wRkJRMlFzV1VGQlRTeGhRVUZoTEVWQlFXSXNRMEZFVVRzN1FVRkhaQ3hqUVVGTkxFdEJRVTRzUTBGQldTeFhRVUZhTEVWQlFYbENMRTlCUVhwQ0xFTkJRV2xETEZWQlFVTXNTMEZCUkN4RlFVRlJMRU5CUVZJN2JVSkJRV01zVjBGQlZ5eERRVUZZTEVsQlFXZENMRXRCUVdoQ08xTkJRV1FzUTBGQmFrTXNRMEZJWXpzN1FVRkxaQ3hsUVVGUExGVkJRVkFzUTBGTVl6dExRVUZZT3p0QlFWRlFMR0ZCUVZNc1ZVRkJReXhOUVVGRUxFVkJRVk1zVVVGQlZDeEZRVUZ6UWp0QlFVTXpRaXg1UWtGQlN5eE5RVUZNTEVWQlFXRXNWVUZCUXl4TFFVRkVMRVZCUVZFc1IwRkJVanR0UWtGQlowSXNWMEZCVnl4VFFVRlRMRTlCUVZRc1EwRkJhVUlzWTBGQll5eEhRVUZrTEVOQlFXcENMRVZCUVhGRExFdEJRWEpETEVOQlFWZzdVMEZCYUVJc1EwRkJZaXhEUVVReVFqdEJRVVV6UWl4bFFVRlBMRkZCUVZBc1EwRkdNa0k3UzBGQmRFSWlMQ0ptYVd4bElqb2lZMjl0Y0d4bGVDNXFjeUlzSW5OdmRYSmpaVkp2YjNRaU9pSXZWWE5sY25NdlRXRjBkQzlUYVhSbGN5OXdiM0J0YjNScGIyNGlMQ0p6YjNWeVkyVnpRMjl1ZEdWdWRDSTZXeUpwYlhCdmNuUWdleUJsWVdOb0xDQnBjMEZ5Y21GNUlIMGdabkp2YlNBbkxpNHZhVzVqTDNWMGFXeHpKenRjYmx4dVkyOXVjM1FnUmt4UFFWUmZVa1ZIUlZnZ1BTQXZLQzBwUHloY1hHUmJYRnhrWEZ3dVhTb3BMMmM3WEc1amIyNXpkQ0JuWlc1bGNtRjBaVlJ2YTJWdUlEMGdLSFJ2YTJWdUtTQTlQaUFuSkhzbklDc2dkRzlyWlc0Z0t5QW5mU2M3WEc1Y2JtVjRjRzl5ZENCa1pXWmhkV3gwSUh0Y2JseHVJQ0FnSUhSbGMzUTZJQ2gyWVd4MVpTa2dQVDRnZTF4dUlDQWdJQ0FnSUNCamIyNXpkQ0J0WVhSamFHVnpJRDBnZG1Gc2RXVXViV0YwWTJnb1JreFBRVlJmVWtWSFJWZ3BPMXh1SUNBZ0lDQWdJQ0J5WlhSMWNtNGdLR2x6UVhKeVlYa29iV0YwWTJobGN5a2dKaVlnYldGMFkyaGxjeTVzWlc1bmRHZ2dQaUF4S1R0Y2JpQWdJQ0I5TEZ4dVhHNGdJQ0FnZEdWdGNHeGhkR1U2SUNoMllXeDFaU2tnUFQ0Z2UxeHVJQ0FnSUNBZ0lDQnNaWFFnWTI5MWJuUmxjaUE5SURBN1hHNGdJQ0FnSUNBZ0lISmxkSFZ5YmlCMllXeDFaUzV5WlhCc1lXTmxLRVpNVDBGVVgxSkZSMFZZTENBb0tTQTlQaUJuWlc1bGNtRjBaVlJ2YTJWdUtHTnZkVzUwWlhJckt5a3BPMXh1SUNBZ0lIMHNYRzVjYmlBZ0lDQnpjR3hwZERvZ0tIWmhiSFZsS1NBOVBpQjdYRzRnSUNBZ0lDQWdJR052Ym5OMElITndiR2wwVm1Gc2RXVWdQU0I3ZlR0Y2JpQWdJQ0FnSUNBZ1hHNGdJQ0FnSUNBZ0lIWmhiSFZsTG0xaGRHTm9LRVpNVDBGVVgxSkZSMFZZS1M1bWIzSkZZV05vS0NoMllXeDFaU3dnYVNrZ1BUNGdjM0JzYVhSV1lXeDFaVnRwWFNBOUlIWmhiSFZsS1R0Y2JseHVJQ0FnSUNBZ0lDQnlaWFIxY200Z2MzQnNhWFJXWVd4MVpUdGNiaUFnSUNCOUxGeHVYRzRnSUNBZ1kyOXRZbWx1WlRvZ0tIWmhiSFZsY3l3Z2RHVnRjR3hoZEdVcElEMCtJSHRjYmlBZ0lDQWdJQ0FnWldGamFDaDJZV3gxWlhNc0lDaDJZV3gxWlN3Z2EyVjVLU0E5UGlCMFpXMXdiR0YwWlNBOUlIUmxiWEJzWVhSbExuSmxjR3hoWTJVb1oyVnVaWEpoZEdWVWIydGxiaWhyWlhrcExDQjJZV3gxWlNrcE8xeHVJQ0FnSUNBZ0lDQnlaWFIxY200Z2RHVnRjR3hoZEdVN1hHNGdJQ0FnZlZ4dVhHNTlPeUpkZlE9PVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvdmFsdWUtdHlwZXMvY29tcGxleC5qc1xuICoqIG1vZHVsZSBpZCA9IDIzXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfcmdiID0gcmVxdWlyZSgnLi9yZ2InKTtcblxudmFyIF9yZ2IyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmdiKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZXhwb3J0cy5kZWZhdWx0ID0ge1xuICAgIGRlZmF1bHRQcm9wczogX3JnYjIuZGVmYXVsdC5kZWZhdWx0UHJvcHMsXG5cbiAgICB0ZXN0OiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIHZhbHVlICYmIHZhbHVlLmluZGV4T2YoJyMnKSA+IC0xO1xuICAgIH0sXG5cbiAgICBzcGxpdDogZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgIHZhciByID0gdW5kZWZpbmVkLFxuICAgICAgICAgICAgZyA9IHVuZGVmaW5lZCxcbiAgICAgICAgICAgIGIgPSB1bmRlZmluZWQ7XG5cbiAgICAgICAgLy8gSWYgd2UgaGF2ZSA2IGNoYXJhY3RlcnMsIGllICNGRjAwMDBcbiAgICAgICAgaWYgKHZhbHVlLmxlbmd0aCA+IDQpIHtcbiAgICAgICAgICAgIHIgPSB2YWx1ZS5zdWJzdHIoMSwgMik7XG4gICAgICAgICAgICBnID0gdmFsdWUuc3Vic3RyKDMsIDIpO1xuICAgICAgICAgICAgYiA9IHZhbHVlLnN1YnN0cig1LCAyKTtcblxuICAgICAgICAgICAgLy8gT3Igd2UgaGF2ZSAzIGNoYXJhY3RlcnMsIGllICNGMDBcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByID0gdmFsdWUuc3Vic3RyKDEsIDEpO1xuICAgICAgICAgICAgICAgIGcgPSB2YWx1ZS5zdWJzdHIoMiwgMSk7XG4gICAgICAgICAgICAgICAgYiA9IHZhbHVlLnN1YnN0cigzLCAxKTtcbiAgICAgICAgICAgICAgICByICs9IHI7XG4gICAgICAgICAgICAgICAgZyArPSBnO1xuICAgICAgICAgICAgICAgIGIgKz0gYjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgUmVkOiBwYXJzZUludChyLCAxNiksXG4gICAgICAgICAgICBHcmVlbjogcGFyc2VJbnQoZywgMTYpLFxuICAgICAgICAgICAgQmx1ZTogcGFyc2VJbnQoYiwgMTYpLFxuICAgICAgICAgICAgQWxwaGE6IDFcbiAgICAgICAgfTtcbiAgICB9LFxuXG4gICAgY29tYmluZTogZnVuY3Rpb24gKHZhbHVlcykge1xuICAgICAgICByZXR1cm4gX3JnYjIuZGVmYXVsdC5jb21iaW5lKHZhbHVlcyk7XG4gICAgfVxufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbk55WXk5MllXeDFaUzEwZVhCbGN5OW9aWGd1YW5NaVhTd2libUZ0WlhNaU9sdGRMQ0p0WVhCd2FXNW5jeUk2SWpzN096czdPenM3T3p0clFrRkZaVHRCUVVOWUxHdENRVUZqTEdOQlFVa3NXVUZCU2pzN1FVRkZaQ3hWUVVGTkxGVkJRVU1zUzBGQlJEdGxRVUZaTEZOQlFWTXNUVUZCVFN4UFFVRk9MRU5CUVdNc1IwRkJaQ3hKUVVGeFFpeERRVUZETEVOQlFVUTdTMEZCTVVNN08wRkJSVTRzVjBGQlR5eFZRVUZETEV0QlFVUXNSVUZCVnp0QlFVTmtMRmxCUVVrc1lVRkJTanRaUVVGUExHRkJRVkE3V1VGQlZTeGhRVUZXT3pzN1FVRkVZeXhaUVVsV0xFMUJRVTBzVFVGQlRpeEhRVUZsTEVOQlFXWXNSVUZCYTBJN1FVRkRiRUlzWjBKQlFVa3NUVUZCVFN4TlFVRk9MRU5CUVdFc1EwRkJZaXhGUVVGblFpeERRVUZvUWl4RFFVRktMRU5CUkd0Q08wRkJSV3hDTEdkQ1FVRkpMRTFCUVUwc1RVRkJUaXhEUVVGaExFTkJRV0lzUlVGQlowSXNRMEZCYUVJc1EwRkJTaXhEUVVaclFqdEJRVWRzUWl4blFrRkJTU3hOUVVGTkxFMUJRVTRzUTBGQllTeERRVUZpTEVWQlFXZENMRU5CUVdoQ0xFTkJRVW83T3p0QlFVaHJRaXhUUVVGMFFpeE5RVTFQTzBGQlEwZ3NiMEpCUVVrc1RVRkJUU3hOUVVGT0xFTkJRV0VzUTBGQllpeEZRVUZuUWl4RFFVRm9RaXhEUVVGS0xFTkJSRWM3UVVGRlNDeHZRa0ZCU1N4TlFVRk5MRTFCUVU0c1EwRkJZU3hEUVVGaUxFVkJRV2RDTEVOQlFXaENMRU5CUVVvc1EwRkdSenRCUVVkSUxHOUNRVUZKTEUxQlFVMHNUVUZCVGl4RFFVRmhMRU5CUVdJc1JVRkJaMElzUTBGQmFFSXNRMEZCU2l4RFFVaEhPMEZCU1Vnc2NVSkJRVXNzUTBGQlRDeERRVXBITzBGQlMwZ3NjVUpCUVVzc1EwRkJUQ3hEUVV4SE8wRkJUVWdzY1VKQlFVc3NRMEZCVEN4RFFVNUhPMkZCVGxBN08wRkJaVUVzWlVGQlR6dEJRVU5JTEdsQ1FVRkxMRk5CUVZNc1EwRkJWQ3hGUVVGWkxFVkJRVm9zUTBGQlREdEJRVU5CTEcxQ1FVRlBMRk5CUVZNc1EwRkJWQ3hGUVVGWkxFVkJRVm9zUTBGQlVEdEJRVU5CTEd0Q1FVRk5MRk5CUVZNc1EwRkJWQ3hGUVVGWkxFVkJRVm9zUTBGQlRqdEJRVU5CTEcxQ1FVRlBMRU5CUVZBN1UwRktTaXhEUVc1Q1l6dExRVUZZT3p0QlFUSkNVQ3hoUVVGVExGVkJRVU1zVFVGQlJEdGxRVUZaTEdOQlFVa3NUMEZCU2l4RFFVRlpMRTFCUVZvN1MwRkJXaUlzSW1acGJHVWlPaUpvWlhndWFuTWlMQ0p6YjNWeVkyVlNiMjkwSWpvaUwxVnpaWEp6TDAxaGRIUXZVMmwwWlhNdmNHOXdiVzkwYVc5dUlpd2ljMjkxY21ObGMwTnZiblJsYm5RaU9sc2lhVzF3YjNKMElISm5ZaUJtY205dElDY3VMM0puWWljN1hHNWNibVY0Y0c5eWRDQmtaV1poZFd4MElIdGNiaUFnSUNCa1pXWmhkV3gwVUhKdmNITTZJSEpuWWk1a1pXWmhkV3gwVUhKdmNITXNYRzVjYmlBZ0lDQjBaWE4wT2lBb2RtRnNkV1VwSUQwK0lDaDJZV3gxWlNBbUppQjJZV3gxWlM1cGJtUmxlRTltS0Njakp5a2dQaUF0TVNrc1hHNWNiaUFnSUNCemNHeHBkRG9nS0haaGJIVmxLU0E5UGlCN1hHNGdJQ0FnSUNBZ0lHeGxkQ0J5TENCbkxDQmlPMXh1WEc0Z0lDQWdJQ0FnSUM4dklFbG1JSGRsSUdoaGRtVWdOaUJqYUdGeVlXTjBaWEp6TENCcFpTQWpSa1l3TURBd1hHNGdJQ0FnSUNBZ0lHbG1JQ2gyWVd4MVpTNXNaVzVuZEdnZ1BpQTBLU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQnlJRDBnZG1Gc2RXVXVjM1ZpYzNSeUtERXNJRElwTzF4dUlDQWdJQ0FnSUNBZ0lDQWdaeUE5SUhaaGJIVmxMbk4xWW5OMGNpZ3pMQ0F5S1R0Y2JpQWdJQ0FnSUNBZ0lDQWdJR0lnUFNCMllXeDFaUzV6ZFdKemRISW9OU3dnTWlrN1hHNWNiaUFnSUNBZ0lDQWdMeThnVDNJZ2QyVWdhR0YyWlNBeklHTm9ZWEpoWTNSbGNuTXNJR2xsSUNOR01EQmNiaUFnSUNBZ0lDQWdmU0JsYkhObElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUhJZ1BTQjJZV3gxWlM1emRXSnpkSElvTVN3Z01TazdYRzRnSUNBZ0lDQWdJQ0FnSUNCbklEMGdkbUZzZFdVdWMzVmljM1J5S0RJc0lERXBPMXh1SUNBZ0lDQWdJQ0FnSUNBZ1lpQTlJSFpoYkhWbExuTjFZbk4wY2lnekxDQXhLVHRjYmlBZ0lDQWdJQ0FnSUNBZ0lISWdLejBnY2p0Y2JpQWdJQ0FnSUNBZ0lDQWdJR2NnS3owZ1p6dGNiaUFnSUNBZ0lDQWdJQ0FnSUdJZ0t6MGdZanRjYmlBZ0lDQWdJQ0FnZlZ4dVhHNGdJQ0FnSUNBZ0lISmxkSFZ5YmlCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0JTWldRNklIQmhjbk5sU1c1MEtISXNJREUyS1N4Y2JpQWdJQ0FnSUNBZ0lDQWdJRWR5WldWdU9pQndZWEp6WlVsdWRDaG5MQ0F4Tmlrc1hHNGdJQ0FnSUNBZ0lDQWdJQ0JDYkhWbE9pQndZWEp6WlVsdWRDaGlMQ0F4Tmlrc1hHNGdJQ0FnSUNBZ0lDQWdJQ0JCYkhCb1lUb2dNVnh1SUNBZ0lDQWdJQ0I5TzF4dUlDQWdJSDBzWEc1Y2JpQWdJQ0JqYjIxaWFXNWxPaUFvZG1Gc2RXVnpLU0E5UGlCeVoySXVZMjl0WW1sdVpTaDJZV3gxWlhNcFhHNTlPeUpkZlE9PVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvdmFsdWUtdHlwZXMvaGV4LmpzXG4gKiogbW9kdWxlIGlkID0gMjRcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF9kZWZhdWx0UHJvcHMgPSByZXF1aXJlKCcuL3NldHRpbmdzL2RlZmF1bHQtcHJvcHMnKTtcblxudmFyIF9kaWN0aW9uYXJ5ID0gcmVxdWlyZSgnLi9zZXR0aW5ncy9kaWN0aW9uYXJ5Jyk7XG5cbnZhciBfdXRpbHMgPSByZXF1aXJlKCcuLi9pbmMvdXRpbHMnKTtcblxuZXhwb3J0cy5kZWZhdWx0ID0ge1xuICAgIGRlZmF1bHRQcm9wczoge1xuICAgICAgICBIdWU6IHtcbiAgICAgICAgICAgIG1pbjogMCxcbiAgICAgICAgICAgIG1heDogMzYwXG4gICAgICAgIH0sXG4gICAgICAgIFNhdHVyYXRpb246IF9kZWZhdWx0UHJvcHMucGVyY2VudCxcbiAgICAgICAgTGlnaHRuZXNzOiBfZGVmYXVsdFByb3BzLnBlcmNlbnQsXG4gICAgICAgIEFscGhhOiBfZGVmYXVsdFByb3BzLm9wYWNpdHlcbiAgICB9LFxuXG4gICAgdGVzdDogZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgIHJldHVybiB2YWx1ZSAmJiB2YWx1ZS5pbmRleE9mKCdoc2wnKSA+IC0xO1xuICAgIH0sXG5cbiAgICBzcGxpdDogZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgIHJldHVybiAoMCwgX3V0aWxzLmdldENvbG9yVmFsdWVzKSh2YWx1ZSwgX2RpY3Rpb25hcnkuaHNsKTtcbiAgICB9LFxuXG4gICAgY29tYmluZTogZnVuY3Rpb24gKHZhbHVlcykge1xuICAgICAgICByZXR1cm4gKDAsIF91dGlscy5jcmVhdGVGdW5jdGlvblN0cmluZykoKDAsIF91dGlscy5jcmVhdGVEZWxpbWl0ZWQpKHZhbHVlcywgX2RpY3Rpb25hcnkuaHNsLCAnLCAnLCAyKSwgJ2hzbGEnKTtcbiAgICB9XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluTnlZeTkyWVd4MVpTMTBlWEJsY3k5b2Myd3Vhbk1pWFN3aWJtRnRaWE1pT2x0ZExDSnRZWEJ3YVc1bmN5STZJanM3T3pzN096czdPenRyUWtGSlpUdEJRVU5ZTEd0Q1FVRmpPMEZCUTFZc1lVRkJTenRCUVVORUxHbENRVUZMTEVOQlFVdzdRVUZEUVN4cFFrRkJTeXhIUVVGTU8xTkJSa283UVVGSlFTeDVRMEZNVlR0QlFVMVdMSGREUVU1Vk8wRkJUMVlzYjBOQlVGVTdTMEZCWkRzN1FVRlZRU3hWUVVGTkxGVkJRVU1zUzBGQlJEdGxRVUZaTEZOQlFWTXNUVUZCVFN4UFFVRk9MRU5CUVdNc1MwRkJaQ3hKUVVGMVFpeERRVUZETEVOQlFVUTdTMEZCTlVNN08wRkJSVTRzVjBGQlR5eFZRVUZETEV0QlFVUTdaVUZCVnl3eVFrRkJaU3hMUVVGbU8wdEJRVmc3TzBGQlJWQXNZVUZCVXl4VlFVRkRMRTFCUVVRN1pVRkJXU3hwUTBGQmNVSXNORUpCUVdkQ0xFMUJRV2hDTEcxQ1FVRnJReXhKUVVGc1F5eEZRVUYzUXl4RFFVRjRReXhEUVVGeVFpeEZRVUZwUlN4TlFVRnFSVHRMUVVGYUlpd2labWxzWlNJNkltaHpiQzVxY3lJc0luTnZkWEpqWlZKdmIzUWlPaUl2VlhObGNuTXZUV0YwZEM5VGFYUmxjeTl3YjNCdGIzUnBiMjRpTENKemIzVnlZMlZ6UTI5dWRHVnVkQ0k2V3lKcGJYQnZjblFnZXlCd1pYSmpaVzUwTENCdmNHRmphWFI1SUgwZ1puSnZiU0FuTGk5elpYUjBhVzVuY3k5a1pXWmhkV3gwTFhCeWIzQnpKenRjYm1sdGNHOXlkQ0I3SUdoemJDQmhjeUJvYzJ4VVpYSnRjeUI5SUdaeWIyMGdKeTR2YzJWMGRHbHVaM012WkdsamRHbHZibUZ5ZVNjN1hHNXBiWEJ2Y25RZ2V5QmpjbVZoZEdWRVpXeHBiV2wwWldRc0lHTnlaV0YwWlVaMWJtTjBhVzl1VTNSeWFXNW5MQ0JuWlhSRGIyeHZjbFpoYkhWbGN5QjlJR1p5YjIwZ0p5NHVMMmx1WXk5MWRHbHNjeWM3WEc1Y2JtVjRjRzl5ZENCa1pXWmhkV3gwSUh0Y2JpQWdJQ0JrWldaaGRXeDBVSEp2Y0hNNklIdGNiaUFnSUNBZ0lDQWdTSFZsT2lCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0J0YVc0NklEQXNYRzRnSUNBZ0lDQWdJQ0FnSUNCdFlYZzZJRE0yTUZ4dUlDQWdJQ0FnSUNCOUxGeHVJQ0FnSUNBZ0lDQlRZWFIxY21GMGFXOXVPaUJ3WlhKalpXNTBMRnh1SUNBZ0lDQWdJQ0JNYVdkb2RHNWxjM002SUhCbGNtTmxiblFzWEc0Z0lDQWdJQ0FnSUVGc2NHaGhPaUJ2Y0dGamFYUjVYRzRnSUNBZ2ZTeGNibHh1SUNBZ0lIUmxjM1E2SUNoMllXeDFaU2tnUFQ0Z0tIWmhiSFZsSUNZbUlIWmhiSFZsTG1sdVpHVjRUMllvSjJoemJDY3BJRDRnTFRFcExGeHVYRzRnSUNBZ2MzQnNhWFE2SUNoMllXeDFaU2tnUFQ0Z1oyVjBRMjlzYjNKV1lXeDFaWE1vZG1Gc2RXVXNJR2h6YkZSbGNtMXpLU3hjYmx4dUlDQWdJR052YldKcGJtVTZJQ2gyWVd4MVpYTXBJRDArSUdOeVpXRjBaVVoxYm1OMGFXOXVVM1J5YVc1bktHTnlaV0YwWlVSbGJHbHRhWFJsWkNoMllXeDFaWE1zSUdoemJGUmxjbTF6TENBbkxDQW5MQ0F5S1N3Z0oyaHpiR0VuS1Z4dWZUdGNiaUpkZlE9PVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvdmFsdWUtdHlwZXMvaHNsLmpzXG4gKiogbW9kdWxlIGlkID0gMjVcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF9kaWN0aW9uYXJ5ID0gcmVxdWlyZSgnLi9zZXR0aW5ncy9kaWN0aW9uYXJ5Jyk7XG5cbnZhciBfdXRpbHMgPSByZXF1aXJlKCcuLi9pbmMvdXRpbHMnKTtcblxudmFyIF9weCA9IHJlcXVpcmUoJy4vcHgnKTtcblxudmFyIF9weDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9weCk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmV4cG9ydHMuZGVmYXVsdCA9IHtcbiAgICBkZWZhdWx0UHJvcHM6IF9weDIuZGVmYXVsdC5kZWZhdWx0UHJvcHMsXG5cbiAgICAvKlxuICAgICAgICBTcGxpdCBkaW1lbnNpb25zIGluIGZvcm1hdCBcIlRvcCBSaWdodCBCb3R0b20gTGVmdFwiXG4gICAgICAgIFxuICAgICAgICBAcGFyYW0gW3N0cmluZ106IFBvc2l0aW9uIHZhbHVlc1xuICAgICAgICAgICAgXCIyMHB4IDAgMzBweCA0MHB4XCIgLT4gezIwcHgsIDAsIDMwcHgsIDQwcHh9XG4gICAgICAgICAgICBcIjIwcHggMCAzMHB4XCIgLT4gezIwcHgsIDAsIDMwcHgsIDB9XG4gICAgICAgICAgICBcIjIwcHggMFwiIC0+IHsyMHB4LCAwLCAyMHB4LCAwfVxuICAgICAgICAgICAgXCIyMHB4XCIgLT4gezIwcHgsIDIwcHgsIDIwcHgsIDIwcHh9XG4gICAgICAgIFxuICAgICAgICBAcmV0dXJuIFtvYmplY3RdOiBPYmplY3Qgd2l0aCBUL1IvQi9MIG1ldHJpY3NcbiAgICAqL1xuICAgIHNwbGl0OiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgdmFyIHNwbGl0VmFsdWUgPSB7fTtcbiAgICAgICAgdmFyIHNwbGl0UG9zaXRpb25zID0gKDAsIF91dGlscy5zcGxpdFNwYWNlRGVsaW1pdGVkKSh2YWx1ZSk7XG4gICAgICAgIHZhciBudW1Qb3NpdGlvbnMgPSBzcGxpdFBvc2l0aW9ucy5sZW5ndGg7XG4gICAgICAgIHZhciBqdW1wQmFjayA9IG51bVBvc2l0aW9ucyAhPT0gMSA/IDIgOiAxO1xuICAgICAgICB2YXIgaiA9IDA7XG5cbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCA0OyBpKyspIHtcbiAgICAgICAgICAgIHNwbGl0VmFsdWVbX2RpY3Rpb25hcnkucG9zaXRpb25zW2ldXSA9IHNwbGl0UG9zaXRpb25zW2pdO1xuXG4gICAgICAgICAgICAvLyBKdW1wIGJhY2sgKHRvIHN0YXJ0KSBjb3VudGVyIGlmIHdlJ3ZlIHJlYWNoZWQgdGhlIGVuZCBvZiBvdXIgdmFsdWVzXG4gICAgICAgICAgICBqKys7XG4gICAgICAgICAgICBqID0gaiA9PT0gbnVtUG9zaXRpb25zID8gaiAtIGp1bXBCYWNrIDogajtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBzcGxpdFZhbHVlO1xuICAgIH0sXG5cbiAgICBjb21iaW5lOiBmdW5jdGlvbiAodmFsdWVzKSB7XG4gICAgICAgIHJldHVybiAoMCwgX3V0aWxzLmNyZWF0ZURlbGltaXRlZCkodmFsdWVzLCBfZGljdGlvbmFyeS5wb3NpdGlvbnMsICcgJyk7XG4gICAgfVxufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbk55WXk5MllXeDFaUzEwZVhCbGN5OXdiM05wZEdsdmJuTXVhbk1pWFN3aWJtRnRaWE1pT2x0ZExDSnRZWEJ3YVc1bmN5STZJanM3T3pzN096czdPenM3T3pzN2EwSkJTV1U3UVVGRFdDeHJRa0ZCWXl4aFFVRlpMRmxCUVZvN096czdPenM3T3pzN096czdRVUZoWkN4WFFVRlBMRlZCUVVNc1MwRkJSQ3hGUVVGWE8wRkJRMlFzV1VGQlRTeGhRVUZoTEVWQlFXSXNRMEZFVVR0QlFVVmtMRmxCUVUwc2FVSkJRV2xDTEdkRFFVRnZRaXhMUVVGd1FpeERRVUZxUWl4RFFVWlJPMEZCUjJRc1dVRkJUU3hsUVVGbExHVkJRV1VzVFVGQlppeERRVWhRTzBGQlNXUXNXVUZCVFN4WFFVRlhMRmxCUVVNc1MwRkJhVUlzUTBGQmFrSXNSMEZCYzBJc1EwRkJka0lzUjBGQk1rSXNRMEZCTTBJc1EwRktTRHRCUVV0a0xGbEJRVWtzU1VGQlNTeERRVUZLTEVOQlRGVTdPMEZCVDJRc1lVRkJTeXhKUVVGSkxFbEJRVWtzUTBGQlNpeEZRVUZQTEVsQlFVa3NRMEZCU2l4RlFVRlBMRWRCUVhaQ0xFVkJRVFJDTzBGQlEzaENMSFZDUVVGWExITkNRVUZWTEVOQlFWWXNRMEZCV0N4SlFVRXlRaXhsUVVGbExFTkJRV1lzUTBGQk0wSTdPenRCUVVSM1FpeGhRVWw0UWl4SFFVcDNRanRCUVV0NFFpeG5Ra0ZCU1N4RFFVRkRMRXRCUVUwc1dVRkJUaXhIUVVGelFpeEpRVUZKTEZGQlFVb3NSMEZCWlN4RFFVRjBReXhEUVV4dlFqdFRRVUUxUWpzN1FVRlJRU3hsUVVGUExGVkJRVkFzUTBGbVl6dExRVUZZT3p0QlFXdENVQ3hoUVVGVExGVkJRVU1zVFVGQlJEdGxRVUZaTERSQ1FVRm5RaXhOUVVGb1FpeDVRa0ZCYlVNc1IwRkJia003UzBGQldpSXNJbVpwYkdVaU9pSndiM05wZEdsdmJuTXVhbk1pTENKemIzVnlZMlZTYjI5MElqb2lMMVZ6WlhKekwwMWhkSFF2VTJsMFpYTXZjRzl3Ylc5MGFXOXVJaXdpYzI5MWNtTmxjME52Ym5SbGJuUWlPbHNpYVcxd2IzSjBJSHNnY0c5emFYUnBiMjV6SUgwZ1puSnZiU0FuTGk5elpYUjBhVzVuY3k5a2FXTjBhVzl1WVhKNUp6dGNibWx0Y0c5eWRDQjdJR055WldGMFpVUmxiR2x0YVhSbFpDd2djM0JzYVhSVGNHRmpaVVJsYkdsdGFYUmxaQ0I5SUdaeWIyMGdKeTR1TDJsdVl5OTFkR2xzY3ljN1hHNXBiWEJ2Y25RZ2NIaFdZV3gxWlZSNWNHVWdabkp2YlNBbkxpOXdlQ2M3WEc1Y2JtVjRjRzl5ZENCa1pXWmhkV3gwSUh0Y2JpQWdJQ0JrWldaaGRXeDBVSEp2Y0hNNklIQjRWbUZzZFdWVWVYQmxMbVJsWm1GMWJIUlFjbTl3Y3l4Y2JseHVJQ0FnSUM4cVhHNGdJQ0FnSUNBZ0lGTndiR2wwSUdScGJXVnVjMmx2Ym5NZ2FXNGdabTl5YldGMElGd2lWRzl3SUZKcFoyaDBJRUp2ZEhSdmJTQk1aV1owWENKY2JpQWdJQ0FnSUNBZ1hHNGdJQ0FnSUNBZ0lFQndZWEpoYlNCYmMzUnlhVzVuWFRvZ1VHOXphWFJwYjI0Z2RtRnNkV1Z6WEc0Z0lDQWdJQ0FnSUNBZ0lDQmNJakl3Y0hnZ01DQXpNSEI0SURRd2NIaGNJaUF0UGlCN01qQndlQ3dnTUN3Z016QndlQ3dnTkRCd2VIMWNiaUFnSUNBZ0lDQWdJQ0FnSUZ3aU1qQndlQ0F3SURNd2NIaGNJaUF0UGlCN01qQndlQ3dnTUN3Z016QndlQ3dnTUgxY2JpQWdJQ0FnSUNBZ0lDQWdJRndpTWpCd2VDQXdYQ0lnTFQ0Z2V6SXdjSGdzSURBc0lESXdjSGdzSURCOVhHNGdJQ0FnSUNBZ0lDQWdJQ0JjSWpJd2NIaGNJaUF0UGlCN01qQndlQ3dnTWpCd2VDd2dNakJ3ZUN3Z01qQndlSDFjYmlBZ0lDQWdJQ0FnWEc0Z0lDQWdJQ0FnSUVCeVpYUjFjbTRnVzI5aWFtVmpkRjA2SUU5aWFtVmpkQ0IzYVhSb0lGUXZVaTlDTDB3Z2JXVjBjbWxqYzF4dUlDQWdJQ292WEc0Z0lDQWdjM0JzYVhRNklDaDJZV3gxWlNrZ1BUNGdlMXh1SUNBZ0lDQWdJQ0JqYjI1emRDQnpjR3hwZEZaaGJIVmxJRDBnZTMwN1hHNGdJQ0FnSUNBZ0lHTnZibk4wSUhOd2JHbDBVRzl6YVhScGIyNXpJRDBnYzNCc2FYUlRjR0ZqWlVSbGJHbHRhWFJsWkNoMllXeDFaU2s3WEc0Z0lDQWdJQ0FnSUdOdmJuTjBJRzUxYlZCdmMybDBhVzl1Y3lBOUlITndiR2wwVUc5emFYUnBiMjV6TG14bGJtZDBhRHRjYmlBZ0lDQWdJQ0FnWTI5dWMzUWdhblZ0Y0VKaFkyc2dQU0FvYm5WdFVHOXphWFJwYjI1eklDRTlQU0F4S1NBL0lESWdPaUF4TzF4dUlDQWdJQ0FnSUNCc1pYUWdhaUE5SURBN1hHNWNiaUFnSUNBZ0lDQWdabTl5SUNoc1pYUWdhU0E5SURBN0lHa2dQQ0EwT3lCcEt5c3BJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lITndiR2wwVm1Gc2RXVmJjRzl6YVhScGIyNXpXMmxkWFNBOUlITndiR2wwVUc5emFYUnBiMjV6VzJwZE8xeHVYRzRnSUNBZ0lDQWdJQ0FnSUNBdkx5QktkVzF3SUdKaFkyc2dLSFJ2SUhOMFlYSjBLU0JqYjNWdWRHVnlJR2xtSUhkbEozWmxJSEpsWVdOb1pXUWdkR2hsSUdWdVpDQnZaaUJ2ZFhJZ2RtRnNkV1Z6WEc0Z0lDQWdJQ0FnSUNBZ0lDQnFLeXM3WEc0Z0lDQWdJQ0FnSUNBZ0lDQnFJRDBnS0dvZ1BUMDlJRzUxYlZCdmMybDBhVzl1Y3lrZ1B5QnFJQzBnYW5WdGNFSmhZMnNnT2lCcU8xeHVJQ0FnSUNBZ0lDQjlYRzVjYmlBZ0lDQWdJQ0FnY21WMGRYSnVJSE53YkdsMFZtRnNkV1U3WEc0Z0lDQWdmU3hjYmx4dUlDQWdJR052YldKcGJtVTZJQ2gyWVd4MVpYTXBJRDArSUdOeVpXRjBaVVJsYkdsdGFYUmxaQ2gyWVd4MVpYTXNJSEJ2YzJsMGFXOXVjeXdnSnlBbktWeHVmVHNpWFgwPVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvdmFsdWUtdHlwZXMvcG9zaXRpb25zLmpzXG4gKiogbW9kdWxlIGlkID0gMjZcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHMuZGVmYXVsdCA9IHtcbiAgICBkZWZhdWx0UHJvcHM6IHtcbiAgICAgICAgdW5pdDogJ3B4J1xuICAgIH1cbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5OeVl5OTJZV3gxWlMxMGVYQmxjeTl3ZUM1cWN5SmRMQ0p1WVcxbGN5STZXMTBzSW0xaGNIQnBibWR6SWpvaU96czdhMEpCUVdVN1FVRkRXQ3hyUWtGQll6dEJRVU5XTEdOQlFVMHNTVUZCVGp0TFFVUktJaXdpWm1sc1pTSTZJbkI0TG1weklpd2ljMjkxY21ObFVtOXZkQ0k2SWk5VmMyVnljeTlOWVhSMEwxTnBkR1Z6TDNCdmNHMXZkR2x2YmlJc0luTnZkWEpqWlhORGIyNTBaVzUwSWpwYkltVjRjRzl5ZENCa1pXWmhkV3gwSUh0Y2JpQWdJQ0JrWldaaGRXeDBVSEp2Y0hNNklIdGNiaUFnSUNBZ0lDQWdkVzVwZERvZ0ozQjRKMXh1SUNBZ0lIMWNibjA3SWwxOVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvdmFsdWUtdHlwZXMvcHguanNcbiAqKiBtb2R1bGUgaWQgPSAyN1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX3V0aWxzID0gcmVxdWlyZSgnLi4vaW5jL3V0aWxzJyk7XG5cbnZhciBfZGljdGlvbmFyeSA9IHJlcXVpcmUoJy4vc2V0dGluZ3MvZGljdGlvbmFyeScpO1xuXG52YXIgX2RlZmF1bHRQcm9wcyA9IHJlcXVpcmUoJy4vc2V0dGluZ3MvZGVmYXVsdC1wcm9wcycpO1xuXG5leHBvcnRzLmRlZmF1bHQgPSB7XG4gICAgZGVmYXVsdFByb3BzOiB7XG4gICAgICAgIFJlZDogX2RlZmF1bHRQcm9wcy5yZ2IsXG4gICAgICAgIEdyZWVuOiBfZGVmYXVsdFByb3BzLnJnYixcbiAgICAgICAgQmx1ZTogX2RlZmF1bHRQcm9wcy5yZ2IsXG4gICAgICAgIEFscGhhOiBfZGVmYXVsdFByb3BzLm9wYWNpdHlcbiAgICB9LFxuXG4gICAgdGVzdDogZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgIHJldHVybiB2YWx1ZSAmJiB2YWx1ZS5pbmRleE9mKCdyZ2InKSA+IC0xO1xuICAgIH0sXG5cbiAgICBzcGxpdDogZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgIHJldHVybiAoMCwgX3V0aWxzLmdldENvbG9yVmFsdWVzKSh2YWx1ZSwgX2RpY3Rpb25hcnkucmdiKTtcbiAgICB9LFxuXG4gICAgY29tYmluZTogZnVuY3Rpb24gKHZhbHVlcykge1xuICAgICAgICByZXR1cm4gKDAsIF91dGlscy5jcmVhdGVGdW5jdGlvblN0cmluZykoKDAsIF91dGlscy5jcmVhdGVEZWxpbWl0ZWQpKHZhbHVlcywgX2RpY3Rpb25hcnkucmdiLCAnLCAnLCAyKSwgJ3JnYmEnKTtcbiAgICB9XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluTnlZeTkyWVd4MVpTMTBlWEJsY3k5eVoySXVhbk1pWFN3aWJtRnRaWE1pT2x0ZExDSnRZWEJ3YVc1bmN5STZJanM3T3pzN096czdPenRyUWtGSlpUdEJRVU5ZTEd0Q1FVRmpPMEZCUTFZc09FSkJSRlU3UVVGRlZpeG5RMEZHVlR0QlFVZFdMQ3RDUVVoVk8wRkJTVllzYjBOQlNsVTdTMEZCWkRzN1FVRlBRU3hWUVVGTkxGVkJRVU1zUzBGQlJEdGxRVUZaTEZOQlFWTXNUVUZCVFN4UFFVRk9MRU5CUVdNc1MwRkJaQ3hKUVVGMVFpeERRVUZETEVOQlFVUTdTMEZCTlVNN08wRkJSVTRzVjBGQlR5eFZRVUZETEV0QlFVUTdaVUZCVnl3eVFrRkJaU3hMUVVGbU8wdEJRVmc3TzBGQlJWQXNZVUZCVXl4VlFVRkRMRTFCUVVRN1pVRkJXU3hwUTBGQmNVSXNORUpCUVdkQ0xFMUJRV2hDTEcxQ1FVRnJReXhKUVVGc1F5eEZRVUYzUXl4RFFVRjRReXhEUVVGeVFpeEZRVUZwUlN4TlFVRnFSVHRMUVVGYUlpd2labWxzWlNJNkluSm5ZaTVxY3lJc0luTnZkWEpqWlZKdmIzUWlPaUl2VlhObGNuTXZUV0YwZEM5VGFYUmxjeTl3YjNCdGIzUnBiMjRpTENKemIzVnlZMlZ6UTI5dWRHVnVkQ0k2V3lKcGJYQnZjblFnZXlCamNtVmhkR1ZFWld4cGJXbDBaV1FzSUdOeVpXRjBaVVoxYm1OMGFXOXVVM1J5YVc1bkxDQm5aWFJEYjJ4dmNsWmhiSFZsY3lCOUlHWnliMjBnSnk0dUwybHVZeTkxZEdsc2N5YzdYRzVwYlhCdmNuUWdleUJ5WjJJZ1lYTWdjbWRpVkdWeWJYTWdmU0JtY205dElDY3VMM05sZEhScGJtZHpMMlJwWTNScGIyNWhjbmtuTzF4dWFXMXdiM0owSUhzZ2NtZGlJR0Z6SUdSbFptRjFiSFJTUjBJc0lHOXdZV05wZEhrZ1lYTWdaR1ZtWVhWc2RFOXdZV05wZEhrZ2ZTQm1jbTl0SUNjdUwzTmxkSFJwYm1kekwyUmxabUYxYkhRdGNISnZjSE1uTzF4dVhHNWxlSEJ2Y25RZ1pHVm1ZWFZzZENCN1hHNGdJQ0FnWkdWbVlYVnNkRkJ5YjNCek9pQjdYRzRnSUNBZ0lDQWdJRkpsWkRvZ1pHVm1ZWFZzZEZKSFFpeGNiaUFnSUNBZ0lDQWdSM0psWlc0NklHUmxabUYxYkhSU1IwSXNYRzRnSUNBZ0lDQWdJRUpzZFdVNklHUmxabUYxYkhSU1IwSXNYRzRnSUNBZ0lDQWdJRUZzY0doaE9pQmtaV1poZFd4MFQzQmhZMmwwZVZ4dUlDQWdJSDBzWEc1Y2JpQWdJQ0IwWlhOME9pQW9kbUZzZFdVcElEMCtJQ2gyWVd4MVpTQW1KaUIyWVd4MVpTNXBibVJsZUU5bUtDZHlaMkluS1NBK0lDMHhLU3hjYmx4dUlDQWdJSE53YkdsME9pQW9kbUZzZFdVcElEMCtJR2RsZEVOdmJHOXlWbUZzZFdWektIWmhiSFZsTENCeVoySlVaWEp0Y3lrc1hHNWNiaUFnSUNCamIyMWlhVzVsT2lBb2RtRnNkV1Z6S1NBOVBpQmpjbVZoZEdWR2RXNWpkR2x2YmxOMGNtbHVaeWhqY21WaGRHVkVaV3hwYldsMFpXUW9kbUZzZFdWekxDQnlaMkpVWlhKdGN5d2dKeXdnSnl3Z01pa3NJQ2R5WjJKaEp5bGNibjA3SWwxOVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvdmFsdWUtdHlwZXMvcmdiLmpzXG4gKiogbW9kdWxlIGlkID0gMjhcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0cy5kZWZhdWx0ID0ge1xuICAgIGRlZmF1bHRQcm9wczoge1xuICAgICAgICBjdXJyZW50OiAxXG4gICAgfVxufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbk55WXk5MllXeDFaUzEwZVhCbGN5OXpZMkZzWlM1cWN5SmRMQ0p1WVcxbGN5STZXMTBzSW0xaGNIQnBibWR6SWpvaU96czdhMEpCUVdVN1FVRkRXQ3hyUWtGQll6dEJRVU5XTEdsQ1FVRlRMRU5CUVZRN1MwRkVTaUlzSW1acGJHVWlPaUp6WTJGc1pTNXFjeUlzSW5OdmRYSmpaVkp2YjNRaU9pSXZWWE5sY25NdlRXRjBkQzlUYVhSbGN5OXdiM0J0YjNScGIyNGlMQ0p6YjNWeVkyVnpRMjl1ZEdWdWRDSTZXeUpsZUhCdmNuUWdaR1ZtWVhWc2RDQjdYRzRnSUNBZ1pHVm1ZWFZzZEZCeWIzQnpPaUI3WEc0Z0lDQWdJQ0FnSUdOMWNuSmxiblE2SURGY2JpQWdJQ0I5WEc1OU95SmRmUT09XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy92YWx1ZS10eXBlcy9zY2FsZS5qc1xuICoqIG1vZHVsZSBpZCA9IDI5XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbnZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfY29sb3IgPSByZXF1aXJlKCcuL2NvbG9yJyk7XG5cbnZhciBfY29sb3IyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY29sb3IpO1xuXG52YXIgX3B4ID0gcmVxdWlyZSgnLi9weCcpO1xuXG52YXIgX2RpY3Rpb25hcnkgPSByZXF1aXJlKCcuL3NldHRpbmdzL2RpY3Rpb25hcnknKTtcblxudmFyIF91dGlscyA9IHJlcXVpcmUoJy4uL2luYy91dGlscycpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG52YXIgc2hhZG93V2l0aG91dENvbG9yVGVybXMgPSBfZGljdGlvbmFyeS5zaGFkb3cuc2xpY2UoMCwgNCk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IHtcbiAgICBkZWZhdWx0UHJvcHM6IF9leHRlbmRzKHt9LCBfY29sb3IyLmRlZmF1bHQuZGVmYXVsdFByb3BzLCB7XG4gICAgICAgIFg6IF9weC5kZWZhdWx0UHJvcHMsXG4gICAgICAgIFk6IF9weC5kZWZhdWx0UHJvcHMsXG4gICAgICAgIFJhZGl1czogX3B4LmRlZmF1bHRQcm9wcyxcbiAgICAgICAgU3ByZWFkOiBfcHguZGVmYXVsdFByb3BzXG4gICAgfSksXG5cbiAgICBzcGxpdDogZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgIHZhciBiaXRzID0gKDAsIF91dGlscy5zcGxpdFNwYWNlRGVsaW1pdGVkKSh2YWx1ZSk7XG4gICAgICAgIHZhciBoYXNSZWFjaGVkQ29sb3IgPSBmYWxzZTtcbiAgICAgICAgdmFyIGNvbG9yUHJvcCA9ICcnO1xuICAgICAgICB2YXIgc3BsaXRWYWx1ZSA9IHt9O1xuXG4gICAgICAgIGJpdHMuZm9yRWFjaChmdW5jdGlvbiAoYml0LCBpKSB7XG4gICAgICAgICAgICAvLyBJZiB3ZSd2ZSByZWFjaGVkIHRoZSBjb2xvciBwcm9wcywgYXBwZW5kIHRvIGNvbG9yIHN0cmluZ1xuICAgICAgICAgICAgaWYgKGhhc1JlYWNoZWRDb2xvciB8fCBfY29sb3IyLmRlZmF1bHQudGVzdChiaXQpKSB7XG4gICAgICAgICAgICAgICAgaGFzUmVhY2hlZENvbG9yID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBjb2xvclByb3AgKz0gYml0O1xuXG4gICAgICAgICAgICAgICAgLy8gRWxzZSBwcm9jZXNzIHNoYWRvdyB2YWx1ZVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgc3BsaXRWYWx1ZVtfZGljdGlvbmFyeS5zaGFkb3dbaV1dID0gYml0O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgdmFyIHNwbGl0Q29sb3JQcm9wcyA9IF9jb2xvcjIuZGVmYXVsdC5zcGxpdChjb2xvclByb3ApO1xuXG4gICAgICAgIHJldHVybiBfZXh0ZW5kcyh7fSwgc3BsaXRWYWx1ZSwgeyBzcGxpdENvbG9yUHJvcHM6IHNwbGl0Q29sb3JQcm9wcyB9KTtcbiAgICB9LFxuXG4gICAgY29tYmluZTogZnVuY3Rpb24gKHZhbHVlcykge1xuICAgICAgICByZXR1cm4gKDAsIF91dGlscy5jcmVhdGVEZWxpbWl0ZWQpKHZhbHVlcywgc2hhZG93V2l0aG91dENvbG9yVGVybXMsICcgJykgKyBfY29sb3IyLmRlZmF1bHQuY29tYmluZSh2YWx1ZXMpO1xuICAgIH1cbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5OeVl5OTJZV3gxWlMxMGVYQmxjeTl6YUdGa2IzY3Vhbk1pWFN3aWJtRnRaWE1pT2x0ZExDSnRZWEJ3YVc1bmN5STZJanM3T3pzN096czdPenM3T3pzN096czdPMEZCUzBFc1NVRkJUU3d3UWtGQk1FSXNiVUpCUVZrc1MwRkJXaXhEUVVGclFpeERRVUZzUWl4RlFVRnhRaXhEUVVGeVFpeERRVUV4UWpzN2EwSkJSVk03UVVGRFdDd3JRa0ZEVHl4blFrRkJUU3haUVVGT08wRkJRMGc3UVVGRFFUdEJRVU5CTzBGQlEwRTdUVUZNU2pzN1FVRlJRU3hYUVVGUExGVkJRVU1zUzBGQlJDeEZRVUZYTzBGQlEyUXNXVUZCVFN4UFFVRlBMR2REUVVGdlFpeExRVUZ3UWl4RFFVRlFMRU5CUkZFN1FVRkZaQ3haUVVGSkxHdENRVUZyUWl4TFFVRnNRaXhEUVVaVk8wRkJSMlFzV1VGQlNTeFpRVUZaTEVWQlFWb3NRMEZJVlR0QlFVbGtMRmxCUVVrc1lVRkJZU3hGUVVGaUxFTkJTbFU3TzBGQlRXUXNZVUZCU3l4UFFVRk1MRU5CUVdFc1ZVRkJReXhIUVVGRUxFVkJRVTBzUTBGQlRpeEZRVUZaT3p0QlFVVnlRaXhuUWtGQlNTeHRRa0ZCYlVJc1owSkJRVTBzU1VGQlRpeERRVUZYTEVkQlFWZ3NRMEZCYmtJc1JVRkJiME03UVVGRGNFTXNhME5CUVd0Q0xFbEJRV3hDTEVOQlJHOURPMEZCUlhCRExEWkNRVUZoTEVkQlFXSTdPenRCUVVadlF5eGhRVUY0UXl4TlFVdFBPMEZCUTBnc0swSkJRVmNzYlVKQlFWa3NRMEZCV2l4RFFVRllMRWxCUVRaQ0xFZEJRVGRDTEVOQlJFYzdhVUpCVEZBN1UwRkdVeXhEUVVGaUxFTkJUbU03TzBGQmEwSmtMRmxCUVUwc2EwSkJRV3RDTEdkQ1FVRk5MRXRCUVU0c1EwRkJXU3hUUVVGYUxFTkJRV3hDTEVOQmJFSlJPenRCUVc5Q1pDdzBRa0ZCV1N4alFVRlpMRzFEUVVGNFFpeERRWEJDWXp0TFFVRllPenRCUVhWQ1VDeGhRVUZUTEZWQlFVTXNUVUZCUkR0bFFVRlpMRFJDUVVGblFpeE5RVUZvUWl4RlFVRjNRaXgxUWtGQmVFSXNSVUZCYVVRc1IwRkJha1FzU1VGQmQwUXNaMEpCUVUwc1QwRkJUaXhEUVVGakxFMUJRV1FzUTBGQmVFUTdTMEZCV2lJc0ltWnBiR1VpT2lKemFHRmtiM2N1YW5NaUxDSnpiM1Z5WTJWU2IyOTBJam9pTDFWelpYSnpMMDFoZEhRdlUybDBaWE12Y0c5d2JXOTBhVzl1SWl3aWMyOTFjbU5sYzBOdmJuUmxiblFpT2xzaWFXMXdiM0owSUdOdmJHOXlJR1p5YjIwZ0p5NHZZMjlzYjNJbk8xeHVhVzF3YjNKMElIc2daR1ZtWVhWc2RGQnliM0J6SUdGeklIQjRSR1ZtWVhWc2RGQnliM0J6SUgwZ1puSnZiU0FuTGk5d2VDYzdYRzVwYlhCdmNuUWdleUJ6YUdGa2IzY2dZWE1nYzJoaFpHOTNWR1Z5YlhNZ2ZTQm1jbTl0SUNjdUwzTmxkSFJwYm1kekwyUnBZM1JwYjI1aGNua25PMXh1YVcxd2IzSjBJSHNnYzNCc2FYUlRjR0ZqWlVSbGJHbHRhWFJsWkN3Z1kzSmxZWFJsUkdWc2FXMXBkR1ZrSUgwZ1puSnZiU0FuTGk0dmFXNWpMM1YwYVd4ekp6dGNibHh1WTI5dWMzUWdjMmhoWkc5M1YybDBhRzkxZEVOdmJHOXlWR1Z5YlhNZ1BTQnphR0ZrYjNkVVpYSnRjeTV6YkdsalpTZ3dMQ0EwS1R0Y2JseHVaWGh3YjNKMElHUmxabUYxYkhRZ2UxeHVJQ0FnSUdSbFptRjFiSFJRY205d2N6b2dlMXh1SUNBZ0lDQWdJQ0F1TGk1amIyeHZjaTVrWldaaGRXeDBVSEp2Y0hNc1hHNGdJQ0FnSUNBZ0lGZzZJSEI0UkdWbVlYVnNkRkJ5YjNCekxGeHVJQ0FnSUNBZ0lDQlpPaUJ3ZUVSbFptRjFiSFJRY205d2N5eGNiaUFnSUNBZ0lDQWdVbUZrYVhWek9pQndlRVJsWm1GMWJIUlFjbTl3Y3l4Y2JpQWdJQ0FnSUNBZ1UzQnlaV0ZrT2lCd2VFUmxabUYxYkhSUWNtOXdjMXh1SUNBZ0lIMHNYRzVjYmlBZ0lDQnpjR3hwZERvZ0tIWmhiSFZsS1NBOVBpQjdYRzRnSUNBZ0lDQWdJR052Ym5OMElHSnBkSE1nUFNCemNHeHBkRk53WVdObFJHVnNhVzFwZEdWa0tIWmhiSFZsS1R0Y2JpQWdJQ0FnSUNBZ2JHVjBJR2hoYzFKbFlXTm9aV1JEYjJ4dmNpQTlJR1poYkhObE8xeHVJQ0FnSUNBZ0lDQnNaWFFnWTI5c2IzSlFjbTl3SUQwZ0p5YzdYRzRnSUNBZ0lDQWdJR3hsZENCemNHeHBkRlpoYkhWbElEMGdlMzA3WEc1Y2JpQWdJQ0FnSUNBZ1ltbDBjeTVtYjNKRllXTm9LQ2hpYVhRc0lHa3BJRDArSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJQzh2SUVsbUlIZGxKM1psSUhKbFlXTm9aV1FnZEdobElHTnZiRzl5SUhCeWIzQnpMQ0JoY0hCbGJtUWdkRzhnWTI5c2IzSWdjM1J5YVc1blhHNGdJQ0FnSUNBZ0lDQWdJQ0JwWmlBb2FHRnpVbVZoWTJobFpFTnZiRzl5SUh4OElHTnZiRzl5TG5SbGMzUW9ZbWwwS1NrZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lHaGhjMUpsWVdOb1pXUkRiMnh2Y2lBOUlIUnlkV1U3WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnWTI5c2IzSlFjbTl3SUNzOUlHSnBkRHRjYmx4dUlDQWdJQ0FnSUNBZ0lDQWdMeThnUld4elpTQndjbTlqWlhOeklITm9ZV1J2ZHlCMllXeDFaVnh1SUNBZ0lDQWdJQ0FnSUNBZ2ZTQmxiSE5sSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCemNHeHBkRlpoYkhWbFczTm9ZV1J2ZDFSbGNtMXpXMmxkWFNBOUlHSnBkRHRjYmlBZ0lDQWdJQ0FnSUNBZ0lIMWNiaUFnSUNBZ0lDQWdmU2s3WEc1Y2JpQWdJQ0FnSUNBZ1kyOXVjM1FnYzNCc2FYUkRiMnh2Y2xCeWIzQnpJRDBnWTI5c2IzSXVjM0JzYVhRb1kyOXNiM0pRY205d0tUdGNibHh1SUNBZ0lDQWdJQ0J5WlhSMWNtNGdleUF1TGk1emNHeHBkRlpoYkhWbExDQnpjR3hwZEVOdmJHOXlVSEp2Y0hNZ2ZUdGNiaUFnSUNCOUxGeHVYRzRnSUNBZ1kyOXRZbWx1WlRvZ0tIWmhiSFZsY3lrZ1BUNGdZM0psWVhSbFJHVnNhVzFwZEdWa0tIWmhiSFZsY3l3Z2MyaGhaRzkzVjJsMGFHOTFkRU52Ykc5eVZHVnliWE1zSUNjZ0p5a2dLeUJqYjJ4dmNpNWpiMjFpYVc1bEtIWmhiSFZsY3lsY2JuMDdYRzRpWFgwPVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvdmFsdWUtdHlwZXMvc2hhZG93LmpzXG4gKiogbW9kdWxlIGlkID0gMzBcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF9jYWxjID0gcmVxdWlyZSgnLi4vaW5jL2NhbGMnKTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gKGZyb20sIHRvKSB7XG4gICAgdmFyIG1hcExlbmd0aCA9IGZyb20ubGVuZ3RoO1xuXG4gICAgcmV0dXJuIGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICBmb3IgKHZhciBpID0gMTsgaSA8IG1hcExlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAodmFsdWUgPCBmcm9tW2ldIHx8IGkgPT09IG1hcExlbmd0aCkge1xuICAgICAgICAgICAgICAgIHJldHVybiAoMCwgX2NhbGMuZ2V0VmFsdWVGcm9tUHJvZ3Jlc3MpKCgwLCBfY2FsYy5yZXN0cmljdCkoKDAsIF9jYWxjLmdldFByb2dyZXNzRnJvbVZhbHVlKSh2YWx1ZSwgZnJvbVtpIC0gMV0sIGZyb21baV0pLCAwLCAxKSwgdG9baSAtIDFdLCB0b1tpXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbk55WXk5MGNtRnVjMlp2Y20xbGNuTXZiV0Z3TG1weklsMHNJbTVoYldWeklqcGJYU3dpYldGd2NHbHVaM01pT2lJN096czdPenRyUWtGRlpTeFZRVUZETEVsQlFVUXNSVUZCVHl4RlFVRlFMRVZCUVdNN1FVRkRla0lzVVVGQlRTeFpRVUZaTEV0QlFVc3NUVUZCVEN4RFFVUlBPenRCUVVkNlFpeFhRVUZQTEZWQlFVTXNTMEZCUkN4RlFVRlhPMEZCUTJRc1lVRkJTeXhKUVVGSkxFbEJRVWtzUTBGQlNpeEZRVUZQTEVsQlFVa3NVMEZCU2l4RlFVRmxMRWRCUVM5Q0xFVkJRVzlETzBGQlEyaERMR2RDUVVGSkxGRkJRVkVzUzBGQlN5eERRVUZNTEVOQlFWSXNTVUZCYlVJc1RVRkJUU3hUUVVGT0xFVkJRV2xDTzBGQlEzQkRMSFZDUVVGUExHZERRVUZ4UWl4dlFrRkJVeXhuUTBGQmNVSXNTMEZCY2tJc1JVRkJORUlzUzBGQlN5eEpRVUZKTEVOQlFVb3NRMEZCYWtNc1JVRkJlVU1zUzBGQlN5eERRVUZNTEVOQlFYcERMRU5CUVZRc1JVRkJORVFzUTBGQk5VUXNSVUZCSzBRc1EwRkJMMFFzUTBGQmNrSXNSVUZCZDBZc1IwRkJSeXhKUVVGSkxFTkJRVW9zUTBGQk0wWXNSVUZCYlVjc1IwRkJSeXhEUVVGSUxFTkJRVzVITEVOQlFWQXNRMEZFYjBNN1lVRkJlRU03VTBGRVNqdExRVVJITEVOQlNHdENPME5CUVdRaUxDSm1hV3hsSWpvaWJXRndMbXB6SWl3aWMyOTFjbU5sVW05dmRDSTZJaTlWYzJWeWN5OU5ZWFIwTDFOcGRHVnpMM0J2Y0cxdmRHbHZiaUlzSW5OdmRYSmpaWE5EYjI1MFpXNTBJanBiSW1sdGNHOXlkQ0I3SUdkbGRGQnliMmR5WlhOelJuSnZiVlpoYkhWbExDQm5aWFJXWVd4MVpVWnliMjFRY205bmNtVnpjeXdnY21WemRISnBZM1FnZlNCbWNtOXRJQ2N1TGk5cGJtTXZZMkZzWXljN1hHNWNibVY0Y0c5eWRDQmtaV1poZFd4MElDaG1jbTl0TENCMGJ5a2dQVDRnZTF4dUlDQWdJR052Ym5OMElHMWhjRXhsYm1kMGFDQTlJR1p5YjIwdWJHVnVaM1JvTzF4dVhHNGdJQ0FnY21WMGRYSnVJQ2gyWVd4MVpTa2dQVDRnZTF4dUlDQWdJQ0FnSUNCbWIzSWdLR3hsZENCcElEMGdNVHNnYVNBOElHMWhjRXhsYm1kMGFEc2dhU3NyS1NCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0JwWmlBb2RtRnNkV1VnUENCbWNtOXRXMmxkSUh4OElHa2dQVDA5SUcxaGNFeGxibWQwYUNrZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lISmxkSFZ5YmlCblpYUldZV3gxWlVaeWIyMVFjbTluY21WemN5aHlaWE4wY21samRDaG5aWFJRY205bmNtVnpjMFp5YjIxV1lXeDFaU2gyWVd4MVpTd2dabkp2YlZ0cElDMGdNVjBzSUdaeWIyMWJhVjBwTENBd0xDQXhLU3dnZEc5YmFTQXRJREZkTENCMGIxdHBYU2s3WEc0Z0lDQWdJQ0FnSUNBZ0lDQjlYRzRnSUNBZ0lDQWdJSDFjYmlBZ0lDQjlPMXh1ZlRzaVhYMD1cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL3RyYW5zZm9ybWVycy9tYXAuanNcbiAqKiBtb2R1bGUgaWQgPSAzMVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9O1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX1Byb2Nlc3MyID0gcmVxdWlyZSgnLi4vcHJvY2Vzcy9Qcm9jZXNzJyk7XG5cbnZhciBfUHJvY2VzczMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9Qcm9jZXNzMik7XG5cbnZhciBfY2FsYyA9IHJlcXVpcmUoJy4uL2luYy9jYWxjJyk7XG5cbnZhciBfdXRpbHMgPSByZXF1aXJlKCcuLi9pbmMvdXRpbHMnKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKG9iaiwga2V5cykgeyB2YXIgdGFyZ2V0ID0ge307IGZvciAodmFyIGkgaW4gb2JqKSB7IGlmIChrZXlzLmluZGV4T2YoaSkgPj0gMCkgY29udGludWU7IGlmICghT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgaSkpIGNvbnRpbnVlOyB0YXJnZXRbaV0gPSBvYmpbaV07IH0gcmV0dXJuIHRhcmdldDsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmICghc2VsZikgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIGNhbGwgJiYgKHR5cGVvZiBjYWxsID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpID8gY2FsbCA6IHNlbGY7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgXCIgKyB0eXBlb2Ygc3VwZXJDbGFzcyk7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgZW51bWVyYWJsZTogZmFsc2UsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcykgOiBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzOyB9XG5cbnZhciBERUZBVUxUX1BST1AgPSAnY3VycmVudCc7XG52YXIgTlVNRVJJQ0FMX1ZBTFVFUyA9IFtERUZBVUxUX1BST1AsICdmcm9tJywgJ3RvJywgJ21pbicsICdtYXgnXTtcblxuLypcbiAgICBNYXAga2V5IGdpdmVuIGdpdmVuIHN0YXRlTWFwXG5cbiAgICBAcGFyYW0gW3N0cmluZ11cbiAgICBAcGFyYW0gW1JlbmRlcmVyXVxuICAgIEByZXR1cm4gW3N0cmluZ11cbiovXG52YXIgbWFwS2V5ID0gZnVuY3Rpb24gKGtleSwgcmVuZGVyZXIpIHtcbiAgICByZXR1cm4gcmVuZGVyZXIgJiYgcmVuZGVyZXIuc3RhdGVNYXAgPyByZW5kZXJlci5zdGF0ZU1hcFtrZXldIHx8IGtleSA6IGtleTtcbn07XG5cbnZhciBBY3Rpb24gPSBmdW5jdGlvbiAoX1Byb2Nlc3MpIHtcbiAgICBfaW5oZXJpdHMoQWN0aW9uLCBfUHJvY2Vzcyk7XG5cbiAgICBmdW5jdGlvbiBBY3Rpb24ocHJvcHMpIHtcbiAgICAgICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIEFjdGlvbik7XG5cbiAgICAgICAgcHJvcHMuc3RhdGUgPSB7fTtcblxuICAgICAgICAvLyBJbml0YWxpc2UgcmVuZGVyZXJcblxuICAgICAgICB2YXIgX3RoaXMgPSBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCBfUHJvY2Vzcy5jYWxsKHRoaXMsIHByb3BzKSk7XG5cbiAgICAgICAgaWYgKF90aGlzLm9uUmVuZGVyICYmIF90aGlzLm9uUmVuZGVyLmluaXQpIHtcbiAgICAgICAgICAgIF90aGlzLm9uUmVuZGVyLmluaXQoX3RoaXMpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBfdGhpcztcbiAgICB9XG5cbiAgICAvKlxuICAgICAgICAjIFNldCBBY3Rpb24gcHJvcGVydGllc1xuICAgICAgICAjIyBTZXQgdXNlci1kZWZpbmVkIEFjdGlvbiBwcm9wZXJ0aWVzXG4gICAgICAgICBAcGFyYW0gW29iamVjdF1cbiAgICAgICAgQHJldHVybiBbQWN0aW9uXVxuICAgICovXG5cbiAgICBBY3Rpb24ucHJvdG90eXBlLnNldCA9IGZ1bmN0aW9uIHNldChwcm9wcykge1xuICAgICAgICB2YXIgX3RoaXMyID0gdGhpcztcblxuICAgICAgICB2YXIgdmFsdWVzID0gcHJvcHMudmFsdWVzO1xuXG4gICAgICAgIHZhciBwcm9wc1RvU2V0ID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKHByb3BzLCBbJ3ZhbHVlcyddKTtcblxuICAgICAgICBfUHJvY2Vzcy5wcm90b3R5cGUuc2V0LmNhbGwodGhpcywgcHJvcHNUb1NldCk7XG5cbiAgICAgICAgdGhpcy52YWx1ZXMgPSB0aGlzLnZhbHVlcyB8fCB7fTtcbiAgICAgICAgdGhpcy52YWx1ZUtleXMgPSB0aGlzLnZhbHVlS2V5cyB8fCBbXTtcbiAgICAgICAgdGhpcy5wYXJlbnRLZXlzID0gdGhpcy5wYXJlbnRLZXlzIHx8IFtdO1xuXG4gICAgICAgIC8vIE1lcmdlIG5ldyBgdmFsdWVgIHByb3BlcnRpZXMgd2l0aCBleGlzdGluZ1xuICAgICAgICB2YXIgY3VycmVudFZhbHVlcyA9IHRoaXMudmFsdWVzO1xuICAgICAgICB2YXIgZGVmYXVsdFZhbHVlID0gdGhpcy5nZXREZWZhdWx0VmFsdWUoKTtcbiAgICAgICAgdmFyIGRlZmF1bHRWYWx1ZVByb3AgPSB0aGlzLmdldERlZmF1bHRWYWx1ZVByb3AoKTtcbiAgICAgICAgdmFyIHJlbmRlcmVyID0gdGhpcy5vblJlbmRlcjtcbiAgICAgICAgdmFyIHZhbHVlVHlwZU1hcCA9IHJlbmRlcmVyICYmIHJlbmRlcmVyLnZhbHVlVHlwZU1hcCA/IHJlbmRlcmVyLnZhbHVlVHlwZU1hcCA6IGZhbHNlO1xuXG4gICAgICAgIC8vIEluaGVyaXQgdmFsdWUgcHJvcGVydGllcyBmcm9tIGBwcm9wc2BcbiAgICAgICAgKDAsIF91dGlscy5lYWNoKShkZWZhdWx0VmFsdWUsIGZ1bmN0aW9uICh2YWx1ZSwga2V5KSB7XG4gICAgICAgICAgICBpZiAocHJvcHNUb1NldFtrZXldICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICBkZWZhdWx0VmFsdWVba2V5XSA9IHByb3BzVG9TZXRba2V5XTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gQ2hlY2sgYWxsIHZhbHVlcyBhbmQgc3BsaXQgaW50byBjaGlsZCB2YWx1ZXMgYXMgbmVjY2Vzc2FyeVxuICAgICAgICAoMCwgX3V0aWxzLmVhY2gpKHZhbHVlcywgZnVuY3Rpb24gKHZhbHVlLCBrZXkpIHtcbiAgICAgICAgICAgIHZhciBleGlzdGluZ1ZhbHVlID0gY3VycmVudFZhbHVlc1trZXldO1xuICAgICAgICAgICAgdmFyIHZhbHVlVHlwZSA9IHt9O1xuICAgICAgICAgICAgdmFyIG5ld1ZhbHVlID0ge307XG5cbiAgICAgICAgICAgIC8vIENvbnZlcnQgbmV3IHZhbHVlIGludG8gb2JqZWN0IGlmIGl0IGlzbid0IGFscmVhZHlcbiAgICAgICAgICAgIGlmICgoMCwgX3V0aWxzLmlzT2JqKSh2YWx1ZSkpIHtcbiAgICAgICAgICAgICAgICBuZXdWYWx1ZSA9IHZhbHVlO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBuZXdWYWx1ZVtkZWZhdWx0VmFsdWVQcm9wXSA9IHZhbHVlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBJZiB2YWx1ZSBhbHJlYWR5IGV4aXN0cywgY2hlY2sgZm9yIGFuZCB1c2UgZXhpc3RpbmcgdHlwZVxuICAgICAgICAgICAgaWYgKGV4aXN0aW5nVmFsdWUpIHtcbiAgICAgICAgICAgICAgICBuZXdWYWx1ZSA9IF9leHRlbmRzKHt9LCBleGlzdGluZ1ZhbHVlLCBuZXdWYWx1ZSk7XG4gICAgICAgICAgICAgICAgdmFsdWVUeXBlID0gZXhpc3RpbmdWYWx1ZS50eXBlO1xuXG4gICAgICAgICAgICAgICAgLy8gSWYgdGhpcyBpcyBhIG5ldyB2YWx1ZSwgY2hlY2sgZm9yIHR5cGVcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIG5ld1ZhbHVlID0gX2V4dGVuZHMoe30sIGRlZmF1bHRWYWx1ZSwgbmV3VmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICAvLyBJZiBvbmUgaXMgZXhwbGljaXRseSBhc3NpZ25lZCwgdXNlIHRoYXRcbiAgICAgICAgICAgICAgICAgICAgaWYgKHZhbHVlLnR5cGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlVHlwZSA9IHZhbHVlLnR5cGU7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIE9yIGlmIG91ciByZW5kZXJlciBoYXMgYSB0eXBlTWFwLCB1c2UgdGhhdFxuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHZhbHVlVHlwZU1hcCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlVHlwZSA9IHZhbHVlVHlwZU1hcFttYXBLZXkoa2V5LCByZW5kZXJlcildO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIC8vIE1heWJlIHJ1biBgdGVzdGAgb24gY29sb3IgaGVyZVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gSWYgd2UndmUgZ290IGEgdmFsdWVUeXBlIHRoZW4gcHJlcHJvY2VzcyB0aGUgdmFsdWUgYWNjb3JkaW5nbHlcbiAgICAgICAgICAgIGlmICh2YWx1ZVR5cGUpIHtcbiAgICAgICAgICAgICAgICAvLyBJZiB0aGlzIHZhbHVlIHNob3VsZCBiZSBzcGxpdCwgc3BsaXRcbiAgICAgICAgICAgICAgICBpZiAodmFsdWVUeXBlLnNwbGl0KSB7XG4gICAgICAgICAgICAgICAgICAgIChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgY2hpbGRWYWx1ZXMgPSB7fTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gTG9vcCBvdmVyIG51bWVyaWNhbCB2YWx1ZXMgYW5kIHNwbGl0IGFueSBwcmVzZW50XG4gICAgICAgICAgICAgICAgICAgICAgICBOVU1FUklDQUxfVkFMVUVTLmZvckVhY2goZnVuY3Rpb24gKHByb3BOYW1lKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG5ld1ZhbHVlLmhhc093blByb3BlcnR5KHByb3BOYW1lKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgc3BsaXRWYWx1ZXMgPSB2YWx1ZVR5cGUuc3BsaXQobmV3VmFsdWVbcHJvcE5hbWVdKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoMCwgX3V0aWxzLmVhY2gpKHNwbGl0VmFsdWVzLCBmdW5jdGlvbiAoc3BsaXRWYWx1ZSwgc3BsaXRLZXkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIENyZWF0ZSBuZXcgY2hpbGQgdmFsdWUgaWYgZG9lc24ndCBleGlzdFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFjaGlsZFZhbHVlc1tzcGxpdEtleV0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGlsZFZhbHVlc1tzcGxpdEtleV0gPSB7fTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh2YWx1ZVR5cGUuZGVmYXVsdFByb3BzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoaWxkVmFsdWVzW3NwbGl0S2V5XSA9IHZhbHVlVHlwZS5kZWZhdWx0UHJvcHNbc3BsaXRLZXldID8gX2V4dGVuZHMoe30sIHZhbHVlVHlwZS5kZWZhdWx0UHJvcHNbc3BsaXRLZXldKSA6IF9leHRlbmRzKHt9LCB2YWx1ZVR5cGUuZGVmYXVsdFByb3BzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoaWxkVmFsdWVzW3NwbGl0S2V5XVtwcm9wTmFtZV0gPSBzcGxpdFZhbHVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgbmV3VmFsdWUuY2hpbGRyZW4gPSBbXTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gTm93IGxvb3AgdGhyb3VnaCBhbGwgY2hpbGQgdmFsdWVzIGFuZCBhZGQgdGhlbSBhcyBub3JtYWwgdmFsdWVzXG4gICAgICAgICAgICAgICAgICAgICAgICAoMCwgX3V0aWxzLmVhY2gpKGNoaWxkVmFsdWVzLCBmdW5jdGlvbiAoY2hpbGRWYWx1ZSwgY2hpbGRLZXkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgY29tYmluZWRLZXkgPSBrZXkgKyBjaGlsZEtleTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ld1ZhbHVlLmNoaWxkcmVuLnB1c2goY29tYmluZWRLZXkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnRWYWx1ZXNbY29tYmluZWRLZXldID0gY2hpbGRWYWx1ZTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChfdGhpczIudmFsdWVLZXlzLmluZGV4T2YoY29tYmluZWRLZXkpID09PSAtMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdGhpczIudmFsdWVLZXlzLnB1c2goY29tYmluZWRLZXkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBPciB3ZSBqdXN0IGhhdmUgZGVmYXVsdCB2YWx1ZSBwcm9wcywgbG9hZCB0aG9zZSBcbiAgICAgICAgICAgICAgICAgICAgfSkoKTtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHZhbHVlVHlwZS5kZWZhdWx0UHJvcHMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ld1ZhbHVlID0gX2V4dGVuZHMoe30sIHZhbHVlVHlwZS5kZWZhdWx0UHJvcHMsIG5ld1ZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBVcGRhdGUgYXBwcm9wcmlhdGUgbGlzdHMgd2l0aCB2YWx1ZSBrZXlcbiAgICAgICAgICAgIGlmIChuZXdWYWx1ZS5jaGlsZHJlbikge1xuICAgICAgICAgICAgICAgIGlmIChfdGhpczIucGFyZW50S2V5cy5pbmRleE9mKGtleSkgPT09IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgIF90aGlzMi5wYXJlbnRLZXlzLnB1c2goa2V5KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGlmIChfdGhpczIudmFsdWVLZXlzLmluZGV4T2Yoa2V5KSA9PT0gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMyLnZhbHVlS2V5cy5wdXNoKGtleSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjdXJyZW50VmFsdWVzW2tleV0gPSBuZXdWYWx1ZTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gUHJlY29tcHV0ZSB2YWx1ZSBrZXkgYW5kIHBhcmVudCBrZXkgbGVuZ3RoIHRvIHByZXZlbnQgcGVyLWZyYW1lIG1lYXN1cmVtZW50XG4gICAgICAgIHRoaXMubnVtVmFsdWVLZXlzID0gdGhpcy52YWx1ZUtleXMubGVuZ3RoO1xuICAgICAgICB0aGlzLm51bVBhcmVudEtleXMgPSB0aGlzLnBhcmVudEtleXMubGVuZ3RoO1xuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH07XG5cbiAgICAvKlxuICAgICAgICBEZWNpZGUgd2hldGhlciB0aGlzIEFjdGlvbiB3aWxsIHJlbmRlciBvbiBuZXh0IGZyYW1lXG4gICAgICAgICBAcGFyYW0gW0FjdGlvbl1cbiAgICAgICAgQHBhcmFtIFtudW1iZXJdXG4gICAgICAgIEBwYXJhbSBbbnVtYmVyXVxuICAgICAgICBAcmV0dXJuIFtib29sZWFuXTogUmV0dXJuIHRydWUgdG8gcmVuZGVyXG4gICAgKi9cblxuICAgIEFjdGlvbi5wcm90b3R5cGUud2lsbFJlbmRlciA9IGZ1bmN0aW9uIHdpbGxSZW5kZXIoYWN0aW9uLCBmcmFtZVN0YW1wLCBlbGFwc2VkKSB7XG4gICAgICAgIHZhciBoYXNDaGFuZ2VkID0gZmFsc2U7XG5cbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLm51bVZhbHVlS2V5czsgaSsrKSB7XG4gICAgICAgICAgICB2YXIga2V5ID0gdGhpcy52YWx1ZUtleXNbaV07XG4gICAgICAgICAgICB2YXIgdmFsdWUgPSB0aGlzLnZhbHVlc1trZXldO1xuXG4gICAgICAgICAgICB2YXIgdXBkYXRlZFZhbHVlID0gdmFsdWUuY3VycmVudDtcblxuICAgICAgICAgICAgLy8gVXBkYXRlIHZhbHVlIGJhc2VkIG9uIGFjdGl2ZSBhY3Rpb25cbiAgICAgICAgICAgIGlmICh2YWx1ZS5hY3Rpb24pIHtcbiAgICAgICAgICAgICAgICB1cGRhdGVkVmFsdWUgPSB2YWx1ZS5hY3Rpb24udmFsdWVzW2tleV0uY3VycmVudDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gUnVuIHRyYW5zZm9ybSBmdW5jdGlvbiAoaWYgcHJlc2VudClcbiAgICAgICAgICAgIGlmICh2YWx1ZS50cmFuc2Zvcm0pIHtcbiAgICAgICAgICAgICAgICB1cGRhdGVkVmFsdWUgPSB2YWx1ZS50cmFuc2Zvcm0odXBkYXRlZFZhbHVlLCBrZXksIHRoaXMpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBTbW9vdGggdmFsdWUgaWYgd2UgaGF2ZSBzbW9vdGhpbmdcbiAgICAgICAgICAgIGlmICh2YWx1ZS5zbW9vdGgpIHtcbiAgICAgICAgICAgICAgICB1cGRhdGVkVmFsdWUgPSAoMCwgX2NhbGMuc21vb3RoKSh1cGRhdGVkVmFsdWUsIHZhbHVlLmN1cnJlbnQsIGVsYXBzZWQsIHZhbHVlLnNtb290aCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIFJvdW5kIHZhbHVlXG4gICAgICAgICAgICBpZiAodmFsdWUucm91bmQpIHtcbiAgICAgICAgICAgICAgICB1cGRhdGVkVmFsdWUgPSBNYXRoLnJvdW5kKHVwZGF0ZWRWYWx1ZSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIENhcCB0byBtaW5pbXVtIHZhbHVlXG4gICAgICAgICAgICBpZiAodmFsdWUubWluICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICB1cGRhdGVkVmFsdWUgPSBNYXRoLm1heCh1cGRhdGVkVmFsdWUsIHZhbHVlLm1pbik7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIENhcCB0byBtYXhpbXVtIHZhbHVlXG4gICAgICAgICAgICBpZiAodmFsdWUubWF4ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICB1cGRhdGVkVmFsdWUgPSBNYXRoLm1pbih1cGRhdGVkVmFsdWUsIHZhbHVlLm1heCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHZhbHVlLnZlbG9jaXR5ID0gKDAsIF9jYWxjLnNwZWVkUGVyU2Vjb25kKSh1cGRhdGVkVmFsdWUgLSB2YWx1ZS5jdXJyZW50LCBlbGFwc2VkKTtcblxuICAgICAgICAgICAgaWYgKHVwZGF0ZWRWYWx1ZSAhPT0gdmFsdWUuY3VycmVudCkge1xuICAgICAgICAgICAgICAgIGhhc0NoYW5nZWQgPSB0cnVlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB2YWx1ZS5jdXJyZW50ID0gdXBkYXRlZFZhbHVlO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXMub25DbGVhbnVwID8gdHJ1ZSA6IGhhc0NoYW5nZWQ7XG4gICAgfTtcblxuICAgIEFjdGlvbi5wcm90b3R5cGUub25QcmVSZW5kZXIgPSBmdW5jdGlvbiBvblByZVJlbmRlcigpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLm51bVZhbHVlS2V5czsgaSsrKSB7XG4gICAgICAgICAgICB2YXIga2V5ID0gdGhpcy52YWx1ZUtleXNbaV07XG4gICAgICAgICAgICB2YXIgdmFsdWUgPSB0aGlzLnZhbHVlc1trZXldO1xuXG4gICAgICAgICAgICB2YXIgdmFsdWVGb3JTdGF0ZSA9IHZhbHVlLnVuaXQgPyB2YWx1ZS5jdXJyZW50ICsgdmFsdWUudW5pdCA6IHZhbHVlLmN1cnJlbnQ7XG5cbiAgICAgICAgICAgIC8vIEFkZCBzdHJhaWdodCB0byBzdGF0ZSBpZiBubyBwYXJlbnRcbiAgICAgICAgICAgIGlmICghdmFsdWUucGFyZW50KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zdGF0ZVttYXBLZXkoa2V5LCB0aGlzLm9uUmVuZGVyKV0gPSB2YWx1ZUZvclN0YXRlO1xuXG4gICAgICAgICAgICAgICAgLy8gT3IgYWRkIHRvIHBhcmVudFxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy52YWx1ZXNbdmFsdWUucGFyZW50XS5jaGlsZHJlbltrZXldID0gdmFsdWVGb3JTdGF0ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgQWN0aW9uLnByb3RvdHlwZS5wYXVzZSA9IGZ1bmN0aW9uIHBhdXNlKCkge1xuICAgICAgICBfUHJvY2Vzcy5wcm90b3R5cGUuc3RvcC5jYWxsKHRoaXMpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xuXG4gICAgQWN0aW9uLnByb3RvdHlwZS5yZXN1bWUgPSBmdW5jdGlvbiByZXN1bWUoKSB7XG4gICAgICAgIF9Qcm9jZXNzLnByb3RvdHlwZS5zdGFydC5jYWxsKHRoaXMpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xuXG4gICAgLypcbiAgICAgICAgIyBHZXQgZGVmYXVsdCBBY3Rpb24gdmFsdWUgcHJvcGVydGllc1xuICAgICAgICAgQHJldHVybiBbb2JqZWN0XVxuICAgICovXG5cbiAgICBBY3Rpb24ucHJvdG90eXBlLmdldERlZmF1bHRWYWx1ZSA9IGZ1bmN0aW9uIGdldERlZmF1bHRWYWx1ZSgpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGN1cnJlbnQ6IDAsXG4gICAgICAgICAgICB2ZWxvY2l0eTogMFxuICAgICAgICB9O1xuICAgIH07XG5cbiAgICAvKlxuICAgICAgICAjIEdldCBkZWZhdWx0IEFjdGlvbiB2YWx1ZSBwcm9wZXJ0eSBuYW1lXG4gICAgICAgICMjIFNldCB0aGlzIGB2YWx1ZWAgcHJvcGVydHkgd2hlbiBzZXQgYXMgdmFsdWUgaW5zdGVhZCBvZiBvYmplY3RcbiAgICAgICAgIEByZXR1cm4gW3N0cmluZ11cbiAgICAqL1xuXG4gICAgQWN0aW9uLnByb3RvdHlwZS5nZXREZWZhdWx0VmFsdWVQcm9wID0gZnVuY3Rpb24gZ2V0RGVmYXVsdFZhbHVlUHJvcCgpIHtcbiAgICAgICAgcmV0dXJuIERFRkFVTFRfUFJPUDtcbiAgICB9O1xuXG4gICAgcmV0dXJuIEFjdGlvbjtcbn0oX1Byb2Nlc3MzLmRlZmF1bHQpO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBBY3Rpb247XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5OeVl5OWhZM1JwYjI1ekwwRmpkR2x2Ymk1cWN5SmRMQ0p1WVcxbGN5STZXMTBzSW0xaGNIQnBibWR6SWpvaU96czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3UVVGSlFTeEpRVUZOTEdWQlFXVXNVMEZCWmp0QlFVTk9MRWxCUVUwc2JVSkJRVzFDTEVOQlFVTXNXVUZCUkN4RlFVRmxMRTFCUVdZc1JVRkJkVUlzU1VGQmRrSXNSVUZCTmtJc1MwRkJOMElzUlVGQmIwTXNTMEZCY0VNc1EwRkJia0k3T3pzN096czdPenRCUVZOT0xFbEJRVTBzVTBGQlV5eFZRVUZETEVkQlFVUXNSVUZCVFN4UlFVRk9PMWRCUVcxQ0xGRkJRVU1zU1VGQldTeFRRVUZUTEZGQlFWUXNSMEZCY1VJc1UwRkJVeXhSUVVGVUxFTkJRV3RDTEVkQlFXeENMRXRCUVRCQ0xFZEJRVEZDTEVkQlFXZERMRWRCUVd4Rk8wTkJRVzVDT3p0SlFVVk5PenM3UVVGRGFrSXNZVUZFYVVJc1RVRkRha0lzUTBGQldTeExRVUZhTEVWQlFXMUNPemhDUVVSR0xGRkJRMFU3TzBGQlEyWXNZMEZCVFN4TFFVRk9MRWRCUVdNc1JVRkJaQ3hEUVVSbE96czdPM0ZFUVVWbUxHOUNRVUZOTEV0QlFVNHNSMEZHWlRzN1FVRkxaaXhaUVVGSkxFMUJRVXNzVVVGQlRDeEpRVUZwUWl4TlFVRkxMRkZCUVV3c1EwRkJZeXhKUVVGa0xFVkJRVzlDTzBGQlEzSkRMR3RDUVVGTExGRkJRVXdzUTBGQll5eEpRVUZrTEZGQlJIRkRPMU5CUVhwRE8zRkNRVXhsTzB0QlFXNUNPenM3T3pzN096czdRVUZFYVVJc2NVSkJhMEpxUWl4dFFrRkJTU3hQUVVGUE96czdXVUZEUXl4VFFVRXdRaXhOUVVFeFFpeFBRVVJFT3p0WlFVTlpMSE5EUVVGbExHMUNRVVF6UWpzN1FVRkhVQ3d5UWtGQlRTeEhRVUZPTEZsQlFWVXNWVUZCVml4RlFVaFBPenRCUVV0UUxHRkJRVXNzVFVGQlRDeEhRVUZqTEV0QlFVc3NUVUZCVEN4SlFVRmxMRVZCUVdZc1EwRk1VRHRCUVUxUUxHRkJRVXNzVTBGQlRDeEhRVUZwUWl4TFFVRkxMRk5CUVV3c1NVRkJhMElzUlVGQmJFSXNRMEZPVmp0QlFVOVFMR0ZCUVVzc1ZVRkJUQ3hIUVVGclFpeExRVUZMTEZWQlFVd3NTVUZCYlVJc1JVRkJia0k3T3p0QlFWQllMRmxCVlVRc1owSkJRV2RDTEV0QlFVc3NUVUZCVEN4RFFWWm1PMEZCVjFBc1dVRkJUU3hsUVVGbExFdEJRVXNzWlVGQlRDeEZRVUZtTEVOQldFTTdRVUZaVUN4WlFVRk5MRzFDUVVGdFFpeExRVUZMTEcxQ1FVRk1MRVZCUVc1Q0xFTkJXa003UVVGaFVDeFpRVUZOTEZkQlFWY3NTMEZCU3l4UlFVRk1MRU5CWWxZN1FVRmpVQ3haUVVGSkxHVkJRV1VzVVVGQlF5eEpRVUZaTEZOQlFWTXNXVUZCVkN4SFFVRjVRaXhUUVVGVExGbEJRVlFzUjBGQmQwSXNTMEZCT1VRN096dEJRV1JhTEhkQ1FXbENVQ3hEUVVGTExGbEJRVXdzUlVGQmJVSXNWVUZCUXl4TFFVRkVMRVZCUVZFc1IwRkJVaXhGUVVGblFqdEJRVU12UWl4blFrRkJTU3hYUVVGWExFZEJRVmdzVFVGQmIwSXNVMEZCY0VJc1JVRkJLMEk3UVVGREwwSXNOa0pCUVdFc1IwRkJZaXhKUVVGdlFpeFhRVUZYTEVkQlFWZ3NRMEZCY0VJc1EwRkVLMEk3WVVGQmJrTTdVMEZFWlN4RFFVRnVRanM3TzBGQmFrSlBMSGRDUVhkQ1VDeERRVUZMTEUxQlFVd3NSVUZCWVN4VlFVRkRMRXRCUVVRc1JVRkJVU3hIUVVGU0xFVkJRV2RDTzBGQlEzcENMR2RDUVVGTkxHZENRVUZuUWl4alFVRmpMRWRCUVdRc1EwRkJhRUlzUTBGRWJVSTdRVUZGZWtJc1owSkJRVWtzV1VGQldTeEZRVUZhTEVOQlJuRkNPMEZCUjNwQ0xHZENRVUZKTEZkQlFWY3NSVUZCV0RzN08wRkJTSEZDTEdkQ1FVMXlRaXhyUWtGQlRTeExRVUZPTEVOQlFVb3NSVUZCYTBJN1FVRkRaQ3d5UWtGQlZ5eExRVUZZTEVOQlJHTTdZVUZCYkVJc1RVRkZUenRCUVVOSUxIbENRVUZUTEdkQ1FVRlVMRWxCUVRaQ0xFdEJRVGRDTEVOQlJFYzdZVUZHVURzN08wRkJUbmxDTEdkQ1FXRnlRaXhoUVVGS0xFVkJRVzFDTzBGQlEyWXNkME5CUVdkQ0xHVkJRV3RDTEZOQlFXeERMRU5CUkdVN1FVRkZaaXcwUWtGQldTeGpRVUZqTEVsQlFXUTdPenRCUVVaSExHRkJRVzVDTEUxQlMwODdRVUZEU0N3MFEwRkJaMElzWTBGQmFVSXNVMEZCYWtNN08wRkJSRWNzZDBKQlIwTXNUVUZCVFN4SlFVRk9MRVZCUVZrN1FVRkRXaXh2UTBGQldTeE5RVUZOTEVsQlFVNDdPenRCUVVSQkxIRkNRVUZvUWl4TlFVbFBMRWxCUVVrc1dVRkJTaXhGUVVGclFqdEJRVU55UWl4M1EwRkJXU3hoUVVGaExFOUJRVThzUjBGQlVDeEZRVUZaTEZGQlFWb3NRMEZCWWl4RFFVRmFMRU5CUkhGQ08zbENRVUZzUWpzN08wRkJVRW9zYVVKQlRGQTdPenRCUVdKNVFpeG5Ra0ZwUTNKQ0xGTkJRVW9zUlVGQlpUczdRVUZGV0N4dlFrRkJTU3hWUVVGVkxFdEJRVllzUlVGQmFVSTdPMEZCUTJwQ0xEUkNRVUZOTEdOQlFXTXNSVUZCWkRzN08wRkJSMDRzZVVOQlFXbENMRTlCUVdwQ0xFTkJRWGxDTEZWQlFVTXNVVUZCUkN4RlFVRmpPMEZCUTI1RExHZERRVUZKTEZOQlFWTXNZMEZCVkN4RFFVRjNRaXhSUVVGNFFpeERRVUZLTEVWQlFYVkRPMEZCUTI1RExHOURRVUZOTEdOQlFXTXNWVUZCVlN4TFFVRldMRU5CUVdkQ0xGTkJRVk1zVVVGQlZDeERRVUZvUWl4RFFVRmtMRU5CUkRaQ096dEJRVWR1UXl4cFJFRkJTeXhYUVVGTUxFVkJRV3RDTEZWQlFVTXNWVUZCUkN4RlFVRmhMRkZCUVdJc1JVRkJNRUk3TzBGQlJYaERMSGREUVVGSkxFTkJRVU1zV1VGQldTeFJRVUZhTEVOQlFVUXNSVUZCZDBJN1FVRkRlRUlzYjBSQlFWa3NVVUZCV2l4SlFVRjNRaXhGUVVGNFFpeERRVVIzUWpzN1FVRkhlRUlzTkVOQlFVa3NWVUZCVlN4WlFVRldMRVZCUVhkQ08wRkJRM2hDTEhkRVFVRlpMRkZCUVZvc1NVRkJkMElzVTBGQlF5eERRVUZWTEZsQlFWWXNRMEZCZFVJc1VVRkJka0lzUTBGQlJDeG5Ra0ZCTUVNc1ZVRkJWU3haUVVGV0xFTkJRWFZDTEZGQlFYWkNMRVZCUVRGRExHZENRVUZ2Uml4VlFVRlZMRmxCUVZZc1EwRkJjRVlzUTBGRVFUdDVRMEZCTlVJN2NVTkJTRW83TzBGQlVVRXNaMFJCUVZrc1VVRkJXaXhGUVVGelFpeFJRVUYwUWl4SlFVRnJReXhWUVVGc1F5eERRVlozUXp0cFEwRkJNVUlzUTBGQmJFSXNRMEZJYlVNN05rSkJRWFpETzNsQ1FVUnhRaXhEUVVGNlFqczdRVUZ0UWtFc2FVTkJRVk1zVVVGQlZDeEhRVUZ2UWl4RlFVRndRanM3TzBGQlIwRXNlVU5CUVVzc1YwRkJUQ3hGUVVGclFpeFZRVUZETEZWQlFVUXNSVUZCWVN4UlFVRmlMRVZCUVRCQ08wRkJRM2hETEdkRFFVRk5MR05CUVdNc1RVRkJUU3hSUVVGT0xFTkJSRzlDT3p0QlFVZDRReXh4UTBGQlV5eFJRVUZVTEVOQlFXdENMRWxCUVd4Q0xFTkJRWFZDTEZkQlFYWkNMRVZCU0hkRE8wRkJTWGhETERCRFFVRmpMRmRCUVdRc1NVRkJOa0lzVlVGQk4wSXNRMEZLZDBNN08wRkJUWGhETEdkRFFVRkpMRTlCUVVzc1UwRkJUQ3hEUVVGbExFOUJRV1lzUTBGQmRVSXNWMEZCZGtJc1RVRkJkME1zUTBGQlF5eERRVUZFTEVWQlFVazdRVUZETlVNc2RVTkJRVXNzVTBGQlRDeERRVUZsTEVsQlFXWXNRMEZCYjBJc1YwRkJjRUlzUlVGRU5FTTdOa0pCUVdoRU8zbENRVTVqTEVOQlFXeENPenM3ZVVKQk1VSnBRanRwUWtGQmNrSXNUVUZ6UTA4c1NVRkJTU3hWUVVGVkxGbEJRVllzUlVGQmQwSTdRVUZETDBJc1owUkJRV2RDTEZWQlFWVXNXVUZCVml4RlFVRXlRaXhUUVVFelF5eERRVVFyUWp0eFFrRkJOVUk3WVVGNFExZzdPenRCUVdwRGVVSXNaMEpCSzBWeVFpeFRRVUZUTEZGQlFWUXNSVUZCYlVJN1FVRkRia0lzYjBKQlFVa3NUMEZCU3l4VlFVRk1MRU5CUVdkQ0xFOUJRV2hDTEVOQlFYZENMRWRCUVhoQ0xFMUJRV2xETEVOQlFVTXNRMEZCUkN4RlFVRkpPMEZCUTNKRExESkNRVUZMTEZWQlFVd3NRMEZCWjBJc1NVRkJhRUlzUTBGQmNVSXNSMEZCY2tJc1JVRkVjVU03YVVKQlFYcERPMkZCUkVvc1RVRkpUenRCUVVOSUxHOUNRVUZKTEU5QlFVc3NVMEZCVEN4RFFVRmxMRTlCUVdZc1EwRkJkVUlzUjBGQmRrSXNUVUZCWjBNc1EwRkJReXhEUVVGRUxFVkJRVWs3UVVGRGNFTXNNa0pCUVVzc1UwRkJUQ3hEUVVGbExFbEJRV1lzUTBGQmIwSXNSMEZCY0VJc1JVRkViME03YVVKQlFYaERPMkZCVEVvN08wRkJWVUVzTUVKQlFXTXNSMEZCWkN4SlFVRnhRaXhSUVVGeVFpeERRWHBHZVVJN1UwRkJhRUlzUTBGQllqczdPMEZCZUVKUExGbEJjVWhRTEVOQlFVc3NXVUZCVEN4SFFVRnZRaXhMUVVGTExGTkJRVXdzUTBGQlpTeE5RVUZtTEVOQmNraGlPMEZCYzBoUUxHRkJRVXNzWVVGQlRDeEhRVUZ4UWl4TFFVRkxMRlZCUVV3c1EwRkJaMElzVFVGQmFFSXNRMEYwU0dRN08wRkJkMGhRTEdWQlFVOHNTVUZCVUN4RFFYaElUenM3T3pzN096czdPenM3UVVGc1FrMHNjVUpCY1VwcVFpeHBRMEZCVnl4UlFVRlJMRmxCUVZrc1UwRkJVenRCUVVOd1F5eFpRVUZKTEdGQlFXRXNTMEZCWWl4RFFVUm5RenM3UVVGSGNFTXNZVUZCU3l4SlFVRkpMRWxCUVVrc1EwRkJTaXhGUVVGUExFbEJRVWtzUzBGQlN5eFpRVUZNTEVWQlFXMUNMRWRCUVhaRExFVkJRVFJETzBGQlEzaERMR2RDUVVGTkxFMUJRVTBzUzBGQlN5eFRRVUZNTEVOQlFXVXNRMEZCWml4RFFVRk9MRU5CUkd0RE8wRkJSWGhETEdkQ1FVRk5MRkZCUVZFc1MwRkJTeXhOUVVGTUxFTkJRVmtzUjBGQldpeERRVUZTTEVOQlJtdERPenRCUVVsNFF5eG5Ra0ZCU1N4bFFVRmxMRTFCUVUwc1QwRkJUanM3TzBGQlNuRkNMR2RDUVU5d1F5eE5RVUZOTEUxQlFVNHNSVUZCWXp0QlFVTmtMQ3RDUVVGbExFMUJRVTBzVFVGQlRpeERRVUZoTEUxQlFXSXNRMEZCYjBJc1IwRkJjRUlzUlVGQmVVSXNUMEZCZWtJc1EwRkVSRHRoUVVGc1FqczdPMEZCVUhkRExHZENRVmx3UXl4TlFVRk5MRk5CUVU0c1JVRkJhVUk3UVVGRGFrSXNLMEpCUVdVc1RVRkJUU3hUUVVGT0xFTkJRV2RDTEZsQlFXaENMRVZCUVRoQ0xFZEJRVGxDTEVWQlFXMURMRWxCUVc1RExFTkJRV1lzUTBGRWFVSTdZVUZCY2tJN096dEJRVnAzUXl4blFrRnBRbkJETEUxQlFVMHNUVUZCVGl4RlFVRmpPMEZCUTJRc0swSkJRV1VzYTBKQlFVOHNXVUZCVUN4RlFVRnhRaXhOUVVGTkxFOUJRVTRzUlVGQlpTeFBRVUZ3UXl4RlFVRTJReXhOUVVGTkxFMUJRVTRzUTBGQk5VUXNRMEZFWXp0aFFVRnNRanM3TzBGQmFrSjNReXhuUWtGelFuQkRMRTFCUVUwc1MwRkJUaXhGUVVGaE8wRkJRMklzSzBKQlFXVXNTMEZCU3l4TFFVRk1MRU5CUVZjc1dVRkJXQ3hEUVVGbUxFTkJSR0U3WVVGQmFrSTdPenRCUVhSQ2QwTXNaMEpCTWtKd1F5eE5RVUZOTEVkQlFVNHNTMEZCWXl4VFFVRmtMRVZCUVhsQ08wRkJRM3BDTEN0Q1FVRmxMRXRCUVVzc1IwRkJUQ3hEUVVGVExGbEJRVlFzUlVGQmRVSXNUVUZCVFN4SFFVRk9MRU5CUVhSRExFTkJSSGxDTzJGQlFUZENPenM3UVVFelFuZERMR2RDUVdkRGNFTXNUVUZCVFN4SFFVRk9MRXRCUVdNc1UwRkJaQ3hGUVVGNVFqdEJRVU42UWl3clFrRkJaU3hMUVVGTExFZEJRVXdzUTBGQlV5eFpRVUZVTEVWQlFYVkNMRTFCUVUwc1IwRkJUaXhEUVVGMFF5eERRVVI1UWp0aFFVRTNRanM3UVVGSlFTeHJRa0ZCVFN4UlFVRk9MRWRCUVdsQ0xEQkNRVUZsTEdWQlFXVXNUVUZCVFN4UFFVRk9MRVZCUVdVc1QwRkJOME1zUTBGQmFrSXNRMEZ3UTNkRE96dEJRWE5EZUVNc1owSkJRVWtzYVVKQlFXbENMRTFCUVUwc1QwRkJUaXhGUVVGbE8wRkJRMmhETERaQ1FVRmhMRWxCUVdJc1EwRkVaME03WVVGQmNFTTdPMEZCU1VFc2EwSkJRVTBzVDBGQlRpeEhRVUZuUWl4WlFVRm9RaXhEUVRGRGQwTTdVMEZCTlVNN08wRkJOa05CTEdWQlFVOHNTVUZCUXl4RFFVRkxMRk5CUVV3c1IwRkJhMElzU1VGQmJrSXNSMEZCTUVJc1ZVRkJNVUlzUTBGb1JEWkNPenM3UVVGeVNuWkNMSEZDUVhkTmFrSXNjVU5CUVdNN1FVRkRWaXhoUVVGTExFbEJRVWtzU1VGQlNTeERRVUZLTEVWQlFVOHNTVUZCU1N4TFFVRkxMRmxCUVV3c1JVRkJiVUlzUjBGQmRrTXNSVUZCTkVNN1FVRkRlRU1zWjBKQlFVMHNUVUZCVFN4TFFVRkxMRk5CUVV3c1EwRkJaU3hEUVVGbUxFTkJRVTRzUTBGRWEwTTdRVUZGZUVNc1owSkJRVTBzVVVGQlVTeExRVUZMTEUxQlFVd3NRMEZCV1N4SFFVRmFMRU5CUVZJc1EwRkdhME03TzBGQlNYaERMR2RDUVVGTkxHZENRVUZuUWl4TFFVRkRMRU5CUVUwc1NVRkJUaXhIUVVGakxFMUJRVTBzVDBGQlRpeEhRVUZuUWl4TlFVRk5MRWxCUVU0c1IwRkJZU3hOUVVGTkxFOUJRVTQ3T3p0QlFVb3hRaXhuUWtGUGNFTXNRMEZCUXl4TlFVRk5MRTFCUVU0c1JVRkJZenRCUVVObUxIRkNRVUZMTEV0QlFVd3NRMEZCVnl4UFFVRlBMRWRCUVZBc1JVRkJXU3hMUVVGTExGRkJRVXdzUTBGQmRrSXNTVUZCZVVNc1lVRkJla003T3p0QlFVUmxMR0ZCUVc1Q0xFMUJTVTg3UVVGRFNDeDVRa0ZCU3l4TlFVRk1MRU5CUVZrc1RVRkJUU3hOUVVGT0xFTkJRVm9zUTBGQk1FSXNVVUZCTVVJc1EwRkJiVU1zUjBGQmJrTXNTVUZCTUVNc1lVRkJNVU1zUTBGRVJ6dHBRa0ZLVUR0VFFWQktPenM3UVVGNlRXRXNjVUpCTUU1cVFpeDVRa0ZCVVR0QlFVTktMREpDUVVGTkxFbEJRVTRzV1VGRVNUdEJRVVZLTEdWQlFVOHNTVUZCVUN4RFFVWkpPenM3UVVFeFRsTXNjVUpCSzA1cVFpd3lRa0ZCVXp0QlFVTk1MREpDUVVGTkxFdEJRVTRzV1VGRVN6dEJRVVZNTEdWQlFVOHNTVUZCVUN4RFFVWkxPenM3T3pzN096dEJRUzlPVVN4eFFrRjVUMnBDTERaRFFVRnJRanRCUVVOa0xHVkJRVTg3UVVGRFNDeHhRa0ZCVXl4RFFVRlVPMEZCUTBFc2MwSkJRVlVzUTBGQlZqdFRRVVpLTEVOQlJHTTdPenM3T3pzN096dEJRWHBQUkN4eFFrRnpVR3BDTEhGRVFVRnpRanRCUVVOc1FpeGxRVUZQTEZsQlFWQXNRMEZFYTBJN096dFhRWFJRVENJc0ltWnBiR1VpT2lKQlkzUnBiMjR1YW5NaUxDSnpiM1Z5WTJWU2IyOTBJam9pTDFWelpYSnpMMDFoZEhRdlUybDBaWE12Y0c5d2JXOTBhVzl1SWl3aWMyOTFjbU5sYzBOdmJuUmxiblFpT2xzaWFXMXdiM0owSUZCeWIyTmxjM01nWm5KdmJTQW5MaTR2Y0hKdlkyVnpjeTlRY205alpYTnpKenRjYm1sdGNHOXlkQ0I3SUhOdGIyOTBhQ3dnYzNCbFpXUlFaWEpUWldOdmJtUWdmU0JtY205dElDY3VMaTlwYm1NdlkyRnNZeWM3WEc1cGJYQnZjblFnZXlCbFlXTm9MQ0JwYzA5aWFpQjlJR1p5YjIwZ0p5NHVMMmx1WXk5MWRHbHNjeWM3WEc1Y2JtTnZibk4wSUVSRlJrRlZURlJmVUZKUFVDQTlJQ2RqZFhKeVpXNTBKenRjYm1OdmJuTjBJRTVWVFVWU1NVTkJURjlXUVV4VlJWTWdQU0JiUkVWR1FWVk1WRjlRVWs5UUxDQW5abkp2YlNjc0lDZDBieWNzSUNkdGFXNG5MQ0FuYldGNEoxMDdYRzVjYmk4cVhHNGdJQ0FnVFdGd0lHdGxlU0JuYVhabGJpQm5hWFpsYmlCemRHRjBaVTFoY0Z4dVhHNGdJQ0FnUUhCaGNtRnRJRnR6ZEhKcGJtZGRYRzRnSUNBZ1FIQmhjbUZ0SUZ0U1pXNWtaWEpsY2wxY2JpQWdJQ0JBY21WMGRYSnVJRnR6ZEhKcGJtZGRYRzRxTDF4dVkyOXVjM1FnYldGd1MyVjVJRDBnS0d0bGVTd2djbVZ1WkdWeVpYSXBJRDArSUNoeVpXNWtaWEpsY2lBbUppQnlaVzVrWlhKbGNpNXpkR0YwWlUxaGNDa2dQeUJ5Wlc1a1pYSmxjaTV6ZEdGMFpVMWhjRnRyWlhsZElIeDhJR3RsZVNBNklHdGxlVHRjYmx4dVpYaHdiM0owSUdSbFptRjFiSFFnWTJ4aGMzTWdRV04wYVc5dUlHVjRkR1Z1WkhNZ1VISnZZMlZ6Y3lCN1hHNGdJQ0FnWTI5dWMzUnlkV04wYjNJb2NISnZjSE1wSUh0Y2JpQWdJQ0FnSUNBZ2NISnZjSE11YzNSaGRHVWdQU0I3ZlR0Y2JpQWdJQ0FnSUNBZ2MzVndaWElvY0hKdmNITXBPMXh1WEc0Z0lDQWdJQ0FnSUM4dklFbHVhWFJoYkdselpTQnlaVzVrWlhKbGNpQmNiaUFnSUNBZ0lDQWdhV1lnS0hSb2FYTXViMjVTWlc1a1pYSWdKaVlnZEdocGN5NXZibEpsYm1SbGNpNXBibWwwS1NCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0IwYUdsekxtOXVVbVZ1WkdWeUxtbHVhWFFvZEdocGN5azdYRzRnSUNBZ0lDQWdJSDFjYmlBZ0lDQjlYRzVjYmlBZ0lDQXZLbHh1SUNBZ0lDQWdJQ0FqSUZObGRDQkJZM1JwYjI0Z2NISnZjR1Z5ZEdsbGMxeHVJQ0FnSUNBZ0lDQWpJeUJUWlhRZ2RYTmxjaTFrWldacGJtVmtJRUZqZEdsdmJpQndjbTl3WlhKMGFXVnpYRzVjYmlBZ0lDQWdJQ0FnUUhCaGNtRnRJRnR2WW1wbFkzUmRYRzRnSUNBZ0lDQWdJRUJ5WlhSMWNtNGdXMEZqZEdsdmJsMWNiaUFnSUNBcUwxeHVJQ0FnSUhObGRDaHdjbTl3Y3lrZ2UxeHVJQ0FnSUNBZ0lDQmpiMjV6ZENCN0lIWmhiSFZsY3l3Z0xpNHVjSEp2Y0hOVWIxTmxkQ0I5SUQwZ2NISnZjSE03WEc1Y2JpQWdJQ0FnSUNBZ2MzVndaWEl1YzJWMEtIQnliM0J6Vkc5VFpYUXBPMXh1WEc0Z0lDQWdJQ0FnSUhSb2FYTXVkbUZzZFdWeklEMGdkR2hwY3k1MllXeDFaWE1nZkh3Z2UzMDdYRzRnSUNBZ0lDQWdJSFJvYVhNdWRtRnNkV1ZMWlhseklEMGdkR2hwY3k1MllXeDFaVXRsZVhNZ2ZId2dXMTA3WEc0Z0lDQWdJQ0FnSUhSb2FYTXVjR0Z5Wlc1MFMyVjVjeUE5SUhSb2FYTXVjR0Z5Wlc1MFMyVjVjeUI4ZkNCYlhUdGNibHh1SUNBZ0lDQWdJQ0F2THlCTlpYSm5aU0J1WlhjZ1lIWmhiSFZsWUNCd2NtOXdaWEowYVdWeklIZHBkR2dnWlhocGMzUnBibWRjYmlBZ0lDQWdJQ0FnWTI5dWMzUWdZM1Z5Y21WdWRGWmhiSFZsY3lBOUlIUm9hWE11ZG1Gc2RXVnpPMXh1SUNBZ0lDQWdJQ0JqYjI1emRDQmtaV1poZFd4MFZtRnNkV1VnUFNCMGFHbHpMbWRsZEVSbFptRjFiSFJXWVd4MVpTZ3BPMXh1SUNBZ0lDQWdJQ0JqYjI1emRDQmtaV1poZFd4MFZtRnNkV1ZRY205d0lEMGdkR2hwY3k1blpYUkVaV1poZFd4MFZtRnNkV1ZRY205d0tDazdYRzRnSUNBZ0lDQWdJR052Ym5OMElISmxibVJsY21WeUlEMGdkR2hwY3k1dmJsSmxibVJsY2p0Y2JpQWdJQ0FnSUNBZ2JHVjBJSFpoYkhWbFZIbHdaVTFoY0NBOUlDaHlaVzVrWlhKbGNpQW1KaUJ5Wlc1a1pYSmxjaTUyWVd4MVpWUjVjR1ZOWVhBcElEOGdjbVZ1WkdWeVpYSXVkbUZzZFdWVWVYQmxUV0Z3SURvZ1ptRnNjMlU3WEc1Y2JpQWdJQ0FnSUNBZ0x5OGdTVzVvWlhKcGRDQjJZV3gxWlNCd2NtOXdaWEowYVdWeklHWnliMjBnWUhCeWIzQnpZRnh1SUNBZ0lDQWdJQ0JsWVdOb0tHUmxabUYxYkhSV1lXeDFaU3dnS0haaGJIVmxMQ0JyWlhrcElEMCtJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lHbG1JQ2h3Y205d2MxUnZVMlYwVzJ0bGVWMGdJVDA5SUhWdVpHVm1hVzVsWkNrZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lHUmxabUYxYkhSV1lXeDFaVnRyWlhsZElEMGdjSEp2Y0hOVWIxTmxkRnRyWlhsZE8xeHVJQ0FnSUNBZ0lDQWdJQ0FnZlZ4dUlDQWdJQ0FnSUNCOUtUdGNibHh1SUNBZ0lDQWdJQ0F2THlCRGFHVmpheUJoYkd3Z2RtRnNkV1Z6SUdGdVpDQnpjR3hwZENCcGJuUnZJR05vYVd4a0lIWmhiSFZsY3lCaGN5QnVaV05qWlhOellYSjVYRzRnSUNBZ0lDQWdJR1ZoWTJnb2RtRnNkV1Z6TENBb2RtRnNkV1VzSUd0bGVTa2dQVDRnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdZMjl1YzNRZ1pYaHBjM1JwYm1kV1lXeDFaU0E5SUdOMWNuSmxiblJXWVd4MVpYTmJhMlY1WFR0Y2JpQWdJQ0FnSUNBZ0lDQWdJR3hsZENCMllXeDFaVlI1Y0dVZ1BTQjdmVHRjYmlBZ0lDQWdJQ0FnSUNBZ0lHeGxkQ0J1WlhkV1lXeDFaU0E5SUh0OU8xeHVYRzRnSUNBZ0lDQWdJQ0FnSUNBdkx5QkRiMjUyWlhKMElHNWxkeUIyWVd4MVpTQnBiblJ2SUc5aWFtVmpkQ0JwWmlCcGRDQnBjMjRuZENCaGJISmxZV1I1WEc0Z0lDQWdJQ0FnSUNBZ0lDQnBaaUFvYVhOUFltb29kbUZzZFdVcEtTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdibVYzVm1Gc2RXVWdQU0IyWVd4MVpUdGNiaUFnSUNBZ0lDQWdJQ0FnSUgwZ1pXeHpaU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnYm1WM1ZtRnNkV1ZiWkdWbVlYVnNkRlpoYkhWbFVISnZjRjBnUFNCMllXeDFaVHRjYmlBZ0lDQWdJQ0FnSUNBZ0lIMWNibHh1SUNBZ0lDQWdJQ0FnSUNBZ0x5OGdTV1lnZG1Gc2RXVWdZV3h5WldGa2VTQmxlR2x6ZEhNc0lHTm9aV05ySUdadmNpQmhibVFnZFhObElHVjRhWE4wYVc1bklIUjVjR1ZjYmlBZ0lDQWdJQ0FnSUNBZ0lHbG1JQ2hsZUdsemRHbHVaMVpoYkhWbEtTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdibVYzVm1Gc2RXVWdQU0I3SUM0dUxtVjRhWE4wYVc1blZtRnNkV1VzSUM0dUxtNWxkMVpoYkhWbElIMDdYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdkbUZzZFdWVWVYQmxJRDBnWlhocGMzUnBibWRXWVd4MVpTNTBlWEJsTzF4dVhHNGdJQ0FnSUNBZ0lDQWdJQ0F2THlCSlppQjBhR2x6SUdseklHRWdibVYzSUhaaGJIVmxMQ0JqYUdWamF5Qm1iM0lnZEhsd1pWeHVJQ0FnSUNBZ0lDQWdJQ0FnZlNCbGJITmxJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0J1WlhkV1lXeDFaU0E5SUhzZ0xpNHVaR1ZtWVhWc2RGWmhiSFZsTENBdUxpNXVaWGRXWVd4MVpTQjlPMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQzh2SUVsbUlHOXVaU0JwY3lCbGVIQnNhV05wZEd4NUlHRnpjMmxuYm1Wa0xDQjFjMlVnZEdoaGRGeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lHbG1JQ2gyWVd4MVpTNTBlWEJsS1NCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJSFpoYkhWbFZIbHdaU0E5SUhaaGJIVmxMblI1Y0dVN1hHNWNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQXZMeUJQY2lCcFppQnZkWElnY21WdVpHVnlaWElnYUdGeklHRWdkSGx3WlUxaGNDd2dkWE5sSUhSb1lYUmNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQjlJR1ZzYzJVZ2FXWWdLSFpoYkhWbFZIbHdaVTFoY0NrZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0IyWVd4MVpWUjVjR1VnUFNCMllXeDFaVlI1Y0dWTllYQmJiV0Z3UzJWNUtHdGxlU3dnY21WdVpHVnlaWElwWFR0Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCOVhHNWNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQXZMeUJOWVhsaVpTQnlkVzRnWUhSbGMzUmdJRzl1SUdOdmJHOXlJR2hsY21WY2JpQWdJQ0FnSUNBZ0lDQWdJSDFjYmx4dUlDQWdJQ0FnSUNBZ0lDQWdMeThnU1dZZ2QyVW5kbVVnWjI5MElHRWdkbUZzZFdWVWVYQmxJSFJvWlc0Z2NISmxjSEp2WTJWemN5QjBhR1VnZG1Gc2RXVWdZV05qYjNKa2FXNW5iSGxjYmlBZ0lDQWdJQ0FnSUNBZ0lHbG1JQ2gyWVd4MVpWUjVjR1VwSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBdkx5QkpaaUIwYUdseklIWmhiSFZsSUhOb2IzVnNaQ0JpWlNCemNHeHBkQ3dnYzNCc2FYUmNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQnBaaUFvZG1Gc2RXVlVlWEJsTG5Od2JHbDBLU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lHTnZibk4wSUdOb2FXeGtWbUZzZFdWeklEMGdlMzA3WEc1Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdMeThnVEc5dmNDQnZkbVZ5SUc1MWJXVnlhV05oYkNCMllXeDFaWE1nWVc1a0lITndiR2wwSUdGdWVTQndjbVZ6Wlc1MFhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJRTVWVFVWU1NVTkJURjlXUVV4VlJWTXVabTl5UldGamFDZ29jSEp2Y0U1aGJXVXBJRDArSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUdsbUlDaHVaWGRXWVd4MVpTNW9ZWE5QZDI1UWNtOXdaWEowZVNod2NtOXdUbUZ0WlNrcElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0JqYjI1emRDQnpjR3hwZEZaaGJIVmxjeUE5SUhaaGJIVmxWSGx3WlM1emNHeHBkQ2h1WlhkV1lXeDFaVnR3Y205d1RtRnRaVjBwTzF4dVhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdaV0ZqYUNoemNHeHBkRlpoYkhWbGN5d2dLSE53YkdsMFZtRnNkV1VzSUhOd2JHbDBTMlY1S1NBOVBpQjdYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDOHZJRU55WldGMFpTQnVaWGNnWTJocGJHUWdkbUZzZFdVZ2FXWWdaRzlsYzI0bmRDQmxlR2x6ZEZ4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0JwWmlBb0lXTm9hV3hrVm1Gc2RXVnpXM053YkdsMFMyVjVYU2tnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ1kyaHBiR1JXWVd4MVpYTmJjM0JzYVhSTFpYbGRJRDBnZTMwN1hHNWNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJR2xtSUNoMllXeDFaVlI1Y0dVdVpHVm1ZWFZzZEZCeWIzQnpLU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdZMmhwYkdSV1lXeDFaWE5iYzNCc2FYUkxaWGxkSUQwZ0tIWmhiSFZsVkhsd1pTNWtaV1poZFd4MFVISnZjSE5iYzNCc2FYUkxaWGxkS1NBL0lIc2dMaTR1ZG1Gc2RXVlVlWEJsTG1SbFptRjFiSFJRY205d2MxdHpjR3hwZEV0bGVWMGdmU0E2SUhzZ0xpNHVkbUZzZFdWVWVYQmxMbVJsWm1GMWJIUlFjbTl3Y3lCOU8xeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdmVnh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQjlYRzVjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdZMmhwYkdSV1lXeDFaWE5iYzNCc2FYUkxaWGxkVzNCeWIzQk9ZVzFsWFNBOUlITndiR2wwVm1Gc2RXVTdYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnZlNrN1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCOVhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJSDBwTzF4dVhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJRzVsZDFaaGJIVmxMbU5vYVd4a2NtVnVJRDBnVzEwN1hHNWNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnTHk4Z1RtOTNJR3h2YjNBZ2RHaHliM1ZuYUNCaGJHd2dZMmhwYkdRZ2RtRnNkV1Z6SUdGdVpDQmhaR1FnZEdobGJTQmhjeUJ1YjNKdFlXd2dkbUZzZFdWelhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJR1ZoWTJnb1kyaHBiR1JXWVd4MVpYTXNJQ2hqYUdsc1pGWmhiSFZsTENCamFHbHNaRXRsZVNrZ1BUNGdlMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdZMjl1YzNRZ1kyOXRZbWx1WldSTFpYa2dQU0JyWlhrZ0t5QmphR2xzWkV0bGVUdGNibHh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdibVYzVm1Gc2RXVXVZMmhwYkdSeVpXNHVjSFZ6YUNoamIyMWlhVzVsWkV0bGVTazdYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQmpkWEp5Wlc1MFZtRnNkV1Z6VzJOdmJXSnBibVZrUzJWNVhTQTlJR05vYVd4a1ZtRnNkV1U3WEc1Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUdsbUlDaDBhR2x6TG5aaGJIVmxTMlY1Y3k1cGJtUmxlRTltS0dOdmJXSnBibVZrUzJWNUtTQTlQVDBnTFRFcElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0IwYUdsekxuWmhiSFZsUzJWNWN5NXdkWE5vS0dOdmJXSnBibVZrUzJWNUtUdGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lIMWNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnZlNrN1hHNWNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQXZMeUJQY2lCM1pTQnFkWE4wSUdoaGRtVWdaR1ZtWVhWc2RDQjJZV3gxWlNCd2NtOXdjeXdnYkc5aFpDQjBhRzl6WlNBZ0lGeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lIMGdaV3h6WlNCcFppQW9kbUZzZFdWVWVYQmxMbVJsWm1GMWJIUlFjbTl3Y3lrZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0J1WlhkV1lXeDFaU0E5SUhzZ0xpNHVkbUZzZFdWVWVYQmxMbVJsWm1GMWJIUlFjbTl3Y3l3Z0xpNHVibVYzVm1Gc2RXVWdmVHRjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0I5WEc0Z0lDQWdJQ0FnSUNBZ0lDQjlYRzVjYmlBZ0lDQWdJQ0FnSUNBZ0lDOHZJRlZ3WkdGMFpTQmhjSEJ5YjNCeWFXRjBaU0JzYVhOMGN5QjNhWFJvSUhaaGJIVmxJR3RsZVZ4dUlDQWdJQ0FnSUNBZ0lDQWdhV1lnS0c1bGQxWmhiSFZsTG1Ob2FXeGtjbVZ1S1NCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2FXWWdLSFJvYVhNdWNHRnlaVzUwUzJWNWN5NXBibVJsZUU5bUtHdGxlU2tnUFQwOUlDMHhLU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lIUm9hWE11Y0dGeVpXNTBTMlY1Y3k1d2RYTm9LR3RsZVNrN1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2ZWeHVJQ0FnSUNBZ0lDQWdJQ0FnZlNCbGJITmxJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0JwWmlBb2RHaHBjeTUyWVd4MVpVdGxlWE11YVc1a1pYaFBaaWhyWlhrcElEMDlQU0F0TVNrZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0IwYUdsekxuWmhiSFZsUzJWNWN5NXdkWE5vS0d0bGVTazdYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdmVnh1SUNBZ0lDQWdJQ0FnSUNBZ2ZWeHVYRzRnSUNBZ0lDQWdJQ0FnSUNCamRYSnlaVzUwVm1Gc2RXVnpXMnRsZVYwZ1BTQnVaWGRXWVd4MVpUdGNiaUFnSUNBZ0lDQWdmU2s3WEc1Y2JpQWdJQ0FnSUNBZ0x5OGdVSEpsWTI5dGNIVjBaU0IyWVd4MVpTQnJaWGtnWVc1a0lIQmhjbVZ1ZENCclpYa2diR1Z1WjNSb0lIUnZJSEJ5WlhabGJuUWdjR1Z5TFdaeVlXMWxJRzFsWVhOMWNtVnRaVzUwWEc0Z0lDQWdJQ0FnSUhSb2FYTXViblZ0Vm1Gc2RXVkxaWGx6SUQwZ2RHaHBjeTUyWVd4MVpVdGxlWE11YkdWdVozUm9PMXh1SUNBZ0lDQWdJQ0IwYUdsekxtNTFiVkJoY21WdWRFdGxlWE1nUFNCMGFHbHpMbkJoY21WdWRFdGxlWE11YkdWdVozUm9PMXh1WEc0Z0lDQWdJQ0FnSUhKbGRIVnliaUIwYUdsek8xeHVJQ0FnSUgxY2JseHVJQ0FnSUM4cVhHNGdJQ0FnSUNBZ0lFUmxZMmxrWlNCM2FHVjBhR1Z5SUhSb2FYTWdRV04wYVc5dUlIZHBiR3dnY21WdVpHVnlJRzl1SUc1bGVIUWdabkpoYldWY2JseHVJQ0FnSUNBZ0lDQkFjR0Z5WVcwZ1cwRmpkR2x2YmwxY2JpQWdJQ0FnSUNBZ1FIQmhjbUZ0SUZ0dWRXMWlaWEpkWEc0Z0lDQWdJQ0FnSUVCd1lYSmhiU0JiYm5WdFltVnlYVnh1SUNBZ0lDQWdJQ0JBY21WMGRYSnVJRnRpYjI5c1pXRnVYVG9nVW1WMGRYSnVJSFJ5ZFdVZ2RHOGdjbVZ1WkdWeVhHNGdJQ0FnS2k5Y2JpQWdJQ0IzYVd4c1VtVnVaR1Z5S0dGamRHbHZiaXdnWm5KaGJXVlRkR0Z0Y0N3Z1pXeGhjSE5sWkNrZ2UxeHVJQ0FnSUNBZ0lDQnNaWFFnYUdGelEyaGhibWRsWkNBOUlHWmhiSE5sTzF4dVhHNGdJQ0FnSUNBZ0lHWnZjaUFvYkdWMElHa2dQU0F3T3lCcElEd2dkR2hwY3k1dWRXMVdZV3gxWlV0bGVYTTdJR2tyS3lrZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnWTI5dWMzUWdhMlY1SUQwZ2RHaHBjeTUyWVd4MVpVdGxlWE5iYVYwN1hHNGdJQ0FnSUNBZ0lDQWdJQ0JqYjI1emRDQjJZV3gxWlNBOUlIUm9hWE11ZG1Gc2RXVnpXMnRsZVYwN1hHNWNiaUFnSUNBZ0lDQWdJQ0FnSUd4bGRDQjFjR1JoZEdWa1ZtRnNkV1VnUFNCMllXeDFaUzVqZFhKeVpXNTBPMXh1WEc0Z0lDQWdJQ0FnSUNBZ0lDQXZMeUJWY0dSaGRHVWdkbUZzZFdVZ1ltRnpaV1FnYjI0Z1lXTjBhWFpsSUdGamRHbHZibHh1SUNBZ0lDQWdJQ0FnSUNBZ2FXWWdLSFpoYkhWbExtRmpkR2x2YmlrZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lIVndaR0YwWldSV1lXeDFaU0E5SUhaaGJIVmxMbUZqZEdsdmJpNTJZV3gxWlhOYmEyVjVYUzVqZFhKeVpXNTBPMXh1SUNBZ0lDQWdJQ0FnSUNBZ2ZWeHVYRzRnSUNBZ0lDQWdJQ0FnSUNBdkx5QlNkVzRnZEhKaGJuTm1iM0p0SUdaMWJtTjBhVzl1SUNocFppQndjbVZ6Wlc1MEtWeHVJQ0FnSUNBZ0lDQWdJQ0FnYVdZZ0tIWmhiSFZsTG5SeVlXNXpabTl5YlNrZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lIVndaR0YwWldSV1lXeDFaU0E5SUhaaGJIVmxMblJ5WVc1elptOXliU2gxY0dSaGRHVmtWbUZzZFdVc0lHdGxlU3dnZEdocGN5azdYRzRnSUNBZ0lDQWdJQ0FnSUNCOVhHNWNiaUFnSUNBZ0lDQWdJQ0FnSUM4dklGTnRiMjkwYUNCMllXeDFaU0JwWmlCM1pTQm9ZWFpsSUhOdGIyOTBhR2x1WjF4dUlDQWdJQ0FnSUNBZ0lDQWdhV1lnS0haaGJIVmxMbk50YjI5MGFDa2dlMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJSFZ3WkdGMFpXUldZV3gxWlNBOUlITnRiMjkwYUNoMWNHUmhkR1ZrVm1Gc2RXVXNJSFpoYkhWbExtTjFjbkpsYm5Rc0lHVnNZWEJ6WldRc0lIWmhiSFZsTG5OdGIyOTBhQ2s3WEc0Z0lDQWdJQ0FnSUNBZ0lDQjlYRzVjYmlBZ0lDQWdJQ0FnSUNBZ0lDOHZJRkp2ZFc1a0lIWmhiSFZsWEc0Z0lDQWdJQ0FnSUNBZ0lDQnBaaUFvZG1Gc2RXVXVjbTkxYm1RcElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQjFjR1JoZEdWa1ZtRnNkV1VnUFNCTllYUm9Mbkp2ZFc1a0tIVndaR0YwWldSV1lXeDFaU2s3WEc0Z0lDQWdJQ0FnSUNBZ0lDQjlYRzVjYmlBZ0lDQWdJQ0FnSUNBZ0lDOHZJRU5oY0NCMGJ5QnRhVzVwYlhWdElIWmhiSFZsWEc0Z0lDQWdJQ0FnSUNBZ0lDQnBaaUFvZG1Gc2RXVXViV2x1SUNFOVBTQjFibVJsWm1sdVpXUXBJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0IxY0dSaGRHVmtWbUZzZFdVZ1BTQk5ZWFJvTG0xaGVDaDFjR1JoZEdWa1ZtRnNkV1VzSUhaaGJIVmxMbTFwYmlrN1hHNGdJQ0FnSUNBZ0lDQWdJQ0I5WEc1Y2JpQWdJQ0FnSUNBZ0lDQWdJQzh2SUVOaGNDQjBieUJ0WVhocGJYVnRJSFpoYkhWbFhHNGdJQ0FnSUNBZ0lDQWdJQ0JwWmlBb2RtRnNkV1V1YldGNElDRTlQU0IxYm1SbFptbHVaV1FwSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCMWNHUmhkR1ZrVm1Gc2RXVWdQU0JOWVhSb0xtMXBiaWgxY0dSaGRHVmtWbUZzZFdVc0lIWmhiSFZsTG0xaGVDazdYRzRnSUNBZ0lDQWdJQ0FnSUNCOVhHNWNiaUFnSUNBZ0lDQWdJQ0FnSUhaaGJIVmxMblpsYkc5amFYUjVJRDBnYzNCbFpXUlFaWEpUWldOdmJtUW9kWEJrWVhSbFpGWmhiSFZsSUMwZ2RtRnNkV1V1WTNWeWNtVnVkQ3dnWld4aGNITmxaQ2s3WEc1Y2JpQWdJQ0FnSUNBZ0lDQWdJR2xtSUNoMWNHUmhkR1ZrVm1Gc2RXVWdJVDA5SUhaaGJIVmxMbU4xY25KbGJuUXBJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0JvWVhORGFHRnVaMlZrSUQwZ2RISjFaVHRjYmlBZ0lDQWdJQ0FnSUNBZ0lIMWNibHh1SUNBZ0lDQWdJQ0FnSUNBZ2RtRnNkV1V1WTNWeWNtVnVkQ0E5SUhWd1pHRjBaV1JXWVd4MVpUdGNiaUFnSUNBZ0lDQWdmVnh1WEc0Z0lDQWdJQ0FnSUhKbGRIVnliaUFvZEdocGN5NXZia05zWldGdWRYQXBJRDhnZEhKMVpTQTZJR2hoYzBOb1lXNW5aV1E3WEc0Z0lDQWdmVnh1WEc0Z0lDQWdiMjVRY21WU1pXNWtaWElvS1NCN1hHNGdJQ0FnSUNBZ0lHWnZjaUFvYkdWMElHa2dQU0F3T3lCcElEd2dkR2hwY3k1dWRXMVdZV3gxWlV0bGVYTTdJR2tyS3lrZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnWTI5dWMzUWdhMlY1SUQwZ2RHaHBjeTUyWVd4MVpVdGxlWE5iYVYwN1hHNGdJQ0FnSUNBZ0lDQWdJQ0JqYjI1emRDQjJZV3gxWlNBOUlIUm9hWE11ZG1Gc2RXVnpXMnRsZVYwN1hHNWNiaUFnSUNBZ0lDQWdJQ0FnSUdOdmJuTjBJSFpoYkhWbFJtOXlVM1JoZEdVZ1BTQW9kbUZzZFdVdWRXNXBkQ2tnUHlCMllXeDFaUzVqZFhKeVpXNTBJQ3NnZG1Gc2RXVXVkVzVwZENBNklIWmhiSFZsTG1OMWNuSmxiblE3WEc1Y2JpQWdJQ0FnSUNBZ0lDQWdJQzh2SUVGa1pDQnpkSEpoYVdkb2RDQjBieUJ6ZEdGMFpTQnBaaUJ1YnlCd1lYSmxiblJjYmlBZ0lDQWdJQ0FnSUNBZ0lHbG1JQ2doZG1Gc2RXVXVjR0Z5Wlc1MEtTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdkR2hwY3k1emRHRjBaVnR0WVhCTFpYa29hMlY1TENCMGFHbHpMbTl1VW1WdVpHVnlLVjBnUFNCMllXeDFaVVp2Y2xOMFlYUmxPMXh1WEc0Z0lDQWdJQ0FnSUNBZ0lDQXZMeUJQY2lCaFpHUWdkRzhnY0dGeVpXNTBYRzRnSUNBZ0lDQWdJQ0FnSUNCOUlHVnNjMlVnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUhSb2FYTXVkbUZzZFdWelczWmhiSFZsTG5CaGNtVnVkRjB1WTJocGJHUnlaVzViYTJWNVhTQTlJSFpoYkhWbFJtOXlVM1JoZEdVN1hHNGdJQ0FnSUNBZ0lDQWdJQ0I5WEc0Z0lDQWdJQ0FnSUgxY2JpQWdJQ0I5WEc1Y2JpQWdJQ0J3WVhWelpTZ3BJSHRjYmlBZ0lDQWdJQ0FnYzNWd1pYSXVjM1J2Y0NncE8xeHVJQ0FnSUNBZ0lDQnlaWFIxY200Z2RHaHBjenRjYmlBZ0lDQjlYRzVjYmlBZ0lDQnlaWE4xYldVb0tTQjdYRzRnSUNBZ0lDQWdJSE4xY0dWeUxuTjBZWEowS0NrN1hHNGdJQ0FnSUNBZ0lISmxkSFZ5YmlCMGFHbHpPMXh1SUNBZ0lIMWNibHh1SUNBZ0lDOHFYRzRnSUNBZ0lDQWdJQ01nUjJWMElHUmxabUYxYkhRZ1FXTjBhVzl1SUhaaGJIVmxJSEJ5YjNCbGNuUnBaWE5jYmx4dUlDQWdJQ0FnSUNCQWNtVjBkWEp1SUZ0dlltcGxZM1JkWEc0Z0lDQWdLaTljYmlBZ0lDQm5aWFJFWldaaGRXeDBWbUZzZFdVb0tTQjdYRzRnSUNBZ0lDQWdJSEpsZEhWeWJpQjdYRzRnSUNBZ0lDQWdJQ0FnSUNCamRYSnlaVzUwT2lBd0xGeHVJQ0FnSUNBZ0lDQWdJQ0FnZG1Wc2IyTnBkSGs2SURCY2JpQWdJQ0FnSUNBZ2ZUdGNiaUFnSUNCOVhHNWNiaUFnSUNBdktseHVJQ0FnSUNBZ0lDQWpJRWRsZENCa1pXWmhkV3gwSUVGamRHbHZiaUIyWVd4MVpTQndjbTl3WlhKMGVTQnVZVzFsWEc0Z0lDQWdJQ0FnSUNNaklGTmxkQ0IwYUdseklHQjJZV3gxWldBZ2NISnZjR1Z5ZEhrZ2QyaGxiaUJ6WlhRZ1lYTWdkbUZzZFdVZ2FXNXpkR1ZoWkNCdlppQnZZbXBsWTNSY2JseHVJQ0FnSUNBZ0lDQkFjbVYwZFhKdUlGdHpkSEpwYm1kZFhHNGdJQ0FnS2k5Y2JpQWdJQ0JuWlhSRVpXWmhkV3gwVm1Gc2RXVlFjbTl3S0NrZ2UxeHVJQ0FnSUNBZ0lDQnlaWFIxY200Z1JFVkdRVlZNVkY5UVVrOVFPMXh1SUNBZ0lIMWNibjFjYmlKZGZRPT1cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2FjdGlvbnMvQWN0aW9uLmpzXG4gKiogbW9kdWxlIGlkID0gMzJcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF9JbnB1dDIgPSByZXF1aXJlKCcuL0lucHV0Jyk7XG5cbnZhciBfSW5wdXQzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfSW5wdXQyKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoIXNlbGYpIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBjYWxsICYmICh0eXBlb2YgY2FsbCA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSA/IGNhbGwgOiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90IFwiICsgdHlwZW9mIHN1cGVyQ2xhc3MpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIGVudW1lcmFibGU6IGZhbHNlLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIDogc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzczsgfVxuXG52YXIgUG9pbnRlciA9IGZ1bmN0aW9uIChfSW5wdXQpIHtcbiAgICBfaW5oZXJpdHMoUG9pbnRlciwgX0lucHV0KTtcblxuICAgIGZ1bmN0aW9uIFBvaW50ZXIoaW5pdGlhbFN0YXRlLCBtb3ZlRXZlbnQsIGV2ZW50VG9Qb2ludCkge1xuICAgICAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgUG9pbnRlcik7XG5cbiAgICAgICAgdmFyIF90aGlzID0gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgX0lucHV0LmNhbGwodGhpcywgaW5pdGlhbFN0YXRlKSk7XG5cbiAgICAgICAgX3RoaXMuZXZlbnRUb1BvaW50ID0gZXZlbnRUb1BvaW50O1xuICAgICAgICBfdGhpcy5tb3ZlRXZlbnQgPSBtb3ZlRXZlbnQ7XG4gICAgICAgIHJldHVybiBfdGhpcztcbiAgICB9XG5cbiAgICBQb2ludGVyLnByb3RvdHlwZS5sYXRlc3QgPSBmdW5jdGlvbiBsYXRlc3QoZSkge1xuICAgICAgICBfSW5wdXQucHJvdG90eXBlLmxhdGVzdC5jYWxsKHRoaXMsIHRoaXMuZXZlbnRUb1BvaW50KGUpKTtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH07XG5cbiAgICBQb2ludGVyLnByb3RvdHlwZS5zdGFydCA9IGZ1bmN0aW9uIHN0YXJ0KCkge1xuICAgICAgICBfSW5wdXQucHJvdG90eXBlLnN0YXJ0LmNhbGwodGhpcyk7XG4gICAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5hZGRFdmVudExpc3RlbmVyKHRoaXMubW92ZUV2ZW50LCB0aGlzLmxhdGVzdCk7XG4gICAgfTtcblxuICAgIFBvaW50ZXIucHJvdG90eXBlLnN0b3AgPSBmdW5jdGlvbiBzdG9wKCkge1xuICAgICAgICBfSW5wdXQucHJvdG90eXBlLnN0b3AuY2FsbCh0aGlzKTtcbiAgICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIodGhpcy5tb3ZlRXZlbnQsIHRoaXMubGF0ZXN0KTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIFBvaW50ZXI7XG59KF9JbnB1dDMuZGVmYXVsdCk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IFBvaW50ZXI7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5OeVl5OXBibkIxZEM5UWIybHVkR1Z5TG1weklsMHNJbTVoYldWeklqcGJYU3dpYldGd2NHbHVaM01pT2lJN096czdPenM3T3pzN096czdPenM3U1VGRmNVSTdPenRCUVVOcVFpeGhRVVJwUWl4UFFVTnFRaXhEUVVGWkxGbEJRVm9zUlVGQk1FSXNVMEZCTVVJc1JVRkJjVU1zV1VGQmNrTXNSVUZCYlVRN09FSkJSR3hETEZOQlEydERPenR4UkVGREwwTXNhMEpCUVUwc1dVRkJUaXhIUVVRclF6czdRVUZGTDBNc1kwRkJTeXhaUVVGTUxFZEJRVzlDTEZsQlFYQkNMRU5CUml0RE8wRkJSeTlETEdOQlFVc3NVMEZCVEN4SFFVRnBRaXhUUVVGcVFpeERRVWdyUXpzN1MwRkJia1E3TzBGQlJHbENMSE5DUVU5cVFpeDVRa0ZCVHl4SFFVRkhPMEZCUTA0c2VVSkJRVTBzVFVGQlRpeFpRVUZoTEV0QlFVc3NXVUZCVEN4RFFVRnJRaXhEUVVGc1FpeERRVUZpTEVWQlJFMDdRVUZGVGl4VlFVRkZMR05CUVVZc1IwRkdUVHM3TzBGQlVFOHNjMEpCV1dwQ0xIbENRVUZSTzBGQlEwb3NlVUpCUVUwc1MwRkJUaXhaUVVSSk8wRkJSVW9zYVVKQlFWTXNaVUZCVkN4RFFVRjVRaXhuUWtGQmVrSXNRMEZCTUVNc1MwRkJTeXhUUVVGTUxFVkJRV2RDTEV0QlFVc3NUVUZCVEN4RFFVRXhSQ3hEUVVaSk96czdRVUZhVXl4elFrRnBRbXBDTEhWQ1FVRlBPMEZCUTBnc2VVSkJRVTBzU1VGQlRpeFpRVVJITzBGQlJVZ3NhVUpCUVZNc1pVRkJWQ3hEUVVGNVFpeHRRa0ZCZWtJc1EwRkJOa01zUzBGQlN5eFRRVUZNTEVWQlFXZENMRXRCUVVzc1RVRkJUQ3hEUVVFM1JDeERRVVpIT3pzN1YwRnFRbFVpTENKbWFXeGxJam9pVUc5cGJuUmxjaTVxY3lJc0luTnZkWEpqWlZKdmIzUWlPaUl2VlhObGNuTXZUV0YwZEM5VGFYUmxjeTl3YjNCdGIzUnBiMjRpTENKemIzVnlZMlZ6UTI5dWRHVnVkQ0k2V3lKcGJYQnZjblFnU1c1d2RYUWdabkp2YlNBbkxpOUpibkIxZENjN1hHNWNibVY0Y0c5eWRDQmtaV1poZFd4MElHTnNZWE56SUZCdmFXNTBaWElnWlhoMFpXNWtjeUJKYm5CMWRDQjdYRzRnSUNBZ1kyOXVjM1J5ZFdOMGIzSW9hVzVwZEdsaGJGTjBZWFJsTENCdGIzWmxSWFpsYm5Rc0lHVjJaVzUwVkc5UWIybHVkQ2tnZTF4dUlDQWdJQ0FnSUNCemRYQmxjaWhwYm1sMGFXRnNVM1JoZEdVcE8xeHVJQ0FnSUNBZ0lDQjBhR2x6TG1WMlpXNTBWRzlRYjJsdWRDQTlJR1YyWlc1MFZHOVFiMmx1ZER0Y2JpQWdJQ0FnSUNBZ2RHaHBjeTV0YjNabFJYWmxiblFnUFNCdGIzWmxSWFpsYm5RN1hHNGdJQ0FnZlZ4dVhHNGdJQ0FnYkdGMFpYTjBLR1VwSUh0Y2JpQWdJQ0FnSUNBZ2MzVndaWEl1YkdGMFpYTjBLSFJvYVhNdVpYWmxiblJVYjFCdmFXNTBLR1VwS1R0Y2JpQWdJQ0FnSUNBZ1pTNXdjbVYyWlc1MFJHVm1ZWFZzZENncE8xeHVJQ0FnSUgxY2JseHVJQ0FnSUhOMFlYSjBLQ2tnZTF4dUlDQWdJQ0FnSUNCemRYQmxjaTV6ZEdGeWRDZ3BPMXh1SUNBZ0lDQWdJQ0JrYjJOMWJXVnVkQzVrYjJOMWJXVnVkRVZzWlcxbGJuUXVZV1JrUlhabGJuUk1hWE4wWlc1bGNpaDBhR2x6TG0xdmRtVkZkbVZ1ZEN3Z2RHaHBjeTVzWVhSbGMzUXBPMXh1SUNBZ0lIMWNibHh1SUNBZ0lITjBiM0FvS1NCN1hHNGdJQ0FnSUNBZ0lITjFjR1Z5TG5OMGIzQW9LVHRjYmlBZ0lDQWdJQ0FnWkc5amRXMWxiblF1Wkc5amRXMWxiblJGYkdWdFpXNTBMbkpsYlc5MlpVVjJaVzUwVEdsemRHVnVaWElvZEdocGN5NXRiM1psUlhabGJuUXNJSFJvYVhNdWJHRjBaWE4wS1R0Y2JpQWdJQ0I5WEc1OVhHNGlYWDA9XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9pbnB1dC9Qb2ludGVyLmpzXG4gKiogbW9kdWxlIGlkID0gMzNcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHMuZ2V0UHJvY2Vzc0lkID0gZ2V0UHJvY2Vzc0lkO1xuZXhwb3J0cy5hY3RpdmF0ZSA9IGFjdGl2YXRlO1xuZXhwb3J0cy5kZWFjdGl2YXRlID0gZGVhY3RpdmF0ZTtcblxudmFyIF90aW1lciA9IHJlcXVpcmUoJy4vdGltZXInKTtcblxudmFyIF90aW1lcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF90aW1lcik7XG5cbnZhciBfdGljayA9IHJlcXVpcmUoJy4vdGljaycpO1xuXG52YXIgX3RpY2syID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfdGljayk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbnZhciBwcm9jZXNzT3JkZXIgPSBbeyBzdGVwOiAnb25GcmFtZVN0YXJ0JyB9LCB7IHN0ZXA6ICdvblVwZGF0ZScgfSwgeyBzdGVwOiAnd2lsbFJlbmRlcicsIGRlY2lkZVJlbmRlcjogdHJ1ZSB9LCB7IHN0ZXA6ICdvblJlbmRlcicsIGlzUmVuZGVyOiB0cnVlIH0sIHsgc3RlcDogJ3Bvc3RSZW5kZXInLCBpc1JlbmRlcjogdHJ1ZSB9LCB7IHN0ZXA6ICdvbkZyYW1lRW5kJyB9LCB7IHN0ZXA6ICdvbkNsZWFudXAnIH1dO1xudmFyIG51bVByb2Nlc3NTdGVwcyA9IHByb2Nlc3NPcmRlci5sZW5ndGg7XG5cbi8vIFtib29sZWFuXTogSXMgbG9vcCBydW5uaW5nP1xudmFyIGlzUnVubmluZyA9IGZhbHNlO1xuXG4vLyBbaW50XTogUHJvY2VzcyBJRCwgaW5jcmVtZW50ZWQgZm9yIGVhY2ggbmV3IHByb2Nlc3NcbnZhciBjdXJyZW50UHJvY2Vzc0lkID0gMDtcblxuLy8gW2ludF06IE51bWJlciBvZiBydW5uaW5nIHByb2Nlc3Nlc1xudmFyIHJ1bm5pbmdDb3VudCA9IDA7XG5cbi8vIFtpbnRdOiBOdW1iZXIgb2YgcnVubmluZyBub24tYmFja2dyb3VuZCBwcm9jZXNzZXNcbnZhciBhY3RpdmVDb3VudCA9IDA7XG5cbi8vIFthcnJheV06IEFycmF5IG9mIGFjdGl2ZSBwcm9jZXNzIElEc1xudmFyIHJ1bm5pbmdJZHMgPSBbXTtcblxuLy8gW29iamVjdF06IE1hcCBvZiBhY3RpdmUgcHJvY2Vzc2VzXG52YXIgcnVubmluZ1Byb2Nlc3NlcyA9IHt9O1xuXG4vLyBbYXJyYXldOiBBcnJheSBvZiBwcm9jZXNzIElEcyBxdWV1ZWQgZm9yIGFjdGl2YXRpb25cbnZhciBhY3RpdmF0ZVF1ZXVlID0gW107XG5cbi8vIFthcnJheV06IEFycmF5IG9mIHByb2Nlc3MgSURzIHF1ZXVlZCBmb3IgZGVhY3RpdmF0aW9uXG52YXIgZGVhY3RpdmF0ZVF1ZXVlID0gW107XG5cbi8qXG4gICAgVXBkYXRlIGxpc3RzXG5cbiAgICBAcGFyYW0gW251bWJlcl1cbiAgICBAcGFyYW0gW2FycmF5XVxuICAgIEBwYXJhbSBbYXJyYXldXG4qL1xuZnVuY3Rpb24gdXBkYXRlTGlzdHMoaWQsIGluTGlzdCwgb3V0TGlzdCkge1xuICAgIHZhciBpblBvc2l0aW9uID0gaW5MaXN0LmluZGV4T2YoaW5MaXN0KTtcbiAgICB2YXIgb3V0UG9zaXRpb24gPSBvdXRMaXN0LmluZGV4T2Yob3V0TGlzdCk7XG5cbiAgICBpZiAoaW5Qb3NpdGlvbiA9PT0gLTEpIHtcbiAgICAgICAgaW5MaXN0LnB1c2goaWQpO1xuICAgIH1cblxuICAgIGlmIChvdXRQb3NpdGlvbiA+IC0xKSB7XG4gICAgICAgIG91dExpc3Quc3BsaWNlKG91dFBvc2l0aW9uLCAxKTtcbiAgICB9XG59XG5cbi8qXG4gICAgVXBkYXRlIHJ1bm5pbmdcblxuICAgIFtib29sZWFuXTogYHRydWVgIHRvIGFkZFxuICAgIFtib29sZWFuXTogYHRydWVgIGlmIGxhenlcbiovXG5mdW5jdGlvbiB1cGRhdGVDb3VudChhZGQsIGlzTGF6eSkge1xuICAgIHZhciBtb2RpZnkgPSBhZGQgPyAxIDogLTE7XG5cbiAgICBydW5uaW5nQ291bnQgKz0gbW9kaWZ5O1xuXG4gICAgaWYgKCFpc0xhenkpIHtcbiAgICAgICAgYWN0aXZlQ291bnQgKz0gbW9kaWZ5O1xuICAgIH1cbn1cblxuZnVuY3Rpb24gcmVzb2x2ZVF1ZXVlcygpIHtcbiAgICB2YXIgYWN0aXZhdGVRdWV1ZUxlbmd0aCA9IGFjdGl2YXRlUXVldWUubGVuZ3RoO1xuICAgIHZhciBkZWFjdGl2YXRlUXVldWVMZW5ndGggPSBkZWFjdGl2YXRlUXVldWUubGVuZ3RoO1xuXG4gICAgd2hpbGUgKGRlYWN0aXZhdGVRdWV1ZS0tKSB7XG4gICAgICAgIHZhciBpZCA9IGRlYWN0aXZhdGVRdWV1ZVtkZWFjdGl2YXRlUXVldWVMZW5ndGhdO1xuICAgICAgICB2YXIgYWN0aXZlSWRJbmRleCA9IHJ1bm5pbmdJZHMuaW5kZXhPZihpZCk7XG4gICAgICAgIHZhciBwcm9jZXNzID0gcnVubmluZ1Byb2Nlc3Nlc1tpZF07XG5cbiAgICAgICAgaWYgKGFjdGl2ZUlkSW5kZXggPiAtMSkge1xuICAgICAgICAgICAgcnVubmluZ0lkcy5zcGxpY2UoYWN0aXZlSWRJbmRleCwgMSk7XG4gICAgICAgICAgICB1cGRhdGVDb3VudChmYWxzZSwgcHJvY2Vzcy5pc0xhenkpO1xuICAgICAgICAgICAgcnVubmluZ1Byb2Nlc3Nlc1tpZF0gPSB1bmRlZmluZWQ7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAocHJvY2Vzcy5vbkVuZCkge1xuICAgICAgICAgICAgcHJvY2Vzcy5vbkVuZChwcm9jZXNzKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHdoaWxlIChhY3RpdmF0ZVF1ZXVlTGVuZ3RoLS0pIHtcbiAgICAgICAgdmFyIGlkID0gYWN0aXZhdGVRdWV1ZVthY3RpdmF0ZVF1ZXVlTGVuZ3RoXTtcbiAgICAgICAgdmFyIGFjdGl2ZUlkSW5kZXggPSBydW5uaW5nSWRzLmluZGV4T2YoaWQpO1xuICAgICAgICB2YXIgcHJvY2VzcyA9IHJ1bm5pbmdQcm9jZXNzZXNbaWRdO1xuXG4gICAgICAgIGlmIChhY3RpdmVJZEluZGV4ID09PSAtMSkge1xuICAgICAgICAgICAgcnVubmluZ0lkcy5wdXNoKGlkKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHVwZGF0ZUNvdW50KHRydWUsIHByb2Nlc3MuaXNMYXp5KTtcblxuICAgICAgICBpZiAocHJvY2Vzcy5vblN0YXJ0KSB7XG4gICAgICAgICAgICBwcm9jZXNzLm9uU3RhcnQocHJvY2Vzcyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBhY3RpdmF0ZVF1ZXVlID0gW107XG4gICAgZGVhY3RpdmF0ZVF1ZXVlID0gW107XG59XG5cbi8qXG4gICAgW3RpbWVzdGFtcF06IEZyYW1lIHRpbWVzdGFtcFxuICAgIFtpbnRdOiBUaW1lIHNpbmNlIGxhc3QgZnJhbWVcbiovXG5mdW5jdGlvbiBmaXJlQWxsKGZyYW1lU3RhbXAsIGVsYXBzZWQpIHtcbiAgICB2YXIgbWV0aG9kID0ge307XG4gICAgdmFyIG1ldGhvZE5hbWUgPSAnJztcbiAgICB2YXIgaXNSZW5kZXJTdGVwID0gZmFsc2U7XG4gICAgdmFyIHByb2Nlc3MgPSB1bmRlZmluZWQ7XG4gICAgdmFyIHJlc3VsdCA9IHVuZGVmaW5lZDtcblxuICAgIHJlc29sdmVRdWV1ZXMoKTtcblxuICAgIHZhciBudW1SdW5uaW5nID0gcnVubmluZ0NvdW50O1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBudW1Qcm9jZXNzU3RlcHM7IGkrKykge1xuICAgICAgICBtZXRob2QgPSBwcm9jZXNzT3JkZXJbaV07XG4gICAgICAgIG1ldGhvZE5hbWUgPSBtZXRob2Quc3RlcDtcbiAgICAgICAgaXNSZW5kZXJTdGVwID0gbWV0aG9kLmlzUmVuZGVyID8gdHJ1ZSA6IGZhbHNlO1xuXG4gICAgICAgIGZvciAodmFyIGkyID0gMDsgaTIgPCBudW1SdW5uaW5nOyBpMisrKSB7XG4gICAgICAgICAgICBwcm9jZXNzID0gcnVubmluZ1Byb2Nlc3Nlc1tydW5uaW5nSWRzW2kyXV07XG5cbiAgICAgICAgICAgIGlmIChwcm9jZXNzICYmIHByb2Nlc3NbbWV0aG9kTmFtZV0gJiYgKCFpc1JlbmRlclN0ZXAgfHwgaXNSZW5kZXJTdGVwICYmIHByb2Nlc3MuX3JlbmRlclRoaXNGcmFtZSA9PT0gdHJ1ZSkpIHtcbiAgICAgICAgICAgICAgICByZXN1bHQgPSBwcm9jZXNzW21ldGhvZE5hbWVdLmNhbGwocHJvY2VzcywgcHJvY2VzcywgZnJhbWVTdGFtcCwgZWxhcHNlZCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChtZXRob2QuZGVjaWRlUmVuZGVyKSB7XG4gICAgICAgICAgICAgICAgcHJvY2Vzcy5fcmVuZGVyVGhpc0ZyYW1lID0gcHJvY2Vzc1ttZXRob2ROYW1lXSAmJiByZXN1bHQgIT09IHRydWUgPyBmYWxzZSA6IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gYWN0aXZlQ291bnQgPyB0cnVlIDogZmFsc2U7XG59XG5cbi8vIEZ1bmN0aW9uIHRvIGZpcmUgZXZlcnkgZnJhbWVcbmZ1bmN0aW9uIGZyYW1lKCkge1xuICAgICgwLCBfdGljazIuZGVmYXVsdCkoZnVuY3Rpb24gKGZyYW1lU3RhbXApIHtcbiAgICAgICAgaWYgKGlzUnVubmluZykge1xuICAgICAgICAgICAgZnJhbWUoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIF90aW1lcjIuZGVmYXVsdC51cGRhdGUoZnJhbWVTdGFtcCk7XG4gICAgICAgIGlzUnVubmluZyA9IGZpcmVBbGwoZnJhbWVTdGFtcCwgX3RpbWVyMi5kZWZhdWx0LmdldEVsYXBzZWQoKSk7XG4gICAgfSk7XG59XG5cbi8vIFN0YXJ0IGxvb3BcbmZ1bmN0aW9uIHN0YXJ0KCkge1xuICAgIGlmICghaXNSdW5uaW5nKSB7XG4gICAgICAgIF90aW1lcjIuZGVmYXVsdC5zdGFydCgpO1xuICAgICAgICBpc1J1bm5pbmcgPSB0cnVlO1xuICAgICAgICBmcmFtZSgpO1xuICAgIH1cbn1cblxuLy8gRXhwb3J0c1xuZnVuY3Rpb24gZ2V0UHJvY2Vzc0lkKCkge1xuICAgIHJldHVybiBjdXJyZW50UHJvY2Vzc0lkKys7XG59XG5cbi8qXG4gICAgW2ludF06IFByb2Nlc3MgSUQgdG8gYWN0aXZhdGVcbiAgICBbUHJvY2Vzc106IFByb2Nlc3MgdG8gYWN0aXZhdGVcbiovXG5mdW5jdGlvbiBhY3RpdmF0ZShpZCwgcHJvY2Vzcykge1xuICAgIHVwZGF0ZUxpc3RzKGlkLCBhY3RpdmF0ZVF1ZXVlLCBkZWFjdGl2YXRlUXVldWUpO1xuXG4gICAgcnVubmluZ1Byb2Nlc3Nlc1tpZF0gPSBwcm9jZXNzO1xuXG4gICAgaWYgKCFpc1J1bm5pbmcpIHtcbiAgICAgICAgc3RhcnQoKTtcbiAgICB9XG59XG5cbi8qXG4gICAgW2ludF06IFByb2Nlc3MgSUQgdG8gZGVhY3RpdmF0ZVxuKi9cbmZ1bmN0aW9uIGRlYWN0aXZhdGUoaWQpIHtcbiAgICB1cGRhdGVMaXN0cyhpZCwgZGVhY3RpdmF0ZVF1ZXVlLCBhY3RpdmF0ZVF1ZXVlKTtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbk55WXk5d2NtOWpaWE56TDJ4dmIzQXVhbk1pWFN3aWJtRnRaWE1pT2x0ZExDSnRZWEJ3YVc1bmN5STZJanM3TzFGQk5FdG5RanRSUVZGQk8xRkJZVUU3T3pzN096czdPenM3T3p0QlFUbE1hRUlzU1VGQlRTeGxRVUZsTEVOQlEycENMRVZCUVVVc1RVRkJUU3hqUVVGT0xFVkJSR1VzUlVGRmFrSXNSVUZCUlN4TlFVRk5MRlZCUVU0c1JVRkdaU3hGUVVkcVFpeEZRVUZGTEUxQlFVMHNXVUZCVGl4RlFVRnZRaXhqUVVGakxFbEJRV1FzUlVGSVRDeEZRVWxxUWl4RlFVRkZMRTFCUVUwc1ZVRkJUaXhGUVVGclFpeFZRVUZWTEVsQlFWWXNSVUZLU0N4RlFVdHFRaXhGUVVGRkxFMUJRVTBzV1VGQlRpeEZRVUZ2UWl4VlFVRlZMRWxCUVZZc1JVRk1UQ3hGUVUxcVFpeEZRVUZGTEUxQlFVMHNXVUZCVGl4RlFVNWxMRVZCVDJwQ0xFVkJRVVVzVFVGQlRTeFhRVUZPTEVWQlVHVXNRMEZCWmp0QlFWTk9MRWxCUVUwc2EwSkJRV3RDTEdGQlFXRXNUVUZCWWpzN08wRkJSM2hDTEVsQlFVa3NXVUZCV1N4TFFVRmFPenM3UVVGSFNpeEpRVUZKTEcxQ1FVRnRRaXhEUVVGdVFqczdPMEZCUjBvc1NVRkJTU3hsUVVGbExFTkJRV1k3T3p0QlFVZEtMRWxCUVVrc1kwRkJZeXhEUVVGa096czdRVUZIU2l4SlFVRk5MR0ZCUVdFc1JVRkJZanM3TzBGQlIwNHNTVUZCVFN4dFFrRkJiVUlzUlVGQmJrSTdPenRCUVVkT0xFbEJRVWtzWjBKQlFXZENMRVZCUVdoQ096czdRVUZIU2l4SlFVRkpMR3RDUVVGclFpeEZRVUZzUWpzN096czdPenM3TzBGQlUwb3NVMEZCVXl4WFFVRlVMRU5CUVhGQ0xFVkJRWEpDTEVWQlFYbENMRTFCUVhwQ0xFVkJRV2xETEU5QlFXcERMRVZCUVRCRE8wRkJRM1JETEZGQlFVMHNZVUZCWVN4UFFVRlBMRTlCUVZBc1EwRkJaU3hOUVVGbUxFTkJRV0lzUTBGRVowTTdRVUZGZEVNc1VVRkJUU3hqUVVGakxGRkJRVkVzVDBGQlVpeERRVUZuUWl4UFFVRm9RaXhEUVVGa0xFTkJSbWRET3p0QlFVbDBReXhSUVVGSkxHVkJRV1VzUTBGQlF5eERRVUZFTEVWQlFVazdRVUZEYmtJc1pVRkJUeXhKUVVGUUxFTkJRVmtzUlVGQldpeEZRVVJ0UWp0TFFVRjJRanM3UVVGSlFTeFJRVUZKTEdOQlFXTXNRMEZCUXl4RFFVRkVMRVZCUVVrN1FVRkRiRUlzWjBKQlFWRXNUVUZCVWl4RFFVRmxMRmRCUVdZc1JVRkJORUlzUTBGQk5VSXNSVUZFYTBJN1MwRkJkRUk3UTBGU1NqczdPenM3T3pzN1FVRnRRa0VzVTBGQlV5eFhRVUZVTEVOQlFYRkNMRWRCUVhKQ0xFVkJRVEJDTEUxQlFURkNMRVZCUVd0RE8wRkJRemxDTEZGQlFVMHNVMEZCVXl4TlFVRk5MRU5CUVU0c1IwRkJWU3hEUVVGRExFTkJRVVFzUTBGRVN6czdRVUZIT1VJc2IwSkJRV2RDTEUxQlFXaENMRU5CU0RoQ096dEJRVXM1UWl4UlFVRkpMRU5CUVVNc1RVRkJSQ3hGUVVGVE8wRkJRMVFzZFVKQlFXVXNUVUZCWml4RFFVUlRPMHRCUVdJN1EwRk1TanM3UVVGVlFTeFRRVUZUTEdGQlFWUXNSMEZCZVVJN1FVRkRja0lzVVVGQlNTeHpRa0ZCYzBJc1kwRkJZeXhOUVVGa0xFTkJSRXc3UVVGRmNrSXNVVUZCU1N4M1FrRkJkMElzWjBKQlFXZENMRTFCUVdoQ0xFTkJSbEE3TzBGQlNYSkNMRmRCUVU4c2FVSkJRVkFzUlVGQk1FSTdRVUZEZEVJc1dVRkJUU3hMUVVGTExHZENRVUZuUWl4eFFrRkJhRUlzUTBGQlRDeERRVVJuUWp0QlFVVjBRaXhaUVVGTkxHZENRVUZuUWl4WFFVRlhMRTlCUVZnc1EwRkJiVUlzUlVGQmJrSXNRMEZCYUVJc1EwRkdaMEk3UVVGSGRFSXNXVUZCVFN4VlFVRlZMR2xDUVVGcFFpeEZRVUZxUWl4RFFVRldMRU5CU0dkQ096dEJRVXQwUWl4WlFVRkpMR2RDUVVGblFpeERRVUZETEVOQlFVUXNSVUZCU1R0QlFVTndRaXgxUWtGQlZ5eE5RVUZZTEVOQlFXdENMR0ZCUVd4Q0xFVkJRV2xETEVOQlFXcERMRVZCUkc5Q08wRkJSWEJDTEhkQ1FVRlpMRXRCUVZvc1JVRkJiVUlzVVVGQlVTeE5RVUZTTEVOQlFXNUNMRU5CUm05Q08wRkJSM0JDTERaQ1FVRnBRaXhGUVVGcVFpeEpRVUYxUWl4VFFVRjJRaXhEUVVodlFqdFRRVUY0UWpzN1FVRk5RU3haUVVGSkxGRkJRVkVzUzBGQlVpeEZRVUZsTzBGQlEyWXNiMEpCUVZFc1MwRkJVaXhEUVVGakxFOUJRV1FzUlVGRVpUdFRRVUZ1UWp0TFFWaEtPenRCUVdkQ1FTeFhRVUZQTEhGQ1FVRlFMRVZCUVRoQ08wRkJRekZDTEZsQlFVMHNTMEZCU3l4alFVRmpMRzFDUVVGa0xFTkJRVXdzUTBGRWIwSTdRVUZGTVVJc1dVRkJUU3huUWtGQlowSXNWMEZCVnl4UFFVRllMRU5CUVcxQ0xFVkJRVzVDTEVOQlFXaENMRU5CUm05Q08wRkJSekZDTEZsQlFVMHNWVUZCVlN4cFFrRkJhVUlzUlVGQmFrSXNRMEZCVml4RFFVaHZRanM3UVVGTE1VSXNXVUZCU1N4clFrRkJhMElzUTBGQlF5eERRVUZFTEVWQlFVazdRVUZEZEVJc2RVSkJRVmNzU1VGQldDeERRVUZuUWl4RlFVRm9RaXhGUVVSelFqdFRRVUV4UWpzN1FVRkpRU3h2UWtGQldTeEpRVUZhTEVWQlFXdENMRkZCUVZFc1RVRkJVaXhEUVVGc1FpeERRVlF3UWpzN1FVRlhNVUlzV1VGQlNTeFJRVUZSTEU5QlFWSXNSVUZCYVVJN1FVRkRha0lzYjBKQlFWRXNUMEZCVWl4RFFVRm5RaXhQUVVGb1FpeEZRVVJwUWp0VFFVRnlRanRMUVZoS096dEJRV2RDUVN4dlFrRkJaMElzUlVGQmFFSXNRMEZ3UTNGQ08wRkJjVU55UWl4elFrRkJhMElzUlVGQmJFSXNRMEZ5UTNGQ08wTkJRWHBDT3pzN096czdRVUUwUTBFc1UwRkJVeXhQUVVGVUxFTkJRV2xDTEZWQlFXcENMRVZCUVRaQ0xFOUJRVGRDTEVWQlFYTkRPMEZCUTJ4RExGRkJRVWtzVTBGQlV5eEZRVUZVTEVOQlJEaENPMEZCUld4RExGRkJRVWtzWVVGQllTeEZRVUZpTEVOQlJqaENPMEZCUjJ4RExGRkJRVWtzWlVGQlpTeExRVUZtTEVOQlNEaENPMEZCU1d4RExGRkJRVWtzYlVKQlFVb3NRMEZLYTBNN1FVRkxiRU1zVVVGQlNTeHJRa0ZCU2l4RFFVeHJRenM3UVVGUGJFTXNiMEpCVUd0RE96dEJRVk5zUXl4UlFVRk5MR0ZCUVdFc1dVRkJZaXhEUVZRMFFqczdRVUZYYkVNc1UwRkJTeXhKUVVGSkxFbEJRVWtzUTBGQlNpeEZRVUZQTEVsQlFVa3NaVUZCU2l4RlFVRnhRaXhIUVVGeVF5eEZRVUV3UXp0QlFVTjBReXhwUWtGQlV5eGhRVUZoTEVOQlFXSXNRMEZCVkN4RFFVUnpRenRCUVVWMFF5eHhRa0ZCWVN4UFFVRlBMRWxCUVZBc1EwRkdlVUk3UVVGSGRFTXNkVUpCUVdVc1QwRkJUeXhSUVVGUUxFZEJRV3RDTEVsQlFXeENMRWRCUVhsQ0xFdEJRWHBDTEVOQlNIVkNPenRCUVV0MFF5eGhRVUZMTEVsQlFVa3NTMEZCU3l4RFFVRk1MRVZCUVZFc1MwRkJTeXhWUVVGTUxFVkJRV2xDTEVsQlFXeERMRVZCUVhkRE8wRkJRM0JETEhOQ1FVRlZMR2xDUVVGcFFpeFhRVUZYTEVWQlFWZ3NRMEZCYWtJc1EwRkJWaXhEUVVSdlF6czdRVUZIY0VNc1owSkJRVWtzVjBGQlZ5eFJRVUZSTEZWQlFWSXNRMEZCV0N4TFFVRnRReXhEUVVGRExGbEJRVVFzU1VGQmEwSXNaMEpCUVdkQ0xGRkJRVkVzWjBKQlFWSXNTMEZCTmtJc1NVRkJOMElzUTBGQmNrVXNSVUZCTUVjN1FVRkRNVWNzZVVKQlFWTXNVVUZCVVN4VlFVRlNMRVZCUVc5Q0xFbEJRWEJDTEVOQlFYbENMRTlCUVhwQ0xFVkJRV3RETEU5QlFXeERMRVZCUVRKRExGVkJRVE5ETEVWQlFYVkVMRTlCUVhaRUxFTkJRVlFzUTBGRU1FYzdZVUZCT1VjN08wRkJTVUVzWjBKQlFVa3NUMEZCVHl4WlFVRlFMRVZCUVhGQ08wRkJRM0pDTEhkQ1FVRlJMR2RDUVVGU0xFZEJRVEpDTEU5QlFVTXNRMEZCVVN4VlFVRlNMRXRCUVhWQ0xGZEJRVmNzU1VGQldDeEhRVUZ0UWl4TFFVRXpReXhIUVVGdFJDeEpRVUZ1UkN4RFFVUk9PMkZCUVhwQ08xTkJVRW83UzBGTVNqczdRVUZyUWtFc1YwRkJUeXhqUVVGakxFbEJRV1FzUjBGQmNVSXNTMEZCY2tJc1EwRTNRakpDTzBOQlFYUkRPenM3UVVGcFEwRXNVMEZCVXl4TFFVRlVMRWRCUVdsQ08wRkJRMklzZDBKQlFVc3NWVUZCUXl4VlFVRkVMRVZCUVdkQ08wRkJRMnBDTEZsQlFVa3NVMEZCU2l4RlFVRmxPMEZCUTFnc2IwSkJSRmM3VTBGQlpqczdRVUZKUVN4M1FrRkJUU3hOUVVGT0xFTkJRV0VzVlVGQllpeEZRVXhwUWp0QlFVMXFRaXh2UWtGQldTeFJRVUZSTEZWQlFWSXNSVUZCYjBJc1owSkJRVTBzVlVGQlRpeEZRVUZ3UWl4RFFVRmFMRU5CVG1sQ08wdEJRV2hDTEVOQlFVd3NRMEZFWVR0RFFVRnFRanM3TzBGQldVRXNVMEZCVXl4TFFVRlVMRWRCUVdsQ08wRkJRMklzVVVGQlNTeERRVUZETEZOQlFVUXNSVUZCV1R0QlFVTmFMSGRDUVVGTkxFdEJRVTRzUjBGRVdUdEJRVVZhTEc5Q1FVRlpMRWxCUVZvc1EwRkdXVHRCUVVkYUxHZENRVWhaTzB0QlFXaENPME5CUkVvN096dEJRVk5QTEZOQlFWTXNXVUZCVkN4SFFVRjNRanRCUVVNelFpeFhRVUZQTEd0Q1FVRlFMRU5CUkRKQ08wTkJRWGhDT3pzN096czdRVUZSUVN4VFFVRlRMRkZCUVZRc1EwRkJhMElzUlVGQmJFSXNSVUZCYzBJc1QwRkJkRUlzUlVGQkswSTdRVUZEYkVNc1owSkJRVmtzUlVGQldpeEZRVUZuUWl4aFFVRm9RaXhGUVVFclFpeGxRVUV2UWl4RlFVUnJRenM3UVVGSGJFTXNjVUpCUVdsQ0xFVkJRV3BDTEVsQlFYVkNMRTlCUVhaQ0xFTkJTR3RET3p0QlFVdHNReXhSUVVGSkxFTkJRVU1zVTBGQlJDeEZRVUZaTzBGQlExb3NaMEpCUkZrN1MwRkJhRUk3UTBGTVJ6czdPenM3UVVGaFFTeFRRVUZUTEZWQlFWUXNRMEZCYjBJc1JVRkJjRUlzUlVGQmQwSTdRVUZETTBJc1owSkJRVmtzUlVGQldpeEZRVUZuUWl4bFFVRm9RaXhGUVVGcFF5eGhRVUZxUXl4RlFVUXlRanREUVVGNFFpSXNJbVpwYkdVaU9pSnNiMjl3TG1weklpd2ljMjkxY21ObFVtOXZkQ0k2SWk5VmMyVnljeTlOWVhSMEwxTnBkR1Z6TDNCdmNHMXZkR2x2YmlJc0luTnZkWEpqWlhORGIyNTBaVzUwSWpwYkltbHRjRzl5ZENCMGFXMWxjaUJtY205dElDY3VMM1JwYldWeUp6dGNibWx0Y0c5eWRDQjBhV05ySUdaeWIyMGdKeTR2ZEdsamF5YzdYRzVjYm1OdmJuTjBJSEJ5YjJObGMzTlBjbVJsY2lBOUlGdGNiaUFnSUNCN0lITjBaWEE2SUNkdmJrWnlZVzFsVTNSaGNuUW5JSDBzWEc0Z0lDQWdleUJ6ZEdWd09pQW5iMjVWY0dSaGRHVW5JSDBzWEc0Z0lDQWdleUJ6ZEdWd09pQW5kMmxzYkZKbGJtUmxjaWNzSUdSbFkybGtaVkpsYm1SbGNqb2dkSEoxWlNCOUxGeHVJQ0FnSUhzZ2MzUmxjRG9nSjI5dVVtVnVaR1Z5Snl3Z2FYTlNaVzVrWlhJNklIUnlkV1VnZlN4Y2JpQWdJQ0I3SUhOMFpYQTZJQ2R3YjNOMFVtVnVaR1Z5Snl3Z2FYTlNaVzVrWlhJNklIUnlkV1VnZlN4Y2JpQWdJQ0I3SUhOMFpYQTZJQ2R2YmtaeVlXMWxSVzVrSnlCOUxGeHVJQ0FnSUhzZ2MzUmxjRG9nSjI5dVEyeGxZVzUxY0NjZ2ZWeHVYVHRjYm1OdmJuTjBJRzUxYlZCeWIyTmxjM05UZEdWd2N5QTlJSEJ5YjJObGMzTlBjbVJsY2k1c1pXNW5kR2c3WEc1Y2JpOHZJRnRpYjI5c1pXRnVYVG9nU1hNZ2JHOXZjQ0J5ZFc1dWFXNW5QMXh1YkdWMElHbHpVblZ1Ym1sdVp5QTlJR1poYkhObE8xeHVYRzR2THlCYmFXNTBYVG9nVUhKdlkyVnpjeUJKUkN3Z2FXNWpjbVZ0Wlc1MFpXUWdabTl5SUdWaFkyZ2dibVYzSUhCeWIyTmxjM05jYm14bGRDQmpkWEp5Wlc1MFVISnZZMlZ6YzBsa0lEMGdNRHRjYmx4dUx5OGdXMmx1ZEYwNklFNTFiV0psY2lCdlppQnlkVzV1YVc1bklIQnliMk5sYzNObGMxeHViR1YwSUhKMWJtNXBibWREYjNWdWRDQTlJREE3WEc1Y2JpOHZJRnRwYm5SZE9pQk9kVzFpWlhJZ2IyWWdjblZ1Ym1sdVp5QnViMjR0WW1GamEyZHliM1Z1WkNCd2NtOWpaWE56WlhOY2JteGxkQ0JoWTNScGRtVkRiM1Z1ZENBOUlEQTdYRzVjYmk4dklGdGhjbkpoZVYwNklFRnljbUY1SUc5bUlHRmpkR2wyWlNCd2NtOWpaWE56SUVsRWMxeHVZMjl1YzNRZ2NuVnVibWx1WjBsa2N5QTlJRnRkTzF4dVhHNHZMeUJiYjJKcVpXTjBYVG9nVFdGd0lHOW1JR0ZqZEdsMlpTQndjbTlqWlhOelpYTmNibU52Ym5OMElISjFibTVwYm1kUWNtOWpaWE56WlhNZ1BTQjdmVHRjYmx4dUx5OGdXMkZ5Y21GNVhUb2dRWEp5WVhrZ2IyWWdjSEp2WTJWemN5QkpSSE1nY1hWbGRXVmtJR1p2Y2lCaFkzUnBkbUYwYVc5dVhHNXNaWFFnWVdOMGFYWmhkR1ZSZFdWMVpTQTlJRnRkTzF4dVhHNHZMeUJiWVhKeVlYbGRPaUJCY25KaGVTQnZaaUJ3Y205alpYTnpJRWxFY3lCeGRXVjFaV1FnWm05eUlHUmxZV04wYVhaaGRHbHZibHh1YkdWMElHUmxZV04wYVhaaGRHVlJkV1YxWlNBOUlGdGRPMXh1WEc0dktseHVJQ0FnSUZWd1pHRjBaU0JzYVhOMGMxeHVYRzRnSUNBZ1FIQmhjbUZ0SUZ0dWRXMWlaWEpkWEc0Z0lDQWdRSEJoY21GdElGdGhjbkpoZVYxY2JpQWdJQ0JBY0dGeVlXMGdXMkZ5Y21GNVhWeHVLaTljYm1aMWJtTjBhVzl1SUhWd1pHRjBaVXhwYzNSektHbGtMQ0JwYmt4cGMzUXNJRzkxZEV4cGMzUXBJSHRjYmlBZ0lDQmpiMjV6ZENCcGJsQnZjMmwwYVc5dUlEMGdhVzVNYVhOMExtbHVaR1Y0VDJZb2FXNU1hWE4wS1R0Y2JpQWdJQ0JqYjI1emRDQnZkWFJRYjNOcGRHbHZiaUE5SUc5MWRFeHBjM1F1YVc1a1pYaFBaaWh2ZFhSTWFYTjBLVHRjYmx4dUlDQWdJR2xtSUNocGJsQnZjMmwwYVc5dUlEMDlQU0F0TVNrZ2UxeHVJQ0FnSUNBZ0lDQnBia3hwYzNRdWNIVnphQ2hwWkNrN1hHNGdJQ0FnZlZ4dVhHNGdJQ0FnYVdZZ0tHOTFkRkJ2YzJsMGFXOXVJRDRnTFRFcElIdGNiaUFnSUNBZ0lDQWdiM1YwVEdsemRDNXpjR3hwWTJVb2IzVjBVRzl6YVhScGIyNHNJREVwTzF4dUlDQWdJSDFjYm4xY2JseHVMeXBjYmlBZ0lDQlZjR1JoZEdVZ2NuVnVibWx1WjF4dVhHNGdJQ0FnVzJKdmIyeGxZVzVkT2lCZ2RISjFaV0FnZEc4Z1lXUmtYRzRnSUNBZ1cySnZiMnhsWVc1ZE9pQmdkSEoxWldBZ2FXWWdiR0Y2ZVZ4dUtpOWNibVoxYm1OMGFXOXVJSFZ3WkdGMFpVTnZkVzUwS0dGa1pDd2dhWE5NWVhwNUtTQjdYRzRnSUNBZ1kyOXVjM1FnYlc5a2FXWjVJRDBnWVdSa0lEOGdNU0E2SUMweE8xeHVYRzRnSUNBZ2NuVnVibWx1WjBOdmRXNTBJQ3M5SUcxdlpHbG1lVHRjYmx4dUlDQWdJR2xtSUNnaGFYTk1ZWHA1S1NCN1hHNGdJQ0FnSUNBZ0lHRmpkR2wyWlVOdmRXNTBJQ3M5SUcxdlpHbG1lVHRjYmlBZ0lDQjlYRzU5WEc1Y2JtWjFibU4wYVc5dUlISmxjMjlzZG1WUmRXVjFaWE1vS1NCN1hHNGdJQ0FnYkdWMElHRmpkR2wyWVhSbFVYVmxkV1ZNWlc1bmRHZ2dQU0JoWTNScGRtRjBaVkYxWlhWbExteGxibWQwYUR0Y2JpQWdJQ0JzWlhRZ1pHVmhZM1JwZG1GMFpWRjFaWFZsVEdWdVozUm9JRDBnWkdWaFkzUnBkbUYwWlZGMVpYVmxMbXhsYm1kMGFEdGNibHh1SUNBZ0lIZG9hV3hsSUNoa1pXRmpkR2wyWVhSbFVYVmxkV1V0TFNrZ2UxeHVJQ0FnSUNBZ0lDQmpiMjV6ZENCcFpDQTlJR1JsWVdOMGFYWmhkR1ZSZFdWMVpWdGtaV0ZqZEdsMllYUmxVWFZsZFdWTVpXNW5kR2hkTzF4dUlDQWdJQ0FnSUNCamIyNXpkQ0JoWTNScGRtVkpaRWx1WkdWNElEMGdjblZ1Ym1sdVowbGtjeTVwYm1SbGVFOW1LR2xrS1R0Y2JpQWdJQ0FnSUNBZ1kyOXVjM1FnY0hKdlkyVnpjeUE5SUhKMWJtNXBibWRRY205alpYTnpaWE5iYVdSZE8xeHVYRzRnSUNBZ0lDQWdJR2xtSUNoaFkzUnBkbVZKWkVsdVpHVjRJRDRnTFRFcElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUhKMWJtNXBibWRKWkhNdWMzQnNhV05sS0dGamRHbDJaVWxrU1c1a1pYZ3NJREVwTzF4dUlDQWdJQ0FnSUNBZ0lDQWdkWEJrWVhSbFEyOTFiblFvWm1Gc2MyVXNJSEJ5YjJObGMzTXVhWE5NWVhwNUtUdGNiaUFnSUNBZ0lDQWdJQ0FnSUhKMWJtNXBibWRRY205alpYTnpaWE5iYVdSZElEMGdkVzVrWldacGJtVmtPMXh1SUNBZ0lDQWdJQ0I5WEc1Y2JpQWdJQ0FnSUNBZ2FXWWdLSEJ5YjJObGMzTXViMjVGYm1RcElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUhCeWIyTmxjM011YjI1RmJtUW9jSEp2WTJWemN5azdYRzRnSUNBZ0lDQWdJSDFjYmlBZ0lDQjlYRzVjYmlBZ0lDQjNhR2xzWlNBb1lXTjBhWFpoZEdWUmRXVjFaVXhsYm1kMGFDMHRLU0I3WEc0Z0lDQWdJQ0FnSUdOdmJuTjBJR2xrSUQwZ1lXTjBhWFpoZEdWUmRXVjFaVnRoWTNScGRtRjBaVkYxWlhWbFRHVnVaM1JvWFR0Y2JpQWdJQ0FnSUNBZ1kyOXVjM1FnWVdOMGFYWmxTV1JKYm1SbGVDQTlJSEoxYm01cGJtZEpaSE11YVc1a1pYaFBaaWhwWkNrN1hHNGdJQ0FnSUNBZ0lHTnZibk4wSUhCeWIyTmxjM01nUFNCeWRXNXVhVzVuVUhKdlkyVnpjMlZ6VzJsa1hUdGNibHh1SUNBZ0lDQWdJQ0JwWmlBb1lXTjBhWFpsU1dSSmJtUmxlQ0E5UFQwZ0xURXBJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lISjFibTVwYm1kSlpITXVjSFZ6YUNocFpDazdYRzRnSUNBZ0lDQWdJSDFjYmx4dUlDQWdJQ0FnSUNCMWNHUmhkR1ZEYjNWdWRDaDBjblZsTENCd2NtOWpaWE56TG1selRHRjZlU2s3WEc1Y2JpQWdJQ0FnSUNBZ2FXWWdLSEJ5YjJObGMzTXViMjVUZEdGeWRDa2dlMXh1SUNBZ0lDQWdJQ0FnSUNBZ2NISnZZMlZ6Y3k1dmJsTjBZWEowS0hCeWIyTmxjM01wTzF4dUlDQWdJQ0FnSUNCOVhHNGdJQ0FnZlZ4dVhHNGdJQ0FnWVdOMGFYWmhkR1ZSZFdWMVpTQTlJRnRkTzF4dUlDQWdJR1JsWVdOMGFYWmhkR1ZSZFdWMVpTQTlJRnRkTzF4dWZWeHVYRzR2S2x4dUlDQWdJRnQwYVcxbGMzUmhiWEJkT2lCR2NtRnRaU0IwYVcxbGMzUmhiWEJjYmlBZ0lDQmJhVzUwWFRvZ1ZHbHRaU0J6YVc1alpTQnNZWE4wSUdaeVlXMWxYRzRxTDF4dVpuVnVZM1JwYjI0Z1ptbHlaVUZzYkNobWNtRnRaVk4wWVcxd0xDQmxiR0Z3YzJWa0tTQjdYRzRnSUNBZ2JHVjBJRzFsZEdodlpDQTlJSHQ5TzF4dUlDQWdJR3hsZENCdFpYUm9iMlJPWVcxbElEMGdKeWM3WEc0Z0lDQWdiR1YwSUdselVtVnVaR1Z5VTNSbGNDQTlJR1poYkhObE8xeHVJQ0FnSUd4bGRDQndjbTlqWlhOek8xeHVJQ0FnSUd4bGRDQnlaWE4xYkhRN1hHNWNiaUFnSUNCeVpYTnZiSFpsVVhWbGRXVnpLQ2s3WEc1Y2JpQWdJQ0JqYjI1emRDQnVkVzFTZFc1dWFXNW5JRDBnY25WdWJtbHVaME52ZFc1ME8xeHVYRzRnSUNBZ1ptOXlJQ2hzWlhRZ2FTQTlJREE3SUdrZ1BDQnVkVzFRY205alpYTnpVM1JsY0hNN0lHa3JLeWtnZTF4dUlDQWdJQ0FnSUNCdFpYUm9iMlFnUFNCd2NtOWpaWE56VDNKa1pYSmJhVjA3WEc0Z0lDQWdJQ0FnSUcxbGRHaHZaRTVoYldVZ1BTQnRaWFJvYjJRdWMzUmxjRHRjYmlBZ0lDQWdJQ0FnYVhOU1pXNWtaWEpUZEdWd0lEMGdiV1YwYUc5a0xtbHpVbVZ1WkdWeUlEOGdkSEoxWlNBNklHWmhiSE5sTzF4dVhHNGdJQ0FnSUNBZ0lHWnZjaUFvYkdWMElHa3lJRDBnTURzZ2FUSWdQQ0J1ZFcxU2RXNXVhVzVuT3lCcE1pc3JLU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQndjbTlqWlhOeklEMGdjblZ1Ym1sdVoxQnliMk5sYzNObGMxdHlkVzV1YVc1blNXUnpXMmt5WFYwN1hHNWNiaUFnSUNBZ0lDQWdJQ0FnSUdsbUlDaHdjbTlqWlhOeklDWW1JSEJ5YjJObGMzTmJiV1YwYUc5a1RtRnRaVjBnSmlZZ0tDRnBjMUpsYm1SbGNsTjBaWEFnZkh3Z0tHbHpVbVZ1WkdWeVUzUmxjQ0FtSmlCd2NtOWpaWE56TGw5eVpXNWtaWEpVYUdselJuSmhiV1VnUFQwOUlIUnlkV1VwS1NrZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lISmxjM1ZzZENBOUlIQnliMk5sYzNOYmJXVjBhRzlrVG1GdFpWMHVZMkZzYkNod2NtOWpaWE56TENCd2NtOWpaWE56TENCbWNtRnRaVk4wWVcxd0xDQmxiR0Z3YzJWa0tUdGNiaUFnSUNBZ0lDQWdJQ0FnSUgxY2JseHVJQ0FnSUNBZ0lDQWdJQ0FnYVdZZ0tHMWxkR2h2WkM1a1pXTnBaR1ZTWlc1a1pYSXBJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0J3Y205alpYTnpMbDl5Wlc1a1pYSlVhR2x6Um5KaGJXVWdQU0FvY0hKdlkyVnpjMXR0WlhSb2IyUk9ZVzFsWFNBbUppQnlaWE4xYkhRZ0lUMDlJSFJ5ZFdVcElEOGdabUZzYzJVZ09pQjBjblZsT3lCY2JpQWdJQ0FnSUNBZ0lDQWdJSDFjYmlBZ0lDQWdJQ0FnZlZ4dUlDQWdJSDFjYmx4dUlDQWdJSEpsZEhWeWJpQmhZM1JwZG1WRGIzVnVkQ0EvSUhSeWRXVWdPaUJtWVd4elpUdGNibjFjYmx4dUx5OGdSblZ1WTNScGIyNGdkRzhnWm1seVpTQmxkbVZ5ZVNCbWNtRnRaVnh1Wm5WdVkzUnBiMjRnWm5KaGJXVW9LU0I3WEc0Z0lDQWdkR2xqYXlnb1puSmhiV1ZUZEdGdGNDa2dQVDRnZTF4dUlDQWdJQ0FnSUNCcFppQW9hWE5TZFc1dWFXNW5LU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQm1jbUZ0WlNncE8xeHVJQ0FnSUNBZ0lDQjlYRzVjYmlBZ0lDQWdJQ0FnZEdsdFpYSXVkWEJrWVhSbEtHWnlZVzFsVTNSaGJYQXBPMXh1SUNBZ0lDQWdJQ0JwYzFKMWJtNXBibWNnUFNCbWFYSmxRV3hzS0daeVlXMWxVM1JoYlhBc0lIUnBiV1Z5TG1kbGRFVnNZWEJ6WldRb0tTazdYRzRnSUNBZ2ZTazdYRzU5WEc1Y2JpOHZJRk4wWVhKMElHeHZiM0JjYm1aMWJtTjBhVzl1SUhOMFlYSjBLQ2tnZTF4dUlDQWdJR2xtSUNnaGFYTlNkVzV1YVc1bktTQjdYRzRnSUNBZ0lDQWdJSFJwYldWeUxuTjBZWEowS0NrN1hHNGdJQ0FnSUNBZ0lHbHpVblZ1Ym1sdVp5QTlJSFJ5ZFdVN1hHNGdJQ0FnSUNBZ0lHWnlZVzFsS0NrN1hHNGdJQ0FnZlZ4dWZWeHVYRzR2THlCRmVIQnZjblJ6WEc1bGVIQnZjblFnWm5WdVkzUnBiMjRnWjJWMFVISnZZMlZ6YzBsa0tDa2dlMXh1SUNBZ0lISmxkSFZ5YmlCamRYSnlaVzUwVUhKdlkyVnpjMGxrS3lzN1hHNTlYRzVjYmk4cVhHNGdJQ0FnVzJsdWRGMDZJRkJ5YjJObGMzTWdTVVFnZEc4Z1lXTjBhWFpoZEdWY2JpQWdJQ0JiVUhKdlkyVnpjMTA2SUZCeWIyTmxjM01nZEc4Z1lXTjBhWFpoZEdWY2Jpb3ZYRzVsZUhCdmNuUWdablZ1WTNScGIyNGdZV04wYVhaaGRHVW9hV1FzSUhCeWIyTmxjM01wSUh0Y2JpQWdJQ0IxY0dSaGRHVk1hWE4wY3locFpDd2dZV04wYVhaaGRHVlJkV1YxWlN3Z1pHVmhZM1JwZG1GMFpWRjFaWFZsS1R0Y2JpQWdJQ0JjYmlBZ0lDQnlkVzV1YVc1blVISnZZMlZ6YzJWelcybGtYU0E5SUhCeWIyTmxjM003WEc1Y2JpQWdJQ0JwWmlBb0lXbHpVblZ1Ym1sdVp5a2dlMXh1SUNBZ0lDQWdJQ0J6ZEdGeWRDZ3BPMXh1SUNBZ0lIMWNibjFjYmx4dUx5cGNiaUFnSUNCYmFXNTBYVG9nVUhKdlkyVnpjeUJKUkNCMGJ5QmtaV0ZqZEdsMllYUmxYRzRxTDF4dVpYaHdiM0owSUdaMWJtTjBhVzl1SUdSbFlXTjBhWFpoZEdVb2FXUXBJSHRjYmlBZ0lDQjFjR1JoZEdWTWFYTjBjeWhwWkN3Z1pHVmhZM1JwZG1GMFpWRjFaWFZsTENCaFkzUnBkbUYwWlZGMVpYVmxLVHRjYm4waVhYMD1cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL3Byb2Nlc3MvbG9vcC5qc1xuICoqIG1vZHVsZSBpZCA9IDM0XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG52YXIgVFJBTlNMQVRFID0gJ3RyYW5zbGF0ZSc7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IHtcbiAgICB4OiBUUkFOU0xBVEUgKyAnWCcsXG4gICAgeTogVFJBTlNMQVRFICsgJ1knLFxuICAgIHo6IFRSQU5TTEFURSArICdaJ1xufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbk55WXk5eVpXNWtaWEl2WTNOekwzTjBZWFJsTFcxaGNDNXFjeUpkTENKdVlXMWxjeUk2VzEwc0ltMWhjSEJwYm1keklqb2lPenM3UVVGQlFTeEpRVUZOTEZsQlFWa3NWMEZCV2pzN2EwSkJSVk03UVVGRFdDeFBRVUZITEZsQlFWa3NSMEZCV2p0QlFVTklMRTlCUVVjc1dVRkJXU3hIUVVGYU8wRkJRMGdzVDBGQlJ5eFpRVUZaTEVkQlFWb2lMQ0ptYVd4bElqb2ljM1JoZEdVdGJXRndMbXB6SWl3aWMyOTFjbU5sVW05dmRDSTZJaTlWYzJWeWN5OU5ZWFIwTDFOcGRHVnpMM0J2Y0cxdmRHbHZiaUlzSW5OdmRYSmpaWE5EYjI1MFpXNTBJanBiSW1OdmJuTjBJRlJTUVU1VFRFRlVSU0E5SUNkMGNtRnVjMnhoZEdVbk8xeHVYRzVsZUhCdmNuUWdaR1ZtWVhWc2RDQjdYRzRnSUNBZ2VEb2dWRkpCVGxOTVFWUkZJQ3NnSjFnbkxGeHVJQ0FnSUhrNklGUlNRVTVUVEVGVVJTQXJJQ2RaSnl4Y2JpQWdJQ0I2T2lCVVVrRk9VMHhCVkVVZ0t5QW5XaWRjYm4wN0lsMTlcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL3JlbmRlci9jc3Mvc3RhdGUtbWFwLmpzXG4gKiogbW9kdWxlIGlkID0gMzVcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF9hbmdsZSA9IHJlcXVpcmUoJy4uLy4uL3ZhbHVlLXR5cGVzL2FuZ2xlJyk7XG5cbnZhciBfYW5nbGUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfYW5nbGUpO1xuXG52YXIgX2FscGhhID0gcmVxdWlyZSgnLi4vLi4vdmFsdWUtdHlwZXMvYWxwaGEnKTtcblxudmFyIF9hbHBoYTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9hbHBoYSk7XG5cbnZhciBfYXhlcyA9IHJlcXVpcmUoJy4uLy4uL3ZhbHVlLXR5cGVzL2F4ZXMnKTtcblxudmFyIF9heGVzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2F4ZXMpO1xuXG52YXIgX2NvbG9yID0gcmVxdWlyZSgnLi4vLi4vdmFsdWUtdHlwZXMvY29sb3InKTtcblxudmFyIF9jb2xvcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jb2xvcik7XG5cbnZhciBfc2NhbGUgPSByZXF1aXJlKCcuLi8uLi92YWx1ZS10eXBlcy9zY2FsZScpO1xuXG52YXIgX3NjYWxlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3NjYWxlKTtcblxudmFyIF9zaGFkb3cgPSByZXF1aXJlKCcuLi8uLi92YWx1ZS10eXBlcy9zaGFkb3cnKTtcblxudmFyIF9zaGFkb3cyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfc2hhZG93KTtcblxudmFyIF9wb3NpdGlvbnMgPSByZXF1aXJlKCcuLi8uLi92YWx1ZS10eXBlcy9wb3NpdGlvbnMnKTtcblxudmFyIF9wb3NpdGlvbnMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcG9zaXRpb25zKTtcblxudmFyIF9weCA9IHJlcXVpcmUoJy4uLy4uL3ZhbHVlLXR5cGVzL3B4Jyk7XG5cbnZhciBfcHgyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcHgpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5leHBvcnRzLmRlZmF1bHQgPSB7XG4gICAgLy8gQ29sb3IgcHJvcHNcbiAgICBjb2xvcjogX2NvbG9yMi5kZWZhdWx0LFxuICAgIGJhY2tncm91bmRDb2xvcjogX2NvbG9yMi5kZWZhdWx0LFxuICAgIG91dGxpbmVDb2xvcjogX2NvbG9yMi5kZWZhdWx0LFxuICAgIGZpbGw6IF9jb2xvcjIuZGVmYXVsdCxcbiAgICBzdHJva2U6IF9jb2xvcjIuZGVmYXVsdCxcblxuICAgIC8vIEJvcmRlciBwcm9wc1xuICAgIGJvcmRlckNvbG9yOiBfY29sb3IyLmRlZmF1bHQsXG4gICAgYm9yZGVyVG9wQ29sb3I6IF9jb2xvcjIuZGVmYXVsdCxcbiAgICBib3JkZXJSaWdodENvbG9yOiBfY29sb3IyLmRlZmF1bHQsXG4gICAgYm9yZGVyQm90dG9tQ29sb3I6IF9jb2xvcjIuZGVmYXVsdCxcbiAgICBib3JkZXJMZWZ0Q29sb3I6IF9jb2xvcjIuZGVmYXVsdCxcbiAgICBib3JkZXJSYWRpdXM6IF9weDIuZGVmYXVsdCxcblxuICAgIC8vIFBvc2l0aW9uaW5nXG4gICAgbWFyZ2luOiBfcG9zaXRpb25zMi5kZWZhdWx0LFxuICAgIHBhZGRpbmc6IF9wb3NpdGlvbnMyLmRlZmF1bHQsXG4gICAgd2lkdGg6IF9weDIuZGVmYXVsdCxcbiAgICBoZWlnaHQ6IF9weDIuZGVmYXVsdCxcblxuICAgIC8vIEF4ZXNcbiAgICBiYWNrZ3JvdW5kUG9zaXRpb246IF9heGVzMi5kZWZhdWx0LFxuICAgIHBlcnNwZWN0aXZlT3JpZ2luOiBfYXhlczIuZGVmYXVsdCxcbiAgICB0cmFuc2Zvcm1PcmlnaW46IF9heGVzMi5kZWZhdWx0LFxuXG4gICAgLy8gU2hhZG93c1xuICAgIHRleHRTaGFkb3c6IF9zaGFkb3cyLmRlZmF1bHQsXG4gICAgYm94U2hhZG93OiBfc2hhZG93Mi5kZWZhdWx0LFxuXG4gICAgLy8gVHJhbnNmb3JtIHByb3BlcnRpZXNcbiAgICByb3RhdGU6IF9hbmdsZTIuZGVmYXVsdCxcbiAgICByb3RhdGVYOiBfYW5nbGUyLmRlZmF1bHQsXG4gICAgcm90YXRlWTogX2FuZ2xlMi5kZWZhdWx0LFxuICAgIHJvdGF0ZVo6IF9hbmdsZTIuZGVmYXVsdCxcbiAgICBzY2FsZTogX3NjYWxlMi5kZWZhdWx0LFxuICAgIHNjYWxlWDogX3NjYWxlMi5kZWZhdWx0LFxuICAgIHNjYWxlWTogX3NjYWxlMi5kZWZhdWx0LFxuICAgIHNjYWxlWjogX3NjYWxlMi5kZWZhdWx0LFxuICAgIHNrZXdYOiBfYW5nbGUyLmRlZmF1bHQsXG4gICAgc2tld1k6IF9hbmdsZTIuZGVmYXVsdCxcbiAgICBkaXN0YW5jZTogX3B4Mi5kZWZhdWx0LFxuICAgIHRyYW5zbGF0ZVg6IF9weDIuZGVmYXVsdCxcbiAgICB0cmFuc2xhdGVZOiBfcHgyLmRlZmF1bHQsXG4gICAgdHJhbnNsYXRlWjogX3B4Mi5kZWZhdWx0LFxuICAgIHBlcnNwZWN0aXZlOiBfcHgyLmRlZmF1bHQsXG4gICAgb3BhY2l0eTogX2FscGhhMi5kZWZhdWx0XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluTnlZeTl5Wlc1a1pYSXZZM056TDNaaGJIVmxMWFI1Y0dVdGJXRndMbXB6SWwwc0ltNWhiV1Z6SWpwYlhTd2liV0Z3Y0dsdVozTWlPaUk3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3TzJ0Q1FWTmxPenRCUVVWWUxEQkNRVVpYTzBGQlIxZ3NiME5CU0ZjN1FVRkpXQ3hwUTBGS1Z6dEJRVXRZTEhsQ1FVeFhPMEZCVFZnc01rSkJUbGM3T3p0QlFWTllMR2REUVZSWE8wRkJWVmdzYlVOQlZsYzdRVUZYV0N4eFEwRllWenRCUVZsWUxITkRRVnBYTzBGQllWZ3NiME5CWWxjN1FVRmpXQ3c0UWtGa1Z6czdPMEZCYVVKWUxDdENRV3BDVnp0QlFXdENXQ3huUTBGc1FsYzdRVUZ0UWxnc2RVSkJia0pYTzBGQmIwSllMSGRDUVhCQ1Z6czdPMEZCZFVKWUxITkRRWFpDVnp0QlFYZENXQ3h4UTBGNFFsYzdRVUY1UWxnc2JVTkJla0pYT3pzN1FVRTBRbGdzWjBOQk5VSlhPMEZCTmtKWUxDdENRVGRDVnpzN08wRkJaME5ZTERKQ1FXaERWenRCUVdsRFdDdzBRa0ZxUTFjN1FVRnJRMWdzTkVKQmJFTlhPMEZCYlVOWUxEUkNRVzVEVnp0QlFXOURXQ3d3UWtGd1ExYzdRVUZ4UTFnc01rSkJja05YTzBGQmMwTllMREpDUVhSRFZ6dEJRWFZEV0N3eVFrRjJRMWM3UVVGM1ExZ3NNRUpCZUVOWE8wRkJlVU5ZTERCQ1FYcERWenRCUVRCRFdDd3dRa0V4UTFjN1FVRXlRMWdzTkVKQk0wTlhPMEZCTkVOWUxEUkNRVFZEVnp0QlFUWkRXQ3cwUWtFM1ExYzdRVUU0UTFnc05rSkJPVU5YTzBGQkswTllMRFJDUVM5RFZ5SXNJbVpwYkdVaU9pSjJZV3gxWlMxMGVYQmxMVzFoY0M1cWN5SXNJbk52ZFhKalpWSnZiM1FpT2lJdlZYTmxjbk12VFdGMGRDOVRhWFJsY3k5d2IzQnRiM1JwYjI0aUxDSnpiM1Z5WTJWelEyOXVkR1Z1ZENJNld5SnBiWEJ2Y25RZ1lXNW5iR1VnWm5KdmJTQW5MaTR2TGk0dmRtRnNkV1V0ZEhsd1pYTXZZVzVuYkdVbk8xeHVhVzF3YjNKMElHRnNjR2hoSUdaeWIyMGdKeTR1THk0dUwzWmhiSFZsTFhSNWNHVnpMMkZzY0doaEp6dGNibWx0Y0c5eWRDQmhlR1Z6SUdaeWIyMGdKeTR1THk0dUwzWmhiSFZsTFhSNWNHVnpMMkY0WlhNbk8xeHVhVzF3YjNKMElHTnZiRzl5SUdaeWIyMGdKeTR1THk0dUwzWmhiSFZsTFhSNWNHVnpMMk52Ykc5eUp6dGNibWx0Y0c5eWRDQnpZMkZzWlNCbWNtOXRJQ2N1TGk4dUxpOTJZV3gxWlMxMGVYQmxjeTl6WTJGc1pTYzdYRzVwYlhCdmNuUWdjMmhoWkc5M0lHWnliMjBnSnk0dUx5NHVMM1poYkhWbExYUjVjR1Z6TDNOb1lXUnZkeWM3WEc1cGJYQnZjblFnY0c5emFYUnBiMjV6SUdaeWIyMGdKeTR1THk0dUwzWmhiSFZsTFhSNWNHVnpMM0J2YzJsMGFXOXVjeWM3WEc1cGJYQnZjblFnY0hnZ1puSnZiU0FuTGk0dkxpNHZkbUZzZFdVdGRIbHdaWE12Y0hnbk8xeHVYRzVsZUhCdmNuUWdaR1ZtWVhWc2RDQjdYRzRnSUNBZ0x5OGdRMjlzYjNJZ2NISnZjSE5jYmlBZ0lDQmpiMnh2Y2pvZ1kyOXNiM0lzWEc0Z0lDQWdZbUZqYTJkeWIzVnVaRU52Ykc5eU9pQmpiMnh2Y2l4Y2JpQWdJQ0J2ZFhSc2FXNWxRMjlzYjNJNklHTnZiRzl5TEZ4dUlDQWdJR1pwYkd3NklHTnZiRzl5TEZ4dUlDQWdJSE4wY205clpUb2dZMjlzYjNJc1hHNWNiaUFnSUNBdkx5QkNiM0prWlhJZ2NISnZjSE5jYmlBZ0lDQmliM0prWlhKRGIyeHZjam9nWTI5c2IzSXNYRzRnSUNBZ1ltOXlaR1Z5Vkc5d1EyOXNiM0k2SUdOdmJHOXlMRnh1SUNBZ0lHSnZjbVJsY2xKcFoyaDBRMjlzYjNJNklHTnZiRzl5TEZ4dUlDQWdJR0p2Y21SbGNrSnZkSFJ2YlVOdmJHOXlPaUJqYjJ4dmNpeGNiaUFnSUNCaWIzSmtaWEpNWldaMFEyOXNiM0k2SUdOdmJHOXlMRnh1SUNBZ0lHSnZjbVJsY2xKaFpHbDFjem9nY0hnc1hHNWNiaUFnSUNBdkx5QlFiM05wZEdsdmJtbHVaMXh1SUNBZ0lHMWhjbWRwYmpvZ2NHOXphWFJwYjI1ekxGeHVJQ0FnSUhCaFpHUnBibWM2SUhCdmMybDBhVzl1Y3l4Y2JpQWdJQ0IzYVdSMGFEb2djSGdzWEc0Z0lDQWdhR1ZwWjJoME9pQndlQ3hjYmx4dUlDQWdJQzh2SUVGNFpYTmNiaUFnSUNCaVlXTnJaM0p2ZFc1a1VHOXphWFJwYjI0NklHRjRaWE1zWEc0Z0lDQWdjR1Z5YzNCbFkzUnBkbVZQY21sbmFXNDZJR0Y0WlhNc1hHNGdJQ0FnZEhKaGJuTm1iM0p0VDNKcFoybHVPaUJoZUdWekxGeHVYRzRnSUNBZ0x5OGdVMmhoWkc5M2MxeHVJQ0FnSUhSbGVIUlRhR0ZrYjNjNklITm9ZV1J2ZHl4Y2JpQWdJQ0JpYjNoVGFHRmtiM2M2SUhOb1lXUnZkeXdnSUNCY2JseHVJQ0FnSUM4dklGUnlZVzV6Wm05eWJTQndjbTl3WlhKMGFXVnpYRzRnSUNBZ2NtOTBZWFJsT2lCaGJtZHNaU3hjYmlBZ0lDQnliM1JoZEdWWU9pQmhibWRzWlN4Y2JpQWdJQ0J5YjNSaGRHVlpPaUJoYm1kc1pTeGNiaUFnSUNCeWIzUmhkR1ZhT2lCaGJtZHNaU3hjYmlBZ0lDQnpZMkZzWlRvZ2MyTmhiR1VzWEc0Z0lDQWdjMk5oYkdWWU9pQnpZMkZzWlN4Y2JpQWdJQ0J6WTJGc1pWazZJSE5qWVd4bExGeHVJQ0FnSUhOallXeGxXam9nYzJOaGJHVXNYRzRnSUNBZ2MydGxkMWc2SUdGdVoyeGxMRnh1SUNBZ0lITnJaWGRaT2lCaGJtZHNaU3hjYmlBZ0lDQmthWE4wWVc1alpUb2djSGdzWEc0Z0lDQWdkSEpoYm5Oc1lYUmxXRG9nY0hnc1hHNGdJQ0FnZEhKaGJuTnNZWFJsV1RvZ2NIZ3NYRzRnSUNBZ2RISmhibk5zWVhSbFdqb2djSGdzWEc0Z0lDQWdjR1Z5YzNCbFkzUnBkbVU2SUhCNExGeHVJQ0FnSUc5d1lXTnBkSGs2SUdGc2NHaGhYRzU5T3lKZGZRPT1cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL3JlbmRlci9jc3MvdmFsdWUtdHlwZS1tYXAuanNcbiAqKiBtb2R1bGUgaWQgPSAzNlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xudmFyIGNhY2hlID0ge307XG52YXIgcHJlZml4ZXMgPSBbJ1dlYmtpdCcsICdNb3onLCAnTycsICdtcycsICcnXTtcbnZhciBudW1QcmVmaXhlcyA9IHByZWZpeGVzLmxlbmd0aDtcbnZhciB0ZXN0RWxlbWVudCA9IHVuZGVmaW5lZDtcblxuLypcbiAgICBUZXN0IHN0eWxlIHByb3BlcnR5IGZvciBwcmVmaXhlZCB2ZXJzaW9uXG4gICAgXG4gICAgQHBhcmFtIFtzdHJpbmddOiBTdHlsZSBwcm9wZXJ0eVxuICAgIEByZXR1cm4gW3N0cmluZ106IENhY2hlZCBwcm9wZXJ0eSBuYW1lXG4qL1xudmFyIHRlc3RQcmVmaXggPSBmdW5jdGlvbiAoa2V5KSB7XG4gICAgdGVzdEVsZW1lbnQgPSB0ZXN0RWxlbWVudCB8fCBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICAgIGlmIChjYWNoZVtrZXldID09PSBmYWxzZSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgY2FjaGVba2V5XSA9IGZhbHNlO1xuICAgIH1cblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbnVtUHJlZml4ZXM7IGkrKykge1xuICAgICAgICB2YXIgcHJlZml4ID0gcHJlZml4ZXNbaV0sXG4gICAgICAgICAgICBwcmVmaXhlZCA9IHByZWZpeCA9PT0gJycgPyBrZXkgOiBwcmVmaXggKyBrZXkuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyBrZXkuc2xpY2UoMSk7XG5cbiAgICAgICAgaWYgKHByZWZpeGVkIGluIHRlc3RFbGVtZW50LnN0eWxlKSB7XG4gICAgICAgICAgICBjYWNoZVtrZXldID0gcHJlZml4ZWQ7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gY2FjaGVba2V5XTtcbn07XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uIChrZXkpIHtcbiAgICByZXR1cm4gY2FjaGVba2V5XSB8fCB0ZXN0UHJlZml4KGtleSk7XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluTnlZeTl5Wlc1a1pYSXZZM056TDNCeVpXWnBlR1Z5TG1weklsMHNJbTVoYldWeklqcGJYU3dpYldGd2NHbHVaM01pT2lJN096dEJRVUZCTEVsQlFVMHNVVUZCVVN4RlFVRlNPMEZCUTA0c1NVRkJUU3hYUVVGWExFTkJRVU1zVVVGQlJDeEZRVUZWTEV0QlFWWXNSVUZCWjBJc1IwRkJhRUlzUlVGQmIwSXNTVUZCY0VJc1JVRkJNRUlzUlVGQk1VSXNRMEZCV0R0QlFVTk9MRWxCUVUwc1kwRkJZeXhUUVVGVExFMUJRVlE3UVVGRGNFSXNTVUZCU1N4MVFrRkJTanM3T3pzN096czdRVUZSUVN4SlFVRk5MR0ZCUVdFc1ZVRkJReXhIUVVGRUxFVkJRVk03UVVGRGVFSXNhMEpCUVdNc1pVRkJaU3hUUVVGVExHRkJRVlFzUTBGQmRVSXNTMEZCZGtJc1EwRkJaaXhEUVVSVk96dEJRVWQ0UWl4UlFVRkpMRTFCUVUwc1IwRkJUaXhOUVVGbExFdEJRV1lzUlVGQmMwSTdRVUZEZEVJc1pVRkJUeXhMUVVGUUxFTkJSSE5DTzB0QlFURkNMRTFCUlU4N1FVRkRTQ3hqUVVGTkxFZEJRVTRzU1VGQllTeExRVUZpTEVOQlJFYzdTMEZHVURzN1FVRk5RU3hUUVVGTExFbEJRVWtzU1VGQlNTeERRVUZLTEVWQlFVOHNTVUZCU1N4WFFVRktMRVZCUVdsQ0xFZEJRV3BETEVWQlFYTkRPMEZCUTJ4RExGbEJRVWtzVTBGQlV5eFRRVUZUTEVOQlFWUXNRMEZCVkR0WlFVTkJMRmRCUVZjc1RVRkJReXhMUVVGWExFVkJRVmdzUjBGQmFVSXNSMEZCYkVJc1IwRkJkMElzVTBGQlV5eEpRVUZKTEUxQlFVb3NRMEZCVnl4RFFVRllMRVZCUVdNc1YwRkJaQ3hGUVVGVUxFZEJRWFZETEVsQlFVa3NTMEZCU2l4RFFVRlZMRU5CUVZZc1EwRkJka01zUTBGR1REczdRVUZKYkVNc1dVRkJTU3haUVVGWkxGbEJRVmtzUzBGQldpeEZRVUZ0UWp0QlFVTXZRaXhyUWtGQlRTeEhRVUZPTEVsQlFXRXNVVUZCWWl4RFFVUXJRanRUUVVGdVF6dExRVXBLT3p0QlFWTkJMRmRCUVU4c1RVRkJUU3hIUVVGT0xFTkJRVkFzUTBGc1FuZENPME5CUVZRN08ydENRWEZDU2l4VlFVRkRMRWRCUVVRN1YwRkJVeXhOUVVGTkxFZEJRVTRzUzBGQll5eFhRVUZYTEVkQlFWZ3NRMEZCWkR0RFFVRlVJaXdpWm1sc1pTSTZJbkJ5WldacGVHVnlMbXB6SWl3aWMyOTFjbU5sVW05dmRDSTZJaTlWYzJWeWN5OU5ZWFIwTDFOcGRHVnpMM0J2Y0cxdmRHbHZiaUlzSW5OdmRYSmpaWE5EYjI1MFpXNTBJanBiSW1OdmJuTjBJR05oWTJobElEMGdlMzA3WEc1amIyNXpkQ0J3Y21WbWFYaGxjeUE5SUZzblYyVmlhMmwwSnl3blRXOTZKeXduVHljc0oyMXpKeXdnSnlkZE8xeHVZMjl1YzNRZ2JuVnRVSEpsWm1sNFpYTWdQU0J3Y21WbWFYaGxjeTVzWlc1bmRHZzdYRzVzWlhRZ2RHVnpkRVZzWlcxbGJuUTdYRzVjYmk4cVhHNGdJQ0FnVkdWemRDQnpkSGxzWlNCd2NtOXdaWEowZVNCbWIzSWdjSEpsWm1sNFpXUWdkbVZ5YzJsdmJseHVJQ0FnSUZ4dUlDQWdJRUJ3WVhKaGJTQmJjM1J5YVc1blhUb2dVM1I1YkdVZ2NISnZjR1Z5ZEhsY2JpQWdJQ0JBY21WMGRYSnVJRnR6ZEhKcGJtZGRPaUJEWVdOb1pXUWdjSEp2Y0dWeWRIa2dibUZ0WlZ4dUtpOWNibU52Ym5OMElIUmxjM1JRY21WbWFYZ2dQU0FvYTJWNUtTQTlQaUI3WEc0Z0lDQWdkR1Z6ZEVWc1pXMWxiblFnUFNCMFpYTjBSV3hsYldWdWRDQjhmQ0JrYjJOMWJXVnVkQzVqY21WaGRHVkZiR1Z0Wlc1MEtDZGthWFluS1R0Y2JseHVJQ0FnSUdsbUlDaGpZV05vWlZ0clpYbGRJRDA5UFNCbVlXeHpaU2tnZTF4dUlDQWdJQ0FnSUNCeVpYUjFjbTRnWm1Gc2MyVTdYRzRnSUNBZ2ZTQmxiSE5sSUh0Y2JpQWdJQ0FnSUNBZ1kyRmphR1ZiYTJWNVhTQTlJR1poYkhObE8xeHVJQ0FnSUgxY2JseHVJQ0FnSUdadmNpQW9kbUZ5SUdrZ1BTQXdPeUJwSUR3Z2JuVnRVSEpsWm1sNFpYTTdJR2tyS3lrZ2UxeHVJQ0FnSUNBZ0lDQjJZWElnY0hKbFptbDRJRDBnY0hKbFptbDRaWE5iYVYwc1hHNGdJQ0FnSUNBZ0lDQWdJQ0J3Y21WbWFYaGxaQ0E5SUNod2NtVm1hWGdnUFQwOUlDY25LU0EvSUd0bGVTQTZJSEJ5WldacGVDQXJJR3RsZVM1amFHRnlRWFFvTUNrdWRHOVZjSEJsY2tOaGMyVW9LU0FySUd0bGVTNXpiR2xqWlNneEtUdGNibHh1SUNBZ0lDQWdJQ0JwWmlBb2NISmxabWw0WldRZ2FXNGdkR1Z6ZEVWc1pXMWxiblF1YzNSNWJHVXBJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lHTmhZMmhsVzJ0bGVWMGdQU0J3Y21WbWFYaGxaRHRjYmlBZ0lDQWdJQ0FnZlZ4dUlDQWdJSDFjYmlBZ0lDQmNiaUFnSUNCeVpYUjFjbTRnWTJGamFHVmJhMlY1WFR0Y2JuMDdYRzVjYm1WNGNHOXlkQ0JrWldaaGRXeDBJQ2hyWlhrcElEMCtJR05oWTJobFcydGxlVjBnZkh3Z2RHVnpkRkJ5WldacGVDaHJaWGtwT3lKZGZRPT1cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL3JlbmRlci9jc3MvcHJlZml4ZXIuanNcbiAqKiBtb2R1bGUgaWQgPSAzN1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX3V0aWxzID0gcmVxdWlyZSgnLi4vLi4vaW5jL3V0aWxzJyk7XG5cbnZhciBfdHJhbnNmb3JtUHJvcHMgPSByZXF1aXJlKCcuL3RyYW5zZm9ybS1wcm9wcycpO1xuXG52YXIgX3RyYW5zZm9ybVByb3BzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3RyYW5zZm9ybVByb3BzKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxudmFyIFRSQU5TTEFURV9aID0gJ3RyYW5zbGF0ZVonO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbiAoc3RhdGUsIGRpc2FibGVIYXJkd2FyZUFjY2VsZXJhdGlvbikge1xuICAgIHZhciBwcm9wZXJ0eVN0cmluZyA9ICcnO1xuICAgIHZhciB0cmFuc2Zvcm1TdHJpbmcgPSAnJztcbiAgICB2YXIgdHJhbnNmb3JtSGFzWiA9IGZhbHNlO1xuXG4gICAgKDAsIF91dGlscy5lYWNoKShzdGF0ZSwgZnVuY3Rpb24gKHZhbHVlLCBrZXkpIHtcbiAgICAgICAgaWYgKF90cmFuc2Zvcm1Qcm9wczIuZGVmYXVsdFtrZXldKSB7XG4gICAgICAgICAgICB0cmFuc2Zvcm1TdHJpbmcgKz0ga2V5ICsgJygnICsgdmFsdWUgKyAnKSAnO1xuICAgICAgICAgICAgdHJhbnNmb3JtSGFzWiA9IGtleSA9PT0gVFJBTlNMQVRFX1ogPyB0cnVlIDogdHJhbnNmb3JtSGFzWjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHByb3BlcnR5U3RyaW5nICs9ICc7JyArIGtleSArICc6JyArIHZhbHVlO1xuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICBpZiAodHJhbnNmb3JtU3RyaW5nICE9PSAnJykge1xuICAgICAgICBpZiAoIXRyYW5zZm9ybUhhc1ogJiYgIWRpc2FibGVIYXJkd2FyZUFjY2VsZXJhdGlvbikge1xuICAgICAgICAgICAgdHJhbnNmb3JtU3RyaW5nICs9IFRSQU5TTEFURV9aICsgJygwcHgpJztcbiAgICAgICAgfVxuXG4gICAgICAgIHByb3BlcnR5U3RyaW5nICs9ICc7dHJhbnNmb3JtOicgKyB0cmFuc2Zvcm1TdHJpbmc7XG4gICAgfVxuXG4gICAgcmV0dXJuIHByb3BlcnR5U3RyaW5nO1xufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbk55WXk5eVpXNWtaWEl2WTNOekwySjFhV3hrTG1weklsMHNJbTVoYldWeklqcGJYU3dpYldGd2NHbHVaM01pT2lJN096czdPenM3T3pzN096dEJRVWRCTEVsQlFVMHNZMEZCWXl4WlFVRmtPenRyUWtGRlV5eFZRVUZETEV0QlFVUXNSVUZCVVN3eVFrRkJVaXhGUVVGM1F6dEJRVU51UkN4UlFVRkpMR2xDUVVGcFFpeEZRVUZxUWl4RFFVUXJRenRCUVVWdVJDeFJRVUZKTEd0Q1FVRnJRaXhGUVVGc1FpeERRVVlyUXp0QlFVZHVSQ3hSUVVGSkxHZENRVUZuUWl4TFFVRm9RaXhEUVVnclF6czdRVUZMYmtRc2NVSkJRVXNzUzBGQlRDeEZRVUZaTEZWQlFVTXNTMEZCUkN4RlFVRlJMRWRCUVZJc1JVRkJaMEk3UVVGRGVFSXNXVUZCU1N4NVFrRkJaU3hIUVVGbUxFTkJRVW9zUlVGQmVVSTdRVUZEY2tJc0swSkJRVzFDTEUxQlFVMHNSMEZCVGl4SFFVRlpMRXRCUVZvc1IwRkJiMElzU1VGQmNFSXNRMEZFUlR0QlFVVnlRaXcwUWtGQlowSXNSMEZCUXl4TFFVRlJMRmRCUVZJc1IwRkJkVUlzU1VGQmVFSXNSMEZCSzBJc1lVRkJMMElzUTBGR1N6dFRRVUY2UWl4TlFVbFBPMEZCUTBnc09FSkJRV3RDTEUxQlFVMHNSMEZCVGl4SFFVRlpMRWRCUVZvc1IwRkJhMElzUzBGQmJFSXNRMEZFWmp0VFFVcFFPMHRCUkZFc1EwRkJXaXhEUVV4dFJEczdRVUZsYmtRc1VVRkJTU3h2UWtGQmIwSXNSVUZCY0VJc1JVRkJkMEk3UVVGRGVFSXNXVUZCU1N4RFFVRkRMR0ZCUVVRc1NVRkJhMElzUTBGQlF5d3lRa0ZCUkN4RlFVRTRRanRCUVVOb1JDd3JRa0ZCYlVJc1kwRkJZeXhQUVVGa0xFTkJSRFpDTzFOQlFYQkVPenRCUVVsQkxEQkNRVUZyUWl4blFrRkJaMElzWlVGQmFFSXNRMEZNVFR0TFFVRTFRanM3UVVGUlFTeFhRVUZQTEdOQlFWQXNRMEYyUW0xRU8wTkJRWGhESWl3aVptbHNaU0k2SW1KMWFXeGtMbXB6SWl3aWMyOTFjbU5sVW05dmRDSTZJaTlWYzJWeWN5OU5ZWFIwTDFOcGRHVnpMM0J2Y0cxdmRHbHZiaUlzSW5OdmRYSmpaWE5EYjI1MFpXNTBJanBiSW1sdGNHOXlkQ0I3SUdWaFkyZ2dmU0JtY205dElDY3VMaTh1TGk5cGJtTXZkWFJwYkhNbk8xeHVhVzF3YjNKMElIUnlZVzV6Wm05eWJWQnliM0J6SUdaeWIyMGdKeTR2ZEhKaGJuTm1iM0p0TFhCeWIzQnpKenRjYmx4dVkyOXVjM1FnVkZKQlRsTk1RVlJGWDFvZ1BTQW5kSEpoYm5Oc1lYUmxXaWM3WEc1Y2JtVjRjRzl5ZENCa1pXWmhkV3gwSUNoemRHRjBaU3dnWkdsellXSnNaVWhoY21SM1lYSmxRV05qWld4bGNtRjBhVzl1S1NBOVBpQjdYRzRnSUNBZ2JHVjBJSEJ5YjNCbGNuUjVVM1J5YVc1bklEMGdKeWM3WEc0Z0lDQWdiR1YwSUhSeVlXNXpabTl5YlZOMGNtbHVaeUE5SUNjbk8xeHVJQ0FnSUd4bGRDQjBjbUZ1YzJadmNtMUlZWE5hSUQwZ1ptRnNjMlU3WEc1Y2JpQWdJQ0JsWVdOb0tITjBZWFJsTENBb2RtRnNkV1VzSUd0bGVTa2dQVDRnZTF4dUlDQWdJQ0FnSUNCcFppQW9kSEpoYm5ObWIzSnRVSEp2Y0hOYmEyVjVYU2tnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdkSEpoYm5ObWIzSnRVM1J5YVc1bklDczlJR3RsZVNBcklDY29KeUFySUhaaGJIVmxJQ3NnSnlrZ0p6dGNiaUFnSUNBZ0lDQWdJQ0FnSUhSeVlXNXpabTl5YlVoaGMxb2dQU0FvYTJWNUlEMDlQU0JVVWtGT1UweEJWRVZmV2lrZ1B5QjBjblZsSURvZ2RISmhibk5tYjNKdFNHRnpXanRjYmx4dUlDQWdJQ0FnSUNCOUlHVnNjMlVnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdjSEp2Y0dWeWRIbFRkSEpwYm1jZ0t6MGdKenNuSUNzZ2EyVjVJQ3NnSnpvbklDc2dkbUZzZFdVN1hHNGdJQ0FnSUNBZ0lIMWNiaUFnSUNCOUtUdGNibHh1SUNBZ0lHbG1JQ2gwY21GdWMyWnZjbTFUZEhKcGJtY2dJVDA5SUNjbktTQjdYRzRnSUNBZ0lDQWdJR2xtSUNnaGRISmhibk5tYjNKdFNHRnpXaUFtSmlBaFpHbHpZV0pzWlVoaGNtUjNZWEpsUVdOalpXeGxjbUYwYVc5dUtTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNCMGNtRnVjMlp2Y20xVGRISnBibWNnS3owZ1ZGSkJUbE5NUVZSRlgxb2dLeUFuS0RCd2VDa25PMXh1SUNBZ0lDQWdJQ0I5WEc1Y2JpQWdJQ0FnSUNBZ2NISnZjR1Z5ZEhsVGRISnBibWNnS3owZ0p6dDBjbUZ1YzJadmNtMDZKeUFySUhSeVlXNXpabTl5YlZOMGNtbHVaenRjYmlBZ0lDQjlYRzVjYmlBZ0lDQnlaWFIxY200Z2NISnZjR1Z5ZEhsVGRISnBibWM3WEc1OU95SmRmUT09XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9yZW5kZXIvY3NzL2J1aWxkLmpzXG4gKiogbW9kdWxlIGlkID0gMzhcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF9hbHBoYSA9IHJlcXVpcmUoJy4uLy4uL3ZhbHVlLXR5cGVzL2FscGhhJyk7XG5cbnZhciBfYWxwaGEyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfYWxwaGEpO1xuXG52YXIgX2F4ZXMgPSByZXF1aXJlKCcuLi8uLi92YWx1ZS10eXBlcy9heGVzJyk7XG5cbnZhciBfYXhlczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9heGVzKTtcblxudmFyIF9jb2xvciA9IHJlcXVpcmUoJy4uLy4uL3ZhbHVlLXR5cGVzL2NvbG9yJyk7XG5cbnZhciBfY29sb3IyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY29sb3IpO1xuXG52YXIgX2NvbXBsZXggPSByZXF1aXJlKCcuLi8uLi92YWx1ZS10eXBlcy9jb21wbGV4Jyk7XG5cbnZhciBfY29tcGxleDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jb21wbGV4KTtcblxudmFyIF9zY2FsZSA9IHJlcXVpcmUoJy4uLy4uL3ZhbHVlLXR5cGVzL3NjYWxlJyk7XG5cbnZhciBfc2NhbGUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfc2NhbGUpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5leHBvcnRzLmRlZmF1bHQgPSB7XG4gICAgZmlsbDogX2NvbG9yMi5kZWZhdWx0LFxuICAgIHN0cm9rZTogX2NvbG9yMi5kZWZhdWx0LFxuICAgIHNjYWxlOiBfc2NhbGUyLmRlZmF1bHQsXG4gICAgc2NhbGVYOiBfc2NhbGUyLmRlZmF1bHQsXG4gICAgc2NhbGVZOiBfc2NhbGUyLmRlZmF1bHQsXG4gICAgdHJhbnNmb3JtT3JpZ2luOiBfYXhlczIuZGVmYXVsdCxcbiAgICBkOiBfY29tcGxleDIuZGVmYXVsdCxcbiAgICBvcGFjaXR5OiBfYWxwaGEyLmRlZmF1bHQsXG4gICAgZmlsbE9wYWNpdHk6IF9hbHBoYTIuZGVmYXVsdCxcbiAgICBzdHJva2VPcGFjaXR5OiBfYWxwaGEyLmRlZmF1bHRcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5OeVl5OXlaVzVrWlhJdmMzWm5MM1poYkhWbExYUjVjR1V0YldGd0xtcHpJbDBzSW01aGJXVnpJanBiWFN3aWJXRndjR2x1WjNNaU9pSTdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN08ydENRVTFsTzBGQlExZ3NlVUpCUkZjN1FVRkZXQ3d5UWtGR1Z6dEJRVWRZTERCQ1FVaFhPMEZCU1Znc01rSkJTbGM3UVVGTFdDd3lRa0ZNVnp0QlFVMVlMRzFEUVU1WE8wRkJUMWdzZDBKQlVGYzdRVUZSV0N3MFFrRlNWenRCUVZOWUxHZERRVlJYTzBGQlZWZ3NhME5CVmxjaUxDSm1hV3hsSWpvaWRtRnNkV1V0ZEhsd1pTMXRZWEF1YW5NaUxDSnpiM1Z5WTJWU2IyOTBJam9pTDFWelpYSnpMMDFoZEhRdlUybDBaWE12Y0c5d2JXOTBhVzl1SWl3aWMyOTFjbU5sYzBOdmJuUmxiblFpT2xzaWFXMXdiM0owSUdGc2NHaGhJR1p5YjIwZ0p5NHVMeTR1TDNaaGJIVmxMWFI1Y0dWekwyRnNjR2hoSnp0Y2JtbHRjRzl5ZENCaGVHVnpJR1p5YjIwZ0p5NHVMeTR1TDNaaGJIVmxMWFI1Y0dWekwyRjRaWE1uTzF4dWFXMXdiM0owSUdOdmJHOXlJR1p5YjIwZ0p5NHVMeTR1TDNaaGJIVmxMWFI1Y0dWekwyTnZiRzl5Snp0Y2JtbHRjRzl5ZENCamIyMXdiR1Y0SUdaeWIyMGdKeTR1THk0dUwzWmhiSFZsTFhSNWNHVnpMMk52YlhCc1pYZ25PMXh1YVcxd2IzSjBJSE5qWVd4bElHWnliMjBnSnk0dUx5NHVMM1poYkhWbExYUjVjR1Z6TDNOallXeGxKenRjYmx4dVpYaHdiM0owSUdSbFptRjFiSFFnZTF4dUlDQWdJR1pwYkd3NklHTnZiRzl5TEZ4dUlDQWdJSE4wY205clpUb2dZMjlzYjNJc1hHNGdJQ0FnYzJOaGJHVTZJSE5qWVd4bExGeHVJQ0FnSUhOallXeGxXRG9nYzJOaGJHVXNYRzRnSUNBZ2MyTmhiR1ZaT2lCelkyRnNaU3hjYmlBZ0lDQjBjbUZ1YzJadmNtMVBjbWxuYVc0NklHRjRaWE1zWEc0Z0lDQWdaRG9nWTI5dGNHeGxlQ3hjYmlBZ0lDQnZjR0ZqYVhSNU9pQmhiSEJvWVN4Y2JpQWdJQ0JtYVd4c1QzQmhZMmwwZVRvZ1lXeHdhR0VzWEc0Z0lDQWdjM1J5YjJ0bFQzQmhZMmwwZVRvZ1lXeHdhR0ZjYm4wN0lsMTlcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL3JlbmRlci9zdmcvdmFsdWUtdHlwZS1tYXAuanNcbiAqKiBtb2R1bGUgaWQgPSAzOVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0cy5kZWZhdWx0ID0gYnVpbGQ7XG5cbnZhciBfdXRpbHMgPSByZXF1aXJlKCcuLi8uLi9pbmMvdXRpbHMnKTtcblxudmFyIF90cmFuc2Zvcm1Qcm9wcyA9IHJlcXVpcmUoJy4uL2Nzcy90cmFuc2Zvcm0tcHJvcHMnKTtcblxudmFyIF90cmFuc2Zvcm1Qcm9wczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF90cmFuc2Zvcm1Qcm9wcyk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbnZhciBaRVJPX05PVF9aRVJPID0gMC4wMDAxO1xuXG5mdW5jdGlvbiBidWlsZChzdGF0ZSwgb3JpZ2luKSB7XG4gICAgdmFyIHByb3BzID0ge30sXG4gICAgICAgIGhhc1RyYW5zZm9ybSA9IGZhbHNlLFxuICAgICAgICBzY2FsZSA9IHN0YXRlLnNjYWxlICE9PSB1bmRlZmluZWQgPyBzdGF0ZS5zY2FsZSB8fCBaRVJPX05PVF9aRVJPIDogc3RhdGUuc2NhbGVYIHx8IDEsXG4gICAgICAgIHNjYWxlWSA9IHN0YXRlLnNjYWxlWSAhPT0gdW5kZWZpbmVkID8gc3RhdGUuc2NhbGVZIHx8IFpFUk9fTk9UX1pFUk8gOiBzY2FsZSB8fCAxLFxuICAgICAgICB0cmFuc2Zvcm1PcmlnaW5YID0gb3JpZ2luLngsXG4gICAgICAgIHRyYW5zZm9ybU9yaWdpblkgPSBvcmlnaW4ueSxcbiAgICAgICAgc2NhbGVUcmFuc2Zvcm1YID0gLXRyYW5zZm9ybU9yaWdpblggKiAoc2NhbGUgKiAxKSxcbiAgICAgICAgc2NhbGVUcmFuc2Zvcm1ZID0gLXRyYW5zZm9ybU9yaWdpblkgKiAoc2NhbGVZICogMSksXG4gICAgICAgIHNjYWxlUmVwbGFjZVggPSB0cmFuc2Zvcm1PcmlnaW5YIC8gc2NhbGUsXG4gICAgICAgIHNjYWxlUmVwbGFjZVkgPSB0cmFuc2Zvcm1PcmlnaW5ZIC8gc2NhbGVZLFxuICAgICAgICB0cmFuc2Zvcm0gPSB7XG4gICAgICAgIHRyYW5zbGF0ZTogJ3RyYW5zbGF0ZSgnICsgc3RhdGUudHJhbnNsYXRlWCArICcsICcgKyBzdGF0ZS50cmFuc2xhdGVZICsgJykgJyxcbiAgICAgICAgc2NhbGU6ICd0cmFuc2xhdGUoJyArIHNjYWxlVHJhbnNmb3JtWCArICcsICcgKyBzY2FsZVRyYW5zZm9ybVkgKyAnKSBzY2FsZSgnICsgc2NhbGUgKyAnLCAnICsgc2NhbGVZICsgJykgdHJhbnNsYXRlKCcgKyBzY2FsZVJlcGxhY2VYICsgJywgJyArIHNjYWxlUmVwbGFjZVkgKyAnKSAnLFxuICAgICAgICByb3RhdGU6ICdyb3RhdGUoJyArIHN0YXRlLnJvdGF0ZSArICcsICcgKyB0cmFuc2Zvcm1PcmlnaW5YICsgJywgJyArIHRyYW5zZm9ybU9yaWdpblkgKyAnKSAnLFxuICAgICAgICBza2V3WDogJ3NrZXdYKCcgKyBzdGF0ZS5za2V3WCArICcpICcsXG4gICAgICAgIHNrZXdZOiAnc2tld1koJyArIHN0YXRlLnNrZXdZICsgJykgJ1xuICAgIH07XG5cbiAgICAoMCwgX3V0aWxzLmVhY2gpKHN0YXRlLCBmdW5jdGlvbiAoa2V5LCB2YWx1ZSkge1xuICAgICAgICBpZiAoX3RyYW5zZm9ybVByb3BzMi5kZWZhdWx0W2tleV0pIHtcbiAgICAgICAgICAgIGhhc1RyYW5zZm9ybSA9IHRydWU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBwcm9wc1soMCwgX3V0aWxzLmNhbWVsVG9EYXNoKShrZXkpXSA9IHZhbHVlO1xuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICBpZiAoaGFzVHJhbnNmb3JtKSB7XG4gICAgICAgIHByb3BzLnRyYW5zZm9ybSA9ICcnO1xuXG4gICAgICAgICgwLCBfdXRpbHMuZWFjaCkodHJhbnNmb3JtLCBmdW5jdGlvbiAoa2V5LCB2YWx1ZSkge1xuICAgICAgICAgICAgdmFyIGRlZmF1bHRWYWx1ZSA9IGtleSA9PT0gJ3NjYWxlJyA/ICcxJyA6ICcwJztcbiAgICAgICAgICAgIHByb3BzLnRyYW5zZm9ybSArPSB2YWx1ZS5yZXBsYWNlKC91bmRlZmluZWQvZywgZGVmYXVsdFZhbHVlKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHByb3BzO1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluTnlZeTl5Wlc1a1pYSXZjM1puTDJKMWFXeGtMbXB6SWwwc0ltNWhiV1Z6SWpwYlhTd2liV0Z3Y0dsdVozTWlPaUk3T3p0clFrRkxkMEk3T3pzN096czdPenM3UVVGR2VFSXNTVUZCVFN4blFrRkJaMElzVFVGQmFFSTdPMEZCUlZNc1UwRkJVeXhMUVVGVUxFTkJRV1VzUzBGQlppeEZRVUZ6UWl4TlFVRjBRaXhGUVVFNFFqdEJRVU42UXl4UlFVRkpMRkZCUVZFc1JVRkJVanRSUVVOQkxHVkJRV1VzUzBGQlpqdFJRVU5CTEZGQlFWRXNUVUZCVFN4TFFVRk9MRXRCUVdkQ0xGTkJRV2hDTEVkQlFUUkNMRTFCUVUwc1MwRkJUaXhKUVVGbExHRkJRV1lzUjBGQkswSXNUVUZCVFN4TlFVRk9MRWxCUVdkQ0xFTkJRV2hDTzFGQlEyNUZMRk5CUVZNc1RVRkJUU3hOUVVGT0xFdEJRV2xDTEZOQlFXcENMRWRCUVRaQ0xFMUJRVTBzVFVGQlRpeEpRVUZuUWl4aFFVRm9RaXhIUVVGblF5eFRRVUZUTEVOQlFWUTdVVUZEZEVVc2JVSkJRVzFDTEU5QlFVOHNRMEZCVUR0UlFVTnVRaXh0UWtGQmJVSXNUMEZCVHl4RFFVRlFPMUZCUTI1Q0xHdENRVUZyUWl4RFFVRkZMR2RDUVVGR0xFbEJRWE5DTEZGQlFWRXNRMEZCVWl4RFFVRjBRanRSUVVOc1FpeHJRa0ZCYTBJc1EwRkJSU3huUWtGQlJpeEpRVUZ6UWl4VFFVRlRMRU5CUVZRc1EwRkJkRUk3VVVGRGJFSXNaMEpCUVdkQ0xHMUNRVUZ0UWl4TFFVRnVRanRSUVVOb1FpeG5Ra0ZCWjBJc2JVSkJRVzFDTEUxQlFXNUNPMUZCUTJoQ0xGbEJRVms3UVVGRFVpeHJRMEZCZDBJc1RVRkJUU3hWUVVGT0xGVkJRWEZDTEUxQlFVMHNWVUZCVGl4UFFVRTNRenRCUVVOQkxEaENRVUZ2UWl4NVFrRkJiMElzSzBKQlFUQkNMR1ZCUVZVc01FSkJRWEZDTEhWQ1FVRnJRaXh2UWtGQmJrZzdRVUZEUVN3MFFrRkJhMElzVFVGQlRTeE5RVUZPTEZWQlFXbENMREJDUVVGeFFpeDFRa0ZCZUVRN1FVRkRRU3d3UWtGQlowSXNUVUZCVFN4TFFVRk9MRTlCUVdoQ08wRkJRMEVzTUVKQlFXZENMRTFCUVUwc1MwRkJUaXhQUVVGb1FqdExRVXhLTEVOQldIRkRPenRCUVcxQ2VrTXNjVUpCUVVzc1MwRkJUQ3hGUVVGWkxGVkJRVU1zUjBGQlJDeEZRVUZOTEV0QlFVNHNSVUZCWjBJN1FVRkRlRUlzV1VGQlNTeDVRa0ZCWlN4SFFVRm1MRU5CUVVvc1JVRkJlVUk3UVVGRGNrSXNNa0pCUVdVc1NVRkJaaXhEUVVSeFFqdFRRVUY2UWl4TlFVVlBPMEZCUTBnc2EwSkJRVTBzZDBKQlFWa3NSMEZCV2l4RFFVRk9MRWxCUVRCQ0xFdEJRVEZDTEVOQlJFYzdVMEZHVUR0TFFVUlJMRU5CUVZvc1EwRnVRbmxET3p0QlFUSkNla01zVVVGQlNTeFpRVUZLTEVWQlFXdENPMEZCUTJRc1kwRkJUU3hUUVVGT0xFZEJRV3RDTEVWQlFXeENMRU5CUkdNN08wRkJSMlFzZVVKQlFVc3NVMEZCVEN4RlFVRm5RaXhWUVVGRExFZEJRVVFzUlVGQlRTeExRVUZPTEVWQlFXZENPMEZCUXpWQ0xHZENRVUZKTEdWQlFXVXNSMEZCUXl4TFFVRlJMRTlCUVZJc1IwRkJiVUlzUjBGQmNFSXNSMEZCTUVJc1IwRkJNVUlzUTBGRVV6dEJRVVUxUWl4clFrRkJUU3hUUVVGT0xFbEJRVzFDTEUxQlFVMHNUMEZCVGl4RFFVRmpMRmxCUVdRc1JVRkJORUlzV1VGQk5VSXNRMEZCYmtJc1EwRkdORUk3VTBGQmFFSXNRMEZCYUVJc1EwRklZenRMUVVGc1FqczdRVUZUUVN4WFFVRlBMRXRCUVZBc1EwRndRM2xETzBOQlFUbENJaXdpWm1sc1pTSTZJbUoxYVd4a0xtcHpJaXdpYzI5MWNtTmxVbTl2ZENJNklpOVZjMlZ5Y3k5TllYUjBMMU5wZEdWekwzQnZjRzF2ZEdsdmJpSXNJbk52ZFhKalpYTkRiMjUwWlc1MElqcGJJbWx0Y0c5eWRDQjdJR1ZoWTJnc0lHTmhiV1ZzVkc5RVlYTm9JSDBnWm5KdmJTQW5MaTR2TGk0dmFXNWpMM1YwYVd4ekp6dGNibWx0Y0c5eWRDQjBjbUZ1YzJadmNtMVFjbTl3Y3lCbWNtOXRJQ2N1TGk5amMzTXZkSEpoYm5ObWIzSnRMWEJ5YjNCekp6dGNibHh1WTI5dWMzUWdXa1ZTVDE5T1QxUmZXa1ZTVHlBOUlEQXVNREF3TVR0Y2JseHVaWGh3YjNKMElHUmxabUYxYkhRZ1puVnVZM1JwYjI0Z1luVnBiR1FvYzNSaGRHVXNJRzl5YVdkcGJpa2dlMXh1SUNBZ0lHeGxkQ0J3Y205d2N5QTlJSHQ5TEZ4dUlDQWdJQ0FnSUNCb1lYTlVjbUZ1YzJadmNtMGdQU0JtWVd4elpTeGNiaUFnSUNBZ0lDQWdjMk5oYkdVZ1BTQnpkR0YwWlM1elkyRnNaU0FoUFQwZ2RXNWtaV1pwYm1Wa0lEOGdjM1JoZEdVdWMyTmhiR1VnZkh3Z1drVlNUMTlPVDFSZldrVlNUeUE2SUhOMFlYUmxMbk5qWVd4bFdDQjhmQ0F4TEZ4dUlDQWdJQ0FnSUNCelkyRnNaVmtnUFNCemRHRjBaUzV6WTJGc1pWa2dJVDA5SUhWdVpHVm1hVzVsWkNBL0lITjBZWFJsTG5OallXeGxXU0I4ZkNCYVJWSlBYMDVQVkY5YVJWSlBJRG9nYzJOaGJHVWdmSHdnTVN4Y2JpQWdJQ0FnSUNBZ2RISmhibk5tYjNKdFQzSnBaMmx1V0NBOUlHOXlhV2RwYmk1NExGeHVJQ0FnSUNBZ0lDQjBjbUZ1YzJadmNtMVBjbWxuYVc1WklEMGdiM0pwWjJsdUxua3NYRzRnSUNBZ0lDQWdJSE5qWVd4bFZISmhibk5tYjNKdFdDQTlJQzBnZEhKaGJuTm1iM0p0VDNKcFoybHVXQ0FxSUNoelkyRnNaU0FxSURFcExGeHVJQ0FnSUNBZ0lDQnpZMkZzWlZSeVlXNXpabTl5YlZrZ1BTQXRJSFJ5WVc1elptOXliVTl5YVdkcGJsa2dLaUFvYzJOaGJHVlpJQ29nTVNrc1hHNGdJQ0FnSUNBZ0lITmpZV3hsVW1Wd2JHRmpaVmdnUFNCMGNtRnVjMlp2Y20xUGNtbG5hVzVZSUM4Z2MyTmhiR1VzWEc0Z0lDQWdJQ0FnSUhOallXeGxVbVZ3YkdGalpWa2dQU0IwY21GdWMyWnZjbTFQY21sbmFXNVpJQzhnYzJOaGJHVlpMRnh1SUNBZ0lDQWdJQ0IwY21GdWMyWnZjbTBnUFNCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0IwY21GdWMyeGhkR1U2SUdCMGNtRnVjMnhoZEdVb0pIdHpkR0YwWlM1MGNtRnVjMnhoZEdWWWZTd2dKSHR6ZEdGMFpTNTBjbUZ1YzJ4aGRHVlpmU2tnWUN4Y2JpQWdJQ0FnSUNBZ0lDQWdJSE5qWVd4bE9pQmdkSEpoYm5Oc1lYUmxLQ1I3YzJOaGJHVlVjbUZ1YzJadmNtMVlmU3dnSkh0elkyRnNaVlJ5WVc1elptOXliVmw5S1NCelkyRnNaU2drZTNOallXeGxmU3dnSkh0elkyRnNaVmw5S1NCMGNtRnVjMnhoZEdVb0pIdHpZMkZzWlZKbGNHeGhZMlZZZlN3Z0pIdHpZMkZzWlZKbGNHeGhZMlZaZlNrZ1lDeGNiaUFnSUNBZ0lDQWdJQ0FnSUhKdmRHRjBaVG9nWUhKdmRHRjBaU2drZTNOMFlYUmxMbkp2ZEdGMFpYMHNJQ1I3ZEhKaGJuTm1iM0p0VDNKcFoybHVXSDBzSUNSN2RISmhibk5tYjNKdFQzSnBaMmx1V1gwcElHQXNYRzRnSUNBZ0lDQWdJQ0FnSUNCemEyVjNXRG9nWUhOclpYZFlLQ1I3YzNSaGRHVXVjMnRsZDFoOUtTQmdMRnh1SUNBZ0lDQWdJQ0FnSUNBZ2MydGxkMWs2SUdCemEyVjNXU2drZTNOMFlYUmxMbk5yWlhkWmZTa2dZRnh1SUNBZ0lDQWdJQ0I5TzF4dVhHNGdJQ0FnWldGamFDaHpkR0YwWlN3Z0tHdGxlU3dnZG1Gc2RXVXBJRDArSUh0Y2JpQWdJQ0FnSUNBZ2FXWWdLSFJ5WVc1elptOXliVkJ5YjNCelcydGxlVjBwSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJR2hoYzFSeVlXNXpabTl5YlNBOUlIUnlkV1U3WEc0Z0lDQWdJQ0FnSUgwZ1pXeHpaU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQndjbTl3YzF0allXMWxiRlJ2UkdGemFDaHJaWGtwWFNBOUlIWmhiSFZsTzF4dUlDQWdJQ0FnSUNCOVhHNGdJQ0FnZlNrN1hHNWNiaUFnSUNCcFppQW9hR0Z6VkhKaGJuTm1iM0p0S1NCN1hHNGdJQ0FnSUNBZ0lIQnliM0J6TG5SeVlXNXpabTl5YlNBOUlDY25PMXh1WEc0Z0lDQWdJQ0FnSUdWaFkyZ29kSEpoYm5ObWIzSnRMQ0FvYTJWNUxDQjJZV3gxWlNrZ1BUNGdlMXh1SUNBZ0lDQWdJQ0FnSUNBZ2RtRnlJR1JsWm1GMWJIUldZV3gxWlNBOUlDaHJaWGtnUFQwOUlDZHpZMkZzWlNjcElEOGdKekVuSURvZ0p6QW5PMXh1SUNBZ0lDQWdJQ0FnSUNBZ2NISnZjSE11ZEhKaGJuTm1iM0p0SUNzOUlIWmhiSFZsTG5KbGNHeGhZMlVvTDNWdVpHVm1hVzVsWkM5bkxDQmtaV1poZFd4MFZtRnNkV1VwTzF4dUlDQWdJQ0FnSUNCOUtUdGNiaUFnSUNCOVhHNWNiaUFnSUNCeVpYUjFjbTRnY0hKdmNITTdYRzU5SWwxOVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvcmVuZGVyL3N2Zy9idWlsZC5qc1xuICoqIG1vZHVsZSBpZCA9IDQwXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHMuZGVmYXVsdCA9IGNyZWF0ZUVhc2luZ0Z1bmN0aW9uO1xuLypcbiAgICBNaXJyb3IgZWFzaW5nXG4gICAgXG4gICAgTWlycm9ycyB0aGUgcHJvdmlkZWQgZWFzaW5nIGZ1bmN0aW9uLCB1c2VkIGhlcmUgZm9yIG1pcnJvcmluZyBhblxuICAgIGVhc2VJbiBpbnRvIGFuIGVhc2VJbk91dFxuICAgIFxuICAgIEBwYXJhbSBbbnVtYmVyXTogUHJvZ3Jlc3MsIGZyb20gMCAtIDEsIG9mIGN1cnJlbnQgc2hpZnRcbiAgICBAcGFyYW0gW2Z1bmN0aW9uXTogVGhlIGVhc2luZyBmdW5jdGlvbiB0byBtaXJyb3JcbiAgICBAcmV0dXJucyBbbnVtYmVyXTogVGhlIGVhc2luZy1hZGp1c3RlZCBkZWx0YVxuKi9cbnZhciBtaXJyb3JFYXNpbmcgPSBmdW5jdGlvbiAobWV0aG9kKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChwcm9ncmVzcywgc3RyZW5ndGgpIHtcbiAgICAgICAgcmV0dXJuIHByb2dyZXNzIDw9IDAuNSA/IG1ldGhvZCgyICogcHJvZ3Jlc3MsIHN0cmVuZ3RoKSAvIDIgOiAoMiAtIG1ldGhvZCgyICogKDEgLSBwcm9ncmVzcyksIHN0cmVuZ3RoKSkgLyAyO1xuICAgIH07XG59O1xuXG4vKlxuICAgIFJldmVyc2UgZWFzaW5nXG4gICAgXG4gICAgUmV2ZXJzZXMgdGhlIG91dHB1dCBvZiB0aGUgcHJvdmlkZWQgZWFzaW5nIGZ1bmN0aW9uLCB1c2VkIGZvciBmbGlwcGluZyBlYXNlSW5cbiAgICBjdXJ2ZSB0byBhbiBlYXNlT3V0LlxuICAgIFxuICAgIEBwYXJhbSBbbnVtYmVyXTogUHJvZ3Jlc3MsIGZyb20gMCAtIDEsIG9mIGN1cnJlbnQgc2hpZnRcbiAgICBAcGFyYW0gW2Z1bmN0aW9uXTogVGhlIGVhc2luZyBmdW5jdGlvbiB0byByZXZlcnNlXG4gICAgQHJldHVybnMgW251bWJlcl06IFRoZSBlYXNpbmctYWRqdXN0ZWQgZGVsdGFcbiovXG52YXIgcmV2ZXJzZUVhc2luZyA9IGZ1bmN0aW9uIChtZXRob2QpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gKHByb2dyZXNzLCBzdHJlbmd0aCkge1xuICAgICAgICByZXR1cm4gMSAtIG1ldGhvZCgxIC0gcHJvZ3Jlc3MsIHN0cmVuZ3RoKTtcbiAgICB9O1xufTtcblxuLypcbiAgICBFYXNpbmcgY2xhc3NcblxuICAgIElmIHByb3ZpZGVkIGVhc2luZyBmdW5jdGlvbiwgcmV0dXJucyBlYXNpbmcgZnVuY3Rpb24gd2l0aCBcbiAgICBpbi9vdXQvaW5PdXQgdmFyaWF0aW9uc1xuXG4gICAgSWYgcHJvdmlkZWQgZm91ciBhcmd1bWVudHMsIHJldHVybnMgbmV3IEJlemllciBjbGFzcyBpbnN0ZWFkLlxuKi9cbmZ1bmN0aW9uIGNyZWF0ZUVhc2luZ0Z1bmN0aW9uKG1ldGhvZCkge1xuICAgIHZhciBlYXNpbmdGdW5jdGlvbiA9IGZ1bmN0aW9uIChwcm9ncmVzcywgc3RyZW5ndGgpIHtcbiAgICAgICAgcmV0dXJuIG1ldGhvZChwcm9ncmVzcywgc3RyZW5ndGgpO1xuICAgIH07XG5cbiAgICBlYXNpbmdGdW5jdGlvbi5pbiA9IGZ1bmN0aW9uIChwcm9ncmVzcywgc3RyZW5ndGgpIHtcbiAgICAgICAgcmV0dXJuIG1ldGhvZChwcm9ncmVzcywgc3RyZW5ndGgpO1xuICAgIH07XG4gICAgZWFzaW5nRnVuY3Rpb24ub3V0ID0gcmV2ZXJzZUVhc2luZyhtZXRob2QpO1xuICAgIGVhc2luZ0Z1bmN0aW9uLmluT3V0ID0gbWlycm9yRWFzaW5nKG1ldGhvZCk7XG5cbiAgICByZXR1cm4gZWFzaW5nRnVuY3Rpb247XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5OeVl5OWhZM1JwYjI1ekwyVmhjMmx1Wnk5amNtVmhkR1V0WldGemFXNW5MbXB6SWwwc0ltNWhiV1Z6SWpwYlhTd2liV0Z3Y0dsdVozTWlPaUk3T3p0clFrRm5RM2RDT3pzN096czdPenM3T3p0QlFYUkNlRUlzU1VGQlRTeGxRVUZsTEZWQlFVTXNUVUZCUkR0WFFVRlpMRlZCUVVNc1VVRkJSQ3hGUVVGWExGRkJRVmc3WlVGQmQwSXNVVUZCUXl4SlFVRlpMRWRCUVZvc1IwRkJiVUlzVDBGQlR5eEpRVUZKTEZGQlFVb3NSVUZCWXl4UlFVRnlRaXhKUVVGcFF5eERRVUZxUXl4SFFVRnhReXhEUVVGRExFbEJRVWtzVDBGQlR5eExRVUZMTEVsQlFVa3NVVUZCU2l4RFFVRk1MRVZCUVc5Q0xGRkJRVE5DTEVOQlFVb3NRMEZCUkN4SFFVRTJReXhEUVVFM1F6dExRVUZxUmp0RFFVRmFPenM3T3pzN096czdPenM3UVVGWmNrSXNTVUZCVFN4blFrRkJaMElzVlVGQlF5eE5RVUZFTzFkQlFWa3NWVUZCUXl4UlFVRkVMRVZCUVZjc1VVRkJXRHRsUVVGM1FpeEpRVUZKTEU5QlFVOHNTVUZCU1N4UlFVRktMRVZCUVdNc1VVRkJja0lzUTBGQlNqdExRVUY0UWp0RFFVRmFPenM3T3pzN096czdPMEZCVlZBc1UwRkJVeXh2UWtGQlZDeERRVUU0UWl4TlFVRTVRaXhGUVVGelF6dEJRVU5xUkN4UlFVRkpMR2xDUVVGcFFpeFZRVUZETEZGQlFVUXNSVUZCVnl4UlFVRllPMlZCUVhkQ0xFOUJRVThzVVVGQlVDeEZRVUZwUWl4UlFVRnFRanRMUVVGNFFpeERRVVEwUWpzN1FVRkhha1FzYlVKQlFXVXNSVUZCWml4SFFVRnZRaXhWUVVGRExGRkJRVVFzUlVGQlZ5eFJRVUZZTzJWQlFYZENMRTlCUVU4c1VVRkJVQ3hGUVVGcFFpeFJRVUZxUWp0TFFVRjRRaXhEUVVnMlFqdEJRVWxxUkN4dFFrRkJaU3hIUVVGbUxFZEJRWEZDTEdOQlFXTXNUVUZCWkN4RFFVRnlRaXhEUVVwcFJEdEJRVXRxUkN4dFFrRkJaU3hMUVVGbUxFZEJRWFZDTEdGQlFXRXNUVUZCWWl4RFFVRjJRaXhEUVV4cFJEczdRVUZQYWtRc1YwRkJUeXhqUVVGUUxFTkJVR2xFTzBOQlFYUkRJaXdpWm1sc1pTSTZJbU55WldGMFpTMWxZWE5wYm1jdWFuTWlMQ0p6YjNWeVkyVlNiMjkwSWpvaUwxVnpaWEp6TDAxaGRIUXZVMmwwWlhNdmNHOXdiVzkwYVc5dUlpd2ljMjkxY21ObGMwTnZiblJsYm5RaU9sc2lMeXBjYmlBZ0lDQk5hWEp5YjNJZ1pXRnphVzVuWEc0Z0lDQWdYRzRnSUNBZ1RXbHljbTl5Y3lCMGFHVWdjSEp2ZG1sa1pXUWdaV0Z6YVc1bklHWjFibU4wYVc5dUxDQjFjMlZrSUdobGNtVWdabTl5SUcxcGNuSnZjbWx1WnlCaGJseHVJQ0FnSUdWaGMyVkpiaUJwYm5SdklHRnVJR1ZoYzJWSmJrOTFkRnh1SUNBZ0lGeHVJQ0FnSUVCd1lYSmhiU0JiYm5WdFltVnlYVG9nVUhKdlozSmxjM01zSUdaeWIyMGdNQ0F0SURFc0lHOW1JR04xY25KbGJuUWdjMmhwWm5SY2JpQWdJQ0JBY0dGeVlXMGdXMloxYm1OMGFXOXVYVG9nVkdobElHVmhjMmx1WnlCbWRXNWpkR2x2YmlCMGJ5QnRhWEp5YjNKY2JpQWdJQ0JBY21WMGRYSnVjeUJiYm5WdFltVnlYVG9nVkdobElHVmhjMmx1WnkxaFpHcDFjM1JsWkNCa1pXeDBZVnh1S2k5Y2JtTnZibk4wSUcxcGNuSnZja1ZoYzJsdVp5QTlJQ2h0WlhSb2IyUXBJRDArSUNod2NtOW5jbVZ6Y3l3Z2MzUnlaVzVuZEdncElEMCtJQ2h3Y205bmNtVnpjeUE4UFNBd0xqVXBJRDhnYldWMGFHOWtLRElnS2lCd2NtOW5jbVZ6Y3l3Z2MzUnlaVzVuZEdncElDOGdNaUE2SUNneUlDMGdiV1YwYUc5a0tESWdLaUFvTVNBdElIQnliMmR5WlhOektTd2djM1J5Wlc1bmRHZ3BLU0F2SURJN1hHNGdJQ0FnSUNBZ0lGeHVMeXBjYmlBZ0lDQlNaWFpsY25ObElHVmhjMmx1WjF4dUlDQWdJRnh1SUNBZ0lGSmxkbVZ5YzJWeklIUm9aU0J2ZFhSd2RYUWdiMllnZEdobElIQnliM1pwWkdWa0lHVmhjMmx1WnlCbWRXNWpkR2x2Yml3Z2RYTmxaQ0JtYjNJZ1pteHBjSEJwYm1jZ1pXRnpaVWx1WEc0Z0lDQWdZM1Z5ZG1VZ2RHOGdZVzRnWldGelpVOTFkQzVjYmlBZ0lDQmNiaUFnSUNCQWNHRnlZVzBnVzI1MWJXSmxjbDA2SUZCeWIyZHlaWE56TENCbWNtOXRJREFnTFNBeExDQnZaaUJqZFhKeVpXNTBJSE5vYVdaMFhHNGdJQ0FnUUhCaGNtRnRJRnRtZFc1amRHbHZibDA2SUZSb1pTQmxZWE5wYm1jZ1puVnVZM1JwYjI0Z2RHOGdjbVYyWlhKelpWeHVJQ0FnSUVCeVpYUjFjbTV6SUZ0dWRXMWlaWEpkT2lCVWFHVWdaV0Z6YVc1bkxXRmthblZ6ZEdWa0lHUmxiSFJoWEc0cUwxeHVZMjl1YzNRZ2NtVjJaWEp6WlVWaGMybHVaeUE5SUNodFpYUm9iMlFwSUQwK0lDaHdjbTluY21WemN5d2djM1J5Wlc1bmRHZ3BJRDArSURFZ0xTQnRaWFJvYjJRb01TQXRJSEJ5YjJkeVpYTnpMQ0J6ZEhKbGJtZDBhQ2s3WEc1Y2JpOHFYRzRnSUNBZ1JXRnphVzVuSUdOc1lYTnpYRzVjYmlBZ0lDQkpaaUJ3Y205MmFXUmxaQ0JsWVhOcGJtY2dablZ1WTNScGIyNHNJSEpsZEhWeWJuTWdaV0Z6YVc1bklHWjFibU4wYVc5dUlIZHBkR2dnWEc0Z0lDQWdhVzR2YjNWMEwybHVUM1YwSUhaaGNtbGhkR2x2Ym5OY2JseHVJQ0FnSUVsbUlIQnliM1pwWkdWa0lHWnZkWElnWVhKbmRXMWxiblJ6TENCeVpYUjFjbTV6SUc1bGR5QkNaWHBwWlhJZ1kyeGhjM01nYVc1emRHVmhaQzVjYmlvdlhHNWxlSEJ2Y25RZ1pHVm1ZWFZzZENCbWRXNWpkR2x2YmlCamNtVmhkR1ZGWVhOcGJtZEdkVzVqZEdsdmJpaHRaWFJvYjJRcElIdGNiaUFnSUNCc1pYUWdaV0Z6YVc1blJuVnVZM1JwYjI0Z1BTQW9jSEp2WjNKbGMzTXNJSE4wY21WdVozUm9LU0E5UGlCdFpYUm9iMlFvY0hKdlozSmxjM01zSUhOMGNtVnVaM1JvS1R0Y2JseHVJQ0FnSUdWaGMybHVaMFoxYm1OMGFXOXVMbWx1SUQwZ0tIQnliMmR5WlhOekxDQnpkSEpsYm1kMGFDa2dQVDRnYldWMGFHOWtLSEJ5YjJkeVpYTnpMQ0J6ZEhKbGJtZDBhQ2s3WEc0Z0lDQWdaV0Z6YVc1blJuVnVZM1JwYjI0dWIzVjBJRDBnY21WMlpYSnpaVVZoYzJsdVp5aHRaWFJvYjJRcE8xeHVJQ0FnSUdWaGMybHVaMFoxYm1OMGFXOXVMbWx1VDNWMElEMGdiV2x5Y205eVJXRnphVzVuS0cxbGRHaHZaQ2s3WEc1Y2JpQWdJQ0J5WlhSMWNtNGdaV0Z6YVc1blJuVnVZM1JwYjI0N1hHNTlYRzRpWFgwPVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvYWN0aW9ucy9lYXNpbmcvY3JlYXRlLWVhc2luZy5qc1xuICoqIG1vZHVsZSBpZCA9IDQxXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzLmRlZmF1bHQgPSBjdWJpY0Jlemllcjtcbi8qXG4gICAgQmV6aWVyIGZ1bmN0aW9uIGdlbmVyYXRvclxuICAgICAgICBcbiAgICBHYcOrdGFuIFJlbmF1ZGVhdSdzIEJlemllckVhc2luZ1xuICAgIGh0dHBzOi8vZ2l0aHViLmNvbS9ncmUvYmV6aWVyLWVhc2luZy9ibG9iL21hc3Rlci9pbmRleC5qcyAgXG4gICAgaHR0cHM6Ly9naXRodWIuY29tL2dyZS9iZXppZXItZWFzaW5nL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcbiAgICBZb3UncmUgYSBoZXJvXG4gICAgXG4gICAgVXNlXG4gICAgXG4gICAgICAgIHZhciBlYXNlT3V0ID0gbmV3IEJlemllciguMTcsLjY3LC44MywuNjcpLFxuICAgICAgICAgICAgeCA9IGVhc2VPdXQoMC41KTsgLy8gcmV0dXJucyAwLjYyNy4uLlxuKi9cblxuLy8gQ29uc3RhbnRzXG52YXIgTkVXVE9OX0lURVJBVElPTlMgPSA4O1xudmFyIE5FV1RPTl9NSU5fU0xPUEUgPSAwLjAwMTtcbnZhciBTVUJESVZJU0lPTl9QUkVDSVNJT04gPSAwLjAwMDAwMDE7XG52YXIgU1VCRElWSVNJT05fTUFYX0lURVJBVElPTlMgPSAxMDtcbnZhciBLX1NQTElORV9UQUJMRV9TSVpFID0gMTE7XG52YXIgS19TQU1QTEVfU1RFUF9TSVpFID0gMS4wIC8gKEtfU1BMSU5FX1RBQkxFX1NJWkUgLSAxLjApO1xudmFyIEZMT0FUXzMyX1NVUFBPUlRFRCA9IHR5cGVvZiBGbG9hdDMyQXJyYXkgIT09ICd1bmRlZmluZWQnO1xuXG4vLyBIZWxwZXIgbWV0aG9kc1xudmFyIGEgPSBmdW5jdGlvbiAoYTEsIGEyKSB7XG4gICAgcmV0dXJuIDEuMCAtIDMuMCAqIGEyICsgMy4wICogYTE7XG59O1xudmFyIGIgPSBmdW5jdGlvbiAoYTEsIGEyKSB7XG4gICAgcmV0dXJuIDMuMCAqIGEyIC0gNi4wICogYTE7XG59O1xudmFyIGMgPSBmdW5jdGlvbiAoYTEpIHtcbiAgICByZXR1cm4gMy4wICogYTE7XG59O1xuXG52YXIgZ2V0U2xvcGUgPSBmdW5jdGlvbiAodCwgYTEsIGEyKSB7XG4gICAgcmV0dXJuIDMuMCAqIGEoYTEsIGEyKSAqIHQgKiB0ICsgMi4wICogYihhMSwgYTIpICogdCArIGMoYTEpO1xufTtcblxudmFyIGNhbGNCZXppZXIgPSBmdW5jdGlvbiAodCwgYTEsIGEyKSB7XG4gICAgcmV0dXJuICgoYShhMSwgYTIpICogdCArIGIoYTEsIGEyKSkgKiB0ICsgYyhhMSkpICogdDtcbn07XG5cbi8qXG4gICAgQ3JlYXRlIGEgY3ViaWMgYmV6aWVyIHJlc29sdmVyXG4qL1xuZnVuY3Rpb24gY3ViaWNCZXppZXIobVgxLCBtWTEsIG1YMiwgbVkyKSB7XG4gICAgdmFyIHNhbXBsZVZhbHVlcyA9IEZMT0FUXzMyX1NVUFBPUlRFRCA/IG5ldyBGbG9hdDMyQXJyYXkoS19TUExJTkVfVEFCTEVfU0laRSkgOiBuZXcgQXJyYXkoS19TUExJTkVfVEFCTEVfU0laRSk7XG4gICAgdmFyIF9wcmVjb21wdXRlZCA9IGZhbHNlO1xuXG4gICAgdmFyIGJpbmFyeVN1YmRpdmlkZSA9IGZ1bmN0aW9uIChhWCwgYUEsIGFCKSB7XG4gICAgICAgIHZhciBpID0gMDtcbiAgICAgICAgdmFyIGN1cnJlbnRYID0gdW5kZWZpbmVkO1xuICAgICAgICB2YXIgY3VycmVudFQgPSB1bmRlZmluZWQ7XG5cbiAgICAgICAgZG8ge1xuICAgICAgICAgICAgY3VycmVudFQgPSBhQSArIChhQiAtIGFBKSAvIDIuMDtcbiAgICAgICAgICAgIGN1cnJlbnRYID0gY2FsY0JlemllcihjdXJyZW50VCwgbVgxLCBtWDIpIC0gYVg7XG4gICAgICAgICAgICBpZiAoY3VycmVudFggPiAwLjApIHtcbiAgICAgICAgICAgICAgICBhQiA9IGN1cnJlbnRUO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBhQSA9IGN1cnJlbnRUO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IHdoaWxlIChNYXRoLmFicyhjdXJyZW50WCkgPiBTVUJESVZJU0lPTl9QUkVDSVNJT04gJiYgKytpIDwgU1VCRElWSVNJT05fTUFYX0lURVJBVElPTlMpO1xuXG4gICAgICAgIHJldHVybiBjdXJyZW50VDtcbiAgICB9O1xuXG4gICAgdmFyIG5ld3RvblJhcGhzb25JdGVyYXRlID0gZnVuY3Rpb24gKGFYLCBhR3Vlc3NUKSB7XG4gICAgICAgIHZhciBpID0gMDtcbiAgICAgICAgdmFyIGN1cnJlbnRTbG9wZSA9IDA7XG4gICAgICAgIHZhciBjdXJyZW50WCA9IHVuZGVmaW5lZDtcblxuICAgICAgICBmb3IgKDsgaSA8IE5FV1RPTl9JVEVSQVRJT05TOyArK2kpIHtcbiAgICAgICAgICAgIGN1cnJlbnRTbG9wZSA9IGdldFNsb3BlKGFHdWVzc1QsIG1YMSwgbVgyKTtcblxuICAgICAgICAgICAgaWYgKGN1cnJlbnRTbG9wZSA9PT0gMC4wKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGFHdWVzc1Q7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGN1cnJlbnRYID0gY2FsY0JlemllcihhR3Vlc3NULCBtWDEsIG1YMikgLSBhWDtcbiAgICAgICAgICAgIGFHdWVzc1QgLT0gY3VycmVudFggLyBjdXJyZW50U2xvcGU7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gYUd1ZXNzVDtcbiAgICB9O1xuXG4gICAgdmFyIGNhbGNTYW1wbGVWYWx1ZXMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgS19TUExJTkVfVEFCTEVfU0laRTsgKytpKSB7XG4gICAgICAgICAgICBzYW1wbGVWYWx1ZXNbaV0gPSBjYWxjQmV6aWVyKGkgKiBLX1NBTVBMRV9TVEVQX1NJWkUsIG1YMSwgbVgyKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICB2YXIgZ2V0VEZvclggPSBmdW5jdGlvbiAoYVgpIHtcbiAgICAgICAgdmFyIGludGVydmFsU3RhcnQgPSAwLjA7XG4gICAgICAgIHZhciBjdXJyZW50U2FtcGxlID0gMTtcbiAgICAgICAgdmFyIGxhc3RTYW1wbGUgPSBLX1NQTElORV9UQUJMRV9TSVpFIC0gMTtcbiAgICAgICAgdmFyIGRpc3QgPSAwLjA7XG4gICAgICAgIHZhciBndWVzc0ZvclQgPSAwLjA7XG4gICAgICAgIHZhciBpbml0aWFsU2xvcGUgPSAwLjA7XG5cbiAgICAgICAgZm9yICg7IGN1cnJlbnRTYW1wbGUgIT0gbGFzdFNhbXBsZSAmJiBzYW1wbGVWYWx1ZXNbY3VycmVudFNhbXBsZV0gPD0gYVg7ICsrY3VycmVudFNhbXBsZSkge1xuICAgICAgICAgICAgaW50ZXJ2YWxTdGFydCArPSBLX1NBTVBMRV9TVEVQX1NJWkU7XG4gICAgICAgIH1cblxuICAgICAgICAtLWN1cnJlbnRTYW1wbGU7XG5cbiAgICAgICAgZGlzdCA9IChhWCAtIHNhbXBsZVZhbHVlc1tjdXJyZW50U2FtcGxlXSkgLyAoc2FtcGxlVmFsdWVzW2N1cnJlbnRTYW1wbGUgKyAxXSAtIHNhbXBsZVZhbHVlc1tjdXJyZW50U2FtcGxlXSk7XG4gICAgICAgIGd1ZXNzRm9yVCA9IGludGVydmFsU3RhcnQgKyBkaXN0ICogS19TQU1QTEVfU1RFUF9TSVpFO1xuXG4gICAgICAgIGluaXRpYWxTbG9wZSA9IGdldFNsb3BlKGd1ZXNzRm9yVCwgbVgxLCBtWDIpO1xuXG4gICAgICAgIC8vIElmIHNsb3BlIGlzIGdyZWF0ZXIgdGhhbiBtaW5cbiAgICAgICAgaWYgKGluaXRpYWxTbG9wZSA+PSBORVdUT05fTUlOX1NMT1BFKSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3dG9uUmFwaHNvbkl0ZXJhdGUoYVgsIGd1ZXNzRm9yVCk7XG4gICAgICAgICAgICAvLyBTbG9wZSBpcyBlcXVhbCB0byBtaW5cbiAgICAgICAgfSBlbHNlIGlmIChpbml0aWFsU2xvcGUgPT09IDAuMCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBndWVzc0ZvclQ7XG4gICAgICAgICAgICAgICAgLy8gU2xvcGUgaXMgbGVzcyB0aGFuIG1pblxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGJpbmFyeVN1YmRpdmlkZShhWCwgaW50ZXJ2YWxTdGFydCwgaW50ZXJ2YWxTdGFydCArIEtfU0FNUExFX1NURVBfU0laRSk7XG4gICAgICAgICAgICAgICAgfVxuICAgIH07XG5cbiAgICB2YXIgcHJlY29tcHV0ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgX3ByZWNvbXB1dGVkID0gdHJ1ZTtcbiAgICAgICAgaWYgKG1YMSAhPSBtWTEgfHwgbVgyICE9IG1ZMikge1xuICAgICAgICAgICAgY2FsY1NhbXBsZVZhbHVlcygpO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIHZhciByZXNvbHZlciA9IGZ1bmN0aW9uIChhWCkge1xuICAgICAgICB2YXIgcmV0dXJuVmFsdWUgPSB1bmRlZmluZWQ7XG5cbiAgICAgICAgaWYgKCFfcHJlY29tcHV0ZWQpIHtcbiAgICAgICAgICAgIHByZWNvbXB1dGUoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIElmIGxpbmVhciBncmFkaWVudCwgcmV0dXJuIFggYXMgVFxuICAgICAgICBpZiAobVgxID09PSBtWTEgJiYgbVgyID09PSBtWTIpIHtcbiAgICAgICAgICAgIHJldHVyblZhbHVlID0gYVg7XG5cbiAgICAgICAgICAgIC8vIElmIGF0IHN0YXJ0LCByZXR1cm4gMFxuICAgICAgICB9IGVsc2UgaWYgKGFYID09PSAwKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuVmFsdWUgPSAwO1xuXG4gICAgICAgICAgICAgICAgLy8gSWYgYXQgZW5kLCByZXR1cm4gMVxuICAgICAgICAgICAgfSBlbHNlIGlmIChhWCA9PT0gMSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm5WYWx1ZSA9IDE7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuVmFsdWUgPSBjYWxjQmV6aWVyKGdldFRGb3JYKGFYKSwgbVkxLCBtWTIpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcmV0dXJuVmFsdWU7XG4gICAgfTtcblxuICAgIHJldHVybiByZXNvbHZlcjtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbk55WXk5aFkzUnBiMjV6TDJWaGMybHVaeTlqY21WaGRHVXRZbVY2YVdWeUxtcHpJbDBzSW01aGJXVnpJanBiWFN3aWJXRndjR2x1WjNNaU9pSTdPenRyUWtGdFEzZENPenM3T3pzN096czdPenM3T3pzN08wRkJjRUo0UWl4SlFVRk5MRzlDUVVGdlFpeERRVUZ3UWp0QlFVTk9MRWxCUVUwc2JVSkJRVzFDTEV0QlFXNUNPMEZCUTA0c1NVRkJUU3gzUWtGQmQwSXNVMEZCZUVJN1FVRkRUaXhKUVVGTkxEWkNRVUUyUWl4RlFVRTNRanRCUVVOT0xFbEJRVTBzYzBKQlFYTkNMRVZCUVhSQ08wRkJRMDRzU1VGQlRTeHhRa0ZCY1VJc1QwRkJUeXh6UWtGQmMwSXNSMEZCZEVJc1EwRkJVRHRCUVVNelFpeEpRVUZOTEhGQ1FVRnpRaXhQUVVGUExGbEJRVkFzUzBGQmQwSXNWMEZCZUVJN096dEJRVWMxUWl4SlFVRk5MRWxCUVVrc1ZVRkJReXhGUVVGRUxFVkJRVXNzUlVGQlREdFhRVUZaTEUxQlFVMHNUVUZCVFN4RlFVRk9MRWRCUVZjc1RVRkJUU3hGUVVGT08wTkJRVGRDTzBGQlExWXNTVUZCVFN4SlFVRkpMRlZCUVVNc1JVRkJSQ3hGUVVGTExFVkJRVXc3VjBGQldTeE5RVUZOTEVWQlFVNHNSMEZCVnl4TlFVRk5MRVZCUVU0N1EwRkJka0k3UVVGRFZpeEpRVUZOTEVsQlFVa3NWVUZCUXl4RlFVRkVPMWRCUVZFc1RVRkJUU3hGUVVGT08wTkJRVkk3TzBGQlJWWXNTVUZCVFN4WFFVRlhMRlZCUVVNc1EwRkJSQ3hGUVVGSkxFVkJRVW9zUlVGQlVTeEZRVUZTTzFkQlFXVXNUVUZCVFN4RlFVRkZMRVZCUVVZc1JVRkJUU3hGUVVGT0xFTkJRVTRzUjBGQmEwSXNRMEZCYkVJc1IwRkJjMElzUTBGQmRFSXNSMEZCTUVJc1RVRkJUU3hGUVVGRkxFVkJRVVlzUlVGQlRTeEZRVUZPTEVOQlFVNHNSMEZCYTBJc1EwRkJiRUlzUjBGQmMwSXNSVUZCUlN4RlFVRkdMRU5CUVdoRU8wTkJRV1k3TzBGQlJXcENMRWxCUVUwc1lVRkJZU3hWUVVGRExFTkJRVVFzUlVGQlNTeEZRVUZLTEVWQlFWRXNSVUZCVWp0WFFVRmxMRU5CUVVNc1EwRkJReXhGUVVGRkxFVkJRVVlzUlVGQlRTeEZRVUZPTEVsQlFWa3NRMEZCV2l4SFFVRm5RaXhGUVVGRkxFVkJRVVlzUlVGQlRTeEZRVUZPTEVOQlFXaENMRU5CUVVRc1IwRkJPRUlzUTBGQk9VSXNSMEZCYTBNc1JVRkJSU3hGUVVGR0xFTkJRV3hETEVOQlFVUXNSMEZCTkVNc1EwRkJOVU03UTBGQlpqczdPenM3UVVGTFNpeFRRVUZUTEZkQlFWUXNRMEZCY1VJc1IwRkJja0lzUlVGQk1FSXNSMEZCTVVJc1JVRkJLMElzUjBGQkwwSXNSVUZCYjBNc1IwRkJjRU1zUlVGQmVVTTdRVUZEY0VRc1VVRkJUU3hsUVVGbExIRkNRVUZ4UWl4SlFVRkpMRmxCUVVvc1EwRkJhVUlzYlVKQlFXcENMRU5CUVhKQ0xFZEJRVFpFTEVsQlFVa3NTMEZCU2l4RFFVRlZMRzFDUVVGV0xFTkJRVGRFTEVOQlJDdENPMEZCUlhCRUxGRkJRVWtzWlVGQlpTeExRVUZtTEVOQlJtZEVPenRCUVVsd1JDeFJRVUZOTEd0Q1FVRnJRaXhWUVVGRExFVkJRVVFzUlVGQlN5eEZRVUZNTEVWQlFWTXNSVUZCVkN4RlFVRm5RanRCUVVOd1F5eFpRVUZKTEVsQlFVa3NRMEZCU2l4RFFVUm5RenRCUVVWd1F5eFpRVUZKTEc5Q1FVRktMRU5CUm05RE8wRkJSM0JETEZsQlFVa3NiMEpCUVVvc1EwRkliME03TzBGQlMzQkRMRmRCUVVjN1FVRkRReXgxUWtGQlZ5eExRVUZMTEVOQlFVTXNTMEZCU3l4RlFVRk1MRU5CUVVRc1IwRkJXU3hIUVVGYUxFTkJSR3BDTzBGQlJVTXNkVUpCUVZjc1YwRkJWeXhSUVVGWUxFVkJRWEZDTEVkQlFYSkNMRVZCUVRCQ0xFZEJRVEZDTEVsQlFXbERMRVZCUVdwRExFTkJSbG83UVVGSFF5eG5Ra0ZCU1N4WFFVRlhMRWRCUVZnc1JVRkJaMEk3UVVGRGFFSXNjVUpCUVVzc1VVRkJUQ3hEUVVSblFqdGhRVUZ3UWl4TlFVVlBPMEZCUTBnc2NVSkJRVXNzVVVGQlRDeERRVVJITzJGQlJsQTdVMEZJU2l4UlFWRlRMRXRCUVVzc1IwRkJUQ3hEUVVGVExGRkJRVlFzU1VGQmNVSXNjVUpCUVhKQ0xFbEJRVGhETEVWQlFVVXNRMEZCUml4SFFVRk5MREJDUVVGT0xFVkJZbTVDT3p0QlFXVndReXhsUVVGUExGRkJRVkFzUTBGbWIwTTdTMEZCYUVJc1EwRktORUk3TzBGQmMwSndSQ3hSUVVGTkxIVkNRVUYxUWl4VlFVRkRMRVZCUVVRc1JVRkJTeXhQUVVGTUxFVkJRV2xDTzBGQlF6RkRMRmxCUVVrc1NVRkJTU3hEUVVGS0xFTkJSSE5ETzBGQlJURkRMRmxCUVVrc1pVRkJaU3hEUVVGbUxFTkJSbk5ETzBGQlJ6RkRMRmxCUVVrc2IwSkJRVW9zUTBGSU1FTTdPMEZCU3pGRExHVkJRVThzU1VGQlNTeHBRa0ZCU2l4RlFVRjFRaXhGUVVGRkxFTkJRVVlzUlVGQlN6dEJRVU12UWl3eVFrRkJaU3hUUVVGVExFOUJRVlFzUlVGQmEwSXNSMEZCYkVJc1JVRkJkVUlzUjBGQmRrSXNRMEZCWml4RFFVUXJRanM3UVVGSEwwSXNaMEpCUVVrc2FVSkJRV2xDTEVkQlFXcENMRVZCUVhOQ08wRkJRM1JDTEhWQ1FVRlBMRTlCUVZBc1EwRkVjMEk3WVVGQk1VSTdPMEZCU1VFc2RVSkJRVmNzVjBGQlZ5eFBRVUZZTEVWQlFXOUNMRWRCUVhCQ0xFVkJRWGxDTEVkQlFYcENMRWxCUVdkRExFVkJRV2hETEVOQlVHOUNPMEZCVVM5Q0xIVkNRVUZYTEZkQlFWY3NXVUZCV0N4RFFWSnZRanRUUVVGdVF6czdRVUZYUVN4bFFVRlBMRTlCUVZBc1EwRm9RakJETzB0QlFXcENMRU5CZEVKMVFqczdRVUY1UTNCRUxGRkJRVTBzYlVKQlFXMUNMRmxCUVUwN1FVRkRNMElzWVVGQlN5eEpRVUZKTEVsQlFVa3NRMEZCU2l4RlFVRlBMRWxCUVVrc2JVSkJRVW9zUlVGQmVVSXNSVUZCUlN4RFFVRkdMRVZCUVVzN1FVRkRNVU1zZVVKQlFXRXNRMEZCWWl4SlFVRnJRaXhYUVVGWExFbEJRVWtzYTBKQlFVb3NSVUZCZDBJc1IwRkJia01zUlVGQmQwTXNSMEZCZUVNc1EwRkJiRUlzUTBGRU1FTTdVMEZCT1VNN1MwRkVjVUlzUTBGNlF6SkNPenRCUVN0RGNFUXNVVUZCVFN4WFFVRlhMRlZCUVVNc1JVRkJSQ3hGUVVGUk8wRkJRM0pDTEZsQlFVa3NaMEpCUVdkQ0xFZEJRV2hDTEVOQlJHbENPMEZCUlhKQ0xGbEJRVWtzWjBKQlFXZENMRU5CUVdoQ0xFTkJSbWxDTzBGQlIzSkNMRmxCUVVrc1lVRkJZU3h6UWtGQmMwSXNRMEZCZEVJc1EwRklTVHRCUVVseVFpeFpRVUZKTEU5QlFVOHNSMEZCVUN4RFFVcHBRanRCUVV0eVFpeFpRVUZKTEZsQlFWa3NSMEZCV2l4RFFVeHBRanRCUVUxeVFpeFpRVUZKTEdWQlFXVXNSMEZCWml4RFFVNXBRanM3UVVGUmNrSXNaVUZCVHl4cFFrRkJhVUlzVlVGQmFrSXNTVUZCSzBJc1lVRkJZU3hoUVVGaUxFdEJRU3RDTEVWQlFTOUNMRVZCUVcxRExFVkJRVVVzWVVGQlJpeEZRVUZwUWp0QlFVTjBSaXcyUWtGQmFVSXNhMEpCUVdwQ0xFTkJSSE5HTzFOQlFURkdPenRCUVVsQkxGVkJRVVVzWVVGQlJpeERRVnB4UWpzN1FVRmpja0lzWlVGQlR5eERRVUZETEV0QlFVc3NZVUZCWVN4aFFVRmlMRU5CUVV3c1EwRkJSQ3hKUVVGelF5eGhRVUZoTEdkQ1FVRmpMRU5CUVdRc1EwRkJZaXhIUVVGblF5eGhRVUZoTEdGQlFXSXNRMEZCYUVNc1EwRkJkRU1zUTBGa1l6dEJRV1Z5UWl4dlFrRkJXU3huUWtGQlowSXNUMEZCVHl4clFrRkJVQ3hEUVdaUU96dEJRV2xDY2tJc2RVSkJRV1VzVTBGQlV5eFRRVUZVTEVWQlFXOUNMRWRCUVhCQ0xFVkJRWGxDTEVkQlFYcENMRU5CUVdZN096dEJRV3BDY1VJc1dVRnZRbXBDTEdkQ1FVRm5RaXhuUWtGQmFFSXNSVUZCYTBNN1FVRkRiRU1zYlVKQlFVOHNjVUpCUVhGQ0xFVkJRWEpDTEVWQlFYbENMRk5CUVhwQ0xFTkJRVkE3TzBGQlJHdERMRk5CUVhSRExFMUJSMDhzU1VGQlNTeHBRa0ZCYVVJc1IwRkJha0lzUlVGQmMwSTdRVUZETjBJc2RVSkJRVThzVTBGQlVEczdRVUZFTmtJc1lVRkJNVUlzVFVGSFFUdEJRVU5JTERKQ1FVRlBMR2RDUVVGblFpeEZRVUZvUWl4RlFVRnZRaXhoUVVGd1FpeEZRVUZ0UXl4blFrRkJaMElzYTBKQlFXaENMRU5CUVRGRExFTkJSRWM3YVVKQlNFRTdTMEYyUWswc1EwRXZRMjFET3p0QlFUaEZjRVFzVVVGQlRTeGhRVUZoTEZsQlFVMDdRVUZEY2tJc2RVSkJRV1VzU1VGQlppeERRVVJ4UWp0QlFVVnlRaXhaUVVGSkxFOUJRVThzUjBGQlVDeEpRVUZqTEU5QlFVOHNSMEZCVUN4RlFVRlpPMEZCUXpGQ0xDdENRVVF3UWp0VFFVRTVRanRMUVVabExFTkJPVVZwUXpzN1FVRnhSbkJFTEZGQlFVMHNWMEZCVnl4VlFVRkRMRVZCUVVRc1JVRkJVVHRCUVVOeVFpeFpRVUZKTEhWQ1FVRktMRU5CUkhGQ096dEJRVWR5UWl4WlFVRkpMRU5CUVVNc1dVRkJSQ3hGUVVGbE8wRkJRMllzZVVKQlJHVTdVMEZCYmtJN096dEJRVWh4UWl4WlFWRnFRaXhSUVVGUkxFZEJRVklzU1VGQlpTeFJRVUZSTEVkQlFWSXNSVUZCWVR0QlFVTTFRaXd3UWtGQll5eEZRVUZrT3pzN1FVRkVORUlzVTBGQmFFTXNUVUZKVHl4SlFVRkpMRTlCUVU4c1EwRkJVQ3hGUVVGVk8wRkJRMnBDTERoQ1FVRmpMRU5CUVdRN096dEJRVVJwUWl4aFFVRmtMRTFCU1VFc1NVRkJTU3hQUVVGUExFTkJRVkFzUlVGQlZUdEJRVU5xUWl4clEwRkJZeXhEUVVGa0xFTkJSR2xDTzJsQ1FVRmtMRTFCUjBFN1FVRkRTQ3hyUTBGQll5eFhRVUZYTEZOQlFWTXNSVUZCVkN4RFFVRllMRVZCUVhsQ0xFZEJRWHBDTEVWQlFUaENMRWRCUVRsQ0xFTkJRV1FzUTBGRVJ6dHBRa0ZJUVRzN1FVRlBVQ3hsUVVGUExGZEJRVkFzUTBGMlFuRkNPMHRCUVZJc1EwRnlSbTFET3p0QlFTdEhjRVFzVjBGQlR5eFJRVUZRTEVOQkwwZHZSRHREUVVGNlF5SXNJbVpwYkdVaU9pSmpjbVZoZEdVdFltVjZhV1Z5TG1weklpd2ljMjkxY21ObFVtOXZkQ0k2SWk5VmMyVnljeTlOWVhSMEwxTnBkR1Z6TDNCdmNHMXZkR2x2YmlJc0luTnZkWEpqWlhORGIyNTBaVzUwSWpwYklpOHFYRzRnSUNBZ1FtVjZhV1Z5SUdaMWJtTjBhVzl1SUdkbGJtVnlZWFJ2Y2x4dUlDQWdJQ0FnSUNCY2JpQWdJQ0JIWWNPcmRHRnVJRkpsYm1GMVpHVmhkU2R6SUVKbGVtbGxja1ZoYzJsdVoxeHVJQ0FnSUdoMGRIQnpPaTh2WjJsMGFIVmlMbU52YlM5bmNtVXZZbVY2YVdWeUxXVmhjMmx1Wnk5aWJHOWlMMjFoYzNSbGNpOXBibVJsZUM1cWN5QWdYRzRnSUNBZ2FIUjBjSE02THk5bmFYUm9kV0l1WTI5dEwyZHlaUzlpWlhwcFpYSXRaV0Z6YVc1bkwySnNiMkl2YldGemRHVnlMMHhKUTBWT1UwVmNiaUFnSUNCWmIzVW5jbVVnWVNCb1pYSnZYRzRnSUNBZ1hHNGdJQ0FnVlhObFhHNGdJQ0FnWEc0Z0lDQWdJQ0FnSUhaaGNpQmxZWE5sVDNWMElEMGdibVYzSUVKbGVtbGxjaWd1TVRjc0xqWTNMQzQ0TXl3dU5qY3BMRnh1SUNBZ0lDQWdJQ0FnSUNBZ2VDQTlJR1ZoYzJWUGRYUW9NQzQxS1RzZ0x5OGdjbVYwZFhKdWN5QXdMall5Tnk0dUxseHVLaTljYmx4dUx5OGdRMjl1YzNSaGJuUnpYRzVqYjI1emRDQk9SVmRVVDA1ZlNWUkZVa0ZVU1U5T1V5QTlJRGc3WEc1amIyNXpkQ0JPUlZkVVQwNWZUVWxPWDFOTVQxQkZJRDBnTUM0d01ERTdYRzVqYjI1emRDQlRWVUpFU1ZaSlUwbFBUbDlRVWtWRFNWTkpUMDRnUFNBd0xqQXdNREF3TURFN1hHNWpiMjV6ZENCVFZVSkVTVlpKVTBsUFRsOU5RVmhmU1ZSRlVrRlVTVTlPVXlBOUlERXdPMXh1WTI5dWMzUWdTMTlUVUV4SlRrVmZWRUZDVEVWZlUwbGFSU0E5SURFeE8xeHVZMjl1YzNRZ1MxOVRRVTFRVEVWZlUxUkZVRjlUU1ZwRklEMGdNUzR3SUM4Z0tFdGZVMUJNU1U1RlgxUkJRa3hGWDFOSldrVWdMU0F4TGpBcE8xeHVZMjl1YzNRZ1JreFBRVlJmTXpKZlUxVlFVRTlTVkVWRUlEMGdLSFI1Y0dWdlppQkdiRzloZERNeVFYSnlZWGtnSVQwOUlDZDFibVJsWm1sdVpXUW5LVHRjYmx4dUx5OGdTR1ZzY0dWeUlHMWxkR2h2WkhOY2JtTnZibk4wSUdFZ1BTQW9ZVEVzSUdFeUtTQTlQaUF4TGpBZ0xTQXpMakFnS2lCaE1pQXJJRE11TUNBcUlHRXhPMXh1WTI5dWMzUWdZaUE5SUNoaE1Td2dZVElwSUQwK0lETXVNQ0FxSUdFeUlDMGdOaTR3SUNvZ1lURTdYRzVqYjI1emRDQmpJRDBnS0dFeEtTQTlQaUF6TGpBZ0tpQmhNVHRjYmx4dVkyOXVjM1FnWjJWMFUyeHZjR1VnUFNBb2RDd2dZVEVzSUdFeUtTQTlQaUF6TGpBZ0tpQmhLR0V4TENCaE1pa2dLaUIwSUNvZ2RDQXJJREl1TUNBcUlHSW9ZVEVzSUdFeUtTQXFJSFFnS3lCaktHRXhLVHRjYmx4dVkyOXVjM1FnWTJGc1kwSmxlbWxsY2lBOUlDaDBMQ0JoTVN3Z1lUSXBJRDArSUNnb1lTaGhNU3dnWVRJcElDb2dkQ0FySUdJb1lURXNJR0V5S1NrZ0tpQjBJQ3NnWXloaE1Ta3BJQ29nZER0Y2JseHVMeXBjYmlBZ0lDQkRjbVZoZEdVZ1lTQmpkV0pwWXlCaVpYcHBaWElnY21WemIyeDJaWEpjYmlvdlhHNWxlSEJ2Y25RZ1pHVm1ZWFZzZENCbWRXNWpkR2x2YmlCamRXSnBZMEpsZW1sbGNpaHRXREVzSUcxWk1Td2diVmd5TENCdFdUSXBJSHRjYmlBZ0lDQmpiMjV6ZENCellXMXdiR1ZXWVd4MVpYTWdQU0JHVEU5QlZGOHpNbDlUVlZCUVQxSlVSVVFnUHlCdVpYY2dSbXh2WVhRek1rRnljbUY1S0V0ZlUxQk1TVTVGWDFSQlFreEZYMU5KV2tVcElEb2dibVYzSUVGeWNtRjVLRXRmVTFCTVNVNUZYMVJCUWt4RlgxTkpXa1VwTzF4dUlDQWdJR3hsZENCZmNISmxZMjl0Y0hWMFpXUWdQU0JtWVd4elpUdGNibHh1SUNBZ0lHTnZibk4wSUdKcGJtRnllVk4xWW1ScGRtbGtaU0E5SUNoaFdDd2dZVUVzSUdGQ0tTQTlQaUI3WEc0Z0lDQWdJQ0FnSUd4bGRDQnBJRDBnTUR0Y2JpQWdJQ0FnSUNBZ2JHVjBJR04xY25KbGJuUllPMXh1SUNBZ0lDQWdJQ0JzWlhRZ1kzVnljbVZ1ZEZRN1hHNWNiaUFnSUNBZ0lDQWdaRzhnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdZM1Z5Y21WdWRGUWdQU0JoUVNBcklDaGhRaUF0SUdGQktTQXZJREl1TUR0Y2JpQWdJQ0FnSUNBZ0lDQWdJR04xY25KbGJuUllJRDBnWTJGc1kwSmxlbWxsY2loamRYSnlaVzUwVkN3Z2JWZ3hMQ0J0V0RJcElDMGdZVmc3WEc0Z0lDQWdJQ0FnSUNBZ0lDQnBaaUFvWTNWeWNtVnVkRmdnUGlBd0xqQXBJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0JoUWlBOUlHTjFjbkpsYm5SVU8xeHVJQ0FnSUNBZ0lDQWdJQ0FnZlNCbGJITmxJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0JoUVNBOUlHTjFjbkpsYm5SVU8xeHVJQ0FnSUNBZ0lDQWdJQ0FnZlZ4dUlDQWdJQ0FnSUNCOUlIZG9hV3hsSUNoTllYUm9MbUZpY3loamRYSnlaVzUwV0NrZ1BpQlRWVUpFU1ZaSlUwbFBUbDlRVWtWRFNWTkpUMDRnSmlZZ0t5dHBJRHdnVTFWQ1JFbFdTVk5KVDA1ZlRVRllYMGxVUlZKQlZFbFBUbE1wTzF4dVhHNGdJQ0FnSUNBZ0lISmxkSFZ5YmlCamRYSnlaVzUwVkR0Y2JpQWdJQ0I5TzF4dVhHNGdJQ0FnWTI5dWMzUWdibVYzZEc5dVVtRndhSE52YmtsMFpYSmhkR1VnUFNBb1lWZ3NJR0ZIZFdWemMxUXBJRDArSUh0Y2JpQWdJQ0FnSUNBZ2JHVjBJR2tnUFNBd08xeHVJQ0FnSUNBZ0lDQnNaWFFnWTNWeWNtVnVkRk5zYjNCbElEMGdNRHRjYmlBZ0lDQWdJQ0FnYkdWMElHTjFjbkpsYm5SWU8xeHVYRzRnSUNBZ0lDQWdJR1p2Y2lBb095QnBJRHdnVGtWWFZFOU9YMGxVUlZKQlZFbFBUbE03SUNzcmFTa2dlMXh1SUNBZ0lDQWdJQ0FnSUNBZ1kzVnljbVZ1ZEZOc2IzQmxJRDBnWjJWMFUyeHZjR1VvWVVkMVpYTnpWQ3dnYlZneExDQnRXRElwTzF4dUlDQWdJQ0FnSUNBZ0lDQWdYRzRnSUNBZ0lDQWdJQ0FnSUNCcFppQW9ZM1Z5Y21WdWRGTnNiM0JsSUQwOVBTQXdMakFwSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCeVpYUjFjbTRnWVVkMVpYTnpWRHRjYmlBZ0lDQWdJQ0FnSUNBZ0lIMWNiaUFnSUNBZ0lDQWdJQ0FnSUZ4dUlDQWdJQ0FnSUNBZ0lDQWdZM1Z5Y21WdWRGZ2dQU0JqWVd4alFtVjZhV1Z5S0dGSGRXVnpjMVFzSUcxWU1Td2diVmd5S1NBdElHRllPMXh1SUNBZ0lDQWdJQ0FnSUNBZ1lVZDFaWE56VkNBdFBTQmpkWEp5Wlc1MFdDQXZJR04xY25KbGJuUlRiRzl3WlR0Y2JpQWdJQ0FnSUNBZ2ZWeHVJQ0FnSUNBZ0lDQmNiaUFnSUNBZ0lDQWdjbVYwZFhKdUlHRkhkV1Z6YzFRN1hHNGdJQ0FnZlR0Y2JseHVJQ0FnSUdOdmJuTjBJR05oYkdOVFlXMXdiR1ZXWVd4MVpYTWdQU0FvS1NBOVBpQjdYRzRnSUNBZ0lDQWdJR1p2Y2lBb2JHVjBJR2tnUFNBd095QnBJRHdnUzE5VFVFeEpUa1ZmVkVGQ1RFVmZVMGxhUlRzZ0t5dHBLU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQnpZVzF3YkdWV1lXeDFaWE5iYVYwZ1BTQmpZV3hqUW1WNmFXVnlLR2tnS2lCTFgxTkJUVkJNUlY5VFZFVlFYMU5KV2tVc0lHMVlNU3dnYlZneUtUdGNiaUFnSUNBZ0lDQWdmVnh1SUNBZ0lIMDdYRzVjYmlBZ0lDQmpiMjV6ZENCblpYUlVSbTl5V0NBOUlDaGhXQ2tnUFQ0Z2UxeHVJQ0FnSUNBZ0lDQnNaWFFnYVc1MFpYSjJZV3hUZEdGeWRDQTlJREF1TUR0Y2JpQWdJQ0FnSUNBZ2JHVjBJR04xY25KbGJuUlRZVzF3YkdVZ1BTQXhPMXh1SUNBZ0lDQWdJQ0JzWlhRZ2JHRnpkRk5oYlhCc1pTQTlJRXRmVTFCTVNVNUZYMVJCUWt4RlgxTkpXa1VnTFNBeE8xeHVJQ0FnSUNBZ0lDQnNaWFFnWkdsemRDQTlJREF1TUR0Y2JpQWdJQ0FnSUNBZ2JHVjBJR2QxWlhOelJtOXlWQ0E5SURBdU1EdGNiaUFnSUNBZ0lDQWdiR1YwSUdsdWFYUnBZV3hUYkc5d1pTQTlJREF1TUR0Y2JpQWdJQ0FnSUNBZ0lDQWdJRnh1SUNBZ0lDQWdJQ0JtYjNJZ0tEc2dZM1Z5Y21WdWRGTmhiWEJzWlNBaFBTQnNZWE4wVTJGdGNHeGxJQ1ltSUhOaGJYQnNaVlpoYkhWbGMxdGpkWEp5Wlc1MFUyRnRjR3hsWFNBOFBTQmhXRHNnS3l0amRYSnlaVzUwVTJGdGNHeGxLU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQnBiblJsY25aaGJGTjBZWEowSUNzOUlFdGZVMEZOVUV4RlgxTlVSVkJmVTBsYVJUdGNiaUFnSUNBZ0lDQWdmVnh1SUNBZ0lDQWdJQ0JjYmlBZ0lDQWdJQ0FnTFMxamRYSnlaVzUwVTJGdGNHeGxPMXh1SUNBZ0lDQWdJQ0JjYmlBZ0lDQWdJQ0FnWkdsemRDQTlJQ2hoV0NBdElITmhiWEJzWlZaaGJIVmxjMXRqZFhKeVpXNTBVMkZ0Y0d4bFhTa2dMeUFvYzJGdGNHeGxWbUZzZFdWelcyTjFjbkpsYm5SVFlXMXdiR1VyTVYwZ0xTQnpZVzF3YkdWV1lXeDFaWE5iWTNWeWNtVnVkRk5oYlhCc1pWMHBPMXh1SUNBZ0lDQWdJQ0JuZFdWemMwWnZjbFFnUFNCcGJuUmxjblpoYkZOMFlYSjBJQ3NnWkdsemRDQXFJRXRmVTBGTlVFeEZYMU5VUlZCZlUwbGFSVHRjYmlBZ0lDQWdJQ0FnWEc0Z0lDQWdJQ0FnSUdsdWFYUnBZV3hUYkc5d1pTQTlJR2RsZEZOc2IzQmxLR2QxWlhOelJtOXlWQ3dnYlZneExDQnRXRElwTzF4dUlDQWdJQ0FnSUNCY2JpQWdJQ0FnSUNBZ0x5OGdTV1lnYzJ4dmNHVWdhWE1nWjNKbFlYUmxjaUIwYUdGdUlHMXBibHh1SUNBZ0lDQWdJQ0JwWmlBb2FXNXBkR2xoYkZOc2IzQmxJRDQ5SUU1RlYxUlBUbDlOU1U1ZlUweFBVRVVwSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJSEpsZEhWeWJpQnVaWGQwYjI1U1lYQm9jMjl1U1hSbGNtRjBaU2hoV0N3Z1ozVmxjM05HYjNKVUtUdGNiaUFnSUNBZ0lDQWdMeThnVTJ4dmNHVWdhWE1nWlhGMVlXd2dkRzhnYldsdVhHNGdJQ0FnSUNBZ0lIMGdaV3h6WlNCcFppQW9hVzVwZEdsaGJGTnNiM0JsSUQwOVBTQXdMakFwSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJSEpsZEhWeWJpQm5kV1Z6YzBadmNsUTdYRzRnSUNBZ0lDQWdJQzh2SUZOc2IzQmxJR2x6SUd4bGMzTWdkR2hoYmlCdGFXNWNiaUFnSUNBZ0lDQWdmU0JsYkhObElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUhKbGRIVnliaUJpYVc1aGNubFRkV0prYVhacFpHVW9ZVmdzSUdsdWRHVnlkbUZzVTNSaGNuUXNJR2x1ZEdWeWRtRnNVM1JoY25RZ0t5QkxYMU5CVFZCTVJWOVRWRVZRWDFOSldrVXBPMXh1SUNBZ0lDQWdJQ0I5WEc0Z0lDQWdmVHRjYmx4dUlDQWdJR052Ym5OMElIQnlaV052YlhCMWRHVWdQU0FvS1NBOVBpQjdYRzRnSUNBZ0lDQWdJRjl3Y21WamIyMXdkWFJsWkNBOUlIUnlkV1U3WEc0Z0lDQWdJQ0FnSUdsbUlDaHRXREVnSVQwZ2JWa3hJSHg4SUcxWU1pQWhQU0J0V1RJcElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUdOaGJHTlRZVzF3YkdWV1lXeDFaWE1vS1R0Y2JpQWdJQ0FnSUNBZ2ZWeHVJQ0FnSUgwN1hHNWNiaUFnSUNCamIyNXpkQ0J5WlhOdmJIWmxjaUE5SUNoaFdDa2dQVDRnZTF4dUlDQWdJQ0FnSUNCc1pYUWdjbVYwZFhKdVZtRnNkV1U3WEc1Y2JpQWdJQ0FnSUNBZ2FXWWdLQ0ZmY0hKbFkyOXRjSFYwWldRcElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUhCeVpXTnZiWEIxZEdVb0tUdGNiaUFnSUNBZ0lDQWdmVnh1SUNBZ0lDQWdJQ0JjYmlBZ0lDQWdJQ0FnTHk4Z1NXWWdiR2x1WldGeUlHZHlZV1JwWlc1MExDQnlaWFIxY200Z1dDQmhjeUJVWEc0Z0lDQWdJQ0FnSUdsbUlDaHRXREVnUFQwOUlHMVpNU0FtSmlCdFdESWdQVDA5SUcxWk1pa2dlMXh1SUNBZ0lDQWdJQ0FnSUNBZ2NtVjBkWEp1Vm1Gc2RXVWdQU0JoV0R0Y2JpQWdJQ0FnSUNBZ0lDQWdJRnh1SUNBZ0lDQWdJQ0F2THlCSlppQmhkQ0J6ZEdGeWRDd2djbVYwZFhKdUlEQmNiaUFnSUNBZ0lDQWdmU0JsYkhObElHbG1JQ2hoV0NBOVBUMGdNQ2tnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdjbVYwZFhKdVZtRnNkV1VnUFNBd08xeHVJQ0FnSUNBZ0lDQWdJQ0FnWEc0Z0lDQWdJQ0FnSUM4dklFbG1JR0YwSUdWdVpDd2djbVYwZFhKdUlERmNiaUFnSUNBZ0lDQWdmU0JsYkhObElHbG1JQ2hoV0NBOVBUMGdNU2tnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdjbVYwZFhKdVZtRnNkV1VnUFNBeE8xeHVYRzRnSUNBZ0lDQWdJSDBnWld4elpTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNCeVpYUjFjbTVXWVd4MVpTQTlJR05oYkdOQ1pYcHBaWElvWjJWMFZFWnZjbGdvWVZncExDQnRXVEVzSUcxWk1pazdYRzRnSUNBZ0lDQWdJSDFjYmlBZ0lDQWdJQ0FnWEc0Z0lDQWdJQ0FnSUhKbGRIVnliaUJ5WlhSMWNtNVdZV3gxWlR0Y2JpQWdJQ0I5TzF4dVhHNGdJQ0FnY21WMGRYSnVJSEpsYzI5c2RtVnlPMXh1ZlZ4dUlsMTlcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2FjdGlvbnMvZWFzaW5nL2NyZWF0ZS1iZXppZXIuanNcbiAqKiBtb2R1bGUgaWQgPSA0MlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0cy5kZWZhdWx0ID0gYnVpbGQ7XG5cbnZhciBfdXRpbHMgPSByZXF1aXJlKCcuLi8uLi9pbmMvdXRpbHMnKTtcblxuLypcbiAgICBDb252ZXJ0IHBlcmNlbnRhZ2UgdG8gcGl4ZWxzXG4gICAgXG4gICAgQHBhcmFtIFtudW1iZXJdOiBQZXJjZW50YWdlIG9mIHRvdGFsIGxlbmd0aFxuICAgIEBwYXJhbSBbbnVtYmVyXTogVG90YWwgbGVuZ3RoXG4qL1xudmFyIHBlcmNlbnRUb1BpeGVscyA9IGZ1bmN0aW9uIChwZXJjZW50LCBsZW5ndGgpIHtcbiAgICByZXR1cm4gcGFyc2VGbG9hdChwZXJjZW50KSAvIDEwMCAqIGxlbmd0aCArICdweCc7XG59O1xuXG5mdW5jdGlvbiBidWlsZChzdGF0ZSwgbGVuZ3RoKSB7XG4gICAgdmFyIHN0eWxlcyA9IHt9O1xuICAgIHZhciBkYXNoQXJyYXlTdHlsZXMgPSB7XG4gICAgICAgIGxlbmd0aDogMCxcbiAgICAgICAgc3BhY2luZzogbGVuZ3RoICsgJ3B4J1xuICAgIH07XG4gICAgdmFyIGhhc0Rhc2hBcnJheSA9IGZhbHNlO1xuXG4gICAgKDAsIF91dGlscy5lYWNoKShzdGF0ZSwgZnVuY3Rpb24gKHZhbHVlLCBrZXkpIHtcbiAgICAgICAgc3dpdGNoIChrZXkpIHtcbiAgICAgICAgICAgIGNhc2UgJ2xlbmd0aCc6XG4gICAgICAgICAgICBjYXNlICdzcGFjaW5nJzpcbiAgICAgICAgICAgICAgICBoYXNEYXNoQXJyYXkgPSB0cnVlO1xuICAgICAgICAgICAgICAgIGRhc2hBcnJheVN0eWxlc1trZXldID0gcGVyY2VudFRvUGl4ZWxzKHZhbHVlLCBsZW5ndGgpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnb2Zmc2V0JzpcbiAgICAgICAgICAgICAgICBzdHlsZXNbJ3N0cm9rZS1kYXNob2Zmc2V0J10gPSBwZXJjZW50VG9QaXhlbHMoLXZhbHVlLCBsZW5ndGgpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICBzdHlsZXNba2V5XSA9IHZhbHVlO1xuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICBpZiAoaGFzRGFzaEFycmF5KSB7XG4gICAgICAgIHN0eWxlc1snc3Ryb2tlLWRhc2hhcnJheSddID0gZGFzaEFycmF5U3R5bGVzLmxlbmd0aCArICcgJyArIGRhc2hBcnJheVN0eWxlcy5zcGFjaW5nO1xuICAgIH1cblxuICAgIHJldHVybiBzdHlsZXM7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5OeVl5OXlaVzVrWlhJdmMzWm5MWEJoZEdndlluVnBiR1F1YW5NaVhTd2libUZ0WlhNaU9sdGRMQ0p0WVhCd2FXNW5jeUk2SWpzN08ydENRVlYzUWpzN096czdPenM3T3p0QlFVWjRRaXhKUVVGTkxHdENRVUZyUWl4VlFVRkRMRTlCUVVRc1JVRkJWU3hOUVVGV08xZEJRWEZDTEZWQlFVTXNRMEZCVnl4UFFVRllMRWxCUVhOQ0xFZEJRWFJDTEVkQlFUWkNMRTFCUVRsQ0xFZEJRWFZETEVsQlFYWkRPME5CUVhKQ096dEJRVVZVTEZOQlFWTXNTMEZCVkN4RFFVRmxMRXRCUVdZc1JVRkJjMElzVFVGQmRFSXNSVUZCT0VJN1FVRkRla01zVVVGQlRTeFRRVUZUTEVWQlFWUXNRMEZFYlVNN1FVRkZla01zVVVGQlRTeHJRa0ZCYTBJN1FVRkRjRUlzWjBKQlFWRXNRMEZCVWp0QlFVTkJMR2xDUVVGVExGTkJRVk1zU1VGQlZEdExRVVpRTEVOQlJtMURPMEZCVFhwRExGRkJRVWtzWlVGQlpTeExRVUZtTEVOQlRuRkRPenRCUVZGNlF5eHhRa0ZCU3l4TFFVRk1MRVZCUVZrc1ZVRkJReXhMUVVGRUxFVkJRVkVzUjBGQlVpeEZRVUZuUWp0QlFVTjRRaXhuUWtGQlVTeEhRVUZTTzBGQlEwRXNhVUpCUVVzc1VVRkJUQ3hEUVVSQk8wRkJSVUVzYVVKQlFVc3NVMEZCVER0QlFVTkpMQ3RDUVVGbExFbEJRV1lzUTBGRVNqdEJRVVZKTEdkRFFVRm5RaXhIUVVGb1FpeEpRVUYxUWl4blFrRkJaMElzUzBGQmFFSXNSVUZCZFVJc1RVRkJka0lzUTBGQmRrSXNRMEZHU2p0QlFVZEpMSE5DUVVoS08wRkJSa0VzYVVKQlRVc3NVVUZCVER0QlFVTkpMSFZDUVVGUExHMUNRVUZRTEVsQlFUaENMR2RDUVVGblFpeERRVUZETEV0QlFVUXNSVUZCVVN4TlFVRjRRaXhEUVVFNVFpeERRVVJLTzBGQlJVa3NjMEpCUmtvN1FVRk9RVHRCUVZWSkxIVkNRVUZQTEVkQlFWQXNTVUZCWXl4TFFVRmtMRU5CUkVvN1FVRlVRU3hUUVVSM1FqdExRVUZvUWl4RFFVRmFMRU5CVW5sRE96dEJRWFZDZWtNc1VVRkJTU3haUVVGS0xFVkJRV3RDTzBGQlEyUXNaVUZCVHl4clFrRkJVQ3hKUVVFMlFpeG5Ra0ZCWjBJc1RVRkJhRUlzUjBGQmVVSXNSMEZCZWtJc1IwRkJLMElzWjBKQlFXZENMRTlCUVdoQ0xFTkJSRGxETzB0QlFXeENPenRCUVVsQkxGZEJRVThzVFVGQlVDeERRVE5DZVVNN1EwRkJPVUlpTENKbWFXeGxJam9pWW5WcGJHUXVhbk1pTENKemIzVnlZMlZTYjI5MElqb2lMMVZ6WlhKekwwMWhkSFF2VTJsMFpYTXZjRzl3Ylc5MGFXOXVJaXdpYzI5MWNtTmxjME52Ym5SbGJuUWlPbHNpYVcxd2IzSjBJSHNnWldGamFDQjlJR1p5YjIwZ0p5NHVMeTR1TDJsdVl5OTFkR2xzY3ljN1hHNWNiaThxWEc0Z0lDQWdRMjl1ZG1WeWRDQndaWEpqWlc1MFlXZGxJSFJ2SUhCcGVHVnNjMXh1SUNBZ0lGeHVJQ0FnSUVCd1lYSmhiU0JiYm5WdFltVnlYVG9nVUdWeVkyVnVkR0ZuWlNCdlppQjBiM1JoYkNCc1pXNW5kR2hjYmlBZ0lDQkFjR0Z5WVcwZ1cyNTFiV0psY2wwNklGUnZkR0ZzSUd4bGJtZDBhRnh1S2k5Y2JtTnZibk4wSUhCbGNtTmxiblJVYjFCcGVHVnNjeUE5SUNod1pYSmpaVzUwTENCc1pXNW5kR2dwSUQwK0lDaHdZWEp6WlVac2IyRjBLSEJsY21ObGJuUXBJQzhnTVRBd0tTQXFJR3hsYm1kMGFDQXJJQ2R3ZUNjN1hHNWNibVY0Y0c5eWRDQmtaV1poZFd4MElHWjFibU4wYVc5dUlHSjFhV3hrS0hOMFlYUmxMQ0JzWlc1bmRHZ3BJSHRjYmlBZ0lDQmpiMjV6ZENCemRIbHNaWE1nUFNCN2ZUdGNiaUFnSUNCamIyNXpkQ0JrWVhOb1FYSnlZWGxUZEhsc1pYTWdQU0I3WEc0Z0lDQWdJQ0FnSUd4bGJtZDBhRG9nTUN4Y2JpQWdJQ0FnSUNBZ2MzQmhZMmx1WnpvZ2JHVnVaM1JvSUNzZ0ozQjRKMXh1SUNBZ0lIMDdYRzRnSUNBZ2JHVjBJR2hoYzBSaGMyaEJjbkpoZVNBOUlHWmhiSE5sTzF4dVhHNGdJQ0FnWldGamFDaHpkR0YwWlN3Z0tIWmhiSFZsTENCclpYa3BJRDArSUh0Y2JpQWdJQ0FnSUNBZ2MzZHBkR05vSUNoclpYa3BJSHRjYmlBZ0lDQWdJQ0FnWTJGelpTQW5iR1Z1WjNSb0p6cGNiaUFnSUNBZ0lDQWdZMkZ6WlNBbmMzQmhZMmx1WnljNlhHNGdJQ0FnSUNBZ0lDQWdJQ0JvWVhORVlYTm9RWEp5WVhrZ1BTQjBjblZsTzF4dUlDQWdJQ0FnSUNBZ0lDQWdaR0Z6YUVGeWNtRjVVM1I1YkdWelcydGxlVjBnUFNCd1pYSmpaVzUwVkc5UWFYaGxiSE1vZG1Gc2RXVXNJR3hsYm1kMGFDazdYRzRnSUNBZ0lDQWdJQ0FnSUNCaWNtVmhhenRjYmlBZ0lDQWdJQ0FnWTJGelpTQW5iMlptYzJWMEp6cGNiaUFnSUNBZ0lDQWdJQ0FnSUhOMGVXeGxjMXNuYzNSeWIydGxMV1JoYzJodlptWnpaWFFuWFNBOUlIQmxjbU5sYm5SVWIxQnBlR1ZzY3lndGRtRnNkV1VzSUd4bGJtZDBhQ2s3WEc0Z0lDQWdJQ0FnSUNBZ0lDQmljbVZoYXp0Y2JpQWdJQ0FnSUNBZ1pHVm1ZWFZzZERwY2JpQWdJQ0FnSUNBZ0lDQWdJSE4wZVd4bGMxdHJaWGxkSUQwZ2RtRnNkV1U3WEc0Z0lDQWdJQ0FnSUgxY2JpQWdJQ0I5S1R0Y2JseHVJQ0FnSUdsbUlDaG9ZWE5FWVhOb1FYSnlZWGtwSUh0Y2JpQWdJQ0FnSUNBZ2MzUjViR1Z6V3lkemRISnZhMlV0WkdGemFHRnljbUY1SjEwZ1BTQmtZWE5vUVhKeVlYbFRkSGxzWlhNdWJHVnVaM1JvSUNzZ0p5QW5JQ3NnWkdGemFFRnljbUY1VTNSNWJHVnpMbk53WVdOcGJtYzdYRzRnSUNBZ2ZWeHVYRzRnSUNBZ2NtVjBkWEp1SUhOMGVXeGxjenRjYm4waVhYMD1cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL3JlbmRlci9zdmctcGF0aC9idWlsZC5qc1xuICoqIG1vZHVsZSBpZCA9IDQzXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbnZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfc3RhdGVNYXAgPSByZXF1aXJlKCcuLi9jc3Mvc3RhdGUtbWFwJyk7XG5cbnZhciBfc3RhdGVNYXAyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfc3RhdGVNYXApO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG52YXIgU1RST0tFID0gJ3N0cm9rZS0nO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBfZXh0ZW5kcyh7fSwgX3N0YXRlTWFwMi5kZWZhdWx0LCB7XG4gICAgb3BhY2l0eTogU1RST0tFICsgJ29wYWNpdHknLFxuICAgIHdpZHRoOiBTVFJPS0UgKyAnd2lkdGgnLFxuICAgIG1pdGVybGltaXQ6IFNUUk9LRSArICdtaXRlcmxpbWl0J1xufSk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5OeVl5OXlaVzVrWlhJdmMzWm5MWEJoZEdndmMzUmhkR1V0YldGd0xtcHpJbDBzSW01aGJXVnpJanBiWFN3aWJXRndjR2x1WjNNaU9pSTdPenM3T3pzN096czdPenRCUVVWQkxFbEJRVTBzVTBGQlV5eFRRVUZVT3pzN1FVRkpSaXhoUVVGWkxHdENRVUZhTzBGQlEwRXNWMEZCVlN4blFrRkJWanRCUVVOQkxHZENRVUZsTEhGQ1FVRm1JaXdpWm1sc1pTSTZJbk4wWVhSbExXMWhjQzVxY3lJc0luTnZkWEpqWlZKdmIzUWlPaUl2VlhObGNuTXZUV0YwZEM5VGFYUmxjeTl3YjNCdGIzUnBiMjRpTENKemIzVnlZMlZ6UTI5dWRHVnVkQ0k2V3lKcGJYQnZjblFnWTNOelUzUmhkR1ZOWVhBZ1puSnZiU0FuTGk0dlkzTnpMM04wWVhSbExXMWhjQ2M3WEc1Y2JtTnZibk4wSUZOVVVrOUxSU0E5SUNkemRISnZhMlV0Snp0Y2JseHVaWGh3YjNKMElHUmxabUYxYkhRZ2UxeHVJQ0FnSUM0dUxtTnpjMU4wWVhSbFRXRndMRnh1SUNBZ0lHOXdZV05wZEhrNklHQWtlMU5VVWs5TFJYMXZjR0ZqYVhSNVlDeGNiaUFnSUNCM2FXUjBhRG9nWUNSN1UxUlNUMHRGZlhkcFpIUm9ZQ3hjYmlBZ0lDQnRhWFJsY214cGJXbDBPaUJnSkh0VFZGSlBTMFY5YldsMFpYSnNhVzFwZEdCY2JuMDdJbDE5XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9yZW5kZXIvc3ZnLXBhdGgvc3RhdGUtbWFwLmpzXG4gKiogbW9kdWxlIGlkID0gNDRcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbnZhciBYID0gJ1gnO1xudmFyIFkgPSAnWSc7XG52YXIgQUxQSEEgPSAnQWxwaGEnO1xuXG52YXIgYXhlcyA9IGV4cG9ydHMuYXhlcyA9IFtYLCBZLCAnWiddO1xudmFyIHJnYiA9IGV4cG9ydHMucmdiID0gWydSZWQnLCAnR3JlZW4nLCAnQmx1ZScsIEFMUEhBXTtcbnZhciBoc2wgPSBleHBvcnRzLmhzbCA9IFsnSHVlJywgJ1NhdHVyYXRpb24nLCAnTGlnaHRuZXNzJywgQUxQSEFdO1xudmFyIHBvc2l0aW9ucyA9IGV4cG9ydHMucG9zaXRpb25zID0gWydUb3AnLCAnUmlnaHQnLCAnQm90dG9tJywgJ0xlZnQnXTtcbnZhciBzaGFkb3cgPSBleHBvcnRzLnNoYWRvdyA9IFtYLCBZLCAnUmFkaXVzJywgJ1NwcmVhZCcsICdDb2xvciddO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluTnlZeTkyWVd4MVpTMTBlWEJsY3k5elpYUjBhVzVuY3k5a2FXTjBhVzl1WVhKNUxtcHpJbDBzSW01aGJXVnpJanBiWFN3aWJXRndjR2x1WjNNaU9pSTdPenRCUVVGQkxFbEJRVTBzU1VGQlNTeEhRVUZLTzBGQlEwNHNTVUZCVFN4SlFVRkpMRWRCUVVvN1FVRkRUaXhKUVVGTkxGRkJRVkVzVDBGQlVqczdRVUZGUXl4SlFVRk5MSE5DUVVGUExFTkJRVU1zUTBGQlJDeEZRVUZKTEVOQlFVb3NSVUZCVHl4SFFVRlFMRU5CUVZBN1FVRkRUaXhKUVVGTkxHOUNRVUZOTEVOQlFVTXNTMEZCUkN4RlFVRlJMRTlCUVZJc1JVRkJhVUlzVFVGQmFrSXNSVUZCZVVJc1MwRkJla0lzUTBGQlRqdEJRVU5PTEVsQlFVMHNiMEpCUVUwc1EwRkJReXhMUVVGRUxFVkJRVkVzV1VGQlVpeEZRVUZ6UWl4WFFVRjBRaXhGUVVGdFF5eExRVUZ1UXl4RFFVRk9PMEZCUTA0c1NVRkJUU3huUTBGQldTeERRVUZETEV0QlFVUXNSVUZCVVN4UFFVRlNMRVZCUVdsQ0xGRkJRV3BDTEVWQlFUSkNMRTFCUVROQ0xFTkJRVm83UVVGRFRpeEpRVUZOTERCQ1FVRlRMRU5CUVVNc1EwRkJSQ3hGUVVGSkxFTkJRVW9zUlVGQlR5eFJRVUZRTEVWQlFXbENMRkZCUVdwQ0xFVkJRVEpDTEU5QlFUTkNMRU5CUVZRaUxDSm1hV3hsSWpvaVpHbGpkR2x2Ym1GeWVTNXFjeUlzSW5OdmRYSmpaVkp2YjNRaU9pSXZWWE5sY25NdlRXRjBkQzlUYVhSbGN5OXdiM0J0YjNScGIyNGlMQ0p6YjNWeVkyVnpRMjl1ZEdWdWRDSTZXeUpqYjI1emRDQllJRDBnSjFnbk8xeHVZMjl1YzNRZ1dTQTlJQ2RaSnp0Y2JtTnZibk4wSUVGTVVFaEJJRDBnSjBGc2NHaGhKenRjYmx4dVpYaHdiM0owSUdOdmJuTjBJR0Y0WlhNZ1BTQmJXQ3dnV1N3Z0oxb25YVHRjYm1WNGNHOXlkQ0JqYjI1emRDQnlaMklnUFNCYkoxSmxaQ2NzSUNkSGNtVmxiaWNzSUNkQ2JIVmxKeXdnUVV4UVNFRmRPMXh1Wlhod2IzSjBJR052Ym5OMElHaHpiQ0E5SUZzblNIVmxKeXdnSjFOaGRIVnlZWFJwYjI0bkxDQW5UR2xuYUhSdVpYTnpKeXdnUVV4UVNFRmRPMXh1Wlhod2IzSjBJR052Ym5OMElIQnZjMmwwYVc5dWN5QTlJRnNuVkc5d0p5d2dKMUpwWjJoMEp5d2dKMEp2ZEhSdmJTY3NJQ2RNWldaMEoxMDdYRzVsZUhCdmNuUWdZMjl1YzNRZ2MyaGhaRzkzSUQwZ1cxZ3NJRmtzSUNkU1lXUnBkWE1uTENBblUzQnlaV0ZrSnl3Z0owTnZiRzl5SjEwN0lsMTlcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL3ZhbHVlLXR5cGVzL3NldHRpbmdzL2RpY3Rpb25hcnkuanNcbiAqKiBtb2R1bGUgaWQgPSA0NVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xudmFyIHJnYiA9IGV4cG9ydHMucmdiID0ge1xuICAgIG1pbjogMCxcbiAgICBtYXg6IDI1NSxcbiAgICByb3VuZDogdHJ1ZVxufTtcblxudmFyIG9wYWNpdHkgPSBleHBvcnRzLm9wYWNpdHkgPSB7XG4gICAgbWluOiAwLFxuICAgIG1heDogMVxufTtcblxudmFyIHBlcmNlbnQgPSBleHBvcnRzLnBlcmNlbnQgPSB7XG4gICAgbWluOiAwLFxuICAgIG1heDogMTAwLFxuICAgIHVuaXQ6ICclJ1xufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbk55WXk5MllXeDFaUzEwZVhCbGN5OXpaWFIwYVc1bmN5OWtaV1poZFd4MExYQnliM0J6TG1weklsMHNJbTVoYldWeklqcGJYU3dpYldGd2NHbHVaM01pT2lJN096dEJRVUZQTEVsQlFVMHNiMEpCUVUwN1FVRkRaaXhUUVVGTExFTkJRVXc3UVVGRFFTeFRRVUZMTEVkQlFVdzdRVUZEUVN4WFFVRlBMRWxCUVZBN1EwRklVenM3UVVGTlRpeEpRVUZOTERSQ1FVRlZPMEZCUTI1Q0xGTkJRVXNzUTBGQlREdEJRVU5CTEZOQlFVc3NRMEZCVER0RFFVWlRPenRCUVV0T0xFbEJRVTBzTkVKQlFWVTdRVUZEYmtJc1UwRkJTeXhEUVVGTU8wRkJRMEVzVTBGQlN5eEhRVUZNTzBGQlEwRXNWVUZCVFN4SFFVRk9PME5CU0ZNaUxDSm1hV3hsSWpvaVpHVm1ZWFZzZEMxd2NtOXdjeTVxY3lJc0luTnZkWEpqWlZKdmIzUWlPaUl2VlhObGNuTXZUV0YwZEM5VGFYUmxjeTl3YjNCdGIzUnBiMjRpTENKemIzVnlZMlZ6UTI5dWRHVnVkQ0k2V3lKbGVIQnZjblFnWTI5dWMzUWdjbWRpSUQwZ2UxeHVJQ0FnSUcxcGJqb2dNQ3hjYmlBZ0lDQnRZWGc2SURJMU5TeGNiaUFnSUNCeWIzVnVaRG9nZEhKMVpWeHVmVHRjYmx4dVpYaHdiM0owSUdOdmJuTjBJRzl3WVdOcGRIa2dQU0I3WEc0Z0lDQWdiV2x1T2lBd0xGeHVJQ0FnSUcxaGVEb2dNVnh1ZlR0Y2JseHVaWGh3YjNKMElHTnZibk4wSUhCbGNtTmxiblFnUFNCN1hHNGdJQ0FnYldsdU9pQXdMRnh1SUNBZ0lHMWhlRG9nTVRBd0xGeHVJQ0FnSUhWdWFYUTZJQ2NsSjF4dWZUc2lYWDA9XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy92YWx1ZS10eXBlcy9zZXR0aW5ncy9kZWZhdWx0LXByb3BzLmpzXG4gKiogbW9kdWxlIGlkID0gNDZcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbi8qXG4gICAgRGV0ZWN0IGFuZCBsb2FkIGFuIGFwcHJvcHJpYXRlIGNsb2NrIHNldHRpbmcgZm9yIHRoZSBlbnZpcm9ubWVudFxuKi9cblxudmFyIGhhc1JBRiA9IHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUgPyB0cnVlIDogZmFsc2U7XG5cbnZhciB0aWNrID0gdW5kZWZpbmVkO1xuXG5pZiAoaGFzUkFGKSB7XG4gICAgdGljayA9IHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWU7XG59IGVsc2Uge1xuICAgIChmdW5jdGlvbiAoKSB7XG4gICAgICAgIC8qXG4gICAgICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUgcG9seWZpbGxcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgRm9yIElFOC85IEZsaW5zdG9uZXMgYW5kIG5vbi1icm93c2VyIGVudmlyb25tZW50c1xuICAgICAgICAgICAgIFRha2VuIGZyb20gUGF1bCBJcmlzaC4gV2UndmUgc3RyaXBwZWQgb3V0IGNhbmNlbEFuaW1hdGlvbkZyYW1lIGNoZWNrcyBiZWNhdXNlIHdlIGRvbid0IGZveCB3aXRoIHRoYXRcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgaHR0cDovL3BhdWxpcmlzaC5jb20vMjAxMS9yZXF1ZXN0YW5pbWF0aW9uZnJhbWUtZm9yLXNtYXJ0LWFuaW1hdGluZy9cbiAgICAgICAgICAgIGh0dHA6Ly9teS5vcGVyYS5jb20vZW1vbGxlci9ibG9nLzIwMTEvMTIvMjAvcmVxdWVzdGFuaW1hdGlvbmZyYW1lLWZvci1zbWFydC1lci1hbmltYXRpbmdcbiAgICAgICAgICAgICBcbiAgICAgICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSBwb2x5ZmlsbCBieSBFcmlrIE3DtmxsZXIuIGZpeGVzIGZyb20gUGF1bCBJcmlzaCBhbmQgVGlubyBaaWpkZWxcbiAgICAgICAgICAgICBcbiAgICAgICAgICAgIE1JVCBsaWNlbnNlXG4gICAgICAgICovXG4gICAgICAgIHZhciBsYXN0VGltZSA9IDA7XG5cbiAgICAgICAgdGljayA9IGZ1bmN0aW9uIChjYWxsYmFjaykge1xuICAgICAgICAgICAgdmFyIGN1cnJlbnRUaW1lID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XG4gICAgICAgICAgICB2YXIgdGltZVRvQ2FsbCA9IE1hdGgubWF4KDAsIDE2IC0gKGN1cnJlbnRUaW1lIC0gbGFzdFRpbWUpKTtcblxuICAgICAgICAgICAgbGFzdFRpbWUgPSBjdXJyZW50VGltZSArIHRpbWVUb0NhbGw7XG5cbiAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBjYWxsYmFjayhsYXN0VGltZSk7XG4gICAgICAgICAgICB9LCB0aW1lVG9DYWxsKTtcbiAgICAgICAgfTtcbiAgICB9KSgpO1xufVxuXG5leHBvcnRzLmRlZmF1bHQgPSB0aWNrO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluTnlZeTl3Y205alpYTnpMM1JwWTJzdWFuTWlYU3dpYm1GdFpYTWlPbHRkTENKdFlYQndhVzVuY3lJNklqczdPenM3T3p0QlFVbEJMRWxCUVUwc1UwRkJVeXhQUVVGUkxFMUJRVkFzUzBGQmEwSXNWMEZCYkVJc1NVRkJhVU1zVDBGQlR5eHhRa0ZCVUN4SFFVRm5ReXhKUVVGc1JTeEhRVUY1UlN4TFFVRjZSVHM3UVVGRlppeEpRVUZKTEdkQ1FVRktPenRCUVVWQkxFbEJRVWtzVFVGQlNpeEZRVUZaTzBGQlExSXNWMEZCVHl4UFFVRlBMSEZDUVVGUUxFTkJSRU03UTBGQldpeE5RVWRQT3pzN096czdPenM3T3pzN096czdRVUZsU0N4WlFVRkpMRmRCUVZjc1EwRkJXRHM3UVVGRlNpeGxRVUZQTEZWQlFVTXNVVUZCUkN4RlFVRmpPMEZCUTJwQ0xHZENRVUZOTEdOQlFXTXNTVUZCU1N4SlFVRktMRWRCUVZjc1QwRkJXQ3hGUVVGa0xFTkJSRmM3UVVGRmFrSXNaMEpCUVUwc1lVRkJZU3hMUVVGTExFZEJRVXdzUTBGQlV5eERRVUZVTEVWQlFWa3NUVUZCVFN4alFVRmpMRkZCUVdRc1EwRkJUaXhEUVVGNlFpeERRVVpYT3p0QlFVbHFRaXgxUWtGQlZ5eGpRVUZqTEZWQlFXUXNRMEZLVFRzN1FVRk5ha0lzZFVKQlFWYzdkVUpCUVUwc1UwRkJVeXhSUVVGVU8yRkJRVTRzUlVGQk1FSXNWVUZCY2tNc1JVRk9hVUk3VTBGQlpEdFRRV3BDU2p0RFFVaFFPenRyUWtFNFFtVWlMQ0ptYVd4bElqb2lkR2xqYXk1cWN5SXNJbk52ZFhKalpWSnZiM1FpT2lJdlZYTmxjbk12VFdGMGRDOVRhWFJsY3k5d2IzQnRiM1JwYjI0aUxDSnpiM1Z5WTJWelEyOXVkR1Z1ZENJNld5SXZLbHh1SUNBZ0lFUmxkR1ZqZENCaGJtUWdiRzloWkNCaGJpQmhjSEJ5YjNCeWFXRjBaU0JqYkc5amF5QnpaWFIwYVc1bklHWnZjaUIwYUdVZ1pXNTJhWEp2Ym0xbGJuUmNiaW92WEc1Y2JtTnZibk4wSUdoaGMxSkJSaUE5SUNoMGVYQmxiMllnZDJsdVpHOTNJQ0U5UFNBbmRXNWtaV1pwYm1Wa0p5QW1KaUIzYVc1a2IzY3VjbVZ4ZFdWemRFRnVhVzFoZEdsdmJrWnlZVzFsS1NBL0lIUnlkV1VnT2lCbVlXeHpaVHRjYmx4dWJHVjBJSFJwWTJzN1hHNWNibWxtSUNob1lYTlNRVVlwSUh0Y2JpQWdJQ0IwYVdOcklEMGdkMmx1Wkc5M0xuSmxjWFZsYzNSQmJtbHRZWFJwYjI1R2NtRnRaVHRjYmx4dWZTQmxiSE5sSUh0Y2JpQWdJQ0F2S2x4dUlDQWdJQ0FnSUNCeVpYRjFaWE4wUVc1cGJXRjBhVzl1Um5KaGJXVWdjRzlzZVdacGJHeGNiaUFnSUNBZ0lDQWdYRzRnSUNBZ0lDQWdJRVp2Y2lCSlJUZ3ZPU0JHYkdsdWMzUnZibVZ6SUdGdVpDQnViMjR0WW5KdmQzTmxjaUJsYm5acGNtOXViV1Z1ZEhOY2JseHVJQ0FnSUNBZ0lDQlVZV3RsYmlCbWNtOXRJRkJoZFd3Z1NYSnBjMmd1SUZkbEozWmxJSE4wY21sd2NHVmtJRzkxZENCallXNWpaV3hCYm1sdFlYUnBiMjVHY21GdFpTQmphR1ZqYTNNZ1ltVmpZWFZ6WlNCM1pTQmtiMjRuZENCbWIzZ2dkMmwwYUNCMGFHRjBYRzRnSUNBZ0lDQWdJRnh1SUNBZ0lDQWdJQ0JvZEhSd09pOHZjR0YxYkdseWFYTm9MbU52YlM4eU1ERXhMM0psY1hWbGMzUmhibWx0WVhScGIyNW1jbUZ0WlMxbWIzSXRjMjFoY25RdFlXNXBiV0YwYVc1bkwxeHVJQ0FnSUNBZ0lDQm9kSFJ3T2k4dmJYa3ViM0JsY21FdVkyOXRMMlZ0YjJ4c1pYSXZZbXh2Wnk4eU1ERXhMekV5THpJd0wzSmxjWFZsYzNSaGJtbHRZWFJwYjI1bWNtRnRaUzFtYjNJdGMyMWhjblF0WlhJdFlXNXBiV0YwYVc1blhHNGdJQ0FnSUNBZ0lDQmNiaUFnSUNBZ0lDQWdjbVZ4ZFdWemRFRnVhVzFoZEdsdmJrWnlZVzFsSUhCdmJIbG1hV3hzSUdKNUlFVnlhV3NnVGNPMmJHeGxjaTRnWm1sNFpYTWdabkp2YlNCUVlYVnNJRWx5YVhOb0lHRnVaQ0JVYVc1dklGcHBhbVJsYkZ4dUlDQWdJQ0FnSUNBZ1hHNGdJQ0FnSUNBZ0lFMUpWQ0JzYVdObGJuTmxYRzRnSUNBZ0tpOWNiaUFnSUNCc1pYUWdiR0Z6ZEZScGJXVWdQU0F3TzF4dVhHNGdJQ0FnZEdsamF5QTlJQ2hqWVd4c1ltRmpheWtnUFQ0Z2UxeHVJQ0FnSUNBZ0lDQmpiMjV6ZENCamRYSnlaVzUwVkdsdFpTQTlJRzVsZHlCRVlYUmxLQ2t1WjJWMFZHbHRaU2dwTzF4dUlDQWdJQ0FnSUNCamIyNXpkQ0IwYVcxbFZHOURZV3hzSUQwZ1RXRjBhQzV0WVhnb01Dd2dNVFlnTFNBb1kzVnljbVZ1ZEZScGJXVWdMU0JzWVhOMFZHbHRaU2twTzF4dVhHNGdJQ0FnSUNBZ0lHeGhjM1JVYVcxbElEMGdZM1Z5Y21WdWRGUnBiV1VnS3lCMGFXMWxWRzlEWVd4c08xeHVYRzRnSUNBZ0lDQWdJSE5sZEZScGJXVnZkWFFvS0NrZ1BUNGdZMkZzYkdKaFkyc29iR0Z6ZEZScGJXVXBMQ0IwYVcxbFZHOURZV3hzS1R0Y2JpQWdJQ0I5TzF4dWZWeHVYRzVsZUhCdmNuUWdaR1ZtWVhWc2RDQjBhV05yT3lKZGZRPT1cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL3Byb2Nlc3MvdGljay5qc1xuICoqIG1vZHVsZSBpZCA9IDQ3XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfZGljdGlvbmFyeSA9IHJlcXVpcmUoJy4uLy4uL3ZhbHVlLXR5cGVzL3NldHRpbmdzL2RpY3Rpb25hcnknKTtcblxudmFyIHRyYW5zZm9ybVByb3BzID0ge307XG5cbnZhciBTQ0FMRSA9ICdzY2FsZSc7XG52YXIgUk9UQVRFID0gJ3JvdGF0ZSc7XG52YXIgVFJBTlNGT1JNX1BFUlNQRUNUSVZFID0gJ3RyYW5zZm9ybVBlcnNwZWN0aXZlJztcbnZhciBURVJNUyA9IFsndHJhbnNsYXRlJywgU0NBTEUsIFJPVEFURSwgJ3NrZXcnLCBUUkFOU0ZPUk1fUEVSU1BFQ1RJVkVdO1xuXG50cmFuc2Zvcm1Qcm9wc1tST1RBVEVdID0gdHJhbnNmb3JtUHJvcHNbU0NBTEVdID0gdHJhbnNmb3JtUHJvcHNbVFJBTlNGT1JNX1BFUlNQRUNUSVZFXSA9IHRydWU7XG5cblRFUk1TLmZvckVhY2goZnVuY3Rpb24gKHRlcm0pIHtcbiAgcmV0dXJuIF9kaWN0aW9uYXJ5LmF4ZXMuZm9yRWFjaChmdW5jdGlvbiAoYXhpcykge1xuICAgIHJldHVybiB0cmFuc2Zvcm1Qcm9wc1t0ZXJtICsgYXhpc10gPSB0cnVlO1xuICB9KTtcbn0pO1xuXG5leHBvcnRzLmRlZmF1bHQgPSB0cmFuc2Zvcm1Qcm9wcztcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbk55WXk5eVpXNWtaWEl2WTNOekwzUnlZVzV6Wm05eWJTMXdjbTl3Y3k1cWN5SmRMQ0p1WVcxbGN5STZXMTBzSW0xaGNIQnBibWR6SWpvaU96czdPenM3UVVGRlFTeEpRVUZKTEdsQ1FVRnBRaXhGUVVGcVFqczdRVUZGU2l4SlFVRk5MRkZCUVZFc1QwRkJVanRCUVVOT0xFbEJRVTBzVTBGQlV5eFJRVUZVTzBGQlEwNHNTVUZCVFN4M1FrRkJkMElzYzBKQlFYaENPMEZCUTA0c1NVRkJUU3hSUVVGUkxFTkJRVU1zVjBGQlJDeEZRVUZqTEV0QlFXUXNSVUZCY1VJc1RVRkJja0lzUlVGQk5rSXNUVUZCTjBJc1JVRkJjVU1zY1VKQlFYSkRMRU5CUVZJN08wRkJSVTRzWlVGQlpTeE5RVUZtTEVsQlFYbENMR1ZCUVdVc1MwRkJaaXhKUVVGM1FpeGxRVUZsTEhGQ1FVRm1MRWxCUVhkRExFbEJRWGhET3p0QlFVVnFSQ3hOUVVGTkxFOUJRVTRzUTBGQll5eFZRVUZETEVsQlFVUTdVMEZCVlN4cFFrRkJTeXhQUVVGTUxFTkJRV0VzVlVGQlF5eEpRVUZFTzFkQlFWVXNaVUZCWlN4UFFVRlBMRWxCUVZBc1EwRkJaaXhIUVVFNFFpeEpRVUU1UWp0SFFVRldPME5CUVhaQ0xFTkJRV1E3TzJ0Q1FVVmxJaXdpWm1sc1pTSTZJblJ5WVc1elptOXliUzF3Y205d2N5NXFjeUlzSW5OdmRYSmpaVkp2YjNRaU9pSXZWWE5sY25NdlRXRjBkQzlUYVhSbGN5OXdiM0J0YjNScGIyNGlMQ0p6YjNWeVkyVnpRMjl1ZEdWdWRDSTZXeUpwYlhCdmNuUWdleUJoZUdWeklIMGdabkp2YlNBbkxpNHZMaTR2ZG1Gc2RXVXRkSGx3WlhNdmMyVjBkR2x1WjNNdlpHbGpkR2x2Ym1GeWVTYzdYRzVjYm14bGRDQjBjbUZ1YzJadmNtMVFjbTl3Y3lBOUlIdDlPMXh1WEc1amIyNXpkQ0JUUTBGTVJTQTlJQ2R6WTJGc1pTYzdYRzVqYjI1emRDQlNUMVJCVkVVZ1BTQW5jbTkwWVhSbEp6dGNibU52Ym5OMElGUlNRVTVUUms5U1RWOVFSVkpUVUVWRFZFbFdSU0E5SUNkMGNtRnVjMlp2Y20xUVpYSnpjR1ZqZEdsMlpTYzdYRzVqYjI1emRDQlVSVkpOVXlBOUlGc25kSEpoYm5Oc1lYUmxKeXdnVTBOQlRFVXNJRkpQVkVGVVJTd2dKM05yWlhjbkxDQlVVa0ZPVTBaUFVrMWZVRVZTVTFCRlExUkpWa1ZkTzF4dVhHNTBjbUZ1YzJadmNtMVFjbTl3YzF0U1QxUkJWRVZkSUQwZ2RISmhibk5tYjNKdFVISnZjSE5iVTBOQlRFVmRJRDBnZEhKaGJuTm1iM0p0VUhKdmNITmJWRkpCVGxOR1QxSk5YMUJGVWxOUVJVTlVTVlpGWFNBOUlIUnlkV1U3WEc1Y2JsUkZVazFUTG1admNrVmhZMmdvS0hSbGNtMHBJRDArSUdGNFpYTXVabTl5UldGamFDZ29ZWGhwY3lrZ1BUNGdkSEpoYm5ObWIzSnRVSEp2Y0hOYmRHVnliU0FySUdGNGFYTmRJRDBnZEhKMVpTa3BPMXh1WEc1bGVIQnZjblFnWkdWbVlYVnNkQ0IwY21GdWMyWnZjbTFRY205d2N6c2lYWDA9XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9yZW5kZXIvY3NzL3RyYW5zZm9ybS1wcm9wcy5qc1xuICoqIG1vZHVsZSBpZCA9IDQ4XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iXSwic291cmNlUm9vdCI6IiIsImZpbGUiOiJwb3Btb3Rpb24uZ2xvYmFsLmpzIn0=