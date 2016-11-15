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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9sb2FkL2dsb2JhbC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBOztJQUFZOzs7O0FBRVosSUFBTSxRQUFRLE9BQU8sTUFBUDs7QUFFZCxVQUFVLFVBQVYsR0FBdUIsWUFBWTtBQUNqQyxTQUFPLE1BQVAsR0FBZ0IsS0FBaEIsQ0FEaUM7Q0FBWjs7QUFJdkIsT0FBTyxNQUFQLEdBQWdCLE9BQU8sU0FBUCxHQUFtQixTQUFuQiIsImZpbGUiOiJnbG9iYWwuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL01hdHQvU2l0ZXMvcG9wbW90aW9uIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgcG9wbW90aW9uIGZyb20gJy4uL3BvcG1vdGlvbic7XG5cbmNvbnN0IFVJcmVmID0gd2luZG93Lm1vdGlvbjtcblxucG9wbW90aW9uLm5vQ29uZmxpY3QgPSBmdW5jdGlvbiAoKSB7XG4gIHdpbmRvdy5tb3Rpb24gPSBVSXJlZjtcbn07XG5cbndpbmRvdy5tb3Rpb24gPSB3aW5kb3cucG9wbW90aW9uID0gcG9wbW90aW9uOyJdfQ==

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports.Action = exports.transformers = exports.valueType = exports.setGlobalDilation = exports.utils = exports.calc = exports.detectFlow = exports.easing = exports.svgPath = exports.svg = exports.object = exports.css = exports.attr = exports.createAdapter = exports.timeline = exports.stagger = exports.task = exports.input = exports.track = exports.physics = exports.tween = exports.flow = undefined;
	
	var _timer = __webpack_require__(2);
	
	Object.defineProperty(exports, 'setGlobalDilation', {
	  enumerable: true,
	  get: function () {
	    return _timer.setGlobalDilation;
	  }
	});
	
	var _Action = __webpack_require__(3);
	
	var _Action2 = _interopRequireDefault(_Action);
	
	var _Flow = __webpack_require__(4);
	
	var _Flow2 = _interopRequireDefault(_Flow);
	
	var _Tween = __webpack_require__(5);
	
	var _Tween2 = _interopRequireDefault(_Tween);
	
	var _Physics = __webpack_require__(6);
	
	var _Physics2 = _interopRequireDefault(_Physics);
	
	var _Track = __webpack_require__(7);
	
	var _Track2 = _interopRequireDefault(_Track);
	
	var _Task = __webpack_require__(8);
	
	var _Task2 = _interopRequireDefault(_Task);
	
	var _Input = __webpack_require__(9);
	
	var _Input2 = _interopRequireDefault(_Input);
	
	var _stagger2 = __webpack_require__(10);
	
	var _stagger3 = _interopRequireDefault(_stagger2);
	
	var _timeline2 = __webpack_require__(11);
	
	var _timeline3 = _interopRequireDefault(_timeline2);
	
	var _adapter = __webpack_require__(12);
	
	var _adapter2 = _interopRequireDefault(_adapter);
	
	var _attrAdapter = __webpack_require__(13);
	
	var _attrAdapter2 = _interopRequireDefault(_attrAdapter);
	
	var _cssAdapter = __webpack_require__(14);
	
	var _cssAdapter2 = _interopRequireDefault(_cssAdapter);
	
	var _objectAdapter = __webpack_require__(15);
	
	var _objectAdapter2 = _interopRequireDefault(_objectAdapter);
	
	var _svgAdapter = __webpack_require__(16);
	
	var _svgAdapter2 = _interopRequireDefault(_svgAdapter);
	
	var _svgPathAdapter = __webpack_require__(17);
	
	var _svgPathAdapter2 = _interopRequireDefault(_svgPathAdapter);
	
	var _presetEasing = __webpack_require__(18);
	
	var _presetEasing2 = _interopRequireDefault(_presetEasing);
	
	var _getFlow = __webpack_require__(19);
	
	var _getFlow2 = _interopRequireDefault(_getFlow);
	
	var _calc2 = __webpack_require__(20);
	
	var _calc = _interopRequireWildcard(_calc2);
	
	var _utils2 = __webpack_require__(21);
	
	var _utils = _interopRequireWildcard(_utils2);
	
	var _alpha = __webpack_require__(22);
	
	var _alpha2 = _interopRequireDefault(_alpha);
	
	var _angle = __webpack_require__(23);
	
	var _angle2 = _interopRequireDefault(_angle);
	
	var _color = __webpack_require__(24);
	
	var _color2 = _interopRequireDefault(_color);
	
	var _complex = __webpack_require__(25);
	
	var _complex2 = _interopRequireDefault(_complex);
	
	var _hex = __webpack_require__(26);
	
	var _hex2 = _interopRequireDefault(_hex);
	
	var _hsl = __webpack_require__(27);
	
	var _hsl2 = _interopRequireDefault(_hsl);
	
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
	
	// Export factory functions
	var flow = exports.flow = function () {
	  for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	    args[_key] = arguments[_key];
	  }
	
	  return new (Function.prototype.bind.apply(_Flow2.default, [null].concat(args)))();
	}; // Import classes - long term goal to move towards composition
	
	var tween = exports.tween = function (props) {
	  return new _Tween2.default(props);
	};
	var physics = exports.physics = function (props) {
	  return new _Physics2.default(props);
	};
	var track = exports.track = function () {
	  for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
	    args[_key2] = arguments[_key2];
	  }
	
	  return new (Function.prototype.bind.apply(_Track2.default, [null].concat(args)))();
	};
	var input = exports.input = function () {
	  for (var _len3 = arguments.length, args = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
	    args[_key3] = arguments[_key3];
	  }
	
	  return new (Function.prototype.bind.apply(_Input2.default, [null].concat(args)))();
	};
	var task = exports.task = function () {
	  for (var _len4 = arguments.length, args = Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
	    args[_key4] = arguments[_key4];
	  }
	
	  return new (Function.prototype.bind.apply(_Task2.default, [null].concat(args)))();
	};
	exports.stagger = _stagger3.default;
	exports.timeline = _timeline3.default;
	
	// Adapters
	
	exports.createAdapter = _adapter2.default;
	exports.attr = _attrAdapter2.default;
	exports.css = _cssAdapter2.default;
	exports.object = _objectAdapter2.default;
	exports.svg = _svgAdapter2.default;
	exports.svgPath = _svgPathAdapter2.default;
	
	// Easing
	
	exports.easing = _presetEasing2.default;
	var detectFlow = exports.detectFlow = _getFlow2.default;
	
	// Utils
	exports.calc = _calc;
	exports.utils = _utils;
	
	// Value types
	
	var valueType = exports.valueType = { alpha: _alpha2.default, angle: _angle2.default, color: _color2.default, complex: _complex2.default, hex: _hex2.default, hsl: _hsl2.default, px: _px2.default, rgb: _rgb2.default, scale: _scale2.default, shadow: _shadow2.default, unit: _unit2.default };
	
	// Transformers
	exports.transformers = _transformers;
	
	/*
	  Returns a version of the Action bound to a Flow
	
	  We're adding `on` here because Flow extends Action,
	  otherwise creating a circular modular dependency. Future
	  refactoring, ie moving to a compositional model will
	  remove the need for us to do this here.
	*/
	
	_Action2.default.prototype.on = function (element) {
	  if (!element.connect) {
	    element = (0, _getFlow2.default)(element);
	  }
	
	  return element.connect(this);
	};
	
	exports.Action = _Action2.default;
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9wb3Btb3Rpb24uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztrQkFtQ1M7Ozs7QUFsQ1Q7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFzQkE7Ozs7Ozs7Ozs7OztBQVNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUF0Q08sSUFBTSxzQkFBTztvQ0FBSTs7OzswRUFBcUI7Q0FBekI7O0FBQ2IsSUFBTSx3QkFBUSxVQUFDLEtBQUQ7U0FBVyxvQkFBVSxLQUFWO0NBQVg7QUFDZCxJQUFNLDRCQUFVLFVBQUMsS0FBRDtTQUFXLHNCQUFZLEtBQVo7Q0FBWDtBQUNoQixJQUFNLHdCQUFRO3FDQUFJOzs7OzJFQUFzQjtDQUExQjtBQUNkLElBQU0sd0JBQVE7cUNBQUk7Ozs7MkVBQXNCO0NBQTFCO0FBQ2QsSUFBTSxzQkFBTztxQ0FBSTs7OzswRUFBcUI7Q0FBekI7UUFDYjtRQUNBOzs7O1FBR0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOzs7O1FBR0E7QUFFQSxJQUFNLG1EQUFOOzs7UUFHSztRQUNBOzs7O0FBZUwsSUFBTSxnQ0FBWSxFQUFFLHNCQUFGLEVBQVMsc0JBQVQsRUFBZ0Isc0JBQWhCLEVBQXVCLDBCQUF2QixFQUFnQyxrQkFBaEMsRUFBcUMsa0JBQXJDLEVBQTBDLGdCQUExQyxFQUE4QyxrQkFBOUMsRUFBbUQsc0JBQW5ELEVBQTBELHdCQUExRCxFQUFrRSxvQkFBbEUsRUFBWjs7O1FBR0Q7Ozs7Ozs7Ozs7O0FBVVosaUJBQU8sU0FBUCxDQUFpQixFQUFqQixHQUFzQixVQUFVLE9BQVYsRUFBbUI7QUFDdkMsTUFBSSxDQUFDLFFBQVEsT0FBUixFQUFpQjtBQUNwQixjQUFVLHVCQUFRLE9BQVIsQ0FBVixDQURvQjtHQUF0Qjs7QUFJQSxTQUFPLFFBQVEsT0FBUixDQUFnQixJQUFoQixDQUFQLENBTHVDO0NBQW5COztRQVFiIiwiZmlsZSI6InBvcG1vdGlvbi5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvTWF0dC9TaXRlcy9wb3Btb3Rpb24iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnQgY2xhc3NlcyAtIGxvbmcgdGVybSBnb2FsIHRvIG1vdmUgdG93YXJkcyBjb21wb3NpdGlvblxuaW1wb3J0IEFjdGlvbiBmcm9tICcuL2FjdGlvbnMvQWN0aW9uJztcbmltcG9ydCBGbG93IGZyb20gJy4vYWN0aW9ucy9GbG93JztcbmltcG9ydCBUd2VlbiBmcm9tICcuL2FjdGlvbnMvVHdlZW4nO1xuaW1wb3J0IFBoeXNpY3MgZnJvbSAnLi9hY3Rpb25zL1BoeXNpY3MnO1xuaW1wb3J0IFRyYWNrIGZyb20gJy4vYWN0aW9ucy9UcmFjayc7XG5pbXBvcnQgVGFzayBmcm9tICcuL3Rhc2svVGFzayc7XG5pbXBvcnQgSW5wdXQgZnJvbSAnLi9pbnB1dC9JbnB1dCc7XG5cbi8vIEV4cG9ydCBmYWN0b3J5IGZ1bmN0aW9uc1xuZXhwb3J0IGNvbnN0IGZsb3cgPSAoLi4uYXJncykgPT4gbmV3IEZsb3coLi4uYXJncyk7XG5leHBvcnQgY29uc3QgdHdlZW4gPSAocHJvcHMpID0+IG5ldyBUd2Vlbihwcm9wcyk7XG5leHBvcnQgY29uc3QgcGh5c2ljcyA9IChwcm9wcykgPT4gbmV3IFBoeXNpY3MocHJvcHMpO1xuZXhwb3J0IGNvbnN0IHRyYWNrID0gKC4uLmFyZ3MpID0+IG5ldyBUcmFjayguLi5hcmdzKTtcbmV4cG9ydCBjb25zdCBpbnB1dCA9ICguLi5hcmdzKSA9PiBuZXcgSW5wdXQoLi4uYXJncyk7XG5leHBvcnQgY29uc3QgdGFzayA9ICguLi5hcmdzKSA9PiBuZXcgVGFzayguLi5hcmdzKTtcbmV4cG9ydCBzdGFnZ2VyIGZyb20gJy4vaW5jL3N0YWdnZXInO1xuZXhwb3J0IHRpbWVsaW5lIGZyb20gJy4vaW5jL3RpbWVsaW5lJztcblxuLy8gQWRhcHRlcnNcbmV4cG9ydCBjcmVhdGVBZGFwdGVyIGZyb20gJy4vYWRhcHRlci9hZGFwdGVyJztcbmV4cG9ydCBhdHRyIGZyb20gJy4vYWRhcHRlci9hdHRyLWFkYXB0ZXInO1xuZXhwb3J0IGNzcyBmcm9tICcuL2FkYXB0ZXIvY3NzLWFkYXB0ZXInO1xuZXhwb3J0IG9iamVjdCBmcm9tICcuL2FkYXB0ZXIvb2JqZWN0LWFkYXB0ZXInO1xuZXhwb3J0IHN2ZyBmcm9tICcuL2FkYXB0ZXIvc3ZnLWFkYXB0ZXInO1xuZXhwb3J0IHN2Z1BhdGggZnJvbSAnLi9hZGFwdGVyL3N2Zy1wYXRoLWFkYXB0ZXInO1xuXG4vLyBFYXNpbmdcbmV4cG9ydCBlYXNpbmcgZnJvbSAnLi9hY3Rpb25zL2Vhc2luZy9wcmVzZXQtZWFzaW5nJztcbmltcG9ydCBnZXRGbG93IGZyb20gJy4vYWN0aW9ucy9mbG93L2dldC1mbG93JztcbmV4cG9ydCBjb25zdCBkZXRlY3RGbG93ID0gZ2V0RmxvdztcblxuLy8gVXRpbHNcbmV4cG9ydCAqIGFzIGNhbGMgZnJvbSAnLi9pbmMvY2FsYyc7XG5leHBvcnQgKiBhcyB1dGlscyBmcm9tICcuL2luYy91dGlscyc7XG5leHBvcnQgeyBzZXRHbG9iYWxEaWxhdGlvbiB9IGZyb20gJy4vdGFzay90aW1lcic7XG5cbi8vIFZhbHVlIHR5cGVzXG5pbXBvcnQgYWxwaGEgZnJvbSAnLi92YWx1ZS10eXBlcy9hbHBoYSc7XG5pbXBvcnQgYW5nbGUgZnJvbSAnLi92YWx1ZS10eXBlcy9hbmdsZSc7XG5pbXBvcnQgY29sb3IgZnJvbSAnLi92YWx1ZS10eXBlcy9jb2xvcic7XG5pbXBvcnQgY29tcGxleCBmcm9tICcuL3ZhbHVlLXR5cGVzL2NvbXBsZXgnO1xuaW1wb3J0IGhleCBmcm9tICcuL3ZhbHVlLXR5cGVzL2hleCc7XG5pbXBvcnQgaHNsIGZyb20gJy4vdmFsdWUtdHlwZXMvaHNsJztcbmltcG9ydCBweCBmcm9tICcuL3ZhbHVlLXR5cGVzL3B4JztcbmltcG9ydCByZ2IgZnJvbSAnLi92YWx1ZS10eXBlcy9yZ2InO1xuaW1wb3J0IHNjYWxlIGZyb20gJy4vdmFsdWUtdHlwZXMvc2NhbGUnO1xuaW1wb3J0IHNoYWRvdyBmcm9tICcuL3ZhbHVlLXR5cGVzL3NoYWRvdyc7XG5pbXBvcnQgdW5pdCBmcm9tICcuL3ZhbHVlLXR5cGVzL3VuaXQnO1xuZXhwb3J0IGNvbnN0IHZhbHVlVHlwZSA9IHsgYWxwaGEsIGFuZ2xlLCBjb2xvciwgY29tcGxleCwgaGV4LCBoc2wsIHB4LCByZ2IsIHNjYWxlLCBzaGFkb3csIHVuaXQgfTtcblxuLy8gVHJhbnNmb3JtZXJzXG5leHBvcnQgKiBhcyB0cmFuc2Zvcm1lcnMgZnJvbSAnLi9pbmMvdHJhbnNmb3JtZXJzJztcblxuLypcbiAgUmV0dXJucyBhIHZlcnNpb24gb2YgdGhlIEFjdGlvbiBib3VuZCB0byBhIEZsb3dcblxuICBXZSdyZSBhZGRpbmcgYG9uYCBoZXJlIGJlY2F1c2UgRmxvdyBleHRlbmRzIEFjdGlvbixcbiAgb3RoZXJ3aXNlIGNyZWF0aW5nIGEgY2lyY3VsYXIgbW9kdWxhciBkZXBlbmRlbmN5LiBGdXR1cmVcbiAgcmVmYWN0b3JpbmcsIGllIG1vdmluZyB0byBhIGNvbXBvc2l0aW9uYWwgbW9kZWwgd2lsbFxuICByZW1vdmUgdGhlIG5lZWQgZm9yIHVzIHRvIGRvIHRoaXMgaGVyZS5cbiovXG5BY3Rpb24ucHJvdG90eXBlLm9uID0gZnVuY3Rpb24gKGVsZW1lbnQpIHtcbiAgaWYgKCFlbGVtZW50LmNvbm5lY3QpIHtcbiAgICBlbGVtZW50ID0gZ2V0RmxvdyhlbGVtZW50KTtcbiAgfVxuXG4gIHJldHVybiBlbGVtZW50LmNvbm5lY3QodGhpcyk7XG59O1xuXG5leHBvcnQgeyBBY3Rpb24gfTsiXX0=

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports.setGlobalDilation = undefined;
	
	var _utils = __webpack_require__(21);
	
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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy90YXNrL3RpbWVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7O0FBRUEsSUFBTSxjQUFjLEVBQWQ7O0FBRU4sSUFBSSxVQUFVLENBQVY7QUFDSixJQUFJLFVBQVUsSUFBVjtBQUNKLElBQUksV0FBVyxDQUFYOztrQkFFVztBQUNiLFVBQVEsVUFBQyxVQUFELEVBQWdCO0FBQ3RCLGNBQVUsS0FBSyxHQUFMLENBQVMsS0FBSyxHQUFMLENBQVMsYUFBYSxPQUFiLEVBQXNCLFdBQS9CLENBQVQsRUFBc0QsQ0FBdEQsSUFBMkQsUUFBM0QsQ0FEWTtBQUV0QixjQUFVLFVBQVYsQ0FGc0I7R0FBaEI7O0FBS1IsU0FBTztXQUFNLFVBQVUseUJBQVY7R0FBTjs7QUFFUCxjQUFZO1dBQU07R0FBTjs7QUFHUCxJQUFNLGdEQUFvQixVQUFDLFdBQUQ7U0FBaUIsV0FBVyxXQUFYO0NBQWpCIiwiZmlsZSI6InRpbWVyLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9NYXR0L1NpdGVzL3BvcG1vdGlvbiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGN1cnJlbnRUaW1lIH0gZnJvbSAnLi4vaW5jL3V0aWxzJztcblxuY29uc3QgTUFYX0VMQVBTRUQgPSAzMztcblxubGV0IGN1cnJlbnQgPSAwO1xubGV0IGVsYXBzZWQgPSAxNi43O1xubGV0IGRpbGF0aW9uID0gMTtcblxuZXhwb3J0IGRlZmF1bHQge1xuICB1cGRhdGU6IChmcmFtZXN0YW1wKSA9PiB7XG4gICAgZWxhcHNlZCA9IE1hdGgubWF4KE1hdGgubWluKGZyYW1lc3RhbXAgLSBjdXJyZW50LCBNQVhfRUxBUFNFRCksIDEpICogZGlsYXRpb247XG4gICAgY3VycmVudCA9IGZyYW1lc3RhbXA7XG4gIH0sXG5cbiAgc3RhcnQ6ICgpID0+IGN1cnJlbnQgPSBjdXJyZW50VGltZSgpLFxuXG4gIGdldEVsYXBzZWQ6ICgpID0+IGVsYXBzZWRcbn07XG5cbmV4cG9ydCBjb25zdCBzZXRHbG9iYWxEaWxhdGlvbiA9IChuZXdEaWxhdGlvbikgPT4gZGlsYXRpb24gPSBuZXdEaWxhdGlvbjsiXX0=

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _Task2 = __webpack_require__(8);
	
	var _Task3 = _interopRequireDefault(_Task2);
	
	var _calc = __webpack_require__(20);
	
	var _utils = __webpack_require__(21);
	
	var _detect = __webpack_require__(34);
	
	var _detect2 = _interopRequireDefault(_detect);
	
	var _numericalValues = __webpack_require__(35);
	
	var _numericalValues2 = _interopRequireDefault(_numericalValues);
	
	var _detectAdapter = __webpack_require__(36);
	
	var _detectAdapter2 = _interopRequireDefault(_detectAdapter);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var NUM_NUMERICAL_VALUES = _numericalValues2.default.length;
	
	var defaultRenderer = function (_ref) {
	  var state = _ref.state;
	  var adapter = _ref.adapter;
	  var adapterData = _ref.adapterData;
	  var element = _ref.element;
	  return adapter(element, state, adapterData);
	};
	
	var convertIfShouldBeNumber = function (value) {
	  return !isNaN(value) ? parseFloat(value) : value;
	};
	
	var Action = function (_Task) {
	  _inherits(Action, _Task);
	
	  function Action() {
	    var props = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
	
	    _classCallCheck(this, Action);
	
	    props.state = {};
	    props.valueKeys = [];
	    props.parentKeys = [];
	    return _possibleConstructorReturn(this, _Task.call(this, props));
	  }
	
	  /*
	    # Set Action properties
	    ## Set user-defined Action properties
	     @param [object]
	    @return [Action]
	  */
	
	
	  Action.prototype.set = function set() {
	    var props = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
	
	    this.values = this.values || {};
	
	    var values = props.values;
	
	    var propsToSet = _objectWithoutProperties(props, ['values']);
	
	    var inheritable = {};
	
	    // Set non-consumed properties
	    _Task.prototype.set.call(this, propsToSet);
	
	    // Detect correct `adapter` if none exists and `element` is being set
	    if (this.element) {
	      if (!this.adapter) {
	        // Ducktypish check for Adapter
	        this.adapter = (0, _detectAdapter2.default)(this.element);
	
	        if (this.adapter.getElementData) {
	          this.adapterData = this.adapter.getElementData(this.element);
	        }
	      }
	
	      if (!this.onRender) {
	        this.onRender = defaultRenderer;
	      }
	    }
	
	    // Prime an object to inherit from, with only `value` properties
	    for (var key in this.defaultValue) {
	      if (this.defaultValue.hasOwnProperty(key)) {
	        if (propsToSet.hasOwnProperty(key)) {
	          inheritable[key] = propsToSet[key];
	        } else if (this[key] !== undefined) {
	          inheritable[key] = this[key];
	        }
	      }
	    }
	
	    // Update existing values with inheritable properties
	    for (var _key in this.values) {
	      if (this.values.hasOwnProperty(_key)) {
	        this.values[_key] = _extends({}, this.values[_key], inheritable);
	      }
	    }
	
	    // Update
	    if (values) {
	      this.setValues(values, inheritable);
	
	      // Precompute number of value key and parent keys to avoid per-frame measurement
	      this.numValueKeys = this.valueKeys.length;
	      this.numParentKeys = this.parentKeys.length;
	    }
	
	    return this;
	  };
	
	  Action.prototype.setValues = function setValues(values, inherit) {
	    // Iterate over all incoming values and set
	    for (var key in values) {
	      if (values.hasOwnProperty(key)) {
	        var hasChildren = false;
	        var children = {};
	
	        // Merge into existing value or create new
	        var valueAlreadyExists = this.values[key] !== undefined;
	        var newValue = valueAlreadyExists ? _extends({}, this.values[key]) : _extends({}, inherit);
	
	        // If values is not an object, assign value to default prop
	        if (!(0, _utils.isObj)(values[key])) {
	          newValue[this.defaultValueProp] = values[key];
	        } else {
	          newValue = _extends({}, newValue, values[key]);
	        }
	
	        // If we've got an adapter, get the current value
	        if (newValue.current === undefined) {
	          if (this.adapter) {
	            newValue.current = convertIfShouldBeNumber(this.adapter.get(this.element, key));
	          }
	        }
	
	        if (newValue.from === undefined && this.adapter) {
	          newValue.from = newValue.current;
	        }
	
	        // Apply default value properties
	        if (!valueAlreadyExists) {
	          newValue = _extends({}, this.defaultValue, newValue);
	        }
	
	        // If we don't have a value type and we do have an Adapter, check for type with value key
	        if (!newValue.type && this.adapter && this.adapter.checkValueType) {
	          newValue.type = this.adapter.checkValueType(key);
	        }
	
	        // If we still don't have a value type and this is the first time we've set this value, check numerical values for strings and test
	        if (!newValue.type && !this.values[key]) {
	          newValue.type = (0, _detect2.default)(newValue);
	        }
	
	        // If we have a value type, handle. This is my least favourite part of Popmotion, so... enjoy.
	        if (newValue.type) {
	          for (var i = 0; i < NUM_NUMERICAL_VALUES; i++) {
	            var propName = _numericalValues2.default[i];
	            var valueProp = newValue[propName];
	
	            // If this prop is a string and we have a splitter, split
	            if (newValue.type.hasOwnProperty('split')) {
	              var splitProp = (0, _utils.isString)(valueProp) ? newValue.type.split(valueProp) : {};
	
	              for (var splitKey in splitProp) {
	                if (splitProp.hasOwnProperty(splitKey)) {
	                  var combinedKey = key + splitKey;
	
	                  // If we don't have a child value for this key, make one
	                  if (!children[combinedKey]) {
	                    var defaultValue = newValue.type.defaultProps && newValue.type.defaultProps[splitKey] ? newValue.type.defaultProps[splitKey] : newValue.type.defaultProps || {};
	
	                    children[combinedKey] = _extends({}, newValue, defaultValue, {
	                      parent: key,
	                      childKey: splitKey
	                    });
	
	                    delete children[combinedKey].type;
	                  }
	
	                  hasChildren = true;
	                  children[combinedKey][propName] = parseFloat(splitProp[splitKey]);
	                }
	              }
	
	              // If we have a template function, generate
	              if (!newValue.template && newValue.type.template && (0, _utils.isString)(valueProp)) {
	                newValue.template = newValue.type.template(valueProp);
	              }
	            } else if (newValue.type.defaultProps) {
	              newValue = _extends({}, newValue.type.defaultProps, newValue);
	
	              // This is a bit of a hack - this entire function is a hack. Sorry future self. I look forward to scrapping the lot of it.
	              if (newValue.type.defaultProps.type) {
	                newValue.type = newValue.type.defaultProps.type;
	              }
	            }
	
	            if (valueProp !== undefined && newValue.type.parse) {
	              newValue[propName] = newValue.type.parse(valueProp, newValue);
	            }
	          }
	        } // End value type nonsense
	
	        // Set `prev` to `current` for first frame after set
	        newValue.prev = newValue.current;
	
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
	
	        this.values[key] = newValue;
	      }
	    }
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
	
	    // Update parent values
	    for (var _i = 0; _i < this.numParentKeys; _i++) {
	      var _key2 = this.parentKeys[_i];
	      var _value = this.values[_key2];
	
	      _value.current = _value.type.combine(_value.children, _value.template);
	
	      this.state[_key2] = _value.current;
	    }
	
	    if (this.onFrame) {
	      this.onFrame(this.state, this);
	    }
	
	    return this.onCleanup ? true : hasChanged;
	  };
	
	  Action.prototype.inherit = function inherit() {
	    var props = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
	    var values = props.values;
	
	    var propsToSet = _objectWithoutProperties(props, ['values']);
	
	    var newAction = _Task.prototype.inherit.call(this, propsToSet);
	
	    if (values) {
	      newAction.set({ values: values });
	    }
	
	    return newAction;
	  };
	
	  Action.prototype.pause = function pause() {
	    _Task.prototype.stop.call(this);
	    return this;
	  };
	
	  Action.prototype.resume = function resume() {
	    _Task.prototype.start.call(this);
	    return this;
	  };
	
	  Action.prototype.toggle = function toggle() {
	    return this.isActive ? this.pause() : this.resume();
	  };
	
	  Action.prototype.start = function start() {
	    var values = this.values;
	    _Task.prototype.start.call(this);
	
	    for (var key in values) {
	      if (values.hasOwnProperty(key)) {
	        values[key].prev = values[key].origin = values[key].current;
	      }
	    }
	
	    return this;
	  };
	
	  Action.extendDefaultValue = function extendDefaultValue(props) {
	    return _extends({}, this.prototype.defaultValue, props);
	  };
	
	  Action.extendDefaultProps = function extendDefaultProps(props) {
	    return _extends({}, this.prototype.defaultProps, props);
	  };
	
	  return Action;
	}(_Task3.default);
	
	Action.prototype.defaultValueProp = 'current';
	Action.prototype.defaultValue = {
	  velocity: 0,
	  round: false,
	  min: undefined,
	  max: undefined,
	  transform: undefined
	};
	
	exports.default = Action;
	//# sourceMappingURL=data:application/json;base64,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Q0FBaUIsZ0JBQWpCLEdBQW9DLFNBQXBDO0FBQ0EsT0FBTyxTQUFQLENBQWlCLFlBQWpCLEdBQWdDO0FBQzlCLFlBQVUsQ0FBVjtBQUNBLFNBQU8sS0FBUDtBQUNBLE9BQUssU0FBTDtBQUNBLE9BQUssU0FBTDtBQUNBLGFBQVcsU0FBWDtDQUxGOztrQkFRZSIsImZpbGUiOiJBY3Rpb24uanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL01hdHQvU2l0ZXMvcG9wbW90aW9uIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFRhc2sgZnJvbSAnLi4vdGFzay9UYXNrJztcbmltcG9ydCB7IHNwZWVkUGVyU2Vjb25kIH0gZnJvbSAnLi4vaW5jL2NhbGMnO1xuaW1wb3J0IHsgaXNOdW0sIGlzT2JqLCBpc1N0cmluZyB9IGZyb20gJy4uL2luYy91dGlscyc7XG5pbXBvcnQgZGV0ZWN0VmFsdWVUeXBlIGZyb20gJy4uL3ZhbHVlLXR5cGVzL2RldGVjdCc7XG5pbXBvcnQgTlVNRVJJQ0FMX1ZBTFVFUyBmcm9tICcuLi9pbmMvbnVtZXJpY2FsLXZhbHVlcyc7XG5pbXBvcnQgZGV0ZWN0QWRhcHRlciBmcm9tICcuLi9pbmMvZGV0ZWN0LWFkYXB0ZXInO1xuXG5jb25zdCBOVU1fTlVNRVJJQ0FMX1ZBTFVFUyA9IE5VTUVSSUNBTF9WQUxVRVMubGVuZ3RoO1xuXG5jb25zdCBkZWZhdWx0UmVuZGVyZXIgPSAoeyBzdGF0ZSwgYWRhcHRlciwgYWRhcHRlckRhdGEsIGVsZW1lbnQgfSkgPT4gYWRhcHRlcihlbGVtZW50LCBzdGF0ZSwgYWRhcHRlckRhdGEpO1xuXG5jb25zdCBjb252ZXJ0SWZTaG91bGRCZU51bWJlciA9ICh2YWx1ZSkgPT4gIWlzTmFOKHZhbHVlKSA/IHBhcnNlRmxvYXQodmFsdWUpIDogdmFsdWU7XG5cbmNsYXNzIEFjdGlvbiBleHRlbmRzIFRhc2sge1xuICBjb25zdHJ1Y3Rvcihwcm9wcyA9IHt9KSB7XG4gICAgcHJvcHMuc3RhdGUgPSB7fTtcbiAgICBwcm9wcy52YWx1ZUtleXMgPSBbXTtcbiAgICBwcm9wcy5wYXJlbnRLZXlzID0gW107XG4gICAgc3VwZXIocHJvcHMpO1xuICB9XG5cbiAgLypcbiAgICAjIFNldCBBY3Rpb24gcHJvcGVydGllc1xuICAgICMjIFNldCB1c2VyLWRlZmluZWQgQWN0aW9uIHByb3BlcnRpZXNcblxuICAgIEBwYXJhbSBbb2JqZWN0XVxuICAgIEByZXR1cm4gW0FjdGlvbl1cbiAgKi9cbiAgc2V0KHByb3BzID0ge30pIHtcbiAgICB0aGlzLnZhbHVlcyA9IHRoaXMudmFsdWVzIHx8IHt9O1xuXG4gICAgY29uc3QgeyB2YWx1ZXMsIC4uLnByb3BzVG9TZXQgfSA9IHByb3BzO1xuICAgIGNvbnN0IGluaGVyaXRhYmxlID0ge307XG5cbiAgICAvLyBTZXQgbm9uLWNvbnN1bWVkIHByb3BlcnRpZXNcbiAgICBzdXBlci5zZXQocHJvcHNUb1NldCk7XG5cbiAgICAvLyBEZXRlY3QgY29ycmVjdCBgYWRhcHRlcmAgaWYgbm9uZSBleGlzdHMgYW5kIGBlbGVtZW50YCBpcyBiZWluZyBzZXRcbiAgICBpZiAodGhpcy5lbGVtZW50KSB7XG4gICAgICBpZiAoIXRoaXMuYWRhcHRlcikge1xuICAgICAgICAvLyBEdWNrdHlwaXNoIGNoZWNrIGZvciBBZGFwdGVyXG4gICAgICAgIHRoaXMuYWRhcHRlciA9IGRldGVjdEFkYXB0ZXIodGhpcy5lbGVtZW50KTtcblxuICAgICAgICBpZiAodGhpcy5hZGFwdGVyLmdldEVsZW1lbnREYXRhKSB7XG4gICAgICAgICAgdGhpcy5hZGFwdGVyRGF0YSA9IHRoaXMuYWRhcHRlci5nZXRFbGVtZW50RGF0YSh0aGlzLmVsZW1lbnQpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmICghdGhpcy5vblJlbmRlcikge1xuICAgICAgICB0aGlzLm9uUmVuZGVyID0gZGVmYXVsdFJlbmRlcmVyO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIFByaW1lIGFuIG9iamVjdCB0byBpbmhlcml0IGZyb20sIHdpdGggb25seSBgdmFsdWVgIHByb3BlcnRpZXNcbiAgICBmb3IgKGxldCBrZXkgaW4gdGhpcy5kZWZhdWx0VmFsdWUpIHtcbiAgICAgIGlmICh0aGlzLmRlZmF1bHRWYWx1ZS5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgIGlmIChwcm9wc1RvU2V0Lmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICBpbmhlcml0YWJsZVtrZXldID0gcHJvcHNUb1NldFtrZXldO1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXNba2V5XSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgaW5oZXJpdGFibGVba2V5XSA9IHRoaXNba2V5XTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIC8vIFVwZGF0ZSBleGlzdGluZyB2YWx1ZXMgd2l0aCBpbmhlcml0YWJsZSBwcm9wZXJ0aWVzXG4gICAgZm9yIChsZXQga2V5IGluIHRoaXMudmFsdWVzKSB7XG4gICAgICBpZiAodGhpcy52YWx1ZXMuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICB0aGlzLnZhbHVlc1trZXldID0geyAuLi50aGlzLnZhbHVlc1trZXldLCAuLi5pbmhlcml0YWJsZSB9O1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIFVwZGF0ZVxuICAgIGlmICh2YWx1ZXMpIHtcbiAgICAgIHRoaXMuc2V0VmFsdWVzKHZhbHVlcywgaW5oZXJpdGFibGUpO1xuXG4gICAgICAvLyBQcmVjb21wdXRlIG51bWJlciBvZiB2YWx1ZSBrZXkgYW5kIHBhcmVudCBrZXlzIHRvIGF2b2lkIHBlci1mcmFtZSBtZWFzdXJlbWVudFxuICAgICAgdGhpcy5udW1WYWx1ZUtleXMgPSB0aGlzLnZhbHVlS2V5cy5sZW5ndGg7XG4gICAgICB0aGlzLm51bVBhcmVudEtleXMgPSB0aGlzLnBhcmVudEtleXMubGVuZ3RoO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgc2V0VmFsdWVzKHZhbHVlcywgaW5oZXJpdCkge1xuICAgIC8vIEl0ZXJhdGUgb3ZlciBhbGwgaW5jb21pbmcgdmFsdWVzIGFuZCBzZXRcbiAgICBmb3IgKGxldCBrZXkgaW4gdmFsdWVzKSB7XG4gICAgICBpZiAodmFsdWVzLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgbGV0IGhhc0NoaWxkcmVuID0gZmFsc2U7XG4gICAgICAgIGNvbnN0IGNoaWxkcmVuID0ge307XG5cbiAgICAgICAgLy8gTWVyZ2UgaW50byBleGlzdGluZyB2YWx1ZSBvciBjcmVhdGUgbmV3XG4gICAgICAgIGNvbnN0IHZhbHVlQWxyZWFkeUV4aXN0cyA9IHRoaXMudmFsdWVzW2tleV0gIT09IHVuZGVmaW5lZDtcbiAgICAgICAgbGV0IG5ld1ZhbHVlID0gdmFsdWVBbHJlYWR5RXhpc3RzID8geyAuLi50aGlzLnZhbHVlc1trZXldIH0gOiB7IC4uLmluaGVyaXQgfTtcblxuICAgICAgICAvLyBJZiB2YWx1ZXMgaXMgbm90IGFuIG9iamVjdCwgYXNzaWduIHZhbHVlIHRvIGRlZmF1bHQgcHJvcFxuICAgICAgICBpZiAoIWlzT2JqKHZhbHVlc1trZXldKSkge1xuICAgICAgICAgIG5ld1ZhbHVlW3RoaXMuZGVmYXVsdFZhbHVlUHJvcF0gPSB2YWx1ZXNba2V5XTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBuZXdWYWx1ZSA9IHsgLi4ubmV3VmFsdWUsIC4uLnZhbHVlc1trZXldIH07XG4gICAgICAgIH1cblxuICAgICAgICAvLyBJZiB3ZSd2ZSBnb3QgYW4gYWRhcHRlciwgZ2V0IHRoZSBjdXJyZW50IHZhbHVlXG4gICAgICAgIGlmIChuZXdWYWx1ZS5jdXJyZW50ID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICBpZiAodGhpcy5hZGFwdGVyKSB7XG4gICAgICAgICAgICBuZXdWYWx1ZS5jdXJyZW50ID0gY29udmVydElmU2hvdWxkQmVOdW1iZXIodGhpcy5hZGFwdGVyLmdldCh0aGlzLmVsZW1lbnQsIGtleSkpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChuZXdWYWx1ZS5mcm9tID09PSB1bmRlZmluZWQgJiYgdGhpcy5hZGFwdGVyKSB7XG4gICAgICAgICAgbmV3VmFsdWUuZnJvbSA9IG5ld1ZhbHVlLmN1cnJlbnQ7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBBcHBseSBkZWZhdWx0IHZhbHVlIHByb3BlcnRpZXNcbiAgICAgICAgaWYgKCF2YWx1ZUFscmVhZHlFeGlzdHMpIHtcbiAgICAgICAgICBuZXdWYWx1ZSA9IHsgLi4udGhpcy5kZWZhdWx0VmFsdWUsIC4uLm5ld1ZhbHVlIH07XG4gICAgICAgIH1cblxuICAgICAgICAvLyBJZiB3ZSBkb24ndCBoYXZlIGEgdmFsdWUgdHlwZSBhbmQgd2UgZG8gaGF2ZSBhbiBBZGFwdGVyLCBjaGVjayBmb3IgdHlwZSB3aXRoIHZhbHVlIGtleVxuICAgICAgICBpZiAoIW5ld1ZhbHVlLnR5cGUgJiYgdGhpcy5hZGFwdGVyICYmIHRoaXMuYWRhcHRlci5jaGVja1ZhbHVlVHlwZSkge1xuICAgICAgICAgIG5ld1ZhbHVlLnR5cGUgPSB0aGlzLmFkYXB0ZXIuY2hlY2tWYWx1ZVR5cGUoa2V5KTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIElmIHdlIHN0aWxsIGRvbid0IGhhdmUgYSB2YWx1ZSB0eXBlIGFuZCB0aGlzIGlzIHRoZSBmaXJzdCB0aW1lIHdlJ3ZlIHNldCB0aGlzIHZhbHVlLCBjaGVjayBudW1lcmljYWwgdmFsdWVzIGZvciBzdHJpbmdzIGFuZCB0ZXN0XG4gICAgICAgIGlmICghbmV3VmFsdWUudHlwZSAmJiAhdGhpcy52YWx1ZXNba2V5XSkge1xuICAgICAgICAgIG5ld1ZhbHVlLnR5cGUgPSBkZXRlY3RWYWx1ZVR5cGUobmV3VmFsdWUpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gSWYgd2UgaGF2ZSBhIHZhbHVlIHR5cGUsIGhhbmRsZS4gVGhpcyBpcyBteSBsZWFzdCBmYXZvdXJpdGUgcGFydCBvZiBQb3Btb3Rpb24sIHNvLi4uIGVuam95LlxuICAgICAgICBpZiAobmV3VmFsdWUudHlwZSkge1xuICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgTlVNX05VTUVSSUNBTF9WQUxVRVM7IGkrKykge1xuICAgICAgICAgICAgY29uc3QgcHJvcE5hbWUgPSBOVU1FUklDQUxfVkFMVUVTW2ldO1xuICAgICAgICAgICAgY29uc3QgdmFsdWVQcm9wID0gbmV3VmFsdWVbcHJvcE5hbWVdO1xuXG4gICAgICAgICAgICAvLyBJZiB0aGlzIHByb3AgaXMgYSBzdHJpbmcgYW5kIHdlIGhhdmUgYSBzcGxpdHRlciwgc3BsaXRcbiAgICAgICAgICAgIGlmIChuZXdWYWx1ZS50eXBlLmhhc093blByb3BlcnR5KCdzcGxpdCcpKSB7XG4gICAgICAgICAgICAgIGNvbnN0IHNwbGl0UHJvcCA9IGlzU3RyaW5nKHZhbHVlUHJvcCkgPyBuZXdWYWx1ZS50eXBlLnNwbGl0KHZhbHVlUHJvcCkgOiB7fTtcblxuICAgICAgICAgICAgICBmb3IgKGxldCBzcGxpdEtleSBpbiBzcGxpdFByb3ApIHtcbiAgICAgICAgICAgICAgICBpZiAoc3BsaXRQcm9wLmhhc093blByb3BlcnR5KHNwbGl0S2V5KSkge1xuICAgICAgICAgICAgICAgICAgY29uc3QgY29tYmluZWRLZXkgPSBrZXkgKyBzcGxpdEtleTtcblxuICAgICAgICAgICAgICAgICAgLy8gSWYgd2UgZG9uJ3QgaGF2ZSBhIGNoaWxkIHZhbHVlIGZvciB0aGlzIGtleSwgbWFrZSBvbmVcbiAgICAgICAgICAgICAgICAgIGlmICghY2hpbGRyZW5bY29tYmluZWRLZXldKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGRlZmF1bHRWYWx1ZSA9IChuZXdWYWx1ZS50eXBlLmRlZmF1bHRQcm9wcyAmJiBuZXdWYWx1ZS50eXBlLmRlZmF1bHRQcm9wc1tzcGxpdEtleV0pID8gbmV3VmFsdWUudHlwZS5kZWZhdWx0UHJvcHNbc3BsaXRLZXldIDogbmV3VmFsdWUudHlwZS5kZWZhdWx0UHJvcHMgfHwge307XG5cbiAgICAgICAgICAgICAgICAgICAgY2hpbGRyZW5bY29tYmluZWRLZXldID0ge1xuICAgICAgICAgICAgICAgICAgICAgIC4uLm5ld1ZhbHVlLFxuICAgICAgICAgICAgICAgICAgICAgIC4uLmRlZmF1bHRWYWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgICBwYXJlbnQ6IGtleSxcbiAgICAgICAgICAgICAgICAgICAgICBjaGlsZEtleTogc3BsaXRLZXlcbiAgICAgICAgICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgICAgICAgICBkZWxldGUgY2hpbGRyZW5bY29tYmluZWRLZXldLnR5cGU7XG4gICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgIGhhc0NoaWxkcmVuID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgIGNoaWxkcmVuW2NvbWJpbmVkS2V5XVtwcm9wTmFtZV0gPSBwYXJzZUZsb2F0KHNwbGl0UHJvcFtzcGxpdEtleV0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIC8vIElmIHdlIGhhdmUgYSB0ZW1wbGF0ZSBmdW5jdGlvbiwgZ2VuZXJhdGVcbiAgICAgICAgICAgICAgaWYgKCFuZXdWYWx1ZS50ZW1wbGF0ZSAmJiBuZXdWYWx1ZS50eXBlLnRlbXBsYXRlICYmIGlzU3RyaW5nKHZhbHVlUHJvcCkpIHtcbiAgICAgICAgICAgICAgICBuZXdWYWx1ZS50ZW1wbGF0ZSA9IG5ld1ZhbHVlLnR5cGUudGVtcGxhdGUodmFsdWVQcm9wKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIGlmIChuZXdWYWx1ZS50eXBlLmRlZmF1bHRQcm9wcykge1xuICAgICAgICAgICAgICBuZXdWYWx1ZSA9IHsgLi4ubmV3VmFsdWUudHlwZS5kZWZhdWx0UHJvcHMsIC4uLm5ld1ZhbHVlIH07XG5cbiAgICAgICAgICAgICAgLy8gVGhpcyBpcyBhIGJpdCBvZiBhIGhhY2sgLSB0aGlzIGVudGlyZSBmdW5jdGlvbiBpcyBhIGhhY2suIFNvcnJ5IGZ1dHVyZSBzZWxmLiBJIGxvb2sgZm9yd2FyZCB0byBzY3JhcHBpbmcgdGhlIGxvdCBvZiBpdC5cbiAgICAgICAgICAgICAgaWYgKG5ld1ZhbHVlLnR5cGUuZGVmYXVsdFByb3BzLnR5cGUpIHtcbiAgICAgICAgICAgICAgICBuZXdWYWx1ZS50eXBlID0gbmV3VmFsdWUudHlwZS5kZWZhdWx0UHJvcHMudHlwZTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAodmFsdWVQcm9wICE9PSB1bmRlZmluZWQgJiYgbmV3VmFsdWUudHlwZS5wYXJzZSkge1xuICAgICAgICAgICAgICBuZXdWYWx1ZVtwcm9wTmFtZV0gPSBuZXdWYWx1ZS50eXBlLnBhcnNlKHZhbHVlUHJvcCwgbmV3VmFsdWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSAvLyBFbmQgdmFsdWUgdHlwZSBub25zZW5zZVxuXG4gICAgICAgIC8vIFNldCBgcHJldmAgdG8gYGN1cnJlbnRgIGZvciBmaXJzdCBmcmFtZSBhZnRlciBzZXRcbiAgICAgICAgbmV3VmFsdWUucHJldiA9IG5ld1ZhbHVlLmN1cnJlbnQ7XG4gICAgICAgIFxuICAgICAgICAvLyBJZiB0aGlzIHZhbHVlIGRvZXNuJ3QgaGF2ZSBjaGlsZHJlbiwgYWRkIHRvIHZhbHVlS2V5c1xuICAgICAgICBpZiAoIWhhc0NoaWxkcmVuKSB7XG4gICAgICAgICAgaWYgKHRoaXMudmFsdWVLZXlzLmluZGV4T2Yoa2V5KSA9PT0gLTEpIHtcbiAgICAgICAgICAgIHRoaXMudmFsdWVLZXlzLnB1c2goa2V5KTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgLy8gT3IgYWRkIHRvIHBhcmVudEtleXNcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBuZXdWYWx1ZS5jaGlsZHJlbiA9IG5ld1ZhbHVlLmNoaWxkcmVuIHx8IHt9O1xuXG4gICAgICAgICAgaWYgKHRoaXMucGFyZW50S2V5cy5pbmRleE9mKGtleSkgPT09IC0xKSB7XG4gICAgICAgICAgICB0aGlzLnBhcmVudEtleXMucHVzaChrZXkpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHRoaXMuc2V0VmFsdWVzKGNoaWxkcmVuKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMudmFsdWVzW2tleV0gPSBuZXdWYWx1ZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKlxuICAgIERlY2lkZSB3aGV0aGVyIHRoaXMgQWN0aW9uIHdpbGwgcmVuZGVyIG9uIG5leHQgZnJhbWVcblxuICAgIEBwYXJhbSBbQWN0aW9uXVxuICAgIEBwYXJhbSBbbnVtYmVyXVxuICAgIEBwYXJhbSBbbnVtYmVyXVxuICAgIEByZXR1cm4gW2Jvb2xlYW5dOiBSZXR1cm4gdHJ1ZSB0byByZW5kZXJcbiAgKi9cbiAgd2lsbFJlbmRlcihhY3Rpb24sIGZyYW1lU3RhbXAsIGVsYXBzZWQpIHtcbiAgICBsZXQgaGFzQ2hhbmdlZCA9IGZhbHNlO1xuXG4gICAgLy8gQ2hlY2sgaWYgYmFzZSB2YWx1ZXMgaGF2ZSB1cGRhdGVkIFxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5udW1WYWx1ZUtleXM7IGkrKykge1xuICAgICAgY29uc3Qga2V5ID0gdGhpcy52YWx1ZUtleXNbaV07XG4gICAgICBjb25zdCB2YWx1ZSA9IHRoaXMudmFsdWVzW2tleV07XG5cbiAgICAgIC8vIFJ1biB0cmFuc2Zvcm0gZnVuY3Rpb24gKGlmIHByZXNlbnQpXG4gICAgICBpZiAodmFsdWUudHJhbnNmb3JtKSB7XG4gICAgICAgIHZhbHVlLmN1cnJlbnQgPSB2YWx1ZS50cmFuc2Zvcm0odmFsdWUuY3VycmVudCwga2V5LCB0aGlzKTtcbiAgICAgIH1cblxuICAgICAgLy8gQ2FwIG1pbmltdW1cbiAgICAgIGlmIChpc051bSh2YWx1ZS5taW4pKSB7XG4gICAgICAgIHZhbHVlLmN1cnJlbnQgPSBNYXRoLm1heCh2YWx1ZS5jdXJyZW50LCB2YWx1ZS5taW4pO1xuICAgICAgfVxuXG4gICAgICAvLyBDYXAgbWF4aW11bVxuICAgICAgaWYgKGlzTnVtKHZhbHVlLm1heCkpIHtcbiAgICAgICAgdmFsdWUuY3VycmVudCA9IE1hdGgubWluKHZhbHVlLmN1cnJlbnQsIHZhbHVlLm1heCk7XG4gICAgICB9XG5cbiAgICAgIC8vIFJvdW5kIG51bWJlclxuICAgICAgaWYgKHZhbHVlLnJvdW5kKSB7XG4gICAgICAgIHZhbHVlLmN1cnJlbnQgPSBNYXRoLnJvdW5kKHZhbHVlLmN1cnJlbnQpO1xuICAgICAgfVxuXG4gICAgICB2YWx1ZS5mcmFtZUNoYW5nZSA9IHZhbHVlLmN1cnJlbnQgLSB2YWx1ZS5wcmV2O1xuXG4gICAgICAvLyBVcGRhdGUgdmVsb2NpdHlcbiAgICAgIGlmICghdGhpcy5jYWxjdWxhdGVzVmVsb2NpdHkpIHtcbiAgICAgICAgdmFsdWUudmVsb2NpdHkgPSBzcGVlZFBlclNlY29uZCh2YWx1ZS5mcmFtZUNoYW5nZSwgZWxhcHNlZCk7XG4gICAgICB9XG5cbiAgICAgIC8vIElmIHRoaXMgdmFsdWUgaGFzIGNoYW5nZWRcbiAgICAgIGlmICh2YWx1ZS5wcmV2ICE9PSB2YWx1ZS5jdXJyZW50KSB7XG4gICAgICAgIGhhc0NoYW5nZWQgPSB0cnVlO1xuICAgICAgICB2YWx1ZS5wcmV2ID0gdmFsdWUuY3VycmVudDtcbiAgICAgIH1cblxuICAgICAgLy8gQXBwZW5kIHVuaXRcbiAgICAgIGNvbnN0IHZhbHVlRm9yU3RhdGUgPSAodmFsdWUudHlwZSAmJiB2YWx1ZS50eXBlLnNlcmlhbGl6ZSkgPyB2YWx1ZS50eXBlLnNlcmlhbGl6ZSh2YWx1ZS5jdXJyZW50LCB2YWx1ZSkgOiB2YWx1ZS5jdXJyZW50O1xuXG4gICAgICAvLyBBZGQgdG8gc3RhdGUgaWYgdGhpcyBpcyBub3QgYSBjaGlsZCB2YXVlXG4gICAgICBpZiAoIXZhbHVlLnBhcmVudCkge1xuICAgICAgICB0aGlzLnN0YXRlW2tleV0gPSB2YWx1ZUZvclN0YXRlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy52YWx1ZXNbdmFsdWUucGFyZW50XS5jaGlsZHJlblt2YWx1ZS5jaGlsZEtleV0gPSB2YWx1ZUZvclN0YXRlO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIFVwZGF0ZSBwYXJlbnQgdmFsdWVzXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLm51bVBhcmVudEtleXM7IGkrKykge1xuICAgICAgY29uc3Qga2V5ID0gdGhpcy5wYXJlbnRLZXlzW2ldO1xuICAgICAgY29uc3QgdmFsdWUgPSB0aGlzLnZhbHVlc1trZXldO1xuXG4gICAgICB2YWx1ZS5jdXJyZW50ID0gdmFsdWUudHlwZS5jb21iaW5lKHZhbHVlLmNoaWxkcmVuLCB2YWx1ZS50ZW1wbGF0ZSk7XG5cbiAgICAgIHRoaXMuc3RhdGVba2V5XSA9IHZhbHVlLmN1cnJlbnQ7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMub25GcmFtZSkge1xuICAgICAgdGhpcy5vbkZyYW1lKHRoaXMuc3RhdGUsIHRoaXMpO1xuICAgIH1cblxuICAgIHJldHVybiAodGhpcy5vbkNsZWFudXApID8gdHJ1ZSA6IGhhc0NoYW5nZWQ7XG4gIH1cblxuICBpbmhlcml0KHByb3BzID0ge30pIHtcbiAgICBjb25zdCB7IHZhbHVlcywgLi4ucHJvcHNUb1NldCB9ID0gcHJvcHM7XG4gICAgY29uc3QgbmV3QWN0aW9uID0gc3VwZXIuaW5oZXJpdChwcm9wc1RvU2V0KTtcblxuICAgIGlmICh2YWx1ZXMpIHtcbiAgICAgIG5ld0FjdGlvbi5zZXQoeyB2YWx1ZXMgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG5ld0FjdGlvbjtcbiAgfVxuXG4gIHBhdXNlKCkge1xuICAgIHN1cGVyLnN0b3AoKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHJlc3VtZSgpIHtcbiAgICBzdXBlci5zdGFydCgpO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgdG9nZ2xlKCkge1xuICAgIHJldHVybiB0aGlzLmlzQWN0aXZlID8gdGhpcy5wYXVzZSgpIDogdGhpcy5yZXN1bWUoKTtcbiAgfVxuXG4gIHN0YXJ0KCkge1xuICAgIGNvbnN0IHZhbHVlcyA9IHRoaXMudmFsdWVzO1xuICAgIHN1cGVyLnN0YXJ0KCk7XG5cbiAgICBmb3IgKGxldCBrZXkgaW4gdmFsdWVzKSB7XG4gICAgICBpZiAodmFsdWVzLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgdmFsdWVzW2tleV0ucHJldiA9IHZhbHVlc1trZXldLm9yaWdpbiA9IHZhbHVlc1trZXldLmN1cnJlbnQ7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBzdGF0aWMgZXh0ZW5kRGVmYXVsdFZhbHVlKHByb3BzKSB7XG4gICAgcmV0dXJuIHsgLi4udGhpcy5wcm90b3R5cGUuZGVmYXVsdFZhbHVlLCAuLi5wcm9wcyB9O1xuICB9XG5cbiAgc3RhdGljIGV4dGVuZERlZmF1bHRQcm9wcyhwcm9wcykge1xuICAgIHJldHVybiB7IC4uLnRoaXMucHJvdG90eXBlLmRlZmF1bHRQcm9wcywgLi4ucHJvcHMgfTtcbiAgfVxufVxuXG5BY3Rpb24ucHJvdG90eXBlLmRlZmF1bHRWYWx1ZVByb3AgPSAnY3VycmVudCc7XG5BY3Rpb24ucHJvdG90eXBlLmRlZmF1bHRWYWx1ZSA9IHtcbiAgdmVsb2NpdHk6IDAsXG4gIHJvdW5kOiBmYWxzZSxcbiAgbWluOiB1bmRlZmluZWQsXG4gIG1heDogdW5kZWZpbmVkLFxuICB0cmFuc2Zvcm06IHVuZGVmaW5lZFxufTtcblxuZXhwb3J0IGRlZmF1bHQgQWN0aW9uO1xuIl19

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _Action2 = __webpack_require__(3);
	
	var _Action3 = _interopRequireDefault(_Action2);
	
	var _generateBlendCurve = __webpack_require__(37);
	
	var _generateBlendCurve2 = _interopRequireDefault(_generateBlendCurve);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	/*
	  Methods and properties to add to bound Actions
	*/
	var boundOnStart = function (action) {
	  return action.flow.activateAction(action.id, action);
	};
	var boundOnStop = function (action) {
	  return action.flow.deactivateAction(action.id);
	};
	var boundProps = function (flow) {
	  return {
	    flow: flow,
	    isPriority: true,
	    onActivate: boundOnStart,
	    onDeactivate: boundOnStop
	  };
	};
	
	var Flow = function (_Action) {
	  _inherits(Flow, _Action);
	
	  function Flow(props) {
	    _classCallCheck(this, Flow);
	
	    var _this = _possibleConstructorReturn(this, _Action.call(this, props));
	
	    _this.activeActions = {};
	    _this.numActiveActions = 0;
	    return _this;
	  }
	
	  Flow.prototype.set = function set(props) {
	    _Action.prototype.set.call(this, props);
	
	    this.once();
	
	    return this;
	  };
	
	  /*
	    Bind Action to Actor
	  */
	
	
	  Flow.prototype.connect = function connect(action) {
	    var inheritedAction = action.inherit();
	    var newValues = {};
	    var hasNewValues = false;
	
	    // Create values on actor that don't exist
	    for (var key in inheritedAction.values) {
	      if (inheritedAction.values.hasOwnProperty(key) && !this.values.hasOwnProperty(key)) {
	        newValues[key] = {};
	        hasNewValues = true;
	      }
	    }
	
	    if (hasNewValues) {
	      this.set({ values: newValues });
	    }
	
	    inheritedAction.parentId = action.id;
	
	    return inheritedAction.set(boundProps(this, inheritedAction));
	  };
	
	  /*
	    Start Actor
	     If Action is provided, bind it to this Actor and start
	     @param (optional) [Action]
	  */
	
	
	  Flow.prototype.start = function start() {
	    _Action.prototype.start.call(this);
	
	    for (var key in this.activeActions) {
	      if (this.activeActions.hasOwnProperty(key)) {
	        var action = this.activeActions[key];
	        if (!action.isActive) {
	          action.start();
	        }
	      }
	    }
	
	    return this;
	  };
	
	  Flow.prototype.stop = function stop() {
	    _Action.prototype.stop.call(this);
	
	    for (var key in this.activeActions) {
	      if (this.activeActions.hasOwnProperty(key)) {
	        this.activeActions[key].stop();
	      }
	    }
	
	    return this;
	  };
	
	  Flow.prototype.willRender = function willRender(actor, frameStamp, elapsed) {
	    for (var i = 0; i < this.numValueKeys; i++) {
	      var key = this.valueKeys[i];
	      var value = this.values[key];
	      var driver = value.numDrivers ? this.activeActions[value.drivers[0]] : false;
	      var newCurrent = value.numDrivers ? driver.values[key].current : value.current;
	
	      /**
	       * TODO: replace with blend tree resolver
	       * Additive motion
	       * Bezier tween blend
	       */
	      if (value.blendCurve) {
	        newCurrent = value.blendCurve();
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
	
	
	  Flow.prototype.activateAction = function activateAction(id, action) {
	    this.activeActions[id] = action;
	    this.numActiveActions++;
	
	    for (var i = 0; i < action.numValueKeys; i++) {
	      var key = action.valueKeys[i];
	      var actionValue = action.values[key];
	      var value = this.values[key];
	
	      // If we're blending this action, and there's on already in progress
	      if (action.blend && value.numDrivers && !value.blendCurve && value.drivers[0].prototype === action.prototype) {
	        value.blendCurve = (0, _generateBlendCurve2.default)(this.activeActions[value.drivers[0]], action, value, key);
	      } else if (!action.isScrubbing) {
	        value.blendCurve = undefined;
	
	        // Pass Actor value properties to Action
	        if (actionValue.velocity === 0) {
	          actionValue.velocity = value.velocity;
	        }
	
	        if (actionValue.from === undefined) {
	          actionValue.from = actionValue.current = value.current;
	        }
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
	
	
	  Flow.prototype.deactivateAction = function deactivateAction(id) {
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
	
	  return Flow;
	}(_Action3.default);
	
	Flow.prototype.defaultValue = _Action3.default.extendDefaultValue({
	  drivers: [],
	  numDrivers: 0
	});
	
	exports.default = Flow;
	//# sourceMappingURL=data:application/json;base64,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QVdBLGFBQU8sS0FBSyxhQUFMLENBQW1CLEVBQW5CLENBQVAsQ0FaVTtBQWFWLFdBQUssZ0JBQUwsR0FiVTtLQUFaOztBQWdCQSxRQUFJLENBQUMsS0FBSyxnQkFBTCxJQUF5QixLQUFLLFFBQUwsRUFBZTtBQUMzQyx3QkFBTSxJQUFOLFlBRDJDO0tBQTdDOzs7U0FoS0U7OztBQXNLTixLQUFLLFNBQUwsQ0FBZSxZQUFmLEdBQThCLGlCQUFPLGtCQUFQLENBQTBCO0FBQ3RELFdBQVMsRUFBVDtBQUNBLGNBQVksQ0FBWjtDQUY0QixDQUE5Qjs7a0JBS2UiLCJmaWxlIjoiRmxvdy5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvTWF0dC9TaXRlcy9wb3Btb3Rpb24iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQWN0aW9uIGZyb20gJy4uL2FjdGlvbnMvQWN0aW9uJztcbmltcG9ydCBnZW5lcmF0ZUJsZW5kQ3VydmUgZnJvbSAnLi9mbG93L2dlbmVyYXRlLWJsZW5kLWN1cnZlJztcblxuLypcbiAgTWV0aG9kcyBhbmQgcHJvcGVydGllcyB0byBhZGQgdG8gYm91bmQgQWN0aW9uc1xuKi9cbmNvbnN0IGJvdW5kT25TdGFydCA9IChhY3Rpb24pID0+IGFjdGlvbi5mbG93LmFjdGl2YXRlQWN0aW9uKGFjdGlvbi5pZCwgYWN0aW9uKTtcbmNvbnN0IGJvdW5kT25TdG9wID0gKGFjdGlvbikgPT4gYWN0aW9uLmZsb3cuZGVhY3RpdmF0ZUFjdGlvbihhY3Rpb24uaWQpO1xuY29uc3QgYm91bmRQcm9wcyA9IChmbG93KSA9PiAoe1xuICBmbG93LFxuICBpc1ByaW9yaXR5OiB0cnVlLFxuICBvbkFjdGl2YXRlOiBib3VuZE9uU3RhcnQsXG4gIG9uRGVhY3RpdmF0ZTogYm91bmRPblN0b3Bcbn0pO1xuXG5jbGFzcyBGbG93IGV4dGVuZHMgQWN0aW9uIHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5hY3RpdmVBY3Rpb25zID0ge307XG4gICAgdGhpcy5udW1BY3RpdmVBY3Rpb25zID0gMDtcbiAgfVxuXG4gIHNldChwcm9wcykge1xuICAgIHN1cGVyLnNldChwcm9wcyk7XG5cbiAgICB0aGlzLm9uY2UoKTtcblxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgLypcbiAgICBCaW5kIEFjdGlvbiB0byBBY3RvclxuICAqL1xuICBjb25uZWN0KGFjdGlvbikge1xuICAgIGNvbnN0IGluaGVyaXRlZEFjdGlvbiA9IGFjdGlvbi5pbmhlcml0KCk7XG4gICAgbGV0IG5ld1ZhbHVlcyA9IHt9O1xuICAgIGxldCBoYXNOZXdWYWx1ZXMgPSBmYWxzZTtcblxuICAgIC8vIENyZWF0ZSB2YWx1ZXMgb24gYWN0b3IgdGhhdCBkb24ndCBleGlzdFxuICAgIGZvciAobGV0IGtleSBpbiBpbmhlcml0ZWRBY3Rpb24udmFsdWVzKSB7XG4gICAgICBpZiAoaW5oZXJpdGVkQWN0aW9uLnZhbHVlcy5oYXNPd25Qcm9wZXJ0eShrZXkpICYmICF0aGlzLnZhbHVlcy5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgIG5ld1ZhbHVlc1trZXldID0ge307XG4gICAgICAgIGhhc05ld1ZhbHVlcyA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGhhc05ld1ZhbHVlcykge1xuICAgICAgdGhpcy5zZXQoeyB2YWx1ZXM6IG5ld1ZhbHVlcyB9KTtcbiAgICB9XG5cbiAgICBpbmhlcml0ZWRBY3Rpb24ucGFyZW50SWQgPSBhY3Rpb24uaWQ7XG5cbiAgICByZXR1cm4gaW5oZXJpdGVkQWN0aW9uLnNldChib3VuZFByb3BzKHRoaXMsIGluaGVyaXRlZEFjdGlvbikpO1xuICB9XG5cbiAgLypcbiAgICBTdGFydCBBY3RvclxuXG4gICAgSWYgQWN0aW9uIGlzIHByb3ZpZGVkLCBiaW5kIGl0IHRvIHRoaXMgQWN0b3IgYW5kIHN0YXJ0XG5cbiAgICBAcGFyYW0gKG9wdGlvbmFsKSBbQWN0aW9uXVxuICAqL1xuICBzdGFydCgpIHtcbiAgICBzdXBlci5zdGFydCgpO1xuXG4gICAgZm9yIChsZXQga2V5IGluIHRoaXMuYWN0aXZlQWN0aW9ucykge1xuICAgICAgaWYgKHRoaXMuYWN0aXZlQWN0aW9ucy5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgIGNvbnN0IGFjdGlvbiA9IHRoaXMuYWN0aXZlQWN0aW9uc1trZXldO1xuICAgICAgICBpZiAoIWFjdGlvbi5pc0FjdGl2ZSkge1xuICAgICAgICAgIGFjdGlvbi5zdGFydCgpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBzdG9wKCkge1xuICAgIHN1cGVyLnN0b3AoKTtcblxuICAgIGZvciAobGV0IGtleSBpbiB0aGlzLmFjdGl2ZUFjdGlvbnMpIHtcbiAgICAgIGlmICh0aGlzLmFjdGl2ZUFjdGlvbnMuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICB0aGlzLmFjdGl2ZUFjdGlvbnNba2V5XS5zdG9wKCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICB3aWxsUmVuZGVyKGFjdG9yLCBmcmFtZVN0YW1wLCBlbGFwc2VkKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLm51bVZhbHVlS2V5czsgaSsrKSB7XG4gICAgICBjb25zdCBrZXkgPSB0aGlzLnZhbHVlS2V5c1tpXTtcbiAgICAgIGNvbnN0IHZhbHVlID0gdGhpcy52YWx1ZXNba2V5XTtcbiAgICAgIGNvbnN0IGRyaXZlciA9IHZhbHVlLm51bURyaXZlcnMgPyB0aGlzLmFjdGl2ZUFjdGlvbnNbdmFsdWUuZHJpdmVyc1swXV0gOiBmYWxzZTtcbiAgICAgIGxldCBuZXdDdXJyZW50ID0gdmFsdWUubnVtRHJpdmVycyA/IGRyaXZlci52YWx1ZXNba2V5XS5jdXJyZW50IDogdmFsdWUuY3VycmVudDtcblxuICAgICAgLyoqXG4gICAgICAgKiBUT0RPOiByZXBsYWNlIHdpdGggYmxlbmQgdHJlZSByZXNvbHZlclxuICAgICAgICogQWRkaXRpdmUgbW90aW9uXG4gICAgICAgKiBCZXppZXIgdHdlZW4gYmxlbmRcbiAgICAgICAqL1xuICAgICAgaWYgKHZhbHVlLmJsZW5kQ3VydmUpIHtcbiAgICAgICAgbmV3Q3VycmVudCA9IHZhbHVlLmJsZW5kQ3VydmUoKTtcbiAgICAgIH1cblxuICAgICAgdmFsdWUuY3VycmVudCA9IG5ld0N1cnJlbnQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN1cGVyLndpbGxSZW5kZXIoYWN0b3IsIGZyYW1lU3RhbXAsIGVsYXBzZWQpO1xuICB9XG5cbiAgLypcbiAgICBBZGQgYWN0aXZlIGFjdGlvbnNcblxuICAgIEBwYXJhbSBbbnVtYmVyXVxuICAgIEBwYXJhbSBbQWN0aW9uXVxuICAqL1xuICBhY3RpdmF0ZUFjdGlvbihpZCwgYWN0aW9uKSB7XG4gICAgdGhpcy5hY3RpdmVBY3Rpb25zW2lkXSA9IGFjdGlvbjtcbiAgICB0aGlzLm51bUFjdGl2ZUFjdGlvbnMrKztcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYWN0aW9uLm51bVZhbHVlS2V5czsgaSsrKSB7XG4gICAgICBjb25zdCBrZXkgPSBhY3Rpb24udmFsdWVLZXlzW2ldO1xuICAgICAgY29uc3QgYWN0aW9uVmFsdWUgPSBhY3Rpb24udmFsdWVzW2tleV07XG4gICAgICBjb25zdCB2YWx1ZSA9IHRoaXMudmFsdWVzW2tleV07XG5cbiAgICAgIC8vIElmIHdlJ3JlIGJsZW5kaW5nIHRoaXMgYWN0aW9uLCBhbmQgdGhlcmUncyBvbiBhbHJlYWR5IGluIHByb2dyZXNzXG4gICAgICBpZiAoYWN0aW9uLmJsZW5kICYmIHZhbHVlLm51bURyaXZlcnMgJiYgIXZhbHVlLmJsZW5kQ3VydmUgJiYgKHZhbHVlLmRyaXZlcnNbMF0ucHJvdG90eXBlID09PSBhY3Rpb24ucHJvdG90eXBlKSkge1xuICAgICAgICB2YWx1ZS5ibGVuZEN1cnZlID0gZ2VuZXJhdGVCbGVuZEN1cnZlKHRoaXMuYWN0aXZlQWN0aW9uc1t2YWx1ZS5kcml2ZXJzWzBdXSwgYWN0aW9uLCB2YWx1ZSwga2V5KTtcbiAgICAgIH0gZWxzZSBpZiAoIWFjdGlvbi5pc1NjcnViYmluZykge1xuICAgICAgICB2YWx1ZS5ibGVuZEN1cnZlID0gdW5kZWZpbmVkO1xuXG4gICAgICAgIC8vIFBhc3MgQWN0b3IgdmFsdWUgcHJvcGVydGllcyB0byBBY3Rpb25cbiAgICAgICAgaWYgKGFjdGlvblZhbHVlLnZlbG9jaXR5ID09PSAwKSB7XG4gICAgICAgICAgYWN0aW9uVmFsdWUudmVsb2NpdHkgPSB2YWx1ZS52ZWxvY2l0eTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChhY3Rpb25WYWx1ZS5mcm9tID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICBhY3Rpb25WYWx1ZS5mcm9tID0gYWN0aW9uVmFsdWUuY3VycmVudCA9IHZhbHVlLmN1cnJlbnQ7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgdmFsdWUuZHJpdmVycyA9IFtpZF07XG4gICAgICB2YWx1ZS5udW1Ecml2ZXJzID0gdmFsdWUuZHJpdmVycy5sZW5ndGg7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMubnVtQWN0aXZlQWN0aW9ucykge1xuICAgICAgc3VwZXIuc3RhcnQoKTtcbiAgICB9XG4gIH1cblxuICAvKlxuICAgIFJlbW92ZSBhY3RpdmUgYWN0aW9uc1xuXG4gICAgQHBhcmFtIFtudW1iZXJdXG4gICovXG4gIGRlYWN0aXZhdGVBY3Rpb24oaWQpIHtcbiAgICBjb25zdCBhY3Rpb24gPSB0aGlzLmFjdGl2ZUFjdGlvbnNbaWRdO1xuXG4gICAgaWYgKGFjdGlvbikge1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhY3Rpb24ubnVtVmFsdWVLZXlzOyBpKyspIHtcbiAgICAgICAgY29uc3Qga2V5ID0gYWN0aW9uLnZhbHVlS2V5c1tpXTtcbiAgICAgICAgY29uc3QgdmFsdWUgPSB0aGlzLnZhbHVlc1trZXldO1xuICAgICAgICBjb25zdCBkcml2ZXJJbmRleCA9IHZhbHVlLmRyaXZlcnMuaW5kZXhPZihpZCk7XG5cbiAgICAgICAgaWYgKGRyaXZlckluZGV4ICE9PSAtMSkge1xuICAgICAgICAgIHZhbHVlLmRyaXZlcnMuc3BsaWNlKGRyaXZlckluZGV4LCAxKTtcbiAgICAgICAgICB2YWx1ZS5udW1Ecml2ZXJzLS07XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgZGVsZXRlIHRoaXMuYWN0aXZlQWN0aW9uc1tpZF07XG4gICAgICB0aGlzLm51bUFjdGl2ZUFjdGlvbnMtLTtcbiAgICB9XG5cbiAgICBpZiAoIXRoaXMubnVtQWN0aXZlQWN0aW9ucyAmJiB0aGlzLmlzQWN0aXZlKSB7XG4gICAgICBzdXBlci5zdG9wKCk7XG4gICAgfVxuICB9XG59XG5cbkZsb3cucHJvdG90eXBlLmRlZmF1bHRWYWx1ZSA9IEFjdGlvbi5leHRlbmREZWZhdWx0VmFsdWUoe1xuICBkcml2ZXJzOiBbXSxcbiAgbnVtRHJpdmVyczogMFxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IEZsb3c7XG4iXX0=

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _Action2 = __webpack_require__(3);
	
	var _Action3 = _interopRequireDefault(_Action2);
	
	var _presetEasing = __webpack_require__(18);
	
	var _presetEasing2 = _interopRequireDefault(_presetEasing);
	
	var _utils = __webpack_require__(21);
	
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
	
	var Tween = function (_Action) {
	  _inherits(Tween, _Action);
	
	  function Tween() {
	    _classCallCheck(this, Tween);
	
	    return _possibleConstructorReturn(this, _Action.apply(this, arguments));
	  }
	
	  Tween.prototype.start = function start() {
	    this.elapsed = 0;
	    this.flipCount = this.yoyoCount = this.loopCount = 0;
	    this.isScrubbing = false;
	
	    // Set default `from` if none set
	    if (!this.flow) {
	      for (var i = 0; i < this.numValueKeys; i++) {
	        var key = this.valueKeys[i];
	        var value = this.values[key];
	        if (value.from === undefined) {
	          value.from = 0;
	        }
	      }
	    }
	
	    return _Action.prototype.start.call(this);
	  };
	
	  Tween.prototype.onUpdate = function onUpdate(tween, frameStamp, elapsed) {
	    var progressTarget = this.playDirection === 1 ? 1 : 0;
	
	    this.ended = true;
	
	    if (!this.isScrubbing) {
	      this.elapsed += elapsed * this.dilate * this.playDirection;
	    }
	
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
	          if ((0, _utils.isNum)(this[key]) && this[key] > this[key + COUNT]) {
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
	    if (!this.isActive || this.isScrubbing) {
	      this.once();
	      this.isScrubbing = true;
	    }
	
	    this.elapsed = elapsed;
	
	    return this;
	  };
	
	  return Tween;
	}(_Action3.default);
	
	Tween.prototype.defaultValueProp = 'to';
	Tween.prototype.defaultValue = _Action3.default.extendDefaultValue({
	  delay: 0,
	  duration: 300,
	  ease: _presetEasing2.default.easeOut,
	  elapsed: 0,
	  steps: 0,
	  to: 0,
	  round: false
	});
	Tween.prototype.defaultProps = _Action3.default.extendDefaultProps({
	  blend: false,
	  dilate: 1,
	  loop: 0,
	  yoyo: 0,
	  flip: 0,
	  loopCount: 0,
	  yoyoCount: 0,
	  flipCount: 0,
	  playDirection: 1,
	  isScrubbing: false,
	  ended: false,
	  elapsed: 0
	});
	
	exports.default = Tween;
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hY3Rpb25zL1R3ZWVuLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7QUFFQSxJQUFNLFFBQVEsT0FBUjtBQUNOLElBQU0sYUFBYTtBQUNqQixRQUFNLFNBQU47QUFDQSxRQUFNLFNBQU47QUFDQSxRQUFNLFlBQU47Q0FISTs7SUFNQTs7Ozs7Ozs7O2tCQUNKLHlCQUFRO0FBQ04sU0FBSyxPQUFMLEdBQWUsQ0FBZixDQURNO0FBRU4sU0FBSyxTQUFMLEdBQWlCLEtBQUssU0FBTCxHQUFpQixLQUFLLFNBQUwsR0FBaUIsQ0FBakIsQ0FGNUI7QUFHTixTQUFLLFdBQUwsR0FBbUIsS0FBbkI7OztBQUhNLFFBTUYsQ0FBQyxLQUFLLElBQUwsRUFBVztBQUNkLFdBQUssSUFBSSxJQUFJLENBQUosRUFBTyxJQUFJLEtBQUssWUFBTCxFQUFtQixHQUF2QyxFQUE0QztBQUMxQyxZQUFNLE1BQU0sS0FBSyxTQUFMLENBQWUsQ0FBZixDQUFOLENBRG9DO0FBRTFDLFlBQU0sUUFBUSxLQUFLLE1BQUwsQ0FBWSxHQUFaLENBQVIsQ0FGb0M7QUFHMUMsWUFBSSxNQUFNLElBQU4sS0FBZSxTQUFmLEVBQTBCO0FBQzVCLGdCQUFNLElBQU4sR0FBYSxDQUFiLENBRDRCO1NBQTlCO09BSEY7S0FERjs7QUFVQSxXQUFPLGtCQUFNLEtBQU4sV0FBUCxDQWhCTTs7O0FBREosa0JBb0JKLDZCQUFTLE9BQU8sWUFBWSxTQUFTO0FBQ25DLFFBQU0saUJBQWlCLElBQUMsQ0FBSyxhQUFMLEtBQXVCLENBQXZCLEdBQTRCLENBQTdCLEdBQWlDLENBQWpDLENBRFk7O0FBR25DLFNBQUssS0FBTCxHQUFhLElBQWIsQ0FIbUM7O0FBS25DLFFBQUksQ0FBQyxLQUFLLFdBQUwsRUFBa0I7QUFDckIsV0FBSyxPQUFMLElBQWdCLE9BQUMsR0FBVSxLQUFLLE1BQUwsR0FBZSxLQUFLLGFBQUwsQ0FEckI7S0FBdkI7O0FBSUEsU0FBSyxJQUFJLElBQUksQ0FBSixFQUFPLElBQUksS0FBSyxZQUFMLEVBQW1CLEdBQXZDLEVBQTRDO0FBQzFDLFVBQU0sTUFBTSxLQUFLLFNBQUwsQ0FBZSxDQUFmLENBQU4sQ0FEb0M7QUFFMUMsVUFBTSxRQUFRLEtBQUssTUFBTCxDQUFZLEdBQVosQ0FBUixDQUZvQzs7QUFJMUMsVUFBSSxXQUFXLG9CQUFTLGdDQUFxQixLQUFLLE9BQUwsR0FBZSxNQUFNLEtBQU4sRUFBYSxDQUFqRCxFQUFvRCxNQUFNLFFBQU4sQ0FBN0QsRUFBOEUsQ0FBOUUsRUFBaUYsQ0FBakYsQ0FBWDs7O0FBSnNDLFVBT3RDLGFBQWEsY0FBYixFQUE2QjtBQUMvQixhQUFLLEtBQUwsR0FBYSxLQUFiLENBRCtCO09BQWpDOzs7QUFQMEMsVUFZdEMsTUFBTSxLQUFOLEVBQWE7QUFDZixtQkFBVyx3QkFBYSxRQUFiLEVBQXVCLE1BQU0sS0FBTixDQUFsQyxDQURlO09BQWpCOzs7QUFaMEMsV0FpQjFDLENBQU0sT0FBTixHQUFnQixnQkFBSyxRQUFMLEVBQWUsTUFBTSxJQUFOLEVBQVksTUFBTSxFQUFOLEVBQVUsTUFBTSxJQUFOLENBQXJELENBakIwQztLQUE1Qzs7O0FBN0JFLGtCQWtESixtQ0FBYTtBQUNYLFFBQUksS0FBSyxLQUFMLEVBQVk7QUFDZCxVQUFJLFlBQVksS0FBWixDQURVOztBQUdkLFdBQUssSUFBSSxHQUFKLElBQVcsVUFBaEIsRUFBNEI7QUFDMUIsWUFBSSxXQUFXLGNBQVgsQ0FBMEIsR0FBMUIsQ0FBSixFQUFvQztBQUNsQyxjQUFJLGtCQUFNLEtBQUssR0FBTCxDQUFOLEtBQW9CLEtBQUssR0FBTCxJQUFZLEtBQUssTUFBTSxLQUFOLENBQWpCLEVBQStCO0FBQ3JELGlCQUFLLE1BQU0sS0FBTixDQUFMLEdBRHFEO0FBRXJELHdCQUFZLElBQVosQ0FGcUQ7QUFHckQsaUJBQUssV0FBVyxHQUFYLENBQUwsSUFIcUQ7V0FBdkQ7U0FERjtPQURGOztBQVVBLFVBQUksQ0FBQyxTQUFELEVBQVk7QUFDZCxhQUFLLFFBQUwsR0FEYztPQUFoQjtLQWJGOzs7QUFuREUsa0JBc0VKLG1DQUFhO0FBQ1gsUUFBTSxTQUFTLEtBQUssTUFBTCxDQURKOztBQUdYLFNBQUssT0FBTCxHQUFlLEtBQUssUUFBTCxHQUFnQixLQUFLLE9BQUwsQ0FIcEI7O0FBS1gsU0FBSyxJQUFJLEdBQUosSUFBVyxNQUFoQixFQUF3QjtBQUN0QixVQUFJLE9BQU8sY0FBUCxDQUFzQixHQUF0QixDQUFKLEVBQWdDO0FBQzlCLFlBQU0sUUFBUSxPQUFPLEdBQVAsQ0FBUixDQUR3QjttQkFFTCxDQUFDLE1BQU0sSUFBTixFQUFZLE1BQU0sRUFBTixFQUZSO0FBRTdCLGNBQU0sRUFBTixXQUY2QjtBQUVuQixjQUFNLElBQU4sV0FGbUI7T0FBaEM7S0FERjs7QUFPQSxXQUFPLElBQVAsQ0FaVzs7O0FBdEVULGtCQXFGSiw2QkFBVTtBQUNSLFNBQUssYUFBTCxJQUFzQixDQUFDLENBQUQsQ0FEZDtBQUVSLFdBQU8sSUFBUCxDQUZROzs7QUFyRk4sa0JBMEZKLDZCQUFVO0FBQ1IsU0FBSyxPQUFMLEdBQWUsSUFBQyxDQUFLLGFBQUwsS0FBdUIsQ0FBdkIsR0FBNEIsQ0FBN0IsR0FBaUMsS0FBSyxRQUFMLENBRHhDO0FBRVIsU0FBSyxPQUFMLEdBQWUseUJBQWYsQ0FGUTtBQUdSLFdBQU8sSUFBUCxDQUhROzs7QUExRk4sa0JBZ0dKLHFCQUFLLFVBQVU7QUFDYixTQUFLLFFBQUwsQ0FBYyxLQUFLLFFBQUwsR0FBZ0IsUUFBaEIsQ0FBZCxDQURhO0FBRWIsV0FBTyxJQUFQLENBRmE7OztBQWhHWCxrQkFxR0osNkJBQVMsU0FBUztBQUNoQixRQUFJLENBQUMsS0FBSyxRQUFMLElBQWlCLEtBQUssV0FBTCxFQUFrQjtBQUN0QyxXQUFLLElBQUwsR0FEc0M7QUFFdEMsV0FBSyxXQUFMLEdBQW1CLElBQW5CLENBRnNDO0tBQXhDOztBQUtBLFNBQUssT0FBTCxHQUFlLE9BQWYsQ0FOZ0I7O0FBUWhCLFdBQU8sSUFBUCxDQVJnQjs7O1NBckdkOzs7QUFpSE4sTUFBTSxTQUFOLENBQWdCLGdCQUFoQixHQUFtQyxJQUFuQztBQUNBLE1BQU0sU0FBTixDQUFnQixZQUFoQixHQUErQixpQkFBTyxrQkFBUCxDQUEwQjtBQUN2RCxTQUFPLENBQVA7QUFDQSxZQUFVLEdBQVY7QUFDQSxRQUFNLHVCQUFPLE9BQVA7QUFDTixXQUFTLENBQVQ7QUFDQSxTQUFPLENBQVA7QUFDQSxNQUFJLENBQUo7QUFDQSxTQUFPLEtBQVA7Q0FQNkIsQ0FBL0I7QUFTQSxNQUFNLFNBQU4sQ0FBZ0IsWUFBaEIsR0FBK0IsaUJBQU8sa0JBQVAsQ0FBMEI7QUFDdkQsU0FBTyxLQUFQO0FBQ0EsVUFBUSxDQUFSO0FBQ0EsUUFBTSxDQUFOO0FBQ0EsUUFBTSxDQUFOO0FBQ0EsUUFBTSxDQUFOO0FBQ0EsYUFBVyxDQUFYO0FBQ0EsYUFBVyxDQUFYO0FBQ0EsYUFBVyxDQUFYO0FBQ0EsaUJBQWUsQ0FBZjtBQUNBLGVBQWEsS0FBYjtBQUNBLFNBQU8sS0FBUDtBQUNBLFdBQVMsQ0FBVDtDQVo2QixDQUEvQjs7a0JBZWUiLCJmaWxlIjoiVHdlZW4uanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL01hdHQvU2l0ZXMvcG9wbW90aW9uIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEFjdGlvbiBmcm9tICcuL0FjdGlvbic7XG5pbXBvcnQgZWFzaW5nIGZyb20gJy4vZWFzaW5nL3ByZXNldC1lYXNpbmcnO1xuaW1wb3J0IHsgY3VycmVudFRpbWUsIGlzTnVtIH0gZnJvbSAnLi4vaW5jL3V0aWxzJztcbmltcG9ydCB7IGVhc2UsIHJlc3RyaWN0LCBnZXRQcm9ncmVzc0Zyb21WYWx1ZSwgc3RlcFByb2dyZXNzIH0gZnJvbSAnLi4vaW5jL2NhbGMnO1xuXG5jb25zdCBDT1VOVCA9ICdDb3VudCc7XG5jb25zdCBORVhUX1NURVBTID0ge1xuICBsb29wOiAncmVzdGFydCcsXG4gIHlveW86ICdyZXZlcnNlJyxcbiAgZmxpcDogJ2ZsaXBWYWx1ZXMnXG59O1xuXG5jbGFzcyBUd2VlbiBleHRlbmRzIEFjdGlvbiB7XG4gIHN0YXJ0KCkge1xuICAgIHRoaXMuZWxhcHNlZCA9IDA7XG4gICAgdGhpcy5mbGlwQ291bnQgPSB0aGlzLnlveW9Db3VudCA9IHRoaXMubG9vcENvdW50ID0gMDtcbiAgICB0aGlzLmlzU2NydWJiaW5nID0gZmFsc2U7XG5cbiAgICAvLyBTZXQgZGVmYXVsdCBgZnJvbWAgaWYgbm9uZSBzZXRcbiAgICBpZiAoIXRoaXMuZmxvdykge1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLm51bVZhbHVlS2V5czsgaSsrKSB7XG4gICAgICAgIGNvbnN0IGtleSA9IHRoaXMudmFsdWVLZXlzW2ldO1xuICAgICAgICBjb25zdCB2YWx1ZSA9IHRoaXMudmFsdWVzW2tleV07XG4gICAgICAgIGlmICh2YWx1ZS5mcm9tID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB2YWx1ZS5mcm9tID0gMDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBzdXBlci5zdGFydCgpO1xuICB9XG5cbiAgb25VcGRhdGUodHdlZW4sIGZyYW1lU3RhbXAsIGVsYXBzZWQpIHtcbiAgICBjb25zdCBwcm9ncmVzc1RhcmdldCA9ICh0aGlzLnBsYXlEaXJlY3Rpb24gPT09IDEpID8gMSA6IDA7XG5cbiAgICB0aGlzLmVuZGVkID0gdHJ1ZTtcblxuICAgIGlmICghdGhpcy5pc1NjcnViYmluZykge1xuICAgICAgdGhpcy5lbGFwc2VkICs9IChlbGFwc2VkICogdGhpcy5kaWxhdGUpICogdGhpcy5wbGF5RGlyZWN0aW9uO1xuICAgIH1cblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5udW1WYWx1ZUtleXM7IGkrKykge1xuICAgICAgY29uc3Qga2V5ID0gdGhpcy52YWx1ZUtleXNbaV07XG4gICAgICBjb25zdCB2YWx1ZSA9IHRoaXMudmFsdWVzW2tleV07XG5cbiAgICAgIGxldCBwcm9ncmVzcyA9IHJlc3RyaWN0KGdldFByb2dyZXNzRnJvbVZhbHVlKHRoaXMuZWxhcHNlZCAtIHZhbHVlLmRlbGF5LCAwLCB2YWx1ZS5kdXJhdGlvbiksIDAsIDEpO1xuXG4gICAgICAvLyBNYXJrIFR3ZWVuIGFzIE5PVCBlbmRlZCBpZiBzdGlsbCBpbiBwcm9ncmVzc1xuICAgICAgaWYgKHByb2dyZXNzICE9PSBwcm9ncmVzc1RhcmdldCkge1xuICAgICAgICB0aGlzLmVuZGVkID0gZmFsc2U7XG4gICAgICB9XG5cbiAgICAgIC8vIFN0ZXAgcHJvZ3Jlc3MgaWYgd2UncmUgc3RlcHBpbmdcbiAgICAgIGlmICh2YWx1ZS5zdGVwcykge1xuICAgICAgICBwcm9ncmVzcyA9IHN0ZXBQcm9ncmVzcyhwcm9ncmVzcywgdmFsdWUuc3RlcHMpO1xuICAgICAgfVxuXG4gICAgICAvLyBFYXNlIHByb2dyZXNzXG4gICAgICB2YWx1ZS5jdXJyZW50ID0gZWFzZShwcm9ncmVzcywgdmFsdWUuZnJvbSwgdmFsdWUudG8sIHZhbHVlLmVhc2UpO1xuICAgIH1cbiAgfVxuXG4gIG9uRnJhbWVFbmQoKSB7XG4gICAgaWYgKHRoaXMuZW5kZWQpIHtcbiAgICAgIGxldCBzdGVwVGFrZW4gPSBmYWxzZTtcblxuICAgICAgZm9yIChsZXQga2V5IGluIE5FWFRfU1RFUFMpIHtcbiAgICAgICAgaWYgKE5FWFRfU1RFUFMuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgIGlmIChpc051bSh0aGlzW2tleV0pICYmIHRoaXNba2V5XSA+IHRoaXNba2V5ICsgQ09VTlRdKSB7XG4gICAgICAgICAgICB0aGlzW2tleSArIENPVU5UXSsrO1xuICAgICAgICAgICAgc3RlcFRha2VuID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXNbTkVYVF9TVEVQU1trZXldXSgpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoIXN0ZXBUYWtlbikge1xuICAgICAgICB0aGlzLmNvbXBsZXRlKCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZmxpcFZhbHVlcygpIHtcbiAgICBjb25zdCB2YWx1ZXMgPSB0aGlzLnZhbHVlcztcblxuICAgIHRoaXMuZWxhcHNlZCA9IHRoaXMuZHVyYXRpb24gLSB0aGlzLmVsYXBzZWQ7XG5cbiAgICBmb3IgKGxldCBrZXkgaW4gdmFsdWVzKSB7XG4gICAgICBpZiAodmFsdWVzLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgY29uc3QgdmFsdWUgPSB2YWx1ZXNba2V5XTtcbiAgICAgICAgW3ZhbHVlLnRvLCB2YWx1ZS5mcm9tXSA9IFt2YWx1ZS5mcm9tLCB2YWx1ZS50b107XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICByZXZlcnNlKCkge1xuICAgIHRoaXMucGxheURpcmVjdGlvbiAqPSAtMTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHJlc3RhcnQoKSB7XG4gICAgdGhpcy5lbGFwc2VkID0gKHRoaXMucGxheURpcmVjdGlvbiA9PT0gMSkgPyAwIDogdGhpcy5kdXJhdGlvbjtcbiAgICB0aGlzLnN0YXJ0ZWQgPSBjdXJyZW50VGltZSgpO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgc2Vlayhwcm9ncmVzcykge1xuICAgIHRoaXMuc2Vla1RpbWUodGhpcy5kdXJhdGlvbiAqIHByb2dyZXNzKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHNlZWtUaW1lKGVsYXBzZWQpIHtcbiAgICBpZiAoIXRoaXMuaXNBY3RpdmUgfHwgdGhpcy5pc1NjcnViYmluZykge1xuICAgICAgdGhpcy5vbmNlKCk7XG4gICAgICB0aGlzLmlzU2NydWJiaW5nID0gdHJ1ZTtcbiAgICB9XG5cbiAgICB0aGlzLmVsYXBzZWQgPSBlbGFwc2VkO1xuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cbn1cblxuVHdlZW4ucHJvdG90eXBlLmRlZmF1bHRWYWx1ZVByb3AgPSAndG8nO1xuVHdlZW4ucHJvdG90eXBlLmRlZmF1bHRWYWx1ZSA9IEFjdGlvbi5leHRlbmREZWZhdWx0VmFsdWUoe1xuICBkZWxheTogMCxcbiAgZHVyYXRpb246IDMwMCxcbiAgZWFzZTogZWFzaW5nLmVhc2VPdXQsXG4gIGVsYXBzZWQ6IDAsXG4gIHN0ZXBzOiAwLFxuICB0bzogMCxcbiAgcm91bmQ6IGZhbHNlXG59KTtcblR3ZWVuLnByb3RvdHlwZS5kZWZhdWx0UHJvcHMgPSBBY3Rpb24uZXh0ZW5kRGVmYXVsdFByb3BzKHtcbiAgYmxlbmQ6IGZhbHNlLFxuICBkaWxhdGU6IDEsXG4gIGxvb3A6IDAsXG4gIHlveW86IDAsXG4gIGZsaXA6IDAsXG4gIGxvb3BDb3VudDogMCxcbiAgeW95b0NvdW50OiAwLFxuICBmbGlwQ291bnQ6IDAsXG4gIHBsYXlEaXJlY3Rpb246IDEsXG4gIGlzU2NydWJiaW5nOiBmYWxzZSxcbiAgZW5kZWQ6IGZhbHNlLFxuICBlbGFwc2VkOiAwXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgVHdlZW47XG4iXX0=

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _Action2 = __webpack_require__(3);
	
	var _Action3 = _interopRequireDefault(_Action2);
	
	var _calc = __webpack_require__(20);
	
	var _utils = __webpack_require__(21);
	
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
	
	      // Detect bounce
	      if (value.min !== undefined && value.current < value.min || value.max !== undefined && value.current > value.max) {
	        value.velocity *= -value.bounce;
	      }
	
	      // Check if value has changed
	      if (Math.abs(value.velocity) >= value.stopSpeed) {
	        this.hasChanged = true;
	      }
	
	      if (value.spring && !this.hasChanged) {
	        value.current = value.to;
	      }
	    }
	  };
	
	  Physics.prototype.onFrameEnd = function onFrameEnd() {
	    if (this.maxInactiveFrames !== Infinity) {
	      this.inactiveFrames = this.hasChanged ? 1 : this.inactiveFrames + 1;
	
	      if (this.inactiveFrames >= this.maxInactiveFrames) {
	        this.complete();
	      }
	    }
	  };
	
	  return Physics;
	}(_Action3.default);
	
	Physics.prototype.defaultValueProp = 'velocity';
	Physics.prototype.defaultValue = _Action3.default.extendDefaultValue({
	  acceleration: 0, // [number]: Acceleration to apply to value, in units per second
	  bounce: 0, // [number]: Factor to multiply velocity by on bounce
	  spring: 0, // [number]: Spring strength during 'string'
	  stopSpeed: 0.001, // [number]: Stop simulation under this speed
	  friction: 0 // [number]: Friction to apply per frame, 0-1
	});
	Physics.prototype.defaultProps = _Action3.default.extendDefaultProps({
	  maxInactiveFrames: 3
	});
	
	exports.default = Physics;
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hY3Rpb25zL1BoeXNpY3MuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBOzs7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7SUFFTTs7O0FBQ0osV0FESSxPQUNKLEdBQXFCOzBCQURqQixTQUNpQjs7c0NBQU47O0tBQU07O2lEQUNuQiwwQ0FBUyxLQUFULEdBRG1COztBQUVuQixVQUFLLGNBQUwsR0FBc0IsQ0FBdEIsQ0FGbUI7QUFHbkIsVUFBSyxrQkFBTCxHQUEwQixJQUExQixDQUhtQjs7R0FBckI7O0FBREksb0JBT0osNkJBQVMsU0FBUyxZQUFZLFNBQVM7QUFDckMsU0FBSyxVQUFMLEdBQWtCLEtBQWxCLENBRHFDOztBQUdyQyxTQUFLLElBQUksSUFBSSxDQUFKLEVBQU8sSUFBSSxLQUFLLFlBQUwsRUFBbUIsR0FBdkMsRUFBNEM7QUFDMUMsVUFBTSxNQUFNLEtBQUssU0FBTCxDQUFlLENBQWYsQ0FBTixDQURvQztBQUUxQyxVQUFNLFFBQVEsS0FBSyxNQUFMLENBQVksR0FBWixDQUFSOzs7QUFGb0MsV0FLMUMsQ0FBTSxRQUFOLElBQWtCLHlCQUFjLE1BQU0sWUFBTixFQUFvQixPQUFsQyxDQUFsQjs7O0FBTDBDLFdBUTFDLENBQU0sUUFBTixhQUFtQixJQUFJLE1BQU0sUUFBTixFQUFvQixVQUFVLEdBQVYsQ0FBM0M7OztBQVIwQyxVQVd0QyxNQUFNLE1BQU4sSUFBZ0Isa0JBQU0sTUFBTSxFQUFOLENBQXRCLEVBQWlDO0FBQ25DLFlBQU0sbUJBQW1CLE1BQU0sRUFBTixHQUFXLE1BQU0sT0FBTixDQUREO0FBRW5DLGNBQU0sUUFBTixJQUFrQixtQkFBbUIseUJBQWMsTUFBTSxNQUFOLEVBQWMsT0FBNUIsQ0FBbkIsQ0FGaUI7T0FBckM7OztBQVgwQyxXQWlCMUMsQ0FBTSxPQUFOLElBQWlCLHlCQUFjLE1BQU0sUUFBTixFQUFnQixPQUE5QixDQUFqQjs7O0FBakIwQyxVQW9CdEMsS0FBQyxDQUFNLEdBQU4sS0FBYyxTQUFkLElBQTJCLE1BQU0sT0FBTixHQUFnQixNQUFNLEdBQU4sSUFBZSxNQUFNLEdBQU4sS0FBYyxTQUFkLElBQTJCLE1BQU0sT0FBTixHQUFnQixNQUFNLEdBQU4sRUFBWTtBQUNwSCxjQUFNLFFBQU4sSUFBa0IsQ0FBRSxNQUFNLE1BQU4sQ0FEZ0c7T0FBdEg7OztBQXBCMEMsVUF5QnRDLEtBQUssR0FBTCxDQUFTLE1BQU0sUUFBTixDQUFULElBQTRCLE1BQU0sU0FBTixFQUFpQjtBQUMvQyxhQUFLLFVBQUwsR0FBa0IsSUFBbEIsQ0FEK0M7T0FBakQ7O0FBSUEsVUFBSSxNQUFNLE1BQU4sSUFBZ0IsQ0FBQyxLQUFLLFVBQUwsRUFBaUI7QUFDcEMsY0FBTSxPQUFOLEdBQWdCLE1BQU0sRUFBTixDQURvQjtPQUF0QztLQTdCRjs7O0FBVkUsb0JBNkNKLG1DQUFhO0FBQ1gsUUFBSSxLQUFLLGlCQUFMLEtBQTJCLFFBQTNCLEVBQXFDO0FBQ3ZDLFdBQUssY0FBTCxHQUFzQixLQUFLLFVBQUwsR0FBa0IsQ0FBbEIsR0FBc0IsS0FBSyxjQUFMLEdBQXNCLENBQXRCLENBREw7O0FBR3ZDLFVBQUksS0FBSyxjQUFMLElBQXVCLEtBQUssaUJBQUwsRUFBd0I7QUFDakQsYUFBSyxRQUFMLEdBRGlEO09BQW5EO0tBSEY7OztTQTlDRTs7O0FBd0ROLFFBQVEsU0FBUixDQUFrQixnQkFBbEIsR0FBcUMsVUFBckM7QUFDQSxRQUFRLFNBQVIsQ0FBa0IsWUFBbEIsR0FBaUMsaUJBQU8sa0JBQVAsQ0FBMEI7QUFDekQsZ0JBQWMsQ0FBZDtBQUNBLFVBQVEsQ0FBUjtBQUNBLFVBQVEsQ0FBUjtBQUNBLGFBQVcsS0FBWDtBQUNBLFlBQVUsQ0FBVjtBQUx5RCxDQUExQixDQUFqQztBQU9BLFFBQVEsU0FBUixDQUFrQixZQUFsQixHQUFpQyxpQkFBTyxrQkFBUCxDQUEwQjtBQUN6RCxxQkFBbUIsQ0FBbkI7Q0FEK0IsQ0FBakM7O2tCQUllIiwiZmlsZSI6IlBoeXNpY3MuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL01hdHQvU2l0ZXMvcG9wbW90aW9uIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEFjdGlvbiBmcm9tICcuL0FjdGlvbic7XG5pbXBvcnQgeyBzcGVlZFBlckZyYW1lIH0gZnJvbSAnLi4vaW5jL2NhbGMnO1xuaW1wb3J0IHsgaXNOdW0gfSBmcm9tICcuLi9pbmMvdXRpbHMnO1xuXG5jbGFzcyBQaHlzaWNzIGV4dGVuZHMgQWN0aW9uIHtcbiAgY29uc3RydWN0b3IoLi4uYXJncykge1xuICAgIHN1cGVyKC4uLmFyZ3MpO1xuICAgIHRoaXMuaW5hY3RpdmVGcmFtZXMgPSAwO1xuICAgIHRoaXMuY2FsY3VsYXRlc1ZlbG9jaXR5ID0gdHJ1ZTtcbiAgfVxuXG4gIG9uVXBkYXRlKHBoeXNpY3MsIGZyYW1lU3RhbXAsIGVsYXBzZWQpIHtcbiAgICB0aGlzLmhhc0NoYW5nZWQgPSBmYWxzZTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5udW1WYWx1ZUtleXM7IGkrKykge1xuICAgICAgY29uc3Qga2V5ID0gdGhpcy52YWx1ZUtleXNbaV07XG4gICAgICBjb25zdCB2YWx1ZSA9IHRoaXMudmFsdWVzW2tleV07XG5cbiAgICAgIC8vIEFwcGx5IGFjY2VsZXJhdGlvblxuICAgICAgdmFsdWUudmVsb2NpdHkgKz0gc3BlZWRQZXJGcmFtZSh2YWx1ZS5hY2NlbGVyYXRpb24sIGVsYXBzZWQpO1xuXG4gICAgICAvLyBBcHBseSBmcmljdGlvblxuICAgICAgdmFsdWUudmVsb2NpdHkgKj0gKDEgLSB2YWx1ZS5mcmljdGlvbikgKiogKGVsYXBzZWQgLyAxMDApO1xuXG4gICAgICAvLyBBcHBseSBzcHJpbmdcbiAgICAgIGlmICh2YWx1ZS5zcHJpbmcgJiYgaXNOdW0odmFsdWUudG8pKSB7XG4gICAgICAgIGNvbnN0IGRpc3RhbmNlVG9UYXJnZXQgPSB2YWx1ZS50byAtIHZhbHVlLmN1cnJlbnQ7XG4gICAgICAgIHZhbHVlLnZlbG9jaXR5ICs9IGRpc3RhbmNlVG9UYXJnZXQgKiBzcGVlZFBlckZyYW1lKHZhbHVlLnNwcmluZywgZWxhcHNlZCk7XG4gICAgICB9XG5cbiAgICAgIC8vIEFwcGx5IGxhdGVzdCB2ZWxvY2l0eVxuICAgICAgdmFsdWUuY3VycmVudCArPSBzcGVlZFBlckZyYW1lKHZhbHVlLnZlbG9jaXR5LCBlbGFwc2VkKTtcblxuICAgICAgLy8gRGV0ZWN0IGJvdW5jZVxuICAgICAgaWYgKCh2YWx1ZS5taW4gIT09IHVuZGVmaW5lZCAmJiB2YWx1ZS5jdXJyZW50IDwgdmFsdWUubWluKSB8fCAodmFsdWUubWF4ICE9PSB1bmRlZmluZWQgJiYgdmFsdWUuY3VycmVudCA+IHZhbHVlLm1heCkpIHtcbiAgICAgICAgdmFsdWUudmVsb2NpdHkgKj0gLSB2YWx1ZS5ib3VuY2U7XG4gICAgICB9XG4gICAgICBcbiAgICAgIC8vIENoZWNrIGlmIHZhbHVlIGhhcyBjaGFuZ2VkXG4gICAgICBpZiAoTWF0aC5hYnModmFsdWUudmVsb2NpdHkpID49IHZhbHVlLnN0b3BTcGVlZCkge1xuICAgICAgICB0aGlzLmhhc0NoYW5nZWQgPSB0cnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodmFsdWUuc3ByaW5nICYmICF0aGlzLmhhc0NoYW5nZWQpIHtcbiAgICAgICAgdmFsdWUuY3VycmVudCA9IHZhbHVlLnRvO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIG9uRnJhbWVFbmQoKSB7XG4gICAgaWYgKHRoaXMubWF4SW5hY3RpdmVGcmFtZXMgIT09IEluZmluaXR5KSB7XG4gICAgICB0aGlzLmluYWN0aXZlRnJhbWVzID0gdGhpcy5oYXNDaGFuZ2VkID8gMSA6IHRoaXMuaW5hY3RpdmVGcmFtZXMgKyAxO1xuXG4gICAgICBpZiAodGhpcy5pbmFjdGl2ZUZyYW1lcyA+PSB0aGlzLm1heEluYWN0aXZlRnJhbWVzKSB7XG4gICAgICAgIHRoaXMuY29tcGxldGUoKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuUGh5c2ljcy5wcm90b3R5cGUuZGVmYXVsdFZhbHVlUHJvcCA9ICd2ZWxvY2l0eSc7XG5QaHlzaWNzLnByb3RvdHlwZS5kZWZhdWx0VmFsdWUgPSBBY3Rpb24uZXh0ZW5kRGVmYXVsdFZhbHVlKHtcbiAgYWNjZWxlcmF0aW9uOiAwLCAvLyBbbnVtYmVyXTogQWNjZWxlcmF0aW9uIHRvIGFwcGx5IHRvIHZhbHVlLCBpbiB1bml0cyBwZXIgc2Vjb25kXG4gIGJvdW5jZTogMCwgLy8gW251bWJlcl06IEZhY3RvciB0byBtdWx0aXBseSB2ZWxvY2l0eSBieSBvbiBib3VuY2VcbiAgc3ByaW5nOiAwLCAvLyBbbnVtYmVyXTogU3ByaW5nIHN0cmVuZ3RoIGR1cmluZyAnc3RyaW5nJ1xuICBzdG9wU3BlZWQ6IDAuMDAxLCAvLyBbbnVtYmVyXTogU3RvcCBzaW11bGF0aW9uIHVuZGVyIHRoaXMgc3BlZWRcbiAgZnJpY3Rpb246IDAgLy8gW251bWJlcl06IEZyaWN0aW9uIHRvIGFwcGx5IHBlciBmcmFtZSwgMC0xXG59KTtcblBoeXNpY3MucHJvdG90eXBlLmRlZmF1bHRQcm9wcyA9IEFjdGlvbi5leHRlbmREZWZhdWx0UHJvcHMoe1xuICBtYXhJbmFjdGl2ZUZyYW1lczogM1xufSk7XG5cbmV4cG9ydCBkZWZhdWx0IFBoeXNpY3M7XG4iXX0=

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _Action2 = __webpack_require__(3);
	
	var _Action3 = _interopRequireDefault(_Action2);
	
	var _Pointer = __webpack_require__(38);
	
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
	
	var createPointer = function (e, preventDefault) {
	  return e.touches ? new _Pointer2.default(touchEventToPoint(e), 'touchmove', touchEventToPoint, preventDefault) : new _Pointer2.default(mouseEventToPoint(e), 'mousemove', mouseEventToPoint, preventDefault);
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
	    var preventDefault = arguments.length <= 1 || arguments[1] === undefined ? true : arguments[1];
	
	    _Action.prototype.start.call(this);
	
	    if (input) {
	      this.input = input.state ? input : createPointer(getActualEvent(input), preventDefault);
	    }
	
	    this.inputOffset = {};
	    this.inputOrigin = _extends({}, this.input.state);
	    this.input.start();
	
	    return this;
	  };
	
	  Track.prototype.stop = function stop() {
	    _Action.prototype.stop.call(this);
	    this.input.stop();
	
	    return this;
	  };
	
	  Track.prototype.onUpdate = function onUpdate(track, frameStamp, elapsed) {
	    this.inputOffset = (0, _calc.offset)(this.inputOrigin, this.input.state);
	
	    for (var i = 0; i < this.numValueKeys; i++) {
	      var key = this.valueKeys[i];
	
	      if (this.inputOffset.hasOwnProperty(key)) {
	        var value = this.values[key];
	        var inputProp = value.hasOwnProperty('watch') ? value.watch : key;
	
	        if (value.direct) {
	          value.current = this.input.state[inputProp];
	        } else {
	          value.current = value.from + this.inputOffset[inputProp];
	        }
	
	        // Smooth value if we have smoothing
	        if (value.smooth) {
	          value.current = (0, _calc.smooth)(value.current, value.prev, elapsed, value.smooth);
	        }
	      }
	    }
	  };
	
	  return Track;
	}(_Action3.default);
	
	Track.prototype.defaultValueProp = 'watch';
	Track.prototype.defaultValue = _Action3.default.extendDefaultValue({
	  direct: false,
	  from: 0
	});
	
	exports.default = Track;
	//# sourceMappingURL=data:application/json;base64,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UCxDQUEwQjtBQUN2RCxVQUFRLEtBQVI7QUFDQSxRQUFNLENBQU47Q0FGNkIsQ0FBL0I7O2tCQUtlIiwiZmlsZSI6IlRyYWNrLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9NYXR0L1NpdGVzL3BvcG1vdGlvbiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBBY3Rpb24gZnJvbSAnLi9BY3Rpb24nO1xuaW1wb3J0IFBvaW50ZXIgZnJvbSAnLi4vaW5wdXQvUG9pbnRlcic7XG5pbXBvcnQgeyBzbW9vdGgsIG9mZnNldCB9IGZyb20gJy4uL2luYy9jYWxjJztcblxuLypcbiAgU2NyYXBlIHgveSBjb29yZGluYXRlcyBmcm9tIHByb3ZpZGVkIGV2ZW50XG5cbiAgQHBhcmFtIFtldmVudF1cbiAgQHJldHVybiBbb2JqZWN0XVxuKi9cbmNvbnN0IG1vdXNlRXZlbnRUb1BvaW50ID0gKGUpID0+ICh7XG4gIHg6IGUucGFnZVgsXG4gIHk6IGUucGFnZVlcbn0pO1xuXG5jb25zdCB0b3VjaEV2ZW50VG9Qb2ludCA9ICh7IGNoYW5nZWRUb3VjaGVzIH0pID0+ICh7XG4gIHg6IGNoYW5nZWRUb3VjaGVzWzBdLmNsaWVudFgsXG4gIHk6IGNoYW5nZWRUb3VjaGVzWzBdLmNsaWVudFlcbn0pO1xuXG5jb25zdCBjcmVhdGVQb2ludGVyID0gKGUsIHByZXZlbnREZWZhdWx0KSA9PiBlLnRvdWNoZXMgP1xuICBuZXcgUG9pbnRlcih0b3VjaEV2ZW50VG9Qb2ludChlKSwgJ3RvdWNobW92ZScsIHRvdWNoRXZlbnRUb1BvaW50LCBwcmV2ZW50RGVmYXVsdCkgOiBcbiAgbmV3IFBvaW50ZXIobW91c2VFdmVudFRvUG9pbnQoZSksICdtb3VzZW1vdmUnLCBtb3VzZUV2ZW50VG9Qb2ludCwgcHJldmVudERlZmF1bHQpO1xuXG5jb25zdCBnZXRBY3R1YWxFdmVudCA9IChlKSA9PiBlLm9yaWdpbmFsRXZlbnQgfHwgZTtcblxuY2xhc3MgVHJhY2sgZXh0ZW5kcyBBY3Rpb24ge1xuICBzdGFydChpbnB1dCwgcHJldmVudERlZmF1bHQgPSB0cnVlKSB7XG4gICAgc3VwZXIuc3RhcnQoKTtcblxuICAgIGlmIChpbnB1dCkge1xuICAgICAgdGhpcy5pbnB1dCA9IGlucHV0LnN0YXRlID8gaW5wdXQgOiBjcmVhdGVQb2ludGVyKGdldEFjdHVhbEV2ZW50KGlucHV0KSwgcHJldmVudERlZmF1bHQpO1xuICAgIH1cblxuICAgIHRoaXMuaW5wdXRPZmZzZXQgPSB7fTtcbiAgICB0aGlzLmlucHV0T3JpZ2luID0geyAuLi50aGlzLmlucHV0LnN0YXRlIH07XG4gICAgdGhpcy5pbnB1dC5zdGFydCgpO1xuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBzdG9wKCkge1xuICAgIHN1cGVyLnN0b3AoKTtcbiAgICB0aGlzLmlucHV0LnN0b3AoKTtcblxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgb25VcGRhdGUodHJhY2ssIGZyYW1lU3RhbXAsIGVsYXBzZWQpIHtcbiAgICB0aGlzLmlucHV0T2Zmc2V0ID0gb2Zmc2V0KHRoaXMuaW5wdXRPcmlnaW4sIHRoaXMuaW5wdXQuc3RhdGUpO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLm51bVZhbHVlS2V5czsgaSsrKSB7XG4gICAgICBjb25zdCBrZXkgPSB0aGlzLnZhbHVlS2V5c1tpXTtcblxuICAgICAgaWYgKHRoaXMuaW5wdXRPZmZzZXQuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICBjb25zdCB2YWx1ZSA9IHRoaXMudmFsdWVzW2tleV07XG4gICAgICAgIGNvbnN0IGlucHV0UHJvcCA9IHZhbHVlLmhhc093blByb3BlcnR5KCd3YXRjaCcpID8gdmFsdWUud2F0Y2ggOiBrZXk7XG5cbiAgICAgICAgaWYgKHZhbHVlLmRpcmVjdCkge1xuICAgICAgICAgIHZhbHVlLmN1cnJlbnQgPSB0aGlzLmlucHV0LnN0YXRlW2lucHV0UHJvcF07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdmFsdWUuY3VycmVudCA9IHZhbHVlLmZyb20gKyB0aGlzLmlucHV0T2Zmc2V0W2lucHV0UHJvcF07XG4gICAgICAgIH1cblxuICAgICAgICAvLyBTbW9vdGggdmFsdWUgaWYgd2UgaGF2ZSBzbW9vdGhpbmdcbiAgICAgICAgaWYgKHZhbHVlLnNtb290aCkge1xuICAgICAgICAgIHZhbHVlLmN1cnJlbnQgPSBzbW9vdGgodmFsdWUuY3VycmVudCwgdmFsdWUucHJldiwgZWxhcHNlZCwgdmFsdWUuc21vb3RoKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5UcmFjay5wcm90b3R5cGUuZGVmYXVsdFZhbHVlUHJvcCA9ICd3YXRjaCc7XG5UcmFjay5wcm90b3R5cGUuZGVmYXVsdFZhbHVlID0gQWN0aW9uLmV4dGVuZERlZmF1bHRWYWx1ZSh7XG4gIGRpcmVjdDogZmFsc2UsXG4gIGZyb206IDBcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBUcmFjaztcbiJdfQ==

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _loop = __webpack_require__(39);
	
	var loop = _interopRequireWildcard(_loop);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } } /*
	                                                                                                                                                            Base Task class for creating a task on the main render loop.
	                                                                                                                                                          */
	
	
	function cleanup() {
	  this.onCleanup = undefined;
	  loop.deactivate(this.id);
	}
	
	function activate() {
	  this.onCleanup = cleanup;
	}
	
	var Task = function () {
	  function Task(props) {
	    _classCallCheck(this, Task);
	
	    this.id = loop.getTaskId();
	    this.isActive = false;
	
	    if (this.defaultProps) {
	      for (var key in this.defaultProps) {
	        if (this.defaultProps.hasOwnProperty(key)) {
	          this[key] = this.defaultProps[key];
	        }
	      }
	    }
	
	    this.set(props);
	  }
	
	  Task.prototype.set = function set(props) {
	    for (var key in props) {
	      if (props.hasOwnProperty(key)) {
	        this[key] = props[key];
	      }
	    }
	
	    return this;
	  };
	
	  Task.prototype.start = function start() {
	    loop.activate(this.id, this);
	
	    this.onActivateLoop = this.onCleanup = undefined;
	    this.isComplete = false;
	
	    if (this.onStart) {
	      this.onStart(this);
	    }
	
	    return this;
	  };
	
	  Task.prototype.stop = function stop() {
	    loop.deactivate(this.id);
	
	    if (this.onStop) {
	      this.onStop(this);
	    }
	
	    return this;
	  };
	
	  Task.prototype.once = function once() {
	    loop.activate(this.id, this);
	    this.onCleanup = undefined;
	    this.onActivateLoop = activate;
	
	    return this;
	  };
	
	  Task.prototype.complete = function complete() {
	    this.stop();
	
	    if (this.onComplete) {
	      this.onComplete(this);
	    }
	  };
	
	  /*
	    # Extend this Process with new properties
	    ## Returns new instance of this Process's `prototype` with existing and new properties
	     @param [object] (optional)
	    @return [Process]
	  */
	
	
	  Task.prototype.inherit = function inherit(props) {
	    var id = this.id;
	
	    var inheritedProps = _objectWithoutProperties(this, ['id']);
	
	    return new this.constructor(_extends({}, inheritedProps, props));
	  };
	
	  return Task;
	}();
	
	exports.default = Task;
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy90YXNrL1Rhc2suanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBR0E7O0lBQVk7Ozs7Ozs7Ozs7O0FBRVosU0FBUyxPQUFULEdBQW1CO0FBQ2pCLE9BQUssU0FBTCxHQUFpQixTQUFqQixDQURpQjtBQUVqQixPQUFLLFVBQUwsQ0FBZ0IsS0FBSyxFQUFMLENBQWhCLENBRmlCO0NBQW5COztBQUtBLFNBQVMsUUFBVCxHQUFvQjtBQUNsQixPQUFLLFNBQUwsR0FBaUIsT0FBakIsQ0FEa0I7Q0FBcEI7O0lBSXFCO0FBQ25CLFdBRG1CLElBQ25CLENBQVksS0FBWixFQUFtQjswQkFEQSxNQUNBOztBQUNqQixTQUFLLEVBQUwsR0FBVSxLQUFLLFNBQUwsRUFBVixDQURpQjtBQUVqQixTQUFLLFFBQUwsR0FBZ0IsS0FBaEIsQ0FGaUI7O0FBSWpCLFFBQUksS0FBSyxZQUFMLEVBQW1CO0FBQ3JCLFdBQUssSUFBSSxHQUFKLElBQVcsS0FBSyxZQUFMLEVBQW1CO0FBQ2pDLFlBQUksS0FBSyxZQUFMLENBQWtCLGNBQWxCLENBQWlDLEdBQWpDLENBQUosRUFBMkM7QUFDekMsZUFBSyxHQUFMLElBQVksS0FBSyxZQUFMLENBQWtCLEdBQWxCLENBQVosQ0FEeUM7U0FBM0M7T0FERjtLQURGOztBQVFBLFNBQUssR0FBTCxDQUFTLEtBQVQsRUFaaUI7R0FBbkI7O0FBRG1CLGlCQWdCbkIsbUJBQUksT0FBTztBQUNULFNBQUssSUFBSSxHQUFKLElBQVcsS0FBaEIsRUFBdUI7QUFDckIsVUFBSSxNQUFNLGNBQU4sQ0FBcUIsR0FBckIsQ0FBSixFQUErQjtBQUM3QixhQUFLLEdBQUwsSUFBWSxNQUFNLEdBQU4sQ0FBWixDQUQ2QjtPQUEvQjtLQURGOztBQU1BLFdBQU8sSUFBUCxDQVBTOzs7QUFoQlEsaUJBMEJuQix5QkFBUTtBQUNOLFNBQUssUUFBTCxDQUFjLEtBQUssRUFBTCxFQUFTLElBQXZCLEVBRE07O0FBR04sU0FBSyxjQUFMLEdBQXNCLEtBQUssU0FBTCxHQUFpQixTQUFqQixDQUhoQjtBQUlOLFNBQUssVUFBTCxHQUFrQixLQUFsQixDQUpNOztBQU1OLFFBQUksS0FBSyxPQUFMLEVBQWM7QUFDaEIsV0FBSyxPQUFMLENBQWEsSUFBYixFQURnQjtLQUFsQjs7QUFJQSxXQUFPLElBQVAsQ0FWTTs7O0FBMUJXLGlCQXVDbkIsdUJBQU87QUFDTCxTQUFLLFVBQUwsQ0FBZ0IsS0FBSyxFQUFMLENBQWhCLENBREs7O0FBR0wsUUFBSSxLQUFLLE1BQUwsRUFBYTtBQUNmLFdBQUssTUFBTCxDQUFZLElBQVosRUFEZTtLQUFqQjs7QUFJQSxXQUFPLElBQVAsQ0FQSzs7O0FBdkNZLGlCQWlEbkIsdUJBQU87QUFDTCxTQUFLLFFBQUwsQ0FBYyxLQUFLLEVBQUwsRUFBUyxJQUF2QixFQURLO0FBRUwsU0FBSyxTQUFMLEdBQWlCLFNBQWpCLENBRks7QUFHTCxTQUFLLGNBQUwsR0FBc0IsUUFBdEIsQ0FISzs7QUFLTCxXQUFPLElBQVAsQ0FMSzs7O0FBakRZLGlCQXlEbkIsK0JBQVc7QUFDVCxTQUFLLElBQUwsR0FEUzs7QUFHVCxRQUFJLEtBQUssVUFBTCxFQUFpQjtBQUNuQixXQUFLLFVBQUwsQ0FBZ0IsSUFBaEIsRUFEbUI7S0FBckI7Ozs7Ozs7Ozs7O0FBNURpQixpQkF3RW5CLDJCQUFRLE9BQU87UUFDTCxLQUEwQixLQUExQixHQURLOztRQUNFLDBDQUFtQixjQURyQjs7QUFFYixXQUFPLElBQUksS0FBSyxXQUFMLGNBQXNCLGdCQUFtQixNQUE3QyxDQUFQLENBRmE7OztTQXhFSSIsImZpbGUiOiJUYXNrLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9NYXR0L1NpdGVzL3BvcG1vdGlvbiIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gIEJhc2UgVGFzayBjbGFzcyBmb3IgY3JlYXRpbmcgYSB0YXNrIG9uIHRoZSBtYWluIHJlbmRlciBsb29wLlxuKi9cbmltcG9ydCAqIGFzIGxvb3AgZnJvbSAnLi9sb29wJztcblxuZnVuY3Rpb24gY2xlYW51cCgpIHtcbiAgdGhpcy5vbkNsZWFudXAgPSB1bmRlZmluZWQ7XG4gIGxvb3AuZGVhY3RpdmF0ZSh0aGlzLmlkKTtcbn1cblxuZnVuY3Rpb24gYWN0aXZhdGUoKSB7XG4gIHRoaXMub25DbGVhbnVwID0gY2xlYW51cDtcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGFzayB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgdGhpcy5pZCA9IGxvb3AuZ2V0VGFza0lkKCk7XG4gICAgdGhpcy5pc0FjdGl2ZSA9IGZhbHNlO1xuXG4gICAgaWYgKHRoaXMuZGVmYXVsdFByb3BzKSB7XG4gICAgICBmb3IgKGxldCBrZXkgaW4gdGhpcy5kZWZhdWx0UHJvcHMpIHtcbiAgICAgICAgaWYgKHRoaXMuZGVmYXVsdFByb3BzLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICB0aGlzW2tleV0gPSB0aGlzLmRlZmF1bHRQcm9wc1trZXldO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5zZXQocHJvcHMpO1xuICB9XG5cbiAgc2V0KHByb3BzKSB7XG4gICAgZm9yIChsZXQga2V5IGluIHByb3BzKSB7XG4gICAgICBpZiAocHJvcHMuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICB0aGlzW2tleV0gPSBwcm9wc1trZXldO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgc3RhcnQoKSB7XG4gICAgbG9vcC5hY3RpdmF0ZSh0aGlzLmlkLCB0aGlzKTtcblxuICAgIHRoaXMub25BY3RpdmF0ZUxvb3AgPSB0aGlzLm9uQ2xlYW51cCA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLmlzQ29tcGxldGUgPSBmYWxzZTtcblxuICAgIGlmICh0aGlzLm9uU3RhcnQpIHtcbiAgICAgIHRoaXMub25TdGFydCh0aGlzKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHN0b3AoKSB7XG4gICAgbG9vcC5kZWFjdGl2YXRlKHRoaXMuaWQpO1xuICAgIFxuICAgIGlmICh0aGlzLm9uU3RvcCkge1xuICAgICAgdGhpcy5vblN0b3AodGhpcyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBvbmNlKCkge1xuICAgIGxvb3AuYWN0aXZhdGUodGhpcy5pZCwgdGhpcyk7XG4gICAgdGhpcy5vbkNsZWFudXAgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5vbkFjdGl2YXRlTG9vcCA9IGFjdGl2YXRlO1xuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBjb21wbGV0ZSgpIHtcbiAgICB0aGlzLnN0b3AoKTtcblxuICAgIGlmICh0aGlzLm9uQ29tcGxldGUpIHtcbiAgICAgIHRoaXMub25Db21wbGV0ZSh0aGlzKTtcbiAgICB9XG4gIH1cblxuICAvKlxuICAgICMgRXh0ZW5kIHRoaXMgUHJvY2VzcyB3aXRoIG5ldyBwcm9wZXJ0aWVzXG4gICAgIyMgUmV0dXJucyBuZXcgaW5zdGFuY2Ugb2YgdGhpcyBQcm9jZXNzJ3MgYHByb3RvdHlwZWAgd2l0aCBleGlzdGluZyBhbmQgbmV3IHByb3BlcnRpZXNcblxuICAgIEBwYXJhbSBbb2JqZWN0XSAob3B0aW9uYWwpXG4gICAgQHJldHVybiBbUHJvY2Vzc11cbiAgKi9cbiAgaW5oZXJpdChwcm9wcykge1xuICAgIGNvbnN0IHsgaWQsIC4uLmluaGVyaXRlZFByb3BzIH0gPSB0aGlzO1xuICAgIHJldHVybiBuZXcgdGhpcy5jb25zdHJ1Y3Rvcih7IC4uLmluaGVyaXRlZFByb3BzLCAuLi5wcm9wcyB9KTtcbiAgfVxufSJdfQ==

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _Task2 = __webpack_require__(8);
	
	var _Task3 = _interopRequireDefault(_Task2);
	
	var _utils = __webpack_require__(21);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Input = function (_Task) {
	  _inherits(Input, _Task);
	
	  function Input(initialValues, poll) {
	    _classCallCheck(this, Input);
	
	    var _this = _possibleConstructorReturn(this, _Task.call(this));
	
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
	}(_Task3.default);
	
	exports.default = Input;
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9pbnB1dC9JbnB1dC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7OztBQUNBOzs7Ozs7Ozs7O0lBRXFCOzs7QUFDbkIsV0FEbUIsS0FDbkIsQ0FBWSxhQUFaLEVBQTJCLElBQTNCLEVBQWlDOzBCQURkLE9BQ2M7O2lEQUMvQixrQkFEK0I7O0FBRS9CLFVBQUssS0FBTCxHQUFhLGFBQWIsQ0FGK0I7O0FBSS9CLFFBQUksbUJBQU8sSUFBUCxDQUFKLEVBQWtCO0FBQ2hCLFlBQUssWUFBTCxHQUFvQjtlQUFNLE1BQUssTUFBTCxDQUFZLE1BQUssSUFBTCxFQUFaO09BQU4sQ0FESjtLQUFsQjtpQkFKK0I7R0FBakM7Ozs7Ozs7O0FBRG1CLGtCQWVuQix5QkFBTyxPQUFPO0FBQ1osU0FBSyxLQUFMLGdCQUFrQixLQUFLLEtBQUwsRUFBZSxNQUFqQyxDQURZOzs7U0FmSyIsImZpbGUiOiJJbnB1dC5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvTWF0dC9TaXRlcy9wb3Btb3Rpb24iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgVGFzayBmcm9tICcuLi90YXNrL1Rhc2snO1xuaW1wb3J0IHsgaXNGdW5jIH0gZnJvbSAnLi4vaW5jL3V0aWxzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5wdXQgZXh0ZW5kcyBUYXNrIHtcbiAgY29uc3RydWN0b3IoaW5pdGlhbFZhbHVlcywgcG9sbCkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5zdGF0ZSA9IGluaXRpYWxWYWx1ZXM7XG5cbiAgICBpZiAoaXNGdW5jKHBvbGwpKSB7XG4gICAgICB0aGlzLm9uRnJhbWVTdGFydCA9ICgpID0+IHRoaXMubGF0ZXN0KHRoaXMucG9sbCgpKTtcbiAgICB9XG4gIH1cblxuICAvKlxuICAgIE1hbnVhbGx5IGFkZCBsYXRlc3QgdmFsdWVzXG5cbiAgICBAcGFyYW0gW29iamVjdF1cbiAgKi9cbiAgbGF0ZXN0KHByb3BzKSB7XG4gICAgdGhpcy5zdGF0ZSA9IHsgLi4udGhpcy5zdGF0ZSwgLi4ucHJvcHMgfTtcbiAgfVxufVxuIl19

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _timeline = __webpack_require__(11);
	
	var _timeline2 = _interopRequireDefault(_timeline);
	
	var _utils = __webpack_require__(21);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var DEFAULT_INTERVAL = 100;
	
	exports.default = function (tweens, props) {
	  var propsIsDuration = (0, _utils.isNum)(props);
	  var interval = propsIsDuration ? props : props ? props.interval || DEFAULT_INTERVAL : DEFAULT_INTERVAL;
	  var at = 0;
	  var timelineDefinition = tweens.map(function (tween) {
	    var def = { tween: tween, at: at };
	    at += interval;
	    return def;
	  });
	
	  return (0, _timeline2.default)(timelineDefinition, props);
	};
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9pbmMvc3RhZ2dlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUE7Ozs7QUFDQTs7OztBQUVBLElBQU0sbUJBQW1CLEdBQW5COztrQkFFUyxVQUFDLE1BQUQsRUFBUyxLQUFULEVBQW1CO0FBQ2hDLE1BQU0sa0JBQWtCLGtCQUFNLEtBQU4sQ0FBbEIsQ0FEMEI7QUFFaEMsTUFBTSxXQUFXLGtCQUFrQixLQUFsQixHQUEwQixRQUFRLE1BQU0sUUFBTixJQUFrQixnQkFBbEIsR0FBcUMsZ0JBQTdDLENBRlg7QUFHaEMsTUFBSSxLQUFLLENBQUwsQ0FINEI7QUFJaEMsTUFBTSxxQkFBcUIsT0FBTyxHQUFQLENBQVcsVUFBQyxLQUFELEVBQVc7QUFDL0MsUUFBTSxNQUFNLEVBQUUsWUFBRixFQUFTLE1BQVQsRUFBTixDQUR5QztBQUUvQyxVQUFNLFFBQU4sQ0FGK0M7QUFHL0MsV0FBTyxHQUFQLENBSCtDO0dBQVgsQ0FBaEMsQ0FKMEI7O0FBVWhDLFNBQU8sd0JBQVMsa0JBQVQsRUFBNkIsS0FBN0IsQ0FBUCxDQVZnQztDQUFuQiIsImZpbGUiOiJzdGFnZ2VyLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9NYXR0L1NpdGVzL3BvcG1vdGlvbiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0aW1lbGluZSBmcm9tICcuL3RpbWVsaW5lJztcbmltcG9ydCB7IGlzTnVtIH0gZnJvbSAnLi91dGlscyc7XG5cbmNvbnN0IERFRkFVTFRfSU5URVJWQUwgPSAxMDA7XG5cbmV4cG9ydCBkZWZhdWx0ICh0d2VlbnMsIHByb3BzKSA9PiB7XG4gIGNvbnN0IHByb3BzSXNEdXJhdGlvbiA9IGlzTnVtKHByb3BzKTtcbiAgY29uc3QgaW50ZXJ2YWwgPSBwcm9wc0lzRHVyYXRpb24gPyBwcm9wcyA6IHByb3BzID8gcHJvcHMuaW50ZXJ2YWwgfHwgREVGQVVMVF9JTlRFUlZBTCA6IERFRkFVTFRfSU5URVJWQUw7XG4gIGxldCBhdCA9IDA7XG4gIGNvbnN0IHRpbWVsaW5lRGVmaW5pdGlvbiA9IHR3ZWVucy5tYXAoKHR3ZWVuKSA9PiB7XG4gICAgY29uc3QgZGVmID0geyB0d2VlbiwgYXQgfTtcbiAgICBhdCArPSBpbnRlcnZhbDtcbiAgICByZXR1cm4gZGVmO1xuICB9KTtcblxuICByZXR1cm4gdGltZWxpbmUodGltZWxpbmVEZWZpbml0aW9uLCBwcm9wcyk7XG59OyJdfQ==

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	exports.default = timeline;
	
	var _Tween = __webpack_require__(5);
	
	var _Tween2 = _interopRequireDefault(_Tween);
	
	var _presetEasing = __webpack_require__(18);
	
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
	
	    if (defIsObj) {
	      if (def.offset !== undefined) {
	        currentPlayhead = (0, _calc.relativeValue)(currentPlayhead, def.offset);
	      } else if (def.at !== undefined) {
	        currentPlayhead = def.at;
	      }
	    }
	
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
	
	    currentPlayhead += duration;
	  };
	
	  for (var i = 0; i < numDefs; i++) {
	    _loop(i);
	  }
	
	  return { totalTime: currentPlayhead, timeline: timeline };
	};
	
	var setTweens = function (_ref) {
	  var timeline = _ref.timeline;
	  var timelineLength = _ref.timelineLength;
	  var values = _ref.values;
	  var duration = _ref.duration;
	
	  for (var i = 0; i < timelineLength; i++) {
	    var _tween = timeline[i];
	    var tweenTime = values.p.current * duration - _tween.from;
	
	    if (tweenTime >= -50 && tweenTime <= _tween.duration + 50) {
	      _tween.fire(tweenTime);
	    }
	  }
	};
	
	function timeline(def) {
	  var props = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];
	
	  var _analyze = analyze(def);
	
	  var totalTime = _analyze.totalTime;
	  var timeline = _analyze.timeline;
	
	
	  return new _Tween2.default(_extends({
	    ease: _presetEasing2.default.linear
	  }, props, {
	    duration: totalTime,
	    values: {
	      p: { from: 0, to: 1 }
	    },
	    timeline: timeline,
	    timelineLength: timeline.length,
	    onRender: setTweens
	  }));
	}
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9pbmMvdGltZWxpbmUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O2tCQW9Fd0I7O0FBcEV4Qjs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFpQkEsSUFBTSxVQUFVLFVBQUMsSUFBRCxFQUFVO0FBQ3hCLE1BQU0sV0FBVyxFQUFYLENBRGtCO0FBRXhCLE1BQU0sVUFBVSxLQUFLLE1BQUwsQ0FGUTtBQUd4QixNQUFJLGtCQUFrQixDQUFsQixDQUhvQjs7d0JBS2Y7QUFDUCxRQUFNLE1BQU0sS0FBSyxDQUFMLENBQU47QUFDTixRQUFNLFdBQVcsSUFBSSxLQUFKLEdBQVksSUFBWixHQUFtQixLQUFuQjtBQUNqQixRQUFNLFFBQVEsV0FBYSxJQUFJLEtBQUosR0FBWSxHQUF6Qjs7QUFFZCxRQUFJLFFBQUosRUFBYztBQUNaLFVBQUksSUFBSSxNQUFKLEtBQWUsU0FBZixFQUEwQjtBQUM1QiwwQkFBa0IseUJBQWMsZUFBZCxFQUErQixJQUFJLE1BQUosQ0FBakQsQ0FENEI7T0FBOUIsTUFFTyxJQUFJLElBQUksRUFBSixLQUFXLFNBQVgsRUFBc0I7QUFDL0IsMEJBQWtCLElBQUksRUFBSixDQURhO09BQTFCO0tBSFQ7O0FBUUEsUUFBSSxXQUFXLENBQVg7QUFDSixTQUFLLElBQUksR0FBSixJQUFXLE1BQU0sTUFBTixFQUFjO0FBQzVCLFVBQUksTUFBTSxNQUFOLENBQWEsY0FBYixDQUE0QixHQUE1QixDQUFKLEVBQXNDO0FBQ3BDLFlBQU0sUUFBUSxNQUFNLE1BQU4sQ0FBYSxHQUFiLENBQVIsQ0FEOEI7QUFFcEMsbUJBQVcsS0FBSyxHQUFMLENBQVMsUUFBVCxFQUFtQixNQUFNLFFBQU4sQ0FBOUIsQ0FGb0M7T0FBdEM7S0FERjs7QUFPQSxhQUFTLElBQVQsQ0FBYztBQUNaLFlBQU0sZUFBTjtBQUNBLGdCQUFVLFFBQVY7QUFDQSxZQUFNLFVBQUMsSUFBRDtlQUFVLE1BQU0sUUFBTixDQUFlLElBQWY7T0FBVjtLQUhSOztBQU1BLHVCQUFtQixRQUFuQjtJQWhDc0I7O0FBS3hCLE9BQUssSUFBSSxJQUFJLENBQUosRUFBTyxJQUFJLE9BQUosRUFBYSxHQUE3QixFQUFrQztVQUF6QixHQUF5QjtHQUFsQzs7QUE4QkEsU0FBTyxFQUFFLFdBQVcsZUFBWCxFQUE0QixrQkFBOUIsRUFBUCxDQW5Dd0I7Q0FBVjs7QUFzQ2hCLElBQU0sWUFBWSxnQkFBb0Q7TUFBakQseUJBQWlEO01BQXZDLHFDQUF1QztNQUF2QixxQkFBdUI7TUFBZix5QkFBZTs7QUFDcEUsT0FBSyxJQUFJLElBQUksQ0FBSixFQUFPLElBQUksY0FBSixFQUFvQixHQUFwQyxFQUF5QztBQUN2QyxRQUFNLFNBQVEsU0FBUyxDQUFULENBQVIsQ0FEaUM7QUFFdkMsUUFBTSxZQUFZLE1BQUMsQ0FBTyxDQUFQLENBQVMsT0FBVCxHQUFtQixRQUFuQixHQUErQixPQUFNLElBQU4sQ0FGWDs7QUFJdkMsUUFBSSxhQUFhLENBQUMsRUFBRCxJQUFPLGFBQWEsT0FBTSxRQUFOLEdBQWlCLEVBQWpCLEVBQXFCO0FBQ3hELGFBQU0sSUFBTixDQUFXLFNBQVgsRUFEd0Q7S0FBMUQ7R0FKRjtDQURnQjs7QUFXSCxTQUFTLFFBQVQsQ0FBa0IsR0FBbEIsRUFBbUM7TUFBWiw4REFBUSxrQkFBSTs7aUJBQ2hCLFFBQVEsR0FBUixFQURnQjs7TUFDeEMsK0JBRHdDO01BQzdCLDZCQUQ2Qjs7O0FBR2hELFNBQU87QUFDTCxVQUFNLHVCQUFPLE1BQVA7S0FDSDtBQUNILGNBQVUsU0FBVjtBQUNBLFlBQVE7QUFDTixTQUFHLEVBQUUsTUFBTSxDQUFOLEVBQVMsSUFBSSxDQUFKLEVBQWQ7S0FERjtBQUdBLGNBQVUsUUFBVjtBQUNBLG9CQUFnQixTQUFTLE1BQVQ7QUFDaEIsY0FBVSxTQUFWO0lBVEssQ0FBUCxDQUhnRDtDQUFuQyIsImZpbGUiOiJ0aW1lbGluZS5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvTWF0dC9TaXRlcy9wb3Btb3Rpb24iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgVHdlZW4gZnJvbSAnLi4vYWN0aW9ucy9Ud2Vlbic7XG5pbXBvcnQgZWFzaW5nIGZyb20gJy4uL2FjdGlvbnMvZWFzaW5nL3ByZXNldC1lYXNpbmcnO1xuaW1wb3J0IHsgcmVsYXRpdmVWYWx1ZSB9IGZyb20gJy4vY2FsYyc7XG5cbi8qXG4gIEBwYXJhbSBbYXJyYXldXG4gICAgU2VxdWVudGlhbCBhcnJheSBvZiB0d2VlbnMsIGVhY2ggaXRlbSBjYW4gYmUgYSB0d2VlbiBvciBkZWZpbml0aW9uIG9iajpcblxuICAgIFtcbiAgICAgIG5ldyBUd2VlbigpLFxuICAgICAgc3RhZ2dlcigpLFxuICAgICAgdGltZWxpbmUoKSxcbiAgICAgIHtcbiAgICAgICAgdHdlZW46IG5ldyBUd2VlbigpLFxuICAgICAgICBhdDogMTAwLFxuICAgICAgICBvZmZzZXQ6IFwiKz0xMDBcIlxuICAgICAgfVxuICAgIF1cbiovXG5jb25zdCBhbmFseXplID0gKGRlZnMpID0+IHtcbiAgY29uc3QgdGltZWxpbmUgPSBbXTtcbiAgY29uc3QgbnVtRGVmcyA9IGRlZnMubGVuZ3RoO1xuICBsZXQgY3VycmVudFBsYXloZWFkID0gMDtcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IG51bURlZnM7IGkrKykge1xuICAgIGNvbnN0IGRlZiA9IGRlZnNbaV07XG4gICAgY29uc3QgZGVmSXNPYmogPSBkZWYudHdlZW4gPyB0cnVlIDogZmFsc2U7XG4gICAgY29uc3QgdHdlZW4gPSAoZGVmSXNPYmopID8gZGVmLnR3ZWVuIDogZGVmO1xuXG4gICAgaWYgKGRlZklzT2JqKSB7XG4gICAgICBpZiAoZGVmLm9mZnNldCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGN1cnJlbnRQbGF5aGVhZCA9IHJlbGF0aXZlVmFsdWUoY3VycmVudFBsYXloZWFkLCBkZWYub2Zmc2V0KTtcbiAgICAgIH0gZWxzZSBpZiAoZGVmLmF0ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgY3VycmVudFBsYXloZWFkID0gZGVmLmF0O1xuICAgICAgfVxuICAgIH1cblxuICAgIGxldCBkdXJhdGlvbiA9IDA7XG4gICAgZm9yIChsZXQga2V5IGluIHR3ZWVuLnZhbHVlcykge1xuICAgICAgaWYgKHR3ZWVuLnZhbHVlcy5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgIGNvbnN0IHZhbHVlID0gdHdlZW4udmFsdWVzW2tleV07XG4gICAgICAgIGR1cmF0aW9uID0gTWF0aC5tYXgoZHVyYXRpb24sIHZhbHVlLmR1cmF0aW9uKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aW1lbGluZS5wdXNoKHtcbiAgICAgIGZyb206IGN1cnJlbnRQbGF5aGVhZCxcbiAgICAgIGR1cmF0aW9uOiBkdXJhdGlvbixcbiAgICAgIGZpcmU6ICh0aW1lKSA9PiB0d2Vlbi5zZWVrVGltZSh0aW1lKVxuICAgIH0pO1xuXG4gICAgY3VycmVudFBsYXloZWFkICs9IGR1cmF0aW9uO1xuICB9XG5cbiAgcmV0dXJuIHsgdG90YWxUaW1lOiBjdXJyZW50UGxheWhlYWQsIHRpbWVsaW5lIH07XG59O1xuXG5jb25zdCBzZXRUd2VlbnMgPSAoeyB0aW1lbGluZSwgdGltZWxpbmVMZW5ndGgsIHZhbHVlcywgZHVyYXRpb24gfSkgPT4ge1xuICBmb3IgKGxldCBpID0gMDsgaSA8IHRpbWVsaW5lTGVuZ3RoOyBpKyspIHtcbiAgICBjb25zdCB0d2VlbiA9IHRpbWVsaW5lW2ldO1xuICAgIGNvbnN0IHR3ZWVuVGltZSA9ICh2YWx1ZXMucC5jdXJyZW50ICogZHVyYXRpb24pIC0gdHdlZW4uZnJvbTtcblxuICAgIGlmICh0d2VlblRpbWUgPj0gLTUwICYmIHR3ZWVuVGltZSA8PSB0d2Vlbi5kdXJhdGlvbiArIDUwKSB7XG4gICAgICB0d2Vlbi5maXJlKHR3ZWVuVGltZSk7XG4gICAgfVxuICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB0aW1lbGluZShkZWYsIHByb3BzID0ge30pIHtcbiAgY29uc3QgeyB0b3RhbFRpbWUsIHRpbWVsaW5lIH0gPSBhbmFseXplKGRlZik7XG5cbiAgcmV0dXJuIG5ldyBUd2Vlbih7XG4gICAgZWFzZTogZWFzaW5nLmxpbmVhcixcbiAgICAuLi5wcm9wcyxcbiAgICBkdXJhdGlvbjogdG90YWxUaW1lLFxuICAgIHZhbHVlczoge1xuICAgICAgcDogeyBmcm9tOiAwLCB0bzogMSB9XG4gICAgfSxcbiAgICB0aW1lbGluZTogdGltZWxpbmUsXG4gICAgdGltZWxpbmVMZW5ndGg6IHRpbWVsaW5lLmxlbmd0aCxcbiAgICBvblJlbmRlcjogc2V0VHdlZW5zXG4gIH0pO1xufSJdfQ==

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	/*
	  Override `getter` and `setter` to reimplement the interface for new element types.
	
	  Set `.stateMap` as an object key/value map to translate incoming keys to
	  API-specific keys. For instance, { x: 'translateX' }. 
	
	  Set `.valueTypeMap` as an object key/value map to return a value type with
	  `getValueType(key)` (key will be mapped according to `stateMap`)
	*/
	
	var mapKey = function (key, map) {
	  return map ? map[key] || key : key;
	};
	
	exports.default = function (options) {
	  /*
	    Adapter is setter function
	     @param [object]: Object to set properties on
	    @param [object]: Key/value properties to set
	  */
	  var adapter = function (element, props, data) {
	    if (options.stateMap) {
	      // Translate props
	      for (var key in props) {
	        if (props.hasOwnProperty(key)) {
	          var mappedKey = mapKey(key, options.stateMap);
	
	          if (mappedKey !== key) {
	            props[mappedKey] = props[key];
	            delete props[key];
	          }
	        }
	      }
	    }
	
	    return options.setter(element, props, data);
	  };
	
	  adapter.get = function (element, key) {
	    return options.getter(element, mapKey(key, options.stateMap));
	  };
	  adapter.checkValueType = function (key) {
	    return options.valueTypeMap ? options.valueTypeMap[mapKey(key, options.stateMap)] : false;
	  };
	  adapter.getElementData = options.getElementData;
	
	  return adapter;
	};
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hZGFwdGVyL2FkYXB0ZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQVVBLElBQU0sU0FBUyxVQUFDLEdBQUQsRUFBTSxHQUFOO1NBQWMsTUFBTSxJQUFJLEdBQUosS0FBWSxHQUFaLEdBQWtCLEdBQXhCO0NBQWQ7O2tCQUVBLFVBQUMsT0FBRCxFQUFhOzs7Ozs7QUFPMUIsTUFBTSxVQUFVLFVBQUMsT0FBRCxFQUFVLEtBQVYsRUFBaUIsSUFBakIsRUFBMEI7QUFDeEMsUUFBSSxRQUFRLFFBQVIsRUFBa0I7O0FBRXBCLFdBQUssSUFBSSxHQUFKLElBQVcsS0FBaEIsRUFBdUI7QUFDckIsWUFBSSxNQUFNLGNBQU4sQ0FBcUIsR0FBckIsQ0FBSixFQUErQjtBQUM3QixjQUFNLFlBQVksT0FBTyxHQUFQLEVBQVksUUFBUSxRQUFSLENBQXhCLENBRHVCOztBQUc3QixjQUFJLGNBQWMsR0FBZCxFQUFtQjtBQUNyQixrQkFBTSxTQUFOLElBQW1CLE1BQU0sR0FBTixDQUFuQixDQURxQjtBQUVyQixtQkFBTyxNQUFNLEdBQU4sQ0FBUCxDQUZxQjtXQUF2QjtTQUhGO09BREY7S0FGRjs7QUFjQSxXQUFPLFFBQVEsTUFBUixDQUFlLE9BQWYsRUFBd0IsS0FBeEIsRUFBK0IsSUFBL0IsQ0FBUCxDQWZ3QztHQUExQixDQVBVOztBQXlCMUIsVUFBUSxHQUFSLEdBQWMsVUFBQyxPQUFELEVBQVUsR0FBVjtXQUFrQixRQUFRLE1BQVIsQ0FBZSxPQUFmLEVBQXdCLE9BQU8sR0FBUCxFQUFZLFFBQVEsUUFBUixDQUFwQztHQUFsQixDQXpCWTtBQTBCMUIsVUFBUSxjQUFSLEdBQXlCLFVBQUMsR0FBRDtXQUFTLFFBQVEsWUFBUixHQUF1QixRQUFRLFlBQVIsQ0FBcUIsT0FBTyxHQUFQLEVBQVksUUFBUSxRQUFSLENBQWpDLENBQXZCLEdBQTZFLEtBQTdFO0dBQVQsQ0ExQkM7QUEyQjFCLFVBQVEsY0FBUixHQUF5QixRQUFRLGNBQVIsQ0EzQkM7O0FBNkIxQixTQUFPLE9BQVAsQ0E3QjBCO0NBQWIiLCJmaWxlIjoiYWRhcHRlci5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvTWF0dC9TaXRlcy9wb3Btb3Rpb24iLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICBPdmVycmlkZSBgZ2V0dGVyYCBhbmQgYHNldHRlcmAgdG8gcmVpbXBsZW1lbnQgdGhlIGludGVyZmFjZSBmb3IgbmV3IGVsZW1lbnQgdHlwZXMuXG5cbiAgU2V0IGAuc3RhdGVNYXBgIGFzIGFuIG9iamVjdCBrZXkvdmFsdWUgbWFwIHRvIHRyYW5zbGF0ZSBpbmNvbWluZyBrZXlzIHRvXG4gIEFQSS1zcGVjaWZpYyBrZXlzLiBGb3IgaW5zdGFuY2UsIHsgeDogJ3RyYW5zbGF0ZVgnIH0uIFxuXG4gIFNldCBgLnZhbHVlVHlwZU1hcGAgYXMgYW4gb2JqZWN0IGtleS92YWx1ZSBtYXAgdG8gcmV0dXJuIGEgdmFsdWUgdHlwZSB3aXRoXG4gIGBnZXRWYWx1ZVR5cGUoa2V5KWAgKGtleSB3aWxsIGJlIG1hcHBlZCBhY2NvcmRpbmcgdG8gYHN0YXRlTWFwYClcbiovXG5cbmNvbnN0IG1hcEtleSA9IChrZXksIG1hcCkgPT4gbWFwID8gbWFwW2tleV0gfHwga2V5IDoga2V5O1xuXG5leHBvcnQgZGVmYXVsdCAob3B0aW9ucykgPT4ge1xuICAvKlxuICAgIEFkYXB0ZXIgaXMgc2V0dGVyIGZ1bmN0aW9uXG5cbiAgICBAcGFyYW0gW29iamVjdF06IE9iamVjdCB0byBzZXQgcHJvcGVydGllcyBvblxuICAgIEBwYXJhbSBbb2JqZWN0XTogS2V5L3ZhbHVlIHByb3BlcnRpZXMgdG8gc2V0XG4gICovXG4gIGNvbnN0IGFkYXB0ZXIgPSAoZWxlbWVudCwgcHJvcHMsIGRhdGEpID0+IHtcbiAgICBpZiAob3B0aW9ucy5zdGF0ZU1hcCkge1xuICAgICAgLy8gVHJhbnNsYXRlIHByb3BzXG4gICAgICBmb3IgKGxldCBrZXkgaW4gcHJvcHMpIHtcbiAgICAgICAgaWYgKHByb3BzLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICBjb25zdCBtYXBwZWRLZXkgPSBtYXBLZXkoa2V5LCBvcHRpb25zLnN0YXRlTWFwKTtcbiAgICAgICAgICBcbiAgICAgICAgICBpZiAobWFwcGVkS2V5ICE9PSBrZXkpIHtcbiAgICAgICAgICAgIHByb3BzW21hcHBlZEtleV0gPSBwcm9wc1trZXldO1xuICAgICAgICAgICAgZGVsZXRlIHByb3BzW2tleV07XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG9wdGlvbnMuc2V0dGVyKGVsZW1lbnQsIHByb3BzLCBkYXRhKTtcbiAgfTtcblxuICBhZGFwdGVyLmdldCA9IChlbGVtZW50LCBrZXkpID0+IG9wdGlvbnMuZ2V0dGVyKGVsZW1lbnQsIG1hcEtleShrZXksIG9wdGlvbnMuc3RhdGVNYXApKTtcbiAgYWRhcHRlci5jaGVja1ZhbHVlVHlwZSA9IChrZXkpID0+IG9wdGlvbnMudmFsdWVUeXBlTWFwID8gb3B0aW9ucy52YWx1ZVR5cGVNYXBbbWFwS2V5KGtleSwgb3B0aW9ucy5zdGF0ZU1hcCldIDogZmFsc2U7XG4gIGFkYXB0ZXIuZ2V0RWxlbWVudERhdGEgPSBvcHRpb25zLmdldEVsZW1lbnREYXRhO1xuXG4gIHJldHVybiBhZGFwdGVyO1xufTsiXX0=

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports.setter = exports.getter = undefined;
	
	var _adapter = __webpack_require__(12);
	
	var _adapter2 = _interopRequireDefault(_adapter);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var getter = exports.getter = function (element, key) {
	  return element.getAttribute(key);
	};
	var setter = exports.setter = function (element, props) {
	  for (var key in props) {
	    if (props.hasOwnProperty(key)) {
	      element.setAttribute(key, props[key]);
	    }
	  }
	};
	
	exports.default = (0, _adapter2.default)({ getter: getter, setter: setter });
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hZGFwdGVyL2F0dHItYWRhcHRlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBOzs7Ozs7QUFFTyxJQUFNLDBCQUFTLFVBQUMsT0FBRCxFQUFVLEdBQVY7U0FBa0IsUUFBUSxZQUFSLENBQXFCLEdBQXJCO0NBQWxCO0FBQ2YsSUFBTSwwQkFBUyxVQUFDLE9BQUQsRUFBVSxLQUFWLEVBQW9CO0FBQ3hDLE9BQUssSUFBSSxHQUFKLElBQVcsS0FBaEIsRUFBdUI7QUFDckIsUUFBSSxNQUFNLGNBQU4sQ0FBcUIsR0FBckIsQ0FBSixFQUErQjtBQUM3QixjQUFRLFlBQVIsQ0FBcUIsR0FBckIsRUFBMEIsTUFBTSxHQUFOLENBQTFCLEVBRDZCO0tBQS9CO0dBREY7Q0FEb0I7O2tCQVFQLHVCQUFjLEVBQUUsY0FBRixFQUFVLGNBQVYsRUFBZCIsImZpbGUiOiJhdHRyLWFkYXB0ZXIuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL01hdHQvU2l0ZXMvcG9wbW90aW9uIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNyZWF0ZUFkYXB0ZXIgZnJvbSAnLi9hZGFwdGVyJztcblxuZXhwb3J0IGNvbnN0IGdldHRlciA9IChlbGVtZW50LCBrZXkpID0+IGVsZW1lbnQuZ2V0QXR0cmlidXRlKGtleSk7XG5leHBvcnQgY29uc3Qgc2V0dGVyID0gKGVsZW1lbnQsIHByb3BzKSA9PiB7XG4gIGZvciAobGV0IGtleSBpbiBwcm9wcykge1xuICAgIGlmIChwcm9wcy5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZShrZXksIHByb3BzW2tleV0pO1xuICAgIH1cbiAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlQWRhcHRlcih7IGdldHRlciwgc2V0dGVyIH0pO1xuIl19

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _stateMap = __webpack_require__(40);
	
	var _stateMap2 = _interopRequireDefault(_stateMap);
	
	var _valueTypeMap = __webpack_require__(41);
	
	var _valueTypeMap2 = _interopRequireDefault(_valueTypeMap);
	
	var _build = __webpack_require__(42);
	
	var _build2 = _interopRequireDefault(_build);
	
	var _prefixer = __webpack_require__(43);
	
	var _prefixer2 = _interopRequireDefault(_prefixer);
	
	var _transformProps = __webpack_require__(44);
	
	var _transformProps2 = _interopRequireDefault(_transformProps);
	
	var _adapter = __webpack_require__(12);
	
	var _adapter2 = _interopRequireDefault(_adapter);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = (0, _adapter2.default)({
	  getter: function (element, key) {
	    return !_transformProps2.default[key] ? window.getComputedStyle(element, null)[(0, _prefixer2.default)(key)] : _valueTypeMap2.default[key].defaultProps.current || 0;
	  },
	  setter: function (element, props) {
	    return element.style.cssText += (0, _build2.default)(props);
	  },
	  valueTypeMap: _valueTypeMap2.default,
	  stateMap: _stateMap2.default
	});
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hZGFwdGVyL2Nzcy1hZGFwdGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7OztrQkFFZSx1QkFBYztBQUMzQixVQUFRLFVBQUMsT0FBRCxFQUFVLEdBQVYsRUFBa0I7QUFDeEIsV0FBTyxDQUFFLHlCQUFlLEdBQWYsQ0FBRCxHQUNOLE9BQU8sZ0JBQVAsQ0FBd0IsT0FBeEIsRUFBaUMsSUFBakMsRUFBdUMsd0JBQVMsR0FBVCxDQUF2QyxDQURLLEdBRUwsdUJBQWEsR0FBYixFQUFrQixZQUFsQixDQUErQixPQUEvQixJQUEwQyxDQUExQyxDQUhzQjtHQUFsQjtBQUtSLFVBQVEsVUFBQyxPQUFELEVBQVUsS0FBVjtXQUFvQixRQUFRLEtBQVIsQ0FBYyxPQUFkLElBQXlCLHFCQUFvQixLQUFwQixDQUF6QjtHQUFwQjtBQUNSLHNDQVAyQjtBQVEzQiw4QkFSMkI7Q0FBZCIsImZpbGUiOiJjc3MtYWRhcHRlci5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvTWF0dC9TaXRlcy9wb3Btb3Rpb24iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3RhdGVNYXAgZnJvbSAnLi9jc3Mvc3RhdGUtbWFwJztcbmltcG9ydCB2YWx1ZVR5cGVNYXAgZnJvbSAnLi9jc3MvdmFsdWUtdHlwZS1tYXAnO1xuaW1wb3J0IGJ1aWxkUHJvcGVydHlTdHJpbmcgZnJvbSAnLi9jc3MvYnVpbGQnO1xuaW1wb3J0IHByZWZpeGVyIGZyb20gJy4vY3NzL3ByZWZpeGVyJztcbmltcG9ydCB0cmFuc2Zvcm1Qcm9wcyBmcm9tICcuL2Nzcy90cmFuc2Zvcm0tcHJvcHMnO1xuaW1wb3J0IGNyZWF0ZUFkYXB0ZXIgZnJvbSAnLi9hZGFwdGVyJztcblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlQWRhcHRlcih7XG4gIGdldHRlcjogKGVsZW1lbnQsIGtleSkgPT4ge1xuICAgIHJldHVybiAoIXRyYW5zZm9ybVByb3BzW2tleV0pID9cbiAgICAgIHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGVsZW1lbnQsIG51bGwpW3ByZWZpeGVyKGtleSldIDpcbiAgICAgIHZhbHVlVHlwZU1hcFtrZXldLmRlZmF1bHRQcm9wcy5jdXJyZW50IHx8IDA7XG4gIH0sXG4gIHNldHRlcjogKGVsZW1lbnQsIHByb3BzKSA9PiBlbGVtZW50LnN0eWxlLmNzc1RleHQgKz0gYnVpbGRQcm9wZXJ0eVN0cmluZyhwcm9wcyksXG4gIHZhbHVlVHlwZU1hcCxcbiAgc3RhdGVNYXBcbn0pO1xuXG4iXX0=

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _adapter = __webpack_require__(12);
	
	var _adapter2 = _interopRequireDefault(_adapter);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = (0, _adapter2.default)({
	  getter: function (object, key) {
	    return object[key];
	  },
	  setter: function (object, props) {
	    for (var key in props) {
	      if (props.hasOwnProperty(key)) {
	        object[key] = props[key];
	      }
	    }
	  }
	});
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hZGFwdGVyL29iamVjdC1hZGFwdGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQTs7Ozs7O2tCQUVlLHVCQUFjO0FBQzNCLFVBQVEsVUFBQyxNQUFELEVBQVMsR0FBVDtXQUFpQixPQUFPLEdBQVA7R0FBakI7QUFDUixVQUFRLFVBQUMsTUFBRCxFQUFTLEtBQVQsRUFBbUI7QUFDekIsU0FBSyxJQUFJLEdBQUosSUFBVyxLQUFoQixFQUF1QjtBQUNyQixVQUFJLE1BQU0sY0FBTixDQUFxQixHQUFyQixDQUFKLEVBQStCO0FBQzdCLGVBQU8sR0FBUCxJQUFjLE1BQU0sR0FBTixDQUFkLENBRDZCO09BQS9CO0tBREY7R0FETTtDQUZLIiwiZmlsZSI6Im9iamVjdC1hZGFwdGVyLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9NYXR0L1NpdGVzL3BvcG1vdGlvbiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjcmVhdGVBZGFwdGVyIGZyb20gJy4vYWRhcHRlcic7XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUFkYXB0ZXIoe1xuICBnZXR0ZXI6IChvYmplY3QsIGtleSkgPT4gb2JqZWN0W2tleV0sXG4gIHNldHRlcjogKG9iamVjdCwgcHJvcHMpID0+IHtcbiAgICBmb3IgKGxldCBrZXkgaW4gcHJvcHMpIHtcbiAgICAgIGlmIChwcm9wcy5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgIG9iamVjdFtrZXldID0gcHJvcHNba2V5XTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn0pOyJdfQ==

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports.getElementData = exports.setter = exports.getter = undefined;
	
	var _stateMap = __webpack_require__(40);
	
	var _stateMap2 = _interopRequireDefault(_stateMap);
	
	var _valueTypeMap = __webpack_require__(45);
	
	var _valueTypeMap2 = _interopRequireDefault(_valueTypeMap);
	
	var _transformProps = __webpack_require__(44);
	
	var _transformProps2 = _interopRequireDefault(_transformProps);
	
	var _build = __webpack_require__(46);
	
	var _build2 = _interopRequireDefault(_build);
	
	var _attrAdapter = __webpack_require__(13);
	
	var _adapter = __webpack_require__(12);
	
	var _adapter2 = _interopRequireDefault(_adapter);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var getter = exports.getter = function (element, key) {
	  return !_transformProps2.default[key] ? (0, _attrAdapter.getter)(element, key) : _valueTypeMap2.default[key] && _valueTypeMap2.default[key].defaultProps ? _valueTypeMap2.default[key].defaultProps.current : 0;
	};
	var setter = exports.setter = function (element, props, data) {
	  return (0, _attrAdapter.setter)(element, (0, _build2.default)(props, data));
	};
	var getElementData = exports.getElementData = function (element) {
	  var bBox = element.getBBox();
	  return {
	    x: bBox.x,
	    y: bBox.y,
	    width: bBox.width,
	    height: bBox.height
	  };
	};
	
	exports.default = (0, _adapter2.default)({ getter: getter, setter: setter, stateMap: _stateMap2.default, valueTypeMap: _valueTypeMap2.default, getElementData: getElementData });
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hZGFwdGVyL3N2Zy1hZGFwdGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7QUFDQTs7Ozs7O0FBRU8sSUFBTSwwQkFBUyxVQUFDLE9BQUQsRUFBVSxHQUFWO1NBQWtCLENBQUUseUJBQWUsR0FBZixDQUFELEdBQXdCLHlCQUFXLE9BQVgsRUFBb0IsR0FBcEIsQ0FBekIsR0FBb0Qsc0JBQUMsQ0FBYSxHQUFiLEtBQXFCLHVCQUFhLEdBQWIsRUFBa0IsWUFBbEIsR0FBa0MsdUJBQWEsR0FBYixFQUFrQixZQUFsQixDQUErQixPQUEvQixHQUF5QyxDQUFqRztDQUF0RTtBQUNmLElBQU0sMEJBQVMsVUFBQyxPQUFELEVBQVUsS0FBVixFQUFpQixJQUFqQjtTQUEwQix5QkFBVyxPQUFYLEVBQW9CLHFCQUFNLEtBQU4sRUFBYSxJQUFiLENBQXBCO0NBQTFCO0FBQ2YsSUFBTSwwQ0FBaUIsVUFBQyxPQUFELEVBQWE7QUFDekMsTUFBTSxPQUFPLFFBQVEsT0FBUixFQUFQLENBRG1DO0FBRXpDLFNBQU87QUFDTCxPQUFHLEtBQUssQ0FBTDtBQUNILE9BQUcsS0FBSyxDQUFMO0FBQ0gsV0FBTyxLQUFLLEtBQUw7QUFDUCxZQUFRLEtBQUssTUFBTDtHQUpWLENBRnlDO0NBQWI7O2tCQVVmLHVCQUFjLEVBQUUsY0FBRixFQUFVLGNBQVYsRUFBa0IsNEJBQWxCLEVBQTRCLG9DQUE1QixFQUEwQyw4QkFBMUMsRUFBZCIsImZpbGUiOiJzdmctYWRhcHRlci5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvTWF0dC9TaXRlcy9wb3Btb3Rpb24iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3RhdGVNYXAgZnJvbSAnLi9jc3Mvc3RhdGUtbWFwJztcbmltcG9ydCB2YWx1ZVR5cGVNYXAgZnJvbSAnLi9zdmcvdmFsdWUtdHlwZS1tYXAnO1xuaW1wb3J0IHRyYW5zZm9ybVByb3BzIGZyb20gJy4vY3NzL3RyYW5zZm9ybS1wcm9wcyc7XG5pbXBvcnQgYnVpbGQgZnJvbSAnLi9zdmcvYnVpbGQnO1xuaW1wb3J0IHsgZ2V0dGVyIGFzIGF0dHJHZXR0ZXIsIHNldHRlciBhcyBhdHRyU2V0dGVyIH0gZnJvbSAnLi9hdHRyLWFkYXB0ZXInO1xuaW1wb3J0IGNyZWF0ZUFkYXB0ZXIgZnJvbSAnLi9hZGFwdGVyJztcblxuZXhwb3J0IGNvbnN0IGdldHRlciA9IChlbGVtZW50LCBrZXkpID0+ICghdHJhbnNmb3JtUHJvcHNba2V5XSkgPyBhdHRyR2V0dGVyKGVsZW1lbnQsIGtleSkgOiAodmFsdWVUeXBlTWFwW2tleV0gJiYgdmFsdWVUeXBlTWFwW2tleV0uZGVmYXVsdFByb3BzKSA/IHZhbHVlVHlwZU1hcFtrZXldLmRlZmF1bHRQcm9wcy5jdXJyZW50IDogMDtcbmV4cG9ydCBjb25zdCBzZXR0ZXIgPSAoZWxlbWVudCwgcHJvcHMsIGRhdGEpID0+IGF0dHJTZXR0ZXIoZWxlbWVudCwgYnVpbGQocHJvcHMsIGRhdGEpKTtcbmV4cG9ydCBjb25zdCBnZXRFbGVtZW50RGF0YSA9IChlbGVtZW50KSA9PiB7XG4gIGNvbnN0IGJCb3ggPSBlbGVtZW50LmdldEJCb3goKTtcbiAgcmV0dXJuIHtcbiAgICB4OiBiQm94LngsXG4gICAgeTogYkJveC55LFxuICAgIHdpZHRoOiBiQm94LndpZHRoLCBcbiAgICBoZWlnaHQ6IGJCb3guaGVpZ2h0XG4gIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVBZGFwdGVyKHsgZ2V0dGVyLCBzZXR0ZXIsIHN0YXRlTWFwLCB2YWx1ZVR5cGVNYXAsIGdldEVsZW1lbnREYXRhIH0pO1xuIl19

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _build = __webpack_require__(47);
	
	var _build2 = _interopRequireDefault(_build);
	
	var _stateMap = __webpack_require__(40);
	
	var _stateMap2 = _interopRequireDefault(_stateMap);
	
	var _svgAdapter = __webpack_require__(16);
	
	var _adapter = __webpack_require__(12);
	
	var _adapter2 = _interopRequireDefault(_adapter);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = (0, _adapter2.default)({
	  getter: _svgAdapter.getter,
	  setter: function (element, props, opts) {
	    var pathLength = opts ? opts.pathLength : 0;
	    return (0, _svgAdapter.setter)(element, (0, _build2.default)(props, pathLength), opts);
	  },
	  stateMap: _stateMap2.default,
	  getElementData: function (element) {
	    return _extends({ pathLength: element.getTotalLength() }, (0, _svgAdapter.getElementData)(element));
	  }
	});
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hZGFwdGVyL3N2Zy1wYXRoLWFkYXB0ZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOztBQUNBOzs7Ozs7a0JBRWUsdUJBQWM7QUFDM0IsNEJBRDJCO0FBRTNCLFVBQVEsVUFBQyxPQUFELEVBQVUsS0FBVixFQUFpQixJQUFqQixFQUEwQjtBQUNoQyxRQUFNLGFBQWEsT0FBTyxLQUFLLFVBQUwsR0FBa0IsQ0FBekIsQ0FEYTtBQUVoQyxXQUFPLHdCQUFPLE9BQVAsRUFBZ0IscUJBQU0sS0FBTixFQUFhLFVBQWIsQ0FBaEIsRUFBMEMsSUFBMUMsQ0FBUCxDQUZnQztHQUExQjtBQUlSLDhCQU4yQjtBQU8zQixrQkFBZ0IsVUFBQyxPQUFEO3NCQUFnQixZQUFZLFFBQVEsY0FBUixFQUFaLElBQXlDLGdDQUFlLE9BQWY7R0FBekQ7Q0FQSCIsImZpbGUiOiJzdmctcGF0aC1hZGFwdGVyLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9NYXR0L1NpdGVzL3BvcG1vdGlvbiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBidWlsZCBmcm9tICcuL3N2Zy1wYXRoL2J1aWxkJztcbmltcG9ydCBzdGF0ZU1hcCBmcm9tICcuL2Nzcy9zdGF0ZS1tYXAnO1xuaW1wb3J0IHsgZ2V0dGVyLCBzZXR0ZXIsIGdldEVsZW1lbnREYXRhIH0gZnJvbSAnLi9zdmctYWRhcHRlcic7XG5pbXBvcnQgY3JlYXRlQWRhcHRlciBmcm9tICcuL2FkYXB0ZXInO1xuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVBZGFwdGVyKHtcbiAgZ2V0dGVyLFxuICBzZXR0ZXI6IChlbGVtZW50LCBwcm9wcywgb3B0cykgPT4ge1xuICAgIGNvbnN0IHBhdGhMZW5ndGggPSBvcHRzID8gb3B0cy5wYXRoTGVuZ3RoIDogMDtcbiAgICByZXR1cm4gc2V0dGVyKGVsZW1lbnQsIGJ1aWxkKHByb3BzLCBwYXRoTGVuZ3RoKSwgb3B0cyk7XG4gIH0sXG4gIHN0YXRlTWFwLFxuICBnZXRFbGVtZW50RGF0YTogKGVsZW1lbnQpID0+ICh7IHBhdGhMZW5ndGg6IGVsZW1lbnQuZ2V0VG90YWxMZW5ndGgoKSwgLi4uZ2V0RWxlbWVudERhdGEoZWxlbWVudCkgfSlcbn0pO1xuIl19

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _createEasing = __webpack_require__(50);
	
	var _createEasing2 = _interopRequireDefault(_createEasing);
	
	var _createBezier = __webpack_require__(51);
	
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
	
	baseEasing.createVariations = _createEasing2.default;
	baseEasing.cubicBezier = _createBezier2.default;
	baseEasing.modify = function (easing) {
	  for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	    args[_key - 1] = arguments[_key];
	  }
	
	  return function (progress) {
	    return easing.apply(undefined, [progress].concat(args));
	  };
	};
	
	exports.default = baseEasing;
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hY3Rpb25zL2Vhc2luZy9wcmVzZXQtZWFzaW5nLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUEwQkE7Ozs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBR0EsSUFBTSx3QkFBd0IsS0FBeEI7QUFDTixJQUFNLHVCQUF1QixDQUF2Qjs7Ozs7Ozs7QUFRTixJQUFNLGFBQWE7QUFDakIsUUFBTSxVQUFDLFFBQUQ7UUFBVyxpRUFBVztvQkFBeUIsVUFBWTtHQUEzRDtBQUNOLFFBQU07V0FBWSxJQUFJLEtBQUssR0FBTCxDQUFTLEtBQUssSUFBTCxDQUFVLFFBQVYsQ0FBVCxDQUFKO0dBQVo7QUFDTixRQUFNLFVBQUMsUUFBRDtRQUFXLGlFQUFXO1dBQTBCLFFBQUMsR0FBVyxRQUFYLElBQXdCLENBQUMsV0FBVyxDQUFYLENBQUQsR0FBaUIsUUFBakIsR0FBNEIsUUFBNUIsQ0FBekI7R0FBaEQ7Q0FIRjs7O0FBT04sSUFBTSxzQkFBc0IsVUFBQyxRQUFEO1NBQWMsVUFBQyxRQUFEO1dBQWMsV0FBVyxJQUFYLENBQWdCLFFBQWhCLEVBQTBCLFFBQTFCO0dBQWQ7Q0FBZDs7QUFFNUIsQ0FBQyxPQUFELEVBQVUsT0FBVixFQUFtQixPQUFuQixFQUE0QixPQUE1QixDQUFvQyxVQUFDLFVBQUQsRUFBYSxDQUFiO1NBQW1CLFdBQVcsVUFBWCxJQUF5QixvQkFBb0IsSUFBSSxDQUFKLENBQTdDO0NBQW5CLENBQXBDOzs7QUFHQSxLQUFLLElBQUksR0FBSixJQUFXLFVBQWhCLEVBQTRCO0FBQzFCLE1BQUksV0FBVyxjQUFYLENBQTBCLEdBQTFCLENBQUosRUFBb0M7QUFDbEMsUUFBTSxpQkFBaUIsNEJBQXFCLFdBQVcsR0FBWCxDQUFyQixDQUFqQixDQUQ0QjtBQUVsQyxlQUFjLFVBQWQsSUFBeUIsZUFBZSxFQUFmLENBRlM7QUFHbEMsZUFBYyxXQUFkLElBQTBCLGVBQWUsR0FBZixDQUhRO0FBSWxDLGVBQWMsYUFBZCxJQUE0QixlQUFlLEtBQWYsQ0FKTTtHQUFwQztDQURGOztBQVNBLFdBQVcsTUFBWCxHQUFvQjtTQUFZO0NBQVo7QUFDcEIsV0FBVyxVQUFYLEdBQXdCLFVBQUMsUUFBRDtNQUFXLGlFQUFXO1NBQzVDLENBQUUsWUFBVSxDQUFWLENBQUQsR0FBZ0IsQ0FBaEIsR0FBcUIsTUFBTSxXQUFXLE1BQVgsQ0FBa0IsUUFBbEIsRUFBNEIsUUFBNUIsQ0FBTixHQUErQyxPQUFPLElBQUksS0FBSyxHQUFMLENBQVMsQ0FBVCxFQUFZLENBQUMsRUFBRCxJQUFPLFdBQVcsQ0FBWCxDQUFQLENBQWhCLENBQVA7Q0FEL0M7O0FBR3hCLFdBQVcsZ0JBQVg7QUFDQSxXQUFXLFdBQVg7QUFDQSxXQUFXLE1BQVgsR0FBb0IsVUFBQyxNQUFEO29DQUFZOzs7O1NBQVMsVUFBQyxRQUFEO1dBQWMseUJBQU8saUJBQWEsS0FBcEI7R0FBZDtDQUFyQjs7a0JBRUwiLCJmaWxlIjoicHJlc2V0LWVhc2luZy5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvTWF0dC9TaXRlcy9wb3Btb3Rpb24iLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICBFYXNpbmcgZnVuY3Rpb25zXG4gIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgXG4gIEdlbmVyYXRlcyBhbmQgcHJvdmlkZXMgZWFzaW5nIGZ1bmN0aW9ucyBiYXNlZCBvbiBiYXNlRnVuY3Rpb24gZGVmaW5pdGlvbnNcbiAgXG4gIEEgY2FsbCB0byBlYXNpbmdGdW5jdGlvbi5nZXQoJ2Z1bmN0aW9uTmFtZScpIHJldHVybnMgYSBmdW5jdGlvbiB0aGF0IGNhbiBiZSBwYXNzZWQ6XG4gICAgQHBhcmFtIFtudW1iZXJdOiBQcm9ncmVzcyAwLTFcbiAgICBAcGFyYW0gW251bWJlcl0gKG9wdGlvbmFsKTogQW1wIG1vZGlmaWVyLCBvbmx5IGFjY2VwdGVkIGluIHNvbWUgZWFzaW5nIGZ1bmN0aW9uc1xuICAgICAgICAgICAgICAgICAgYW5kIGlzIHVzZWQgdG8gYWRqdXN0IG92ZXJhbGwgc3RyZW5ndGhcbiAgICBAcmV0dXJuIFtudW1iZXJdOiBFYXNlZCBwcm9ncmVzc1xuICAgIFxuICBXZSBjYW4gZ2VuZXJhdGUgbmV3IGZ1bmN0aW9ucyBieSBzZW5kaW5nIGFuIGVhc2luZyBmdW5jdGlvbiB0aHJvdWdoIGVhc2luZ0Z1bmN0aW9uLmV4dGVuZChuYW1lLCBtZXRob2QpLlxuICBXaGljaCB3aWxsIG1ha2UgbmFtZUluLCBuYW1lT3V0IGFuZCBuYW1lSW5PdXQgZnVuY3Rpb25zIGF2YWlsYWJsZSB0byB1c2UuXG4gICAgXG4gIEVhc2luZyBmdW5jdGlvbnMgZnJvbSBSb2JlcnQgUGVubmVyXG4gIGh0dHA6Ly93d3cucm9iZXJ0cGVubmVyLmNvbS9lYXNpbmcvXG4gICAgXG4gIEJlemllciBjdXJ2ZSBpbnRlcnByZXRvciBjcmVhdGVkIGZyb20gR2HDq3RhbiBSZW5hdWRlYXUncyBvcmlnaW5hbCBCZXppZXJFYXNpbmcgIFxuICBodHRwczovL2dpdGh1Yi5jb20vZ3JlL2Jlemllci1lYXNpbmcvYmxvYi9tYXN0ZXIvaW5kZXguanMgIFxuICBodHRwczovL2dpdGh1Yi5jb20vZ3JlL2Jlemllci1lYXNpbmcvYmxvYi9tYXN0ZXIvTElDRU5TRVxuXG4gIEFudGljaXBhdGUgZWFzaW5nIGNyZWF0ZWQgYnkgRWxsaW90IEdpbm9cbiAgaHR0cHM6Ly90d2l0dGVyLmNvbS9FbGxpb3RHZW5vXG4qL1xuLy8gSW1wb3J0c1xuaW1wb3J0IGNyZWF0ZUVhc2luZ0Z1bmN0aW9uIGZyb20gJy4vY3JlYXRlLWVhc2luZyc7XG5pbXBvcnQgY3ViaWNCZXppZXIgZnJvbSAnLi9jcmVhdGUtYmV6aWVyJztcblxuLy8gVmFsdWVzXG5jb25zdCBERUZBVUxUX0JBQ0tfU1RSRU5HVEggPSAxLjUyNTtcbmNvbnN0IERFRkFVTFRfUE9XX1NUUkVOR1RIID0gMjtcblxuLypcbiAgRWFjaCBvZiB0aGVzZSBiYXNlIGZ1bmN0aW9ucyBpcyBhbiBlYXNlSW5cbiAgXG4gIE9uIGluaXQsIHdlIHVzZSAubWlycm9yIGFuZCAucmV2ZXJzZSB0byBnZW5lcmF0ZSBlYXNlSW5PdXQgYW5kXG4gIGVhc2VPdXQgZnVuY3Rpb25zIHJlc3BlY3RpdmVseS5cbiovXG5jb25zdCBiYXNlRWFzaW5nID0ge1xuICBlYXNlOiAocHJvZ3Jlc3MsIHN0cmVuZ3RoID0gREVGQVVMVF9QT1dfU1RSRU5HVEgpID0+IHByb2dyZXNzICoqIHN0cmVuZ3RoLFxuICBjaXJjOiBwcm9ncmVzcyA9PiAxIC0gTWF0aC5zaW4oTWF0aC5hY29zKHByb2dyZXNzKSksXG4gIGJhY2s6IChwcm9ncmVzcywgc3RyZW5ndGggPSBERUZBVUxUX0JBQ0tfU1RSRU5HVEgpID0+IChwcm9ncmVzcyAqIHByb2dyZXNzKSAqICgoc3RyZW5ndGggKyAxKSAqIHByb2dyZXNzIC0gc3RyZW5ndGgpXG59O1xuXG4vLyBVdGlsaXR5IGZ1bmN0aW9uc1xuY29uc3QgZ2VuZXJhdGVQb3dlckVhc2luZyA9IChzdHJlbmd0aCkgPT4gKHByb2dyZXNzKSA9PiBiYXNlRWFzaW5nLmVhc2UocHJvZ3Jlc3MsIHN0cmVuZ3RoKTtcblxuWydjdWJpYycsICdxdWFydCcsICdxdWludCddLmZvckVhY2goKGVhc2luZ05hbWUsIGkpID0+IGJhc2VFYXNpbmdbZWFzaW5nTmFtZV0gPSBnZW5lcmF0ZVBvd2VyRWFzaW5nKGkgKyAzKSk7XG5cbi8vIEdlbmVyYXRlIGluL291dC9pbk91dCB2YXJpYXRpb25zXG5mb3IgKGxldCBrZXkgaW4gYmFzZUVhc2luZykge1xuICBpZiAoYmFzZUVhc2luZy5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgY29uc3QgZWFzaW5nRnVuY3Rpb24gPSBjcmVhdGVFYXNpbmdGdW5jdGlvbihiYXNlRWFzaW5nW2tleV0pO1xuICAgIGJhc2VFYXNpbmdbYCR7a2V5fUluYF0gPSBlYXNpbmdGdW5jdGlvbi5pbjtcbiAgICBiYXNlRWFzaW5nW2Ake2tleX1PdXRgXSA9IGVhc2luZ0Z1bmN0aW9uLm91dDtcbiAgICBiYXNlRWFzaW5nW2Ake2tleX1Jbk91dGBdID0gZWFzaW5nRnVuY3Rpb24uaW5PdXQ7XG4gIH1cbn1cblxuYmFzZUVhc2luZy5saW5lYXIgPSBwcm9ncmVzcyA9PiBwcm9ncmVzcztcbmJhc2VFYXNpbmcuYW50aWNpcGF0ZSA9IChwcm9ncmVzcywgc3RyZW5ndGggPSBERUZBVUxUX0JBQ0tfU1RSRU5HVEgpID0+XG4gICgocHJvZ3Jlc3MqPTIpIDwgMSkgPyAwLjUgKiBiYXNlRWFzaW5nLmJhY2tJbihwcm9ncmVzcywgc3RyZW5ndGgpIDogIDAuNSAqICgyIC0gTWF0aC5wb3coMiwgLTEwICogKHByb2dyZXNzIC0gMSkpKTtcblxuYmFzZUVhc2luZy5jcmVhdGVWYXJpYXRpb25zID0gY3JlYXRlRWFzaW5nRnVuY3Rpb247XG5iYXNlRWFzaW5nLmN1YmljQmV6aWVyID0gY3ViaWNCZXppZXI7XG5iYXNlRWFzaW5nLm1vZGlmeSA9IChlYXNpbmcsIC4uLmFyZ3MpID0+IChwcm9ncmVzcykgPT4gZWFzaW5nKHByb2dyZXNzLCAuLi5hcmdzKTtcblxuZXhwb3J0IGRlZmF1bHQgYmFzZUVhc2luZzsiXX0=

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _Flow = __webpack_require__(4);
	
	var _Flow2 = _interopRequireDefault(_Flow);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var SAVE_PROP = '__pm_flow';
	
	exports.default = function (element, adapter) {
	  if (element[SAVE_PROP]) {
	    return element[SAVE_PROP];
	  } else {
	    var flow = new _Flow2.default({ element: element, adapter: adapter });
	
	    // Bind adapter to element
	    Object.defineProperty(element, SAVE_PROP, {
	      enumerable: false,
	      writable: false,
	      value: flow
	    });
	
	    return flow;
	  }
	};
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hY3Rpb25zL2Zsb3cvZ2V0LWZsb3cuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBOzs7Ozs7QUFFQSxJQUFNLFlBQVksV0FBWjs7a0JBRVMsVUFBQyxPQUFELEVBQVUsT0FBVixFQUFzQjtBQUNuQyxNQUFJLFFBQVEsU0FBUixDQUFKLEVBQXdCO0FBQ3RCLFdBQU8sUUFBUSxTQUFSLENBQVAsQ0FEc0I7R0FBeEIsTUFFTztBQUNMLFFBQU0sT0FBTyxtQkFBUyxFQUFFLGdCQUFGLEVBQVcsZ0JBQVgsRUFBVCxDQUFQOzs7QUFERCxVQUlMLENBQU8sY0FBUCxDQUFzQixPQUF0QixFQUErQixTQUEvQixFQUEwQztBQUN4QyxrQkFBWSxLQUFaO0FBQ0EsZ0JBQVUsS0FBVjtBQUNBLGFBQU8sSUFBUDtLQUhGLEVBSks7O0FBVUwsV0FBTyxJQUFQLENBVks7R0FGUDtDQURhIiwiZmlsZSI6ImdldC1mbG93LmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9NYXR0L1NpdGVzL3BvcG1vdGlvbiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBGbG93IGZyb20gJy4uL0Zsb3cnO1xuXG5jb25zdCBTQVZFX1BST1AgPSAnX19wbV9mbG93JztcblxuZXhwb3J0IGRlZmF1bHQgKGVsZW1lbnQsIGFkYXB0ZXIpID0+IHtcbiAgaWYgKGVsZW1lbnRbU0FWRV9QUk9QXSkge1xuICAgIHJldHVybiBlbGVtZW50W1NBVkVfUFJPUF07XG4gIH0gZWxzZSB7XG4gICAgY29uc3QgZmxvdyA9IG5ldyBGbG93KHsgZWxlbWVudCwgYWRhcHRlciB9KTtcblxuICAgIC8vIEJpbmQgYWRhcHRlciB0byBlbGVtZW50XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGVsZW1lbnQsIFNBVkVfUFJPUCwge1xuICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICB3cml0YWJsZTogZmFsc2UsXG4gICAgICB2YWx1ZTogZmxvd1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIGZsb3c7XG4gIH1cbn07XG5cblxuIl19

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports.stepProgress = exports.speedPerSecond = exports.speedPerFrame = exports.smooth = exports.restrict = exports.relativeValue = exports.random = exports.radiansToDegrees = exports.pointFromAngleAndDistance = exports.offset = exports.getProgressFromValue = exports.getValueFromProgress = exports.hypotenuse = exports.ease = exports.distance = exports.dilate = exports.degreesToRadians = exports.angle = undefined;
	
	var _utils = __webpack_require__(21);
	
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
	  are at 0,0
	  
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
	
	  var _findValueAndUnit = (0, _utils.findValueAndUnit)(equation[1]);
	
	  var unit = _findValueAndUnit.unit;
	  var value = _findValueAndUnit.value;
	
	
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
	//# sourceMappingURL=data:application/json;base64,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aWxlIjoiY2FsYy5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvTWF0dC9TaXRlcy9wb3Btb3Rpb24iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBoYXNQcm9wZXJ0eSxcbiAgaXNOdW0sXG4gIGZpbmRWYWx1ZUFuZFVuaXQsXG4gIHRvRGVjaW1hbFxufSBmcm9tICcuL3V0aWxzJztcblxuY29uc3QgWkVST19QT0lOVCA9IHtcbiAgeDogMCxcbiAgeTogMCxcbiAgejogMFxufTtcblxuY29uc3QgZGlzdGFuY2UxRCA9IChhLCBiKSA9PiBNYXRoLmFicyhhIC0gYik7XG5cbi8qXG4gIEFuZ2xlIGJldHdlZW4gcG9pbnRzXG4gIFxuICBUcmFuc2xhdGVzIHRoZSBoeXBvdGhldGljYWwgbGluZSBzbyB0aGF0IHRoZSAnZnJvbScgY29vcmRpbmF0ZXNcbiAgYXJlIGF0IDAsMFxuICBcbiAgQHBhcmFtIFtvYmplY3RdOiBYIGFuZCBZIGNvb3JkaW5hdGVzIG9mIGZyb20gcG9pbnRcbiAgQHBhcmFtIFtvYmplY3RdOiBYIGFuZCBZIGNvcmRpbmF0ZXMgb2YgdG8gcG9pbnRcbiAgQHJldHVybiBbcmFkaWFuXTogQW5nbGUgYmV0d2VlbiB0aGUgdHdvIHBvaW50cyBpbiByYWRpYW5zXG4qL1xuZXhwb3J0IGNvbnN0IGFuZ2xlID0gKGEsIGIgPSBaRVJPX1BPSU5UKSA9PiByYWRpYW5zVG9EZWdyZWVzKE1hdGguYXRhbjIoYS54IC0gYi54LCBhLnkgLSBiLnkpKTtcblxuLypcbiAgQ29udmVydCBkZWdyZWVzIHRvIHJhZGlhbnNcbiAgXG4gIEBwYXJhbSBbbnVtYmVyXTogVmFsdWUgaW4gZGVncmVlc1xuICBAcmV0dXJuIFtudW1iZXJdOiBWYWx1ZSBpbiByYWRpYW5zXG4qL1xuZXhwb3J0IGNvbnN0IGRlZ3JlZXNUb1JhZGlhbnMgPSAoZGVncmVlcykgPT4gZGVncmVlcyAqIE1hdGguUEkgLyAxODA7XG5cbi8qXG4gIERpbGF0ZVxuICBcbiAgQ2hhbmdlIHRoZSBwcm9ncmVzc2lvbiBiZXR3ZWVuIGEgYW5kIGIgYWNjb3JkaW5nIHRvIGRpbGF0aW9uLlxuICBcbiAgU28gZGlsYXRpb24gPSAwLjUgd291bGQgY2hhbmdlXG4gIFxuICBhIC0tLS0tLS0tLSBiXG4gIFxuICB0b1xuICBcbiAgYSAtLS0tIGJcbiAgXG4gIEBwYXJhbSBbbnVtYmVyXTogUHJldmlvdXMgdmFsdWVcbiAgQHBhcmFtIFtudW1iZXJdOiBDdXJyZW50IHZhbHVlXG4gIEBwYXJhbSBbbnVtYmVyXTogRGlsYXRlIHByb2dyZXNzIGJ5IHhcbiAgQHJldHVybiBbbnVtYmVyXTogUHJldmlvdXMgdmFsdWUgcGx1cyB0aGUgZGlsYXRlZCBkaWZmZXJlbmNlXG4qL1xuZXhwb3J0IGNvbnN0IGRpbGF0ZSA9IChhLCBiLCBkaWxhdGlvbikgPT4gYSArICgoYiAtIGEpICogZGlsYXRpb24pO1xuXG4vKlxuICBEaXN0YW5jZVxuICBcbiAgUmV0dXJucyB0aGUgZGlzdGFuY2UgYmV0d2VlbiB0d28gbiBkaW1lbnNpb25hbCBwb2ludHMuXG4gIFxuICBAcGFyYW0gW29iamVjdC9udW1iZXJdOiB4IGFuZCB5IG9yIGp1c3QgeCBvZiBwb2ludCBBXG4gIEBwYXJhbSBbb2JqZWN0L251bWJlcl06IChvcHRpb25hbCk6IHggYW5kIHkgb3IganVzdCB4IG9mIHBvaW50IEJcbiAgQHJldHVybiBbbnVtYmVyXTogVGhlIGRpc3RhbmNlIGJldHdlZW4gdGhlIHR3byBwb2ludHNcbiovXG5leHBvcnQgY29uc3QgZGlzdGFuY2UgPSAoYSwgYiA9IFpFUk9fUE9JTlQpID0+IHtcbiAgLy8gMUQgZGltZW5zaW9uc1xuICBpZiAoaXNOdW0oYSkpIHtcbiAgICByZXR1cm4gZGlzdGFuY2UxRChhLCBiKTtcblxuICAvLyBNdWx0aS1kaW1lbnNpb25hbFxuICB9IGVsc2Uge1xuICAgIGNvbnN0IHhEZWx0YSA9IGRpc3RhbmNlMUQoYS54LCBiLngpO1xuICAgIGNvbnN0IHlEZWx0YSA9IGRpc3RhbmNlMUQoYS55LCBiLnkpO1xuICAgIGNvbnN0IHpEZWx0YSA9IChpc051bShhLnopKSA/IGRpc3RhbmNlMUQoYS56LCBiLnopIDogMDtcblxuICAgIHJldHVybiBNYXRoLnNxcnQoKHhEZWx0YSAqKiAyKSArICh5RGVsdGEgKiogMikgKyAoekRlbHRhICoqIDIpKTtcbiAgfVxufTtcblxuLypcbiAgRWFzZSB2YWx1ZSB3aXRoaW4gcmFuZ2VkIHBhcmFtZXRlcnNcbiAgXG4gIEBwYXJhbSBbbnVtYmVyXTogUHJvZ3Jlc3MgYmV0d2VlbiAwIGFuZCAxXG4gIEBwYXJhbSBbbnVtYmVyXTogVmFsdWUgb2YgMCBwcm9ncmVzc1xuICBAcGFyYW0gW251bWJlcl06IFZhbHVlIG9mIDEgcHJvZ3Jlc3NcbiAgQHBhcmFtIFtzdHJpbmcgfHwgZnVuY3Rpb25dOiBOYW1lIG9mIHByZXNldCBlYXNpbmdcbiAgICB0byB1c2Ugb3IgZ2VuZXJhdGVkIGVhc2luZyBmdW5jdGlvblxuICBAcmV0dXJuIFtudW1iZXJdOiBWYWx1ZSBvZiBlYXNlZCBwcm9ncmVzcyBpbiByYW5nZVxuKi8gXG5leHBvcnQgY29uc3QgZWFzZSA9IChwcm9ncmVzcywgZnJvbSwgdG8sIGVhc2UpID0+IHtcbiAgY29uc3QgcHJvZ3Jlc3NMaW1pdGVkID0gcmVzdHJpY3QocHJvZ3Jlc3MsIDAsIDEpO1xuICBjb25zdCBlYXNlZFByb2dyZXNzID0gZWFzZShwcm9ncmVzc0xpbWl0ZWQpO1xuXG4gIHJldHVybiBnZXRWYWx1ZUZyb21Qcm9ncmVzcyhlYXNlZFByb2dyZXNzLCBmcm9tLCB0byk7XG59O1xuIFxuLypcbiAgSHlwb3RlbnVzZVxuICBcbiAgUmV0dXJucyB0aGUgaHlwb3RlbnVzZSwgc2lkZSBDLCBnaXZlbiB0aGUgbGVuZ3RocyBvZiBzaWRlcyBBIGFuZCBCLlxuICBcbiAgQHBhcmFtIFtudW1iZXJdOiBMZW5ndGggb2YgQVxuICBAcGFyYW0gW251bWJlcl06IExlbmd0aCBvZiBCXG4gIEByZXR1cm4gW251bWJlcl06IExlbmd0aCBvZiBDXG4qL1xuZXhwb3J0IGNvbnN0IGh5cG90ZW51c2UgPSAoYSwgYikgPT4gTWF0aC5zcXJ0KChhICogYSkgKyAoYiAqIGIpKTtcblxuLypcbiAgVmFsdWUgaW4gcmFuZ2UgZnJvbSBwcm9ncmVzc1xuICBcbiAgR2l2ZW4gYSBsb3dlciBsaW1pdCBhbmQgYW4gdXBwZXIgbGltaXQsIHdlIHJldHVybiB0aGUgdmFsdWUgd2l0aGluXG4gIHRoYXQgcmFuZ2UgYXMgZXhwcmVzc2VkIGJ5IHByb2dyZXNzIChhIG51bWJlciBmcm9tIDAtMSlcbiAgXG4gIEBwYXJhbSBbbnVtYmVyXTogVGhlIHByb2dyZXNzIGJldHdlZW4gbG93ZXIgYW5kIHVwcGVyIGxpbWl0cyBleHByZXNzZWQgMC0xXG4gIEBwYXJhbSBbbnVtYmVyXTogTG93ZXIgbGltaXQgb2YgcmFuZ2VcbiAgQHBhcmFtIFtudW1iZXJdOiBVcHBlciBsaW1pdCBvZiByYW5nZVxuICBAcmV0dXJuIFtudW1iZXJdOiBWYWx1ZSBhcyBjYWxjdWxhdGVkIGZyb20gcHJvZ3Jlc3Mgd2l0aGluIHJhbmdlIChub3QgbGltaXRlZCB3aXRoaW4gcmFuZ2UpXG4qL1xuZXhwb3J0IGNvbnN0IGdldFZhbHVlRnJvbVByb2dyZXNzID0gKHByb2dyZXNzLCBmcm9tLCB0bykgPT4gKC0gcHJvZ3Jlc3MgKiBmcm9tKSArIChwcm9ncmVzcyAqIHRvKSArIGZyb207XG5cbi8qXG4gIFByb2dyZXNzIHdpdGhpbiBnaXZlbiByYW5nZVxuICBcbiAgR2l2ZW4gYSBsb3dlciBsaW1pdCBhbmQgYW4gdXBwZXIgbGltaXQsIHdlIHJldHVybiB0aGUgcHJvZ3Jlc3NcbiAgKGV4cHJlc3NlZCBhcyBhIG51bWJlciAwLTEpIHJlcHJlc2VudGVkIGJ5IHRoZSBnaXZlbiB2YWx1ZSwgYW5kXG4gIGxpbWl0IHRoYXQgcHJvZ3Jlc3MgdG8gd2l0aGluIDAtMS5cbiAgXG4gIEBwYXJhbSBbbnVtYmVyXTogVmFsdWUgdG8gZmluZCBwcm9ncmVzcyB3aXRoaW4gZ2l2ZW4gcmFuZ2VcbiAgQHBhcmFtIFtudW1iZXJdOiBMb3dlciBsaW1pdCBcbiAgQHBhcmFtIFtudW1iZXJdOiBVcHBlciBsaW1pdFxuICBAcmV0dXJuIFtudW1iZXJdOiBQcm9ncmVzcyBvZiB2YWx1ZSB3aXRoaW4gcmFuZ2UgYXMgZXhwcmVzc2VkIDAtMVxuKi9cbmV4cG9ydCBjb25zdCBnZXRQcm9ncmVzc0Zyb21WYWx1ZSA9ICh2YWx1ZSwgZnJvbSwgdG8pID0+ICh2YWx1ZSAtIGZyb20pIC8gKHRvIC0gZnJvbSk7XG5cbi8qXG4gIE9mZnNldCBiZXR3ZWVuIHR3byBvYmplY3RzIG9mIG51bWJlcnNcblxuICBJZiBwcm9wZXJ0eSBpcyBmb3VuZCBpbiBiIG5vdCBwcmVzZW50IGluIGEsIGl0IHdpbGwgcmV0dXJuIGAwYCBmb3IgdGhhdCBwcm9wLlxuICBcbiAgQHBhcmFtIFtQb2ludF06IEZpcnN0IG9iamVjdFxuICBAcGFyYW0gW1BvaW50XTogU2Vjb25kIG9iamVjdFxuICBAcmV0dXJuIFtPZmZzZXRdOiBEaXN0YW5jZSBtZXRyaWNzIGJldHdlZW4gdHdvIHBvaW50c1xuKi9cbmV4cG9ydCBjb25zdCBvZmZzZXQgPSAoYSwgYikgPT4ge1xuICBjb25zdCBvZmZzZXQgPSB7fTtcblxuICBmb3IgKGxldCBrZXkgaW4gYikge1xuICAgIGlmIChiLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgIG9mZnNldFtrZXldID0gaGFzUHJvcGVydHkoYSwga2V5KSA/IGJba2V5XSAtIGFba2V5XSA6IDA7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG9mZnNldDtcbn07XG5cbi8qXG4gIFBvaW50IGZyb20gYW5nbGUgYW5kIGRpc3RhbmNlXG4gIFxuICBAcGFyYW0gW29iamVjdF06IDJEIHBvaW50IG9mIG9yaWdpblxuICBAcGFyYW0gW251bWJlcl06IEFuZ2xlIGZyb20gb3JpZ2luXG4gIEBwYXJhbSBbbnVtYmVyXTogRGlzdGFuY2UgZnJvbSBvcmlnaW5cbiAgQHJldHVybiBbb2JqZWN0XTogQ2FsY3VsYXRlZCAyRCBwb2ludFxuKi9cbmV4cG9ydCBjb25zdCBwb2ludEZyb21BbmdsZUFuZERpc3RhbmNlID0gKG9yaWdpbiwgYW5nbGUsIGRpc3RhbmNlKSA9PiB7XG4gIGFuZ2xlID0gZGVncmVlc1RvUmFkaWFucyhhbmdsZSk7XG5cbiAgcmV0dXJuIHtcbiAgICB4OiBkaXN0YW5jZSAqIE1hdGguY29zKGFuZ2xlKSArIG9yaWdpbi54LFxuICAgIHk6IGRpc3RhbmNlICogTWF0aC5zaW4oYW5nbGUpICsgb3JpZ2luLnlcbiAgfTtcbn07XG5cbi8qXG4gIENvbnZlcnQgcmFkaWFucyB0byBkZWdyZWVzXG4gIFxuICBAcGFyYW0gW251bWJlcl06IFZhbHVlIGluIHJhZGlhbnNcbiAgQHJldHVybiBbbnVtYmVyXTogVmFsdWUgaW4gZGVncmVlc1xuKi9cbmV4cG9ydCBjb25zdCByYWRpYW5zVG9EZWdyZWVzID0gKHJhZGlhbnMpID0+IHJhZGlhbnMgKiAxODAgLyBNYXRoLlBJO1xuXG4vKlxuICBSZXR1cm4gcmFuZG9tIG51bWJlciBiZXR3ZWVuIHJhbmdlXG4gIFxuICBAcGFyYW0gW251bWJlcl0gKG9wdGlvbmFsKTogT3V0cHV0IG1pbmltdW1cbiAgQHBhcmFtIFtudW1iZXJdIChvcHRpb25hbCk6IE91dHB1dCBtYXhpbXVtXG4gIEByZXR1cm4gW251bWJlcl06IFJhbmRvbSBudW1iZXIgd2l0aGluIHJhbmdlLCBvciAwIGFuZCAxIGlmIG5vbmUgcHJvdmlkZWRcbiovXG5leHBvcnQgY29uc3QgcmFuZG9tID0gKG1pbiA9IDAsIG1heCA9IDEpID0+IE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluKSArIG1pbjtcblxuLypcbiAgQ2FsY3VsYXRlIHJlbGF0aXZlIHZhbHVlXG4gIFxuICBUYWtlcyB0aGUgb3BlcmF0b3IgYW5kIHZhbHVlIGZyb20gYSBzdHJpbmcsIGllIFwiKz01XCIsIGFuZCBhcHBsaWVzXG4gIHRvIHRoZSBjdXJyZW50IHZhbHVlIHRvIHJlc29sdmUgYSBuZXcgdGFyZ2V0LlxuICBcbiAgQHBhcmFtIFtudW1iZXJdOiBDdXJyZW50IHZhbHVlXG4gIEBwYXJhbSBbc3RyaW5nXTogUmVsYXRpdmUgdmFsdWVcbiAgQHJldHVybiBbbnVtYmVyXTogTmV3IHZhbHVlXG4qL1xuZXhwb3J0IGNvbnN0IHJlbGF0aXZlVmFsdWUgPSAoY3VycmVudCwgcmVsYXRpdmUpID0+IHtcbiAgbGV0IG5ld1ZhbHVlID0gY3VycmVudDtcbiAgY29uc3QgZXF1YXRpb24gPSByZWxhdGl2ZS5zcGxpdCgnPScpO1xuICBjb25zdCBvcGVyYXRvciA9IGVxdWF0aW9uWzBdO1xuICBsZXQgeyB1bml0LCB2YWx1ZSB9ID0gZmluZFZhbHVlQW5kVW5pdChlcXVhdGlvblsxXSk7XG5cbiAgdmFsdWUgPSBwYXJzZUZsb2F0KHZhbHVlKTtcblxuICBzd2l0Y2ggKG9wZXJhdG9yKSB7XG4gIGNhc2UgJysnOlxuICAgIG5ld1ZhbHVlICs9IHZhbHVlO1xuICAgIGJyZWFrO1xuICBjYXNlICctJzpcbiAgICBuZXdWYWx1ZSAtPSB2YWx1ZTtcbiAgICBicmVhaztcbiAgY2FzZSAnKic6XG4gICAgbmV3VmFsdWUgKj0gdmFsdWU7XG4gICAgYnJlYWs7XG4gIGNhc2UgJy8nOlxuICAgIG5ld1ZhbHVlIC89IHZhbHVlO1xuICAgIGJyZWFrO1xuICB9XG4gIFxuICBpZiAodW5pdCkge1xuICAgIG5ld1ZhbHVlICs9IHVuaXQ7XG4gIH1cblxuICByZXR1cm4gbmV3VmFsdWU7XG59O1xuXG4vKlxuICBSZXN0cmljdCB2YWx1ZSB0byByYW5nZVxuICBcbiAgUmV0dXJuIHZhbHVlIHdpdGhpbiB0aGUgcmFuZ2Ugb2YgbG93ZXJMaW1pdCBhbmQgdXBwZXJMaW1pdFxuICBcbiAgQHBhcmFtIFtudW1iZXJdOiBWYWx1ZSB0byBrZWVwIHdpdGhpbiByYW5nZVxuICBAcGFyYW0gW251bWJlcl06IExvd2VyIGxpbWl0IG9mIHJhbmdlXG4gIEBwYXJhbSBbbnVtYmVyXTogVXBwZXIgbGltaXQgb2YgcmFuZ2VcbiAgQHJldHVybiBbbnVtYmVyXTogVmFsdWUgYXMgbGltaXRlZCB3aXRoaW4gZ2l2ZW4gcmFuZ2VcbiovXG5leHBvcnQgY29uc3QgcmVzdHJpY3QgPSAodmFsdWUsIG1pbiwgbWF4KSA9PiBNYXRoLm1heChNYXRoLm1pbih2YWx1ZSwgbWF4KSwgbWluKTtcblxuLypcbiAgRnJhbWVyYXRlLWluZGVwZW5kZW50IHNtb290aGluZ1xuXG4gIEBwYXJhbSBbbnVtYmVyXTogTmV3IHZhbHVlXG4gIEBwYXJhbSBbbnVtYmVyXTogT2xkIHZhbHVlXG4gIEBwYXJhbSBbbnVtYmVyXTogRnJhbWUgZHVyYXRpb25cbiAgQHBhcmFtIFtudW1iZXJdIChvcHRpb25hbCk6IFNtb290aGluZyAoMCBpcyBub25lKVxuKi9cbmV4cG9ydCBjb25zdCBzbW9vdGggPSAobmV3VmFsdWUsIG9sZFZhbHVlLCBkdXJhdGlvbiwgc21vb3RoaW5nID0gMCkgPT4gdG9EZWNpbWFsKG9sZFZhbHVlICsgKGR1cmF0aW9uICogKG5ld1ZhbHVlIC0gb2xkVmFsdWUpIC8gTWF0aC5tYXgoc21vb3RoaW5nLCBkdXJhdGlvbikpKTtcblxuLypcbiAgQ29udmVydCB4IHBlciBzZWNvbmQgdG8gcGVyIGZyYW1lIHZlbG9jaXR5IGJhc2VkIG9uIGZwc1xuICBcbiAgQHBhcmFtIFtudW1iZXJdOiBVbml0IHBlciBzZWNvbmRcbiAgQHBhcmFtIFtudW1iZXJdOiBGcmFtZSBkdXJhdGlvbiBpbiBtc1xuKi9cbmV4cG9ydCBjb25zdCBzcGVlZFBlckZyYW1lID0gKHhwcywgZnJhbWVEdXJhdGlvbikgPT4gKGlzTnVtKHhwcykpID8geHBzIC8gKDEwMDAgLyBmcmFtZUR1cmF0aW9uKSA6IDA7XG5cbi8qXG4gIENvbnZlcnQgdmVsb2NpdHkgaW50byB2ZWxpY2l0eSBwZXIgc2Vjb25kXG4gIFxuICBAcGFyYW0gW251bWJlcl06IFVuaXQgcGVyIGZyYW1lXG4gIEBwYXJhbSBbbnVtYmVyXTogRnJhbWUgZHVyYXRpb24gaW4gbXNcbiovXG5leHBvcnQgY29uc3Qgc3BlZWRQZXJTZWNvbmQgPSAodmVsb2NpdHksIGZyYW1lRHVyYXRpb24pID0+IHZlbG9jaXR5ICogKDEwMDAgLyBmcmFtZUR1cmF0aW9uKTtcblxuLypcbiAgQ3JlYXRlIHN0ZXBwZWQgdmVyc2lvbiBvZiAwLTEgcHJvZ3Jlc3NcbiAgXG4gIEBwYXJhbSBbbnVtYmVyXTogQ3VycmVudCB2YWx1ZVxuICBAcGFyYW0gW2ludF06IE51bWJlciBvZiBzdGVwc1xuICBAcmV0dXJuIFtudW1iZXJdOiBTdGVwcGVkIHZhbHVlXG4qL1xuZXhwb3J0IGNvbnN0IHN0ZXBQcm9ncmVzcyA9IChwcm9ncmVzcywgc3RlcHMpID0+IHtcbiAgY29uc3Qgc2VnbWVudCA9IDEgLyAoc3RlcHMgLSAxKTtcbiAgY29uc3QgdGFyZ2V0ID0gMSAtICgxIC8gc3RlcHMpO1xuICBjb25zdCBwcm9ncmVzc09mVGFyZ2V0ID0gTWF0aC5taW4ocHJvZ3Jlc3MgLyB0YXJnZXQsIDEpO1xuXG4gIHJldHVybiBNYXRoLmZsb29yKHByb2dyZXNzT2ZUYXJnZXQgLyBzZWdtZW50KSAqIHNlZ21lbnQ7XG59OyJdfQ==

/***/ },
/* 21 */
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
	  Split a value into a value/unit object
	  
	    "200px" -> { value: 200, unit: "px" }
	    
	  @param [string]: Value to split
	  @return [object]: Object with value and unit props
	*/
	var findValueAndUnit = exports.findValueAndUnit = function (value) {
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
	//# sourceMappingURL=data:application/json;base64,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LFFBQTFCLENBQWpDLEdBQXVFLFFBQXZFLENBRHVCO0FBRXJDLFNBQU8sS0FBQyxDQUFNLE1BQU4sR0FBZ0IsR0FBRyxLQUFILENBQVMsSUFBVCxDQUFjLEtBQWQsQ0FBakIsR0FBd0MsR0FBRyxJQUFILENBQVEsS0FBUixDQUF4QyxDQUY4QjtDQUFkOzs7Ozs7Ozs7O0FBYWxCLElBQU0sb0RBQXNCLFVBQUMsS0FBRDtTQUFXLFNBQVMsS0FBVCxJQUFrQixNQUFNLEtBQU4sQ0FBWSxNQUFaLENBQWxCLEdBQXdDLENBQUMsS0FBRCxDQUF4QztDQUFYOzs7Ozs7Ozs7O0FBVTVCLElBQU0sb0RBQXNCLFVBQUMsS0FBRDtTQUFXLFNBQVMsS0FBVCxJQUFrQixNQUFNLEtBQU4sQ0FBWSxHQUFaLENBQWxCLEdBQXFDLENBQUMsS0FBRCxDQUFyQztDQUFYOzs7Ozs7Ozs7QUFTNUIsSUFBTSxnQ0FBWSxVQUFDLEdBQUQsRUFBd0I7TUFBbEIsa0VBQVksaUJBQU07O0FBQy9DLHVCQUFZLElBQU0sVUFBbEIsQ0FEK0M7QUFFL0MsU0FBTyxLQUFLLEtBQUwsQ0FBVyxNQUFNLFNBQU4sQ0FBWCxHQUE4QixTQUE5QixDQUZ3QztDQUF4QiIsImZpbGUiOiJ1dGlscy5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvTWF0dC9TaXRlcy9wb3Btb3Rpb24iLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBDQU1FTF9DQVNFX1BBVFRFUk4gPSAvKFthLXpdKShbQS1aXSkvZztcbmNvbnN0IFJFUExBQ0VfVEVNUExBVEUgPSAnJDEtJDInO1xuY29uc3QgSEFTX1BFUkZPUk1BTkNFX05PVyA9ICh0eXBlb2YgcGVyZm9ybWFuY2UgIT09ICd1bmRlZmluZWQnICYmIHBlcmZvcm1hbmNlLm5vdyk7XG5cbi8qXG4gIEdldCB2YXIgdHlwZSBhcyBzdHJpbmdcbiAgXG4gIEBwYXJhbTogVmFyaWFibGUgdG8gdGVzdFxuICBAcmV0dXJuIFtzdHJpbmddOiBSZXR1cm5zLCBmb3IgaW5zdGFuY2UgJ09iamVjdCcgaWYgW29iamVjdCBPYmplY3RdXG4qL1xuY29uc3QgdmFyVHlwZSA9IHZhcmlhYmxlID0+IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh2YXJpYWJsZSkuc2xpY2UoOCwgLTEpO1xuXG4vKlxuICBDb252ZXJ0IGNhbWVsQ2FzZSB0byBkYXNoLWNhc2VcblxuICBAcGFyYW0gW3N0cmluZ11cbiAgQHJldHVybiBbc3RyaW5nXVxuKi9cbmV4cG9ydCBjb25zdCBjYW1lbFRvRGFzaCA9IChzdHJpbmcpID0+IHN0cmluZy5yZXBsYWNlKENBTUVMX0NBU0VfUEFUVEVSTiwgUkVQTEFDRV9URU1QTEFURSkudG9Mb3dlckNhc2UoKTtcblxuZXhwb3J0IGNvbnN0IGNyZWF0ZURlbGltaXRlZCA9ICh2YWx1ZXMsIHRlcm1zLCBkZWxpbWl0ZXIsIGNob3ApID0+IHtcbiAgY29uc3QgbnVtVGVybXMgPSB0ZXJtcy5sZW5ndGg7XG4gIGxldCBjb21iaW5lZCA9ICcnO1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbnVtVGVybXM7IGkrKykge1xuICAgIGNvbnN0IHRlcm0gPSB0ZXJtc1tpXTtcbiAgICBpZiAodmFsdWVzLmhhc093blByb3BlcnR5KHRlcm0pKSB7XG4gICAgICBjb21iaW5lZCArPSB2YWx1ZXNbdGVybV0gKyBkZWxpbWl0ZXI7XG4gICAgfVxuICB9XG5cbiAgaWYgKGNob3ApIHtcbiAgICBjb21iaW5lZCA9IGNvbWJpbmVkLnNsaWNlKDAsIC1jaG9wKTtcbiAgfVxuXG4gIHJldHVybiBjb21iaW5lZDtcbn07XG5cbi8qXG4gIENyZWF0ZSBhIGZ1bmN0aW9uIHN0cmluZ1xuXG4gICcyMHB4JywgJ3RyYW5zbGF0ZScgLT4gJ3RyYW5zbGF0ZSgyMHB4KSdcblxuICBAcGFyYW0gW3N0cmluZ11cbiAgQHBhcmFtIFtzdHJpbmddXG4gIEByZXR1cm4gW3N0cmluZ11cbiovXG5leHBvcnQgY29uc3QgY3JlYXRlRnVuY3Rpb25TdHJpbmcgPSAodmFsdWUsIHByZWZpeCkgPT4gYCR7cHJlZml4fSgke3ZhbHVlfSlgO1xuXG4vKlxuICBHZW5lcmF0ZSBjdXJyZW50IHRpbWVzdGFtcFxuICBcbiAgQHJldHVybiBbdGltZXN0YW1wXTogQ3VycmVudCBVTklYIHRpbWVzdGFtcFxuKi9cbmV4cG9ydCBjb25zdCBjdXJyZW50VGltZSA9IEhBU19QRVJGT1JNQU5DRV9OT1cgPyAoKSA9PiBwZXJmb3JtYW5jZS5ub3coKSA6ICgpID0+IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuXG4vKlxuICBTcGxpdCBhIHZhbHVlIGludG8gYSB2YWx1ZS91bml0IG9iamVjdFxuICBcbiAgICBcIjIwMHB4XCIgLT4geyB2YWx1ZTogMjAwLCB1bml0OiBcInB4XCIgfVxuICAgIFxuICBAcGFyYW0gW3N0cmluZ106IFZhbHVlIHRvIHNwbGl0XG4gIEByZXR1cm4gW29iamVjdF06IE9iamVjdCB3aXRoIHZhbHVlIGFuZCB1bml0IHByb3BzXG4qL1xuZXhwb3J0IGNvbnN0IGZpbmRWYWx1ZUFuZFVuaXQgPSAodmFsdWUpID0+IHtcbiAgaWYgKHZhbHVlLm1hdGNoKSB7XG4gICAgY29uc3Qgc3BsaXRWYWx1ZSA9IHZhbHVlLm1hdGNoKC8oLT9cXGQqXFwuP1xcZCopKC4qKS8pO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIHZhbHVlOiBwYXJzZUZsb2F0KHNwbGl0VmFsdWVbMV0pLFxuICAgICAgdW5pdDogIHNwbGl0VmFsdWVbMl1cbiAgICB9O1xuICB9IGVsc2Uge1xuICAgIHJldHVybiB7IHZhbHVlIH07XG4gIH1cbn07XG5cbi8qXG4gIFNwbGl0IGNvbG9yIHN0cmluZyBpbnRvIG1hcCBvZiBjb2xvciBwcm9wZXJ0aWVzXG5cbiAgXCJyZ2JhKDI1NSwgMjU1LCAyNTUsIDApXCIsIFtcIlJlZFwiLCAnR3JlZW5cIiwgXCJCbHVlXCIsIFwiQWxwaGFcIl1cblxuICB7IFJlZDogMjU1Li4uIH1cbiovXG5leHBvcnQgY29uc3QgZ2V0Q29sb3JWYWx1ZXMgPSAodmFsdWUsIGNvbG9yVGVybXMpID0+IHtcbiAgY29uc3QgbnVtQ29sb3JUZXJtcyA9IGNvbG9yVGVybXMubGVuZ3RoO1xuICBjb25zdCBjb2xvclZhbHVlcyA9IHt9O1xuICBjb25zdCBjb2xvcnMgPSBzcGxpdENvbW1hRGVsaW1pdGVkKGdldFZhbHVlRnJvbUZ1bmN0aW9uU3RyaW5nKHZhbHVlKSk7XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBudW1Db2xvclRlcm1zOyBpKyspIHtcbiAgICBjb2xvclZhbHVlc1tjb2xvclRlcm1zW2ldXSA9IChjb2xvcnNbaV0gIT09IHVuZGVmaW5lZCkgPyBjb2xvcnNbaV0gOiAxO1xuICB9XG5cbiAgcmV0dXJuIGNvbG9yVmFsdWVzO1xufTtcblxuLypcbiAgR2V0IHZhbHVlIGZyb20gZnVuY3Rpb24gc3RyaW5nXG5cbiAgXCJ0cmFuc2xhdGVYKDIwcHgpXCIgLT4gXCIyMHB4XCJcbiovXG5leHBvcnQgY29uc3QgZ2V0VmFsdWVGcm9tRnVuY3Rpb25TdHJpbmcgPSAodmFsdWUpID0+IHZhbHVlLnN1YnN0cmluZyh2YWx1ZS5pbmRleE9mKCcoJykgKyAxLCB2YWx1ZS5sYXN0SW5kZXhPZignKScpKTtcblxuLypcbiAgQ2hlY2sgaWYgdHdvIG9iamVjdHMgaGF2ZSBjaGFuZ2VkIGZyb20gZWFjaCBvdGhlclxuICBcbiAgQHBhcmFtIFtvYmplY3RdOiBJbnB1dCBBXG4gIEBwYXJhbSBbb2JqZWN0XTogSW5wdXQgQlxuICBAcmV0dXJuIFtib29sZWFuXTogVHJ1ZSBpZiBkaWZmZXJlbnRcbiovXG5leHBvcnQgY29uc3QgaGFzQ2hhbmdlZCA9IChhLCBiKSA9PiB7XG4gIGxldCBjaGFuZ2VkID0gZmFsc2U7XG5cbiAgZm9yIChsZXQga2V5IGluIGEpIHtcbiAgICBpZiAoYS5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICBpZiAoaGFzUHJvcGVydHkoYiwga2V5KSkge1xuICAgICAgICBpZiAoYVtrZXldICE9PSBiW2tleV0pIHtcbiAgICAgICAgICBjaGFuZ2VkID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY2hhbmdlZCA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGNoYW5nZWQ7XG59O1xuXG4vKlxuICBDaGVjayBpZiBvYmplY3QgaGFzIHByb3BlcnR5IGFuZCBpdCBpc24ndCB1bmRlZmluZWRcblxuICBAcGFyYW0gW29iamVjdF1cbiAgQHBhcmFtIFtzdHJpbmddXG4gIEByZXR1cm4gW2Jvb2xlYW5dXG4qL1xuZXhwb3J0IGNvbnN0IGhhc1Byb3BlcnR5ID0gKG9iamVjdCwgcHJvcGVydHlOYW1lKSA9PiBvYmplY3QuaGFzT3duUHJvcGVydHkocHJvcGVydHlOYW1lKSAmJiBvYmplY3RbcHJvcGVydHlOYW1lXSAhPT0gdW5kZWZpbmVkO1xuXG4vKlxuICBJcyB1dGlscyB2YXIgYW4gYXJyYXkgPyBcbiAgXG4gIEBwYXJhbTogVmFyaWFibGUgdG8gdGVzdFxuICBAcmV0dXJuIFtib29sZWFuXTogUmV0dXJucyB0cnVlIGlmIHV0aWxzLnZhclR5cGUgPT09ICdBcnJheSdcbiovXG5leHBvcnQgY29uc3QgaXNBcnJheSA9IChhcnIpID0+IHZhclR5cGUoYXJyKSA9PT0gJ0FycmF5JztcblxuLypcbiAgSXMgdXRpbHMgdmFyIGEgZnVuY3Rpb24gPyBcbiAgXG4gIEBwYXJhbTogVmFyaWFibGUgdG8gdGVzdFxuICBAcmV0dXJuIFtib29sZWFuXTogUmV0dXJucyB0cnVlIGlmIHV0aWxzLnZhclR5cGUgPT09ICdGdW5jdGlvbidcbiovXG5leHBvcnQgY29uc3QgaXNGdW5jID0gKG9iaikgPT4gdmFyVHlwZShvYmopID09PSAnRnVuY3Rpb24nO1xuXG4vKlxuICBJcyB1dGlscyB2YXIgYSBudW1iZXI/XG4gIFxuICBAcGFyYW06IFZhcmlhYmxlIHRvIHRlc3RcbiAgQHJldHVybiBbYm9vbGVhbl06IFJldHVybnMgdHJ1ZSBpZiB0eXBlb2YgPT09ICdudW1iZXInXG4qL1xuZXhwb3J0IGNvbnN0IGlzTnVtID0gKG51bSkgPT4gdHlwZW9mIG51bSA9PT0gJ251bWJlcic7XG5cbi8qXG4gIElzIHV0aWxzIHZhciBhbiBvYmplY3Q/XG4gIFxuICBAcGFyYW06IFZhcmlhYmxlIHRvIHRlc3RcbiAgQHJldHVybiBbYm9vbGVhbl06IFJldHVybnMgdHJ1ZSBpZiB0eXBlb2YgPT09ICdvYmplY3QnXG4qL1xuZXhwb3J0IGNvbnN0IGlzT2JqID0gKG9iaikgPT4gdHlwZW9mIG9iaiA9PT0gJ29iamVjdCc7XG5cbi8qXG4gIElzIHV0aWxzIGEgcmVsYXRpdmUgdmFsdWUgYXNzaWdubWVudD9cbiAgXG4gIEBwYXJhbSBbc3RyaW5nXTogVmFyaWFibGUgdG8gdGVzdFxuICBAcmV0dXJuIFtib29sZWFuXTogSWYgdXRpbHMgbG9va3MgbGlrZSBhIHJlbGF0aXZlIHZhbHVlIGFzc2lnbm1lbnRcbiovXG5leHBvcnQgY29uc3QgaXNSZWxhdGl2ZVZhbHVlID0gKHZhbHVlKSA9PiAodmFsdWUgJiYgdmFsdWUuaW5kZXhPZiAmJiB2YWx1ZS5pbmRleE9mKCc9JykgPiAwKSA/IHRydWUgOiBmYWxzZTtcblxuLypcbiAgSXMgdXRpbHMgdmFyIGEgc3RyaW5nID8gXG4gIFxuICBAcGFyYW06IFZhcmlhYmxlIHRvIHRlc3RcbiAgQHJldHVybiBbYm9vbGVhbl06IFJldHVybnMgdHJ1ZSBpZiB0eXBlb2Ygc3RyID09PSAnc3RyaW5nJ1xuKi9cbmV4cG9ydCBjb25zdCBpc1N0cmluZyA9IChzdHIpID0+IHR5cGVvZiBzdHIgPT09ICdzdHJpbmcnO1xuXG4vKlxuICBAcGFyYW0gW3N0cmluZyB8fCBOb2RlTGlzdF06XG4gICAgSWYgc3RyaW5nLCB0cmVhdGVkIGFzIHNlbGVjdG9yLlxuICAgIElmIG5vdCwgdHJlYXRlZCBhcyBwcmVleGlzdGluZyBOb2RlTGlzdFxuXG4gIEByZXR1cm4gW0FycmF5XVxuKi9cbmV4cG9ydCBjb25zdCBzZWxlY3REb20gPSAoc2VsZWN0b3IpID0+IHtcbiAgY29uc3Qgbm9kZXMgPSAodHlwZW9mIHNlbGVjdG9yID09PSAnc3RyaW5nJykgPyBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9yKSA6IHNlbGVjdG9yO1xuICByZXR1cm4gKG5vZGVzLmxlbmd0aCkgPyBbXS5zbGljZS5jYWxsKG5vZGVzKSA6IFtdLnB1c2gobm9kZXMpO1xufTtcblxuLypcbiAgU3BsaXQgY29tbWEtZGVsaW1pdGVkIHN0cmluZ1xuXG4gIFwiZm9vLGJhclwiIC0+IFtcImZvb1wiLCBcImJhclwiXVxuXG4gIEBwYXJhbSBbc3RyaW5nXVxuICBAcmV0dXJuIFthcnJheV1cbiovXG5leHBvcnQgY29uc3Qgc3BsaXRDb21tYURlbGltaXRlZCA9ICh2YWx1ZSkgPT4gaXNTdHJpbmcodmFsdWUpID8gdmFsdWUuc3BsaXQoLyxcXHMqLykgOiBbdmFsdWVdO1xuXG4vKlxuICBTcGxpdCBzcGFjZS1kZWxpbWl0ZWQgc3RyaW5nXG5cbiAgXCJmb28gYmFyXCIgLT4gW1wiZm9vXCIsIFwiYmFyXCJdXG5cbiAgQHBhcmFtIFtzdHJpbmddXG4gIEByZXR1cm4gW2FycmF5XVxuKi9cbmV4cG9ydCBjb25zdCBzcGxpdFNwYWNlRGVsaW1pdGVkID0gKHZhbHVlKSA9PiBpc1N0cmluZyh2YWx1ZSkgPyB2YWx1ZS5zcGxpdCgnICcpIDogW3ZhbHVlXTtcblxuLypcbiAgQ29udmVydCBudW1iZXIgdG8geCBkZWNpbWFsIHBsYWNlc1xuXG4gIEBwYXJhbSBbbnVtYmVyXVxuICBAcGFyYW0gW251bWJlcl1cbiAgQHJldHVybiBbbnVtYmVyXVxuKi9cbmV4cG9ydCBjb25zdCB0b0RlY2ltYWwgPSAobnVtLCBwcmVjaXNpb24gPSAyKSA9PiB7XG4gIHByZWNpc2lvbiA9IDEwICoqIHByZWNpc2lvbjtcbiAgcmV0dXJuIE1hdGgucm91bmQobnVtICogcHJlY2lzaW9uKSAvIHByZWNpc2lvbjtcbn07XG4iXX0=

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _defaultProps = __webpack_require__(48);
	
	exports.default = {
	  defaultProps: _defaultProps.opacity
	};
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy92YWx1ZS10eXBlcy9hbHBoYS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUE7O2tCQUVlO0FBQ2IscUNBRGEiLCJmaWxlIjoiYWxwaGEuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL01hdHQvU2l0ZXMvcG9wbW90aW9uIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgb3BhY2l0eSB9IGZyb20gJy4vc2V0dGluZ3MvZGVmYXVsdC1wcm9wcyc7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgZGVmYXVsdFByb3BzOiBvcGFjaXR5XG59OyJdfQ==

/***/ },
/* 23 */
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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy92YWx1ZS10eXBlcy9hbmdsZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUE7Ozs7OztrQkFFZTtBQUNiLGdCQUFjO0FBQ1osVUFBTSxLQUFOO0FBQ0Esd0JBRlk7R0FBZCIsImZpbGUiOiJhbmdsZS5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvTWF0dC9TaXRlcy9wb3Btb3Rpb24iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdW5pdFR5cGUgZnJvbSAnLi91bml0JztcblxuZXhwb3J0IGRlZmF1bHQge1xuICBkZWZhdWx0UHJvcHM6IHtcbiAgICB1bml0OiAnZGVnJyxcbiAgICB0eXBlOiB1bml0VHlwZVxuICB9XG59OyJdfQ==

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _rgb = __webpack_require__(29);
	
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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy92YWx1ZS10eXBlcy9jb2xvci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7Ozs7OztBQUVBLElBQU0sYUFBYSw2Q0FBYjtBQUNOLElBQU0sZ0JBQWdCLFdBQVcsTUFBWDs7a0JBRVA7QUFDYiw2QkFBbUIsY0FBSSxZQUFKLEVBQXFCLGNBQUksWUFBSixDQUF4Qzs7QUFFQSxRQUFNLFVBQUMsS0FBRDtXQUFXLGNBQUksSUFBSixDQUFTLEtBQVQsS0FBbUIsY0FBSSxJQUFKLENBQVMsS0FBVCxDQUFuQixJQUFzQyxjQUFJLElBQUosQ0FBUyxLQUFULENBQXRDO0dBQVg7O0FBRU4sU0FBTyxVQUFDLEtBQUQsRUFBVztBQUNoQixTQUFLLElBQUksSUFBSSxDQUFKLEVBQU8sSUFBSSxhQUFKLEVBQW1CLEdBQW5DLEVBQXdDO0FBQ3RDLFVBQUksV0FBVyxDQUFYLEVBQWMsSUFBZCxDQUFtQixLQUFuQixDQUFKLEVBQStCO0FBQzdCLGVBQU8sV0FBVyxDQUFYLEVBQWMsS0FBZCxDQUFvQixLQUFwQixDQUFQLENBRDZCO09BQS9CO0tBREY7R0FESzs7QUFRUCxXQUFTLFVBQUMsTUFBRDtXQUFZLE1BQUMsQ0FBTyxHQUFQLEtBQWUsU0FBZixHQUE0QixjQUFJLE9BQUosQ0FBWSxNQUFaLENBQTdCLEdBQW1ELGNBQUksT0FBSixDQUFZLE1BQVosQ0FBbkQ7R0FBWiIsImZpbGUiOiJjb2xvci5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvTWF0dC9TaXRlcy9wb3Btb3Rpb24iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgcmdiIGZyb20gJy4vcmdiJztcbmltcG9ydCBoc2wgZnJvbSAnLi9oc2wnO1xuaW1wb3J0IGhleCBmcm9tICcuL2hleCc7XG5cbmNvbnN0IGNvbG9yVHlwZXMgPSBbcmdiLCBoc2wsIGhleF07XG5jb25zdCBudW1Db2xvclR5cGVzID0gY29sb3JUeXBlcy5sZW5ndGg7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgZGVmYXVsdFByb3BzOiB7IC4uLnJnYi5kZWZhdWx0UHJvcHMsIC4uLmhzbC5kZWZhdWx0UHJvcHMgfSxcblxuICB0ZXN0OiAodmFsdWUpID0+IHJnYi50ZXN0KHZhbHVlKSB8fCBoZXgudGVzdCh2YWx1ZSkgfHwgaHNsLnRlc3QodmFsdWUpLFxuXG4gIHNwbGl0OiAodmFsdWUpID0+IHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IG51bUNvbG9yVHlwZXM7IGkrKykge1xuICAgICAgaWYgKGNvbG9yVHlwZXNbaV0udGVzdCh2YWx1ZSkpIHtcbiAgICAgICAgcmV0dXJuIGNvbG9yVHlwZXNbaV0uc3BsaXQodmFsdWUpO1xuICAgICAgfVxuICAgIH1cbiAgfSxcblxuICBjb21iaW5lOiAodmFsdWVzKSA9PiAodmFsdWVzLlJlZCAhPT0gdW5kZWZpbmVkKSA/IHJnYi5jb21iaW5lKHZhbHVlcykgOiBoc2wuY29tYmluZSh2YWx1ZXMpXG59O1xuIl19

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _utils = __webpack_require__(21);
	
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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy92YWx1ZS10eXBlcy9jb21wbGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQTs7QUFFQSxJQUFNLGNBQWMsa0JBQWQ7QUFDTixJQUFNLGdCQUFnQixVQUFDLEtBQUQ7U0FBVyxPQUFPLEtBQVAsR0FBZSxHQUFmO0NBQVg7O2tCQUVQOztBQUViLFFBQU0sVUFBQyxLQUFELEVBQVc7QUFDZixRQUFNLFVBQVUsTUFBTSxLQUFOLENBQVksV0FBWixDQUFWLENBRFM7QUFFZixXQUFRLG9CQUFRLE9BQVIsS0FBb0IsUUFBUSxNQUFSLEdBQWlCLENBQWpCLENBRmI7R0FBWDs7QUFLTixZQUFVLFVBQUMsS0FBRCxFQUFXO0FBQ25CLFFBQUksVUFBVSxDQUFWLENBRGU7QUFFbkIsV0FBTyxNQUFNLE9BQU4sQ0FBYyxXQUFkLEVBQTJCO2FBQU0sY0FBYyxTQUFkO0tBQU4sQ0FBbEMsQ0FGbUI7R0FBWDs7QUFLVixTQUFPLFVBQUMsS0FBRCxFQUFXO0FBQ2hCLFFBQU0sYUFBYSxFQUFiLENBRFU7O0FBR2hCLFVBQU0sS0FBTixDQUFZLFdBQVosRUFBeUIsT0FBekIsQ0FBaUMsVUFBQyxLQUFELEVBQVEsQ0FBUjthQUFjLFdBQVcsQ0FBWCxJQUFnQixLQUFoQjtLQUFkLENBQWpDLENBSGdCOztBQUtoQixXQUFPLFVBQVAsQ0FMZ0I7R0FBWDs7QUFRUCxXQUFTLFVBQUMsTUFBRCxFQUFTLFFBQVQsRUFBc0I7QUFDN0IsU0FBSyxJQUFJLEdBQUosSUFBVyxNQUFoQixFQUF3QjtBQUN0QixVQUFJLE9BQU8sY0FBUCxDQUFzQixHQUF0QixDQUFKLEVBQWdDO0FBQzlCLG1CQUFXLFNBQVMsT0FBVCxDQUFpQixjQUFjLEdBQWQsQ0FBakIsRUFBcUMsT0FBTyxHQUFQLENBQXJDLENBQVgsQ0FEOEI7T0FBaEM7S0FERjs7QUFNQSxXQUFPLFFBQVAsQ0FQNkI7R0FBdEIiLCJmaWxlIjoiY29tcGxleC5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvTWF0dC9TaXRlcy9wb3Btb3Rpb24iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBpc0FycmF5IH0gZnJvbSAnLi4vaW5jL3V0aWxzJztcblxuY29uc3QgRkxPQVRfUkVHRVggPSAvKC0pPyhcXGRbXFxkXFwuXSopL2c7XG5jb25zdCBnZW5lcmF0ZVRva2VuID0gKHRva2VuKSA9PiAnJHsnICsgdG9rZW4gKyAnfSc7XG5cbmV4cG9ydCBkZWZhdWx0IHtcblxuICB0ZXN0OiAodmFsdWUpID0+IHtcbiAgICBjb25zdCBtYXRjaGVzID0gdmFsdWUubWF0Y2goRkxPQVRfUkVHRVgpO1xuICAgIHJldHVybiAoaXNBcnJheShtYXRjaGVzKSAmJiBtYXRjaGVzLmxlbmd0aCA+IDEpO1xuICB9LFxuXG4gIHRlbXBsYXRlOiAodmFsdWUpID0+IHtcbiAgICBsZXQgY291bnRlciA9IDA7XG4gICAgcmV0dXJuIHZhbHVlLnJlcGxhY2UoRkxPQVRfUkVHRVgsICgpID0+IGdlbmVyYXRlVG9rZW4oY291bnRlcisrKSk7XG4gIH0sXG5cbiAgc3BsaXQ6ICh2YWx1ZSkgPT4ge1xuICAgIGNvbnN0IHNwbGl0VmFsdWUgPSB7fTtcblxuICAgIHZhbHVlLm1hdGNoKEZMT0FUX1JFR0VYKS5mb3JFYWNoKCh2YWx1ZSwgaSkgPT4gc3BsaXRWYWx1ZVtpXSA9IHZhbHVlKTtcblxuICAgIHJldHVybiBzcGxpdFZhbHVlO1xuICB9LFxuXG4gIGNvbWJpbmU6ICh2YWx1ZXMsIHRlbXBsYXRlKSA9PiB7XG4gICAgZm9yIChsZXQga2V5IGluIHZhbHVlcykge1xuICAgICAgaWYgKHZhbHVlcy5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgIHRlbXBsYXRlID0gdGVtcGxhdGUucmVwbGFjZShnZW5lcmF0ZVRva2VuKGtleSksIHZhbHVlc1trZXldKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdGVtcGxhdGU7XG4gIH1cblxufTsiXX0=

/***/ },
/* 26 */
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
	    var r = void 0,
	        g = void 0,
	        b = void 0;
	
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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy92YWx1ZS10eXBlcy9oZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBOzs7Ozs7a0JBRWU7QUFDYixnQkFBYyxjQUFJLFlBQUo7O0FBRWQsUUFBTSxVQUFDLEtBQUQ7V0FBWSxTQUFTLE1BQU0sT0FBTixDQUFjLEdBQWQsSUFBcUIsQ0FBQyxDQUFEO0dBQTFDOztBQUVOLFNBQU8sVUFBQyxLQUFELEVBQVc7QUFDaEIsUUFBSSxVQUFKO1FBQU8sVUFBUDtRQUFVLFVBQVY7OztBQURnQixRQUlaLE1BQU0sTUFBTixHQUFlLENBQWYsRUFBa0I7QUFDcEIsVUFBSSxNQUFNLE1BQU4sQ0FBYSxDQUFiLEVBQWdCLENBQWhCLENBQUosQ0FEb0I7QUFFcEIsVUFBSSxNQUFNLE1BQU4sQ0FBYSxDQUFiLEVBQWdCLENBQWhCLENBQUosQ0FGb0I7QUFHcEIsVUFBSSxNQUFNLE1BQU4sQ0FBYSxDQUFiLEVBQWdCLENBQWhCLENBQUo7OztBQUhvQixLQUF0QixNQU1PO0FBQ0wsWUFBSSxNQUFNLE1BQU4sQ0FBYSxDQUFiLEVBQWdCLENBQWhCLENBQUosQ0FESztBQUVMLFlBQUksTUFBTSxNQUFOLENBQWEsQ0FBYixFQUFnQixDQUFoQixDQUFKLENBRks7QUFHTCxZQUFJLE1BQU0sTUFBTixDQUFhLENBQWIsRUFBZ0IsQ0FBaEIsQ0FBSixDQUhLO0FBSUwsYUFBSyxDQUFMLENBSks7QUFLTCxhQUFLLENBQUwsQ0FMSztBQU1MLGFBQUssQ0FBTCxDQU5LO09BTlA7O0FBZUEsV0FBTztBQUNMLFdBQUssU0FBUyxDQUFULEVBQVksRUFBWixDQUFMO0FBQ0EsYUFBTyxTQUFTLENBQVQsRUFBWSxFQUFaLENBQVA7QUFDQSxZQUFNLFNBQVMsQ0FBVCxFQUFZLEVBQVosQ0FBTjtBQUNBLGFBQU8sQ0FBUDtLQUpGLENBbkJnQjtHQUFYOztBQTJCUCxXQUFTLFVBQUMsTUFBRDtXQUFZLGNBQUksT0FBSixDQUFZLE1BQVo7R0FBWiIsImZpbGUiOiJoZXguanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL01hdHQvU2l0ZXMvcG9wbW90aW9uIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHJnYiBmcm9tICcuL3JnYic7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgZGVmYXVsdFByb3BzOiByZ2IuZGVmYXVsdFByb3BzLFxuXG4gIHRlc3Q6ICh2YWx1ZSkgPT4gKHZhbHVlICYmIHZhbHVlLmluZGV4T2YoJyMnKSA+IC0xKSxcblxuICBzcGxpdDogKHZhbHVlKSA9PiB7XG4gICAgbGV0IHIsIGcsIGI7XG5cbiAgICAvLyBJZiB3ZSBoYXZlIDYgY2hhcmFjdGVycywgaWUgI0ZGMDAwMFxuICAgIGlmICh2YWx1ZS5sZW5ndGggPiA0KSB7XG4gICAgICByID0gdmFsdWUuc3Vic3RyKDEsIDIpO1xuICAgICAgZyA9IHZhbHVlLnN1YnN0cigzLCAyKTtcbiAgICAgIGIgPSB2YWx1ZS5zdWJzdHIoNSwgMik7XG5cbiAgICAvLyBPciB3ZSBoYXZlIDMgY2hhcmFjdGVycywgaWUgI0YwMFxuICAgIH0gZWxzZSB7XG4gICAgICByID0gdmFsdWUuc3Vic3RyKDEsIDEpO1xuICAgICAgZyA9IHZhbHVlLnN1YnN0cigyLCAxKTtcbiAgICAgIGIgPSB2YWx1ZS5zdWJzdHIoMywgMSk7XG4gICAgICByICs9IHI7XG4gICAgICBnICs9IGc7XG4gICAgICBiICs9IGI7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIFJlZDogcGFyc2VJbnQociwgMTYpLFxuICAgICAgR3JlZW46IHBhcnNlSW50KGcsIDE2KSxcbiAgICAgIEJsdWU6IHBhcnNlSW50KGIsIDE2KSxcbiAgICAgIEFscGhhOiAxXG4gICAgfTtcbiAgfSxcblxuICBjb21iaW5lOiAodmFsdWVzKSA9PiByZ2IuY29tYmluZSh2YWx1ZXMpXG59OyJdfQ==

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _defaultProps = __webpack_require__(48);
	
	var _dictionary = __webpack_require__(49);
	
	var _utils = __webpack_require__(21);
	
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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy92YWx1ZS10eXBlcy9oc2wuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBOztBQUNBOztBQUNBOztrQkFFZTtBQUNiLGdCQUFjO0FBQ1osU0FBSztBQUNILFdBQUssQ0FBTDtBQUNBLFdBQUssR0FBTDtLQUZGO0FBSUEscUNBTFk7QUFNWixvQ0FOWTtBQU9aLGdDQVBZO0dBQWQ7O0FBVUEsUUFBTSxVQUFDLEtBQUQ7V0FBWSxTQUFTLE1BQU0sT0FBTixDQUFjLEtBQWQsSUFBdUIsQ0FBQyxDQUFEO0dBQTVDOztBQUVOLFNBQU8sVUFBQyxLQUFEO1dBQVcsMkJBQWUsS0FBZjtHQUFYOztBQUVQLFdBQVMsVUFBQyxNQUFEO1dBQVksaUNBQXFCLDRCQUFnQixNQUFoQixtQkFBa0MsSUFBbEMsRUFBd0MsQ0FBeEMsQ0FBckIsRUFBaUUsTUFBakU7R0FBWiIsImZpbGUiOiJoc2wuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL01hdHQvU2l0ZXMvcG9wbW90aW9uIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgcGVyY2VudCwgb3BhY2l0eSB9IGZyb20gJy4vc2V0dGluZ3MvZGVmYXVsdC1wcm9wcyc7XG5pbXBvcnQgeyBoc2wgYXMgaHNsVGVybXMgfSBmcm9tICcuL3NldHRpbmdzL2RpY3Rpb25hcnknO1xuaW1wb3J0IHsgY3JlYXRlRGVsaW1pdGVkLCBjcmVhdGVGdW5jdGlvblN0cmluZywgZ2V0Q29sb3JWYWx1ZXMgfSBmcm9tICcuLi9pbmMvdXRpbHMnO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGRlZmF1bHRQcm9wczoge1xuICAgIEh1ZToge1xuICAgICAgbWluOiAwLFxuICAgICAgbWF4OiAzNjBcbiAgICB9LFxuICAgIFNhdHVyYXRpb246IHBlcmNlbnQsXG4gICAgTGlnaHRuZXNzOiBwZXJjZW50LFxuICAgIEFscGhhOiBvcGFjaXR5XG4gIH0sXG5cbiAgdGVzdDogKHZhbHVlKSA9PiAodmFsdWUgJiYgdmFsdWUuaW5kZXhPZignaHNsJykgPiAtMSksXG5cbiAgc3BsaXQ6ICh2YWx1ZSkgPT4gZ2V0Q29sb3JWYWx1ZXModmFsdWUsIGhzbFRlcm1zKSxcblxuICBjb21iaW5lOiAodmFsdWVzKSA9PiBjcmVhdGVGdW5jdGlvblN0cmluZyhjcmVhdGVEZWxpbWl0ZWQodmFsdWVzLCBoc2xUZXJtcywgJywgJywgMiksICdoc2xhJylcbn07XG4iXX0=

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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy92YWx1ZS10eXBlcy9weC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUE7Ozs7OztrQkFFZTtBQUNiLGdCQUFjO0FBQ1osVUFBTSxJQUFOO0FBQ0Esd0JBRlk7R0FBZCIsImZpbGUiOiJweC5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvTWF0dC9TaXRlcy9wb3Btb3Rpb24iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdW5pdFR5cGUgZnJvbSAnLi91bml0JztcblxuZXhwb3J0IGRlZmF1bHQge1xuICBkZWZhdWx0UHJvcHM6IHtcbiAgICB1bml0OiAncHgnLFxuICAgIHR5cGU6IHVuaXRUeXBlXG4gIH1cbn07Il19

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _utils = __webpack_require__(21);
	
	var _dictionary = __webpack_require__(49);
	
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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy92YWx1ZS10eXBlcy9yZ2IuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBOztBQUNBOztBQUNBOztrQkFFZTtBQUNiLGdCQUFjO0FBQ1osMEJBRFk7QUFFWiw0QkFGWTtBQUdaLDJCQUhZO0FBSVosZ0NBSlk7R0FBZDs7QUFPQSxRQUFNLFVBQUMsS0FBRDtXQUFZLFNBQVMsTUFBTSxPQUFOLENBQWMsS0FBZCxJQUF1QixDQUFDLENBQUQ7R0FBNUM7O0FBRU4sU0FBTyxVQUFDLEtBQUQ7V0FBVywyQkFBZSxLQUFmO0dBQVg7O0FBRVAsV0FBUyxVQUFDLE1BQUQ7V0FBWSxpQ0FBcUIsNEJBQWdCLE1BQWhCLG1CQUFrQyxJQUFsQyxFQUF3QyxDQUF4QyxDQUFyQixFQUFpRSxNQUFqRTtHQUFaIiwiZmlsZSI6InJnYi5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvTWF0dC9TaXRlcy9wb3Btb3Rpb24iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVEZWxpbWl0ZWQsIGNyZWF0ZUZ1bmN0aW9uU3RyaW5nLCBnZXRDb2xvclZhbHVlcyB9IGZyb20gJy4uL2luYy91dGlscyc7XG5pbXBvcnQgeyByZ2IgYXMgcmdiVGVybXMgfSBmcm9tICcuL3NldHRpbmdzL2RpY3Rpb25hcnknO1xuaW1wb3J0IHsgcmdiIGFzIGRlZmF1bHRSR0IsIG9wYWNpdHkgYXMgZGVmYXVsdE9wYWNpdHkgfSBmcm9tICcuL3NldHRpbmdzL2RlZmF1bHQtcHJvcHMnO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGRlZmF1bHRQcm9wczoge1xuICAgIFJlZDogZGVmYXVsdFJHQixcbiAgICBHcmVlbjogZGVmYXVsdFJHQixcbiAgICBCbHVlOiBkZWZhdWx0UkdCLFxuICAgIEFscGhhOiBkZWZhdWx0T3BhY2l0eVxuICB9LFxuXG4gIHRlc3Q6ICh2YWx1ZSkgPT4gKHZhbHVlICYmIHZhbHVlLmluZGV4T2YoJ3JnYicpID4gLTEpLFxuXG4gIHNwbGl0OiAodmFsdWUpID0+IGdldENvbG9yVmFsdWVzKHZhbHVlLCByZ2JUZXJtcyksXG5cbiAgY29tYmluZTogKHZhbHVlcykgPT4gY3JlYXRlRnVuY3Rpb25TdHJpbmcoY3JlYXRlRGVsaW1pdGVkKHZhbHVlcywgcmdiVGVybXMsICcsICcsIDIpLCAncmdiYScpXG59OyJdfQ==

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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy92YWx1ZS10eXBlcy9zY2FsZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7a0JBQWU7QUFDYixnQkFBYztBQUNaLGFBQVMsQ0FBVDtHQURGIiwiZmlsZSI6InNjYWxlLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9NYXR0L1NpdGVzL3BvcG1vdGlvbiIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IHtcbiAgZGVmYXVsdFByb3BzOiB7XG4gICAgY3VycmVudDogMVxuICB9XG59OyJdfQ==

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _color = __webpack_require__(24);
	
	var _color2 = _interopRequireDefault(_color);
	
	var _px = __webpack_require__(28);
	
	var _dictionary = __webpack_require__(49);
	
	var _utils = __webpack_require__(21);
	
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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy92YWx1ZS10eXBlcy9zaGFkb3cuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7Ozs7QUFDQTs7QUFDQTs7QUFDQTs7OztBQUVBLElBQU0sMEJBQTBCLG1CQUFZLEtBQVosQ0FBa0IsQ0FBbEIsRUFBcUIsQ0FBckIsQ0FBMUI7O2tCQUVTO0FBQ2IsNkJBQ0ssZ0JBQU0sWUFBTjtBQUNIO0FBQ0E7QUFDQTtBQUNBO0lBTEY7O0FBUUEsU0FBTyxVQUFDLEtBQUQsRUFBVztBQUNoQixRQUFNLE9BQU8sZ0NBQW9CLEtBQXBCLENBQVAsQ0FEVTtBQUVoQixRQUFJLGtCQUFrQixLQUFsQixDQUZZO0FBR2hCLFFBQUksWUFBWSxFQUFaLENBSFk7QUFJaEIsUUFBSSxhQUFhLEVBQWIsQ0FKWTs7QUFNaEIsU0FBSyxPQUFMLENBQWEsVUFBQyxHQUFELEVBQU0sQ0FBTixFQUFZOztBQUV2QixVQUFJLG1CQUFtQixnQkFBTSxJQUFOLENBQVcsR0FBWCxDQUFuQixFQUFvQztBQUN0QywwQkFBa0IsSUFBbEIsQ0FEc0M7QUFFdEMscUJBQWEsR0FBYjs7O0FBRnNDLE9BQXhDLE1BS087QUFDTCxxQkFBVyxtQkFBWSxDQUFaLENBQVgsSUFBNkIsR0FBN0IsQ0FESztTQUxQO0tBRlcsQ0FBYixDQU5nQjs7QUFrQmhCLFFBQU0sa0JBQWtCLGdCQUFNLEtBQU4sQ0FBWSxTQUFaLENBQWxCLENBbEJVOztBQW9CaEIsd0JBQVksY0FBWSxtQ0FBeEIsQ0FwQmdCO0dBQVg7O0FBdUJQLFdBQVMsVUFBQyxNQUFEO1dBQVksNEJBQWdCLE1BQWhCLEVBQXdCLHVCQUF4QixFQUFpRCxHQUFqRCxJQUF3RCxnQkFBTSxPQUFOLENBQWMsTUFBZCxDQUF4RDtHQUFaIiwiZmlsZSI6InNoYWRvdy5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvTWF0dC9TaXRlcy9wb3Btb3Rpb24iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY29sb3IgZnJvbSAnLi9jb2xvcic7XG5pbXBvcnQgeyBkZWZhdWx0UHJvcHMgYXMgcHhEZWZhdWx0UHJvcHMgfSBmcm9tICcuL3B4JztcbmltcG9ydCB7IHNoYWRvdyBhcyBzaGFkb3dUZXJtcyB9IGZyb20gJy4vc2V0dGluZ3MvZGljdGlvbmFyeSc7XG5pbXBvcnQgeyBzcGxpdFNwYWNlRGVsaW1pdGVkLCBjcmVhdGVEZWxpbWl0ZWQgfSBmcm9tICcuLi9pbmMvdXRpbHMnO1xuXG5jb25zdCBzaGFkb3dXaXRob3V0Q29sb3JUZXJtcyA9IHNoYWRvd1Rlcm1zLnNsaWNlKDAsIDQpO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGRlZmF1bHRQcm9wczoge1xuICAgIC4uLmNvbG9yLmRlZmF1bHRQcm9wcyxcbiAgICBYOiBweERlZmF1bHRQcm9wcyxcbiAgICBZOiBweERlZmF1bHRQcm9wcyxcbiAgICBSYWRpdXM6IHB4RGVmYXVsdFByb3BzLFxuICAgIFNwcmVhZDogcHhEZWZhdWx0UHJvcHNcbiAgfSxcblxuICBzcGxpdDogKHZhbHVlKSA9PiB7XG4gICAgY29uc3QgYml0cyA9IHNwbGl0U3BhY2VEZWxpbWl0ZWQodmFsdWUpO1xuICAgIGxldCBoYXNSZWFjaGVkQ29sb3IgPSBmYWxzZTtcbiAgICBsZXQgY29sb3JQcm9wID0gJyc7XG4gICAgbGV0IHNwbGl0VmFsdWUgPSB7fTtcblxuICAgIGJpdHMuZm9yRWFjaCgoYml0LCBpKSA9PiB7XG4gICAgICAvLyBJZiB3ZSd2ZSByZWFjaGVkIHRoZSBjb2xvciBwcm9wcywgYXBwZW5kIHRvIGNvbG9yIHN0cmluZ1xuICAgICAgaWYgKGhhc1JlYWNoZWRDb2xvciB8fCBjb2xvci50ZXN0KGJpdCkpIHtcbiAgICAgICAgaGFzUmVhY2hlZENvbG9yID0gdHJ1ZTtcbiAgICAgICAgY29sb3JQcm9wICs9IGJpdDtcblxuICAgICAgLy8gRWxzZSBwcm9jZXNzIHNoYWRvdyB2YWx1ZVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc3BsaXRWYWx1ZVtzaGFkb3dUZXJtc1tpXV0gPSBiaXQ7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBjb25zdCBzcGxpdENvbG9yUHJvcHMgPSBjb2xvci5zcGxpdChjb2xvclByb3ApO1xuXG4gICAgcmV0dXJuIHsgLi4uc3BsaXRWYWx1ZSwgc3BsaXRDb2xvclByb3BzIH07XG4gIH0sXG5cbiAgY29tYmluZTogKHZhbHVlcykgPT4gY3JlYXRlRGVsaW1pdGVkKHZhbHVlcywgc2hhZG93V2l0aG91dENvbG9yVGVybXMsICcgJykgKyBjb2xvci5jb21iaW5lKHZhbHVlcylcbn07XG4iXX0=

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _utils = __webpack_require__(21);
	
	exports.default = {
	  test: function (unparsed) {
	    var _findValueAndUnit = (0, _utils.findValueAndUnit)(unparsed);
	
	    var value = _findValueAndUnit.value;
	
	    return (0, _utils.isNum)(value) && !isNaN(value) ? true : false;
	  },
	
	  parse: function (unparsed, parent) {
	    var _findValueAndUnit2 = (0, _utils.findValueAndUnit)(unparsed);
	
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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy92YWx1ZS10eXBlcy91bml0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQTs7a0JBRWU7QUFDYixRQUFNLFVBQVUsUUFBVixFQUFvQjs0QkFDTiw2QkFBaUIsUUFBakIsRUFETTs7UUFDaEIsZ0NBRGdCOztBQUV4QixXQUFPLGlCQUFDLENBQU0sS0FBTixLQUFnQixDQUFDLE1BQU0sS0FBTixDQUFELEdBQWlCLElBQWxDLEdBQXlDLEtBQXpDLENBRmlCO0dBQXBCOztBQUtOLFNBQU8sVUFBVSxRQUFWLEVBQW9CLE1BQXBCLEVBQTRCOzZCQUNULDZCQUFpQixRQUFqQixFQURTOztRQUN6QixpQ0FEeUI7UUFDbEIsK0JBRGtCOzs7QUFHakMsUUFBSSxRQUFRLFNBQVMsSUFBVCxFQUFlO0FBQ3pCLGFBQU8sSUFBUCxHQUFjLElBQWQsQ0FEeUI7S0FBM0I7O0FBSUEsV0FBTyxLQUFQLENBUGlDO0dBQTVCOztBQVVQLGFBQVcsVUFBQyxNQUFELEVBQVMsTUFBVDtXQUFvQixVQUFVLE9BQU8sSUFBUCxJQUFlLEVBQWYsQ0FBVjtHQUFwQiIsImZpbGUiOiJ1bml0LmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9NYXR0L1NpdGVzL3BvcG1vdGlvbiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGlzTnVtLCBmaW5kVmFsdWVBbmRVbml0IH0gZnJvbSAnLi4vaW5jL3V0aWxzJztcblxuZXhwb3J0IGRlZmF1bHQge1xuICB0ZXN0OiBmdW5jdGlvbiAodW5wYXJzZWQpIHtcbiAgICBjb25zdCB7IHZhbHVlIH0gPSBmaW5kVmFsdWVBbmRVbml0KHVucGFyc2VkKTtcbiAgICByZXR1cm4gKGlzTnVtKHZhbHVlKSAmJiAhaXNOYU4odmFsdWUpKSA/IHRydWUgOiBmYWxzZTtcbiAgfSxcblxuICBwYXJzZTogZnVuY3Rpb24gKHVucGFyc2VkLCBwYXJlbnQpIHtcbiAgICBjb25zdCB7IHZhbHVlLCB1bml0IH0gPSBmaW5kVmFsdWVBbmRVbml0KHVucGFyc2VkKTtcblxuICAgIGlmICh1bml0ICYmIHVuaXQgIT09IHVuaXQpIHtcbiAgICAgIHBhcmVudC51bml0ID0gdW5pdDtcbiAgICB9XG5cbiAgICByZXR1cm4gdmFsdWU7XG4gIH0sXG5cbiAgc2VyaWFsaXplOiAocGFyc2VkLCBwYXJlbnQpID0+IHBhcnNlZCArIChwYXJlbnQudW5pdCB8fCAnJylcbn07XG4iXX0=

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports.chain = exports.circularMotion = exports.createMapper = undefined;
	
	var _calc = __webpack_require__(20);
	
	var createMapper = exports.createMapper = function (input, output) {
	  var mapLength = input.length;
	  var finalIndex = mapLength - 1;
	
	  return function (value) {
	    // If value outside minimum input range, quickly return
	    if (value <= input[0]) {
	      return output[0];
	    }
	
	    // If value outside maximum input range, quickly return
	    if (value >= input[finalIndex]) {
	      return output[finalIndex];
	    }
	
	    // If within overall input range, find specific range
	    for (var i = 1; i < mapLength; i++) {
	      if (value < input[i] || i === finalIndex) {
	        var progressInRange = (0, _calc.getProgressFromValue)(value, input[i - 1], input[i]);
	        return (0, _calc.getValueFromProgress)(progressInRange, output[i - 1], output[i]);
	      }
	    }
	  };
	};
	
	var circularMotion = exports.circularMotion = function (v, key, _ref) {
	  var values = _ref.values;
	
	  var originX = values.originX ? values.originX.current : 0;
	  var originY = values.originY ? values.originY.current : 0;
	
	  return (0, _calc.pointFromAngleAndDistance)({
	    x: originX,
	    y: originY
	  }, values.angle.current, values.distance.current)[key];
	};
	
	/*
	  Combine transformers into one function that calls every
	  transformer in the array and returns the result
	
	  @param [array]
	  @return [function]
	*/
	var chain = exports.chain = function (transformers) {
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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9pbmMvdHJhbnNmb3JtZXJzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7O0FBRU8sSUFBTSxzQ0FBZSxVQUFDLEtBQUQsRUFBUSxNQUFSLEVBQW1CO0FBQzdDLE1BQU0sWUFBWSxNQUFNLE1BQU4sQ0FEMkI7QUFFN0MsTUFBTSxhQUFhLFlBQVksQ0FBWixDQUYwQjs7QUFJN0MsU0FBTyxVQUFDLEtBQUQsRUFBVzs7QUFFaEIsUUFBSSxTQUFTLE1BQU0sQ0FBTixDQUFULEVBQW1CO0FBQ3JCLGFBQU8sT0FBTyxDQUFQLENBQVAsQ0FEcUI7S0FBdkI7OztBQUZnQixRQU9aLFNBQVMsTUFBTSxVQUFOLENBQVQsRUFBNEI7QUFDOUIsYUFBTyxPQUFPLFVBQVAsQ0FBUCxDQUQ4QjtLQUFoQzs7O0FBUGdCLFNBWVgsSUFBSSxJQUFJLENBQUosRUFBTyxJQUFJLFNBQUosRUFBZSxHQUEvQixFQUFvQztBQUNsQyxVQUFJLFFBQVEsTUFBTSxDQUFOLENBQVIsSUFBb0IsTUFBTSxVQUFOLEVBQWtCO0FBQ3hDLFlBQU0sa0JBQWtCLGdDQUFxQixLQUFyQixFQUE0QixNQUFNLElBQUksQ0FBSixDQUFsQyxFQUEwQyxNQUFNLENBQU4sQ0FBMUMsQ0FBbEIsQ0FEa0M7QUFFeEMsZUFBTyxnQ0FBcUIsZUFBckIsRUFBc0MsT0FBTyxJQUFJLENBQUosQ0FBN0MsRUFBcUQsT0FBTyxDQUFQLENBQXJELENBQVAsQ0FGd0M7T0FBMUM7S0FERjtHQVpLLENBSnNDO0NBQW5COztBQXlCckIsSUFBTSwwQ0FBaUIsVUFBQyxDQUFELEVBQUksR0FBSixRQUF3QjtNQUFiLHFCQUFhOztBQUNwRCxNQUFNLFVBQVUsTUFBQyxDQUFPLE9BQVAsR0FBa0IsT0FBTyxPQUFQLENBQWUsT0FBZixHQUF5QixDQUE1QyxDQURvQztBQUVwRCxNQUFNLFVBQVUsTUFBQyxDQUFPLE9BQVAsR0FBa0IsT0FBTyxPQUFQLENBQWUsT0FBZixHQUF5QixDQUE1QyxDQUZvQzs7QUFJcEQsU0FBTyxxQ0FBMEI7QUFDL0IsT0FBRyxPQUFIO0FBQ0EsT0FBRyxPQUFIO0dBRkssRUFHSixPQUFPLEtBQVAsQ0FBYSxPQUFiLEVBQXNCLE9BQU8sUUFBUCxDQUFnQixPQUFoQixDQUhsQixDQUcyQyxHQUgzQyxDQUFQLENBSm9EO0NBQXhCOzs7Ozs7Ozs7QUFpQnZCLElBQU0sd0JBQVEsVUFBQyxZQUFELEVBQWtCO0FBQ3JDLE1BQU0sa0JBQWtCLGFBQWEsTUFBYixDQURhO0FBRXJDLE1BQUksSUFBSSxDQUFKOzs7Ozs7OztBQUZpQyxTQVU5QixVQUFDLENBQUQsRUFBSSxHQUFKLEVBQVMsQ0FBVCxFQUFlO0FBQ3BCLFNBQUssSUFBSSxDQUFKLEVBQU8sSUFBSSxlQUFKLEVBQXFCLEdBQWpDLEVBQXNDO0FBQ3BDLFVBQUksYUFBYSxDQUFiLEVBQWdCLENBQWhCLEVBQW1CLEdBQW5CLEVBQXdCLENBQXhCLENBQUosQ0FEb0M7S0FBdEM7O0FBSUEsV0FBTyxDQUFQLENBTG9CO0dBQWYsQ0FWOEI7Q0FBbEIiLCJmaWxlIjoidHJhbnNmb3JtZXJzLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9NYXR0L1NpdGVzL3BvcG1vdGlvbiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGdldFByb2dyZXNzRnJvbVZhbHVlLCBnZXRWYWx1ZUZyb21Qcm9ncmVzcywgcG9pbnRGcm9tQW5nbGVBbmREaXN0YW5jZSB9IGZyb20gJy4uL2luYy9jYWxjJztcblxuZXhwb3J0IGNvbnN0IGNyZWF0ZU1hcHBlciA9IChpbnB1dCwgb3V0cHV0KSA9PiB7XG4gIGNvbnN0IG1hcExlbmd0aCA9IGlucHV0Lmxlbmd0aDtcbiAgY29uc3QgZmluYWxJbmRleCA9IG1hcExlbmd0aCAtIDE7XG5cbiAgcmV0dXJuICh2YWx1ZSkgPT4ge1xuICAgIC8vIElmIHZhbHVlIG91dHNpZGUgbWluaW11bSBpbnB1dCByYW5nZSwgcXVpY2tseSByZXR1cm5cbiAgICBpZiAodmFsdWUgPD0gaW5wdXRbMF0pIHtcbiAgICAgIHJldHVybiBvdXRwdXRbMF07XG4gICAgfVxuXG4gICAgLy8gSWYgdmFsdWUgb3V0c2lkZSBtYXhpbXVtIGlucHV0IHJhbmdlLCBxdWlja2x5IHJldHVyblxuICAgIGlmICh2YWx1ZSA+PSBpbnB1dFtmaW5hbEluZGV4XSkge1xuICAgICAgcmV0dXJuIG91dHB1dFtmaW5hbEluZGV4XTtcbiAgICB9XG5cbiAgICAvLyBJZiB3aXRoaW4gb3ZlcmFsbCBpbnB1dCByYW5nZSwgZmluZCBzcGVjaWZpYyByYW5nZVxuICAgIGZvciAobGV0IGkgPSAxOyBpIDwgbWFwTGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmICh2YWx1ZSA8IGlucHV0W2ldIHx8IGkgPT09IGZpbmFsSW5kZXgpIHtcbiAgICAgICAgY29uc3QgcHJvZ3Jlc3NJblJhbmdlID0gZ2V0UHJvZ3Jlc3NGcm9tVmFsdWUodmFsdWUsIGlucHV0W2kgLSAxXSwgaW5wdXRbaV0pO1xuICAgICAgICByZXR1cm4gZ2V0VmFsdWVGcm9tUHJvZ3Jlc3MocHJvZ3Jlc3NJblJhbmdlLCBvdXRwdXRbaSAtIDFdLCBvdXRwdXRbaV0pO1xuICAgICAgfVxuICAgIH1cbiAgfTtcbn07XG5cbmV4cG9ydCBjb25zdCBjaXJjdWxhck1vdGlvbiA9ICh2LCBrZXksIHsgdmFsdWVzIH0pID0+IHtcbiAgY29uc3Qgb3JpZ2luWCA9ICh2YWx1ZXMub3JpZ2luWCkgPyB2YWx1ZXMub3JpZ2luWC5jdXJyZW50IDogMDtcbiAgY29uc3Qgb3JpZ2luWSA9ICh2YWx1ZXMub3JpZ2luWSkgPyB2YWx1ZXMub3JpZ2luWS5jdXJyZW50IDogMDtcblxuICByZXR1cm4gcG9pbnRGcm9tQW5nbGVBbmREaXN0YW5jZSh7XG4gICAgeDogb3JpZ2luWCxcbiAgICB5OiBvcmlnaW5ZIFxuICB9LCB2YWx1ZXMuYW5nbGUuY3VycmVudCwgdmFsdWVzLmRpc3RhbmNlLmN1cnJlbnQpW2tleV07XG59O1xuXG4vKlxuICBDb21iaW5lIHRyYW5zZm9ybWVycyBpbnRvIG9uZSBmdW5jdGlvbiB0aGF0IGNhbGxzIGV2ZXJ5XG4gIHRyYW5zZm9ybWVyIGluIHRoZSBhcnJheSBhbmQgcmV0dXJucyB0aGUgcmVzdWx0XG5cbiAgQHBhcmFtIFthcnJheV1cbiAgQHJldHVybiBbZnVuY3Rpb25dXG4qL1xuZXhwb3J0IGNvbnN0IGNoYWluID0gKHRyYW5zZm9ybWVycykgPT4ge1xuICBjb25zdCBudW1UcmFuc2Zvcm1lcnMgPSB0cmFuc2Zvcm1lcnMubGVuZ3RoO1xuICBsZXQgaSA9IDA7XG5cbiAgLypcbiAgICBAcGFyYW0gW251bWJlcl1cbiAgICBAcGFyYW0gW3N0cmluZ11cbiAgICBAcGFyYW0gW0FjdGlvbl1cbiAgICBAcmV0dXJuIFtudW1iZXJdXG4gICovXG4gIHJldHVybiAodiwga2V5LCBhKSA9PiB7XG4gICAgZm9yIChpID0gMDsgaSA8IG51bVRyYW5zZm9ybWVyczsgaSsrKSB7XG4gICAgICB2ID0gdHJhbnNmb3JtZXJzW2ldKHYsIGtleSwgYSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHY7XG4gIH07XG59OyJdfQ==

/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _color = __webpack_require__(24);
	
	var _color2 = _interopRequireDefault(_color);
	
	var _complex = __webpack_require__(25);
	
	var _complex2 = _interopRequireDefault(_complex);
	
	var _unit = __webpack_require__(32);
	
	var _unit2 = _interopRequireDefault(_unit);
	
	var _utils = __webpack_require__(21);
	
	var _numericalValues = __webpack_require__(35);
	
	var _numericalValues2 = _interopRequireDefault(_numericalValues);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var NUM_NUMERICAL_VALUES = _numericalValues2.default.length;
	
	exports.default = function (value) {
	  for (var i = 0; i < NUM_NUMERICAL_VALUES; i++) {
	    var valueProp = value[_numericalValues2.default[i]];
	    if ((0, _utils.isString)(valueProp)) {
	      if (_color2.default.test(valueProp)) {
	        return _color2.default;
	      } else if (_complex2.default.test(valueProp)) {
	        return _complex2.default;
	      } else if (_unit2.default.test(valueProp)) {
	        return _unit2.default;
	      }
	    }
	  }
	};
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy92YWx1ZS10eXBlcy9kZXRlY3QuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOztBQUNBOzs7Ozs7QUFFQSxJQUFNLHVCQUF1QiwwQkFBaUIsTUFBakI7O2tCQUVkLFVBQUMsS0FBRCxFQUFXO0FBQ3hCLE9BQUssSUFBSSxJQUFJLENBQUosRUFBTyxJQUFJLG9CQUFKLEVBQTBCLEdBQTFDLEVBQStDO0FBQzdDLFFBQU0sWUFBWSxNQUFNLDBCQUFpQixDQUFqQixDQUFOLENBQVosQ0FEdUM7QUFFN0MsUUFBSSxxQkFBUyxTQUFULENBQUosRUFBeUI7QUFDdkIsVUFBSSxnQkFBVSxJQUFWLENBQWUsU0FBZixDQUFKLEVBQStCO0FBQzdCLCtCQUQ2QjtPQUEvQixNQUVPLElBQUksa0JBQVksSUFBWixDQUFpQixTQUFqQixDQUFKLEVBQWlDO0FBQ3RDLGlDQURzQztPQUFqQyxNQUVBLElBQUksZUFBUyxJQUFULENBQWMsU0FBZCxDQUFKLEVBQThCO0FBQ25DLDhCQURtQztPQUE5QjtLQUxUO0dBRkY7Q0FEYSIsImZpbGUiOiJkZXRlY3QuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL01hdHQvU2l0ZXMvcG9wbW90aW9uIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNvbG9yVHlwZSBmcm9tICcuLi92YWx1ZS10eXBlcy9jb2xvcic7XG5pbXBvcnQgY29tcGxleFR5cGUgZnJvbSAnLi4vdmFsdWUtdHlwZXMvY29tcGxleCc7XG5pbXBvcnQgdW5pdFR5cGUgZnJvbSAnLi4vdmFsdWUtdHlwZXMvdW5pdCc7XG5pbXBvcnQgeyBpc1N0cmluZyB9IGZyb20gJy4uL2luYy91dGlscyc7XG5pbXBvcnQgTlVNRVJJQ0FMX1ZBTFVFUyBmcm9tICcuLi9pbmMvbnVtZXJpY2FsLXZhbHVlcyc7XG5cbmNvbnN0IE5VTV9OVU1FUklDQUxfVkFMVUVTID0gTlVNRVJJQ0FMX1ZBTFVFUy5sZW5ndGg7XG5cbmV4cG9ydCBkZWZhdWx0ICh2YWx1ZSkgPT4ge1xuICBmb3IgKGxldCBpID0gMDsgaSA8IE5VTV9OVU1FUklDQUxfVkFMVUVTOyBpKyspIHtcbiAgICBjb25zdCB2YWx1ZVByb3AgPSB2YWx1ZVtOVU1FUklDQUxfVkFMVUVTW2ldXTtcbiAgICBpZiAoaXNTdHJpbmcodmFsdWVQcm9wKSkge1xuICAgICAgaWYgKGNvbG9yVHlwZS50ZXN0KHZhbHVlUHJvcCkpIHtcbiAgICAgICAgcmV0dXJuIGNvbG9yVHlwZTtcbiAgICAgIH0gZWxzZSBpZiAoY29tcGxleFR5cGUudGVzdCh2YWx1ZVByb3ApKSB7XG4gICAgICAgIHJldHVybiBjb21wbGV4VHlwZTtcbiAgICAgIH0gZWxzZSBpZiAodW5pdFR5cGUudGVzdCh2YWx1ZVByb3ApKSB7XG4gICAgICAgIHJldHVybiB1bml0VHlwZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn07Il19

/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports.default = ['current', 'from', 'to', 'velocity'];
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9pbmMvbnVtZXJpY2FsLXZhbHVlcy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7a0JBQWUsQ0FBQyxTQUFELEVBQVksTUFBWixFQUFvQixJQUFwQixFQUEwQixVQUExQiIsImZpbGUiOiJudW1lcmljYWwtdmFsdWVzLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9NYXR0L1NpdGVzL3BvcG1vdGlvbiIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IFsnY3VycmVudCcsICdmcm9tJywgJ3RvJywgJ3ZlbG9jaXR5J107Il19

/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _objectAdapter = __webpack_require__(15);
	
	var _objectAdapter2 = _interopRequireDefault(_objectAdapter);
	
	var _cssAdapter = __webpack_require__(14);
	
	var _cssAdapter2 = _interopRequireDefault(_cssAdapter);
	
	var _svgAdapter = __webpack_require__(16);
	
	var _svgAdapter2 = _interopRequireDefault(_svgAdapter);
	
	var _svgPathAdapter = __webpack_require__(17);
	
	var _svgPathAdapter2 = _interopRequireDefault(_svgPathAdapter);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = function (element) {
	  var detectedAdapter = _objectAdapter2.default;
	
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
	
	  return detectedAdapter;
	};
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9pbmMvZGV0ZWN0LWFkYXB0ZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7a0JBRWUsVUFBQyxPQUFELEVBQWE7QUFDMUIsTUFBSSx5Q0FBSjs7O0FBRDBCLE1BSXRCLG1CQUFtQixXQUFuQixJQUFrQyxRQUFRLE9BQVIsS0FBb0IsS0FBcEIsRUFBMkI7QUFDL0Q7OztBQUQrRCxHQUFqRSxNQUlPLElBQUksbUJBQW1CLFVBQW5CLEVBQStCO0FBQ3hDLFVBQUksUUFBUSxPQUFSLEtBQW9CLE1BQXBCLEVBQTRCO0FBQzlCLG1EQUQ4QjtPQUFoQyxNQUVPO0FBQ0wsK0NBREs7T0FGUDtLQURLOztBQVFQLFNBQU8sZUFBUCxDQWhCMEI7Q0FBYiIsImZpbGUiOiJkZXRlY3QtYWRhcHRlci5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvTWF0dC9TaXRlcy9wb3Btb3Rpb24iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgb2JqZWN0QWRhcHRlciBmcm9tICcuLi9hZGFwdGVyL29iamVjdC1hZGFwdGVyJztcbmltcG9ydCBjc3NBZGFwdGVyIGZyb20gJy4uL2FkYXB0ZXIvY3NzLWFkYXB0ZXInO1xuaW1wb3J0IHN2Z0FkYXB0ZXIgZnJvbSAnLi4vYWRhcHRlci9zdmctYWRhcHRlcic7XG5pbXBvcnQgc3ZnUGF0aEFkYXB0ZXIgZnJvbSAnLi4vYWRhcHRlci9zdmctcGF0aC1hZGFwdGVyJztcblxuZXhwb3J0IGRlZmF1bHQgKGVsZW1lbnQpID0+IHtcbiAgbGV0IGRldGVjdGVkQWRhcHRlciA9IG9iamVjdEFkYXB0ZXI7XG5cbiAgLy8gSWYgSFRNTEVsZW1lbnQgbG9hZCBDU1NcbiAgaWYgKGVsZW1lbnQgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCB8fCBlbGVtZW50LnRhZ05hbWUgPT09ICdzdmcnKSB7XG4gICAgZGV0ZWN0ZWRBZGFwdGVyID0gY3NzQWRhcHRlcjtcblxuICAvLyBPciBTVkdcbiAgfSBlbHNlIGlmIChlbGVtZW50IGluc3RhbmNlb2YgU1ZHRWxlbWVudCkge1xuICAgIGlmIChlbGVtZW50LnRhZ05hbWUgPT09ICdwYXRoJykge1xuICAgICAgZGV0ZWN0ZWRBZGFwdGVyID0gc3ZnUGF0aEFkYXB0ZXI7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRldGVjdGVkQWRhcHRlciA9IHN2Z0FkYXB0ZXI7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGRldGVjdGVkQWRhcHRlcjtcbn07XG4iXX0=

/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _calc = __webpack_require__(20);
	
	var BLEND_ACCURACY = 60;
	
	exports.default = function (outAction, inAction, flowValue, key) {
	  var outValue = outAction.values[key];
	
	  if (outAction.elapsed === undefined || !outValue) {
	    return;
	  }
	
	  var inValue = inAction.values[key];
	  var outTotalDuration = outValue.delay + outValue.duration;
	  var timeUntilOutEnd = Math.min(outTotalDuration - outAction.elapsed, inValue.delay + inValue.duration);
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
	        flowValue.blendCurve = undefined;
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
	        flowValue.blendCurve = undefined;
	        return inValue.current;
	      }
	
	      return (0, _calc.getValueFromProgress)(blendProgress, aP, bP);
	    };
	  }
	};
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hY3Rpb25zL2Zsb3cvZ2VuZXJhdGUtYmxlbmQtY3VydmUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBOztBQUVBLElBQU0saUJBQWlCLEVBQWpCOztrQkFFUyxVQUFDLFNBQUQsRUFBWSxRQUFaLEVBQXNCLFNBQXRCLEVBQWlDLEdBQWpDLEVBQXlDO0FBQ3RELE1BQU0sV0FBVyxVQUFVLE1BQVYsQ0FBaUIsR0FBakIsQ0FBWCxDQURnRDs7QUFHdEQsTUFBSSxVQUFVLE9BQVYsS0FBc0IsU0FBdEIsSUFBbUMsQ0FBQyxRQUFELEVBQVc7QUFDaEQsV0FEZ0Q7R0FBbEQ7O0FBSUEsTUFBTSxVQUFVLFNBQVMsTUFBVCxDQUFnQixHQUFoQixDQUFWLENBUGdEO0FBUXRELE1BQU0sbUJBQW1CLFNBQVMsS0FBVCxHQUFpQixTQUFTLFFBQVQsQ0FSWTtBQVN0RCxNQUFNLGtCQUFrQixLQUFLLEdBQUwsQ0FBUyxtQkFBbUIsVUFBVSxPQUFWLEVBQW1CLFFBQVEsS0FBUixHQUFnQixRQUFRLFFBQVIsQ0FBakYsQ0FUZ0Q7QUFVdEQsTUFBTSxxQkFBcUIsZ0JBQUssb0JBQVMsZ0NBQXFCLGVBQXJCLEVBQXNDLENBQXRDLEVBQXlDLFFBQVEsS0FBUixHQUFnQixRQUFRLFFBQVIsQ0FBbEUsRUFBcUYsQ0FBckYsRUFBd0YsQ0FBeEYsQ0FBTCxFQUFpRyxRQUFRLElBQVIsRUFBYyxRQUFRLEVBQVIsRUFBWSxRQUFRLElBQVIsQ0FBaEosQ0FWZ0Q7QUFXdEQsTUFBTSx5QkFBeUIsUUFBUSxJQUFSLEdBQWUsU0FBUyxPQUFULENBWFE7QUFZdEQsTUFBTSx1QkFBdUIscUJBQXFCLFNBQVMsRUFBVCxDQVpJO0FBYXRELE1BQU0sa0JBQWtCLDJCQUEyQixvQkFBM0IsQ0FiOEI7O0FBZXRELE1BQU0sYUFBYSxDQUFDLENBQUMsQ0FBRCxFQUFJLFNBQVMsT0FBVCxDQUFMLEVBQXdCLENBQUMsZUFBRCxFQUFrQixrQkFBbEIsQ0FBeEIsQ0FBYjs7O0FBZmdE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QyxDQUFQLENBVlc7S0FBTixDQUZGO0dBWFA7Q0E1Q2EiLCJmaWxlIjoiZ2VuZXJhdGUtYmxlbmQtY3VydmUuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL01hdHQvU2l0ZXMvcG9wbW90aW9uIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZ2V0UHJvZ3Jlc3NGcm9tVmFsdWUsIGdldFZhbHVlRnJvbVByb2dyZXNzLCBlYXNlLCByZXN0cmljdCB9IGZyb20gJy4uLy4uL2luYy9jYWxjJztcblxuY29uc3QgQkxFTkRfQUNDVVJBQ1kgPSA2MDtcblxuZXhwb3J0IGRlZmF1bHQgKG91dEFjdGlvbiwgaW5BY3Rpb24sIGZsb3dWYWx1ZSwga2V5KSA9PiB7XG4gIGNvbnN0IG91dFZhbHVlID0gb3V0QWN0aW9uLnZhbHVlc1trZXldO1xuXG4gIGlmIChvdXRBY3Rpb24uZWxhcHNlZCA9PT0gdW5kZWZpbmVkIHx8ICFvdXRWYWx1ZSkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGNvbnN0IGluVmFsdWUgPSBpbkFjdGlvbi52YWx1ZXNba2V5XTtcbiAgY29uc3Qgb3V0VG90YWxEdXJhdGlvbiA9IG91dFZhbHVlLmRlbGF5ICsgb3V0VmFsdWUuZHVyYXRpb247XG4gIGNvbnN0IHRpbWVVbnRpbE91dEVuZCA9IE1hdGgubWluKG91dFRvdGFsRHVyYXRpb24gLSBvdXRBY3Rpb24uZWxhcHNlZCwgaW5WYWx1ZS5kZWxheSArIGluVmFsdWUuZHVyYXRpb24pO1xuICBjb25zdCBpblBvc2l0aW9uQXRPdXRFbmQgPSBlYXNlKHJlc3RyaWN0KGdldFByb2dyZXNzRnJvbVZhbHVlKHRpbWVVbnRpbE91dEVuZCwgMCwgaW5WYWx1ZS5kZWxheSArIGluVmFsdWUuZHVyYXRpb24pLCAwLCAxKSwgaW5WYWx1ZS5mcm9tLCBpblZhbHVlLnRvLCBpblZhbHVlLmVhc2UpO1xuICBjb25zdCBpbkJpZ2dlclRoYW5PdXRBdFN0YXJ0ID0gaW5WYWx1ZS5mcm9tID4gb3V0VmFsdWUuY3VycmVudDtcbiAgY29uc3QgaW5CaWdnZXJUaGFuT3V0QXRFbmQgPSBpblBvc2l0aW9uQXRPdXRFbmQgPiBvdXRWYWx1ZS50bztcbiAgY29uc3QgdHdlZW5zSW50ZXJzZWN0ID0gaW5CaWdnZXJUaGFuT3V0QXRTdGFydCAhPT0gaW5CaWdnZXJUaGFuT3V0QXRFbmQ7XG5cbiAgY29uc3QgYmxlbmRDdXJ2ZSA9IFtbMCwgb3V0VmFsdWUuY3VycmVudF0sIFt0aW1lVW50aWxPdXRFbmQsIGluUG9zaXRpb25BdE91dEVuZF1dO1xuXG4gIC8vIElmIHR3ZWVucyBpbnRlcnNlY3QsIHJlc29sdmUgdHdlZW5zIGF0IGEgcmVzb2x1dGlvbiB0byBmaW5kIGV4YWN0bHkgd2hlcmVcbiAgaWYgKHR3ZWVuc0ludGVyc2VjdCkge1xuICAgIGNvbnN0IHRpbWVTdGVwVG9UZXN0ID0gdGltZVVudGlsT3V0RW5kIC8gQkxFTkRfQUNDVVJBQ1k7XG4gICAgbGV0IGZvdW5kUDEgPSBmYWxzZTtcbiAgICBsZXQgZm91bmRQMiA9IGZhbHNlO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPD0gQkxFTkRfQUNDVVJBQ1k7IGkrKykge1xuICAgICAgY29uc3QgdGltZVN0ZXAgPSBpICogdGltZVN0ZXBUb1Rlc3Q7XG4gICAgICBjb25zdCBvdXRBdFRpbWUgPSBlYXNlKGdldFByb2dyZXNzRnJvbVZhbHVlKG91dEFjdGlvbi5lbGFwc2VkICsgdGltZVN0ZXAsIG91dFZhbHVlLmRlbGF5LCBvdXRWYWx1ZS5kdXJhdGlvbiksIG91dFZhbHVlLmZyb20sIG91dFZhbHVlLnRvLCBvdXRWYWx1ZS5lYXNlKTtcbiAgICAgIGNvbnN0IGluQXRUaW1lID0gZWFzZShnZXRQcm9ncmVzc0Zyb21WYWx1ZShpbkFjdGlvbi5lbGFwc2VkICsgdGltZVN0ZXAsIGluVmFsdWUuZGVsYXksIGluVmFsdWUuZHVyYXRpb24pLCBpblZhbHVlLmZyb20sIGluVmFsdWUudG8sIGluVmFsdWUuZWFzZSk7XG5cbiAgICAgIGlmICghZm91bmRQMSAmJiAoKGluQmlnZ2VyVGhhbk91dEF0U3RhcnQgJiYgaW5BdFRpbWUgPCBvdXRBdFRpbWUpIHx8ICghaW5CaWdnZXJUaGFuT3V0QXRTdGFydCAmJiBpbkF0VGltZSA+IG91dEF0VGltZSkpKSB7XG4gICAgICAgIGJsZW5kQ3VydmUuc3BsaWNlKDEsIDAsIFt0aW1lU3RlcCwgaW5BdFRpbWVdKTtcbiAgICAgICAgZm91bmRQMSA9IHRydWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChmb3VuZFAxICYmICgoaW5CaWdnZXJUaGFuT3V0QXRTdGFydCAmJiBpbkF0VGltZSA8IG91dFZhbHVlLmN1cnJlbnQpIHx8ICghaW5CaWdnZXJUaGFuT3V0QXRTdGFydCAmJiBpbkF0VGltZSA+IG91dFZhbHVlLmN1cnJlbnQpKSkge1xuICAgICAgICBibGVuZEN1cnZlWzJdID0gW3RpbWVTdGVwLCBpbkF0VGltZV07XG4gICAgICAgIGZvdW5kUDIgPSB0cnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAoZm91bmRQMikge1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBpZiAoYmxlbmRDdXJ2ZS5sZW5ndGggPT09IDIpIHtcbiAgICAvLyBQYXNzIGJldHdlZW4gdHdlZW5zIHVzaW5nIGluY29taW5nIGVhc2luZyBpZiBqdXN0IHR3byBwb2ludHNcbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgY29uc3QgYmxlbmRQcm9ncmVzcyA9IHJlc3RyaWN0KGdldFByb2dyZXNzRnJvbVZhbHVlKGluQWN0aW9uLmVsYXBzZWQsIGJsZW5kQ3VydmVbMF1bMF0sIGJsZW5kQ3VydmVbMV1bMF0pLCAwLCAxKTtcblxuICAgICAgaWYgKGJsZW5kUHJvZ3Jlc3MgPT09IDEpIHtcbiAgICAgICAgZmxvd1ZhbHVlLmJsZW5kQ3VydmUgPSB1bmRlZmluZWQ7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBlYXNlKGJsZW5kUHJvZ3Jlc3MsIG91dFZhbHVlLmN1cnJlbnQsIGluVmFsdWUuY3VycmVudCwgaW5WYWx1ZS5lYXNlKTtcbiAgICB9O1xuICB9IGVsc2Uge1xuICAgIC8vIFBhc3MgYmV0d2VlbiB0d2VlbnMgdXNpbmcgYmV6aWVyIGludGVycG9sYXRpb25cbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgY29uc3QgYmxlbmRQcm9ncmVzcyA9IHJlc3RyaWN0KGdldFByb2dyZXNzRnJvbVZhbHVlKGluQWN0aW9uLmVsYXBzZWQsIGJsZW5kQ3VydmVbMF1bMF0sIGJsZW5kQ3VydmVbMl1bMF0pLCAwLCAxKTtcbiAgICAgIGNvbnN0IGFQID0gZ2V0VmFsdWVGcm9tUHJvZ3Jlc3MoYmxlbmRQcm9ncmVzcywgYmxlbmRDdXJ2ZVswXVsxXSwgYmxlbmRDdXJ2ZVsxXVsxXSk7XG4gICAgICBjb25zdCBiUCA9IGdldFZhbHVlRnJvbVByb2dyZXNzKGJsZW5kUHJvZ3Jlc3MsIGJsZW5kQ3VydmVbMV1bMV0sIGJsZW5kQ3VydmVbMl1bMV0pO1xuXG4gICAgICBpZiAoYmxlbmRQcm9ncmVzcyA9PT0gMSkge1xuICAgICAgICBmbG93VmFsdWUuYmxlbmRDdXJ2ZSA9IHVuZGVmaW5lZDtcbiAgICAgICAgcmV0dXJuIGluVmFsdWUuY3VycmVudDtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGdldFZhbHVlRnJvbVByb2dyZXNzKGJsZW5kUHJvZ3Jlc3MsIGFQLCBiUCk7XG4gICAgfTtcbiAgfVxufTtcbiJdfQ==

/***/ },
/* 38 */
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
	
	  function Pointer(initialState, moveEvent, eventToPoint, preventDefault) {
	    _classCallCheck(this, Pointer);
	
	    var _this = _possibleConstructorReturn(this, _Input.call(this, initialState));
	
	    _this.preventDefault = preventDefault;
	    _this.eventToPoint = eventToPoint;
	    _this.moveEvent = moveEvent;
	    _this.boundLatest = _this.latest.bind(_this);
	    return _this;
	  }
	
	  Pointer.prototype.latest = function latest(e) {
	    _Input.prototype.latest.call(this, this.eventToPoint(e));
	    if (this.preventDefault) {
	      e.preventDefault();
	    }
	  };
	
	  Pointer.prototype.start = function start() {
	    _Input.prototype.start.call(this);
	    document.documentElement.addEventListener(this.moveEvent, this.boundLatest);
	  };
	
	  Pointer.prototype.stop = function stop() {
	    _Input.prototype.stop.call(this);
	    document.documentElement.removeEventListener(this.moveEvent, this.boundLatest);
	  };
	
	  return Pointer;
	}(_Input3.default);
	
	exports.default = Pointer;
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9pbnB1dC9Qb2ludGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQTs7Ozs7Ozs7Ozs7O0lBRXFCOzs7QUFDbkIsV0FEbUIsT0FDbkIsQ0FBWSxZQUFaLEVBQTBCLFNBQTFCLEVBQXFDLFlBQXJDLEVBQW1ELGNBQW5ELEVBQW1FOzBCQURoRCxTQUNnRDs7aURBQ2pFLGtCQUFNLFlBQU4sR0FEaUU7O0FBRWpFLFVBQUssY0FBTCxHQUFzQixjQUF0QixDQUZpRTtBQUdqRSxVQUFLLFlBQUwsR0FBb0IsWUFBcEIsQ0FIaUU7QUFJakUsVUFBSyxTQUFMLEdBQWlCLFNBQWpCLENBSmlFO0FBS2pFLFVBQUssV0FBTCxHQUFtQixNQUFLLE1BQUwsQ0FBWSxJQUFaLE9BQW5CLENBTGlFOztHQUFuRTs7QUFEbUIsb0JBU25CLHlCQUFPLEdBQUc7QUFDUixxQkFBTSxNQUFOLFlBQWEsS0FBSyxZQUFMLENBQWtCLENBQWxCLENBQWIsRUFEUTtBQUVSLFFBQUksS0FBSyxjQUFMLEVBQXFCO0FBQ3ZCLFFBQUUsY0FBRixHQUR1QjtLQUF6Qjs7O0FBWGlCLG9CQWdCbkIseUJBQVE7QUFDTixxQkFBTSxLQUFOLFlBRE07QUFFTixhQUFTLGVBQVQsQ0FBeUIsZ0JBQXpCLENBQTBDLEtBQUssU0FBTCxFQUFnQixLQUFLLFdBQUwsQ0FBMUQsQ0FGTTs7O0FBaEJXLG9CQXFCbkIsdUJBQU87QUFDTCxxQkFBTSxJQUFOLFlBREs7QUFFTCxhQUFTLGVBQVQsQ0FBeUIsbUJBQXpCLENBQTZDLEtBQUssU0FBTCxFQUFnQixLQUFLLFdBQUwsQ0FBN0QsQ0FGSzs7O1NBckJZIiwiZmlsZSI6IlBvaW50ZXIuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL01hdHQvU2l0ZXMvcG9wbW90aW9uIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IElucHV0IGZyb20gJy4vSW5wdXQnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQb2ludGVyIGV4dGVuZHMgSW5wdXQge1xuICBjb25zdHJ1Y3Rvcihpbml0aWFsU3RhdGUsIG1vdmVFdmVudCwgZXZlbnRUb1BvaW50LCBwcmV2ZW50RGVmYXVsdCkge1xuICAgIHN1cGVyKGluaXRpYWxTdGF0ZSk7XG4gICAgdGhpcy5wcmV2ZW50RGVmYXVsdCA9IHByZXZlbnREZWZhdWx0O1xuICAgIHRoaXMuZXZlbnRUb1BvaW50ID0gZXZlbnRUb1BvaW50O1xuICAgIHRoaXMubW92ZUV2ZW50ID0gbW92ZUV2ZW50O1xuICAgIHRoaXMuYm91bmRMYXRlc3QgPSB0aGlzLmxhdGVzdC5iaW5kKHRoaXMpO1xuICB9XG5cbiAgbGF0ZXN0KGUpIHtcbiAgICBzdXBlci5sYXRlc3QodGhpcy5ldmVudFRvUG9pbnQoZSkpO1xuICAgIGlmICh0aGlzLnByZXZlbnREZWZhdWx0KSB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgfVxuICB9XG5cbiAgc3RhcnQoKSB7XG4gICAgc3VwZXIuc3RhcnQoKTtcbiAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcih0aGlzLm1vdmVFdmVudCwgdGhpcy5ib3VuZExhdGVzdCk7XG4gIH1cblxuICBzdG9wKCkge1xuICAgIHN1cGVyLnN0b3AoKTtcbiAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcih0aGlzLm1vdmVFdmVudCwgdGhpcy5ib3VuZExhdGVzdCk7XG4gIH1cbn1cbiJdfQ==

/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports.deactivate = exports.getTaskId = undefined;
	exports.activate = activate;
	
	var _timer = __webpack_require__(2);
	
	var _timer2 = _interopRequireDefault(_timer);
	
	var _tick = __webpack_require__(52);
	
	var _tick2 = _interopRequireDefault(_tick);
	
	var _manager = __webpack_require__(53);
	
	var _manager2 = _interopRequireDefault(_manager);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var taskStepOrder = [{ name: 'onFrameStart' }, { name: 'onUpdate' }, { name: 'willRender', decideRender: true }, { name: 'onPreRender', isRender: true }, { name: 'onRender', isRender: true }, { name: 'onPostRender', isRender: true }, { name: 'onFrameEnd' }, { name: 'onCleanup' }]; /*
	                                                                                                                                                                                                                                                                                            Core render loop
	                                                                                                                                                                                                                                                                                          
	                                                                                                                                                                                                                                                                                            Some decicisons here have been taken in the name of performance. All hail performance.
	                                                                                                                                                                                                                                                                                            (It turns out microoptimisations do matter when you have 16ms)
	                                                                                                                                                                                                                                                                                          */
	
	var numTaskSteps = taskStepOrder.length;
	
	// [boolean]: Is loop running?
	var isRunning = false;
	
	/*
	  [timestamp]: Frame timestamp
	  [int]: Time since last frame
	*/
	function fireAll(frameStamp, elapsed) {
	  var activeIds = _manager2.default.getActiveIds();
	  var activeTaskCount = activeIds.length;
	
	  for (var i = 0; i < numTaskSteps; i++) {
	    var step = taskStepOrder[i];
	
	    for (var i2 = 0; i2 < activeTaskCount; i2++) {
	      var task = _manager2.default.activeTasks[activeIds[i2]];
	      var result = false;
	
	      // Check if this task has this step, or if it's a render step that we're rendering this frame
	      if (task && task[step.name] && (!step.isRender || step.isRender && task._renderThisFrame === true)) {
	        result = task[step.name].call(task, task, frameStamp, elapsed);
	      }
	
	      // If this is a decide render step and it returns `false`, set willRender to false
	      if (step.decideRender) {
	        task._renderThisFrame = task[step.name] && result !== true ? false : true;
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
	var getTaskId = exports.getTaskId = _manager2.default.getTaskId;
	
	/*
	  [int]: task ID to activate
	  [task]: task to activate
	*/
	function activate(id, task) {
	  _manager2.default.activate(id, task);
	
	  if (!isRunning) {
	    start();
	  }
	}
	
	/*
	  [int]: task ID to deactivate
	*/
	var deactivate = exports.deactivate = _manager2.default.deactivate;
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy90YXNrL2xvb3AuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztRQWlGZ0I7O0FBM0VoQjs7OztBQUNBOzs7O0FBQ0E7Ozs7OztBQUVBLElBQU0sZ0JBQWdCLENBQ3BCLEVBQUUsTUFBTSxjQUFOLEVBRGtCLEVBRXBCLEVBQUUsTUFBTSxVQUFOLEVBRmtCLEVBR3BCLEVBQUUsTUFBTSxZQUFOLEVBQW9CLGNBQWMsSUFBZCxFQUhGLEVBSXBCLEVBQUUsTUFBTSxhQUFOLEVBQXFCLFVBQVUsSUFBVixFQUpILEVBS3BCLEVBQUUsTUFBTSxVQUFOLEVBQWtCLFVBQVUsSUFBVixFQUxBLEVBTXBCLEVBQUUsTUFBTSxjQUFOLEVBQXNCLFVBQVUsSUFBVixFQU5KLEVBT3BCLEVBQUUsTUFBTSxZQUFOLEVBUGtCLEVBUXBCLEVBQUUsTUFBTSxXQUFOLEVBUmtCLENBQWhCOzs7Ozs7O0FBVU4sSUFBTSxlQUFlLGNBQWMsTUFBZDs7O0FBR3JCLElBQUksWUFBWSxLQUFaOzs7Ozs7QUFNSixTQUFTLE9BQVQsQ0FBaUIsVUFBakIsRUFBNkIsT0FBN0IsRUFBc0M7QUFDcEMsTUFBTSxZQUFZLGtCQUFRLFlBQVIsRUFBWixDQUQ4QjtBQUVwQyxNQUFNLGtCQUFrQixVQUFVLE1BQVYsQ0FGWTs7QUFJcEMsT0FBSyxJQUFJLElBQUksQ0FBSixFQUFPLElBQUksWUFBSixFQUFrQixHQUFsQyxFQUF1QztBQUNyQyxRQUFNLE9BQU8sY0FBYyxDQUFkLENBQVAsQ0FEK0I7O0FBR3JDLFNBQUssSUFBSSxLQUFLLENBQUwsRUFBUSxLQUFLLGVBQUwsRUFBc0IsSUFBdkMsRUFBNkM7QUFDM0MsVUFBTSxPQUFPLGtCQUFRLFdBQVIsQ0FBb0IsVUFBVSxFQUFWLENBQXBCLENBQVAsQ0FEcUM7QUFFM0MsVUFBSSxTQUFTLEtBQVQ7OztBQUZ1QyxVQUt2QyxRQUFRLEtBQUssS0FBSyxJQUFMLENBQWIsS0FBNEIsQ0FBQyxLQUFLLFFBQUwsSUFBa0IsS0FBSyxRQUFMLElBQWlCLEtBQUssZ0JBQUwsS0FBMEIsSUFBMUIsQ0FBaEUsRUFBa0c7QUFDcEcsaUJBQVMsS0FBSyxLQUFLLElBQUwsQ0FBTCxDQUFnQixJQUFoQixDQUFxQixJQUFyQixFQUEyQixJQUEzQixFQUFpQyxVQUFqQyxFQUE2QyxPQUE3QyxDQUFULENBRG9HO09BQXRHOzs7QUFMMkMsVUFVdkMsS0FBSyxZQUFMLEVBQW1CO0FBQ3JCLGFBQUssZ0JBQUwsR0FBd0IsSUFBQyxDQUFLLEtBQUssSUFBTCxDQUFMLElBQW1CLFdBQVcsSUFBWCxHQUFtQixLQUF2QyxHQUErQyxJQUEvQyxDQURIO09BQXZCO0tBVkY7R0FIRjs7QUFtQkEsU0FBTyxrQkFBUSw0QkFBUixFQUFQLENBdkJvQztDQUF0Qzs7O0FBMkJBLFNBQVMsS0FBVCxDQUFlLFVBQWYsRUFBMkI7QUFDekIsa0JBQU0sTUFBTixDQUFhLFVBQWIsRUFEeUI7QUFFekIsY0FBWSxRQUFRLFVBQVIsRUFBb0IsZ0JBQU0sVUFBTixFQUFwQixDQUFaLENBRnlCOztBQUl6QixNQUFJLFNBQUosRUFBZTtBQUNiLHdCQUFLLEtBQUwsRUFEYTtHQUFmO0NBSkY7OztBQVVBLFNBQVMsS0FBVCxHQUFpQjtBQUNmLE1BQUksQ0FBQyxTQUFELEVBQVk7QUFDZCxvQkFBTSxLQUFOLEdBRGM7QUFFZCxnQkFBWSxJQUFaLENBRmM7QUFHZCx3QkFBSyxLQUFMLEVBSGM7R0FBaEI7Q0FERjs7O0FBU08sSUFBTSxnQ0FBWSxrQkFBUSxTQUFSOzs7Ozs7QUFNbEIsU0FBUyxRQUFULENBQWtCLEVBQWxCLEVBQXNCLElBQXRCLEVBQTRCO0FBQ2pDLG9CQUFRLFFBQVIsQ0FBaUIsRUFBakIsRUFBcUIsSUFBckIsRUFEaUM7O0FBR2pDLE1BQUksQ0FBQyxTQUFELEVBQVk7QUFDZCxZQURjO0dBQWhCO0NBSEs7Ozs7O0FBV0EsSUFBTSxrQ0FBYSxrQkFBUSxVQUFSIiwiZmlsZSI6Imxvb3AuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL01hdHQvU2l0ZXMvcG9wbW90aW9uIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAgQ29yZSByZW5kZXIgbG9vcFxuXG4gIFNvbWUgZGVjaWNpc29ucyBoZXJlIGhhdmUgYmVlbiB0YWtlbiBpbiB0aGUgbmFtZSBvZiBwZXJmb3JtYW5jZS4gQWxsIGhhaWwgcGVyZm9ybWFuY2UuXG4gIChJdCB0dXJucyBvdXQgbWljcm9vcHRpbWlzYXRpb25zIGRvIG1hdHRlciB3aGVuIHlvdSBoYXZlIDE2bXMpXG4qL1xuaW1wb3J0IHRpbWVyIGZyb20gJy4vdGltZXInO1xuaW1wb3J0IHRpY2sgZnJvbSAnLi90aWNrJztcbmltcG9ydCBtYW5hZ2VyIGZyb20gJy4vbWFuYWdlcic7XG5cbmNvbnN0IHRhc2tTdGVwT3JkZXIgPSBbXG4gIHsgbmFtZTogJ29uRnJhbWVTdGFydCcgfSxcbiAgeyBuYW1lOiAnb25VcGRhdGUnIH0sXG4gIHsgbmFtZTogJ3dpbGxSZW5kZXInLCBkZWNpZGVSZW5kZXI6IHRydWUgfSxcbiAgeyBuYW1lOiAnb25QcmVSZW5kZXInLCBpc1JlbmRlcjogdHJ1ZSB9LFxuICB7IG5hbWU6ICdvblJlbmRlcicsIGlzUmVuZGVyOiB0cnVlIH0sXG4gIHsgbmFtZTogJ29uUG9zdFJlbmRlcicsIGlzUmVuZGVyOiB0cnVlIH0sXG4gIHsgbmFtZTogJ29uRnJhbWVFbmQnIH0sXG4gIHsgbmFtZTogJ29uQ2xlYW51cCcgfVxuXTtcbmNvbnN0IG51bVRhc2tTdGVwcyA9IHRhc2tTdGVwT3JkZXIubGVuZ3RoO1xuXG4vLyBbYm9vbGVhbl06IElzIGxvb3AgcnVubmluZz9cbmxldCBpc1J1bm5pbmcgPSBmYWxzZTtcblxuLypcbiAgW3RpbWVzdGFtcF06IEZyYW1lIHRpbWVzdGFtcFxuICBbaW50XTogVGltZSBzaW5jZSBsYXN0IGZyYW1lXG4qL1xuZnVuY3Rpb24gZmlyZUFsbChmcmFtZVN0YW1wLCBlbGFwc2VkKSB7XG4gIGNvbnN0IGFjdGl2ZUlkcyA9IG1hbmFnZXIuZ2V0QWN0aXZlSWRzKCk7XG4gIGNvbnN0IGFjdGl2ZVRhc2tDb3VudCA9IGFjdGl2ZUlkcy5sZW5ndGg7XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBudW1UYXNrU3RlcHM7IGkrKykge1xuICAgIGNvbnN0IHN0ZXAgPSB0YXNrU3RlcE9yZGVyW2ldO1xuXG4gICAgZm9yIChsZXQgaTIgPSAwOyBpMiA8IGFjdGl2ZVRhc2tDb3VudDsgaTIrKykge1xuICAgICAgY29uc3QgdGFzayA9IG1hbmFnZXIuYWN0aXZlVGFza3NbYWN0aXZlSWRzW2kyXV07XG4gICAgICBsZXQgcmVzdWx0ID0gZmFsc2U7XG5cbiAgICAgIC8vIENoZWNrIGlmIHRoaXMgdGFzayBoYXMgdGhpcyBzdGVwLCBvciBpZiBpdCdzIGEgcmVuZGVyIHN0ZXAgdGhhdCB3ZSdyZSByZW5kZXJpbmcgdGhpcyBmcmFtZVxuICAgICAgaWYgKHRhc2sgJiYgdGFza1tzdGVwLm5hbWVdICYmICghc3RlcC5pc1JlbmRlciB8fCAoc3RlcC5pc1JlbmRlciAmJiB0YXNrLl9yZW5kZXJUaGlzRnJhbWUgPT09IHRydWUpKSkge1xuICAgICAgICByZXN1bHQgPSB0YXNrW3N0ZXAubmFtZV0uY2FsbCh0YXNrLCB0YXNrLCBmcmFtZVN0YW1wLCBlbGFwc2VkKTtcbiAgICAgIH1cblxuICAgICAgLy8gSWYgdGhpcyBpcyBhIGRlY2lkZSByZW5kZXIgc3RlcCBhbmQgaXQgcmV0dXJucyBgZmFsc2VgLCBzZXQgd2lsbFJlbmRlciB0byBmYWxzZVxuICAgICAgaWYgKHN0ZXAuZGVjaWRlUmVuZGVyKSB7XG4gICAgICAgIHRhc2suX3JlbmRlclRoaXNGcmFtZSA9ICh0YXNrW3N0ZXAubmFtZV0gJiYgcmVzdWx0ICE9PSB0cnVlKSA/IGZhbHNlIDogdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gbWFuYWdlci5nZXROb25CYWNrZ3JvdW5kUnVubmluZ0NvdW50KCk7XG59XG5cbi8vIEZ1bmN0aW9uIHRvIGZpcmUgZXZlcnkgZnJhbWVcbmZ1bmN0aW9uIGZyYW1lKGZyYW1lU3RhbXApIHtcbiAgdGltZXIudXBkYXRlKGZyYW1lU3RhbXApO1xuICBpc1J1bm5pbmcgPSBmaXJlQWxsKGZyYW1lU3RhbXAsIHRpbWVyLmdldEVsYXBzZWQoKSk7XG5cbiAgaWYgKGlzUnVubmluZykge1xuICAgIHRpY2soZnJhbWUpO1xuICB9XG59XG5cbi8vIFN0YXJ0IGxvb3BcbmZ1bmN0aW9uIHN0YXJ0KCkge1xuICBpZiAoIWlzUnVubmluZykge1xuICAgIHRpbWVyLnN0YXJ0KCk7XG4gICAgaXNSdW5uaW5nID0gdHJ1ZTtcbiAgICB0aWNrKGZyYW1lKTtcbiAgfVxufVxuXG4vLyBFeHBvcnRzXG5leHBvcnQgY29uc3QgZ2V0VGFza0lkID0gbWFuYWdlci5nZXRUYXNrSWQ7XG5cbi8qXG4gIFtpbnRdOiB0YXNrIElEIHRvIGFjdGl2YXRlXG4gIFt0YXNrXTogdGFzayB0byBhY3RpdmF0ZVxuKi9cbmV4cG9ydCBmdW5jdGlvbiBhY3RpdmF0ZShpZCwgdGFzaykge1xuICBtYW5hZ2VyLmFjdGl2YXRlKGlkLCB0YXNrKTtcblxuICBpZiAoIWlzUnVubmluZykge1xuICAgIHN0YXJ0KCk7XG4gIH1cbn1cblxuLypcbiAgW2ludF06IHRhc2sgSUQgdG8gZGVhY3RpdmF0ZVxuKi9cbmV4cG9ydCBjb25zdCBkZWFjdGl2YXRlID0gbWFuYWdlci5kZWFjdGl2YXRlOyJdfQ==

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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hZGFwdGVyL2Nzcy9zdGF0ZS1tYXAuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsSUFBTSxZQUFZLFdBQVo7O2tCQUVTO0FBQ2IsS0FBRyxZQUFZLEdBQVo7QUFDSCxLQUFHLFlBQVksR0FBWjtBQUNILEtBQUcsWUFBWSxHQUFaIiwiZmlsZSI6InN0YXRlLW1hcC5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvTWF0dC9TaXRlcy9wb3Btb3Rpb24iLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBUUkFOU0xBVEUgPSAndHJhbnNsYXRlJztcblxuZXhwb3J0IGRlZmF1bHQge1xuICB4OiBUUkFOU0xBVEUgKyAnWCcsXG4gIHk6IFRSQU5TTEFURSArICdZJyxcbiAgejogVFJBTlNMQVRFICsgJ1onXG59OyJdfQ==

/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _angle = __webpack_require__(23);
	
	var _angle2 = _interopRequireDefault(_angle);
	
	var _alpha = __webpack_require__(22);
	
	var _alpha2 = _interopRequireDefault(_alpha);
	
	var _color = __webpack_require__(24);
	
	var _color2 = _interopRequireDefault(_color);
	
	var _scale = __webpack_require__(30);
	
	var _scale2 = _interopRequireDefault(_scale);
	
	var _shadow = __webpack_require__(31);
	
	var _shadow2 = _interopRequireDefault(_shadow);
	
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
	  width: _px2.default,
	  height: _px2.default,
	
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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hZGFwdGVyL2Nzcy92YWx1ZS10eXBlLW1hcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7a0JBRWU7O0FBRWIsd0JBRmE7QUFHYixrQ0FIYTtBQUliLCtCQUphO0FBS2IsdUJBTGE7QUFNYix5QkFOYTs7O0FBU2IsOEJBVGE7QUFVYixpQ0FWYTtBQVdiLG1DQVhhO0FBWWIsb0NBWmE7QUFhYixrQ0FiYTtBQWNiLDRCQWRhOzs7QUFpQmIscUJBakJhO0FBa0JiLHNCQWxCYTs7O0FBcUJiLDhCQXJCYTtBQXNCYiw2QkF0QmE7OztBQXlCYix5QkF6QmE7QUEwQmIsMEJBMUJhO0FBMkJiLDBCQTNCYTtBQTRCYiwwQkE1QmE7QUE2QmIsd0JBN0JhO0FBOEJiLHlCQTlCYTtBQStCYix5QkEvQmE7QUFnQ2IseUJBaENhO0FBaUNiLHdCQWpDYTtBQWtDYix3QkFsQ2E7QUFtQ2Isd0JBbkNhO0FBb0NiLDBCQXBDYTtBQXFDYiwwQkFyQ2E7QUFzQ2IsMEJBdENhO0FBdUNiLDJCQXZDYTtBQXdDYiwwQkF4Q2EiLCJmaWxlIjoidmFsdWUtdHlwZS1tYXAuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL01hdHQvU2l0ZXMvcG9wbW90aW9uIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGFuZ2xlIGZyb20gJy4uLy4uL3ZhbHVlLXR5cGVzL2FuZ2xlJztcbmltcG9ydCBhbHBoYSBmcm9tICcuLi8uLi92YWx1ZS10eXBlcy9hbHBoYSc7XG5pbXBvcnQgY29sb3IgZnJvbSAnLi4vLi4vdmFsdWUtdHlwZXMvY29sb3InO1xuaW1wb3J0IHNjYWxlIGZyb20gJy4uLy4uL3ZhbHVlLXR5cGVzL3NjYWxlJztcbmltcG9ydCBzaGFkb3cgZnJvbSAnLi4vLi4vdmFsdWUtdHlwZXMvc2hhZG93JztcbmltcG9ydCBweCBmcm9tICcuLi8uLi92YWx1ZS10eXBlcy9weCc7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgLy8gQ29sb3IgcHJvcHNcbiAgY29sb3I6IGNvbG9yLFxuICBiYWNrZ3JvdW5kQ29sb3I6IGNvbG9yLFxuICBvdXRsaW5lQ29sb3I6IGNvbG9yLFxuICBmaWxsOiBjb2xvcixcbiAgc3Ryb2tlOiBjb2xvcixcblxuICAvLyBCb3JkZXIgcHJvcHNcbiAgYm9yZGVyQ29sb3I6IGNvbG9yLFxuICBib3JkZXJUb3BDb2xvcjogY29sb3IsXG4gIGJvcmRlclJpZ2h0Q29sb3I6IGNvbG9yLFxuICBib3JkZXJCb3R0b21Db2xvcjogY29sb3IsXG4gIGJvcmRlckxlZnRDb2xvcjogY29sb3IsXG4gIGJvcmRlclJhZGl1czogcHgsXG5cbiAgLy8gUG9zaXRpb25pbmdcbiAgd2lkdGg6IHB4LFxuICBoZWlnaHQ6IHB4LFxuXG4gIC8vIFNoYWRvd3NcbiAgdGV4dFNoYWRvdzogc2hhZG93LFxuICBib3hTaGFkb3c6IHNoYWRvdywgICBcblxuICAvLyBUcmFuc2Zvcm0gcHJvcGVydGllc1xuICByb3RhdGU6IGFuZ2xlLFxuICByb3RhdGVYOiBhbmdsZSxcbiAgcm90YXRlWTogYW5nbGUsXG4gIHJvdGF0ZVo6IGFuZ2xlLFxuICBzY2FsZTogc2NhbGUsXG4gIHNjYWxlWDogc2NhbGUsXG4gIHNjYWxlWTogc2NhbGUsXG4gIHNjYWxlWjogc2NhbGUsXG4gIHNrZXdYOiBhbmdsZSxcbiAgc2tld1k6IGFuZ2xlLFxuICBkaXN0YW5jZTogcHgsXG4gIHRyYW5zbGF0ZVg6IHB4LFxuICB0cmFuc2xhdGVZOiBweCxcbiAgdHJhbnNsYXRlWjogcHgsXG4gIHBlcnNwZWN0aXZlOiBweCxcbiAgb3BhY2l0eTogYWxwaGFcbn07Il19

/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _transformProps = __webpack_require__(44);
	
	var _transformProps2 = _interopRequireDefault(_transformProps);
	
	var _prefixer = __webpack_require__(43);
	
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
	        propertyString += ';' + (0, _prefixer2.default)(key, true) + ':' + value;
	      }
	    }
	  }
	
	  if (transformString !== '') {
	    if (!transformHasZ && !disableHardwareAcceleration) {
	      transformString += TRANSLATE_Z + '(0px)';
	    }
	
	    propertyString += ';' + (0, _prefixer2.default)('transform', true) + ':' + transformString;
	  }
	
	  return propertyString;
	};
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hZGFwdGVyL2Nzcy9idWlsZC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUE7Ozs7QUFDQTs7Ozs7O0FBRUEsSUFBTSxjQUFjLFlBQWQ7O2tCQUVTLFVBQUMsS0FBRCxFQUFRLDJCQUFSLEVBQXdDO0FBQ3JELE1BQUksaUJBQWlCLEVBQWpCLENBRGlEO0FBRXJELE1BQUksa0JBQWtCLEVBQWxCLENBRmlEO0FBR3JELE1BQUksZ0JBQWdCLEtBQWhCLENBSGlEOztBQUtyRCxPQUFLLElBQUksR0FBSixJQUFXLEtBQWhCLEVBQXVCO0FBQ3JCLFFBQUksTUFBTSxjQUFOLENBQXFCLEdBQXJCLENBQUosRUFBK0I7QUFDN0IsVUFBTSxRQUFRLE1BQU0sR0FBTixDQUFSLENBRHVCOztBQUc3QixVQUFJLHlCQUFlLEdBQWYsQ0FBSixFQUF5QjtBQUN2QiwyQkFBbUIsTUFBTSxHQUFOLEdBQVksS0FBWixHQUFvQixJQUFwQixDQURJO0FBRXZCLHdCQUFnQixHQUFDLEtBQVEsV0FBUixHQUF1QixJQUF4QixHQUErQixhQUEvQixDQUZPO09BQXpCLE1BSU87QUFDTCwwQkFBa0IsTUFBTSx3QkFBUyxHQUFULEVBQWMsSUFBZCxDQUFOLEdBQTRCLEdBQTVCLEdBQWtDLEtBQWxDLENBRGI7T0FKUDtLQUhGO0dBREY7O0FBY0EsTUFBSSxvQkFBb0IsRUFBcEIsRUFBd0I7QUFDMUIsUUFBSSxDQUFDLGFBQUQsSUFBa0IsQ0FBQywyQkFBRCxFQUE4QjtBQUNsRCx5QkFBbUIsY0FBYyxPQUFkLENBRCtCO0tBQXBEOztBQUlBLHNCQUFrQixNQUFNLHdCQUFTLFdBQVQsRUFBc0IsSUFBdEIsQ0FBTixHQUFvQyxHQUFwQyxHQUEwQyxlQUExQyxDQUxRO0dBQTVCOztBQVFBLFNBQU8sY0FBUCxDQTNCcUQ7Q0FBeEMiLCJmaWxlIjoiYnVpbGQuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL01hdHQvU2l0ZXMvcG9wbW90aW9uIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHRyYW5zZm9ybVByb3BzIGZyb20gJy4vdHJhbnNmb3JtLXByb3BzJztcbmltcG9ydCBwcmVmaXhlciBmcm9tICcuL3ByZWZpeGVyJztcblxuY29uc3QgVFJBTlNMQVRFX1ogPSAndHJhbnNsYXRlWic7XG5cbmV4cG9ydCBkZWZhdWx0IChzdGF0ZSwgZGlzYWJsZUhhcmR3YXJlQWNjZWxlcmF0aW9uKSA9PiB7XG4gIGxldCBwcm9wZXJ0eVN0cmluZyA9ICcnO1xuICBsZXQgdHJhbnNmb3JtU3RyaW5nID0gJyc7XG4gIGxldCB0cmFuc2Zvcm1IYXNaID0gZmFsc2U7XG5cbiAgZm9yIChsZXQga2V5IGluIHN0YXRlKSB7XG4gICAgaWYgKHN0YXRlLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgIGNvbnN0IHZhbHVlID0gc3RhdGVba2V5XTtcblxuICAgICAgaWYgKHRyYW5zZm9ybVByb3BzW2tleV0pIHtcbiAgICAgICAgdHJhbnNmb3JtU3RyaW5nICs9IGtleSArICcoJyArIHZhbHVlICsgJykgJztcbiAgICAgICAgdHJhbnNmb3JtSGFzWiA9IChrZXkgPT09IFRSQU5TTEFURV9aKSA/IHRydWUgOiB0cmFuc2Zvcm1IYXNaO1xuXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBwcm9wZXJ0eVN0cmluZyArPSAnOycgKyBwcmVmaXhlcihrZXksIHRydWUpICsgJzonICsgdmFsdWU7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgaWYgKHRyYW5zZm9ybVN0cmluZyAhPT0gJycpIHtcbiAgICBpZiAoIXRyYW5zZm9ybUhhc1ogJiYgIWRpc2FibGVIYXJkd2FyZUFjY2VsZXJhdGlvbikge1xuICAgICAgdHJhbnNmb3JtU3RyaW5nICs9IFRSQU5TTEFURV9aICsgJygwcHgpJztcbiAgICB9XG5cbiAgICBwcm9wZXJ0eVN0cmluZyArPSAnOycgKyBwcmVmaXhlcigndHJhbnNmb3JtJywgdHJ1ZSkgKyAnOicgKyB0cmFuc2Zvcm1TdHJpbmc7XG4gIH1cblxuICByZXR1cm4gcHJvcGVydHlTdHJpbmc7XG59OyJdfQ==

/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _utils = __webpack_require__(21);
	
	var camelCache = {};
	var dashCache = {};
	var prefixes = ['Webkit', 'Moz', 'O', 'ms', ''];
	var numPrefixes = prefixes.length;
	var testElement = void 0;
	
	/*
	  Test style property for prefixed version
	  
	  @param [string]: Style property
	  @return [string]: Cached property name
	*/
	var testPrefix = function (key) {
	  testElement = testElement || document.createElement('div');
	
	  for (var i = 0; i < numPrefixes; i++) {
	    var prefix = prefixes[i];
	    var noPrefix = prefix === '';
	    var prefixedPropertyName = noPrefix ? key : prefix + key.charAt(0).toUpperCase() + key.slice(1);
	
	    if (prefixedPropertyName in testElement.style) {
	      camelCache[key] = prefixedPropertyName;
	      dashCache[key] = '' + (noPrefix ? '' : '-') + (0, _utils.camelToDash)(prefixedPropertyName);
	    }
	  }
	};
	
	exports.default = function (key, asDashCase) {
	  var cache = asDashCase ? dashCache : camelCache;
	
	  if (!cache[key]) {
	    testPrefix(key);
	  }
	
	  return cache[key];
	};
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hZGFwdGVyL2Nzcy9wcmVmaXhlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUE7O0FBRUEsSUFBTSxhQUFhLEVBQWI7QUFDTixJQUFNLFlBQVksRUFBWjtBQUNOLElBQU0sV0FBVyxDQUFDLFFBQUQsRUFBVSxLQUFWLEVBQWdCLEdBQWhCLEVBQW9CLElBQXBCLEVBQTBCLEVBQTFCLENBQVg7QUFDTixJQUFNLGNBQWMsU0FBUyxNQUFUO0FBQ3BCLElBQUksb0JBQUo7Ozs7Ozs7O0FBUUEsSUFBTSxhQUFhLFVBQUMsR0FBRCxFQUFTO0FBQzFCLGdCQUFjLGVBQWUsU0FBUyxhQUFULENBQXVCLEtBQXZCLENBQWYsQ0FEWTs7QUFHMUIsT0FBSyxJQUFJLElBQUksQ0FBSixFQUFPLElBQUksV0FBSixFQUFpQixHQUFqQyxFQUFzQztBQUNwQyxRQUFNLFNBQVMsU0FBUyxDQUFULENBQVQsQ0FEOEI7QUFFcEMsUUFBTSxXQUFZLFdBQVcsRUFBWCxDQUZrQjtBQUdwQyxRQUFNLHVCQUF1QixXQUFXLEdBQVgsR0FBaUIsU0FBUyxJQUFJLE1BQUosQ0FBVyxDQUFYLEVBQWMsV0FBZCxFQUFULEdBQXVDLElBQUksS0FBSixDQUFVLENBQVYsQ0FBdkMsQ0FIVjs7QUFLcEMsUUFBSSx3QkFBd0IsWUFBWSxLQUFaLEVBQW1CO0FBQzdDLGlCQUFXLEdBQVgsSUFBa0Isb0JBQWxCLENBRDZDO0FBRTdDLGdCQUFVLEdBQVYsVUFBcUIsV0FBVyxFQUFYLEdBQWdCLEdBQWhCLElBQXVCLHdCQUFZLG9CQUFaLENBQTVDLENBRjZDO0tBQS9DO0dBTEY7Q0FIaUI7O2tCQWVKLFVBQUMsR0FBRCxFQUFNLFVBQU4sRUFBcUI7QUFDbEMsTUFBTSxRQUFRLGFBQWEsU0FBYixHQUF5QixVQUF6QixDQURvQjs7QUFHbEMsTUFBSSxDQUFDLE1BQU0sR0FBTixDQUFELEVBQWE7QUFDZixlQUFXLEdBQVgsRUFEZTtHQUFqQjs7QUFJQSxTQUFPLE1BQU0sR0FBTixDQUFQLENBUGtDO0NBQXJCIiwiZmlsZSI6InByZWZpeGVyLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9NYXR0L1NpdGVzL3BvcG1vdGlvbiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNhbWVsVG9EYXNoIH0gZnJvbSAnLi4vLi4vaW5jL3V0aWxzJztcblxuY29uc3QgY2FtZWxDYWNoZSA9IHt9O1xuY29uc3QgZGFzaENhY2hlID0ge307XG5jb25zdCBwcmVmaXhlcyA9IFsnV2Via2l0JywnTW96JywnTycsJ21zJywgJyddO1xuY29uc3QgbnVtUHJlZml4ZXMgPSBwcmVmaXhlcy5sZW5ndGg7XG5sZXQgdGVzdEVsZW1lbnQ7XG5cbi8qXG4gIFRlc3Qgc3R5bGUgcHJvcGVydHkgZm9yIHByZWZpeGVkIHZlcnNpb25cbiAgXG4gIEBwYXJhbSBbc3RyaW5nXTogU3R5bGUgcHJvcGVydHlcbiAgQHJldHVybiBbc3RyaW5nXTogQ2FjaGVkIHByb3BlcnR5IG5hbWVcbiovXG5jb25zdCB0ZXN0UHJlZml4ID0gKGtleSkgPT4ge1xuICB0ZXN0RWxlbWVudCA9IHRlc3RFbGVtZW50IHx8IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbnVtUHJlZml4ZXM7IGkrKykge1xuICAgIGNvbnN0IHByZWZpeCA9IHByZWZpeGVzW2ldO1xuICAgIGNvbnN0IG5vUHJlZml4ID0gKHByZWZpeCA9PT0gJycpO1xuICAgIGNvbnN0IHByZWZpeGVkUHJvcGVydHlOYW1lID0gbm9QcmVmaXggPyBrZXkgOiBwcmVmaXggKyBrZXkuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyBrZXkuc2xpY2UoMSk7XG5cbiAgICBpZiAocHJlZml4ZWRQcm9wZXJ0eU5hbWUgaW4gdGVzdEVsZW1lbnQuc3R5bGUpIHtcbiAgICAgIGNhbWVsQ2FjaGVba2V5XSA9IHByZWZpeGVkUHJvcGVydHlOYW1lO1xuICAgICAgZGFzaENhY2hlW2tleV0gPSBgJHsobm9QcmVmaXggPyAnJyA6ICctJyl9JHtjYW1lbFRvRGFzaChwcmVmaXhlZFByb3BlcnR5TmFtZSl9YDtcbiAgICB9XG4gIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IChrZXksIGFzRGFzaENhc2UpID0+IHtcbiAgY29uc3QgY2FjaGUgPSBhc0Rhc2hDYXNlID8gZGFzaENhY2hlIDogY2FtZWxDYWNoZTtcblxuICBpZiAoIWNhY2hlW2tleV0pIHtcbiAgICB0ZXN0UHJlZml4KGtleSk7XG4gIH1cblxuICByZXR1cm4gY2FjaGVba2V5XTtcbn07XG4iXX0=

/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _dictionary = __webpack_require__(49);
	
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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hZGFwdGVyL2Nzcy90cmFuc2Zvcm0tcHJvcHMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBOztBQUVBLElBQUksaUJBQWlCLEVBQWpCOztBQUVKLElBQU0sUUFBUSxPQUFSO0FBQ04sSUFBTSxTQUFTLFFBQVQ7QUFDTixJQUFNLHdCQUF3QixzQkFBeEI7QUFDTixJQUFNLFFBQVEsQ0FBQyxXQUFELEVBQWMsS0FBZCxFQUFxQixNQUFyQixFQUE2QixNQUE3QixFQUFxQyxxQkFBckMsQ0FBUjs7QUFFTixlQUFlLE1BQWYsSUFBeUIsZUFBZSxLQUFmLElBQXdCLGVBQWUscUJBQWYsSUFBd0MsSUFBeEM7O0FBRWpELE1BQU0sT0FBTixDQUFjLFVBQUMsSUFBRDtTQUFVLGlCQUFLLE9BQUwsQ0FBYSxVQUFDLElBQUQ7V0FBVSxlQUFlLE9BQU8sSUFBUCxDQUFmLEdBQThCLElBQTlCO0dBQVY7Q0FBdkIsQ0FBZDs7a0JBRWUiLCJmaWxlIjoidHJhbnNmb3JtLXByb3BzLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9NYXR0L1NpdGVzL3BvcG1vdGlvbiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGF4ZXMgfSBmcm9tICcuLi8uLi92YWx1ZS10eXBlcy9zZXR0aW5ncy9kaWN0aW9uYXJ5JztcblxubGV0IHRyYW5zZm9ybVByb3BzID0ge307XG5cbmNvbnN0IFNDQUxFID0gJ3NjYWxlJztcbmNvbnN0IFJPVEFURSA9ICdyb3RhdGUnO1xuY29uc3QgVFJBTlNGT1JNX1BFUlNQRUNUSVZFID0gJ3RyYW5zZm9ybVBlcnNwZWN0aXZlJztcbmNvbnN0IFRFUk1TID0gWyd0cmFuc2xhdGUnLCBTQ0FMRSwgUk9UQVRFLCAnc2tldycsIFRSQU5TRk9STV9QRVJTUEVDVElWRV07XG5cbnRyYW5zZm9ybVByb3BzW1JPVEFURV0gPSB0cmFuc2Zvcm1Qcm9wc1tTQ0FMRV0gPSB0cmFuc2Zvcm1Qcm9wc1tUUkFOU0ZPUk1fUEVSU1BFQ1RJVkVdID0gdHJ1ZTtcblxuVEVSTVMuZm9yRWFjaCgodGVybSkgPT4gYXhlcy5mb3JFYWNoKChheGlzKSA9PiB0cmFuc2Zvcm1Qcm9wc1t0ZXJtICsgYXhpc10gPSB0cnVlKSk7XG5cbmV4cG9ydCBkZWZhdWx0IHRyYW5zZm9ybVByb3BzOyJdfQ==

/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _alpha = __webpack_require__(22);
	
	var _alpha2 = _interopRequireDefault(_alpha);
	
	var _color = __webpack_require__(24);
	
	var _color2 = _interopRequireDefault(_color);
	
	var _complex = __webpack_require__(25);
	
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
	  d: _complex2.default,
	  points: _complex2.default,
	  opacity: _alpha2.default,
	  fillOpacity: _alpha2.default,
	  strokeOpacity: _alpha2.default
	};
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hZGFwdGVyL3N2Zy92YWx1ZS10eXBlLW1hcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7OztrQkFFZTtBQUNiLHVCQURhO0FBRWIseUJBRmE7QUFHYix3QkFIYTtBQUliLHlCQUphO0FBS2IseUJBTGE7QUFNYixzQkFOYTtBQU9iLDJCQVBhO0FBUWIsMEJBUmE7QUFTYiw4QkFUYTtBQVViLGdDQVZhIiwiZmlsZSI6InZhbHVlLXR5cGUtbWFwLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9NYXR0L1NpdGVzL3BvcG1vdGlvbiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBhbHBoYSBmcm9tICcuLi8uLi92YWx1ZS10eXBlcy9hbHBoYSc7XG5pbXBvcnQgY29sb3IgZnJvbSAnLi4vLi4vdmFsdWUtdHlwZXMvY29sb3InO1xuaW1wb3J0IGNvbXBsZXggZnJvbSAnLi4vLi4vdmFsdWUtdHlwZXMvY29tcGxleCc7XG5pbXBvcnQgc2NhbGUgZnJvbSAnLi4vLi4vdmFsdWUtdHlwZXMvc2NhbGUnO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGZpbGw6IGNvbG9yLFxuICBzdHJva2U6IGNvbG9yLFxuICBzY2FsZTogc2NhbGUsXG4gIHNjYWxlWDogc2NhbGUsXG4gIHNjYWxlWTogc2NhbGUsXG4gIGQ6IGNvbXBsZXgsXG4gIHBvaW50czogY29tcGxleCxcbiAgb3BhY2l0eTogYWxwaGEsXG4gIGZpbGxPcGFjaXR5OiBhbHBoYSxcbiAgc3Ryb2tlT3BhY2l0eTogYWxwaGFcbn07Il19

/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports.default = build;
	
	var _utils = __webpack_require__(21);
	
	var _transformProps = __webpack_require__(44);
	
	var _transformProps2 = _interopRequireDefault(_transformProps);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var ZERO_NOT_ZERO = 0.0001;
	
	function build(state, data) {
	  var hasTransform = false;
	  var props = {};
	  var scale = state.scale !== undefined ? state.scale || ZERO_NOT_ZERO : state.scaleX || 1;
	  var scaleY = state.scaleY !== undefined ? state.scaleY || ZERO_NOT_ZERO : scale || 1;
	  var transformOriginX = data.width * ((state.originX || 50) / 100) + data.x;
	  var transformOriginY = data.height * ((state.originY || 50) / 100) + data.y;
	  var scaleTransformX = -transformOriginX * (scale * 1);
	  var scaleTransformY = -transformOriginY * (scaleY * 1);
	  var scaleReplaceX = transformOriginX / scale;
	  var scaleReplaceY = transformOriginY / scaleY;
	  var transform = {
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
	
	    for (var _key in transform) {
	      if (transform.hasOwnProperty(_key)) {
	        var defaultValue = _key === 'scale' ? '1' : '0';
	        props.transform += transform[_key].replace(/undefined/g, defaultValue);
	      }
	    }
	  }
	
	  return props;
	}
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hZGFwdGVyL3N2Zy9idWlsZC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7a0JBS3dCOztBQUx4Qjs7QUFDQTs7Ozs7O0FBRUEsSUFBTSxnQkFBZ0IsTUFBaEI7O0FBRVMsU0FBUyxLQUFULENBQWUsS0FBZixFQUFzQixJQUF0QixFQUE0QjtBQUN6QyxNQUFJLGVBQWUsS0FBZixDQURxQztBQUV6QyxNQUFNLFFBQVEsRUFBUixDQUZtQztBQUd6QyxNQUFNLFFBQVEsTUFBTSxLQUFOLEtBQWdCLFNBQWhCLEdBQTRCLE1BQU0sS0FBTixJQUFlLGFBQWYsR0FBK0IsTUFBTSxNQUFOLElBQWdCLENBQWhCLENBSGhDO0FBSXpDLE1BQU0sU0FBUyxNQUFNLE1BQU4sS0FBaUIsU0FBakIsR0FBNkIsTUFBTSxNQUFOLElBQWdCLGFBQWhCLEdBQWdDLFNBQVMsQ0FBVCxDQUpuQztBQUt6QyxNQUFNLG1CQUFtQixLQUFLLEtBQUwsSUFBYyxDQUFDLE1BQU0sT0FBTixJQUFpQixFQUFqQixDQUFELEdBQXdCLEdBQXhCLENBQWQsR0FBNkMsS0FBSyxDQUFMLENBTDdCO0FBTXpDLE1BQU0sbUJBQW1CLEtBQUssTUFBTCxJQUFlLENBQUMsTUFBTSxPQUFOLElBQWlCLEVBQWpCLENBQUQsR0FBd0IsR0FBeEIsQ0FBZixHQUE4QyxLQUFLLENBQUwsQ0FOOUI7QUFPekMsTUFBTSxrQkFBa0IsQ0FBRSxnQkFBRixJQUFzQixRQUFRLENBQVIsQ0FBdEIsQ0FQaUI7QUFRekMsTUFBTSxrQkFBa0IsQ0FBRSxnQkFBRixJQUFzQixTQUFTLENBQVQsQ0FBdEIsQ0FSaUI7QUFTekMsTUFBTSxnQkFBZ0IsbUJBQW1CLEtBQW5CLENBVG1CO0FBVXpDLE1BQU0sZ0JBQWdCLG1CQUFtQixNQUFuQixDQVZtQjtBQVd6QyxNQUFNLFlBQVk7QUFDaEIsOEJBQXdCLE1BQU0sVUFBTixVQUFxQixNQUFNLFVBQU4sT0FBN0M7QUFDQSwwQkFBb0IseUJBQW9CLCtCQUEwQixlQUFVLDBCQUFxQix1QkFBa0Isb0JBQW5IO0FBQ0Esd0JBQWtCLE1BQU0sTUFBTixVQUFpQiwwQkFBcUIsdUJBQXhEO0FBQ0Esc0JBQWdCLE1BQU0sS0FBTixPQUFoQjtBQUNBLHNCQUFnQixNQUFNLEtBQU4sT0FBaEI7R0FMSSxDQVhtQzs7QUFtQnpDLE9BQUssSUFBSSxHQUFKLElBQVcsS0FBaEIsRUFBdUI7QUFDckIsUUFBSSxNQUFNLGNBQU4sQ0FBcUIsR0FBckIsQ0FBSixFQUErQjtBQUM3QixVQUFJLHlCQUFlLEdBQWYsQ0FBSixFQUF5QjtBQUN2Qix1QkFBZSxJQUFmLENBRHVCO09BQXpCLE1BRU87QUFDTCxjQUFNLHdCQUFZLEdBQVosQ0FBTixJQUEwQixNQUFNLEdBQU4sQ0FBMUIsQ0FESztPQUZQO0tBREY7R0FERjs7QUFVQSxNQUFJLFlBQUosRUFBa0I7QUFDaEIsVUFBTSxTQUFOLEdBQWtCLEVBQWxCLENBRGdCOztBQUdoQixTQUFLLElBQUksSUFBSixJQUFXLFNBQWhCLEVBQTJCO0FBQ3pCLFVBQUksVUFBVSxjQUFWLENBQXlCLElBQXpCLENBQUosRUFBbUM7QUFDakMsWUFBTSxlQUFlLElBQUMsS0FBUSxPQUFSLEdBQW1CLEdBQXBCLEdBQTBCLEdBQTFCLENBRFk7QUFFakMsY0FBTSxTQUFOLElBQW1CLFVBQVUsSUFBVixFQUFlLE9BQWYsQ0FBdUIsWUFBdkIsRUFBcUMsWUFBckMsQ0FBbkIsQ0FGaUM7T0FBbkM7S0FERjtHQUhGOztBQVdBLFNBQU8sS0FBUCxDQXhDeUM7Q0FBNUIiLCJmaWxlIjoiYnVpbGQuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL01hdHQvU2l0ZXMvcG9wbW90aW9uIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY2FtZWxUb0Rhc2ggfSBmcm9tICcuLi8uLi9pbmMvdXRpbHMnO1xuaW1wb3J0IHRyYW5zZm9ybVByb3BzIGZyb20gJy4uL2Nzcy90cmFuc2Zvcm0tcHJvcHMnO1xuXG5jb25zdCBaRVJPX05PVF9aRVJPID0gMC4wMDAxO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBidWlsZChzdGF0ZSwgZGF0YSkge1xuICBsZXQgaGFzVHJhbnNmb3JtID0gZmFsc2U7XG4gIGNvbnN0IHByb3BzID0ge307XG4gIGNvbnN0IHNjYWxlID0gc3RhdGUuc2NhbGUgIT09IHVuZGVmaW5lZCA/IHN0YXRlLnNjYWxlIHx8IFpFUk9fTk9UX1pFUk8gOiBzdGF0ZS5zY2FsZVggfHwgMTtcbiAgY29uc3Qgc2NhbGVZID0gc3RhdGUuc2NhbGVZICE9PSB1bmRlZmluZWQgPyBzdGF0ZS5zY2FsZVkgfHwgWkVST19OT1RfWkVSTyA6IHNjYWxlIHx8IDE7XG4gIGNvbnN0IHRyYW5zZm9ybU9yaWdpblggPSBkYXRhLndpZHRoICogKChzdGF0ZS5vcmlnaW5YIHx8IDUwKSAvIDEwMCkgKyBkYXRhLng7XG4gIGNvbnN0IHRyYW5zZm9ybU9yaWdpblkgPSBkYXRhLmhlaWdodCAqICgoc3RhdGUub3JpZ2luWSB8fCA1MCkgLyAxMDApICsgZGF0YS55O1xuICBjb25zdCBzY2FsZVRyYW5zZm9ybVggPSAtIHRyYW5zZm9ybU9yaWdpblggKiAoc2NhbGUgKiAxKTtcbiAgY29uc3Qgc2NhbGVUcmFuc2Zvcm1ZID0gLSB0cmFuc2Zvcm1PcmlnaW5ZICogKHNjYWxlWSAqIDEpO1xuICBjb25zdCBzY2FsZVJlcGxhY2VYID0gdHJhbnNmb3JtT3JpZ2luWCAvIHNjYWxlO1xuICBjb25zdCBzY2FsZVJlcGxhY2VZID0gdHJhbnNmb3JtT3JpZ2luWSAvIHNjYWxlWTtcbiAgY29uc3QgdHJhbnNmb3JtID0ge1xuICAgIHRyYW5zbGF0ZTogYHRyYW5zbGF0ZSgke3N0YXRlLnRyYW5zbGF0ZVh9LCAke3N0YXRlLnRyYW5zbGF0ZVl9KSBgLFxuICAgIHNjYWxlOiBgdHJhbnNsYXRlKCR7c2NhbGVUcmFuc2Zvcm1YfSwgJHtzY2FsZVRyYW5zZm9ybVl9KSBzY2FsZSgke3NjYWxlfSwgJHtzY2FsZVl9KSB0cmFuc2xhdGUoJHtzY2FsZVJlcGxhY2VYfSwgJHtzY2FsZVJlcGxhY2VZfSkgYCxcbiAgICByb3RhdGU6IGByb3RhdGUoJHtzdGF0ZS5yb3RhdGV9LCAke3RyYW5zZm9ybU9yaWdpblh9LCAke3RyYW5zZm9ybU9yaWdpbll9KSBgLFxuICAgIHNrZXdYOiBgc2tld1goJHtzdGF0ZS5za2V3WH0pIGAsXG4gICAgc2tld1k6IGBza2V3WSgke3N0YXRlLnNrZXdZfSkgYFxuICB9O1xuXG4gIGZvciAobGV0IGtleSBpbiBzdGF0ZSkge1xuICAgIGlmIChzdGF0ZS5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICBpZiAodHJhbnNmb3JtUHJvcHNba2V5XSkge1xuICAgICAgICBoYXNUcmFuc2Zvcm0gPSB0cnVlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcHJvcHNbY2FtZWxUb0Rhc2goa2V5KV0gPSBzdGF0ZVtrZXldO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGlmIChoYXNUcmFuc2Zvcm0pIHtcbiAgICBwcm9wcy50cmFuc2Zvcm0gPSAnJztcblxuICAgIGZvciAobGV0IGtleSBpbiB0cmFuc2Zvcm0pIHtcbiAgICAgIGlmICh0cmFuc2Zvcm0uaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICBjb25zdCBkZWZhdWx0VmFsdWUgPSAoa2V5ID09PSAnc2NhbGUnKSA/ICcxJyA6ICcwJztcbiAgICAgICAgcHJvcHMudHJhbnNmb3JtICs9IHRyYW5zZm9ybVtrZXldLnJlcGxhY2UoL3VuZGVmaW5lZC9nLCBkZWZhdWx0VmFsdWUpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBwcm9wcztcbn0iXX0=

/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	/*
	  Convert percentage to pixels
	  
	  @param [number]: Percentage of total length
	  @param [number]: Total length
	*/
	var percentToPixels = function (percent, length) {
	  return parseFloat(percent) / 100 * length + 'px';
	};
	
	exports.default = function (state, length) {
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
	};
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hZGFwdGVyL3N2Zy1wYXRoL2J1aWxkLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQU1BLElBQU0sa0JBQWtCLFVBQUMsT0FBRCxFQUFVLE1BQVY7U0FBcUIsVUFBQyxDQUFXLE9BQVgsSUFBc0IsR0FBdEIsR0FBNkIsTUFBOUIsR0FBdUMsSUFBdkM7Q0FBckI7O2tCQUVULFVBQUMsS0FBRCxFQUFRLE1BQVIsRUFBbUI7QUFDaEMsTUFBTSxTQUFTLEVBQVQsQ0FEMEI7QUFFaEMsTUFBTSxrQkFBa0I7QUFDdEIsWUFBUSxDQUFSO0FBQ0EsYUFBUyxTQUFTLElBQVQ7R0FGTCxDQUYwQjtBQU1oQyxNQUFJLGVBQWUsS0FBZixDQU40Qjs7QUFRaEMsT0FBSyxJQUFJLEdBQUosSUFBVyxLQUFoQixFQUF1QjtBQUNyQixRQUFJLE1BQU0sY0FBTixDQUFxQixHQUFyQixDQUFKLEVBQStCO0FBQzdCLFVBQU0sUUFBUSxNQUFNLEdBQU4sQ0FBUixDQUR1Qjs7QUFHN0IsY0FBUSxHQUFSO0FBQ0EsYUFBSyxRQUFMLENBREE7QUFFQSxhQUFLLFNBQUw7QUFDRSx5QkFBZSxJQUFmLENBREY7QUFFRSwwQkFBZ0IsR0FBaEIsSUFBdUIsZ0JBQWdCLEtBQWhCLEVBQXVCLE1BQXZCLENBQXZCLENBRkY7QUFHRSxnQkFIRjtBQUZBLGFBTUssUUFBTDtBQUNFLGlCQUFPLG1CQUFQLElBQThCLGdCQUFnQixDQUFDLEtBQUQsRUFBUSxNQUF4QixDQUE5QixDQURGO0FBRUUsZ0JBRkY7QUFOQTtBQVVFLGlCQUFPLEdBQVAsSUFBYyxLQUFkLENBREY7QUFUQSxPQUg2QjtLQUEvQjtHQURGOztBQW1CQSxNQUFJLFlBQUosRUFBa0I7QUFDaEIsV0FBTyxrQkFBUCxJQUE2QixnQkFBZ0IsTUFBaEIsR0FBeUIsR0FBekIsR0FBK0IsZ0JBQWdCLE9BQWhCLENBRDVDO0dBQWxCOztBQUlBLFNBQU8sTUFBUCxDQS9CZ0M7Q0FBbkIiLCJmaWxlIjoiYnVpbGQuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL01hdHQvU2l0ZXMvcG9wbW90aW9uIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAgQ29udmVydCBwZXJjZW50YWdlIHRvIHBpeGVsc1xuICBcbiAgQHBhcmFtIFtudW1iZXJdOiBQZXJjZW50YWdlIG9mIHRvdGFsIGxlbmd0aFxuICBAcGFyYW0gW251bWJlcl06IFRvdGFsIGxlbmd0aFxuKi9cbmNvbnN0IHBlcmNlbnRUb1BpeGVscyA9IChwZXJjZW50LCBsZW5ndGgpID0+IChwYXJzZUZsb2F0KHBlcmNlbnQpIC8gMTAwKSAqIGxlbmd0aCArICdweCc7XG5cbmV4cG9ydCBkZWZhdWx0IChzdGF0ZSwgbGVuZ3RoKSA9PiB7XG4gIGNvbnN0IHN0eWxlcyA9IHt9O1xuICBjb25zdCBkYXNoQXJyYXlTdHlsZXMgPSB7XG4gICAgbGVuZ3RoOiAwLFxuICAgIHNwYWNpbmc6IGxlbmd0aCArICdweCdcbiAgfTtcbiAgbGV0IGhhc0Rhc2hBcnJheSA9IGZhbHNlO1xuXG4gIGZvciAobGV0IGtleSBpbiBzdGF0ZSkge1xuICAgIGlmIChzdGF0ZS5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICBjb25zdCB2YWx1ZSA9IHN0YXRlW2tleV07XG5cbiAgICAgIHN3aXRjaCAoa2V5KSB7XG4gICAgICBjYXNlICdsZW5ndGgnOlxuICAgICAgY2FzZSAnc3BhY2luZyc6XG4gICAgICAgIGhhc0Rhc2hBcnJheSA9IHRydWU7XG4gICAgICAgIGRhc2hBcnJheVN0eWxlc1trZXldID0gcGVyY2VudFRvUGl4ZWxzKHZhbHVlLCBsZW5ndGgpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ29mZnNldCc6XG4gICAgICAgIHN0eWxlc1snc3Ryb2tlLWRhc2hvZmZzZXQnXSA9IHBlcmNlbnRUb1BpeGVscygtdmFsdWUsIGxlbmd0aCk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgc3R5bGVzW2tleV0gPSB2YWx1ZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBpZiAoaGFzRGFzaEFycmF5KSB7XG4gICAgc3R5bGVzWydzdHJva2UtZGFzaGFycmF5J10gPSBkYXNoQXJyYXlTdHlsZXMubGVuZ3RoICsgJyAnICsgZGFzaEFycmF5U3R5bGVzLnNwYWNpbmc7XG4gIH1cblxuICByZXR1cm4gc3R5bGVzO1xufTsiXX0=

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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy92YWx1ZS10eXBlcy9zZXR0aW5ncy9kZWZhdWx0LXByb3BzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFPLElBQU0sb0JBQU07QUFDakIsT0FBSyxDQUFMO0FBQ0EsT0FBSyxHQUFMO0FBQ0EsU0FBTyxJQUFQO0NBSFc7O0FBTU4sSUFBTSw0QkFBVTtBQUNyQixPQUFLLENBQUw7QUFDQSxPQUFLLENBQUw7Q0FGVzs7QUFLTixJQUFNLDRCQUFVO0FBQ3JCLE9BQUssQ0FBTDtBQUNBLE9BQUssR0FBTDtBQUNBLFFBQU0sR0FBTjtDQUhXIiwiZmlsZSI6ImRlZmF1bHQtcHJvcHMuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL01hdHQvU2l0ZXMvcG9wbW90aW9uIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IHJnYiA9IHtcbiAgbWluOiAwLFxuICBtYXg6IDI1NSxcbiAgcm91bmQ6IHRydWVcbn07XG5cbmV4cG9ydCBjb25zdCBvcGFjaXR5ID0ge1xuICBtaW46IDAsXG4gIG1heDogMVxufTtcblxuZXhwb3J0IGNvbnN0IHBlcmNlbnQgPSB7XG4gIG1pbjogMCxcbiAgbWF4OiAxMDAsXG4gIHVuaXQ6ICclJ1xufTsiXX0=

/***/ },
/* 49 */
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
/* 50 */
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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hY3Rpb25zL2Vhc2luZy9jcmVhdGUtZWFzaW5nLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztrQkFnQ3dCOzs7Ozs7Ozs7OztBQXRCeEIsSUFBTSxlQUFlLFVBQUMsTUFBRDtTQUFZLFVBQUMsUUFBRCxFQUFXLFFBQVg7V0FBd0IsUUFBQyxJQUFZLEdBQVosR0FBbUIsT0FBTyxJQUFJLFFBQUosRUFBYyxRQUFyQixJQUFpQyxDQUFqQyxHQUFxQyxDQUFDLElBQUksT0FBTyxLQUFLLElBQUksUUFBSixDQUFMLEVBQW9CLFFBQTNCLENBQUosQ0FBRCxHQUE2QyxDQUE3QztHQUFqRjtDQUFaOzs7Ozs7Ozs7Ozs7QUFZckIsSUFBTSxnQkFBZ0IsVUFBQyxNQUFEO1NBQVksVUFBQyxRQUFELEVBQVcsUUFBWDtXQUF3QixJQUFJLE9BQU8sSUFBSSxRQUFKLEVBQWMsUUFBckIsQ0FBSjtHQUF4QjtDQUFaOzs7Ozs7Ozs7O0FBVVAsU0FBUyxvQkFBVCxDQUE4QixNQUE5QixFQUFzQztBQUNuRCxNQUFJLGlCQUFpQixVQUFDLFFBQUQsRUFBVyxRQUFYO1dBQXdCLE9BQU8sUUFBUCxFQUFpQixRQUFqQjtHQUF4QixDQUQ4Qjs7QUFHbkQsaUJBQWUsRUFBZixHQUFvQixVQUFDLFFBQUQsRUFBVyxRQUFYO1dBQXdCLE9BQU8sUUFBUCxFQUFpQixRQUFqQjtHQUF4QixDQUgrQjtBQUluRCxpQkFBZSxHQUFmLEdBQXFCLGNBQWMsTUFBZCxDQUFyQixDQUptRDtBQUtuRCxpQkFBZSxLQUFmLEdBQXVCLGFBQWEsTUFBYixDQUF2QixDQUxtRDs7QUFPbkQsU0FBTyxjQUFQLENBUG1EO0NBQXRDIiwiZmlsZSI6ImNyZWF0ZS1lYXNpbmcuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL01hdHQvU2l0ZXMvcG9wbW90aW9uIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAgTWlycm9yIGVhc2luZ1xuICBcbiAgTWlycm9ycyB0aGUgcHJvdmlkZWQgZWFzaW5nIGZ1bmN0aW9uLCB1c2VkIGhlcmUgZm9yIG1pcnJvcmluZyBhblxuICBlYXNlSW4gaW50byBhbiBlYXNlSW5PdXRcbiAgXG4gIEBwYXJhbSBbbnVtYmVyXTogUHJvZ3Jlc3MsIGZyb20gMCAtIDEsIG9mIGN1cnJlbnQgc2hpZnRcbiAgQHBhcmFtIFtmdW5jdGlvbl06IFRoZSBlYXNpbmcgZnVuY3Rpb24gdG8gbWlycm9yXG4gIEByZXR1cm5zIFtudW1iZXJdOiBUaGUgZWFzaW5nLWFkanVzdGVkIGRlbHRhXG4qL1xuY29uc3QgbWlycm9yRWFzaW5nID0gKG1ldGhvZCkgPT4gKHByb2dyZXNzLCBzdHJlbmd0aCkgPT4gKHByb2dyZXNzIDw9IDAuNSkgPyBtZXRob2QoMiAqIHByb2dyZXNzLCBzdHJlbmd0aCkgLyAyIDogKDIgLSBtZXRob2QoMiAqICgxIC0gcHJvZ3Jlc3MpLCBzdHJlbmd0aCkpIC8gMjtcbiAgICBcbi8qXG4gIFJldmVyc2UgZWFzaW5nXG4gIFxuICBSZXZlcnNlcyB0aGUgb3V0cHV0IG9mIHRoZSBwcm92aWRlZCBlYXNpbmcgZnVuY3Rpb24sIHVzZWQgZm9yIGZsaXBwaW5nIGVhc2VJblxuICBjdXJ2ZSB0byBhbiBlYXNlT3V0LlxuICBcbiAgQHBhcmFtIFtudW1iZXJdOiBQcm9ncmVzcywgZnJvbSAwIC0gMSwgb2YgY3VycmVudCBzaGlmdFxuICBAcGFyYW0gW2Z1bmN0aW9uXTogVGhlIGVhc2luZyBmdW5jdGlvbiB0byByZXZlcnNlXG4gIEByZXR1cm5zIFtudW1iZXJdOiBUaGUgZWFzaW5nLWFkanVzdGVkIGRlbHRhXG4qL1xuY29uc3QgcmV2ZXJzZUVhc2luZyA9IChtZXRob2QpID0+IChwcm9ncmVzcywgc3RyZW5ndGgpID0+IDEgLSBtZXRob2QoMSAtIHByb2dyZXNzLCBzdHJlbmd0aCk7XG5cbi8qXG4gIEVhc2luZyBjbGFzc1xuXG4gIElmIHByb3ZpZGVkIGVhc2luZyBmdW5jdGlvbiwgcmV0dXJucyBlYXNpbmcgZnVuY3Rpb24gd2l0aCBcbiAgaW4vb3V0L2luT3V0IHZhcmlhdGlvbnNcblxuICBJZiBwcm92aWRlZCBmb3VyIGFyZ3VtZW50cywgcmV0dXJucyBuZXcgQmV6aWVyIGNsYXNzIGluc3RlYWQuXG4qL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3JlYXRlRWFzaW5nRnVuY3Rpb24obWV0aG9kKSB7XG4gIGxldCBlYXNpbmdGdW5jdGlvbiA9IChwcm9ncmVzcywgc3RyZW5ndGgpID0+IG1ldGhvZChwcm9ncmVzcywgc3RyZW5ndGgpO1xuXG4gIGVhc2luZ0Z1bmN0aW9uLmluID0gKHByb2dyZXNzLCBzdHJlbmd0aCkgPT4gbWV0aG9kKHByb2dyZXNzLCBzdHJlbmd0aCk7XG4gIGVhc2luZ0Z1bmN0aW9uLm91dCA9IHJldmVyc2VFYXNpbmcobWV0aG9kKTtcbiAgZWFzaW5nRnVuY3Rpb24uaW5PdXQgPSBtaXJyb3JFYXNpbmcobWV0aG9kKTtcblxuICByZXR1cm4gZWFzaW5nRnVuY3Rpb247XG59XG4iXX0=

/***/ },
/* 51 */
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
	    var currentX = void 0;
	    var currentT = void 0;
	
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
	    var currentX = void 0;
	
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
	    var returnValue = void 0;
	
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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hY3Rpb25zL2Vhc2luZy9jcmVhdGUtYmV6aWVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztrQkFtQ3dCOzs7Ozs7Ozs7Ozs7Ozs7O0FBcEJ4QixJQUFNLG9CQUFvQixDQUFwQjtBQUNOLElBQU0sbUJBQW1CLEtBQW5CO0FBQ04sSUFBTSx3QkFBd0IsU0FBeEI7QUFDTixJQUFNLDZCQUE2QixFQUE3QjtBQUNOLElBQU0sc0JBQXNCLEVBQXRCO0FBQ04sSUFBTSxxQkFBcUIsT0FBTyxzQkFBc0IsR0FBdEIsQ0FBUDtBQUMzQixJQUFNLHFCQUFzQixPQUFPLFlBQVAsS0FBd0IsV0FBeEI7OztBQUc1QixJQUFNLElBQUksVUFBQyxFQUFELEVBQUssRUFBTDtTQUFZLE1BQU0sTUFBTSxFQUFOLEdBQVcsTUFBTSxFQUFOO0NBQTdCO0FBQ1YsSUFBTSxJQUFJLFVBQUMsRUFBRCxFQUFLLEVBQUw7U0FBWSxNQUFNLEVBQU4sR0FBVyxNQUFNLEVBQU47Q0FBdkI7QUFDVixJQUFNLElBQUksVUFBQyxFQUFEO1NBQVEsTUFBTSxFQUFOO0NBQVI7O0FBRVYsSUFBTSxXQUFXLFVBQUMsQ0FBRCxFQUFJLEVBQUosRUFBUSxFQUFSO1NBQWUsTUFBTSxFQUFFLEVBQUYsRUFBTSxFQUFOLENBQU4sR0FBa0IsQ0FBbEIsR0FBc0IsQ0FBdEIsR0FBMEIsTUFBTSxFQUFFLEVBQUYsRUFBTSxFQUFOLENBQU4sR0FBa0IsQ0FBbEIsR0FBc0IsRUFBRSxFQUFGLENBQWhEO0NBQWY7O0FBRWpCLElBQU0sYUFBYSxVQUFDLENBQUQsRUFBSSxFQUFKLEVBQVEsRUFBUjtTQUFlLENBQUMsQ0FBQyxFQUFFLEVBQUYsRUFBTSxFQUFOLElBQVksQ0FBWixHQUFnQixFQUFFLEVBQUYsRUFBTSxFQUFOLENBQWhCLENBQUQsR0FBOEIsQ0FBOUIsR0FBa0MsRUFBRSxFQUFGLENBQWxDLENBQUQsR0FBNEMsQ0FBNUM7Q0FBZjs7Ozs7QUFLSixTQUFTLFdBQVQsQ0FBcUIsR0FBckIs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LFNBQXpCLENBQVA7O0FBRG9DLEtBQXRDLE1BR08sSUFBSSxpQkFBaUIsR0FBakIsRUFBc0I7QUFDL0IsZUFBTyxTQUFQOztBQUQrQixPQUExQixNQUdBO0FBQ0wsaUJBQU8sZ0JBQWdCLEVBQWhCLEVBQW9CLGFBQXBCLEVBQW1DLGdCQUFnQixrQkFBaEIsQ0FBMUMsQ0FESztTQUhBO0dBdkJRLENBL0NxQzs7QUE4RXRELE1BQU0sYUFBYSxZQUFNO0FBQ3ZCLG1CQUFlLElBQWYsQ0FEdUI7QUFFdkIsUUFBSSxPQUFPLEdBQVAsSUFBYyxPQUFPLEdBQVAsRUFBWTtBQUM1Qix5QkFENEI7S0FBOUI7R0FGaUIsQ0E5RW1DOztBQXFGdEQsTUFBTSxXQUFXLFVBQUMsRUFBRCxFQUFRO0FBQ3ZCLFFBQUksb0JBQUosQ0FEdUI7O0FBR3ZCLFFBQUksQ0FBQyxZQUFELEVBQWU7QUFDakIsbUJBRGlCO0tBQW5COzs7QUFIdUIsUUFRbkIsUUFBUSxHQUFSLElBQWUsUUFBUSxHQUFSLEVBQWE7QUFDOUIsb0JBQWMsRUFBZDs7O0FBRDhCLEtBQWhDLE1BSU8sSUFBSSxPQUFPLENBQVAsRUFBVTtBQUNuQixzQkFBYyxDQUFkOzs7QUFEbUIsT0FBZCxNQUlBLElBQUksT0FBTyxDQUFQLEVBQVU7QUFDbkIsd0JBQWMsQ0FBZCxDQURtQjtTQUFkLE1BR0E7QUFDTCx3QkFBYyxXQUFXLFNBQVMsRUFBVCxDQUFYLEVBQXlCLEdBQXpCLEVBQThCLEdBQTlCLENBQWQsQ0FESztTQUhBOztBQU9QLFdBQU8sV0FBUCxDQXZCdUI7R0FBUixDQXJGcUM7O0FBK0d0RCxTQUFPLFFBQVAsQ0EvR3NEO0NBQXpDIiwiZmlsZSI6ImNyZWF0ZS1iZXppZXIuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL01hdHQvU2l0ZXMvcG9wbW90aW9uIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAgQmV6aWVyIGZ1bmN0aW9uIGdlbmVyYXRvclxuICAgIFxuICBHYcOrdGFuIFJlbmF1ZGVhdSdzIEJlemllckVhc2luZ1xuICBodHRwczovL2dpdGh1Yi5jb20vZ3JlL2Jlemllci1lYXNpbmcvYmxvYi9tYXN0ZXIvaW5kZXguanMgIFxuICBodHRwczovL2dpdGh1Yi5jb20vZ3JlL2Jlemllci1lYXNpbmcvYmxvYi9tYXN0ZXIvTElDRU5TRVxuICBZb3UncmUgYSBoZXJvXG4gIFxuICBVc2VcbiAgXG4gICAgdmFyIGVhc2VPdXQgPSBuZXcgQmV6aWVyKC4xNywuNjcsLjgzLC42NyksXG4gICAgICB4ID0gZWFzZU91dCgwLjUpOyAvLyByZXR1cm5zIDAuNjI3Li4uXG4qL1xuXG4vLyBDb25zdGFudHNcbmNvbnN0IE5FV1RPTl9JVEVSQVRJT05TID0gODtcbmNvbnN0IE5FV1RPTl9NSU5fU0xPUEUgPSAwLjAwMTtcbmNvbnN0IFNVQkRJVklTSU9OX1BSRUNJU0lPTiA9IDAuMDAwMDAwMTtcbmNvbnN0IFNVQkRJVklTSU9OX01BWF9JVEVSQVRJT05TID0gMTA7XG5jb25zdCBLX1NQTElORV9UQUJMRV9TSVpFID0gMTE7XG5jb25zdCBLX1NBTVBMRV9TVEVQX1NJWkUgPSAxLjAgLyAoS19TUExJTkVfVEFCTEVfU0laRSAtIDEuMCk7XG5jb25zdCBGTE9BVF8zMl9TVVBQT1JURUQgPSAodHlwZW9mIEZsb2F0MzJBcnJheSAhPT0gJ3VuZGVmaW5lZCcpO1xuXG4vLyBIZWxwZXIgbWV0aG9kc1xuY29uc3QgYSA9IChhMSwgYTIpID0+IDEuMCAtIDMuMCAqIGEyICsgMy4wICogYTE7XG5jb25zdCBiID0gKGExLCBhMikgPT4gMy4wICogYTIgLSA2LjAgKiBhMTtcbmNvbnN0IGMgPSAoYTEpID0+IDMuMCAqIGExO1xuXG5jb25zdCBnZXRTbG9wZSA9ICh0LCBhMSwgYTIpID0+IDMuMCAqIGEoYTEsIGEyKSAqIHQgKiB0ICsgMi4wICogYihhMSwgYTIpICogdCArIGMoYTEpO1xuXG5jb25zdCBjYWxjQmV6aWVyID0gKHQsIGExLCBhMikgPT4gKChhKGExLCBhMikgKiB0ICsgYihhMSwgYTIpKSAqIHQgKyBjKGExKSkgKiB0O1xuXG4vKlxuICBDcmVhdGUgYSBjdWJpYyBiZXppZXIgcmVzb2x2ZXJcbiovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjdWJpY0JlemllcihtWDEsIG1ZMSwgbVgyLCBtWTIpIHtcbiAgY29uc3Qgc2FtcGxlVmFsdWVzID0gRkxPQVRfMzJfU1VQUE9SVEVEID8gbmV3IEZsb2F0MzJBcnJheShLX1NQTElORV9UQUJMRV9TSVpFKSA6IG5ldyBBcnJheShLX1NQTElORV9UQUJMRV9TSVpFKTtcbiAgbGV0IF9wcmVjb21wdXRlZCA9IGZhbHNlO1xuXG4gIGNvbnN0IGJpbmFyeVN1YmRpdmlkZSA9IChhWCwgYUEsIGFCKSA9PiB7XG4gICAgbGV0IGkgPSAwO1xuICAgIGxldCBjdXJyZW50WDtcbiAgICBsZXQgY3VycmVudFQ7XG5cbiAgICBkbyB7XG4gICAgICBjdXJyZW50VCA9IGFBICsgKGFCIC0gYUEpIC8gMi4wO1xuICAgICAgY3VycmVudFggPSBjYWxjQmV6aWVyKGN1cnJlbnRULCBtWDEsIG1YMikgLSBhWDtcbiAgICAgIGlmIChjdXJyZW50WCA+IDAuMCkge1xuICAgICAgICBhQiA9IGN1cnJlbnRUO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgYUEgPSBjdXJyZW50VDtcbiAgICAgIH1cbiAgICB9IHdoaWxlIChNYXRoLmFicyhjdXJyZW50WCkgPiBTVUJESVZJU0lPTl9QUkVDSVNJT04gJiYgKytpIDwgU1VCRElWSVNJT05fTUFYX0lURVJBVElPTlMpO1xuXG4gICAgcmV0dXJuIGN1cnJlbnRUO1xuICB9O1xuXG4gIGNvbnN0IG5ld3RvblJhcGhzb25JdGVyYXRlID0gKGFYLCBhR3Vlc3NUKSA9PiB7XG4gICAgbGV0IGkgPSAwO1xuICAgIGxldCBjdXJyZW50U2xvcGUgPSAwO1xuICAgIGxldCBjdXJyZW50WDtcblxuICAgIGZvciAoOyBpIDwgTkVXVE9OX0lURVJBVElPTlM7ICsraSkge1xuICAgICAgY3VycmVudFNsb3BlID0gZ2V0U2xvcGUoYUd1ZXNzVCwgbVgxLCBtWDIpO1xuICAgICAgXG4gICAgICBpZiAoY3VycmVudFNsb3BlID09PSAwLjApIHtcbiAgICAgICAgcmV0dXJuIGFHdWVzc1Q7XG4gICAgICB9XG4gICAgICBcbiAgICAgIGN1cnJlbnRYID0gY2FsY0JlemllcihhR3Vlc3NULCBtWDEsIG1YMikgLSBhWDtcbiAgICAgIGFHdWVzc1QgLT0gY3VycmVudFggLyBjdXJyZW50U2xvcGU7XG4gICAgfVxuICAgIFxuICAgIHJldHVybiBhR3Vlc3NUO1xuICB9O1xuXG4gIGNvbnN0IGNhbGNTYW1wbGVWYWx1ZXMgPSAoKSA9PiB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBLX1NQTElORV9UQUJMRV9TSVpFOyArK2kpIHtcbiAgICAgIHNhbXBsZVZhbHVlc1tpXSA9IGNhbGNCZXppZXIoaSAqIEtfU0FNUExFX1NURVBfU0laRSwgbVgxLCBtWDIpO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBnZXRURm9yWCA9IChhWCkgPT4ge1xuICAgIGxldCBpbnRlcnZhbFN0YXJ0ID0gMC4wO1xuICAgIGxldCBjdXJyZW50U2FtcGxlID0gMTtcbiAgICBsZXQgbGFzdFNhbXBsZSA9IEtfU1BMSU5FX1RBQkxFX1NJWkUgLSAxO1xuICAgIGxldCBkaXN0ID0gMC4wO1xuICAgIGxldCBndWVzc0ZvclQgPSAwLjA7XG4gICAgbGV0IGluaXRpYWxTbG9wZSA9IDAuMDtcbiAgICAgIFxuICAgIGZvciAoOyBjdXJyZW50U2FtcGxlICE9IGxhc3RTYW1wbGUgJiYgc2FtcGxlVmFsdWVzW2N1cnJlbnRTYW1wbGVdIDw9IGFYOyArK2N1cnJlbnRTYW1wbGUpIHtcbiAgICAgIGludGVydmFsU3RhcnQgKz0gS19TQU1QTEVfU1RFUF9TSVpFO1xuICAgIH1cbiAgICBcbiAgICAtLWN1cnJlbnRTYW1wbGU7XG4gICAgXG4gICAgZGlzdCA9IChhWCAtIHNhbXBsZVZhbHVlc1tjdXJyZW50U2FtcGxlXSkgLyAoc2FtcGxlVmFsdWVzW2N1cnJlbnRTYW1wbGUrMV0gLSBzYW1wbGVWYWx1ZXNbY3VycmVudFNhbXBsZV0pO1xuICAgIGd1ZXNzRm9yVCA9IGludGVydmFsU3RhcnQgKyBkaXN0ICogS19TQU1QTEVfU1RFUF9TSVpFO1xuICAgIFxuICAgIGluaXRpYWxTbG9wZSA9IGdldFNsb3BlKGd1ZXNzRm9yVCwgbVgxLCBtWDIpO1xuICAgIFxuICAgIC8vIElmIHNsb3BlIGlzIGdyZWF0ZXIgdGhhbiBtaW5cbiAgICBpZiAoaW5pdGlhbFNsb3BlID49IE5FV1RPTl9NSU5fU0xPUEUpIHtcbiAgICAgIHJldHVybiBuZXd0b25SYXBoc29uSXRlcmF0ZShhWCwgZ3Vlc3NGb3JUKTtcbiAgICAvLyBTbG9wZSBpcyBlcXVhbCB0byBtaW5cbiAgICB9IGVsc2UgaWYgKGluaXRpYWxTbG9wZSA9PT0gMC4wKSB7XG4gICAgICByZXR1cm4gZ3Vlc3NGb3JUO1xuICAgIC8vIFNsb3BlIGlzIGxlc3MgdGhhbiBtaW5cbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGJpbmFyeVN1YmRpdmlkZShhWCwgaW50ZXJ2YWxTdGFydCwgaW50ZXJ2YWxTdGFydCArIEtfU0FNUExFX1NURVBfU0laRSk7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IHByZWNvbXB1dGUgPSAoKSA9PiB7XG4gICAgX3ByZWNvbXB1dGVkID0gdHJ1ZTtcbiAgICBpZiAobVgxICE9IG1ZMSB8fCBtWDIgIT0gbVkyKSB7XG4gICAgICBjYWxjU2FtcGxlVmFsdWVzKCk7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IHJlc29sdmVyID0gKGFYKSA9PiB7XG4gICAgbGV0IHJldHVyblZhbHVlO1xuXG4gICAgaWYgKCFfcHJlY29tcHV0ZWQpIHtcbiAgICAgIHByZWNvbXB1dGUoKTtcbiAgICB9XG4gICAgXG4gICAgLy8gSWYgbGluZWFyIGdyYWRpZW50LCByZXR1cm4gWCBhcyBUXG4gICAgaWYgKG1YMSA9PT0gbVkxICYmIG1YMiA9PT0gbVkyKSB7XG4gICAgICByZXR1cm5WYWx1ZSA9IGFYO1xuICAgICAgXG4gICAgLy8gSWYgYXQgc3RhcnQsIHJldHVybiAwXG4gICAgfSBlbHNlIGlmIChhWCA9PT0gMCkge1xuICAgICAgcmV0dXJuVmFsdWUgPSAwO1xuICAgICAgXG4gICAgLy8gSWYgYXQgZW5kLCByZXR1cm4gMVxuICAgIH0gZWxzZSBpZiAoYVggPT09IDEpIHtcbiAgICAgIHJldHVyblZhbHVlID0gMTtcblxuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm5WYWx1ZSA9IGNhbGNCZXppZXIoZ2V0VEZvclgoYVgpLCBtWTEsIG1ZMik7XG4gICAgfVxuICAgIFxuICAgIHJldHVybiByZXR1cm5WYWx1ZTtcbiAgfTtcblxuICByZXR1cm4gcmVzb2x2ZXI7XG59XG4iXX0=

/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	/*
	  Detect and load an appropriate clock setting for the environment
	*/
	
	var hasRAF = typeof window !== 'undefined' && window.requestAnimationFrame ? true : false;
	
	var tick = void 0;
	
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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy90YXNrL3RpY2suanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUlBLElBQU0sU0FBUyxPQUFRLE1BQVAsS0FBa0IsV0FBbEIsSUFBaUMsT0FBTyxxQkFBUCxHQUFnQyxJQUFsRSxHQUF5RSxLQUF6RTs7QUFFZixJQUFJLGFBQUo7O0FBRUEsSUFBSSxNQUFKLEVBQVk7QUFDVixTQUFPLFVBQUMsUUFBRDtXQUFjLE9BQU8scUJBQVAsQ0FBNkIsUUFBN0I7R0FBZCxDQURHO0NBQVosTUFHTzs7Ozs7Ozs7Ozs7Ozs7O0FBZUwsUUFBSSxXQUFXLENBQVg7O0FBRUosV0FBTyxVQUFDLFFBQUQsRUFBYztBQUNuQixVQUFNLGNBQWMsSUFBSSxJQUFKLEdBQVcsT0FBWCxFQUFkLENBRGE7QUFFbkIsVUFBTSxhQUFhLEtBQUssR0FBTCxDQUFTLENBQVQsRUFBWSxNQUFNLGNBQWMsUUFBZCxDQUFOLENBQXpCLENBRmE7O0FBSW5CLGlCQUFXLGNBQWMsVUFBZCxDQUpROztBQU1uQixpQkFBVztlQUFNLFNBQVMsUUFBVDtPQUFOLEVBQTBCLFVBQXJDLEVBTm1CO0tBQWQ7T0FqQkY7Q0FIUDs7a0JBOEJlIiwiZmlsZSI6InRpY2suanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL01hdHQvU2l0ZXMvcG9wbW90aW9uIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAgRGV0ZWN0IGFuZCBsb2FkIGFuIGFwcHJvcHJpYXRlIGNsb2NrIHNldHRpbmcgZm9yIHRoZSBlbnZpcm9ubWVudFxuKi9cblxuY29uc3QgaGFzUkFGID0gKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUpID8gdHJ1ZSA6IGZhbHNlO1xuXG5sZXQgdGljaztcblxuaWYgKGhhc1JBRikge1xuICB0aWNrID0gKGNhbGxiYWNrKSA9PiB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKGNhbGxiYWNrKTtcblxufSBlbHNlIHtcbiAgLypcbiAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUgcG9seWZpbGxcbiAgICBcbiAgICBGb3IgSUU4LzkgRmxpbnN0b25lcyBhbmQgbm9uLWJyb3dzZXIgZW52aXJvbm1lbnRzXG5cbiAgICBUYWtlbiBmcm9tIFBhdWwgSXJpc2guIFdlJ3ZlIHN0cmlwcGVkIG91dCBjYW5jZWxBbmltYXRpb25GcmFtZSBjaGVja3MgYmVjYXVzZSB3ZSBkb24ndCBmb3ggd2l0aCB0aGF0XG4gICAgXG4gICAgaHR0cDovL3BhdWxpcmlzaC5jb20vMjAxMS9yZXF1ZXN0YW5pbWF0aW9uZnJhbWUtZm9yLXNtYXJ0LWFuaW1hdGluZy9cbiAgICBodHRwOi8vbXkub3BlcmEuY29tL2Vtb2xsZXIvYmxvZy8yMDExLzEyLzIwL3JlcXVlc3RhbmltYXRpb25mcmFtZS1mb3Itc21hcnQtZXItYW5pbWF0aW5nXG4gICAgIFxuICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSBwb2x5ZmlsbCBieSBFcmlrIE3DtmxsZXIuIGZpeGVzIGZyb20gUGF1bCBJcmlzaCBhbmQgVGlubyBaaWpkZWxcbiAgICAgXG4gICAgTUlUIGxpY2Vuc2VcbiAgKi9cbiAgbGV0IGxhc3RUaW1lID0gMDtcblxuICB0aWNrID0gKGNhbGxiYWNrKSA9PiB7XG4gICAgY29uc3QgY3VycmVudFRpbWUgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcbiAgICBjb25zdCB0aW1lVG9DYWxsID0gTWF0aC5tYXgoMCwgMTYgLSAoY3VycmVudFRpbWUgLSBsYXN0VGltZSkpO1xuXG4gICAgbGFzdFRpbWUgPSBjdXJyZW50VGltZSArIHRpbWVUb0NhbGw7XG5cbiAgICBzZXRUaW1lb3V0KCgpID0+IGNhbGxiYWNrKGxhc3RUaW1lKSwgdGltZVRvQ2FsbCk7XG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IHRpY2s7Il19

/***/ },
/* 53 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	// [int]: Incremented for each new running task
	var currentTaskId = 0;
	
	// [int]: Number of all running taskes
	var totalRunningCount = 0;
	
	// [int]: Number of running taskes excluding background taskes
	var nonBackgroundRunningCount = 0;
	
	// [array]: Array of running task IDs
	var runningIds = [];
	
	// [object]: Map of running taskes
	var activeTasks = {};
	
	// [array]: Array of task IDs queued for activation
	var activateQueue = [];
	
	// [array]: Array of task IDs queued for deactivation
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
	  activeTasks: activeTasks,
	
	  // Activate a task
	  activate: function (id, task) {
	    activeTasks[id] = task;
	    task.isActive = true;
	    updateQueues(id, activateQueue, deactivateQueue);
	
	    if (task.onActivate) {
	      task.onActivate(task);
	    }
	
	    if (task.onActivateOnce) {
	      task.onActivateOnce(task);
	    }
	  },
	
	  // Deactivate a task
	  deactivate: function (id) {
	    var task = activeTasks[id];
	
	    if (task) {
	      updateQueues(id, deactivateQueue, activateQueue);
	      task.isActive = false;
	
	      if (task.onDeactivate) {
	        task.onDeactivate(task);
	      }
	    }
	  },
	
	  // Number background taskes
	  getNonBackgroundRunningCount: function () {
	    return nonBackgroundRunningCount;
	  },
	
	  // Increment current task ID and return
	  getTaskId: function () {
	    return currentTaskId++;
	  },
	
	  // Resolve activate/deactivate taskes and return active ids
	  getActiveIds: function () {
	    /*
	      task deactivate queue
	    */
	    var deactivateQueueLength = deactivateQueue.length;
	
	    for (var i = 0; i < deactivateQueueLength; i++) {
	      var id = deactivateQueue[i];
	      var activeIdIndex = runningIds.indexOf(id);
	      var task = activeTasks[id];
	
	      // If this is a running task, deactivate
	      if (activeIdIndex > -1) {
	        runningIds.splice(activeIdIndex, 1);
	        updateRunningCount(false, task.isLazy);
	        delete activeTasks[id];
	      }
	    }
	
	    /*
	      Empty deactivate queue. We use `Array.splice` because it doesn't
	      works on the original array so we don't have to garbage collect anything
	    */
	    deactivateQueue.splice(0, deactivateQueueLength);
	
	    /*
	      task activate queue
	    */
	    var activateQueueLength = activateQueue.length;
	
	    for (var _i = 0; _i < activateQueueLength; _i++) {
	      var _id = activateQueue[_i];
	      var _activeIdIndex = runningIds.indexOf(_id);
	      var _task = activeTasks[_id];
	
	      if (_task && _task.onActivateLoop) {
	        _task.onActivateLoop();
	      }
	
	      // If task isn't already running, activate
	      if (_activeIdIndex === -1 && _task) {
	        if (_task.isPriority) {
	          runningIds.unshift(_id);
	        } else {
	          runningIds.push(_id);
	        }
	
	        updateRunningCount(true, _task.isLazy);
	      }
	    }
	
	    activateQueue.splice(0, activateQueueLength);
	
	    return runningIds;
	  }
	};
	//# sourceMappingURL=data:application/json;base64,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QkFBMUI7Ozs7O0FBdkJrQixRQTRCWixzQkFBc0IsY0FBYyxNQUFkLENBNUJWOztBQThCbEIsU0FBSyxJQUFJLEtBQUksQ0FBSixFQUFPLEtBQUksbUJBQUosRUFBeUIsSUFBekMsRUFBOEM7QUFDNUMsVUFBTSxNQUFLLGNBQWMsRUFBZCxDQUFMLENBRHNDO0FBRTVDLFVBQU0saUJBQWdCLFdBQVcsT0FBWCxDQUFtQixHQUFuQixDQUFoQixDQUZzQztBQUc1QyxVQUFNLFFBQU8sWUFBWSxHQUFaLENBQVAsQ0FIc0M7O0FBSzVDLFVBQUksU0FBUSxNQUFLLGNBQUwsRUFBcUI7QUFDL0IsY0FBSyxjQUFMLEdBRCtCO09BQWpDOzs7QUFMNEMsVUFVeEMsbUJBQWtCLENBQUMsQ0FBRCxJQUFNLEtBQXhCLEVBQThCO0FBQ2hDLFlBQUksTUFBSyxVQUFMLEVBQWlCO0FBQ25CLHFCQUFXLE9BQVgsQ0FBbUIsR0FBbkIsRUFEbUI7U0FBckIsTUFFTztBQUNMLHFCQUFXLElBQVgsQ0FBZ0IsR0FBaEIsRUFESztTQUZQOztBQU1BLDJCQUFtQixJQUFuQixFQUF5QixNQUFLLE1BQUwsQ0FBekIsQ0FQZ0M7T0FBbEM7S0FWRjs7QUFxQkEsa0JBQWMsTUFBZCxDQUFxQixDQUFyQixFQUF3QixtQkFBeEIsRUFuRGtCOztBQXFEbEIsV0FBTyxVQUFQLENBckRrQjtHQUFOIiwiZmlsZSI6Im1hbmFnZXIuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL01hdHQvU2l0ZXMvcG9wbW90aW9uIiwic291cmNlc0NvbnRlbnQiOlsiLy8gW2ludF06IEluY3JlbWVudGVkIGZvciBlYWNoIG5ldyBydW5uaW5nIHRhc2tcbmxldCBjdXJyZW50VGFza0lkID0gMDtcblxuLy8gW2ludF06IE51bWJlciBvZiBhbGwgcnVubmluZyB0YXNrZXNcbmxldCB0b3RhbFJ1bm5pbmdDb3VudCA9IDA7XG5cbi8vIFtpbnRdOiBOdW1iZXIgb2YgcnVubmluZyB0YXNrZXMgZXhjbHVkaW5nIGJhY2tncm91bmQgdGFza2VzXG5sZXQgbm9uQmFja2dyb3VuZFJ1bm5pbmdDb3VudCA9IDA7XG5cbi8vIFthcnJheV06IEFycmF5IG9mIHJ1bm5pbmcgdGFzayBJRHNcbmNvbnN0IHJ1bm5pbmdJZHMgPSBbXTtcblxuLy8gW29iamVjdF06IE1hcCBvZiBydW5uaW5nIHRhc2tlc1xuY29uc3QgYWN0aXZlVGFza3MgPSB7fTtcblxuLy8gW2FycmF5XTogQXJyYXkgb2YgdGFzayBJRHMgcXVldWVkIGZvciBhY3RpdmF0aW9uXG5jb25zdCBhY3RpdmF0ZVF1ZXVlID0gW107XG5cbi8vIFthcnJheV06IEFycmF5IG9mIHRhc2sgSURzIHF1ZXVlZCBmb3IgZGVhY3RpdmF0aW9uXG5jb25zdCBkZWFjdGl2YXRlUXVldWUgPSBbXTtcblxuLypcbiAgVXBkYXRlIGFjdGl2YXRlL2RlYWN0aXZhdGUgcXVldWVzXG5cbiAgQHBhcmFtIFtudW1iZXJdXG4gIEBwYXJhbSBbYXJyYXldXG4gIEBwYXJhbSBbYXJyYXldXG4qL1xuY29uc3QgdXBkYXRlUXVldWVzID0gKGlkLCBpbkxpc3QsIG91dExpc3QpID0+IHtcbiAgY29uc3QgaW5Qb3NpdGlvbiA9IGluTGlzdC5pbmRleE9mKGlkKTtcbiAgY29uc3Qgb3V0UG9zaXRpb24gPSBvdXRMaXN0LmluZGV4T2YoaWQpO1xuXG4gIGlmIChpblBvc2l0aW9uID09PSAtMSkge1xuICAgIGluTGlzdC5wdXNoKGlkKTtcbiAgfVxuXG4gIGlmIChvdXRQb3NpdGlvbiA+IC0xKSB7XG4gICAgb3V0TGlzdC5zcGxpY2Uob3V0UG9zaXRpb24sIDEpO1xuICB9XG59O1xuXG4vKlxuICBVcGRhdGUgcnVubmluZ1xuXG4gIFtib29sZWFuXTogYHRydWVgIHRvIGFkZFxuICBbYm9vbGVhbl06IGB0cnVlYCBpZiBsYXp5XG4qL1xuY29uc3QgdXBkYXRlUnVubmluZ0NvdW50ID0gKGFkZCwgaXNMYXp5KSA9PiB7XG4gIGNvbnN0IG1vZGlmeSA9IGFkZCA/IDEgOiAtMTtcblxuICB0b3RhbFJ1bm5pbmdDb3VudCArPSBtb2RpZnk7XG5cbiAgaWYgKCFpc0xhenkpIHtcbiAgICBub25CYWNrZ3JvdW5kUnVubmluZ0NvdW50ICs9IG1vZGlmeTtcbiAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQge1xuICBhY3RpdmVUYXNrcyxcblxuICAvLyBBY3RpdmF0ZSBhIHRhc2tcbiAgYWN0aXZhdGU6IChpZCwgdGFzaykgPT4ge1xuICAgIGFjdGl2ZVRhc2tzW2lkXSA9IHRhc2s7XG4gICAgdGFzay5pc0FjdGl2ZSA9IHRydWU7XG4gICAgdXBkYXRlUXVldWVzKGlkLCBhY3RpdmF0ZVF1ZXVlLCBkZWFjdGl2YXRlUXVldWUpO1xuXG4gICAgaWYgKHRhc2sub25BY3RpdmF0ZSkge1xuICAgICAgdGFzay5vbkFjdGl2YXRlKHRhc2spO1xuICAgIH1cblxuICAgIGlmICh0YXNrLm9uQWN0aXZhdGVPbmNlKSB7XG4gICAgICB0YXNrLm9uQWN0aXZhdGVPbmNlKHRhc2spO1xuICAgIH1cbiAgfSxcblxuICAvLyBEZWFjdGl2YXRlIGEgdGFza1xuICBkZWFjdGl2YXRlOiAoaWQpID0+IHtcbiAgICBjb25zdCB0YXNrID0gYWN0aXZlVGFza3NbaWRdO1xuXG4gICAgaWYgKHRhc2spIHtcbiAgICAgIHVwZGF0ZVF1ZXVlcyhpZCwgZGVhY3RpdmF0ZVF1ZXVlLCBhY3RpdmF0ZVF1ZXVlKTtcbiAgICAgIHRhc2suaXNBY3RpdmUgPSBmYWxzZTtcblxuICAgICAgaWYgKHRhc2sub25EZWFjdGl2YXRlKSB7XG4gICAgICAgIHRhc2sub25EZWFjdGl2YXRlKHRhc2spO1xuICAgICAgfVxuICAgIH1cbiAgfSxcblxuICAvLyBOdW1iZXIgYmFja2dyb3VuZCB0YXNrZXNcbiAgZ2V0Tm9uQmFja2dyb3VuZFJ1bm5pbmdDb3VudDogKCkgPT4gbm9uQmFja2dyb3VuZFJ1bm5pbmdDb3VudCxcblxuICAvLyBJbmNyZW1lbnQgY3VycmVudCB0YXNrIElEIGFuZCByZXR1cm5cbiAgZ2V0VGFza0lkOiAoKSA9PiBjdXJyZW50VGFza0lkKyssXG5cbiAgLy8gUmVzb2x2ZSBhY3RpdmF0ZS9kZWFjdGl2YXRlIHRhc2tlcyBhbmQgcmV0dXJuIGFjdGl2ZSBpZHNcbiAgZ2V0QWN0aXZlSWRzOiAoKSA9PiB7XG4gICAgLypcbiAgICAgIHRhc2sgZGVhY3RpdmF0ZSBxdWV1ZVxuICAgICovXG4gICAgY29uc3QgZGVhY3RpdmF0ZVF1ZXVlTGVuZ3RoID0gZGVhY3RpdmF0ZVF1ZXVlLmxlbmd0aDtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZGVhY3RpdmF0ZVF1ZXVlTGVuZ3RoOyBpKyspIHtcbiAgICAgIGNvbnN0IGlkID0gZGVhY3RpdmF0ZVF1ZXVlW2ldO1xuICAgICAgY29uc3QgYWN0aXZlSWRJbmRleCA9IHJ1bm5pbmdJZHMuaW5kZXhPZihpZCk7XG4gICAgICBjb25zdCB0YXNrID0gYWN0aXZlVGFza3NbaWRdO1xuXG4gICAgICAvLyBJZiB0aGlzIGlzIGEgcnVubmluZyB0YXNrLCBkZWFjdGl2YXRlXG4gICAgICBpZiAoYWN0aXZlSWRJbmRleCA+IC0xKSB7XG4gICAgICAgIHJ1bm5pbmdJZHMuc3BsaWNlKGFjdGl2ZUlkSW5kZXgsIDEpO1xuICAgICAgICB1cGRhdGVSdW5uaW5nQ291bnQoZmFsc2UsIHRhc2suaXNMYXp5KTtcbiAgICAgICAgZGVsZXRlIGFjdGl2ZVRhc2tzW2lkXTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvKlxuICAgICAgRW1wdHkgZGVhY3RpdmF0ZSBxdWV1ZS4gV2UgdXNlIGBBcnJheS5zcGxpY2VgIGJlY2F1c2UgaXQgZG9lc24ndFxuICAgICAgd29ya3Mgb24gdGhlIG9yaWdpbmFsIGFycmF5IHNvIHdlIGRvbid0IGhhdmUgdG8gZ2FyYmFnZSBjb2xsZWN0IGFueXRoaW5nXG4gICAgKi9cbiAgICBkZWFjdGl2YXRlUXVldWUuc3BsaWNlKDAsIGRlYWN0aXZhdGVRdWV1ZUxlbmd0aCk7XG5cbiAgICAvKlxuICAgICAgdGFzayBhY3RpdmF0ZSBxdWV1ZVxuICAgICovXG4gICAgY29uc3QgYWN0aXZhdGVRdWV1ZUxlbmd0aCA9IGFjdGl2YXRlUXVldWUubGVuZ3RoO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhY3RpdmF0ZVF1ZXVlTGVuZ3RoOyBpKyspIHtcbiAgICAgIGNvbnN0IGlkID0gYWN0aXZhdGVRdWV1ZVtpXTtcbiAgICAgIGNvbnN0IGFjdGl2ZUlkSW5kZXggPSBydW5uaW5nSWRzLmluZGV4T2YoaWQpO1xuICAgICAgY29uc3QgdGFzayA9IGFjdGl2ZVRhc2tzW2lkXTtcblxuICAgICAgaWYgKHRhc2sgJiYgdGFzay5vbkFjdGl2YXRlTG9vcCkge1xuICAgICAgICB0YXNrLm9uQWN0aXZhdGVMb29wKCk7XG4gICAgICB9XG5cbiAgICAgIC8vIElmIHRhc2sgaXNuJ3QgYWxyZWFkeSBydW5uaW5nLCBhY3RpdmF0ZVxuICAgICAgaWYgKGFjdGl2ZUlkSW5kZXggPT09IC0xICYmIHRhc2spIHtcbiAgICAgICAgaWYgKHRhc2suaXNQcmlvcml0eSkge1xuICAgICAgICAgIHJ1bm5pbmdJZHMudW5zaGlmdChpZCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcnVubmluZ0lkcy5wdXNoKGlkKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHVwZGF0ZVJ1bm5pbmdDb3VudCh0cnVlLCB0YXNrLmlzTGF6eSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgYWN0aXZhdGVRdWV1ZS5zcGxpY2UoMCwgYWN0aXZhdGVRdWV1ZUxlbmd0aCk7XG5cbiAgICByZXR1cm4gcnVubmluZ0lkcztcbiAgfVxufTtcbiJdfQ==

/***/ }
/******/ ]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgOWVhNGVlZjU0OGU5YjM1ZWRmMjIiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xvYWQvZ2xvYmFsLmpzIiwid2VicGFjazovLy8uL3NyYy9wb3Btb3Rpb24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Rhc2svdGltZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FjdGlvbnMvQWN0aW9uLmpzIiwid2VicGFjazovLy8uL3NyYy9hY3Rpb25zL0Zsb3cuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FjdGlvbnMvVHdlZW4uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FjdGlvbnMvUGh5c2ljcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYWN0aW9ucy9UcmFjay5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdGFzay9UYXNrLmpzIiwid2VicGFjazovLy8uL3NyYy9pbnB1dC9JbnB1dC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5jL3N0YWdnZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luYy90aW1lbGluZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYWRhcHRlci9hZGFwdGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9hZGFwdGVyL2F0dHItYWRhcHRlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYWRhcHRlci9jc3MtYWRhcHRlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYWRhcHRlci9vYmplY3QtYWRhcHRlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYWRhcHRlci9zdmctYWRhcHRlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYWRhcHRlci9zdmctcGF0aC1hZGFwdGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9hY3Rpb25zL2Vhc2luZy9wcmVzZXQtZWFzaW5nLmpzIiwid2VicGFjazovLy8uL3NyYy9hY3Rpb25zL2Zsb3cvZ2V0LWZsb3cuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luYy9jYWxjLmpzIiwid2VicGFjazovLy8uL3NyYy9pbmMvdXRpbHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZhbHVlLXR5cGVzL2FscGhhLmpzIiwid2VicGFjazovLy8uL3NyYy92YWx1ZS10eXBlcy9hbmdsZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdmFsdWUtdHlwZXMvY29sb3IuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZhbHVlLXR5cGVzL2NvbXBsZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZhbHVlLXR5cGVzL2hleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdmFsdWUtdHlwZXMvaHNsLmpzIiwid2VicGFjazovLy8uL3NyYy92YWx1ZS10eXBlcy9weC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdmFsdWUtdHlwZXMvcmdiLmpzIiwid2VicGFjazovLy8uL3NyYy92YWx1ZS10eXBlcy9zY2FsZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdmFsdWUtdHlwZXMvc2hhZG93LmpzIiwid2VicGFjazovLy8uL3NyYy92YWx1ZS10eXBlcy91bml0LmpzIiwid2VicGFjazovLy8uL3NyYy9pbmMvdHJhbnNmb3JtZXJzLmpzIiwid2VicGFjazovLy8uL3NyYy92YWx1ZS10eXBlcy9kZXRlY3QuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luYy9udW1lcmljYWwtdmFsdWVzLmpzIiwid2VicGFjazovLy8uL3NyYy9pbmMvZGV0ZWN0LWFkYXB0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FjdGlvbnMvZmxvdy9nZW5lcmF0ZS1ibGVuZC1jdXJ2ZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5wdXQvUG9pbnRlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdGFzay9sb29wLmpzIiwid2VicGFjazovLy8uL3NyYy9hZGFwdGVyL2Nzcy9zdGF0ZS1tYXAuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FkYXB0ZXIvY3NzL3ZhbHVlLXR5cGUtbWFwLmpzIiwid2VicGFjazovLy8uL3NyYy9hZGFwdGVyL2Nzcy9idWlsZC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYWRhcHRlci9jc3MvcHJlZml4ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FkYXB0ZXIvY3NzL3RyYW5zZm9ybS1wcm9wcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYWRhcHRlci9zdmcvdmFsdWUtdHlwZS1tYXAuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FkYXB0ZXIvc3ZnL2J1aWxkLmpzIiwid2VicGFjazovLy8uL3NyYy9hZGFwdGVyL3N2Zy1wYXRoL2J1aWxkLmpzIiwid2VicGFjazovLy8uL3NyYy92YWx1ZS10eXBlcy9zZXR0aW5ncy9kZWZhdWx0LXByb3BzLmpzIiwid2VicGFjazovLy8uL3NyYy92YWx1ZS10eXBlcy9zZXR0aW5ncy9kaWN0aW9uYXJ5LmpzIiwid2VicGFjazovLy8uL3NyYy9hY3Rpb25zL2Vhc2luZy9jcmVhdGUtZWFzaW5nLmpzIiwid2VicGFjazovLy8uL3NyYy9hY3Rpb25zL2Vhc2luZy9jcmVhdGUtYmV6aWVyLmpzIiwid2VicGFjazovLy8uL3NyYy90YXNrL3RpY2suanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Rhc2svbWFuYWdlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdUJBQWU7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSx3Qzs7Ozs7OztBQ3RDQTs7QUFFQTs7QUFFQTs7QUFFQSx3Q0FBdUMsNkJBQTZCLFlBQVksRUFBRSxPQUFPLGlCQUFpQixtQkFBbUIsdUJBQXVCLDRFQUE0RSxFQUFFLEVBQUUsc0JBQXNCLGVBQWUsRUFBRTs7QUFFM1E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsNENBQTJDLG1xQjs7Ozs7O0FDZjNDOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUM7O0FBRUQ7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUEsd0NBQXVDLDZCQUE2QixZQUFZLEVBQUUsT0FBTyxpQkFBaUIsbUJBQW1CLHVCQUF1Qiw0RUFBNEUsRUFBRSxFQUFFLHNCQUFzQixlQUFlLEVBQUU7O0FBRTNRLHVDQUFzQyx1Q0FBdUMsZ0JBQWdCOztBQUU3RjtBQUNBO0FBQ0Esa0VBQWlFLGFBQWE7QUFDOUU7QUFDQTs7QUFFQTtBQUNBLEdBQUU7O0FBRUY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxRUFBb0UsZUFBZTtBQUNuRjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHFFQUFvRSxlQUFlO0FBQ25GO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EscUVBQW9FLGVBQWU7QUFDbkY7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsc0NBQXFDOztBQUVyQztBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsNENBQTJDLG1qSjs7Ozs7O0FDaE8zQzs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7O0FBRUg7QUFDQTtBQUNBLElBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0Q0FBMkMsbXdDOzs7Ozs7QUM5QjNDOztBQUVBOztBQUVBLG9EQUFtRCxnQkFBZ0Isc0JBQXNCLE9BQU8sMkJBQTJCLDBCQUEwQix5REFBeUQsMkJBQTJCLEVBQUUsRUFBRSxFQUFFLGVBQWU7O0FBRTlQOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBLHVDQUFzQyx1Q0FBdUMsZ0JBQWdCOztBQUU3RiwrQ0FBOEMsaUJBQWlCLHFCQUFxQixvQ0FBb0MsNkRBQTZELG9CQUFvQixFQUFFLGVBQWU7O0FBRTFOLGtEQUFpRCwwQ0FBMEMsMERBQTBELEVBQUU7O0FBRXZKLGtEQUFpRCxhQUFhLHVGQUF1RixFQUFFLHVGQUF1Rjs7QUFFOU8sMkNBQTBDLCtEQUErRCxxR0FBcUcsRUFBRSx5RUFBeUUsZUFBZSx5RUFBeUUsRUFBRSxFQUFFLHVIQUF1SDs7QUFFNWU7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSx5RUFBd0U7O0FBRXhFOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBLHlFQUF3RTs7QUFFeEU7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esd0NBQXVDO0FBQ3ZDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx3REFBdUQsaUNBQWlDOztBQUV4RjtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1QsaUNBQWdDO0FBQ2hDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGlDQUFnQztBQUNoQzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsMEJBQXlCLDBCQUEwQjtBQUNuRDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLHdEQUF1RDtBQUN2RDtBQUNBO0FBQ0Esc0JBQXFCOztBQUVyQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYTtBQUNiLHFDQUFvQzs7QUFFcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVM7O0FBRVQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsVUFBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0Esb0JBQW1CLHVCQUF1QjtBQUMxQztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxRQUFPO0FBQ1A7QUFDQTtBQUNBOztBQUVBO0FBQ0EscUJBQW9CLHlCQUF5QjtBQUM3QztBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSx5RUFBd0U7QUFDeEU7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQSxzQkFBcUIsaUJBQWlCO0FBQ3RDOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSx1QkFBc0I7QUFDdEI7O0FBRUE7QUFDQSx1QkFBc0I7QUFDdEI7O0FBRUE7QUFDQSxFQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw0Q0FBMkMsbW11Qjs7Ozs7O0FDeFkzQzs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQSx1Q0FBc0MsdUNBQXVDLGdCQUFnQjs7QUFFN0Ysa0RBQWlELDBDQUEwQywwREFBMEQsRUFBRTs7QUFFdkosa0RBQWlELGFBQWEsdUZBQXVGLEVBQUUsdUZBQXVGOztBQUU5TywyQ0FBMEMsK0RBQStELHFHQUFxRyxFQUFFLHlFQUF5RSxlQUFlLHlFQUF5RSxFQUFFLEVBQUUsdUhBQXVIOztBQUU1ZTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGlCQUFnQixvQkFBb0I7QUFDcEM7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLG9CQUFtQix1QkFBdUI7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBOztBQUVBLG9CQUFtQix5QkFBeUI7QUFDNUM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFFBQU87QUFDUDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQSxzQkFBcUIseUJBQXlCO0FBQzlDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEVBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0EsRUFBQzs7QUFFRDtBQUNBLDRDQUEyQyx1bFc7Ozs7OztBQzlOM0M7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUEsdUNBQXNDLHVDQUF1QyxnQkFBZ0I7O0FBRTdGLGtEQUFpRCwwQ0FBMEMsMERBQTBELEVBQUU7O0FBRXZKLGtEQUFpRCxhQUFhLHVGQUF1RixFQUFFLHVGQUF1Rjs7QUFFOU8sMkNBQTBDLCtEQUErRCxxR0FBcUcsRUFBRSx5RUFBeUUsZUFBZSx5RUFBeUUsRUFBRSxFQUFFLHVIQUF1SDs7QUFFNWU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxzQkFBcUIsdUJBQXVCO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsb0JBQW1CLHVCQUF1QjtBQUMxQztBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLEVBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBQzs7QUFFRDtBQUNBLDRDQUEyQyx1c1I7Ozs7OztBQ3RMM0M7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUEsdUNBQXNDLHVDQUF1QyxnQkFBZ0I7O0FBRTdGLGtEQUFpRCwwQ0FBMEMsMERBQTBELEVBQUU7O0FBRXZKLGtEQUFpRCxhQUFhLHVGQUF1RixFQUFFLHVGQUF1Rjs7QUFFOU8sMkNBQTBDLCtEQUErRCxxR0FBcUcsRUFBRSx5RUFBeUUsZUFBZSx5RUFBeUUsRUFBRSxFQUFFLHVIQUF1SDs7QUFFNWU7QUFDQTs7QUFFQTtBQUNBOztBQUVBLG9FQUFtRSxhQUFhO0FBQ2hGO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxvQkFBbUIsdUJBQXVCO0FBQzFDO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsRUFBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUM7QUFDRDtBQUNBO0FBQ0EsRUFBQzs7QUFFRDtBQUNBLDRDQUEyQyxtM0s7Ozs7OztBQ3JHM0M7O0FBRUE7O0FBRUEsb0RBQW1ELGdCQUFnQixzQkFBc0IsT0FBTywyQkFBMkIsMEJBQTBCLHlEQUF5RCwyQkFBMkIsRUFBRSxFQUFFLEVBQUUsZUFBZTs7QUFFOVA7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUEsdUNBQXNDLHVDQUF1QyxnQkFBZ0I7O0FBRTdGLGtEQUFpRCwwQ0FBMEMsMERBQTBELEVBQUU7O0FBRXZKLGtEQUFpRCxhQUFhLHVGQUF1RixFQUFFLHVGQUF1Rjs7QUFFOU8sMkNBQTBDLCtEQUErRCxxR0FBcUcsRUFBRSx5RUFBeUUsZUFBZSx5RUFBeUUsRUFBRSxFQUFFLHVIQUF1SDs7QUFFNWU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG1DQUFrQztBQUNsQzs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsb0JBQW1CLHVCQUF1QjtBQUMxQzs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsRUFBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUM7O0FBRUQ7QUFDQSw0Q0FBMkMsdXRLOzs7Ozs7QUN2SDNDOztBQUVBOztBQUVBLG9EQUFtRCxnQkFBZ0Isc0JBQXNCLE9BQU8sMkJBQTJCLDBCQUEwQix5REFBeUQsMkJBQTJCLEVBQUUsRUFBRSxFQUFFLGVBQWU7O0FBRTlQOztBQUVBOztBQUVBLHdDQUF1Qyw2QkFBNkIsWUFBWSxFQUFFLE9BQU8saUJBQWlCLG1CQUFtQix1QkFBdUIsNEVBQTRFLEVBQUUsRUFBRSxzQkFBc0IsZUFBZSxFQUFFOztBQUUzUSwrQ0FBOEMsaUJBQWlCLHFCQUFxQixvQ0FBb0MsNkRBQTZELG9CQUFvQixFQUFFLGVBQWU7O0FBRTFOLGtEQUFpRCwwQ0FBMEMsMERBQTBELEVBQUUsRUFBRTtBQUN6SjtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBOztBQUVBLDRDQUEyQztBQUMzQzs7QUFFQTtBQUNBLEVBQUM7O0FBRUQ7QUFDQSw0Q0FBMkMsKzZJOzs7Ozs7QUNuSDNDOztBQUVBOztBQUVBLG9EQUFtRCxnQkFBZ0Isc0JBQXNCLE9BQU8sMkJBQTJCLDBCQUEwQix5REFBeUQsMkJBQTJCLEVBQUUsRUFBRSxFQUFFLGVBQWU7O0FBRTlQOztBQUVBOztBQUVBOztBQUVBLHVDQUFzQyx1Q0FBdUMsZ0JBQWdCOztBQUU3RixrREFBaUQsMENBQTBDLDBEQUEwRCxFQUFFOztBQUV2SixrREFBaUQsYUFBYSx1RkFBdUYsRUFBRSx1RkFBdUY7O0FBRTlPLDJDQUEwQywrREFBK0QscUdBQXFHLEVBQUUseUVBQXlFLGVBQWUseUVBQXlFLEVBQUUsRUFBRSx1SEFBdUg7O0FBRTVlO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQSw2QkFBNEI7QUFDNUI7O0FBRUE7QUFDQSxFQUFDOztBQUVEO0FBQ0EsNENBQTJDLG12Qzs7Ozs7O0FDcEQzQzs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQSx1Q0FBc0MsdUNBQXVDLGdCQUFnQjs7QUFFN0Y7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFlO0FBQ2Y7QUFDQTtBQUNBLElBQUc7O0FBRUg7QUFDQTtBQUNBLDRDQUEyQyx1NkM7Ozs7OztBQzFCM0M7O0FBRUE7O0FBRUEsb0RBQW1ELGdCQUFnQixzQkFBc0IsT0FBTywyQkFBMkIsMEJBQTBCLHlEQUF5RCwyQkFBMkIsRUFBRSxFQUFFLEVBQUUsZUFBZTs7QUFFOVA7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUEsdUNBQXNDLHVDQUF1QyxnQkFBZ0I7O0FBRTdGO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsUUFBTztBQUNQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLOztBQUVMO0FBQ0E7O0FBRUEsa0JBQWlCLGFBQWE7QUFDOUI7QUFDQTs7QUFFQSxXQUFVO0FBQ1Y7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxrQkFBaUIsb0JBQW9CO0FBQ3JDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHVFQUFzRTs7QUFFdEU7O0FBRUE7QUFDQTs7O0FBR0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0EsV0FBVTtBQUNWLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQSw0Q0FBMkMsdWdLOzs7Ozs7QUNwSDNDOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHFDQUFvQyxrQkFBa0I7O0FBRXREO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDRDQUEyQyxtbkc7Ozs7OztBQ25EM0M7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQSx1Q0FBc0MsdUNBQXVDLGdCQUFnQjs7QUFFN0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsMkNBQTBDLGlDQUFpQztBQUMzRSw0Q0FBMkMsbWxDOzs7Ozs7QUN2QjNDOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBLHVDQUFzQyx1Q0FBdUMsZ0JBQWdCOztBQUU3RjtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0EsRUFBQztBQUNELDRDQUEyQywyaEQ7Ozs7OztBQ3hDM0M7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUEsdUNBQXNDLHVDQUF1QyxnQkFBZ0I7O0FBRTdGO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUM7QUFDRCw0Q0FBMkMsMjdCOzs7Ozs7QUN0QjNDOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUEsdUNBQXNDLHVDQUF1QyxnQkFBZ0I7O0FBRTdGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSwyQ0FBMEMscUlBQXFJO0FBQy9LLDRDQUEyQyx1cEU7Ozs7OztBQzlDM0M7O0FBRUE7O0FBRUEsb0RBQW1ELGdCQUFnQixzQkFBc0IsT0FBTywyQkFBMkIsMEJBQTBCLHlEQUF5RCwyQkFBMkIsRUFBRSxFQUFFLEVBQUUsZUFBZTs7QUFFOVA7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUEsdUNBQXNDLHVDQUF1QyxnQkFBZ0I7O0FBRTdGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBLHNCQUFxQix1Q0FBdUM7QUFDNUQ7QUFDQSxFQUFDO0FBQ0QsNENBQTJDLHUxQzs7Ozs7O0FDakMzQzs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQSx1Q0FBc0MsdUNBQXVDLGdCQUFnQjs7QUFFN0Y7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEVBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHFGQUFvRixhQUFhO0FBQ2pHO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw0Q0FBMkMsbTBLOzs7Ozs7QUMxRzNDOztBQUVBOztBQUVBOztBQUVBOztBQUVBLHVDQUFzQyx1Q0FBdUMsZ0JBQWdCOztBQUU3Rjs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0gsb0NBQW1DLHFDQUFxQzs7QUFFeEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0EsNENBQTJDLHV0Qzs7Ozs7O0FDNUIzQzs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7O0FBR0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNB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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxxQkFBb0IsMEJBQTBCO0FBQzlDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsNENBQTJDLHU0UCIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuXG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRleHBvcnRzOiB7fSxcbiBcdFx0XHRpZDogbW9kdWxlSWQsXG4gXHRcdFx0bG9hZGVkOiBmYWxzZVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHdlYnBhY2svYm9vdHN0cmFwIDllYTRlZWY1NDhlOWIzNWVkZjIyXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgX3BvcG1vdGlvbiA9IHJlcXVpcmUoJy4uL3BvcG1vdGlvbicpO1xuXG52YXIgcG9wbW90aW9uID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQoX3BvcG1vdGlvbik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKG9iaikgeyBpZiAob2JqICYmIG9iai5fX2VzTW9kdWxlKSB7IHJldHVybiBvYmo7IH0gZWxzZSB7IHZhciBuZXdPYmogPSB7fTsgaWYgKG9iaiAhPSBudWxsKSB7IGZvciAodmFyIGtleSBpbiBvYmopIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGtleSkpIG5ld09ialtrZXldID0gb2JqW2tleV07IH0gfSBuZXdPYmouZGVmYXVsdCA9IG9iajsgcmV0dXJuIG5ld09iajsgfSB9XG5cbnZhciBVSXJlZiA9IHdpbmRvdy5tb3Rpb247XG5cbnBvcG1vdGlvbi5ub0NvbmZsaWN0ID0gZnVuY3Rpb24gKCkge1xuICB3aW5kb3cubW90aW9uID0gVUlyZWY7XG59O1xuXG53aW5kb3cubW90aW9uID0gd2luZG93LnBvcG1vdGlvbiA9IHBvcG1vdGlvbjtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbk55WXk5c2IyRmtMMmRzYjJKaGJDNXFjeUpkTENKdVlXMWxjeUk2VzEwc0ltMWhjSEJwYm1keklqb2lPenRCUVVGQk96dEpRVUZaT3pzN08wRkJSVm9zU1VGQlRTeFJRVUZSTEU5QlFVOHNUVUZCVURzN1FVRkZaQ3hWUVVGVkxGVkJRVllzUjBGQmRVSXNXVUZCV1R0QlFVTnFReXhUUVVGUExFMUJRVkFzUjBGQlowSXNTMEZCYUVJc1EwRkVhVU03UTBGQldqczdRVUZKZGtJc1QwRkJUeXhOUVVGUUxFZEJRV2RDTEU5QlFVOHNVMEZCVUN4SFFVRnRRaXhUUVVGdVFpSXNJbVpwYkdVaU9pSm5iRzlpWVd3dWFuTWlMQ0p6YjNWeVkyVlNiMjkwSWpvaUwxVnpaWEp6TDAxaGRIUXZVMmwwWlhNdmNHOXdiVzkwYVc5dUlpd2ljMjkxY21ObGMwTnZiblJsYm5RaU9sc2lhVzF3YjNKMElDb2dZWE1nY0c5d2JXOTBhVzl1SUdaeWIyMGdKeTR1TDNCdmNHMXZkR2x2YmljN1hHNWNibU52Ym5OMElGVkpjbVZtSUQwZ2QybHVaRzkzTG0xdmRHbHZianRjYmx4dWNHOXdiVzkwYVc5dUxtNXZRMjl1Wm14cFkzUWdQU0JtZFc1amRHbHZiaUFvS1NCN1hHNGdJSGRwYm1SdmR5NXRiM1JwYjI0Z1BTQlZTWEpsWmp0Y2JuMDdYRzVjYm5kcGJtUnZkeTV0YjNScGIyNGdQU0IzYVc1a2IzY3VjRzl3Ylc5MGFXOXVJRDBnY0c5d2JXOTBhVzl1T3lKZGZRPT1cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2xvYWQvZ2xvYmFsLmpzXG4gKiogbW9kdWxlIGlkID0gMFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0cy5BY3Rpb24gPSBleHBvcnRzLnRyYW5zZm9ybWVycyA9IGV4cG9ydHMudmFsdWVUeXBlID0gZXhwb3J0cy5zZXRHbG9iYWxEaWxhdGlvbiA9IGV4cG9ydHMudXRpbHMgPSBleHBvcnRzLmNhbGMgPSBleHBvcnRzLmRldGVjdEZsb3cgPSBleHBvcnRzLmVhc2luZyA9IGV4cG9ydHMuc3ZnUGF0aCA9IGV4cG9ydHMuc3ZnID0gZXhwb3J0cy5vYmplY3QgPSBleHBvcnRzLmNzcyA9IGV4cG9ydHMuYXR0ciA9IGV4cG9ydHMuY3JlYXRlQWRhcHRlciA9IGV4cG9ydHMudGltZWxpbmUgPSBleHBvcnRzLnN0YWdnZXIgPSBleHBvcnRzLnRhc2sgPSBleHBvcnRzLmlucHV0ID0gZXhwb3J0cy50cmFjayA9IGV4cG9ydHMucGh5c2ljcyA9IGV4cG9ydHMudHdlZW4gPSBleHBvcnRzLmZsb3cgPSB1bmRlZmluZWQ7XG5cbnZhciBfdGltZXIgPSByZXF1aXJlKCcuL3Rhc2svdGltZXInKTtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdzZXRHbG9iYWxEaWxhdGlvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIF90aW1lci5zZXRHbG9iYWxEaWxhdGlvbjtcbiAgfVxufSk7XG5cbnZhciBfQWN0aW9uID0gcmVxdWlyZSgnLi9hY3Rpb25zL0FjdGlvbicpO1xuXG52YXIgX0FjdGlvbjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9BY3Rpb24pO1xuXG52YXIgX0Zsb3cgPSByZXF1aXJlKCcuL2FjdGlvbnMvRmxvdycpO1xuXG52YXIgX0Zsb3cyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfRmxvdyk7XG5cbnZhciBfVHdlZW4gPSByZXF1aXJlKCcuL2FjdGlvbnMvVHdlZW4nKTtcblxudmFyIF9Ud2VlbjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9Ud2Vlbik7XG5cbnZhciBfUGh5c2ljcyA9IHJlcXVpcmUoJy4vYWN0aW9ucy9QaHlzaWNzJyk7XG5cbnZhciBfUGh5c2ljczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9QaHlzaWNzKTtcblxudmFyIF9UcmFjayA9IHJlcXVpcmUoJy4vYWN0aW9ucy9UcmFjaycpO1xuXG52YXIgX1RyYWNrMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX1RyYWNrKTtcblxudmFyIF9UYXNrID0gcmVxdWlyZSgnLi90YXNrL1Rhc2snKTtcblxudmFyIF9UYXNrMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX1Rhc2spO1xuXG52YXIgX0lucHV0ID0gcmVxdWlyZSgnLi9pbnB1dC9JbnB1dCcpO1xuXG52YXIgX0lucHV0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX0lucHV0KTtcblxudmFyIF9zdGFnZ2VyMiA9IHJlcXVpcmUoJy4vaW5jL3N0YWdnZXInKTtcblxudmFyIF9zdGFnZ2VyMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3N0YWdnZXIyKTtcblxudmFyIF90aW1lbGluZTIgPSByZXF1aXJlKCcuL2luYy90aW1lbGluZScpO1xuXG52YXIgX3RpbWVsaW5lMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3RpbWVsaW5lMik7XG5cbnZhciBfYWRhcHRlciA9IHJlcXVpcmUoJy4vYWRhcHRlci9hZGFwdGVyJyk7XG5cbnZhciBfYWRhcHRlcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9hZGFwdGVyKTtcblxudmFyIF9hdHRyQWRhcHRlciA9IHJlcXVpcmUoJy4vYWRhcHRlci9hdHRyLWFkYXB0ZXInKTtcblxudmFyIF9hdHRyQWRhcHRlcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9hdHRyQWRhcHRlcik7XG5cbnZhciBfY3NzQWRhcHRlciA9IHJlcXVpcmUoJy4vYWRhcHRlci9jc3MtYWRhcHRlcicpO1xuXG52YXIgX2Nzc0FkYXB0ZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY3NzQWRhcHRlcik7XG5cbnZhciBfb2JqZWN0QWRhcHRlciA9IHJlcXVpcmUoJy4vYWRhcHRlci9vYmplY3QtYWRhcHRlcicpO1xuXG52YXIgX29iamVjdEFkYXB0ZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfb2JqZWN0QWRhcHRlcik7XG5cbnZhciBfc3ZnQWRhcHRlciA9IHJlcXVpcmUoJy4vYWRhcHRlci9zdmctYWRhcHRlcicpO1xuXG52YXIgX3N2Z0FkYXB0ZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfc3ZnQWRhcHRlcik7XG5cbnZhciBfc3ZnUGF0aEFkYXB0ZXIgPSByZXF1aXJlKCcuL2FkYXB0ZXIvc3ZnLXBhdGgtYWRhcHRlcicpO1xuXG52YXIgX3N2Z1BhdGhBZGFwdGVyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3N2Z1BhdGhBZGFwdGVyKTtcblxudmFyIF9wcmVzZXRFYXNpbmcgPSByZXF1aXJlKCcuL2FjdGlvbnMvZWFzaW5nL3ByZXNldC1lYXNpbmcnKTtcblxudmFyIF9wcmVzZXRFYXNpbmcyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcHJlc2V0RWFzaW5nKTtcblxudmFyIF9nZXRGbG93ID0gcmVxdWlyZSgnLi9hY3Rpb25zL2Zsb3cvZ2V0LWZsb3cnKTtcblxudmFyIF9nZXRGbG93MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2dldEZsb3cpO1xuXG52YXIgX2NhbGMyID0gcmVxdWlyZSgnLi9pbmMvY2FsYycpO1xuXG52YXIgX2NhbGMgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChfY2FsYzIpO1xuXG52YXIgX3V0aWxzMiA9IHJlcXVpcmUoJy4vaW5jL3V0aWxzJyk7XG5cbnZhciBfdXRpbHMgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChfdXRpbHMyKTtcblxudmFyIF9hbHBoYSA9IHJlcXVpcmUoJy4vdmFsdWUtdHlwZXMvYWxwaGEnKTtcblxudmFyIF9hbHBoYTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9hbHBoYSk7XG5cbnZhciBfYW5nbGUgPSByZXF1aXJlKCcuL3ZhbHVlLXR5cGVzL2FuZ2xlJyk7XG5cbnZhciBfYW5nbGUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfYW5nbGUpO1xuXG52YXIgX2NvbG9yID0gcmVxdWlyZSgnLi92YWx1ZS10eXBlcy9jb2xvcicpO1xuXG52YXIgX2NvbG9yMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NvbG9yKTtcblxudmFyIF9jb21wbGV4ID0gcmVxdWlyZSgnLi92YWx1ZS10eXBlcy9jb21wbGV4Jyk7XG5cbnZhciBfY29tcGxleDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jb21wbGV4KTtcblxudmFyIF9oZXggPSByZXF1aXJlKCcuL3ZhbHVlLXR5cGVzL2hleCcpO1xuXG52YXIgX2hleDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9oZXgpO1xuXG52YXIgX2hzbCA9IHJlcXVpcmUoJy4vdmFsdWUtdHlwZXMvaHNsJyk7XG5cbnZhciBfaHNsMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2hzbCk7XG5cbnZhciBfcHggPSByZXF1aXJlKCcuL3ZhbHVlLXR5cGVzL3B4Jyk7XG5cbnZhciBfcHgyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcHgpO1xuXG52YXIgX3JnYiA9IHJlcXVpcmUoJy4vdmFsdWUtdHlwZXMvcmdiJyk7XG5cbnZhciBfcmdiMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JnYik7XG5cbnZhciBfc2NhbGUgPSByZXF1aXJlKCcuL3ZhbHVlLXR5cGVzL3NjYWxlJyk7XG5cbnZhciBfc2NhbGUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfc2NhbGUpO1xuXG52YXIgX3NoYWRvdyA9IHJlcXVpcmUoJy4vdmFsdWUtdHlwZXMvc2hhZG93Jyk7XG5cbnZhciBfc2hhZG93MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3NoYWRvdyk7XG5cbnZhciBfdW5pdCA9IHJlcXVpcmUoJy4vdmFsdWUtdHlwZXMvdW5pdCcpO1xuXG52YXIgX3VuaXQyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfdW5pdCk7XG5cbnZhciBfdHJhbnNmb3JtZXJzMiA9IHJlcXVpcmUoJy4vaW5jL3RyYW5zZm9ybWVycycpO1xuXG52YXIgX3RyYW5zZm9ybWVycyA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKF90cmFuc2Zvcm1lcnMyKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQob2JqKSB7IGlmIChvYmogJiYgb2JqLl9fZXNNb2R1bGUpIHsgcmV0dXJuIG9iajsgfSBlbHNlIHsgdmFyIG5ld09iaiA9IHt9OyBpZiAob2JqICE9IG51bGwpIHsgZm9yICh2YXIga2V5IGluIG9iaikgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwga2V5KSkgbmV3T2JqW2tleV0gPSBvYmpba2V5XTsgfSB9IG5ld09iai5kZWZhdWx0ID0gb2JqOyByZXR1cm4gbmV3T2JqOyB9IH1cblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuLy8gRXhwb3J0IGZhY3RvcnkgZnVuY3Rpb25zXG52YXIgZmxvdyA9IGV4cG9ydHMuZmxvdyA9IGZ1bmN0aW9uICgpIHtcbiAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICBhcmdzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICB9XG5cbiAgcmV0dXJuIG5ldyAoRnVuY3Rpb24ucHJvdG90eXBlLmJpbmQuYXBwbHkoX0Zsb3cyLmRlZmF1bHQsIFtudWxsXS5jb25jYXQoYXJncykpKSgpO1xufTsgLy8gSW1wb3J0IGNsYXNzZXMgLSBsb25nIHRlcm0gZ29hbCB0byBtb3ZlIHRvd2FyZHMgY29tcG9zaXRpb25cblxudmFyIHR3ZWVuID0gZXhwb3J0cy50d2VlbiA9IGZ1bmN0aW9uIChwcm9wcykge1xuICByZXR1cm4gbmV3IF9Ud2VlbjIuZGVmYXVsdChwcm9wcyk7XG59O1xudmFyIHBoeXNpY3MgPSBleHBvcnRzLnBoeXNpY3MgPSBmdW5jdGlvbiAocHJvcHMpIHtcbiAgcmV0dXJuIG5ldyBfUGh5c2ljczIuZGVmYXVsdChwcm9wcyk7XG59O1xudmFyIHRyYWNrID0gZXhwb3J0cy50cmFjayA9IGZ1bmN0aW9uICgpIHtcbiAgZm9yICh2YXIgX2xlbjIgPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gQXJyYXkoX2xlbjIpLCBfa2V5MiA9IDA7IF9rZXkyIDwgX2xlbjI7IF9rZXkyKyspIHtcbiAgICBhcmdzW19rZXkyXSA9IGFyZ3VtZW50c1tfa2V5Ml07XG4gIH1cblxuICByZXR1cm4gbmV3IChGdW5jdGlvbi5wcm90b3R5cGUuYmluZC5hcHBseShfVHJhY2syLmRlZmF1bHQsIFtudWxsXS5jb25jYXQoYXJncykpKSgpO1xufTtcbnZhciBpbnB1dCA9IGV4cG9ydHMuaW5wdXQgPSBmdW5jdGlvbiAoKSB7XG4gIGZvciAodmFyIF9sZW4zID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IEFycmF5KF9sZW4zKSwgX2tleTMgPSAwOyBfa2V5MyA8IF9sZW4zOyBfa2V5MysrKSB7XG4gICAgYXJnc1tfa2V5M10gPSBhcmd1bWVudHNbX2tleTNdO1xuICB9XG5cbiAgcmV0dXJuIG5ldyAoRnVuY3Rpb24ucHJvdG90eXBlLmJpbmQuYXBwbHkoX0lucHV0Mi5kZWZhdWx0LCBbbnVsbF0uY29uY2F0KGFyZ3MpKSkoKTtcbn07XG52YXIgdGFzayA9IGV4cG9ydHMudGFzayA9IGZ1bmN0aW9uICgpIHtcbiAgZm9yICh2YXIgX2xlbjQgPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gQXJyYXkoX2xlbjQpLCBfa2V5NCA9IDA7IF9rZXk0IDwgX2xlbjQ7IF9rZXk0KyspIHtcbiAgICBhcmdzW19rZXk0XSA9IGFyZ3VtZW50c1tfa2V5NF07XG4gIH1cblxuICByZXR1cm4gbmV3IChGdW5jdGlvbi5wcm90b3R5cGUuYmluZC5hcHBseShfVGFzazIuZGVmYXVsdCwgW251bGxdLmNvbmNhdChhcmdzKSkpKCk7XG59O1xuZXhwb3J0cy5zdGFnZ2VyID0gX3N0YWdnZXIzLmRlZmF1bHQ7XG5leHBvcnRzLnRpbWVsaW5lID0gX3RpbWVsaW5lMy5kZWZhdWx0O1xuXG4vLyBBZGFwdGVyc1xuXG5leHBvcnRzLmNyZWF0ZUFkYXB0ZXIgPSBfYWRhcHRlcjIuZGVmYXVsdDtcbmV4cG9ydHMuYXR0ciA9IF9hdHRyQWRhcHRlcjIuZGVmYXVsdDtcbmV4cG9ydHMuY3NzID0gX2Nzc0FkYXB0ZXIyLmRlZmF1bHQ7XG5leHBvcnRzLm9iamVjdCA9IF9vYmplY3RBZGFwdGVyMi5kZWZhdWx0O1xuZXhwb3J0cy5zdmcgPSBfc3ZnQWRhcHRlcjIuZGVmYXVsdDtcbmV4cG9ydHMuc3ZnUGF0aCA9IF9zdmdQYXRoQWRhcHRlcjIuZGVmYXVsdDtcblxuLy8gRWFzaW5nXG5cbmV4cG9ydHMuZWFzaW5nID0gX3ByZXNldEVhc2luZzIuZGVmYXVsdDtcbnZhciBkZXRlY3RGbG93ID0gZXhwb3J0cy5kZXRlY3RGbG93ID0gX2dldEZsb3cyLmRlZmF1bHQ7XG5cbi8vIFV0aWxzXG5leHBvcnRzLmNhbGMgPSBfY2FsYztcbmV4cG9ydHMudXRpbHMgPSBfdXRpbHM7XG5cbi8vIFZhbHVlIHR5cGVzXG5cbnZhciB2YWx1ZVR5cGUgPSBleHBvcnRzLnZhbHVlVHlwZSA9IHsgYWxwaGE6IF9hbHBoYTIuZGVmYXVsdCwgYW5nbGU6IF9hbmdsZTIuZGVmYXVsdCwgY29sb3I6IF9jb2xvcjIuZGVmYXVsdCwgY29tcGxleDogX2NvbXBsZXgyLmRlZmF1bHQsIGhleDogX2hleDIuZGVmYXVsdCwgaHNsOiBfaHNsMi5kZWZhdWx0LCBweDogX3B4Mi5kZWZhdWx0LCByZ2I6IF9yZ2IyLmRlZmF1bHQsIHNjYWxlOiBfc2NhbGUyLmRlZmF1bHQsIHNoYWRvdzogX3NoYWRvdzIuZGVmYXVsdCwgdW5pdDogX3VuaXQyLmRlZmF1bHQgfTtcblxuLy8gVHJhbnNmb3JtZXJzXG5leHBvcnRzLnRyYW5zZm9ybWVycyA9IF90cmFuc2Zvcm1lcnM7XG5cbi8qXG4gIFJldHVybnMgYSB2ZXJzaW9uIG9mIHRoZSBBY3Rpb24gYm91bmQgdG8gYSBGbG93XG5cbiAgV2UncmUgYWRkaW5nIGBvbmAgaGVyZSBiZWNhdXNlIEZsb3cgZXh0ZW5kcyBBY3Rpb24sXG4gIG90aGVyd2lzZSBjcmVhdGluZyBhIGNpcmN1bGFyIG1vZHVsYXIgZGVwZW5kZW5jeS4gRnV0dXJlXG4gIHJlZmFjdG9yaW5nLCBpZSBtb3ZpbmcgdG8gYSBjb21wb3NpdGlvbmFsIG1vZGVsIHdpbGxcbiAgcmVtb3ZlIHRoZSBuZWVkIGZvciB1cyB0byBkbyB0aGlzIGhlcmUuXG4qL1xuXG5fQWN0aW9uMi5kZWZhdWx0LnByb3RvdHlwZS5vbiA9IGZ1bmN0aW9uIChlbGVtZW50KSB7XG4gIGlmICghZWxlbWVudC5jb25uZWN0KSB7XG4gICAgZWxlbWVudCA9ICgwLCBfZ2V0RmxvdzIuZGVmYXVsdCkoZWxlbWVudCk7XG4gIH1cblxuICByZXR1cm4gZWxlbWVudC5jb25uZWN0KHRoaXMpO1xufTtcblxuZXhwb3J0cy5BY3Rpb24gPSBfQWN0aW9uMi5kZWZhdWx0O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluTnlZeTl3YjNCdGIzUnBiMjR1YW5NaVhTd2libUZ0WlhNaU9sdGRMQ0p0WVhCd2FXNW5jeUk2SWpzN096czdPenM3T3p0clFrRnRRMU03T3pzN1FVRnNRMVE3T3pzN1FVRkRRVHM3T3p0QlFVTkJPenM3TzBGQlEwRTdPenM3UVVGRFFUczdPenRCUVVOQk96czdPMEZCUTBFN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdRVUZ6UWtFN096czdPenM3T3pzN096dEJRVk5CT3pzN08wRkJRMEU3T3pzN1FVRkRRVHM3T3p0QlFVTkJPenM3TzBGQlEwRTdPenM3UVVGRFFUczdPenRCUVVOQk96czdPMEZCUTBFN096czdRVUZEUVRzN096dEJRVU5CT3pzN08wRkJRMEU3T3pzN096czdPenM3T3pzN1FVRjBRMDhzU1VGQlRTeHpRa0ZCVHp0dlEwRkJTVHM3T3pzd1JVRkJjVUk3UTBGQmVrSTdPMEZCUTJJc1NVRkJUU3gzUWtGQlVTeFZRVUZETEV0QlFVUTdVMEZCVnl4dlFrRkJWU3hMUVVGV08wTkJRVmc3UVVGRFpDeEpRVUZOTERSQ1FVRlZMRlZCUVVNc1MwRkJSRHRUUVVGWExITkNRVUZaTEV0QlFWbzdRMEZCV0R0QlFVTm9RaXhKUVVGTkxIZENRVUZSTzNGRFFVRkpPenM3T3pKRlFVRnpRanREUVVFeFFqdEJRVU5rTEVsQlFVMHNkMEpCUVZFN2NVTkJRVWs3T3pzN01rVkJRWE5DTzBOQlFURkNPMEZCUTJRc1NVRkJUU3h6UWtGQlR6dHhRMEZCU1RzN096c3dSVUZCY1VJN1EwRkJla0k3VVVGRFlqdFJRVU5CT3pzN08xRkJSMEU3VVVGRFFUdFJRVU5CTzFGQlEwRTdVVUZEUVR0UlFVTkJPenM3TzFGQlIwRTdRVUZGUVN4SlFVRk5MRzFFUVVGT096czdVVUZIU3p0UlFVTkJPenM3TzBGQlpVd3NTVUZCVFN4blEwRkJXU3hGUVVGRkxITkNRVUZHTEVWQlFWTXNjMEpCUVZRc1JVRkJaMElzYzBKQlFXaENMRVZCUVhWQ0xEQkNRVUYyUWl4RlFVRm5ReXhyUWtGQmFFTXNSVUZCY1VNc2EwSkJRWEpETEVWQlFUQkRMR2RDUVVFeFF5eEZRVUU0UXl4clFrRkJPVU1zUlVGQmJVUXNjMEpCUVc1RUxFVkJRVEJFTEhkQ1FVRXhSQ3hGUVVGclJTeHZRa0ZCYkVVc1JVRkJXanM3TzFGQlIwUTdPenM3T3pzN096czdPMEZCVlZvc2FVSkJRVThzVTBGQlVDeERRVUZwUWl4RlFVRnFRaXhIUVVGelFpeFZRVUZWTEU5QlFWWXNSVUZCYlVJN1FVRkRka01zVFVGQlNTeERRVUZETEZGQlFWRXNUMEZCVWl4RlFVRnBRanRCUVVOd1FpeGpRVUZWTEhWQ1FVRlJMRTlCUVZJc1EwRkJWaXhEUVVSdlFqdEhRVUYwUWpzN1FVRkpRU3hUUVVGUExGRkJRVkVzVDBGQlVpeERRVUZuUWl4SlFVRm9RaXhEUVVGUUxFTkJUSFZETzBOQlFXNUNPenRSUVZGaUlpd2labWxzWlNJNkluQnZjRzF2ZEdsdmJpNXFjeUlzSW5OdmRYSmpaVkp2YjNRaU9pSXZWWE5sY25NdlRXRjBkQzlUYVhSbGN5OXdiM0J0YjNScGIyNGlMQ0p6YjNWeVkyVnpRMjl1ZEdWdWRDSTZXeUl2THlCSmJYQnZjblFnWTJ4aGMzTmxjeUF0SUd4dmJtY2dkR1Z5YlNCbmIyRnNJSFJ2SUcxdmRtVWdkRzkzWVhKa2N5QmpiMjF3YjNOcGRHbHZibHh1YVcxd2IzSjBJRUZqZEdsdmJpQm1jbTl0SUNjdUwyRmpkR2x2Ym5NdlFXTjBhVzl1Snp0Y2JtbHRjRzl5ZENCR2JHOTNJR1p5YjIwZ0p5NHZZV04wYVc5dWN5OUdiRzkzSnp0Y2JtbHRjRzl5ZENCVWQyVmxiaUJtY205dElDY3VMMkZqZEdsdmJuTXZWSGRsWlc0bk8xeHVhVzF3YjNKMElGQm9lWE5wWTNNZ1puSnZiU0FuTGk5aFkzUnBiMjV6TDFCb2VYTnBZM01uTzF4dWFXMXdiM0owSUZSeVlXTnJJR1p5YjIwZ0p5NHZZV04wYVc5dWN5OVVjbUZqYXljN1hHNXBiWEJ2Y25RZ1ZHRnpheUJtY205dElDY3VMM1JoYzJzdlZHRnpheWM3WEc1cGJYQnZjblFnU1c1d2RYUWdabkp2YlNBbkxpOXBibkIxZEM5SmJuQjFkQ2M3WEc1Y2JpOHZJRVY0Y0c5eWRDQm1ZV04wYjNKNUlHWjFibU4wYVc5dWMxeHVaWGh3YjNKMElHTnZibk4wSUdac2IzY2dQU0FvTGk0dVlYSm5jeWtnUFQ0Z2JtVjNJRVpzYjNjb0xpNHVZWEpuY3lrN1hHNWxlSEJ2Y25RZ1kyOXVjM1FnZEhkbFpXNGdQU0FvY0hKdmNITXBJRDArSUc1bGR5QlVkMlZsYmlod2NtOXdjeWs3WEc1bGVIQnZjblFnWTI5dWMzUWdjR2g1YzJsamN5QTlJQ2h3Y205d2N5a2dQVDRnYm1WM0lGQm9lWE5wWTNNb2NISnZjSE1wTzF4dVpYaHdiM0owSUdOdmJuTjBJSFJ5WVdOcklEMGdLQzR1TG1GeVozTXBJRDArSUc1bGR5QlVjbUZqYXlndUxpNWhjbWR6S1R0Y2JtVjRjRzl5ZENCamIyNXpkQ0JwYm5CMWRDQTlJQ2d1TGk1aGNtZHpLU0E5UGlCdVpYY2dTVzV3ZFhRb0xpNHVZWEpuY3lrN1hHNWxlSEJ2Y25RZ1kyOXVjM1FnZEdGemF5QTlJQ2d1TGk1aGNtZHpLU0E5UGlCdVpYY2dWR0Z6YXlndUxpNWhjbWR6S1R0Y2JtVjRjRzl5ZENCemRHRm5aMlZ5SUdaeWIyMGdKeTR2YVc1akwzTjBZV2RuWlhJbk8xeHVaWGh3YjNKMElIUnBiV1ZzYVc1bElHWnliMjBnSnk0dmFXNWpMM1JwYldWc2FXNWxKenRjYmx4dUx5OGdRV1JoY0hSbGNuTmNibVY0Y0c5eWRDQmpjbVZoZEdWQlpHRndkR1Z5SUdaeWIyMGdKeTR2WVdSaGNIUmxjaTloWkdGd2RHVnlKenRjYm1WNGNHOXlkQ0JoZEhSeUlHWnliMjBnSnk0dllXUmhjSFJsY2k5aGRIUnlMV0ZrWVhCMFpYSW5PMXh1Wlhod2IzSjBJR056Y3lCbWNtOXRJQ2N1TDJGa1lYQjBaWEl2WTNOekxXRmtZWEIwWlhJbk8xeHVaWGh3YjNKMElHOWlhbVZqZENCbWNtOXRJQ2N1TDJGa1lYQjBaWEl2YjJKcVpXTjBMV0ZrWVhCMFpYSW5PMXh1Wlhod2IzSjBJSE4yWnlCbWNtOXRJQ2N1TDJGa1lYQjBaWEl2YzNabkxXRmtZWEIwWlhJbk8xeHVaWGh3YjNKMElITjJaMUJoZEdnZ1puSnZiU0FuTGk5aFpHRndkR1Z5TDNOMlp5MXdZWFJvTFdGa1lYQjBaWEluTzF4dVhHNHZMeUJGWVhOcGJtZGNibVY0Y0c5eWRDQmxZWE5wYm1jZ1puSnZiU0FuTGk5aFkzUnBiMjV6TDJWaGMybHVaeTl3Y21WelpYUXRaV0Z6YVc1bkp6dGNibWx0Y0c5eWRDQm5aWFJHYkc5M0lHWnliMjBnSnk0dllXTjBhVzl1Y3k5bWJHOTNMMmRsZEMxbWJHOTNKenRjYm1WNGNHOXlkQ0JqYjI1emRDQmtaWFJsWTNSR2JHOTNJRDBnWjJWMFJteHZkenRjYmx4dUx5OGdWWFJwYkhOY2JtVjRjRzl5ZENBcUlHRnpJR05oYkdNZ1puSnZiU0FuTGk5cGJtTXZZMkZzWXljN1hHNWxlSEJ2Y25RZ0tpQmhjeUIxZEdsc2N5Qm1jbTl0SUNjdUwybHVZeTkxZEdsc2N5YzdYRzVsZUhCdmNuUWdleUJ6WlhSSGJHOWlZV3hFYVd4aGRHbHZiaUI5SUdaeWIyMGdKeTR2ZEdGemF5OTBhVzFsY2ljN1hHNWNiaTh2SUZaaGJIVmxJSFI1Y0dWelhHNXBiWEJ2Y25RZ1lXeHdhR0VnWm5KdmJTQW5MaTkyWVd4MVpTMTBlWEJsY3k5aGJIQm9ZU2M3WEc1cGJYQnZjblFnWVc1bmJHVWdabkp2YlNBbkxpOTJZV3gxWlMxMGVYQmxjeTloYm1kc1pTYzdYRzVwYlhCdmNuUWdZMjlzYjNJZ1puSnZiU0FuTGk5MllXeDFaUzEwZVhCbGN5OWpiMnh2Y2ljN1hHNXBiWEJ2Y25RZ1kyOXRjR3hsZUNCbWNtOXRJQ2N1TDNaaGJIVmxMWFI1Y0dWekwyTnZiWEJzWlhnbk8xeHVhVzF3YjNKMElHaGxlQ0JtY205dElDY3VMM1poYkhWbExYUjVjR1Z6TDJobGVDYzdYRzVwYlhCdmNuUWdhSE5zSUdaeWIyMGdKeTR2ZG1Gc2RXVXRkSGx3WlhNdmFITnNKenRjYm1sdGNHOXlkQ0J3ZUNCbWNtOXRJQ2N1TDNaaGJIVmxMWFI1Y0dWekwzQjRKenRjYm1sdGNHOXlkQ0J5WjJJZ1puSnZiU0FuTGk5MllXeDFaUzEwZVhCbGN5OXlaMkluTzF4dWFXMXdiM0owSUhOallXeGxJR1p5YjIwZ0p5NHZkbUZzZFdVdGRIbHdaWE12YzJOaGJHVW5PMXh1YVcxd2IzSjBJSE5vWVdSdmR5Qm1jbTl0SUNjdUwzWmhiSFZsTFhSNWNHVnpMM05vWVdSdmR5YzdYRzVwYlhCdmNuUWdkVzVwZENCbWNtOXRJQ2N1TDNaaGJIVmxMWFI1Y0dWekwzVnVhWFFuTzF4dVpYaHdiM0owSUdOdmJuTjBJSFpoYkhWbFZIbHdaU0E5SUhzZ1lXeHdhR0VzSUdGdVoyeGxMQ0JqYjJ4dmNpd2dZMjl0Y0d4bGVDd2dhR1Y0TENCb2Myd3NJSEI0TENCeVoySXNJSE5qWVd4bExDQnphR0ZrYjNjc0lIVnVhWFFnZlR0Y2JseHVMeThnVkhKaGJuTm1iM0p0WlhKelhHNWxlSEJ2Y25RZ0tpQmhjeUIwY21GdWMyWnZjbTFsY25NZ1puSnZiU0FuTGk5cGJtTXZkSEpoYm5ObWIzSnRaWEp6Snp0Y2JseHVMeXBjYmlBZ1VtVjBkWEp1Y3lCaElIWmxjbk5wYjI0Z2IyWWdkR2hsSUVGamRHbHZiaUJpYjNWdVpDQjBieUJoSUVac2IzZGNibHh1SUNCWFpTZHlaU0JoWkdScGJtY2dZRzl1WUNCb1pYSmxJR0psWTJGMWMyVWdSbXh2ZHlCbGVIUmxibVJ6SUVGamRHbHZiaXhjYmlBZ2IzUm9aWEozYVhObElHTnlaV0YwYVc1bklHRWdZMmx5WTNWc1lYSWdiVzlrZFd4aGNpQmtaWEJsYm1SbGJtTjVMaUJHZFhSMWNtVmNiaUFnY21WbVlXTjBiM0pwYm1jc0lHbGxJRzF2ZG1sdVp5QjBieUJoSUdOdmJYQnZjMmwwYVc5dVlXd2diVzlrWld3Z2QybHNiRnh1SUNCeVpXMXZkbVVnZEdobElHNWxaV1FnWm05eUlIVnpJSFJ2SUdSdklIUm9hWE1nYUdWeVpTNWNiaW92WEc1QlkzUnBiMjR1Y0hKdmRHOTBlWEJsTG05dUlEMGdablZ1WTNScGIyNGdLR1ZzWlcxbGJuUXBJSHRjYmlBZ2FXWWdLQ0ZsYkdWdFpXNTBMbU52Ym01bFkzUXBJSHRjYmlBZ0lDQmxiR1Z0Wlc1MElEMGdaMlYwUm14dmR5aGxiR1Z0Wlc1MEtUdGNiaUFnZlZ4dVhHNGdJSEpsZEhWeWJpQmxiR1Z0Wlc1MExtTnZibTVsWTNRb2RHaHBjeWs3WEc1OU8xeHVYRzVsZUhCdmNuUWdleUJCWTNScGIyNGdmVHNpWFgwPVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvcG9wbW90aW9uLmpzXG4gKiogbW9kdWxlIGlkID0gMVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0cy5zZXRHbG9iYWxEaWxhdGlvbiA9IHVuZGVmaW5lZDtcblxudmFyIF91dGlscyA9IHJlcXVpcmUoJy4uL2luYy91dGlscycpO1xuXG52YXIgTUFYX0VMQVBTRUQgPSAzMztcblxudmFyIGN1cnJlbnQgPSAwO1xudmFyIGVsYXBzZWQgPSAxNi43O1xudmFyIGRpbGF0aW9uID0gMTtcblxuZXhwb3J0cy5kZWZhdWx0ID0ge1xuICB1cGRhdGU6IGZ1bmN0aW9uIChmcmFtZXN0YW1wKSB7XG4gICAgZWxhcHNlZCA9IE1hdGgubWF4KE1hdGgubWluKGZyYW1lc3RhbXAgLSBjdXJyZW50LCBNQVhfRUxBUFNFRCksIDEpICogZGlsYXRpb247XG4gICAgY3VycmVudCA9IGZyYW1lc3RhbXA7XG4gIH0sXG5cbiAgc3RhcnQ6IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gY3VycmVudCA9ICgwLCBfdXRpbHMuY3VycmVudFRpbWUpKCk7XG4gIH0sXG5cbiAgZ2V0RWxhcHNlZDogZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBlbGFwc2VkO1xuICB9XG59O1xudmFyIHNldEdsb2JhbERpbGF0aW9uID0gZXhwb3J0cy5zZXRHbG9iYWxEaWxhdGlvbiA9IGZ1bmN0aW9uIChuZXdEaWxhdGlvbikge1xuICByZXR1cm4gZGlsYXRpb24gPSBuZXdEaWxhdGlvbjtcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5OeVl5OTBZWE5yTDNScGJXVnlMbXB6SWwwc0ltNWhiV1Z6SWpwYlhTd2liV0Z3Y0dsdVozTWlPaUk3T3pzN08wRkJRVUU3TzBGQlJVRXNTVUZCVFN4alFVRmpMRVZCUVdRN08wRkJSVTRzU1VGQlNTeFZRVUZWTEVOQlFWWTdRVUZEU2l4SlFVRkpMRlZCUVZVc1NVRkJWanRCUVVOS0xFbEJRVWtzVjBGQlZ5eERRVUZZT3p0clFrRkZWenRCUVVOaUxGVkJRVkVzVlVGQlF5eFZRVUZFTEVWQlFXZENPMEZCUTNSQ0xHTkJRVlVzUzBGQlN5eEhRVUZNTEVOQlFWTXNTMEZCU3l4SFFVRk1MRU5CUVZNc1lVRkJZU3hQUVVGaUxFVkJRWE5DTEZkQlFTOUNMRU5CUVZRc1JVRkJjMFFzUTBGQmRFUXNTVUZCTWtRc1VVRkJNMFFzUTBGRVdUdEJRVVYwUWl4alFVRlZMRlZCUVZZc1EwRkdjMEk3UjBGQmFFSTdPMEZCUzFJc1UwRkJUenRYUVVGTkxGVkJRVlVzZVVKQlFWWTdSMEZCVGpzN1FVRkZVQ3hqUVVGWk8xZEJRVTA3UjBGQlRqczdRVUZIVUN4SlFVRk5MR2RFUVVGdlFpeFZRVUZETEZkQlFVUTdVMEZCYVVJc1YwRkJWeXhYUVVGWU8wTkJRV3BDSWl3aVptbHNaU0k2SW5ScGJXVnlMbXB6SWl3aWMyOTFjbU5sVW05dmRDSTZJaTlWYzJWeWN5OU5ZWFIwTDFOcGRHVnpMM0J2Y0cxdmRHbHZiaUlzSW5OdmRYSmpaWE5EYjI1MFpXNTBJanBiSW1sdGNHOXlkQ0I3SUdOMWNuSmxiblJVYVcxbElIMGdabkp2YlNBbkxpNHZhVzVqTDNWMGFXeHpKenRjYmx4dVkyOXVjM1FnVFVGWVgwVk1RVkJUUlVRZ1BTQXpNenRjYmx4dWJHVjBJR04xY25KbGJuUWdQU0F3TzF4dWJHVjBJR1ZzWVhCelpXUWdQU0F4Tmk0M08xeHViR1YwSUdScGJHRjBhVzl1SUQwZ01UdGNibHh1Wlhod2IzSjBJR1JsWm1GMWJIUWdlMXh1SUNCMWNHUmhkR1U2SUNobWNtRnRaWE4wWVcxd0tTQTlQaUI3WEc0Z0lDQWdaV3hoY0hObFpDQTlJRTFoZEdndWJXRjRLRTFoZEdndWJXbHVLR1p5WVcxbGMzUmhiWEFnTFNCamRYSnlaVzUwTENCTlFWaGZSVXhCVUZORlJDa3NJREVwSUNvZ1pHbHNZWFJwYjI0N1hHNGdJQ0FnWTNWeWNtVnVkQ0E5SUdaeVlXMWxjM1JoYlhBN1hHNGdJSDBzWEc1Y2JpQWdjM1JoY25RNklDZ3BJRDArSUdOMWNuSmxiblFnUFNCamRYSnlaVzUwVkdsdFpTZ3BMRnh1WEc0Z0lHZGxkRVZzWVhCelpXUTZJQ2dwSUQwK0lHVnNZWEJ6WldSY2JuMDdYRzVjYm1WNGNHOXlkQ0JqYjI1emRDQnpaWFJIYkc5aVlXeEVhV3hoZEdsdmJpQTlJQ2h1WlhkRWFXeGhkR2x2YmlrZ1BUNGdaR2xzWVhScGIyNGdQU0J1WlhkRWFXeGhkR2x2YmpzaVhYMD1cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL3Rhc2svdGltZXIuanNcbiAqKiBtb2R1bGUgaWQgPSAyXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07XG5cbnZhciBfVGFzazIgPSByZXF1aXJlKCcuLi90YXNrL1Rhc2snKTtcblxudmFyIF9UYXNrMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX1Rhc2syKTtcblxudmFyIF9jYWxjID0gcmVxdWlyZSgnLi4vaW5jL2NhbGMnKTtcblxudmFyIF91dGlscyA9IHJlcXVpcmUoJy4uL2luYy91dGlscycpO1xuXG52YXIgX2RldGVjdCA9IHJlcXVpcmUoJy4uL3ZhbHVlLXR5cGVzL2RldGVjdCcpO1xuXG52YXIgX2RldGVjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9kZXRlY3QpO1xuXG52YXIgX251bWVyaWNhbFZhbHVlcyA9IHJlcXVpcmUoJy4uL2luYy9udW1lcmljYWwtdmFsdWVzJyk7XG5cbnZhciBfbnVtZXJpY2FsVmFsdWVzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX251bWVyaWNhbFZhbHVlcyk7XG5cbnZhciBfZGV0ZWN0QWRhcHRlciA9IHJlcXVpcmUoJy4uL2luYy9kZXRlY3QtYWRhcHRlcicpO1xuXG52YXIgX2RldGVjdEFkYXB0ZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZGV0ZWN0QWRhcHRlcik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhvYmosIGtleXMpIHsgdmFyIHRhcmdldCA9IHt9OyBmb3IgKHZhciBpIGluIG9iaikgeyBpZiAoa2V5cy5pbmRleE9mKGkpID49IDApIGNvbnRpbnVlOyBpZiAoIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGkpKSBjb250aW51ZTsgdGFyZ2V0W2ldID0gb2JqW2ldOyB9IHJldHVybiB0YXJnZXQ7IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoIXNlbGYpIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBjYWxsICYmICh0eXBlb2YgY2FsbCA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSA/IGNhbGwgOiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90IFwiICsgdHlwZW9mIHN1cGVyQ2xhc3MpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIGVudW1lcmFibGU6IGZhbHNlLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIDogc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzczsgfVxuXG52YXIgTlVNX05VTUVSSUNBTF9WQUxVRVMgPSBfbnVtZXJpY2FsVmFsdWVzMi5kZWZhdWx0Lmxlbmd0aDtcblxudmFyIGRlZmF1bHRSZW5kZXJlciA9IGZ1bmN0aW9uIChfcmVmKSB7XG4gIHZhciBzdGF0ZSA9IF9yZWYuc3RhdGU7XG4gIHZhciBhZGFwdGVyID0gX3JlZi5hZGFwdGVyO1xuICB2YXIgYWRhcHRlckRhdGEgPSBfcmVmLmFkYXB0ZXJEYXRhO1xuICB2YXIgZWxlbWVudCA9IF9yZWYuZWxlbWVudDtcbiAgcmV0dXJuIGFkYXB0ZXIoZWxlbWVudCwgc3RhdGUsIGFkYXB0ZXJEYXRhKTtcbn07XG5cbnZhciBjb252ZXJ0SWZTaG91bGRCZU51bWJlciA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICByZXR1cm4gIWlzTmFOKHZhbHVlKSA/IHBhcnNlRmxvYXQodmFsdWUpIDogdmFsdWU7XG59O1xuXG52YXIgQWN0aW9uID0gZnVuY3Rpb24gKF9UYXNrKSB7XG4gIF9pbmhlcml0cyhBY3Rpb24sIF9UYXNrKTtcblxuICBmdW5jdGlvbiBBY3Rpb24oKSB7XG4gICAgdmFyIHByb3BzID0gYXJndW1lbnRzLmxlbmd0aCA8PSAwIHx8IGFyZ3VtZW50c1swXSA9PT0gdW5kZWZpbmVkID8ge30gOiBhcmd1bWVudHNbMF07XG5cbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgQWN0aW9uKTtcblxuICAgIHByb3BzLnN0YXRlID0ge307XG4gICAgcHJvcHMudmFsdWVLZXlzID0gW107XG4gICAgcHJvcHMucGFyZW50S2V5cyA9IFtdO1xuICAgIHJldHVybiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCBfVGFzay5jYWxsKHRoaXMsIHByb3BzKSk7XG4gIH1cblxuICAvKlxuICAgICMgU2V0IEFjdGlvbiBwcm9wZXJ0aWVzXG4gICAgIyMgU2V0IHVzZXItZGVmaW5lZCBBY3Rpb24gcHJvcGVydGllc1xuICAgICBAcGFyYW0gW29iamVjdF1cbiAgICBAcmV0dXJuIFtBY3Rpb25dXG4gICovXG5cblxuICBBY3Rpb24ucHJvdG90eXBlLnNldCA9IGZ1bmN0aW9uIHNldCgpIHtcbiAgICB2YXIgcHJvcHMgPSBhcmd1bWVudHMubGVuZ3RoIDw9IDAgfHwgYXJndW1lbnRzWzBdID09PSB1bmRlZmluZWQgPyB7fSA6IGFyZ3VtZW50c1swXTtcblxuICAgIHRoaXMudmFsdWVzID0gdGhpcy52YWx1ZXMgfHwge307XG5cbiAgICB2YXIgdmFsdWVzID0gcHJvcHMudmFsdWVzO1xuXG4gICAgdmFyIHByb3BzVG9TZXQgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMocHJvcHMsIFsndmFsdWVzJ10pO1xuXG4gICAgdmFyIGluaGVyaXRhYmxlID0ge307XG5cbiAgICAvLyBTZXQgbm9uLWNvbnN1bWVkIHByb3BlcnRpZXNcbiAgICBfVGFzay5wcm90b3R5cGUuc2V0LmNhbGwodGhpcywgcHJvcHNUb1NldCk7XG5cbiAgICAvLyBEZXRlY3QgY29ycmVjdCBgYWRhcHRlcmAgaWYgbm9uZSBleGlzdHMgYW5kIGBlbGVtZW50YCBpcyBiZWluZyBzZXRcbiAgICBpZiAodGhpcy5lbGVtZW50KSB7XG4gICAgICBpZiAoIXRoaXMuYWRhcHRlcikge1xuICAgICAgICAvLyBEdWNrdHlwaXNoIGNoZWNrIGZvciBBZGFwdGVyXG4gICAgICAgIHRoaXMuYWRhcHRlciA9ICgwLCBfZGV0ZWN0QWRhcHRlcjIuZGVmYXVsdCkodGhpcy5lbGVtZW50KTtcblxuICAgICAgICBpZiAodGhpcy5hZGFwdGVyLmdldEVsZW1lbnREYXRhKSB7XG4gICAgICAgICAgdGhpcy5hZGFwdGVyRGF0YSA9IHRoaXMuYWRhcHRlci5nZXRFbGVtZW50RGF0YSh0aGlzLmVsZW1lbnQpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmICghdGhpcy5vblJlbmRlcikge1xuICAgICAgICB0aGlzLm9uUmVuZGVyID0gZGVmYXVsdFJlbmRlcmVyO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIFByaW1lIGFuIG9iamVjdCB0byBpbmhlcml0IGZyb20sIHdpdGggb25seSBgdmFsdWVgIHByb3BlcnRpZXNcbiAgICBmb3IgKHZhciBrZXkgaW4gdGhpcy5kZWZhdWx0VmFsdWUpIHtcbiAgICAgIGlmICh0aGlzLmRlZmF1bHRWYWx1ZS5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgIGlmIChwcm9wc1RvU2V0Lmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICBpbmhlcml0YWJsZVtrZXldID0gcHJvcHNUb1NldFtrZXldO1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXNba2V5XSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgaW5oZXJpdGFibGVba2V5XSA9IHRoaXNba2V5XTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIC8vIFVwZGF0ZSBleGlzdGluZyB2YWx1ZXMgd2l0aCBpbmhlcml0YWJsZSBwcm9wZXJ0aWVzXG4gICAgZm9yICh2YXIgX2tleSBpbiB0aGlzLnZhbHVlcykge1xuICAgICAgaWYgKHRoaXMudmFsdWVzLmhhc093blByb3BlcnR5KF9rZXkpKSB7XG4gICAgICAgIHRoaXMudmFsdWVzW19rZXldID0gX2V4dGVuZHMoe30sIHRoaXMudmFsdWVzW19rZXldLCBpbmhlcml0YWJsZSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gVXBkYXRlXG4gICAgaWYgKHZhbHVlcykge1xuICAgICAgdGhpcy5zZXRWYWx1ZXModmFsdWVzLCBpbmhlcml0YWJsZSk7XG5cbiAgICAgIC8vIFByZWNvbXB1dGUgbnVtYmVyIG9mIHZhbHVlIGtleSBhbmQgcGFyZW50IGtleXMgdG8gYXZvaWQgcGVyLWZyYW1lIG1lYXN1cmVtZW50XG4gICAgICB0aGlzLm51bVZhbHVlS2V5cyA9IHRoaXMudmFsdWVLZXlzLmxlbmd0aDtcbiAgICAgIHRoaXMubnVtUGFyZW50S2V5cyA9IHRoaXMucGFyZW50S2V5cy5sZW5ndGg7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgQWN0aW9uLnByb3RvdHlwZS5zZXRWYWx1ZXMgPSBmdW5jdGlvbiBzZXRWYWx1ZXModmFsdWVzLCBpbmhlcml0KSB7XG4gICAgLy8gSXRlcmF0ZSBvdmVyIGFsbCBpbmNvbWluZyB2YWx1ZXMgYW5kIHNldFxuICAgIGZvciAodmFyIGtleSBpbiB2YWx1ZXMpIHtcbiAgICAgIGlmICh2YWx1ZXMuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICB2YXIgaGFzQ2hpbGRyZW4gPSBmYWxzZTtcbiAgICAgICAgdmFyIGNoaWxkcmVuID0ge307XG5cbiAgICAgICAgLy8gTWVyZ2UgaW50byBleGlzdGluZyB2YWx1ZSBvciBjcmVhdGUgbmV3XG4gICAgICAgIHZhciB2YWx1ZUFscmVhZHlFeGlzdHMgPSB0aGlzLnZhbHVlc1trZXldICE9PSB1bmRlZmluZWQ7XG4gICAgICAgIHZhciBuZXdWYWx1ZSA9IHZhbHVlQWxyZWFkeUV4aXN0cyA/IF9leHRlbmRzKHt9LCB0aGlzLnZhbHVlc1trZXldKSA6IF9leHRlbmRzKHt9LCBpbmhlcml0KTtcblxuICAgICAgICAvLyBJZiB2YWx1ZXMgaXMgbm90IGFuIG9iamVjdCwgYXNzaWduIHZhbHVlIHRvIGRlZmF1bHQgcHJvcFxuICAgICAgICBpZiAoISgwLCBfdXRpbHMuaXNPYmopKHZhbHVlc1trZXldKSkge1xuICAgICAgICAgIG5ld1ZhbHVlW3RoaXMuZGVmYXVsdFZhbHVlUHJvcF0gPSB2YWx1ZXNba2V5XTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBuZXdWYWx1ZSA9IF9leHRlbmRzKHt9LCBuZXdWYWx1ZSwgdmFsdWVzW2tleV0pO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gSWYgd2UndmUgZ290IGFuIGFkYXB0ZXIsIGdldCB0aGUgY3VycmVudCB2YWx1ZVxuICAgICAgICBpZiAobmV3VmFsdWUuY3VycmVudCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgaWYgKHRoaXMuYWRhcHRlcikge1xuICAgICAgICAgICAgbmV3VmFsdWUuY3VycmVudCA9IGNvbnZlcnRJZlNob3VsZEJlTnVtYmVyKHRoaXMuYWRhcHRlci5nZXQodGhpcy5lbGVtZW50LCBrZXkpKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAobmV3VmFsdWUuZnJvbSA9PT0gdW5kZWZpbmVkICYmIHRoaXMuYWRhcHRlcikge1xuICAgICAgICAgIG5ld1ZhbHVlLmZyb20gPSBuZXdWYWx1ZS5jdXJyZW50O1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gQXBwbHkgZGVmYXVsdCB2YWx1ZSBwcm9wZXJ0aWVzXG4gICAgICAgIGlmICghdmFsdWVBbHJlYWR5RXhpc3RzKSB7XG4gICAgICAgICAgbmV3VmFsdWUgPSBfZXh0ZW5kcyh7fSwgdGhpcy5kZWZhdWx0VmFsdWUsIG5ld1ZhbHVlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIElmIHdlIGRvbid0IGhhdmUgYSB2YWx1ZSB0eXBlIGFuZCB3ZSBkbyBoYXZlIGFuIEFkYXB0ZXIsIGNoZWNrIGZvciB0eXBlIHdpdGggdmFsdWUga2V5XG4gICAgICAgIGlmICghbmV3VmFsdWUudHlwZSAmJiB0aGlzLmFkYXB0ZXIgJiYgdGhpcy5hZGFwdGVyLmNoZWNrVmFsdWVUeXBlKSB7XG4gICAgICAgICAgbmV3VmFsdWUudHlwZSA9IHRoaXMuYWRhcHRlci5jaGVja1ZhbHVlVHlwZShrZXkpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gSWYgd2Ugc3RpbGwgZG9uJ3QgaGF2ZSBhIHZhbHVlIHR5cGUgYW5kIHRoaXMgaXMgdGhlIGZpcnN0IHRpbWUgd2UndmUgc2V0IHRoaXMgdmFsdWUsIGNoZWNrIG51bWVyaWNhbCB2YWx1ZXMgZm9yIHN0cmluZ3MgYW5kIHRlc3RcbiAgICAgICAgaWYgKCFuZXdWYWx1ZS50eXBlICYmICF0aGlzLnZhbHVlc1trZXldKSB7XG4gICAgICAgICAgbmV3VmFsdWUudHlwZSA9ICgwLCBfZGV0ZWN0Mi5kZWZhdWx0KShuZXdWYWx1ZSk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBJZiB3ZSBoYXZlIGEgdmFsdWUgdHlwZSwgaGFuZGxlLiBUaGlzIGlzIG15IGxlYXN0IGZhdm91cml0ZSBwYXJ0IG9mIFBvcG1vdGlvbiwgc28uLi4gZW5qb3kuXG4gICAgICAgIGlmIChuZXdWYWx1ZS50eXBlKSB7XG4gICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBOVU1fTlVNRVJJQ0FMX1ZBTFVFUzsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgcHJvcE5hbWUgPSBfbnVtZXJpY2FsVmFsdWVzMi5kZWZhdWx0W2ldO1xuICAgICAgICAgICAgdmFyIHZhbHVlUHJvcCA9IG5ld1ZhbHVlW3Byb3BOYW1lXTtcblxuICAgICAgICAgICAgLy8gSWYgdGhpcyBwcm9wIGlzIGEgc3RyaW5nIGFuZCB3ZSBoYXZlIGEgc3BsaXR0ZXIsIHNwbGl0XG4gICAgICAgICAgICBpZiAobmV3VmFsdWUudHlwZS5oYXNPd25Qcm9wZXJ0eSgnc3BsaXQnKSkge1xuICAgICAgICAgICAgICB2YXIgc3BsaXRQcm9wID0gKDAsIF91dGlscy5pc1N0cmluZykodmFsdWVQcm9wKSA/IG5ld1ZhbHVlLnR5cGUuc3BsaXQodmFsdWVQcm9wKSA6IHt9O1xuXG4gICAgICAgICAgICAgIGZvciAodmFyIHNwbGl0S2V5IGluIHNwbGl0UHJvcCkge1xuICAgICAgICAgICAgICAgIGlmIChzcGxpdFByb3AuaGFzT3duUHJvcGVydHkoc3BsaXRLZXkpKSB7XG4gICAgICAgICAgICAgICAgICB2YXIgY29tYmluZWRLZXkgPSBrZXkgKyBzcGxpdEtleTtcblxuICAgICAgICAgICAgICAgICAgLy8gSWYgd2UgZG9uJ3QgaGF2ZSBhIGNoaWxkIHZhbHVlIGZvciB0aGlzIGtleSwgbWFrZSBvbmVcbiAgICAgICAgICAgICAgICAgIGlmICghY2hpbGRyZW5bY29tYmluZWRLZXldKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBkZWZhdWx0VmFsdWUgPSBuZXdWYWx1ZS50eXBlLmRlZmF1bHRQcm9wcyAmJiBuZXdWYWx1ZS50eXBlLmRlZmF1bHRQcm9wc1tzcGxpdEtleV0gPyBuZXdWYWx1ZS50eXBlLmRlZmF1bHRQcm9wc1tzcGxpdEtleV0gOiBuZXdWYWx1ZS50eXBlLmRlZmF1bHRQcm9wcyB8fCB7fTtcblxuICAgICAgICAgICAgICAgICAgICBjaGlsZHJlbltjb21iaW5lZEtleV0gPSBfZXh0ZW5kcyh7fSwgbmV3VmFsdWUsIGRlZmF1bHRWYWx1ZSwge1xuICAgICAgICAgICAgICAgICAgICAgIHBhcmVudDoga2V5LFxuICAgICAgICAgICAgICAgICAgICAgIGNoaWxkS2V5OiBzcGxpdEtleVxuICAgICAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgICAgICBkZWxldGUgY2hpbGRyZW5bY29tYmluZWRLZXldLnR5cGU7XG4gICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgIGhhc0NoaWxkcmVuID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgIGNoaWxkcmVuW2NvbWJpbmVkS2V5XVtwcm9wTmFtZV0gPSBwYXJzZUZsb2F0KHNwbGl0UHJvcFtzcGxpdEtleV0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIC8vIElmIHdlIGhhdmUgYSB0ZW1wbGF0ZSBmdW5jdGlvbiwgZ2VuZXJhdGVcbiAgICAgICAgICAgICAgaWYgKCFuZXdWYWx1ZS50ZW1wbGF0ZSAmJiBuZXdWYWx1ZS50eXBlLnRlbXBsYXRlICYmICgwLCBfdXRpbHMuaXNTdHJpbmcpKHZhbHVlUHJvcCkpIHtcbiAgICAgICAgICAgICAgICBuZXdWYWx1ZS50ZW1wbGF0ZSA9IG5ld1ZhbHVlLnR5cGUudGVtcGxhdGUodmFsdWVQcm9wKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIGlmIChuZXdWYWx1ZS50eXBlLmRlZmF1bHRQcm9wcykge1xuICAgICAgICAgICAgICBuZXdWYWx1ZSA9IF9leHRlbmRzKHt9LCBuZXdWYWx1ZS50eXBlLmRlZmF1bHRQcm9wcywgbmV3VmFsdWUpO1xuXG4gICAgICAgICAgICAgIC8vIFRoaXMgaXMgYSBiaXQgb2YgYSBoYWNrIC0gdGhpcyBlbnRpcmUgZnVuY3Rpb24gaXMgYSBoYWNrLiBTb3JyeSBmdXR1cmUgc2VsZi4gSSBsb29rIGZvcndhcmQgdG8gc2NyYXBwaW5nIHRoZSBsb3Qgb2YgaXQuXG4gICAgICAgICAgICAgIGlmIChuZXdWYWx1ZS50eXBlLmRlZmF1bHRQcm9wcy50eXBlKSB7XG4gICAgICAgICAgICAgICAgbmV3VmFsdWUudHlwZSA9IG5ld1ZhbHVlLnR5cGUuZGVmYXVsdFByb3BzLnR5cGU7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHZhbHVlUHJvcCAhPT0gdW5kZWZpbmVkICYmIG5ld1ZhbHVlLnR5cGUucGFyc2UpIHtcbiAgICAgICAgICAgICAgbmV3VmFsdWVbcHJvcE5hbWVdID0gbmV3VmFsdWUudHlwZS5wYXJzZSh2YWx1ZVByb3AsIG5ld1ZhbHVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0gLy8gRW5kIHZhbHVlIHR5cGUgbm9uc2Vuc2VcblxuICAgICAgICAvLyBTZXQgYHByZXZgIHRvIGBjdXJyZW50YCBmb3IgZmlyc3QgZnJhbWUgYWZ0ZXIgc2V0XG4gICAgICAgIG5ld1ZhbHVlLnByZXYgPSBuZXdWYWx1ZS5jdXJyZW50O1xuXG4gICAgICAgIC8vIElmIHRoaXMgdmFsdWUgZG9lc24ndCBoYXZlIGNoaWxkcmVuLCBhZGQgdG8gdmFsdWVLZXlzXG4gICAgICAgIGlmICghaGFzQ2hpbGRyZW4pIHtcbiAgICAgICAgICBpZiAodGhpcy52YWx1ZUtleXMuaW5kZXhPZihrZXkpID09PSAtMSkge1xuICAgICAgICAgICAgdGhpcy52YWx1ZUtleXMucHVzaChrZXkpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC8vIE9yIGFkZCB0byBwYXJlbnRLZXlzXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBuZXdWYWx1ZS5jaGlsZHJlbiA9IG5ld1ZhbHVlLmNoaWxkcmVuIHx8IHt9O1xuXG4gICAgICAgICAgICBpZiAodGhpcy5wYXJlbnRLZXlzLmluZGV4T2Yoa2V5KSA9PT0gLTEpIHtcbiAgICAgICAgICAgICAgdGhpcy5wYXJlbnRLZXlzLnB1c2goa2V5KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy5zZXRWYWx1ZXMoY2hpbGRyZW4pO1xuICAgICAgICAgIH1cblxuICAgICAgICB0aGlzLnZhbHVlc1trZXldID0gbmV3VmFsdWU7XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIC8qXG4gICAgRGVjaWRlIHdoZXRoZXIgdGhpcyBBY3Rpb24gd2lsbCByZW5kZXIgb24gbmV4dCBmcmFtZVxuICAgICBAcGFyYW0gW0FjdGlvbl1cbiAgICBAcGFyYW0gW251bWJlcl1cbiAgICBAcGFyYW0gW251bWJlcl1cbiAgICBAcmV0dXJuIFtib29sZWFuXTogUmV0dXJuIHRydWUgdG8gcmVuZGVyXG4gICovXG5cblxuICBBY3Rpb24ucHJvdG90eXBlLndpbGxSZW5kZXIgPSBmdW5jdGlvbiB3aWxsUmVuZGVyKGFjdGlvbiwgZnJhbWVTdGFtcCwgZWxhcHNlZCkge1xuICAgIHZhciBoYXNDaGFuZ2VkID0gZmFsc2U7XG5cbiAgICAvLyBDaGVjayBpZiBiYXNlIHZhbHVlcyBoYXZlIHVwZGF0ZWRcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubnVtVmFsdWVLZXlzOyBpKyspIHtcbiAgICAgIHZhciBrZXkgPSB0aGlzLnZhbHVlS2V5c1tpXTtcbiAgICAgIHZhciB2YWx1ZSA9IHRoaXMudmFsdWVzW2tleV07XG5cbiAgICAgIC8vIFJ1biB0cmFuc2Zvcm0gZnVuY3Rpb24gKGlmIHByZXNlbnQpXG4gICAgICBpZiAodmFsdWUudHJhbnNmb3JtKSB7XG4gICAgICAgIHZhbHVlLmN1cnJlbnQgPSB2YWx1ZS50cmFuc2Zvcm0odmFsdWUuY3VycmVudCwga2V5LCB0aGlzKTtcbiAgICAgIH1cblxuICAgICAgLy8gQ2FwIG1pbmltdW1cbiAgICAgIGlmICgoMCwgX3V0aWxzLmlzTnVtKSh2YWx1ZS5taW4pKSB7XG4gICAgICAgIHZhbHVlLmN1cnJlbnQgPSBNYXRoLm1heCh2YWx1ZS5jdXJyZW50LCB2YWx1ZS5taW4pO1xuICAgICAgfVxuXG4gICAgICAvLyBDYXAgbWF4aW11bVxuICAgICAgaWYgKCgwLCBfdXRpbHMuaXNOdW0pKHZhbHVlLm1heCkpIHtcbiAgICAgICAgdmFsdWUuY3VycmVudCA9IE1hdGgubWluKHZhbHVlLmN1cnJlbnQsIHZhbHVlLm1heCk7XG4gICAgICB9XG5cbiAgICAgIC8vIFJvdW5kIG51bWJlclxuICAgICAgaWYgKHZhbHVlLnJvdW5kKSB7XG4gICAgICAgIHZhbHVlLmN1cnJlbnQgPSBNYXRoLnJvdW5kKHZhbHVlLmN1cnJlbnQpO1xuICAgICAgfVxuXG4gICAgICB2YWx1ZS5mcmFtZUNoYW5nZSA9IHZhbHVlLmN1cnJlbnQgLSB2YWx1ZS5wcmV2O1xuXG4gICAgICAvLyBVcGRhdGUgdmVsb2NpdHlcbiAgICAgIGlmICghdGhpcy5jYWxjdWxhdGVzVmVsb2NpdHkpIHtcbiAgICAgICAgdmFsdWUudmVsb2NpdHkgPSAoMCwgX2NhbGMuc3BlZWRQZXJTZWNvbmQpKHZhbHVlLmZyYW1lQ2hhbmdlLCBlbGFwc2VkKTtcbiAgICAgIH1cblxuICAgICAgLy8gSWYgdGhpcyB2YWx1ZSBoYXMgY2hhbmdlZFxuICAgICAgaWYgKHZhbHVlLnByZXYgIT09IHZhbHVlLmN1cnJlbnQpIHtcbiAgICAgICAgaGFzQ2hhbmdlZCA9IHRydWU7XG4gICAgICAgIHZhbHVlLnByZXYgPSB2YWx1ZS5jdXJyZW50O1xuICAgICAgfVxuXG4gICAgICAvLyBBcHBlbmQgdW5pdFxuICAgICAgdmFyIHZhbHVlRm9yU3RhdGUgPSB2YWx1ZS50eXBlICYmIHZhbHVlLnR5cGUuc2VyaWFsaXplID8gdmFsdWUudHlwZS5zZXJpYWxpemUodmFsdWUuY3VycmVudCwgdmFsdWUpIDogdmFsdWUuY3VycmVudDtcblxuICAgICAgLy8gQWRkIHRvIHN0YXRlIGlmIHRoaXMgaXMgbm90IGEgY2hpbGQgdmF1ZVxuICAgICAgaWYgKCF2YWx1ZS5wYXJlbnQpIHtcbiAgICAgICAgdGhpcy5zdGF0ZVtrZXldID0gdmFsdWVGb3JTdGF0ZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMudmFsdWVzW3ZhbHVlLnBhcmVudF0uY2hpbGRyZW5bdmFsdWUuY2hpbGRLZXldID0gdmFsdWVGb3JTdGF0ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBVcGRhdGUgcGFyZW50IHZhbHVlc1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCB0aGlzLm51bVBhcmVudEtleXM7IF9pKyspIHtcbiAgICAgIHZhciBfa2V5MiA9IHRoaXMucGFyZW50S2V5c1tfaV07XG4gICAgICB2YXIgX3ZhbHVlID0gdGhpcy52YWx1ZXNbX2tleTJdO1xuXG4gICAgICBfdmFsdWUuY3VycmVudCA9IF92YWx1ZS50eXBlLmNvbWJpbmUoX3ZhbHVlLmNoaWxkcmVuLCBfdmFsdWUudGVtcGxhdGUpO1xuXG4gICAgICB0aGlzLnN0YXRlW19rZXkyXSA9IF92YWx1ZS5jdXJyZW50O1xuICAgIH1cblxuICAgIGlmICh0aGlzLm9uRnJhbWUpIHtcbiAgICAgIHRoaXMub25GcmFtZSh0aGlzLnN0YXRlLCB0aGlzKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5vbkNsZWFudXAgPyB0cnVlIDogaGFzQ2hhbmdlZDtcbiAgfTtcblxuICBBY3Rpb24ucHJvdG90eXBlLmluaGVyaXQgPSBmdW5jdGlvbiBpbmhlcml0KCkge1xuICAgIHZhciBwcm9wcyA9IGFyZ3VtZW50cy5sZW5ndGggPD0gMCB8fCBhcmd1bWVudHNbMF0gPT09IHVuZGVmaW5lZCA/IHt9IDogYXJndW1lbnRzWzBdO1xuICAgIHZhciB2YWx1ZXMgPSBwcm9wcy52YWx1ZXM7XG5cbiAgICB2YXIgcHJvcHNUb1NldCA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhwcm9wcywgWyd2YWx1ZXMnXSk7XG5cbiAgICB2YXIgbmV3QWN0aW9uID0gX1Rhc2sucHJvdG90eXBlLmluaGVyaXQuY2FsbCh0aGlzLCBwcm9wc1RvU2V0KTtcblxuICAgIGlmICh2YWx1ZXMpIHtcbiAgICAgIG5ld0FjdGlvbi5zZXQoeyB2YWx1ZXM6IHZhbHVlcyB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gbmV3QWN0aW9uO1xuICB9O1xuXG4gIEFjdGlvbi5wcm90b3R5cGUucGF1c2UgPSBmdW5jdGlvbiBwYXVzZSgpIHtcbiAgICBfVGFzay5wcm90b3R5cGUuc3RvcC5jYWxsKHRoaXMpO1xuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIEFjdGlvbi5wcm90b3R5cGUucmVzdW1lID0gZnVuY3Rpb24gcmVzdW1lKCkge1xuICAgIF9UYXNrLnByb3RvdHlwZS5zdGFydC5jYWxsKHRoaXMpO1xuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIEFjdGlvbi5wcm90b3R5cGUudG9nZ2xlID0gZnVuY3Rpb24gdG9nZ2xlKCkge1xuICAgIHJldHVybiB0aGlzLmlzQWN0aXZlID8gdGhpcy5wYXVzZSgpIDogdGhpcy5yZXN1bWUoKTtcbiAgfTtcblxuICBBY3Rpb24ucHJvdG90eXBlLnN0YXJ0ID0gZnVuY3Rpb24gc3RhcnQoKSB7XG4gICAgdmFyIHZhbHVlcyA9IHRoaXMudmFsdWVzO1xuICAgIF9UYXNrLnByb3RvdHlwZS5zdGFydC5jYWxsKHRoaXMpO1xuXG4gICAgZm9yICh2YXIga2V5IGluIHZhbHVlcykge1xuICAgICAgaWYgKHZhbHVlcy5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgIHZhbHVlc1trZXldLnByZXYgPSB2YWx1ZXNba2V5XS5vcmlnaW4gPSB2YWx1ZXNba2V5XS5jdXJyZW50O1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIEFjdGlvbi5leHRlbmREZWZhdWx0VmFsdWUgPSBmdW5jdGlvbiBleHRlbmREZWZhdWx0VmFsdWUocHJvcHMpIHtcbiAgICByZXR1cm4gX2V4dGVuZHMoe30sIHRoaXMucHJvdG90eXBlLmRlZmF1bHRWYWx1ZSwgcHJvcHMpO1xuICB9O1xuXG4gIEFjdGlvbi5leHRlbmREZWZhdWx0UHJvcHMgPSBmdW5jdGlvbiBleHRlbmREZWZhdWx0UHJvcHMocHJvcHMpIHtcbiAgICByZXR1cm4gX2V4dGVuZHMoe30sIHRoaXMucHJvdG90eXBlLmRlZmF1bHRQcm9wcywgcHJvcHMpO1xuICB9O1xuXG4gIHJldHVybiBBY3Rpb247XG59KF9UYXNrMy5kZWZhdWx0KTtcblxuQWN0aW9uLnByb3RvdHlwZS5kZWZhdWx0VmFsdWVQcm9wID0gJ2N1cnJlbnQnO1xuQWN0aW9uLnByb3RvdHlwZS5kZWZhdWx0VmFsdWUgPSB7XG4gIHZlbG9jaXR5OiAwLFxuICByb3VuZDogZmFsc2UsXG4gIG1pbjogdW5kZWZpbmVkLFxuICBtYXg6IHVuZGVmaW5lZCxcbiAgdHJhbnNmb3JtOiB1bmRlZmluZWRcbn07XG5cbmV4cG9ydHMuZGVmYXVsdCA9IEFjdGlvbjtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbk55WXk5aFkzUnBiMjV6TDBGamRHbHZiaTVxY3lKZExDSnVZVzFsY3lJNlcxMHNJbTFoY0hCcGJtZHpJam9pT3pzN096czdRVUZCUVRzN096dEJRVU5CT3p0QlFVTkJPenRCUVVOQk96czdPMEZCUTBFN096czdRVUZEUVRzN096czdPenM3T3pzN096czdRVUZGUVN4SlFVRk5MSFZDUVVGMVFpd3dRa0ZCYVVJc1RVRkJha0k3TzBGQlJUZENMRWxCUVUwc2EwSkJRV3RDTzAxQlFVYzdUVUZCVHp0TlFVRlRPMDFCUVdFN1UwRkJZeXhSUVVGUkxFOUJRVklzUlVGQmFVSXNTMEZCYWtJc1JVRkJkMElzVjBGQmVFSTdRMEZCT1VNN08wRkJSWGhDTEVsQlFVMHNNRUpCUVRCQ0xGVkJRVU1zUzBGQlJEdFRRVUZYTEVOQlFVTXNUVUZCVFN4TFFVRk9MRU5CUVVRc1IwRkJaMElzVjBGQlZ5eExRVUZZTEVOQlFXaENMRWRCUVc5RExFdEJRWEJETzBOQlFWZzdPMGxCUlRGQ096czdRVUZEU2l4WFFVUkpMRTFCUTBvc1IwRkJkMEk3VVVGQldpdzRSRUZCVVN4clFrRkJTVHM3TUVKQlJIQkNMRkZCUTI5Q096dEJRVU4wUWl4VlFVRk5MRXRCUVU0c1IwRkJZeXhGUVVGa0xFTkJSSE5DTzBGQlJYUkNMRlZCUVUwc1UwRkJUaXhIUVVGclFpeEZRVUZzUWl4RFFVWnpRanRCUVVkMFFpeFZRVUZOTEZWQlFVNHNSMEZCYlVJc1JVRkJia0lzUTBGSWMwSTdORU5CU1hSQ0xHbENRVUZOTEV0QlFVNHNSMEZLYzBJN1IwRkJlRUk3T3pzN096czdPenM3UVVGRVNTeHRRa0ZsU2l4eFFrRkJaMEk3VVVGQldpdzRSRUZCVVN4clFrRkJTVHM3UVVGRFpDeFRRVUZMTEUxQlFVd3NSMEZCWXl4TFFVRkxMRTFCUVV3c1NVRkJaU3hGUVVGbUxFTkJSRUU3TzFGQlIwNHNVMEZCTUVJc1RVRkJNVUlzVDBGSVRUczdVVUZIU3l4elEwRkJaU3h0UWtGSWNFSTdPMEZCU1dRc1VVRkJUU3hqUVVGakxFVkJRV1E3T3p0QlFVcFJMRzlDUVU5U0xFZEJRVTRzV1VGQlZTeFZRVUZXT3pzN1FVRlFZeXhSUVZWV0xFdEJRVXNzVDBGQlRDeEZRVUZqTzBGQlEyaENMRlZCUVVrc1EwRkJReXhMUVVGTExFOUJRVXdzUlVGQll6czdRVUZGYWtJc1lVRkJTeXhQUVVGTUxFZEJRV1VzTmtKQlFXTXNTMEZCU3l4UFFVRk1MRU5CUVRkQ0xFTkJSbWxDT3p0QlFVbHFRaXhaUVVGSkxFdEJRVXNzVDBGQlRDeERRVUZoTEdOQlFXSXNSVUZCTmtJN1FVRkRMMElzWlVGQlN5eFhRVUZNTEVkQlFXMUNMRXRCUVVzc1QwRkJUQ3hEUVVGaExHTkJRV0lzUTBGQk5FSXNTMEZCU3l4UFFVRk1MRU5CUVM5RExFTkJSQ3RDTzFOQlFXcERPMDlCU2tZN08wRkJVMEVzVlVGQlNTeERRVUZETEV0QlFVc3NVVUZCVEN4RlFVRmxPMEZCUTJ4Q0xHRkJRVXNzVVVGQlRDeEhRVUZuUWl4bFFVRm9RaXhEUVVSclFqdFBRVUZ3UWp0TFFWWkdPenM3UVVGV1l5eFRRVEJDVkN4SlFVRkpMRWRCUVVvc1NVRkJWeXhMUVVGTExGbEJRVXdzUlVGQmJVSTdRVUZEYWtNc1ZVRkJTU3hMUVVGTExGbEJRVXdzUTBGQmEwSXNZMEZCYkVJc1EwRkJhVU1zUjBGQmFrTXNRMEZCU2l4RlFVRXlRenRCUVVONlF5eFpRVUZKTEZkQlFWY3NZMEZCV0N4RFFVRXdRaXhIUVVFeFFpeERRVUZLTEVWQlFXOURPMEZCUTJ4RExITkNRVUZaTEVkQlFWb3NTVUZCYlVJc1YwRkJWeXhIUVVGWUxFTkJRVzVDTEVOQlJHdERPMU5CUVhCRExFMUJSVThzU1VGQlNTeExRVUZMTEVkQlFVd3NUVUZCWXl4VFFVRmtMRVZCUVhsQ08wRkJRMnhETEhOQ1FVRlpMRWRCUVZvc1NVRkJiVUlzUzBGQlN5eEhRVUZNTEVOQlFXNUNMRU5CUkd0RE8xTkJRVGRDTzA5QlNGUTdTMEZFUmpzN08wRkJNVUpqTEZOQmNVTlVMRWxCUVVrc1NVRkJTaXhKUVVGWExFdEJRVXNzVFVGQlRDeEZRVUZoTzBGQlF6TkNMRlZCUVVrc1MwRkJTeXhOUVVGTUxFTkJRVmtzWTBGQldpeERRVUV5UWl4SlFVRXpRaXhEUVVGS0xFVkJRWEZETzBGQlEyNURMR0ZCUVVzc1RVRkJUQ3hEUVVGWkxFbEJRVm9zYVVKQlFYZENMRXRCUVVzc1RVRkJUQ3hEUVVGWkxFbEJRVm9zUjBGQmNVSXNXVUZCTjBNc1EwRkViVU03VDBGQmNrTTdTMEZFUmpzN08wRkJja05qTEZGQk5FTldMRTFCUVVvc1JVRkJXVHRCUVVOV0xGZEJRVXNzVTBGQlRDeERRVUZsTEUxQlFXWXNSVUZCZFVJc1YwRkJka0k3T3p0QlFVUlZMRlZCU1ZZc1EwRkJTeXhaUVVGTUxFZEJRVzlDTEV0QlFVc3NVMEZCVEN4RFFVRmxMRTFCUVdZc1EwRktWanRCUVV0V0xGZEJRVXNzWVVGQlRDeEhRVUZ4UWl4TFFVRkxMRlZCUVV3c1EwRkJaMElzVFVGQmFFSXNRMEZNV0R0TFFVRmFPenRCUVZGQkxGZEJRVThzU1VGQlVDeERRWEJFWXpzN08wRkJabG9zYlVKQmMwVktMQ3RDUVVGVkxGRkJRVkVzVTBGQlV6czdRVUZGZWtJc1UwRkJTeXhKUVVGSkxFZEJRVW9zU1VGQlZ5eE5RVUZvUWl4RlFVRjNRanRCUVVOMFFpeFZRVUZKTEU5QlFVOHNZMEZCVUN4RFFVRnpRaXhIUVVGMFFpeERRVUZLTEVWQlFXZERPMEZCUXpsQ0xGbEJRVWtzWTBGQll5eExRVUZrTEVOQlJEQkNPMEZCUlRsQ0xGbEJRVTBzVjBGQlZ5eEZRVUZZT3pzN1FVRkdkMElzV1VGTGVFSXNjVUpCUVhGQ0xFdEJRVXNzVFVGQlRDeERRVUZaTEVkQlFWb3NUVUZCY1VJc1UwRkJja0lzUTBGTVJ6dEJRVTA1UWl4WlFVRkpMRmRCUVZjc2EwTkJRVEJDTEV0QlFVc3NUVUZCVEN4RFFVRlpMRWRCUVZvc1JVRkJNVUlzWjBKQlFXOUVMRkZCUVhCRU96czdRVUZPWlN4WlFWTXhRaXhEUVVGRExHdENRVUZOTEU5QlFVOHNSMEZCVUN4RFFVRk9MRU5CUVVRc1JVRkJjVUk3UVVGRGRrSXNiVUpCUVZNc1MwRkJTeXhuUWtGQlRDeERRVUZVTEVkQlFXdERMRTlCUVU4c1IwRkJVQ3hEUVVGc1F5eERRVVIxUWp0VFFVRjZRaXhOUVVWUE8wRkJRMHdzYTBOQlFXZENMRlZCUVdFc1QwRkJUeXhIUVVGUUxFVkJRVGRDTEVOQlJFczdVMEZHVURzN08wRkJWRGhDTEZsQlowSXhRaXhUUVVGVExFOUJRVlFzUzBGQmNVSXNVMEZCY2tJc1JVRkJaME03UVVGRGJFTXNZMEZCU1N4TFFVRkxMRTlCUVV3c1JVRkJZenRCUVVOb1FpeHhRa0ZCVXl4UFFVRlVMRWRCUVcxQ0xIZENRVUYzUWl4TFFVRkxMRTlCUVV3c1EwRkJZU3hIUVVGaUxFTkJRV2xDTEV0QlFVc3NUMEZCVEN4RlFVRmpMRWRCUVM5Q0xFTkJRWGhDTEVOQlFXNUNMRU5CUkdkQ08xZEJRV3hDTzFOQlJFWTdPMEZCVFVFc1dVRkJTU3hUUVVGVExFbEJRVlFzUzBGQmEwSXNVMEZCYkVJc1NVRkJLMElzUzBGQlN5eFBRVUZNTEVWQlFXTTdRVUZETDBNc2JVSkJRVk1zU1VGQlZDeEhRVUZuUWl4VFFVRlRMRTlCUVZRc1EwRkVLMEk3VTBGQmFrUTdPenRCUVhSQ09FSXNXVUV5UWpGQ0xFTkJRVU1zYTBKQlFVUXNSVUZCY1VJN1FVRkRka0lzYTBOQlFXZENMRXRCUVVzc1dVRkJUQ3hGUVVGelFpeFRRVUYwUXl4RFFVUjFRanRUUVVGNlFqczdPMEZCTTBJNFFpeFpRV2RETVVJc1EwRkJReXhUUVVGVExFbEJRVlFzU1VGQmFVSXNTMEZCU3l4UFFVRk1MRWxCUVdkQ0xFdEJRVXNzVDBGQlRDeERRVUZoTEdOQlFXSXNSVUZCTmtJN1FVRkRha1VzYlVKQlFWTXNTVUZCVkN4SFFVRm5RaXhMUVVGTExFOUJRVXdzUTBGQllTeGpRVUZpTEVOQlFUUkNMRWRCUVRWQ0xFTkJRV2hDTEVOQlJHbEZPMU5CUVc1Rk96czdRVUZvUXpoQ0xGbEJjVU14UWl4RFFVRkRMRk5CUVZNc1NVRkJWQ3hKUVVGcFFpeERRVUZETEV0QlFVc3NUVUZCVEN4RFFVRlpMRWRCUVZvc1EwRkJSQ3hGUVVGdFFqdEJRVU4yUXl4dFFrRkJVeXhKUVVGVUxFZEJRV2RDTEhOQ1FVRm5RaXhSUVVGb1FpeERRVUZvUWl4RFFVUjFRenRUUVVGNlF6czdPMEZCY2tNNFFpeFpRVEJETVVJc1UwRkJVeXhKUVVGVUxFVkJRV1U3UVVGRGFrSXNaVUZCU3l4SlFVRkpMRWxCUVVrc1EwRkJTaXhGUVVGUExFbEJRVWtzYjBKQlFVb3NSVUZCTUVJc1IwRkJNVU1zUlVGQkswTTdRVUZETjBNc1owSkJRVTBzVjBGQlZ5d3dRa0ZCYVVJc1EwRkJha0lzUTBGQldDeERRVVIxUXp0QlFVVTNReXhuUWtGQlRTeFpRVUZaTEZOQlFWTXNVVUZCVkN4RFFVRmFPenM3UVVGR2RVTXNaMEpCUzNwRExGTkJRVk1zU1VGQlZDeERRVUZqTEdOQlFXUXNRMEZCTmtJc1QwRkJOMElzUTBGQlNpeEZRVUV5UXp0QlFVTjZReXhyUWtGQlRTeFpRVUZaTEhGQ1FVRlRMRk5CUVZRc1NVRkJjMElzVTBGQlV5eEpRVUZVTEVOQlFXTXNTMEZCWkN4RFFVRnZRaXhUUVVGd1FpeERRVUYwUWl4SFFVRjFSQ3hGUVVGMlJDeERRVVIxUWpzN1FVRkhla01zYlVKQlFVc3NTVUZCU1N4UlFVRktMRWxCUVdkQ0xGTkJRWEpDTEVWQlFXZERPMEZCUXpsQ0xHOUNRVUZKTEZWQlFWVXNZMEZCVml4RFFVRjVRaXhSUVVGNlFpeERRVUZLTEVWQlFYZERPMEZCUTNSRExITkNRVUZOTEdOQlFXTXNUVUZCVFN4UlFVRk9PenM3UVVGRWEwSXNjMEpCU1d4RExFTkJRVU1zVTBGQlV5eFhRVUZVTEVOQlFVUXNSVUZCZDBJN1FVRkRNVUlzZDBKQlFVMHNaVUZCWlN4UlFVRkRMRU5CUVZNc1NVRkJWQ3hEUVVGakxGbEJRV1FzU1VGQk9FSXNVMEZCVXl4SlFVRlVMRU5CUVdNc1dVRkJaQ3hEUVVFeVFpeFJRVUV6UWl4RFFVRTVRaXhIUVVGelJTeFRRVUZUTEVsQlFWUXNRMEZCWXl4WlFVRmtMRU5CUVRKQ0xGRkJRVE5DTEVOQlFYWkZMRWRCUVRoSExGTkJRVk1zU1VGQlZDeERRVUZqTEZsQlFXUXNTVUZCT0VJc1JVRkJPVUlzUTBGRWVrYzdPMEZCUnpGQ0xEWkNRVUZUTEZkQlFWUXNhVUpCUTBzc1ZVRkRRVHRCUVVOSUxEaENRVUZSTEVkQlFWSTdRVUZEUVN4blEwRkJWU3hSUVVGV08zTkNRVXBHTEVOQlNEQkNPenRCUVZVeFFpd3lRa0ZCVHl4VFFVRlRMRmRCUVZRc1JVRkJjMElzU1VGQmRFSXNRMEZXYlVJN2JVSkJRVFZDT3p0QlFXRkJMR2REUVVGakxFbEJRV1FzUTBGcVFuTkRPMEZCYTBKMFF5d3lRa0ZCVXl4WFFVRlVMRVZCUVhOQ0xGRkJRWFJDTEVsQlFXdERMRmRCUVZjc1ZVRkJWU3hSUVVGV0xFTkJRVmdzUTBGQmJFTXNRMEZzUW5ORE8ybENRVUY0UXp0bFFVUkdPenM3UVVGSWVVTXNhMEpCTWtKeVF5eERRVUZETEZOQlFWTXNVVUZCVkN4SlFVRnhRaXhUUVVGVExFbEJRVlFzUTBGQll5eFJRVUZrTEVsQlFUQkNMSEZDUVVGVExGTkJRVlFzUTBGQmFFUXNSVUZCY1VVN1FVRkRka1VzZVVKQlFWTXNVVUZCVkN4SFFVRnZRaXhUUVVGVExFbEJRVlFzUTBGQll5eFJRVUZrTEVOQlFYVkNMRk5CUVhaQ0xFTkJRWEJDTEVOQlJIVkZPMlZCUVhwRk8yRkJNMEpHTEUxQk9FSlBMRWxCUVVrc1UwRkJVeXhKUVVGVUxFTkJRV01zV1VGQlpDeEZRVUUwUWp0QlFVTnlReXh6UTBGQlowSXNVMEZCVXl4SlFVRlVMRU5CUVdNc1dVRkJaQ3hGUVVFclFpeFRRVUV2UXpzN08wRkJSSEZETEd0Q1FVbHFReXhUUVVGVExFbEJRVlFzUTBGQll5eFpRVUZrTEVOQlFUSkNMRWxCUVROQ0xFVkJRV2xETzBGQlEyNURMSGxDUVVGVExFbEJRVlFzUjBGQlowSXNVMEZCVXl4SlFVRlVMRU5CUVdNc1dVRkJaQ3hEUVVFeVFpeEpRVUV6UWl4RFFVUnRRanRsUVVGeVF6dGhRVXBMT3p0QlFWTlFMR2RDUVVGSkxHTkJRV01zVTBGQlpDeEpRVUV5UWl4VFFVRlRMRWxCUVZRc1EwRkJZeXhMUVVGa0xFVkJRWEZDTzBGQlEyeEVMSFZDUVVGVExGRkJRVlFzU1VGQmNVSXNVMEZCVXl4SlFVRlVMRU5CUVdNc1MwRkJaQ3hEUVVGdlFpeFRRVUZ3UWl4RlFVRXJRaXhSUVVFdlFpeERRVUZ5UWl4RFFVUnJSRHRoUVVGd1JEdFhRVFZEUmp0VFFVUkdPenM3UVVFeFF6aENMR2RDUVRoR09VSXNRMEZCVXl4SlFVRlVMRWRCUVdkQ0xGTkJRVk1zVDBGQlZEczdPMEZCT1VaakxGbEJhVWN4UWl4RFFVRkRMRmRCUVVRc1JVRkJZenRCUVVOb1FpeGpRVUZKTEV0QlFVc3NVMEZCVEN4RFFVRmxMRTlCUVdZc1EwRkJkVUlzUjBGQmRrSXNUVUZCWjBNc1EwRkJReXhEUVVGRUxFVkJRVWs3UVVGRGRFTXNhVUpCUVVzc1UwRkJUQ3hEUVVGbExFbEJRV1lzUTBGQmIwSXNSMEZCY0VJc1JVRkVjME03VjBGQmVFTTdPenRCUVVSblFpeFRRVUZzUWl4TlFVMVBPMEZCUTB3c2NVSkJRVk1zVVVGQlZDeEhRVUZ2UWl4VFFVRlRMRkZCUVZRc1NVRkJjVUlzUlVGQmNrSXNRMEZFWmpzN1FVRkhUQ3huUWtGQlNTeExRVUZMTEZWQlFVd3NRMEZCWjBJc1QwRkJhRUlzUTBGQmQwSXNSMEZCZUVJc1RVRkJhVU1zUTBGQlF5eERRVUZFTEVWQlFVazdRVUZEZGtNc2JVSkJRVXNzVlVGQlRDeERRVUZuUWl4SlFVRm9RaXhEUVVGeFFpeEhRVUZ5UWl4RlFVUjFRenRoUVVGNlF6czdRVUZKUVN4cFFrRkJTeXhUUVVGTUxFTkJRV1VzVVVGQlppeEZRVkJMTzFkQlRsQTdPMEZCWjBKQkxHRkJRVXNzVFVGQlRDeERRVUZaTEVkQlFWb3NTVUZCYlVJc1VVRkJia0lzUTBGcVNEaENPMDlCUVdoRE8wdEJSRVk3T3pzN096czdPenM3T3p0QlFYaEZSU3h0UWtGMVRVb3NhVU5CUVZjc1VVRkJVU3haUVVGWkxGTkJRVk03UVVGRGRFTXNVVUZCU1N4aFFVRmhMRXRCUVdJN096dEJRVVJyUXl4VFFVbHFReXhKUVVGSkxFbEJRVWtzUTBGQlNpeEZRVUZQTEVsQlFVa3NTMEZCU3l4WlFVRk1MRVZCUVcxQ0xFZEJRWFpETEVWQlFUUkRPMEZCUXpGRExGVkJRVTBzVFVGQlRTeExRVUZMTEZOQlFVd3NRMEZCWlN4RFFVRm1MRU5CUVU0c1EwRkViME03UVVGRk1VTXNWVUZCVFN4UlFVRlJMRXRCUVVzc1RVRkJUQ3hEUVVGWkxFZEJRVm9zUTBGQlVqczdPMEZCUm05RExGVkJTM1JETEUxQlFVMHNVMEZCVGl4RlFVRnBRanRCUVVOdVFpeGpRVUZOTEU5QlFVNHNSMEZCWjBJc1RVRkJUU3hUUVVGT0xFTkJRV2RDTEUxQlFVMHNUMEZCVGl4RlFVRmxMRWRCUVM5Q0xFVkJRVzlETEVsQlFYQkRMRU5CUVdoQ0xFTkJSRzFDTzA5QlFYSkNPenM3UVVGTU1FTXNWVUZWZEVNc2EwSkJRVTBzVFVGQlRTeEhRVUZPTEVOQlFWWXNSVUZCYzBJN1FVRkRjRUlzWTBGQlRTeFBRVUZPTEVkQlFXZENMRXRCUVVzc1IwRkJUQ3hEUVVGVExFMUJRVTBzVDBGQlRpeEZRVUZsTEUxQlFVMHNSMEZCVGl4RFFVRjRReXhEUVVSdlFqdFBRVUYwUWpzN08wRkJWakJETEZWQlpYUkRMR3RDUVVGTkxFMUJRVTBzUjBGQlRpeERRVUZXTEVWQlFYTkNPMEZCUTNCQ0xHTkJRVTBzVDBGQlRpeEhRVUZuUWl4TFFVRkxMRWRCUVV3c1EwRkJVeXhOUVVGTkxFOUJRVTRzUlVGQlpTeE5RVUZOTEVkQlFVNHNRMEZCZUVNc1EwRkViMEk3VDBGQmRFSTdPenRCUVdZd1F5eFZRVzlDZEVNc1RVRkJUU3hMUVVGT0xFVkJRV0U3UVVGRFppeGpRVUZOTEU5QlFVNHNSMEZCWjBJc1MwRkJTeXhMUVVGTUxFTkJRVmNzVFVGQlRTeFBRVUZPTEVOQlFUTkNMRU5CUkdVN1QwRkJha0k3TzBGQlNVRXNXVUZCVFN4WFFVRk9MRWRCUVc5Q0xFMUJRVTBzVDBGQlRpeEhRVUZuUWl4TlFVRk5MRWxCUVU0N096dEJRWGhDVFN4VlFUSkNkRU1zUTBGQlF5eExRVUZMTEd0Q1FVRk1MRVZCUVhsQ08wRkJRelZDTEdOQlFVMHNVVUZCVGl4SFFVRnBRaXd3UWtGQlpTeE5RVUZOTEZkQlFVNHNSVUZCYlVJc1QwRkJiRU1zUTBGQmFrSXNRMEZFTkVJN1QwRkJPVUk3T3p0QlFUTkNNRU1zVlVGblEzUkRMRTFCUVUwc1NVRkJUaXhMUVVGbExFMUJRVTBzVDBGQlRpeEZRVUZsTzBGQlEyaERMSEZDUVVGaExFbEJRV0lzUTBGRVowTTdRVUZGYUVNc1kwRkJUU3hKUVVGT0xFZEJRV0VzVFVGQlRTeFBRVUZPTEVOQlJtMUNPMDlCUVd4RE96czdRVUZvUXpCRExGVkJjME53UXl4blFrRkJaMElzUzBGQlF5eERRVUZOTEVsQlFVNHNTVUZCWXl4TlFVRk5MRWxCUVU0c1EwRkJWeXhUUVVGWUxFZEJRWGRDTEUxQlFVMHNTVUZCVGl4RFFVRlhMRk5CUVZnc1EwRkJjVUlzVFVGQlRTeFBRVUZPTEVWQlFXVXNTMEZCY0VNc1EwRkJka01zUjBGQmIwWXNUVUZCVFN4UFFVRk9PenM3UVVGMFEyaEZMRlZCZVVOMFF5eERRVUZETEUxQlFVMHNUVUZCVGl4RlFVRmpPMEZCUTJwQ0xHRkJRVXNzUzBGQlRDeERRVUZYTEVkQlFWZ3NTVUZCYTBJc1lVRkJiRUlzUTBGRWFVSTdUMEZCYmtJc1RVRkZUenRCUVVOTUxHRkJRVXNzVFVGQlRDeERRVUZaTEUxQlFVMHNUVUZCVGl4RFFVRmFMRU5CUVRCQ0xGRkJRVEZDTEVOQlFXMURMRTFCUVUwc1VVRkJUaXhEUVVGdVF5eEhRVUZ4UkN4aFFVRnlSQ3hEUVVSTE8wOUJSbEE3UzBGNlEwWTdPenRCUVVwelF5eFRRWEZFYWtNc1NVRkJTU3hMUVVGSkxFTkJRVW9zUlVGQlR5eExRVUZKTEV0QlFVc3NZVUZCVEN4RlFVRnZRaXhKUVVGNFF5eEZRVUUyUXp0QlFVTXpReXhWUVVGTkxGRkJRVTBzUzBGQlN5eFZRVUZNTEVOQlFXZENMRVZCUVdoQ0xFTkJRVTRzUTBGRWNVTTdRVUZGTTBNc1ZVRkJUU3hUUVVGUkxFdEJRVXNzVFVGQlRDeERRVUZaTEV0QlFWb3NRMEZCVWl4RFFVWnhRenM3UVVGSk0wTXNZVUZCVFN4UFFVRk9MRWRCUVdkQ0xFOUJRVTBzU1VGQlRpeERRVUZYTEU5QlFWZ3NRMEZCYlVJc1QwRkJUU3hSUVVGT0xFVkJRV2RDTEU5QlFVMHNVVUZCVGl4RFFVRnVSQ3hEUVVveVF6czdRVUZOTTBNc1YwRkJTeXhMUVVGTUxFTkJRVmNzUzBGQldDeEpRVUZyUWl4UFFVRk5MRTlCUVU0c1EwRk9lVUk3UzBGQk4wTTdPMEZCVTBFc1VVRkJTU3hMUVVGTExFOUJRVXdzUlVGQll6dEJRVU5vUWl4WFFVRkxMRTlCUVV3c1EwRkJZU3hMUVVGTExFdEJRVXdzUlVGQldTeEpRVUY2UWl4RlFVUm5RanRMUVVGc1FqczdRVUZKUVN4WFFVRlBMRWxCUVVNc1EwRkJTeXhUUVVGTUxFZEJRV3RDTEVsQlFXNUNMRWRCUVRCQ0xGVkJRVEZDTEVOQmJFVXJRanM3TzBGQmRrMXdReXh0UWtFMFVVb3NOa0pCUVc5Q08xRkJRVm9zT0VSQlFWRXNhMEpCUVVrN1VVRkRWaXhUUVVFd1FpeE5RVUV4UWl4UFFVUlZPenRSUVVORExITkRRVUZsTEcxQ1FVUm9RanM3UVVGRmJFSXNVVUZCVFN4WlFVRlpMR2RDUVVGTkxFOUJRVTRzV1VGQll5eFZRVUZrTEVOQlFWb3NRMEZHV1RzN1FVRkpiRUlzVVVGQlNTeE5RVUZLTEVWQlFWazdRVUZEVml4blFrRkJWU3hIUVVGV0xFTkJRV01zUlVGQlJTeGpRVUZHTEVWQlFXUXNSVUZFVlR0TFFVRmFPenRCUVVsQkxGZEJRVThzVTBGQlVDeERRVkpyUWpzN08wRkJOVkZvUWl4dFFrRjFVa29zZVVKQlFWRTdRVUZEVGl4dlFrRkJUU3hKUVVGT0xGbEJSRTA3UVVGRlRpeFhRVUZQTEVsQlFWQXNRMEZHVFRzN08wRkJkbEpLTEcxQ1FUUlNTaXd5UWtGQlV6dEJRVU5RTEc5Q1FVRk5MRXRCUVU0c1dVRkVUenRCUVVWUUxGZEJRVThzU1VGQlVDeERRVVpQT3pzN1FVRTFVa3dzYlVKQmFWTktMREpDUVVGVE8wRkJRMUFzVjBGQlR5eExRVUZMTEZGQlFVd3NSMEZCWjBJc1MwRkJTeXhMUVVGTUxFVkJRV2hDTEVkQlFTdENMRXRCUVVzc1RVRkJUQ3hGUVVFdlFpeERRVVJCT3pzN1FVRnFVMHdzYlVKQmNWTktMSGxDUVVGUk8wRkJRMDRzVVVGQlRTeFRRVUZUTEV0QlFVc3NUVUZCVEN4RFFVUlVPMEZCUlU0c2IwSkJRVTBzUzBGQlRpeFpRVVpOT3p0QlFVbE9MRk5CUVVzc1NVRkJTU3hIUVVGS0xFbEJRVmNzVFVGQmFFSXNSVUZCZDBJN1FVRkRkRUlzVlVGQlNTeFBRVUZQTEdOQlFWQXNRMEZCYzBJc1IwRkJkRUlzUTBGQlNpeEZRVUZuUXp0QlFVTTVRaXhsUVVGUExFZEJRVkFzUlVGQldTeEpRVUZhTEVkQlFXMUNMRTlCUVU4c1IwRkJVQ3hGUVVGWkxFMUJRVm9zUjBGQmNVSXNUMEZCVHl4SFFVRlFMRVZCUVZrc1QwRkJXaXhEUVVSV08wOUJRV2hETzB0QlJFWTdPMEZCVFVFc1YwRkJUeXhKUVVGUUxFTkJWazA3T3p0QlFYSlRTaXhUUVd0VVJ5eHBSRUZCYlVJc1QwRkJUenRCUVVNdlFpeDNRa0ZCV1N4TFFVRkxMRk5CUVV3c1EwRkJaU3haUVVGbUxFVkJRV2RETEUxQlFUVkRMRU5CUkN0Q096czdRVUZzVkRkQ0xGTkJjMVJITEdsRVFVRnRRaXhQUVVGUE8wRkJReTlDTEhkQ1FVRlpMRXRCUVVzc1UwRkJUQ3hEUVVGbExGbEJRV1lzUlVGQlowTXNUVUZCTlVNc1EwRkVLMEk3T3p0VFFYUlVOMEk3T3p0QlFUSlVUaXhQUVVGUExGTkJRVkFzUTBGQmFVSXNaMEpCUVdwQ0xFZEJRVzlETEZOQlFYQkRPMEZCUTBFc1QwRkJUeXhUUVVGUUxFTkJRV2xDTEZsQlFXcENMRWRCUVdkRE8wRkJRemxDTEZsQlFWVXNRMEZCVmp0QlFVTkJMRk5CUVU4c1MwRkJVRHRCUVVOQkxFOUJRVXNzVTBGQlREdEJRVU5CTEU5QlFVc3NVMEZCVER0QlFVTkJMR0ZCUVZjc1UwRkJXRHREUVV4R096dHJRa0ZSWlNJc0ltWnBiR1VpT2lKQlkzUnBiMjR1YW5NaUxDSnpiM1Z5WTJWU2IyOTBJam9pTDFWelpYSnpMMDFoZEhRdlUybDBaWE12Y0c5d2JXOTBhVzl1SWl3aWMyOTFjbU5sYzBOdmJuUmxiblFpT2xzaWFXMXdiM0owSUZSaGMyc2dabkp2YlNBbkxpNHZkR0Z6YXk5VVlYTnJKenRjYm1sdGNHOXlkQ0I3SUhOd1pXVmtVR1Z5VTJWamIyNWtJSDBnWm5KdmJTQW5MaTR2YVc1akwyTmhiR01uTzF4dWFXMXdiM0owSUhzZ2FYTk9kVzBzSUdselQySnFMQ0JwYzFOMGNtbHVaeUI5SUdaeWIyMGdKeTR1TDJsdVl5OTFkR2xzY3ljN1hHNXBiWEJ2Y25RZ1pHVjBaV04wVm1Gc2RXVlVlWEJsSUdaeWIyMGdKeTR1TDNaaGJIVmxMWFI1Y0dWekwyUmxkR1ZqZENjN1hHNXBiWEJ2Y25RZ1RsVk5SVkpKUTBGTVgxWkJURlZGVXlCbWNtOXRJQ2N1TGk5cGJtTXZiblZ0WlhKcFkyRnNMWFpoYkhWbGN5YzdYRzVwYlhCdmNuUWdaR1YwWldOMFFXUmhjSFJsY2lCbWNtOXRJQ2N1TGk5cGJtTXZaR1YwWldOMExXRmtZWEIwWlhJbk8xeHVYRzVqYjI1emRDQk9WVTFmVGxWTlJWSkpRMEZNWDFaQlRGVkZVeUE5SUU1VlRVVlNTVU5CVEY5V1FVeFZSVk11YkdWdVozUm9PMXh1WEc1amIyNXpkQ0JrWldaaGRXeDBVbVZ1WkdWeVpYSWdQU0FvZXlCemRHRjBaU3dnWVdSaGNIUmxjaXdnWVdSaGNIUmxja1JoZEdFc0lHVnNaVzFsYm5RZ2ZTa2dQVDRnWVdSaGNIUmxjaWhsYkdWdFpXNTBMQ0J6ZEdGMFpTd2dZV1JoY0hSbGNrUmhkR0VwTzF4dVhHNWpiMjV6ZENCamIyNTJaWEowU1daVGFHOTFiR1JDWlU1MWJXSmxjaUE5SUNoMllXeDFaU2tnUFQ0Z0lXbHpUbUZPS0haaGJIVmxLU0EvSUhCaGNuTmxSbXh2WVhRb2RtRnNkV1VwSURvZ2RtRnNkV1U3WEc1Y2JtTnNZWE56SUVGamRHbHZiaUJsZUhSbGJtUnpJRlJoYzJzZ2UxeHVJQ0JqYjI1emRISjFZM1J2Y2lod2NtOXdjeUE5SUh0OUtTQjdYRzRnSUNBZ2NISnZjSE11YzNSaGRHVWdQU0I3ZlR0Y2JpQWdJQ0J3Y205d2N5NTJZV3gxWlV0bGVYTWdQU0JiWFR0Y2JpQWdJQ0J3Y205d2N5NXdZWEpsYm5STFpYbHpJRDBnVzEwN1hHNGdJQ0FnYzNWd1pYSW9jSEp2Y0hNcE8xeHVJQ0I5WEc1Y2JpQWdMeXBjYmlBZ0lDQWpJRk5sZENCQlkzUnBiMjRnY0hKdmNHVnlkR2xsYzF4dUlDQWdJQ01qSUZObGRDQjFjMlZ5TFdSbFptbHVaV1FnUVdOMGFXOXVJSEJ5YjNCbGNuUnBaWE5jYmx4dUlDQWdJRUJ3WVhKaGJTQmJiMkpxWldOMFhWeHVJQ0FnSUVCeVpYUjFjbTRnVzBGamRHbHZibDFjYmlBZ0tpOWNiaUFnYzJWMEtIQnliM0J6SUQwZ2UzMHBJSHRjYmlBZ0lDQjBhR2x6TG5aaGJIVmxjeUE5SUhSb2FYTXVkbUZzZFdWeklIeDhJSHQ5TzF4dVhHNGdJQ0FnWTI5dWMzUWdleUIyWVd4MVpYTXNJQzR1TG5CeWIzQnpWRzlUWlhRZ2ZTQTlJSEJ5YjNCek8xeHVJQ0FnSUdOdmJuTjBJR2x1YUdWeWFYUmhZbXhsSUQwZ2UzMDdYRzVjYmlBZ0lDQXZMeUJUWlhRZ2JtOXVMV052Ym5OMWJXVmtJSEJ5YjNCbGNuUnBaWE5jYmlBZ0lDQnpkWEJsY2k1elpYUW9jSEp2Y0hOVWIxTmxkQ2s3WEc1Y2JpQWdJQ0F2THlCRVpYUmxZM1FnWTI5eWNtVmpkQ0JnWVdSaGNIUmxjbUFnYVdZZ2JtOXVaU0JsZUdsemRITWdZVzVrSUdCbGJHVnRaVzUwWUNCcGN5QmlaV2x1WnlCelpYUmNiaUFnSUNCcFppQW9kR2hwY3k1bGJHVnRaVzUwS1NCN1hHNGdJQ0FnSUNCcFppQW9JWFJvYVhNdVlXUmhjSFJsY2lrZ2UxeHVJQ0FnSUNBZ0lDQXZMeUJFZFdOcmRIbHdhWE5vSUdOb1pXTnJJR1p2Y2lCQlpHRndkR1Z5WEc0Z0lDQWdJQ0FnSUhSb2FYTXVZV1JoY0hSbGNpQTlJR1JsZEdWamRFRmtZWEIwWlhJb2RHaHBjeTVsYkdWdFpXNTBLVHRjYmx4dUlDQWdJQ0FnSUNCcFppQW9kR2hwY3k1aFpHRndkR1Z5TG1kbGRFVnNaVzFsYm5SRVlYUmhLU0I3WEc0Z0lDQWdJQ0FnSUNBZ2RHaHBjeTVoWkdGd2RHVnlSR0YwWVNBOUlIUm9hWE11WVdSaGNIUmxjaTVuWlhSRmJHVnRaVzUwUkdGMFlTaDBhR2x6TG1Wc1pXMWxiblFwTzF4dUlDQWdJQ0FnSUNCOVhHNGdJQ0FnSUNCOVhHNWNiaUFnSUNBZ0lHbG1JQ2doZEdocGN5NXZibEpsYm1SbGNpa2dlMXh1SUNBZ0lDQWdJQ0IwYUdsekxtOXVVbVZ1WkdWeUlEMGdaR1ZtWVhWc2RGSmxibVJsY21WeU8xeHVJQ0FnSUNBZ2ZWeHVJQ0FnSUgxY2JseHVJQ0FnSUM4dklGQnlhVzFsSUdGdUlHOWlhbVZqZENCMGJ5QnBibWhsY21sMElHWnliMjBzSUhkcGRHZ2diMjVzZVNCZ2RtRnNkV1ZnSUhCeWIzQmxjblJwWlhOY2JpQWdJQ0JtYjNJZ0tHeGxkQ0JyWlhrZ2FXNGdkR2hwY3k1a1pXWmhkV3gwVm1Gc2RXVXBJSHRjYmlBZ0lDQWdJR2xtSUNoMGFHbHpMbVJsWm1GMWJIUldZV3gxWlM1b1lYTlBkMjVRY205d1pYSjBlU2hyWlhrcEtTQjdYRzRnSUNBZ0lDQWdJR2xtSUNod2NtOXdjMVJ2VTJWMExtaGhjMDkzYmxCeWIzQmxjblI1S0d0bGVTa3BJSHRjYmlBZ0lDQWdJQ0FnSUNCcGJtaGxjbWwwWVdKc1pWdHJaWGxkSUQwZ2NISnZjSE5VYjFObGRGdHJaWGxkTzF4dUlDQWdJQ0FnSUNCOUlHVnNjMlVnYVdZZ0tIUm9hWE5iYTJWNVhTQWhQVDBnZFc1a1pXWnBibVZrS1NCN1hHNGdJQ0FnSUNBZ0lDQWdhVzVvWlhKcGRHRmliR1ZiYTJWNVhTQTlJSFJvYVhOYmEyVjVYVHRjYmlBZ0lDQWdJQ0FnZlZ4dUlDQWdJQ0FnZlZ4dUlDQWdJSDFjYmx4dUlDQWdJQzh2SUZWd1pHRjBaU0JsZUdsemRHbHVaeUIyWVd4MVpYTWdkMmwwYUNCcGJtaGxjbWwwWVdKc1pTQndjbTl3WlhKMGFXVnpYRzRnSUNBZ1ptOXlJQ2hzWlhRZ2EyVjVJR2x1SUhSb2FYTXVkbUZzZFdWektTQjdYRzRnSUNBZ0lDQnBaaUFvZEdocGN5NTJZV3gxWlhNdWFHRnpUM2R1VUhKdmNHVnlkSGtvYTJWNUtTa2dlMXh1SUNBZ0lDQWdJQ0IwYUdsekxuWmhiSFZsYzF0clpYbGRJRDBnZXlBdUxpNTBhR2x6TG5aaGJIVmxjMXRyWlhsZExDQXVMaTVwYm1obGNtbDBZV0pzWlNCOU8xeHVJQ0FnSUNBZ2ZWeHVJQ0FnSUgxY2JseHVJQ0FnSUM4dklGVndaR0YwWlZ4dUlDQWdJR2xtSUNoMllXeDFaWE1wSUh0Y2JpQWdJQ0FnSUhSb2FYTXVjMlYwVm1Gc2RXVnpLSFpoYkhWbGN5d2dhVzVvWlhKcGRHRmliR1VwTzF4dVhHNGdJQ0FnSUNBdkx5QlFjbVZqYjIxd2RYUmxJRzUxYldKbGNpQnZaaUIyWVd4MVpTQnJaWGtnWVc1a0lIQmhjbVZ1ZENCclpYbHpJSFJ2SUdGMmIybGtJSEJsY2kxbWNtRnRaU0J0WldGemRYSmxiV1Z1ZEZ4dUlDQWdJQ0FnZEdocGN5NXVkVzFXWVd4MVpVdGxlWE1nUFNCMGFHbHpMblpoYkhWbFMyVjVjeTVzWlc1bmRHZzdYRzRnSUNBZ0lDQjBhR2x6TG01MWJWQmhjbVZ1ZEV0bGVYTWdQU0IwYUdsekxuQmhjbVZ1ZEV0bGVYTXViR1Z1WjNSb08xeHVJQ0FnSUgxY2JseHVJQ0FnSUhKbGRIVnliaUIwYUdsek8xeHVJQ0I5WEc1Y2JpQWdjMlYwVm1Gc2RXVnpLSFpoYkhWbGN5d2dhVzVvWlhKcGRDa2dlMXh1SUNBZ0lDOHZJRWwwWlhKaGRHVWdiM1psY2lCaGJHd2dhVzVqYjIxcGJtY2dkbUZzZFdWeklHRnVaQ0J6WlhSY2JpQWdJQ0JtYjNJZ0tHeGxkQ0JyWlhrZ2FXNGdkbUZzZFdWektTQjdYRzRnSUNBZ0lDQnBaaUFvZG1Gc2RXVnpMbWhoYzA5M2JsQnliM0JsY25SNUtHdGxlU2twSUh0Y2JpQWdJQ0FnSUNBZ2JHVjBJR2hoYzBOb2FXeGtjbVZ1SUQwZ1ptRnNjMlU3WEc0Z0lDQWdJQ0FnSUdOdmJuTjBJR05vYVd4a2NtVnVJRDBnZTMwN1hHNWNiaUFnSUNBZ0lDQWdMeThnVFdWeVoyVWdhVzUwYnlCbGVHbHpkR2x1WnlCMllXeDFaU0J2Y2lCamNtVmhkR1VnYm1WM1hHNGdJQ0FnSUNBZ0lHTnZibk4wSUhaaGJIVmxRV3h5WldGa2VVVjRhWE4wY3lBOUlIUm9hWE11ZG1Gc2RXVnpXMnRsZVYwZ0lUMDlJSFZ1WkdWbWFXNWxaRHRjYmlBZ0lDQWdJQ0FnYkdWMElHNWxkMVpoYkhWbElEMGdkbUZzZFdWQmJISmxZV1I1UlhocGMzUnpJRDhnZXlBdUxpNTBhR2x6TG5aaGJIVmxjMXRyWlhsZElIMGdPaUI3SUM0dUxtbHVhR1Z5YVhRZ2ZUdGNibHh1SUNBZ0lDQWdJQ0F2THlCSlppQjJZV3gxWlhNZ2FYTWdibTkwSUdGdUlHOWlhbVZqZEN3Z1lYTnphV2R1SUhaaGJIVmxJSFJ2SUdSbFptRjFiSFFnY0hKdmNGeHVJQ0FnSUNBZ0lDQnBaaUFvSVdselQySnFLSFpoYkhWbGMxdHJaWGxkS1NrZ2UxeHVJQ0FnSUNBZ0lDQWdJRzVsZDFaaGJIVmxXM1JvYVhNdVpHVm1ZWFZzZEZaaGJIVmxVSEp2Y0YwZ1BTQjJZV3gxWlhOYmEyVjVYVHRjYmlBZ0lDQWdJQ0FnZlNCbGJITmxJSHRjYmlBZ0lDQWdJQ0FnSUNCdVpYZFdZV3gxWlNBOUlIc2dMaTR1Ym1WM1ZtRnNkV1VzSUM0dUxuWmhiSFZsYzF0clpYbGRJSDA3WEc0Z0lDQWdJQ0FnSUgxY2JseHVJQ0FnSUNBZ0lDQXZMeUJKWmlCM1pTZDJaU0JuYjNRZ1lXNGdZV1JoY0hSbGNpd2daMlYwSUhSb1pTQmpkWEp5Wlc1MElIWmhiSFZsWEc0Z0lDQWdJQ0FnSUdsbUlDaHVaWGRXWVd4MVpTNWpkWEp5Wlc1MElEMDlQU0IxYm1SbFptbHVaV1FwSUh0Y2JpQWdJQ0FnSUNBZ0lDQnBaaUFvZEdocGN5NWhaR0Z3ZEdWeUtTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNCdVpYZFdZV3gxWlM1amRYSnlaVzUwSUQwZ1kyOXVkbVZ5ZEVsbVUyaHZkV3hrUW1WT2RXMWlaWElvZEdocGN5NWhaR0Z3ZEdWeUxtZGxkQ2gwYUdsekxtVnNaVzFsYm5Rc0lHdGxlU2twTzF4dUlDQWdJQ0FnSUNBZ0lIMWNiaUFnSUNBZ0lDQWdmVnh1WEc0Z0lDQWdJQ0FnSUdsbUlDaHVaWGRXWVd4MVpTNW1jbTl0SUQwOVBTQjFibVJsWm1sdVpXUWdKaVlnZEdocGN5NWhaR0Z3ZEdWeUtTQjdYRzRnSUNBZ0lDQWdJQ0FnYm1WM1ZtRnNkV1V1Wm5KdmJTQTlJRzVsZDFaaGJIVmxMbU4xY25KbGJuUTdYRzRnSUNBZ0lDQWdJSDFjYmx4dUlDQWdJQ0FnSUNBdkx5QkJjSEJzZVNCa1pXWmhkV3gwSUhaaGJIVmxJSEJ5YjNCbGNuUnBaWE5jYmlBZ0lDQWdJQ0FnYVdZZ0tDRjJZV3gxWlVGc2NtVmhaSGxGZUdsemRITXBJSHRjYmlBZ0lDQWdJQ0FnSUNCdVpYZFdZV3gxWlNBOUlIc2dMaTR1ZEdocGN5NWtaV1poZFd4MFZtRnNkV1VzSUM0dUxtNWxkMVpoYkhWbElIMDdYRzRnSUNBZ0lDQWdJSDFjYmx4dUlDQWdJQ0FnSUNBdkx5QkpaaUIzWlNCa2IyNG5kQ0JvWVhabElHRWdkbUZzZFdVZ2RIbHdaU0JoYm1RZ2QyVWdaRzhnYUdGMlpTQmhiaUJCWkdGd2RHVnlMQ0JqYUdWamF5Qm1iM0lnZEhsd1pTQjNhWFJvSUhaaGJIVmxJR3RsZVZ4dUlDQWdJQ0FnSUNCcFppQW9JVzVsZDFaaGJIVmxMblI1Y0dVZ0ppWWdkR2hwY3k1aFpHRndkR1Z5SUNZbUlIUm9hWE11WVdSaGNIUmxjaTVqYUdWamExWmhiSFZsVkhsd1pTa2dlMXh1SUNBZ0lDQWdJQ0FnSUc1bGQxWmhiSFZsTG5SNWNHVWdQU0IwYUdsekxtRmtZWEIwWlhJdVkyaGxZMnRXWVd4MVpWUjVjR1VvYTJWNUtUdGNiaUFnSUNBZ0lDQWdmVnh1WEc0Z0lDQWdJQ0FnSUM4dklFbG1JSGRsSUhOMGFXeHNJR1J2YmlkMElHaGhkbVVnWVNCMllXeDFaU0IwZVhCbElHRnVaQ0IwYUdseklHbHpJSFJvWlNCbWFYSnpkQ0IwYVcxbElIZGxKM1psSUhObGRDQjBhR2x6SUhaaGJIVmxMQ0JqYUdWamF5QnVkVzFsY21sallXd2dkbUZzZFdWeklHWnZjaUJ6ZEhKcGJtZHpJR0Z1WkNCMFpYTjBYRzRnSUNBZ0lDQWdJR2xtSUNnaGJtVjNWbUZzZFdVdWRIbHdaU0FtSmlBaGRHaHBjeTUyWVd4MVpYTmJhMlY1WFNrZ2UxeHVJQ0FnSUNBZ0lDQWdJRzVsZDFaaGJIVmxMblI1Y0dVZ1BTQmtaWFJsWTNSV1lXeDFaVlI1Y0dVb2JtVjNWbUZzZFdVcE8xeHVJQ0FnSUNBZ0lDQjlYRzVjYmlBZ0lDQWdJQ0FnTHk4Z1NXWWdkMlVnYUdGMlpTQmhJSFpoYkhWbElIUjVjR1VzSUdoaGJtUnNaUzRnVkdocGN5QnBjeUJ0ZVNCc1pXRnpkQ0JtWVhadmRYSnBkR1VnY0dGeWRDQnZaaUJRYjNCdGIzUnBiMjRzSUhOdkxpNHVJR1Z1YW05NUxseHVJQ0FnSUNBZ0lDQnBaaUFvYm1WM1ZtRnNkV1V1ZEhsd1pTa2dlMXh1SUNBZ0lDQWdJQ0FnSUdadmNpQW9iR1YwSUdrZ1BTQXdPeUJwSUR3Z1RsVk5YMDVWVFVWU1NVTkJURjlXUVV4VlJWTTdJR2tyS3lrZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnWTI5dWMzUWdjSEp2Y0U1aGJXVWdQU0JPVlUxRlVrbERRVXhmVmtGTVZVVlRXMmxkTzF4dUlDQWdJQ0FnSUNBZ0lDQWdZMjl1YzNRZ2RtRnNkV1ZRY205d0lEMGdibVYzVm1Gc2RXVmJjSEp2Y0U1aGJXVmRPMXh1WEc0Z0lDQWdJQ0FnSUNBZ0lDQXZMeUJKWmlCMGFHbHpJSEJ5YjNBZ2FYTWdZU0J6ZEhKcGJtY2dZVzVrSUhkbElHaGhkbVVnWVNCemNHeHBkSFJsY2l3Z2MzQnNhWFJjYmlBZ0lDQWdJQ0FnSUNBZ0lHbG1JQ2h1WlhkV1lXeDFaUzUwZVhCbExtaGhjMDkzYmxCeWIzQmxjblI1S0NkemNHeHBkQ2NwS1NCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUdOdmJuTjBJSE53YkdsMFVISnZjQ0E5SUdselUzUnlhVzVuS0haaGJIVmxVSEp2Y0NrZ1B5QnVaWGRXWVd4MVpTNTBlWEJsTG5Od2JHbDBLSFpoYkhWbFVISnZjQ2tnT2lCN2ZUdGNibHh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQm1iM0lnS0d4bGRDQnpjR3hwZEV0bGVTQnBiaUJ6Y0d4cGRGQnliM0FwSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCcFppQW9jM0JzYVhSUWNtOXdMbWhoYzA5M2JsQnliM0JsY25SNUtITndiR2wwUzJWNUtTa2dlMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnWTI5dWMzUWdZMjl0WW1sdVpXUkxaWGtnUFNCclpYa2dLeUJ6Y0d4cGRFdGxlVHRjYmx4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0x5OGdTV1lnZDJVZ1pHOXVKM1FnYUdGMlpTQmhJR05vYVd4a0lIWmhiSFZsSUdadmNpQjBhR2x6SUd0bGVTd2diV0ZyWlNCdmJtVmNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJR2xtSUNnaFkyaHBiR1J5Wlc1YlkyOXRZbWx1WldSTFpYbGRLU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lHTnZibk4wSUdSbFptRjFiSFJXWVd4MVpTQTlJQ2h1WlhkV1lXeDFaUzUwZVhCbExtUmxabUYxYkhSUWNtOXdjeUFtSmlCdVpYZFdZV3gxWlM1MGVYQmxMbVJsWm1GMWJIUlFjbTl3YzF0emNHeHBkRXRsZVYwcElEOGdibVYzVm1Gc2RXVXVkSGx3WlM1a1pXWmhkV3gwVUhKdmNITmJjM0JzYVhSTFpYbGRJRG9nYm1WM1ZtRnNkV1V1ZEhsd1pTNWtaV1poZFd4MFVISnZjSE1nZkh3Z2UzMDdYRzVjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ1kyaHBiR1J5Wlc1YlkyOXRZbWx1WldSTFpYbGRJRDBnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQzR1TG01bGQxWmhiSFZsTEZ4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQzR1TG1SbFptRjFiSFJXWVd4MVpTeGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCd1lYSmxiblE2SUd0bGVTeGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCamFHbHNaRXRsZVRvZ2MzQnNhWFJMWlhsY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdmVHRjYmx4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQmtaV3hsZEdVZ1kyaHBiR1J5Wlc1YlkyOXRZbWx1WldSTFpYbGRMblI1Y0dVN1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQjlYRzVjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUdoaGMwTm9hV3hrY21WdUlEMGdkSEoxWlR0Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lHTm9hV3hrY21WdVcyTnZiV0pwYm1Wa1MyVjVYVnR3Y205d1RtRnRaVjBnUFNCd1lYSnpaVVpzYjJGMEtITndiR2wwVUhKdmNGdHpjR3hwZEV0bGVWMHBPMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJSDFjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdmVnh1WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQzh2SUVsbUlIZGxJR2hoZG1VZ1lTQjBaVzF3YkdGMFpTQm1kVzVqZEdsdmJpd2daMlZ1WlhKaGRHVmNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ2FXWWdLQ0Z1WlhkV1lXeDFaUzUwWlcxd2JHRjBaU0FtSmlCdVpYZFdZV3gxWlM1MGVYQmxMblJsYlhCc1lYUmxJQ1ltSUdselUzUnlhVzVuS0haaGJIVmxVSEp2Y0NrcElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQnVaWGRXWVd4MVpTNTBaVzF3YkdGMFpTQTlJRzVsZDFaaGJIVmxMblI1Y0dVdWRHVnRjR3hoZEdVb2RtRnNkV1ZRY205d0tUdGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ2ZWeHVJQ0FnSUNBZ0lDQWdJQ0FnZlNCbGJITmxJR2xtSUNodVpYZFdZV3gxWlM1MGVYQmxMbVJsWm1GMWJIUlFjbTl3Y3lrZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNCdVpYZFdZV3gxWlNBOUlIc2dMaTR1Ym1WM1ZtRnNkV1V1ZEhsd1pTNWtaV1poZFd4MFVISnZjSE1zSUM0dUxtNWxkMVpoYkhWbElIMDdYRzVjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdMeThnVkdocGN5QnBjeUJoSUdKcGRDQnZaaUJoSUdoaFkyc2dMU0IwYUdseklHVnVkR2x5WlNCbWRXNWpkR2x2YmlCcGN5QmhJR2hoWTJzdUlGTnZjbko1SUdaMWRIVnlaU0J6Wld4bUxpQkpJR3h2YjJzZ1ptOXlkMkZ5WkNCMGJ5QnpZM0poY0hCcGJtY2dkR2hsSUd4dmRDQnZaaUJwZEM1Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnYVdZZ0tHNWxkMVpoYkhWbExuUjVjR1V1WkdWbVlYVnNkRkJ5YjNCekxuUjVjR1VwSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCdVpYZFdZV3gxWlM1MGVYQmxJRDBnYm1WM1ZtRnNkV1V1ZEhsd1pTNWtaV1poZFd4MFVISnZjSE11ZEhsd1pUdGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ2ZWeHVJQ0FnSUNBZ0lDQWdJQ0FnZlZ4dVhHNGdJQ0FnSUNBZ0lDQWdJQ0JwWmlBb2RtRnNkV1ZRY205d0lDRTlQU0IxYm1SbFptbHVaV1FnSmlZZ2JtVjNWbUZzZFdVdWRIbHdaUzV3WVhKelpTa2dlMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQnVaWGRXWVd4MVpWdHdjbTl3VG1GdFpWMGdQU0J1WlhkV1lXeDFaUzUwZVhCbExuQmhjbk5sS0haaGJIVmxVSEp2Y0N3Z2JtVjNWbUZzZFdVcE8xeHVJQ0FnSUNBZ0lDQWdJQ0FnZlZ4dUlDQWdJQ0FnSUNBZ0lIMWNiaUFnSUNBZ0lDQWdmU0F2THlCRmJtUWdkbUZzZFdVZ2RIbHdaU0J1YjI1elpXNXpaVnh1WEc0Z0lDQWdJQ0FnSUM4dklGTmxkQ0JnY0hKbGRtQWdkRzhnWUdOMWNuSmxiblJnSUdadmNpQm1hWEp6ZENCbWNtRnRaU0JoWm5SbGNpQnpaWFJjYmlBZ0lDQWdJQ0FnYm1WM1ZtRnNkV1V1Y0hKbGRpQTlJRzVsZDFaaGJIVmxMbU4xY25KbGJuUTdYRzRnSUNBZ0lDQWdJRnh1SUNBZ0lDQWdJQ0F2THlCSlppQjBhR2x6SUhaaGJIVmxJR1J2WlhOdUozUWdhR0YyWlNCamFHbHNaSEpsYml3Z1lXUmtJSFJ2SUhaaGJIVmxTMlY1YzF4dUlDQWdJQ0FnSUNCcFppQW9JV2hoYzBOb2FXeGtjbVZ1S1NCN1hHNGdJQ0FnSUNBZ0lDQWdhV1lnS0hSb2FYTXVkbUZzZFdWTFpYbHpMbWx1WkdWNFQyWW9hMlY1S1NBOVBUMGdMVEVwSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJSFJvYVhNdWRtRnNkV1ZMWlhsekxuQjFjMmdvYTJWNUtUdGNiaUFnSUNBZ0lDQWdJQ0I5WEc1Y2JpQWdJQ0FnSUNBZ0x5OGdUM0lnWVdSa0lIUnZJSEJoY21WdWRFdGxlWE5jYmlBZ0lDQWdJQ0FnZlNCbGJITmxJSHRjYmlBZ0lDQWdJQ0FnSUNCdVpYZFdZV3gxWlM1amFHbHNaSEpsYmlBOUlHNWxkMVpoYkhWbExtTm9hV3hrY21WdUlIeDhJSHQ5TzF4dVhHNGdJQ0FnSUNBZ0lDQWdhV1lnS0hSb2FYTXVjR0Z5Wlc1MFMyVjVjeTVwYm1SbGVFOW1LR3RsZVNrZ1BUMDlJQzB4S1NCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0IwYUdsekxuQmhjbVZ1ZEV0bGVYTXVjSFZ6YUNoclpYa3BPMXh1SUNBZ0lDQWdJQ0FnSUgxY2JseHVJQ0FnSUNBZ0lDQWdJSFJvYVhNdWMyVjBWbUZzZFdWektHTm9hV3hrY21WdUtUdGNiaUFnSUNBZ0lDQWdmVnh1WEc0Z0lDQWdJQ0FnSUhSb2FYTXVkbUZzZFdWelcydGxlVjBnUFNCdVpYZFdZV3gxWlR0Y2JpQWdJQ0FnSUgxY2JpQWdJQ0I5WEc0Z0lIMWNibHh1SUNBdktseHVJQ0FnSUVSbFkybGtaU0IzYUdWMGFHVnlJSFJvYVhNZ1FXTjBhVzl1SUhkcGJHd2djbVZ1WkdWeUlHOXVJRzVsZUhRZ1puSmhiV1ZjYmx4dUlDQWdJRUJ3WVhKaGJTQmJRV04wYVc5dVhWeHVJQ0FnSUVCd1lYSmhiU0JiYm5WdFltVnlYVnh1SUNBZ0lFQndZWEpoYlNCYmJuVnRZbVZ5WFZ4dUlDQWdJRUJ5WlhSMWNtNGdXMkp2YjJ4bFlXNWRPaUJTWlhSMWNtNGdkSEoxWlNCMGJ5QnlaVzVrWlhKY2JpQWdLaTljYmlBZ2QybHNiRkpsYm1SbGNpaGhZM1JwYjI0c0lHWnlZVzFsVTNSaGJYQXNJR1ZzWVhCelpXUXBJSHRjYmlBZ0lDQnNaWFFnYUdGelEyaGhibWRsWkNBOUlHWmhiSE5sTzF4dVhHNGdJQ0FnTHk4Z1EyaGxZMnNnYVdZZ1ltRnpaU0IyWVd4MVpYTWdhR0YyWlNCMWNHUmhkR1ZrSUZ4dUlDQWdJR1p2Y2lBb2JHVjBJR2tnUFNBd095QnBJRHdnZEdocGN5NXVkVzFXWVd4MVpVdGxlWE03SUdrckt5a2dlMXh1SUNBZ0lDQWdZMjl1YzNRZ2EyVjVJRDBnZEdocGN5NTJZV3gxWlV0bGVYTmJhVjA3WEc0Z0lDQWdJQ0JqYjI1emRDQjJZV3gxWlNBOUlIUm9hWE11ZG1Gc2RXVnpXMnRsZVYwN1hHNWNiaUFnSUNBZ0lDOHZJRkoxYmlCMGNtRnVjMlp2Y20wZ1puVnVZM1JwYjI0Z0tHbG1JSEJ5WlhObGJuUXBYRzRnSUNBZ0lDQnBaaUFvZG1Gc2RXVXVkSEpoYm5ObWIzSnRLU0I3WEc0Z0lDQWdJQ0FnSUhaaGJIVmxMbU4xY25KbGJuUWdQU0IyWVd4MVpTNTBjbUZ1YzJadmNtMG9kbUZzZFdVdVkzVnljbVZ1ZEN3Z2EyVjVMQ0IwYUdsektUdGNiaUFnSUNBZ0lIMWNibHh1SUNBZ0lDQWdMeThnUTJGd0lHMXBibWx0ZFcxY2JpQWdJQ0FnSUdsbUlDaHBjMDUxYlNoMllXeDFaUzV0YVc0cEtTQjdYRzRnSUNBZ0lDQWdJSFpoYkhWbExtTjFjbkpsYm5RZ1BTQk5ZWFJvTG0xaGVDaDJZV3gxWlM1amRYSnlaVzUwTENCMllXeDFaUzV0YVc0cE8xeHVJQ0FnSUNBZ2ZWeHVYRzRnSUNBZ0lDQXZMeUJEWVhBZ2JXRjRhVzExYlZ4dUlDQWdJQ0FnYVdZZ0tHbHpUblZ0S0haaGJIVmxMbTFoZUNrcElIdGNiaUFnSUNBZ0lDQWdkbUZzZFdVdVkzVnljbVZ1ZENBOUlFMWhkR2d1YldsdUtIWmhiSFZsTG1OMWNuSmxiblFzSUhaaGJIVmxMbTFoZUNrN1hHNGdJQ0FnSUNCOVhHNWNiaUFnSUNBZ0lDOHZJRkp2ZFc1a0lHNTFiV0psY2x4dUlDQWdJQ0FnYVdZZ0tIWmhiSFZsTG5KdmRXNWtLU0I3WEc0Z0lDQWdJQ0FnSUhaaGJIVmxMbU4xY25KbGJuUWdQU0JOWVhSb0xuSnZkVzVrS0haaGJIVmxMbU4xY25KbGJuUXBPMXh1SUNBZ0lDQWdmVnh1WEc0Z0lDQWdJQ0IyWVd4MVpTNW1jbUZ0WlVOb1lXNW5aU0E5SUhaaGJIVmxMbU4xY25KbGJuUWdMU0IyWVd4MVpTNXdjbVYyTzF4dVhHNGdJQ0FnSUNBdkx5QlZjR1JoZEdVZ2RtVnNiMk5wZEhsY2JpQWdJQ0FnSUdsbUlDZ2hkR2hwY3k1allXeGpkV3hoZEdWelZtVnNiMk5wZEhrcElIdGNiaUFnSUNBZ0lDQWdkbUZzZFdVdWRtVnNiMk5wZEhrZ1BTQnpjR1ZsWkZCbGNsTmxZMjl1WkNoMllXeDFaUzVtY21GdFpVTm9ZVzVuWlN3Z1pXeGhjSE5sWkNrN1hHNGdJQ0FnSUNCOVhHNWNiaUFnSUNBZ0lDOHZJRWxtSUhSb2FYTWdkbUZzZFdVZ2FHRnpJR05vWVc1blpXUmNiaUFnSUNBZ0lHbG1JQ2gyWVd4MVpTNXdjbVYySUNFOVBTQjJZV3gxWlM1amRYSnlaVzUwS1NCN1hHNGdJQ0FnSUNBZ0lHaGhjME5vWVc1blpXUWdQU0IwY25WbE8xeHVJQ0FnSUNBZ0lDQjJZV3gxWlM1d2NtVjJJRDBnZG1Gc2RXVXVZM1Z5Y21WdWREdGNiaUFnSUNBZ0lIMWNibHh1SUNBZ0lDQWdMeThnUVhCd1pXNWtJSFZ1YVhSY2JpQWdJQ0FnSUdOdmJuTjBJSFpoYkhWbFJtOXlVM1JoZEdVZ1BTQW9kbUZzZFdVdWRIbHdaU0FtSmlCMllXeDFaUzUwZVhCbExuTmxjbWxoYkdsNlpTa2dQeUIyWVd4MVpTNTBlWEJsTG5ObGNtbGhiR2w2WlNoMllXeDFaUzVqZFhKeVpXNTBMQ0IyWVd4MVpTa2dPaUIyWVd4MVpTNWpkWEp5Wlc1ME8xeHVYRzRnSUNBZ0lDQXZMeUJCWkdRZ2RHOGdjM1JoZEdVZ2FXWWdkR2hwY3lCcGN5QnViM1FnWVNCamFHbHNaQ0IyWVhWbFhHNGdJQ0FnSUNCcFppQW9JWFpoYkhWbExuQmhjbVZ1ZENrZ2UxeHVJQ0FnSUNBZ0lDQjBhR2x6TG5OMFlYUmxXMnRsZVYwZ1BTQjJZV3gxWlVadmNsTjBZWFJsTzF4dUlDQWdJQ0FnZlNCbGJITmxJSHRjYmlBZ0lDQWdJQ0FnZEdocGN5NTJZV3gxWlhOYmRtRnNkV1V1Y0dGeVpXNTBYUzVqYUdsc1pISmxibHQyWVd4MVpTNWphR2xzWkV0bGVWMGdQU0IyWVd4MVpVWnZjbE4wWVhSbE8xeHVJQ0FnSUNBZ2ZWeHVJQ0FnSUgxY2JseHVJQ0FnSUM4dklGVndaR0YwWlNCd1lYSmxiblFnZG1Gc2RXVnpYRzRnSUNBZ1ptOXlJQ2hzWlhRZ2FTQTlJREE3SUdrZ1BDQjBhR2x6TG01MWJWQmhjbVZ1ZEV0bGVYTTdJR2tyS3lrZ2UxeHVJQ0FnSUNBZ1kyOXVjM1FnYTJWNUlEMGdkR2hwY3k1d1lYSmxiblJMWlhselcybGRPMXh1SUNBZ0lDQWdZMjl1YzNRZ2RtRnNkV1VnUFNCMGFHbHpMblpoYkhWbGMxdHJaWGxkTzF4dVhHNGdJQ0FnSUNCMllXeDFaUzVqZFhKeVpXNTBJRDBnZG1Gc2RXVXVkSGx3WlM1amIyMWlhVzVsS0haaGJIVmxMbU5vYVd4a2NtVnVMQ0IyWVd4MVpTNTBaVzF3YkdGMFpTazdYRzVjYmlBZ0lDQWdJSFJvYVhNdWMzUmhkR1ZiYTJWNVhTQTlJSFpoYkhWbExtTjFjbkpsYm5RN1hHNGdJQ0FnZlZ4dVhHNGdJQ0FnYVdZZ0tIUm9hWE11YjI1R2NtRnRaU2tnZTF4dUlDQWdJQ0FnZEdocGN5NXZia1p5WVcxbEtIUm9hWE11YzNSaGRHVXNJSFJvYVhNcE8xeHVJQ0FnSUgxY2JseHVJQ0FnSUhKbGRIVnliaUFvZEdocGN5NXZia05zWldGdWRYQXBJRDhnZEhKMVpTQTZJR2hoYzBOb1lXNW5aV1E3WEc0Z0lIMWNibHh1SUNCcGJtaGxjbWwwS0hCeWIzQnpJRDBnZTMwcElIdGNiaUFnSUNCamIyNXpkQ0I3SUhaaGJIVmxjeXdnTGk0dWNISnZjSE5VYjFObGRDQjlJRDBnY0hKdmNITTdYRzRnSUNBZ1kyOXVjM1FnYm1WM1FXTjBhVzl1SUQwZ2MzVndaWEl1YVc1b1pYSnBkQ2h3Y205d2MxUnZVMlYwS1R0Y2JseHVJQ0FnSUdsbUlDaDJZV3gxWlhNcElIdGNiaUFnSUNBZ0lHNWxkMEZqZEdsdmJpNXpaWFFvZXlCMllXeDFaWE1nZlNrN1hHNGdJQ0FnZlZ4dVhHNGdJQ0FnY21WMGRYSnVJRzVsZDBGamRHbHZianRjYmlBZ2ZWeHVYRzRnSUhCaGRYTmxLQ2tnZTF4dUlDQWdJSE4xY0dWeUxuTjBiM0FvS1R0Y2JpQWdJQ0J5WlhSMWNtNGdkR2hwY3p0Y2JpQWdmVnh1WEc0Z0lISmxjM1Z0WlNncElIdGNiaUFnSUNCemRYQmxjaTV6ZEdGeWRDZ3BPMXh1SUNBZ0lISmxkSFZ5YmlCMGFHbHpPMXh1SUNCOVhHNWNiaUFnZEc5bloyeGxLQ2tnZTF4dUlDQWdJSEpsZEhWeWJpQjBhR2x6TG1selFXTjBhWFpsSUQ4Z2RHaHBjeTV3WVhWelpTZ3BJRG9nZEdocGN5NXlaWE4xYldVb0tUdGNiaUFnZlZ4dVhHNGdJSE4wWVhKMEtDa2dlMXh1SUNBZ0lHTnZibk4wSUhaaGJIVmxjeUE5SUhSb2FYTXVkbUZzZFdWek8xeHVJQ0FnSUhOMWNHVnlMbk4wWVhKMEtDazdYRzVjYmlBZ0lDQm1iM0lnS0d4bGRDQnJaWGtnYVc0Z2RtRnNkV1Z6S1NCN1hHNGdJQ0FnSUNCcFppQW9kbUZzZFdWekxtaGhjMDkzYmxCeWIzQmxjblI1S0d0bGVTa3BJSHRjYmlBZ0lDQWdJQ0FnZG1Gc2RXVnpXMnRsZVYwdWNISmxkaUE5SUhaaGJIVmxjMXRyWlhsZExtOXlhV2RwYmlBOUlIWmhiSFZsYzF0clpYbGRMbU4xY25KbGJuUTdYRzRnSUNBZ0lDQjlYRzRnSUNBZ2ZWeHVYRzRnSUNBZ2NtVjBkWEp1SUhSb2FYTTdYRzRnSUgxY2JseHVJQ0J6ZEdGMGFXTWdaWGgwWlc1a1JHVm1ZWFZzZEZaaGJIVmxLSEJ5YjNCektTQjdYRzRnSUNBZ2NtVjBkWEp1SUhzZ0xpNHVkR2hwY3k1d2NtOTBiM1I1Y0dVdVpHVm1ZWFZzZEZaaGJIVmxMQ0F1TGk1d2NtOXdjeUI5TzF4dUlDQjlYRzVjYmlBZ2MzUmhkR2xqSUdWNGRHVnVaRVJsWm1GMWJIUlFjbTl3Y3lod2NtOXdjeWtnZTF4dUlDQWdJSEpsZEhWeWJpQjdJQzR1TG5Sb2FYTXVjSEp2ZEc5MGVYQmxMbVJsWm1GMWJIUlFjbTl3Y3l3Z0xpNHVjSEp2Y0hNZ2ZUdGNiaUFnZlZ4dWZWeHVYRzVCWTNScGIyNHVjSEp2ZEc5MGVYQmxMbVJsWm1GMWJIUldZV3gxWlZCeWIzQWdQU0FuWTNWeWNtVnVkQ2M3WEc1QlkzUnBiMjR1Y0hKdmRHOTBlWEJsTG1SbFptRjFiSFJXWVd4MVpTQTlJSHRjYmlBZ2RtVnNiMk5wZEhrNklEQXNYRzRnSUhKdmRXNWtPaUJtWVd4elpTeGNiaUFnYldsdU9pQjFibVJsWm1sdVpXUXNYRzRnSUcxaGVEb2dkVzVrWldacGJtVmtMRnh1SUNCMGNtRnVjMlp2Y20wNklIVnVaR1ZtYVc1bFpGeHVmVHRjYmx4dVpYaHdiM0owSUdSbFptRjFiSFFnUVdOMGFXOXVPMXh1SWwxOVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvYWN0aW9ucy9BY3Rpb24uanNcbiAqKiBtb2R1bGUgaWQgPSAzXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfQWN0aW9uMiA9IHJlcXVpcmUoJy4uL2FjdGlvbnMvQWN0aW9uJyk7XG5cbnZhciBfQWN0aW9uMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX0FjdGlvbjIpO1xuXG52YXIgX2dlbmVyYXRlQmxlbmRDdXJ2ZSA9IHJlcXVpcmUoJy4vZmxvdy9nZW5lcmF0ZS1ibGVuZC1jdXJ2ZScpO1xuXG52YXIgX2dlbmVyYXRlQmxlbmRDdXJ2ZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9nZW5lcmF0ZUJsZW5kQ3VydmUpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmICghc2VsZikgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIGNhbGwgJiYgKHR5cGVvZiBjYWxsID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpID8gY2FsbCA6IHNlbGY7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgXCIgKyB0eXBlb2Ygc3VwZXJDbGFzcyk7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgZW51bWVyYWJsZTogZmFsc2UsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcykgOiBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzOyB9XG5cbi8qXG4gIE1ldGhvZHMgYW5kIHByb3BlcnRpZXMgdG8gYWRkIHRvIGJvdW5kIEFjdGlvbnNcbiovXG52YXIgYm91bmRPblN0YXJ0ID0gZnVuY3Rpb24gKGFjdGlvbikge1xuICByZXR1cm4gYWN0aW9uLmZsb3cuYWN0aXZhdGVBY3Rpb24oYWN0aW9uLmlkLCBhY3Rpb24pO1xufTtcbnZhciBib3VuZE9uU3RvcCA9IGZ1bmN0aW9uIChhY3Rpb24pIHtcbiAgcmV0dXJuIGFjdGlvbi5mbG93LmRlYWN0aXZhdGVBY3Rpb24oYWN0aW9uLmlkKTtcbn07XG52YXIgYm91bmRQcm9wcyA9IGZ1bmN0aW9uIChmbG93KSB7XG4gIHJldHVybiB7XG4gICAgZmxvdzogZmxvdyxcbiAgICBpc1ByaW9yaXR5OiB0cnVlLFxuICAgIG9uQWN0aXZhdGU6IGJvdW5kT25TdGFydCxcbiAgICBvbkRlYWN0aXZhdGU6IGJvdW5kT25TdG9wXG4gIH07XG59O1xuXG52YXIgRmxvdyA9IGZ1bmN0aW9uIChfQWN0aW9uKSB7XG4gIF9pbmhlcml0cyhGbG93LCBfQWN0aW9uKTtcblxuICBmdW5jdGlvbiBGbG93KHByb3BzKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIEZsb3cpO1xuXG4gICAgdmFyIF90aGlzID0gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgX0FjdGlvbi5jYWxsKHRoaXMsIHByb3BzKSk7XG5cbiAgICBfdGhpcy5hY3RpdmVBY3Rpb25zID0ge307XG4gICAgX3RoaXMubnVtQWN0aXZlQWN0aW9ucyA9IDA7XG4gICAgcmV0dXJuIF90aGlzO1xuICB9XG5cbiAgRmxvdy5wcm90b3R5cGUuc2V0ID0gZnVuY3Rpb24gc2V0KHByb3BzKSB7XG4gICAgX0FjdGlvbi5wcm90b3R5cGUuc2V0LmNhbGwodGhpcywgcHJvcHMpO1xuXG4gICAgdGhpcy5vbmNlKCk7XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICAvKlxuICAgIEJpbmQgQWN0aW9uIHRvIEFjdG9yXG4gICovXG5cblxuICBGbG93LnByb3RvdHlwZS5jb25uZWN0ID0gZnVuY3Rpb24gY29ubmVjdChhY3Rpb24pIHtcbiAgICB2YXIgaW5oZXJpdGVkQWN0aW9uID0gYWN0aW9uLmluaGVyaXQoKTtcbiAgICB2YXIgbmV3VmFsdWVzID0ge307XG4gICAgdmFyIGhhc05ld1ZhbHVlcyA9IGZhbHNlO1xuXG4gICAgLy8gQ3JlYXRlIHZhbHVlcyBvbiBhY3RvciB0aGF0IGRvbid0IGV4aXN0XG4gICAgZm9yICh2YXIga2V5IGluIGluaGVyaXRlZEFjdGlvbi52YWx1ZXMpIHtcbiAgICAgIGlmIChpbmhlcml0ZWRBY3Rpb24udmFsdWVzLmhhc093blByb3BlcnR5KGtleSkgJiYgIXRoaXMudmFsdWVzLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgbmV3VmFsdWVzW2tleV0gPSB7fTtcbiAgICAgICAgaGFzTmV3VmFsdWVzID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoaGFzTmV3VmFsdWVzKSB7XG4gICAgICB0aGlzLnNldCh7IHZhbHVlczogbmV3VmFsdWVzIH0pO1xuICAgIH1cblxuICAgIGluaGVyaXRlZEFjdGlvbi5wYXJlbnRJZCA9IGFjdGlvbi5pZDtcblxuICAgIHJldHVybiBpbmhlcml0ZWRBY3Rpb24uc2V0KGJvdW5kUHJvcHModGhpcywgaW5oZXJpdGVkQWN0aW9uKSk7XG4gIH07XG5cbiAgLypcbiAgICBTdGFydCBBY3RvclxuICAgICBJZiBBY3Rpb24gaXMgcHJvdmlkZWQsIGJpbmQgaXQgdG8gdGhpcyBBY3RvciBhbmQgc3RhcnRcbiAgICAgQHBhcmFtIChvcHRpb25hbCkgW0FjdGlvbl1cbiAgKi9cblxuXG4gIEZsb3cucHJvdG90eXBlLnN0YXJ0ID0gZnVuY3Rpb24gc3RhcnQoKSB7XG4gICAgX0FjdGlvbi5wcm90b3R5cGUuc3RhcnQuY2FsbCh0aGlzKTtcblxuICAgIGZvciAodmFyIGtleSBpbiB0aGlzLmFjdGl2ZUFjdGlvbnMpIHtcbiAgICAgIGlmICh0aGlzLmFjdGl2ZUFjdGlvbnMuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICB2YXIgYWN0aW9uID0gdGhpcy5hY3RpdmVBY3Rpb25zW2tleV07XG4gICAgICAgIGlmICghYWN0aW9uLmlzQWN0aXZlKSB7XG4gICAgICAgICAgYWN0aW9uLnN0YXJ0KCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICBGbG93LnByb3RvdHlwZS5zdG9wID0gZnVuY3Rpb24gc3RvcCgpIHtcbiAgICBfQWN0aW9uLnByb3RvdHlwZS5zdG9wLmNhbGwodGhpcyk7XG5cbiAgICBmb3IgKHZhciBrZXkgaW4gdGhpcy5hY3RpdmVBY3Rpb25zKSB7XG4gICAgICBpZiAodGhpcy5hY3RpdmVBY3Rpb25zLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgdGhpcy5hY3RpdmVBY3Rpb25zW2tleV0uc3RvcCgpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIEZsb3cucHJvdG90eXBlLndpbGxSZW5kZXIgPSBmdW5jdGlvbiB3aWxsUmVuZGVyKGFjdG9yLCBmcmFtZVN0YW1wLCBlbGFwc2VkKSB7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLm51bVZhbHVlS2V5czsgaSsrKSB7XG4gICAgICB2YXIga2V5ID0gdGhpcy52YWx1ZUtleXNbaV07XG4gICAgICB2YXIgdmFsdWUgPSB0aGlzLnZhbHVlc1trZXldO1xuICAgICAgdmFyIGRyaXZlciA9IHZhbHVlLm51bURyaXZlcnMgPyB0aGlzLmFjdGl2ZUFjdGlvbnNbdmFsdWUuZHJpdmVyc1swXV0gOiBmYWxzZTtcbiAgICAgIHZhciBuZXdDdXJyZW50ID0gdmFsdWUubnVtRHJpdmVycyA/IGRyaXZlci52YWx1ZXNba2V5XS5jdXJyZW50IDogdmFsdWUuY3VycmVudDtcblxuICAgICAgLyoqXG4gICAgICAgKiBUT0RPOiByZXBsYWNlIHdpdGggYmxlbmQgdHJlZSByZXNvbHZlclxuICAgICAgICogQWRkaXRpdmUgbW90aW9uXG4gICAgICAgKiBCZXppZXIgdHdlZW4gYmxlbmRcbiAgICAgICAqL1xuICAgICAgaWYgKHZhbHVlLmJsZW5kQ3VydmUpIHtcbiAgICAgICAgbmV3Q3VycmVudCA9IHZhbHVlLmJsZW5kQ3VydmUoKTtcbiAgICAgIH1cblxuICAgICAgdmFsdWUuY3VycmVudCA9IG5ld0N1cnJlbnQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIF9BY3Rpb24ucHJvdG90eXBlLndpbGxSZW5kZXIuY2FsbCh0aGlzLCBhY3RvciwgZnJhbWVTdGFtcCwgZWxhcHNlZCk7XG4gIH07XG5cbiAgLypcbiAgICBBZGQgYWN0aXZlIGFjdGlvbnNcbiAgICAgQHBhcmFtIFtudW1iZXJdXG4gICAgQHBhcmFtIFtBY3Rpb25dXG4gICovXG5cblxuICBGbG93LnByb3RvdHlwZS5hY3RpdmF0ZUFjdGlvbiA9IGZ1bmN0aW9uIGFjdGl2YXRlQWN0aW9uKGlkLCBhY3Rpb24pIHtcbiAgICB0aGlzLmFjdGl2ZUFjdGlvbnNbaWRdID0gYWN0aW9uO1xuICAgIHRoaXMubnVtQWN0aXZlQWN0aW9ucysrO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhY3Rpb24ubnVtVmFsdWVLZXlzOyBpKyspIHtcbiAgICAgIHZhciBrZXkgPSBhY3Rpb24udmFsdWVLZXlzW2ldO1xuICAgICAgdmFyIGFjdGlvblZhbHVlID0gYWN0aW9uLnZhbHVlc1trZXldO1xuICAgICAgdmFyIHZhbHVlID0gdGhpcy52YWx1ZXNba2V5XTtcblxuICAgICAgLy8gSWYgd2UncmUgYmxlbmRpbmcgdGhpcyBhY3Rpb24sIGFuZCB0aGVyZSdzIG9uIGFscmVhZHkgaW4gcHJvZ3Jlc3NcbiAgICAgIGlmIChhY3Rpb24uYmxlbmQgJiYgdmFsdWUubnVtRHJpdmVycyAmJiAhdmFsdWUuYmxlbmRDdXJ2ZSAmJiB2YWx1ZS5kcml2ZXJzWzBdLnByb3RvdHlwZSA9PT0gYWN0aW9uLnByb3RvdHlwZSkge1xuICAgICAgICB2YWx1ZS5ibGVuZEN1cnZlID0gKDAsIF9nZW5lcmF0ZUJsZW5kQ3VydmUyLmRlZmF1bHQpKHRoaXMuYWN0aXZlQWN0aW9uc1t2YWx1ZS5kcml2ZXJzWzBdXSwgYWN0aW9uLCB2YWx1ZSwga2V5KTtcbiAgICAgIH0gZWxzZSBpZiAoIWFjdGlvbi5pc1NjcnViYmluZykge1xuICAgICAgICB2YWx1ZS5ibGVuZEN1cnZlID0gdW5kZWZpbmVkO1xuXG4gICAgICAgIC8vIFBhc3MgQWN0b3IgdmFsdWUgcHJvcGVydGllcyB0byBBY3Rpb25cbiAgICAgICAgaWYgKGFjdGlvblZhbHVlLnZlbG9jaXR5ID09PSAwKSB7XG4gICAgICAgICAgYWN0aW9uVmFsdWUudmVsb2NpdHkgPSB2YWx1ZS52ZWxvY2l0eTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChhY3Rpb25WYWx1ZS5mcm9tID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICBhY3Rpb25WYWx1ZS5mcm9tID0gYWN0aW9uVmFsdWUuY3VycmVudCA9IHZhbHVlLmN1cnJlbnQ7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgdmFsdWUuZHJpdmVycyA9IFtpZF07XG4gICAgICB2YWx1ZS5udW1Ecml2ZXJzID0gdmFsdWUuZHJpdmVycy5sZW5ndGg7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMubnVtQWN0aXZlQWN0aW9ucykge1xuICAgICAgX0FjdGlvbi5wcm90b3R5cGUuc3RhcnQuY2FsbCh0aGlzKTtcbiAgICB9XG4gIH07XG5cbiAgLypcbiAgICBSZW1vdmUgYWN0aXZlIGFjdGlvbnNcbiAgICAgQHBhcmFtIFtudW1iZXJdXG4gICovXG5cblxuICBGbG93LnByb3RvdHlwZS5kZWFjdGl2YXRlQWN0aW9uID0gZnVuY3Rpb24gZGVhY3RpdmF0ZUFjdGlvbihpZCkge1xuICAgIHZhciBhY3Rpb24gPSB0aGlzLmFjdGl2ZUFjdGlvbnNbaWRdO1xuXG4gICAgaWYgKGFjdGlvbikge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhY3Rpb24ubnVtVmFsdWVLZXlzOyBpKyspIHtcbiAgICAgICAgdmFyIGtleSA9IGFjdGlvbi52YWx1ZUtleXNbaV07XG4gICAgICAgIHZhciB2YWx1ZSA9IHRoaXMudmFsdWVzW2tleV07XG4gICAgICAgIHZhciBkcml2ZXJJbmRleCA9IHZhbHVlLmRyaXZlcnMuaW5kZXhPZihpZCk7XG5cbiAgICAgICAgaWYgKGRyaXZlckluZGV4ICE9PSAtMSkge1xuICAgICAgICAgIHZhbHVlLmRyaXZlcnMuc3BsaWNlKGRyaXZlckluZGV4LCAxKTtcbiAgICAgICAgICB2YWx1ZS5udW1Ecml2ZXJzLS07XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgZGVsZXRlIHRoaXMuYWN0aXZlQWN0aW9uc1tpZF07XG4gICAgICB0aGlzLm51bUFjdGl2ZUFjdGlvbnMtLTtcbiAgICB9XG5cbiAgICBpZiAoIXRoaXMubnVtQWN0aXZlQWN0aW9ucyAmJiB0aGlzLmlzQWN0aXZlKSB7XG4gICAgICBfQWN0aW9uLnByb3RvdHlwZS5zdG9wLmNhbGwodGhpcyk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBGbG93O1xufShfQWN0aW9uMy5kZWZhdWx0KTtcblxuRmxvdy5wcm90b3R5cGUuZGVmYXVsdFZhbHVlID0gX0FjdGlvbjMuZGVmYXVsdC5leHRlbmREZWZhdWx0VmFsdWUoe1xuICBkcml2ZXJzOiBbXSxcbiAgbnVtRHJpdmVyczogMFxufSk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IEZsb3c7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5OeVl5OWhZM1JwYjI1ekwwWnNiM2N1YW5NaVhTd2libUZ0WlhNaU9sdGRMQ0p0WVhCd2FXNW5jeUk2SWpzN096dEJRVUZCT3pzN08wRkJRMEU3T3pzN096czdPenM3T3pzN096dEJRVXRCTEVsQlFVMHNaVUZCWlN4VlFVRkRMRTFCUVVRN1UwRkJXU3hQUVVGUExFbEJRVkFzUTBGQldTeGpRVUZhTEVOQlFUSkNMRTlCUVU4c1JVRkJVQ3hGUVVGWExFMUJRWFJETzBOQlFWbzdRVUZEY2tJc1NVRkJUU3hqUVVGakxGVkJRVU1zVFVGQlJEdFRRVUZaTEU5QlFVOHNTVUZCVUN4RFFVRlpMR2RDUVVGYUxFTkJRVFpDTEU5QlFVOHNSVUZCVUR0RFFVRjZRenRCUVVOd1FpeEpRVUZOTEdGQlFXRXNWVUZCUXl4SlFVRkVPMU5CUVZjN1FVRkROVUlzWTBGRU5FSTdRVUZGTlVJc1owSkJRVmtzU1VGQldqdEJRVU5CTEdkQ1FVRlpMRmxCUVZvN1FVRkRRU3hyUWtGQll5eFhRVUZrT3p0RFFVcHBRanM3U1VGUFlqczdPMEZCUTBvc1YwRkVTU3hKUVVOS0xFTkJRVmtzUzBGQldpeEZRVUZ0UWpzd1FrRkVaaXhOUVVObE96dHBSRUZEYWtJc2JVSkJRVTBzUzBGQlRpeEhRVVJwUWpzN1FVRkZha0lzVlVGQlN5eGhRVUZNTEVkQlFYRkNMRVZCUVhKQ0xFTkJSbWxDTzBGQlIycENMRlZCUVVzc1owSkJRVXdzUjBGQmQwSXNRMEZCZUVJc1EwRklhVUk3TzBkQlFXNUNPenRCUVVSSkxHbENRVTlLTEcxQ1FVRkpMRTlCUVU4N1FVRkRWQ3h6UWtGQlRTeEhRVUZPTEZsQlFWVXNTMEZCVml4RlFVUlRPenRCUVVkVUxGTkJRVXNzU1VGQlRDeEhRVWhUT3p0QlFVdFVMRmRCUVU4c1NVRkJVQ3hEUVV4VE96czdPenM3T3p0QlFWQlFMR2xDUVd0Q1Npd3lRa0ZCVVN4UlFVRlJPMEZCUTJRc1VVRkJUU3hyUWtGQmEwSXNUMEZCVHl4UFFVRlFMRVZCUVd4Q0xFTkJSRkU3UVVGRlpDeFJRVUZKTEZsQlFWa3NSVUZCV2l4RFFVWlZPMEZCUjJRc1VVRkJTU3hsUVVGbExFdEJRV1k3T3p0QlFVaFZMRk5CVFZRc1NVRkJTU3hIUVVGS0xFbEJRVmNzWjBKQlFXZENMRTFCUVdoQ0xFVkJRWGRDTzBGQlEzUkRMRlZCUVVrc1owSkJRV2RDTEUxQlFXaENMRU5CUVhWQ0xHTkJRWFpDTEVOQlFYTkRMRWRCUVhSRExFdEJRVGhETEVOQlFVTXNTMEZCU3l4TlFVRk1MRU5CUVZrc1kwRkJXaXhEUVVFeVFpeEhRVUV6UWl4RFFVRkVMRVZCUVd0RE8wRkJRMnhHTEd0Q1FVRlZMRWRCUVZZc1NVRkJhVUlzUlVGQmFrSXNRMEZFYTBZN1FVRkZiRVlzZFVKQlFXVXNTVUZCWml4RFFVWnJSanRQUVVGd1JqdExRVVJHT3p0QlFVOUJMRkZCUVVrc1dVRkJTaXhGUVVGclFqdEJRVU5vUWl4WFFVRkxMRWRCUVV3c1EwRkJVeXhGUVVGRkxGRkJRVkVzVTBGQlVpeEZRVUZZTEVWQlJHZENPMHRCUVd4Q096dEJRVWxCTEc5Q1FVRm5RaXhSUVVGb1FpeEhRVUV5UWl4UFFVRlBMRVZCUVZBc1EwRnFRbUk3TzBGQmJVSmtMRmRCUVU4c1owSkJRV2RDTEVkQlFXaENMRU5CUVc5Q0xGZEJRVmNzU1VGQldDeEZRVUZwUWl4bFFVRnFRaXhEUVVGd1FpeERRVUZRTEVOQmJrSmpPenM3T3pzN096czdPMEZCYkVKYUxHbENRU3REU2l4NVFrRkJVVHRCUVVOT0xITkNRVUZOTEV0QlFVNHNXVUZFVFRzN1FVRkhUaXhUUVVGTExFbEJRVWtzUjBGQlNpeEpRVUZYTEV0QlFVc3NZVUZCVEN4RlFVRnZRanRCUVVOc1F5eFZRVUZKTEV0QlFVc3NZVUZCVEN4RFFVRnRRaXhqUVVGdVFpeERRVUZyUXl4SFFVRnNReXhEUVVGS0xFVkJRVFJETzBGQlF6RkRMRmxCUVUwc1UwRkJVeXhMUVVGTExHRkJRVXdzUTBGQmJVSXNSMEZCYmtJc1EwRkJWQ3hEUVVSdlF6dEJRVVV4UXl4WlFVRkpMRU5CUVVNc1QwRkJUeXhSUVVGUUxFVkJRV2xDTzBGQlEzQkNMR2xDUVVGUExFdEJRVkFzUjBGRWIwSTdVMEZCZEVJN1QwRkdSanRMUVVSR096dEJRVk5CTEZkQlFVOHNTVUZCVUN4RFFWcE5PenM3UVVFdlEwb3NhVUpCT0VSS0xIVkNRVUZQTzBGQlEwd3NjMEpCUVUwc1NVRkJUaXhaUVVSTE96dEJRVWRNTEZOQlFVc3NTVUZCU1N4SFFVRktMRWxCUVZjc1MwRkJTeXhoUVVGTUxFVkJRVzlDTzBGQlEyeERMRlZCUVVrc1MwRkJTeXhoUVVGTUxFTkJRVzFDTEdOQlFXNUNMRU5CUVd0RExFZEJRV3hETEVOQlFVb3NSVUZCTkVNN1FVRkRNVU1zWVVGQlN5eGhRVUZNTEVOQlFXMUNMRWRCUVc1Q0xFVkJRWGRDTEVsQlFYaENMRWRCUkRCRE8wOUJRVFZETzB0QlJFWTdPMEZCVFVFc1YwRkJUeXhKUVVGUUxFTkJWRXM3T3p0QlFUbEVTQ3hwUWtFd1JVb3NhVU5CUVZjc1QwRkJUeXhaUVVGWkxGTkJRVk03UVVGRGNrTXNVMEZCU3l4SlFVRkpMRWxCUVVrc1EwRkJTaXhGUVVGUExFbEJRVWtzUzBGQlN5eFpRVUZNTEVWQlFXMUNMRWRCUVhaRExFVkJRVFJETzBGQlF6RkRMRlZCUVUwc1RVRkJUU3hMUVVGTExGTkJRVXdzUTBGQlpTeERRVUZtTEVOQlFVNHNRMEZFYjBNN1FVRkZNVU1zVlVGQlRTeFJRVUZSTEV0QlFVc3NUVUZCVEN4RFFVRlpMRWRCUVZvc1EwRkJVaXhEUVVadlF6dEJRVWN4UXl4VlFVRk5MRk5CUVZNc1RVRkJUU3hWUVVGT0xFZEJRVzFDTEV0QlFVc3NZVUZCVEN4RFFVRnRRaXhOUVVGTkxFOUJRVTRzUTBGQll5eERRVUZrTEVOQlFXNUNMRU5CUVc1Q0xFZEJRVEJFTEV0QlFURkVMRU5CU0RKQ08wRkJTVEZETEZWQlFVa3NZVUZCWVN4TlFVRk5MRlZCUVU0c1IwRkJiVUlzVDBGQlR5eE5RVUZRTEVOQlFXTXNSMEZCWkN4RlFVRnRRaXhQUVVGdVFpeEhRVUUyUWl4TlFVRk5MRTlCUVU0N096czdPenM3UVVGS2RrSXNWVUZYZEVNc1RVRkJUU3hWUVVGT0xFVkJRV3RDTzBGQlEzQkNMSEZDUVVGaExFMUJRVTBzVlVGQlRpeEZRVUZpTEVOQlJHOUNPMDlCUVhSQ096dEJRVWxCTEZsQlFVMHNUMEZCVGl4SFFVRm5RaXhWUVVGb1FpeERRV1l3UXp0TFFVRTFRenM3UVVGclFrRXNWMEZCVHl4clFrRkJUU3hWUVVGT0xGbEJRV2xDTEV0QlFXcENMRVZCUVhkQ0xGVkJRWGhDTEVWQlFXOURMRTlCUVhCRExFTkJRVkFzUTBGdVFuRkRPenM3T3pzN096czdPMEZCTVVWdVF5eHBRa0Z6UjBvc2VVTkJRV1VzU1VGQlNTeFJRVUZSTzBGQlEzcENMRk5CUVVzc1lVRkJUQ3hEUVVGdFFpeEZRVUZ1UWl4SlFVRjVRaXhOUVVGNlFpeERRVVI1UWp0QlFVVjZRaXhUUVVGTExHZENRVUZNTEVkQlJubENPenRCUVVsNlFpeFRRVUZMTEVsQlFVa3NTVUZCU1N4RFFVRktMRVZCUVU4c1NVRkJTU3hQUVVGUExGbEJRVkFzUlVGQmNVSXNSMEZCZWtNc1JVRkJPRU03UVVGRE5VTXNWVUZCVFN4TlFVRk5MRTlCUVU4c1UwRkJVQ3hEUVVGcFFpeERRVUZxUWl4RFFVRk9MRU5CUkhORE8wRkJSVFZETEZWQlFVMHNZMEZCWXl4UFFVRlBMRTFCUVZBc1EwRkJZeXhIUVVGa0xFTkJRV1FzUTBGR2MwTTdRVUZITlVNc1ZVRkJUU3hSUVVGUkxFdEJRVXNzVFVGQlRDeERRVUZaTEVkQlFWb3NRMEZCVWpzN08wRkJTSE5ETEZWQlRYaERMRTlCUVU4c1MwRkJVQ3hKUVVGblFpeE5RVUZOTEZWQlFVNHNTVUZCYjBJc1EwRkJReXhOUVVGTkxGVkJRVTRzU1VGQmNVSXNUVUZCVFN4UFFVRk9MRU5CUVdNc1EwRkJaQ3hGUVVGcFFpeFRRVUZxUWl4TFFVRXJRaXhQUVVGUExGTkJRVkFzUlVGQmJVSTdRVUZET1Vjc1kwRkJUU3hWUVVGT0xFZEJRVzFDTEd0RFFVRnRRaXhMUVVGTExHRkJRVXdzUTBGQmJVSXNUVUZCVFN4UFFVRk9MRU5CUVdNc1EwRkJaQ3hEUVVGdVFpeERRVUZ1UWl4RlFVRjVSQ3hOUVVGNlJDeEZRVUZwUlN4TFFVRnFSU3hGUVVGM1JTeEhRVUY0UlN4RFFVRnVRaXhEUVVRNFJ6dFBRVUZvU0N4TlFVVlBMRWxCUVVrc1EwRkJReXhQUVVGUExGZEJRVkFzUlVGQmIwSTdRVUZET1VJc1kwRkJUU3hWUVVGT0xFZEJRVzFDTEZOQlFXNUNPenM3UVVGRU9FSXNXVUZKTVVJc1dVRkJXU3hSUVVGYUxFdEJRWGxDTEVOQlFYcENMRVZCUVRSQ08wRkJRemxDTEhOQ1FVRlpMRkZCUVZvc1IwRkJkVUlzVFVGQlRTeFJRVUZPTEVOQlJFODdVMEZCYUVNN08wRkJTVUVzV1VGQlNTeFpRVUZaTEVsQlFWb3NTMEZCY1VJc1UwRkJja0lzUlVGQlowTTdRVUZEYkVNc2MwSkJRVmtzU1VGQldpeEhRVUZ0UWl4WlFVRlpMRTlCUVZvc1IwRkJjMElzVFVGQlRTeFBRVUZPTEVOQlJGQTdVMEZCY0VNN1QwRlNTenM3UVVGaFVDeFpRVUZOTEU5QlFVNHNSMEZCWjBJc1EwRkJReXhGUVVGRUxFTkJRV2hDTEVOQmNrSTBRenRCUVhOQ05VTXNXVUZCVFN4VlFVRk9MRWRCUVcxQ0xFMUJRVTBzVDBGQlRpeERRVUZqTEUxQlFXUXNRMEYwUW5sQ08wdEJRVGxET3p0QlFYbENRU3hSUVVGSkxFdEJRVXNzWjBKQlFVd3NSVUZCZFVJN1FVRkRla0lzZDBKQlFVMHNTMEZCVGl4WlFVUjVRanRMUVVFelFqczdPenM3T3pzN08wRkJia2xGTEdsQ1FUWkpTaXcyUTBGQmFVSXNTVUZCU1R0QlFVTnVRaXhSUVVGTkxGTkJRVk1zUzBGQlN5eGhRVUZNTEVOQlFXMUNMRVZCUVc1Q0xFTkJRVlFzUTBGRVlUczdRVUZIYmtJc1VVRkJTU3hOUVVGS0xFVkJRVms3UVVGRFZpeFhRVUZMTEVsQlFVa3NTVUZCU1N4RFFVRktMRVZCUVU4c1NVRkJTU3hQUVVGUExGbEJRVkFzUlVGQmNVSXNSMEZCZWtNc1JVRkJPRU03UVVGRE5VTXNXVUZCVFN4TlFVRk5MRTlCUVU4c1UwRkJVQ3hEUVVGcFFpeERRVUZxUWl4RFFVRk9MRU5CUkhORE8wRkJSVFZETEZsQlFVMHNVVUZCVVN4TFFVRkxMRTFCUVV3c1EwRkJXU3hIUVVGYUxFTkJRVklzUTBGR2MwTTdRVUZITlVNc1dVRkJUU3hqUVVGakxFMUJRVTBzVDBGQlRpeERRVUZqTEU5QlFXUXNRMEZCYzBJc1JVRkJkRUlzUTBGQlpDeERRVWh6UXpzN1FVRkxOVU1zV1VGQlNTeG5Ra0ZCWjBJc1EwRkJReXhEUVVGRUxFVkJRVWs3UVVGRGRFSXNaMEpCUVUwc1QwRkJUaXhEUVVGakxFMUJRV1FzUTBGQmNVSXNWMEZCY2tJc1JVRkJhME1zUTBGQmJFTXNSVUZFYzBJN1FVRkZkRUlzWjBKQlFVMHNWVUZCVGl4SFFVWnpRanRUUVVGNFFqdFBRVXhHT3p0QlFWZEJMR0ZCUVU4c1MwRkJTeXhoUVVGTUxFTkJRVzFDTEVWQlFXNUNMRU5CUVZBc1EwRmFWVHRCUVdGV0xGZEJRVXNzWjBKQlFVd3NSMEZpVlR0TFFVRmFPenRCUVdkQ1FTeFJRVUZKTEVOQlFVTXNTMEZCU3l4blFrRkJUQ3hKUVVGNVFpeExRVUZMTEZGQlFVd3NSVUZCWlR0QlFVTXpReXgzUWtGQlRTeEpRVUZPTEZsQlJESkRPMHRCUVRkRE96czdVMEZvUzBVN096dEJRWE5MVGl4TFFVRkxMRk5CUVV3c1EwRkJaU3haUVVGbUxFZEJRVGhDTEdsQ1FVRlBMR3RDUVVGUUxFTkJRVEJDTzBGQlEzUkVMRmRCUVZNc1JVRkJWRHRCUVVOQkxHTkJRVmtzUTBGQldqdERRVVkwUWl4RFFVRTVRanM3YTBKQlMyVWlMQ0ptYVd4bElqb2lSbXh2ZHk1cWN5SXNJbk52ZFhKalpWSnZiM1FpT2lJdlZYTmxjbk12VFdGMGRDOVRhWFJsY3k5d2IzQnRiM1JwYjI0aUxDSnpiM1Z5WTJWelEyOXVkR1Z1ZENJNld5SnBiWEJ2Y25RZ1FXTjBhVzl1SUdaeWIyMGdKeTR1TDJGamRHbHZibk12UVdOMGFXOXVKenRjYm1sdGNHOXlkQ0JuWlc1bGNtRjBaVUpzWlc1a1EzVnlkbVVnWm5KdmJTQW5MaTltYkc5M0wyZGxibVZ5WVhSbExXSnNaVzVrTFdOMWNuWmxKenRjYmx4dUx5cGNiaUFnVFdWMGFHOWtjeUJoYm1RZ2NISnZjR1Z5ZEdsbGN5QjBieUJoWkdRZ2RHOGdZbTkxYm1RZ1FXTjBhVzl1YzF4dUtpOWNibU52Ym5OMElHSnZkVzVrVDI1VGRHRnlkQ0E5SUNoaFkzUnBiMjRwSUQwK0lHRmpkR2x2Ymk1bWJHOTNMbUZqZEdsMllYUmxRV04wYVc5dUtHRmpkR2x2Ymk1cFpDd2dZV04wYVc5dUtUdGNibU52Ym5OMElHSnZkVzVrVDI1VGRHOXdJRDBnS0dGamRHbHZiaWtnUFQ0Z1lXTjBhVzl1TG1ac2IzY3VaR1ZoWTNScGRtRjBaVUZqZEdsdmJpaGhZM1JwYjI0dWFXUXBPMXh1WTI5dWMzUWdZbTkxYm1SUWNtOXdjeUE5SUNobWJHOTNLU0E5UGlBb2UxeHVJQ0JtYkc5M0xGeHVJQ0JwYzFCeWFXOXlhWFI1T2lCMGNuVmxMRnh1SUNCdmJrRmpkR2wyWVhSbE9pQmliM1Z1WkU5dVUzUmhjblFzWEc0Z0lHOXVSR1ZoWTNScGRtRjBaVG9nWW05MWJtUlBibE4wYjNCY2JuMHBPMXh1WEc1amJHRnpjeUJHYkc5M0lHVjRkR1Z1WkhNZ1FXTjBhVzl1SUh0Y2JpQWdZMjl1YzNSeWRXTjBiM0lvY0hKdmNITXBJSHRjYmlBZ0lDQnpkWEJsY2lod2NtOXdjeWs3WEc0Z0lDQWdkR2hwY3k1aFkzUnBkbVZCWTNScGIyNXpJRDBnZTMwN1hHNGdJQ0FnZEdocGN5NXVkVzFCWTNScGRtVkJZM1JwYjI1eklEMGdNRHRjYmlBZ2ZWeHVYRzRnSUhObGRDaHdjbTl3Y3lrZ2UxeHVJQ0FnSUhOMWNHVnlMbk5sZENod2NtOXdjeWs3WEc1Y2JpQWdJQ0IwYUdsekxtOXVZMlVvS1R0Y2JseHVJQ0FnSUhKbGRIVnliaUIwYUdsek8xeHVJQ0I5WEc1Y2JpQWdMeXBjYmlBZ0lDQkNhVzVrSUVGamRHbHZiaUIwYnlCQlkzUnZjbHh1SUNBcUwxeHVJQ0JqYjI1dVpXTjBLR0ZqZEdsdmJpa2dlMXh1SUNBZ0lHTnZibk4wSUdsdWFHVnlhWFJsWkVGamRHbHZiaUE5SUdGamRHbHZiaTVwYm1obGNtbDBLQ2s3WEc0Z0lDQWdiR1YwSUc1bGQxWmhiSFZsY3lBOUlIdDlPMXh1SUNBZ0lHeGxkQ0JvWVhOT1pYZFdZV3gxWlhNZ1BTQm1ZV3h6WlR0Y2JseHVJQ0FnSUM4dklFTnlaV0YwWlNCMllXeDFaWE1nYjI0Z1lXTjBiM0lnZEdoaGRDQmtiMjRuZENCbGVHbHpkRnh1SUNBZ0lHWnZjaUFvYkdWMElHdGxlU0JwYmlCcGJtaGxjbWwwWldSQlkzUnBiMjR1ZG1Gc2RXVnpLU0I3WEc0Z0lDQWdJQ0JwWmlBb2FXNW9aWEpwZEdWa1FXTjBhVzl1TG5aaGJIVmxjeTVvWVhOUGQyNVFjbTl3WlhKMGVTaHJaWGtwSUNZbUlDRjBhR2x6TG5aaGJIVmxjeTVvWVhOUGQyNVFjbTl3WlhKMGVTaHJaWGtwS1NCN1hHNGdJQ0FnSUNBZ0lHNWxkMVpoYkhWbGMxdHJaWGxkSUQwZ2UzMDdYRzRnSUNBZ0lDQWdJR2hoYzA1bGQxWmhiSFZsY3lBOUlIUnlkV1U3WEc0Z0lDQWdJQ0I5WEc0Z0lDQWdmVnh1WEc0Z0lDQWdhV1lnS0doaGMwNWxkMVpoYkhWbGN5a2dlMXh1SUNBZ0lDQWdkR2hwY3k1elpYUW9leUIyWVd4MVpYTTZJRzVsZDFaaGJIVmxjeUI5S1R0Y2JpQWdJQ0I5WEc1Y2JpQWdJQ0JwYm1obGNtbDBaV1JCWTNScGIyNHVjR0Z5Wlc1MFNXUWdQU0JoWTNScGIyNHVhV1E3WEc1Y2JpQWdJQ0J5WlhSMWNtNGdhVzVvWlhKcGRHVmtRV04wYVc5dUxuTmxkQ2hpYjNWdVpGQnliM0J6S0hSb2FYTXNJR2x1YUdWeWFYUmxaRUZqZEdsdmJpa3BPMXh1SUNCOVhHNWNiaUFnTHlwY2JpQWdJQ0JUZEdGeWRDQkJZM1J2Y2x4dVhHNGdJQ0FnU1dZZ1FXTjBhVzl1SUdseklIQnliM1pwWkdWa0xDQmlhVzVrSUdsMElIUnZJSFJvYVhNZ1FXTjBiM0lnWVc1a0lITjBZWEowWEc1Y2JpQWdJQ0JBY0dGeVlXMGdLRzl3ZEdsdmJtRnNLU0JiUVdOMGFXOXVYVnh1SUNBcUwxeHVJQ0J6ZEdGeWRDZ3BJSHRjYmlBZ0lDQnpkWEJsY2k1emRHRnlkQ2dwTzF4dVhHNGdJQ0FnWm05eUlDaHNaWFFnYTJWNUlHbHVJSFJvYVhNdVlXTjBhWFpsUVdOMGFXOXVjeWtnZTF4dUlDQWdJQ0FnYVdZZ0tIUm9hWE11WVdOMGFYWmxRV04wYVc5dWN5NW9ZWE5QZDI1UWNtOXdaWEowZVNoclpYa3BLU0I3WEc0Z0lDQWdJQ0FnSUdOdmJuTjBJR0ZqZEdsdmJpQTlJSFJvYVhNdVlXTjBhWFpsUVdOMGFXOXVjMXRyWlhsZE8xeHVJQ0FnSUNBZ0lDQnBaaUFvSVdGamRHbHZiaTVwYzBGamRHbDJaU2tnZTF4dUlDQWdJQ0FnSUNBZ0lHRmpkR2x2Ymk1emRHRnlkQ2dwTzF4dUlDQWdJQ0FnSUNCOVhHNGdJQ0FnSUNCOVhHNGdJQ0FnZlZ4dVhHNGdJQ0FnY21WMGRYSnVJSFJvYVhNN1hHNGdJSDFjYmx4dUlDQnpkRzl3S0NrZ2UxeHVJQ0FnSUhOMWNHVnlMbk4wYjNBb0tUdGNibHh1SUNBZ0lHWnZjaUFvYkdWMElHdGxlU0JwYmlCMGFHbHpMbUZqZEdsMlpVRmpkR2x2Ym5NcElIdGNiaUFnSUNBZ0lHbG1JQ2gwYUdsekxtRmpkR2wyWlVGamRHbHZibk11YUdGelQzZHVVSEp2Y0dWeWRIa29hMlY1S1NrZ2UxeHVJQ0FnSUNBZ0lDQjBhR2x6TG1GamRHbDJaVUZqZEdsdmJuTmJhMlY1WFM1emRHOXdLQ2s3WEc0Z0lDQWdJQ0I5WEc0Z0lDQWdmVnh1WEc0Z0lDQWdjbVYwZFhKdUlIUm9hWE03WEc0Z0lIMWNibHh1SUNCM2FXeHNVbVZ1WkdWeUtHRmpkRzl5TENCbWNtRnRaVk4wWVcxd0xDQmxiR0Z3YzJWa0tTQjdYRzRnSUNBZ1ptOXlJQ2hzWlhRZ2FTQTlJREE3SUdrZ1BDQjBhR2x6TG01MWJWWmhiSFZsUzJWNWN6c2dhU3NyS1NCN1hHNGdJQ0FnSUNCamIyNXpkQ0JyWlhrZ1BTQjBhR2x6TG5aaGJIVmxTMlY1YzF0cFhUdGNiaUFnSUNBZ0lHTnZibk4wSUhaaGJIVmxJRDBnZEdocGN5NTJZV3gxWlhOYmEyVjVYVHRjYmlBZ0lDQWdJR052Ym5OMElHUnlhWFpsY2lBOUlIWmhiSFZsTG01MWJVUnlhWFpsY25NZ1B5QjBhR2x6TG1GamRHbDJaVUZqZEdsdmJuTmJkbUZzZFdVdVpISnBkbVZ5YzFzd1hWMGdPaUJtWVd4elpUdGNiaUFnSUNBZ0lHeGxkQ0J1WlhkRGRYSnlaVzUwSUQwZ2RtRnNkV1V1Ym5WdFJISnBkbVZ5Y3lBL0lHUnlhWFpsY2k1MllXeDFaWE5iYTJWNVhTNWpkWEp5Wlc1MElEb2dkbUZzZFdVdVkzVnljbVZ1ZER0Y2JseHVJQ0FnSUNBZ0x5b3FYRzRnSUNBZ0lDQWdLaUJVVDBSUE9pQnlaWEJzWVdObElIZHBkR2dnWW14bGJtUWdkSEpsWlNCeVpYTnZiSFpsY2x4dUlDQWdJQ0FnSUNvZ1FXUmthWFJwZG1VZ2JXOTBhVzl1WEc0Z0lDQWdJQ0FnS2lCQ1pYcHBaWElnZEhkbFpXNGdZbXhsYm1SY2JpQWdJQ0FnSUNBcUwxeHVJQ0FnSUNBZ2FXWWdLSFpoYkhWbExtSnNaVzVrUTNWeWRtVXBJSHRjYmlBZ0lDQWdJQ0FnYm1WM1EzVnljbVZ1ZENBOUlIWmhiSFZsTG1Kc1pXNWtRM1Z5ZG1Vb0tUdGNiaUFnSUNBZ0lIMWNibHh1SUNBZ0lDQWdkbUZzZFdVdVkzVnljbVZ1ZENBOUlHNWxkME4xY25KbGJuUTdYRzRnSUNBZ2ZWeHVYRzRnSUNBZ2NtVjBkWEp1SUhOMWNHVnlMbmRwYkd4U1pXNWtaWElvWVdOMGIzSXNJR1p5WVcxbFUzUmhiWEFzSUdWc1lYQnpaV1FwTzF4dUlDQjlYRzVjYmlBZ0x5cGNiaUFnSUNCQlpHUWdZV04wYVhabElHRmpkR2x2Ym5OY2JseHVJQ0FnSUVCd1lYSmhiU0JiYm5WdFltVnlYVnh1SUNBZ0lFQndZWEpoYlNCYlFXTjBhVzl1WFZ4dUlDQXFMMXh1SUNCaFkzUnBkbUYwWlVGamRHbHZiaWhwWkN3Z1lXTjBhVzl1S1NCN1hHNGdJQ0FnZEdocGN5NWhZM1JwZG1WQlkzUnBiMjV6VzJsa1hTQTlJR0ZqZEdsdmJqdGNiaUFnSUNCMGFHbHpMbTUxYlVGamRHbDJaVUZqZEdsdmJuTXJLenRjYmx4dUlDQWdJR1p2Y2lBb2JHVjBJR2tnUFNBd095QnBJRHdnWVdOMGFXOXVMbTUxYlZaaGJIVmxTMlY1Y3pzZ2FTc3JLU0I3WEc0Z0lDQWdJQ0JqYjI1emRDQnJaWGtnUFNCaFkzUnBiMjR1ZG1Gc2RXVkxaWGx6VzJsZE8xeHVJQ0FnSUNBZ1kyOXVjM1FnWVdOMGFXOXVWbUZzZFdVZ1BTQmhZM1JwYjI0dWRtRnNkV1Z6VzJ0bGVWMDdYRzRnSUNBZ0lDQmpiMjV6ZENCMllXeDFaU0E5SUhSb2FYTXVkbUZzZFdWelcydGxlVjA3WEc1Y2JpQWdJQ0FnSUM4dklFbG1JSGRsSjNKbElHSnNaVzVrYVc1bklIUm9hWE1nWVdOMGFXOXVMQ0JoYm1RZ2RHaGxjbVVuY3lCdmJpQmhiSEpsWVdSNUlHbHVJSEJ5YjJkeVpYTnpYRzRnSUNBZ0lDQnBaaUFvWVdOMGFXOXVMbUpzWlc1a0lDWW1JSFpoYkhWbExtNTFiVVJ5YVhabGNuTWdKaVlnSVhaaGJIVmxMbUpzWlc1a1EzVnlkbVVnSmlZZ0tIWmhiSFZsTG1SeWFYWmxjbk5iTUYwdWNISnZkRzkwZVhCbElEMDlQU0JoWTNScGIyNHVjSEp2ZEc5MGVYQmxLU2tnZTF4dUlDQWdJQ0FnSUNCMllXeDFaUzVpYkdWdVpFTjFjblpsSUQwZ1oyVnVaWEpoZEdWQ2JHVnVaRU4xY25abEtIUm9hWE11WVdOMGFYWmxRV04wYVc5dWMxdDJZV3gxWlM1a2NtbDJaWEp6V3pCZFhTd2dZV04wYVc5dUxDQjJZV3gxWlN3Z2EyVjVLVHRjYmlBZ0lDQWdJSDBnWld4elpTQnBaaUFvSVdGamRHbHZiaTVwYzFOamNuVmlZbWx1WnlrZ2UxeHVJQ0FnSUNBZ0lDQjJZV3gxWlM1aWJHVnVaRU4xY25abElEMGdkVzVrWldacGJtVmtPMXh1WEc0Z0lDQWdJQ0FnSUM4dklGQmhjM01nUVdOMGIzSWdkbUZzZFdVZ2NISnZjR1Z5ZEdsbGN5QjBieUJCWTNScGIyNWNiaUFnSUNBZ0lDQWdhV1lnS0dGamRHbHZibFpoYkhWbExuWmxiRzlqYVhSNUlEMDlQU0F3S1NCN1hHNGdJQ0FnSUNBZ0lDQWdZV04wYVc5dVZtRnNkV1V1ZG1Wc2IyTnBkSGtnUFNCMllXeDFaUzUyWld4dlkybDBlVHRjYmlBZ0lDQWdJQ0FnZlZ4dVhHNGdJQ0FnSUNBZ0lHbG1JQ2hoWTNScGIyNVdZV3gxWlM1bWNtOXRJRDA5UFNCMWJtUmxabWx1WldRcElIdGNiaUFnSUNBZ0lDQWdJQ0JoWTNScGIyNVdZV3gxWlM1bWNtOXRJRDBnWVdOMGFXOXVWbUZzZFdVdVkzVnljbVZ1ZENBOUlIWmhiSFZsTG1OMWNuSmxiblE3WEc0Z0lDQWdJQ0FnSUgxY2JpQWdJQ0FnSUgxY2JseHVJQ0FnSUNBZ2RtRnNkV1V1WkhKcGRtVnljeUE5SUZ0cFpGMDdYRzRnSUNBZ0lDQjJZV3gxWlM1dWRXMUVjbWwyWlhKeklEMGdkbUZzZFdVdVpISnBkbVZ5Y3k1c1pXNW5kR2c3WEc0Z0lDQWdmVnh1WEc0Z0lDQWdhV1lnS0hSb2FYTXViblZ0UVdOMGFYWmxRV04wYVc5dWN5a2dlMXh1SUNBZ0lDQWdjM1Z3WlhJdWMzUmhjblFvS1R0Y2JpQWdJQ0I5WEc0Z0lIMWNibHh1SUNBdktseHVJQ0FnSUZKbGJXOTJaU0JoWTNScGRtVWdZV04wYVc5dWMxeHVYRzRnSUNBZ1FIQmhjbUZ0SUZ0dWRXMWlaWEpkWEc0Z0lDb3ZYRzRnSUdSbFlXTjBhWFpoZEdWQlkzUnBiMjRvYVdRcElIdGNiaUFnSUNCamIyNXpkQ0JoWTNScGIyNGdQU0IwYUdsekxtRmpkR2wyWlVGamRHbHZibk5iYVdSZE8xeHVYRzRnSUNBZ2FXWWdLR0ZqZEdsdmJpa2dlMXh1SUNBZ0lDQWdabTl5SUNoc1pYUWdhU0E5SURBN0lHa2dQQ0JoWTNScGIyNHViblZ0Vm1Gc2RXVkxaWGx6T3lCcEt5c3BJSHRjYmlBZ0lDQWdJQ0FnWTI5dWMzUWdhMlY1SUQwZ1lXTjBhVzl1TG5aaGJIVmxTMlY1YzF0cFhUdGNiaUFnSUNBZ0lDQWdZMjl1YzNRZ2RtRnNkV1VnUFNCMGFHbHpMblpoYkhWbGMxdHJaWGxkTzF4dUlDQWdJQ0FnSUNCamIyNXpkQ0JrY21sMlpYSkpibVJsZUNBOUlIWmhiSFZsTG1SeWFYWmxjbk11YVc1a1pYaFBaaWhwWkNrN1hHNWNiaUFnSUNBZ0lDQWdhV1lnS0dSeWFYWmxja2x1WkdWNElDRTlQU0F0TVNrZ2UxeHVJQ0FnSUNBZ0lDQWdJSFpoYkhWbExtUnlhWFpsY25NdWMzQnNhV05sS0dSeWFYWmxja2x1WkdWNExDQXhLVHRjYmlBZ0lDQWdJQ0FnSUNCMllXeDFaUzV1ZFcxRWNtbDJaWEp6TFMwN1hHNGdJQ0FnSUNBZ0lIMWNiaUFnSUNBZ0lIMWNibHh1SUNBZ0lDQWdaR1ZzWlhSbElIUm9hWE11WVdOMGFYWmxRV04wYVc5dWMxdHBaRjA3WEc0Z0lDQWdJQ0IwYUdsekxtNTFiVUZqZEdsMlpVRmpkR2x2Ym5NdExUdGNiaUFnSUNCOVhHNWNiaUFnSUNCcFppQW9JWFJvYVhNdWJuVnRRV04wYVhabFFXTjBhVzl1Y3lBbUppQjBhR2x6TG1selFXTjBhWFpsS1NCN1hHNGdJQ0FnSUNCemRYQmxjaTV6ZEc5d0tDazdYRzRnSUNBZ2ZWeHVJQ0I5WEc1OVhHNWNia1pzYjNjdWNISnZkRzkwZVhCbExtUmxabUYxYkhSV1lXeDFaU0E5SUVGamRHbHZiaTVsZUhSbGJtUkVaV1poZFd4MFZtRnNkV1VvZTF4dUlDQmtjbWwyWlhKek9pQmJYU3hjYmlBZ2JuVnRSSEpwZG1WeWN6b2dNRnh1ZlNrN1hHNWNibVY0Y0c5eWRDQmtaV1poZFd4MElFWnNiM2M3WEc0aVhYMD1cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2FjdGlvbnMvRmxvdy5qc1xuICoqIG1vZHVsZSBpZCA9IDRcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF9BY3Rpb24yID0gcmVxdWlyZSgnLi9BY3Rpb24nKTtcblxudmFyIF9BY3Rpb24zID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfQWN0aW9uMik7XG5cbnZhciBfcHJlc2V0RWFzaW5nID0gcmVxdWlyZSgnLi9lYXNpbmcvcHJlc2V0LWVhc2luZycpO1xuXG52YXIgX3ByZXNldEVhc2luZzIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9wcmVzZXRFYXNpbmcpO1xuXG52YXIgX3V0aWxzID0gcmVxdWlyZSgnLi4vaW5jL3V0aWxzJyk7XG5cbnZhciBfY2FsYyA9IHJlcXVpcmUoJy4uL2luYy9jYWxjJyk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKCFzZWxmKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gY2FsbCAmJiAodHlwZW9mIGNhbGwgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikgPyBjYWxsIDogc2VsZjsgfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb24sIG5vdCBcIiArIHR5cGVvZiBzdXBlckNsYXNzKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCBlbnVtZXJhYmxlOiBmYWxzZSwgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LnNldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKSA6IHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7IH1cblxudmFyIENPVU5UID0gJ0NvdW50JztcbnZhciBORVhUX1NURVBTID0ge1xuICBsb29wOiAncmVzdGFydCcsXG4gIHlveW86ICdyZXZlcnNlJyxcbiAgZmxpcDogJ2ZsaXBWYWx1ZXMnXG59O1xuXG52YXIgVHdlZW4gPSBmdW5jdGlvbiAoX0FjdGlvbikge1xuICBfaW5oZXJpdHMoVHdlZW4sIF9BY3Rpb24pO1xuXG4gIGZ1bmN0aW9uIFR3ZWVuKCkge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBUd2Vlbik7XG5cbiAgICByZXR1cm4gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgX0FjdGlvbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpKTtcbiAgfVxuXG4gIFR3ZWVuLnByb3RvdHlwZS5zdGFydCA9IGZ1bmN0aW9uIHN0YXJ0KCkge1xuICAgIHRoaXMuZWxhcHNlZCA9IDA7XG4gICAgdGhpcy5mbGlwQ291bnQgPSB0aGlzLnlveW9Db3VudCA9IHRoaXMubG9vcENvdW50ID0gMDtcbiAgICB0aGlzLmlzU2NydWJiaW5nID0gZmFsc2U7XG5cbiAgICAvLyBTZXQgZGVmYXVsdCBgZnJvbWAgaWYgbm9uZSBzZXRcbiAgICBpZiAoIXRoaXMuZmxvdykge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLm51bVZhbHVlS2V5czsgaSsrKSB7XG4gICAgICAgIHZhciBrZXkgPSB0aGlzLnZhbHVlS2V5c1tpXTtcbiAgICAgICAgdmFyIHZhbHVlID0gdGhpcy52YWx1ZXNba2V5XTtcbiAgICAgICAgaWYgKHZhbHVlLmZyb20gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHZhbHVlLmZyb20gPSAwO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIF9BY3Rpb24ucHJvdG90eXBlLnN0YXJ0LmNhbGwodGhpcyk7XG4gIH07XG5cbiAgVHdlZW4ucHJvdG90eXBlLm9uVXBkYXRlID0gZnVuY3Rpb24gb25VcGRhdGUodHdlZW4sIGZyYW1lU3RhbXAsIGVsYXBzZWQpIHtcbiAgICB2YXIgcHJvZ3Jlc3NUYXJnZXQgPSB0aGlzLnBsYXlEaXJlY3Rpb24gPT09IDEgPyAxIDogMDtcblxuICAgIHRoaXMuZW5kZWQgPSB0cnVlO1xuXG4gICAgaWYgKCF0aGlzLmlzU2NydWJiaW5nKSB7XG4gICAgICB0aGlzLmVsYXBzZWQgKz0gZWxhcHNlZCAqIHRoaXMuZGlsYXRlICogdGhpcy5wbGF5RGlyZWN0aW9uO1xuICAgIH1cblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5udW1WYWx1ZUtleXM7IGkrKykge1xuICAgICAgdmFyIGtleSA9IHRoaXMudmFsdWVLZXlzW2ldO1xuICAgICAgdmFyIHZhbHVlID0gdGhpcy52YWx1ZXNba2V5XTtcblxuICAgICAgdmFyIHByb2dyZXNzID0gKDAsIF9jYWxjLnJlc3RyaWN0KSgoMCwgX2NhbGMuZ2V0UHJvZ3Jlc3NGcm9tVmFsdWUpKHRoaXMuZWxhcHNlZCAtIHZhbHVlLmRlbGF5LCAwLCB2YWx1ZS5kdXJhdGlvbiksIDAsIDEpO1xuXG4gICAgICAvLyBNYXJrIFR3ZWVuIGFzIE5PVCBlbmRlZCBpZiBzdGlsbCBpbiBwcm9ncmVzc1xuICAgICAgaWYgKHByb2dyZXNzICE9PSBwcm9ncmVzc1RhcmdldCkge1xuICAgICAgICB0aGlzLmVuZGVkID0gZmFsc2U7XG4gICAgICB9XG5cbiAgICAgIC8vIFN0ZXAgcHJvZ3Jlc3MgaWYgd2UncmUgc3RlcHBpbmdcbiAgICAgIGlmICh2YWx1ZS5zdGVwcykge1xuICAgICAgICBwcm9ncmVzcyA9ICgwLCBfY2FsYy5zdGVwUHJvZ3Jlc3MpKHByb2dyZXNzLCB2YWx1ZS5zdGVwcyk7XG4gICAgICB9XG5cbiAgICAgIC8vIEVhc2UgcHJvZ3Jlc3NcbiAgICAgIHZhbHVlLmN1cnJlbnQgPSAoMCwgX2NhbGMuZWFzZSkocHJvZ3Jlc3MsIHZhbHVlLmZyb20sIHZhbHVlLnRvLCB2YWx1ZS5lYXNlKTtcbiAgICB9XG4gIH07XG5cbiAgVHdlZW4ucHJvdG90eXBlLm9uRnJhbWVFbmQgPSBmdW5jdGlvbiBvbkZyYW1lRW5kKCkge1xuICAgIGlmICh0aGlzLmVuZGVkKSB7XG4gICAgICB2YXIgc3RlcFRha2VuID0gZmFsc2U7XG5cbiAgICAgIGZvciAodmFyIGtleSBpbiBORVhUX1NURVBTKSB7XG4gICAgICAgIGlmIChORVhUX1NURVBTLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICBpZiAoKDAsIF91dGlscy5pc051bSkodGhpc1trZXldKSAmJiB0aGlzW2tleV0gPiB0aGlzW2tleSArIENPVU5UXSkge1xuICAgICAgICAgICAgdGhpc1trZXkgKyBDT1VOVF0rKztcbiAgICAgICAgICAgIHN0ZXBUYWtlbiA9IHRydWU7XG4gICAgICAgICAgICB0aGlzW05FWFRfU1RFUFNba2V5XV0oKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKCFzdGVwVGFrZW4pIHtcbiAgICAgICAgdGhpcy5jb21wbGV0ZSgpO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICBUd2Vlbi5wcm90b3R5cGUuZmxpcFZhbHVlcyA9IGZ1bmN0aW9uIGZsaXBWYWx1ZXMoKSB7XG4gICAgdmFyIHZhbHVlcyA9IHRoaXMudmFsdWVzO1xuXG4gICAgdGhpcy5lbGFwc2VkID0gdGhpcy5kdXJhdGlvbiAtIHRoaXMuZWxhcHNlZDtcblxuICAgIGZvciAodmFyIGtleSBpbiB2YWx1ZXMpIHtcbiAgICAgIGlmICh2YWx1ZXMuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICB2YXIgdmFsdWUgPSB2YWx1ZXNba2V5XTtcbiAgICAgICAgdmFyIF9yZWYgPSBbdmFsdWUuZnJvbSwgdmFsdWUudG9dO1xuICAgICAgICB2YWx1ZS50byA9IF9yZWZbMF07XG4gICAgICAgIHZhbHVlLmZyb20gPSBfcmVmWzFdO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIFR3ZWVuLnByb3RvdHlwZS5yZXZlcnNlID0gZnVuY3Rpb24gcmV2ZXJzZSgpIHtcbiAgICB0aGlzLnBsYXlEaXJlY3Rpb24gKj0gLTE7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgVHdlZW4ucHJvdG90eXBlLnJlc3RhcnQgPSBmdW5jdGlvbiByZXN0YXJ0KCkge1xuICAgIHRoaXMuZWxhcHNlZCA9IHRoaXMucGxheURpcmVjdGlvbiA9PT0gMSA/IDAgOiB0aGlzLmR1cmF0aW9uO1xuICAgIHRoaXMuc3RhcnRlZCA9ICgwLCBfdXRpbHMuY3VycmVudFRpbWUpKCk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgVHdlZW4ucHJvdG90eXBlLnNlZWsgPSBmdW5jdGlvbiBzZWVrKHByb2dyZXNzKSB7XG4gICAgdGhpcy5zZWVrVGltZSh0aGlzLmR1cmF0aW9uICogcHJvZ3Jlc3MpO1xuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIFR3ZWVuLnByb3RvdHlwZS5zZWVrVGltZSA9IGZ1bmN0aW9uIHNlZWtUaW1lKGVsYXBzZWQpIHtcbiAgICBpZiAoIXRoaXMuaXNBY3RpdmUgfHwgdGhpcy5pc1NjcnViYmluZykge1xuICAgICAgdGhpcy5vbmNlKCk7XG4gICAgICB0aGlzLmlzU2NydWJiaW5nID0gdHJ1ZTtcbiAgICB9XG5cbiAgICB0aGlzLmVsYXBzZWQgPSBlbGFwc2VkO1xuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgcmV0dXJuIFR3ZWVuO1xufShfQWN0aW9uMy5kZWZhdWx0KTtcblxuVHdlZW4ucHJvdG90eXBlLmRlZmF1bHRWYWx1ZVByb3AgPSAndG8nO1xuVHdlZW4ucHJvdG90eXBlLmRlZmF1bHRWYWx1ZSA9IF9BY3Rpb24zLmRlZmF1bHQuZXh0ZW5kRGVmYXVsdFZhbHVlKHtcbiAgZGVsYXk6IDAsXG4gIGR1cmF0aW9uOiAzMDAsXG4gIGVhc2U6IF9wcmVzZXRFYXNpbmcyLmRlZmF1bHQuZWFzZU91dCxcbiAgZWxhcHNlZDogMCxcbiAgc3RlcHM6IDAsXG4gIHRvOiAwLFxuICByb3VuZDogZmFsc2Vcbn0pO1xuVHdlZW4ucHJvdG90eXBlLmRlZmF1bHRQcm9wcyA9IF9BY3Rpb24zLmRlZmF1bHQuZXh0ZW5kRGVmYXVsdFByb3BzKHtcbiAgYmxlbmQ6IGZhbHNlLFxuICBkaWxhdGU6IDEsXG4gIGxvb3A6IDAsXG4gIHlveW86IDAsXG4gIGZsaXA6IDAsXG4gIGxvb3BDb3VudDogMCxcbiAgeW95b0NvdW50OiAwLFxuICBmbGlwQ291bnQ6IDAsXG4gIHBsYXlEaXJlY3Rpb246IDEsXG4gIGlzU2NydWJiaW5nOiBmYWxzZSxcbiAgZW5kZWQ6IGZhbHNlLFxuICBlbGFwc2VkOiAwXG59KTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gVHdlZW47XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5OeVl5OWhZM1JwYjI1ekwxUjNaV1Z1TG1weklsMHNJbTVoYldWeklqcGJYU3dpYldGd2NHbHVaM01pT2lJN096czdRVUZCUVRzN096dEJRVU5CT3pzN08wRkJRMEU3TzBGQlEwRTdPenM3T3pzN096czdRVUZGUVN4SlFVRk5MRkZCUVZFc1QwRkJVanRCUVVOT0xFbEJRVTBzWVVGQllUdEJRVU5xUWl4UlFVRk5MRk5CUVU0N1FVRkRRU3hSUVVGTkxGTkJRVTQ3UVVGRFFTeFJRVUZOTEZsQlFVNDdRMEZJU1RzN1NVRk5RVHM3T3pzN096czdPMnRDUVVOS0xIbENRVUZSTzBGQlEwNHNVMEZCU3l4UFFVRk1MRWRCUVdVc1EwRkJaaXhEUVVSTk8wRkJSVTRzVTBGQlN5eFRRVUZNTEVkQlFXbENMRXRCUVVzc1UwRkJUQ3hIUVVGcFFpeExRVUZMTEZOQlFVd3NSMEZCYVVJc1EwRkJha0lzUTBGR05VSTdRVUZIVGl4VFFVRkxMRmRCUVV3c1IwRkJiVUlzUzBGQmJrSTdPenRCUVVoTkxGRkJUVVlzUTBGQlF5eExRVUZMTEVsQlFVd3NSVUZCVnp0QlFVTmtMRmRCUVVzc1NVRkJTU3hKUVVGSkxFTkJRVW9zUlVGQlR5eEpRVUZKTEV0QlFVc3NXVUZCVEN4RlFVRnRRaXhIUVVGMlF5eEZRVUUwUXp0QlFVTXhReXhaUVVGTkxFMUJRVTBzUzBGQlN5eFRRVUZNTEVOQlFXVXNRMEZCWml4RFFVRk9MRU5CUkc5RE8wRkJSVEZETEZsQlFVMHNVVUZCVVN4TFFVRkxMRTFCUVV3c1EwRkJXU3hIUVVGYUxFTkJRVklzUTBGR2IwTTdRVUZITVVNc1dVRkJTU3hOUVVGTkxFbEJRVTRzUzBGQlpTeFRRVUZtTEVWQlFUQkNPMEZCUXpWQ0xHZENRVUZOTEVsQlFVNHNSMEZCWVN4RFFVRmlMRU5CUkRSQ08xTkJRVGxDTzA5QlNFWTdTMEZFUmpzN1FVRlZRU3hYUVVGUExHdENRVUZOTEV0QlFVNHNWMEZCVUN4RFFXaENUVHM3TzBGQlJFb3NhMEpCYjBKS0xEWkNRVUZUTEU5QlFVOHNXVUZCV1N4VFFVRlRPMEZCUTI1RExGRkJRVTBzYVVKQlFXbENMRWxCUVVNc1EwRkJTeXhoUVVGTUxFdEJRWFZDTEVOQlFYWkNMRWRCUVRSQ0xFTkJRVGRDTEVkQlFXbERMRU5CUVdwRExFTkJSRms3TzBGQlIyNURMRk5CUVVzc1MwRkJUQ3hIUVVGaExFbEJRV0lzUTBGSWJVTTdPMEZCUzI1RExGRkJRVWtzUTBGQlF5eExRVUZMTEZkQlFVd3NSVUZCYTBJN1FVRkRja0lzVjBGQlN5eFBRVUZNTEVsQlFXZENMRTlCUVVNc1IwRkJWU3hMUVVGTExFMUJRVXdzUjBGQlpTeExRVUZMTEdGQlFVd3NRMEZFY2tJN1MwRkJka0k3TzBGQlNVRXNVMEZCU3l4SlFVRkpMRWxCUVVrc1EwRkJTaXhGUVVGUExFbEJRVWtzUzBGQlN5eFpRVUZNTEVWQlFXMUNMRWRCUVhaRExFVkJRVFJETzBGQlF6RkRMRlZCUVUwc1RVRkJUU3hMUVVGTExGTkJRVXdzUTBGQlpTeERRVUZtTEVOQlFVNHNRMEZFYjBNN1FVRkZNVU1zVlVGQlRTeFJRVUZSTEV0QlFVc3NUVUZCVEN4RFFVRlpMRWRCUVZvc1EwRkJVaXhEUVVadlF6czdRVUZKTVVNc1ZVRkJTU3hYUVVGWExHOUNRVUZUTEdkRFFVRnhRaXhMUVVGTExFOUJRVXdzUjBGQlpTeE5RVUZOTEV0QlFVNHNSVUZCWVN4RFFVRnFSQ3hGUVVGdlJDeE5RVUZOTEZGQlFVNHNRMEZCTjBRc1JVRkJPRVVzUTBGQk9VVXNSVUZCYVVZc1EwRkJha1lzUTBGQldEczdPMEZCU25ORExGVkJUM1JETEdGQlFXRXNZMEZCWWl4RlFVRTJRanRCUVVNdlFpeGhRVUZMTEV0QlFVd3NSMEZCWVN4TFFVRmlMRU5CUkN0Q08wOUJRV3BET3pzN1FVRlFNRU1zVlVGWmRFTXNUVUZCVFN4TFFVRk9MRVZCUVdFN1FVRkRaaXh0UWtGQlZ5eDNRa0ZCWVN4UlFVRmlMRVZCUVhWQ0xFMUJRVTBzUzBGQlRpeERRVUZzUXl4RFFVUmxPMDlCUVdwQ096czdRVUZhTUVNc1YwRnBRakZETEVOQlFVMHNUMEZCVGl4SFFVRm5RaXhuUWtGQlN5eFJRVUZNTEVWQlFXVXNUVUZCVFN4SlFVRk9MRVZCUVZrc1RVRkJUU3hGUVVGT0xFVkJRVlVzVFVGQlRTeEpRVUZPTEVOQlFYSkVMRU5CYWtJd1F6dExRVUUxUXpzN08wRkJOMEpGTEd0Q1FXdEVTaXh0UTBGQllUdEJRVU5ZTEZGQlFVa3NTMEZCU3l4TFFVRk1MRVZCUVZrN1FVRkRaQ3hWUVVGSkxGbEJRVmtzUzBGQldpeERRVVJWT3p0QlFVZGtMRmRCUVVzc1NVRkJTU3hIUVVGS0xFbEJRVmNzVlVGQmFFSXNSVUZCTkVJN1FVRkRNVUlzV1VGQlNTeFhRVUZYTEdOQlFWZ3NRMEZCTUVJc1IwRkJNVUlzUTBGQlNpeEZRVUZ2UXp0QlFVTnNReXhqUVVGSkxHdENRVUZOTEV0QlFVc3NSMEZCVEN4RFFVRk9MRXRCUVc5Q0xFdEJRVXNzUjBGQlRDeEpRVUZaTEV0QlFVc3NUVUZCVFN4TFFVRk9MRU5CUVdwQ0xFVkJRU3RDTzBGQlEzSkVMR2xDUVVGTExFMUJRVTBzUzBGQlRpeERRVUZNTEVkQlJIRkVPMEZCUlhKRUxIZENRVUZaTEVsQlFWb3NRMEZHY1VRN1FVRkhja1FzYVVKQlFVc3NWMEZCVnl4SFFVRllMRU5CUVV3c1NVRkljVVE3VjBGQmRrUTdVMEZFUmp0UFFVUkdPenRCUVZWQkxGVkJRVWtzUTBGQlF5eFRRVUZFTEVWQlFWazdRVUZEWkN4aFFVRkxMRkZCUVV3c1IwRkVZenRQUVVGb1FqdExRV0pHT3pzN1FVRnVSRVVzYTBKQmMwVktMRzFEUVVGaE8wRkJRMWdzVVVGQlRTeFRRVUZUTEV0QlFVc3NUVUZCVEN4RFFVUktPenRCUVVkWUxGTkJRVXNzVDBGQlRDeEhRVUZsTEV0QlFVc3NVVUZCVEN4SFFVRm5RaXhMUVVGTExFOUJRVXdzUTBGSWNFSTdPMEZCUzFnc1UwRkJTeXhKUVVGSkxFZEJRVW9zU1VGQlZ5eE5RVUZvUWl4RlFVRjNRanRCUVVOMFFpeFZRVUZKTEU5QlFVOHNZMEZCVUN4RFFVRnpRaXhIUVVGMFFpeERRVUZLTEVWQlFXZERPMEZCUXpsQ0xGbEJRVTBzVVVGQlVTeFBRVUZQTEVkQlFWQXNRMEZCVWl4RFFVUjNRanR0UWtGRlRDeERRVUZETEUxQlFVMHNTVUZCVGl4RlFVRlpMRTFCUVUwc1JVRkJUaXhGUVVaU08wRkJSVGRDTEdOQlFVMHNSVUZCVGl4WFFVWTJRanRCUVVWdVFpeGpRVUZOTEVsQlFVNHNWMEZHYlVJN1QwRkJhRU03UzBGRVJqczdRVUZQUVN4WFFVRlBMRWxCUVZBc1EwRmFWenM3TzBGQmRFVlVMR3RDUVhGR1NpdzJRa0ZCVlR0QlFVTlNMRk5CUVVzc1lVRkJUQ3hKUVVGelFpeERRVUZETEVOQlFVUXNRMEZFWkR0QlFVVlNMRmRCUVU4c1NVRkJVQ3hEUVVaUk96czdRVUZ5Ums0c2EwSkJNRVpLTERaQ1FVRlZPMEZCUTFJc1UwRkJTeXhQUVVGTUxFZEJRV1VzU1VGQlF5eERRVUZMTEdGQlFVd3NTMEZCZFVJc1EwRkJka0lzUjBGQk5FSXNRMEZCTjBJc1IwRkJhVU1zUzBGQlN5eFJRVUZNTEVOQlJIaERPMEZCUlZJc1UwRkJTeXhQUVVGTUxFZEJRV1VzZVVKQlFXWXNRMEZHVVR0QlFVZFNMRmRCUVU4c1NVRkJVQ3hEUVVoUk96czdRVUV4Ums0c2EwSkJaMGRLTEhGQ1FVRkxMRlZCUVZVN1FVRkRZaXhUUVVGTExGRkJRVXdzUTBGQll5eExRVUZMTEZGQlFVd3NSMEZCWjBJc1VVRkJhRUlzUTBGQlpDeERRVVJoTzBGQlJXSXNWMEZCVHl4SlFVRlFMRU5CUm1FN096dEJRV2hIV0N4clFrRnhSMG9zTmtKQlFWTXNVMEZCVXp0QlFVTm9RaXhSUVVGSkxFTkJRVU1zUzBGQlN5eFJRVUZNTEVsQlFXbENMRXRCUVVzc1YwRkJUQ3hGUVVGclFqdEJRVU4wUXl4WFFVRkxMRWxCUVV3c1IwRkVjME03UVVGRmRFTXNWMEZCU3l4WFFVRk1MRWRCUVcxQ0xFbEJRVzVDTEVOQlJuTkRPMHRCUVhoRE96dEJRVXRCTEZOQlFVc3NUMEZCVEN4SFFVRmxMRTlCUVdZc1EwRk9aMEk3TzBGQlVXaENMRmRCUVU4c1NVRkJVQ3hEUVZKblFqczdPMU5CY2tka096czdRVUZwU0U0c1RVRkJUU3hUUVVGT0xFTkJRV2RDTEdkQ1FVRm9RaXhIUVVGdFF5eEpRVUZ1UXp0QlFVTkJMRTFCUVUwc1UwRkJUaXhEUVVGblFpeFpRVUZvUWl4SFFVRXJRaXhwUWtGQlR5eHJRa0ZCVUN4RFFVRXdRanRCUVVOMlJDeFRRVUZQTEVOQlFWQTdRVUZEUVN4WlFVRlZMRWRCUVZZN1FVRkRRU3hSUVVGTkxIVkNRVUZQTEU5QlFWQTdRVUZEVGl4WFFVRlRMRU5CUVZRN1FVRkRRU3hUUVVGUExFTkJRVkE3UVVGRFFTeE5RVUZKTEVOQlFVbzdRVUZEUVN4VFFVRlBMRXRCUVZBN1EwRlFOa0lzUTBGQkwwSTdRVUZUUVN4TlFVRk5MRk5CUVU0c1EwRkJaMElzV1VGQmFFSXNSMEZCSzBJc2FVSkJRVThzYTBKQlFWQXNRMEZCTUVJN1FVRkRka1FzVTBGQlR5eExRVUZRTzBGQlEwRXNWVUZCVVN4RFFVRlNPMEZCUTBFc1VVRkJUU3hEUVVGT08wRkJRMEVzVVVGQlRTeERRVUZPTzBGQlEwRXNVVUZCVFN4RFFVRk9PMEZCUTBFc1lVRkJWeXhEUVVGWU8wRkJRMEVzWVVGQlZ5eERRVUZZTzBGQlEwRXNZVUZCVnl4RFFVRllPMEZCUTBFc2FVSkJRV1VzUTBGQlpqdEJRVU5CTEdWQlFXRXNTMEZCWWp0QlFVTkJMRk5CUVU4c1MwRkJVRHRCUVVOQkxGZEJRVk1zUTBGQlZEdERRVm8yUWl4RFFVRXZRanM3YTBKQlpXVWlMQ0ptYVd4bElqb2lWSGRsWlc0dWFuTWlMQ0p6YjNWeVkyVlNiMjkwSWpvaUwxVnpaWEp6TDAxaGRIUXZVMmwwWlhNdmNHOXdiVzkwYVc5dUlpd2ljMjkxY21ObGMwTnZiblJsYm5RaU9sc2lhVzF3YjNKMElFRmpkR2x2YmlCbWNtOXRJQ2N1TDBGamRHbHZiaWM3WEc1cGJYQnZjblFnWldGemFXNW5JR1p5YjIwZ0p5NHZaV0Z6YVc1bkwzQnlaWE5sZEMxbFlYTnBibWNuTzF4dWFXMXdiM0owSUhzZ1kzVnljbVZ1ZEZScGJXVXNJR2x6VG5WdElIMGdabkp2YlNBbkxpNHZhVzVqTDNWMGFXeHpKenRjYm1sdGNHOXlkQ0I3SUdWaGMyVXNJSEpsYzNSeWFXTjBMQ0JuWlhSUWNtOW5jbVZ6YzBaeWIyMVdZV3gxWlN3Z2MzUmxjRkJ5YjJkeVpYTnpJSDBnWm5KdmJTQW5MaTR2YVc1akwyTmhiR01uTzF4dVhHNWpiMjV6ZENCRFQxVk9WQ0E5SUNkRGIzVnVkQ2M3WEc1amIyNXpkQ0JPUlZoVVgxTlVSVkJUSUQwZ2UxeHVJQ0JzYjI5d09pQW5jbVZ6ZEdGeWRDY3NYRzRnSUhsdmVXODZJQ2R5WlhabGNuTmxKeXhjYmlBZ1pteHBjRG9nSjJac2FYQldZV3gxWlhNblhHNTlPMXh1WEc1amJHRnpjeUJVZDJWbGJpQmxlSFJsYm1SeklFRmpkR2x2YmlCN1hHNGdJSE4wWVhKMEtDa2dlMXh1SUNBZ0lIUm9hWE11Wld4aGNITmxaQ0E5SURBN1hHNGdJQ0FnZEdocGN5NW1iR2x3UTI5MWJuUWdQU0IwYUdsekxubHZlVzlEYjNWdWRDQTlJSFJvYVhNdWJHOXZjRU52ZFc1MElEMGdNRHRjYmlBZ0lDQjBhR2x6TG1selUyTnlkV0ppYVc1bklEMGdabUZzYzJVN1hHNWNiaUFnSUNBdkx5QlRaWFFnWkdWbVlYVnNkQ0JnWm5KdmJXQWdhV1lnYm05dVpTQnpaWFJjYmlBZ0lDQnBaaUFvSVhSb2FYTXVabXh2ZHlrZ2UxeHVJQ0FnSUNBZ1ptOXlJQ2hzWlhRZ2FTQTlJREE3SUdrZ1BDQjBhR2x6TG01MWJWWmhiSFZsUzJWNWN6c2dhU3NyS1NCN1hHNGdJQ0FnSUNBZ0lHTnZibk4wSUd0bGVTQTlJSFJvYVhNdWRtRnNkV1ZMWlhselcybGRPMXh1SUNBZ0lDQWdJQ0JqYjI1emRDQjJZV3gxWlNBOUlIUm9hWE11ZG1Gc2RXVnpXMnRsZVYwN1hHNGdJQ0FnSUNBZ0lHbG1JQ2gyWVd4MVpTNW1jbTl0SUQwOVBTQjFibVJsWm1sdVpXUXBJSHRjYmlBZ0lDQWdJQ0FnSUNCMllXeDFaUzVtY205dElEMGdNRHRjYmlBZ0lDQWdJQ0FnZlZ4dUlDQWdJQ0FnZlZ4dUlDQWdJSDFjYmx4dUlDQWdJSEpsZEhWeWJpQnpkWEJsY2k1emRHRnlkQ2dwTzF4dUlDQjlYRzVjYmlBZ2IyNVZjR1JoZEdVb2RIZGxaVzRzSUdaeVlXMWxVM1JoYlhBc0lHVnNZWEJ6WldRcElIdGNiaUFnSUNCamIyNXpkQ0J3Y205bmNtVnpjMVJoY21kbGRDQTlJQ2gwYUdsekxuQnNZWGxFYVhKbFkzUnBiMjRnUFQwOUlERXBJRDhnTVNBNklEQTdYRzVjYmlBZ0lDQjBhR2x6TG1WdVpHVmtJRDBnZEhKMVpUdGNibHh1SUNBZ0lHbG1JQ2doZEdocGN5NXBjMU5qY25WaVltbHVaeWtnZTF4dUlDQWdJQ0FnZEdocGN5NWxiR0Z3YzJWa0lDczlJQ2hsYkdGd2MyVmtJQ29nZEdocGN5NWthV3hoZEdVcElDb2dkR2hwY3k1d2JHRjVSR2x5WldOMGFXOXVPMXh1SUNBZ0lIMWNibHh1SUNBZ0lHWnZjaUFvYkdWMElHa2dQU0F3T3lCcElEd2dkR2hwY3k1dWRXMVdZV3gxWlV0bGVYTTdJR2tyS3lrZ2UxeHVJQ0FnSUNBZ1kyOXVjM1FnYTJWNUlEMGdkR2hwY3k1MllXeDFaVXRsZVhOYmFWMDdYRzRnSUNBZ0lDQmpiMjV6ZENCMllXeDFaU0E5SUhSb2FYTXVkbUZzZFdWelcydGxlVjA3WEc1Y2JpQWdJQ0FnSUd4bGRDQndjbTluY21WemN5QTlJSEpsYzNSeWFXTjBLR2RsZEZCeWIyZHlaWE56Um5KdmJWWmhiSFZsS0hSb2FYTXVaV3hoY0hObFpDQXRJSFpoYkhWbExtUmxiR0Y1TENBd0xDQjJZV3gxWlM1a2RYSmhkR2x2Ymlrc0lEQXNJREVwTzF4dVhHNGdJQ0FnSUNBdkx5Qk5ZWEpySUZSM1pXVnVJR0Z6SUU1UFZDQmxibVJsWkNCcFppQnpkR2xzYkNCcGJpQndjbTluY21WemMxeHVJQ0FnSUNBZ2FXWWdLSEJ5YjJkeVpYTnpJQ0U5UFNCd2NtOW5jbVZ6YzFSaGNtZGxkQ2tnZTF4dUlDQWdJQ0FnSUNCMGFHbHpMbVZ1WkdWa0lEMGdabUZzYzJVN1hHNGdJQ0FnSUNCOVhHNWNiaUFnSUNBZ0lDOHZJRk4wWlhBZ2NISnZaM0psYzNNZ2FXWWdkMlVuY21VZ2MzUmxjSEJwYm1kY2JpQWdJQ0FnSUdsbUlDaDJZV3gxWlM1emRHVndjeWtnZTF4dUlDQWdJQ0FnSUNCd2NtOW5jbVZ6Y3lBOUlITjBaWEJRY205bmNtVnpjeWh3Y205bmNtVnpjeXdnZG1Gc2RXVXVjM1JsY0hNcE8xeHVJQ0FnSUNBZ2ZWeHVYRzRnSUNBZ0lDQXZMeUJGWVhObElIQnliMmR5WlhOelhHNGdJQ0FnSUNCMllXeDFaUzVqZFhKeVpXNTBJRDBnWldGelpTaHdjbTluY21WemN5d2dkbUZzZFdVdVpuSnZiU3dnZG1Gc2RXVXVkRzhzSUhaaGJIVmxMbVZoYzJVcE8xeHVJQ0FnSUgxY2JpQWdmVnh1WEc0Z0lHOXVSbkpoYldWRmJtUW9LU0I3WEc0Z0lDQWdhV1lnS0hSb2FYTXVaVzVrWldRcElIdGNiaUFnSUNBZ0lHeGxkQ0J6ZEdWd1ZHRnJaVzRnUFNCbVlXeHpaVHRjYmx4dUlDQWdJQ0FnWm05eUlDaHNaWFFnYTJWNUlHbHVJRTVGV0ZSZlUxUkZVRk1wSUh0Y2JpQWdJQ0FnSUNBZ2FXWWdLRTVGV0ZSZlUxUkZVRk11YUdGelQzZHVVSEp2Y0dWeWRIa29hMlY1S1NrZ2UxeHVJQ0FnSUNBZ0lDQWdJR2xtSUNocGMwNTFiU2gwYUdselcydGxlVjBwSUNZbUlIUm9hWE5iYTJWNVhTQStJSFJvYVhOYmEyVjVJQ3NnUTA5VlRsUmRLU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQjBhR2x6VzJ0bGVTQXJJRU5QVlU1VVhTc3JPMXh1SUNBZ0lDQWdJQ0FnSUNBZ2MzUmxjRlJoYTJWdUlEMGdkSEoxWlR0Y2JpQWdJQ0FnSUNBZ0lDQWdJSFJvYVhOYlRrVllWRjlUVkVWUVUxdHJaWGxkWFNncE8xeHVJQ0FnSUNBZ0lDQWdJSDFjYmlBZ0lDQWdJQ0FnZlZ4dUlDQWdJQ0FnZlZ4dVhHNGdJQ0FnSUNCcFppQW9JWE4wWlhCVVlXdGxiaWtnZTF4dUlDQWdJQ0FnSUNCMGFHbHpMbU52YlhCc1pYUmxLQ2s3WEc0Z0lDQWdJQ0I5WEc0Z0lDQWdmVnh1SUNCOVhHNWNiaUFnWm14cGNGWmhiSFZsY3lncElIdGNiaUFnSUNCamIyNXpkQ0IyWVd4MVpYTWdQU0IwYUdsekxuWmhiSFZsY3p0Y2JseHVJQ0FnSUhSb2FYTXVaV3hoY0hObFpDQTlJSFJvYVhNdVpIVnlZWFJwYjI0Z0xTQjBhR2x6TG1Wc1lYQnpaV1E3WEc1Y2JpQWdJQ0JtYjNJZ0tHeGxkQ0JyWlhrZ2FXNGdkbUZzZFdWektTQjdYRzRnSUNBZ0lDQnBaaUFvZG1Gc2RXVnpMbWhoYzA5M2JsQnliM0JsY25SNUtHdGxlU2twSUh0Y2JpQWdJQ0FnSUNBZ1kyOXVjM1FnZG1Gc2RXVWdQU0IyWVd4MVpYTmJhMlY1WFR0Y2JpQWdJQ0FnSUNBZ1czWmhiSFZsTG5SdkxDQjJZV3gxWlM1bWNtOXRYU0E5SUZ0MllXeDFaUzVtY205dExDQjJZV3gxWlM1MGIxMDdYRzRnSUNBZ0lDQjlYRzRnSUNBZ2ZWeHVYRzRnSUNBZ2NtVjBkWEp1SUhSb2FYTTdYRzRnSUgxY2JseHVJQ0J5WlhabGNuTmxLQ2tnZTF4dUlDQWdJSFJvYVhNdWNHeGhlVVJwY21WamRHbHZiaUFxUFNBdE1UdGNiaUFnSUNCeVpYUjFjbTRnZEdocGN6dGNiaUFnZlZ4dVhHNGdJSEpsYzNSaGNuUW9LU0I3WEc0Z0lDQWdkR2hwY3k1bGJHRndjMlZrSUQwZ0tIUm9hWE11Y0d4aGVVUnBjbVZqZEdsdmJpQTlQVDBnTVNrZ1B5QXdJRG9nZEdocGN5NWtkWEpoZEdsdmJqdGNiaUFnSUNCMGFHbHpMbk4wWVhKMFpXUWdQU0JqZFhKeVpXNTBWR2x0WlNncE8xeHVJQ0FnSUhKbGRIVnliaUIwYUdsek8xeHVJQ0I5WEc1Y2JpQWdjMlZsYXlod2NtOW5jbVZ6Y3lrZ2UxeHVJQ0FnSUhSb2FYTXVjMlZsYTFScGJXVW9kR2hwY3k1a2RYSmhkR2x2YmlBcUlIQnliMmR5WlhOektUdGNiaUFnSUNCeVpYUjFjbTRnZEdocGN6dGNiaUFnZlZ4dVhHNGdJSE5sWld0VWFXMWxLR1ZzWVhCelpXUXBJSHRjYmlBZ0lDQnBaaUFvSVhSb2FYTXVhWE5CWTNScGRtVWdmSHdnZEdocGN5NXBjMU5qY25WaVltbHVaeWtnZTF4dUlDQWdJQ0FnZEdocGN5NXZibU5sS0NrN1hHNGdJQ0FnSUNCMGFHbHpMbWx6VTJOeWRXSmlhVzVuSUQwZ2RISjFaVHRjYmlBZ0lDQjlYRzVjYmlBZ0lDQjBhR2x6TG1Wc1lYQnpaV1FnUFNCbGJHRndjMlZrTzF4dVhHNGdJQ0FnY21WMGRYSnVJSFJvYVhNN1hHNGdJSDFjYm4xY2JseHVWSGRsWlc0dWNISnZkRzkwZVhCbExtUmxabUYxYkhSV1lXeDFaVkJ5YjNBZ1BTQW5kRzhuTzF4dVZIZGxaVzR1Y0hKdmRHOTBlWEJsTG1SbFptRjFiSFJXWVd4MVpTQTlJRUZqZEdsdmJpNWxlSFJsYm1SRVpXWmhkV3gwVm1Gc2RXVW9lMXh1SUNCa1pXeGhlVG9nTUN4Y2JpQWdaSFZ5WVhScGIyNDZJRE13TUN4Y2JpQWdaV0Z6WlRvZ1pXRnphVzVuTG1WaGMyVlBkWFFzWEc0Z0lHVnNZWEJ6WldRNklEQXNYRzRnSUhOMFpYQnpPaUF3TEZ4dUlDQjBiem9nTUN4Y2JpQWdjbTkxYm1RNklHWmhiSE5sWEc1OUtUdGNibFIzWldWdUxuQnliM1J2ZEhsd1pTNWtaV1poZFd4MFVISnZjSE1nUFNCQlkzUnBiMjR1WlhoMFpXNWtSR1ZtWVhWc2RGQnliM0J6S0h0Y2JpQWdZbXhsYm1RNklHWmhiSE5sTEZ4dUlDQmthV3hoZEdVNklERXNYRzRnSUd4dmIzQTZJREFzWEc0Z0lIbHZlVzg2SURBc1hHNGdJR1pzYVhBNklEQXNYRzRnSUd4dmIzQkRiM1Z1ZERvZ01DeGNiaUFnZVc5NWIwTnZkVzUwT2lBd0xGeHVJQ0JtYkdsd1EyOTFiblE2SURBc1hHNGdJSEJzWVhsRWFYSmxZM1JwYjI0NklERXNYRzRnSUdselUyTnlkV0ppYVc1bk9pQm1ZV3h6WlN4Y2JpQWdaVzVrWldRNklHWmhiSE5sTEZ4dUlDQmxiR0Z3YzJWa09pQXdYRzU5S1R0Y2JseHVaWGh3YjNKMElHUmxabUYxYkhRZ1ZIZGxaVzQ3WEc0aVhYMD1cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2FjdGlvbnMvVHdlZW4uanNcbiAqKiBtb2R1bGUgaWQgPSA1XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfQWN0aW9uMiA9IHJlcXVpcmUoJy4vQWN0aW9uJyk7XG5cbnZhciBfQWN0aW9uMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX0FjdGlvbjIpO1xuXG52YXIgX2NhbGMgPSByZXF1aXJlKCcuLi9pbmMvY2FsYycpO1xuXG52YXIgX3V0aWxzID0gcmVxdWlyZSgnLi4vaW5jL3V0aWxzJyk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKCFzZWxmKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gY2FsbCAmJiAodHlwZW9mIGNhbGwgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikgPyBjYWxsIDogc2VsZjsgfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb24sIG5vdCBcIiArIHR5cGVvZiBzdXBlckNsYXNzKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCBlbnVtZXJhYmxlOiBmYWxzZSwgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LnNldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKSA6IHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7IH1cblxudmFyIFBoeXNpY3MgPSBmdW5jdGlvbiAoX0FjdGlvbikge1xuICBfaW5oZXJpdHMoUGh5c2ljcywgX0FjdGlvbik7XG5cbiAgZnVuY3Rpb24gUGh5c2ljcygpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgUGh5c2ljcyk7XG5cbiAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgYXJnc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICB9XG5cbiAgICB2YXIgX3RoaXMgPSBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCBfQWN0aW9uLmNhbGwuYXBwbHkoX0FjdGlvbiwgW3RoaXNdLmNvbmNhdChhcmdzKSkpO1xuXG4gICAgX3RoaXMuaW5hY3RpdmVGcmFtZXMgPSAwO1xuICAgIF90aGlzLmNhbGN1bGF0ZXNWZWxvY2l0eSA9IHRydWU7XG4gICAgcmV0dXJuIF90aGlzO1xuICB9XG5cbiAgUGh5c2ljcy5wcm90b3R5cGUub25VcGRhdGUgPSBmdW5jdGlvbiBvblVwZGF0ZShwaHlzaWNzLCBmcmFtZVN0YW1wLCBlbGFwc2VkKSB7XG4gICAgdGhpcy5oYXNDaGFuZ2VkID0gZmFsc2U7XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubnVtVmFsdWVLZXlzOyBpKyspIHtcbiAgICAgIHZhciBrZXkgPSB0aGlzLnZhbHVlS2V5c1tpXTtcbiAgICAgIHZhciB2YWx1ZSA9IHRoaXMudmFsdWVzW2tleV07XG5cbiAgICAgIC8vIEFwcGx5IGFjY2VsZXJhdGlvblxuICAgICAgdmFsdWUudmVsb2NpdHkgKz0gKDAsIF9jYWxjLnNwZWVkUGVyRnJhbWUpKHZhbHVlLmFjY2VsZXJhdGlvbiwgZWxhcHNlZCk7XG5cbiAgICAgIC8vIEFwcGx5IGZyaWN0aW9uXG4gICAgICB2YWx1ZS52ZWxvY2l0eSAqPSBNYXRoLnBvdygxIC0gdmFsdWUuZnJpY3Rpb24sIGVsYXBzZWQgLyAxMDApO1xuXG4gICAgICAvLyBBcHBseSBzcHJpbmdcbiAgICAgIGlmICh2YWx1ZS5zcHJpbmcgJiYgKDAsIF91dGlscy5pc051bSkodmFsdWUudG8pKSB7XG4gICAgICAgIHZhciBkaXN0YW5jZVRvVGFyZ2V0ID0gdmFsdWUudG8gLSB2YWx1ZS5jdXJyZW50O1xuICAgICAgICB2YWx1ZS52ZWxvY2l0eSArPSBkaXN0YW5jZVRvVGFyZ2V0ICogKDAsIF9jYWxjLnNwZWVkUGVyRnJhbWUpKHZhbHVlLnNwcmluZywgZWxhcHNlZCk7XG4gICAgICB9XG5cbiAgICAgIC8vIEFwcGx5IGxhdGVzdCB2ZWxvY2l0eVxuICAgICAgdmFsdWUuY3VycmVudCArPSAoMCwgX2NhbGMuc3BlZWRQZXJGcmFtZSkodmFsdWUudmVsb2NpdHksIGVsYXBzZWQpO1xuXG4gICAgICAvLyBEZXRlY3QgYm91bmNlXG4gICAgICBpZiAodmFsdWUubWluICE9PSB1bmRlZmluZWQgJiYgdmFsdWUuY3VycmVudCA8IHZhbHVlLm1pbiB8fCB2YWx1ZS5tYXggIT09IHVuZGVmaW5lZCAmJiB2YWx1ZS5jdXJyZW50ID4gdmFsdWUubWF4KSB7XG4gICAgICAgIHZhbHVlLnZlbG9jaXR5ICo9IC12YWx1ZS5ib3VuY2U7XG4gICAgICB9XG5cbiAgICAgIC8vIENoZWNrIGlmIHZhbHVlIGhhcyBjaGFuZ2VkXG4gICAgICBpZiAoTWF0aC5hYnModmFsdWUudmVsb2NpdHkpID49IHZhbHVlLnN0b3BTcGVlZCkge1xuICAgICAgICB0aGlzLmhhc0NoYW5nZWQgPSB0cnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodmFsdWUuc3ByaW5nICYmICF0aGlzLmhhc0NoYW5nZWQpIHtcbiAgICAgICAgdmFsdWUuY3VycmVudCA9IHZhbHVlLnRvO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICBQaHlzaWNzLnByb3RvdHlwZS5vbkZyYW1lRW5kID0gZnVuY3Rpb24gb25GcmFtZUVuZCgpIHtcbiAgICBpZiAodGhpcy5tYXhJbmFjdGl2ZUZyYW1lcyAhPT0gSW5maW5pdHkpIHtcbiAgICAgIHRoaXMuaW5hY3RpdmVGcmFtZXMgPSB0aGlzLmhhc0NoYW5nZWQgPyAxIDogdGhpcy5pbmFjdGl2ZUZyYW1lcyArIDE7XG5cbiAgICAgIGlmICh0aGlzLmluYWN0aXZlRnJhbWVzID49IHRoaXMubWF4SW5hY3RpdmVGcmFtZXMpIHtcbiAgICAgICAgdGhpcy5jb21wbGV0ZSgpO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICByZXR1cm4gUGh5c2ljcztcbn0oX0FjdGlvbjMuZGVmYXVsdCk7XG5cblBoeXNpY3MucHJvdG90eXBlLmRlZmF1bHRWYWx1ZVByb3AgPSAndmVsb2NpdHknO1xuUGh5c2ljcy5wcm90b3R5cGUuZGVmYXVsdFZhbHVlID0gX0FjdGlvbjMuZGVmYXVsdC5leHRlbmREZWZhdWx0VmFsdWUoe1xuICBhY2NlbGVyYXRpb246IDAsIC8vIFtudW1iZXJdOiBBY2NlbGVyYXRpb24gdG8gYXBwbHkgdG8gdmFsdWUsIGluIHVuaXRzIHBlciBzZWNvbmRcbiAgYm91bmNlOiAwLCAvLyBbbnVtYmVyXTogRmFjdG9yIHRvIG11bHRpcGx5IHZlbG9jaXR5IGJ5IG9uIGJvdW5jZVxuICBzcHJpbmc6IDAsIC8vIFtudW1iZXJdOiBTcHJpbmcgc3RyZW5ndGggZHVyaW5nICdzdHJpbmcnXG4gIHN0b3BTcGVlZDogMC4wMDEsIC8vIFtudW1iZXJdOiBTdG9wIHNpbXVsYXRpb24gdW5kZXIgdGhpcyBzcGVlZFxuICBmcmljdGlvbjogMCAvLyBbbnVtYmVyXTogRnJpY3Rpb24gdG8gYXBwbHkgcGVyIGZyYW1lLCAwLTFcbn0pO1xuUGh5c2ljcy5wcm90b3R5cGUuZGVmYXVsdFByb3BzID0gX0FjdGlvbjMuZGVmYXVsdC5leHRlbmREZWZhdWx0UHJvcHMoe1xuICBtYXhJbmFjdGl2ZUZyYW1lczogM1xufSk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IFBoeXNpY3M7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5OeVl5OWhZM1JwYjI1ekwxQm9lWE5wWTNNdWFuTWlYU3dpYm1GdFpYTWlPbHRkTENKdFlYQndhVzVuY3lJNklqczdPenRCUVVGQk96czdPMEZCUTBFN08wRkJRMEU3T3pzN096czdPenM3U1VGRlRUczdPMEZCUTBvc1YwRkVTU3hQUVVOS0xFZEJRWEZDT3pCQ1FVUnFRaXhUUVVOcFFqczdjME5CUVU0N08wdEJRVTA3TzJsRVFVTnVRaXd3UTBGQlV5eExRVUZVTEVkQlJHMUNPenRCUVVWdVFpeFZRVUZMTEdOQlFVd3NSMEZCYzBJc1EwRkJkRUlzUTBGR2JVSTdRVUZIYmtJc1ZVRkJTeXhyUWtGQlRDeEhRVUV3UWl4SlFVRXhRaXhEUVVodFFqczdSMEZCY2tJN08wRkJSRWtzYjBKQlQwb3NOa0pCUVZNc1UwRkJVeXhaUVVGWkxGTkJRVk03UVVGRGNrTXNVMEZCU3l4VlFVRk1MRWRCUVd0Q0xFdEJRV3hDTEVOQlJIRkRPenRCUVVkeVF5eFRRVUZMTEVsQlFVa3NTVUZCU1N4RFFVRktMRVZCUVU4c1NVRkJTU3hMUVVGTExGbEJRVXdzUlVGQmJVSXNSMEZCZGtNc1JVRkJORU03UVVGRE1VTXNWVUZCVFN4TlFVRk5MRXRCUVVzc1UwRkJUQ3hEUVVGbExFTkJRV1lzUTBGQlRpeERRVVJ2UXp0QlFVVXhReXhWUVVGTkxGRkJRVkVzUzBGQlN5eE5RVUZNTEVOQlFWa3NSMEZCV2l4RFFVRlNPenM3UVVGR2IwTXNWMEZMTVVNc1EwRkJUU3hSUVVGT0xFbEJRV3RDTEhsQ1FVRmpMRTFCUVUwc1dVRkJUaXhGUVVGdlFpeFBRVUZzUXl4RFFVRnNRanM3TzBGQlREQkRMRmRCVVRGRExFTkJRVTBzVVVGQlRpeGhRVUZ0UWl4SlFVRkpMRTFCUVUwc1VVRkJUaXhGUVVGdlFpeFZRVUZWTEVkQlFWWXNRMEZCTTBNN096dEJRVkl3UXl4VlFWZDBReXhOUVVGTkxFMUJRVTRzU1VGQlowSXNhMEpCUVUwc1RVRkJUU3hGUVVGT0xFTkJRWFJDTEVWQlFXbERPMEZCUTI1RExGbEJRVTBzYlVKQlFXMUNMRTFCUVUwc1JVRkJUaXhIUVVGWExFMUJRVTBzVDBGQlRpeERRVVJFTzBGQlJXNURMR05CUVUwc1VVRkJUaXhKUVVGclFpeHRRa0ZCYlVJc2VVSkJRV01zVFVGQlRTeE5RVUZPTEVWQlFXTXNUMEZCTlVJc1EwRkJia0lzUTBGR2FVSTdUMEZCY2tNN096dEJRVmd3UXl4WFFXbENNVU1zUTBGQlRTeFBRVUZPTEVsQlFXbENMSGxDUVVGakxFMUJRVTBzVVVGQlRpeEZRVUZuUWl4UFFVRTVRaXhEUVVGcVFqczdPMEZCYWtJd1F5eFZRVzlDZEVNc1MwRkJReXhEUVVGTkxFZEJRVTRzUzBGQll5eFRRVUZrTEVsQlFUSkNMRTFCUVUwc1QwRkJUaXhIUVVGblFpeE5RVUZOTEVkQlFVNHNTVUZCWlN4TlFVRk5MRWRCUVU0c1MwRkJZeXhUUVVGa0xFbEJRVEpDTEUxQlFVMHNUMEZCVGl4SFFVRm5RaXhOUVVGTkxFZEJRVTRzUlVGQldUdEJRVU53U0N4alFVRk5MRkZCUVU0c1NVRkJhMElzUTBGQlJTeE5RVUZOTEUxQlFVNHNRMEZFWjBjN1QwRkJkRWc3T3p0QlFYQkNNRU1zVlVGNVFuUkRMRXRCUVVzc1IwRkJUQ3hEUVVGVExFMUJRVTBzVVVGQlRpeERRVUZVTEVsQlFUUkNMRTFCUVUwc1UwRkJUaXhGUVVGcFFqdEJRVU12UXl4aFFVRkxMRlZCUVV3c1IwRkJhMElzU1VGQmJFSXNRMEZFSzBNN1QwRkJha1E3TzBGQlNVRXNWVUZCU1N4TlFVRk5MRTFCUVU0c1NVRkJaMElzUTBGQlF5eExRVUZMTEZWQlFVd3NSVUZCYVVJN1FVRkRjRU1zWTBGQlRTeFBRVUZPTEVkQlFXZENMRTFCUVUwc1JVRkJUaXhEUVVSdlFqdFBRVUYwUXp0TFFUZENSanM3TzBGQlZrVXNiMEpCTmtOS0xHMURRVUZoTzBGQlExZ3NVVUZCU1N4TFFVRkxMR2xDUVVGTUxFdEJRVEpDTEZGQlFUTkNMRVZCUVhGRE8wRkJRM1pETEZkQlFVc3NZMEZCVEN4SFFVRnpRaXhMUVVGTExGVkJRVXdzUjBGQmEwSXNRMEZCYkVJc1IwRkJjMElzUzBGQlN5eGpRVUZNTEVkQlFYTkNMRU5CUVhSQ0xFTkJSRXc3TzBGQlIzWkRMRlZCUVVrc1MwRkJTeXhqUVVGTUxFbEJRWFZDTEV0QlFVc3NhVUpCUVV3c1JVRkJkMEk3UVVGRGFrUXNZVUZCU3l4UlFVRk1MRWRCUkdsRU8wOUJRVzVFTzB0QlNFWTdPenRUUVRsRFJUczdPMEZCZDBST0xGRkJRVkVzVTBGQlVpeERRVUZyUWl4blFrRkJiRUlzUjBGQmNVTXNWVUZCY2tNN1FVRkRRU3hSUVVGUkxGTkJRVklzUTBGQmEwSXNXVUZCYkVJc1IwRkJhVU1zYVVKQlFVOHNhMEpCUVZBc1EwRkJNRUk3UVVGRGVrUXNaMEpCUVdNc1EwRkJaRHRCUVVOQkxGVkJRVkVzUTBGQlVqdEJRVU5CTEZWQlFWRXNRMEZCVWp0QlFVTkJMR0ZCUVZjc1MwRkJXRHRCUVVOQkxGbEJRVlVzUTBGQlZqdEJRVXg1UkN4RFFVRXhRaXhEUVVGcVF6dEJRVTlCTEZGQlFWRXNVMEZCVWl4RFFVRnJRaXhaUVVGc1FpeEhRVUZwUXl4cFFrRkJUeXhyUWtGQlVDeERRVUV3UWp0QlFVTjZSQ3h4UWtGQmJVSXNRMEZCYmtJN1EwRkVLMElzUTBGQmFrTTdPMnRDUVVsbElpd2labWxzWlNJNklsQm9lWE5wWTNNdWFuTWlMQ0p6YjNWeVkyVlNiMjkwSWpvaUwxVnpaWEp6TDAxaGRIUXZVMmwwWlhNdmNHOXdiVzkwYVc5dUlpd2ljMjkxY21ObGMwTnZiblJsYm5RaU9sc2lhVzF3YjNKMElFRmpkR2x2YmlCbWNtOXRJQ2N1TDBGamRHbHZiaWM3WEc1cGJYQnZjblFnZXlCemNHVmxaRkJsY2taeVlXMWxJSDBnWm5KdmJTQW5MaTR2YVc1akwyTmhiR01uTzF4dWFXMXdiM0owSUhzZ2FYTk9kVzBnZlNCbWNtOXRJQ2N1TGk5cGJtTXZkWFJwYkhNbk8xeHVYRzVqYkdGemN5QlFhSGx6YVdOeklHVjRkR1Z1WkhNZ1FXTjBhVzl1SUh0Y2JpQWdZMjl1YzNSeWRXTjBiM0lvTGk0dVlYSm5jeWtnZTF4dUlDQWdJSE4xY0dWeUtDNHVMbUZ5WjNNcE8xeHVJQ0FnSUhSb2FYTXVhVzVoWTNScGRtVkdjbUZ0WlhNZ1BTQXdPMXh1SUNBZ0lIUm9hWE11WTJGc1kzVnNZWFJsYzFabGJHOWphWFI1SUQwZ2RISjFaVHRjYmlBZ2ZWeHVYRzRnSUc5dVZYQmtZWFJsS0hCb2VYTnBZM01zSUdaeVlXMWxVM1JoYlhBc0lHVnNZWEJ6WldRcElIdGNiaUFnSUNCMGFHbHpMbWhoYzBOb1lXNW5aV1FnUFNCbVlXeHpaVHRjYmx4dUlDQWdJR1p2Y2lBb2JHVjBJR2tnUFNBd095QnBJRHdnZEdocGN5NXVkVzFXWVd4MVpVdGxlWE03SUdrckt5a2dlMXh1SUNBZ0lDQWdZMjl1YzNRZ2EyVjVJRDBnZEdocGN5NTJZV3gxWlV0bGVYTmJhVjA3WEc0Z0lDQWdJQ0JqYjI1emRDQjJZV3gxWlNBOUlIUm9hWE11ZG1Gc2RXVnpXMnRsZVYwN1hHNWNiaUFnSUNBZ0lDOHZJRUZ3Y0d4NUlHRmpZMlZzWlhKaGRHbHZibHh1SUNBZ0lDQWdkbUZzZFdVdWRtVnNiMk5wZEhrZ0t6MGdjM0JsWldSUVpYSkdjbUZ0WlNoMllXeDFaUzVoWTJObGJHVnlZWFJwYjI0c0lHVnNZWEJ6WldRcE8xeHVYRzRnSUNBZ0lDQXZMeUJCY0hCc2VTQm1jbWxqZEdsdmJseHVJQ0FnSUNBZ2RtRnNkV1V1ZG1Wc2IyTnBkSGtnS2owZ0tERWdMU0IyWVd4MVpTNW1jbWxqZEdsdmJpa2dLaW9nS0dWc1lYQnpaV1FnTHlBeE1EQXBPMXh1WEc0Z0lDQWdJQ0F2THlCQmNIQnNlU0J6Y0hKcGJtZGNiaUFnSUNBZ0lHbG1JQ2gyWVd4MVpTNXpjSEpwYm1jZ0ppWWdhWE5PZFcwb2RtRnNkV1V1ZEc4cEtTQjdYRzRnSUNBZ0lDQWdJR052Ym5OMElHUnBjM1JoYm1ObFZHOVVZWEpuWlhRZ1BTQjJZV3gxWlM1MGJ5QXRJSFpoYkhWbExtTjFjbkpsYm5RN1hHNGdJQ0FnSUNBZ0lIWmhiSFZsTG5abGJHOWphWFI1SUNzOUlHUnBjM1JoYm1ObFZHOVVZWEpuWlhRZ0tpQnpjR1ZsWkZCbGNrWnlZVzFsS0haaGJIVmxMbk53Y21sdVp5d2daV3hoY0hObFpDazdYRzRnSUNBZ0lDQjlYRzVjYmlBZ0lDQWdJQzh2SUVGd2NHeDVJR3hoZEdWemRDQjJaV3h2WTJsMGVWeHVJQ0FnSUNBZ2RtRnNkV1V1WTNWeWNtVnVkQ0FyUFNCemNHVmxaRkJsY2taeVlXMWxLSFpoYkhWbExuWmxiRzlqYVhSNUxDQmxiR0Z3YzJWa0tUdGNibHh1SUNBZ0lDQWdMeThnUkdWMFpXTjBJR0p2ZFc1alpWeHVJQ0FnSUNBZ2FXWWdLQ2gyWVd4MVpTNXRhVzRnSVQwOUlIVnVaR1ZtYVc1bFpDQW1KaUIyWVd4MVpTNWpkWEp5Wlc1MElEd2dkbUZzZFdVdWJXbHVLU0I4ZkNBb2RtRnNkV1V1YldGNElDRTlQU0IxYm1SbFptbHVaV1FnSmlZZ2RtRnNkV1V1WTNWeWNtVnVkQ0ErSUhaaGJIVmxMbTFoZUNrcElIdGNiaUFnSUNBZ0lDQWdkbUZzZFdVdWRtVnNiMk5wZEhrZ0tqMGdMU0IyWVd4MVpTNWliM1Z1WTJVN1hHNGdJQ0FnSUNCOVhHNGdJQ0FnSUNCY2JpQWdJQ0FnSUM4dklFTm9aV05ySUdsbUlIWmhiSFZsSUdoaGN5QmphR0Z1WjJWa1hHNGdJQ0FnSUNCcFppQW9UV0YwYUM1aFluTW9kbUZzZFdVdWRtVnNiMk5wZEhrcElENDlJSFpoYkhWbExuTjBiM0JUY0dWbFpDa2dlMXh1SUNBZ0lDQWdJQ0IwYUdsekxtaGhjME5vWVc1blpXUWdQU0IwY25WbE8xeHVJQ0FnSUNBZ2ZWeHVYRzRnSUNBZ0lDQnBaaUFvZG1Gc2RXVXVjM0J5YVc1bklDWW1JQ0YwYUdsekxtaGhjME5vWVc1blpXUXBJSHRjYmlBZ0lDQWdJQ0FnZG1Gc2RXVXVZM1Z5Y21WdWRDQTlJSFpoYkhWbExuUnZPMXh1SUNBZ0lDQWdmVnh1SUNBZ0lIMWNiaUFnZlZ4dVhHNGdJRzl1Um5KaGJXVkZibVFvS1NCN1hHNGdJQ0FnYVdZZ0tIUm9hWE11YldGNFNXNWhZM1JwZG1WR2NtRnRaWE1nSVQwOUlFbHVabWx1YVhSNUtTQjdYRzRnSUNBZ0lDQjBhR2x6TG1sdVlXTjBhWFpsUm5KaGJXVnpJRDBnZEdocGN5NW9ZWE5EYUdGdVoyVmtJRDhnTVNBNklIUm9hWE11YVc1aFkzUnBkbVZHY21GdFpYTWdLeUF4TzF4dVhHNGdJQ0FnSUNCcFppQW9kR2hwY3k1cGJtRmpkR2wyWlVaeVlXMWxjeUErUFNCMGFHbHpMbTFoZUVsdVlXTjBhWFpsUm5KaGJXVnpLU0I3WEc0Z0lDQWdJQ0FnSUhSb2FYTXVZMjl0Y0d4bGRHVW9LVHRjYmlBZ0lDQWdJSDFjYmlBZ0lDQjlYRzRnSUgxY2JuMWNibHh1VUdoNWMybGpjeTV3Y205MGIzUjVjR1V1WkdWbVlYVnNkRlpoYkhWbFVISnZjQ0E5SUNkMlpXeHZZMmwwZVNjN1hHNVFhSGx6YVdOekxuQnliM1J2ZEhsd1pTNWtaV1poZFd4MFZtRnNkV1VnUFNCQlkzUnBiMjR1WlhoMFpXNWtSR1ZtWVhWc2RGWmhiSFZsS0h0Y2JpQWdZV05qWld4bGNtRjBhVzl1T2lBd0xDQXZMeUJiYm5WdFltVnlYVG9nUVdOalpXeGxjbUYwYVc5dUlIUnZJR0Z3Y0d4NUlIUnZJSFpoYkhWbExDQnBiaUIxYm1sMGN5QndaWElnYzJWamIyNWtYRzRnSUdKdmRXNWpaVG9nTUN3Z0x5OGdXMjUxYldKbGNsMDZJRVpoWTNSdmNpQjBieUJ0ZFd4MGFYQnNlU0IyWld4dlkybDBlU0JpZVNCdmJpQmliM1Z1WTJWY2JpQWdjM0J5YVc1bk9pQXdMQ0F2THlCYmJuVnRZbVZ5WFRvZ1UzQnlhVzVuSUhOMGNtVnVaM1JvSUdSMWNtbHVaeUFuYzNSeWFXNW5KMXh1SUNCemRHOXdVM0JsWldRNklEQXVNREF4TENBdkx5QmJiblZ0WW1WeVhUb2dVM1J2Y0NCemFXMTFiR0YwYVc5dUlIVnVaR1Z5SUhSb2FYTWdjM0JsWldSY2JpQWdabkpwWTNScGIyNDZJREFnTHk4Z1cyNTFiV0psY2wwNklFWnlhV04wYVc5dUlIUnZJR0Z3Y0d4NUlIQmxjaUJtY21GdFpTd2dNQzB4WEc1OUtUdGNibEJvZVhOcFkzTXVjSEp2ZEc5MGVYQmxMbVJsWm1GMWJIUlFjbTl3Y3lBOUlFRmpkR2x2Ymk1bGVIUmxibVJFWldaaGRXeDBVSEp2Y0hNb2UxeHVJQ0J0WVhoSmJtRmpkR2wyWlVaeVlXMWxjem9nTTF4dWZTazdYRzVjYm1WNGNHOXlkQ0JrWldaaGRXeDBJRkJvZVhOcFkzTTdYRzRpWFgwPVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvYWN0aW9ucy9QaHlzaWNzLmpzXG4gKiogbW9kdWxlIGlkID0gNlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9O1xuXG52YXIgX0FjdGlvbjIgPSByZXF1aXJlKCcuL0FjdGlvbicpO1xuXG52YXIgX0FjdGlvbjMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9BY3Rpb24yKTtcblxudmFyIF9Qb2ludGVyID0gcmVxdWlyZSgnLi4vaW5wdXQvUG9pbnRlcicpO1xuXG52YXIgX1BvaW50ZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfUG9pbnRlcik7XG5cbnZhciBfY2FsYyA9IHJlcXVpcmUoJy4uL2luYy9jYWxjJyk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKCFzZWxmKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gY2FsbCAmJiAodHlwZW9mIGNhbGwgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikgPyBjYWxsIDogc2VsZjsgfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb24sIG5vdCBcIiArIHR5cGVvZiBzdXBlckNsYXNzKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCBlbnVtZXJhYmxlOiBmYWxzZSwgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LnNldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKSA6IHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7IH1cblxuLypcbiAgU2NyYXBlIHgveSBjb29yZGluYXRlcyBmcm9tIHByb3ZpZGVkIGV2ZW50XG5cbiAgQHBhcmFtIFtldmVudF1cbiAgQHJldHVybiBbb2JqZWN0XVxuKi9cbnZhciBtb3VzZUV2ZW50VG9Qb2ludCA9IGZ1bmN0aW9uIChlKSB7XG4gIHJldHVybiB7XG4gICAgeDogZS5wYWdlWCxcbiAgICB5OiBlLnBhZ2VZXG4gIH07XG59O1xuXG52YXIgdG91Y2hFdmVudFRvUG9pbnQgPSBmdW5jdGlvbiAoX3JlZikge1xuICB2YXIgY2hhbmdlZFRvdWNoZXMgPSBfcmVmLmNoYW5nZWRUb3VjaGVzO1xuICByZXR1cm4ge1xuICAgIHg6IGNoYW5nZWRUb3VjaGVzWzBdLmNsaWVudFgsXG4gICAgeTogY2hhbmdlZFRvdWNoZXNbMF0uY2xpZW50WVxuICB9O1xufTtcblxudmFyIGNyZWF0ZVBvaW50ZXIgPSBmdW5jdGlvbiAoZSwgcHJldmVudERlZmF1bHQpIHtcbiAgcmV0dXJuIGUudG91Y2hlcyA/IG5ldyBfUG9pbnRlcjIuZGVmYXVsdCh0b3VjaEV2ZW50VG9Qb2ludChlKSwgJ3RvdWNobW92ZScsIHRvdWNoRXZlbnRUb1BvaW50LCBwcmV2ZW50RGVmYXVsdCkgOiBuZXcgX1BvaW50ZXIyLmRlZmF1bHQobW91c2VFdmVudFRvUG9pbnQoZSksICdtb3VzZW1vdmUnLCBtb3VzZUV2ZW50VG9Qb2ludCwgcHJldmVudERlZmF1bHQpO1xufTtcblxudmFyIGdldEFjdHVhbEV2ZW50ID0gZnVuY3Rpb24gKGUpIHtcbiAgcmV0dXJuIGUub3JpZ2luYWxFdmVudCB8fCBlO1xufTtcblxudmFyIFRyYWNrID0gZnVuY3Rpb24gKF9BY3Rpb24pIHtcbiAgX2luaGVyaXRzKFRyYWNrLCBfQWN0aW9uKTtcblxuICBmdW5jdGlvbiBUcmFjaygpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgVHJhY2spO1xuXG4gICAgcmV0dXJuIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIF9BY3Rpb24uYXBwbHkodGhpcywgYXJndW1lbnRzKSk7XG4gIH1cblxuICBUcmFjay5wcm90b3R5cGUuc3RhcnQgPSBmdW5jdGlvbiBzdGFydChpbnB1dCkge1xuICAgIHZhciBwcmV2ZW50RGVmYXVsdCA9IGFyZ3VtZW50cy5sZW5ndGggPD0gMSB8fCBhcmd1bWVudHNbMV0gPT09IHVuZGVmaW5lZCA/IHRydWUgOiBhcmd1bWVudHNbMV07XG5cbiAgICBfQWN0aW9uLnByb3RvdHlwZS5zdGFydC5jYWxsKHRoaXMpO1xuXG4gICAgaWYgKGlucHV0KSB7XG4gICAgICB0aGlzLmlucHV0ID0gaW5wdXQuc3RhdGUgPyBpbnB1dCA6IGNyZWF0ZVBvaW50ZXIoZ2V0QWN0dWFsRXZlbnQoaW5wdXQpLCBwcmV2ZW50RGVmYXVsdCk7XG4gICAgfVxuXG4gICAgdGhpcy5pbnB1dE9mZnNldCA9IHt9O1xuICAgIHRoaXMuaW5wdXRPcmlnaW4gPSBfZXh0ZW5kcyh7fSwgdGhpcy5pbnB1dC5zdGF0ZSk7XG4gICAgdGhpcy5pbnB1dC5zdGFydCgpO1xuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgVHJhY2sucHJvdG90eXBlLnN0b3AgPSBmdW5jdGlvbiBzdG9wKCkge1xuICAgIF9BY3Rpb24ucHJvdG90eXBlLnN0b3AuY2FsbCh0aGlzKTtcbiAgICB0aGlzLmlucHV0LnN0b3AoKTtcblxuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIFRyYWNrLnByb3RvdHlwZS5vblVwZGF0ZSA9IGZ1bmN0aW9uIG9uVXBkYXRlKHRyYWNrLCBmcmFtZVN0YW1wLCBlbGFwc2VkKSB7XG4gICAgdGhpcy5pbnB1dE9mZnNldCA9ICgwLCBfY2FsYy5vZmZzZXQpKHRoaXMuaW5wdXRPcmlnaW4sIHRoaXMuaW5wdXQuc3RhdGUpO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLm51bVZhbHVlS2V5czsgaSsrKSB7XG4gICAgICB2YXIga2V5ID0gdGhpcy52YWx1ZUtleXNbaV07XG5cbiAgICAgIGlmICh0aGlzLmlucHV0T2Zmc2V0Lmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgdmFyIHZhbHVlID0gdGhpcy52YWx1ZXNba2V5XTtcbiAgICAgICAgdmFyIGlucHV0UHJvcCA9IHZhbHVlLmhhc093blByb3BlcnR5KCd3YXRjaCcpID8gdmFsdWUud2F0Y2ggOiBrZXk7XG5cbiAgICAgICAgaWYgKHZhbHVlLmRpcmVjdCkge1xuICAgICAgICAgIHZhbHVlLmN1cnJlbnQgPSB0aGlzLmlucHV0LnN0YXRlW2lucHV0UHJvcF07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdmFsdWUuY3VycmVudCA9IHZhbHVlLmZyb20gKyB0aGlzLmlucHV0T2Zmc2V0W2lucHV0UHJvcF07XG4gICAgICAgIH1cblxuICAgICAgICAvLyBTbW9vdGggdmFsdWUgaWYgd2UgaGF2ZSBzbW9vdGhpbmdcbiAgICAgICAgaWYgKHZhbHVlLnNtb290aCkge1xuICAgICAgICAgIHZhbHVlLmN1cnJlbnQgPSAoMCwgX2NhbGMuc21vb3RoKSh2YWx1ZS5jdXJyZW50LCB2YWx1ZS5wcmV2LCBlbGFwc2VkLCB2YWx1ZS5zbW9vdGgpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBUcmFjaztcbn0oX0FjdGlvbjMuZGVmYXVsdCk7XG5cblRyYWNrLnByb3RvdHlwZS5kZWZhdWx0VmFsdWVQcm9wID0gJ3dhdGNoJztcblRyYWNrLnByb3RvdHlwZS5kZWZhdWx0VmFsdWUgPSBfQWN0aW9uMy5kZWZhdWx0LmV4dGVuZERlZmF1bHRWYWx1ZSh7XG4gIGRpcmVjdDogZmFsc2UsXG4gIGZyb206IDBcbn0pO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBUcmFjaztcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbk55WXk5aFkzUnBiMjV6TDFSeVlXTnJMbXB6SWwwc0ltNWhiV1Z6SWpwYlhTd2liV0Z3Y0dsdVozTWlPaUk3T3pzN096dEJRVUZCT3pzN08wRkJRMEU3T3pzN1FVRkRRVHM3T3pzN096czdPenM3T3pzN096dEJRVkZCTEVsQlFVMHNiMEpCUVc5Q0xGVkJRVU1zUTBGQlJEdFRRVUZSTzBGQlEyaERMRTlCUVVjc1JVRkJSU3hMUVVGR08wRkJRMGdzVDBGQlJ5eEZRVUZGTEV0QlFVWTdPME5CUm5GQ096dEJRVXN4UWl4SlFVRk5MRzlDUVVGdlFqdE5RVUZITzFOQlFYTkNPMEZCUTJwRUxFOUJRVWNzWlVGQlpTeERRVUZtTEVWQlFXdENMRTlCUVd4Q08wRkJRMGdzVDBGQlJ5eGxRVUZsTEVOQlFXWXNSVUZCYTBJc1QwRkJiRUk3TzBOQlJuRkNPenRCUVVzeFFpeEpRVUZOTEdkQ1FVRm5RaXhWUVVGRExFTkJRVVFzUlVGQlNTeGpRVUZLTzFOQlFYVkNMRVZCUVVVc1QwRkJSaXhIUVVNelF5eHpRa0ZCV1N4clFrRkJhMElzUTBGQmJFSXNRMEZCV2l4RlFVRnJReXhYUVVGc1F5eEZRVUVyUXl4cFFrRkJMME1zUlVGQmEwVXNZMEZCYkVVc1EwRkVNa01zUjBGRk0wTXNjMEpCUVZrc2EwSkJRV3RDTEVOQlFXeENMRU5CUVZvc1JVRkJhME1zVjBGQmJFTXNSVUZCSzBNc2FVSkJRUzlETEVWQlFXdEZMR05CUVd4RkxFTkJSakpETzBOQlFYWkNPenRCUVVsMFFpeEpRVUZOTEdsQ1FVRnBRaXhWUVVGRExFTkJRVVE3VTBGQlR5eEZRVUZGTEdGQlFVWXNTVUZCYlVJc1EwRkJia0k3UTBGQlVEczdTVUZGYWtJN096czdPenM3T3p0clFrRkRTaXgxUWtGQlRTeFBRVUU0UWp0UlFVRjJRaXgxUlVGQmFVSXNiMEpCUVUwN08wRkJRMnhETEhOQ1FVRk5MRXRCUVU0c1dVRkVhME03TzBGQlIyeERMRkZCUVVrc1MwRkJTaXhGUVVGWE8wRkJRMVFzVjBGQlN5eExRVUZNTEVkQlFXRXNUVUZCVFN4TFFVRk9MRWRCUVdNc1MwRkJaQ3hIUVVGelFpeGpRVUZqTEdWQlFXVXNTMEZCWml4RFFVRmtMRVZCUVhGRExHTkJRWEpETEVOQlFYUkNMRU5CUkVvN1MwRkJXRHM3UVVGSlFTeFRRVUZMTEZkQlFVd3NSMEZCYlVJc1JVRkJia0lzUTBGUWEwTTdRVUZSYkVNc1UwRkJTeXhYUVVGTUxHZENRVUYzUWl4TFFVRkxMRXRCUVV3c1EwRkJWeXhMUVVGWUxFTkJRWGhDTEVOQlVtdERPMEZCVTJ4RExGTkJRVXNzUzBGQlRDeERRVUZYTEV0QlFWZ3NSMEZVYTBNN08wRkJWMnhETEZkQlFVOHNTVUZCVUN4RFFWaHJRenM3TzBGQlJHaERMR3RDUVdWS0xIVkNRVUZQTzBGQlEwd3NjMEpCUVUwc1NVRkJUaXhaUVVSTE8wRkJSVXdzVTBGQlN5eExRVUZNTEVOQlFWY3NTVUZCV0N4SFFVWkxPenRCUVVsTUxGZEJRVThzU1VGQlVDeERRVXBMT3pzN1FVRm1TQ3hyUWtGelFrb3NOa0pCUVZNc1QwRkJUeXhaUVVGWkxGTkJRVk03UVVGRGJrTXNVMEZCU3l4WFFVRk1MRWRCUVcxQ0xHdENRVUZQTEV0QlFVc3NWMEZCVEN4RlFVRnJRaXhMUVVGTExFdEJRVXdzUTBGQlZ5eExRVUZZTEVOQlFUVkRMRU5CUkcxRE96dEJRVWR1UXl4VFFVRkxMRWxCUVVrc1NVRkJTU3hEUVVGS0xFVkJRVThzU1VGQlNTeExRVUZMTEZsQlFVd3NSVUZCYlVJc1IwRkJka01zUlVGQk5FTTdRVUZETVVNc1ZVRkJUU3hOUVVGTkxFdEJRVXNzVTBGQlRDeERRVUZsTEVOQlFXWXNRMEZCVGl4RFFVUnZRenM3UVVGSE1VTXNWVUZCU1N4TFFVRkxMRmRCUVV3c1EwRkJhVUlzWTBGQmFrSXNRMEZCWjBNc1IwRkJhRU1zUTBGQlNpeEZRVUV3UXp0QlFVTjRReXhaUVVGTkxGRkJRVkVzUzBGQlN5eE5RVUZNTEVOQlFWa3NSMEZCV2l4RFFVRlNMRU5CUkd0RE8wRkJSWGhETEZsQlFVMHNXVUZCV1N4TlFVRk5MR05CUVU0c1EwRkJjVUlzVDBGQmNrSXNTVUZCWjBNc1RVRkJUU3hMUVVGT0xFZEJRV01zUjBGQk9VTXNRMEZHYzBJN08wRkJTWGhETEZsQlFVa3NUVUZCVFN4TlFVRk9MRVZCUVdNN1FVRkRhRUlzWjBKQlFVMHNUMEZCVGl4SFFVRm5RaXhMUVVGTExFdEJRVXdzUTBGQlZ5eExRVUZZTEVOQlFXbENMRk5CUVdwQ0xFTkJRV2hDTEVOQlJHZENPMU5CUVd4Q0xFMUJSVTg3UVVGRFRDeG5Ra0ZCVFN4UFFVRk9MRWRCUVdkQ0xFMUJRVTBzU1VGQlRpeEhRVUZoTEV0QlFVc3NWMEZCVEN4RFFVRnBRaXhUUVVGcVFpeERRVUZpTEVOQlJGZzdVMEZHVURzN08wRkJTbmRETEZsQlYzQkRMRTFCUVUwc1RVRkJUaXhGUVVGak8wRkJRMmhDTEdkQ1FVRk5MRTlCUVU0c1IwRkJaMElzYTBKQlFVOHNUVUZCVFN4UFFVRk9MRVZCUVdVc1RVRkJUU3hKUVVGT0xFVkJRVmtzVDBGQmJFTXNSVUZCTWtNc1RVRkJUU3hOUVVGT0xFTkJRVE5FTEVOQlJHZENPMU5CUVd4Q08wOUJXRVk3UzBGSVJqczdPMU5CZWtKRk96czdRVUVyUTA0c1RVRkJUU3hUUVVGT0xFTkJRV2RDTEdkQ1FVRm9RaXhIUVVGdFF5eFBRVUZ1UXp0QlFVTkJMRTFCUVUwc1UwRkJUaXhEUVVGblFpeFpRVUZvUWl4SFFVRXJRaXhwUWtGQlR5eHJRa0ZCVUN4RFFVRXdRanRCUVVOMlJDeFZRVUZSTEV0QlFWSTdRVUZEUVN4UlFVRk5MRU5CUVU0N1EwRkdOa0lzUTBGQkwwSTdPMnRDUVV0bElpd2labWxzWlNJNklsUnlZV05yTG1weklpd2ljMjkxY21ObFVtOXZkQ0k2SWk5VmMyVnljeTlOWVhSMEwxTnBkR1Z6TDNCdmNHMXZkR2x2YmlJc0luTnZkWEpqWlhORGIyNTBaVzUwSWpwYkltbHRjRzl5ZENCQlkzUnBiMjRnWm5KdmJTQW5MaTlCWTNScGIyNG5PMXh1YVcxd2IzSjBJRkJ2YVc1MFpYSWdabkp2YlNBbkxpNHZhVzV3ZFhRdlVHOXBiblJsY2ljN1hHNXBiWEJ2Y25RZ2V5QnpiVzl2ZEdnc0lHOW1abk5sZENCOUlHWnliMjBnSnk0dUwybHVZeTlqWVd4akp6dGNibHh1THlwY2JpQWdVMk55WVhCbElIZ3ZlU0JqYjI5eVpHbHVZWFJsY3lCbWNtOXRJSEJ5YjNacFpHVmtJR1YyWlc1MFhHNWNiaUFnUUhCaGNtRnRJRnRsZG1WdWRGMWNiaUFnUUhKbGRIVnliaUJiYjJKcVpXTjBYVnh1S2k5Y2JtTnZibk4wSUcxdmRYTmxSWFpsYm5SVWIxQnZhVzUwSUQwZ0tHVXBJRDArSUNoN1hHNGdJSGc2SUdVdWNHRm5aVmdzWEc0Z0lIazZJR1V1Y0dGblpWbGNibjBwTzF4dVhHNWpiMjV6ZENCMGIzVmphRVYyWlc1MFZHOVFiMmx1ZENBOUlDaDdJR05vWVc1blpXUlViM1ZqYUdWeklIMHBJRDArSUNoN1hHNGdJSGc2SUdOb1lXNW5aV1JVYjNWamFHVnpXekJkTG1Oc2FXVnVkRmdzWEc0Z0lIazZJR05vWVc1blpXUlViM1ZqYUdWeld6QmRMbU5zYVdWdWRGbGNibjBwTzF4dVhHNWpiMjV6ZENCamNtVmhkR1ZRYjJsdWRHVnlJRDBnS0dVc0lIQnlaWFpsYm5SRVpXWmhkV3gwS1NBOVBpQmxMblJ2ZFdOb1pYTWdQMXh1SUNCdVpYY2dVRzlwYm5SbGNpaDBiM1ZqYUVWMlpXNTBWRzlRYjJsdWRDaGxLU3dnSjNSdmRXTm9iVzkyWlNjc0lIUnZkV05vUlhabGJuUlViMUJ2YVc1MExDQndjbVYyWlc1MFJHVm1ZWFZzZENrZ09pQmNiaUFnYm1WM0lGQnZhVzUwWlhJb2JXOTFjMlZGZG1WdWRGUnZVRzlwYm5Rb1pTa3NJQ2R0YjNWelpXMXZkbVVuTENCdGIzVnpaVVYyWlc1MFZHOVFiMmx1ZEN3Z2NISmxkbVZ1ZEVSbFptRjFiSFFwTzF4dVhHNWpiMjV6ZENCblpYUkJZM1IxWVd4RmRtVnVkQ0E5SUNobEtTQTlQaUJsTG05eWFXZHBibUZzUlhabGJuUWdmSHdnWlR0Y2JseHVZMnhoYzNNZ1ZISmhZMnNnWlhoMFpXNWtjeUJCWTNScGIyNGdlMXh1SUNCemRHRnlkQ2hwYm5CMWRDd2djSEpsZG1WdWRFUmxabUYxYkhRZ1BTQjBjblZsS1NCN1hHNGdJQ0FnYzNWd1pYSXVjM1JoY25Rb0tUdGNibHh1SUNBZ0lHbG1JQ2hwYm5CMWRDa2dlMXh1SUNBZ0lDQWdkR2hwY3k1cGJuQjFkQ0E5SUdsdWNIVjBMbk4wWVhSbElEOGdhVzV3ZFhRZ09pQmpjbVZoZEdWUWIybHVkR1Z5S0dkbGRFRmpkSFZoYkVWMlpXNTBLR2x1Y0hWMEtTd2djSEpsZG1WdWRFUmxabUYxYkhRcE8xeHVJQ0FnSUgxY2JseHVJQ0FnSUhSb2FYTXVhVzV3ZFhSUFptWnpaWFFnUFNCN2ZUdGNiaUFnSUNCMGFHbHpMbWx1Y0hWMFQzSnBaMmx1SUQwZ2V5QXVMaTUwYUdsekxtbHVjSFYwTG5OMFlYUmxJSDA3WEc0Z0lDQWdkR2hwY3k1cGJuQjFkQzV6ZEdGeWRDZ3BPMXh1WEc0Z0lDQWdjbVYwZFhKdUlIUm9hWE03WEc0Z0lIMWNibHh1SUNCemRHOXdLQ2tnZTF4dUlDQWdJSE4xY0dWeUxuTjBiM0FvS1R0Y2JpQWdJQ0IwYUdsekxtbHVjSFYwTG5OMGIzQW9LVHRjYmx4dUlDQWdJSEpsZEhWeWJpQjBhR2x6TzF4dUlDQjlYRzVjYmlBZ2IyNVZjR1JoZEdVb2RISmhZMnNzSUdaeVlXMWxVM1JoYlhBc0lHVnNZWEJ6WldRcElIdGNiaUFnSUNCMGFHbHpMbWx1Y0hWMFQyWm1jMlYwSUQwZ2IyWm1jMlYwS0hSb2FYTXVhVzV3ZFhSUGNtbG5hVzRzSUhSb2FYTXVhVzV3ZFhRdWMzUmhkR1VwTzF4dVhHNGdJQ0FnWm05eUlDaHNaWFFnYVNBOUlEQTdJR2tnUENCMGFHbHpMbTUxYlZaaGJIVmxTMlY1Y3pzZ2FTc3JLU0I3WEc0Z0lDQWdJQ0JqYjI1emRDQnJaWGtnUFNCMGFHbHpMblpoYkhWbFMyVjVjMXRwWFR0Y2JseHVJQ0FnSUNBZ2FXWWdLSFJvYVhNdWFXNXdkWFJQWm1aelpYUXVhR0Z6VDNkdVVISnZjR1Z5ZEhrb2EyVjVLU2tnZTF4dUlDQWdJQ0FnSUNCamIyNXpkQ0IyWVd4MVpTQTlJSFJvYVhNdWRtRnNkV1Z6VzJ0bGVWMDdYRzRnSUNBZ0lDQWdJR052Ym5OMElHbHVjSFYwVUhKdmNDQTlJSFpoYkhWbExtaGhjMDkzYmxCeWIzQmxjblI1S0NkM1lYUmphQ2NwSUQ4Z2RtRnNkV1V1ZDJGMFkyZ2dPaUJyWlhrN1hHNWNiaUFnSUNBZ0lDQWdhV1lnS0haaGJIVmxMbVJwY21WamRDa2dlMXh1SUNBZ0lDQWdJQ0FnSUhaaGJIVmxMbU4xY25KbGJuUWdQU0IwYUdsekxtbHVjSFYwTG5OMFlYUmxXMmx1Y0hWMFVISnZjRjA3WEc0Z0lDQWdJQ0FnSUgwZ1pXeHpaU0I3WEc0Z0lDQWdJQ0FnSUNBZ2RtRnNkV1V1WTNWeWNtVnVkQ0E5SUhaaGJIVmxMbVp5YjIwZ0t5QjBhR2x6TG1sdWNIVjBUMlptYzJWMFcybHVjSFYwVUhKdmNGMDdYRzRnSUNBZ0lDQWdJSDFjYmx4dUlDQWdJQ0FnSUNBdkx5QlRiVzl2ZEdnZ2RtRnNkV1VnYVdZZ2QyVWdhR0YyWlNCemJXOXZkR2hwYm1kY2JpQWdJQ0FnSUNBZ2FXWWdLSFpoYkhWbExuTnRiMjkwYUNrZ2UxeHVJQ0FnSUNBZ0lDQWdJSFpoYkhWbExtTjFjbkpsYm5RZ1BTQnpiVzl2ZEdnb2RtRnNkV1V1WTNWeWNtVnVkQ3dnZG1Gc2RXVXVjSEpsZGl3Z1pXeGhjSE5sWkN3Z2RtRnNkV1V1YzIxdmIzUm9LVHRjYmlBZ0lDQWdJQ0FnZlZ4dUlDQWdJQ0FnZlZ4dUlDQWdJSDFjYmlBZ2ZWeHVmVnh1WEc1VWNtRmpheTV3Y205MGIzUjVjR1V1WkdWbVlYVnNkRlpoYkhWbFVISnZjQ0E5SUNkM1lYUmphQ2M3WEc1VWNtRmpheTV3Y205MGIzUjVjR1V1WkdWbVlYVnNkRlpoYkhWbElEMGdRV04wYVc5dUxtVjRkR1Z1WkVSbFptRjFiSFJXWVd4MVpTaDdYRzRnSUdScGNtVmpkRG9nWm1Gc2MyVXNYRzRnSUdaeWIyMDZJREJjYm4wcE8xeHVYRzVsZUhCdmNuUWdaR1ZtWVhWc2RDQlVjbUZqYXp0Y2JpSmRmUT09XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9hY3Rpb25zL1RyYWNrLmpzXG4gKiogbW9kdWxlIGlkID0gN1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9O1xuXG52YXIgX2xvb3AgPSByZXF1aXJlKCcuL2xvb3AnKTtcblxudmFyIGxvb3AgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChfbG9vcCk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKG9iaikgeyBpZiAob2JqICYmIG9iai5fX2VzTW9kdWxlKSB7IHJldHVybiBvYmo7IH0gZWxzZSB7IHZhciBuZXdPYmogPSB7fTsgaWYgKG9iaiAhPSBudWxsKSB7IGZvciAodmFyIGtleSBpbiBvYmopIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGtleSkpIG5ld09ialtrZXldID0gb2JqW2tleV07IH0gfSBuZXdPYmouZGVmYXVsdCA9IG9iajsgcmV0dXJuIG5ld09iajsgfSB9XG5cbmZ1bmN0aW9uIF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhvYmosIGtleXMpIHsgdmFyIHRhcmdldCA9IHt9OyBmb3IgKHZhciBpIGluIG9iaikgeyBpZiAoa2V5cy5pbmRleE9mKGkpID49IDApIGNvbnRpbnVlOyBpZiAoIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGkpKSBjb250aW51ZTsgdGFyZ2V0W2ldID0gb2JqW2ldOyB9IHJldHVybiB0YXJnZXQ7IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH0gLypcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEJhc2UgVGFzayBjbGFzcyBmb3IgY3JlYXRpbmcgYSB0YXNrIG9uIHRoZSBtYWluIHJlbmRlciBsb29wLlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICovXG5cblxuZnVuY3Rpb24gY2xlYW51cCgpIHtcbiAgdGhpcy5vbkNsZWFudXAgPSB1bmRlZmluZWQ7XG4gIGxvb3AuZGVhY3RpdmF0ZSh0aGlzLmlkKTtcbn1cblxuZnVuY3Rpb24gYWN0aXZhdGUoKSB7XG4gIHRoaXMub25DbGVhbnVwID0gY2xlYW51cDtcbn1cblxudmFyIFRhc2sgPSBmdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIFRhc2socHJvcHMpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgVGFzayk7XG5cbiAgICB0aGlzLmlkID0gbG9vcC5nZXRUYXNrSWQoKTtcbiAgICB0aGlzLmlzQWN0aXZlID0gZmFsc2U7XG5cbiAgICBpZiAodGhpcy5kZWZhdWx0UHJvcHMpIHtcbiAgICAgIGZvciAodmFyIGtleSBpbiB0aGlzLmRlZmF1bHRQcm9wcykge1xuICAgICAgICBpZiAodGhpcy5kZWZhdWx0UHJvcHMuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgIHRoaXNba2V5XSA9IHRoaXMuZGVmYXVsdFByb3BzW2tleV07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLnNldChwcm9wcyk7XG4gIH1cblxuICBUYXNrLnByb3RvdHlwZS5zZXQgPSBmdW5jdGlvbiBzZXQocHJvcHMpIHtcbiAgICBmb3IgKHZhciBrZXkgaW4gcHJvcHMpIHtcbiAgICAgIGlmIChwcm9wcy5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgIHRoaXNba2V5XSA9IHByb3BzW2tleV07XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgVGFzay5wcm90b3R5cGUuc3RhcnQgPSBmdW5jdGlvbiBzdGFydCgpIHtcbiAgICBsb29wLmFjdGl2YXRlKHRoaXMuaWQsIHRoaXMpO1xuXG4gICAgdGhpcy5vbkFjdGl2YXRlTG9vcCA9IHRoaXMub25DbGVhbnVwID0gdW5kZWZpbmVkO1xuICAgIHRoaXMuaXNDb21wbGV0ZSA9IGZhbHNlO1xuXG4gICAgaWYgKHRoaXMub25TdGFydCkge1xuICAgICAgdGhpcy5vblN0YXJ0KHRoaXMpO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIFRhc2sucHJvdG90eXBlLnN0b3AgPSBmdW5jdGlvbiBzdG9wKCkge1xuICAgIGxvb3AuZGVhY3RpdmF0ZSh0aGlzLmlkKTtcblxuICAgIGlmICh0aGlzLm9uU3RvcCkge1xuICAgICAgdGhpcy5vblN0b3AodGhpcyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgVGFzay5wcm90b3R5cGUub25jZSA9IGZ1bmN0aW9uIG9uY2UoKSB7XG4gICAgbG9vcC5hY3RpdmF0ZSh0aGlzLmlkLCB0aGlzKTtcbiAgICB0aGlzLm9uQ2xlYW51cCA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLm9uQWN0aXZhdGVMb29wID0gYWN0aXZhdGU7XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICBUYXNrLnByb3RvdHlwZS5jb21wbGV0ZSA9IGZ1bmN0aW9uIGNvbXBsZXRlKCkge1xuICAgIHRoaXMuc3RvcCgpO1xuXG4gICAgaWYgKHRoaXMub25Db21wbGV0ZSkge1xuICAgICAgdGhpcy5vbkNvbXBsZXRlKHRoaXMpO1xuICAgIH1cbiAgfTtcblxuICAvKlxuICAgICMgRXh0ZW5kIHRoaXMgUHJvY2VzcyB3aXRoIG5ldyBwcm9wZXJ0aWVzXG4gICAgIyMgUmV0dXJucyBuZXcgaW5zdGFuY2Ugb2YgdGhpcyBQcm9jZXNzJ3MgYHByb3RvdHlwZWAgd2l0aCBleGlzdGluZyBhbmQgbmV3IHByb3BlcnRpZXNcbiAgICAgQHBhcmFtIFtvYmplY3RdIChvcHRpb25hbClcbiAgICBAcmV0dXJuIFtQcm9jZXNzXVxuICAqL1xuXG5cbiAgVGFzay5wcm90b3R5cGUuaW5oZXJpdCA9IGZ1bmN0aW9uIGluaGVyaXQocHJvcHMpIHtcbiAgICB2YXIgaWQgPSB0aGlzLmlkO1xuXG4gICAgdmFyIGluaGVyaXRlZFByb3BzID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKHRoaXMsIFsnaWQnXSk7XG5cbiAgICByZXR1cm4gbmV3IHRoaXMuY29uc3RydWN0b3IoX2V4dGVuZHMoe30sIGluaGVyaXRlZFByb3BzLCBwcm9wcykpO1xuICB9O1xuXG4gIHJldHVybiBUYXNrO1xufSgpO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBUYXNrO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluTnlZeTkwWVhOckwxUmhjMnN1YW5NaVhTd2libUZ0WlhNaU9sdGRMQ0p0WVhCd2FXNW5jeUk2SWpzN096czdPMEZCUjBFN08wbEJRVms3T3pzN096czdPenM3TzBGQlJWb3NVMEZCVXl4UFFVRlVMRWRCUVcxQ08wRkJRMnBDTEU5QlFVc3NVMEZCVEN4SFFVRnBRaXhUUVVGcVFpeERRVVJwUWp0QlFVVnFRaXhQUVVGTExGVkJRVXdzUTBGQlowSXNTMEZCU3l4RlFVRk1MRU5CUVdoQ0xFTkJSbWxDTzBOQlFXNUNPenRCUVV0QkxGTkJRVk1zVVVGQlZDeEhRVUZ2UWp0QlFVTnNRaXhQUVVGTExGTkJRVXdzUjBGQmFVSXNUMEZCYWtJc1EwRkVhMEk3UTBGQmNFSTdPMGxCU1hGQ08wRkJRMjVDTEZkQlJHMUNMRWxCUTI1Q0xFTkJRVmtzUzBGQldpeEZRVUZ0UWpzd1FrRkVRU3hOUVVOQk96dEJRVU5xUWl4VFFVRkxMRVZCUVV3c1IwRkJWU3hMUVVGTExGTkJRVXdzUlVGQlZpeERRVVJwUWp0QlFVVnFRaXhUUVVGTExGRkJRVXdzUjBGQlowSXNTMEZCYUVJc1EwRkdhVUk3TzBGQlNXcENMRkZCUVVrc1MwRkJTeXhaUVVGTUxFVkJRVzFDTzBGQlEzSkNMRmRCUVVzc1NVRkJTU3hIUVVGS0xFbEJRVmNzUzBGQlN5eFpRVUZNTEVWQlFXMUNPMEZCUTJwRExGbEJRVWtzUzBGQlN5eFpRVUZNTEVOQlFXdENMR05CUVd4Q0xFTkJRV2xETEVkQlFXcERMRU5CUVVvc1JVRkJNa003UVVGRGVrTXNaVUZCU3l4SFFVRk1MRWxCUVZrc1MwRkJTeXhaUVVGTUxFTkJRV3RDTEVkQlFXeENMRU5CUVZvc1EwRkVlVU03VTBGQk0wTTdUMEZFUmp0TFFVUkdPenRCUVZGQkxGTkJRVXNzUjBGQlRDeERRVUZUTEV0QlFWUXNSVUZhYVVJN1IwRkJia0k3TzBGQlJHMUNMR2xDUVdkQ2JrSXNiVUpCUVVrc1QwRkJUenRCUVVOVUxGTkJRVXNzU1VGQlNTeEhRVUZLTEVsQlFWY3NTMEZCYUVJc1JVRkJkVUk3UVVGRGNrSXNWVUZCU1N4TlFVRk5MR05CUVU0c1EwRkJjVUlzUjBGQmNrSXNRMEZCU2l4RlFVRXJRanRCUVVNM1FpeGhRVUZMTEVkQlFVd3NTVUZCV1N4TlFVRk5MRWRCUVU0c1EwRkJXaXhEUVVRMlFqdFBRVUV2UWp0TFFVUkdPenRCUVUxQkxGZEJRVThzU1VGQlVDeERRVkJUT3pzN1FVRm9RbEVzYVVKQk1FSnVRaXg1UWtGQlVUdEJRVU5PTEZOQlFVc3NVVUZCVEN4RFFVRmpMRXRCUVVzc1JVRkJUQ3hGUVVGVExFbEJRWFpDTEVWQlJFMDdPMEZCUjA0c1UwRkJTeXhqUVVGTUxFZEJRWE5DTEV0QlFVc3NVMEZCVEN4SFFVRnBRaXhUUVVGcVFpeERRVWhvUWp0QlFVbE9MRk5CUVVzc1ZVRkJUQ3hIUVVGclFpeExRVUZzUWl4RFFVcE5PenRCUVUxT0xGRkJRVWtzUzBGQlN5eFBRVUZNTEVWQlFXTTdRVUZEYUVJc1YwRkJTeXhQUVVGTUxFTkJRV0VzU1VGQllpeEZRVVJuUWp0TFFVRnNRanM3UVVGSlFTeFhRVUZQTEVsQlFWQXNRMEZXVFRzN08wRkJNVUpYTEdsQ1FYVkRia0lzZFVKQlFVODdRVUZEVEN4VFFVRkxMRlZCUVV3c1EwRkJaMElzUzBGQlN5eEZRVUZNTEVOQlFXaENMRU5CUkVzN08wRkJSMHdzVVVGQlNTeExRVUZMTEUxQlFVd3NSVUZCWVR0QlFVTm1MRmRCUVVzc1RVRkJUQ3hEUVVGWkxFbEJRVm9zUlVGRVpUdExRVUZxUWpzN1FVRkpRU3hYUVVGUExFbEJRVkFzUTBGUVN6czdPMEZCZGtOWkxHbENRV2xFYmtJc2RVSkJRVTg3UVVGRFRDeFRRVUZMTEZGQlFVd3NRMEZCWXl4TFFVRkxMRVZCUVV3c1JVRkJVeXhKUVVGMlFpeEZRVVJMTzBGQlJVd3NVMEZCU3l4VFFVRk1MRWRCUVdsQ0xGTkJRV3BDTEVOQlJrczdRVUZIVEN4VFFVRkxMR05CUVV3c1IwRkJjMElzVVVGQmRFSXNRMEZJU3pzN1FVRkxUQ3hYUVVGUExFbEJRVkFzUTBGTVN6czdPMEZCYWtSWkxHbENRWGxFYmtJc0swSkJRVmM3UVVGRFZDeFRRVUZMTEVsQlFVd3NSMEZFVXpzN1FVRkhWQ3hSUVVGSkxFdEJRVXNzVlVGQlRDeEZRVUZwUWp0QlFVTnVRaXhYUVVGTExGVkJRVXdzUTBGQlowSXNTVUZCYUVJc1JVRkViVUk3UzBGQmNrSTdPenM3T3pzN096czdPMEZCTlVScFFpeHBRa0YzUlc1Q0xESkNRVUZSTEU5QlFVODdVVUZEVEN4TFFVRXdRaXhMUVVFeFFpeEhRVVJMT3p0UlFVTkZMREJEUVVGdFFpeGpRVVJ5UWpzN1FVRkZZaXhYUVVGUExFbEJRVWtzUzBGQlN5eFhRVUZNTEdOQlFYTkNMR2RDUVVGdFFpeE5RVUUzUXl4RFFVRlFMRU5CUm1FN096dFRRWGhGU1NJc0ltWnBiR1VpT2lKVVlYTnJMbXB6SWl3aWMyOTFjbU5sVW05dmRDSTZJaTlWYzJWeWN5OU5ZWFIwTDFOcGRHVnpMM0J2Y0cxdmRHbHZiaUlzSW5OdmRYSmpaWE5EYjI1MFpXNTBJanBiSWk4cVhHNGdJRUpoYzJVZ1ZHRnpheUJqYkdGemN5Qm1iM0lnWTNKbFlYUnBibWNnWVNCMFlYTnJJRzl1SUhSb1pTQnRZV2x1SUhKbGJtUmxjaUJzYjI5d0xseHVLaTljYm1sdGNHOXlkQ0FxSUdGeklHeHZiM0FnWm5KdmJTQW5MaTlzYjI5d0p6dGNibHh1Wm5WdVkzUnBiMjRnWTJ4bFlXNTFjQ2dwSUh0Y2JpQWdkR2hwY3k1dmJrTnNaV0Z1ZFhBZ1BTQjFibVJsWm1sdVpXUTdYRzRnSUd4dmIzQXVaR1ZoWTNScGRtRjBaU2gwYUdsekxtbGtLVHRjYm4xY2JseHVablZ1WTNScGIyNGdZV04wYVhaaGRHVW9LU0I3WEc0Z0lIUm9hWE11YjI1RGJHVmhiblZ3SUQwZ1kyeGxZVzUxY0R0Y2JuMWNibHh1Wlhod2IzSjBJR1JsWm1GMWJIUWdZMnhoYzNNZ1ZHRnpheUI3WEc0Z0lHTnZibk4wY25WamRHOXlLSEJ5YjNCektTQjdYRzRnSUNBZ2RHaHBjeTVwWkNBOUlHeHZiM0F1WjJWMFZHRnphMGxrS0NrN1hHNGdJQ0FnZEdocGN5NXBjMEZqZEdsMlpTQTlJR1poYkhObE8xeHVYRzRnSUNBZ2FXWWdLSFJvYVhNdVpHVm1ZWFZzZEZCeWIzQnpLU0I3WEc0Z0lDQWdJQ0JtYjNJZ0tHeGxkQ0JyWlhrZ2FXNGdkR2hwY3k1a1pXWmhkV3gwVUhKdmNITXBJSHRjYmlBZ0lDQWdJQ0FnYVdZZ0tIUm9hWE11WkdWbVlYVnNkRkJ5YjNCekxtaGhjMDkzYmxCeWIzQmxjblI1S0d0bGVTa3BJSHRjYmlBZ0lDQWdJQ0FnSUNCMGFHbHpXMnRsZVYwZ1BTQjBhR2x6TG1SbFptRjFiSFJRY205d2MxdHJaWGxkTzF4dUlDQWdJQ0FnSUNCOVhHNGdJQ0FnSUNCOVhHNGdJQ0FnZlZ4dVhHNGdJQ0FnZEdocGN5NXpaWFFvY0hKdmNITXBPMXh1SUNCOVhHNWNiaUFnYzJWMEtIQnliM0J6S1NCN1hHNGdJQ0FnWm05eUlDaHNaWFFnYTJWNUlHbHVJSEJ5YjNCektTQjdYRzRnSUNBZ0lDQnBaaUFvY0hKdmNITXVhR0Z6VDNkdVVISnZjR1Z5ZEhrb2EyVjVLU2tnZTF4dUlDQWdJQ0FnSUNCMGFHbHpXMnRsZVYwZ1BTQndjbTl3YzF0clpYbGRPMXh1SUNBZ0lDQWdmVnh1SUNBZ0lIMWNibHh1SUNBZ0lISmxkSFZ5YmlCMGFHbHpPMXh1SUNCOVhHNWNiaUFnYzNSaGNuUW9LU0I3WEc0Z0lDQWdiRzl2Y0M1aFkzUnBkbUYwWlNoMGFHbHpMbWxrTENCMGFHbHpLVHRjYmx4dUlDQWdJSFJvYVhNdWIyNUJZM1JwZG1GMFpVeHZiM0FnUFNCMGFHbHpMbTl1UTJ4bFlXNTFjQ0E5SUhWdVpHVm1hVzVsWkR0Y2JpQWdJQ0IwYUdsekxtbHpRMjl0Y0d4bGRHVWdQU0JtWVd4elpUdGNibHh1SUNBZ0lHbG1JQ2gwYUdsekxtOXVVM1JoY25RcElIdGNiaUFnSUNBZ0lIUm9hWE11YjI1VGRHRnlkQ2gwYUdsektUdGNiaUFnSUNCOVhHNWNiaUFnSUNCeVpYUjFjbTRnZEdocGN6dGNiaUFnZlZ4dVhHNGdJSE4wYjNBb0tTQjdYRzRnSUNBZ2JHOXZjQzVrWldGamRHbDJZWFJsS0hSb2FYTXVhV1FwTzF4dUlDQWdJRnh1SUNBZ0lHbG1JQ2gwYUdsekxtOXVVM1J2Y0NrZ2UxeHVJQ0FnSUNBZ2RHaHBjeTV2YmxOMGIzQW9kR2hwY3lrN1hHNGdJQ0FnZlZ4dVhHNGdJQ0FnY21WMGRYSnVJSFJvYVhNN1hHNGdJSDFjYmx4dUlDQnZibU5sS0NrZ2UxeHVJQ0FnSUd4dmIzQXVZV04wYVhaaGRHVW9kR2hwY3k1cFpDd2dkR2hwY3lrN1hHNGdJQ0FnZEdocGN5NXZia05zWldGdWRYQWdQU0IxYm1SbFptbHVaV1E3WEc0Z0lDQWdkR2hwY3k1dmJrRmpkR2wyWVhSbFRHOXZjQ0E5SUdGamRHbDJZWFJsTzF4dVhHNGdJQ0FnY21WMGRYSnVJSFJvYVhNN1hHNGdJSDFjYmx4dUlDQmpiMjF3YkdWMFpTZ3BJSHRjYmlBZ0lDQjBhR2x6TG5OMGIzQW9LVHRjYmx4dUlDQWdJR2xtSUNoMGFHbHpMbTl1UTI5dGNHeGxkR1VwSUh0Y2JpQWdJQ0FnSUhSb2FYTXViMjVEYjIxd2JHVjBaU2gwYUdsektUdGNiaUFnSUNCOVhHNGdJSDFjYmx4dUlDQXZLbHh1SUNBZ0lDTWdSWGgwWlc1a0lIUm9hWE1nVUhKdlkyVnpjeUIzYVhSb0lHNWxkeUJ3Y205d1pYSjBhV1Z6WEc0Z0lDQWdJeU1nVW1WMGRYSnVjeUJ1WlhjZ2FXNXpkR0Z1WTJVZ2IyWWdkR2hwY3lCUWNtOWpaWE56SjNNZ1lIQnliM1J2ZEhsd1pXQWdkMmwwYUNCbGVHbHpkR2x1WnlCaGJtUWdibVYzSUhCeWIzQmxjblJwWlhOY2JseHVJQ0FnSUVCd1lYSmhiU0JiYjJKcVpXTjBYU0FvYjNCMGFXOXVZV3dwWEc0Z0lDQWdRSEpsZEhWeWJpQmJVSEp2WTJWemMxMWNiaUFnS2k5Y2JpQWdhVzVvWlhKcGRDaHdjbTl3Y3lrZ2UxeHVJQ0FnSUdOdmJuTjBJSHNnYVdRc0lDNHVMbWx1YUdWeWFYUmxaRkJ5YjNCeklIMGdQU0IwYUdsek8xeHVJQ0FnSUhKbGRIVnliaUJ1WlhjZ2RHaHBjeTVqYjI1emRISjFZM1J2Y2loN0lDNHVMbWx1YUdWeWFYUmxaRkJ5YjNCekxDQXVMaTV3Y205d2N5QjlLVHRjYmlBZ2ZWeHVmU0pkZlE9PVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvdGFzay9UYXNrLmpzXG4gKiogbW9kdWxlIGlkID0gOFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9O1xuXG52YXIgX1Rhc2syID0gcmVxdWlyZSgnLi4vdGFzay9UYXNrJyk7XG5cbnZhciBfVGFzazMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9UYXNrMik7XG5cbnZhciBfdXRpbHMgPSByZXF1aXJlKCcuLi9pbmMvdXRpbHMnKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoIXNlbGYpIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBjYWxsICYmICh0eXBlb2YgY2FsbCA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSA/IGNhbGwgOiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90IFwiICsgdHlwZW9mIHN1cGVyQ2xhc3MpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIGVudW1lcmFibGU6IGZhbHNlLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIDogc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzczsgfVxuXG52YXIgSW5wdXQgPSBmdW5jdGlvbiAoX1Rhc2spIHtcbiAgX2luaGVyaXRzKElucHV0LCBfVGFzayk7XG5cbiAgZnVuY3Rpb24gSW5wdXQoaW5pdGlhbFZhbHVlcywgcG9sbCkge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBJbnB1dCk7XG5cbiAgICB2YXIgX3RoaXMgPSBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCBfVGFzay5jYWxsKHRoaXMpKTtcblxuICAgIF90aGlzLnN0YXRlID0gaW5pdGlhbFZhbHVlcztcblxuICAgIGlmICgoMCwgX3V0aWxzLmlzRnVuYykocG9sbCkpIHtcbiAgICAgIF90aGlzLm9uRnJhbWVTdGFydCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIF90aGlzLmxhdGVzdChfdGhpcy5wb2xsKCkpO1xuICAgICAgfTtcbiAgICB9XG4gICAgcmV0dXJuIF90aGlzO1xuICB9XG5cbiAgLypcbiAgICBNYW51YWxseSBhZGQgbGF0ZXN0IHZhbHVlc1xuICAgICBAcGFyYW0gW29iamVjdF1cbiAgKi9cblxuXG4gIElucHV0LnByb3RvdHlwZS5sYXRlc3QgPSBmdW5jdGlvbiBsYXRlc3QocHJvcHMpIHtcbiAgICB0aGlzLnN0YXRlID0gX2V4dGVuZHMoe30sIHRoaXMuc3RhdGUsIHByb3BzKTtcbiAgfTtcblxuICByZXR1cm4gSW5wdXQ7XG59KF9UYXNrMy5kZWZhdWx0KTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gSW5wdXQ7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5OeVl5OXBibkIxZEM5SmJuQjFkQzVxY3lKZExDSnVZVzFsY3lJNlcxMHNJbTFoY0hCcGJtZHpJam9pT3pzN096czdRVUZCUVRzN096dEJRVU5CT3pzN096czdPenM3TzBsQlJYRkNPenM3UVVGRGJrSXNWMEZFYlVJc1MwRkRia0lzUTBGQldTeGhRVUZhTEVWQlFUSkNMRWxCUVROQ0xFVkJRV2xET3pCQ1FVUmtMRTlCUTJNN08ybEVRVU12UWl4clFrRkVLMEk3TzBGQlJTOUNMRlZCUVVzc1MwRkJUQ3hIUVVGaExHRkJRV0lzUTBGR0swSTdPMEZCU1M5Q0xGRkJRVWtzYlVKQlFVOHNTVUZCVUN4RFFVRktMRVZCUVd0Q08wRkJRMmhDTEZsQlFVc3NXVUZCVEN4SFFVRnZRanRsUVVGTkxFMUJRVXNzVFVGQlRDeERRVUZaTEUxQlFVc3NTVUZCVEN4RlFVRmFPMDlCUVU0c1EwRkVTanRMUVVGc1FqdHBRa0ZLSzBJN1IwRkJha003T3pzN096czdPMEZCUkcxQ0xHdENRV1Z1UWl4NVFrRkJUeXhQUVVGUE8wRkJRMW9zVTBGQlN5eExRVUZNTEdkQ1FVRnJRaXhMUVVGTExFdEJRVXdzUlVGQlpTeE5RVUZxUXl4RFFVUlpPenM3VTBGbVN5SXNJbVpwYkdVaU9pSkpibkIxZEM1cWN5SXNJbk52ZFhKalpWSnZiM1FpT2lJdlZYTmxjbk12VFdGMGRDOVRhWFJsY3k5d2IzQnRiM1JwYjI0aUxDSnpiM1Z5WTJWelEyOXVkR1Z1ZENJNld5SnBiWEJ2Y25RZ1ZHRnpheUJtY205dElDY3VMaTkwWVhOckwxUmhjMnNuTzF4dWFXMXdiM0owSUhzZ2FYTkdkVzVqSUgwZ1puSnZiU0FuTGk0dmFXNWpMM1YwYVd4ekp6dGNibHh1Wlhod2IzSjBJR1JsWm1GMWJIUWdZMnhoYzNNZ1NXNXdkWFFnWlhoMFpXNWtjeUJVWVhOcklIdGNiaUFnWTI5dWMzUnlkV04wYjNJb2FXNXBkR2xoYkZaaGJIVmxjeXdnY0c5c2JDa2dlMXh1SUNBZ0lITjFjR1Z5S0NrN1hHNGdJQ0FnZEdocGN5NXpkR0YwWlNBOUlHbHVhWFJwWVd4V1lXeDFaWE03WEc1Y2JpQWdJQ0JwWmlBb2FYTkdkVzVqS0hCdmJHd3BLU0I3WEc0Z0lDQWdJQ0IwYUdsekxtOXVSbkpoYldWVGRHRnlkQ0E5SUNncElEMCtJSFJvYVhNdWJHRjBaWE4wS0hSb2FYTXVjRzlzYkNncEtUdGNiaUFnSUNCOVhHNGdJSDFjYmx4dUlDQXZLbHh1SUNBZ0lFMWhiblZoYkd4NUlHRmtaQ0JzWVhSbGMzUWdkbUZzZFdWelhHNWNiaUFnSUNCQWNHRnlZVzBnVzI5aWFtVmpkRjFjYmlBZ0tpOWNiaUFnYkdGMFpYTjBLSEJ5YjNCektTQjdYRzRnSUNBZ2RHaHBjeTV6ZEdGMFpTQTlJSHNnTGk0dWRHaHBjeTV6ZEdGMFpTd2dMaTR1Y0hKdmNITWdmVHRjYmlBZ2ZWeHVmVnh1SWwxOVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvaW5wdXQvSW5wdXQuanNcbiAqKiBtb2R1bGUgaWQgPSA5XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfdGltZWxpbmUgPSByZXF1aXJlKCcuL3RpbWVsaW5lJyk7XG5cbnZhciBfdGltZWxpbmUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfdGltZWxpbmUpO1xuXG52YXIgX3V0aWxzID0gcmVxdWlyZSgnLi91dGlscycpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG52YXIgREVGQVVMVF9JTlRFUlZBTCA9IDEwMDtcblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gKHR3ZWVucywgcHJvcHMpIHtcbiAgdmFyIHByb3BzSXNEdXJhdGlvbiA9ICgwLCBfdXRpbHMuaXNOdW0pKHByb3BzKTtcbiAgdmFyIGludGVydmFsID0gcHJvcHNJc0R1cmF0aW9uID8gcHJvcHMgOiBwcm9wcyA/IHByb3BzLmludGVydmFsIHx8IERFRkFVTFRfSU5URVJWQUwgOiBERUZBVUxUX0lOVEVSVkFMO1xuICB2YXIgYXQgPSAwO1xuICB2YXIgdGltZWxpbmVEZWZpbml0aW9uID0gdHdlZW5zLm1hcChmdW5jdGlvbiAodHdlZW4pIHtcbiAgICB2YXIgZGVmID0geyB0d2VlbjogdHdlZW4sIGF0OiBhdCB9O1xuICAgIGF0ICs9IGludGVydmFsO1xuICAgIHJldHVybiBkZWY7XG4gIH0pO1xuXG4gIHJldHVybiAoMCwgX3RpbWVsaW5lMi5kZWZhdWx0KSh0aW1lbGluZURlZmluaXRpb24sIHByb3BzKTtcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5OeVl5OXBibU12YzNSaFoyZGxjaTVxY3lKZExDSnVZVzFsY3lJNlcxMHNJbTFoY0hCcGJtZHpJam9pT3pzN08wRkJRVUU3T3pzN1FVRkRRVHM3T3p0QlFVVkJMRWxCUVUwc2JVSkJRVzFDTEVkQlFXNUNPenRyUWtGRlV5eFZRVUZETEUxQlFVUXNSVUZCVXl4TFFVRlVMRVZCUVcxQ08wRkJRMmhETEUxQlFVMHNhMEpCUVd0Q0xHdENRVUZOTEV0QlFVNHNRMEZCYkVJc1EwRkVNRUk3UVVGRmFFTXNUVUZCVFN4WFFVRlhMR3RDUVVGclFpeExRVUZzUWl4SFFVRXdRaXhSUVVGUkxFMUJRVTBzVVVGQlRpeEpRVUZyUWl4blFrRkJiRUlzUjBGQmNVTXNaMEpCUVRkRExFTkJSbGc3UVVGSGFFTXNUVUZCU1N4TFFVRkxMRU5CUVV3c1EwRklORUk3UVVGSmFFTXNUVUZCVFN4eFFrRkJjVUlzVDBGQlR5eEhRVUZRTEVOQlFWY3NWVUZCUXl4TFFVRkVMRVZCUVZjN1FVRkRMME1zVVVGQlRTeE5RVUZOTEVWQlFVVXNXVUZCUml4RlFVRlRMRTFCUVZRc1JVRkJUaXhEUVVSNVF6dEJRVVV2UXl4VlFVRk5MRkZCUVU0c1EwRkdLME03UVVGSEwwTXNWMEZCVHl4SFFVRlFMRU5CU0N0RE8wZEJRVmdzUTBGQmFFTXNRMEZLTUVJN08wRkJWV2hETEZOQlFVOHNkMEpCUVZNc2EwSkJRVlFzUlVGQk5rSXNTMEZCTjBJc1EwRkJVQ3hEUVZablF6dERRVUZ1UWlJc0ltWnBiR1VpT2lKemRHRm5aMlZ5TG1weklpd2ljMjkxY21ObFVtOXZkQ0k2SWk5VmMyVnljeTlOWVhSMEwxTnBkR1Z6TDNCdmNHMXZkR2x2YmlJc0luTnZkWEpqWlhORGIyNTBaVzUwSWpwYkltbHRjRzl5ZENCMGFXMWxiR2x1WlNCbWNtOXRJQ2N1TDNScGJXVnNhVzVsSnp0Y2JtbHRjRzl5ZENCN0lHbHpUblZ0SUgwZ1puSnZiU0FuTGk5MWRHbHNjeWM3WEc1Y2JtTnZibk4wSUVSRlJrRlZURlJmU1U1VVJWSldRVXdnUFNBeE1EQTdYRzVjYm1WNGNHOXlkQ0JrWldaaGRXeDBJQ2gwZDJWbGJuTXNJSEJ5YjNCektTQTlQaUI3WEc0Z0lHTnZibk4wSUhCeWIzQnpTWE5FZFhKaGRHbHZiaUE5SUdselRuVnRLSEJ5YjNCektUdGNiaUFnWTI5dWMzUWdhVzUwWlhKMllXd2dQU0J3Y205d2MwbHpSSFZ5WVhScGIyNGdQeUJ3Y205d2N5QTZJSEJ5YjNCeklEOGdjSEp2Y0hNdWFXNTBaWEoyWVd3Z2ZId2dSRVZHUVZWTVZGOUpUbFJGVWxaQlRDQTZJRVJGUmtGVlRGUmZTVTVVUlZKV1FVdzdYRzRnSUd4bGRDQmhkQ0E5SURBN1hHNGdJR052Ym5OMElIUnBiV1ZzYVc1bFJHVm1hVzVwZEdsdmJpQTlJSFIzWldWdWN5NXRZWEFvS0hSM1pXVnVLU0E5UGlCN1hHNGdJQ0FnWTI5dWMzUWdaR1ZtSUQwZ2V5QjBkMlZsYml3Z1lYUWdmVHRjYmlBZ0lDQmhkQ0FyUFNCcGJuUmxjblpoYkR0Y2JpQWdJQ0J5WlhSMWNtNGdaR1ZtTzF4dUlDQjlLVHRjYmx4dUlDQnlaWFIxY200Z2RHbHRaV3hwYm1Vb2RHbHRaV3hwYm1WRVpXWnBibWwwYVc5dUxDQndjbTl3Y3lrN1hHNTlPeUpkZlE9PVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvaW5jL3N0YWdnZXIuanNcbiAqKiBtb2R1bGUgaWQgPSAxMFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9O1xuXG5leHBvcnRzLmRlZmF1bHQgPSB0aW1lbGluZTtcblxudmFyIF9Ud2VlbiA9IHJlcXVpcmUoJy4uL2FjdGlvbnMvVHdlZW4nKTtcblxudmFyIF9Ud2VlbjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9Ud2Vlbik7XG5cbnZhciBfcHJlc2V0RWFzaW5nID0gcmVxdWlyZSgnLi4vYWN0aW9ucy9lYXNpbmcvcHJlc2V0LWVhc2luZycpO1xuXG52YXIgX3ByZXNldEVhc2luZzIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9wcmVzZXRFYXNpbmcpO1xuXG52YXIgX2NhbGMgPSByZXF1aXJlKCcuL2NhbGMnKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuLypcbiAgQHBhcmFtIFthcnJheV1cbiAgICBTZXF1ZW50aWFsIGFycmF5IG9mIHR3ZWVucywgZWFjaCBpdGVtIGNhbiBiZSBhIHR3ZWVuIG9yIGRlZmluaXRpb24gb2JqOlxuXG4gICAgW1xuICAgICAgbmV3IFR3ZWVuKCksXG4gICAgICBzdGFnZ2VyKCksXG4gICAgICB0aW1lbGluZSgpLFxuICAgICAge1xuICAgICAgICB0d2VlbjogbmV3IFR3ZWVuKCksXG4gICAgICAgIGF0OiAxMDAsXG4gICAgICAgIG9mZnNldDogXCIrPTEwMFwiXG4gICAgICB9XG4gICAgXVxuKi9cbnZhciBhbmFseXplID0gZnVuY3Rpb24gKGRlZnMpIHtcbiAgdmFyIHRpbWVsaW5lID0gW107XG4gIHZhciBudW1EZWZzID0gZGVmcy5sZW5ndGg7XG4gIHZhciBjdXJyZW50UGxheWhlYWQgPSAwO1xuXG4gIHZhciBfbG9vcCA9IGZ1bmN0aW9uIChpKSB7XG4gICAgdmFyIGRlZiA9IGRlZnNbaV07XG4gICAgdmFyIGRlZklzT2JqID0gZGVmLnR3ZWVuID8gdHJ1ZSA6IGZhbHNlO1xuICAgIHZhciB0d2VlbiA9IGRlZklzT2JqID8gZGVmLnR3ZWVuIDogZGVmO1xuXG4gICAgaWYgKGRlZklzT2JqKSB7XG4gICAgICBpZiAoZGVmLm9mZnNldCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGN1cnJlbnRQbGF5aGVhZCA9ICgwLCBfY2FsYy5yZWxhdGl2ZVZhbHVlKShjdXJyZW50UGxheWhlYWQsIGRlZi5vZmZzZXQpO1xuICAgICAgfSBlbHNlIGlmIChkZWYuYXQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBjdXJyZW50UGxheWhlYWQgPSBkZWYuYXQ7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdmFyIGR1cmF0aW9uID0gMDtcbiAgICBmb3IgKHZhciBrZXkgaW4gdHdlZW4udmFsdWVzKSB7XG4gICAgICBpZiAodHdlZW4udmFsdWVzLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgdmFyIHZhbHVlID0gdHdlZW4udmFsdWVzW2tleV07XG4gICAgICAgIGR1cmF0aW9uID0gTWF0aC5tYXgoZHVyYXRpb24sIHZhbHVlLmR1cmF0aW9uKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aW1lbGluZS5wdXNoKHtcbiAgICAgIGZyb206IGN1cnJlbnRQbGF5aGVhZCxcbiAgICAgIGR1cmF0aW9uOiBkdXJhdGlvbixcbiAgICAgIGZpcmU6IGZ1bmN0aW9uICh0aW1lKSB7XG4gICAgICAgIHJldHVybiB0d2Vlbi5zZWVrVGltZSh0aW1lKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGN1cnJlbnRQbGF5aGVhZCArPSBkdXJhdGlvbjtcbiAgfTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IG51bURlZnM7IGkrKykge1xuICAgIF9sb29wKGkpO1xuICB9XG5cbiAgcmV0dXJuIHsgdG90YWxUaW1lOiBjdXJyZW50UGxheWhlYWQsIHRpbWVsaW5lOiB0aW1lbGluZSB9O1xufTtcblxudmFyIHNldFR3ZWVucyA9IGZ1bmN0aW9uIChfcmVmKSB7XG4gIHZhciB0aW1lbGluZSA9IF9yZWYudGltZWxpbmU7XG4gIHZhciB0aW1lbGluZUxlbmd0aCA9IF9yZWYudGltZWxpbmVMZW5ndGg7XG4gIHZhciB2YWx1ZXMgPSBfcmVmLnZhbHVlcztcbiAgdmFyIGR1cmF0aW9uID0gX3JlZi5kdXJhdGlvbjtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHRpbWVsaW5lTGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgX3R3ZWVuID0gdGltZWxpbmVbaV07XG4gICAgdmFyIHR3ZWVuVGltZSA9IHZhbHVlcy5wLmN1cnJlbnQgKiBkdXJhdGlvbiAtIF90d2Vlbi5mcm9tO1xuXG4gICAgaWYgKHR3ZWVuVGltZSA+PSAtNTAgJiYgdHdlZW5UaW1lIDw9IF90d2Vlbi5kdXJhdGlvbiArIDUwKSB7XG4gICAgICBfdHdlZW4uZmlyZSh0d2VlblRpbWUpO1xuICAgIH1cbiAgfVxufTtcblxuZnVuY3Rpb24gdGltZWxpbmUoZGVmKSB7XG4gIHZhciBwcm9wcyA9IGFyZ3VtZW50cy5sZW5ndGggPD0gMSB8fCBhcmd1bWVudHNbMV0gPT09IHVuZGVmaW5lZCA/IHt9IDogYXJndW1lbnRzWzFdO1xuXG4gIHZhciBfYW5hbHl6ZSA9IGFuYWx5emUoZGVmKTtcblxuICB2YXIgdG90YWxUaW1lID0gX2FuYWx5emUudG90YWxUaW1lO1xuICB2YXIgdGltZWxpbmUgPSBfYW5hbHl6ZS50aW1lbGluZTtcblxuXG4gIHJldHVybiBuZXcgX1R3ZWVuMi5kZWZhdWx0KF9leHRlbmRzKHtcbiAgICBlYXNlOiBfcHJlc2V0RWFzaW5nMi5kZWZhdWx0LmxpbmVhclxuICB9LCBwcm9wcywge1xuICAgIGR1cmF0aW9uOiB0b3RhbFRpbWUsXG4gICAgdmFsdWVzOiB7XG4gICAgICBwOiB7IGZyb206IDAsIHRvOiAxIH1cbiAgICB9LFxuICAgIHRpbWVsaW5lOiB0aW1lbGluZSxcbiAgICB0aW1lbGluZUxlbmd0aDogdGltZWxpbmUubGVuZ3RoLFxuICAgIG9uUmVuZGVyOiBzZXRUd2VlbnNcbiAgfSkpO1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluTnlZeTlwYm1NdmRHbHRaV3hwYm1VdWFuTWlYU3dpYm1GdFpYTWlPbHRkTENKdFlYQndhVzVuY3lJNklqczdPenM3TzJ0Q1FXOUZkMEk3TzBGQmNFVjRRanM3T3p0QlFVTkJPenM3TzBGQlEwRTdPenM3T3pzN096czdPenM3T3pzN096czdRVUZwUWtFc1NVRkJUU3hWUVVGVkxGVkJRVU1zU1VGQlJDeEZRVUZWTzBGQlEzaENMRTFCUVUwc1YwRkJWeXhGUVVGWUxFTkJSR3RDTzBGQlJYaENMRTFCUVUwc1ZVRkJWU3hMUVVGTExFMUJRVXdzUTBGR1VUdEJRVWQ0UWl4TlFVRkpMR3RDUVVGclFpeERRVUZzUWl4RFFVaHZRanM3ZDBKQlMyWTdRVUZEVUN4UlFVRk5MRTFCUVUwc1MwRkJTeXhEUVVGTUxFTkJRVTQ3UVVGRFRpeFJRVUZOTEZkQlFWY3NTVUZCU1N4TFFVRktMRWRCUVZrc1NVRkJXaXhIUVVGdFFpeExRVUZ1UWp0QlFVTnFRaXhSUVVGTkxGRkJRVkVzVjBGQllTeEpRVUZKTEV0QlFVb3NSMEZCV1N4SFFVRjZRanM3UVVGRlpDeFJRVUZKTEZGQlFVb3NSVUZCWXp0QlFVTmFMRlZCUVVrc1NVRkJTU3hOUVVGS0xFdEJRV1VzVTBGQlppeEZRVUV3UWp0QlFVTTFRaXd3UWtGQmEwSXNlVUpCUVdNc1pVRkJaQ3hGUVVFclFpeEpRVUZKTEUxQlFVb3NRMEZCYWtRc1EwRkVORUk3VDBGQk9VSXNUVUZGVHl4SlFVRkpMRWxCUVVrc1JVRkJTaXhMUVVGWExGTkJRVmdzUlVGQmMwSTdRVUZETDBJc01FSkJRV3RDTEVsQlFVa3NSVUZCU2l4RFFVUmhPMDlCUVRGQ08wdEJTRlE3TzBGQlVVRXNVVUZCU1N4WFFVRlhMRU5CUVZnN1FVRkRTaXhUUVVGTExFbEJRVWtzUjBGQlNpeEpRVUZYTEUxQlFVMHNUVUZCVGl4RlFVRmpPMEZCUXpWQ0xGVkJRVWtzVFVGQlRTeE5RVUZPTEVOQlFXRXNZMEZCWWl4RFFVRTBRaXhIUVVFMVFpeERRVUZLTEVWQlFYTkRPMEZCUTNCRExGbEJRVTBzVVVGQlVTeE5RVUZOTEUxQlFVNHNRMEZCWVN4SFFVRmlMRU5CUVZJc1EwRkVPRUk3UVVGRmNFTXNiVUpCUVZjc1MwRkJTeXhIUVVGTUxFTkJRVk1zVVVGQlZDeEZRVUZ0UWl4TlFVRk5MRkZCUVU0c1EwRkJPVUlzUTBGR2IwTTdUMEZCZEVNN1MwRkVSanM3UVVGUFFTeGhRVUZUTEVsQlFWUXNRMEZCWXp0QlFVTmFMRmxCUVUwc1pVRkJUanRCUVVOQkxHZENRVUZWTEZGQlFWWTdRVUZEUVN4WlFVRk5MRlZCUVVNc1NVRkJSRHRsUVVGVkxFMUJRVTBzVVVGQlRpeERRVUZsTEVsQlFXWTdUMEZCVmp0TFFVaFNPenRCUVUxQkxIVkNRVUZ0UWl4UlFVRnVRanRKUVdoRGMwSTdPMEZCUzNoQ0xFOUJRVXNzU1VGQlNTeEpRVUZKTEVOQlFVb3NSVUZCVHl4SlFVRkpMRTlCUVVvc1JVRkJZU3hIUVVFM1FpeEZRVUZyUXp0VlFVRjZRaXhIUVVGNVFqdEhRVUZzUXpzN1FVRTRRa0VzVTBGQlR5eEZRVUZGTEZkQlFWY3NaVUZCV0N4RlFVRTBRaXhyUWtGQk9VSXNSVUZCVUN4RFFXNURkMEk3UTBGQlZqczdRVUZ6UTJoQ0xFbEJRVTBzV1VGQldTeG5Ra0ZCYjBRN1RVRkJha1FzZVVKQlFXbEVPMDFCUVhaRExIRkRRVUYxUXp0TlFVRjJRaXh4UWtGQmRVSTdUVUZCWml4NVFrRkJaVHM3UVVGRGNFVXNUMEZCU3l4SlFVRkpMRWxCUVVrc1EwRkJTaXhGUVVGUExFbEJRVWtzWTBGQlNpeEZRVUZ2UWl4SFFVRndReXhGUVVGNVF6dEJRVU4yUXl4UlFVRk5MRk5CUVZFc1UwRkJVeXhEUVVGVUxFTkJRVklzUTBGRWFVTTdRVUZGZGtNc1VVRkJUU3haUVVGWkxFMUJRVU1zUTBGQlR5eERRVUZRTEVOQlFWTXNUMEZCVkN4SFFVRnRRaXhSUVVGdVFpeEhRVUVyUWl4UFFVRk5MRWxCUVU0c1EwRkdXRHM3UVVGSmRrTXNVVUZCU1N4aFFVRmhMRU5CUVVNc1JVRkJSQ3hKUVVGUExHRkJRV0VzVDBGQlRTeFJRVUZPTEVkQlFXbENMRVZCUVdwQ0xFVkJRWEZDTzBGQlEzaEVMR0ZCUVUwc1NVRkJUaXhEUVVGWExGTkJRVmdzUlVGRWQwUTdTMEZCTVVRN1IwRktSanREUVVSblFqczdRVUZYU0N4VFFVRlRMRkZCUVZRc1EwRkJhMElzUjBGQmJFSXNSVUZCYlVNN1RVRkJXaXc0UkVGQlVTeHJRa0ZCU1RzN2FVSkJRMmhDTEZGQlFWRXNSMEZCVWl4RlFVUm5RanM3VFVGRGVFTXNLMEpCUkhkRE8wMUJRemRDTERaQ1FVUTJRanM3TzBGQlIyaEVMRk5CUVU4N1FVRkRUQ3hWUVVGTkxIVkNRVUZQTEUxQlFWQTdTMEZEU0R0QlFVTklMR05CUVZVc1UwRkJWanRCUVVOQkxGbEJRVkU3UVVGRFRpeFRRVUZITEVWQlFVVXNUVUZCVFN4RFFVRk9MRVZCUVZNc1NVRkJTU3hEUVVGS0xFVkJRV1E3UzBGRVJqdEJRVWRCTEdOQlFWVXNVVUZCVmp0QlFVTkJMRzlDUVVGblFpeFRRVUZUTEUxQlFWUTdRVUZEYUVJc1kwRkJWU3hUUVVGV08wbEJWRXNzUTBGQlVDeERRVWhuUkR0RFFVRnVReUlzSW1acGJHVWlPaUowYVcxbGJHbHVaUzVxY3lJc0luTnZkWEpqWlZKdmIzUWlPaUl2VlhObGNuTXZUV0YwZEM5VGFYUmxjeTl3YjNCdGIzUnBiMjRpTENKemIzVnlZMlZ6UTI5dWRHVnVkQ0k2V3lKcGJYQnZjblFnVkhkbFpXNGdabkp2YlNBbkxpNHZZV04wYVc5dWN5OVVkMlZsYmljN1hHNXBiWEJ2Y25RZ1pXRnphVzVuSUdaeWIyMGdKeTR1TDJGamRHbHZibk12WldGemFXNW5MM0J5WlhObGRDMWxZWE5wYm1jbk8xeHVhVzF3YjNKMElIc2djbVZzWVhScGRtVldZV3gxWlNCOUlHWnliMjBnSnk0dlkyRnNZeWM3WEc1Y2JpOHFYRzRnSUVCd1lYSmhiU0JiWVhKeVlYbGRYRzRnSUNBZ1UyVnhkV1Z1ZEdsaGJDQmhjbkpoZVNCdlppQjBkMlZsYm5Nc0lHVmhZMmdnYVhSbGJTQmpZVzRnWW1VZ1lTQjBkMlZsYmlCdmNpQmtaV1pwYm1sMGFXOXVJRzlpYWpwY2JseHVJQ0FnSUZ0Y2JpQWdJQ0FnSUc1bGR5QlVkMlZsYmlncExGeHVJQ0FnSUNBZ2MzUmhaMmRsY2lncExGeHVJQ0FnSUNBZ2RHbHRaV3hwYm1Vb0tTeGNiaUFnSUNBZ0lIdGNiaUFnSUNBZ0lDQWdkSGRsWlc0NklHNWxkeUJVZDJWbGJpZ3BMRnh1SUNBZ0lDQWdJQ0JoZERvZ01UQXdMRnh1SUNBZ0lDQWdJQ0J2Wm1aelpYUTZJRndpS3oweE1EQmNJbHh1SUNBZ0lDQWdmVnh1SUNBZ0lGMWNiaW92WEc1amIyNXpkQ0JoYm1Gc2VYcGxJRDBnS0dSbFpuTXBJRDArSUh0Y2JpQWdZMjl1YzNRZ2RHbHRaV3hwYm1VZ1BTQmJYVHRjYmlBZ1kyOXVjM1FnYm5WdFJHVm1jeUE5SUdSbFpuTXViR1Z1WjNSb08xeHVJQ0JzWlhRZ1kzVnljbVZ1ZEZCc1lYbG9aV0ZrSUQwZ01EdGNibHh1SUNCbWIzSWdLR3hsZENCcElEMGdNRHNnYVNBOElHNTFiVVJsWm5NN0lHa3JLeWtnZTF4dUlDQWdJR052Ym5OMElHUmxaaUE5SUdSbFpuTmJhVjA3WEc0Z0lDQWdZMjl1YzNRZ1pHVm1TWE5QWW1vZ1BTQmtaV1l1ZEhkbFpXNGdQeUIwY25WbElEb2dabUZzYzJVN1hHNGdJQ0FnWTI5dWMzUWdkSGRsWlc0Z1BTQW9aR1ZtU1hOUFltb3BJRDhnWkdWbUxuUjNaV1Z1SURvZ1pHVm1PMXh1WEc0Z0lDQWdhV1lnS0dSbFprbHpUMkpxS1NCN1hHNGdJQ0FnSUNCcFppQW9aR1ZtTG05bVpuTmxkQ0FoUFQwZ2RXNWtaV1pwYm1Wa0tTQjdYRzRnSUNBZ0lDQWdJR04xY25KbGJuUlFiR0Y1YUdWaFpDQTlJSEpsYkdGMGFYWmxWbUZzZFdVb1kzVnljbVZ1ZEZCc1lYbG9aV0ZrTENCa1pXWXViMlptYzJWMEtUdGNiaUFnSUNBZ0lIMGdaV3h6WlNCcFppQW9aR1ZtTG1GMElDRTlQU0IxYm1SbFptbHVaV1FwSUh0Y2JpQWdJQ0FnSUNBZ1kzVnljbVZ1ZEZCc1lYbG9aV0ZrSUQwZ1pHVm1MbUYwTzF4dUlDQWdJQ0FnZlZ4dUlDQWdJSDFjYmx4dUlDQWdJR3hsZENCa2RYSmhkR2x2YmlBOUlEQTdYRzRnSUNBZ1ptOXlJQ2hzWlhRZ2EyVjVJR2x1SUhSM1pXVnVMblpoYkhWbGN5a2dlMXh1SUNBZ0lDQWdhV1lnS0hSM1pXVnVMblpoYkhWbGN5NW9ZWE5QZDI1UWNtOXdaWEowZVNoclpYa3BLU0I3WEc0Z0lDQWdJQ0FnSUdOdmJuTjBJSFpoYkhWbElEMGdkSGRsWlc0dWRtRnNkV1Z6VzJ0bGVWMDdYRzRnSUNBZ0lDQWdJR1IxY21GMGFXOXVJRDBnVFdGMGFDNXRZWGdvWkhWeVlYUnBiMjRzSUhaaGJIVmxMbVIxY21GMGFXOXVLVHRjYmlBZ0lDQWdJSDFjYmlBZ0lDQjlYRzVjYmlBZ0lDQjBhVzFsYkdsdVpTNXdkWE5vS0h0Y2JpQWdJQ0FnSUdaeWIyMDZJR04xY25KbGJuUlFiR0Y1YUdWaFpDeGNiaUFnSUNBZ0lHUjFjbUYwYVc5dU9pQmtkWEpoZEdsdmJpeGNiaUFnSUNBZ0lHWnBjbVU2SUNoMGFXMWxLU0E5UGlCMGQyVmxiaTV6WldWclZHbHRaU2gwYVcxbEtWeHVJQ0FnSUgwcE8xeHVYRzRnSUNBZ1kzVnljbVZ1ZEZCc1lYbG9aV0ZrSUNzOUlHUjFjbUYwYVc5dU8xeHVJQ0I5WEc1Y2JpQWdjbVYwZFhKdUlIc2dkRzkwWVd4VWFXMWxPaUJqZFhKeVpXNTBVR3hoZVdobFlXUXNJSFJwYldWc2FXNWxJSDA3WEc1OU8xeHVYRzVqYjI1emRDQnpaWFJVZDJWbGJuTWdQU0FvZXlCMGFXMWxiR2x1WlN3Z2RHbHRaV3hwYm1WTVpXNW5kR2dzSUhaaGJIVmxjeXdnWkhWeVlYUnBiMjRnZlNrZ1BUNGdlMXh1SUNCbWIzSWdLR3hsZENCcElEMGdNRHNnYVNBOElIUnBiV1ZzYVc1bFRHVnVaM1JvT3lCcEt5c3BJSHRjYmlBZ0lDQmpiMjV6ZENCMGQyVmxiaUE5SUhScGJXVnNhVzVsVzJsZE8xeHVJQ0FnSUdOdmJuTjBJSFIzWldWdVZHbHRaU0E5SUNoMllXeDFaWE11Y0M1amRYSnlaVzUwSUNvZ1pIVnlZWFJwYjI0cElDMGdkSGRsWlc0dVpuSnZiVHRjYmx4dUlDQWdJR2xtSUNoMGQyVmxibFJwYldVZ1BqMGdMVFV3SUNZbUlIUjNaV1Z1VkdsdFpTQThQU0IwZDJWbGJpNWtkWEpoZEdsdmJpQXJJRFV3S1NCN1hHNGdJQ0FnSUNCMGQyVmxiaTVtYVhKbEtIUjNaV1Z1VkdsdFpTazdYRzRnSUNBZ2ZWeHVJQ0I5WEc1OU8xeHVYRzVsZUhCdmNuUWdaR1ZtWVhWc2RDQm1kVzVqZEdsdmJpQjBhVzFsYkdsdVpTaGtaV1lzSUhCeWIzQnpJRDBnZTMwcElIdGNiaUFnWTI5dWMzUWdleUIwYjNSaGJGUnBiV1VzSUhScGJXVnNhVzVsSUgwZ1BTQmhibUZzZVhwbEtHUmxaaWs3WEc1Y2JpQWdjbVYwZFhKdUlHNWxkeUJVZDJWbGJpaDdYRzRnSUNBZ1pXRnpaVG9nWldGemFXNW5MbXhwYm1WaGNpeGNiaUFnSUNBdUxpNXdjbTl3Y3l4Y2JpQWdJQ0JrZFhKaGRHbHZiam9nZEc5MFlXeFVhVzFsTEZ4dUlDQWdJSFpoYkhWbGN6b2dlMXh1SUNBZ0lDQWdjRG9nZXlCbWNtOXRPaUF3TENCMGJ6b2dNU0I5WEc0Z0lDQWdmU3hjYmlBZ0lDQjBhVzFsYkdsdVpUb2dkR2x0Wld4cGJtVXNYRzRnSUNBZ2RHbHRaV3hwYm1WTVpXNW5kR2c2SUhScGJXVnNhVzVsTG14bGJtZDBhQ3hjYmlBZ0lDQnZibEpsYm1SbGNqb2djMlYwVkhkbFpXNXpYRzRnSUgwcE8xeHVmU0pkZlE9PVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvaW5jL3RpbWVsaW5lLmpzXG4gKiogbW9kdWxlIGlkID0gMTFcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuLypcbiAgT3ZlcnJpZGUgYGdldHRlcmAgYW5kIGBzZXR0ZXJgIHRvIHJlaW1wbGVtZW50IHRoZSBpbnRlcmZhY2UgZm9yIG5ldyBlbGVtZW50IHR5cGVzLlxuXG4gIFNldCBgLnN0YXRlTWFwYCBhcyBhbiBvYmplY3Qga2V5L3ZhbHVlIG1hcCB0byB0cmFuc2xhdGUgaW5jb21pbmcga2V5cyB0b1xuICBBUEktc3BlY2lmaWMga2V5cy4gRm9yIGluc3RhbmNlLCB7IHg6ICd0cmFuc2xhdGVYJyB9LiBcblxuICBTZXQgYC52YWx1ZVR5cGVNYXBgIGFzIGFuIG9iamVjdCBrZXkvdmFsdWUgbWFwIHRvIHJldHVybiBhIHZhbHVlIHR5cGUgd2l0aFxuICBgZ2V0VmFsdWVUeXBlKGtleSlgIChrZXkgd2lsbCBiZSBtYXBwZWQgYWNjb3JkaW5nIHRvIGBzdGF0ZU1hcGApXG4qL1xuXG52YXIgbWFwS2V5ID0gZnVuY3Rpb24gKGtleSwgbWFwKSB7XG4gIHJldHVybiBtYXAgPyBtYXBba2V5XSB8fCBrZXkgOiBrZXk7XG59O1xuXG5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbiAob3B0aW9ucykge1xuICAvKlxuICAgIEFkYXB0ZXIgaXMgc2V0dGVyIGZ1bmN0aW9uXG4gICAgIEBwYXJhbSBbb2JqZWN0XTogT2JqZWN0IHRvIHNldCBwcm9wZXJ0aWVzIG9uXG4gICAgQHBhcmFtIFtvYmplY3RdOiBLZXkvdmFsdWUgcHJvcGVydGllcyB0byBzZXRcbiAgKi9cbiAgdmFyIGFkYXB0ZXIgPSBmdW5jdGlvbiAoZWxlbWVudCwgcHJvcHMsIGRhdGEpIHtcbiAgICBpZiAob3B0aW9ucy5zdGF0ZU1hcCkge1xuICAgICAgLy8gVHJhbnNsYXRlIHByb3BzXG4gICAgICBmb3IgKHZhciBrZXkgaW4gcHJvcHMpIHtcbiAgICAgICAgaWYgKHByb3BzLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICB2YXIgbWFwcGVkS2V5ID0gbWFwS2V5KGtleSwgb3B0aW9ucy5zdGF0ZU1hcCk7XG5cbiAgICAgICAgICBpZiAobWFwcGVkS2V5ICE9PSBrZXkpIHtcbiAgICAgICAgICAgIHByb3BzW21hcHBlZEtleV0gPSBwcm9wc1trZXldO1xuICAgICAgICAgICAgZGVsZXRlIHByb3BzW2tleV07XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG9wdGlvbnMuc2V0dGVyKGVsZW1lbnQsIHByb3BzLCBkYXRhKTtcbiAgfTtcblxuICBhZGFwdGVyLmdldCA9IGZ1bmN0aW9uIChlbGVtZW50LCBrZXkpIHtcbiAgICByZXR1cm4gb3B0aW9ucy5nZXR0ZXIoZWxlbWVudCwgbWFwS2V5KGtleSwgb3B0aW9ucy5zdGF0ZU1hcCkpO1xuICB9O1xuICBhZGFwdGVyLmNoZWNrVmFsdWVUeXBlID0gZnVuY3Rpb24gKGtleSkge1xuICAgIHJldHVybiBvcHRpb25zLnZhbHVlVHlwZU1hcCA/IG9wdGlvbnMudmFsdWVUeXBlTWFwW21hcEtleShrZXksIG9wdGlvbnMuc3RhdGVNYXApXSA6IGZhbHNlO1xuICB9O1xuICBhZGFwdGVyLmdldEVsZW1lbnREYXRhID0gb3B0aW9ucy5nZXRFbGVtZW50RGF0YTtcblxuICByZXR1cm4gYWRhcHRlcjtcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5OeVl5OWhaR0Z3ZEdWeUwyRmtZWEIwWlhJdWFuTWlYU3dpYm1GdFpYTWlPbHRkTENKdFlYQndhVzVuY3lJNklqczdPenM3T3pzN096czdPenRCUVZWQkxFbEJRVTBzVTBGQlV5eFZRVUZETEVkQlFVUXNSVUZCVFN4SFFVRk9PMU5CUVdNc1RVRkJUU3hKUVVGSkxFZEJRVW9zUzBGQldTeEhRVUZhTEVkQlFXdENMRWRCUVhoQ08wTkJRV1E3TzJ0Q1FVVkJMRlZCUVVNc1QwRkJSQ3hGUVVGaE96czdPenM3UVVGUE1VSXNUVUZCVFN4VlFVRlZMRlZCUVVNc1QwRkJSQ3hGUVVGVkxFdEJRVllzUlVGQmFVSXNTVUZCYWtJc1JVRkJNRUk3UVVGRGVFTXNVVUZCU1N4UlFVRlJMRkZCUVZJc1JVRkJhMEk3TzBGQlJYQkNMRmRCUVVzc1NVRkJTU3hIUVVGS0xFbEJRVmNzUzBGQmFFSXNSVUZCZFVJN1FVRkRja0lzV1VGQlNTeE5RVUZOTEdOQlFVNHNRMEZCY1VJc1IwRkJja0lzUTBGQlNpeEZRVUVyUWp0QlFVTTNRaXhqUVVGTkxGbEJRVmtzVDBGQlR5eEhRVUZRTEVWQlFWa3NVVUZCVVN4UlFVRlNMRU5CUVhoQ0xFTkJSSFZDT3p0QlFVYzNRaXhqUVVGSkxHTkJRV01zUjBGQlpDeEZRVUZ0UWp0QlFVTnlRaXhyUWtGQlRTeFRRVUZPTEVsQlFXMUNMRTFCUVUwc1IwRkJUaXhEUVVGdVFpeERRVVJ4UWp0QlFVVnlRaXh0UWtGQlR5eE5RVUZOTEVkQlFVNHNRMEZCVUN4RFFVWnhRanRYUVVGMlFqdFRRVWhHTzA5QlJFWTdTMEZHUmpzN1FVRmpRU3hYUVVGUExGRkJRVkVzVFVGQlVpeERRVUZsTEU5QlFXWXNSVUZCZDBJc1MwRkJlRUlzUlVGQkswSXNTVUZCTDBJc1EwRkJVQ3hEUVdaM1F6dEhRVUV4UWl4RFFWQlZPenRCUVhsQ01VSXNWVUZCVVN4SFFVRlNMRWRCUVdNc1ZVRkJReXhQUVVGRUxFVkJRVlVzUjBGQlZqdFhRVUZyUWl4UlFVRlJMRTFCUVZJc1EwRkJaU3hQUVVGbUxFVkJRWGRDTEU5QlFVOHNSMEZCVUN4RlFVRlpMRkZCUVZFc1VVRkJVaXhEUVVGd1F6dEhRVUZzUWl4RFFYcENXVHRCUVRCQ01VSXNWVUZCVVN4alFVRlNMRWRCUVhsQ0xGVkJRVU1zUjBGQlJEdFhRVUZUTEZGQlFWRXNXVUZCVWl4SFFVRjFRaXhSUVVGUkxGbEJRVklzUTBGQmNVSXNUMEZCVHl4SFFVRlFMRVZCUVZrc1VVRkJVU3hSUVVGU0xFTkJRV3BETEVOQlFYWkNMRWRCUVRaRkxFdEJRVGRGTzBkQlFWUXNRMEV4UWtNN1FVRXlRakZDTEZWQlFWRXNZMEZCVWl4SFFVRjVRaXhSUVVGUkxHTkJRVklzUTBFelFrTTdPMEZCTmtJeFFpeFRRVUZQTEU5QlFWQXNRMEUzUWpCQ08wTkJRV0lpTENKbWFXeGxJam9pWVdSaGNIUmxjaTVxY3lJc0luTnZkWEpqWlZKdmIzUWlPaUl2VlhObGNuTXZUV0YwZEM5VGFYUmxjeTl3YjNCdGIzUnBiMjRpTENKemIzVnlZMlZ6UTI5dWRHVnVkQ0k2V3lJdktseHVJQ0JQZG1WeWNtbGtaU0JnWjJWMGRHVnlZQ0JoYm1RZ1lITmxkSFJsY21BZ2RHOGdjbVZwYlhCc1pXMWxiblFnZEdobElHbHVkR1Z5Wm1GalpTQm1iM0lnYm1WM0lHVnNaVzFsYm5RZ2RIbHdaWE11WEc1Y2JpQWdVMlYwSUdBdWMzUmhkR1ZOWVhCZ0lHRnpJR0Z1SUc5aWFtVmpkQ0JyWlhrdmRtRnNkV1VnYldGd0lIUnZJSFJ5WVc1emJHRjBaU0JwYm1OdmJXbHVaeUJyWlhseklIUnZYRzRnSUVGUVNTMXpjR1ZqYVdacFl5QnJaWGx6TGlCR2IzSWdhVzV6ZEdGdVkyVXNJSHNnZURvZ0ozUnlZVzV6YkdGMFpWZ25JSDB1SUZ4dVhHNGdJRk5sZENCZ0xuWmhiSFZsVkhsd1pVMWhjR0FnWVhNZ1lXNGdiMkpxWldOMElHdGxlUzkyWVd4MVpTQnRZWEFnZEc4Z2NtVjBkWEp1SUdFZ2RtRnNkV1VnZEhsd1pTQjNhWFJvWEc0Z0lHQm5aWFJXWVd4MVpWUjVjR1VvYTJWNUtXQWdLR3RsZVNCM2FXeHNJR0psSUcxaGNIQmxaQ0JoWTJOdmNtUnBibWNnZEc4Z1lITjBZWFJsVFdGd1lDbGNiaW92WEc1Y2JtTnZibk4wSUcxaGNFdGxlU0E5SUNoclpYa3NJRzFoY0NrZ1BUNGdiV0Z3SUQ4Z2JXRndXMnRsZVYwZ2ZId2dhMlY1SURvZ2EyVjVPMXh1WEc1bGVIQnZjblFnWkdWbVlYVnNkQ0FvYjNCMGFXOXVjeWtnUFQ0Z2UxeHVJQ0F2S2x4dUlDQWdJRUZrWVhCMFpYSWdhWE1nYzJWMGRHVnlJR1oxYm1OMGFXOXVYRzVjYmlBZ0lDQkFjR0Z5WVcwZ1cyOWlhbVZqZEYwNklFOWlhbVZqZENCMGJ5QnpaWFFnY0hKdmNHVnlkR2xsY3lCdmJseHVJQ0FnSUVCd1lYSmhiU0JiYjJKcVpXTjBYVG9nUzJWNUwzWmhiSFZsSUhCeWIzQmxjblJwWlhNZ2RHOGdjMlYwWEc0Z0lDb3ZYRzRnSUdOdmJuTjBJR0ZrWVhCMFpYSWdQU0FvWld4bGJXVnVkQ3dnY0hKdmNITXNJR1JoZEdFcElEMCtJSHRjYmlBZ0lDQnBaaUFvYjNCMGFXOXVjeTV6ZEdGMFpVMWhjQ2tnZTF4dUlDQWdJQ0FnTHk4Z1ZISmhibk5zWVhSbElIQnliM0J6WEc0Z0lDQWdJQ0JtYjNJZ0tHeGxkQ0JyWlhrZ2FXNGdjSEp2Y0hNcElIdGNiaUFnSUNBZ0lDQWdhV1lnS0hCeWIzQnpMbWhoYzA5M2JsQnliM0JsY25SNUtHdGxlU2twSUh0Y2JpQWdJQ0FnSUNBZ0lDQmpiMjV6ZENCdFlYQndaV1JMWlhrZ1BTQnRZWEJMWlhrb2EyVjVMQ0J2Y0hScGIyNXpMbk4wWVhSbFRXRndLVHRjYmlBZ0lDQWdJQ0FnSUNCY2JpQWdJQ0FnSUNBZ0lDQnBaaUFvYldGd2NHVmtTMlY1SUNFOVBTQnJaWGtwSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJSEJ5YjNCelcyMWhjSEJsWkV0bGVWMGdQU0J3Y205d2MxdHJaWGxkTzF4dUlDQWdJQ0FnSUNBZ0lDQWdaR1ZzWlhSbElIQnliM0J6VzJ0bGVWMDdYRzRnSUNBZ0lDQWdJQ0FnZlZ4dUlDQWdJQ0FnSUNCOVhHNGdJQ0FnSUNCOVhHNGdJQ0FnZlZ4dVhHNGdJQ0FnY21WMGRYSnVJRzl3ZEdsdmJuTXVjMlYwZEdWeUtHVnNaVzFsYm5Rc0lIQnliM0J6TENCa1lYUmhLVHRjYmlBZ2ZUdGNibHh1SUNCaFpHRndkR1Z5TG1kbGRDQTlJQ2hsYkdWdFpXNTBMQ0JyWlhrcElEMCtJRzl3ZEdsdmJuTXVaMlYwZEdWeUtHVnNaVzFsYm5Rc0lHMWhjRXRsZVNoclpYa3NJRzl3ZEdsdmJuTXVjM1JoZEdWTllYQXBLVHRjYmlBZ1lXUmhjSFJsY2k1amFHVmphMVpoYkhWbFZIbHdaU0E5SUNoclpYa3BJRDArSUc5d2RHbHZibk11ZG1Gc2RXVlVlWEJsVFdGd0lEOGdiM0IwYVc5dWN5NTJZV3gxWlZSNWNHVk5ZWEJiYldGd1MyVjVLR3RsZVN3Z2IzQjBhVzl1Y3k1emRHRjBaVTFoY0NsZElEb2dabUZzYzJVN1hHNGdJR0ZrWVhCMFpYSXVaMlYwUld4bGJXVnVkRVJoZEdFZ1BTQnZjSFJwYjI1ekxtZGxkRVZzWlcxbGJuUkVZWFJoTzF4dVhHNGdJSEpsZEhWeWJpQmhaR0Z3ZEdWeU8xeHVmVHNpWFgwPVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvYWRhcHRlci9hZGFwdGVyLmpzXG4gKiogbW9kdWxlIGlkID0gMTJcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHMuc2V0dGVyID0gZXhwb3J0cy5nZXR0ZXIgPSB1bmRlZmluZWQ7XG5cbnZhciBfYWRhcHRlciA9IHJlcXVpcmUoJy4vYWRhcHRlcicpO1xuXG52YXIgX2FkYXB0ZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfYWRhcHRlcik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbnZhciBnZXR0ZXIgPSBleHBvcnRzLmdldHRlciA9IGZ1bmN0aW9uIChlbGVtZW50LCBrZXkpIHtcbiAgcmV0dXJuIGVsZW1lbnQuZ2V0QXR0cmlidXRlKGtleSk7XG59O1xudmFyIHNldHRlciA9IGV4cG9ydHMuc2V0dGVyID0gZnVuY3Rpb24gKGVsZW1lbnQsIHByb3BzKSB7XG4gIGZvciAodmFyIGtleSBpbiBwcm9wcykge1xuICAgIGlmIChwcm9wcy5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZShrZXksIHByb3BzW2tleV0pO1xuICAgIH1cbiAgfVxufTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gKDAsIF9hZGFwdGVyMi5kZWZhdWx0KSh7IGdldHRlcjogZ2V0dGVyLCBzZXR0ZXI6IHNldHRlciB9KTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbk55WXk5aFpHRndkR1Z5TDJGMGRISXRZV1JoY0hSbGNpNXFjeUpkTENKdVlXMWxjeUk2VzEwc0ltMWhjSEJwYm1keklqb2lPenM3T3p0QlFVRkJPenM3T3pzN1FVRkZUeXhKUVVGTkxEQkNRVUZUTEZWQlFVTXNUMEZCUkN4RlFVRlZMRWRCUVZZN1UwRkJhMElzVVVGQlVTeFpRVUZTTEVOQlFYRkNMRWRCUVhKQ08wTkJRV3hDTzBGQlEyWXNTVUZCVFN3d1FrRkJVeXhWUVVGRExFOUJRVVFzUlVGQlZTeExRVUZXTEVWQlFXOUNPMEZCUTNoRExFOUJRVXNzU1VGQlNTeEhRVUZLTEVsQlFWY3NTMEZCYUVJc1JVRkJkVUk3UVVGRGNrSXNVVUZCU1N4TlFVRk5MR05CUVU0c1EwRkJjVUlzUjBGQmNrSXNRMEZCU2l4RlFVRXJRanRCUVVNM1FpeGpRVUZSTEZsQlFWSXNRMEZCY1VJc1IwRkJja0lzUlVGQk1FSXNUVUZCVFN4SFFVRk9MRU5CUVRGQ0xFVkJSRFpDTzB0QlFTOUNPMGRCUkVZN1EwRkViMEk3TzJ0Q1FWRlFMSFZDUVVGakxFVkJRVVVzWTBGQlJpeEZRVUZWTEdOQlFWWXNSVUZCWkNJc0ltWnBiR1VpT2lKaGRIUnlMV0ZrWVhCMFpYSXVhbk1pTENKemIzVnlZMlZTYjI5MElqb2lMMVZ6WlhKekwwMWhkSFF2VTJsMFpYTXZjRzl3Ylc5MGFXOXVJaXdpYzI5MWNtTmxjME52Ym5SbGJuUWlPbHNpYVcxd2IzSjBJR055WldGMFpVRmtZWEIwWlhJZ1puSnZiU0FuTGk5aFpHRndkR1Z5Snp0Y2JseHVaWGh3YjNKMElHTnZibk4wSUdkbGRIUmxjaUE5SUNobGJHVnRaVzUwTENCclpYa3BJRDArSUdWc1pXMWxiblF1WjJWMFFYUjBjbWxpZFhSbEtHdGxlU2s3WEc1bGVIQnZjblFnWTI5dWMzUWdjMlYwZEdWeUlEMGdLR1ZzWlcxbGJuUXNJSEJ5YjNCektTQTlQaUI3WEc0Z0lHWnZjaUFvYkdWMElHdGxlU0JwYmlCd2NtOXdjeWtnZTF4dUlDQWdJR2xtSUNod2NtOXdjeTVvWVhOUGQyNVFjbTl3WlhKMGVTaHJaWGtwS1NCN1hHNGdJQ0FnSUNCbGJHVnRaVzUwTG5ObGRFRjBkSEpwWW5WMFpTaHJaWGtzSUhCeWIzQnpXMnRsZVYwcE8xeHVJQ0FnSUgxY2JpQWdmVnh1ZlR0Y2JseHVaWGh3YjNKMElHUmxabUYxYkhRZ1kzSmxZWFJsUVdSaGNIUmxjaWg3SUdkbGRIUmxjaXdnYzJWMGRHVnlJSDBwTzF4dUlsMTlcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2FkYXB0ZXIvYXR0ci1hZGFwdGVyLmpzXG4gKiogbW9kdWxlIGlkID0gMTNcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF9zdGF0ZU1hcCA9IHJlcXVpcmUoJy4vY3NzL3N0YXRlLW1hcCcpO1xuXG52YXIgX3N0YXRlTWFwMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3N0YXRlTWFwKTtcblxudmFyIF92YWx1ZVR5cGVNYXAgPSByZXF1aXJlKCcuL2Nzcy92YWx1ZS10eXBlLW1hcCcpO1xuXG52YXIgX3ZhbHVlVHlwZU1hcDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF92YWx1ZVR5cGVNYXApO1xuXG52YXIgX2J1aWxkID0gcmVxdWlyZSgnLi9jc3MvYnVpbGQnKTtcblxudmFyIF9idWlsZDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9idWlsZCk7XG5cbnZhciBfcHJlZml4ZXIgPSByZXF1aXJlKCcuL2Nzcy9wcmVmaXhlcicpO1xuXG52YXIgX3ByZWZpeGVyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3ByZWZpeGVyKTtcblxudmFyIF90cmFuc2Zvcm1Qcm9wcyA9IHJlcXVpcmUoJy4vY3NzL3RyYW5zZm9ybS1wcm9wcycpO1xuXG52YXIgX3RyYW5zZm9ybVByb3BzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3RyYW5zZm9ybVByb3BzKTtcblxudmFyIF9hZGFwdGVyID0gcmVxdWlyZSgnLi9hZGFwdGVyJyk7XG5cbnZhciBfYWRhcHRlcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9hZGFwdGVyKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZXhwb3J0cy5kZWZhdWx0ID0gKDAsIF9hZGFwdGVyMi5kZWZhdWx0KSh7XG4gIGdldHRlcjogZnVuY3Rpb24gKGVsZW1lbnQsIGtleSkge1xuICAgIHJldHVybiAhX3RyYW5zZm9ybVByb3BzMi5kZWZhdWx0W2tleV0gPyB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShlbGVtZW50LCBudWxsKVsoMCwgX3ByZWZpeGVyMi5kZWZhdWx0KShrZXkpXSA6IF92YWx1ZVR5cGVNYXAyLmRlZmF1bHRba2V5XS5kZWZhdWx0UHJvcHMuY3VycmVudCB8fCAwO1xuICB9LFxuICBzZXR0ZXI6IGZ1bmN0aW9uIChlbGVtZW50LCBwcm9wcykge1xuICAgIHJldHVybiBlbGVtZW50LnN0eWxlLmNzc1RleHQgKz0gKDAsIF9idWlsZDIuZGVmYXVsdCkocHJvcHMpO1xuICB9LFxuICB2YWx1ZVR5cGVNYXA6IF92YWx1ZVR5cGVNYXAyLmRlZmF1bHQsXG4gIHN0YXRlTWFwOiBfc3RhdGVNYXAyLmRlZmF1bHRcbn0pO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluTnlZeTloWkdGd2RHVnlMMk56Y3kxaFpHRndkR1Z5TG1weklsMHNJbTVoYldWeklqcGJYU3dpYldGd2NHbHVaM01pT2lJN096czdRVUZCUVRzN096dEJRVU5CT3pzN08wRkJRMEU3T3pzN1FVRkRRVHM3T3p0QlFVTkJPenM3TzBGQlEwRTdPenM3T3p0clFrRkZaU3gxUWtGQll6dEJRVU16UWl4VlFVRlJMRlZCUVVNc1QwRkJSQ3hGUVVGVkxFZEJRVllzUlVGQmEwSTdRVUZEZUVJc1YwRkJUeXhEUVVGRkxIbENRVUZsTEVkQlFXWXNRMEZCUkN4SFFVTk9MRTlCUVU4c1owSkJRVkFzUTBGQmQwSXNUMEZCZUVJc1JVRkJhVU1zU1VGQmFrTXNSVUZCZFVNc2QwSkJRVk1zUjBGQlZDeERRVUYyUXl4RFFVUkxMRWRCUlV3c2RVSkJRV0VzUjBGQllpeEZRVUZyUWl4WlFVRnNRaXhEUVVFclFpeFBRVUV2UWl4SlFVRXdReXhEUVVFeFF5eERRVWh6UWp0SFFVRnNRanRCUVV0U0xGVkJRVkVzVlVGQlF5eFBRVUZFTEVWQlFWVXNTMEZCVmp0WFFVRnZRaXhSUVVGUkxFdEJRVklzUTBGQll5eFBRVUZrTEVsQlFYbENMSEZDUVVGdlFpeExRVUZ3UWl4RFFVRjZRanRIUVVGd1FqdEJRVU5TTEhORFFWQXlRanRCUVZFelFpdzRRa0ZTTWtJN1EwRkJaQ0lzSW1acGJHVWlPaUpqYzNNdFlXUmhjSFJsY2k1cWN5SXNJbk52ZFhKalpWSnZiM1FpT2lJdlZYTmxjbk12VFdGMGRDOVRhWFJsY3k5d2IzQnRiM1JwYjI0aUxDSnpiM1Z5WTJWelEyOXVkR1Z1ZENJNld5SnBiWEJ2Y25RZ2MzUmhkR1ZOWVhBZ1puSnZiU0FuTGk5amMzTXZjM1JoZEdVdGJXRndKenRjYm1sdGNHOXlkQ0IyWVd4MVpWUjVjR1ZOWVhBZ1puSnZiU0FuTGk5amMzTXZkbUZzZFdVdGRIbHdaUzF0WVhBbk8xeHVhVzF3YjNKMElHSjFhV3hrVUhKdmNHVnlkSGxUZEhKcGJtY2dabkp2YlNBbkxpOWpjM012WW5WcGJHUW5PMXh1YVcxd2IzSjBJSEJ5WldacGVHVnlJR1p5YjIwZ0p5NHZZM056TDNCeVpXWnBlR1Z5Snp0Y2JtbHRjRzl5ZENCMGNtRnVjMlp2Y20xUWNtOXdjeUJtY205dElDY3VMMk56Y3k5MGNtRnVjMlp2Y20wdGNISnZjSE1uTzF4dWFXMXdiM0owSUdOeVpXRjBaVUZrWVhCMFpYSWdabkp2YlNBbkxpOWhaR0Z3ZEdWeUp6dGNibHh1Wlhod2IzSjBJR1JsWm1GMWJIUWdZM0psWVhSbFFXUmhjSFJsY2loN1hHNGdJR2RsZEhSbGNqb2dLR1ZzWlcxbGJuUXNJR3RsZVNrZ1BUNGdlMXh1SUNBZ0lISmxkSFZ5YmlBb0lYUnlZVzV6Wm05eWJWQnliM0J6VzJ0bGVWMHBJRDljYmlBZ0lDQWdJSGRwYm1SdmR5NW5aWFJEYjIxd2RYUmxaRk4wZVd4bEtHVnNaVzFsYm5Rc0lHNTFiR3dwVzNCeVpXWnBlR1Z5S0d0bGVTbGRJRHBjYmlBZ0lDQWdJSFpoYkhWbFZIbHdaVTFoY0Z0clpYbGRMbVJsWm1GMWJIUlFjbTl3Y3k1amRYSnlaVzUwSUh4OElEQTdYRzRnSUgwc1hHNGdJSE5sZEhSbGNqb2dLR1ZzWlcxbGJuUXNJSEJ5YjNCektTQTlQaUJsYkdWdFpXNTBMbk4wZVd4bExtTnpjMVJsZUhRZ0t6MGdZblZwYkdSUWNtOXdaWEowZVZOMGNtbHVaeWh3Y205d2N5a3NYRzRnSUhaaGJIVmxWSGx3WlUxaGNDeGNiaUFnYzNSaGRHVk5ZWEJjYm4wcE8xeHVYRzRpWFgwPVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvYWRhcHRlci9jc3MtYWRhcHRlci5qc1xuICoqIG1vZHVsZSBpZCA9IDE0XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfYWRhcHRlciA9IHJlcXVpcmUoJy4vYWRhcHRlcicpO1xuXG52YXIgX2FkYXB0ZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfYWRhcHRlcik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmV4cG9ydHMuZGVmYXVsdCA9ICgwLCBfYWRhcHRlcjIuZGVmYXVsdCkoe1xuICBnZXR0ZXI6IGZ1bmN0aW9uIChvYmplY3QsIGtleSkge1xuICAgIHJldHVybiBvYmplY3Rba2V5XTtcbiAgfSxcbiAgc2V0dGVyOiBmdW5jdGlvbiAob2JqZWN0LCBwcm9wcykge1xuICAgIGZvciAodmFyIGtleSBpbiBwcm9wcykge1xuICAgICAgaWYgKHByb3BzLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgb2JqZWN0W2tleV0gPSBwcm9wc1trZXldO1xuICAgICAgfVxuICAgIH1cbiAgfVxufSk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5OeVl5OWhaR0Z3ZEdWeUwyOWlhbVZqZEMxaFpHRndkR1Z5TG1weklsMHNJbTVoYldWeklqcGJYU3dpYldGd2NHbHVaM01pT2lJN096czdRVUZCUVRzN096czdPMnRDUVVWbExIVkNRVUZqTzBGQlF6TkNMRlZCUVZFc1ZVRkJReXhOUVVGRUxFVkJRVk1zUjBGQlZEdFhRVUZwUWl4UFFVRlBMRWRCUVZBN1IwRkJha0k3UVVGRFVpeFZRVUZSTEZWQlFVTXNUVUZCUkN4RlFVRlRMRXRCUVZRc1JVRkJiVUk3UVVGRGVrSXNVMEZCU3l4SlFVRkpMRWRCUVVvc1NVRkJWeXhMUVVGb1FpeEZRVUYxUWp0QlFVTnlRaXhWUVVGSkxFMUJRVTBzWTBGQlRpeERRVUZ4UWl4SFFVRnlRaXhEUVVGS0xFVkJRU3RDTzBGQlF6ZENMR1ZCUVU4c1IwRkJVQ3hKUVVGakxFMUJRVTBzUjBGQlRpeERRVUZrTEVOQlJEWkNPMDlCUVM5Q08wdEJSRVk3UjBGRVRUdERRVVpMSWl3aVptbHNaU0k2SW05aWFtVmpkQzFoWkdGd2RHVnlMbXB6SWl3aWMyOTFjbU5sVW05dmRDSTZJaTlWYzJWeWN5OU5ZWFIwTDFOcGRHVnpMM0J2Y0cxdmRHbHZiaUlzSW5OdmRYSmpaWE5EYjI1MFpXNTBJanBiSW1sdGNHOXlkQ0JqY21WaGRHVkJaR0Z3ZEdWeUlHWnliMjBnSnk0dllXUmhjSFJsY2ljN1hHNWNibVY0Y0c5eWRDQmtaV1poZFd4MElHTnlaV0YwWlVGa1lYQjBaWElvZTF4dUlDQm5aWFIwWlhJNklDaHZZbXBsWTNRc0lHdGxlU2tnUFQ0Z2IySnFaV04wVzJ0bGVWMHNYRzRnSUhObGRIUmxjam9nS0c5aWFtVmpkQ3dnY0hKdmNITXBJRDArSUh0Y2JpQWdJQ0JtYjNJZ0tHeGxkQ0JyWlhrZ2FXNGdjSEp2Y0hNcElIdGNiaUFnSUNBZ0lHbG1JQ2h3Y205d2N5NW9ZWE5QZDI1UWNtOXdaWEowZVNoclpYa3BLU0I3WEc0Z0lDQWdJQ0FnSUc5aWFtVmpkRnRyWlhsZElEMGdjSEp2Y0hOYmEyVjVYVHRjYmlBZ0lDQWdJSDFjYmlBZ0lDQjlYRzRnSUgxY2JuMHBPeUpkZlE9PVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvYWRhcHRlci9vYmplY3QtYWRhcHRlci5qc1xuICoqIG1vZHVsZSBpZCA9IDE1XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzLmdldEVsZW1lbnREYXRhID0gZXhwb3J0cy5zZXR0ZXIgPSBleHBvcnRzLmdldHRlciA9IHVuZGVmaW5lZDtcblxudmFyIF9zdGF0ZU1hcCA9IHJlcXVpcmUoJy4vY3NzL3N0YXRlLW1hcCcpO1xuXG52YXIgX3N0YXRlTWFwMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3N0YXRlTWFwKTtcblxudmFyIF92YWx1ZVR5cGVNYXAgPSByZXF1aXJlKCcuL3N2Zy92YWx1ZS10eXBlLW1hcCcpO1xuXG52YXIgX3ZhbHVlVHlwZU1hcDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF92YWx1ZVR5cGVNYXApO1xuXG52YXIgX3RyYW5zZm9ybVByb3BzID0gcmVxdWlyZSgnLi9jc3MvdHJhbnNmb3JtLXByb3BzJyk7XG5cbnZhciBfdHJhbnNmb3JtUHJvcHMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfdHJhbnNmb3JtUHJvcHMpO1xuXG52YXIgX2J1aWxkID0gcmVxdWlyZSgnLi9zdmcvYnVpbGQnKTtcblxudmFyIF9idWlsZDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9idWlsZCk7XG5cbnZhciBfYXR0ckFkYXB0ZXIgPSByZXF1aXJlKCcuL2F0dHItYWRhcHRlcicpO1xuXG52YXIgX2FkYXB0ZXIgPSByZXF1aXJlKCcuL2FkYXB0ZXInKTtcblxudmFyIF9hZGFwdGVyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2FkYXB0ZXIpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG52YXIgZ2V0dGVyID0gZXhwb3J0cy5nZXR0ZXIgPSBmdW5jdGlvbiAoZWxlbWVudCwga2V5KSB7XG4gIHJldHVybiAhX3RyYW5zZm9ybVByb3BzMi5kZWZhdWx0W2tleV0gPyAoMCwgX2F0dHJBZGFwdGVyLmdldHRlcikoZWxlbWVudCwga2V5KSA6IF92YWx1ZVR5cGVNYXAyLmRlZmF1bHRba2V5XSAmJiBfdmFsdWVUeXBlTWFwMi5kZWZhdWx0W2tleV0uZGVmYXVsdFByb3BzID8gX3ZhbHVlVHlwZU1hcDIuZGVmYXVsdFtrZXldLmRlZmF1bHRQcm9wcy5jdXJyZW50IDogMDtcbn07XG52YXIgc2V0dGVyID0gZXhwb3J0cy5zZXR0ZXIgPSBmdW5jdGlvbiAoZWxlbWVudCwgcHJvcHMsIGRhdGEpIHtcbiAgcmV0dXJuICgwLCBfYXR0ckFkYXB0ZXIuc2V0dGVyKShlbGVtZW50LCAoMCwgX2J1aWxkMi5kZWZhdWx0KShwcm9wcywgZGF0YSkpO1xufTtcbnZhciBnZXRFbGVtZW50RGF0YSA9IGV4cG9ydHMuZ2V0RWxlbWVudERhdGEgPSBmdW5jdGlvbiAoZWxlbWVudCkge1xuICB2YXIgYkJveCA9IGVsZW1lbnQuZ2V0QkJveCgpO1xuICByZXR1cm4ge1xuICAgIHg6IGJCb3gueCxcbiAgICB5OiBiQm94LnksXG4gICAgd2lkdGg6IGJCb3gud2lkdGgsXG4gICAgaGVpZ2h0OiBiQm94LmhlaWdodFxuICB9O1xufTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gKDAsIF9hZGFwdGVyMi5kZWZhdWx0KSh7IGdldHRlcjogZ2V0dGVyLCBzZXR0ZXI6IHNldHRlciwgc3RhdGVNYXA6IF9zdGF0ZU1hcDIuZGVmYXVsdCwgdmFsdWVUeXBlTWFwOiBfdmFsdWVUeXBlTWFwMi5kZWZhdWx0LCBnZXRFbGVtZW50RGF0YTogZ2V0RWxlbWVudERhdGEgfSk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5OeVl5OWhaR0Z3ZEdWeUwzTjJaeTFoWkdGd2RHVnlMbXB6SWwwc0ltNWhiV1Z6SWpwYlhTd2liV0Z3Y0dsdVozTWlPaUk3T3pzN08wRkJRVUU3T3pzN1FVRkRRVHM3T3p0QlFVTkJPenM3TzBGQlEwRTdPenM3UVVGRFFUczdRVUZEUVRzN096czdPMEZCUlU4c1NVRkJUU3d3UWtGQlV5eFZRVUZETEU5QlFVUXNSVUZCVlN4SFFVRldPMU5CUVd0Q0xFTkJRVVVzZVVKQlFXVXNSMEZCWml4RFFVRkVMRWRCUVhkQ0xIbENRVUZYTEU5QlFWZ3NSVUZCYjBJc1IwRkJjRUlzUTBGQmVrSXNSMEZCYjBRc2MwSkJRVU1zUTBGQllTeEhRVUZpTEV0QlFYRkNMSFZDUVVGaExFZEJRV0lzUlVGQmEwSXNXVUZCYkVJc1IwRkJhME1zZFVKQlFXRXNSMEZCWWl4RlFVRnJRaXhaUVVGc1FpeERRVUVyUWl4UFFVRXZRaXhIUVVGNVF5eERRVUZxUnp0RFFVRjBSVHRCUVVObUxFbEJRVTBzTUVKQlFWTXNWVUZCUXl4UFFVRkVMRVZCUVZVc1MwRkJWaXhGUVVGcFFpeEpRVUZxUWp0VFFVRXdRaXg1UWtGQlZ5eFBRVUZZTEVWQlFXOUNMSEZDUVVGTkxFdEJRVTRzUlVGQllTeEpRVUZpTEVOQlFYQkNPME5CUVRGQ08wRkJRMllzU1VGQlRTd3dRMEZCYVVJc1ZVRkJReXhQUVVGRUxFVkJRV0U3UVVGRGVrTXNUVUZCVFN4UFFVRlBMRkZCUVZFc1QwRkJVaXhGUVVGUUxFTkJSRzFETzBGQlJYcERMRk5CUVU4N1FVRkRUQ3hQUVVGSExFdEJRVXNzUTBGQlREdEJRVU5JTEU5QlFVY3NTMEZCU3l4RFFVRk1PMEZCUTBnc1YwRkJUeXhMUVVGTExFdEJRVXc3UVVGRFVDeFpRVUZSTEV0QlFVc3NUVUZCVER0SFFVcFdMRU5CUm5sRE8wTkJRV0k3TzJ0Q1FWVm1MSFZDUVVGakxFVkJRVVVzWTBGQlJpeEZRVUZWTEdOQlFWWXNSVUZCYTBJc05FSkJRV3hDTEVWQlFUUkNMRzlEUVVFMVFpeEZRVUV3UXl3NFFrRkJNVU1zUlVGQlpDSXNJbVpwYkdVaU9pSnpkbWN0WVdSaGNIUmxjaTVxY3lJc0luTnZkWEpqWlZKdmIzUWlPaUl2VlhObGNuTXZUV0YwZEM5VGFYUmxjeTl3YjNCdGIzUnBiMjRpTENKemIzVnlZMlZ6UTI5dWRHVnVkQ0k2V3lKcGJYQnZjblFnYzNSaGRHVk5ZWEFnWm5KdmJTQW5MaTlqYzNNdmMzUmhkR1V0YldGd0p6dGNibWx0Y0c5eWRDQjJZV3gxWlZSNWNHVk5ZWEFnWm5KdmJTQW5MaTl6ZG1jdmRtRnNkV1V0ZEhsd1pTMXRZWEFuTzF4dWFXMXdiM0owSUhSeVlXNXpabTl5YlZCeWIzQnpJR1p5YjIwZ0p5NHZZM056TDNSeVlXNXpabTl5YlMxd2NtOXdjeWM3WEc1cGJYQnZjblFnWW5WcGJHUWdabkp2YlNBbkxpOXpkbWN2WW5WcGJHUW5PMXh1YVcxd2IzSjBJSHNnWjJWMGRHVnlJR0Z6SUdGMGRISkhaWFIwWlhJc0lITmxkSFJsY2lCaGN5QmhkSFJ5VTJWMGRHVnlJSDBnWm5KdmJTQW5MaTloZEhSeUxXRmtZWEIwWlhJbk8xeHVhVzF3YjNKMElHTnlaV0YwWlVGa1lYQjBaWElnWm5KdmJTQW5MaTloWkdGd2RHVnlKenRjYmx4dVpYaHdiM0owSUdOdmJuTjBJR2RsZEhSbGNpQTlJQ2hsYkdWdFpXNTBMQ0JyWlhrcElEMCtJQ2doZEhKaGJuTm1iM0p0VUhKdmNITmJhMlY1WFNrZ1B5QmhkSFJ5UjJWMGRHVnlLR1ZzWlcxbGJuUXNJR3RsZVNrZ09pQW9kbUZzZFdWVWVYQmxUV0Z3VzJ0bGVWMGdKaVlnZG1Gc2RXVlVlWEJsVFdGd1cydGxlVjB1WkdWbVlYVnNkRkJ5YjNCektTQS9JSFpoYkhWbFZIbHdaVTFoY0Z0clpYbGRMbVJsWm1GMWJIUlFjbTl3Y3k1amRYSnlaVzUwSURvZ01EdGNibVY0Y0c5eWRDQmpiMjV6ZENCelpYUjBaWElnUFNBb1pXeGxiV1Z1ZEN3Z2NISnZjSE1zSUdSaGRHRXBJRDArSUdGMGRISlRaWFIwWlhJb1pXeGxiV1Z1ZEN3Z1luVnBiR1FvY0hKdmNITXNJR1JoZEdFcEtUdGNibVY0Y0c5eWRDQmpiMjV6ZENCblpYUkZiR1Z0Wlc1MFJHRjBZU0E5SUNobGJHVnRaVzUwS1NBOVBpQjdYRzRnSUdOdmJuTjBJR0pDYjNnZ1BTQmxiR1Z0Wlc1MExtZGxkRUpDYjNnb0tUdGNiaUFnY21WMGRYSnVJSHRjYmlBZ0lDQjRPaUJpUW05NExuZ3NYRzRnSUNBZ2VUb2dZa0p2ZUM1NUxGeHVJQ0FnSUhkcFpIUm9PaUJpUW05NExuZHBaSFJvTENCY2JpQWdJQ0JvWldsbmFIUTZJR0pDYjNndWFHVnBaMmgwWEc0Z0lIMDdYRzU5TzF4dVhHNWxlSEJ2Y25RZ1pHVm1ZWFZzZENCamNtVmhkR1ZCWkdGd2RHVnlLSHNnWjJWMGRHVnlMQ0J6WlhSMFpYSXNJSE4wWVhSbFRXRndMQ0IyWVd4MVpWUjVjR1ZOWVhBc0lHZGxkRVZzWlcxbGJuUkVZWFJoSUgwcE8xeHVJbDE5XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9hZGFwdGVyL3N2Zy1hZGFwdGVyLmpzXG4gKiogbW9kdWxlIGlkID0gMTZcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTtcblxudmFyIF9idWlsZCA9IHJlcXVpcmUoJy4vc3ZnLXBhdGgvYnVpbGQnKTtcblxudmFyIF9idWlsZDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9idWlsZCk7XG5cbnZhciBfc3RhdGVNYXAgPSByZXF1aXJlKCcuL2Nzcy9zdGF0ZS1tYXAnKTtcblxudmFyIF9zdGF0ZU1hcDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9zdGF0ZU1hcCk7XG5cbnZhciBfc3ZnQWRhcHRlciA9IHJlcXVpcmUoJy4vc3ZnLWFkYXB0ZXInKTtcblxudmFyIF9hZGFwdGVyID0gcmVxdWlyZSgnLi9hZGFwdGVyJyk7XG5cbnZhciBfYWRhcHRlcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9hZGFwdGVyKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZXhwb3J0cy5kZWZhdWx0ID0gKDAsIF9hZGFwdGVyMi5kZWZhdWx0KSh7XG4gIGdldHRlcjogX3N2Z0FkYXB0ZXIuZ2V0dGVyLFxuICBzZXR0ZXI6IGZ1bmN0aW9uIChlbGVtZW50LCBwcm9wcywgb3B0cykge1xuICAgIHZhciBwYXRoTGVuZ3RoID0gb3B0cyA/IG9wdHMucGF0aExlbmd0aCA6IDA7XG4gICAgcmV0dXJuICgwLCBfc3ZnQWRhcHRlci5zZXR0ZXIpKGVsZW1lbnQsICgwLCBfYnVpbGQyLmRlZmF1bHQpKHByb3BzLCBwYXRoTGVuZ3RoKSwgb3B0cyk7XG4gIH0sXG4gIHN0YXRlTWFwOiBfc3RhdGVNYXAyLmRlZmF1bHQsXG4gIGdldEVsZW1lbnREYXRhOiBmdW5jdGlvbiAoZWxlbWVudCkge1xuICAgIHJldHVybiBfZXh0ZW5kcyh7IHBhdGhMZW5ndGg6IGVsZW1lbnQuZ2V0VG90YWxMZW5ndGgoKSB9LCAoMCwgX3N2Z0FkYXB0ZXIuZ2V0RWxlbWVudERhdGEpKGVsZW1lbnQpKTtcbiAgfVxufSk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5OeVl5OWhaR0Z3ZEdWeUwzTjJaeTF3WVhSb0xXRmtZWEIwWlhJdWFuTWlYU3dpYm1GdFpYTWlPbHRkTENKdFlYQndhVzVuY3lJNklqczdPenM3TzBGQlFVRTdPenM3UVVGRFFUczdPenRCUVVOQk96dEJRVU5CT3pzN096czdhMEpCUldVc2RVSkJRV003UVVGRE0wSXNORUpCUkRKQ08wRkJSVE5DTEZWQlFWRXNWVUZCUXl4UFFVRkVMRVZCUVZVc1MwRkJWaXhGUVVGcFFpeEpRVUZxUWl4RlFVRXdRanRCUVVOb1F5eFJRVUZOTEdGQlFXRXNUMEZCVHl4TFFVRkxMRlZCUVV3c1IwRkJhMElzUTBGQmVrSXNRMEZFWVR0QlFVVm9ReXhYUVVGUExIZENRVUZQTEU5QlFWQXNSVUZCWjBJc2NVSkJRVTBzUzBGQlRpeEZRVUZoTEZWQlFXSXNRMEZCYUVJc1JVRkJNRU1zU1VGQk1VTXNRMEZCVUN4RFFVWm5RenRIUVVFeFFqdEJRVWxTTERoQ1FVNHlRanRCUVU4elFpeHJRa0ZCWjBJc1ZVRkJReXhQUVVGRU8zTkNRVUZuUWl4WlFVRlpMRkZCUVZFc1kwRkJVaXhGUVVGYUxFbEJRWGxETEdkRFFVRmxMRTlCUVdZN1IwRkJla1E3UTBGUVNDSXNJbVpwYkdVaU9pSnpkbWN0Y0dGMGFDMWhaR0Z3ZEdWeUxtcHpJaXdpYzI5MWNtTmxVbTl2ZENJNklpOVZjMlZ5Y3k5TllYUjBMMU5wZEdWekwzQnZjRzF2ZEdsdmJpSXNJbk52ZFhKalpYTkRiMjUwWlc1MElqcGJJbWx0Y0c5eWRDQmlkV2xzWkNCbWNtOXRJQ2N1TDNOMlp5MXdZWFJvTDJKMWFXeGtKenRjYm1sdGNHOXlkQ0J6ZEdGMFpVMWhjQ0JtY205dElDY3VMMk56Y3k5emRHRjBaUzF0WVhBbk8xeHVhVzF3YjNKMElIc2daMlYwZEdWeUxDQnpaWFIwWlhJc0lHZGxkRVZzWlcxbGJuUkVZWFJoSUgwZ1puSnZiU0FuTGk5emRtY3RZV1JoY0hSbGNpYzdYRzVwYlhCdmNuUWdZM0psWVhSbFFXUmhjSFJsY2lCbWNtOXRJQ2N1TDJGa1lYQjBaWEluTzF4dVhHNWxlSEJ2Y25RZ1pHVm1ZWFZzZENCamNtVmhkR1ZCWkdGd2RHVnlLSHRjYmlBZ1oyVjBkR1Z5TEZ4dUlDQnpaWFIwWlhJNklDaGxiR1Z0Wlc1MExDQndjbTl3Y3l3Z2IzQjBjeWtnUFQ0Z2UxeHVJQ0FnSUdOdmJuTjBJSEJoZEdoTVpXNW5kR2dnUFNCdmNIUnpJRDhnYjNCMGN5NXdZWFJvVEdWdVozUm9JRG9nTUR0Y2JpQWdJQ0J5WlhSMWNtNGdjMlYwZEdWeUtHVnNaVzFsYm5Rc0lHSjFhV3hrS0hCeWIzQnpMQ0J3WVhSb1RHVnVaM1JvS1N3Z2IzQjBjeWs3WEc0Z0lIMHNYRzRnSUhOMFlYUmxUV0Z3TEZ4dUlDQm5aWFJGYkdWdFpXNTBSR0YwWVRvZ0tHVnNaVzFsYm5RcElEMCtJQ2g3SUhCaGRHaE1aVzVuZEdnNklHVnNaVzFsYm5RdVoyVjBWRzkwWVd4TVpXNW5kR2dvS1N3Z0xpNHVaMlYwUld4bGJXVnVkRVJoZEdFb1pXeGxiV1Z1ZENrZ2ZTbGNibjBwTzF4dUlsMTlcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2FkYXB0ZXIvc3ZnLXBhdGgtYWRhcHRlci5qc1xuICoqIG1vZHVsZSBpZCA9IDE3XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfY3JlYXRlRWFzaW5nID0gcmVxdWlyZSgnLi9jcmVhdGUtZWFzaW5nJyk7XG5cbnZhciBfY3JlYXRlRWFzaW5nMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NyZWF0ZUVhc2luZyk7XG5cbnZhciBfY3JlYXRlQmV6aWVyID0gcmVxdWlyZSgnLi9jcmVhdGUtYmV6aWVyJyk7XG5cbnZhciBfY3JlYXRlQmV6aWVyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NyZWF0ZUJlemllcik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbi8vIFZhbHVlc1xuLypcbiAgRWFzaW5nIGZ1bmN0aW9uc1xuICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIFxuICBHZW5lcmF0ZXMgYW5kIHByb3ZpZGVzIGVhc2luZyBmdW5jdGlvbnMgYmFzZWQgb24gYmFzZUZ1bmN0aW9uIGRlZmluaXRpb25zXG4gIFxuICBBIGNhbGwgdG8gZWFzaW5nRnVuY3Rpb24uZ2V0KCdmdW5jdGlvbk5hbWUnKSByZXR1cm5zIGEgZnVuY3Rpb24gdGhhdCBjYW4gYmUgcGFzc2VkOlxuICAgIEBwYXJhbSBbbnVtYmVyXTogUHJvZ3Jlc3MgMC0xXG4gICAgQHBhcmFtIFtudW1iZXJdIChvcHRpb25hbCk6IEFtcCBtb2RpZmllciwgb25seSBhY2NlcHRlZCBpbiBzb21lIGVhc2luZyBmdW5jdGlvbnNcbiAgICAgICAgICAgICAgICAgIGFuZCBpcyB1c2VkIHRvIGFkanVzdCBvdmVyYWxsIHN0cmVuZ3RoXG4gICAgQHJldHVybiBbbnVtYmVyXTogRWFzZWQgcHJvZ3Jlc3NcbiAgICBcbiAgV2UgY2FuIGdlbmVyYXRlIG5ldyBmdW5jdGlvbnMgYnkgc2VuZGluZyBhbiBlYXNpbmcgZnVuY3Rpb24gdGhyb3VnaCBlYXNpbmdGdW5jdGlvbi5leHRlbmQobmFtZSwgbWV0aG9kKS5cbiAgV2hpY2ggd2lsbCBtYWtlIG5hbWVJbiwgbmFtZU91dCBhbmQgbmFtZUluT3V0IGZ1bmN0aW9ucyBhdmFpbGFibGUgdG8gdXNlLlxuICAgIFxuICBFYXNpbmcgZnVuY3Rpb25zIGZyb20gUm9iZXJ0IFBlbm5lclxuICBodHRwOi8vd3d3LnJvYmVydHBlbm5lci5jb20vZWFzaW5nL1xuICAgIFxuICBCZXppZXIgY3VydmUgaW50ZXJwcmV0b3IgY3JlYXRlZCBmcm9tIEdhw6t0YW4gUmVuYXVkZWF1J3Mgb3JpZ2luYWwgQmV6aWVyRWFzaW5nICBcbiAgaHR0cHM6Ly9naXRodWIuY29tL2dyZS9iZXppZXItZWFzaW5nL2Jsb2IvbWFzdGVyL2luZGV4LmpzICBcbiAgaHR0cHM6Ly9naXRodWIuY29tL2dyZS9iZXppZXItZWFzaW5nL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcblxuICBBbnRpY2lwYXRlIGVhc2luZyBjcmVhdGVkIGJ5IEVsbGlvdCBHaW5vXG4gIGh0dHBzOi8vdHdpdHRlci5jb20vRWxsaW90R2Vub1xuKi9cbi8vIEltcG9ydHNcbnZhciBERUZBVUxUX0JBQ0tfU1RSRU5HVEggPSAxLjUyNTtcbnZhciBERUZBVUxUX1BPV19TVFJFTkdUSCA9IDI7XG5cbi8qXG4gIEVhY2ggb2YgdGhlc2UgYmFzZSBmdW5jdGlvbnMgaXMgYW4gZWFzZUluXG4gIFxuICBPbiBpbml0LCB3ZSB1c2UgLm1pcnJvciBhbmQgLnJldmVyc2UgdG8gZ2VuZXJhdGUgZWFzZUluT3V0IGFuZFxuICBlYXNlT3V0IGZ1bmN0aW9ucyByZXNwZWN0aXZlbHkuXG4qL1xudmFyIGJhc2VFYXNpbmcgPSB7XG4gIGVhc2U6IGZ1bmN0aW9uIChwcm9ncmVzcykge1xuICAgIHZhciBzdHJlbmd0aCA9IGFyZ3VtZW50cy5sZW5ndGggPD0gMSB8fCBhcmd1bWVudHNbMV0gPT09IHVuZGVmaW5lZCA/IERFRkFVTFRfUE9XX1NUUkVOR1RIIDogYXJndW1lbnRzWzFdO1xuICAgIHJldHVybiBNYXRoLnBvdyhwcm9ncmVzcywgc3RyZW5ndGgpO1xuICB9LFxuICBjaXJjOiBmdW5jdGlvbiAocHJvZ3Jlc3MpIHtcbiAgICByZXR1cm4gMSAtIE1hdGguc2luKE1hdGguYWNvcyhwcm9ncmVzcykpO1xuICB9LFxuICBiYWNrOiBmdW5jdGlvbiAocHJvZ3Jlc3MpIHtcbiAgICB2YXIgc3RyZW5ndGggPSBhcmd1bWVudHMubGVuZ3RoIDw9IDEgfHwgYXJndW1lbnRzWzFdID09PSB1bmRlZmluZWQgPyBERUZBVUxUX0JBQ0tfU1RSRU5HVEggOiBhcmd1bWVudHNbMV07XG4gICAgcmV0dXJuIHByb2dyZXNzICogcHJvZ3Jlc3MgKiAoKHN0cmVuZ3RoICsgMSkgKiBwcm9ncmVzcyAtIHN0cmVuZ3RoKTtcbiAgfVxufTtcblxuLy8gVXRpbGl0eSBmdW5jdGlvbnNcbnZhciBnZW5lcmF0ZVBvd2VyRWFzaW5nID0gZnVuY3Rpb24gKHN0cmVuZ3RoKSB7XG4gIHJldHVybiBmdW5jdGlvbiAocHJvZ3Jlc3MpIHtcbiAgICByZXR1cm4gYmFzZUVhc2luZy5lYXNlKHByb2dyZXNzLCBzdHJlbmd0aCk7XG4gIH07XG59O1xuXG5bJ2N1YmljJywgJ3F1YXJ0JywgJ3F1aW50J10uZm9yRWFjaChmdW5jdGlvbiAoZWFzaW5nTmFtZSwgaSkge1xuICByZXR1cm4gYmFzZUVhc2luZ1tlYXNpbmdOYW1lXSA9IGdlbmVyYXRlUG93ZXJFYXNpbmcoaSArIDMpO1xufSk7XG5cbi8vIEdlbmVyYXRlIGluL291dC9pbk91dCB2YXJpYXRpb25zXG5mb3IgKHZhciBrZXkgaW4gYmFzZUVhc2luZykge1xuICBpZiAoYmFzZUVhc2luZy5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgdmFyIGVhc2luZ0Z1bmN0aW9uID0gKDAsIF9jcmVhdGVFYXNpbmcyLmRlZmF1bHQpKGJhc2VFYXNpbmdba2V5XSk7XG4gICAgYmFzZUVhc2luZ1trZXkgKyAnSW4nXSA9IGVhc2luZ0Z1bmN0aW9uLmluO1xuICAgIGJhc2VFYXNpbmdba2V5ICsgJ091dCddID0gZWFzaW5nRnVuY3Rpb24ub3V0O1xuICAgIGJhc2VFYXNpbmdba2V5ICsgJ0luT3V0J10gPSBlYXNpbmdGdW5jdGlvbi5pbk91dDtcbiAgfVxufVxuXG5iYXNlRWFzaW5nLmxpbmVhciA9IGZ1bmN0aW9uIChwcm9ncmVzcykge1xuICByZXR1cm4gcHJvZ3Jlc3M7XG59O1xuYmFzZUVhc2luZy5hbnRpY2lwYXRlID0gZnVuY3Rpb24gKHByb2dyZXNzKSB7XG4gIHZhciBzdHJlbmd0aCA9IGFyZ3VtZW50cy5sZW5ndGggPD0gMSB8fCBhcmd1bWVudHNbMV0gPT09IHVuZGVmaW5lZCA/IERFRkFVTFRfQkFDS19TVFJFTkdUSCA6IGFyZ3VtZW50c1sxXTtcbiAgcmV0dXJuIChwcm9ncmVzcyAqPSAyKSA8IDEgPyAwLjUgKiBiYXNlRWFzaW5nLmJhY2tJbihwcm9ncmVzcywgc3RyZW5ndGgpIDogMC41ICogKDIgLSBNYXRoLnBvdygyLCAtMTAgKiAocHJvZ3Jlc3MgLSAxKSkpO1xufTtcblxuYmFzZUVhc2luZy5jcmVhdGVWYXJpYXRpb25zID0gX2NyZWF0ZUVhc2luZzIuZGVmYXVsdDtcbmJhc2VFYXNpbmcuY3ViaWNCZXppZXIgPSBfY3JlYXRlQmV6aWVyMi5kZWZhdWx0O1xuYmFzZUVhc2luZy5tb2RpZnkgPSBmdW5jdGlvbiAoZWFzaW5nKSB7XG4gIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gQXJyYXkoX2xlbiA+IDEgPyBfbGVuIC0gMSA6IDApLCBfa2V5ID0gMTsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgIGFyZ3NbX2tleSAtIDFdID0gYXJndW1lbnRzW19rZXldO1xuICB9XG5cbiAgcmV0dXJuIGZ1bmN0aW9uIChwcm9ncmVzcykge1xuICAgIHJldHVybiBlYXNpbmcuYXBwbHkodW5kZWZpbmVkLCBbcHJvZ3Jlc3NdLmNvbmNhdChhcmdzKSk7XG4gIH07XG59O1xuXG5leHBvcnRzLmRlZmF1bHQgPSBiYXNlRWFzaW5nO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluTnlZeTloWTNScGIyNXpMMlZoYzJsdVp5OXdjbVZ6WlhRdFpXRnphVzVuTG1weklsMHNJbTVoYldWeklqcGJYU3dpYldGd2NHbHVaM01pT2lJN096czdRVUV3UWtFN096czdRVUZEUVRzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPMEZCUjBFc1NVRkJUU3gzUWtGQmQwSXNTMEZCZUVJN1FVRkRUaXhKUVVGTkxIVkNRVUYxUWl4RFFVRjJRanM3T3pzN096czdRVUZSVGl4SlFVRk5MR0ZCUVdFN1FVRkRha0lzVVVGQlRTeFZRVUZETEZGQlFVUTdVVUZCVnl4cFJVRkJWenR2UWtGQmVVSXNWVUZCV1R0SFFVRXpSRHRCUVVOT0xGRkJRVTA3VjBGQldTeEpRVUZKTEV0QlFVc3NSMEZCVEN4RFFVRlRMRXRCUVVzc1NVRkJUQ3hEUVVGVkxGRkJRVllzUTBGQlZDeERRVUZLTzBkQlFWbzdRVUZEVGl4UlFVRk5MRlZCUVVNc1VVRkJSRHRSUVVGWExHbEZRVUZYTzFkQlFUQkNMRkZCUVVNc1IwRkJWeXhSUVVGWUxFbEJRWGRDTEVOQlFVTXNWMEZCVnl4RFFVRllMRU5CUVVRc1IwRkJhVUlzVVVGQmFrSXNSMEZCTkVJc1VVRkJOVUlzUTBGQmVrSTdSMEZCYUVRN1EwRklSanM3TzBGQlQwNHNTVUZCVFN4elFrRkJjMElzVlVGQlF5eFJRVUZFTzFOQlFXTXNWVUZCUXl4UlFVRkVPMWRCUVdNc1YwRkJWeXhKUVVGWUxFTkJRV2RDTEZGQlFXaENMRVZCUVRCQ0xGRkJRVEZDTzBkQlFXUTdRMEZCWkRzN1FVRkZOVUlzUTBGQlF5eFBRVUZFTEVWQlFWVXNUMEZCVml4RlFVRnRRaXhQUVVGdVFpeEZRVUUwUWl4UFFVRTFRaXhEUVVGdlF5eFZRVUZETEZWQlFVUXNSVUZCWVN4RFFVRmlPMU5CUVcxQ0xGZEJRVmNzVlVGQldDeEpRVUY1UWl4dlFrRkJiMElzU1VGQlNTeERRVUZLTEVOQlFUZERPME5CUVc1Q0xFTkJRWEJET3pzN1FVRkhRU3hMUVVGTExFbEJRVWtzUjBGQlNpeEpRVUZYTEZWQlFXaENMRVZCUVRSQ08wRkJRekZDTEUxQlFVa3NWMEZCVnl4alFVRllMRU5CUVRCQ0xFZEJRVEZDTEVOQlFVb3NSVUZCYjBNN1FVRkRiRU1zVVVGQlRTeHBRa0ZCYVVJc05FSkJRWEZDTEZkQlFWY3NSMEZCV0N4RFFVRnlRaXhEUVVGcVFpeERRVVEwUWp0QlFVVnNReXhsUVVGakxGVkJRV1FzU1VGQmVVSXNaVUZCWlN4RlFVRm1MRU5CUmxNN1FVRkhiRU1zWlVGQll5eFhRVUZrTEVsQlFUQkNMR1ZCUVdVc1IwRkJaaXhEUVVoUk8wRkJTV3hETEdWQlFXTXNZVUZCWkN4SlFVRTBRaXhsUVVGbExFdEJRV1lzUTBGS1RUdEhRVUZ3UXp0RFFVUkdPenRCUVZOQkxGZEJRVmNzVFVGQldDeEhRVUZ2UWp0VFFVRlpPME5CUVZvN1FVRkRjRUlzVjBGQlZ5eFZRVUZZTEVkQlFYZENMRlZCUVVNc1VVRkJSRHROUVVGWExHbEZRVUZYTzFOQlF6VkRMRU5CUVVVc1dVRkJWU3hEUVVGV0xFTkJRVVFzUjBGQlowSXNRMEZCYUVJc1IwRkJjVUlzVFVGQlRTeFhRVUZYTEUxQlFWZ3NRMEZCYTBJc1VVRkJiRUlzUlVGQk5FSXNVVUZCTlVJc1EwRkJUaXhIUVVFclF5eFBRVUZQTEVsQlFVa3NTMEZCU3l4SFFVRk1MRU5CUVZNc1EwRkJWQ3hGUVVGWkxFTkJRVU1zUlVGQlJDeEpRVUZQTEZkQlFWY3NRMEZCV0N4RFFVRlFMRU5CUVdoQ0xFTkJRVkE3UTBGRUwwTTdPMEZCUjNoQ0xGZEJRVmNzWjBKQlFWZzdRVUZEUVN4WFFVRlhMRmRCUVZnN1FVRkRRU3hYUVVGWExFMUJRVmdzUjBGQmIwSXNWVUZCUXl4TlFVRkVPMjlEUVVGWk96czdPMU5CUVZNc1ZVRkJReXhSUVVGRU8xZEJRV01zZVVKQlFVOHNhVUpCUVdFc1MwRkJjRUk3UjBGQlpEdERRVUZ5UWpzN2EwSkJSVXdpTENKbWFXeGxJam9pY0hKbGMyVjBMV1ZoYzJsdVp5NXFjeUlzSW5OdmRYSmpaVkp2YjNRaU9pSXZWWE5sY25NdlRXRjBkQzlUYVhSbGN5OXdiM0J0YjNScGIyNGlMQ0p6YjNWeVkyVnpRMjl1ZEdWdWRDSTZXeUl2S2x4dUlDQkZZWE5wYm1jZ1puVnVZM1JwYjI1elhHNGdJQzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMxY2JpQWdYRzRnSUVkbGJtVnlZWFJsY3lCaGJtUWdjSEp2ZG1sa1pYTWdaV0Z6YVc1bklHWjFibU4wYVc5dWN5QmlZWE5sWkNCdmJpQmlZWE5sUm5WdVkzUnBiMjRnWkdWbWFXNXBkR2x2Ym5OY2JpQWdYRzRnSUVFZ1kyRnNiQ0IwYnlCbFlYTnBibWRHZFc1amRHbHZiaTVuWlhRb0oyWjFibU4wYVc5dVRtRnRaU2NwSUhKbGRIVnlibk1nWVNCbWRXNWpkR2x2YmlCMGFHRjBJR05oYmlCaVpTQndZWE56WldRNlhHNGdJQ0FnUUhCaGNtRnRJRnR1ZFcxaVpYSmRPaUJRY205bmNtVnpjeUF3TFRGY2JpQWdJQ0JBY0dGeVlXMGdXMjUxYldKbGNsMGdLRzl3ZEdsdmJtRnNLVG9nUVcxd0lHMXZaR2xtYVdWeUxDQnZibXg1SUdGalkyVndkR1ZrSUdsdUlITnZiV1VnWldGemFXNW5JR1oxYm1OMGFXOXVjMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnWVc1a0lHbHpJSFZ6WldRZ2RHOGdZV1JxZFhOMElHOTJaWEpoYkd3Z2MzUnlaVzVuZEdoY2JpQWdJQ0JBY21WMGRYSnVJRnR1ZFcxaVpYSmRPaUJGWVhObFpDQndjbTluY21WemMxeHVJQ0FnSUZ4dUlDQlhaU0JqWVc0Z1oyVnVaWEpoZEdVZ2JtVjNJR1oxYm1OMGFXOXVjeUJpZVNCelpXNWthVzVuSUdGdUlHVmhjMmx1WnlCbWRXNWpkR2x2YmlCMGFISnZkV2RvSUdWaGMybHVaMFoxYm1OMGFXOXVMbVY0ZEdWdVpDaHVZVzFsTENCdFpYUm9iMlFwTGx4dUlDQlhhR2xqYUNCM2FXeHNJRzFoYTJVZ2JtRnRaVWx1TENCdVlXMWxUM1YwSUdGdVpDQnVZVzFsU1c1UGRYUWdablZ1WTNScGIyNXpJR0YyWVdsc1lXSnNaU0IwYnlCMWMyVXVYRzRnSUNBZ1hHNGdJRVZoYzJsdVp5Qm1kVzVqZEdsdmJuTWdabkp2YlNCU2IySmxjblFnVUdWdWJtVnlYRzRnSUdoMGRIQTZMeTkzZDNjdWNtOWlaWEowY0dWdWJtVnlMbU52YlM5bFlYTnBibWN2WEc0Z0lDQWdYRzRnSUVKbGVtbGxjaUJqZFhKMlpTQnBiblJsY25CeVpYUnZjaUJqY21WaGRHVmtJR1p5YjIwZ1IySERxM1JoYmlCU1pXNWhkV1JsWVhVbmN5QnZjbWxuYVc1aGJDQkNaWHBwWlhKRllYTnBibWNnSUZ4dUlDQm9kSFJ3Y3pvdkwyZHBkR2gxWWk1amIyMHZaM0psTDJKbGVtbGxjaTFsWVhOcGJtY3ZZbXh2WWk5dFlYTjBaWEl2YVc1a1pYZ3Vhbk1nSUZ4dUlDQm9kSFJ3Y3pvdkwyZHBkR2gxWWk1amIyMHZaM0psTDJKbGVtbGxjaTFsWVhOcGJtY3ZZbXh2WWk5dFlYTjBaWEl2VEVsRFJVNVRSVnh1WEc0Z0lFRnVkR2xqYVhCaGRHVWdaV0Z6YVc1bklHTnlaV0YwWldRZ1lua2dSV3hzYVc5MElFZHBibTljYmlBZ2FIUjBjSE02THk5MGQybDBkR1Z5TG1OdmJTOUZiR3hwYjNSSFpXNXZYRzRxTDF4dUx5OGdTVzF3YjNKMGMxeHVhVzF3YjNKMElHTnlaV0YwWlVWaGMybHVaMFoxYm1OMGFXOXVJR1p5YjIwZ0p5NHZZM0psWVhSbExXVmhjMmx1WnljN1hHNXBiWEJ2Y25RZ1kzVmlhV05DWlhwcFpYSWdabkp2YlNBbkxpOWpjbVZoZEdVdFltVjZhV1Z5Snp0Y2JseHVMeThnVm1Gc2RXVnpYRzVqYjI1emRDQkVSVVpCVlV4VVgwSkJRMHRmVTFSU1JVNUhWRWdnUFNBeExqVXlOVHRjYm1OdmJuTjBJRVJGUmtGVlRGUmZVRTlYWDFOVVVrVk9SMVJJSUQwZ01qdGNibHh1THlwY2JpQWdSV0ZqYUNCdlppQjBhR1Z6WlNCaVlYTmxJR1oxYm1OMGFXOXVjeUJwY3lCaGJpQmxZWE5sU1c1Y2JpQWdYRzRnSUU5dUlHbHVhWFFzSUhkbElIVnpaU0F1YldseWNtOXlJR0Z1WkNBdWNtVjJaWEp6WlNCMGJ5Qm5aVzVsY21GMFpTQmxZWE5sU1c1UGRYUWdZVzVrWEc0Z0lHVmhjMlZQZFhRZ1puVnVZM1JwYjI1eklISmxjM0JsWTNScGRtVnNlUzVjYmlvdlhHNWpiMjV6ZENCaVlYTmxSV0Z6YVc1bklEMGdlMXh1SUNCbFlYTmxPaUFvY0hKdlozSmxjM01zSUhOMGNtVnVaM1JvSUQwZ1JFVkdRVlZNVkY5UVQxZGZVMVJTUlU1SFZFZ3BJRDArSUhCeWIyZHlaWE56SUNvcUlITjBjbVZ1WjNSb0xGeHVJQ0JqYVhKak9pQndjbTluY21WemN5QTlQaUF4SUMwZ1RXRjBhQzV6YVc0b1RXRjBhQzVoWTI5ektIQnliMmR5WlhOektTa3NYRzRnSUdKaFkyczZJQ2h3Y205bmNtVnpjeXdnYzNSeVpXNW5kR2dnUFNCRVJVWkJWVXhVWDBKQlEwdGZVMVJTUlU1SFZFZ3BJRDArSUNod2NtOW5jbVZ6Y3lBcUlIQnliMmR5WlhOektTQXFJQ2dvYzNSeVpXNW5kR2dnS3lBeEtTQXFJSEJ5YjJkeVpYTnpJQzBnYzNSeVpXNW5kR2dwWEc1OU8xeHVYRzR2THlCVmRHbHNhWFI1SUdaMWJtTjBhVzl1YzF4dVkyOXVjM1FnWjJWdVpYSmhkR1ZRYjNkbGNrVmhjMmx1WnlBOUlDaHpkSEpsYm1kMGFDa2dQVDRnS0hCeWIyZHlaWE56S1NBOVBpQmlZWE5sUldGemFXNW5MbVZoYzJVb2NISnZaM0psYzNNc0lITjBjbVZ1WjNSb0tUdGNibHh1V3lkamRXSnBZeWNzSUNkeGRXRnlkQ2NzSUNkeGRXbHVkQ2RkTG1admNrVmhZMmdvS0dWaGMybHVaMDVoYldVc0lHa3BJRDArSUdKaGMyVkZZWE5wYm1kYlpXRnphVzVuVG1GdFpWMGdQU0JuWlc1bGNtRjBaVkJ2ZDJWeVJXRnphVzVuS0drZ0t5QXpLU2s3WEc1Y2JpOHZJRWRsYm1WeVlYUmxJR2x1TDI5MWRDOXBiazkxZENCMllYSnBZWFJwYjI1elhHNW1iM0lnS0d4bGRDQnJaWGtnYVc0Z1ltRnpaVVZoYzJsdVp5a2dlMXh1SUNCcFppQW9ZbUZ6WlVWaGMybHVaeTVvWVhOUGQyNVFjbTl3WlhKMGVTaHJaWGtwS1NCN1hHNGdJQ0FnWTI5dWMzUWdaV0Z6YVc1blJuVnVZM1JwYjI0Z1BTQmpjbVZoZEdWRllYTnBibWRHZFc1amRHbHZiaWhpWVhObFJXRnphVzVuVzJ0bGVWMHBPMXh1SUNBZ0lHSmhjMlZGWVhOcGJtZGJZQ1I3YTJWNWZVbHVZRjBnUFNCbFlYTnBibWRHZFc1amRHbHZiaTVwYmp0Y2JpQWdJQ0JpWVhObFJXRnphVzVuVzJBa2UydGxlWDFQZFhSZ1hTQTlJR1ZoYzJsdVowWjFibU4wYVc5dUxtOTFkRHRjYmlBZ0lDQmlZWE5sUldGemFXNW5XMkFrZTJ0bGVYMUpiazkxZEdCZElEMGdaV0Z6YVc1blJuVnVZM1JwYjI0dWFXNVBkWFE3WEc0Z0lIMWNibjFjYmx4dVltRnpaVVZoYzJsdVp5NXNhVzVsWVhJZ1BTQndjbTluY21WemN5QTlQaUJ3Y205bmNtVnpjenRjYm1KaGMyVkZZWE5wYm1jdVlXNTBhV05wY0dGMFpTQTlJQ2h3Y205bmNtVnpjeXdnYzNSeVpXNW5kR2dnUFNCRVJVWkJWVXhVWDBKQlEwdGZVMVJTUlU1SFZFZ3BJRDArWEc0Z0lDZ29jSEp2WjNKbGMzTXFQVElwSUR3Z01Ta2dQeUF3TGpVZ0tpQmlZWE5sUldGemFXNW5MbUpoWTJ0SmJpaHdjbTluY21WemN5d2djM1J5Wlc1bmRHZ3BJRG9nSURBdU5TQXFJQ2d5SUMwZ1RXRjBhQzV3YjNjb01pd2dMVEV3SUNvZ0tIQnliMmR5WlhOeklDMGdNU2twS1R0Y2JseHVZbUZ6WlVWaGMybHVaeTVqY21WaGRHVldZWEpwWVhScGIyNXpJRDBnWTNKbFlYUmxSV0Z6YVc1blJuVnVZM1JwYjI0N1hHNWlZWE5sUldGemFXNW5MbU4xWW1salFtVjZhV1Z5SUQwZ1kzVmlhV05DWlhwcFpYSTdYRzVpWVhObFJXRnphVzVuTG0xdlpHbG1lU0E5SUNobFlYTnBibWNzSUM0dUxtRnlaM01wSUQwK0lDaHdjbTluY21WemN5a2dQVDRnWldGemFXNW5LSEJ5YjJkeVpYTnpMQ0F1TGk1aGNtZHpLVHRjYmx4dVpYaHdiM0owSUdSbFptRjFiSFFnWW1GelpVVmhjMmx1WnpzaVhYMD1cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2FjdGlvbnMvZWFzaW5nL3ByZXNldC1lYXNpbmcuanNcbiAqKiBtb2R1bGUgaWQgPSAxOFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX0Zsb3cgPSByZXF1aXJlKCcuLi9GbG93Jyk7XG5cbnZhciBfRmxvdzIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9GbG93KTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxudmFyIFNBVkVfUFJPUCA9ICdfX3BtX2Zsb3cnO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbiAoZWxlbWVudCwgYWRhcHRlcikge1xuICBpZiAoZWxlbWVudFtTQVZFX1BST1BdKSB7XG4gICAgcmV0dXJuIGVsZW1lbnRbU0FWRV9QUk9QXTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgZmxvdyA9IG5ldyBfRmxvdzIuZGVmYXVsdCh7IGVsZW1lbnQ6IGVsZW1lbnQsIGFkYXB0ZXI6IGFkYXB0ZXIgfSk7XG5cbiAgICAvLyBCaW5kIGFkYXB0ZXIgdG8gZWxlbWVudFxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlbGVtZW50LCBTQVZFX1BST1AsIHtcbiAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgd3JpdGFibGU6IGZhbHNlLFxuICAgICAgdmFsdWU6IGZsb3dcbiAgICB9KTtcblxuICAgIHJldHVybiBmbG93O1xuICB9XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluTnlZeTloWTNScGIyNXpMMlpzYjNjdloyVjBMV1pzYjNjdWFuTWlYU3dpYm1GdFpYTWlPbHRkTENKdFlYQndhVzVuY3lJNklqczdPenRCUVVGQk96czdPenM3UVVGRlFTeEpRVUZOTEZsQlFWa3NWMEZCV2pzN2EwSkJSVk1zVlVGQlF5eFBRVUZFTEVWQlFWVXNUMEZCVml4RlFVRnpRanRCUVVOdVF5eE5RVUZKTEZGQlFWRXNVMEZCVWl4RFFVRktMRVZCUVhkQ08wRkJRM1JDTEZkQlFVOHNVVUZCVVN4VFFVRlNMRU5CUVZBc1EwRkVjMEk3UjBGQmVFSXNUVUZGVHp0QlFVTk1MRkZCUVUwc1QwRkJUeXh0UWtGQlV5eEZRVUZGTEdkQ1FVRkdMRVZCUVZjc1owSkJRVmdzUlVGQlZDeERRVUZRT3pzN1FVRkVSQ3hWUVVsTUxFTkJRVThzWTBGQlVDeERRVUZ6UWl4UFFVRjBRaXhGUVVFclFpeFRRVUV2UWl4RlFVRXdRenRCUVVONFF5eHJRa0ZCV1N4TFFVRmFPMEZCUTBFc1owSkJRVlVzUzBGQlZqdEJRVU5CTEdGQlFVOHNTVUZCVUR0TFFVaEdMRVZCU2tzN08wRkJWVXdzVjBGQlR5eEpRVUZRTEVOQlZrczdSMEZHVUR0RFFVUmhJaXdpWm1sc1pTSTZJbWRsZEMxbWJHOTNMbXB6SWl3aWMyOTFjbU5sVW05dmRDSTZJaTlWYzJWeWN5OU5ZWFIwTDFOcGRHVnpMM0J2Y0cxdmRHbHZiaUlzSW5OdmRYSmpaWE5EYjI1MFpXNTBJanBiSW1sdGNHOXlkQ0JHYkc5M0lHWnliMjBnSnk0dUwwWnNiM2NuTzF4dVhHNWpiMjV6ZENCVFFWWkZYMUJTVDFBZ1BTQW5YMTl3YlY5bWJHOTNKenRjYmx4dVpYaHdiM0owSUdSbFptRjFiSFFnS0dWc1pXMWxiblFzSUdGa1lYQjBaWElwSUQwK0lIdGNiaUFnYVdZZ0tHVnNaVzFsYm5SYlUwRldSVjlRVWs5UVhTa2dlMXh1SUNBZ0lISmxkSFZ5YmlCbGJHVnRaVzUwVzFOQlZrVmZVRkpQVUYwN1hHNGdJSDBnWld4elpTQjdYRzRnSUNBZ1kyOXVjM1FnWm14dmR5QTlJRzVsZHlCR2JHOTNLSHNnWld4bGJXVnVkQ3dnWVdSaGNIUmxjaUI5S1R0Y2JseHVJQ0FnSUM4dklFSnBibVFnWVdSaGNIUmxjaUIwYnlCbGJHVnRaVzUwWEc0Z0lDQWdUMkpxWldOMExtUmxabWx1WlZCeWIzQmxjblI1S0dWc1pXMWxiblFzSUZOQlZrVmZVRkpQVUN3Z2UxeHVJQ0FnSUNBZ1pXNTFiV1Z5WVdKc1pUb2dabUZzYzJVc1hHNGdJQ0FnSUNCM2NtbDBZV0pzWlRvZ1ptRnNjMlVzWEc0Z0lDQWdJQ0IyWVd4MVpUb2dabXh2ZDF4dUlDQWdJSDBwTzF4dVhHNGdJQ0FnY21WMGRYSnVJR1pzYjNjN1hHNGdJSDFjYm4wN1hHNWNibHh1SWwxOVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvYWN0aW9ucy9mbG93L2dldC1mbG93LmpzXG4gKiogbW9kdWxlIGlkID0gMTlcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHMuc3RlcFByb2dyZXNzID0gZXhwb3J0cy5zcGVlZFBlclNlY29uZCA9IGV4cG9ydHMuc3BlZWRQZXJGcmFtZSA9IGV4cG9ydHMuc21vb3RoID0gZXhwb3J0cy5yZXN0cmljdCA9IGV4cG9ydHMucmVsYXRpdmVWYWx1ZSA9IGV4cG9ydHMucmFuZG9tID0gZXhwb3J0cy5yYWRpYW5zVG9EZWdyZWVzID0gZXhwb3J0cy5wb2ludEZyb21BbmdsZUFuZERpc3RhbmNlID0gZXhwb3J0cy5vZmZzZXQgPSBleHBvcnRzLmdldFByb2dyZXNzRnJvbVZhbHVlID0gZXhwb3J0cy5nZXRWYWx1ZUZyb21Qcm9ncmVzcyA9IGV4cG9ydHMuaHlwb3RlbnVzZSA9IGV4cG9ydHMuZWFzZSA9IGV4cG9ydHMuZGlzdGFuY2UgPSBleHBvcnRzLmRpbGF0ZSA9IGV4cG9ydHMuZGVncmVlc1RvUmFkaWFucyA9IGV4cG9ydHMuYW5nbGUgPSB1bmRlZmluZWQ7XG5cbnZhciBfdXRpbHMgPSByZXF1aXJlKCcuL3V0aWxzJyk7XG5cbnZhciBaRVJPX1BPSU5UID0ge1xuICB4OiAwLFxuICB5OiAwLFxuICB6OiAwXG59O1xuXG52YXIgZGlzdGFuY2UxRCA9IGZ1bmN0aW9uIChhLCBiKSB7XG4gIHJldHVybiBNYXRoLmFicyhhIC0gYik7XG59O1xuXG4vKlxuICBBbmdsZSBiZXR3ZWVuIHBvaW50c1xuICBcbiAgVHJhbnNsYXRlcyB0aGUgaHlwb3RoZXRpY2FsIGxpbmUgc28gdGhhdCB0aGUgJ2Zyb20nIGNvb3JkaW5hdGVzXG4gIGFyZSBhdCAwLDBcbiAgXG4gIEBwYXJhbSBbb2JqZWN0XTogWCBhbmQgWSBjb29yZGluYXRlcyBvZiBmcm9tIHBvaW50XG4gIEBwYXJhbSBbb2JqZWN0XTogWCBhbmQgWSBjb3JkaW5hdGVzIG9mIHRvIHBvaW50XG4gIEByZXR1cm4gW3JhZGlhbl06IEFuZ2xlIGJldHdlZW4gdGhlIHR3byBwb2ludHMgaW4gcmFkaWFuc1xuKi9cbnZhciBhbmdsZSA9IGV4cG9ydHMuYW5nbGUgPSBmdW5jdGlvbiAoYSkge1xuICB2YXIgYiA9IGFyZ3VtZW50cy5sZW5ndGggPD0gMSB8fCBhcmd1bWVudHNbMV0gPT09IHVuZGVmaW5lZCA/IFpFUk9fUE9JTlQgOiBhcmd1bWVudHNbMV07XG4gIHJldHVybiByYWRpYW5zVG9EZWdyZWVzKE1hdGguYXRhbjIoYS54IC0gYi54LCBhLnkgLSBiLnkpKTtcbn07XG5cbi8qXG4gIENvbnZlcnQgZGVncmVlcyB0byByYWRpYW5zXG4gIFxuICBAcGFyYW0gW251bWJlcl06IFZhbHVlIGluIGRlZ3JlZXNcbiAgQHJldHVybiBbbnVtYmVyXTogVmFsdWUgaW4gcmFkaWFuc1xuKi9cbnZhciBkZWdyZWVzVG9SYWRpYW5zID0gZXhwb3J0cy5kZWdyZWVzVG9SYWRpYW5zID0gZnVuY3Rpb24gKGRlZ3JlZXMpIHtcbiAgcmV0dXJuIGRlZ3JlZXMgKiBNYXRoLlBJIC8gMTgwO1xufTtcblxuLypcbiAgRGlsYXRlXG4gIFxuICBDaGFuZ2UgdGhlIHByb2dyZXNzaW9uIGJldHdlZW4gYSBhbmQgYiBhY2NvcmRpbmcgdG8gZGlsYXRpb24uXG4gIFxuICBTbyBkaWxhdGlvbiA9IDAuNSB3b3VsZCBjaGFuZ2VcbiAgXG4gIGEgLS0tLS0tLS0tIGJcbiAgXG4gIHRvXG4gIFxuICBhIC0tLS0gYlxuICBcbiAgQHBhcmFtIFtudW1iZXJdOiBQcmV2aW91cyB2YWx1ZVxuICBAcGFyYW0gW251bWJlcl06IEN1cnJlbnQgdmFsdWVcbiAgQHBhcmFtIFtudW1iZXJdOiBEaWxhdGUgcHJvZ3Jlc3MgYnkgeFxuICBAcmV0dXJuIFtudW1iZXJdOiBQcmV2aW91cyB2YWx1ZSBwbHVzIHRoZSBkaWxhdGVkIGRpZmZlcmVuY2VcbiovXG52YXIgZGlsYXRlID0gZXhwb3J0cy5kaWxhdGUgPSBmdW5jdGlvbiAoYSwgYiwgZGlsYXRpb24pIHtcbiAgcmV0dXJuIGEgKyAoYiAtIGEpICogZGlsYXRpb247XG59O1xuXG4vKlxuICBEaXN0YW5jZVxuICBcbiAgUmV0dXJucyB0aGUgZGlzdGFuY2UgYmV0d2VlbiB0d28gbiBkaW1lbnNpb25hbCBwb2ludHMuXG4gIFxuICBAcGFyYW0gW29iamVjdC9udW1iZXJdOiB4IGFuZCB5IG9yIGp1c3QgeCBvZiBwb2ludCBBXG4gIEBwYXJhbSBbb2JqZWN0L251bWJlcl06IChvcHRpb25hbCk6IHggYW5kIHkgb3IganVzdCB4IG9mIHBvaW50IEJcbiAgQHJldHVybiBbbnVtYmVyXTogVGhlIGRpc3RhbmNlIGJldHdlZW4gdGhlIHR3byBwb2ludHNcbiovXG52YXIgZGlzdGFuY2UgPSBleHBvcnRzLmRpc3RhbmNlID0gZnVuY3Rpb24gKGEpIHtcbiAgdmFyIGIgPSBhcmd1bWVudHMubGVuZ3RoIDw9IDEgfHwgYXJndW1lbnRzWzFdID09PSB1bmRlZmluZWQgPyBaRVJPX1BPSU5UIDogYXJndW1lbnRzWzFdO1xuXG4gIC8vIDFEIGRpbWVuc2lvbnNcbiAgaWYgKCgwLCBfdXRpbHMuaXNOdW0pKGEpKSB7XG4gICAgcmV0dXJuIGRpc3RhbmNlMUQoYSwgYik7XG5cbiAgICAvLyBNdWx0aS1kaW1lbnNpb25hbFxuICB9IGVsc2Uge1xuICAgICAgdmFyIHhEZWx0YSA9IGRpc3RhbmNlMUQoYS54LCBiLngpO1xuICAgICAgdmFyIHlEZWx0YSA9IGRpc3RhbmNlMUQoYS55LCBiLnkpO1xuICAgICAgdmFyIHpEZWx0YSA9ICgwLCBfdXRpbHMuaXNOdW0pKGEueikgPyBkaXN0YW5jZTFEKGEueiwgYi56KSA6IDA7XG5cbiAgICAgIHJldHVybiBNYXRoLnNxcnQoTWF0aC5wb3coeERlbHRhLCAyKSArIE1hdGgucG93KHlEZWx0YSwgMikgKyBNYXRoLnBvdyh6RGVsdGEsIDIpKTtcbiAgICB9XG59O1xuXG4vKlxuICBFYXNlIHZhbHVlIHdpdGhpbiByYW5nZWQgcGFyYW1ldGVyc1xuICBcbiAgQHBhcmFtIFtudW1iZXJdOiBQcm9ncmVzcyBiZXR3ZWVuIDAgYW5kIDFcbiAgQHBhcmFtIFtudW1iZXJdOiBWYWx1ZSBvZiAwIHByb2dyZXNzXG4gIEBwYXJhbSBbbnVtYmVyXTogVmFsdWUgb2YgMSBwcm9ncmVzc1xuICBAcGFyYW0gW3N0cmluZyB8fCBmdW5jdGlvbl06IE5hbWUgb2YgcHJlc2V0IGVhc2luZ1xuICAgIHRvIHVzZSBvciBnZW5lcmF0ZWQgZWFzaW5nIGZ1bmN0aW9uXG4gIEByZXR1cm4gW251bWJlcl06IFZhbHVlIG9mIGVhc2VkIHByb2dyZXNzIGluIHJhbmdlXG4qL1xudmFyIGVhc2UgPSBleHBvcnRzLmVhc2UgPSBmdW5jdGlvbiAocHJvZ3Jlc3MsIGZyb20sIHRvLCBlYXNlKSB7XG4gIHZhciBwcm9ncmVzc0xpbWl0ZWQgPSByZXN0cmljdChwcm9ncmVzcywgMCwgMSk7XG4gIHZhciBlYXNlZFByb2dyZXNzID0gZWFzZShwcm9ncmVzc0xpbWl0ZWQpO1xuXG4gIHJldHVybiBnZXRWYWx1ZUZyb21Qcm9ncmVzcyhlYXNlZFByb2dyZXNzLCBmcm9tLCB0byk7XG59O1xuXG4vKlxuICBIeXBvdGVudXNlXG4gIFxuICBSZXR1cm5zIHRoZSBoeXBvdGVudXNlLCBzaWRlIEMsIGdpdmVuIHRoZSBsZW5ndGhzIG9mIHNpZGVzIEEgYW5kIEIuXG4gIFxuICBAcGFyYW0gW251bWJlcl06IExlbmd0aCBvZiBBXG4gIEBwYXJhbSBbbnVtYmVyXTogTGVuZ3RoIG9mIEJcbiAgQHJldHVybiBbbnVtYmVyXTogTGVuZ3RoIG9mIENcbiovXG52YXIgaHlwb3RlbnVzZSA9IGV4cG9ydHMuaHlwb3RlbnVzZSA9IGZ1bmN0aW9uIChhLCBiKSB7XG4gIHJldHVybiBNYXRoLnNxcnQoYSAqIGEgKyBiICogYik7XG59O1xuXG4vKlxuICBWYWx1ZSBpbiByYW5nZSBmcm9tIHByb2dyZXNzXG4gIFxuICBHaXZlbiBhIGxvd2VyIGxpbWl0IGFuZCBhbiB1cHBlciBsaW1pdCwgd2UgcmV0dXJuIHRoZSB2YWx1ZSB3aXRoaW5cbiAgdGhhdCByYW5nZSBhcyBleHByZXNzZWQgYnkgcHJvZ3Jlc3MgKGEgbnVtYmVyIGZyb20gMC0xKVxuICBcbiAgQHBhcmFtIFtudW1iZXJdOiBUaGUgcHJvZ3Jlc3MgYmV0d2VlbiBsb3dlciBhbmQgdXBwZXIgbGltaXRzIGV4cHJlc3NlZCAwLTFcbiAgQHBhcmFtIFtudW1iZXJdOiBMb3dlciBsaW1pdCBvZiByYW5nZVxuICBAcGFyYW0gW251bWJlcl06IFVwcGVyIGxpbWl0IG9mIHJhbmdlXG4gIEByZXR1cm4gW251bWJlcl06IFZhbHVlIGFzIGNhbGN1bGF0ZWQgZnJvbSBwcm9ncmVzcyB3aXRoaW4gcmFuZ2UgKG5vdCBsaW1pdGVkIHdpdGhpbiByYW5nZSlcbiovXG52YXIgZ2V0VmFsdWVGcm9tUHJvZ3Jlc3MgPSBleHBvcnRzLmdldFZhbHVlRnJvbVByb2dyZXNzID0gZnVuY3Rpb24gKHByb2dyZXNzLCBmcm9tLCB0bykge1xuICByZXR1cm4gLXByb2dyZXNzICogZnJvbSArIHByb2dyZXNzICogdG8gKyBmcm9tO1xufTtcblxuLypcbiAgUHJvZ3Jlc3Mgd2l0aGluIGdpdmVuIHJhbmdlXG4gIFxuICBHaXZlbiBhIGxvd2VyIGxpbWl0IGFuZCBhbiB1cHBlciBsaW1pdCwgd2UgcmV0dXJuIHRoZSBwcm9ncmVzc1xuICAoZXhwcmVzc2VkIGFzIGEgbnVtYmVyIDAtMSkgcmVwcmVzZW50ZWQgYnkgdGhlIGdpdmVuIHZhbHVlLCBhbmRcbiAgbGltaXQgdGhhdCBwcm9ncmVzcyB0byB3aXRoaW4gMC0xLlxuICBcbiAgQHBhcmFtIFtudW1iZXJdOiBWYWx1ZSB0byBmaW5kIHByb2dyZXNzIHdpdGhpbiBnaXZlbiByYW5nZVxuICBAcGFyYW0gW251bWJlcl06IExvd2VyIGxpbWl0IFxuICBAcGFyYW0gW251bWJlcl06IFVwcGVyIGxpbWl0XG4gIEByZXR1cm4gW251bWJlcl06IFByb2dyZXNzIG9mIHZhbHVlIHdpdGhpbiByYW5nZSBhcyBleHByZXNzZWQgMC0xXG4qL1xudmFyIGdldFByb2dyZXNzRnJvbVZhbHVlID0gZXhwb3J0cy5nZXRQcm9ncmVzc0Zyb21WYWx1ZSA9IGZ1bmN0aW9uICh2YWx1ZSwgZnJvbSwgdG8pIHtcbiAgcmV0dXJuICh2YWx1ZSAtIGZyb20pIC8gKHRvIC0gZnJvbSk7XG59O1xuXG4vKlxuICBPZmZzZXQgYmV0d2VlbiB0d28gb2JqZWN0cyBvZiBudW1iZXJzXG5cbiAgSWYgcHJvcGVydHkgaXMgZm91bmQgaW4gYiBub3QgcHJlc2VudCBpbiBhLCBpdCB3aWxsIHJldHVybiBgMGAgZm9yIHRoYXQgcHJvcC5cbiAgXG4gIEBwYXJhbSBbUG9pbnRdOiBGaXJzdCBvYmplY3RcbiAgQHBhcmFtIFtQb2ludF06IFNlY29uZCBvYmplY3RcbiAgQHJldHVybiBbT2Zmc2V0XTogRGlzdGFuY2UgbWV0cmljcyBiZXR3ZWVuIHR3byBwb2ludHNcbiovXG52YXIgb2Zmc2V0ID0gZXhwb3J0cy5vZmZzZXQgPSBmdW5jdGlvbiAoYSwgYikge1xuICB2YXIgb2Zmc2V0ID0ge307XG5cbiAgZm9yICh2YXIga2V5IGluIGIpIHtcbiAgICBpZiAoYi5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICBvZmZzZXRba2V5XSA9ICgwLCBfdXRpbHMuaGFzUHJvcGVydHkpKGEsIGtleSkgPyBiW2tleV0gLSBhW2tleV0gOiAwO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBvZmZzZXQ7XG59O1xuXG4vKlxuICBQb2ludCBmcm9tIGFuZ2xlIGFuZCBkaXN0YW5jZVxuICBcbiAgQHBhcmFtIFtvYmplY3RdOiAyRCBwb2ludCBvZiBvcmlnaW5cbiAgQHBhcmFtIFtudW1iZXJdOiBBbmdsZSBmcm9tIG9yaWdpblxuICBAcGFyYW0gW251bWJlcl06IERpc3RhbmNlIGZyb20gb3JpZ2luXG4gIEByZXR1cm4gW29iamVjdF06IENhbGN1bGF0ZWQgMkQgcG9pbnRcbiovXG52YXIgcG9pbnRGcm9tQW5nbGVBbmREaXN0YW5jZSA9IGV4cG9ydHMucG9pbnRGcm9tQW5nbGVBbmREaXN0YW5jZSA9IGZ1bmN0aW9uIChvcmlnaW4sIGFuZ2xlLCBkaXN0YW5jZSkge1xuICBhbmdsZSA9IGRlZ3JlZXNUb1JhZGlhbnMoYW5nbGUpO1xuXG4gIHJldHVybiB7XG4gICAgeDogZGlzdGFuY2UgKiBNYXRoLmNvcyhhbmdsZSkgKyBvcmlnaW4ueCxcbiAgICB5OiBkaXN0YW5jZSAqIE1hdGguc2luKGFuZ2xlKSArIG9yaWdpbi55XG4gIH07XG59O1xuXG4vKlxuICBDb252ZXJ0IHJhZGlhbnMgdG8gZGVncmVlc1xuICBcbiAgQHBhcmFtIFtudW1iZXJdOiBWYWx1ZSBpbiByYWRpYW5zXG4gIEByZXR1cm4gW251bWJlcl06IFZhbHVlIGluIGRlZ3JlZXNcbiovXG52YXIgcmFkaWFuc1RvRGVncmVlcyA9IGV4cG9ydHMucmFkaWFuc1RvRGVncmVlcyA9IGZ1bmN0aW9uIChyYWRpYW5zKSB7XG4gIHJldHVybiByYWRpYW5zICogMTgwIC8gTWF0aC5QSTtcbn07XG5cbi8qXG4gIFJldHVybiByYW5kb20gbnVtYmVyIGJldHdlZW4gcmFuZ2VcbiAgXG4gIEBwYXJhbSBbbnVtYmVyXSAob3B0aW9uYWwpOiBPdXRwdXQgbWluaW11bVxuICBAcGFyYW0gW251bWJlcl0gKG9wdGlvbmFsKTogT3V0cHV0IG1heGltdW1cbiAgQHJldHVybiBbbnVtYmVyXTogUmFuZG9tIG51bWJlciB3aXRoaW4gcmFuZ2UsIG9yIDAgYW5kIDEgaWYgbm9uZSBwcm92aWRlZFxuKi9cbnZhciByYW5kb20gPSBleHBvcnRzLnJhbmRvbSA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIG1pbiA9IGFyZ3VtZW50cy5sZW5ndGggPD0gMCB8fCBhcmd1bWVudHNbMF0gPT09IHVuZGVmaW5lZCA/IDAgOiBhcmd1bWVudHNbMF07XG4gIHZhciBtYXggPSBhcmd1bWVudHMubGVuZ3RoIDw9IDEgfHwgYXJndW1lbnRzWzFdID09PSB1bmRlZmluZWQgPyAxIDogYXJndW1lbnRzWzFdO1xuICByZXR1cm4gTWF0aC5yYW5kb20oKSAqIChtYXggLSBtaW4pICsgbWluO1xufTtcblxuLypcbiAgQ2FsY3VsYXRlIHJlbGF0aXZlIHZhbHVlXG4gIFxuICBUYWtlcyB0aGUgb3BlcmF0b3IgYW5kIHZhbHVlIGZyb20gYSBzdHJpbmcsIGllIFwiKz01XCIsIGFuZCBhcHBsaWVzXG4gIHRvIHRoZSBjdXJyZW50IHZhbHVlIHRvIHJlc29sdmUgYSBuZXcgdGFyZ2V0LlxuICBcbiAgQHBhcmFtIFtudW1iZXJdOiBDdXJyZW50IHZhbHVlXG4gIEBwYXJhbSBbc3RyaW5nXTogUmVsYXRpdmUgdmFsdWVcbiAgQHJldHVybiBbbnVtYmVyXTogTmV3IHZhbHVlXG4qL1xudmFyIHJlbGF0aXZlVmFsdWUgPSBleHBvcnRzLnJlbGF0aXZlVmFsdWUgPSBmdW5jdGlvbiAoY3VycmVudCwgcmVsYXRpdmUpIHtcbiAgdmFyIG5ld1ZhbHVlID0gY3VycmVudDtcbiAgdmFyIGVxdWF0aW9uID0gcmVsYXRpdmUuc3BsaXQoJz0nKTtcbiAgdmFyIG9wZXJhdG9yID0gZXF1YXRpb25bMF07XG5cbiAgdmFyIF9maW5kVmFsdWVBbmRVbml0ID0gKDAsIF91dGlscy5maW5kVmFsdWVBbmRVbml0KShlcXVhdGlvblsxXSk7XG5cbiAgdmFyIHVuaXQgPSBfZmluZFZhbHVlQW5kVW5pdC51bml0O1xuICB2YXIgdmFsdWUgPSBfZmluZFZhbHVlQW5kVW5pdC52YWx1ZTtcblxuXG4gIHZhbHVlID0gcGFyc2VGbG9hdCh2YWx1ZSk7XG5cbiAgc3dpdGNoIChvcGVyYXRvcikge1xuICAgIGNhc2UgJysnOlxuICAgICAgbmV3VmFsdWUgKz0gdmFsdWU7XG4gICAgICBicmVhaztcbiAgICBjYXNlICctJzpcbiAgICAgIG5ld1ZhbHVlIC09IHZhbHVlO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAnKic6XG4gICAgICBuZXdWYWx1ZSAqPSB2YWx1ZTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJy8nOlxuICAgICAgbmV3VmFsdWUgLz0gdmFsdWU7XG4gICAgICBicmVhaztcbiAgfVxuXG4gIGlmICh1bml0KSB7XG4gICAgbmV3VmFsdWUgKz0gdW5pdDtcbiAgfVxuXG4gIHJldHVybiBuZXdWYWx1ZTtcbn07XG5cbi8qXG4gIFJlc3RyaWN0IHZhbHVlIHRvIHJhbmdlXG4gIFxuICBSZXR1cm4gdmFsdWUgd2l0aGluIHRoZSByYW5nZSBvZiBsb3dlckxpbWl0IGFuZCB1cHBlckxpbWl0XG4gIFxuICBAcGFyYW0gW251bWJlcl06IFZhbHVlIHRvIGtlZXAgd2l0aGluIHJhbmdlXG4gIEBwYXJhbSBbbnVtYmVyXTogTG93ZXIgbGltaXQgb2YgcmFuZ2VcbiAgQHBhcmFtIFtudW1iZXJdOiBVcHBlciBsaW1pdCBvZiByYW5nZVxuICBAcmV0dXJuIFtudW1iZXJdOiBWYWx1ZSBhcyBsaW1pdGVkIHdpdGhpbiBnaXZlbiByYW5nZVxuKi9cbnZhciByZXN0cmljdCA9IGV4cG9ydHMucmVzdHJpY3QgPSBmdW5jdGlvbiAodmFsdWUsIG1pbiwgbWF4KSB7XG4gIHJldHVybiBNYXRoLm1heChNYXRoLm1pbih2YWx1ZSwgbWF4KSwgbWluKTtcbn07XG5cbi8qXG4gIEZyYW1lcmF0ZS1pbmRlcGVuZGVudCBzbW9vdGhpbmdcblxuICBAcGFyYW0gW251bWJlcl06IE5ldyB2YWx1ZVxuICBAcGFyYW0gW251bWJlcl06IE9sZCB2YWx1ZVxuICBAcGFyYW0gW251bWJlcl06IEZyYW1lIGR1cmF0aW9uXG4gIEBwYXJhbSBbbnVtYmVyXSAob3B0aW9uYWwpOiBTbW9vdGhpbmcgKDAgaXMgbm9uZSlcbiovXG52YXIgc21vb3RoID0gZXhwb3J0cy5zbW9vdGggPSBmdW5jdGlvbiAobmV3VmFsdWUsIG9sZFZhbHVlLCBkdXJhdGlvbikge1xuICB2YXIgc21vb3RoaW5nID0gYXJndW1lbnRzLmxlbmd0aCA8PSAzIHx8IGFyZ3VtZW50c1szXSA9PT0gdW5kZWZpbmVkID8gMCA6IGFyZ3VtZW50c1szXTtcbiAgcmV0dXJuICgwLCBfdXRpbHMudG9EZWNpbWFsKShvbGRWYWx1ZSArIGR1cmF0aW9uICogKG5ld1ZhbHVlIC0gb2xkVmFsdWUpIC8gTWF0aC5tYXgoc21vb3RoaW5nLCBkdXJhdGlvbikpO1xufTtcblxuLypcbiAgQ29udmVydCB4IHBlciBzZWNvbmQgdG8gcGVyIGZyYW1lIHZlbG9jaXR5IGJhc2VkIG9uIGZwc1xuICBcbiAgQHBhcmFtIFtudW1iZXJdOiBVbml0IHBlciBzZWNvbmRcbiAgQHBhcmFtIFtudW1iZXJdOiBGcmFtZSBkdXJhdGlvbiBpbiBtc1xuKi9cbnZhciBzcGVlZFBlckZyYW1lID0gZXhwb3J0cy5zcGVlZFBlckZyYW1lID0gZnVuY3Rpb24gKHhwcywgZnJhbWVEdXJhdGlvbikge1xuICByZXR1cm4gKDAsIF91dGlscy5pc051bSkoeHBzKSA/IHhwcyAvICgxMDAwIC8gZnJhbWVEdXJhdGlvbikgOiAwO1xufTtcblxuLypcbiAgQ29udmVydCB2ZWxvY2l0eSBpbnRvIHZlbGljaXR5IHBlciBzZWNvbmRcbiAgXG4gIEBwYXJhbSBbbnVtYmVyXTogVW5pdCBwZXIgZnJhbWVcbiAgQHBhcmFtIFtudW1iZXJdOiBGcmFtZSBkdXJhdGlvbiBpbiBtc1xuKi9cbnZhciBzcGVlZFBlclNlY29uZCA9IGV4cG9ydHMuc3BlZWRQZXJTZWNvbmQgPSBmdW5jdGlvbiAodmVsb2NpdHksIGZyYW1lRHVyYXRpb24pIHtcbiAgcmV0dXJuIHZlbG9jaXR5ICogKDEwMDAgLyBmcmFtZUR1cmF0aW9uKTtcbn07XG5cbi8qXG4gIENyZWF0ZSBzdGVwcGVkIHZlcnNpb24gb2YgMC0xIHByb2dyZXNzXG4gIFxuICBAcGFyYW0gW251bWJlcl06IEN1cnJlbnQgdmFsdWVcbiAgQHBhcmFtIFtpbnRdOiBOdW1iZXIgb2Ygc3RlcHNcbiAgQHJldHVybiBbbnVtYmVyXTogU3RlcHBlZCB2YWx1ZVxuKi9cbnZhciBzdGVwUHJvZ3Jlc3MgPSBleHBvcnRzLnN0ZXBQcm9ncmVzcyA9IGZ1bmN0aW9uIChwcm9ncmVzcywgc3RlcHMpIHtcbiAgdmFyIHNlZ21lbnQgPSAxIC8gKHN0ZXBzIC0gMSk7XG4gIHZhciB0YXJnZXQgPSAxIC0gMSAvIHN0ZXBzO1xuICB2YXIgcHJvZ3Jlc3NPZlRhcmdldCA9IE1hdGgubWluKHByb2dyZXNzIC8gdGFyZ2V0LCAxKTtcblxuICByZXR1cm4gTWF0aC5mbG9vcihwcm9ncmVzc09mVGFyZ2V0IC8gc2VnbWVudCkgKiBzZWdtZW50O1xufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbk55WXk5cGJtTXZZMkZzWXk1cWN5SmRMQ0p1WVcxbGN5STZXMTBzSW0xaGNIQnBibWR6SWpvaU96czdPenRCUVVGQk96dEJRVTlCTEVsQlFVMHNZVUZCWVR0QlFVTnFRaXhMUVVGSExFTkJRVWc3UVVGRFFTeExRVUZITEVOQlFVZzdRVUZEUVN4TFFVRkhMRU5CUVVnN1EwRklTVHM3UVVGTlRpeEpRVUZOTEdGQlFXRXNWVUZCUXl4RFFVRkVMRVZCUVVrc1EwRkJTanRUUVVGVkxFdEJRVXNzUjBGQlRDeERRVUZUTEVsQlFVa3NRMEZCU2p0RFFVRnVRanM3T3pzN096czdPenM3TzBGQldWb3NTVUZCVFN4M1FrRkJVU3hWUVVGRExFTkJRVVE3VFVGQlNTd3dSRUZCU1R0VFFVRmxMR2xDUVVGcFFpeExRVUZMTEV0QlFVd3NRMEZCVnl4RlFVRkZMRU5CUVVZc1IwRkJUU3hGUVVGRkxFTkJRVVlzUlVGQlN5eEZRVUZGTEVOQlFVWXNSMEZCVFN4RlFVRkZMRU5CUVVZc1EwRkJOME03UTBGQmRrSTdPenM3T3pzN08wRkJVV1FzU1VGQlRTdzRRMEZCYlVJc1ZVRkJReXhQUVVGRU8xTkJRV0VzVlVGQlZTeExRVUZMTEVWQlFVd3NSMEZCVlN4SFFVRndRanREUVVGaU96czdPenM3T3pzN096czdPenM3T3pzN096dEJRVzlDZWtJc1NVRkJUU3d3UWtGQlV5eFZRVUZETEVOQlFVUXNSVUZCU1N4RFFVRktMRVZCUVU4c1VVRkJVRHRUUVVGdlFpeEpRVUZMTEVOQlFVTXNTVUZCU1N4RFFVRktMRU5CUVVRc1IwRkJWU3hSUVVGV08wTkJRWHBDT3pzN096czdPenM3T3p0QlFWZG1MRWxCUVUwc09FSkJRVmNzVlVGQlF5eERRVUZFTEVWQlFYVkNPMDFCUVc1Q0xEQkVRVUZKTERCQ1FVRmxPenM3UVVGRk4wTXNUVUZCU1N4clFrRkJUU3hEUVVGT0xFTkJRVW9zUlVGQll6dEJRVU5hTEZkQlFVOHNWMEZCVnl4RFFVRllMRVZCUVdNc1EwRkJaQ3hEUVVGUU96czdRVUZFV1N4SFFVRmtMRTFCU1U4N1FVRkRUQ3hWUVVGTkxGTkJRVk1zVjBGQlZ5eEZRVUZGTEVOQlFVWXNSVUZCU3l4RlFVRkZMRU5CUVVZc1EwRkJla0lzUTBGRVJEdEJRVVZNTEZWQlFVMHNVMEZCVXl4WFFVRlhMRVZCUVVVc1EwRkJSaXhGUVVGTExFVkJRVVVzUTBGQlJpeERRVUY2UWl4RFFVWkVPMEZCUjB3c1ZVRkJUU3hUUVVGVExHbENRVUZETEVOQlFVMHNSVUZCUlN4RFFVRkdMRU5CUVZBc1IwRkJaU3hYUVVGWExFVkJRVVVzUTBGQlJpeEZRVUZMTEVWQlFVVXNRMEZCUml4RFFVRXZRaXhIUVVGelF5eERRVUYwUXl4RFFVaFdPenRCUVV0TUxHRkJRVThzUzBGQlN5eEpRVUZNTEVOQlFWVXNVMEZCUXl4UlFVRlZMRVZCUVZnc1dVRkJhVUlzVVVGQlZTeEZRVUV6UWl4WlFVRnBReXhSUVVGVkxFVkJRVE5ETEVOQlFXcENMRU5CVEVzN1MwRktVRHREUVVaelFqczdPenM3T3pzN096czdPMEZCZVVKcVFpeEpRVUZOTEhOQ1FVRlBMRlZCUVVNc1VVRkJSQ3hGUVVGWExFbEJRVmdzUlVGQmFVSXNSVUZCYWtJc1JVRkJjVUlzU1VGQmNrSXNSVUZCT0VJN1FVRkRhRVFzVFVGQlRTeHJRa0ZCYTBJc1UwRkJVeXhSUVVGVUxFVkJRVzFDTEVOQlFXNUNMRVZCUVhOQ0xFTkJRWFJDTEVOQlFXeENMRU5CUkRCRE8wRkJSV2hFTEUxQlFVMHNaMEpCUVdkQ0xFdEJRVXNzWlVGQlRDeERRVUZvUWl4RFFVWXdRenM3UVVGSmFFUXNVMEZCVHl4eFFrRkJjVUlzWVVGQmNrSXNSVUZCYjBNc1NVRkJjRU1zUlVGQk1FTXNSVUZCTVVNc1EwRkJVQ3hEUVVwblJEdERRVUU1UWpzN096czdPenM3T3pzN1FVRm5RbUlzU1VGQlRTeHJRMEZCWVN4VlFVRkRMRU5CUVVRc1JVRkJTU3hEUVVGS08xTkJRVlVzUzBGQlN5eEpRVUZNTEVOQlFWVXNRMEZCUXl4SFFVRkpMRU5CUVVvc1IwRkJWU3hKUVVGSkxFTkJRVW83UTBGQkwwSTdPenM3T3pzN096czdPenM3UVVGaGJrSXNTVUZCVFN4elJFRkJkVUlzVlVGQlF5eFJRVUZFTEVWQlFWY3NTVUZCV0N4RlFVRnBRaXhGUVVGcVFqdFRRVUYzUWl4RFFVRkhMRkZCUVVZc1IwRkJZU3hKUVVGaUxFZEJRWE5DTEZkQlFWY3NSVUZCV0N4SFFVRnBRaXhKUVVGNFF6dERRVUY0UWpzN096czdPenM3T3pzN096czdRVUZqTjBJc1NVRkJUU3h6UkVGQmRVSXNWVUZCUXl4TFFVRkVMRVZCUVZFc1NVRkJVaXhGUVVGakxFVkJRV1E3VTBGQmNVSXNRMEZCUXl4UlFVRlJMRWxCUVZJc1EwRkJSQ3hKUVVGclFpeExRVUZMTEVsQlFVd3NRMEZCYkVJN1EwRkJja0k3T3pzN096czdPenM3TzBGQlZ6ZENMRWxCUVUwc01FSkJRVk1zVlVGQlF5eERRVUZFTEVWQlFVa3NRMEZCU2l4RlFVRlZPMEZCUXpsQ0xFMUJRVTBzVTBGQlV5eEZRVUZVTEVOQlJIZENPenRCUVVjNVFpeFBRVUZMTEVsQlFVa3NSMEZCU2l4SlFVRlhMRU5CUVdoQ0xFVkJRVzFDTzBGQlEycENMRkZCUVVrc1JVRkJSU3hqUVVGR0xFTkJRV2xDTEVkQlFXcENMRU5CUVVvc1JVRkJNa0k3UVVGRGVrSXNZVUZCVHl4SFFVRlFMRWxCUVdNc2QwSkJRVmtzUTBGQldpeEZRVUZsTEVkQlFXWXNTVUZCYzBJc1JVRkJSU3hIUVVGR0xFbEJRVk1zUlVGQlJTeEhRVUZHTEVOQlFWUXNSMEZCYTBJc1EwRkJlRU1zUTBGRVZ6dExRVUV6UWp0SFFVUkdPenRCUVUxQkxGTkJRVThzVFVGQlVDeERRVlE0UWp0RFFVRldPenM3T3pzN096czdPMEZCYjBKbUxFbEJRVTBzWjBWQlFUUkNMRlZCUVVNc1RVRkJSQ3hGUVVGVExFdEJRVlFzUlVGQlowSXNVVUZCYUVJc1JVRkJOa0k3UVVGRGNFVXNWVUZCVVN4cFFrRkJhVUlzUzBGQmFrSXNRMEZCVWl4RFFVUnZSVHM3UVVGSGNFVXNVMEZCVHp0QlFVTk1MRTlCUVVjc1YwRkJWeXhMUVVGTExFZEJRVXdzUTBGQlV5eExRVUZVTEVOQlFWZ3NSMEZCTmtJc1QwRkJUeXhEUVVGUU8wRkJRMmhETEU5QlFVY3NWMEZCVnl4TFFVRkxMRWRCUVV3c1EwRkJVeXhMUVVGVUxFTkJRVmdzUjBGQk5rSXNUMEZCVHl4RFFVRlFPMGRCUm14RExFTkJTRzlGTzBOQlFUZENPenM3T3pzN096dEJRV1ZzUXl4SlFVRk5MRGhEUVVGdFFpeFZRVUZETEU5QlFVUTdVMEZCWVN4VlFVRlZMRWRCUVZZc1IwRkJaMElzUzBGQlN5eEZRVUZNTzBOQlFUZENPenM3T3pzN096czdRVUZUZWtJc1NVRkJUU3d3UWtGQlV6dE5RVUZETERSRVFVRk5PMDFCUVVjc05FUkJRVTA3VTBGQlRTeExRVUZMTEUxQlFVd3NUVUZCYVVJc1RVRkJUU3hIUVVGT0xFTkJRV3BDTEVkQlFUaENMRWRCUVRsQ08wTkJRWFJDT3pzN096czdPenM3T3pzN1FVRlpaaXhKUVVGTkxIZERRVUZuUWl4VlFVRkRMRTlCUVVRc1JVRkJWU3hSUVVGV0xFVkJRWFZDTzBGQlEyeEVMRTFCUVVrc1YwRkJWeXhQUVVGWUxFTkJSRGhETzBGQlJXeEVMRTFCUVUwc1YwRkJWeXhUUVVGVExFdEJRVlFzUTBGQlpTeEhRVUZtTEVOQlFWZ3NRMEZHTkVNN1FVRkhiRVFzVFVGQlRTeFhRVUZYTEZOQlFWTXNRMEZCVkN4RFFVRllMRU5CU0RSRE96c3dRa0ZKTlVJc05rSkJRV2xDTEZOQlFWTXNRMEZCVkN4RFFVRnFRaXhGUVVvMFFqczdUVUZKTlVNc09FSkJTalJETzAxQlNYUkRMR2REUVVwelF6czdPMEZCVFd4RUxGVkJRVkVzVjBGQlZ5eExRVUZZTEVOQlFWSXNRMEZPYTBRN08wRkJVV3hFTEZWQlFWRXNVVUZCVWp0QlFVTkJMRk5CUVVzc1IwRkJURHRCUVVORkxHdENRVUZaTEV0QlFWb3NRMEZFUmp0QlFVVkZMRmxCUmtZN1FVRkVRU3hUUVVsTExFZEJRVXc3UVVGRFJTeHJRa0ZCV1N4TFFVRmFMRU5CUkVZN1FVRkZSU3haUVVaR08wRkJTa0VzVTBGUFN5eEhRVUZNTzBGQlEwVXNhMEpCUVZrc1MwRkJXaXhEUVVSR08wRkJSVVVzV1VGR1JqdEJRVkJCTEZOQlZVc3NSMEZCVER0QlFVTkZMR3RDUVVGWkxFdEJRVm9zUTBGRVJqdEJRVVZGTEZsQlJrWTdRVUZXUVN4SFFWSnJSRHM3UVVGMVFteEVMRTFCUVVrc1NVRkJTaXhGUVVGVk8wRkJRMUlzWjBKQlFWa3NTVUZCV2l4RFFVUlJPMGRCUVZZN08wRkJTVUVzVTBGQlR5eFJRVUZRTEVOQk0wSnJSRHREUVVGMlFqczdPenM3T3pzN096czdPMEZCZDBOMFFpeEpRVUZOTERoQ1FVRlhMRlZCUVVNc1MwRkJSQ3hGUVVGUkxFZEJRVklzUlVGQllTeEhRVUZpTzFOQlFYRkNMRXRCUVVzc1IwRkJUQ3hEUVVGVExFdEJRVXNzUjBGQlRDeERRVUZUTEV0QlFWUXNSVUZCWjBJc1IwRkJhRUlzUTBGQlZDeEZRVUVyUWl4SFFVRXZRanREUVVGeVFqczdPenM3T3pzN096dEJRVlZxUWl4SlFVRk5MREJDUVVGVExGVkJRVU1zVVVGQlJDeEZRVUZYTEZGQlFWZ3NSVUZCY1VJc1VVRkJja0k3VFVGQkswSXNhMFZCUVZrN1UwRkJUU3h6UWtGQlZTeFhRVUZaTEZsQlFWa3NWMEZCVnl4UlFVRllMRU5CUVZvc1IwRkJiVU1zUzBGQlN5eEhRVUZNTEVOQlFWTXNVMEZCVkN4RlFVRnZRaXhSUVVGd1FpeERRVUZ1UXp0RFFVRjJSVHM3T3pzN096czdRVUZSWml4SlFVRk5MSGREUVVGblFpeFZRVUZETEVkQlFVUXNSVUZCVFN4aFFVRk9PMU5CUVhkQ0xHbENRVUZETEVOQlFVMHNSMEZCVGl4RFFVRkVMRWRCUVdVc1QwRkJUeXhQUVVGUExHRkJRVkFzUTBGQlVDeEhRVUVyUWl4RFFVRTVRenREUVVGNFFqczdPenM3T3pzN1FVRlJkRUlzU1VGQlRTd3dRMEZCYVVJc1ZVRkJReXhSUVVGRUxFVkJRVmNzWVVGQldEdFRRVUUyUWl4WlFVRlpMRTlCUVU4c1lVRkJVQ3hEUVVGYU8wTkJRVGRDT3pzN096czdPenM3UVVGVGRrSXNTVUZCVFN4elEwRkJaU3hWUVVGRExGRkJRVVFzUlVGQlZ5eExRVUZZTEVWQlFYRkNPMEZCUXk5RExFMUJRVTBzVlVGQlZTeExRVUZMTEZGQlFWRXNRMEZCVWl4RFFVRk1MRU5CUkN0Q08wRkJSUzlETEUxQlFVMHNVMEZCVXl4SlFVRkxMRWxCUVVrc1MwRkJTaXhEUVVZeVFqdEJRVWN2UXl4TlFVRk5MRzFDUVVGdFFpeExRVUZMTEVkQlFVd3NRMEZCVXl4WFFVRlhMRTFCUVZnc1JVRkJiVUlzUTBGQk5VSXNRMEZCYmtJc1EwRkllVU03TzBGQlN5OURMRk5CUVU4c1MwRkJTeXhMUVVGTUxFTkJRVmNzYlVKQlFXMUNMRTlCUVc1Q0xFTkJRVmdzUjBGQmVVTXNUMEZCZWtNc1EwRk1kME03UTBGQmNrSWlMQ0ptYVd4bElqb2lZMkZzWXk1cWN5SXNJbk52ZFhKalpWSnZiM1FpT2lJdlZYTmxjbk12VFdGMGRDOVRhWFJsY3k5d2IzQnRiM1JwYjI0aUxDSnpiM1Z5WTJWelEyOXVkR1Z1ZENJNld5SnBiWEJ2Y25RZ2UxeHVJQ0JvWVhOUWNtOXdaWEowZVN4Y2JpQWdhWE5PZFcwc1hHNGdJR1pwYm1SV1lXeDFaVUZ1WkZWdWFYUXNYRzRnSUhSdlJHVmphVzFoYkZ4dWZTQm1jbTl0SUNjdUwzVjBhV3h6Snp0Y2JseHVZMjl1YzNRZ1drVlNUMTlRVDBsT1ZDQTlJSHRjYmlBZ2VEb2dNQ3hjYmlBZ2VUb2dNQ3hjYmlBZ2Vqb2dNRnh1ZlR0Y2JseHVZMjl1YzNRZ1pHbHpkR0Z1WTJVeFJDQTlJQ2hoTENCaUtTQTlQaUJOWVhSb0xtRmljeWhoSUMwZ1lpazdYRzVjYmk4cVhHNGdJRUZ1WjJ4bElHSmxkSGRsWlc0Z2NHOXBiblJ6WEc0Z0lGeHVJQ0JVY21GdWMyeGhkR1Z6SUhSb1pTQm9lWEJ2ZEdobGRHbGpZV3dnYkdsdVpTQnpieUIwYUdGMElIUm9aU0FuWm5KdmJTY2dZMjl2Y21ScGJtRjBaWE5jYmlBZ1lYSmxJR0YwSURBc01GeHVJQ0JjYmlBZ1FIQmhjbUZ0SUZ0dlltcGxZM1JkT2lCWUlHRnVaQ0JaSUdOdmIzSmthVzVoZEdWeklHOW1JR1p5YjIwZ2NHOXBiblJjYmlBZ1FIQmhjbUZ0SUZ0dlltcGxZM1JkT2lCWUlHRnVaQ0JaSUdOdmNtUnBibUYwWlhNZ2IyWWdkRzhnY0c5cGJuUmNiaUFnUUhKbGRIVnliaUJiY21Ga2FXRnVYVG9nUVc1bmJHVWdZbVYwZDJWbGJpQjBhR1VnZEhkdklIQnZhVzUwY3lCcGJpQnlZV1JwWVc1elhHNHFMMXh1Wlhod2IzSjBJR052Ym5OMElHRnVaMnhsSUQwZ0tHRXNJR0lnUFNCYVJWSlBYMUJQU1U1VUtTQTlQaUJ5WVdScFlXNXpWRzlFWldkeVpXVnpLRTFoZEdndVlYUmhiaklvWVM1NElDMGdZaTU0TENCaExua2dMU0JpTG5rcEtUdGNibHh1THlwY2JpQWdRMjl1ZG1WeWRDQmtaV2R5WldWeklIUnZJSEpoWkdsaGJuTmNiaUFnWEc0Z0lFQndZWEpoYlNCYmJuVnRZbVZ5WFRvZ1ZtRnNkV1VnYVc0Z1pHVm5jbVZsYzF4dUlDQkFjbVYwZFhKdUlGdHVkVzFpWlhKZE9pQldZV3gxWlNCcGJpQnlZV1JwWVc1elhHNHFMMXh1Wlhod2IzSjBJR052Ym5OMElHUmxaM0psWlhOVWIxSmhaR2xoYm5NZ1BTQW9aR1ZuY21WbGN5a2dQVDRnWkdWbmNtVmxjeUFxSUUxaGRHZ3VVRWtnTHlBeE9EQTdYRzVjYmk4cVhHNGdJRVJwYkdGMFpWeHVJQ0JjYmlBZ1EyaGhibWRsSUhSb1pTQndjbTluY21WemMybHZiaUJpWlhSM1pXVnVJR0VnWVc1a0lHSWdZV05qYjNKa2FXNW5JSFJ2SUdScGJHRjBhVzl1TGx4dUlDQmNiaUFnVTI4Z1pHbHNZWFJwYjI0Z1BTQXdMalVnZDI5MWJHUWdZMmhoYm1kbFhHNGdJRnh1SUNCaElDMHRMUzB0TFMwdExTQmlYRzRnSUZ4dUlDQjBiMXh1SUNCY2JpQWdZU0F0TFMwdElHSmNiaUFnWEc0Z0lFQndZWEpoYlNCYmJuVnRZbVZ5WFRvZ1VISmxkbWx2ZFhNZ2RtRnNkV1ZjYmlBZ1FIQmhjbUZ0SUZ0dWRXMWlaWEpkT2lCRGRYSnlaVzUwSUhaaGJIVmxYRzRnSUVCd1lYSmhiU0JiYm5WdFltVnlYVG9nUkdsc1lYUmxJSEJ5YjJkeVpYTnpJR0o1SUhoY2JpQWdRSEpsZEhWeWJpQmJiblZ0WW1WeVhUb2dVSEpsZG1sdmRYTWdkbUZzZFdVZ2NHeDFjeUIwYUdVZ1pHbHNZWFJsWkNCa2FXWm1aWEpsYm1ObFhHNHFMMXh1Wlhod2IzSjBJR052Ym5OMElHUnBiR0YwWlNBOUlDaGhMQ0JpTENCa2FXeGhkR2x2YmlrZ1BUNGdZU0FySUNnb1lpQXRJR0VwSUNvZ1pHbHNZWFJwYjI0cE8xeHVYRzR2S2x4dUlDQkVhWE4wWVc1alpWeHVJQ0JjYmlBZ1VtVjBkWEp1Y3lCMGFHVWdaR2x6ZEdGdVkyVWdZbVYwZDJWbGJpQjBkMjhnYmlCa2FXMWxibk5wYjI1aGJDQndiMmx1ZEhNdVhHNGdJRnh1SUNCQWNHRnlZVzBnVzI5aWFtVmpkQzl1ZFcxaVpYSmRPaUI0SUdGdVpDQjVJRzl5SUdwMWMzUWdlQ0J2WmlCd2IybHVkQ0JCWEc0Z0lFQndZWEpoYlNCYmIySnFaV04wTDI1MWJXSmxjbDA2SUNodmNIUnBiMjVoYkNrNklIZ2dZVzVrSUhrZ2IzSWdhblZ6ZENCNElHOW1JSEJ2YVc1MElFSmNiaUFnUUhKbGRIVnliaUJiYm5WdFltVnlYVG9nVkdobElHUnBjM1JoYm1ObElHSmxkSGRsWlc0Z2RHaGxJSFIzYnlCd2IybHVkSE5jYmlvdlhHNWxlSEJ2Y25RZ1kyOXVjM1FnWkdsemRHRnVZMlVnUFNBb1lTd2dZaUE5SUZwRlVrOWZVRTlKVGxRcElEMCtJSHRjYmlBZ0x5OGdNVVFnWkdsdFpXNXphVzl1YzF4dUlDQnBaaUFvYVhOT2RXMG9ZU2twSUh0Y2JpQWdJQ0J5WlhSMWNtNGdaR2x6ZEdGdVkyVXhSQ2hoTENCaUtUdGNibHh1SUNBdkx5Qk5kV3gwYVMxa2FXMWxibk5wYjI1aGJGeHVJQ0I5SUdWc2MyVWdlMXh1SUNBZ0lHTnZibk4wSUhoRVpXeDBZU0E5SUdScGMzUmhibU5sTVVRb1lTNTRMQ0JpTG5ncE8xeHVJQ0FnSUdOdmJuTjBJSGxFWld4MFlTQTlJR1JwYzNSaGJtTmxNVVFvWVM1NUxDQmlMbmtwTzF4dUlDQWdJR052Ym5OMElIcEVaV3gwWVNBOUlDaHBjMDUxYlNoaExub3BLU0EvSUdScGMzUmhibU5sTVVRb1lTNTZMQ0JpTG5vcElEb2dNRHRjYmx4dUlDQWdJSEpsZEhWeWJpQk5ZWFJvTG5OeGNuUW9LSGhFWld4MFlTQXFLaUF5S1NBcklDaDVSR1ZzZEdFZ0tpb2dNaWtnS3lBb2VrUmxiSFJoSUNvcUlESXBLVHRjYmlBZ2ZWeHVmVHRjYmx4dUx5cGNiaUFnUldGelpTQjJZV3gxWlNCM2FYUm9hVzRnY21GdVoyVmtJSEJoY21GdFpYUmxjbk5jYmlBZ1hHNGdJRUJ3WVhKaGJTQmJiblZ0WW1WeVhUb2dVSEp2WjNKbGMzTWdZbVYwZDJWbGJpQXdJR0Z1WkNBeFhHNGdJRUJ3WVhKaGJTQmJiblZ0WW1WeVhUb2dWbUZzZFdVZ2IyWWdNQ0J3Y205bmNtVnpjMXh1SUNCQWNHRnlZVzBnVzI1MWJXSmxjbDA2SUZaaGJIVmxJRzltSURFZ2NISnZaM0psYzNOY2JpQWdRSEJoY21GdElGdHpkSEpwYm1jZ2ZId2dablZ1WTNScGIyNWRPaUJPWVcxbElHOW1JSEJ5WlhObGRDQmxZWE5wYm1kY2JpQWdJQ0IwYnlCMWMyVWdiM0lnWjJWdVpYSmhkR1ZrSUdWaGMybHVaeUJtZFc1amRHbHZibHh1SUNCQWNtVjBkWEp1SUZ0dWRXMWlaWEpkT2lCV1lXeDFaU0J2WmlCbFlYTmxaQ0J3Y205bmNtVnpjeUJwYmlCeVlXNW5aVnh1S2k4Z1hHNWxlSEJ2Y25RZ1kyOXVjM1FnWldGelpTQTlJQ2h3Y205bmNtVnpjeXdnWm5KdmJTd2dkRzhzSUdWaGMyVXBJRDArSUh0Y2JpQWdZMjl1YzNRZ2NISnZaM0psYzNOTWFXMXBkR1ZrSUQwZ2NtVnpkSEpwWTNRb2NISnZaM0psYzNNc0lEQXNJREVwTzF4dUlDQmpiMjV6ZENCbFlYTmxaRkJ5YjJkeVpYTnpJRDBnWldGelpTaHdjbTluY21WemMweHBiV2wwWldRcE8xeHVYRzRnSUhKbGRIVnliaUJuWlhSV1lXeDFaVVp5YjIxUWNtOW5jbVZ6Y3lobFlYTmxaRkJ5YjJkeVpYTnpMQ0JtY205dExDQjBieWs3WEc1OU8xeHVJRnh1THlwY2JpQWdTSGx3YjNSbGJuVnpaVnh1SUNCY2JpQWdVbVYwZFhKdWN5QjBhR1VnYUhsd2IzUmxiblZ6WlN3Z2MybGtaU0JETENCbmFYWmxiaUIwYUdVZ2JHVnVaM1JvY3lCdlppQnphV1JsY3lCQklHRnVaQ0JDTGx4dUlDQmNiaUFnUUhCaGNtRnRJRnR1ZFcxaVpYSmRPaUJNWlc1bmRHZ2diMllnUVZ4dUlDQkFjR0Z5WVcwZ1cyNTFiV0psY2wwNklFeGxibWQwYUNCdlppQkNYRzRnSUVCeVpYUjFjbTRnVzI1MWJXSmxjbDA2SUV4bGJtZDBhQ0J2WmlCRFhHNHFMMXh1Wlhod2IzSjBJR052Ym5OMElHaDVjRzkwWlc1MWMyVWdQU0FvWVN3Z1lpa2dQVDRnVFdGMGFDNXpjWEowS0NoaElDb2dZU2tnS3lBb1lpQXFJR0lwS1R0Y2JseHVMeXBjYmlBZ1ZtRnNkV1VnYVc0Z2NtRnVaMlVnWm5KdmJTQndjbTluY21WemMxeHVJQ0JjYmlBZ1IybDJaVzRnWVNCc2IzZGxjaUJzYVcxcGRDQmhibVFnWVc0Z2RYQndaWElnYkdsdGFYUXNJSGRsSUhKbGRIVnliaUIwYUdVZ2RtRnNkV1VnZDJsMGFHbHVYRzRnSUhSb1lYUWdjbUZ1WjJVZ1lYTWdaWGh3Y21WemMyVmtJR0o1SUhCeWIyZHlaWE56SUNoaElHNTFiV0psY2lCbWNtOXRJREF0TVNsY2JpQWdYRzRnSUVCd1lYSmhiU0JiYm5WdFltVnlYVG9nVkdobElIQnliMmR5WlhOeklHSmxkSGRsWlc0Z2JHOTNaWElnWVc1a0lIVndjR1Z5SUd4cGJXbDBjeUJsZUhCeVpYTnpaV1FnTUMweFhHNGdJRUJ3WVhKaGJTQmJiblZ0WW1WeVhUb2dURzkzWlhJZ2JHbHRhWFFnYjJZZ2NtRnVaMlZjYmlBZ1FIQmhjbUZ0SUZ0dWRXMWlaWEpkT2lCVmNIQmxjaUJzYVcxcGRDQnZaaUJ5WVc1blpWeHVJQ0JBY21WMGRYSnVJRnR1ZFcxaVpYSmRPaUJXWVd4MVpTQmhjeUJqWVd4amRXeGhkR1ZrSUdaeWIyMGdjSEp2WjNKbGMzTWdkMmwwYUdsdUlISmhibWRsSUNodWIzUWdiR2x0YVhSbFpDQjNhWFJvYVc0Z2NtRnVaMlVwWEc0cUwxeHVaWGh3YjNKMElHTnZibk4wSUdkbGRGWmhiSFZsUm5KdmJWQnliMmR5WlhOeklEMGdLSEJ5YjJkeVpYTnpMQ0JtY205dExDQjBieWtnUFQ0Z0tDMGdjSEp2WjNKbGMzTWdLaUJtY205dEtTQXJJQ2h3Y205bmNtVnpjeUFxSUhSdktTQXJJR1p5YjIwN1hHNWNiaThxWEc0Z0lGQnliMmR5WlhOeklIZHBkR2hwYmlCbmFYWmxiaUJ5WVc1blpWeHVJQ0JjYmlBZ1IybDJaVzRnWVNCc2IzZGxjaUJzYVcxcGRDQmhibVFnWVc0Z2RYQndaWElnYkdsdGFYUXNJSGRsSUhKbGRIVnliaUIwYUdVZ2NISnZaM0psYzNOY2JpQWdLR1Y0Y0hKbGMzTmxaQ0JoY3lCaElHNTFiV0psY2lBd0xURXBJSEpsY0hKbGMyVnVkR1ZrSUdKNUlIUm9aU0JuYVhabGJpQjJZV3gxWlN3Z1lXNWtYRzRnSUd4cGJXbDBJSFJvWVhRZ2NISnZaM0psYzNNZ2RHOGdkMmwwYUdsdUlEQXRNUzVjYmlBZ1hHNGdJRUJ3WVhKaGJTQmJiblZ0WW1WeVhUb2dWbUZzZFdVZ2RHOGdabWx1WkNCd2NtOW5jbVZ6Y3lCM2FYUm9hVzRnWjJsMlpXNGdjbUZ1WjJWY2JpQWdRSEJoY21GdElGdHVkVzFpWlhKZE9pQk1iM2RsY2lCc2FXMXBkQ0JjYmlBZ1FIQmhjbUZ0SUZ0dWRXMWlaWEpkT2lCVmNIQmxjaUJzYVcxcGRGeHVJQ0JBY21WMGRYSnVJRnR1ZFcxaVpYSmRPaUJRY205bmNtVnpjeUJ2WmlCMllXeDFaU0IzYVhSb2FXNGdjbUZ1WjJVZ1lYTWdaWGh3Y21WemMyVmtJREF0TVZ4dUtpOWNibVY0Y0c5eWRDQmpiMjV6ZENCblpYUlFjbTluY21WemMwWnliMjFXWVd4MVpTQTlJQ2gyWVd4MVpTd2dabkp2YlN3Z2RHOHBJRDArSUNoMllXeDFaU0F0SUdaeWIyMHBJQzhnS0hSdklDMGdabkp2YlNrN1hHNWNiaThxWEc0Z0lFOW1abk5sZENCaVpYUjNaV1Z1SUhSM2J5QnZZbXBsWTNSeklHOW1JRzUxYldKbGNuTmNibHh1SUNCSlppQndjbTl3WlhKMGVTQnBjeUJtYjNWdVpDQnBiaUJpSUc1dmRDQndjbVZ6Wlc1MElHbHVJR0VzSUdsMElIZHBiR3dnY21WMGRYSnVJR0F3WUNCbWIzSWdkR2hoZENCd2NtOXdMbHh1SUNCY2JpQWdRSEJoY21GdElGdFFiMmx1ZEYwNklFWnBjbk4wSUc5aWFtVmpkRnh1SUNCQWNHRnlZVzBnVzFCdmFXNTBYVG9nVTJWamIyNWtJRzlpYW1WamRGeHVJQ0JBY21WMGRYSnVJRnRQWm1aelpYUmRPaUJFYVhOMFlXNWpaU0J0WlhSeWFXTnpJR0psZEhkbFpXNGdkSGR2SUhCdmFXNTBjMXh1S2k5Y2JtVjRjRzl5ZENCamIyNXpkQ0J2Wm1aelpYUWdQU0FvWVN3Z1lpa2dQVDRnZTF4dUlDQmpiMjV6ZENCdlptWnpaWFFnUFNCN2ZUdGNibHh1SUNCbWIzSWdLR3hsZENCclpYa2dhVzRnWWlrZ2UxeHVJQ0FnSUdsbUlDaGlMbWhoYzA5M2JsQnliM0JsY25SNUtHdGxlU2twSUh0Y2JpQWdJQ0FnSUc5bVpuTmxkRnRyWlhsZElEMGdhR0Z6VUhKdmNHVnlkSGtvWVN3Z2EyVjVLU0EvSUdKYmEyVjVYU0F0SUdGYmEyVjVYU0E2SURBN1hHNGdJQ0FnZlZ4dUlDQjlYRzVjYmlBZ2NtVjBkWEp1SUc5bVpuTmxkRHRjYm4wN1hHNWNiaThxWEc0Z0lGQnZhVzUwSUdaeWIyMGdZVzVuYkdVZ1lXNWtJR1JwYzNSaGJtTmxYRzRnSUZ4dUlDQkFjR0Z5WVcwZ1cyOWlhbVZqZEYwNklESkVJSEJ2YVc1MElHOW1JRzl5YVdkcGJseHVJQ0JBY0dGeVlXMGdXMjUxYldKbGNsMDZJRUZ1WjJ4bElHWnliMjBnYjNKcFoybHVYRzRnSUVCd1lYSmhiU0JiYm5WdFltVnlYVG9nUkdsemRHRnVZMlVnWm5KdmJTQnZjbWxuYVc1Y2JpQWdRSEpsZEhWeWJpQmJiMkpxWldOMFhUb2dRMkZzWTNWc1lYUmxaQ0F5UkNCd2IybHVkRnh1S2k5Y2JtVjRjRzl5ZENCamIyNXpkQ0J3YjJsdWRFWnliMjFCYm1kc1pVRnVaRVJwYzNSaGJtTmxJRDBnS0c5eWFXZHBiaXdnWVc1bmJHVXNJR1JwYzNSaGJtTmxLU0E5UGlCN1hHNGdJR0Z1WjJ4bElEMGdaR1ZuY21WbGMxUnZVbUZrYVdGdWN5aGhibWRzWlNrN1hHNWNiaUFnY21WMGRYSnVJSHRjYmlBZ0lDQjRPaUJrYVhOMFlXNWpaU0FxSUUxaGRHZ3VZMjl6S0dGdVoyeGxLU0FySUc5eWFXZHBiaTU0TEZ4dUlDQWdJSGs2SUdScGMzUmhibU5sSUNvZ1RXRjBhQzV6YVc0b1lXNW5iR1VwSUNzZ2IzSnBaMmx1TG5sY2JpQWdmVHRjYm4wN1hHNWNiaThxWEc0Z0lFTnZiblpsY25RZ2NtRmthV0Z1Y3lCMGJ5QmtaV2R5WldWelhHNGdJRnh1SUNCQWNHRnlZVzBnVzI1MWJXSmxjbDA2SUZaaGJIVmxJR2x1SUhKaFpHbGhibk5jYmlBZ1FISmxkSFZ5YmlCYmJuVnRZbVZ5WFRvZ1ZtRnNkV1VnYVc0Z1pHVm5jbVZsYzF4dUtpOWNibVY0Y0c5eWRDQmpiMjV6ZENCeVlXUnBZVzV6Vkc5RVpXZHlaV1Z6SUQwZ0tISmhaR2xoYm5NcElEMCtJSEpoWkdsaGJuTWdLaUF4T0RBZ0x5Qk5ZWFJvTGxCSk8xeHVYRzR2S2x4dUlDQlNaWFIxY200Z2NtRnVaRzl0SUc1MWJXSmxjaUJpWlhSM1pXVnVJSEpoYm1kbFhHNGdJRnh1SUNCQWNHRnlZVzBnVzI1MWJXSmxjbDBnS0c5d2RHbHZibUZzS1RvZ1QzVjBjSFYwSUcxcGJtbHRkVzFjYmlBZ1FIQmhjbUZ0SUZ0dWRXMWlaWEpkSUNodmNIUnBiMjVoYkNrNklFOTFkSEIxZENCdFlYaHBiWFZ0WEc0Z0lFQnlaWFIxY200Z1cyNTFiV0psY2wwNklGSmhibVJ2YlNCdWRXMWlaWElnZDJsMGFHbHVJSEpoYm1kbExDQnZjaUF3SUdGdVpDQXhJR2xtSUc1dmJtVWdjSEp2ZG1sa1pXUmNiaW92WEc1bGVIQnZjblFnWTI5dWMzUWdjbUZ1Wkc5dElEMGdLRzFwYmlBOUlEQXNJRzFoZUNBOUlERXBJRDArSUUxaGRHZ3VjbUZ1Wkc5dEtDa2dLaUFvYldGNElDMGdiV2x1S1NBcklHMXBianRjYmx4dUx5cGNiaUFnUTJGc1kzVnNZWFJsSUhKbGJHRjBhWFpsSUhaaGJIVmxYRzRnSUZ4dUlDQlVZV3RsY3lCMGFHVWdiM0JsY21GMGIzSWdZVzVrSUhaaGJIVmxJR1p5YjIwZ1lTQnpkSEpwYm1jc0lHbGxJRndpS3owMVhDSXNJR0Z1WkNCaGNIQnNhV1Z6WEc0Z0lIUnZJSFJvWlNCamRYSnlaVzUwSUhaaGJIVmxJSFJ2SUhKbGMyOXNkbVVnWVNCdVpYY2dkR0Z5WjJWMExseHVJQ0JjYmlBZ1FIQmhjbUZ0SUZ0dWRXMWlaWEpkT2lCRGRYSnlaVzUwSUhaaGJIVmxYRzRnSUVCd1lYSmhiU0JiYzNSeWFXNW5YVG9nVW1Wc1lYUnBkbVVnZG1Gc2RXVmNiaUFnUUhKbGRIVnliaUJiYm5WdFltVnlYVG9nVG1WM0lIWmhiSFZsWEc0cUwxeHVaWGh3YjNKMElHTnZibk4wSUhKbGJHRjBhWFpsVm1Gc2RXVWdQU0FvWTNWeWNtVnVkQ3dnY21Wc1lYUnBkbVVwSUQwK0lIdGNiaUFnYkdWMElHNWxkMVpoYkhWbElEMGdZM1Z5Y21WdWREdGNiaUFnWTI5dWMzUWdaWEYxWVhScGIyNGdQU0J5Wld4aGRHbDJaUzV6Y0d4cGRDZ25QU2NwTzF4dUlDQmpiMjV6ZENCdmNHVnlZWFJ2Y2lBOUlHVnhkV0YwYVc5dVd6QmRPMXh1SUNCc1pYUWdleUIxYm1sMExDQjJZV3gxWlNCOUlEMGdabWx1WkZaaGJIVmxRVzVrVlc1cGRDaGxjWFZoZEdsdmJsc3hYU2s3WEc1Y2JpQWdkbUZzZFdVZ1BTQndZWEp6WlVac2IyRjBLSFpoYkhWbEtUdGNibHh1SUNCemQybDBZMmdnS0c5d1pYSmhkRzl5S1NCN1hHNGdJR05oYzJVZ0p5c25PbHh1SUNBZ0lHNWxkMVpoYkhWbElDczlJSFpoYkhWbE8xeHVJQ0FnSUdKeVpXRnJPMXh1SUNCallYTmxJQ2N0SnpwY2JpQWdJQ0J1WlhkV1lXeDFaU0F0UFNCMllXeDFaVHRjYmlBZ0lDQmljbVZoYXp0Y2JpQWdZMkZ6WlNBbktpYzZYRzRnSUNBZ2JtVjNWbUZzZFdVZ0tqMGdkbUZzZFdVN1hHNGdJQ0FnWW5KbFlXczdYRzRnSUdOaGMyVWdKeThuT2x4dUlDQWdJRzVsZDFaaGJIVmxJQzg5SUhaaGJIVmxPMXh1SUNBZ0lHSnlaV0ZyTzF4dUlDQjlYRzRnSUZ4dUlDQnBaaUFvZFc1cGRDa2dlMXh1SUNBZ0lHNWxkMVpoYkhWbElDczlJSFZ1YVhRN1hHNGdJSDFjYmx4dUlDQnlaWFIxY200Z2JtVjNWbUZzZFdVN1hHNTlPMXh1WEc0dktseHVJQ0JTWlhOMGNtbGpkQ0IyWVd4MVpTQjBieUJ5WVc1blpWeHVJQ0JjYmlBZ1VtVjBkWEp1SUhaaGJIVmxJSGRwZEdocGJpQjBhR1VnY21GdVoyVWdiMllnYkc5M1pYSk1hVzFwZENCaGJtUWdkWEJ3WlhKTWFXMXBkRnh1SUNCY2JpQWdRSEJoY21GdElGdHVkVzFpWlhKZE9pQldZV3gxWlNCMGJ5QnJaV1Z3SUhkcGRHaHBiaUJ5WVc1blpWeHVJQ0JBY0dGeVlXMGdXMjUxYldKbGNsMDZJRXh2ZDJWeUlHeHBiV2wwSUc5bUlISmhibWRsWEc0Z0lFQndZWEpoYlNCYmJuVnRZbVZ5WFRvZ1ZYQndaWElnYkdsdGFYUWdiMllnY21GdVoyVmNiaUFnUUhKbGRIVnliaUJiYm5WdFltVnlYVG9nVm1Gc2RXVWdZWE1nYkdsdGFYUmxaQ0IzYVhSb2FXNGdaMmwyWlc0Z2NtRnVaMlZjYmlvdlhHNWxlSEJ2Y25RZ1kyOXVjM1FnY21WemRISnBZM1FnUFNBb2RtRnNkV1VzSUcxcGJpd2diV0Y0S1NBOVBpQk5ZWFJvTG0xaGVDaE5ZWFJvTG0xcGJpaDJZV3gxWlN3Z2JXRjRLU3dnYldsdUtUdGNibHh1THlwY2JpQWdSbkpoYldWeVlYUmxMV2x1WkdWd1pXNWtaVzUwSUhOdGIyOTBhR2x1WjF4dVhHNGdJRUJ3WVhKaGJTQmJiblZ0WW1WeVhUb2dUbVYzSUhaaGJIVmxYRzRnSUVCd1lYSmhiU0JiYm5WdFltVnlYVG9nVDJ4a0lIWmhiSFZsWEc0Z0lFQndZWEpoYlNCYmJuVnRZbVZ5WFRvZ1JuSmhiV1VnWkhWeVlYUnBiMjVjYmlBZ1FIQmhjbUZ0SUZ0dWRXMWlaWEpkSUNodmNIUnBiMjVoYkNrNklGTnRiMjkwYUdsdVp5QW9NQ0JwY3lCdWIyNWxLVnh1S2k5Y2JtVjRjRzl5ZENCamIyNXpkQ0J6Ylc5dmRHZ2dQU0FvYm1WM1ZtRnNkV1VzSUc5c1pGWmhiSFZsTENCa2RYSmhkR2x2Yml3Z2MyMXZiM1JvYVc1bklEMGdNQ2tnUFQ0Z2RHOUVaV05wYldGc0tHOXNaRlpoYkhWbElDc2dLR1IxY21GMGFXOXVJQ29nS0c1bGQxWmhiSFZsSUMwZ2IyeGtWbUZzZFdVcElDOGdUV0YwYUM1dFlYZ29jMjF2YjNSb2FXNW5MQ0JrZFhKaGRHbHZiaWtwS1R0Y2JseHVMeXBjYmlBZ1EyOXVkbVZ5ZENCNElIQmxjaUJ6WldOdmJtUWdkRzhnY0dWeUlHWnlZVzFsSUhabGJHOWphWFI1SUdKaGMyVmtJRzl1SUdad2MxeHVJQ0JjYmlBZ1FIQmhjbUZ0SUZ0dWRXMWlaWEpkT2lCVmJtbDBJSEJsY2lCelpXTnZibVJjYmlBZ1FIQmhjbUZ0SUZ0dWRXMWlaWEpkT2lCR2NtRnRaU0JrZFhKaGRHbHZiaUJwYmlCdGMxeHVLaTljYm1WNGNHOXlkQ0JqYjI1emRDQnpjR1ZsWkZCbGNrWnlZVzFsSUQwZ0tIaHdjeXdnWm5KaGJXVkVkWEpoZEdsdmJpa2dQVDRnS0dselRuVnRLSGh3Y3lrcElEOGdlSEJ6SUM4Z0tERXdNREFnTHlCbWNtRnRaVVIxY21GMGFXOXVLU0E2SURBN1hHNWNiaThxWEc0Z0lFTnZiblpsY25RZ2RtVnNiMk5wZEhrZ2FXNTBieUIyWld4cFkybDBlU0J3WlhJZ2MyVmpiMjVrWEc0Z0lGeHVJQ0JBY0dGeVlXMGdXMjUxYldKbGNsMDZJRlZ1YVhRZ2NHVnlJR1p5WVcxbFhHNGdJRUJ3WVhKaGJTQmJiblZ0WW1WeVhUb2dSbkpoYldVZ1pIVnlZWFJwYjI0Z2FXNGdiWE5jYmlvdlhHNWxlSEJ2Y25RZ1kyOXVjM1FnYzNCbFpXUlFaWEpUWldOdmJtUWdQU0FvZG1Wc2IyTnBkSGtzSUdaeVlXMWxSSFZ5WVhScGIyNHBJRDArSUhabGJHOWphWFI1SUNvZ0tERXdNREFnTHlCbWNtRnRaVVIxY21GMGFXOXVLVHRjYmx4dUx5cGNiaUFnUTNKbFlYUmxJSE4wWlhCd1pXUWdkbVZ5YzJsdmJpQnZaaUF3TFRFZ2NISnZaM0psYzNOY2JpQWdYRzRnSUVCd1lYSmhiU0JiYm5WdFltVnlYVG9nUTNWeWNtVnVkQ0IyWVd4MVpWeHVJQ0JBY0dGeVlXMGdXMmx1ZEYwNklFNTFiV0psY2lCdlppQnpkR1Z3YzF4dUlDQkFjbVYwZFhKdUlGdHVkVzFpWlhKZE9pQlRkR1Z3Y0dWa0lIWmhiSFZsWEc0cUwxeHVaWGh3YjNKMElHTnZibk4wSUhOMFpYQlFjbTluY21WemN5QTlJQ2h3Y205bmNtVnpjeXdnYzNSbGNITXBJRDArSUh0Y2JpQWdZMjl1YzNRZ2MyVm5iV1Z1ZENBOUlERWdMeUFvYzNSbGNITWdMU0F4S1R0Y2JpQWdZMjl1YzNRZ2RHRnlaMlYwSUQwZ01TQXRJQ2d4SUM4Z2MzUmxjSE1wTzF4dUlDQmpiMjV6ZENCd2NtOW5jbVZ6YzA5bVZHRnlaMlYwSUQwZ1RXRjBhQzV0YVc0b2NISnZaM0psYzNNZ0x5QjBZWEpuWlhRc0lERXBPMXh1WEc0Z0lISmxkSFZ5YmlCTllYUm9MbVpzYjI5eUtIQnliMmR5WlhOelQyWlVZWEpuWlhRZ0x5QnpaV2R0Wlc1MEtTQXFJSE5sWjIxbGJuUTdYRzU5T3lKZGZRPT1cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2luYy9jYWxjLmpzXG4gKiogbW9kdWxlIGlkID0gMjBcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbnZhciBDQU1FTF9DQVNFX1BBVFRFUk4gPSAvKFthLXpdKShbQS1aXSkvZztcbnZhciBSRVBMQUNFX1RFTVBMQVRFID0gJyQxLSQyJztcbnZhciBIQVNfUEVSRk9STUFOQ0VfTk9XID0gdHlwZW9mIHBlcmZvcm1hbmNlICE9PSAndW5kZWZpbmVkJyAmJiBwZXJmb3JtYW5jZS5ub3c7XG5cbi8qXG4gIEdldCB2YXIgdHlwZSBhcyBzdHJpbmdcbiAgXG4gIEBwYXJhbTogVmFyaWFibGUgdG8gdGVzdFxuICBAcmV0dXJuIFtzdHJpbmddOiBSZXR1cm5zLCBmb3IgaW5zdGFuY2UgJ09iamVjdCcgaWYgW29iamVjdCBPYmplY3RdXG4qL1xudmFyIHZhclR5cGUgPSBmdW5jdGlvbiAodmFyaWFibGUpIHtcbiAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh2YXJpYWJsZSkuc2xpY2UoOCwgLTEpO1xufTtcblxuLypcbiAgQ29udmVydCBjYW1lbENhc2UgdG8gZGFzaC1jYXNlXG5cbiAgQHBhcmFtIFtzdHJpbmddXG4gIEByZXR1cm4gW3N0cmluZ11cbiovXG52YXIgY2FtZWxUb0Rhc2ggPSBleHBvcnRzLmNhbWVsVG9EYXNoID0gZnVuY3Rpb24gKHN0cmluZykge1xuICByZXR1cm4gc3RyaW5nLnJlcGxhY2UoQ0FNRUxfQ0FTRV9QQVRURVJOLCBSRVBMQUNFX1RFTVBMQVRFKS50b0xvd2VyQ2FzZSgpO1xufTtcblxudmFyIGNyZWF0ZURlbGltaXRlZCA9IGV4cG9ydHMuY3JlYXRlRGVsaW1pdGVkID0gZnVuY3Rpb24gKHZhbHVlcywgdGVybXMsIGRlbGltaXRlciwgY2hvcCkge1xuICB2YXIgbnVtVGVybXMgPSB0ZXJtcy5sZW5ndGg7XG4gIHZhciBjb21iaW5lZCA9ICcnO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbnVtVGVybXM7IGkrKykge1xuICAgIHZhciB0ZXJtID0gdGVybXNbaV07XG4gICAgaWYgKHZhbHVlcy5oYXNPd25Qcm9wZXJ0eSh0ZXJtKSkge1xuICAgICAgY29tYmluZWQgKz0gdmFsdWVzW3Rlcm1dICsgZGVsaW1pdGVyO1xuICAgIH1cbiAgfVxuXG4gIGlmIChjaG9wKSB7XG4gICAgY29tYmluZWQgPSBjb21iaW5lZC5zbGljZSgwLCAtY2hvcCk7XG4gIH1cblxuICByZXR1cm4gY29tYmluZWQ7XG59O1xuXG4vKlxuICBDcmVhdGUgYSBmdW5jdGlvbiBzdHJpbmdcblxuICAnMjBweCcsICd0cmFuc2xhdGUnIC0+ICd0cmFuc2xhdGUoMjBweCknXG5cbiAgQHBhcmFtIFtzdHJpbmddXG4gIEBwYXJhbSBbc3RyaW5nXVxuICBAcmV0dXJuIFtzdHJpbmddXG4qL1xudmFyIGNyZWF0ZUZ1bmN0aW9uU3RyaW5nID0gZXhwb3J0cy5jcmVhdGVGdW5jdGlvblN0cmluZyA9IGZ1bmN0aW9uICh2YWx1ZSwgcHJlZml4KSB7XG4gIHJldHVybiBwcmVmaXggKyAnKCcgKyB2YWx1ZSArICcpJztcbn07XG5cbi8qXG4gIEdlbmVyYXRlIGN1cnJlbnQgdGltZXN0YW1wXG4gIFxuICBAcmV0dXJuIFt0aW1lc3RhbXBdOiBDdXJyZW50IFVOSVggdGltZXN0YW1wXG4qL1xudmFyIGN1cnJlbnRUaW1lID0gZXhwb3J0cy5jdXJyZW50VGltZSA9IEhBU19QRVJGT1JNQU5DRV9OT1cgPyBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiBwZXJmb3JtYW5jZS5ub3coKTtcbn0gOiBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcbn07XG5cbi8qXG4gIFNwbGl0IGEgdmFsdWUgaW50byBhIHZhbHVlL3VuaXQgb2JqZWN0XG4gIFxuICAgIFwiMjAwcHhcIiAtPiB7IHZhbHVlOiAyMDAsIHVuaXQ6IFwicHhcIiB9XG4gICAgXG4gIEBwYXJhbSBbc3RyaW5nXTogVmFsdWUgdG8gc3BsaXRcbiAgQHJldHVybiBbb2JqZWN0XTogT2JqZWN0IHdpdGggdmFsdWUgYW5kIHVuaXQgcHJvcHNcbiovXG52YXIgZmluZFZhbHVlQW5kVW5pdCA9IGV4cG9ydHMuZmluZFZhbHVlQW5kVW5pdCA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICBpZiAodmFsdWUubWF0Y2gpIHtcbiAgICB2YXIgc3BsaXRWYWx1ZSA9IHZhbHVlLm1hdGNoKC8oLT9cXGQqXFwuP1xcZCopKC4qKS8pO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIHZhbHVlOiBwYXJzZUZsb2F0KHNwbGl0VmFsdWVbMV0pLFxuICAgICAgdW5pdDogc3BsaXRWYWx1ZVsyXVxuICAgIH07XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHsgdmFsdWU6IHZhbHVlIH07XG4gIH1cbn07XG5cbi8qXG4gIFNwbGl0IGNvbG9yIHN0cmluZyBpbnRvIG1hcCBvZiBjb2xvciBwcm9wZXJ0aWVzXG5cbiAgXCJyZ2JhKDI1NSwgMjU1LCAyNTUsIDApXCIsIFtcIlJlZFwiLCAnR3JlZW5cIiwgXCJCbHVlXCIsIFwiQWxwaGFcIl1cblxuICB7IFJlZDogMjU1Li4uIH1cbiovXG52YXIgZ2V0Q29sb3JWYWx1ZXMgPSBleHBvcnRzLmdldENvbG9yVmFsdWVzID0gZnVuY3Rpb24gKHZhbHVlLCBjb2xvclRlcm1zKSB7XG4gIHZhciBudW1Db2xvclRlcm1zID0gY29sb3JUZXJtcy5sZW5ndGg7XG4gIHZhciBjb2xvclZhbHVlcyA9IHt9O1xuICB2YXIgY29sb3JzID0gc3BsaXRDb21tYURlbGltaXRlZChnZXRWYWx1ZUZyb21GdW5jdGlvblN0cmluZyh2YWx1ZSkpO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbnVtQ29sb3JUZXJtczsgaSsrKSB7XG4gICAgY29sb3JWYWx1ZXNbY29sb3JUZXJtc1tpXV0gPSBjb2xvcnNbaV0gIT09IHVuZGVmaW5lZCA/IGNvbG9yc1tpXSA6IDE7XG4gIH1cblxuICByZXR1cm4gY29sb3JWYWx1ZXM7XG59O1xuXG4vKlxuICBHZXQgdmFsdWUgZnJvbSBmdW5jdGlvbiBzdHJpbmdcblxuICBcInRyYW5zbGF0ZVgoMjBweClcIiAtPiBcIjIwcHhcIlxuKi9cbnZhciBnZXRWYWx1ZUZyb21GdW5jdGlvblN0cmluZyA9IGV4cG9ydHMuZ2V0VmFsdWVGcm9tRnVuY3Rpb25TdHJpbmcgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgcmV0dXJuIHZhbHVlLnN1YnN0cmluZyh2YWx1ZS5pbmRleE9mKCcoJykgKyAxLCB2YWx1ZS5sYXN0SW5kZXhPZignKScpKTtcbn07XG5cbi8qXG4gIENoZWNrIGlmIHR3byBvYmplY3RzIGhhdmUgY2hhbmdlZCBmcm9tIGVhY2ggb3RoZXJcbiAgXG4gIEBwYXJhbSBbb2JqZWN0XTogSW5wdXQgQVxuICBAcGFyYW0gW29iamVjdF06IElucHV0IEJcbiAgQHJldHVybiBbYm9vbGVhbl06IFRydWUgaWYgZGlmZmVyZW50XG4qL1xudmFyIGhhc0NoYW5nZWQgPSBleHBvcnRzLmhhc0NoYW5nZWQgPSBmdW5jdGlvbiAoYSwgYikge1xuICB2YXIgY2hhbmdlZCA9IGZhbHNlO1xuXG4gIGZvciAodmFyIGtleSBpbiBhKSB7XG4gICAgaWYgKGEuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgaWYgKGhhc1Byb3BlcnR5KGIsIGtleSkpIHtcbiAgICAgICAgaWYgKGFba2V5XSAhPT0gYltrZXldKSB7XG4gICAgICAgICAgY2hhbmdlZCA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNoYW5nZWQgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBjaGFuZ2VkO1xufTtcblxuLypcbiAgQ2hlY2sgaWYgb2JqZWN0IGhhcyBwcm9wZXJ0eSBhbmQgaXQgaXNuJ3QgdW5kZWZpbmVkXG5cbiAgQHBhcmFtIFtvYmplY3RdXG4gIEBwYXJhbSBbc3RyaW5nXVxuICBAcmV0dXJuIFtib29sZWFuXVxuKi9cbnZhciBoYXNQcm9wZXJ0eSA9IGV4cG9ydHMuaGFzUHJvcGVydHkgPSBmdW5jdGlvbiAob2JqZWN0LCBwcm9wZXJ0eU5hbWUpIHtcbiAgcmV0dXJuIG9iamVjdC5oYXNPd25Qcm9wZXJ0eShwcm9wZXJ0eU5hbWUpICYmIG9iamVjdFtwcm9wZXJ0eU5hbWVdICE9PSB1bmRlZmluZWQ7XG59O1xuXG4vKlxuICBJcyB1dGlscyB2YXIgYW4gYXJyYXkgPyBcbiAgXG4gIEBwYXJhbTogVmFyaWFibGUgdG8gdGVzdFxuICBAcmV0dXJuIFtib29sZWFuXTogUmV0dXJucyB0cnVlIGlmIHV0aWxzLnZhclR5cGUgPT09ICdBcnJheSdcbiovXG52YXIgaXNBcnJheSA9IGV4cG9ydHMuaXNBcnJheSA9IGZ1bmN0aW9uIChhcnIpIHtcbiAgcmV0dXJuIHZhclR5cGUoYXJyKSA9PT0gJ0FycmF5Jztcbn07XG5cbi8qXG4gIElzIHV0aWxzIHZhciBhIGZ1bmN0aW9uID8gXG4gIFxuICBAcGFyYW06IFZhcmlhYmxlIHRvIHRlc3RcbiAgQHJldHVybiBbYm9vbGVhbl06IFJldHVybnMgdHJ1ZSBpZiB1dGlscy52YXJUeXBlID09PSAnRnVuY3Rpb24nXG4qL1xudmFyIGlzRnVuYyA9IGV4cG9ydHMuaXNGdW5jID0gZnVuY3Rpb24gKG9iaikge1xuICByZXR1cm4gdmFyVHlwZShvYmopID09PSAnRnVuY3Rpb24nO1xufTtcblxuLypcbiAgSXMgdXRpbHMgdmFyIGEgbnVtYmVyP1xuICBcbiAgQHBhcmFtOiBWYXJpYWJsZSB0byB0ZXN0XG4gIEByZXR1cm4gW2Jvb2xlYW5dOiBSZXR1cm5zIHRydWUgaWYgdHlwZW9mID09PSAnbnVtYmVyJ1xuKi9cbnZhciBpc051bSA9IGV4cG9ydHMuaXNOdW0gPSBmdW5jdGlvbiAobnVtKSB7XG4gIHJldHVybiB0eXBlb2YgbnVtID09PSAnbnVtYmVyJztcbn07XG5cbi8qXG4gIElzIHV0aWxzIHZhciBhbiBvYmplY3Q/XG4gIFxuICBAcGFyYW06IFZhcmlhYmxlIHRvIHRlc3RcbiAgQHJldHVybiBbYm9vbGVhbl06IFJldHVybnMgdHJ1ZSBpZiB0eXBlb2YgPT09ICdvYmplY3QnXG4qL1xudmFyIGlzT2JqID0gZXhwb3J0cy5pc09iaiA9IGZ1bmN0aW9uIChvYmopIHtcbiAgcmV0dXJuIHR5cGVvZiBvYmogPT09ICdvYmplY3QnO1xufTtcblxuLypcbiAgSXMgdXRpbHMgYSByZWxhdGl2ZSB2YWx1ZSBhc3NpZ25tZW50P1xuICBcbiAgQHBhcmFtIFtzdHJpbmddOiBWYXJpYWJsZSB0byB0ZXN0XG4gIEByZXR1cm4gW2Jvb2xlYW5dOiBJZiB1dGlscyBsb29rcyBsaWtlIGEgcmVsYXRpdmUgdmFsdWUgYXNzaWdubWVudFxuKi9cbnZhciBpc1JlbGF0aXZlVmFsdWUgPSBleHBvcnRzLmlzUmVsYXRpdmVWYWx1ZSA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICByZXR1cm4gdmFsdWUgJiYgdmFsdWUuaW5kZXhPZiAmJiB2YWx1ZS5pbmRleE9mKCc9JykgPiAwID8gdHJ1ZSA6IGZhbHNlO1xufTtcblxuLypcbiAgSXMgdXRpbHMgdmFyIGEgc3RyaW5nID8gXG4gIFxuICBAcGFyYW06IFZhcmlhYmxlIHRvIHRlc3RcbiAgQHJldHVybiBbYm9vbGVhbl06IFJldHVybnMgdHJ1ZSBpZiB0eXBlb2Ygc3RyID09PSAnc3RyaW5nJ1xuKi9cbnZhciBpc1N0cmluZyA9IGV4cG9ydHMuaXNTdHJpbmcgPSBmdW5jdGlvbiAoc3RyKSB7XG4gIHJldHVybiB0eXBlb2Ygc3RyID09PSAnc3RyaW5nJztcbn07XG5cbi8qXG4gIEBwYXJhbSBbc3RyaW5nIHx8IE5vZGVMaXN0XTpcbiAgICBJZiBzdHJpbmcsIHRyZWF0ZWQgYXMgc2VsZWN0b3IuXG4gICAgSWYgbm90LCB0cmVhdGVkIGFzIHByZWV4aXN0aW5nIE5vZGVMaXN0XG5cbiAgQHJldHVybiBbQXJyYXldXG4qL1xudmFyIHNlbGVjdERvbSA9IGV4cG9ydHMuc2VsZWN0RG9tID0gZnVuY3Rpb24gKHNlbGVjdG9yKSB7XG4gIHZhciBub2RlcyA9IHR5cGVvZiBzZWxlY3RvciA9PT0gJ3N0cmluZycgPyBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9yKSA6IHNlbGVjdG9yO1xuICByZXR1cm4gbm9kZXMubGVuZ3RoID8gW10uc2xpY2UuY2FsbChub2RlcykgOiBbXS5wdXNoKG5vZGVzKTtcbn07XG5cbi8qXG4gIFNwbGl0IGNvbW1hLWRlbGltaXRlZCBzdHJpbmdcblxuICBcImZvbyxiYXJcIiAtPiBbXCJmb29cIiwgXCJiYXJcIl1cblxuICBAcGFyYW0gW3N0cmluZ11cbiAgQHJldHVybiBbYXJyYXldXG4qL1xudmFyIHNwbGl0Q29tbWFEZWxpbWl0ZWQgPSBleHBvcnRzLnNwbGl0Q29tbWFEZWxpbWl0ZWQgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgcmV0dXJuIGlzU3RyaW5nKHZhbHVlKSA/IHZhbHVlLnNwbGl0KC8sXFxzKi8pIDogW3ZhbHVlXTtcbn07XG5cbi8qXG4gIFNwbGl0IHNwYWNlLWRlbGltaXRlZCBzdHJpbmdcblxuICBcImZvbyBiYXJcIiAtPiBbXCJmb29cIiwgXCJiYXJcIl1cblxuICBAcGFyYW0gW3N0cmluZ11cbiAgQHJldHVybiBbYXJyYXldXG4qL1xudmFyIHNwbGl0U3BhY2VEZWxpbWl0ZWQgPSBleHBvcnRzLnNwbGl0U3BhY2VEZWxpbWl0ZWQgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgcmV0dXJuIGlzU3RyaW5nKHZhbHVlKSA/IHZhbHVlLnNwbGl0KCcgJykgOiBbdmFsdWVdO1xufTtcblxuLypcbiAgQ29udmVydCBudW1iZXIgdG8geCBkZWNpbWFsIHBsYWNlc1xuXG4gIEBwYXJhbSBbbnVtYmVyXVxuICBAcGFyYW0gW251bWJlcl1cbiAgQHJldHVybiBbbnVtYmVyXVxuKi9cbnZhciB0b0RlY2ltYWwgPSBleHBvcnRzLnRvRGVjaW1hbCA9IGZ1bmN0aW9uIChudW0pIHtcbiAgdmFyIHByZWNpc2lvbiA9IGFyZ3VtZW50cy5sZW5ndGggPD0gMSB8fCBhcmd1bWVudHNbMV0gPT09IHVuZGVmaW5lZCA/IDIgOiBhcmd1bWVudHNbMV07XG5cbiAgcHJlY2lzaW9uID0gTWF0aC5wb3coMTAsIHByZWNpc2lvbik7XG4gIHJldHVybiBNYXRoLnJvdW5kKG51bSAqIHByZWNpc2lvbikgLyBwcmVjaXNpb247XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluTnlZeTlwYm1NdmRYUnBiSE11YW5NaVhTd2libUZ0WlhNaU9sdGRMQ0p0WVhCd2FXNW5jeUk2SWpzN08wRkJRVUVzU1VGQlRTeHhRa0ZCY1VJc2FVSkJRWEpDTzBGQlEwNHNTVUZCVFN4dFFrRkJiVUlzVDBGQmJrSTdRVUZEVGl4SlFVRk5MSE5DUVVGMVFpeFBRVUZQTEZkQlFWQXNTMEZCZFVJc1YwRkJka0lzU1VGQmMwTXNXVUZCV1N4SFFVRmFPenM3T3pzN096dEJRVkZ1UlN4SlFVRk5MRlZCUVZVN1UwRkJXU3hQUVVGUExGTkJRVkFzUTBGQmFVSXNVVUZCYWtJc1EwRkJNRUlzU1VGQk1VSXNRMEZCSzBJc1VVRkJMMElzUlVGQmVVTXNTMEZCZWtNc1EwRkJLME1zUTBGQkwwTXNSVUZCYTBRc1EwRkJReXhEUVVGRU8wTkJRVGxFT3pzN096czdPenRCUVZGVUxFbEJRVTBzYjBOQlFXTXNWVUZCUXl4TlFVRkVPMU5CUVZrc1QwRkJUeXhQUVVGUUxFTkJRV1VzYTBKQlFXWXNSVUZCYlVNc1owSkJRVzVETEVWQlFYRkVMRmRCUVhKRU8wTkJRVm83TzBGQlJYQkNMRWxCUVUwc05FTkJRV3RDTEZWQlFVTXNUVUZCUkN4RlFVRlRMRXRCUVZRc1JVRkJaMElzVTBGQmFFSXNSVUZCTWtJc1NVRkJNMElzUlVGQmIwTTdRVUZEYWtVc1RVRkJUU3hYUVVGWExFMUJRVTBzVFVGQlRpeERRVVJuUkR0QlFVVnFSU3hOUVVGSkxGZEJRVmNzUlVGQldDeERRVVkyUkRzN1FVRkpha1VzVDBGQlN5eEpRVUZKTEVsQlFVa3NRMEZCU2l4RlFVRlBMRWxCUVVrc1VVRkJTaXhGUVVGakxFZEJRVGxDTEVWQlFXMURPMEZCUTJwRExGRkJRVTBzVDBGQlR5eE5RVUZOTEVOQlFVNHNRMEZCVUN4RFFVUXlRanRCUVVWcVF5eFJRVUZKTEU5QlFVOHNZMEZCVUN4RFFVRnpRaXhKUVVGMFFpeERRVUZLTEVWQlFXbERPMEZCUXk5Q0xHdENRVUZaTEU5QlFVOHNTVUZCVUN4SlFVRmxMRk5CUVdZc1EwRkViVUk3UzBGQmFrTTdSMEZHUmpzN1FVRlBRU3hOUVVGSkxFbEJRVW9zUlVGQlZUdEJRVU5TTEdWQlFWY3NVMEZCVXl4TFFVRlVMRU5CUVdVc1EwRkJaaXhGUVVGclFpeERRVUZETEVsQlFVUXNRMEZCTjBJc1EwRkVVVHRIUVVGV096dEJRVWxCTEZOQlFVOHNVVUZCVUN4RFFXWnBSVHREUVVGd1F6czdPenM3T3pzN096czdRVUV5UW5oQ0xFbEJRVTBzYzBSQlFYVkNMRlZCUVVNc1MwRkJSQ3hGUVVGUkxFMUJRVkk3VTBGQmMwSXNaVUZCVlR0RFFVRm9RenM3T3pzN096dEJRVTgzUWl4SlFVRk5MRzlEUVVGakxITkNRVUZ6UWp0VFFVRk5MRmxCUVZrc1IwRkJXanREUVVGT0xFZEJRVEJDTzFOQlFVMHNTVUZCU1N4SlFVRktMRWRCUVZjc1QwRkJXRHREUVVGT096czdPenM3T3pzN08wRkJWWEJGTEVsQlFVMHNPRU5CUVcxQ0xGVkJRVU1zUzBGQlJDeEZRVUZYTzBGQlEzcERMRTFCUVVrc1RVRkJUU3hMUVVGT0xFVkJRV0U3UVVGRFppeFJRVUZOTEdGQlFXRXNUVUZCVFN4TFFVRk9MRU5CUVZrc2JVSkJRVm9zUTBGQllpeERRVVJUT3p0QlFVZG1MRmRCUVU4N1FVRkRUQ3hoUVVGUExGZEJRVmNzVjBGQlZ5eERRVUZZTEVOQlFWZ3NRMEZCVUR0QlFVTkJMRmxCUVU4c1YwRkJWeXhEUVVGWUxFTkJRVkE3UzBGR1JpeERRVWhsTzBkQlFXcENMRTFCVDA4N1FVRkRUQ3hYUVVGUExFVkJRVVVzV1VGQlJpeEZRVUZRTEVOQlJFczdSMEZRVUR0RFFVUTRRanM3T3pzN096czdPMEZCYjBKNlFpeEpRVUZOTERCRFFVRnBRaXhWUVVGRExFdEJRVVFzUlVGQlVTeFZRVUZTTEVWQlFYVkNPMEZCUTI1RUxFMUJRVTBzWjBKQlFXZENMRmRCUVZjc1RVRkJXQ3hEUVVRMlFqdEJRVVZ1UkN4TlFVRk5MR05CUVdNc1JVRkJaQ3hEUVVZMlF6dEJRVWR1UkN4TlFVRk5MRk5CUVZNc2IwSkJRVzlDTERKQ1FVRXlRaXhMUVVFelFpeERRVUZ3UWl4RFFVRlVMRU5CU0RaRE96dEJRVXR1UkN4UFFVRkxMRWxCUVVrc1NVRkJTU3hEUVVGS0xFVkJRVThzU1VGQlNTeGhRVUZLTEVWQlFXMUNMRWRCUVc1RExFVkJRWGRETzBGQlEzUkRMR2RDUVVGWkxGZEJRVmNzUTBGQldDeERRVUZhTEVsQlFUWkNMRTFCUVVNc1EwRkJUeXhEUVVGUUxFMUJRV01zVTBGQlpDeEhRVUV5UWl4UFFVRlBMRU5CUVZBc1EwRkJOVUlzUjBGQmQwTXNRMEZCZUVNc1EwRkVVenRIUVVGNFF6czdRVUZKUVN4VFFVRlBMRmRCUVZBc1EwRlViVVE3UTBGQmRrSTdPenM3T3pzN1FVRnBRblpDTEVsQlFVMHNhMFZCUVRaQ0xGVkJRVU1zUzBGQlJEdFRRVUZYTEUxQlFVMHNVMEZCVGl4RFFVRm5RaXhOUVVGTkxFOUJRVTRzUTBGQll5eEhRVUZrTEVsQlFYRkNMRU5CUVhKQ0xFVkJRWGRDTEUxQlFVMHNWMEZCVGl4RFFVRnJRaXhIUVVGc1FpeERRVUY0UXp0RFFVRllPenM3T3pzN096czdRVUZUYmtNc1NVRkJUU3hyUTBGQllTeFZRVUZETEVOQlFVUXNSVUZCU1N4RFFVRktMRVZCUVZVN1FVRkRiRU1zVFVGQlNTeFZRVUZWTEV0QlFWWXNRMEZFT0VJN08wRkJSMnhETEU5QlFVc3NTVUZCU1N4SFFVRktMRWxCUVZjc1EwRkJhRUlzUlVGQmJVSTdRVUZEYWtJc1VVRkJTU3hGUVVGRkxHTkJRVVlzUTBGQmFVSXNSMEZCYWtJc1EwRkJTaXhGUVVFeVFqdEJRVU42UWl4VlFVRkpMRmxCUVZrc1EwRkJXaXhGUVVGbExFZEJRV1lzUTBGQlNpeEZRVUY1UWp0QlFVTjJRaXhaUVVGSkxFVkJRVVVzUjBGQlJpeE5RVUZYTEVWQlFVVXNSMEZCUml4RFFVRllMRVZCUVcxQ08wRkJRM0pDTEc5Q1FVRlZMRWxCUVZZc1EwRkVjVUk3VTBGQmRrSTdUMEZFUml4TlFVbFBPMEZCUTB3c2EwSkJRVlVzU1VGQlZpeERRVVJMTzA5QlNsQTdTMEZFUmp0SFFVUkdPenRCUVZsQkxGTkJRVThzVDBGQlVDeERRV1pyUXp0RFFVRldPenM3T3pzN096czdRVUY1UW01Q0xFbEJRVTBzYjBOQlFXTXNWVUZCUXl4TlFVRkVMRVZCUVZNc1dVRkJWRHRUUVVFd1FpeFBRVUZQTEdOQlFWQXNRMEZCYzBJc1dVRkJkRUlzUzBGQmRVTXNUMEZCVHl4WlFVRlFMRTFCUVhsQ0xGTkJRWHBDTzBOQlFXcEZPenM3T3pzN096dEJRVkZ3UWl4SlFVRk5MRFJDUVVGVkxGVkJRVU1zUjBGQlJEdFRRVUZUTEZGQlFWRXNSMEZCVWl4TlFVRnBRaXhQUVVGcVFqdERRVUZVT3pzN096czdPenRCUVZGb1FpeEpRVUZOTERCQ1FVRlRMRlZCUVVNc1IwRkJSRHRUUVVGVExGRkJRVkVzUjBGQlVpeE5RVUZwUWl4VlFVRnFRanREUVVGVU96czdPenM3T3p0QlFWRm1MRWxCUVUwc2QwSkJRVkVzVlVGQlF5eEhRVUZFTzFOQlFWTXNUMEZCVHl4SFFVRlFMRXRCUVdVc1VVRkJaanREUVVGVU96czdPenM3T3p0QlFWRmtMRWxCUVUwc2QwSkJRVkVzVlVGQlF5eEhRVUZFTzFOQlFWTXNUMEZCVHl4SFFVRlFMRXRCUVdVc1VVRkJaanREUVVGVU96czdPenM3T3p0QlFWRmtMRWxCUVUwc05FTkJRV3RDTEZWQlFVTXNTMEZCUkR0VFFVRlhMRXRCUVVNc1NVRkJVeXhOUVVGTkxFOUJRVTRzU1VGQmFVSXNUVUZCVFN4UFFVRk9MRU5CUVdNc1IwRkJaQ3hKUVVGeFFpeERRVUZ5UWl4SFFVRXdRaXhKUVVGeVJDeEhRVUUwUkN4TFFVRTFSRHREUVVGWU96czdPenM3T3p0QlFWRjRRaXhKUVVGTkxEaENRVUZYTEZWQlFVTXNSMEZCUkR0VFFVRlRMRTlCUVU4c1IwRkJVQ3hMUVVGbExGRkJRV1k3UTBGQlZEczdPenM3T3pzN08wRkJVMnBDTEVsQlFVMHNaME5CUVZrc1ZVRkJReXhSUVVGRUxFVkJRV003UVVGRGNrTXNUVUZCVFN4UlFVRlJMRTlCUVZFc1VVRkJVQ3hMUVVGdlFpeFJRVUZ3UWl4SFFVRm5ReXhUUVVGVExHZENRVUZVTEVOQlFUQkNMRkZCUVRGQ0xFTkJRV3BETEVkQlFYVkZMRkZCUVhaRkxFTkJSSFZDTzBGQlJYSkRMRk5CUVU4c1MwRkJReXhEUVVGTkxFMUJRVTRzUjBGQlowSXNSMEZCUnl4TFFVRklMRU5CUVZNc1NVRkJWQ3hEUVVGakxFdEJRV1FzUTBGQmFrSXNSMEZCZDBNc1IwRkJSeXhKUVVGSUxFTkJRVkVzUzBGQlVpeERRVUY0UXl4RFFVWTRRanREUVVGa096czdPenM3T3pzN08wRkJZV3hDTEVsQlFVMHNiMFJCUVhOQ0xGVkJRVU1zUzBGQlJEdFRRVUZYTEZOQlFWTXNTMEZCVkN4SlFVRnJRaXhOUVVGTkxFdEJRVTRzUTBGQldTeE5RVUZhTEVOQlFXeENMRWRCUVhkRExFTkJRVU1zUzBGQlJDeERRVUY0UXp0RFFVRllPenM3T3pzN096czdPMEZCVlRWQ0xFbEJRVTBzYjBSQlFYTkNMRlZCUVVNc1MwRkJSRHRUUVVGWExGTkJRVk1zUzBGQlZDeEpRVUZyUWl4TlFVRk5MRXRCUVU0c1EwRkJXU3hIUVVGYUxFTkJRV3hDTEVkQlFYRkRMRU5CUVVNc1MwRkJSQ3hEUVVGeVF6dERRVUZZT3pzN096czdPenM3UVVGVE5VSXNTVUZCVFN4blEwRkJXU3hWUVVGRExFZEJRVVFzUlVGQmQwSTdUVUZCYkVJc2EwVkJRVmtzYVVKQlFVMDdPMEZCUXk5RExIVkNRVUZaTEVsQlFVMHNWVUZCYkVJc1EwRkVLME03UVVGRkwwTXNVMEZCVHl4TFFVRkxMRXRCUVV3c1EwRkJWeXhOUVVGTkxGTkJRVTRzUTBGQldDeEhRVUU0UWl4VFFVRTVRaXhEUVVaM1F6dERRVUY0UWlJc0ltWnBiR1VpT2lKMWRHbHNjeTVxY3lJc0luTnZkWEpqWlZKdmIzUWlPaUl2VlhObGNuTXZUV0YwZEM5VGFYUmxjeTl3YjNCdGIzUnBiMjRpTENKemIzVnlZMlZ6UTI5dWRHVnVkQ0k2V3lKamIyNXpkQ0JEUVUxRlRGOURRVk5GWDFCQlZGUkZVazRnUFNBdktGdGhMWHBkS1NoYlFTMWFYU2t2Wnp0Y2JtTnZibk4wSUZKRlVFeEJRMFZmVkVWTlVFeEJWRVVnUFNBbkpERXRKREluTzF4dVkyOXVjM1FnU0VGVFgxQkZVa1pQVWsxQlRrTkZYMDVQVnlBOUlDaDBlWEJsYjJZZ2NHVnlabTl5YldGdVkyVWdJVDA5SUNkMWJtUmxabWx1WldRbklDWW1JSEJsY21admNtMWhibU5sTG01dmR5azdYRzVjYmk4cVhHNGdJRWRsZENCMllYSWdkSGx3WlNCaGN5QnpkSEpwYm1kY2JpQWdYRzRnSUVCd1lYSmhiVG9nVm1GeWFXRmliR1VnZEc4Z2RHVnpkRnh1SUNCQWNtVjBkWEp1SUZ0emRISnBibWRkT2lCU1pYUjFjbTV6TENCbWIzSWdhVzV6ZEdGdVkyVWdKMDlpYW1WamRDY2dhV1lnVzI5aWFtVmpkQ0JQWW1wbFkzUmRYRzRxTDF4dVkyOXVjM1FnZG1GeVZIbHdaU0E5SUhaaGNtbGhZbXhsSUQwK0lFOWlhbVZqZEM1d2NtOTBiM1I1Y0dVdWRHOVRkSEpwYm1jdVkyRnNiQ2gyWVhKcFlXSnNaU2t1YzJ4cFkyVW9PQ3dnTFRFcE8xeHVYRzR2S2x4dUlDQkRiMjUyWlhKMElHTmhiV1ZzUTJGelpTQjBieUJrWVhOb0xXTmhjMlZjYmx4dUlDQkFjR0Z5WVcwZ1czTjBjbWx1WjExY2JpQWdRSEpsZEhWeWJpQmJjM1J5YVc1blhWeHVLaTljYm1WNGNHOXlkQ0JqYjI1emRDQmpZVzFsYkZSdlJHRnphQ0E5SUNoemRISnBibWNwSUQwK0lITjBjbWx1Wnk1eVpYQnNZV05sS0VOQlRVVk1YME5CVTBWZlVFRlVWRVZTVGl3Z1VrVlFURUZEUlY5VVJVMVFURUZVUlNrdWRHOU1iM2RsY2tOaGMyVW9LVHRjYmx4dVpYaHdiM0owSUdOdmJuTjBJR055WldGMFpVUmxiR2x0YVhSbFpDQTlJQ2gyWVd4MVpYTXNJSFJsY20xekxDQmtaV3hwYldsMFpYSXNJR05vYjNBcElEMCtJSHRjYmlBZ1kyOXVjM1FnYm5WdFZHVnliWE1nUFNCMFpYSnRjeTVzWlc1bmRHZzdYRzRnSUd4bGRDQmpiMjFpYVc1bFpDQTlJQ2NuTzF4dVhHNGdJR1p2Y2lBb2JHVjBJR2tnUFNBd095QnBJRHdnYm5WdFZHVnliWE03SUdrckt5a2dlMXh1SUNBZ0lHTnZibk4wSUhSbGNtMGdQU0IwWlhKdGMxdHBYVHRjYmlBZ0lDQnBaaUFvZG1Gc2RXVnpMbWhoYzA5M2JsQnliM0JsY25SNUtIUmxjbTBwS1NCN1hHNGdJQ0FnSUNCamIyMWlhVzVsWkNBclBTQjJZV3gxWlhOYmRHVnliVjBnS3lCa1pXeHBiV2wwWlhJN1hHNGdJQ0FnZlZ4dUlDQjlYRzVjYmlBZ2FXWWdLR05vYjNBcElIdGNiaUFnSUNCamIyMWlhVzVsWkNBOUlHTnZiV0pwYm1Wa0xuTnNhV05sS0RBc0lDMWphRzl3S1R0Y2JpQWdmVnh1WEc0Z0lISmxkSFZ5YmlCamIyMWlhVzVsWkR0Y2JuMDdYRzVjYmk4cVhHNGdJRU55WldGMFpTQmhJR1oxYm1OMGFXOXVJSE4wY21sdVoxeHVYRzRnSUNjeU1IQjRKeXdnSjNSeVlXNXpiR0YwWlNjZ0xUNGdKM1J5WVc1emJHRjBaU2d5TUhCNEtTZGNibHh1SUNCQWNHRnlZVzBnVzNOMGNtbHVaMTFjYmlBZ1FIQmhjbUZ0SUZ0emRISnBibWRkWEc0Z0lFQnlaWFIxY200Z1czTjBjbWx1WjExY2Jpb3ZYRzVsZUhCdmNuUWdZMjl1YzNRZ1kzSmxZWFJsUm5WdVkzUnBiMjVUZEhKcGJtY2dQU0FvZG1Gc2RXVXNJSEJ5WldacGVDa2dQVDRnWUNSN2NISmxabWw0ZlNna2UzWmhiSFZsZlNsZ08xeHVYRzR2S2x4dUlDQkhaVzVsY21GMFpTQmpkWEp5Wlc1MElIUnBiV1Z6ZEdGdGNGeHVJQ0JjYmlBZ1FISmxkSFZ5YmlCYmRHbHRaWE4wWVcxd1hUb2dRM1Z5Y21WdWRDQlZUa2xZSUhScGJXVnpkR0Z0Y0Z4dUtpOWNibVY0Y0c5eWRDQmpiMjV6ZENCamRYSnlaVzUwVkdsdFpTQTlJRWhCVTE5UVJWSkdUMUpOUVU1RFJWOU9UMWNnUHlBb0tTQTlQaUJ3WlhKbWIzSnRZVzVqWlM1dWIzY29LU0E2SUNncElEMCtJRzVsZHlCRVlYUmxLQ2t1WjJWMFZHbHRaU2dwTzF4dVhHNHZLbHh1SUNCVGNHeHBkQ0JoSUhaaGJIVmxJR2x1ZEc4Z1lTQjJZV3gxWlM5MWJtbDBJRzlpYW1WamRGeHVJQ0JjYmlBZ0lDQmNJakl3TUhCNFhDSWdMVDRnZXlCMllXeDFaVG9nTWpBd0xDQjFibWwwT2lCY0luQjRYQ0lnZlZ4dUlDQWdJRnh1SUNCQWNHRnlZVzBnVzNOMGNtbHVaMTA2SUZaaGJIVmxJSFJ2SUhOd2JHbDBYRzRnSUVCeVpYUjFjbTRnVzI5aWFtVmpkRjA2SUU5aWFtVmpkQ0IzYVhSb0lIWmhiSFZsSUdGdVpDQjFibWwwSUhCeWIzQnpYRzRxTDF4dVpYaHdiM0owSUdOdmJuTjBJR1pwYm1SV1lXeDFaVUZ1WkZWdWFYUWdQU0FvZG1Gc2RXVXBJRDArSUh0Y2JpQWdhV1lnS0haaGJIVmxMbTFoZEdOb0tTQjdYRzRnSUNBZ1kyOXVjM1FnYzNCc2FYUldZV3gxWlNBOUlIWmhiSFZsTG0xaGRHTm9LQzhvTFQ5Y1hHUXFYRnd1UDF4Y1pDb3BLQzRxS1M4cE8xeHVYRzRnSUNBZ2NtVjBkWEp1SUh0Y2JpQWdJQ0FnSUhaaGJIVmxPaUJ3WVhKelpVWnNiMkYwS0hOd2JHbDBWbUZzZFdWYk1WMHBMRnh1SUNBZ0lDQWdkVzVwZERvZ0lITndiR2wwVm1Gc2RXVmJNbDFjYmlBZ0lDQjlPMXh1SUNCOUlHVnNjMlVnZTF4dUlDQWdJSEpsZEhWeWJpQjdJSFpoYkhWbElIMDdYRzRnSUgxY2JuMDdYRzVjYmk4cVhHNGdJRk53YkdsMElHTnZiRzl5SUhOMGNtbHVaeUJwYm5SdklHMWhjQ0J2WmlCamIyeHZjaUJ3Y205d1pYSjBhV1Z6WEc1Y2JpQWdYQ0p5WjJKaEtESTFOU3dnTWpVMUxDQXlOVFVzSURBcFhDSXNJRnRjSWxKbFpGd2lMQ0FuUjNKbFpXNWNJaXdnWENKQ2JIVmxYQ0lzSUZ3aVFXeHdhR0ZjSWwxY2JseHVJQ0I3SUZKbFpEb2dNalUxTGk0dUlIMWNiaW92WEc1bGVIQnZjblFnWTI5dWMzUWdaMlYwUTI5c2IzSldZV3gxWlhNZ1BTQW9kbUZzZFdVc0lHTnZiRzl5VkdWeWJYTXBJRDArSUh0Y2JpQWdZMjl1YzNRZ2JuVnRRMjlzYjNKVVpYSnRjeUE5SUdOdmJHOXlWR1Z5YlhNdWJHVnVaM1JvTzF4dUlDQmpiMjV6ZENCamIyeHZjbFpoYkhWbGN5QTlJSHQ5TzF4dUlDQmpiMjV6ZENCamIyeHZjbk1nUFNCemNHeHBkRU52YlcxaFJHVnNhVzFwZEdWa0tHZGxkRlpoYkhWbFJuSnZiVVoxYm1OMGFXOXVVM1J5YVc1bktIWmhiSFZsS1NrN1hHNWNiaUFnWm05eUlDaHNaWFFnYVNBOUlEQTdJR2tnUENCdWRXMURiMnh2Y2xSbGNtMXpPeUJwS3lzcElIdGNiaUFnSUNCamIyeHZjbFpoYkhWbGMxdGpiMnh2Y2xSbGNtMXpXMmxkWFNBOUlDaGpiMnh2Y25OYmFWMGdJVDA5SUhWdVpHVm1hVzVsWkNrZ1B5QmpiMnh2Y25OYmFWMGdPaUF4TzF4dUlDQjlYRzVjYmlBZ2NtVjBkWEp1SUdOdmJHOXlWbUZzZFdWek8xeHVmVHRjYmx4dUx5cGNiaUFnUjJWMElIWmhiSFZsSUdaeWIyMGdablZ1WTNScGIyNGdjM1J5YVc1blhHNWNiaUFnWENKMGNtRnVjMnhoZEdWWUtESXdjSGdwWENJZ0xUNGdYQ0l5TUhCNFhDSmNiaW92WEc1bGVIQnZjblFnWTI5dWMzUWdaMlYwVm1Gc2RXVkdjbTl0Um5WdVkzUnBiMjVUZEhKcGJtY2dQU0FvZG1Gc2RXVXBJRDArSUhaaGJIVmxMbk4xWW5OMGNtbHVaeWgyWVd4MVpTNXBibVJsZUU5bUtDY29KeWtnS3lBeExDQjJZV3gxWlM1c1lYTjBTVzVrWlhoUFppZ25LU2NwS1R0Y2JseHVMeXBjYmlBZ1EyaGxZMnNnYVdZZ2RIZHZJRzlpYW1WamRITWdhR0YyWlNCamFHRnVaMlZrSUdaeWIyMGdaV0ZqYUNCdmRHaGxjbHh1SUNCY2JpQWdRSEJoY21GdElGdHZZbXBsWTNSZE9pQkpibkIxZENCQlhHNGdJRUJ3WVhKaGJTQmJiMkpxWldOMFhUb2dTVzV3ZFhRZ1FseHVJQ0JBY21WMGRYSnVJRnRpYjI5c1pXRnVYVG9nVkhKMVpTQnBaaUJrYVdabVpYSmxiblJjYmlvdlhHNWxlSEJ2Y25RZ1kyOXVjM1FnYUdGelEyaGhibWRsWkNBOUlDaGhMQ0JpS1NBOVBpQjdYRzRnSUd4bGRDQmphR0Z1WjJWa0lEMGdabUZzYzJVN1hHNWNiaUFnWm05eUlDaHNaWFFnYTJWNUlHbHVJR0VwSUh0Y2JpQWdJQ0JwWmlBb1lTNW9ZWE5QZDI1UWNtOXdaWEowZVNoclpYa3BLU0I3WEc0Z0lDQWdJQ0JwWmlBb2FHRnpVSEp2Y0dWeWRIa29ZaXdnYTJWNUtTa2dlMXh1SUNBZ0lDQWdJQ0JwWmlBb1lWdHJaWGxkSUNFOVBTQmlXMnRsZVYwcElIdGNiaUFnSUNBZ0lDQWdJQ0JqYUdGdVoyVmtJRDBnZEhKMVpUdGNiaUFnSUNBZ0lDQWdmVnh1SUNBZ0lDQWdmU0JsYkhObElIdGNiaUFnSUNBZ0lDQWdZMmhoYm1kbFpDQTlJSFJ5ZFdVN1hHNGdJQ0FnSUNCOVhHNGdJQ0FnZlZ4dUlDQjlYRzVjYmlBZ2NtVjBkWEp1SUdOb1lXNW5aV1E3WEc1OU8xeHVYRzR2S2x4dUlDQkRhR1ZqYXlCcFppQnZZbXBsWTNRZ2FHRnpJSEJ5YjNCbGNuUjVJR0Z1WkNCcGRDQnBjMjRuZENCMWJtUmxabWx1WldSY2JseHVJQ0JBY0dGeVlXMGdXMjlpYW1WamRGMWNiaUFnUUhCaGNtRnRJRnR6ZEhKcGJtZGRYRzRnSUVCeVpYUjFjbTRnVzJKdmIyeGxZVzVkWEc0cUwxeHVaWGh3YjNKMElHTnZibk4wSUdoaGMxQnliM0JsY25SNUlEMGdLRzlpYW1WamRDd2djSEp2Y0dWeWRIbE9ZVzFsS1NBOVBpQnZZbXBsWTNRdWFHRnpUM2R1VUhKdmNHVnlkSGtvY0hKdmNHVnlkSGxPWVcxbEtTQW1KaUJ2WW1wbFkzUmJjSEp2Y0dWeWRIbE9ZVzFsWFNBaFBUMGdkVzVrWldacGJtVmtPMXh1WEc0dktseHVJQ0JKY3lCMWRHbHNjeUIyWVhJZ1lXNGdZWEp5WVhrZ1B5QmNiaUFnWEc0Z0lFQndZWEpoYlRvZ1ZtRnlhV0ZpYkdVZ2RHOGdkR1Z6ZEZ4dUlDQkFjbVYwZFhKdUlGdGliMjlzWldGdVhUb2dVbVYwZFhKdWN5QjBjblZsSUdsbUlIVjBhV3h6TG5aaGNsUjVjR1VnUFQwOUlDZEJjbkpoZVNkY2Jpb3ZYRzVsZUhCdmNuUWdZMjl1YzNRZ2FYTkJjbkpoZVNBOUlDaGhjbklwSUQwK0lIWmhjbFI1Y0dVb1lYSnlLU0E5UFQwZ0owRnljbUY1Snp0Y2JseHVMeXBjYmlBZ1NYTWdkWFJwYkhNZ2RtRnlJR0VnWm5WdVkzUnBiMjRnUHlCY2JpQWdYRzRnSUVCd1lYSmhiVG9nVm1GeWFXRmliR1VnZEc4Z2RHVnpkRnh1SUNCQWNtVjBkWEp1SUZ0aWIyOXNaV0Z1WFRvZ1VtVjBkWEp1Y3lCMGNuVmxJR2xtSUhWMGFXeHpMblpoY2xSNWNHVWdQVDA5SUNkR2RXNWpkR2x2YmlkY2Jpb3ZYRzVsZUhCdmNuUWdZMjl1YzNRZ2FYTkdkVzVqSUQwZ0tHOWlhaWtnUFQ0Z2RtRnlWSGx3WlNodlltb3BJRDA5UFNBblJuVnVZM1JwYjI0bk8xeHVYRzR2S2x4dUlDQkpjeUIxZEdsc2N5QjJZWElnWVNCdWRXMWlaWEkvWEc0Z0lGeHVJQ0JBY0dGeVlXMDZJRlpoY21saFlteGxJSFJ2SUhSbGMzUmNiaUFnUUhKbGRIVnliaUJiWW05dmJHVmhibDA2SUZKbGRIVnlibk1nZEhKMVpTQnBaaUIwZVhCbGIyWWdQVDA5SUNkdWRXMWlaWEluWEc0cUwxeHVaWGh3YjNKMElHTnZibk4wSUdselRuVnRJRDBnS0c1MWJTa2dQVDRnZEhsd1pXOW1JRzUxYlNBOVBUMGdKMjUxYldKbGNpYzdYRzVjYmk4cVhHNGdJRWx6SUhWMGFXeHpJSFpoY2lCaGJpQnZZbXBsWTNRL1hHNGdJRnh1SUNCQWNHRnlZVzA2SUZaaGNtbGhZbXhsSUhSdklIUmxjM1JjYmlBZ1FISmxkSFZ5YmlCYlltOXZiR1ZoYmwwNklGSmxkSFZ5Ym5NZ2RISjFaU0JwWmlCMGVYQmxiMllnUFQwOUlDZHZZbXBsWTNRblhHNHFMMXh1Wlhod2IzSjBJR052Ym5OMElHbHpUMkpxSUQwZ0tHOWlhaWtnUFQ0Z2RIbHdaVzltSUc5aWFpQTlQVDBnSjI5aWFtVmpkQ2M3WEc1Y2JpOHFYRzRnSUVseklIVjBhV3h6SUdFZ2NtVnNZWFJwZG1VZ2RtRnNkV1VnWVhOemFXZHViV1Z1ZEQ5Y2JpQWdYRzRnSUVCd1lYSmhiU0JiYzNSeWFXNW5YVG9nVm1GeWFXRmliR1VnZEc4Z2RHVnpkRnh1SUNCQWNtVjBkWEp1SUZ0aWIyOXNaV0Z1WFRvZ1NXWWdkWFJwYkhNZ2JHOXZhM01nYkdsclpTQmhJSEpsYkdGMGFYWmxJSFpoYkhWbElHRnpjMmxuYm0xbGJuUmNiaW92WEc1bGVIQnZjblFnWTI5dWMzUWdhWE5TWld4aGRHbDJaVlpoYkhWbElEMGdLSFpoYkhWbEtTQTlQaUFvZG1Gc2RXVWdKaVlnZG1Gc2RXVXVhVzVrWlhoUFppQW1KaUIyWVd4MVpTNXBibVJsZUU5bUtDYzlKeWtnUGlBd0tTQS9JSFJ5ZFdVZ09pQm1ZV3h6WlR0Y2JseHVMeXBjYmlBZ1NYTWdkWFJwYkhNZ2RtRnlJR0VnYzNSeWFXNW5JRDhnWEc0Z0lGeHVJQ0JBY0dGeVlXMDZJRlpoY21saFlteGxJSFJ2SUhSbGMzUmNiaUFnUUhKbGRIVnliaUJiWW05dmJHVmhibDA2SUZKbGRIVnlibk1nZEhKMVpTQnBaaUIwZVhCbGIyWWdjM1J5SUQwOVBTQW5jM1J5YVc1bkoxeHVLaTljYm1WNGNHOXlkQ0JqYjI1emRDQnBjMU4wY21sdVp5QTlJQ2h6ZEhJcElEMCtJSFI1Y0dWdlppQnpkSElnUFQwOUlDZHpkSEpwYm1jbk8xeHVYRzR2S2x4dUlDQkFjR0Z5WVcwZ1czTjBjbWx1WnlCOGZDQk9iMlJsVEdsemRGMDZYRzRnSUNBZ1NXWWdjM1J5YVc1bkxDQjBjbVZoZEdWa0lHRnpJSE5sYkdWamRHOXlMbHh1SUNBZ0lFbG1JRzV2ZEN3Z2RISmxZWFJsWkNCaGN5QndjbVZsZUdsemRHbHVaeUJPYjJSbFRHbHpkRnh1WEc0Z0lFQnlaWFIxY200Z1cwRnljbUY1WFZ4dUtpOWNibVY0Y0c5eWRDQmpiMjV6ZENCelpXeGxZM1JFYjIwZ1BTQW9jMlZzWldOMGIzSXBJRDArSUh0Y2JpQWdZMjl1YzNRZ2JtOWtaWE1nUFNBb2RIbHdaVzltSUhObGJHVmpkRzl5SUQwOVBTQW5jM1J5YVc1bkp5a2dQeUJrYjJOMWJXVnVkQzV4ZFdWeWVWTmxiR1ZqZEc5eVFXeHNLSE5sYkdWamRHOXlLU0E2SUhObGJHVmpkRzl5TzF4dUlDQnlaWFIxY200Z0tHNXZaR1Z6TG14bGJtZDBhQ2tnUHlCYlhTNXpiR2xqWlM1allXeHNLRzV2WkdWektTQTZJRnRkTG5CMWMyZ29ibTlrWlhNcE8xeHVmVHRjYmx4dUx5cGNiaUFnVTNCc2FYUWdZMjl0YldFdFpHVnNhVzFwZEdWa0lITjBjbWx1WjF4dVhHNGdJRndpWm05dkxHSmhjbHdpSUMwK0lGdGNJbVp2YjF3aUxDQmNJbUpoY2x3aVhWeHVYRzRnSUVCd1lYSmhiU0JiYzNSeWFXNW5YVnh1SUNCQWNtVjBkWEp1SUZ0aGNuSmhlVjFjYmlvdlhHNWxlSEJ2Y25RZ1kyOXVjM1FnYzNCc2FYUkRiMjF0WVVSbGJHbHRhWFJsWkNBOUlDaDJZV3gxWlNrZ1BUNGdhWE5UZEhKcGJtY29kbUZzZFdVcElEOGdkbUZzZFdVdWMzQnNhWFFvTHl4Y1hITXFMeWtnT2lCYmRtRnNkV1ZkTzF4dVhHNHZLbHh1SUNCVGNHeHBkQ0J6Y0dGalpTMWtaV3hwYldsMFpXUWdjM1J5YVc1blhHNWNiaUFnWENKbWIyOGdZbUZ5WENJZ0xUNGdXMXdpWm05dlhDSXNJRndpWW1GeVhDSmRYRzVjYmlBZ1FIQmhjbUZ0SUZ0emRISnBibWRkWEc0Z0lFQnlaWFIxY200Z1cyRnljbUY1WFZ4dUtpOWNibVY0Y0c5eWRDQmpiMjV6ZENCemNHeHBkRk53WVdObFJHVnNhVzFwZEdWa0lEMGdLSFpoYkhWbEtTQTlQaUJwYzFOMGNtbHVaeWgyWVd4MVpTa2dQeUIyWVd4MVpTNXpjR3hwZENnbklDY3BJRG9nVzNaaGJIVmxYVHRjYmx4dUx5cGNiaUFnUTI5dWRtVnlkQ0J1ZFcxaVpYSWdkRzhnZUNCa1pXTnBiV0ZzSUhCc1lXTmxjMXh1WEc0Z0lFQndZWEpoYlNCYmJuVnRZbVZ5WFZ4dUlDQkFjR0Z5WVcwZ1cyNTFiV0psY2wxY2JpQWdRSEpsZEhWeWJpQmJiblZ0WW1WeVhWeHVLaTljYm1WNGNHOXlkQ0JqYjI1emRDQjBiMFJsWTJsdFlXd2dQU0FvYm5WdExDQndjbVZqYVhOcGIyNGdQU0F5S1NBOVBpQjdYRzRnSUhCeVpXTnBjMmx2YmlBOUlERXdJQ29xSUhCeVpXTnBjMmx2Ymp0Y2JpQWdjbVYwZFhKdUlFMWhkR2d1Y205MWJtUW9iblZ0SUNvZ2NISmxZMmx6YVc5dUtTQXZJSEJ5WldOcGMybHZianRjYm4wN1hHNGlYWDA9XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9pbmMvdXRpbHMuanNcbiAqKiBtb2R1bGUgaWQgPSAyMVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX2RlZmF1bHRQcm9wcyA9IHJlcXVpcmUoJy4vc2V0dGluZ3MvZGVmYXVsdC1wcm9wcycpO1xuXG5leHBvcnRzLmRlZmF1bHQgPSB7XG4gIGRlZmF1bHRQcm9wczogX2RlZmF1bHRQcm9wcy5vcGFjaXR5XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluTnlZeTkyWVd4MVpTMTBlWEJsY3k5aGJIQm9ZUzVxY3lKZExDSnVZVzFsY3lJNlcxMHNJbTFoY0hCcGJtZHpJam9pT3pzN08wRkJRVUU3TzJ0Q1FVVmxPMEZCUTJJc2NVTkJSR0VpTENKbWFXeGxJam9pWVd4d2FHRXVhbk1pTENKemIzVnlZMlZTYjI5MElqb2lMMVZ6WlhKekwwMWhkSFF2VTJsMFpYTXZjRzl3Ylc5MGFXOXVJaXdpYzI5MWNtTmxjME52Ym5SbGJuUWlPbHNpYVcxd2IzSjBJSHNnYjNCaFkybDBlU0I5SUdaeWIyMGdKeTR2YzJWMGRHbHVaM012WkdWbVlYVnNkQzF3Y205d2N5YzdYRzVjYm1WNGNHOXlkQ0JrWldaaGRXeDBJSHRjYmlBZ1pHVm1ZWFZzZEZCeWIzQnpPaUJ2Y0dGamFYUjVYRzU5T3lKZGZRPT1cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL3ZhbHVlLXR5cGVzL2FscGhhLmpzXG4gKiogbW9kdWxlIGlkID0gMjJcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF91bml0ID0gcmVxdWlyZSgnLi91bml0Jyk7XG5cbnZhciBfdW5pdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF91bml0KTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZXhwb3J0cy5kZWZhdWx0ID0ge1xuICBkZWZhdWx0UHJvcHM6IHtcbiAgICB1bml0OiAnZGVnJyxcbiAgICB0eXBlOiBfdW5pdDIuZGVmYXVsdFxuICB9XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluTnlZeTkyWVd4MVpTMTBlWEJsY3k5aGJtZHNaUzVxY3lKZExDSnVZVzFsY3lJNlcxMHNJbTFoY0hCcGJtZHpJam9pT3pzN08wRkJRVUU3T3pzN096dHJRa0ZGWlR0QlFVTmlMR2RDUVVGak8wRkJRMW9zVlVGQlRTeExRVUZPTzBGQlEwRXNkMEpCUmxrN1IwRkJaQ0lzSW1acGJHVWlPaUpoYm1kc1pTNXFjeUlzSW5OdmRYSmpaVkp2YjNRaU9pSXZWWE5sY25NdlRXRjBkQzlUYVhSbGN5OXdiM0J0YjNScGIyNGlMQ0p6YjNWeVkyVnpRMjl1ZEdWdWRDSTZXeUpwYlhCdmNuUWdkVzVwZEZSNWNHVWdabkp2YlNBbkxpOTFibWwwSnp0Y2JseHVaWGh3YjNKMElHUmxabUYxYkhRZ2UxeHVJQ0JrWldaaGRXeDBVSEp2Y0hNNklIdGNiaUFnSUNCMWJtbDBPaUFuWkdWbkp5eGNiaUFnSUNCMGVYQmxPaUIxYm1sMFZIbHdaVnh1SUNCOVhHNTlPeUpkZlE9PVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvdmFsdWUtdHlwZXMvYW5nbGUuanNcbiAqKiBtb2R1bGUgaWQgPSAyM1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9O1xuXG52YXIgX3JnYiA9IHJlcXVpcmUoJy4vcmdiJyk7XG5cbnZhciBfcmdiMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JnYik7XG5cbnZhciBfaHNsID0gcmVxdWlyZSgnLi9oc2wnKTtcblxudmFyIF9oc2wyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfaHNsKTtcblxudmFyIF9oZXggPSByZXF1aXJlKCcuL2hleCcpO1xuXG52YXIgX2hleDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9oZXgpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG52YXIgY29sb3JUeXBlcyA9IFtfcmdiMi5kZWZhdWx0LCBfaHNsMi5kZWZhdWx0LCBfaGV4Mi5kZWZhdWx0XTtcbnZhciBudW1Db2xvclR5cGVzID0gY29sb3JUeXBlcy5sZW5ndGg7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IHtcbiAgZGVmYXVsdFByb3BzOiBfZXh0ZW5kcyh7fSwgX3JnYjIuZGVmYXVsdC5kZWZhdWx0UHJvcHMsIF9oc2wyLmRlZmF1bHQuZGVmYXVsdFByb3BzKSxcblxuICB0ZXN0OiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICByZXR1cm4gX3JnYjIuZGVmYXVsdC50ZXN0KHZhbHVlKSB8fCBfaGV4Mi5kZWZhdWx0LnRlc3QodmFsdWUpIHx8IF9oc2wyLmRlZmF1bHQudGVzdCh2YWx1ZSk7XG4gIH0sXG5cbiAgc3BsaXQ6IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbnVtQ29sb3JUeXBlczsgaSsrKSB7XG4gICAgICBpZiAoY29sb3JUeXBlc1tpXS50ZXN0KHZhbHVlKSkge1xuICAgICAgICByZXR1cm4gY29sb3JUeXBlc1tpXS5zcGxpdCh2YWx1ZSk7XG4gICAgICB9XG4gICAgfVxuICB9LFxuXG4gIGNvbWJpbmU6IGZ1bmN0aW9uICh2YWx1ZXMpIHtcbiAgICByZXR1cm4gdmFsdWVzLlJlZCAhPT0gdW5kZWZpbmVkID8gX3JnYjIuZGVmYXVsdC5jb21iaW5lKHZhbHVlcykgOiBfaHNsMi5kZWZhdWx0LmNvbWJpbmUodmFsdWVzKTtcbiAgfVxufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbk55WXk5MllXeDFaUzEwZVhCbGN5OWpiMnh2Y2k1cWN5SmRMQ0p1WVcxbGN5STZXMTBzSW0xaGNIQnBibWR6SWpvaU96czdPenM3UVVGQlFUczdPenRCUVVOQk96czdPMEZCUTBFN096czdPenRCUVVWQkxFbEJRVTBzWVVGQllTdzJRMEZCWWp0QlFVTk9MRWxCUVUwc1owSkJRV2RDTEZkQlFWY3NUVUZCV0RzN2EwSkJSVkE3UVVGRFlpdzJRa0ZCYlVJc1kwRkJTU3haUVVGS0xFVkJRWEZDTEdOQlFVa3NXVUZCU2l4RFFVRjRRenM3UVVGRlFTeFJRVUZOTEZWQlFVTXNTMEZCUkR0WFFVRlhMR05CUVVrc1NVRkJTaXhEUVVGVExFdEJRVlFzUzBGQmJVSXNZMEZCU1N4SlFVRktMRU5CUVZNc1MwRkJWQ3hEUVVGdVFpeEpRVUZ6UXl4alFVRkpMRWxCUVVvc1EwRkJVeXhMUVVGVUxFTkJRWFJETzBkQlFWZzdPMEZCUlU0c1UwRkJUeXhWUVVGRExFdEJRVVFzUlVGQlZ6dEJRVU5vUWl4VFFVRkxMRWxCUVVrc1NVRkJTU3hEUVVGS0xFVkJRVThzU1VGQlNTeGhRVUZLTEVWQlFXMUNMRWRCUVc1RExFVkJRWGRETzBGQlEzUkRMRlZCUVVrc1YwRkJWeXhEUVVGWUxFVkJRV01zU1VGQlpDeERRVUZ0UWl4TFFVRnVRaXhEUVVGS0xFVkJRU3RDTzBGQlF6ZENMR1ZCUVU4c1YwRkJWeXhEUVVGWUxFVkJRV01zUzBGQlpDeERRVUZ2UWl4TFFVRndRaXhEUVVGUUxFTkJSRFpDTzA5QlFTOUNPMHRCUkVZN1IwRkVTenM3UVVGUlVDeFhRVUZUTEZWQlFVTXNUVUZCUkR0WFFVRlpMRTFCUVVNc1EwRkJUeXhIUVVGUUxFdEJRV1VzVTBGQlppeEhRVUUwUWl4alFVRkpMRTlCUVVvc1EwRkJXU3hOUVVGYUxFTkJRVGRDTEVkQlFXMUVMR05CUVVrc1QwRkJTaXhEUVVGWkxFMUJRVm9zUTBGQmJrUTdSMEZCV2lJc0ltWnBiR1VpT2lKamIyeHZjaTVxY3lJc0luTnZkWEpqWlZKdmIzUWlPaUl2VlhObGNuTXZUV0YwZEM5VGFYUmxjeTl3YjNCdGIzUnBiMjRpTENKemIzVnlZMlZ6UTI5dWRHVnVkQ0k2V3lKcGJYQnZjblFnY21kaUlHWnliMjBnSnk0dmNtZGlKenRjYm1sdGNHOXlkQ0JvYzJ3Z1puSnZiU0FuTGk5b2Myd25PMXh1YVcxd2IzSjBJR2hsZUNCbWNtOXRJQ2N1TDJobGVDYzdYRzVjYm1OdmJuTjBJR052Ykc5eVZIbHdaWE1nUFNCYmNtZGlMQ0JvYzJ3c0lHaGxlRjA3WEc1amIyNXpkQ0J1ZFcxRGIyeHZjbFI1Y0dWeklEMGdZMjlzYjNKVWVYQmxjeTVzWlc1bmRHZzdYRzVjYm1WNGNHOXlkQ0JrWldaaGRXeDBJSHRjYmlBZ1pHVm1ZWFZzZEZCeWIzQnpPaUI3SUM0dUxuSm5ZaTVrWldaaGRXeDBVSEp2Y0hNc0lDNHVMbWh6YkM1a1pXWmhkV3gwVUhKdmNITWdmU3hjYmx4dUlDQjBaWE4wT2lBb2RtRnNkV1VwSUQwK0lISm5ZaTUwWlhOMEtIWmhiSFZsS1NCOGZDQm9aWGd1ZEdWemRDaDJZV3gxWlNrZ2ZId2dhSE5zTG5SbGMzUW9kbUZzZFdVcExGeHVYRzRnSUhOd2JHbDBPaUFvZG1Gc2RXVXBJRDArSUh0Y2JpQWdJQ0JtYjNJZ0tHeGxkQ0JwSUQwZ01Ec2dhU0E4SUc1MWJVTnZiRzl5Vkhsd1pYTTdJR2tyS3lrZ2UxeHVJQ0FnSUNBZ2FXWWdLR052Ykc5eVZIbHdaWE5iYVYwdWRHVnpkQ2gyWVd4MVpTa3BJSHRjYmlBZ0lDQWdJQ0FnY21WMGRYSnVJR052Ykc5eVZIbHdaWE5iYVYwdWMzQnNhWFFvZG1Gc2RXVXBPMXh1SUNBZ0lDQWdmVnh1SUNBZ0lIMWNiaUFnZlN4Y2JseHVJQ0JqYjIxaWFXNWxPaUFvZG1Gc2RXVnpLU0E5UGlBb2RtRnNkV1Z6TGxKbFpDQWhQVDBnZFc1a1pXWnBibVZrS1NBL0lISm5ZaTVqYjIxaWFXNWxLSFpoYkhWbGN5a2dPaUJvYzJ3dVkyOXRZbWx1WlNoMllXeDFaWE1wWEc1OU8xeHVJbDE5XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy92YWx1ZS10eXBlcy9jb2xvci5qc1xuICoqIG1vZHVsZSBpZCA9IDI0XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfdXRpbHMgPSByZXF1aXJlKCcuLi9pbmMvdXRpbHMnKTtcblxudmFyIEZMT0FUX1JFR0VYID0gLygtKT8oXFxkW1xcZFxcLl0qKS9nO1xudmFyIGdlbmVyYXRlVG9rZW4gPSBmdW5jdGlvbiAodG9rZW4pIHtcbiAgcmV0dXJuICckeycgKyB0b2tlbiArICd9Jztcbn07XG5cbmV4cG9ydHMuZGVmYXVsdCA9IHtcblxuICB0ZXN0OiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICB2YXIgbWF0Y2hlcyA9IHZhbHVlLm1hdGNoKEZMT0FUX1JFR0VYKTtcbiAgICByZXR1cm4gKDAsIF91dGlscy5pc0FycmF5KShtYXRjaGVzKSAmJiBtYXRjaGVzLmxlbmd0aCA+IDE7XG4gIH0sXG5cbiAgdGVtcGxhdGU6IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgIHZhciBjb3VudGVyID0gMDtcbiAgICByZXR1cm4gdmFsdWUucmVwbGFjZShGTE9BVF9SRUdFWCwgZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIGdlbmVyYXRlVG9rZW4oY291bnRlcisrKTtcbiAgICB9KTtcbiAgfSxcblxuICBzcGxpdDogZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgdmFyIHNwbGl0VmFsdWUgPSB7fTtcblxuICAgIHZhbHVlLm1hdGNoKEZMT0FUX1JFR0VYKS5mb3JFYWNoKGZ1bmN0aW9uICh2YWx1ZSwgaSkge1xuICAgICAgcmV0dXJuIHNwbGl0VmFsdWVbaV0gPSB2YWx1ZTtcbiAgICB9KTtcblxuICAgIHJldHVybiBzcGxpdFZhbHVlO1xuICB9LFxuXG4gIGNvbWJpbmU6IGZ1bmN0aW9uICh2YWx1ZXMsIHRlbXBsYXRlKSB7XG4gICAgZm9yICh2YXIga2V5IGluIHZhbHVlcykge1xuICAgICAgaWYgKHZhbHVlcy5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgIHRlbXBsYXRlID0gdGVtcGxhdGUucmVwbGFjZShnZW5lcmF0ZVRva2VuKGtleSksIHZhbHVlc1trZXldKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdGVtcGxhdGU7XG4gIH1cblxufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbk55WXk5MllXeDFaUzEwZVhCbGN5OWpiMjF3YkdWNExtcHpJbDBzSW01aGJXVnpJanBiWFN3aWJXRndjR2x1WjNNaU9pSTdPenM3UVVGQlFUczdRVUZGUVN4SlFVRk5MR05CUVdNc2EwSkJRV1E3UVVGRFRpeEpRVUZOTEdkQ1FVRm5RaXhWUVVGRExFdEJRVVE3VTBGQlZ5eFBRVUZQTEV0QlFWQXNSMEZCWlN4SFFVRm1PME5CUVZnN08ydENRVVZRT3p0QlFVVmlMRkZCUVUwc1ZVRkJReXhMUVVGRUxFVkJRVmM3UVVGRFppeFJRVUZOTEZWQlFWVXNUVUZCVFN4TFFVRk9MRU5CUVZrc1YwRkJXaXhEUVVGV0xFTkJSRk03UVVGRlppeFhRVUZSTEc5Q1FVRlJMRTlCUVZJc1MwRkJiMElzVVVGQlVTeE5RVUZTTEVkQlFXbENMRU5CUVdwQ0xFTkJSbUk3UjBGQldEczdRVUZMVGl4WlFVRlZMRlZCUVVNc1MwRkJSQ3hGUVVGWE8wRkJRMjVDTEZGQlFVa3NWVUZCVlN4RFFVRldMRU5CUkdVN1FVRkZia0lzVjBGQlR5eE5RVUZOTEU5QlFVNHNRMEZCWXl4WFFVRmtMRVZCUVRKQ08yRkJRVTBzWTBGQll5eFRRVUZrTzB0QlFVNHNRMEZCYkVNc1EwRkdiVUk3UjBGQldEczdRVUZMVml4VFFVRlBMRlZCUVVNc1MwRkJSQ3hGUVVGWE8wRkJRMmhDTEZGQlFVMHNZVUZCWVN4RlFVRmlMRU5CUkZVN08wRkJSMmhDTEZWQlFVMHNTMEZCVGl4RFFVRlpMRmRCUVZvc1JVRkJlVUlzVDBGQmVrSXNRMEZCYVVNc1ZVRkJReXhMUVVGRUxFVkJRVkVzUTBGQlVqdGhRVUZqTEZkQlFWY3NRMEZCV0N4SlFVRm5RaXhMUVVGb1FqdExRVUZrTEVOQlFXcERMRU5CU0dkQ096dEJRVXRvUWl4WFFVRlBMRlZCUVZBc1EwRk1aMEk3UjBGQldEczdRVUZSVUN4WFFVRlRMRlZCUVVNc1RVRkJSQ3hGUVVGVExGRkJRVlFzUlVGQmMwSTdRVUZETjBJc1UwRkJTeXhKUVVGSkxFZEJRVW9zU1VGQlZ5eE5RVUZvUWl4RlFVRjNRanRCUVVOMFFpeFZRVUZKTEU5QlFVOHNZMEZCVUN4RFFVRnpRaXhIUVVGMFFpeERRVUZLTEVWQlFXZERPMEZCUXpsQ0xHMUNRVUZYTEZOQlFWTXNUMEZCVkN4RFFVRnBRaXhqUVVGakxFZEJRV1FzUTBGQmFrSXNSVUZCY1VNc1QwRkJUeXhIUVVGUUxFTkJRWEpETEVOQlFWZ3NRMEZFT0VJN1QwRkJhRU03UzBGRVJqczdRVUZOUVN4WFFVRlBMRkZCUVZBc1EwRlFOa0k3UjBGQmRFSWlMQ0ptYVd4bElqb2lZMjl0Y0d4bGVDNXFjeUlzSW5OdmRYSmpaVkp2YjNRaU9pSXZWWE5sY25NdlRXRjBkQzlUYVhSbGN5OXdiM0J0YjNScGIyNGlMQ0p6YjNWeVkyVnpRMjl1ZEdWdWRDSTZXeUpwYlhCdmNuUWdleUJwYzBGeWNtRjVJSDBnWm5KdmJTQW5MaTR2YVc1akwzVjBhV3h6Snp0Y2JseHVZMjl1YzNRZ1JreFBRVlJmVWtWSFJWZ2dQU0F2S0MwcFB5aGNYR1JiWEZ4a1hGd3VYU29wTDJjN1hHNWpiMjV6ZENCblpXNWxjbUYwWlZSdmEyVnVJRDBnS0hSdmEyVnVLU0E5UGlBbkpIc25JQ3NnZEc5clpXNGdLeUFuZlNjN1hHNWNibVY0Y0c5eWRDQmtaV1poZFd4MElIdGNibHh1SUNCMFpYTjBPaUFvZG1Gc2RXVXBJRDArSUh0Y2JpQWdJQ0JqYjI1emRDQnRZWFJqYUdWeklEMGdkbUZzZFdVdWJXRjBZMmdvUmt4UFFWUmZVa1ZIUlZncE8xeHVJQ0FnSUhKbGRIVnliaUFvYVhOQmNuSmhlU2h0WVhSamFHVnpLU0FtSmlCdFlYUmphR1Z6TG14bGJtZDBhQ0ErSURFcE8xeHVJQ0I5TEZ4dVhHNGdJSFJsYlhCc1lYUmxPaUFvZG1Gc2RXVXBJRDArSUh0Y2JpQWdJQ0JzWlhRZ1kyOTFiblJsY2lBOUlEQTdYRzRnSUNBZ2NtVjBkWEp1SUhaaGJIVmxMbkpsY0d4aFkyVW9Sa3hQUVZSZlVrVkhSVmdzSUNncElEMCtJR2RsYm1WeVlYUmxWRzlyWlc0b1kyOTFiblJsY2lzcktTazdYRzRnSUgwc1hHNWNiaUFnYzNCc2FYUTZJQ2gyWVd4MVpTa2dQVDRnZTF4dUlDQWdJR052Ym5OMElITndiR2wwVm1Gc2RXVWdQU0I3ZlR0Y2JseHVJQ0FnSUhaaGJIVmxMbTFoZEdOb0tFWk1UMEZVWDFKRlIwVllLUzVtYjNKRllXTm9LQ2gyWVd4MVpTd2dhU2tnUFQ0Z2MzQnNhWFJXWVd4MVpWdHBYU0E5SUhaaGJIVmxLVHRjYmx4dUlDQWdJSEpsZEhWeWJpQnpjR3hwZEZaaGJIVmxPMXh1SUNCOUxGeHVYRzRnSUdOdmJXSnBibVU2SUNoMllXeDFaWE1zSUhSbGJYQnNZWFJsS1NBOVBpQjdYRzRnSUNBZ1ptOXlJQ2hzWlhRZ2EyVjVJR2x1SUhaaGJIVmxjeWtnZTF4dUlDQWdJQ0FnYVdZZ0tIWmhiSFZsY3k1b1lYTlBkMjVRY205d1pYSjBlU2hyWlhrcEtTQjdYRzRnSUNBZ0lDQWdJSFJsYlhCc1lYUmxJRDBnZEdWdGNHeGhkR1V1Y21Wd2JHRmpaU2huWlc1bGNtRjBaVlJ2YTJWdUtHdGxlU2tzSUhaaGJIVmxjMXRyWlhsZEtUdGNiaUFnSUNBZ0lIMWNiaUFnSUNCOVhHNWNiaUFnSUNCeVpYUjFjbTRnZEdWdGNHeGhkR1U3WEc0Z0lIMWNibHh1ZlRzaVhYMD1cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL3ZhbHVlLXR5cGVzL2NvbXBsZXguanNcbiAqKiBtb2R1bGUgaWQgPSAyNVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX3JnYiA9IHJlcXVpcmUoJy4vcmdiJyk7XG5cbnZhciBfcmdiMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JnYik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmV4cG9ydHMuZGVmYXVsdCA9IHtcbiAgZGVmYXVsdFByb3BzOiBfcmdiMi5kZWZhdWx0LmRlZmF1bHRQcm9wcyxcblxuICB0ZXN0OiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICByZXR1cm4gdmFsdWUgJiYgdmFsdWUuaW5kZXhPZignIycpID4gLTE7XG4gIH0sXG5cbiAgc3BsaXQ6IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgIHZhciByID0gdm9pZCAwLFxuICAgICAgICBnID0gdm9pZCAwLFxuICAgICAgICBiID0gdm9pZCAwO1xuXG4gICAgLy8gSWYgd2UgaGF2ZSA2IGNoYXJhY3RlcnMsIGllICNGRjAwMDBcbiAgICBpZiAodmFsdWUubGVuZ3RoID4gNCkge1xuICAgICAgciA9IHZhbHVlLnN1YnN0cigxLCAyKTtcbiAgICAgIGcgPSB2YWx1ZS5zdWJzdHIoMywgMik7XG4gICAgICBiID0gdmFsdWUuc3Vic3RyKDUsIDIpO1xuXG4gICAgICAvLyBPciB3ZSBoYXZlIDMgY2hhcmFjdGVycywgaWUgI0YwMFxuICAgIH0gZWxzZSB7XG4gICAgICAgIHIgPSB2YWx1ZS5zdWJzdHIoMSwgMSk7XG4gICAgICAgIGcgPSB2YWx1ZS5zdWJzdHIoMiwgMSk7XG4gICAgICAgIGIgPSB2YWx1ZS5zdWJzdHIoMywgMSk7XG4gICAgICAgIHIgKz0gcjtcbiAgICAgICAgZyArPSBnO1xuICAgICAgICBiICs9IGI7XG4gICAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgUmVkOiBwYXJzZUludChyLCAxNiksXG4gICAgICBHcmVlbjogcGFyc2VJbnQoZywgMTYpLFxuICAgICAgQmx1ZTogcGFyc2VJbnQoYiwgMTYpLFxuICAgICAgQWxwaGE6IDFcbiAgICB9O1xuICB9LFxuXG4gIGNvbWJpbmU6IGZ1bmN0aW9uICh2YWx1ZXMpIHtcbiAgICByZXR1cm4gX3JnYjIuZGVmYXVsdC5jb21iaW5lKHZhbHVlcyk7XG4gIH1cbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5OeVl5OTJZV3gxWlMxMGVYQmxjeTlvWlhndWFuTWlYU3dpYm1GdFpYTWlPbHRkTENKdFlYQndhVzVuY3lJNklqczdPenRCUVVGQk96czdPenM3YTBKQlJXVTdRVUZEWWl4blFrRkJZeXhqUVVGSkxGbEJRVW83TzBGQlJXUXNVVUZCVFN4VlFVRkRMRXRCUVVRN1YwRkJXU3hUUVVGVExFMUJRVTBzVDBGQlRpeERRVUZqTEVkQlFXUXNTVUZCY1VJc1EwRkJReXhEUVVGRU8wZEJRVEZET3p0QlFVVk9MRk5CUVU4c1ZVRkJReXhMUVVGRUxFVkJRVmM3UVVGRGFFSXNVVUZCU1N4VlFVRktPMUZCUVU4c1ZVRkJVRHRSUVVGVkxGVkJRVlk3T3p0QlFVUm5RaXhSUVVsYUxFMUJRVTBzVFVGQlRpeEhRVUZsTEVOQlFXWXNSVUZCYTBJN1FVRkRjRUlzVlVGQlNTeE5RVUZOTEUxQlFVNHNRMEZCWVN4RFFVRmlMRVZCUVdkQ0xFTkJRV2hDTEVOQlFVb3NRMEZFYjBJN1FVRkZjRUlzVlVGQlNTeE5RVUZOTEUxQlFVNHNRMEZCWVN4RFFVRmlMRVZCUVdkQ0xFTkJRV2hDTEVOQlFVb3NRMEZHYjBJN1FVRkhjRUlzVlVGQlNTeE5RVUZOTEUxQlFVNHNRMEZCWVN4RFFVRmlMRVZCUVdkQ0xFTkJRV2hDTEVOQlFVbzdPenRCUVVodlFpeExRVUYwUWl4TlFVMVBPMEZCUTB3c1dVRkJTU3hOUVVGTkxFMUJRVTRzUTBGQllTeERRVUZpTEVWQlFXZENMRU5CUVdoQ0xFTkJRVW9zUTBGRVN6dEJRVVZNTEZsQlFVa3NUVUZCVFN4TlFVRk9MRU5CUVdFc1EwRkJZaXhGUVVGblFpeERRVUZvUWl4RFFVRktMRU5CUmtzN1FVRkhUQ3haUVVGSkxFMUJRVTBzVFVGQlRpeERRVUZoTEVOQlFXSXNSVUZCWjBJc1EwRkJhRUlzUTBGQlNpeERRVWhMTzBGQlNVd3NZVUZCU3l4RFFVRk1MRU5CU2tzN1FVRkxUQ3hoUVVGTExFTkJRVXdzUTBGTVN6dEJRVTFNTEdGQlFVc3NRMEZCVEN4RFFVNUxPMDlCVGxBN08wRkJaVUVzVjBGQlR6dEJRVU5NTEZkQlFVc3NVMEZCVXl4RFFVRlVMRVZCUVZrc1JVRkJXaXhEUVVGTU8wRkJRMEVzWVVGQlR5eFRRVUZUTEVOQlFWUXNSVUZCV1N4RlFVRmFMRU5CUVZBN1FVRkRRU3haUVVGTkxGTkJRVk1zUTBGQlZDeEZRVUZaTEVWQlFWb3NRMEZCVGp0QlFVTkJMR0ZCUVU4c1EwRkJVRHRMUVVwR0xFTkJia0puUWp0SFFVRllPenRCUVRKQ1VDeFhRVUZUTEZWQlFVTXNUVUZCUkR0WFFVRlpMR05CUVVrc1QwRkJTaXhEUVVGWkxFMUJRVm83UjBGQldpSXNJbVpwYkdVaU9pSm9aWGd1YW5NaUxDSnpiM1Z5WTJWU2IyOTBJam9pTDFWelpYSnpMMDFoZEhRdlUybDBaWE12Y0c5d2JXOTBhVzl1SWl3aWMyOTFjbU5sYzBOdmJuUmxiblFpT2xzaWFXMXdiM0owSUhKbllpQm1jbTl0SUNjdUwzSm5ZaWM3WEc1Y2JtVjRjRzl5ZENCa1pXWmhkV3gwSUh0Y2JpQWdaR1ZtWVhWc2RGQnliM0J6T2lCeVoySXVaR1ZtWVhWc2RGQnliM0J6TEZ4dVhHNGdJSFJsYzNRNklDaDJZV3gxWlNrZ1BUNGdLSFpoYkhWbElDWW1JSFpoYkhWbExtbHVaR1Y0VDJZb0p5TW5LU0ErSUMweEtTeGNibHh1SUNCemNHeHBkRG9nS0haaGJIVmxLU0E5UGlCN1hHNGdJQ0FnYkdWMElISXNJR2NzSUdJN1hHNWNiaUFnSUNBdkx5QkpaaUIzWlNCb1lYWmxJRFlnWTJoaGNtRmpkR1Z5Y3l3Z2FXVWdJMFpHTURBd01GeHVJQ0FnSUdsbUlDaDJZV3gxWlM1c1pXNW5kR2dnUGlBMEtTQjdYRzRnSUNBZ0lDQnlJRDBnZG1Gc2RXVXVjM1ZpYzNSeUtERXNJRElwTzF4dUlDQWdJQ0FnWnlBOUlIWmhiSFZsTG5OMVluTjBjaWd6TENBeUtUdGNiaUFnSUNBZ0lHSWdQU0IyWVd4MVpTNXpkV0p6ZEhJb05Td2dNaWs3WEc1Y2JpQWdJQ0F2THlCUGNpQjNaU0JvWVhabElETWdZMmhoY21GamRHVnljeXdnYVdVZ0kwWXdNRnh1SUNBZ0lIMGdaV3h6WlNCN1hHNGdJQ0FnSUNCeUlEMGdkbUZzZFdVdWMzVmljM1J5S0RFc0lERXBPMXh1SUNBZ0lDQWdaeUE5SUhaaGJIVmxMbk4xWW5OMGNpZ3lMQ0F4S1R0Y2JpQWdJQ0FnSUdJZ1BTQjJZV3gxWlM1emRXSnpkSElvTXl3Z01TazdYRzRnSUNBZ0lDQnlJQ3M5SUhJN1hHNGdJQ0FnSUNCbklDczlJR2M3WEc0Z0lDQWdJQ0JpSUNzOUlHSTdYRzRnSUNBZ2ZWeHVYRzRnSUNBZ2NtVjBkWEp1SUh0Y2JpQWdJQ0FnSUZKbFpEb2djR0Z5YzJWSmJuUW9jaXdnTVRZcExGeHVJQ0FnSUNBZ1IzSmxaVzQ2SUhCaGNuTmxTVzUwS0djc0lERTJLU3hjYmlBZ0lDQWdJRUpzZFdVNklIQmhjbk5sU1c1MEtHSXNJREUyS1N4Y2JpQWdJQ0FnSUVGc2NHaGhPaUF4WEc0Z0lDQWdmVHRjYmlBZ2ZTeGNibHh1SUNCamIyMWlhVzVsT2lBb2RtRnNkV1Z6S1NBOVBpQnlaMkl1WTI5dFltbHVaU2gyWVd4MVpYTXBYRzU5T3lKZGZRPT1cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL3ZhbHVlLXR5cGVzL2hleC5qc1xuICoqIG1vZHVsZSBpZCA9IDI2XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfZGVmYXVsdFByb3BzID0gcmVxdWlyZSgnLi9zZXR0aW5ncy9kZWZhdWx0LXByb3BzJyk7XG5cbnZhciBfZGljdGlvbmFyeSA9IHJlcXVpcmUoJy4vc2V0dGluZ3MvZGljdGlvbmFyeScpO1xuXG52YXIgX3V0aWxzID0gcmVxdWlyZSgnLi4vaW5jL3V0aWxzJyk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IHtcbiAgZGVmYXVsdFByb3BzOiB7XG4gICAgSHVlOiB7XG4gICAgICBtaW46IDAsXG4gICAgICBtYXg6IDM2MFxuICAgIH0sXG4gICAgU2F0dXJhdGlvbjogX2RlZmF1bHRQcm9wcy5wZXJjZW50LFxuICAgIExpZ2h0bmVzczogX2RlZmF1bHRQcm9wcy5wZXJjZW50LFxuICAgIEFscGhhOiBfZGVmYXVsdFByb3BzLm9wYWNpdHlcbiAgfSxcblxuICB0ZXN0OiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICByZXR1cm4gdmFsdWUgJiYgdmFsdWUuaW5kZXhPZignaHNsJykgPiAtMTtcbiAgfSxcblxuICBzcGxpdDogZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgcmV0dXJuICgwLCBfdXRpbHMuZ2V0Q29sb3JWYWx1ZXMpKHZhbHVlLCBfZGljdGlvbmFyeS5oc2wpO1xuICB9LFxuXG4gIGNvbWJpbmU6IGZ1bmN0aW9uICh2YWx1ZXMpIHtcbiAgICByZXR1cm4gKDAsIF91dGlscy5jcmVhdGVGdW5jdGlvblN0cmluZykoKDAsIF91dGlscy5jcmVhdGVEZWxpbWl0ZWQpKHZhbHVlcywgX2RpY3Rpb25hcnkuaHNsLCAnLCAnLCAyKSwgJ2hzbGEnKTtcbiAgfVxufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbk55WXk5MllXeDFaUzEwZVhCbGN5OW9jMnd1YW5NaVhTd2libUZ0WlhNaU9sdGRMQ0p0WVhCd2FXNW5jeUk2SWpzN096dEJRVUZCT3p0QlFVTkJPenRCUVVOQk96dHJRa0ZGWlR0QlFVTmlMR2RDUVVGak8wRkJRMW9zVTBGQlN6dEJRVU5JTEZkQlFVc3NRMEZCVER0QlFVTkJMRmRCUVVzc1IwRkJURHRMUVVaR08wRkJTVUVzY1VOQlRGazdRVUZOV2l4dlEwRk9XVHRCUVU5YUxHZERRVkJaTzBkQlFXUTdPMEZCVlVFc1VVRkJUU3hWUVVGRExFdEJRVVE3VjBGQldTeFRRVUZUTEUxQlFVMHNUMEZCVGl4RFFVRmpMRXRCUVdRc1NVRkJkVUlzUTBGQlF5eERRVUZFTzBkQlFUVkRPenRCUVVWT0xGTkJRVThzVlVGQlF5eExRVUZFTzFkQlFWY3NNa0pCUVdVc1MwRkJaanRIUVVGWU96dEJRVVZRTEZkQlFWTXNWVUZCUXl4TlFVRkVPMWRCUVZrc2FVTkJRWEZDTERSQ1FVRm5RaXhOUVVGb1FpeHRRa0ZCYTBNc1NVRkJiRU1zUlVGQmQwTXNRMEZCZUVNc1EwRkJja0lzUlVGQmFVVXNUVUZCYWtVN1IwRkJXaUlzSW1acGJHVWlPaUpvYzJ3dWFuTWlMQ0p6YjNWeVkyVlNiMjkwSWpvaUwxVnpaWEp6TDAxaGRIUXZVMmwwWlhNdmNHOXdiVzkwYVc5dUlpd2ljMjkxY21ObGMwTnZiblJsYm5RaU9sc2lhVzF3YjNKMElIc2djR1Z5WTJWdWRDd2diM0JoWTJsMGVTQjlJR1p5YjIwZ0p5NHZjMlYwZEdsdVozTXZaR1ZtWVhWc2RDMXdjbTl3Y3ljN1hHNXBiWEJ2Y25RZ2V5Qm9jMndnWVhNZ2FITnNWR1Z5YlhNZ2ZTQm1jbTl0SUNjdUwzTmxkSFJwYm1kekwyUnBZM1JwYjI1aGNua25PMXh1YVcxd2IzSjBJSHNnWTNKbFlYUmxSR1ZzYVcxcGRHVmtMQ0JqY21WaGRHVkdkVzVqZEdsdmJsTjBjbWx1Wnl3Z1oyVjBRMjlzYjNKV1lXeDFaWE1nZlNCbWNtOXRJQ2N1TGk5cGJtTXZkWFJwYkhNbk8xeHVYRzVsZUhCdmNuUWdaR1ZtWVhWc2RDQjdYRzRnSUdSbFptRjFiSFJRY205d2N6b2dlMXh1SUNBZ0lFaDFaVG9nZTF4dUlDQWdJQ0FnYldsdU9pQXdMRnh1SUNBZ0lDQWdiV0Y0T2lBek5qQmNiaUFnSUNCOUxGeHVJQ0FnSUZOaGRIVnlZWFJwYjI0NklIQmxjbU5sYm5Rc1hHNGdJQ0FnVEdsbmFIUnVaWE56T2lCd1pYSmpaVzUwTEZ4dUlDQWdJRUZzY0doaE9pQnZjR0ZqYVhSNVhHNGdJSDBzWEc1Y2JpQWdkR1Z6ZERvZ0tIWmhiSFZsS1NBOVBpQW9kbUZzZFdVZ0ppWWdkbUZzZFdVdWFXNWtaWGhQWmlnbmFITnNKeWtnUGlBdE1Ta3NYRzVjYmlBZ2MzQnNhWFE2SUNoMllXeDFaU2tnUFQ0Z1oyVjBRMjlzYjNKV1lXeDFaWE1vZG1Gc2RXVXNJR2h6YkZSbGNtMXpLU3hjYmx4dUlDQmpiMjFpYVc1bE9pQW9kbUZzZFdWektTQTlQaUJqY21WaGRHVkdkVzVqZEdsdmJsTjBjbWx1WnloamNtVmhkR1ZFWld4cGJXbDBaV1FvZG1Gc2RXVnpMQ0JvYzJ4VVpYSnRjeXdnSnl3Z0p5d2dNaWtzSUNkb2MyeGhKeWxjYm4wN1hHNGlYWDA9XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy92YWx1ZS10eXBlcy9oc2wuanNcbiAqKiBtb2R1bGUgaWQgPSAyN1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX3VuaXQgPSByZXF1aXJlKCcuL3VuaXQnKTtcblxudmFyIF91bml0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3VuaXQpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5leHBvcnRzLmRlZmF1bHQgPSB7XG4gIGRlZmF1bHRQcm9wczoge1xuICAgIHVuaXQ6ICdweCcsXG4gICAgdHlwZTogX3VuaXQyLmRlZmF1bHRcbiAgfVxufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbk55WXk5MllXeDFaUzEwZVhCbGN5OXdlQzVxY3lKZExDSnVZVzFsY3lJNlcxMHNJbTFoY0hCcGJtZHpJam9pT3pzN08wRkJRVUU3T3pzN096dHJRa0ZGWlR0QlFVTmlMR2RDUVVGak8wRkJRMW9zVlVGQlRTeEpRVUZPTzBGQlEwRXNkMEpCUmxrN1IwRkJaQ0lzSW1acGJHVWlPaUp3ZUM1cWN5SXNJbk52ZFhKalpWSnZiM1FpT2lJdlZYTmxjbk12VFdGMGRDOVRhWFJsY3k5d2IzQnRiM1JwYjI0aUxDSnpiM1Z5WTJWelEyOXVkR1Z1ZENJNld5SnBiWEJ2Y25RZ2RXNXBkRlI1Y0dVZ1puSnZiU0FuTGk5MWJtbDBKenRjYmx4dVpYaHdiM0owSUdSbFptRjFiSFFnZTF4dUlDQmtaV1poZFd4MFVISnZjSE02SUh0Y2JpQWdJQ0IxYm1sME9pQW5jSGduTEZ4dUlDQWdJSFI1Y0dVNklIVnVhWFJVZVhCbFhHNGdJSDFjYm4wN0lsMTlcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL3ZhbHVlLXR5cGVzL3B4LmpzXG4gKiogbW9kdWxlIGlkID0gMjhcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF91dGlscyA9IHJlcXVpcmUoJy4uL2luYy91dGlscycpO1xuXG52YXIgX2RpY3Rpb25hcnkgPSByZXF1aXJlKCcuL3NldHRpbmdzL2RpY3Rpb25hcnknKTtcblxudmFyIF9kZWZhdWx0UHJvcHMgPSByZXF1aXJlKCcuL3NldHRpbmdzL2RlZmF1bHQtcHJvcHMnKTtcblxuZXhwb3J0cy5kZWZhdWx0ID0ge1xuICBkZWZhdWx0UHJvcHM6IHtcbiAgICBSZWQ6IF9kZWZhdWx0UHJvcHMucmdiLFxuICAgIEdyZWVuOiBfZGVmYXVsdFByb3BzLnJnYixcbiAgICBCbHVlOiBfZGVmYXVsdFByb3BzLnJnYixcbiAgICBBbHBoYTogX2RlZmF1bHRQcm9wcy5vcGFjaXR5XG4gIH0sXG5cbiAgdGVzdDogZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgcmV0dXJuIHZhbHVlICYmIHZhbHVlLmluZGV4T2YoJ3JnYicpID4gLTE7XG4gIH0sXG5cbiAgc3BsaXQ6IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgIHJldHVybiAoMCwgX3V0aWxzLmdldENvbG9yVmFsdWVzKSh2YWx1ZSwgX2RpY3Rpb25hcnkucmdiKTtcbiAgfSxcblxuICBjb21iaW5lOiBmdW5jdGlvbiAodmFsdWVzKSB7XG4gICAgcmV0dXJuICgwLCBfdXRpbHMuY3JlYXRlRnVuY3Rpb25TdHJpbmcpKCgwLCBfdXRpbHMuY3JlYXRlRGVsaW1pdGVkKSh2YWx1ZXMsIF9kaWN0aW9uYXJ5LnJnYiwgJywgJywgMiksICdyZ2JhJyk7XG4gIH1cbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5OeVl5OTJZV3gxWlMxMGVYQmxjeTl5WjJJdWFuTWlYU3dpYm1GdFpYTWlPbHRkTENKdFlYQndhVzVuY3lJNklqczdPenRCUVVGQk96dEJRVU5CT3p0QlFVTkJPenRyUWtGRlpUdEJRVU5pTEdkQ1FVRmpPMEZCUTFvc01FSkJSRms3UVVGRldpdzBRa0ZHV1R0QlFVZGFMREpDUVVoWk8wRkJTVm9zWjBOQlNsazdSMEZCWkRzN1FVRlBRU3hSUVVGTkxGVkJRVU1zUzBGQlJEdFhRVUZaTEZOQlFWTXNUVUZCVFN4UFFVRk9MRU5CUVdNc1MwRkJaQ3hKUVVGMVFpeERRVUZETEVOQlFVUTdSMEZCTlVNN08wRkJSVTRzVTBGQlR5eFZRVUZETEV0QlFVUTdWMEZCVnl3eVFrRkJaU3hMUVVGbU8wZEJRVmc3TzBGQlJWQXNWMEZCVXl4VlFVRkRMRTFCUVVRN1YwRkJXU3hwUTBGQmNVSXNORUpCUVdkQ0xFMUJRV2hDTEcxQ1FVRnJReXhKUVVGc1F5eEZRVUYzUXl4RFFVRjRReXhEUVVGeVFpeEZRVUZwUlN4TlFVRnFSVHRIUVVGYUlpd2labWxzWlNJNkluSm5ZaTVxY3lJc0luTnZkWEpqWlZKdmIzUWlPaUl2VlhObGNuTXZUV0YwZEM5VGFYUmxjeTl3YjNCdGIzUnBiMjRpTENKemIzVnlZMlZ6UTI5dWRHVnVkQ0k2V3lKcGJYQnZjblFnZXlCamNtVmhkR1ZFWld4cGJXbDBaV1FzSUdOeVpXRjBaVVoxYm1OMGFXOXVVM1J5YVc1bkxDQm5aWFJEYjJ4dmNsWmhiSFZsY3lCOUlHWnliMjBnSnk0dUwybHVZeTkxZEdsc2N5YzdYRzVwYlhCdmNuUWdleUJ5WjJJZ1lYTWdjbWRpVkdWeWJYTWdmU0JtY205dElDY3VMM05sZEhScGJtZHpMMlJwWTNScGIyNWhjbmtuTzF4dWFXMXdiM0owSUhzZ2NtZGlJR0Z6SUdSbFptRjFiSFJTUjBJc0lHOXdZV05wZEhrZ1lYTWdaR1ZtWVhWc2RFOXdZV05wZEhrZ2ZTQm1jbTl0SUNjdUwzTmxkSFJwYm1kekwyUmxabUYxYkhRdGNISnZjSE1uTzF4dVhHNWxlSEJ2Y25RZ1pHVm1ZWFZzZENCN1hHNGdJR1JsWm1GMWJIUlFjbTl3Y3pvZ2UxeHVJQ0FnSUZKbFpEb2daR1ZtWVhWc2RGSkhRaXhjYmlBZ0lDQkhjbVZsYmpvZ1pHVm1ZWFZzZEZKSFFpeGNiaUFnSUNCQ2JIVmxPaUJrWldaaGRXeDBVa2RDTEZ4dUlDQWdJRUZzY0doaE9pQmtaV1poZFd4MFQzQmhZMmwwZVZ4dUlDQjlMRnh1WEc0Z0lIUmxjM1E2SUNoMllXeDFaU2tnUFQ0Z0tIWmhiSFZsSUNZbUlIWmhiSFZsTG1sdVpHVjRUMllvSjNKbllpY3BJRDRnTFRFcExGeHVYRzRnSUhOd2JHbDBPaUFvZG1Gc2RXVXBJRDArSUdkbGRFTnZiRzl5Vm1Gc2RXVnpLSFpoYkhWbExDQnlaMkpVWlhKdGN5a3NYRzVjYmlBZ1kyOXRZbWx1WlRvZ0tIWmhiSFZsY3lrZ1BUNGdZM0psWVhSbFJuVnVZM1JwYjI1VGRISnBibWNvWTNKbFlYUmxSR1ZzYVcxcGRHVmtLSFpoYkhWbGN5d2djbWRpVkdWeWJYTXNJQ2NzSUNjc0lESXBMQ0FuY21kaVlTY3BYRzU5T3lKZGZRPT1cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL3ZhbHVlLXR5cGVzL3JnYi5qc1xuICoqIG1vZHVsZSBpZCA9IDI5XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHMuZGVmYXVsdCA9IHtcbiAgZGVmYXVsdFByb3BzOiB7XG4gICAgY3VycmVudDogMVxuICB9XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluTnlZeTkyWVd4MVpTMTBlWEJsY3k5elkyRnNaUzVxY3lKZExDSnVZVzFsY3lJNlcxMHNJbTFoY0hCcGJtZHpJam9pT3pzN2EwSkJRV1U3UVVGRFlpeG5Ra0ZCWXp0QlFVTmFMR0ZCUVZNc1EwRkJWRHRIUVVSR0lpd2labWxzWlNJNkluTmpZV3hsTG1weklpd2ljMjkxY21ObFVtOXZkQ0k2SWk5VmMyVnljeTlOWVhSMEwxTnBkR1Z6TDNCdmNHMXZkR2x2YmlJc0luTnZkWEpqWlhORGIyNTBaVzUwSWpwYkltVjRjRzl5ZENCa1pXWmhkV3gwSUh0Y2JpQWdaR1ZtWVhWc2RGQnliM0J6T2lCN1hHNGdJQ0FnWTNWeWNtVnVkRG9nTVZ4dUlDQjlYRzU5T3lKZGZRPT1cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL3ZhbHVlLXR5cGVzL3NjYWxlLmpzXG4gKiogbW9kdWxlIGlkID0gMzBcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTtcblxudmFyIF9jb2xvciA9IHJlcXVpcmUoJy4vY29sb3InKTtcblxudmFyIF9jb2xvcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jb2xvcik7XG5cbnZhciBfcHggPSByZXF1aXJlKCcuL3B4Jyk7XG5cbnZhciBfZGljdGlvbmFyeSA9IHJlcXVpcmUoJy4vc2V0dGluZ3MvZGljdGlvbmFyeScpO1xuXG52YXIgX3V0aWxzID0gcmVxdWlyZSgnLi4vaW5jL3V0aWxzJyk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbnZhciBzaGFkb3dXaXRob3V0Q29sb3JUZXJtcyA9IF9kaWN0aW9uYXJ5LnNoYWRvdy5zbGljZSgwLCA0KTtcblxuZXhwb3J0cy5kZWZhdWx0ID0ge1xuICBkZWZhdWx0UHJvcHM6IF9leHRlbmRzKHt9LCBfY29sb3IyLmRlZmF1bHQuZGVmYXVsdFByb3BzLCB7XG4gICAgWDogX3B4LmRlZmF1bHRQcm9wcyxcbiAgICBZOiBfcHguZGVmYXVsdFByb3BzLFxuICAgIFJhZGl1czogX3B4LmRlZmF1bHRQcm9wcyxcbiAgICBTcHJlYWQ6IF9weC5kZWZhdWx0UHJvcHNcbiAgfSksXG5cbiAgc3BsaXQ6IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgIHZhciBiaXRzID0gKDAsIF91dGlscy5zcGxpdFNwYWNlRGVsaW1pdGVkKSh2YWx1ZSk7XG4gICAgdmFyIGhhc1JlYWNoZWRDb2xvciA9IGZhbHNlO1xuICAgIHZhciBjb2xvclByb3AgPSAnJztcbiAgICB2YXIgc3BsaXRWYWx1ZSA9IHt9O1xuXG4gICAgYml0cy5mb3JFYWNoKGZ1bmN0aW9uIChiaXQsIGkpIHtcbiAgICAgIC8vIElmIHdlJ3ZlIHJlYWNoZWQgdGhlIGNvbG9yIHByb3BzLCBhcHBlbmQgdG8gY29sb3Igc3RyaW5nXG4gICAgICBpZiAoaGFzUmVhY2hlZENvbG9yIHx8IF9jb2xvcjIuZGVmYXVsdC50ZXN0KGJpdCkpIHtcbiAgICAgICAgaGFzUmVhY2hlZENvbG9yID0gdHJ1ZTtcbiAgICAgICAgY29sb3JQcm9wICs9IGJpdDtcblxuICAgICAgICAvLyBFbHNlIHByb2Nlc3Mgc2hhZG93IHZhbHVlXG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHNwbGl0VmFsdWVbX2RpY3Rpb25hcnkuc2hhZG93W2ldXSA9IGJpdDtcbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgdmFyIHNwbGl0Q29sb3JQcm9wcyA9IF9jb2xvcjIuZGVmYXVsdC5zcGxpdChjb2xvclByb3ApO1xuXG4gICAgcmV0dXJuIF9leHRlbmRzKHt9LCBzcGxpdFZhbHVlLCB7IHNwbGl0Q29sb3JQcm9wczogc3BsaXRDb2xvclByb3BzIH0pO1xuICB9LFxuXG4gIGNvbWJpbmU6IGZ1bmN0aW9uICh2YWx1ZXMpIHtcbiAgICByZXR1cm4gKDAsIF91dGlscy5jcmVhdGVEZWxpbWl0ZWQpKHZhbHVlcywgc2hhZG93V2l0aG91dENvbG9yVGVybXMsICcgJykgKyBfY29sb3IyLmRlZmF1bHQuY29tYmluZSh2YWx1ZXMpO1xuICB9XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluTnlZeTkyWVd4MVpTMTBlWEJsY3k5emFHRmtiM2N1YW5NaVhTd2libUZ0WlhNaU9sdGRMQ0p0WVhCd2FXNW5jeUk2SWpzN096czdPMEZCUVVFN096czdRVUZEUVRzN1FVRkRRVHM3UVVGRFFUczdPenRCUVVWQkxFbEJRVTBzTUVKQlFUQkNMRzFDUVVGWkxFdEJRVm9zUTBGQmEwSXNRMEZCYkVJc1JVRkJjVUlzUTBGQmNrSXNRMEZCTVVJN08ydENRVVZUTzBGQlEySXNOa0pCUTBzc1owSkJRVTBzV1VGQlRqdEJRVU5JTzBGQlEwRTdRVUZEUVR0QlFVTkJPMGxCVEVZN08wRkJVVUVzVTBGQlR5eFZRVUZETEV0QlFVUXNSVUZCVnp0QlFVTm9RaXhSUVVGTkxFOUJRVThzWjBOQlFXOUNMRXRCUVhCQ0xFTkJRVkFzUTBGRVZUdEJRVVZvUWl4UlFVRkpMR3RDUVVGclFpeExRVUZzUWl4RFFVWlpPMEZCUjJoQ0xGRkJRVWtzV1VGQldTeEZRVUZhTEVOQlNGazdRVUZKYUVJc1VVRkJTU3hoUVVGaExFVkJRV0lzUTBGS1dUczdRVUZOYUVJc1UwRkJTeXhQUVVGTUxFTkJRV0VzVlVGQlF5eEhRVUZFTEVWQlFVMHNRMEZCVGl4RlFVRlpPenRCUVVWMlFpeFZRVUZKTEcxQ1FVRnRRaXhuUWtGQlRTeEpRVUZPTEVOQlFWY3NSMEZCV0N4RFFVRnVRaXhGUVVGdlF6dEJRVU4wUXl3d1FrRkJhMElzU1VGQmJFSXNRMEZFYzBNN1FVRkZkRU1zY1VKQlFXRXNSMEZCWWpzN08wRkJSbk5ETEU5QlFYaERMRTFCUzA4N1FVRkRUQ3h4UWtGQlZ5eHRRa0ZCV1N4RFFVRmFMRU5CUVZnc1NVRkJOa0lzUjBGQk4wSXNRMEZFU3p0VFFVeFFPMHRCUmxjc1EwRkJZaXhEUVU1blFqczdRVUZyUW1oQ0xGRkJRVTBzYTBKQlFXdENMR2RDUVVGTkxFdEJRVTRzUTBGQldTeFRRVUZhTEVOQlFXeENMRU5CYkVKVk96dEJRVzlDYUVJc2QwSkJRVmtzWTBGQldTeHRRMEZCZUVJc1EwRndRbWRDTzBkQlFWZzdPMEZCZFVKUUxGZEJRVk1zVlVGQlF5eE5RVUZFTzFkQlFWa3NORUpCUVdkQ0xFMUJRV2hDTEVWQlFYZENMSFZDUVVGNFFpeEZRVUZwUkN4SFFVRnFSQ3hKUVVGM1JDeG5Ra0ZCVFN4UFFVRk9MRU5CUVdNc1RVRkJaQ3hEUVVGNFJEdEhRVUZhSWl3aVptbHNaU0k2SW5Ob1lXUnZkeTVxY3lJc0luTnZkWEpqWlZKdmIzUWlPaUl2VlhObGNuTXZUV0YwZEM5VGFYUmxjeTl3YjNCdGIzUnBiMjRpTENKemIzVnlZMlZ6UTI5dWRHVnVkQ0k2V3lKcGJYQnZjblFnWTI5c2IzSWdabkp2YlNBbkxpOWpiMnh2Y2ljN1hHNXBiWEJ2Y25RZ2V5QmtaV1poZFd4MFVISnZjSE1nWVhNZ2NIaEVaV1poZFd4MFVISnZjSE1nZlNCbWNtOXRJQ2N1TDNCNEp6dGNibWx0Y0c5eWRDQjdJSE5vWVdSdmR5QmhjeUJ6YUdGa2IzZFVaWEp0Y3lCOUlHWnliMjBnSnk0dmMyVjBkR2x1WjNNdlpHbGpkR2x2Ym1GeWVTYzdYRzVwYlhCdmNuUWdleUJ6Y0d4cGRGTndZV05sUkdWc2FXMXBkR1ZrTENCamNtVmhkR1ZFWld4cGJXbDBaV1FnZlNCbWNtOXRJQ2N1TGk5cGJtTXZkWFJwYkhNbk8xeHVYRzVqYjI1emRDQnphR0ZrYjNkWGFYUm9iM1YwUTI5c2IzSlVaWEp0Y3lBOUlITm9ZV1J2ZDFSbGNtMXpMbk5zYVdObEtEQXNJRFFwTzF4dVhHNWxlSEJ2Y25RZ1pHVm1ZWFZzZENCN1hHNGdJR1JsWm1GMWJIUlFjbTl3Y3pvZ2UxeHVJQ0FnSUM0dUxtTnZiRzl5TG1SbFptRjFiSFJRY205d2N5eGNiaUFnSUNCWU9pQndlRVJsWm1GMWJIUlFjbTl3Y3l4Y2JpQWdJQ0JaT2lCd2VFUmxabUYxYkhSUWNtOXdjeXhjYmlBZ0lDQlNZV1JwZFhNNklIQjRSR1ZtWVhWc2RGQnliM0J6TEZ4dUlDQWdJRk53Y21WaFpEb2djSGhFWldaaGRXeDBVSEp2Y0hOY2JpQWdmU3hjYmx4dUlDQnpjR3hwZERvZ0tIWmhiSFZsS1NBOVBpQjdYRzRnSUNBZ1kyOXVjM1FnWW1sMGN5QTlJSE53YkdsMFUzQmhZMlZFWld4cGJXbDBaV1FvZG1Gc2RXVXBPMXh1SUNBZ0lHeGxkQ0JvWVhOU1pXRmphR1ZrUTI5c2IzSWdQU0JtWVd4elpUdGNiaUFnSUNCc1pYUWdZMjlzYjNKUWNtOXdJRDBnSnljN1hHNGdJQ0FnYkdWMElITndiR2wwVm1Gc2RXVWdQU0I3ZlR0Y2JseHVJQ0FnSUdKcGRITXVabTl5UldGamFDZ29ZbWwwTENCcEtTQTlQaUI3WEc0Z0lDQWdJQ0F2THlCSlppQjNaU2QyWlNCeVpXRmphR1ZrSUhSb1pTQmpiMnh2Y2lCd2NtOXdjeXdnWVhCd1pXNWtJSFJ2SUdOdmJHOXlJSE4wY21sdVoxeHVJQ0FnSUNBZ2FXWWdLR2hoYzFKbFlXTm9aV1JEYjJ4dmNpQjhmQ0JqYjJ4dmNpNTBaWE4wS0dKcGRDa3BJSHRjYmlBZ0lDQWdJQ0FnYUdGelVtVmhZMmhsWkVOdmJHOXlJRDBnZEhKMVpUdGNiaUFnSUNBZ0lDQWdZMjlzYjNKUWNtOXdJQ3M5SUdKcGREdGNibHh1SUNBZ0lDQWdMeThnUld4elpTQndjbTlqWlhOeklITm9ZV1J2ZHlCMllXeDFaVnh1SUNBZ0lDQWdmU0JsYkhObElIdGNiaUFnSUNBZ0lDQWdjM0JzYVhSV1lXeDFaVnR6YUdGa2IzZFVaWEp0YzF0cFhWMGdQU0JpYVhRN1hHNGdJQ0FnSUNCOVhHNGdJQ0FnZlNrN1hHNWNiaUFnSUNCamIyNXpkQ0J6Y0d4cGRFTnZiRzl5VUhKdmNITWdQU0JqYjJ4dmNpNXpjR3hwZENoamIyeHZjbEJ5YjNBcE8xeHVYRzRnSUNBZ2NtVjBkWEp1SUhzZ0xpNHVjM0JzYVhSV1lXeDFaU3dnYzNCc2FYUkRiMnh2Y2xCeWIzQnpJSDA3WEc0Z0lIMHNYRzVjYmlBZ1kyOXRZbWx1WlRvZ0tIWmhiSFZsY3lrZ1BUNGdZM0psWVhSbFJHVnNhVzFwZEdWa0tIWmhiSFZsY3l3Z2MyaGhaRzkzVjJsMGFHOTFkRU52Ykc5eVZHVnliWE1zSUNjZ0p5a2dLeUJqYjJ4dmNpNWpiMjFpYVc1bEtIWmhiSFZsY3lsY2JuMDdYRzRpWFgwPVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvdmFsdWUtdHlwZXMvc2hhZG93LmpzXG4gKiogbW9kdWxlIGlkID0gMzFcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF91dGlscyA9IHJlcXVpcmUoJy4uL2luYy91dGlscycpO1xuXG5leHBvcnRzLmRlZmF1bHQgPSB7XG4gIHRlc3Q6IGZ1bmN0aW9uICh1bnBhcnNlZCkge1xuICAgIHZhciBfZmluZFZhbHVlQW5kVW5pdCA9ICgwLCBfdXRpbHMuZmluZFZhbHVlQW5kVW5pdCkodW5wYXJzZWQpO1xuXG4gICAgdmFyIHZhbHVlID0gX2ZpbmRWYWx1ZUFuZFVuaXQudmFsdWU7XG5cbiAgICByZXR1cm4gKDAsIF91dGlscy5pc051bSkodmFsdWUpICYmICFpc05hTih2YWx1ZSkgPyB0cnVlIDogZmFsc2U7XG4gIH0sXG5cbiAgcGFyc2U6IGZ1bmN0aW9uICh1bnBhcnNlZCwgcGFyZW50KSB7XG4gICAgdmFyIF9maW5kVmFsdWVBbmRVbml0MiA9ICgwLCBfdXRpbHMuZmluZFZhbHVlQW5kVW5pdCkodW5wYXJzZWQpO1xuXG4gICAgdmFyIHZhbHVlID0gX2ZpbmRWYWx1ZUFuZFVuaXQyLnZhbHVlO1xuICAgIHZhciB1bml0ID0gX2ZpbmRWYWx1ZUFuZFVuaXQyLnVuaXQ7XG5cblxuICAgIGlmICh1bml0ICYmIHVuaXQgIT09IHVuaXQpIHtcbiAgICAgIHBhcmVudC51bml0ID0gdW5pdDtcbiAgICB9XG5cbiAgICByZXR1cm4gdmFsdWU7XG4gIH0sXG5cbiAgc2VyaWFsaXplOiBmdW5jdGlvbiAocGFyc2VkLCBwYXJlbnQpIHtcbiAgICByZXR1cm4gcGFyc2VkICsgKHBhcmVudC51bml0IHx8ICcnKTtcbiAgfVxufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbk55WXk5MllXeDFaUzEwZVhCbGN5OTFibWwwTG1weklsMHNJbTVoYldWeklqcGJYU3dpYldGd2NHbHVaM01pT2lJN096czdRVUZCUVRzN2EwSkJSV1U3UVVGRFlpeFJRVUZOTEZWQlFWVXNVVUZCVml4RlFVRnZRanMwUWtGRFRpdzJRa0ZCYVVJc1VVRkJha0lzUlVGRVRUczdVVUZEYUVJc1owTkJSR2RDT3p0QlFVVjRRaXhYUVVGUExHbENRVUZETEVOQlFVMHNTMEZCVGl4TFFVRm5RaXhEUVVGRExFMUJRVTBzUzBGQlRpeERRVUZFTEVkQlFXbENMRWxCUVd4RExFZEJRWGxETEV0QlFYcERMRU5CUm1sQ08wZEJRWEJDT3p0QlFVdE9MRk5CUVU4c1ZVRkJWU3hSUVVGV0xFVkJRVzlDTEUxQlFYQkNMRVZCUVRSQ096WkNRVU5VTERaQ1FVRnBRaXhSUVVGcVFpeEZRVVJUT3p0UlFVTjZRaXhwUTBGRWVVSTdVVUZEYkVJc0swSkJSR3RDT3pzN1FVRkhha01zVVVGQlNTeFJRVUZSTEZOQlFWTXNTVUZCVkN4RlFVRmxPMEZCUTNwQ0xHRkJRVThzU1VGQlVDeEhRVUZqTEVsQlFXUXNRMEZFZVVJN1MwRkJNMEk3TzBGQlNVRXNWMEZCVHl4TFFVRlFMRU5CVUdsRE8wZEJRVFZDT3p0QlFWVlFMR0ZCUVZjc1ZVRkJReXhOUVVGRUxFVkJRVk1zVFVGQlZEdFhRVUZ2UWl4VlFVRlZMRTlCUVU4c1NVRkJVQ3hKUVVGbExFVkJRV1lzUTBGQlZqdEhRVUZ3UWlJc0ltWnBiR1VpT2lKMWJtbDBMbXB6SWl3aWMyOTFjbU5sVW05dmRDSTZJaTlWYzJWeWN5OU5ZWFIwTDFOcGRHVnpMM0J2Y0cxdmRHbHZiaUlzSW5OdmRYSmpaWE5EYjI1MFpXNTBJanBiSW1sdGNHOXlkQ0I3SUdselRuVnRMQ0JtYVc1a1ZtRnNkV1ZCYm1SVmJtbDBJSDBnWm5KdmJTQW5MaTR2YVc1akwzVjBhV3h6Snp0Y2JseHVaWGh3YjNKMElHUmxabUYxYkhRZ2UxeHVJQ0IwWlhOME9pQm1kVzVqZEdsdmJpQW9kVzV3WVhKelpXUXBJSHRjYmlBZ0lDQmpiMjV6ZENCN0lIWmhiSFZsSUgwZ1BTQm1hVzVrVm1Gc2RXVkJibVJWYm1sMEtIVnVjR0Z5YzJWa0tUdGNiaUFnSUNCeVpYUjFjbTRnS0dselRuVnRLSFpoYkhWbEtTQW1KaUFoYVhOT1lVNG9kbUZzZFdVcEtTQS9JSFJ5ZFdVZ09pQm1ZV3h6WlR0Y2JpQWdmU3hjYmx4dUlDQndZWEp6WlRvZ1puVnVZM1JwYjI0Z0tIVnVjR0Z5YzJWa0xDQndZWEpsYm5RcElIdGNiaUFnSUNCamIyNXpkQ0I3SUhaaGJIVmxMQ0IxYm1sMElIMGdQU0JtYVc1a1ZtRnNkV1ZCYm1SVmJtbDBLSFZ1Y0dGeWMyVmtLVHRjYmx4dUlDQWdJR2xtSUNoMWJtbDBJQ1ltSUhWdWFYUWdJVDA5SUhWdWFYUXBJSHRjYmlBZ0lDQWdJSEJoY21WdWRDNTFibWwwSUQwZ2RXNXBkRHRjYmlBZ0lDQjlYRzVjYmlBZ0lDQnlaWFIxY200Z2RtRnNkV1U3WEc0Z0lIMHNYRzVjYmlBZ2MyVnlhV0ZzYVhwbE9pQW9jR0Z5YzJWa0xDQndZWEpsYm5RcElEMCtJSEJoY25ObFpDQXJJQ2h3WVhKbGJuUXVkVzVwZENCOGZDQW5KeWxjYm4wN1hHNGlYWDA9XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy92YWx1ZS10eXBlcy91bml0LmpzXG4gKiogbW9kdWxlIGlkID0gMzJcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHMuY2hhaW4gPSBleHBvcnRzLmNpcmN1bGFyTW90aW9uID0gZXhwb3J0cy5jcmVhdGVNYXBwZXIgPSB1bmRlZmluZWQ7XG5cbnZhciBfY2FsYyA9IHJlcXVpcmUoJy4uL2luYy9jYWxjJyk7XG5cbnZhciBjcmVhdGVNYXBwZXIgPSBleHBvcnRzLmNyZWF0ZU1hcHBlciA9IGZ1bmN0aW9uIChpbnB1dCwgb3V0cHV0KSB7XG4gIHZhciBtYXBMZW5ndGggPSBpbnB1dC5sZW5ndGg7XG4gIHZhciBmaW5hbEluZGV4ID0gbWFwTGVuZ3RoIC0gMTtcblxuICByZXR1cm4gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgLy8gSWYgdmFsdWUgb3V0c2lkZSBtaW5pbXVtIGlucHV0IHJhbmdlLCBxdWlja2x5IHJldHVyblxuICAgIGlmICh2YWx1ZSA8PSBpbnB1dFswXSkge1xuICAgICAgcmV0dXJuIG91dHB1dFswXTtcbiAgICB9XG5cbiAgICAvLyBJZiB2YWx1ZSBvdXRzaWRlIG1heGltdW0gaW5wdXQgcmFuZ2UsIHF1aWNrbHkgcmV0dXJuXG4gICAgaWYgKHZhbHVlID49IGlucHV0W2ZpbmFsSW5kZXhdKSB7XG4gICAgICByZXR1cm4gb3V0cHV0W2ZpbmFsSW5kZXhdO1xuICAgIH1cblxuICAgIC8vIElmIHdpdGhpbiBvdmVyYWxsIGlucHV0IHJhbmdlLCBmaW5kIHNwZWNpZmljIHJhbmdlXG4gICAgZm9yICh2YXIgaSA9IDE7IGkgPCBtYXBMZW5ndGg7IGkrKykge1xuICAgICAgaWYgKHZhbHVlIDwgaW5wdXRbaV0gfHwgaSA9PT0gZmluYWxJbmRleCkge1xuICAgICAgICB2YXIgcHJvZ3Jlc3NJblJhbmdlID0gKDAsIF9jYWxjLmdldFByb2dyZXNzRnJvbVZhbHVlKSh2YWx1ZSwgaW5wdXRbaSAtIDFdLCBpbnB1dFtpXSk7XG4gICAgICAgIHJldHVybiAoMCwgX2NhbGMuZ2V0VmFsdWVGcm9tUHJvZ3Jlc3MpKHByb2dyZXNzSW5SYW5nZSwgb3V0cHV0W2kgLSAxXSwgb3V0cHV0W2ldKTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG59O1xuXG52YXIgY2lyY3VsYXJNb3Rpb24gPSBleHBvcnRzLmNpcmN1bGFyTW90aW9uID0gZnVuY3Rpb24gKHYsIGtleSwgX3JlZikge1xuICB2YXIgdmFsdWVzID0gX3JlZi52YWx1ZXM7XG5cbiAgdmFyIG9yaWdpblggPSB2YWx1ZXMub3JpZ2luWCA/IHZhbHVlcy5vcmlnaW5YLmN1cnJlbnQgOiAwO1xuICB2YXIgb3JpZ2luWSA9IHZhbHVlcy5vcmlnaW5ZID8gdmFsdWVzLm9yaWdpblkuY3VycmVudCA6IDA7XG5cbiAgcmV0dXJuICgwLCBfY2FsYy5wb2ludEZyb21BbmdsZUFuZERpc3RhbmNlKSh7XG4gICAgeDogb3JpZ2luWCxcbiAgICB5OiBvcmlnaW5ZXG4gIH0sIHZhbHVlcy5hbmdsZS5jdXJyZW50LCB2YWx1ZXMuZGlzdGFuY2UuY3VycmVudClba2V5XTtcbn07XG5cbi8qXG4gIENvbWJpbmUgdHJhbnNmb3JtZXJzIGludG8gb25lIGZ1bmN0aW9uIHRoYXQgY2FsbHMgZXZlcnlcbiAgdHJhbnNmb3JtZXIgaW4gdGhlIGFycmF5IGFuZCByZXR1cm5zIHRoZSByZXN1bHRcblxuICBAcGFyYW0gW2FycmF5XVxuICBAcmV0dXJuIFtmdW5jdGlvbl1cbiovXG52YXIgY2hhaW4gPSBleHBvcnRzLmNoYWluID0gZnVuY3Rpb24gKHRyYW5zZm9ybWVycykge1xuICB2YXIgbnVtVHJhbnNmb3JtZXJzID0gdHJhbnNmb3JtZXJzLmxlbmd0aDtcbiAgdmFyIGkgPSAwO1xuXG4gIC8qXG4gICAgQHBhcmFtIFtudW1iZXJdXG4gICAgQHBhcmFtIFtzdHJpbmddXG4gICAgQHBhcmFtIFtBY3Rpb25dXG4gICAgQHJldHVybiBbbnVtYmVyXVxuICAqL1xuICByZXR1cm4gZnVuY3Rpb24gKHYsIGtleSwgYSkge1xuICAgIGZvciAoaSA9IDA7IGkgPCBudW1UcmFuc2Zvcm1lcnM7IGkrKykge1xuICAgICAgdiA9IHRyYW5zZm9ybWVyc1tpXSh2LCBrZXksIGEpO1xuICAgIH1cblxuICAgIHJldHVybiB2O1xuICB9O1xufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbk55WXk5cGJtTXZkSEpoYm5ObWIzSnRaWEp6TG1weklsMHNJbTVoYldWeklqcGJYU3dpYldGd2NHbHVaM01pT2lJN096czdPMEZCUVVFN08wRkJSVThzU1VGQlRTeHpRMEZCWlN4VlFVRkRMRXRCUVVRc1JVRkJVU3hOUVVGU0xFVkJRVzFDTzBGQlF6ZERMRTFCUVUwc1dVRkJXU3hOUVVGTkxFMUJRVTRzUTBGRU1rSTdRVUZGTjBNc1RVRkJUU3hoUVVGaExGbEJRVmtzUTBGQldpeERRVVl3UWpzN1FVRkpOME1zVTBGQlR5eFZRVUZETEV0QlFVUXNSVUZCVnpzN1FVRkZhRUlzVVVGQlNTeFRRVUZUTEUxQlFVMHNRMEZCVGl4RFFVRlVMRVZCUVcxQ08wRkJRM0pDTEdGQlFVOHNUMEZCVHl4RFFVRlFMRU5CUVZBc1EwRkVjVUk3UzBGQmRrSTdPenRCUVVablFpeFJRVTlhTEZOQlFWTXNUVUZCVFN4VlFVRk9MRU5CUVZRc1JVRkJORUk3UVVGRE9VSXNZVUZCVHl4UFFVRlBMRlZCUVZBc1EwRkJVQ3hEUVVRNFFqdExRVUZvUXpzN08wRkJVR2RDTEZOQldWZ3NTVUZCU1N4SlFVRkpMRU5CUVVvc1JVRkJUeXhKUVVGSkxGTkJRVW9zUlVGQlpTeEhRVUV2UWl4RlFVRnZRenRCUVVOc1F5eFZRVUZKTEZGQlFWRXNUVUZCVFN4RFFVRk9MRU5CUVZJc1NVRkJiMElzVFVGQlRTeFZRVUZPTEVWQlFXdENPMEZCUTNoRExGbEJRVTBzYTBKQlFXdENMR2REUVVGeFFpeExRVUZ5UWl4RlFVRTBRaXhOUVVGTkxFbEJRVWtzUTBGQlNpeERRVUZzUXl4RlFVRXdReXhOUVVGTkxFTkJRVTRzUTBGQk1VTXNRMEZCYkVJc1EwRkVhME03UVVGRmVFTXNaVUZCVHl4blEwRkJjVUlzWlVGQmNrSXNSVUZCYzBNc1QwRkJUeXhKUVVGSkxFTkJRVW9zUTBGQk4wTXNSVUZCY1VRc1QwRkJUeXhEUVVGUUxFTkJRWEpFTEVOQlFWQXNRMEZHZDBNN1QwRkJNVU03UzBGRVJqdEhRVnBMTEVOQlNuTkRPME5CUVc1Q096dEJRWGxDY2tJc1NVRkJUU3d3UTBGQmFVSXNWVUZCUXl4RFFVRkVMRVZCUVVrc1IwRkJTaXhSUVVGM1FqdE5RVUZpTEhGQ1FVRmhPenRCUVVOd1JDeE5RVUZOTEZWQlFWVXNUVUZCUXl4RFFVRlBMRTlCUVZBc1IwRkJhMElzVDBGQlR5eFBRVUZRTEVOQlFXVXNUMEZCWml4SFFVRjVRaXhEUVVFMVF5eERRVVJ2UXp0QlFVVndSQ3hOUVVGTkxGVkJRVlVzVFVGQlF5eERRVUZQTEU5QlFWQXNSMEZCYTBJc1QwRkJUeXhQUVVGUUxFTkJRV1VzVDBGQlppeEhRVUY1UWl4RFFVRTFReXhEUVVadlF6czdRVUZKY0VRc1UwRkJUeXh4UTBGQk1FSTdRVUZETDBJc1QwRkJSeXhQUVVGSU8wRkJRMEVzVDBGQlJ5eFBRVUZJTzBkQlJrc3NSVUZIU2l4UFFVRlBMRXRCUVZBc1EwRkJZU3hQUVVGaUxFVkJRWE5DTEU5QlFVOHNVVUZCVUN4RFFVRm5RaXhQUVVGb1FpeERRVWhzUWl4RFFVY3lReXhIUVVnelF5eERRVUZRTEVOQlNtOUVPME5CUVhoQ096czdPenM3T3pzN1FVRnBRblpDTEVsQlFVMHNkMEpCUVZFc1ZVRkJReXhaUVVGRUxFVkJRV3RDTzBGQlEzSkRMRTFCUVUwc2EwSkJRV3RDTEdGQlFXRXNUVUZCWWl4RFFVUmhPMEZCUlhKRExFMUJRVWtzU1VGQlNTeERRVUZLT3pzN096czdPenRCUVVacFF5eFRRVlU1UWl4VlFVRkRMRU5CUVVRc1JVRkJTU3hIUVVGS0xFVkJRVk1zUTBGQlZDeEZRVUZsTzBGQlEzQkNMRk5CUVVzc1NVRkJTU3hEUVVGS0xFVkJRVThzU1VGQlNTeGxRVUZLTEVWQlFYRkNMRWRCUVdwRExFVkJRWE5ETzBGQlEzQkRMRlZCUVVrc1lVRkJZU3hEUVVGaUxFVkJRV2RDTEVOQlFXaENMRVZCUVcxQ0xFZEJRVzVDTEVWQlFYZENMRU5CUVhoQ0xFTkJRVW9zUTBGRWIwTTdTMEZCZEVNN08wRkJTVUVzVjBGQlR5eERRVUZRTEVOQlRHOUNPMGRCUVdZc1EwRldPRUk3UTBGQmJFSWlMQ0ptYVd4bElqb2lkSEpoYm5ObWIzSnRaWEp6TG1weklpd2ljMjkxY21ObFVtOXZkQ0k2SWk5VmMyVnljeTlOWVhSMEwxTnBkR1Z6TDNCdmNHMXZkR2x2YmlJc0luTnZkWEpqWlhORGIyNTBaVzUwSWpwYkltbHRjRzl5ZENCN0lHZGxkRkJ5YjJkeVpYTnpSbkp2YlZaaGJIVmxMQ0JuWlhSV1lXeDFaVVp5YjIxUWNtOW5jbVZ6Y3l3Z2NHOXBiblJHY205dFFXNW5iR1ZCYm1SRWFYTjBZVzVqWlNCOUlHWnliMjBnSnk0dUwybHVZeTlqWVd4akp6dGNibHh1Wlhod2IzSjBJR052Ym5OMElHTnlaV0YwWlUxaGNIQmxjaUE5SUNocGJuQjFkQ3dnYjNWMGNIVjBLU0E5UGlCN1hHNGdJR052Ym5OMElHMWhjRXhsYm1kMGFDQTlJR2x1Y0hWMExteGxibWQwYUR0Y2JpQWdZMjl1YzNRZ1ptbHVZV3hKYm1SbGVDQTlJRzFoY0V4bGJtZDBhQ0F0SURFN1hHNWNiaUFnY21WMGRYSnVJQ2gyWVd4MVpTa2dQVDRnZTF4dUlDQWdJQzh2SUVsbUlIWmhiSFZsSUc5MWRITnBaR1VnYldsdWFXMTFiU0JwYm5CMWRDQnlZVzVuWlN3Z2NYVnBZMnRzZVNCeVpYUjFjbTVjYmlBZ0lDQnBaaUFvZG1Gc2RXVWdQRDBnYVc1d2RYUmJNRjBwSUh0Y2JpQWdJQ0FnSUhKbGRIVnliaUJ2ZFhSd2RYUmJNRjA3WEc0Z0lDQWdmVnh1WEc0Z0lDQWdMeThnU1dZZ2RtRnNkV1VnYjNWMGMybGtaU0J0WVhocGJYVnRJR2x1Y0hWMElISmhibWRsTENCeGRXbGphMng1SUhKbGRIVnlibHh1SUNBZ0lHbG1JQ2gyWVd4MVpTQStQU0JwYm5CMWRGdG1hVzVoYkVsdVpHVjRYU2tnZTF4dUlDQWdJQ0FnY21WMGRYSnVJRzkxZEhCMWRGdG1hVzVoYkVsdVpHVjRYVHRjYmlBZ0lDQjlYRzVjYmlBZ0lDQXZMeUJKWmlCM2FYUm9hVzRnYjNabGNtRnNiQ0JwYm5CMWRDQnlZVzVuWlN3Z1ptbHVaQ0J6Y0dWamFXWnBZeUJ5WVc1blpWeHVJQ0FnSUdadmNpQW9iR1YwSUdrZ1BTQXhPeUJwSUR3Z2JXRndUR1Z1WjNSb095QnBLeXNwSUh0Y2JpQWdJQ0FnSUdsbUlDaDJZV3gxWlNBOElHbHVjSFYwVzJsZElIeDhJR2tnUFQwOUlHWnBibUZzU1c1a1pYZ3BJSHRjYmlBZ0lDQWdJQ0FnWTI5dWMzUWdjSEp2WjNKbGMzTkpibEpoYm1kbElEMGdaMlYwVUhKdlozSmxjM05HY205dFZtRnNkV1VvZG1Gc2RXVXNJR2x1Y0hWMFcya2dMU0F4WFN3Z2FXNXdkWFJiYVYwcE8xeHVJQ0FnSUNBZ0lDQnlaWFIxY200Z1oyVjBWbUZzZFdWR2NtOXRVSEp2WjNKbGMzTW9jSEp2WjNKbGMzTkpibEpoYm1kbExDQnZkWFJ3ZFhSYmFTQXRJREZkTENCdmRYUndkWFJiYVYwcE8xeHVJQ0FnSUNBZ2ZWeHVJQ0FnSUgxY2JpQWdmVHRjYm4wN1hHNWNibVY0Y0c5eWRDQmpiMjV6ZENCamFYSmpkV3hoY2sxdmRHbHZiaUE5SUNoMkxDQnJaWGtzSUhzZ2RtRnNkV1Z6SUgwcElEMCtJSHRjYmlBZ1kyOXVjM1FnYjNKcFoybHVXQ0E5SUNoMllXeDFaWE11YjNKcFoybHVXQ2tnUHlCMllXeDFaWE11YjNKcFoybHVXQzVqZFhKeVpXNTBJRG9nTUR0Y2JpQWdZMjl1YzNRZ2IzSnBaMmx1V1NBOUlDaDJZV3gxWlhNdWIzSnBaMmx1V1NrZ1B5QjJZV3gxWlhNdWIzSnBaMmx1V1M1amRYSnlaVzUwSURvZ01EdGNibHh1SUNCeVpYUjFjbTRnY0c5cGJuUkdjbTl0UVc1bmJHVkJibVJFYVhOMFlXNWpaU2g3WEc0Z0lDQWdlRG9nYjNKcFoybHVXQ3hjYmlBZ0lDQjVPaUJ2Y21sbmFXNVpJRnh1SUNCOUxDQjJZV3gxWlhNdVlXNW5iR1V1WTNWeWNtVnVkQ3dnZG1Gc2RXVnpMbVJwYzNSaGJtTmxMbU4xY25KbGJuUXBXMnRsZVYwN1hHNTlPMXh1WEc0dktseHVJQ0JEYjIxaWFXNWxJSFJ5WVc1elptOXliV1Z5Y3lCcGJuUnZJRzl1WlNCbWRXNWpkR2x2YmlCMGFHRjBJR05oYkd4eklHVjJaWEo1WEc0Z0lIUnlZVzV6Wm05eWJXVnlJR2x1SUhSb1pTQmhjbkpoZVNCaGJtUWdjbVYwZFhKdWN5QjBhR1VnY21WemRXeDBYRzVjYmlBZ1FIQmhjbUZ0SUZ0aGNuSmhlVjFjYmlBZ1FISmxkSFZ5YmlCYlpuVnVZM1JwYjI1ZFhHNHFMMXh1Wlhod2IzSjBJR052Ym5OMElHTm9ZV2x1SUQwZ0tIUnlZVzV6Wm05eWJXVnljeWtnUFQ0Z2UxeHVJQ0JqYjI1emRDQnVkVzFVY21GdWMyWnZjbTFsY25NZ1BTQjBjbUZ1YzJadmNtMWxjbk11YkdWdVozUm9PMXh1SUNCc1pYUWdhU0E5SURBN1hHNWNiaUFnTHlwY2JpQWdJQ0JBY0dGeVlXMGdXMjUxYldKbGNsMWNiaUFnSUNCQWNHRnlZVzBnVzNOMGNtbHVaMTFjYmlBZ0lDQkFjR0Z5WVcwZ1cwRmpkR2x2YmwxY2JpQWdJQ0JBY21WMGRYSnVJRnR1ZFcxaVpYSmRYRzRnSUNvdlhHNGdJSEpsZEhWeWJpQW9kaXdnYTJWNUxDQmhLU0E5UGlCN1hHNGdJQ0FnWm05eUlDaHBJRDBnTURzZ2FTQThJRzUxYlZSeVlXNXpabTl5YldWeWN6c2dhU3NyS1NCN1hHNGdJQ0FnSUNCMklEMGdkSEpoYm5ObWIzSnRaWEp6VzJsZEtIWXNJR3RsZVN3Z1lTazdYRzRnSUNBZ2ZWeHVYRzRnSUNBZ2NtVjBkWEp1SUhZN1hHNGdJSDA3WEc1OU95SmRmUT09XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9pbmMvdHJhbnNmb3JtZXJzLmpzXG4gKiogbW9kdWxlIGlkID0gMzNcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF9jb2xvciA9IHJlcXVpcmUoJy4uL3ZhbHVlLXR5cGVzL2NvbG9yJyk7XG5cbnZhciBfY29sb3IyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY29sb3IpO1xuXG52YXIgX2NvbXBsZXggPSByZXF1aXJlKCcuLi92YWx1ZS10eXBlcy9jb21wbGV4Jyk7XG5cbnZhciBfY29tcGxleDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jb21wbGV4KTtcblxudmFyIF91bml0ID0gcmVxdWlyZSgnLi4vdmFsdWUtdHlwZXMvdW5pdCcpO1xuXG52YXIgX3VuaXQyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfdW5pdCk7XG5cbnZhciBfdXRpbHMgPSByZXF1aXJlKCcuLi9pbmMvdXRpbHMnKTtcblxudmFyIF9udW1lcmljYWxWYWx1ZXMgPSByZXF1aXJlKCcuLi9pbmMvbnVtZXJpY2FsLXZhbHVlcycpO1xuXG52YXIgX251bWVyaWNhbFZhbHVlczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9udW1lcmljYWxWYWx1ZXMpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG52YXIgTlVNX05VTUVSSUNBTF9WQUxVRVMgPSBfbnVtZXJpY2FsVmFsdWVzMi5kZWZhdWx0Lmxlbmd0aDtcblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgTlVNX05VTUVSSUNBTF9WQUxVRVM7IGkrKykge1xuICAgIHZhciB2YWx1ZVByb3AgPSB2YWx1ZVtfbnVtZXJpY2FsVmFsdWVzMi5kZWZhdWx0W2ldXTtcbiAgICBpZiAoKDAsIF91dGlscy5pc1N0cmluZykodmFsdWVQcm9wKSkge1xuICAgICAgaWYgKF9jb2xvcjIuZGVmYXVsdC50ZXN0KHZhbHVlUHJvcCkpIHtcbiAgICAgICAgcmV0dXJuIF9jb2xvcjIuZGVmYXVsdDtcbiAgICAgIH0gZWxzZSBpZiAoX2NvbXBsZXgyLmRlZmF1bHQudGVzdCh2YWx1ZVByb3ApKSB7XG4gICAgICAgIHJldHVybiBfY29tcGxleDIuZGVmYXVsdDtcbiAgICAgIH0gZWxzZSBpZiAoX3VuaXQyLmRlZmF1bHQudGVzdCh2YWx1ZVByb3ApKSB7XG4gICAgICAgIHJldHVybiBfdW5pdDIuZGVmYXVsdDtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5OeVl5OTJZV3gxWlMxMGVYQmxjeTlrWlhSbFkzUXVhbk1pWFN3aWJtRnRaWE1pT2x0ZExDSnRZWEJ3YVc1bmN5STZJanM3T3p0QlFVRkJPenM3TzBGQlEwRTdPenM3UVVGRFFUczdPenRCUVVOQk96dEJRVU5CT3pzN096czdRVUZGUVN4SlFVRk5MSFZDUVVGMVFpd3dRa0ZCYVVJc1RVRkJha0k3TzJ0Q1FVVmtMRlZCUVVNc1MwRkJSQ3hGUVVGWE8wRkJRM2hDTEU5QlFVc3NTVUZCU1N4SlFVRkpMRU5CUVVvc1JVRkJUeXhKUVVGSkxHOUNRVUZLTEVWQlFUQkNMRWRCUVRGRExFVkJRU3RETzBGQlF6ZERMRkZCUVUwc1dVRkJXU3hOUVVGTkxEQkNRVUZwUWl4RFFVRnFRaXhEUVVGT0xFTkJRVm9zUTBGRWRVTTdRVUZGTjBNc1VVRkJTU3h4UWtGQlV5eFRRVUZVTEVOQlFVb3NSVUZCZVVJN1FVRkRka0lzVlVGQlNTeG5Ra0ZCVlN4SlFVRldMRU5CUVdVc1UwRkJaaXhEUVVGS0xFVkJRU3RDTzBGQlF6ZENMQ3RDUVVRMlFqdFBRVUV2UWl4TlFVVlBMRWxCUVVrc2EwSkJRVmtzU1VGQldpeERRVUZwUWl4VFFVRnFRaXhEUVVGS0xFVkJRV2xETzBGQlEzUkRMR2xEUVVSelF6dFBRVUZxUXl4TlFVVkJMRWxCUVVrc1pVRkJVeXhKUVVGVUxFTkJRV01zVTBGQlpDeERRVUZLTEVWQlFUaENPMEZCUTI1RExEaENRVVJ0UXp0UFFVRTVRanRMUVV4VU8wZEJSa1k3UTBGRVlTSXNJbVpwYkdVaU9pSmtaWFJsWTNRdWFuTWlMQ0p6YjNWeVkyVlNiMjkwSWpvaUwxVnpaWEp6TDAxaGRIUXZVMmwwWlhNdmNHOXdiVzkwYVc5dUlpd2ljMjkxY21ObGMwTnZiblJsYm5RaU9sc2lhVzF3YjNKMElHTnZiRzl5Vkhsd1pTQm1jbTl0SUNjdUxpOTJZV3gxWlMxMGVYQmxjeTlqYjJ4dmNpYzdYRzVwYlhCdmNuUWdZMjl0Y0d4bGVGUjVjR1VnWm5KdmJTQW5MaTR2ZG1Gc2RXVXRkSGx3WlhNdlkyOXRjR3hsZUNjN1hHNXBiWEJ2Y25RZ2RXNXBkRlI1Y0dVZ1puSnZiU0FuTGk0dmRtRnNkV1V0ZEhsd1pYTXZkVzVwZENjN1hHNXBiWEJ2Y25RZ2V5QnBjMU4wY21sdVp5QjlJR1p5YjIwZ0p5NHVMMmx1WXk5MWRHbHNjeWM3WEc1cGJYQnZjblFnVGxWTlJWSkpRMEZNWDFaQlRGVkZVeUJtY205dElDY3VMaTlwYm1NdmJuVnRaWEpwWTJGc0xYWmhiSFZsY3ljN1hHNWNibU52Ym5OMElFNVZUVjlPVlUxRlVrbERRVXhmVmtGTVZVVlRJRDBnVGxWTlJWSkpRMEZNWDFaQlRGVkZVeTVzWlc1bmRHZzdYRzVjYm1WNGNHOXlkQ0JrWldaaGRXeDBJQ2gyWVd4MVpTa2dQVDRnZTF4dUlDQm1iM0lnS0d4bGRDQnBJRDBnTURzZ2FTQThJRTVWVFY5T1ZVMUZVa2xEUVV4ZlZrRk1WVVZUT3lCcEt5c3BJSHRjYmlBZ0lDQmpiMjV6ZENCMllXeDFaVkJ5YjNBZ1BTQjJZV3gxWlZ0T1ZVMUZVa2xEUVV4ZlZrRk1WVVZUVzJsZFhUdGNiaUFnSUNCcFppQW9hWE5UZEhKcGJtY29kbUZzZFdWUWNtOXdLU2tnZTF4dUlDQWdJQ0FnYVdZZ0tHTnZiRzl5Vkhsd1pTNTBaWE4wS0haaGJIVmxVSEp2Y0NrcElIdGNiaUFnSUNBZ0lDQWdjbVYwZFhKdUlHTnZiRzl5Vkhsd1pUdGNiaUFnSUNBZ0lIMGdaV3h6WlNCcFppQW9ZMjl0Y0d4bGVGUjVjR1V1ZEdWemRDaDJZV3gxWlZCeWIzQXBLU0I3WEc0Z0lDQWdJQ0FnSUhKbGRIVnliaUJqYjIxd2JHVjRWSGx3WlR0Y2JpQWdJQ0FnSUgwZ1pXeHpaU0JwWmlBb2RXNXBkRlI1Y0dVdWRHVnpkQ2gyWVd4MVpWQnliM0FwS1NCN1hHNGdJQ0FnSUNBZ0lISmxkSFZ5YmlCMWJtbDBWSGx3WlR0Y2JpQWdJQ0FnSUgxY2JpQWdJQ0I5WEc0Z0lIMWNibjA3SWwxOVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvdmFsdWUtdHlwZXMvZGV0ZWN0LmpzXG4gKiogbW9kdWxlIGlkID0gMzRcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHMuZGVmYXVsdCA9IFsnY3VycmVudCcsICdmcm9tJywgJ3RvJywgJ3ZlbG9jaXR5J107XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5OeVl5OXBibU12Ym5WdFpYSnBZMkZzTFhaaGJIVmxjeTVxY3lKZExDSnVZVzFsY3lJNlcxMHNJbTFoY0hCcGJtZHpJam9pT3pzN2EwSkJRV1VzUTBGQlF5eFRRVUZFTEVWQlFWa3NUVUZCV2l4RlFVRnZRaXhKUVVGd1FpeEZRVUV3UWl4VlFVRXhRaUlzSW1acGJHVWlPaUp1ZFcxbGNtbGpZV3d0ZG1Gc2RXVnpMbXB6SWl3aWMyOTFjbU5sVW05dmRDSTZJaTlWYzJWeWN5OU5ZWFIwTDFOcGRHVnpMM0J2Y0cxdmRHbHZiaUlzSW5OdmRYSmpaWE5EYjI1MFpXNTBJanBiSW1WNGNHOXlkQ0JrWldaaGRXeDBJRnNuWTNWeWNtVnVkQ2NzSUNkbWNtOXRKeXdnSjNSdkp5d2dKM1psYkc5amFYUjVKMTA3SWwxOVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvaW5jL251bWVyaWNhbC12YWx1ZXMuanNcbiAqKiBtb2R1bGUgaWQgPSAzNVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX29iamVjdEFkYXB0ZXIgPSByZXF1aXJlKCcuLi9hZGFwdGVyL29iamVjdC1hZGFwdGVyJyk7XG5cbnZhciBfb2JqZWN0QWRhcHRlcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9vYmplY3RBZGFwdGVyKTtcblxudmFyIF9jc3NBZGFwdGVyID0gcmVxdWlyZSgnLi4vYWRhcHRlci9jc3MtYWRhcHRlcicpO1xuXG52YXIgX2Nzc0FkYXB0ZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY3NzQWRhcHRlcik7XG5cbnZhciBfc3ZnQWRhcHRlciA9IHJlcXVpcmUoJy4uL2FkYXB0ZXIvc3ZnLWFkYXB0ZXInKTtcblxudmFyIF9zdmdBZGFwdGVyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3N2Z0FkYXB0ZXIpO1xuXG52YXIgX3N2Z1BhdGhBZGFwdGVyID0gcmVxdWlyZSgnLi4vYWRhcHRlci9zdmctcGF0aC1hZGFwdGVyJyk7XG5cbnZhciBfc3ZnUGF0aEFkYXB0ZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfc3ZnUGF0aEFkYXB0ZXIpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbiAoZWxlbWVudCkge1xuICB2YXIgZGV0ZWN0ZWRBZGFwdGVyID0gX29iamVjdEFkYXB0ZXIyLmRlZmF1bHQ7XG5cbiAgLy8gSWYgSFRNTEVsZW1lbnQgbG9hZCBDU1NcbiAgaWYgKGVsZW1lbnQgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCB8fCBlbGVtZW50LnRhZ05hbWUgPT09ICdzdmcnKSB7XG4gICAgZGV0ZWN0ZWRBZGFwdGVyID0gX2Nzc0FkYXB0ZXIyLmRlZmF1bHQ7XG5cbiAgICAvLyBPciBTVkdcbiAgfSBlbHNlIGlmIChlbGVtZW50IGluc3RhbmNlb2YgU1ZHRWxlbWVudCkge1xuICAgICAgaWYgKGVsZW1lbnQudGFnTmFtZSA9PT0gJ3BhdGgnKSB7XG4gICAgICAgIGRldGVjdGVkQWRhcHRlciA9IF9zdmdQYXRoQWRhcHRlcjIuZGVmYXVsdDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGRldGVjdGVkQWRhcHRlciA9IF9zdmdBZGFwdGVyMi5kZWZhdWx0O1xuICAgICAgfVxuICAgIH1cblxuICByZXR1cm4gZGV0ZWN0ZWRBZGFwdGVyO1xufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbk55WXk5cGJtTXZaR1YwWldOMExXRmtZWEIwWlhJdWFuTWlYU3dpYm1GdFpYTWlPbHRkTENKdFlYQndhVzVuY3lJNklqczdPenRCUVVGQk96czdPMEZCUTBFN096czdRVUZEUVRzN096dEJRVU5CT3pzN096czdhMEpCUldVc1ZVRkJReXhQUVVGRUxFVkJRV0U3UVVGRE1VSXNUVUZCU1N4NVEwRkJTanM3TzBGQlJEQkNMRTFCU1hSQ0xHMUNRVUZ0UWl4WFFVRnVRaXhKUVVGclF5eFJRVUZSTEU5QlFWSXNTMEZCYjBJc1MwRkJjRUlzUlVGQk1rSTdRVUZETDBRN096dEJRVVFyUkN4SFFVRnFSU3hOUVVsUExFbEJRVWtzYlVKQlFXMUNMRlZCUVc1Q0xFVkJRU3RDTzBGQlEzaERMRlZCUVVrc1VVRkJVU3hQUVVGU0xFdEJRVzlDTEUxQlFYQkNMRVZCUVRSQ08wRkJRemxDTEcxRVFVUTRRanRQUVVGb1F5eE5RVVZQTzBGQlEwd3NLME5CUkVzN1QwRkdVRHRMUVVSTE96dEJRVkZRTEZOQlFVOHNaVUZCVUN4RFFXaENNRUk3UTBGQllpSXNJbVpwYkdVaU9pSmtaWFJsWTNRdFlXUmhjSFJsY2k1cWN5SXNJbk52ZFhKalpWSnZiM1FpT2lJdlZYTmxjbk12VFdGMGRDOVRhWFJsY3k5d2IzQnRiM1JwYjI0aUxDSnpiM1Z5WTJWelEyOXVkR1Z1ZENJNld5SnBiWEJ2Y25RZ2IySnFaV04wUVdSaGNIUmxjaUJtY205dElDY3VMaTloWkdGd2RHVnlMMjlpYW1WamRDMWhaR0Z3ZEdWeUp6dGNibWx0Y0c5eWRDQmpjM05CWkdGd2RHVnlJR1p5YjIwZ0p5NHVMMkZrWVhCMFpYSXZZM056TFdGa1lYQjBaWEluTzF4dWFXMXdiM0owSUhOMlowRmtZWEIwWlhJZ1puSnZiU0FuTGk0dllXUmhjSFJsY2k5emRtY3RZV1JoY0hSbGNpYzdYRzVwYlhCdmNuUWdjM1puVUdGMGFFRmtZWEIwWlhJZ1puSnZiU0FuTGk0dllXUmhjSFJsY2k5emRtY3RjR0YwYUMxaFpHRndkR1Z5Snp0Y2JseHVaWGh3YjNKMElHUmxabUYxYkhRZ0tHVnNaVzFsYm5RcElEMCtJSHRjYmlBZ2JHVjBJR1JsZEdWamRHVmtRV1JoY0hSbGNpQTlJRzlpYW1WamRFRmtZWEIwWlhJN1hHNWNiaUFnTHk4Z1NXWWdTRlJOVEVWc1pXMWxiblFnYkc5aFpDQkRVMU5jYmlBZ2FXWWdLR1ZzWlcxbGJuUWdhVzV6ZEdGdVkyVnZaaUJJVkUxTVJXeGxiV1Z1ZENCOGZDQmxiR1Z0Wlc1MExuUmhaMDVoYldVZ1BUMDlJQ2R6ZG1jbktTQjdYRzRnSUNBZ1pHVjBaV04wWldSQlpHRndkR1Z5SUQwZ1kzTnpRV1JoY0hSbGNqdGNibHh1SUNBdkx5QlBjaUJUVmtkY2JpQWdmU0JsYkhObElHbG1JQ2hsYkdWdFpXNTBJR2x1YzNSaGJtTmxiMllnVTFaSFJXeGxiV1Z1ZENrZ2UxeHVJQ0FnSUdsbUlDaGxiR1Z0Wlc1MExuUmhaMDVoYldVZ1BUMDlJQ2R3WVhSb0p5a2dlMXh1SUNBZ0lDQWdaR1YwWldOMFpXUkJaR0Z3ZEdWeUlEMGdjM1puVUdGMGFFRmtZWEIwWlhJN1hHNGdJQ0FnZlNCbGJITmxJSHRjYmlBZ0lDQWdJR1JsZEdWamRHVmtRV1JoY0hSbGNpQTlJSE4yWjBGa1lYQjBaWEk3WEc0Z0lDQWdmVnh1SUNCOVhHNWNiaUFnY21WMGRYSnVJR1JsZEdWamRHVmtRV1JoY0hSbGNqdGNibjA3WEc0aVhYMD1cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2luYy9kZXRlY3QtYWRhcHRlci5qc1xuICoqIG1vZHVsZSBpZCA9IDM2XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfY2FsYyA9IHJlcXVpcmUoJy4uLy4uL2luYy9jYWxjJyk7XG5cbnZhciBCTEVORF9BQ0NVUkFDWSA9IDYwO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbiAob3V0QWN0aW9uLCBpbkFjdGlvbiwgZmxvd1ZhbHVlLCBrZXkpIHtcbiAgdmFyIG91dFZhbHVlID0gb3V0QWN0aW9uLnZhbHVlc1trZXldO1xuXG4gIGlmIChvdXRBY3Rpb24uZWxhcHNlZCA9PT0gdW5kZWZpbmVkIHx8ICFvdXRWYWx1ZSkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIHZhciBpblZhbHVlID0gaW5BY3Rpb24udmFsdWVzW2tleV07XG4gIHZhciBvdXRUb3RhbER1cmF0aW9uID0gb3V0VmFsdWUuZGVsYXkgKyBvdXRWYWx1ZS5kdXJhdGlvbjtcbiAgdmFyIHRpbWVVbnRpbE91dEVuZCA9IE1hdGgubWluKG91dFRvdGFsRHVyYXRpb24gLSBvdXRBY3Rpb24uZWxhcHNlZCwgaW5WYWx1ZS5kZWxheSArIGluVmFsdWUuZHVyYXRpb24pO1xuICB2YXIgaW5Qb3NpdGlvbkF0T3V0RW5kID0gKDAsIF9jYWxjLmVhc2UpKCgwLCBfY2FsYy5yZXN0cmljdCkoKDAsIF9jYWxjLmdldFByb2dyZXNzRnJvbVZhbHVlKSh0aW1lVW50aWxPdXRFbmQsIDAsIGluVmFsdWUuZGVsYXkgKyBpblZhbHVlLmR1cmF0aW9uKSwgMCwgMSksIGluVmFsdWUuZnJvbSwgaW5WYWx1ZS50bywgaW5WYWx1ZS5lYXNlKTtcbiAgdmFyIGluQmlnZ2VyVGhhbk91dEF0U3RhcnQgPSBpblZhbHVlLmZyb20gPiBvdXRWYWx1ZS5jdXJyZW50O1xuICB2YXIgaW5CaWdnZXJUaGFuT3V0QXRFbmQgPSBpblBvc2l0aW9uQXRPdXRFbmQgPiBvdXRWYWx1ZS50bztcbiAgdmFyIHR3ZWVuc0ludGVyc2VjdCA9IGluQmlnZ2VyVGhhbk91dEF0U3RhcnQgIT09IGluQmlnZ2VyVGhhbk91dEF0RW5kO1xuXG4gIHZhciBibGVuZEN1cnZlID0gW1swLCBvdXRWYWx1ZS5jdXJyZW50XSwgW3RpbWVVbnRpbE91dEVuZCwgaW5Qb3NpdGlvbkF0T3V0RW5kXV07XG5cbiAgLy8gSWYgdHdlZW5zIGludGVyc2VjdCwgcmVzb2x2ZSB0d2VlbnMgYXQgYSByZXNvbHV0aW9uIHRvIGZpbmQgZXhhY3RseSB3aGVyZVxuICBpZiAodHdlZW5zSW50ZXJzZWN0KSB7XG4gICAgdmFyIHRpbWVTdGVwVG9UZXN0ID0gdGltZVVudGlsT3V0RW5kIC8gQkxFTkRfQUNDVVJBQ1k7XG4gICAgdmFyIGZvdW5kUDEgPSBmYWxzZTtcbiAgICB2YXIgZm91bmRQMiA9IGZhbHNlO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPD0gQkxFTkRfQUNDVVJBQ1k7IGkrKykge1xuICAgICAgdmFyIHRpbWVTdGVwID0gaSAqIHRpbWVTdGVwVG9UZXN0O1xuICAgICAgdmFyIG91dEF0VGltZSA9ICgwLCBfY2FsYy5lYXNlKSgoMCwgX2NhbGMuZ2V0UHJvZ3Jlc3NGcm9tVmFsdWUpKG91dEFjdGlvbi5lbGFwc2VkICsgdGltZVN0ZXAsIG91dFZhbHVlLmRlbGF5LCBvdXRWYWx1ZS5kdXJhdGlvbiksIG91dFZhbHVlLmZyb20sIG91dFZhbHVlLnRvLCBvdXRWYWx1ZS5lYXNlKTtcbiAgICAgIHZhciBpbkF0VGltZSA9ICgwLCBfY2FsYy5lYXNlKSgoMCwgX2NhbGMuZ2V0UHJvZ3Jlc3NGcm9tVmFsdWUpKGluQWN0aW9uLmVsYXBzZWQgKyB0aW1lU3RlcCwgaW5WYWx1ZS5kZWxheSwgaW5WYWx1ZS5kdXJhdGlvbiksIGluVmFsdWUuZnJvbSwgaW5WYWx1ZS50bywgaW5WYWx1ZS5lYXNlKTtcblxuICAgICAgaWYgKCFmb3VuZFAxICYmIChpbkJpZ2dlclRoYW5PdXRBdFN0YXJ0ICYmIGluQXRUaW1lIDwgb3V0QXRUaW1lIHx8ICFpbkJpZ2dlclRoYW5PdXRBdFN0YXJ0ICYmIGluQXRUaW1lID4gb3V0QXRUaW1lKSkge1xuICAgICAgICBibGVuZEN1cnZlLnNwbGljZSgxLCAwLCBbdGltZVN0ZXAsIGluQXRUaW1lXSk7XG4gICAgICAgIGZvdW5kUDEgPSB0cnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAoZm91bmRQMSAmJiAoaW5CaWdnZXJUaGFuT3V0QXRTdGFydCAmJiBpbkF0VGltZSA8IG91dFZhbHVlLmN1cnJlbnQgfHwgIWluQmlnZ2VyVGhhbk91dEF0U3RhcnQgJiYgaW5BdFRpbWUgPiBvdXRWYWx1ZS5jdXJyZW50KSkge1xuICAgICAgICBibGVuZEN1cnZlWzJdID0gW3RpbWVTdGVwLCBpbkF0VGltZV07XG4gICAgICAgIGZvdW5kUDIgPSB0cnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAoZm91bmRQMikge1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBpZiAoYmxlbmRDdXJ2ZS5sZW5ndGggPT09IDIpIHtcbiAgICAvLyBQYXNzIGJldHdlZW4gdHdlZW5zIHVzaW5nIGluY29taW5nIGVhc2luZyBpZiBqdXN0IHR3byBwb2ludHNcbiAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIGJsZW5kUHJvZ3Jlc3MgPSAoMCwgX2NhbGMucmVzdHJpY3QpKCgwLCBfY2FsYy5nZXRQcm9ncmVzc0Zyb21WYWx1ZSkoaW5BY3Rpb24uZWxhcHNlZCwgYmxlbmRDdXJ2ZVswXVswXSwgYmxlbmRDdXJ2ZVsxXVswXSksIDAsIDEpO1xuXG4gICAgICBpZiAoYmxlbmRQcm9ncmVzcyA9PT0gMSkge1xuICAgICAgICBmbG93VmFsdWUuYmxlbmRDdXJ2ZSA9IHVuZGVmaW5lZDtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuICgwLCBfY2FsYy5lYXNlKShibGVuZFByb2dyZXNzLCBvdXRWYWx1ZS5jdXJyZW50LCBpblZhbHVlLmN1cnJlbnQsIGluVmFsdWUuZWFzZSk7XG4gICAgfTtcbiAgfSBlbHNlIHtcbiAgICAvLyBQYXNzIGJldHdlZW4gdHdlZW5zIHVzaW5nIGJlemllciBpbnRlcnBvbGF0aW9uXG4gICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciBibGVuZFByb2dyZXNzID0gKDAsIF9jYWxjLnJlc3RyaWN0KSgoMCwgX2NhbGMuZ2V0UHJvZ3Jlc3NGcm9tVmFsdWUpKGluQWN0aW9uLmVsYXBzZWQsIGJsZW5kQ3VydmVbMF1bMF0sIGJsZW5kQ3VydmVbMl1bMF0pLCAwLCAxKTtcbiAgICAgIHZhciBhUCA9ICgwLCBfY2FsYy5nZXRWYWx1ZUZyb21Qcm9ncmVzcykoYmxlbmRQcm9ncmVzcywgYmxlbmRDdXJ2ZVswXVsxXSwgYmxlbmRDdXJ2ZVsxXVsxXSk7XG4gICAgICB2YXIgYlAgPSAoMCwgX2NhbGMuZ2V0VmFsdWVGcm9tUHJvZ3Jlc3MpKGJsZW5kUHJvZ3Jlc3MsIGJsZW5kQ3VydmVbMV1bMV0sIGJsZW5kQ3VydmVbMl1bMV0pO1xuXG4gICAgICBpZiAoYmxlbmRQcm9ncmVzcyA9PT0gMSkge1xuICAgICAgICBmbG93VmFsdWUuYmxlbmRDdXJ2ZSA9IHVuZGVmaW5lZDtcbiAgICAgICAgcmV0dXJuIGluVmFsdWUuY3VycmVudDtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuICgwLCBfY2FsYy5nZXRWYWx1ZUZyb21Qcm9ncmVzcykoYmxlbmRQcm9ncmVzcywgYVAsIGJQKTtcbiAgICB9O1xuICB9XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluTnlZeTloWTNScGIyNXpMMlpzYjNjdloyVnVaWEpoZEdVdFlteGxibVF0WTNWeWRtVXVhbk1pWFN3aWJtRnRaWE1pT2x0ZExDSnRZWEJ3YVc1bmN5STZJanM3T3p0QlFVRkJPenRCUVVWQkxFbEJRVTBzYVVKQlFXbENMRVZCUVdwQ096dHJRa0ZGVXl4VlFVRkRMRk5CUVVRc1JVRkJXU3hSUVVGYUxFVkJRWE5DTEZOQlFYUkNMRVZCUVdsRExFZEJRV3BETEVWQlFYbERPMEZCUTNSRUxFMUJRVTBzVjBGQlZ5eFZRVUZWTEUxQlFWWXNRMEZCYVVJc1IwRkJha0lzUTBGQldDeERRVVJuUkRzN1FVRkhkRVFzVFVGQlNTeFZRVUZWTEU5QlFWWXNTMEZCYzBJc1UwRkJkRUlzU1VGQmJVTXNRMEZCUXl4UlFVRkVMRVZCUVZjN1FVRkRhRVFzVjBGRVowUTdSMEZCYkVRN08wRkJTVUVzVFVGQlRTeFZRVUZWTEZOQlFWTXNUVUZCVkN4RFFVRm5RaXhIUVVGb1FpeERRVUZXTEVOQlVHZEVPMEZCVVhSRUxFMUJRVTBzYlVKQlFXMUNMRk5CUVZNc1MwRkJWQ3hIUVVGcFFpeFRRVUZUTEZGQlFWUXNRMEZTV1R0QlFWTjBSQ3hOUVVGTkxHdENRVUZyUWl4TFFVRkxMRWRCUVV3c1EwRkJVeXh0UWtGQmJVSXNWVUZCVlN4UFFVRldMRVZCUVcxQ0xGRkJRVkVzUzBGQlVpeEhRVUZuUWl4UlFVRlJMRkZCUVZJc1EwRkJha1lzUTBGVVowUTdRVUZWZEVRc1RVRkJUU3h4UWtGQmNVSXNaMEpCUVVzc2IwSkJRVk1zWjBOQlFYRkNMR1ZCUVhKQ0xFVkJRWE5ETEVOQlFYUkRMRVZCUVhsRExGRkJRVkVzUzBGQlVpeEhRVUZuUWl4UlFVRlJMRkZCUVZJc1EwRkJiRVVzUlVGQmNVWXNRMEZCY2tZc1JVRkJkMFlzUTBGQmVFWXNRMEZCVEN4RlFVRnBSeXhSUVVGUkxFbEJRVklzUlVGQll5eFJRVUZSTEVWQlFWSXNSVUZCV1N4UlFVRlJMRWxCUVZJc1EwRkJhRW9zUTBGV1owUTdRVUZYZEVRc1RVRkJUU3g1UWtGQmVVSXNVVUZCVVN4SlFVRlNMRWRCUVdVc1UwRkJVeXhQUVVGVUxFTkJXRkU3UVVGWmRFUXNUVUZCVFN4MVFrRkJkVUlzY1VKQlFYRkNMRk5CUVZNc1JVRkJWQ3hEUVZwSk8wRkJZWFJFTEUxQlFVMHNhMEpCUVd0Q0xESkNRVUV5UWl4dlFrRkJNMElzUTBGaU9FSTdPMEZCWlhSRUxFMUJRVTBzWVVGQllTeERRVUZETEVOQlFVTXNRMEZCUkN4RlFVRkpMRk5CUVZNc1QwRkJWQ3hEUVVGTUxFVkJRWGRDTEVOQlFVTXNaVUZCUkN4RlFVRnJRaXhyUWtGQmJFSXNRMEZCZUVJc1EwRkJZanM3TzBGQlptZEVMRTFCYTBKc1JDeGxRVUZLTEVWQlFYRkNPMEZCUTI1Q0xGRkJRVTBzYVVKQlFXbENMR3RDUVVGclFpeGpRVUZzUWl4RFFVUktPMEZCUlc1Q0xGRkJRVWtzVlVGQlZTeExRVUZXTEVOQlJtVTdRVUZIYmtJc1VVRkJTU3hWUVVGVkxFdEJRVllzUTBGSVpUczdRVUZMYmtJc1UwRkJTeXhKUVVGSkxFbEJRVWtzUTBGQlNpeEZRVUZQTEV0QlFVc3NZMEZCVEN4RlFVRnhRaXhIUVVGeVF5eEZRVUV3UXp0QlFVTjRReXhWUVVGTkxGZEJRVmNzU1VGQlNTeGpRVUZLTEVOQlJIVkNPMEZCUlhoRExGVkJRVTBzV1VGQldTeG5Ra0ZCU3l4blEwRkJjVUlzVlVGQlZTeFBRVUZXTEVkQlFXOUNMRkZCUVhCQ0xFVkJRVGhDTEZOQlFWTXNTMEZCVkN4RlFVRm5RaXhUUVVGVExGRkJRVlFzUTBGQmVFVXNSVUZCTkVZc1UwRkJVeXhKUVVGVUxFVkJRV1VzVTBGQlV5eEZRVUZVTEVWQlFXRXNVMEZCVXl4SlFVRlVMRU5CUVhCSkxFTkJSbXRETzBGQlIzaERMRlZCUVUwc1YwRkJWeXhuUWtGQlN5eG5RMEZCY1VJc1UwRkJVeXhQUVVGVUxFZEJRVzFDTEZGQlFXNUNMRVZCUVRaQ0xGRkJRVkVzUzBGQlVpeEZRVUZsTEZGQlFWRXNVVUZCVWl4RFFVRjBSU3hGUVVGNVJpeFJRVUZSTEVsQlFWSXNSVUZCWXl4UlFVRlJMRVZCUVZJc1JVRkJXU3hSUVVGUkxFbEJRVklzUTBGQk9VZ3NRMEZJYTBNN08wRkJTM2hETEZWQlFVa3NRMEZCUXl4UFFVRkVMRXRCUVdFc2MwSkJRVU1zU1VGQk1FSXNWMEZCVnl4VFFVRllMRWxCUVRCQ0xFTkJRVU1zYzBKQlFVUXNTVUZCTWtJc1YwRkJWeXhUUVVGWUxFTkJRVGRHTEVWQlFYRklPMEZCUTNaSUxHMUNRVUZYTEUxQlFWZ3NRMEZCYTBJc1EwRkJiRUlzUlVGQmNVSXNRMEZCY2tJc1JVRkJkMElzUTBGQlF5eFJRVUZFTEVWQlFWY3NVVUZCV0N4RFFVRjRRaXhGUVVSMVNEdEJRVVYyU0N4clFrRkJWU3hKUVVGV0xFTkJSblZJTzA5QlFYcElPenRCUVV0QkxGVkJRVWtzV1VGQldTeHpRa0ZCUXl4SlFVRXdRaXhYUVVGWExGTkJRVk1zVDBGQlZDeEpRVUZ6UWl4RFFVRkRMSE5DUVVGRUxFbEJRVEpDTEZkQlFWY3NVMEZCVXl4UFFVRlVMRU5CUVRsSExFVkJRV3RKTzBGQlEzQkpMRzFDUVVGWExFTkJRVmdzU1VGQlowSXNRMEZCUXl4UlFVRkVMRVZCUVZjc1VVRkJXQ3hEUVVGb1FpeERRVVJ2U1R0QlFVVndTU3hyUWtGQlZTeEpRVUZXTEVOQlJtOUpPMDlCUVhSSk96dEJRVXRCTEZWQlFVa3NUMEZCU2l4RlFVRmhPMEZCUTFnc1kwRkVWenRQUVVGaU8wdEJaa1k3UjBGTVJqczdRVUV3UWtFc1RVRkJTU3hYUVVGWExFMUJRVmdzUzBGQmMwSXNRMEZCZEVJc1JVRkJlVUk3TzBGQlJUTkNMRmRCUVU4c1dVRkJUVHRCUVVOWUxGVkJRVTBzWjBKQlFXZENMRzlDUVVGVExHZERRVUZ4UWl4VFFVRlRMRTlCUVZRc1JVRkJhMElzVjBGQlZ5eERRVUZZTEVWQlFXTXNRMEZCWkN4RFFVRjJReXhGUVVGNVJDeFhRVUZYTEVOQlFWZ3NSVUZCWXl4RFFVRmtMRU5CUVhwRUxFTkJRVlFzUlVGQmNVWXNRMEZCY2tZc1JVRkJkMFlzUTBGQmVFWXNRMEZCYUVJc1EwRkVTenM3UVVGSFdDeFZRVUZKTEd0Q1FVRnJRaXhEUVVGc1FpeEZRVUZ4UWp0QlFVTjJRaXhyUWtGQlZTeFZRVUZXTEVkQlFYVkNMRk5CUVhaQ0xFTkJSSFZDTzA5QlFYcENPenRCUVVsQkxHRkJRVThzWjBKQlFVc3NZVUZCVEN4RlFVRnZRaXhUUVVGVExFOUJRVlFzUlVGQmEwSXNVVUZCVVN4UFFVRlNMRVZCUVdsQ0xGRkJRVkVzU1VGQlVpeERRVUU1UkN4RFFWQlhPMHRCUVU0c1EwRkdiMEk3UjBGQk4wSXNUVUZYVHpzN1FVRkZUQ3hYUVVGUExGbEJRVTA3UVVGRFdDeFZRVUZOTEdkQ1FVRm5RaXh2UWtGQlV5eG5RMEZCY1VJc1UwRkJVeXhQUVVGVUxFVkJRV3RDTEZkQlFWY3NRMEZCV0N4RlFVRmpMRU5CUVdRc1EwRkJka01zUlVGQmVVUXNWMEZCVnl4RFFVRllMRVZCUVdNc1EwRkJaQ3hEUVVGNlJDeERRVUZVTEVWQlFYRkdMRU5CUVhKR0xFVkJRWGRHTEVOQlFYaEdMRU5CUVdoQ0xFTkJSRXM3UVVGRldDeFZRVUZOTEV0QlFVc3NaME5CUVhGQ0xHRkJRWEpDTEVWQlFXOURMRmRCUVZjc1EwRkJXQ3hGUVVGakxFTkJRV1FzUTBGQmNFTXNSVUZCYzBRc1YwRkJWeXhEUVVGWUxFVkJRV01zUTBGQlpDeERRVUYwUkN4RFFVRk1MRU5CUmtzN1FVRkhXQ3hWUVVGTkxFdEJRVXNzWjBOQlFYRkNMR0ZCUVhKQ0xFVkJRVzlETEZkQlFWY3NRMEZCV0N4RlFVRmpMRU5CUVdRc1EwRkJjRU1zUlVGQmMwUXNWMEZCVnl4RFFVRllMRVZCUVdNc1EwRkJaQ3hEUVVGMFJDeERRVUZNTEVOQlNFczdPMEZCUzFnc1ZVRkJTU3hyUWtGQmEwSXNRMEZCYkVJc1JVRkJjVUk3UVVGRGRrSXNhMEpCUVZVc1ZVRkJWaXhIUVVGMVFpeFRRVUYyUWl4RFFVUjFRanRCUVVWMlFpeGxRVUZQTEZGQlFWRXNUMEZCVWl4RFFVWm5RanRQUVVGNlFqczdRVUZMUVN4aFFVRlBMR2REUVVGeFFpeGhRVUZ5UWl4RlFVRnZReXhGUVVGd1F5eEZRVUYzUXl4RlFVRjRReXhEUVVGUUxFTkJWbGM3UzBGQlRpeERRVVpHTzBkQldGQTdRMEUxUTJFaUxDSm1hV3hsSWpvaVoyVnVaWEpoZEdVdFlteGxibVF0WTNWeWRtVXVhbk1pTENKemIzVnlZMlZTYjI5MElqb2lMMVZ6WlhKekwwMWhkSFF2VTJsMFpYTXZjRzl3Ylc5MGFXOXVJaXdpYzI5MWNtTmxjME52Ym5SbGJuUWlPbHNpYVcxd2IzSjBJSHNnWjJWMFVISnZaM0psYzNOR2NtOXRWbUZzZFdVc0lHZGxkRlpoYkhWbFJuSnZiVkJ5YjJkeVpYTnpMQ0JsWVhObExDQnlaWE4wY21samRDQjlJR1p5YjIwZ0p5NHVMeTR1TDJsdVl5OWpZV3hqSnp0Y2JseHVZMjl1YzNRZ1FreEZUa1JmUVVORFZWSkJRMWtnUFNBMk1EdGNibHh1Wlhod2IzSjBJR1JsWm1GMWJIUWdLRzkxZEVGamRHbHZiaXdnYVc1QlkzUnBiMjRzSUdac2IzZFdZV3gxWlN3Z2EyVjVLU0E5UGlCN1hHNGdJR052Ym5OMElHOTFkRlpoYkhWbElEMGdiM1YwUVdOMGFXOXVMblpoYkhWbGMxdHJaWGxkTzF4dVhHNGdJR2xtSUNodmRYUkJZM1JwYjI0dVpXeGhjSE5sWkNBOVBUMGdkVzVrWldacGJtVmtJSHg4SUNGdmRYUldZV3gxWlNrZ2UxeHVJQ0FnSUhKbGRIVnlianRjYmlBZ2ZWeHVYRzRnSUdOdmJuTjBJR2x1Vm1Gc2RXVWdQU0JwYmtGamRHbHZiaTUyWVd4MVpYTmJhMlY1WFR0Y2JpQWdZMjl1YzNRZ2IzVjBWRzkwWVd4RWRYSmhkR2x2YmlBOUlHOTFkRlpoYkhWbExtUmxiR0Y1SUNzZ2IzVjBWbUZzZFdVdVpIVnlZWFJwYjI0N1hHNGdJR052Ym5OMElIUnBiV1ZWYm5ScGJFOTFkRVZ1WkNBOUlFMWhkR2d1YldsdUtHOTFkRlJ2ZEdGc1JIVnlZWFJwYjI0Z0xTQnZkWFJCWTNScGIyNHVaV3hoY0hObFpDd2dhVzVXWVd4MVpTNWtaV3hoZVNBcklHbHVWbUZzZFdVdVpIVnlZWFJwYjI0cE8xeHVJQ0JqYjI1emRDQnBibEJ2YzJsMGFXOXVRWFJQZFhSRmJtUWdQU0JsWVhObEtISmxjM1J5YVdOMEtHZGxkRkJ5YjJkeVpYTnpSbkp2YlZaaGJIVmxLSFJwYldWVmJuUnBiRTkxZEVWdVpDd2dNQ3dnYVc1V1lXeDFaUzVrWld4aGVTQXJJR2x1Vm1Gc2RXVXVaSFZ5WVhScGIyNHBMQ0F3TENBeEtTd2dhVzVXWVd4MVpTNW1jbTl0TENCcGJsWmhiSFZsTG5SdkxDQnBibFpoYkhWbExtVmhjMlVwTzF4dUlDQmpiMjV6ZENCcGJrSnBaMmRsY2xSb1lXNVBkWFJCZEZOMFlYSjBJRDBnYVc1V1lXeDFaUzVtY205dElENGdiM1YwVm1Gc2RXVXVZM1Z5Y21WdWREdGNiaUFnWTI5dWMzUWdhVzVDYVdkblpYSlVhR0Z1VDNWMFFYUkZibVFnUFNCcGJsQnZjMmwwYVc5dVFYUlBkWFJGYm1RZ1BpQnZkWFJXWVd4MVpTNTBienRjYmlBZ1kyOXVjM1FnZEhkbFpXNXpTVzUwWlhKelpXTjBJRDBnYVc1Q2FXZG5aWEpVYUdGdVQzVjBRWFJUZEdGeWRDQWhQVDBnYVc1Q2FXZG5aWEpVYUdGdVQzVjBRWFJGYm1RN1hHNWNiaUFnWTI5dWMzUWdZbXhsYm1SRGRYSjJaU0E5SUZ0Yk1Dd2diM1YwVm1Gc2RXVXVZM1Z5Y21WdWRGMHNJRnQwYVcxbFZXNTBhV3hQZFhSRmJtUXNJR2x1VUc5emFYUnBiMjVCZEU5MWRFVnVaRjFkTzF4dVhHNGdJQzh2SUVsbUlIUjNaV1Z1Y3lCcGJuUmxjbk5sWTNRc0lISmxjMjlzZG1VZ2RIZGxaVzV6SUdGMElHRWdjbVZ6YjJ4MWRHbHZiaUIwYnlCbWFXNWtJR1Y0WVdOMGJIa2dkMmhsY21WY2JpQWdhV1lnS0hSM1pXVnVjMGx1ZEdWeWMyVmpkQ2tnZTF4dUlDQWdJR052Ym5OMElIUnBiV1ZUZEdWd1ZHOVVaWE4wSUQwZ2RHbHRaVlZ1ZEdsc1QzVjBSVzVrSUM4Z1FreEZUa1JmUVVORFZWSkJRMWs3WEc0Z0lDQWdiR1YwSUdadmRXNWtVREVnUFNCbVlXeHpaVHRjYmlBZ0lDQnNaWFFnWm05MWJtUlFNaUE5SUdaaGJITmxPMXh1WEc0Z0lDQWdabTl5SUNoc1pYUWdhU0E5SURBN0lHa2dQRDBnUWt4RlRrUmZRVU5EVlZKQlExazdJR2tyS3lrZ2UxeHVJQ0FnSUNBZ1kyOXVjM1FnZEdsdFpWTjBaWEFnUFNCcElDb2dkR2x0WlZOMFpYQlViMVJsYzNRN1hHNGdJQ0FnSUNCamIyNXpkQ0J2ZFhSQmRGUnBiV1VnUFNCbFlYTmxLR2RsZEZCeWIyZHlaWE56Um5KdmJWWmhiSFZsS0c5MWRFRmpkR2x2Ymk1bGJHRndjMlZrSUNzZ2RHbHRaVk4wWlhBc0lHOTFkRlpoYkhWbExtUmxiR0Y1TENCdmRYUldZV3gxWlM1a2RYSmhkR2x2Ymlrc0lHOTFkRlpoYkhWbExtWnliMjBzSUc5MWRGWmhiSFZsTG5SdkxDQnZkWFJXWVd4MVpTNWxZWE5sS1R0Y2JpQWdJQ0FnSUdOdmJuTjBJR2x1UVhSVWFXMWxJRDBnWldGelpTaG5aWFJRY205bmNtVnpjMFp5YjIxV1lXeDFaU2hwYmtGamRHbHZiaTVsYkdGd2MyVmtJQ3NnZEdsdFpWTjBaWEFzSUdsdVZtRnNkV1V1WkdWc1lYa3NJR2x1Vm1Gc2RXVXVaSFZ5WVhScGIyNHBMQ0JwYmxaaGJIVmxMbVp5YjIwc0lHbHVWbUZzZFdVdWRHOHNJR2x1Vm1Gc2RXVXVaV0Z6WlNrN1hHNWNiaUFnSUNBZ0lHbG1JQ2doWm05MWJtUlFNU0FtSmlBb0tHbHVRbWxuWjJWeVZHaGhiazkxZEVGMFUzUmhjblFnSmlZZ2FXNUJkRlJwYldVZ1BDQnZkWFJCZEZScGJXVXBJSHg4SUNnaGFXNUNhV2RuWlhKVWFHRnVUM1YwUVhSVGRHRnlkQ0FtSmlCcGJrRjBWR2x0WlNBK0lHOTFkRUYwVkdsdFpTa3BLU0I3WEc0Z0lDQWdJQ0FnSUdKc1pXNWtRM1Z5ZG1VdWMzQnNhV05sS0RFc0lEQXNJRnQwYVcxbFUzUmxjQ3dnYVc1QmRGUnBiV1ZkS1R0Y2JpQWdJQ0FnSUNBZ1ptOTFibVJRTVNBOUlIUnlkV1U3WEc0Z0lDQWdJQ0I5WEc1Y2JpQWdJQ0FnSUdsbUlDaG1iM1Z1WkZBeElDWW1JQ2dvYVc1Q2FXZG5aWEpVYUdGdVQzVjBRWFJUZEdGeWRDQW1KaUJwYmtGMFZHbHRaU0E4SUc5MWRGWmhiSFZsTG1OMWNuSmxiblFwSUh4OElDZ2hhVzVDYVdkblpYSlVhR0Z1VDNWMFFYUlRkR0Z5ZENBbUppQnBia0YwVkdsdFpTQStJRzkxZEZaaGJIVmxMbU4xY25KbGJuUXBLU2tnZTF4dUlDQWdJQ0FnSUNCaWJHVnVaRU4xY25abFd6SmRJRDBnVzNScGJXVlRkR1Z3TENCcGJrRjBWR2x0WlYwN1hHNGdJQ0FnSUNBZ0lHWnZkVzVrVURJZ1BTQjBjblZsTzF4dUlDQWdJQ0FnZlZ4dVhHNGdJQ0FnSUNCcFppQW9abTkxYm1SUU1pa2dlMXh1SUNBZ0lDQWdJQ0JpY21WaGF6dGNiaUFnSUNBZ0lIMWNiaUFnSUNCOVhHNGdJSDFjYmx4dUlDQnBaaUFvWW14bGJtUkRkWEoyWlM1c1pXNW5kR2dnUFQwOUlESXBJSHRjYmlBZ0lDQXZMeUJRWVhOeklHSmxkSGRsWlc0Z2RIZGxaVzV6SUhWemFXNW5JR2x1WTI5dGFXNW5JR1ZoYzJsdVp5QnBaaUJxZFhOMElIUjNieUJ3YjJsdWRITmNiaUFnSUNCeVpYUjFjbTRnS0NrZ1BUNGdlMXh1SUNBZ0lDQWdZMjl1YzNRZ1lteGxibVJRY205bmNtVnpjeUE5SUhKbGMzUnlhV04wS0dkbGRGQnliMmR5WlhOelJuSnZiVlpoYkhWbEtHbHVRV04wYVc5dUxtVnNZWEJ6WldRc0lHSnNaVzVrUTNWeWRtVmJNRjFiTUYwc0lHSnNaVzVrUTNWeWRtVmJNVjFiTUYwcExDQXdMQ0F4S1R0Y2JseHVJQ0FnSUNBZ2FXWWdLR0pzWlc1a1VISnZaM0psYzNNZ1BUMDlJREVwSUh0Y2JpQWdJQ0FnSUNBZ1pteHZkMVpoYkhWbExtSnNaVzVrUTNWeWRtVWdQU0IxYm1SbFptbHVaV1E3WEc0Z0lDQWdJQ0I5WEc1Y2JpQWdJQ0FnSUhKbGRIVnliaUJsWVhObEtHSnNaVzVrVUhKdlozSmxjM01zSUc5MWRGWmhiSFZsTG1OMWNuSmxiblFzSUdsdVZtRnNkV1V1WTNWeWNtVnVkQ3dnYVc1V1lXeDFaUzVsWVhObEtUdGNiaUFnSUNCOU8xeHVJQ0I5SUdWc2MyVWdlMXh1SUNBZ0lDOHZJRkJoYzNNZ1ltVjBkMlZsYmlCMGQyVmxibk1nZFhOcGJtY2dZbVY2YVdWeUlHbHVkR1Z5Y0c5c1lYUnBiMjVjYmlBZ0lDQnlaWFIxY200Z0tDa2dQVDRnZTF4dUlDQWdJQ0FnWTI5dWMzUWdZbXhsYm1SUWNtOW5jbVZ6Y3lBOUlISmxjM1J5YVdOMEtHZGxkRkJ5YjJkeVpYTnpSbkp2YlZaaGJIVmxLR2x1UVdOMGFXOXVMbVZzWVhCelpXUXNJR0pzWlc1a1EzVnlkbVZiTUYxYk1GMHNJR0pzWlc1a1EzVnlkbVZiTWwxYk1GMHBMQ0F3TENBeEtUdGNiaUFnSUNBZ0lHTnZibk4wSUdGUUlEMGdaMlYwVm1Gc2RXVkdjbTl0VUhKdlozSmxjM01vWW14bGJtUlFjbTluY21WemN5d2dZbXhsYm1SRGRYSjJaVnN3WFZzeFhTd2dZbXhsYm1SRGRYSjJaVnN4WFZzeFhTazdYRzRnSUNBZ0lDQmpiMjV6ZENCaVVDQTlJR2RsZEZaaGJIVmxSbkp2YlZCeWIyZHlaWE56S0dKc1pXNWtVSEp2WjNKbGMzTXNJR0pzWlc1a1EzVnlkbVZiTVYxYk1WMHNJR0pzWlc1a1EzVnlkbVZiTWwxYk1WMHBPMXh1WEc0Z0lDQWdJQ0JwWmlBb1lteGxibVJRY205bmNtVnpjeUE5UFQwZ01Ta2dlMXh1SUNBZ0lDQWdJQ0JtYkc5M1ZtRnNkV1V1WW14bGJtUkRkWEoyWlNBOUlIVnVaR1ZtYVc1bFpEdGNiaUFnSUNBZ0lDQWdjbVYwZFhKdUlHbHVWbUZzZFdVdVkzVnljbVZ1ZER0Y2JpQWdJQ0FnSUgxY2JseHVJQ0FnSUNBZ2NtVjBkWEp1SUdkbGRGWmhiSFZsUm5KdmJWQnliMmR5WlhOektHSnNaVzVrVUhKdlozSmxjM01zSUdGUUxDQmlVQ2s3WEc0Z0lDQWdmVHRjYmlBZ2ZWeHVmVHRjYmlKZGZRPT1cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2FjdGlvbnMvZmxvdy9nZW5lcmF0ZS1ibGVuZC1jdXJ2ZS5qc1xuICoqIG1vZHVsZSBpZCA9IDM3XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfSW5wdXQyID0gcmVxdWlyZSgnLi9JbnB1dCcpO1xuXG52YXIgX0lucHV0MyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX0lucHV0Mik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKCFzZWxmKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gY2FsbCAmJiAodHlwZW9mIGNhbGwgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikgPyBjYWxsIDogc2VsZjsgfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb24sIG5vdCBcIiArIHR5cGVvZiBzdXBlckNsYXNzKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCBlbnVtZXJhYmxlOiBmYWxzZSwgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LnNldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKSA6IHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7IH1cblxudmFyIFBvaW50ZXIgPSBmdW5jdGlvbiAoX0lucHV0KSB7XG4gIF9pbmhlcml0cyhQb2ludGVyLCBfSW5wdXQpO1xuXG4gIGZ1bmN0aW9uIFBvaW50ZXIoaW5pdGlhbFN0YXRlLCBtb3ZlRXZlbnQsIGV2ZW50VG9Qb2ludCwgcHJldmVudERlZmF1bHQpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgUG9pbnRlcik7XG5cbiAgICB2YXIgX3RoaXMgPSBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCBfSW5wdXQuY2FsbCh0aGlzLCBpbml0aWFsU3RhdGUpKTtcblxuICAgIF90aGlzLnByZXZlbnREZWZhdWx0ID0gcHJldmVudERlZmF1bHQ7XG4gICAgX3RoaXMuZXZlbnRUb1BvaW50ID0gZXZlbnRUb1BvaW50O1xuICAgIF90aGlzLm1vdmVFdmVudCA9IG1vdmVFdmVudDtcbiAgICBfdGhpcy5ib3VuZExhdGVzdCA9IF90aGlzLmxhdGVzdC5iaW5kKF90aGlzKTtcbiAgICByZXR1cm4gX3RoaXM7XG4gIH1cblxuICBQb2ludGVyLnByb3RvdHlwZS5sYXRlc3QgPSBmdW5jdGlvbiBsYXRlc3QoZSkge1xuICAgIF9JbnB1dC5wcm90b3R5cGUubGF0ZXN0LmNhbGwodGhpcywgdGhpcy5ldmVudFRvUG9pbnQoZSkpO1xuICAgIGlmICh0aGlzLnByZXZlbnREZWZhdWx0KSB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgfVxuICB9O1xuXG4gIFBvaW50ZXIucHJvdG90eXBlLnN0YXJ0ID0gZnVuY3Rpb24gc3RhcnQoKSB7XG4gICAgX0lucHV0LnByb3RvdHlwZS5zdGFydC5jYWxsKHRoaXMpO1xuICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5hZGRFdmVudExpc3RlbmVyKHRoaXMubW92ZUV2ZW50LCB0aGlzLmJvdW5kTGF0ZXN0KTtcbiAgfTtcblxuICBQb2ludGVyLnByb3RvdHlwZS5zdG9wID0gZnVuY3Rpb24gc3RvcCgpIHtcbiAgICBfSW5wdXQucHJvdG90eXBlLnN0b3AuY2FsbCh0aGlzKTtcbiAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcih0aGlzLm1vdmVFdmVudCwgdGhpcy5ib3VuZExhdGVzdCk7XG4gIH07XG5cbiAgcmV0dXJuIFBvaW50ZXI7XG59KF9JbnB1dDMuZGVmYXVsdCk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IFBvaW50ZXI7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5OeVl5OXBibkIxZEM5UWIybHVkR1Z5TG1weklsMHNJbTVoYldWeklqcGJYU3dpYldGd2NHbHVaM01pT2lJN096czdRVUZCUVRzN096czdPenM3T3pzN08wbEJSWEZDT3pzN1FVRkRia0lzVjBGRWJVSXNUMEZEYmtJc1EwRkJXU3haUVVGYUxFVkJRVEJDTEZOQlFURkNMRVZCUVhGRExGbEJRWEpETEVWQlFXMUVMR05CUVc1RUxFVkJRVzFGT3pCQ1FVUm9SQ3hUUVVOblJEczdhVVJCUTJwRkxHdENRVUZOTEZsQlFVNHNSMEZFYVVVN08wRkJSV3BGTEZWQlFVc3NZMEZCVEN4SFFVRnpRaXhqUVVGMFFpeERRVVpwUlR0QlFVZHFSU3hWUVVGTExGbEJRVXdzUjBGQmIwSXNXVUZCY0VJc1EwRklhVVU3UVVGSmFrVXNWVUZCU3l4VFFVRk1MRWRCUVdsQ0xGTkJRV3BDTEVOQlNtbEZPMEZCUzJwRkxGVkJRVXNzVjBGQlRDeEhRVUZ0UWl4TlFVRkxMRTFCUVV3c1EwRkJXU3hKUVVGYUxFOUJRVzVDTEVOQlRHbEZPenRIUVVGdVJUczdRVUZFYlVJc2IwSkJVMjVDTEhsQ1FVRlBMRWRCUVVjN1FVRkRVaXh4UWtGQlRTeE5RVUZPTEZsQlFXRXNTMEZCU3l4WlFVRk1MRU5CUVd0Q0xFTkJRV3hDTEVOQlFXSXNSVUZFVVR0QlFVVlNMRkZCUVVrc1MwRkJTeXhqUVVGTUxFVkJRWEZDTzBGQlEzWkNMRkZCUVVVc1kwRkJSaXhIUVVSMVFqdExRVUY2UWpzN08wRkJXR2xDTEc5Q1FXZENia0lzZVVKQlFWRTdRVUZEVGl4eFFrRkJUU3hMUVVGT0xGbEJSRTA3UVVGRlRpeGhRVUZUTEdWQlFWUXNRMEZCZVVJc1owSkJRWHBDTEVOQlFUQkRMRXRCUVVzc1UwRkJUQ3hGUVVGblFpeExRVUZMTEZkQlFVd3NRMEZCTVVRc1EwRkdUVHM3TzBGQmFFSlhMRzlDUVhGQ2JrSXNkVUpCUVU4N1FVRkRUQ3h4UWtGQlRTeEpRVUZPTEZsQlJFczdRVUZGVEN4aFFVRlRMR1ZCUVZRc1EwRkJlVUlzYlVKQlFYcENMRU5CUVRaRExFdEJRVXNzVTBGQlRDeEZRVUZuUWl4TFFVRkxMRmRCUVV3c1EwRkJOMFFzUTBGR1N6czdPMU5CY2tKWklpd2labWxzWlNJNklsQnZhVzUwWlhJdWFuTWlMQ0p6YjNWeVkyVlNiMjkwSWpvaUwxVnpaWEp6TDAxaGRIUXZVMmwwWlhNdmNHOXdiVzkwYVc5dUlpd2ljMjkxY21ObGMwTnZiblJsYm5RaU9sc2lhVzF3YjNKMElFbHVjSFYwSUdaeWIyMGdKeTR2U1c1d2RYUW5PMXh1WEc1bGVIQnZjblFnWkdWbVlYVnNkQ0JqYkdGemN5QlFiMmx1ZEdWeUlHVjRkR1Z1WkhNZ1NXNXdkWFFnZTF4dUlDQmpiMjV6ZEhKMVkzUnZjaWhwYm1sMGFXRnNVM1JoZEdVc0lHMXZkbVZGZG1WdWRDd2daWFpsYm5SVWIxQnZhVzUwTENCd2NtVjJaVzUwUkdWbVlYVnNkQ2tnZTF4dUlDQWdJSE4xY0dWeUtHbHVhWFJwWVd4VGRHRjBaU2s3WEc0Z0lDQWdkR2hwY3k1d2NtVjJaVzUwUkdWbVlYVnNkQ0E5SUhCeVpYWmxiblJFWldaaGRXeDBPMXh1SUNBZ0lIUm9hWE11WlhabGJuUlViMUJ2YVc1MElEMGdaWFpsYm5SVWIxQnZhVzUwTzF4dUlDQWdJSFJvYVhNdWJXOTJaVVYyWlc1MElEMGdiVzkyWlVWMlpXNTBPMXh1SUNBZ0lIUm9hWE11WW05MWJtUk1ZWFJsYzNRZ1BTQjBhR2x6TG14aGRHVnpkQzVpYVc1a0tIUm9hWE1wTzF4dUlDQjlYRzVjYmlBZ2JHRjBaWE4wS0dVcElIdGNiaUFnSUNCemRYQmxjaTVzWVhSbGMzUW9kR2hwY3k1bGRtVnVkRlJ2VUc5cGJuUW9aU2twTzF4dUlDQWdJR2xtSUNoMGFHbHpMbkJ5WlhabGJuUkVaV1poZFd4MEtTQjdYRzRnSUNBZ0lDQmxMbkJ5WlhabGJuUkVaV1poZFd4MEtDazdYRzRnSUNBZ2ZWeHVJQ0I5WEc1Y2JpQWdjM1JoY25Rb0tTQjdYRzRnSUNBZ2MzVndaWEl1YzNSaGNuUW9LVHRjYmlBZ0lDQmtiMk4xYldWdWRDNWtiMk4xYldWdWRFVnNaVzFsYm5RdVlXUmtSWFpsYm5STWFYTjBaVzVsY2loMGFHbHpMbTF2ZG1WRmRtVnVkQ3dnZEdocGN5NWliM1Z1WkV4aGRHVnpkQ2s3WEc0Z0lIMWNibHh1SUNCemRHOXdLQ2tnZTF4dUlDQWdJSE4xY0dWeUxuTjBiM0FvS1R0Y2JpQWdJQ0JrYjJOMWJXVnVkQzVrYjJOMWJXVnVkRVZzWlcxbGJuUXVjbVZ0YjNabFJYWmxiblJNYVhOMFpXNWxjaWgwYUdsekxtMXZkbVZGZG1WdWRDd2dkR2hwY3k1aWIzVnVaRXhoZEdWemRDazdYRzRnSUgxY2JuMWNiaUpkZlE9PVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvaW5wdXQvUG9pbnRlci5qc1xuICoqIG1vZHVsZSBpZCA9IDM4XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzLmRlYWN0aXZhdGUgPSBleHBvcnRzLmdldFRhc2tJZCA9IHVuZGVmaW5lZDtcbmV4cG9ydHMuYWN0aXZhdGUgPSBhY3RpdmF0ZTtcblxudmFyIF90aW1lciA9IHJlcXVpcmUoJy4vdGltZXInKTtcblxudmFyIF90aW1lcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF90aW1lcik7XG5cbnZhciBfdGljayA9IHJlcXVpcmUoJy4vdGljaycpO1xuXG52YXIgX3RpY2syID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfdGljayk7XG5cbnZhciBfbWFuYWdlciA9IHJlcXVpcmUoJy4vbWFuYWdlcicpO1xuXG52YXIgX21hbmFnZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfbWFuYWdlcik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbnZhciB0YXNrU3RlcE9yZGVyID0gW3sgbmFtZTogJ29uRnJhbWVTdGFydCcgfSwgeyBuYW1lOiAnb25VcGRhdGUnIH0sIHsgbmFtZTogJ3dpbGxSZW5kZXInLCBkZWNpZGVSZW5kZXI6IHRydWUgfSwgeyBuYW1lOiAnb25QcmVSZW5kZXInLCBpc1JlbmRlcjogdHJ1ZSB9LCB7IG5hbWU6ICdvblJlbmRlcicsIGlzUmVuZGVyOiB0cnVlIH0sIHsgbmFtZTogJ29uUG9zdFJlbmRlcicsIGlzUmVuZGVyOiB0cnVlIH0sIHsgbmFtZTogJ29uRnJhbWVFbmQnIH0sIHsgbmFtZTogJ29uQ2xlYW51cCcgfV07IC8qXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIENvcmUgcmVuZGVyIGxvb3BcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBTb21lIGRlY2ljaXNvbnMgaGVyZSBoYXZlIGJlZW4gdGFrZW4gaW4gdGhlIG5hbWUgb2YgcGVyZm9ybWFuY2UuIEFsbCBoYWlsIHBlcmZvcm1hbmNlLlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoSXQgdHVybnMgb3V0IG1pY3Jvb3B0aW1pc2F0aW9ucyBkbyBtYXR0ZXIgd2hlbiB5b3UgaGF2ZSAxNm1zKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKi9cblxudmFyIG51bVRhc2tTdGVwcyA9IHRhc2tTdGVwT3JkZXIubGVuZ3RoO1xuXG4vLyBbYm9vbGVhbl06IElzIGxvb3AgcnVubmluZz9cbnZhciBpc1J1bm5pbmcgPSBmYWxzZTtcblxuLypcbiAgW3RpbWVzdGFtcF06IEZyYW1lIHRpbWVzdGFtcFxuICBbaW50XTogVGltZSBzaW5jZSBsYXN0IGZyYW1lXG4qL1xuZnVuY3Rpb24gZmlyZUFsbChmcmFtZVN0YW1wLCBlbGFwc2VkKSB7XG4gIHZhciBhY3RpdmVJZHMgPSBfbWFuYWdlcjIuZGVmYXVsdC5nZXRBY3RpdmVJZHMoKTtcbiAgdmFyIGFjdGl2ZVRhc2tDb3VudCA9IGFjdGl2ZUlkcy5sZW5ndGg7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBudW1UYXNrU3RlcHM7IGkrKykge1xuICAgIHZhciBzdGVwID0gdGFza1N0ZXBPcmRlcltpXTtcblxuICAgIGZvciAodmFyIGkyID0gMDsgaTIgPCBhY3RpdmVUYXNrQ291bnQ7IGkyKyspIHtcbiAgICAgIHZhciB0YXNrID0gX21hbmFnZXIyLmRlZmF1bHQuYWN0aXZlVGFza3NbYWN0aXZlSWRzW2kyXV07XG4gICAgICB2YXIgcmVzdWx0ID0gZmFsc2U7XG5cbiAgICAgIC8vIENoZWNrIGlmIHRoaXMgdGFzayBoYXMgdGhpcyBzdGVwLCBvciBpZiBpdCdzIGEgcmVuZGVyIHN0ZXAgdGhhdCB3ZSdyZSByZW5kZXJpbmcgdGhpcyBmcmFtZVxuICAgICAgaWYgKHRhc2sgJiYgdGFza1tzdGVwLm5hbWVdICYmICghc3RlcC5pc1JlbmRlciB8fCBzdGVwLmlzUmVuZGVyICYmIHRhc2suX3JlbmRlclRoaXNGcmFtZSA9PT0gdHJ1ZSkpIHtcbiAgICAgICAgcmVzdWx0ID0gdGFza1tzdGVwLm5hbWVdLmNhbGwodGFzaywgdGFzaywgZnJhbWVTdGFtcCwgZWxhcHNlZCk7XG4gICAgICB9XG5cbiAgICAgIC8vIElmIHRoaXMgaXMgYSBkZWNpZGUgcmVuZGVyIHN0ZXAgYW5kIGl0IHJldHVybnMgYGZhbHNlYCwgc2V0IHdpbGxSZW5kZXIgdG8gZmFsc2VcbiAgICAgIGlmIChzdGVwLmRlY2lkZVJlbmRlcikge1xuICAgICAgICB0YXNrLl9yZW5kZXJUaGlzRnJhbWUgPSB0YXNrW3N0ZXAubmFtZV0gJiYgcmVzdWx0ICE9PSB0cnVlID8gZmFsc2UgOiB0cnVlO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBfbWFuYWdlcjIuZGVmYXVsdC5nZXROb25CYWNrZ3JvdW5kUnVubmluZ0NvdW50KCk7XG59XG5cbi8vIEZ1bmN0aW9uIHRvIGZpcmUgZXZlcnkgZnJhbWVcbmZ1bmN0aW9uIGZyYW1lKGZyYW1lU3RhbXApIHtcbiAgX3RpbWVyMi5kZWZhdWx0LnVwZGF0ZShmcmFtZVN0YW1wKTtcbiAgaXNSdW5uaW5nID0gZmlyZUFsbChmcmFtZVN0YW1wLCBfdGltZXIyLmRlZmF1bHQuZ2V0RWxhcHNlZCgpKTtcblxuICBpZiAoaXNSdW5uaW5nKSB7XG4gICAgKDAsIF90aWNrMi5kZWZhdWx0KShmcmFtZSk7XG4gIH1cbn1cblxuLy8gU3RhcnQgbG9vcFxuZnVuY3Rpb24gc3RhcnQoKSB7XG4gIGlmICghaXNSdW5uaW5nKSB7XG4gICAgX3RpbWVyMi5kZWZhdWx0LnN0YXJ0KCk7XG4gICAgaXNSdW5uaW5nID0gdHJ1ZTtcbiAgICAoMCwgX3RpY2syLmRlZmF1bHQpKGZyYW1lKTtcbiAgfVxufVxuXG4vLyBFeHBvcnRzXG52YXIgZ2V0VGFza0lkID0gZXhwb3J0cy5nZXRUYXNrSWQgPSBfbWFuYWdlcjIuZGVmYXVsdC5nZXRUYXNrSWQ7XG5cbi8qXG4gIFtpbnRdOiB0YXNrIElEIHRvIGFjdGl2YXRlXG4gIFt0YXNrXTogdGFzayB0byBhY3RpdmF0ZVxuKi9cbmZ1bmN0aW9uIGFjdGl2YXRlKGlkLCB0YXNrKSB7XG4gIF9tYW5hZ2VyMi5kZWZhdWx0LmFjdGl2YXRlKGlkLCB0YXNrKTtcblxuICBpZiAoIWlzUnVubmluZykge1xuICAgIHN0YXJ0KCk7XG4gIH1cbn1cblxuLypcbiAgW2ludF06IHRhc2sgSUQgdG8gZGVhY3RpdmF0ZVxuKi9cbnZhciBkZWFjdGl2YXRlID0gZXhwb3J0cy5kZWFjdGl2YXRlID0gX21hbmFnZXIyLmRlZmF1bHQuZGVhY3RpdmF0ZTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbk55WXk5MFlYTnJMMnh2YjNBdWFuTWlYU3dpYm1GdFpYTWlPbHRkTENKdFlYQndhVzVuY3lJNklqczdPenRSUVdsR1owSTdPMEZCTTBWb1FqczdPenRCUVVOQk96czdPMEZCUTBFN096czdPenRCUVVWQkxFbEJRVTBzWjBKQlFXZENMRU5CUTNCQ0xFVkJRVVVzVFVGQlRTeGpRVUZPTEVWQlJHdENMRVZCUlhCQ0xFVkJRVVVzVFVGQlRTeFZRVUZPTEVWQlJtdENMRVZCUjNCQ0xFVkJRVVVzVFVGQlRTeFpRVUZPTEVWQlFXOUNMR05CUVdNc1NVRkJaQ3hGUVVoR0xFVkJTWEJDTEVWQlFVVXNUVUZCVFN4aFFVRk9MRVZCUVhGQ0xGVkJRVlVzU1VGQlZpeEZRVXBJTEVWQlMzQkNMRVZCUVVVc1RVRkJUU3hWUVVGT0xFVkJRV3RDTEZWQlFWVXNTVUZCVml4RlFVeEJMRVZCVFhCQ0xFVkJRVVVzVFVGQlRTeGpRVUZPTEVWQlFYTkNMRlZCUVZVc1NVRkJWaXhGUVU1S0xFVkJUM0JDTEVWQlFVVXNUVUZCVFN4WlFVRk9MRVZCVUd0Q0xFVkJVWEJDTEVWQlFVVXNUVUZCVFN4WFFVRk9MRVZCVW10Q0xFTkJRV2hDT3pzN096czdPMEZCVlU0c1NVRkJUU3hsUVVGbExHTkJRV01zVFVGQlpEczdPMEZCUjNKQ0xFbEJRVWtzV1VGQldTeExRVUZhT3pzN096czdRVUZOU2l4VFFVRlRMRTlCUVZRc1EwRkJhVUlzVlVGQmFrSXNSVUZCTmtJc1QwRkJOMElzUlVGQmMwTTdRVUZEY0VNc1RVRkJUU3haUVVGWkxHdENRVUZSTEZsQlFWSXNSVUZCV2l4RFFVUTRRanRCUVVWd1F5eE5RVUZOTEd0Q1FVRnJRaXhWUVVGVkxFMUJRVllzUTBGR1dUczdRVUZKY0VNc1QwRkJTeXhKUVVGSkxFbEJRVWtzUTBGQlNpeEZRVUZQTEVsQlFVa3NXVUZCU2l4RlFVRnJRaXhIUVVGc1F5eEZRVUYxUXp0QlFVTnlReXhSUVVGTkxFOUJRVThzWTBGQll5eERRVUZrTEVOQlFWQXNRMEZFSzBJN08wRkJSM0pETEZOQlFVc3NTVUZCU1N4TFFVRkxMRU5CUVV3c1JVRkJVU3hMUVVGTExHVkJRVXdzUlVGQmMwSXNTVUZCZGtNc1JVRkJOa003UVVGRE0wTXNWVUZCVFN4UFFVRlBMR3RDUVVGUkxGZEJRVklzUTBGQmIwSXNWVUZCVlN4RlFVRldMRU5CUVhCQ0xFTkJRVkFzUTBGRWNVTTdRVUZGTTBNc1ZVRkJTU3hUUVVGVExFdEJRVlE3T3p0QlFVWjFReXhWUVV0MlF5eFJRVUZSTEV0QlFVc3NTMEZCU3l4SlFVRk1MRU5CUVdJc1MwRkJORUlzUTBGQlF5eExRVUZMTEZGQlFVd3NTVUZCYTBJc1MwRkJTeXhSUVVGTUxFbEJRV2xDTEV0QlFVc3NaMEpCUVV3c1MwRkJNRUlzU1VGQk1VSXNRMEZCYUVVc1JVRkJhMGM3UVVGRGNFY3NhVUpCUVZNc1MwRkJTeXhMUVVGTExFbEJRVXdzUTBGQlRDeERRVUZuUWl4SlFVRm9RaXhEUVVGeFFpeEpRVUZ5UWl4RlFVRXlRaXhKUVVFelFpeEZRVUZwUXl4VlFVRnFReXhGUVVFMlF5eFBRVUUzUXl4RFFVRlVMRU5CUkc5SE8wOUJRWFJIT3pzN1FVRk1Na01zVlVGVmRrTXNTMEZCU3l4WlFVRk1MRVZCUVcxQ08wRkJRM0pDTEdGQlFVc3NaMEpCUVV3c1IwRkJkMElzU1VGQlF5eERRVUZMTEV0QlFVc3NTVUZCVEN4RFFVRk1MRWxCUVcxQ0xGZEJRVmNzU1VGQldDeEhRVUZ0UWl4TFFVRjJReXhIUVVFclF5eEpRVUV2UXl4RFFVUklPMDlCUVhaQ08wdEJWa1k3UjBGSVJqczdRVUZ0UWtFc1UwRkJUeXhyUWtGQlVTdzBRa0ZCVWl4RlFVRlFMRU5CZGtKdlF6dERRVUYwUXpzN08wRkJNa0pCTEZOQlFWTXNTMEZCVkN4RFFVRmxMRlZCUVdZc1JVRkJNa0k3UVVGRGVrSXNhMEpCUVUwc1RVRkJUaXhEUVVGaExGVkJRV0lzUlVGRWVVSTdRVUZGZWtJc1kwRkJXU3hSUVVGUkxGVkJRVklzUlVGQmIwSXNaMEpCUVUwc1ZVRkJUaXhGUVVGd1FpeERRVUZhTEVOQlJubENPenRCUVVsNlFpeE5RVUZKTEZOQlFVb3NSVUZCWlR0QlFVTmlMSGRDUVVGTExFdEJRVXdzUlVGRVlUdEhRVUZtTzBOQlNrWTdPenRCUVZWQkxGTkJRVk1zUzBGQlZDeEhRVUZwUWp0QlFVTm1MRTFCUVVrc1EwRkJReXhUUVVGRUxFVkJRVms3UVVGRFpDeHZRa0ZCVFN4TFFVRk9MRWRCUkdNN1FVRkZaQ3huUWtGQldTeEpRVUZhTEVOQlJtTTdRVUZIWkN4M1FrRkJTeXhMUVVGTUxFVkJTR003UjBGQmFFSTdRMEZFUmpzN08wRkJVMDhzU1VGQlRTeG5RMEZCV1N4clFrRkJVU3hUUVVGU096czdPenM3UVVGTmJFSXNVMEZCVXl4UlFVRlVMRU5CUVd0Q0xFVkJRV3hDTEVWQlFYTkNMRWxCUVhSQ0xFVkJRVFJDTzBGQlEycERMRzlDUVVGUkxGRkJRVklzUTBGQmFVSXNSVUZCYWtJc1JVRkJjVUlzU1VGQmNrSXNSVUZFYVVNN08wRkJSMnBETEUxQlFVa3NRMEZCUXl4VFFVRkVMRVZCUVZrN1FVRkRaQ3haUVVSak8wZEJRV2hDTzBOQlNFczdPenM3TzBGQlYwRXNTVUZCVFN4clEwRkJZU3hyUWtGQlVTeFZRVUZTSWl3aVptbHNaU0k2SW14dmIzQXVhbk1pTENKemIzVnlZMlZTYjI5MElqb2lMMVZ6WlhKekwwMWhkSFF2VTJsMFpYTXZjRzl3Ylc5MGFXOXVJaXdpYzI5MWNtTmxjME52Ym5SbGJuUWlPbHNpTHlwY2JpQWdRMjl5WlNCeVpXNWtaWElnYkc5dmNGeHVYRzRnSUZOdmJXVWdaR1ZqYVdOcGMyOXVjeUJvWlhKbElHaGhkbVVnWW1WbGJpQjBZV3RsYmlCcGJpQjBhR1VnYm1GdFpTQnZaaUJ3WlhKbWIzSnRZVzVqWlM0Z1FXeHNJR2hoYVd3Z2NHVnlabTl5YldGdVkyVXVYRzRnSUNoSmRDQjBkWEp1Y3lCdmRYUWdiV2xqY205dmNIUnBiV2x6WVhScGIyNXpJR1J2SUcxaGRIUmxjaUIzYUdWdUlIbHZkU0JvWVhabElERTJiWE1wWEc0cUwxeHVhVzF3YjNKMElIUnBiV1Z5SUdaeWIyMGdKeTR2ZEdsdFpYSW5PMXh1YVcxd2IzSjBJSFJwWTJzZ1puSnZiU0FuTGk5MGFXTnJKenRjYm1sdGNHOXlkQ0J0WVc1aFoyVnlJR1p5YjIwZ0p5NHZiV0Z1WVdkbGNpYzdYRzVjYm1OdmJuTjBJSFJoYzJ0VGRHVndUM0prWlhJZ1BTQmJYRzRnSUhzZ2JtRnRaVG9nSjI5dVJuSmhiV1ZUZEdGeWRDY2dmU3hjYmlBZ2V5QnVZVzFsT2lBbmIyNVZjR1JoZEdVbklIMHNYRzRnSUhzZ2JtRnRaVG9nSjNkcGJHeFNaVzVrWlhJbkxDQmtaV05wWkdWU1pXNWtaWEk2SUhSeWRXVWdmU3hjYmlBZ2V5QnVZVzFsT2lBbmIyNVFjbVZTWlc1a1pYSW5MQ0JwYzFKbGJtUmxjam9nZEhKMVpTQjlMRnh1SUNCN0lHNWhiV1U2SUNkdmJsSmxibVJsY2ljc0lHbHpVbVZ1WkdWeU9pQjBjblZsSUgwc1hHNGdJSHNnYm1GdFpUb2dKMjl1VUc5emRGSmxibVJsY2ljc0lHbHpVbVZ1WkdWeU9pQjBjblZsSUgwc1hHNGdJSHNnYm1GdFpUb2dKMjl1Um5KaGJXVkZibVFuSUgwc1hHNGdJSHNnYm1GdFpUb2dKMjl1UTJ4bFlXNTFjQ2NnZlZ4dVhUdGNibU52Ym5OMElHNTFiVlJoYzJ0VGRHVndjeUE5SUhSaGMydFRkR1Z3VDNKa1pYSXViR1Z1WjNSb08xeHVYRzR2THlCYlltOXZiR1ZoYmwwNklFbHpJR3h2YjNBZ2NuVnVibWx1Wno5Y2JteGxkQ0JwYzFKMWJtNXBibWNnUFNCbVlXeHpaVHRjYmx4dUx5cGNiaUFnVzNScGJXVnpkR0Z0Y0YwNklFWnlZVzFsSUhScGJXVnpkR0Z0Y0Z4dUlDQmJhVzUwWFRvZ1ZHbHRaU0J6YVc1alpTQnNZWE4wSUdaeVlXMWxYRzRxTDF4dVpuVnVZM1JwYjI0Z1ptbHlaVUZzYkNobWNtRnRaVk4wWVcxd0xDQmxiR0Z3YzJWa0tTQjdYRzRnSUdOdmJuTjBJR0ZqZEdsMlpVbGtjeUE5SUcxaGJtRm5aWEl1WjJWMFFXTjBhWFpsU1dSektDazdYRzRnSUdOdmJuTjBJR0ZqZEdsMlpWUmhjMnREYjNWdWRDQTlJR0ZqZEdsMlpVbGtjeTVzWlc1bmRHZzdYRzVjYmlBZ1ptOXlJQ2hzWlhRZ2FTQTlJREE3SUdrZ1BDQnVkVzFVWVhOclUzUmxjSE03SUdrckt5a2dlMXh1SUNBZ0lHTnZibk4wSUhOMFpYQWdQU0IwWVhOclUzUmxjRTl5WkdWeVcybGRPMXh1WEc0Z0lDQWdabTl5SUNoc1pYUWdhVElnUFNBd095QnBNaUE4SUdGamRHbDJaVlJoYzJ0RGIzVnVkRHNnYVRJckt5a2dlMXh1SUNBZ0lDQWdZMjl1YzNRZ2RHRnpheUE5SUcxaGJtRm5aWEl1WVdOMGFYWmxWR0Z6YTNOYllXTjBhWFpsU1dSelcya3lYVjA3WEc0Z0lDQWdJQ0JzWlhRZ2NtVnpkV3gwSUQwZ1ptRnNjMlU3WEc1Y2JpQWdJQ0FnSUM4dklFTm9aV05ySUdsbUlIUm9hWE1nZEdGemF5Qm9ZWE1nZEdocGN5QnpkR1Z3TENCdmNpQnBaaUJwZENkeklHRWdjbVZ1WkdWeUlITjBaWEFnZEdoaGRDQjNaU2R5WlNCeVpXNWtaWEpwYm1jZ2RHaHBjeUJtY21GdFpWeHVJQ0FnSUNBZ2FXWWdLSFJoYzJzZ0ppWWdkR0Z6YTF0emRHVndMbTVoYldWZElDWW1JQ2doYzNSbGNDNXBjMUpsYm1SbGNpQjhmQ0FvYzNSbGNDNXBjMUpsYm1SbGNpQW1KaUIwWVhOckxsOXlaVzVrWlhKVWFHbHpSbkpoYldVZ1BUMDlJSFJ5ZFdVcEtTa2dlMXh1SUNBZ0lDQWdJQ0J5WlhOMWJIUWdQU0IwWVhOclczTjBaWEF1Ym1GdFpWMHVZMkZzYkNoMFlYTnJMQ0IwWVhOckxDQm1jbUZ0WlZOMFlXMXdMQ0JsYkdGd2MyVmtLVHRjYmlBZ0lDQWdJSDFjYmx4dUlDQWdJQ0FnTHk4Z1NXWWdkR2hwY3lCcGN5QmhJR1JsWTJsa1pTQnlaVzVrWlhJZ2MzUmxjQ0JoYm1RZ2FYUWdjbVYwZFhKdWN5QmdabUZzYzJWZ0xDQnpaWFFnZDJsc2JGSmxibVJsY2lCMGJ5Qm1ZV3h6WlZ4dUlDQWdJQ0FnYVdZZ0tITjBaWEF1WkdWamFXUmxVbVZ1WkdWeUtTQjdYRzRnSUNBZ0lDQWdJSFJoYzJzdVgzSmxibVJsY2xSb2FYTkdjbUZ0WlNBOUlDaDBZWE5yVzNOMFpYQXVibUZ0WlYwZ0ppWWdjbVZ6ZFd4MElDRTlQU0IwY25WbEtTQS9JR1poYkhObElEb2dkSEoxWlR0Y2JpQWdJQ0FnSUgxY2JpQWdJQ0I5WEc0Z0lIMWNibHh1SUNCeVpYUjFjbTRnYldGdVlXZGxjaTVuWlhST2IyNUNZV05yWjNKdmRXNWtVblZ1Ym1sdVowTnZkVzUwS0NrN1hHNTlYRzVjYmk4dklFWjFibU4wYVc5dUlIUnZJR1pwY21VZ1pYWmxjbmtnWm5KaGJXVmNibVoxYm1OMGFXOXVJR1p5WVcxbEtHWnlZVzFsVTNSaGJYQXBJSHRjYmlBZ2RHbHRaWEl1ZFhCa1lYUmxLR1p5WVcxbFUzUmhiWEFwTzF4dUlDQnBjMUoxYm01cGJtY2dQU0JtYVhKbFFXeHNLR1p5WVcxbFUzUmhiWEFzSUhScGJXVnlMbWRsZEVWc1lYQnpaV1FvS1NrN1hHNWNiaUFnYVdZZ0tHbHpVblZ1Ym1sdVp5a2dlMXh1SUNBZ0lIUnBZMnNvWm5KaGJXVXBPMXh1SUNCOVhHNTlYRzVjYmk4dklGTjBZWEowSUd4dmIzQmNibVoxYm1OMGFXOXVJSE4wWVhKMEtDa2dlMXh1SUNCcFppQW9JV2x6VW5WdWJtbHVaeWtnZTF4dUlDQWdJSFJwYldWeUxuTjBZWEowS0NrN1hHNGdJQ0FnYVhOU2RXNXVhVzVuSUQwZ2RISjFaVHRjYmlBZ0lDQjBhV05yS0daeVlXMWxLVHRjYmlBZ2ZWeHVmVnh1WEc0dkx5QkZlSEJ2Y25SelhHNWxlSEJ2Y25RZ1kyOXVjM1FnWjJWMFZHRnphMGxrSUQwZ2JXRnVZV2RsY2k1blpYUlVZWE5yU1dRN1hHNWNiaThxWEc0Z0lGdHBiblJkT2lCMFlYTnJJRWxFSUhSdklHRmpkR2wyWVhSbFhHNGdJRnQwWVhOclhUb2dkR0Z6YXlCMGJ5QmhZM1JwZG1GMFpWeHVLaTljYm1WNGNHOXlkQ0JtZFc1amRHbHZiaUJoWTNScGRtRjBaU2hwWkN3Z2RHRnpheWtnZTF4dUlDQnRZVzVoWjJWeUxtRmpkR2wyWVhSbEtHbGtMQ0IwWVhOcktUdGNibHh1SUNCcFppQW9JV2x6VW5WdWJtbHVaeWtnZTF4dUlDQWdJSE4wWVhKMEtDazdYRzRnSUgxY2JuMWNibHh1THlwY2JpQWdXMmx1ZEYwNklIUmhjMnNnU1VRZ2RHOGdaR1ZoWTNScGRtRjBaVnh1S2k5Y2JtVjRjRzl5ZENCamIyNXpkQ0JrWldGamRHbDJZWFJsSUQwZ2JXRnVZV2RsY2k1a1pXRmpkR2wyWVhSbE95SmRmUT09XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy90YXNrL2xvb3AuanNcbiAqKiBtb2R1bGUgaWQgPSAzOVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xudmFyIFRSQU5TTEFURSA9ICd0cmFuc2xhdGUnO1xuXG5leHBvcnRzLmRlZmF1bHQgPSB7XG4gIHg6IFRSQU5TTEFURSArICdYJyxcbiAgeTogVFJBTlNMQVRFICsgJ1knLFxuICB6OiBUUkFOU0xBVEUgKyAnWidcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5OeVl5OWhaR0Z3ZEdWeUwyTnpjeTl6ZEdGMFpTMXRZWEF1YW5NaVhTd2libUZ0WlhNaU9sdGRMQ0p0WVhCd2FXNW5jeUk2SWpzN08wRkJRVUVzU1VGQlRTeFpRVUZaTEZkQlFWbzdPMnRDUVVWVE8wRkJRMklzUzBGQlJ5eFpRVUZaTEVkQlFWbzdRVUZEU0N4TFFVRkhMRmxCUVZrc1IwRkJXanRCUVVOSUxFdEJRVWNzV1VGQldTeEhRVUZhSWl3aVptbHNaU0k2SW5OMFlYUmxMVzFoY0M1cWN5SXNJbk52ZFhKalpWSnZiM1FpT2lJdlZYTmxjbk12VFdGMGRDOVRhWFJsY3k5d2IzQnRiM1JwYjI0aUxDSnpiM1Z5WTJWelEyOXVkR1Z1ZENJNld5SmpiMjV6ZENCVVVrRk9VMHhCVkVVZ1BTQW5kSEpoYm5Oc1lYUmxKenRjYmx4dVpYaHdiM0owSUdSbFptRjFiSFFnZTF4dUlDQjRPaUJVVWtGT1UweEJWRVVnS3lBbldDY3NYRzRnSUhrNklGUlNRVTVUVEVGVVJTQXJJQ2RaSnl4Y2JpQWdlam9nVkZKQlRsTk1RVlJGSUNzZ0oxb25YRzU5T3lKZGZRPT1cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2FkYXB0ZXIvY3NzL3N0YXRlLW1hcC5qc1xuICoqIG1vZHVsZSBpZCA9IDQwXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfYW5nbGUgPSByZXF1aXJlKCcuLi8uLi92YWx1ZS10eXBlcy9hbmdsZScpO1xuXG52YXIgX2FuZ2xlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2FuZ2xlKTtcblxudmFyIF9hbHBoYSA9IHJlcXVpcmUoJy4uLy4uL3ZhbHVlLXR5cGVzL2FscGhhJyk7XG5cbnZhciBfYWxwaGEyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfYWxwaGEpO1xuXG52YXIgX2NvbG9yID0gcmVxdWlyZSgnLi4vLi4vdmFsdWUtdHlwZXMvY29sb3InKTtcblxudmFyIF9jb2xvcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jb2xvcik7XG5cbnZhciBfc2NhbGUgPSByZXF1aXJlKCcuLi8uLi92YWx1ZS10eXBlcy9zY2FsZScpO1xuXG52YXIgX3NjYWxlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3NjYWxlKTtcblxudmFyIF9zaGFkb3cgPSByZXF1aXJlKCcuLi8uLi92YWx1ZS10eXBlcy9zaGFkb3cnKTtcblxudmFyIF9zaGFkb3cyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfc2hhZG93KTtcblxudmFyIF9weCA9IHJlcXVpcmUoJy4uLy4uL3ZhbHVlLXR5cGVzL3B4Jyk7XG5cbnZhciBfcHgyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcHgpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5leHBvcnRzLmRlZmF1bHQgPSB7XG4gIC8vIENvbG9yIHByb3BzXG4gIGNvbG9yOiBfY29sb3IyLmRlZmF1bHQsXG4gIGJhY2tncm91bmRDb2xvcjogX2NvbG9yMi5kZWZhdWx0LFxuICBvdXRsaW5lQ29sb3I6IF9jb2xvcjIuZGVmYXVsdCxcbiAgZmlsbDogX2NvbG9yMi5kZWZhdWx0LFxuICBzdHJva2U6IF9jb2xvcjIuZGVmYXVsdCxcblxuICAvLyBCb3JkZXIgcHJvcHNcbiAgYm9yZGVyQ29sb3I6IF9jb2xvcjIuZGVmYXVsdCxcbiAgYm9yZGVyVG9wQ29sb3I6IF9jb2xvcjIuZGVmYXVsdCxcbiAgYm9yZGVyUmlnaHRDb2xvcjogX2NvbG9yMi5kZWZhdWx0LFxuICBib3JkZXJCb3R0b21Db2xvcjogX2NvbG9yMi5kZWZhdWx0LFxuICBib3JkZXJMZWZ0Q29sb3I6IF9jb2xvcjIuZGVmYXVsdCxcbiAgYm9yZGVyUmFkaXVzOiBfcHgyLmRlZmF1bHQsXG5cbiAgLy8gUG9zaXRpb25pbmdcbiAgd2lkdGg6IF9weDIuZGVmYXVsdCxcbiAgaGVpZ2h0OiBfcHgyLmRlZmF1bHQsXG5cbiAgLy8gU2hhZG93c1xuICB0ZXh0U2hhZG93OiBfc2hhZG93Mi5kZWZhdWx0LFxuICBib3hTaGFkb3c6IF9zaGFkb3cyLmRlZmF1bHQsXG5cbiAgLy8gVHJhbnNmb3JtIHByb3BlcnRpZXNcbiAgcm90YXRlOiBfYW5nbGUyLmRlZmF1bHQsXG4gIHJvdGF0ZVg6IF9hbmdsZTIuZGVmYXVsdCxcbiAgcm90YXRlWTogX2FuZ2xlMi5kZWZhdWx0LFxuICByb3RhdGVaOiBfYW5nbGUyLmRlZmF1bHQsXG4gIHNjYWxlOiBfc2NhbGUyLmRlZmF1bHQsXG4gIHNjYWxlWDogX3NjYWxlMi5kZWZhdWx0LFxuICBzY2FsZVk6IF9zY2FsZTIuZGVmYXVsdCxcbiAgc2NhbGVaOiBfc2NhbGUyLmRlZmF1bHQsXG4gIHNrZXdYOiBfYW5nbGUyLmRlZmF1bHQsXG4gIHNrZXdZOiBfYW5nbGUyLmRlZmF1bHQsXG4gIGRpc3RhbmNlOiBfcHgyLmRlZmF1bHQsXG4gIHRyYW5zbGF0ZVg6IF9weDIuZGVmYXVsdCxcbiAgdHJhbnNsYXRlWTogX3B4Mi5kZWZhdWx0LFxuICB0cmFuc2xhdGVaOiBfcHgyLmRlZmF1bHQsXG4gIHBlcnNwZWN0aXZlOiBfcHgyLmRlZmF1bHQsXG4gIG9wYWNpdHk6IF9hbHBoYTIuZGVmYXVsdFxufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbk55WXk5aFpHRndkR1Z5TDJOemN5OTJZV3gxWlMxMGVYQmxMVzFoY0M1cWN5SmRMQ0p1WVcxbGN5STZXMTBzSW0xaGNIQnBibWR6SWpvaU96czdPMEZCUVVFN096czdRVUZEUVRzN096dEJRVU5CT3pzN08wRkJRMEU3T3pzN1FVRkRRVHM3T3p0QlFVTkJPenM3T3pzN2EwSkJSV1U3TzBGQlJXSXNkMEpCUm1FN1FVRkhZaXhyUTBGSVlUdEJRVWxpTEN0Q1FVcGhPMEZCUzJJc2RVSkJUR0U3UVVGTllpeDVRa0ZPWVRzN08wRkJVMklzT0VKQlZHRTdRVUZWWWl4cFEwRldZVHRCUVZkaUxHMURRVmhoTzBGQldXSXNiME5CV21FN1FVRmhZaXhyUTBGaVlUdEJRV05pTERSQ1FXUmhPenM3UVVGcFFtSXNjVUpCYWtKaE8wRkJhMEppTEhOQ1FXeENZVHM3TzBGQmNVSmlMRGhDUVhKQ1lUdEJRWE5DWWl3MlFrRjBRbUU3T3p0QlFYbENZaXg1UWtGNlFtRTdRVUV3UW1Jc01FSkJNVUpoTzBGQk1rSmlMREJDUVROQ1lUdEJRVFJDWWl3d1FrRTFRbUU3UVVFMlFtSXNkMEpCTjBKaE8wRkJPRUppTEhsQ1FUbENZVHRCUVN0Q1lpeDVRa0V2UW1FN1FVRm5RMklzZVVKQmFFTmhPMEZCYVVOaUxIZENRV3BEWVR0QlFXdERZaXgzUWtGc1EyRTdRVUZ0UTJJc2QwSkJia05oTzBGQmIwTmlMREJDUVhCRFlUdEJRWEZEWWl3d1FrRnlRMkU3UVVGelEySXNNRUpCZEVOaE8wRkJkVU5pTERKQ1FYWkRZVHRCUVhkRFlpd3dRa0Y0UTJFaUxDSm1hV3hsSWpvaWRtRnNkV1V0ZEhsd1pTMXRZWEF1YW5NaUxDSnpiM1Z5WTJWU2IyOTBJam9pTDFWelpYSnpMMDFoZEhRdlUybDBaWE12Y0c5d2JXOTBhVzl1SWl3aWMyOTFjbU5sYzBOdmJuUmxiblFpT2xzaWFXMXdiM0owSUdGdVoyeGxJR1p5YjIwZ0p5NHVMeTR1TDNaaGJIVmxMWFI1Y0dWekwyRnVaMnhsSnp0Y2JtbHRjRzl5ZENCaGJIQm9ZU0JtY205dElDY3VMaTh1TGk5MllXeDFaUzEwZVhCbGN5OWhiSEJvWVNjN1hHNXBiWEJ2Y25RZ1kyOXNiM0lnWm5KdmJTQW5MaTR2TGk0dmRtRnNkV1V0ZEhsd1pYTXZZMjlzYjNJbk8xeHVhVzF3YjNKMElITmpZV3hsSUdaeWIyMGdKeTR1THk0dUwzWmhiSFZsTFhSNWNHVnpMM05qWVd4bEp6dGNibWx0Y0c5eWRDQnphR0ZrYjNjZ1puSnZiU0FuTGk0dkxpNHZkbUZzZFdVdGRIbHdaWE12YzJoaFpHOTNKenRjYm1sdGNHOXlkQ0J3ZUNCbWNtOXRJQ2N1TGk4dUxpOTJZV3gxWlMxMGVYQmxjeTl3ZUNjN1hHNWNibVY0Y0c5eWRDQmtaV1poZFd4MElIdGNiaUFnTHk4Z1EyOXNiM0lnY0hKdmNITmNiaUFnWTI5c2IzSTZJR052Ykc5eUxGeHVJQ0JpWVdOclozSnZkVzVrUTI5c2IzSTZJR052Ykc5eUxGeHVJQ0J2ZFhSc2FXNWxRMjlzYjNJNklHTnZiRzl5TEZ4dUlDQm1hV3hzT2lCamIyeHZjaXhjYmlBZ2MzUnliMnRsT2lCamIyeHZjaXhjYmx4dUlDQXZMeUJDYjNKa1pYSWdjSEp2Y0hOY2JpQWdZbTl5WkdWeVEyOXNiM0k2SUdOdmJHOXlMRnh1SUNCaWIzSmtaWEpVYjNCRGIyeHZjam9nWTI5c2IzSXNYRzRnSUdKdmNtUmxjbEpwWjJoMFEyOXNiM0k2SUdOdmJHOXlMRnh1SUNCaWIzSmtaWEpDYjNSMGIyMURiMnh2Y2pvZ1kyOXNiM0lzWEc0Z0lHSnZjbVJsY2t4bFpuUkRiMnh2Y2pvZ1kyOXNiM0lzWEc0Z0lHSnZjbVJsY2xKaFpHbDFjem9nY0hnc1hHNWNiaUFnTHk4Z1VHOXphWFJwYjI1cGJtZGNiaUFnZDJsa2RHZzZJSEI0TEZ4dUlDQm9aV2xuYUhRNklIQjRMRnh1WEc0Z0lDOHZJRk5vWVdSdmQzTmNiaUFnZEdWNGRGTm9ZV1J2ZHpvZ2MyaGhaRzkzTEZ4dUlDQmliM2hUYUdGa2IzYzZJSE5vWVdSdmR5d2dJQ0JjYmx4dUlDQXZMeUJVY21GdWMyWnZjbTBnY0hKdmNHVnlkR2xsYzF4dUlDQnliM1JoZEdVNklHRnVaMnhsTEZ4dUlDQnliM1JoZEdWWU9pQmhibWRzWlN4Y2JpQWdjbTkwWVhSbFdUb2dZVzVuYkdVc1hHNGdJSEp2ZEdGMFpWbzZJR0Z1WjJ4bExGeHVJQ0J6WTJGc1pUb2djMk5oYkdVc1hHNGdJSE5qWVd4bFdEb2djMk5oYkdVc1hHNGdJSE5qWVd4bFdUb2djMk5oYkdVc1hHNGdJSE5qWVd4bFdqb2djMk5oYkdVc1hHNGdJSE5yWlhkWU9pQmhibWRzWlN4Y2JpQWdjMnRsZDFrNklHRnVaMnhsTEZ4dUlDQmthWE4wWVc1alpUb2djSGdzWEc0Z0lIUnlZVzV6YkdGMFpWZzZJSEI0TEZ4dUlDQjBjbUZ1YzJ4aGRHVlpPaUJ3ZUN4Y2JpQWdkSEpoYm5Oc1lYUmxXam9nY0hnc1hHNGdJSEJsY25Od1pXTjBhWFpsT2lCd2VDeGNiaUFnYjNCaFkybDBlVG9nWVd4d2FHRmNibjA3SWwxOVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvYWRhcHRlci9jc3MvdmFsdWUtdHlwZS1tYXAuanNcbiAqKiBtb2R1bGUgaWQgPSA0MVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX3RyYW5zZm9ybVByb3BzID0gcmVxdWlyZSgnLi90cmFuc2Zvcm0tcHJvcHMnKTtcblxudmFyIF90cmFuc2Zvcm1Qcm9wczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF90cmFuc2Zvcm1Qcm9wcyk7XG5cbnZhciBfcHJlZml4ZXIgPSByZXF1aXJlKCcuL3ByZWZpeGVyJyk7XG5cbnZhciBfcHJlZml4ZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcHJlZml4ZXIpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG52YXIgVFJBTlNMQVRFX1ogPSAndHJhbnNsYXRlWic7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uIChzdGF0ZSwgZGlzYWJsZUhhcmR3YXJlQWNjZWxlcmF0aW9uKSB7XG4gIHZhciBwcm9wZXJ0eVN0cmluZyA9ICcnO1xuICB2YXIgdHJhbnNmb3JtU3RyaW5nID0gJyc7XG4gIHZhciB0cmFuc2Zvcm1IYXNaID0gZmFsc2U7XG5cbiAgZm9yICh2YXIga2V5IGluIHN0YXRlKSB7XG4gICAgaWYgKHN0YXRlLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgIHZhciB2YWx1ZSA9IHN0YXRlW2tleV07XG5cbiAgICAgIGlmIChfdHJhbnNmb3JtUHJvcHMyLmRlZmF1bHRba2V5XSkge1xuICAgICAgICB0cmFuc2Zvcm1TdHJpbmcgKz0ga2V5ICsgJygnICsgdmFsdWUgKyAnKSAnO1xuICAgICAgICB0cmFuc2Zvcm1IYXNaID0ga2V5ID09PSBUUkFOU0xBVEVfWiA/IHRydWUgOiB0cmFuc2Zvcm1IYXNaO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcHJvcGVydHlTdHJpbmcgKz0gJzsnICsgKDAsIF9wcmVmaXhlcjIuZGVmYXVsdCkoa2V5LCB0cnVlKSArICc6JyArIHZhbHVlO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGlmICh0cmFuc2Zvcm1TdHJpbmcgIT09ICcnKSB7XG4gICAgaWYgKCF0cmFuc2Zvcm1IYXNaICYmICFkaXNhYmxlSGFyZHdhcmVBY2NlbGVyYXRpb24pIHtcbiAgICAgIHRyYW5zZm9ybVN0cmluZyArPSBUUkFOU0xBVEVfWiArICcoMHB4KSc7XG4gICAgfVxuXG4gICAgcHJvcGVydHlTdHJpbmcgKz0gJzsnICsgKDAsIF9wcmVmaXhlcjIuZGVmYXVsdCkoJ3RyYW5zZm9ybScsIHRydWUpICsgJzonICsgdHJhbnNmb3JtU3RyaW5nO1xuICB9XG5cbiAgcmV0dXJuIHByb3BlcnR5U3RyaW5nO1xufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbk55WXk5aFpHRndkR1Z5TDJOemN5OWlkV2xzWkM1cWN5SmRMQ0p1WVcxbGN5STZXMTBzSW0xaGNIQnBibWR6SWpvaU96czdPMEZCUVVFN096czdRVUZEUVRzN096czdPMEZCUlVFc1NVRkJUU3hqUVVGakxGbEJRV1E3TzJ0Q1FVVlRMRlZCUVVNc1MwRkJSQ3hGUVVGUkxESkNRVUZTTEVWQlFYZERPMEZCUTNKRUxFMUJRVWtzYVVKQlFXbENMRVZCUVdwQ0xFTkJSR2xFTzBGQlJYSkVMRTFCUVVrc2EwSkJRV3RDTEVWQlFXeENMRU5CUm1sRU8wRkJSM0pFTEUxQlFVa3NaMEpCUVdkQ0xFdEJRV2hDTEVOQlNHbEVPenRCUVV0eVJDeFBRVUZMTEVsQlFVa3NSMEZCU2l4SlFVRlhMRXRCUVdoQ0xFVkJRWFZDTzBGQlEzSkNMRkZCUVVrc1RVRkJUU3hqUVVGT0xFTkJRWEZDTEVkQlFYSkNMRU5CUVVvc1JVRkJLMEk3UVVGRE4wSXNWVUZCVFN4UlFVRlJMRTFCUVUwc1IwRkJUaXhEUVVGU0xFTkJSSFZDT3p0QlFVYzNRaXhWUVVGSkxIbENRVUZsTEVkQlFXWXNRMEZCU2l4RlFVRjVRanRCUVVOMlFpd3lRa0ZCYlVJc1RVRkJUU3hIUVVGT0xFZEJRVmtzUzBGQldpeEhRVUZ2UWl4SlFVRndRaXhEUVVSSk8wRkJSWFpDTEhkQ1FVRm5RaXhIUVVGRExFdEJRVkVzVjBGQlVpeEhRVUYxUWl4SlFVRjRRaXhIUVVFclFpeGhRVUV2UWl4RFFVWlBPMDlCUVhwQ0xFMUJTVTg3UVVGRFRDd3dRa0ZCYTBJc1RVRkJUU3gzUWtGQlV5eEhRVUZVTEVWQlFXTXNTVUZCWkN4RFFVRk9MRWRCUVRSQ0xFZEJRVFZDTEVkQlFXdERMRXRCUVd4RExFTkJSR0k3VDBGS1VEdExRVWhHTzBkQlJFWTdPMEZCWTBFc1RVRkJTU3h2UWtGQmIwSXNSVUZCY0VJc1JVRkJkMEk3UVVGRE1VSXNVVUZCU1N4RFFVRkRMR0ZCUVVRc1NVRkJhMElzUTBGQlF5d3lRa0ZCUkN4RlFVRTRRanRCUVVOc1JDeDVRa0ZCYlVJc1kwRkJZeXhQUVVGa0xFTkJSQ3RDTzB0QlFYQkVPenRCUVVsQkxITkNRVUZyUWl4TlFVRk5MSGRDUVVGVExGZEJRVlFzUlVGQmMwSXNTVUZCZEVJc1EwRkJUaXhIUVVGdlF5eEhRVUZ3UXl4SFFVRXdReXhsUVVFeFF5eERRVXhSTzBkQlFUVkNPenRCUVZGQkxGTkJRVThzWTBGQlVDeERRVE5DY1VRN1EwRkJlRU1pTENKbWFXeGxJam9pWW5WcGJHUXVhbk1pTENKemIzVnlZMlZTYjI5MElqb2lMMVZ6WlhKekwwMWhkSFF2VTJsMFpYTXZjRzl3Ylc5MGFXOXVJaXdpYzI5MWNtTmxjME52Ym5SbGJuUWlPbHNpYVcxd2IzSjBJSFJ5WVc1elptOXliVkJ5YjNCeklHWnliMjBnSnk0dmRISmhibk5tYjNKdExYQnliM0J6Snp0Y2JtbHRjRzl5ZENCd2NtVm1hWGhsY2lCbWNtOXRJQ2N1TDNCeVpXWnBlR1Z5Snp0Y2JseHVZMjl1YzNRZ1ZGSkJUbE5NUVZSRlgxb2dQU0FuZEhKaGJuTnNZWFJsV2ljN1hHNWNibVY0Y0c5eWRDQmtaV1poZFd4MElDaHpkR0YwWlN3Z1pHbHpZV0pzWlVoaGNtUjNZWEpsUVdOalpXeGxjbUYwYVc5dUtTQTlQaUI3WEc0Z0lHeGxkQ0J3Y205d1pYSjBlVk4wY21sdVp5QTlJQ2NuTzF4dUlDQnNaWFFnZEhKaGJuTm1iM0p0VTNSeWFXNW5JRDBnSnljN1hHNGdJR3hsZENCMGNtRnVjMlp2Y20xSVlYTmFJRDBnWm1Gc2MyVTdYRzVjYmlBZ1ptOXlJQ2hzWlhRZ2EyVjVJR2x1SUhOMFlYUmxLU0I3WEc0Z0lDQWdhV1lnS0hOMFlYUmxMbWhoYzA5M2JsQnliM0JsY25SNUtHdGxlU2twSUh0Y2JpQWdJQ0FnSUdOdmJuTjBJSFpoYkhWbElEMGdjM1JoZEdWYmEyVjVYVHRjYmx4dUlDQWdJQ0FnYVdZZ0tIUnlZVzV6Wm05eWJWQnliM0J6VzJ0bGVWMHBJSHRjYmlBZ0lDQWdJQ0FnZEhKaGJuTm1iM0p0VTNSeWFXNW5JQ3M5SUd0bGVTQXJJQ2NvSnlBcklIWmhiSFZsSUNzZ0p5a2dKenRjYmlBZ0lDQWdJQ0FnZEhKaGJuTm1iM0p0U0dGeldpQTlJQ2hyWlhrZ1BUMDlJRlJTUVU1VFRFRlVSVjlhS1NBL0lIUnlkV1VnT2lCMGNtRnVjMlp2Y20xSVlYTmFPMXh1WEc0Z0lDQWdJQ0I5SUdWc2MyVWdlMXh1SUNBZ0lDQWdJQ0J3Y205d1pYSjBlVk4wY21sdVp5QXJQU0FuT3ljZ0t5QndjbVZtYVhobGNpaHJaWGtzSUhSeWRXVXBJQ3NnSnpvbklDc2dkbUZzZFdVN1hHNGdJQ0FnSUNCOVhHNGdJQ0FnZlZ4dUlDQjlYRzVjYmlBZ2FXWWdLSFJ5WVc1elptOXliVk4wY21sdVp5QWhQVDBnSnljcElIdGNiaUFnSUNCcFppQW9JWFJ5WVc1elptOXliVWhoYzFvZ0ppWWdJV1JwYzJGaWJHVklZWEprZDJGeVpVRmpZMlZzWlhKaGRHbHZiaWtnZTF4dUlDQWdJQ0FnZEhKaGJuTm1iM0p0VTNSeWFXNW5JQ3M5SUZSU1FVNVRURUZVUlY5YUlDc2dKeWd3Y0hncEp6dGNiaUFnSUNCOVhHNWNiaUFnSUNCd2NtOXdaWEowZVZOMGNtbHVaeUFyUFNBbk95Y2dLeUJ3Y21WbWFYaGxjaWduZEhKaGJuTm1iM0p0Snl3Z2RISjFaU2tnS3lBbk9pY2dLeUIwY21GdWMyWnZjbTFUZEhKcGJtYzdYRzRnSUgxY2JseHVJQ0J5WlhSMWNtNGdjSEp2Y0dWeWRIbFRkSEpwYm1jN1hHNTlPeUpkZlE9PVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvYWRhcHRlci9jc3MvYnVpbGQuanNcbiAqKiBtb2R1bGUgaWQgPSA0MlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX3V0aWxzID0gcmVxdWlyZSgnLi4vLi4vaW5jL3V0aWxzJyk7XG5cbnZhciBjYW1lbENhY2hlID0ge307XG52YXIgZGFzaENhY2hlID0ge307XG52YXIgcHJlZml4ZXMgPSBbJ1dlYmtpdCcsICdNb3onLCAnTycsICdtcycsICcnXTtcbnZhciBudW1QcmVmaXhlcyA9IHByZWZpeGVzLmxlbmd0aDtcbnZhciB0ZXN0RWxlbWVudCA9IHZvaWQgMDtcblxuLypcbiAgVGVzdCBzdHlsZSBwcm9wZXJ0eSBmb3IgcHJlZml4ZWQgdmVyc2lvblxuICBcbiAgQHBhcmFtIFtzdHJpbmddOiBTdHlsZSBwcm9wZXJ0eVxuICBAcmV0dXJuIFtzdHJpbmddOiBDYWNoZWQgcHJvcGVydHkgbmFtZVxuKi9cbnZhciB0ZXN0UHJlZml4ID0gZnVuY3Rpb24gKGtleSkge1xuICB0ZXN0RWxlbWVudCA9IHRlc3RFbGVtZW50IHx8IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbnVtUHJlZml4ZXM7IGkrKykge1xuICAgIHZhciBwcmVmaXggPSBwcmVmaXhlc1tpXTtcbiAgICB2YXIgbm9QcmVmaXggPSBwcmVmaXggPT09ICcnO1xuICAgIHZhciBwcmVmaXhlZFByb3BlcnR5TmFtZSA9IG5vUHJlZml4ID8ga2V5IDogcHJlZml4ICsga2V5LmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsga2V5LnNsaWNlKDEpO1xuXG4gICAgaWYgKHByZWZpeGVkUHJvcGVydHlOYW1lIGluIHRlc3RFbGVtZW50LnN0eWxlKSB7XG4gICAgICBjYW1lbENhY2hlW2tleV0gPSBwcmVmaXhlZFByb3BlcnR5TmFtZTtcbiAgICAgIGRhc2hDYWNoZVtrZXldID0gJycgKyAobm9QcmVmaXggPyAnJyA6ICctJykgKyAoMCwgX3V0aWxzLmNhbWVsVG9EYXNoKShwcmVmaXhlZFByb3BlcnR5TmFtZSk7XG4gICAgfVxuICB9XG59O1xuXG5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbiAoa2V5LCBhc0Rhc2hDYXNlKSB7XG4gIHZhciBjYWNoZSA9IGFzRGFzaENhc2UgPyBkYXNoQ2FjaGUgOiBjYW1lbENhY2hlO1xuXG4gIGlmICghY2FjaGVba2V5XSkge1xuICAgIHRlc3RQcmVmaXgoa2V5KTtcbiAgfVxuXG4gIHJldHVybiBjYWNoZVtrZXldO1xufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbk55WXk5aFpHRndkR1Z5TDJOemN5OXdjbVZtYVhobGNpNXFjeUpkTENKdVlXMWxjeUk2VzEwc0ltMWhjSEJwYm1keklqb2lPenM3TzBGQlFVRTdPMEZCUlVFc1NVRkJUU3hoUVVGaExFVkJRV0k3UVVGRFRpeEpRVUZOTEZsQlFWa3NSVUZCV2p0QlFVTk9MRWxCUVUwc1YwRkJWeXhEUVVGRExGRkJRVVFzUlVGQlZTeExRVUZXTEVWQlFXZENMRWRCUVdoQ0xFVkJRVzlDTEVsQlFYQkNMRVZCUVRCQ0xFVkJRVEZDTEVOQlFWZzdRVUZEVGl4SlFVRk5MR05CUVdNc1UwRkJVeXhOUVVGVU8wRkJRM0JDTEVsQlFVa3NiMEpCUVVvN096czdPenM3TzBGQlVVRXNTVUZCVFN4aFFVRmhMRlZCUVVNc1IwRkJSQ3hGUVVGVE8wRkJRekZDTEdkQ1FVRmpMR1ZCUVdVc1UwRkJVeXhoUVVGVUxFTkJRWFZDTEV0QlFYWkNMRU5CUVdZc1EwRkVXVHM3UVVGSE1VSXNUMEZCU3l4SlFVRkpMRWxCUVVrc1EwRkJTaXhGUVVGUExFbEJRVWtzVjBGQlNpeEZRVUZwUWl4SFFVRnFReXhGUVVGelF6dEJRVU53UXl4UlFVRk5MRk5CUVZNc1UwRkJVeXhEUVVGVUxFTkJRVlFzUTBGRU9FSTdRVUZGY0VNc1VVRkJUU3hYUVVGWkxGZEJRVmNzUlVGQldDeERRVVpyUWp0QlFVZHdReXhSUVVGTkxIVkNRVUYxUWl4WFFVRlhMRWRCUVZnc1IwRkJhVUlzVTBGQlV5eEpRVUZKTEUxQlFVb3NRMEZCVnl4RFFVRllMRVZCUVdNc1YwRkJaQ3hGUVVGVUxFZEJRWFZETEVsQlFVa3NTMEZCU2l4RFFVRlZMRU5CUVZZc1EwRkJka01zUTBGSVZqczdRVUZMY0VNc1VVRkJTU3gzUWtGQmQwSXNXVUZCV1N4TFFVRmFMRVZCUVcxQ08wRkJRemRETEdsQ1FVRlhMRWRCUVZnc1NVRkJhMElzYjBKQlFXeENMRU5CUkRaRE8wRkJSVGRETEdkQ1FVRlZMRWRCUVZZc1ZVRkJjVUlzVjBGQlZ5eEZRVUZZTEVkQlFXZENMRWRCUVdoQ0xFbEJRWFZDTEhkQ1FVRlpMRzlDUVVGYUxFTkJRVFZETEVOQlJqWkRPMHRCUVM5RE8wZEJURVk3UTBGSWFVSTdPMnRDUVdWS0xGVkJRVU1zUjBGQlJDeEZRVUZOTEZWQlFVNHNSVUZCY1VJN1FVRkRiRU1zVFVGQlRTeFJRVUZSTEdGQlFXRXNVMEZCWWl4SFFVRjVRaXhWUVVGNlFpeERRVVJ2UWpzN1FVRkhiRU1zVFVGQlNTeERRVUZETEUxQlFVMHNSMEZCVGl4RFFVRkVMRVZCUVdFN1FVRkRaaXhsUVVGWExFZEJRVmdzUlVGRVpUdEhRVUZxUWpzN1FVRkpRU3hUUVVGUExFMUJRVTBzUjBGQlRpeERRVUZRTEVOQlVHdERPME5CUVhKQ0lpd2labWxzWlNJNkluQnlaV1pwZUdWeUxtcHpJaXdpYzI5MWNtTmxVbTl2ZENJNklpOVZjMlZ5Y3k5TllYUjBMMU5wZEdWekwzQnZjRzF2ZEdsdmJpSXNJbk52ZFhKalpYTkRiMjUwWlc1MElqcGJJbWx0Y0c5eWRDQjdJR05oYldWc1ZHOUVZWE5vSUgwZ1puSnZiU0FuTGk0dkxpNHZhVzVqTDNWMGFXeHpKenRjYmx4dVkyOXVjM1FnWTJGdFpXeERZV05vWlNBOUlIdDlPMXh1WTI5dWMzUWdaR0Z6YUVOaFkyaGxJRDBnZTMwN1hHNWpiMjV6ZENCd2NtVm1hWGhsY3lBOUlGc25WMlZpYTJsMEp5d25UVzk2Snl3blR5Y3NKMjF6Snl3Z0p5ZGRPMXh1WTI5dWMzUWdiblZ0VUhKbFptbDRaWE1nUFNCd2NtVm1hWGhsY3k1c1pXNW5kR2c3WEc1c1pYUWdkR1Z6ZEVWc1pXMWxiblE3WEc1Y2JpOHFYRzRnSUZSbGMzUWdjM1I1YkdVZ2NISnZjR1Z5ZEhrZ1ptOXlJSEJ5WldacGVHVmtJSFpsY25OcGIyNWNiaUFnWEc0Z0lFQndZWEpoYlNCYmMzUnlhVzVuWFRvZ1UzUjViR1VnY0hKdmNHVnlkSGxjYmlBZ1FISmxkSFZ5YmlCYmMzUnlhVzVuWFRvZ1EyRmphR1ZrSUhCeWIzQmxjblI1SUc1aGJXVmNiaW92WEc1amIyNXpkQ0IwWlhOMFVISmxabWw0SUQwZ0tHdGxlU2tnUFQ0Z2UxeHVJQ0IwWlhOMFJXeGxiV1Z1ZENBOUlIUmxjM1JGYkdWdFpXNTBJSHg4SUdSdlkzVnRaVzUwTG1OeVpXRjBaVVZzWlcxbGJuUW9KMlJwZGljcE8xeHVYRzRnSUdadmNpQW9iR1YwSUdrZ1BTQXdPeUJwSUR3Z2JuVnRVSEpsWm1sNFpYTTdJR2tyS3lrZ2UxeHVJQ0FnSUdOdmJuTjBJSEJ5WldacGVDQTlJSEJ5WldacGVHVnpXMmxkTzF4dUlDQWdJR052Ym5OMElHNXZVSEpsWm1sNElEMGdLSEJ5WldacGVDQTlQVDBnSnljcE8xeHVJQ0FnSUdOdmJuTjBJSEJ5WldacGVHVmtVSEp2Y0dWeWRIbE9ZVzFsSUQwZ2JtOVFjbVZtYVhnZ1B5QnJaWGtnT2lCd2NtVm1hWGdnS3lCclpYa3VZMmhoY2tGMEtEQXBMblJ2VlhCd1pYSkRZWE5sS0NrZ0t5QnJaWGt1YzJ4cFkyVW9NU2s3WEc1Y2JpQWdJQ0JwWmlBb2NISmxabWw0WldSUWNtOXdaWEowZVU1aGJXVWdhVzRnZEdWemRFVnNaVzFsYm5RdWMzUjViR1VwSUh0Y2JpQWdJQ0FnSUdOaGJXVnNRMkZqYUdWYmEyVjVYU0E5SUhCeVpXWnBlR1ZrVUhKdmNHVnlkSGxPWVcxbE8xeHVJQ0FnSUNBZ1pHRnphRU5oWTJobFcydGxlVjBnUFNCZ0pIc29ibTlRY21WbWFYZ2dQeUFuSnlBNklDY3RKeWw5Skh0allXMWxiRlJ2UkdGemFDaHdjbVZtYVhobFpGQnliM0JsY25SNVRtRnRaU2w5WUR0Y2JpQWdJQ0I5WEc0Z0lIMWNibjA3WEc1Y2JtVjRjRzl5ZENCa1pXWmhkV3gwSUNoclpYa3NJR0Z6UkdGemFFTmhjMlVwSUQwK0lIdGNiaUFnWTI5dWMzUWdZMkZqYUdVZ1BTQmhjMFJoYzJoRFlYTmxJRDhnWkdGemFFTmhZMmhsSURvZ1kyRnRaV3hEWVdOb1pUdGNibHh1SUNCcFppQW9JV05oWTJobFcydGxlVjBwSUh0Y2JpQWdJQ0IwWlhOMFVISmxabWw0S0d0bGVTazdYRzRnSUgxY2JseHVJQ0J5WlhSMWNtNGdZMkZqYUdWYmEyVjVYVHRjYm4wN1hHNGlYWDA9XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9hZGFwdGVyL2Nzcy9wcmVmaXhlci5qc1xuICoqIG1vZHVsZSBpZCA9IDQzXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfZGljdGlvbmFyeSA9IHJlcXVpcmUoJy4uLy4uL3ZhbHVlLXR5cGVzL3NldHRpbmdzL2RpY3Rpb25hcnknKTtcblxudmFyIHRyYW5zZm9ybVByb3BzID0ge307XG5cbnZhciBTQ0FMRSA9ICdzY2FsZSc7XG52YXIgUk9UQVRFID0gJ3JvdGF0ZSc7XG52YXIgVFJBTlNGT1JNX1BFUlNQRUNUSVZFID0gJ3RyYW5zZm9ybVBlcnNwZWN0aXZlJztcbnZhciBURVJNUyA9IFsndHJhbnNsYXRlJywgU0NBTEUsIFJPVEFURSwgJ3NrZXcnLCBUUkFOU0ZPUk1fUEVSU1BFQ1RJVkVdO1xuXG50cmFuc2Zvcm1Qcm9wc1tST1RBVEVdID0gdHJhbnNmb3JtUHJvcHNbU0NBTEVdID0gdHJhbnNmb3JtUHJvcHNbVFJBTlNGT1JNX1BFUlNQRUNUSVZFXSA9IHRydWU7XG5cblRFUk1TLmZvckVhY2goZnVuY3Rpb24gKHRlcm0pIHtcbiAgcmV0dXJuIF9kaWN0aW9uYXJ5LmF4ZXMuZm9yRWFjaChmdW5jdGlvbiAoYXhpcykge1xuICAgIHJldHVybiB0cmFuc2Zvcm1Qcm9wc1t0ZXJtICsgYXhpc10gPSB0cnVlO1xuICB9KTtcbn0pO1xuXG5leHBvcnRzLmRlZmF1bHQgPSB0cmFuc2Zvcm1Qcm9wcztcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbk55WXk5aFpHRndkR1Z5TDJOemN5OTBjbUZ1YzJadmNtMHRjSEp2Y0hNdWFuTWlYU3dpYm1GdFpYTWlPbHRkTENKdFlYQndhVzVuY3lJNklqczdPenRCUVVGQk96dEJRVVZCTEVsQlFVa3NhVUpCUVdsQ0xFVkJRV3BDT3p0QlFVVktMRWxCUVUwc1VVRkJVU3hQUVVGU08wRkJRMDRzU1VGQlRTeFRRVUZUTEZGQlFWUTdRVUZEVGl4SlFVRk5MSGRDUVVGM1FpeHpRa0ZCZUVJN1FVRkRUaXhKUVVGTkxGRkJRVkVzUTBGQlF5eFhRVUZFTEVWQlFXTXNTMEZCWkN4RlFVRnhRaXhOUVVGeVFpeEZRVUUyUWl4TlFVRTNRaXhGUVVGeFF5eHhRa0ZCY2tNc1EwRkJVanM3UVVGRlRpeGxRVUZsTEUxQlFXWXNTVUZCZVVJc1pVRkJaU3hMUVVGbUxFbEJRWGRDTEdWQlFXVXNjVUpCUVdZc1NVRkJkME1zU1VGQmVFTTdPMEZCUldwRUxFMUJRVTBzVDBGQlRpeERRVUZqTEZWQlFVTXNTVUZCUkR0VFFVRlZMR2xDUVVGTExFOUJRVXdzUTBGQllTeFZRVUZETEVsQlFVUTdWMEZCVlN4bFFVRmxMRTlCUVU4c1NVRkJVQ3hEUVVGbUxFZEJRVGhDTEVsQlFUbENPMGRCUVZZN1EwRkJka0lzUTBGQlpEczdhMEpCUldVaUxDSm1hV3hsSWpvaWRISmhibk5tYjNKdExYQnliM0J6TG1weklpd2ljMjkxY21ObFVtOXZkQ0k2SWk5VmMyVnljeTlOWVhSMEwxTnBkR1Z6TDNCdmNHMXZkR2x2YmlJc0luTnZkWEpqWlhORGIyNTBaVzUwSWpwYkltbHRjRzl5ZENCN0lHRjRaWE1nZlNCbWNtOXRJQ2N1TGk4dUxpOTJZV3gxWlMxMGVYQmxjeTl6WlhSMGFXNW5jeTlrYVdOMGFXOXVZWEo1Snp0Y2JseHViR1YwSUhSeVlXNXpabTl5YlZCeWIzQnpJRDBnZTMwN1hHNWNibU52Ym5OMElGTkRRVXhGSUQwZ0ozTmpZV3hsSnp0Y2JtTnZibk4wSUZKUFZFRlVSU0E5SUNkeWIzUmhkR1VuTzF4dVkyOXVjM1FnVkZKQlRsTkdUMUpOWDFCRlVsTlFSVU5VU1ZaRklEMGdKM1J5WVc1elptOXliVkJsY25Od1pXTjBhWFpsSnp0Y2JtTnZibk4wSUZSRlVrMVRJRDBnV3lkMGNtRnVjMnhoZEdVbkxDQlRRMEZNUlN3Z1VrOVVRVlJGTENBbmMydGxkeWNzSUZSU1FVNVRSazlTVFY5UVJWSlRVRVZEVkVsV1JWMDdYRzVjYm5SeVlXNXpabTl5YlZCeWIzQnpXMUpQVkVGVVJWMGdQU0IwY21GdWMyWnZjbTFRY205d2MxdFRRMEZNUlYwZ1BTQjBjbUZ1YzJadmNtMVFjbTl3YzF0VVVrRk9VMFpQVWsxZlVFVlNVMUJGUTFSSlZrVmRJRDBnZEhKMVpUdGNibHh1VkVWU1RWTXVabTl5UldGamFDZ29kR1Z5YlNrZ1BUNGdZWGhsY3k1bWIzSkZZV05vS0NoaGVHbHpLU0E5UGlCMGNtRnVjMlp2Y20xUWNtOXdjMXQwWlhKdElDc2dZWGhwYzEwZ1BTQjBjblZsS1NrN1hHNWNibVY0Y0c5eWRDQmtaV1poZFd4MElIUnlZVzV6Wm05eWJWQnliM0J6T3lKZGZRPT1cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2FkYXB0ZXIvY3NzL3RyYW5zZm9ybS1wcm9wcy5qc1xuICoqIG1vZHVsZSBpZCA9IDQ0XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfYWxwaGEgPSByZXF1aXJlKCcuLi8uLi92YWx1ZS10eXBlcy9hbHBoYScpO1xuXG52YXIgX2FscGhhMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2FscGhhKTtcblxudmFyIF9jb2xvciA9IHJlcXVpcmUoJy4uLy4uL3ZhbHVlLXR5cGVzL2NvbG9yJyk7XG5cbnZhciBfY29sb3IyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY29sb3IpO1xuXG52YXIgX2NvbXBsZXggPSByZXF1aXJlKCcuLi8uLi92YWx1ZS10eXBlcy9jb21wbGV4Jyk7XG5cbnZhciBfY29tcGxleDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jb21wbGV4KTtcblxudmFyIF9zY2FsZSA9IHJlcXVpcmUoJy4uLy4uL3ZhbHVlLXR5cGVzL3NjYWxlJyk7XG5cbnZhciBfc2NhbGUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfc2NhbGUpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5leHBvcnRzLmRlZmF1bHQgPSB7XG4gIGZpbGw6IF9jb2xvcjIuZGVmYXVsdCxcbiAgc3Ryb2tlOiBfY29sb3IyLmRlZmF1bHQsXG4gIHNjYWxlOiBfc2NhbGUyLmRlZmF1bHQsXG4gIHNjYWxlWDogX3NjYWxlMi5kZWZhdWx0LFxuICBzY2FsZVk6IF9zY2FsZTIuZGVmYXVsdCxcbiAgZDogX2NvbXBsZXgyLmRlZmF1bHQsXG4gIHBvaW50czogX2NvbXBsZXgyLmRlZmF1bHQsXG4gIG9wYWNpdHk6IF9hbHBoYTIuZGVmYXVsdCxcbiAgZmlsbE9wYWNpdHk6IF9hbHBoYTIuZGVmYXVsdCxcbiAgc3Ryb2tlT3BhY2l0eTogX2FscGhhMi5kZWZhdWx0XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluTnlZeTloWkdGd2RHVnlMM04yWnk5MllXeDFaUzEwZVhCbExXMWhjQzVxY3lKZExDSnVZVzFsY3lJNlcxMHNJbTFoY0hCcGJtZHpJam9pT3pzN08wRkJRVUU3T3pzN1FVRkRRVHM3T3p0QlFVTkJPenM3TzBGQlEwRTdPenM3T3p0clFrRkZaVHRCUVVOaUxIVkNRVVJoTzBGQlJXSXNlVUpCUm1FN1FVRkhZaXgzUWtGSVlUdEJRVWxpTEhsQ1FVcGhPMEZCUzJJc2VVSkJUR0U3UVVGTllpeHpRa0ZPWVR0QlFVOWlMREpDUVZCaE8wRkJVV0lzTUVKQlVtRTdRVUZUWWl3NFFrRlVZVHRCUVZWaUxHZERRVlpoSWl3aVptbHNaU0k2SW5aaGJIVmxMWFI1Y0dVdGJXRndMbXB6SWl3aWMyOTFjbU5sVW05dmRDSTZJaTlWYzJWeWN5OU5ZWFIwTDFOcGRHVnpMM0J2Y0cxdmRHbHZiaUlzSW5OdmRYSmpaWE5EYjI1MFpXNTBJanBiSW1sdGNHOXlkQ0JoYkhCb1lTQm1jbTl0SUNjdUxpOHVMaTkyWVd4MVpTMTBlWEJsY3k5aGJIQm9ZU2M3WEc1cGJYQnZjblFnWTI5c2IzSWdabkp2YlNBbkxpNHZMaTR2ZG1Gc2RXVXRkSGx3WlhNdlkyOXNiM0luTzF4dWFXMXdiM0owSUdOdmJYQnNaWGdnWm5KdmJTQW5MaTR2TGk0dmRtRnNkV1V0ZEhsd1pYTXZZMjl0Y0d4bGVDYzdYRzVwYlhCdmNuUWdjMk5oYkdVZ1puSnZiU0FuTGk0dkxpNHZkbUZzZFdVdGRIbHdaWE12YzJOaGJHVW5PMXh1WEc1bGVIQnZjblFnWkdWbVlYVnNkQ0I3WEc0Z0lHWnBiR3c2SUdOdmJHOXlMRnh1SUNCemRISnZhMlU2SUdOdmJHOXlMRnh1SUNCelkyRnNaVG9nYzJOaGJHVXNYRzRnSUhOallXeGxXRG9nYzJOaGJHVXNYRzRnSUhOallXeGxXVG9nYzJOaGJHVXNYRzRnSUdRNklHTnZiWEJzWlhnc1hHNGdJSEJ2YVc1MGN6b2dZMjl0Y0d4bGVDeGNiaUFnYjNCaFkybDBlVG9nWVd4d2FHRXNYRzRnSUdacGJHeFBjR0ZqYVhSNU9pQmhiSEJvWVN4Y2JpQWdjM1J5YjJ0bFQzQmhZMmwwZVRvZ1lXeHdhR0ZjYm4wN0lsMTlcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2FkYXB0ZXIvc3ZnL3ZhbHVlLXR5cGUtbWFwLmpzXG4gKiogbW9kdWxlIGlkID0gNDVcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHMuZGVmYXVsdCA9IGJ1aWxkO1xuXG52YXIgX3V0aWxzID0gcmVxdWlyZSgnLi4vLi4vaW5jL3V0aWxzJyk7XG5cbnZhciBfdHJhbnNmb3JtUHJvcHMgPSByZXF1aXJlKCcuLi9jc3MvdHJhbnNmb3JtLXByb3BzJyk7XG5cbnZhciBfdHJhbnNmb3JtUHJvcHMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfdHJhbnNmb3JtUHJvcHMpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG52YXIgWkVST19OT1RfWkVSTyA9IDAuMDAwMTtcblxuZnVuY3Rpb24gYnVpbGQoc3RhdGUsIGRhdGEpIHtcbiAgdmFyIGhhc1RyYW5zZm9ybSA9IGZhbHNlO1xuICB2YXIgcHJvcHMgPSB7fTtcbiAgdmFyIHNjYWxlID0gc3RhdGUuc2NhbGUgIT09IHVuZGVmaW5lZCA/IHN0YXRlLnNjYWxlIHx8IFpFUk9fTk9UX1pFUk8gOiBzdGF0ZS5zY2FsZVggfHwgMTtcbiAgdmFyIHNjYWxlWSA9IHN0YXRlLnNjYWxlWSAhPT0gdW5kZWZpbmVkID8gc3RhdGUuc2NhbGVZIHx8IFpFUk9fTk9UX1pFUk8gOiBzY2FsZSB8fCAxO1xuICB2YXIgdHJhbnNmb3JtT3JpZ2luWCA9IGRhdGEud2lkdGggKiAoKHN0YXRlLm9yaWdpblggfHwgNTApIC8gMTAwKSArIGRhdGEueDtcbiAgdmFyIHRyYW5zZm9ybU9yaWdpblkgPSBkYXRhLmhlaWdodCAqICgoc3RhdGUub3JpZ2luWSB8fCA1MCkgLyAxMDApICsgZGF0YS55O1xuICB2YXIgc2NhbGVUcmFuc2Zvcm1YID0gLXRyYW5zZm9ybU9yaWdpblggKiAoc2NhbGUgKiAxKTtcbiAgdmFyIHNjYWxlVHJhbnNmb3JtWSA9IC10cmFuc2Zvcm1PcmlnaW5ZICogKHNjYWxlWSAqIDEpO1xuICB2YXIgc2NhbGVSZXBsYWNlWCA9IHRyYW5zZm9ybU9yaWdpblggLyBzY2FsZTtcbiAgdmFyIHNjYWxlUmVwbGFjZVkgPSB0cmFuc2Zvcm1PcmlnaW5ZIC8gc2NhbGVZO1xuICB2YXIgdHJhbnNmb3JtID0ge1xuICAgIHRyYW5zbGF0ZTogJ3RyYW5zbGF0ZSgnICsgc3RhdGUudHJhbnNsYXRlWCArICcsICcgKyBzdGF0ZS50cmFuc2xhdGVZICsgJykgJyxcbiAgICBzY2FsZTogJ3RyYW5zbGF0ZSgnICsgc2NhbGVUcmFuc2Zvcm1YICsgJywgJyArIHNjYWxlVHJhbnNmb3JtWSArICcpIHNjYWxlKCcgKyBzY2FsZSArICcsICcgKyBzY2FsZVkgKyAnKSB0cmFuc2xhdGUoJyArIHNjYWxlUmVwbGFjZVggKyAnLCAnICsgc2NhbGVSZXBsYWNlWSArICcpICcsXG4gICAgcm90YXRlOiAncm90YXRlKCcgKyBzdGF0ZS5yb3RhdGUgKyAnLCAnICsgdHJhbnNmb3JtT3JpZ2luWCArICcsICcgKyB0cmFuc2Zvcm1PcmlnaW5ZICsgJykgJyxcbiAgICBza2V3WDogJ3NrZXdYKCcgKyBzdGF0ZS5za2V3WCArICcpICcsXG4gICAgc2tld1k6ICdza2V3WSgnICsgc3RhdGUuc2tld1kgKyAnKSAnXG4gIH07XG5cbiAgZm9yICh2YXIga2V5IGluIHN0YXRlKSB7XG4gICAgaWYgKHN0YXRlLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgIGlmIChfdHJhbnNmb3JtUHJvcHMyLmRlZmF1bHRba2V5XSkge1xuICAgICAgICBoYXNUcmFuc2Zvcm0gPSB0cnVlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcHJvcHNbKDAsIF91dGlscy5jYW1lbFRvRGFzaCkoa2V5KV0gPSBzdGF0ZVtrZXldO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGlmIChoYXNUcmFuc2Zvcm0pIHtcbiAgICBwcm9wcy50cmFuc2Zvcm0gPSAnJztcblxuICAgIGZvciAodmFyIF9rZXkgaW4gdHJhbnNmb3JtKSB7XG4gICAgICBpZiAodHJhbnNmb3JtLmhhc093blByb3BlcnR5KF9rZXkpKSB7XG4gICAgICAgIHZhciBkZWZhdWx0VmFsdWUgPSBfa2V5ID09PSAnc2NhbGUnID8gJzEnIDogJzAnO1xuICAgICAgICBwcm9wcy50cmFuc2Zvcm0gKz0gdHJhbnNmb3JtW19rZXldLnJlcGxhY2UoL3VuZGVmaW5lZC9nLCBkZWZhdWx0VmFsdWUpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBwcm9wcztcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbk55WXk5aFpHRndkR1Z5TDNOMlp5OWlkV2xzWkM1cWN5SmRMQ0p1WVcxbGN5STZXMTBzSW0xaGNIQnBibWR6SWpvaU96czdhMEpCUzNkQ096dEJRVXg0UWpzN1FVRkRRVHM3T3pzN08wRkJSVUVzU1VGQlRTeG5Ra0ZCWjBJc1RVRkJhRUk3TzBGQlJWTXNVMEZCVXl4TFFVRlVMRU5CUVdVc1MwRkJaaXhGUVVGelFpeEpRVUYwUWl4RlFVRTBRanRCUVVONlF5eE5RVUZKTEdWQlFXVXNTMEZCWml4RFFVUnhRenRCUVVWNlF5eE5RVUZOTEZGQlFWRXNSVUZCVWl4RFFVWnRRenRCUVVkNlF5eE5RVUZOTEZGQlFWRXNUVUZCVFN4TFFVRk9MRXRCUVdkQ0xGTkJRV2hDTEVkQlFUUkNMRTFCUVUwc1MwRkJUaXhKUVVGbExHRkJRV1lzUjBGQkswSXNUVUZCVFN4TlFVRk9MRWxCUVdkQ0xFTkJRV2hDTEVOQlNHaERPMEZCU1hwRExFMUJRVTBzVTBGQlV5eE5RVUZOTEUxQlFVNHNTMEZCYVVJc1UwRkJha0lzUjBGQk5rSXNUVUZCVFN4TlFVRk9MRWxCUVdkQ0xHRkJRV2hDTEVkQlFXZERMRk5CUVZNc1EwRkJWQ3hEUVVwdVF6dEJRVXQ2UXl4TlFVRk5MRzFDUVVGdFFpeExRVUZMTEV0QlFVd3NTVUZCWXl4RFFVRkRMRTFCUVUwc1QwRkJUaXhKUVVGcFFpeEZRVUZxUWl4RFFVRkVMRWRCUVhkQ0xFZEJRWGhDTEVOQlFXUXNSMEZCTmtNc1MwRkJTeXhEUVVGTUxFTkJURGRDTzBGQlRYcERMRTFCUVUwc2JVSkJRVzFDTEV0QlFVc3NUVUZCVEN4SlFVRmxMRU5CUVVNc1RVRkJUU3hQUVVGT0xFbEJRV2xDTEVWQlFXcENMRU5CUVVRc1IwRkJkMElzUjBGQmVFSXNRMEZCWml4SFFVRTRReXhMUVVGTExFTkJRVXdzUTBGT09VSTdRVUZQZWtNc1RVRkJUU3hyUWtGQmEwSXNRMEZCUlN4blFrRkJSaXhKUVVGelFpeFJRVUZSTEVOQlFWSXNRMEZCZEVJc1EwRlFhVUk3UVVGUmVrTXNUVUZCVFN4clFrRkJhMElzUTBGQlJTeG5Ra0ZCUml4SlFVRnpRaXhUUVVGVExFTkJRVlFzUTBGQmRFSXNRMEZTYVVJN1FVRlRla01zVFVGQlRTeG5Ra0ZCWjBJc2JVSkJRVzFDTEV0QlFXNUNMRU5CVkcxQ08wRkJWWHBETEUxQlFVMHNaMEpCUVdkQ0xHMUNRVUZ0UWl4TlFVRnVRaXhEUVZadFFqdEJRVmQ2UXl4TlFVRk5MRmxCUVZrN1FVRkRhRUlzT0VKQlFYZENMRTFCUVUwc1ZVRkJUaXhWUVVGeFFpeE5RVUZOTEZWQlFVNHNUMEZCTjBNN1FVRkRRU3d3UWtGQmIwSXNlVUpCUVc5Q0xDdENRVUV3UWl4bFFVRlZMREJDUVVGeFFpeDFRa0ZCYTBJc2IwSkJRVzVJTzBGQlEwRXNkMEpCUVd0Q0xFMUJRVTBzVFVGQlRpeFZRVUZwUWl3d1FrRkJjVUlzZFVKQlFYaEVPMEZCUTBFc2MwSkJRV2RDTEUxQlFVMHNTMEZCVGl4UFFVRm9RanRCUVVOQkxITkNRVUZuUWl4TlFVRk5MRXRCUVU0c1QwRkJhRUk3UjBGTVNTeERRVmh0UXpzN1FVRnRRbnBETEU5QlFVc3NTVUZCU1N4SFFVRktMRWxCUVZjc1MwRkJhRUlzUlVGQmRVSTdRVUZEY2tJc1VVRkJTU3hOUVVGTkxHTkJRVTRzUTBGQmNVSXNSMEZCY2tJc1EwRkJTaXhGUVVFclFqdEJRVU0zUWl4VlFVRkpMSGxDUVVGbExFZEJRV1lzUTBGQlNpeEZRVUY1UWp0QlFVTjJRaXgxUWtGQlpTeEpRVUZtTEVOQlJIVkNPMDlCUVhwQ0xFMUJSVTg3UVVGRFRDeGpRVUZOTEhkQ1FVRlpMRWRCUVZvc1EwRkJUaXhKUVVFd1FpeE5RVUZOTEVkQlFVNHNRMEZCTVVJc1EwRkVTenRQUVVaUU8wdEJSRVk3UjBGRVJqczdRVUZWUVN4TlFVRkpMRmxCUVVvc1JVRkJhMEk3UVVGRGFFSXNWVUZCVFN4VFFVRk9MRWRCUVd0Q0xFVkJRV3hDTEVOQlJHZENPenRCUVVkb1FpeFRRVUZMTEVsQlFVa3NTVUZCU2l4SlFVRlhMRk5CUVdoQ0xFVkJRVEpDTzBGQlEzcENMRlZCUVVrc1ZVRkJWU3hqUVVGV0xFTkJRWGxDTEVsQlFYcENMRU5CUVVvc1JVRkJiVU03UVVGRGFrTXNXVUZCVFN4bFFVRmxMRWxCUVVNc1MwRkJVU3hQUVVGU0xFZEJRVzFDTEVkQlFYQkNMRWRCUVRCQ0xFZEJRVEZDTEVOQlJGazdRVUZGYWtNc1kwRkJUU3hUUVVGT0xFbEJRVzFDTEZWQlFWVXNTVUZCVml4RlFVRmxMRTlCUVdZc1EwRkJkVUlzV1VGQmRrSXNSVUZCY1VNc1dVRkJja01zUTBGQmJrSXNRMEZHYVVNN1QwRkJia003UzBGRVJqdEhRVWhHT3p0QlFWZEJMRk5CUVU4c1MwRkJVQ3hEUVhoRGVVTTdRMEZCTlVJaUxDSm1hV3hsSWpvaVluVnBiR1F1YW5NaUxDSnpiM1Z5WTJWU2IyOTBJam9pTDFWelpYSnpMMDFoZEhRdlUybDBaWE12Y0c5d2JXOTBhVzl1SWl3aWMyOTFjbU5sYzBOdmJuUmxiblFpT2xzaWFXMXdiM0owSUhzZ1kyRnRaV3hVYjBSaGMyZ2dmU0JtY205dElDY3VMaTh1TGk5cGJtTXZkWFJwYkhNbk8xeHVhVzF3YjNKMElIUnlZVzV6Wm05eWJWQnliM0J6SUdaeWIyMGdKeTR1TDJOemN5OTBjbUZ1YzJadmNtMHRjSEp2Y0hNbk8xeHVYRzVqYjI1emRDQmFSVkpQWDA1UFZGOWFSVkpQSUQwZ01DNHdNREF4TzF4dVhHNWxlSEJ2Y25RZ1pHVm1ZWFZzZENCbWRXNWpkR2x2YmlCaWRXbHNaQ2h6ZEdGMFpTd2daR0YwWVNrZ2UxeHVJQ0JzWlhRZ2FHRnpWSEpoYm5ObWIzSnRJRDBnWm1Gc2MyVTdYRzRnSUdOdmJuTjBJSEJ5YjNCeklEMGdlMzA3WEc0Z0lHTnZibk4wSUhOallXeGxJRDBnYzNSaGRHVXVjMk5oYkdVZ0lUMDlJSFZ1WkdWbWFXNWxaQ0EvSUhOMFlYUmxMbk5qWVd4bElIeDhJRnBGVWs5ZlRrOVVYMXBGVWs4Z09pQnpkR0YwWlM1elkyRnNaVmdnZkh3Z01UdGNiaUFnWTI5dWMzUWdjMk5oYkdWWklEMGdjM1JoZEdVdWMyTmhiR1ZaSUNFOVBTQjFibVJsWm1sdVpXUWdQeUJ6ZEdGMFpTNXpZMkZzWlZrZ2ZId2dXa1ZTVDE5T1QxUmZXa1ZTVHlBNklITmpZV3hsSUh4OElERTdYRzRnSUdOdmJuTjBJSFJ5WVc1elptOXliVTl5YVdkcGJsZ2dQU0JrWVhSaExuZHBaSFJvSUNvZ0tDaHpkR0YwWlM1dmNtbG5hVzVZSUh4OElEVXdLU0F2SURFd01Da2dLeUJrWVhSaExuZzdYRzRnSUdOdmJuTjBJSFJ5WVc1elptOXliVTl5YVdkcGJsa2dQU0JrWVhSaExtaGxhV2RvZENBcUlDZ29jM1JoZEdVdWIzSnBaMmx1V1NCOGZDQTFNQ2tnTHlBeE1EQXBJQ3NnWkdGMFlTNTVPMXh1SUNCamIyNXpkQ0J6WTJGc1pWUnlZVzV6Wm05eWJWZ2dQU0F0SUhSeVlXNXpabTl5YlU5eWFXZHBibGdnS2lBb2MyTmhiR1VnS2lBeEtUdGNiaUFnWTI5dWMzUWdjMk5oYkdWVWNtRnVjMlp2Y20xWklEMGdMU0IwY21GdWMyWnZjbTFQY21sbmFXNVpJQ29nS0hOallXeGxXU0FxSURFcE8xeHVJQ0JqYjI1emRDQnpZMkZzWlZKbGNHeGhZMlZZSUQwZ2RISmhibk5tYjNKdFQzSnBaMmx1V0NBdklITmpZV3hsTzF4dUlDQmpiMjV6ZENCelkyRnNaVkpsY0d4aFkyVlpJRDBnZEhKaGJuTm1iM0p0VDNKcFoybHVXU0F2SUhOallXeGxXVHRjYmlBZ1kyOXVjM1FnZEhKaGJuTm1iM0p0SUQwZ2UxeHVJQ0FnSUhSeVlXNXpiR0YwWlRvZ1lIUnlZVzV6YkdGMFpTZ2tlM04wWVhSbExuUnlZVzV6YkdGMFpWaDlMQ0FrZTNOMFlYUmxMblJ5WVc1emJHRjBaVmw5S1NCZ0xGeHVJQ0FnSUhOallXeGxPaUJnZEhKaGJuTnNZWFJsS0NSN2MyTmhiR1ZVY21GdWMyWnZjbTFZZlN3Z0pIdHpZMkZzWlZSeVlXNXpabTl5YlZsOUtTQnpZMkZzWlNna2UzTmpZV3hsZlN3Z0pIdHpZMkZzWlZsOUtTQjBjbUZ1YzJ4aGRHVW9KSHR6WTJGc1pWSmxjR3hoWTJWWWZTd2dKSHR6WTJGc1pWSmxjR3hoWTJWWmZTa2dZQ3hjYmlBZ0lDQnliM1JoZEdVNklHQnliM1JoZEdVb0pIdHpkR0YwWlM1eWIzUmhkR1Y5TENBa2UzUnlZVzV6Wm05eWJVOXlhV2RwYmxoOUxDQWtlM1J5WVc1elptOXliVTl5YVdkcGJsbDlLU0JnTEZ4dUlDQWdJSE5yWlhkWU9pQmdjMnRsZDFnb0pIdHpkR0YwWlM1emEyVjNXSDBwSUdBc1hHNGdJQ0FnYzJ0bGQxazZJR0J6YTJWM1dTZ2tlM04wWVhSbExuTnJaWGRaZlNrZ1lGeHVJQ0I5TzF4dVhHNGdJR1p2Y2lBb2JHVjBJR3RsZVNCcGJpQnpkR0YwWlNrZ2UxeHVJQ0FnSUdsbUlDaHpkR0YwWlM1b1lYTlBkMjVRY205d1pYSjBlU2hyWlhrcEtTQjdYRzRnSUNBZ0lDQnBaaUFvZEhKaGJuTm1iM0p0VUhKdmNITmJhMlY1WFNrZ2UxeHVJQ0FnSUNBZ0lDQm9ZWE5VY21GdWMyWnZjbTBnUFNCMGNuVmxPMXh1SUNBZ0lDQWdmU0JsYkhObElIdGNiaUFnSUNBZ0lDQWdjSEp2Y0hOYlkyRnRaV3hVYjBSaGMyZ29hMlY1S1YwZ1BTQnpkR0YwWlZ0clpYbGRPMXh1SUNBZ0lDQWdmVnh1SUNBZ0lIMWNiaUFnZlZ4dVhHNGdJR2xtSUNob1lYTlVjbUZ1YzJadmNtMHBJSHRjYmlBZ0lDQndjbTl3Y3k1MGNtRnVjMlp2Y20wZ1BTQW5KenRjYmx4dUlDQWdJR1p2Y2lBb2JHVjBJR3RsZVNCcGJpQjBjbUZ1YzJadmNtMHBJSHRjYmlBZ0lDQWdJR2xtSUNoMGNtRnVjMlp2Y20wdWFHRnpUM2R1VUhKdmNHVnlkSGtvYTJWNUtTa2dlMXh1SUNBZ0lDQWdJQ0JqYjI1emRDQmtaV1poZFd4MFZtRnNkV1VnUFNBb2EyVjVJRDA5UFNBbmMyTmhiR1VuS1NBL0lDY3hKeUE2SUNjd0p6dGNiaUFnSUNBZ0lDQWdjSEp2Y0hNdWRISmhibk5tYjNKdElDczlJSFJ5WVc1elptOXliVnRyWlhsZExuSmxjR3hoWTJVb0wzVnVaR1ZtYVc1bFpDOW5MQ0JrWldaaGRXeDBWbUZzZFdVcE8xeHVJQ0FnSUNBZ2ZWeHVJQ0FnSUgxY2JpQWdmVnh1WEc0Z0lISmxkSFZ5YmlCd2NtOXdjenRjYm4waVhYMD1cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2FkYXB0ZXIvc3ZnL2J1aWxkLmpzXG4gKiogbW9kdWxlIGlkID0gNDZcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbi8qXG4gIENvbnZlcnQgcGVyY2VudGFnZSB0byBwaXhlbHNcbiAgXG4gIEBwYXJhbSBbbnVtYmVyXTogUGVyY2VudGFnZSBvZiB0b3RhbCBsZW5ndGhcbiAgQHBhcmFtIFtudW1iZXJdOiBUb3RhbCBsZW5ndGhcbiovXG52YXIgcGVyY2VudFRvUGl4ZWxzID0gZnVuY3Rpb24gKHBlcmNlbnQsIGxlbmd0aCkge1xuICByZXR1cm4gcGFyc2VGbG9hdChwZXJjZW50KSAvIDEwMCAqIGxlbmd0aCArICdweCc7XG59O1xuXG5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbiAoc3RhdGUsIGxlbmd0aCkge1xuICB2YXIgc3R5bGVzID0ge307XG4gIHZhciBkYXNoQXJyYXlTdHlsZXMgPSB7XG4gICAgbGVuZ3RoOiAwLFxuICAgIHNwYWNpbmc6IGxlbmd0aCArICdweCdcbiAgfTtcbiAgdmFyIGhhc0Rhc2hBcnJheSA9IGZhbHNlO1xuXG4gIGZvciAodmFyIGtleSBpbiBzdGF0ZSkge1xuICAgIGlmIChzdGF0ZS5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICB2YXIgdmFsdWUgPSBzdGF0ZVtrZXldO1xuXG4gICAgICBzd2l0Y2ggKGtleSkge1xuICAgICAgICBjYXNlICdsZW5ndGgnOlxuICAgICAgICBjYXNlICdzcGFjaW5nJzpcbiAgICAgICAgICBoYXNEYXNoQXJyYXkgPSB0cnVlO1xuICAgICAgICAgIGRhc2hBcnJheVN0eWxlc1trZXldID0gcGVyY2VudFRvUGl4ZWxzKHZhbHVlLCBsZW5ndGgpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdvZmZzZXQnOlxuICAgICAgICAgIHN0eWxlc1snc3Ryb2tlLWRhc2hvZmZzZXQnXSA9IHBlcmNlbnRUb1BpeGVscygtdmFsdWUsIGxlbmd0aCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgc3R5bGVzW2tleV0gPSB2YWx1ZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBpZiAoaGFzRGFzaEFycmF5KSB7XG4gICAgc3R5bGVzWydzdHJva2UtZGFzaGFycmF5J10gPSBkYXNoQXJyYXlTdHlsZXMubGVuZ3RoICsgJyAnICsgZGFzaEFycmF5U3R5bGVzLnNwYWNpbmc7XG4gIH1cblxuICByZXR1cm4gc3R5bGVzO1xufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbk55WXk5aFpHRndkR1Z5TDNOMlp5MXdZWFJvTDJKMWFXeGtMbXB6SWwwc0ltNWhiV1Z6SWpwYlhTd2liV0Z3Y0dsdVozTWlPaUk3T3pzN096czdPenRCUVUxQkxFbEJRVTBzYTBKQlFXdENMRlZCUVVNc1QwRkJSQ3hGUVVGVkxFMUJRVlk3VTBGQmNVSXNWVUZCUXl4RFFVRlhMRTlCUVZnc1NVRkJjMElzUjBGQmRFSXNSMEZCTmtJc1RVRkJPVUlzUjBGQmRVTXNTVUZCZGtNN1EwRkJja0k3TzJ0Q1FVVlVMRlZCUVVNc1MwRkJSQ3hGUVVGUkxFMUJRVklzUlVGQmJVSTdRVUZEYUVNc1RVRkJUU3hUUVVGVExFVkJRVlFzUTBGRU1FSTdRVUZGYUVNc1RVRkJUU3hyUWtGQmEwSTdRVUZEZEVJc1dVRkJVU3hEUVVGU08wRkJRMEVzWVVGQlV5eFRRVUZUTEVsQlFWUTdSMEZHVEN4RFFVWXdRanRCUVUxb1F5eE5RVUZKTEdWQlFXVXNTMEZCWml4RFFVNDBRanM3UVVGUmFFTXNUMEZCU3l4SlFVRkpMRWRCUVVvc1NVRkJWeXhMUVVGb1FpeEZRVUYxUWp0QlFVTnlRaXhSUVVGSkxFMUJRVTBzWTBGQlRpeERRVUZ4UWl4SFFVRnlRaXhEUVVGS0xFVkJRU3RDTzBGQlF6ZENMRlZCUVUwc1VVRkJVU3hOUVVGTkxFZEJRVTRzUTBGQlVpeERRVVIxUWpzN1FVRkhOMElzWTBGQlVTeEhRVUZTTzBGQlEwRXNZVUZCU3l4UlFVRk1MRU5CUkVFN1FVRkZRU3hoUVVGTExGTkJRVXc3UVVGRFJTeDVRa0ZCWlN4SlFVRm1MRU5CUkVZN1FVRkZSU3d3UWtGQlowSXNSMEZCYUVJc1NVRkJkVUlzWjBKQlFXZENMRXRCUVdoQ0xFVkJRWFZDTEUxQlFYWkNMRU5CUVhaQ0xFTkJSa1k3UVVGSFJTeG5Ra0ZJUmp0QlFVWkJMR0ZCVFVzc1VVRkJURHRCUVVORkxHbENRVUZQTEcxQ1FVRlFMRWxCUVRoQ0xHZENRVUZuUWl4RFFVRkRMRXRCUVVRc1JVRkJVU3hOUVVGNFFpeERRVUU1UWl4RFFVUkdPMEZCUlVVc1owSkJSa1k3UVVGT1FUdEJRVlZGTEdsQ1FVRlBMRWRCUVZBc1NVRkJZeXhMUVVGa0xFTkJSRVk3UVVGVVFTeFBRVWcyUWp0TFFVRXZRanRIUVVSR096dEJRVzFDUVN4TlFVRkpMRmxCUVVvc1JVRkJhMEk3UVVGRGFFSXNWMEZCVHl4clFrRkJVQ3hKUVVFMlFpeG5Ra0ZCWjBJc1RVRkJhRUlzUjBGQmVVSXNSMEZCZWtJc1IwRkJLMElzWjBKQlFXZENMRTlCUVdoQ0xFTkJSRFZETzBkQlFXeENPenRCUVVsQkxGTkJRVThzVFVGQlVDeERRUzlDWjBNN1EwRkJia0lpTENKbWFXeGxJam9pWW5WcGJHUXVhbk1pTENKemIzVnlZMlZTYjI5MElqb2lMMVZ6WlhKekwwMWhkSFF2VTJsMFpYTXZjRzl3Ylc5MGFXOXVJaXdpYzI5MWNtTmxjME52Ym5SbGJuUWlPbHNpTHlwY2JpQWdRMjl1ZG1WeWRDQndaWEpqWlc1MFlXZGxJSFJ2SUhCcGVHVnNjMXh1SUNCY2JpQWdRSEJoY21GdElGdHVkVzFpWlhKZE9pQlFaWEpqWlc1MFlXZGxJRzltSUhSdmRHRnNJR3hsYm1kMGFGeHVJQ0JBY0dGeVlXMGdXMjUxYldKbGNsMDZJRlJ2ZEdGc0lHeGxibWQwYUZ4dUtpOWNibU52Ym5OMElIQmxjbU5sYm5SVWIxQnBlR1ZzY3lBOUlDaHdaWEpqWlc1MExDQnNaVzVuZEdncElEMCtJQ2h3WVhKelpVWnNiMkYwS0hCbGNtTmxiblFwSUM4Z01UQXdLU0FxSUd4bGJtZDBhQ0FySUNkd2VDYzdYRzVjYm1WNGNHOXlkQ0JrWldaaGRXeDBJQ2h6ZEdGMFpTd2diR1Z1WjNSb0tTQTlQaUI3WEc0Z0lHTnZibk4wSUhOMGVXeGxjeUE5SUh0OU8xeHVJQ0JqYjI1emRDQmtZWE5vUVhKeVlYbFRkSGxzWlhNZ1BTQjdYRzRnSUNBZ2JHVnVaM1JvT2lBd0xGeHVJQ0FnSUhOd1lXTnBibWM2SUd4bGJtZDBhQ0FySUNkd2VDZGNiaUFnZlR0Y2JpQWdiR1YwSUdoaGMwUmhjMmhCY25KaGVTQTlJR1poYkhObE8xeHVYRzRnSUdadmNpQW9iR1YwSUd0bGVTQnBiaUJ6ZEdGMFpTa2dlMXh1SUNBZ0lHbG1JQ2h6ZEdGMFpTNW9ZWE5QZDI1UWNtOXdaWEowZVNoclpYa3BLU0I3WEc0Z0lDQWdJQ0JqYjI1emRDQjJZV3gxWlNBOUlITjBZWFJsVzJ0bGVWMDdYRzVjYmlBZ0lDQWdJSE4zYVhSamFDQW9hMlY1S1NCN1hHNGdJQ0FnSUNCallYTmxJQ2RzWlc1bmRHZ25PbHh1SUNBZ0lDQWdZMkZ6WlNBbmMzQmhZMmx1WnljNlhHNGdJQ0FnSUNBZ0lHaGhjMFJoYzJoQmNuSmhlU0E5SUhSeWRXVTdYRzRnSUNBZ0lDQWdJR1JoYzJoQmNuSmhlVk4wZVd4bGMxdHJaWGxkSUQwZ2NHVnlZMlZ1ZEZSdlVHbDRaV3h6S0haaGJIVmxMQ0JzWlc1bmRHZ3BPMXh1SUNBZ0lDQWdJQ0JpY21WaGF6dGNiaUFnSUNBZ0lHTmhjMlVnSjI5bVpuTmxkQ2M2WEc0Z0lDQWdJQ0FnSUhOMGVXeGxjMXNuYzNSeWIydGxMV1JoYzJodlptWnpaWFFuWFNBOUlIQmxjbU5sYm5SVWIxQnBlR1ZzY3lndGRtRnNkV1VzSUd4bGJtZDBhQ2s3WEc0Z0lDQWdJQ0FnSUdKeVpXRnJPMXh1SUNBZ0lDQWdaR1ZtWVhWc2REcGNiaUFnSUNBZ0lDQWdjM1I1YkdWelcydGxlVjBnUFNCMllXeDFaVHRjYmlBZ0lDQWdJSDFjYmlBZ0lDQjlYRzRnSUgxY2JseHVJQ0JwWmlBb2FHRnpSR0Z6YUVGeWNtRjVLU0I3WEc0Z0lDQWdjM1I1YkdWeld5ZHpkSEp2YTJVdFpHRnphR0Z5Y21GNUoxMGdQU0JrWVhOb1FYSnlZWGxUZEhsc1pYTXViR1Z1WjNSb0lDc2dKeUFuSUNzZ1pHRnphRUZ5Y21GNVUzUjViR1Z6TG5Od1lXTnBibWM3WEc0Z0lIMWNibHh1SUNCeVpYUjFjbTRnYzNSNWJHVnpPMXh1ZlRzaVhYMD1cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2FkYXB0ZXIvc3ZnLXBhdGgvYnVpbGQuanNcbiAqKiBtb2R1bGUgaWQgPSA0N1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xudmFyIHJnYiA9IGV4cG9ydHMucmdiID0ge1xuICBtaW46IDAsXG4gIG1heDogMjU1LFxuICByb3VuZDogdHJ1ZVxufTtcblxudmFyIG9wYWNpdHkgPSBleHBvcnRzLm9wYWNpdHkgPSB7XG4gIG1pbjogMCxcbiAgbWF4OiAxXG59O1xuXG52YXIgcGVyY2VudCA9IGV4cG9ydHMucGVyY2VudCA9IHtcbiAgbWluOiAwLFxuICBtYXg6IDEwMCxcbiAgdW5pdDogJyUnXG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluTnlZeTkyWVd4MVpTMTBlWEJsY3k5elpYUjBhVzVuY3k5a1pXWmhkV3gwTFhCeWIzQnpMbXB6SWwwc0ltNWhiV1Z6SWpwYlhTd2liV0Z3Y0dsdVozTWlPaUk3T3p0QlFVRlBMRWxCUVUwc2IwSkJRVTA3UVVGRGFrSXNUMEZCU3l4RFFVRk1PMEZCUTBFc1QwRkJTeXhIUVVGTU8wRkJRMEVzVTBGQlR5eEpRVUZRTzBOQlNGYzdPMEZCVFU0c1NVRkJUU3cwUWtGQlZUdEJRVU55UWl4UFFVRkxMRU5CUVV3N1FVRkRRU3hQUVVGTExFTkJRVXc3UTBGR1Z6czdRVUZMVGl4SlFVRk5MRFJDUVVGVk8wRkJRM0pDTEU5QlFVc3NRMEZCVER0QlFVTkJMRTlCUVVzc1IwRkJURHRCUVVOQkxGRkJRVTBzUjBGQlRqdERRVWhYSWl3aVptbHNaU0k2SW1SbFptRjFiSFF0Y0hKdmNITXVhbk1pTENKemIzVnlZMlZTYjI5MElqb2lMMVZ6WlhKekwwMWhkSFF2VTJsMFpYTXZjRzl3Ylc5MGFXOXVJaXdpYzI5MWNtTmxjME52Ym5SbGJuUWlPbHNpWlhod2IzSjBJR052Ym5OMElISm5ZaUE5SUh0Y2JpQWdiV2x1T2lBd0xGeHVJQ0J0WVhnNklESTFOU3hjYmlBZ2NtOTFibVE2SUhSeWRXVmNibjA3WEc1Y2JtVjRjRzl5ZENCamIyNXpkQ0J2Y0dGamFYUjVJRDBnZTF4dUlDQnRhVzQ2SURBc1hHNGdJRzFoZURvZ01WeHVmVHRjYmx4dVpYaHdiM0owSUdOdmJuTjBJSEJsY21ObGJuUWdQU0I3WEc0Z0lHMXBiam9nTUN4Y2JpQWdiV0Y0T2lBeE1EQXNYRzRnSUhWdWFYUTZJQ2NsSjF4dWZUc2lYWDA9XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy92YWx1ZS10eXBlcy9zZXR0aW5ncy9kZWZhdWx0LXByb3BzLmpzXG4gKiogbW9kdWxlIGlkID0gNDhcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbnZhciBYID0gJ1gnO1xudmFyIFkgPSAnWSc7XG52YXIgQUxQSEEgPSAnQWxwaGEnO1xuXG52YXIgYXhlcyA9IGV4cG9ydHMuYXhlcyA9IFtYLCBZLCAnWiddO1xudmFyIHJnYiA9IGV4cG9ydHMucmdiID0gWydSZWQnLCAnR3JlZW4nLCAnQmx1ZScsIEFMUEhBXTtcbnZhciBoc2wgPSBleHBvcnRzLmhzbCA9IFsnSHVlJywgJ1NhdHVyYXRpb24nLCAnTGlnaHRuZXNzJywgQUxQSEFdO1xudmFyIHBvc2l0aW9ucyA9IGV4cG9ydHMucG9zaXRpb25zID0gWydUb3AnLCAnUmlnaHQnLCAnQm90dG9tJywgJ0xlZnQnXTtcbnZhciBzaGFkb3cgPSBleHBvcnRzLnNoYWRvdyA9IFtYLCBZLCAnUmFkaXVzJywgJ1NwcmVhZCcsICdDb2xvciddO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluTnlZeTkyWVd4MVpTMTBlWEJsY3k5elpYUjBhVzVuY3k5a2FXTjBhVzl1WVhKNUxtcHpJbDBzSW01aGJXVnpJanBiWFN3aWJXRndjR2x1WjNNaU9pSTdPenRCUVVGQkxFbEJRVTBzU1VGQlNTeEhRVUZLTzBGQlEwNHNTVUZCVFN4SlFVRkpMRWRCUVVvN1FVRkRUaXhKUVVGTkxGRkJRVkVzVDBGQlVqczdRVUZGUXl4SlFVRk5MSE5DUVVGUExFTkJRVU1zUTBGQlJDeEZRVUZKTEVOQlFVb3NSVUZCVHl4SFFVRlFMRU5CUVZBN1FVRkRUaXhKUVVGTkxHOUNRVUZOTEVOQlFVTXNTMEZCUkN4RlFVRlJMRTlCUVZJc1JVRkJhVUlzVFVGQmFrSXNSVUZCZVVJc1MwRkJla0lzUTBGQlRqdEJRVU5PTEVsQlFVMHNiMEpCUVUwc1EwRkJReXhMUVVGRUxFVkJRVkVzV1VGQlVpeEZRVUZ6UWl4WFFVRjBRaXhGUVVGdFF5eExRVUZ1UXl4RFFVRk9PMEZCUTA0c1NVRkJUU3huUTBGQldTeERRVUZETEV0QlFVUXNSVUZCVVN4UFFVRlNMRVZCUVdsQ0xGRkJRV3BDTEVWQlFUSkNMRTFCUVROQ0xFTkJRVm83UVVGRFRpeEpRVUZOTERCQ1FVRlRMRU5CUVVNc1EwRkJSQ3hGUVVGSkxFTkJRVW9zUlVGQlR5eFJRVUZRTEVWQlFXbENMRkZCUVdwQ0xFVkJRVEpDTEU5QlFUTkNMRU5CUVZRaUxDSm1hV3hsSWpvaVpHbGpkR2x2Ym1GeWVTNXFjeUlzSW5OdmRYSmpaVkp2YjNRaU9pSXZWWE5sY25NdlRXRjBkQzlUYVhSbGN5OXdiM0J0YjNScGIyNGlMQ0p6YjNWeVkyVnpRMjl1ZEdWdWRDSTZXeUpqYjI1emRDQllJRDBnSjFnbk8xeHVZMjl1YzNRZ1dTQTlJQ2RaSnp0Y2JtTnZibk4wSUVGTVVFaEJJRDBnSjBGc2NHaGhKenRjYmx4dVpYaHdiM0owSUdOdmJuTjBJR0Y0WlhNZ1BTQmJXQ3dnV1N3Z0oxb25YVHRjYm1WNGNHOXlkQ0JqYjI1emRDQnlaMklnUFNCYkoxSmxaQ2NzSUNkSGNtVmxiaWNzSUNkQ2JIVmxKeXdnUVV4UVNFRmRPMXh1Wlhod2IzSjBJR052Ym5OMElHaHpiQ0E5SUZzblNIVmxKeXdnSjFOaGRIVnlZWFJwYjI0bkxDQW5UR2xuYUhSdVpYTnpKeXdnUVV4UVNFRmRPMXh1Wlhod2IzSjBJR052Ym5OMElIQnZjMmwwYVc5dWN5QTlJRnNuVkc5d0p5d2dKMUpwWjJoMEp5d2dKMEp2ZEhSdmJTY3NJQ2RNWldaMEoxMDdYRzVsZUhCdmNuUWdZMjl1YzNRZ2MyaGhaRzkzSUQwZ1cxZ3NJRmtzSUNkU1lXUnBkWE1uTENBblUzQnlaV0ZrSnl3Z0owTnZiRzl5SjEwN0lsMTlcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL3ZhbHVlLXR5cGVzL3NldHRpbmdzL2RpY3Rpb25hcnkuanNcbiAqKiBtb2R1bGUgaWQgPSA0OVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzLmRlZmF1bHQgPSBjcmVhdGVFYXNpbmdGdW5jdGlvbjtcbi8qXG4gIE1pcnJvciBlYXNpbmdcbiAgXG4gIE1pcnJvcnMgdGhlIHByb3ZpZGVkIGVhc2luZyBmdW5jdGlvbiwgdXNlZCBoZXJlIGZvciBtaXJyb3JpbmcgYW5cbiAgZWFzZUluIGludG8gYW4gZWFzZUluT3V0XG4gIFxuICBAcGFyYW0gW251bWJlcl06IFByb2dyZXNzLCBmcm9tIDAgLSAxLCBvZiBjdXJyZW50IHNoaWZ0XG4gIEBwYXJhbSBbZnVuY3Rpb25dOiBUaGUgZWFzaW5nIGZ1bmN0aW9uIHRvIG1pcnJvclxuICBAcmV0dXJucyBbbnVtYmVyXTogVGhlIGVhc2luZy1hZGp1c3RlZCBkZWx0YVxuKi9cbnZhciBtaXJyb3JFYXNpbmcgPSBmdW5jdGlvbiAobWV0aG9kKSB7XG4gIHJldHVybiBmdW5jdGlvbiAocHJvZ3Jlc3MsIHN0cmVuZ3RoKSB7XG4gICAgcmV0dXJuIHByb2dyZXNzIDw9IDAuNSA/IG1ldGhvZCgyICogcHJvZ3Jlc3MsIHN0cmVuZ3RoKSAvIDIgOiAoMiAtIG1ldGhvZCgyICogKDEgLSBwcm9ncmVzcyksIHN0cmVuZ3RoKSkgLyAyO1xuICB9O1xufTtcblxuLypcbiAgUmV2ZXJzZSBlYXNpbmdcbiAgXG4gIFJldmVyc2VzIHRoZSBvdXRwdXQgb2YgdGhlIHByb3ZpZGVkIGVhc2luZyBmdW5jdGlvbiwgdXNlZCBmb3IgZmxpcHBpbmcgZWFzZUluXG4gIGN1cnZlIHRvIGFuIGVhc2VPdXQuXG4gIFxuICBAcGFyYW0gW251bWJlcl06IFByb2dyZXNzLCBmcm9tIDAgLSAxLCBvZiBjdXJyZW50IHNoaWZ0XG4gIEBwYXJhbSBbZnVuY3Rpb25dOiBUaGUgZWFzaW5nIGZ1bmN0aW9uIHRvIHJldmVyc2VcbiAgQHJldHVybnMgW251bWJlcl06IFRoZSBlYXNpbmctYWRqdXN0ZWQgZGVsdGFcbiovXG52YXIgcmV2ZXJzZUVhc2luZyA9IGZ1bmN0aW9uIChtZXRob2QpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIChwcm9ncmVzcywgc3RyZW5ndGgpIHtcbiAgICByZXR1cm4gMSAtIG1ldGhvZCgxIC0gcHJvZ3Jlc3MsIHN0cmVuZ3RoKTtcbiAgfTtcbn07XG5cbi8qXG4gIEVhc2luZyBjbGFzc1xuXG4gIElmIHByb3ZpZGVkIGVhc2luZyBmdW5jdGlvbiwgcmV0dXJucyBlYXNpbmcgZnVuY3Rpb24gd2l0aCBcbiAgaW4vb3V0L2luT3V0IHZhcmlhdGlvbnNcblxuICBJZiBwcm92aWRlZCBmb3VyIGFyZ3VtZW50cywgcmV0dXJucyBuZXcgQmV6aWVyIGNsYXNzIGluc3RlYWQuXG4qL1xuZnVuY3Rpb24gY3JlYXRlRWFzaW5nRnVuY3Rpb24obWV0aG9kKSB7XG4gIHZhciBlYXNpbmdGdW5jdGlvbiA9IGZ1bmN0aW9uIChwcm9ncmVzcywgc3RyZW5ndGgpIHtcbiAgICByZXR1cm4gbWV0aG9kKHByb2dyZXNzLCBzdHJlbmd0aCk7XG4gIH07XG5cbiAgZWFzaW5nRnVuY3Rpb24uaW4gPSBmdW5jdGlvbiAocHJvZ3Jlc3MsIHN0cmVuZ3RoKSB7XG4gICAgcmV0dXJuIG1ldGhvZChwcm9ncmVzcywgc3RyZW5ndGgpO1xuICB9O1xuICBlYXNpbmdGdW5jdGlvbi5vdXQgPSByZXZlcnNlRWFzaW5nKG1ldGhvZCk7XG4gIGVhc2luZ0Z1bmN0aW9uLmluT3V0ID0gbWlycm9yRWFzaW5nKG1ldGhvZCk7XG5cbiAgcmV0dXJuIGVhc2luZ0Z1bmN0aW9uO1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluTnlZeTloWTNScGIyNXpMMlZoYzJsdVp5OWpjbVZoZEdVdFpXRnphVzVuTG1weklsMHNJbTVoYldWeklqcGJYU3dpYldGd2NHbHVaM01pT2lJN096dHJRa0ZuUTNkQ096czdPenM3T3pzN096dEJRWFJDZUVJc1NVRkJUU3hsUVVGbExGVkJRVU1zVFVGQlJEdFRRVUZaTEZWQlFVTXNVVUZCUkN4RlFVRlhMRkZCUVZnN1YwRkJkMElzVVVGQlF5eEpRVUZaTEVkQlFWb3NSMEZCYlVJc1QwRkJUeXhKUVVGSkxGRkJRVW9zUlVGQll5eFJRVUZ5UWl4SlFVRnBReXhEUVVGcVF5eEhRVUZ4UXl4RFFVRkRMRWxCUVVrc1QwRkJUeXhMUVVGTExFbEJRVWtzVVVGQlNpeERRVUZNTEVWQlFXOUNMRkZCUVROQ0xFTkJRVW9zUTBGQlJDeEhRVUUyUXl4RFFVRTNRenRIUVVGcVJqdERRVUZhT3pzN096czdPenM3T3pzN1FVRlpja0lzU1VGQlRTeG5Ra0ZCWjBJc1ZVRkJReXhOUVVGRU8xTkJRVmtzVlVGQlF5eFJRVUZFTEVWQlFWY3NVVUZCV0R0WFFVRjNRaXhKUVVGSkxFOUJRVThzU1VGQlNTeFJRVUZLTEVWQlFXTXNVVUZCY2tJc1EwRkJTanRIUVVGNFFqdERRVUZhT3pzN096czdPenM3TzBGQlZWQXNVMEZCVXl4dlFrRkJWQ3hEUVVFNFFpeE5RVUU1UWl4RlFVRnpRenRCUVVOdVJDeE5RVUZKTEdsQ1FVRnBRaXhWUVVGRExGRkJRVVFzUlVGQlZ5eFJRVUZZTzFkQlFYZENMRTlCUVU4c1VVRkJVQ3hGUVVGcFFpeFJRVUZxUWp0SFFVRjRRaXhEUVVRNFFqczdRVUZIYmtRc2FVSkJRV1VzUlVGQlppeEhRVUZ2UWl4VlFVRkRMRkZCUVVRc1JVRkJWeXhSUVVGWU8xZEJRWGRDTEU5QlFVOHNVVUZCVUN4RlFVRnBRaXhSUVVGcVFqdEhRVUY0UWl4RFFVZ3JRanRCUVVsdVJDeHBRa0ZCWlN4SFFVRm1MRWRCUVhGQ0xHTkJRV01zVFVGQlpDeERRVUZ5UWl4RFFVcHRSRHRCUVV0dVJDeHBRa0ZCWlN4TFFVRm1MRWRCUVhWQ0xHRkJRV0VzVFVGQllpeERRVUYyUWl4RFFVeHRSRHM3UVVGUGJrUXNVMEZCVHl4alFVRlFMRU5CVUcxRU8wTkJRWFJESWl3aVptbHNaU0k2SW1OeVpXRjBaUzFsWVhOcGJtY3Vhbk1pTENKemIzVnlZMlZTYjI5MElqb2lMMVZ6WlhKekwwMWhkSFF2VTJsMFpYTXZjRzl3Ylc5MGFXOXVJaXdpYzI5MWNtTmxjME52Ym5SbGJuUWlPbHNpTHlwY2JpQWdUV2x5Y205eUlHVmhjMmx1WjF4dUlDQmNiaUFnVFdseWNtOXljeUIwYUdVZ2NISnZkbWxrWldRZ1pXRnphVzVuSUdaMWJtTjBhVzl1TENCMWMyVmtJR2hsY21VZ1ptOXlJRzFwY25KdmNtbHVaeUJoYmx4dUlDQmxZWE5sU1c0Z2FXNTBieUJoYmlCbFlYTmxTVzVQZFhSY2JpQWdYRzRnSUVCd1lYSmhiU0JiYm5WdFltVnlYVG9nVUhKdlozSmxjM01zSUdaeWIyMGdNQ0F0SURFc0lHOW1JR04xY25KbGJuUWdjMmhwWm5SY2JpQWdRSEJoY21GdElGdG1kVzVqZEdsdmJsMDZJRlJvWlNCbFlYTnBibWNnWm5WdVkzUnBiMjRnZEc4Z2JXbHljbTl5WEc0Z0lFQnlaWFIxY201eklGdHVkVzFpWlhKZE9pQlVhR1VnWldGemFXNW5MV0ZrYW5WemRHVmtJR1JsYkhSaFhHNHFMMXh1WTI5dWMzUWdiV2x5Y205eVJXRnphVzVuSUQwZ0tHMWxkR2h2WkNrZ1BUNGdLSEJ5YjJkeVpYTnpMQ0J6ZEhKbGJtZDBhQ2tnUFQ0Z0tIQnliMmR5WlhOeklEdzlJREF1TlNrZ1B5QnRaWFJvYjJRb01pQXFJSEJ5YjJkeVpYTnpMQ0J6ZEhKbGJtZDBhQ2tnTHlBeUlEb2dLRElnTFNCdFpYUm9iMlFvTWlBcUlDZ3hJQzBnY0hKdlozSmxjM01wTENCemRISmxibWQwYUNrcElDOGdNanRjYmlBZ0lDQmNiaThxWEc0Z0lGSmxkbVZ5YzJVZ1pXRnphVzVuWEc0Z0lGeHVJQ0JTWlhabGNuTmxjeUIwYUdVZ2IzVjBjSFYwSUc5bUlIUm9aU0J3Y205MmFXUmxaQ0JsWVhOcGJtY2dablZ1WTNScGIyNHNJSFZ6WldRZ1ptOXlJR1pzYVhCd2FXNW5JR1ZoYzJWSmJseHVJQ0JqZFhKMlpTQjBieUJoYmlCbFlYTmxUM1YwTGx4dUlDQmNiaUFnUUhCaGNtRnRJRnR1ZFcxaVpYSmRPaUJRY205bmNtVnpjeXdnWm5KdmJTQXdJQzBnTVN3Z2IyWWdZM1Z5Y21WdWRDQnphR2xtZEZ4dUlDQkFjR0Z5WVcwZ1cyWjFibU4wYVc5dVhUb2dWR2hsSUdWaGMybHVaeUJtZFc1amRHbHZiaUIwYnlCeVpYWmxjbk5sWEc0Z0lFQnlaWFIxY201eklGdHVkVzFpWlhKZE9pQlVhR1VnWldGemFXNW5MV0ZrYW5WemRHVmtJR1JsYkhSaFhHNHFMMXh1WTI5dWMzUWdjbVYyWlhKelpVVmhjMmx1WnlBOUlDaHRaWFJvYjJRcElEMCtJQ2h3Y205bmNtVnpjeXdnYzNSeVpXNW5kR2dwSUQwK0lERWdMU0J0WlhSb2IyUW9NU0F0SUhCeWIyZHlaWE56TENCemRISmxibWQwYUNrN1hHNWNiaThxWEc0Z0lFVmhjMmx1WnlCamJHRnpjMXh1WEc0Z0lFbG1JSEJ5YjNacFpHVmtJR1ZoYzJsdVp5Qm1kVzVqZEdsdmJpd2djbVYwZFhKdWN5QmxZWE5wYm1jZ1puVnVZM1JwYjI0Z2QybDBhQ0JjYmlBZ2FXNHZiM1YwTDJsdVQzVjBJSFpoY21saGRHbHZibk5jYmx4dUlDQkpaaUJ3Y205MmFXUmxaQ0JtYjNWeUlHRnlaM1Z0Wlc1MGN5d2djbVYwZFhKdWN5QnVaWGNnUW1WNmFXVnlJR05zWVhOeklHbHVjM1JsWVdRdVhHNHFMMXh1Wlhod2IzSjBJR1JsWm1GMWJIUWdablZ1WTNScGIyNGdZM0psWVhSbFJXRnphVzVuUm5WdVkzUnBiMjRvYldWMGFHOWtLU0I3WEc0Z0lHeGxkQ0JsWVhOcGJtZEdkVzVqZEdsdmJpQTlJQ2h3Y205bmNtVnpjeXdnYzNSeVpXNW5kR2dwSUQwK0lHMWxkR2h2WkNod2NtOW5jbVZ6Y3l3Z2MzUnlaVzVuZEdncE8xeHVYRzRnSUdWaGMybHVaMFoxYm1OMGFXOXVMbWx1SUQwZ0tIQnliMmR5WlhOekxDQnpkSEpsYm1kMGFDa2dQVDRnYldWMGFHOWtLSEJ5YjJkeVpYTnpMQ0J6ZEhKbGJtZDBhQ2s3WEc0Z0lHVmhjMmx1WjBaMWJtTjBhVzl1TG05MWRDQTlJSEpsZG1WeWMyVkZZWE5wYm1jb2JXVjBhRzlrS1R0Y2JpQWdaV0Z6YVc1blJuVnVZM1JwYjI0dWFXNVBkWFFnUFNCdGFYSnliM0pGWVhOcGJtY29iV1YwYUc5a0tUdGNibHh1SUNCeVpYUjFjbTRnWldGemFXNW5SblZ1WTNScGIyNDdYRzU5WEc0aVhYMD1cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2FjdGlvbnMvZWFzaW5nL2NyZWF0ZS1lYXNpbmcuanNcbiAqKiBtb2R1bGUgaWQgPSA1MFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0cy5kZWZhdWx0ID0gY3ViaWNCZXppZXI7XG4vKlxuICBCZXppZXIgZnVuY3Rpb24gZ2VuZXJhdG9yXG4gICAgXG4gIEdhw6t0YW4gUmVuYXVkZWF1J3MgQmV6aWVyRWFzaW5nXG4gIGh0dHBzOi8vZ2l0aHViLmNvbS9ncmUvYmV6aWVyLWVhc2luZy9ibG9iL21hc3Rlci9pbmRleC5qcyAgXG4gIGh0dHBzOi8vZ2l0aHViLmNvbS9ncmUvYmV6aWVyLWVhc2luZy9ibG9iL21hc3Rlci9MSUNFTlNFXG4gIFlvdSdyZSBhIGhlcm9cbiAgXG4gIFVzZVxuICBcbiAgICB2YXIgZWFzZU91dCA9IG5ldyBCZXppZXIoLjE3LC42NywuODMsLjY3KSxcbiAgICAgIHggPSBlYXNlT3V0KDAuNSk7IC8vIHJldHVybnMgMC42MjcuLi5cbiovXG5cbi8vIENvbnN0YW50c1xudmFyIE5FV1RPTl9JVEVSQVRJT05TID0gODtcbnZhciBORVdUT05fTUlOX1NMT1BFID0gMC4wMDE7XG52YXIgU1VCRElWSVNJT05fUFJFQ0lTSU9OID0gMC4wMDAwMDAxO1xudmFyIFNVQkRJVklTSU9OX01BWF9JVEVSQVRJT05TID0gMTA7XG52YXIgS19TUExJTkVfVEFCTEVfU0laRSA9IDExO1xudmFyIEtfU0FNUExFX1NURVBfU0laRSA9IDEuMCAvIChLX1NQTElORV9UQUJMRV9TSVpFIC0gMS4wKTtcbnZhciBGTE9BVF8zMl9TVVBQT1JURUQgPSB0eXBlb2YgRmxvYXQzMkFycmF5ICE9PSAndW5kZWZpbmVkJztcblxuLy8gSGVscGVyIG1ldGhvZHNcbnZhciBhID0gZnVuY3Rpb24gKGExLCBhMikge1xuICByZXR1cm4gMS4wIC0gMy4wICogYTIgKyAzLjAgKiBhMTtcbn07XG52YXIgYiA9IGZ1bmN0aW9uIChhMSwgYTIpIHtcbiAgcmV0dXJuIDMuMCAqIGEyIC0gNi4wICogYTE7XG59O1xudmFyIGMgPSBmdW5jdGlvbiAoYTEpIHtcbiAgcmV0dXJuIDMuMCAqIGExO1xufTtcblxudmFyIGdldFNsb3BlID0gZnVuY3Rpb24gKHQsIGExLCBhMikge1xuICByZXR1cm4gMy4wICogYShhMSwgYTIpICogdCAqIHQgKyAyLjAgKiBiKGExLCBhMikgKiB0ICsgYyhhMSk7XG59O1xuXG52YXIgY2FsY0JlemllciA9IGZ1bmN0aW9uICh0LCBhMSwgYTIpIHtcbiAgcmV0dXJuICgoYShhMSwgYTIpICogdCArIGIoYTEsIGEyKSkgKiB0ICsgYyhhMSkpICogdDtcbn07XG5cbi8qXG4gIENyZWF0ZSBhIGN1YmljIGJlemllciByZXNvbHZlclxuKi9cbmZ1bmN0aW9uIGN1YmljQmV6aWVyKG1YMSwgbVkxLCBtWDIsIG1ZMikge1xuICB2YXIgc2FtcGxlVmFsdWVzID0gRkxPQVRfMzJfU1VQUE9SVEVEID8gbmV3IEZsb2F0MzJBcnJheShLX1NQTElORV9UQUJMRV9TSVpFKSA6IG5ldyBBcnJheShLX1NQTElORV9UQUJMRV9TSVpFKTtcbiAgdmFyIF9wcmVjb21wdXRlZCA9IGZhbHNlO1xuXG4gIHZhciBiaW5hcnlTdWJkaXZpZGUgPSBmdW5jdGlvbiAoYVgsIGFBLCBhQikge1xuICAgIHZhciBpID0gMDtcbiAgICB2YXIgY3VycmVudFggPSB2b2lkIDA7XG4gICAgdmFyIGN1cnJlbnRUID0gdm9pZCAwO1xuXG4gICAgZG8ge1xuICAgICAgY3VycmVudFQgPSBhQSArIChhQiAtIGFBKSAvIDIuMDtcbiAgICAgIGN1cnJlbnRYID0gY2FsY0JlemllcihjdXJyZW50VCwgbVgxLCBtWDIpIC0gYVg7XG4gICAgICBpZiAoY3VycmVudFggPiAwLjApIHtcbiAgICAgICAgYUIgPSBjdXJyZW50VDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGFBID0gY3VycmVudFQ7XG4gICAgICB9XG4gICAgfSB3aGlsZSAoTWF0aC5hYnMoY3VycmVudFgpID4gU1VCRElWSVNJT05fUFJFQ0lTSU9OICYmICsraSA8IFNVQkRJVklTSU9OX01BWF9JVEVSQVRJT05TKTtcblxuICAgIHJldHVybiBjdXJyZW50VDtcbiAgfTtcblxuICB2YXIgbmV3dG9uUmFwaHNvbkl0ZXJhdGUgPSBmdW5jdGlvbiAoYVgsIGFHdWVzc1QpIHtcbiAgICB2YXIgaSA9IDA7XG4gICAgdmFyIGN1cnJlbnRTbG9wZSA9IDA7XG4gICAgdmFyIGN1cnJlbnRYID0gdm9pZCAwO1xuXG4gICAgZm9yICg7IGkgPCBORVdUT05fSVRFUkFUSU9OUzsgKytpKSB7XG4gICAgICBjdXJyZW50U2xvcGUgPSBnZXRTbG9wZShhR3Vlc3NULCBtWDEsIG1YMik7XG5cbiAgICAgIGlmIChjdXJyZW50U2xvcGUgPT09IDAuMCkge1xuICAgICAgICByZXR1cm4gYUd1ZXNzVDtcbiAgICAgIH1cblxuICAgICAgY3VycmVudFggPSBjYWxjQmV6aWVyKGFHdWVzc1QsIG1YMSwgbVgyKSAtIGFYO1xuICAgICAgYUd1ZXNzVCAtPSBjdXJyZW50WCAvIGN1cnJlbnRTbG9wZTtcbiAgICB9XG5cbiAgICByZXR1cm4gYUd1ZXNzVDtcbiAgfTtcblxuICB2YXIgY2FsY1NhbXBsZVZhbHVlcyA9IGZ1bmN0aW9uICgpIHtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IEtfU1BMSU5FX1RBQkxFX1NJWkU7ICsraSkge1xuICAgICAgc2FtcGxlVmFsdWVzW2ldID0gY2FsY0JlemllcihpICogS19TQU1QTEVfU1RFUF9TSVpFLCBtWDEsIG1YMik7XG4gICAgfVxuICB9O1xuXG4gIHZhciBnZXRURm9yWCA9IGZ1bmN0aW9uIChhWCkge1xuICAgIHZhciBpbnRlcnZhbFN0YXJ0ID0gMC4wO1xuICAgIHZhciBjdXJyZW50U2FtcGxlID0gMTtcbiAgICB2YXIgbGFzdFNhbXBsZSA9IEtfU1BMSU5FX1RBQkxFX1NJWkUgLSAxO1xuICAgIHZhciBkaXN0ID0gMC4wO1xuICAgIHZhciBndWVzc0ZvclQgPSAwLjA7XG4gICAgdmFyIGluaXRpYWxTbG9wZSA9IDAuMDtcblxuICAgIGZvciAoOyBjdXJyZW50U2FtcGxlICE9IGxhc3RTYW1wbGUgJiYgc2FtcGxlVmFsdWVzW2N1cnJlbnRTYW1wbGVdIDw9IGFYOyArK2N1cnJlbnRTYW1wbGUpIHtcbiAgICAgIGludGVydmFsU3RhcnQgKz0gS19TQU1QTEVfU1RFUF9TSVpFO1xuICAgIH1cblxuICAgIC0tY3VycmVudFNhbXBsZTtcblxuICAgIGRpc3QgPSAoYVggLSBzYW1wbGVWYWx1ZXNbY3VycmVudFNhbXBsZV0pIC8gKHNhbXBsZVZhbHVlc1tjdXJyZW50U2FtcGxlICsgMV0gLSBzYW1wbGVWYWx1ZXNbY3VycmVudFNhbXBsZV0pO1xuICAgIGd1ZXNzRm9yVCA9IGludGVydmFsU3RhcnQgKyBkaXN0ICogS19TQU1QTEVfU1RFUF9TSVpFO1xuXG4gICAgaW5pdGlhbFNsb3BlID0gZ2V0U2xvcGUoZ3Vlc3NGb3JULCBtWDEsIG1YMik7XG5cbiAgICAvLyBJZiBzbG9wZSBpcyBncmVhdGVyIHRoYW4gbWluXG4gICAgaWYgKGluaXRpYWxTbG9wZSA+PSBORVdUT05fTUlOX1NMT1BFKSB7XG4gICAgICByZXR1cm4gbmV3dG9uUmFwaHNvbkl0ZXJhdGUoYVgsIGd1ZXNzRm9yVCk7XG4gICAgICAvLyBTbG9wZSBpcyBlcXVhbCB0byBtaW5cbiAgICB9IGVsc2UgaWYgKGluaXRpYWxTbG9wZSA9PT0gMC4wKSB7XG4gICAgICAgIHJldHVybiBndWVzc0ZvclQ7XG4gICAgICAgIC8vIFNsb3BlIGlzIGxlc3MgdGhhbiBtaW5cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIGJpbmFyeVN1YmRpdmlkZShhWCwgaW50ZXJ2YWxTdGFydCwgaW50ZXJ2YWxTdGFydCArIEtfU0FNUExFX1NURVBfU0laRSk7XG4gICAgICAgIH1cbiAgfTtcblxuICB2YXIgcHJlY29tcHV0ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICBfcHJlY29tcHV0ZWQgPSB0cnVlO1xuICAgIGlmIChtWDEgIT0gbVkxIHx8IG1YMiAhPSBtWTIpIHtcbiAgICAgIGNhbGNTYW1wbGVWYWx1ZXMoKTtcbiAgICB9XG4gIH07XG5cbiAgdmFyIHJlc29sdmVyID0gZnVuY3Rpb24gKGFYKSB7XG4gICAgdmFyIHJldHVyblZhbHVlID0gdm9pZCAwO1xuXG4gICAgaWYgKCFfcHJlY29tcHV0ZWQpIHtcbiAgICAgIHByZWNvbXB1dGUoKTtcbiAgICB9XG5cbiAgICAvLyBJZiBsaW5lYXIgZ3JhZGllbnQsIHJldHVybiBYIGFzIFRcbiAgICBpZiAobVgxID09PSBtWTEgJiYgbVgyID09PSBtWTIpIHtcbiAgICAgIHJldHVyblZhbHVlID0gYVg7XG5cbiAgICAgIC8vIElmIGF0IHN0YXJ0LCByZXR1cm4gMFxuICAgIH0gZWxzZSBpZiAoYVggPT09IDApIHtcbiAgICAgICAgcmV0dXJuVmFsdWUgPSAwO1xuXG4gICAgICAgIC8vIElmIGF0IGVuZCwgcmV0dXJuIDFcbiAgICAgIH0gZWxzZSBpZiAoYVggPT09IDEpIHtcbiAgICAgICAgICByZXR1cm5WYWx1ZSA9IDE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuVmFsdWUgPSBjYWxjQmV6aWVyKGdldFRGb3JYKGFYKSwgbVkxLCBtWTIpO1xuICAgICAgICB9XG5cbiAgICByZXR1cm4gcmV0dXJuVmFsdWU7XG4gIH07XG5cbiAgcmV0dXJuIHJlc29sdmVyO1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluTnlZeTloWTNScGIyNXpMMlZoYzJsdVp5OWpjbVZoZEdVdFltVjZhV1Z5TG1weklsMHNJbTVoYldWeklqcGJYU3dpYldGd2NHbHVaM01pT2lJN096dHJRa0Z0UTNkQ096czdPenM3T3pzN096czdPenM3TzBGQmNFSjRRaXhKUVVGTkxHOUNRVUZ2UWl4RFFVRndRanRCUVVOT0xFbEJRVTBzYlVKQlFXMUNMRXRCUVc1Q08wRkJRMDRzU1VGQlRTeDNRa0ZCZDBJc1UwRkJlRUk3UVVGRFRpeEpRVUZOTERaQ1FVRTJRaXhGUVVFM1FqdEJRVU5PTEVsQlFVMHNjMEpCUVhOQ0xFVkJRWFJDTzBGQlEwNHNTVUZCVFN4eFFrRkJjVUlzVDBGQlR5eHpRa0ZCYzBJc1IwRkJkRUlzUTBGQlVEdEJRVU16UWl4SlFVRk5MSEZDUVVGelFpeFBRVUZQTEZsQlFWQXNTMEZCZDBJc1YwRkJlRUk3T3p0QlFVYzFRaXhKUVVGTkxFbEJRVWtzVlVGQlF5eEZRVUZFTEVWQlFVc3NSVUZCVER0VFFVRlpMRTFCUVUwc1RVRkJUU3hGUVVGT0xFZEJRVmNzVFVGQlRTeEZRVUZPTzBOQlFUZENPMEZCUTFZc1NVRkJUU3hKUVVGSkxGVkJRVU1zUlVGQlJDeEZRVUZMTEVWQlFVdzdVMEZCV1N4TlFVRk5MRVZCUVU0c1IwRkJWeXhOUVVGTkxFVkJRVTQ3UTBGQmRrSTdRVUZEVml4SlFVRk5MRWxCUVVrc1ZVRkJReXhGUVVGRU8xTkJRVkVzVFVGQlRTeEZRVUZPTzBOQlFWSTdPMEZCUlZZc1NVRkJUU3hYUVVGWExGVkJRVU1zUTBGQlJDeEZRVUZKTEVWQlFVb3NSVUZCVVN4RlFVRlNPMU5CUVdVc1RVRkJUU3hGUVVGRkxFVkJRVVlzUlVGQlRTeEZRVUZPTEVOQlFVNHNSMEZCYTBJc1EwRkJiRUlzUjBGQmMwSXNRMEZCZEVJc1IwRkJNRUlzVFVGQlRTeEZRVUZGTEVWQlFVWXNSVUZCVFN4RlFVRk9MRU5CUVU0c1IwRkJhMElzUTBGQmJFSXNSMEZCYzBJc1JVRkJSU3hGUVVGR0xFTkJRV2hFTzBOQlFXWTdPMEZCUldwQ0xFbEJRVTBzWVVGQllTeFZRVUZETEVOQlFVUXNSVUZCU1N4RlFVRktMRVZCUVZFc1JVRkJVanRUUVVGbExFTkJRVU1zUTBGQlF5eEZRVUZGTEVWQlFVWXNSVUZCVFN4RlFVRk9MRWxCUVZrc1EwRkJXaXhIUVVGblFpeEZRVUZGTEVWQlFVWXNSVUZCVFN4RlFVRk9MRU5CUVdoQ0xFTkJRVVFzUjBGQk9FSXNRMEZCT1VJc1IwRkJhME1zUlVGQlJTeEZRVUZHTEVOQlFXeERMRU5CUVVRc1IwRkJORU1zUTBGQk5VTTdRMEZCWmpzN096czdRVUZMU2l4VFFVRlRMRmRCUVZRc1EwRkJjVUlzUjBGQmNrSXNSVUZCTUVJc1IwRkJNVUlzUlVGQkswSXNSMEZCTDBJc1JVRkJiME1zUjBGQmNFTXNSVUZCZVVNN1FVRkRkRVFzVFVGQlRTeGxRVUZsTEhGQ1FVRnhRaXhKUVVGSkxGbEJRVW9zUTBGQmFVSXNiVUpCUVdwQ0xFTkJRWEpDTEVkQlFUWkVMRWxCUVVrc1MwRkJTaXhEUVVGVkxHMUNRVUZXTEVOQlFUZEVMRU5CUkdsRE8wRkJSWFJFTEUxQlFVa3NaVUZCWlN4TFFVRm1MRU5CUm10RU96dEJRVWwwUkN4TlFVRk5MR3RDUVVGclFpeFZRVUZETEVWQlFVUXNSVUZCU3l4RlFVRk1MRVZCUVZNc1JVRkJWQ3hGUVVGblFqdEJRVU4wUXl4UlFVRkpMRWxCUVVrc1EwRkJTaXhEUVVSclF6dEJRVVYwUXl4UlFVRkpMR2xDUVVGS0xFTkJSbk5ETzBGQlIzUkRMRkZCUVVrc2FVSkJRVW9zUTBGSWMwTTdPMEZCUzNSRExFOUJRVWM3UVVGRFJDeHBRa0ZCVnl4TFFVRkxMRU5CUVVNc1MwRkJTeXhGUVVGTUxFTkJRVVFzUjBGQldTeEhRVUZhTEVOQlJHWTdRVUZGUkN4cFFrRkJWeXhYUVVGWExGRkJRVmdzUlVGQmNVSXNSMEZCY2tJc1JVRkJNRUlzUjBGQk1VSXNTVUZCYVVNc1JVRkJha01zUTBGR1ZqdEJRVWRFTEZWQlFVa3NWMEZCVnl4SFFVRllMRVZCUVdkQ08wRkJRMnhDTEdGQlFVc3NVVUZCVEN4RFFVUnJRanRQUVVGd1FpeE5RVVZQTzBGQlEwd3NZVUZCU3l4UlFVRk1MRU5CUkVzN1QwRkdVRHRMUVVoR0xGRkJVVk1zUzBGQlN5eEhRVUZNTEVOQlFWTXNVVUZCVkN4SlFVRnhRaXh4UWtGQmNrSXNTVUZCT0VNc1JVRkJSU3hEUVVGR0xFZEJRVTBzTUVKQlFVNHNSVUZpYWtJN08wRkJaWFJETEZkQlFVOHNVVUZCVUN4RFFXWnpRenRIUVVGb1FpeERRVW80UWpzN1FVRnpRblJFTEUxQlFVMHNkVUpCUVhWQ0xGVkJRVU1zUlVGQlJDeEZRVUZMTEU5QlFVd3NSVUZCYVVJN1FVRkROVU1zVVVGQlNTeEpRVUZKTEVOQlFVb3NRMEZFZDBNN1FVRkZOVU1zVVVGQlNTeGxRVUZsTEVOQlFXWXNRMEZHZDBNN1FVRkhOVU1zVVVGQlNTeHBRa0ZCU2l4RFFVZzBRenM3UVVGTE5VTXNWMEZCVHl4SlFVRkpMR2xDUVVGS0xFVkJRWFZDTEVWQlFVVXNRMEZCUml4RlFVRkxPMEZCUTJwRExIRkNRVUZsTEZOQlFWTXNUMEZCVkN4RlFVRnJRaXhIUVVGc1FpeEZRVUYxUWl4SFFVRjJRaXhEUVVGbUxFTkJSR2xET3p0QlFVZHFReXhWUVVGSkxHbENRVUZwUWl4SFFVRnFRaXhGUVVGelFqdEJRVU40UWl4bFFVRlBMRTlCUVZBc1EwRkVkMEk3VDBGQk1VSTdPMEZCU1VFc2FVSkJRVmNzVjBGQlZ5eFBRVUZZTEVWQlFXOUNMRWRCUVhCQ0xFVkJRWGxDTEVkQlFYcENMRWxCUVdkRExFVkJRV2hETEVOQlVITkNPMEZCVVdwRExHbENRVUZYTEZkQlFWY3NXVUZCV0N4RFFWSnpRanRMUVVGdVF6czdRVUZYUVN4WFFVRlBMRTlCUVZBc1EwRm9RalJETzBkQlFXcENMRU5CZEVKNVFqczdRVUY1UTNSRUxFMUJRVTBzYlVKQlFXMUNMRmxCUVUwN1FVRkROMElzVTBGQlN5eEpRVUZKTEVsQlFVa3NRMEZCU2l4RlFVRlBMRWxCUVVrc2JVSkJRVW9zUlVGQmVVSXNSVUZCUlN4RFFVRkdMRVZCUVVzN1FVRkROVU1zYlVKQlFXRXNRMEZCWWl4SlFVRnJRaXhYUVVGWExFbEJRVWtzYTBKQlFVb3NSVUZCZDBJc1IwRkJia01zUlVGQmQwTXNSMEZCZUVNc1EwRkJiRUlzUTBGRU5FTTdTMEZCT1VNN1IwRkVkVUlzUTBGNlF6WkNPenRCUVN0RGRFUXNUVUZCVFN4WFFVRlhMRlZCUVVNc1JVRkJSQ3hGUVVGUk8wRkJRM1pDTEZGQlFVa3NaMEpCUVdkQ0xFZEJRV2hDTEVOQlJHMUNPMEZCUlhaQ0xGRkJRVWtzWjBKQlFXZENMRU5CUVdoQ0xFTkJSbTFDTzBGQlIzWkNMRkZCUVVrc1lVRkJZU3h6UWtGQmMwSXNRMEZCZEVJc1EwRklUVHRCUVVsMlFpeFJRVUZKTEU5QlFVOHNSMEZCVUN4RFFVcHRRanRCUVV0MlFpeFJRVUZKTEZsQlFWa3NSMEZCV2l4RFFVeHRRanRCUVUxMlFpeFJRVUZKTEdWQlFXVXNSMEZCWml4RFFVNXRRanM3UVVGUmRrSXNWMEZCVHl4cFFrRkJhVUlzVlVGQmFrSXNTVUZCSzBJc1lVRkJZU3hoUVVGaUxFdEJRU3RDTEVWQlFTOUNMRVZCUVcxRExFVkJRVVVzWVVGQlJpeEZRVUZwUWp0QlFVTjRSaXgxUWtGQmFVSXNhMEpCUVdwQ0xFTkJSSGRHTzB0QlFURkdPenRCUVVsQkxFMUJRVVVzWVVGQlJpeERRVnAxUWpzN1FVRmpka0lzVjBGQlR5eERRVUZETEV0QlFVc3NZVUZCWVN4aFFVRmlMRU5CUVV3c1EwRkJSQ3hKUVVGelF5eGhRVUZoTEdkQ1FVRmpMRU5CUVdRc1EwRkJZaXhIUVVGblF5eGhRVUZoTEdGQlFXSXNRMEZCYUVNc1EwRkJkRU1zUTBGa1owSTdRVUZsZGtJc1owSkJRVmtzWjBKQlFXZENMRTlCUVU4c2EwSkJRVkFzUTBGbVREczdRVUZwUW5aQ0xHMUNRVUZsTEZOQlFWTXNVMEZCVkN4RlFVRnZRaXhIUVVGd1FpeEZRVUY1UWl4SFFVRjZRaXhEUVVGbU96czdRVUZxUW5WQ0xGRkJiMEp1UWl4blFrRkJaMElzWjBKQlFXaENMRVZCUVd0RE8wRkJRM0JETEdGQlFVOHNjVUpCUVhGQ0xFVkJRWEpDTEVWQlFYbENMRk5CUVhwQ0xFTkJRVkE3TzBGQlJHOURMRXRCUVhSRExFMUJSMDhzU1VGQlNTeHBRa0ZCYVVJc1IwRkJha0lzUlVGQmMwSTdRVUZETDBJc1pVRkJUeXhUUVVGUU96dEJRVVFyUWl4UFFVRXhRaXhOUVVkQk8wRkJRMHdzYVVKQlFVOHNaMEpCUVdkQ0xFVkJRV2hDTEVWQlFXOUNMR0ZCUVhCQ0xFVkJRVzFETEdkQ1FVRm5RaXhyUWtGQmFFSXNRMEZCTVVNc1EwRkVTenRUUVVoQk8wZEJka0pSTEVOQkwwTnhRenM3UVVFNFJYUkVMRTFCUVUwc1lVRkJZU3haUVVGTk8wRkJRM1pDTEcxQ1FVRmxMRWxCUVdZc1EwRkVkVUk3UVVGRmRrSXNVVUZCU1N4UFFVRlBMRWRCUVZBc1NVRkJZeXhQUVVGUExFZEJRVkFzUlVGQldUdEJRVU0xUWl4NVFrRkVORUk3UzBGQk9VSTdSMEZHYVVJc1EwRTVSVzFET3p0QlFYRkdkRVFzVFVGQlRTeFhRVUZYTEZWQlFVTXNSVUZCUkN4RlFVRlJPMEZCUTNaQ0xGRkJRVWtzYjBKQlFVb3NRMEZFZFVJN08wRkJSM1pDTEZGQlFVa3NRMEZCUXl4WlFVRkVMRVZCUVdVN1FVRkRha0lzYlVKQlJHbENPMHRCUVc1Q096czdRVUZJZFVJc1VVRlJia0lzVVVGQlVTeEhRVUZTTEVsQlFXVXNVVUZCVVN4SFFVRlNMRVZCUVdFN1FVRkRPVUlzYjBKQlFXTXNSVUZCWkRzN08wRkJSRGhDTEV0QlFXaERMRTFCU1U4c1NVRkJTU3hQUVVGUExFTkJRVkFzUlVGQlZUdEJRVU51UWl4elFrRkJZeXhEUVVGa096czdRVUZFYlVJc1QwRkJaQ3hOUVVsQkxFbEJRVWtzVDBGQlR5eERRVUZRTEVWQlFWVTdRVUZEYmtJc2QwSkJRV01zUTBGQlpDeERRVVJ0UWp0VFFVRmtMRTFCUjBFN1FVRkRUQ3gzUWtGQll5eFhRVUZYTEZOQlFWTXNSVUZCVkN4RFFVRllMRVZCUVhsQ0xFZEJRWHBDTEVWQlFUaENMRWRCUVRsQ0xFTkJRV1FzUTBGRVN6dFRRVWhCT3p0QlFVOVFMRmRCUVU4c1YwRkJVQ3hEUVhaQ2RVSTdSMEZCVWl4RFFYSkdjVU03TzBGQkswZDBSQ3hUUVVGUExGRkJRVkFzUTBFdlIzTkVPME5CUVhwRElpd2labWxzWlNJNkltTnlaV0YwWlMxaVpYcHBaWEl1YW5NaUxDSnpiM1Z5WTJWU2IyOTBJam9pTDFWelpYSnpMMDFoZEhRdlUybDBaWE12Y0c5d2JXOTBhVzl1SWl3aWMyOTFjbU5sYzBOdmJuUmxiblFpT2xzaUx5cGNiaUFnUW1WNmFXVnlJR1oxYm1OMGFXOXVJR2RsYm1WeVlYUnZjbHh1SUNBZ0lGeHVJQ0JIWWNPcmRHRnVJRkpsYm1GMVpHVmhkU2R6SUVKbGVtbGxja1ZoYzJsdVoxeHVJQ0JvZEhSd2N6b3ZMMmRwZEdoMVlpNWpiMjB2WjNKbEwySmxlbWxsY2kxbFlYTnBibWN2WW14dllpOXRZWE4wWlhJdmFXNWtaWGd1YW5NZ0lGeHVJQ0JvZEhSd2N6b3ZMMmRwZEdoMVlpNWpiMjB2WjNKbEwySmxlbWxsY2kxbFlYTnBibWN2WW14dllpOXRZWE4wWlhJdlRFbERSVTVUUlZ4dUlDQlpiM1VuY21VZ1lTQm9aWEp2WEc0Z0lGeHVJQ0JWYzJWY2JpQWdYRzRnSUNBZ2RtRnlJR1ZoYzJWUGRYUWdQU0J1WlhjZ1FtVjZhV1Z5S0M0eE55d3VOamNzTGpnekxDNDJOeWtzWEc0Z0lDQWdJQ0I0SUQwZ1pXRnpaVTkxZENnd0xqVXBPeUF2THlCeVpYUjFjbTV6SURBdU5qSTNMaTR1WEc0cUwxeHVYRzR2THlCRGIyNXpkR0Z1ZEhOY2JtTnZibk4wSUU1RlYxUlBUbDlKVkVWU1FWUkpUMDVUSUQwZ09EdGNibU52Ym5OMElFNUZWMVJQVGw5TlNVNWZVMHhQVUVVZ1BTQXdMakF3TVR0Y2JtTnZibk4wSUZOVlFrUkpWa2xUU1U5T1gxQlNSVU5KVTBsUFRpQTlJREF1TURBd01EQXdNVHRjYm1OdmJuTjBJRk5WUWtSSlZrbFRTVTlPWDAxQldGOUpWRVZTUVZSSlQwNVRJRDBnTVRBN1hHNWpiMjV6ZENCTFgxTlFURWxPUlY5VVFVSk1SVjlUU1ZwRklEMGdNVEU3WEc1amIyNXpkQ0JMWDFOQlRWQk1SVjlUVkVWUVgxTkpXa1VnUFNBeExqQWdMeUFvUzE5VFVFeEpUa1ZmVkVGQ1RFVmZVMGxhUlNBdElERXVNQ2s3WEc1amIyNXpkQ0JHVEU5QlZGOHpNbDlUVlZCUVQxSlVSVVFnUFNBb2RIbHdaVzltSUVac2IyRjBNekpCY25KaGVTQWhQVDBnSjNWdVpHVm1hVzVsWkNjcE8xeHVYRzR2THlCSVpXeHdaWElnYldWMGFHOWtjMXh1WTI5dWMzUWdZU0E5SUNoaE1Td2dZVElwSUQwK0lERXVNQ0F0SURNdU1DQXFJR0V5SUNzZ015NHdJQ29nWVRFN1hHNWpiMjV6ZENCaUlEMGdLR0V4TENCaE1pa2dQVDRnTXk0d0lDb2dZVElnTFNBMkxqQWdLaUJoTVR0Y2JtTnZibk4wSUdNZ1BTQW9ZVEVwSUQwK0lETXVNQ0FxSUdFeE8xeHVYRzVqYjI1emRDQm5aWFJUYkc5d1pTQTlJQ2gwTENCaE1Td2dZVElwSUQwK0lETXVNQ0FxSUdFb1lURXNJR0V5S1NBcUlIUWdLaUIwSUNzZ01pNHdJQ29nWWloaE1Td2dZVElwSUNvZ2RDQXJJR01vWVRFcE8xeHVYRzVqYjI1emRDQmpZV3hqUW1WNmFXVnlJRDBnS0hRc0lHRXhMQ0JoTWlrZ1BUNGdLQ2hoS0dFeExDQmhNaWtnS2lCMElDc2dZaWhoTVN3Z1lUSXBLU0FxSUhRZ0t5QmpLR0V4S1NrZ0tpQjBPMXh1WEc0dktseHVJQ0JEY21WaGRHVWdZU0JqZFdKcFl5QmlaWHBwWlhJZ2NtVnpiMngyWlhKY2Jpb3ZYRzVsZUhCdmNuUWdaR1ZtWVhWc2RDQm1kVzVqZEdsdmJpQmpkV0pwWTBKbGVtbGxjaWh0V0RFc0lHMVpNU3dnYlZneUxDQnRXVElwSUh0Y2JpQWdZMjl1YzNRZ2MyRnRjR3hsVm1Gc2RXVnpJRDBnUmt4UFFWUmZNekpmVTFWUVVFOVNWRVZFSUQ4Z2JtVjNJRVpzYjJGME16SkJjbkpoZVNoTFgxTlFURWxPUlY5VVFVSk1SVjlUU1ZwRktTQTZJRzVsZHlCQmNuSmhlU2hMWDFOUVRFbE9SVjlVUVVKTVJWOVRTVnBGS1R0Y2JpQWdiR1YwSUY5d2NtVmpiMjF3ZFhSbFpDQTlJR1poYkhObE8xeHVYRzRnSUdOdmJuTjBJR0pwYm1GeWVWTjFZbVJwZG1sa1pTQTlJQ2hoV0N3Z1lVRXNJR0ZDS1NBOVBpQjdYRzRnSUNBZ2JHVjBJR2tnUFNBd08xeHVJQ0FnSUd4bGRDQmpkWEp5Wlc1MFdEdGNiaUFnSUNCc1pYUWdZM1Z5Y21WdWRGUTdYRzVjYmlBZ0lDQmtieUI3WEc0Z0lDQWdJQ0JqZFhKeVpXNTBWQ0E5SUdGQklDc2dLR0ZDSUMwZ1lVRXBJQzhnTWk0d08xeHVJQ0FnSUNBZ1kzVnljbVZ1ZEZnZ1BTQmpZV3hqUW1WNmFXVnlLR04xY25KbGJuUlVMQ0J0V0RFc0lHMVlNaWtnTFNCaFdEdGNiaUFnSUNBZ0lHbG1JQ2hqZFhKeVpXNTBXQ0ErSURBdU1Da2dlMXh1SUNBZ0lDQWdJQ0JoUWlBOUlHTjFjbkpsYm5SVU8xeHVJQ0FnSUNBZ2ZTQmxiSE5sSUh0Y2JpQWdJQ0FnSUNBZ1lVRWdQU0JqZFhKeVpXNTBWRHRjYmlBZ0lDQWdJSDFjYmlBZ0lDQjlJSGRvYVd4bElDaE5ZWFJvTG1GaWN5aGpkWEp5Wlc1MFdDa2dQaUJUVlVKRVNWWkpVMGxQVGw5UVVrVkRTVk5KVDA0Z0ppWWdLeXRwSUR3Z1UxVkNSRWxXU1ZOSlQwNWZUVUZZWDBsVVJWSkJWRWxQVGxNcE8xeHVYRzRnSUNBZ2NtVjBkWEp1SUdOMWNuSmxiblJVTzF4dUlDQjlPMXh1WEc0Z0lHTnZibk4wSUc1bGQzUnZibEpoY0doemIyNUpkR1Z5WVhSbElEMGdLR0ZZTENCaFIzVmxjM05VS1NBOVBpQjdYRzRnSUNBZ2JHVjBJR2tnUFNBd08xeHVJQ0FnSUd4bGRDQmpkWEp5Wlc1MFUyeHZjR1VnUFNBd08xeHVJQ0FnSUd4bGRDQmpkWEp5Wlc1MFdEdGNibHh1SUNBZ0lHWnZjaUFvT3lCcElEd2dUa1ZYVkU5T1gwbFVSVkpCVkVsUFRsTTdJQ3NyYVNrZ2UxeHVJQ0FnSUNBZ1kzVnljbVZ1ZEZOc2IzQmxJRDBnWjJWMFUyeHZjR1VvWVVkMVpYTnpWQ3dnYlZneExDQnRXRElwTzF4dUlDQWdJQ0FnWEc0Z0lDQWdJQ0JwWmlBb1kzVnljbVZ1ZEZOc2IzQmxJRDA5UFNBd0xqQXBJSHRjYmlBZ0lDQWdJQ0FnY21WMGRYSnVJR0ZIZFdWemMxUTdYRzRnSUNBZ0lDQjlYRzRnSUNBZ0lDQmNiaUFnSUNBZ0lHTjFjbkpsYm5SWUlEMGdZMkZzWTBKbGVtbGxjaWhoUjNWbGMzTlVMQ0J0V0RFc0lHMVlNaWtnTFNCaFdEdGNiaUFnSUNBZ0lHRkhkV1Z6YzFRZ0xUMGdZM1Z5Y21WdWRGZ2dMeUJqZFhKeVpXNTBVMnh2Y0dVN1hHNGdJQ0FnZlZ4dUlDQWdJRnh1SUNBZ0lISmxkSFZ5YmlCaFIzVmxjM05VTzF4dUlDQjlPMXh1WEc0Z0lHTnZibk4wSUdOaGJHTlRZVzF3YkdWV1lXeDFaWE1nUFNBb0tTQTlQaUI3WEc0Z0lDQWdabTl5SUNoc1pYUWdhU0E5SURBN0lHa2dQQ0JMWDFOUVRFbE9SVjlVUVVKTVJWOVRTVnBGT3lBcksya3BJSHRjYmlBZ0lDQWdJSE5oYlhCc1pWWmhiSFZsYzF0cFhTQTlJR05oYkdOQ1pYcHBaWElvYVNBcUlFdGZVMEZOVUV4RlgxTlVSVkJmVTBsYVJTd2diVmd4TENCdFdESXBPMXh1SUNBZ0lIMWNiaUFnZlR0Y2JseHVJQ0JqYjI1emRDQm5aWFJVUm05eVdDQTlJQ2hoV0NrZ1BUNGdlMXh1SUNBZ0lHeGxkQ0JwYm5SbGNuWmhiRk4wWVhKMElEMGdNQzR3TzF4dUlDQWdJR3hsZENCamRYSnlaVzUwVTJGdGNHeGxJRDBnTVR0Y2JpQWdJQ0JzWlhRZ2JHRnpkRk5oYlhCc1pTQTlJRXRmVTFCTVNVNUZYMVJCUWt4RlgxTkpXa1VnTFNBeE8xeHVJQ0FnSUd4bGRDQmthWE4wSUQwZ01DNHdPMXh1SUNBZ0lHeGxkQ0JuZFdWemMwWnZjbFFnUFNBd0xqQTdYRzRnSUNBZ2JHVjBJR2x1YVhScFlXeFRiRzl3WlNBOUlEQXVNRHRjYmlBZ0lDQWdJRnh1SUNBZ0lHWnZjaUFvT3lCamRYSnlaVzUwVTJGdGNHeGxJQ0U5SUd4aGMzUlRZVzF3YkdVZ0ppWWdjMkZ0Y0d4bFZtRnNkV1Z6VzJOMWNuSmxiblJUWVcxd2JHVmRJRHc5SUdGWU95QXJLMk4xY25KbGJuUlRZVzF3YkdVcElIdGNiaUFnSUNBZ0lHbHVkR1Z5ZG1Gc1UzUmhjblFnS3owZ1MxOVRRVTFRVEVWZlUxUkZVRjlUU1ZwRk8xeHVJQ0FnSUgxY2JpQWdJQ0JjYmlBZ0lDQXRMV04xY25KbGJuUlRZVzF3YkdVN1hHNGdJQ0FnWEc0Z0lDQWdaR2x6ZENBOUlDaGhXQ0F0SUhOaGJYQnNaVlpoYkhWbGMxdGpkWEp5Wlc1MFUyRnRjR3hsWFNrZ0x5QW9jMkZ0Y0d4bFZtRnNkV1Z6VzJOMWNuSmxiblJUWVcxd2JHVXJNVjBnTFNCellXMXdiR1ZXWVd4MVpYTmJZM1Z5Y21WdWRGTmhiWEJzWlYwcE8xeHVJQ0FnSUdkMVpYTnpSbTl5VkNBOUlHbHVkR1Z5ZG1Gc1UzUmhjblFnS3lCa2FYTjBJQ29nUzE5VFFVMVFURVZmVTFSRlVGOVRTVnBGTzF4dUlDQWdJRnh1SUNBZ0lHbHVhWFJwWVd4VGJHOXdaU0E5SUdkbGRGTnNiM0JsS0dkMVpYTnpSbTl5VkN3Z2JWZ3hMQ0J0V0RJcE8xeHVJQ0FnSUZ4dUlDQWdJQzh2SUVsbUlITnNiM0JsSUdseklHZHlaV0YwWlhJZ2RHaGhiaUJ0YVc1Y2JpQWdJQ0JwWmlBb2FXNXBkR2xoYkZOc2IzQmxJRDQ5SUU1RlYxUlBUbDlOU1U1ZlUweFBVRVVwSUh0Y2JpQWdJQ0FnSUhKbGRIVnliaUJ1WlhkMGIyNVNZWEJvYzI5dVNYUmxjbUYwWlNoaFdDd2daM1ZsYzNOR2IzSlVLVHRjYmlBZ0lDQXZMeUJUYkc5d1pTQnBjeUJsY1hWaGJDQjBieUJ0YVc1Y2JpQWdJQ0I5SUdWc2MyVWdhV1lnS0dsdWFYUnBZV3hUYkc5d1pTQTlQVDBnTUM0d0tTQjdYRzRnSUNBZ0lDQnlaWFIxY200Z1ozVmxjM05HYjNKVU8xeHVJQ0FnSUM4dklGTnNiM0JsSUdseklHeGxjM01nZEdoaGJpQnRhVzVjYmlBZ0lDQjlJR1ZzYzJVZ2UxeHVJQ0FnSUNBZ2NtVjBkWEp1SUdKcGJtRnllVk4xWW1ScGRtbGtaU2hoV0N3Z2FXNTBaWEoyWVd4VGRHRnlkQ3dnYVc1MFpYSjJZV3hUZEdGeWRDQXJJRXRmVTBGTlVFeEZYMU5VUlZCZlUwbGFSU2s3WEc0Z0lDQWdmVnh1SUNCOU8xeHVYRzRnSUdOdmJuTjBJSEJ5WldOdmJYQjFkR1VnUFNBb0tTQTlQaUI3WEc0Z0lDQWdYM0J5WldOdmJYQjFkR1ZrSUQwZ2RISjFaVHRjYmlBZ0lDQnBaaUFvYlZneElDRTlJRzFaTVNCOGZDQnRXRElnSVQwZ2JWa3lLU0I3WEc0Z0lDQWdJQ0JqWVd4alUyRnRjR3hsVm1Gc2RXVnpLQ2s3WEc0Z0lDQWdmVnh1SUNCOU8xeHVYRzRnSUdOdmJuTjBJSEpsYzI5c2RtVnlJRDBnS0dGWUtTQTlQaUI3WEc0Z0lDQWdiR1YwSUhKbGRIVnlibFpoYkhWbE8xeHVYRzRnSUNBZ2FXWWdLQ0ZmY0hKbFkyOXRjSFYwWldRcElIdGNiaUFnSUNBZ0lIQnlaV052YlhCMWRHVW9LVHRjYmlBZ0lDQjlYRzRnSUNBZ1hHNGdJQ0FnTHk4Z1NXWWdiR2x1WldGeUlHZHlZV1JwWlc1MExDQnlaWFIxY200Z1dDQmhjeUJVWEc0Z0lDQWdhV1lnS0cxWU1TQTlQVDBnYlZreElDWW1JRzFZTWlBOVBUMGdiVmt5S1NCN1hHNGdJQ0FnSUNCeVpYUjFjbTVXWVd4MVpTQTlJR0ZZTzF4dUlDQWdJQ0FnWEc0Z0lDQWdMeThnU1dZZ1lYUWdjM1JoY25Rc0lISmxkSFZ5YmlBd1hHNGdJQ0FnZlNCbGJITmxJR2xtSUNoaFdDQTlQVDBnTUNrZ2UxeHVJQ0FnSUNBZ2NtVjBkWEp1Vm1Gc2RXVWdQU0F3TzF4dUlDQWdJQ0FnWEc0Z0lDQWdMeThnU1dZZ1lYUWdaVzVrTENCeVpYUjFjbTRnTVZ4dUlDQWdJSDBnWld4elpTQnBaaUFvWVZnZ1BUMDlJREVwSUh0Y2JpQWdJQ0FnSUhKbGRIVnlibFpoYkhWbElEMGdNVHRjYmx4dUlDQWdJSDBnWld4elpTQjdYRzRnSUNBZ0lDQnlaWFIxY201V1lXeDFaU0E5SUdOaGJHTkNaWHBwWlhJb1oyVjBWRVp2Y2xnb1lWZ3BMQ0J0V1RFc0lHMVpNaWs3WEc0Z0lDQWdmVnh1SUNBZ0lGeHVJQ0FnSUhKbGRIVnliaUJ5WlhSMWNtNVdZV3gxWlR0Y2JpQWdmVHRjYmx4dUlDQnlaWFIxY200Z2NtVnpiMngyWlhJN1hHNTlYRzRpWFgwPVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvYWN0aW9ucy9lYXNpbmcvY3JlYXRlLWJlemllci5qc1xuICoqIG1vZHVsZSBpZCA9IDUxXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG4vKlxuICBEZXRlY3QgYW5kIGxvYWQgYW4gYXBwcm9wcmlhdGUgY2xvY2sgc2V0dGluZyBmb3IgdGhlIGVudmlyb25tZW50XG4qL1xuXG52YXIgaGFzUkFGID0gdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSA/IHRydWUgOiBmYWxzZTtcblxudmFyIHRpY2sgPSB2b2lkIDA7XG5cbmlmIChoYXNSQUYpIHtcbiAgdGljayA9IGZ1bmN0aW9uIChjYWxsYmFjaykge1xuICAgIHJldHVybiB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKGNhbGxiYWNrKTtcbiAgfTtcbn0gZWxzZSB7XG4gIChmdW5jdGlvbiAoKSB7XG4gICAgLypcbiAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSBwb2x5ZmlsbFxuICAgICAgXG4gICAgICBGb3IgSUU4LzkgRmxpbnN0b25lcyBhbmQgbm9uLWJyb3dzZXIgZW52aXJvbm1lbnRzXG4gICAgICAgVGFrZW4gZnJvbSBQYXVsIElyaXNoLiBXZSd2ZSBzdHJpcHBlZCBvdXQgY2FuY2VsQW5pbWF0aW9uRnJhbWUgY2hlY2tzIGJlY2F1c2Ugd2UgZG9uJ3QgZm94IHdpdGggdGhhdFxuICAgICAgXG4gICAgICBodHRwOi8vcGF1bGlyaXNoLmNvbS8yMDExL3JlcXVlc3RhbmltYXRpb25mcmFtZS1mb3Itc21hcnQtYW5pbWF0aW5nL1xuICAgICAgaHR0cDovL215Lm9wZXJhLmNvbS9lbW9sbGVyL2Jsb2cvMjAxMS8xMi8yMC9yZXF1ZXN0YW5pbWF0aW9uZnJhbWUtZm9yLXNtYXJ0LWVyLWFuaW1hdGluZ1xuICAgICAgIFxuICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lIHBvbHlmaWxsIGJ5IEVyaWsgTcO2bGxlci4gZml4ZXMgZnJvbSBQYXVsIElyaXNoIGFuZCBUaW5vIFppamRlbFxuICAgICAgIFxuICAgICAgTUlUIGxpY2Vuc2VcbiAgICAqL1xuICAgIHZhciBsYXN0VGltZSA9IDA7XG5cbiAgICB0aWNrID0gZnVuY3Rpb24gKGNhbGxiYWNrKSB7XG4gICAgICB2YXIgY3VycmVudFRpbWUgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcbiAgICAgIHZhciB0aW1lVG9DYWxsID0gTWF0aC5tYXgoMCwgMTYgLSAoY3VycmVudFRpbWUgLSBsYXN0VGltZSkpO1xuXG4gICAgICBsYXN0VGltZSA9IGN1cnJlbnRUaW1lICsgdGltZVRvQ2FsbDtcblxuICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBjYWxsYmFjayhsYXN0VGltZSk7XG4gICAgICB9LCB0aW1lVG9DYWxsKTtcbiAgICB9O1xuICB9KSgpO1xufVxuXG5leHBvcnRzLmRlZmF1bHQgPSB0aWNrO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluTnlZeTkwWVhOckwzUnBZMnN1YW5NaVhTd2libUZ0WlhNaU9sdGRMQ0p0WVhCd2FXNW5jeUk2SWpzN096czdPenRCUVVsQkxFbEJRVTBzVTBGQlV5eFBRVUZSTEUxQlFWQXNTMEZCYTBJc1YwRkJiRUlzU1VGQmFVTXNUMEZCVHl4eFFrRkJVQ3hIUVVGblF5eEpRVUZzUlN4SFFVRjVSU3hMUVVGNlJUczdRVUZGWml4SlFVRkpMR0ZCUVVvN08wRkJSVUVzU1VGQlNTeE5RVUZLTEVWQlFWazdRVUZEVml4VFFVRlBMRlZCUVVNc1VVRkJSRHRYUVVGakxFOUJRVThzY1VKQlFWQXNRMEZCTmtJc1VVRkJOMEk3UjBGQlpDeERRVVJITzBOQlFWb3NUVUZIVHpzN096czdPenM3T3pzN096czdPMEZCWlV3c1VVRkJTU3hYUVVGWExFTkJRVmc3TzBGQlJVb3NWMEZCVHl4VlFVRkRMRkZCUVVRc1JVRkJZenRCUVVOdVFpeFZRVUZOTEdOQlFXTXNTVUZCU1N4SlFVRktMRWRCUVZjc1QwRkJXQ3hGUVVGa0xFTkJSR0U3UVVGRmJrSXNWVUZCVFN4aFFVRmhMRXRCUVVzc1IwRkJUQ3hEUVVGVExFTkJRVlFzUlVGQldTeE5RVUZOTEdOQlFXTXNVVUZCWkN4RFFVRk9MRU5CUVhwQ0xFTkJSbUU3TzBGQlNXNUNMR2xDUVVGWExHTkJRV01zVlVGQlpDeERRVXBST3p0QlFVMXVRaXhwUWtGQlZ6dGxRVUZOTEZOQlFWTXNVVUZCVkR0UFFVRk9MRVZCUVRCQ0xGVkJRWEpETEVWQlRtMUNPMHRCUVdRN1QwRnFRa1k3UTBGSVVEczdhMEpCT0VKbElpd2labWxzWlNJNkluUnBZMnN1YW5NaUxDSnpiM1Z5WTJWU2IyOTBJam9pTDFWelpYSnpMMDFoZEhRdlUybDBaWE12Y0c5d2JXOTBhVzl1SWl3aWMyOTFjbU5sYzBOdmJuUmxiblFpT2xzaUx5cGNiaUFnUkdWMFpXTjBJR0Z1WkNCc2IyRmtJR0Z1SUdGd2NISnZjSEpwWVhSbElHTnNiMk5ySUhObGRIUnBibWNnWm05eUlIUm9aU0JsYm5acGNtOXViV1Z1ZEZ4dUtpOWNibHh1WTI5dWMzUWdhR0Z6VWtGR0lEMGdLSFI1Y0dWdlppQjNhVzVrYjNjZ0lUMDlJQ2QxYm1SbFptbHVaV1FuSUNZbUlIZHBibVJ2ZHk1eVpYRjFaWE4wUVc1cGJXRjBhVzl1Um5KaGJXVXBJRDhnZEhKMVpTQTZJR1poYkhObE8xeHVYRzVzWlhRZ2RHbGphenRjYmx4dWFXWWdLR2hoYzFKQlJpa2dlMXh1SUNCMGFXTnJJRDBnS0dOaGJHeGlZV05yS1NBOVBpQjNhVzVrYjNjdWNtVnhkV1Z6ZEVGdWFXMWhkR2x2YmtaeVlXMWxLR05oYkd4aVlXTnJLVHRjYmx4dWZTQmxiSE5sSUh0Y2JpQWdMeXBjYmlBZ0lDQnlaWEYxWlhOMFFXNXBiV0YwYVc5dVJuSmhiV1VnY0c5c2VXWnBiR3hjYmlBZ0lDQmNiaUFnSUNCR2IzSWdTVVU0THprZ1JteHBibk4wYjI1bGN5QmhibVFnYm05dUxXSnliM2R6WlhJZ1pXNTJhWEp2Ym0xbGJuUnpYRzVjYmlBZ0lDQlVZV3RsYmlCbWNtOXRJRkJoZFd3Z1NYSnBjMmd1SUZkbEozWmxJSE4wY21sd2NHVmtJRzkxZENCallXNWpaV3hCYm1sdFlYUnBiMjVHY21GdFpTQmphR1ZqYTNNZ1ltVmpZWFZ6WlNCM1pTQmtiMjRuZENCbWIzZ2dkMmwwYUNCMGFHRjBYRzRnSUNBZ1hHNGdJQ0FnYUhSMGNEb3ZMM0JoZFd4cGNtbHphQzVqYjIwdk1qQXhNUzl5WlhGMVpYTjBZVzVwYldGMGFXOXVabkpoYldVdFptOXlMWE50WVhKMExXRnVhVzFoZEdsdVp5OWNiaUFnSUNCb2RIUndPaTh2YlhrdWIzQmxjbUV1WTI5dEwyVnRiMnhzWlhJdllteHZaeTh5TURFeEx6RXlMekl3TDNKbGNYVmxjM1JoYm1sdFlYUnBiMjVtY21GdFpTMW1iM0l0YzIxaGNuUXRaWEl0WVc1cGJXRjBhVzVuWEc0Z0lDQWdJRnh1SUNBZ0lISmxjWFZsYzNSQmJtbHRZWFJwYjI1R2NtRnRaU0J3YjJ4NVptbHNiQ0JpZVNCRmNtbHJJRTNEdG14c1pYSXVJR1pwZUdWeklHWnliMjBnVUdGMWJDQkpjbWx6YUNCaGJtUWdWR2x1YnlCYWFXcGtaV3hjYmlBZ0lDQWdYRzRnSUNBZ1RVbFVJR3hwWTJWdWMyVmNiaUFnS2k5Y2JpQWdiR1YwSUd4aGMzUlVhVzFsSUQwZ01EdGNibHh1SUNCMGFXTnJJRDBnS0dOaGJHeGlZV05yS1NBOVBpQjdYRzRnSUNBZ1kyOXVjM1FnWTNWeWNtVnVkRlJwYldVZ1BTQnVaWGNnUkdGMFpTZ3BMbWRsZEZScGJXVW9LVHRjYmlBZ0lDQmpiMjV6ZENCMGFXMWxWRzlEWVd4c0lEMGdUV0YwYUM1dFlYZ29NQ3dnTVRZZ0xTQW9ZM1Z5Y21WdWRGUnBiV1VnTFNCc1lYTjBWR2x0WlNrcE8xeHVYRzRnSUNBZ2JHRnpkRlJwYldVZ1BTQmpkWEp5Wlc1MFZHbHRaU0FySUhScGJXVlViME5oYkd3N1hHNWNiaUFnSUNCelpYUlVhVzFsYjNWMEtDZ3BJRDArSUdOaGJHeGlZV05yS0d4aGMzUlVhVzFsS1N3Z2RHbHRaVlJ2UTJGc2JDazdYRzRnSUgwN1hHNTlYRzVjYm1WNGNHOXlkQ0JrWldaaGRXeDBJSFJwWTJzN0lsMTlcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL3Rhc2svdGljay5qc1xuICoqIG1vZHVsZSBpZCA9IDUyXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbi8vIFtpbnRdOiBJbmNyZW1lbnRlZCBmb3IgZWFjaCBuZXcgcnVubmluZyB0YXNrXG52YXIgY3VycmVudFRhc2tJZCA9IDA7XG5cbi8vIFtpbnRdOiBOdW1iZXIgb2YgYWxsIHJ1bm5pbmcgdGFza2VzXG52YXIgdG90YWxSdW5uaW5nQ291bnQgPSAwO1xuXG4vLyBbaW50XTogTnVtYmVyIG9mIHJ1bm5pbmcgdGFza2VzIGV4Y2x1ZGluZyBiYWNrZ3JvdW5kIHRhc2tlc1xudmFyIG5vbkJhY2tncm91bmRSdW5uaW5nQ291bnQgPSAwO1xuXG4vLyBbYXJyYXldOiBBcnJheSBvZiBydW5uaW5nIHRhc2sgSURzXG52YXIgcnVubmluZ0lkcyA9IFtdO1xuXG4vLyBbb2JqZWN0XTogTWFwIG9mIHJ1bm5pbmcgdGFza2VzXG52YXIgYWN0aXZlVGFza3MgPSB7fTtcblxuLy8gW2FycmF5XTogQXJyYXkgb2YgdGFzayBJRHMgcXVldWVkIGZvciBhY3RpdmF0aW9uXG52YXIgYWN0aXZhdGVRdWV1ZSA9IFtdO1xuXG4vLyBbYXJyYXldOiBBcnJheSBvZiB0YXNrIElEcyBxdWV1ZWQgZm9yIGRlYWN0aXZhdGlvblxudmFyIGRlYWN0aXZhdGVRdWV1ZSA9IFtdO1xuXG4vKlxuICBVcGRhdGUgYWN0aXZhdGUvZGVhY3RpdmF0ZSBxdWV1ZXNcblxuICBAcGFyYW0gW251bWJlcl1cbiAgQHBhcmFtIFthcnJheV1cbiAgQHBhcmFtIFthcnJheV1cbiovXG52YXIgdXBkYXRlUXVldWVzID0gZnVuY3Rpb24gKGlkLCBpbkxpc3QsIG91dExpc3QpIHtcbiAgdmFyIGluUG9zaXRpb24gPSBpbkxpc3QuaW5kZXhPZihpZCk7XG4gIHZhciBvdXRQb3NpdGlvbiA9IG91dExpc3QuaW5kZXhPZihpZCk7XG5cbiAgaWYgKGluUG9zaXRpb24gPT09IC0xKSB7XG4gICAgaW5MaXN0LnB1c2goaWQpO1xuICB9XG5cbiAgaWYgKG91dFBvc2l0aW9uID4gLTEpIHtcbiAgICBvdXRMaXN0LnNwbGljZShvdXRQb3NpdGlvbiwgMSk7XG4gIH1cbn07XG5cbi8qXG4gIFVwZGF0ZSBydW5uaW5nXG5cbiAgW2Jvb2xlYW5dOiBgdHJ1ZWAgdG8gYWRkXG4gIFtib29sZWFuXTogYHRydWVgIGlmIGxhenlcbiovXG52YXIgdXBkYXRlUnVubmluZ0NvdW50ID0gZnVuY3Rpb24gKGFkZCwgaXNMYXp5KSB7XG4gIHZhciBtb2RpZnkgPSBhZGQgPyAxIDogLTE7XG5cbiAgdG90YWxSdW5uaW5nQ291bnQgKz0gbW9kaWZ5O1xuXG4gIGlmICghaXNMYXp5KSB7XG4gICAgbm9uQmFja2dyb3VuZFJ1bm5pbmdDb3VudCArPSBtb2RpZnk7XG4gIH1cbn07XG5cbmV4cG9ydHMuZGVmYXVsdCA9IHtcbiAgYWN0aXZlVGFza3M6IGFjdGl2ZVRhc2tzLFxuXG4gIC8vIEFjdGl2YXRlIGEgdGFza1xuICBhY3RpdmF0ZTogZnVuY3Rpb24gKGlkLCB0YXNrKSB7XG4gICAgYWN0aXZlVGFza3NbaWRdID0gdGFzaztcbiAgICB0YXNrLmlzQWN0aXZlID0gdHJ1ZTtcbiAgICB1cGRhdGVRdWV1ZXMoaWQsIGFjdGl2YXRlUXVldWUsIGRlYWN0aXZhdGVRdWV1ZSk7XG5cbiAgICBpZiAodGFzay5vbkFjdGl2YXRlKSB7XG4gICAgICB0YXNrLm9uQWN0aXZhdGUodGFzayk7XG4gICAgfVxuXG4gICAgaWYgKHRhc2sub25BY3RpdmF0ZU9uY2UpIHtcbiAgICAgIHRhc2sub25BY3RpdmF0ZU9uY2UodGFzayk7XG4gICAgfVxuICB9LFxuXG4gIC8vIERlYWN0aXZhdGUgYSB0YXNrXG4gIGRlYWN0aXZhdGU6IGZ1bmN0aW9uIChpZCkge1xuICAgIHZhciB0YXNrID0gYWN0aXZlVGFza3NbaWRdO1xuXG4gICAgaWYgKHRhc2spIHtcbiAgICAgIHVwZGF0ZVF1ZXVlcyhpZCwgZGVhY3RpdmF0ZVF1ZXVlLCBhY3RpdmF0ZVF1ZXVlKTtcbiAgICAgIHRhc2suaXNBY3RpdmUgPSBmYWxzZTtcblxuICAgICAgaWYgKHRhc2sub25EZWFjdGl2YXRlKSB7XG4gICAgICAgIHRhc2sub25EZWFjdGl2YXRlKHRhc2spO1xuICAgICAgfVxuICAgIH1cbiAgfSxcblxuICAvLyBOdW1iZXIgYmFja2dyb3VuZCB0YXNrZXNcbiAgZ2V0Tm9uQmFja2dyb3VuZFJ1bm5pbmdDb3VudDogZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBub25CYWNrZ3JvdW5kUnVubmluZ0NvdW50O1xuICB9LFxuXG4gIC8vIEluY3JlbWVudCBjdXJyZW50IHRhc2sgSUQgYW5kIHJldHVyblxuICBnZXRUYXNrSWQ6IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gY3VycmVudFRhc2tJZCsrO1xuICB9LFxuXG4gIC8vIFJlc29sdmUgYWN0aXZhdGUvZGVhY3RpdmF0ZSB0YXNrZXMgYW5kIHJldHVybiBhY3RpdmUgaWRzXG4gIGdldEFjdGl2ZUlkczogZnVuY3Rpb24gKCkge1xuICAgIC8qXG4gICAgICB0YXNrIGRlYWN0aXZhdGUgcXVldWVcbiAgICAqL1xuICAgIHZhciBkZWFjdGl2YXRlUXVldWVMZW5ndGggPSBkZWFjdGl2YXRlUXVldWUubGVuZ3RoO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBkZWFjdGl2YXRlUXVldWVMZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkID0gZGVhY3RpdmF0ZVF1ZXVlW2ldO1xuICAgICAgdmFyIGFjdGl2ZUlkSW5kZXggPSBydW5uaW5nSWRzLmluZGV4T2YoaWQpO1xuICAgICAgdmFyIHRhc2sgPSBhY3RpdmVUYXNrc1tpZF07XG5cbiAgICAgIC8vIElmIHRoaXMgaXMgYSBydW5uaW5nIHRhc2ssIGRlYWN0aXZhdGVcbiAgICAgIGlmIChhY3RpdmVJZEluZGV4ID4gLTEpIHtcbiAgICAgICAgcnVubmluZ0lkcy5zcGxpY2UoYWN0aXZlSWRJbmRleCwgMSk7XG4gICAgICAgIHVwZGF0ZVJ1bm5pbmdDb3VudChmYWxzZSwgdGFzay5pc0xhenkpO1xuICAgICAgICBkZWxldGUgYWN0aXZlVGFza3NbaWRdO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8qXG4gICAgICBFbXB0eSBkZWFjdGl2YXRlIHF1ZXVlLiBXZSB1c2UgYEFycmF5LnNwbGljZWAgYmVjYXVzZSBpdCBkb2Vzbid0XG4gICAgICB3b3JrcyBvbiB0aGUgb3JpZ2luYWwgYXJyYXkgc28gd2UgZG9uJ3QgaGF2ZSB0byBnYXJiYWdlIGNvbGxlY3QgYW55dGhpbmdcbiAgICAqL1xuICAgIGRlYWN0aXZhdGVRdWV1ZS5zcGxpY2UoMCwgZGVhY3RpdmF0ZVF1ZXVlTGVuZ3RoKTtcblxuICAgIC8qXG4gICAgICB0YXNrIGFjdGl2YXRlIHF1ZXVlXG4gICAgKi9cbiAgICB2YXIgYWN0aXZhdGVRdWV1ZUxlbmd0aCA9IGFjdGl2YXRlUXVldWUubGVuZ3RoO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGFjdGl2YXRlUXVldWVMZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWQgPSBhY3RpdmF0ZVF1ZXVlW19pXTtcbiAgICAgIHZhciBfYWN0aXZlSWRJbmRleCA9IHJ1bm5pbmdJZHMuaW5kZXhPZihfaWQpO1xuICAgICAgdmFyIF90YXNrID0gYWN0aXZlVGFza3NbX2lkXTtcblxuICAgICAgaWYgKF90YXNrICYmIF90YXNrLm9uQWN0aXZhdGVMb29wKSB7XG4gICAgICAgIF90YXNrLm9uQWN0aXZhdGVMb29wKCk7XG4gICAgICB9XG5cbiAgICAgIC8vIElmIHRhc2sgaXNuJ3QgYWxyZWFkeSBydW5uaW5nLCBhY3RpdmF0ZVxuICAgICAgaWYgKF9hY3RpdmVJZEluZGV4ID09PSAtMSAmJiBfdGFzaykge1xuICAgICAgICBpZiAoX3Rhc2suaXNQcmlvcml0eSkge1xuICAgICAgICAgIHJ1bm5pbmdJZHMudW5zaGlmdChfaWQpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJ1bm5pbmdJZHMucHVzaChfaWQpO1xuICAgICAgICB9XG5cbiAgICAgICAgdXBkYXRlUnVubmluZ0NvdW50KHRydWUsIF90YXNrLmlzTGF6eSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgYWN0aXZhdGVRdWV1ZS5zcGxpY2UoMCwgYWN0aXZhdGVRdWV1ZUxlbmd0aCk7XG5cbiAgICByZXR1cm4gcnVubmluZ0lkcztcbiAgfVxufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbk55WXk5MFlYTnJMMjFoYm1GblpYSXVhbk1pWFN3aWJtRnRaWE1pT2x0ZExDSnRZWEJ3YVc1bmN5STZJanM3T3p0QlFVTkJMRWxCUVVrc1owSkJRV2RDTEVOQlFXaENPenM3UVVGSFNpeEpRVUZKTEc5Q1FVRnZRaXhEUVVGd1FqczdPMEZCUjBvc1NVRkJTU3cwUWtGQk5FSXNRMEZCTlVJN096dEJRVWRLTEVsQlFVMHNZVUZCWVN4RlFVRmlPenM3UVVGSFRpeEpRVUZOTEdOQlFXTXNSVUZCWkRzN08wRkJSMDRzU1VGQlRTeG5Ra0ZCWjBJc1JVRkJhRUk3T3p0QlFVZE9MRWxCUVUwc2EwSkJRV3RDTEVWQlFXeENPenM3T3pzN096czdRVUZUVGl4SlFVRk5MR1ZCUVdVc1ZVRkJReXhGUVVGRUxFVkJRVXNzVFVGQlRDeEZRVUZoTEU5QlFXSXNSVUZCZVVJN1FVRkROVU1zVFVGQlRTeGhRVUZoTEU5QlFVOHNUMEZCVUN4RFFVRmxMRVZCUVdZc1EwRkJZaXhEUVVSelF6dEJRVVUxUXl4TlFVRk5MR05CUVdNc1VVRkJVU3hQUVVGU0xFTkJRV2RDTEVWQlFXaENMRU5CUVdRc1EwRkdjME03TzBGQlNUVkRMRTFCUVVrc1pVRkJaU3hEUVVGRExFTkJRVVFzUlVGQlNUdEJRVU55UWl4WFFVRlBMRWxCUVZBc1EwRkJXU3hGUVVGYUxFVkJSSEZDTzBkQlFYWkNPenRCUVVsQkxFMUJRVWtzWTBGQll5eERRVUZETEVOQlFVUXNSVUZCU1R0QlFVTndRaXhaUVVGUkxFMUJRVklzUTBGQlpTeFhRVUZtTEVWQlFUUkNMRU5CUVRWQ0xFVkJSRzlDTzBkQlFYUkNPME5CVW0xQ096czdPenM3T3p0QlFXMUNja0lzU1VGQlRTeHhRa0ZCY1VJc1ZVRkJReXhIUVVGRUxFVkJRVTBzVFVGQlRpeEZRVUZwUWp0QlFVTXhReXhOUVVGTkxGTkJRVk1zVFVGQlRTeERRVUZPTEVkQlFWVXNRMEZCUXl4RFFVRkVMRU5CUkdsQ096dEJRVWN4UXl4MVFrRkJjVUlzVFVGQmNrSXNRMEZJTUVNN08wRkJTekZETEUxQlFVa3NRMEZCUXl4TlFVRkVMRVZCUVZNN1FVRkRXQ3hwUTBGQk5rSXNUVUZCTjBJc1EwRkVWenRIUVVGaU8wTkJUSGxDT3p0clFrRlZXanRCUVVOaUxEQkNRVVJoT3pzN1FVRkpZaXhaUVVGVkxGVkJRVU1zUlVGQlJDeEZRVUZMTEVsQlFVd3NSVUZCWXp0QlFVTjBRaXhuUWtGQldTeEZRVUZhTEVsQlFXdENMRWxCUVd4Q0xFTkJSSE5DTzBGQlJYUkNMRk5CUVVzc1VVRkJUQ3hIUVVGblFpeEpRVUZvUWl4RFFVWnpRanRCUVVkMFFpeHBRa0ZCWVN4RlFVRmlMRVZCUVdsQ0xHRkJRV3BDTEVWQlFXZERMR1ZCUVdoRExFVkJTSE5DT3p0QlFVdDBRaXhSUVVGSkxFdEJRVXNzVlVGQlRDeEZRVUZwUWp0QlFVTnVRaXhYUVVGTExGVkJRVXdzUTBGQlowSXNTVUZCYUVJc1JVRkViVUk3UzBGQmNrSTdPMEZCU1VFc1VVRkJTU3hMUVVGTExHTkJRVXdzUlVGQmNVSTdRVUZEZGtJc1YwRkJTeXhqUVVGTUxFTkJRVzlDTEVsQlFYQkNMRVZCUkhWQ08wdEJRWHBDTzBkQlZGRTdPenRCUVdWV0xHTkJRVmtzVlVGQlF5eEZRVUZFTEVWQlFWRTdRVUZEYkVJc1VVRkJUU3hQUVVGUExGbEJRVmtzUlVGQldpeERRVUZRTEVOQlJGazdPMEZCUjJ4Q0xGRkJRVWtzU1VGQlNpeEZRVUZWTzBGQlExSXNiVUpCUVdFc1JVRkJZaXhGUVVGcFFpeGxRVUZxUWl4RlFVRnJReXhoUVVGc1F5eEZRVVJSTzBGQlJWSXNWMEZCU3l4UlFVRk1MRWRCUVdkQ0xFdEJRV2hDTEVOQlJsRTdPMEZCU1ZJc1ZVRkJTU3hMUVVGTExGbEJRVXdzUlVGQmJVSTdRVUZEY2tJc1lVRkJTeXhaUVVGTUxFTkJRV3RDTEVsQlFXeENMRVZCUkhGQ08wOUJRWFpDTzB0QlNrWTdSMEZJVlRzN08wRkJZMW9zWjBOQlFUaENPMWRCUVUwN1IwRkJUanM3TzBGQlJ6bENMR0ZCUVZjN1YwRkJUVHRIUVVGT096czdRVUZIV0N4blFrRkJZeXhaUVVGTk96czdPMEZCU1d4Q0xGRkJRVTBzZDBKQlFYZENMR2RDUVVGblFpeE5RVUZvUWl4RFFVcGFPenRCUVUxc1FpeFRRVUZMTEVsQlFVa3NTVUZCU1N4RFFVRktMRVZCUVU4c1NVRkJTU3h4UWtGQlNpeEZRVUV5UWl4SFFVRXpReXhGUVVGblJEdEJRVU01UXl4VlFVRk5MRXRCUVVzc1owSkJRV2RDTEVOQlFXaENMRU5CUVV3c1EwRkVkME03UVVGRk9VTXNWVUZCVFN4blFrRkJaMElzVjBGQlZ5eFBRVUZZTEVOQlFXMUNMRVZCUVc1Q0xFTkJRV2hDTEVOQlJuZERPMEZCUnpsRExGVkJRVTBzVDBGQlR5eFpRVUZaTEVWQlFWb3NRMEZCVURzN08wRkJTSGRETEZWQlRURkRMR2RDUVVGblFpeERRVUZETEVOQlFVUXNSVUZCU1R0QlFVTjBRaXh0UWtGQlZ5eE5RVUZZTEVOQlFXdENMR0ZCUVd4Q0xFVkJRV2xETEVOQlFXcERMRVZCUkhOQ08wRkJSWFJDTERKQ1FVRnRRaXhMUVVGdVFpeEZRVUV3UWl4TFFVRkxMRTFCUVV3c1EwRkJNVUlzUTBGR2MwSTdRVUZIZEVJc1pVRkJUeXhaUVVGWkxFVkJRVm9zUTBGQlVDeERRVWh6UWp0UFFVRjRRanRMUVU1R096czdPenM3UVVGT2EwSXNiVUpCZFVKc1FpeERRVUZuUWl4TlFVRm9RaXhEUVVGMVFpeERRVUYyUWl4RlFVRXdRaXh4UWtGQk1VSTdPenM3TzBGQmRrSnJRaXhSUVRSQ1dpeHpRa0ZCYzBJc1kwRkJZeXhOUVVGa0xFTkJOVUpXT3p0QlFUaENiRUlzVTBGQlN5eEpRVUZKTEV0QlFVa3NRMEZCU2l4RlFVRlBMRXRCUVVrc2JVSkJRVW9zUlVGQmVVSXNTVUZCZWtNc1JVRkJPRU03UVVGRE5VTXNWVUZCVFN4TlFVRkxMR05CUVdNc1JVRkJaQ3hEUVVGTUxFTkJSSE5ETzBGQlJUVkRMRlZCUVUwc2FVSkJRV2RDTEZkQlFWY3NUMEZCV0N4RFFVRnRRaXhIUVVGdVFpeERRVUZvUWl4RFFVWnpRenRCUVVjMVF5eFZRVUZOTEZGQlFVOHNXVUZCV1N4SFFVRmFMRU5CUVZBc1EwRkljME03TzBGQlN6VkRMRlZCUVVrc1UwRkJVU3hOUVVGTExHTkJRVXdzUlVGQmNVSTdRVUZETDBJc1kwRkJTeXhqUVVGTUxFZEJSQ3RDTzA5QlFXcERPenM3UVVGTU5FTXNWVUZWZUVNc2JVSkJRV3RDTEVOQlFVTXNRMEZCUkN4SlFVRk5MRXRCUVhoQ0xFVkJRVGhDTzBGQlEyaERMRmxCUVVrc1RVRkJTeXhWUVVGTUxFVkJRV2xDTzBGQlEyNUNMSEZDUVVGWExFOUJRVmdzUTBGQmJVSXNSMEZCYmtJc1JVRkViVUk3VTBGQmNrSXNUVUZGVHp0QlFVTk1MSEZDUVVGWExFbEJRVmdzUTBGQlowSXNSMEZCYUVJc1JVRkVTenRUUVVaUU96dEJRVTFCTERKQ1FVRnRRaXhKUVVGdVFpeEZRVUY1UWl4TlFVRkxMRTFCUVV3c1EwRkJla0lzUTBGUVowTTdUMEZCYkVNN1MwRldSanM3UVVGeFFrRXNhMEpCUVdNc1RVRkJaQ3hEUVVGeFFpeERRVUZ5UWl4RlFVRjNRaXh0UWtGQmVFSXNSVUZ1Ukd0Q096dEJRWEZFYkVJc1YwRkJUeXhWUVVGUUxFTkJja1JyUWp0SFFVRk9JaXdpWm1sc1pTSTZJbTFoYm1GblpYSXVhbk1pTENKemIzVnlZMlZTYjI5MElqb2lMMVZ6WlhKekwwMWhkSFF2VTJsMFpYTXZjRzl3Ylc5MGFXOXVJaXdpYzI5MWNtTmxjME52Ym5SbGJuUWlPbHNpTHk4Z1cybHVkRjA2SUVsdVkzSmxiV1Z1ZEdWa0lHWnZjaUJsWVdOb0lHNWxkeUJ5ZFc1dWFXNW5JSFJoYzJ0Y2JteGxkQ0JqZFhKeVpXNTBWR0Z6YTBsa0lEMGdNRHRjYmx4dUx5OGdXMmx1ZEYwNklFNTFiV0psY2lCdlppQmhiR3dnY25WdWJtbHVaeUIwWVhOclpYTmNibXhsZENCMGIzUmhiRkoxYm01cGJtZERiM1Z1ZENBOUlEQTdYRzVjYmk4dklGdHBiblJkT2lCT2RXMWlaWElnYjJZZ2NuVnVibWx1WnlCMFlYTnJaWE1nWlhoamJIVmthVzVuSUdKaFkydG5jbTkxYm1RZ2RHRnphMlZ6WEc1c1pYUWdibTl1UW1GamEyZHliM1Z1WkZKMWJtNXBibWREYjNWdWRDQTlJREE3WEc1Y2JpOHZJRnRoY25KaGVWMDZJRUZ5Y21GNUlHOW1JSEoxYm01cGJtY2dkR0Z6YXlCSlJITmNibU52Ym5OMElISjFibTVwYm1kSlpITWdQU0JiWFR0Y2JseHVMeThnVzI5aWFtVmpkRjA2SUUxaGNDQnZaaUJ5ZFc1dWFXNW5JSFJoYzJ0bGMxeHVZMjl1YzNRZ1lXTjBhWFpsVkdGemEzTWdQU0I3ZlR0Y2JseHVMeThnVzJGeWNtRjVYVG9nUVhKeVlYa2diMllnZEdGemF5QkpSSE1nY1hWbGRXVmtJR1p2Y2lCaFkzUnBkbUYwYVc5dVhHNWpiMjV6ZENCaFkzUnBkbUYwWlZGMVpYVmxJRDBnVzEwN1hHNWNiaTh2SUZ0aGNuSmhlVjA2SUVGeWNtRjVJRzltSUhSaGMyc2dTVVJ6SUhGMVpYVmxaQ0JtYjNJZ1pHVmhZM1JwZG1GMGFXOXVYRzVqYjI1emRDQmtaV0ZqZEdsMllYUmxVWFZsZFdVZ1BTQmJYVHRjYmx4dUx5cGNiaUFnVlhCa1lYUmxJR0ZqZEdsMllYUmxMMlJsWVdOMGFYWmhkR1VnY1hWbGRXVnpYRzVjYmlBZ1FIQmhjbUZ0SUZ0dWRXMWlaWEpkWEc0Z0lFQndZWEpoYlNCYllYSnlZWGxkWEc0Z0lFQndZWEpoYlNCYllYSnlZWGxkWEc0cUwxeHVZMjl1YzNRZ2RYQmtZWFJsVVhWbGRXVnpJRDBnS0dsa0xDQnBia3hwYzNRc0lHOTFkRXhwYzNRcElEMCtJSHRjYmlBZ1kyOXVjM1FnYVc1UWIzTnBkR2x2YmlBOUlHbHVUR2x6ZEM1cGJtUmxlRTltS0dsa0tUdGNiaUFnWTI5dWMzUWdiM1YwVUc5emFYUnBiMjRnUFNCdmRYUk1hWE4wTG1sdVpHVjRUMllvYVdRcE8xeHVYRzRnSUdsbUlDaHBibEJ2YzJsMGFXOXVJRDA5UFNBdE1Ta2dlMXh1SUNBZ0lHbHVUR2x6ZEM1d2RYTm9LR2xrS1R0Y2JpQWdmVnh1WEc0Z0lHbG1JQ2h2ZFhSUWIzTnBkR2x2YmlBK0lDMHhLU0I3WEc0Z0lDQWdiM1YwVEdsemRDNXpjR3hwWTJVb2IzVjBVRzl6YVhScGIyNHNJREVwTzF4dUlDQjlYRzU5TzF4dVhHNHZLbHh1SUNCVmNHUmhkR1VnY25WdWJtbHVaMXh1WEc0Z0lGdGliMjlzWldGdVhUb2dZSFJ5ZFdWZ0lIUnZJR0ZrWkZ4dUlDQmJZbTl2YkdWaGJsMDZJR0IwY25WbFlDQnBaaUJzWVhwNVhHNHFMMXh1WTI5dWMzUWdkWEJrWVhSbFVuVnVibWx1WjBOdmRXNTBJRDBnS0dGa1pDd2dhWE5NWVhwNUtTQTlQaUI3WEc0Z0lHTnZibk4wSUcxdlpHbG1lU0E5SUdGa1pDQS9JREVnT2lBdE1UdGNibHh1SUNCMGIzUmhiRkoxYm01cGJtZERiM1Z1ZENBclBTQnRiMlJwWm5rN1hHNWNiaUFnYVdZZ0tDRnBjMHhoZW5rcElIdGNiaUFnSUNCdWIyNUNZV05yWjNKdmRXNWtVblZ1Ym1sdVowTnZkVzUwSUNzOUlHMXZaR2xtZVR0Y2JpQWdmVnh1ZlR0Y2JseHVaWGh3YjNKMElHUmxabUYxYkhRZ2UxeHVJQ0JoWTNScGRtVlVZWE5yY3l4Y2JseHVJQ0F2THlCQlkzUnBkbUYwWlNCaElIUmhjMnRjYmlBZ1lXTjBhWFpoZEdVNklDaHBaQ3dnZEdGemF5a2dQVDRnZTF4dUlDQWdJR0ZqZEdsMlpWUmhjMnR6VzJsa1hTQTlJSFJoYzJzN1hHNGdJQ0FnZEdGemF5NXBjMEZqZEdsMlpTQTlJSFJ5ZFdVN1hHNGdJQ0FnZFhCa1lYUmxVWFZsZFdWektHbGtMQ0JoWTNScGRtRjBaVkYxWlhWbExDQmtaV0ZqZEdsMllYUmxVWFZsZFdVcE8xeHVYRzRnSUNBZ2FXWWdLSFJoYzJzdWIyNUJZM1JwZG1GMFpTa2dlMXh1SUNBZ0lDQWdkR0Z6YXk1dmJrRmpkR2wyWVhSbEtIUmhjMnNwTzF4dUlDQWdJSDFjYmx4dUlDQWdJR2xtSUNoMFlYTnJMbTl1UVdOMGFYWmhkR1ZQYm1ObEtTQjdYRzRnSUNBZ0lDQjBZWE5yTG05dVFXTjBhWFpoZEdWUGJtTmxLSFJoYzJzcE8xeHVJQ0FnSUgxY2JpQWdmU3hjYmx4dUlDQXZMeUJFWldGamRHbDJZWFJsSUdFZ2RHRnphMXh1SUNCa1pXRmpkR2wyWVhSbE9pQW9hV1FwSUQwK0lIdGNiaUFnSUNCamIyNXpkQ0IwWVhOcklEMGdZV04wYVhabFZHRnphM05iYVdSZE8xeHVYRzRnSUNBZ2FXWWdLSFJoYzJzcElIdGNiaUFnSUNBZ0lIVndaR0YwWlZGMVpYVmxjeWhwWkN3Z1pHVmhZM1JwZG1GMFpWRjFaWFZsTENCaFkzUnBkbUYwWlZGMVpYVmxLVHRjYmlBZ0lDQWdJSFJoYzJzdWFYTkJZM1JwZG1VZ1BTQm1ZV3h6WlR0Y2JseHVJQ0FnSUNBZ2FXWWdLSFJoYzJzdWIyNUVaV0ZqZEdsMllYUmxLU0I3WEc0Z0lDQWdJQ0FnSUhSaGMyc3ViMjVFWldGamRHbDJZWFJsS0hSaGMyc3BPMXh1SUNBZ0lDQWdmVnh1SUNBZ0lIMWNiaUFnZlN4Y2JseHVJQ0F2THlCT2RXMWlaWElnWW1GamEyZHliM1Z1WkNCMFlYTnJaWE5jYmlBZ1oyVjBUbTl1UW1GamEyZHliM1Z1WkZKMWJtNXBibWREYjNWdWREb2dLQ2tnUFQ0Z2JtOXVRbUZqYTJkeWIzVnVaRkoxYm01cGJtZERiM1Z1ZEN4Y2JseHVJQ0F2THlCSmJtTnlaVzFsYm5RZ1kzVnljbVZ1ZENCMFlYTnJJRWxFSUdGdVpDQnlaWFIxY201Y2JpQWdaMlYwVkdGemEwbGtPaUFvS1NBOVBpQmpkWEp5Wlc1MFZHRnphMGxrS3lzc1hHNWNiaUFnTHk4Z1VtVnpiMngyWlNCaFkzUnBkbUYwWlM5a1pXRmpkR2wyWVhSbElIUmhjMnRsY3lCaGJtUWdjbVYwZFhKdUlHRmpkR2wyWlNCcFpITmNiaUFnWjJWMFFXTjBhWFpsU1dSek9pQW9LU0E5UGlCN1hHNGdJQ0FnTHlwY2JpQWdJQ0FnSUhSaGMyc2daR1ZoWTNScGRtRjBaU0J4ZFdWMVpWeHVJQ0FnSUNvdlhHNGdJQ0FnWTI5dWMzUWdaR1ZoWTNScGRtRjBaVkYxWlhWbFRHVnVaM1JvSUQwZ1pHVmhZM1JwZG1GMFpWRjFaWFZsTG14bGJtZDBhRHRjYmx4dUlDQWdJR1p2Y2lBb2JHVjBJR2tnUFNBd095QnBJRHdnWkdWaFkzUnBkbUYwWlZGMVpYVmxUR1Z1WjNSb095QnBLeXNwSUh0Y2JpQWdJQ0FnSUdOdmJuTjBJR2xrSUQwZ1pHVmhZM1JwZG1GMFpWRjFaWFZsVzJsZE8xeHVJQ0FnSUNBZ1kyOXVjM1FnWVdOMGFYWmxTV1JKYm1SbGVDQTlJSEoxYm01cGJtZEpaSE11YVc1a1pYaFBaaWhwWkNrN1hHNGdJQ0FnSUNCamIyNXpkQ0IwWVhOcklEMGdZV04wYVhabFZHRnphM05iYVdSZE8xeHVYRzRnSUNBZ0lDQXZMeUJKWmlCMGFHbHpJR2x6SUdFZ2NuVnVibWx1WnlCMFlYTnJMQ0JrWldGamRHbDJZWFJsWEc0Z0lDQWdJQ0JwWmlBb1lXTjBhWFpsU1dSSmJtUmxlQ0ErSUMweEtTQjdYRzRnSUNBZ0lDQWdJSEoxYm01cGJtZEpaSE11YzNCc2FXTmxLR0ZqZEdsMlpVbGtTVzVrWlhnc0lERXBPMXh1SUNBZ0lDQWdJQ0IxY0dSaGRHVlNkVzV1YVc1blEyOTFiblFvWm1Gc2MyVXNJSFJoYzJzdWFYTk1ZWHA1S1R0Y2JpQWdJQ0FnSUNBZ1pHVnNaWFJsSUdGamRHbDJaVlJoYzJ0elcybGtYVHRjYmlBZ0lDQWdJSDFjYmlBZ0lDQjlYRzVjYmlBZ0lDQXZLbHh1SUNBZ0lDQWdSVzF3ZEhrZ1pHVmhZM1JwZG1GMFpTQnhkV1YxWlM0Z1YyVWdkWE5sSUdCQmNuSmhlUzV6Y0d4cFkyVmdJR0psWTJGMWMyVWdhWFFnWkc5bGMyNG5kRnh1SUNBZ0lDQWdkMjl5YTNNZ2IyNGdkR2hsSUc5eWFXZHBibUZzSUdGeWNtRjVJSE52SUhkbElHUnZiaWQwSUdoaGRtVWdkRzhnWjJGeVltRm5aU0JqYjJ4c1pXTjBJR0Z1ZVhSb2FXNW5YRzRnSUNBZ0tpOWNiaUFnSUNCa1pXRmpkR2wyWVhSbFVYVmxkV1V1YzNCc2FXTmxLREFzSUdSbFlXTjBhWFpoZEdWUmRXVjFaVXhsYm1kMGFDazdYRzVjYmlBZ0lDQXZLbHh1SUNBZ0lDQWdkR0Z6YXlCaFkzUnBkbUYwWlNCeGRXVjFaVnh1SUNBZ0lDb3ZYRzRnSUNBZ1kyOXVjM1FnWVdOMGFYWmhkR1ZSZFdWMVpVeGxibWQwYUNBOUlHRmpkR2wyWVhSbFVYVmxkV1V1YkdWdVozUm9PMXh1WEc0Z0lDQWdabTl5SUNoc1pYUWdhU0E5SURBN0lHa2dQQ0JoWTNScGRtRjBaVkYxWlhWbFRHVnVaM1JvT3lCcEt5c3BJSHRjYmlBZ0lDQWdJR052Ym5OMElHbGtJRDBnWVdOMGFYWmhkR1ZSZFdWMVpWdHBYVHRjYmlBZ0lDQWdJR052Ym5OMElHRmpkR2wyWlVsa1NXNWtaWGdnUFNCeWRXNXVhVzVuU1dSekxtbHVaR1Y0VDJZb2FXUXBPMXh1SUNBZ0lDQWdZMjl1YzNRZ2RHRnpheUE5SUdGamRHbDJaVlJoYzJ0elcybGtYVHRjYmx4dUlDQWdJQ0FnYVdZZ0tIUmhjMnNnSmlZZ2RHRnpheTV2YmtGamRHbDJZWFJsVEc5dmNDa2dlMXh1SUNBZ0lDQWdJQ0IwWVhOckxtOXVRV04wYVhaaGRHVk1iMjl3S0NrN1hHNGdJQ0FnSUNCOVhHNWNiaUFnSUNBZ0lDOHZJRWxtSUhSaGMyc2dhWE51SjNRZ1lXeHlaV0ZrZVNCeWRXNXVhVzVuTENCaFkzUnBkbUYwWlZ4dUlDQWdJQ0FnYVdZZ0tHRmpkR2wyWlVsa1NXNWtaWGdnUFQwOUlDMHhJQ1ltSUhSaGMyc3BJSHRjYmlBZ0lDQWdJQ0FnYVdZZ0tIUmhjMnN1YVhOUWNtbHZjbWwwZVNrZ2UxeHVJQ0FnSUNBZ0lDQWdJSEoxYm01cGJtZEpaSE11ZFc1emFHbG1kQ2hwWkNrN1hHNGdJQ0FnSUNBZ0lIMGdaV3h6WlNCN1hHNGdJQ0FnSUNBZ0lDQWdjblZ1Ym1sdVowbGtjeTV3ZFhOb0tHbGtLVHRjYmlBZ0lDQWdJQ0FnZlZ4dVhHNGdJQ0FnSUNBZ0lIVndaR0YwWlZKMWJtNXBibWREYjNWdWRDaDBjblZsTENCMFlYTnJMbWx6VEdGNmVTazdYRzRnSUNBZ0lDQjlYRzRnSUNBZ2ZWeHVYRzRnSUNBZ1lXTjBhWFpoZEdWUmRXVjFaUzV6Y0d4cFkyVW9NQ3dnWVdOMGFYWmhkR1ZSZFdWMVpVeGxibWQwYUNrN1hHNWNiaUFnSUNCeVpYUjFjbTRnY25WdWJtbHVaMGxrY3p0Y2JpQWdmVnh1ZlR0Y2JpSmRmUT09XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy90YXNrL21hbmFnZXIuanNcbiAqKiBtb2R1bGUgaWQgPSA1M1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIl0sInNvdXJjZVJvb3QiOiIiLCJmaWxlIjoicG9wbW90aW9uLmdsb2JhbC5qcyJ9