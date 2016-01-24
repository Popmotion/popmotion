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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdsb2JhbC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0lBQVksU0FBUzs7OztBQUVyQixJQUFNLEtBQUssR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDOztBQUU1QixTQUFTLENBQUMsVUFBVSxHQUFHLFlBQVk7QUFDL0IsVUFBTSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7Q0FDekIsQ0FBQzs7QUFFRixNQUFNLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDIiwiZmlsZSI6Imdsb2JhbC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIHBvcG1vdGlvbiBmcm9tICcuLi9wb3Btb3Rpb24nO1xuXG5jb25zdCBVSXJlZiA9IHdpbmRvdy5tb3Rpb247XG5cbnBvcG1vdGlvbi5ub0NvbmZsaWN0ID0gZnVuY3Rpb24gKCkge1xuICAgIHdpbmRvdy5tb3Rpb24gPSBVSXJlZjtcbn07XG5cbndpbmRvdy5tb3Rpb24gPSB3aW5kb3cucG9wbW90aW9uID0gcG9wbW90aW9uOyJdfQ==

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports.shadowType = exports.scaleType = exports.rgbType = exports.pxType = exports.positionsType = exports.hslType = exports.hexType = exports.complexType = exports.colorType = exports.axesType = exports.angleType = exports.alphaType = exports.stagger = exports.setDilation = exports.selectActor = exports.createMapTransform = exports.createEasing = exports.cubicBezier = exports.utils = exports.calc = exports.renderSVGPath = exports.renderSVG = exports.renderCSS = exports.renderAttr = exports.Touch = exports.Mouse = exports.Input = exports.Track = exports.Physics = exports.Tween = exports.Action = exports.Actor = undefined;
	
	var _Actor2 = __webpack_require__(2);
	
	var _Actor3 = _interopRequireDefault(_Actor2);
	
	var _Action2 = __webpack_require__(3);
	
	var _Action3 = _interopRequireDefault(_Action2);
	
	var _Tween2 = __webpack_require__(4);
	
	var _Tween3 = _interopRequireDefault(_Tween2);
	
	var _Physics2 = __webpack_require__(5);
	
	var _Physics3 = _interopRequireDefault(_Physics2);
	
	var _Track2 = __webpack_require__(6);
	
	var _Track3 = _interopRequireDefault(_Track2);
	
	var _Input2 = __webpack_require__(7);
	
	var _Input3 = _interopRequireDefault(_Input2);
	
	var _Mouse2 = __webpack_require__(8);
	
	var _Mouse3 = _interopRequireDefault(_Mouse2);
	
	var _Touch2 = __webpack_require__(9);
	
	var _Touch3 = _interopRequireDefault(_Touch2);
	
	var _attr = __webpack_require__(10);
	
	var _attr2 = _interopRequireDefault(_attr);
	
	var _css = __webpack_require__(11);
	
	var _css2 = _interopRequireDefault(_css);
	
	var _svg = __webpack_require__(12);
	
	var _svg2 = _interopRequireDefault(_svg);
	
	var _svgPath = __webpack_require__(13);
	
	var _svgPath2 = _interopRequireDefault(_svgPath);
	
	var _calc2 = __webpack_require__(14);
	
	var _calc = _interopRequireWildcard(_calc2);
	
	var _utils2 = __webpack_require__(15);
	
	var _utils = _interopRequireWildcard(_utils2);
	
	var _createBezier = __webpack_require__(16);
	
	var _createBezier2 = _interopRequireDefault(_createBezier);
	
	var _createEasing2 = __webpack_require__(17);
	
	var _createEasing3 = _interopRequireDefault(_createEasing2);
	
	var _map = __webpack_require__(18);
	
	var _map2 = _interopRequireDefault(_map);
	
	var _selectActor2 = __webpack_require__(19);
	
	var _selectActor3 = _interopRequireDefault(_selectActor2);
	
	var _timer = __webpack_require__(20);
	
	var _timer2 = _interopRequireDefault(_timer);
	
	var _stagger2 = __webpack_require__(21);
	
	var _stagger3 = _interopRequireDefault(_stagger2);
	
	var _alpha = __webpack_require__(22);
	
	var _alpha2 = _interopRequireDefault(_alpha);
	
	var _angle = __webpack_require__(23);
	
	var _angle2 = _interopRequireDefault(_angle);
	
	var _axes = __webpack_require__(24);
	
	var _axes2 = _interopRequireDefault(_axes);
	
	var _color = __webpack_require__(25);
	
	var _color2 = _interopRequireDefault(_color);
	
	var _complex = __webpack_require__(26);
	
	var _complex2 = _interopRequireDefault(_complex);
	
	var _hex = __webpack_require__(27);
	
	var _hex2 = _interopRequireDefault(_hex);
	
	var _hsl = __webpack_require__(28);
	
	var _hsl2 = _interopRequireDefault(_hsl);
	
	var _positions = __webpack_require__(29);
	
	var _positions2 = _interopRequireDefault(_positions);
	
	var _px = __webpack_require__(30);
	
	var _px2 = _interopRequireDefault(_px);
	
	var _rgb = __webpack_require__(31);
	
	var _rgb2 = _interopRequireDefault(_rgb);
	
	var _scale = __webpack_require__(32);
	
	var _scale2 = _interopRequireDefault(_scale);
	
	var _shadow = __webpack_require__(33);
	
	var _shadow2 = _interopRequireDefault(_shadow);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.Actor = _Actor3.default;
	
	// Actions
	// Actor
	
	exports.Action = _Action3.default;
	exports.Tween = _Tween3.default;
	exports.Physics = _Physics3.default;
	exports.Track = _Track3.default;
	
	// Input
	
	exports.Input = _Input3.default;
	exports.Mouse = _Mouse3.default;
	exports.Touch = _Touch3.default;
	
	// Renderers
	
	exports.renderAttr = _attr2.default;
	exports.renderCSS = _css2.default;
	exports.renderSVG = _svg2.default;
	exports.renderSVGPath = _svgPath2.default;
	
	// Utils
	
	exports.calc = _calc;
	exports.utils = _utils;
	exports.cubicBezier = _createBezier2.default;
	exports.createEasing = _createEasing3.default;
	exports.createMapTransform = _map2.default;
	exports.selectActor = _selectActor3.default;
	exports.setDilation = _timer2.default;
	exports.stagger = _stagger3.default;
	
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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBvcG1vdGlvbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztRQUNPLEtBQUs7Ozs7O1FBR0wsTUFBTTtRQUNOLEtBQUs7UUFDTCxPQUFPO1FBQ1AsS0FBSzs7OztRQUdMLEtBQUs7UUFDTCxLQUFLO1FBQ0wsS0FBSzs7OztRQUdMLFVBQVU7UUFDVixTQUFTO1FBQ1QsU0FBUztRQUNULGFBQWE7Ozs7UUFHUixJQUFJO1FBQ0osS0FBSztRQUNWLFdBQVc7UUFDWCxZQUFZO1FBQ1osa0JBQWtCO1FBQ2xCLFdBQVc7UUFDWCxXQUFXO1FBQ1gsT0FBTzs7OztRQUdQLFNBQVM7UUFDVCxTQUFTO1FBQ1QsUUFBUTtRQUNSLFNBQVM7UUFDVCxXQUFXO1FBQ1gsT0FBTztRQUNQLE9BQU87UUFDUCxhQUFhO1FBQ2IsTUFBTTtRQUNOLE9BQU87UUFDUCxTQUFTO1FBQ1QsVUFBVSIsImZpbGUiOiJwb3Btb3Rpb24uanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBBY3RvclxuZXhwb3J0IEFjdG9yIGZyb20gJy4vYWN0b3IvQWN0b3InO1xuXG4vLyBBY3Rpb25zXG5leHBvcnQgQWN0aW9uIGZyb20gJy4vYWN0aW9ucy9BY3Rpb24nO1xuZXhwb3J0IFR3ZWVuIGZyb20gJy4vYWN0aW9ucy9Ud2Vlbic7XG5leHBvcnQgUGh5c2ljcyBmcm9tICcuL2FjdGlvbnMvUGh5c2ljcyc7XG5leHBvcnQgVHJhY2sgZnJvbSAnLi9hY3Rpb25zL1RyYWNrJztcblxuLy8gSW5wdXRcbmV4cG9ydCBJbnB1dCBmcm9tICcuL2lucHV0L0lucHV0JztcbmV4cG9ydCBNb3VzZSBmcm9tICcuL2lucHV0L01vdXNlJztcbmV4cG9ydCBUb3VjaCBmcm9tICcuL2lucHV0L1RvdWNoJztcblxuLy8gUmVuZGVyZXJzXG5leHBvcnQgcmVuZGVyQXR0ciBmcm9tICcuL3JlbmRlci9hdHRyJztcbmV4cG9ydCByZW5kZXJDU1MgZnJvbSAnLi9yZW5kZXIvY3NzJztcbmV4cG9ydCByZW5kZXJTVkcgZnJvbSAnLi9yZW5kZXIvc3ZnJztcbmV4cG9ydCByZW5kZXJTVkdQYXRoIGZyb20gJy4vcmVuZGVyL3N2Zy1wYXRoJztcblxuLy8gVXRpbHNcbmV4cG9ydCAqIGFzIGNhbGMgZnJvbSAnLi9pbmMvY2FsYyc7XG5leHBvcnQgKiBhcyB1dGlscyBmcm9tICcuL2luYy91dGlscyc7XG5leHBvcnQgY3ViaWNCZXppZXIgZnJvbSAnLi9hY3Rpb25zL3R3ZWVuL2NyZWF0ZS1iZXppZXInO1xuZXhwb3J0IGNyZWF0ZUVhc2luZyBmcm9tICcuL2FjdGlvbnMvdHdlZW4vY3JlYXRlLWVhc2luZyc7XG5leHBvcnQgY3JlYXRlTWFwVHJhbnNmb3JtIGZyb20gJy4vdHJhbnNmb3JtZXJzL21hcCc7XG5leHBvcnQgc2VsZWN0QWN0b3IgZnJvbSAnLi9pbmMvc2VsZWN0LWFjdG9yJztcbmV4cG9ydCBzZXREaWxhdGlvbiBmcm9tICcuL3Byb2Nlc3MvdGltZXInO1xuZXhwb3J0IHN0YWdnZXIgZnJvbSAnLi9pbmMvc3RhZ2dlcic7XG5cbi8vIFZhbHVlIHR5cGVzXG5leHBvcnQgYWxwaGFUeXBlIGZyb20gJy4vdmFsdWUtdHlwZXMvYWxwaGEnO1xuZXhwb3J0IGFuZ2xlVHlwZSBmcm9tICcuL3ZhbHVlLXR5cGVzL2FuZ2xlJztcbmV4cG9ydCBheGVzVHlwZSBmcm9tICcuL3ZhbHVlLXR5cGVzL2F4ZXMnO1xuZXhwb3J0IGNvbG9yVHlwZSBmcm9tICcuL3ZhbHVlLXR5cGVzL2NvbG9yJztcbmV4cG9ydCBjb21wbGV4VHlwZSBmcm9tICcuL3ZhbHVlLXR5cGVzL2NvbXBsZXgnO1xuZXhwb3J0IGhleFR5cGUgZnJvbSAnLi92YWx1ZS10eXBlcy9oZXgnO1xuZXhwb3J0IGhzbFR5cGUgZnJvbSAnLi92YWx1ZS10eXBlcy9oc2wnO1xuZXhwb3J0IHBvc2l0aW9uc1R5cGUgZnJvbSAnLi92YWx1ZS10eXBlcy9wb3NpdGlvbnMnO1xuZXhwb3J0IHB4VHlwZSBmcm9tICcuL3ZhbHVlLXR5cGVzL3B4JztcbmV4cG9ydCByZ2JUeXBlIGZyb20gJy4vdmFsdWUtdHlwZXMvcmdiJztcbmV4cG9ydCBzY2FsZVR5cGUgZnJvbSAnLi92YWx1ZS10eXBlcy9zY2FsZSc7XG5leHBvcnQgc2hhZG93VHlwZSBmcm9tICcuL3ZhbHVlLXR5cGVzL3NoYWRvdyc7Il19

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _Action2 = __webpack_require__(3);
	
	var _Action3 = _interopRequireDefault(_Action2);
	
	var _utils = __webpack_require__(15);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Actor = (function (_Action) {
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
	
	    Actor.prototype.do = function _do(action) {
	        if (this.reducer) {
	            this.start(this.reducer(action, this.values));
	        }
	    };
	
	    Actor.prototype.start = function start(action) {
	        _Action.prototype.start.call(this);
	        var actionInstance = action.inherit();
	
	        // Assign action to appropriate values
	
	        return actionInstance;
	    };
	
	    Actor.prototype.willRender = function willRender(actor, frameStamp, elapsed) {
	        var _this2 = this;
	
	        var hasChanged = false;
	
	        (0, _utils.each)(this.values, function (value, key) {
	            var updatedValue = value.current;
	
	            // Update value based on active action
	            if (value.action) {
	                updatedValue = value.action.values[key].current;
	            }
	
	            // Run transform function (if present)
	            if (value.transform) {
	                updatedValue = value.transform(updatedValue, key, _this2);
	            }
	
	            // Smooth value if we have smoothing
	            if (value.smooth) {
	                updatedValue = calc.smooth(updatedValue, value.current, elapsed, value.smooth);
	            }
	
	            if (value.round) {
	                updatedValue = Math.round(updatedValue);
	            }
	
	            value.velocity = (0, _utils.speedPerSecond)(updatedValue - value.current, elapsed);
	
	            if (updatedValue !== value.current) {
	                hasChanged = true;
	            }
	
	            value.current = updatedValue;
	
	            // Update state
	            if (value.unit) {
	                var valueWithUnit = updatedValue + value.unit;
	            }
	
	            // Add straight to state if no parent
	            if (!value.parent) {
	                var mappedKey = _this2.onRender && _this2.onRender.stateMap ? _this2.onRender.stateMap[key] : key;
	                _this2.state[key] = updatedValue;
	
	                // Or add to parent
	            } else {
	                    _this2.values[value.parent].children[key] = updatedValue;
	                }
	        });
	
	        return hasChanged;
	    };
	
	    Actor.prototype.preRender = function preRender() {
	        // process parent values
	    };
	
	    return Actor;
	})(_Action3.default);
	
	exports.default = Actor;
	//# sourceMappingURL=data:application/json;base64,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ZUFBTyxVQUFVLENBQUM7S0FDckI7O0FBdkVnQixTQUFLLFdBeUV0QixTQUFTLHdCQUFHOztLQUVYOztXQTNFZ0IsS0FBSzs7O2tCQUFMLEtBQUsiLCJmaWxlIjoiQWN0b3IuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQWN0aW9uIGZyb20gJy4uL2FjdGlvbnMvQWN0aW9uJztcbmltcG9ydCB7IGVhY2gsIHNwZWVkUGVyU2Vjb25kIH0gZnJvbSAnLi4vaW5jL3V0aWxzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQWN0b3IgZXh0ZW5kcyBBY3Rpb24ge1xuICAgIGNvbnN0cnVjdG9yKC4uLmFyZ3MpIHtcbiAgICAgICAgc3VwZXIoLi4uYXJncyk7XG4gICAgICAgIHRoaXMub25jZSgpO1xuICAgIH1cblxuICAgIGRvKGFjdGlvbikge1xuICAgICAgICBpZiAodGhpcy5yZWR1Y2VyKSB7XG4gICAgICAgICAgICB0aGlzLnN0YXJ0KHRoaXMucmVkdWNlcihhY3Rpb24sIHRoaXMudmFsdWVzKSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzdGFydChhY3Rpb24pIHtcbiAgICAgICAgc3VwZXIuc3RhcnQoKTtcbiAgICAgICAgY29uc3QgYWN0aW9uSW5zdGFuY2UgPSBhY3Rpb24uaW5oZXJpdCgpO1xuXG4gICAgICAgIC8vIEFzc2lnbiBhY3Rpb24gdG8gYXBwcm9wcmlhdGUgdmFsdWVzXG5cbiAgICAgICAgcmV0dXJuIGFjdGlvbkluc3RhbmNlO1xuICAgIH1cblxuICAgIHdpbGxSZW5kZXIoYWN0b3IsIGZyYW1lU3RhbXAsIGVsYXBzZWQpIHtcbiAgICAgICAgbGV0IGhhc0NoYW5nZWQgPSBmYWxzZTtcblxuICAgICAgICBlYWNoKHRoaXMudmFsdWVzLCAodmFsdWUsIGtleSkgPT4ge1xuICAgICAgICAgICAgbGV0IHVwZGF0ZWRWYWx1ZSA9IHZhbHVlLmN1cnJlbnQ7XG5cbiAgICAgICAgICAgIC8vIFVwZGF0ZSB2YWx1ZSBiYXNlZCBvbiBhY3RpdmUgYWN0aW9uXG4gICAgICAgICAgICBpZiAodmFsdWUuYWN0aW9uKSB7XG4gICAgICAgICAgICAgICAgdXBkYXRlZFZhbHVlID0gdmFsdWUuYWN0aW9uLnZhbHVlc1trZXldLmN1cnJlbnQ7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIFJ1biB0cmFuc2Zvcm0gZnVuY3Rpb24gKGlmIHByZXNlbnQpXG4gICAgICAgICAgICBpZiAodmFsdWUudHJhbnNmb3JtKSB7XG4gICAgICAgICAgICAgICAgdXBkYXRlZFZhbHVlID0gdmFsdWUudHJhbnNmb3JtKHVwZGF0ZWRWYWx1ZSwga2V5LCB0aGlzKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gU21vb3RoIHZhbHVlIGlmIHdlIGhhdmUgc21vb3RoaW5nXG4gICAgICAgICAgICBpZiAodmFsdWUuc21vb3RoKSB7XG4gICAgICAgICAgICAgICAgdXBkYXRlZFZhbHVlID0gY2FsYy5zbW9vdGgodXBkYXRlZFZhbHVlLCB2YWx1ZS5jdXJyZW50LCBlbGFwc2VkLCB2YWx1ZS5zbW9vdGgpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAodmFsdWUucm91bmQpIHtcbiAgICAgICAgICAgICAgICB1cGRhdGVkVmFsdWUgPSBNYXRoLnJvdW5kKHVwZGF0ZWRWYWx1ZSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHZhbHVlLnZlbG9jaXR5ID0gc3BlZWRQZXJTZWNvbmQodXBkYXRlZFZhbHVlIC0gdmFsdWUuY3VycmVudCwgZWxhcHNlZCk7XG5cbiAgICAgICAgICAgIGlmICh1cGRhdGVkVmFsdWUgIT09IHZhbHVlLmN1cnJlbnQpIHtcbiAgICAgICAgICAgICAgICBoYXNDaGFuZ2VkID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdmFsdWUuY3VycmVudCA9IHVwZGF0ZWRWYWx1ZTtcblxuICAgICAgICAgICAgLy8gVXBkYXRlIHN0YXRlXG4gICAgICAgICAgICBpZiAodmFsdWUudW5pdCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHZhbHVlV2l0aFVuaXQgPSB1cGRhdGVkVmFsdWUgKyB2YWx1ZS51bml0O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBBZGQgc3RyYWlnaHQgdG8gc3RhdGUgaWYgbm8gcGFyZW50XG4gICAgICAgICAgICBpZiAoIXZhbHVlLnBhcmVudCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IG1hcHBlZEtleSA9ICh0aGlzLm9uUmVuZGVyICYmIHRoaXMub25SZW5kZXIuc3RhdGVNYXApID8gdGhpcy5vblJlbmRlci5zdGF0ZU1hcFtrZXldIDoga2V5O1xuICAgICAgICAgICAgICAgIHRoaXMuc3RhdGVba2V5XSA9IHVwZGF0ZWRWYWx1ZTtcblxuICAgICAgICAgICAgLy8gT3IgYWRkIHRvIHBhcmVudFxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLnZhbHVlc1t2YWx1ZS5wYXJlbnRdLmNoaWxkcmVuW2tleV0gPSB1cGRhdGVkVmFsdWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiBoYXNDaGFuZ2VkO1xuICAgIH1cblxuICAgIHByZVJlbmRlcigpIHtcbiAgICAgICAgLy8gcHJvY2VzcyBwYXJlbnQgdmFsdWVzXG4gICAgfVxufSJdfQ==

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	exports.__esModule = true;
	
	var _Process2 = __webpack_require__(34);
	
	var _Process3 = _interopRequireDefault(_Process2);
	
	var _utils = __webpack_require__(15);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var DEFAULT_PROP = 'current';
	
	var Action = (function (_Process) {
	    _inherits(Action, _Process);
	
	    function Action() {
	        _classCallCheck(this, Action);
	
	        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	            args[_key] = arguments[_key];
	        }
	
	        // Initalise renderer
	
	        var _this = _possibleConstructorReturn(this, _Process.call.apply(_Process, [this].concat(args)));
	
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
	
	        // Merge `value` properties with existing
	        if (values) {
	            (function () {
	                var currentValues = _this2.values;
	                var defaultValue = _this2.getDefaultValue();
	                var defaultValueProp = _this2.getDefaultValueProp();
	
	                // Inherit values from props
	                (0, _utils.each)(defaultValue, function (value, key) {
	                    if (propsToSet[key] !== undefined) {
	                        defaultValue[key] = propsToSet[key];
	                    }
	                });
	
	                // Overwrite per-value props
	                (0, _utils.each)(values, function (value, key) {
	                    var existingValue = currentValues[key];
	                    var newValue = _extends({}, defaultValue);
	
	                    if ((0, _utils.isObj)(value)) {
	                        newValue = _extends({}, newValue, value);
	                    } else {
	                        newValue[defaultValueProp] = value;
	                    }
	
	                    // update values
	
	                    currentValues[key] = existingValue ? _extends({}, existingValue, newValue) : newValue;
	                });
	            })();
	        }
	
	        return this;
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
	})(_Process3.default);
	
	exports.default = Action;
	;
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkFjdGlvbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBR0EsSUFBTSxZQUFZLEdBQUcsU0FBUyxDQUFDOztJQUVWLE1BQU07Y0FBTixNQUFNOztBQUN2QixhQURpQixNQUFNLEdBQ0Y7OEJBREosTUFBTTs7MENBQ1IsSUFBSTtBQUFKLGdCQUFJOzs7OztxREFDZiw0Q0FBUyxJQUFJLEVBQUM7O0FBR2QsWUFBSSxNQUFLLFFBQVEsSUFBSSxNQUFLLFFBQVEsQ0FBQyxJQUFJLEVBQUU7QUFDckMsa0JBQUssUUFBUSxDQUFDLElBQUksT0FBTSxDQUFDO1NBQzVCOztLQUNKOzs7Ozs7OztBQUFBO0FBUmdCLFVBQU0sV0FpQnZCLEdBQUcsZ0JBQUMsS0FBSyxFQUFFOzs7WUFDQyxNQUFNLEdBQW9CLEtBQUssQ0FBL0IsTUFBTTs7WUFBSyxVQUFVLDRCQUFLLEtBQUs7O0FBRXZDLDJCQUFNLEdBQUcsS0FBQSxPQUFDLFVBQVUsQ0FBQyxDQUFDOztBQUV0QixZQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNLElBQUksRUFBRTs7O0FBQUMsQUFHaEMsWUFBSSxNQUFNLEVBQUU7O0FBQ1Isb0JBQU0sYUFBYSxHQUFHLE9BQUssTUFBTSxDQUFDO0FBQ2xDLG9CQUFNLFlBQVksR0FBRyxPQUFLLGVBQWUsRUFBRSxDQUFDO0FBQzVDLG9CQUFNLGdCQUFnQixHQUFHLE9BQUssbUJBQW1CLEVBQUU7OztBQUFDLEFBR3BELDJCQW5DSCxJQUFJLEVBbUNJLFlBQVksRUFBRSxVQUFDLEtBQUssRUFBRSxHQUFHLEVBQUs7QUFDL0Isd0JBQUksVUFBVSxDQUFDLEdBQUcsQ0FBQyxLQUFLLFNBQVMsRUFBRTtBQUMvQixvQ0FBWSxDQUFDLEdBQUcsQ0FBQyxHQUFHLFVBQVUsQ0FBQyxHQUFHLENBQUMsQ0FBQztxQkFDdkM7aUJBQ0osQ0FBQzs7O0FBQUMsQUFHSCwyQkExQ0gsSUFBSSxFQTBDSSxNQUFNLEVBQUUsVUFBQyxLQUFLLEVBQUUsR0FBRyxFQUFLO0FBQ3pCLHdCQUFNLGFBQWEsR0FBRyxhQUFhLENBQUMsR0FBRyxDQUFDLENBQUM7QUFDekMsd0JBQUksUUFBUSxnQkFBUSxZQUFZLENBQUUsQ0FBQzs7QUFFbkMsd0JBQUksV0E5Q0wsS0FBSyxFQThDTSxLQUFLLENBQUMsRUFBRTtBQUNkLGdDQUFRLGdCQUFRLFFBQVEsRUFBSyxLQUFLLENBQUUsQ0FBQztxQkFDeEMsTUFBTTtBQUNILGdDQUFRLENBQUMsZ0JBQWdCLENBQUMsR0FBRyxLQUFLLENBQUM7cUJBQ3RDOzs7O0FBQUEsQUFJRCxpQ0FBYSxDQUFDLEdBQUcsQ0FBQyxHQUFHLGFBQWEsZ0JBQVEsYUFBYSxFQUFLLFFBQVEsSUFBSyxRQUFRLENBQUM7aUJBQ3JGLENBQUMsQ0FBQzs7U0FDTjs7QUFFRCxlQUFPLElBQUksQ0FBQztLQUNmOztBQXZEZ0IsVUFBTSxXQXlEdkIsS0FBSyxvQkFBRztBQUNKLDJCQUFNLElBQUksS0FBQSxNQUFFLENBQUM7QUFDYixlQUFPLElBQUksQ0FBQztLQUNmOztBQTVEZ0IsVUFBTSxXQThEdkIsTUFBTSxxQkFBRztBQUNMLDJCQUFNLEtBQUssS0FBQSxNQUFFLENBQUM7QUFDZCxlQUFPLElBQUksQ0FBQztLQUNmOzs7Ozs7O0FBakVnQixVQUFNLFdBd0V2QixlQUFlLDhCQUFHO0FBQ2QsZUFBTztBQUNILG1CQUFPLEVBQUUsQ0FBQztBQUNWLG9CQUFRLEVBQUUsQ0FBQztTQUNkLENBQUM7S0FDTDs7Ozs7Ozs7QUE3RWdCLFVBQU0sV0FxRnZCLG1CQUFtQixrQ0FBRztBQUNsQixlQUFPLFlBQVksQ0FBQztLQUN2Qjs7V0F2RmdCLE1BQU07OztrQkFBTixNQUFNO0FBd0YxQixDQUFDIiwiZmlsZSI6IkFjdGlvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBQcm9jZXNzIGZyb20gJy4uL3Byb2Nlc3MvUHJvY2Vzcyc7XG5pbXBvcnQgeyBlYWNoLCBpc09iaiB9IGZyb20gJy4uL2luYy91dGlscyc7XG5cbmNvbnN0IERFRkFVTFRfUFJPUCA9ICdjdXJyZW50JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQWN0aW9uIGV4dGVuZHMgUHJvY2VzcyB7XG4gICAgY29uc3RydWN0b3IoLi4uYXJncykge1xuICAgICAgICBzdXBlciguLi5hcmdzKTtcblxuICAgICAgICAvLyBJbml0YWxpc2UgcmVuZGVyZXIgXG4gICAgICAgIGlmICh0aGlzLm9uUmVuZGVyICYmIHRoaXMub25SZW5kZXIuaW5pdCkge1xuICAgICAgICAgICAgdGhpcy5vblJlbmRlci5pbml0KHRoaXMpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLypcbiAgICAgICAgIyBTZXQgQWN0aW9uIHByb3BlcnRpZXNcbiAgICAgICAgIyMgU2V0IHVzZXItZGVmaW5lZCBBY3Rpb24gcHJvcGVydGllc1xuXG4gICAgICAgIEBwYXJhbSBbb2JqZWN0XVxuICAgICAgICBAcmV0dXJuIFtBY3Rpb25dXG4gICAgKi9cbiAgICBzZXQocHJvcHMpIHtcbiAgICAgICAgY29uc3QgeyB2YWx1ZXMsIC4uLnByb3BzVG9TZXQgfSA9IHByb3BzO1xuXG4gICAgICAgIHN1cGVyLnNldChwcm9wc1RvU2V0KTtcblxuICAgICAgICB0aGlzLnZhbHVlcyA9IHRoaXMudmFsdWVzIHx8IHt9O1xuXG4gICAgICAgIC8vIE1lcmdlIGB2YWx1ZWAgcHJvcGVydGllcyB3aXRoIGV4aXN0aW5nXG4gICAgICAgIGlmICh2YWx1ZXMpIHtcbiAgICAgICAgICAgIGNvbnN0IGN1cnJlbnRWYWx1ZXMgPSB0aGlzLnZhbHVlcztcbiAgICAgICAgICAgIGNvbnN0IGRlZmF1bHRWYWx1ZSA9IHRoaXMuZ2V0RGVmYXVsdFZhbHVlKCk7XG4gICAgICAgICAgICBjb25zdCBkZWZhdWx0VmFsdWVQcm9wID0gdGhpcy5nZXREZWZhdWx0VmFsdWVQcm9wKCk7XG5cbiAgICAgICAgICAgIC8vIEluaGVyaXQgdmFsdWVzIGZyb20gcHJvcHNcbiAgICAgICAgICAgIGVhY2goZGVmYXVsdFZhbHVlLCAodmFsdWUsIGtleSkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChwcm9wc1RvU2V0W2tleV0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0VmFsdWVba2V5XSA9IHByb3BzVG9TZXRba2V5XTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgLy8gT3ZlcndyaXRlIHBlci12YWx1ZSBwcm9wc1xuICAgICAgICAgICAgZWFjaCh2YWx1ZXMsICh2YWx1ZSwga2V5KSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgZXhpc3RpbmdWYWx1ZSA9IGN1cnJlbnRWYWx1ZXNba2V5XTtcbiAgICAgICAgICAgICAgICBsZXQgbmV3VmFsdWUgPSB7IC4uLmRlZmF1bHRWYWx1ZSB9O1xuXG4gICAgICAgICAgICAgICAgaWYgKGlzT2JqKHZhbHVlKSkge1xuICAgICAgICAgICAgICAgICAgICBuZXdWYWx1ZSA9IHsgLi4ubmV3VmFsdWUsIC4uLnZhbHVlIH07XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgbmV3VmFsdWVbZGVmYXVsdFZhbHVlUHJvcF0gPSB2YWx1ZTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAvLyB1cGRhdGUgdmFsdWVzXG5cbiAgICAgICAgICAgICAgICBjdXJyZW50VmFsdWVzW2tleV0gPSBleGlzdGluZ1ZhbHVlID8geyAuLi5leGlzdGluZ1ZhbHVlLCAuLi5uZXdWYWx1ZSB9IDogbmV3VmFsdWU7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIHBhdXNlKCkge1xuICAgICAgICBzdXBlci5zdG9wKCk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIHJlc3VtZSgpIHtcbiAgICAgICAgc3VwZXIuc3RhcnQoKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgLypcbiAgICAgICAgIyBHZXQgZGVmYXVsdCBBY3Rpb24gdmFsdWUgcHJvcGVydGllc1xuXG4gICAgICAgIEByZXR1cm4gW29iamVjdF1cbiAgICAqL1xuICAgIGdldERlZmF1bHRWYWx1ZSgpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGN1cnJlbnQ6IDAsXG4gICAgICAgICAgICB2ZWxvY2l0eTogMFxuICAgICAgICB9O1xuICAgIH1cblxuICAgIC8qXG4gICAgICAgICMgR2V0IGRlZmF1bHQgQWN0aW9uIHZhbHVlIHByb3BlcnR5IG5hbWVcbiAgICAgICAgIyMgU2V0IHRoaXMgYHZhbHVlYCBwcm9wZXJ0eSB3aGVuIHNldCBhcyB2YWx1ZSBpbnN0ZWFkIG9mIG9iamVjdFxuXG4gICAgICAgIEByZXR1cm4gW3N0cmluZ11cbiAgICAqL1xuICAgIGdldERlZmF1bHRWYWx1ZVByb3AoKSB7XG4gICAgICAgIHJldHVybiBERUZBVUxUX1BST1A7XG4gICAgfVxufTtcbiJdfQ==

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	exports.__esModule = true;
	
	var _Action2 = __webpack_require__(3);
	
	var _Action3 = _interopRequireDefault(_Action2);
	
	var _presetEasing = __webpack_require__(35);
	
	var _presetEasing2 = _interopRequireDefault(_presetEasing);
	
	var _utils = __webpack_require__(15);
	
	var _calc = __webpack_require__(14);
	
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
	function ease(progress, from, to, ease) {
	    var progressLimited = (0, _calc.restrict)(progress, 0, 1);
	    var easingFunction = (0, _utils.isString)(ease) ? _presetEasing2.default[ease] : ease;
	    var easedProgress = easingFunction(progressLimited);
	
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
	    };
	
	    Tween.prototype.onUpdate = function onUpdate(tween, frameStamp, elapsed) {
	        var _this2 = this;
	
	        var progressTarget = this.playDirection === 1 ? 1 : 0;
	
	        this.ended = true;
	        this.elapsed += elapsed * this.dilate * this.playDirection;
	
	        (0, _utils.each)(this.values, function (value, key) {
	            var progress = (0, _calc.restrict)((0, _calc.getProgressFromValue)(_this2.elapsed - value.delay, 0, value.duration), 0, 1);
	
	            // Mark Tween as NOT ended if still in progress
	            if (progress !== progressTarget) {
	                _this2.ended = false;
	            }
	
	            // Step progress if we're stepping
	            if (value.steps) {
	                progress = (0, _calc.stepProgress)(progress, value.steps);
	            }
	
	            // Ease progress
	            value.current = ease(progress, value.from, value.to, value.ease);
	        });
	    };
	
	    Tween.prototype.onFrameEnd = function onFrameEnd() {
	        var _this3 = this;
	
	        if (this.ended) {
	            var stepTaken = false;
	
	            (0, _utils.each)(NEXT_STEPS, function (method, step) {
	                var maxSteps = _this3[step];
	
	                if (maxSteps === true || (0, _utils.isNum)(maxSteps) && maxSteps > _this3[step + COUNT]) {
	                    _this3[step + COUNT]++;
	                    stepTaken = true;
	                    _this3[method]();
	                }
	            });
	
	            if (!stepTaken) {
	                this.stop();
	            }
	        }
	    };
	
	    Tween.prototype.flipValues = function flipValues() {
	        this.elapsed = this.duration - this.elapsed;
	
	        (0, _utils.each)(this.values, function (value, key) {
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
	        this.once();
	        this.elapsed = this.duration * progress;
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
	            ease: 'easeOut',
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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlR3ZWVuLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBZUEsSUFBTSxLQUFLLEdBQUcsT0FBTyxDQUFDO0FBQ3RCLElBQU0sVUFBVSxHQUFHO0FBQ2YsUUFBSSxFQUFFLFNBQVM7QUFDZixRQUFJLEVBQUUsU0FBUztBQUNmLFFBQUksRUFBRSxZQUFZO0NBQ3JCOzs7Ozs7Ozs7Ozs7QUFBQyxBQVlGLFNBQVMsSUFBSSxDQUFDLFFBQVEsRUFBRSxJQUFJLEVBQUUsRUFBRSxFQUFFLElBQUksRUFBRTtBQUNwQyxRQUFNLGVBQWUsR0FBRyxVQXhCeEIsUUFBUSxFQXdCeUIsUUFBUSxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztBQUNqRCxRQUFNLGNBQWMsR0FBRyxXQTVCdkIsUUFBUSxFQTRCd0IsSUFBSSxDQUFDLEdBQUcsdUJBQWEsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDO0FBQ2xFLFFBQU0sYUFBYSxHQUFHLGNBQWMsQ0FBQyxlQUFlLENBQUMsQ0FBQzs7QUFFdEQsV0FBTyxVQTFCUCxvQkFBb0IsRUEwQlEsYUFBYSxFQUFFLElBQUksRUFBRSxFQUFFLENBQUMsQ0FBQztDQUN4RCxDQUFDOztJQUVtQixLQUFLO2NBQUwsS0FBSzs7YUFBTCxLQUFLOzhCQUFMLEtBQUs7Ozs7O0FBQUwsU0FBSyxXQUN0QixLQUFLLG9CQUFHO0FBQ0osMEJBQU0sS0FBSyxLQUFBLE1BQUUsQ0FBQztBQUNkLFlBQUksQ0FBQyxPQUFPLEdBQUcsQ0FBQyxDQUFDO0FBQ2pCLFlBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsU0FBUyxHQUFHLENBQUMsQ0FBQztLQUN4RDs7QUFMZ0IsU0FBSyxXQU90QixRQUFRLHFCQUFDLEtBQUssRUFBRSxVQUFVLEVBQUUsT0FBTyxFQUFFOzs7QUFDakMsWUFBTSxjQUFjLEdBQUcsQUFBQyxJQUFJLENBQUMsYUFBYSxLQUFLLENBQUMsR0FBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDOztBQUUxRCxZQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQztBQUNsQixZQUFJLENBQUMsT0FBTyxJQUFJLEFBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxNQUFNLEdBQUksSUFBSSxDQUFDLGFBQWEsQ0FBQzs7QUFFN0QsbUJBakRKLElBQUksRUFpREssSUFBSSxDQUFDLE1BQU0sRUFBRSxVQUFDLEtBQUssRUFBRSxHQUFHLEVBQUs7QUFDOUIsZ0JBQUksUUFBUSxHQUFHLFVBN0N2QixRQUFRLEVBNkN3QixVQTVDaEMsb0JBQW9CLEVBNENpQyxPQUFLLE9BQU8sR0FBRyxLQUFLLENBQUMsS0FBSyxFQUFFLENBQUMsRUFBRSxLQUFLLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQzs7O0FBQUMsQUFHbkcsZ0JBQUksUUFBUSxLQUFLLGNBQWMsRUFBRTtBQUM3Qix1QkFBSyxLQUFLLEdBQUcsS0FBSyxDQUFDO2FBQ3RCOzs7QUFBQSxBQUdELGdCQUFJLEtBQUssQ0FBQyxLQUFLLEVBQUU7QUFDYix3QkFBUSxHQUFHLFVBbkR2QixZQUFZLEVBbUR3QixRQUFRLEVBQUUsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO2FBQ2xEOzs7QUFBQSxBQUdELGlCQUFLLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxRQUFRLEVBQUUsS0FBSyxDQUFDLElBQUksRUFBRSxLQUFLLENBQUMsRUFBRSxFQUFFLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUNwRSxDQUFDLENBQUM7S0FDTjs7QUE3QmdCLFNBQUssV0ErQnRCLFVBQVUseUJBQUc7OztBQUNULFlBQUksSUFBSSxDQUFDLEtBQUssRUFBRTtBQUNaLGdCQUFJLFNBQVMsR0FBRyxLQUFLLENBQUM7O0FBRXRCLHVCQXZFUixJQUFJLEVBdUVTLFVBQVUsRUFBRSxVQUFDLE1BQU0sRUFBRSxJQUFJLEVBQUs7QUFDL0Isb0JBQU0sUUFBUSxHQUFHLE9BQUssSUFBSSxDQUFDLENBQUM7O0FBRTVCLG9CQUFJLFFBQVEsS0FBSyxJQUFJLElBQUssV0F6RXRDLEtBQUssRUF5RXVDLFFBQVEsQ0FBQyxJQUFJLFFBQVEsR0FBRyxPQUFLLElBQUksR0FBRyxLQUFLLENBQUMsQUFBQyxFQUFFO0FBQ3pFLDJCQUFLLElBQUksR0FBRyxLQUFLLENBQUMsRUFBRSxDQUFDO0FBQ3JCLDZCQUFTLEdBQUcsSUFBSSxDQUFDO0FBQ2pCLDJCQUFLLE1BQU0sQ0FBQyxFQUFFLENBQUM7aUJBQ2xCO2FBQ0osQ0FBQyxDQUFDOztBQUVILGdCQUFJLENBQUMsU0FBUyxFQUFFO0FBQ1osb0JBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQzthQUNmO1NBQ0o7S0FDSjs7QUFqRGdCLFNBQUssV0FtRHRCLFVBQVUseUJBQUc7QUFDVCxZQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQzs7QUFFNUMsbUJBMUZKLElBQUksRUEwRkssSUFBSSxDQUFDLE1BQU0sRUFBRSxVQUFDLEtBQUssRUFBRSxHQUFHLEVBQUs7dUJBQ0wsQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQyxFQUFFLENBQUM7QUFBOUMsaUJBQUssQ0FBQyxFQUFFO0FBQUUsaUJBQUssQ0FBQyxJQUFJO1NBQ3hCLENBQUMsQ0FBQztLQUNOOztBQXpEZ0IsU0FBSyxXQTJEdEIsT0FBTyxzQkFBRztBQUNOLFlBQUksQ0FBQyxhQUFhLElBQUksQ0FBQyxDQUFDLENBQUM7S0FDNUI7O0FBN0RnQixTQUFLLFdBK0R0QixPQUFPLHNCQUFHO0FBQ04sWUFBSSxDQUFDLE9BQU8sR0FBRyxBQUFDLElBQUksQ0FBQyxhQUFhLEtBQUssQ0FBQyxHQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDO0FBQzlELFlBQUksQ0FBQyxPQUFPLEdBQUcsV0F0R25CLFdBQVcsR0FzR3FCLENBQUM7S0FDaEM7O0FBbEVnQixTQUFLLFdBb0V0QixJQUFJLGlCQUFDLFFBQVEsRUFBRTtBQUNYLFlBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztBQUNaLFlBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7S0FDM0M7O0FBdkVnQixTQUFLLFdBeUV0QixlQUFlLDhCQUFHO0FBQ2QsNEJBQ08sa0JBQU0sZUFBZSxLQUFBLE1BQUU7QUFDMUIsaUJBQUssRUFBRSxDQUFDO0FBQ1Isa0JBQU0sRUFBRSxDQUFDO0FBQ1Qsb0JBQVEsRUFBRSxHQUFHO0FBQ2IsZ0JBQUksRUFBRSxLQUFLO0FBQ1gsZ0JBQUksRUFBRSxLQUFLO0FBQ1gsZ0JBQUksRUFBRSxLQUFLO0FBQ1gseUJBQWEsRUFBRSxDQUFDO0FBQ2hCLGlCQUFLLEVBQUUsS0FBSztBQUNaLG1CQUFPLEVBQUUsQ0FBQztXQUNaO0tBQ0w7O0FBdEZnQixTQUFLLFdBd0Z0QixlQUFlLDhCQUFHO0FBQ2QsNEJBQ08sa0JBQU0sZUFBZSxLQUFBLE1BQUU7QUFDMUIsaUJBQUssRUFBRSxDQUFDO0FBQ1Isb0JBQVEsRUFBRSxHQUFHO0FBQ2IsZ0JBQUksRUFBRSxTQUFTO0FBQ2YsbUJBQU8sRUFBRSxDQUFDO0FBQ1YsbUJBQU8sRUFBRSxDQUFDO0FBQ1YsaUJBQUssRUFBRSxDQUFDO0FBQ1IsZ0JBQUksRUFBRSxDQUFDO0FBQ1AsY0FBRSxFQUFFLENBQUM7QUFDTCxpQkFBSyxFQUFFLEtBQUs7V0FDZDtLQUNMOztBQXJHZ0IsU0FBSyxXQXVHdEIsbUJBQW1CLGtDQUFHO0FBQ2xCLGVBQU8sSUFBSSxDQUFDO0tBQ2Y7O1dBekdnQixLQUFLOzs7a0JBQUwsS0FBSyIsImZpbGUiOiJUd2Vlbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBBY3Rpb24gZnJvbSAnLi9BY3Rpb24nO1xuaW1wb3J0IHByZXNldEVhc2luZyBmcm9tICcuL3R3ZWVuL3ByZXNldC1lYXNpbmcnO1xuaW1wb3J0IHtcbiAgICBjdXJyZW50VGltZSxcbiAgICBlYWNoLFxuICAgIGlzTnVtLFxuICAgIGlzU3RyaW5nXG59IGZyb20gJy4uL2luYy91dGlscyc7XG5pbXBvcnQge1xuICAgIHJlc3RyaWN0LFxuICAgIGdldFByb2dyZXNzRnJvbVZhbHVlLFxuICAgIGdldFZhbHVlRnJvbVByb2dyZXNzLFxuICAgIHN0ZXBQcm9ncmVzc1xufSBmcm9tICcuLi9pbmMvY2FsYyc7XG5cbmNvbnN0IENPVU5UID0gJ0NvdW50JztcbmNvbnN0IE5FWFRfU1RFUFMgPSB7XG4gICAgbG9vcDogJ3Jlc3RhcnQnLFxuICAgIHlveW86ICdyZXZlcnNlJyxcbiAgICBmbGlwOiAnZmxpcFZhbHVlcydcbn07XG5cbi8qXG4gICAgRWFzZSB2YWx1ZSB3aXRoaW4gcmFuZ2VkIHBhcmFtZXRlcnNcbiAgICBcbiAgICBAcGFyYW0gW251bWJlcl06IFByb2dyZXNzIGJldHdlZW4gMCBhbmQgMVxuICAgIEBwYXJhbSBbbnVtYmVyXTogVmFsdWUgb2YgMCBwcm9ncmVzc1xuICAgIEBwYXJhbSBbbnVtYmVyXTogVmFsdWUgb2YgMSBwcm9ncmVzc1xuICAgIEBwYXJhbSBbc3RyaW5nIHx8IGZ1bmN0aW9uXTogTmFtZSBvZiBwcmVzZXQgZWFzaW5nXG4gICAgICAgIHRvIHVzZSBvciBnZW5lcmF0ZWQgZWFzaW5nIGZ1bmN0aW9uXG4gICAgQHJldHVybiBbbnVtYmVyXTogVmFsdWUgb2YgZWFzZWQgcHJvZ3Jlc3MgaW4gcmFuZ2VcbiovIFxuZnVuY3Rpb24gZWFzZShwcm9ncmVzcywgZnJvbSwgdG8sIGVhc2UpIHtcbiAgICBjb25zdCBwcm9ncmVzc0xpbWl0ZWQgPSByZXN0cmljdChwcm9ncmVzcywgMCwgMSk7XG4gICAgY29uc3QgZWFzaW5nRnVuY3Rpb24gPSBpc1N0cmluZyhlYXNlKSA/IHByZXNldEVhc2luZ1tlYXNlXSA6IGVhc2U7XG4gICAgY29uc3QgZWFzZWRQcm9ncmVzcyA9IGVhc2luZ0Z1bmN0aW9uKHByb2dyZXNzTGltaXRlZCk7XG5cbiAgICByZXR1cm4gZ2V0VmFsdWVGcm9tUHJvZ3Jlc3MoZWFzZWRQcm9ncmVzcywgZnJvbSwgdG8pO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVHdlZW4gZXh0ZW5kcyBBY3Rpb24ge1xuICAgIHN0YXJ0KCkge1xuICAgICAgICBzdXBlci5zdGFydCgpO1xuICAgICAgICB0aGlzLmVsYXBzZWQgPSAwO1xuICAgICAgICB0aGlzLmZsaXBDb3VudCA9IHRoaXMueW95b0NvdW50ID0gdGhpcy5sb29wQ291bnQgPSAwO1xuICAgIH1cblxuICAgIG9uVXBkYXRlKHR3ZWVuLCBmcmFtZVN0YW1wLCBlbGFwc2VkKSB7XG4gICAgICAgIGNvbnN0IHByb2dyZXNzVGFyZ2V0ID0gKHRoaXMucGxheURpcmVjdGlvbiA9PT0gMSkgPyAxIDogMDtcblxuICAgICAgICB0aGlzLmVuZGVkID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5lbGFwc2VkICs9IChlbGFwc2VkICogdGhpcy5kaWxhdGUpICogdGhpcy5wbGF5RGlyZWN0aW9uO1xuXG4gICAgICAgIGVhY2godGhpcy52YWx1ZXMsICh2YWx1ZSwga2V5KSA9PiB7XG4gICAgICAgICAgICBsZXQgcHJvZ3Jlc3MgPSByZXN0cmljdChnZXRQcm9ncmVzc0Zyb21WYWx1ZSh0aGlzLmVsYXBzZWQgLSB2YWx1ZS5kZWxheSwgMCwgdmFsdWUuZHVyYXRpb24pLCAwLCAxKTtcblxuICAgICAgICAgICAgLy8gTWFyayBUd2VlbiBhcyBOT1QgZW5kZWQgaWYgc3RpbGwgaW4gcHJvZ3Jlc3NcbiAgICAgICAgICAgIGlmIChwcm9ncmVzcyAhPT0gcHJvZ3Jlc3NUYXJnZXQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmVuZGVkID0gZmFsc2U7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIFN0ZXAgcHJvZ3Jlc3MgaWYgd2UncmUgc3RlcHBpbmdcbiAgICAgICAgICAgIGlmICh2YWx1ZS5zdGVwcykge1xuICAgICAgICAgICAgICAgIHByb2dyZXNzID0gc3RlcFByb2dyZXNzKHByb2dyZXNzLCB2YWx1ZS5zdGVwcyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIEVhc2UgcHJvZ3Jlc3NcbiAgICAgICAgICAgIHZhbHVlLmN1cnJlbnQgPSBlYXNlKHByb2dyZXNzLCB2YWx1ZS5mcm9tLCB2YWx1ZS50bywgdmFsdWUuZWFzZSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIG9uRnJhbWVFbmQoKSB7XG4gICAgICAgIGlmICh0aGlzLmVuZGVkKSB7XG4gICAgICAgICAgICBsZXQgc3RlcFRha2VuID0gZmFsc2U7XG5cbiAgICAgICAgICAgIGVhY2goTkVYVF9TVEVQUywgKG1ldGhvZCwgc3RlcCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IG1heFN0ZXBzID0gdGhpc1tzdGVwXTtcblxuICAgICAgICAgICAgICAgIGlmIChtYXhTdGVwcyA9PT0gdHJ1ZSB8fCAoaXNOdW0obWF4U3RlcHMpICYmIG1heFN0ZXBzID4gdGhpc1tzdGVwICsgQ09VTlRdKSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzW3N0ZXAgKyBDT1VOVF0rKztcbiAgICAgICAgICAgICAgICAgICAgc3RlcFRha2VuID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgdGhpc1ttZXRob2RdKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGlmICghc3RlcFRha2VuKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zdG9wKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmbGlwVmFsdWVzKCkge1xuICAgICAgICB0aGlzLmVsYXBzZWQgPSB0aGlzLmR1cmF0aW9uIC0gdGhpcy5lbGFwc2VkO1xuXG4gICAgICAgIGVhY2godGhpcy52YWx1ZXMsICh2YWx1ZSwga2V5KSA9PiB7XG4gICAgICAgICAgICBbdmFsdWUudG8sIHZhbHVlLmZyb21dID0gW3ZhbHVlLmZyb20sIHZhbHVlLnRvXTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV2ZXJzZSgpIHtcbiAgICAgICAgdGhpcy5wbGF5RGlyZWN0aW9uICo9IC0xO1xuICAgIH1cblxuICAgIHJlc3RhcnQoKSB7XG4gICAgICAgIHRoaXMuZWxhcHNlZCA9ICh0aGlzLnBsYXlEaXJlY3Rpb24gPT09IDEpID8gMCA6IHRoaXMuZHVyYXRpb247XG4gICAgICAgIHRoaXMuc3RhcnRlZCA9IGN1cnJlbnRUaW1lKCk7XG4gICAgfVxuXG4gICAgc2Vlayhwcm9ncmVzcykge1xuICAgICAgICB0aGlzLm9uY2UoKTtcbiAgICAgICAgdGhpcy5lbGFwc2VkID0gdGhpcy5kdXJhdGlvbiAqIHByb2dyZXNzO1xuICAgIH1cbiAgICBcbiAgICBnZXREZWZhdWx0UHJvcHMoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAuLi5zdXBlci5nZXREZWZhdWx0UHJvcHMoKSxcbiAgICAgICAgICAgIGRlbGF5OiAwLFxuICAgICAgICAgICAgZGlsYXRlOiAxLFxuICAgICAgICAgICAgZHVyYXRpb246IDMwMCxcbiAgICAgICAgICAgIGxvb3A6IGZhbHNlLFxuICAgICAgICAgICAgeW95bzogZmFsc2UsXG4gICAgICAgICAgICBmbGlwOiBmYWxzZSxcbiAgICAgICAgICAgIHBsYXlEaXJlY3Rpb246IDEsXG4gICAgICAgICAgICBlbmRlZDogZmFsc2UsXG4gICAgICAgICAgICBlbGFwc2VkOiAwXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgZ2V0RGVmYXVsdFZhbHVlKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgLi4uc3VwZXIuZ2V0RGVmYXVsdFZhbHVlKCksXG4gICAgICAgICAgICBkZWxheTogMCxcbiAgICAgICAgICAgIGR1cmF0aW9uOiAzMDAsXG4gICAgICAgICAgICBlYXNlOiAnZWFzZU91dCcsXG4gICAgICAgICAgICBlbGFwc2VkOiAwLFxuICAgICAgICAgICAgc3RhZ2dlcjogMCxcbiAgICAgICAgICAgIHN0ZXBzOiAwLFxuICAgICAgICAgICAgZnJvbTogMCxcbiAgICAgICAgICAgIHRvOiAwLFxuICAgICAgICAgICAgcm91bmQ6IGZhbHNlXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgZ2V0RGVmYXVsdFZhbHVlUHJvcCgpIHtcbiAgICAgICAgcmV0dXJuICd0byc7XG4gICAgfVxufVxuIl19

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	exports.__esModule = true;
	
	var _Action2 = __webpack_require__(3);
	
	var _Action3 = _interopRequireDefault(_Action2);
	
	var _calc = __webpack_require__(14);
	
	var _utils = __webpack_require__(15);
	
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
	        return _this;
	    }
	
	    Physics.prototype.onUpdate = function onUpdate(physics, frameStamp, elapsed) {
	        var _this2 = this;
	
	        this.hasChanged = false;
	
	        (0, _utils.each)(this.values, function (value, key) {
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
	})(_Action3.default);
	
	exports.default = Physics;
	//# sourceMappingURL=data:application/json;base64,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ZnJvbSAnLi9BY3Rpb24nO1xuaW1wb3J0IHsgc3BlZWRQZXJGcmFtZSwgc3BlZWRQZXJTZWNvbmQgfSBmcm9tICcuLi9pbmMvY2FsYyc7XG5pbXBvcnQgeyBlYWNoLCBpc051bSB9IGZyb20gJy4uL2luYy91dGlscyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBoeXNpY3MgZXh0ZW5kcyBBY3Rpb24ge1xuXG4gICAgY29uc3RydWN0b3IoLi4uYXJncykge1xuICAgICAgICBzdXBlciguLi5hcmdzKTtcbiAgICAgICAgdGhpcy5pbmFjdGl2ZUZyYW1lcyA9IDA7XG4gICAgfVxuXG4gICAgb25VcGRhdGUocGh5c2ljcywgZnJhbWVTdGFtcCwgZWxhcHNlZCkge1xuICAgICAgICB0aGlzLmhhc0NoYW5nZWQgPSBmYWxzZTtcblxuICAgICAgICBlYWNoKHRoaXMudmFsdWVzLCAodmFsdWUsIGtleSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgcHJldmlvdXNWYWx1ZSA9IHZhbHVlLmN1cnJlbnQ7XG5cbiAgICAgICAgICAgIC8vIEFwcGx5IGFjY2VsZXJhdGlvblxuICAgICAgICAgICAgdmFsdWUudmVsb2NpdHkgKz0gc3BlZWRQZXJGcmFtZSh2YWx1ZS5mb3JjZSwgZWxhcHNlZCk7XG5cbiAgICAgICAgICAgIC8vIEFwcGx5IGZyaWN0aW9uXG4gICAgICAgICAgICB2YWx1ZS52ZWxvY2l0eSAqPSAoMSAtIHZhbHVlLmZyaWN0aW9uKSAqKiAoZWxhcHNlZCAvIDEwKTtcblxuICAgICAgICAgICAgLy8gQXBwbHkgc3ByaW5nXG4gICAgICAgICAgICBpZiAodmFsdWUuc3ByaW5nICYmIGlzTnVtKHZhbHVlLnRvKSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGRpc3RhbmNlVG9UYXJnZXQgPSB2YWx1ZS50byAtIHZhbHVlLmN1cnJlbnQ7XG4gICAgICAgICAgICAgICAgdmFsdWUudmVsb2NpdHkgKz0gZGlzdGFuY2VUb1RhcmdldCAqIHNwZWVkUGVyRnJhbWUodmFsdWUuc3ByaW5nLCBlbGFwc2VkKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gQXBwbHkgbGF0ZXN0IHZlbG9jaXR5XG4gICAgICAgICAgICB2YWx1ZS5jdXJyZW50ICs9IHNwZWVkUGVyRnJhbWUodmFsdWUudmVsb2NpdHksIGVsYXBzZWQpO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICAvLyBDaGVjayBpZiB2YWx1ZSBoYXMgY2hhbmdlZFxuICAgICAgICAgICAgaWYgKHZhbHVlLmN1cnJlbnQgIT09IHByZXZpb3VzVmFsdWUgfHwgTWF0aC5hYnModmFsdWUudmVsb2NpdHkpID49IHZhbHVlLnN0b3BTcGVlZCkge1xuICAgICAgICAgICAgICAgIHRoaXMuaGFzQ2hhbmdlZCA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIG9uRnJhbWVFbmQoKSB7XG4gICAgICAgIGlmICh0aGlzLmF1dG9FbmQpIHtcbiAgICAgICAgICAgIHRoaXMuaW5hY3RpdmVGcmFtZXMgPSB0aGlzLmhhc0NoYW5nZWQgPyAxIDogdGhpcy5pbmFjdGl2ZUZyYW1lcyArIDE7XG5cbiAgICAgICAgICAgIGlmICh0aGlzLmluYWN0aXZlRnJhbWVzID49IHRoaXMubWF4SW5hY3RpdmVGcmFtZXMpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnN0b3AoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qXG4gICAgICAgICMgR2V0IGRlZmF1bHQgU2ltdWxhdGUgcHJvcHNcblxuICAgICAgICBAcmV0dXJuIFtvYmplY3RdXG4gICAgKi9cbiAgICBnZXREZWZhdWx0UHJvcHMoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAuLi5zdXBlci5nZXREZWZhdWx0UHJvcHMoKSxcbiAgICAgICAgICAgIGF1dG9FbmQ6IHRydWUsXG4gICAgICAgICAgICBtYXhJbmFjdGl2ZUZyYW1lczogM1xuICAgICAgICB9O1xuICAgIH1cblxuICAgIC8qXG4gICAgICAgICMgR2V0IGRlZmF1bHQgU2ltdWxhdGUgdmFsdWUgcHJvcHNcblxuICAgICAgICBAcmV0dXJuIFtvYmplY3RdXG4gICAgKi9cbiAgICBnZXREZWZhdWx0VmFsdWUoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAuLi5zdXBlci5nZXREZWZhdWx0VmFsdWUoKSxcbiAgICAgICAgICAgIGZvcmNlOiAwLCAvLyBbbnVtYmVyXTogQWNjZWxlcmF0aW9uIHRvIGFwcGx5IHRvIHZhbHVlLCBpbiB1bml0cyBwZXIgc2Vjb25kXG4gICAgICAgICAgICBib3VuY2U6IDAsIC8vIFtudW1iZXJdOiBGYWN0b3IgdG8gbXVsdGlwbHkgdmVsb2NpdHkgYnkgb24gYm91bmNlXG4gICAgICAgICAgICBzcHJpbmc6IDAsIC8vIFtudW1iZXJdOiBTcHJpbmcgc3RyZW5ndGggZHVyaW5nICdzdHJpbmcnXG4gICAgICAgICAgICBzdG9wU3BlZWQ6IDAuMDAwMSwgLy8gW251bWJlcl06IFN0b3Agc2ltdWxhdGlvbiB1bmRlciB0aGlzIHNwZWVkXG4gICAgICAgICAgICBmcmljdGlvbjogMCAvLyBbbnVtYmVyXTogRnJpY3Rpb24gdG8gYXBwbHkgcGVyIGZyYW1lLCAwLTFcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICAvKlxuICAgICAgICAjIEdldCBkZWZhdWx0IFNpbXVsYXRlIHZhbHVlIHByb3BlcnR5IG5hbWVcbiAgICAgICAgIyMgU2V0IHZhbHVlcyB0byB0aGlzIHdoZW4gYSBgdmFsdWVgIGlzIG5vdCBwcm92aWRlZCBhcyBhbiBvYmplY3RcblxuICAgICAgICBAcmV0dXJuIFtzdHJpbmddXG4gICAgKi9cbiAgICBnZXREZWZhdWx0VmFsdWVQcm9wKCkge1xuICAgICAgICByZXR1cm4gJ3ZlbG9jaXR5JztcbiAgICB9XG59XG4iXX0=

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _Action2 = __webpack_require__(3);
	
	var _Action3 = _interopRequireDefault(_Action2);
	
	var _Mouse = __webpack_require__(8);
	
	var _Mouse2 = _interopRequireDefault(_Mouse);
	
	var _Touch = __webpack_require__(9);
	
	var _Touch2 = _interopRequireDefault(_Touch);
	
	var _calc = __webpack_require__(14);
	
	var _utils = __webpack_require__(15);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var createPointer = function (e) {
	    return e.touches ? new _Touch2.default(e) : new _Mouse2.default(e);
	};
	var getActualEvent = function (e) {
	    return e.originalEvent || e;
	};
	
	var Track = (function (_Action) {
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
	
	    Track.prototype.onUpdate = function onUpdate(track, frameDuration, elapsed) {
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
	})(_Action3.default);
	
	exports.default = Track;
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlRyYWNrLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNQSxJQUFNLGFBQWEsR0FBRyxVQUFDLENBQUM7V0FBSyxDQUFDLENBQUMsT0FBTyxHQUFHLG9CQUFVLENBQUMsQ0FBQyxHQUFHLG9CQUFVLENBQUMsQ0FBQztDQUFBLENBQUM7QUFDckUsSUFBTSxjQUFjLEdBQUcsVUFBQyxDQUFDO1dBQUssQ0FBQyxDQUFDLGFBQWEsSUFBSSxDQUFDO0NBQUEsQ0FBQzs7SUFFOUIsS0FBSztjQUFMLEtBQUs7O0FBQ3RCLGFBRGlCLEtBQUssQ0FDVixLQUFLLEVBQUUsS0FBSyxFQUFFOzhCQURULEtBQUs7O3FEQUVsQixtQkFBTSxLQUFLLENBQUM7O0FBQ1osY0FBSyxLQUFLLEdBQUcsS0FBSyxDQUFDLEtBQUssR0FBRyxLQUFLLEdBQUcsYUFBYSxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDOztLQUMzRTs7QUFKZ0IsU0FBSyxXQU10QixLQUFLLG9CQUFHO0FBQ0osMEJBQU0sS0FBSyxLQUFBLE1BQUUsQ0FBQztBQUNkLFlBQUksQ0FBQyxXQUFXLEdBQUcsRUFBRSxDQUFDO0tBQ3pCOztBQVRnQixTQUFLLFdBV3RCLFFBQVEscUJBQUMsS0FBSyxFQUFFLGFBQWEsRUFBRSxPQUFPLEVBQUU7OztBQUNwQyxZQUFJLENBQUMsV0FBVyxHQUFHLFVBbEJsQixNQUFNLEVBa0JtQixJQUFJLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7O0FBRTlELG1CQW5CQyxJQUFJLEVBbUJBLElBQUksQ0FBQyxNQUFNLEVBQUUsVUFBQyxLQUFLLEVBQUUsR0FBRyxFQUFLO0FBQzlCLGdCQUFJLE9BQUssV0FBVyxDQUFDLGNBQWMsQ0FBQyxHQUFHLENBQUMsRUFBRTtBQUN0QyxvQkFBSSxLQUFLLENBQUMsTUFBTSxFQUFFO0FBQ2QseUJBQUssQ0FBQyxPQUFPLEdBQUcsT0FBSyxLQUFLLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO2lCQUN6QyxNQUFNO0FBQ0gseUJBQUssQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDLE1BQU0sR0FBRyxPQUFLLFdBQVcsQ0FBQyxHQUFHLENBQUMsQ0FBQztpQkFDeEQ7YUFDSjtTQUNKLENBQUMsQ0FBQztLQUNOOztBQXZCZ0IsU0FBSyxXQXlCdEIsZUFBZSw4QkFBRztBQUNkLGVBQU87QUFDSCxlQUFHLEVBQUUsQ0FBQztBQUNOLHFCQUFTLEVBQUUsQ0FBQztBQUNaLGtCQUFNLEVBQUUsS0FBSztBQUNiLGtCQUFNLEVBQUUsQ0FBQztTQUNaLENBQUM7S0FDTDs7V0FoQ2dCLEtBQUs7OztrQkFBTCxLQUFLIiwiZmlsZSI6IlRyYWNrLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEFjdGlvbiBmcm9tICcuL0FjdGlvbic7XG5pbXBvcnQgTW91c2UgZnJvbSAnLi4vaW5wdXQvTW91c2UnO1xuaW1wb3J0IFRvdWNoIGZyb20gJy4uL2lucHV0L1RvdWNoJztcbmltcG9ydCB7IG9mZnNldCB9IGZyb20gJy4uL2luYy9jYWxjJztcbmltcG9ydCB7IGVhY2ggfSBmcm9tICcuLi9pbmMvdXRpbHMnO1xuXG5jb25zdCBjcmVhdGVQb2ludGVyID0gKGUpID0+IGUudG91Y2hlcyA/IG5ldyBUb3VjaChlKSA6IG5ldyBNb3VzZShlKTtcbmNvbnN0IGdldEFjdHVhbEV2ZW50ID0gKGUpID0+IGUub3JpZ2luYWxFdmVudCB8fCBlO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUcmFjayBleHRlbmRzIEFjdGlvbiB7XG4gICAgY29uc3RydWN0b3IocHJvcHMsIGlucHV0KSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICAgICAgdGhpcy5pbnB1dCA9IGlucHV0LnN0YXRlID8gaW5wdXQgOiBjcmVhdGVQb2ludGVyKGdldEFjdHVhbEV2ZW50KGlucHV0KSk7XG4gICAgfVxuXG4gICAgc3RhcnQoKSB7XG4gICAgICAgIHN1cGVyLnN0YXJ0KCk7XG4gICAgICAgIHRoaXMuaW5wdXRPcmlnaW4gPSB7fTtcbiAgICB9XG5cbiAgICBvblVwZGF0ZSh0cmFjaywgZnJhbWVEdXJhdGlvbiwgZWxhcHNlZCkge1xuICAgICAgICB0aGlzLmlucHV0T2Zmc2V0ID0gb2Zmc2V0KHRoaXMuaW5wdXRPcmlnaW4sIHRoaXMuaW5wdXQuc3RhdGUpO1xuXG4gICAgICAgIGVhY2godGhpcy52YWx1ZXMsICh2YWx1ZSwga2V5KSA9PiB7XG4gICAgICAgICAgICBpZiAodGhpcy5pbnB1dE9mZnNldC5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgICAgICAgaWYgKHZhbHVlLmRpcmVjdCkge1xuICAgICAgICAgICAgICAgICAgICB2YWx1ZS5jdXJyZW50ID0gdGhpcy5pbnB1dC5zdGF0ZVtrZXldO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlLmN1cnJlbnQgPSB2YWx1ZS5vcmlnaW4gKyB0aGlzLmlucHV0T2Zmc2V0W2tleV07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBnZXREZWZhdWx0VmFsdWUoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBhbXA6IDEsXG4gICAgICAgICAgICBlc2NhcGVBbXA6IDAsXG4gICAgICAgICAgICBkaXJlY3Q6IGZhbHNlLFxuICAgICAgICAgICAgc21vb3RoOiAwXG4gICAgICAgIH07XG4gICAgfVxufVxuIl19

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	exports.__esModule = true;
	
	var _Process2 = __webpack_require__(34);
	
	var _Process3 = _interopRequireDefault(_Process2);
	
	var _utils = __webpack_require__(15);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Input = (function (_Process) {
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
	})(_Process3.default);
	
	exports.default = Input;
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIklucHV0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBR3FCLEtBQUs7Y0FBTCxLQUFLOztBQUN0QixhQURpQixLQUFLLENBQ1YsYUFBYSxFQUFFLElBQUksRUFBRTs4QkFEaEIsS0FBSzs7cURBRWxCLG1CQUFPOztBQUNQLGNBQUssS0FBSyxHQUFHLEVBQUUsQ0FBQztBQUNoQixjQUFLLE1BQU0sR0FBRyxFQUFFLENBQUM7O0FBRWpCLFlBQUksV0FSSCxNQUFNLEVBUUksSUFBSSxDQUFDLEVBQUU7QUFDZCxrQkFBSyxZQUFZLEdBQUc7dUJBQU0sTUFBSyxNQUFNLENBQUMsTUFBSyxJQUFJLEVBQUUsQ0FBQzthQUFBLENBQUM7U0FDdEQ7O0tBQ0o7Ozs7OztBQUFBO0FBVGdCLFNBQUssV0FnQnRCLE1BQU0sbUJBQUMsS0FBSyxFQUFFO0FBQ1YsWUFBSSxDQUFDLEtBQUssZ0JBQVEsSUFBSSxDQUFDLEtBQUssSUFBRSxLQUFLLEVBQUwsS0FBSyxHQUFFLENBQUM7S0FDekM7O1dBbEJnQixLQUFLOzs7a0JBQUwsS0FBSyIsImZpbGUiOiJJbnB1dC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBQcm9jZXNzIGZyb20gJy4uL3Byb2Nlc3MvUHJvY2Vzcyc7XG5pbXBvcnQgeyBpc0Z1bmMgfSBmcm9tICcuLi9pbmMvdXRpbHMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbnB1dCBleHRlbmRzIFByb2Nlc3Mge1xuICAgIGNvbnN0cnVjdG9yKGluaXRpYWxWYWx1ZXMsIHBvbGwpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHt9O1xuICAgICAgICB0aGlzLm9mZnNldCA9IHt9O1xuXG4gICAgICAgIGlmIChpc0Z1bmMocG9sbCkpIHtcbiAgICAgICAgICAgIHRoaXMub25GcmFtZVN0YXJ0ID0gKCkgPT4gdGhpcy5sYXRlc3QodGhpcy5wb2xsKCkpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLypcbiAgICAgICAgTWFudWFsbHkgYWRkIGxhdGVzdCB2YWx1ZXNcblxuICAgICAgICBAcGFyYW0gW29iamVjdF1cbiAgICAqL1xuICAgIGxhdGVzdChwcm9wcykge1xuICAgICAgICB0aGlzLnN0YXRlID0geyAuLi50aGlzLnN0YXRlLCBwcm9wcyB9O1xuICAgIH1cbn1cbiJdfQ==

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _Input2 = __webpack_require__(7);
	
	var _Input3 = _interopRequireDefault(_Input2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var MOUSE_MOVE = 'mousemove';
	
	/*
	    Scrape x/y coordinates from provided event
	
	    @param [event]
	    @return [object]
	*/
	var eventToPoint = function (e) {
	    return {
	        x: e.pageX,
	        y: e.pageY
	    };
	};
	
	var Mouse = (function (_Input) {
	    _inherits(Mouse, _Input);
	
	    function Mouse(e) {
	        _classCallCheck(this, Mouse);
	
	        var _this = _possibleConstructorReturn(this, _Input.call(this));
	
	        _this.state = eventToPoint(e);
	        _this.bindEvents();
	        return _this;
	    }
	
	    Mouse.prototype.latest = function latest(e) {
	        _Input.prototype.latest.call(this, eventToPoint(e));
	        e.preventDefault();
	    };
	
	    Mouse.prototype.start = function start() {
	        _Input.prototype.start.call(this);
	        document.documentElement.addEventListener(MOUSE_MOVE, this.onMove);
	    };
	
	    Mouse.prototype.stop = function stop() {
	        _Input.prototype.stop.call(this);
	        document.documentElement.removeEventListener(MOUSE_MOVE, this.onMove);
	    };
	
	    return Mouse;
	})(_Input3.default);
	
	exports.default = Mouse;
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIk1vdXNlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQSxJQUFNLFVBQVUsR0FBRyxXQUFXOzs7Ozs7OztBQUFDLEFBUS9CLElBQU0sWUFBWSxHQUFHLFVBQUMsQ0FBQztXQUFNO0FBQ3pCLFNBQUMsRUFBRSxDQUFDLENBQUMsS0FBSztBQUNWLFNBQUMsRUFBRSxDQUFDLENBQUMsS0FBSztLQUNiO0NBQUMsQ0FBQzs7SUFFa0IsS0FBSztjQUFMLEtBQUs7O0FBQ3RCLGFBRGlCLEtBQUssQ0FDVixDQUFDLEVBQUU7OEJBREUsS0FBSzs7cURBRWxCLGlCQUFPOztBQUNQLGNBQUssS0FBSyxHQUFHLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUM3QixjQUFLLFVBQVUsRUFBRSxDQUFDOztLQUNyQjs7QUFMZ0IsU0FBSyxXQU90QixNQUFNLG1CQUFDLENBQUMsRUFBRTtBQUNOLHlCQUFNLE1BQU0sS0FBQSxPQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQzlCLFNBQUMsQ0FBQyxjQUFjLEVBQUUsQ0FBQztLQUN0Qjs7QUFWZ0IsU0FBSyxXQVl0QixLQUFLLG9CQUFHO0FBQ0oseUJBQU0sS0FBSyxLQUFBLE1BQUUsQ0FBQztBQUNkLGdCQUFRLENBQUMsZUFBZSxDQUFDLGdCQUFnQixDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7S0FDdEU7O0FBZmdCLFNBQUssV0FpQnRCLElBQUksbUJBQUc7QUFDSCx5QkFBTSxJQUFJLEtBQUEsTUFBRSxDQUFDO0FBQ2IsZ0JBQVEsQ0FBQyxlQUFlLENBQUMsbUJBQW1CLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztLQUN6RTs7V0FwQmdCLEtBQUs7OztrQkFBTCxLQUFLIiwiZmlsZSI6Ik1vdXNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IElucHV0IGZyb20gJy4vSW5wdXQnO1xuXG5jb25zdCBNT1VTRV9NT1ZFID0gJ21vdXNlbW92ZSc7XG5cbi8qXG4gICAgU2NyYXBlIHgveSBjb29yZGluYXRlcyBmcm9tIHByb3ZpZGVkIGV2ZW50XG5cbiAgICBAcGFyYW0gW2V2ZW50XVxuICAgIEByZXR1cm4gW29iamVjdF1cbiovXG5jb25zdCBldmVudFRvUG9pbnQgPSAoZSkgPT4gKHtcbiAgICB4OiBlLnBhZ2VYLFxuICAgIHk6IGUucGFnZVlcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNb3VzZSBleHRlbmRzIElucHV0IHtcbiAgICBjb25zdHJ1Y3RvcihlKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMuc3RhdGUgPSBldmVudFRvUG9pbnQoZSk7XG4gICAgICAgIHRoaXMuYmluZEV2ZW50cygpO1xuICAgIH1cblxuICAgIGxhdGVzdChlKSB7XG4gICAgICAgIHN1cGVyLmxhdGVzdChldmVudFRvUG9pbnQoZSkpO1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgfVxuXG4gICAgc3RhcnQoKSB7XG4gICAgICAgIHN1cGVyLnN0YXJ0KCk7XG4gICAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5hZGRFdmVudExpc3RlbmVyKE1PVVNFX01PVkUsIHRoaXMub25Nb3ZlKTtcbiAgICB9XG5cbiAgICBzdG9wKCkge1xuICAgICAgICBzdXBlci5zdG9wKCk7XG4gICAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKE1PVVNFX01PVkUsIHRoaXMub25Nb3ZlKTtcbiAgICB9XG59Il19

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _Input2 = __webpack_require__(7);
	
	var _Input3 = _interopRequireDefault(_Input2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var TOUCH_MOVE = 'touchmove';
	
	/*
	    Scrape x/y coordinates from provided event
	
	    @param [event]
	    @return [object]
	*/
	var eventToPoint = function (_ref) {
	    var changedTouches = _ref.changedTouches;
	    return {
	        x: changedTouches[0].clientX,
	        y: changedTouches[0].clientY
	    };
	};
	
	var Touch = (function (_Input) {
	    _inherits(Touch, _Input);
	
	    function Touch(e) {
	        _classCallCheck(this, Touch);
	
	        var _this = _possibleConstructorReturn(this, _Input.call(this));
	
	        _this.state = eventToPoint(e);
	        _this.bindEvents();
	        return _this;
	    }
	
	    Touch.prototype.latest = function latest(e) {
	        _Input.prototype.latest.call(this, eventToPoint(e));
	        e.preventDefault();
	    };
	
	    Touch.prototype.start = function start() {
	        _Input.prototype.start.call(this);
	        document.documentElement.addEventListener(TOUCH_MOVE, this.latest);
	    };
	
	    Touch.prototype.stop = function stop() {
	        _Input.prototype.stop.call(this);
	        document.documentElement.removeEventListener(TOUCH_MOVE, this.latest);
	    };
	
	    return Touch;
	})(_Input3.default);
	
	exports.default = Touch;
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlRvdWNoLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQSxJQUFNLFVBQVUsR0FBRyxXQUFXOzs7Ozs7OztBQUFDLEFBUS9CLElBQU0sWUFBWSxHQUFHO1FBQUcsY0FBYyxRQUFkLGNBQWM7V0FBUTtBQUMxQyxTQUFDLEVBQUUsY0FBYyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU87QUFDNUIsU0FBQyxFQUFFLGNBQWMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPO0tBQy9CO0NBQUMsQ0FBQzs7SUFFa0IsS0FBSztjQUFMLEtBQUs7O0FBQ3RCLGFBRGlCLEtBQUssQ0FDVixDQUFDLEVBQUU7OEJBREUsS0FBSzs7cURBRWxCLGlCQUFPOztBQUNQLGNBQUssS0FBSyxHQUFHLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUM3QixjQUFLLFVBQVUsRUFBRSxDQUFDOztLQUNyQjs7QUFMZ0IsU0FBSyxXQU90QixNQUFNLG1CQUFDLENBQUMsRUFBRTtBQUNOLHlCQUFNLE1BQU0sS0FBQSxPQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQzlCLFNBQUMsQ0FBQyxjQUFjLEVBQUUsQ0FBQztLQUN0Qjs7QUFWZ0IsU0FBSyxXQVl0QixLQUFLLG9CQUFHO0FBQ0oseUJBQU0sS0FBSyxLQUFBLE1BQUUsQ0FBQztBQUNkLGdCQUFRLENBQUMsZUFBZSxDQUFDLGdCQUFnQixDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7S0FDdEU7O0FBZmdCLFNBQUssV0FpQnRCLElBQUksbUJBQUc7QUFDSCx5QkFBTSxJQUFJLEtBQUEsTUFBRSxDQUFDO0FBQ2IsZ0JBQVEsQ0FBQyxlQUFlLENBQUMsbUJBQW1CLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztLQUN6RTs7V0FwQmdCLEtBQUs7OztrQkFBTCxLQUFLIiwiZmlsZSI6IlRvdWNoLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IElucHV0IGZyb20gJy4vSW5wdXQnO1xuXG5jb25zdCBUT1VDSF9NT1ZFID0gJ3RvdWNobW92ZSc7XG5cbi8qXG4gICAgU2NyYXBlIHgveSBjb29yZGluYXRlcyBmcm9tIHByb3ZpZGVkIGV2ZW50XG5cbiAgICBAcGFyYW0gW2V2ZW50XVxuICAgIEByZXR1cm4gW29iamVjdF1cbiovXG5jb25zdCBldmVudFRvUG9pbnQgPSAoeyBjaGFuZ2VkVG91Y2hlcyB9KSA9PiAoe1xuICAgIHg6IGNoYW5nZWRUb3VjaGVzWzBdLmNsaWVudFgsXG4gICAgeTogY2hhbmdlZFRvdWNoZXNbMF0uY2xpZW50WVxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRvdWNoIGV4dGVuZHMgSW5wdXQge1xuICAgIGNvbnN0cnVjdG9yKGUpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IGV2ZW50VG9Qb2ludChlKTtcbiAgICAgICAgdGhpcy5iaW5kRXZlbnRzKCk7XG4gICAgfVxuXG4gICAgbGF0ZXN0KGUpIHtcbiAgICAgICAgc3VwZXIubGF0ZXN0KGV2ZW50VG9Qb2ludChlKSk7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICB9XG5cbiAgICBzdGFydCgpIHtcbiAgICAgICAgc3VwZXIuc3RhcnQoKTtcbiAgICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoVE9VQ0hfTU9WRSwgdGhpcy5sYXRlc3QpO1xuICAgIH1cblxuICAgIHN0b3AoKSB7XG4gICAgICAgIHN1cGVyLnN0b3AoKTtcbiAgICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoVE9VQ0hfTU9WRSwgdGhpcy5sYXRlc3QpO1xuICAgIH1cbn0iXX0=

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _utils = __webpack_require__(15);
	
	exports.default = function (_ref) {
	  var element = _ref.element;
	  var state = _ref.state;
	  return (0, _utils.each)(state, function (value, key) {
	    return element.setAttribute(key, value);
	  });
	};
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImF0dHIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O2tCQUVlO01BQUcsT0FBTyxRQUFQLE9BQU87TUFBRSxLQUFLLFFBQUwsS0FBSztTQUFPLFdBRjlCLElBQUksRUFFK0IsS0FBSyxFQUFFLFVBQUMsS0FBSyxFQUFFLEdBQUc7V0FBSyxPQUFPLENBQUMsWUFBWSxDQUFDLEdBQUcsRUFBRSxLQUFLLENBQUM7R0FBQSxDQUFDO0NBQUEiLCJmaWxlIjoiYXR0ci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGVhY2ggfSBmcm9tICcuLi9pbmMvdXRpbHMnO1xuXG5leHBvcnQgZGVmYXVsdCAoeyBlbGVtZW50LCBzdGF0ZSB9KSA9PiBlYWNoKHN0YXRlLCAodmFsdWUsIGtleSkgPT4gZWxlbWVudC5zZXRBdHRyaWJ1dGUoa2V5LCB2YWx1ZSkpOyJdfQ==

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _stateMap = __webpack_require__(36);
	
	var _stateMap2 = _interopRequireDefault(_stateMap);
	
	var _valueTypeMap = __webpack_require__(37);
	
	var _valueTypeMap2 = _interopRequireDefault(_valueTypeMap);
	
	var _prefixer = __webpack_require__(38);
	
	var _prefixer2 = _interopRequireDefault(_prefixer);
	
	var _build = __webpack_require__(39);
	
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
	};
	
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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNzcy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFVQSxTQUFTLFNBQVMsT0FBcUI7UUFBbEIsT0FBTyxRQUFQLE9BQU87UUFBRSxLQUFLLFFBQUwsS0FBSzs7QUFDL0IsV0FBTyxDQUFDLEtBQUssQ0FBQyxPQUFPLElBQUksR0FBRyxHQUFHLHFCQUFvQixLQUFLLENBQUMsQ0FBQztDQUM3RDs7Ozs7Ozs7O0FBQUMsQUFTRixTQUFTLENBQUMsR0FBRyxHQUFHLFVBQUMsT0FBTyxFQUFFLEdBQUcsRUFBSztBQUM5QixPQUFHLEdBQUcsd0JBQVMsR0FBRyxDQUFDLENBQUM7O0FBRXBCLFFBQUksR0FBRyxFQUFFO0FBQ0wsZUFBTyxNQUFNLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0tBQ3REO0NBQ0osQ0FBQTs7QUFFRCxTQUFTLENBQUMsUUFBUSxxQkFBVyxDQUFDO0FBQzlCLFNBQVMsQ0FBQyxZQUFZLHlCQUFlLENBQUM7O2tCQUV2QixTQUFTIiwiZmlsZSI6ImNzcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdGF0ZU1hcCBmcm9tICcuL2Nzcy9zdGF0ZS1tYXAnO1xuaW1wb3J0IHZhbHVlVHlwZU1hcCBmcm9tICcuL2Nzcy92YWx1ZS10eXBlLW1hcCc7XG5pbXBvcnQgcHJlZml4ZXIgZnJvbSAnLi9jc3MvcHJlZml4ZXInO1xuaW1wb3J0IGJ1aWxkUHJvcGVydHlTdHJpbmcgZnJvbSAnLi9jc3MvYnVpbGQnO1xuXG4vKlxuICAgIFJlbmRlciBDU1MgdG8gcHJvdmlkZWQgZWxlbWVudFxuXG4gICAgQHBhcmFtIHsgRE9NRWxlbWVudCwgT2JqZWN0IH1cbiovXG5mdW5jdGlvbiByZW5kZXJDU1MoeyBlbGVtZW50LCBzdGF0ZSB9KSB7XG4gICAgZWxlbWVudC5zdHlsZS5jc3NUZXh0ICs9ICc7JyArIGJ1aWxkUHJvcGVydHlTdHJpbmcoc3RhdGUpO1xufTtcblxuLypcbiAgICBHZXQgQ1NTIHByb3BlcnR5IG9mIGVsZW1lbnRcblxuICAgIEBwYXJhbSBbRE9NRWxlbWVudF1cbiAgICBAcGFyYW0gW3N0cmluZ11cbiAgICBAcmV0dXJuIFt2YXJdXG4qL1xucmVuZGVyQ1NTLmdldCA9IChlbGVtZW50LCBrZXkpID0+IHtcbiAgICBrZXkgPSBwcmVmaXhlcihrZXkpO1xuXG4gICAgaWYgKGtleSkge1xuICAgICAgICByZXR1cm4gd2luZG93LmdldENvbXB1dGVkU3R5bGUoZWxlbWVudCwgbnVsbClba2V5XTtcbiAgICB9XG59XG5cbnJlbmRlckNTUy5zdGF0ZU1hcCA9IHN0YXRlTWFwO1xucmVuZGVyQ1NTLnZhbHVlVHlwZU1hcCA9IHZhbHVlVHlwZU1hcDtcblxuZXhwb3J0IGRlZmF1bHQgcmVuZGVyQ1NTOyJdfQ==

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _utils = __webpack_require__(15);
	
	var _stateMap = __webpack_require__(36);
	
	var _stateMap2 = _interopRequireDefault(_stateMap);
	
	var _valueTypeMap = __webpack_require__(40);
	
	var _valueTypeMap2 = _interopRequireDefault(_valueTypeMap);
	
	var _build = __webpack_require__(41);
	
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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN2Zy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUtBLFNBQVMsU0FBUyxPQUFnQztRQUE3QixLQUFLLFFBQUwsS0FBSztRQUFFLE9BQU8sUUFBUCxPQUFPO1FBQUUsU0FBUyxRQUFULFNBQVM7O0FBQzFDLGVBTkssSUFBSSxFQU1KLHFCQUFNLEtBQUssRUFBRSxTQUFTLENBQUMsRUFBRSxVQUFDLEtBQUssRUFBRSxHQUFHO2VBQUssT0FBTyxDQUFDLFlBQVksQ0FBQyxHQUFHLEVBQUUsS0FBSyxDQUFDO0tBQUEsQ0FBQyxDQUFDO0NBQ25GOztBQUVELFNBQVMsQ0FBQyxJQUFJLEdBQUcsVUFBQyxLQUFLLEVBQUs7QUFDeEIsUUFBTSxJQUFJLEdBQUcsS0FBSyxDQUFDLE9BQU8sQ0FBQyxPQUFPLEVBQUUsQ0FBQztBQUNyQyxRQUFNLGdCQUFnQixHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMsZ0JBQWdCLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLEdBQUcsRUFBRSxDQUFDO0FBQ3BHLFFBQU0sZ0JBQWdCLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQyxnQkFBZ0IsR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDLGdCQUFnQixDQUFDLE9BQU8sR0FBRyxFQUFFLENBQUM7O0FBRXBHLFNBQUssQ0FBQyxTQUFTLEdBQUc7QUFDZCxTQUFDLEVBQUUsSUFBSSxDQUFDLEtBQUssSUFBSSxnQkFBZ0IsR0FBRyxHQUFHLENBQUEsQUFBQyxHQUFHLElBQUksQ0FBQyxDQUFDO0FBQ2pELFNBQUMsRUFBRSxJQUFJLENBQUMsTUFBTSxJQUFJLGdCQUFnQixHQUFHLEdBQUcsQ0FBQSxBQUFDLEdBQUcsSUFBSSxDQUFDLENBQUM7S0FDckQsQ0FBQztDQUNMLENBQUE7O0FBRUQsU0FBUyxDQUFDLFFBQVEscUJBQVcsQ0FBQztBQUM5QixTQUFTLENBQUMsWUFBWSx5QkFBZSxDQUFDOztrQkFFdkIsU0FBUyIsImZpbGUiOiJzdmcuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBlYWNoIH0gZnJvbSAnLi4vaW5jL3V0aWxzJztcbmltcG9ydCBzdGF0ZU1hcCBmcm9tICcuL2Nzcy9zdGF0ZS1tYXAnO1xuaW1wb3J0IHZhbHVlVHlwZU1hcCBmcm9tICcuL3N2Zy92YWx1ZS10eXBlLW1hcCc7XG5pbXBvcnQgYnVpbGQgZnJvbSAnLi9zdmcvYnVpbGQnO1xuXG5mdW5jdGlvbiByZW5kZXJTVkcoeyBzdGF0ZSwgZWxlbWVudCwgc3ZnT3JpZ2luIH0pIHtcbiAgICBlYWNoKGJ1aWxkKHN0YXRlLCBzdmdPcmlnaW4pLCAodmFsdWUsIGtleSkgPT4gZWxlbWVudC5zZXRBdHRyaWJ1dGUoa2V5LCB2YWx1ZSkpO1xufVxuXG5yZW5kZXJTVkcuaW5pdCA9IChhY3RvcikgPT4ge1xuICAgIGNvbnN0IGJCb3ggPSBhY3Rvci5lbGVtZW50LmdldEJCb3goKTtcbiAgICBjb25zdCB0cmFuc2Zvcm1PcmlnaW5YID0gYWN0b3IudmFsdWVzLnRyYW5zZm9ybU9yaWdpblggPyBhY3Rvci52YWx1ZXMudHJhbnNmb3JtT3JpZ2luWC5jdXJyZW50IDogNTA7XG4gICAgY29uc3QgdHJhbnNmb3JtT3JpZ2luWSA9IGFjdG9yLnZhbHVlcy50cmFuc2Zvcm1PcmlnaW5ZID8gYWN0b3IudmFsdWVzLnRyYW5zZm9ybU9yaWdpblkuY3VycmVudCA6IDUwO1xuXG4gICAgYWN0b3Iuc3ZnT3JpZ2luID0ge1xuICAgICAgICB4OiBiQm94LndpZHRoICogKHRyYW5zZm9ybU9yaWdpblggLyAxMDApICsgYkJveC54LFxuICAgICAgICB5OiBiQm94LmhlaWdodCAqICh0cmFuc2Zvcm1PcmlnaW5ZIC8gMTAwKSArIGJCb3gueVxuICAgIH07XG59XG5cbnJlbmRlclNWRy5zdGF0ZU1hcCA9IHN0YXRlTWFwO1xucmVuZGVyU1ZHLnZhbHVlVHlwZU1hcCA9IHZhbHVlVHlwZU1hcDtcblxuZXhwb3J0IGRlZmF1bHQgcmVuZGVyU1ZHOyJdfQ==

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _build = __webpack_require__(42);
	
	var _build2 = _interopRequireDefault(_build);
	
	var _stateMap = __webpack_require__(43);
	
	var _stateMap2 = _interopRequireDefault(_stateMap);
	
	var _valueTypeMap = __webpack_require__(40);
	
	var _valueTypeMap2 = _interopRequireDefault(_valueTypeMap);
	
	var _svg = __webpack_require__(12);
	
	var _svg2 = _interopRequireDefault(_svg);
	
	var _utils = __webpack_require__(15);
	
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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN2Zy1wYXRoLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU1BLElBQU0sYUFBYSxHQUFHLFVBQUMsS0FBSyxFQUFLO0FBQzdCLHVCQUFVLEtBQUssQ0FBQyxDQUFDO0FBQ2pCLGVBSkssSUFBSSxFQUlKLHFCQUFNLEtBQUssQ0FBQyxLQUFLLEVBQUUsS0FBSyxDQUFDLFVBQVUsQ0FBQyxFQUFFLFVBQUMsS0FBSyxFQUFFLEdBQUc7ZUFBSyxLQUFLLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxHQUFHLEVBQUUsS0FBSyxDQUFDO0tBQUEsQ0FBQyxDQUFDO0NBQ3RHLENBQUM7O0FBRUYsYUFBYSxDQUFDLElBQUksR0FBRyxVQUFDLEtBQUssRUFBSztBQUM1QixTQUFLLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQyxPQUFPLENBQUMsY0FBYyxFQUFFLENBQUM7QUFDbEQsa0JBQVUsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0NBQ3pCLENBQUM7O0FBRUYsYUFBYSxDQUFDLFFBQVEscUJBQVcsQ0FBQztBQUNsQyxhQUFhLENBQUMsWUFBWSx5QkFBZSxDQUFDOztrQkFFM0IsYUFBYSIsImZpbGUiOiJzdmctcGF0aC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBidWlsZCBmcm9tICcuL3N2Zy1wYXRoL2J1aWxkJztcbmltcG9ydCBzdGF0ZU1hcCBmcm9tICcuL3N2Zy1wYXRoL3N0YXRlLW1hcCc7XG5pbXBvcnQgdmFsdWVUeXBlTWFwIGZyb20gJy4vc3ZnL3ZhbHVlLXR5cGUtbWFwJztcbmltcG9ydCByZW5kZXJTVkcgZnJvbSAnLi9zdmcnO1xuaW1wb3J0IHsgZWFjaCB9IGZyb20gJy4uL2luYy91dGlscyc7XG5cbmNvbnN0IHJlbmRlclNWR1BhdGggPSAoYWN0b3IpID0+IHtcbiAgICByZW5kZXJTVkcoYWN0b3IpO1xuICAgIGVhY2goYnVpbGQoYWN0b3Iuc3RhdGUsIGFjdG9yLnBhdGhMZW5ndGgpLCAodmFsdWUsIGtleSkgPT4gYWN0b3IuZWxlbWVudC5zZXRBdHRyaWJ1dGUoa2V5LCB2YWx1ZSkpO1xufTtcblxucmVuZGVyU1ZHUGF0aC5pbml0ID0gKGFjdG9yKSA9PiB7XG4gICAgYWN0b3IucGF0aExlbmd0aCA9IGFjdG9yLmVsZW1lbnQuZ2V0VG90YWxMZW5ndGgoKTtcbiAgICByZW5kZXJTVkcuaW5pdChhY3Rvcik7XG59O1xuXG5yZW5kZXJTVkdQYXRoLnN0YXRlTWFwID0gc3RhdGVNYXA7XG5yZW5kZXJTVkdQYXRoLnZhbHVlVHlwZU1hcCA9IHZhbHVlVHlwZU1hcDtcblxuZXhwb3J0IGRlZmF1bHQgcmVuZGVyU1ZHUGF0aDsiXX0=

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports.stepProgress = exports.speedPerSecond = exports.speedPerFrame = exports.smooth = exports.restrict = exports.relativeValue = exports.random = exports.radiansToDegrees = exports.pointFromAngleAndDistance = exports.offset = exports.getProgressFromValue = exports.getValueFromProgress = exports.hypotenuse = exports.distance = exports.dilate = exports.degreesToRadians = exports.angle = undefined;
	
	var _utils = __webpack_require__(15);
	
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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhbGMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQVFBLElBQU0sVUFBVSxHQUFHO0FBQ2YsS0FBQyxFQUFFLENBQUM7QUFDSixLQUFDLEVBQUUsQ0FBQztBQUNKLEtBQUMsRUFBRSxDQUFDO0NBQ1AsQ0FBQzs7QUFFRixJQUFNLFVBQVUsR0FBRyxVQUFDLENBQUMsRUFBRSxDQUFDO1dBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0NBQUE7Ozs7Ozs7Ozs7OztBQUFDLEFBWXRDLElBQU0sS0FBSyxXQUFMLEtBQUssR0FBRyxVQUFDLENBQUM7UUFBRSxDQUFDLHlEQUFHLFVBQVU7V0FBSyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztDQUFBOzs7Ozs7OztBQUFDLEFBUXhGLElBQU0sZ0JBQWdCLFdBQWhCLGdCQUFnQixHQUFHLFVBQUMsT0FBTztXQUFLLE9BQU8sR0FBRyxJQUFJLENBQUMsRUFBRSxHQUFHLEdBQUc7Q0FBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQyxBQW9COUQsSUFBTSxNQUFNLFdBQU4sTUFBTSxHQUFHLFVBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxRQUFRO1dBQUssQ0FBQyxHQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQSxHQUFJLFFBQVEsQUFBQztDQUFBOzs7Ozs7Ozs7OztBQUFDLEFBVzVELElBQU0sUUFBUSxXQUFSLFFBQVEsR0FBRyxVQUFDLENBQUMsRUFBcUI7UUFBbkIsQ0FBQyx5REFBRyxVQUFVOzs7QUFFdEMsUUFBSSxXQWhFSixLQUFLLEVBZ0VLLENBQUMsQ0FBQyxFQUFFO0FBQ1YsZUFBTyxVQUFVLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQzs7O0FBQUMsS0FHM0IsTUFBTTtBQUNILGdCQUFNLE1BQU0sR0FBRyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDcEMsZ0JBQU0sTUFBTSxHQUFHLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUNwQyxnQkFBTSxNQUFNLEdBQUcsQUFBQyxXQXZFcEIsS0FBSyxFQXVFcUIsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFJLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7O0FBRXZELG1CQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBQyxNQUFNLEVBQUksQ0FBQyxhQUFLLE1BQU0sRUFBSSxDQUFDLENBQUMsWUFBSSxNQUFNLEVBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUNuRTtDQUNKOzs7Ozs7Ozs7OztBQUFDLEFBV0ssSUFBTSxVQUFVLFdBQVYsVUFBVSxHQUFHLFVBQUMsQ0FBQyxFQUFFLENBQUM7V0FBSyxJQUFJLENBQUMsSUFBSSxDQUFDLEFBQUMsQ0FBQyxHQUFHLENBQUMsR0FBSyxDQUFDLEdBQUcsQ0FBQyxBQUFDLENBQUM7Q0FBQTs7Ozs7Ozs7Ozs7OztBQUFDLEFBYTFELElBQU0sb0JBQW9CLFdBQXBCLG9CQUFvQixHQUFHLFVBQUMsUUFBUSxFQUFFLElBQUksRUFBRSxFQUFFO1dBQUssQUFBQyxDQUFFLFFBQVEsR0FBRyxJQUFJLEdBQUssUUFBUSxHQUFHLEVBQUUsQUFBQyxHQUFHLElBQUk7Q0FBQTs7Ozs7Ozs7Ozs7Ozs7QUFBQyxBQWNsRyxJQUFNLG9CQUFvQixXQUFwQixvQkFBb0IsR0FBRyxVQUFDLEtBQUssRUFBRSxJQUFJLEVBQUUsRUFBRTtXQUFLLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQSxJQUFLLEVBQUUsR0FBRyxJQUFJLENBQUEsQUFBQztDQUFBOzs7Ozs7Ozs7OztBQUFDLEFBVy9FLElBQU0sTUFBTSxXQUFOLE1BQU0sR0FBRyxVQUFDLENBQUMsRUFBRSxDQUFDLEVBQUs7QUFDNUIsUUFBTSxNQUFNLEdBQUcsRUFBRSxDQUFDOztBQUVsQixlQWpJQSxJQUFJLEVBaUlDLENBQUMsRUFBRSxVQUFDLEtBQUssRUFBRSxHQUFHLEVBQUs7QUFDcEIsY0FBTSxDQUFDLEdBQUcsQ0FBQyxHQUFHLFdBaklsQixXQUFXLEVBaUltQixDQUFDLEVBQUUsR0FBRyxDQUFDLEdBQUcsS0FBSyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7S0FDMUQsQ0FBQyxDQUFDOztBQUVILFdBQU8sTUFBTSxDQUFDO0NBQ2pCOzs7Ozs7Ozs7O0FBQUMsQUFVSyxJQUFNLHlCQUF5QixXQUF6Qix5QkFBeUIsR0FBRyxVQUFDLE1BQU0sRUFBRSxLQUFLLEVBQUUsUUFBUSxFQUFLO0FBQ2xFLFNBQUssR0FBRyxnQkFBZ0IsQ0FBQyxLQUFLLENBQUMsQ0FBQzs7QUFFaEMsV0FBTztBQUNILFNBQUMsRUFBRSxRQUFRLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsR0FBRyxNQUFNLENBQUMsQ0FBQztBQUN4QyxTQUFDLEVBQUUsUUFBUSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLEdBQUcsTUFBTSxDQUFDLENBQUM7S0FDM0MsQ0FBQztDQUNMOzs7Ozs7OztBQUFDLEFBUUssSUFBTSxnQkFBZ0IsV0FBaEIsZ0JBQWdCLEdBQUcsVUFBQyxPQUFPO1dBQUssT0FBTyxHQUFHLEdBQUcsR0FBRyxJQUFJLENBQUMsRUFBRTtDQUFBOzs7Ozs7Ozs7QUFBQyxBQVM5RCxJQUFNLE1BQU0sV0FBTixNQUFNLEdBQUc7UUFBQyxHQUFHLHlEQUFHLENBQUM7UUFBRSxHQUFHLHlEQUFHLENBQUM7V0FBSyxJQUFJLENBQUMsTUFBTSxFQUFFLElBQUksR0FBRyxHQUFHLEdBQUcsQ0FBQSxBQUFDLEdBQUcsR0FBRztDQUFBOzs7Ozs7Ozs7Ozs7QUFBQyxBQVl2RSxJQUFNLGFBQWEsV0FBYixhQUFhLEdBQUcsVUFBQyxPQUFPLEVBQUUsUUFBUSxFQUFLO0FBQ2hELFFBQUksUUFBUSxHQUFHLE9BQU8sQ0FBQztBQUN2QixRQUFNLFFBQVEsR0FBRyxRQUFRLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0FBQ3JDLFFBQU0sUUFBUSxHQUFHLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQzs7MEJBQ1AsV0FyTHRCLGNBQWMsRUFxTHVCLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQzs7UUFBM0MsSUFBSSxtQkFBSixJQUFJO1FBQUUsS0FBSyxtQkFBTCxLQUFLOztBQUVqQixTQUFLLEdBQUcsVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDOztBQUUxQixZQUFRLFFBQVE7QUFDWixhQUFLLEdBQUc7QUFDSixvQkFBUSxJQUFJLEtBQUssQ0FBQztBQUNsQixrQkFBTTtBQUFBLEFBQ1YsYUFBSyxHQUFHO0FBQ0osb0JBQVEsSUFBSSxLQUFLLENBQUM7QUFDbEIsa0JBQU07QUFBQSxBQUNWLGFBQUssR0FBRztBQUNKLG9CQUFRLElBQUksS0FBSyxDQUFDO0FBQ2xCLGtCQUFNO0FBQUEsQUFDVixhQUFLLEdBQUc7QUFDSixvQkFBUSxJQUFJLEtBQUssQ0FBQztBQUNsQixrQkFBTTtBQUFBLEtBQ2I7O0FBRUQsUUFBSSxJQUFJLEVBQUU7QUFDTixnQkFBUSxJQUFJLElBQUksQ0FBQztLQUNwQjs7QUFFRCxXQUFPLFFBQVEsQ0FBQztDQUNuQjs7Ozs7Ozs7Ozs7O0FBQUMsQUFZSyxJQUFNLFFBQVEsV0FBUixRQUFRLEdBQUcsVUFBQyxLQUFLLEVBQUUsR0FBRyxFQUFFLEdBQUc7V0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxFQUFFLEdBQUcsQ0FBQyxFQUFFLEdBQUcsQ0FBQztDQUFBOzs7Ozs7Ozs7O0FBQUMsQUFVMUUsSUFBTSxNQUFNLFdBQU4sTUFBTSxHQUFHLFVBQUMsUUFBUSxFQUFFLFFBQVEsRUFBRSxRQUFRO1FBQUUsU0FBUyx5REFBRyxDQUFDO1dBQUssV0FsT25FLFNBQVMsRUFrT29FLFFBQVEsR0FBSSxRQUFRLElBQUksUUFBUSxHQUFHLFFBQVEsQ0FBQSxBQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxTQUFTLEVBQUUsUUFBUSxDQUFDLEFBQUMsQ0FBQztDQUFBOzs7Ozs7OztBQUFDLEFBUXpKLElBQU0sYUFBYSxXQUFiLGFBQWEsR0FBRyxVQUFDLEdBQUcsRUFBRSxhQUFhO1dBQUssQUFBQyxXQTVPbEQsS0FBSyxFQTRPbUQsR0FBRyxDQUFDLEdBQUksR0FBRyxJQUFJLElBQUksR0FBRyxhQUFhLENBQUEsQUFBQyxHQUFHLENBQUM7Q0FBQTs7Ozs7Ozs7QUFBQyxBQVE5RixJQUFNLGNBQWMsV0FBZCxjQUFjLEdBQUcsVUFBQyxRQUFRLEVBQUUsYUFBYTtXQUFLLFFBQVEsSUFBSSxJQUFJLEdBQUcsYUFBYSxDQUFBLEFBQUM7Q0FBQTs7Ozs7Ozs7O0FBQUMsQUFTdEYsSUFBTSxZQUFZLFdBQVosWUFBWSxHQUFHLFVBQUMsUUFBUSxFQUFFLEtBQUssRUFBSztBQUM3QyxRQUFNLE9BQU8sR0FBRyxDQUFDLElBQUksS0FBSyxHQUFHLENBQUMsQ0FBQSxBQUFDLENBQUM7QUFDaEMsUUFBTSxNQUFNLEdBQUcsQ0FBQyxHQUFJLENBQUMsR0FBRyxLQUFLLEFBQUMsQ0FBQztBQUMvQixRQUFNLGdCQUFnQixHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsUUFBUSxHQUFHLE1BQU0sRUFBRSxDQUFDLENBQUMsQ0FBQzs7QUFFeEQsV0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLGdCQUFnQixHQUFHLE9BQU8sQ0FBQyxHQUFHLE9BQU8sQ0FBQztDQUMzRCxDQUFDIiwiZmlsZSI6ImNhbGMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICAgIGVhY2gsXG4gICAgaGFzUHJvcGVydHksXG4gICAgaXNOdW0sXG4gICAgc3BsaXRWYWx1ZVVuaXQsXG4gICAgdG9EZWNpbWFsXG59IGZyb20gJy4vdXRpbHMnO1xuXG5jb25zdCBaRVJPX1BPSU5UID0ge1xuICAgIHg6IDAsXG4gICAgeTogMCxcbiAgICB6OiAwXG59O1xuXG5jb25zdCBkaXN0YW5jZTFEID0gKGEsIGIpID0+IE1hdGguYWJzKGEgLSBiKTtcblxuLypcbiAgICBBbmdsZSBiZXR3ZWVuIHBvaW50c1xuICAgIFxuICAgIFRyYW5zbGF0ZXMgdGhlIGh5cG90aGV0aWNhbCBsaW5lIHNvIHRoYXQgdGhlICdmcm9tJyBjb29yZGluYXRlc1xuICAgIGFyZSBhdCAwLDAsIHRoZW4gcmV0dXJuIHRoZSBhbmdsZSB1c2luZyAuYW5nbGVGcm9tQ2VudGVyKClcbiAgICBcbiAgICBAcGFyYW0gW29iamVjdF06IFggYW5kIFkgY29vcmRpbmF0ZXMgb2YgZnJvbSBwb2ludFxuICAgIEBwYXJhbSBbb2JqZWN0XTogWCBhbmQgWSBjb3JkaW5hdGVzIG9mIHRvIHBvaW50XG4gICAgQHJldHVybiBbcmFkaWFuXTogQW5nbGUgYmV0d2VlbiB0aGUgdHdvIHBvaW50cyBpbiByYWRpYW5zXG4qL1xuZXhwb3J0IGNvbnN0IGFuZ2xlID0gKGEsIGIgPSBaRVJPX1BPSU5UKSA9PiByYWRpYW5zVG9EZWdyZWVzKE1hdGguYXRhbjIoYS54IC0gYi54LCBhLnkgLSBiLnkpKTtcblxuLypcbiAgICBDb252ZXJ0IGRlZ3JlZXMgdG8gcmFkaWFuc1xuICAgIFxuICAgIEBwYXJhbSBbbnVtYmVyXTogVmFsdWUgaW4gZGVncmVlc1xuICAgIEByZXR1cm4gW251bWJlcl06IFZhbHVlIGluIHJhZGlhbnNcbiovXG5leHBvcnQgY29uc3QgZGVncmVlc1RvUmFkaWFucyA9IChkZWdyZWVzKSA9PiBkZWdyZWVzICogTWF0aC5QSSAvIDE4MDtcblxuLypcbiAgICBEaWxhdGVcbiAgICBcbiAgICBDaGFuZ2UgdGhlIHByb2dyZXNzaW9uIGJldHdlZW4gYSBhbmQgYiBhY2NvcmRpbmcgdG8gZGlsYXRpb24uXG4gICAgXG4gICAgU28gZGlsYXRpb24gPSAwLjUgd291bGQgY2hhbmdlXG4gICAgXG4gICAgYSAtLS0tLS0tLS0gYlxuICAgIFxuICAgIHRvXG4gICAgXG4gICAgYSAtLS0tIGJcbiAgICBcbiAgICBAcGFyYW0gW251bWJlcl06IFByZXZpb3VzIHZhbHVlXG4gICAgQHBhcmFtIFtudW1iZXJdOiBDdXJyZW50IHZhbHVlXG4gICAgQHBhcmFtIFtudW1iZXJdOiBEaWxhdGUgcHJvZ3Jlc3MgYnkgeFxuICAgIEByZXR1cm4gW251bWJlcl06IFByZXZpb3VzIHZhbHVlIHBsdXMgdGhlIGRpbGF0ZWQgZGlmZmVyZW5jZVxuKi9cbmV4cG9ydCBjb25zdCBkaWxhdGUgPSAoYSwgYiwgZGlsYXRpb24pID0+IGEgKyAoKGIgLSBhKSAqIGRpbGF0aW9uKTtcblxuLypcbiAgICBEaXN0YW5jZVxuICAgIFxuICAgIFJldHVybnMgdGhlIGRpc3RhbmNlIGJldHdlZW4gdHdvIG4gZGltZW5zaW9uYWwgcG9pbnRzLlxuICAgIFxuICAgIEBwYXJhbSBbb2JqZWN0L251bWJlcl06IHggYW5kIHkgb3IganVzdCB4IG9mIHBvaW50IEFcbiAgICBAcGFyYW0gW29iamVjdC9udW1iZXJdOiAob3B0aW9uYWwpOiB4IGFuZCB5IG9yIGp1c3QgeCBvZiBwb2ludCBCXG4gICAgQHJldHVybiBbbnVtYmVyXTogVGhlIGRpc3RhbmNlIGJldHdlZW4gdGhlIHR3byBwb2ludHNcbiovXG5leHBvcnQgY29uc3QgZGlzdGFuY2UgPSAoYSwgYiA9IFpFUk9fUE9JTlQpID0+IHtcbiAgICAvLyAxRCBkaW1lbnNpb25zXG4gICAgaWYgKGlzTnVtKGEpKSB7XG4gICAgICAgIHJldHVybiBkaXN0YW5jZTFEKGEsIGIpO1xuXG4gICAgLy8gTXVsdGktZGltZW5zaW9uYWxcbiAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCB4RGVsdGEgPSBkaXN0YW5jZTFEKGEueCwgYi54KTtcbiAgICAgICAgY29uc3QgeURlbHRhID0gZGlzdGFuY2UxRChhLnksIGIueSk7XG4gICAgICAgIGNvbnN0IHpEZWx0YSA9IChpc051bShhLnopKSA/IGRpc3RhbmNlMUQoYS56LCBiLnopIDogMDtcblxuICAgICAgICByZXR1cm4gTWF0aC5zcXJ0KCh4RGVsdGEgKiogMikgKyAoeURlbHRhICoqIDIpICsgKHpEZWx0YSAqKiAyKSk7XG4gICAgfVxufTtcbiBcbi8qXG4gICAgSHlwb3RlbnVzZVxuICAgIFxuICAgIFJldHVybnMgdGhlIGh5cG90ZW51c2UsIHNpZGUgQywgZ2l2ZW4gdGhlIGxlbmd0aHMgb2Ygc2lkZXMgQSBhbmQgQi5cbiAgICBcbiAgICBAcGFyYW0gW251bWJlcl06IExlbmd0aCBvZiBBXG4gICAgQHBhcmFtIFtudW1iZXJdOiBMZW5ndGggb2YgQlxuICAgIEByZXR1cm4gW251bWJlcl06IExlbmd0aCBvZiBDXG4qL1xuZXhwb3J0IGNvbnN0IGh5cG90ZW51c2UgPSAoYSwgYikgPT4gTWF0aC5zcXJ0KChhICogYSkgKyAoYiAqIGIpKTtcblxuLypcbiAgICBWYWx1ZSBpbiByYW5nZSBmcm9tIHByb2dyZXNzXG4gICAgXG4gICAgR2l2ZW4gYSBsb3dlciBsaW1pdCBhbmQgYW4gdXBwZXIgbGltaXQsIHdlIHJldHVybiB0aGUgdmFsdWUgd2l0aGluXG4gICAgdGhhdCByYW5nZSBhcyBleHByZXNzZWQgYnkgcHJvZ3Jlc3MgKGEgbnVtYmVyIGZyb20gMC0xKVxuICAgIFxuICAgIEBwYXJhbSBbbnVtYmVyXTogVGhlIHByb2dyZXNzIGJldHdlZW4gbG93ZXIgYW5kIHVwcGVyIGxpbWl0cyBleHByZXNzZWQgMC0xXG4gICAgQHBhcmFtIFtudW1iZXJdOiBMb3dlciBsaW1pdCBvZiByYW5nZVxuICAgIEBwYXJhbSBbbnVtYmVyXTogVXBwZXIgbGltaXQgb2YgcmFuZ2VcbiAgICBAcmV0dXJuIFtudW1iZXJdOiBWYWx1ZSBhcyBjYWxjdWxhdGVkIGZyb20gcHJvZ3Jlc3Mgd2l0aGluIHJhbmdlIChub3QgbGltaXRlZCB3aXRoaW4gcmFuZ2UpXG4qL1xuZXhwb3J0IGNvbnN0IGdldFZhbHVlRnJvbVByb2dyZXNzID0gKHByb2dyZXNzLCBmcm9tLCB0bykgPT4gKC0gcHJvZ3Jlc3MgKiBmcm9tKSArIChwcm9ncmVzcyAqIHRvKSArIGZyb207XG5cbi8qXG4gICAgUHJvZ3Jlc3Mgd2l0aGluIGdpdmVuIHJhbmdlXG4gICAgXG4gICAgR2l2ZW4gYSBsb3dlciBsaW1pdCBhbmQgYW4gdXBwZXIgbGltaXQsIHdlIHJldHVybiB0aGUgcHJvZ3Jlc3NcbiAgICAoZXhwcmVzc2VkIGFzIGEgbnVtYmVyIDAtMSkgcmVwcmVzZW50ZWQgYnkgdGhlIGdpdmVuIHZhbHVlLCBhbmRcbiAgICBsaW1pdCB0aGF0IHByb2dyZXNzIHRvIHdpdGhpbiAwLTEuXG4gICAgXG4gICAgQHBhcmFtIFtudW1iZXJdOiBWYWx1ZSB0byBmaW5kIHByb2dyZXNzIHdpdGhpbiBnaXZlbiByYW5nZVxuICAgIEBwYXJhbSBbbnVtYmVyXTogTG93ZXIgbGltaXQgXG4gICAgQHBhcmFtIFtudW1iZXJdOiBVcHBlciBsaW1pdFxuICAgIEByZXR1cm4gW251bWJlcl06IFByb2dyZXNzIG9mIHZhbHVlIHdpdGhpbiByYW5nZSBhcyBleHByZXNzZWQgMC0xXG4qL1xuZXhwb3J0IGNvbnN0IGdldFByb2dyZXNzRnJvbVZhbHVlID0gKHZhbHVlLCBmcm9tLCB0bykgPT4gKHZhbHVlIC0gZnJvbSkgLyAodG8gLSBmcm9tKTtcblxuLypcbiAgICBPZmZzZXQgYmV0d2VlbiB0d28gb2JqZWN0cyBvZiBudW1iZXJzXG5cbiAgICBJZiBwcm9wZXJ0eSBpcyBmb3VuZCBpbiBiIG5vdCBwcmVzZW50IGluIGEsIGl0IHdpbGwgcmV0dXJuIGAwYCBmb3IgdGhhdCBwcm9wLlxuICAgIFxuICAgIEBwYXJhbSBbUG9pbnRdOiBGaXJzdCBvYmplY3RcbiAgICBAcGFyYW0gW1BvaW50XTogU2Vjb25kIG9iamVjdFxuICAgIEByZXR1cm4gW09mZnNldF06IERpc3RhbmNlIG1ldHJpY3MgYmV0d2VlbiB0d28gcG9pbnRzXG4qL1xuZXhwb3J0IGNvbnN0IG9mZnNldCA9IChhLCBiKSA9PiB7XG4gICAgY29uc3Qgb2Zmc2V0ID0ge307XG5cbiAgICBlYWNoKGIsICh2YWx1ZSwga2V5KSA9PiB7XG4gICAgICAgIG9mZnNldFtrZXldID0gaGFzUHJvcGVydHkoYSwga2V5KSA/IHZhbHVlIC0gYVtrZXldIDogMDtcbiAgICB9KTtcblxuICAgIHJldHVybiBvZmZzZXQ7XG59O1xuXG4vKlxuICAgIFBvaW50IGZyb20gYW5nbGUgYW5kIGRpc3RhbmNlXG4gICAgXG4gICAgQHBhcmFtIFtvYmplY3RdOiAyRCBwb2ludCBvZiBvcmlnaW5cbiAgICBAcGFyYW0gW251bWJlcl06IEFuZ2xlIGZyb20gb3JpZ2luXG4gICAgQHBhcmFtIFtudW1iZXJdOiBEaXN0YW5jZSBmcm9tIG9yaWdpblxuICAgIEByZXR1cm4gW29iamVjdF06IENhbGN1bGF0ZWQgMkQgcG9pbnRcbiovXG5leHBvcnQgY29uc3QgcG9pbnRGcm9tQW5nbGVBbmREaXN0YW5jZSA9IChvcmlnaW4sIGFuZ2xlLCBkaXN0YW5jZSkgPT4ge1xuICAgIGFuZ2xlID0gZGVncmVlc1RvUmFkaWFucyhhbmdsZSk7XG5cbiAgICByZXR1cm4ge1xuICAgICAgICB4OiBkaXN0YW5jZSAqIE1hdGguY29zKGFuZ2xlKSArIG9yaWdpbi54LFxuICAgICAgICB5OiBkaXN0YW5jZSAqIE1hdGguc2luKGFuZ2xlKSArIG9yaWdpbi55XG4gICAgfTtcbn07XG5cbi8qXG4gICAgQ29udmVydCByYWRpYW5zIHRvIGRlZ3JlZXNcbiAgICBcbiAgICBAcGFyYW0gW251bWJlcl06IFZhbHVlIGluIHJhZGlhbnNcbiAgICBAcmV0dXJuIFtudW1iZXJdOiBWYWx1ZSBpbiBkZWdyZWVzXG4qL1xuZXhwb3J0IGNvbnN0IHJhZGlhbnNUb0RlZ3JlZXMgPSAocmFkaWFucykgPT4gcmFkaWFucyAqIDE4MCAvIE1hdGguUEk7XG5cbi8qXG4gICAgUmV0dXJuIHJhbmRvbSBudW1iZXIgYmV0d2VlbiByYW5nZVxuICAgIFxuICAgIEBwYXJhbSBbbnVtYmVyXSAob3B0aW9uYWwpOiBPdXRwdXQgbWluaW11bVxuICAgIEBwYXJhbSBbbnVtYmVyXSAob3B0aW9uYWwpOiBPdXRwdXQgbWF4aW11bVxuICAgIEByZXR1cm4gW251bWJlcl06IFJhbmRvbSBudW1iZXIgd2l0aGluIHJhbmdlLCBvciAwIGFuZCAxIGlmIG5vbmUgcHJvdmlkZWRcbiovXG5leHBvcnQgY29uc3QgcmFuZG9tID0gKG1pbiA9IDAsIG1heCA9IDEpID0+IE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluKSArIG1pbjtcblxuLypcbiAgICBDYWxjdWxhdGUgcmVsYXRpdmUgdmFsdWVcbiAgICBcbiAgICBUYWtlcyB0aGUgb3BlcmF0b3IgYW5kIHZhbHVlIGZyb20gYSBzdHJpbmcsIGllIFwiKz01XCIsIGFuZCBhcHBsaWVzXG4gICAgdG8gdGhlIGN1cnJlbnQgdmFsdWUgdG8gcmVzb2x2ZSBhIG5ldyB0YXJnZXQuXG4gICAgXG4gICAgQHBhcmFtIFtudW1iZXJdOiBDdXJyZW50IHZhbHVlXG4gICAgQHBhcmFtIFtzdHJpbmddOiBSZWxhdGl2ZSB2YWx1ZVxuICAgIEByZXR1cm4gW251bWJlcl06IE5ldyB2YWx1ZVxuKi9cbmV4cG9ydCBjb25zdCByZWxhdGl2ZVZhbHVlID0gKGN1cnJlbnQsIHJlbGF0aXZlKSA9PiB7XG4gICAgbGV0IG5ld1ZhbHVlID0gY3VycmVudDtcbiAgICBjb25zdCBlcXVhdGlvbiA9IHJlbGF0aXZlLnNwbGl0KCc9Jyk7XG4gICAgY29uc3Qgb3BlcmF0b3IgPSBlcXVhdGlvblswXTtcbiAgICBsZXQgeyB1bml0LCB2YWx1ZSB9ID0gc3BsaXRWYWx1ZVVuaXQoZXF1YXRpb25bMV0pO1xuXG4gICAgdmFsdWUgPSBwYXJzZUZsb2F0KHZhbHVlKTtcblxuICAgIHN3aXRjaCAob3BlcmF0b3IpIHtcbiAgICAgICAgY2FzZSAnKyc6XG4gICAgICAgICAgICBuZXdWYWx1ZSArPSB2YWx1ZTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICctJzpcbiAgICAgICAgICAgIG5ld1ZhbHVlIC09IHZhbHVlO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJyonOlxuICAgICAgICAgICAgbmV3VmFsdWUgKj0gdmFsdWU7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnLyc6XG4gICAgICAgICAgICBuZXdWYWx1ZSAvPSB2YWx1ZTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgIH1cbiAgICBcbiAgICBpZiAodW5pdCkge1xuICAgICAgICBuZXdWYWx1ZSArPSB1bml0O1xuICAgIH1cblxuICAgIHJldHVybiBuZXdWYWx1ZTtcbn07XG5cbi8qXG4gICAgUmVzdHJpY3QgdmFsdWUgdG8gcmFuZ2VcbiAgICBcbiAgICBSZXR1cm4gdmFsdWUgd2l0aGluIHRoZSByYW5nZSBvZiBsb3dlckxpbWl0IGFuZCB1cHBlckxpbWl0XG4gICAgXG4gICAgQHBhcmFtIFtudW1iZXJdOiBWYWx1ZSB0byBrZWVwIHdpdGhpbiByYW5nZVxuICAgIEBwYXJhbSBbbnVtYmVyXTogTG93ZXIgbGltaXQgb2YgcmFuZ2VcbiAgICBAcGFyYW0gW251bWJlcl06IFVwcGVyIGxpbWl0IG9mIHJhbmdlXG4gICAgQHJldHVybiBbbnVtYmVyXTogVmFsdWUgYXMgbGltaXRlZCB3aXRoaW4gZ2l2ZW4gcmFuZ2VcbiovXG5leHBvcnQgY29uc3QgcmVzdHJpY3QgPSAodmFsdWUsIG1pbiwgbWF4KSA9PiBNYXRoLm1heChNYXRoLm1pbih2YWx1ZSwgbWF4KSwgbWluKTtcblxuLypcbiAgICBGcmFtZXJhdGUtaW5kZXBlbmRlbnQgc21vb3RoaW5nXG5cbiAgICBAcGFyYW0gW251bWJlcl06IE5ldyB2YWx1ZVxuICAgIEBwYXJhbSBbbnVtYmVyXTogT2xkIHZhbHVlXG4gICAgQHBhcmFtIFtudW1iZXJdOiBGcmFtZSBkdXJhdGlvblxuICAgIEBwYXJhbSBbbnVtYmVyXSAob3B0aW9uYWwpOiBTbW9vdGhpbmcgKDAgaXMgbm9uZSlcbiovXG5leHBvcnQgY29uc3Qgc21vb3RoID0gKG5ld1ZhbHVlLCBvbGRWYWx1ZSwgZHVyYXRpb24sIHNtb290aGluZyA9IDApID0+IHRvRGVjaW1hbChvbGRWYWx1ZSArIChkdXJhdGlvbiAqIChuZXdWYWx1ZSAtIG9sZFZhbHVlKSAvIE1hdGgubWF4KHNtb290aGluZywgZHVyYXRpb24pKSk7XG5cbi8qXG4gICAgQ29udmVydCB4IHBlciBzZWNvbmQgdG8gcGVyIGZyYW1lIHZlbG9jaXR5IGJhc2VkIG9uIGZwc1xuICAgIFxuICAgIEBwYXJhbSBbbnVtYmVyXTogVW5pdCBwZXIgc2Vjb25kXG4gICAgQHBhcmFtIFtudW1iZXJdOiBGcmFtZSBkdXJhdGlvbiBpbiBtc1xuKi9cbmV4cG9ydCBjb25zdCBzcGVlZFBlckZyYW1lID0gKHhwcywgZnJhbWVEdXJhdGlvbikgPT4gKGlzTnVtKHhwcykpID8geHBzIC8gKDEwMDAgLyBmcmFtZUR1cmF0aW9uKSA6IDA7XG5cbi8qXG4gICAgQ29udmVydCB2ZWxvY2l0eSBpbnRvIHZlbGljaXR5IHBlciBzZWNvbmRcbiAgICBcbiAgICBAcGFyYW0gW251bWJlcl06IFVuaXQgcGVyIGZyYW1lXG4gICAgQHBhcmFtIFtudW1iZXJdOiBGcmFtZSBkdXJhdGlvbiBpbiBtc1xuKi9cbmV4cG9ydCBjb25zdCBzcGVlZFBlclNlY29uZCA9ICh2ZWxvY2l0eSwgZnJhbWVEdXJhdGlvbikgPT4gdmVsb2NpdHkgKiAoMTAwMCAvIGZyYW1lRHVyYXRpb24pO1xuXG4vKlxuICAgIENyZWF0ZSBzdGVwcGVkIHZlcnNpb24gb2YgMC0xIHByb2dyZXNzXG4gICAgXG4gICAgQHBhcmFtIFtudW1iZXJdOiBDdXJyZW50IHZhbHVlXG4gICAgQHBhcmFtIFtpbnRdOiBOdW1iZXIgb2Ygc3RlcHNcbiAgICBAcmV0dXJuIFtudW1iZXJdOiBTdGVwcGVkIHZhbHVlXG4qL1xuZXhwb3J0IGNvbnN0IHN0ZXBQcm9ncmVzcyA9IChwcm9ncmVzcywgc3RlcHMpID0+IHtcbiAgICBjb25zdCBzZWdtZW50ID0gMSAvIChzdGVwcyAtIDEpO1xuICAgIGNvbnN0IHRhcmdldCA9IDEgLSAoMSAvIHN0ZXBzKTtcbiAgICBjb25zdCBwcm9ncmVzc09mVGFyZ2V0ID0gTWF0aC5taW4ocHJvZ3Jlc3MgLyB0YXJnZXQsIDEpO1xuXG4gICAgcmV0dXJuIE1hdGguZmxvb3IocHJvZ3Jlc3NPZlRhcmdldCAvIHNlZ21lbnQpICogc2VnbWVudDtcbn07Il19

/***/ },
/* 15 */
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
	        if (values.hasOwnProperty(key)) {
	            combined += values[key] + delimiter;
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
	        var _key2 = keys[i];
	        var prop = object[_key2];
	
	        callback(prop, _key2, object);
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
	//# sourceMappingURL=data:application/json;base64,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LFNBQVMsQ0FBQztDQUNsRCxDQUFDIiwiZmlsZSI6InV0aWxzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gcHVzaCguLi5hcmdzKSB7XG4gICAgQXJyYXkucHJvdG90eXBlLnB1c2guY2FsbCh0aGlzLCAuLi5hcmdzKTtcblxuICAgIGlmICh0aGlzLmxlbmd0aCA+PSB0aGlzLl9tYXhTaXplKSB7XG4gICAgICAgIHRoaXMuc2hpZnQoKTtcbiAgICB9XG59XG5cbmNvbnN0IENBTUVMX0NBU0VfUEFUVEVSTiA9IC8oW2Etel0pKFtBLVpdKS9nO1xuY29uc3QgUkVQTEFDRV9URU1QTEFURSA9ICckMS0kMic7XG5jb25zdCBIQVNfUEVSRk9STUFOQ0VfTk9XID0gKHR5cGVvZiBwZXJmb3JtYW5jZSAhPT0gJ3VuZGVmaW5lZCcgJiYgcGVyZm9ybWFuY2Uubm93KTtcblxuLypcbiAgICBHZXQgdmFyIHR5cGUgYXMgc3RyaW5nXG4gICAgXG4gICAgQHBhcmFtOiBWYXJpYWJsZSB0byB0ZXN0XG4gICAgQHJldHVybiBbc3RyaW5nXTogUmV0dXJucywgZm9yIGluc3RhbmNlICdPYmplY3QnIGlmIFtvYmplY3QgT2JqZWN0XVxuKi9cbmNvbnN0IHZhclR5cGUgPSB2YXJpYWJsZSA9PiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwodmFyaWFibGUpLnNsaWNlKDgsIC0xKTtcblxuLypcbiAgICBDb252ZXJ0IGNhbWVsQ2FzZSB0byBkYXNoLWNhc2VcblxuICAgIEBwYXJhbSBbc3RyaW5nXVxuICAgIEByZXR1cm4gW3N0cmluZ11cbiovXG5leHBvcnQgY29uc3QgY2FtZWxUb0Rhc2ggPSAoc3RyaW5nKSA9PiBzdHJpbmcucmVwbGFjZShDQU1FTF9DQVNFX1BBVFRFUk4sIFJFUExBQ0VfVEVNUExBVEUpLnRvTG93ZXJDYXNlKCk7XG5cbi8qXG4gICAgQ3JlYXRlIGFuIGF1dG8tY3VsbGluZyBidWZmZXIgYXJyYXlcblxuICAgIEBwYXJhbSBbYXJyYXldXG4gICAgQHBhcmFtIFtpbnRdXG4gICAgQHJldHVybiBbYXJyYXldXG4qL1xuZXhwb3J0IGNvbnN0IGNyZWF0ZUJ1ZmZlciA9IChtYXhTaXplID0gMywgYXJyYXkgPSBbXSkgPT4ge1xuICAgIGFycmF5LnB1c2ggPSBwdXNoO1xuICAgIGFycmF5Ll9tYXhTaXplID0gbWF4U2l6ZSB8fCAwO1xuXG4gICAgcmV0dXJuIGFycmF5O1xufVxuXG5leHBvcnQgY29uc3QgY3JlYXRlRGVsaW1pdGVkID0gKHZhbHVlcywgdGVybXMsIGRlbGltaXRlciwgY2hvcCkgPT4ge1xuICAgIGxldCBjb21iaW5lZCA9ICcnO1xuXG4gICAgdGVybXMuZm9yRWFjaCgodGVybSkgPT4ge1xuICAgICAgICBpZiAodmFsdWVzLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICAgIGNvbWJpbmVkICs9IHZhbHVlc1trZXldICsgZGVsaW1pdGVyO1xuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICBpZiAoY2hvcCkge1xuICAgICAgICBjb21iaW5lZCA9IGNvbWJpbmVkLnNsaWNlKDAsIC1jaG9wKTtcbiAgICB9XG5cbiAgICByZXR1cm4gY29tYmluZWQ7XG59O1xuXG4vKlxuICAgIENyZWF0ZSBhIGZ1bmN0aW9uIHN0cmluZ1xuXG4gICAgJzIwcHgnLCAndHJhbnNsYXRlJyAtPiAndHJhbnNsYXRlKDIwcHgpJ1xuXG4gICAgQHBhcmFtIFtzdHJpbmddXG4gICAgQHBhcmFtIFtzdHJpbmddXG4gICAgQHJldHVybiBbc3RyaW5nXVxuKi9cbmV4cG9ydCBjb25zdCBjcmVhdGVGdW5jdGlvblN0cmluZyA9ICh2YWx1ZSwgcHJlZml4KSA9PiBgJHtwcmVmaXh9KCR7dmFsdWV9KWA7XG5cbi8qXG4gICAgR2VuZXJhdGUgY3VycmVudCB0aW1lc3RhbXBcbiAgICBcbiAgICBAcmV0dXJuIFt0aW1lc3RhbXBdOiBDdXJyZW50IFVOSVggdGltZXN0YW1wXG4qL1xuZXhwb3J0IGNvbnN0IGN1cnJlbnRUaW1lID0gKCkgPT4gSEFTX1BFUkZPUk1BTkNFX05PVyA/IHBlcmZvcm1hbmNlLm5vdygpIDogbmV3IERhdGUoKS5nZXRUaW1lKCk7XG5cbi8qXG4gICAgSXRlcmF0ZSBvdmVyIGFuIG9iamVjdCBhbmQgZmlyZSBhIGNhbGxiYWNrIGZvciBldmVyeSBpdGVtIGluIGl0XG5cbiAgICBAcGFyYW0gW29iamVjdF06IE9iamVjdCB0byBpdGVyYXRlIG92ZXJcbiAgICBAcGFyYW0gW2Z1bmN0aW9uXTogQ2FsbGJhY2sgdG8gZmlyZVxuKi9cbmV4cG9ydCBjb25zdCBlYWNoID0gKG9iamVjdCwgY2FsbGJhY2spID0+IHtcbiAgICBjb25zdCBrZXlzID0gb2JqZWN0ID8gT2JqZWN0LmtleXMob2JqZWN0KSA6IFtdO1xuICAgIGNvbnN0IG51bUtleXMgPSBrZXlzLmxlbmd0aDtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbnVtS2V5czsgaSsrKSB7XG4gICAgICAgIGNvbnN0IGtleSA9IGtleXNbaV07XG4gICAgICAgIGNvbnN0IHByb3AgPSBvYmplY3Rba2V5XTtcblxuICAgICAgICBjYWxsYmFjayhwcm9wLCBrZXksIG9iamVjdCk7XG4gICAgfVxufVxuXG4vKlxuICAgIFNwbGl0IGNvbG9yIHN0cmluZyBpbnRvIG1hcCBvZiBjb2xvciBwcm9wZXJ0aWVzXG5cbiAgICBcInJnYmEoMjU1LCAyNTUsIDI1NSwgMClcIiwgW1wiUmVkXCIsICdHcmVlblwiLCBcIkJsdWVcIiwgXCJBbHBoYVwiXVxuXG4gICAgeyBSZWQ6IDI1NS4uLiB9XG4qL1xuZXhwb3J0IGNvbnN0IGdldENvbG9yVmFsdWVzID0gKHZhbHVlLCBjb2xvclRlcm1zKSA9PiB7XG4gICAgY29uc3QgY29sb3JWYWx1ZXMgPSB7fTtcbiAgICBjb25zdCBjb2xvcnMgPSBzcGxpdENvbW1hRGVsaW1pdGVkKGdldFZhbHVlRnJvbUZ1bmN0aW9uU3RyaW5nKHZhbHVlKSk7XG5cbiAgICBjb2xvclRlcm1zLmZvckVhY2goKHRlcm0sIGkpID0+IGNvbG9yVGVybXNbdGVybV0gPSAoY29sb3JzW2ldICE9PSB1bmRlZmluZWQpID8gY29sb3JzW2ldIDogMSk7XG5cbiAgICByZXR1cm4gY29sb3JWYWx1ZXM7XG59XG5cbi8qXG4gICAgR2V0IHZhbHVlIGZyb20gZnVuY3Rpb24gc3RyaW5nXG5cbiAgICBcInRyYW5zbGF0ZVgoMjBweClcIiAtPiBcIjIwcHhcIlxuKi9cbmV4cG9ydCBjb25zdCBnZXRWYWx1ZUZyb21GdW5jdGlvblN0cmluZyA9ICh2YWx1ZSkgPT4gdmFsdWUuc3Vic3RyaW5nKHZhbHVlLmluZGV4T2YoJygnKSArIDEsIHZhbHVlLmxhc3RJbmRleE9mKCcpJykpO1xuXG4vKlxuICAgIENoZWNrIGlmIHR3byBvYmplY3RzIGhhdmUgY2hhbmdlZCBmcm9tIGVhY2ggb3RoZXJcbiAgICBcbiAgICBAcGFyYW0gW29iamVjdF06IElucHV0IEFcbiAgICBAcGFyYW0gW29iamVjdF06IElucHV0IEJcbiAgICBAcmV0dXJuIFtib29sZWFuXTogVHJ1ZSBpZiBkaWZmZXJlbnRcbiovXG5leHBvcnQgY29uc3QgaGFzQ2hhbmdlZCA9IChhLCBiKSA9PiB7XG4gICAgbGV0IGNoYW5nZWQgPSBmYWxzZTtcblxuICAgIGVhY2goYSwgKHZhbHVlLCBrZXkpID0+IHtcbiAgICAgICAgaWYgKGhhc1Byb3BlcnR5KGIsIGtleSkpIHtcbiAgICAgICAgICAgIGlmICh2YWx1ZSAhPT0gYltrZXldKSB7XG4gICAgICAgICAgICAgICAgY2hhbmdlZCA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjaGFuZ2VkID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIGNoYW5nZWQ7XG59O1xuXG4vKlxuICAgIENoZWNrIGlmIG9iamVjdCBoYXMgcHJvcGVydHkgYW5kIGl0IGlzbid0IHVuZGVmaW5lZFxuXG4gICAgQHBhcmFtIFtvYmplY3RdXG4gICAgQHBhcmFtIFtzdHJpbmddXG4gICAgQHJldHVybiBbYm9vbGVhbl1cbiovXG5leHBvcnQgY29uc3QgaGFzUHJvcGVydHkgPSAob2JqZWN0LCBwcm9wZXJ0eU5hbWUpID0+IG9iamVjdC5oYXNPd25Qcm9wZXJ0eShwcm9wZXJ0eU5hbWUpICYmIG9iamVjdFtwcm9wZXJ0eU5hbWVdICE9PSB1bmRlZmluZWQ7XG5cbi8qXG4gICAgSXMgdXRpbHMgdmFyIGFuIGFycmF5ID8gXG4gICAgXG4gICAgQHBhcmFtOiBWYXJpYWJsZSB0byB0ZXN0XG4gICAgQHJldHVybiBbYm9vbGVhbl06IFJldHVybnMgdHJ1ZSBpZiB1dGlscy52YXJUeXBlID09PSAnQXJyYXknXG4qL1xuZXhwb3J0IGNvbnN0IGlzQXJyYXkgPSAoYXJyKSA9PiB2YXJUeXBlKGFycikgPT09ICdBcnJheSc7XG5cbi8qXG4gICAgSXMgdXRpbHMgdmFyIGEgZnVuY3Rpb24gPyBcbiAgICBcbiAgICBAcGFyYW06IFZhcmlhYmxlIHRvIHRlc3RcbiAgICBAcmV0dXJuIFtib29sZWFuXTogUmV0dXJucyB0cnVlIGlmIHV0aWxzLnZhclR5cGUgPT09ICdGdW5jdGlvbidcbiovXG5leHBvcnQgY29uc3QgaXNGdW5jID0gKG9iaikgPT4gdmFyVHlwZShvYmopID09PSAnRnVuY3Rpb24nO1xuXG4vKlxuICAgIElzIHV0aWxzIHZhciBhIG51bWJlcj9cbiAgICBcbiAgICBAcGFyYW06IFZhcmlhYmxlIHRvIHRlc3RcbiAgICBAcmV0dXJuIFtib29sZWFuXTogUmV0dXJucyB0cnVlIGlmIHR5cGVvZiA9PT0gJ251bWJlcidcbiovXG5leHBvcnQgY29uc3QgaXNOdW0gPSAobnVtKSA9PiB0eXBlb2YgbnVtID09PSAnbnVtYmVyJztcblxuLypcbiAgICBJcyB1dGlscyB2YXIgYW4gb2JqZWN0P1xuICAgIFxuICAgIEBwYXJhbTogVmFyaWFibGUgdG8gdGVzdFxuICAgIEByZXR1cm4gW2Jvb2xlYW5dOiBSZXR1cm5zIHRydWUgaWYgdHlwZW9mID09PSAnb2JqZWN0J1xuKi9cbmV4cG9ydCBjb25zdCBpc09iaiA9IChvYmopID0+IHR5cGVvZiBvYmogPT09ICdvYmplY3QnO1xuXG4vKlxuICAgIElzIHV0aWxzIGEgcmVsYXRpdmUgdmFsdWUgYXNzaWdubWVudD9cbiAgICBcbiAgICBAcGFyYW0gW3N0cmluZ106IFZhcmlhYmxlIHRvIHRlc3RcbiAgICBAcmV0dXJuIFtib29sZWFuXTogSWYgdXRpbHMgbG9va3MgbGlrZSBhIHJlbGF0aXZlIHZhbHVlIGFzc2lnbm1lbnRcbiovXG5leHBvcnQgY29uc3QgaXNSZWxhdGl2ZVZhbHVlID0gKHZhbHVlKSA9PiAodmFsdWUgJiYgdmFsdWUuaW5kZXhPZiAmJiB2YWx1ZS5pbmRleE9mKCc9JykgPiAwKSA/IHRydWUgOiBmYWxzZTtcblxuLypcbiAgICBJcyB1dGlscyB2YXIgYSBzdHJpbmcgPyBcbiAgICBcbiAgICBAcGFyYW06IFZhcmlhYmxlIHRvIHRlc3RcbiAgICBAcmV0dXJuIFtib29sZWFuXTogUmV0dXJucyB0cnVlIGlmIHR5cGVvZiBzdHIgPT09ICdzdHJpbmcnXG4qL1xuZXhwb3J0IGNvbnN0IGlzU3RyaW5nID0gKHN0cikgPT4gdHlwZW9mIHN0ciA9PT0gJ3N0cmluZyc7XG5cbi8qXG4gICAgQHBhcmFtIFtzdHJpbmcgfHwgTm9kZUxpc3RdOlxuICAgICAgICBJZiBzdHJpbmcsIHRyZWF0ZWQgYXMgc2VsZWN0b3IuXG4gICAgICAgIElmIG5vdCwgdHJlYXRlZCBhcyBwcmVleGlzdGluZyBOb2RlTGlzdFxuXG4gICAgQHJldHVybiBbQXJyYXldXG4qL1xuZXhwb3J0IGNvbnN0IHNlbGVjdERvbSA9IChzZWxlY3RvcikgPT4ge1xuICAgIGNvbnN0IG5vZGVzID0gKHR5cGVvZiBzZWxlY3RvciA9PT0gJ3N0cmluZycpID8gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChzZWxlY3RvcikgOiBzZWxlY3RvcjtcbiAgICByZXR1cm4gKG5vZGVzLmxlbmd0aCkgPyBbXS5zbGljZS5jYWxsKG5vZGVzKSA6IFtdLnB1c2gobm9kZXMpO1xufTtcblxuLypcbiAgICBTcGxpdCBjb21tYS1kZWxpbWl0ZWQgc3RyaW5nXG5cbiAgICBcImZvbyxiYXJcIiAtPiBbXCJmb29cIiwgXCJiYXJcIl1cblxuICAgIEBwYXJhbSBbc3RyaW5nXVxuICAgIEByZXR1cm4gW2FycmF5XVxuKi9cbmV4cG9ydCBjb25zdCBzcGxpdENvbW1hRGVsaW1pdGVkID0gKHZhbHVlKSA9PiBpc1N0cmluZyh2YWx1ZSkgPyB2YWx1ZS5zcGxpdCgvLFxccyovKSA6IFt2YWx1ZV07XG5cbi8qXG4gICAgU3BsaXQgc3BhY2UtZGVsaW1pdGVkIHN0cmluZ1xuXG4gICAgXCJmb28gYmFyXCIgLT4gW1wiZm9vXCIsIFwiYmFyXCJdXG5cbiAgICBAcGFyYW0gW3N0cmluZ11cbiAgICBAcmV0dXJuIFthcnJheV1cbiovXG5leHBvcnQgY29uc3Qgc3BsaXRTcGFjZURlbGltaXRlZCA9ICh2YWx1ZSkgPT4gaXNTdHJpbmcodmFsdWUpID8gdmFsdWUuc3BsaXQoJyAnKSA6IFt2YWx1ZV07XG5cbi8qXG4gICAgU3BsaXQgYSB2YWx1ZSBpbnRvIGEgdmFsdWUvdW5pdCBvYmplY3RcbiAgICBcbiAgICAgICAgXCIyMDBweFwiIC0+IHsgdmFsdWU6IDIwMCwgdW5pdDogXCJweFwiIH1cbiAgICAgICAgXG4gICAgQHBhcmFtIFtzdHJpbmddOiBWYWx1ZSB0byBzcGxpdFxuICAgIEByZXR1cm4gW29iamVjdF06IE9iamVjdCB3aXRoIHZhbHVlIGFuZCB1bml0IHByb3BzXG4qL1xuZXhwb3J0IGNvbnN0IHNwbGl0VmFsdWVVbml0ID0gKHZhbHVlKSA9PiB7XG4gICAgY29uc3Qgc3BsaXRWYWwgPSB2YWx1ZS5tYXRjaCgvKC0/XFxkKlxcLj9cXGQqKSguKikvKTtcblxuICAgIHJldHVybiB7XG4gICAgICAgIHZhbHVlOiBwYXJzZUZsb2F0KHNwbGl0VmFsWzFdKSxcbiAgICAgICAgdW5pdDogIHNwbGl0VmFsWzJdXG4gICAgfTtcbn07XG5cbi8qXG4gICAgQ29udmVydCBudW1iZXIgdG8geCBkZWNpbWFsIHBsYWNlc1xuXG4gICAgQHBhcmFtIFtudW1iZXJdXG4gICAgQHBhcmFtIFtudW1iZXJdXG4gICAgQHJldHVybiBbbnVtYmVyXVxuKi9cbmV4cG9ydCBjb25zdCB0b0RlY2ltYWwgPSAobnVtLCBwcmVjaXNpb24gPSAyKSA9PiB7XG4gICAgcHJlY2lzaW9uID0gMTAgKiogcHJlY2lzaW9uO1xuICAgIHJldHVybiBNYXRoLnJvdW5kKG51bSAqIHByZWNpc2lvbikgLyBwcmVjaXNpb247XG59O1xuIl19

/***/ },
/* 16 */
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
	//# sourceMappingURL=data:application/json;base64,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RTs7O0FBQUMsU0FHcEIsTUFBTSxJQUFJLEVBQUUsS0FBSyxDQUFDLEVBQUU7QUFDakIsMkJBQVcsR0FBRyxDQUFDOzs7QUFBQyxhQUduQixNQUFNLElBQUksRUFBRSxLQUFLLENBQUMsRUFBRTtBQUNqQiwrQkFBVyxHQUFHLENBQUMsQ0FBQztpQkFFbkIsTUFBTTtBQUNILCtCQUFXLEdBQUcsVUFBVSxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUM7aUJBQ3BEOztBQUVELGVBQU8sV0FBVyxDQUFDO0tBQ3RCLENBQUE7O0FBRUQsV0FBTyxRQUFRLENBQUM7Q0FDbkIiLCJmaWxlIjoiY3JlYXRlLWJlemllci5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gICAgQmV6aWVyIGZ1bmN0aW9uIGdlbmVyYXRvclxuICAgICAgICBcbiAgICBHYcOrdGFuIFJlbmF1ZGVhdSdzIEJlemllckVhc2luZ1xuICAgIGh0dHBzOi8vZ2l0aHViLmNvbS9ncmUvYmV6aWVyLWVhc2luZy9ibG9iL21hc3Rlci9pbmRleC5qcyAgXG4gICAgaHR0cHM6Ly9naXRodWIuY29tL2dyZS9iZXppZXItZWFzaW5nL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcbiAgICBZb3UncmUgYSBoZXJvXG4gICAgXG4gICAgVXNlXG4gICAgXG4gICAgICAgIHZhciBlYXNlT3V0ID0gbmV3IEJlemllciguMTcsLjY3LC44MywuNjcpLFxuICAgICAgICAgICAgeCA9IGVhc2VPdXQoMC41KTsgLy8gcmV0dXJucyAwLjYyNy4uLlxuKi9cblxuLy8gQ29uc3RhbnRzXG5jb25zdCBORVdUT05fSVRFUkFUSU9OUyA9IDg7XG5jb25zdCBORVdUT05fTUlOX1NMT1BFID0gMC4wMDE7XG5jb25zdCBTVUJESVZJU0lPTl9QUkVDSVNJT04gPSAwLjAwMDAwMDE7XG5jb25zdCBTVUJESVZJU0lPTl9NQVhfSVRFUkFUSU9OUyA9IDEwO1xuY29uc3QgS19TUExJTkVfVEFCTEVfU0laRSA9IDExO1xuY29uc3QgS19TQU1QTEVfU1RFUF9TSVpFID0gMS4wIC8gKEtfU1BMSU5FX1RBQkxFX1NJWkUgLSAxLjApO1xuY29uc3QgRkxPQVRfMzJfU1VQUE9SVEVEID0gKHR5cGVvZiBGbG9hdDMyQXJyYXkgIT09ICd1bmRlZmluZWQnKTtcblxuLy8gSGVscGVyIG1ldGhvZHNcbmNvbnN0IGEgPSAoYTEsIGEyKSA9PiAxLjAgLSAzLjAgKiBhMiArIDMuMCAqIGExO1xuY29uc3QgYiA9IChhMSwgYTIpID0+IDMuMCAqIGEyIC0gNi4wICogYTE7XG5jb25zdCBjID0gKGExKSA9PiAzLjAgKiBhMTtcblxuY29uc3QgZ2V0U2xvcGUgPSAodCwgYTEsIGEyKSA9PiAzLjAgKiBhKGExLCBhMikgKiB0ICogdCArIDIuMCAqIGIoYTEsIGEyKSAqIHQgKyBjKGExKTtcblxuY29uc3QgY2FsY0JlemllciA9ICh0LCBhMSwgYTIpID0+ICgoYShhMSwgYTIpICogdCArIGIoYTEsIGEyKSkgKiB0ICsgYyhhMSkpICogdDtcblxuLypcbiAgICBDcmVhdGUgYSBjdWJpYyBiZXppZXIgcmVzb2x2ZXJcbiovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjdWJpY0JlemllcihtWDEsIG1ZMSwgbVgyLCBtWTIpIHtcbiAgICBjb25zdCBzYW1wbGVWYWx1ZXMgPSBGTE9BVF8zMl9TVVBQT1JURUQgPyBuZXcgRmxvYXQzMkFycmF5KEtfU1BMSU5FX1RBQkxFX1NJWkUpIDogbmV3IEFycmF5KEtfU1BMSU5FX1RBQkxFX1NJWkUpO1xuICAgIGxldCBfcHJlY29tcHV0ZWQgPSBmYWxzZTtcblxuICAgIGNvbnN0IGJpbmFyeVN1YmRpdmlkZSA9IChhWCwgYUEsIGFCKSA9PiB7XG4gICAgICAgIGxldCBpID0gMDtcbiAgICAgICAgbGV0IGN1cnJlbnRYO1xuICAgICAgICBsZXQgY3VycmVudFQ7XG5cbiAgICAgICAgZG8ge1xuICAgICAgICAgICAgY3VycmVudFQgPSBhQSArIChhQiAtIGFBKSAvIDIuMDtcbiAgICAgICAgICAgIGN1cnJlbnRYID0gY2FsY0JlemllcihjdXJyZW50VCwgbVgxLCBtWDIpIC0gYVg7XG4gICAgICAgICAgICBpZiAoY3VycmVudFggPiAwLjApIHtcbiAgICAgICAgICAgICAgICBhQiA9IGN1cnJlbnRUO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBhQSA9IGN1cnJlbnRUO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IHdoaWxlIChNYXRoLmFicyhjdXJyZW50WCkgPiBTVUJESVZJU0lPTl9QUkVDSVNJT04gJiYgKytpIDwgU1VCRElWSVNJT05fTUFYX0lURVJBVElPTlMpO1xuXG4gICAgICAgIHJldHVybiBjdXJyZW50VDtcbiAgICB9XG5cbiAgICBjb25zdCBuZXd0b25SYXBoc29uSXRlcmF0ZSA9IChhWCwgYUd1ZXNzVCkgPT4ge1xuICAgICAgICBsZXQgaSA9IDA7XG4gICAgICAgIGxldCBjdXJyZW50U2xvcGUgPSAwO1xuICAgICAgICBsZXQgY3VycmVudFg7XG5cbiAgICAgICAgZm9yICg7IGkgPCBORVdUT05fSVRFUkFUSU9OUzsgKytpKSB7XG4gICAgICAgICAgICBjdXJyZW50U2xvcGUgPSBnZXRTbG9wZShhR3Vlc3NULCBtWDEsIG1YMik7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGlmIChjdXJyZW50U2xvcGUgPT09IDAuMCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBhR3Vlc3NUO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgICAgICBjdXJyZW50WCA9IGNhbGNCZXppZXIoYUd1ZXNzVCwgbVgxLCBtWDIpIC0gYVg7XG4gICAgICAgICAgICBhR3Vlc3NUIC09IGN1cnJlbnRYIC8gY3VycmVudFNsb3BlO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICByZXR1cm4gYUd1ZXNzVDtcbiAgICB9XG5cbiAgICBjb25zdCBjYWxjU2FtcGxlVmFsdWVzID0gKCkgPT4ge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IEtfU1BMSU5FX1RBQkxFX1NJWkU7ICsraSkge1xuICAgICAgICAgICAgc2FtcGxlVmFsdWVzW2ldID0gY2FsY0JlemllcihpICogS19TQU1QTEVfU1RFUF9TSVpFLCBtWDEsIG1YMik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBnZXRURm9yWCA9IChhWCkgPT4ge1xuICAgICAgICBsZXQgaW50ZXJ2YWxTdGFydCA9IDAuMDtcbiAgICAgICAgbGV0IGN1cnJlbnRTYW1wbGUgPSAxO1xuICAgICAgICBsZXQgbGFzdFNhbXBsZSA9IEtfU1BMSU5FX1RBQkxFX1NJWkUgLSAxO1xuICAgICAgICBsZXQgZGlzdCA9IDAuMDtcbiAgICAgICAgbGV0IGd1ZXNzRm9yVCA9IDAuMDtcbiAgICAgICAgbGV0IGluaXRpYWxTbG9wZSA9IDAuMDtcbiAgICAgICAgICAgIFxuICAgICAgICBmb3IgKDsgY3VycmVudFNhbXBsZSAhPSBsYXN0U2FtcGxlICYmIHNhbXBsZVZhbHVlc1tjdXJyZW50U2FtcGxlXSA8PSBhWDsgKytjdXJyZW50U2FtcGxlKSB7XG4gICAgICAgICAgICBpbnRlcnZhbFN0YXJ0ICs9IEtfU0FNUExFX1NURVBfU0laRTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgLS1jdXJyZW50U2FtcGxlO1xuICAgICAgICBcbiAgICAgICAgZGlzdCA9IChhWCAtIHNhbXBsZVZhbHVlc1tjdXJyZW50U2FtcGxlXSkgLyAoc2FtcGxlVmFsdWVzW2N1cnJlbnRTYW1wbGUrMV0gLSBzYW1wbGVWYWx1ZXNbY3VycmVudFNhbXBsZV0pO1xuICAgICAgICBndWVzc0ZvclQgPSBpbnRlcnZhbFN0YXJ0ICsgZGlzdCAqIEtfU0FNUExFX1NURVBfU0laRTtcbiAgICAgICAgXG4gICAgICAgIGluaXRpYWxTbG9wZSA9IGdldFNsb3BlKGd1ZXNzRm9yVCwgbVgxLCBtWDIpO1xuICAgICAgICBcbiAgICAgICAgLy8gSWYgc2xvcGUgaXMgZ3JlYXRlciB0aGFuIG1pblxuICAgICAgICBpZiAoaW5pdGlhbFNsb3BlID49IE5FV1RPTl9NSU5fU0xPUEUpIHtcbiAgICAgICAgICAgIHJldHVybiBuZXd0b25SYXBoc29uSXRlcmF0ZShhWCwgZ3Vlc3NGb3JUKTtcbiAgICAgICAgLy8gU2xvcGUgaXMgZXF1YWwgdG8gbWluXG4gICAgICAgIH0gZWxzZSBpZiAoaW5pdGlhbFNsb3BlID09PSAwLjApIHtcbiAgICAgICAgICAgIHJldHVybiBndWVzc0ZvclQ7XG4gICAgICAgIC8vIFNsb3BlIGlzIGxlc3MgdGhhbiBtaW5cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBiaW5hcnlTdWJkaXZpZGUoYVgsIGludGVydmFsU3RhcnQsIGludGVydmFsU3RhcnQgKyBLX1NBTVBMRV9TVEVQX1NJWkUpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgcHJlY29tcHV0ZSA9ICgpID0+IHtcbiAgICAgICAgX3ByZWNvbXB1dGVkID0gdHJ1ZTtcbiAgICAgICAgaWYgKG1YMSAhPSBtWTEgfHwgbVgyICE9IG1ZMikge1xuICAgICAgICAgICAgY2FsY1NhbXBsZVZhbHVlcygpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgcmVzb2x2ZXIgPSAoYVgpID0+IHtcbiAgICAgICAgbGV0IHJldHVyblZhbHVlO1xuXG4gICAgICAgIGlmICghX3ByZWNvbXB1dGVkKSB7XG4gICAgICAgICAgICBwcmVjb21wdXRlKCk7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIC8vIElmIGxpbmVhciBncmFkaWVudCwgcmV0dXJuIFggYXMgVFxuICAgICAgICBpZiAobVgxID09PSBtWTEgJiYgbVgyID09PSBtWTIpIHtcbiAgICAgICAgICAgIHJldHVyblZhbHVlID0gYVg7XG4gICAgICAgICAgICBcbiAgICAgICAgLy8gSWYgYXQgc3RhcnQsIHJldHVybiAwXG4gICAgICAgIH0gZWxzZSBpZiAoYVggPT09IDApIHtcbiAgICAgICAgICAgIHJldHVyblZhbHVlID0gMDtcbiAgICAgICAgICAgIFxuICAgICAgICAvLyBJZiBhdCBlbmQsIHJldHVybiAxXG4gICAgICAgIH0gZWxzZSBpZiAoYVggPT09IDEpIHtcbiAgICAgICAgICAgIHJldHVyblZhbHVlID0gMTtcblxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuVmFsdWUgPSBjYWxjQmV6aWVyKGdldFRGb3JYKGFYKSwgbVkxLCBtWTIpO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICByZXR1cm4gcmV0dXJuVmFsdWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlc29sdmVyO1xufVxuIl19

/***/ },
/* 17 */
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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNyZWF0ZS1lYXNpbmcuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O2tCQWdDd0Isb0JBQW9COzs7Ozs7Ozs7OztBQXRCNUMsSUFBTSxZQUFZLEdBQUcsVUFBQyxNQUFNO1dBQUssVUFBQyxRQUFRLEVBQUUsUUFBUTtlQUFLLEFBQUMsUUFBUSxJQUFJLEdBQUcsR0FBSSxNQUFNLENBQUMsQ0FBQyxHQUFHLFFBQVEsRUFBRSxRQUFRLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsTUFBTSxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsUUFBUSxDQUFBLEFBQUMsRUFBRSxRQUFRLENBQUMsQ0FBQSxHQUFJLENBQUM7S0FBQTtDQUFBOzs7Ozs7Ozs7Ozs7QUFBQyxBQVlqSyxJQUFNLGFBQWEsR0FBRyxVQUFDLE1BQU07V0FBSyxVQUFDLFFBQVEsRUFBRSxRQUFRO2VBQUssQ0FBQyxHQUFHLE1BQU0sQ0FBQyxDQUFDLEdBQUcsUUFBUSxFQUFFLFFBQVEsQ0FBQztLQUFBO0NBQUE7Ozs7Ozs7Ozs7QUFBQyxBQVU5RSxTQUFTLG9CQUFvQixDQUFDLE1BQU0sRUFBRTtBQUNqRCxRQUFJLGNBQWMsR0FBRyxVQUFDLFFBQVEsRUFBRSxRQUFRO2VBQUssTUFBTSxDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUM7S0FBQSxDQUFDOztBQUV4RSxrQkFBYyxDQUFDLEVBQUUsR0FBRyxVQUFDLFFBQVEsRUFBRSxRQUFRO2VBQUssTUFBTSxDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUM7S0FBQSxDQUFDO0FBQ3ZFLGtCQUFjLENBQUMsR0FBRyxHQUFHLGFBQWEsQ0FBQyxNQUFNLENBQUMsQ0FBQztBQUMzQyxrQkFBYyxDQUFDLEtBQUssR0FBRyxZQUFZLENBQUMsTUFBTSxDQUFDLENBQUM7O0FBRTVDLFdBQU8sY0FBYyxDQUFDO0NBQ3pCIiwiZmlsZSI6ImNyZWF0ZS1lYXNpbmcuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICAgIE1pcnJvciBlYXNpbmdcbiAgICBcbiAgICBNaXJyb3JzIHRoZSBwcm92aWRlZCBlYXNpbmcgZnVuY3Rpb24sIHVzZWQgaGVyZSBmb3IgbWlycm9yaW5nIGFuXG4gICAgZWFzZUluIGludG8gYW4gZWFzZUluT3V0XG4gICAgXG4gICAgQHBhcmFtIFtudW1iZXJdOiBQcm9ncmVzcywgZnJvbSAwIC0gMSwgb2YgY3VycmVudCBzaGlmdFxuICAgIEBwYXJhbSBbZnVuY3Rpb25dOiBUaGUgZWFzaW5nIGZ1bmN0aW9uIHRvIG1pcnJvclxuICAgIEByZXR1cm5zIFtudW1iZXJdOiBUaGUgZWFzaW5nLWFkanVzdGVkIGRlbHRhXG4qL1xuY29uc3QgbWlycm9yRWFzaW5nID0gKG1ldGhvZCkgPT4gKHByb2dyZXNzLCBzdHJlbmd0aCkgPT4gKHByb2dyZXNzIDw9IDAuNSkgPyBtZXRob2QoMiAqIHByb2dyZXNzLCBzdHJlbmd0aCkgLyAyIDogKDIgLSBtZXRob2QoMiAqICgxIC0gcHJvZ3Jlc3MpLCBzdHJlbmd0aCkpIC8gMjtcbiAgICAgICAgXG4vKlxuICAgIFJldmVyc2UgZWFzaW5nXG4gICAgXG4gICAgUmV2ZXJzZXMgdGhlIG91dHB1dCBvZiB0aGUgcHJvdmlkZWQgZWFzaW5nIGZ1bmN0aW9uLCB1c2VkIGZvciBmbGlwcGluZyBlYXNlSW5cbiAgICBjdXJ2ZSB0byBhbiBlYXNlT3V0LlxuICAgIFxuICAgIEBwYXJhbSBbbnVtYmVyXTogUHJvZ3Jlc3MsIGZyb20gMCAtIDEsIG9mIGN1cnJlbnQgc2hpZnRcbiAgICBAcGFyYW0gW2Z1bmN0aW9uXTogVGhlIGVhc2luZyBmdW5jdGlvbiB0byByZXZlcnNlXG4gICAgQHJldHVybnMgW251bWJlcl06IFRoZSBlYXNpbmctYWRqdXN0ZWQgZGVsdGFcbiovXG5jb25zdCByZXZlcnNlRWFzaW5nID0gKG1ldGhvZCkgPT4gKHByb2dyZXNzLCBzdHJlbmd0aCkgPT4gMSAtIG1ldGhvZCgxIC0gcHJvZ3Jlc3MsIHN0cmVuZ3RoKTtcblxuLypcbiAgICBFYXNpbmcgY2xhc3NcblxuICAgIElmIHByb3ZpZGVkIGVhc2luZyBmdW5jdGlvbiwgcmV0dXJucyBlYXNpbmcgZnVuY3Rpb24gd2l0aCBcbiAgICBpbi9vdXQvaW5PdXQgdmFyaWF0aW9uc1xuXG4gICAgSWYgcHJvdmlkZWQgZm91ciBhcmd1bWVudHMsIHJldHVybnMgbmV3IEJlemllciBjbGFzcyBpbnN0ZWFkLlxuKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZUVhc2luZ0Z1bmN0aW9uKG1ldGhvZCkge1xuICAgIGxldCBlYXNpbmdGdW5jdGlvbiA9IChwcm9ncmVzcywgc3RyZW5ndGgpID0+IG1ldGhvZChwcm9ncmVzcywgc3RyZW5ndGgpO1xuXG4gICAgZWFzaW5nRnVuY3Rpb24uaW4gPSAocHJvZ3Jlc3MsIHN0cmVuZ3RoKSA9PiBtZXRob2QocHJvZ3Jlc3MsIHN0cmVuZ3RoKTtcbiAgICBlYXNpbmdGdW5jdGlvbi5vdXQgPSByZXZlcnNlRWFzaW5nKG1ldGhvZCk7XG4gICAgZWFzaW5nRnVuY3Rpb24uaW5PdXQgPSBtaXJyb3JFYXNpbmcobWV0aG9kKTtcblxuICAgIHJldHVybiBlYXNpbmdGdW5jdGlvbjtcbn1cbiJdfQ==

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _calc = __webpack_require__(14);
	
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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1hcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7a0JBRWUsVUFBQyxJQUFJLEVBQUUsRUFBRSxFQUFLO0FBQ3pCLFFBQU0sU0FBUyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUM7O0FBRTlCLFdBQU8sVUFBQyxLQUFLLEVBQUs7QUFDZCxhQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsU0FBUyxFQUFFLENBQUMsRUFBRSxFQUFFO0FBQ2hDLGdCQUFJLEtBQUssR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLFNBQVMsRUFBRTtBQUNwQyx1QkFBTyxVQVJRLG9CQUFvQixFQVFQLFVBUlMsUUFBUSxFQVFSLFVBUjVDLG9CQUFvQixFQVE2QyxLQUFLLEVBQUUsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQzthQUNwSDtTQUNKO0tBQ0osQ0FBQztDQUNMIiwiZmlsZSI6Im1hcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGdldFByb2dyZXNzRnJvbVZhbHVlLCBnZXRWYWx1ZUZyb21Qcm9ncmVzcywgcmVzdHJpY3QgfSBmcm9tICcuLi9pbmMvY2FsYyc7XG5cbmV4cG9ydCBkZWZhdWx0IChmcm9tLCB0bykgPT4ge1xuICAgIGNvbnN0IG1hcExlbmd0aCA9IGZyb20ubGVuZ3RoO1xuXG4gICAgcmV0dXJuICh2YWx1ZSkgPT4ge1xuICAgICAgICBmb3IgKGxldCBpID0gMTsgaSA8IG1hcExlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAodmFsdWUgPCBmcm9tW2ldIHx8IGkgPT09IG1hcExlbmd0aCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBnZXRWYWx1ZUZyb21Qcm9ncmVzcyhyZXN0cmljdChnZXRQcm9ncmVzc0Zyb21WYWx1ZSh2YWx1ZSwgZnJvbVtpIC0gMV0sIGZyb21baV0pLCAwLCAxKSwgdG9baSAtIDFdLCB0b1tpXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xufSJdfQ==

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports.default = selectActor;
	
	var _Actor = __webpack_require__(2);
	
	var _Actor2 = _interopRequireDefault(_Actor);
	
	var _utils = __webpack_require__(15);
	
	var _css = __webpack_require__(11);
	
	var _css2 = _interopRequireDefault(_css);
	
	var _svg = __webpack_require__(12);
	
	var _svg2 = _interopRequireDefault(_svg);
	
	var _svgPath = __webpack_require__(13);
	
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
	
	var createActor = function (element) {
	    var actor = element[SAVE_PROP];
	
	    if (!actor) {
	        props.element = element;
	        props.onRender = detectRenderer(element);
	        actor = element[SAVE_PROP] = new _Actor2.default(props);
	    }
	
	    return actor;
	};
	
	function selectActor(selector, props) {
	    var elements = (0, _utils.selectDom)(selector);
	    var actors = elements.map(createActor);
	
	    return actors.length > 1 ? actors : actors[0];
	}
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlbGVjdC1hY3Rvci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7a0JBb0N3QixXQUFXOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBN0JuQyxJQUFNLFNBQVMsR0FBRyxhQUFhLENBQUM7O0FBRWhDLElBQU0sY0FBYyxHQUFHLFVBQUMsT0FBTyxFQUFLOztBQUVoQyxRQUFJLE9BQU8sWUFBWSxXQUFXLElBQUksT0FBTyxDQUFDLE9BQU8sS0FBSyxLQUFLLEVBQUU7QUFDN0Q7OztBQUFpQixLQUdwQixNQUFNLElBQUksT0FBTyxZQUFZLFVBQVUsRUFBRTtBQUN0QyxnQkFBSSxPQUFPLENBQUMsT0FBTyxLQUFLLE1BQU0sRUFBRTtBQUM1Qix5Q0FBcUI7YUFDeEIsTUFBTTtBQUNILHFDQUFpQjthQUNwQjtTQUNKO0NBQ0osQ0FBQTs7QUFFRCxJQUFNLFdBQVcsR0FBRyxVQUFDLE9BQU8sRUFBSztBQUM3QixRQUFJLEtBQUssR0FBRyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUM7O0FBRS9CLFFBQUksQ0FBQyxLQUFLLEVBQUU7QUFDUixhQUFLLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztBQUN4QixhQUFLLENBQUMsUUFBUSxHQUFHLGNBQWMsQ0FBQyxPQUFPLENBQUMsQ0FBQztBQUN6QyxhQUFLLEdBQUcsT0FBTyxDQUFDLFNBQVMsQ0FBQyxHQUFHLG9CQUFVLEtBQUssQ0FBQyxDQUFDO0tBQ2pEOztBQUVELFdBQU8sS0FBSyxDQUFDO0NBQ2hCLENBQUE7O0FBRWMsU0FBUyxXQUFXLENBQUMsUUFBUSxFQUFFLEtBQUssRUFBRTtBQUNqRCxRQUFNLFFBQVEsR0FBRyxXQXBDWixTQUFTLEVBb0NhLFFBQVEsQ0FBQyxDQUFDO0FBQ3JDLFFBQU0sTUFBTSxHQUFHLFFBQVEsQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLENBQUM7O0FBRXpDLFdBQU8sQUFBQyxNQUFNLENBQUMsTUFBTSxHQUFHLENBQUMsR0FBSSxNQUFNLEdBQUcsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO0NBQ25EIiwiZmlsZSI6InNlbGVjdC1hY3Rvci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBBY3RvciBmcm9tICcuLi9hY3Rvci9BY3Rvcic7XG5pbXBvcnQgeyBzZWxlY3REb20gfSBmcm9tICcuLi9pbmMvdXRpbHMnO1xuXG5pbXBvcnQgcmVuZGVyQ1NTIGZyb20gJy4uL3JlbmRlci9jc3MnO1xuaW1wb3J0IHJlbmRlclNWRyBmcm9tICcuLi9yZW5kZXIvc3ZnJztcbmltcG9ydCByZW5kZXJTVkdQYXRoIGZyb20gJy4uL3JlbmRlci9zdmctcGF0aCc7XG5cbmNvbnN0IFNBVkVfUFJPUCA9ICdfX3BtX2FjdG9yXyc7XG5cbmNvbnN0IGRldGVjdFJlbmRlcmVyID0gKGVsZW1lbnQpID0+IHtcbiAgICAvLyBJZiBIVE1MRWxlbWVudCBsb2FkIHJlbmRlckNTU1xuICAgIGlmIChlbGVtZW50IGluc3RhbmNlb2YgSFRNTEVsZW1lbnQgfHwgZWxlbWVudC50YWdOYW1lID09PSAnc3ZnJykge1xuICAgICAgICByZXR1cm4gcmVuZGVyQ1NTO1xuXG4gICAgLy8gT3IgU1ZHXG4gICAgfSBlbHNlIGlmIChlbGVtZW50IGluc3RhbmNlb2YgU1ZHRWxlbWVudCkge1xuICAgICAgICBpZiAoZWxlbWVudC50YWdOYW1lID09PSAncGF0aCcpIHtcbiAgICAgICAgICAgIHJldHVybiByZW5kZXJTVkdQYXRoO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIHJlbmRlclNWRztcbiAgICAgICAgfVxuICAgIH1cbn1cblxuY29uc3QgY3JlYXRlQWN0b3IgPSAoZWxlbWVudCkgPT4ge1xuICAgIGxldCBhY3RvciA9IGVsZW1lbnRbU0FWRV9QUk9QXTtcblxuICAgIGlmICghYWN0b3IpIHtcbiAgICAgICAgcHJvcHMuZWxlbWVudCA9IGVsZW1lbnQ7XG4gICAgICAgIHByb3BzLm9uUmVuZGVyID0gZGV0ZWN0UmVuZGVyZXIoZWxlbWVudCk7XG4gICAgICAgIGFjdG9yID0gZWxlbWVudFtTQVZFX1BST1BdID0gbmV3IEFjdG9yKHByb3BzKTtcbiAgICB9XG5cbiAgICByZXR1cm4gYWN0b3I7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHNlbGVjdEFjdG9yKHNlbGVjdG9yLCBwcm9wcykge1xuICAgIGNvbnN0IGVsZW1lbnRzID0gc2VsZWN0RG9tKHNlbGVjdG9yKTtcbiAgICBjb25zdCBhY3RvcnMgPSBlbGVtZW50cy5tYXAoY3JlYXRlQWN0b3IpO1xuXG4gICAgcmV0dXJuIChhY3RvcnMubGVuZ3RoID4gMSkgPyBhY3RvcnMgOiBhY3RvcnNbMF07XG59XG4iXX0=

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports.setDilation = setDilation;
	var hasPerformanceNow = typeof performance !== 'undefined' && performance.now;
	var currentTime = function () {
	    return hasPerformanceNow ? performance.now() : new Date().getTime();
	};
	
	var MAX_ELAPSED = 33;
	
	var base = 0;
	var current = 0;
	var elapsed = 16.7;
	var dilation = 1;
	var lostTime = 0;
	
	exports.default = {
	    update: function (framestamp) {
	        if (base === 0) {
	            current = base = framestamp;
	        }
	
	        var prev = current;
	        var lossAdjusted = framestamp - lostTime;
	        var nonDilatedElapsed = Math.min(lossAdjusted - prev, MAX_ELAPSED);
	        elapsed = nonDilatedElapsed * dilation;
	        current += elapsed;
	        lostTime += nonDilatedElapsed - elapsed;
	    },
	
	    start: function () {
	        return current = currentTime();
	    },
	
	    getElapsed: function () {
	        return elapsed;
	    }
	};
	function setDilation(newDilation) {
	    dilation = newDilation;
	}
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRpbWVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztRQThCZ0IsV0FBVyxHQUFYLFdBQVc7QUE5QjNCLElBQU0saUJBQWlCLEdBQUksT0FBTyxXQUFXLEtBQUssV0FBVyxJQUFJLFdBQVcsQ0FBQyxHQUFHLEFBQUMsQ0FBQztBQUNsRixJQUFNLFdBQVcsR0FBRztXQUFNLGlCQUFpQixHQUFHLFdBQVcsQ0FBQyxHQUFHLEVBQUUsR0FBRyxJQUFJLElBQUksRUFBRSxDQUFDLE9BQU8sRUFBRTtDQUFBLENBQUM7O0FBRXZGLElBQU0sV0FBVyxHQUFHLEVBQUUsQ0FBQzs7QUFFdkIsSUFBSSxJQUFJLEdBQUcsQ0FBQyxDQUFDO0FBQ2IsSUFBSSxPQUFPLEdBQUcsQ0FBQyxDQUFDO0FBQ2hCLElBQUksT0FBTyxHQUFHLElBQUksQ0FBQztBQUNuQixJQUFJLFFBQVEsR0FBRyxDQUFDLENBQUM7QUFDakIsSUFBSSxRQUFRLEdBQUcsQ0FBQyxDQUFDOztrQkFFRjtBQUNYLFVBQU0sRUFBRSxVQUFDLFVBQVUsRUFBSztBQUNwQixZQUFJLElBQUksS0FBSyxDQUFDLEVBQUU7QUFDWixtQkFBTyxHQUFHLElBQUksR0FBRyxVQUFVLENBQUM7U0FDL0I7O0FBRUQsWUFBTSxJQUFJLEdBQUcsT0FBTyxDQUFDO0FBQ3JCLFlBQU0sWUFBWSxHQUFHLFVBQVUsR0FBRyxRQUFRLENBQUM7QUFDM0MsWUFBTSxpQkFBaUIsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLFlBQVksR0FBRyxJQUFJLEVBQUUsV0FBVyxDQUFDLENBQUM7QUFDckUsZUFBTyxHQUFHLGlCQUFpQixHQUFHLFFBQVEsQ0FBQztBQUN2QyxlQUFPLElBQUksT0FBTyxDQUFDO0FBQ25CLGdCQUFRLElBQUksaUJBQWlCLEdBQUcsT0FBTyxDQUFDO0tBQzNDOztBQUVELFNBQUssRUFBRTtlQUFNLE9BQU8sR0FBRyxXQUFXLEVBQUU7S0FBQTs7QUFFcEMsY0FBVSxFQUFFO2VBQU0sT0FBTztLQUFBO0NBQzVCO0FBRU0sU0FBUyxXQUFXLENBQUMsV0FBVyxFQUFFO0FBQ3JDLFlBQVEsR0FBRyxXQUFXLENBQUM7Q0FDMUIiLCJmaWxlIjoidGltZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBoYXNQZXJmb3JtYW5jZU5vdyA9ICh0eXBlb2YgcGVyZm9ybWFuY2UgIT09ICd1bmRlZmluZWQnICYmIHBlcmZvcm1hbmNlLm5vdyk7XG5jb25zdCBjdXJyZW50VGltZSA9ICgpID0+IGhhc1BlcmZvcm1hbmNlTm93ID8gcGVyZm9ybWFuY2Uubm93KCkgOiBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcblxuY29uc3QgTUFYX0VMQVBTRUQgPSAzMztcblxubGV0IGJhc2UgPSAwO1xubGV0IGN1cnJlbnQgPSAwO1xubGV0IGVsYXBzZWQgPSAxNi43O1xubGV0IGRpbGF0aW9uID0gMTtcbmxldCBsb3N0VGltZSA9IDA7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgICB1cGRhdGU6IChmcmFtZXN0YW1wKSA9PiB7XG4gICAgICAgIGlmIChiYXNlID09PSAwKSB7XG4gICAgICAgICAgICBjdXJyZW50ID0gYmFzZSA9IGZyYW1lc3RhbXA7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBwcmV2ID0gY3VycmVudDtcbiAgICAgICAgY29uc3QgbG9zc0FkanVzdGVkID0gZnJhbWVzdGFtcCAtIGxvc3RUaW1lO1xuICAgICAgICBjb25zdCBub25EaWxhdGVkRWxhcHNlZCA9IE1hdGgubWluKGxvc3NBZGp1c3RlZCAtIHByZXYsIE1BWF9FTEFQU0VEKTtcbiAgICAgICAgZWxhcHNlZCA9IG5vbkRpbGF0ZWRFbGFwc2VkICogZGlsYXRpb247XG4gICAgICAgIGN1cnJlbnQgKz0gZWxhcHNlZDtcbiAgICAgICAgbG9zdFRpbWUgKz0gbm9uRGlsYXRlZEVsYXBzZWQgLSBlbGFwc2VkO1xuICAgIH0sXG5cbiAgICBzdGFydDogKCkgPT4gY3VycmVudCA9IGN1cnJlbnRUaW1lKCksXG5cbiAgICBnZXRFbGFwc2VkOiAoKSA9PiBlbGFwc2VkXG59O1xuXG5leHBvcnQgZnVuY3Rpb24gc2V0RGlsYXRpb24obmV3RGlsYXRpb24pIHtcbiAgICBkaWxhdGlvbiA9IG5ld0RpbGF0aW9uO1xufSJdfQ==

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports.default = stagger;
	
	var _Tween = __webpack_require__(4);
	
	var _Tween2 = _interopRequireDefault(_Tween);
	
	var _utils = __webpack_require__(15);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var DEFAULT_INTERVAL = 100;
	var DEFAULT_EASING = _Tween2.default.Easing.LINEAR;
	
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
	                to: numMembers - 1,
	                round: true,
	                ease: propsIsInterval ? DEFAULT_EASING : props.ease || DEFAULT_EASING
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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0YWdnZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O2tCQU13QixPQUFPOzs7Ozs7Ozs7O0FBSC9CLElBQU0sZ0JBQWdCLEdBQUcsR0FBRyxDQUFDO0FBQzdCLElBQU0sY0FBYyxHQUFHLGdCQUFNLE1BQU0sQ0FBQyxNQUFNLENBQUM7O0FBRTVCLFNBQVMsT0FBTyxDQUFDLEtBQUssRUFBRSxLQUFLLEVBQUUsUUFBUSxFQUFFO0FBQ3BELFFBQU0sV0FBVyxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUM7QUFDakMsUUFBTSxlQUFlLEdBQUcsV0FQbkIsS0FBSyxFQU9vQixLQUFLLENBQUMsQ0FBQztBQUNyQyxRQUFNLFFBQVEsR0FBRyxlQUFlLEdBQUcsS0FBSyxHQUFHLEtBQUssQ0FBQyxRQUFRLElBQUksZ0JBQWdCLENBQUM7QUFDOUUsUUFBSSxTQUFTLEdBQUcsQ0FBQyxDQUFDLENBQUM7O0FBRW5CLFFBQU0sWUFBWSxHQUFHLG9CQUFVO0FBQzNCLGdCQUFRLEVBQUUsUUFBUSxHQUFHLFdBQVc7QUFDaEMsY0FBTSxFQUFFO0FBQ0osYUFBQyxFQUFFO0FBQ0Msb0JBQUksRUFBRSxDQUFDO0FBQ1Asa0JBQUUsRUFBRSxVQUFVLEdBQUcsQ0FBQztBQUNsQixxQkFBSyxFQUFFLElBQUk7QUFDWCxvQkFBSSxFQUFFLGVBQWUsR0FBRyxjQUFjLEdBQUcsS0FBSyxDQUFDLElBQUksSUFBSSxjQUFjO2FBQ3hFO1NBQ0o7QUFDRCxnQkFBUSxFQUFFLGdCQUFXO2dCQUFSLENBQUMsUUFBRCxDQUFDOztBQUNWLGdCQUFJLFFBQVEsR0FBRyxTQUFTLEdBQUcsQ0FBQyxDQUFDOztBQUU3QixtQkFBTyxRQUFRLElBQUksQ0FBQyxFQUFFLFFBQVEsRUFBRSxFQUFFO0FBQzlCLHdCQUFRLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxFQUFFLFFBQVEsQ0FBQyxDQUFDO2FBQ3ZDOztBQUVELHFCQUFTLEdBQUcsQ0FBQyxDQUFDO1NBQ2pCO0FBQ0Qsa0JBQVUsRUFBRSxlQUFlLEdBQUcsU0FBUyxHQUFHLEtBQUssQ0FBQyxVQUFVO0tBQzdELENBQUMsQ0FBQzs7QUFFSCxnQkFBWSxDQUFDLEtBQUssRUFBRSxDQUFDOztBQUVyQixXQUFPLFlBQVksQ0FBQztDQUN2QiIsImZpbGUiOiJzdGFnZ2VyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFR3ZWVuIGZyb20gJy4uL2FjdGlvbnMvVHdlZW4nO1xuaW1wb3J0IHsgaXNOdW0gfSBmcm9tICcuL3V0aWxzJztcblxuY29uc3QgREVGQVVMVF9JTlRFUlZBTCA9IDEwMDtcbmNvbnN0IERFRkFVTFRfRUFTSU5HID0gVHdlZW4uRWFzaW5nLkxJTkVBUjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc3RhZ2dlcihhcnJheSwgcHJvcHMsIGNhbGxiYWNrKSB7XG4gICAgY29uc3QgYXJyYXlMZW5ndGggPSBhcnJheS5sZW5ndGg7XG4gICAgY29uc3QgcHJvcHNJc0ludGVydmFsID0gaXNOdW0ocHJvcHMpO1xuICAgIGNvbnN0IGludGVydmFsID0gcHJvcHNJc0ludGVydmFsID8gcHJvcHMgOiBwcm9wcy5pbnRlcnZhbCB8fCBERUZBVUxUX0lOVEVSVkFMO1xuICAgIGxldCBwcmV2SW5kZXggPSAtMTtcblxuICAgIGNvbnN0IHN0YWdnZXJUd2VlbiA9IG5ldyBUd2Vlbih7XG4gICAgICAgIGR1cmF0aW9uOiBpbnRlcnZhbCAqIGFycmF5TGVuZ3RoLFxuICAgICAgICB2YWx1ZXM6IHtcbiAgICAgICAgICAgIGk6IHtcbiAgICAgICAgICAgICAgICBmcm9tOiAwLFxuICAgICAgICAgICAgICAgIHRvOiBudW1NZW1iZXJzIC0gMSxcbiAgICAgICAgICAgICAgICByb3VuZDogdHJ1ZSxcbiAgICAgICAgICAgICAgICBlYXNlOiBwcm9wc0lzSW50ZXJ2YWwgPyBERUZBVUxUX0VBU0lORyA6IHByb3BzLmVhc2UgfHwgREVGQVVMVF9FQVNJTkdcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgb25SZW5kZXI6ICh7IGkgfSkgPT4ge1xuICAgICAgICAgICAgbGV0IGdhcEluZGV4ID0gcHJldkluZGV4ICsgMTtcblxuICAgICAgICAgICAgZm9yICg7IGdhcEluZGV4IDw9IGk7IGdhcEluZGV4KyspIHtcbiAgICAgICAgICAgICAgICBjYWxsYmFjayhhcnJheVtnYXBJbmRleF0sIGdhcEluZGV4KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcHJldkluZGV4ID0gaTtcbiAgICAgICAgfSxcbiAgICAgICAgb25Db21wbGV0ZTogcHJvcHNJc0ludGVydmFsID8gdW5kZWZpbmVkIDogcHJvcHMub25Db21wbGV0ZVxuICAgIH0pO1xuXG4gICAgc3RhZ2dlclR3ZWVuLnN0YXJ0KCk7XG5cbiAgICByZXR1cm4gc3RhZ2dlclR3ZWVuO1xufSJdfQ==

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _defaultProps = __webpack_require__(44);
	
	exports.default = {
	    defaultProps: _defaultProps.opacity
	};
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFscGhhLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztrQkFFZTtBQUNYLGdCQUFZLGdCQUhQLE9BQU8sQUFHUztDQUN4QiIsImZpbGUiOiJhbHBoYS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IG9wYWNpdHkgfSBmcm9tICcuL3NldHRpbmdzL2RlZmF1bHQtcHJvcHMnO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgZGVmYXVsdFByb3BzOiBvcGFjaXR5XG59OyJdfQ==

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports.default = {
	    defaultProps: {
	        unit: 'deg'
	    }
	};
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFuZ2xlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztrQkFBZTtBQUNYLGdCQUFZLEVBQUU7QUFDVixZQUFJLEVBQUUsS0FBSztLQUNkO0NBQ0oiLCJmaWxlIjoiYW5nbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCB7XG4gICAgZGVmYXVsdFByb3BzOiB7XG4gICAgICAgIHVuaXQ6ICdkZWcnXG4gICAgfVxufTsiXX0=

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _utils = __webpack_require__(15);
	
	var _px = __webpack_require__(30);
	
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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImF4ZXMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7a0JBSWU7QUFDWCxnQkFBWSxFQUFFLGFBQVksWUFBWTs7Ozs7Ozs7OztBQVV0QyxTQUFLLEVBQUUsVUFBQyxLQUFLLEVBQUs7QUFDZCxZQUFNLFdBQVcsR0FBRyxXQWhCRixtQkFBbUIsRUFnQkcsS0FBSyxDQUFDLENBQUM7QUFDL0MsWUFBTSxPQUFPLEdBQUcsV0FBVyxDQUFDLE1BQU0sQ0FBQztBQUNuQyxZQUFNLFVBQVUsR0FBRztBQUNmLGFBQUMsRUFBRSxXQUFXLENBQUMsQ0FBQyxDQUFDO0FBQ2pCLGFBQUMsRUFBRSxBQUFDLE9BQU8sR0FBRyxDQUFDLEdBQUksV0FBVyxDQUFDLENBQUMsQ0FBQyxHQUFHLFdBQVcsQ0FBQyxDQUFDLENBQUM7U0FDckQsQ0FBQzs7QUFFRixZQUFJLE9BQU8sR0FBRyxDQUFDLEVBQUU7QUFDYixzQkFBVSxDQUFDLENBQUMsR0FBRyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDakM7O0FBRUQsZUFBTyxVQUFVLENBQUM7S0FDckI7O0FBRUQsV0FBTyxFQUFFLFVBQUMsTUFBTTtlQUFLLFdBOUJoQixlQUFlLEVBOEJpQixNQUFNLGNBNUJ0QyxJQUFJLEVBNEIwQyxHQUFHLENBQUM7S0FBQTtDQUMxRCIsImZpbGUiOiJheGVzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlRGVsaW1pdGVkLCBzcGxpdFNwYWNlRGVsaW1pdGVkIH0gZnJvbSAnLi4vaW5jL3V0aWxzJztcbmltcG9ydCBweFZhbHVlVHlwZSBmcm9tICcuL3B4JztcbmltcG9ydCB7IGF4ZXMgfSBmcm9tICcuL3NldHRpbmdzL2RpY3Rpb25hcnknO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgZGVmYXVsdFByb3BzOiBweFZhbHVlVHlwZS5kZWZhdWx0UHJvcHMsXG4gICAgICAgIFxuICAgIC8qXG4gICAgICAgIFNwbGl0IHBvc2l0aW9ucyBpbiBmb3JtYXQgXCJYIFkgWlwiXG4gICAgICAgIFxuICAgICAgICBAcGFyYW0gW3N0cmluZ106IFBvc2l0aW9uIHZhbHVlc1xuICAgICAgICAgICAgXCIyMCUgMzAlIDBcIiAtPiB7MjAlLCAzMCUsIDB9XG4gICAgICAgICAgICBcIjIwJSAzMCVcIiAtPiB7MjAlLCAzMCV9XG4gICAgICAgICAgICBcIjIwJVwiIC0+IHsyMCUsIDIwJX1cbiAgICAqL1xuICAgIHNwbGl0OiAodmFsdWUpID0+IHtcbiAgICAgICAgY29uc3Qgc3BsaXRWYWx1ZXMgPSBzcGxpdFNwYWNlRGVsaW1pdGVkKHZhbHVlKTtcbiAgICAgICAgY29uc3QgbnVtQXhlcyA9IHNwbGl0VmFsdWVzLmxlbmd0aDtcbiAgICAgICAgY29uc3Qgc3BsaXRWYWx1ZSA9IHtcbiAgICAgICAgICAgIFg6IHNwbGl0VmFsdWVzWzBdLFxuICAgICAgICAgICAgWTogKG51bUF4ZXMgPiAxKSA/IHNwbGl0VmFsdWVzWzFdIDogc3BsaXRWYWx1ZXNbMF1cbiAgICAgICAgfTtcblxuICAgICAgICBpZiAobnVtQXhlcyA+IDIpIHtcbiAgICAgICAgICAgIHNwbGl0VmFsdWUuWiA9IHNwbGl0VmFsdWVzWzJdO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHNwbGl0VmFsdWU7XG4gICAgfSxcblxuICAgIGNvbWJpbmU6ICh2YWx1ZXMpID0+IGNyZWF0ZURlbGltaXRlZCh2YWx1ZXMsIGF4ZXMsICcgJylcbn07XG4iXX0=

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	exports.__esModule = true;
	
	var _utils = __webpack_require__(15);
	
	var _rgb = __webpack_require__(31);
	
	var _rgb2 = _interopRequireDefault(_rgb);
	
	var _hsl = __webpack_require__(28);
	
	var _hsl2 = _interopRequireDefault(_hsl);
	
	var _hex = __webpack_require__(27);
	
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
	
	    combine: function (value) {
	        return values.Red !== undefined ? _rgb2.default.combine(values) : _hsl2.default.combine(values);
	    }
	};
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbG9yLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLQSxJQUFNLFVBQVUsR0FBRyw2Q0FBZSxDQUFDO0FBQ25DLElBQU0sYUFBYSxHQUFHLFVBQVUsQ0FBQyxNQUFNLENBQUM7O2tCQUV6QjtBQUNYLGdCQUFZLGVBQU8sY0FBSSxZQUFZLEVBQUssY0FBSSxZQUFZLENBQUU7O0FBRTFELFFBQUksRUFBRSxVQUFDLEtBQUs7ZUFBSyxjQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxjQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxjQUFJLElBQUksQ0FBQyxLQUFLLENBQUM7S0FBQTs7QUFFdEUsU0FBSyxFQUFFLFVBQUMsS0FBSyxFQUFLO0FBQ2QsYUFBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLGFBQWEsRUFBRSxDQUFDLEVBQUUsRUFBRTtBQUNwQyxnQkFBSSxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFO0FBQzNCLHVCQUFPLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7YUFDckM7U0FDSjtLQUNKOztBQUVELFdBQU8sRUFBRSxVQUFDLEtBQUs7ZUFBSyxBQUFDLE1BQU0sQ0FBQyxHQUFHLEtBQUssU0FBUyxHQUFJLGNBQUksT0FBTyxDQUFDLE1BQU0sQ0FBQyxHQUFHLGNBQUksT0FBTyxDQUFDLE1BQU0sQ0FBQztLQUFBO0NBQzdGIiwiZmlsZSI6ImNvbG9yLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZWFjaCB9IGZyb20gJy4uL2luYy91dGlscyc7XG5pbXBvcnQgcmdiIGZyb20gJy4vcmdiJztcbmltcG9ydCBoc2wgZnJvbSAnLi9oc2wnO1xuaW1wb3J0IGhleCBmcm9tICcuL2hleCc7XG5cbmNvbnN0IGNvbG9yVHlwZXMgPSBbcmdiLCBoc2wsIGhleF07XG5jb25zdCBudW1Db2xvclR5cGVzID0gY29sb3JUeXBlcy5sZW5ndGg7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBkZWZhdWx0UHJvcHM6IHsgLi4ucmdiLmRlZmF1bHRQcm9wcywgLi4uaHNsLmRlZmF1bHRQcm9wcyB9LFxuXG4gICAgdGVzdDogKHZhbHVlKSA9PiByZ2IudGVzdCh2YWx1ZSkgfHwgaGV4LnRlc3QodmFsdWUpIHx8IGhzbC50ZXN0KHZhbHVlKSxcblxuICAgIHNwbGl0OiAodmFsdWUpID0+IHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBudW1Db2xvclR5cGVzOyBpKyspIHtcbiAgICAgICAgICAgIGlmIChjb2xvclR5cGVzW2ldLnRlc3QodmFsdWUpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGNvbG9yVHlwZXNbaV0uc3BsaXQodmFsdWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSxcblxuICAgIGNvbWJpbmU6ICh2YWx1ZSkgPT4gKHZhbHVlcy5SZWQgIT09IHVuZGVmaW5lZCkgPyByZ2IuY29tYmluZSh2YWx1ZXMpIDogaHNsLmNvbWJpbmUodmFsdWVzKVxufTtcbiJdfQ==

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _utils = __webpack_require__(15);
	
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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBsZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBRUEsSUFBTSxXQUFXLEdBQUcsa0JBQWtCLENBQUM7QUFDdkMsSUFBTSxhQUFhLEdBQUcsVUFBQyxLQUFLO1dBQUssSUFBSSxHQUFHLEtBQUssR0FBRyxHQUFHO0NBQUEsQ0FBQzs7a0JBRXJDOztBQUVYLFFBQUksRUFBRSxVQUFDLEtBQUssRUFBSztBQUNiLFlBQU0sT0FBTyxHQUFHLEtBQUssQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLENBQUM7QUFDekMsZUFBUSxXQVRELE9BQU8sRUFTRSxPQUFPLENBQUMsSUFBSSxPQUFPLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBRTtLQUNuRDs7QUFFRCxZQUFRLEVBQUUsVUFBQyxLQUFLLEVBQUs7QUFDakIsWUFBSSxPQUFPLEdBQUcsQ0FBQyxDQUFDO0FBQ2hCLGVBQU8sS0FBSyxDQUFDLE9BQU8sQ0FBQyxXQUFXLEVBQUU7bUJBQU0sYUFBYSxDQUFDLE9BQU8sRUFBRSxDQUFDO1NBQUEsQ0FBQyxDQUFDO0tBQ3JFOztBQUVELFNBQUssRUFBRSxVQUFDLEtBQUssRUFBSztBQUNkLFlBQU0sVUFBVSxHQUFHLEVBQUUsQ0FBQzs7QUFFdEIsYUFBSyxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUMsQ0FBQyxPQUFPLENBQUMsVUFBQyxLQUFLLEVBQUUsQ0FBQzttQkFBSyxVQUFVLENBQUMsQ0FBQyxDQUFDLEdBQUcsS0FBSztTQUFBLENBQUMsQ0FBQzs7QUFFdEUsZUFBTyxVQUFVLENBQUM7S0FDckI7O0FBRUQsV0FBTyxFQUFFLFVBQUMsTUFBTSxFQUFFLFFBQVEsRUFBSztBQUMzQixtQkExQkMsSUFBSSxFQTBCQSxNQUFNLEVBQUUsVUFBQyxLQUFLLEVBQUUsR0FBRzttQkFBSyxRQUFRLEdBQUcsUUFBUSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLEVBQUUsS0FBSyxDQUFDO1NBQUEsQ0FBQyxDQUFDO0FBQ3JGLGVBQU8sUUFBUSxDQUFDO0tBQ25COztDQUVKIiwiZmlsZSI6ImNvbXBsZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBlYWNoLCBpc0FycmF5IH0gZnJvbSBcIi4uL2luYy91dGlsc1wiO1xuXG5jb25zdCBGTE9BVF9SRUdFWCA9IC8oLSk/KFxcZFtcXGRcXC5dKikvZztcbmNvbnN0IGdlbmVyYXRlVG9rZW4gPSAodG9rZW4pID0+ICckeycgKyB0b2tlbiArICd9JztcblxuZXhwb3J0IGRlZmF1bHQge1xuXG4gICAgdGVzdDogKHZhbHVlKSA9PiB7XG4gICAgICAgIGNvbnN0IG1hdGNoZXMgPSB2YWx1ZS5tYXRjaChGTE9BVF9SRUdFWCk7XG4gICAgICAgIHJldHVybiAoaXNBcnJheShtYXRjaGVzKSAmJiBtYXRjaGVzLmxlbmd0aCA+IDEpO1xuICAgIH0sXG5cbiAgICB0ZW1wbGF0ZTogKHZhbHVlKSA9PiB7XG4gICAgICAgIGxldCBjb3VudGVyID0gMDtcbiAgICAgICAgcmV0dXJuIHZhbHVlLnJlcGxhY2UoRkxPQVRfUkVHRVgsICgpID0+IGdlbmVyYXRlVG9rZW4oY291bnRlcisrKSk7XG4gICAgfSxcblxuICAgIHNwbGl0OiAodmFsdWUpID0+IHtcbiAgICAgICAgY29uc3Qgc3BsaXRWYWx1ZSA9IHt9O1xuICAgICAgICBcbiAgICAgICAgdmFsdWUubWF0Y2goRkxPQVRfUkVHRVgpLmZvckVhY2goKHZhbHVlLCBpKSA9PiBzcGxpdFZhbHVlW2ldID0gdmFsdWUpO1xuXG4gICAgICAgIHJldHVybiBzcGxpdFZhbHVlO1xuICAgIH0sXG5cbiAgICBjb21iaW5lOiAodmFsdWVzLCB0ZW1wbGF0ZSkgPT4ge1xuICAgICAgICBlYWNoKHZhbHVlcywgKHZhbHVlLCBrZXkpID0+IHRlbXBsYXRlID0gdGVtcGxhdGUucmVwbGFjZShnZW5lcmF0ZVRva2VuKGtleSksIHZhbHVlKSk7XG4gICAgICAgIHJldHVybiB0ZW1wbGF0ZTtcbiAgICB9XG5cbn07Il19

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _rgb = __webpack_require__(31);
	
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
	
	    combine: function (value) {
	        return _rgb2.default.combine(values);
	    }
	};
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O2tCQUVlO0FBQ1gsZ0JBQVksRUFBRSxjQUFJLFlBQVk7O0FBRTlCLFFBQUksRUFBRSxVQUFDLEtBQUs7ZUFBTSxLQUFLLElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7S0FBQzs7QUFFbkQsU0FBSyxFQUFFLFVBQUMsS0FBSyxFQUFLO0FBQ2QsWUFBSSxDQUFDLFlBQUE7WUFBRSxDQUFDLFlBQUE7WUFBRSxDQUFDLFlBQUE7OztBQUFDLEFBR1osWUFBSSxLQUFLLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtBQUNsQixhQUFDLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7QUFDdkIsYUFBQyxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0FBQ3ZCLGFBQUMsR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUM7OztBQUFDLFNBRzFCLE1BQU07QUFDSCxpQkFBQyxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0FBQ3ZCLGlCQUFDLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7QUFDdkIsaUJBQUMsR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztBQUN2QixpQkFBQyxJQUFJLENBQUMsQ0FBQztBQUNQLGlCQUFDLElBQUksQ0FBQyxDQUFDO0FBQ1AsaUJBQUMsSUFBSSxDQUFDLENBQUM7YUFDVjs7QUFFRCxlQUFPO0FBQ0gsZUFBRyxFQUFFLFFBQVEsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDO0FBQ3BCLGlCQUFLLEVBQUUsUUFBUSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUM7QUFDdEIsZ0JBQUksRUFBRSxRQUFRLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQztBQUNyQixpQkFBSyxFQUFFLENBQUM7U0FDWCxDQUFDO0tBQ0w7O0FBRUQsV0FBTyxFQUFFLFVBQUMsS0FBSztlQUFLLGNBQUksT0FBTyxDQUFDLE1BQU0sQ0FBQztLQUFBO0NBQzFDIiwiZmlsZSI6ImhleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCByZ2IgZnJvbSAnLi9yZ2InO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgZGVmYXVsdFByb3BzOiByZ2IuZGVmYXVsdFByb3BzLFxuXG4gICAgdGVzdDogKHZhbHVlKSA9PiAodmFsdWUgJiYgdmFsdWUuaW5kZXhPZignIycpID4gLTEpLFxuXG4gICAgc3BsaXQ6ICh2YWx1ZSkgPT4ge1xuICAgICAgICBsZXQgciwgZywgYjtcblxuICAgICAgICAvLyBJZiB3ZSBoYXZlIDYgY2hhcmFjdGVycywgaWUgI0ZGMDAwMFxuICAgICAgICBpZiAodmFsdWUubGVuZ3RoID4gNCkge1xuICAgICAgICAgICAgciA9IHZhbHVlLnN1YnN0cigxLCAyKTtcbiAgICAgICAgICAgIGcgPSB2YWx1ZS5zdWJzdHIoMywgMik7XG4gICAgICAgICAgICBiID0gdmFsdWUuc3Vic3RyKDUsIDIpO1xuXG4gICAgICAgIC8vIE9yIHdlIGhhdmUgMyBjaGFyYWN0ZXJzLCBpZSAjRjAwXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByID0gdmFsdWUuc3Vic3RyKDEsIDEpO1xuICAgICAgICAgICAgZyA9IHZhbHVlLnN1YnN0cigyLCAxKTtcbiAgICAgICAgICAgIGIgPSB2YWx1ZS5zdWJzdHIoMywgMSk7XG4gICAgICAgICAgICByICs9IHI7XG4gICAgICAgICAgICBnICs9IGc7XG4gICAgICAgICAgICBiICs9IGI7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgUmVkOiBwYXJzZUludChyLCAxNiksXG4gICAgICAgICAgICBHcmVlbjogcGFyc2VJbnQoZywgMTYpLFxuICAgICAgICAgICAgQmx1ZTogcGFyc2VJbnQoYiwgMTYpLFxuICAgICAgICAgICAgQWxwaGE6IDFcbiAgICAgICAgfTtcbiAgICB9LFxuXG4gICAgY29tYmluZTogKHZhbHVlKSA9PiByZ2IuY29tYmluZSh2YWx1ZXMpXG59OyJdfQ==

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _defaultProps = __webpack_require__(44);
	
	var _dictionary = __webpack_require__(45);
	
	var _utils = __webpack_require__(15);
	
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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhzbC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O2tCQUllO0FBQ1gsZ0JBQVksRUFBRTtBQUNWLFdBQUcsRUFBRTtBQUNELGVBQUcsRUFBRSxDQUFDO0FBQ04sZUFBRyxFQUFFLEdBQUc7U0FDWDtBQUNELGtCQUFVLGdCQVZULE9BQU8sQUFVVztBQUNuQixpQkFBUyxnQkFYUixPQUFPLEFBV1U7QUFDbEIsYUFBSyxnQkFaSyxPQUFPLEFBWUg7S0FDakI7O0FBRUQsUUFBSSxFQUFFLFVBQUMsS0FBSztlQUFNLEtBQUssSUFBSSxLQUFLLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztLQUFDOztBQUVyRCxTQUFLLEVBQUUsVUFBQyxLQUFLO2VBQUssV0FmMEIsY0FBYyxFQWV6QixLQUFLLGNBaEJqQyxHQUFHLENBZ0J5QztLQUFBOztBQUVqRCxXQUFPLEVBQUUsVUFBQyxNQUFNO2VBQUssV0FqQkMsb0JBQW9CLEVBaUJBLFdBakJyQyxlQUFlLEVBaUJzQyxNQUFNLGNBbEIzRCxHQUFHLEVBa0JvRSxJQUFJLEVBQUUsQ0FBQyxDQUFDLEVBQUUsTUFBTSxDQUFDO0tBQUE7Q0FDaEciLCJmaWxlIjoiaHNsLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgcGVyY2VudCwgb3BhY2l0eSB9IGZyb20gJy4vc2V0dGluZ3MvZGVmYXVsdC1wcm9wcyc7XG5pbXBvcnQgeyBoc2wgYXMgaHNsVGVybXMgfSBmcm9tICcuL3NldHRpbmdzL2RpY3Rpb25hcnknO1xuaW1wb3J0IHsgY3JlYXRlRGVsaW1pdGVkLCBjcmVhdGVGdW5jdGlvblN0cmluZywgZ2V0Q29sb3JWYWx1ZXMgfSBmcm9tICcuLi9pbmMvdXRpbHMnO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgZGVmYXVsdFByb3BzOiB7XG4gICAgICAgIEh1ZToge1xuICAgICAgICAgICAgbWluOiAwLFxuICAgICAgICAgICAgbWF4OiAzNjBcbiAgICAgICAgfSxcbiAgICAgICAgU2F0dXJhdGlvbjogcGVyY2VudCxcbiAgICAgICAgTGlnaHRuZXNzOiBwZXJjZW50LFxuICAgICAgICBBbHBoYTogb3BhY2l0eVxuICAgIH0sXG5cbiAgICB0ZXN0OiAodmFsdWUpID0+ICh2YWx1ZSAmJiB2YWx1ZS5pbmRleE9mKCdoc2wnKSA+IC0xKSxcblxuICAgIHNwbGl0OiAodmFsdWUpID0+IGdldENvbG9yVmFsdWVzKHZhbHVlLCBoc2xUZXJtcyksXG5cbiAgICBjb21iaW5lOiAodmFsdWVzKSA9PiBjcmVhdGVGdW5jdGlvblN0cmluZyhjcmVhdGVEZWxpbWl0ZWQodmFsdWVzLCBoc2xUZXJtcywgJywgJywgMiksICdoc2xhJylcbn07XG4iXX0=

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _dictionary = __webpack_require__(45);
	
	var _utils = __webpack_require__(15);
	
	var _px = __webpack_require__(30);
	
	var _px2 = _interopRequireDefault(_px);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	    defaultProps: _px2.default.defaultProps,
	
	    /*
	        Split dimensions in format "Top Right Bottom Left"
	        
	        @param [string]: Dimension values
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
	        var jumpBack = numDimensions !== 1 ? 2 : 1;
	        var j = 0;
	
	        for (var i = 0; i < 4; i++) {
	            splitValue[_dictionary.positions[i]] = splitPositions[j];
	
	            // Jump back (to start) counter if we've reached the end of our values
	            j++;
	            j = j === numDimensions ? j - jumpBack : j;
	        }
	
	        return splitValue;
	    },
	
	    combine: function (values) {
	        return (0, _utils.createDelimited)(values, _dictionary.positions, ' ');
	    }
	};
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBvc2l0aW9ucy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztrQkFJZTtBQUNYLGdCQUFZLEVBQUUsYUFBWSxZQUFZOzs7Ozs7Ozs7Ozs7O0FBYXRDLFNBQUssRUFBRSxVQUFDLEtBQUssRUFBSztBQUNkLFlBQU0sVUFBVSxHQUFHLEVBQUUsQ0FBQztBQUN0QixZQUFNLGNBQWMsR0FBRyxXQW5CTCxtQkFBbUIsRUFtQk0sS0FBSyxDQUFDLENBQUM7QUFDbEQsWUFBTSxZQUFZLEdBQUcsY0FBYyxDQUFDLE1BQU0sQ0FBQztBQUMzQyxZQUFNLFFBQVEsR0FBRyxBQUFDLGFBQWEsS0FBSyxDQUFDLEdBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztBQUMvQyxZQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7O0FBRVYsYUFBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRTtBQUN4QixzQkFBVSxDQUFDLFlBMUJkLFNBQVMsQ0EwQmUsQ0FBQyxDQUFDLENBQUMsR0FBRyxjQUFjLENBQUMsQ0FBQyxDQUFDOzs7QUFBQyxBQUc3QyxhQUFDLEVBQUUsQ0FBQztBQUNKLGFBQUMsR0FBRyxBQUFDLENBQUMsS0FBSyxhQUFhLEdBQUksQ0FBQyxHQUFHLFFBQVEsR0FBRyxDQUFDLENBQUM7U0FDaEQ7O0FBRUQsZUFBTyxVQUFVLENBQUM7S0FDckI7O0FBRUQsV0FBTyxFQUFFLFVBQUMsTUFBTTtlQUFLLFdBbkNoQixlQUFlLEVBbUNpQixNQUFNLGNBcEN0QyxTQUFTLEVBb0MwQyxHQUFHLENBQUM7S0FBQTtDQUMvRCIsImZpbGUiOiJwb3NpdGlvbnMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBwb3NpdGlvbnMgfSBmcm9tICcuL3NldHRpbmdzL2RpY3Rpb25hcnknO1xuaW1wb3J0IHsgY3JlYXRlRGVsaW1pdGVkLCBzcGxpdFNwYWNlRGVsaW1pdGVkIH0gZnJvbSAnLi4vaW5jL3V0aWxzJztcbmltcG9ydCBweFZhbHVlVHlwZSBmcm9tICcuL3B4JztcblxuZXhwb3J0IGRlZmF1bHQge1xuICAgIGRlZmF1bHRQcm9wczogcHhWYWx1ZVR5cGUuZGVmYXVsdFByb3BzLFxuXG4gICAgLypcbiAgICAgICAgU3BsaXQgZGltZW5zaW9ucyBpbiBmb3JtYXQgXCJUb3AgUmlnaHQgQm90dG9tIExlZnRcIlxuICAgICAgICBcbiAgICAgICAgQHBhcmFtIFtzdHJpbmddOiBEaW1lbnNpb24gdmFsdWVzXG4gICAgICAgICAgICBcIjIwcHggMCAzMHB4IDQwcHhcIiAtPiB7MjBweCwgMCwgMzBweCwgNDBweH1cbiAgICAgICAgICAgIFwiMjBweCAwIDMwcHhcIiAtPiB7MjBweCwgMCwgMzBweCwgMH1cbiAgICAgICAgICAgIFwiMjBweCAwXCIgLT4gezIwcHgsIDAsIDIwcHgsIDB9XG4gICAgICAgICAgICBcIjIwcHhcIiAtPiB7MjBweCwgMjBweCwgMjBweCwgMjBweH1cbiAgICAgICAgXG4gICAgICAgIEByZXR1cm4gW29iamVjdF06IE9iamVjdCB3aXRoIFQvUi9CL0wgbWV0cmljc1xuICAgICovXG4gICAgc3BsaXQ6ICh2YWx1ZSkgPT4ge1xuICAgICAgICBjb25zdCBzcGxpdFZhbHVlID0ge307XG4gICAgICAgIGNvbnN0IHNwbGl0UG9zaXRpb25zID0gc3BsaXRTcGFjZURlbGltaXRlZCh2YWx1ZSk7XG4gICAgICAgIGNvbnN0IG51bVBvc2l0aW9ucyA9IHNwbGl0UG9zaXRpb25zLmxlbmd0aDtcbiAgICAgICAgY29uc3QganVtcEJhY2sgPSAobnVtRGltZW5zaW9ucyAhPT0gMSkgPyAyIDogMTtcbiAgICAgICAgbGV0IGogPSAwO1xuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgNDsgaSsrKSB7XG4gICAgICAgICAgICBzcGxpdFZhbHVlW3Bvc2l0aW9uc1tpXV0gPSBzcGxpdFBvc2l0aW9uc1tqXTtcblxuICAgICAgICAgICAgLy8gSnVtcCBiYWNrICh0byBzdGFydCkgY291bnRlciBpZiB3ZSd2ZSByZWFjaGVkIHRoZSBlbmQgb2Ygb3VyIHZhbHVlc1xuICAgICAgICAgICAgaisrO1xuICAgICAgICAgICAgaiA9IChqID09PSBudW1EaW1lbnNpb25zKSA/IGogLSBqdW1wQmFjayA6IGo7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gc3BsaXRWYWx1ZTtcbiAgICB9LFxuXG4gICAgY29tYmluZTogKHZhbHVlcykgPT4gY3JlYXRlRGVsaW1pdGVkKHZhbHVlcywgcG9zaXRpb25zLCAnICcpXG59OyJdfQ==

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports.default = {
	    defaultProps: {
	        unit: 'px'
	    }
	};
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInB4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztrQkFBZTtBQUNYLGdCQUFZLEVBQUU7QUFDVixZQUFJLEVBQUUsSUFBSTtLQUNiO0NBQ0oiLCJmaWxlIjoicHguanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCB7XG4gICAgZGVmYXVsdFByb3BzOiB7XG4gICAgICAgIHVuaXQ6ICdweCdcbiAgICB9XG59OyJdfQ==

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _utils = __webpack_require__(15);
	
	var _dictionary = __webpack_require__(45);
	
	var _defaultProps = __webpack_require__(44);
	
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
	
	    combine: function (value) {
	        return (0, _utils.createFunctionString)((0, _utils.createDelimited)(values, _dictionary.rgb, ', ', 2), 'rgba');
	    }
	};
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJnYi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O2tCQUllO0FBQ1gsZ0JBQVksRUFBRTtBQUNWLFdBQUcsZ0JBSkYsR0FBRyxBQUlXO0FBQ2YsYUFBSyxnQkFMSixHQUFHLEFBS2E7QUFDakIsWUFBSSxnQkFOSCxHQUFHLEFBTVk7QUFDaEIsYUFBSyxnQkFQZSxPQUFPLEFBT047S0FDeEI7O0FBRUQsUUFBSSxFQUFFLFVBQUMsS0FBSztlQUFNLEtBQUssSUFBSSxLQUFLLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztLQUFDOztBQUVyRCxTQUFLLEVBQUUsVUFBQyxLQUFLO2VBQUssV0FkMEIsY0FBYyxFQWN6QixLQUFLLGNBYmpDLEdBQUcsQ0FheUM7S0FBQTs7QUFFakQsV0FBTyxFQUFFLFVBQUMsS0FBSztlQUFLLFdBaEJFLG9CQUFvQixFQWdCRCxXQWhCcEMsZUFBZSxFQWdCcUMsTUFBTSxjQWYxRCxHQUFHLEVBZW1FLElBQUksRUFBRSxDQUFDLENBQUMsRUFBRSxNQUFNLENBQUM7S0FBQTtDQUMvRiIsImZpbGUiOiJyZ2IuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVEZWxpbWl0ZWQsIGNyZWF0ZUZ1bmN0aW9uU3RyaW5nLCBnZXRDb2xvclZhbHVlcyB9IGZyb20gJy4uL2luYy91dGlscyc7XG5pbXBvcnQgeyByZ2IgYXMgcmdiVGVybXMgfSBmcm9tICcuL3NldHRpbmdzL2RpY3Rpb25hcnknO1xuaW1wb3J0IHsgcmdiIGFzIGRlZmF1bHRSR0IsIG9wYWNpdHkgYXMgZGVmYXVsdE9wYWNpdHkgfSBmcm9tICcuL3NldHRpbmdzL2RlZmF1bHQtcHJvcHMnO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgZGVmYXVsdFByb3BzOiB7XG4gICAgICAgIFJlZDogZGVmYXVsdFJHQixcbiAgICAgICAgR3JlZW46IGRlZmF1bHRSR0IsXG4gICAgICAgIEJsdWU6IGRlZmF1bHRSR0IsXG4gICAgICAgIEFscGhhOiBkZWZhdWx0T3BhY2l0eVxuICAgIH0sXG5cbiAgICB0ZXN0OiAodmFsdWUpID0+ICh2YWx1ZSAmJiB2YWx1ZS5pbmRleE9mKCdyZ2InKSA+IC0xKSxcblxuICAgIHNwbGl0OiAodmFsdWUpID0+IGdldENvbG9yVmFsdWVzKHZhbHVlLCByZ2JUZXJtcyksXG5cbiAgICBjb21iaW5lOiAodmFsdWUpID0+IGNyZWF0ZUZ1bmN0aW9uU3RyaW5nKGNyZWF0ZURlbGltaXRlZCh2YWx1ZXMsIHJnYlRlcm1zLCAnLCAnLCAyKSwgJ3JnYmEnKVxufTsiXX0=

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	exports.default = {
	    defaultProps: {
	        current: 1
	    }
	};
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNjYWxlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztrQkFBZTtBQUNYLGdCQUFZLEVBQUU7QUFDVixlQUFPLEVBQUUsQ0FBQztLQUNiO0NBQ0oiLCJmaWxlIjoic2NhbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCB7XG4gICAgZGVmYXVsdFByb3BzOiB7XG4gICAgICAgIGN1cnJlbnQ6IDFcbiAgICB9XG59OyJdfQ==

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	exports.__esModule = true;
	
	var _color = __webpack_require__(25);
	
	var _color2 = _interopRequireDefault(_color);
	
	var _px = __webpack_require__(30);
	
	var _dictionary = __webpack_require__(45);
	
	var _utils = __webpack_require__(15);
	
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
	            if (hasReachedColor || _color2.default.test(thisBit)) {
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
	
	    combine: function (value) {
	        return createDelimited(values, shadowWithoutColorTerms, ' ') + _color2.default.combine(values);
	    }
	};
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNoYWRvdy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLQSxJQUFNLHVCQUF1QixHQUFHLFlBSHZCLE1BQU0sQ0FHNkIsS0FBSyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQzs7a0JBRXpDO0FBQ1gsZ0JBQVksZUFDTCxnQkFBTSxZQUFZO0FBQ3JCLFNBQUMsTUFUQSxZQUFZLEFBU0k7QUFDakIsU0FBQyxNQVZBLFlBQVksQUFVSTtBQUNqQixjQUFNLE1BWEwsWUFBWSxBQVdTO0FBQ3RCLGNBQU0sTUFaTCxZQUFZLEFBWVM7TUFDekI7O0FBRUQsU0FBSyxFQUFFLFVBQUMsS0FBSyxFQUFLO0FBQ2QsWUFBTSxJQUFJLEdBQUcsV0FkWixtQkFBbUIsRUFjYSxLQUFLLENBQUMsQ0FBQztBQUN4QyxZQUFJLGVBQWUsR0FBRyxLQUFLLENBQUM7QUFDNUIsWUFBSSxTQUFTLEdBQUcsRUFBRSxDQUFDO0FBQ25CLFlBQUksVUFBVSxHQUFHLEVBQUUsQ0FBQzs7QUFFcEIsWUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFDLEdBQUcsRUFBRSxDQUFDLEVBQUs7O0FBRXJCLGdCQUFJLGVBQWUsSUFBSSxnQkFBTSxJQUFJLENBQUMsT0FBTyxDQUFDLEVBQUU7QUFDeEMsK0JBQWUsR0FBRyxJQUFJLENBQUM7QUFDdkIseUJBQVMsSUFBSSxHQUFHOzs7QUFBQyxhQUdwQixNQUFNO0FBQ0gsOEJBQVUsQ0FBQyxZQTVCbEIsTUFBTSxDQTRCd0IsQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUM7aUJBQ3BDO1NBQ0osQ0FBQyxDQUFDOztBQUVILFlBQU0sZUFBZSxHQUFHLGdCQUFNLEtBQUssQ0FBQyxTQUFTLENBQUMsQ0FBQzs7QUFFL0MsNEJBQVksVUFBVSxJQUFFLGVBQWUsRUFBZixlQUFlLElBQUc7S0FDN0M7O0FBRUQsV0FBTyxFQUFFLFVBQUMsS0FBSztlQUFLLGVBQWUsQ0FBQyxNQUFNLEVBQUUsdUJBQXVCLEVBQUUsR0FBRyxDQUFDLEdBQUcsZ0JBQU0sT0FBTyxDQUFDLE1BQU0sQ0FBQztLQUFBO0NBQ3BHIiwiZmlsZSI6InNoYWRvdy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjb2xvciBmcm9tICcuL2NvbG9yJztcbmltcG9ydCB7IGRlZmF1bHRQcm9wcyBhcyBweERlZmF1bHRQcm9wcyB9IGZyb20gJy4vcHgnO1xuaW1wb3J0IHsgc2hhZG93IGFzIHNoYWRvd1Rlcm1zIH0gZnJvbSAnLi9zZXR0aW5ncy9kaWN0aW9uYXJ5JztcbmltcG9ydCB7IHNwbGl0U3BhY2VEZWxpbWl0ZWQgfSBmcm9tICcuLi9pbmMvdXRpbHMnO1xuXG5jb25zdCBzaGFkb3dXaXRob3V0Q29sb3JUZXJtcyA9IHNoYWRvd1Rlcm1zLnNsaWNlKDAsIDQpO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgZGVmYXVsdFByb3BzOiB7XG4gICAgICAgIC4uLmNvbG9yLmRlZmF1bHRQcm9wcyxcbiAgICAgICAgWDogcHhEZWZhdWx0UHJvcHMsXG4gICAgICAgIFk6IHB4RGVmYXVsdFByb3BzLFxuICAgICAgICBSYWRpdXM6IHB4RGVmYXVsdFByb3BzLFxuICAgICAgICBTcHJlYWQ6IHB4RGVmYXVsdFByb3BzXG4gICAgfSxcblxuICAgIHNwbGl0OiAodmFsdWUpID0+IHtcbiAgICAgICAgY29uc3QgYml0cyA9IHNwbGl0U3BhY2VEZWxpbWl0ZWQodmFsdWUpO1xuICAgICAgICBsZXQgaGFzUmVhY2hlZENvbG9yID0gZmFsc2U7XG4gICAgICAgIGxldCBjb2xvclByb3AgPSAnJztcbiAgICAgICAgbGV0IHNwbGl0VmFsdWUgPSB7fTtcblxuICAgICAgICBiaXRzLmZvckVhY2goKGJpdCwgaSkgPT4ge1xuICAgICAgICAgICAgLy8gSWYgd2UndmUgcmVhY2hlZCB0aGUgY29sb3IgcHJvcHMsIGFwcGVuZCB0byBjb2xvciBzdHJpbmdcbiAgICAgICAgICAgIGlmIChoYXNSZWFjaGVkQ29sb3IgfHwgY29sb3IudGVzdCh0aGlzQml0KSkge1xuICAgICAgICAgICAgICAgIGhhc1JlYWNoZWRDb2xvciA9IHRydWU7XG4gICAgICAgICAgICAgICAgY29sb3JQcm9wICs9IGJpdDtcblxuICAgICAgICAgICAgLy8gRWxzZSBwcm9jZXNzIHNoYWRvdyB2YWx1ZVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBzcGxpdFZhbHVlW3NoYWRvd1Rlcm1zW2ldXSA9IGJpdDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgY29uc3Qgc3BsaXRDb2xvclByb3BzID0gY29sb3Iuc3BsaXQoY29sb3JQcm9wKTtcblxuICAgICAgICByZXR1cm4geyAuLi5zcGxpdFZhbHVlLCBzcGxpdENvbG9yUHJvcHMgfTtcbiAgICB9LFxuXG4gICAgY29tYmluZTogKHZhbHVlKSA9PiBjcmVhdGVEZWxpbWl0ZWQodmFsdWVzLCBzaGFkb3dXaXRob3V0Q29sb3JUZXJtcywgJyAnKSArIGNvbG9yLmNvbWJpbmUodmFsdWVzKVxufTtcbiJdfQ==

/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	exports.__esModule = true;
	
	var _utils = __webpack_require__(15);
	
	var _loop = __webpack_require__(46);
	
	var loop = _interopRequireWildcard(_loop);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Process = (function () {
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
	})();
	
	exports.default = Process;
	;
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlByb2Nlc3MuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztJQUNZLElBQUk7Ozs7OztJQUVLLE9BQU87Ozs7OztBQUt4QixhQUxpQixPQUFPLENBS1osS0FBSyxFQUFFLE1BQU0sRUFBRTs4QkFMVixPQUFPOztBQU1wQixZQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQyxDQUFDO0FBQ2pDLFlBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7O0FBRWhCLFlBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxJQUFJLEtBQUssQ0FBQztBQUM5QixZQUFJLENBQUMsRUFBRSxHQUFHLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztBQUM5QixZQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztLQUN6Qjs7QUFaZ0IsV0FBTyxXQWN4QixHQUFHLGdCQUFDLEtBQUssRUFBRTs7O0FBQ1AsbUJBbEJDLElBQUksRUFrQkEsS0FBSyxFQUFFLFVBQUMsS0FBSyxFQUFFLEdBQUc7bUJBQUssTUFBSyxHQUFHLENBQUMsR0FBRyxLQUFLO1NBQUEsQ0FBQyxDQUFDO0FBQy9DLGVBQU8sSUFBSSxDQUFDO0tBQ2Y7O0FBakJnQixXQUFPLFdBbUJ4QixLQUFLLG9CQUFHO0FBQ0osWUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7QUFDckIsWUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsRUFBRSxFQUFFLElBQUksQ0FBQyxDQUFDO0FBQzdCLGVBQU8sSUFBSSxDQUFDO0tBQ2Y7O0FBdkJnQixXQUFPLFdBeUJ4QixJQUFJLG1CQUFHO0FBQ0gsWUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7QUFDdEIsWUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7QUFDekIsZUFBTyxJQUFJLENBQUM7S0FDZjs7QUE3QmdCLFdBQU8sV0ErQnhCLElBQUksbUJBQUc7OztBQUNILFlBQUksQ0FBQyxTQUFTLEdBQUcsWUFBTTtBQUNuQixtQkFBSyxJQUFJLEVBQUUsQ0FBQztBQUNaLG1CQUFLLFNBQVMsR0FBRyxTQUFTLENBQUM7U0FDOUIsQ0FBQzs7QUFFRixZQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7O0FBRWIsZUFBTyxJQUFJLENBQUM7S0FDZjs7Ozs7OztBQXhDZ0IsV0FBTyxXQStDeEIsZUFBZSw4QkFBRztBQUNkLGVBQU8sRUFBRSxDQUFDO0tBQ2I7Ozs7Ozs7OztBQWpEZ0IsV0FBTyxXQTBEeEIsT0FBTyxvQkFBQyxLQUFLLEVBQUU7QUFDWCxlQUFPLElBQUksSUFBSSxDQUFDLFdBQVcsY0FBTSxJQUFJLElBQUUsS0FBSyxFQUFMLEtBQUssSUFBRyxDQUFDO0tBQ25EOztXQTVEZ0IsT0FBTzs7O2tCQUFQLE9BQU87QUE2RDNCLENBQUMiLCJmaWxlIjoiUHJvY2Vzcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGVhY2ggfSBmcm9tICcuLi9pbmMvdXRpbHMnO1xuaW1wb3J0ICogYXMgbG9vcCBmcm9tICcuL2xvb3AnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQcm9jZXNzIHtcbiAgICAvKlxuICAgICAgICBbb2JqZWN0XTogUHJvcGVydGllc1xuICAgICAgICBbYm9vbGVhbl0gKG9wdGlvbmFsKTogSXMgUHJvY2VzcyBsYXp5P1xuICAgICovXG4gICAgY29uc3RydWN0b3IocHJvcHMsIGlzTGF6eSkge1xuICAgICAgICB0aGlzLnNldCh0aGlzLmdldERlZmF1bHRQcm9wcygpKTtcbiAgICAgICAgdGhpcy5zZXQocHJvcHMpO1xuXG4gICAgICAgIHRoaXMuaXNMYXp5ID0gaXNMYXp5IHx8IGZhbHNlO1xuICAgICAgICB0aGlzLmlkID0gbG9vcC5nZXRQcm9jZXNzSWQoKTtcbiAgICAgICAgdGhpcy5pc0FjdGl2ZSA9IGZhbHNlO1xuICAgIH1cblxuICAgIHNldChwcm9wcykge1xuICAgICAgICBlYWNoKHByb3BzLCAodmFsdWUsIGtleSkgPT4gdGhpc1trZXldID0gdmFsdWUpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBzdGFydCgpIHtcbiAgICAgICAgdGhpcy5pc0FjdGl2ZSA9IHRydWU7XG4gICAgICAgIGxvb3AuYWN0aXZhdGUodGhpcy5pZCwgdGhpcyk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIHN0b3AoKSB7XG4gICAgICAgIHRoaXMuaXNBY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgbG9vcC5kZWFjdGl2YXRlKHRoaXMuaWQpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBvbmNlKCkge1xuICAgICAgICB0aGlzLm9uQ2xlYW51cCA9ICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuc3RvcCgpO1xuICAgICAgICAgICAgdGhpcy5vbkNsZWFudXAgPSB1bmRlZmluZWQ7XG4gICAgICAgIH07XG5cbiAgICAgICAgdGhpcy5zdGFydCgpO1xuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIC8qXG4gICAgICAgICMgR2V0IGRlZmF1bHQgQWN0aW9uIHByb3BlcnRpZXNcblxuICAgICAgICBAcmV0dXJuIFtvYmplY3RdXG4gICAgKi9cbiAgICBnZXREZWZhdWx0UHJvcHMoKSB7XG4gICAgICAgIHJldHVybiB7fTtcbiAgICB9XG5cbiAgICAvKlxuICAgICAgICAjIEV4dGVuZCB0aGlzIFByb2Nlc3Mgd2l0aCBuZXcgcHJvcGVydGllc1xuICAgICAgICAjIyBSZXR1cm5zIG5ldyBpbnN0YW5jZSBvZiB0aGlzIFByb2Nlc3MncyBgcHJvdG90eXBlYCB3aXRoIGV4aXN0aW5nIGFuZCBuZXcgcHJvcGVydGllc1xuXG4gICAgICAgIEBwYXJhbSBbb2JqZWN0XSAob3B0aW9uYWwpXG4gICAgICAgIEByZXR1cm4gW1Byb2Nlc3NdXG4gICAgKi9cbiAgICBpbmhlcml0KHByb3BzKSB7XG4gICAgICAgIHJldHVybiBuZXcgdGhpcy5jb25zdHJ1Y3Rvcih7IC4uLnRoaXMsIHByb3BzIH0pO1xuICAgIH1cbn07XG4iXX0=

/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _createEasing = __webpack_require__(17);
	
	var _createEasing2 = _interopRequireDefault(_createEasing);
	
	var _utils = __webpack_require__(15);
	
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
	
	// Utility functions
	var generatePowerEasing = function (strength) {
	    return function (progress, strength) {
	        return baseEasing.ease(progress, strength);
	    };
	};
	
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
	
	exports.default = baseEasing;
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByZXNldC1lYXNpbmcuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBOEJBLElBQU0scUJBQXFCLEdBQUcsS0FBSyxDQUFDO0FBQ3BDLElBQU0sb0JBQW9CLEdBQUcsQ0FBQzs7O0FBQUMsQUFHL0IsSUFBTSxtQkFBbUIsR0FBRyxVQUFBLFFBQVE7V0FBSSxVQUFDLFFBQVEsRUFBRSxRQUFRO2VBQUssVUFBVSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDO0tBQUE7Q0FBQTs7Ozs7Ozs7QUFBQyxBQVFwRyxJQUFJLFVBQVUsR0FBRztBQUNiLFFBQUksRUFBRSxVQUFDLFFBQVE7WUFBRSxRQUFRLHlEQUFHLG9CQUFvQjt3QkFBSyxRQUFRLEVBQUksUUFBUTtLQUFBO0FBQ3pFLFFBQUksRUFBRSxVQUFBLFFBQVE7ZUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0tBQUE7QUFDbkQsUUFBSSxFQUFFLFVBQUMsUUFBUTtZQUFFLFFBQVEseURBQUcscUJBQXFCO2VBQUssQUFBQyxRQUFRLEdBQUcsUUFBUSxJQUFLLENBQUMsUUFBUSxHQUFHLENBQUMsQ0FBQSxHQUFJLFFBQVEsR0FBRyxRQUFRLENBQUEsQUFBQztLQUFBO0NBQ3ZILENBQUM7O0FBRUYsQ0FBQyxPQUFPLEVBQUUsT0FBTyxFQUFFLE9BQU8sQ0FBQyxDQUFDLE9BQU8sQ0FBQyxVQUFDLFVBQVUsRUFBRSxDQUFDO1dBQUssVUFBVSxDQUFDLFVBQVUsQ0FBQyxHQUFHLG1CQUFtQixDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7Q0FBQSxDQUFDOzs7QUFBQyxBQUc1RyxXQXhCUyxJQUFJLEVBd0JSLFVBQVUsRUFBRSxVQUFDLFFBQVEsRUFBRSxHQUFHLEVBQUs7QUFDaEMsUUFBSSxjQUFjLEdBQUcsNEJBQWEsUUFBUSxDQUFDLENBQUM7QUFDNUMsY0FBVSxDQUFJLEdBQUcsUUFBSyxHQUFHLGNBQWMsQ0FBQyxFQUFFLENBQUM7QUFDM0MsY0FBVSxDQUFJLEdBQUcsU0FBTSxHQUFHLGNBQWMsQ0FBQyxHQUFHLENBQUM7QUFDN0MsY0FBVSxDQUFJLEdBQUcsV0FBUSxHQUFHLGNBQWMsQ0FBQyxLQUFLLENBQUM7Q0FDcEQsQ0FBQyxDQUFDOztBQUVILFVBQVUsQ0FBQyxNQUFNLEdBQUcsVUFBQSxRQUFRO1dBQUksUUFBUTtDQUFBLENBQUM7QUFDekMsVUFBVSxDQUFDLFVBQVUsR0FBRyxVQUFDLFFBQVE7UUFBRSxRQUFRLHlEQUFHLHFCQUFxQjtXQUMvRCxBQUFDLENBQUMsUUFBUSxJQUFFLENBQUMsQ0FBQSxHQUFJLENBQUMsR0FBSSxHQUFHLEdBQUcsVUFBVSxDQUFDLE1BQU0sQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDLEdBQUksR0FBRyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsSUFBSSxRQUFRLEdBQUcsQ0FBQyxDQUFBLEFBQUMsQ0FBQyxDQUFBLEFBQUM7Q0FBQSxDQUFDOztrQkFFeEcsVUFBVSIsImZpbGUiOiJwcmVzZXQtZWFzaW5nLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAgICBFYXNpbmcgZnVuY3Rpb25zXG4gICAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIFxuICAgIEdlbmVyYXRlcyBhbmQgcHJvdmlkZXMgZWFzaW5nIGZ1bmN0aW9ucyBiYXNlZCBvbiBiYXNlRnVuY3Rpb24gZGVmaW5pdGlvbnNcbiAgICBcbiAgICBBIGNhbGwgdG8gZWFzaW5nRnVuY3Rpb24uZ2V0KCdmdW5jdGlvbk5hbWUnKSByZXR1cm5zIGEgZnVuY3Rpb24gdGhhdCBjYW4gYmUgcGFzc2VkOlxuICAgICAgICBAcGFyYW0gW251bWJlcl06IFByb2dyZXNzIDAtMVxuICAgICAgICBAcGFyYW0gW251bWJlcl0gKG9wdGlvbmFsKTogQW1wIG1vZGlmaWVyLCBvbmx5IGFjY2VwdGVkIGluIHNvbWUgZWFzaW5nIGZ1bmN0aW9uc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYW5kIGlzIHVzZWQgdG8gYWRqdXN0IG92ZXJhbGwgc3RyZW5ndGhcbiAgICAgICAgQHJldHVybiBbbnVtYmVyXTogRWFzZWQgcHJvZ3Jlc3NcbiAgICAgICAgXG4gICAgV2UgY2FuIGdlbmVyYXRlIG5ldyBmdW5jdGlvbnMgYnkgc2VuZGluZyBhbiBlYXNpbmcgZnVuY3Rpb24gdGhyb3VnaCBlYXNpbmdGdW5jdGlvbi5leHRlbmQobmFtZSwgbWV0aG9kKS5cbiAgICBXaGljaCB3aWxsIG1ha2UgbmFtZUluLCBuYW1lT3V0IGFuZCBuYW1lSW5PdXQgZnVuY3Rpb25zIGF2YWlsYWJsZSB0byB1c2UuXG4gICAgICAgIFxuICAgIEVhc2luZyBmdW5jdGlvbnMgZnJvbSBSb2JlcnQgUGVubmVyXG4gICAgaHR0cDovL3d3dy5yb2JlcnRwZW5uZXIuY29tL2Vhc2luZy9cbiAgICAgICAgXG4gICAgQmV6aWVyIGN1cnZlIGludGVycHJldG9yIGNyZWF0ZWQgZnJvbSBHYcOrdGFuIFJlbmF1ZGVhdSdzIG9yaWdpbmFsIEJlemllckVhc2luZyAgXG4gICAgaHR0cHM6Ly9naXRodWIuY29tL2dyZS9iZXppZXItZWFzaW5nL2Jsb2IvbWFzdGVyL2luZGV4LmpzICBcbiAgICBodHRwczovL2dpdGh1Yi5jb20vZ3JlL2Jlemllci1lYXNpbmcvYmxvYi9tYXN0ZXIvTElDRU5TRVxuXG4gICAgQW50aWNpcGF0ZSBlYXNpbmcgY3JlYXRlZCBieSBFbGxpb3QgR2lub1xuICAgIGh0dHBzOi8vdHdpdHRlci5jb20vRWxsaW90R2Vub1xuKi9cbi8vIEltcG9ydHNcbmltcG9ydCBjcmVhdGVFYXNpbmcgZnJvbSAnLi9jcmVhdGUtZWFzaW5nJztcbmltcG9ydCB7IGVhY2ggfSBmcm9tICcuLi8uLi9pbmMvdXRpbHMnO1xuXG4vLyBWYWx1ZXNcbmNvbnN0IERFRkFVTFRfQkFDS19TVFJFTkdUSCA9IDEuNTI1O1xuY29uc3QgREVGQVVMVF9QT1dfU1RSRU5HVEggPSAyO1xuXG4vLyBVdGlsaXR5IGZ1bmN0aW9uc1xuY29uc3QgZ2VuZXJhdGVQb3dlckVhc2luZyA9IHN0cmVuZ3RoID0+IChwcm9ncmVzcywgc3RyZW5ndGgpID0+IGJhc2VFYXNpbmcuZWFzZShwcm9ncmVzcywgc3RyZW5ndGgpO1xuXG4vKlxuICAgIEVhY2ggb2YgdGhlc2UgYmFzZSBmdW5jdGlvbnMgaXMgYW4gZWFzZUluXG4gICAgXG4gICAgT24gaW5pdCwgd2UgdXNlIC5taXJyb3IgYW5kIC5yZXZlcnNlIHRvIGdlbmVyYXRlIGVhc2VJbk91dCBhbmRcbiAgICBlYXNlT3V0IGZ1bmN0aW9ucyByZXNwZWN0aXZlbHkuXG4qL1xubGV0IGJhc2VFYXNpbmcgPSB7XG4gICAgZWFzZTogKHByb2dyZXNzLCBzdHJlbmd0aCA9IERFRkFVTFRfUE9XX1NUUkVOR1RIKSA9PiBwcm9ncmVzcyAqKiBzdHJlbmd0aCxcbiAgICBjaXJjOiBwcm9ncmVzcyA9PiAxIC0gTWF0aC5zaW4oTWF0aC5hY29zKHByb2dyZXNzKSksXG4gICAgYmFjazogKHByb2dyZXNzLCBzdHJlbmd0aCA9IERFRkFVTFRfQkFDS19TVFJFTkdUSCkgPT4gKHByb2dyZXNzICogcHJvZ3Jlc3MpICogKChzdHJlbmd0aCArIDEpICogcHJvZ3Jlc3MgLSBzdHJlbmd0aClcbn07XG5cblsnY3ViaWMnLCAncXVhcnQnLCAncXVpbnQnXS5mb3JFYWNoKChlYXNpbmdOYW1lLCBpKSA9PiBiYXNlRWFzaW5nW2Vhc2luZ05hbWVdID0gZ2VuZXJhdGVQb3dlckVhc2luZyhpICsgMykpO1xuXG4vLyBHZW5lcmF0ZSBpbi9vdXQvaW5PdXQgdmFyaWF0aW9uc1xuZWFjaChiYXNlRWFzaW5nLCAoYmFzZUVhc2UsIGtleSkgPT4ge1xuICAgIGxldCBlYXNpbmdGdW5jdGlvbiA9IGNyZWF0ZUVhc2luZyhiYXNlRWFzZSk7XG4gICAgYmFzZUVhc2luZ1tgJHtrZXl9SW5gXSA9IGVhc2luZ0Z1bmN0aW9uLmluO1xuICAgIGJhc2VFYXNpbmdbYCR7a2V5fU91dGBdID0gZWFzaW5nRnVuY3Rpb24ub3V0O1xuICAgIGJhc2VFYXNpbmdbYCR7a2V5fUluT3V0YF0gPSBlYXNpbmdGdW5jdGlvbi5pbk91dDtcbn0pO1xuXG5iYXNlRWFzaW5nLmxpbmVhciA9IHByb2dyZXNzID0+IHByb2dyZXNzO1xuYmFzZUVhc2luZy5hbnRpY2lwYXRlID0gKHByb2dyZXNzLCBzdHJlbmd0aCA9IERFRkFVTFRfQkFDS19TVFJFTkdUSCkgPT5cbiAgICAoKHByb2dyZXNzKj0yKSA8IDEpID8gMC41ICogYmFzZUVhc2luZy5iYWNrSW4ocHJvZ3Jlc3MsIHN0cmVuZ3RoKSA6ICAwLjUgKiAoMiAtIE1hdGgucG93KDIsIC0xMCAqIChwcm9ncmVzcyAtIDEpKSk7XG5cbmV4cG9ydCBkZWZhdWx0IGJhc2VFYXNpbmc7Il19

/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	var TRANSLATE = 'translate';
	
	exports.default = {
	    x: TRANSLATE + 'X',
	    y: TRANSLATE + 'Y',
	    z: TRANSLATE + 'Z'
	};
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0YXRlLW1hcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxJQUFNLFNBQVMsR0FBRyxXQUFXLENBQUM7O2tCQUVmO0FBQ1gsS0FBQyxFQUFFLFNBQVMsR0FBRyxHQUFHO0FBQ2xCLEtBQUMsRUFBRSxTQUFTLEdBQUcsR0FBRztBQUNsQixLQUFDLEVBQUUsU0FBUyxHQUFHLEdBQUc7Q0FDckIiLCJmaWxlIjoic3RhdGUtbWFwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgVFJBTlNMQVRFID0gJ3RyYW5zbGF0ZSc7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgICB4OiBUUkFOU0xBVEUgKyAnWCcsXG4gICAgeTogVFJBTlNMQVRFICsgJ1knLFxuICAgIHo6IFRSQU5TTEFURSArICdaJ1xufTsiXX0=

/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _angle = __webpack_require__(23);
	
	var _angle2 = _interopRequireDefault(_angle);
	
	var _alpha = __webpack_require__(22);
	
	var _alpha2 = _interopRequireDefault(_alpha);
	
	var _axes = __webpack_require__(24);
	
	var _axes2 = _interopRequireDefault(_axes);
	
	var _color = __webpack_require__(25);
	
	var _color2 = _interopRequireDefault(_color);
	
	var _scale = __webpack_require__(32);
	
	var _scale2 = _interopRequireDefault(_scale);
	
	var _shadow = __webpack_require__(33);
	
	var _shadow2 = _interopRequireDefault(_shadow);
	
	var _positions = __webpack_require__(29);
	
	var _positions2 = _interopRequireDefault(_positions);
	
	var _px = __webpack_require__(30);
	
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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZhbHVlLXR5cGUtbWFwLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2tCQVNlOztBQUVYLFNBQUssaUJBQU87QUFDWixtQkFBZSxpQkFBTztBQUN0QixnQkFBWSxpQkFBTztBQUNuQixRQUFJLGlCQUFPO0FBQ1gsVUFBTSxpQkFBTzs7O0FBR2IsZUFBVyxpQkFBTztBQUNsQixrQkFBYyxpQkFBTztBQUNyQixvQkFBZ0IsaUJBQU87QUFDdkIscUJBQWlCLGlCQUFPO0FBQ3hCLG1CQUFlLGlCQUFPO0FBQ3RCLGdCQUFZLGNBQUk7OztBQUdoQixVQUFNLHFCQUFXO0FBQ2pCLFdBQU8scUJBQVc7QUFDbEIsU0FBSyxjQUFJO0FBQ1QsVUFBTSxjQUFJOzs7QUFHVixzQkFBa0IsZ0JBQU07QUFDeEIscUJBQWlCLGdCQUFNO0FBQ3ZCLG1CQUFlLGdCQUFNOzs7QUFHckIsY0FBVSxrQkFBUTtBQUNsQixhQUFTLGtCQUFROzs7QUFHakIsVUFBTSxpQkFBTztBQUNiLFdBQU8saUJBQU87QUFDZCxXQUFPLGlCQUFPO0FBQ2QsV0FBTyxpQkFBTztBQUNkLFNBQUssaUJBQU87QUFDWixVQUFNLGlCQUFPO0FBQ2IsVUFBTSxpQkFBTztBQUNiLFVBQU0saUJBQU87QUFDYixTQUFLLGlCQUFPO0FBQ1osU0FBSyxpQkFBTztBQUNaLFlBQVEsY0FBSTtBQUNaLGNBQVUsY0FBSTtBQUNkLGNBQVUsY0FBSTtBQUNkLGNBQVUsY0FBSTtBQUNkLGVBQVcsY0FBSTtBQUNmLFdBQU8saUJBQU87Q0FDakIiLCJmaWxlIjoidmFsdWUtdHlwZS1tYXAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYW5nbGUgZnJvbSAnLi4vLi4vdmFsdWUtdHlwZXMvYW5nbGUnO1xuaW1wb3J0IGFscGhhIGZyb20gJy4uLy4uL3ZhbHVlLXR5cGVzL2FscGhhJztcbmltcG9ydCBheGVzIGZyb20gJy4uLy4uL3ZhbHVlLXR5cGVzL2F4ZXMnO1xuaW1wb3J0IGNvbG9yIGZyb20gJy4uLy4uL3ZhbHVlLXR5cGVzL2NvbG9yJztcbmltcG9ydCBzY2FsZSBmcm9tICcuLi8uLi92YWx1ZS10eXBlcy9zY2FsZSc7XG5pbXBvcnQgc2hhZG93IGZyb20gJy4uLy4uL3ZhbHVlLXR5cGVzL3NoYWRvdyc7XG5pbXBvcnQgcG9zaXRpb25zIGZyb20gJy4uLy4uL3ZhbHVlLXR5cGVzL3Bvc2l0aW9ucyc7XG5pbXBvcnQgcHggZnJvbSAnLi4vLi4vdmFsdWUtdHlwZXMvcHgnO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgLy8gQ29sb3IgcHJvcHNcbiAgICBjb2xvcjogY29sb3IsXG4gICAgYmFja2dyb3VuZENvbG9yOiBjb2xvcixcbiAgICBvdXRsaW5lQ29sb3I6IGNvbG9yLFxuICAgIGZpbGw6IGNvbG9yLFxuICAgIHN0cm9rZTogY29sb3IsXG5cbiAgICAvLyBCb3JkZXIgcHJvcHNcbiAgICBib3JkZXJDb2xvcjogY29sb3IsXG4gICAgYm9yZGVyVG9wQ29sb3I6IGNvbG9yLFxuICAgIGJvcmRlclJpZ2h0Q29sb3I6IGNvbG9yLFxuICAgIGJvcmRlckJvdHRvbUNvbG9yOiBjb2xvcixcbiAgICBib3JkZXJMZWZ0Q29sb3I6IGNvbG9yLFxuICAgIGJvcmRlclJhZGl1czogcHgsXG5cbiAgICAvLyBQb3NpdGlvbmluZ1xuICAgIG1hcmdpbjogcG9zaXRpb25zLFxuICAgIHBhZGRpbmc6IHBvc2l0aW9ucyxcbiAgICB3aWR0aDogcHgsXG4gICAgaGVpZ2h0OiBweCxcblxuICAgIC8vIEF4ZXNcbiAgICBiYWNrZ3JvdW5kUG9zaXRpb246IGF4ZXMsXG4gICAgcGVyc3BlY3RpdmVPcmlnaW46IGF4ZXMsXG4gICAgdHJhbnNmb3JtT3JpZ2luOiBheGVzLFxuXG4gICAgLy8gU2hhZG93c1xuICAgIHRleHRTaGFkb3c6IHNoYWRvdyxcbiAgICBib3hTaGFkb3c6IHNoYWRvdywgICBcblxuICAgIC8vIFRyYW5zZm9ybSBwcm9wZXJ0aWVzXG4gICAgcm90YXRlOiBhbmdsZSxcbiAgICByb3RhdGVYOiBhbmdsZSxcbiAgICByb3RhdGVZOiBhbmdsZSxcbiAgICByb3RhdGVaOiBhbmdsZSxcbiAgICBzY2FsZTogc2NhbGUsXG4gICAgc2NhbGVYOiBzY2FsZSxcbiAgICBzY2FsZVk6IHNjYWxlLFxuICAgIHNjYWxlWjogc2NhbGUsXG4gICAgc2tld1g6IGFuZ2xlLFxuICAgIHNrZXdZOiBhbmdsZSxcbiAgICBkaXN0YW5jZTogcHgsXG4gICAgdHJhbnNsYXRlWDogcHgsXG4gICAgdHJhbnNsYXRlWTogcHgsXG4gICAgdHJhbnNsYXRlWjogcHgsXG4gICAgcGVyc3BlY3RpdmU6IHB4LFxuICAgIG9wYWNpdHk6IGFscGhhXG59OyJdfQ==

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
	
	    if (propertyNameCache[key] === false) {
	        return false;
	    } else {
	        propertyNameCache[key] = false;
	    }
	
	    for (var i = 0; i < numPrefixes; i++) {
	        var prefix = prefixes[i],
	            prefixed = prefix === '' ? key : prefix + key.charAt(0).toUpperCase() + key.slice(1);
	
	        if (prefixed in testElement.style) {
	            propertyNameCache[key] = prefixed;
	        }
	    }
	
	    return propertyNameCache[key];
	};
	
	exports.default = function (key) {
	    return cache[key] || testPrefix(key);
	};
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByZWZpeGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLElBQU0sS0FBSyxHQUFHLEVBQUUsQ0FBQztBQUNqQixJQUFNLFFBQVEsR0FBRyxDQUFDLFFBQVEsRUFBQyxLQUFLLEVBQUMsR0FBRyxFQUFDLElBQUksRUFBRSxFQUFFLENBQUMsQ0FBQztBQUMvQyxJQUFNLFdBQVcsR0FBRyxRQUFRLENBQUMsTUFBTSxDQUFDO0FBQ3BDLElBQUksV0FBVyxZQUFBOzs7Ozs7OztBQUFDLEFBUWhCLElBQU0sVUFBVSxHQUFHLFVBQUMsR0FBRyxFQUFLO0FBQ3hCLGVBQVcsR0FBRyxXQUFXLElBQUksUUFBUSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQzs7QUFFM0QsUUFBSSxpQkFBaUIsQ0FBQyxHQUFHLENBQUMsS0FBSyxLQUFLLEVBQUU7QUFDbEMsZUFBTyxLQUFLLENBQUM7S0FDaEIsTUFBTTtBQUNILHlCQUFpQixDQUFDLEdBQUcsQ0FBQyxHQUFHLEtBQUssQ0FBQztLQUNsQzs7QUFFRCxTQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsV0FBVyxFQUFFLENBQUMsRUFBRSxFQUFFO0FBQ2xDLFlBQUksTUFBTSxHQUFHLFFBQVEsQ0FBQyxDQUFDLENBQUM7WUFDcEIsUUFBUSxHQUFHLEFBQUMsTUFBTSxLQUFLLEVBQUUsR0FBSSxHQUFHLEdBQUcsTUFBTSxHQUFHLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxFQUFFLEdBQUcsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQzs7QUFFM0YsWUFBSSxRQUFRLElBQUksV0FBVyxDQUFDLEtBQUssRUFBRTtBQUMvQiw2QkFBaUIsQ0FBQyxHQUFHLENBQUMsR0FBRyxRQUFRLENBQUM7U0FDckM7S0FDSjs7QUFFRCxXQUFPLGlCQUFpQixDQUFDLEdBQUcsQ0FBQyxDQUFDO0NBQ2pDLENBQUE7O2tCQUVjLFVBQUMsR0FBRztXQUFLLEtBQUssQ0FBQyxHQUFHLENBQUMsSUFBSSxVQUFVLENBQUMsR0FBRyxDQUFDO0NBQUEiLCJmaWxlIjoicHJlZml4ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBjYWNoZSA9IHt9O1xuY29uc3QgcHJlZml4ZXMgPSBbJ1dlYmtpdCcsJ01veicsJ08nLCdtcycsICcnXTtcbmNvbnN0IG51bVByZWZpeGVzID0gcHJlZml4ZXMubGVuZ3RoO1xubGV0IHRlc3RFbGVtZW50O1xuXG4vKlxuICAgIFRlc3Qgc3R5bGUgcHJvcGVydHkgZm9yIHByZWZpeGVkIHZlcnNpb25cbiAgICBcbiAgICBAcGFyYW0gW3N0cmluZ106IFN0eWxlIHByb3BlcnR5XG4gICAgQHJldHVybiBbc3RyaW5nXTogQ2FjaGVkIHByb3BlcnR5IG5hbWVcbiovXG5jb25zdCB0ZXN0UHJlZml4ID0gKGtleSkgPT4ge1xuICAgIHRlc3RFbGVtZW50ID0gdGVzdEVsZW1lbnQgfHwgZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICBpZiAocHJvcGVydHlOYW1lQ2FjaGVba2V5XSA9PT0gZmFsc2UpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHByb3BlcnR5TmFtZUNhY2hlW2tleV0gPSBmYWxzZTtcbiAgICB9XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IG51bVByZWZpeGVzOyBpKyspIHtcbiAgICAgICAgdmFyIHByZWZpeCA9IHByZWZpeGVzW2ldLFxuICAgICAgICAgICAgcHJlZml4ZWQgPSAocHJlZml4ID09PSAnJykgPyBrZXkgOiBwcmVmaXggKyBrZXkuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyBrZXkuc2xpY2UoMSk7XG5cbiAgICAgICAgaWYgKHByZWZpeGVkIGluIHRlc3RFbGVtZW50LnN0eWxlKSB7XG4gICAgICAgICAgICBwcm9wZXJ0eU5hbWVDYWNoZVtrZXldID0gcHJlZml4ZWQ7XG4gICAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgcmV0dXJuIHByb3BlcnR5TmFtZUNhY2hlW2tleV07XG59XG5cbmV4cG9ydCBkZWZhdWx0IChrZXkpID0+IGNhY2hlW2tleV0gfHwgdGVzdFByZWZpeChrZXkpOyJdfQ==

/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _utils = __webpack_require__(15);
	
	var _transformProps = __webpack_require__(47);
	
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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJ1aWxkLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUdBLElBQU0sV0FBVyxHQUFHLFlBQVksQ0FBQzs7a0JBRWxCLFVBQUMsS0FBSyxFQUFFLDJCQUEyQixFQUFLO0FBQ25ELFFBQUksY0FBYyxHQUFHLEVBQUUsQ0FBQztBQUN4QixRQUFJLGVBQWUsR0FBRyxFQUFFLENBQUM7QUFDekIsUUFBSSxhQUFhLEdBQUcsS0FBSyxDQUFDOztBQUUxQixlQVZLLElBQUksRUFVSixLQUFLLEVBQUUsVUFBQyxLQUFLLEVBQUUsR0FBRyxFQUFLO0FBQ3hCLFlBQUkseUJBQWUsR0FBRyxDQUFDLEVBQUU7QUFDckIsMkJBQWUsSUFBSSxHQUFHLEdBQUcsR0FBRyxHQUFHLEtBQUssR0FBRyxJQUFJLENBQUM7QUFDNUMseUJBQWEsR0FBRyxBQUFDLEdBQUcsS0FBSyxXQUFXLEdBQUksSUFBSSxHQUFHLGFBQWEsQ0FBQztTQUVoRSxNQUFNO0FBQ0gsMEJBQWMsSUFBSSxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxLQUFLLENBQUM7U0FDN0M7S0FDSixDQUFDLENBQUM7O0FBRUgsUUFBSSxlQUFlLEtBQUssRUFBRSxFQUFFO0FBQ3hCLFlBQUksQ0FBQyxhQUFhLElBQUksQ0FBQywyQkFBMkIsRUFBRTtBQUNoRCwyQkFBZSxJQUFJLFdBQVcsR0FBRyxPQUFPLENBQUM7U0FDNUM7O0FBRUQsc0JBQWMsSUFBSSxhQUFhLEdBQUcsZUFBZSxDQUFDO0tBQ3JEOztBQUVELFdBQU8sY0FBYyxDQUFDO0NBQ3pCIiwiZmlsZSI6ImJ1aWxkLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZWFjaCB9IGZyb20gJy4uLy4uL2luYy91dGlscyc7XG5pbXBvcnQgdHJhbnNmb3JtUHJvcHMgZnJvbSAnLi90cmFuc2Zvcm0tcHJvcHMnO1xuXG5jb25zdCBUUkFOU0xBVEVfWiA9ICd0cmFuc2xhdGVaJztcblxuZXhwb3J0IGRlZmF1bHQgKHN0YXRlLCBkaXNhYmxlSGFyZHdhcmVBY2NlbGVyYXRpb24pID0+IHtcbiAgICBsZXQgcHJvcGVydHlTdHJpbmcgPSAnJztcbiAgICBsZXQgdHJhbnNmb3JtU3RyaW5nID0gJyc7XG4gICAgbGV0IHRyYW5zZm9ybUhhc1ogPSBmYWxzZTtcblxuICAgIGVhY2goc3RhdGUsICh2YWx1ZSwga2V5KSA9PiB7XG4gICAgICAgIGlmICh0cmFuc2Zvcm1Qcm9wc1trZXldKSB7XG4gICAgICAgICAgICB0cmFuc2Zvcm1TdHJpbmcgKz0ga2V5ICsgJygnICsgdmFsdWUgKyAnKSAnO1xuICAgICAgICAgICAgdHJhbnNmb3JtSGFzWiA9IChrZXkgPT09IFRSQU5TTEFURV9aKSA/IHRydWUgOiB0cmFuc2Zvcm1IYXNaO1xuXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBwcm9wZXJ0eVN0cmluZyArPSAnOycgKyBrZXkgKyAnOicgKyB2YWx1ZTtcbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgaWYgKHRyYW5zZm9ybVN0cmluZyAhPT0gJycpIHtcbiAgICAgICAgaWYgKCF0cmFuc2Zvcm1IYXNaICYmICFkaXNhYmxlSGFyZHdhcmVBY2NlbGVyYXRpb24pIHtcbiAgICAgICAgICAgIHRyYW5zZm9ybVN0cmluZyArPSBUUkFOU0xBVEVfWiArICcoMHB4KSc7XG4gICAgICAgIH1cblxuICAgICAgICBwcm9wZXJ0eVN0cmluZyArPSAnO3RyYW5zZm9ybTonICsgdHJhbnNmb3JtU3RyaW5nO1xuICAgIH1cblxuICAgIHJldHVybiBwcm9wZXJ0eVN0cmluZztcbn0gIl19

/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _alpha = __webpack_require__(22);
	
	var _alpha2 = _interopRequireDefault(_alpha);
	
	var _axes = __webpack_require__(24);
	
	var _axes2 = _interopRequireDefault(_axes);
	
	var _color = __webpack_require__(25);
	
	var _color2 = _interopRequireDefault(_color);
	
	var _complex = __webpack_require__(26);
	
	var _complex2 = _interopRequireDefault(_complex);
	
	var _scale = __webpack_require__(32);
	
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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZhbHVlLXR5cGUtbWFwLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2tCQU1lO0FBQ1gsUUFBSSxpQkFBTztBQUNYLFVBQU0saUJBQU87QUFDYixTQUFLLGlCQUFPO0FBQ1osVUFBTSxpQkFBTztBQUNiLFVBQU0saUJBQU87QUFDYixtQkFBZSxnQkFBTTtBQUNyQixLQUFDLG1CQUFTO0FBQ1YsV0FBTyxpQkFBTztBQUNkLGVBQVcsaUJBQU87QUFDbEIsaUJBQWEsaUJBQU87Q0FDdkIiLCJmaWxlIjoidmFsdWUtdHlwZS1tYXAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYWxwaGEgZnJvbSAnLi4vLi4vdmFsdWUtdHlwZXMvYWxwaGEnO1xuaW1wb3J0IGF4ZXMgZnJvbSAnLi4vLi4vdmFsdWUtdHlwZXMvYXhlcyc7XG5pbXBvcnQgY29sb3IgZnJvbSAnLi4vLi4vdmFsdWUtdHlwZXMvY29sb3InO1xuaW1wb3J0IGNvbXBsZXggZnJvbSAnLi4vLi4vdmFsdWUtdHlwZXMvY29tcGxleCc7XG5pbXBvcnQgc2NhbGUgZnJvbSAnLi4vLi4vdmFsdWUtdHlwZXMvc2NhbGUnO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgZmlsbDogY29sb3IsXG4gICAgc3Ryb2tlOiBjb2xvcixcbiAgICBzY2FsZTogc2NhbGUsXG4gICAgc2NhbGVYOiBzY2FsZSxcbiAgICBzY2FsZVk6IHNjYWxlLFxuICAgIHRyYW5zZm9ybU9yaWdpbjogYXhlcyxcbiAgICBkOiBjb21wbGV4LFxuICAgIG9wYWNpdHk6IGFscGhhLFxuICAgIGZpbGxPcGFjaXR5OiBhbHBoYSxcbiAgICBzdHJva2VPcGFjaXR5OiBhbHBoYVxufTsiXX0=

/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports.default = build;
	
	var _utils = __webpack_require__(15);
	
	var _transformProps = __webpack_require__(47);
	
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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJ1aWxkLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztrQkFLd0IsS0FBSzs7Ozs7Ozs7OztBQUY3QixJQUFNLGFBQWEsR0FBRyxNQUFNLENBQUM7O0FBRWQsU0FBUyxLQUFLLENBQUMsS0FBSyxFQUFFLE1BQU0sRUFBRTtBQUN6QyxRQUFJLEtBQUssR0FBRyxFQUFFO1FBQ1YsWUFBWSxHQUFHLEtBQUs7UUFDcEIsS0FBSyxHQUFHLEtBQUssQ0FBQyxLQUFLLEtBQUssU0FBUyxHQUFHLEtBQUssQ0FBQyxLQUFLLElBQUksYUFBYSxHQUFHLEtBQUssQ0FBQyxNQUFNLElBQUksQ0FBQztRQUNwRixNQUFNLEdBQUcsS0FBSyxDQUFDLE1BQU0sS0FBSyxTQUFTLEdBQUcsS0FBSyxDQUFDLE1BQU0sSUFBSSxhQUFhLEdBQUcsS0FBSyxJQUFJLENBQUM7UUFDaEYsZ0JBQWdCLEdBQUcsTUFBTSxDQUFDLENBQUM7UUFDM0IsZ0JBQWdCLEdBQUcsTUFBTSxDQUFDLENBQUM7UUFDM0IsZUFBZSxHQUFHLENBQUUsZ0JBQWdCLElBQUksS0FBSyxHQUFHLENBQUMsQ0FBQSxBQUFDO1FBQ2xELGVBQWUsR0FBRyxDQUFFLGdCQUFnQixJQUFJLE1BQU0sR0FBRyxDQUFDLENBQUEsQUFBQztRQUNuRCxhQUFhLEdBQUcsZ0JBQWdCLEdBQUcsS0FBSztRQUN4QyxhQUFhLEdBQUcsZ0JBQWdCLEdBQUcsTUFBTTtRQUN6QyxTQUFTLEdBQUc7QUFDUixpQkFBUyxpQkFBZSxLQUFLLENBQUMsVUFBVSxVQUFLLEtBQUssQ0FBQyxVQUFVLE9BQUk7QUFDakUsYUFBSyxpQkFBZSxlQUFlLFVBQUssZUFBZSxnQkFBVyxLQUFLLFVBQUssTUFBTSxvQkFBZSxhQUFhLFVBQUssYUFBYSxPQUFJO0FBQ3BJLGNBQU0sY0FBWSxLQUFLLENBQUMsTUFBTSxVQUFLLGdCQUFnQixVQUFLLGdCQUFnQixPQUFJO0FBQzVFLGFBQUssYUFBVyxLQUFLLENBQUMsS0FBSyxPQUFJO0FBQy9CLGFBQUssYUFBVyxLQUFLLENBQUMsS0FBSyxPQUFJO0tBQ2xDLENBQUM7O0FBRU4sZUF4QkssSUFBSSxFQXdCSixLQUFLLEVBQUUsVUFBQyxHQUFHLEVBQUUsS0FBSyxFQUFLO0FBQ3hCLFlBQUkseUJBQWUsR0FBRyxDQUFDLEVBQUU7QUFDckIsd0JBQVksR0FBRyxJQUFJLENBQUM7U0FDdkIsTUFBTTtBQUNILGlCQUFLLENBQUMsV0E1QkgsV0FBVyxFQTRCSSxHQUFHLENBQUMsQ0FBQyxHQUFHLEtBQUssQ0FBQztTQUNuQztLQUNKLENBQUMsQ0FBQzs7QUFFSCxRQUFJLFlBQVksRUFBRTtBQUNkLGFBQUssQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDOztBQUVyQixtQkFuQ0MsSUFBSSxFQW1DQSxTQUFTLEVBQUUsVUFBQyxHQUFHLEVBQUUsS0FBSyxFQUFLO0FBQzVCLGdCQUFJLFlBQVksR0FBRyxBQUFDLEdBQUcsS0FBSyxPQUFPLEdBQUksR0FBRyxHQUFHLEdBQUcsQ0FBQztBQUNqRCxpQkFBSyxDQUFDLFNBQVMsSUFBSSxLQUFLLENBQUMsT0FBTyxDQUFDLFlBQVksRUFBRSxZQUFZLENBQUMsQ0FBQztTQUNoRSxDQUFDLENBQUM7S0FDTjs7QUFFRCxXQUFPLEtBQUssQ0FBQztDQUNoQiIsImZpbGUiOiJidWlsZC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGVhY2gsIGNhbWVsVG9EYXNoIH0gZnJvbSAnLi4vLi4vaW5jL3V0aWxzJztcbmltcG9ydCB0cmFuc2Zvcm1Qcm9wcyBmcm9tICcuLi9jc3MvdHJhbnNmb3JtLXByb3BzJztcblxuY29uc3QgWkVST19OT1RfWkVSTyA9IDAuMDAwMTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYnVpbGQoc3RhdGUsIG9yaWdpbikge1xuICAgIGxldCBwcm9wcyA9IHt9LFxuICAgICAgICBoYXNUcmFuc2Zvcm0gPSBmYWxzZSxcbiAgICAgICAgc2NhbGUgPSBzdGF0ZS5zY2FsZSAhPT0gdW5kZWZpbmVkID8gc3RhdGUuc2NhbGUgfHwgWkVST19OT1RfWkVSTyA6IHN0YXRlLnNjYWxlWCB8fCAxLFxuICAgICAgICBzY2FsZVkgPSBzdGF0ZS5zY2FsZVkgIT09IHVuZGVmaW5lZCA/IHN0YXRlLnNjYWxlWSB8fCBaRVJPX05PVF9aRVJPIDogc2NhbGUgfHwgMSxcbiAgICAgICAgdHJhbnNmb3JtT3JpZ2luWCA9IG9yaWdpbi54LFxuICAgICAgICB0cmFuc2Zvcm1PcmlnaW5ZID0gb3JpZ2luLnksXG4gICAgICAgIHNjYWxlVHJhbnNmb3JtWCA9IC0gdHJhbnNmb3JtT3JpZ2luWCAqIChzY2FsZSAqIDEpLFxuICAgICAgICBzY2FsZVRyYW5zZm9ybVkgPSAtIHRyYW5zZm9ybU9yaWdpblkgKiAoc2NhbGVZICogMSksXG4gICAgICAgIHNjYWxlUmVwbGFjZVggPSB0cmFuc2Zvcm1PcmlnaW5YIC8gc2NhbGUsXG4gICAgICAgIHNjYWxlUmVwbGFjZVkgPSB0cmFuc2Zvcm1PcmlnaW5ZIC8gc2NhbGVZLFxuICAgICAgICB0cmFuc2Zvcm0gPSB7XG4gICAgICAgICAgICB0cmFuc2xhdGU6IGB0cmFuc2xhdGUoJHtzdGF0ZS50cmFuc2xhdGVYfSwgJHtzdGF0ZS50cmFuc2xhdGVZfSkgYCxcbiAgICAgICAgICAgIHNjYWxlOiBgdHJhbnNsYXRlKCR7c2NhbGVUcmFuc2Zvcm1YfSwgJHtzY2FsZVRyYW5zZm9ybVl9KSBzY2FsZSgke3NjYWxlfSwgJHtzY2FsZVl9KSB0cmFuc2xhdGUoJHtzY2FsZVJlcGxhY2VYfSwgJHtzY2FsZVJlcGxhY2VZfSkgYCxcbiAgICAgICAgICAgIHJvdGF0ZTogYHJvdGF0ZSgke3N0YXRlLnJvdGF0ZX0sICR7dHJhbnNmb3JtT3JpZ2luWH0sICR7dHJhbnNmb3JtT3JpZ2luWX0pIGAsXG4gICAgICAgICAgICBza2V3WDogYHNrZXdYKCR7c3RhdGUuc2tld1h9KSBgLFxuICAgICAgICAgICAgc2tld1k6IGBza2V3WSgke3N0YXRlLnNrZXdZfSkgYFxuICAgICAgICB9O1xuXG4gICAgZWFjaChzdGF0ZSwgKGtleSwgdmFsdWUpID0+IHtcbiAgICAgICAgaWYgKHRyYW5zZm9ybVByb3BzW2tleV0pIHtcbiAgICAgICAgICAgIGhhc1RyYW5zZm9ybSA9IHRydWU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBwcm9wc1tjYW1lbFRvRGFzaChrZXkpXSA9IHZhbHVlO1xuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICBpZiAoaGFzVHJhbnNmb3JtKSB7XG4gICAgICAgIHByb3BzLnRyYW5zZm9ybSA9ICcnO1xuXG4gICAgICAgIGVhY2godHJhbnNmb3JtLCAoa2V5LCB2YWx1ZSkgPT4ge1xuICAgICAgICAgICAgdmFyIGRlZmF1bHRWYWx1ZSA9IChrZXkgPT09ICdzY2FsZScpID8gJzEnIDogJzAnO1xuICAgICAgICAgICAgcHJvcHMudHJhbnNmb3JtICs9IHZhbHVlLnJlcGxhY2UoL3VuZGVmaW5lZC9nLCBkZWZhdWx0VmFsdWUpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gcHJvcHM7XG59Il19

/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports.default = build;
	
	var _utils = __webpack_require__(15);
	
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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJ1aWxkLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztrQkFVd0IsS0FBSzs7Ozs7Ozs7OztBQUY3QixJQUFNLGVBQWUsR0FBRyxVQUFDLE9BQU8sRUFBRSxNQUFNO1dBQUssQUFBQyxVQUFVLENBQUMsT0FBTyxDQUFDLEdBQUcsR0FBRyxHQUFJLE1BQU0sR0FBRyxJQUFJO0NBQUEsQ0FBQzs7QUFFMUUsU0FBUyxLQUFLLENBQUMsS0FBSyxFQUFFLE1BQU0sRUFBRTtBQUN6QyxRQUFNLE1BQU0sR0FBRyxFQUFFLENBQUM7QUFDbEIsUUFBTSxlQUFlLEdBQUc7QUFDcEIsY0FBTSxFQUFFLENBQUM7QUFDVCxlQUFPLEVBQUUsTUFBTSxHQUFHLElBQUk7S0FDekIsQ0FBQztBQUNGLFFBQUksWUFBWSxHQUFHLEtBQUssQ0FBQzs7QUFFekIsZUFsQkssSUFBSSxFQWtCSixLQUFLLEVBQUUsVUFBQyxLQUFLLEVBQUUsR0FBRyxFQUFLO0FBQ3hCLGdCQUFRLEdBQUc7QUFDUCxpQkFBSyxRQUFRLENBQUM7QUFDZCxpQkFBSyxTQUFTO0FBQ1YsNEJBQVksR0FBRyxJQUFJLENBQUM7QUFDcEIsK0JBQWUsQ0FBQyxHQUFHLENBQUMsR0FBRyxlQUFlLENBQUMsS0FBSyxFQUFFLE1BQU0sQ0FBQyxDQUFDO0FBQ3RELHNCQUFNO0FBQUEsQUFDVixpQkFBSyxRQUFRO0FBQ1Qsc0JBQU0sQ0FBQyxtQkFBbUIsQ0FBQyxHQUFHLGVBQWUsQ0FBQyxDQUFDLEtBQUssRUFBRSxNQUFNLENBQUMsQ0FBQztBQUM5RCxzQkFBTTtBQUFBLEFBQ1Y7QUFDSSxzQkFBTSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEtBQUssQ0FBQztBQUFBLFNBQzNCO0tBQ0osQ0FBQyxDQUFDOztBQUVILFFBQUksWUFBWSxFQUFFO0FBQ2QsY0FBTSxDQUFDLGtCQUFrQixDQUFDLEdBQUcsZUFBZSxDQUFDLE1BQU0sR0FBRyxHQUFHLEdBQUcsZUFBZSxDQUFDLE9BQU8sQ0FBQztLQUN2Rjs7QUFFRCxXQUFPLE1BQU0sQ0FBQztDQUNqQiIsImZpbGUiOiJidWlsZC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGVhY2ggfSBmcm9tICcuLi8uLi9pbmMvdXRpbHMnO1xuXG4vKlxuICAgIENvbnZlcnQgcGVyY2VudGFnZSB0byBwaXhlbHNcbiAgICBcbiAgICBAcGFyYW0gW251bWJlcl06IFBlcmNlbnRhZ2Ugb2YgdG90YWwgbGVuZ3RoXG4gICAgQHBhcmFtIFtudW1iZXJdOiBUb3RhbCBsZW5ndGhcbiovXG5jb25zdCBwZXJjZW50VG9QaXhlbHMgPSAocGVyY2VudCwgbGVuZ3RoKSA9PiAocGFyc2VGbG9hdChwZXJjZW50KSAvIDEwMCkgKiBsZW5ndGggKyAncHgnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBidWlsZChzdGF0ZSwgbGVuZ3RoKSB7XG4gICAgY29uc3Qgc3R5bGVzID0ge307XG4gICAgY29uc3QgZGFzaEFycmF5U3R5bGVzID0ge1xuICAgICAgICBsZW5ndGg6IDAsXG4gICAgICAgIHNwYWNpbmc6IGxlbmd0aCArICdweCdcbiAgICB9O1xuICAgIGxldCBoYXNEYXNoQXJyYXkgPSBmYWxzZTtcblxuICAgIGVhY2goc3RhdGUsICh2YWx1ZSwga2V5KSA9PiB7XG4gICAgICAgIHN3aXRjaCAoa2V5KSB7XG4gICAgICAgICAgICBjYXNlICdsZW5ndGgnOlxuICAgICAgICAgICAgY2FzZSAnc3BhY2luZyc6XG4gICAgICAgICAgICAgICAgaGFzRGFzaEFycmF5ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBkYXNoQXJyYXlTdHlsZXNba2V5XSA9IHBlcmNlbnRUb1BpeGVscyh2YWx1ZSwgbGVuZ3RoKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ29mZnNldCc6XG4gICAgICAgICAgICAgICAgc3R5bGVzWydzdHJva2UtZGFzaG9mZnNldCddID0gcGVyY2VudFRvUGl4ZWxzKC12YWx1ZSwgbGVuZ3RoKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgc3R5bGVzW2tleV0gPSB2YWx1ZTtcbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgaWYgKGhhc0Rhc2hBcnJheSkge1xuICAgICAgICBzdHlsZXNbJ3N0cm9rZS1kYXNoYXJyYXknXSA9IGRhc2hBcnJheVN0eWxlcy5sZW5ndGggKyAnICcgKyBkYXNoQXJyYXlTdHlsZXMuc3BhY2luZztcbiAgICB9XG5cbiAgICByZXR1cm4gc3R5bGVzO1xufSJdfQ==

/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	exports.__esModule = true;
	
	var _stateMap = __webpack_require__(36);
	
	var _stateMap2 = _interopRequireDefault(_stateMap);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var STROKE = 'stroke-';
	
	exports.default = _extends({}, _stateMap2.default, {
	    opacity: STROKE + 'opacity',
	    width: STROKE + 'width',
	    miterlimit: STROKE + 'miterlimit'
	});
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0YXRlLW1hcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFFQSxJQUFNLE1BQU0sR0FBRyxTQUFTLENBQUM7OztBQUlyQixXQUFPLEVBQUssTUFBTSxZQUFTO0FBQzNCLFNBQUssRUFBSyxNQUFNLFVBQU87QUFDdkIsY0FBVSxFQUFLLE1BQU0sZUFBWSIsImZpbGUiOiJzdGF0ZS1tYXAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY3NzU3RhdGVNYXAgZnJvbSAnLi4vY3NzL3N0YXRlLW1hcCc7XG5cbmNvbnN0IFNUUk9LRSA9ICdzdHJva2UtJztcblxuZXhwb3J0IGRlZmF1bHQge1xuICAgIC4uLmNzc1N0YXRlTWFwLFxuICAgIG9wYWNpdHk6IGAke1NUUk9LRX1vcGFjaXR5YCxcbiAgICB3aWR0aDogYCR7U1RST0tFfXdpZHRoYCxcbiAgICBtaXRlcmxpbWl0OiBgJHtTVFJPS0V9bWl0ZXJsaW1pdGBcbn07Il19

/***/ },
/* 44 */
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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRlZmF1bHQtcHJvcHMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQU8sSUFBTSxHQUFHLFdBQUgsR0FBRyxHQUFHO0FBQ2YsT0FBRyxFQUFFLENBQUM7QUFDTixPQUFHLEVBQUUsR0FBRztBQUNSLFNBQUssRUFBRSxJQUFJO0NBQ2QsQ0FBQzs7QUFFSyxJQUFNLE9BQU8sV0FBUCxPQUFPLEdBQUc7QUFDbkIsT0FBRyxFQUFFLENBQUM7QUFDTixPQUFHLEVBQUUsQ0FBQztDQUNULENBQUM7O0FBRUssSUFBTSxPQUFPLFdBQVAsT0FBTyxHQUFHO0FBQ25CLE9BQUcsRUFBRSxDQUFDO0FBQ04sT0FBRyxFQUFFLEdBQUc7QUFDUixRQUFJLEVBQUUsR0FBRztDQUNaLENBQUMiLCJmaWxlIjoiZGVmYXVsdC1wcm9wcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCByZ2IgPSB7XG4gICAgbWluOiAwLFxuICAgIG1heDogMjU1LFxuICAgIHJvdW5kOiB0cnVlXG59O1xuXG5leHBvcnQgY29uc3Qgb3BhY2l0eSA9IHtcbiAgICBtaW46IDAsXG4gICAgbWF4OiAxXG59O1xuXG5leHBvcnQgY29uc3QgcGVyY2VudCA9IHtcbiAgICBtaW46IDAsXG4gICAgbWF4OiAxMDAsXG4gICAgdW5pdDogJyUnXG59OyJdfQ==

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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRpY3Rpb25hcnkuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsSUFBTSxDQUFDLEdBQUcsR0FBRyxDQUFDO0FBQ2QsSUFBTSxDQUFDLEdBQUcsR0FBRyxDQUFDO0FBQ2QsSUFBTSxLQUFLLEdBQUcsT0FBTyxDQUFDOztBQUVmLElBQU0sSUFBSSxXQUFKLElBQUksR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7QUFDekIsSUFBTSxHQUFHLFdBQUgsR0FBRyxHQUFHLENBQUMsS0FBSyxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsS0FBSyxDQUFDLENBQUM7QUFDNUMsSUFBTSxHQUFHLFdBQUgsR0FBRyxHQUFHLENBQUMsS0FBSyxFQUFFLFlBQVksRUFBRSxXQUFXLEVBQUUsS0FBSyxDQUFDLENBQUM7QUFDdEQsSUFBTSxTQUFTLFdBQVQsU0FBUyxHQUFHLENBQUMsS0FBSyxFQUFFLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxDQUFDLENBQUM7QUFDckQsSUFBTSxNQUFNLFdBQU4sTUFBTSxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLE9BQU8sQ0FBQyxDQUFDIiwiZmlsZSI6ImRpY3Rpb25hcnkuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBYID0gJ1gnO1xuY29uc3QgWSA9ICdZJztcbmNvbnN0IEFMUEhBID0gJ0FscGhhJztcblxuZXhwb3J0IGNvbnN0IGF4ZXMgPSBbWCwgWSwgJ1onXTtcbmV4cG9ydCBjb25zdCByZ2IgPSBbJ1JlZCcsICdHcmVlbicsICdCbHVlJywgQUxQSEFdO1xuZXhwb3J0IGNvbnN0IGhzbCA9IFsnSHVlJywgJ1NhdHVyYXRpb24nLCAnTGlnaHRuZXNzJywgQUxQSEFdO1xuZXhwb3J0IGNvbnN0IHBvc2l0aW9ucyA9IFsnVG9wJywgJ1JpZ2h0JywgJ0JvdHRvbScsICdMZWZ0J107XG5leHBvcnQgY29uc3Qgc2hhZG93ID0gW1gsIFksICdSYWRpdXMnLCAnU3ByZWFkJywgJ0NvbG9yJ107Il19

/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports.getProcessId = getProcessId;
	exports.activate = activate;
	exports.deactivate = deactivate;
	
	var _timer = __webpack_require__(20);
	
	var _timer2 = _interopRequireDefault(_timer);
	
	var _tick = __webpack_require__(48);
	
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
	
	    while (activateQueueLength--) {
	        var id = activateQueue[activateQueueLength];
	        var activeIdIndex = runningIds.indexOf(id);
	        var process = runningProceses[id];
	
	        if (activeIdIndex > -1) {
	            runningIds.push(id);
	        }
	
	        updateCount(true, process.isLazy);
	
	        if (process.onStart) {
	            process.onStart(process);
	        }
	    }
	
	    while (deactivateQueue--) {
	        var id = deactivateQueue[deactivateQueueLength];
	        var activeIdIndex = runningIds.indexOf(id);
	        var process = runningProceses[id];
	
	        if (activeIdIndex > -1) {
	            runningIds.splice(activeIdIndex, 1);
	            updateCount(false, process.isLazy);
	            runningProceses[id] = undefined;
	        }
	
	        if (process.onEnd) {
	            process.onEnd(process);
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
	
	        for (var _i = 0; _i < numRunning; _i++) {
	            process = runningProcesses[runningIds[_i]];
	
	            if (process && process[methodName] && (!isRenderStep || isRenderStep && process._render === true)) {
	                result = process[methodName].call(process, process, frameStamp, elapsed);
	            }
	
	            if (method.decideRender) {
	                process._render = process[methodName] && result === false ? false : true;
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
	
	// Stop loop
	function stop() {
	    isRunning = false;
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
	//# sourceMappingURL=data:application/json;base64,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QUFLLEVBQUUsQ0FBQztBQUNkLGlCQUFTLEdBQUcsSUFBSSxDQUFDO0FBQ2pCLGFBQUssRUFBRSxDQUFDO0tBQ1g7Q0FDSjs7O0FBQUEsQUFHRCxTQUFTLElBQUksR0FBRztBQUNaLGFBQVMsR0FBRyxLQUFLLENBQUM7Q0FDckI7OztBQUFBLEFBR00sU0FBUyxZQUFZLEdBQUc7QUFDM0IsV0FBTyxnQkFBZ0IsRUFBRSxDQUFDO0NBQzdCOzs7Ozs7QUFBQSxBQU1NLFNBQVMsUUFBUSxDQUFDLEVBQUUsRUFBRSxPQUFPLEVBQUU7QUFDbEMsZUFBVyxDQUFDLEVBQUUsRUFBRSxhQUFhLEVBQUUsZUFBZSxDQUFDLENBQUM7QUFDaEQsb0JBQWdCLENBQUMsRUFBRSxDQUFDLEdBQUcsT0FBTyxDQUFDOztBQUUvQixRQUFJLENBQUMsU0FBUyxFQUFFO0FBQ1osYUFBSyxFQUFFLENBQUM7S0FDWDtDQUNKOzs7OztBQUFBLEFBS00sU0FBUyxVQUFVLENBQUMsRUFBRSxFQUFFO0FBQzNCLGVBQVcsQ0FBQyxFQUFFLEVBQUUsZUFBZSxFQUFFLGFBQWEsQ0FBQyxDQUFDO0NBQ25EIiwiZmlsZSI6Imxvb3AuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdGltZXIgZnJvbSAnLi90aW1lcic7XG5pbXBvcnQgdGljayBmcm9tICcuL3RpY2snO1xuXG5jb25zdCBwcm9jZXNzT3JkZXIgPSBbXG4gICAgeyBzdGVwOiAnb25GcmFtZVN0YXJ0JyB9LFxuICAgIHsgc3RlcDogJ29uVXBkYXRlJyB9LFxuICAgIHsgc3RlcDogJ3dpbGxSZW5kZXInLCBkZWNpZGVSZW5kZXI6IHRydWUgfSxcbiAgICB7IHN0ZXA6ICdvblJlbmRlcicsIGlzUmVuZGVyOiB0cnVlIH0sXG4gICAgeyBzdGVwOiAncG9zdFJlbmRlcicsIGlzUmVuZGVyOiB0cnVlIH0sXG4gICAgeyBzdGVwOiAnb25GcmFtZUVuZCcgfSxcbiAgICB7IHN0ZXA6ICdvbkNsZWFudXAnIH1cbl07XG5jb25zdCBudW1Qcm9jZXNzU3RlcHMgPSBwcm9jZXNzT3JkZXIubGVuZ3RoO1xuXG4vLyBbYm9vbGVhbl06IElzIGxvb3AgcnVubmluZz9cbmxldCBpc1J1bm5pbmcgPSBmYWxzZTtcblxuLy8gW2ludF06IFByb2Nlc3MgSUQsIGluY3JlbWVudGVkIGZvciBlYWNoIG5ldyBwcm9jZXNzXG5sZXQgY3VycmVudFByb2Nlc3NJZCA9IDA7XG5cbi8vIFtpbnRdOiBOdW1iZXIgb2YgcnVubmluZyBwcm9jZXNzZXNcbmxldCBydW5uaW5nQ291bnQgPSAwO1xuXG4vLyBbaW50XTogTnVtYmVyIG9mIHJ1bm5pbmcgbm9uLWJhY2tncm91bmQgcHJvY2Vzc2VzXG5sZXQgYWN0aXZlQ291bnQgPSAwO1xuXG4vLyBbYXJyYXldOiBBcnJheSBvZiBhY3RpdmUgcHJvY2VzcyBJRHNcbmNvbnN0IHJ1bm5pbmdJZHMgPSBbXTtcblxuLy8gW29iamVjdF06IE1hcCBvZiBhY3RpdmUgcHJvY2Vzc2VzXG5jb25zdCBydW5uaW5nUHJvY2Vzc2VzID0ge307XG5cbi8vIFthcnJheV06IEFycmF5IG9mIHByb2Nlc3MgSURzIHF1ZXVlZCBmb3IgYWN0aXZhdGlvblxubGV0IGFjdGl2YXRlUXVldWUgPSBbXTtcblxuLy8gW2FycmF5XTogQXJyYXkgb2YgcHJvY2VzcyBJRHMgcXVldWVkIGZvciBkZWFjdGl2YXRpb25cbmxldCBkZWFjdGl2YXRlUXVldWUgPSBbXTtcblxuLypcbiAgICBVcGRhdGUgbGlzdHNcblxuICAgIEBwYXJhbSBbbnVtYmVyXVxuICAgIEBwYXJhbSBbYXJyYXldXG4gICAgQHBhcmFtIFthcnJheV1cbiovXG5mdW5jdGlvbiB1cGRhdGVMaXN0cyhpZCwgaW5MaXN0LCBvdXRMaXN0KSB7XG4gICAgY29uc3QgaW5Qb3NpdGlvbiA9IGluTGlzdC5pbmRleE9mKGluTGlzdCk7XG4gICAgY29uc3Qgb3V0UG9zaXRpb24gPSBvdXRMaXN0LmluZGV4T2Yob3V0TGlzdCk7XG5cbiAgICBpZiAoaW5Qb3NpdGlvbiA9PT0gLTEpIHtcbiAgICAgICAgaW5MaXN0LnB1c2goaWQpO1xuICAgIH1cblxuICAgIGlmIChvdXRQb3NpdGlvbiA+IC0xKSB7XG4gICAgICAgIG91dExpc3Quc3BsaWNlKG91dFBvc2l0aW9uLCAxKTtcbiAgICB9XG59XG5cbi8qXG4gICAgVXBkYXRlIHJ1bm5pbmdcblxuICAgIFtib29sZWFuXTogYHRydWVgIHRvIGFkZFxuICAgIFtib29sZWFuXTogYHRydWVgIGlmIGxhenlcbiovXG5mdW5jdGlvbiB1cGRhdGVDb3VudChhZGQsIGlzTGF6eSkge1xuICAgIGNvbnN0IG1vZGlmeSA9IGFkZCA/IDEgOiAtMTtcblxuICAgIHJ1bm5pbmdDb3VudCArPSBtb2RpZnk7XG5cbiAgICBpZiAoIWlzTGF6eSkge1xuICAgICAgICBhY3RpdmVDb3VudCArPSBtb2RpZnk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiByZXNvbHZlUXVldWVzKCkge1xuICAgIGxldCBhY3RpdmF0ZVF1ZXVlTGVuZ3RoID0gYWN0aXZhdGVRdWV1ZS5sZW5ndGg7XG4gICAgbGV0IGRlYWN0aXZhdGVRdWV1ZUxlbmd0aCA9IGRlYWN0aXZhdGVRdWV1ZS5sZW5ndGg7XG5cbiAgICB3aGlsZSAoYWN0aXZhdGVRdWV1ZUxlbmd0aC0tKSB7XG4gICAgICAgIGNvbnN0IGlkID0gYWN0aXZhdGVRdWV1ZVthY3RpdmF0ZVF1ZXVlTGVuZ3RoXTtcbiAgICAgICAgY29uc3QgYWN0aXZlSWRJbmRleCA9IHJ1bm5pbmdJZHMuaW5kZXhPZihpZCk7XG4gICAgICAgIGNvbnN0IHByb2Nlc3MgPSBydW5uaW5nUHJvY2VzZXNbaWRdO1xuXG4gICAgICAgIGlmIChhY3RpdmVJZEluZGV4ID4gLTEpIHtcbiAgICAgICAgICAgIHJ1bm5pbmdJZHMucHVzaChpZCk7XG4gICAgICAgIH1cblxuICAgICAgICB1cGRhdGVDb3VudCh0cnVlLCBwcm9jZXNzLmlzTGF6eSk7XG5cbiAgICAgICAgaWYgKHByb2Nlc3Mub25TdGFydCkge1xuICAgICAgICAgICAgcHJvY2Vzcy5vblN0YXJ0KHByb2Nlc3MpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgd2hpbGUgKGRlYWN0aXZhdGVRdWV1ZS0tKSB7XG4gICAgICAgIGNvbnN0IGlkID0gZGVhY3RpdmF0ZVF1ZXVlW2RlYWN0aXZhdGVRdWV1ZUxlbmd0aF07XG4gICAgICAgIGNvbnN0IGFjdGl2ZUlkSW5kZXggPSBydW5uaW5nSWRzLmluZGV4T2YoaWQpO1xuICAgICAgICBjb25zdCBwcm9jZXNzID0gcnVubmluZ1Byb2Nlc2VzW2lkXTtcblxuICAgICAgICBpZiAoYWN0aXZlSWRJbmRleCA+IC0xKSB7XG4gICAgICAgICAgICBydW5uaW5nSWRzLnNwbGljZShhY3RpdmVJZEluZGV4LCAxKTtcbiAgICAgICAgICAgIHVwZGF0ZUNvdW50KGZhbHNlLCBwcm9jZXNzLmlzTGF6eSk7XG4gICAgICAgICAgICBydW5uaW5nUHJvY2VzZXNbaWRdID0gdW5kZWZpbmVkO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHByb2Nlc3Mub25FbmQpIHtcbiAgICAgICAgICAgIHByb2Nlc3Mub25FbmQocHJvY2Vzcyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBhY3RpdmF0ZVF1ZXVlID0gW107XG4gICAgZGVhY3RpdmF0ZVF1ZXVlID0gW107XG59XG5cbi8qXG4gICAgW3RpbWVzdGFtcF06IEZyYW1lIHRpbWVzdGFtcFxuICAgIFtpbnRdOiBUaW1lIHNpbmNlIGxhc3QgZnJhbWVcbiovXG5mdW5jdGlvbiBmaXJlQWxsKGZyYW1lU3RhbXAsIGVsYXBzZWQpIHtcbiAgICBsZXQgbWV0aG9kID0ge307XG4gICAgbGV0IG1ldGhvZE5hbWUgPSAnJztcbiAgICBsZXQgaXNSZW5kZXJTdGVwID0gZmFsc2U7XG4gICAgbGV0IHByb2Nlc3M7XG4gICAgbGV0IHJlc3VsdDtcblxuICAgIHJlc29sdmVRdWV1ZXMoKTtcblxuICAgIGNvbnN0IG51bVJ1bm5pbmcgPSBydW5uaW5nQ291bnQ7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IG51bVByb2Nlc3NTdGVwczsgaSsrKSB7XG4gICAgICAgIG1ldGhvZCA9IHByb2Nlc3NPcmRlcltpXTtcbiAgICAgICAgbWV0aG9kTmFtZSA9IG1ldGhvZC5zdGVwO1xuICAgICAgICBpc1JlbmRlclN0ZXAgPSBtZXRob2QuaXNSZW5kZXIgPyB0cnVlIDogZmFsc2U7XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBudW1SdW5uaW5nOyBpKyspIHtcbiAgICAgICAgICAgIHByb2Nlc3MgPSBydW5uaW5nUHJvY2Vzc2VzW3J1bm5pbmdJZHNbaV1dO1xuXG4gICAgICAgICAgICBpZiAocHJvY2VzcyAmJiBwcm9jZXNzW21ldGhvZE5hbWVdICYmICghaXNSZW5kZXJTdGVwIHx8IChpc1JlbmRlclN0ZXAgJiYgcHJvY2Vzcy5fcmVuZGVyID09PSB0cnVlKSkpIHtcbiAgICAgICAgICAgICAgICByZXN1bHQgPSBwcm9jZXNzW21ldGhvZE5hbWVdLmNhbGwocHJvY2VzcywgcHJvY2VzcywgZnJhbWVTdGFtcCwgZWxhcHNlZCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChtZXRob2QuZGVjaWRlUmVuZGVyKSB7XG4gICAgICAgICAgICAgICAgcHJvY2Vzcy5fcmVuZGVyID0gKHByb2Nlc3NbbWV0aG9kTmFtZV0gJiYgcmVzdWx0ID09PSBmYWxzZSkgPyBmYWxzZSA6IHRydWU7IFxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGFjdGl2ZUNvdW50ID8gdHJ1ZSA6IGZhbHNlO1xufVxuXG4vLyBGdW5jdGlvbiB0byBmaXJlIGV2ZXJ5IGZyYW1lXG5mdW5jdGlvbiBmcmFtZSgpIHtcbiAgICB0aWNrKChmcmFtZVN0YW1wKSA9PiB7XG4gICAgICAgIGlmIChpc1J1bm5pbmcpIHtcbiAgICAgICAgICAgIGZyYW1lKCk7XG4gICAgICAgIH1cblxuICAgICAgICB0aW1lci51cGRhdGUoZnJhbWVTdGFtcCk7XG4gICAgICAgIGlzUnVubmluZyA9IGZpcmVBbGwoZnJhbWVTdGFtcCwgdGltZXIuZ2V0RWxhcHNlZCgpKTtcbiAgICB9KTtcbn1cblxuLy8gU3RhcnQgbG9vcFxuZnVuY3Rpb24gc3RhcnQoKSB7XG4gICAgaWYgKCFpc1J1bm5pbmcpIHtcbiAgICAgICAgdGltZXIuc3RhcnQoKTtcbiAgICAgICAgaXNSdW5uaW5nID0gdHJ1ZTtcbiAgICAgICAgZnJhbWUoKTtcbiAgICB9XG59XG5cbi8vIFN0b3AgbG9vcFxuZnVuY3Rpb24gc3RvcCgpIHtcbiAgICBpc1J1bm5pbmcgPSBmYWxzZTtcbn1cblxuLy8gRXhwb3J0c1xuZXhwb3J0IGZ1bmN0aW9uIGdldFByb2Nlc3NJZCgpIHtcbiAgICByZXR1cm4gY3VycmVudFByb2Nlc3NJZCsrO1xufVxuXG4vKlxuICAgIFtpbnRdOiBQcm9jZXNzIElEIHRvIGFjdGl2YXRlXG4gICAgW1Byb2Nlc3NdOiBQcm9jZXNzIHRvIGFjdGl2YXRlXG4qL1xuZXhwb3J0IGZ1bmN0aW9uIGFjdGl2YXRlKGlkLCBwcm9jZXNzKSB7XG4gICAgdXBkYXRlTGlzdHMoaWQsIGFjdGl2YXRlUXVldWUsIGRlYWN0aXZhdGVRdWV1ZSk7XG4gICAgcnVubmluZ1Byb2Nlc3Nlc1tpZF0gPSBwcm9jZXNzO1xuXG4gICAgaWYgKCFpc1J1bm5pbmcpIHtcbiAgICAgICAgc3RhcnQoKTtcbiAgICB9XG59XG5cbi8qXG4gICAgW2ludF06IFByb2Nlc3MgSUQgdG8gZGVhY3RpdmF0ZVxuKi9cbmV4cG9ydCBmdW5jdGlvbiBkZWFjdGl2YXRlKGlkKSB7XG4gICAgdXBkYXRlTGlzdHMoaWQsIGRlYWN0aXZhdGVRdWV1ZSwgYWN0aXZhdGVRdWV1ZSk7XG59Il19

/***/ },
/* 47 */
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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRyYW5zZm9ybS1wcm9wcy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFFQSxJQUFJLGNBQWMsR0FBRyxFQUFFLENBQUM7O0FBRXhCLElBQU0sS0FBSyxHQUFHLE9BQU8sQ0FBQztBQUN0QixJQUFNLE1BQU0sR0FBRyxRQUFRLENBQUM7QUFDeEIsSUFBTSxxQkFBcUIsR0FBRyxzQkFBc0IsQ0FBQztBQUNyRCxJQUFNLEtBQUssR0FBRyxDQUFDLFdBQVcsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxxQkFBcUIsQ0FBQyxDQUFDOztBQUUxRSxjQUFjLENBQUMsTUFBTSxDQUFDLEdBQUcsY0FBYyxDQUFDLEtBQUssQ0FBQyxHQUFHLGNBQWMsQ0FBQyxxQkFBcUIsQ0FBQyxHQUFHLElBQUksQ0FBQzs7QUFFOUYsS0FBSyxDQUFDLE9BQU8sQ0FBQyxVQUFDLElBQUk7U0FBSyxZQVhmLElBQUksQ0FXZ0IsT0FBTyxDQUFDLFVBQUMsSUFBSTtXQUFLLGNBQWMsQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLEdBQUcsSUFBSTtHQUFBLENBQUM7Q0FBQSxDQUFDLENBQUM7O2tCQUVyRSxjQUFjIiwiZmlsZSI6InRyYW5zZm9ybS1wcm9wcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGF4ZXMgfSBmcm9tICcuLi8uLi92YWx1ZS10eXBlcy9zZXR0aW5ncy9kaWN0aW9uYXJ5JztcblxubGV0IHRyYW5zZm9ybVByb3BzID0ge307XG5cbmNvbnN0IFNDQUxFID0gJ3NjYWxlJztcbmNvbnN0IFJPVEFURSA9ICdyb3RhdGUnO1xuY29uc3QgVFJBTlNGT1JNX1BFUlNQRUNUSVZFID0gJ3RyYW5zZm9ybVBlcnNwZWN0aXZlJztcbmNvbnN0IFRFUk1TID0gWyd0cmFuc2xhdGUnLCBTQ0FMRSwgUk9UQVRFLCAnc2tldycsIFRSQU5TRk9STV9QRVJTUEVDVElWRV07XG5cbnRyYW5zZm9ybVByb3BzW1JPVEFURV0gPSB0cmFuc2Zvcm1Qcm9wc1tTQ0FMRV0gPSB0cmFuc2Zvcm1Qcm9wc1tUUkFOU0ZPUk1fUEVSU1BFQ1RJVkVdID0gdHJ1ZTtcblxuVEVSTVMuZm9yRWFjaCgodGVybSkgPT4gYXhlcy5mb3JFYWNoKChheGlzKSA9PiB0cmFuc2Zvcm1Qcm9wc1t0ZXJtICsgYXhpc10gPSB0cnVlKSk7XG5cbmV4cG9ydCBkZWZhdWx0IHRyYW5zZm9ybVByb3BzOyJdfQ==

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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRpY2suanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUlBLElBQU0sTUFBTSxHQUFHLEFBQUMsT0FBTyxNQUFNLEtBQUssV0FBVyxJQUFJLE1BQU0sQ0FBQyxxQkFBcUIsR0FBSSxJQUFJLEdBQUcsS0FBSyxDQUFDOztBQUU5RixJQUFJLElBQUksWUFBQSxDQUFDOztBQUVULElBQUksTUFBTSxFQUFFO0FBQ1IsUUFBSSxHQUFHLE1BQU0sQ0FBQyxxQkFBcUIsQ0FBQztDQUV2QyxNQUFNOzs7Ozs7Ozs7Ozs7Ozs7QUFlSCxZQUFJLFFBQVEsR0FBRyxDQUFDLENBQUM7O0FBRWpCLFlBQUksR0FBRyxVQUFDLFFBQVEsRUFBSztBQUNqQixnQkFBTSxXQUFXLEdBQUcsSUFBSSxJQUFJLEVBQUUsQ0FBQyxPQUFPLEVBQUUsQ0FBQztBQUN6QyxnQkFBTSxVQUFVLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsRUFBRSxJQUFJLFdBQVcsR0FBRyxRQUFRLENBQUEsQUFBQyxDQUFDLENBQUM7O0FBRTlELG9CQUFRLEdBQUcsV0FBVyxHQUFHLFVBQVUsQ0FBQzs7QUFFcEMsc0JBQVUsQ0FBQzt1QkFBTSxRQUFRLENBQUMsUUFBUSxDQUFDO2FBQUEsRUFBRSxVQUFVLENBQUMsQ0FBQztTQUNwRCxDQUFBOztDQUNKOztrQkFFYyxJQUFJIiwiZmlsZSI6InRpY2suanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICAgIERldGVjdCBhbmQgbG9hZCBhbiBhcHByb3ByaWF0ZSBjbG9jayBzZXR0aW5nIGZvciB0aGUgZW52aXJvbm1lbnRcbiovXG5cbmNvbnN0IGhhc1JBRiA9ICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKSA/IHRydWUgOiBmYWxzZTtcblxubGV0IHRpY2s7XG5cbmlmIChoYXNSQUYpIHtcbiAgICB0aWNrID0gd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZTtcblxufSBlbHNlIHtcbiAgICAvKlxuICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUgcG9seWZpbGxcbiAgICAgICAgXG4gICAgICAgIEZvciBJRTgvOSBGbGluc3RvbmVzIGFuZCBub24tYnJvd3NlciBlbnZpcm9ubWVudHNcblxuICAgICAgICBUYWtlbiBmcm9tIFBhdWwgSXJpc2guIFdlJ3ZlIHN0cmlwcGVkIG91dCBjYW5jZWxBbmltYXRpb25GcmFtZSBjaGVja3MgYmVjYXVzZSB3ZSBkb24ndCBmb3ggd2l0aCB0aGF0XG4gICAgICAgIFxuICAgICAgICBodHRwOi8vcGF1bGlyaXNoLmNvbS8yMDExL3JlcXVlc3RhbmltYXRpb25mcmFtZS1mb3Itc21hcnQtYW5pbWF0aW5nL1xuICAgICAgICBodHRwOi8vbXkub3BlcmEuY29tL2Vtb2xsZXIvYmxvZy8yMDExLzEyLzIwL3JlcXVlc3RhbmltYXRpb25mcmFtZS1mb3Itc21hcnQtZXItYW5pbWF0aW5nXG4gICAgICAgICBcbiAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lIHBvbHlmaWxsIGJ5IEVyaWsgTcO2bGxlci4gZml4ZXMgZnJvbSBQYXVsIElyaXNoIGFuZCBUaW5vIFppamRlbFxuICAgICAgICAgXG4gICAgICAgIE1JVCBsaWNlbnNlXG4gICAgKi9cbiAgICBsZXQgbGFzdFRpbWUgPSAwO1xuXG4gICAgdGljayA9IChjYWxsYmFjaykgPT4ge1xuICAgICAgICBjb25zdCBjdXJyZW50VGltZSA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuICAgICAgICBjb25zdCB0aW1lVG9DYWxsID0gTWF0aC5tYXgoMCwgMTYgLSAoY3VycmVudFRpbWUgLSBsYXN0VGltZSkpO1xuXG4gICAgICAgIGxhc3RUaW1lID0gY3VycmVudFRpbWUgKyB0aW1lVG9DYWxsO1xuXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4gY2FsbGJhY2sobGFzdFRpbWUpLCB0aW1lVG9DYWxsKTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHRpY2s7Il19

/***/ }
/******/ ]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgZjFkMWY2MzVkN2FhNmNiYmExYjQiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xvYWQvZ2xvYmFsLmpzIiwid2VicGFjazovLy8uL3NyYy9wb3Btb3Rpb24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FjdG9yL0FjdG9yLmpzIiwid2VicGFjazovLy8uL3NyYy9hY3Rpb25zL0FjdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYWN0aW9ucy9Ud2Vlbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYWN0aW9ucy9QaHlzaWNzLmpzIiwid2VicGFjazovLy8uL3NyYy9hY3Rpb25zL1RyYWNrLmpzIiwid2VicGFjazovLy8uL3NyYy9pbnB1dC9JbnB1dC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5wdXQvTW91c2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2lucHV0L1RvdWNoLmpzIiwid2VicGFjazovLy8uL3NyYy9yZW5kZXIvYXR0ci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVuZGVyL2Nzcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVuZGVyL3N2Zy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVuZGVyL3N2Zy1wYXRoLmpzIiwid2VicGFjazovLy8uL3NyYy9pbmMvY2FsYy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5jL3V0aWxzLmpzIiwid2VicGFjazovLy8uL3NyYy9hY3Rpb25zL3R3ZWVuL2NyZWF0ZS1iZXppZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FjdGlvbnMvdHdlZW4vY3JlYXRlLWVhc2luZy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdHJhbnNmb3JtZXJzL21hcC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5jL3NlbGVjdC1hY3Rvci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcHJvY2Vzcy90aW1lci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5jL3N0YWdnZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZhbHVlLXR5cGVzL2FscGhhLmpzIiwid2VicGFjazovLy8uL3NyYy92YWx1ZS10eXBlcy9hbmdsZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdmFsdWUtdHlwZXMvYXhlcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdmFsdWUtdHlwZXMvY29sb3IuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZhbHVlLXR5cGVzL2NvbXBsZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZhbHVlLXR5cGVzL2hleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdmFsdWUtdHlwZXMvaHNsLmpzIiwid2VicGFjazovLy8uL3NyYy92YWx1ZS10eXBlcy9wb3NpdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZhbHVlLXR5cGVzL3B4LmpzIiwid2VicGFjazovLy8uL3NyYy92YWx1ZS10eXBlcy9yZ2IuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZhbHVlLXR5cGVzL3NjYWxlLmpzIiwid2VicGFjazovLy8uL3NyYy92YWx1ZS10eXBlcy9zaGFkb3cuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Byb2Nlc3MvUHJvY2Vzcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYWN0aW9ucy90d2Vlbi9wcmVzZXQtZWFzaW5nLmpzIiwid2VicGFjazovLy8uL3NyYy9yZW5kZXIvY3NzL3N0YXRlLW1hcC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVuZGVyL2Nzcy92YWx1ZS10eXBlLW1hcC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVuZGVyL2Nzcy9wcmVmaXhlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVuZGVyL2Nzcy9idWlsZC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVuZGVyL3N2Zy92YWx1ZS10eXBlLW1hcC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVuZGVyL3N2Zy9idWlsZC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVuZGVyL3N2Zy1wYXRoL2J1aWxkLmpzIiwid2VicGFjazovLy8uL3NyYy9yZW5kZXIvc3ZnLXBhdGgvc3RhdGUtbWFwLmpzIiwid2VicGFjazovLy8uL3NyYy92YWx1ZS10eXBlcy9zZXR0aW5ncy9kZWZhdWx0LXByb3BzLmpzIiwid2VicGFjazovLy8uL3NyYy92YWx1ZS10eXBlcy9zZXR0aW5ncy9kaWN0aW9uYXJ5LmpzIiwid2VicGFjazovLy8uL3NyYy9wcm9jZXNzL2xvb3AuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlbmRlci9jc3MvdHJhbnNmb3JtLXByb3BzLmpzIiwid2VicGFjazovLy8uL3NyYy9wcm9jZXNzL3RpY2suanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVCQUFlO0FBQ2Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0Esd0M7Ozs7Ozs7QUN0Q0E7O0FBRUE7O0FBRUE7O0FBRUEsd0NBQXVDLDZCQUE2QixZQUFZLEVBQUUsT0FBTyxpQkFBaUIsbUJBQW1CLHVCQUF1Qiw0RUFBNEUsRUFBRSxFQUFFLHNCQUFzQixlQUFlLEVBQUU7O0FBRTNROztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDRDQUEyQyx1cEI7Ozs7OztBQ2YzQzs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztB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QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsTUFBSzs7QUFFTDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsNENBQTJDLHUxZTs7Ozs7O0FDMVMzQzs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsb0VBQW1FLGFBQWE7QUFDaEY7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7O0FBRUw7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsb0JBQW1CLGFBQWE7QUFDaEM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQSxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE1BQUs7O0FBRUw7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0EsTUFBSzs7QUFFTDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEscUJBQW9COztBQUVwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsNENBQTJDLG15Yzs7Ozs7O0FDN1MzQzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLDhCQUE2QjtBQUM3Qjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtB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QUN2RTs7QUFFQTtBQUNBLEVBQUM7O0FBRUQ7QUFDQTtBQUNBLDRDQUEyQyx1aUg7Ozs7OztBQzVGM0M7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUEsdUNBQXNDLHVDQUF1QyxnQkFBZ0I7O0FBRTdGO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw0Q0FBMkMsdXRLOzs7Ozs7QUMxRjNDOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRDQUEyQywyZjs7Ozs7O0FDVjNDOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBLHVDQUFzQyx1Q0FBdUMsZ0JBQWdCOztBQUU3RjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FB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O0FBQ0E7QUFDQSxFQUFDO0FBQ0Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxjQUFhO0FBQ2I7QUFDQSxNQUFLO0FBQ0w7O0FBRUE7QUFDQSw0Q0FBMkMsbTJFIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGV4cG9ydHM6IHt9LFxuIFx0XHRcdGlkOiBtb2R1bGVJZCxcbiBcdFx0XHRsb2FkZWQ6IGZhbHNlXG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oMCk7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogd2VicGFjay9ib290c3RyYXAgZjFkMWY2MzVkN2FhNmNiYmExYjRcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbnZhciBfcG9wbW90aW9uID0gcmVxdWlyZSgnLi4vcG9wbW90aW9uJyk7XG5cbnZhciBwb3Btb3Rpb24gPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChfcG9wbW90aW9uKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQob2JqKSB7IGlmIChvYmogJiYgb2JqLl9fZXNNb2R1bGUpIHsgcmV0dXJuIG9iajsgfSBlbHNlIHsgdmFyIG5ld09iaiA9IHt9OyBpZiAob2JqICE9IG51bGwpIHsgZm9yICh2YXIga2V5IGluIG9iaikgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwga2V5KSkgbmV3T2JqW2tleV0gPSBvYmpba2V5XTsgfSB9IG5ld09iai5kZWZhdWx0ID0gb2JqOyByZXR1cm4gbmV3T2JqOyB9IH1cblxudmFyIFVJcmVmID0gd2luZG93Lm1vdGlvbjtcblxucG9wbW90aW9uLm5vQ29uZmxpY3QgPSBmdW5jdGlvbiAoKSB7XG4gICAgd2luZG93Lm1vdGlvbiA9IFVJcmVmO1xufTtcblxud2luZG93Lm1vdGlvbiA9IHdpbmRvdy5wb3Btb3Rpb24gPSBwb3Btb3Rpb247XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW1kc2IySmhiQzVxY3lKZExDSnVZVzFsY3lJNlcxMHNJbTFoY0hCcGJtZHpJam9pT3pzN08wbEJRVmtzVTBGQlV6czdPenRCUVVWeVFpeEpRVUZOTEV0QlFVc3NSMEZCUnl4TlFVRk5MRU5CUVVNc1RVRkJUU3hEUVVGRE96dEJRVVUxUWl4VFFVRlRMRU5CUVVNc1ZVRkJWU3hIUVVGSExGbEJRVms3UVVGREwwSXNWVUZCVFN4RFFVRkRMRTFCUVUwc1IwRkJSeXhMUVVGTExFTkJRVU03UTBGRGVrSXNRMEZCUXpzN1FVRkZSaXhOUVVGTkxFTkJRVU1zVFVGQlRTeEhRVUZITEUxQlFVMHNRMEZCUXl4VFFVRlRMRWRCUVVjc1UwRkJVeXhEUVVGRElpd2labWxzWlNJNkltZHNiMkpoYkM1cWN5SXNJbk52ZFhKalpYTkRiMjUwWlc1MElqcGJJbWx0Y0c5eWRDQXFJR0Z6SUhCdmNHMXZkR2x2YmlCbWNtOXRJQ2N1TGk5d2IzQnRiM1JwYjI0bk8xeHVYRzVqYjI1emRDQlZTWEpsWmlBOUlIZHBibVJ2ZHk1dGIzUnBiMjQ3WEc1Y2JuQnZjRzF2ZEdsdmJpNXViME52Ym1ac2FXTjBJRDBnWm5WdVkzUnBiMjRnS0NrZ2UxeHVJQ0FnSUhkcGJtUnZkeTV0YjNScGIyNGdQU0JWU1hKbFpqdGNibjA3WEc1Y2JuZHBibVJ2ZHk1dGIzUnBiMjRnUFNCM2FXNWtiM2N1Y0c5d2JXOTBhVzl1SUQwZ2NHOXdiVzkwYVc5dU95SmRmUT09XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9sb2FkL2dsb2JhbC5qc1xuICoqIG1vZHVsZSBpZCA9IDBcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHMuc2hhZG93VHlwZSA9IGV4cG9ydHMuc2NhbGVUeXBlID0gZXhwb3J0cy5yZ2JUeXBlID0gZXhwb3J0cy5weFR5cGUgPSBleHBvcnRzLnBvc2l0aW9uc1R5cGUgPSBleHBvcnRzLmhzbFR5cGUgPSBleHBvcnRzLmhleFR5cGUgPSBleHBvcnRzLmNvbXBsZXhUeXBlID0gZXhwb3J0cy5jb2xvclR5cGUgPSBleHBvcnRzLmF4ZXNUeXBlID0gZXhwb3J0cy5hbmdsZVR5cGUgPSBleHBvcnRzLmFscGhhVHlwZSA9IGV4cG9ydHMuc3RhZ2dlciA9IGV4cG9ydHMuc2V0RGlsYXRpb24gPSBleHBvcnRzLnNlbGVjdEFjdG9yID0gZXhwb3J0cy5jcmVhdGVNYXBUcmFuc2Zvcm0gPSBleHBvcnRzLmNyZWF0ZUVhc2luZyA9IGV4cG9ydHMuY3ViaWNCZXppZXIgPSBleHBvcnRzLnV0aWxzID0gZXhwb3J0cy5jYWxjID0gZXhwb3J0cy5yZW5kZXJTVkdQYXRoID0gZXhwb3J0cy5yZW5kZXJTVkcgPSBleHBvcnRzLnJlbmRlckNTUyA9IGV4cG9ydHMucmVuZGVyQXR0ciA9IGV4cG9ydHMuVG91Y2ggPSBleHBvcnRzLk1vdXNlID0gZXhwb3J0cy5JbnB1dCA9IGV4cG9ydHMuVHJhY2sgPSBleHBvcnRzLlBoeXNpY3MgPSBleHBvcnRzLlR3ZWVuID0gZXhwb3J0cy5BY3Rpb24gPSBleHBvcnRzLkFjdG9yID0gdW5kZWZpbmVkO1xuXG52YXIgX0FjdG9yMiA9IHJlcXVpcmUoJy4vYWN0b3IvQWN0b3InKTtcblxudmFyIF9BY3RvcjMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9BY3RvcjIpO1xuXG52YXIgX0FjdGlvbjIgPSByZXF1aXJlKCcuL2FjdGlvbnMvQWN0aW9uJyk7XG5cbnZhciBfQWN0aW9uMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX0FjdGlvbjIpO1xuXG52YXIgX1R3ZWVuMiA9IHJlcXVpcmUoJy4vYWN0aW9ucy9Ud2VlbicpO1xuXG52YXIgX1R3ZWVuMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX1R3ZWVuMik7XG5cbnZhciBfUGh5c2ljczIgPSByZXF1aXJlKCcuL2FjdGlvbnMvUGh5c2ljcycpO1xuXG52YXIgX1BoeXNpY3MzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfUGh5c2ljczIpO1xuXG52YXIgX1RyYWNrMiA9IHJlcXVpcmUoJy4vYWN0aW9ucy9UcmFjaycpO1xuXG52YXIgX1RyYWNrMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX1RyYWNrMik7XG5cbnZhciBfSW5wdXQyID0gcmVxdWlyZSgnLi9pbnB1dC9JbnB1dCcpO1xuXG52YXIgX0lucHV0MyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX0lucHV0Mik7XG5cbnZhciBfTW91c2UyID0gcmVxdWlyZSgnLi9pbnB1dC9Nb3VzZScpO1xuXG52YXIgX01vdXNlMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX01vdXNlMik7XG5cbnZhciBfVG91Y2gyID0gcmVxdWlyZSgnLi9pbnB1dC9Ub3VjaCcpO1xuXG52YXIgX1RvdWNoMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX1RvdWNoMik7XG5cbnZhciBfYXR0ciA9IHJlcXVpcmUoJy4vcmVuZGVyL2F0dHInKTtcblxudmFyIF9hdHRyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2F0dHIpO1xuXG52YXIgX2NzcyA9IHJlcXVpcmUoJy4vcmVuZGVyL2NzcycpO1xuXG52YXIgX2NzczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jc3MpO1xuXG52YXIgX3N2ZyA9IHJlcXVpcmUoJy4vcmVuZGVyL3N2ZycpO1xuXG52YXIgX3N2ZzIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9zdmcpO1xuXG52YXIgX3N2Z1BhdGggPSByZXF1aXJlKCcuL3JlbmRlci9zdmctcGF0aCcpO1xuXG52YXIgX3N2Z1BhdGgyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfc3ZnUGF0aCk7XG5cbnZhciBfY2FsYzIgPSByZXF1aXJlKCcuL2luYy9jYWxjJyk7XG5cbnZhciBfY2FsYyA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKF9jYWxjMik7XG5cbnZhciBfdXRpbHMyID0gcmVxdWlyZSgnLi9pbmMvdXRpbHMnKTtcblxudmFyIF91dGlscyA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKF91dGlsczIpO1xuXG52YXIgX2NyZWF0ZUJlemllciA9IHJlcXVpcmUoJy4vYWN0aW9ucy90d2Vlbi9jcmVhdGUtYmV6aWVyJyk7XG5cbnZhciBfY3JlYXRlQmV6aWVyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NyZWF0ZUJlemllcik7XG5cbnZhciBfY3JlYXRlRWFzaW5nMiA9IHJlcXVpcmUoJy4vYWN0aW9ucy90d2Vlbi9jcmVhdGUtZWFzaW5nJyk7XG5cbnZhciBfY3JlYXRlRWFzaW5nMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NyZWF0ZUVhc2luZzIpO1xuXG52YXIgX21hcCA9IHJlcXVpcmUoJy4vdHJhbnNmb3JtZXJzL21hcCcpO1xuXG52YXIgX21hcDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9tYXApO1xuXG52YXIgX3NlbGVjdEFjdG9yMiA9IHJlcXVpcmUoJy4vaW5jL3NlbGVjdC1hY3RvcicpO1xuXG52YXIgX3NlbGVjdEFjdG9yMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3NlbGVjdEFjdG9yMik7XG5cbnZhciBfdGltZXIgPSByZXF1aXJlKCcuL3Byb2Nlc3MvdGltZXInKTtcblxudmFyIF90aW1lcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF90aW1lcik7XG5cbnZhciBfc3RhZ2dlcjIgPSByZXF1aXJlKCcuL2luYy9zdGFnZ2VyJyk7XG5cbnZhciBfc3RhZ2dlcjMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9zdGFnZ2VyMik7XG5cbnZhciBfYWxwaGEgPSByZXF1aXJlKCcuL3ZhbHVlLXR5cGVzL2FscGhhJyk7XG5cbnZhciBfYWxwaGEyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfYWxwaGEpO1xuXG52YXIgX2FuZ2xlID0gcmVxdWlyZSgnLi92YWx1ZS10eXBlcy9hbmdsZScpO1xuXG52YXIgX2FuZ2xlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2FuZ2xlKTtcblxudmFyIF9heGVzID0gcmVxdWlyZSgnLi92YWx1ZS10eXBlcy9heGVzJyk7XG5cbnZhciBfYXhlczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9heGVzKTtcblxudmFyIF9jb2xvciA9IHJlcXVpcmUoJy4vdmFsdWUtdHlwZXMvY29sb3InKTtcblxudmFyIF9jb2xvcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jb2xvcik7XG5cbnZhciBfY29tcGxleCA9IHJlcXVpcmUoJy4vdmFsdWUtdHlwZXMvY29tcGxleCcpO1xuXG52YXIgX2NvbXBsZXgyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY29tcGxleCk7XG5cbnZhciBfaGV4ID0gcmVxdWlyZSgnLi92YWx1ZS10eXBlcy9oZXgnKTtcblxudmFyIF9oZXgyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfaGV4KTtcblxudmFyIF9oc2wgPSByZXF1aXJlKCcuL3ZhbHVlLXR5cGVzL2hzbCcpO1xuXG52YXIgX2hzbDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9oc2wpO1xuXG52YXIgX3Bvc2l0aW9ucyA9IHJlcXVpcmUoJy4vdmFsdWUtdHlwZXMvcG9zaXRpb25zJyk7XG5cbnZhciBfcG9zaXRpb25zMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3Bvc2l0aW9ucyk7XG5cbnZhciBfcHggPSByZXF1aXJlKCcuL3ZhbHVlLXR5cGVzL3B4Jyk7XG5cbnZhciBfcHgyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcHgpO1xuXG52YXIgX3JnYiA9IHJlcXVpcmUoJy4vdmFsdWUtdHlwZXMvcmdiJyk7XG5cbnZhciBfcmdiMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JnYik7XG5cbnZhciBfc2NhbGUgPSByZXF1aXJlKCcuL3ZhbHVlLXR5cGVzL3NjYWxlJyk7XG5cbnZhciBfc2NhbGUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfc2NhbGUpO1xuXG52YXIgX3NoYWRvdyA9IHJlcXVpcmUoJy4vdmFsdWUtdHlwZXMvc2hhZG93Jyk7XG5cbnZhciBfc2hhZG93MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3NoYWRvdyk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKG9iaikgeyBpZiAob2JqICYmIG9iai5fX2VzTW9kdWxlKSB7IHJldHVybiBvYmo7IH0gZWxzZSB7IHZhciBuZXdPYmogPSB7fTsgaWYgKG9iaiAhPSBudWxsKSB7IGZvciAodmFyIGtleSBpbiBvYmopIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGtleSkpIG5ld09ialtrZXldID0gb2JqW2tleV07IH0gfSBuZXdPYmouZGVmYXVsdCA9IG9iajsgcmV0dXJuIG5ld09iajsgfSB9XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmV4cG9ydHMuQWN0b3IgPSBfQWN0b3IzLmRlZmF1bHQ7XG5cbi8vIEFjdGlvbnNcbi8vIEFjdG9yXG5cbmV4cG9ydHMuQWN0aW9uID0gX0FjdGlvbjMuZGVmYXVsdDtcbmV4cG9ydHMuVHdlZW4gPSBfVHdlZW4zLmRlZmF1bHQ7XG5leHBvcnRzLlBoeXNpY3MgPSBfUGh5c2ljczMuZGVmYXVsdDtcbmV4cG9ydHMuVHJhY2sgPSBfVHJhY2szLmRlZmF1bHQ7XG5cbi8vIElucHV0XG5cbmV4cG9ydHMuSW5wdXQgPSBfSW5wdXQzLmRlZmF1bHQ7XG5leHBvcnRzLk1vdXNlID0gX01vdXNlMy5kZWZhdWx0O1xuZXhwb3J0cy5Ub3VjaCA9IF9Ub3VjaDMuZGVmYXVsdDtcblxuLy8gUmVuZGVyZXJzXG5cbmV4cG9ydHMucmVuZGVyQXR0ciA9IF9hdHRyMi5kZWZhdWx0O1xuZXhwb3J0cy5yZW5kZXJDU1MgPSBfY3NzMi5kZWZhdWx0O1xuZXhwb3J0cy5yZW5kZXJTVkcgPSBfc3ZnMi5kZWZhdWx0O1xuZXhwb3J0cy5yZW5kZXJTVkdQYXRoID0gX3N2Z1BhdGgyLmRlZmF1bHQ7XG5cbi8vIFV0aWxzXG5cbmV4cG9ydHMuY2FsYyA9IF9jYWxjO1xuZXhwb3J0cy51dGlscyA9IF91dGlscztcbmV4cG9ydHMuY3ViaWNCZXppZXIgPSBfY3JlYXRlQmV6aWVyMi5kZWZhdWx0O1xuZXhwb3J0cy5jcmVhdGVFYXNpbmcgPSBfY3JlYXRlRWFzaW5nMy5kZWZhdWx0O1xuZXhwb3J0cy5jcmVhdGVNYXBUcmFuc2Zvcm0gPSBfbWFwMi5kZWZhdWx0O1xuZXhwb3J0cy5zZWxlY3RBY3RvciA9IF9zZWxlY3RBY3RvcjMuZGVmYXVsdDtcbmV4cG9ydHMuc2V0RGlsYXRpb24gPSBfdGltZXIyLmRlZmF1bHQ7XG5leHBvcnRzLnN0YWdnZXIgPSBfc3RhZ2dlcjMuZGVmYXVsdDtcblxuLy8gVmFsdWUgdHlwZXNcblxuZXhwb3J0cy5hbHBoYVR5cGUgPSBfYWxwaGEyLmRlZmF1bHQ7XG5leHBvcnRzLmFuZ2xlVHlwZSA9IF9hbmdsZTIuZGVmYXVsdDtcbmV4cG9ydHMuYXhlc1R5cGUgPSBfYXhlczIuZGVmYXVsdDtcbmV4cG9ydHMuY29sb3JUeXBlID0gX2NvbG9yMi5kZWZhdWx0O1xuZXhwb3J0cy5jb21wbGV4VHlwZSA9IF9jb21wbGV4Mi5kZWZhdWx0O1xuZXhwb3J0cy5oZXhUeXBlID0gX2hleDIuZGVmYXVsdDtcbmV4cG9ydHMuaHNsVHlwZSA9IF9oc2wyLmRlZmF1bHQ7XG5leHBvcnRzLnBvc2l0aW9uc1R5cGUgPSBfcG9zaXRpb25zMi5kZWZhdWx0O1xuZXhwb3J0cy5weFR5cGUgPSBfcHgyLmRlZmF1bHQ7XG5leHBvcnRzLnJnYlR5cGUgPSBfcmdiMi5kZWZhdWx0O1xuZXhwb3J0cy5zY2FsZVR5cGUgPSBfc2NhbGUyLmRlZmF1bHQ7XG5leHBvcnRzLnNoYWRvd1R5cGUgPSBfc2hhZG93Mi5kZWZhdWx0O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluQnZjRzF2ZEdsdmJpNXFjeUpkTENKdVlXMWxjeUk2VzEwc0ltMWhjSEJwYm1keklqb2lPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenRSUVVOUExFdEJRVXM3T3pzN08xRkJSMHdzVFVGQlRUdFJRVU5PTEV0QlFVczdVVUZEVEN4UFFVRlBPMUZCUTFBc1MwRkJTenM3T3p0UlFVZE1MRXRCUVVzN1VVRkRUQ3hMUVVGTE8xRkJRMHdzUzBGQlN6czdPenRSUVVkTUxGVkJRVlU3VVVGRFZpeFRRVUZUTzFGQlExUXNVMEZCVXp0UlFVTlVMR0ZCUVdFN096czdVVUZIVWl4SlFVRkpPMUZCUTBvc1MwRkJTenRSUVVOV0xGZEJRVmM3VVVGRFdDeFpRVUZaTzFGQlExb3NhMEpCUVd0Q08xRkJRMnhDTEZkQlFWYzdVVUZEV0N4WFFVRlhPMUZCUTFnc1QwRkJUenM3T3p0UlFVZFFMRk5CUVZNN1VVRkRWQ3hUUVVGVE8xRkJRMVFzVVVGQlVUdFJRVU5TTEZOQlFWTTdVVUZEVkN4WFFVRlhPMUZCUTFnc1QwRkJUenRSUVVOUUxFOUJRVTg3VVVGRFVDeGhRVUZoTzFGQlEySXNUVUZCVFR0UlFVTk9MRTlCUVU4N1VVRkRVQ3hUUVVGVE8xRkJRMVFzVlVGQlZTSXNJbVpwYkdVaU9pSndiM0J0YjNScGIyNHVhbk1pTENKemIzVnlZMlZ6UTI5dWRHVnVkQ0k2V3lJdkx5QkJZM1J2Y2x4dVpYaHdiM0owSUVGamRHOXlJR1p5YjIwZ0p5NHZZV04wYjNJdlFXTjBiM0luTzF4dVhHNHZMeUJCWTNScGIyNXpYRzVsZUhCdmNuUWdRV04wYVc5dUlHWnliMjBnSnk0dllXTjBhVzl1Y3k5QlkzUnBiMjRuTzF4dVpYaHdiM0owSUZSM1pXVnVJR1p5YjIwZ0p5NHZZV04wYVc5dWN5OVVkMlZsYmljN1hHNWxlSEJ2Y25RZ1VHaDVjMmxqY3lCbWNtOXRJQ2N1TDJGamRHbHZibk12VUdoNWMybGpjeWM3WEc1bGVIQnZjblFnVkhKaFkyc2dabkp2YlNBbkxpOWhZM1JwYjI1ekwxUnlZV05ySnp0Y2JseHVMeThnU1c1d2RYUmNibVY0Y0c5eWRDQkpibkIxZENCbWNtOXRJQ2N1TDJsdWNIVjBMMGx1Y0hWMEp6dGNibVY0Y0c5eWRDQk5iM1Z6WlNCbWNtOXRJQ2N1TDJsdWNIVjBMMDF2ZFhObEp6dGNibVY0Y0c5eWRDQlViM1ZqYUNCbWNtOXRJQ2N1TDJsdWNIVjBMMVJ2ZFdOb0p6dGNibHh1THk4Z1VtVnVaR1Z5WlhKelhHNWxlSEJ2Y25RZ2NtVnVaR1Z5UVhSMGNpQm1jbTl0SUNjdUwzSmxibVJsY2k5aGRIUnlKenRjYm1WNGNHOXlkQ0J5Wlc1a1pYSkRVMU1nWm5KdmJTQW5MaTl5Wlc1a1pYSXZZM056Snp0Y2JtVjRjRzl5ZENCeVpXNWtaWEpUVmtjZ1puSnZiU0FuTGk5eVpXNWtaWEl2YzNabkp6dGNibVY0Y0c5eWRDQnlaVzVrWlhKVFZrZFFZWFJvSUdaeWIyMGdKeTR2Y21WdVpHVnlMM04yWnkxd1lYUm9KenRjYmx4dUx5OGdWWFJwYkhOY2JtVjRjRzl5ZENBcUlHRnpJR05oYkdNZ1puSnZiU0FuTGk5cGJtTXZZMkZzWXljN1hHNWxlSEJ2Y25RZ0tpQmhjeUIxZEdsc2N5Qm1jbTl0SUNjdUwybHVZeTkxZEdsc2N5YzdYRzVsZUhCdmNuUWdZM1ZpYVdOQ1pYcHBaWElnWm5KdmJTQW5MaTloWTNScGIyNXpMM1IzWldWdUwyTnlaV0YwWlMxaVpYcHBaWEluTzF4dVpYaHdiM0owSUdOeVpXRjBaVVZoYzJsdVp5Qm1jbTl0SUNjdUwyRmpkR2x2Ym5NdmRIZGxaVzR2WTNKbFlYUmxMV1ZoYzJsdVp5YzdYRzVsZUhCdmNuUWdZM0psWVhSbFRXRndWSEpoYm5ObWIzSnRJR1p5YjIwZ0p5NHZkSEpoYm5ObWIzSnRaWEp6TDIxaGNDYzdYRzVsZUhCdmNuUWdjMlZzWldOMFFXTjBiM0lnWm5KdmJTQW5MaTlwYm1NdmMyVnNaV04wTFdGamRHOXlKenRjYm1WNGNHOXlkQ0J6WlhSRWFXeGhkR2x2YmlCbWNtOXRJQ2N1TDNCeWIyTmxjM012ZEdsdFpYSW5PMXh1Wlhod2IzSjBJSE4wWVdkblpYSWdabkp2YlNBbkxpOXBibU12YzNSaFoyZGxjaWM3WEc1Y2JpOHZJRlpoYkhWbElIUjVjR1Z6WEc1bGVIQnZjblFnWVd4d2FHRlVlWEJsSUdaeWIyMGdKeTR2ZG1Gc2RXVXRkSGx3WlhNdllXeHdhR0VuTzF4dVpYaHdiM0owSUdGdVoyeGxWSGx3WlNCbWNtOXRJQ2N1TDNaaGJIVmxMWFI1Y0dWekwyRnVaMnhsSnp0Y2JtVjRjRzl5ZENCaGVHVnpWSGx3WlNCbWNtOXRJQ2N1TDNaaGJIVmxMWFI1Y0dWekwyRjRaWE1uTzF4dVpYaHdiM0owSUdOdmJHOXlWSGx3WlNCbWNtOXRJQ2N1TDNaaGJIVmxMWFI1Y0dWekwyTnZiRzl5Snp0Y2JtVjRjRzl5ZENCamIyMXdiR1Y0Vkhsd1pTQm1jbTl0SUNjdUwzWmhiSFZsTFhSNWNHVnpMMk52YlhCc1pYZ25PMXh1Wlhod2IzSjBJR2hsZUZSNWNHVWdabkp2YlNBbkxpOTJZV3gxWlMxMGVYQmxjeTlvWlhnbk8xeHVaWGh3YjNKMElHaHpiRlI1Y0dVZ1puSnZiU0FuTGk5MllXeDFaUzEwZVhCbGN5OW9jMnduTzF4dVpYaHdiM0owSUhCdmMybDBhVzl1YzFSNWNHVWdabkp2YlNBbkxpOTJZV3gxWlMxMGVYQmxjeTl3YjNOcGRHbHZibk1uTzF4dVpYaHdiM0owSUhCNFZIbHdaU0JtY205dElDY3VMM1poYkhWbExYUjVjR1Z6TDNCNEp6dGNibVY0Y0c5eWRDQnlaMkpVZVhCbElHWnliMjBnSnk0dmRtRnNkV1V0ZEhsd1pYTXZjbWRpSnp0Y2JtVjRjRzl5ZENCelkyRnNaVlI1Y0dVZ1puSnZiU0FuTGk5MllXeDFaUzEwZVhCbGN5OXpZMkZzWlNjN1hHNWxlSEJ2Y25RZ2MyaGhaRzkzVkhsd1pTQm1jbTl0SUNjdUwzWmhiSFZsTFhSNWNHVnpMM05vWVdSdmR5YzdJbDE5XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9wb3Btb3Rpb24uanNcbiAqKiBtb2R1bGUgaWQgPSAxXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfQWN0aW9uMiA9IHJlcXVpcmUoJy4uL2FjdGlvbnMvQWN0aW9uJyk7XG5cbnZhciBfQWN0aW9uMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX0FjdGlvbjIpO1xuXG52YXIgX3V0aWxzID0gcmVxdWlyZSgnLi4vaW5jL3V0aWxzJyk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKCFzZWxmKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gY2FsbCAmJiAodHlwZW9mIGNhbGwgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikgPyBjYWxsIDogc2VsZjsgfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb24sIG5vdCBcIiArIHR5cGVvZiBzdXBlckNsYXNzKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCBlbnVtZXJhYmxlOiBmYWxzZSwgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LnNldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKSA6IHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7IH1cblxudmFyIEFjdG9yID0gKGZ1bmN0aW9uIChfQWN0aW9uKSB7XG4gICAgX2luaGVyaXRzKEFjdG9yLCBfQWN0aW9uKTtcblxuICAgIGZ1bmN0aW9uIEFjdG9yKCkge1xuICAgICAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgQWN0b3IpO1xuXG4gICAgICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICAgICAgICBhcmdzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIF90aGlzID0gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgX0FjdGlvbi5jYWxsLmFwcGx5KF9BY3Rpb24sIFt0aGlzXS5jb25jYXQoYXJncykpKTtcblxuICAgICAgICBfdGhpcy5vbmNlKCk7XG4gICAgICAgIHJldHVybiBfdGhpcztcbiAgICB9XG5cbiAgICBBY3Rvci5wcm90b3R5cGUuZG8gPSBmdW5jdGlvbiBfZG8oYWN0aW9uKSB7XG4gICAgICAgIGlmICh0aGlzLnJlZHVjZXIpIHtcbiAgICAgICAgICAgIHRoaXMuc3RhcnQodGhpcy5yZWR1Y2VyKGFjdGlvbiwgdGhpcy52YWx1ZXMpKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBBY3Rvci5wcm90b3R5cGUuc3RhcnQgPSBmdW5jdGlvbiBzdGFydChhY3Rpb24pIHtcbiAgICAgICAgX0FjdGlvbi5wcm90b3R5cGUuc3RhcnQuY2FsbCh0aGlzKTtcbiAgICAgICAgdmFyIGFjdGlvbkluc3RhbmNlID0gYWN0aW9uLmluaGVyaXQoKTtcblxuICAgICAgICAvLyBBc3NpZ24gYWN0aW9uIHRvIGFwcHJvcHJpYXRlIHZhbHVlc1xuXG4gICAgICAgIHJldHVybiBhY3Rpb25JbnN0YW5jZTtcbiAgICB9O1xuXG4gICAgQWN0b3IucHJvdG90eXBlLndpbGxSZW5kZXIgPSBmdW5jdGlvbiB3aWxsUmVuZGVyKGFjdG9yLCBmcmFtZVN0YW1wLCBlbGFwc2VkKSB7XG4gICAgICAgIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gICAgICAgIHZhciBoYXNDaGFuZ2VkID0gZmFsc2U7XG5cbiAgICAgICAgKDAsIF91dGlscy5lYWNoKSh0aGlzLnZhbHVlcywgZnVuY3Rpb24gKHZhbHVlLCBrZXkpIHtcbiAgICAgICAgICAgIHZhciB1cGRhdGVkVmFsdWUgPSB2YWx1ZS5jdXJyZW50O1xuXG4gICAgICAgICAgICAvLyBVcGRhdGUgdmFsdWUgYmFzZWQgb24gYWN0aXZlIGFjdGlvblxuICAgICAgICAgICAgaWYgKHZhbHVlLmFjdGlvbikge1xuICAgICAgICAgICAgICAgIHVwZGF0ZWRWYWx1ZSA9IHZhbHVlLmFjdGlvbi52YWx1ZXNba2V5XS5jdXJyZW50O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBSdW4gdHJhbnNmb3JtIGZ1bmN0aW9uIChpZiBwcmVzZW50KVxuICAgICAgICAgICAgaWYgKHZhbHVlLnRyYW5zZm9ybSkge1xuICAgICAgICAgICAgICAgIHVwZGF0ZWRWYWx1ZSA9IHZhbHVlLnRyYW5zZm9ybSh1cGRhdGVkVmFsdWUsIGtleSwgX3RoaXMyKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gU21vb3RoIHZhbHVlIGlmIHdlIGhhdmUgc21vb3RoaW5nXG4gICAgICAgICAgICBpZiAodmFsdWUuc21vb3RoKSB7XG4gICAgICAgICAgICAgICAgdXBkYXRlZFZhbHVlID0gY2FsYy5zbW9vdGgodXBkYXRlZFZhbHVlLCB2YWx1ZS5jdXJyZW50LCBlbGFwc2VkLCB2YWx1ZS5zbW9vdGgpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAodmFsdWUucm91bmQpIHtcbiAgICAgICAgICAgICAgICB1cGRhdGVkVmFsdWUgPSBNYXRoLnJvdW5kKHVwZGF0ZWRWYWx1ZSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHZhbHVlLnZlbG9jaXR5ID0gKDAsIF91dGlscy5zcGVlZFBlclNlY29uZCkodXBkYXRlZFZhbHVlIC0gdmFsdWUuY3VycmVudCwgZWxhcHNlZCk7XG5cbiAgICAgICAgICAgIGlmICh1cGRhdGVkVmFsdWUgIT09IHZhbHVlLmN1cnJlbnQpIHtcbiAgICAgICAgICAgICAgICBoYXNDaGFuZ2VkID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdmFsdWUuY3VycmVudCA9IHVwZGF0ZWRWYWx1ZTtcblxuICAgICAgICAgICAgLy8gVXBkYXRlIHN0YXRlXG4gICAgICAgICAgICBpZiAodmFsdWUudW5pdCkge1xuICAgICAgICAgICAgICAgIHZhciB2YWx1ZVdpdGhVbml0ID0gdXBkYXRlZFZhbHVlICsgdmFsdWUudW5pdDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gQWRkIHN0cmFpZ2h0IHRvIHN0YXRlIGlmIG5vIHBhcmVudFxuICAgICAgICAgICAgaWYgKCF2YWx1ZS5wYXJlbnQpIHtcbiAgICAgICAgICAgICAgICB2YXIgbWFwcGVkS2V5ID0gX3RoaXMyLm9uUmVuZGVyICYmIF90aGlzMi5vblJlbmRlci5zdGF0ZU1hcCA/IF90aGlzMi5vblJlbmRlci5zdGF0ZU1hcFtrZXldIDoga2V5O1xuICAgICAgICAgICAgICAgIF90aGlzMi5zdGF0ZVtrZXldID0gdXBkYXRlZFZhbHVlO1xuXG4gICAgICAgICAgICAgICAgLy8gT3IgYWRkIHRvIHBhcmVudFxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMyLnZhbHVlc1t2YWx1ZS5wYXJlbnRdLmNoaWxkcmVuW2tleV0gPSB1cGRhdGVkVmFsdWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gaGFzQ2hhbmdlZDtcbiAgICB9O1xuXG4gICAgQWN0b3IucHJvdG90eXBlLnByZVJlbmRlciA9IGZ1bmN0aW9uIHByZVJlbmRlcigpIHtcbiAgICAgICAgLy8gcHJvY2VzcyBwYXJlbnQgdmFsdWVzXG4gICAgfTtcblxuICAgIHJldHVybiBBY3Rvcjtcbn0pKF9BY3Rpb24zLmRlZmF1bHQpO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBBY3Rvcjtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJa0ZqZEc5eUxtcHpJbDBzSW01aGJXVnpJanBiWFN3aWJXRndjR2x1WjNNaU9pSTdPenM3T3pzN096czdPenM3T3pzN096dEpRVWR4UWl4TFFVRkxPMk5CUVV3c1MwRkJTenM3UVVGRGRFSXNZVUZFYVVJc1MwRkJTeXhIUVVORU96aENRVVJLTEV0QlFVczdPekJEUVVOUUxFbEJRVWs3UVVGQlNpeG5Ra0ZCU1RzN08zRkVRVU5tTERCRFFVRlRMRWxCUVVrc1JVRkJRenM3UVVGRFpDeGpRVUZMTEVsQlFVa3NSVUZCUlN4RFFVRkRPenRMUVVObU96dEJRVXBuUWl4VFFVRkxMRmRCVFhSQ0xFVkJRVVVzWjBKQlFVTXNUVUZCVFN4RlFVRkZPMEZCUTFBc1dVRkJTU3hKUVVGSkxFTkJRVU1zVDBGQlR5eEZRVUZGTzBGQlEyUXNaMEpCUVVrc1EwRkJReXhMUVVGTExFTkJRVU1zU1VGQlNTeERRVUZETEU5QlFVOHNRMEZCUXl4TlFVRk5MRVZCUVVVc1NVRkJTU3hEUVVGRExFMUJRVTBzUTBGQlF5eERRVUZETEVOQlFVTTdVMEZEYWtRN1MwRkRTanM3UVVGV1owSXNVMEZCU3l4WFFWbDBRaXhMUVVGTExHdENRVUZETEUxQlFVMHNSVUZCUlR0QlFVTldMREJDUVVGTkxFdEJRVXNzUzBGQlFTeE5RVUZGTEVOQlFVTTdRVUZEWkN4WlFVRk5MR05CUVdNc1IwRkJSeXhOUVVGTkxFTkJRVU1zVDBGQlR5eEZRVUZGT3pzN08wRkJRVU1zUVVGSmVFTXNaVUZCVHl4alFVRmpMRU5CUVVNN1MwRkRla0k3TzBGQmJrSm5RaXhUUVVGTExGZEJjVUowUWl4VlFVRlZMSFZDUVVGRExFdEJRVXNzUlVGQlJTeFZRVUZWTEVWQlFVVXNUMEZCVHl4RlFVRkZPenM3UVVGRGJrTXNXVUZCU1N4VlFVRlZMRWRCUVVjc1MwRkJTeXhEUVVGRE96dEJRVVYyUWl4dFFrRXhRa01zU1VGQlNTeEZRVEJDUVN4SlFVRkpMRU5CUVVNc1RVRkJUU3hGUVVGRkxGVkJRVU1zUzBGQlN5eEZRVUZGTEVkQlFVY3NSVUZCU3p0QlFVTTVRaXhuUWtGQlNTeFpRVUZaTEVkQlFVY3NTMEZCU3l4RFFVRkRMRTlCUVU4N096dEJRVUZETEVGQlIycERMR2RDUVVGSkxFdEJRVXNzUTBGQlF5eE5RVUZOTEVWQlFVVTdRVUZEWkN3MFFrRkJXU3hIUVVGSExFdEJRVXNzUTBGQlF5eE5RVUZOTEVOQlFVTXNUVUZCVFN4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRExFOUJRVThzUTBGQlF6dGhRVU51UkRzN08wRkJRVUVzUVVGSFJDeG5Ra0ZCU1N4TFFVRkxMRU5CUVVNc1UwRkJVeXhGUVVGRk8wRkJRMnBDTERSQ1FVRlpMRWRCUVVjc1MwRkJTeXhEUVVGRExGTkJRVk1zUTBGQlF5eFpRVUZaTEVWQlFVVXNSMEZCUnl4VFFVRlBMRU5CUVVNN1lVRkRNMFE3T3p0QlFVRkJMRUZCUjBRc1owSkJRVWtzUzBGQlN5eERRVUZETEUxQlFVMHNSVUZCUlR0QlFVTmtMRFJDUVVGWkxFZEJRVWNzU1VGQlNTeERRVUZETEUxQlFVMHNRMEZCUXl4WlFVRlpMRVZCUVVVc1MwRkJTeXhEUVVGRExFOUJRVThzUlVGQlJTeFBRVUZQTEVWQlFVVXNTMEZCU3l4RFFVRkRMRTFCUVUwc1EwRkJReXhEUVVGRE8yRkJRMnhHT3p0QlFVVkVMR2RDUVVGSkxFdEJRVXNzUTBGQlF5eExRVUZMTEVWQlFVVTdRVUZEWWl3MFFrRkJXU3hIUVVGSExFbEJRVWtzUTBGQlF5eExRVUZMTEVOQlFVTXNXVUZCV1N4RFFVRkRMRU5CUVVNN1lVRkRNME03TzBGQlJVUXNhVUpCUVVzc1EwRkJReXhSUVVGUkxFZEJRVWNzVjBGb1JHUXNZMEZCWXl4RlFXZEVaU3haUVVGWkxFZEJRVWNzUzBGQlN5eERRVUZETEU5QlFVOHNSVUZCUlN4UFFVRlBMRU5CUVVNc1EwRkJRenM3UVVGRmRrVXNaMEpCUVVrc1dVRkJXU3hMUVVGTExFdEJRVXNzUTBGQlF5eFBRVUZQTEVWQlFVVTdRVUZEYUVNc01FSkJRVlVzUjBGQlJ5eEpRVUZKTEVOQlFVTTdZVUZEY2tJN08wRkJSVVFzYVVKQlFVc3NRMEZCUXl4UFFVRlBMRWRCUVVjc1dVRkJXVHM3TzBGQlFVTXNRVUZITjBJc1owSkJRVWtzUzBGQlN5eERRVUZETEVsQlFVa3NSVUZCUlR0QlFVTmFMRzlDUVVGTkxHRkJRV0VzUjBGQlJ5eFpRVUZaTEVkQlFVY3NTMEZCU3l4RFFVRkRMRWxCUVVrc1EwRkJRenRoUVVOdVJEczdPMEZCUVVFc1FVRkhSQ3huUWtGQlNTeERRVUZETEV0QlFVc3NRMEZCUXl4TlFVRk5MRVZCUVVVN1FVRkRaaXh2UWtGQlRTeFRRVUZUTEVkQlFVY3NRVUZCUXl4UFFVRkxMRkZCUVZFc1NVRkJTU3hQUVVGTExGRkJRVkVzUTBGQlF5eFJRVUZSTEVkQlFVa3NUMEZCU3l4UlFVRlJMRU5CUVVNc1VVRkJVU3hEUVVGRExFZEJRVWNzUTBGQlF5eEhRVUZITEVkQlFVY3NRMEZCUXp0QlFVTm9SeXgxUWtGQlN5eExRVUZMTEVOQlFVTXNSMEZCUnl4RFFVRkRMRWRCUVVjc1dVRkJXVHM3TzBGQlFVTXNZVUZIYkVNc1RVRkJUVHRCUVVOSUxESkNRVUZMTEUxQlFVMHNRMEZCUXl4TFFVRkxMRU5CUVVNc1RVRkJUU3hEUVVGRExFTkJRVU1zVVVGQlVTeERRVUZETEVkQlFVY3NRMEZCUXl4SFFVRkhMRmxCUVZrc1EwRkJRenRwUWtGRE1VUTdVMEZEU2l4RFFVRkRMRU5CUVVNN08wRkJSVWdzWlVGQlR5eFZRVUZWTEVOQlFVTTdTMEZEY2tJN08wRkJka1ZuUWl4VFFVRkxMRmRCZVVWMFFpeFRRVUZUTEhkQ1FVRkhPenRMUVVWWU96dFhRVE5GWjBJc1MwRkJTenM3TzJ0Q1FVRk1MRXRCUVVzaUxDSm1hV3hsSWpvaVFXTjBiM0l1YW5NaUxDSnpiM1Z5WTJWelEyOXVkR1Z1ZENJNld5SnBiWEJ2Y25RZ1FXTjBhVzl1SUdaeWIyMGdKeTR1TDJGamRHbHZibk12UVdOMGFXOXVKenRjYm1sdGNHOXlkQ0I3SUdWaFkyZ3NJSE53WldWa1VHVnlVMlZqYjI1a0lIMGdabkp2YlNBbkxpNHZhVzVqTDNWMGFXeHpKenRjYmx4dVpYaHdiM0owSUdSbFptRjFiSFFnWTJ4aGMzTWdRV04wYjNJZ1pYaDBaVzVrY3lCQlkzUnBiMjRnZTF4dUlDQWdJR052Ym5OMGNuVmpkRzl5S0M0dUxtRnlaM01wSUh0Y2JpQWdJQ0FnSUNBZ2MzVndaWElvTGk0dVlYSm5jeWs3WEc0Z0lDQWdJQ0FnSUhSb2FYTXViMjVqWlNncE8xeHVJQ0FnSUgxY2JseHVJQ0FnSUdSdktHRmpkR2x2YmlrZ2UxeHVJQ0FnSUNBZ0lDQnBaaUFvZEdocGN5NXlaV1IxWTJWeUtTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNCMGFHbHpMbk4wWVhKMEtIUm9hWE11Y21Wa2RXTmxjaWhoWTNScGIyNHNJSFJvYVhNdWRtRnNkV1Z6S1NrN1hHNGdJQ0FnSUNBZ0lIMWNiaUFnSUNCOVhHNWNiaUFnSUNCemRHRnlkQ2hoWTNScGIyNHBJSHRjYmlBZ0lDQWdJQ0FnYzNWd1pYSXVjM1JoY25Rb0tUdGNiaUFnSUNBZ0lDQWdZMjl1YzNRZ1lXTjBhVzl1U1c1emRHRnVZMlVnUFNCaFkzUnBiMjR1YVc1b1pYSnBkQ2dwTzF4dVhHNGdJQ0FnSUNBZ0lDOHZJRUZ6YzJsbmJpQmhZM1JwYjI0Z2RHOGdZWEJ3Y205d2NtbGhkR1VnZG1Gc2RXVnpYRzVjYmlBZ0lDQWdJQ0FnY21WMGRYSnVJR0ZqZEdsdmJrbHVjM1JoYm1ObE8xeHVJQ0FnSUgxY2JseHVJQ0FnSUhkcGJHeFNaVzVrWlhJb1lXTjBiM0lzSUdaeVlXMWxVM1JoYlhBc0lHVnNZWEJ6WldRcElIdGNiaUFnSUNBZ0lDQWdiR1YwSUdoaGMwTm9ZVzVuWldRZ1BTQm1ZV3h6WlR0Y2JseHVJQ0FnSUNBZ0lDQmxZV05vS0hSb2FYTXVkbUZzZFdWekxDQW9kbUZzZFdVc0lHdGxlU2tnUFQ0Z2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnYkdWMElIVndaR0YwWldSV1lXeDFaU0E5SUhaaGJIVmxMbU4xY25KbGJuUTdYRzVjYmlBZ0lDQWdJQ0FnSUNBZ0lDOHZJRlZ3WkdGMFpTQjJZV3gxWlNCaVlYTmxaQ0J2YmlCaFkzUnBkbVVnWVdOMGFXOXVYRzRnSUNBZ0lDQWdJQ0FnSUNCcFppQW9kbUZzZFdVdVlXTjBhVzl1S1NCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2RYQmtZWFJsWkZaaGJIVmxJRDBnZG1Gc2RXVXVZV04wYVc5dUxuWmhiSFZsYzF0clpYbGRMbU4xY25KbGJuUTdYRzRnSUNBZ0lDQWdJQ0FnSUNCOVhHNWNiaUFnSUNBZ0lDQWdJQ0FnSUM4dklGSjFiaUIwY21GdWMyWnZjbTBnWm5WdVkzUnBiMjRnS0dsbUlIQnlaWE5sYm5RcFhHNGdJQ0FnSUNBZ0lDQWdJQ0JwWmlBb2RtRnNkV1V1ZEhKaGJuTm1iM0p0S1NCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2RYQmtZWFJsWkZaaGJIVmxJRDBnZG1Gc2RXVXVkSEpoYm5ObWIzSnRLSFZ3WkdGMFpXUldZV3gxWlN3Z2EyVjVMQ0IwYUdsektUdGNiaUFnSUNBZ0lDQWdJQ0FnSUgxY2JseHVJQ0FnSUNBZ0lDQWdJQ0FnTHk4Z1UyMXZiM1JvSUhaaGJIVmxJR2xtSUhkbElHaGhkbVVnYzIxdmIzUm9hVzVuWEc0Z0lDQWdJQ0FnSUNBZ0lDQnBaaUFvZG1Gc2RXVXVjMjF2YjNSb0tTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdkWEJrWVhSbFpGWmhiSFZsSUQwZ1kyRnNZeTV6Ylc5dmRHZ29kWEJrWVhSbFpGWmhiSFZsTENCMllXeDFaUzVqZFhKeVpXNTBMQ0JsYkdGd2MyVmtMQ0IyWVd4MVpTNXpiVzl2ZEdncE8xeHVJQ0FnSUNBZ0lDQWdJQ0FnZlZ4dVhHNGdJQ0FnSUNBZ0lDQWdJQ0JwWmlBb2RtRnNkV1V1Y205MWJtUXBJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0IxY0dSaGRHVmtWbUZzZFdVZ1BTQk5ZWFJvTG5KdmRXNWtLSFZ3WkdGMFpXUldZV3gxWlNrN1hHNGdJQ0FnSUNBZ0lDQWdJQ0I5WEc1Y2JpQWdJQ0FnSUNBZ0lDQWdJSFpoYkhWbExuWmxiRzlqYVhSNUlEMGdjM0JsWldSUVpYSlRaV052Ym1Rb2RYQmtZWFJsWkZaaGJIVmxJQzBnZG1Gc2RXVXVZM1Z5Y21WdWRDd2daV3hoY0hObFpDazdYRzVjYmlBZ0lDQWdJQ0FnSUNBZ0lHbG1JQ2gxY0dSaGRHVmtWbUZzZFdVZ0lUMDlJSFpoYkhWbExtTjFjbkpsYm5RcElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQm9ZWE5EYUdGdVoyVmtJRDBnZEhKMVpUdGNiaUFnSUNBZ0lDQWdJQ0FnSUgxY2JseHVJQ0FnSUNBZ0lDQWdJQ0FnZG1Gc2RXVXVZM1Z5Y21WdWRDQTlJSFZ3WkdGMFpXUldZV3gxWlR0Y2JseHVJQ0FnSUNBZ0lDQWdJQ0FnTHk4Z1ZYQmtZWFJsSUhOMFlYUmxYRzRnSUNBZ0lDQWdJQ0FnSUNCcFppQW9kbUZzZFdVdWRXNXBkQ2tnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUdOdmJuTjBJSFpoYkhWbFYybDBhRlZ1YVhRZ1BTQjFjR1JoZEdWa1ZtRnNkV1VnS3lCMllXeDFaUzUxYm1sME8xeHVJQ0FnSUNBZ0lDQWdJQ0FnZlZ4dVhHNGdJQ0FnSUNBZ0lDQWdJQ0F2THlCQlpHUWdjM1J5WVdsbmFIUWdkRzhnYzNSaGRHVWdhV1lnYm04Z2NHRnlaVzUwWEc0Z0lDQWdJQ0FnSUNBZ0lDQnBaaUFvSVhaaGJIVmxMbkJoY21WdWRDa2dlMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJR052Ym5OMElHMWhjSEJsWkV0bGVTQTlJQ2gwYUdsekxtOXVVbVZ1WkdWeUlDWW1JSFJvYVhNdWIyNVNaVzVrWlhJdWMzUmhkR1ZOWVhBcElEOGdkR2hwY3k1dmJsSmxibVJsY2k1emRHRjBaVTFoY0Z0clpYbGRJRG9nYTJWNU8xeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lIUm9hWE11YzNSaGRHVmJhMlY1WFNBOUlIVndaR0YwWldSV1lXeDFaVHRjYmx4dUlDQWdJQ0FnSUNBZ0lDQWdMeThnVDNJZ1lXUmtJSFJ2SUhCaGNtVnVkRnh1SUNBZ0lDQWdJQ0FnSUNBZ2ZTQmxiSE5sSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCMGFHbHpMblpoYkhWbGMxdDJZV3gxWlM1d1lYSmxiblJkTG1Ob2FXeGtjbVZ1VzJ0bGVWMGdQU0IxY0dSaGRHVmtWbUZzZFdVN1hHNGdJQ0FnSUNBZ0lDQWdJQ0I5WEc0Z0lDQWdJQ0FnSUgwcE8xeHVYRzRnSUNBZ0lDQWdJSEpsZEhWeWJpQm9ZWE5EYUdGdVoyVmtPMXh1SUNBZ0lIMWNibHh1SUNBZ0lIQnlaVkpsYm1SbGNpZ3BJSHRjYmlBZ0lDQWdJQ0FnTHk4Z2NISnZZMlZ6Y3lCd1lYSmxiblFnZG1Gc2RXVnpYRzRnSUNBZ2ZWeHVmU0pkZlE9PVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvYWN0b3IvQWN0b3IuanNcbiAqKiBtb2R1bGUgaWQgPSAyXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbnZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfUHJvY2VzczIgPSByZXF1aXJlKCcuLi9wcm9jZXNzL1Byb2Nlc3MnKTtcblxudmFyIF9Qcm9jZXNzMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX1Byb2Nlc3MyKTtcblxudmFyIF91dGlscyA9IHJlcXVpcmUoJy4uL2luYy91dGlscycpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMob2JqLCBrZXlzKSB7IHZhciB0YXJnZXQgPSB7fTsgZm9yICh2YXIgaSBpbiBvYmopIHsgaWYgKGtleXMuaW5kZXhPZihpKSA+PSAwKSBjb250aW51ZTsgaWYgKCFPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBpKSkgY29udGludWU7IHRhcmdldFtpXSA9IG9ialtpXTsgfSByZXR1cm4gdGFyZ2V0OyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKCFzZWxmKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gY2FsbCAmJiAodHlwZW9mIGNhbGwgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikgPyBjYWxsIDogc2VsZjsgfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb24sIG5vdCBcIiArIHR5cGVvZiBzdXBlckNsYXNzKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCBlbnVtZXJhYmxlOiBmYWxzZSwgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LnNldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKSA6IHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7IH1cblxudmFyIERFRkFVTFRfUFJPUCA9ICdjdXJyZW50JztcblxudmFyIEFjdGlvbiA9IChmdW5jdGlvbiAoX1Byb2Nlc3MpIHtcbiAgICBfaW5oZXJpdHMoQWN0aW9uLCBfUHJvY2Vzcyk7XG5cbiAgICBmdW5jdGlvbiBBY3Rpb24oKSB7XG4gICAgICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBBY3Rpb24pO1xuXG4gICAgICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICAgICAgICBhcmdzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gSW5pdGFsaXNlIHJlbmRlcmVyXG5cbiAgICAgICAgdmFyIF90aGlzID0gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgX1Byb2Nlc3MuY2FsbC5hcHBseShfUHJvY2VzcywgW3RoaXNdLmNvbmNhdChhcmdzKSkpO1xuXG4gICAgICAgIGlmIChfdGhpcy5vblJlbmRlciAmJiBfdGhpcy5vblJlbmRlci5pbml0KSB7XG4gICAgICAgICAgICBfdGhpcy5vblJlbmRlci5pbml0KF90aGlzKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gX3RoaXM7XG4gICAgfVxuXG4gICAgLypcbiAgICAgICAgIyBTZXQgQWN0aW9uIHByb3BlcnRpZXNcbiAgICAgICAgIyMgU2V0IHVzZXItZGVmaW5lZCBBY3Rpb24gcHJvcGVydGllc1xuICAgICAgICAgQHBhcmFtIFtvYmplY3RdXG4gICAgICAgIEByZXR1cm4gW0FjdGlvbl1cbiAgICAqL1xuXG4gICAgQWN0aW9uLnByb3RvdHlwZS5zZXQgPSBmdW5jdGlvbiBzZXQocHJvcHMpIHtcbiAgICAgICAgdmFyIF90aGlzMiA9IHRoaXM7XG5cbiAgICAgICAgdmFyIHZhbHVlcyA9IHByb3BzLnZhbHVlcztcblxuICAgICAgICB2YXIgcHJvcHNUb1NldCA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhwcm9wcywgWyd2YWx1ZXMnXSk7XG5cbiAgICAgICAgX1Byb2Nlc3MucHJvdG90eXBlLnNldC5jYWxsKHRoaXMsIHByb3BzVG9TZXQpO1xuXG4gICAgICAgIHRoaXMudmFsdWVzID0gdGhpcy52YWx1ZXMgfHwge307XG5cbiAgICAgICAgLy8gTWVyZ2UgYHZhbHVlYCBwcm9wZXJ0aWVzIHdpdGggZXhpc3RpbmdcbiAgICAgICAgaWYgKHZhbHVlcykge1xuICAgICAgICAgICAgKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICB2YXIgY3VycmVudFZhbHVlcyA9IF90aGlzMi52YWx1ZXM7XG4gICAgICAgICAgICAgICAgdmFyIGRlZmF1bHRWYWx1ZSA9IF90aGlzMi5nZXREZWZhdWx0VmFsdWUoKTtcbiAgICAgICAgICAgICAgICB2YXIgZGVmYXVsdFZhbHVlUHJvcCA9IF90aGlzMi5nZXREZWZhdWx0VmFsdWVQcm9wKCk7XG5cbiAgICAgICAgICAgICAgICAvLyBJbmhlcml0IHZhbHVlcyBmcm9tIHByb3BzXG4gICAgICAgICAgICAgICAgKDAsIF91dGlscy5lYWNoKShkZWZhdWx0VmFsdWUsIGZ1bmN0aW9uICh2YWx1ZSwga2V5KSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChwcm9wc1RvU2V0W2tleV0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlW2tleV0gPSBwcm9wc1RvU2V0W2tleV07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIC8vIE92ZXJ3cml0ZSBwZXItdmFsdWUgcHJvcHNcbiAgICAgICAgICAgICAgICAoMCwgX3V0aWxzLmVhY2gpKHZhbHVlcywgZnVuY3Rpb24gKHZhbHVlLCBrZXkpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGV4aXN0aW5nVmFsdWUgPSBjdXJyZW50VmFsdWVzW2tleV07XG4gICAgICAgICAgICAgICAgICAgIHZhciBuZXdWYWx1ZSA9IF9leHRlbmRzKHt9LCBkZWZhdWx0VmFsdWUpO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmICgoMCwgX3V0aWxzLmlzT2JqKSh2YWx1ZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ld1ZhbHVlID0gX2V4dGVuZHMoe30sIG5ld1ZhbHVlLCB2YWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBuZXdWYWx1ZVtkZWZhdWx0VmFsdWVQcm9wXSA9IHZhbHVlO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gdXBkYXRlIHZhbHVlc1xuXG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRWYWx1ZXNba2V5XSA9IGV4aXN0aW5nVmFsdWUgPyBfZXh0ZW5kcyh7fSwgZXhpc3RpbmdWYWx1ZSwgbmV3VmFsdWUpIDogbmV3VmFsdWU7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfTtcblxuICAgIEFjdGlvbi5wcm90b3R5cGUucGF1c2UgPSBmdW5jdGlvbiBwYXVzZSgpIHtcbiAgICAgICAgX1Byb2Nlc3MucHJvdG90eXBlLnN0b3AuY2FsbCh0aGlzKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfTtcblxuICAgIEFjdGlvbi5wcm90b3R5cGUucmVzdW1lID0gZnVuY3Rpb24gcmVzdW1lKCkge1xuICAgICAgICBfUHJvY2Vzcy5wcm90b3R5cGUuc3RhcnQuY2FsbCh0aGlzKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfTtcblxuICAgIC8qXG4gICAgICAgICMgR2V0IGRlZmF1bHQgQWN0aW9uIHZhbHVlIHByb3BlcnRpZXNcbiAgICAgICAgIEByZXR1cm4gW29iamVjdF1cbiAgICAqL1xuXG4gICAgQWN0aW9uLnByb3RvdHlwZS5nZXREZWZhdWx0VmFsdWUgPSBmdW5jdGlvbiBnZXREZWZhdWx0VmFsdWUoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBjdXJyZW50OiAwLFxuICAgICAgICAgICAgdmVsb2NpdHk6IDBcbiAgICAgICAgfTtcbiAgICB9O1xuXG4gICAgLypcbiAgICAgICAgIyBHZXQgZGVmYXVsdCBBY3Rpb24gdmFsdWUgcHJvcGVydHkgbmFtZVxuICAgICAgICAjIyBTZXQgdGhpcyBgdmFsdWVgIHByb3BlcnR5IHdoZW4gc2V0IGFzIHZhbHVlIGluc3RlYWQgb2Ygb2JqZWN0XG4gICAgICAgICBAcmV0dXJuIFtzdHJpbmddXG4gICAgKi9cblxuICAgIEFjdGlvbi5wcm90b3R5cGUuZ2V0RGVmYXVsdFZhbHVlUHJvcCA9IGZ1bmN0aW9uIGdldERlZmF1bHRWYWx1ZVByb3AoKSB7XG4gICAgICAgIHJldHVybiBERUZBVUxUX1BST1A7XG4gICAgfTtcblxuICAgIHJldHVybiBBY3Rpb247XG59KShfUHJvY2VzczMuZGVmYXVsdCk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IEFjdGlvbjtcbjtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJa0ZqZEdsdmJpNXFjeUpkTENKdVlXMWxjeUk2VzEwc0ltMWhjSEJwYm1keklqb2lPenM3T3pzN096czdPenM3T3pzN096czdPenM3TzBGQlIwRXNTVUZCVFN4WlFVRlpMRWRCUVVjc1UwRkJVeXhEUVVGRE96dEpRVVZXTEUxQlFVMDdZMEZCVGl4TlFVRk5PenRCUVVOMlFpeGhRVVJwUWl4TlFVRk5MRWRCUTBZN09FSkJSRW9zVFVGQlRUczdNRU5CUTFJc1NVRkJTVHRCUVVGS0xHZENRVUZKT3pzN096dHhSRUZEWml3MFEwRkJVeXhKUVVGSkxFVkJRVU03TzBGQlIyUXNXVUZCU1N4TlFVRkxMRkZCUVZFc1NVRkJTU3hOUVVGTExGRkJRVkVzUTBGQlF5eEpRVUZKTEVWQlFVVTdRVUZEY2tNc2EwSkJRVXNzVVVGQlVTeERRVUZETEVsQlFVa3NUMEZCVFN4RFFVRkRPMU5CUXpWQ096dExRVU5LT3pzN096czdPenRCUVVGQk8wRkJVbWRDTEZWQlFVMHNWMEZwUW5aQ0xFZEJRVWNzWjBKQlFVTXNTMEZCU3l4RlFVRkZPenM3V1VGRFF5eE5RVUZOTEVkQlFXOUNMRXRCUVVzc1EwRkJMMElzVFVGQlRUczdXVUZCU3l4VlFVRlZMRFJDUVVGTExFdEJRVXM3TzBGQlJYWkRMREpDUVVGTkxFZEJRVWNzUzBGQlFTeFBRVUZETEZWQlFWVXNRMEZCUXl4RFFVRkRPenRCUVVWMFFpeFpRVUZKTEVOQlFVTXNUVUZCVFN4SFFVRkhMRWxCUVVrc1EwRkJReXhOUVVGTkxFbEJRVWtzUlVGQlJUczdPMEZCUVVNc1FVRkhhRU1zV1VGQlNTeE5RVUZOTEVWQlFVVTdPMEZCUTFJc2IwSkJRVTBzWVVGQllTeEhRVUZITEU5QlFVc3NUVUZCVFN4RFFVRkRPMEZCUTJ4RExHOUNRVUZOTEZsQlFWa3NSMEZCUnl4UFFVRkxMR1ZCUVdVc1JVRkJSU3hEUVVGRE8wRkJRelZETEc5Q1FVRk5MR2RDUVVGblFpeEhRVUZITEU5QlFVc3NiVUpCUVcxQ0xFVkJRVVU3T3p0QlFVRkRMRUZCUjNCRUxESkNRVzVEU0N4SlFVRkpMRVZCYlVOSkxGbEJRVmtzUlVGQlJTeFZRVUZETEV0QlFVc3NSVUZCUlN4SFFVRkhMRVZCUVVzN1FVRkRMMElzZDBKQlFVa3NWVUZCVlN4RFFVRkRMRWRCUVVjc1EwRkJReXhMUVVGTExGTkJRVk1zUlVGQlJUdEJRVU12UWl4dlEwRkJXU3hEUVVGRExFZEJRVWNzUTBGQlF5eEhRVUZITEZWQlFWVXNRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJRenR4UWtGRGRrTTdhVUpCUTBvc1EwRkJRenM3TzBGQlFVTXNRVUZIU0N3eVFrRXhRMGdzU1VGQlNTeEZRVEJEU1N4TlFVRk5MRVZCUVVVc1ZVRkJReXhMUVVGTExFVkJRVVVzUjBGQlJ5eEZRVUZMTzBGQlEzcENMSGRDUVVGTkxHRkJRV0VzUjBGQlJ5eGhRVUZoTEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNN1FVRkRla01zZDBKQlFVa3NVVUZCVVN4blFrRkJVU3haUVVGWkxFTkJRVVVzUTBGQlF6czdRVUZGYmtNc2QwSkJRVWtzVjBFNVEwd3NTMEZCU3l4RlFUaERUU3hMUVVGTExFTkJRVU1zUlVGQlJUdEJRVU5rTEdkRFFVRlJMR2RDUVVGUkxGRkJRVkVzUlVGQlN5eExRVUZMTEVOQlFVVXNRMEZCUXp0eFFrRkRlRU1zVFVGQlRUdEJRVU5JTEdkRFFVRlJMRU5CUVVNc1owSkJRV2RDTEVOQlFVTXNSMEZCUnl4TFFVRkxMRU5CUVVNN2NVSkJRM1JET3pzN08wRkJRVUVzUVVGSlJDeHBRMEZCWVN4RFFVRkRMRWRCUVVjc1EwRkJReXhIUVVGSExHRkJRV0VzWjBKQlFWRXNZVUZCWVN4RlFVRkxMRkZCUVZFc1NVRkJTeXhSUVVGUkxFTkJRVU03YVVKQlEzSkdMRU5CUVVNc1EwRkJRenM3VTBGRFRqczdRVUZGUkN4bFFVRlBMRWxCUVVrc1EwRkJRenRMUVVObU96dEJRWFpFWjBJc1ZVRkJUU3hYUVhsRWRrSXNTMEZCU3l4dlFrRkJSenRCUVVOS0xESkNRVUZOTEVsQlFVa3NTMEZCUVN4TlFVRkZMRU5CUVVNN1FVRkRZaXhsUVVGUExFbEJRVWtzUTBGQlF6dExRVU5tT3p0QlFUVkVaMElzVlVGQlRTeFhRVGhFZGtJc1RVRkJUU3h4UWtGQlJ6dEJRVU5NTERKQ1FVRk5MRXRCUVVzc1MwRkJRU3hOUVVGRkxFTkJRVU03UVVGRFpDeGxRVUZQTEVsQlFVa3NRMEZCUXp0TFFVTm1PenM3T3pzN08wRkJha1ZuUWl4VlFVRk5MRmRCZDBWMlFpeGxRVUZsTERoQ1FVRkhPMEZCUTJRc1pVRkJUenRCUVVOSUxHMUNRVUZQTEVWQlFVVXNRMEZCUXp0QlFVTldMRzlDUVVGUkxFVkJRVVVzUTBGQlF6dFRRVU5rTEVOQlFVTTdTMEZEVERzN096czdPenM3UVVFM1JXZENMRlZCUVUwc1YwRnhSblpDTEcxQ1FVRnRRaXhyUTBGQlJ6dEJRVU5zUWl4bFFVRlBMRmxCUVZrc1EwRkJRenRMUVVOMlFqczdWMEYyUm1kQ0xFMUJRVTA3T3p0clFrRkJUaXhOUVVGTk8wRkJkMFl4UWl4RFFVRkRJaXdpWm1sc1pTSTZJa0ZqZEdsdmJpNXFjeUlzSW5OdmRYSmpaWE5EYjI1MFpXNTBJanBiSW1sdGNHOXlkQ0JRY205alpYTnpJR1p5YjIwZ0p5NHVMM0J5YjJObGMzTXZVSEp2WTJWemN5YzdYRzVwYlhCdmNuUWdleUJsWVdOb0xDQnBjMDlpYWlCOUlHWnliMjBnSnk0dUwybHVZeTkxZEdsc2N5YzdYRzVjYm1OdmJuTjBJRVJGUmtGVlRGUmZVRkpQVUNBOUlDZGpkWEp5Wlc1MEp6dGNibHh1Wlhod2IzSjBJR1JsWm1GMWJIUWdZMnhoYzNNZ1FXTjBhVzl1SUdWNGRHVnVaSE1nVUhKdlkyVnpjeUI3WEc0Z0lDQWdZMjl1YzNSeWRXTjBiM0lvTGk0dVlYSm5jeWtnZTF4dUlDQWdJQ0FnSUNCemRYQmxjaWd1TGk1aGNtZHpLVHRjYmx4dUlDQWdJQ0FnSUNBdkx5QkpibWwwWVd4cGMyVWdjbVZ1WkdWeVpYSWdYRzRnSUNBZ0lDQWdJR2xtSUNoMGFHbHpMbTl1VW1WdVpHVnlJQ1ltSUhSb2FYTXViMjVTWlc1a1pYSXVhVzVwZENrZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnZEdocGN5NXZibEpsYm1SbGNpNXBibWwwS0hSb2FYTXBPMXh1SUNBZ0lDQWdJQ0I5WEc0Z0lDQWdmVnh1WEc0Z0lDQWdMeXBjYmlBZ0lDQWdJQ0FnSXlCVFpYUWdRV04wYVc5dUlIQnliM0JsY25ScFpYTmNiaUFnSUNBZ0lDQWdJeU1nVTJWMElIVnpaWEl0WkdWbWFXNWxaQ0JCWTNScGIyNGdjSEp2Y0dWeWRHbGxjMXh1WEc0Z0lDQWdJQ0FnSUVCd1lYSmhiU0JiYjJKcVpXTjBYVnh1SUNBZ0lDQWdJQ0JBY21WMGRYSnVJRnRCWTNScGIyNWRYRzRnSUNBZ0tpOWNiaUFnSUNCelpYUW9jSEp2Y0hNcElIdGNiaUFnSUNBZ0lDQWdZMjl1YzNRZ2V5QjJZV3gxWlhNc0lDNHVMbkJ5YjNCelZHOVRaWFFnZlNBOUlIQnliM0J6TzF4dVhHNGdJQ0FnSUNBZ0lITjFjR1Z5TG5ObGRDaHdjbTl3YzFSdlUyVjBLVHRjYmx4dUlDQWdJQ0FnSUNCMGFHbHpMblpoYkhWbGN5QTlJSFJvYVhNdWRtRnNkV1Z6SUh4OElIdDlPMXh1WEc0Z0lDQWdJQ0FnSUM4dklFMWxjbWRsSUdCMllXeDFaV0FnY0hKdmNHVnlkR2xsY3lCM2FYUm9JR1Y0YVhOMGFXNW5YRzRnSUNBZ0lDQWdJR2xtSUNoMllXeDFaWE1wSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJR052Ym5OMElHTjFjbkpsYm5SV1lXeDFaWE1nUFNCMGFHbHpMblpoYkhWbGN6dGNiaUFnSUNBZ0lDQWdJQ0FnSUdOdmJuTjBJR1JsWm1GMWJIUldZV3gxWlNBOUlIUm9hWE11WjJWMFJHVm1ZWFZzZEZaaGJIVmxLQ2s3WEc0Z0lDQWdJQ0FnSUNBZ0lDQmpiMjV6ZENCa1pXWmhkV3gwVm1Gc2RXVlFjbTl3SUQwZ2RHaHBjeTVuWlhSRVpXWmhkV3gwVm1Gc2RXVlFjbTl3S0NrN1hHNWNiaUFnSUNBZ0lDQWdJQ0FnSUM4dklFbHVhR1Z5YVhRZ2RtRnNkV1Z6SUdaeWIyMGdjSEp2Y0hOY2JpQWdJQ0FnSUNBZ0lDQWdJR1ZoWTJnb1pHVm1ZWFZzZEZaaGJIVmxMQ0FvZG1Gc2RXVXNJR3RsZVNrZ1BUNGdlMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJR2xtSUNod2NtOXdjMVJ2VTJWMFcydGxlVjBnSVQwOUlIVnVaR1ZtYVc1bFpDa2dlMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCa1pXWmhkV3gwVm1Gc2RXVmJhMlY1WFNBOUlIQnliM0J6Vkc5VFpYUmJhMlY1WFR0Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCOVhHNGdJQ0FnSUNBZ0lDQWdJQ0I5S1R0Y2JseHVJQ0FnSUNBZ0lDQWdJQ0FnTHk4Z1QzWmxjbmR5YVhSbElIQmxjaTEyWVd4MVpTQndjbTl3YzF4dUlDQWdJQ0FnSUNBZ0lDQWdaV0ZqYUNoMllXeDFaWE1zSUNoMllXeDFaU3dnYTJWNUtTQTlQaUI3WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnWTI5dWMzUWdaWGhwYzNScGJtZFdZV3gxWlNBOUlHTjFjbkpsYm5SV1lXeDFaWE5iYTJWNVhUdGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQnNaWFFnYm1WM1ZtRnNkV1VnUFNCN0lDNHVMbVJsWm1GMWJIUldZV3gxWlNCOU8xeHVYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdhV1lnS0dselQySnFLSFpoYkhWbEtTa2dlMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCdVpYZFdZV3gxWlNBOUlIc2dMaTR1Ym1WM1ZtRnNkV1VzSUM0dUxuWmhiSFZsSUgwN1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2ZTQmxiSE5sSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdibVYzVm1Gc2RXVmJaR1ZtWVhWc2RGWmhiSFZsVUhKdmNGMGdQU0IyWVd4MVpUdGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQjlYRzVjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0F2THlCMWNHUmhkR1VnZG1Gc2RXVnpYRzVjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0JqZFhKeVpXNTBWbUZzZFdWelcydGxlVjBnUFNCbGVHbHpkR2x1WjFaaGJIVmxJRDhnZXlBdUxpNWxlR2x6ZEdsdVoxWmhiSFZsTENBdUxpNXVaWGRXWVd4MVpTQjlJRG9nYm1WM1ZtRnNkV1U3WEc0Z0lDQWdJQ0FnSUNBZ0lDQjlLVHRjYmlBZ0lDQWdJQ0FnZlZ4dVhHNGdJQ0FnSUNBZ0lISmxkSFZ5YmlCMGFHbHpPMXh1SUNBZ0lIMWNibHh1SUNBZ0lIQmhkWE5sS0NrZ2UxeHVJQ0FnSUNBZ0lDQnpkWEJsY2k1emRHOXdLQ2s3WEc0Z0lDQWdJQ0FnSUhKbGRIVnliaUIwYUdsek8xeHVJQ0FnSUgxY2JseHVJQ0FnSUhKbGMzVnRaU2dwSUh0Y2JpQWdJQ0FnSUNBZ2MzVndaWEl1YzNSaGNuUW9LVHRjYmlBZ0lDQWdJQ0FnY21WMGRYSnVJSFJvYVhNN1hHNGdJQ0FnZlZ4dVhHNGdJQ0FnTHlwY2JpQWdJQ0FnSUNBZ0l5QkhaWFFnWkdWbVlYVnNkQ0JCWTNScGIyNGdkbUZzZFdVZ2NISnZjR1Z5ZEdsbGMxeHVYRzRnSUNBZ0lDQWdJRUJ5WlhSMWNtNGdXMjlpYW1WamRGMWNiaUFnSUNBcUwxeHVJQ0FnSUdkbGRFUmxabUYxYkhSV1lXeDFaU2dwSUh0Y2JpQWdJQ0FnSUNBZ2NtVjBkWEp1SUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJR04xY25KbGJuUTZJREFzWEc0Z0lDQWdJQ0FnSUNBZ0lDQjJaV3h2WTJsMGVUb2dNRnh1SUNBZ0lDQWdJQ0I5TzF4dUlDQWdJSDFjYmx4dUlDQWdJQzhxWEc0Z0lDQWdJQ0FnSUNNZ1IyVjBJR1JsWm1GMWJIUWdRV04wYVc5dUlIWmhiSFZsSUhCeWIzQmxjblI1SUc1aGJXVmNiaUFnSUNBZ0lDQWdJeU1nVTJWMElIUm9hWE1nWUhaaGJIVmxZQ0J3Y205d1pYSjBlU0IzYUdWdUlITmxkQ0JoY3lCMllXeDFaU0JwYm5OMFpXRmtJRzltSUc5aWFtVmpkRnh1WEc0Z0lDQWdJQ0FnSUVCeVpYUjFjbTRnVzNOMGNtbHVaMTFjYmlBZ0lDQXFMMXh1SUNBZ0lHZGxkRVJsWm1GMWJIUldZV3gxWlZCeWIzQW9LU0I3WEc0Z0lDQWdJQ0FnSUhKbGRIVnliaUJFUlVaQlZVeFVYMUJTVDFBN1hHNGdJQ0FnZlZ4dWZUdGNiaUpkZlE9PVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvYWN0aW9ucy9BY3Rpb24uanNcbiAqKiBtb2R1bGUgaWQgPSAzXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbnZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfQWN0aW9uMiA9IHJlcXVpcmUoJy4vQWN0aW9uJyk7XG5cbnZhciBfQWN0aW9uMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX0FjdGlvbjIpO1xuXG52YXIgX3ByZXNldEVhc2luZyA9IHJlcXVpcmUoJy4vdHdlZW4vcHJlc2V0LWVhc2luZycpO1xuXG52YXIgX3ByZXNldEVhc2luZzIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9wcmVzZXRFYXNpbmcpO1xuXG52YXIgX3V0aWxzID0gcmVxdWlyZSgnLi4vaW5jL3V0aWxzJyk7XG5cbnZhciBfY2FsYyA9IHJlcXVpcmUoJy4uL2luYy9jYWxjJyk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKCFzZWxmKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gY2FsbCAmJiAodHlwZW9mIGNhbGwgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikgPyBjYWxsIDogc2VsZjsgfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb24sIG5vdCBcIiArIHR5cGVvZiBzdXBlckNsYXNzKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCBlbnVtZXJhYmxlOiBmYWxzZSwgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LnNldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKSA6IHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7IH1cblxudmFyIENPVU5UID0gJ0NvdW50JztcbnZhciBORVhUX1NURVBTID0ge1xuICAgIGxvb3A6ICdyZXN0YXJ0JyxcbiAgICB5b3lvOiAncmV2ZXJzZScsXG4gICAgZmxpcDogJ2ZsaXBWYWx1ZXMnXG59O1xuXG4vKlxuICAgIEVhc2UgdmFsdWUgd2l0aGluIHJhbmdlZCBwYXJhbWV0ZXJzXG4gICAgXG4gICAgQHBhcmFtIFtudW1iZXJdOiBQcm9ncmVzcyBiZXR3ZWVuIDAgYW5kIDFcbiAgICBAcGFyYW0gW251bWJlcl06IFZhbHVlIG9mIDAgcHJvZ3Jlc3NcbiAgICBAcGFyYW0gW251bWJlcl06IFZhbHVlIG9mIDEgcHJvZ3Jlc3NcbiAgICBAcGFyYW0gW3N0cmluZyB8fCBmdW5jdGlvbl06IE5hbWUgb2YgcHJlc2V0IGVhc2luZ1xuICAgICAgICB0byB1c2Ugb3IgZ2VuZXJhdGVkIGVhc2luZyBmdW5jdGlvblxuICAgIEByZXR1cm4gW251bWJlcl06IFZhbHVlIG9mIGVhc2VkIHByb2dyZXNzIGluIHJhbmdlXG4qL1xuZnVuY3Rpb24gZWFzZShwcm9ncmVzcywgZnJvbSwgdG8sIGVhc2UpIHtcbiAgICB2YXIgcHJvZ3Jlc3NMaW1pdGVkID0gKDAsIF9jYWxjLnJlc3RyaWN0KShwcm9ncmVzcywgMCwgMSk7XG4gICAgdmFyIGVhc2luZ0Z1bmN0aW9uID0gKDAsIF91dGlscy5pc1N0cmluZykoZWFzZSkgPyBfcHJlc2V0RWFzaW5nMi5kZWZhdWx0W2Vhc2VdIDogZWFzZTtcbiAgICB2YXIgZWFzZWRQcm9ncmVzcyA9IGVhc2luZ0Z1bmN0aW9uKHByb2dyZXNzTGltaXRlZCk7XG5cbiAgICByZXR1cm4gKDAsIF9jYWxjLmdldFZhbHVlRnJvbVByb2dyZXNzKShlYXNlZFByb2dyZXNzLCBmcm9tLCB0byk7XG59O1xuXG52YXIgVHdlZW4gPSAoZnVuY3Rpb24gKF9BY3Rpb24pIHtcbiAgICBfaW5oZXJpdHMoVHdlZW4sIF9BY3Rpb24pO1xuXG4gICAgZnVuY3Rpb24gVHdlZW4oKSB7XG4gICAgICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBUd2Vlbik7XG5cbiAgICAgICAgcmV0dXJuIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIF9BY3Rpb24uYXBwbHkodGhpcywgYXJndW1lbnRzKSk7XG4gICAgfVxuXG4gICAgVHdlZW4ucHJvdG90eXBlLnN0YXJ0ID0gZnVuY3Rpb24gc3RhcnQoKSB7XG4gICAgICAgIF9BY3Rpb24ucHJvdG90eXBlLnN0YXJ0LmNhbGwodGhpcyk7XG4gICAgICAgIHRoaXMuZWxhcHNlZCA9IDA7XG4gICAgICAgIHRoaXMuZmxpcENvdW50ID0gdGhpcy55b3lvQ291bnQgPSB0aGlzLmxvb3BDb3VudCA9IDA7XG4gICAgfTtcblxuICAgIFR3ZWVuLnByb3RvdHlwZS5vblVwZGF0ZSA9IGZ1bmN0aW9uIG9uVXBkYXRlKHR3ZWVuLCBmcmFtZVN0YW1wLCBlbGFwc2VkKSB7XG4gICAgICAgIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gICAgICAgIHZhciBwcm9ncmVzc1RhcmdldCA9IHRoaXMucGxheURpcmVjdGlvbiA9PT0gMSA/IDEgOiAwO1xuXG4gICAgICAgIHRoaXMuZW5kZWQgPSB0cnVlO1xuICAgICAgICB0aGlzLmVsYXBzZWQgKz0gZWxhcHNlZCAqIHRoaXMuZGlsYXRlICogdGhpcy5wbGF5RGlyZWN0aW9uO1xuXG4gICAgICAgICgwLCBfdXRpbHMuZWFjaCkodGhpcy52YWx1ZXMsIGZ1bmN0aW9uICh2YWx1ZSwga2V5KSB7XG4gICAgICAgICAgICB2YXIgcHJvZ3Jlc3MgPSAoMCwgX2NhbGMucmVzdHJpY3QpKCgwLCBfY2FsYy5nZXRQcm9ncmVzc0Zyb21WYWx1ZSkoX3RoaXMyLmVsYXBzZWQgLSB2YWx1ZS5kZWxheSwgMCwgdmFsdWUuZHVyYXRpb24pLCAwLCAxKTtcblxuICAgICAgICAgICAgLy8gTWFyayBUd2VlbiBhcyBOT1QgZW5kZWQgaWYgc3RpbGwgaW4gcHJvZ3Jlc3NcbiAgICAgICAgICAgIGlmIChwcm9ncmVzcyAhPT0gcHJvZ3Jlc3NUYXJnZXQpIHtcbiAgICAgICAgICAgICAgICBfdGhpczIuZW5kZWQgPSBmYWxzZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gU3RlcCBwcm9ncmVzcyBpZiB3ZSdyZSBzdGVwcGluZ1xuICAgICAgICAgICAgaWYgKHZhbHVlLnN0ZXBzKSB7XG4gICAgICAgICAgICAgICAgcHJvZ3Jlc3MgPSAoMCwgX2NhbGMuc3RlcFByb2dyZXNzKShwcm9ncmVzcywgdmFsdWUuc3RlcHMpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBFYXNlIHByb2dyZXNzXG4gICAgICAgICAgICB2YWx1ZS5jdXJyZW50ID0gZWFzZShwcm9ncmVzcywgdmFsdWUuZnJvbSwgdmFsdWUudG8sIHZhbHVlLmVhc2UpO1xuICAgICAgICB9KTtcbiAgICB9O1xuXG4gICAgVHdlZW4ucHJvdG90eXBlLm9uRnJhbWVFbmQgPSBmdW5jdGlvbiBvbkZyYW1lRW5kKCkge1xuICAgICAgICB2YXIgX3RoaXMzID0gdGhpcztcblxuICAgICAgICBpZiAodGhpcy5lbmRlZCkge1xuICAgICAgICAgICAgdmFyIHN0ZXBUYWtlbiA9IGZhbHNlO1xuXG4gICAgICAgICAgICAoMCwgX3V0aWxzLmVhY2gpKE5FWFRfU1RFUFMsIGZ1bmN0aW9uIChtZXRob2QsIHN0ZXApIHtcbiAgICAgICAgICAgICAgICB2YXIgbWF4U3RlcHMgPSBfdGhpczNbc3RlcF07XG5cbiAgICAgICAgICAgICAgICBpZiAobWF4U3RlcHMgPT09IHRydWUgfHwgKDAsIF91dGlscy5pc051bSkobWF4U3RlcHMpICYmIG1heFN0ZXBzID4gX3RoaXMzW3N0ZXAgKyBDT1VOVF0pIHtcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMzW3N0ZXAgKyBDT1VOVF0rKztcbiAgICAgICAgICAgICAgICAgICAgc3RlcFRha2VuID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMzW21ldGhvZF0oKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgaWYgKCFzdGVwVGFrZW4pIHtcbiAgICAgICAgICAgICAgICB0aGlzLnN0b3AoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBUd2Vlbi5wcm90b3R5cGUuZmxpcFZhbHVlcyA9IGZ1bmN0aW9uIGZsaXBWYWx1ZXMoKSB7XG4gICAgICAgIHRoaXMuZWxhcHNlZCA9IHRoaXMuZHVyYXRpb24gLSB0aGlzLmVsYXBzZWQ7XG5cbiAgICAgICAgKDAsIF91dGlscy5lYWNoKSh0aGlzLnZhbHVlcywgZnVuY3Rpb24gKHZhbHVlLCBrZXkpIHtcbiAgICAgICAgICAgIHZhciBfcmVmID0gW3ZhbHVlLmZyb20sIHZhbHVlLnRvXTtcbiAgICAgICAgICAgIHZhbHVlLnRvID0gX3JlZlswXTtcbiAgICAgICAgICAgIHZhbHVlLmZyb20gPSBfcmVmWzFdO1xuICAgICAgICB9KTtcbiAgICB9O1xuXG4gICAgVHdlZW4ucHJvdG90eXBlLnJldmVyc2UgPSBmdW5jdGlvbiByZXZlcnNlKCkge1xuICAgICAgICB0aGlzLnBsYXlEaXJlY3Rpb24gKj0gLTE7XG4gICAgfTtcblxuICAgIFR3ZWVuLnByb3RvdHlwZS5yZXN0YXJ0ID0gZnVuY3Rpb24gcmVzdGFydCgpIHtcbiAgICAgICAgdGhpcy5lbGFwc2VkID0gdGhpcy5wbGF5RGlyZWN0aW9uID09PSAxID8gMCA6IHRoaXMuZHVyYXRpb247XG4gICAgICAgIHRoaXMuc3RhcnRlZCA9ICgwLCBfdXRpbHMuY3VycmVudFRpbWUpKCk7XG4gICAgfTtcblxuICAgIFR3ZWVuLnByb3RvdHlwZS5zZWVrID0gZnVuY3Rpb24gc2Vlayhwcm9ncmVzcykge1xuICAgICAgICB0aGlzLm9uY2UoKTtcbiAgICAgICAgdGhpcy5lbGFwc2VkID0gdGhpcy5kdXJhdGlvbiAqIHByb2dyZXNzO1xuICAgIH07XG5cbiAgICBUd2Vlbi5wcm90b3R5cGUuZ2V0RGVmYXVsdFByb3BzID0gZnVuY3Rpb24gZ2V0RGVmYXVsdFByb3BzKCkge1xuICAgICAgICByZXR1cm4gX2V4dGVuZHMoe30sIF9BY3Rpb24ucHJvdG90eXBlLmdldERlZmF1bHRQcm9wcy5jYWxsKHRoaXMpLCB7XG4gICAgICAgICAgICBkZWxheTogMCxcbiAgICAgICAgICAgIGRpbGF0ZTogMSxcbiAgICAgICAgICAgIGR1cmF0aW9uOiAzMDAsXG4gICAgICAgICAgICBsb29wOiBmYWxzZSxcbiAgICAgICAgICAgIHlveW86IGZhbHNlLFxuICAgICAgICAgICAgZmxpcDogZmFsc2UsXG4gICAgICAgICAgICBwbGF5RGlyZWN0aW9uOiAxLFxuICAgICAgICAgICAgZW5kZWQ6IGZhbHNlLFxuICAgICAgICAgICAgZWxhcHNlZDogMFxuICAgICAgICB9KTtcbiAgICB9O1xuXG4gICAgVHdlZW4ucHJvdG90eXBlLmdldERlZmF1bHRWYWx1ZSA9IGZ1bmN0aW9uIGdldERlZmF1bHRWYWx1ZSgpIHtcbiAgICAgICAgcmV0dXJuIF9leHRlbmRzKHt9LCBfQWN0aW9uLnByb3RvdHlwZS5nZXREZWZhdWx0VmFsdWUuY2FsbCh0aGlzKSwge1xuICAgICAgICAgICAgZGVsYXk6IDAsXG4gICAgICAgICAgICBkdXJhdGlvbjogMzAwLFxuICAgICAgICAgICAgZWFzZTogJ2Vhc2VPdXQnLFxuICAgICAgICAgICAgZWxhcHNlZDogMCxcbiAgICAgICAgICAgIHN0YWdnZXI6IDAsXG4gICAgICAgICAgICBzdGVwczogMCxcbiAgICAgICAgICAgIGZyb206IDAsXG4gICAgICAgICAgICB0bzogMCxcbiAgICAgICAgICAgIHJvdW5kOiBmYWxzZVxuICAgICAgICB9KTtcbiAgICB9O1xuXG4gICAgVHdlZW4ucHJvdG90eXBlLmdldERlZmF1bHRWYWx1ZVByb3AgPSBmdW5jdGlvbiBnZXREZWZhdWx0VmFsdWVQcm9wKCkge1xuICAgICAgICByZXR1cm4gJ3RvJztcbiAgICB9O1xuXG4gICAgcmV0dXJuIFR3ZWVuO1xufSkoX0FjdGlvbjMuZGVmYXVsdCk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IFR3ZWVuO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYklsUjNaV1Z1TG1weklsMHNJbTVoYldWeklqcGJYU3dpYldGd2NHbHVaM01pT2lJN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3TzBGQlpVRXNTVUZCVFN4TFFVRkxMRWRCUVVjc1QwRkJUeXhEUVVGRE8wRkJRM1JDTEVsQlFVMHNWVUZCVlN4SFFVRkhPMEZCUTJZc1VVRkJTU3hGUVVGRkxGTkJRVk03UVVGRFppeFJRVUZKTEVWQlFVVXNVMEZCVXp0QlFVTm1MRkZCUVVrc1JVRkJSU3haUVVGWk8wTkJRM0pDT3pzN096czdPenM3T3pzN1FVRkJReXhCUVZsR0xGTkJRVk1zU1VGQlNTeERRVUZETEZGQlFWRXNSVUZCUlN4SlFVRkpMRVZCUVVVc1JVRkJSU3hGUVVGRkxFbEJRVWtzUlVGQlJUdEJRVU53UXl4UlFVRk5MR1ZCUVdVc1IwRkJSeXhWUVhoQ2VFSXNVVUZCVVN4RlFYZENlVUlzVVVGQlVTeEZRVUZGTEVOQlFVTXNSVUZCUlN4RFFVRkRMRU5CUVVNc1EwRkJRenRCUVVOcVJDeFJRVUZOTEdOQlFXTXNSMEZCUnl4WFFUVkNka0lzVVVGQlVTeEZRVFJDZDBJc1NVRkJTU3hEUVVGRExFZEJRVWNzZFVKQlFXRXNTVUZCU1N4RFFVRkRMRWRCUVVjc1NVRkJTU3hEUVVGRE8wRkJRMnhGTEZGQlFVMHNZVUZCWVN4SFFVRkhMR05CUVdNc1EwRkJReXhsUVVGbExFTkJRVU1zUTBGQlF6czdRVUZGZEVRc1YwRkJUeXhWUVRGQ1VDeHZRa0ZCYjBJc1JVRXdRbEVzWVVGQllTeEZRVUZGTEVsQlFVa3NSVUZCUlN4RlFVRkZMRU5CUVVNc1EwRkJRenREUVVONFJDeERRVUZET3p0SlFVVnRRaXhMUVVGTE8yTkJRVXdzUzBGQlN6czdZVUZCVEN4TFFVRkxPemhDUVVGTUxFdEJRVXM3T3pzN08wRkJRVXdzVTBGQlN5eFhRVU4wUWl4TFFVRkxMRzlDUVVGSE8wRkJRMG9zTUVKQlFVMHNTMEZCU3l4TFFVRkJMRTFCUVVVc1EwRkJRenRCUVVOa0xGbEJRVWtzUTBGQlF5eFBRVUZQTEVkQlFVY3NRMEZCUXl4RFFVRkRPMEZCUTJwQ0xGbEJRVWtzUTBGQlF5eFRRVUZUTEVkQlFVY3NTVUZCU1N4RFFVRkRMRk5CUVZNc1IwRkJSeXhKUVVGSkxFTkJRVU1zVTBGQlV5eEhRVUZITEVOQlFVTXNRMEZCUXp0TFFVTjRSRHM3UVVGTVowSXNVMEZCU3l4WFFVOTBRaXhSUVVGUkxIRkNRVUZETEV0QlFVc3NSVUZCUlN4VlFVRlZMRVZCUVVVc1QwRkJUeXhGUVVGRk96czdRVUZEYWtNc1dVRkJUU3hqUVVGakxFZEJRVWNzUVVGQlF5eEpRVUZKTEVOQlFVTXNZVUZCWVN4TFFVRkxMRU5CUVVNc1IwRkJTU3hEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZET3p0QlFVVXhSQ3haUVVGSkxFTkJRVU1zUzBGQlN5eEhRVUZITEVsQlFVa3NRMEZCUXp0QlFVTnNRaXhaUVVGSkxFTkJRVU1zVDBGQlR5eEpRVUZKTEVGQlFVTXNUMEZCVHl4SFFVRkhMRWxCUVVrc1EwRkJReXhOUVVGTkxFZEJRVWtzU1VGQlNTeERRVUZETEdGQlFXRXNRMEZCUXpzN1FVRkZOMFFzYlVKQmFrUktMRWxCUVVrc1JVRnBSRXNzU1VGQlNTeERRVUZETEUxQlFVMHNSVUZCUlN4VlFVRkRMRXRCUVVzc1JVRkJSU3hIUVVGSExFVkJRVXM3UVVGRE9VSXNaMEpCUVVrc1VVRkJVU3hIUVVGSExGVkJOME4yUWl4UlFVRlJMRVZCTmtOM1FpeFZRVFZEYUVNc2IwSkJRVzlDTEVWQk5FTnBReXhQUVVGTExFOUJRVThzUjBGQlJ5eExRVUZMTEVOQlFVTXNTMEZCU3l4RlFVRkZMRU5CUVVNc1JVRkJSU3hMUVVGTExFTkJRVU1zVVVGQlVTeERRVUZETEVWQlFVVXNRMEZCUXl4RlFVRkZMRU5CUVVNc1EwRkJRenM3TzBGQlFVTXNRVUZIYmtjc1owSkJRVWtzVVVGQlVTeExRVUZMTEdOQlFXTXNSVUZCUlR0QlFVTTNRaXgxUWtGQlN5eExRVUZMTEVkQlFVY3NTMEZCU3l4RFFVRkRPMkZCUTNSQ096czdRVUZCUVN4QlFVZEVMR2RDUVVGSkxFdEJRVXNzUTBGQlF5eExRVUZMTEVWQlFVVTdRVUZEWWl4M1FrRkJVU3hIUVVGSExGVkJia1IyUWl4WlFVRlpMRVZCYlVSM1FpeFJRVUZSTEVWQlFVVXNTMEZCU3l4RFFVRkRMRXRCUVVzc1EwRkJReXhEUVVGRE8yRkJRMnhFT3pzN1FVRkJRU3hCUVVkRUxHbENRVUZMTEVOQlFVTXNUMEZCVHl4SFFVRkhMRWxCUVVrc1EwRkJReXhSUVVGUkxFVkJRVVVzUzBGQlN5eERRVUZETEVsQlFVa3NSVUZCUlN4TFFVRkxMRU5CUVVNc1JVRkJSU3hGUVVGRkxFdEJRVXNzUTBGQlF5eEpRVUZKTEVOQlFVTXNRMEZCUXp0VFFVTndSU3hEUVVGRExFTkJRVU03UzBGRFRqczdRVUUzUW1kQ0xGTkJRVXNzVjBFclFuUkNMRlZCUVZVc2VVSkJRVWM3T3p0QlFVTlVMRmxCUVVrc1NVRkJTU3hEUVVGRExFdEJRVXNzUlVGQlJUdEJRVU5hTEdkQ1FVRkpMRk5CUVZNc1IwRkJSeXhMUVVGTExFTkJRVU03TzBGQlJYUkNMSFZDUVhaRlVpeEpRVUZKTEVWQmRVVlRMRlZCUVZVc1JVRkJSU3hWUVVGRExFMUJRVTBzUlVGQlJTeEpRVUZKTEVWQlFVczdRVUZETDBJc2IwSkJRVTBzVVVGQlVTeEhRVUZITEU5QlFVc3NTVUZCU1N4RFFVRkRMRU5CUVVNN08wRkJSVFZDTEc5Q1FVRkpMRkZCUVZFc1MwRkJTeXhKUVVGSkxFbEJRVXNzVjBGNlJYUkRMRXRCUVVzc1JVRjVSWFZETEZGQlFWRXNRMEZCUXl4SlFVRkpMRkZCUVZFc1IwRkJSeXhQUVVGTExFbEJRVWtzUjBGQlJ5eExRVUZMTEVOQlFVTXNRVUZCUXl4RlFVRkZPMEZCUTNwRkxESkNRVUZMTEVsQlFVa3NSMEZCUnl4TFFVRkxMRU5CUVVNc1JVRkJSU3hEUVVGRE8wRkJRM0pDTERaQ1FVRlRMRWRCUVVjc1NVRkJTU3hEUVVGRE8wRkJRMnBDTERKQ1FVRkxMRTFCUVUwc1EwRkJReXhGUVVGRkxFTkJRVU03YVVKQlEyeENPMkZCUTBvc1EwRkJReXhEUVVGRE96dEJRVVZJTEdkQ1FVRkpMRU5CUVVNc1UwRkJVeXhGUVVGRk8wRkJRMW9zYjBKQlFVa3NRMEZCUXl4SlFVRkpMRVZCUVVVc1EwRkJRenRoUVVObU8xTkJRMG83UzBGRFNqczdRVUZxUkdkQ0xGTkJRVXNzVjBGdFJIUkNMRlZCUVZVc2VVSkJRVWM3UVVGRFZDeFpRVUZKTEVOQlFVTXNUMEZCVHl4SFFVRkhMRWxCUVVrc1EwRkJReXhSUVVGUkxFZEJRVWNzU1VGQlNTeERRVUZETEU5QlFVOHNRMEZCUXpzN1FVRkZOVU1zYlVKQk1VWktMRWxCUVVrc1JVRXdSa3NzU1VGQlNTeERRVUZETEUxQlFVMHNSVUZCUlN4VlFVRkRMRXRCUVVzc1JVRkJSU3hIUVVGSExFVkJRVXM3ZFVKQlEwd3NRMEZCUXl4TFFVRkxMRU5CUVVNc1NVRkJTU3hGUVVGRkxFdEJRVXNzUTBGQlF5eEZRVUZGTEVOQlFVTTdRVUZCT1VNc2FVSkJRVXNzUTBGQlF5eEZRVUZGTzBGQlFVVXNhVUpCUVVzc1EwRkJReXhKUVVGSk8xTkJRM2hDTEVOQlFVTXNRMEZCUXp0TFFVTk9PenRCUVhwRVowSXNVMEZCU3l4WFFUSkVkRUlzVDBGQlR5eHpRa0ZCUnp0QlFVTk9MRmxCUVVrc1EwRkJReXhoUVVGaExFbEJRVWtzUTBGQlF5eERRVUZETEVOQlFVTTdTMEZETlVJN08wRkJOMFJuUWl4VFFVRkxMRmRCSzBSMFFpeFBRVUZQTEhOQ1FVRkhPMEZCUTA0c1dVRkJTU3hEUVVGRExFOUJRVThzUjBGQlJ5eEJRVUZETEVsQlFVa3NRMEZCUXl4aFFVRmhMRXRCUVVzc1EwRkJReXhIUVVGSkxFTkJRVU1zUjBGQlJ5eEpRVUZKTEVOQlFVTXNVVUZCVVN4RFFVRkRPMEZCUXpsRUxGbEJRVWtzUTBGQlF5eFBRVUZQTEVkQlFVY3NWMEYwUjI1Q0xGZEJRVmNzUjBGelIzRkNMRU5CUVVNN1MwRkRhRU03TzBGQmJFVm5RaXhUUVVGTExGZEJiMFYwUWl4SlFVRkpMR2xDUVVGRExGRkJRVkVzUlVGQlJUdEJRVU5ZTEZsQlFVa3NRMEZCUXl4SlFVRkpMRVZCUVVVc1EwRkJRenRCUVVOYUxGbEJRVWtzUTBGQlF5eFBRVUZQTEVkQlFVY3NTVUZCU1N4RFFVRkRMRkZCUVZFc1IwRkJSeXhSUVVGUkxFTkJRVU03UzBGRE0wTTdPMEZCZGtWblFpeFRRVUZMTEZkQmVVVjBRaXhsUVVGbExEaENRVUZITzBGQlEyUXNORUpCUTA4c2EwSkJRVTBzWlVGQlpTeExRVUZCTEUxQlFVVTdRVUZETVVJc2FVSkJRVXNzUlVGQlJTeERRVUZETzBGQlExSXNhMEpCUVUwc1JVRkJSU3hEUVVGRE8wRkJRMVFzYjBKQlFWRXNSVUZCUlN4SFFVRkhPMEZCUTJJc1owSkJRVWtzUlVGQlJTeExRVUZMTzBGQlExZ3NaMEpCUVVrc1JVRkJSU3hMUVVGTE8wRkJRMWdzWjBKQlFVa3NSVUZCUlN4TFFVRkxPMEZCUTFnc2VVSkJRV0VzUlVGQlJTeERRVUZETzBGQlEyaENMR2xDUVVGTExFVkJRVVVzUzBGQlN6dEJRVU5hTEcxQ1FVRlBMRVZCUVVVc1EwRkJRenRYUVVOYU8wdEJRMHc3TzBGQmRFWm5RaXhUUVVGTExGZEJkMFowUWl4bFFVRmxMRGhDUVVGSE8wRkJRMlFzTkVKQlEwOHNhMEpCUVUwc1pVRkJaU3hMUVVGQkxFMUJRVVU3UVVGRE1VSXNhVUpCUVVzc1JVRkJSU3hEUVVGRE8wRkJRMUlzYjBKQlFWRXNSVUZCUlN4SFFVRkhPMEZCUTJJc1owSkJRVWtzUlVGQlJTeFRRVUZUTzBGQlEyWXNiVUpCUVU4c1JVRkJSU3hEUVVGRE8wRkJRMVlzYlVKQlFVOHNSVUZCUlN4RFFVRkRPMEZCUTFZc2FVSkJRVXNzUlVGQlJTeERRVUZETzBGQlExSXNaMEpCUVVrc1JVRkJSU3hEUVVGRE8wRkJRMUFzWTBGQlJTeEZRVUZGTEVOQlFVTTdRVUZEVEN4cFFrRkJTeXhGUVVGRkxFdEJRVXM3VjBGRFpEdExRVU5NT3p0QlFYSkhaMElzVTBGQlN5eFhRWFZIZEVJc2JVSkJRVzFDTEd0RFFVRkhPMEZCUTJ4Q0xHVkJRVThzU1VGQlNTeERRVUZETzB0QlEyWTdPMWRCZWtkblFpeExRVUZMT3pzN2EwSkJRVXdzUzBGQlN5SXNJbVpwYkdVaU9pSlVkMlZsYmk1cWN5SXNJbk52ZFhKalpYTkRiMjUwWlc1MElqcGJJbWx0Y0c5eWRDQkJZM1JwYjI0Z1puSnZiU0FuTGk5QlkzUnBiMjRuTzF4dWFXMXdiM0owSUhCeVpYTmxkRVZoYzJsdVp5Qm1jbTl0SUNjdUwzUjNaV1Z1TDNCeVpYTmxkQzFsWVhOcGJtY25PMXh1YVcxd2IzSjBJSHRjYmlBZ0lDQmpkWEp5Wlc1MFZHbHRaU3hjYmlBZ0lDQmxZV05vTEZ4dUlDQWdJR2x6VG5WdExGeHVJQ0FnSUdselUzUnlhVzVuWEc1OUlHWnliMjBnSnk0dUwybHVZeTkxZEdsc2N5YzdYRzVwYlhCdmNuUWdlMXh1SUNBZ0lISmxjM1J5YVdOMExGeHVJQ0FnSUdkbGRGQnliMmR5WlhOelJuSnZiVlpoYkhWbExGeHVJQ0FnSUdkbGRGWmhiSFZsUm5KdmJWQnliMmR5WlhOekxGeHVJQ0FnSUhOMFpYQlFjbTluY21WemMxeHVmU0JtY205dElDY3VMaTlwYm1NdlkyRnNZeWM3WEc1Y2JtTnZibk4wSUVOUFZVNVVJRDBnSjBOdmRXNTBKenRjYm1OdmJuTjBJRTVGV0ZSZlUxUkZVRk1nUFNCN1hHNGdJQ0FnYkc5dmNEb2dKM0psYzNSaGNuUW5MRnh1SUNBZ0lIbHZlVzg2SUNkeVpYWmxjbk5sSnl4Y2JpQWdJQ0JtYkdsd09pQW5abXhwY0ZaaGJIVmxjeWRjYm4wN1hHNWNiaThxWEc0Z0lDQWdSV0Z6WlNCMllXeDFaU0IzYVhSb2FXNGdjbUZ1WjJWa0lIQmhjbUZ0WlhSbGNuTmNiaUFnSUNCY2JpQWdJQ0JBY0dGeVlXMGdXMjUxYldKbGNsMDZJRkJ5YjJkeVpYTnpJR0psZEhkbFpXNGdNQ0JoYm1RZ01WeHVJQ0FnSUVCd1lYSmhiU0JiYm5WdFltVnlYVG9nVm1Gc2RXVWdiMllnTUNCd2NtOW5jbVZ6YzF4dUlDQWdJRUJ3WVhKaGJTQmJiblZ0WW1WeVhUb2dWbUZzZFdVZ2IyWWdNU0J3Y205bmNtVnpjMXh1SUNBZ0lFQndZWEpoYlNCYmMzUnlhVzVuSUh4OElHWjFibU4wYVc5dVhUb2dUbUZ0WlNCdlppQndjbVZ6WlhRZ1pXRnphVzVuWEc0Z0lDQWdJQ0FnSUhSdklIVnpaU0J2Y2lCblpXNWxjbUYwWldRZ1pXRnphVzVuSUdaMWJtTjBhVzl1WEc0Z0lDQWdRSEpsZEhWeWJpQmJiblZ0WW1WeVhUb2dWbUZzZFdVZ2IyWWdaV0Z6WldRZ2NISnZaM0psYzNNZ2FXNGdjbUZ1WjJWY2Jpb3ZJRnh1Wm5WdVkzUnBiMjRnWldGelpTaHdjbTluY21WemN5d2dabkp2YlN3Z2RHOHNJR1ZoYzJVcElIdGNiaUFnSUNCamIyNXpkQ0J3Y205bmNtVnpjMHhwYldsMFpXUWdQU0J5WlhOMGNtbGpkQ2h3Y205bmNtVnpjeXdnTUN3Z01TazdYRzRnSUNBZ1kyOXVjM1FnWldGemFXNW5SblZ1WTNScGIyNGdQU0JwYzFOMGNtbHVaeWhsWVhObEtTQS9JSEJ5WlhObGRFVmhjMmx1WjF0bFlYTmxYU0E2SUdWaGMyVTdYRzRnSUNBZ1kyOXVjM1FnWldGelpXUlFjbTluY21WemN5QTlJR1ZoYzJsdVowWjFibU4wYVc5dUtIQnliMmR5WlhOelRHbHRhWFJsWkNrN1hHNWNiaUFnSUNCeVpYUjFjbTRnWjJWMFZtRnNkV1ZHY205dFVISnZaM0psYzNNb1pXRnpaV1JRY205bmNtVnpjeXdnWm5KdmJTd2dkRzhwTzF4dWZUdGNibHh1Wlhod2IzSjBJR1JsWm1GMWJIUWdZMnhoYzNNZ1ZIZGxaVzRnWlhoMFpXNWtjeUJCWTNScGIyNGdlMXh1SUNBZ0lITjBZWEowS0NrZ2UxeHVJQ0FnSUNBZ0lDQnpkWEJsY2k1emRHRnlkQ2dwTzF4dUlDQWdJQ0FnSUNCMGFHbHpMbVZzWVhCelpXUWdQU0F3TzF4dUlDQWdJQ0FnSUNCMGFHbHpMbVpzYVhCRGIzVnVkQ0E5SUhSb2FYTXVlVzk1YjBOdmRXNTBJRDBnZEdocGN5NXNiMjl3UTI5MWJuUWdQU0F3TzF4dUlDQWdJSDFjYmx4dUlDQWdJRzl1VlhCa1lYUmxLSFIzWldWdUxDQm1jbUZ0WlZOMFlXMXdMQ0JsYkdGd2MyVmtLU0I3WEc0Z0lDQWdJQ0FnSUdOdmJuTjBJSEJ5YjJkeVpYTnpWR0Z5WjJWMElEMGdLSFJvYVhNdWNHeGhlVVJwY21WamRHbHZiaUE5UFQwZ01Ta2dQeUF4SURvZ01EdGNibHh1SUNBZ0lDQWdJQ0IwYUdsekxtVnVaR1ZrSUQwZ2RISjFaVHRjYmlBZ0lDQWdJQ0FnZEdocGN5NWxiR0Z3YzJWa0lDczlJQ2hsYkdGd2MyVmtJQ29nZEdocGN5NWthV3hoZEdVcElDb2dkR2hwY3k1d2JHRjVSR2x5WldOMGFXOXVPMXh1WEc0Z0lDQWdJQ0FnSUdWaFkyZ29kR2hwY3k1MllXeDFaWE1zSUNoMllXeDFaU3dnYTJWNUtTQTlQaUI3WEc0Z0lDQWdJQ0FnSUNBZ0lDQnNaWFFnY0hKdlozSmxjM01nUFNCeVpYTjBjbWxqZENoblpYUlFjbTluY21WemMwWnliMjFXWVd4MVpTaDBhR2x6TG1Wc1lYQnpaV1FnTFNCMllXeDFaUzVrWld4aGVTd2dNQ3dnZG1Gc2RXVXVaSFZ5WVhScGIyNHBMQ0F3TENBeEtUdGNibHh1SUNBZ0lDQWdJQ0FnSUNBZ0x5OGdUV0Z5YXlCVWQyVmxiaUJoY3lCT1QxUWdaVzVrWldRZ2FXWWdjM1JwYkd3Z2FXNGdjSEp2WjNKbGMzTmNiaUFnSUNBZ0lDQWdJQ0FnSUdsbUlDaHdjbTluY21WemN5QWhQVDBnY0hKdlozSmxjM05VWVhKblpYUXBJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0IwYUdsekxtVnVaR1ZrSUQwZ1ptRnNjMlU3WEc0Z0lDQWdJQ0FnSUNBZ0lDQjlYRzVjYmlBZ0lDQWdJQ0FnSUNBZ0lDOHZJRk4wWlhBZ2NISnZaM0psYzNNZ2FXWWdkMlVuY21VZ2MzUmxjSEJwYm1kY2JpQWdJQ0FnSUNBZ0lDQWdJR2xtSUNoMllXeDFaUzV6ZEdWd2N5a2dlMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJSEJ5YjJkeVpYTnpJRDBnYzNSbGNGQnliMmR5WlhOektIQnliMmR5WlhOekxDQjJZV3gxWlM1emRHVndjeWs3WEc0Z0lDQWdJQ0FnSUNBZ0lDQjlYRzVjYmlBZ0lDQWdJQ0FnSUNBZ0lDOHZJRVZoYzJVZ2NISnZaM0psYzNOY2JpQWdJQ0FnSUNBZ0lDQWdJSFpoYkhWbExtTjFjbkpsYm5RZ1BTQmxZWE5sS0hCeWIyZHlaWE56TENCMllXeDFaUzVtY205dExDQjJZV3gxWlM1MGJ5d2dkbUZzZFdVdVpXRnpaU2s3WEc0Z0lDQWdJQ0FnSUgwcE8xeHVJQ0FnSUgxY2JseHVJQ0FnSUc5dVJuSmhiV1ZGYm1Rb0tTQjdYRzRnSUNBZ0lDQWdJR2xtSUNoMGFHbHpMbVZ1WkdWa0tTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNCc1pYUWdjM1JsY0ZSaGEyVnVJRDBnWm1Gc2MyVTdYRzVjYmlBZ0lDQWdJQ0FnSUNBZ0lHVmhZMmdvVGtWWVZGOVRWRVZRVXl3Z0tHMWxkR2h2WkN3Z2MzUmxjQ2tnUFQ0Z2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lHTnZibk4wSUcxaGVGTjBaWEJ6SUQwZ2RHaHBjMXR6ZEdWd1hUdGNibHh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJR2xtSUNodFlYaFRkR1Z3Y3lBOVBUMGdkSEoxWlNCOGZDQW9hWE5PZFcwb2JXRjRVM1JsY0hNcElDWW1JRzFoZUZOMFpYQnpJRDRnZEdocGMxdHpkR1Z3SUNzZ1EwOVZUbFJkS1NrZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0IwYUdselczTjBaWEFnS3lCRFQxVk9WRjByS3p0Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdjM1JsY0ZSaGEyVnVJRDBnZEhKMVpUdGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnZEdocGMxdHRaWFJvYjJSZEtDazdYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdmVnh1SUNBZ0lDQWdJQ0FnSUNBZ2ZTazdYRzVjYmlBZ0lDQWdJQ0FnSUNBZ0lHbG1JQ2doYzNSbGNGUmhhMlZ1S1NCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2RHaHBjeTV6ZEc5d0tDazdYRzRnSUNBZ0lDQWdJQ0FnSUNCOVhHNGdJQ0FnSUNBZ0lIMWNiaUFnSUNCOVhHNWNiaUFnSUNCbWJHbHdWbUZzZFdWektDa2dlMXh1SUNBZ0lDQWdJQ0IwYUdsekxtVnNZWEJ6WldRZ1BTQjBhR2x6TG1SMWNtRjBhVzl1SUMwZ2RHaHBjeTVsYkdGd2MyVmtPMXh1WEc0Z0lDQWdJQ0FnSUdWaFkyZ29kR2hwY3k1MllXeDFaWE1zSUNoMllXeDFaU3dnYTJWNUtTQTlQaUI3WEc0Z0lDQWdJQ0FnSUNBZ0lDQmJkbUZzZFdVdWRHOHNJSFpoYkhWbExtWnliMjFkSUQwZ1czWmhiSFZsTG1aeWIyMHNJSFpoYkhWbExuUnZYVHRjYmlBZ0lDQWdJQ0FnZlNrN1hHNGdJQ0FnZlZ4dVhHNGdJQ0FnY21WMlpYSnpaU2dwSUh0Y2JpQWdJQ0FnSUNBZ2RHaHBjeTV3YkdGNVJHbHlaV04wYVc5dUlDbzlJQzB4TzF4dUlDQWdJSDFjYmx4dUlDQWdJSEpsYzNSaGNuUW9LU0I3WEc0Z0lDQWdJQ0FnSUhSb2FYTXVaV3hoY0hObFpDQTlJQ2gwYUdsekxuQnNZWGxFYVhKbFkzUnBiMjRnUFQwOUlERXBJRDhnTUNBNklIUm9hWE11WkhWeVlYUnBiMjQ3WEc0Z0lDQWdJQ0FnSUhSb2FYTXVjM1JoY25SbFpDQTlJR04xY25KbGJuUlVhVzFsS0NrN1hHNGdJQ0FnZlZ4dVhHNGdJQ0FnYzJWbGF5aHdjbTluY21WemN5a2dlMXh1SUNBZ0lDQWdJQ0IwYUdsekxtOXVZMlVvS1R0Y2JpQWdJQ0FnSUNBZ2RHaHBjeTVsYkdGd2MyVmtJRDBnZEdocGN5NWtkWEpoZEdsdmJpQXFJSEJ5YjJkeVpYTnpPMXh1SUNBZ0lIMWNiaUFnSUNCY2JpQWdJQ0JuWlhSRVpXWmhkV3gwVUhKdmNITW9LU0I3WEc0Z0lDQWdJQ0FnSUhKbGRIVnliaUI3WEc0Z0lDQWdJQ0FnSUNBZ0lDQXVMaTV6ZFhCbGNpNW5aWFJFWldaaGRXeDBVSEp2Y0hNb0tTeGNiaUFnSUNBZ0lDQWdJQ0FnSUdSbGJHRjVPaUF3TEZ4dUlDQWdJQ0FnSUNBZ0lDQWdaR2xzWVhSbE9pQXhMRnh1SUNBZ0lDQWdJQ0FnSUNBZ1pIVnlZWFJwYjI0NklETXdNQ3hjYmlBZ0lDQWdJQ0FnSUNBZ0lHeHZiM0E2SUdaaGJITmxMRnh1SUNBZ0lDQWdJQ0FnSUNBZ2VXOTViem9nWm1Gc2MyVXNYRzRnSUNBZ0lDQWdJQ0FnSUNCbWJHbHdPaUJtWVd4elpTeGNiaUFnSUNBZ0lDQWdJQ0FnSUhCc1lYbEVhWEpsWTNScGIyNDZJREVzWEc0Z0lDQWdJQ0FnSUNBZ0lDQmxibVJsWkRvZ1ptRnNjMlVzWEc0Z0lDQWdJQ0FnSUNBZ0lDQmxiR0Z3YzJWa09pQXdYRzRnSUNBZ0lDQWdJSDA3WEc0Z0lDQWdmVnh1WEc0Z0lDQWdaMlYwUkdWbVlYVnNkRlpoYkhWbEtDa2dlMXh1SUNBZ0lDQWdJQ0J5WlhSMWNtNGdlMXh1SUNBZ0lDQWdJQ0FnSUNBZ0xpNHVjM1Z3WlhJdVoyVjBSR1ZtWVhWc2RGWmhiSFZsS0Nrc1hHNGdJQ0FnSUNBZ0lDQWdJQ0JrWld4aGVUb2dNQ3hjYmlBZ0lDQWdJQ0FnSUNBZ0lHUjFjbUYwYVc5dU9pQXpNREFzWEc0Z0lDQWdJQ0FnSUNBZ0lDQmxZWE5sT2lBblpXRnpaVTkxZENjc1hHNGdJQ0FnSUNBZ0lDQWdJQ0JsYkdGd2MyVmtPaUF3TEZ4dUlDQWdJQ0FnSUNBZ0lDQWdjM1JoWjJkbGNqb2dNQ3hjYmlBZ0lDQWdJQ0FnSUNBZ0lITjBaWEJ6T2lBd0xGeHVJQ0FnSUNBZ0lDQWdJQ0FnWm5KdmJUb2dNQ3hjYmlBZ0lDQWdJQ0FnSUNBZ0lIUnZPaUF3TEZ4dUlDQWdJQ0FnSUNBZ0lDQWdjbTkxYm1RNklHWmhiSE5sWEc0Z0lDQWdJQ0FnSUgwN1hHNGdJQ0FnZlZ4dVhHNGdJQ0FnWjJWMFJHVm1ZWFZzZEZaaGJIVmxVSEp2Y0NncElIdGNiaUFnSUNBZ0lDQWdjbVYwZFhKdUlDZDBieWM3WEc0Z0lDQWdmVnh1ZlZ4dUlsMTlcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2FjdGlvbnMvVHdlZW4uanNcbiAqKiBtb2R1bGUgaWQgPSA0XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbnZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfQWN0aW9uMiA9IHJlcXVpcmUoJy4vQWN0aW9uJyk7XG5cbnZhciBfQWN0aW9uMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX0FjdGlvbjIpO1xuXG52YXIgX2NhbGMgPSByZXF1aXJlKCcuLi9pbmMvY2FsYycpO1xuXG52YXIgX3V0aWxzID0gcmVxdWlyZSgnLi4vaW5jL3V0aWxzJyk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKCFzZWxmKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gY2FsbCAmJiAodHlwZW9mIGNhbGwgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikgPyBjYWxsIDogc2VsZjsgfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb24sIG5vdCBcIiArIHR5cGVvZiBzdXBlckNsYXNzKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCBlbnVtZXJhYmxlOiBmYWxzZSwgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LnNldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKSA6IHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7IH1cblxudmFyIFBoeXNpY3MgPSAoZnVuY3Rpb24gKF9BY3Rpb24pIHtcbiAgICBfaW5oZXJpdHMoUGh5c2ljcywgX0FjdGlvbik7XG5cbiAgICBmdW5jdGlvbiBQaHlzaWNzKCkge1xuICAgICAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgUGh5c2ljcyk7XG5cbiAgICAgICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgICAgICAgIGFyZ3NbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgX3RoaXMgPSBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCBfQWN0aW9uLmNhbGwuYXBwbHkoX0FjdGlvbiwgW3RoaXNdLmNvbmNhdChhcmdzKSkpO1xuXG4gICAgICAgIF90aGlzLmluYWN0aXZlRnJhbWVzID0gMDtcbiAgICAgICAgcmV0dXJuIF90aGlzO1xuICAgIH1cblxuICAgIFBoeXNpY3MucHJvdG90eXBlLm9uVXBkYXRlID0gZnVuY3Rpb24gb25VcGRhdGUocGh5c2ljcywgZnJhbWVTdGFtcCwgZWxhcHNlZCkge1xuICAgICAgICB2YXIgX3RoaXMyID0gdGhpcztcblxuICAgICAgICB0aGlzLmhhc0NoYW5nZWQgPSBmYWxzZTtcblxuICAgICAgICAoMCwgX3V0aWxzLmVhY2gpKHRoaXMudmFsdWVzLCBmdW5jdGlvbiAodmFsdWUsIGtleSkge1xuICAgICAgICAgICAgdmFyIHByZXZpb3VzVmFsdWUgPSB2YWx1ZS5jdXJyZW50O1xuXG4gICAgICAgICAgICAvLyBBcHBseSBhY2NlbGVyYXRpb25cbiAgICAgICAgICAgIHZhbHVlLnZlbG9jaXR5ICs9ICgwLCBfY2FsYy5zcGVlZFBlckZyYW1lKSh2YWx1ZS5mb3JjZSwgZWxhcHNlZCk7XG5cbiAgICAgICAgICAgIC8vIEFwcGx5IGZyaWN0aW9uXG4gICAgICAgICAgICB2YWx1ZS52ZWxvY2l0eSAqPSBNYXRoLnBvdygxIC0gdmFsdWUuZnJpY3Rpb24sIGVsYXBzZWQgLyAxMCk7XG5cbiAgICAgICAgICAgIC8vIEFwcGx5IHNwcmluZ1xuICAgICAgICAgICAgaWYgKHZhbHVlLnNwcmluZyAmJiAoMCwgX3V0aWxzLmlzTnVtKSh2YWx1ZS50bykpIHtcbiAgICAgICAgICAgICAgICB2YXIgZGlzdGFuY2VUb1RhcmdldCA9IHZhbHVlLnRvIC0gdmFsdWUuY3VycmVudDtcbiAgICAgICAgICAgICAgICB2YWx1ZS52ZWxvY2l0eSArPSBkaXN0YW5jZVRvVGFyZ2V0ICogKDAsIF9jYWxjLnNwZWVkUGVyRnJhbWUpKHZhbHVlLnNwcmluZywgZWxhcHNlZCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIEFwcGx5IGxhdGVzdCB2ZWxvY2l0eVxuICAgICAgICAgICAgdmFsdWUuY3VycmVudCArPSAoMCwgX2NhbGMuc3BlZWRQZXJGcmFtZSkodmFsdWUudmVsb2NpdHksIGVsYXBzZWQpO1xuXG4gICAgICAgICAgICAvLyBDaGVjayBpZiB2YWx1ZSBoYXMgY2hhbmdlZFxuICAgICAgICAgICAgaWYgKHZhbHVlLmN1cnJlbnQgIT09IHByZXZpb3VzVmFsdWUgfHwgTWF0aC5hYnModmFsdWUudmVsb2NpdHkpID49IHZhbHVlLnN0b3BTcGVlZCkge1xuICAgICAgICAgICAgICAgIF90aGlzMi5oYXNDaGFuZ2VkID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfTtcblxuICAgIFBoeXNpY3MucHJvdG90eXBlLm9uRnJhbWVFbmQgPSBmdW5jdGlvbiBvbkZyYW1lRW5kKCkge1xuICAgICAgICBpZiAodGhpcy5hdXRvRW5kKSB7XG4gICAgICAgICAgICB0aGlzLmluYWN0aXZlRnJhbWVzID0gdGhpcy5oYXNDaGFuZ2VkID8gMSA6IHRoaXMuaW5hY3RpdmVGcmFtZXMgKyAxO1xuXG4gICAgICAgICAgICBpZiAodGhpcy5pbmFjdGl2ZUZyYW1lcyA+PSB0aGlzLm1heEluYWN0aXZlRnJhbWVzKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zdG9wKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgLypcbiAgICAgICAgIyBHZXQgZGVmYXVsdCBTaW11bGF0ZSBwcm9wc1xuICAgICAgICAgQHJldHVybiBbb2JqZWN0XVxuICAgICovXG5cbiAgICBQaHlzaWNzLnByb3RvdHlwZS5nZXREZWZhdWx0UHJvcHMgPSBmdW5jdGlvbiBnZXREZWZhdWx0UHJvcHMoKSB7XG4gICAgICAgIHJldHVybiBfZXh0ZW5kcyh7fSwgX0FjdGlvbi5wcm90b3R5cGUuZ2V0RGVmYXVsdFByb3BzLmNhbGwodGhpcyksIHtcbiAgICAgICAgICAgIGF1dG9FbmQ6IHRydWUsXG4gICAgICAgICAgICBtYXhJbmFjdGl2ZUZyYW1lczogM1xuICAgICAgICB9KTtcbiAgICB9O1xuXG4gICAgLypcbiAgICAgICAgIyBHZXQgZGVmYXVsdCBTaW11bGF0ZSB2YWx1ZSBwcm9wc1xuICAgICAgICAgQHJldHVybiBbb2JqZWN0XVxuICAgICovXG5cbiAgICBQaHlzaWNzLnByb3RvdHlwZS5nZXREZWZhdWx0VmFsdWUgPSBmdW5jdGlvbiBnZXREZWZhdWx0VmFsdWUoKSB7XG4gICAgICAgIHJldHVybiBfZXh0ZW5kcyh7fSwgX0FjdGlvbi5wcm90b3R5cGUuZ2V0RGVmYXVsdFZhbHVlLmNhbGwodGhpcyksIHtcbiAgICAgICAgICAgIGZvcmNlOiAwLCAvLyBbbnVtYmVyXTogQWNjZWxlcmF0aW9uIHRvIGFwcGx5IHRvIHZhbHVlLCBpbiB1bml0cyBwZXIgc2Vjb25kXG4gICAgICAgICAgICBib3VuY2U6IDAsIC8vIFtudW1iZXJdOiBGYWN0b3IgdG8gbXVsdGlwbHkgdmVsb2NpdHkgYnkgb24gYm91bmNlXG4gICAgICAgICAgICBzcHJpbmc6IDAsIC8vIFtudW1iZXJdOiBTcHJpbmcgc3RyZW5ndGggZHVyaW5nICdzdHJpbmcnXG4gICAgICAgICAgICBzdG9wU3BlZWQ6IDAuMDAwMSwgLy8gW251bWJlcl06IFN0b3Agc2ltdWxhdGlvbiB1bmRlciB0aGlzIHNwZWVkXG4gICAgICAgICAgICBmcmljdGlvbjogMCAvLyBbbnVtYmVyXTogRnJpY3Rpb24gdG8gYXBwbHkgcGVyIGZyYW1lLCAwLTFcbiAgICAgICAgfSk7XG4gICAgfTtcblxuICAgIC8qXG4gICAgICAgICMgR2V0IGRlZmF1bHQgU2ltdWxhdGUgdmFsdWUgcHJvcGVydHkgbmFtZVxuICAgICAgICAjIyBTZXQgdmFsdWVzIHRvIHRoaXMgd2hlbiBhIGB2YWx1ZWAgaXMgbm90IHByb3ZpZGVkIGFzIGFuIG9iamVjdFxuICAgICAgICAgQHJldHVybiBbc3RyaW5nXVxuICAgICovXG5cbiAgICBQaHlzaWNzLnByb3RvdHlwZS5nZXREZWZhdWx0VmFsdWVQcm9wID0gZnVuY3Rpb24gZ2V0RGVmYXVsdFZhbHVlUHJvcCgpIHtcbiAgICAgICAgcmV0dXJuICd2ZWxvY2l0eSc7XG4gICAgfTtcblxuICAgIHJldHVybiBQaHlzaWNzO1xufSkoX0FjdGlvbjMuZGVmYXVsdCk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IFBoeXNpY3M7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSWxCb2VYTnBZM011YW5NaVhTd2libUZ0WlhNaU9sdGRMQ0p0WVhCd2FXNW5jeUk2SWpzN096czdPenM3T3pzN096czdPenM3T3pzN096dEpRVWx4UWl4UFFVRlBPMk5CUVZBc1QwRkJUenM3UVVGRmVFSXNZVUZHYVVJc1QwRkJUeXhIUVVWSU96aENRVVpLTEU5QlFVODdPekJEUVVWVUxFbEJRVWs3UVVGQlNpeG5Ra0ZCU1RzN08zRkVRVU5tTERCRFFVRlRMRWxCUVVrc1JVRkJRenM3UVVGRFpDeGpRVUZMTEdOQlFXTXNSMEZCUnl4RFFVRkRMRU5CUVVNN08wdEJRek5DT3p0QlFVeG5RaXhYUVVGUExGZEJUM2hDTEZGQlFWRXNjVUpCUVVNc1QwRkJUeXhGUVVGRkxGVkJRVlVzUlVGQlJTeFBRVUZQTEVWQlFVVTdPenRCUVVOdVF5eFpRVUZKTEVOQlFVTXNWVUZCVlN4SFFVRkhMRXRCUVVzc1EwRkJRenM3UVVGRmVFSXNiVUpCV2tNc1NVRkJTU3hGUVZsQkxFbEJRVWtzUTBGQlF5eE5RVUZOTEVWQlFVVXNWVUZCUXl4TFFVRkxMRVZCUVVVc1IwRkJSeXhGUVVGTE8wRkJRemxDTEdkQ1FVRk5MR0ZCUVdFc1IwRkJSeXhMUVVGTExFTkJRVU1zVDBGQlR6czdPMEZCUVVNc1FVRkhjRU1zYVVKQlFVc3NRMEZCUXl4UlFVRlJMRWxCUVVrc1ZVRnFRbkpDTEdGQlFXRXNSVUZwUW5OQ0xFdEJRVXNzUTBGQlF5eExRVUZMTEVWQlFVVXNUMEZCVHl4RFFVRkRPenM3UVVGQlF5eEJRVWQwUkN4cFFrRkJTeXhEUVVGRExGRkJRVkVzWVVGQlN5eERRVUZETEVkQlFVY3NTMEZCU3l4RFFVRkRMRkZCUVZFc1JVRkJUU3hQUVVGUExFZEJRVWNzUlVGQlJTeERRVUZET3pzN1FVRkJReXhCUVVkNlJDeG5Ra0ZCU1N4TFFVRkxMRU5CUVVNc1RVRkJUU3hKUVVGSkxGZEJkRUpxUWl4TFFVRkxMRVZCYzBKclFpeExRVUZMTEVOQlFVTXNSVUZCUlN4RFFVRkRMRVZCUVVVN1FVRkRha01zYjBKQlFVMHNaMEpCUVdkQ0xFZEJRVWNzUzBGQlN5eERRVUZETEVWQlFVVXNSMEZCUnl4TFFVRkxMRU5CUVVNc1QwRkJUeXhEUVVGRE8wRkJRMnhFTEhGQ1FVRkxMRU5CUVVNc1VVRkJVU3hKUVVGSkxHZENRVUZuUWl4SFFVRkhMRlZCZWtJMVF5eGhRVUZoTEVWQmVVSTJReXhMUVVGTExFTkJRVU1zVFVGQlRTeEZRVUZGTEU5QlFVOHNRMEZCUXl4RFFVRkRPMkZCUXpkRk96czdRVUZCUVN4QlFVZEVMR2xDUVVGTExFTkJRVU1zVDBGQlR5eEpRVUZKTEZWQk4wSndRaXhoUVVGaExFVkJOa0p4UWl4TFFVRkxMRU5CUVVNc1VVRkJVU3hGUVVGRkxFOUJRVThzUTBGQlF6czdPMEZCUVVNc1FVRkhlRVFzWjBKQlFVa3NTMEZCU3l4RFFVRkRMRTlCUVU4c1MwRkJTeXhoUVVGaExFbEJRVWtzU1VGQlNTeERRVUZETEVkQlFVY3NRMEZCUXl4TFFVRkxMRU5CUVVNc1VVRkJVU3hEUVVGRExFbEJRVWtzUzBGQlN5eERRVUZETEZOQlFWTXNSVUZCUlR0QlFVTm9SaXgxUWtGQlN5eFZRVUZWTEVkQlFVY3NTVUZCU1N4RFFVRkRPMkZCUXpGQ08xTkJRMG9zUTBGQlF5eERRVUZETzB0QlEwNDdPMEZCYWtOblFpeFhRVUZQTEZkQmJVTjRRaXhWUVVGVkxIbENRVUZITzBGQlExUXNXVUZCU1N4SlFVRkpMRU5CUVVNc1QwRkJUeXhGUVVGRk8wRkJRMlFzWjBKQlFVa3NRMEZCUXl4alFVRmpMRWRCUVVjc1NVRkJTU3hEUVVGRExGVkJRVlVzUjBGQlJ5eERRVUZETEVkQlFVY3NTVUZCU1N4RFFVRkRMR05CUVdNc1IwRkJSeXhEUVVGRExFTkJRVU03TzBGQlJYQkZMR2RDUVVGSkxFbEJRVWtzUTBGQlF5eGpRVUZqTEVsQlFVa3NTVUZCU1N4RFFVRkRMR2xDUVVGcFFpeEZRVUZGTzBGQlF5OURMRzlDUVVGSkxFTkJRVU1zU1VGQlNTeEZRVUZGTEVOQlFVTTdZVUZEWmp0VFFVTktPMHRCUTBvN096czdPenM3UVVFelEyZENMRmRCUVU4c1YwRnJSSGhDTEdWQlFXVXNPRUpCUVVjN1FVRkRaQ3cwUWtGRFR5eHJRa0ZCVFN4bFFVRmxMRXRCUVVFc1RVRkJSVHRCUVVNeFFpeHRRa0ZCVHl4RlFVRkZMRWxCUVVrN1FVRkRZaXcyUWtGQmFVSXNSVUZCUlN4RFFVRkRPMWRCUTNSQ08wdEJRMHc3T3pzN096czdRVUY0UkdkQ0xGZEJRVThzVjBFclJIaENMR1ZCUVdVc09FSkJRVWM3UVVGRFpDdzBRa0ZEVHl4clFrRkJUU3hsUVVGbExFdEJRVUVzVFVGQlJUdEJRVU14UWl4cFFrRkJTeXhGUVVGRkxFTkJRVU03UVVGRFVpeHJRa0ZCVFN4RlFVRkZMRU5CUVVNN1FVRkRWQ3hyUWtGQlRTeEZRVUZGTEVOQlFVTTdRVUZEVkN4eFFrRkJVeXhGUVVGRkxFMUJRVTA3UVVGRGFrSXNiMEpCUVZFc1JVRkJSU3hEUVVGRE8wRkJRVUVzVjBGRFlqdExRVU5NT3pzN096czdPenRCUVhoRlowSXNWMEZCVHl4WFFXZEdlRUlzYlVKQlFXMUNMR3REUVVGSE8wRkJRMnhDTEdWQlFVOHNWVUZCVlN4RFFVRkRPMHRCUTNKQ096dFhRV3hHWjBJc1QwRkJUenM3TzJ0Q1FVRlFMRTlCUVU4aUxDSm1hV3hsSWpvaVVHaDVjMmxqY3k1cWN5SXNJbk52ZFhKalpYTkRiMjUwWlc1MElqcGJJbWx0Y0c5eWRDQkJZM1JwYjI0Z1puSnZiU0FuTGk5QlkzUnBiMjRuTzF4dWFXMXdiM0owSUhzZ2MzQmxaV1JRWlhKR2NtRnRaU3dnYzNCbFpXUlFaWEpUWldOdmJtUWdmU0JtY205dElDY3VMaTlwYm1NdlkyRnNZeWM3WEc1cGJYQnZjblFnZXlCbFlXTm9MQ0JwYzA1MWJTQjlJR1p5YjIwZ0p5NHVMMmx1WXk5MWRHbHNjeWM3WEc1Y2JtVjRjRzl5ZENCa1pXWmhkV3gwSUdOc1lYTnpJRkJvZVhOcFkzTWdaWGgwWlc1a2N5QkJZM1JwYjI0Z2UxeHVYRzRnSUNBZ1kyOXVjM1J5ZFdOMGIzSW9MaTR1WVhKbmN5a2dlMXh1SUNBZ0lDQWdJQ0J6ZFhCbGNpZ3VMaTVoY21kektUdGNiaUFnSUNBZ0lDQWdkR2hwY3k1cGJtRmpkR2wyWlVaeVlXMWxjeUE5SURBN1hHNGdJQ0FnZlZ4dVhHNGdJQ0FnYjI1VmNHUmhkR1VvY0doNWMybGpjeXdnWm5KaGJXVlRkR0Z0Y0N3Z1pXeGhjSE5sWkNrZ2UxeHVJQ0FnSUNBZ0lDQjBhR2x6TG1oaGMwTm9ZVzVuWldRZ1BTQm1ZV3h6WlR0Y2JseHVJQ0FnSUNBZ0lDQmxZV05vS0hSb2FYTXVkbUZzZFdWekxDQW9kbUZzZFdVc0lHdGxlU2tnUFQ0Z2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnWTI5dWMzUWdjSEpsZG1sdmRYTldZV3gxWlNBOUlIWmhiSFZsTG1OMWNuSmxiblE3WEc1Y2JpQWdJQ0FnSUNBZ0lDQWdJQzh2SUVGd2NHeDVJR0ZqWTJWc1pYSmhkR2x2Ymx4dUlDQWdJQ0FnSUNBZ0lDQWdkbUZzZFdVdWRtVnNiMk5wZEhrZ0t6MGdjM0JsWldSUVpYSkdjbUZ0WlNoMllXeDFaUzVtYjNKalpTd2daV3hoY0hObFpDazdYRzVjYmlBZ0lDQWdJQ0FnSUNBZ0lDOHZJRUZ3Y0d4NUlHWnlhV04wYVc5dVhHNGdJQ0FnSUNBZ0lDQWdJQ0IyWVd4MVpTNTJaV3h2WTJsMGVTQXFQU0FvTVNBdElIWmhiSFZsTG1aeWFXTjBhVzl1S1NBcUtpQW9aV3hoY0hObFpDQXZJREV3S1R0Y2JseHVJQ0FnSUNBZ0lDQWdJQ0FnTHk4Z1FYQndiSGtnYzNCeWFXNW5YRzRnSUNBZ0lDQWdJQ0FnSUNCcFppQW9kbUZzZFdVdWMzQnlhVzVuSUNZbUlHbHpUblZ0S0haaGJIVmxMblJ2S1NrZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lHTnZibk4wSUdScGMzUmhibU5sVkc5VVlYSm5aWFFnUFNCMllXeDFaUzUwYnlBdElIWmhiSFZsTG1OMWNuSmxiblE3WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnZG1Gc2RXVXVkbVZzYjJOcGRIa2dLejBnWkdsemRHRnVZMlZVYjFSaGNtZGxkQ0FxSUhOd1pXVmtVR1Z5Um5KaGJXVW9kbUZzZFdVdWMzQnlhVzVuTENCbGJHRndjMlZrS1R0Y2JpQWdJQ0FnSUNBZ0lDQWdJSDFjYmx4dUlDQWdJQ0FnSUNBZ0lDQWdMeThnUVhCd2JIa2diR0YwWlhOMElIWmxiRzlqYVhSNVhHNGdJQ0FnSUNBZ0lDQWdJQ0IyWVd4MVpTNWpkWEp5Wlc1MElDczlJSE53WldWa1VHVnlSbkpoYldVb2RtRnNkV1V1ZG1Wc2IyTnBkSGtzSUdWc1lYQnpaV1FwTzF4dUlDQWdJQ0FnSUNBZ0lDQWdYRzRnSUNBZ0lDQWdJQ0FnSUNBdkx5QkRhR1ZqYXlCcFppQjJZV3gxWlNCb1lYTWdZMmhoYm1kbFpGeHVJQ0FnSUNBZ0lDQWdJQ0FnYVdZZ0tIWmhiSFZsTG1OMWNuSmxiblFnSVQwOUlIQnlaWFpwYjNWelZtRnNkV1VnZkh3Z1RXRjBhQzVoWW5Nb2RtRnNkV1V1ZG1Wc2IyTnBkSGtwSUQ0OUlIWmhiSFZsTG5OMGIzQlRjR1ZsWkNrZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lIUm9hWE11YUdGelEyaGhibWRsWkNBOUlIUnlkV1U3WEc0Z0lDQWdJQ0FnSUNBZ0lDQjlYRzRnSUNBZ0lDQWdJSDBwTzF4dUlDQWdJSDFjYmx4dUlDQWdJRzl1Um5KaGJXVkZibVFvS1NCN1hHNGdJQ0FnSUNBZ0lHbG1JQ2gwYUdsekxtRjFkRzlGYm1RcElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUhSb2FYTXVhVzVoWTNScGRtVkdjbUZ0WlhNZ1BTQjBhR2x6TG1oaGMwTm9ZVzVuWldRZ1B5QXhJRG9nZEdocGN5NXBibUZqZEdsMlpVWnlZVzFsY3lBcklERTdYRzVjYmlBZ0lDQWdJQ0FnSUNBZ0lHbG1JQ2gwYUdsekxtbHVZV04wYVhabFJuSmhiV1Z6SUQ0OUlIUm9hWE11YldGNFNXNWhZM1JwZG1WR2NtRnRaWE1wSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCMGFHbHpMbk4wYjNBb0tUdGNiaUFnSUNBZ0lDQWdJQ0FnSUgxY2JpQWdJQ0FnSUNBZ2ZWeHVJQ0FnSUgxY2JseHVJQ0FnSUM4cVhHNGdJQ0FnSUNBZ0lDTWdSMlYwSUdSbFptRjFiSFFnVTJsdGRXeGhkR1VnY0hKdmNITmNibHh1SUNBZ0lDQWdJQ0JBY21WMGRYSnVJRnR2WW1wbFkzUmRYRzRnSUNBZ0tpOWNiaUFnSUNCblpYUkVaV1poZFd4MFVISnZjSE1vS1NCN1hHNGdJQ0FnSUNBZ0lISmxkSFZ5YmlCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0F1TGk1emRYQmxjaTVuWlhSRVpXWmhkV3gwVUhKdmNITW9LU3hjYmlBZ0lDQWdJQ0FnSUNBZ0lHRjFkRzlGYm1RNklIUnlkV1VzWEc0Z0lDQWdJQ0FnSUNBZ0lDQnRZWGhKYm1GamRHbDJaVVp5WVcxbGN6b2dNMXh1SUNBZ0lDQWdJQ0I5TzF4dUlDQWdJSDFjYmx4dUlDQWdJQzhxWEc0Z0lDQWdJQ0FnSUNNZ1IyVjBJR1JsWm1GMWJIUWdVMmx0ZFd4aGRHVWdkbUZzZFdVZ2NISnZjSE5jYmx4dUlDQWdJQ0FnSUNCQWNtVjBkWEp1SUZ0dlltcGxZM1JkWEc0Z0lDQWdLaTljYmlBZ0lDQm5aWFJFWldaaGRXeDBWbUZzZFdVb0tTQjdYRzRnSUNBZ0lDQWdJSEpsZEhWeWJpQjdYRzRnSUNBZ0lDQWdJQ0FnSUNBdUxpNXpkWEJsY2k1blpYUkVaV1poZFd4MFZtRnNkV1VvS1N4Y2JpQWdJQ0FnSUNBZ0lDQWdJR1p2Y21ObE9pQXdMQ0F2THlCYmJuVnRZbVZ5WFRvZ1FXTmpaV3hsY21GMGFXOXVJSFJ2SUdGd2NHeDVJSFJ2SUhaaGJIVmxMQ0JwYmlCMWJtbDBjeUJ3WlhJZ2MyVmpiMjVrWEc0Z0lDQWdJQ0FnSUNBZ0lDQmliM1Z1WTJVNklEQXNJQzh2SUZ0dWRXMWlaWEpkT2lCR1lXTjBiM0lnZEc4Z2JYVnNkR2x3YkhrZ2RtVnNiMk5wZEhrZ1lua2diMjRnWW05MWJtTmxYRzRnSUNBZ0lDQWdJQ0FnSUNCemNISnBibWM2SURBc0lDOHZJRnR1ZFcxaVpYSmRPaUJUY0hKcGJtY2djM1J5Wlc1bmRHZ2daSFZ5YVc1bklDZHpkSEpwYm1jblhHNGdJQ0FnSUNBZ0lDQWdJQ0J6ZEc5d1UzQmxaV1E2SURBdU1EQXdNU3dnTHk4Z1cyNTFiV0psY2wwNklGTjBiM0FnYzJsdGRXeGhkR2x2YmlCMWJtUmxjaUIwYUdseklITndaV1ZrWEc0Z0lDQWdJQ0FnSUNBZ0lDQm1jbWxqZEdsdmJqb2dNQ0F2THlCYmJuVnRZbVZ5WFRvZ1JuSnBZM1JwYjI0Z2RHOGdZWEJ3YkhrZ2NHVnlJR1p5WVcxbExDQXdMVEZjYmlBZ0lDQWdJQ0FnZlR0Y2JpQWdJQ0I5WEc1Y2JpQWdJQ0F2S2x4dUlDQWdJQ0FnSUNBaklFZGxkQ0JrWldaaGRXeDBJRk5wYlhWc1lYUmxJSFpoYkhWbElIQnliM0JsY25SNUlHNWhiV1ZjYmlBZ0lDQWdJQ0FnSXlNZ1UyVjBJSFpoYkhWbGN5QjBieUIwYUdseklIZG9aVzRnWVNCZ2RtRnNkV1ZnSUdseklHNXZkQ0J3Y205MmFXUmxaQ0JoY3lCaGJpQnZZbXBsWTNSY2JseHVJQ0FnSUNBZ0lDQkFjbVYwZFhKdUlGdHpkSEpwYm1kZFhHNGdJQ0FnS2k5Y2JpQWdJQ0JuWlhSRVpXWmhkV3gwVm1Gc2RXVlFjbTl3S0NrZ2UxeHVJQ0FnSUNBZ0lDQnlaWFIxY200Z0ozWmxiRzlqYVhSNUp6dGNiaUFnSUNCOVhHNTlYRzRpWFgwPVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvYWN0aW9ucy9QaHlzaWNzLmpzXG4gKiogbW9kdWxlIGlkID0gNVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX0FjdGlvbjIgPSByZXF1aXJlKCcuL0FjdGlvbicpO1xuXG52YXIgX0FjdGlvbjMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9BY3Rpb24yKTtcblxudmFyIF9Nb3VzZSA9IHJlcXVpcmUoJy4uL2lucHV0L01vdXNlJyk7XG5cbnZhciBfTW91c2UyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfTW91c2UpO1xuXG52YXIgX1RvdWNoID0gcmVxdWlyZSgnLi4vaW5wdXQvVG91Y2gnKTtcblxudmFyIF9Ub3VjaDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9Ub3VjaCk7XG5cbnZhciBfY2FsYyA9IHJlcXVpcmUoJy4uL2luYy9jYWxjJyk7XG5cbnZhciBfdXRpbHMgPSByZXF1aXJlKCcuLi9pbmMvdXRpbHMnKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoIXNlbGYpIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBjYWxsICYmICh0eXBlb2YgY2FsbCA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSA/IGNhbGwgOiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90IFwiICsgdHlwZW9mIHN1cGVyQ2xhc3MpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIGVudW1lcmFibGU6IGZhbHNlLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIDogc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzczsgfVxuXG52YXIgY3JlYXRlUG9pbnRlciA9IGZ1bmN0aW9uIChlKSB7XG4gICAgcmV0dXJuIGUudG91Y2hlcyA/IG5ldyBfVG91Y2gyLmRlZmF1bHQoZSkgOiBuZXcgX01vdXNlMi5kZWZhdWx0KGUpO1xufTtcbnZhciBnZXRBY3R1YWxFdmVudCA9IGZ1bmN0aW9uIChlKSB7XG4gICAgcmV0dXJuIGUub3JpZ2luYWxFdmVudCB8fCBlO1xufTtcblxudmFyIFRyYWNrID0gKGZ1bmN0aW9uIChfQWN0aW9uKSB7XG4gICAgX2luaGVyaXRzKFRyYWNrLCBfQWN0aW9uKTtcblxuICAgIGZ1bmN0aW9uIFRyYWNrKHByb3BzLCBpbnB1dCkge1xuICAgICAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgVHJhY2spO1xuXG4gICAgICAgIHZhciBfdGhpcyA9IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIF9BY3Rpb24uY2FsbCh0aGlzLCBwcm9wcykpO1xuXG4gICAgICAgIF90aGlzLmlucHV0ID0gaW5wdXQuc3RhdGUgPyBpbnB1dCA6IGNyZWF0ZVBvaW50ZXIoZ2V0QWN0dWFsRXZlbnQoaW5wdXQpKTtcbiAgICAgICAgcmV0dXJuIF90aGlzO1xuICAgIH1cblxuICAgIFRyYWNrLnByb3RvdHlwZS5zdGFydCA9IGZ1bmN0aW9uIHN0YXJ0KCkge1xuICAgICAgICBfQWN0aW9uLnByb3RvdHlwZS5zdGFydC5jYWxsKHRoaXMpO1xuICAgICAgICB0aGlzLmlucHV0T3JpZ2luID0ge307XG4gICAgfTtcblxuICAgIFRyYWNrLnByb3RvdHlwZS5vblVwZGF0ZSA9IGZ1bmN0aW9uIG9uVXBkYXRlKHRyYWNrLCBmcmFtZUR1cmF0aW9uLCBlbGFwc2VkKSB7XG4gICAgICAgIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gICAgICAgIHRoaXMuaW5wdXRPZmZzZXQgPSAoMCwgX2NhbGMub2Zmc2V0KSh0aGlzLmlucHV0T3JpZ2luLCB0aGlzLmlucHV0LnN0YXRlKTtcblxuICAgICAgICAoMCwgX3V0aWxzLmVhY2gpKHRoaXMudmFsdWVzLCBmdW5jdGlvbiAodmFsdWUsIGtleSkge1xuICAgICAgICAgICAgaWYgKF90aGlzMi5pbnB1dE9mZnNldC5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgICAgICAgaWYgKHZhbHVlLmRpcmVjdCkge1xuICAgICAgICAgICAgICAgICAgICB2YWx1ZS5jdXJyZW50ID0gX3RoaXMyLmlucHV0LnN0YXRlW2tleV07XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdmFsdWUuY3VycmVudCA9IHZhbHVlLm9yaWdpbiArIF90aGlzMi5pbnB1dE9mZnNldFtrZXldO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfTtcblxuICAgIFRyYWNrLnByb3RvdHlwZS5nZXREZWZhdWx0VmFsdWUgPSBmdW5jdGlvbiBnZXREZWZhdWx0VmFsdWUoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBhbXA6IDEsXG4gICAgICAgICAgICBlc2NhcGVBbXA6IDAsXG4gICAgICAgICAgICBkaXJlY3Q6IGZhbHNlLFxuICAgICAgICAgICAgc21vb3RoOiAwXG4gICAgICAgIH07XG4gICAgfTtcblxuICAgIHJldHVybiBUcmFjaztcbn0pKF9BY3Rpb24zLmRlZmF1bHQpO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBUcmFjaztcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbFJ5WVdOckxtcHpJbDBzSW01aGJXVnpJanBiWFN3aWJXRndjR2x1WjNNaU9pSTdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdRVUZOUVN4SlFVRk5MR0ZCUVdFc1IwRkJSeXhWUVVGRExFTkJRVU03VjBGQlN5eERRVUZETEVOQlFVTXNUMEZCVHl4SFFVRkhMRzlDUVVGVkxFTkJRVU1zUTBGQlF5eEhRVUZITEc5Q1FVRlZMRU5CUVVNc1EwRkJRenREUVVGQkxFTkJRVU03UVVGRGNrVXNTVUZCVFN4alFVRmpMRWRCUVVjc1ZVRkJReXhEUVVGRE8xZEJRVXNzUTBGQlF5eERRVUZETEdGQlFXRXNTVUZCU1N4RFFVRkRPME5CUVVFc1EwRkJRenM3U1VGRk9VSXNTMEZCU3p0alFVRk1MRXRCUVVzN08wRkJRM1JDTEdGQlJHbENMRXRCUVVzc1EwRkRWaXhMUVVGTExFVkJRVVVzUzBGQlN5eEZRVUZGT3poQ1FVUlVMRXRCUVVzN08zRkVRVVZzUWl4dFFrRkJUU3hMUVVGTExFTkJRVU03TzBGQlExb3NZMEZCU3l4TFFVRkxMRWRCUVVjc1MwRkJTeXhEUVVGRExFdEJRVXNzUjBGQlJ5eExRVUZMTEVkQlFVY3NZVUZCWVN4RFFVRkRMR05CUVdNc1EwRkJReXhMUVVGTExFTkJRVU1zUTBGQlF5eERRVUZET3p0TFFVTXpSVHM3UVVGS1owSXNVMEZCU3l4WFFVMTBRaXhMUVVGTExHOUNRVUZITzBGQlEwb3NNRUpCUVUwc1MwRkJTeXhMUVVGQkxFMUJRVVVzUTBGQlF6dEJRVU5rTEZsQlFVa3NRMEZCUXl4WFFVRlhMRWRCUVVjc1JVRkJSU3hEUVVGRE8wdEJRM3BDT3p0QlFWUm5RaXhUUVVGTExGZEJWM1JDTEZGQlFWRXNjVUpCUVVNc1MwRkJTeXhGUVVGRkxHRkJRV0VzUlVGQlJTeFBRVUZQTEVWQlFVVTdPenRCUVVOd1F5eFpRVUZKTEVOQlFVTXNWMEZCVnl4SFFVRkhMRlZCYkVKc1FpeE5RVUZOTEVWQmEwSnRRaXhKUVVGSkxFTkJRVU1zVjBGQlZ5eEZRVUZGTEVsQlFVa3NRMEZCUXl4TFFVRkxMRU5CUVVNc1MwRkJTeXhEUVVGRExFTkJRVU03TzBGQlJUbEVMRzFDUVc1Q1F5eEpRVUZKTEVWQmJVSkJMRWxCUVVrc1EwRkJReXhOUVVGTkxFVkJRVVVzVlVGQlF5eExRVUZMTEVWQlFVVXNSMEZCUnl4RlFVRkxPMEZCUXpsQ0xHZENRVUZKTEU5QlFVc3NWMEZCVnl4RFFVRkRMR05CUVdNc1EwRkJReXhIUVVGSExFTkJRVU1zUlVGQlJUdEJRVU4wUXl4dlFrRkJTU3hMUVVGTExFTkJRVU1zVFVGQlRTeEZRVUZGTzBGQlEyUXNlVUpCUVVzc1EwRkJReXhQUVVGUExFZEJRVWNzVDBGQlN5eExRVUZMTEVOQlFVTXNTMEZCU3l4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRE8ybENRVU42UXl4TlFVRk5PMEZCUTBnc2VVSkJRVXNzUTBGQlF5eFBRVUZQTEVkQlFVY3NTMEZCU3l4RFFVRkRMRTFCUVUwc1IwRkJSeXhQUVVGTExGZEJRVmNzUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXp0cFFrRkRlRVE3WVVGRFNqdFRRVU5LTEVOQlFVTXNRMEZCUXp0TFFVTk9PenRCUVhaQ1owSXNVMEZCU3l4WFFYbENkRUlzWlVGQlpTdzRRa0ZCUnp0QlFVTmtMR1ZCUVU4N1FVRkRTQ3hsUVVGSExFVkJRVVVzUTBGQlF6dEJRVU5PTEhGQ1FVRlRMRVZCUVVVc1EwRkJRenRCUVVOYUxHdENRVUZOTEVWQlFVVXNTMEZCU3p0QlFVTmlMR3RDUVVGTkxFVkJRVVVzUTBGQlF6dFRRVU5hTEVOQlFVTTdTMEZEVERzN1YwRm9RMmRDTEV0QlFVczdPenRyUWtGQlRDeExRVUZMSWl3aVptbHNaU0k2SWxSeVlXTnJMbXB6SWl3aWMyOTFjbU5sYzBOdmJuUmxiblFpT2xzaWFXMXdiM0owSUVGamRHbHZiaUJtY205dElDY3VMMEZqZEdsdmJpYzdYRzVwYlhCdmNuUWdUVzkxYzJVZ1puSnZiU0FuTGk0dmFXNXdkWFF2VFc5MWMyVW5PMXh1YVcxd2IzSjBJRlJ2ZFdOb0lHWnliMjBnSnk0dUwybHVjSFYwTDFSdmRXTm9KenRjYm1sdGNHOXlkQ0I3SUc5bVpuTmxkQ0I5SUdaeWIyMGdKeTR1TDJsdVl5OWpZV3hqSnp0Y2JtbHRjRzl5ZENCN0lHVmhZMmdnZlNCbWNtOXRJQ2N1TGk5cGJtTXZkWFJwYkhNbk8xeHVYRzVqYjI1emRDQmpjbVZoZEdWUWIybHVkR1Z5SUQwZ0tHVXBJRDArSUdVdWRHOTFZMmhsY3lBL0lHNWxkeUJVYjNWamFDaGxLU0E2SUc1bGR5Qk5iM1Z6WlNobEtUdGNibU52Ym5OMElHZGxkRUZqZEhWaGJFVjJaVzUwSUQwZ0tHVXBJRDArSUdVdWIzSnBaMmx1WVd4RmRtVnVkQ0I4ZkNCbE8xeHVYRzVsZUhCdmNuUWdaR1ZtWVhWc2RDQmpiR0Z6Y3lCVWNtRmpheUJsZUhSbGJtUnpJRUZqZEdsdmJpQjdYRzRnSUNBZ1kyOXVjM1J5ZFdOMGIzSW9jSEp2Y0hNc0lHbHVjSFYwS1NCN1hHNGdJQ0FnSUNBZ0lITjFjR1Z5S0hCeWIzQnpLVHRjYmlBZ0lDQWdJQ0FnZEdocGN5NXBibkIxZENBOUlHbHVjSFYwTG5OMFlYUmxJRDhnYVc1d2RYUWdPaUJqY21WaGRHVlFiMmx1ZEdWeUtHZGxkRUZqZEhWaGJFVjJaVzUwS0dsdWNIVjBLU2s3WEc0Z0lDQWdmVnh1WEc0Z0lDQWdjM1JoY25Rb0tTQjdYRzRnSUNBZ0lDQWdJSE4xY0dWeUxuTjBZWEowS0NrN1hHNGdJQ0FnSUNBZ0lIUm9hWE11YVc1d2RYUlBjbWxuYVc0Z1BTQjdmVHRjYmlBZ0lDQjlYRzVjYmlBZ0lDQnZibFZ3WkdGMFpTaDBjbUZqYXl3Z1puSmhiV1ZFZFhKaGRHbHZiaXdnWld4aGNITmxaQ2tnZTF4dUlDQWdJQ0FnSUNCMGFHbHpMbWx1Y0hWMFQyWm1jMlYwSUQwZ2IyWm1jMlYwS0hSb2FYTXVhVzV3ZFhSUGNtbG5hVzRzSUhSb2FYTXVhVzV3ZFhRdWMzUmhkR1VwTzF4dVhHNGdJQ0FnSUNBZ0lHVmhZMmdvZEdocGN5NTJZV3gxWlhNc0lDaDJZV3gxWlN3Z2EyVjVLU0E5UGlCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0JwWmlBb2RHaHBjeTVwYm5CMWRFOW1abk5sZEM1b1lYTlBkMjVRY205d1pYSjBlU2hyWlhrcEtTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdhV1lnS0haaGJIVmxMbVJwY21WamRDa2dlMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCMllXeDFaUzVqZFhKeVpXNTBJRDBnZEdocGN5NXBibkIxZEM1emRHRjBaVnRyWlhsZE8xeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lIMGdaV3h6WlNCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJSFpoYkhWbExtTjFjbkpsYm5RZ1BTQjJZV3gxWlM1dmNtbG5hVzRnS3lCMGFHbHpMbWx1Y0hWMFQyWm1jMlYwVzJ0bGVWMDdYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdmVnh1SUNBZ0lDQWdJQ0FnSUNBZ2ZWeHVJQ0FnSUNBZ0lDQjlLVHRjYmlBZ0lDQjlYRzVjYmlBZ0lDQm5aWFJFWldaaGRXeDBWbUZzZFdVb0tTQjdYRzRnSUNBZ0lDQWdJSEpsZEhWeWJpQjdYRzRnSUNBZ0lDQWdJQ0FnSUNCaGJYQTZJREVzWEc0Z0lDQWdJQ0FnSUNBZ0lDQmxjMk5oY0dWQmJYQTZJREFzWEc0Z0lDQWdJQ0FnSUNBZ0lDQmthWEpsWTNRNklHWmhiSE5sTEZ4dUlDQWdJQ0FnSUNBZ0lDQWdjMjF2YjNSb09pQXdYRzRnSUNBZ0lDQWdJSDA3WEc0Z0lDQWdmVnh1ZlZ4dUlsMTlcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2FjdGlvbnMvVHJhY2suanNcbiAqKiBtb2R1bGUgaWQgPSA2XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbnZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfUHJvY2VzczIgPSByZXF1aXJlKCcuLi9wcm9jZXNzL1Byb2Nlc3MnKTtcblxudmFyIF9Qcm9jZXNzMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX1Byb2Nlc3MyKTtcblxudmFyIF91dGlscyA9IHJlcXVpcmUoJy4uL2luYy91dGlscycpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmICghc2VsZikgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIGNhbGwgJiYgKHR5cGVvZiBjYWxsID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpID8gY2FsbCA6IHNlbGY7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgXCIgKyB0eXBlb2Ygc3VwZXJDbGFzcyk7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgZW51bWVyYWJsZTogZmFsc2UsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcykgOiBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzOyB9XG5cbnZhciBJbnB1dCA9IChmdW5jdGlvbiAoX1Byb2Nlc3MpIHtcbiAgICBfaW5oZXJpdHMoSW5wdXQsIF9Qcm9jZXNzKTtcblxuICAgIGZ1bmN0aW9uIElucHV0KGluaXRpYWxWYWx1ZXMsIHBvbGwpIHtcbiAgICAgICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIElucHV0KTtcblxuICAgICAgICB2YXIgX3RoaXMgPSBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCBfUHJvY2Vzcy5jYWxsKHRoaXMpKTtcblxuICAgICAgICBfdGhpcy5zdGF0ZSA9IHt9O1xuICAgICAgICBfdGhpcy5vZmZzZXQgPSB7fTtcblxuICAgICAgICBpZiAoKDAsIF91dGlscy5pc0Z1bmMpKHBvbGwpKSB7XG4gICAgICAgICAgICBfdGhpcy5vbkZyYW1lU3RhcnQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIF90aGlzLmxhdGVzdChfdGhpcy5wb2xsKCkpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gX3RoaXM7XG4gICAgfVxuXG4gICAgLypcbiAgICAgICAgTWFudWFsbHkgYWRkIGxhdGVzdCB2YWx1ZXNcbiAgICAgICAgIEBwYXJhbSBbb2JqZWN0XVxuICAgICovXG5cbiAgICBJbnB1dC5wcm90b3R5cGUubGF0ZXN0ID0gZnVuY3Rpb24gbGF0ZXN0KHByb3BzKSB7XG4gICAgICAgIHRoaXMuc3RhdGUgPSBfZXh0ZW5kcyh7fSwgdGhpcy5zdGF0ZSwgeyBwcm9wczogcHJvcHMgfSk7XG4gICAgfTtcblxuICAgIHJldHVybiBJbnB1dDtcbn0pKF9Qcm9jZXNzMy5kZWZhdWx0KTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gSW5wdXQ7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSWtsdWNIVjBMbXB6SWwwc0ltNWhiV1Z6SWpwYlhTd2liV0Z3Y0dsdVozTWlPaUk3T3pzN096czdPenM3T3pzN096czdPenM3TzBsQlIzRkNMRXRCUVVzN1kwRkJUQ3hMUVVGTE96dEJRVU4wUWl4aFFVUnBRaXhMUVVGTExFTkJRMVlzWVVGQllTeEZRVUZGTEVsQlFVa3NSVUZCUlRzNFFrRkVhRUlzUzBGQlN6czdjVVJCUld4Q0xHMUNRVUZQT3p0QlFVTlFMR05CUVVzc1MwRkJTeXhIUVVGSExFVkJRVVVzUTBGQlF6dEJRVU5vUWl4alFVRkxMRTFCUVUwc1IwRkJSeXhGUVVGRkxFTkJRVU03TzBGQlJXcENMRmxCUVVrc1YwRlNTQ3hOUVVGTkxFVkJVVWtzU1VGQlNTeERRVUZETEVWQlFVVTdRVUZEWkN4clFrRkJTeXhaUVVGWkxFZEJRVWM3ZFVKQlFVMHNUVUZCU3l4TlFVRk5MRU5CUVVNc1RVRkJTeXhKUVVGSkxFVkJRVVVzUTBGQlF6dGhRVUZCTEVOQlFVTTdVMEZEZEVRN08wdEJRMG83T3pzN096dEJRVUZCTzBGQlZHZENMRk5CUVVzc1YwRm5RblJDTEUxQlFVMHNiVUpCUVVNc1MwRkJTeXhGUVVGRk8wRkJRMVlzV1VGQlNTeERRVUZETEV0QlFVc3NaMEpCUVZFc1NVRkJTU3hEUVVGRExFdEJRVXNzU1VGQlJTeExRVUZMTEVWQlFVd3NTMEZCU3l4SFFVRkZMRU5CUVVNN1MwRkRla003TzFkQmJFSm5RaXhMUVVGTE96czdhMEpCUVV3c1MwRkJTeUlzSW1acGJHVWlPaUpKYm5CMWRDNXFjeUlzSW5OdmRYSmpaWE5EYjI1MFpXNTBJanBiSW1sdGNHOXlkQ0JRY205alpYTnpJR1p5YjIwZ0p5NHVMM0J5YjJObGMzTXZVSEp2WTJWemN5YzdYRzVwYlhCdmNuUWdleUJwYzBaMWJtTWdmU0JtY205dElDY3VMaTlwYm1NdmRYUnBiSE1uTzF4dVhHNWxlSEJ2Y25RZ1pHVm1ZWFZzZENCamJHRnpjeUJKYm5CMWRDQmxlSFJsYm1SeklGQnliMk5sYzNNZ2UxeHVJQ0FnSUdOdmJuTjBjblZqZEc5eUtHbHVhWFJwWVd4V1lXeDFaWE1zSUhCdmJHd3BJSHRjYmlBZ0lDQWdJQ0FnYzNWd1pYSW9LVHRjYmlBZ0lDQWdJQ0FnZEdocGN5NXpkR0YwWlNBOUlIdDlPMXh1SUNBZ0lDQWdJQ0IwYUdsekxtOW1abk5sZENBOUlIdDlPMXh1WEc0Z0lDQWdJQ0FnSUdsbUlDaHBjMFoxYm1Nb2NHOXNiQ2twSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJSFJvYVhNdWIyNUdjbUZ0WlZOMFlYSjBJRDBnS0NrZ1BUNGdkR2hwY3k1c1lYUmxjM1FvZEdocGN5NXdiMnhzS0NrcE8xeHVJQ0FnSUNBZ0lDQjlYRzRnSUNBZ2ZWeHVYRzRnSUNBZ0x5cGNiaUFnSUNBZ0lDQWdUV0Z1ZFdGc2JIa2dZV1JrSUd4aGRHVnpkQ0IyWVd4MVpYTmNibHh1SUNBZ0lDQWdJQ0JBY0dGeVlXMGdXMjlpYW1WamRGMWNiaUFnSUNBcUwxeHVJQ0FnSUd4aGRHVnpkQ2h3Y205d2N5a2dlMXh1SUNBZ0lDQWdJQ0IwYUdsekxuTjBZWFJsSUQwZ2V5QXVMaTUwYUdsekxuTjBZWFJsTENCd2NtOXdjeUI5TzF4dUlDQWdJSDFjYm4xY2JpSmRmUT09XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9pbnB1dC9JbnB1dC5qc1xuICoqIG1vZHVsZSBpZCA9IDdcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF9JbnB1dDIgPSByZXF1aXJlKCcuL0lucHV0Jyk7XG5cbnZhciBfSW5wdXQzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfSW5wdXQyKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoIXNlbGYpIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBjYWxsICYmICh0eXBlb2YgY2FsbCA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSA/IGNhbGwgOiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90IFwiICsgdHlwZW9mIHN1cGVyQ2xhc3MpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIGVudW1lcmFibGU6IGZhbHNlLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIDogc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzczsgfVxuXG52YXIgTU9VU0VfTU9WRSA9ICdtb3VzZW1vdmUnO1xuXG4vKlxuICAgIFNjcmFwZSB4L3kgY29vcmRpbmF0ZXMgZnJvbSBwcm92aWRlZCBldmVudFxuXG4gICAgQHBhcmFtIFtldmVudF1cbiAgICBAcmV0dXJuIFtvYmplY3RdXG4qL1xudmFyIGV2ZW50VG9Qb2ludCA9IGZ1bmN0aW9uIChlKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgeDogZS5wYWdlWCxcbiAgICAgICAgeTogZS5wYWdlWVxuICAgIH07XG59O1xuXG52YXIgTW91c2UgPSAoZnVuY3Rpb24gKF9JbnB1dCkge1xuICAgIF9pbmhlcml0cyhNb3VzZSwgX0lucHV0KTtcblxuICAgIGZ1bmN0aW9uIE1vdXNlKGUpIHtcbiAgICAgICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIE1vdXNlKTtcblxuICAgICAgICB2YXIgX3RoaXMgPSBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCBfSW5wdXQuY2FsbCh0aGlzKSk7XG5cbiAgICAgICAgX3RoaXMuc3RhdGUgPSBldmVudFRvUG9pbnQoZSk7XG4gICAgICAgIF90aGlzLmJpbmRFdmVudHMoKTtcbiAgICAgICAgcmV0dXJuIF90aGlzO1xuICAgIH1cblxuICAgIE1vdXNlLnByb3RvdHlwZS5sYXRlc3QgPSBmdW5jdGlvbiBsYXRlc3QoZSkge1xuICAgICAgICBfSW5wdXQucHJvdG90eXBlLmxhdGVzdC5jYWxsKHRoaXMsIGV2ZW50VG9Qb2ludChlKSk7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICB9O1xuXG4gICAgTW91c2UucHJvdG90eXBlLnN0YXJ0ID0gZnVuY3Rpb24gc3RhcnQoKSB7XG4gICAgICAgIF9JbnB1dC5wcm90b3R5cGUuc3RhcnQuY2FsbCh0aGlzKTtcbiAgICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoTU9VU0VfTU9WRSwgdGhpcy5vbk1vdmUpO1xuICAgIH07XG5cbiAgICBNb3VzZS5wcm90b3R5cGUuc3RvcCA9IGZ1bmN0aW9uIHN0b3AoKSB7XG4gICAgICAgIF9JbnB1dC5wcm90b3R5cGUuc3RvcC5jYWxsKHRoaXMpO1xuICAgICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihNT1VTRV9NT1ZFLCB0aGlzLm9uTW92ZSk7XG4gICAgfTtcblxuICAgIHJldHVybiBNb3VzZTtcbn0pKF9JbnB1dDMuZGVmYXVsdCk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IE1vdXNlO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYklrMXZkWE5sTG1weklsMHNJbTVoYldWeklqcGJYU3dpYldGd2NHbHVaM01pT2lJN096czdPenM3T3pzN096czdPenM3UVVGRlFTeEpRVUZOTEZWQlFWVXNSMEZCUnl4WFFVRlhPenM3T3pzN096dEJRVUZETEVGQlVTOUNMRWxCUVUwc1dVRkJXU3hIUVVGSExGVkJRVU1zUTBGQlF6dFhRVUZOTzBGQlEzcENMRk5CUVVNc1JVRkJSU3hEUVVGRExFTkJRVU1zUzBGQlN6dEJRVU5XTEZOQlFVTXNSVUZCUlN4RFFVRkRMRU5CUVVNc1MwRkJTenRMUVVOaU8wTkJRVU1zUTBGQlF6czdTVUZGYTBJc1MwRkJTenRqUVVGTUxFdEJRVXM3TzBGQlEzUkNMR0ZCUkdsQ0xFdEJRVXNzUTBGRFZpeERRVUZETEVWQlFVVTdPRUpCUkVVc1MwRkJTenM3Y1VSQlJXeENMR2xDUVVGUE96dEJRVU5RTEdOQlFVc3NTMEZCU3l4SFFVRkhMRmxCUVZrc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF6dEJRVU0zUWl4alFVRkxMRlZCUVZVc1JVRkJSU3hEUVVGRE96dExRVU55UWpzN1FVRk1aMElzVTBGQlN5eFhRVTkwUWl4TlFVRk5MRzFDUVVGRExFTkJRVU1zUlVGQlJUdEJRVU5PTEhsQ1FVRk5MRTFCUVUwc1MwRkJRU3hQUVVGRExGbEJRVmtzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRPMEZCUXpsQ0xGTkJRVU1zUTBGQlF5eGpRVUZqTEVWQlFVVXNRMEZCUXp0TFFVTjBRanM3UVVGV1owSXNVMEZCU3l4WFFWbDBRaXhMUVVGTExHOUNRVUZITzBGQlEwb3NlVUpCUVUwc1MwRkJTeXhMUVVGQkxFMUJRVVVzUTBGQlF6dEJRVU5rTEdkQ1FVRlJMRU5CUVVNc1pVRkJaU3hEUVVGRExHZENRVUZuUWl4RFFVRkRMRlZCUVZVc1JVRkJSU3hKUVVGSkxFTkJRVU1zVFVGQlRTeERRVUZETEVOQlFVTTdTMEZEZEVVN08wRkJabWRDTEZOQlFVc3NWMEZwUW5SQ0xFbEJRVWtzYlVKQlFVYzdRVUZEU0N4NVFrRkJUU3hKUVVGSkxFdEJRVUVzVFVGQlJTeERRVUZETzBGQlEySXNaMEpCUVZFc1EwRkJReXhsUVVGbExFTkJRVU1zYlVKQlFXMUNMRU5CUVVNc1ZVRkJWU3hGUVVGRkxFbEJRVWtzUTBGQlF5eE5RVUZOTEVOQlFVTXNRMEZCUXp0TFFVTjZSVHM3VjBGd1FtZENMRXRCUVVzN096dHJRa0ZCVEN4TFFVRkxJaXdpWm1sc1pTSTZJazF2ZFhObExtcHpJaXdpYzI5MWNtTmxjME52Ym5SbGJuUWlPbHNpYVcxd2IzSjBJRWx1Y0hWMElHWnliMjBnSnk0dlNXNXdkWFFuTzF4dVhHNWpiMjV6ZENCTlQxVlRSVjlOVDFaRklEMGdKMjF2ZFhObGJXOTJaU2M3WEc1Y2JpOHFYRzRnSUNBZ1UyTnlZWEJsSUhndmVTQmpiMjl5WkdsdVlYUmxjeUJtY205dElIQnliM1pwWkdWa0lHVjJaVzUwWEc1Y2JpQWdJQ0JBY0dGeVlXMGdXMlYyWlc1MFhWeHVJQ0FnSUVCeVpYUjFjbTRnVzI5aWFtVmpkRjFjYmlvdlhHNWpiMjV6ZENCbGRtVnVkRlJ2VUc5cGJuUWdQU0FvWlNrZ1BUNGdLSHRjYmlBZ0lDQjRPaUJsTG5CaFoyVllMRnh1SUNBZ0lIazZJR1V1Y0dGblpWbGNibjBwTzF4dVhHNWxlSEJ2Y25RZ1pHVm1ZWFZzZENCamJHRnpjeUJOYjNWelpTQmxlSFJsYm1SeklFbHVjSFYwSUh0Y2JpQWdJQ0JqYjI1emRISjFZM1J2Y2lobEtTQjdYRzRnSUNBZ0lDQWdJSE4xY0dWeUtDazdYRzRnSUNBZ0lDQWdJSFJvYVhNdWMzUmhkR1VnUFNCbGRtVnVkRlJ2VUc5cGJuUW9aU2s3WEc0Z0lDQWdJQ0FnSUhSb2FYTXVZbWx1WkVWMlpXNTBjeWdwTzF4dUlDQWdJSDFjYmx4dUlDQWdJR3hoZEdWemRDaGxLU0I3WEc0Z0lDQWdJQ0FnSUhOMWNHVnlMbXhoZEdWemRDaGxkbVZ1ZEZSdlVHOXBiblFvWlNrcE8xeHVJQ0FnSUNBZ0lDQmxMbkJ5WlhabGJuUkVaV1poZFd4MEtDazdYRzRnSUNBZ2ZWeHVYRzRnSUNBZ2MzUmhjblFvS1NCN1hHNGdJQ0FnSUNBZ0lITjFjR1Z5TG5OMFlYSjBLQ2s3WEc0Z0lDQWdJQ0FnSUdSdlkzVnRaVzUwTG1SdlkzVnRaVzUwUld4bGJXVnVkQzVoWkdSRmRtVnVkRXhwYzNSbGJtVnlLRTFQVlZORlgwMVBWa1VzSUhSb2FYTXViMjVOYjNabEtUdGNiaUFnSUNCOVhHNWNiaUFnSUNCemRHOXdLQ2tnZTF4dUlDQWdJQ0FnSUNCemRYQmxjaTV6ZEc5d0tDazdYRzRnSUNBZ0lDQWdJR1J2WTNWdFpXNTBMbVJ2WTNWdFpXNTBSV3hsYldWdWRDNXlaVzF2ZG1WRmRtVnVkRXhwYzNSbGJtVnlLRTFQVlZORlgwMVBWa1VzSUhSb2FYTXViMjVOYjNabEtUdGNiaUFnSUNCOVhHNTlJbDE5XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9pbnB1dC9Nb3VzZS5qc1xuICoqIG1vZHVsZSBpZCA9IDhcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF9JbnB1dDIgPSByZXF1aXJlKCcuL0lucHV0Jyk7XG5cbnZhciBfSW5wdXQzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfSW5wdXQyKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoIXNlbGYpIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBjYWxsICYmICh0eXBlb2YgY2FsbCA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSA/IGNhbGwgOiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90IFwiICsgdHlwZW9mIHN1cGVyQ2xhc3MpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIGVudW1lcmFibGU6IGZhbHNlLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIDogc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzczsgfVxuXG52YXIgVE9VQ0hfTU9WRSA9ICd0b3VjaG1vdmUnO1xuXG4vKlxuICAgIFNjcmFwZSB4L3kgY29vcmRpbmF0ZXMgZnJvbSBwcm92aWRlZCBldmVudFxuXG4gICAgQHBhcmFtIFtldmVudF1cbiAgICBAcmV0dXJuIFtvYmplY3RdXG4qL1xudmFyIGV2ZW50VG9Qb2ludCA9IGZ1bmN0aW9uIChfcmVmKSB7XG4gICAgdmFyIGNoYW5nZWRUb3VjaGVzID0gX3JlZi5jaGFuZ2VkVG91Y2hlcztcbiAgICByZXR1cm4ge1xuICAgICAgICB4OiBjaGFuZ2VkVG91Y2hlc1swXS5jbGllbnRYLFxuICAgICAgICB5OiBjaGFuZ2VkVG91Y2hlc1swXS5jbGllbnRZXG4gICAgfTtcbn07XG5cbnZhciBUb3VjaCA9IChmdW5jdGlvbiAoX0lucHV0KSB7XG4gICAgX2luaGVyaXRzKFRvdWNoLCBfSW5wdXQpO1xuXG4gICAgZnVuY3Rpb24gVG91Y2goZSkge1xuICAgICAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgVG91Y2gpO1xuXG4gICAgICAgIHZhciBfdGhpcyA9IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIF9JbnB1dC5jYWxsKHRoaXMpKTtcblxuICAgICAgICBfdGhpcy5zdGF0ZSA9IGV2ZW50VG9Qb2ludChlKTtcbiAgICAgICAgX3RoaXMuYmluZEV2ZW50cygpO1xuICAgICAgICByZXR1cm4gX3RoaXM7XG4gICAgfVxuXG4gICAgVG91Y2gucHJvdG90eXBlLmxhdGVzdCA9IGZ1bmN0aW9uIGxhdGVzdChlKSB7XG4gICAgICAgIF9JbnB1dC5wcm90b3R5cGUubGF0ZXN0LmNhbGwodGhpcywgZXZlbnRUb1BvaW50KGUpKTtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH07XG5cbiAgICBUb3VjaC5wcm90b3R5cGUuc3RhcnQgPSBmdW5jdGlvbiBzdGFydCgpIHtcbiAgICAgICAgX0lucHV0LnByb3RvdHlwZS5zdGFydC5jYWxsKHRoaXMpO1xuICAgICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihUT1VDSF9NT1ZFLCB0aGlzLmxhdGVzdCk7XG4gICAgfTtcblxuICAgIFRvdWNoLnByb3RvdHlwZS5zdG9wID0gZnVuY3Rpb24gc3RvcCgpIHtcbiAgICAgICAgX0lucHV0LnByb3RvdHlwZS5zdG9wLmNhbGwodGhpcyk7XG4gICAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFRPVUNIX01PVkUsIHRoaXMubGF0ZXN0KTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIFRvdWNoO1xufSkoX0lucHV0My5kZWZhdWx0KTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gVG91Y2g7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSWxSdmRXTm9MbXB6SWwwc0ltNWhiV1Z6SWpwYlhTd2liV0Z3Y0dsdVozTWlPaUk3T3pzN096czdPenM3T3pzN096czdRVUZGUVN4SlFVRk5MRlZCUVZVc1IwRkJSeXhYUVVGWE96czdPenM3T3p0QlFVRkRMRUZCVVM5Q0xFbEJRVTBzV1VGQldTeEhRVUZITzFGQlFVY3NZMEZCWXl4UlFVRmtMR05CUVdNN1YwRkJVVHRCUVVNeFF5eFRRVUZETEVWQlFVVXNZMEZCWXl4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFOUJRVTg3UVVGRE5VSXNVMEZCUXl4RlFVRkZMR05CUVdNc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eFBRVUZQTzB0QlF5OUNPME5CUVVNc1EwRkJRenM3U1VGRmEwSXNTMEZCU3p0alFVRk1MRXRCUVVzN08wRkJRM1JDTEdGQlJHbENMRXRCUVVzc1EwRkRWaXhEUVVGRExFVkJRVVU3T0VKQlJFVXNTMEZCU3pzN2NVUkJSV3hDTEdsQ1FVRlBPenRCUVVOUUxHTkJRVXNzUzBGQlN5eEhRVUZITEZsQlFWa3NRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJRenRCUVVNM1FpeGpRVUZMTEZWQlFWVXNSVUZCUlN4RFFVRkRPenRMUVVOeVFqczdRVUZNWjBJc1UwRkJTeXhYUVU5MFFpeE5RVUZOTEcxQ1FVRkRMRU5CUVVNc1JVRkJSVHRCUVVOT0xIbENRVUZOTEUxQlFVMHNTMEZCUVN4UFFVRkRMRmxCUVZrc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETzBGQlF6bENMRk5CUVVNc1EwRkJReXhqUVVGakxFVkJRVVVzUTBGQlF6dExRVU4wUWpzN1FVRldaMElzVTBGQlN5eFhRVmwwUWl4TFFVRkxMRzlDUVVGSE8wRkJRMG9zZVVKQlFVMHNTMEZCU3l4TFFVRkJMRTFCUVVVc1EwRkJRenRCUVVOa0xHZENRVUZSTEVOQlFVTXNaVUZCWlN4RFFVRkRMR2RDUVVGblFpeERRVUZETEZWQlFWVXNSVUZCUlN4SlFVRkpMRU5CUVVNc1RVRkJUU3hEUVVGRExFTkJRVU03UzBGRGRFVTdPMEZCWm1kQ0xGTkJRVXNzVjBGcFFuUkNMRWxCUVVrc2JVSkJRVWM3UVVGRFNDeDVRa0ZCVFN4SlFVRkpMRXRCUVVFc1RVRkJSU3hEUVVGRE8wRkJRMklzWjBKQlFWRXNRMEZCUXl4bFFVRmxMRU5CUVVNc2JVSkJRVzFDTEVOQlFVTXNWVUZCVlN4RlFVRkZMRWxCUVVrc1EwRkJReXhOUVVGTkxFTkJRVU1zUTBGQlF6dExRVU42UlRzN1YwRndRbWRDTEV0QlFVczdPenRyUWtGQlRDeExRVUZMSWl3aVptbHNaU0k2SWxSdmRXTm9MbXB6SWl3aWMyOTFjbU5sYzBOdmJuUmxiblFpT2xzaWFXMXdiM0owSUVsdWNIVjBJR1p5YjIwZ0p5NHZTVzV3ZFhRbk8xeHVYRzVqYjI1emRDQlVUMVZEU0Y5TlQxWkZJRDBnSjNSdmRXTm9iVzkyWlNjN1hHNWNiaThxWEc0Z0lDQWdVMk55WVhCbElIZ3ZlU0JqYjI5eVpHbHVZWFJsY3lCbWNtOXRJSEJ5YjNacFpHVmtJR1YyWlc1MFhHNWNiaUFnSUNCQWNHRnlZVzBnVzJWMlpXNTBYVnh1SUNBZ0lFQnlaWFIxY200Z1cyOWlhbVZqZEYxY2Jpb3ZYRzVqYjI1emRDQmxkbVZ1ZEZSdlVHOXBiblFnUFNBb2V5QmphR0Z1WjJWa1ZHOTFZMmhsY3lCOUtTQTlQaUFvZTF4dUlDQWdJSGc2SUdOb1lXNW5aV1JVYjNWamFHVnpXekJkTG1Oc2FXVnVkRmdzWEc0Z0lDQWdlVG9nWTJoaGJtZGxaRlJ2ZFdOb1pYTmJNRjB1WTJ4cFpXNTBXVnh1ZlNrN1hHNWNibVY0Y0c5eWRDQmtaV1poZFd4MElHTnNZWE56SUZSdmRXTm9JR1Y0ZEdWdVpITWdTVzV3ZFhRZ2UxeHVJQ0FnSUdOdmJuTjBjblZqZEc5eUtHVXBJSHRjYmlBZ0lDQWdJQ0FnYzNWd1pYSW9LVHRjYmlBZ0lDQWdJQ0FnZEdocGN5NXpkR0YwWlNBOUlHVjJaVzUwVkc5UWIybHVkQ2hsS1R0Y2JpQWdJQ0FnSUNBZ2RHaHBjeTVpYVc1a1JYWmxiblJ6S0NrN1hHNGdJQ0FnZlZ4dVhHNGdJQ0FnYkdGMFpYTjBLR1VwSUh0Y2JpQWdJQ0FnSUNBZ2MzVndaWEl1YkdGMFpYTjBLR1YyWlc1MFZHOVFiMmx1ZENobEtTazdYRzRnSUNBZ0lDQWdJR1V1Y0hKbGRtVnVkRVJsWm1GMWJIUW9LVHRjYmlBZ0lDQjlYRzVjYmlBZ0lDQnpkR0Z5ZENncElIdGNiaUFnSUNBZ0lDQWdjM1Z3WlhJdWMzUmhjblFvS1R0Y2JpQWdJQ0FnSUNBZ1pHOWpkVzFsYm5RdVpHOWpkVzFsYm5SRmJHVnRaVzUwTG1Ga1pFVjJaVzUwVEdsemRHVnVaWElvVkU5VlEwaGZUVTlXUlN3Z2RHaHBjeTVzWVhSbGMzUXBPMXh1SUNBZ0lIMWNibHh1SUNBZ0lITjBiM0FvS1NCN1hHNGdJQ0FnSUNBZ0lITjFjR1Z5TG5OMGIzQW9LVHRjYmlBZ0lDQWdJQ0FnWkc5amRXMWxiblF1Wkc5amRXMWxiblJGYkdWdFpXNTBMbkpsYlc5MlpVVjJaVzUwVEdsemRHVnVaWElvVkU5VlEwaGZUVTlXUlN3Z2RHaHBjeTVzWVhSbGMzUXBPMXh1SUNBZ0lIMWNibjBpWFgwPVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvaW5wdXQvVG91Y2guanNcbiAqKiBtb2R1bGUgaWQgPSA5XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfdXRpbHMgPSByZXF1aXJlKCcuLi9pbmMvdXRpbHMnKTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gKF9yZWYpIHtcbiAgdmFyIGVsZW1lbnQgPSBfcmVmLmVsZW1lbnQ7XG4gIHZhciBzdGF0ZSA9IF9yZWYuc3RhdGU7XG4gIHJldHVybiAoMCwgX3V0aWxzLmVhY2gpKHN0YXRlLCBmdW5jdGlvbiAodmFsdWUsIGtleSkge1xuICAgIHJldHVybiBlbGVtZW50LnNldEF0dHJpYnV0ZShrZXksIHZhbHVlKTtcbiAgfSk7XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkltRjBkSEl1YW5NaVhTd2libUZ0WlhNaU9sdGRMQ0p0WVhCd2FXNW5jeUk2SWpzN096czdPMnRDUVVWbE8wMUJRVWNzVDBGQlR5eFJRVUZRTEU5QlFVODdUVUZCUlN4TFFVRkxMRkZCUVV3c1MwRkJTenRUUVVGUExGZEJSamxDTEVsQlFVa3NSVUZGSzBJc1MwRkJTeXhGUVVGRkxGVkJRVU1zUzBGQlN5eEZRVUZGTEVkQlFVYzdWMEZCU3l4UFFVRlBMRU5CUVVNc1dVRkJXU3hEUVVGRExFZEJRVWNzUlVGQlJTeExRVUZMTEVOQlFVTTdSMEZCUVN4RFFVRkRPME5CUVVFaUxDSm1hV3hsSWpvaVlYUjBjaTVxY3lJc0luTnZkWEpqWlhORGIyNTBaVzUwSWpwYkltbHRjRzl5ZENCN0lHVmhZMmdnZlNCbWNtOXRJQ2N1TGk5cGJtTXZkWFJwYkhNbk8xeHVYRzVsZUhCdmNuUWdaR1ZtWVhWc2RDQW9leUJsYkdWdFpXNTBMQ0J6ZEdGMFpTQjlLU0E5UGlCbFlXTm9LSE4wWVhSbExDQW9kbUZzZFdVc0lHdGxlU2tnUFQ0Z1pXeGxiV1Z1ZEM1elpYUkJkSFJ5YVdKMWRHVW9hMlY1TENCMllXeDFaU2twT3lKZGZRPT1cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL3JlbmRlci9hdHRyLmpzXG4gKiogbW9kdWxlIGlkID0gMTBcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF9zdGF0ZU1hcCA9IHJlcXVpcmUoJy4vY3NzL3N0YXRlLW1hcCcpO1xuXG52YXIgX3N0YXRlTWFwMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3N0YXRlTWFwKTtcblxudmFyIF92YWx1ZVR5cGVNYXAgPSByZXF1aXJlKCcuL2Nzcy92YWx1ZS10eXBlLW1hcCcpO1xuXG52YXIgX3ZhbHVlVHlwZU1hcDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF92YWx1ZVR5cGVNYXApO1xuXG52YXIgX3ByZWZpeGVyID0gcmVxdWlyZSgnLi9jc3MvcHJlZml4ZXInKTtcblxudmFyIF9wcmVmaXhlcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9wcmVmaXhlcik7XG5cbnZhciBfYnVpbGQgPSByZXF1aXJlKCcuL2Nzcy9idWlsZCcpO1xuXG52YXIgX2J1aWxkMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2J1aWxkKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuLypcbiAgICBSZW5kZXIgQ1NTIHRvIHByb3ZpZGVkIGVsZW1lbnRcblxuICAgIEBwYXJhbSB7IERPTUVsZW1lbnQsIE9iamVjdCB9XG4qL1xuZnVuY3Rpb24gcmVuZGVyQ1NTKF9yZWYpIHtcbiAgICB2YXIgZWxlbWVudCA9IF9yZWYuZWxlbWVudDtcbiAgICB2YXIgc3RhdGUgPSBfcmVmLnN0YXRlO1xuXG4gICAgZWxlbWVudC5zdHlsZS5jc3NUZXh0ICs9ICc7JyArICgwLCBfYnVpbGQyLmRlZmF1bHQpKHN0YXRlKTtcbn07XG5cbi8qXG4gICAgR2V0IENTUyBwcm9wZXJ0eSBvZiBlbGVtZW50XG5cbiAgICBAcGFyYW0gW0RPTUVsZW1lbnRdXG4gICAgQHBhcmFtIFtzdHJpbmddXG4gICAgQHJldHVybiBbdmFyXVxuKi9cbnJlbmRlckNTUy5nZXQgPSBmdW5jdGlvbiAoZWxlbWVudCwga2V5KSB7XG4gICAga2V5ID0gKDAsIF9wcmVmaXhlcjIuZGVmYXVsdCkoa2V5KTtcblxuICAgIGlmIChrZXkpIHtcbiAgICAgICAgcmV0dXJuIHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGVsZW1lbnQsIG51bGwpW2tleV07XG4gICAgfVxufTtcblxucmVuZGVyQ1NTLnN0YXRlTWFwID0gX3N0YXRlTWFwMi5kZWZhdWx0O1xucmVuZGVyQ1NTLnZhbHVlVHlwZU1hcCA9IF92YWx1ZVR5cGVNYXAyLmRlZmF1bHQ7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IHJlbmRlckNTUztcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbU56Y3k1cWN5SmRMQ0p1WVcxbGN5STZXMTBzSW0xaGNIQnBibWR6SWpvaU96czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN1FVRlZRU3hUUVVGVExGTkJRVk1zVDBGQmNVSTdVVUZCYkVJc1QwRkJUeXhSUVVGUUxFOUJRVTg3VVVGQlJTeExRVUZMTEZGQlFVd3NTMEZCU3pzN1FVRkRMMElzVjBGQlR5eERRVUZETEV0QlFVc3NRMEZCUXl4UFFVRlBMRWxCUVVrc1IwRkJSeXhIUVVGSExIRkNRVUZ2UWl4TFFVRkxMRU5CUVVNc1EwRkJRenREUVVNM1JEczdPenM3T3pzN08wRkJRVU1zUVVGVFJpeFRRVUZUTEVOQlFVTXNSMEZCUnl4SFFVRkhMRlZCUVVNc1QwRkJUeXhGUVVGRkxFZEJRVWNzUlVGQlN6dEJRVU01UWl4UFFVRkhMRWRCUVVjc2QwSkJRVk1zUjBGQlJ5eERRVUZETEVOQlFVTTdPMEZCUlhCQ0xGRkJRVWtzUjBGQlJ5eEZRVUZGTzBGQlEwd3NaVUZCVHl4TlFVRk5MRU5CUVVNc1owSkJRV2RDTEVOQlFVTXNUMEZCVHl4RlFVRkZMRWxCUVVrc1EwRkJReXhEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETzB0QlEzUkVPME5CUTBvc1EwRkJRVHM3UVVGRlJDeFRRVUZUTEVOQlFVTXNVVUZCVVN4eFFrRkJWeXhEUVVGRE8wRkJRemxDTEZOQlFWTXNRMEZCUXl4WlFVRlpMSGxDUVVGbExFTkJRVU03TzJ0Q1FVVjJRaXhUUVVGVElpd2labWxzWlNJNkltTnpjeTVxY3lJc0luTnZkWEpqWlhORGIyNTBaVzUwSWpwYkltbHRjRzl5ZENCemRHRjBaVTFoY0NCbWNtOXRJQ2N1TDJOemN5OXpkR0YwWlMxdFlYQW5PMXh1YVcxd2IzSjBJSFpoYkhWbFZIbHdaVTFoY0NCbWNtOXRJQ2N1TDJOemN5OTJZV3gxWlMxMGVYQmxMVzFoY0NjN1hHNXBiWEJ2Y25RZ2NISmxabWw0WlhJZ1puSnZiU0FuTGk5amMzTXZjSEpsWm1sNFpYSW5PMXh1YVcxd2IzSjBJR0oxYVd4a1VISnZjR1Z5ZEhsVGRISnBibWNnWm5KdmJTQW5MaTlqYzNNdlluVnBiR1FuTzF4dVhHNHZLbHh1SUNBZ0lGSmxibVJsY2lCRFUxTWdkRzhnY0hKdmRtbGtaV1FnWld4bGJXVnVkRnh1WEc0Z0lDQWdRSEJoY21GdElIc2dSRTlOUld4bGJXVnVkQ3dnVDJKcVpXTjBJSDFjYmlvdlhHNW1kVzVqZEdsdmJpQnlaVzVrWlhKRFUxTW9leUJsYkdWdFpXNTBMQ0J6ZEdGMFpTQjlLU0I3WEc0Z0lDQWdaV3hsYldWdWRDNXpkSGxzWlM1amMzTlVaWGgwSUNzOUlDYzdKeUFySUdKMWFXeGtVSEp2Y0dWeWRIbFRkSEpwYm1jb2MzUmhkR1VwTzF4dWZUdGNibHh1THlwY2JpQWdJQ0JIWlhRZ1ExTlRJSEJ5YjNCbGNuUjVJRzltSUdWc1pXMWxiblJjYmx4dUlDQWdJRUJ3WVhKaGJTQmJSRTlOUld4bGJXVnVkRjFjYmlBZ0lDQkFjR0Z5WVcwZ1czTjBjbWx1WjExY2JpQWdJQ0JBY21WMGRYSnVJRnQyWVhKZFhHNHFMMXh1Y21WdVpHVnlRMU5UTG1kbGRDQTlJQ2hsYkdWdFpXNTBMQ0JyWlhrcElEMCtJSHRjYmlBZ0lDQnJaWGtnUFNCd2NtVm1hWGhsY2loclpYa3BPMXh1WEc0Z0lDQWdhV1lnS0d0bGVTa2dlMXh1SUNBZ0lDQWdJQ0J5WlhSMWNtNGdkMmx1Wkc5M0xtZGxkRU52YlhCMWRHVmtVM1I1YkdVb1pXeGxiV1Z1ZEN3Z2JuVnNiQ2xiYTJWNVhUdGNiaUFnSUNCOVhHNTlYRzVjYm5KbGJtUmxja05UVXk1emRHRjBaVTFoY0NBOUlITjBZWFJsVFdGd08xeHVjbVZ1WkdWeVExTlRMblpoYkhWbFZIbHdaVTFoY0NBOUlIWmhiSFZsVkhsd1pVMWhjRHRjYmx4dVpYaHdiM0owSUdSbFptRjFiSFFnY21WdVpHVnlRMU5UT3lKZGZRPT1cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL3JlbmRlci9jc3MuanNcbiAqKiBtb2R1bGUgaWQgPSAxMVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX3V0aWxzID0gcmVxdWlyZSgnLi4vaW5jL3V0aWxzJyk7XG5cbnZhciBfc3RhdGVNYXAgPSByZXF1aXJlKCcuL2Nzcy9zdGF0ZS1tYXAnKTtcblxudmFyIF9zdGF0ZU1hcDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9zdGF0ZU1hcCk7XG5cbnZhciBfdmFsdWVUeXBlTWFwID0gcmVxdWlyZSgnLi9zdmcvdmFsdWUtdHlwZS1tYXAnKTtcblxudmFyIF92YWx1ZVR5cGVNYXAyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfdmFsdWVUeXBlTWFwKTtcblxudmFyIF9idWlsZCA9IHJlcXVpcmUoJy4vc3ZnL2J1aWxkJyk7XG5cbnZhciBfYnVpbGQyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfYnVpbGQpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiByZW5kZXJTVkcoX3JlZikge1xuICAgIHZhciBzdGF0ZSA9IF9yZWYuc3RhdGU7XG4gICAgdmFyIGVsZW1lbnQgPSBfcmVmLmVsZW1lbnQ7XG4gICAgdmFyIHN2Z09yaWdpbiA9IF9yZWYuc3ZnT3JpZ2luO1xuXG4gICAgKDAsIF91dGlscy5lYWNoKSgoMCwgX2J1aWxkMi5kZWZhdWx0KShzdGF0ZSwgc3ZnT3JpZ2luKSwgZnVuY3Rpb24gKHZhbHVlLCBrZXkpIHtcbiAgICAgICAgcmV0dXJuIGVsZW1lbnQuc2V0QXR0cmlidXRlKGtleSwgdmFsdWUpO1xuICAgIH0pO1xufVxuXG5yZW5kZXJTVkcuaW5pdCA9IGZ1bmN0aW9uIChhY3Rvcikge1xuICAgIHZhciBiQm94ID0gYWN0b3IuZWxlbWVudC5nZXRCQm94KCk7XG4gICAgdmFyIHRyYW5zZm9ybU9yaWdpblggPSBhY3Rvci52YWx1ZXMudHJhbnNmb3JtT3JpZ2luWCA/IGFjdG9yLnZhbHVlcy50cmFuc2Zvcm1PcmlnaW5YLmN1cnJlbnQgOiA1MDtcbiAgICB2YXIgdHJhbnNmb3JtT3JpZ2luWSA9IGFjdG9yLnZhbHVlcy50cmFuc2Zvcm1PcmlnaW5ZID8gYWN0b3IudmFsdWVzLnRyYW5zZm9ybU9yaWdpblkuY3VycmVudCA6IDUwO1xuXG4gICAgYWN0b3Iuc3ZnT3JpZ2luID0ge1xuICAgICAgICB4OiBiQm94LndpZHRoICogKHRyYW5zZm9ybU9yaWdpblggLyAxMDApICsgYkJveC54LFxuICAgICAgICB5OiBiQm94LmhlaWdodCAqICh0cmFuc2Zvcm1PcmlnaW5ZIC8gMTAwKSArIGJCb3gueVxuICAgIH07XG59O1xuXG5yZW5kZXJTVkcuc3RhdGVNYXAgPSBfc3RhdGVNYXAyLmRlZmF1bHQ7XG5yZW5kZXJTVkcudmFsdWVUeXBlTWFwID0gX3ZhbHVlVHlwZU1hcDIuZGVmYXVsdDtcblxuZXhwb3J0cy5kZWZhdWx0ID0gcmVuZGVyU1ZHO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluTjJaeTVxY3lKZExDSnVZVzFsY3lJNlcxMHNJbTFoY0hCcGJtZHpJam9pT3pzN096czdPenM3T3pzN096czdPenM3T3p0QlFVdEJMRk5CUVZNc1UwRkJVeXhQUVVGblF6dFJRVUUzUWl4TFFVRkxMRkZCUVV3c1MwRkJTenRSUVVGRkxFOUJRVThzVVVGQlVDeFBRVUZQTzFGQlFVVXNVMEZCVXl4UlFVRlVMRk5CUVZNN08wRkJRekZETEdWQlRrc3NTVUZCU1N4RlFVMUtMSEZDUVVGTkxFdEJRVXNzUlVGQlJTeFRRVUZUTEVOQlFVTXNSVUZCUlN4VlFVRkRMRXRCUVVzc1JVRkJSU3hIUVVGSE8yVkJRVXNzVDBGQlR5eERRVUZETEZsQlFWa3NRMEZCUXl4SFFVRkhMRVZCUVVVc1MwRkJTeXhEUVVGRE8wdEJRVUVzUTBGQlF5eERRVUZETzBOQlEyNUdPenRCUVVWRUxGTkJRVk1zUTBGQlF5eEpRVUZKTEVkQlFVY3NWVUZCUXl4TFFVRkxMRVZCUVVzN1FVRkRlRUlzVVVGQlRTeEpRVUZKTEVkQlFVY3NTMEZCU3l4RFFVRkRMRTlCUVU4c1EwRkJReXhQUVVGUExFVkJRVVVzUTBGQlF6dEJRVU55UXl4UlFVRk5MR2RDUVVGblFpeEhRVUZITEV0QlFVc3NRMEZCUXl4TlFVRk5MRU5CUVVNc1owSkJRV2RDTEVkQlFVY3NTMEZCU3l4RFFVRkRMRTFCUVUwc1EwRkJReXhuUWtGQlowSXNRMEZCUXl4UFFVRlBMRWRCUVVjc1JVRkJSU3hEUVVGRE8wRkJRM0JITEZGQlFVMHNaMEpCUVdkQ0xFZEJRVWNzUzBGQlN5eERRVUZETEUxQlFVMHNRMEZCUXl4blFrRkJaMElzUjBGQlJ5eExRVUZMTEVOQlFVTXNUVUZCVFN4RFFVRkRMR2RDUVVGblFpeERRVUZETEU5QlFVOHNSMEZCUnl4RlFVRkZMRU5CUVVNN08wRkJSWEJITEZOQlFVc3NRMEZCUXl4VFFVRlRMRWRCUVVjN1FVRkRaQ3hUUVVGRExFVkJRVVVzU1VGQlNTeERRVUZETEV0QlFVc3NTVUZCU1N4blFrRkJaMElzUjBGQlJ5eEhRVUZITEVOQlFVRXNRVUZCUXl4SFFVRkhMRWxCUVVrc1EwRkJReXhEUVVGRE8wRkJRMnBFTEZOQlFVTXNSVUZCUlN4SlFVRkpMRU5CUVVNc1RVRkJUU3hKUVVGSkxHZENRVUZuUWl4SFFVRkhMRWRCUVVjc1EwRkJRU3hCUVVGRExFZEJRVWNzU1VGQlNTeERRVUZETEVOQlFVTTdTMEZEY2tRc1EwRkJRenREUVVOTUxFTkJRVUU3TzBGQlJVUXNVMEZCVXl4RFFVRkRMRkZCUVZFc2NVSkJRVmNzUTBGQlF6dEJRVU01UWl4VFFVRlRMRU5CUVVNc1dVRkJXU3g1UWtGQlpTeERRVUZET3p0clFrRkZka0lzVTBGQlV5SXNJbVpwYkdVaU9pSnpkbWN1YW5NaUxDSnpiM1Z5WTJWelEyOXVkR1Z1ZENJNld5SnBiWEJ2Y25RZ2V5QmxZV05vSUgwZ1puSnZiU0FuTGk0dmFXNWpMM1YwYVd4ekp6dGNibWx0Y0c5eWRDQnpkR0YwWlUxaGNDQm1jbTl0SUNjdUwyTnpjeTl6ZEdGMFpTMXRZWEFuTzF4dWFXMXdiM0owSUhaaGJIVmxWSGx3WlUxaGNDQm1jbTl0SUNjdUwzTjJaeTkyWVd4MVpTMTBlWEJsTFcxaGNDYzdYRzVwYlhCdmNuUWdZblZwYkdRZ1puSnZiU0FuTGk5emRtY3ZZblZwYkdRbk8xeHVYRzVtZFc1amRHbHZiaUJ5Wlc1a1pYSlRWa2NvZXlCemRHRjBaU3dnWld4bGJXVnVkQ3dnYzNablQzSnBaMmx1SUgwcElIdGNiaUFnSUNCbFlXTm9LR0oxYVd4a0tITjBZWFJsTENCemRtZFBjbWxuYVc0cExDQW9kbUZzZFdVc0lHdGxlU2tnUFQ0Z1pXeGxiV1Z1ZEM1elpYUkJkSFJ5YVdKMWRHVW9hMlY1TENCMllXeDFaU2twTzF4dWZWeHVYRzV5Wlc1a1pYSlRWa2N1YVc1cGRDQTlJQ2hoWTNSdmNpa2dQVDRnZTF4dUlDQWdJR052Ym5OMElHSkNiM2dnUFNCaFkzUnZjaTVsYkdWdFpXNTBMbWRsZEVKQ2IzZ29LVHRjYmlBZ0lDQmpiMjV6ZENCMGNtRnVjMlp2Y20xUGNtbG5hVzVZSUQwZ1lXTjBiM0l1ZG1Gc2RXVnpMblJ5WVc1elptOXliVTl5YVdkcGJsZ2dQeUJoWTNSdmNpNTJZV3gxWlhNdWRISmhibk5tYjNKdFQzSnBaMmx1V0M1amRYSnlaVzUwSURvZ05UQTdYRzRnSUNBZ1kyOXVjM1FnZEhKaGJuTm1iM0p0VDNKcFoybHVXU0E5SUdGamRHOXlMblpoYkhWbGN5NTBjbUZ1YzJadmNtMVBjbWxuYVc1WklEOGdZV04wYjNJdWRtRnNkV1Z6TG5SeVlXNXpabTl5YlU5eWFXZHBibGt1WTNWeWNtVnVkQ0E2SURVd08xeHVYRzRnSUNBZ1lXTjBiM0l1YzNablQzSnBaMmx1SUQwZ2UxeHVJQ0FnSUNBZ0lDQjRPaUJpUW05NExuZHBaSFJvSUNvZ0tIUnlZVzV6Wm05eWJVOXlhV2RwYmxnZ0x5QXhNREFwSUNzZ1lrSnZlQzU0TEZ4dUlDQWdJQ0FnSUNCNU9pQmlRbTk0TG1obGFXZG9kQ0FxSUNoMGNtRnVjMlp2Y20xUGNtbG5hVzVaSUM4Z01UQXdLU0FySUdKQ2IzZ3VlVnh1SUNBZ0lIMDdYRzU5WEc1Y2JuSmxibVJsY2xOV1J5NXpkR0YwWlUxaGNDQTlJSE4wWVhSbFRXRndPMXh1Y21WdVpHVnlVMVpITG5aaGJIVmxWSGx3WlUxaGNDQTlJSFpoYkhWbFZIbHdaVTFoY0R0Y2JseHVaWGh3YjNKMElHUmxabUYxYkhRZ2NtVnVaR1Z5VTFaSE95SmRmUT09XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9yZW5kZXIvc3ZnLmpzXG4gKiogbW9kdWxlIGlkID0gMTJcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF9idWlsZCA9IHJlcXVpcmUoJy4vc3ZnLXBhdGgvYnVpbGQnKTtcblxudmFyIF9idWlsZDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9idWlsZCk7XG5cbnZhciBfc3RhdGVNYXAgPSByZXF1aXJlKCcuL3N2Zy1wYXRoL3N0YXRlLW1hcCcpO1xuXG52YXIgX3N0YXRlTWFwMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3N0YXRlTWFwKTtcblxudmFyIF92YWx1ZVR5cGVNYXAgPSByZXF1aXJlKCcuL3N2Zy92YWx1ZS10eXBlLW1hcCcpO1xuXG52YXIgX3ZhbHVlVHlwZU1hcDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF92YWx1ZVR5cGVNYXApO1xuXG52YXIgX3N2ZyA9IHJlcXVpcmUoJy4vc3ZnJyk7XG5cbnZhciBfc3ZnMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3N2Zyk7XG5cbnZhciBfdXRpbHMgPSByZXF1aXJlKCcuLi9pbmMvdXRpbHMnKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxudmFyIHJlbmRlclNWR1BhdGggPSBmdW5jdGlvbiAoYWN0b3IpIHtcbiAgICAoMCwgX3N2ZzIuZGVmYXVsdCkoYWN0b3IpO1xuICAgICgwLCBfdXRpbHMuZWFjaCkoKDAsIF9idWlsZDIuZGVmYXVsdCkoYWN0b3Iuc3RhdGUsIGFjdG9yLnBhdGhMZW5ndGgpLCBmdW5jdGlvbiAodmFsdWUsIGtleSkge1xuICAgICAgICByZXR1cm4gYWN0b3IuZWxlbWVudC5zZXRBdHRyaWJ1dGUoa2V5LCB2YWx1ZSk7XG4gICAgfSk7XG59O1xuXG5yZW5kZXJTVkdQYXRoLmluaXQgPSBmdW5jdGlvbiAoYWN0b3IpIHtcbiAgICBhY3Rvci5wYXRoTGVuZ3RoID0gYWN0b3IuZWxlbWVudC5nZXRUb3RhbExlbmd0aCgpO1xuICAgIF9zdmcyLmRlZmF1bHQuaW5pdChhY3Rvcik7XG59O1xuXG5yZW5kZXJTVkdQYXRoLnN0YXRlTWFwID0gX3N0YXRlTWFwMi5kZWZhdWx0O1xucmVuZGVyU1ZHUGF0aC52YWx1ZVR5cGVNYXAgPSBfdmFsdWVUeXBlTWFwMi5kZWZhdWx0O1xuXG5leHBvcnRzLmRlZmF1bHQgPSByZW5kZXJTVkdQYXRoO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluTjJaeTF3WVhSb0xtcHpJbDBzSW01aGJXVnpJanBiWFN3aWJXRndjR2x1WjNNaU9pSTdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3p0QlFVMUJMRWxCUVUwc1lVRkJZU3hIUVVGSExGVkJRVU1zUzBGQlN5eEZRVUZMTzBGQlF6ZENMSFZDUVVGVkxFdEJRVXNzUTBGQlF5eERRVUZETzBGQlEycENMR1ZCU2tzc1NVRkJTU3hGUVVsS0xIRkNRVUZOTEV0QlFVc3NRMEZCUXl4TFFVRkxMRVZCUVVVc1MwRkJTeXhEUVVGRExGVkJRVlVzUTBGQlF5eEZRVUZGTEZWQlFVTXNTMEZCU3l4RlFVRkZMRWRCUVVjN1pVRkJTeXhMUVVGTExFTkJRVU1zVDBGQlR5eERRVUZETEZsQlFWa3NRMEZCUXl4SFFVRkhMRVZCUVVVc1MwRkJTeXhEUVVGRE8wdEJRVUVzUTBGQlF5eERRVUZETzBOQlEzUkhMRU5CUVVNN08wRkJSVVlzWVVGQllTeERRVUZETEVsQlFVa3NSMEZCUnl4VlFVRkRMRXRCUVVzc1JVRkJTenRCUVVNMVFpeFRRVUZMTEVOQlFVTXNWVUZCVlN4SFFVRkhMRXRCUVVzc1EwRkJReXhQUVVGUExFTkJRVU1zWTBGQll5eEZRVUZGTEVOQlFVTTdRVUZEYkVRc2EwSkJRVlVzU1VGQlNTeERRVUZETEV0QlFVc3NRMEZCUXl4RFFVRkRPME5CUTNwQ0xFTkJRVU03TzBGQlJVWXNZVUZCWVN4RFFVRkRMRkZCUVZFc2NVSkJRVmNzUTBGQlF6dEJRVU5zUXl4aFFVRmhMRU5CUVVNc1dVRkJXU3g1UWtGQlpTeERRVUZET3p0clFrRkZNMElzWVVGQllTSXNJbVpwYkdVaU9pSnpkbWN0Y0dGMGFDNXFjeUlzSW5OdmRYSmpaWE5EYjI1MFpXNTBJanBiSW1sdGNHOXlkQ0JpZFdsc1pDQm1jbTl0SUNjdUwzTjJaeTF3WVhSb0wySjFhV3hrSnp0Y2JtbHRjRzl5ZENCemRHRjBaVTFoY0NCbWNtOXRJQ2N1TDNOMlp5MXdZWFJvTDNOMFlYUmxMVzFoY0NjN1hHNXBiWEJ2Y25RZ2RtRnNkV1ZVZVhCbFRXRndJR1p5YjIwZ0p5NHZjM1puTDNaaGJIVmxMWFI1Y0dVdGJXRndKenRjYm1sdGNHOXlkQ0J5Wlc1a1pYSlRWa2NnWm5KdmJTQW5MaTl6ZG1jbk8xeHVhVzF3YjNKMElIc2daV0ZqYUNCOUlHWnliMjBnSnk0dUwybHVZeTkxZEdsc2N5YzdYRzVjYm1OdmJuTjBJSEpsYm1SbGNsTldSMUJoZEdnZ1BTQW9ZV04wYjNJcElEMCtJSHRjYmlBZ0lDQnlaVzVrWlhKVFZrY29ZV04wYjNJcE8xeHVJQ0FnSUdWaFkyZ29ZblZwYkdRb1lXTjBiM0l1YzNSaGRHVXNJR0ZqZEc5eUxuQmhkR2hNWlc1bmRHZ3BMQ0FvZG1Gc2RXVXNJR3RsZVNrZ1BUNGdZV04wYjNJdVpXeGxiV1Z1ZEM1elpYUkJkSFJ5YVdKMWRHVW9hMlY1TENCMllXeDFaU2twTzF4dWZUdGNibHh1Y21WdVpHVnlVMVpIVUdGMGFDNXBibWwwSUQwZ0tHRmpkRzl5S1NBOVBpQjdYRzRnSUNBZ1lXTjBiM0l1Y0dGMGFFeGxibWQwYUNBOUlHRmpkRzl5TG1Wc1pXMWxiblF1WjJWMFZHOTBZV3hNWlc1bmRHZ29LVHRjYmlBZ0lDQnlaVzVrWlhKVFZrY3VhVzVwZENoaFkzUnZjaWs3WEc1OU8xeHVYRzV5Wlc1a1pYSlRWa2RRWVhSb0xuTjBZWFJsVFdGd0lEMGdjM1JoZEdWTllYQTdYRzV5Wlc1a1pYSlRWa2RRWVhSb0xuWmhiSFZsVkhsd1pVMWhjQ0E5SUhaaGJIVmxWSGx3WlUxaGNEdGNibHh1Wlhod2IzSjBJR1JsWm1GMWJIUWdjbVZ1WkdWeVUxWkhVR0YwYURzaVhYMD1cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL3JlbmRlci9zdmctcGF0aC5qc1xuICoqIG1vZHVsZSBpZCA9IDEzXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzLnN0ZXBQcm9ncmVzcyA9IGV4cG9ydHMuc3BlZWRQZXJTZWNvbmQgPSBleHBvcnRzLnNwZWVkUGVyRnJhbWUgPSBleHBvcnRzLnNtb290aCA9IGV4cG9ydHMucmVzdHJpY3QgPSBleHBvcnRzLnJlbGF0aXZlVmFsdWUgPSBleHBvcnRzLnJhbmRvbSA9IGV4cG9ydHMucmFkaWFuc1RvRGVncmVlcyA9IGV4cG9ydHMucG9pbnRGcm9tQW5nbGVBbmREaXN0YW5jZSA9IGV4cG9ydHMub2Zmc2V0ID0gZXhwb3J0cy5nZXRQcm9ncmVzc0Zyb21WYWx1ZSA9IGV4cG9ydHMuZ2V0VmFsdWVGcm9tUHJvZ3Jlc3MgPSBleHBvcnRzLmh5cG90ZW51c2UgPSBleHBvcnRzLmRpc3RhbmNlID0gZXhwb3J0cy5kaWxhdGUgPSBleHBvcnRzLmRlZ3JlZXNUb1JhZGlhbnMgPSBleHBvcnRzLmFuZ2xlID0gdW5kZWZpbmVkO1xuXG52YXIgX3V0aWxzID0gcmVxdWlyZSgnLi91dGlscycpO1xuXG52YXIgWkVST19QT0lOVCA9IHtcbiAgICB4OiAwLFxuICAgIHk6IDAsXG4gICAgejogMFxufTtcblxudmFyIGRpc3RhbmNlMUQgPSBmdW5jdGlvbiAoYSwgYikge1xuICAgIHJldHVybiBNYXRoLmFicyhhIC0gYik7XG59O1xuXG4vKlxuICAgIEFuZ2xlIGJldHdlZW4gcG9pbnRzXG4gICAgXG4gICAgVHJhbnNsYXRlcyB0aGUgaHlwb3RoZXRpY2FsIGxpbmUgc28gdGhhdCB0aGUgJ2Zyb20nIGNvb3JkaW5hdGVzXG4gICAgYXJlIGF0IDAsMCwgdGhlbiByZXR1cm4gdGhlIGFuZ2xlIHVzaW5nIC5hbmdsZUZyb21DZW50ZXIoKVxuICAgIFxuICAgIEBwYXJhbSBbb2JqZWN0XTogWCBhbmQgWSBjb29yZGluYXRlcyBvZiBmcm9tIHBvaW50XG4gICAgQHBhcmFtIFtvYmplY3RdOiBYIGFuZCBZIGNvcmRpbmF0ZXMgb2YgdG8gcG9pbnRcbiAgICBAcmV0dXJuIFtyYWRpYW5dOiBBbmdsZSBiZXR3ZWVuIHRoZSB0d28gcG9pbnRzIGluIHJhZGlhbnNcbiovXG52YXIgYW5nbGUgPSBleHBvcnRzLmFuZ2xlID0gZnVuY3Rpb24gKGEpIHtcbiAgICB2YXIgYiA9IGFyZ3VtZW50cy5sZW5ndGggPD0gMSB8fCBhcmd1bWVudHNbMV0gPT09IHVuZGVmaW5lZCA/IFpFUk9fUE9JTlQgOiBhcmd1bWVudHNbMV07XG4gICAgcmV0dXJuIHJhZGlhbnNUb0RlZ3JlZXMoTWF0aC5hdGFuMihhLnggLSBiLngsIGEueSAtIGIueSkpO1xufTtcblxuLypcbiAgICBDb252ZXJ0IGRlZ3JlZXMgdG8gcmFkaWFuc1xuICAgIFxuICAgIEBwYXJhbSBbbnVtYmVyXTogVmFsdWUgaW4gZGVncmVlc1xuICAgIEByZXR1cm4gW251bWJlcl06IFZhbHVlIGluIHJhZGlhbnNcbiovXG52YXIgZGVncmVlc1RvUmFkaWFucyA9IGV4cG9ydHMuZGVncmVlc1RvUmFkaWFucyA9IGZ1bmN0aW9uIChkZWdyZWVzKSB7XG4gICAgcmV0dXJuIGRlZ3JlZXMgKiBNYXRoLlBJIC8gMTgwO1xufTtcblxuLypcbiAgICBEaWxhdGVcbiAgICBcbiAgICBDaGFuZ2UgdGhlIHByb2dyZXNzaW9uIGJldHdlZW4gYSBhbmQgYiBhY2NvcmRpbmcgdG8gZGlsYXRpb24uXG4gICAgXG4gICAgU28gZGlsYXRpb24gPSAwLjUgd291bGQgY2hhbmdlXG4gICAgXG4gICAgYSAtLS0tLS0tLS0gYlxuICAgIFxuICAgIHRvXG4gICAgXG4gICAgYSAtLS0tIGJcbiAgICBcbiAgICBAcGFyYW0gW251bWJlcl06IFByZXZpb3VzIHZhbHVlXG4gICAgQHBhcmFtIFtudW1iZXJdOiBDdXJyZW50IHZhbHVlXG4gICAgQHBhcmFtIFtudW1iZXJdOiBEaWxhdGUgcHJvZ3Jlc3MgYnkgeFxuICAgIEByZXR1cm4gW251bWJlcl06IFByZXZpb3VzIHZhbHVlIHBsdXMgdGhlIGRpbGF0ZWQgZGlmZmVyZW5jZVxuKi9cbnZhciBkaWxhdGUgPSBleHBvcnRzLmRpbGF0ZSA9IGZ1bmN0aW9uIChhLCBiLCBkaWxhdGlvbikge1xuICAgIHJldHVybiBhICsgKGIgLSBhKSAqIGRpbGF0aW9uO1xufTtcblxuLypcbiAgICBEaXN0YW5jZVxuICAgIFxuICAgIFJldHVybnMgdGhlIGRpc3RhbmNlIGJldHdlZW4gdHdvIG4gZGltZW5zaW9uYWwgcG9pbnRzLlxuICAgIFxuICAgIEBwYXJhbSBbb2JqZWN0L251bWJlcl06IHggYW5kIHkgb3IganVzdCB4IG9mIHBvaW50IEFcbiAgICBAcGFyYW0gW29iamVjdC9udW1iZXJdOiAob3B0aW9uYWwpOiB4IGFuZCB5IG9yIGp1c3QgeCBvZiBwb2ludCBCXG4gICAgQHJldHVybiBbbnVtYmVyXTogVGhlIGRpc3RhbmNlIGJldHdlZW4gdGhlIHR3byBwb2ludHNcbiovXG52YXIgZGlzdGFuY2UgPSBleHBvcnRzLmRpc3RhbmNlID0gZnVuY3Rpb24gKGEpIHtcbiAgICB2YXIgYiA9IGFyZ3VtZW50cy5sZW5ndGggPD0gMSB8fCBhcmd1bWVudHNbMV0gPT09IHVuZGVmaW5lZCA/IFpFUk9fUE9JTlQgOiBhcmd1bWVudHNbMV07XG5cbiAgICAvLyAxRCBkaW1lbnNpb25zXG4gICAgaWYgKCgwLCBfdXRpbHMuaXNOdW0pKGEpKSB7XG4gICAgICAgIHJldHVybiBkaXN0YW5jZTFEKGEsIGIpO1xuXG4gICAgICAgIC8vIE11bHRpLWRpbWVuc2lvbmFsXG4gICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHZhciB4RGVsdGEgPSBkaXN0YW5jZTFEKGEueCwgYi54KTtcbiAgICAgICAgICAgIHZhciB5RGVsdGEgPSBkaXN0YW5jZTFEKGEueSwgYi55KTtcbiAgICAgICAgICAgIHZhciB6RGVsdGEgPSAoMCwgX3V0aWxzLmlzTnVtKShhLnopID8gZGlzdGFuY2UxRChhLnosIGIueikgOiAwO1xuXG4gICAgICAgICAgICByZXR1cm4gTWF0aC5zcXJ0KE1hdGgucG93KHhEZWx0YSwgMikgKyBNYXRoLnBvdyh5RGVsdGEsIDIpICsgTWF0aC5wb3coekRlbHRhLCAyKSk7XG4gICAgICAgIH1cbn07XG5cbi8qXG4gICAgSHlwb3RlbnVzZVxuICAgIFxuICAgIFJldHVybnMgdGhlIGh5cG90ZW51c2UsIHNpZGUgQywgZ2l2ZW4gdGhlIGxlbmd0aHMgb2Ygc2lkZXMgQSBhbmQgQi5cbiAgICBcbiAgICBAcGFyYW0gW251bWJlcl06IExlbmd0aCBvZiBBXG4gICAgQHBhcmFtIFtudW1iZXJdOiBMZW5ndGggb2YgQlxuICAgIEByZXR1cm4gW251bWJlcl06IExlbmd0aCBvZiBDXG4qL1xudmFyIGh5cG90ZW51c2UgPSBleHBvcnRzLmh5cG90ZW51c2UgPSBmdW5jdGlvbiAoYSwgYikge1xuICAgIHJldHVybiBNYXRoLnNxcnQoYSAqIGEgKyBiICogYik7XG59O1xuXG4vKlxuICAgIFZhbHVlIGluIHJhbmdlIGZyb20gcHJvZ3Jlc3NcbiAgICBcbiAgICBHaXZlbiBhIGxvd2VyIGxpbWl0IGFuZCBhbiB1cHBlciBsaW1pdCwgd2UgcmV0dXJuIHRoZSB2YWx1ZSB3aXRoaW5cbiAgICB0aGF0IHJhbmdlIGFzIGV4cHJlc3NlZCBieSBwcm9ncmVzcyAoYSBudW1iZXIgZnJvbSAwLTEpXG4gICAgXG4gICAgQHBhcmFtIFtudW1iZXJdOiBUaGUgcHJvZ3Jlc3MgYmV0d2VlbiBsb3dlciBhbmQgdXBwZXIgbGltaXRzIGV4cHJlc3NlZCAwLTFcbiAgICBAcGFyYW0gW251bWJlcl06IExvd2VyIGxpbWl0IG9mIHJhbmdlXG4gICAgQHBhcmFtIFtudW1iZXJdOiBVcHBlciBsaW1pdCBvZiByYW5nZVxuICAgIEByZXR1cm4gW251bWJlcl06IFZhbHVlIGFzIGNhbGN1bGF0ZWQgZnJvbSBwcm9ncmVzcyB3aXRoaW4gcmFuZ2UgKG5vdCBsaW1pdGVkIHdpdGhpbiByYW5nZSlcbiovXG52YXIgZ2V0VmFsdWVGcm9tUHJvZ3Jlc3MgPSBleHBvcnRzLmdldFZhbHVlRnJvbVByb2dyZXNzID0gZnVuY3Rpb24gKHByb2dyZXNzLCBmcm9tLCB0bykge1xuICAgIHJldHVybiAtcHJvZ3Jlc3MgKiBmcm9tICsgcHJvZ3Jlc3MgKiB0byArIGZyb207XG59O1xuXG4vKlxuICAgIFByb2dyZXNzIHdpdGhpbiBnaXZlbiByYW5nZVxuICAgIFxuICAgIEdpdmVuIGEgbG93ZXIgbGltaXQgYW5kIGFuIHVwcGVyIGxpbWl0LCB3ZSByZXR1cm4gdGhlIHByb2dyZXNzXG4gICAgKGV4cHJlc3NlZCBhcyBhIG51bWJlciAwLTEpIHJlcHJlc2VudGVkIGJ5IHRoZSBnaXZlbiB2YWx1ZSwgYW5kXG4gICAgbGltaXQgdGhhdCBwcm9ncmVzcyB0byB3aXRoaW4gMC0xLlxuICAgIFxuICAgIEBwYXJhbSBbbnVtYmVyXTogVmFsdWUgdG8gZmluZCBwcm9ncmVzcyB3aXRoaW4gZ2l2ZW4gcmFuZ2VcbiAgICBAcGFyYW0gW251bWJlcl06IExvd2VyIGxpbWl0IFxuICAgIEBwYXJhbSBbbnVtYmVyXTogVXBwZXIgbGltaXRcbiAgICBAcmV0dXJuIFtudW1iZXJdOiBQcm9ncmVzcyBvZiB2YWx1ZSB3aXRoaW4gcmFuZ2UgYXMgZXhwcmVzc2VkIDAtMVxuKi9cbnZhciBnZXRQcm9ncmVzc0Zyb21WYWx1ZSA9IGV4cG9ydHMuZ2V0UHJvZ3Jlc3NGcm9tVmFsdWUgPSBmdW5jdGlvbiAodmFsdWUsIGZyb20sIHRvKSB7XG4gICAgcmV0dXJuICh2YWx1ZSAtIGZyb20pIC8gKHRvIC0gZnJvbSk7XG59O1xuXG4vKlxuICAgIE9mZnNldCBiZXR3ZWVuIHR3byBvYmplY3RzIG9mIG51bWJlcnNcblxuICAgIElmIHByb3BlcnR5IGlzIGZvdW5kIGluIGIgbm90IHByZXNlbnQgaW4gYSwgaXQgd2lsbCByZXR1cm4gYDBgIGZvciB0aGF0IHByb3AuXG4gICAgXG4gICAgQHBhcmFtIFtQb2ludF06IEZpcnN0IG9iamVjdFxuICAgIEBwYXJhbSBbUG9pbnRdOiBTZWNvbmQgb2JqZWN0XG4gICAgQHJldHVybiBbT2Zmc2V0XTogRGlzdGFuY2UgbWV0cmljcyBiZXR3ZWVuIHR3byBwb2ludHNcbiovXG52YXIgb2Zmc2V0ID0gZXhwb3J0cy5vZmZzZXQgPSBmdW5jdGlvbiAoYSwgYikge1xuICAgIHZhciBvZmZzZXQgPSB7fTtcblxuICAgICgwLCBfdXRpbHMuZWFjaCkoYiwgZnVuY3Rpb24gKHZhbHVlLCBrZXkpIHtcbiAgICAgICAgb2Zmc2V0W2tleV0gPSAoMCwgX3V0aWxzLmhhc1Byb3BlcnR5KShhLCBrZXkpID8gdmFsdWUgLSBhW2tleV0gOiAwO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIG9mZnNldDtcbn07XG5cbi8qXG4gICAgUG9pbnQgZnJvbSBhbmdsZSBhbmQgZGlzdGFuY2VcbiAgICBcbiAgICBAcGFyYW0gW29iamVjdF06IDJEIHBvaW50IG9mIG9yaWdpblxuICAgIEBwYXJhbSBbbnVtYmVyXTogQW5nbGUgZnJvbSBvcmlnaW5cbiAgICBAcGFyYW0gW251bWJlcl06IERpc3RhbmNlIGZyb20gb3JpZ2luXG4gICAgQHJldHVybiBbb2JqZWN0XTogQ2FsY3VsYXRlZCAyRCBwb2ludFxuKi9cbnZhciBwb2ludEZyb21BbmdsZUFuZERpc3RhbmNlID0gZXhwb3J0cy5wb2ludEZyb21BbmdsZUFuZERpc3RhbmNlID0gZnVuY3Rpb24gKG9yaWdpbiwgYW5nbGUsIGRpc3RhbmNlKSB7XG4gICAgYW5nbGUgPSBkZWdyZWVzVG9SYWRpYW5zKGFuZ2xlKTtcblxuICAgIHJldHVybiB7XG4gICAgICAgIHg6IGRpc3RhbmNlICogTWF0aC5jb3MoYW5nbGUpICsgb3JpZ2luLngsXG4gICAgICAgIHk6IGRpc3RhbmNlICogTWF0aC5zaW4oYW5nbGUpICsgb3JpZ2luLnlcbiAgICB9O1xufTtcblxuLypcbiAgICBDb252ZXJ0IHJhZGlhbnMgdG8gZGVncmVlc1xuICAgIFxuICAgIEBwYXJhbSBbbnVtYmVyXTogVmFsdWUgaW4gcmFkaWFuc1xuICAgIEByZXR1cm4gW251bWJlcl06IFZhbHVlIGluIGRlZ3JlZXNcbiovXG52YXIgcmFkaWFuc1RvRGVncmVlcyA9IGV4cG9ydHMucmFkaWFuc1RvRGVncmVlcyA9IGZ1bmN0aW9uIChyYWRpYW5zKSB7XG4gICAgcmV0dXJuIHJhZGlhbnMgKiAxODAgLyBNYXRoLlBJO1xufTtcblxuLypcbiAgICBSZXR1cm4gcmFuZG9tIG51bWJlciBiZXR3ZWVuIHJhbmdlXG4gICAgXG4gICAgQHBhcmFtIFtudW1iZXJdIChvcHRpb25hbCk6IE91dHB1dCBtaW5pbXVtXG4gICAgQHBhcmFtIFtudW1iZXJdIChvcHRpb25hbCk6IE91dHB1dCBtYXhpbXVtXG4gICAgQHJldHVybiBbbnVtYmVyXTogUmFuZG9tIG51bWJlciB3aXRoaW4gcmFuZ2UsIG9yIDAgYW5kIDEgaWYgbm9uZSBwcm92aWRlZFxuKi9cbnZhciByYW5kb20gPSBleHBvcnRzLnJhbmRvbSA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgbWluID0gYXJndW1lbnRzLmxlbmd0aCA8PSAwIHx8IGFyZ3VtZW50c1swXSA9PT0gdW5kZWZpbmVkID8gMCA6IGFyZ3VtZW50c1swXTtcbiAgICB2YXIgbWF4ID0gYXJndW1lbnRzLmxlbmd0aCA8PSAxIHx8IGFyZ3VtZW50c1sxXSA9PT0gdW5kZWZpbmVkID8gMSA6IGFyZ3VtZW50c1sxXTtcbiAgICByZXR1cm4gTWF0aC5yYW5kb20oKSAqIChtYXggLSBtaW4pICsgbWluO1xufTtcblxuLypcbiAgICBDYWxjdWxhdGUgcmVsYXRpdmUgdmFsdWVcbiAgICBcbiAgICBUYWtlcyB0aGUgb3BlcmF0b3IgYW5kIHZhbHVlIGZyb20gYSBzdHJpbmcsIGllIFwiKz01XCIsIGFuZCBhcHBsaWVzXG4gICAgdG8gdGhlIGN1cnJlbnQgdmFsdWUgdG8gcmVzb2x2ZSBhIG5ldyB0YXJnZXQuXG4gICAgXG4gICAgQHBhcmFtIFtudW1iZXJdOiBDdXJyZW50IHZhbHVlXG4gICAgQHBhcmFtIFtzdHJpbmddOiBSZWxhdGl2ZSB2YWx1ZVxuICAgIEByZXR1cm4gW251bWJlcl06IE5ldyB2YWx1ZVxuKi9cbnZhciByZWxhdGl2ZVZhbHVlID0gZXhwb3J0cy5yZWxhdGl2ZVZhbHVlID0gZnVuY3Rpb24gKGN1cnJlbnQsIHJlbGF0aXZlKSB7XG4gICAgdmFyIG5ld1ZhbHVlID0gY3VycmVudDtcbiAgICB2YXIgZXF1YXRpb24gPSByZWxhdGl2ZS5zcGxpdCgnPScpO1xuICAgIHZhciBvcGVyYXRvciA9IGVxdWF0aW9uWzBdO1xuXG4gICAgdmFyIF9zcGxpdFZhbHVlVW5pdCA9ICgwLCBfdXRpbHMuc3BsaXRWYWx1ZVVuaXQpKGVxdWF0aW9uWzFdKTtcblxuICAgIHZhciB1bml0ID0gX3NwbGl0VmFsdWVVbml0LnVuaXQ7XG4gICAgdmFyIHZhbHVlID0gX3NwbGl0VmFsdWVVbml0LnZhbHVlO1xuXG4gICAgdmFsdWUgPSBwYXJzZUZsb2F0KHZhbHVlKTtcblxuICAgIHN3aXRjaCAob3BlcmF0b3IpIHtcbiAgICAgICAgY2FzZSAnKyc6XG4gICAgICAgICAgICBuZXdWYWx1ZSArPSB2YWx1ZTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICctJzpcbiAgICAgICAgICAgIG5ld1ZhbHVlIC09IHZhbHVlO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJyonOlxuICAgICAgICAgICAgbmV3VmFsdWUgKj0gdmFsdWU7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnLyc6XG4gICAgICAgICAgICBuZXdWYWx1ZSAvPSB2YWx1ZTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIGlmICh1bml0KSB7XG4gICAgICAgIG5ld1ZhbHVlICs9IHVuaXQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIG5ld1ZhbHVlO1xufTtcblxuLypcbiAgICBSZXN0cmljdCB2YWx1ZSB0byByYW5nZVxuICAgIFxuICAgIFJldHVybiB2YWx1ZSB3aXRoaW4gdGhlIHJhbmdlIG9mIGxvd2VyTGltaXQgYW5kIHVwcGVyTGltaXRcbiAgICBcbiAgICBAcGFyYW0gW251bWJlcl06IFZhbHVlIHRvIGtlZXAgd2l0aGluIHJhbmdlXG4gICAgQHBhcmFtIFtudW1iZXJdOiBMb3dlciBsaW1pdCBvZiByYW5nZVxuICAgIEBwYXJhbSBbbnVtYmVyXTogVXBwZXIgbGltaXQgb2YgcmFuZ2VcbiAgICBAcmV0dXJuIFtudW1iZXJdOiBWYWx1ZSBhcyBsaW1pdGVkIHdpdGhpbiBnaXZlbiByYW5nZVxuKi9cbnZhciByZXN0cmljdCA9IGV4cG9ydHMucmVzdHJpY3QgPSBmdW5jdGlvbiAodmFsdWUsIG1pbiwgbWF4KSB7XG4gICAgcmV0dXJuIE1hdGgubWF4KE1hdGgubWluKHZhbHVlLCBtYXgpLCBtaW4pO1xufTtcblxuLypcbiAgICBGcmFtZXJhdGUtaW5kZXBlbmRlbnQgc21vb3RoaW5nXG5cbiAgICBAcGFyYW0gW251bWJlcl06IE5ldyB2YWx1ZVxuICAgIEBwYXJhbSBbbnVtYmVyXTogT2xkIHZhbHVlXG4gICAgQHBhcmFtIFtudW1iZXJdOiBGcmFtZSBkdXJhdGlvblxuICAgIEBwYXJhbSBbbnVtYmVyXSAob3B0aW9uYWwpOiBTbW9vdGhpbmcgKDAgaXMgbm9uZSlcbiovXG52YXIgc21vb3RoID0gZXhwb3J0cy5zbW9vdGggPSBmdW5jdGlvbiAobmV3VmFsdWUsIG9sZFZhbHVlLCBkdXJhdGlvbikge1xuICAgIHZhciBzbW9vdGhpbmcgPSBhcmd1bWVudHMubGVuZ3RoIDw9IDMgfHwgYXJndW1lbnRzWzNdID09PSB1bmRlZmluZWQgPyAwIDogYXJndW1lbnRzWzNdO1xuICAgIHJldHVybiAoMCwgX3V0aWxzLnRvRGVjaW1hbCkob2xkVmFsdWUgKyBkdXJhdGlvbiAqIChuZXdWYWx1ZSAtIG9sZFZhbHVlKSAvIE1hdGgubWF4KHNtb290aGluZywgZHVyYXRpb24pKTtcbn07XG5cbi8qXG4gICAgQ29udmVydCB4IHBlciBzZWNvbmQgdG8gcGVyIGZyYW1lIHZlbG9jaXR5IGJhc2VkIG9uIGZwc1xuICAgIFxuICAgIEBwYXJhbSBbbnVtYmVyXTogVW5pdCBwZXIgc2Vjb25kXG4gICAgQHBhcmFtIFtudW1iZXJdOiBGcmFtZSBkdXJhdGlvbiBpbiBtc1xuKi9cbnZhciBzcGVlZFBlckZyYW1lID0gZXhwb3J0cy5zcGVlZFBlckZyYW1lID0gZnVuY3Rpb24gKHhwcywgZnJhbWVEdXJhdGlvbikge1xuICAgIHJldHVybiAoMCwgX3V0aWxzLmlzTnVtKSh4cHMpID8geHBzIC8gKDEwMDAgLyBmcmFtZUR1cmF0aW9uKSA6IDA7XG59O1xuXG4vKlxuICAgIENvbnZlcnQgdmVsb2NpdHkgaW50byB2ZWxpY2l0eSBwZXIgc2Vjb25kXG4gICAgXG4gICAgQHBhcmFtIFtudW1iZXJdOiBVbml0IHBlciBmcmFtZVxuICAgIEBwYXJhbSBbbnVtYmVyXTogRnJhbWUgZHVyYXRpb24gaW4gbXNcbiovXG52YXIgc3BlZWRQZXJTZWNvbmQgPSBleHBvcnRzLnNwZWVkUGVyU2Vjb25kID0gZnVuY3Rpb24gKHZlbG9jaXR5LCBmcmFtZUR1cmF0aW9uKSB7XG4gICAgcmV0dXJuIHZlbG9jaXR5ICogKDEwMDAgLyBmcmFtZUR1cmF0aW9uKTtcbn07XG5cbi8qXG4gICAgQ3JlYXRlIHN0ZXBwZWQgdmVyc2lvbiBvZiAwLTEgcHJvZ3Jlc3NcbiAgICBcbiAgICBAcGFyYW0gW251bWJlcl06IEN1cnJlbnQgdmFsdWVcbiAgICBAcGFyYW0gW2ludF06IE51bWJlciBvZiBzdGVwc1xuICAgIEByZXR1cm4gW251bWJlcl06IFN0ZXBwZWQgdmFsdWVcbiovXG52YXIgc3RlcFByb2dyZXNzID0gZXhwb3J0cy5zdGVwUHJvZ3Jlc3MgPSBmdW5jdGlvbiAocHJvZ3Jlc3MsIHN0ZXBzKSB7XG4gICAgdmFyIHNlZ21lbnQgPSAxIC8gKHN0ZXBzIC0gMSk7XG4gICAgdmFyIHRhcmdldCA9IDEgLSAxIC8gc3RlcHM7XG4gICAgdmFyIHByb2dyZXNzT2ZUYXJnZXQgPSBNYXRoLm1pbihwcm9ncmVzcyAvIHRhcmdldCwgMSk7XG5cbiAgICByZXR1cm4gTWF0aC5mbG9vcihwcm9ncmVzc09mVGFyZ2V0IC8gc2VnbWVudCkgKiBzZWdtZW50O1xufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbU5oYkdNdWFuTWlYU3dpYm1GdFpYTWlPbHRkTENKdFlYQndhVzVuY3lJNklqczdPenM3T3p0QlFWRkJMRWxCUVUwc1ZVRkJWU3hIUVVGSE8wRkJRMllzUzBGQlF5eEZRVUZGTEVOQlFVTTdRVUZEU2l4TFFVRkRMRVZCUVVVc1EwRkJRenRCUVVOS0xFdEJRVU1zUlVGQlJTeERRVUZETzBOQlExQXNRMEZCUXpzN1FVRkZSaXhKUVVGTkxGVkJRVlVzUjBGQlJ5eFZRVUZETEVOQlFVTXNSVUZCUlN4RFFVRkRPMWRCUVVzc1NVRkJTU3hEUVVGRExFZEJRVWNzUTBGQlF5eERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRPME5CUVVFN096czdPenM3T3pzN096dEJRVUZETEVGQldYUkRMRWxCUVUwc1MwRkJTeXhYUVVGTUxFdEJRVXNzUjBGQlJ5eFZRVUZETEVOQlFVTTdVVUZCUlN4RFFVRkRMSGxFUVVGSExGVkJRVlU3VjBGQlN5eG5Ra0ZCWjBJc1EwRkJReXhKUVVGSkxFTkJRVU1zUzBGQlN5eERRVUZETEVOQlFVTXNRMEZCUXl4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRExFTkJRVU1zUlVGQlJTeERRVUZETEVOQlFVTXNRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF6dERRVUZCT3pzN096czdPenRCUVVGRExFRkJVWGhHTEVsQlFVMHNaMEpCUVdkQ0xGZEJRV2hDTEdkQ1FVRm5RaXhIUVVGSExGVkJRVU1zVDBGQlR6dFhRVUZMTEU5QlFVOHNSMEZCUnl4SlFVRkpMRU5CUVVNc1JVRkJSU3hIUVVGSExFZEJRVWM3UTBGQlFUczdPenM3T3pzN096czdPenM3T3pzN096czdRVUZCUXl4QlFXOUNPVVFzU1VGQlRTeE5RVUZOTEZkQlFVNHNUVUZCVFN4SFFVRkhMRlZCUVVNc1EwRkJReXhGUVVGRkxFTkJRVU1zUlVGQlJTeFJRVUZSTzFkQlFVc3NRMEZCUXl4SFFVRkpMRU5CUVVNc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlFTeEhRVUZKTEZGQlFWRXNRVUZCUXp0RFFVRkJPenM3T3pzN096czdPenRCUVVGRExFRkJWelZFTEVsQlFVMHNVVUZCVVN4WFFVRlNMRkZCUVZFc1IwRkJSeXhWUVVGRExFTkJRVU1zUlVGQmNVSTdVVUZCYmtJc1EwRkJReXg1UkVGQlJ5eFZRVUZWT3pzN1FVRkZkRU1zVVVGQlNTeFhRV2hGU2l4TFFVRkxMRVZCWjBWTExFTkJRVU1zUTBGQlF5eEZRVUZGTzBGQlExWXNaVUZCVHl4VlFVRlZMRU5CUVVNc1EwRkJReXhGUVVGRkxFTkJRVU1zUTBGQlF6czdPMEZCUVVNc1MwRkhNMElzVFVGQlRUdEJRVU5JTEdkQ1FVRk5MRTFCUVUwc1IwRkJSeXhWUVVGVkxFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNSVUZCUlN4RFFVRkRMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU03UVVGRGNFTXNaMEpCUVUwc1RVRkJUU3hIUVVGSExGVkJRVlVzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4RlFVRkZMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF6dEJRVU53UXl4blFrRkJUU3hOUVVGTkxFZEJRVWNzUVVGQlF5eFhRWFpGY0VJc1MwRkJTeXhGUVhWRmNVSXNRMEZCUXl4RFFVRkRMRU5CUVVNc1EwRkJReXhIUVVGSkxGVkJRVlVzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXl4RlFVRkZMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTTdPMEZCUlhaRUxHMUNRVUZQTEVsQlFVa3NRMEZCUXl4SlFVRkpMRU5CUVVNc1UwRkJReXhOUVVGTkxFVkJRVWtzUTBGQlF5eGhRVUZMTEUxQlFVMHNSVUZCU1N4RFFVRkRMRU5CUVVNc1dVRkJTU3hOUVVGTkxFVkJRVWtzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXp0VFFVTnVSVHREUVVOS096czdPenM3T3pzN096dEJRVUZETEVGQlYwc3NTVUZCVFN4VlFVRlZMRmRCUVZZc1ZVRkJWU3hIUVVGSExGVkJRVU1zUTBGQlF5eEZRVUZGTEVOQlFVTTdWMEZCU3l4SlFVRkpMRU5CUVVNc1NVRkJTU3hEUVVGRExFRkJRVU1zUTBGQlF5eEhRVUZITEVOQlFVTXNSMEZCU3l4RFFVRkRMRWRCUVVjc1EwRkJReXhCUVVGRExFTkJRVU03UTBGQlFUczdPenM3T3pzN096czdPenRCUVVGRExFRkJZVEZFTEVsQlFVMHNiMEpCUVc5Q0xGZEJRWEJDTEc5Q1FVRnZRaXhIUVVGSExGVkJRVU1zVVVGQlVTeEZRVUZGTEVsQlFVa3NSVUZCUlN4RlFVRkZPMWRCUVVzc1FVRkJReXhEUVVGRkxGRkJRVkVzUjBGQlJ5eEpRVUZKTEVkQlFVc3NVVUZCVVN4SFFVRkhMRVZCUVVVc1FVRkJReXhIUVVGSExFbEJRVWs3UTBGQlFUczdPenM3T3pzN096czdPenM3UVVGQlF5eEJRV05zUnl4SlFVRk5MRzlDUVVGdlFpeFhRVUZ3UWl4dlFrRkJiMElzUjBGQlJ5eFZRVUZETEV0QlFVc3NSVUZCUlN4SlFVRkpMRVZCUVVVc1JVRkJSVHRYUVVGTExFTkJRVU1zUzBGQlN5eEhRVUZITEVsQlFVa3NRMEZCUVN4SlFVRkxMRVZCUVVVc1IwRkJSeXhKUVVGSkxFTkJRVUVzUVVGQlF6dERRVUZCT3pzN096czdPenM3T3p0QlFVRkRMRUZCVnk5RkxFbEJRVTBzVFVGQlRTeFhRVUZPTEUxQlFVMHNSMEZCUnl4VlFVRkRMRU5CUVVNc1JVRkJSU3hEUVVGRExFVkJRVXM3UVVGRE5VSXNVVUZCVFN4TlFVRk5MRWRCUVVjc1JVRkJSU3hEUVVGRE96dEJRVVZzUWl4bFFXcEpRU3hKUVVGSkxFVkJhVWxETEVOQlFVTXNSVUZCUlN4VlFVRkRMRXRCUVVzc1JVRkJSU3hIUVVGSExFVkJRVXM3UVVGRGNFSXNZMEZCVFN4RFFVRkRMRWRCUVVjc1EwRkJReXhIUVVGSExGZEJha2xzUWl4WFFVRlhMRVZCYVVsdFFpeERRVUZETEVWQlFVVXNSMEZCUnl4RFFVRkRMRWRCUVVjc1MwRkJTeXhIUVVGSExFTkJRVU1zUTBGQlF5eEhRVUZITEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNN1MwRkRNVVFzUTBGQlF5eERRVUZET3p0QlFVVklMRmRCUVU4c1RVRkJUU3hEUVVGRE8wTkJRMnBDT3pzN096czdPenM3TzBGQlFVTXNRVUZWU3l4SlFVRk5MSGxDUVVGNVFpeFhRVUY2UWl4NVFrRkJlVUlzUjBGQlJ5eFZRVUZETEUxQlFVMHNSVUZCUlN4TFFVRkxMRVZCUVVVc1VVRkJVU3hGUVVGTE8wRkJRMnhGTEZOQlFVc3NSMEZCUnl4blFrRkJaMElzUTBGQlF5eExRVUZMTEVOQlFVTXNRMEZCUXpzN1FVRkZhRU1zVjBGQlR6dEJRVU5JTEZOQlFVTXNSVUZCUlN4UlFVRlJMRWRCUVVjc1NVRkJTU3hEUVVGRExFZEJRVWNzUTBGQlF5eExRVUZMTEVOQlFVTXNSMEZCUnl4TlFVRk5MRU5CUVVNc1EwRkJRenRCUVVONFF5eFRRVUZETEVWQlFVVXNVVUZCVVN4SFFVRkhMRWxCUVVrc1EwRkJReXhIUVVGSExFTkJRVU1zUzBGQlN5eERRVUZETEVkQlFVY3NUVUZCVFN4RFFVRkRMRU5CUVVNN1MwRkRNME1zUTBGQlF6dERRVU5NT3pzN096czdPenRCUVVGRExFRkJVVXNzU1VGQlRTeG5Ra0ZCWjBJc1YwRkJhRUlzWjBKQlFXZENMRWRCUVVjc1ZVRkJReXhQUVVGUE8xZEJRVXNzVDBGQlR5eEhRVUZITEVkQlFVY3NSMEZCUnl4SlFVRkpMRU5CUVVNc1JVRkJSVHREUVVGQk96czdPenM3T3pzN1FVRkJReXhCUVZNNVJDeEpRVUZOTEUxQlFVMHNWMEZCVGl4TlFVRk5MRWRCUVVjN1VVRkJReXhIUVVGSExIbEVRVUZITEVOQlFVTTdVVUZCUlN4SFFVRkhMSGxFUVVGSExFTkJRVU03VjBGQlN5eEpRVUZKTEVOQlFVTXNUVUZCVFN4RlFVRkZMRWxCUVVrc1IwRkJSeXhIUVVGSExFZEJRVWNzUTBGQlFTeEJRVUZETEVkQlFVY3NSMEZCUnp0RFFVRkJPenM3T3pzN096czdPenM3UVVGQlF5eEJRVmwyUlN4SlFVRk5MR0ZCUVdFc1YwRkJZaXhoUVVGaExFZEJRVWNzVlVGQlF5eFBRVUZQTEVWQlFVVXNVVUZCVVN4RlFVRkxPMEZCUTJoRUxGRkJRVWtzVVVGQlVTeEhRVUZITEU5QlFVOHNRMEZCUXp0QlFVTjJRaXhSUVVGTkxGRkJRVkVzUjBGQlJ5eFJRVUZSTEVOQlFVTXNTMEZCU3l4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRE8wRkJRM0pETEZGQlFVMHNVVUZCVVN4SFFVRkhMRkZCUVZFc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF6czdNRUpCUTFBc1YwRnlUSFJDTEdOQlFXTXNSVUZ4VEhWQ0xGRkJRVkVzUTBGQlF5eERRVUZETEVOQlFVTXNRMEZCUXpzN1VVRkJNME1zU1VGQlNTeHRRa0ZCU2l4SlFVRkpPMUZCUVVVc1MwRkJTeXh0UWtGQlRDeExRVUZMT3p0QlFVVnFRaXhUUVVGTExFZEJRVWNzVlVGQlZTeERRVUZETEV0QlFVc3NRMEZCUXl4RFFVRkRPenRCUVVVeFFpeFpRVUZSTEZGQlFWRTdRVUZEV2l4aFFVRkxMRWRCUVVjN1FVRkRTaXh2UWtGQlVTeEpRVUZKTEV0QlFVc3NRMEZCUXp0QlFVTnNRaXhyUWtGQlRUdEJRVUZCTEVGQlExWXNZVUZCU3l4SFFVRkhPMEZCUTBvc2IwSkJRVkVzU1VGQlNTeExRVUZMTEVOQlFVTTdRVUZEYkVJc2EwSkJRVTA3UVVGQlFTeEJRVU5XTEdGQlFVc3NSMEZCUnp0QlFVTktMRzlDUVVGUkxFbEJRVWtzUzBGQlN5eERRVUZETzBGQlEyeENMR3RDUVVGTk8wRkJRVUVzUVVGRFZpeGhRVUZMTEVkQlFVYzdRVUZEU2l4dlFrRkJVU3hKUVVGSkxFdEJRVXNzUTBGQlF6dEJRVU5zUWl4clFrRkJUVHRCUVVGQkxFdEJRMkk3TzBGQlJVUXNVVUZCU1N4SlFVRkpMRVZCUVVVN1FVRkRUaXhuUWtGQlVTeEpRVUZKTEVsQlFVa3NRMEZCUXp0TFFVTndRanM3UVVGRlJDeFhRVUZQTEZGQlFWRXNRMEZCUXp0RFFVTnVRanM3T3pzN096czdPenM3TzBGQlFVTXNRVUZaU3l4SlFVRk5MRkZCUVZFc1YwRkJVaXhSUVVGUkxFZEJRVWNzVlVGQlF5eExRVUZMTEVWQlFVVXNSMEZCUnl4RlFVRkZMRWRCUVVjN1YwRkJTeXhKUVVGSkxFTkJRVU1zUjBGQlJ5eERRVUZETEVsQlFVa3NRMEZCUXl4SFFVRkhMRU5CUVVNc1MwRkJTeXhGUVVGRkxFZEJRVWNzUTBGQlF5eEZRVUZGTEVkQlFVY3NRMEZCUXp0RFFVRkJPenM3T3pzN096czdPMEZCUVVNc1FVRlZNVVVzU1VGQlRTeE5RVUZOTEZkQlFVNHNUVUZCVFN4SFFVRkhMRlZCUVVNc1VVRkJVU3hGUVVGRkxGRkJRVkVzUlVGQlJTeFJRVUZSTzFGQlFVVXNVMEZCVXl4NVJFRkJSeXhEUVVGRE8xZEJRVXNzVjBGc1QyNUZMRk5CUVZNc1JVRnJUMjlGTEZGQlFWRXNSMEZCU1N4UlFVRlJMRWxCUVVrc1VVRkJVU3hIUVVGSExGRkJRVkVzUTBGQlFTeEJRVUZETEVkQlFVY3NTVUZCU1N4RFFVRkRMRWRCUVVjc1EwRkJReXhUUVVGVExFVkJRVVVzVVVGQlVTeERRVUZETEVGQlFVTXNRMEZCUXp0RFFVRkJPenM3T3pzN096dEJRVUZETEVGQlVYcEtMRWxCUVUwc1lVRkJZU3hYUVVGaUxHRkJRV0VzUjBGQlJ5eFZRVUZETEVkQlFVY3NSVUZCUlN4aFFVRmhPMWRCUVVzc1FVRkJReXhYUVRWUGJFUXNTMEZCU3l4RlFUUlBiVVFzUjBGQlJ5eERRVUZETEVkQlFVa3NSMEZCUnl4SlFVRkpMRWxCUVVrc1IwRkJSeXhoUVVGaExFTkJRVUVzUVVGQlF5eEhRVUZITEVOQlFVTTdRMEZCUVRzN096czdPenM3UVVGQlF5eEJRVkU1Uml4SlFVRk5MR05CUVdNc1YwRkJaQ3hqUVVGakxFZEJRVWNzVlVGQlF5eFJRVUZSTEVWQlFVVXNZVUZCWVR0WFFVRkxMRkZCUVZFc1NVRkJTU3hKUVVGSkxFZEJRVWNzWVVGQllTeERRVUZCTEVGQlFVTTdRMEZCUVRzN096czdPenM3TzBGQlFVTXNRVUZUZEVZc1NVRkJUU3haUVVGWkxGZEJRVm9zV1VGQldTeEhRVUZITEZWQlFVTXNVVUZCVVN4RlFVRkZMRXRCUVVzc1JVRkJTenRCUVVNM1F5eFJRVUZOTEU5QlFVOHNSMEZCUnl4RFFVRkRMRWxCUVVrc1MwRkJTeXhIUVVGSExFTkJRVU1zUTBGQlFTeEJRVUZETEVOQlFVTTdRVUZEYUVNc1VVRkJUU3hOUVVGTkxFZEJRVWNzUTBGQlF5eEhRVUZKTEVOQlFVTXNSMEZCUnl4TFFVRkxMRUZCUVVNc1EwRkJRenRCUVVNdlFpeFJRVUZOTEdkQ1FVRm5RaXhIUVVGSExFbEJRVWtzUTBGQlF5eEhRVUZITEVOQlFVTXNVVUZCVVN4SFFVRkhMRTFCUVUwc1JVRkJSU3hEUVVGRExFTkJRVU1zUTBGQlF6czdRVUZGZUVRc1YwRkJUeXhKUVVGSkxFTkJRVU1zUzBGQlN5eERRVUZETEdkQ1FVRm5RaXhIUVVGSExFOUJRVThzUTBGQlF5eEhRVUZITEU5QlFVOHNRMEZCUXp0RFFVTXpSQ3hEUVVGRElpd2labWxzWlNJNkltTmhiR011YW5NaUxDSnpiM1Z5WTJWelEyOXVkR1Z1ZENJNld5SnBiWEJ2Y25RZ2UxeHVJQ0FnSUdWaFkyZ3NYRzRnSUNBZ2FHRnpVSEp2Y0dWeWRIa3NYRzRnSUNBZ2FYTk9kVzBzWEc0Z0lDQWdjM0JzYVhSV1lXeDFaVlZ1YVhRc1hHNGdJQ0FnZEc5RVpXTnBiV0ZzWEc1OUlHWnliMjBnSnk0dmRYUnBiSE1uTzF4dVhHNWpiMjV6ZENCYVJWSlBYMUJQU1U1VUlEMGdlMXh1SUNBZ0lIZzZJREFzWEc0Z0lDQWdlVG9nTUN4Y2JpQWdJQ0I2T2lBd1hHNTlPMXh1WEc1amIyNXpkQ0JrYVhOMFlXNWpaVEZFSUQwZ0tHRXNJR0lwSUQwK0lFMWhkR2d1WVdKektHRWdMU0JpS1R0Y2JseHVMeXBjYmlBZ0lDQkJibWRzWlNCaVpYUjNaV1Z1SUhCdmFXNTBjMXh1SUNBZ0lGeHVJQ0FnSUZSeVlXNXpiR0YwWlhNZ2RHaGxJR2g1Y0c5MGFHVjBhV05oYkNCc2FXNWxJSE52SUhSb1lYUWdkR2hsSUNkbWNtOXRKeUJqYjI5eVpHbHVZWFJsYzF4dUlDQWdJR0Z5WlNCaGRDQXdMREFzSUhSb1pXNGdjbVYwZFhKdUlIUm9aU0JoYm1kc1pTQjFjMmx1WnlBdVlXNW5iR1ZHY205dFEyVnVkR1Z5S0NsY2JpQWdJQ0JjYmlBZ0lDQkFjR0Z5WVcwZ1cyOWlhbVZqZEYwNklGZ2dZVzVrSUZrZ1kyOXZjbVJwYm1GMFpYTWdiMllnWm5KdmJTQndiMmx1ZEZ4dUlDQWdJRUJ3WVhKaGJTQmJiMkpxWldOMFhUb2dXQ0JoYm1RZ1dTQmpiM0prYVc1aGRHVnpJRzltSUhSdklIQnZhVzUwWEc0Z0lDQWdRSEpsZEhWeWJpQmJjbUZrYVdGdVhUb2dRVzVuYkdVZ1ltVjBkMlZsYmlCMGFHVWdkSGR2SUhCdmFXNTBjeUJwYmlCeVlXUnBZVzV6WEc0cUwxeHVaWGh3YjNKMElHTnZibk4wSUdGdVoyeGxJRDBnS0dFc0lHSWdQU0JhUlZKUFgxQlBTVTVVS1NBOVBpQnlZV1JwWVc1elZHOUVaV2R5WldWektFMWhkR2d1WVhSaGJqSW9ZUzU0SUMwZ1lpNTRMQ0JoTG5rZ0xTQmlMbmtwS1R0Y2JseHVMeXBjYmlBZ0lDQkRiMjUyWlhKMElHUmxaM0psWlhNZ2RHOGdjbUZrYVdGdWMxeHVJQ0FnSUZ4dUlDQWdJRUJ3WVhKaGJTQmJiblZ0WW1WeVhUb2dWbUZzZFdVZ2FXNGdaR1ZuY21WbGMxeHVJQ0FnSUVCeVpYUjFjbTRnVzI1MWJXSmxjbDA2SUZaaGJIVmxJR2x1SUhKaFpHbGhibk5jYmlvdlhHNWxlSEJ2Y25RZ1kyOXVjM1FnWkdWbmNtVmxjMVJ2VW1Ga2FXRnVjeUE5SUNoa1pXZHlaV1Z6S1NBOVBpQmtaV2R5WldWeklDb2dUV0YwYUM1UVNTQXZJREU0TUR0Y2JseHVMeXBjYmlBZ0lDQkVhV3hoZEdWY2JpQWdJQ0JjYmlBZ0lDQkRhR0Z1WjJVZ2RHaGxJSEJ5YjJkeVpYTnphVzl1SUdKbGRIZGxaVzRnWVNCaGJtUWdZaUJoWTJOdmNtUnBibWNnZEc4Z1pHbHNZWFJwYjI0dVhHNGdJQ0FnWEc0Z0lDQWdVMjhnWkdsc1lYUnBiMjRnUFNBd0xqVWdkMjkxYkdRZ1kyaGhibWRsWEc0Z0lDQWdYRzRnSUNBZ1lTQXRMUzB0TFMwdExTMGdZbHh1SUNBZ0lGeHVJQ0FnSUhSdlhHNGdJQ0FnWEc0Z0lDQWdZU0F0TFMwdElHSmNiaUFnSUNCY2JpQWdJQ0JBY0dGeVlXMGdXMjUxYldKbGNsMDZJRkJ5WlhacGIzVnpJSFpoYkhWbFhHNGdJQ0FnUUhCaGNtRnRJRnR1ZFcxaVpYSmRPaUJEZFhKeVpXNTBJSFpoYkhWbFhHNGdJQ0FnUUhCaGNtRnRJRnR1ZFcxaVpYSmRPaUJFYVd4aGRHVWdjSEp2WjNKbGMzTWdZbmtnZUZ4dUlDQWdJRUJ5WlhSMWNtNGdXMjUxYldKbGNsMDZJRkJ5WlhacGIzVnpJSFpoYkhWbElIQnNkWE1nZEdobElHUnBiR0YwWldRZ1pHbG1abVZ5Wlc1alpWeHVLaTljYm1WNGNHOXlkQ0JqYjI1emRDQmthV3hoZEdVZ1BTQW9ZU3dnWWl3Z1pHbHNZWFJwYjI0cElEMCtJR0VnS3lBb0tHSWdMU0JoS1NBcUlHUnBiR0YwYVc5dUtUdGNibHh1THlwY2JpQWdJQ0JFYVhOMFlXNWpaVnh1SUNBZ0lGeHVJQ0FnSUZKbGRIVnlibk1nZEdobElHUnBjM1JoYm1ObElHSmxkSGRsWlc0Z2RIZHZJRzRnWkdsdFpXNXphVzl1WVd3Z2NHOXBiblJ6TGx4dUlDQWdJRnh1SUNBZ0lFQndZWEpoYlNCYmIySnFaV04wTDI1MWJXSmxjbDA2SUhnZ1lXNWtJSGtnYjNJZ2FuVnpkQ0I0SUc5bUlIQnZhVzUwSUVGY2JpQWdJQ0JBY0dGeVlXMGdXMjlpYW1WamRDOXVkVzFpWlhKZE9pQW9iM0IwYVc5dVlXd3BPaUI0SUdGdVpDQjVJRzl5SUdwMWMzUWdlQ0J2WmlCd2IybHVkQ0JDWEc0Z0lDQWdRSEpsZEhWeWJpQmJiblZ0WW1WeVhUb2dWR2hsSUdScGMzUmhibU5sSUdKbGRIZGxaVzRnZEdobElIUjNieUJ3YjJsdWRITmNiaW92WEc1bGVIQnZjblFnWTI5dWMzUWdaR2x6ZEdGdVkyVWdQU0FvWVN3Z1lpQTlJRnBGVWs5ZlVFOUpUbFFwSUQwK0lIdGNiaUFnSUNBdkx5QXhSQ0JrYVcxbGJuTnBiMjV6WEc0Z0lDQWdhV1lnS0dselRuVnRLR0VwS1NCN1hHNGdJQ0FnSUNBZ0lISmxkSFZ5YmlCa2FYTjBZVzVqWlRGRUtHRXNJR0lwTzF4dVhHNGdJQ0FnTHk4Z1RYVnNkR2t0WkdsdFpXNXphVzl1WVd4Y2JpQWdJQ0I5SUdWc2MyVWdlMXh1SUNBZ0lDQWdJQ0JqYjI1emRDQjRSR1ZzZEdFZ1BTQmthWE4wWVc1alpURkVLR0V1ZUN3Z1lpNTRLVHRjYmlBZ0lDQWdJQ0FnWTI5dWMzUWdlVVJsYkhSaElEMGdaR2x6ZEdGdVkyVXhSQ2hoTG5rc0lHSXVlU2s3WEc0Z0lDQWdJQ0FnSUdOdmJuTjBJSHBFWld4MFlTQTlJQ2hwYzA1MWJTaGhMbm9wS1NBL0lHUnBjM1JoYm1ObE1VUW9ZUzU2TENCaUxub3BJRG9nTUR0Y2JseHVJQ0FnSUNBZ0lDQnlaWFIxY200Z1RXRjBhQzV6Y1hKMEtDaDRSR1ZzZEdFZ0tpb2dNaWtnS3lBb2VVUmxiSFJoSUNvcUlESXBJQ3NnS0hwRVpXeDBZU0FxS2lBeUtTazdYRzRnSUNBZ2ZWeHVmVHRjYmlCY2JpOHFYRzRnSUNBZ1NIbHdiM1JsYm5WelpWeHVJQ0FnSUZ4dUlDQWdJRkpsZEhWeWJuTWdkR2hsSUdoNWNHOTBaVzUxYzJVc0lITnBaR1VnUXl3Z1oybDJaVzRnZEdobElHeGxibWQwYUhNZ2IyWWdjMmxrWlhNZ1FTQmhibVFnUWk1Y2JpQWdJQ0JjYmlBZ0lDQkFjR0Z5WVcwZ1cyNTFiV0psY2wwNklFeGxibWQwYUNCdlppQkJYRzRnSUNBZ1FIQmhjbUZ0SUZ0dWRXMWlaWEpkT2lCTVpXNW5kR2dnYjJZZ1FseHVJQ0FnSUVCeVpYUjFjbTRnVzI1MWJXSmxjbDA2SUV4bGJtZDBhQ0J2WmlCRFhHNHFMMXh1Wlhod2IzSjBJR052Ym5OMElHaDVjRzkwWlc1MWMyVWdQU0FvWVN3Z1lpa2dQVDRnVFdGMGFDNXpjWEowS0NoaElDb2dZU2tnS3lBb1lpQXFJR0lwS1R0Y2JseHVMeXBjYmlBZ0lDQldZV3gxWlNCcGJpQnlZVzVuWlNCbWNtOXRJSEJ5YjJkeVpYTnpYRzRnSUNBZ1hHNGdJQ0FnUjJsMlpXNGdZU0JzYjNkbGNpQnNhVzFwZENCaGJtUWdZVzRnZFhCd1pYSWdiR2x0YVhRc0lIZGxJSEpsZEhWeWJpQjBhR1VnZG1Gc2RXVWdkMmwwYUdsdVhHNGdJQ0FnZEdoaGRDQnlZVzVuWlNCaGN5QmxlSEJ5WlhOelpXUWdZbmtnY0hKdlozSmxjM01nS0dFZ2JuVnRZbVZ5SUdaeWIyMGdNQzB4S1Z4dUlDQWdJRnh1SUNBZ0lFQndZWEpoYlNCYmJuVnRZbVZ5WFRvZ1ZHaGxJSEJ5YjJkeVpYTnpJR0psZEhkbFpXNGdiRzkzWlhJZ1lXNWtJSFZ3Y0dWeUlHeHBiV2wwY3lCbGVIQnlaWE56WldRZ01DMHhYRzRnSUNBZ1FIQmhjbUZ0SUZ0dWRXMWlaWEpkT2lCTWIzZGxjaUJzYVcxcGRDQnZaaUJ5WVc1blpWeHVJQ0FnSUVCd1lYSmhiU0JiYm5WdFltVnlYVG9nVlhCd1pYSWdiR2x0YVhRZ2IyWWdjbUZ1WjJWY2JpQWdJQ0JBY21WMGRYSnVJRnR1ZFcxaVpYSmRPaUJXWVd4MVpTQmhjeUJqWVd4amRXeGhkR1ZrSUdaeWIyMGdjSEp2WjNKbGMzTWdkMmwwYUdsdUlISmhibWRsSUNodWIzUWdiR2x0YVhSbFpDQjNhWFJvYVc0Z2NtRnVaMlVwWEc0cUwxeHVaWGh3YjNKMElHTnZibk4wSUdkbGRGWmhiSFZsUm5KdmJWQnliMmR5WlhOeklEMGdLSEJ5YjJkeVpYTnpMQ0JtY205dExDQjBieWtnUFQ0Z0tDMGdjSEp2WjNKbGMzTWdLaUJtY205dEtTQXJJQ2h3Y205bmNtVnpjeUFxSUhSdktTQXJJR1p5YjIwN1hHNWNiaThxWEc0Z0lDQWdVSEp2WjNKbGMzTWdkMmwwYUdsdUlHZHBkbVZ1SUhKaGJtZGxYRzRnSUNBZ1hHNGdJQ0FnUjJsMlpXNGdZU0JzYjNkbGNpQnNhVzFwZENCaGJtUWdZVzRnZFhCd1pYSWdiR2x0YVhRc0lIZGxJSEpsZEhWeWJpQjBhR1VnY0hKdlozSmxjM05jYmlBZ0lDQW9aWGh3Y21WemMyVmtJR0Z6SUdFZ2JuVnRZbVZ5SURBdE1Ta2djbVZ3Y21WelpXNTBaV1FnWW5rZ2RHaGxJR2RwZG1WdUlIWmhiSFZsTENCaGJtUmNiaUFnSUNCc2FXMXBkQ0IwYUdGMElIQnliMmR5WlhOeklIUnZJSGRwZEdocGJpQXdMVEV1WEc0Z0lDQWdYRzRnSUNBZ1FIQmhjbUZ0SUZ0dWRXMWlaWEpkT2lCV1lXeDFaU0IwYnlCbWFXNWtJSEJ5YjJkeVpYTnpJSGRwZEdocGJpQm5hWFpsYmlCeVlXNW5aVnh1SUNBZ0lFQndZWEpoYlNCYmJuVnRZbVZ5WFRvZ1RHOTNaWElnYkdsdGFYUWdYRzRnSUNBZ1FIQmhjbUZ0SUZ0dWRXMWlaWEpkT2lCVmNIQmxjaUJzYVcxcGRGeHVJQ0FnSUVCeVpYUjFjbTRnVzI1MWJXSmxjbDA2SUZCeWIyZHlaWE56SUc5bUlIWmhiSFZsSUhkcGRHaHBiaUJ5WVc1blpTQmhjeUJsZUhCeVpYTnpaV1FnTUMweFhHNHFMMXh1Wlhod2IzSjBJR052Ym5OMElHZGxkRkJ5YjJkeVpYTnpSbkp2YlZaaGJIVmxJRDBnS0haaGJIVmxMQ0JtY205dExDQjBieWtnUFQ0Z0tIWmhiSFZsSUMwZ1puSnZiU2tnTHlBb2RHOGdMU0JtY205dEtUdGNibHh1THlwY2JpQWdJQ0JQWm1aelpYUWdZbVYwZDJWbGJpQjBkMjhnYjJKcVpXTjBjeUJ2WmlCdWRXMWlaWEp6WEc1Y2JpQWdJQ0JKWmlCd2NtOXdaWEowZVNCcGN5Qm1iM1Z1WkNCcGJpQmlJRzV2ZENCd2NtVnpaVzUwSUdsdUlHRXNJR2wwSUhkcGJHd2djbVYwZFhKdUlHQXdZQ0JtYjNJZ2RHaGhkQ0J3Y205d0xseHVJQ0FnSUZ4dUlDQWdJRUJ3WVhKaGJTQmJVRzlwYm5SZE9pQkdhWEp6ZENCdlltcGxZM1JjYmlBZ0lDQkFjR0Z5WVcwZ1cxQnZhVzUwWFRvZ1UyVmpiMjVrSUc5aWFtVmpkRnh1SUNBZ0lFQnlaWFIxY200Z1cwOW1abk5sZEYwNklFUnBjM1JoYm1ObElHMWxkSEpwWTNNZ1ltVjBkMlZsYmlCMGQyOGdjRzlwYm5SelhHNHFMMXh1Wlhod2IzSjBJR052Ym5OMElHOW1abk5sZENBOUlDaGhMQ0JpS1NBOVBpQjdYRzRnSUNBZ1kyOXVjM1FnYjJabWMyVjBJRDBnZTMwN1hHNWNiaUFnSUNCbFlXTm9LR0lzSUNoMllXeDFaU3dnYTJWNUtTQTlQaUI3WEc0Z0lDQWdJQ0FnSUc5bVpuTmxkRnRyWlhsZElEMGdhR0Z6VUhKdmNHVnlkSGtvWVN3Z2EyVjVLU0EvSUhaaGJIVmxJQzBnWVZ0clpYbGRJRG9nTUR0Y2JpQWdJQ0I5S1R0Y2JseHVJQ0FnSUhKbGRIVnliaUJ2Wm1aelpYUTdYRzU5TzF4dVhHNHZLbHh1SUNBZ0lGQnZhVzUwSUdaeWIyMGdZVzVuYkdVZ1lXNWtJR1JwYzNSaGJtTmxYRzRnSUNBZ1hHNGdJQ0FnUUhCaGNtRnRJRnR2WW1wbFkzUmRPaUF5UkNCd2IybHVkQ0J2WmlCdmNtbG5hVzVjYmlBZ0lDQkFjR0Z5WVcwZ1cyNTFiV0psY2wwNklFRnVaMnhsSUdaeWIyMGdiM0pwWjJsdVhHNGdJQ0FnUUhCaGNtRnRJRnR1ZFcxaVpYSmRPaUJFYVhOMFlXNWpaU0JtY205dElHOXlhV2RwYmx4dUlDQWdJRUJ5WlhSMWNtNGdXMjlpYW1WamRGMDZJRU5oYkdOMWJHRjBaV1FnTWtRZ2NHOXBiblJjYmlvdlhHNWxlSEJ2Y25RZ1kyOXVjM1FnY0c5cGJuUkdjbTl0UVc1bmJHVkJibVJFYVhOMFlXNWpaU0E5SUNodmNtbG5hVzRzSUdGdVoyeGxMQ0JrYVhOMFlXNWpaU2tnUFQ0Z2UxeHVJQ0FnSUdGdVoyeGxJRDBnWkdWbmNtVmxjMVJ2VW1Ga2FXRnVjeWhoYm1kc1pTazdYRzVjYmlBZ0lDQnlaWFIxY200Z2UxeHVJQ0FnSUNBZ0lDQjRPaUJrYVhOMFlXNWpaU0FxSUUxaGRHZ3VZMjl6S0dGdVoyeGxLU0FySUc5eWFXZHBiaTU0TEZ4dUlDQWdJQ0FnSUNCNU9pQmthWE4wWVc1alpTQXFJRTFoZEdndWMybHVLR0Z1WjJ4bEtTQXJJRzl5YVdkcGJpNTVYRzRnSUNBZ2ZUdGNibjA3WEc1Y2JpOHFYRzRnSUNBZ1EyOXVkbVZ5ZENCeVlXUnBZVzV6SUhSdklHUmxaM0psWlhOY2JpQWdJQ0JjYmlBZ0lDQkFjR0Z5WVcwZ1cyNTFiV0psY2wwNklGWmhiSFZsSUdsdUlISmhaR2xoYm5OY2JpQWdJQ0JBY21WMGRYSnVJRnR1ZFcxaVpYSmRPaUJXWVd4MVpTQnBiaUJrWldkeVpXVnpYRzRxTDF4dVpYaHdiM0owSUdOdmJuTjBJSEpoWkdsaGJuTlViMFJsWjNKbFpYTWdQU0FvY21Ga2FXRnVjeWtnUFQ0Z2NtRmthV0Z1Y3lBcUlERTRNQ0F2SUUxaGRHZ3VVRWs3WEc1Y2JpOHFYRzRnSUNBZ1VtVjBkWEp1SUhKaGJtUnZiU0J1ZFcxaVpYSWdZbVYwZDJWbGJpQnlZVzVuWlZ4dUlDQWdJRnh1SUNBZ0lFQndZWEpoYlNCYmJuVnRZbVZ5WFNBb2IzQjBhVzl1WVd3cE9pQlBkWFJ3ZFhRZ2JXbHVhVzExYlZ4dUlDQWdJRUJ3WVhKaGJTQmJiblZ0WW1WeVhTQW9iM0IwYVc5dVlXd3BPaUJQZFhSd2RYUWdiV0Y0YVcxMWJWeHVJQ0FnSUVCeVpYUjFjbTRnVzI1MWJXSmxjbDA2SUZKaGJtUnZiU0J1ZFcxaVpYSWdkMmwwYUdsdUlISmhibWRsTENCdmNpQXdJR0Z1WkNBeElHbG1JRzV2Ym1VZ2NISnZkbWxrWldSY2Jpb3ZYRzVsZUhCdmNuUWdZMjl1YzNRZ2NtRnVaRzl0SUQwZ0tHMXBiaUE5SURBc0lHMWhlQ0E5SURFcElEMCtJRTFoZEdndWNtRnVaRzl0S0NrZ0tpQW9iV0Y0SUMwZ2JXbHVLU0FySUcxcGJqdGNibHh1THlwY2JpQWdJQ0JEWVd4amRXeGhkR1VnY21Wc1lYUnBkbVVnZG1Gc2RXVmNiaUFnSUNCY2JpQWdJQ0JVWVd0bGN5QjBhR1VnYjNCbGNtRjBiM0lnWVc1a0lIWmhiSFZsSUdaeWIyMGdZU0J6ZEhKcGJtY3NJR2xsSUZ3aUt6MDFYQ0lzSUdGdVpDQmhjSEJzYVdWelhHNGdJQ0FnZEc4Z2RHaGxJR04xY25KbGJuUWdkbUZzZFdVZ2RHOGdjbVZ6YjJ4MlpTQmhJRzVsZHlCMFlYSm5aWFF1WEc0Z0lDQWdYRzRnSUNBZ1FIQmhjbUZ0SUZ0dWRXMWlaWEpkT2lCRGRYSnlaVzUwSUhaaGJIVmxYRzRnSUNBZ1FIQmhjbUZ0SUZ0emRISnBibWRkT2lCU1pXeGhkR2wyWlNCMllXeDFaVnh1SUNBZ0lFQnlaWFIxY200Z1cyNTFiV0psY2wwNklFNWxkeUIyWVd4MVpWeHVLaTljYm1WNGNHOXlkQ0JqYjI1emRDQnlaV3hoZEdsMlpWWmhiSFZsSUQwZ0tHTjFjbkpsYm5Rc0lISmxiR0YwYVhabEtTQTlQaUI3WEc0Z0lDQWdiR1YwSUc1bGQxWmhiSFZsSUQwZ1kzVnljbVZ1ZER0Y2JpQWdJQ0JqYjI1emRDQmxjWFZoZEdsdmJpQTlJSEpsYkdGMGFYWmxMbk53YkdsMEtDYzlKeWs3WEc0Z0lDQWdZMjl1YzNRZ2IzQmxjbUYwYjNJZ1BTQmxjWFZoZEdsdmJsc3dYVHRjYmlBZ0lDQnNaWFFnZXlCMWJtbDBMQ0IyWVd4MVpTQjlJRDBnYzNCc2FYUldZV3gxWlZWdWFYUW9aWEYxWVhScGIyNWJNVjBwTzF4dVhHNGdJQ0FnZG1Gc2RXVWdQU0J3WVhKelpVWnNiMkYwS0haaGJIVmxLVHRjYmx4dUlDQWdJSE4zYVhSamFDQW9iM0JsY21GMGIzSXBJSHRjYmlBZ0lDQWdJQ0FnWTJGelpTQW5LeWM2WEc0Z0lDQWdJQ0FnSUNBZ0lDQnVaWGRXWVd4MVpTQXJQU0IyWVd4MVpUdGNiaUFnSUNBZ0lDQWdJQ0FnSUdKeVpXRnJPMXh1SUNBZ0lDQWdJQ0JqWVhObElDY3RKenBjYmlBZ0lDQWdJQ0FnSUNBZ0lHNWxkMVpoYkhWbElDMDlJSFpoYkhWbE8xeHVJQ0FnSUNBZ0lDQWdJQ0FnWW5KbFlXczdYRzRnSUNBZ0lDQWdJR05oYzJVZ0p5b25PbHh1SUNBZ0lDQWdJQ0FnSUNBZ2JtVjNWbUZzZFdVZ0tqMGdkbUZzZFdVN1hHNGdJQ0FnSUNBZ0lDQWdJQ0JpY21WaGF6dGNiaUFnSUNBZ0lDQWdZMkZ6WlNBbkx5YzZYRzRnSUNBZ0lDQWdJQ0FnSUNCdVpYZFdZV3gxWlNBdlBTQjJZV3gxWlR0Y2JpQWdJQ0FnSUNBZ0lDQWdJR0p5WldGck8xeHVJQ0FnSUgxY2JpQWdJQ0JjYmlBZ0lDQnBaaUFvZFc1cGRDa2dlMXh1SUNBZ0lDQWdJQ0J1WlhkV1lXeDFaU0FyUFNCMWJtbDBPMXh1SUNBZ0lIMWNibHh1SUNBZ0lISmxkSFZ5YmlCdVpYZFdZV3gxWlR0Y2JuMDdYRzVjYmk4cVhHNGdJQ0FnVW1WemRISnBZM1FnZG1Gc2RXVWdkRzhnY21GdVoyVmNiaUFnSUNCY2JpQWdJQ0JTWlhSMWNtNGdkbUZzZFdVZ2QybDBhR2x1SUhSb1pTQnlZVzVuWlNCdlppQnNiM2RsY2t4cGJXbDBJR0Z1WkNCMWNIQmxja3hwYldsMFhHNGdJQ0FnWEc0Z0lDQWdRSEJoY21GdElGdHVkVzFpWlhKZE9pQldZV3gxWlNCMGJ5QnJaV1Z3SUhkcGRHaHBiaUJ5WVc1blpWeHVJQ0FnSUVCd1lYSmhiU0JiYm5WdFltVnlYVG9nVEc5M1pYSWdiR2x0YVhRZ2IyWWdjbUZ1WjJWY2JpQWdJQ0JBY0dGeVlXMGdXMjUxYldKbGNsMDZJRlZ3Y0dWeUlHeHBiV2wwSUc5bUlISmhibWRsWEc0Z0lDQWdRSEpsZEhWeWJpQmJiblZ0WW1WeVhUb2dWbUZzZFdVZ1lYTWdiR2x0YVhSbFpDQjNhWFJvYVc0Z1oybDJaVzRnY21GdVoyVmNiaW92WEc1bGVIQnZjblFnWTI5dWMzUWdjbVZ6ZEhKcFkzUWdQU0FvZG1Gc2RXVXNJRzFwYml3Z2JXRjRLU0E5UGlCTllYUm9MbTFoZUNoTllYUm9MbTFwYmloMllXeDFaU3dnYldGNEtTd2diV2x1S1R0Y2JseHVMeXBjYmlBZ0lDQkdjbUZ0WlhKaGRHVXRhVzVrWlhCbGJtUmxiblFnYzIxdmIzUm9hVzVuWEc1Y2JpQWdJQ0JBY0dGeVlXMGdXMjUxYldKbGNsMDZJRTVsZHlCMllXeDFaVnh1SUNBZ0lFQndZWEpoYlNCYmJuVnRZbVZ5WFRvZ1QyeGtJSFpoYkhWbFhHNGdJQ0FnUUhCaGNtRnRJRnR1ZFcxaVpYSmRPaUJHY21GdFpTQmtkWEpoZEdsdmJseHVJQ0FnSUVCd1lYSmhiU0JiYm5WdFltVnlYU0FvYjNCMGFXOXVZV3dwT2lCVGJXOXZkR2hwYm1jZ0tEQWdhWE1nYm05dVpTbGNiaW92WEc1bGVIQnZjblFnWTI5dWMzUWdjMjF2YjNSb0lEMGdLRzVsZDFaaGJIVmxMQ0J2YkdSV1lXeDFaU3dnWkhWeVlYUnBiMjRzSUhOdGIyOTBhR2x1WnlBOUlEQXBJRDArSUhSdlJHVmphVzFoYkNodmJHUldZV3gxWlNBcklDaGtkWEpoZEdsdmJpQXFJQ2h1WlhkV1lXeDFaU0F0SUc5c1pGWmhiSFZsS1NBdklFMWhkR2d1YldGNEtITnRiMjkwYUdsdVp5d2daSFZ5WVhScGIyNHBLU2s3WEc1Y2JpOHFYRzRnSUNBZ1EyOXVkbVZ5ZENCNElIQmxjaUJ6WldOdmJtUWdkRzhnY0dWeUlHWnlZVzFsSUhabGJHOWphWFI1SUdKaGMyVmtJRzl1SUdad2MxeHVJQ0FnSUZ4dUlDQWdJRUJ3WVhKaGJTQmJiblZ0WW1WeVhUb2dWVzVwZENCd1pYSWdjMlZqYjI1a1hHNGdJQ0FnUUhCaGNtRnRJRnR1ZFcxaVpYSmRPaUJHY21GdFpTQmtkWEpoZEdsdmJpQnBiaUJ0YzF4dUtpOWNibVY0Y0c5eWRDQmpiMjV6ZENCemNHVmxaRkJsY2taeVlXMWxJRDBnS0hod2N5d2dabkpoYldWRWRYSmhkR2x2YmlrZ1BUNGdLR2x6VG5WdEtIaHdjeWtwSUQ4Z2VIQnpJQzhnS0RFd01EQWdMeUJtY21GdFpVUjFjbUYwYVc5dUtTQTZJREE3WEc1Y2JpOHFYRzRnSUNBZ1EyOXVkbVZ5ZENCMlpXeHZZMmwwZVNCcGJuUnZJSFpsYkdsamFYUjVJSEJsY2lCelpXTnZibVJjYmlBZ0lDQmNiaUFnSUNCQWNHRnlZVzBnVzI1MWJXSmxjbDA2SUZWdWFYUWdjR1Z5SUdaeVlXMWxYRzRnSUNBZ1FIQmhjbUZ0SUZ0dWRXMWlaWEpkT2lCR2NtRnRaU0JrZFhKaGRHbHZiaUJwYmlCdGMxeHVLaTljYm1WNGNHOXlkQ0JqYjI1emRDQnpjR1ZsWkZCbGNsTmxZMjl1WkNBOUlDaDJaV3h2WTJsMGVTd2dabkpoYldWRWRYSmhkR2x2YmlrZ1BUNGdkbVZzYjJOcGRIa2dLaUFvTVRBd01DQXZJR1p5WVcxbFJIVnlZWFJwYjI0cE8xeHVYRzR2S2x4dUlDQWdJRU55WldGMFpTQnpkR1Z3Y0dWa0lIWmxjbk5wYjI0Z2IyWWdNQzB4SUhCeWIyZHlaWE56WEc0Z0lDQWdYRzRnSUNBZ1FIQmhjbUZ0SUZ0dWRXMWlaWEpkT2lCRGRYSnlaVzUwSUhaaGJIVmxYRzRnSUNBZ1FIQmhjbUZ0SUZ0cGJuUmRPaUJPZFcxaVpYSWdiMllnYzNSbGNITmNiaUFnSUNCQWNtVjBkWEp1SUZ0dWRXMWlaWEpkT2lCVGRHVndjR1ZrSUhaaGJIVmxYRzRxTDF4dVpYaHdiM0owSUdOdmJuTjBJSE4wWlhCUWNtOW5jbVZ6Y3lBOUlDaHdjbTluY21WemN5d2djM1JsY0hNcElEMCtJSHRjYmlBZ0lDQmpiMjV6ZENCelpXZHRaVzUwSUQwZ01TQXZJQ2h6ZEdWd2N5QXRJREVwTzF4dUlDQWdJR052Ym5OMElIUmhjbWRsZENBOUlERWdMU0FvTVNBdklITjBaWEJ6S1R0Y2JpQWdJQ0JqYjI1emRDQndjbTluY21WemMwOW1WR0Z5WjJWMElEMGdUV0YwYUM1dGFXNG9jSEp2WjNKbGMzTWdMeUIwWVhKblpYUXNJREVwTzF4dVhHNGdJQ0FnY21WMGRYSnVJRTFoZEdndVpteHZiM0lvY0hKdlozSmxjM05QWmxSaGNtZGxkQ0F2SUhObFoyMWxiblFwSUNvZ2MyVm5iV1Z1ZER0Y2JuMDdJbDE5XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9pbmMvY2FsYy5qc1xuICoqIG1vZHVsZSBpZCA9IDE0XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5mdW5jdGlvbiBwdXNoKCkge1xuICAgIHZhciBfQXJyYXkkcHJvdG90eXBlJHB1c2g7XG5cbiAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgICBhcmdzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICAgIH1cblxuICAgIChfQXJyYXkkcHJvdG90eXBlJHB1c2ggPSBBcnJheS5wcm90b3R5cGUucHVzaCkuY2FsbC5hcHBseShfQXJyYXkkcHJvdG90eXBlJHB1c2gsIFt0aGlzXS5jb25jYXQoYXJncykpO1xuXG4gICAgaWYgKHRoaXMubGVuZ3RoID49IHRoaXMuX21heFNpemUpIHtcbiAgICAgICAgdGhpcy5zaGlmdCgpO1xuICAgIH1cbn1cblxudmFyIENBTUVMX0NBU0VfUEFUVEVSTiA9IC8oW2Etel0pKFtBLVpdKS9nO1xudmFyIFJFUExBQ0VfVEVNUExBVEUgPSAnJDEtJDInO1xudmFyIEhBU19QRVJGT1JNQU5DRV9OT1cgPSB0eXBlb2YgcGVyZm9ybWFuY2UgIT09ICd1bmRlZmluZWQnICYmIHBlcmZvcm1hbmNlLm5vdztcblxuLypcbiAgICBHZXQgdmFyIHR5cGUgYXMgc3RyaW5nXG4gICAgXG4gICAgQHBhcmFtOiBWYXJpYWJsZSB0byB0ZXN0XG4gICAgQHJldHVybiBbc3RyaW5nXTogUmV0dXJucywgZm9yIGluc3RhbmNlICdPYmplY3QnIGlmIFtvYmplY3QgT2JqZWN0XVxuKi9cbnZhciB2YXJUeXBlID0gZnVuY3Rpb24gKHZhcmlhYmxlKSB7XG4gICAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh2YXJpYWJsZSkuc2xpY2UoOCwgLTEpO1xufTtcblxuLypcbiAgICBDb252ZXJ0IGNhbWVsQ2FzZSB0byBkYXNoLWNhc2VcblxuICAgIEBwYXJhbSBbc3RyaW5nXVxuICAgIEByZXR1cm4gW3N0cmluZ11cbiovXG52YXIgY2FtZWxUb0Rhc2ggPSBleHBvcnRzLmNhbWVsVG9EYXNoID0gZnVuY3Rpb24gKHN0cmluZykge1xuICAgIHJldHVybiBzdHJpbmcucmVwbGFjZShDQU1FTF9DQVNFX1BBVFRFUk4sIFJFUExBQ0VfVEVNUExBVEUpLnRvTG93ZXJDYXNlKCk7XG59O1xuXG4vKlxuICAgIENyZWF0ZSBhbiBhdXRvLWN1bGxpbmcgYnVmZmVyIGFycmF5XG5cbiAgICBAcGFyYW0gW2FycmF5XVxuICAgIEBwYXJhbSBbaW50XVxuICAgIEByZXR1cm4gW2FycmF5XVxuKi9cbnZhciBjcmVhdGVCdWZmZXIgPSBleHBvcnRzLmNyZWF0ZUJ1ZmZlciA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgbWF4U2l6ZSA9IGFyZ3VtZW50cy5sZW5ndGggPD0gMCB8fCBhcmd1bWVudHNbMF0gPT09IHVuZGVmaW5lZCA/IDMgOiBhcmd1bWVudHNbMF07XG4gICAgdmFyIGFycmF5ID0gYXJndW1lbnRzLmxlbmd0aCA8PSAxIHx8IGFyZ3VtZW50c1sxXSA9PT0gdW5kZWZpbmVkID8gW10gOiBhcmd1bWVudHNbMV07XG5cbiAgICBhcnJheS5wdXNoID0gcHVzaDtcbiAgICBhcnJheS5fbWF4U2l6ZSA9IG1heFNpemUgfHwgMDtcblxuICAgIHJldHVybiBhcnJheTtcbn07XG5cbnZhciBjcmVhdGVEZWxpbWl0ZWQgPSBleHBvcnRzLmNyZWF0ZURlbGltaXRlZCA9IGZ1bmN0aW9uICh2YWx1ZXMsIHRlcm1zLCBkZWxpbWl0ZXIsIGNob3ApIHtcbiAgICB2YXIgY29tYmluZWQgPSAnJztcblxuICAgIHRlcm1zLmZvckVhY2goZnVuY3Rpb24gKHRlcm0pIHtcbiAgICAgICAgaWYgKHZhbHVlcy5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgICBjb21iaW5lZCArPSB2YWx1ZXNba2V5XSArIGRlbGltaXRlcjtcbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgaWYgKGNob3ApIHtcbiAgICAgICAgY29tYmluZWQgPSBjb21iaW5lZC5zbGljZSgwLCAtY2hvcCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbWJpbmVkO1xufTtcblxuLypcbiAgICBDcmVhdGUgYSBmdW5jdGlvbiBzdHJpbmdcblxuICAgICcyMHB4JywgJ3RyYW5zbGF0ZScgLT4gJ3RyYW5zbGF0ZSgyMHB4KSdcblxuICAgIEBwYXJhbSBbc3RyaW5nXVxuICAgIEBwYXJhbSBbc3RyaW5nXVxuICAgIEByZXR1cm4gW3N0cmluZ11cbiovXG52YXIgY3JlYXRlRnVuY3Rpb25TdHJpbmcgPSBleHBvcnRzLmNyZWF0ZUZ1bmN0aW9uU3RyaW5nID0gZnVuY3Rpb24gKHZhbHVlLCBwcmVmaXgpIHtcbiAgICByZXR1cm4gcHJlZml4ICsgJygnICsgdmFsdWUgKyAnKSc7XG59O1xuXG4vKlxuICAgIEdlbmVyYXRlIGN1cnJlbnQgdGltZXN0YW1wXG4gICAgXG4gICAgQHJldHVybiBbdGltZXN0YW1wXTogQ3VycmVudCBVTklYIHRpbWVzdGFtcFxuKi9cbnZhciBjdXJyZW50VGltZSA9IGV4cG9ydHMuY3VycmVudFRpbWUgPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIEhBU19QRVJGT1JNQU5DRV9OT1cgPyBwZXJmb3JtYW5jZS5ub3coKSA6IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xufTtcblxuLypcbiAgICBJdGVyYXRlIG92ZXIgYW4gb2JqZWN0IGFuZCBmaXJlIGEgY2FsbGJhY2sgZm9yIGV2ZXJ5IGl0ZW0gaW4gaXRcblxuICAgIEBwYXJhbSBbb2JqZWN0XTogT2JqZWN0IHRvIGl0ZXJhdGUgb3ZlclxuICAgIEBwYXJhbSBbZnVuY3Rpb25dOiBDYWxsYmFjayB0byBmaXJlXG4qL1xudmFyIGVhY2ggPSBleHBvcnRzLmVhY2ggPSBmdW5jdGlvbiAob2JqZWN0LCBjYWxsYmFjaykge1xuICAgIHZhciBrZXlzID0gb2JqZWN0ID8gT2JqZWN0LmtleXMob2JqZWN0KSA6IFtdO1xuICAgIHZhciBudW1LZXlzID0ga2V5cy5sZW5ndGg7XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IG51bUtleXM7IGkrKykge1xuICAgICAgICB2YXIgX2tleTIgPSBrZXlzW2ldO1xuICAgICAgICB2YXIgcHJvcCA9IG9iamVjdFtfa2V5Ml07XG5cbiAgICAgICAgY2FsbGJhY2socHJvcCwgX2tleTIsIG9iamVjdCk7XG4gICAgfVxufTtcblxuLypcbiAgICBTcGxpdCBjb2xvciBzdHJpbmcgaW50byBtYXAgb2YgY29sb3IgcHJvcGVydGllc1xuXG4gICAgXCJyZ2JhKDI1NSwgMjU1LCAyNTUsIDApXCIsIFtcIlJlZFwiLCAnR3JlZW5cIiwgXCJCbHVlXCIsIFwiQWxwaGFcIl1cblxuICAgIHsgUmVkOiAyNTUuLi4gfVxuKi9cbnZhciBnZXRDb2xvclZhbHVlcyA9IGV4cG9ydHMuZ2V0Q29sb3JWYWx1ZXMgPSBmdW5jdGlvbiAodmFsdWUsIGNvbG9yVGVybXMpIHtcbiAgICB2YXIgY29sb3JWYWx1ZXMgPSB7fTtcbiAgICB2YXIgY29sb3JzID0gc3BsaXRDb21tYURlbGltaXRlZChnZXRWYWx1ZUZyb21GdW5jdGlvblN0cmluZyh2YWx1ZSkpO1xuXG4gICAgY29sb3JUZXJtcy5mb3JFYWNoKGZ1bmN0aW9uICh0ZXJtLCBpKSB7XG4gICAgICAgIHJldHVybiBjb2xvclRlcm1zW3Rlcm1dID0gY29sb3JzW2ldICE9PSB1bmRlZmluZWQgPyBjb2xvcnNbaV0gOiAxO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIGNvbG9yVmFsdWVzO1xufTtcblxuLypcbiAgICBHZXQgdmFsdWUgZnJvbSBmdW5jdGlvbiBzdHJpbmdcblxuICAgIFwidHJhbnNsYXRlWCgyMHB4KVwiIC0+IFwiMjBweFwiXG4qL1xudmFyIGdldFZhbHVlRnJvbUZ1bmN0aW9uU3RyaW5nID0gZXhwb3J0cy5nZXRWYWx1ZUZyb21GdW5jdGlvblN0cmluZyA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgIHJldHVybiB2YWx1ZS5zdWJzdHJpbmcodmFsdWUuaW5kZXhPZignKCcpICsgMSwgdmFsdWUubGFzdEluZGV4T2YoJyknKSk7XG59O1xuXG4vKlxuICAgIENoZWNrIGlmIHR3byBvYmplY3RzIGhhdmUgY2hhbmdlZCBmcm9tIGVhY2ggb3RoZXJcbiAgICBcbiAgICBAcGFyYW0gW29iamVjdF06IElucHV0IEFcbiAgICBAcGFyYW0gW29iamVjdF06IElucHV0IEJcbiAgICBAcmV0dXJuIFtib29sZWFuXTogVHJ1ZSBpZiBkaWZmZXJlbnRcbiovXG52YXIgaGFzQ2hhbmdlZCA9IGV4cG9ydHMuaGFzQ2hhbmdlZCA9IGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgdmFyIGNoYW5nZWQgPSBmYWxzZTtcblxuICAgIGVhY2goYSwgZnVuY3Rpb24gKHZhbHVlLCBrZXkpIHtcbiAgICAgICAgaWYgKGhhc1Byb3BlcnR5KGIsIGtleSkpIHtcbiAgICAgICAgICAgIGlmICh2YWx1ZSAhPT0gYltrZXldKSB7XG4gICAgICAgICAgICAgICAgY2hhbmdlZCA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjaGFuZ2VkID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIGNoYW5nZWQ7XG59O1xuXG4vKlxuICAgIENoZWNrIGlmIG9iamVjdCBoYXMgcHJvcGVydHkgYW5kIGl0IGlzbid0IHVuZGVmaW5lZFxuXG4gICAgQHBhcmFtIFtvYmplY3RdXG4gICAgQHBhcmFtIFtzdHJpbmddXG4gICAgQHJldHVybiBbYm9vbGVhbl1cbiovXG52YXIgaGFzUHJvcGVydHkgPSBleHBvcnRzLmhhc1Byb3BlcnR5ID0gZnVuY3Rpb24gKG9iamVjdCwgcHJvcGVydHlOYW1lKSB7XG4gICAgcmV0dXJuIG9iamVjdC5oYXNPd25Qcm9wZXJ0eShwcm9wZXJ0eU5hbWUpICYmIG9iamVjdFtwcm9wZXJ0eU5hbWVdICE9PSB1bmRlZmluZWQ7XG59O1xuXG4vKlxuICAgIElzIHV0aWxzIHZhciBhbiBhcnJheSA/IFxuICAgIFxuICAgIEBwYXJhbTogVmFyaWFibGUgdG8gdGVzdFxuICAgIEByZXR1cm4gW2Jvb2xlYW5dOiBSZXR1cm5zIHRydWUgaWYgdXRpbHMudmFyVHlwZSA9PT0gJ0FycmF5J1xuKi9cbnZhciBpc0FycmF5ID0gZXhwb3J0cy5pc0FycmF5ID0gZnVuY3Rpb24gKGFycikge1xuICAgIHJldHVybiB2YXJUeXBlKGFycikgPT09ICdBcnJheSc7XG59O1xuXG4vKlxuICAgIElzIHV0aWxzIHZhciBhIGZ1bmN0aW9uID8gXG4gICAgXG4gICAgQHBhcmFtOiBWYXJpYWJsZSB0byB0ZXN0XG4gICAgQHJldHVybiBbYm9vbGVhbl06IFJldHVybnMgdHJ1ZSBpZiB1dGlscy52YXJUeXBlID09PSAnRnVuY3Rpb24nXG4qL1xudmFyIGlzRnVuYyA9IGV4cG9ydHMuaXNGdW5jID0gZnVuY3Rpb24gKG9iaikge1xuICAgIHJldHVybiB2YXJUeXBlKG9iaikgPT09ICdGdW5jdGlvbic7XG59O1xuXG4vKlxuICAgIElzIHV0aWxzIHZhciBhIG51bWJlcj9cbiAgICBcbiAgICBAcGFyYW06IFZhcmlhYmxlIHRvIHRlc3RcbiAgICBAcmV0dXJuIFtib29sZWFuXTogUmV0dXJucyB0cnVlIGlmIHR5cGVvZiA9PT0gJ251bWJlcidcbiovXG52YXIgaXNOdW0gPSBleHBvcnRzLmlzTnVtID0gZnVuY3Rpb24gKG51bSkge1xuICAgIHJldHVybiB0eXBlb2YgbnVtID09PSAnbnVtYmVyJztcbn07XG5cbi8qXG4gICAgSXMgdXRpbHMgdmFyIGFuIG9iamVjdD9cbiAgICBcbiAgICBAcGFyYW06IFZhcmlhYmxlIHRvIHRlc3RcbiAgICBAcmV0dXJuIFtib29sZWFuXTogUmV0dXJucyB0cnVlIGlmIHR5cGVvZiA9PT0gJ29iamVjdCdcbiovXG52YXIgaXNPYmogPSBleHBvcnRzLmlzT2JqID0gZnVuY3Rpb24gKG9iaikge1xuICAgIHJldHVybiB0eXBlb2Ygb2JqID09PSAnb2JqZWN0Jztcbn07XG5cbi8qXG4gICAgSXMgdXRpbHMgYSByZWxhdGl2ZSB2YWx1ZSBhc3NpZ25tZW50P1xuICAgIFxuICAgIEBwYXJhbSBbc3RyaW5nXTogVmFyaWFibGUgdG8gdGVzdFxuICAgIEByZXR1cm4gW2Jvb2xlYW5dOiBJZiB1dGlscyBsb29rcyBsaWtlIGEgcmVsYXRpdmUgdmFsdWUgYXNzaWdubWVudFxuKi9cbnZhciBpc1JlbGF0aXZlVmFsdWUgPSBleHBvcnRzLmlzUmVsYXRpdmVWYWx1ZSA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgIHJldHVybiB2YWx1ZSAmJiB2YWx1ZS5pbmRleE9mICYmIHZhbHVlLmluZGV4T2YoJz0nKSA+IDAgPyB0cnVlIDogZmFsc2U7XG59O1xuXG4vKlxuICAgIElzIHV0aWxzIHZhciBhIHN0cmluZyA/IFxuICAgIFxuICAgIEBwYXJhbTogVmFyaWFibGUgdG8gdGVzdFxuICAgIEByZXR1cm4gW2Jvb2xlYW5dOiBSZXR1cm5zIHRydWUgaWYgdHlwZW9mIHN0ciA9PT0gJ3N0cmluZydcbiovXG52YXIgaXNTdHJpbmcgPSBleHBvcnRzLmlzU3RyaW5nID0gZnVuY3Rpb24gKHN0cikge1xuICAgIHJldHVybiB0eXBlb2Ygc3RyID09PSAnc3RyaW5nJztcbn07XG5cbi8qXG4gICAgQHBhcmFtIFtzdHJpbmcgfHwgTm9kZUxpc3RdOlxuICAgICAgICBJZiBzdHJpbmcsIHRyZWF0ZWQgYXMgc2VsZWN0b3IuXG4gICAgICAgIElmIG5vdCwgdHJlYXRlZCBhcyBwcmVleGlzdGluZyBOb2RlTGlzdFxuXG4gICAgQHJldHVybiBbQXJyYXldXG4qL1xudmFyIHNlbGVjdERvbSA9IGV4cG9ydHMuc2VsZWN0RG9tID0gZnVuY3Rpb24gKHNlbGVjdG9yKSB7XG4gICAgdmFyIG5vZGVzID0gdHlwZW9mIHNlbGVjdG9yID09PSAnc3RyaW5nJyA/IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoc2VsZWN0b3IpIDogc2VsZWN0b3I7XG4gICAgcmV0dXJuIG5vZGVzLmxlbmd0aCA/IFtdLnNsaWNlLmNhbGwobm9kZXMpIDogW10ucHVzaChub2Rlcyk7XG59O1xuXG4vKlxuICAgIFNwbGl0IGNvbW1hLWRlbGltaXRlZCBzdHJpbmdcblxuICAgIFwiZm9vLGJhclwiIC0+IFtcImZvb1wiLCBcImJhclwiXVxuXG4gICAgQHBhcmFtIFtzdHJpbmddXG4gICAgQHJldHVybiBbYXJyYXldXG4qL1xudmFyIHNwbGl0Q29tbWFEZWxpbWl0ZWQgPSBleHBvcnRzLnNwbGl0Q29tbWFEZWxpbWl0ZWQgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICByZXR1cm4gaXNTdHJpbmcodmFsdWUpID8gdmFsdWUuc3BsaXQoLyxcXHMqLykgOiBbdmFsdWVdO1xufTtcblxuLypcbiAgICBTcGxpdCBzcGFjZS1kZWxpbWl0ZWQgc3RyaW5nXG5cbiAgICBcImZvbyBiYXJcIiAtPiBbXCJmb29cIiwgXCJiYXJcIl1cblxuICAgIEBwYXJhbSBbc3RyaW5nXVxuICAgIEByZXR1cm4gW2FycmF5XVxuKi9cbnZhciBzcGxpdFNwYWNlRGVsaW1pdGVkID0gZXhwb3J0cy5zcGxpdFNwYWNlRGVsaW1pdGVkID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgcmV0dXJuIGlzU3RyaW5nKHZhbHVlKSA/IHZhbHVlLnNwbGl0KCcgJykgOiBbdmFsdWVdO1xufTtcblxuLypcbiAgICBTcGxpdCBhIHZhbHVlIGludG8gYSB2YWx1ZS91bml0IG9iamVjdFxuICAgIFxuICAgICAgICBcIjIwMHB4XCIgLT4geyB2YWx1ZTogMjAwLCB1bml0OiBcInB4XCIgfVxuICAgICAgICBcbiAgICBAcGFyYW0gW3N0cmluZ106IFZhbHVlIHRvIHNwbGl0XG4gICAgQHJldHVybiBbb2JqZWN0XTogT2JqZWN0IHdpdGggdmFsdWUgYW5kIHVuaXQgcHJvcHNcbiovXG52YXIgc3BsaXRWYWx1ZVVuaXQgPSBleHBvcnRzLnNwbGl0VmFsdWVVbml0ID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgdmFyIHNwbGl0VmFsID0gdmFsdWUubWF0Y2goLygtP1xcZCpcXC4/XFxkKikoLiopLyk7XG5cbiAgICByZXR1cm4ge1xuICAgICAgICB2YWx1ZTogcGFyc2VGbG9hdChzcGxpdFZhbFsxXSksXG4gICAgICAgIHVuaXQ6IHNwbGl0VmFsWzJdXG4gICAgfTtcbn07XG5cbi8qXG4gICAgQ29udmVydCBudW1iZXIgdG8geCBkZWNpbWFsIHBsYWNlc1xuXG4gICAgQHBhcmFtIFtudW1iZXJdXG4gICAgQHBhcmFtIFtudW1iZXJdXG4gICAgQHJldHVybiBbbnVtYmVyXVxuKi9cbnZhciB0b0RlY2ltYWwgPSBleHBvcnRzLnRvRGVjaW1hbCA9IGZ1bmN0aW9uIChudW0pIHtcbiAgICB2YXIgcHJlY2lzaW9uID0gYXJndW1lbnRzLmxlbmd0aCA8PSAxIHx8IGFyZ3VtZW50c1sxXSA9PT0gdW5kZWZpbmVkID8gMiA6IGFyZ3VtZW50c1sxXTtcblxuICAgIHByZWNpc2lvbiA9IE1hdGgucG93KDEwLCBwcmVjaXNpb24pO1xuICAgIHJldHVybiBNYXRoLnJvdW5kKG51bSAqIHByZWNpc2lvbikgLyBwcmVjaXNpb247XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluVjBhV3h6TG1weklsMHNJbTVoYldWeklqcGJYU3dpYldGd2NHbHVaM01pT2lJN096dEJRVUZCTEZOQlFWTXNTVUZCU1N4SFFVRlZPenM3YzBOQlFVNHNTVUZCU1R0QlFVRktMRmxCUVVrN096dEJRVU5xUWl3MlFrRkJRU3hMUVVGTExFTkJRVU1zVTBGQlV5eERRVUZETEVsQlFVa3NSVUZCUXl4SlFVRkpMRTFCUVVFc2VVSkJRVU1zU1VGQlNTeFRRVUZMTEVsQlFVa3NSVUZCUXl4RFFVRkRPenRCUVVWNlF5eFJRVUZKTEVsQlFVa3NRMEZCUXl4TlFVRk5MRWxCUVVrc1NVRkJTU3hEUVVGRExGRkJRVkVzUlVGQlJUdEJRVU01UWl4WlFVRkpMRU5CUVVNc1MwRkJTeXhGUVVGRkxFTkJRVU03UzBGRGFFSTdRMEZEU2pzN1FVRkZSQ3hKUVVGTkxHdENRVUZyUWl4SFFVRkhMR2xDUVVGcFFpeERRVUZETzBGQlF6ZERMRWxCUVUwc1owSkJRV2RDTEVkQlFVY3NUMEZCVHl4RFFVRkRPMEZCUTJwRExFbEJRVTBzYlVKQlFXMUNMRWRCUVVrc1QwRkJUeXhYUVVGWExFdEJRVXNzVjBGQlZ5eEpRVUZKTEZkQlFWY3NRMEZCUXl4SFFVRkhMRUZCUVVNN096czdPenM3TzBGQlFVTXNRVUZSY0VZc1NVRkJUU3hQUVVGUExFZEJRVWNzVlVGQlFTeFJRVUZSTzFkQlFVa3NUVUZCVFN4RFFVRkRMRk5CUVZNc1EwRkJReXhSUVVGUkxFTkJRVU1zU1VGQlNTeERRVUZETEZGQlFWRXNRMEZCUXl4RFFVRkRMRXRCUVVzc1EwRkJReXhEUVVGRExFVkJRVVVzUTBGQlF5eERRVUZETEVOQlFVTTdRMEZCUVRzN096czdPenM3UVVGQlF5eEJRVkV6UlN4SlFVRk5MRmRCUVZjc1YwRkJXQ3hYUVVGWExFZEJRVWNzVlVGQlF5eE5RVUZOTzFkQlFVc3NUVUZCVFN4RFFVRkRMRTlCUVU4c1EwRkJReXhyUWtGQmEwSXNSVUZCUlN4blFrRkJaMElzUTBGQlF5eERRVUZETEZkQlFWY3NSVUZCUlR0RFFVRkJPenM3T3pzN096czdRVUZCUXl4QlFWTnVSeXhKUVVGTkxGbEJRVmtzVjBGQldpeFpRVUZaTEVkQlFVY3NXVUZCTmtJN1VVRkJOVUlzVDBGQlR5eDVSRUZCUnl4RFFVRkRPMUZCUVVVc1MwRkJTeXg1UkVGQlJ5eEZRVUZGT3p0QlFVTm9SQ3hUUVVGTExFTkJRVU1zU1VGQlNTeEhRVUZITEVsQlFVa3NRMEZCUXp0QlFVTnNRaXhUUVVGTExFTkJRVU1zVVVGQlVTeEhRVUZITEU5QlFVOHNTVUZCU1N4RFFVRkRMRU5CUVVNN08wRkJSVGxDTEZkQlFVOHNTMEZCU3l4RFFVRkRPME5CUTJoQ0xFTkJRVUU3TzBGQlJVMHNTVUZCVFN4bFFVRmxMRmRCUVdZc1pVRkJaU3hIUVVGSExGVkJRVU1zVFVGQlRTeEZRVUZGTEV0QlFVc3NSVUZCUlN4VFFVRlRMRVZCUVVVc1NVRkJTU3hGUVVGTE8wRkJReTlFTEZGQlFVa3NVVUZCVVN4SFFVRkhMRVZCUVVVc1EwRkJRenM3UVVGRmJFSXNVMEZCU3l4RFFVRkRMRTlCUVU4c1EwRkJReXhWUVVGRExFbEJRVWtzUlVGQlN6dEJRVU53UWl4WlFVRkpMRTFCUVUwc1EwRkJReXhqUVVGakxFTkJRVU1zUjBGQlJ5eERRVUZETEVWQlFVVTdRVUZETlVJc2IwSkJRVkVzU1VGQlNTeE5RVUZOTEVOQlFVTXNSMEZCUnl4RFFVRkRMRWRCUVVjc1UwRkJVeXhEUVVGRE8xTkJRM1pETzB0QlEwb3NRMEZCUXl4RFFVRkRPenRCUVVWSUxGRkJRVWtzU1VGQlNTeEZRVUZGTzBGQlEwNHNaMEpCUVZFc1IwRkJSeXhSUVVGUkxFTkJRVU1zUzBGQlN5eERRVUZETEVOQlFVTXNSVUZCUlN4RFFVRkRMRWxCUVVrc1EwRkJReXhEUVVGRE8wdEJRM1pET3p0QlFVVkVMRmRCUVU4c1VVRkJVU3hEUVVGRE8wTkJRMjVDT3pzN096czdPenM3T3p0QlFVRkRMRUZCVjBzc1NVRkJUU3h2UWtGQmIwSXNWMEZCY0VJc2IwSkJRVzlDTEVkQlFVY3NWVUZCUXl4TFFVRkxMRVZCUVVVc1RVRkJUVHRYUVVGUkxFMUJRVTBzVTBGQlNTeExRVUZMTzBOQlFVYzdPenM3T3pzN1FVRkJReXhCUVU5MFJTeEpRVUZOTEZkQlFWY3NWMEZCV0N4WFFVRlhMRWRCUVVjN1YwRkJUU3h0UWtGQmJVSXNSMEZCUnl4WFFVRlhMRU5CUVVNc1IwRkJSeXhGUVVGRkxFZEJRVWNzU1VGQlNTeEpRVUZKTEVWQlFVVXNRMEZCUXl4UFFVRlBMRVZCUVVVN1EwRkJRVHM3T3pzN096czdRVUZCUXl4QlFWRjZSaXhKUVVGTkxFbEJRVWtzVjBGQlNpeEpRVUZKTEVkQlFVY3NWVUZCUXl4TlFVRk5MRVZCUVVVc1VVRkJVU3hGUVVGTE8wRkJRM1JETEZGQlFVMHNTVUZCU1N4SFFVRkhMRTFCUVUwc1IwRkJSeXhOUVVGTkxFTkJRVU1zU1VGQlNTeERRVUZETEUxQlFVMHNRMEZCUXl4SFFVRkhMRVZCUVVVc1EwRkJRenRCUVVNdlF5eFJRVUZOTEU5QlFVOHNSMEZCUnl4SlFVRkpMRU5CUVVNc1RVRkJUU3hEUVVGRE96dEJRVVUxUWl4VFFVRkxMRWxCUVVrc1EwRkJReXhIUVVGSExFTkJRVU1zUlVGQlJTeERRVUZETEVkQlFVY3NUMEZCVHl4RlFVRkZMRU5CUVVNc1JVRkJSU3hGUVVGRk8wRkJRemxDTEZsQlFVMHNTMEZCUnl4SFFVRkhMRWxCUVVrc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF6dEJRVU53UWl4WlFVRk5MRWxCUVVrc1IwRkJSeXhOUVVGTkxFTkJRVU1zUzBGQlJ5eERRVUZETEVOQlFVTTdPMEZCUlhwQ0xHZENRVUZSTEVOQlFVTXNTVUZCU1N4RlFVRkZMRXRCUVVjc1JVRkJSU3hOUVVGTkxFTkJRVU1zUTBGQlF6dExRVU12UWp0RFFVTktPenM3T3pzN096czdRVUZCUVN4QlFWTk5MRWxCUVUwc1kwRkJZeXhYUVVGa0xHTkJRV01zUjBGQlJ5eFZRVUZETEV0QlFVc3NSVUZCUlN4VlFVRlZMRVZCUVVzN1FVRkRha1FzVVVGQlRTeFhRVUZYTEVkQlFVY3NSVUZCUlN4RFFVRkRPMEZCUTNaQ0xGRkJRVTBzVFVGQlRTeEhRVUZITEcxQ1FVRnRRaXhEUVVGRExEQkNRVUV3UWl4RFFVRkRMRXRCUVVzc1EwRkJReXhEUVVGRExFTkJRVU03TzBGQlJYUkZMR05CUVZVc1EwRkJReXhQUVVGUExFTkJRVU1zVlVGQlF5eEpRVUZKTEVWQlFVVXNRMEZCUXp0bFFVRkxMRlZCUVZVc1EwRkJReXhKUVVGSkxFTkJRVU1zUjBGQlJ5eEJRVUZETEUxQlFVMHNRMEZCUXl4RFFVRkRMRU5CUVVNc1MwRkJTeXhUUVVGVExFZEJRVWtzVFVGQlRTeERRVUZETEVOQlFVTXNRMEZCUXl4SFFVRkhMRU5CUVVNN1MwRkJRU3hEUVVGRExFTkJRVU03TzBGQlJUbEdMRmRCUVU4c1YwRkJWeXhEUVVGRE8wTkJRM1JDT3pzN096czdPMEZCUVVFc1FVRlBUU3hKUVVGTkxEQkNRVUV3UWl4WFFVRXhRaXd3UWtGQk1FSXNSMEZCUnl4VlFVRkRMRXRCUVVzN1YwRkJTeXhMUVVGTExFTkJRVU1zVTBGQlV5eERRVUZETEV0QlFVc3NRMEZCUXl4UFFVRlBMRU5CUVVNc1IwRkJSeXhEUVVGRExFZEJRVWNzUTBGQlF5eEZRVUZGTEV0QlFVc3NRMEZCUXl4WFFVRlhMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU03UTBGQlFUczdPenM3T3pzN08wRkJRVU1zUVVGVE9VY3NTVUZCVFN4VlFVRlZMRmRCUVZZc1ZVRkJWU3hIUVVGSExGVkJRVU1zUTBGQlF5eEZRVUZGTEVOQlFVTXNSVUZCU3p0QlFVTm9ReXhSUVVGSkxFOUJRVThzUjBGQlJ5eExRVUZMTEVOQlFVTTdPMEZCUlhCQ0xGRkJRVWtzUTBGQlF5eERRVUZETEVWQlFVVXNWVUZCUXl4TFFVRkxMRVZCUVVVc1IwRkJSeXhGUVVGTE8wRkJRM0JDTEZsQlFVa3NWMEZCVnl4RFFVRkRMRU5CUVVNc1JVRkJSU3hIUVVGSExFTkJRVU1zUlVGQlJUdEJRVU55UWl4blFrRkJTU3hMUVVGTExFdEJRVXNzUTBGQlF5eERRVUZETEVkQlFVY3NRMEZCUXl4RlFVRkZPMEZCUTJ4Q0xIVkNRVUZQTEVkQlFVY3NTVUZCU1N4RFFVRkRPMkZCUTJ4Q08xTkJRMG9zVFVGQlRUdEJRVU5JTEcxQ1FVRlBMRWRCUVVjc1NVRkJTU3hEUVVGRE8xTkJRMnhDTzB0QlEwb3NRMEZCUXl4RFFVRkRPenRCUVVWSUxGZEJRVThzVDBGQlR5eERRVUZETzBOQlEyeENPenM3T3pzN096czdRVUZCUXl4QlFWTkxMRWxCUVUwc1YwRkJWeXhYUVVGWUxGZEJRVmNzUjBGQlJ5eFZRVUZETEUxQlFVMHNSVUZCUlN4WlFVRlpPMWRCUVVzc1RVRkJUU3hEUVVGRExHTkJRV01zUTBGQlF5eFpRVUZaTEVOQlFVTXNTVUZCU1N4TlFVRk5MRU5CUVVNc1dVRkJXU3hEUVVGRExFdEJRVXNzVTBGQlV6dERRVUZCT3pzN096czdPenRCUVVGRExFRkJVWGhJTEVsQlFVMHNUMEZCVHl4WFFVRlFMRTlCUVU4c1IwRkJSeXhWUVVGRExFZEJRVWM3VjBGQlN5eFBRVUZQTEVOQlFVTXNSMEZCUnl4RFFVRkRMRXRCUVVzc1QwRkJUenREUVVGQk96czdPenM3T3p0QlFVRkRMRUZCVVd4RUxFbEJRVTBzVFVGQlRTeFhRVUZPTEUxQlFVMHNSMEZCUnl4VlFVRkRMRWRCUVVjN1YwRkJTeXhQUVVGUExFTkJRVU1zUjBGQlJ5eERRVUZETEV0QlFVc3NWVUZCVlR0RFFVRkJPenM3T3pzN096dEJRVUZETEVGQlVYQkVMRWxCUVUwc1MwRkJTeXhYUVVGTUxFdEJRVXNzUjBGQlJ5eFZRVUZETEVkQlFVYzdWMEZCU3l4UFFVRlBMRWRCUVVjc1MwRkJTeXhSUVVGUk8wTkJRVUU3T3pzN096czdPMEZCUVVNc1FVRlJMME1zU1VGQlRTeExRVUZMTEZkQlFVd3NTMEZCU3l4SFFVRkhMRlZCUVVNc1IwRkJSenRYUVVGTExFOUJRVThzUjBGQlJ5eExRVUZMTEZGQlFWRTdRMEZCUVRzN096czdPenM3UVVGQlF5eEJRVkV2UXl4SlFVRk5MR1ZCUVdVc1YwRkJaaXhsUVVGbExFZEJRVWNzVlVGQlF5eExRVUZMTzFkQlFVc3NRVUZCUXl4TFFVRkxMRWxCUVVrc1MwRkJTeXhEUVVGRExFOUJRVThzU1VGQlNTeExRVUZMTEVOQlFVTXNUMEZCVHl4RFFVRkRMRWRCUVVjc1EwRkJReXhIUVVGSExFTkJRVU1zUjBGQlNTeEpRVUZKTEVkQlFVY3NTMEZCU3p0RFFVRkJPenM3T3pzN096dEJRVUZETEVGQlVYSkhMRWxCUVUwc1VVRkJVU3hYUVVGU0xGRkJRVkVzUjBGQlJ5eFZRVUZETEVkQlFVYzdWMEZCU3l4UFFVRlBMRWRCUVVjc1MwRkJTeXhSUVVGUk8wTkJRVUU3T3pzN096czdPenRCUVVGRExFRkJVMnhFTEVsQlFVMHNVMEZCVXl4WFFVRlVMRk5CUVZNc1IwRkJSeXhWUVVGRExGRkJRVkVzUlVGQlN6dEJRVU51UXl4UlFVRk5MRXRCUVVzc1IwRkJSeXhCUVVGRExFOUJRVThzVVVGQlVTeExRVUZMTEZGQlFWRXNSMEZCU1N4UlFVRlJMRU5CUVVNc1owSkJRV2RDTEVOQlFVTXNVVUZCVVN4RFFVRkRMRWRCUVVjc1VVRkJVU3hEUVVGRE8wRkJRemxHTEZkQlFVOHNRVUZCUXl4TFFVRkxMRU5CUVVNc1RVRkJUU3hIUVVGSkxFVkJRVVVzUTBGQlF5eExRVUZMTEVOQlFVTXNTVUZCU1N4RFFVRkRMRXRCUVVzc1EwRkJReXhIUVVGSExFVkJRVVVzUTBGQlF5eEpRVUZKTEVOQlFVTXNTMEZCU3l4RFFVRkRMRU5CUVVNN1EwRkRha1U3T3pzN096czdPenM3UVVGQlF5eEJRVlZMTEVsQlFVMHNiVUpCUVcxQ0xGZEJRVzVDTEcxQ1FVRnRRaXhIUVVGSExGVkJRVU1zUzBGQlN6dFhRVUZMTEZGQlFWRXNRMEZCUXl4TFFVRkxMRU5CUVVNc1IwRkJSeXhMUVVGTExFTkJRVU1zUzBGQlN5eERRVUZETEUxQlFVMHNRMEZCUXl4SFFVRkhMRU5CUVVNc1MwRkJTeXhEUVVGRE8wTkJRVUU3T3pzN096czdPenM3UVVGQlF5eEJRVlYyUml4SlFVRk5MRzFDUVVGdFFpeFhRVUZ1UWl4dFFrRkJiVUlzUjBGQlJ5eFZRVUZETEV0QlFVczdWMEZCU3l4UlFVRlJMRU5CUVVNc1MwRkJTeXhEUVVGRExFZEJRVWNzUzBGQlN5eERRVUZETEV0QlFVc3NRMEZCUXl4SFFVRkhMRU5CUVVNc1IwRkJSeXhEUVVGRExFdEJRVXNzUTBGQlF6dERRVUZCT3pzN096czdPenM3TzBGQlFVTXNRVUZWY0VZc1NVRkJUU3hqUVVGakxGZEJRV1FzWTBGQll5eEhRVUZITEZWQlFVTXNTMEZCU3l4RlFVRkxPMEZCUTNKRExGRkJRVTBzVVVGQlVTeEhRVUZITEV0QlFVc3NRMEZCUXl4TFFVRkxMRU5CUVVNc2JVSkJRVzFDTEVOQlFVTXNRMEZCUXpzN1FVRkZiRVFzVjBGQlR6dEJRVU5JTEdGQlFVc3NSVUZCUlN4VlFVRlZMRU5CUVVNc1VVRkJVU3hEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETzBGQlF6bENMRmxCUVVrc1JVRkJSeXhSUVVGUkxFTkJRVU1zUTBGQlF5eERRVUZETzB0QlEzSkNMRU5CUVVNN1EwRkRURHM3T3pzN096czdPMEZCUVVNc1FVRlRTeXhKUVVGTkxGTkJRVk1zVjBGQlZDeFRRVUZUTEVkQlFVY3NWVUZCUXl4SFFVRkhMRVZCUVc5Q08xRkJRV3hDTEZOQlFWTXNlVVJCUVVjc1EwRkJRenM3UVVGRGVFTXNZVUZCVXl4WlFVRkhMRVZCUVVVc1JVRkJTU3hUUVVGVExFTkJRVUVzUTBGQlF6dEJRVU0xUWl4WFFVRlBMRWxCUVVrc1EwRkJReXhMUVVGTExFTkJRVU1zUjBGQlJ5eEhRVUZITEZOQlFWTXNRMEZCUXl4SFFVRkhMRk5CUVZNc1EwRkJRenREUVVOc1JDeERRVUZESWl3aVptbHNaU0k2SW5WMGFXeHpMbXB6SWl3aWMyOTFjbU5sYzBOdmJuUmxiblFpT2xzaVpuVnVZM1JwYjI0Z2NIVnphQ2d1TGk1aGNtZHpLU0I3WEc0Z0lDQWdRWEp5WVhrdWNISnZkRzkwZVhCbExuQjFjMmd1WTJGc2JDaDBhR2x6TENBdUxpNWhjbWR6S1R0Y2JseHVJQ0FnSUdsbUlDaDBhR2x6TG14bGJtZDBhQ0ErUFNCMGFHbHpMbDl0WVhoVGFYcGxLU0I3WEc0Z0lDQWdJQ0FnSUhSb2FYTXVjMmhwWm5Rb0tUdGNiaUFnSUNCOVhHNTlYRzVjYm1OdmJuTjBJRU5CVFVWTVgwTkJVMFZmVUVGVVZFVlNUaUE5SUM4b1cyRXRlbDBwS0Z0QkxWcGRLUzluTzF4dVkyOXVjM1FnVWtWUVRFRkRSVjlVUlUxUVRFRlVSU0E5SUNja01TMGtNaWM3WEc1amIyNXpkQ0JJUVZOZlVFVlNSazlTVFVGT1EwVmZUazlYSUQwZ0tIUjVjR1Z2WmlCd1pYSm1iM0p0WVc1alpTQWhQVDBnSjNWdVpHVm1hVzVsWkNjZ0ppWWdjR1Z5Wm05eWJXRnVZMlV1Ym05M0tUdGNibHh1THlwY2JpQWdJQ0JIWlhRZ2RtRnlJSFI1Y0dVZ1lYTWdjM1J5YVc1blhHNGdJQ0FnWEc0Z0lDQWdRSEJoY21GdE9pQldZWEpwWVdKc1pTQjBieUIwWlhOMFhHNGdJQ0FnUUhKbGRIVnliaUJiYzNSeWFXNW5YVG9nVW1WMGRYSnVjeXdnWm05eUlHbHVjM1JoYm1ObElDZFBZbXBsWTNRbklHbG1JRnR2WW1wbFkzUWdUMkpxWldOMFhWeHVLaTljYm1OdmJuTjBJSFpoY2xSNWNHVWdQU0IyWVhKcFlXSnNaU0E5UGlCUFltcGxZM1F1Y0hKdmRHOTBlWEJsTG5SdlUzUnlhVzVuTG1OaGJHd29kbUZ5YVdGaWJHVXBMbk5zYVdObEtEZ3NJQzB4S1R0Y2JseHVMeXBjYmlBZ0lDQkRiMjUyWlhKMElHTmhiV1ZzUTJGelpTQjBieUJrWVhOb0xXTmhjMlZjYmx4dUlDQWdJRUJ3WVhKaGJTQmJjM1J5YVc1blhWeHVJQ0FnSUVCeVpYUjFjbTRnVzNOMGNtbHVaMTFjYmlvdlhHNWxlSEJ2Y25RZ1kyOXVjM1FnWTJGdFpXeFViMFJoYzJnZ1BTQW9jM1J5YVc1bktTQTlQaUJ6ZEhKcGJtY3VjbVZ3YkdGalpTaERRVTFGVEY5RFFWTkZYMUJCVkZSRlVrNHNJRkpGVUV4QlEwVmZWRVZOVUV4QlZFVXBMblJ2VEc5M1pYSkRZWE5sS0NrN1hHNWNiaThxWEc0Z0lDQWdRM0psWVhSbElHRnVJR0YxZEc4dFkzVnNiR2x1WnlCaWRXWm1aWElnWVhKeVlYbGNibHh1SUNBZ0lFQndZWEpoYlNCYllYSnlZWGxkWEc0Z0lDQWdRSEJoY21GdElGdHBiblJkWEc0Z0lDQWdRSEpsZEhWeWJpQmJZWEp5WVhsZFhHNHFMMXh1Wlhod2IzSjBJR052Ym5OMElHTnlaV0YwWlVKMVptWmxjaUE5SUNodFlYaFRhWHBsSUQwZ015d2dZWEp5WVhrZ1BTQmJYU2tnUFQ0Z2UxeHVJQ0FnSUdGeWNtRjVMbkIxYzJnZ1BTQndkWE5vTzF4dUlDQWdJR0Z5Y21GNUxsOXRZWGhUYVhwbElEMGdiV0Y0VTJsNlpTQjhmQ0F3TzF4dVhHNGdJQ0FnY21WMGRYSnVJR0Z5Y21GNU8xeHVmVnh1WEc1bGVIQnZjblFnWTI5dWMzUWdZM0psWVhSbFJHVnNhVzFwZEdWa0lEMGdLSFpoYkhWbGN5d2dkR1Z5YlhNc0lHUmxiR2x0YVhSbGNpd2dZMmh2Y0NrZ1BUNGdlMXh1SUNBZ0lHeGxkQ0JqYjIxaWFXNWxaQ0E5SUNjbk8xeHVYRzRnSUNBZ2RHVnliWE11Wm05eVJXRmphQ2dvZEdWeWJTa2dQVDRnZTF4dUlDQWdJQ0FnSUNCcFppQW9kbUZzZFdWekxtaGhjMDkzYmxCeWIzQmxjblI1S0d0bGVTa3BJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lHTnZiV0pwYm1Wa0lDczlJSFpoYkhWbGMxdHJaWGxkSUNzZ1pHVnNhVzFwZEdWeU8xeHVJQ0FnSUNBZ0lDQjlYRzRnSUNBZ2ZTazdYRzVjYmlBZ0lDQnBaaUFvWTJodmNDa2dlMXh1SUNBZ0lDQWdJQ0JqYjIxaWFXNWxaQ0E5SUdOdmJXSnBibVZrTG5Oc2FXTmxLREFzSUMxamFHOXdLVHRjYmlBZ0lDQjlYRzVjYmlBZ0lDQnlaWFIxY200Z1kyOXRZbWx1WldRN1hHNTlPMXh1WEc0dktseHVJQ0FnSUVOeVpXRjBaU0JoSUdaMWJtTjBhVzl1SUhOMGNtbHVaMXh1WEc0Z0lDQWdKekl3Y0hnbkxDQW5kSEpoYm5Oc1lYUmxKeUF0UGlBbmRISmhibk5zWVhSbEtESXdjSGdwSjF4dVhHNGdJQ0FnUUhCaGNtRnRJRnR6ZEhKcGJtZGRYRzRnSUNBZ1FIQmhjbUZ0SUZ0emRISnBibWRkWEc0Z0lDQWdRSEpsZEhWeWJpQmJjM1J5YVc1blhWeHVLaTljYm1WNGNHOXlkQ0JqYjI1emRDQmpjbVZoZEdWR2RXNWpkR2x2YmxOMGNtbHVaeUE5SUNoMllXeDFaU3dnY0hKbFptbDRLU0E5UGlCZ0pIdHdjbVZtYVhoOUtDUjdkbUZzZFdWOUtXQTdYRzVjYmk4cVhHNGdJQ0FnUjJWdVpYSmhkR1VnWTNWeWNtVnVkQ0IwYVcxbGMzUmhiWEJjYmlBZ0lDQmNiaUFnSUNCQWNtVjBkWEp1SUZ0MGFXMWxjM1JoYlhCZE9pQkRkWEp5Wlc1MElGVk9TVmdnZEdsdFpYTjBZVzF3WEc0cUwxeHVaWGh3YjNKMElHTnZibk4wSUdOMWNuSmxiblJVYVcxbElEMGdLQ2tnUFQ0Z1NFRlRYMUJGVWtaUFVrMUJUa05GWDA1UFZ5QS9JSEJsY21admNtMWhibU5sTG01dmR5Z3BJRG9nYm1WM0lFUmhkR1VvS1M1blpYUlVhVzFsS0NrN1hHNWNiaThxWEc0Z0lDQWdTWFJsY21GMFpTQnZkbVZ5SUdGdUlHOWlhbVZqZENCaGJtUWdabWx5WlNCaElHTmhiR3hpWVdOcklHWnZjaUJsZG1WeWVTQnBkR1Z0SUdsdUlHbDBYRzVjYmlBZ0lDQkFjR0Z5WVcwZ1cyOWlhbVZqZEYwNklFOWlhbVZqZENCMGJ5QnBkR1Z5WVhSbElHOTJaWEpjYmlBZ0lDQkFjR0Z5WVcwZ1cyWjFibU4wYVc5dVhUb2dRMkZzYkdKaFkyc2dkRzhnWm1seVpWeHVLaTljYm1WNGNHOXlkQ0JqYjI1emRDQmxZV05vSUQwZ0tHOWlhbVZqZEN3Z1kyRnNiR0poWTJzcElEMCtJSHRjYmlBZ0lDQmpiMjV6ZENCclpYbHpJRDBnYjJKcVpXTjBJRDhnVDJKcVpXTjBMbXRsZVhNb2IySnFaV04wS1NBNklGdGRPMXh1SUNBZ0lHTnZibk4wSUc1MWJVdGxlWE1nUFNCclpYbHpMbXhsYm1kMGFEdGNibHh1SUNBZ0lHWnZjaUFvYkdWMElHa2dQU0F3T3lCcElEd2diblZ0UzJWNWN6c2dhU3NyS1NCN1hHNGdJQ0FnSUNBZ0lHTnZibk4wSUd0bGVTQTlJR3RsZVhOYmFWMDdYRzRnSUNBZ0lDQWdJR052Ym5OMElIQnliM0FnUFNCdlltcGxZM1JiYTJWNVhUdGNibHh1SUNBZ0lDQWdJQ0JqWVd4c1ltRmpheWh3Y205d0xDQnJaWGtzSUc5aWFtVmpkQ2s3WEc0Z0lDQWdmVnh1ZlZ4dVhHNHZLbHh1SUNBZ0lGTndiR2wwSUdOdmJHOXlJSE4wY21sdVp5QnBiblJ2SUcxaGNDQnZaaUJqYjJ4dmNpQndjbTl3WlhKMGFXVnpYRzVjYmlBZ0lDQmNJbkpuWW1Fb01qVTFMQ0F5TlRVc0lESTFOU3dnTUNsY0lpd2dXMXdpVW1Wa1hDSXNJQ2RIY21WbGJsd2lMQ0JjSWtKc2RXVmNJaXdnWENKQmJIQm9ZVndpWFZ4dVhHNGdJQ0FnZXlCU1pXUTZJREkxTlM0dUxpQjlYRzRxTDF4dVpYaHdiM0owSUdOdmJuTjBJR2RsZEVOdmJHOXlWbUZzZFdWeklEMGdLSFpoYkhWbExDQmpiMnh2Y2xSbGNtMXpLU0E5UGlCN1hHNGdJQ0FnWTI5dWMzUWdZMjlzYjNKV1lXeDFaWE1nUFNCN2ZUdGNiaUFnSUNCamIyNXpkQ0JqYjJ4dmNuTWdQU0J6Y0d4cGRFTnZiVzFoUkdWc2FXMXBkR1ZrS0dkbGRGWmhiSFZsUm5KdmJVWjFibU4wYVc5dVUzUnlhVzVuS0haaGJIVmxLU2s3WEc1Y2JpQWdJQ0JqYjJ4dmNsUmxjbTF6TG1admNrVmhZMmdvS0hSbGNtMHNJR2twSUQwK0lHTnZiRzl5VkdWeWJYTmJkR1Z5YlYwZ1BTQW9ZMjlzYjNKelcybGRJQ0U5UFNCMWJtUmxabWx1WldRcElEOGdZMjlzYjNKelcybGRJRG9nTVNrN1hHNWNiaUFnSUNCeVpYUjFjbTRnWTI5c2IzSldZV3gxWlhNN1hHNTlYRzVjYmk4cVhHNGdJQ0FnUjJWMElIWmhiSFZsSUdaeWIyMGdablZ1WTNScGIyNGdjM1J5YVc1blhHNWNiaUFnSUNCY0luUnlZVzV6YkdGMFpWZ29NakJ3ZUNsY0lpQXRQaUJjSWpJd2NIaGNJbHh1S2k5Y2JtVjRjRzl5ZENCamIyNXpkQ0JuWlhSV1lXeDFaVVp5YjIxR2RXNWpkR2x2YmxOMGNtbHVaeUE5SUNoMllXeDFaU2tnUFQ0Z2RtRnNkV1V1YzNWaWMzUnlhVzVuS0haaGJIVmxMbWx1WkdWNFQyWW9KeWduS1NBcklERXNJSFpoYkhWbExteGhjM1JKYm1SbGVFOW1LQ2NwSnlrcE8xeHVYRzR2S2x4dUlDQWdJRU5vWldOcklHbG1JSFIzYnlCdlltcGxZM1J6SUdoaGRtVWdZMmhoYm1kbFpDQm1jbTl0SUdWaFkyZ2diM1JvWlhKY2JpQWdJQ0JjYmlBZ0lDQkFjR0Z5WVcwZ1cyOWlhbVZqZEYwNklFbHVjSFYwSUVGY2JpQWdJQ0JBY0dGeVlXMGdXMjlpYW1WamRGMDZJRWx1Y0hWMElFSmNiaUFnSUNCQWNtVjBkWEp1SUZ0aWIyOXNaV0Z1WFRvZ1ZISjFaU0JwWmlCa2FXWm1aWEpsYm5SY2Jpb3ZYRzVsZUhCdmNuUWdZMjl1YzNRZ2FHRnpRMmhoYm1kbFpDQTlJQ2hoTENCaUtTQTlQaUI3WEc0Z0lDQWdiR1YwSUdOb1lXNW5aV1FnUFNCbVlXeHpaVHRjYmx4dUlDQWdJR1ZoWTJnb1lTd2dLSFpoYkhWbExDQnJaWGtwSUQwK0lIdGNiaUFnSUNBZ0lDQWdhV1lnS0doaGMxQnliM0JsY25SNUtHSXNJR3RsZVNrcElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUdsbUlDaDJZV3gxWlNBaFBUMGdZbHRyWlhsZEtTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdZMmhoYm1kbFpDQTlJSFJ5ZFdVN1hHNGdJQ0FnSUNBZ0lDQWdJQ0I5WEc0Z0lDQWdJQ0FnSUgwZ1pXeHpaU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQmphR0Z1WjJWa0lEMGdkSEoxWlR0Y2JpQWdJQ0FnSUNBZ2ZWeHVJQ0FnSUgwcE8xeHVYRzRnSUNBZ2NtVjBkWEp1SUdOb1lXNW5aV1E3WEc1OU8xeHVYRzR2S2x4dUlDQWdJRU5vWldOcklHbG1JRzlpYW1WamRDQm9ZWE1nY0hKdmNHVnlkSGtnWVc1a0lHbDBJR2x6YmlkMElIVnVaR1ZtYVc1bFpGeHVYRzRnSUNBZ1FIQmhjbUZ0SUZ0dlltcGxZM1JkWEc0Z0lDQWdRSEJoY21GdElGdHpkSEpwYm1kZFhHNGdJQ0FnUUhKbGRIVnliaUJiWW05dmJHVmhibDFjYmlvdlhHNWxlSEJ2Y25RZ1kyOXVjM1FnYUdGelVISnZjR1Z5ZEhrZ1BTQW9iMkpxWldOMExDQndjbTl3WlhKMGVVNWhiV1VwSUQwK0lHOWlhbVZqZEM1b1lYTlBkMjVRY205d1pYSjBlU2h3Y205d1pYSjBlVTVoYldVcElDWW1JRzlpYW1WamRGdHdjbTl3WlhKMGVVNWhiV1ZkSUNFOVBTQjFibVJsWm1sdVpXUTdYRzVjYmk4cVhHNGdJQ0FnU1hNZ2RYUnBiSE1nZG1GeUlHRnVJR0Z5Y21GNUlEOGdYRzRnSUNBZ1hHNGdJQ0FnUUhCaGNtRnRPaUJXWVhKcFlXSnNaU0IwYnlCMFpYTjBYRzRnSUNBZ1FISmxkSFZ5YmlCYlltOXZiR1ZoYmwwNklGSmxkSFZ5Ym5NZ2RISjFaU0JwWmlCMWRHbHNjeTUyWVhKVWVYQmxJRDA5UFNBblFYSnlZWGtuWEc0cUwxeHVaWGh3YjNKMElHTnZibk4wSUdselFYSnlZWGtnUFNBb1lYSnlLU0E5UGlCMllYSlVlWEJsS0dGeWNpa2dQVDA5SUNkQmNuSmhlU2M3WEc1Y2JpOHFYRzRnSUNBZ1NYTWdkWFJwYkhNZ2RtRnlJR0VnWm5WdVkzUnBiMjRnUHlCY2JpQWdJQ0JjYmlBZ0lDQkFjR0Z5WVcwNklGWmhjbWxoWW14bElIUnZJSFJsYzNSY2JpQWdJQ0JBY21WMGRYSnVJRnRpYjI5c1pXRnVYVG9nVW1WMGRYSnVjeUIwY25WbElHbG1JSFYwYVd4ekxuWmhjbFI1Y0dVZ1BUMDlJQ2RHZFc1amRHbHZiaWRjYmlvdlhHNWxlSEJ2Y25RZ1kyOXVjM1FnYVhOR2RXNWpJRDBnS0c5aWFpa2dQVDRnZG1GeVZIbHdaU2h2WW1vcElEMDlQU0FuUm5WdVkzUnBiMjRuTzF4dVhHNHZLbHh1SUNBZ0lFbHpJSFYwYVd4eklIWmhjaUJoSUc1MWJXSmxjajljYmlBZ0lDQmNiaUFnSUNCQWNHRnlZVzA2SUZaaGNtbGhZbXhsSUhSdklIUmxjM1JjYmlBZ0lDQkFjbVYwZFhKdUlGdGliMjlzWldGdVhUb2dVbVYwZFhKdWN5QjBjblZsSUdsbUlIUjVjR1Z2WmlBOVBUMGdKMjUxYldKbGNpZGNiaW92WEc1bGVIQnZjblFnWTI5dWMzUWdhWE5PZFcwZ1BTQW9iblZ0S1NBOVBpQjBlWEJsYjJZZ2JuVnRJRDA5UFNBbmJuVnRZbVZ5Snp0Y2JseHVMeXBjYmlBZ0lDQkpjeUIxZEdsc2N5QjJZWElnWVc0Z2IySnFaV04wUDF4dUlDQWdJRnh1SUNBZ0lFQndZWEpoYlRvZ1ZtRnlhV0ZpYkdVZ2RHOGdkR1Z6ZEZ4dUlDQWdJRUJ5WlhSMWNtNGdXMkp2YjJ4bFlXNWRPaUJTWlhSMWNtNXpJSFJ5ZFdVZ2FXWWdkSGx3Wlc5bUlEMDlQU0FuYjJKcVpXTjBKMXh1S2k5Y2JtVjRjRzl5ZENCamIyNXpkQ0JwYzA5aWFpQTlJQ2h2WW1vcElEMCtJSFI1Y0dWdlppQnZZbW9nUFQwOUlDZHZZbXBsWTNRbk8xeHVYRzR2S2x4dUlDQWdJRWx6SUhWMGFXeHpJR0VnY21Wc1lYUnBkbVVnZG1Gc2RXVWdZWE56YVdkdWJXVnVkRDljYmlBZ0lDQmNiaUFnSUNCQWNHRnlZVzBnVzNOMGNtbHVaMTA2SUZaaGNtbGhZbXhsSUhSdklIUmxjM1JjYmlBZ0lDQkFjbVYwZFhKdUlGdGliMjlzWldGdVhUb2dTV1lnZFhScGJITWdiRzl2YTNNZ2JHbHJaU0JoSUhKbGJHRjBhWFpsSUhaaGJIVmxJR0Z6YzJsbmJtMWxiblJjYmlvdlhHNWxlSEJ2Y25RZ1kyOXVjM1FnYVhOU1pXeGhkR2wyWlZaaGJIVmxJRDBnS0haaGJIVmxLU0E5UGlBb2RtRnNkV1VnSmlZZ2RtRnNkV1V1YVc1a1pYaFBaaUFtSmlCMllXeDFaUzVwYm1SbGVFOW1LQ2M5SnlrZ1BpQXdLU0EvSUhSeWRXVWdPaUJtWVd4elpUdGNibHh1THlwY2JpQWdJQ0JKY3lCMWRHbHNjeUIyWVhJZ1lTQnpkSEpwYm1jZ1B5QmNiaUFnSUNCY2JpQWdJQ0JBY0dGeVlXMDZJRlpoY21saFlteGxJSFJ2SUhSbGMzUmNiaUFnSUNCQWNtVjBkWEp1SUZ0aWIyOXNaV0Z1WFRvZ1VtVjBkWEp1Y3lCMGNuVmxJR2xtSUhSNWNHVnZaaUJ6ZEhJZ1BUMDlJQ2R6ZEhKcGJtY25YRzRxTDF4dVpYaHdiM0owSUdOdmJuTjBJR2x6VTNSeWFXNW5JRDBnS0hOMGNpa2dQVDRnZEhsd1pXOW1JSE4wY2lBOVBUMGdKM04wY21sdVp5YzdYRzVjYmk4cVhHNGdJQ0FnUUhCaGNtRnRJRnR6ZEhKcGJtY2dmSHdnVG05a1pVeHBjM1JkT2x4dUlDQWdJQ0FnSUNCSlppQnpkSEpwYm1jc0lIUnlaV0YwWldRZ1lYTWdjMlZzWldOMGIzSXVYRzRnSUNBZ0lDQWdJRWxtSUc1dmRDd2dkSEpsWVhSbFpDQmhjeUJ3Y21WbGVHbHpkR2x1WnlCT2IyUmxUR2x6ZEZ4dVhHNGdJQ0FnUUhKbGRIVnliaUJiUVhKeVlYbGRYRzRxTDF4dVpYaHdiM0owSUdOdmJuTjBJSE5sYkdWamRFUnZiU0E5SUNoelpXeGxZM1J2Y2lrZ1BUNGdlMXh1SUNBZ0lHTnZibk4wSUc1dlpHVnpJRDBnS0hSNWNHVnZaaUJ6Wld4bFkzUnZjaUE5UFQwZ0ozTjBjbWx1WnljcElEOGdaRzlqZFcxbGJuUXVjWFZsY25sVFpXeGxZM1J2Y2tGc2JDaHpaV3hsWTNSdmNpa2dPaUJ6Wld4bFkzUnZjanRjYmlBZ0lDQnlaWFIxY200Z0tHNXZaR1Z6TG14bGJtZDBhQ2tnUHlCYlhTNXpiR2xqWlM1allXeHNLRzV2WkdWektTQTZJRnRkTG5CMWMyZ29ibTlrWlhNcE8xeHVmVHRjYmx4dUx5cGNiaUFnSUNCVGNHeHBkQ0JqYjIxdFlTMWtaV3hwYldsMFpXUWdjM1J5YVc1blhHNWNiaUFnSUNCY0ltWnZieXhpWVhKY0lpQXRQaUJiWENKbWIyOWNJaXdnWENKaVlYSmNJbDFjYmx4dUlDQWdJRUJ3WVhKaGJTQmJjM1J5YVc1blhWeHVJQ0FnSUVCeVpYUjFjbTRnVzJGeWNtRjVYVnh1S2k5Y2JtVjRjRzl5ZENCamIyNXpkQ0J6Y0d4cGRFTnZiVzFoUkdWc2FXMXBkR1ZrSUQwZ0tIWmhiSFZsS1NBOVBpQnBjMU4wY21sdVp5aDJZV3gxWlNrZ1B5QjJZV3gxWlM1emNHeHBkQ2d2TEZ4Y2N5b3ZLU0E2SUZ0MllXeDFaVjA3WEc1Y2JpOHFYRzRnSUNBZ1UzQnNhWFFnYzNCaFkyVXRaR1ZzYVcxcGRHVmtJSE4wY21sdVoxeHVYRzRnSUNBZ1hDSm1iMjhnWW1GeVhDSWdMVDRnVzF3aVptOXZYQ0lzSUZ3aVltRnlYQ0pkWEc1Y2JpQWdJQ0JBY0dGeVlXMGdXM04wY21sdVoxMWNiaUFnSUNCQWNtVjBkWEp1SUZ0aGNuSmhlVjFjYmlvdlhHNWxlSEJ2Y25RZ1kyOXVjM1FnYzNCc2FYUlRjR0ZqWlVSbGJHbHRhWFJsWkNBOUlDaDJZV3gxWlNrZ1BUNGdhWE5UZEhKcGJtY29kbUZzZFdVcElEOGdkbUZzZFdVdWMzQnNhWFFvSnlBbktTQTZJRnQyWVd4MVpWMDdYRzVjYmk4cVhHNGdJQ0FnVTNCc2FYUWdZU0IyWVd4MVpTQnBiblJ2SUdFZ2RtRnNkV1V2ZFc1cGRDQnZZbXBsWTNSY2JpQWdJQ0JjYmlBZ0lDQWdJQ0FnWENJeU1EQndlRndpSUMwK0lIc2dkbUZzZFdVNklESXdNQ3dnZFc1cGREb2dYQ0p3ZUZ3aUlIMWNiaUFnSUNBZ0lDQWdYRzRnSUNBZ1FIQmhjbUZ0SUZ0emRISnBibWRkT2lCV1lXeDFaU0IwYnlCemNHeHBkRnh1SUNBZ0lFQnlaWFIxY200Z1cyOWlhbVZqZEYwNklFOWlhbVZqZENCM2FYUm9JSFpoYkhWbElHRnVaQ0IxYm1sMElIQnliM0J6WEc0cUwxeHVaWGh3YjNKMElHTnZibk4wSUhOd2JHbDBWbUZzZFdWVmJtbDBJRDBnS0haaGJIVmxLU0E5UGlCN1hHNGdJQ0FnWTI5dWMzUWdjM0JzYVhSV1lXd2dQU0IyWVd4MVpTNXRZWFJqYUNndktDMC9YRnhrS2x4Y0xqOWNYR1FxS1NndUtpa3ZLVHRjYmx4dUlDQWdJSEpsZEhWeWJpQjdYRzRnSUNBZ0lDQWdJSFpoYkhWbE9pQndZWEp6WlVac2IyRjBLSE53YkdsMFZtRnNXekZkS1N4Y2JpQWdJQ0FnSUNBZ2RXNXBkRG9nSUhOd2JHbDBWbUZzV3pKZFhHNGdJQ0FnZlR0Y2JuMDdYRzVjYmk4cVhHNGdJQ0FnUTI5dWRtVnlkQ0J1ZFcxaVpYSWdkRzhnZUNCa1pXTnBiV0ZzSUhCc1lXTmxjMXh1WEc0Z0lDQWdRSEJoY21GdElGdHVkVzFpWlhKZFhHNGdJQ0FnUUhCaGNtRnRJRnR1ZFcxaVpYSmRYRzRnSUNBZ1FISmxkSFZ5YmlCYmJuVnRZbVZ5WFZ4dUtpOWNibVY0Y0c5eWRDQmpiMjV6ZENCMGIwUmxZMmx0WVd3Z1BTQW9iblZ0TENCd2NtVmphWE5wYjI0Z1BTQXlLU0E5UGlCN1hHNGdJQ0FnY0hKbFkybHphVzl1SUQwZ01UQWdLaW9nY0hKbFkybHphVzl1TzF4dUlDQWdJSEpsZEhWeWJpQk5ZWFJvTG5KdmRXNWtLRzUxYlNBcUlIQnlaV05wYzJsdmJpa2dMeUJ3Y21WamFYTnBiMjQ3WEc1OU8xeHVJbDE5XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9pbmMvdXRpbHMuanNcbiAqKiBtb2R1bGUgaWQgPSAxNVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0cy5kZWZhdWx0ID0gY3ViaWNCZXppZXI7XG4vKlxuICAgIEJlemllciBmdW5jdGlvbiBnZW5lcmF0b3JcbiAgICAgICAgXG4gICAgR2HDq3RhbiBSZW5hdWRlYXUncyBCZXppZXJFYXNpbmdcbiAgICBodHRwczovL2dpdGh1Yi5jb20vZ3JlL2Jlemllci1lYXNpbmcvYmxvYi9tYXN0ZXIvaW5kZXguanMgIFxuICAgIGh0dHBzOi8vZ2l0aHViLmNvbS9ncmUvYmV6aWVyLWVhc2luZy9ibG9iL21hc3Rlci9MSUNFTlNFXG4gICAgWW91J3JlIGEgaGVyb1xuICAgIFxuICAgIFVzZVxuICAgIFxuICAgICAgICB2YXIgZWFzZU91dCA9IG5ldyBCZXppZXIoLjE3LC42NywuODMsLjY3KSxcbiAgICAgICAgICAgIHggPSBlYXNlT3V0KDAuNSk7IC8vIHJldHVybnMgMC42MjcuLi5cbiovXG5cbi8vIENvbnN0YW50c1xudmFyIE5FV1RPTl9JVEVSQVRJT05TID0gODtcbnZhciBORVdUT05fTUlOX1NMT1BFID0gMC4wMDE7XG52YXIgU1VCRElWSVNJT05fUFJFQ0lTSU9OID0gMC4wMDAwMDAxO1xudmFyIFNVQkRJVklTSU9OX01BWF9JVEVSQVRJT05TID0gMTA7XG52YXIgS19TUExJTkVfVEFCTEVfU0laRSA9IDExO1xudmFyIEtfU0FNUExFX1NURVBfU0laRSA9IDEuMCAvIChLX1NQTElORV9UQUJMRV9TSVpFIC0gMS4wKTtcbnZhciBGTE9BVF8zMl9TVVBQT1JURUQgPSB0eXBlb2YgRmxvYXQzMkFycmF5ICE9PSAndW5kZWZpbmVkJztcblxuLy8gSGVscGVyIG1ldGhvZHNcbnZhciBhID0gZnVuY3Rpb24gKGExLCBhMikge1xuICAgIHJldHVybiAxLjAgLSAzLjAgKiBhMiArIDMuMCAqIGExO1xufTtcbnZhciBiID0gZnVuY3Rpb24gKGExLCBhMikge1xuICAgIHJldHVybiAzLjAgKiBhMiAtIDYuMCAqIGExO1xufTtcbnZhciBjID0gZnVuY3Rpb24gKGExKSB7XG4gICAgcmV0dXJuIDMuMCAqIGExO1xufTtcblxudmFyIGdldFNsb3BlID0gZnVuY3Rpb24gKHQsIGExLCBhMikge1xuICAgIHJldHVybiAzLjAgKiBhKGExLCBhMikgKiB0ICogdCArIDIuMCAqIGIoYTEsIGEyKSAqIHQgKyBjKGExKTtcbn07XG5cbnZhciBjYWxjQmV6aWVyID0gZnVuY3Rpb24gKHQsIGExLCBhMikge1xuICAgIHJldHVybiAoKGEoYTEsIGEyKSAqIHQgKyBiKGExLCBhMikpICogdCArIGMoYTEpKSAqIHQ7XG59O1xuXG4vKlxuICAgIENyZWF0ZSBhIGN1YmljIGJlemllciByZXNvbHZlclxuKi9cbmZ1bmN0aW9uIGN1YmljQmV6aWVyKG1YMSwgbVkxLCBtWDIsIG1ZMikge1xuICAgIHZhciBzYW1wbGVWYWx1ZXMgPSBGTE9BVF8zMl9TVVBQT1JURUQgPyBuZXcgRmxvYXQzMkFycmF5KEtfU1BMSU5FX1RBQkxFX1NJWkUpIDogbmV3IEFycmF5KEtfU1BMSU5FX1RBQkxFX1NJWkUpO1xuICAgIHZhciBfcHJlY29tcHV0ZWQgPSBmYWxzZTtcblxuICAgIHZhciBiaW5hcnlTdWJkaXZpZGUgPSBmdW5jdGlvbiAoYVgsIGFBLCBhQikge1xuICAgICAgICB2YXIgaSA9IDA7XG4gICAgICAgIHZhciBjdXJyZW50WCA9IHVuZGVmaW5lZDtcbiAgICAgICAgdmFyIGN1cnJlbnRUID0gdW5kZWZpbmVkO1xuXG4gICAgICAgIGRvIHtcbiAgICAgICAgICAgIGN1cnJlbnRUID0gYUEgKyAoYUIgLSBhQSkgLyAyLjA7XG4gICAgICAgICAgICBjdXJyZW50WCA9IGNhbGNCZXppZXIoY3VycmVudFQsIG1YMSwgbVgyKSAtIGFYO1xuICAgICAgICAgICAgaWYgKGN1cnJlbnRYID4gMC4wKSB7XG4gICAgICAgICAgICAgICAgYUIgPSBjdXJyZW50VDtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgYUEgPSBjdXJyZW50VDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSB3aGlsZSAoTWF0aC5hYnMoY3VycmVudFgpID4gU1VCRElWSVNJT05fUFJFQ0lTSU9OICYmICsraSA8IFNVQkRJVklTSU9OX01BWF9JVEVSQVRJT05TKTtcblxuICAgICAgICByZXR1cm4gY3VycmVudFQ7XG4gICAgfTtcblxuICAgIHZhciBuZXd0b25SYXBoc29uSXRlcmF0ZSA9IGZ1bmN0aW9uIChhWCwgYUd1ZXNzVCkge1xuICAgICAgICB2YXIgaSA9IDA7XG4gICAgICAgIHZhciBjdXJyZW50U2xvcGUgPSAwO1xuICAgICAgICB2YXIgY3VycmVudFggPSB1bmRlZmluZWQ7XG5cbiAgICAgICAgZm9yICg7IGkgPCBORVdUT05fSVRFUkFUSU9OUzsgKytpKSB7XG4gICAgICAgICAgICBjdXJyZW50U2xvcGUgPSBnZXRTbG9wZShhR3Vlc3NULCBtWDEsIG1YMik7XG5cbiAgICAgICAgICAgIGlmIChjdXJyZW50U2xvcGUgPT09IDAuMCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBhR3Vlc3NUO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjdXJyZW50WCA9IGNhbGNCZXppZXIoYUd1ZXNzVCwgbVgxLCBtWDIpIC0gYVg7XG4gICAgICAgICAgICBhR3Vlc3NUIC09IGN1cnJlbnRYIC8gY3VycmVudFNsb3BlO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGFHdWVzc1Q7XG4gICAgfTtcblxuICAgIHZhciBjYWxjU2FtcGxlVmFsdWVzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IEtfU1BMSU5FX1RBQkxFX1NJWkU7ICsraSkge1xuICAgICAgICAgICAgc2FtcGxlVmFsdWVzW2ldID0gY2FsY0JlemllcihpICogS19TQU1QTEVfU1RFUF9TSVpFLCBtWDEsIG1YMik7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgdmFyIGdldFRGb3JYID0gZnVuY3Rpb24gKGFYKSB7XG4gICAgICAgIHZhciBpbnRlcnZhbFN0YXJ0ID0gMC4wO1xuICAgICAgICB2YXIgY3VycmVudFNhbXBsZSA9IDE7XG4gICAgICAgIHZhciBsYXN0U2FtcGxlID0gS19TUExJTkVfVEFCTEVfU0laRSAtIDE7XG4gICAgICAgIHZhciBkaXN0ID0gMC4wO1xuICAgICAgICB2YXIgZ3Vlc3NGb3JUID0gMC4wO1xuICAgICAgICB2YXIgaW5pdGlhbFNsb3BlID0gMC4wO1xuXG4gICAgICAgIGZvciAoOyBjdXJyZW50U2FtcGxlICE9IGxhc3RTYW1wbGUgJiYgc2FtcGxlVmFsdWVzW2N1cnJlbnRTYW1wbGVdIDw9IGFYOyArK2N1cnJlbnRTYW1wbGUpIHtcbiAgICAgICAgICAgIGludGVydmFsU3RhcnQgKz0gS19TQU1QTEVfU1RFUF9TSVpFO1xuICAgICAgICB9XG5cbiAgICAgICAgLS1jdXJyZW50U2FtcGxlO1xuXG4gICAgICAgIGRpc3QgPSAoYVggLSBzYW1wbGVWYWx1ZXNbY3VycmVudFNhbXBsZV0pIC8gKHNhbXBsZVZhbHVlc1tjdXJyZW50U2FtcGxlICsgMV0gLSBzYW1wbGVWYWx1ZXNbY3VycmVudFNhbXBsZV0pO1xuICAgICAgICBndWVzc0ZvclQgPSBpbnRlcnZhbFN0YXJ0ICsgZGlzdCAqIEtfU0FNUExFX1NURVBfU0laRTtcblxuICAgICAgICBpbml0aWFsU2xvcGUgPSBnZXRTbG9wZShndWVzc0ZvclQsIG1YMSwgbVgyKTtcblxuICAgICAgICAvLyBJZiBzbG9wZSBpcyBncmVhdGVyIHRoYW4gbWluXG4gICAgICAgIGlmIChpbml0aWFsU2xvcGUgPj0gTkVXVE9OX01JTl9TTE9QRSkge1xuICAgICAgICAgICAgcmV0dXJuIG5ld3RvblJhcGhzb25JdGVyYXRlKGFYLCBndWVzc0ZvclQpO1xuICAgICAgICAgICAgLy8gU2xvcGUgaXMgZXF1YWwgdG8gbWluXG4gICAgICAgIH0gZWxzZSBpZiAoaW5pdGlhbFNsb3BlID09PSAwLjApIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZ3Vlc3NGb3JUO1xuICAgICAgICAgICAgICAgIC8vIFNsb3BlIGlzIGxlc3MgdGhhbiBtaW5cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBiaW5hcnlTdWJkaXZpZGUoYVgsIGludGVydmFsU3RhcnQsIGludGVydmFsU3RhcnQgKyBLX1NBTVBMRV9TVEVQX1NJWkUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICB9O1xuXG4gICAgdmFyIHByZWNvbXB1dGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIF9wcmVjb21wdXRlZCA9IHRydWU7XG4gICAgICAgIGlmIChtWDEgIT0gbVkxIHx8IG1YMiAhPSBtWTIpIHtcbiAgICAgICAgICAgIGNhbGNTYW1wbGVWYWx1ZXMoKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICB2YXIgcmVzb2x2ZXIgPSBmdW5jdGlvbiAoYVgpIHtcbiAgICAgICAgdmFyIHJldHVyblZhbHVlID0gdW5kZWZpbmVkO1xuXG4gICAgICAgIGlmICghX3ByZWNvbXB1dGVkKSB7XG4gICAgICAgICAgICBwcmVjb21wdXRlKCk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBJZiBsaW5lYXIgZ3JhZGllbnQsIHJldHVybiBYIGFzIFRcbiAgICAgICAgaWYgKG1YMSA9PT0gbVkxICYmIG1YMiA9PT0gbVkyKSB7XG4gICAgICAgICAgICByZXR1cm5WYWx1ZSA9IGFYO1xuXG4gICAgICAgICAgICAvLyBJZiBhdCBzdGFydCwgcmV0dXJuIDBcbiAgICAgICAgfSBlbHNlIGlmIChhWCA9PT0gMCkge1xuICAgICAgICAgICAgICAgIHJldHVyblZhbHVlID0gMDtcblxuICAgICAgICAgICAgICAgIC8vIElmIGF0IGVuZCwgcmV0dXJuIDFcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoYVggPT09IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuVmFsdWUgPSAxO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVyblZhbHVlID0gY2FsY0JlemllcihnZXRURm9yWChhWCksIG1ZMSwgbVkyKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHJldHVyblZhbHVlO1xuICAgIH07XG5cbiAgICByZXR1cm4gcmVzb2x2ZXI7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW1OeVpXRjBaUzFpWlhwcFpYSXVhbk1pWFN3aWJtRnRaWE1pT2x0ZExDSnRZWEJ3YVc1bmN5STZJanM3TzJ0Q1FXMURkMElzVjBGQlZ6czdPenM3T3pzN096czdPenM3T3p0QlFYQkNia01zU1VGQlRTeHBRa0ZCYVVJc1IwRkJSeXhEUVVGRExFTkJRVU03UVVGRE5VSXNTVUZCVFN4blFrRkJaMElzUjBGQlJ5eExRVUZMTEVOQlFVTTdRVUZETDBJc1NVRkJUU3h4UWtGQmNVSXNSMEZCUnl4VFFVRlRMRU5CUVVNN1FVRkRlRU1zU1VGQlRTd3dRa0ZCTUVJc1IwRkJSeXhGUVVGRkxFTkJRVU03UVVGRGRFTXNTVUZCVFN4dFFrRkJiVUlzUjBGQlJ5eEZRVUZGTEVOQlFVTTdRVUZETDBJc1NVRkJUU3hyUWtGQmEwSXNSMEZCUnl4SFFVRkhMRWxCUVVrc2JVSkJRVzFDTEVkQlFVY3NSMEZCUnl4RFFVRkJMRUZCUVVNc1EwRkJRenRCUVVNM1JDeEpRVUZOTEd0Q1FVRnJRaXhIUVVGSkxFOUJRVThzV1VGQldTeExRVUZMTEZkQlFWY3NRVUZCUXpzN08wRkJRVU1zUVVGSGFrVXNTVUZCVFN4RFFVRkRMRWRCUVVjc1ZVRkJReXhGUVVGRkxFVkJRVVVzUlVGQlJUdFhRVUZMTEVkQlFVY3NSMEZCUnl4SFFVRkhMRWRCUVVjc1JVRkJSU3hIUVVGSExFZEJRVWNzUjBGQlJ5eEZRVUZGTzBOQlFVRXNRMEZCUXp0QlFVTm9SQ3hKUVVGTkxFTkJRVU1zUjBGQlJ5eFZRVUZETEVWQlFVVXNSVUZCUlN4RlFVRkZPMWRCUVVzc1IwRkJSeXhIUVVGSExFVkJRVVVzUjBGQlJ5eEhRVUZITEVkQlFVY3NSVUZCUlR0RFFVRkJMRU5CUVVNN1FVRkRNVU1zU1VGQlRTeERRVUZETEVkQlFVY3NWVUZCUXl4RlFVRkZPMWRCUVVzc1IwRkJSeXhIUVVGSExFVkJRVVU3UTBGQlFTeERRVUZET3p0QlFVVXpRaXhKUVVGTkxGRkJRVkVzUjBGQlJ5eFZRVUZETEVOQlFVTXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSVHRYUVVGTExFZEJRVWNzUjBGQlJ5eERRVUZETEVOQlFVTXNSVUZCUlN4RlFVRkZMRVZCUVVVc1EwRkJReXhIUVVGSExFTkJRVU1zUjBGQlJ5eERRVUZETEVkQlFVY3NSMEZCUnl4SFFVRkhMRU5CUVVNc1EwRkJReXhGUVVGRkxFVkJRVVVzUlVGQlJTeERRVUZETEVkQlFVY3NRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJReXhGUVVGRkxFTkJRVU03UTBGQlFTeERRVUZET3p0QlFVVjBSaXhKUVVGTkxGVkJRVlVzUjBGQlJ5eFZRVUZETEVOQlFVTXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJSVHRYUVVGTExFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNSVUZCUlN4RlFVRkZMRVZCUVVVc1EwRkJReXhIUVVGSExFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTXNSVUZCUlN4RlFVRkZMRVZCUVVVc1EwRkJReXhEUVVGQkxFZEJRVWtzUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXl4RlFVRkZMRU5CUVVNc1EwRkJRU3hIUVVGSkxFTkJRVU03UTBGQlFUczdPenM3UVVGQlF5eEJRVXRxUlN4VFFVRlRMRmRCUVZjc1EwRkJReXhIUVVGSExFVkJRVVVzUjBGQlJ5eEZRVUZGTEVkQlFVY3NSVUZCUlN4SFFVRkhMRVZCUVVVN1FVRkRjRVFzVVVGQlRTeFpRVUZaTEVkQlFVY3NhMEpCUVd0Q0xFZEJRVWNzU1VGQlNTeFpRVUZaTEVOQlFVTXNiVUpCUVcxQ0xFTkJRVU1zUjBGQlJ5eEpRVUZKTEV0QlFVc3NRMEZCUXl4dFFrRkJiVUlzUTBGQlF5eERRVUZETzBGQlEycElMRkZCUVVrc1dVRkJXU3hIUVVGSExFdEJRVXNzUTBGQlF6czdRVUZGZWtJc1VVRkJUU3hsUVVGbExFZEJRVWNzVlVGQlF5eEZRVUZGTEVWQlFVVXNSVUZCUlN4RlFVRkZMRVZCUVVVc1JVRkJTenRCUVVOd1F5eFpRVUZKTEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNN1FVRkRWaXhaUVVGSkxGRkJRVkVzV1VGQlFTeERRVUZETzBGQlEySXNXVUZCU1N4UlFVRlJMRmxCUVVFc1EwRkJRenM3UVVGRllpeFhRVUZITzBGQlEwTXNiMEpCUVZFc1IwRkJSeXhGUVVGRkxFZEJRVWNzUTBGQlF5eEZRVUZGTEVkQlFVY3NSVUZCUlN4RFFVRkJMRWRCUVVrc1IwRkJSeXhEUVVGRE8wRkJRMmhETEc5Q1FVRlJMRWRCUVVjc1ZVRkJWU3hEUVVGRExGRkJRVkVzUlVGQlJTeEhRVUZITEVWQlFVVXNSMEZCUnl4RFFVRkRMRWRCUVVjc1JVRkJSU3hEUVVGRE8wRkJReTlETEdkQ1FVRkpMRkZCUVZFc1IwRkJSeXhIUVVGSExFVkJRVVU3UVVGRGFFSXNhMEpCUVVVc1IwRkJSeXhSUVVGUkxFTkJRVU03WVVGRGFrSXNUVUZCVFR0QlFVTklMR3RDUVVGRkxFZEJRVWNzVVVGQlVTeERRVUZETzJGQlEycENPMU5CUTBvc1VVRkJVU3hKUVVGSkxFTkJRVU1zUjBGQlJ5eERRVUZETEZGQlFWRXNRMEZCUXl4SFFVRkhMSEZDUVVGeFFpeEpRVUZKTEVWQlFVVXNRMEZCUXl4SFFVRkhMREJDUVVFd1FpeEZRVUZGT3p0QlFVVjZSaXhsUVVGUExGRkJRVkVzUTBGQlF6dExRVU51UWl4RFFVRkJPenRCUVVWRUxGRkJRVTBzYjBKQlFXOUNMRWRCUVVjc1ZVRkJReXhGUVVGRkxFVkJRVVVzVDBGQlR5eEZRVUZMTzBGQlF6RkRMRmxCUVVrc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF6dEJRVU5XTEZsQlFVa3NXVUZCV1N4SFFVRkhMRU5CUVVNc1EwRkJRenRCUVVOeVFpeFpRVUZKTEZGQlFWRXNXVUZCUVN4RFFVRkRPenRCUVVWaUxHVkJRVThzUTBGQlF5eEhRVUZITEdsQ1FVRnBRaXhGUVVGRkxFVkJRVVVzUTBGQlF5eEZRVUZGTzBGQlF5OUNMSGRDUVVGWkxFZEJRVWNzVVVGQlVTeERRVUZETEU5QlFVOHNSVUZCUlN4SFFVRkhMRVZCUVVVc1IwRkJSeXhEUVVGRExFTkJRVU03TzBGQlJUTkRMR2RDUVVGSkxGbEJRVmtzUzBGQlN5eEhRVUZITEVWQlFVVTdRVUZEZEVJc2RVSkJRVThzVDBGQlR5eERRVUZETzJGQlEyeENPenRCUVVWRUxHOUNRVUZSTEVkQlFVY3NWVUZCVlN4RFFVRkRMRTlCUVU4c1JVRkJSU3hIUVVGSExFVkJRVVVzUjBGQlJ5eERRVUZETEVkQlFVY3NSVUZCUlN4RFFVRkRPMEZCUXpsRExHMUNRVUZQTEVsQlFVa3NVVUZCVVN4SFFVRkhMRmxCUVZrc1EwRkJRenRUUVVOMFF6czdRVUZGUkN4bFFVRlBMRTlCUVU4c1EwRkJRenRMUVVOc1FpeERRVUZCT3p0QlFVVkVMRkZCUVUwc1owSkJRV2RDTEVkQlFVY3NXVUZCVFR0QlFVTXpRaXhoUVVGTExFbEJRVWtzUTBGQlF5eEhRVUZITEVOQlFVTXNSVUZCUlN4RFFVRkRMRWRCUVVjc2JVSkJRVzFDTEVWQlFVVXNSVUZCUlN4RFFVRkRMRVZCUVVVN1FVRkRNVU1zZDBKQlFWa3NRMEZCUXl4RFFVRkRMRU5CUVVNc1IwRkJSeXhWUVVGVkxFTkJRVU1zUTBGQlF5eEhRVUZITEd0Q1FVRnJRaXhGUVVGRkxFZEJRVWNzUlVGQlJTeEhRVUZITEVOQlFVTXNRMEZCUXp0VFFVTnNSVHRMUVVOS0xFTkJRVUU3TzBGQlJVUXNVVUZCVFN4UlFVRlJMRWRCUVVjc1ZVRkJReXhGUVVGRkxFVkJRVXM3UVVGRGNrSXNXVUZCU1N4aFFVRmhMRWRCUVVjc1IwRkJSeXhEUVVGRE8wRkJRM2hDTEZsQlFVa3NZVUZCWVN4SFFVRkhMRU5CUVVNc1EwRkJRenRCUVVOMFFpeFpRVUZKTEZWQlFWVXNSMEZCUnl4dFFrRkJiVUlzUjBGQlJ5eERRVUZETEVOQlFVTTdRVUZEZWtNc1dVRkJTU3hKUVVGSkxFZEJRVWNzUjBGQlJ5eERRVUZETzBGQlEyWXNXVUZCU1N4VFFVRlRMRWRCUVVjc1IwRkJSeXhEUVVGRE8wRkJRM0JDTEZsQlFVa3NXVUZCV1N4SFFVRkhMRWRCUVVjc1EwRkJRenM3UVVGRmRrSXNaVUZCVHl4aFFVRmhMRWxCUVVrc1ZVRkJWU3hKUVVGSkxGbEJRVmtzUTBGQlF5eGhRVUZoTEVOQlFVTXNTVUZCU1N4RlFVRkZMRVZCUVVVc1JVRkJSU3hoUVVGaExFVkJRVVU3UVVGRGRFWXNlVUpCUVdFc1NVRkJTU3hyUWtGQmEwSXNRMEZCUXp0VFFVTjJRenM3UVVGRlJDeFZRVUZGTEdGQlFXRXNRMEZCUXpzN1FVRkZhRUlzV1VGQlNTeEhRVUZITEVOQlFVTXNSVUZCUlN4SFFVRkhMRmxCUVZrc1EwRkJReXhoUVVGaExFTkJRVU1zUTBGQlFTeEpRVUZMTEZsQlFWa3NRMEZCUXl4aFFVRmhMRWRCUVVNc1EwRkJReXhEUVVGRExFZEJRVWNzV1VGQldTeERRVUZETEdGQlFXRXNRMEZCUXl4RFFVRkJMRUZCUVVNc1EwRkJRenRCUVVNeFJ5eHBRa0ZCVXl4SFFVRkhMR0ZCUVdFc1IwRkJSeXhKUVVGSkxFZEJRVWNzYTBKQlFXdENMRU5CUVVNN08wRkJSWFJFTEc5Q1FVRlpMRWRCUVVjc1VVRkJVU3hEUVVGRExGTkJRVk1zUlVGQlJTeEhRVUZITEVWQlFVVXNSMEZCUnl4RFFVRkRPenM3UVVGQlF5eEJRVWMzUXl4WlFVRkpMRmxCUVZrc1NVRkJTU3huUWtGQlowSXNSVUZCUlR0QlFVTnNReXh0UWtGQlR5eHZRa0ZCYjBJc1EwRkJReXhGUVVGRkxFVkJRVVVzVTBGQlV5eERRVUZET3p0QlFVRkRMRk5CUlRsRExFMUJRVTBzU1VGQlNTeFpRVUZaTEV0QlFVc3NSMEZCUnl4RlFVRkZPMEZCUXpkQ0xIVkNRVUZQTEZOQlFWTTdPMEZCUVVNc1lVRkZjRUlzVFVGQlRUdEJRVU5JTERKQ1FVRlBMR1ZCUVdVc1EwRkJReXhGUVVGRkxFVkJRVVVzWVVGQllTeEZRVUZGTEdGQlFXRXNSMEZCUnl4clFrRkJhMElzUTBGQlF5eERRVUZETzJsQ1FVTnFSanRMUVVOS0xFTkJRVUU3TzBGQlJVUXNVVUZCVFN4VlFVRlZMRWRCUVVjc1dVRkJUVHRCUVVOeVFpeHZRa0ZCV1N4SFFVRkhMRWxCUVVrc1EwRkJRenRCUVVOd1FpeFpRVUZKTEVkQlFVY3NTVUZCU1N4SFFVRkhMRWxCUVVrc1IwRkJSeXhKUVVGSkxFZEJRVWNzUlVGQlJUdEJRVU14UWl3MFFrRkJaMElzUlVGQlJTeERRVUZETzFOQlEzUkNPMHRCUTBvc1EwRkJRVHM3UVVGRlJDeFJRVUZOTEZGQlFWRXNSMEZCUnl4VlFVRkRMRVZCUVVVc1JVRkJTenRCUVVOeVFpeFpRVUZKTEZkQlFWY3NXVUZCUVN4RFFVRkRPenRCUVVWb1FpeFpRVUZKTEVOQlFVTXNXVUZCV1N4RlFVRkZPMEZCUTJZc2MwSkJRVlVzUlVGQlJTeERRVUZETzFOQlEyaENPenM3UVVGQlFTeEJRVWRFTEZsQlFVa3NSMEZCUnl4TFFVRkxMRWRCUVVjc1NVRkJTU3hIUVVGSExFdEJRVXNzUjBGQlJ5eEZRVUZGTzBGQlF6VkNMSFZDUVVGWExFZEJRVWNzUlVGQlJUczdPMEZCUVVNc1UwRkhjRUlzVFVGQlRTeEpRVUZKTEVWQlFVVXNTMEZCU3l4RFFVRkRMRVZCUVVVN1FVRkRha0lzTWtKQlFWY3NSMEZCUnl4RFFVRkRPenM3UVVGQlF5eGhRVWR1UWl4TlFVRk5MRWxCUVVrc1JVRkJSU3hMUVVGTExFTkJRVU1zUlVGQlJUdEJRVU5xUWl3clFrRkJWeXhIUVVGSExFTkJRVU1zUTBGQlF6dHBRa0ZGYmtJc1RVRkJUVHRCUVVOSUxDdENRVUZYTEVkQlFVY3NWVUZCVlN4RFFVRkRMRkZCUVZFc1EwRkJReXhGUVVGRkxFTkJRVU1zUlVGQlJTeEhRVUZITEVWQlFVVXNSMEZCUnl4RFFVRkRMRU5CUVVNN2FVSkJRM0JFT3p0QlFVVkVMR1ZCUVU4c1YwRkJWeXhEUVVGRE8wdEJRM1JDTEVOQlFVRTdPMEZCUlVRc1YwRkJUeXhSUVVGUkxFTkJRVU03UTBGRGJrSWlMQ0ptYVd4bElqb2lZM0psWVhSbExXSmxlbWxsY2k1cWN5SXNJbk52ZFhKalpYTkRiMjUwWlc1MElqcGJJaThxWEc0Z0lDQWdRbVY2YVdWeUlHWjFibU4wYVc5dUlHZGxibVZ5WVhSdmNseHVJQ0FnSUNBZ0lDQmNiaUFnSUNCSFljT3JkR0Z1SUZKbGJtRjFaR1ZoZFNkeklFSmxlbWxsY2tWaGMybHVaMXh1SUNBZ0lHaDBkSEJ6T2k4dloybDBhSFZpTG1OdmJTOW5jbVV2WW1WNmFXVnlMV1ZoYzJsdVp5OWliRzlpTDIxaGMzUmxjaTlwYm1SbGVDNXFjeUFnWEc0Z0lDQWdhSFIwY0hNNkx5OW5hWFJvZFdJdVkyOXRMMmR5WlM5aVpYcHBaWEl0WldGemFXNW5MMkpzYjJJdmJXRnpkR1Z5TDB4SlEwVk9VMFZjYmlBZ0lDQlpiM1VuY21VZ1lTQm9aWEp2WEc0Z0lDQWdYRzRnSUNBZ1ZYTmxYRzRnSUNBZ1hHNGdJQ0FnSUNBZ0lIWmhjaUJsWVhObFQzVjBJRDBnYm1WM0lFSmxlbWxsY2lndU1UY3NMalkzTEM0NE15d3VOamNwTEZ4dUlDQWdJQ0FnSUNBZ0lDQWdlQ0E5SUdWaGMyVlBkWFFvTUM0MUtUc2dMeThnY21WMGRYSnVjeUF3TGpZeU55NHVMbHh1S2k5Y2JseHVMeThnUTI5dWMzUmhiblJ6WEc1amIyNXpkQ0JPUlZkVVQwNWZTVlJGVWtGVVNVOU9VeUE5SURnN1hHNWpiMjV6ZENCT1JWZFVUMDVmVFVsT1gxTk1UMUJGSUQwZ01DNHdNREU3WEc1amIyNXpkQ0JUVlVKRVNWWkpVMGxQVGw5UVVrVkRTVk5KVDA0Z1BTQXdMakF3TURBd01ERTdYRzVqYjI1emRDQlRWVUpFU1ZaSlUwbFBUbDlOUVZoZlNWUkZVa0ZVU1U5T1V5QTlJREV3TzF4dVkyOXVjM1FnUzE5VFVFeEpUa1ZmVkVGQ1RFVmZVMGxhUlNBOUlERXhPMXh1WTI5dWMzUWdTMTlUUVUxUVRFVmZVMVJGVUY5VFNWcEZJRDBnTVM0d0lDOGdLRXRmVTFCTVNVNUZYMVJCUWt4RlgxTkpXa1VnTFNBeExqQXBPMXh1WTI5dWMzUWdSa3hQUVZSZk16SmZVMVZRVUU5U1ZFVkVJRDBnS0hSNWNHVnZaaUJHYkc5aGRETXlRWEp5WVhrZ0lUMDlJQ2QxYm1SbFptbHVaV1FuS1R0Y2JseHVMeThnU0dWc2NHVnlJRzFsZEdodlpITmNibU52Ym5OMElHRWdQU0FvWVRFc0lHRXlLU0E5UGlBeExqQWdMU0F6TGpBZ0tpQmhNaUFySURNdU1DQXFJR0V4TzF4dVkyOXVjM1FnWWlBOUlDaGhNU3dnWVRJcElEMCtJRE11TUNBcUlHRXlJQzBnTmk0d0lDb2dZVEU3WEc1amIyNXpkQ0JqSUQwZ0tHRXhLU0E5UGlBekxqQWdLaUJoTVR0Y2JseHVZMjl1YzNRZ1oyVjBVMnh2Y0dVZ1BTQW9kQ3dnWVRFc0lHRXlLU0E5UGlBekxqQWdLaUJoS0dFeExDQmhNaWtnS2lCMElDb2dkQ0FySURJdU1DQXFJR0lvWVRFc0lHRXlLU0FxSUhRZ0t5QmpLR0V4S1R0Y2JseHVZMjl1YzNRZ1kyRnNZMEpsZW1sbGNpQTlJQ2gwTENCaE1Td2dZVElwSUQwK0lDZ29ZU2hoTVN3Z1lUSXBJQ29nZENBcklHSW9ZVEVzSUdFeUtTa2dLaUIwSUNzZ1l5aGhNU2twSUNvZ2REdGNibHh1THlwY2JpQWdJQ0JEY21WaGRHVWdZU0JqZFdKcFl5QmlaWHBwWlhJZ2NtVnpiMngyWlhKY2Jpb3ZYRzVsZUhCdmNuUWdaR1ZtWVhWc2RDQm1kVzVqZEdsdmJpQmpkV0pwWTBKbGVtbGxjaWh0V0RFc0lHMVpNU3dnYlZneUxDQnRXVElwSUh0Y2JpQWdJQ0JqYjI1emRDQnpZVzF3YkdWV1lXeDFaWE1nUFNCR1RFOUJWRjh6TWw5VFZWQlFUMUpVUlVRZ1B5QnVaWGNnUm14dllYUXpNa0Z5Y21GNUtFdGZVMUJNU1U1RlgxUkJRa3hGWDFOSldrVXBJRG9nYm1WM0lFRnljbUY1S0V0ZlUxQk1TVTVGWDFSQlFreEZYMU5KV2tVcE8xeHVJQ0FnSUd4bGRDQmZjSEpsWTI5dGNIVjBaV1FnUFNCbVlXeHpaVHRjYmx4dUlDQWdJR052Ym5OMElHSnBibUZ5ZVZOMVltUnBkbWxrWlNBOUlDaGhXQ3dnWVVFc0lHRkNLU0E5UGlCN1hHNGdJQ0FnSUNBZ0lHeGxkQ0JwSUQwZ01EdGNiaUFnSUNBZ0lDQWdiR1YwSUdOMWNuSmxiblJZTzF4dUlDQWdJQ0FnSUNCc1pYUWdZM1Z5Y21WdWRGUTdYRzVjYmlBZ0lDQWdJQ0FnWkc4Z2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnWTNWeWNtVnVkRlFnUFNCaFFTQXJJQ2hoUWlBdElHRkJLU0F2SURJdU1EdGNiaUFnSUNBZ0lDQWdJQ0FnSUdOMWNuSmxiblJZSUQwZ1kyRnNZMEpsZW1sbGNpaGpkWEp5Wlc1MFZDd2diVmd4TENCdFdESXBJQzBnWVZnN1hHNGdJQ0FnSUNBZ0lDQWdJQ0JwWmlBb1kzVnljbVZ1ZEZnZ1BpQXdMakFwSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCaFFpQTlJR04xY25KbGJuUlVPMXh1SUNBZ0lDQWdJQ0FnSUNBZ2ZTQmxiSE5sSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCaFFTQTlJR04xY25KbGJuUlVPMXh1SUNBZ0lDQWdJQ0FnSUNBZ2ZWeHVJQ0FnSUNBZ0lDQjlJSGRvYVd4bElDaE5ZWFJvTG1GaWN5aGpkWEp5Wlc1MFdDa2dQaUJUVlVKRVNWWkpVMGxQVGw5UVVrVkRTVk5KVDA0Z0ppWWdLeXRwSUR3Z1UxVkNSRWxXU1ZOSlQwNWZUVUZZWDBsVVJWSkJWRWxQVGxNcE8xeHVYRzRnSUNBZ0lDQWdJSEpsZEhWeWJpQmpkWEp5Wlc1MFZEdGNiaUFnSUNCOVhHNWNiaUFnSUNCamIyNXpkQ0J1WlhkMGIyNVNZWEJvYzI5dVNYUmxjbUYwWlNBOUlDaGhXQ3dnWVVkMVpYTnpWQ2tnUFQ0Z2UxeHVJQ0FnSUNBZ0lDQnNaWFFnYVNBOUlEQTdYRzRnSUNBZ0lDQWdJR3hsZENCamRYSnlaVzUwVTJ4dmNHVWdQU0F3TzF4dUlDQWdJQ0FnSUNCc1pYUWdZM1Z5Y21WdWRGZzdYRzVjYmlBZ0lDQWdJQ0FnWm05eUlDZzdJR2tnUENCT1JWZFVUMDVmU1ZSRlVrRlVTVTlPVXpzZ0t5dHBLU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQmpkWEp5Wlc1MFUyeHZjR1VnUFNCblpYUlRiRzl3WlNoaFIzVmxjM05VTENCdFdERXNJRzFZTWlrN1hHNGdJQ0FnSUNBZ0lDQWdJQ0JjYmlBZ0lDQWdJQ0FnSUNBZ0lHbG1JQ2hqZFhKeVpXNTBVMnh2Y0dVZ1BUMDlJREF1TUNrZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lISmxkSFZ5YmlCaFIzVmxjM05VTzF4dUlDQWdJQ0FnSUNBZ0lDQWdmVnh1SUNBZ0lDQWdJQ0FnSUNBZ1hHNGdJQ0FnSUNBZ0lDQWdJQ0JqZFhKeVpXNTBXQ0E5SUdOaGJHTkNaWHBwWlhJb1lVZDFaWE56VkN3Z2JWZ3hMQ0J0V0RJcElDMGdZVmc3WEc0Z0lDQWdJQ0FnSUNBZ0lDQmhSM1ZsYzNOVUlDMDlJR04xY25KbGJuUllJQzhnWTNWeWNtVnVkRk5zYjNCbE8xeHVJQ0FnSUNBZ0lDQjlYRzRnSUNBZ0lDQWdJRnh1SUNBZ0lDQWdJQ0J5WlhSMWNtNGdZVWQxWlhOelZEdGNiaUFnSUNCOVhHNWNiaUFnSUNCamIyNXpkQ0JqWVd4alUyRnRjR3hsVm1Gc2RXVnpJRDBnS0NrZ1BUNGdlMXh1SUNBZ0lDQWdJQ0JtYjNJZ0tHeGxkQ0JwSUQwZ01Ec2dhU0E4SUV0ZlUxQk1TVTVGWDFSQlFreEZYMU5KV2tVN0lDc3JhU2tnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdjMkZ0Y0d4bFZtRnNkV1Z6VzJsZElEMGdZMkZzWTBKbGVtbGxjaWhwSUNvZ1MxOVRRVTFRVEVWZlUxUkZVRjlUU1ZwRkxDQnRXREVzSUcxWU1pazdYRzRnSUNBZ0lDQWdJSDFjYmlBZ0lDQjlYRzVjYmlBZ0lDQmpiMjV6ZENCblpYUlVSbTl5V0NBOUlDaGhXQ2tnUFQ0Z2UxeHVJQ0FnSUNBZ0lDQnNaWFFnYVc1MFpYSjJZV3hUZEdGeWRDQTlJREF1TUR0Y2JpQWdJQ0FnSUNBZ2JHVjBJR04xY25KbGJuUlRZVzF3YkdVZ1BTQXhPMXh1SUNBZ0lDQWdJQ0JzWlhRZ2JHRnpkRk5oYlhCc1pTQTlJRXRmVTFCTVNVNUZYMVJCUWt4RlgxTkpXa1VnTFNBeE8xeHVJQ0FnSUNBZ0lDQnNaWFFnWkdsemRDQTlJREF1TUR0Y2JpQWdJQ0FnSUNBZ2JHVjBJR2QxWlhOelJtOXlWQ0E5SURBdU1EdGNiaUFnSUNBZ0lDQWdiR1YwSUdsdWFYUnBZV3hUYkc5d1pTQTlJREF1TUR0Y2JpQWdJQ0FnSUNBZ0lDQWdJRnh1SUNBZ0lDQWdJQ0JtYjNJZ0tEc2dZM1Z5Y21WdWRGTmhiWEJzWlNBaFBTQnNZWE4wVTJGdGNHeGxJQ1ltSUhOaGJYQnNaVlpoYkhWbGMxdGpkWEp5Wlc1MFUyRnRjR3hsWFNBOFBTQmhXRHNnS3l0amRYSnlaVzUwVTJGdGNHeGxLU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQnBiblJsY25aaGJGTjBZWEowSUNzOUlFdGZVMEZOVUV4RlgxTlVSVkJmVTBsYVJUdGNiaUFnSUNBZ0lDQWdmVnh1SUNBZ0lDQWdJQ0JjYmlBZ0lDQWdJQ0FnTFMxamRYSnlaVzUwVTJGdGNHeGxPMXh1SUNBZ0lDQWdJQ0JjYmlBZ0lDQWdJQ0FnWkdsemRDQTlJQ2hoV0NBdElITmhiWEJzWlZaaGJIVmxjMXRqZFhKeVpXNTBVMkZ0Y0d4bFhTa2dMeUFvYzJGdGNHeGxWbUZzZFdWelcyTjFjbkpsYm5SVFlXMXdiR1VyTVYwZ0xTQnpZVzF3YkdWV1lXeDFaWE5iWTNWeWNtVnVkRk5oYlhCc1pWMHBPMXh1SUNBZ0lDQWdJQ0JuZFdWemMwWnZjbFFnUFNCcGJuUmxjblpoYkZOMFlYSjBJQ3NnWkdsemRDQXFJRXRmVTBGTlVFeEZYMU5VUlZCZlUwbGFSVHRjYmlBZ0lDQWdJQ0FnWEc0Z0lDQWdJQ0FnSUdsdWFYUnBZV3hUYkc5d1pTQTlJR2RsZEZOc2IzQmxLR2QxWlhOelJtOXlWQ3dnYlZneExDQnRXRElwTzF4dUlDQWdJQ0FnSUNCY2JpQWdJQ0FnSUNBZ0x5OGdTV1lnYzJ4dmNHVWdhWE1nWjNKbFlYUmxjaUIwYUdGdUlHMXBibHh1SUNBZ0lDQWdJQ0JwWmlBb2FXNXBkR2xoYkZOc2IzQmxJRDQ5SUU1RlYxUlBUbDlOU1U1ZlUweFBVRVVwSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJSEpsZEhWeWJpQnVaWGQwYjI1U1lYQm9jMjl1U1hSbGNtRjBaU2hoV0N3Z1ozVmxjM05HYjNKVUtUdGNiaUFnSUNBZ0lDQWdMeThnVTJ4dmNHVWdhWE1nWlhGMVlXd2dkRzhnYldsdVhHNGdJQ0FnSUNBZ0lIMGdaV3h6WlNCcFppQW9hVzVwZEdsaGJGTnNiM0JsSUQwOVBTQXdMakFwSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJSEpsZEhWeWJpQm5kV1Z6YzBadmNsUTdYRzRnSUNBZ0lDQWdJQzh2SUZOc2IzQmxJR2x6SUd4bGMzTWdkR2hoYmlCdGFXNWNiaUFnSUNBZ0lDQWdmU0JsYkhObElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUhKbGRIVnliaUJpYVc1aGNubFRkV0prYVhacFpHVW9ZVmdzSUdsdWRHVnlkbUZzVTNSaGNuUXNJR2x1ZEdWeWRtRnNVM1JoY25RZ0t5QkxYMU5CVFZCTVJWOVRWRVZRWDFOSldrVXBPMXh1SUNBZ0lDQWdJQ0I5WEc0Z0lDQWdmVnh1WEc0Z0lDQWdZMjl1YzNRZ2NISmxZMjl0Y0hWMFpTQTlJQ2dwSUQwK0lIdGNiaUFnSUNBZ0lDQWdYM0J5WldOdmJYQjFkR1ZrSUQwZ2RISjFaVHRjYmlBZ0lDQWdJQ0FnYVdZZ0tHMVlNU0FoUFNCdFdURWdmSHdnYlZneUlDRTlJRzFaTWlrZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnWTJGc1kxTmhiWEJzWlZaaGJIVmxjeWdwTzF4dUlDQWdJQ0FnSUNCOVhHNGdJQ0FnZlZ4dVhHNGdJQ0FnWTI5dWMzUWdjbVZ6YjJ4MlpYSWdQU0FvWVZncElEMCtJSHRjYmlBZ0lDQWdJQ0FnYkdWMElISmxkSFZ5YmxaaGJIVmxPMXh1WEc0Z0lDQWdJQ0FnSUdsbUlDZ2hYM0J5WldOdmJYQjFkR1ZrS1NCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0J3Y21WamIyMXdkWFJsS0NrN1hHNGdJQ0FnSUNBZ0lIMWNiaUFnSUNBZ0lDQWdYRzRnSUNBZ0lDQWdJQzh2SUVsbUlHeHBibVZoY2lCbmNtRmthV1Z1ZEN3Z2NtVjBkWEp1SUZnZ1lYTWdWRnh1SUNBZ0lDQWdJQ0JwWmlBb2JWZ3hJRDA5UFNCdFdURWdKaVlnYlZneUlEMDlQU0J0V1RJcElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUhKbGRIVnlibFpoYkhWbElEMGdZVmc3WEc0Z0lDQWdJQ0FnSUNBZ0lDQmNiaUFnSUNBZ0lDQWdMeThnU1dZZ1lYUWdjM1JoY25Rc0lISmxkSFZ5YmlBd1hHNGdJQ0FnSUNBZ0lIMGdaV3h6WlNCcFppQW9ZVmdnUFQwOUlEQXBJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lISmxkSFZ5YmxaaGJIVmxJRDBnTUR0Y2JpQWdJQ0FnSUNBZ0lDQWdJRnh1SUNBZ0lDQWdJQ0F2THlCSlppQmhkQ0JsYm1Rc0lISmxkSFZ5YmlBeFhHNGdJQ0FnSUNBZ0lIMGdaV3h6WlNCcFppQW9ZVmdnUFQwOUlERXBJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lISmxkSFZ5YmxaaGJIVmxJRDBnTVR0Y2JseHVJQ0FnSUNBZ0lDQjlJR1ZzYzJVZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnY21WMGRYSnVWbUZzZFdVZ1BTQmpZV3hqUW1WNmFXVnlLR2RsZEZSR2IzSllLR0ZZS1N3Z2JWa3hMQ0J0V1RJcE8xeHVJQ0FnSUNBZ0lDQjlYRzRnSUNBZ0lDQWdJRnh1SUNBZ0lDQWdJQ0J5WlhSMWNtNGdjbVYwZFhKdVZtRnNkV1U3WEc0Z0lDQWdmVnh1WEc0Z0lDQWdjbVYwZFhKdUlISmxjMjlzZG1WeU8xeHVmVnh1SWwxOVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvYWN0aW9ucy90d2Vlbi9jcmVhdGUtYmV6aWVyLmpzXG4gKiogbW9kdWxlIGlkID0gMTZcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0cy5kZWZhdWx0ID0gY3JlYXRlRWFzaW5nRnVuY3Rpb247XG4vKlxuICAgIE1pcnJvciBlYXNpbmdcbiAgICBcbiAgICBNaXJyb3JzIHRoZSBwcm92aWRlZCBlYXNpbmcgZnVuY3Rpb24sIHVzZWQgaGVyZSBmb3IgbWlycm9yaW5nIGFuXG4gICAgZWFzZUluIGludG8gYW4gZWFzZUluT3V0XG4gICAgXG4gICAgQHBhcmFtIFtudW1iZXJdOiBQcm9ncmVzcywgZnJvbSAwIC0gMSwgb2YgY3VycmVudCBzaGlmdFxuICAgIEBwYXJhbSBbZnVuY3Rpb25dOiBUaGUgZWFzaW5nIGZ1bmN0aW9uIHRvIG1pcnJvclxuICAgIEByZXR1cm5zIFtudW1iZXJdOiBUaGUgZWFzaW5nLWFkanVzdGVkIGRlbHRhXG4qL1xudmFyIG1pcnJvckVhc2luZyA9IGZ1bmN0aW9uIChtZXRob2QpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gKHByb2dyZXNzLCBzdHJlbmd0aCkge1xuICAgICAgICByZXR1cm4gcHJvZ3Jlc3MgPD0gMC41ID8gbWV0aG9kKDIgKiBwcm9ncmVzcywgc3RyZW5ndGgpIC8gMiA6ICgyIC0gbWV0aG9kKDIgKiAoMSAtIHByb2dyZXNzKSwgc3RyZW5ndGgpKSAvIDI7XG4gICAgfTtcbn07XG5cbi8qXG4gICAgUmV2ZXJzZSBlYXNpbmdcbiAgICBcbiAgICBSZXZlcnNlcyB0aGUgb3V0cHV0IG9mIHRoZSBwcm92aWRlZCBlYXNpbmcgZnVuY3Rpb24sIHVzZWQgZm9yIGZsaXBwaW5nIGVhc2VJblxuICAgIGN1cnZlIHRvIGFuIGVhc2VPdXQuXG4gICAgXG4gICAgQHBhcmFtIFtudW1iZXJdOiBQcm9ncmVzcywgZnJvbSAwIC0gMSwgb2YgY3VycmVudCBzaGlmdFxuICAgIEBwYXJhbSBbZnVuY3Rpb25dOiBUaGUgZWFzaW5nIGZ1bmN0aW9uIHRvIHJldmVyc2VcbiAgICBAcmV0dXJucyBbbnVtYmVyXTogVGhlIGVhc2luZy1hZGp1c3RlZCBkZWx0YVxuKi9cbnZhciByZXZlcnNlRWFzaW5nID0gZnVuY3Rpb24gKG1ldGhvZCkge1xuICAgIHJldHVybiBmdW5jdGlvbiAocHJvZ3Jlc3MsIHN0cmVuZ3RoKSB7XG4gICAgICAgIHJldHVybiAxIC0gbWV0aG9kKDEgLSBwcm9ncmVzcywgc3RyZW5ndGgpO1xuICAgIH07XG59O1xuXG4vKlxuICAgIEVhc2luZyBjbGFzc1xuXG4gICAgSWYgcHJvdmlkZWQgZWFzaW5nIGZ1bmN0aW9uLCByZXR1cm5zIGVhc2luZyBmdW5jdGlvbiB3aXRoIFxuICAgIGluL291dC9pbk91dCB2YXJpYXRpb25zXG5cbiAgICBJZiBwcm92aWRlZCBmb3VyIGFyZ3VtZW50cywgcmV0dXJucyBuZXcgQmV6aWVyIGNsYXNzIGluc3RlYWQuXG4qL1xuZnVuY3Rpb24gY3JlYXRlRWFzaW5nRnVuY3Rpb24obWV0aG9kKSB7XG4gICAgdmFyIGVhc2luZ0Z1bmN0aW9uID0gZnVuY3Rpb24gKHByb2dyZXNzLCBzdHJlbmd0aCkge1xuICAgICAgICByZXR1cm4gbWV0aG9kKHByb2dyZXNzLCBzdHJlbmd0aCk7XG4gICAgfTtcblxuICAgIGVhc2luZ0Z1bmN0aW9uLmluID0gZnVuY3Rpb24gKHByb2dyZXNzLCBzdHJlbmd0aCkge1xuICAgICAgICByZXR1cm4gbWV0aG9kKHByb2dyZXNzLCBzdHJlbmd0aCk7XG4gICAgfTtcbiAgICBlYXNpbmdGdW5jdGlvbi5vdXQgPSByZXZlcnNlRWFzaW5nKG1ldGhvZCk7XG4gICAgZWFzaW5nRnVuY3Rpb24uaW5PdXQgPSBtaXJyb3JFYXNpbmcobWV0aG9kKTtcblxuICAgIHJldHVybiBlYXNpbmdGdW5jdGlvbjtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbU55WldGMFpTMWxZWE5wYm1jdWFuTWlYU3dpYm1GdFpYTWlPbHRkTENKdFlYQndhVzVuY3lJNklqczdPMnRDUVdkRGQwSXNiMEpCUVc5Q096czdPenM3T3pzN096dEJRWFJDTlVNc1NVRkJUU3haUVVGWkxFZEJRVWNzVlVGQlF5eE5RVUZOTzFkQlFVc3NWVUZCUXl4UlFVRlJMRVZCUVVVc1VVRkJVVHRsUVVGTExFRkJRVU1zVVVGQlVTeEpRVUZKTEVkQlFVY3NSMEZCU1N4TlFVRk5MRU5CUVVNc1EwRkJReXhIUVVGSExGRkJRVkVzUlVGQlJTeFJRVUZSTEVOQlFVTXNSMEZCUnl4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRExFZEJRVWNzVFVGQlRTeERRVUZETEVOQlFVTXNTVUZCU1N4RFFVRkRMRWRCUVVjc1VVRkJVU3hEUVVGQkxFRkJRVU1zUlVGQlJTeFJRVUZSTEVOQlFVTXNRMEZCUVN4SFFVRkpMRU5CUVVNN1MwRkJRVHREUVVGQk96czdPenM3T3pzN096czdRVUZCUXl4QlFWbHFTeXhKUVVGTkxHRkJRV0VzUjBGQlJ5eFZRVUZETEUxQlFVMDdWMEZCU3l4VlFVRkRMRkZCUVZFc1JVRkJSU3hSUVVGUk8yVkJRVXNzUTBGQlF5eEhRVUZITEUxQlFVMHNRMEZCUXl4RFFVRkRMRWRCUVVjc1VVRkJVU3hGUVVGRkxGRkJRVkVzUTBGQlF6dExRVUZCTzBOQlFVRTdPenM3T3pzN096czdRVUZCUXl4QlFWVTVSU3hUUVVGVExHOUNRVUZ2UWl4RFFVRkRMRTFCUVUwc1JVRkJSVHRCUVVOcVJDeFJRVUZKTEdOQlFXTXNSMEZCUnl4VlFVRkRMRkZCUVZFc1JVRkJSU3hSUVVGUk8yVkJRVXNzVFVGQlRTeERRVUZETEZGQlFWRXNSVUZCUlN4UlFVRlJMRU5CUVVNN1MwRkJRU3hEUVVGRE96dEJRVVY0UlN4clFrRkJZeXhEUVVGRExFVkJRVVVzUjBGQlJ5eFZRVUZETEZGQlFWRXNSVUZCUlN4UlFVRlJPMlZCUVVzc1RVRkJUU3hEUVVGRExGRkJRVkVzUlVGQlJTeFJRVUZSTEVOQlFVTTdTMEZCUVN4RFFVRkRPMEZCUTNaRkxHdENRVUZqTEVOQlFVTXNSMEZCUnl4SFFVRkhMR0ZCUVdFc1EwRkJReXhOUVVGTkxFTkJRVU1zUTBGQlF6dEJRVU16UXl4clFrRkJZeXhEUVVGRExFdEJRVXNzUjBGQlJ5eFpRVUZaTEVOQlFVTXNUVUZCVFN4RFFVRkRMRU5CUVVNN08wRkJSVFZETEZkQlFVOHNZMEZCWXl4RFFVRkRPME5CUTNwQ0lpd2labWxzWlNJNkltTnlaV0YwWlMxbFlYTnBibWN1YW5NaUxDSnpiM1Z5WTJWelEyOXVkR1Z1ZENJNld5SXZLbHh1SUNBZ0lFMXBjbkp2Y2lCbFlYTnBibWRjYmlBZ0lDQmNiaUFnSUNCTmFYSnliM0p6SUhSb1pTQndjbTkyYVdSbFpDQmxZWE5wYm1jZ1puVnVZM1JwYjI0c0lIVnpaV1FnYUdWeVpTQm1iM0lnYldseWNtOXlhVzVuSUdGdVhHNGdJQ0FnWldGelpVbHVJR2x1ZEc4Z1lXNGdaV0Z6WlVsdVQzVjBYRzRnSUNBZ1hHNGdJQ0FnUUhCaGNtRnRJRnR1ZFcxaVpYSmRPaUJRY205bmNtVnpjeXdnWm5KdmJTQXdJQzBnTVN3Z2IyWWdZM1Z5Y21WdWRDQnphR2xtZEZ4dUlDQWdJRUJ3WVhKaGJTQmJablZ1WTNScGIyNWRPaUJVYUdVZ1pXRnphVzVuSUdaMWJtTjBhVzl1SUhSdklHMXBjbkp2Y2x4dUlDQWdJRUJ5WlhSMWNtNXpJRnR1ZFcxaVpYSmRPaUJVYUdVZ1pXRnphVzVuTFdGa2FuVnpkR1ZrSUdSbGJIUmhYRzRxTDF4dVkyOXVjM1FnYldseWNtOXlSV0Z6YVc1bklEMGdLRzFsZEdodlpDa2dQVDRnS0hCeWIyZHlaWE56TENCemRISmxibWQwYUNrZ1BUNGdLSEJ5YjJkeVpYTnpJRHc5SURBdU5Ta2dQeUJ0WlhSb2IyUW9NaUFxSUhCeWIyZHlaWE56TENCemRISmxibWQwYUNrZ0x5QXlJRG9nS0RJZ0xTQnRaWFJvYjJRb01pQXFJQ2d4SUMwZ2NISnZaM0psYzNNcExDQnpkSEpsYm1kMGFDa3BJQzhnTWp0Y2JpQWdJQ0FnSUNBZ1hHNHZLbHh1SUNBZ0lGSmxkbVZ5YzJVZ1pXRnphVzVuWEc0Z0lDQWdYRzRnSUNBZ1VtVjJaWEp6WlhNZ2RHaGxJRzkxZEhCMWRDQnZaaUIwYUdVZ2NISnZkbWxrWldRZ1pXRnphVzVuSUdaMWJtTjBhVzl1TENCMWMyVmtJR1p2Y2lCbWJHbHdjR2x1WnlCbFlYTmxTVzVjYmlBZ0lDQmpkWEoyWlNCMGJ5QmhiaUJsWVhObFQzVjBMbHh1SUNBZ0lGeHVJQ0FnSUVCd1lYSmhiU0JiYm5WdFltVnlYVG9nVUhKdlozSmxjM01zSUdaeWIyMGdNQ0F0SURFc0lHOW1JR04xY25KbGJuUWdjMmhwWm5SY2JpQWdJQ0JBY0dGeVlXMGdXMloxYm1OMGFXOXVYVG9nVkdobElHVmhjMmx1WnlCbWRXNWpkR2x2YmlCMGJ5QnlaWFpsY25ObFhHNGdJQ0FnUUhKbGRIVnlibk1nVzI1MWJXSmxjbDA2SUZSb1pTQmxZWE5wYm1jdFlXUnFkWE4wWldRZ1pHVnNkR0ZjYmlvdlhHNWpiMjV6ZENCeVpYWmxjbk5sUldGemFXNW5JRDBnS0cxbGRHaHZaQ2tnUFQ0Z0tIQnliMmR5WlhOekxDQnpkSEpsYm1kMGFDa2dQVDRnTVNBdElHMWxkR2h2WkNneElDMGdjSEp2WjNKbGMzTXNJSE4wY21WdVozUm9LVHRjYmx4dUx5cGNiaUFnSUNCRllYTnBibWNnWTJ4aGMzTmNibHh1SUNBZ0lFbG1JSEJ5YjNacFpHVmtJR1ZoYzJsdVp5Qm1kVzVqZEdsdmJpd2djbVYwZFhKdWN5QmxZWE5wYm1jZ1puVnVZM1JwYjI0Z2QybDBhQ0JjYmlBZ0lDQnBiaTl2ZFhRdmFXNVBkWFFnZG1GeWFXRjBhVzl1YzF4dVhHNGdJQ0FnU1dZZ2NISnZkbWxrWldRZ1ptOTFjaUJoY21kMWJXVnVkSE1zSUhKbGRIVnlibk1nYm1WM0lFSmxlbWxsY2lCamJHRnpjeUJwYm5OMFpXRmtMbHh1S2k5Y2JtVjRjRzl5ZENCa1pXWmhkV3gwSUdaMWJtTjBhVzl1SUdOeVpXRjBaVVZoYzJsdVowWjFibU4wYVc5dUtHMWxkR2h2WkNrZ2UxeHVJQ0FnSUd4bGRDQmxZWE5wYm1kR2RXNWpkR2x2YmlBOUlDaHdjbTluY21WemN5d2djM1J5Wlc1bmRHZ3BJRDArSUcxbGRHaHZaQ2h3Y205bmNtVnpjeXdnYzNSeVpXNW5kR2dwTzF4dVhHNGdJQ0FnWldGemFXNW5SblZ1WTNScGIyNHVhVzRnUFNBb2NISnZaM0psYzNNc0lITjBjbVZ1WjNSb0tTQTlQaUJ0WlhSb2IyUW9jSEp2WjNKbGMzTXNJSE4wY21WdVozUm9LVHRjYmlBZ0lDQmxZWE5wYm1kR2RXNWpkR2x2Ymk1dmRYUWdQU0J5WlhabGNuTmxSV0Z6YVc1bktHMWxkR2h2WkNrN1hHNGdJQ0FnWldGemFXNW5SblZ1WTNScGIyNHVhVzVQZFhRZ1BTQnRhWEp5YjNKRllYTnBibWNvYldWMGFHOWtLVHRjYmx4dUlDQWdJSEpsZEhWeWJpQmxZWE5wYm1kR2RXNWpkR2x2Ymp0Y2JuMWNiaUpkZlE9PVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvYWN0aW9ucy90d2Vlbi9jcmVhdGUtZWFzaW5nLmpzXG4gKiogbW9kdWxlIGlkID0gMTdcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF9jYWxjID0gcmVxdWlyZSgnLi4vaW5jL2NhbGMnKTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gKGZyb20sIHRvKSB7XG4gICAgdmFyIG1hcExlbmd0aCA9IGZyb20ubGVuZ3RoO1xuXG4gICAgcmV0dXJuIGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICBmb3IgKHZhciBpID0gMTsgaSA8IG1hcExlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAodmFsdWUgPCBmcm9tW2ldIHx8IGkgPT09IG1hcExlbmd0aCkge1xuICAgICAgICAgICAgICAgIHJldHVybiAoMCwgX2NhbGMuZ2V0VmFsdWVGcm9tUHJvZ3Jlc3MpKCgwLCBfY2FsYy5yZXN0cmljdCkoKDAsIF9jYWxjLmdldFByb2dyZXNzRnJvbVZhbHVlKSh2YWx1ZSwgZnJvbVtpIC0gMV0sIGZyb21baV0pLCAwLCAxKSwgdG9baSAtIDFdLCB0b1tpXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbTFoY0M1cWN5SmRMQ0p1WVcxbGN5STZXMTBzSW0xaGNIQnBibWR6SWpvaU96czdPenM3YTBKQlJXVXNWVUZCUXl4SlFVRkpMRVZCUVVVc1JVRkJSU3hGUVVGTE8wRkJRM3BDTEZGQlFVMHNVMEZCVXl4SFFVRkhMRWxCUVVrc1EwRkJReXhOUVVGTkxFTkJRVU03TzBGQlJUbENMRmRCUVU4c1ZVRkJReXhMUVVGTExFVkJRVXM3UVVGRFpDeGhRVUZMTEVsQlFVa3NRMEZCUXl4SFFVRkhMRU5CUVVNc1JVRkJSU3hEUVVGRExFZEJRVWNzVTBGQlV5eEZRVUZGTEVOQlFVTXNSVUZCUlN4RlFVRkZPMEZCUTJoRExHZENRVUZKTEV0QlFVc3NSMEZCUnl4SlFVRkpMRU5CUVVNc1EwRkJReXhEUVVGRExFbEJRVWtzUTBGQlF5eExRVUZMTEZOQlFWTXNSVUZCUlR0QlFVTndReXgxUWtGQlR5eFZRVkpSTEc5Q1FVRnZRaXhGUVZGUUxGVkJVbE1zVVVGQlVTeEZRVkZTTEZWQlVqVkRMRzlDUVVGdlFpeEZRVkUyUXl4TFFVRkxMRVZCUVVVc1NVRkJTU3hEUVVGRExFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTXNSVUZCUlN4SlFVRkpMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUlVGQlJTeERRVUZETEVWQlFVVXNRMEZCUXl4RFFVRkRMRVZCUVVVc1JVRkJSU3hEUVVGRExFTkJRVU1zUjBGQlJ5eERRVUZETEVOQlFVTXNSVUZCUlN4RlFVRkZMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF6dGhRVU53U0R0VFFVTktPMHRCUTBvc1EwRkJRenREUVVOTUlpd2labWxzWlNJNkltMWhjQzVxY3lJc0luTnZkWEpqWlhORGIyNTBaVzUwSWpwYkltbHRjRzl5ZENCN0lHZGxkRkJ5YjJkeVpYTnpSbkp2YlZaaGJIVmxMQ0JuWlhSV1lXeDFaVVp5YjIxUWNtOW5jbVZ6Y3l3Z2NtVnpkSEpwWTNRZ2ZTQm1jbTl0SUNjdUxpOXBibU12WTJGc1l5YzdYRzVjYm1WNGNHOXlkQ0JrWldaaGRXeDBJQ2htY205dExDQjBieWtnUFQ0Z2UxeHVJQ0FnSUdOdmJuTjBJRzFoY0V4bGJtZDBhQ0E5SUdaeWIyMHViR1Z1WjNSb08xeHVYRzRnSUNBZ2NtVjBkWEp1SUNoMllXeDFaU2tnUFQ0Z2UxeHVJQ0FnSUNBZ0lDQm1iM0lnS0d4bGRDQnBJRDBnTVRzZ2FTQThJRzFoY0V4bGJtZDBhRHNnYVNzcktTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNCcFppQW9kbUZzZFdVZ1BDQm1jbTl0VzJsZElIeDhJR2tnUFQwOUlHMWhjRXhsYm1kMGFDa2dlMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJSEpsZEhWeWJpQm5aWFJXWVd4MVpVWnliMjFRY205bmNtVnpjeWh5WlhOMGNtbGpkQ2huWlhSUWNtOW5jbVZ6YzBaeWIyMVdZV3gxWlNoMllXeDFaU3dnWm5KdmJWdHBJQzBnTVYwc0lHWnliMjFiYVYwcExDQXdMQ0F4S1N3Z2RHOWJhU0F0SURGZExDQjBiMXRwWFNrN1hHNGdJQ0FnSUNBZ0lDQWdJQ0I5WEc0Z0lDQWdJQ0FnSUgxY2JpQWdJQ0I5TzF4dWZTSmRmUT09XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy90cmFuc2Zvcm1lcnMvbWFwLmpzXG4gKiogbW9kdWxlIGlkID0gMThcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHMuZGVmYXVsdCA9IHNlbGVjdEFjdG9yO1xuXG52YXIgX0FjdG9yID0gcmVxdWlyZSgnLi4vYWN0b3IvQWN0b3InKTtcblxudmFyIF9BY3RvcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9BY3Rvcik7XG5cbnZhciBfdXRpbHMgPSByZXF1aXJlKCcuLi9pbmMvdXRpbHMnKTtcblxudmFyIF9jc3MgPSByZXF1aXJlKCcuLi9yZW5kZXIvY3NzJyk7XG5cbnZhciBfY3NzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2Nzcyk7XG5cbnZhciBfc3ZnID0gcmVxdWlyZSgnLi4vcmVuZGVyL3N2ZycpO1xuXG52YXIgX3N2ZzIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9zdmcpO1xuXG52YXIgX3N2Z1BhdGggPSByZXF1aXJlKCcuLi9yZW5kZXIvc3ZnLXBhdGgnKTtcblxudmFyIF9zdmdQYXRoMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3N2Z1BhdGgpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG52YXIgU0FWRV9QUk9QID0gJ19fcG1fYWN0b3JfJztcblxudmFyIGRldGVjdFJlbmRlcmVyID0gZnVuY3Rpb24gKGVsZW1lbnQpIHtcbiAgICAvLyBJZiBIVE1MRWxlbWVudCBsb2FkIHJlbmRlckNTU1xuICAgIGlmIChlbGVtZW50IGluc3RhbmNlb2YgSFRNTEVsZW1lbnQgfHwgZWxlbWVudC50YWdOYW1lID09PSAnc3ZnJykge1xuICAgICAgICByZXR1cm4gX2NzczIuZGVmYXVsdDtcblxuICAgICAgICAvLyBPciBTVkdcbiAgICB9IGVsc2UgaWYgKGVsZW1lbnQgaW5zdGFuY2VvZiBTVkdFbGVtZW50KSB7XG4gICAgICAgICAgICBpZiAoZWxlbWVudC50YWdOYW1lID09PSAncGF0aCcpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gX3N2Z1BhdGgyLmRlZmF1bHQ7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybiBfc3ZnMi5kZWZhdWx0O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG59O1xuXG52YXIgY3JlYXRlQWN0b3IgPSBmdW5jdGlvbiAoZWxlbWVudCkge1xuICAgIHZhciBhY3RvciA9IGVsZW1lbnRbU0FWRV9QUk9QXTtcblxuICAgIGlmICghYWN0b3IpIHtcbiAgICAgICAgcHJvcHMuZWxlbWVudCA9IGVsZW1lbnQ7XG4gICAgICAgIHByb3BzLm9uUmVuZGVyID0gZGV0ZWN0UmVuZGVyZXIoZWxlbWVudCk7XG4gICAgICAgIGFjdG9yID0gZWxlbWVudFtTQVZFX1BST1BdID0gbmV3IF9BY3RvcjIuZGVmYXVsdChwcm9wcyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGFjdG9yO1xufTtcblxuZnVuY3Rpb24gc2VsZWN0QWN0b3Ioc2VsZWN0b3IsIHByb3BzKSB7XG4gICAgdmFyIGVsZW1lbnRzID0gKDAsIF91dGlscy5zZWxlY3REb20pKHNlbGVjdG9yKTtcbiAgICB2YXIgYWN0b3JzID0gZWxlbWVudHMubWFwKGNyZWF0ZUFjdG9yKTtcblxuICAgIHJldHVybiBhY3RvcnMubGVuZ3RoID4gMSA/IGFjdG9ycyA6IGFjdG9yc1swXTtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbk5sYkdWamRDMWhZM1J2Y2k1cWN5SmRMQ0p1WVcxbGN5STZXMTBzSW0xaGNIQnBibWR6SWpvaU96czdhMEpCYjBOM1FpeFhRVUZYT3pzN096czdPenM3T3pzN096czdPenM3T3pzN08wRkJOMEp1UXl4SlFVRk5MRk5CUVZNc1IwRkJSeXhoUVVGaExFTkJRVU03TzBGQlJXaERMRWxCUVUwc1kwRkJZeXhIUVVGSExGVkJRVU1zVDBGQlR5eEZRVUZMT3p0QlFVVm9ReXhSUVVGSkxFOUJRVThzV1VGQldTeFhRVUZYTEVsQlFVa3NUMEZCVHl4RFFVRkRMRTlCUVU4c1MwRkJTeXhMUVVGTExFVkJRVVU3UVVGRE4wUTdPenRCUVVGcFFpeExRVWR3UWl4TlFVRk5MRWxCUVVrc1QwRkJUeXhaUVVGWkxGVkJRVlVzUlVGQlJUdEJRVU4wUXl4blFrRkJTU3hQUVVGUExFTkJRVU1zVDBGQlR5eExRVUZMTEUxQlFVMHNSVUZCUlR0QlFVTTFRaXg1UTBGQmNVSTdZVUZEZUVJc1RVRkJUVHRCUVVOSUxIRkRRVUZwUWp0aFFVTndRanRUUVVOS08wTkJRMG9zUTBGQlFUczdRVUZGUkN4SlFVRk5MRmRCUVZjc1IwRkJSeXhWUVVGRExFOUJRVThzUlVGQlN6dEJRVU0zUWl4UlFVRkpMRXRCUVVzc1IwRkJSeXhQUVVGUExFTkJRVU1zVTBGQlV5eERRVUZETEVOQlFVTTdPMEZCUlM5Q0xGRkJRVWtzUTBGQlF5eExRVUZMTEVWQlFVVTdRVUZEVWl4aFFVRkxMRU5CUVVNc1QwRkJUeXhIUVVGSExFOUJRVThzUTBGQlF6dEJRVU40UWl4aFFVRkxMRU5CUVVNc1VVRkJVU3hIUVVGSExHTkJRV01zUTBGQlF5eFBRVUZQTEVOQlFVTXNRMEZCUXp0QlFVTjZReXhoUVVGTExFZEJRVWNzVDBGQlR5eERRVUZETEZOQlFWTXNRMEZCUXl4SFFVRkhMRzlDUVVGVkxFdEJRVXNzUTBGQlF5eERRVUZETzB0QlEycEVPenRCUVVWRUxGZEJRVThzUzBGQlN5eERRVUZETzBOQlEyaENMRU5CUVVFN08wRkJSV01zVTBGQlV5eFhRVUZYTEVOQlFVTXNVVUZCVVN4RlFVRkZMRXRCUVVzc1JVRkJSVHRCUVVOcVJDeFJRVUZOTEZGQlFWRXNSMEZCUnl4WFFYQkRXaXhUUVVGVExFVkJiME5oTEZGQlFWRXNRMEZCUXl4RFFVRkRPMEZCUTNKRExGRkJRVTBzVFVGQlRTeEhRVUZITEZGQlFWRXNRMEZCUXl4SFFVRkhMRU5CUVVNc1YwRkJWeXhEUVVGRExFTkJRVU03TzBGQlJYcERMRmRCUVU4c1FVRkJReXhOUVVGTkxFTkJRVU1zVFVGQlRTeEhRVUZITEVOQlFVTXNSMEZCU1N4TlFVRk5MRWRCUVVjc1RVRkJUU3hEUVVGRExFTkJRVU1zUTBGQlF5eERRVUZETzBOQlEyNUVJaXdpWm1sc1pTSTZJbk5sYkdWamRDMWhZM1J2Y2k1cWN5SXNJbk52ZFhKalpYTkRiMjUwWlc1MElqcGJJbWx0Y0c5eWRDQkJZM1J2Y2lCbWNtOXRJQ2N1TGk5aFkzUnZjaTlCWTNSdmNpYzdYRzVwYlhCdmNuUWdleUJ6Wld4bFkzUkViMjBnZlNCbWNtOXRJQ2N1TGk5cGJtTXZkWFJwYkhNbk8xeHVYRzVwYlhCdmNuUWdjbVZ1WkdWeVExTlRJR1p5YjIwZ0p5NHVMM0psYm1SbGNpOWpjM01uTzF4dWFXMXdiM0owSUhKbGJtUmxjbE5XUnlCbWNtOXRJQ2N1TGk5eVpXNWtaWEl2YzNabkp6dGNibWx0Y0c5eWRDQnlaVzVrWlhKVFZrZFFZWFJvSUdaeWIyMGdKeTR1TDNKbGJtUmxjaTl6ZG1jdGNHRjBhQ2M3WEc1Y2JtTnZibk4wSUZOQlZrVmZVRkpQVUNBOUlDZGZYM0J0WDJGamRHOXlYeWM3WEc1Y2JtTnZibk4wSUdSbGRHVmpkRkpsYm1SbGNtVnlJRDBnS0dWc1pXMWxiblFwSUQwK0lIdGNiaUFnSUNBdkx5QkpaaUJJVkUxTVJXeGxiV1Z1ZENCc2IyRmtJSEpsYm1SbGNrTlRVMXh1SUNBZ0lHbG1JQ2hsYkdWdFpXNTBJR2x1YzNSaGJtTmxiMllnU0ZSTlRFVnNaVzFsYm5RZ2ZId2daV3hsYldWdWRDNTBZV2RPWVcxbElEMDlQU0FuYzNabkp5a2dlMXh1SUNBZ0lDQWdJQ0J5WlhSMWNtNGdjbVZ1WkdWeVExTlRPMXh1WEc0Z0lDQWdMeThnVDNJZ1UxWkhYRzRnSUNBZ2ZTQmxiSE5sSUdsbUlDaGxiR1Z0Wlc1MElHbHVjM1JoYm1ObGIyWWdVMVpIUld4bGJXVnVkQ2tnZTF4dUlDQWdJQ0FnSUNCcFppQW9aV3hsYldWdWRDNTBZV2RPWVcxbElEMDlQU0FuY0dGMGFDY3BJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lISmxkSFZ5YmlCeVpXNWtaWEpUVmtkUVlYUm9PMXh1SUNBZ0lDQWdJQ0I5SUdWc2MyVWdlMXh1SUNBZ0lDQWdJQ0FnSUNBZ2NtVjBkWEp1SUhKbGJtUmxjbE5XUnp0Y2JpQWdJQ0FnSUNBZ2ZWeHVJQ0FnSUgxY2JuMWNibHh1WTI5dWMzUWdZM0psWVhSbFFXTjBiM0lnUFNBb1pXeGxiV1Z1ZENrZ1BUNGdlMXh1SUNBZ0lHeGxkQ0JoWTNSdmNpQTlJR1ZzWlcxbGJuUmJVMEZXUlY5UVVrOVFYVHRjYmx4dUlDQWdJR2xtSUNnaFlXTjBiM0lwSUh0Y2JpQWdJQ0FnSUNBZ2NISnZjSE11Wld4bGJXVnVkQ0E5SUdWc1pXMWxiblE3WEc0Z0lDQWdJQ0FnSUhCeWIzQnpMbTl1VW1WdVpHVnlJRDBnWkdWMFpXTjBVbVZ1WkdWeVpYSW9aV3hsYldWdWRDazdYRzRnSUNBZ0lDQWdJR0ZqZEc5eUlEMGdaV3hsYldWdWRGdFRRVlpGWDFCU1QxQmRJRDBnYm1WM0lFRmpkRzl5S0hCeWIzQnpLVHRjYmlBZ0lDQjlYRzVjYmlBZ0lDQnlaWFIxY200Z1lXTjBiM0k3WEc1OVhHNWNibVY0Y0c5eWRDQmtaV1poZFd4MElHWjFibU4wYVc5dUlITmxiR1ZqZEVGamRHOXlLSE5sYkdWamRHOXlMQ0J3Y205d2N5a2dlMXh1SUNBZ0lHTnZibk4wSUdWc1pXMWxiblJ6SUQwZ2MyVnNaV04wUkc5dEtITmxiR1ZqZEc5eUtUdGNiaUFnSUNCamIyNXpkQ0JoWTNSdmNuTWdQU0JsYkdWdFpXNTBjeTV0WVhBb1kzSmxZWFJsUVdOMGIzSXBPMXh1WEc0Z0lDQWdjbVYwZFhKdUlDaGhZM1J2Y25NdWJHVnVaM1JvSUQ0Z01Ta2dQeUJoWTNSdmNuTWdPaUJoWTNSdmNuTmJNRjA3WEc1OVhHNGlYWDA9XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9pbmMvc2VsZWN0LWFjdG9yLmpzXG4gKiogbW9kdWxlIGlkID0gMTlcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHMuc2V0RGlsYXRpb24gPSBzZXREaWxhdGlvbjtcbnZhciBoYXNQZXJmb3JtYW5jZU5vdyA9IHR5cGVvZiBwZXJmb3JtYW5jZSAhPT0gJ3VuZGVmaW5lZCcgJiYgcGVyZm9ybWFuY2Uubm93O1xudmFyIGN1cnJlbnRUaW1lID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBoYXNQZXJmb3JtYW5jZU5vdyA/IHBlcmZvcm1hbmNlLm5vdygpIDogbmV3IERhdGUoKS5nZXRUaW1lKCk7XG59O1xuXG52YXIgTUFYX0VMQVBTRUQgPSAzMztcblxudmFyIGJhc2UgPSAwO1xudmFyIGN1cnJlbnQgPSAwO1xudmFyIGVsYXBzZWQgPSAxNi43O1xudmFyIGRpbGF0aW9uID0gMTtcbnZhciBsb3N0VGltZSA9IDA7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIChmcmFtZXN0YW1wKSB7XG4gICAgICAgIGlmIChiYXNlID09PSAwKSB7XG4gICAgICAgICAgICBjdXJyZW50ID0gYmFzZSA9IGZyYW1lc3RhbXA7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgcHJldiA9IGN1cnJlbnQ7XG4gICAgICAgIHZhciBsb3NzQWRqdXN0ZWQgPSBmcmFtZXN0YW1wIC0gbG9zdFRpbWU7XG4gICAgICAgIHZhciBub25EaWxhdGVkRWxhcHNlZCA9IE1hdGgubWluKGxvc3NBZGp1c3RlZCAtIHByZXYsIE1BWF9FTEFQU0VEKTtcbiAgICAgICAgZWxhcHNlZCA9IG5vbkRpbGF0ZWRFbGFwc2VkICogZGlsYXRpb247XG4gICAgICAgIGN1cnJlbnQgKz0gZWxhcHNlZDtcbiAgICAgICAgbG9zdFRpbWUgKz0gbm9uRGlsYXRlZEVsYXBzZWQgLSBlbGFwc2VkO1xuICAgIH0sXG5cbiAgICBzdGFydDogZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gY3VycmVudCA9IGN1cnJlbnRUaW1lKCk7XG4gICAgfSxcblxuICAgIGdldEVsYXBzZWQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIGVsYXBzZWQ7XG4gICAgfVxufTtcbmZ1bmN0aW9uIHNldERpbGF0aW9uKG5ld0RpbGF0aW9uKSB7XG4gICAgZGlsYXRpb24gPSBuZXdEaWxhdGlvbjtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJblJwYldWeUxtcHpJbDBzSW01aGJXVnpJanBiWFN3aWJXRndjR2x1WjNNaU9pSTdPenRSUVRoQ1owSXNWMEZCVnl4SFFVRllMRmRCUVZjN1FVRTVRak5DTEVsQlFVMHNhVUpCUVdsQ0xFZEJRVWtzVDBGQlR5eFhRVUZYTEV0QlFVc3NWMEZCVnl4SlFVRkpMRmRCUVZjc1EwRkJReXhIUVVGSExFRkJRVU1zUTBGQlF6dEJRVU5zUml4SlFVRk5MRmRCUVZjc1IwRkJSenRYUVVGTkxHbENRVUZwUWl4SFFVRkhMRmRCUVZjc1EwRkJReXhIUVVGSExFVkJRVVVzUjBGQlJ5eEpRVUZKTEVsQlFVa3NSVUZCUlN4RFFVRkRMRTlCUVU4c1JVRkJSVHREUVVGQkxFTkJRVU03TzBGQlJYWkdMRWxCUVUwc1YwRkJWeXhIUVVGSExFVkJRVVVzUTBGQlF6czdRVUZGZGtJc1NVRkJTU3hKUVVGSkxFZEJRVWNzUTBGQlF5eERRVUZETzBGQlEySXNTVUZCU1N4UFFVRlBMRWRCUVVjc1EwRkJReXhEUVVGRE8wRkJRMmhDTEVsQlFVa3NUMEZCVHl4SFFVRkhMRWxCUVVrc1EwRkJRenRCUVVOdVFpeEpRVUZKTEZGQlFWRXNSMEZCUnl4RFFVRkRMRU5CUVVNN1FVRkRha0lzU1VGQlNTeFJRVUZSTEVkQlFVY3NRMEZCUXl4RFFVRkRPenRyUWtGRlJqdEJRVU5ZTEZWQlFVMHNSVUZCUlN4VlFVRkRMRlZCUVZVc1JVRkJTenRCUVVOd1FpeFpRVUZKTEVsQlFVa3NTMEZCU3l4RFFVRkRMRVZCUVVVN1FVRkRXaXh0UWtGQlR5eEhRVUZITEVsQlFVa3NSMEZCUnl4VlFVRlZMRU5CUVVNN1UwRkRMMEk3TzBGQlJVUXNXVUZCVFN4SlFVRkpMRWRCUVVjc1QwRkJUeXhEUVVGRE8wRkJRM0pDTEZsQlFVMHNXVUZCV1N4SFFVRkhMRlZCUVZVc1IwRkJSeXhSUVVGUkxFTkJRVU03UVVGRE0wTXNXVUZCVFN4cFFrRkJhVUlzUjBGQlJ5eEpRVUZKTEVOQlFVTXNSMEZCUnl4RFFVRkRMRmxCUVZrc1IwRkJSeXhKUVVGSkxFVkJRVVVzVjBGQlZ5eERRVUZETEVOQlFVTTdRVUZEY2tVc1pVRkJUeXhIUVVGSExHbENRVUZwUWl4SFFVRkhMRkZCUVZFc1EwRkJRenRCUVVOMlF5eGxRVUZQTEVsQlFVa3NUMEZCVHl4RFFVRkRPMEZCUTI1Q0xHZENRVUZSTEVsQlFVa3NhVUpCUVdsQ0xFZEJRVWNzVDBGQlR5eERRVUZETzB0QlF6TkRPenRCUVVWRUxGTkJRVXNzUlVGQlJUdGxRVUZOTEU5QlFVOHNSMEZCUnl4WFFVRlhMRVZCUVVVN1MwRkJRVHM3UVVGRmNFTXNZMEZCVlN4RlFVRkZPMlZCUVUwc1QwRkJUenRMUVVGQk8wTkJRelZDTzBGQlJVMHNVMEZCVXl4WFFVRlhMRU5CUVVNc1YwRkJWeXhGUVVGRk8wRkJRM0pETEZsQlFWRXNSMEZCUnl4WFFVRlhMRU5CUVVNN1EwRkRNVUlpTENKbWFXeGxJam9pZEdsdFpYSXVhbk1pTENKemIzVnlZMlZ6UTI5dWRHVnVkQ0k2V3lKamIyNXpkQ0JvWVhOUVpYSm1iM0p0WVc1alpVNXZkeUE5SUNoMGVYQmxiMllnY0dWeVptOXliV0Z1WTJVZ0lUMDlJQ2QxYm1SbFptbHVaV1FuSUNZbUlIQmxjbVp2Y20xaGJtTmxMbTV2ZHlrN1hHNWpiMjV6ZENCamRYSnlaVzUwVkdsdFpTQTlJQ2dwSUQwK0lHaGhjMUJsY21admNtMWhibU5sVG05M0lEOGdjR1Z5Wm05eWJXRnVZMlV1Ym05M0tDa2dPaUJ1WlhjZ1JHRjBaU2dwTG1kbGRGUnBiV1VvS1R0Y2JseHVZMjl1YzNRZ1RVRllYMFZNUVZCVFJVUWdQU0F6TXp0Y2JseHViR1YwSUdKaGMyVWdQU0F3TzF4dWJHVjBJR04xY25KbGJuUWdQU0F3TzF4dWJHVjBJR1ZzWVhCelpXUWdQU0F4Tmk0M08xeHViR1YwSUdScGJHRjBhVzl1SUQwZ01UdGNibXhsZENCc2IzTjBWR2x0WlNBOUlEQTdYRzVjYm1WNGNHOXlkQ0JrWldaaGRXeDBJSHRjYmlBZ0lDQjFjR1JoZEdVNklDaG1jbUZ0WlhOMFlXMXdLU0E5UGlCN1hHNGdJQ0FnSUNBZ0lHbG1JQ2hpWVhObElEMDlQU0F3S1NCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0JqZFhKeVpXNTBJRDBnWW1GelpTQTlJR1p5WVcxbGMzUmhiWEE3WEc0Z0lDQWdJQ0FnSUgxY2JseHVJQ0FnSUNBZ0lDQmpiMjV6ZENCd2NtVjJJRDBnWTNWeWNtVnVkRHRjYmlBZ0lDQWdJQ0FnWTI5dWMzUWdiRzl6YzBGa2FuVnpkR1ZrSUQwZ1puSmhiV1Z6ZEdGdGNDQXRJR3h2YzNSVWFXMWxPMXh1SUNBZ0lDQWdJQ0JqYjI1emRDQnViMjVFYVd4aGRHVmtSV3hoY0hObFpDQTlJRTFoZEdndWJXbHVLR3h2YzNOQlpHcDFjM1JsWkNBdElIQnlaWFlzSUUxQldGOUZURUZRVTBWRUtUdGNiaUFnSUNBZ0lDQWdaV3hoY0hObFpDQTlJRzV2YmtScGJHRjBaV1JGYkdGd2MyVmtJQ29nWkdsc1lYUnBiMjQ3WEc0Z0lDQWdJQ0FnSUdOMWNuSmxiblFnS3owZ1pXeGhjSE5sWkR0Y2JpQWdJQ0FnSUNBZ2JHOXpkRlJwYldVZ0t6MGdibTl1Ukdsc1lYUmxaRVZzWVhCelpXUWdMU0JsYkdGd2MyVmtPMXh1SUNBZ0lIMHNYRzVjYmlBZ0lDQnpkR0Z5ZERvZ0tDa2dQVDRnWTNWeWNtVnVkQ0E5SUdOMWNuSmxiblJVYVcxbEtDa3NYRzVjYmlBZ0lDQm5aWFJGYkdGd2MyVmtPaUFvS1NBOVBpQmxiR0Z3YzJWa1hHNTlPMXh1WEc1bGVIQnZjblFnWm5WdVkzUnBiMjRnYzJWMFJHbHNZWFJwYjI0b2JtVjNSR2xzWVhScGIyNHBJSHRjYmlBZ0lDQmthV3hoZEdsdmJpQTlJRzVsZDBScGJHRjBhVzl1TzF4dWZTSmRmUT09XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9wcm9jZXNzL3RpbWVyLmpzXG4gKiogbW9kdWxlIGlkID0gMjBcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHMuZGVmYXVsdCA9IHN0YWdnZXI7XG5cbnZhciBfVHdlZW4gPSByZXF1aXJlKCcuLi9hY3Rpb25zL1R3ZWVuJyk7XG5cbnZhciBfVHdlZW4yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfVHdlZW4pO1xuXG52YXIgX3V0aWxzID0gcmVxdWlyZSgnLi91dGlscycpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG52YXIgREVGQVVMVF9JTlRFUlZBTCA9IDEwMDtcbnZhciBERUZBVUxUX0VBU0lORyA9IF9Ud2VlbjIuZGVmYXVsdC5FYXNpbmcuTElORUFSO1xuXG5mdW5jdGlvbiBzdGFnZ2VyKGFycmF5LCBwcm9wcywgY2FsbGJhY2spIHtcbiAgICB2YXIgYXJyYXlMZW5ndGggPSBhcnJheS5sZW5ndGg7XG4gICAgdmFyIHByb3BzSXNJbnRlcnZhbCA9ICgwLCBfdXRpbHMuaXNOdW0pKHByb3BzKTtcbiAgICB2YXIgaW50ZXJ2YWwgPSBwcm9wc0lzSW50ZXJ2YWwgPyBwcm9wcyA6IHByb3BzLmludGVydmFsIHx8IERFRkFVTFRfSU5URVJWQUw7XG4gICAgdmFyIHByZXZJbmRleCA9IC0xO1xuXG4gICAgdmFyIHN0YWdnZXJUd2VlbiA9IG5ldyBfVHdlZW4yLmRlZmF1bHQoe1xuICAgICAgICBkdXJhdGlvbjogaW50ZXJ2YWwgKiBhcnJheUxlbmd0aCxcbiAgICAgICAgdmFsdWVzOiB7XG4gICAgICAgICAgICBpOiB7XG4gICAgICAgICAgICAgICAgZnJvbTogMCxcbiAgICAgICAgICAgICAgICB0bzogbnVtTWVtYmVycyAtIDEsXG4gICAgICAgICAgICAgICAgcm91bmQ6IHRydWUsXG4gICAgICAgICAgICAgICAgZWFzZTogcHJvcHNJc0ludGVydmFsID8gREVGQVVMVF9FQVNJTkcgOiBwcm9wcy5lYXNlIHx8IERFRkFVTFRfRUFTSU5HXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIG9uUmVuZGVyOiBmdW5jdGlvbiAoX3JlZikge1xuICAgICAgICAgICAgdmFyIGkgPSBfcmVmLmk7XG5cbiAgICAgICAgICAgIHZhciBnYXBJbmRleCA9IHByZXZJbmRleCArIDE7XG5cbiAgICAgICAgICAgIGZvciAoOyBnYXBJbmRleCA8PSBpOyBnYXBJbmRleCsrKSB7XG4gICAgICAgICAgICAgICAgY2FsbGJhY2soYXJyYXlbZ2FwSW5kZXhdLCBnYXBJbmRleCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHByZXZJbmRleCA9IGk7XG4gICAgICAgIH0sXG4gICAgICAgIG9uQ29tcGxldGU6IHByb3BzSXNJbnRlcnZhbCA/IHVuZGVmaW5lZCA6IHByb3BzLm9uQ29tcGxldGVcbiAgICB9KTtcblxuICAgIHN0YWdnZXJUd2Vlbi5zdGFydCgpO1xuXG4gICAgcmV0dXJuIHN0YWdnZXJUd2Vlbjtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbk4wWVdkblpYSXVhbk1pWFN3aWJtRnRaWE1pT2x0ZExDSnRZWEJ3YVc1bmN5STZJanM3TzJ0Q1FVMTNRaXhQUVVGUE96czdPenM3T3pzN08wRkJTQzlDTEVsQlFVMHNaMEpCUVdkQ0xFZEJRVWNzUjBGQlJ5eERRVUZETzBGQlF6ZENMRWxCUVUwc1kwRkJZeXhIUVVGSExHZENRVUZOTEUxQlFVMHNRMEZCUXl4TlFVRk5MRU5CUVVNN08wRkJSVFZDTEZOQlFWTXNUMEZCVHl4RFFVRkRMRXRCUVVzc1JVRkJSU3hMUVVGTExFVkJRVVVzVVVGQlVTeEZRVUZGTzBGQlEzQkVMRkZCUVUwc1YwRkJWeXhIUVVGSExFdEJRVXNzUTBGQlF5eE5RVUZOTEVOQlFVTTdRVUZEYWtNc1VVRkJUU3hsUVVGbExFZEJRVWNzVjBGUWJrSXNTMEZCU3l4RlFVOXZRaXhMUVVGTExFTkJRVU1zUTBGQlF6dEJRVU55UXl4UlFVRk5MRkZCUVZFc1IwRkJSeXhsUVVGbExFZEJRVWNzUzBGQlN5eEhRVUZITEV0QlFVc3NRMEZCUXl4UlFVRlJMRWxCUVVrc1owSkJRV2RDTEVOQlFVTTdRVUZET1VVc1VVRkJTU3hUUVVGVExFZEJRVWNzUTBGQlF5eERRVUZETEVOQlFVTTdPMEZCUlc1Q0xGRkJRVTBzV1VGQldTeEhRVUZITEc5Q1FVRlZPMEZCUXpOQ0xHZENRVUZSTEVWQlFVVXNVVUZCVVN4SFFVRkhMRmRCUVZjN1FVRkRhRU1zWTBGQlRTeEZRVUZGTzBGQlEwb3NZVUZCUXl4RlFVRkZPMEZCUTBNc2IwSkJRVWtzUlVGQlJTeERRVUZETzBGQlExQXNhMEpCUVVVc1JVRkJSU3hWUVVGVkxFZEJRVWNzUTBGQlF6dEJRVU5zUWl4eFFrRkJTeXhGUVVGRkxFbEJRVWs3UVVGRFdDeHZRa0ZCU1N4RlFVRkZMR1ZCUVdVc1IwRkJSeXhqUVVGakxFZEJRVWNzUzBGQlN5eERRVUZETEVsQlFVa3NTVUZCU1N4alFVRmpPMkZCUTNoRk8xTkJRMG83UVVGRFJDeG5Ra0ZCVVN4RlFVRkZMR2RDUVVGWE8yZENRVUZTTEVOQlFVTXNVVUZCUkN4RFFVRkRPenRCUVVOV0xHZENRVUZKTEZGQlFWRXNSMEZCUnl4VFFVRlRMRWRCUVVjc1EwRkJReXhEUVVGRE96dEJRVVUzUWl4dFFrRkJUeXhSUVVGUkxFbEJRVWtzUTBGQlF5eEZRVUZGTEZGQlFWRXNSVUZCUlN4RlFVRkZPMEZCUXpsQ0xIZENRVUZSTEVOQlFVTXNTMEZCU3l4RFFVRkRMRkZCUVZFc1EwRkJReXhGUVVGRkxGRkJRVkVzUTBGQlF5eERRVUZETzJGQlEzWkRPenRCUVVWRUxIRkNRVUZUTEVkQlFVY3NRMEZCUXl4RFFVRkRPMU5CUTJwQ08wRkJRMFFzYTBKQlFWVXNSVUZCUlN4bFFVRmxMRWRCUVVjc1UwRkJVeXhIUVVGSExFdEJRVXNzUTBGQlF5eFZRVUZWTzB0QlF6ZEVMRU5CUVVNc1EwRkJRenM3UVVGRlNDeG5Ra0ZCV1N4RFFVRkRMRXRCUVVzc1JVRkJSU3hEUVVGRE96dEJRVVZ5UWl4WFFVRlBMRmxCUVZrc1EwRkJRenREUVVOMlFpSXNJbVpwYkdVaU9pSnpkR0ZuWjJWeUxtcHpJaXdpYzI5MWNtTmxjME52Ym5SbGJuUWlPbHNpYVcxd2IzSjBJRlIzWldWdUlHWnliMjBnSnk0dUwyRmpkR2x2Ym5NdlZIZGxaVzRuTzF4dWFXMXdiM0owSUhzZ2FYTk9kVzBnZlNCbWNtOXRJQ2N1TDNWMGFXeHpKenRjYmx4dVkyOXVjM1FnUkVWR1FWVk1WRjlKVGxSRlVsWkJUQ0E5SURFd01EdGNibU52Ym5OMElFUkZSa0ZWVEZSZlJVRlRTVTVISUQwZ1ZIZGxaVzR1UldGemFXNW5Ma3hKVGtWQlVqdGNibHh1Wlhod2IzSjBJR1JsWm1GMWJIUWdablZ1WTNScGIyNGdjM1JoWjJkbGNpaGhjbkpoZVN3Z2NISnZjSE1zSUdOaGJHeGlZV05yS1NCN1hHNGdJQ0FnWTI5dWMzUWdZWEp5WVhsTVpXNW5kR2dnUFNCaGNuSmhlUzVzWlc1bmRHZzdYRzRnSUNBZ1kyOXVjM1FnY0hKdmNITkpjMGx1ZEdWeWRtRnNJRDBnYVhOT2RXMG9jSEp2Y0hNcE8xeHVJQ0FnSUdOdmJuTjBJR2x1ZEdWeWRtRnNJRDBnY0hKdmNITkpjMGx1ZEdWeWRtRnNJRDhnY0hKdmNITWdPaUJ3Y205d2N5NXBiblJsY25aaGJDQjhmQ0JFUlVaQlZVeFVYMGxPVkVWU1ZrRk1PMXh1SUNBZ0lHeGxkQ0J3Y21WMlNXNWtaWGdnUFNBdE1UdGNibHh1SUNBZ0lHTnZibk4wSUhOMFlXZG5aWEpVZDJWbGJpQTlJRzVsZHlCVWQyVmxiaWg3WEc0Z0lDQWdJQ0FnSUdSMWNtRjBhVzl1T2lCcGJuUmxjblpoYkNBcUlHRnljbUY1VEdWdVozUm9MRnh1SUNBZ0lDQWdJQ0IyWVd4MVpYTTZJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lHazZJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0JtY205dE9pQXdMRnh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJSFJ2T2lCdWRXMU5aVzFpWlhKeklDMGdNU3hjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0J5YjNWdVpEb2dkSEoxWlN4Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCbFlYTmxPaUJ3Y205d2MwbHpTVzUwWlhKMllXd2dQeUJFUlVaQlZVeFVYMFZCVTBsT1J5QTZJSEJ5YjNCekxtVmhjMlVnZkh3Z1JFVkdRVlZNVkY5RlFWTkpUa2RjYmlBZ0lDQWdJQ0FnSUNBZ0lIMWNiaUFnSUNBZ0lDQWdmU3hjYmlBZ0lDQWdJQ0FnYjI1U1pXNWtaWEk2SUNoN0lHa2dmU2tnUFQ0Z2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnYkdWMElHZGhjRWx1WkdWNElEMGdjSEpsZGtsdVpHVjRJQ3NnTVR0Y2JseHVJQ0FnSUNBZ0lDQWdJQ0FnWm05eUlDZzdJR2RoY0VsdVpHVjRJRHc5SUdrN0lHZGhjRWx1WkdWNEt5c3BJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0JqWVd4c1ltRmpheWhoY25KaGVWdG5ZWEJKYm1SbGVGMHNJR2RoY0VsdVpHVjRLVHRjYmlBZ0lDQWdJQ0FnSUNBZ0lIMWNibHh1SUNBZ0lDQWdJQ0FnSUNBZ2NISmxka2x1WkdWNElEMGdhVHRjYmlBZ0lDQWdJQ0FnZlN4Y2JpQWdJQ0FnSUNBZ2IyNURiMjF3YkdWMFpUb2djSEp2Y0hOSmMwbHVkR1Z5ZG1Gc0lEOGdkVzVrWldacGJtVmtJRG9nY0hKdmNITXViMjVEYjIxd2JHVjBaVnh1SUNBZ0lIMHBPMXh1WEc0Z0lDQWdjM1JoWjJkbGNsUjNaV1Z1TG5OMFlYSjBLQ2s3WEc1Y2JpQWdJQ0J5WlhSMWNtNGdjM1JoWjJkbGNsUjNaV1Z1TzF4dWZTSmRmUT09XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9pbmMvc3RhZ2dlci5qc1xuICoqIG1vZHVsZSBpZCA9IDIxXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfZGVmYXVsdFByb3BzID0gcmVxdWlyZSgnLi9zZXR0aW5ncy9kZWZhdWx0LXByb3BzJyk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IHtcbiAgICBkZWZhdWx0UHJvcHM6IF9kZWZhdWx0UHJvcHMub3BhY2l0eVxufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbUZzY0doaExtcHpJbDBzSW01aGJXVnpJanBiWFN3aWJXRndjR2x1WjNNaU9pSTdPenM3T3p0clFrRkZaVHRCUVVOWUxHZENRVUZaTEdkQ1FVaFFMRTlCUVU4c1FVRkhVenREUVVONFFpSXNJbVpwYkdVaU9pSmhiSEJvWVM1cWN5SXNJbk52ZFhKalpYTkRiMjUwWlc1MElqcGJJbWx0Y0c5eWRDQjdJRzl3WVdOcGRIa2dmU0JtY205dElDY3VMM05sZEhScGJtZHpMMlJsWm1GMWJIUXRjSEp2Y0hNbk8xeHVYRzVsZUhCdmNuUWdaR1ZtWVhWc2RDQjdYRzRnSUNBZ1pHVm1ZWFZzZEZCeWIzQnpPaUJ2Y0dGamFYUjVYRzU5T3lKZGZRPT1cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL3ZhbHVlLXR5cGVzL2FscGhhLmpzXG4gKiogbW9kdWxlIGlkID0gMjJcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHMuZGVmYXVsdCA9IHtcbiAgICBkZWZhdWx0UHJvcHM6IHtcbiAgICAgICAgdW5pdDogJ2RlZydcbiAgICB9XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkltRnVaMnhsTG1weklsMHNJbTVoYldWeklqcGJYU3dpYldGd2NHbHVaM01pT2lJN096dHJRa0ZCWlR0QlFVTllMR2RDUVVGWkxFVkJRVVU3UVVGRFZpeFpRVUZKTEVWQlFVVXNTMEZCU3p0TFFVTmtPME5CUTBvaUxDSm1hV3hsSWpvaVlXNW5iR1V1YW5NaUxDSnpiM1Z5WTJWelEyOXVkR1Z1ZENJNld5SmxlSEJ2Y25RZ1pHVm1ZWFZzZENCN1hHNGdJQ0FnWkdWbVlYVnNkRkJ5YjNCek9pQjdYRzRnSUNBZ0lDQWdJSFZ1YVhRNklDZGtaV2NuWEc0Z0lDQWdmVnh1ZlRzaVhYMD1cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL3ZhbHVlLXR5cGVzL2FuZ2xlLmpzXG4gKiogbW9kdWxlIGlkID0gMjNcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF91dGlscyA9IHJlcXVpcmUoJy4uL2luYy91dGlscycpO1xuXG52YXIgX3B4ID0gcmVxdWlyZSgnLi9weCcpO1xuXG52YXIgX3B4MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3B4KTtcblxudmFyIF9kaWN0aW9uYXJ5ID0gcmVxdWlyZSgnLi9zZXR0aW5ncy9kaWN0aW9uYXJ5Jyk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmV4cG9ydHMuZGVmYXVsdCA9IHtcbiAgICBkZWZhdWx0UHJvcHM6IF9weDIuZGVmYXVsdC5kZWZhdWx0UHJvcHMsXG5cbiAgICAvKlxuICAgICAgICBTcGxpdCBwb3NpdGlvbnMgaW4gZm9ybWF0IFwiWCBZIFpcIlxuICAgICAgICBcbiAgICAgICAgQHBhcmFtIFtzdHJpbmddOiBQb3NpdGlvbiB2YWx1ZXNcbiAgICAgICAgICAgIFwiMjAlIDMwJSAwXCIgLT4gezIwJSwgMzAlLCAwfVxuICAgICAgICAgICAgXCIyMCUgMzAlXCIgLT4gezIwJSwgMzAlfVxuICAgICAgICAgICAgXCIyMCVcIiAtPiB7MjAlLCAyMCV9XG4gICAgKi9cbiAgICBzcGxpdDogZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgIHZhciBzcGxpdFZhbHVlcyA9ICgwLCBfdXRpbHMuc3BsaXRTcGFjZURlbGltaXRlZCkodmFsdWUpO1xuICAgICAgICB2YXIgbnVtQXhlcyA9IHNwbGl0VmFsdWVzLmxlbmd0aDtcbiAgICAgICAgdmFyIHNwbGl0VmFsdWUgPSB7XG4gICAgICAgICAgICBYOiBzcGxpdFZhbHVlc1swXSxcbiAgICAgICAgICAgIFk6IG51bUF4ZXMgPiAxID8gc3BsaXRWYWx1ZXNbMV0gOiBzcGxpdFZhbHVlc1swXVxuICAgICAgICB9O1xuXG4gICAgICAgIGlmIChudW1BeGVzID4gMikge1xuICAgICAgICAgICAgc3BsaXRWYWx1ZS5aID0gc3BsaXRWYWx1ZXNbMl07XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gc3BsaXRWYWx1ZTtcbiAgICB9LFxuXG4gICAgY29tYmluZTogZnVuY3Rpb24gKHZhbHVlcykge1xuICAgICAgICByZXR1cm4gKDAsIF91dGlscy5jcmVhdGVEZWxpbWl0ZWQpKHZhbHVlcywgX2RpY3Rpb25hcnkuYXhlcywgJyAnKTtcbiAgICB9XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkltRjRaWE11YW5NaVhTd2libUZ0WlhNaU9sdGRMQ0p0WVhCd2FXNW5jeUk2SWpzN096czdPenM3T3pzN096czdhMEpCU1dVN1FVRkRXQ3huUWtGQldTeEZRVUZGTEdGQlFWa3NXVUZCV1RzN096czdPenM3T3p0QlFWVjBReXhUUVVGTExFVkJRVVVzVlVGQlF5eExRVUZMTEVWQlFVczdRVUZEWkN4WlFVRk5MRmRCUVZjc1IwRkJSeXhYUVdoQ1JpeHRRa0ZCYlVJc1JVRm5Ra2NzUzBGQlN5eERRVUZETEVOQlFVTTdRVUZETDBNc1dVRkJUU3hQUVVGUExFZEJRVWNzVjBGQlZ5eERRVUZETEUxQlFVMHNRMEZCUXp0QlFVTnVReXhaUVVGTkxGVkJRVlVzUjBGQlJ6dEJRVU5tTEdGQlFVTXNSVUZCUlN4WFFVRlhMRU5CUVVNc1EwRkJReXhEUVVGRE8wRkJRMnBDTEdGQlFVTXNSVUZCUlN4QlFVRkRMRTlCUVU4c1IwRkJSeXhEUVVGRExFZEJRVWtzVjBGQlZ5eERRVUZETEVOQlFVTXNRMEZCUXl4SFFVRkhMRmRCUVZjc1EwRkJReXhEUVVGRExFTkJRVU03VTBGRGNrUXNRMEZCUXpzN1FVRkZSaXhaUVVGSkxFOUJRVThzUjBGQlJ5eERRVUZETEVWQlFVVTdRVUZEWWl4elFrRkJWU3hEUVVGRExFTkJRVU1zUjBGQlJ5eFhRVUZYTEVOQlFVTXNRMEZCUXl4RFFVRkRMRU5CUVVNN1UwRkRha003TzBGQlJVUXNaVUZCVHl4VlFVRlZMRU5CUVVNN1MwRkRja0k3TzBGQlJVUXNWMEZCVHl4RlFVRkZMRlZCUVVNc1RVRkJUVHRsUVVGTExGZEJPVUpvUWl4bFFVRmxMRVZCT0VKcFFpeE5RVUZOTEdOQk5VSjBReXhKUVVGSkxFVkJORUl3UXl4SFFVRkhMRU5CUVVNN1MwRkJRVHREUVVNeFJDSXNJbVpwYkdVaU9pSmhlR1Z6TG1weklpd2ljMjkxY21ObGMwTnZiblJsYm5RaU9sc2lhVzF3YjNKMElIc2dZM0psWVhSbFJHVnNhVzFwZEdWa0xDQnpjR3hwZEZOd1lXTmxSR1ZzYVcxcGRHVmtJSDBnWm5KdmJTQW5MaTR2YVc1akwzVjBhV3h6Snp0Y2JtbHRjRzl5ZENCd2VGWmhiSFZsVkhsd1pTQm1jbTl0SUNjdUwzQjRKenRjYm1sdGNHOXlkQ0I3SUdGNFpYTWdmU0JtY205dElDY3VMM05sZEhScGJtZHpMMlJwWTNScGIyNWhjbmtuTzF4dVhHNWxlSEJ2Y25RZ1pHVm1ZWFZzZENCN1hHNGdJQ0FnWkdWbVlYVnNkRkJ5YjNCek9pQndlRlpoYkhWbFZIbHdaUzVrWldaaGRXeDBVSEp2Y0hNc1hHNGdJQ0FnSUNBZ0lGeHVJQ0FnSUM4cVhHNGdJQ0FnSUNBZ0lGTndiR2wwSUhCdmMybDBhVzl1Y3lCcGJpQm1iM0p0WVhRZ1hDSllJRmtnV2x3aVhHNGdJQ0FnSUNBZ0lGeHVJQ0FnSUNBZ0lDQkFjR0Z5WVcwZ1czTjBjbWx1WjEwNklGQnZjMmwwYVc5dUlIWmhiSFZsYzF4dUlDQWdJQ0FnSUNBZ0lDQWdYQ0l5TUNVZ016QWxJREJjSWlBdFBpQjdNakFsTENBek1DVXNJREI5WEc0Z0lDQWdJQ0FnSUNBZ0lDQmNJakl3SlNBek1DVmNJaUF0UGlCN01qQWxMQ0F6TUNWOVhHNGdJQ0FnSUNBZ0lDQWdJQ0JjSWpJd0pWd2lJQzArSUhzeU1DVXNJREl3SlgxY2JpQWdJQ0FxTDF4dUlDQWdJSE53YkdsME9pQW9kbUZzZFdVcElEMCtJSHRjYmlBZ0lDQWdJQ0FnWTI5dWMzUWdjM0JzYVhSV1lXeDFaWE1nUFNCemNHeHBkRk53WVdObFJHVnNhVzFwZEdWa0tIWmhiSFZsS1R0Y2JpQWdJQ0FnSUNBZ1kyOXVjM1FnYm5WdFFYaGxjeUE5SUhOd2JHbDBWbUZzZFdWekxteGxibWQwYUR0Y2JpQWdJQ0FnSUNBZ1kyOXVjM1FnYzNCc2FYUldZV3gxWlNBOUlIdGNiaUFnSUNBZ0lDQWdJQ0FnSUZnNklITndiR2wwVm1Gc2RXVnpXekJkTEZ4dUlDQWdJQ0FnSUNBZ0lDQWdXVG9nS0c1MWJVRjRaWE1nUGlBeEtTQS9JSE53YkdsMFZtRnNkV1Z6V3pGZElEb2djM0JzYVhSV1lXeDFaWE5iTUYxY2JpQWdJQ0FnSUNBZ2ZUdGNibHh1SUNBZ0lDQWdJQ0JwWmlBb2JuVnRRWGhsY3lBK0lESXBJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lITndiR2wwVm1Gc2RXVXVXaUE5SUhOd2JHbDBWbUZzZFdWeld6SmRPMXh1SUNBZ0lDQWdJQ0I5WEc1Y2JpQWdJQ0FnSUNBZ2NtVjBkWEp1SUhOd2JHbDBWbUZzZFdVN1hHNGdJQ0FnZlN4Y2JseHVJQ0FnSUdOdmJXSnBibVU2SUNoMllXeDFaWE1wSUQwK0lHTnlaV0YwWlVSbGJHbHRhWFJsWkNoMllXeDFaWE1zSUdGNFpYTXNJQ2NnSnlsY2JuMDdYRzRpWFgwPVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvdmFsdWUtdHlwZXMvYXhlcy5qc1xuICoqIG1vZHVsZSBpZCA9IDI0XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbnZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfdXRpbHMgPSByZXF1aXJlKCcuLi9pbmMvdXRpbHMnKTtcblxudmFyIF9yZ2IgPSByZXF1aXJlKCcuL3JnYicpO1xuXG52YXIgX3JnYjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZ2IpO1xuXG52YXIgX2hzbCA9IHJlcXVpcmUoJy4vaHNsJyk7XG5cbnZhciBfaHNsMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2hzbCk7XG5cbnZhciBfaGV4ID0gcmVxdWlyZSgnLi9oZXgnKTtcblxudmFyIF9oZXgyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfaGV4KTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxudmFyIGNvbG9yVHlwZXMgPSBbX3JnYjIuZGVmYXVsdCwgX2hzbDIuZGVmYXVsdCwgX2hleDIuZGVmYXVsdF07XG52YXIgbnVtQ29sb3JUeXBlcyA9IGNvbG9yVHlwZXMubGVuZ3RoO1xuXG5leHBvcnRzLmRlZmF1bHQgPSB7XG4gICAgZGVmYXVsdFByb3BzOiBfZXh0ZW5kcyh7fSwgX3JnYjIuZGVmYXVsdC5kZWZhdWx0UHJvcHMsIF9oc2wyLmRlZmF1bHQuZGVmYXVsdFByb3BzKSxcblxuICAgIHRlc3Q6IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICByZXR1cm4gX3JnYjIuZGVmYXVsdC50ZXN0KHZhbHVlKSB8fCBfaGV4Mi5kZWZhdWx0LnRlc3QodmFsdWUpIHx8IF9oc2wyLmRlZmF1bHQudGVzdCh2YWx1ZSk7XG4gICAgfSxcblxuICAgIHNwbGl0OiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBudW1Db2xvclR5cGVzOyBpKyspIHtcbiAgICAgICAgICAgIGlmIChjb2xvclR5cGVzW2ldLnRlc3QodmFsdWUpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGNvbG9yVHlwZXNbaV0uc3BsaXQodmFsdWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSxcblxuICAgIGNvbWJpbmU6IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICByZXR1cm4gdmFsdWVzLlJlZCAhPT0gdW5kZWZpbmVkID8gX3JnYjIuZGVmYXVsdC5jb21iaW5lKHZhbHVlcykgOiBfaHNsMi5kZWZhdWx0LmNvbWJpbmUodmFsdWVzKTtcbiAgICB9XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkltTnZiRzl5TG1weklsMHNJbTVoYldWeklqcGJYU3dpYldGd2NHbHVaM01pT2lJN096czdPenM3T3pzN096czdPenM3T3pzN096czdRVUZMUVN4SlFVRk5MRlZCUVZVc1IwRkJSeXcyUTBGQlpTeERRVUZETzBGQlEyNURMRWxCUVUwc1lVRkJZU3hIUVVGSExGVkJRVlVzUTBGQlF5eE5RVUZOTEVOQlFVTTdPMnRDUVVWNlFqdEJRVU5ZTEdkQ1FVRlpMR1ZCUVU4c1kwRkJTU3haUVVGWkxFVkJRVXNzWTBGQlNTeFpRVUZaTEVOQlFVVTdPMEZCUlRGRUxGRkJRVWtzUlVGQlJTeFZRVUZETEV0QlFVczdaVUZCU3l4alFVRkpMRWxCUVVrc1EwRkJReXhMUVVGTExFTkJRVU1zU1VGQlNTeGpRVUZKTEVsQlFVa3NRMEZCUXl4TFFVRkxMRU5CUVVNc1NVRkJTU3hqUVVGSkxFbEJRVWtzUTBGQlF5eExRVUZMTEVOQlFVTTdTMEZCUVRzN1FVRkZkRVVzVTBGQlN5eEZRVUZGTEZWQlFVTXNTMEZCU3l4RlFVRkxPMEZCUTJRc1lVRkJTeXhKUVVGSkxFTkJRVU1zUjBGQlJ5eERRVUZETEVWQlFVVXNRMEZCUXl4SFFVRkhMR0ZCUVdFc1JVRkJSU3hEUVVGRExFVkJRVVVzUlVGQlJUdEJRVU53UXl4blFrRkJTU3hWUVVGVkxFTkJRVU1zUTBGQlF5eERRVUZETEVOQlFVTXNTVUZCU1N4RFFVRkRMRXRCUVVzc1EwRkJReXhGUVVGRk8wRkJRek5DTEhWQ1FVRlBMRlZCUVZVc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF5eExRVUZMTEVOQlFVTXNTMEZCU3l4RFFVRkRMRU5CUVVNN1lVRkRja003VTBGRFNqdExRVU5LT3p0QlFVVkVMRmRCUVU4c1JVRkJSU3hWUVVGRExFdEJRVXM3WlVGQlN5eEJRVUZETEUxQlFVMHNRMEZCUXl4SFFVRkhMRXRCUVVzc1UwRkJVeXhIUVVGSkxHTkJRVWtzVDBGQlR5eERRVUZETEUxQlFVMHNRMEZCUXl4SFFVRkhMR05CUVVrc1QwRkJUeXhEUVVGRExFMUJRVTBzUTBGQlF6dExRVUZCTzBOQlF6ZEdJaXdpWm1sc1pTSTZJbU52Ykc5eUxtcHpJaXdpYzI5MWNtTmxjME52Ym5SbGJuUWlPbHNpYVcxd2IzSjBJSHNnWldGamFDQjlJR1p5YjIwZ0p5NHVMMmx1WXk5MWRHbHNjeWM3WEc1cGJYQnZjblFnY21kaUlHWnliMjBnSnk0dmNtZGlKenRjYm1sdGNHOXlkQ0JvYzJ3Z1puSnZiU0FuTGk5b2Myd25PMXh1YVcxd2IzSjBJR2hsZUNCbWNtOXRJQ2N1TDJobGVDYzdYRzVjYm1OdmJuTjBJR052Ykc5eVZIbHdaWE1nUFNCYmNtZGlMQ0JvYzJ3c0lHaGxlRjA3WEc1amIyNXpkQ0J1ZFcxRGIyeHZjbFI1Y0dWeklEMGdZMjlzYjNKVWVYQmxjeTVzWlc1bmRHZzdYRzVjYm1WNGNHOXlkQ0JrWldaaGRXeDBJSHRjYmlBZ0lDQmtaV1poZFd4MFVISnZjSE02SUhzZ0xpNHVjbWRpTG1SbFptRjFiSFJRY205d2N5d2dMaTR1YUhOc0xtUmxabUYxYkhSUWNtOXdjeUI5TEZ4dVhHNGdJQ0FnZEdWemREb2dLSFpoYkhWbEtTQTlQaUJ5WjJJdWRHVnpkQ2gyWVd4MVpTa2dmSHdnYUdWNExuUmxjM1FvZG1Gc2RXVXBJSHg4SUdoemJDNTBaWE4wS0haaGJIVmxLU3hjYmx4dUlDQWdJSE53YkdsME9pQW9kbUZzZFdVcElEMCtJSHRjYmlBZ0lDQWdJQ0FnWm05eUlDaHNaWFFnYVNBOUlEQTdJR2tnUENCdWRXMURiMnh2Y2xSNWNHVnpPeUJwS3lzcElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUdsbUlDaGpiMnh2Y2xSNWNHVnpXMmxkTG5SbGMzUW9kbUZzZFdVcEtTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdjbVYwZFhKdUlHTnZiRzl5Vkhsd1pYTmJhVjB1YzNCc2FYUW9kbUZzZFdVcE8xeHVJQ0FnSUNBZ0lDQWdJQ0FnZlZ4dUlDQWdJQ0FnSUNCOVhHNGdJQ0FnZlN4Y2JseHVJQ0FnSUdOdmJXSnBibVU2SUNoMllXeDFaU2tnUFQ0Z0tIWmhiSFZsY3k1U1pXUWdJVDA5SUhWdVpHVm1hVzVsWkNrZ1B5QnlaMkl1WTI5dFltbHVaU2gyWVd4MVpYTXBJRG9nYUhOc0xtTnZiV0pwYm1Vb2RtRnNkV1Z6S1Z4dWZUdGNiaUpkZlE9PVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvdmFsdWUtdHlwZXMvY29sb3IuanNcbiAqKiBtb2R1bGUgaWQgPSAyNVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX3V0aWxzID0gcmVxdWlyZSgnLi4vaW5jL3V0aWxzJyk7XG5cbnZhciBGTE9BVF9SRUdFWCA9IC8oLSk/KFxcZFtcXGRcXC5dKikvZztcbnZhciBnZW5lcmF0ZVRva2VuID0gZnVuY3Rpb24gKHRva2VuKSB7XG4gICAgcmV0dXJuICckeycgKyB0b2tlbiArICd9Jztcbn07XG5cbmV4cG9ydHMuZGVmYXVsdCA9IHtcblxuICAgIHRlc3Q6IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICB2YXIgbWF0Y2hlcyA9IHZhbHVlLm1hdGNoKEZMT0FUX1JFR0VYKTtcbiAgICAgICAgcmV0dXJuICgwLCBfdXRpbHMuaXNBcnJheSkobWF0Y2hlcykgJiYgbWF0Y2hlcy5sZW5ndGggPiAxO1xuICAgIH0sXG5cbiAgICB0ZW1wbGF0ZTogZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgIHZhciBjb3VudGVyID0gMDtcbiAgICAgICAgcmV0dXJuIHZhbHVlLnJlcGxhY2UoRkxPQVRfUkVHRVgsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiBnZW5lcmF0ZVRva2VuKGNvdW50ZXIrKyk7XG4gICAgICAgIH0pO1xuICAgIH0sXG5cbiAgICBzcGxpdDogZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgIHZhciBzcGxpdFZhbHVlID0ge307XG5cbiAgICAgICAgdmFsdWUubWF0Y2goRkxPQVRfUkVHRVgpLmZvckVhY2goZnVuY3Rpb24gKHZhbHVlLCBpKSB7XG4gICAgICAgICAgICByZXR1cm4gc3BsaXRWYWx1ZVtpXSA9IHZhbHVlO1xuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gc3BsaXRWYWx1ZTtcbiAgICB9LFxuXG4gICAgY29tYmluZTogZnVuY3Rpb24gKHZhbHVlcywgdGVtcGxhdGUpIHtcbiAgICAgICAgKDAsIF91dGlscy5lYWNoKSh2YWx1ZXMsIGZ1bmN0aW9uICh2YWx1ZSwga2V5KSB7XG4gICAgICAgICAgICByZXR1cm4gdGVtcGxhdGUgPSB0ZW1wbGF0ZS5yZXBsYWNlKGdlbmVyYXRlVG9rZW4oa2V5KSwgdmFsdWUpO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHRlbXBsYXRlO1xuICAgIH1cblxufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbU52YlhCc1pYZ3Vhbk1pWFN3aWJtRnRaWE1pT2x0ZExDSnRZWEJ3YVc1bmN5STZJanM3T3pzN08wRkJSVUVzU1VGQlRTeFhRVUZYTEVkQlFVY3NhMEpCUVd0Q0xFTkJRVU03UVVGRGRrTXNTVUZCVFN4aFFVRmhMRWRCUVVjc1ZVRkJReXhMUVVGTE8xZEJRVXNzU1VGQlNTeEhRVUZITEV0QlFVc3NSMEZCUnl4SFFVRkhPME5CUVVFc1EwRkJRenM3YTBKQlJYSkRPenRCUVVWWUxGRkJRVWtzUlVGQlJTeFZRVUZETEV0QlFVc3NSVUZCU3p0QlFVTmlMRmxCUVUwc1QwRkJUeXhIUVVGSExFdEJRVXNzUTBGQlF5eExRVUZMTEVOQlFVTXNWMEZCVnl4RFFVRkRMRU5CUVVNN1FVRkRla01zWlVGQlVTeFhRVlJFTEU5QlFVOHNSVUZUUlN4UFFVRlBMRU5CUVVNc1NVRkJTU3hQUVVGUExFTkJRVU1zVFVGQlRTeEhRVUZITEVOQlFVTXNRMEZCUlR0TFFVTnVSRHM3UVVGRlJDeFpRVUZSTEVWQlFVVXNWVUZCUXl4TFFVRkxMRVZCUVVzN1FVRkRha0lzV1VGQlNTeFBRVUZQTEVkQlFVY3NRMEZCUXl4RFFVRkRPMEZCUTJoQ0xHVkJRVThzUzBGQlN5eERRVUZETEU5QlFVOHNRMEZCUXl4WFFVRlhMRVZCUVVVN2JVSkJRVTBzWVVGQllTeERRVUZETEU5QlFVOHNSVUZCUlN4RFFVRkRPMU5CUVVFc1EwRkJReXhEUVVGRE8wdEJRM0pGT3p0QlFVVkVMRk5CUVVzc1JVRkJSU3hWUVVGRExFdEJRVXNzUlVGQlN6dEJRVU5rTEZsQlFVMHNWVUZCVlN4SFFVRkhMRVZCUVVVc1EwRkJRenM3UVVGRmRFSXNZVUZCU3l4RFFVRkRMRXRCUVVzc1EwRkJReXhYUVVGWExFTkJRVU1zUTBGQlF5eFBRVUZQTEVOQlFVTXNWVUZCUXl4TFFVRkxMRVZCUVVVc1EwRkJRenR0UWtGQlN5eFZRVUZWTEVOQlFVTXNRMEZCUXl4RFFVRkRMRWRCUVVjc1MwRkJTenRUUVVGQkxFTkJRVU1zUTBGQlF6czdRVUZGZEVVc1pVRkJUeXhWUVVGVkxFTkJRVU03UzBGRGNrSTdPMEZCUlVRc1YwRkJUeXhGUVVGRkxGVkJRVU1zVFVGQlRTeEZRVUZGTEZGQlFWRXNSVUZCU3p0QlFVTXpRaXh0UWtFeFFrTXNTVUZCU1N4RlFUQkNRU3hOUVVGTkxFVkJRVVVzVlVGQlF5eExRVUZMTEVWQlFVVXNSMEZCUnp0dFFrRkJTeXhSUVVGUkxFZEJRVWNzVVVGQlVTeERRVUZETEU5QlFVOHNRMEZCUXl4aFFVRmhMRU5CUVVNc1IwRkJSeXhEUVVGRExFVkJRVVVzUzBGQlN5eERRVUZETzFOQlFVRXNRMEZCUXl4RFFVRkRPMEZCUTNKR0xHVkJRVThzVVVGQlVTeERRVUZETzB0QlEyNUNPenREUVVWS0lpd2labWxzWlNJNkltTnZiWEJzWlhndWFuTWlMQ0p6YjNWeVkyVnpRMjl1ZEdWdWRDSTZXeUpwYlhCdmNuUWdleUJsWVdOb0xDQnBjMEZ5Y21GNUlIMGdabkp2YlNCY0lpNHVMMmx1WXk5MWRHbHNjMXdpTzF4dVhHNWpiMjV6ZENCR1RFOUJWRjlTUlVkRldDQTlJQzhvTFNrL0tGeGNaRnRjWEdSY1hDNWRLaWt2Wnp0Y2JtTnZibk4wSUdkbGJtVnlZWFJsVkc5clpXNGdQU0FvZEc5clpXNHBJRDArSUNja2V5Y2dLeUIwYjJ0bGJpQXJJQ2Q5Snp0Y2JseHVaWGh3YjNKMElHUmxabUYxYkhRZ2UxeHVYRzRnSUNBZ2RHVnpkRG9nS0haaGJIVmxLU0E5UGlCN1hHNGdJQ0FnSUNBZ0lHTnZibk4wSUcxaGRHTm9aWE1nUFNCMllXeDFaUzV0WVhSamFDaEdURTlCVkY5U1JVZEZXQ2s3WEc0Z0lDQWdJQ0FnSUhKbGRIVnliaUFvYVhOQmNuSmhlU2h0WVhSamFHVnpLU0FtSmlCdFlYUmphR1Z6TG14bGJtZDBhQ0ErSURFcE8xeHVJQ0FnSUgwc1hHNWNiaUFnSUNCMFpXMXdiR0YwWlRvZ0tIWmhiSFZsS1NBOVBpQjdYRzRnSUNBZ0lDQWdJR3hsZENCamIzVnVkR1Z5SUQwZ01EdGNiaUFnSUNBZ0lDQWdjbVYwZFhKdUlIWmhiSFZsTG5KbGNHeGhZMlVvUmt4UFFWUmZVa1ZIUlZnc0lDZ3BJRDArSUdkbGJtVnlZWFJsVkc5clpXNG9ZMjkxYm5SbGNpc3JLU2s3WEc0Z0lDQWdmU3hjYmx4dUlDQWdJSE53YkdsME9pQW9kbUZzZFdVcElEMCtJSHRjYmlBZ0lDQWdJQ0FnWTI5dWMzUWdjM0JzYVhSV1lXeDFaU0E5SUh0OU8xeHVJQ0FnSUNBZ0lDQmNiaUFnSUNBZ0lDQWdkbUZzZFdVdWJXRjBZMmdvUmt4UFFWUmZVa1ZIUlZncExtWnZja1ZoWTJnb0tIWmhiSFZsTENCcEtTQTlQaUJ6Y0d4cGRGWmhiSFZsVzJsZElEMGdkbUZzZFdVcE8xeHVYRzRnSUNBZ0lDQWdJSEpsZEhWeWJpQnpjR3hwZEZaaGJIVmxPMXh1SUNBZ0lIMHNYRzVjYmlBZ0lDQmpiMjFpYVc1bE9pQW9kbUZzZFdWekxDQjBaVzF3YkdGMFpTa2dQVDRnZTF4dUlDQWdJQ0FnSUNCbFlXTm9LSFpoYkhWbGN5d2dLSFpoYkhWbExDQnJaWGtwSUQwK0lIUmxiWEJzWVhSbElEMGdkR1Z0Y0d4aGRHVXVjbVZ3YkdGalpTaG5aVzVsY21GMFpWUnZhMlZ1S0d0bGVTa3NJSFpoYkhWbEtTazdYRzRnSUNBZ0lDQWdJSEpsZEhWeWJpQjBaVzF3YkdGMFpUdGNiaUFnSUNCOVhHNWNibjA3SWwxOVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvdmFsdWUtdHlwZXMvY29tcGxleC5qc1xuICoqIG1vZHVsZSBpZCA9IDI2XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfcmdiID0gcmVxdWlyZSgnLi9yZ2InKTtcblxudmFyIF9yZ2IyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmdiKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZXhwb3J0cy5kZWZhdWx0ID0ge1xuICAgIGRlZmF1bHRQcm9wczogX3JnYjIuZGVmYXVsdC5kZWZhdWx0UHJvcHMsXG5cbiAgICB0ZXN0OiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIHZhbHVlICYmIHZhbHVlLmluZGV4T2YoJyMnKSA+IC0xO1xuICAgIH0sXG5cbiAgICBzcGxpdDogZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgIHZhciByID0gdW5kZWZpbmVkLFxuICAgICAgICAgICAgZyA9IHVuZGVmaW5lZCxcbiAgICAgICAgICAgIGIgPSB1bmRlZmluZWQ7XG5cbiAgICAgICAgLy8gSWYgd2UgaGF2ZSA2IGNoYXJhY3RlcnMsIGllICNGRjAwMDBcbiAgICAgICAgaWYgKHZhbHVlLmxlbmd0aCA+IDQpIHtcbiAgICAgICAgICAgIHIgPSB2YWx1ZS5zdWJzdHIoMSwgMik7XG4gICAgICAgICAgICBnID0gdmFsdWUuc3Vic3RyKDMsIDIpO1xuICAgICAgICAgICAgYiA9IHZhbHVlLnN1YnN0cig1LCAyKTtcblxuICAgICAgICAgICAgLy8gT3Igd2UgaGF2ZSAzIGNoYXJhY3RlcnMsIGllICNGMDBcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByID0gdmFsdWUuc3Vic3RyKDEsIDEpO1xuICAgICAgICAgICAgICAgIGcgPSB2YWx1ZS5zdWJzdHIoMiwgMSk7XG4gICAgICAgICAgICAgICAgYiA9IHZhbHVlLnN1YnN0cigzLCAxKTtcbiAgICAgICAgICAgICAgICByICs9IHI7XG4gICAgICAgICAgICAgICAgZyArPSBnO1xuICAgICAgICAgICAgICAgIGIgKz0gYjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgUmVkOiBwYXJzZUludChyLCAxNiksXG4gICAgICAgICAgICBHcmVlbjogcGFyc2VJbnQoZywgMTYpLFxuICAgICAgICAgICAgQmx1ZTogcGFyc2VJbnQoYiwgMTYpLFxuICAgICAgICAgICAgQWxwaGE6IDFcbiAgICAgICAgfTtcbiAgICB9LFxuXG4gICAgY29tYmluZTogZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgIHJldHVybiBfcmdiMi5kZWZhdWx0LmNvbWJpbmUodmFsdWVzKTtcbiAgICB9XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkltaGxlQzVxY3lKZExDSnVZVzFsY3lJNlcxMHNJbTFoY0hCcGJtZHpJam9pT3pzN096czdPenM3TzJ0Q1FVVmxPMEZCUTFnc1owSkJRVmtzUlVGQlJTeGpRVUZKTEZsQlFWazdPMEZCUlRsQ0xGRkJRVWtzUlVGQlJTeFZRVUZETEV0QlFVczdaVUZCVFN4TFFVRkxMRWxCUVVrc1MwRkJTeXhEUVVGRExFOUJRVThzUTBGQlF5eEhRVUZITEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNN1MwRkJRenM3UVVGRmJrUXNVMEZCU3l4RlFVRkZMRlZCUVVNc1MwRkJTeXhGUVVGTE8wRkJRMlFzV1VGQlNTeERRVUZETEZsQlFVRTdXVUZCUlN4RFFVRkRMRmxCUVVFN1dVRkJSU3hEUVVGRExGbEJRVUU3T3p0QlFVRkRMRUZCUjFvc1dVRkJTU3hMUVVGTExFTkJRVU1zVFVGQlRTeEhRVUZITEVOQlFVTXNSVUZCUlR0QlFVTnNRaXhoUVVGRExFZEJRVWNzUzBGQlN5eERRVUZETEUxQlFVMHNRMEZCUXl4RFFVRkRMRVZCUVVVc1EwRkJReXhEUVVGRExFTkJRVU03UVVGRGRrSXNZVUZCUXl4SFFVRkhMRXRCUVVzc1EwRkJReXhOUVVGTkxFTkJRVU1zUTBGQlF5eEZRVUZGTEVOQlFVTXNRMEZCUXl4RFFVRkRPMEZCUTNaQ0xHRkJRVU1zUjBGQlJ5eExRVUZMTEVOQlFVTXNUVUZCVFN4RFFVRkRMRU5CUVVNc1JVRkJSU3hEUVVGRExFTkJRVU03T3p0QlFVRkRMRk5CUnpGQ0xFMUJRVTA3UVVGRFNDeHBRa0ZCUXl4SFFVRkhMRXRCUVVzc1EwRkJReXhOUVVGTkxFTkJRVU1zUTBGQlF5eEZRVUZGTEVOQlFVTXNRMEZCUXl4RFFVRkRPMEZCUTNaQ0xHbENRVUZETEVkQlFVY3NTMEZCU3l4RFFVRkRMRTFCUVUwc1EwRkJReXhEUVVGRExFVkJRVVVzUTBGQlF5eERRVUZETEVOQlFVTTdRVUZEZGtJc2FVSkJRVU1zUjBGQlJ5eExRVUZMTEVOQlFVTXNUVUZCVFN4RFFVRkRMRU5CUVVNc1JVRkJSU3hEUVVGRExFTkJRVU1zUTBGQlF6dEJRVU4yUWl4cFFrRkJReXhKUVVGSkxFTkJRVU1zUTBGQlF6dEJRVU5RTEdsQ1FVRkRMRWxCUVVrc1EwRkJReXhEUVVGRE8wRkJRMUFzYVVKQlFVTXNTVUZCU1N4RFFVRkRMRU5CUVVNN1lVRkRWanM3UVVGRlJDeGxRVUZQTzBGQlEwZ3NaVUZCUnl4RlFVRkZMRkZCUVZFc1EwRkJReXhEUVVGRExFVkJRVVVzUlVGQlJTeERRVUZETzBGQlEzQkNMR2xDUVVGTExFVkJRVVVzVVVGQlVTeERRVUZETEVOQlFVTXNSVUZCUlN4RlFVRkZMRU5CUVVNN1FVRkRkRUlzWjBKQlFVa3NSVUZCUlN4UlFVRlJMRU5CUVVNc1EwRkJReXhGUVVGRkxFVkJRVVVzUTBGQlF6dEJRVU55UWl4cFFrRkJTeXhGUVVGRkxFTkJRVU03VTBGRFdDeERRVUZETzB0QlEwdzdPMEZCUlVRc1YwRkJUeXhGUVVGRkxGVkJRVU1zUzBGQlN6dGxRVUZMTEdOQlFVa3NUMEZCVHl4RFFVRkRMRTFCUVUwc1EwRkJRenRMUVVGQk8wTkJRekZESWl3aVptbHNaU0k2SW1obGVDNXFjeUlzSW5OdmRYSmpaWE5EYjI1MFpXNTBJanBiSW1sdGNHOXlkQ0J5WjJJZ1puSnZiU0FuTGk5eVoySW5PMXh1WEc1bGVIQnZjblFnWkdWbVlYVnNkQ0I3WEc0Z0lDQWdaR1ZtWVhWc2RGQnliM0J6T2lCeVoySXVaR1ZtWVhWc2RGQnliM0J6TEZ4dVhHNGdJQ0FnZEdWemREb2dLSFpoYkhWbEtTQTlQaUFvZG1Gc2RXVWdKaVlnZG1Gc2RXVXVhVzVrWlhoUFppZ25JeWNwSUQ0Z0xURXBMRnh1WEc0Z0lDQWdjM0JzYVhRNklDaDJZV3gxWlNrZ1BUNGdlMXh1SUNBZ0lDQWdJQ0JzWlhRZ2Npd2daeXdnWWp0Y2JseHVJQ0FnSUNBZ0lDQXZMeUJKWmlCM1pTQm9ZWFpsSURZZ1kyaGhjbUZqZEdWeWN5d2dhV1VnSTBaR01EQXdNRnh1SUNBZ0lDQWdJQ0JwWmlBb2RtRnNkV1V1YkdWdVozUm9JRDRnTkNrZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnY2lBOUlIWmhiSFZsTG5OMVluTjBjaWd4TENBeUtUdGNiaUFnSUNBZ0lDQWdJQ0FnSUdjZ1BTQjJZV3gxWlM1emRXSnpkSElvTXl3Z01pazdYRzRnSUNBZ0lDQWdJQ0FnSUNCaUlEMGdkbUZzZFdVdWMzVmljM1J5S0RVc0lESXBPMXh1WEc0Z0lDQWdJQ0FnSUM4dklFOXlJSGRsSUdoaGRtVWdNeUJqYUdGeVlXTjBaWEp6TENCcFpTQWpSakF3WEc0Z0lDQWdJQ0FnSUgwZ1pXeHpaU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQnlJRDBnZG1Gc2RXVXVjM1ZpYzNSeUtERXNJREVwTzF4dUlDQWdJQ0FnSUNBZ0lDQWdaeUE5SUhaaGJIVmxMbk4xWW5OMGNpZ3lMQ0F4S1R0Y2JpQWdJQ0FnSUNBZ0lDQWdJR0lnUFNCMllXeDFaUzV6ZFdKemRISW9NeXdnTVNrN1hHNGdJQ0FnSUNBZ0lDQWdJQ0J5SUNzOUlISTdYRzRnSUNBZ0lDQWdJQ0FnSUNCbklDczlJR2M3WEc0Z0lDQWdJQ0FnSUNBZ0lDQmlJQ3M5SUdJN1hHNGdJQ0FnSUNBZ0lIMWNibHh1SUNBZ0lDQWdJQ0J5WlhSMWNtNGdlMXh1SUNBZ0lDQWdJQ0FnSUNBZ1VtVmtPaUJ3WVhKelpVbHVkQ2h5TENBeE5pa3NYRzRnSUNBZ0lDQWdJQ0FnSUNCSGNtVmxiam9nY0dGeWMyVkpiblFvWnl3Z01UWXBMRnh1SUNBZ0lDQWdJQ0FnSUNBZ1FteDFaVG9nY0dGeWMyVkpiblFvWWl3Z01UWXBMRnh1SUNBZ0lDQWdJQ0FnSUNBZ1FXeHdhR0U2SURGY2JpQWdJQ0FnSUNBZ2ZUdGNiaUFnSUNCOUxGeHVYRzRnSUNBZ1kyOXRZbWx1WlRvZ0tIWmhiSFZsS1NBOVBpQnlaMkl1WTI5dFltbHVaU2gyWVd4MVpYTXBYRzU5T3lKZGZRPT1cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL3ZhbHVlLXR5cGVzL2hleC5qc1xuICoqIG1vZHVsZSBpZCA9IDI3XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfZGVmYXVsdFByb3BzID0gcmVxdWlyZSgnLi9zZXR0aW5ncy9kZWZhdWx0LXByb3BzJyk7XG5cbnZhciBfZGljdGlvbmFyeSA9IHJlcXVpcmUoJy4vc2V0dGluZ3MvZGljdGlvbmFyeScpO1xuXG52YXIgX3V0aWxzID0gcmVxdWlyZSgnLi4vaW5jL3V0aWxzJyk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IHtcbiAgICBkZWZhdWx0UHJvcHM6IHtcbiAgICAgICAgSHVlOiB7XG4gICAgICAgICAgICBtaW46IDAsXG4gICAgICAgICAgICBtYXg6IDM2MFxuICAgICAgICB9LFxuICAgICAgICBTYXR1cmF0aW9uOiBfZGVmYXVsdFByb3BzLnBlcmNlbnQsXG4gICAgICAgIExpZ2h0bmVzczogX2RlZmF1bHRQcm9wcy5wZXJjZW50LFxuICAgICAgICBBbHBoYTogX2RlZmF1bHRQcm9wcy5vcGFjaXR5XG4gICAgfSxcblxuICAgIHRlc3Q6IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICByZXR1cm4gdmFsdWUgJiYgdmFsdWUuaW5kZXhPZignaHNsJykgPiAtMTtcbiAgICB9LFxuXG4gICAgc3BsaXQ6IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICByZXR1cm4gKDAsIF91dGlscy5nZXRDb2xvclZhbHVlcykodmFsdWUsIF9kaWN0aW9uYXJ5LmhzbCk7XG4gICAgfSxcblxuICAgIGNvbWJpbmU6IGZ1bmN0aW9uICh2YWx1ZXMpIHtcbiAgICAgICAgcmV0dXJuICgwLCBfdXRpbHMuY3JlYXRlRnVuY3Rpb25TdHJpbmcpKCgwLCBfdXRpbHMuY3JlYXRlRGVsaW1pdGVkKSh2YWx1ZXMsIF9kaWN0aW9uYXJ5LmhzbCwgJywgJywgMiksICdoc2xhJyk7XG4gICAgfVxufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbWh6YkM1cWN5SmRMQ0p1WVcxbGN5STZXMTBzSW0xaGNIQnBibWR6SWpvaU96czdPenM3T3pzN08ydENRVWxsTzBGQlExZ3NaMEpCUVZrc1JVRkJSVHRCUVVOV0xGZEJRVWNzUlVGQlJUdEJRVU5FTEdWQlFVY3NSVUZCUlN4RFFVRkRPMEZCUTA0c1pVRkJSeXhGUVVGRkxFZEJRVWM3VTBGRFdEdEJRVU5FTEd0Q1FVRlZMR2RDUVZaVUxFOUJRVThzUVVGVlZ6dEJRVU51UWl4cFFrRkJVeXhuUWtGWVVpeFBRVUZQTEVGQlYxVTdRVUZEYkVJc1lVRkJTeXhuUWtGYVN5eFBRVUZQTEVGQldVZzdTMEZEYWtJN08wRkJSVVFzVVVGQlNTeEZRVUZGTEZWQlFVTXNTMEZCU3p0bFFVRk5MRXRCUVVzc1NVRkJTU3hMUVVGTExFTkJRVU1zVDBGQlR5eERRVUZETEV0QlFVc3NRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJRenRMUVVGRE96dEJRVVZ5UkN4VFFVRkxMRVZCUVVVc1ZVRkJReXhMUVVGTE8yVkJRVXNzVjBGbU1FSXNZMEZCWXl4RlFXVjZRaXhMUVVGTExHTkJhRUpxUXl4SFFVRkhMRU5CWjBKNVF6dExRVUZCT3p0QlFVVnFSQ3hYUVVGUExFVkJRVVVzVlVGQlF5eE5RVUZOTzJWQlFVc3NWMEZxUWtNc2IwSkJRVzlDTEVWQmFVSkJMRmRCYWtKeVF5eGxRVUZsTEVWQmFVSnpReXhOUVVGTkxHTkJiRUl6UkN4SFFVRkhMRVZCYTBKdlJTeEpRVUZKTEVWQlFVVXNRMEZCUXl4RFFVRkRMRVZCUVVVc1RVRkJUU3hEUVVGRE8wdEJRVUU3UTBGRGFFY2lMQ0ptYVd4bElqb2lhSE5zTG1weklpd2ljMjkxY21ObGMwTnZiblJsYm5RaU9sc2lhVzF3YjNKMElIc2djR1Z5WTJWdWRDd2diM0JoWTJsMGVTQjlJR1p5YjIwZ0p5NHZjMlYwZEdsdVozTXZaR1ZtWVhWc2RDMXdjbTl3Y3ljN1hHNXBiWEJ2Y25RZ2V5Qm9jMndnWVhNZ2FITnNWR1Z5YlhNZ2ZTQm1jbTl0SUNjdUwzTmxkSFJwYm1kekwyUnBZM1JwYjI1aGNua25PMXh1YVcxd2IzSjBJSHNnWTNKbFlYUmxSR1ZzYVcxcGRHVmtMQ0JqY21WaGRHVkdkVzVqZEdsdmJsTjBjbWx1Wnl3Z1oyVjBRMjlzYjNKV1lXeDFaWE1nZlNCbWNtOXRJQ2N1TGk5cGJtTXZkWFJwYkhNbk8xeHVYRzVsZUhCdmNuUWdaR1ZtWVhWc2RDQjdYRzRnSUNBZ1pHVm1ZWFZzZEZCeWIzQnpPaUI3WEc0Z0lDQWdJQ0FnSUVoMVpUb2dlMXh1SUNBZ0lDQWdJQ0FnSUNBZ2JXbHVPaUF3TEZ4dUlDQWdJQ0FnSUNBZ0lDQWdiV0Y0T2lBek5qQmNiaUFnSUNBZ0lDQWdmU3hjYmlBZ0lDQWdJQ0FnVTJGMGRYSmhkR2x2YmpvZ2NHVnlZMlZ1ZEN4Y2JpQWdJQ0FnSUNBZ1RHbG5hSFJ1WlhOek9pQndaWEpqWlc1MExGeHVJQ0FnSUNBZ0lDQkJiSEJvWVRvZ2IzQmhZMmwwZVZ4dUlDQWdJSDBzWEc1Y2JpQWdJQ0IwWlhOME9pQW9kbUZzZFdVcElEMCtJQ2gyWVd4MVpTQW1KaUIyWVd4MVpTNXBibVJsZUU5bUtDZG9jMnduS1NBK0lDMHhLU3hjYmx4dUlDQWdJSE53YkdsME9pQW9kbUZzZFdVcElEMCtJR2RsZEVOdmJHOXlWbUZzZFdWektIWmhiSFZsTENCb2MyeFVaWEp0Y3lrc1hHNWNiaUFnSUNCamIyMWlhVzVsT2lBb2RtRnNkV1Z6S1NBOVBpQmpjbVZoZEdWR2RXNWpkR2x2YmxOMGNtbHVaeWhqY21WaGRHVkVaV3hwYldsMFpXUW9kbUZzZFdWekxDQm9jMnhVWlhKdGN5d2dKeXdnSnl3Z01pa3NJQ2RvYzJ4aEp5bGNibjA3WEc0aVhYMD1cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL3ZhbHVlLXR5cGVzL2hzbC5qc1xuICoqIG1vZHVsZSBpZCA9IDI4XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfZGljdGlvbmFyeSA9IHJlcXVpcmUoJy4vc2V0dGluZ3MvZGljdGlvbmFyeScpO1xuXG52YXIgX3V0aWxzID0gcmVxdWlyZSgnLi4vaW5jL3V0aWxzJyk7XG5cbnZhciBfcHggPSByZXF1aXJlKCcuL3B4Jyk7XG5cbnZhciBfcHgyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcHgpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5leHBvcnRzLmRlZmF1bHQgPSB7XG4gICAgZGVmYXVsdFByb3BzOiBfcHgyLmRlZmF1bHQuZGVmYXVsdFByb3BzLFxuXG4gICAgLypcbiAgICAgICAgU3BsaXQgZGltZW5zaW9ucyBpbiBmb3JtYXQgXCJUb3AgUmlnaHQgQm90dG9tIExlZnRcIlxuICAgICAgICBcbiAgICAgICAgQHBhcmFtIFtzdHJpbmddOiBEaW1lbnNpb24gdmFsdWVzXG4gICAgICAgICAgICBcIjIwcHggMCAzMHB4IDQwcHhcIiAtPiB7MjBweCwgMCwgMzBweCwgNDBweH1cbiAgICAgICAgICAgIFwiMjBweCAwIDMwcHhcIiAtPiB7MjBweCwgMCwgMzBweCwgMH1cbiAgICAgICAgICAgIFwiMjBweCAwXCIgLT4gezIwcHgsIDAsIDIwcHgsIDB9XG4gICAgICAgICAgICBcIjIwcHhcIiAtPiB7MjBweCwgMjBweCwgMjBweCwgMjBweH1cbiAgICAgICAgXG4gICAgICAgIEByZXR1cm4gW29iamVjdF06IE9iamVjdCB3aXRoIFQvUi9CL0wgbWV0cmljc1xuICAgICovXG4gICAgc3BsaXQ6IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICB2YXIgc3BsaXRWYWx1ZSA9IHt9O1xuICAgICAgICB2YXIgc3BsaXRQb3NpdGlvbnMgPSAoMCwgX3V0aWxzLnNwbGl0U3BhY2VEZWxpbWl0ZWQpKHZhbHVlKTtcbiAgICAgICAgdmFyIG51bVBvc2l0aW9ucyA9IHNwbGl0UG9zaXRpb25zLmxlbmd0aDtcbiAgICAgICAgdmFyIGp1bXBCYWNrID0gbnVtRGltZW5zaW9ucyAhPT0gMSA/IDIgOiAxO1xuICAgICAgICB2YXIgaiA9IDA7XG5cbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCA0OyBpKyspIHtcbiAgICAgICAgICAgIHNwbGl0VmFsdWVbX2RpY3Rpb25hcnkucG9zaXRpb25zW2ldXSA9IHNwbGl0UG9zaXRpb25zW2pdO1xuXG4gICAgICAgICAgICAvLyBKdW1wIGJhY2sgKHRvIHN0YXJ0KSBjb3VudGVyIGlmIHdlJ3ZlIHJlYWNoZWQgdGhlIGVuZCBvZiBvdXIgdmFsdWVzXG4gICAgICAgICAgICBqKys7XG4gICAgICAgICAgICBqID0gaiA9PT0gbnVtRGltZW5zaW9ucyA/IGogLSBqdW1wQmFjayA6IGo7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gc3BsaXRWYWx1ZTtcbiAgICB9LFxuXG4gICAgY29tYmluZTogZnVuY3Rpb24gKHZhbHVlcykge1xuICAgICAgICByZXR1cm4gKDAsIF91dGlscy5jcmVhdGVEZWxpbWl0ZWQpKHZhbHVlcywgX2RpY3Rpb25hcnkucG9zaXRpb25zLCAnICcpO1xuICAgIH1cbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5CdmMybDBhVzl1Y3k1cWN5SmRMQ0p1WVcxbGN5STZXMTBzSW0xaGNIQnBibWR6SWpvaU96czdPenM3T3pzN096czdPenRyUWtGSlpUdEJRVU5ZTEdkQ1FVRlpMRVZCUVVVc1lVRkJXU3haUVVGWk96czdPenM3T3pzN096czdPMEZCWVhSRExGTkJRVXNzUlVGQlJTeFZRVUZETEV0QlFVc3NSVUZCU3p0QlFVTmtMRmxCUVUwc1ZVRkJWU3hIUVVGSExFVkJRVVVzUTBGQlF6dEJRVU4wUWl4WlFVRk5MR05CUVdNc1IwRkJSeXhYUVc1Q1RDeHRRa0ZCYlVJc1JVRnRRazBzUzBGQlN5eERRVUZETEVOQlFVTTdRVUZEYkVRc1dVRkJUU3haUVVGWkxFZEJRVWNzWTBGQll5eERRVUZETEUxQlFVMHNRMEZCUXp0QlFVTXpReXhaUVVGTkxGRkJRVkVzUjBGQlJ5eEJRVUZETEdGQlFXRXNTMEZCU3l4RFFVRkRMRWRCUVVrc1EwRkJReXhIUVVGSExFTkJRVU1zUTBGQlF6dEJRVU12UXl4WlFVRkpMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU03TzBGQlJWWXNZVUZCU3l4SlFVRkpMRU5CUVVNc1IwRkJSeXhEUVVGRExFVkJRVVVzUTBGQlF5eEhRVUZITEVOQlFVTXNSVUZCUlN4RFFVRkRMRVZCUVVVc1JVRkJSVHRCUVVONFFpeHpRa0ZCVlN4RFFVRkRMRmxCTVVKa0xGTkJRVk1zUTBFd1FtVXNRMEZCUXl4RFFVRkRMRU5CUVVNc1IwRkJSeXhqUVVGakxFTkJRVU1zUTBGQlF5eERRVUZET3pzN1FVRkJReXhCUVVjM1F5eGhRVUZETEVWQlFVVXNRMEZCUXp0QlFVTktMR0ZCUVVNc1IwRkJSeXhCUVVGRExFTkJRVU1zUzBGQlN5eGhRVUZoTEVkQlFVa3NRMEZCUXl4SFFVRkhMRkZCUVZFc1IwRkJSeXhEUVVGRExFTkJRVU03VTBGRGFFUTdPMEZCUlVRc1pVRkJUeXhWUVVGVkxFTkJRVU03UzBGRGNrSTdPMEZCUlVRc1YwRkJUeXhGUVVGRkxGVkJRVU1zVFVGQlRUdGxRVUZMTEZkQmJrTm9RaXhsUVVGbExFVkJiVU5wUWl4TlFVRk5MR05CY0VOMFF5eFRRVUZUTEVWQmIwTXdReXhIUVVGSExFTkJRVU03UzBGQlFUdERRVU12UkNJc0ltWnBiR1VpT2lKd2IzTnBkR2x2Ym5NdWFuTWlMQ0p6YjNWeVkyVnpRMjl1ZEdWdWRDSTZXeUpwYlhCdmNuUWdleUJ3YjNOcGRHbHZibk1nZlNCbWNtOXRJQ2N1TDNObGRIUnBibWR6TDJScFkzUnBiMjVoY25rbk8xeHVhVzF3YjNKMElIc2dZM0psWVhSbFJHVnNhVzFwZEdWa0xDQnpjR3hwZEZOd1lXTmxSR1ZzYVcxcGRHVmtJSDBnWm5KdmJTQW5MaTR2YVc1akwzVjBhV3h6Snp0Y2JtbHRjRzl5ZENCd2VGWmhiSFZsVkhsd1pTQm1jbTl0SUNjdUwzQjRKenRjYmx4dVpYaHdiM0owSUdSbFptRjFiSFFnZTF4dUlDQWdJR1JsWm1GMWJIUlFjbTl3Y3pvZ2NIaFdZV3gxWlZSNWNHVXVaR1ZtWVhWc2RGQnliM0J6TEZ4dVhHNGdJQ0FnTHlwY2JpQWdJQ0FnSUNBZ1UzQnNhWFFnWkdsdFpXNXphVzl1Y3lCcGJpQm1iM0p0WVhRZ1hDSlViM0FnVW1sbmFIUWdRbTkwZEc5dElFeGxablJjSWx4dUlDQWdJQ0FnSUNCY2JpQWdJQ0FnSUNBZ1FIQmhjbUZ0SUZ0emRISnBibWRkT2lCRWFXMWxibk5wYjI0Z2RtRnNkV1Z6WEc0Z0lDQWdJQ0FnSUNBZ0lDQmNJakl3Y0hnZ01DQXpNSEI0SURRd2NIaGNJaUF0UGlCN01qQndlQ3dnTUN3Z016QndlQ3dnTkRCd2VIMWNiaUFnSUNBZ0lDQWdJQ0FnSUZ3aU1qQndlQ0F3SURNd2NIaGNJaUF0UGlCN01qQndlQ3dnTUN3Z016QndlQ3dnTUgxY2JpQWdJQ0FnSUNBZ0lDQWdJRndpTWpCd2VDQXdYQ0lnTFQ0Z2V6SXdjSGdzSURBc0lESXdjSGdzSURCOVhHNGdJQ0FnSUNBZ0lDQWdJQ0JjSWpJd2NIaGNJaUF0UGlCN01qQndlQ3dnTWpCd2VDd2dNakJ3ZUN3Z01qQndlSDFjYmlBZ0lDQWdJQ0FnWEc0Z0lDQWdJQ0FnSUVCeVpYUjFjbTRnVzI5aWFtVmpkRjA2SUU5aWFtVmpkQ0IzYVhSb0lGUXZVaTlDTDB3Z2JXVjBjbWxqYzF4dUlDQWdJQ292WEc0Z0lDQWdjM0JzYVhRNklDaDJZV3gxWlNrZ1BUNGdlMXh1SUNBZ0lDQWdJQ0JqYjI1emRDQnpjR3hwZEZaaGJIVmxJRDBnZTMwN1hHNGdJQ0FnSUNBZ0lHTnZibk4wSUhOd2JHbDBVRzl6YVhScGIyNXpJRDBnYzNCc2FYUlRjR0ZqWlVSbGJHbHRhWFJsWkNoMllXeDFaU2s3WEc0Z0lDQWdJQ0FnSUdOdmJuTjBJRzUxYlZCdmMybDBhVzl1Y3lBOUlITndiR2wwVUc5emFYUnBiMjV6TG14bGJtZDBhRHRjYmlBZ0lDQWdJQ0FnWTI5dWMzUWdhblZ0Y0VKaFkyc2dQU0FvYm5WdFJHbHRaVzV6YVc5dWN5QWhQVDBnTVNrZ1B5QXlJRG9nTVR0Y2JpQWdJQ0FnSUNBZ2JHVjBJR29nUFNBd08xeHVYRzRnSUNBZ0lDQWdJR1p2Y2lBb2JHVjBJR2tnUFNBd095QnBJRHdnTkRzZ2FTc3JLU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQnpjR3hwZEZaaGJIVmxXM0J2YzJsMGFXOXVjMXRwWFYwZ1BTQnpjR3hwZEZCdmMybDBhVzl1YzF0cVhUdGNibHh1SUNBZ0lDQWdJQ0FnSUNBZ0x5OGdTblZ0Y0NCaVlXTnJJQ2gwYnlCemRHRnlkQ2tnWTI5MWJuUmxjaUJwWmlCM1pTZDJaU0J5WldGamFHVmtJSFJvWlNCbGJtUWdiMllnYjNWeUlIWmhiSFZsYzF4dUlDQWdJQ0FnSUNBZ0lDQWdhaXNyTzF4dUlDQWdJQ0FnSUNBZ0lDQWdhaUE5SUNocUlEMDlQU0J1ZFcxRWFXMWxibk5wYjI1ektTQS9JR29nTFNCcWRXMXdRbUZqYXlBNklHbzdYRzRnSUNBZ0lDQWdJSDFjYmx4dUlDQWdJQ0FnSUNCeVpYUjFjbTRnYzNCc2FYUldZV3gxWlR0Y2JpQWdJQ0I5TEZ4dVhHNGdJQ0FnWTI5dFltbHVaVG9nS0haaGJIVmxjeWtnUFQ0Z1kzSmxZWFJsUkdWc2FXMXBkR1ZrS0haaGJIVmxjeXdnY0c5emFYUnBiMjV6TENBbklDY3BYRzU5T3lKZGZRPT1cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL3ZhbHVlLXR5cGVzL3Bvc2l0aW9ucy5qc1xuICoqIG1vZHVsZSBpZCA9IDI5XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzLmRlZmF1bHQgPSB7XG4gICAgZGVmYXVsdFByb3BzOiB7XG4gICAgICAgIHVuaXQ6ICdweCdcbiAgICB9XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluQjRMbXB6SWwwc0ltNWhiV1Z6SWpwYlhTd2liV0Z3Y0dsdVozTWlPaUk3T3p0clFrRkJaVHRCUVVOWUxHZENRVUZaTEVWQlFVVTdRVUZEVml4WlFVRkpMRVZCUVVVc1NVRkJTVHRMUVVOaU8wTkJRMG9pTENKbWFXeGxJam9pY0hndWFuTWlMQ0p6YjNWeVkyVnpRMjl1ZEdWdWRDSTZXeUpsZUhCdmNuUWdaR1ZtWVhWc2RDQjdYRzRnSUNBZ1pHVm1ZWFZzZEZCeWIzQnpPaUI3WEc0Z0lDQWdJQ0FnSUhWdWFYUTZJQ2R3ZUNkY2JpQWdJQ0I5WEc1OU95SmRmUT09XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy92YWx1ZS10eXBlcy9weC5qc1xuICoqIG1vZHVsZSBpZCA9IDMwXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfdXRpbHMgPSByZXF1aXJlKCcuLi9pbmMvdXRpbHMnKTtcblxudmFyIF9kaWN0aW9uYXJ5ID0gcmVxdWlyZSgnLi9zZXR0aW5ncy9kaWN0aW9uYXJ5Jyk7XG5cbnZhciBfZGVmYXVsdFByb3BzID0gcmVxdWlyZSgnLi9zZXR0aW5ncy9kZWZhdWx0LXByb3BzJyk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IHtcbiAgICBkZWZhdWx0UHJvcHM6IHtcbiAgICAgICAgUmVkOiBfZGVmYXVsdFByb3BzLnJnYixcbiAgICAgICAgR3JlZW46IF9kZWZhdWx0UHJvcHMucmdiLFxuICAgICAgICBCbHVlOiBfZGVmYXVsdFByb3BzLnJnYixcbiAgICAgICAgQWxwaGE6IF9kZWZhdWx0UHJvcHMub3BhY2l0eVxuICAgIH0sXG5cbiAgICB0ZXN0OiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIHZhbHVlICYmIHZhbHVlLmluZGV4T2YoJ3JnYicpID4gLTE7XG4gICAgfSxcblxuICAgIHNwbGl0OiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgcmV0dXJuICgwLCBfdXRpbHMuZ2V0Q29sb3JWYWx1ZXMpKHZhbHVlLCBfZGljdGlvbmFyeS5yZ2IpO1xuICAgIH0sXG5cbiAgICBjb21iaW5lOiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgcmV0dXJuICgwLCBfdXRpbHMuY3JlYXRlRnVuY3Rpb25TdHJpbmcpKCgwLCBfdXRpbHMuY3JlYXRlRGVsaW1pdGVkKSh2YWx1ZXMsIF9kaWN0aW9uYXJ5LnJnYiwgJywgJywgMiksICdyZ2JhJyk7XG4gICAgfVxufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbkpuWWk1cWN5SmRMQ0p1WVcxbGN5STZXMTBzSW0xaGNIQnBibWR6SWpvaU96czdPenM3T3pzN08ydENRVWxsTzBGQlExZ3NaMEpCUVZrc1JVRkJSVHRCUVVOV0xGZEJRVWNzWjBKQlNrWXNSMEZCUnl4QlFVbFhPMEZCUTJZc1lVRkJTeXhuUWtGTVNpeEhRVUZITEVGQlMyRTdRVUZEYWtJc1dVRkJTU3huUWtGT1NDeEhRVUZITEVGQlRWazdRVUZEYUVJc1lVRkJTeXhuUWtGUVpTeFBRVUZQTEVGQlQwNDdTMEZEZUVJN08wRkJSVVFzVVVGQlNTeEZRVUZGTEZWQlFVTXNTMEZCU3p0bFFVRk5MRXRCUVVzc1NVRkJTU3hMUVVGTExFTkJRVU1zVDBGQlR5eERRVUZETEV0QlFVc3NRMEZCUXl4SFFVRkhMRU5CUVVNc1EwRkJRenRMUVVGRE96dEJRVVZ5UkN4VFFVRkxMRVZCUVVVc1ZVRkJReXhMUVVGTE8yVkJRVXNzVjBGa01FSXNZMEZCWXl4RlFXTjZRaXhMUVVGTExHTkJZbXBETEVkQlFVY3NRMEZoZVVNN1MwRkJRVHM3UVVGRmFrUXNWMEZCVHl4RlFVRkZMRlZCUVVNc1MwRkJTenRsUVVGTExGZEJhRUpGTEc5Q1FVRnZRaXhGUVdkQ1JDeFhRV2hDY0VNc1pVRkJaU3hGUVdkQ2NVTXNUVUZCVFN4alFXWXhSQ3hIUVVGSExFVkJaVzFGTEVsQlFVa3NSVUZCUlN4RFFVRkRMRU5CUVVNc1JVRkJSU3hOUVVGTkxFTkJRVU03UzBGQlFUdERRVU12UmlJc0ltWnBiR1VpT2lKeVoySXVhbk1pTENKemIzVnlZMlZ6UTI5dWRHVnVkQ0k2V3lKcGJYQnZjblFnZXlCamNtVmhkR1ZFWld4cGJXbDBaV1FzSUdOeVpXRjBaVVoxYm1OMGFXOXVVM1J5YVc1bkxDQm5aWFJEYjJ4dmNsWmhiSFZsY3lCOUlHWnliMjBnSnk0dUwybHVZeTkxZEdsc2N5YzdYRzVwYlhCdmNuUWdleUJ5WjJJZ1lYTWdjbWRpVkdWeWJYTWdmU0JtY205dElDY3VMM05sZEhScGJtZHpMMlJwWTNScGIyNWhjbmtuTzF4dWFXMXdiM0owSUhzZ2NtZGlJR0Z6SUdSbFptRjFiSFJTUjBJc0lHOXdZV05wZEhrZ1lYTWdaR1ZtWVhWc2RFOXdZV05wZEhrZ2ZTQm1jbTl0SUNjdUwzTmxkSFJwYm1kekwyUmxabUYxYkhRdGNISnZjSE1uTzF4dVhHNWxlSEJ2Y25RZ1pHVm1ZWFZzZENCN1hHNGdJQ0FnWkdWbVlYVnNkRkJ5YjNCek9pQjdYRzRnSUNBZ0lDQWdJRkpsWkRvZ1pHVm1ZWFZzZEZKSFFpeGNiaUFnSUNBZ0lDQWdSM0psWlc0NklHUmxabUYxYkhSU1IwSXNYRzRnSUNBZ0lDQWdJRUpzZFdVNklHUmxabUYxYkhSU1IwSXNYRzRnSUNBZ0lDQWdJRUZzY0doaE9pQmtaV1poZFd4MFQzQmhZMmwwZVZ4dUlDQWdJSDBzWEc1Y2JpQWdJQ0IwWlhOME9pQW9kbUZzZFdVcElEMCtJQ2gyWVd4MVpTQW1KaUIyWVd4MVpTNXBibVJsZUU5bUtDZHlaMkluS1NBK0lDMHhLU3hjYmx4dUlDQWdJSE53YkdsME9pQW9kbUZzZFdVcElEMCtJR2RsZEVOdmJHOXlWbUZzZFdWektIWmhiSFZsTENCeVoySlVaWEp0Y3lrc1hHNWNiaUFnSUNCamIyMWlhVzVsT2lBb2RtRnNkV1VwSUQwK0lHTnlaV0YwWlVaMWJtTjBhVzl1VTNSeWFXNW5LR055WldGMFpVUmxiR2x0YVhSbFpDaDJZV3gxWlhNc0lISm5ZbFJsY20xekxDQW5MQ0FuTENBeUtTd2dKM0puWW1FbktWeHVmVHNpWFgwPVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvdmFsdWUtdHlwZXMvcmdiLmpzXG4gKiogbW9kdWxlIGlkID0gMzFcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0cy5kZWZhdWx0ID0ge1xuICAgIGRlZmF1bHRQcm9wczoge1xuICAgICAgICBjdXJyZW50OiAxXG4gICAgfVxufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbk5qWVd4bExtcHpJbDBzSW01aGJXVnpJanBiWFN3aWJXRndjR2x1WjNNaU9pSTdPenRyUWtGQlpUdEJRVU5ZTEdkQ1FVRlpMRVZCUVVVN1FVRkRWaXhsUVVGUExFVkJRVVVzUTBGQlF6dExRVU5pTzBOQlEwb2lMQ0ptYVd4bElqb2ljMk5oYkdVdWFuTWlMQ0p6YjNWeVkyVnpRMjl1ZEdWdWRDSTZXeUpsZUhCdmNuUWdaR1ZtWVhWc2RDQjdYRzRnSUNBZ1pHVm1ZWFZzZEZCeWIzQnpPaUI3WEc0Z0lDQWdJQ0FnSUdOMWNuSmxiblE2SURGY2JpQWdJQ0I5WEc1OU95SmRmUT09XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy92YWx1ZS10eXBlcy9zY2FsZS5qc1xuICoqIG1vZHVsZSBpZCA9IDMyXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbnZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfY29sb3IgPSByZXF1aXJlKCcuL2NvbG9yJyk7XG5cbnZhciBfY29sb3IyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY29sb3IpO1xuXG52YXIgX3B4ID0gcmVxdWlyZSgnLi9weCcpO1xuXG52YXIgX2RpY3Rpb25hcnkgPSByZXF1aXJlKCcuL3NldHRpbmdzL2RpY3Rpb25hcnknKTtcblxudmFyIF91dGlscyA9IHJlcXVpcmUoJy4uL2luYy91dGlscycpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG52YXIgc2hhZG93V2l0aG91dENvbG9yVGVybXMgPSBfZGljdGlvbmFyeS5zaGFkb3cuc2xpY2UoMCwgNCk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IHtcbiAgICBkZWZhdWx0UHJvcHM6IF9leHRlbmRzKHt9LCBfY29sb3IyLmRlZmF1bHQuZGVmYXVsdFByb3BzLCB7XG4gICAgICAgIFg6IF9weC5kZWZhdWx0UHJvcHMsXG4gICAgICAgIFk6IF9weC5kZWZhdWx0UHJvcHMsXG4gICAgICAgIFJhZGl1czogX3B4LmRlZmF1bHRQcm9wcyxcbiAgICAgICAgU3ByZWFkOiBfcHguZGVmYXVsdFByb3BzXG4gICAgfSksXG5cbiAgICBzcGxpdDogZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgIHZhciBiaXRzID0gKDAsIF91dGlscy5zcGxpdFNwYWNlRGVsaW1pdGVkKSh2YWx1ZSk7XG4gICAgICAgIHZhciBoYXNSZWFjaGVkQ29sb3IgPSBmYWxzZTtcbiAgICAgICAgdmFyIGNvbG9yUHJvcCA9ICcnO1xuICAgICAgICB2YXIgc3BsaXRWYWx1ZSA9IHt9O1xuXG4gICAgICAgIGJpdHMuZm9yRWFjaChmdW5jdGlvbiAoYml0LCBpKSB7XG4gICAgICAgICAgICAvLyBJZiB3ZSd2ZSByZWFjaGVkIHRoZSBjb2xvciBwcm9wcywgYXBwZW5kIHRvIGNvbG9yIHN0cmluZ1xuICAgICAgICAgICAgaWYgKGhhc1JlYWNoZWRDb2xvciB8fCBfY29sb3IyLmRlZmF1bHQudGVzdCh0aGlzQml0KSkge1xuICAgICAgICAgICAgICAgIGhhc1JlYWNoZWRDb2xvciA9IHRydWU7XG4gICAgICAgICAgICAgICAgY29sb3JQcm9wICs9IGJpdDtcblxuICAgICAgICAgICAgICAgIC8vIEVsc2UgcHJvY2VzcyBzaGFkb3cgdmFsdWVcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHNwbGl0VmFsdWVbX2RpY3Rpb25hcnkuc2hhZG93W2ldXSA9IGJpdDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHZhciBzcGxpdENvbG9yUHJvcHMgPSBfY29sb3IyLmRlZmF1bHQuc3BsaXQoY29sb3JQcm9wKTtcblxuICAgICAgICByZXR1cm4gX2V4dGVuZHMoe30sIHNwbGl0VmFsdWUsIHsgc3BsaXRDb2xvclByb3BzOiBzcGxpdENvbG9yUHJvcHMgfSk7XG4gICAgfSxcblxuICAgIGNvbWJpbmU6IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICByZXR1cm4gY3JlYXRlRGVsaW1pdGVkKHZhbHVlcywgc2hhZG93V2l0aG91dENvbG9yVGVybXMsICcgJykgKyBfY29sb3IyLmRlZmF1bHQuY29tYmluZSh2YWx1ZXMpO1xuICAgIH1cbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5Ob1lXUnZkeTVxY3lKZExDSnVZVzFsY3lJNlcxMHNJbTFoY0hCcGJtZHpJam9pT3pzN096czdPenM3T3pzN096czdPenM3UVVGTFFTeEpRVUZOTEhWQ1FVRjFRaXhIUVVGSExGbEJTSFpDTEUxQlFVMHNRMEZITmtJc1MwRkJTeXhEUVVGRExFTkJRVU1zUlVGQlJTeERRVUZETEVOQlFVTXNRMEZCUXpzN2EwSkJSWHBETzBGQlExZ3NaMEpCUVZrc1pVRkRUQ3huUWtGQlRTeFpRVUZaTzBGQlEzSkNMRk5CUVVNc1RVRlVRU3haUVVGWkxFRkJVMGs3UVVGRGFrSXNVMEZCUXl4TlFWWkJMRmxCUVZrc1FVRlZTVHRCUVVOcVFpeGpRVUZOTEUxQldFd3NXVUZCV1N4QlFWZFRPMEZCUTNSQ0xHTkJRVTBzVFVGYVRDeFpRVUZaTEVGQldWTTdUVUZEZWtJN08wRkJSVVFzVTBGQlN5eEZRVUZGTEZWQlFVTXNTMEZCU3l4RlFVRkxPMEZCUTJRc1dVRkJUU3hKUVVGSkxFZEJRVWNzVjBGa1dpeHRRa0ZCYlVJc1JVRmpZU3hMUVVGTExFTkJRVU1zUTBGQlF6dEJRVU40UXl4WlFVRkpMR1ZCUVdVc1IwRkJSeXhMUVVGTExFTkJRVU03UVVGRE5VSXNXVUZCU1N4VFFVRlRMRWRCUVVjc1JVRkJSU3hEUVVGRE8wRkJRMjVDTEZsQlFVa3NWVUZCVlN4SFFVRkhMRVZCUVVVc1EwRkJRenM3UVVGRmNFSXNXVUZCU1N4RFFVRkRMRTlCUVU4c1EwRkJReXhWUVVGRExFZEJRVWNzUlVGQlJTeERRVUZETEVWQlFVczdPMEZCUlhKQ0xHZENRVUZKTEdWQlFXVXNTVUZCU1N4blFrRkJUU3hKUVVGSkxFTkJRVU1zVDBGQlR5eERRVUZETEVWQlFVVTdRVUZEZUVNc0swSkJRV1VzUjBGQlJ5eEpRVUZKTEVOQlFVTTdRVUZEZGtJc2VVSkJRVk1zU1VGQlNTeEhRVUZIT3pzN1FVRkJReXhoUVVkd1FpeE5RVUZOTzBGQlEwZ3NPRUpCUVZVc1EwRkJReXhaUVRWQ2JFSXNUVUZCVFN4RFFUUkNkMElzUTBGQlF5eERRVUZETEVOQlFVTXNSMEZCUnl4SFFVRkhMRU5CUVVNN2FVSkJRM0JETzFOQlEwb3NRMEZCUXl4RFFVRkRPenRCUVVWSUxGbEJRVTBzWlVGQlpTeEhRVUZITEdkQ1FVRk5MRXRCUVVzc1EwRkJReXhUUVVGVExFTkJRVU1zUTBGQlF6czdRVUZGTDBNc05FSkJRVmtzVlVGQlZTeEpRVUZGTEdWQlFXVXNSVUZCWml4bFFVRmxMRWxCUVVjN1MwRkROME03TzBGQlJVUXNWMEZCVHl4RlFVRkZMRlZCUVVNc1MwRkJTenRsUVVGTExHVkJRV1VzUTBGQlF5eE5RVUZOTEVWQlFVVXNkVUpCUVhWQ0xFVkJRVVVzUjBGQlJ5eERRVUZETEVkQlFVY3NaMEpCUVUwc1QwRkJUeXhEUVVGRExFMUJRVTBzUTBGQlF6dExRVUZCTzBOQlEzQkhJaXdpWm1sc1pTSTZJbk5vWVdSdmR5NXFjeUlzSW5OdmRYSmpaWE5EYjI1MFpXNTBJanBiSW1sdGNHOXlkQ0JqYjJ4dmNpQm1jbTl0SUNjdUwyTnZiRzl5Snp0Y2JtbHRjRzl5ZENCN0lHUmxabUYxYkhSUWNtOXdjeUJoY3lCd2VFUmxabUYxYkhSUWNtOXdjeUI5SUdaeWIyMGdKeTR2Y0hnbk8xeHVhVzF3YjNKMElIc2djMmhoWkc5M0lHRnpJSE5vWVdSdmQxUmxjbTF6SUgwZ1puSnZiU0FuTGk5elpYUjBhVzVuY3k5a2FXTjBhVzl1WVhKNUp6dGNibWx0Y0c5eWRDQjdJSE53YkdsMFUzQmhZMlZFWld4cGJXbDBaV1FnZlNCbWNtOXRJQ2N1TGk5cGJtTXZkWFJwYkhNbk8xeHVYRzVqYjI1emRDQnphR0ZrYjNkWGFYUm9iM1YwUTI5c2IzSlVaWEp0Y3lBOUlITm9ZV1J2ZDFSbGNtMXpMbk5zYVdObEtEQXNJRFFwTzF4dVhHNWxlSEJ2Y25RZ1pHVm1ZWFZzZENCN1hHNGdJQ0FnWkdWbVlYVnNkRkJ5YjNCek9pQjdYRzRnSUNBZ0lDQWdJQzR1TG1OdmJHOXlMbVJsWm1GMWJIUlFjbTl3Y3l4Y2JpQWdJQ0FnSUNBZ1dEb2djSGhFWldaaGRXeDBVSEp2Y0hNc1hHNGdJQ0FnSUNBZ0lGazZJSEI0UkdWbVlYVnNkRkJ5YjNCekxGeHVJQ0FnSUNBZ0lDQlNZV1JwZFhNNklIQjRSR1ZtWVhWc2RGQnliM0J6TEZ4dUlDQWdJQ0FnSUNCVGNISmxZV1E2SUhCNFJHVm1ZWFZzZEZCeWIzQnpYRzRnSUNBZ2ZTeGNibHh1SUNBZ0lITndiR2wwT2lBb2RtRnNkV1VwSUQwK0lIdGNiaUFnSUNBZ0lDQWdZMjl1YzNRZ1ltbDBjeUE5SUhOd2JHbDBVM0JoWTJWRVpXeHBiV2wwWldRb2RtRnNkV1VwTzF4dUlDQWdJQ0FnSUNCc1pYUWdhR0Z6VW1WaFkyaGxaRU52Ykc5eUlEMGdabUZzYzJVN1hHNGdJQ0FnSUNBZ0lHeGxkQ0JqYjJ4dmNsQnliM0FnUFNBbkp6dGNiaUFnSUNBZ0lDQWdiR1YwSUhOd2JHbDBWbUZzZFdVZ1BTQjdmVHRjYmx4dUlDQWdJQ0FnSUNCaWFYUnpMbVp2Y2tWaFkyZ29LR0pwZEN3Z2FTa2dQVDRnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdMeThnU1dZZ2QyVW5kbVVnY21WaFkyaGxaQ0IwYUdVZ1kyOXNiM0lnY0hKdmNITXNJR0Z3Y0dWdVpDQjBieUJqYjJ4dmNpQnpkSEpwYm1kY2JpQWdJQ0FnSUNBZ0lDQWdJR2xtSUNob1lYTlNaV0ZqYUdWa1EyOXNiM0lnZkh3Z1kyOXNiM0l1ZEdWemRDaDBhR2x6UW1sMEtTa2dlMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJR2hoYzFKbFlXTm9aV1JEYjJ4dmNpQTlJSFJ5ZFdVN1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ1kyOXNiM0pRY205d0lDczlJR0pwZER0Y2JseHVJQ0FnSUNBZ0lDQWdJQ0FnTHk4Z1JXeHpaU0J3Y205alpYTnpJSE5vWVdSdmR5QjJZV3gxWlZ4dUlDQWdJQ0FnSUNBZ0lDQWdmU0JsYkhObElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQnpjR3hwZEZaaGJIVmxXM05vWVdSdmQxUmxjbTF6VzJsZFhTQTlJR0pwZER0Y2JpQWdJQ0FnSUNBZ0lDQWdJSDFjYmlBZ0lDQWdJQ0FnZlNrN1hHNWNiaUFnSUNBZ0lDQWdZMjl1YzNRZ2MzQnNhWFJEYjJ4dmNsQnliM0J6SUQwZ1kyOXNiM0l1YzNCc2FYUW9ZMjlzYjNKUWNtOXdLVHRjYmx4dUlDQWdJQ0FnSUNCeVpYUjFjbTRnZXlBdUxpNXpjR3hwZEZaaGJIVmxMQ0J6Y0d4cGRFTnZiRzl5VUhKdmNITWdmVHRjYmlBZ0lDQjlMRnh1WEc0Z0lDQWdZMjl0WW1sdVpUb2dLSFpoYkhWbEtTQTlQaUJqY21WaGRHVkVaV3hwYldsMFpXUW9kbUZzZFdWekxDQnphR0ZrYjNkWGFYUm9iM1YwUTI5c2IzSlVaWEp0Y3l3Z0p5QW5LU0FySUdOdmJHOXlMbU52YldKcGJtVW9kbUZzZFdWektWeHVmVHRjYmlKZGZRPT1cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL3ZhbHVlLXR5cGVzL3NoYWRvdy5qc1xuICoqIG1vZHVsZSBpZCA9IDMzXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbnZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfdXRpbHMgPSByZXF1aXJlKCcuLi9pbmMvdXRpbHMnKTtcblxudmFyIF9sb29wID0gcmVxdWlyZSgnLi9sb29wJyk7XG5cbnZhciBsb29wID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQoX2xvb3ApO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChvYmopIHsgaWYgKG9iaiAmJiBvYmouX19lc01vZHVsZSkgeyByZXR1cm4gb2JqOyB9IGVsc2UgeyB2YXIgbmV3T2JqID0ge307IGlmIChvYmogIT0gbnVsbCkgeyBmb3IgKHZhciBrZXkgaW4gb2JqKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBrZXkpKSBuZXdPYmpba2V5XSA9IG9ialtrZXldOyB9IH0gbmV3T2JqLmRlZmF1bHQgPSBvYmo7IHJldHVybiBuZXdPYmo7IH0gfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG52YXIgUHJvY2VzcyA9IChmdW5jdGlvbiAoKSB7XG4gICAgLypcbiAgICAgICAgW29iamVjdF06IFByb3BlcnRpZXNcbiAgICAgICAgW2Jvb2xlYW5dIChvcHRpb25hbCk6IElzIFByb2Nlc3MgbGF6eT9cbiAgICAqL1xuXG4gICAgZnVuY3Rpb24gUHJvY2Vzcyhwcm9wcywgaXNMYXp5KSB7XG4gICAgICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBQcm9jZXNzKTtcblxuICAgICAgICB0aGlzLnNldCh0aGlzLmdldERlZmF1bHRQcm9wcygpKTtcbiAgICAgICAgdGhpcy5zZXQocHJvcHMpO1xuXG4gICAgICAgIHRoaXMuaXNMYXp5ID0gaXNMYXp5IHx8IGZhbHNlO1xuICAgICAgICB0aGlzLmlkID0gbG9vcC5nZXRQcm9jZXNzSWQoKTtcbiAgICAgICAgdGhpcy5pc0FjdGl2ZSA9IGZhbHNlO1xuICAgIH1cblxuICAgIFByb2Nlc3MucHJvdG90eXBlLnNldCA9IGZ1bmN0aW9uIHNldChwcm9wcykge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gICAgICAgICgwLCBfdXRpbHMuZWFjaCkocHJvcHMsIGZ1bmN0aW9uICh2YWx1ZSwga2V5KSB7XG4gICAgICAgICAgICByZXR1cm4gX3RoaXNba2V5XSA9IHZhbHVlO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfTtcblxuICAgIFByb2Nlc3MucHJvdG90eXBlLnN0YXJ0ID0gZnVuY3Rpb24gc3RhcnQoKSB7XG4gICAgICAgIHRoaXMuaXNBY3RpdmUgPSB0cnVlO1xuICAgICAgICBsb29wLmFjdGl2YXRlKHRoaXMuaWQsIHRoaXMpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xuXG4gICAgUHJvY2Vzcy5wcm90b3R5cGUuc3RvcCA9IGZ1bmN0aW9uIHN0b3AoKSB7XG4gICAgICAgIHRoaXMuaXNBY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgbG9vcC5kZWFjdGl2YXRlKHRoaXMuaWQpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xuXG4gICAgUHJvY2Vzcy5wcm90b3R5cGUub25jZSA9IGZ1bmN0aW9uIG9uY2UoKSB7XG4gICAgICAgIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gICAgICAgIHRoaXMub25DbGVhbnVwID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgX3RoaXMyLnN0b3AoKTtcbiAgICAgICAgICAgIF90aGlzMi5vbkNsZWFudXAgPSB1bmRlZmluZWQ7XG4gICAgICAgIH07XG5cbiAgICAgICAgdGhpcy5zdGFydCgpO1xuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH07XG5cbiAgICAvKlxuICAgICAgICAjIEdldCBkZWZhdWx0IEFjdGlvbiBwcm9wZXJ0aWVzXG4gICAgICAgICBAcmV0dXJuIFtvYmplY3RdXG4gICAgKi9cblxuICAgIFByb2Nlc3MucHJvdG90eXBlLmdldERlZmF1bHRQcm9wcyA9IGZ1bmN0aW9uIGdldERlZmF1bHRQcm9wcygpIHtcbiAgICAgICAgcmV0dXJuIHt9O1xuICAgIH07XG5cbiAgICAvKlxuICAgICAgICAjIEV4dGVuZCB0aGlzIFByb2Nlc3Mgd2l0aCBuZXcgcHJvcGVydGllc1xuICAgICAgICAjIyBSZXR1cm5zIG5ldyBpbnN0YW5jZSBvZiB0aGlzIFByb2Nlc3MncyBgcHJvdG90eXBlYCB3aXRoIGV4aXN0aW5nIGFuZCBuZXcgcHJvcGVydGllc1xuICAgICAgICAgQHBhcmFtIFtvYmplY3RdIChvcHRpb25hbClcbiAgICAgICAgQHJldHVybiBbUHJvY2Vzc11cbiAgICAqL1xuXG4gICAgUHJvY2Vzcy5wcm90b3R5cGUuaW5oZXJpdCA9IGZ1bmN0aW9uIGluaGVyaXQocHJvcHMpIHtcbiAgICAgICAgcmV0dXJuIG5ldyB0aGlzLmNvbnN0cnVjdG9yKF9leHRlbmRzKHt9LCB0aGlzLCB7IHByb3BzOiBwcm9wcyB9KSk7XG4gICAgfTtcblxuICAgIHJldHVybiBQcm9jZXNzO1xufSkoKTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gUHJvY2Vzcztcbjtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbEJ5YjJObGMzTXVhbk1pWFN3aWJtRnRaWE1pT2x0ZExDSnRZWEJ3YVc1bmN5STZJanM3T3pzN096czdPenRKUVVOWkxFbEJRVWs3T3pzN096dEpRVVZMTEU5QlFVODdPenM3T3p0QlFVdDRRaXhoUVV4cFFpeFBRVUZQTEVOQlMxb3NTMEZCU3l4RlFVRkZMRTFCUVUwc1JVRkJSVHM0UWtGTVZpeFBRVUZQT3p0QlFVMXdRaXhaUVVGSkxFTkJRVU1zUjBGQlJ5eERRVUZETEVsQlFVa3NRMEZCUXl4bFFVRmxMRVZCUVVVc1EwRkJReXhEUVVGRE8wRkJRMnBETEZsQlFVa3NRMEZCUXl4SFFVRkhMRU5CUVVNc1MwRkJTeXhEUVVGRExFTkJRVU03TzBGQlJXaENMRmxCUVVrc1EwRkJReXhOUVVGTkxFZEJRVWNzVFVGQlRTeEpRVUZKTEV0QlFVc3NRMEZCUXp0QlFVTTVRaXhaUVVGSkxFTkJRVU1zUlVGQlJTeEhRVUZITEVsQlFVa3NRMEZCUXl4WlFVRlpMRVZCUVVVc1EwRkJRenRCUVVNNVFpeFpRVUZKTEVOQlFVTXNVVUZCVVN4SFFVRkhMRXRCUVVzc1EwRkJRenRMUVVONlFqczdRVUZhWjBJc1YwRkJUeXhYUVdONFFpeEhRVUZITEdkQ1FVRkRMRXRCUVVzc1JVRkJSVHM3TzBGQlExQXNiVUpCYkVKRExFbEJRVWtzUlVGclFrRXNTMEZCU3l4RlFVRkZMRlZCUVVNc1MwRkJTeXhGUVVGRkxFZEJRVWM3YlVKQlFVc3NUVUZCU3l4SFFVRkhMRU5CUVVNc1IwRkJSeXhMUVVGTE8xTkJRVUVzUTBGQlF5eERRVUZETzBGQlF5OURMR1ZCUVU4c1NVRkJTU3hEUVVGRE8wdEJRMlk3TzBGQmFrSm5RaXhYUVVGUExGZEJiVUo0UWl4TFFVRkxMRzlDUVVGSE8wRkJRMG9zV1VGQlNTeERRVUZETEZGQlFWRXNSMEZCUnl4SlFVRkpMRU5CUVVNN1FVRkRja0lzV1VGQlNTeERRVUZETEZGQlFWRXNRMEZCUXl4SlFVRkpMRU5CUVVNc1JVRkJSU3hGUVVGRkxFbEJRVWtzUTBGQlF5eERRVUZETzBGQlF6ZENMR1ZCUVU4c1NVRkJTU3hEUVVGRE8wdEJRMlk3TzBGQmRrSm5RaXhYUVVGUExGZEJlVUo0UWl4SlFVRkpMRzFDUVVGSE8wRkJRMGdzV1VGQlNTeERRVUZETEZGQlFWRXNSMEZCUnl4TFFVRkxMRU5CUVVNN1FVRkRkRUlzV1VGQlNTeERRVUZETEZWQlFWVXNRMEZCUXl4SlFVRkpMRU5CUVVNc1JVRkJSU3hEUVVGRExFTkJRVU03UVVGRGVrSXNaVUZCVHl4SlFVRkpMRU5CUVVNN1MwRkRaanM3UVVFM1FtZENMRmRCUVU4c1YwRXJRbmhDTEVsQlFVa3NiVUpCUVVjN096dEJRVU5JTEZsQlFVa3NRMEZCUXl4VFFVRlRMRWRCUVVjc1dVRkJUVHRCUVVOdVFpeHRRa0ZCU3l4SlFVRkpMRVZCUVVVc1EwRkJRenRCUVVOYUxHMUNRVUZMTEZOQlFWTXNSMEZCUnl4VFFVRlRMRU5CUVVNN1UwRkRPVUlzUTBGQlF6czdRVUZGUml4WlFVRkpMRU5CUVVNc1MwRkJTeXhGUVVGRkxFTkJRVU03TzBGQlJXSXNaVUZCVHl4SlFVRkpMRU5CUVVNN1MwRkRaanM3T3pzN096dEJRWGhEWjBJc1YwRkJUeXhYUVN0RGVFSXNaVUZCWlN3NFFrRkJSenRCUVVOa0xHVkJRVThzUlVGQlJTeERRVUZETzB0QlEySTdPenM3T3pzN096dEJRV3BFWjBJc1YwRkJUeXhYUVRCRWVFSXNUMEZCVHl4dlFrRkJReXhMUVVGTExFVkJRVVU3UVVGRFdDeGxRVUZQTEVsQlFVa3NTVUZCU1N4RFFVRkRMRmRCUVZjc1kwRkJUU3hKUVVGSkxFbEJRVVVzUzBGQlN5eEZRVUZNTEV0QlFVc3NTVUZCUnl4RFFVRkRPMHRCUTI1RU96dFhRVFZFWjBJc1QwRkJUenM3TzJ0Q1FVRlFMRTlCUVU4N1FVRTJSRE5DTEVOQlFVTWlMQ0ptYVd4bElqb2lVSEp2WTJWemN5NXFjeUlzSW5OdmRYSmpaWE5EYjI1MFpXNTBJanBiSW1sdGNHOXlkQ0I3SUdWaFkyZ2dmU0JtY205dElDY3VMaTlwYm1NdmRYUnBiSE1uTzF4dWFXMXdiM0owSUNvZ1lYTWdiRzl2Y0NCbWNtOXRJQ2N1TDJ4dmIzQW5PMXh1WEc1bGVIQnZjblFnWkdWbVlYVnNkQ0JqYkdGemN5QlFjbTlqWlhOeklIdGNiaUFnSUNBdktseHVJQ0FnSUNBZ0lDQmJiMkpxWldOMFhUb2dVSEp2Y0dWeWRHbGxjMXh1SUNBZ0lDQWdJQ0JiWW05dmJHVmhibDBnS0c5d2RHbHZibUZzS1RvZ1NYTWdVSEp2WTJWemN5QnNZWHA1UDF4dUlDQWdJQ292WEc0Z0lDQWdZMjl1YzNSeWRXTjBiM0lvY0hKdmNITXNJR2x6VEdGNmVTa2dlMXh1SUNBZ0lDQWdJQ0IwYUdsekxuTmxkQ2gwYUdsekxtZGxkRVJsWm1GMWJIUlFjbTl3Y3lncEtUdGNiaUFnSUNBZ0lDQWdkR2hwY3k1elpYUW9jSEp2Y0hNcE8xeHVYRzRnSUNBZ0lDQWdJSFJvYVhNdWFYTk1ZWHA1SUQwZ2FYTk1ZWHA1SUh4OElHWmhiSE5sTzF4dUlDQWdJQ0FnSUNCMGFHbHpMbWxrSUQwZ2JHOXZjQzVuWlhSUWNtOWpaWE56U1dRb0tUdGNiaUFnSUNBZ0lDQWdkR2hwY3k1cGMwRmpkR2wyWlNBOUlHWmhiSE5sTzF4dUlDQWdJSDFjYmx4dUlDQWdJSE5sZENod2NtOXdjeWtnZTF4dUlDQWdJQ0FnSUNCbFlXTm9LSEJ5YjNCekxDQW9kbUZzZFdVc0lHdGxlU2tnUFQ0Z2RHaHBjMXRyWlhsZElEMGdkbUZzZFdVcE8xeHVJQ0FnSUNBZ0lDQnlaWFIxY200Z2RHaHBjenRjYmlBZ0lDQjlYRzVjYmlBZ0lDQnpkR0Z5ZENncElIdGNiaUFnSUNBZ0lDQWdkR2hwY3k1cGMwRmpkR2wyWlNBOUlIUnlkV1U3WEc0Z0lDQWdJQ0FnSUd4dmIzQXVZV04wYVhaaGRHVW9kR2hwY3k1cFpDd2dkR2hwY3lrN1hHNGdJQ0FnSUNBZ0lISmxkSFZ5YmlCMGFHbHpPMXh1SUNBZ0lIMWNibHh1SUNBZ0lITjBiM0FvS1NCN1hHNGdJQ0FnSUNBZ0lIUm9hWE11YVhOQlkzUnBkbVVnUFNCbVlXeHpaVHRjYmlBZ0lDQWdJQ0FnYkc5dmNDNWtaV0ZqZEdsMllYUmxLSFJvYVhNdWFXUXBPMXh1SUNBZ0lDQWdJQ0J5WlhSMWNtNGdkR2hwY3p0Y2JpQWdJQ0I5WEc1Y2JpQWdJQ0J2Ym1ObEtDa2dlMXh1SUNBZ0lDQWdJQ0IwYUdsekxtOXVRMnhsWVc1MWNDQTlJQ2dwSUQwK0lIdGNiaUFnSUNBZ0lDQWdJQ0FnSUhSb2FYTXVjM1J2Y0NncE8xeHVJQ0FnSUNBZ0lDQWdJQ0FnZEdocGN5NXZia05zWldGdWRYQWdQU0IxYm1SbFptbHVaV1E3WEc0Z0lDQWdJQ0FnSUgwN1hHNWNiaUFnSUNBZ0lDQWdkR2hwY3k1emRHRnlkQ2dwTzF4dVhHNGdJQ0FnSUNBZ0lISmxkSFZ5YmlCMGFHbHpPMXh1SUNBZ0lIMWNibHh1SUNBZ0lDOHFYRzRnSUNBZ0lDQWdJQ01nUjJWMElHUmxabUYxYkhRZ1FXTjBhVzl1SUhCeWIzQmxjblJwWlhOY2JseHVJQ0FnSUNBZ0lDQkFjbVYwZFhKdUlGdHZZbXBsWTNSZFhHNGdJQ0FnS2k5Y2JpQWdJQ0JuWlhSRVpXWmhkV3gwVUhKdmNITW9LU0I3WEc0Z0lDQWdJQ0FnSUhKbGRIVnliaUI3ZlR0Y2JpQWdJQ0I5WEc1Y2JpQWdJQ0F2S2x4dUlDQWdJQ0FnSUNBaklFVjRkR1Z1WkNCMGFHbHpJRkJ5YjJObGMzTWdkMmwwYUNCdVpYY2djSEp2Y0dWeWRHbGxjMXh1SUNBZ0lDQWdJQ0FqSXlCU1pYUjFjbTV6SUc1bGR5QnBibk4wWVc1alpTQnZaaUIwYUdseklGQnliMk5sYzNNbmN5QmdjSEp2ZEc5MGVYQmxZQ0IzYVhSb0lHVjRhWE4wYVc1bklHRnVaQ0J1WlhjZ2NISnZjR1Z5ZEdsbGMxeHVYRzRnSUNBZ0lDQWdJRUJ3WVhKaGJTQmJiMkpxWldOMFhTQW9iM0IwYVc5dVlXd3BYRzRnSUNBZ0lDQWdJRUJ5WlhSMWNtNGdXMUJ5YjJObGMzTmRYRzRnSUNBZ0tpOWNiaUFnSUNCcGJtaGxjbWwwS0hCeWIzQnpLU0I3WEc0Z0lDQWdJQ0FnSUhKbGRIVnliaUJ1WlhjZ2RHaHBjeTVqYjI1emRISjFZM1J2Y2loN0lDNHVMblJvYVhNc0lIQnliM0J6SUgwcE8xeHVJQ0FnSUgxY2JuMDdYRzRpWFgwPVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvcHJvY2Vzcy9Qcm9jZXNzLmpzXG4gKiogbW9kdWxlIGlkID0gMzRcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF9jcmVhdGVFYXNpbmcgPSByZXF1aXJlKCcuL2NyZWF0ZS1lYXNpbmcnKTtcblxudmFyIF9jcmVhdGVFYXNpbmcyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY3JlYXRlRWFzaW5nKTtcblxudmFyIF91dGlscyA9IHJlcXVpcmUoJy4uLy4uL2luYy91dGlscycpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG4vLyBWYWx1ZXNcbi8qXG4gICAgRWFzaW5nIGZ1bmN0aW9uc1xuICAgIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICBcbiAgICBHZW5lcmF0ZXMgYW5kIHByb3ZpZGVzIGVhc2luZyBmdW5jdGlvbnMgYmFzZWQgb24gYmFzZUZ1bmN0aW9uIGRlZmluaXRpb25zXG4gICAgXG4gICAgQSBjYWxsIHRvIGVhc2luZ0Z1bmN0aW9uLmdldCgnZnVuY3Rpb25OYW1lJykgcmV0dXJucyBhIGZ1bmN0aW9uIHRoYXQgY2FuIGJlIHBhc3NlZDpcbiAgICAgICAgQHBhcmFtIFtudW1iZXJdOiBQcm9ncmVzcyAwLTFcbiAgICAgICAgQHBhcmFtIFtudW1iZXJdIChvcHRpb25hbCk6IEFtcCBtb2RpZmllciwgb25seSBhY2NlcHRlZCBpbiBzb21lIGVhc2luZyBmdW5jdGlvbnNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFuZCBpcyB1c2VkIHRvIGFkanVzdCBvdmVyYWxsIHN0cmVuZ3RoXG4gICAgICAgIEByZXR1cm4gW251bWJlcl06IEVhc2VkIHByb2dyZXNzXG4gICAgICAgIFxuICAgIFdlIGNhbiBnZW5lcmF0ZSBuZXcgZnVuY3Rpb25zIGJ5IHNlbmRpbmcgYW4gZWFzaW5nIGZ1bmN0aW9uIHRocm91Z2ggZWFzaW5nRnVuY3Rpb24uZXh0ZW5kKG5hbWUsIG1ldGhvZCkuXG4gICAgV2hpY2ggd2lsbCBtYWtlIG5hbWVJbiwgbmFtZU91dCBhbmQgbmFtZUluT3V0IGZ1bmN0aW9ucyBhdmFpbGFibGUgdG8gdXNlLlxuICAgICAgICBcbiAgICBFYXNpbmcgZnVuY3Rpb25zIGZyb20gUm9iZXJ0IFBlbm5lclxuICAgIGh0dHA6Ly93d3cucm9iZXJ0cGVubmVyLmNvbS9lYXNpbmcvXG4gICAgICAgIFxuICAgIEJlemllciBjdXJ2ZSBpbnRlcnByZXRvciBjcmVhdGVkIGZyb20gR2HDq3RhbiBSZW5hdWRlYXUncyBvcmlnaW5hbCBCZXppZXJFYXNpbmcgIFxuICAgIGh0dHBzOi8vZ2l0aHViLmNvbS9ncmUvYmV6aWVyLWVhc2luZy9ibG9iL21hc3Rlci9pbmRleC5qcyAgXG4gICAgaHR0cHM6Ly9naXRodWIuY29tL2dyZS9iZXppZXItZWFzaW5nL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcblxuICAgIEFudGljaXBhdGUgZWFzaW5nIGNyZWF0ZWQgYnkgRWxsaW90IEdpbm9cbiAgICBodHRwczovL3R3aXR0ZXIuY29tL0VsbGlvdEdlbm9cbiovXG4vLyBJbXBvcnRzXG52YXIgREVGQVVMVF9CQUNLX1NUUkVOR1RIID0gMS41MjU7XG52YXIgREVGQVVMVF9QT1dfU1RSRU5HVEggPSAyO1xuXG4vLyBVdGlsaXR5IGZ1bmN0aW9uc1xudmFyIGdlbmVyYXRlUG93ZXJFYXNpbmcgPSBmdW5jdGlvbiAoc3RyZW5ndGgpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gKHByb2dyZXNzLCBzdHJlbmd0aCkge1xuICAgICAgICByZXR1cm4gYmFzZUVhc2luZy5lYXNlKHByb2dyZXNzLCBzdHJlbmd0aCk7XG4gICAgfTtcbn07XG5cbi8qXG4gICAgRWFjaCBvZiB0aGVzZSBiYXNlIGZ1bmN0aW9ucyBpcyBhbiBlYXNlSW5cbiAgICBcbiAgICBPbiBpbml0LCB3ZSB1c2UgLm1pcnJvciBhbmQgLnJldmVyc2UgdG8gZ2VuZXJhdGUgZWFzZUluT3V0IGFuZFxuICAgIGVhc2VPdXQgZnVuY3Rpb25zIHJlc3BlY3RpdmVseS5cbiovXG52YXIgYmFzZUVhc2luZyA9IHtcbiAgICBlYXNlOiBmdW5jdGlvbiAocHJvZ3Jlc3MpIHtcbiAgICAgICAgdmFyIHN0cmVuZ3RoID0gYXJndW1lbnRzLmxlbmd0aCA8PSAxIHx8IGFyZ3VtZW50c1sxXSA9PT0gdW5kZWZpbmVkID8gREVGQVVMVF9QT1dfU1RSRU5HVEggOiBhcmd1bWVudHNbMV07XG4gICAgICAgIHJldHVybiBNYXRoLnBvdyhwcm9ncmVzcywgc3RyZW5ndGgpO1xuICAgIH0sXG4gICAgY2lyYzogZnVuY3Rpb24gKHByb2dyZXNzKSB7XG4gICAgICAgIHJldHVybiAxIC0gTWF0aC5zaW4oTWF0aC5hY29zKHByb2dyZXNzKSk7XG4gICAgfSxcbiAgICBiYWNrOiBmdW5jdGlvbiAocHJvZ3Jlc3MpIHtcbiAgICAgICAgdmFyIHN0cmVuZ3RoID0gYXJndW1lbnRzLmxlbmd0aCA8PSAxIHx8IGFyZ3VtZW50c1sxXSA9PT0gdW5kZWZpbmVkID8gREVGQVVMVF9CQUNLX1NUUkVOR1RIIDogYXJndW1lbnRzWzFdO1xuICAgICAgICByZXR1cm4gcHJvZ3Jlc3MgKiBwcm9ncmVzcyAqICgoc3RyZW5ndGggKyAxKSAqIHByb2dyZXNzIC0gc3RyZW5ndGgpO1xuICAgIH1cbn07XG5cblsnY3ViaWMnLCAncXVhcnQnLCAncXVpbnQnXS5mb3JFYWNoKGZ1bmN0aW9uIChlYXNpbmdOYW1lLCBpKSB7XG4gICAgcmV0dXJuIGJhc2VFYXNpbmdbZWFzaW5nTmFtZV0gPSBnZW5lcmF0ZVBvd2VyRWFzaW5nKGkgKyAzKTtcbn0pO1xuXG4vLyBHZW5lcmF0ZSBpbi9vdXQvaW5PdXQgdmFyaWF0aW9uc1xuKDAsIF91dGlscy5lYWNoKShiYXNlRWFzaW5nLCBmdW5jdGlvbiAoYmFzZUVhc2UsIGtleSkge1xuICAgIHZhciBlYXNpbmdGdW5jdGlvbiA9ICgwLCBfY3JlYXRlRWFzaW5nMi5kZWZhdWx0KShiYXNlRWFzZSk7XG4gICAgYmFzZUVhc2luZ1trZXkgKyAnSW4nXSA9IGVhc2luZ0Z1bmN0aW9uLmluO1xuICAgIGJhc2VFYXNpbmdba2V5ICsgJ091dCddID0gZWFzaW5nRnVuY3Rpb24ub3V0O1xuICAgIGJhc2VFYXNpbmdba2V5ICsgJ0luT3V0J10gPSBlYXNpbmdGdW5jdGlvbi5pbk91dDtcbn0pO1xuXG5iYXNlRWFzaW5nLmxpbmVhciA9IGZ1bmN0aW9uIChwcm9ncmVzcykge1xuICAgIHJldHVybiBwcm9ncmVzcztcbn07XG5iYXNlRWFzaW5nLmFudGljaXBhdGUgPSBmdW5jdGlvbiAocHJvZ3Jlc3MpIHtcbiAgICB2YXIgc3RyZW5ndGggPSBhcmd1bWVudHMubGVuZ3RoIDw9IDEgfHwgYXJndW1lbnRzWzFdID09PSB1bmRlZmluZWQgPyBERUZBVUxUX0JBQ0tfU1RSRU5HVEggOiBhcmd1bWVudHNbMV07XG4gICAgcmV0dXJuIChwcm9ncmVzcyAqPSAyKSA8IDEgPyAwLjUgKiBiYXNlRWFzaW5nLmJhY2tJbihwcm9ncmVzcywgc3RyZW5ndGgpIDogMC41ICogKDIgLSBNYXRoLnBvdygyLCAtMTAgKiAocHJvZ3Jlc3MgLSAxKSkpO1xufTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gYmFzZUVhc2luZztcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbkJ5WlhObGRDMWxZWE5wYm1jdWFuTWlYU3dpYm1GdFpYTWlPbHRkTENKdFlYQndhVzVuY3lJNklqczdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPMEZCT0VKQkxFbEJRVTBzY1VKQlFYRkNMRWRCUVVjc1MwRkJTeXhEUVVGRE8wRkJRM0JETEVsQlFVMHNiMEpCUVc5Q0xFZEJRVWNzUTBGQlF6czdPMEZCUVVNc1FVRkhMMElzU1VGQlRTeHRRa0ZCYlVJc1IwRkJSeXhWUVVGQkxGRkJRVkU3VjBGQlNTeFZRVUZETEZGQlFWRXNSVUZCUlN4UlFVRlJPMlZCUVVzc1ZVRkJWU3hEUVVGRExFbEJRVWtzUTBGQlF5eFJRVUZSTEVWQlFVVXNVVUZCVVN4RFFVRkRPMHRCUVVFN1EwRkJRVHM3T3pzN096czdRVUZCUXl4QlFWRndSeXhKUVVGSkxGVkJRVlVzUjBGQlJ6dEJRVU5pTEZGQlFVa3NSVUZCUlN4VlFVRkRMRkZCUVZFN1dVRkJSU3hSUVVGUkxIbEVRVUZITEc5Q1FVRnZRanQzUWtGQlN5eFJRVUZSTEVWQlFVa3NVVUZCVVR0TFFVRkJPMEZCUTNwRkxGRkJRVWtzUlVGQlJTeFZRVUZCTEZGQlFWRTdaVUZCU1N4RFFVRkRMRWRCUVVjc1NVRkJTU3hEUVVGRExFZEJRVWNzUTBGQlF5eEpRVUZKTEVOQlFVTXNTVUZCU1N4RFFVRkRMRkZCUVZFc1EwRkJReXhEUVVGRE8wdEJRVUU3UVVGRGJrUXNVVUZCU1N4RlFVRkZMRlZCUVVNc1VVRkJVVHRaUVVGRkxGRkJRVkVzZVVSQlFVY3NjVUpCUVhGQ08yVkJRVXNzUVVGQlF5eFJRVUZSTEVkQlFVY3NVVUZCVVN4SlFVRkxMRU5CUVVNc1VVRkJVU3hIUVVGSExFTkJRVU1zUTBGQlFTeEhRVUZKTEZGQlFWRXNSMEZCUnl4UlFVRlJMRU5CUVVFc1FVRkJRenRMUVVGQk8wTkJRM1pJTEVOQlFVTTdPMEZCUlVZc1EwRkJReXhQUVVGUExFVkJRVVVzVDBGQlR5eEZRVUZGTEU5QlFVOHNRMEZCUXl4RFFVRkRMRTlCUVU4c1EwRkJReXhWUVVGRExGVkJRVlVzUlVGQlJTeERRVUZETzFkQlFVc3NWVUZCVlN4RFFVRkRMRlZCUVZVc1EwRkJReXhIUVVGSExHMUNRVUZ0UWl4RFFVRkRMRU5CUVVNc1IwRkJSeXhEUVVGRExFTkJRVU03UTBGQlFTeERRVUZET3pzN1FVRkJReXhCUVVjMVJ5eFhRWGhDVXl4SlFVRkpMRVZCZDBKU0xGVkJRVlVzUlVGQlJTeFZRVUZETEZGQlFWRXNSVUZCUlN4SFFVRkhMRVZCUVVzN1FVRkRhRU1zVVVGQlNTeGpRVUZqTEVkQlFVY3NORUpCUVdFc1VVRkJVU3hEUVVGRExFTkJRVU03UVVGRE5VTXNZMEZCVlN4RFFVRkpMRWRCUVVjc1VVRkJTeXhIUVVGSExHTkJRV01zUTBGQlF5eEZRVUZGTEVOQlFVTTdRVUZETTBNc1kwRkJWU3hEUVVGSkxFZEJRVWNzVTBGQlRTeEhRVUZITEdOQlFXTXNRMEZCUXl4SFFVRkhMRU5CUVVNN1FVRkROME1zWTBGQlZTeERRVUZKTEVkQlFVY3NWMEZCVVN4SFFVRkhMR05CUVdNc1EwRkJReXhMUVVGTExFTkJRVU03UTBGRGNFUXNRMEZCUXl4RFFVRkRPenRCUVVWSUxGVkJRVlVzUTBGQlF5eE5RVUZOTEVkQlFVY3NWVUZCUVN4UlFVRlJPMWRCUVVrc1VVRkJVVHREUVVGQkxFTkJRVU03UVVGRGVrTXNWVUZCVlN4RFFVRkRMRlZCUVZVc1IwRkJSeXhWUVVGRExGRkJRVkU3VVVGQlJTeFJRVUZSTEhsRVFVRkhMSEZDUVVGeFFqdFhRVU12UkN4QlFVRkRMRU5CUVVNc1VVRkJVU3hKUVVGRkxFTkJRVU1zUTBGQlFTeEhRVUZKTEVOQlFVTXNSMEZCU1N4SFFVRkhMRWRCUVVjc1ZVRkJWU3hEUVVGRExFMUJRVTBzUTBGQlF5eFJRVUZSTEVWQlFVVXNVVUZCVVN4RFFVRkRMRWRCUVVrc1IwRkJSeXhKUVVGSkxFTkJRVU1zUjBGQlJ5eEpRVUZKTEVOQlFVTXNSMEZCUnl4RFFVRkRMRU5CUVVNc1JVRkJSU3hEUVVGRExFVkJRVVVzU1VGQlNTeFJRVUZSTEVkQlFVY3NRMEZCUXl4RFFVRkJMRUZCUVVNc1EwRkJReXhEUVVGQkxFRkJRVU03UTBGQlFTeERRVUZET3p0clFrRkZlRWNzVlVGQlZTSXNJbVpwYkdVaU9pSndjbVZ6WlhRdFpXRnphVzVuTG1weklpd2ljMjkxY21ObGMwTnZiblJsYm5RaU9sc2lMeXBjYmlBZ0lDQkZZWE5wYm1jZ1puVnVZM1JwYjI1elhHNGdJQ0FnTFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExWeHVJQ0FnSUZ4dUlDQWdJRWRsYm1WeVlYUmxjeUJoYm1RZ2NISnZkbWxrWlhNZ1pXRnphVzVuSUdaMWJtTjBhVzl1Y3lCaVlYTmxaQ0J2YmlCaVlYTmxSblZ1WTNScGIyNGdaR1ZtYVc1cGRHbHZibk5jYmlBZ0lDQmNiaUFnSUNCQklHTmhiR3dnZEc4Z1pXRnphVzVuUm5WdVkzUnBiMjR1WjJWMEtDZG1kVzVqZEdsdmJrNWhiV1VuS1NCeVpYUjFjbTV6SUdFZ1puVnVZM1JwYjI0Z2RHaGhkQ0JqWVc0Z1ltVWdjR0Z6YzJWa09seHVJQ0FnSUNBZ0lDQkFjR0Z5WVcwZ1cyNTFiV0psY2wwNklGQnliMmR5WlhOeklEQXRNVnh1SUNBZ0lDQWdJQ0JBY0dGeVlXMGdXMjUxYldKbGNsMGdLRzl3ZEdsdmJtRnNLVG9nUVcxd0lHMXZaR2xtYVdWeUxDQnZibXg1SUdGalkyVndkR1ZrSUdsdUlITnZiV1VnWldGemFXNW5JR1oxYm1OMGFXOXVjMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnWVc1a0lHbHpJSFZ6WldRZ2RHOGdZV1JxZFhOMElHOTJaWEpoYkd3Z2MzUnlaVzVuZEdoY2JpQWdJQ0FnSUNBZ1FISmxkSFZ5YmlCYmJuVnRZbVZ5WFRvZ1JXRnpaV1FnY0hKdlozSmxjM05jYmlBZ0lDQWdJQ0FnWEc0Z0lDQWdWMlVnWTJGdUlHZGxibVZ5WVhSbElHNWxkeUJtZFc1amRHbHZibk1nWW5rZ2MyVnVaR2x1WnlCaGJpQmxZWE5wYm1jZ1puVnVZM1JwYjI0Z2RHaHliM1ZuYUNCbFlYTnBibWRHZFc1amRHbHZiaTVsZUhSbGJtUW9ibUZ0WlN3Z2JXVjBhRzlrS1M1Y2JpQWdJQ0JYYUdsamFDQjNhV3hzSUcxaGEyVWdibUZ0WlVsdUxDQnVZVzFsVDNWMElHRnVaQ0J1WVcxbFNXNVBkWFFnWm5WdVkzUnBiMjV6SUdGMllXbHNZV0pzWlNCMGJ5QjFjMlV1WEc0Z0lDQWdJQ0FnSUZ4dUlDQWdJRVZoYzJsdVp5Qm1kVzVqZEdsdmJuTWdabkp2YlNCU2IySmxjblFnVUdWdWJtVnlYRzRnSUNBZ2FIUjBjRG92TDNkM2R5NXliMkpsY25Sd1pXNXVaWEl1WTI5dEwyVmhjMmx1Wnk5Y2JpQWdJQ0FnSUNBZ1hHNGdJQ0FnUW1WNmFXVnlJR04xY25abElHbHVkR1Z5Y0hKbGRHOXlJR055WldGMFpXUWdabkp2YlNCSFljT3JkR0Z1SUZKbGJtRjFaR1ZoZFNkeklHOXlhV2RwYm1Gc0lFSmxlbWxsY2tWaGMybHVaeUFnWEc0Z0lDQWdhSFIwY0hNNkx5OW5hWFJvZFdJdVkyOXRMMmR5WlM5aVpYcHBaWEl0WldGemFXNW5MMkpzYjJJdmJXRnpkR1Z5TDJsdVpHVjRMbXB6SUNCY2JpQWdJQ0JvZEhSd2N6b3ZMMmRwZEdoMVlpNWpiMjB2WjNKbEwySmxlbWxsY2kxbFlYTnBibWN2WW14dllpOXRZWE4wWlhJdlRFbERSVTVUUlZ4dVhHNGdJQ0FnUVc1MGFXTnBjR0YwWlNCbFlYTnBibWNnWTNKbFlYUmxaQ0JpZVNCRmJHeHBiM1FnUjJsdWIxeHVJQ0FnSUdoMGRIQnpPaTh2ZEhkcGRIUmxjaTVqYjIwdlJXeHNhVzkwUjJWdWIxeHVLaTljYmk4dklFbHRjRzl5ZEhOY2JtbHRjRzl5ZENCamNtVmhkR1ZGWVhOcGJtY2dabkp2YlNBbkxpOWpjbVZoZEdVdFpXRnphVzVuSnp0Y2JtbHRjRzl5ZENCN0lHVmhZMmdnZlNCbWNtOXRJQ2N1TGk4dUxpOXBibU12ZFhScGJITW5PMXh1WEc0dkx5QldZV3gxWlhOY2JtTnZibk4wSUVSRlJrRlZURlJmUWtGRFMxOVRWRkpGVGtkVVNDQTlJREV1TlRJMU8xeHVZMjl1YzNRZ1JFVkdRVlZNVkY5UVQxZGZVMVJTUlU1SFZFZ2dQU0F5TzF4dVhHNHZMeUJWZEdsc2FYUjVJR1oxYm1OMGFXOXVjMXh1WTI5dWMzUWdaMlZ1WlhKaGRHVlFiM2RsY2tWaGMybHVaeUE5SUhOMGNtVnVaM1JvSUQwK0lDaHdjbTluY21WemN5d2djM1J5Wlc1bmRHZ3BJRDArSUdKaGMyVkZZWE5wYm1jdVpXRnpaU2h3Y205bmNtVnpjeXdnYzNSeVpXNW5kR2dwTzF4dVhHNHZLbHh1SUNBZ0lFVmhZMmdnYjJZZ2RHaGxjMlVnWW1GelpTQm1kVzVqZEdsdmJuTWdhWE1nWVc0Z1pXRnpaVWx1WEc0Z0lDQWdYRzRnSUNBZ1QyNGdhVzVwZEN3Z2QyVWdkWE5sSUM1dGFYSnliM0lnWVc1a0lDNXlaWFpsY25ObElIUnZJR2RsYm1WeVlYUmxJR1ZoYzJWSmJrOTFkQ0JoYm1SY2JpQWdJQ0JsWVhObFQzVjBJR1oxYm1OMGFXOXVjeUJ5WlhOd1pXTjBhWFpsYkhrdVhHNHFMMXh1YkdWMElHSmhjMlZGWVhOcGJtY2dQU0I3WEc0Z0lDQWdaV0Z6WlRvZ0tIQnliMmR5WlhOekxDQnpkSEpsYm1kMGFDQTlJRVJGUmtGVlRGUmZVRTlYWDFOVVVrVk9SMVJJS1NBOVBpQndjbTluY21WemN5QXFLaUJ6ZEhKbGJtZDBhQ3hjYmlBZ0lDQmphWEpqT2lCd2NtOW5jbVZ6Y3lBOVBpQXhJQzBnVFdGMGFDNXphVzRvVFdGMGFDNWhZMjl6S0hCeWIyZHlaWE56S1Nrc1hHNGdJQ0FnWW1GamF6b2dLSEJ5YjJkeVpYTnpMQ0J6ZEhKbGJtZDBhQ0E5SUVSRlJrRlZURlJmUWtGRFMxOVRWRkpGVGtkVVNDa2dQVDRnS0hCeWIyZHlaWE56SUNvZ2NISnZaM0psYzNNcElDb2dLQ2h6ZEhKbGJtZDBhQ0FySURFcElDb2djSEp2WjNKbGMzTWdMU0J6ZEhKbGJtZDBhQ2xjYm4wN1hHNWNibHNuWTNWaWFXTW5MQ0FuY1hWaGNuUW5MQ0FuY1hWcGJuUW5YUzVtYjNKRllXTm9LQ2hsWVhOcGJtZE9ZVzFsTENCcEtTQTlQaUJpWVhObFJXRnphVzVuVzJWaGMybHVaMDVoYldWZElEMGdaMlZ1WlhKaGRHVlFiM2RsY2tWaGMybHVaeWhwSUNzZ015a3BPMXh1WEc0dkx5QkhaVzVsY21GMFpTQnBiaTl2ZFhRdmFXNVBkWFFnZG1GeWFXRjBhVzl1YzF4dVpXRmphQ2hpWVhObFJXRnphVzVuTENBb1ltRnpaVVZoYzJVc0lHdGxlU2tnUFQ0Z2UxeHVJQ0FnSUd4bGRDQmxZWE5wYm1kR2RXNWpkR2x2YmlBOUlHTnlaV0YwWlVWaGMybHVaeWhpWVhObFJXRnpaU2s3WEc0Z0lDQWdZbUZ6WlVWaGMybHVaMXRnSkh0clpYbDlTVzVnWFNBOUlHVmhjMmx1WjBaMWJtTjBhVzl1TG1sdU8xeHVJQ0FnSUdKaGMyVkZZWE5wYm1kYllDUjdhMlY1ZlU5MWRHQmRJRDBnWldGemFXNW5SblZ1WTNScGIyNHViM1YwTzF4dUlDQWdJR0poYzJWRllYTnBibWRiWUNSN2EyVjVmVWx1VDNWMFlGMGdQU0JsWVhOcGJtZEdkVzVqZEdsdmJpNXBiazkxZER0Y2JuMHBPMXh1WEc1aVlYTmxSV0Z6YVc1bkxteHBibVZoY2lBOUlIQnliMmR5WlhOeklEMCtJSEJ5YjJkeVpYTnpPMXh1WW1GelpVVmhjMmx1Wnk1aGJuUnBZMmx3WVhSbElEMGdLSEJ5YjJkeVpYTnpMQ0J6ZEhKbGJtZDBhQ0E5SUVSRlJrRlZURlJmUWtGRFMxOVRWRkpGVGtkVVNDa2dQVDVjYmlBZ0lDQW9LSEJ5YjJkeVpYTnpLajB5S1NBOElERXBJRDhnTUM0MUlDb2dZbUZ6WlVWaGMybHVaeTVpWVdOclNXNG9jSEp2WjNKbGMzTXNJSE4wY21WdVozUm9LU0E2SUNBd0xqVWdLaUFvTWlBdElFMWhkR2d1Y0c5M0tESXNJQzB4TUNBcUlDaHdjbTluY21WemN5QXRJREVwS1NrN1hHNWNibVY0Y0c5eWRDQmtaV1poZFd4MElHSmhjMlZGWVhOcGJtYzdJbDE5XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9hY3Rpb25zL3R3ZWVuL3ByZXNldC1lYXNpbmcuanNcbiAqKiBtb2R1bGUgaWQgPSAzNVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xudmFyIFRSQU5TTEFURSA9ICd0cmFuc2xhdGUnO1xuXG5leHBvcnRzLmRlZmF1bHQgPSB7XG4gICAgeDogVFJBTlNMQVRFICsgJ1gnLFxuICAgIHk6IFRSQU5TTEFURSArICdZJyxcbiAgICB6OiBUUkFOU0xBVEUgKyAnWidcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5OMFlYUmxMVzFoY0M1cWN5SmRMQ0p1WVcxbGN5STZXMTBzSW0xaGNIQnBibWR6SWpvaU96czdRVUZCUVN4SlFVRk5MRk5CUVZNc1IwRkJSeXhYUVVGWExFTkJRVU03TzJ0Q1FVVm1PMEZCUTFnc1MwRkJReXhGUVVGRkxGTkJRVk1zUjBGQlJ5eEhRVUZITzBGQlEyeENMRXRCUVVNc1JVRkJSU3hUUVVGVExFZEJRVWNzUjBGQlJ6dEJRVU5zUWl4TFFVRkRMRVZCUVVVc1UwRkJVeXhIUVVGSExFZEJRVWM3UTBGRGNrSWlMQ0ptYVd4bElqb2ljM1JoZEdVdGJXRndMbXB6SWl3aWMyOTFjbU5sYzBOdmJuUmxiblFpT2xzaVkyOXVjM1FnVkZKQlRsTk1RVlJGSUQwZ0ozUnlZVzV6YkdGMFpTYzdYRzVjYm1WNGNHOXlkQ0JrWldaaGRXeDBJSHRjYmlBZ0lDQjRPaUJVVWtGT1UweEJWRVVnS3lBbldDY3NYRzRnSUNBZ2VUb2dWRkpCVGxOTVFWUkZJQ3NnSjFrbkxGeHVJQ0FnSUhvNklGUlNRVTVUVEVGVVJTQXJJQ2RhSjF4dWZUc2lYWDA9XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9yZW5kZXIvY3NzL3N0YXRlLW1hcC5qc1xuICoqIG1vZHVsZSBpZCA9IDM2XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfYW5nbGUgPSByZXF1aXJlKCcuLi8uLi92YWx1ZS10eXBlcy9hbmdsZScpO1xuXG52YXIgX2FuZ2xlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2FuZ2xlKTtcblxudmFyIF9hbHBoYSA9IHJlcXVpcmUoJy4uLy4uL3ZhbHVlLXR5cGVzL2FscGhhJyk7XG5cbnZhciBfYWxwaGEyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfYWxwaGEpO1xuXG52YXIgX2F4ZXMgPSByZXF1aXJlKCcuLi8uLi92YWx1ZS10eXBlcy9heGVzJyk7XG5cbnZhciBfYXhlczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9heGVzKTtcblxudmFyIF9jb2xvciA9IHJlcXVpcmUoJy4uLy4uL3ZhbHVlLXR5cGVzL2NvbG9yJyk7XG5cbnZhciBfY29sb3IyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY29sb3IpO1xuXG52YXIgX3NjYWxlID0gcmVxdWlyZSgnLi4vLi4vdmFsdWUtdHlwZXMvc2NhbGUnKTtcblxudmFyIF9zY2FsZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9zY2FsZSk7XG5cbnZhciBfc2hhZG93ID0gcmVxdWlyZSgnLi4vLi4vdmFsdWUtdHlwZXMvc2hhZG93Jyk7XG5cbnZhciBfc2hhZG93MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3NoYWRvdyk7XG5cbnZhciBfcG9zaXRpb25zID0gcmVxdWlyZSgnLi4vLi4vdmFsdWUtdHlwZXMvcG9zaXRpb25zJyk7XG5cbnZhciBfcG9zaXRpb25zMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3Bvc2l0aW9ucyk7XG5cbnZhciBfcHggPSByZXF1aXJlKCcuLi8uLi92YWx1ZS10eXBlcy9weCcpO1xuXG52YXIgX3B4MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3B4KTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZXhwb3J0cy5kZWZhdWx0ID0ge1xuICAgIC8vIENvbG9yIHByb3BzXG4gICAgY29sb3I6IF9jb2xvcjIuZGVmYXVsdCxcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IF9jb2xvcjIuZGVmYXVsdCxcbiAgICBvdXRsaW5lQ29sb3I6IF9jb2xvcjIuZGVmYXVsdCxcbiAgICBmaWxsOiBfY29sb3IyLmRlZmF1bHQsXG4gICAgc3Ryb2tlOiBfY29sb3IyLmRlZmF1bHQsXG5cbiAgICAvLyBCb3JkZXIgcHJvcHNcbiAgICBib3JkZXJDb2xvcjogX2NvbG9yMi5kZWZhdWx0LFxuICAgIGJvcmRlclRvcENvbG9yOiBfY29sb3IyLmRlZmF1bHQsXG4gICAgYm9yZGVyUmlnaHRDb2xvcjogX2NvbG9yMi5kZWZhdWx0LFxuICAgIGJvcmRlckJvdHRvbUNvbG9yOiBfY29sb3IyLmRlZmF1bHQsXG4gICAgYm9yZGVyTGVmdENvbG9yOiBfY29sb3IyLmRlZmF1bHQsXG4gICAgYm9yZGVyUmFkaXVzOiBfcHgyLmRlZmF1bHQsXG5cbiAgICAvLyBQb3NpdGlvbmluZ1xuICAgIG1hcmdpbjogX3Bvc2l0aW9uczIuZGVmYXVsdCxcbiAgICBwYWRkaW5nOiBfcG9zaXRpb25zMi5kZWZhdWx0LFxuICAgIHdpZHRoOiBfcHgyLmRlZmF1bHQsXG4gICAgaGVpZ2h0OiBfcHgyLmRlZmF1bHQsXG5cbiAgICAvLyBBeGVzXG4gICAgYmFja2dyb3VuZFBvc2l0aW9uOiBfYXhlczIuZGVmYXVsdCxcbiAgICBwZXJzcGVjdGl2ZU9yaWdpbjogX2F4ZXMyLmRlZmF1bHQsXG4gICAgdHJhbnNmb3JtT3JpZ2luOiBfYXhlczIuZGVmYXVsdCxcblxuICAgIC8vIFNoYWRvd3NcbiAgICB0ZXh0U2hhZG93OiBfc2hhZG93Mi5kZWZhdWx0LFxuICAgIGJveFNoYWRvdzogX3NoYWRvdzIuZGVmYXVsdCxcblxuICAgIC8vIFRyYW5zZm9ybSBwcm9wZXJ0aWVzXG4gICAgcm90YXRlOiBfYW5nbGUyLmRlZmF1bHQsXG4gICAgcm90YXRlWDogX2FuZ2xlMi5kZWZhdWx0LFxuICAgIHJvdGF0ZVk6IF9hbmdsZTIuZGVmYXVsdCxcbiAgICByb3RhdGVaOiBfYW5nbGUyLmRlZmF1bHQsXG4gICAgc2NhbGU6IF9zY2FsZTIuZGVmYXVsdCxcbiAgICBzY2FsZVg6IF9zY2FsZTIuZGVmYXVsdCxcbiAgICBzY2FsZVk6IF9zY2FsZTIuZGVmYXVsdCxcbiAgICBzY2FsZVo6IF9zY2FsZTIuZGVmYXVsdCxcbiAgICBza2V3WDogX2FuZ2xlMi5kZWZhdWx0LFxuICAgIHNrZXdZOiBfYW5nbGUyLmRlZmF1bHQsXG4gICAgZGlzdGFuY2U6IF9weDIuZGVmYXVsdCxcbiAgICB0cmFuc2xhdGVYOiBfcHgyLmRlZmF1bHQsXG4gICAgdHJhbnNsYXRlWTogX3B4Mi5kZWZhdWx0LFxuICAgIHRyYW5zbGF0ZVo6IF9weDIuZGVmYXVsdCxcbiAgICBwZXJzcGVjdGl2ZTogX3B4Mi5kZWZhdWx0LFxuICAgIG9wYWNpdHk6IF9hbHBoYTIuZGVmYXVsdFxufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJblpoYkhWbExYUjVjR1V0YldGd0xtcHpJbDBzSW01aGJXVnpJanBiWFN3aWJXRndjR2x1WjNNaU9pSTdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPMnRDUVZObE96dEJRVVZZTEZOQlFVc3NhVUpCUVU4N1FVRkRXaXh0UWtGQlpTeHBRa0ZCVHp0QlFVTjBRaXhuUWtGQldTeHBRa0ZCVHp0QlFVTnVRaXhSUVVGSkxHbENRVUZQTzBGQlExZ3NWVUZCVFN4cFFrRkJUenM3TzBGQlIySXNaVUZCVnl4cFFrRkJUenRCUVVOc1FpeHJRa0ZCWXl4cFFrRkJUenRCUVVOeVFpeHZRa0ZCWjBJc2FVSkJRVTg3UVVGRGRrSXNjVUpCUVdsQ0xHbENRVUZQTzBGQlEzaENMRzFDUVVGbExHbENRVUZQTzBGQlEzUkNMR2RDUVVGWkxHTkJRVWs3T3p0QlFVZG9RaXhWUVVGTkxIRkNRVUZYTzBGQlEycENMRmRCUVU4c2NVSkJRVmM3UVVGRGJFSXNVMEZCU3l4alFVRkpPMEZCUTFRc1ZVRkJUU3hqUVVGSk96czdRVUZIVml4elFrRkJhMElzWjBKQlFVMDdRVUZEZUVJc2NVSkJRV2xDTEdkQ1FVRk5PMEZCUTNaQ0xHMUNRVUZsTEdkQ1FVRk5PenM3UVVGSGNrSXNZMEZCVlN4clFrRkJVVHRCUVVOc1FpeGhRVUZUTEd0Q1FVRlJPenM3UVVGSGFrSXNWVUZCVFN4cFFrRkJUenRCUVVOaUxGZEJRVThzYVVKQlFVODdRVUZEWkN4WFFVRlBMR2xDUVVGUE8wRkJRMlFzVjBGQlR5eHBRa0ZCVHp0QlFVTmtMRk5CUVVzc2FVSkJRVTg3UVVGRFdpeFZRVUZOTEdsQ1FVRlBPMEZCUTJJc1ZVRkJUU3hwUWtGQlR6dEJRVU5pTEZWQlFVMHNhVUpCUVU4N1FVRkRZaXhUUVVGTExHbENRVUZQTzBGQlExb3NVMEZCU3l4cFFrRkJUenRCUVVOYUxGbEJRVkVzWTBGQlNUdEJRVU5hTEdOQlFWVXNZMEZCU1R0QlFVTmtMR05CUVZVc1kwRkJTVHRCUVVOa0xHTkJRVlVzWTBGQlNUdEJRVU5rTEdWQlFWY3NZMEZCU1R0QlFVTm1MRmRCUVU4c2FVSkJRVTg3UTBGRGFrSWlMQ0ptYVd4bElqb2lkbUZzZFdVdGRIbHdaUzF0WVhBdWFuTWlMQ0p6YjNWeVkyVnpRMjl1ZEdWdWRDSTZXeUpwYlhCdmNuUWdZVzVuYkdVZ1puSnZiU0FuTGk0dkxpNHZkbUZzZFdVdGRIbHdaWE12WVc1bmJHVW5PMXh1YVcxd2IzSjBJR0ZzY0doaElHWnliMjBnSnk0dUx5NHVMM1poYkhWbExYUjVjR1Z6TDJGc2NHaGhKenRjYm1sdGNHOXlkQ0JoZUdWeklHWnliMjBnSnk0dUx5NHVMM1poYkhWbExYUjVjR1Z6TDJGNFpYTW5PMXh1YVcxd2IzSjBJR052Ykc5eUlHWnliMjBnSnk0dUx5NHVMM1poYkhWbExYUjVjR1Z6TDJOdmJHOXlKenRjYm1sdGNHOXlkQ0J6WTJGc1pTQm1jbTl0SUNjdUxpOHVMaTkyWVd4MVpTMTBlWEJsY3k5elkyRnNaU2M3WEc1cGJYQnZjblFnYzJoaFpHOTNJR1p5YjIwZ0p5NHVMeTR1TDNaaGJIVmxMWFI1Y0dWekwzTm9ZV1J2ZHljN1hHNXBiWEJ2Y25RZ2NHOXphWFJwYjI1eklHWnliMjBnSnk0dUx5NHVMM1poYkhWbExYUjVjR1Z6TDNCdmMybDBhVzl1Y3ljN1hHNXBiWEJ2Y25RZ2NIZ2dabkp2YlNBbkxpNHZMaTR2ZG1Gc2RXVXRkSGx3WlhNdmNIZ25PMXh1WEc1bGVIQnZjblFnWkdWbVlYVnNkQ0I3WEc0Z0lDQWdMeThnUTI5c2IzSWdjSEp2Y0hOY2JpQWdJQ0JqYjJ4dmNqb2dZMjlzYjNJc1hHNGdJQ0FnWW1GamEyZHliM1Z1WkVOdmJHOXlPaUJqYjJ4dmNpeGNiaUFnSUNCdmRYUnNhVzVsUTI5c2IzSTZJR052Ykc5eUxGeHVJQ0FnSUdacGJHdzZJR052Ykc5eUxGeHVJQ0FnSUhOMGNtOXJaVG9nWTI5c2IzSXNYRzVjYmlBZ0lDQXZMeUJDYjNKa1pYSWdjSEp2Y0hOY2JpQWdJQ0JpYjNKa1pYSkRiMnh2Y2pvZ1kyOXNiM0lzWEc0Z0lDQWdZbTl5WkdWeVZHOXdRMjlzYjNJNklHTnZiRzl5TEZ4dUlDQWdJR0p2Y21SbGNsSnBaMmgwUTI5c2IzSTZJR052Ykc5eUxGeHVJQ0FnSUdKdmNtUmxja0p2ZEhSdmJVTnZiRzl5T2lCamIyeHZjaXhjYmlBZ0lDQmliM0prWlhKTVpXWjBRMjlzYjNJNklHTnZiRzl5TEZ4dUlDQWdJR0p2Y21SbGNsSmhaR2wxY3pvZ2NIZ3NYRzVjYmlBZ0lDQXZMeUJRYjNOcGRHbHZibWx1WjF4dUlDQWdJRzFoY21kcGJqb2djRzl6YVhScGIyNXpMRnh1SUNBZ0lIQmhaR1JwYm1jNklIQnZjMmwwYVc5dWN5eGNiaUFnSUNCM2FXUjBhRG9nY0hnc1hHNGdJQ0FnYUdWcFoyaDBPaUJ3ZUN4Y2JseHVJQ0FnSUM4dklFRjRaWE5jYmlBZ0lDQmlZV05yWjNKdmRXNWtVRzl6YVhScGIyNDZJR0Y0WlhNc1hHNGdJQ0FnY0dWeWMzQmxZM1JwZG1WUGNtbG5hVzQ2SUdGNFpYTXNYRzRnSUNBZ2RISmhibk5tYjNKdFQzSnBaMmx1T2lCaGVHVnpMRnh1WEc0Z0lDQWdMeThnVTJoaFpHOTNjMXh1SUNBZ0lIUmxlSFJUYUdGa2IzYzZJSE5vWVdSdmR5eGNiaUFnSUNCaWIzaFRhR0ZrYjNjNklITm9ZV1J2ZHl3Z0lDQmNibHh1SUNBZ0lDOHZJRlJ5WVc1elptOXliU0J3Y205d1pYSjBhV1Z6WEc0Z0lDQWdjbTkwWVhSbE9pQmhibWRzWlN4Y2JpQWdJQ0J5YjNSaGRHVllPaUJoYm1kc1pTeGNiaUFnSUNCeWIzUmhkR1ZaT2lCaGJtZHNaU3hjYmlBZ0lDQnliM1JoZEdWYU9pQmhibWRzWlN4Y2JpQWdJQ0J6WTJGc1pUb2djMk5oYkdVc1hHNGdJQ0FnYzJOaGJHVllPaUJ6WTJGc1pTeGNiaUFnSUNCelkyRnNaVms2SUhOallXeGxMRnh1SUNBZ0lITmpZV3hsV2pvZ2MyTmhiR1VzWEc0Z0lDQWdjMnRsZDFnNklHRnVaMnhsTEZ4dUlDQWdJSE5yWlhkWk9pQmhibWRzWlN4Y2JpQWdJQ0JrYVhOMFlXNWpaVG9nY0hnc1hHNGdJQ0FnZEhKaGJuTnNZWFJsV0RvZ2NIZ3NYRzRnSUNBZ2RISmhibk5zWVhSbFdUb2djSGdzWEc0Z0lDQWdkSEpoYm5Oc1lYUmxXam9nY0hnc1hHNGdJQ0FnY0dWeWMzQmxZM1JwZG1VNklIQjRMRnh1SUNBZ0lHOXdZV05wZEhrNklHRnNjR2hoWEc1OU95SmRmUT09XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9yZW5kZXIvY3NzL3ZhbHVlLXR5cGUtbWFwLmpzXG4gKiogbW9kdWxlIGlkID0gMzdcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbnZhciBjYWNoZSA9IHt9O1xudmFyIHByZWZpeGVzID0gWydXZWJraXQnLCAnTW96JywgJ08nLCAnbXMnLCAnJ107XG52YXIgbnVtUHJlZml4ZXMgPSBwcmVmaXhlcy5sZW5ndGg7XG52YXIgdGVzdEVsZW1lbnQgPSB1bmRlZmluZWQ7XG5cbi8qXG4gICAgVGVzdCBzdHlsZSBwcm9wZXJ0eSBmb3IgcHJlZml4ZWQgdmVyc2lvblxuICAgIFxuICAgIEBwYXJhbSBbc3RyaW5nXTogU3R5bGUgcHJvcGVydHlcbiAgICBAcmV0dXJuIFtzdHJpbmddOiBDYWNoZWQgcHJvcGVydHkgbmFtZVxuKi9cbnZhciB0ZXN0UHJlZml4ID0gZnVuY3Rpb24gKGtleSkge1xuICAgIHRlc3RFbGVtZW50ID0gdGVzdEVsZW1lbnQgfHwgZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICBpZiAocHJvcGVydHlOYW1lQ2FjaGVba2V5XSA9PT0gZmFsc2UpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHByb3BlcnR5TmFtZUNhY2hlW2tleV0gPSBmYWxzZTtcbiAgICB9XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IG51bVByZWZpeGVzOyBpKyspIHtcbiAgICAgICAgdmFyIHByZWZpeCA9IHByZWZpeGVzW2ldLFxuICAgICAgICAgICAgcHJlZml4ZWQgPSBwcmVmaXggPT09ICcnID8ga2V5IDogcHJlZml4ICsga2V5LmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsga2V5LnNsaWNlKDEpO1xuXG4gICAgICAgIGlmIChwcmVmaXhlZCBpbiB0ZXN0RWxlbWVudC5zdHlsZSkge1xuICAgICAgICAgICAgcHJvcGVydHlOYW1lQ2FjaGVba2V5XSA9IHByZWZpeGVkO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHByb3BlcnR5TmFtZUNhY2hlW2tleV07XG59O1xuXG5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbiAoa2V5KSB7XG4gICAgcmV0dXJuIGNhY2hlW2tleV0gfHwgdGVzdFByZWZpeChrZXkpO1xufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbkJ5WldacGVHVnlMbXB6SWwwc0ltNWhiV1Z6SWpwYlhTd2liV0Z3Y0dsdVozTWlPaUk3T3p0QlFVRkJMRWxCUVUwc1MwRkJTeXhIUVVGSExFVkJRVVVzUTBGQlF6dEJRVU5xUWl4SlFVRk5MRkZCUVZFc1IwRkJSeXhEUVVGRExGRkJRVkVzUlVGQlF5eExRVUZMTEVWQlFVTXNSMEZCUnl4RlFVRkRMRWxCUVVrc1JVRkJSU3hGUVVGRkxFTkJRVU1zUTBGQlF6dEJRVU12UXl4SlFVRk5MRmRCUVZjc1IwRkJSeXhSUVVGUkxFTkJRVU1zVFVGQlRTeERRVUZETzBGQlEzQkRMRWxCUVVrc1YwRkJWeXhaUVVGQk96czdPenM3T3p0QlFVRkRMRUZCVVdoQ0xFbEJRVTBzVlVGQlZTeEhRVUZITEZWQlFVTXNSMEZCUnl4RlFVRkxPMEZCUTNoQ0xHVkJRVmNzUjBGQlJ5eFhRVUZYTEVsQlFVa3NVVUZCVVN4RFFVRkRMR0ZCUVdFc1EwRkJReXhMUVVGTExFTkJRVU1zUTBGQlF6czdRVUZGTTBRc1VVRkJTU3hwUWtGQmFVSXNRMEZCUXl4SFFVRkhMRU5CUVVNc1MwRkJTeXhMUVVGTExFVkJRVVU3UVVGRGJFTXNaVUZCVHl4TFFVRkxMRU5CUVVNN1MwRkRhRUlzVFVGQlRUdEJRVU5JTEhsQ1FVRnBRaXhEUVVGRExFZEJRVWNzUTBGQlF5eEhRVUZITEV0QlFVc3NRMEZCUXp0TFFVTnNRenM3UVVGRlJDeFRRVUZMTEVsQlFVa3NRMEZCUXl4SFFVRkhMRU5CUVVNc1JVRkJSU3hEUVVGRExFZEJRVWNzVjBGQlZ5eEZRVUZGTEVOQlFVTXNSVUZCUlN4RlFVRkZPMEZCUTJ4RExGbEJRVWtzVFVGQlRTeEhRVUZITEZGQlFWRXNRMEZCUXl4RFFVRkRMRU5CUVVNN1dVRkRjRUlzVVVGQlVTeEhRVUZITEVGQlFVTXNUVUZCVFN4TFFVRkxMRVZCUVVVc1IwRkJTU3hIUVVGSExFZEJRVWNzVFVGQlRTeEhRVUZITEVkQlFVY3NRMEZCUXl4TlFVRk5MRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU1zVjBGQlZ5eEZRVUZGTEVkQlFVY3NSMEZCUnl4RFFVRkRMRXRCUVVzc1EwRkJReXhEUVVGRExFTkJRVU1zUTBGQlF6czdRVUZGTTBZc1dVRkJTU3hSUVVGUkxFbEJRVWtzVjBGQlZ5eERRVUZETEV0QlFVc3NSVUZCUlR0QlFVTXZRaXcyUWtGQmFVSXNRMEZCUXl4SFFVRkhMRU5CUVVNc1IwRkJSeXhSUVVGUkxFTkJRVU03VTBGRGNrTTdTMEZEU2pzN1FVRkZSQ3hYUVVGUExHbENRVUZwUWl4RFFVRkRMRWRCUVVjc1EwRkJReXhEUVVGRE8wTkJRMnBETEVOQlFVRTdPMnRDUVVWakxGVkJRVU1zUjBGQlJ6dFhRVUZMTEV0QlFVc3NRMEZCUXl4SFFVRkhMRU5CUVVNc1NVRkJTU3hWUVVGVkxFTkJRVU1zUjBGQlJ5eERRVUZETzBOQlFVRWlMQ0ptYVd4bElqb2ljSEpsWm1sNFpYSXVhbk1pTENKemIzVnlZMlZ6UTI5dWRHVnVkQ0k2V3lKamIyNXpkQ0JqWVdOb1pTQTlJSHQ5TzF4dVkyOXVjM1FnY0hKbFptbDRaWE1nUFNCYkoxZGxZbXRwZENjc0owMXZlaWNzSjA4bkxDZHRjeWNzSUNjblhUdGNibU52Ym5OMElHNTFiVkJ5WldacGVHVnpJRDBnY0hKbFptbDRaWE11YkdWdVozUm9PMXh1YkdWMElIUmxjM1JGYkdWdFpXNTBPMXh1WEc0dktseHVJQ0FnSUZSbGMzUWdjM1I1YkdVZ2NISnZjR1Z5ZEhrZ1ptOXlJSEJ5WldacGVHVmtJSFpsY25OcGIyNWNiaUFnSUNCY2JpQWdJQ0JBY0dGeVlXMGdXM04wY21sdVoxMDZJRk4wZVd4bElIQnliM0JsY25SNVhHNGdJQ0FnUUhKbGRIVnliaUJiYzNSeWFXNW5YVG9nUTJGamFHVmtJSEJ5YjNCbGNuUjVJRzVoYldWY2Jpb3ZYRzVqYjI1emRDQjBaWE4wVUhKbFptbDRJRDBnS0d0bGVTa2dQVDRnZTF4dUlDQWdJSFJsYzNSRmJHVnRaVzUwSUQwZ2RHVnpkRVZzWlcxbGJuUWdmSHdnWkc5amRXMWxiblF1WTNKbFlYUmxSV3hsYldWdWRDZ25aR2wySnlrN1hHNWNiaUFnSUNCcFppQW9jSEp2Y0dWeWRIbE9ZVzFsUTJGamFHVmJhMlY1WFNBOVBUMGdabUZzYzJVcElIdGNiaUFnSUNBZ0lDQWdjbVYwZFhKdUlHWmhiSE5sTzF4dUlDQWdJSDBnWld4elpTQjdYRzRnSUNBZ0lDQWdJSEJ5YjNCbGNuUjVUbUZ0WlVOaFkyaGxXMnRsZVYwZ1BTQm1ZV3h6WlR0Y2JpQWdJQ0I5WEc1Y2JpQWdJQ0JtYjNJZ0tIWmhjaUJwSUQwZ01Ec2dhU0E4SUc1MWJWQnlaV1pwZUdWek95QnBLeXNwSUh0Y2JpQWdJQ0FnSUNBZ2RtRnlJSEJ5WldacGVDQTlJSEJ5WldacGVHVnpXMmxkTEZ4dUlDQWdJQ0FnSUNBZ0lDQWdjSEpsWm1sNFpXUWdQU0FvY0hKbFptbDRJRDA5UFNBbkp5a2dQeUJyWlhrZ09pQndjbVZtYVhnZ0t5QnJaWGt1WTJoaGNrRjBLREFwTG5SdlZYQndaWEpEWVhObEtDa2dLeUJyWlhrdWMyeHBZMlVvTVNrN1hHNWNiaUFnSUNBZ0lDQWdhV1lnS0hCeVpXWnBlR1ZrSUdsdUlIUmxjM1JGYkdWdFpXNTBMbk4wZVd4bEtTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNCd2NtOXdaWEowZVU1aGJXVkRZV05vWlZ0clpYbGRJRDBnY0hKbFptbDRaV1E3WEc0Z0lDQWdJQ0FnSUgxY2JpQWdJQ0I5WEc0Z0lDQWdYRzRnSUNBZ2NtVjBkWEp1SUhCeWIzQmxjblI1VG1GdFpVTmhZMmhsVzJ0bGVWMDdYRzU5WEc1Y2JtVjRjRzl5ZENCa1pXWmhkV3gwSUNoclpYa3BJRDArSUdOaFkyaGxXMnRsZVYwZ2ZId2dkR1Z6ZEZCeVpXWnBlQ2hyWlhrcE95SmRmUT09XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9yZW5kZXIvY3NzL3ByZWZpeGVyLmpzXG4gKiogbW9kdWxlIGlkID0gMzhcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF91dGlscyA9IHJlcXVpcmUoJy4uLy4uL2luYy91dGlscycpO1xuXG52YXIgX3RyYW5zZm9ybVByb3BzID0gcmVxdWlyZSgnLi90cmFuc2Zvcm0tcHJvcHMnKTtcblxudmFyIF90cmFuc2Zvcm1Qcm9wczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF90cmFuc2Zvcm1Qcm9wcyk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbnZhciBUUkFOU0xBVEVfWiA9ICd0cmFuc2xhdGVaJztcblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gKHN0YXRlLCBkaXNhYmxlSGFyZHdhcmVBY2NlbGVyYXRpb24pIHtcbiAgICB2YXIgcHJvcGVydHlTdHJpbmcgPSAnJztcbiAgICB2YXIgdHJhbnNmb3JtU3RyaW5nID0gJyc7XG4gICAgdmFyIHRyYW5zZm9ybUhhc1ogPSBmYWxzZTtcblxuICAgICgwLCBfdXRpbHMuZWFjaCkoc3RhdGUsIGZ1bmN0aW9uICh2YWx1ZSwga2V5KSB7XG4gICAgICAgIGlmIChfdHJhbnNmb3JtUHJvcHMyLmRlZmF1bHRba2V5XSkge1xuICAgICAgICAgICAgdHJhbnNmb3JtU3RyaW5nICs9IGtleSArICcoJyArIHZhbHVlICsgJykgJztcbiAgICAgICAgICAgIHRyYW5zZm9ybUhhc1ogPSBrZXkgPT09IFRSQU5TTEFURV9aID8gdHJ1ZSA6IHRyYW5zZm9ybUhhc1o7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBwcm9wZXJ0eVN0cmluZyArPSAnOycgKyBrZXkgKyAnOicgKyB2YWx1ZTtcbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgaWYgKHRyYW5zZm9ybVN0cmluZyAhPT0gJycpIHtcbiAgICAgICAgaWYgKCF0cmFuc2Zvcm1IYXNaICYmICFkaXNhYmxlSGFyZHdhcmVBY2NlbGVyYXRpb24pIHtcbiAgICAgICAgICAgIHRyYW5zZm9ybVN0cmluZyArPSBUUkFOU0xBVEVfWiArICcoMHB4KSc7XG4gICAgICAgIH1cblxuICAgICAgICBwcm9wZXJ0eVN0cmluZyArPSAnO3RyYW5zZm9ybTonICsgdHJhbnNmb3JtU3RyaW5nO1xuICAgIH1cblxuICAgIHJldHVybiBwcm9wZXJ0eVN0cmluZztcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW1KMWFXeGtMbXB6SWwwc0ltNWhiV1Z6SWpwYlhTd2liV0Z3Y0dsdVozTWlPaUk3T3pzN096czdPenM3T3p0QlFVZEJMRWxCUVUwc1YwRkJWeXhIUVVGSExGbEJRVmtzUTBGQlF6czdhMEpCUld4Q0xGVkJRVU1zUzBGQlN5eEZRVUZGTERKQ1FVRXlRaXhGUVVGTE8wRkJRMjVFTEZGQlFVa3NZMEZCWXl4SFFVRkhMRVZCUVVVc1EwRkJRenRCUVVONFFpeFJRVUZKTEdWQlFXVXNSMEZCUnl4RlFVRkZMRU5CUVVNN1FVRkRla0lzVVVGQlNTeGhRVUZoTEVkQlFVY3NTMEZCU3l4RFFVRkRPenRCUVVVeFFpeGxRVlpMTEVsQlFVa3NSVUZWU2l4TFFVRkxMRVZCUVVVc1ZVRkJReXhMUVVGTExFVkJRVVVzUjBGQlJ5eEZRVUZMTzBGQlEzaENMRmxCUVVrc2VVSkJRV1VzUjBGQlJ5eERRVUZETEVWQlFVVTdRVUZEY2tJc01rSkJRV1VzU1VGQlNTeEhRVUZITEVkQlFVY3NSMEZCUnl4SFFVRkhMRXRCUVVzc1IwRkJSeXhKUVVGSkxFTkJRVU03UVVGRE5VTXNlVUpCUVdFc1IwRkJSeXhCUVVGRExFZEJRVWNzUzBGQlN5eFhRVUZYTEVkQlFVa3NTVUZCU1N4SFFVRkhMR0ZCUVdFc1EwRkJRenRUUVVWb1JTeE5RVUZOTzBGQlEwZ3NNRUpCUVdNc1NVRkJTU3hIUVVGSExFZEJRVWNzUjBGQlJ5eEhRVUZITEVkQlFVY3NSMEZCUnl4TFFVRkxMRU5CUVVNN1UwRkROME03UzBGRFNpeERRVUZETEVOQlFVTTdPMEZCUlVnc1VVRkJTU3hsUVVGbExFdEJRVXNzUlVGQlJTeEZRVUZGTzBGQlEzaENMRmxCUVVrc1EwRkJReXhoUVVGaExFbEJRVWtzUTBGQlF5d3lRa0ZCTWtJc1JVRkJSVHRCUVVOb1JDd3lRa0ZCWlN4SlFVRkpMRmRCUVZjc1IwRkJSeXhQUVVGUExFTkJRVU03VTBGRE5VTTdPMEZCUlVRc2MwSkJRV01zU1VGQlNTeGhRVUZoTEVkQlFVY3NaVUZCWlN4RFFVRkRPMHRCUTNKRU96dEJRVVZFTEZkQlFVOHNZMEZCWXl4RFFVRkRPME5CUTNwQ0lpd2labWxzWlNJNkltSjFhV3hrTG1weklpd2ljMjkxY21ObGMwTnZiblJsYm5RaU9sc2lhVzF3YjNKMElIc2daV0ZqYUNCOUlHWnliMjBnSnk0dUx5NHVMMmx1WXk5MWRHbHNjeWM3WEc1cGJYQnZjblFnZEhKaGJuTm1iM0p0VUhKdmNITWdabkp2YlNBbkxpOTBjbUZ1YzJadmNtMHRjSEp2Y0hNbk8xeHVYRzVqYjI1emRDQlVVa0ZPVTB4QlZFVmZXaUE5SUNkMGNtRnVjMnhoZEdWYUp6dGNibHh1Wlhod2IzSjBJR1JsWm1GMWJIUWdLSE4wWVhSbExDQmthWE5oWW14bFNHRnlaSGRoY21WQlkyTmxiR1Z5WVhScGIyNHBJRDArSUh0Y2JpQWdJQ0JzWlhRZ2NISnZjR1Z5ZEhsVGRISnBibWNnUFNBbkp6dGNiaUFnSUNCc1pYUWdkSEpoYm5ObWIzSnRVM1J5YVc1bklEMGdKeWM3WEc0Z0lDQWdiR1YwSUhSeVlXNXpabTl5YlVoaGMxb2dQU0JtWVd4elpUdGNibHh1SUNBZ0lHVmhZMmdvYzNSaGRHVXNJQ2gyWVd4MVpTd2dhMlY1S1NBOVBpQjdYRzRnSUNBZ0lDQWdJR2xtSUNoMGNtRnVjMlp2Y20xUWNtOXdjMXRyWlhsZEtTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNCMGNtRnVjMlp2Y20xVGRISnBibWNnS3owZ2EyVjVJQ3NnSnlnbklDc2dkbUZzZFdVZ0t5QW5LU0FuTzF4dUlDQWdJQ0FnSUNBZ0lDQWdkSEpoYm5ObWIzSnRTR0Z6V2lBOUlDaHJaWGtnUFQwOUlGUlNRVTVUVEVGVVJWOWFLU0EvSUhSeWRXVWdPaUIwY21GdWMyWnZjbTFJWVhOYU8xeHVYRzRnSUNBZ0lDQWdJSDBnWld4elpTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNCd2NtOXdaWEowZVZOMGNtbHVaeUFyUFNBbk95Y2dLeUJyWlhrZ0t5QW5PaWNnS3lCMllXeDFaVHRjYmlBZ0lDQWdJQ0FnZlZ4dUlDQWdJSDBwTzF4dVhHNGdJQ0FnYVdZZ0tIUnlZVzV6Wm05eWJWTjBjbWx1WnlBaFBUMGdKeWNwSUh0Y2JpQWdJQ0FnSUNBZ2FXWWdLQ0YwY21GdWMyWnZjbTFJWVhOYUlDWW1JQ0ZrYVhOaFlteGxTR0Z5WkhkaGNtVkJZMk5sYkdWeVlYUnBiMjRwSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJSFJ5WVc1elptOXliVk4wY21sdVp5QXJQU0JVVWtGT1UweEJWRVZmV2lBcklDY29NSEI0S1NjN1hHNGdJQ0FnSUNBZ0lIMWNibHh1SUNBZ0lDQWdJQ0J3Y205d1pYSjBlVk4wY21sdVp5QXJQU0FuTzNSeVlXNXpabTl5YlRvbklDc2dkSEpoYm5ObWIzSnRVM1J5YVc1bk8xeHVJQ0FnSUgxY2JseHVJQ0FnSUhKbGRIVnliaUJ3Y205d1pYSjBlVk4wY21sdVp6dGNibjBnSWwxOVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvcmVuZGVyL2Nzcy9idWlsZC5qc1xuICoqIG1vZHVsZSBpZCA9IDM5XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfYWxwaGEgPSByZXF1aXJlKCcuLi8uLi92YWx1ZS10eXBlcy9hbHBoYScpO1xuXG52YXIgX2FscGhhMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2FscGhhKTtcblxudmFyIF9heGVzID0gcmVxdWlyZSgnLi4vLi4vdmFsdWUtdHlwZXMvYXhlcycpO1xuXG52YXIgX2F4ZXMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfYXhlcyk7XG5cbnZhciBfY29sb3IgPSByZXF1aXJlKCcuLi8uLi92YWx1ZS10eXBlcy9jb2xvcicpO1xuXG52YXIgX2NvbG9yMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NvbG9yKTtcblxudmFyIF9jb21wbGV4ID0gcmVxdWlyZSgnLi4vLi4vdmFsdWUtdHlwZXMvY29tcGxleCcpO1xuXG52YXIgX2NvbXBsZXgyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY29tcGxleCk7XG5cbnZhciBfc2NhbGUgPSByZXF1aXJlKCcuLi8uLi92YWx1ZS10eXBlcy9zY2FsZScpO1xuXG52YXIgX3NjYWxlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3NjYWxlKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZXhwb3J0cy5kZWZhdWx0ID0ge1xuICAgIGZpbGw6IF9jb2xvcjIuZGVmYXVsdCxcbiAgICBzdHJva2U6IF9jb2xvcjIuZGVmYXVsdCxcbiAgICBzY2FsZTogX3NjYWxlMi5kZWZhdWx0LFxuICAgIHNjYWxlWDogX3NjYWxlMi5kZWZhdWx0LFxuICAgIHNjYWxlWTogX3NjYWxlMi5kZWZhdWx0LFxuICAgIHRyYW5zZm9ybU9yaWdpbjogX2F4ZXMyLmRlZmF1bHQsXG4gICAgZDogX2NvbXBsZXgyLmRlZmF1bHQsXG4gICAgb3BhY2l0eTogX2FscGhhMi5kZWZhdWx0LFxuICAgIGZpbGxPcGFjaXR5OiBfYWxwaGEyLmRlZmF1bHQsXG4gICAgc3Ryb2tlT3BhY2l0eTogX2FscGhhMi5kZWZhdWx0XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluWmhiSFZsTFhSNWNHVXRiV0Z3TG1weklsMHNJbTVoYldWeklqcGJYU3dpYldGd2NHbHVaM01pT2lJN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3TzJ0Q1FVMWxPMEZCUTFnc1VVRkJTU3hwUWtGQlR6dEJRVU5ZTEZWQlFVMHNhVUpCUVU4N1FVRkRZaXhUUVVGTExHbENRVUZQTzBGQlExb3NWVUZCVFN4cFFrRkJUenRCUVVOaUxGVkJRVTBzYVVKQlFVODdRVUZEWWl4dFFrRkJaU3huUWtGQlRUdEJRVU55UWl4TFFVRkRMRzFDUVVGVE8wRkJRMVlzVjBGQlR5eHBRa0ZCVHp0QlFVTmtMR1ZCUVZjc2FVSkJRVTg3UVVGRGJFSXNhVUpCUVdFc2FVSkJRVTg3UTBGRGRrSWlMQ0ptYVd4bElqb2lkbUZzZFdVdGRIbHdaUzF0WVhBdWFuTWlMQ0p6YjNWeVkyVnpRMjl1ZEdWdWRDSTZXeUpwYlhCdmNuUWdZV3h3YUdFZ1puSnZiU0FuTGk0dkxpNHZkbUZzZFdVdGRIbHdaWE12WVd4d2FHRW5PMXh1YVcxd2IzSjBJR0Y0WlhNZ1puSnZiU0FuTGk0dkxpNHZkbUZzZFdVdGRIbHdaWE12WVhobGN5YzdYRzVwYlhCdmNuUWdZMjlzYjNJZ1puSnZiU0FuTGk0dkxpNHZkbUZzZFdVdGRIbHdaWE12WTI5c2IzSW5PMXh1YVcxd2IzSjBJR052YlhCc1pYZ2dabkp2YlNBbkxpNHZMaTR2ZG1Gc2RXVXRkSGx3WlhNdlkyOXRjR3hsZUNjN1hHNXBiWEJ2Y25RZ2MyTmhiR1VnWm5KdmJTQW5MaTR2TGk0dmRtRnNkV1V0ZEhsd1pYTXZjMk5oYkdVbk8xeHVYRzVsZUhCdmNuUWdaR1ZtWVhWc2RDQjdYRzRnSUNBZ1ptbHNiRG9nWTI5c2IzSXNYRzRnSUNBZ2MzUnliMnRsT2lCamIyeHZjaXhjYmlBZ0lDQnpZMkZzWlRvZ2MyTmhiR1VzWEc0Z0lDQWdjMk5oYkdWWU9pQnpZMkZzWlN4Y2JpQWdJQ0J6WTJGc1pWazZJSE5qWVd4bExGeHVJQ0FnSUhSeVlXNXpabTl5YlU5eWFXZHBiam9nWVhobGN5eGNiaUFnSUNCa09pQmpiMjF3YkdWNExGeHVJQ0FnSUc5d1lXTnBkSGs2SUdGc2NHaGhMRnh1SUNBZ0lHWnBiR3hQY0dGamFYUjVPaUJoYkhCb1lTeGNiaUFnSUNCemRISnZhMlZQY0dGamFYUjVPaUJoYkhCb1lWeHVmVHNpWFgwPVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvcmVuZGVyL3N2Zy92YWx1ZS10eXBlLW1hcC5qc1xuICoqIG1vZHVsZSBpZCA9IDQwXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzLmRlZmF1bHQgPSBidWlsZDtcblxudmFyIF91dGlscyA9IHJlcXVpcmUoJy4uLy4uL2luYy91dGlscycpO1xuXG52YXIgX3RyYW5zZm9ybVByb3BzID0gcmVxdWlyZSgnLi4vY3NzL3RyYW5zZm9ybS1wcm9wcycpO1xuXG52YXIgX3RyYW5zZm9ybVByb3BzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3RyYW5zZm9ybVByb3BzKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxudmFyIFpFUk9fTk9UX1pFUk8gPSAwLjAwMDE7XG5cbmZ1bmN0aW9uIGJ1aWxkKHN0YXRlLCBvcmlnaW4pIHtcbiAgICB2YXIgcHJvcHMgPSB7fSxcbiAgICAgICAgaGFzVHJhbnNmb3JtID0gZmFsc2UsXG4gICAgICAgIHNjYWxlID0gc3RhdGUuc2NhbGUgIT09IHVuZGVmaW5lZCA/IHN0YXRlLnNjYWxlIHx8IFpFUk9fTk9UX1pFUk8gOiBzdGF0ZS5zY2FsZVggfHwgMSxcbiAgICAgICAgc2NhbGVZID0gc3RhdGUuc2NhbGVZICE9PSB1bmRlZmluZWQgPyBzdGF0ZS5zY2FsZVkgfHwgWkVST19OT1RfWkVSTyA6IHNjYWxlIHx8IDEsXG4gICAgICAgIHRyYW5zZm9ybU9yaWdpblggPSBvcmlnaW4ueCxcbiAgICAgICAgdHJhbnNmb3JtT3JpZ2luWSA9IG9yaWdpbi55LFxuICAgICAgICBzY2FsZVRyYW5zZm9ybVggPSAtdHJhbnNmb3JtT3JpZ2luWCAqIChzY2FsZSAqIDEpLFxuICAgICAgICBzY2FsZVRyYW5zZm9ybVkgPSAtdHJhbnNmb3JtT3JpZ2luWSAqIChzY2FsZVkgKiAxKSxcbiAgICAgICAgc2NhbGVSZXBsYWNlWCA9IHRyYW5zZm9ybU9yaWdpblggLyBzY2FsZSxcbiAgICAgICAgc2NhbGVSZXBsYWNlWSA9IHRyYW5zZm9ybU9yaWdpblkgLyBzY2FsZVksXG4gICAgICAgIHRyYW5zZm9ybSA9IHtcbiAgICAgICAgdHJhbnNsYXRlOiAndHJhbnNsYXRlKCcgKyBzdGF0ZS50cmFuc2xhdGVYICsgJywgJyArIHN0YXRlLnRyYW5zbGF0ZVkgKyAnKSAnLFxuICAgICAgICBzY2FsZTogJ3RyYW5zbGF0ZSgnICsgc2NhbGVUcmFuc2Zvcm1YICsgJywgJyArIHNjYWxlVHJhbnNmb3JtWSArICcpIHNjYWxlKCcgKyBzY2FsZSArICcsICcgKyBzY2FsZVkgKyAnKSB0cmFuc2xhdGUoJyArIHNjYWxlUmVwbGFjZVggKyAnLCAnICsgc2NhbGVSZXBsYWNlWSArICcpICcsXG4gICAgICAgIHJvdGF0ZTogJ3JvdGF0ZSgnICsgc3RhdGUucm90YXRlICsgJywgJyArIHRyYW5zZm9ybU9yaWdpblggKyAnLCAnICsgdHJhbnNmb3JtT3JpZ2luWSArICcpICcsXG4gICAgICAgIHNrZXdYOiAnc2tld1goJyArIHN0YXRlLnNrZXdYICsgJykgJyxcbiAgICAgICAgc2tld1k6ICdza2V3WSgnICsgc3RhdGUuc2tld1kgKyAnKSAnXG4gICAgfTtcblxuICAgICgwLCBfdXRpbHMuZWFjaCkoc3RhdGUsIGZ1bmN0aW9uIChrZXksIHZhbHVlKSB7XG4gICAgICAgIGlmIChfdHJhbnNmb3JtUHJvcHMyLmRlZmF1bHRba2V5XSkge1xuICAgICAgICAgICAgaGFzVHJhbnNmb3JtID0gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHByb3BzWygwLCBfdXRpbHMuY2FtZWxUb0Rhc2gpKGtleSldID0gdmFsdWU7XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIGlmIChoYXNUcmFuc2Zvcm0pIHtcbiAgICAgICAgcHJvcHMudHJhbnNmb3JtID0gJyc7XG5cbiAgICAgICAgKDAsIF91dGlscy5lYWNoKSh0cmFuc2Zvcm0sIGZ1bmN0aW9uIChrZXksIHZhbHVlKSB7XG4gICAgICAgICAgICB2YXIgZGVmYXVsdFZhbHVlID0ga2V5ID09PSAnc2NhbGUnID8gJzEnIDogJzAnO1xuICAgICAgICAgICAgcHJvcHMudHJhbnNmb3JtICs9IHZhbHVlLnJlcGxhY2UoL3VuZGVmaW5lZC9nLCBkZWZhdWx0VmFsdWUpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gcHJvcHM7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW1KMWFXeGtMbXB6SWwwc0ltNWhiV1Z6SWpwYlhTd2liV0Z3Y0dsdVozTWlPaUk3T3p0clFrRkxkMElzUzBGQlN6czdPenM3T3pzN096dEJRVVkzUWl4SlFVRk5MR0ZCUVdFc1IwRkJSeXhOUVVGTkxFTkJRVU03TzBGQlJXUXNVMEZCVXl4TFFVRkxMRU5CUVVNc1MwRkJTeXhGUVVGRkxFMUJRVTBzUlVGQlJUdEJRVU42UXl4UlFVRkpMRXRCUVVzc1IwRkJSeXhGUVVGRk8xRkJRMVlzV1VGQldTeEhRVUZITEV0QlFVczdVVUZEY0VJc1MwRkJTeXhIUVVGSExFdEJRVXNzUTBGQlF5eExRVUZMTEV0QlFVc3NVMEZCVXl4SFFVRkhMRXRCUVVzc1EwRkJReXhMUVVGTExFbEJRVWtzWVVGQllTeEhRVUZITEV0QlFVc3NRMEZCUXl4TlFVRk5MRWxCUVVrc1EwRkJRenRSUVVOd1JpeE5RVUZOTEVkQlFVY3NTMEZCU3l4RFFVRkRMRTFCUVUwc1MwRkJTeXhUUVVGVExFZEJRVWNzUzBGQlN5eERRVUZETEUxQlFVMHNTVUZCU1N4aFFVRmhMRWRCUVVjc1MwRkJTeXhKUVVGSkxFTkJRVU03VVVGRGFFWXNaMEpCUVdkQ0xFZEJRVWNzVFVGQlRTeERRVUZETEVOQlFVTTdVVUZETTBJc1owSkJRV2RDTEVkQlFVY3NUVUZCVFN4RFFVRkRMRU5CUVVNN1VVRkRNMElzWlVGQlpTeEhRVUZITEVOQlFVVXNaMEpCUVdkQ0xFbEJRVWtzUzBGQlN5eEhRVUZITEVOQlFVTXNRMEZCUVN4QlFVRkRPMUZCUTJ4RUxHVkJRV1VzUjBGQlJ5eERRVUZGTEdkQ1FVRm5RaXhKUVVGSkxFMUJRVTBzUjBGQlJ5eERRVUZETEVOQlFVRXNRVUZCUXp0UlFVTnVSQ3hoUVVGaExFZEJRVWNzWjBKQlFXZENMRWRCUVVjc1MwRkJTenRSUVVONFF5eGhRVUZoTEVkQlFVY3NaMEpCUVdkQ0xFZEJRVWNzVFVGQlRUdFJRVU42UXl4VFFVRlRMRWRCUVVjN1FVRkRVaXhwUWtGQlV5eHBRa0ZCWlN4TFFVRkxMRU5CUVVNc1ZVRkJWU3hWUVVGTExFdEJRVXNzUTBGQlF5eFZRVUZWTEU5QlFVazdRVUZEYWtVc1lVRkJTeXhwUWtGQlpTeGxRVUZsTEZWQlFVc3NaVUZCWlN4blFrRkJWeXhMUVVGTExGVkJRVXNzVFVGQlRTeHZRa0ZCWlN4aFFVRmhMRlZCUVVzc1lVRkJZU3hQUVVGSk8wRkJRM0JKTEdOQlFVMHNZMEZCV1N4TFFVRkxMRU5CUVVNc1RVRkJUU3hWUVVGTExHZENRVUZuUWl4VlFVRkxMR2RDUVVGblFpeFBRVUZKTzBGQlF6VkZMR0ZCUVVzc1lVRkJWeXhMUVVGTExFTkJRVU1zUzBGQlN5eFBRVUZKTzBGQlF5OUNMR0ZCUVVzc1lVRkJWeXhMUVVGTExFTkJRVU1zUzBGQlN5eFBRVUZKTzB0QlEyeERMRU5CUVVNN08wRkJSVTRzWlVGNFFrc3NTVUZCU1N4RlFYZENTaXhMUVVGTExFVkJRVVVzVlVGQlF5eEhRVUZITEVWQlFVVXNTMEZCU3l4RlFVRkxPMEZCUTNoQ0xGbEJRVWtzZVVKQlFXVXNSMEZCUnl4RFFVRkRMRVZCUVVVN1FVRkRja0lzZDBKQlFWa3NSMEZCUnl4SlFVRkpMRU5CUVVNN1UwRkRka0lzVFVGQlRUdEJRVU5JTEdsQ1FVRkxMRU5CUVVNc1YwRTFRa2dzVjBGQlZ5eEZRVFJDU1N4SFFVRkhMRU5CUVVNc1EwRkJReXhIUVVGSExFdEJRVXNzUTBGQlF6dFRRVU51UXp0TFFVTktMRU5CUVVNc1EwRkJRenM3UVVGRlNDeFJRVUZKTEZsQlFWa3NSVUZCUlR0QlFVTmtMR0ZCUVVzc1EwRkJReXhUUVVGVExFZEJRVWNzUlVGQlJTeERRVUZET3p0QlFVVnlRaXh0UWtGdVEwTXNTVUZCU1N4RlFXMURRU3hUUVVGVExFVkJRVVVzVlVGQlF5eEhRVUZITEVWQlFVVXNTMEZCU3l4RlFVRkxPMEZCUXpWQ0xHZENRVUZKTEZsQlFWa3NSMEZCUnl4QlFVRkRMRWRCUVVjc1MwRkJTeXhQUVVGUExFZEJRVWtzUjBGQlJ5eEhRVUZITEVkQlFVY3NRMEZCUXp0QlFVTnFSQ3hwUWtGQlN5eERRVUZETEZOQlFWTXNTVUZCU1N4TFFVRkxMRU5CUVVNc1QwRkJUeXhEUVVGRExGbEJRVmtzUlVGQlJTeFpRVUZaTEVOQlFVTXNRMEZCUXp0VFFVTm9SU3hEUVVGRExFTkJRVU03UzBGRFRqczdRVUZGUkN4WFFVRlBMRXRCUVVzc1EwRkJRenREUVVOb1FpSXNJbVpwYkdVaU9pSmlkV2xzWkM1cWN5SXNJbk52ZFhKalpYTkRiMjUwWlc1MElqcGJJbWx0Y0c5eWRDQjdJR1ZoWTJnc0lHTmhiV1ZzVkc5RVlYTm9JSDBnWm5KdmJTQW5MaTR2TGk0dmFXNWpMM1YwYVd4ekp6dGNibWx0Y0c5eWRDQjBjbUZ1YzJadmNtMVFjbTl3Y3lCbWNtOXRJQ2N1TGk5amMzTXZkSEpoYm5ObWIzSnRMWEJ5YjNCekp6dGNibHh1WTI5dWMzUWdXa1ZTVDE5T1QxUmZXa1ZTVHlBOUlEQXVNREF3TVR0Y2JseHVaWGh3YjNKMElHUmxabUYxYkhRZ1puVnVZM1JwYjI0Z1luVnBiR1FvYzNSaGRHVXNJRzl5YVdkcGJpa2dlMXh1SUNBZ0lHeGxkQ0J3Y205d2N5QTlJSHQ5TEZ4dUlDQWdJQ0FnSUNCb1lYTlVjbUZ1YzJadmNtMGdQU0JtWVd4elpTeGNiaUFnSUNBZ0lDQWdjMk5oYkdVZ1BTQnpkR0YwWlM1elkyRnNaU0FoUFQwZ2RXNWtaV1pwYm1Wa0lEOGdjM1JoZEdVdWMyTmhiR1VnZkh3Z1drVlNUMTlPVDFSZldrVlNUeUE2SUhOMFlYUmxMbk5qWVd4bFdDQjhmQ0F4TEZ4dUlDQWdJQ0FnSUNCelkyRnNaVmtnUFNCemRHRjBaUzV6WTJGc1pWa2dJVDA5SUhWdVpHVm1hVzVsWkNBL0lITjBZWFJsTG5OallXeGxXU0I4ZkNCYVJWSlBYMDVQVkY5YVJWSlBJRG9nYzJOaGJHVWdmSHdnTVN4Y2JpQWdJQ0FnSUNBZ2RISmhibk5tYjNKdFQzSnBaMmx1V0NBOUlHOXlhV2RwYmk1NExGeHVJQ0FnSUNBZ0lDQjBjbUZ1YzJadmNtMVBjbWxuYVc1WklEMGdiM0pwWjJsdUxua3NYRzRnSUNBZ0lDQWdJSE5qWVd4bFZISmhibk5tYjNKdFdDQTlJQzBnZEhKaGJuTm1iM0p0VDNKcFoybHVXQ0FxSUNoelkyRnNaU0FxSURFcExGeHVJQ0FnSUNBZ0lDQnpZMkZzWlZSeVlXNXpabTl5YlZrZ1BTQXRJSFJ5WVc1elptOXliVTl5YVdkcGJsa2dLaUFvYzJOaGJHVlpJQ29nTVNrc1hHNGdJQ0FnSUNBZ0lITmpZV3hsVW1Wd2JHRmpaVmdnUFNCMGNtRnVjMlp2Y20xUGNtbG5hVzVZSUM4Z2MyTmhiR1VzWEc0Z0lDQWdJQ0FnSUhOallXeGxVbVZ3YkdGalpWa2dQU0IwY21GdWMyWnZjbTFQY21sbmFXNVpJQzhnYzJOaGJHVlpMRnh1SUNBZ0lDQWdJQ0IwY21GdWMyWnZjbTBnUFNCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0IwY21GdWMyeGhkR1U2SUdCMGNtRnVjMnhoZEdVb0pIdHpkR0YwWlM1MGNtRnVjMnhoZEdWWWZTd2dKSHR6ZEdGMFpTNTBjbUZ1YzJ4aGRHVlpmU2tnWUN4Y2JpQWdJQ0FnSUNBZ0lDQWdJSE5qWVd4bE9pQmdkSEpoYm5Oc1lYUmxLQ1I3YzJOaGJHVlVjbUZ1YzJadmNtMVlmU3dnSkh0elkyRnNaVlJ5WVc1elptOXliVmw5S1NCelkyRnNaU2drZTNOallXeGxmU3dnSkh0elkyRnNaVmw5S1NCMGNtRnVjMnhoZEdVb0pIdHpZMkZzWlZKbGNHeGhZMlZZZlN3Z0pIdHpZMkZzWlZKbGNHeGhZMlZaZlNrZ1lDeGNiaUFnSUNBZ0lDQWdJQ0FnSUhKdmRHRjBaVG9nWUhKdmRHRjBaU2drZTNOMFlYUmxMbkp2ZEdGMFpYMHNJQ1I3ZEhKaGJuTm1iM0p0VDNKcFoybHVXSDBzSUNSN2RISmhibk5tYjNKdFQzSnBaMmx1V1gwcElHQXNYRzRnSUNBZ0lDQWdJQ0FnSUNCemEyVjNXRG9nWUhOclpYZFlLQ1I3YzNSaGRHVXVjMnRsZDFoOUtTQmdMRnh1SUNBZ0lDQWdJQ0FnSUNBZ2MydGxkMWs2SUdCemEyVjNXU2drZTNOMFlYUmxMbk5yWlhkWmZTa2dZRnh1SUNBZ0lDQWdJQ0I5TzF4dVhHNGdJQ0FnWldGamFDaHpkR0YwWlN3Z0tHdGxlU3dnZG1Gc2RXVXBJRDArSUh0Y2JpQWdJQ0FnSUNBZ2FXWWdLSFJ5WVc1elptOXliVkJ5YjNCelcydGxlVjBwSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJR2hoYzFSeVlXNXpabTl5YlNBOUlIUnlkV1U3WEc0Z0lDQWdJQ0FnSUgwZ1pXeHpaU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQndjbTl3YzF0allXMWxiRlJ2UkdGemFDaHJaWGtwWFNBOUlIWmhiSFZsTzF4dUlDQWdJQ0FnSUNCOVhHNGdJQ0FnZlNrN1hHNWNiaUFnSUNCcFppQW9hR0Z6VkhKaGJuTm1iM0p0S1NCN1hHNGdJQ0FnSUNBZ0lIQnliM0J6TG5SeVlXNXpabTl5YlNBOUlDY25PMXh1WEc0Z0lDQWdJQ0FnSUdWaFkyZ29kSEpoYm5ObWIzSnRMQ0FvYTJWNUxDQjJZV3gxWlNrZ1BUNGdlMXh1SUNBZ0lDQWdJQ0FnSUNBZ2RtRnlJR1JsWm1GMWJIUldZV3gxWlNBOUlDaHJaWGtnUFQwOUlDZHpZMkZzWlNjcElEOGdKekVuSURvZ0p6QW5PMXh1SUNBZ0lDQWdJQ0FnSUNBZ2NISnZjSE11ZEhKaGJuTm1iM0p0SUNzOUlIWmhiSFZsTG5KbGNHeGhZMlVvTDNWdVpHVm1hVzVsWkM5bkxDQmtaV1poZFd4MFZtRnNkV1VwTzF4dUlDQWdJQ0FnSUNCOUtUdGNiaUFnSUNCOVhHNWNiaUFnSUNCeVpYUjFjbTRnY0hKdmNITTdYRzU5SWwxOVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvcmVuZGVyL3N2Zy9idWlsZC5qc1xuICoqIG1vZHVsZSBpZCA9IDQxXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzLmRlZmF1bHQgPSBidWlsZDtcblxudmFyIF91dGlscyA9IHJlcXVpcmUoJy4uLy4uL2luYy91dGlscycpO1xuXG4vKlxuICAgIENvbnZlcnQgcGVyY2VudGFnZSB0byBwaXhlbHNcbiAgICBcbiAgICBAcGFyYW0gW251bWJlcl06IFBlcmNlbnRhZ2Ugb2YgdG90YWwgbGVuZ3RoXG4gICAgQHBhcmFtIFtudW1iZXJdOiBUb3RhbCBsZW5ndGhcbiovXG52YXIgcGVyY2VudFRvUGl4ZWxzID0gZnVuY3Rpb24gKHBlcmNlbnQsIGxlbmd0aCkge1xuICAgIHJldHVybiBwYXJzZUZsb2F0KHBlcmNlbnQpIC8gMTAwICogbGVuZ3RoICsgJ3B4Jztcbn07XG5cbmZ1bmN0aW9uIGJ1aWxkKHN0YXRlLCBsZW5ndGgpIHtcbiAgICB2YXIgc3R5bGVzID0ge307XG4gICAgdmFyIGRhc2hBcnJheVN0eWxlcyA9IHtcbiAgICAgICAgbGVuZ3RoOiAwLFxuICAgICAgICBzcGFjaW5nOiBsZW5ndGggKyAncHgnXG4gICAgfTtcbiAgICB2YXIgaGFzRGFzaEFycmF5ID0gZmFsc2U7XG5cbiAgICAoMCwgX3V0aWxzLmVhY2gpKHN0YXRlLCBmdW5jdGlvbiAodmFsdWUsIGtleSkge1xuICAgICAgICBzd2l0Y2ggKGtleSkge1xuICAgICAgICAgICAgY2FzZSAnbGVuZ3RoJzpcbiAgICAgICAgICAgIGNhc2UgJ3NwYWNpbmcnOlxuICAgICAgICAgICAgICAgIGhhc0Rhc2hBcnJheSA9IHRydWU7XG4gICAgICAgICAgICAgICAgZGFzaEFycmF5U3R5bGVzW2tleV0gPSBwZXJjZW50VG9QaXhlbHModmFsdWUsIGxlbmd0aCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdvZmZzZXQnOlxuICAgICAgICAgICAgICAgIHN0eWxlc1snc3Ryb2tlLWRhc2hvZmZzZXQnXSA9IHBlcmNlbnRUb1BpeGVscygtdmFsdWUsIGxlbmd0aCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIHN0eWxlc1trZXldID0gdmFsdWU7XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIGlmIChoYXNEYXNoQXJyYXkpIHtcbiAgICAgICAgc3R5bGVzWydzdHJva2UtZGFzaGFycmF5J10gPSBkYXNoQXJyYXlTdHlsZXMubGVuZ3RoICsgJyAnICsgZGFzaEFycmF5U3R5bGVzLnNwYWNpbmc7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN0eWxlcztcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbUoxYVd4a0xtcHpJbDBzSW01aGJXVnpJanBiWFN3aWJXRndjR2x1WjNNaU9pSTdPenRyUWtGVmQwSXNTMEZCU3pzN096czdPenM3T3p0QlFVWTNRaXhKUVVGTkxHVkJRV1VzUjBGQlJ5eFZRVUZETEU5QlFVOHNSVUZCUlN4TlFVRk5PMWRCUVVzc1FVRkJReXhWUVVGVkxFTkJRVU1zVDBGQlR5eERRVUZETEVkQlFVY3NSMEZCUnl4SFFVRkpMRTFCUVUwc1IwRkJSeXhKUVVGSk8wTkJRVUVzUTBGQlF6czdRVUZGTVVVc1UwRkJVeXhMUVVGTExFTkJRVU1zUzBGQlN5eEZRVUZGTEUxQlFVMHNSVUZCUlR0QlFVTjZReXhSUVVGTkxFMUJRVTBzUjBGQlJ5eEZRVUZGTEVOQlFVTTdRVUZEYkVJc1VVRkJUU3hsUVVGbExFZEJRVWM3UVVGRGNFSXNZMEZCVFN4RlFVRkZMRU5CUVVNN1FVRkRWQ3hsUVVGUExFVkJRVVVzVFVGQlRTeEhRVUZITEVsQlFVazdTMEZEZWtJc1EwRkJRenRCUVVOR0xGRkJRVWtzV1VGQldTeEhRVUZITEV0QlFVc3NRMEZCUXpzN1FVRkZla0lzWlVGc1Frc3NTVUZCU1N4RlFXdENTaXhMUVVGTExFVkJRVVVzVlVGQlF5eExRVUZMTEVWQlFVVXNSMEZCUnl4RlFVRkxPMEZCUTNoQ0xHZENRVUZSTEVkQlFVYzdRVUZEVUN4cFFrRkJTeXhSUVVGUkxFTkJRVU03UVVGRFpDeHBRa0ZCU3l4VFFVRlRPMEZCUTFZc05FSkJRVmtzUjBGQlJ5eEpRVUZKTEVOQlFVTTdRVUZEY0VJc0swSkJRV1VzUTBGQlF5eEhRVUZITEVOQlFVTXNSMEZCUnl4bFFVRmxMRU5CUVVNc1MwRkJTeXhGUVVGRkxFMUJRVTBzUTBGQlF5eERRVUZETzBGQlEzUkVMSE5DUVVGTk8wRkJRVUVzUVVGRFZpeHBRa0ZCU3l4UlFVRlJPMEZCUTFRc2MwSkJRVTBzUTBGQlF5eHRRa0ZCYlVJc1EwRkJReXhIUVVGSExHVkJRV1VzUTBGQlF5eERRVUZETEV0QlFVc3NSVUZCUlN4TlFVRk5MRU5CUVVNc1EwRkJRenRCUVVNNVJDeHpRa0ZCVFR0QlFVRkJMRUZCUTFZN1FVRkRTU3h6UWtGQlRTeERRVUZETEVkQlFVY3NRMEZCUXl4SFFVRkhMRXRCUVVzc1EwRkJRenRCUVVGQkxGTkJRek5DTzB0QlEwb3NRMEZCUXl4RFFVRkRPenRCUVVWSUxGRkJRVWtzV1VGQldTeEZRVUZGTzBGQlEyUXNZMEZCVFN4RFFVRkRMR3RDUVVGclFpeERRVUZETEVkQlFVY3NaVUZCWlN4RFFVRkRMRTFCUVUwc1IwRkJSeXhIUVVGSExFZEJRVWNzWlVGQlpTeERRVUZETEU5QlFVOHNRMEZCUXp0TFFVTjJSanM3UVVGRlJDeFhRVUZQTEUxQlFVMHNRMEZCUXp0RFFVTnFRaUlzSW1acGJHVWlPaUppZFdsc1pDNXFjeUlzSW5OdmRYSmpaWE5EYjI1MFpXNTBJanBiSW1sdGNHOXlkQ0I3SUdWaFkyZ2dmU0JtY205dElDY3VMaTh1TGk5cGJtTXZkWFJwYkhNbk8xeHVYRzR2S2x4dUlDQWdJRU52Ym5abGNuUWdjR1Z5WTJWdWRHRm5aU0IwYnlCd2FYaGxiSE5jYmlBZ0lDQmNiaUFnSUNCQWNHRnlZVzBnVzI1MWJXSmxjbDA2SUZCbGNtTmxiblJoWjJVZ2IyWWdkRzkwWVd3Z2JHVnVaM1JvWEc0Z0lDQWdRSEJoY21GdElGdHVkVzFpWlhKZE9pQlViM1JoYkNCc1pXNW5kR2hjYmlvdlhHNWpiMjV6ZENCd1pYSmpaVzUwVkc5UWFYaGxiSE1nUFNBb2NHVnlZMlZ1ZEN3Z2JHVnVaM1JvS1NBOVBpQW9jR0Z5YzJWR2JHOWhkQ2h3WlhKalpXNTBLU0F2SURFd01Da2dLaUJzWlc1bmRHZ2dLeUFuY0hnbk8xeHVYRzVsZUhCdmNuUWdaR1ZtWVhWc2RDQm1kVzVqZEdsdmJpQmlkV2xzWkNoemRHRjBaU3dnYkdWdVozUm9LU0I3WEc0Z0lDQWdZMjl1YzNRZ2MzUjViR1Z6SUQwZ2UzMDdYRzRnSUNBZ1kyOXVjM1FnWkdGemFFRnljbUY1VTNSNWJHVnpJRDBnZTF4dUlDQWdJQ0FnSUNCc1pXNW5kR2c2SURBc1hHNGdJQ0FnSUNBZ0lITndZV05wYm1jNklHeGxibWQwYUNBcklDZHdlQ2RjYmlBZ0lDQjlPMXh1SUNBZ0lHeGxkQ0JvWVhORVlYTm9RWEp5WVhrZ1BTQm1ZV3h6WlR0Y2JseHVJQ0FnSUdWaFkyZ29jM1JoZEdVc0lDaDJZV3gxWlN3Z2EyVjVLU0E5UGlCN1hHNGdJQ0FnSUNBZ0lITjNhWFJqYUNBb2EyVjVLU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQmpZWE5sSUNkc1pXNW5kR2duT2x4dUlDQWdJQ0FnSUNBZ0lDQWdZMkZ6WlNBbmMzQmhZMmx1WnljNlhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2FHRnpSR0Z6YUVGeWNtRjVJRDBnZEhKMVpUdGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQmtZWE5vUVhKeVlYbFRkSGxzWlhOYmEyVjVYU0E5SUhCbGNtTmxiblJVYjFCcGVHVnNjeWgyWVd4MVpTd2diR1Z1WjNSb0tUdGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQmljbVZoYXp0Y2JpQWdJQ0FnSUNBZ0lDQWdJR05oYzJVZ0oyOW1abk5sZENjNlhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2MzUjViR1Z6V3lkemRISnZhMlV0WkdGemFHOW1abk5sZENkZElEMGdjR1Z5WTJWdWRGUnZVR2w0Wld4ektDMTJZV3gxWlN3Z2JHVnVaM1JvS1R0Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCaWNtVmhhenRjYmlBZ0lDQWdJQ0FnSUNBZ0lHUmxabUYxYkhRNlhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2MzUjViR1Z6VzJ0bGVWMGdQU0IyWVd4MVpUdGNiaUFnSUNBZ0lDQWdmVnh1SUNBZ0lIMHBPMXh1WEc0Z0lDQWdhV1lnS0doaGMwUmhjMmhCY25KaGVTa2dlMXh1SUNBZ0lDQWdJQ0J6ZEhsc1pYTmJKM04wY205clpTMWtZWE5vWVhKeVlYa25YU0E5SUdSaGMyaEJjbkpoZVZOMGVXeGxjeTVzWlc1bmRHZ2dLeUFuSUNjZ0t5QmtZWE5vUVhKeVlYbFRkSGxzWlhNdWMzQmhZMmx1Wnp0Y2JpQWdJQ0I5WEc1Y2JpQWdJQ0J5WlhSMWNtNGdjM1I1YkdWek8xeHVmU0pkZlE9PVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvcmVuZGVyL3N2Zy1wYXRoL2J1aWxkLmpzXG4gKiogbW9kdWxlIGlkID0gNDJcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxudmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF9zdGF0ZU1hcCA9IHJlcXVpcmUoJy4uL2Nzcy9zdGF0ZS1tYXAnKTtcblxudmFyIF9zdGF0ZU1hcDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9zdGF0ZU1hcCk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbnZhciBTVFJPS0UgPSAnc3Ryb2tlLSc7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IF9leHRlbmRzKHt9LCBfc3RhdGVNYXAyLmRlZmF1bHQsIHtcbiAgICBvcGFjaXR5OiBTVFJPS0UgKyAnb3BhY2l0eScsXG4gICAgd2lkdGg6IFNUUk9LRSArICd3aWR0aCcsXG4gICAgbWl0ZXJsaW1pdDogU1RST0tFICsgJ21pdGVybGltaXQnXG59KTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbk4wWVhSbExXMWhjQzVxY3lKZExDSnVZVzFsY3lJNlcxMHNJbTFoY0hCcGJtZHpJam9pT3pzN096czdPenM3T3pzN1FVRkZRU3hKUVVGTkxFMUJRVTBzUjBGQlJ5eFRRVUZUTEVOQlFVTTdPenRCUVVseVFpeFhRVUZQTEVWQlFVc3NUVUZCVFN4WlFVRlRPMEZCUXpOQ0xGTkJRVXNzUlVGQlN5eE5RVUZOTEZWQlFVODdRVUZEZGtJc1kwRkJWU3hGUVVGTExFMUJRVTBzWlVGQldTSXNJbVpwYkdVaU9pSnpkR0YwWlMxdFlYQXVhbk1pTENKemIzVnlZMlZ6UTI5dWRHVnVkQ0k2V3lKcGJYQnZjblFnWTNOelUzUmhkR1ZOWVhBZ1puSnZiU0FuTGk0dlkzTnpMM04wWVhSbExXMWhjQ2M3WEc1Y2JtTnZibk4wSUZOVVVrOUxSU0E5SUNkemRISnZhMlV0Snp0Y2JseHVaWGh3YjNKMElHUmxabUYxYkhRZ2UxeHVJQ0FnSUM0dUxtTnpjMU4wWVhSbFRXRndMRnh1SUNBZ0lHOXdZV05wZEhrNklHQWtlMU5VVWs5TFJYMXZjR0ZqYVhSNVlDeGNiaUFnSUNCM2FXUjBhRG9nWUNSN1UxUlNUMHRGZlhkcFpIUm9ZQ3hjYmlBZ0lDQnRhWFJsY214cGJXbDBPaUJnSkh0VFZGSlBTMFY5YldsMFpYSnNhVzFwZEdCY2JuMDdJbDE5XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9yZW5kZXIvc3ZnLXBhdGgvc3RhdGUtbWFwLmpzXG4gKiogbW9kdWxlIGlkID0gNDNcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbnZhciByZ2IgPSBleHBvcnRzLnJnYiA9IHtcbiAgICBtaW46IDAsXG4gICAgbWF4OiAyNTUsXG4gICAgcm91bmQ6IHRydWVcbn07XG5cbnZhciBvcGFjaXR5ID0gZXhwb3J0cy5vcGFjaXR5ID0ge1xuICAgIG1pbjogMCxcbiAgICBtYXg6IDFcbn07XG5cbnZhciBwZXJjZW50ID0gZXhwb3J0cy5wZXJjZW50ID0ge1xuICAgIG1pbjogMCxcbiAgICBtYXg6IDEwMCxcbiAgICB1bml0OiAnJSdcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW1SbFptRjFiSFF0Y0hKdmNITXVhbk1pWFN3aWJtRnRaWE1pT2x0ZExDSnRZWEJ3YVc1bmN5STZJanM3TzBGQlFVOHNTVUZCVFN4SFFVRkhMRmRCUVVnc1IwRkJSeXhIUVVGSE8wRkJRMllzVDBGQlJ5eEZRVUZGTEVOQlFVTTdRVUZEVGl4UFFVRkhMRVZCUVVVc1IwRkJSenRCUVVOU0xGTkJRVXNzUlVGQlJTeEpRVUZKTzBOQlEyUXNRMEZCUXpzN1FVRkZTeXhKUVVGTkxFOUJRVThzVjBGQlVDeFBRVUZQTEVkQlFVYzdRVUZEYmtJc1QwRkJSeXhGUVVGRkxFTkJRVU03UVVGRFRpeFBRVUZITEVWQlFVVXNRMEZCUXp0RFFVTlVMRU5CUVVNN08wRkJSVXNzU1VGQlRTeFBRVUZQTEZkQlFWQXNUMEZCVHl4SFFVRkhPMEZCUTI1Q0xFOUJRVWNzUlVGQlJTeERRVUZETzBGQlEwNHNUMEZCUnl4RlFVRkZMRWRCUVVjN1FVRkRVaXhSUVVGSkxFVkJRVVVzUjBGQlJ6dERRVU5hTEVOQlFVTWlMQ0ptYVd4bElqb2laR1ZtWVhWc2RDMXdjbTl3Y3k1cWN5SXNJbk52ZFhKalpYTkRiMjUwWlc1MElqcGJJbVY0Y0c5eWRDQmpiMjV6ZENCeVoySWdQU0I3WEc0Z0lDQWdiV2x1T2lBd0xGeHVJQ0FnSUcxaGVEb2dNalUxTEZ4dUlDQWdJSEp2ZFc1a09pQjBjblZsWEc1OU8xeHVYRzVsZUhCdmNuUWdZMjl1YzNRZ2IzQmhZMmwwZVNBOUlIdGNiaUFnSUNCdGFXNDZJREFzWEc0Z0lDQWdiV0Y0T2lBeFhHNTlPMXh1WEc1bGVIQnZjblFnWTI5dWMzUWdjR1Z5WTJWdWRDQTlJSHRjYmlBZ0lDQnRhVzQ2SURBc1hHNGdJQ0FnYldGNE9pQXhNREFzWEc0Z0lDQWdkVzVwZERvZ0p5VW5YRzU5T3lKZGZRPT1cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL3ZhbHVlLXR5cGVzL3NldHRpbmdzL2RlZmF1bHQtcHJvcHMuanNcbiAqKiBtb2R1bGUgaWQgPSA0NFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xudmFyIFggPSAnWCc7XG52YXIgWSA9ICdZJztcbnZhciBBTFBIQSA9ICdBbHBoYSc7XG5cbnZhciBheGVzID0gZXhwb3J0cy5heGVzID0gW1gsIFksICdaJ107XG52YXIgcmdiID0gZXhwb3J0cy5yZ2IgPSBbJ1JlZCcsICdHcmVlbicsICdCbHVlJywgQUxQSEFdO1xudmFyIGhzbCA9IGV4cG9ydHMuaHNsID0gWydIdWUnLCAnU2F0dXJhdGlvbicsICdMaWdodG5lc3MnLCBBTFBIQV07XG52YXIgcG9zaXRpb25zID0gZXhwb3J0cy5wb3NpdGlvbnMgPSBbJ1RvcCcsICdSaWdodCcsICdCb3R0b20nLCAnTGVmdCddO1xudmFyIHNoYWRvdyA9IGV4cG9ydHMuc2hhZG93ID0gW1gsIFksICdSYWRpdXMnLCAnU3ByZWFkJywgJ0NvbG9yJ107XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW1ScFkzUnBiMjVoY25rdWFuTWlYU3dpYm1GdFpYTWlPbHRkTENKdFlYQndhVzVuY3lJNklqczdPMEZCUVVFc1NVRkJUU3hEUVVGRExFZEJRVWNzUjBGQlJ5eERRVUZETzBGQlEyUXNTVUZCVFN4RFFVRkRMRWRCUVVjc1IwRkJSeXhEUVVGRE8wRkJRMlFzU1VGQlRTeExRVUZMTEVkQlFVY3NUMEZCVHl4RFFVRkRPenRCUVVWbUxFbEJRVTBzU1VGQlNTeFhRVUZLTEVsQlFVa3NSMEZCUnl4RFFVRkRMRU5CUVVNc1JVRkJSU3hEUVVGRExFVkJRVVVzUjBGQlJ5eERRVUZETEVOQlFVTTdRVUZEZWtJc1NVRkJUU3hIUVVGSExGZEJRVWdzUjBGQlJ5eEhRVUZITEVOQlFVTXNTMEZCU3l4RlFVRkZMRTlCUVU4c1JVRkJSU3hOUVVGTkxFVkJRVVVzUzBGQlN5eERRVUZETEVOQlFVTTdRVUZETlVNc1NVRkJUU3hIUVVGSExGZEJRVWdzUjBGQlJ5eEhRVUZITEVOQlFVTXNTMEZCU3l4RlFVRkZMRmxCUVZrc1JVRkJSU3hYUVVGWExFVkJRVVVzUzBGQlN5eERRVUZETEVOQlFVTTdRVUZEZEVRc1NVRkJUU3hUUVVGVExGZEJRVlFzVTBGQlV5eEhRVUZITEVOQlFVTXNTMEZCU3l4RlFVRkZMRTlCUVU4c1JVRkJSU3hSUVVGUkxFVkJRVVVzVFVGQlRTeERRVUZETEVOQlFVTTdRVUZEY2tRc1NVRkJUU3hOUVVGTkxGZEJRVTRzVFVGQlRTeEhRVUZITEVOQlFVTXNRMEZCUXl4RlFVRkZMRU5CUVVNc1JVRkJSU3hSUVVGUkxFVkJRVVVzVVVGQlVTeEZRVUZGTEU5QlFVOHNRMEZCUXl4RFFVRkRJaXdpWm1sc1pTSTZJbVJwWTNScGIyNWhjbmt1YW5NaUxDSnpiM1Z5WTJWelEyOXVkR1Z1ZENJNld5SmpiMjV6ZENCWUlEMGdKMWduTzF4dVkyOXVjM1FnV1NBOUlDZFpKenRjYm1OdmJuTjBJRUZNVUVoQklEMGdKMEZzY0doaEp6dGNibHh1Wlhod2IzSjBJR052Ym5OMElHRjRaWE1nUFNCYldDd2dXU3dnSjFvblhUdGNibVY0Y0c5eWRDQmpiMjV6ZENCeVoySWdQU0JiSjFKbFpDY3NJQ2RIY21WbGJpY3NJQ2RDYkhWbEp5d2dRVXhRU0VGZE8xeHVaWGh3YjNKMElHTnZibk4wSUdoemJDQTlJRnNuU0hWbEp5d2dKMU5oZEhWeVlYUnBiMjRuTENBblRHbG5hSFJ1WlhOekp5d2dRVXhRU0VGZE8xeHVaWGh3YjNKMElHTnZibk4wSUhCdmMybDBhVzl1Y3lBOUlGc25WRzl3Snl3Z0oxSnBaMmgwSnl3Z0owSnZkSFJ2YlNjc0lDZE1aV1owSjEwN1hHNWxlSEJ2Y25RZ1kyOXVjM1FnYzJoaFpHOTNJRDBnVzFnc0lGa3NJQ2RTWVdScGRYTW5MQ0FuVTNCeVpXRmtKeXdnSjBOdmJHOXlKMTA3SWwxOVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvdmFsdWUtdHlwZXMvc2V0dGluZ3MvZGljdGlvbmFyeS5qc1xuICoqIG1vZHVsZSBpZCA9IDQ1XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzLmdldFByb2Nlc3NJZCA9IGdldFByb2Nlc3NJZDtcbmV4cG9ydHMuYWN0aXZhdGUgPSBhY3RpdmF0ZTtcbmV4cG9ydHMuZGVhY3RpdmF0ZSA9IGRlYWN0aXZhdGU7XG5cbnZhciBfdGltZXIgPSByZXF1aXJlKCcuL3RpbWVyJyk7XG5cbnZhciBfdGltZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfdGltZXIpO1xuXG52YXIgX3RpY2sgPSByZXF1aXJlKCcuL3RpY2snKTtcblxudmFyIF90aWNrMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3RpY2spO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG52YXIgcHJvY2Vzc09yZGVyID0gW3sgc3RlcDogJ29uRnJhbWVTdGFydCcgfSwgeyBzdGVwOiAnb25VcGRhdGUnIH0sIHsgc3RlcDogJ3dpbGxSZW5kZXInLCBkZWNpZGVSZW5kZXI6IHRydWUgfSwgeyBzdGVwOiAnb25SZW5kZXInLCBpc1JlbmRlcjogdHJ1ZSB9LCB7IHN0ZXA6ICdwb3N0UmVuZGVyJywgaXNSZW5kZXI6IHRydWUgfSwgeyBzdGVwOiAnb25GcmFtZUVuZCcgfSwgeyBzdGVwOiAnb25DbGVhbnVwJyB9XTtcbnZhciBudW1Qcm9jZXNzU3RlcHMgPSBwcm9jZXNzT3JkZXIubGVuZ3RoO1xuXG4vLyBbYm9vbGVhbl06IElzIGxvb3AgcnVubmluZz9cbnZhciBpc1J1bm5pbmcgPSBmYWxzZTtcblxuLy8gW2ludF06IFByb2Nlc3MgSUQsIGluY3JlbWVudGVkIGZvciBlYWNoIG5ldyBwcm9jZXNzXG52YXIgY3VycmVudFByb2Nlc3NJZCA9IDA7XG5cbi8vIFtpbnRdOiBOdW1iZXIgb2YgcnVubmluZyBwcm9jZXNzZXNcbnZhciBydW5uaW5nQ291bnQgPSAwO1xuXG4vLyBbaW50XTogTnVtYmVyIG9mIHJ1bm5pbmcgbm9uLWJhY2tncm91bmQgcHJvY2Vzc2VzXG52YXIgYWN0aXZlQ291bnQgPSAwO1xuXG4vLyBbYXJyYXldOiBBcnJheSBvZiBhY3RpdmUgcHJvY2VzcyBJRHNcbnZhciBydW5uaW5nSWRzID0gW107XG5cbi8vIFtvYmplY3RdOiBNYXAgb2YgYWN0aXZlIHByb2Nlc3Nlc1xudmFyIHJ1bm5pbmdQcm9jZXNzZXMgPSB7fTtcblxuLy8gW2FycmF5XTogQXJyYXkgb2YgcHJvY2VzcyBJRHMgcXVldWVkIGZvciBhY3RpdmF0aW9uXG52YXIgYWN0aXZhdGVRdWV1ZSA9IFtdO1xuXG4vLyBbYXJyYXldOiBBcnJheSBvZiBwcm9jZXNzIElEcyBxdWV1ZWQgZm9yIGRlYWN0aXZhdGlvblxudmFyIGRlYWN0aXZhdGVRdWV1ZSA9IFtdO1xuXG4vKlxuICAgIFVwZGF0ZSBsaXN0c1xuXG4gICAgQHBhcmFtIFtudW1iZXJdXG4gICAgQHBhcmFtIFthcnJheV1cbiAgICBAcGFyYW0gW2FycmF5XVxuKi9cbmZ1bmN0aW9uIHVwZGF0ZUxpc3RzKGlkLCBpbkxpc3QsIG91dExpc3QpIHtcbiAgICB2YXIgaW5Qb3NpdGlvbiA9IGluTGlzdC5pbmRleE9mKGluTGlzdCk7XG4gICAgdmFyIG91dFBvc2l0aW9uID0gb3V0TGlzdC5pbmRleE9mKG91dExpc3QpO1xuXG4gICAgaWYgKGluUG9zaXRpb24gPT09IC0xKSB7XG4gICAgICAgIGluTGlzdC5wdXNoKGlkKTtcbiAgICB9XG5cbiAgICBpZiAob3V0UG9zaXRpb24gPiAtMSkge1xuICAgICAgICBvdXRMaXN0LnNwbGljZShvdXRQb3NpdGlvbiwgMSk7XG4gICAgfVxufVxuXG4vKlxuICAgIFVwZGF0ZSBydW5uaW5nXG5cbiAgICBbYm9vbGVhbl06IGB0cnVlYCB0byBhZGRcbiAgICBbYm9vbGVhbl06IGB0cnVlYCBpZiBsYXp5XG4qL1xuZnVuY3Rpb24gdXBkYXRlQ291bnQoYWRkLCBpc0xhenkpIHtcbiAgICB2YXIgbW9kaWZ5ID0gYWRkID8gMSA6IC0xO1xuXG4gICAgcnVubmluZ0NvdW50ICs9IG1vZGlmeTtcblxuICAgIGlmICghaXNMYXp5KSB7XG4gICAgICAgIGFjdGl2ZUNvdW50ICs9IG1vZGlmeTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIHJlc29sdmVRdWV1ZXMoKSB7XG4gICAgdmFyIGFjdGl2YXRlUXVldWVMZW5ndGggPSBhY3RpdmF0ZVF1ZXVlLmxlbmd0aDtcbiAgICB2YXIgZGVhY3RpdmF0ZVF1ZXVlTGVuZ3RoID0gZGVhY3RpdmF0ZVF1ZXVlLmxlbmd0aDtcblxuICAgIHdoaWxlIChhY3RpdmF0ZVF1ZXVlTGVuZ3RoLS0pIHtcbiAgICAgICAgdmFyIGlkID0gYWN0aXZhdGVRdWV1ZVthY3RpdmF0ZVF1ZXVlTGVuZ3RoXTtcbiAgICAgICAgdmFyIGFjdGl2ZUlkSW5kZXggPSBydW5uaW5nSWRzLmluZGV4T2YoaWQpO1xuICAgICAgICB2YXIgcHJvY2VzcyA9IHJ1bm5pbmdQcm9jZXNlc1tpZF07XG5cbiAgICAgICAgaWYgKGFjdGl2ZUlkSW5kZXggPiAtMSkge1xuICAgICAgICAgICAgcnVubmluZ0lkcy5wdXNoKGlkKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHVwZGF0ZUNvdW50KHRydWUsIHByb2Nlc3MuaXNMYXp5KTtcblxuICAgICAgICBpZiAocHJvY2Vzcy5vblN0YXJ0KSB7XG4gICAgICAgICAgICBwcm9jZXNzLm9uU3RhcnQocHJvY2Vzcyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB3aGlsZSAoZGVhY3RpdmF0ZVF1ZXVlLS0pIHtcbiAgICAgICAgdmFyIGlkID0gZGVhY3RpdmF0ZVF1ZXVlW2RlYWN0aXZhdGVRdWV1ZUxlbmd0aF07XG4gICAgICAgIHZhciBhY3RpdmVJZEluZGV4ID0gcnVubmluZ0lkcy5pbmRleE9mKGlkKTtcbiAgICAgICAgdmFyIHByb2Nlc3MgPSBydW5uaW5nUHJvY2VzZXNbaWRdO1xuXG4gICAgICAgIGlmIChhY3RpdmVJZEluZGV4ID4gLTEpIHtcbiAgICAgICAgICAgIHJ1bm5pbmdJZHMuc3BsaWNlKGFjdGl2ZUlkSW5kZXgsIDEpO1xuICAgICAgICAgICAgdXBkYXRlQ291bnQoZmFsc2UsIHByb2Nlc3MuaXNMYXp5KTtcbiAgICAgICAgICAgIHJ1bm5pbmdQcm9jZXNlc1tpZF0gPSB1bmRlZmluZWQ7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAocHJvY2Vzcy5vbkVuZCkge1xuICAgICAgICAgICAgcHJvY2Vzcy5vbkVuZChwcm9jZXNzKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGFjdGl2YXRlUXVldWUgPSBbXTtcbiAgICBkZWFjdGl2YXRlUXVldWUgPSBbXTtcbn1cblxuLypcbiAgICBbdGltZXN0YW1wXTogRnJhbWUgdGltZXN0YW1wXG4gICAgW2ludF06IFRpbWUgc2luY2UgbGFzdCBmcmFtZVxuKi9cbmZ1bmN0aW9uIGZpcmVBbGwoZnJhbWVTdGFtcCwgZWxhcHNlZCkge1xuICAgIHZhciBtZXRob2QgPSB7fTtcbiAgICB2YXIgbWV0aG9kTmFtZSA9ICcnO1xuICAgIHZhciBpc1JlbmRlclN0ZXAgPSBmYWxzZTtcbiAgICB2YXIgcHJvY2VzcyA9IHVuZGVmaW5lZDtcbiAgICB2YXIgcmVzdWx0ID0gdW5kZWZpbmVkO1xuXG4gICAgcmVzb2x2ZVF1ZXVlcygpO1xuXG4gICAgdmFyIG51bVJ1bm5pbmcgPSBydW5uaW5nQ291bnQ7XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IG51bVByb2Nlc3NTdGVwczsgaSsrKSB7XG4gICAgICAgIG1ldGhvZCA9IHByb2Nlc3NPcmRlcltpXTtcbiAgICAgICAgbWV0aG9kTmFtZSA9IG1ldGhvZC5zdGVwO1xuICAgICAgICBpc1JlbmRlclN0ZXAgPSBtZXRob2QuaXNSZW5kZXIgPyB0cnVlIDogZmFsc2U7XG5cbiAgICAgICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IG51bVJ1bm5pbmc7IF9pKyspIHtcbiAgICAgICAgICAgIHByb2Nlc3MgPSBydW5uaW5nUHJvY2Vzc2VzW3J1bm5pbmdJZHNbX2ldXTtcblxuICAgICAgICAgICAgaWYgKHByb2Nlc3MgJiYgcHJvY2Vzc1ttZXRob2ROYW1lXSAmJiAoIWlzUmVuZGVyU3RlcCB8fCBpc1JlbmRlclN0ZXAgJiYgcHJvY2Vzcy5fcmVuZGVyID09PSB0cnVlKSkge1xuICAgICAgICAgICAgICAgIHJlc3VsdCA9IHByb2Nlc3NbbWV0aG9kTmFtZV0uY2FsbChwcm9jZXNzLCBwcm9jZXNzLCBmcmFtZVN0YW1wLCBlbGFwc2VkKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKG1ldGhvZC5kZWNpZGVSZW5kZXIpIHtcbiAgICAgICAgICAgICAgICBwcm9jZXNzLl9yZW5kZXIgPSBwcm9jZXNzW21ldGhvZE5hbWVdICYmIHJlc3VsdCA9PT0gZmFsc2UgPyBmYWxzZSA6IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gYWN0aXZlQ291bnQgPyB0cnVlIDogZmFsc2U7XG59XG5cbi8vIEZ1bmN0aW9uIHRvIGZpcmUgZXZlcnkgZnJhbWVcbmZ1bmN0aW9uIGZyYW1lKCkge1xuICAgICgwLCBfdGljazIuZGVmYXVsdCkoZnVuY3Rpb24gKGZyYW1lU3RhbXApIHtcbiAgICAgICAgaWYgKGlzUnVubmluZykge1xuICAgICAgICAgICAgZnJhbWUoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIF90aW1lcjIuZGVmYXVsdC51cGRhdGUoZnJhbWVTdGFtcCk7XG4gICAgICAgIGlzUnVubmluZyA9IGZpcmVBbGwoZnJhbWVTdGFtcCwgX3RpbWVyMi5kZWZhdWx0LmdldEVsYXBzZWQoKSk7XG4gICAgfSk7XG59XG5cbi8vIFN0YXJ0IGxvb3BcbmZ1bmN0aW9uIHN0YXJ0KCkge1xuICAgIGlmICghaXNSdW5uaW5nKSB7XG4gICAgICAgIF90aW1lcjIuZGVmYXVsdC5zdGFydCgpO1xuICAgICAgICBpc1J1bm5pbmcgPSB0cnVlO1xuICAgICAgICBmcmFtZSgpO1xuICAgIH1cbn1cblxuLy8gU3RvcCBsb29wXG5mdW5jdGlvbiBzdG9wKCkge1xuICAgIGlzUnVubmluZyA9IGZhbHNlO1xufVxuXG4vLyBFeHBvcnRzXG5mdW5jdGlvbiBnZXRQcm9jZXNzSWQoKSB7XG4gICAgcmV0dXJuIGN1cnJlbnRQcm9jZXNzSWQrKztcbn1cblxuLypcbiAgICBbaW50XTogUHJvY2VzcyBJRCB0byBhY3RpdmF0ZVxuICAgIFtQcm9jZXNzXTogUHJvY2VzcyB0byBhY3RpdmF0ZVxuKi9cbmZ1bmN0aW9uIGFjdGl2YXRlKGlkLCBwcm9jZXNzKSB7XG4gICAgdXBkYXRlTGlzdHMoaWQsIGFjdGl2YXRlUXVldWUsIGRlYWN0aXZhdGVRdWV1ZSk7XG4gICAgcnVubmluZ1Byb2Nlc3Nlc1tpZF0gPSBwcm9jZXNzO1xuXG4gICAgaWYgKCFpc1J1bm5pbmcpIHtcbiAgICAgICAgc3RhcnQoKTtcbiAgICB9XG59XG5cbi8qXG4gICAgW2ludF06IFByb2Nlc3MgSUQgdG8gZGVhY3RpdmF0ZVxuKi9cbmZ1bmN0aW9uIGRlYWN0aXZhdGUoaWQpIHtcbiAgICB1cGRhdGVMaXN0cyhpZCwgZGVhY3RpdmF0ZVF1ZXVlLCBhY3RpdmF0ZVF1ZXVlKTtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbXh2YjNBdWFuTWlYU3dpYm1GdFpYTWlPbHRkTENKdFlYQndhVzVuY3lJNklqczdPMUZCYVV4blFpeFpRVUZaTEVkQlFWb3NXVUZCV1R0UlFWRmFMRkZCUVZFc1IwRkJVaXhSUVVGUk8xRkJXVklzVlVGQlZTeEhRVUZXTEZWQlFWVTdPenM3T3pzN096czdPenRCUVd4Tk1VSXNTVUZCVFN4WlFVRlpMRWRCUVVjc1EwRkRha0lzUlVGQlJTeEpRVUZKTEVWQlFVVXNZMEZCWXl4RlFVRkZMRVZCUTNoQ0xFVkJRVVVzU1VGQlNTeEZRVUZGTEZWQlFWVXNSVUZCUlN4RlFVTndRaXhGUVVGRkxFbEJRVWtzUlVGQlJTeFpRVUZaTEVWQlFVVXNXVUZCV1N4RlFVRkZMRWxCUVVrc1JVRkJSU3hGUVVNeFF5eEZRVUZGTEVsQlFVa3NSVUZCUlN4VlFVRlZMRVZCUVVVc1VVRkJVU3hGUVVGRkxFbEJRVWtzUlVGQlJTeEZRVU53UXl4RlFVRkZMRWxCUVVrc1JVRkJSU3haUVVGWkxFVkJRVVVzVVVGQlVTeEZRVUZGTEVsQlFVa3NSVUZCUlN4RlFVTjBReXhGUVVGRkxFbEJRVWtzUlVGQlJTeFpRVUZaTEVWQlFVVXNSVUZEZEVJc1JVRkJSU3hKUVVGSkxFVkJRVVVzVjBGQlZ5eEZRVUZGTEVOQlEzaENMRU5CUVVNN1FVRkRSaXhKUVVGTkxHVkJRV1VzUjBGQlJ5eFpRVUZaTEVOQlFVTXNUVUZCVFRzN08wRkJRVU1zUVVGSE5VTXNTVUZCU1N4VFFVRlRMRWRCUVVjc1MwRkJTenM3TzBGQlFVTXNRVUZIZEVJc1NVRkJTU3huUWtGQlowSXNSMEZCUnl4RFFVRkRPenM3UVVGQlF5eEJRVWQ2UWl4SlFVRkpMRmxCUVZrc1IwRkJSeXhEUVVGRE96czdRVUZCUXl4QlFVZHlRaXhKUVVGSkxGZEJRVmNzUjBGQlJ5eERRVUZET3pzN1FVRkJReXhCUVVkd1FpeEpRVUZOTEZWQlFWVXNSMEZCUnl4RlFVRkZPenM3UVVGQlF5eEJRVWQwUWl4SlFVRk5MR2RDUVVGblFpeEhRVUZITEVWQlFVVTdPenRCUVVGRExFRkJSelZDTEVsQlFVa3NZVUZCWVN4SFFVRkhMRVZCUVVVN096dEJRVUZETEVGQlIzWkNMRWxCUVVrc1pVRkJaU3hIUVVGSExFVkJRVVU3T3pzN096czdPenRCUVVGRExFRkJVM3BDTEZOQlFWTXNWMEZCVnl4RFFVRkRMRVZCUVVVc1JVRkJSU3hOUVVGTkxFVkJRVVVzVDBGQlR5eEZRVUZGTzBGQlEzUkRMRkZCUVUwc1ZVRkJWU3hIUVVGSExFMUJRVTBzUTBGQlF5eFBRVUZQTEVOQlFVTXNUVUZCVFN4RFFVRkRMRU5CUVVNN1FVRkRNVU1zVVVGQlRTeFhRVUZYTEVkQlFVY3NUMEZCVHl4RFFVRkRMRTlCUVU4c1EwRkJReXhQUVVGUExFTkJRVU1zUTBGQlF6czdRVUZGTjBNc1VVRkJTU3hWUVVGVkxFdEJRVXNzUTBGQlF5eERRVUZETEVWQlFVVTdRVUZEYmtJc1kwRkJUU3hEUVVGRExFbEJRVWtzUTBGQlF5eEZRVUZGTEVOQlFVTXNRMEZCUXp0TFFVTnVRanM3UVVGRlJDeFJRVUZKTEZkQlFWY3NSMEZCUnl4RFFVRkRMRU5CUVVNc1JVRkJSVHRCUVVOc1FpeGxRVUZQTEVOQlFVTXNUVUZCVFN4RFFVRkRMRmRCUVZjc1JVRkJSU3hEUVVGRExFTkJRVU1zUTBGQlF6dExRVU5zUXp0RFFVTktPenM3T3pzN096dEJRVUZCTEVGQlVVUXNVMEZCVXl4WFFVRlhMRU5CUVVNc1IwRkJSeXhGUVVGRkxFMUJRVTBzUlVGQlJUdEJRVU01UWl4UlFVRk5MRTFCUVUwc1IwRkJSeXhIUVVGSExFZEJRVWNzUTBGQlF5eEhRVUZITEVOQlFVTXNRMEZCUXl4RFFVRkRPenRCUVVVMVFpeG5Ra0ZCV1N4SlFVRkpMRTFCUVUwc1EwRkJRenM3UVVGRmRrSXNVVUZCU1N4RFFVRkRMRTFCUVUwc1JVRkJSVHRCUVVOVUxHMUNRVUZYTEVsQlFVa3NUVUZCVFN4RFFVRkRPMHRCUTNwQ08wTkJRMG83TzBGQlJVUXNVMEZCVXl4aFFVRmhMRWRCUVVjN1FVRkRja0lzVVVGQlNTeHRRa0ZCYlVJc1IwRkJSeXhoUVVGaExFTkJRVU1zVFVGQlRTeERRVUZETzBGQlF5OURMRkZCUVVrc2NVSkJRWEZDTEVkQlFVY3NaVUZCWlN4RFFVRkRMRTFCUVUwc1EwRkJRenM3UVVGRmJrUXNWMEZCVHl4dFFrRkJiVUlzUlVGQlJTeEZRVUZGTzBGQlF6RkNMRmxCUVUwc1JVRkJSU3hIUVVGSExHRkJRV0VzUTBGQlF5eHRRa0ZCYlVJc1EwRkJReXhEUVVGRE8wRkJRemxETEZsQlFVMHNZVUZCWVN4SFFVRkhMRlZCUVZVc1EwRkJReXhQUVVGUExFTkJRVU1zUlVGQlJTeERRVUZETEVOQlFVTTdRVUZETjBNc1dVRkJUU3hQUVVGUExFZEJRVWNzWlVGQlpTeERRVUZETEVWQlFVVXNRMEZCUXl4RFFVRkRPenRCUVVWd1F5eFpRVUZKTEdGQlFXRXNSMEZCUnl4RFFVRkRMRU5CUVVNc1JVRkJSVHRCUVVOd1FpeHpRa0ZCVlN4RFFVRkRMRWxCUVVrc1EwRkJReXhGUVVGRkxFTkJRVU1zUTBGQlF6dFRRVU4yUWpzN1FVRkZSQ3h0UWtGQlZ5eERRVUZETEVsQlFVa3NSVUZCUlN4UFFVRlBMRU5CUVVNc1RVRkJUU3hEUVVGRExFTkJRVU03TzBGQlJXeERMRmxCUVVrc1QwRkJUeXhEUVVGRExFOUJRVThzUlVGQlJUdEJRVU5xUWl4dFFrRkJUeXhEUVVGRExFOUJRVThzUTBGQlF5eFBRVUZQTEVOQlFVTXNRMEZCUXp0VFFVTTFRanRMUVVOS096dEJRVVZFTEZkQlFVOHNaVUZCWlN4RlFVRkZMRVZCUVVVN1FVRkRkRUlzV1VGQlRTeEZRVUZGTEVkQlFVY3NaVUZCWlN4RFFVRkRMSEZDUVVGeFFpeERRVUZETEVOQlFVTTdRVUZEYkVRc1dVRkJUU3hoUVVGaExFZEJRVWNzVlVGQlZTeERRVUZETEU5QlFVOHNRMEZCUXl4RlFVRkZMRU5CUVVNc1EwRkJRenRCUVVNM1F5eFpRVUZOTEU5QlFVOHNSMEZCUnl4bFFVRmxMRU5CUVVNc1JVRkJSU3hEUVVGRExFTkJRVU03TzBGQlJYQkRMRmxCUVVrc1lVRkJZU3hIUVVGSExFTkJRVU1zUTBGQlF5eEZRVUZGTzBGQlEzQkNMSE5DUVVGVkxFTkJRVU1zVFVGQlRTeERRVUZETEdGQlFXRXNSVUZCUlN4RFFVRkRMRU5CUVVNc1EwRkJRenRCUVVOd1F5eDFRa0ZCVnl4RFFVRkRMRXRCUVVzc1JVRkJSU3hQUVVGUExFTkJRVU1zVFVGQlRTeERRVUZETEVOQlFVTTdRVUZEYmtNc01rSkJRV1VzUTBGQlF5eEZRVUZGTEVOQlFVTXNSMEZCUnl4VFFVRlRMRU5CUVVNN1UwRkRia003TzBGQlJVUXNXVUZCU1N4UFFVRlBMRU5CUVVNc1MwRkJTeXhGUVVGRk8wRkJRMllzYlVKQlFVOHNRMEZCUXl4TFFVRkxMRU5CUVVNc1QwRkJUeXhEUVVGRExFTkJRVU03VTBGRE1VSTdTMEZEU2pzN1FVRkZSQ3hwUWtGQllTeEhRVUZITEVWQlFVVXNRMEZCUXp0QlFVTnVRaXh0UWtGQlpTeEhRVUZITEVWQlFVVXNRMEZCUXp0RFFVTjRRanM3T3pzN08wRkJRVUVzUVVGTlJDeFRRVUZUTEU5QlFVOHNRMEZCUXl4VlFVRlZMRVZCUVVVc1QwRkJUeXhGUVVGRk8wRkJRMnhETEZGQlFVa3NUVUZCVFN4SFFVRkhMRVZCUVVVc1EwRkJRenRCUVVOb1FpeFJRVUZKTEZWQlFWVXNSMEZCUnl4RlFVRkZMRU5CUVVNN1FVRkRjRUlzVVVGQlNTeFpRVUZaTEVkQlFVY3NTMEZCU3l4RFFVRkRPMEZCUTNwQ0xGRkJRVWtzVDBGQlR5eFpRVUZCTEVOQlFVTTdRVUZEV2l4UlFVRkpMRTFCUVUwc1dVRkJRU3hEUVVGRE96dEJRVVZZTEdsQ1FVRmhMRVZCUVVVc1EwRkJRenM3UVVGRmFFSXNVVUZCVFN4VlFVRlZMRWRCUVVjc1dVRkJXU3hEUVVGRE96dEJRVVZvUXl4VFFVRkxMRWxCUVVrc1EwRkJReXhIUVVGSExFTkJRVU1zUlVGQlJTeERRVUZETEVkQlFVY3NaVUZCWlN4RlFVRkZMRU5CUVVNc1JVRkJSU3hGUVVGRk8wRkJRM1JETEdOQlFVMHNSMEZCUnl4WlFVRlpMRU5CUVVNc1EwRkJReXhEUVVGRExFTkJRVU03UVVGRGVrSXNhMEpCUVZVc1IwRkJSeXhOUVVGTkxFTkJRVU1zU1VGQlNTeERRVUZETzBGQlEzcENMRzlDUVVGWkxFZEJRVWNzVFVGQlRTeERRVUZETEZGQlFWRXNSMEZCUnl4SlFVRkpMRWRCUVVjc1MwRkJTeXhEUVVGRE96dEJRVVU1UXl4aFFVRkxMRWxCUVVrc1JVRkJReXhIUVVGSExFTkJRVU1zUlVGQlJTeEZRVUZETEVkQlFVY3NWVUZCVlN4RlFVRkZMRVZCUVVNc1JVRkJSU3hGUVVGRk8wRkJRMnBETEcxQ1FVRlBMRWRCUVVjc1owSkJRV2RDTEVOQlFVTXNWVUZCVlN4RFFVRkRMRVZCUVVNc1EwRkJReXhEUVVGRExFTkJRVU03TzBGQlJURkRMR2RDUVVGSkxFOUJRVThzU1VGQlNTeFBRVUZQTEVOQlFVTXNWVUZCVlN4RFFVRkRMRXRCUVVzc1EwRkJReXhaUVVGWkxFbEJRVXNzV1VGQldTeEpRVUZKTEU5QlFVOHNRMEZCUXl4UFFVRlBMRXRCUVVzc1NVRkJTU3hEUVVGRExFRkJRVU1zUlVGQlJUdEJRVU5xUnl4elFrRkJUU3hIUVVGSExFOUJRVThzUTBGQlF5eFZRVUZWTEVOQlFVTXNRMEZCUXl4SlFVRkpMRU5CUVVNc1QwRkJUeXhGUVVGRkxFOUJRVThzUlVGQlJTeFZRVUZWTEVWQlFVVXNUMEZCVHl4RFFVRkRMRU5CUVVNN1lVRkROVVU3TzBGQlJVUXNaMEpCUVVrc1RVRkJUU3hEUVVGRExGbEJRVmtzUlVGQlJUdEJRVU55UWl4MVFrRkJUeXhEUVVGRExFOUJRVThzUjBGQlJ5eEJRVUZETEU5QlFVOHNRMEZCUXl4VlFVRlZMRU5CUVVNc1NVRkJTU3hOUVVGTkxFdEJRVXNzUzBGQlN5eEhRVUZKTEV0QlFVc3NSMEZCUnl4SlFVRkpMRU5CUVVNN1lVRkRPVVU3VTBGRFNqdExRVU5LT3p0QlFVVkVMRmRCUVU4c1YwRkJWeXhIUVVGSExFbEJRVWtzUjBGQlJ5eExRVUZMTEVOQlFVTTdRMEZEY2tNN096dEJRVUZCTEVGQlIwUXNVMEZCVXl4TFFVRkxMRWRCUVVjN1FVRkRZaXgzUWtGQlN5eFZRVUZETEZWQlFWVXNSVUZCU3p0QlFVTnFRaXhaUVVGSkxGTkJRVk1zUlVGQlJUdEJRVU5ZTEdsQ1FVRkxMRVZCUVVVc1EwRkJRenRUUVVOWU96dEJRVVZFTEhkQ1FVRk5MRTFCUVUwc1EwRkJReXhWUVVGVkxFTkJRVU1zUTBGQlF6dEJRVU42UWl4cFFrRkJVeXhIUVVGSExFOUJRVThzUTBGQlF5eFZRVUZWTEVWQlFVVXNaMEpCUVUwc1ZVRkJWU3hGUVVGRkxFTkJRVU1zUTBGQlF6dExRVU4yUkN4RFFVRkRMRU5CUVVNN1EwRkRUanM3TzBGQlFVRXNRVUZIUkN4VFFVRlRMRXRCUVVzc1IwRkJSenRCUVVOaUxGRkJRVWtzUTBGQlF5eFRRVUZUTEVWQlFVVTdRVUZEV2l4M1FrRkJUU3hMUVVGTExFVkJRVVVzUTBGQlF6dEJRVU5rTEdsQ1FVRlRMRWRCUVVjc1NVRkJTU3hEUVVGRE8wRkJRMnBDTEdGQlFVc3NSVUZCUlN4RFFVRkRPMHRCUTFnN1EwRkRTanM3TzBGQlFVRXNRVUZIUkN4VFFVRlRMRWxCUVVrc1IwRkJSenRCUVVOYUxHRkJRVk1zUjBGQlJ5eExRVUZMTEVOQlFVTTdRMEZEY2tJN096dEJRVUZCTEVGQlIwMHNVMEZCVXl4WlFVRlpMRWRCUVVjN1FVRkRNMElzVjBGQlR5eG5Ra0ZCWjBJc1JVRkJSU3hEUVVGRE8wTkJRemRDT3pzN096czdRVUZCUVN4QlFVMU5MRk5CUVZNc1VVRkJVU3hEUVVGRExFVkJRVVVzUlVGQlJTeFBRVUZQTEVWQlFVVTdRVUZEYkVNc1pVRkJWeXhEUVVGRExFVkJRVVVzUlVGQlJTeGhRVUZoTEVWQlFVVXNaVUZCWlN4RFFVRkRMRU5CUVVNN1FVRkRhRVFzYjBKQlFXZENMRU5CUVVNc1JVRkJSU3hEUVVGRExFZEJRVWNzVDBGQlR5eERRVUZET3p0QlFVVXZRaXhSUVVGSkxFTkJRVU1zVTBGQlV5eEZRVUZGTzBGQlExb3NZVUZCU3l4RlFVRkZMRU5CUVVNN1MwRkRXRHREUVVOS096czdPenRCUVVGQkxFRkJTMDBzVTBGQlV5eFZRVUZWTEVOQlFVTXNSVUZCUlN4RlFVRkZPMEZCUXpOQ0xHVkJRVmNzUTBGQlF5eEZRVUZGTEVWQlFVVXNaVUZCWlN4RlFVRkZMR0ZCUVdFc1EwRkJReXhEUVVGRE8wTkJRMjVFSWl3aVptbHNaU0k2SW14dmIzQXVhbk1pTENKemIzVnlZMlZ6UTI5dWRHVnVkQ0k2V3lKcGJYQnZjblFnZEdsdFpYSWdabkp2YlNBbkxpOTBhVzFsY2ljN1hHNXBiWEJ2Y25RZ2RHbGpheUJtY205dElDY3VMM1JwWTJzbk8xeHVYRzVqYjI1emRDQndjbTlqWlhOelQzSmtaWElnUFNCYlhHNGdJQ0FnZXlCemRHVndPaUFuYjI1R2NtRnRaVk4wWVhKMEp5QjlMRnh1SUNBZ0lIc2djM1JsY0RvZ0oyOXVWWEJrWVhSbEp5QjlMRnh1SUNBZ0lIc2djM1JsY0RvZ0ozZHBiR3hTWlc1a1pYSW5MQ0JrWldOcFpHVlNaVzVrWlhJNklIUnlkV1VnZlN4Y2JpQWdJQ0I3SUhOMFpYQTZJQ2R2YmxKbGJtUmxjaWNzSUdselVtVnVaR1Z5T2lCMGNuVmxJSDBzWEc0Z0lDQWdleUJ6ZEdWd09pQW5jRzl6ZEZKbGJtUmxjaWNzSUdselVtVnVaR1Z5T2lCMGNuVmxJSDBzWEc0Z0lDQWdleUJ6ZEdWd09pQW5iMjVHY21GdFpVVnVaQ2NnZlN4Y2JpQWdJQ0I3SUhOMFpYQTZJQ2R2YmtOc1pXRnVkWEFuSUgxY2JsMDdYRzVqYjI1emRDQnVkVzFRY205alpYTnpVM1JsY0hNZ1BTQndjbTlqWlhOelQzSmtaWEl1YkdWdVozUm9PMXh1WEc0dkx5QmJZbTl2YkdWaGJsMDZJRWx6SUd4dmIzQWdjblZ1Ym1sdVp6OWNibXhsZENCcGMxSjFibTVwYm1jZ1BTQm1ZV3h6WlR0Y2JseHVMeThnVzJsdWRGMDZJRkJ5YjJObGMzTWdTVVFzSUdsdVkzSmxiV1Z1ZEdWa0lHWnZjaUJsWVdOb0lHNWxkeUJ3Y205alpYTnpYRzVzWlhRZ1kzVnljbVZ1ZEZCeWIyTmxjM05KWkNBOUlEQTdYRzVjYmk4dklGdHBiblJkT2lCT2RXMWlaWElnYjJZZ2NuVnVibWx1WnlCd2NtOWpaWE56WlhOY2JteGxkQ0J5ZFc1dWFXNW5RMjkxYm5RZ1BTQXdPMXh1WEc0dkx5QmJhVzUwWFRvZ1RuVnRZbVZ5SUc5bUlISjFibTVwYm1jZ2JtOXVMV0poWTJ0bmNtOTFibVFnY0hKdlkyVnpjMlZ6WEc1c1pYUWdZV04wYVhabFEyOTFiblFnUFNBd08xeHVYRzR2THlCYllYSnlZWGxkT2lCQmNuSmhlU0J2WmlCaFkzUnBkbVVnY0hKdlkyVnpjeUJKUkhOY2JtTnZibk4wSUhKMWJtNXBibWRKWkhNZ1BTQmJYVHRjYmx4dUx5OGdXMjlpYW1WamRGMDZJRTFoY0NCdlppQmhZM1JwZG1VZ2NISnZZMlZ6YzJWelhHNWpiMjV6ZENCeWRXNXVhVzVuVUhKdlkyVnpjMlZ6SUQwZ2UzMDdYRzVjYmk4dklGdGhjbkpoZVYwNklFRnljbUY1SUc5bUlIQnliMk5sYzNNZ1NVUnpJSEYxWlhWbFpDQm1iM0lnWVdOMGFYWmhkR2x2Ymx4dWJHVjBJR0ZqZEdsMllYUmxVWFZsZFdVZ1BTQmJYVHRjYmx4dUx5OGdXMkZ5Y21GNVhUb2dRWEp5WVhrZ2IyWWdjSEp2WTJWemN5QkpSSE1nY1hWbGRXVmtJR1p2Y2lCa1pXRmpkR2wyWVhScGIyNWNibXhsZENCa1pXRmpkR2wyWVhSbFVYVmxkV1VnUFNCYlhUdGNibHh1THlwY2JpQWdJQ0JWY0dSaGRHVWdiR2x6ZEhOY2JseHVJQ0FnSUVCd1lYSmhiU0JiYm5WdFltVnlYVnh1SUNBZ0lFQndZWEpoYlNCYllYSnlZWGxkWEc0Z0lDQWdRSEJoY21GdElGdGhjbkpoZVYxY2Jpb3ZYRzVtZFc1amRHbHZiaUIxY0dSaGRHVk1hWE4wY3locFpDd2dhVzVNYVhOMExDQnZkWFJNYVhOMEtTQjdYRzRnSUNBZ1kyOXVjM1FnYVc1UWIzTnBkR2x2YmlBOUlHbHVUR2x6ZEM1cGJtUmxlRTltS0dsdVRHbHpkQ2s3WEc0Z0lDQWdZMjl1YzNRZ2IzVjBVRzl6YVhScGIyNGdQU0J2ZFhSTWFYTjBMbWx1WkdWNFQyWW9iM1YwVEdsemRDazdYRzVjYmlBZ0lDQnBaaUFvYVc1UWIzTnBkR2x2YmlBOVBUMGdMVEVwSUh0Y2JpQWdJQ0FnSUNBZ2FXNU1hWE4wTG5CMWMyZ29hV1FwTzF4dUlDQWdJSDFjYmx4dUlDQWdJR2xtSUNodmRYUlFiM05wZEdsdmJpQStJQzB4S1NCN1hHNGdJQ0FnSUNBZ0lHOTFkRXhwYzNRdWMzQnNhV05sS0c5MWRGQnZjMmwwYVc5dUxDQXhLVHRjYmlBZ0lDQjlYRzU5WEc1Y2JpOHFYRzRnSUNBZ1ZYQmtZWFJsSUhKMWJtNXBibWRjYmx4dUlDQWdJRnRpYjI5c1pXRnVYVG9nWUhSeWRXVmdJSFJ2SUdGa1pGeHVJQ0FnSUZ0aWIyOXNaV0Z1WFRvZ1lIUnlkV1ZnSUdsbUlHeGhlbmxjYmlvdlhHNW1kVzVqZEdsdmJpQjFjR1JoZEdWRGIzVnVkQ2hoWkdRc0lHbHpUR0Y2ZVNrZ2UxeHVJQ0FnSUdOdmJuTjBJRzF2WkdsbWVTQTlJR0ZrWkNBL0lERWdPaUF0TVR0Y2JseHVJQ0FnSUhKMWJtNXBibWREYjNWdWRDQXJQU0J0YjJScFpuazdYRzVjYmlBZ0lDQnBaaUFvSVdselRHRjZlU2tnZTF4dUlDQWdJQ0FnSUNCaFkzUnBkbVZEYjNWdWRDQXJQU0J0YjJScFpuazdYRzRnSUNBZ2ZWeHVmVnh1WEc1bWRXNWpkR2x2YmlCeVpYTnZiSFpsVVhWbGRXVnpLQ2tnZTF4dUlDQWdJR3hsZENCaFkzUnBkbUYwWlZGMVpYVmxUR1Z1WjNSb0lEMGdZV04wYVhaaGRHVlJkV1YxWlM1c1pXNW5kR2c3WEc0Z0lDQWdiR1YwSUdSbFlXTjBhWFpoZEdWUmRXVjFaVXhsYm1kMGFDQTlJR1JsWVdOMGFYWmhkR1ZSZFdWMVpTNXNaVzVuZEdnN1hHNWNiaUFnSUNCM2FHbHNaU0FvWVdOMGFYWmhkR1ZSZFdWMVpVeGxibWQwYUMwdEtTQjdYRzRnSUNBZ0lDQWdJR052Ym5OMElHbGtJRDBnWVdOMGFYWmhkR1ZSZFdWMVpWdGhZM1JwZG1GMFpWRjFaWFZsVEdWdVozUm9YVHRjYmlBZ0lDQWdJQ0FnWTI5dWMzUWdZV04wYVhabFNXUkpibVJsZUNBOUlISjFibTVwYm1kSlpITXVhVzVrWlhoUFppaHBaQ2s3WEc0Z0lDQWdJQ0FnSUdOdmJuTjBJSEJ5YjJObGMzTWdQU0J5ZFc1dWFXNW5VSEp2WTJWelpYTmJhV1JkTzF4dVhHNGdJQ0FnSUNBZ0lHbG1JQ2hoWTNScGRtVkpaRWx1WkdWNElENGdMVEVwSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJSEoxYm01cGJtZEpaSE11Y0hWemFDaHBaQ2s3WEc0Z0lDQWdJQ0FnSUgxY2JseHVJQ0FnSUNBZ0lDQjFjR1JoZEdWRGIzVnVkQ2gwY25WbExDQndjbTlqWlhOekxtbHpUR0Y2ZVNrN1hHNWNiaUFnSUNBZ0lDQWdhV1lnS0hCeWIyTmxjM011YjI1VGRHRnlkQ2tnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdjSEp2WTJWemN5NXZibE4wWVhKMEtIQnliMk5sYzNNcE8xeHVJQ0FnSUNBZ0lDQjlYRzRnSUNBZ2ZWeHVYRzRnSUNBZ2QyaHBiR1VnS0dSbFlXTjBhWFpoZEdWUmRXVjFaUzB0S1NCN1hHNGdJQ0FnSUNBZ0lHTnZibk4wSUdsa0lEMGdaR1ZoWTNScGRtRjBaVkYxWlhWbFcyUmxZV04wYVhaaGRHVlJkV1YxWlV4bGJtZDBhRjA3WEc0Z0lDQWdJQ0FnSUdOdmJuTjBJR0ZqZEdsMlpVbGtTVzVrWlhnZ1BTQnlkVzV1YVc1blNXUnpMbWx1WkdWNFQyWW9hV1FwTzF4dUlDQWdJQ0FnSUNCamIyNXpkQ0J3Y205alpYTnpJRDBnY25WdWJtbHVaMUJ5YjJObGMyVnpXMmxrWFR0Y2JseHVJQ0FnSUNBZ0lDQnBaaUFvWVdOMGFYWmxTV1JKYm1SbGVDQStJQzB4S1NCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0J5ZFc1dWFXNW5TV1J6TG5Od2JHbGpaU2hoWTNScGRtVkpaRWx1WkdWNExDQXhLVHRjYmlBZ0lDQWdJQ0FnSUNBZ0lIVndaR0YwWlVOdmRXNTBLR1poYkhObExDQndjbTlqWlhOekxtbHpUR0Y2ZVNrN1hHNGdJQ0FnSUNBZ0lDQWdJQ0J5ZFc1dWFXNW5VSEp2WTJWelpYTmJhV1JkSUQwZ2RXNWtaV1pwYm1Wa08xeHVJQ0FnSUNBZ0lDQjlYRzVjYmlBZ0lDQWdJQ0FnYVdZZ0tIQnliMk5sYzNNdWIyNUZibVFwSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJSEJ5YjJObGMzTXViMjVGYm1Rb2NISnZZMlZ6Y3lrN1hHNGdJQ0FnSUNBZ0lIMWNiaUFnSUNCOVhHNWNiaUFnSUNCaFkzUnBkbUYwWlZGMVpYVmxJRDBnVzEwN1hHNGdJQ0FnWkdWaFkzUnBkbUYwWlZGMVpYVmxJRDBnVzEwN1hHNTlYRzVjYmk4cVhHNGdJQ0FnVzNScGJXVnpkR0Z0Y0YwNklFWnlZVzFsSUhScGJXVnpkR0Z0Y0Z4dUlDQWdJRnRwYm5SZE9pQlVhVzFsSUhOcGJtTmxJR3hoYzNRZ1puSmhiV1ZjYmlvdlhHNW1kVzVqZEdsdmJpQm1hWEpsUVd4c0tHWnlZVzFsVTNSaGJYQXNJR1ZzWVhCelpXUXBJSHRjYmlBZ0lDQnNaWFFnYldWMGFHOWtJRDBnZTMwN1hHNGdJQ0FnYkdWMElHMWxkR2h2WkU1aGJXVWdQU0FuSnp0Y2JpQWdJQ0JzWlhRZ2FYTlNaVzVrWlhKVGRHVndJRDBnWm1Gc2MyVTdYRzRnSUNBZ2JHVjBJSEJ5YjJObGMzTTdYRzRnSUNBZ2JHVjBJSEpsYzNWc2REdGNibHh1SUNBZ0lISmxjMjlzZG1WUmRXVjFaWE1vS1R0Y2JseHVJQ0FnSUdOdmJuTjBJRzUxYlZKMWJtNXBibWNnUFNCeWRXNXVhVzVuUTI5MWJuUTdYRzVjYmlBZ0lDQm1iM0lnS0d4bGRDQnBJRDBnTURzZ2FTQThJRzUxYlZCeWIyTmxjM05UZEdWd2N6c2dhU3NyS1NCN1hHNGdJQ0FnSUNBZ0lHMWxkR2h2WkNBOUlIQnliMk5sYzNOUGNtUmxjbHRwWFR0Y2JpQWdJQ0FnSUNBZ2JXVjBhRzlrVG1GdFpTQTlJRzFsZEdodlpDNXpkR1Z3TzF4dUlDQWdJQ0FnSUNCcGMxSmxibVJsY2xOMFpYQWdQU0J0WlhSb2IyUXVhWE5TWlc1a1pYSWdQeUIwY25WbElEb2dabUZzYzJVN1hHNWNiaUFnSUNBZ0lDQWdabTl5SUNoc1pYUWdhU0E5SURBN0lHa2dQQ0J1ZFcxU2RXNXVhVzVuT3lCcEt5c3BJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lIQnliMk5sYzNNZ1BTQnlkVzV1YVc1blVISnZZMlZ6YzJWelczSjFibTVwYm1kSlpITmJhVjFkTzF4dVhHNGdJQ0FnSUNBZ0lDQWdJQ0JwWmlBb2NISnZZMlZ6Y3lBbUppQndjbTlqWlhOelcyMWxkR2h2WkU1aGJXVmRJQ1ltSUNnaGFYTlNaVzVrWlhKVGRHVndJSHg4SUNocGMxSmxibVJsY2xOMFpYQWdKaVlnY0hKdlkyVnpjeTVmY21WdVpHVnlJRDA5UFNCMGNuVmxLU2twSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCeVpYTjFiSFFnUFNCd2NtOWpaWE56VzIxbGRHaHZaRTVoYldWZExtTmhiR3dvY0hKdlkyVnpjeXdnY0hKdlkyVnpjeXdnWm5KaGJXVlRkR0Z0Y0N3Z1pXeGhjSE5sWkNrN1hHNGdJQ0FnSUNBZ0lDQWdJQ0I5WEc1Y2JpQWdJQ0FnSUNBZ0lDQWdJR2xtSUNodFpYUm9iMlF1WkdWamFXUmxVbVZ1WkdWeUtTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdjSEp2WTJWemN5NWZjbVZ1WkdWeUlEMGdLSEJ5YjJObGMzTmJiV1YwYUc5a1RtRnRaVjBnSmlZZ2NtVnpkV3gwSUQwOVBTQm1ZV3h6WlNrZ1B5Qm1ZV3h6WlNBNklIUnlkV1U3SUZ4dUlDQWdJQ0FnSUNBZ0lDQWdmVnh1SUNBZ0lDQWdJQ0I5WEc0Z0lDQWdmVnh1WEc0Z0lDQWdjbVYwZFhKdUlHRmpkR2wyWlVOdmRXNTBJRDhnZEhKMVpTQTZJR1poYkhObE8xeHVmVnh1WEc0dkx5QkdkVzVqZEdsdmJpQjBieUJtYVhKbElHVjJaWEo1SUdaeVlXMWxYRzVtZFc1amRHbHZiaUJtY21GdFpTZ3BJSHRjYmlBZ0lDQjBhV05yS0NobWNtRnRaVk4wWVcxd0tTQTlQaUI3WEc0Z0lDQWdJQ0FnSUdsbUlDaHBjMUoxYm01cGJtY3BJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lHWnlZVzFsS0NrN1hHNGdJQ0FnSUNBZ0lIMWNibHh1SUNBZ0lDQWdJQ0IwYVcxbGNpNTFjR1JoZEdVb1puSmhiV1ZUZEdGdGNDazdYRzRnSUNBZ0lDQWdJR2x6VW5WdWJtbHVaeUE5SUdacGNtVkJiR3dvWm5KaGJXVlRkR0Z0Y0N3Z2RHbHRaWEl1WjJWMFJXeGhjSE5sWkNncEtUdGNiaUFnSUNCOUtUdGNibjFjYmx4dUx5OGdVM1JoY25RZ2JHOXZjRnh1Wm5WdVkzUnBiMjRnYzNSaGNuUW9LU0I3WEc0Z0lDQWdhV1lnS0NGcGMxSjFibTVwYm1jcElIdGNiaUFnSUNBZ0lDQWdkR2x0WlhJdWMzUmhjblFvS1R0Y2JpQWdJQ0FnSUNBZ2FYTlNkVzV1YVc1bklEMGdkSEoxWlR0Y2JpQWdJQ0FnSUNBZ1puSmhiV1VvS1R0Y2JpQWdJQ0I5WEc1OVhHNWNiaTh2SUZOMGIzQWdiRzl2Y0Z4dVpuVnVZM1JwYjI0Z2MzUnZjQ2dwSUh0Y2JpQWdJQ0JwYzFKMWJtNXBibWNnUFNCbVlXeHpaVHRjYm4xY2JseHVMeThnUlhod2IzSjBjMXh1Wlhod2IzSjBJR1oxYm1OMGFXOXVJR2RsZEZCeWIyTmxjM05KWkNncElIdGNiaUFnSUNCeVpYUjFjbTRnWTNWeWNtVnVkRkJ5YjJObGMzTkpaQ3NyTzF4dWZWeHVYRzR2S2x4dUlDQWdJRnRwYm5SZE9pQlFjbTlqWlhOeklFbEVJSFJ2SUdGamRHbDJZWFJsWEc0Z0lDQWdXMUJ5YjJObGMzTmRPaUJRY205alpYTnpJSFJ2SUdGamRHbDJZWFJsWEc0cUwxeHVaWGh3YjNKMElHWjFibU4wYVc5dUlHRmpkR2wyWVhSbEtHbGtMQ0J3Y205alpYTnpLU0I3WEc0Z0lDQWdkWEJrWVhSbFRHbHpkSE1vYVdRc0lHRmpkR2wyWVhSbFVYVmxkV1VzSUdSbFlXTjBhWFpoZEdWUmRXVjFaU2s3WEc0Z0lDQWdjblZ1Ym1sdVoxQnliMk5sYzNObGMxdHBaRjBnUFNCd2NtOWpaWE56TzF4dVhHNGdJQ0FnYVdZZ0tDRnBjMUoxYm01cGJtY3BJSHRjYmlBZ0lDQWdJQ0FnYzNSaGNuUW9LVHRjYmlBZ0lDQjlYRzU5WEc1Y2JpOHFYRzRnSUNBZ1cybHVkRjA2SUZCeWIyTmxjM01nU1VRZ2RHOGdaR1ZoWTNScGRtRjBaVnh1S2k5Y2JtVjRjRzl5ZENCbWRXNWpkR2x2YmlCa1pXRmpkR2wyWVhSbEtHbGtLU0I3WEc0Z0lDQWdkWEJrWVhSbFRHbHpkSE1vYVdRc0lHUmxZV04wYVhaaGRHVlJkV1YxWlN3Z1lXTjBhWFpoZEdWUmRXVjFaU2s3WEc1OUlsMTlcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL3Byb2Nlc3MvbG9vcC5qc1xuICoqIG1vZHVsZSBpZCA9IDQ2XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfZGljdGlvbmFyeSA9IHJlcXVpcmUoJy4uLy4uL3ZhbHVlLXR5cGVzL3NldHRpbmdzL2RpY3Rpb25hcnknKTtcblxudmFyIHRyYW5zZm9ybVByb3BzID0ge307XG5cbnZhciBTQ0FMRSA9ICdzY2FsZSc7XG52YXIgUk9UQVRFID0gJ3JvdGF0ZSc7XG52YXIgVFJBTlNGT1JNX1BFUlNQRUNUSVZFID0gJ3RyYW5zZm9ybVBlcnNwZWN0aXZlJztcbnZhciBURVJNUyA9IFsndHJhbnNsYXRlJywgU0NBTEUsIFJPVEFURSwgJ3NrZXcnLCBUUkFOU0ZPUk1fUEVSU1BFQ1RJVkVdO1xuXG50cmFuc2Zvcm1Qcm9wc1tST1RBVEVdID0gdHJhbnNmb3JtUHJvcHNbU0NBTEVdID0gdHJhbnNmb3JtUHJvcHNbVFJBTlNGT1JNX1BFUlNQRUNUSVZFXSA9IHRydWU7XG5cblRFUk1TLmZvckVhY2goZnVuY3Rpb24gKHRlcm0pIHtcbiAgcmV0dXJuIF9kaWN0aW9uYXJ5LmF4ZXMuZm9yRWFjaChmdW5jdGlvbiAoYXhpcykge1xuICAgIHJldHVybiB0cmFuc2Zvcm1Qcm9wc1t0ZXJtICsgYXhpc10gPSB0cnVlO1xuICB9KTtcbn0pO1xuXG5leHBvcnRzLmRlZmF1bHQgPSB0cmFuc2Zvcm1Qcm9wcztcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJblJ5WVc1elptOXliUzF3Y205d2N5NXFjeUpkTENKdVlXMWxjeUk2VzEwc0ltMWhjSEJwYm1keklqb2lPenM3T3pzN1FVRkZRU3hKUVVGSkxHTkJRV01zUjBGQlJ5eEZRVUZGTEVOQlFVTTdPMEZCUlhoQ0xFbEJRVTBzUzBGQlN5eEhRVUZITEU5QlFVOHNRMEZCUXp0QlFVTjBRaXhKUVVGTkxFMUJRVTBzUjBGQlJ5eFJRVUZSTEVOQlFVTTdRVUZEZUVJc1NVRkJUU3h4UWtGQmNVSXNSMEZCUnl4elFrRkJjMElzUTBGQlF6dEJRVU55UkN4SlFVRk5MRXRCUVVzc1IwRkJSeXhEUVVGRExGZEJRVmNzUlVGQlJTeExRVUZMTEVWQlFVVXNUVUZCVFN4RlFVRkZMRTFCUVUwc1JVRkJSU3h4UWtGQmNVSXNRMEZCUXl4RFFVRkRPenRCUVVVeFJTeGpRVUZqTEVOQlFVTXNUVUZCVFN4RFFVRkRMRWRCUVVjc1kwRkJZeXhEUVVGRExFdEJRVXNzUTBGQlF5eEhRVUZITEdOQlFXTXNRMEZCUXl4eFFrRkJjVUlzUTBGQlF5eEhRVUZITEVsQlFVa3NRMEZCUXpzN1FVRkZPVVlzUzBGQlN5eERRVUZETEU5QlFVOHNRMEZCUXl4VlFVRkRMRWxCUVVrN1UwRkJTeXhaUVZobUxFbEJRVWtzUTBGWFowSXNUMEZCVHl4RFFVRkRMRlZCUVVNc1NVRkJTVHRYUVVGTExHTkJRV01zUTBGQlF5eEpRVUZKTEVkQlFVY3NTVUZCU1N4RFFVRkRMRWRCUVVjc1NVRkJTVHRIUVVGQkxFTkJRVU03UTBGQlFTeERRVUZETEVOQlFVTTdPMnRDUVVWeVJTeGpRVUZqSWl3aVptbHNaU0k2SW5SeVlXNXpabTl5YlMxd2NtOXdjeTVxY3lJc0luTnZkWEpqWlhORGIyNTBaVzUwSWpwYkltbHRjRzl5ZENCN0lHRjRaWE1nZlNCbWNtOXRJQ2N1TGk4dUxpOTJZV3gxWlMxMGVYQmxjeTl6WlhSMGFXNW5jeTlrYVdOMGFXOXVZWEo1Snp0Y2JseHViR1YwSUhSeVlXNXpabTl5YlZCeWIzQnpJRDBnZTMwN1hHNWNibU52Ym5OMElGTkRRVXhGSUQwZ0ozTmpZV3hsSnp0Y2JtTnZibk4wSUZKUFZFRlVSU0E5SUNkeWIzUmhkR1VuTzF4dVkyOXVjM1FnVkZKQlRsTkdUMUpOWDFCRlVsTlFSVU5VU1ZaRklEMGdKM1J5WVc1elptOXliVkJsY25Od1pXTjBhWFpsSnp0Y2JtTnZibk4wSUZSRlVrMVRJRDBnV3lkMGNtRnVjMnhoZEdVbkxDQlRRMEZNUlN3Z1VrOVVRVlJGTENBbmMydGxkeWNzSUZSU1FVNVRSazlTVFY5UVJWSlRVRVZEVkVsV1JWMDdYRzVjYm5SeVlXNXpabTl5YlZCeWIzQnpXMUpQVkVGVVJWMGdQU0IwY21GdWMyWnZjbTFRY205d2MxdFRRMEZNUlYwZ1BTQjBjbUZ1YzJadmNtMVFjbTl3YzF0VVVrRk9VMFpQVWsxZlVFVlNVMUJGUTFSSlZrVmRJRDBnZEhKMVpUdGNibHh1VkVWU1RWTXVabTl5UldGamFDZ29kR1Z5YlNrZ1BUNGdZWGhsY3k1bWIzSkZZV05vS0NoaGVHbHpLU0E5UGlCMGNtRnVjMlp2Y20xUWNtOXdjMXQwWlhKdElDc2dZWGhwYzEwZ1BTQjBjblZsS1NrN1hHNWNibVY0Y0c5eWRDQmtaV1poZFd4MElIUnlZVzV6Wm05eWJWQnliM0J6T3lKZGZRPT1cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL3JlbmRlci9jc3MvdHJhbnNmb3JtLXByb3BzLmpzXG4gKiogbW9kdWxlIGlkID0gNDdcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbi8qXG4gICAgRGV0ZWN0IGFuZCBsb2FkIGFuIGFwcHJvcHJpYXRlIGNsb2NrIHNldHRpbmcgZm9yIHRoZSBlbnZpcm9ubWVudFxuKi9cblxudmFyIGhhc1JBRiA9IHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUgPyB0cnVlIDogZmFsc2U7XG5cbnZhciB0aWNrID0gdW5kZWZpbmVkO1xuXG5pZiAoaGFzUkFGKSB7XG4gICAgdGljayA9IHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWU7XG59IGVsc2Uge1xuICAgIChmdW5jdGlvbiAoKSB7XG4gICAgICAgIC8qXG4gICAgICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUgcG9seWZpbGxcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgRm9yIElFOC85IEZsaW5zdG9uZXMgYW5kIG5vbi1icm93c2VyIGVudmlyb25tZW50c1xuICAgICAgICAgICAgIFRha2VuIGZyb20gUGF1bCBJcmlzaC4gV2UndmUgc3RyaXBwZWQgb3V0IGNhbmNlbEFuaW1hdGlvbkZyYW1lIGNoZWNrcyBiZWNhdXNlIHdlIGRvbid0IGZveCB3aXRoIHRoYXRcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgaHR0cDovL3BhdWxpcmlzaC5jb20vMjAxMS9yZXF1ZXN0YW5pbWF0aW9uZnJhbWUtZm9yLXNtYXJ0LWFuaW1hdGluZy9cbiAgICAgICAgICAgIGh0dHA6Ly9teS5vcGVyYS5jb20vZW1vbGxlci9ibG9nLzIwMTEvMTIvMjAvcmVxdWVzdGFuaW1hdGlvbmZyYW1lLWZvci1zbWFydC1lci1hbmltYXRpbmdcbiAgICAgICAgICAgICBcbiAgICAgICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSBwb2x5ZmlsbCBieSBFcmlrIE3DtmxsZXIuIGZpeGVzIGZyb20gUGF1bCBJcmlzaCBhbmQgVGlubyBaaWpkZWxcbiAgICAgICAgICAgICBcbiAgICAgICAgICAgIE1JVCBsaWNlbnNlXG4gICAgICAgICovXG4gICAgICAgIHZhciBsYXN0VGltZSA9IDA7XG5cbiAgICAgICAgdGljayA9IGZ1bmN0aW9uIChjYWxsYmFjaykge1xuICAgICAgICAgICAgdmFyIGN1cnJlbnRUaW1lID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XG4gICAgICAgICAgICB2YXIgdGltZVRvQ2FsbCA9IE1hdGgubWF4KDAsIDE2IC0gKGN1cnJlbnRUaW1lIC0gbGFzdFRpbWUpKTtcblxuICAgICAgICAgICAgbGFzdFRpbWUgPSBjdXJyZW50VGltZSArIHRpbWVUb0NhbGw7XG5cbiAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBjYWxsYmFjayhsYXN0VGltZSk7XG4gICAgICAgICAgICB9LCB0aW1lVG9DYWxsKTtcbiAgICAgICAgfTtcbiAgICB9KSgpO1xufVxuXG5leHBvcnRzLmRlZmF1bHQgPSB0aWNrO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluUnBZMnN1YW5NaVhTd2libUZ0WlhNaU9sdGRMQ0p0WVhCd2FXNW5jeUk2SWpzN096czdPenRCUVVsQkxFbEJRVTBzVFVGQlRTeEhRVUZITEVGQlFVTXNUMEZCVHl4TlFVRk5MRXRCUVVzc1YwRkJWeXhKUVVGSkxFMUJRVTBzUTBGQlF5eHhRa0ZCY1VJc1IwRkJTU3hKUVVGSkxFZEJRVWNzUzBGQlN5eERRVUZET3p0QlFVVTVSaXhKUVVGSkxFbEJRVWtzV1VGQlFTeERRVUZET3p0QlFVVlVMRWxCUVVrc1RVRkJUU3hGUVVGRk8wRkJRMUlzVVVGQlNTeEhRVUZITEUxQlFVMHNRMEZCUXl4eFFrRkJjVUlzUTBGQlF6dERRVVYyUXl4TlFVRk5PenM3T3pzN096czdPenM3T3pzN1FVRmxTQ3haUVVGSkxGRkJRVkVzUjBGQlJ5eERRVUZETEVOQlFVTTdPMEZCUldwQ0xGbEJRVWtzUjBGQlJ5eFZRVUZETEZGQlFWRXNSVUZCU3p0QlFVTnFRaXhuUWtGQlRTeFhRVUZYTEVkQlFVY3NTVUZCU1N4SlFVRkpMRVZCUVVVc1EwRkJReXhQUVVGUExFVkJRVVVzUTBGQlF6dEJRVU42UXl4blFrRkJUU3hWUVVGVkxFZEJRVWNzU1VGQlNTeERRVUZETEVkQlFVY3NRMEZCUXl4RFFVRkRMRVZCUVVVc1JVRkJSU3hKUVVGSkxGZEJRVmNzUjBGQlJ5eFJRVUZSTEVOQlFVRXNRVUZCUXl4RFFVRkRMRU5CUVVNN08wRkJSVGxFTEc5Q1FVRlJMRWRCUVVjc1YwRkJWeXhIUVVGSExGVkJRVlVzUTBGQlF6czdRVUZGY0VNc2MwSkJRVlVzUTBGQlF6dDFRa0ZCVFN4UlFVRlJMRU5CUVVNc1VVRkJVU3hEUVVGRE8yRkJRVUVzUlVGQlJTeFZRVUZWTEVOQlFVTXNRMEZCUXp0VFFVTndSQ3hEUVVGQk96dERRVU5LT3p0clFrRkZZeXhKUVVGSklpd2labWxzWlNJNkluUnBZMnN1YW5NaUxDSnpiM1Z5WTJWelEyOXVkR1Z1ZENJNld5SXZLbHh1SUNBZ0lFUmxkR1ZqZENCaGJtUWdiRzloWkNCaGJpQmhjSEJ5YjNCeWFXRjBaU0JqYkc5amF5QnpaWFIwYVc1bklHWnZjaUIwYUdVZ1pXNTJhWEp2Ym0xbGJuUmNiaW92WEc1Y2JtTnZibk4wSUdoaGMxSkJSaUE5SUNoMGVYQmxiMllnZDJsdVpHOTNJQ0U5UFNBbmRXNWtaV1pwYm1Wa0p5QW1KaUIzYVc1a2IzY3VjbVZ4ZFdWemRFRnVhVzFoZEdsdmJrWnlZVzFsS1NBL0lIUnlkV1VnT2lCbVlXeHpaVHRjYmx4dWJHVjBJSFJwWTJzN1hHNWNibWxtSUNob1lYTlNRVVlwSUh0Y2JpQWdJQ0IwYVdOcklEMGdkMmx1Wkc5M0xuSmxjWFZsYzNSQmJtbHRZWFJwYjI1R2NtRnRaVHRjYmx4dWZTQmxiSE5sSUh0Y2JpQWdJQ0F2S2x4dUlDQWdJQ0FnSUNCeVpYRjFaWE4wUVc1cGJXRjBhVzl1Um5KaGJXVWdjRzlzZVdacGJHeGNiaUFnSUNBZ0lDQWdYRzRnSUNBZ0lDQWdJRVp2Y2lCSlJUZ3ZPU0JHYkdsdWMzUnZibVZ6SUdGdVpDQnViMjR0WW5KdmQzTmxjaUJsYm5acGNtOXViV1Z1ZEhOY2JseHVJQ0FnSUNBZ0lDQlVZV3RsYmlCbWNtOXRJRkJoZFd3Z1NYSnBjMmd1SUZkbEozWmxJSE4wY21sd2NHVmtJRzkxZENCallXNWpaV3hCYm1sdFlYUnBiMjVHY21GdFpTQmphR1ZqYTNNZ1ltVmpZWFZ6WlNCM1pTQmtiMjRuZENCbWIzZ2dkMmwwYUNCMGFHRjBYRzRnSUNBZ0lDQWdJRnh1SUNBZ0lDQWdJQ0JvZEhSd09pOHZjR0YxYkdseWFYTm9MbU52YlM4eU1ERXhMM0psY1hWbGMzUmhibWx0WVhScGIyNW1jbUZ0WlMxbWIzSXRjMjFoY25RdFlXNXBiV0YwYVc1bkwxeHVJQ0FnSUNBZ0lDQm9kSFJ3T2k4dmJYa3ViM0JsY21FdVkyOXRMMlZ0YjJ4c1pYSXZZbXh2Wnk4eU1ERXhMekV5THpJd0wzSmxjWFZsYzNSaGJtbHRZWFJwYjI1bWNtRnRaUzFtYjNJdGMyMWhjblF0WlhJdFlXNXBiV0YwYVc1blhHNGdJQ0FnSUNBZ0lDQmNiaUFnSUNBZ0lDQWdjbVZ4ZFdWemRFRnVhVzFoZEdsdmJrWnlZVzFsSUhCdmJIbG1hV3hzSUdKNUlFVnlhV3NnVGNPMmJHeGxjaTRnWm1sNFpYTWdabkp2YlNCUVlYVnNJRWx5YVhOb0lHRnVaQ0JVYVc1dklGcHBhbVJsYkZ4dUlDQWdJQ0FnSUNBZ1hHNGdJQ0FnSUNBZ0lFMUpWQ0JzYVdObGJuTmxYRzRnSUNBZ0tpOWNiaUFnSUNCc1pYUWdiR0Z6ZEZScGJXVWdQU0F3TzF4dVhHNGdJQ0FnZEdsamF5QTlJQ2hqWVd4c1ltRmpheWtnUFQ0Z2UxeHVJQ0FnSUNBZ0lDQmpiMjV6ZENCamRYSnlaVzUwVkdsdFpTQTlJRzVsZHlCRVlYUmxLQ2t1WjJWMFZHbHRaU2dwTzF4dUlDQWdJQ0FnSUNCamIyNXpkQ0IwYVcxbFZHOURZV3hzSUQwZ1RXRjBhQzV0WVhnb01Dd2dNVFlnTFNBb1kzVnljbVZ1ZEZScGJXVWdMU0JzWVhOMFZHbHRaU2twTzF4dVhHNGdJQ0FnSUNBZ0lHeGhjM1JVYVcxbElEMGdZM1Z5Y21WdWRGUnBiV1VnS3lCMGFXMWxWRzlEWVd4c08xeHVYRzRnSUNBZ0lDQWdJSE5sZEZScGJXVnZkWFFvS0NrZ1BUNGdZMkZzYkdKaFkyc29iR0Z6ZEZScGJXVXBMQ0IwYVcxbFZHOURZV3hzS1R0Y2JpQWdJQ0I5WEc1OVhHNWNibVY0Y0c5eWRDQmtaV1poZFd4MElIUnBZMnM3SWwxOVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvcHJvY2Vzcy90aWNrLmpzXG4gKiogbW9kdWxlIGlkID0gNDhcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyJdLCJzb3VyY2VSb290IjoiIiwiZmlsZSI6InBvcG1vdGlvbi5nbG9iYWwuanMifQ==