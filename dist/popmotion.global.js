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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9sb2FkL2dsb2JhbC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBOztJQUFZLFM7Ozs7QUFFWixJQUFNLFFBQVEsT0FBTyxNQUFyQjs7QUFFQSxVQUFVLFVBQVYsR0FBdUIsWUFBWTtBQUNqQyxTQUFPLE1BQVAsR0FBZ0IsS0FBaEI7QUFDRCxDQUZEOztBQUlBLE9BQU8sTUFBUCxHQUFnQixPQUFPLFNBQVAsR0FBbUIsU0FBbkMiLCJmaWxlIjoiZ2xvYmFsLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9tYXR0cGVycnkvU2l0ZXMvcG9wbW90aW9uIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgcG9wbW90aW9uIGZyb20gJy4uL3BvcG1vdGlvbic7XG5cbmNvbnN0IFVJcmVmID0gd2luZG93Lm1vdGlvbjtcblxucG9wbW90aW9uLm5vQ29uZmxpY3QgPSBmdW5jdGlvbiAoKSB7XG4gIHdpbmRvdy5tb3Rpb24gPSBVSXJlZjtcbn07XG5cbndpbmRvdy5tb3Rpb24gPSB3aW5kb3cucG9wbW90aW9uID0gcG9wbW90aW9uOyJdfQ==

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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9wb3Btb3Rpb24uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztrQkFtQ1MsaUI7Ozs7QUFsQ1Q7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFzQkE7Ozs7Ozs7Ozs7OztBQVNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUF0Q08sSUFBTSxzQkFBTztBQUFBLG9DQUFJLElBQUo7QUFBSSxRQUFKO0FBQUE7O0FBQUEsMEVBQXlCLElBQXpCO0FBQUEsQ0FBYixDOztBQUNBLElBQU0sd0JBQVEsVUFBQyxLQUFEO0FBQUEsU0FBVyxvQkFBVSxLQUFWLENBQVg7QUFBQSxDQUFkO0FBQ0EsSUFBTSw0QkFBVSxVQUFDLEtBQUQ7QUFBQSxTQUFXLHNCQUFZLEtBQVosQ0FBWDtBQUFBLENBQWhCO0FBQ0EsSUFBTSx3QkFBUTtBQUFBLHFDQUFJLElBQUo7QUFBSSxRQUFKO0FBQUE7O0FBQUEsMkVBQTBCLElBQTFCO0FBQUEsQ0FBZDtBQUNBLElBQU0sd0JBQVE7QUFBQSxxQ0FBSSxJQUFKO0FBQUksUUFBSjtBQUFBOztBQUFBLDJFQUEwQixJQUExQjtBQUFBLENBQWQ7QUFDQSxJQUFNLHNCQUFPO0FBQUEscUNBQUksSUFBSjtBQUFJLFFBQUo7QUFBQTs7QUFBQSwwRUFBeUIsSUFBekI7QUFBQSxDQUFiO1FBQ0EsTztRQUNBLFE7Ozs7UUFHQSxhO1FBQ0EsSTtRQUNBLEc7UUFDQSxNO1FBQ0EsRztRQUNBLE87Ozs7UUFHQSxNO0FBRUEsSUFBTSxtREFBTjs7O1FBR0ssSTtRQUNBLEs7Ozs7QUFlTCxJQUFNLGdDQUFZLEVBQUUsc0JBQUYsRUFBUyxzQkFBVCxFQUFnQixzQkFBaEIsRUFBdUIsMEJBQXZCLEVBQWdDLGtCQUFoQyxFQUFxQyxrQkFBckMsRUFBMEMsZ0JBQTFDLEVBQThDLGtCQUE5QyxFQUFtRCxzQkFBbkQsRUFBMEQsd0JBQTFELEVBQWtFLG9CQUFsRSxFQUFsQjs7O1FBR0ssWTs7Ozs7Ozs7Ozs7QUFVWixpQkFBTyxTQUFQLENBQWlCLEVBQWpCLEdBQXNCLFVBQVUsT0FBVixFQUFtQjtBQUN2QyxNQUFJLENBQUMsUUFBUSxPQUFiLEVBQXNCO0FBQ3BCLGNBQVUsdUJBQVEsT0FBUixDQUFWO0FBQ0Q7O0FBRUQsU0FBTyxRQUFRLE9BQVIsQ0FBZ0IsSUFBaEIsQ0FBUDtBQUNELENBTkQ7O1FBUVMsTSIsImZpbGUiOiJwb3Btb3Rpb24uanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL21hdHRwZXJyeS9TaXRlcy9wb3Btb3Rpb24iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnQgY2xhc3NlcyAtIGxvbmcgdGVybSBnb2FsIHRvIG1vdmUgdG93YXJkcyBjb21wb3NpdGlvblxuaW1wb3J0IEFjdGlvbiBmcm9tICcuL2FjdGlvbnMvQWN0aW9uJztcbmltcG9ydCBGbG93IGZyb20gJy4vYWN0aW9ucy9GbG93JztcbmltcG9ydCBUd2VlbiBmcm9tICcuL2FjdGlvbnMvVHdlZW4nO1xuaW1wb3J0IFBoeXNpY3MgZnJvbSAnLi9hY3Rpb25zL1BoeXNpY3MnO1xuaW1wb3J0IFRyYWNrIGZyb20gJy4vYWN0aW9ucy9UcmFjayc7XG5pbXBvcnQgVGFzayBmcm9tICcuL3Rhc2svVGFzayc7XG5pbXBvcnQgSW5wdXQgZnJvbSAnLi9pbnB1dC9JbnB1dCc7XG5cbi8vIEV4cG9ydCBmYWN0b3J5IGZ1bmN0aW9uc1xuZXhwb3J0IGNvbnN0IGZsb3cgPSAoLi4uYXJncykgPT4gbmV3IEZsb3coLi4uYXJncyk7XG5leHBvcnQgY29uc3QgdHdlZW4gPSAocHJvcHMpID0+IG5ldyBUd2Vlbihwcm9wcyk7XG5leHBvcnQgY29uc3QgcGh5c2ljcyA9IChwcm9wcykgPT4gbmV3IFBoeXNpY3MocHJvcHMpO1xuZXhwb3J0IGNvbnN0IHRyYWNrID0gKC4uLmFyZ3MpID0+IG5ldyBUcmFjayguLi5hcmdzKTtcbmV4cG9ydCBjb25zdCBpbnB1dCA9ICguLi5hcmdzKSA9PiBuZXcgSW5wdXQoLi4uYXJncyk7XG5leHBvcnQgY29uc3QgdGFzayA9ICguLi5hcmdzKSA9PiBuZXcgVGFzayguLi5hcmdzKTtcbmV4cG9ydCBzdGFnZ2VyIGZyb20gJy4vaW5jL3N0YWdnZXInO1xuZXhwb3J0IHRpbWVsaW5lIGZyb20gJy4vaW5jL3RpbWVsaW5lJztcblxuLy8gQWRhcHRlcnNcbmV4cG9ydCBjcmVhdGVBZGFwdGVyIGZyb20gJy4vYWRhcHRlci9hZGFwdGVyJztcbmV4cG9ydCBhdHRyIGZyb20gJy4vYWRhcHRlci9hdHRyLWFkYXB0ZXInO1xuZXhwb3J0IGNzcyBmcm9tICcuL2FkYXB0ZXIvY3NzLWFkYXB0ZXInO1xuZXhwb3J0IG9iamVjdCBmcm9tICcuL2FkYXB0ZXIvb2JqZWN0LWFkYXB0ZXInO1xuZXhwb3J0IHN2ZyBmcm9tICcuL2FkYXB0ZXIvc3ZnLWFkYXB0ZXInO1xuZXhwb3J0IHN2Z1BhdGggZnJvbSAnLi9hZGFwdGVyL3N2Zy1wYXRoLWFkYXB0ZXInO1xuXG4vLyBFYXNpbmdcbmV4cG9ydCBlYXNpbmcgZnJvbSAnLi9hY3Rpb25zL2Vhc2luZy9wcmVzZXQtZWFzaW5nJztcbmltcG9ydCBnZXRGbG93IGZyb20gJy4vYWN0aW9ucy9mbG93L2dldC1mbG93JztcbmV4cG9ydCBjb25zdCBkZXRlY3RGbG93ID0gZ2V0RmxvdztcblxuLy8gVXRpbHNcbmV4cG9ydCAqIGFzIGNhbGMgZnJvbSAnLi9pbmMvY2FsYyc7XG5leHBvcnQgKiBhcyB1dGlscyBmcm9tICcuL2luYy91dGlscyc7XG5leHBvcnQgeyBzZXRHbG9iYWxEaWxhdGlvbiB9IGZyb20gJy4vdGFzay90aW1lcic7XG5cbi8vIFZhbHVlIHR5cGVzXG5pbXBvcnQgYWxwaGEgZnJvbSAnLi92YWx1ZS10eXBlcy9hbHBoYSc7XG5pbXBvcnQgYW5nbGUgZnJvbSAnLi92YWx1ZS10eXBlcy9hbmdsZSc7XG5pbXBvcnQgY29sb3IgZnJvbSAnLi92YWx1ZS10eXBlcy9jb2xvcic7XG5pbXBvcnQgY29tcGxleCBmcm9tICcuL3ZhbHVlLXR5cGVzL2NvbXBsZXgnO1xuaW1wb3J0IGhleCBmcm9tICcuL3ZhbHVlLXR5cGVzL2hleCc7XG5pbXBvcnQgaHNsIGZyb20gJy4vdmFsdWUtdHlwZXMvaHNsJztcbmltcG9ydCBweCBmcm9tICcuL3ZhbHVlLXR5cGVzL3B4JztcbmltcG9ydCByZ2IgZnJvbSAnLi92YWx1ZS10eXBlcy9yZ2InO1xuaW1wb3J0IHNjYWxlIGZyb20gJy4vdmFsdWUtdHlwZXMvc2NhbGUnO1xuaW1wb3J0IHNoYWRvdyBmcm9tICcuL3ZhbHVlLXR5cGVzL3NoYWRvdyc7XG5pbXBvcnQgdW5pdCBmcm9tICcuL3ZhbHVlLXR5cGVzL3VuaXQnO1xuZXhwb3J0IGNvbnN0IHZhbHVlVHlwZSA9IHsgYWxwaGEsIGFuZ2xlLCBjb2xvciwgY29tcGxleCwgaGV4LCBoc2wsIHB4LCByZ2IsIHNjYWxlLCBzaGFkb3csIHVuaXQgfTtcblxuLy8gVHJhbnNmb3JtZXJzXG5leHBvcnQgKiBhcyB0cmFuc2Zvcm1lcnMgZnJvbSAnLi9pbmMvdHJhbnNmb3JtZXJzJztcblxuLypcbiAgUmV0dXJucyBhIHZlcnNpb24gb2YgdGhlIEFjdGlvbiBib3VuZCB0byBhIEZsb3dcblxuICBXZSdyZSBhZGRpbmcgYG9uYCBoZXJlIGJlY2F1c2UgRmxvdyBleHRlbmRzIEFjdGlvbixcbiAgb3RoZXJ3aXNlIGNyZWF0aW5nIGEgY2lyY3VsYXIgbW9kdWxhciBkZXBlbmRlbmN5LiBGdXR1cmVcbiAgcmVmYWN0b3JpbmcsIGllIG1vdmluZyB0byBhIGNvbXBvc2l0aW9uYWwgbW9kZWwgd2lsbFxuICByZW1vdmUgdGhlIG5lZWQgZm9yIHVzIHRvIGRvIHRoaXMgaGVyZS5cbiovXG5BY3Rpb24ucHJvdG90eXBlLm9uID0gZnVuY3Rpb24gKGVsZW1lbnQpIHtcbiAgaWYgKCFlbGVtZW50LmNvbm5lY3QpIHtcbiAgICBlbGVtZW50ID0gZ2V0RmxvdyhlbGVtZW50KTtcbiAgfVxuXG4gIHJldHVybiBlbGVtZW50LmNvbm5lY3QodGhpcyk7XG59O1xuXG5leHBvcnQgeyBBY3Rpb24gfTsiXX0=

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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy90YXNrL3RpbWVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7O0FBRUEsSUFBTSxjQUFjLEVBQXBCOztBQUVBLElBQUksVUFBVSxDQUFkO0FBQ0EsSUFBSSxVQUFVLElBQWQ7QUFDQSxJQUFJLFdBQVcsQ0FBZjs7a0JBRWU7QUFDYixVQUFRLFVBQUMsVUFBRCxFQUFnQjtBQUN0QixjQUFVLEtBQUssR0FBTCxDQUFTLEtBQUssR0FBTCxDQUFTLGFBQWEsT0FBdEIsRUFBK0IsV0FBL0IsQ0FBVCxFQUFzRCxDQUF0RCxJQUEyRCxRQUFyRTtBQUNBLGNBQVUsVUFBVjtBQUNELEdBSlk7O0FBTWIsU0FBTztBQUFBLFdBQU0sVUFBVSx5QkFBaEI7QUFBQSxHQU5NOztBQVFiLGNBQVk7QUFBQSxXQUFNLE9BQU47QUFBQTtBQVJDLEM7QUFXUixJQUFNLGdEQUFvQixVQUFDLFdBQUQ7QUFBQSxTQUFpQixXQUFXLFdBQTVCO0FBQUEsQ0FBMUIiLCJmaWxlIjoidGltZXIuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL21hdHRwZXJyeS9TaXRlcy9wb3Btb3Rpb24iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjdXJyZW50VGltZSB9IGZyb20gJy4uL2luYy91dGlscyc7XG5cbmNvbnN0IE1BWF9FTEFQU0VEID0gMzM7XG5cbmxldCBjdXJyZW50ID0gMDtcbmxldCBlbGFwc2VkID0gMTYuNztcbmxldCBkaWxhdGlvbiA9IDE7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgdXBkYXRlOiAoZnJhbWVzdGFtcCkgPT4ge1xuICAgIGVsYXBzZWQgPSBNYXRoLm1heChNYXRoLm1pbihmcmFtZXN0YW1wIC0gY3VycmVudCwgTUFYX0VMQVBTRUQpLCAxKSAqIGRpbGF0aW9uO1xuICAgIGN1cnJlbnQgPSBmcmFtZXN0YW1wO1xuICB9LFxuXG4gIHN0YXJ0OiAoKSA9PiBjdXJyZW50ID0gY3VycmVudFRpbWUoKSxcblxuICBnZXRFbGFwc2VkOiAoKSA9PiBlbGFwc2VkXG59O1xuXG5leHBvcnQgY29uc3Qgc2V0R2xvYmFsRGlsYXRpb24gPSAobmV3RGlsYXRpb24pID0+IGRpbGF0aW9uID0gbmV3RGlsYXRpb247Il19

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
	//# sourceMappingURL=data:application/json;base64,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dXJjZXNDb250ZW50IjpbImltcG9ydCBUYXNrIGZyb20gJy4uL3Rhc2svVGFzayc7XG5pbXBvcnQgeyBzcGVlZFBlclNlY29uZCB9IGZyb20gJy4uL2luYy9jYWxjJztcbmltcG9ydCB7IGlzTnVtLCBpc09iaiwgaXNTdHJpbmcgfSBmcm9tICcuLi9pbmMvdXRpbHMnO1xuaW1wb3J0IGRldGVjdFZhbHVlVHlwZSBmcm9tICcuLi92YWx1ZS10eXBlcy9kZXRlY3QnO1xuaW1wb3J0IE5VTUVSSUNBTF9WQUxVRVMgZnJvbSAnLi4vaW5jL251bWVyaWNhbC12YWx1ZXMnO1xuaW1wb3J0IGRldGVjdEFkYXB0ZXIgZnJvbSAnLi4vaW5jL2RldGVjdC1hZGFwdGVyJztcblxuY29uc3QgTlVNX05VTUVSSUNBTF9WQUxVRVMgPSBOVU1FUklDQUxfVkFMVUVTLmxlbmd0aDtcblxuY29uc3QgZGVmYXVsdFJlbmRlcmVyID0gKHsgc3RhdGUsIGFkYXB0ZXIsIGFkYXB0ZXJEYXRhLCBlbGVtZW50IH0pID0+IGFkYXB0ZXIoZWxlbWVudCwgc3RhdGUsIGFkYXB0ZXJEYXRhKTtcblxuY29uc3QgY29udmVydElmU2hvdWxkQmVOdW1iZXIgPSAodmFsdWUpID0+ICFpc05hTih2YWx1ZSkgPyBwYXJzZUZsb2F0KHZhbHVlKSA6IHZhbHVlO1xuXG5jbGFzcyBBY3Rpb24gZXh0ZW5kcyBUYXNrIHtcbiAgY29uc3RydWN0b3IocHJvcHMgPSB7fSkge1xuICAgIHByb3BzLnN0YXRlID0ge307XG4gICAgcHJvcHMudmFsdWVLZXlzID0gW107XG4gICAgcHJvcHMucGFyZW50S2V5cyA9IFtdO1xuICAgIHN1cGVyKHByb3BzKTtcbiAgfVxuXG4gIC8qXG4gICAgIyBTZXQgQWN0aW9uIHByb3BlcnRpZXNcbiAgICAjIyBTZXQgdXNlci1kZWZpbmVkIEFjdGlvbiBwcm9wZXJ0aWVzXG5cbiAgICBAcGFyYW0gW29iamVjdF1cbiAgICBAcmV0dXJuIFtBY3Rpb25dXG4gICovXG4gIHNldChwcm9wcyA9IHt9KSB7XG4gICAgdGhpcy52YWx1ZXMgPSB0aGlzLnZhbHVlcyB8fCB7fTtcblxuICAgIGNvbnN0IHsgdmFsdWVzLCAuLi5wcm9wc1RvU2V0IH0gPSBwcm9wcztcbiAgICBjb25zdCBpbmhlcml0YWJsZSA9IHt9O1xuXG4gICAgLy8gU2V0IG5vbi1jb25zdW1lZCBwcm9wZXJ0aWVzXG4gICAgc3VwZXIuc2V0KHByb3BzVG9TZXQpO1xuXG4gICAgLy8gRGV0ZWN0IGNvcnJlY3QgYGFkYXB0ZXJgIGlmIG5vbmUgZXhpc3RzIGFuZCBgZWxlbWVudGAgaXMgYmVpbmcgc2V0XG4gICAgaWYgKHRoaXMuZWxlbWVudCkge1xuICAgICAgaWYgKCF0aGlzLmFkYXB0ZXIpIHtcbiAgICAgICAgLy8gRHVja3R5cGlzaCBjaGVjayBmb3IgQWRhcHRlclxuICAgICAgICB0aGlzLmFkYXB0ZXIgPSBkZXRlY3RBZGFwdGVyKHRoaXMuZWxlbWVudCk7XG5cbiAgICAgICAgaWYgKHRoaXMuYWRhcHRlci5nZXRFbGVtZW50RGF0YSkge1xuICAgICAgICAgIHRoaXMuYWRhcHRlckRhdGEgPSB0aGlzLmFkYXB0ZXIuZ2V0RWxlbWVudERhdGEodGhpcy5lbGVtZW50KTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoIXRoaXMub25SZW5kZXIpIHtcbiAgICAgICAgdGhpcy5vblJlbmRlciA9IGRlZmF1bHRSZW5kZXJlcjtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBQcmltZSBhbiBvYmplY3QgdG8gaW5oZXJpdCBmcm9tLCB3aXRoIG9ubHkgYHZhbHVlYCBwcm9wZXJ0aWVzXG4gICAgZm9yIChsZXQga2V5IGluIHRoaXMuZGVmYXVsdFZhbHVlKSB7XG4gICAgICBpZiAodGhpcy5kZWZhdWx0VmFsdWUuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICBpZiAocHJvcHNUb1NldC5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgaW5oZXJpdGFibGVba2V5XSA9IHByb3BzVG9TZXRba2V5XTtcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzW2tleV0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIGluaGVyaXRhYmxlW2tleV0gPSB0aGlzW2tleV07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBVcGRhdGUgZXhpc3RpbmcgdmFsdWVzIHdpdGggaW5oZXJpdGFibGUgcHJvcGVydGllc1xuICAgIGZvciAobGV0IGtleSBpbiB0aGlzLnZhbHVlcykge1xuICAgICAgaWYgKHRoaXMudmFsdWVzLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgdGhpcy52YWx1ZXNba2V5XSA9IHsgLi4udGhpcy52YWx1ZXNba2V5XSwgLi4uaW5oZXJpdGFibGUgfTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBVcGRhdGVcbiAgICBpZiAodmFsdWVzKSB7XG4gICAgICB0aGlzLnNldFZhbHVlcyh2YWx1ZXMsIGluaGVyaXRhYmxlKTtcblxuICAgICAgLy8gUHJlY29tcHV0ZSBudW1iZXIgb2YgdmFsdWUga2V5IGFuZCBwYXJlbnQga2V5cyB0byBhdm9pZCBwZXItZnJhbWUgbWVhc3VyZW1lbnRcbiAgICAgIHRoaXMubnVtVmFsdWVLZXlzID0gdGhpcy52YWx1ZUtleXMubGVuZ3RoO1xuICAgICAgdGhpcy5udW1QYXJlbnRLZXlzID0gdGhpcy5wYXJlbnRLZXlzLmxlbmd0aDtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHNldFZhbHVlcyh2YWx1ZXMsIGluaGVyaXQpIHtcbiAgICAvLyBJdGVyYXRlIG92ZXIgYWxsIGluY29taW5nIHZhbHVlcyBhbmQgc2V0XG4gICAgZm9yIChsZXQga2V5IGluIHZhbHVlcykge1xuICAgICAgaWYgKHZhbHVlcy5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgIGxldCBoYXNDaGlsZHJlbiA9IGZhbHNlO1xuICAgICAgICBjb25zdCBjaGlsZHJlbiA9IHt9O1xuXG4gICAgICAgIC8vIE1lcmdlIGludG8gZXhpc3RpbmcgdmFsdWUgb3IgY3JlYXRlIG5ld1xuICAgICAgICBjb25zdCB2YWx1ZUFscmVhZHlFeGlzdHMgPSB0aGlzLnZhbHVlc1trZXldICE9PSB1bmRlZmluZWQ7XG4gICAgICAgIGxldCBuZXdWYWx1ZSA9IHZhbHVlQWxyZWFkeUV4aXN0cyA/IHsgLi4udGhpcy52YWx1ZXNba2V5XSB9IDogeyAuLi5pbmhlcml0IH07XG5cbiAgICAgICAgLy8gSWYgdmFsdWVzIGlzIG5vdCBhbiBvYmplY3QsIGFzc2lnbiB2YWx1ZSB0byBkZWZhdWx0IHByb3BcbiAgICAgICAgaWYgKCFpc09iaih2YWx1ZXNba2V5XSkpIHtcbiAgICAgICAgICBuZXdWYWx1ZVt0aGlzLmRlZmF1bHRWYWx1ZVByb3BdID0gdmFsdWVzW2tleV07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbmV3VmFsdWUgPSB7IC4uLm5ld1ZhbHVlLCAuLi52YWx1ZXNba2V5XSB9O1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gSWYgd2UndmUgZ290IGFuIGFkYXB0ZXIsIGdldCB0aGUgY3VycmVudCB2YWx1ZVxuICAgICAgICBpZiAobmV3VmFsdWUuY3VycmVudCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgaWYgKHRoaXMuYWRhcHRlcikge1xuICAgICAgICAgICAgbmV3VmFsdWUuY3VycmVudCA9IGNvbnZlcnRJZlNob3VsZEJlTnVtYmVyKHRoaXMuYWRhcHRlci5nZXQodGhpcy5lbGVtZW50LCBrZXkpKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAobmV3VmFsdWUuZnJvbSA9PT0gdW5kZWZpbmVkICYmIHRoaXMuYWRhcHRlcikge1xuICAgICAgICAgIG5ld1ZhbHVlLmZyb20gPSBuZXdWYWx1ZS5jdXJyZW50O1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gQXBwbHkgZGVmYXVsdCB2YWx1ZSBwcm9wZXJ0aWVzXG4gICAgICAgIGlmICghdmFsdWVBbHJlYWR5RXhpc3RzKSB7XG4gICAgICAgICAgbmV3VmFsdWUgPSB7IC4uLnRoaXMuZGVmYXVsdFZhbHVlLCAuLi5uZXdWYWx1ZSB9O1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gSWYgd2UgZG9uJ3QgaGF2ZSBhIHZhbHVlIHR5cGUgYW5kIHdlIGRvIGhhdmUgYW4gQWRhcHRlciwgY2hlY2sgZm9yIHR5cGUgd2l0aCB2YWx1ZSBrZXlcbiAgICAgICAgaWYgKCFuZXdWYWx1ZS50eXBlICYmIHRoaXMuYWRhcHRlciAmJiB0aGlzLmFkYXB0ZXIuY2hlY2tWYWx1ZVR5cGUpIHtcbiAgICAgICAgICBuZXdWYWx1ZS50eXBlID0gdGhpcy5hZGFwdGVyLmNoZWNrVmFsdWVUeXBlKGtleSk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBJZiB3ZSBzdGlsbCBkb24ndCBoYXZlIGEgdmFsdWUgdHlwZSBhbmQgdGhpcyBpcyB0aGUgZmlyc3QgdGltZSB3ZSd2ZSBzZXQgdGhpcyB2YWx1ZSwgY2hlY2sgbnVtZXJpY2FsIHZhbHVlcyBmb3Igc3RyaW5ncyBhbmQgdGVzdFxuICAgICAgICBpZiAoIW5ld1ZhbHVlLnR5cGUgJiYgIXRoaXMudmFsdWVzW2tleV0pIHtcbiAgICAgICAgICBuZXdWYWx1ZS50eXBlID0gZGV0ZWN0VmFsdWVUeXBlKG5ld1ZhbHVlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIElmIHdlIGhhdmUgYSB2YWx1ZSB0eXBlLCBoYW5kbGUuIFRoaXMgaXMgbXkgbGVhc3QgZmF2b3VyaXRlIHBhcnQgb2YgUG9wbW90aW9uLCBzby4uLiBlbmpveS5cbiAgICAgICAgaWYgKG5ld1ZhbHVlLnR5cGUpIHtcbiAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IE5VTV9OVU1FUklDQUxfVkFMVUVTOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IHByb3BOYW1lID0gTlVNRVJJQ0FMX1ZBTFVFU1tpXTtcbiAgICAgICAgICAgIGNvbnN0IHZhbHVlUHJvcCA9IG5ld1ZhbHVlW3Byb3BOYW1lXTtcblxuICAgICAgICAgICAgLy8gSWYgdGhpcyBwcm9wIGlzIGEgc3RyaW5nIGFuZCB3ZSBoYXZlIGEgc3BsaXR0ZXIsIHNwbGl0XG4gICAgICAgICAgICBpZiAobmV3VmFsdWUudHlwZS5oYXNPd25Qcm9wZXJ0eSgnc3BsaXQnKSkge1xuICAgICAgICAgICAgICBjb25zdCBzcGxpdFByb3AgPSBpc1N0cmluZyh2YWx1ZVByb3ApID8gbmV3VmFsdWUudHlwZS5zcGxpdCh2YWx1ZVByb3ApIDoge307XG5cbiAgICAgICAgICAgICAgZm9yIChsZXQgc3BsaXRLZXkgaW4gc3BsaXRQcm9wKSB7XG4gICAgICAgICAgICAgICAgaWYgKHNwbGl0UHJvcC5oYXNPd25Qcm9wZXJ0eShzcGxpdEtleSkpIHtcbiAgICAgICAgICAgICAgICAgIGNvbnN0IGNvbWJpbmVkS2V5ID0ga2V5ICsgc3BsaXRLZXk7XG5cbiAgICAgICAgICAgICAgICAgIC8vIElmIHdlIGRvbid0IGhhdmUgYSBjaGlsZCB2YWx1ZSBmb3IgdGhpcyBrZXksIG1ha2Ugb25lXG4gICAgICAgICAgICAgICAgICBpZiAoIWNoaWxkcmVuW2NvbWJpbmVkS2V5XSkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBkZWZhdWx0VmFsdWUgPSAobmV3VmFsdWUudHlwZS5kZWZhdWx0UHJvcHMgJiYgbmV3VmFsdWUudHlwZS5kZWZhdWx0UHJvcHNbc3BsaXRLZXldKSA/IG5ld1ZhbHVlLnR5cGUuZGVmYXVsdFByb3BzW3NwbGl0S2V5XSA6IG5ld1ZhbHVlLnR5cGUuZGVmYXVsdFByb3BzIHx8IHt9O1xuXG4gICAgICAgICAgICAgICAgICAgIGNoaWxkcmVuW2NvbWJpbmVkS2V5XSA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAuLi5uZXdWYWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAuLi5kZWZhdWx0VmFsdWUsXG4gICAgICAgICAgICAgICAgICAgICAgcGFyZW50OiBrZXksXG4gICAgICAgICAgICAgICAgICAgICAgY2hpbGRLZXk6IHNwbGl0S2V5XG4gICAgICAgICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgICAgICAgICAgZGVsZXRlIGNoaWxkcmVuW2NvbWJpbmVkS2V5XS50eXBlO1xuICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICBoYXNDaGlsZHJlbiA9IHRydWU7XG4gICAgICAgICAgICAgICAgICBjaGlsZHJlbltjb21iaW5lZEtleV1bcHJvcE5hbWVdID0gcGFyc2VGbG9hdChzcGxpdFByb3Bbc3BsaXRLZXldKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAvLyBJZiB3ZSBoYXZlIGEgdGVtcGxhdGUgZnVuY3Rpb24sIGdlbmVyYXRlXG4gICAgICAgICAgICAgIGlmICghbmV3VmFsdWUudGVtcGxhdGUgJiYgbmV3VmFsdWUudHlwZS50ZW1wbGF0ZSAmJiBpc1N0cmluZyh2YWx1ZVByb3ApKSB7XG4gICAgICAgICAgICAgICAgbmV3VmFsdWUudGVtcGxhdGUgPSBuZXdWYWx1ZS50eXBlLnRlbXBsYXRlKHZhbHVlUHJvcCk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSBpZiAobmV3VmFsdWUudHlwZS5kZWZhdWx0UHJvcHMpIHtcbiAgICAgICAgICAgICAgbmV3VmFsdWUgPSB7IC4uLm5ld1ZhbHVlLnR5cGUuZGVmYXVsdFByb3BzLCAuLi5uZXdWYWx1ZSB9O1xuXG4gICAgICAgICAgICAgIC8vIFRoaXMgaXMgYSBiaXQgb2YgYSBoYWNrIC0gdGhpcyBlbnRpcmUgZnVuY3Rpb24gaXMgYSBoYWNrLiBTb3JyeSBmdXR1cmUgc2VsZi4gSSBsb29rIGZvcndhcmQgdG8gc2NyYXBwaW5nIHRoZSBsb3Qgb2YgaXQuXG4gICAgICAgICAgICAgIGlmIChuZXdWYWx1ZS50eXBlLmRlZmF1bHRQcm9wcy50eXBlKSB7XG4gICAgICAgICAgICAgICAgbmV3VmFsdWUudHlwZSA9IG5ld1ZhbHVlLnR5cGUuZGVmYXVsdFByb3BzLnR5cGU7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHZhbHVlUHJvcCAhPT0gdW5kZWZpbmVkICYmIG5ld1ZhbHVlLnR5cGUucGFyc2UpIHtcbiAgICAgICAgICAgICAgbmV3VmFsdWVbcHJvcE5hbWVdID0gbmV3VmFsdWUudHlwZS5wYXJzZSh2YWx1ZVByb3AsIG5ld1ZhbHVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0gLy8gRW5kIHZhbHVlIHR5cGUgbm9uc2Vuc2VcblxuICAgICAgICAvLyBTZXQgYHByZXZgIHRvIGBjdXJyZW50YCBmb3IgZmlyc3QgZnJhbWUgYWZ0ZXIgc2V0XG4gICAgICAgIG5ld1ZhbHVlLnByZXYgPSBuZXdWYWx1ZS5jdXJyZW50O1xuICAgICAgICBcbiAgICAgICAgLy8gSWYgdGhpcyB2YWx1ZSBkb2Vzbid0IGhhdmUgY2hpbGRyZW4sIGFkZCB0byB2YWx1ZUtleXNcbiAgICAgICAgaWYgKCFoYXNDaGlsZHJlbikge1xuICAgICAgICAgIGlmICh0aGlzLnZhbHVlS2V5cy5pbmRleE9mKGtleSkgPT09IC0xKSB7XG4gICAgICAgICAgICB0aGlzLnZhbHVlS2V5cy5wdXNoKGtleSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgIC8vIE9yIGFkZCB0byBwYXJlbnRLZXlzXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbmV3VmFsdWUuY2hpbGRyZW4gPSBuZXdWYWx1ZS5jaGlsZHJlbiB8fCB7fTtcblxuICAgICAgICAgIGlmICh0aGlzLnBhcmVudEtleXMuaW5kZXhPZihrZXkpID09PSAtMSkge1xuICAgICAgICAgICAgdGhpcy5wYXJlbnRLZXlzLnB1c2goa2V5KTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB0aGlzLnNldFZhbHVlcyhjaGlsZHJlbik7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnZhbHVlc1trZXldID0gbmV3VmFsdWU7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLypcbiAgICBEZWNpZGUgd2hldGhlciB0aGlzIEFjdGlvbiB3aWxsIHJlbmRlciBvbiBuZXh0IGZyYW1lXG5cbiAgICBAcGFyYW0gW0FjdGlvbl1cbiAgICBAcGFyYW0gW251bWJlcl1cbiAgICBAcGFyYW0gW251bWJlcl1cbiAgICBAcmV0dXJuIFtib29sZWFuXTogUmV0dXJuIHRydWUgdG8gcmVuZGVyXG4gICovXG4gIHdpbGxSZW5kZXIoYWN0aW9uLCBmcmFtZVN0YW1wLCBlbGFwc2VkKSB7XG4gICAgbGV0IGhhc0NoYW5nZWQgPSBmYWxzZTtcblxuICAgIC8vIENoZWNrIGlmIGJhc2UgdmFsdWVzIGhhdmUgdXBkYXRlZCBcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubnVtVmFsdWVLZXlzOyBpKyspIHtcbiAgICAgIGNvbnN0IGtleSA9IHRoaXMudmFsdWVLZXlzW2ldO1xuICAgICAgY29uc3QgdmFsdWUgPSB0aGlzLnZhbHVlc1trZXldO1xuXG4gICAgICAvLyBSdW4gdHJhbnNmb3JtIGZ1bmN0aW9uIChpZiBwcmVzZW50KVxuICAgICAgaWYgKHZhbHVlLnRyYW5zZm9ybSkge1xuICAgICAgICB2YWx1ZS5jdXJyZW50ID0gdmFsdWUudHJhbnNmb3JtKHZhbHVlLmN1cnJlbnQsIGtleSwgdGhpcyk7XG4gICAgICB9XG5cbiAgICAgIC8vIENhcCBtaW5pbXVtXG4gICAgICBpZiAoaXNOdW0odmFsdWUubWluKSkge1xuICAgICAgICB2YWx1ZS5jdXJyZW50ID0gTWF0aC5tYXgodmFsdWUuY3VycmVudCwgdmFsdWUubWluKTtcbiAgICAgIH1cblxuICAgICAgLy8gQ2FwIG1heGltdW1cbiAgICAgIGlmIChpc051bSh2YWx1ZS5tYXgpKSB7XG4gICAgICAgIHZhbHVlLmN1cnJlbnQgPSBNYXRoLm1pbih2YWx1ZS5jdXJyZW50LCB2YWx1ZS5tYXgpO1xuICAgICAgfVxuXG4gICAgICAvLyBSb3VuZCBudW1iZXJcbiAgICAgIGlmICh2YWx1ZS5yb3VuZCkge1xuICAgICAgICB2YWx1ZS5jdXJyZW50ID0gTWF0aC5yb3VuZCh2YWx1ZS5jdXJyZW50KTtcbiAgICAgIH1cblxuICAgICAgdmFsdWUuZnJhbWVDaGFuZ2UgPSB2YWx1ZS5jdXJyZW50IC0gdmFsdWUucHJldjtcblxuICAgICAgLy8gVXBkYXRlIHZlbG9jaXR5XG4gICAgICBpZiAoIXRoaXMuY2FsY3VsYXRlc1ZlbG9jaXR5KSB7XG4gICAgICAgIHZhbHVlLnZlbG9jaXR5ID0gc3BlZWRQZXJTZWNvbmQodmFsdWUuZnJhbWVDaGFuZ2UsIGVsYXBzZWQpO1xuICAgICAgfVxuXG4gICAgICAvLyBJZiB0aGlzIHZhbHVlIGhhcyBjaGFuZ2VkXG4gICAgICBpZiAodmFsdWUucHJldiAhPT0gdmFsdWUuY3VycmVudCkge1xuICAgICAgICBoYXNDaGFuZ2VkID0gdHJ1ZTtcbiAgICAgICAgdmFsdWUucHJldiA9IHZhbHVlLmN1cnJlbnQ7XG4gICAgICB9XG5cbiAgICAgIC8vIEFwcGVuZCB1bml0XG4gICAgICBjb25zdCB2YWx1ZUZvclN0YXRlID0gKHZhbHVlLnR5cGUgJiYgdmFsdWUudHlwZS5zZXJpYWxpemUpID8gdmFsdWUudHlwZS5zZXJpYWxpemUodmFsdWUuY3VycmVudCwgdmFsdWUpIDogdmFsdWUuY3VycmVudDtcblxuICAgICAgLy8gQWRkIHRvIHN0YXRlIGlmIHRoaXMgaXMgbm90IGEgY2hpbGQgdmF1ZVxuICAgICAgaWYgKCF2YWx1ZS5wYXJlbnQpIHtcbiAgICAgICAgdGhpcy5zdGF0ZVtrZXldID0gdmFsdWVGb3JTdGF0ZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMudmFsdWVzW3ZhbHVlLnBhcmVudF0uY2hpbGRyZW5bdmFsdWUuY2hpbGRLZXldID0gdmFsdWVGb3JTdGF0ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBVcGRhdGUgcGFyZW50IHZhbHVlc1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5udW1QYXJlbnRLZXlzOyBpKyspIHtcbiAgICAgIGNvbnN0IGtleSA9IHRoaXMucGFyZW50S2V5c1tpXTtcbiAgICAgIGNvbnN0IHZhbHVlID0gdGhpcy52YWx1ZXNba2V5XTtcblxuICAgICAgdmFsdWUuY3VycmVudCA9IHZhbHVlLnR5cGUuY29tYmluZSh2YWx1ZS5jaGlsZHJlbiwgdmFsdWUudGVtcGxhdGUpO1xuXG4gICAgICB0aGlzLnN0YXRlW2tleV0gPSB2YWx1ZS5jdXJyZW50O1xuICAgIH1cblxuICAgIGlmICh0aGlzLm9uRnJhbWUpIHtcbiAgICAgIHRoaXMub25GcmFtZSh0aGlzLnN0YXRlLCB0aGlzKTtcbiAgICB9XG5cbiAgICByZXR1cm4gKHRoaXMub25DbGVhbnVwKSA/IHRydWUgOiBoYXNDaGFuZ2VkO1xuICB9XG5cbiAgaW5oZXJpdChwcm9wcyA9IHt9KSB7XG4gICAgY29uc3QgeyB2YWx1ZXMsIC4uLnByb3BzVG9TZXQgfSA9IHByb3BzO1xuICAgIGNvbnN0IG5ld0FjdGlvbiA9IHN1cGVyLmluaGVyaXQocHJvcHNUb1NldCk7XG5cbiAgICBpZiAodmFsdWVzKSB7XG4gICAgICBuZXdBY3Rpb24uc2V0KHsgdmFsdWVzIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBuZXdBY3Rpb247XG4gIH1cblxuICBwYXVzZSgpIHtcbiAgICBzdXBlci5zdG9wKCk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICByZXN1bWUoKSB7XG4gICAgc3VwZXIuc3RhcnQoKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHRvZ2dsZSgpIHtcbiAgICByZXR1cm4gdGhpcy5pc0FjdGl2ZSA/IHRoaXMucGF1c2UoKSA6IHRoaXMucmVzdW1lKCk7XG4gIH1cblxuICBzdGFydCgpIHtcbiAgICBjb25zdCB2YWx1ZXMgPSB0aGlzLnZhbHVlcztcbiAgICBzdXBlci5zdGFydCgpO1xuXG4gICAgZm9yIChsZXQga2V5IGluIHZhbHVlcykge1xuICAgICAgaWYgKHZhbHVlcy5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgIHZhbHVlc1trZXldLnByZXYgPSB2YWx1ZXNba2V5XS5vcmlnaW4gPSB2YWx1ZXNba2V5XS5jdXJyZW50O1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgc3RhdGljIGV4dGVuZERlZmF1bHRWYWx1ZShwcm9wcykge1xuICAgIHJldHVybiB7IC4uLnRoaXMucHJvdG90eXBlLmRlZmF1bHRWYWx1ZSwgLi4ucHJvcHMgfTtcbiAgfVxuXG4gIHN0YXRpYyBleHRlbmREZWZhdWx0UHJvcHMocHJvcHMpIHtcbiAgICByZXR1cm4geyAuLi50aGlzLnByb3RvdHlwZS5kZWZhdWx0UHJvcHMsIC4uLnByb3BzIH07XG4gIH1cbn1cblxuQWN0aW9uLnByb3RvdHlwZS5kZWZhdWx0VmFsdWVQcm9wID0gJ2N1cnJlbnQnO1xuQWN0aW9uLnByb3RvdHlwZS5kZWZhdWx0VmFsdWUgPSB7XG4gIHZlbG9jaXR5OiAwLFxuICByb3VuZDogZmFsc2UsXG4gIG1pbjogdW5kZWZpbmVkLFxuICBtYXg6IHVuZGVmaW5lZCxcbiAgdHJhbnNmb3JtOiB1bmRlZmluZWRcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEFjdGlvbjtcbiJdfQ==

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
	//# sourceMappingURL=data:application/json;base64,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a0JBQVAsQ0FBMEI7QUFDdEQsV0FBUyxFQUQ2QztBQUV0RCxjQUFZO0FBRjBDLENBQTFCLENBQTlCOztrQkFLZSxJIiwiZmlsZSI6IkZsb3cuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL21hdHRwZXJyeS9TaXRlcy9wb3Btb3Rpb24iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQWN0aW9uIGZyb20gJy4uL2FjdGlvbnMvQWN0aW9uJztcbmltcG9ydCBnZW5lcmF0ZUJsZW5kQ3VydmUgZnJvbSAnLi9mbG93L2dlbmVyYXRlLWJsZW5kLWN1cnZlJztcblxuLypcbiAgTWV0aG9kcyBhbmQgcHJvcGVydGllcyB0byBhZGQgdG8gYm91bmQgQWN0aW9uc1xuKi9cbmNvbnN0IGJvdW5kT25TdGFydCA9IChhY3Rpb24pID0+IGFjdGlvbi5mbG93LmFjdGl2YXRlQWN0aW9uKGFjdGlvbi5pZCwgYWN0aW9uKTtcbmNvbnN0IGJvdW5kT25TdG9wID0gKGFjdGlvbikgPT4gYWN0aW9uLmZsb3cuZGVhY3RpdmF0ZUFjdGlvbihhY3Rpb24uaWQpO1xuY29uc3QgYm91bmRQcm9wcyA9IChmbG93KSA9PiAoe1xuICBmbG93LFxuICBpc1ByaW9yaXR5OiB0cnVlLFxuICBvbkFjdGl2YXRlOiBib3VuZE9uU3RhcnQsXG4gIG9uRGVhY3RpdmF0ZTogYm91bmRPblN0b3Bcbn0pO1xuXG5jbGFzcyBGbG93IGV4dGVuZHMgQWN0aW9uIHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5hY3RpdmVBY3Rpb25zID0ge307XG4gICAgdGhpcy5udW1BY3RpdmVBY3Rpb25zID0gMDtcbiAgfVxuXG4gIHNldChwcm9wcykge1xuICAgIHN1cGVyLnNldChwcm9wcyk7XG5cbiAgICB0aGlzLm9uY2UoKTtcblxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgLypcbiAgICBCaW5kIEFjdGlvbiB0byBBY3RvclxuICAqL1xuICBjb25uZWN0KGFjdGlvbikge1xuICAgIGNvbnN0IGluaGVyaXRlZEFjdGlvbiA9IGFjdGlvbi5pbmhlcml0KCk7XG4gICAgbGV0IG5ld1ZhbHVlcyA9IHt9O1xuICAgIGxldCBoYXNOZXdWYWx1ZXMgPSBmYWxzZTtcblxuICAgIC8vIENyZWF0ZSB2YWx1ZXMgb24gYWN0b3IgdGhhdCBkb24ndCBleGlzdFxuICAgIGZvciAobGV0IGtleSBpbiBpbmhlcml0ZWRBY3Rpb24udmFsdWVzKSB7XG4gICAgICBpZiAoaW5oZXJpdGVkQWN0aW9uLnZhbHVlcy5oYXNPd25Qcm9wZXJ0eShrZXkpICYmICF0aGlzLnZhbHVlcy5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgIG5ld1ZhbHVlc1trZXldID0ge307XG4gICAgICAgIGhhc05ld1ZhbHVlcyA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGhhc05ld1ZhbHVlcykge1xuICAgICAgdGhpcy5zZXQoeyB2YWx1ZXM6IG5ld1ZhbHVlcyB9KTtcbiAgICB9XG5cbiAgICBpbmhlcml0ZWRBY3Rpb24ucGFyZW50SWQgPSBhY3Rpb24uaWQ7XG5cbiAgICByZXR1cm4gaW5oZXJpdGVkQWN0aW9uLnNldChib3VuZFByb3BzKHRoaXMsIGluaGVyaXRlZEFjdGlvbikpO1xuICB9XG5cbiAgLypcbiAgICBTdGFydCBBY3RvclxuXG4gICAgSWYgQWN0aW9uIGlzIHByb3ZpZGVkLCBiaW5kIGl0IHRvIHRoaXMgQWN0b3IgYW5kIHN0YXJ0XG5cbiAgICBAcGFyYW0gKG9wdGlvbmFsKSBbQWN0aW9uXVxuICAqL1xuICBzdGFydCgpIHtcbiAgICBzdXBlci5zdGFydCgpO1xuXG4gICAgZm9yIChsZXQga2V5IGluIHRoaXMuYWN0aXZlQWN0aW9ucykge1xuICAgICAgaWYgKHRoaXMuYWN0aXZlQWN0aW9ucy5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgIGNvbnN0IGFjdGlvbiA9IHRoaXMuYWN0aXZlQWN0aW9uc1trZXldO1xuICAgICAgICBpZiAoIWFjdGlvbi5pc0FjdGl2ZSkge1xuICAgICAgICAgIGFjdGlvbi5zdGFydCgpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBzdG9wKCkge1xuICAgIHN1cGVyLnN0b3AoKTtcblxuICAgIGZvciAobGV0IGtleSBpbiB0aGlzLmFjdGl2ZUFjdGlvbnMpIHtcbiAgICAgIGlmICh0aGlzLmFjdGl2ZUFjdGlvbnMuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICB0aGlzLmFjdGl2ZUFjdGlvbnNba2V5XS5zdG9wKCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICB3aWxsUmVuZGVyKGFjdG9yLCBmcmFtZVN0YW1wLCBlbGFwc2VkKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLm51bVZhbHVlS2V5czsgaSsrKSB7XG4gICAgICBjb25zdCBrZXkgPSB0aGlzLnZhbHVlS2V5c1tpXTtcbiAgICAgIGNvbnN0IHZhbHVlID0gdGhpcy52YWx1ZXNba2V5XTtcbiAgICAgIGNvbnN0IGRyaXZlciA9IHZhbHVlLm51bURyaXZlcnMgPyB0aGlzLmFjdGl2ZUFjdGlvbnNbdmFsdWUuZHJpdmVyc1swXV0gOiBmYWxzZTtcbiAgICAgIGxldCBuZXdDdXJyZW50ID0gdmFsdWUubnVtRHJpdmVycyA/IGRyaXZlci52YWx1ZXNba2V5XS5jdXJyZW50IDogdmFsdWUuY3VycmVudDtcblxuICAgICAgLyoqXG4gICAgICAgKiBUT0RPOiByZXBsYWNlIHdpdGggYmxlbmQgdHJlZSByZXNvbHZlclxuICAgICAgICogQWRkaXRpdmUgbW90aW9uXG4gICAgICAgKiBCZXppZXIgdHdlZW4gYmxlbmRcbiAgICAgICAqL1xuICAgICAgaWYgKHZhbHVlLmJsZW5kQ3VydmUpIHtcbiAgICAgICAgbmV3Q3VycmVudCA9IHZhbHVlLmJsZW5kQ3VydmUoKTtcbiAgICAgIH1cblxuICAgICAgdmFsdWUuY3VycmVudCA9IG5ld0N1cnJlbnQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN1cGVyLndpbGxSZW5kZXIoYWN0b3IsIGZyYW1lU3RhbXAsIGVsYXBzZWQpO1xuICB9XG5cbiAgLypcbiAgICBBZGQgYWN0aXZlIGFjdGlvbnNcblxuICAgIEBwYXJhbSBbbnVtYmVyXVxuICAgIEBwYXJhbSBbQWN0aW9uXVxuICAqL1xuICBhY3RpdmF0ZUFjdGlvbihpZCwgYWN0aW9uKSB7XG4gICAgdGhpcy5hY3RpdmVBY3Rpb25zW2lkXSA9IGFjdGlvbjtcbiAgICB0aGlzLm51bUFjdGl2ZUFjdGlvbnMrKztcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYWN0aW9uLm51bVZhbHVlS2V5czsgaSsrKSB7XG4gICAgICBjb25zdCBrZXkgPSBhY3Rpb24udmFsdWVLZXlzW2ldO1xuICAgICAgY29uc3QgYWN0aW9uVmFsdWUgPSBhY3Rpb24udmFsdWVzW2tleV07XG4gICAgICBjb25zdCB2YWx1ZSA9IHRoaXMudmFsdWVzW2tleV07XG5cbiAgICAgIC8vIElmIHdlJ3JlIGJsZW5kaW5nIHRoaXMgYWN0aW9uLCBhbmQgdGhlcmUncyBvbiBhbHJlYWR5IGluIHByb2dyZXNzXG4gICAgICBpZiAoYWN0aW9uLmJsZW5kICYmIHZhbHVlLm51bURyaXZlcnMgJiYgIXZhbHVlLmJsZW5kQ3VydmUgJiYgKHZhbHVlLmRyaXZlcnNbMF0ucHJvdG90eXBlID09PSBhY3Rpb24ucHJvdG90eXBlKSkge1xuICAgICAgICB2YWx1ZS5ibGVuZEN1cnZlID0gZ2VuZXJhdGVCbGVuZEN1cnZlKHRoaXMuYWN0aXZlQWN0aW9uc1t2YWx1ZS5kcml2ZXJzWzBdXSwgYWN0aW9uLCB2YWx1ZSwga2V5KTtcbiAgICAgIH0gZWxzZSBpZiAoIWFjdGlvbi5pc1NjcnViYmluZykge1xuICAgICAgICB2YWx1ZS5ibGVuZEN1cnZlID0gdW5kZWZpbmVkO1xuXG4gICAgICAgIC8vIFBhc3MgQWN0b3IgdmFsdWUgcHJvcGVydGllcyB0byBBY3Rpb25cbiAgICAgICAgaWYgKGFjdGlvblZhbHVlLnZlbG9jaXR5ID09PSAwKSB7XG4gICAgICAgICAgYWN0aW9uVmFsdWUudmVsb2NpdHkgPSB2YWx1ZS52ZWxvY2l0eTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChhY3Rpb25WYWx1ZS5mcm9tID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICBhY3Rpb25WYWx1ZS5mcm9tID0gYWN0aW9uVmFsdWUuY3VycmVudCA9IHZhbHVlLmN1cnJlbnQ7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgdmFsdWUuZHJpdmVycyA9IFtpZF07XG4gICAgICB2YWx1ZS5udW1Ecml2ZXJzID0gdmFsdWUuZHJpdmVycy5sZW5ndGg7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMubnVtQWN0aXZlQWN0aW9ucykge1xuICAgICAgc3VwZXIuc3RhcnQoKTtcbiAgICB9XG4gIH1cblxuICAvKlxuICAgIFJlbW92ZSBhY3RpdmUgYWN0aW9uc1xuXG4gICAgQHBhcmFtIFtudW1iZXJdXG4gICovXG4gIGRlYWN0aXZhdGVBY3Rpb24oaWQpIHtcbiAgICBjb25zdCBhY3Rpb24gPSB0aGlzLmFjdGl2ZUFjdGlvbnNbaWRdO1xuXG4gICAgaWYgKGFjdGlvbikge1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhY3Rpb24ubnVtVmFsdWVLZXlzOyBpKyspIHtcbiAgICAgICAgY29uc3Qga2V5ID0gYWN0aW9uLnZhbHVlS2V5c1tpXTtcbiAgICAgICAgY29uc3QgdmFsdWUgPSB0aGlzLnZhbHVlc1trZXldO1xuICAgICAgICBjb25zdCBkcml2ZXJJbmRleCA9IHZhbHVlLmRyaXZlcnMuaW5kZXhPZihpZCk7XG5cbiAgICAgICAgaWYgKGRyaXZlckluZGV4ICE9PSAtMSkge1xuICAgICAgICAgIHZhbHVlLmRyaXZlcnMuc3BsaWNlKGRyaXZlckluZGV4LCAxKTtcbiAgICAgICAgICB2YWx1ZS5udW1Ecml2ZXJzLS07XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgZGVsZXRlIHRoaXMuYWN0aXZlQWN0aW9uc1tpZF07XG4gICAgICB0aGlzLm51bUFjdGl2ZUFjdGlvbnMtLTtcbiAgICB9XG5cbiAgICBpZiAoIXRoaXMubnVtQWN0aXZlQWN0aW9ucyAmJiB0aGlzLmlzQWN0aXZlKSB7XG4gICAgICBzdXBlci5zdG9wKCk7XG4gICAgfVxuICB9XG59XG5cbkZsb3cucHJvdG90eXBlLmRlZmF1bHRWYWx1ZSA9IEFjdGlvbi5leHRlbmREZWZhdWx0VmFsdWUoe1xuICBkcml2ZXJzOiBbXSxcbiAgbnVtRHJpdmVyczogMFxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IEZsb3c7XG4iXX0=

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
	//# sourceMappingURL=data:application/json;base64,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dkQsU0FBTztBQVBnRCxDQUExQixDQUEvQjtBQVNBLE1BQU0sU0FBTixDQUFnQixZQUFoQixHQUErQixpQkFBTyxrQkFBUCxDQUEwQjtBQUN2RCxTQUFPLEtBRGdEO0FBRXZELFVBQVEsQ0FGK0M7QUFHdkQsUUFBTSxDQUhpRDtBQUl2RCxRQUFNLENBSmlEO0FBS3ZELFFBQU0sQ0FMaUQ7QUFNdkQsYUFBVyxDQU40QztBQU92RCxhQUFXLENBUDRDO0FBUXZELGFBQVcsQ0FSNEM7QUFTdkQsaUJBQWUsQ0FUd0M7QUFVdkQsZUFBYSxLQVYwQztBQVd2RCxTQUFPLEtBWGdEO0FBWXZELFdBQVM7QUFaOEMsQ0FBMUIsQ0FBL0I7O2tCQWVlLEsiLCJmaWxlIjoiVHdlZW4uanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL21hdHRwZXJyeS9TaXRlcy9wb3Btb3Rpb24iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQWN0aW9uIGZyb20gJy4vQWN0aW9uJztcbmltcG9ydCBlYXNpbmcgZnJvbSAnLi9lYXNpbmcvcHJlc2V0LWVhc2luZyc7XG5pbXBvcnQgeyBjdXJyZW50VGltZSwgaXNOdW0gfSBmcm9tICcuLi9pbmMvdXRpbHMnO1xuaW1wb3J0IHsgZWFzZSwgcmVzdHJpY3QsIGdldFByb2dyZXNzRnJvbVZhbHVlLCBzdGVwUHJvZ3Jlc3MgfSBmcm9tICcuLi9pbmMvY2FsYyc7XG5cbmNvbnN0IENPVU5UID0gJ0NvdW50JztcbmNvbnN0IE5FWFRfU1RFUFMgPSB7XG4gIGxvb3A6ICdyZXN0YXJ0JyxcbiAgeW95bzogJ3JldmVyc2UnLFxuICBmbGlwOiAnZmxpcFZhbHVlcydcbn07XG5cbmNsYXNzIFR3ZWVuIGV4dGVuZHMgQWN0aW9uIHtcbiAgc3RhcnQoKSB7XG4gICAgdGhpcy5lbGFwc2VkID0gMDtcbiAgICB0aGlzLmZsaXBDb3VudCA9IHRoaXMueW95b0NvdW50ID0gdGhpcy5sb29wQ291bnQgPSAwO1xuICAgIHRoaXMuaXNTY3J1YmJpbmcgPSBmYWxzZTtcblxuICAgIC8vIFNldCBkZWZhdWx0IGBmcm9tYCBpZiBub25lIHNldFxuICAgIGlmICghdGhpcy5mbG93KSB7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubnVtVmFsdWVLZXlzOyBpKyspIHtcbiAgICAgICAgY29uc3Qga2V5ID0gdGhpcy52YWx1ZUtleXNbaV07XG4gICAgICAgIGNvbnN0IHZhbHVlID0gdGhpcy52YWx1ZXNba2V5XTtcbiAgICAgICAgaWYgKHZhbHVlLmZyb20gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHZhbHVlLmZyb20gPSAwO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHN1cGVyLnN0YXJ0KCk7XG4gIH1cblxuICBvblVwZGF0ZSh0d2VlbiwgZnJhbWVTdGFtcCwgZWxhcHNlZCkge1xuICAgIGNvbnN0IHByb2dyZXNzVGFyZ2V0ID0gKHRoaXMucGxheURpcmVjdGlvbiA9PT0gMSkgPyAxIDogMDtcblxuICAgIHRoaXMuZW5kZWQgPSB0cnVlO1xuXG4gICAgaWYgKCF0aGlzLmlzU2NydWJiaW5nKSB7XG4gICAgICB0aGlzLmVsYXBzZWQgKz0gKGVsYXBzZWQgKiB0aGlzLmRpbGF0ZSkgKiB0aGlzLnBsYXlEaXJlY3Rpb247XG4gICAgfVxuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLm51bVZhbHVlS2V5czsgaSsrKSB7XG4gICAgICBjb25zdCBrZXkgPSB0aGlzLnZhbHVlS2V5c1tpXTtcbiAgICAgIGNvbnN0IHZhbHVlID0gdGhpcy52YWx1ZXNba2V5XTtcblxuICAgICAgbGV0IHByb2dyZXNzID0gcmVzdHJpY3QoZ2V0UHJvZ3Jlc3NGcm9tVmFsdWUodGhpcy5lbGFwc2VkIC0gdmFsdWUuZGVsYXksIDAsIHZhbHVlLmR1cmF0aW9uKSwgMCwgMSk7XG5cbiAgICAgIC8vIE1hcmsgVHdlZW4gYXMgTk9UIGVuZGVkIGlmIHN0aWxsIGluIHByb2dyZXNzXG4gICAgICBpZiAocHJvZ3Jlc3MgIT09IHByb2dyZXNzVGFyZ2V0KSB7XG4gICAgICAgIHRoaXMuZW5kZWQgPSBmYWxzZTtcbiAgICAgIH1cblxuICAgICAgLy8gU3RlcCBwcm9ncmVzcyBpZiB3ZSdyZSBzdGVwcGluZ1xuICAgICAgaWYgKHZhbHVlLnN0ZXBzKSB7XG4gICAgICAgIHByb2dyZXNzID0gc3RlcFByb2dyZXNzKHByb2dyZXNzLCB2YWx1ZS5zdGVwcyk7XG4gICAgICB9XG5cbiAgICAgIC8vIEVhc2UgcHJvZ3Jlc3NcbiAgICAgIHZhbHVlLmN1cnJlbnQgPSBlYXNlKHByb2dyZXNzLCB2YWx1ZS5mcm9tLCB2YWx1ZS50bywgdmFsdWUuZWFzZSk7XG4gICAgfVxuICB9XG5cbiAgb25GcmFtZUVuZCgpIHtcbiAgICBpZiAodGhpcy5lbmRlZCkge1xuICAgICAgbGV0IHN0ZXBUYWtlbiA9IGZhbHNlO1xuXG4gICAgICBmb3IgKGxldCBrZXkgaW4gTkVYVF9TVEVQUykge1xuICAgICAgICBpZiAoTkVYVF9TVEVQUy5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgaWYgKGlzTnVtKHRoaXNba2V5XSkgJiYgdGhpc1trZXldID4gdGhpc1trZXkgKyBDT1VOVF0pIHtcbiAgICAgICAgICAgIHRoaXNba2V5ICsgQ09VTlRdKys7XG4gICAgICAgICAgICBzdGVwVGFrZW4gPSB0cnVlO1xuICAgICAgICAgICAgdGhpc1tORVhUX1NURVBTW2tleV1dKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmICghc3RlcFRha2VuKSB7XG4gICAgICAgIHRoaXMuY29tcGxldGUoKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBmbGlwVmFsdWVzKCkge1xuICAgIGNvbnN0IHZhbHVlcyA9IHRoaXMudmFsdWVzO1xuXG4gICAgdGhpcy5lbGFwc2VkID0gdGhpcy5kdXJhdGlvbiAtIHRoaXMuZWxhcHNlZDtcblxuICAgIGZvciAobGV0IGtleSBpbiB2YWx1ZXMpIHtcbiAgICAgIGlmICh2YWx1ZXMuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICBjb25zdCB2YWx1ZSA9IHZhbHVlc1trZXldO1xuICAgICAgICBbdmFsdWUudG8sIHZhbHVlLmZyb21dID0gW3ZhbHVlLmZyb20sIHZhbHVlLnRvXTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHJldmVyc2UoKSB7XG4gICAgdGhpcy5wbGF5RGlyZWN0aW9uICo9IC0xO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgcmVzdGFydCgpIHtcbiAgICB0aGlzLmVsYXBzZWQgPSAodGhpcy5wbGF5RGlyZWN0aW9uID09PSAxKSA/IDAgOiB0aGlzLmR1cmF0aW9uO1xuICAgIHRoaXMuc3RhcnRlZCA9IGN1cnJlbnRUaW1lKCk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBzZWVrKHByb2dyZXNzKSB7XG4gICAgdGhpcy5zZWVrVGltZSh0aGlzLmR1cmF0aW9uICogcHJvZ3Jlc3MpO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgc2Vla1RpbWUoZWxhcHNlZCkge1xuICAgIGlmICghdGhpcy5pc0FjdGl2ZSB8fCB0aGlzLmlzU2NydWJiaW5nKSB7XG4gICAgICB0aGlzLm9uY2UoKTtcbiAgICAgIHRoaXMuaXNTY3J1YmJpbmcgPSB0cnVlO1xuICAgIH1cblxuICAgIHRoaXMuZWxhcHNlZCA9IGVsYXBzZWQ7XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfVxufVxuXG5Ud2Vlbi5wcm90b3R5cGUuZGVmYXVsdFZhbHVlUHJvcCA9ICd0byc7XG5Ud2Vlbi5wcm90b3R5cGUuZGVmYXVsdFZhbHVlID0gQWN0aW9uLmV4dGVuZERlZmF1bHRWYWx1ZSh7XG4gIGRlbGF5OiAwLFxuICBkdXJhdGlvbjogMzAwLFxuICBlYXNlOiBlYXNpbmcuZWFzZU91dCxcbiAgZWxhcHNlZDogMCxcbiAgc3RlcHM6IDAsXG4gIHRvOiAwLFxuICByb3VuZDogZmFsc2Vcbn0pO1xuVHdlZW4ucHJvdG90eXBlLmRlZmF1bHRQcm9wcyA9IEFjdGlvbi5leHRlbmREZWZhdWx0UHJvcHMoe1xuICBibGVuZDogZmFsc2UsXG4gIGRpbGF0ZTogMSxcbiAgbG9vcDogMCxcbiAgeW95bzogMCxcbiAgZmxpcDogMCxcbiAgbG9vcENvdW50OiAwLFxuICB5b3lvQ291bnQ6IDAsXG4gIGZsaXBDb3VudDogMCxcbiAgcGxheURpcmVjdGlvbjogMSxcbiAgaXNTY3J1YmJpbmc6IGZhbHNlLFxuICBlbmRlZDogZmFsc2UsXG4gIGVsYXBzZWQ6IDBcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBUd2VlbjtcbiJdfQ==

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
	
	      // Detect bounce
	      if (value.min !== undefined && value.current < value.min || value.max !== undefined && value.current > value.max) {
	        value.velocity *= -value.bounce;
	      }
	
	      // Check if value has changed
	      if (value.current !== previousValue || Math.abs(value.velocity) >= value.stopSpeed || value.spring && value.current !== value.to) {
	        this.hasChanged = true;
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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hY3Rpb25zL1BoeXNpY3MuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBOzs7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7SUFFTSxPOzs7QUFDSixxQkFBcUI7QUFBQTs7QUFBQSxzQ0FBTixJQUFNO0FBQU4sVUFBTTtBQUFBOztBQUFBLGlEQUNuQiwwQ0FBUyxJQUFULEVBRG1COztBQUVuQixVQUFLLGNBQUwsR0FBc0IsQ0FBdEI7QUFDQSxVQUFLLGtCQUFMLEdBQTBCLElBQTFCO0FBSG1CO0FBSXBCOztvQkFFRCxRLHFCQUFTLE8sRUFBUyxVLEVBQVksTyxFQUFTO0FBQ3JDLFNBQUssVUFBTCxHQUFrQixLQUFsQjs7QUFFQSxTQUFLLElBQUksSUFBSSxDQUFiLEVBQWdCLElBQUksS0FBSyxZQUF6QixFQUF1QyxHQUF2QyxFQUE0QztBQUMxQyxVQUFNLE1BQU0sS0FBSyxTQUFMLENBQWUsQ0FBZixDQUFaO0FBQ0EsVUFBTSxRQUFRLEtBQUssTUFBTCxDQUFZLEdBQVosQ0FBZDtBQUNBLFVBQU0sZ0JBQWdCLE1BQU0sSUFBNUI7OztBQUdBLFlBQU0sUUFBTixJQUFrQix5QkFBYyxNQUFNLFlBQXBCLEVBQWtDLE9BQWxDLENBQWxCOzs7QUFHQSxZQUFNLFFBQU4sYUFBbUIsSUFBSSxNQUFNLFFBQTdCLEVBQTJDLFVBQVUsR0FBckQ7OztBQUdBLFVBQUksTUFBTSxNQUFOLElBQWdCLGtCQUFNLE1BQU0sRUFBWixDQUFwQixFQUFxQztBQUNuQyxZQUFNLG1CQUFtQixNQUFNLEVBQU4sR0FBVyxNQUFNLE9BQTFDO0FBQ0EsY0FBTSxRQUFOLElBQWtCLG1CQUFtQix5QkFBYyxNQUFNLE1BQXBCLEVBQTRCLE9BQTVCLENBQXJDO0FBQ0Q7OztBQUdELFlBQU0sT0FBTixJQUFpQix5QkFBYyxNQUFNLFFBQXBCLEVBQThCLE9BQTlCLENBQWpCOzs7QUFHQSxVQUFLLE1BQU0sR0FBTixLQUFjLFNBQWQsSUFBMkIsTUFBTSxPQUFOLEdBQWdCLE1BQU0sR0FBbEQsSUFBMkQsTUFBTSxHQUFOLEtBQWMsU0FBZCxJQUEyQixNQUFNLE9BQU4sR0FBZ0IsTUFBTSxHQUFoSCxFQUFzSDtBQUNwSCxjQUFNLFFBQU4sSUFBa0IsQ0FBRSxNQUFNLE1BQTFCO0FBQ0Q7OztBQUdELFVBQUksTUFBTSxPQUFOLEtBQWtCLGFBQWxCLElBQW1DLEtBQUssR0FBTCxDQUFTLE1BQU0sUUFBZixLQUE0QixNQUFNLFNBQXJFLElBQW1GLE1BQU0sTUFBTixJQUFnQixNQUFNLE9BQU4sS0FBa0IsTUFBTSxFQUEvSCxFQUFvSTtBQUNsSSxhQUFLLFVBQUwsR0FBa0IsSUFBbEI7QUFDRDtBQUNGO0FBQ0YsRzs7b0JBRUQsVSx5QkFBYTtBQUNYLFFBQUksS0FBSyxpQkFBTCxLQUEyQixRQUEvQixFQUF5QztBQUN2QyxXQUFLLGNBQUwsR0FBc0IsS0FBSyxVQUFMLEdBQWtCLENBQWxCLEdBQXNCLEtBQUssY0FBTCxHQUFzQixDQUFsRTs7QUFFQSxVQUFJLEtBQUssY0FBTCxJQUF1QixLQUFLLGlCQUFoQyxFQUFtRDtBQUNqRCxhQUFLLFFBQUw7QUFDRDtBQUNGO0FBQ0YsRzs7Ozs7QUFHSCxRQUFRLFNBQVIsQ0FBa0IsZ0JBQWxCLEdBQXFDLFVBQXJDO0FBQ0EsUUFBUSxTQUFSLENBQWtCLFlBQWxCLEdBQWlDLGlCQUFPLGtCQUFQLENBQTBCO0FBQ3pELGdCQUFjLENBRDJDLEU7QUFFekQsVUFBUSxDQUZpRCxFO0FBR3pELFVBQVEsQ0FIaUQsRTtBQUl6RCxhQUFXLEtBSjhDLEU7QUFLekQsWUFBVSxDO0FBTCtDLENBQTFCLENBQWpDO0FBT0EsUUFBUSxTQUFSLENBQWtCLFlBQWxCLEdBQWlDLGlCQUFPLGtCQUFQLENBQTBCO0FBQ3pELHFCQUFtQjtBQURzQyxDQUExQixDQUFqQzs7a0JBSWUsTyIsImZpbGUiOiJQaHlzaWNzLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9tYXR0cGVycnkvU2l0ZXMvcG9wbW90aW9uIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEFjdGlvbiBmcm9tICcuL0FjdGlvbic7XG5pbXBvcnQgeyBzcGVlZFBlckZyYW1lIH0gZnJvbSAnLi4vaW5jL2NhbGMnO1xuaW1wb3J0IHsgaXNOdW0gfSBmcm9tICcuLi9pbmMvdXRpbHMnO1xuXG5jbGFzcyBQaHlzaWNzIGV4dGVuZHMgQWN0aW9uIHtcbiAgY29uc3RydWN0b3IoLi4uYXJncykge1xuICAgIHN1cGVyKC4uLmFyZ3MpO1xuICAgIHRoaXMuaW5hY3RpdmVGcmFtZXMgPSAwO1xuICAgIHRoaXMuY2FsY3VsYXRlc1ZlbG9jaXR5ID0gdHJ1ZTtcbiAgfVxuXG4gIG9uVXBkYXRlKHBoeXNpY3MsIGZyYW1lU3RhbXAsIGVsYXBzZWQpIHtcbiAgICB0aGlzLmhhc0NoYW5nZWQgPSBmYWxzZTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5udW1WYWx1ZUtleXM7IGkrKykge1xuICAgICAgY29uc3Qga2V5ID0gdGhpcy52YWx1ZUtleXNbaV07XG4gICAgICBjb25zdCB2YWx1ZSA9IHRoaXMudmFsdWVzW2tleV07XG4gICAgICBjb25zdCBwcmV2aW91c1ZhbHVlID0gdmFsdWUucHJldjtcblxuICAgICAgLy8gQXBwbHkgYWNjZWxlcmF0aW9uXG4gICAgICB2YWx1ZS52ZWxvY2l0eSArPSBzcGVlZFBlckZyYW1lKHZhbHVlLmFjY2VsZXJhdGlvbiwgZWxhcHNlZCk7XG5cbiAgICAgIC8vIEFwcGx5IGZyaWN0aW9uXG4gICAgICB2YWx1ZS52ZWxvY2l0eSAqPSAoMSAtIHZhbHVlLmZyaWN0aW9uKSAqKiAoZWxhcHNlZCAvIDEwMCk7XG5cbiAgICAgIC8vIEFwcGx5IHNwcmluZ1xuICAgICAgaWYgKHZhbHVlLnNwcmluZyAmJiBpc051bSh2YWx1ZS50bykpIHtcbiAgICAgICAgY29uc3QgZGlzdGFuY2VUb1RhcmdldCA9IHZhbHVlLnRvIC0gdmFsdWUuY3VycmVudDtcbiAgICAgICAgdmFsdWUudmVsb2NpdHkgKz0gZGlzdGFuY2VUb1RhcmdldCAqIHNwZWVkUGVyRnJhbWUodmFsdWUuc3ByaW5nLCBlbGFwc2VkKTtcbiAgICAgIH1cblxuICAgICAgLy8gQXBwbHkgbGF0ZXN0IHZlbG9jaXR5XG4gICAgICB2YWx1ZS5jdXJyZW50ICs9IHNwZWVkUGVyRnJhbWUodmFsdWUudmVsb2NpdHksIGVsYXBzZWQpO1xuXG4gICAgICAvLyBEZXRlY3QgYm91bmNlXG4gICAgICBpZiAoKHZhbHVlLm1pbiAhPT0gdW5kZWZpbmVkICYmIHZhbHVlLmN1cnJlbnQgPCB2YWx1ZS5taW4pIHx8ICh2YWx1ZS5tYXggIT09IHVuZGVmaW5lZCAmJiB2YWx1ZS5jdXJyZW50ID4gdmFsdWUubWF4KSkge1xuICAgICAgICB2YWx1ZS52ZWxvY2l0eSAqPSAtIHZhbHVlLmJvdW5jZTtcbiAgICAgIH1cbiAgICAgIFxuICAgICAgLy8gQ2hlY2sgaWYgdmFsdWUgaGFzIGNoYW5nZWRcbiAgICAgIGlmICh2YWx1ZS5jdXJyZW50ICE9PSBwcmV2aW91c1ZhbHVlIHx8IE1hdGguYWJzKHZhbHVlLnZlbG9jaXR5KSA+PSB2YWx1ZS5zdG9wU3BlZWQgfHwgKHZhbHVlLnNwcmluZyAmJiB2YWx1ZS5jdXJyZW50ICE9PSB2YWx1ZS50bykpIHtcbiAgICAgICAgdGhpcy5oYXNDaGFuZ2VkID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBvbkZyYW1lRW5kKCkge1xuICAgIGlmICh0aGlzLm1heEluYWN0aXZlRnJhbWVzICE9PSBJbmZpbml0eSkge1xuICAgICAgdGhpcy5pbmFjdGl2ZUZyYW1lcyA9IHRoaXMuaGFzQ2hhbmdlZCA/IDEgOiB0aGlzLmluYWN0aXZlRnJhbWVzICsgMTtcblxuICAgICAgaWYgKHRoaXMuaW5hY3RpdmVGcmFtZXMgPj0gdGhpcy5tYXhJbmFjdGl2ZUZyYW1lcykge1xuICAgICAgICB0aGlzLmNvbXBsZXRlKCk7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cblBoeXNpY3MucHJvdG90eXBlLmRlZmF1bHRWYWx1ZVByb3AgPSAndmVsb2NpdHknO1xuUGh5c2ljcy5wcm90b3R5cGUuZGVmYXVsdFZhbHVlID0gQWN0aW9uLmV4dGVuZERlZmF1bHRWYWx1ZSh7XG4gIGFjY2VsZXJhdGlvbjogMCwgLy8gW251bWJlcl06IEFjY2VsZXJhdGlvbiB0byBhcHBseSB0byB2YWx1ZSwgaW4gdW5pdHMgcGVyIHNlY29uZFxuICBib3VuY2U6IDAsIC8vIFtudW1iZXJdOiBGYWN0b3IgdG8gbXVsdGlwbHkgdmVsb2NpdHkgYnkgb24gYm91bmNlXG4gIHNwcmluZzogMCwgLy8gW251bWJlcl06IFNwcmluZyBzdHJlbmd0aCBkdXJpbmcgJ3N0cmluZydcbiAgc3RvcFNwZWVkOiAwLjAwMSwgLy8gW251bWJlcl06IFN0b3Agc2ltdWxhdGlvbiB1bmRlciB0aGlzIHNwZWVkXG4gIGZyaWN0aW9uOiAwIC8vIFtudW1iZXJdOiBGcmljdGlvbiB0byBhcHBseSBwZXIgZnJhbWUsIDAtMVxufSk7XG5QaHlzaWNzLnByb3RvdHlwZS5kZWZhdWx0UHJvcHMgPSBBY3Rpb24uZXh0ZW5kRGVmYXVsdFByb3BzKHtcbiAgbWF4SW5hY3RpdmVGcmFtZXM6IDNcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBQaHlzaWNzO1xuIl19

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
	//# sourceMappingURL=data:application/json;base64,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YWNrLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9tYXR0cGVycnkvU2l0ZXMvcG9wbW90aW9uIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEFjdGlvbiBmcm9tICcuL0FjdGlvbic7XG5pbXBvcnQgUG9pbnRlciBmcm9tICcuLi9pbnB1dC9Qb2ludGVyJztcbmltcG9ydCB7IHNtb290aCwgb2Zmc2V0IH0gZnJvbSAnLi4vaW5jL2NhbGMnO1xuXG4vKlxuICBTY3JhcGUgeC95IGNvb3JkaW5hdGVzIGZyb20gcHJvdmlkZWQgZXZlbnRcblxuICBAcGFyYW0gW2V2ZW50XVxuICBAcmV0dXJuIFtvYmplY3RdXG4qL1xuY29uc3QgbW91c2VFdmVudFRvUG9pbnQgPSAoZSkgPT4gKHtcbiAgeDogZS5wYWdlWCxcbiAgeTogZS5wYWdlWVxufSk7XG5cbmNvbnN0IHRvdWNoRXZlbnRUb1BvaW50ID0gKHsgY2hhbmdlZFRvdWNoZXMgfSkgPT4gKHtcbiAgeDogY2hhbmdlZFRvdWNoZXNbMF0uY2xpZW50WCxcbiAgeTogY2hhbmdlZFRvdWNoZXNbMF0uY2xpZW50WVxufSk7XG5cbmNvbnN0IGNyZWF0ZVBvaW50ZXIgPSAoZSkgPT4gZS50b3VjaGVzID9cbiAgbmV3IFBvaW50ZXIodG91Y2hFdmVudFRvUG9pbnQoZSksICd0b3VjaG1vdmUnLCB0b3VjaEV2ZW50VG9Qb2ludCkgOiBcbiAgbmV3IFBvaW50ZXIobW91c2VFdmVudFRvUG9pbnQoZSksICdtb3VzZW1vdmUnLCBtb3VzZUV2ZW50VG9Qb2ludCk7XG5cbmNvbnN0IGdldEFjdHVhbEV2ZW50ID0gKGUpID0+IGUub3JpZ2luYWxFdmVudCB8fCBlO1xuXG5jbGFzcyBUcmFjayBleHRlbmRzIEFjdGlvbiB7XG4gIHN0YXJ0KGlucHV0KSB7XG4gICAgc3VwZXIuc3RhcnQoKTtcblxuICAgIGlmIChpbnB1dCkge1xuICAgICAgdGhpcy5pbnB1dCA9IGlucHV0LnN0YXRlID8gaW5wdXQgOiBjcmVhdGVQb2ludGVyKGdldEFjdHVhbEV2ZW50KGlucHV0KSk7XG4gICAgfVxuXG4gICAgdGhpcy5pbnB1dE9mZnNldCA9IHt9O1xuICAgIHRoaXMuaW5wdXRPcmlnaW4gPSB7IC4uLnRoaXMuaW5wdXQuc3RhdGUgfTtcbiAgICB0aGlzLmlucHV0LnN0YXJ0KCk7XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHN0b3AoKSB7XG4gICAgc3VwZXIuc3RvcCgpO1xuICAgIHRoaXMuaW5wdXQuc3RvcCgpO1xuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBvblVwZGF0ZSh0cmFjaywgZnJhbWVTdGFtcCwgZWxhcHNlZCkge1xuICAgIHRoaXMuaW5wdXRPZmZzZXQgPSBvZmZzZXQodGhpcy5pbnB1dE9yaWdpbiwgdGhpcy5pbnB1dC5zdGF0ZSk7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubnVtVmFsdWVLZXlzOyBpKyspIHtcbiAgICAgIGNvbnN0IGtleSA9IHRoaXMudmFsdWVLZXlzW2ldO1xuXG4gICAgICBpZiAodGhpcy5pbnB1dE9mZnNldC5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgIGNvbnN0IHZhbHVlID0gdGhpcy52YWx1ZXNba2V5XTtcbiAgICAgICAgY29uc3QgaW5wdXRQcm9wID0gdmFsdWUuaGFzT3duUHJvcGVydHkoJ3dhdGNoJykgPyB2YWx1ZS53YXRjaCA6IGtleTtcblxuICAgICAgICBpZiAodmFsdWUuZGlyZWN0KSB7XG4gICAgICAgICAgdmFsdWUuY3VycmVudCA9IHRoaXMuaW5wdXQuc3RhdGVbaW5wdXRQcm9wXTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB2YWx1ZS5jdXJyZW50ID0gdmFsdWUuZnJvbSArIHRoaXMuaW5wdXRPZmZzZXRbaW5wdXRQcm9wXTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFNtb290aCB2YWx1ZSBpZiB3ZSBoYXZlIHNtb290aGluZ1xuICAgICAgICBpZiAodmFsdWUuc21vb3RoKSB7XG4gICAgICAgICAgdmFsdWUuY3VycmVudCA9IHNtb290aCh2YWx1ZS5jdXJyZW50LCB2YWx1ZS5wcmV2LCBlbGFwc2VkLCB2YWx1ZS5zbW9vdGgpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cblRyYWNrLnByb3RvdHlwZS5kZWZhdWx0VmFsdWVQcm9wID0gJ3dhdGNoJztcblRyYWNrLnByb3RvdHlwZS5kZWZhdWx0VmFsdWUgPSBBY3Rpb24uZXh0ZW5kRGVmYXVsdFZhbHVlKHtcbiAgZGlyZWN0OiBmYWxzZSxcbiAgZnJvbTogMFxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IFRyYWNrO1xuIl19

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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy90YXNrL1Rhc2suanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBR0E7O0lBQVksSTs7Ozs7Ozs7Ozs7QUFFWixTQUFTLE9BQVQsR0FBbUI7QUFDakIsT0FBSyxTQUFMLEdBQWlCLFNBQWpCO0FBQ0EsT0FBSyxVQUFMLENBQWdCLEtBQUssRUFBckI7QUFDRDs7QUFFRCxTQUFTLFFBQVQsR0FBb0I7QUFDbEIsT0FBSyxTQUFMLEdBQWlCLE9BQWpCO0FBQ0Q7O0lBRW9CLEk7QUFDbkIsZ0JBQVksS0FBWixFQUFtQjtBQUFBOztBQUNqQixTQUFLLEVBQUwsR0FBVSxLQUFLLFNBQUwsRUFBVjtBQUNBLFNBQUssUUFBTCxHQUFnQixLQUFoQjs7QUFFQSxRQUFJLEtBQUssWUFBVCxFQUF1QjtBQUNyQixXQUFLLElBQUksR0FBVCxJQUFnQixLQUFLLFlBQXJCLEVBQW1DO0FBQ2pDLFlBQUksS0FBSyxZQUFMLENBQWtCLGNBQWxCLENBQWlDLEdBQWpDLENBQUosRUFBMkM7QUFDekMsZUFBSyxHQUFMLElBQVksS0FBSyxZQUFMLENBQWtCLEdBQWxCLENBQVo7QUFDRDtBQUNGO0FBQ0Y7O0FBRUQsU0FBSyxHQUFMLENBQVMsS0FBVDtBQUNEOztpQkFFRCxHLGdCQUFJLEssRUFBTztBQUNULFNBQUssSUFBSSxHQUFULElBQWdCLEtBQWhCLEVBQXVCO0FBQ3JCLFVBQUksTUFBTSxjQUFOLENBQXFCLEdBQXJCLENBQUosRUFBK0I7QUFDN0IsYUFBSyxHQUFMLElBQVksTUFBTSxHQUFOLENBQVo7QUFDRDtBQUNGOztBQUVELFdBQU8sSUFBUDtBQUNELEc7O2lCQUVELEssb0JBQVE7QUFDTixTQUFLLFFBQUwsQ0FBYyxLQUFLLEVBQW5CLEVBQXVCLElBQXZCOztBQUVBLFNBQUssY0FBTCxHQUFzQixLQUFLLFNBQUwsR0FBaUIsU0FBdkM7QUFDQSxTQUFLLFVBQUwsR0FBa0IsS0FBbEI7O0FBRUEsUUFBSSxLQUFLLE9BQVQsRUFBa0I7QUFDaEIsV0FBSyxPQUFMLENBQWEsSUFBYjtBQUNEOztBQUVELFdBQU8sSUFBUDtBQUNELEc7O2lCQUVELEksbUJBQU87QUFDTCxTQUFLLFVBQUwsQ0FBZ0IsS0FBSyxFQUFyQjs7QUFFQSxRQUFJLEtBQUssTUFBVCxFQUFpQjtBQUNmLFdBQUssTUFBTCxDQUFZLElBQVo7QUFDRDs7QUFFRCxXQUFPLElBQVA7QUFDRCxHOztpQkFFRCxJLG1CQUFPO0FBQ0wsU0FBSyxRQUFMLENBQWMsS0FBSyxFQUFuQixFQUF1QixJQUF2QjtBQUNBLFNBQUssU0FBTCxHQUFpQixTQUFqQjtBQUNBLFNBQUssY0FBTCxHQUFzQixRQUF0Qjs7QUFFQSxXQUFPLElBQVA7QUFDRCxHOztpQkFFRCxRLHVCQUFXO0FBQ1QsU0FBSyxJQUFMOztBQUVBLFFBQUksS0FBSyxVQUFULEVBQXFCO0FBQ25CLFdBQUssVUFBTCxDQUFnQixJQUFoQjtBQUNEO0FBQ0YsRzs7Ozs7Ozs7OztpQkFTRCxPLG9CQUFRLEssRUFBTztBQUFBLFFBQ0wsRUFESyxHQUNxQixJQURyQixDQUNMLEVBREs7O0FBQUEsUUFDRSxjQURGLDRCQUNxQixJQURyQjs7QUFFYixXQUFPLElBQUksS0FBSyxXQUFULGNBQTBCLGNBQTFCLEVBQTZDLEtBQTdDLEVBQVA7QUFDRCxHOzs7OztrQkEzRWtCLEkiLCJmaWxlIjoiVGFzay5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvbWF0dHBlcnJ5L1NpdGVzL3BvcG1vdGlvbiIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gIEJhc2UgVGFzayBjbGFzcyBmb3IgY3JlYXRpbmcgYSB0YXNrIG9uIHRoZSBtYWluIHJlbmRlciBsb29wLlxuKi9cbmltcG9ydCAqIGFzIGxvb3AgZnJvbSAnLi9sb29wJztcblxuZnVuY3Rpb24gY2xlYW51cCgpIHtcbiAgdGhpcy5vbkNsZWFudXAgPSB1bmRlZmluZWQ7XG4gIGxvb3AuZGVhY3RpdmF0ZSh0aGlzLmlkKTtcbn1cblxuZnVuY3Rpb24gYWN0aXZhdGUoKSB7XG4gIHRoaXMub25DbGVhbnVwID0gY2xlYW51cDtcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGFzayB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgdGhpcy5pZCA9IGxvb3AuZ2V0VGFza0lkKCk7XG4gICAgdGhpcy5pc0FjdGl2ZSA9IGZhbHNlO1xuXG4gICAgaWYgKHRoaXMuZGVmYXVsdFByb3BzKSB7XG4gICAgICBmb3IgKGxldCBrZXkgaW4gdGhpcy5kZWZhdWx0UHJvcHMpIHtcbiAgICAgICAgaWYgKHRoaXMuZGVmYXVsdFByb3BzLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICB0aGlzW2tleV0gPSB0aGlzLmRlZmF1bHRQcm9wc1trZXldO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5zZXQocHJvcHMpO1xuICB9XG5cbiAgc2V0KHByb3BzKSB7XG4gICAgZm9yIChsZXQga2V5IGluIHByb3BzKSB7XG4gICAgICBpZiAocHJvcHMuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICB0aGlzW2tleV0gPSBwcm9wc1trZXldO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgc3RhcnQoKSB7XG4gICAgbG9vcC5hY3RpdmF0ZSh0aGlzLmlkLCB0aGlzKTtcblxuICAgIHRoaXMub25BY3RpdmF0ZUxvb3AgPSB0aGlzLm9uQ2xlYW51cCA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLmlzQ29tcGxldGUgPSBmYWxzZTtcblxuICAgIGlmICh0aGlzLm9uU3RhcnQpIHtcbiAgICAgIHRoaXMub25TdGFydCh0aGlzKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHN0b3AoKSB7XG4gICAgbG9vcC5kZWFjdGl2YXRlKHRoaXMuaWQpO1xuICAgIFxuICAgIGlmICh0aGlzLm9uU3RvcCkge1xuICAgICAgdGhpcy5vblN0b3AodGhpcyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBvbmNlKCkge1xuICAgIGxvb3AuYWN0aXZhdGUodGhpcy5pZCwgdGhpcyk7XG4gICAgdGhpcy5vbkNsZWFudXAgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5vbkFjdGl2YXRlTG9vcCA9IGFjdGl2YXRlO1xuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBjb21wbGV0ZSgpIHtcbiAgICB0aGlzLnN0b3AoKTtcblxuICAgIGlmICh0aGlzLm9uQ29tcGxldGUpIHtcbiAgICAgIHRoaXMub25Db21wbGV0ZSh0aGlzKTtcbiAgICB9XG4gIH1cblxuICAvKlxuICAgICMgRXh0ZW5kIHRoaXMgUHJvY2VzcyB3aXRoIG5ldyBwcm9wZXJ0aWVzXG4gICAgIyMgUmV0dXJucyBuZXcgaW5zdGFuY2Ugb2YgdGhpcyBQcm9jZXNzJ3MgYHByb3RvdHlwZWAgd2l0aCBleGlzdGluZyBhbmQgbmV3IHByb3BlcnRpZXNcblxuICAgIEBwYXJhbSBbb2JqZWN0XSAob3B0aW9uYWwpXG4gICAgQHJldHVybiBbUHJvY2Vzc11cbiAgKi9cbiAgaW5oZXJpdChwcm9wcykge1xuICAgIGNvbnN0IHsgaWQsIC4uLmluaGVyaXRlZFByb3BzIH0gPSB0aGlzO1xuICAgIHJldHVybiBuZXcgdGhpcy5jb25zdHJ1Y3Rvcih7IC4uLmluaGVyaXRlZFByb3BzLCAuLi5wcm9wcyB9KTtcbiAgfVxufSJdfQ==

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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9pbnB1dC9JbnB1dC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7OztBQUNBOzs7Ozs7Ozs7O0lBRXFCLEs7OztBQUNuQixpQkFBWSxhQUFaLEVBQTJCLElBQTNCLEVBQWlDO0FBQUE7O0FBQUEsaURBQy9CLGdCQUQrQjs7QUFFL0IsVUFBSyxLQUFMLEdBQWEsYUFBYjs7QUFFQSxRQUFJLG1CQUFPLElBQVAsQ0FBSixFQUFrQjtBQUNoQixZQUFLLFlBQUwsR0FBb0I7QUFBQSxlQUFNLE1BQUssTUFBTCxDQUFZLE1BQUssSUFBTCxFQUFaLENBQU47QUFBQSxPQUFwQjtBQUNEO0FBTjhCO0FBT2hDOzs7Ozs7OztrQkFPRCxNLG1CQUFPLEssRUFBTztBQUNaLFNBQUssS0FBTCxnQkFBa0IsS0FBSyxLQUF2QixFQUFpQyxLQUFqQztBQUNELEc7Ozs7O2tCQWpCa0IsSyIsImZpbGUiOiJJbnB1dC5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvbWF0dHBlcnJ5L1NpdGVzL3BvcG1vdGlvbiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBUYXNrIGZyb20gJy4uL3Rhc2svVGFzayc7XG5pbXBvcnQgeyBpc0Z1bmMgfSBmcm9tICcuLi9pbmMvdXRpbHMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbnB1dCBleHRlbmRzIFRhc2sge1xuICBjb25zdHJ1Y3Rvcihpbml0aWFsVmFsdWVzLCBwb2xsKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLnN0YXRlID0gaW5pdGlhbFZhbHVlcztcblxuICAgIGlmIChpc0Z1bmMocG9sbCkpIHtcbiAgICAgIHRoaXMub25GcmFtZVN0YXJ0ID0gKCkgPT4gdGhpcy5sYXRlc3QodGhpcy5wb2xsKCkpO1xuICAgIH1cbiAgfVxuXG4gIC8qXG4gICAgTWFudWFsbHkgYWRkIGxhdGVzdCB2YWx1ZXNcblxuICAgIEBwYXJhbSBbb2JqZWN0XVxuICAqL1xuICBsYXRlc3QocHJvcHMpIHtcbiAgICB0aGlzLnN0YXRlID0geyAuLi50aGlzLnN0YXRlLCAuLi5wcm9wcyB9O1xuICB9XG59XG4iXX0=

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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9pbmMvc3RhZ2dlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUE7Ozs7QUFDQTs7OztBQUVBLElBQU0sbUJBQW1CLEdBQXpCOztrQkFFZSxVQUFDLE1BQUQsRUFBUyxLQUFULEVBQW1CO0FBQ2hDLE1BQU0sa0JBQWtCLGtCQUFNLEtBQU4sQ0FBeEI7QUFDQSxNQUFNLFdBQVcsa0JBQWtCLEtBQWxCLEdBQTBCLFFBQVEsTUFBTSxRQUFOLElBQWtCLGdCQUExQixHQUE2QyxnQkFBeEY7QUFDQSxNQUFJLEtBQUssQ0FBVDtBQUNBLE1BQU0scUJBQXFCLE9BQU8sR0FBUCxDQUFXLFVBQUMsS0FBRCxFQUFXO0FBQy9DLFFBQU0sTUFBTSxFQUFFLFlBQUYsRUFBUyxNQUFULEVBQVo7QUFDQSxVQUFNLFFBQU47QUFDQSxXQUFPLEdBQVA7QUFDRCxHQUowQixDQUEzQjs7QUFNQSxTQUFPLHdCQUFTLGtCQUFULEVBQTZCLEtBQTdCLENBQVA7QUFDRCxDIiwiZmlsZSI6InN0YWdnZXIuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL21hdHRwZXJyeS9TaXRlcy9wb3Btb3Rpb24iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdGltZWxpbmUgZnJvbSAnLi90aW1lbGluZSc7XG5pbXBvcnQgeyBpc051bSB9IGZyb20gJy4vdXRpbHMnO1xuXG5jb25zdCBERUZBVUxUX0lOVEVSVkFMID0gMTAwO1xuXG5leHBvcnQgZGVmYXVsdCAodHdlZW5zLCBwcm9wcykgPT4ge1xuICBjb25zdCBwcm9wc0lzRHVyYXRpb24gPSBpc051bShwcm9wcyk7XG4gIGNvbnN0IGludGVydmFsID0gcHJvcHNJc0R1cmF0aW9uID8gcHJvcHMgOiBwcm9wcyA/IHByb3BzLmludGVydmFsIHx8IERFRkFVTFRfSU5URVJWQUwgOiBERUZBVUxUX0lOVEVSVkFMO1xuICBsZXQgYXQgPSAwO1xuICBjb25zdCB0aW1lbGluZURlZmluaXRpb24gPSB0d2VlbnMubWFwKCh0d2VlbikgPT4ge1xuICAgIGNvbnN0IGRlZiA9IHsgdHdlZW4sIGF0IH07XG4gICAgYXQgKz0gaW50ZXJ2YWw7XG4gICAgcmV0dXJuIGRlZjtcbiAgfSk7XG5cbiAgcmV0dXJuIHRpbWVsaW5lKHRpbWVsaW5lRGVmaW5pdGlvbiwgcHJvcHMpO1xufTsiXX0=

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
	//# sourceMappingURL=data:application/json;base64,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QVdEIiwiZmlsZSI6InRpbWVsaW5lLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9tYXR0cGVycnkvU2l0ZXMvcG9wbW90aW9uIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFR3ZWVuIGZyb20gJy4uL2FjdGlvbnMvVHdlZW4nO1xuaW1wb3J0IGVhc2luZyBmcm9tICcuLi9hY3Rpb25zL2Vhc2luZy9wcmVzZXQtZWFzaW5nJztcbmltcG9ydCB7IHJlbGF0aXZlVmFsdWUgfSBmcm9tICcuL2NhbGMnO1xuXG4vKlxuICBAcGFyYW0gW2FycmF5XVxuICAgIFNlcXVlbnRpYWwgYXJyYXkgb2YgdHdlZW5zLCBlYWNoIGl0ZW0gY2FuIGJlIGEgdHdlZW4gb3IgZGVmaW5pdGlvbiBvYmo6XG5cbiAgICBbXG4gICAgICBuZXcgVHdlZW4oKSxcbiAgICAgIHN0YWdnZXIoKSxcbiAgICAgIHRpbWVsaW5lKCksXG4gICAgICB7XG4gICAgICAgIHR3ZWVuOiBuZXcgVHdlZW4oKSxcbiAgICAgICAgYXQ6IDEwMCxcbiAgICAgICAgb2Zmc2V0OiBcIis9MTAwXCJcbiAgICAgIH1cbiAgICBdXG4qL1xuY29uc3QgYW5hbHl6ZSA9IChkZWZzKSA9PiB7XG4gIGNvbnN0IHRpbWVsaW5lID0gW107XG4gIGNvbnN0IG51bURlZnMgPSBkZWZzLmxlbmd0aDtcbiAgbGV0IGN1cnJlbnRQbGF5aGVhZCA9IDA7XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBudW1EZWZzOyBpKyspIHtcbiAgICBjb25zdCBkZWYgPSBkZWZzW2ldO1xuICAgIGNvbnN0IGRlZklzT2JqID0gZGVmLnR3ZWVuID8gdHJ1ZSA6IGZhbHNlO1xuICAgIGNvbnN0IHR3ZWVuID0gKGRlZklzT2JqKSA/IGRlZi50d2VlbiA6IGRlZjtcblxuICAgIGlmIChkZWZJc09iaikge1xuICAgICAgaWYgKGRlZi5vZmZzZXQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBjdXJyZW50UGxheWhlYWQgPSByZWxhdGl2ZVZhbHVlKGN1cnJlbnRQbGF5aGVhZCwgZGVmLm9mZnNldCk7XG4gICAgICB9IGVsc2UgaWYgKGRlZi5hdCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGN1cnJlbnRQbGF5aGVhZCA9IGRlZi5hdDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsZXQgZHVyYXRpb24gPSAwO1xuICAgIGZvciAobGV0IGtleSBpbiB0d2Vlbi52YWx1ZXMpIHtcbiAgICAgIGlmICh0d2Vlbi52YWx1ZXMuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICBjb25zdCB2YWx1ZSA9IHR3ZWVuLnZhbHVlc1trZXldO1xuICAgICAgICBkdXJhdGlvbiA9IE1hdGgubWF4KGR1cmF0aW9uLCB2YWx1ZS5kdXJhdGlvbik7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdGltZWxpbmUucHVzaCh7XG4gICAgICBmcm9tOiBjdXJyZW50UGxheWhlYWQsXG4gICAgICBkdXJhdGlvbjogZHVyYXRpb24sXG4gICAgICBmaXJlOiAodGltZSkgPT4gdHdlZW4uc2Vla1RpbWUodGltZSlcbiAgICB9KTtcblxuICAgIGN1cnJlbnRQbGF5aGVhZCArPSBkdXJhdGlvbjtcbiAgfVxuXG4gIHJldHVybiB7IHRvdGFsVGltZTogY3VycmVudFBsYXloZWFkLCB0aW1lbGluZSB9O1xufTtcblxuY29uc3Qgc2V0VHdlZW5zID0gKHsgdGltZWxpbmUsIHRpbWVsaW5lTGVuZ3RoLCB2YWx1ZXMsIGR1cmF0aW9uIH0pID0+IHtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aW1lbGluZUxlbmd0aDsgaSsrKSB7XG4gICAgY29uc3QgdHdlZW4gPSB0aW1lbGluZVtpXTtcbiAgICBjb25zdCB0d2VlblRpbWUgPSAodmFsdWVzLnAuY3VycmVudCAqIGR1cmF0aW9uKSAtIHR3ZWVuLmZyb207XG5cbiAgICBpZiAodHdlZW5UaW1lID49IC01MCAmJiB0d2VlblRpbWUgPD0gdHdlZW4uZHVyYXRpb24gKyA1MCkge1xuICAgICAgdHdlZW4uZmlyZSh0d2VlblRpbWUpO1xuICAgIH1cbiAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdGltZWxpbmUoZGVmLCBwcm9wcyA9IHt9KSB7XG4gIGNvbnN0IHsgdG90YWxUaW1lLCB0aW1lbGluZSB9ID0gYW5hbHl6ZShkZWYpO1xuXG4gIHJldHVybiBuZXcgVHdlZW4oe1xuICAgIGVhc2U6IGVhc2luZy5saW5lYXIsXG4gICAgLi4ucHJvcHMsXG4gICAgZHVyYXRpb246IHRvdGFsVGltZSxcbiAgICB2YWx1ZXM6IHtcbiAgICAgIHA6IHsgZnJvbTogMCwgdG86IDEgfVxuICAgIH0sXG4gICAgdGltZWxpbmU6IHRpbWVsaW5lLFxuICAgIHRpbWVsaW5lTGVuZ3RoOiB0aW1lbGluZS5sZW5ndGgsXG4gICAgb25SZW5kZXI6IHNldFR3ZWVuc1xuICB9KTtcbn0iXX0=

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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hZGFwdGVyL2FkYXB0ZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQVVBLElBQU0sU0FBUyxVQUFDLEdBQUQsRUFBTSxHQUFOO0FBQUEsU0FBYyxNQUFNLElBQUksR0FBSixLQUFZLEdBQWxCLEdBQXdCLEdBQXRDO0FBQUEsQ0FBZjs7a0JBRWUsVUFBQyxPQUFELEVBQWE7Ozs7OztBQU8xQixNQUFNLFVBQVUsVUFBQyxPQUFELEVBQVUsS0FBVixFQUFpQixJQUFqQixFQUEwQjtBQUN4QyxRQUFJLFFBQVEsUUFBWixFQUFzQjs7QUFFcEIsV0FBSyxJQUFJLEdBQVQsSUFBZ0IsS0FBaEIsRUFBdUI7QUFDckIsWUFBSSxNQUFNLGNBQU4sQ0FBcUIsR0FBckIsQ0FBSixFQUErQjtBQUM3QixjQUFNLFlBQVksT0FBTyxHQUFQLEVBQVksUUFBUSxRQUFwQixDQUFsQjs7QUFFQSxjQUFJLGNBQWMsR0FBbEIsRUFBdUI7QUFDckIsa0JBQU0sU0FBTixJQUFtQixNQUFNLEdBQU4sQ0FBbkI7QUFDQSxtQkFBTyxNQUFNLEdBQU4sQ0FBUDtBQUNEO0FBQ0Y7QUFDRjtBQUNGOztBQUVELFdBQU8sUUFBUSxNQUFSLENBQWUsT0FBZixFQUF3QixLQUF4QixFQUErQixJQUEvQixDQUFQO0FBQ0QsR0FoQkQ7O0FBa0JBLFVBQVEsR0FBUixHQUFjLFVBQUMsT0FBRCxFQUFVLEdBQVY7QUFBQSxXQUFrQixRQUFRLE1BQVIsQ0FBZSxPQUFmLEVBQXdCLE9BQU8sR0FBUCxFQUFZLFFBQVEsUUFBcEIsQ0FBeEIsQ0FBbEI7QUFBQSxHQUFkO0FBQ0EsVUFBUSxjQUFSLEdBQXlCLFVBQUMsR0FBRDtBQUFBLFdBQVMsUUFBUSxZQUFSLEdBQXVCLFFBQVEsWUFBUixDQUFxQixPQUFPLEdBQVAsRUFBWSxRQUFRLFFBQXBCLENBQXJCLENBQXZCLEdBQTZFLEtBQXRGO0FBQUEsR0FBekI7QUFDQSxVQUFRLGNBQVIsR0FBeUIsUUFBUSxjQUFqQzs7QUFFQSxTQUFPLE9BQVA7QUFDRCxDIiwiZmlsZSI6ImFkYXB0ZXIuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL21hdHRwZXJyeS9TaXRlcy9wb3Btb3Rpb24iLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICBPdmVycmlkZSBgZ2V0dGVyYCBhbmQgYHNldHRlcmAgdG8gcmVpbXBsZW1lbnQgdGhlIGludGVyZmFjZSBmb3IgbmV3IGVsZW1lbnQgdHlwZXMuXG5cbiAgU2V0IGAuc3RhdGVNYXBgIGFzIGFuIG9iamVjdCBrZXkvdmFsdWUgbWFwIHRvIHRyYW5zbGF0ZSBpbmNvbWluZyBrZXlzIHRvXG4gIEFQSS1zcGVjaWZpYyBrZXlzLiBGb3IgaW5zdGFuY2UsIHsgeDogJ3RyYW5zbGF0ZVgnIH0uIFxuXG4gIFNldCBgLnZhbHVlVHlwZU1hcGAgYXMgYW4gb2JqZWN0IGtleS92YWx1ZSBtYXAgdG8gcmV0dXJuIGEgdmFsdWUgdHlwZSB3aXRoXG4gIGBnZXRWYWx1ZVR5cGUoa2V5KWAgKGtleSB3aWxsIGJlIG1hcHBlZCBhY2NvcmRpbmcgdG8gYHN0YXRlTWFwYClcbiovXG5cbmNvbnN0IG1hcEtleSA9IChrZXksIG1hcCkgPT4gbWFwID8gbWFwW2tleV0gfHwga2V5IDoga2V5O1xuXG5leHBvcnQgZGVmYXVsdCAob3B0aW9ucykgPT4ge1xuICAvKlxuICAgIEFkYXB0ZXIgaXMgc2V0dGVyIGZ1bmN0aW9uXG5cbiAgICBAcGFyYW0gW29iamVjdF06IE9iamVjdCB0byBzZXQgcHJvcGVydGllcyBvblxuICAgIEBwYXJhbSBbb2JqZWN0XTogS2V5L3ZhbHVlIHByb3BlcnRpZXMgdG8gc2V0XG4gICovXG4gIGNvbnN0IGFkYXB0ZXIgPSAoZWxlbWVudCwgcHJvcHMsIGRhdGEpID0+IHtcbiAgICBpZiAob3B0aW9ucy5zdGF0ZU1hcCkge1xuICAgICAgLy8gVHJhbnNsYXRlIHByb3BzXG4gICAgICBmb3IgKGxldCBrZXkgaW4gcHJvcHMpIHtcbiAgICAgICAgaWYgKHByb3BzLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICBjb25zdCBtYXBwZWRLZXkgPSBtYXBLZXkoa2V5LCBvcHRpb25zLnN0YXRlTWFwKTtcbiAgICAgICAgICBcbiAgICAgICAgICBpZiAobWFwcGVkS2V5ICE9PSBrZXkpIHtcbiAgICAgICAgICAgIHByb3BzW21hcHBlZEtleV0gPSBwcm9wc1trZXldO1xuICAgICAgICAgICAgZGVsZXRlIHByb3BzW2tleV07XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG9wdGlvbnMuc2V0dGVyKGVsZW1lbnQsIHByb3BzLCBkYXRhKTtcbiAgfTtcblxuICBhZGFwdGVyLmdldCA9IChlbGVtZW50LCBrZXkpID0+IG9wdGlvbnMuZ2V0dGVyKGVsZW1lbnQsIG1hcEtleShrZXksIG9wdGlvbnMuc3RhdGVNYXApKTtcbiAgYWRhcHRlci5jaGVja1ZhbHVlVHlwZSA9IChrZXkpID0+IG9wdGlvbnMudmFsdWVUeXBlTWFwID8gb3B0aW9ucy52YWx1ZVR5cGVNYXBbbWFwS2V5KGtleSwgb3B0aW9ucy5zdGF0ZU1hcCldIDogZmFsc2U7XG4gIGFkYXB0ZXIuZ2V0RWxlbWVudERhdGEgPSBvcHRpb25zLmdldEVsZW1lbnREYXRhO1xuXG4gIHJldHVybiBhZGFwdGVyO1xufTsiXX0=

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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hZGFwdGVyL2F0dHItYWRhcHRlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBOzs7Ozs7QUFFTyxJQUFNLDBCQUFTLFVBQUMsT0FBRCxFQUFVLEdBQVY7QUFBQSxTQUFrQixRQUFRLFlBQVIsQ0FBcUIsR0FBckIsQ0FBbEI7QUFBQSxDQUFmO0FBQ0EsSUFBTSwwQkFBUyxVQUFDLE9BQUQsRUFBVSxLQUFWLEVBQW9CO0FBQ3hDLE9BQUssSUFBSSxHQUFULElBQWdCLEtBQWhCLEVBQXVCO0FBQ3JCLFFBQUksTUFBTSxjQUFOLENBQXFCLEdBQXJCLENBQUosRUFBK0I7QUFDN0IsY0FBUSxZQUFSLENBQXFCLEdBQXJCLEVBQTBCLE1BQU0sR0FBTixDQUExQjtBQUNEO0FBQ0Y7QUFDRixDQU5NOztrQkFRUSx1QkFBYyxFQUFFLGNBQUYsRUFBVSxjQUFWLEVBQWQsQyIsImZpbGUiOiJhdHRyLWFkYXB0ZXIuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL21hdHRwZXJyeS9TaXRlcy9wb3Btb3Rpb24iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY3JlYXRlQWRhcHRlciBmcm9tICcuL2FkYXB0ZXInO1xuXG5leHBvcnQgY29uc3QgZ2V0dGVyID0gKGVsZW1lbnQsIGtleSkgPT4gZWxlbWVudC5nZXRBdHRyaWJ1dGUoa2V5KTtcbmV4cG9ydCBjb25zdCBzZXR0ZXIgPSAoZWxlbWVudCwgcHJvcHMpID0+IHtcbiAgZm9yIChsZXQga2V5IGluIHByb3BzKSB7XG4gICAgaWYgKHByb3BzLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKGtleSwgcHJvcHNba2V5XSk7XG4gICAgfVxuICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVBZGFwdGVyKHsgZ2V0dGVyLCBzZXR0ZXIgfSk7XG4iXX0=

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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hZGFwdGVyL2Nzcy1hZGFwdGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7OztrQkFFZSx1QkFBYztBQUMzQixVQUFRLFVBQUMsT0FBRCxFQUFVLEdBQVYsRUFBa0I7QUFDeEIsV0FBUSxDQUFDLHlCQUFlLEdBQWYsQ0FBRixHQUNMLE9BQU8sZ0JBQVAsQ0FBd0IsT0FBeEIsRUFBaUMsSUFBakMsRUFBdUMsd0JBQVMsR0FBVCxDQUF2QyxDQURLLEdBRUwsdUJBQWEsR0FBYixFQUFrQixZQUFsQixDQUErQixPQUEvQixJQUEwQyxDQUY1QztBQUdELEdBTDBCO0FBTTNCLFVBQVEsVUFBQyxPQUFELEVBQVUsS0FBVjtBQUFBLFdBQW9CLFFBQVEsS0FBUixDQUFjLE9BQWQsSUFBeUIscUJBQW9CLEtBQXBCLENBQTdDO0FBQUEsR0FObUI7QUFPM0Isc0NBUDJCO0FBUTNCO0FBUjJCLENBQWQsQyIsImZpbGUiOiJjc3MtYWRhcHRlci5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvbWF0dHBlcnJ5L1NpdGVzL3BvcG1vdGlvbiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdGF0ZU1hcCBmcm9tICcuL2Nzcy9zdGF0ZS1tYXAnO1xuaW1wb3J0IHZhbHVlVHlwZU1hcCBmcm9tICcuL2Nzcy92YWx1ZS10eXBlLW1hcCc7XG5pbXBvcnQgYnVpbGRQcm9wZXJ0eVN0cmluZyBmcm9tICcuL2Nzcy9idWlsZCc7XG5pbXBvcnQgcHJlZml4ZXIgZnJvbSAnLi9jc3MvcHJlZml4ZXInO1xuaW1wb3J0IHRyYW5zZm9ybVByb3BzIGZyb20gJy4vY3NzL3RyYW5zZm9ybS1wcm9wcyc7XG5pbXBvcnQgY3JlYXRlQWRhcHRlciBmcm9tICcuL2FkYXB0ZXInO1xuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVBZGFwdGVyKHtcbiAgZ2V0dGVyOiAoZWxlbWVudCwga2V5KSA9PiB7XG4gICAgcmV0dXJuICghdHJhbnNmb3JtUHJvcHNba2V5XSkgP1xuICAgICAgd2luZG93LmdldENvbXB1dGVkU3R5bGUoZWxlbWVudCwgbnVsbClbcHJlZml4ZXIoa2V5KV0gOlxuICAgICAgdmFsdWVUeXBlTWFwW2tleV0uZGVmYXVsdFByb3BzLmN1cnJlbnQgfHwgMDtcbiAgfSxcbiAgc2V0dGVyOiAoZWxlbWVudCwgcHJvcHMpID0+IGVsZW1lbnQuc3R5bGUuY3NzVGV4dCArPSBidWlsZFByb3BlcnR5U3RyaW5nKHByb3BzKSxcbiAgdmFsdWVUeXBlTWFwLFxuICBzdGF0ZU1hcFxufSk7XG5cbiJdfQ==

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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hZGFwdGVyL29iamVjdC1hZGFwdGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQTs7Ozs7O2tCQUVlLHVCQUFjO0FBQzNCLFVBQVEsVUFBQyxNQUFELEVBQVMsR0FBVDtBQUFBLFdBQWlCLE9BQU8sR0FBUCxDQUFqQjtBQUFBLEdBRG1CO0FBRTNCLFVBQVEsVUFBQyxNQUFELEVBQVMsS0FBVCxFQUFtQjtBQUN6QixTQUFLLElBQUksR0FBVCxJQUFnQixLQUFoQixFQUF1QjtBQUNyQixVQUFJLE1BQU0sY0FBTixDQUFxQixHQUFyQixDQUFKLEVBQStCO0FBQzdCLGVBQU8sR0FBUCxJQUFjLE1BQU0sR0FBTixDQUFkO0FBQ0Q7QUFDRjtBQUNGO0FBUjBCLENBQWQsQyIsImZpbGUiOiJvYmplY3QtYWRhcHRlci5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvbWF0dHBlcnJ5L1NpdGVzL3BvcG1vdGlvbiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjcmVhdGVBZGFwdGVyIGZyb20gJy4vYWRhcHRlcic7XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUFkYXB0ZXIoe1xuICBnZXR0ZXI6IChvYmplY3QsIGtleSkgPT4gb2JqZWN0W2tleV0sXG4gIHNldHRlcjogKG9iamVjdCwgcHJvcHMpID0+IHtcbiAgICBmb3IgKGxldCBrZXkgaW4gcHJvcHMpIHtcbiAgICAgIGlmIChwcm9wcy5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgIG9iamVjdFtrZXldID0gcHJvcHNba2V5XTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn0pOyJdfQ==

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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hZGFwdGVyL3N2Zy1hZGFwdGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7QUFDQTs7Ozs7O0FBRU8sSUFBTSwwQkFBUyxVQUFDLE9BQUQsRUFBVSxHQUFWO0FBQUEsU0FBbUIsQ0FBQyx5QkFBZSxHQUFmLENBQUYsR0FBeUIseUJBQVcsT0FBWCxFQUFvQixHQUFwQixDQUF6QixHQUFxRCx1QkFBYSxHQUFiLEtBQXFCLHVCQUFhLEdBQWIsRUFBa0IsWUFBeEMsR0FBd0QsdUJBQWEsR0FBYixFQUFrQixZQUFsQixDQUErQixPQUF2RixHQUFpRyxDQUF2SztBQUFBLENBQWY7QUFDQSxJQUFNLDBCQUFTLFVBQUMsT0FBRCxFQUFVLEtBQVYsRUFBaUIsSUFBakI7QUFBQSxTQUEwQix5QkFBVyxPQUFYLEVBQW9CLHFCQUFNLEtBQU4sRUFBYSxJQUFiLENBQXBCLENBQTFCO0FBQUEsQ0FBZjtBQUNBLElBQU0sMENBQWlCLFVBQUMsT0FBRCxFQUFhO0FBQ3pDLE1BQU0sT0FBTyxRQUFRLE9BQVIsRUFBYjtBQUNBLFNBQU87QUFDTCxPQUFHLEtBQUssQ0FESDtBQUVMLE9BQUcsS0FBSyxDQUZIO0FBR0wsV0FBTyxLQUFLLEtBSFA7QUFJTCxZQUFRLEtBQUs7QUFKUixHQUFQO0FBTUQsQ0FSTTs7a0JBVVEsdUJBQWMsRUFBRSxjQUFGLEVBQVUsY0FBVixFQUFrQiw0QkFBbEIsRUFBNEIsb0NBQTVCLEVBQTBDLDhCQUExQyxFQUFkLEMiLCJmaWxlIjoic3ZnLWFkYXB0ZXIuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL21hdHRwZXJyeS9TaXRlcy9wb3Btb3Rpb24iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3RhdGVNYXAgZnJvbSAnLi9jc3Mvc3RhdGUtbWFwJztcbmltcG9ydCB2YWx1ZVR5cGVNYXAgZnJvbSAnLi9zdmcvdmFsdWUtdHlwZS1tYXAnO1xuaW1wb3J0IHRyYW5zZm9ybVByb3BzIGZyb20gJy4vY3NzL3RyYW5zZm9ybS1wcm9wcyc7XG5pbXBvcnQgYnVpbGQgZnJvbSAnLi9zdmcvYnVpbGQnO1xuaW1wb3J0IHsgZ2V0dGVyIGFzIGF0dHJHZXR0ZXIsIHNldHRlciBhcyBhdHRyU2V0dGVyIH0gZnJvbSAnLi9hdHRyLWFkYXB0ZXInO1xuaW1wb3J0IGNyZWF0ZUFkYXB0ZXIgZnJvbSAnLi9hZGFwdGVyJztcblxuZXhwb3J0IGNvbnN0IGdldHRlciA9IChlbGVtZW50LCBrZXkpID0+ICghdHJhbnNmb3JtUHJvcHNba2V5XSkgPyBhdHRyR2V0dGVyKGVsZW1lbnQsIGtleSkgOiAodmFsdWVUeXBlTWFwW2tleV0gJiYgdmFsdWVUeXBlTWFwW2tleV0uZGVmYXVsdFByb3BzKSA/IHZhbHVlVHlwZU1hcFtrZXldLmRlZmF1bHRQcm9wcy5jdXJyZW50IDogMDtcbmV4cG9ydCBjb25zdCBzZXR0ZXIgPSAoZWxlbWVudCwgcHJvcHMsIGRhdGEpID0+IGF0dHJTZXR0ZXIoZWxlbWVudCwgYnVpbGQocHJvcHMsIGRhdGEpKTtcbmV4cG9ydCBjb25zdCBnZXRFbGVtZW50RGF0YSA9IChlbGVtZW50KSA9PiB7XG4gIGNvbnN0IGJCb3ggPSBlbGVtZW50LmdldEJCb3goKTtcbiAgcmV0dXJuIHtcbiAgICB4OiBiQm94LngsXG4gICAgeTogYkJveC55LFxuICAgIHdpZHRoOiBiQm94LndpZHRoLCBcbiAgICBoZWlnaHQ6IGJCb3guaGVpZ2h0XG4gIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVBZGFwdGVyKHsgZ2V0dGVyLCBzZXR0ZXIsIHN0YXRlTWFwLCB2YWx1ZVR5cGVNYXAsIGdldEVsZW1lbnREYXRhIH0pO1xuIl19

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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hZGFwdGVyL3N2Zy1wYXRoLWFkYXB0ZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOztBQUNBOzs7Ozs7a0JBRWUsdUJBQWM7QUFDM0IsNEJBRDJCO0FBRTNCLFVBQVEsVUFBQyxPQUFELEVBQVUsS0FBVixFQUFpQixJQUFqQixFQUEwQjtBQUNoQyxRQUFNLGFBQWEsT0FBTyxLQUFLLFVBQVosR0FBeUIsQ0FBNUM7QUFDQSxXQUFPLHdCQUFPLE9BQVAsRUFBZ0IscUJBQU0sS0FBTixFQUFhLFVBQWIsQ0FBaEIsRUFBMEMsSUFBMUMsQ0FBUDtBQUNELEdBTDBCO0FBTTNCLDhCQU4yQjtBQU8zQixrQkFBZ0IsVUFBQyxPQUFEO0FBQUEsc0JBQWdCLFlBQVksUUFBUSxjQUFSLEVBQTVCLElBQXlELGdDQUFlLE9BQWYsQ0FBekQ7QUFBQTtBQVBXLENBQWQsQyIsImZpbGUiOiJzdmctcGF0aC1hZGFwdGVyLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9tYXR0cGVycnkvU2l0ZXMvcG9wbW90aW9uIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGJ1aWxkIGZyb20gJy4vc3ZnLXBhdGgvYnVpbGQnO1xuaW1wb3J0IHN0YXRlTWFwIGZyb20gJy4vY3NzL3N0YXRlLW1hcCc7XG5pbXBvcnQgeyBnZXR0ZXIsIHNldHRlciwgZ2V0RWxlbWVudERhdGEgfSBmcm9tICcuL3N2Zy1hZGFwdGVyJztcbmltcG9ydCBjcmVhdGVBZGFwdGVyIGZyb20gJy4vYWRhcHRlcic7XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUFkYXB0ZXIoe1xuICBnZXR0ZXIsXG4gIHNldHRlcjogKGVsZW1lbnQsIHByb3BzLCBvcHRzKSA9PiB7XG4gICAgY29uc3QgcGF0aExlbmd0aCA9IG9wdHMgPyBvcHRzLnBhdGhMZW5ndGggOiAwO1xuICAgIHJldHVybiBzZXR0ZXIoZWxlbWVudCwgYnVpbGQocHJvcHMsIHBhdGhMZW5ndGgpLCBvcHRzKTtcbiAgfSxcbiAgc3RhdGVNYXAsXG4gIGdldEVsZW1lbnREYXRhOiAoZWxlbWVudCkgPT4gKHsgcGF0aExlbmd0aDogZWxlbWVudC5nZXRUb3RhbExlbmd0aCgpLCAuLi5nZXRFbGVtZW50RGF0YShlbGVtZW50KSB9KVxufSk7XG4iXX0=

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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hY3Rpb25zL2Vhc2luZy9wcmVzZXQtZWFzaW5nLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUEwQkE7Ozs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBR0EsSUFBTSx3QkFBd0IsS0FBOUI7QUFDQSxJQUFNLHVCQUF1QixDQUE3Qjs7Ozs7Ozs7QUFRQSxJQUFNLGFBQWE7QUFDakIsUUFBTSxVQUFDLFFBQUQ7QUFBQSxRQUFXLFFBQVgseURBQXNCLG9CQUF0QjtBQUFBLG9CQUErQyxRQUEvQyxFQUEyRCxRQUEzRDtBQUFBLEdBRFc7QUFFakIsUUFBTTtBQUFBLFdBQVksSUFBSSxLQUFLLEdBQUwsQ0FBUyxLQUFLLElBQUwsQ0FBVSxRQUFWLENBQVQsQ0FBaEI7QUFBQSxHQUZXO0FBR2pCLFFBQU0sVUFBQyxRQUFEO0FBQUEsUUFBVyxRQUFYLHlEQUFzQixxQkFBdEI7QUFBQSxXQUFpRCxXQUFXLFFBQVosSUFBeUIsQ0FBQyxXQUFXLENBQVosSUFBaUIsUUFBakIsR0FBNEIsUUFBckQsQ0FBaEQ7QUFBQTtBQUhXLENBQW5COzs7QUFPQSxJQUFNLHNCQUFzQixVQUFDLFFBQUQ7QUFBQSxTQUFjLFVBQUMsUUFBRDtBQUFBLFdBQWMsV0FBVyxJQUFYLENBQWdCLFFBQWhCLEVBQTBCLFFBQTFCLENBQWQ7QUFBQSxHQUFkO0FBQUEsQ0FBNUI7O0FBRUEsQ0FBQyxPQUFELEVBQVUsT0FBVixFQUFtQixPQUFuQixFQUE0QixPQUE1QixDQUFvQyxVQUFDLFVBQUQsRUFBYSxDQUFiO0FBQUEsU0FBbUIsV0FBVyxVQUFYLElBQXlCLG9CQUFvQixJQUFJLENBQXhCLENBQTVDO0FBQUEsQ0FBcEM7OztBQUdBLEtBQUssSUFBSSxHQUFULElBQWdCLFVBQWhCLEVBQTRCO0FBQzFCLE1BQUksV0FBVyxjQUFYLENBQTBCLEdBQTFCLENBQUosRUFBb0M7QUFDbEMsUUFBTSxpQkFBaUIsNEJBQXFCLFdBQVcsR0FBWCxDQUFyQixDQUF2QjtBQUNBLGVBQWMsR0FBZCxXQUF5QixlQUFlLEVBQXhDO0FBQ0EsZUFBYyxHQUFkLFlBQTBCLGVBQWUsR0FBekM7QUFDQSxlQUFjLEdBQWQsY0FBNEIsZUFBZSxLQUEzQztBQUNEO0FBQ0Y7O0FBRUQsV0FBVyxNQUFYLEdBQW9CO0FBQUEsU0FBWSxRQUFaO0FBQUEsQ0FBcEI7QUFDQSxXQUFXLFVBQVgsR0FBd0IsVUFBQyxRQUFEO0FBQUEsTUFBVyxRQUFYLHlEQUFzQixxQkFBdEI7QUFBQSxTQUNyQixDQUFDLFlBQVUsQ0FBWCxJQUFnQixDQUFqQixHQUFzQixNQUFNLFdBQVcsTUFBWCxDQUFrQixRQUFsQixFQUE0QixRQUE1QixDQUE1QixHQUFxRSxPQUFPLElBQUksS0FBSyxHQUFMLENBQVMsQ0FBVCxFQUFZLENBQUMsRUFBRCxJQUFPLFdBQVcsQ0FBbEIsQ0FBWixDQUFYLENBRC9DO0FBQUEsQ0FBeEI7O0FBR0EsV0FBVyxnQkFBWDtBQUNBLFdBQVcsV0FBWDtBQUNBLFdBQVcsTUFBWCxHQUFvQixVQUFDLE1BQUQ7QUFBQSxvQ0FBWSxJQUFaO0FBQVksUUFBWjtBQUFBOztBQUFBLFNBQXFCLFVBQUMsUUFBRDtBQUFBLFdBQWMseUJBQU8sUUFBUCxTQUFvQixJQUFwQixFQUFkO0FBQUEsR0FBckI7QUFBQSxDQUFwQjs7a0JBRWUsVSIsImZpbGUiOiJwcmVzZXQtZWFzaW5nLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9tYXR0cGVycnkvU2l0ZXMvcG9wbW90aW9uIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAgRWFzaW5nIGZ1bmN0aW9uc1xuICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIFxuICBHZW5lcmF0ZXMgYW5kIHByb3ZpZGVzIGVhc2luZyBmdW5jdGlvbnMgYmFzZWQgb24gYmFzZUZ1bmN0aW9uIGRlZmluaXRpb25zXG4gIFxuICBBIGNhbGwgdG8gZWFzaW5nRnVuY3Rpb24uZ2V0KCdmdW5jdGlvbk5hbWUnKSByZXR1cm5zIGEgZnVuY3Rpb24gdGhhdCBjYW4gYmUgcGFzc2VkOlxuICAgIEBwYXJhbSBbbnVtYmVyXTogUHJvZ3Jlc3MgMC0xXG4gICAgQHBhcmFtIFtudW1iZXJdIChvcHRpb25hbCk6IEFtcCBtb2RpZmllciwgb25seSBhY2NlcHRlZCBpbiBzb21lIGVhc2luZyBmdW5jdGlvbnNcbiAgICAgICAgICAgICAgICAgIGFuZCBpcyB1c2VkIHRvIGFkanVzdCBvdmVyYWxsIHN0cmVuZ3RoXG4gICAgQHJldHVybiBbbnVtYmVyXTogRWFzZWQgcHJvZ3Jlc3NcbiAgICBcbiAgV2UgY2FuIGdlbmVyYXRlIG5ldyBmdW5jdGlvbnMgYnkgc2VuZGluZyBhbiBlYXNpbmcgZnVuY3Rpb24gdGhyb3VnaCBlYXNpbmdGdW5jdGlvbi5leHRlbmQobmFtZSwgbWV0aG9kKS5cbiAgV2hpY2ggd2lsbCBtYWtlIG5hbWVJbiwgbmFtZU91dCBhbmQgbmFtZUluT3V0IGZ1bmN0aW9ucyBhdmFpbGFibGUgdG8gdXNlLlxuICAgIFxuICBFYXNpbmcgZnVuY3Rpb25zIGZyb20gUm9iZXJ0IFBlbm5lclxuICBodHRwOi8vd3d3LnJvYmVydHBlbm5lci5jb20vZWFzaW5nL1xuICAgIFxuICBCZXppZXIgY3VydmUgaW50ZXJwcmV0b3IgY3JlYXRlZCBmcm9tIEdhw6t0YW4gUmVuYXVkZWF1J3Mgb3JpZ2luYWwgQmV6aWVyRWFzaW5nICBcbiAgaHR0cHM6Ly9naXRodWIuY29tL2dyZS9iZXppZXItZWFzaW5nL2Jsb2IvbWFzdGVyL2luZGV4LmpzICBcbiAgaHR0cHM6Ly9naXRodWIuY29tL2dyZS9iZXppZXItZWFzaW5nL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcblxuICBBbnRpY2lwYXRlIGVhc2luZyBjcmVhdGVkIGJ5IEVsbGlvdCBHaW5vXG4gIGh0dHBzOi8vdHdpdHRlci5jb20vRWxsaW90R2Vub1xuKi9cbi8vIEltcG9ydHNcbmltcG9ydCBjcmVhdGVFYXNpbmdGdW5jdGlvbiBmcm9tICcuL2NyZWF0ZS1lYXNpbmcnO1xuaW1wb3J0IGN1YmljQmV6aWVyIGZyb20gJy4vY3JlYXRlLWJlemllcic7XG5cbi8vIFZhbHVlc1xuY29uc3QgREVGQVVMVF9CQUNLX1NUUkVOR1RIID0gMS41MjU7XG5jb25zdCBERUZBVUxUX1BPV19TVFJFTkdUSCA9IDI7XG5cbi8qXG4gIEVhY2ggb2YgdGhlc2UgYmFzZSBmdW5jdGlvbnMgaXMgYW4gZWFzZUluXG4gIFxuICBPbiBpbml0LCB3ZSB1c2UgLm1pcnJvciBhbmQgLnJldmVyc2UgdG8gZ2VuZXJhdGUgZWFzZUluT3V0IGFuZFxuICBlYXNlT3V0IGZ1bmN0aW9ucyByZXNwZWN0aXZlbHkuXG4qL1xuY29uc3QgYmFzZUVhc2luZyA9IHtcbiAgZWFzZTogKHByb2dyZXNzLCBzdHJlbmd0aCA9IERFRkFVTFRfUE9XX1NUUkVOR1RIKSA9PiBwcm9ncmVzcyAqKiBzdHJlbmd0aCxcbiAgY2lyYzogcHJvZ3Jlc3MgPT4gMSAtIE1hdGguc2luKE1hdGguYWNvcyhwcm9ncmVzcykpLFxuICBiYWNrOiAocHJvZ3Jlc3MsIHN0cmVuZ3RoID0gREVGQVVMVF9CQUNLX1NUUkVOR1RIKSA9PiAocHJvZ3Jlc3MgKiBwcm9ncmVzcykgKiAoKHN0cmVuZ3RoICsgMSkgKiBwcm9ncmVzcyAtIHN0cmVuZ3RoKVxufTtcblxuLy8gVXRpbGl0eSBmdW5jdGlvbnNcbmNvbnN0IGdlbmVyYXRlUG93ZXJFYXNpbmcgPSAoc3RyZW5ndGgpID0+IChwcm9ncmVzcykgPT4gYmFzZUVhc2luZy5lYXNlKHByb2dyZXNzLCBzdHJlbmd0aCk7XG5cblsnY3ViaWMnLCAncXVhcnQnLCAncXVpbnQnXS5mb3JFYWNoKChlYXNpbmdOYW1lLCBpKSA9PiBiYXNlRWFzaW5nW2Vhc2luZ05hbWVdID0gZ2VuZXJhdGVQb3dlckVhc2luZyhpICsgMykpO1xuXG4vLyBHZW5lcmF0ZSBpbi9vdXQvaW5PdXQgdmFyaWF0aW9uc1xuZm9yIChsZXQga2V5IGluIGJhc2VFYXNpbmcpIHtcbiAgaWYgKGJhc2VFYXNpbmcuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgIGNvbnN0IGVhc2luZ0Z1bmN0aW9uID0gY3JlYXRlRWFzaW5nRnVuY3Rpb24oYmFzZUVhc2luZ1trZXldKTtcbiAgICBiYXNlRWFzaW5nW2Ake2tleX1JbmBdID0gZWFzaW5nRnVuY3Rpb24uaW47XG4gICAgYmFzZUVhc2luZ1tgJHtrZXl9T3V0YF0gPSBlYXNpbmdGdW5jdGlvbi5vdXQ7XG4gICAgYmFzZUVhc2luZ1tgJHtrZXl9SW5PdXRgXSA9IGVhc2luZ0Z1bmN0aW9uLmluT3V0O1xuICB9XG59XG5cbmJhc2VFYXNpbmcubGluZWFyID0gcHJvZ3Jlc3MgPT4gcHJvZ3Jlc3M7XG5iYXNlRWFzaW5nLmFudGljaXBhdGUgPSAocHJvZ3Jlc3MsIHN0cmVuZ3RoID0gREVGQVVMVF9CQUNLX1NUUkVOR1RIKSA9PlxuICAoKHByb2dyZXNzKj0yKSA8IDEpID8gMC41ICogYmFzZUVhc2luZy5iYWNrSW4ocHJvZ3Jlc3MsIHN0cmVuZ3RoKSA6ICAwLjUgKiAoMiAtIE1hdGgucG93KDIsIC0xMCAqIChwcm9ncmVzcyAtIDEpKSk7XG5cbmJhc2VFYXNpbmcuY3JlYXRlVmFyaWF0aW9ucyA9IGNyZWF0ZUVhc2luZ0Z1bmN0aW9uO1xuYmFzZUVhc2luZy5jdWJpY0JlemllciA9IGN1YmljQmV6aWVyO1xuYmFzZUVhc2luZy5tb2RpZnkgPSAoZWFzaW5nLCAuLi5hcmdzKSA9PiAocHJvZ3Jlc3MpID0+IGVhc2luZyhwcm9ncmVzcywgLi4uYXJncyk7XG5cbmV4cG9ydCBkZWZhdWx0IGJhc2VFYXNpbmc7Il19

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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hY3Rpb25zL2Zsb3cvZ2V0LWZsb3cuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBOzs7Ozs7QUFFQSxJQUFNLFlBQVksV0FBbEI7O2tCQUVlLFVBQUMsT0FBRCxFQUFVLE9BQVYsRUFBc0I7QUFDbkMsTUFBSSxRQUFRLFNBQVIsQ0FBSixFQUF3QjtBQUN0QixXQUFPLFFBQVEsU0FBUixDQUFQO0FBQ0QsR0FGRCxNQUVPO0FBQ0wsUUFBTSxPQUFPLG1CQUFTLEVBQUUsZ0JBQUYsRUFBVyxnQkFBWCxFQUFULENBQWI7OztBQUdBLFdBQU8sY0FBUCxDQUFzQixPQUF0QixFQUErQixTQUEvQixFQUEwQztBQUN4QyxrQkFBWSxLQUQ0QjtBQUV4QyxnQkFBVSxLQUY4QjtBQUd4QyxhQUFPO0FBSGlDLEtBQTFDOztBQU1BLFdBQU8sSUFBUDtBQUNEO0FBQ0YsQyIsImZpbGUiOiJnZXQtZmxvdy5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvbWF0dHBlcnJ5L1NpdGVzL3BvcG1vdGlvbiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBGbG93IGZyb20gJy4uL0Zsb3cnO1xuXG5jb25zdCBTQVZFX1BST1AgPSAnX19wbV9mbG93JztcblxuZXhwb3J0IGRlZmF1bHQgKGVsZW1lbnQsIGFkYXB0ZXIpID0+IHtcbiAgaWYgKGVsZW1lbnRbU0FWRV9QUk9QXSkge1xuICAgIHJldHVybiBlbGVtZW50W1NBVkVfUFJPUF07XG4gIH0gZWxzZSB7XG4gICAgY29uc3QgZmxvdyA9IG5ldyBGbG93KHsgZWxlbWVudCwgYWRhcHRlciB9KTtcblxuICAgIC8vIEJpbmQgYWRhcHRlciB0byBlbGVtZW50XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGVsZW1lbnQsIFNBVkVfUFJPUCwge1xuICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICB3cml0YWJsZTogZmFsc2UsXG4gICAgICB2YWx1ZTogZmxvd1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIGZsb3c7XG4gIH1cbn07XG5cblxuIl19

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
	//# sourceMappingURL=data:application/json;base64,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QixLQUFLLEdBQUwsQ0FBUyxXQUFXLE1BQXBCLEVBQTRCLENBQTVCLENBQXpCOztBQUVBLFNBQU8sS0FBSyxLQUFMLENBQVcsbUJBQW1CLE9BQTlCLElBQXlDLE9BQWhEO0FBQ0QsQ0FOTSIsImZpbGUiOiJjYWxjLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9tYXR0cGVycnkvU2l0ZXMvcG9wbW90aW9uIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgaGFzUHJvcGVydHksXG4gIGlzTnVtLFxuICBmaW5kVmFsdWVBbmRVbml0LFxuICB0b0RlY2ltYWxcbn0gZnJvbSAnLi91dGlscyc7XG5cbmNvbnN0IFpFUk9fUE9JTlQgPSB7XG4gIHg6IDAsXG4gIHk6IDAsXG4gIHo6IDBcbn07XG5cbmNvbnN0IGRpc3RhbmNlMUQgPSAoYSwgYikgPT4gTWF0aC5hYnMoYSAtIGIpO1xuXG4vKlxuICBBbmdsZSBiZXR3ZWVuIHBvaW50c1xuICBcbiAgVHJhbnNsYXRlcyB0aGUgaHlwb3RoZXRpY2FsIGxpbmUgc28gdGhhdCB0aGUgJ2Zyb20nIGNvb3JkaW5hdGVzXG4gIGFyZSBhdCAwLDBcbiAgXG4gIEBwYXJhbSBbb2JqZWN0XTogWCBhbmQgWSBjb29yZGluYXRlcyBvZiBmcm9tIHBvaW50XG4gIEBwYXJhbSBbb2JqZWN0XTogWCBhbmQgWSBjb3JkaW5hdGVzIG9mIHRvIHBvaW50XG4gIEByZXR1cm4gW3JhZGlhbl06IEFuZ2xlIGJldHdlZW4gdGhlIHR3byBwb2ludHMgaW4gcmFkaWFuc1xuKi9cbmV4cG9ydCBjb25zdCBhbmdsZSA9IChhLCBiID0gWkVST19QT0lOVCkgPT4gcmFkaWFuc1RvRGVncmVlcyhNYXRoLmF0YW4yKGEueCAtIGIueCwgYS55IC0gYi55KSk7XG5cbi8qXG4gIENvbnZlcnQgZGVncmVlcyB0byByYWRpYW5zXG4gIFxuICBAcGFyYW0gW251bWJlcl06IFZhbHVlIGluIGRlZ3JlZXNcbiAgQHJldHVybiBbbnVtYmVyXTogVmFsdWUgaW4gcmFkaWFuc1xuKi9cbmV4cG9ydCBjb25zdCBkZWdyZWVzVG9SYWRpYW5zID0gKGRlZ3JlZXMpID0+IGRlZ3JlZXMgKiBNYXRoLlBJIC8gMTgwO1xuXG4vKlxuICBEaWxhdGVcbiAgXG4gIENoYW5nZSB0aGUgcHJvZ3Jlc3Npb24gYmV0d2VlbiBhIGFuZCBiIGFjY29yZGluZyB0byBkaWxhdGlvbi5cbiAgXG4gIFNvIGRpbGF0aW9uID0gMC41IHdvdWxkIGNoYW5nZVxuICBcbiAgYSAtLS0tLS0tLS0gYlxuICBcbiAgdG9cbiAgXG4gIGEgLS0tLSBiXG4gIFxuICBAcGFyYW0gW251bWJlcl06IFByZXZpb3VzIHZhbHVlXG4gIEBwYXJhbSBbbnVtYmVyXTogQ3VycmVudCB2YWx1ZVxuICBAcGFyYW0gW251bWJlcl06IERpbGF0ZSBwcm9ncmVzcyBieSB4XG4gIEByZXR1cm4gW251bWJlcl06IFByZXZpb3VzIHZhbHVlIHBsdXMgdGhlIGRpbGF0ZWQgZGlmZmVyZW5jZVxuKi9cbmV4cG9ydCBjb25zdCBkaWxhdGUgPSAoYSwgYiwgZGlsYXRpb24pID0+IGEgKyAoKGIgLSBhKSAqIGRpbGF0aW9uKTtcblxuLypcbiAgRGlzdGFuY2VcbiAgXG4gIFJldHVybnMgdGhlIGRpc3RhbmNlIGJldHdlZW4gdHdvIG4gZGltZW5zaW9uYWwgcG9pbnRzLlxuICBcbiAgQHBhcmFtIFtvYmplY3QvbnVtYmVyXTogeCBhbmQgeSBvciBqdXN0IHggb2YgcG9pbnQgQVxuICBAcGFyYW0gW29iamVjdC9udW1iZXJdOiAob3B0aW9uYWwpOiB4IGFuZCB5IG9yIGp1c3QgeCBvZiBwb2ludCBCXG4gIEByZXR1cm4gW251bWJlcl06IFRoZSBkaXN0YW5jZSBiZXR3ZWVuIHRoZSB0d28gcG9pbnRzXG4qL1xuZXhwb3J0IGNvbnN0IGRpc3RhbmNlID0gKGEsIGIgPSBaRVJPX1BPSU5UKSA9PiB7XG4gIC8vIDFEIGRpbWVuc2lvbnNcbiAgaWYgKGlzTnVtKGEpKSB7XG4gICAgcmV0dXJuIGRpc3RhbmNlMUQoYSwgYik7XG5cbiAgLy8gTXVsdGktZGltZW5zaW9uYWxcbiAgfSBlbHNlIHtcbiAgICBjb25zdCB4RGVsdGEgPSBkaXN0YW5jZTFEKGEueCwgYi54KTtcbiAgICBjb25zdCB5RGVsdGEgPSBkaXN0YW5jZTFEKGEueSwgYi55KTtcbiAgICBjb25zdCB6RGVsdGEgPSAoaXNOdW0oYS56KSkgPyBkaXN0YW5jZTFEKGEueiwgYi56KSA6IDA7XG5cbiAgICByZXR1cm4gTWF0aC5zcXJ0KCh4RGVsdGEgKiogMikgKyAoeURlbHRhICoqIDIpICsgKHpEZWx0YSAqKiAyKSk7XG4gIH1cbn07XG5cbi8qXG4gIEVhc2UgdmFsdWUgd2l0aGluIHJhbmdlZCBwYXJhbWV0ZXJzXG4gIFxuICBAcGFyYW0gW251bWJlcl06IFByb2dyZXNzIGJldHdlZW4gMCBhbmQgMVxuICBAcGFyYW0gW251bWJlcl06IFZhbHVlIG9mIDAgcHJvZ3Jlc3NcbiAgQHBhcmFtIFtudW1iZXJdOiBWYWx1ZSBvZiAxIHByb2dyZXNzXG4gIEBwYXJhbSBbc3RyaW5nIHx8IGZ1bmN0aW9uXTogTmFtZSBvZiBwcmVzZXQgZWFzaW5nXG4gICAgdG8gdXNlIG9yIGdlbmVyYXRlZCBlYXNpbmcgZnVuY3Rpb25cbiAgQHJldHVybiBbbnVtYmVyXTogVmFsdWUgb2YgZWFzZWQgcHJvZ3Jlc3MgaW4gcmFuZ2VcbiovIFxuZXhwb3J0IGNvbnN0IGVhc2UgPSAocHJvZ3Jlc3MsIGZyb20sIHRvLCBlYXNlKSA9PiB7XG4gIGNvbnN0IHByb2dyZXNzTGltaXRlZCA9IHJlc3RyaWN0KHByb2dyZXNzLCAwLCAxKTtcbiAgY29uc3QgZWFzZWRQcm9ncmVzcyA9IGVhc2UocHJvZ3Jlc3NMaW1pdGVkKTtcblxuICByZXR1cm4gZ2V0VmFsdWVGcm9tUHJvZ3Jlc3MoZWFzZWRQcm9ncmVzcywgZnJvbSwgdG8pO1xufTtcbiBcbi8qXG4gIEh5cG90ZW51c2VcbiAgXG4gIFJldHVybnMgdGhlIGh5cG90ZW51c2UsIHNpZGUgQywgZ2l2ZW4gdGhlIGxlbmd0aHMgb2Ygc2lkZXMgQSBhbmQgQi5cbiAgXG4gIEBwYXJhbSBbbnVtYmVyXTogTGVuZ3RoIG9mIEFcbiAgQHBhcmFtIFtudW1iZXJdOiBMZW5ndGggb2YgQlxuICBAcmV0dXJuIFtudW1iZXJdOiBMZW5ndGggb2YgQ1xuKi9cbmV4cG9ydCBjb25zdCBoeXBvdGVudXNlID0gKGEsIGIpID0+IE1hdGguc3FydCgoYSAqIGEpICsgKGIgKiBiKSk7XG5cbi8qXG4gIFZhbHVlIGluIHJhbmdlIGZyb20gcHJvZ3Jlc3NcbiAgXG4gIEdpdmVuIGEgbG93ZXIgbGltaXQgYW5kIGFuIHVwcGVyIGxpbWl0LCB3ZSByZXR1cm4gdGhlIHZhbHVlIHdpdGhpblxuICB0aGF0IHJhbmdlIGFzIGV4cHJlc3NlZCBieSBwcm9ncmVzcyAoYSBudW1iZXIgZnJvbSAwLTEpXG4gIFxuICBAcGFyYW0gW251bWJlcl06IFRoZSBwcm9ncmVzcyBiZXR3ZWVuIGxvd2VyIGFuZCB1cHBlciBsaW1pdHMgZXhwcmVzc2VkIDAtMVxuICBAcGFyYW0gW251bWJlcl06IExvd2VyIGxpbWl0IG9mIHJhbmdlXG4gIEBwYXJhbSBbbnVtYmVyXTogVXBwZXIgbGltaXQgb2YgcmFuZ2VcbiAgQHJldHVybiBbbnVtYmVyXTogVmFsdWUgYXMgY2FsY3VsYXRlZCBmcm9tIHByb2dyZXNzIHdpdGhpbiByYW5nZSAobm90IGxpbWl0ZWQgd2l0aGluIHJhbmdlKVxuKi9cbmV4cG9ydCBjb25zdCBnZXRWYWx1ZUZyb21Qcm9ncmVzcyA9IChwcm9ncmVzcywgZnJvbSwgdG8pID0+ICgtIHByb2dyZXNzICogZnJvbSkgKyAocHJvZ3Jlc3MgKiB0bykgKyBmcm9tO1xuXG4vKlxuICBQcm9ncmVzcyB3aXRoaW4gZ2l2ZW4gcmFuZ2VcbiAgXG4gIEdpdmVuIGEgbG93ZXIgbGltaXQgYW5kIGFuIHVwcGVyIGxpbWl0LCB3ZSByZXR1cm4gdGhlIHByb2dyZXNzXG4gIChleHByZXNzZWQgYXMgYSBudW1iZXIgMC0xKSByZXByZXNlbnRlZCBieSB0aGUgZ2l2ZW4gdmFsdWUsIGFuZFxuICBsaW1pdCB0aGF0IHByb2dyZXNzIHRvIHdpdGhpbiAwLTEuXG4gIFxuICBAcGFyYW0gW251bWJlcl06IFZhbHVlIHRvIGZpbmQgcHJvZ3Jlc3Mgd2l0aGluIGdpdmVuIHJhbmdlXG4gIEBwYXJhbSBbbnVtYmVyXTogTG93ZXIgbGltaXQgXG4gIEBwYXJhbSBbbnVtYmVyXTogVXBwZXIgbGltaXRcbiAgQHJldHVybiBbbnVtYmVyXTogUHJvZ3Jlc3Mgb2YgdmFsdWUgd2l0aGluIHJhbmdlIGFzIGV4cHJlc3NlZCAwLTFcbiovXG5leHBvcnQgY29uc3QgZ2V0UHJvZ3Jlc3NGcm9tVmFsdWUgPSAodmFsdWUsIGZyb20sIHRvKSA9PiAodmFsdWUgLSBmcm9tKSAvICh0byAtIGZyb20pO1xuXG4vKlxuICBPZmZzZXQgYmV0d2VlbiB0d28gb2JqZWN0cyBvZiBudW1iZXJzXG5cbiAgSWYgcHJvcGVydHkgaXMgZm91bmQgaW4gYiBub3QgcHJlc2VudCBpbiBhLCBpdCB3aWxsIHJldHVybiBgMGAgZm9yIHRoYXQgcHJvcC5cbiAgXG4gIEBwYXJhbSBbUG9pbnRdOiBGaXJzdCBvYmplY3RcbiAgQHBhcmFtIFtQb2ludF06IFNlY29uZCBvYmplY3RcbiAgQHJldHVybiBbT2Zmc2V0XTogRGlzdGFuY2UgbWV0cmljcyBiZXR3ZWVuIHR3byBwb2ludHNcbiovXG5leHBvcnQgY29uc3Qgb2Zmc2V0ID0gKGEsIGIpID0+IHtcbiAgY29uc3Qgb2Zmc2V0ID0ge307XG5cbiAgZm9yIChsZXQga2V5IGluIGIpIHtcbiAgICBpZiAoYi5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICBvZmZzZXRba2V5XSA9IGhhc1Byb3BlcnR5KGEsIGtleSkgPyBiW2tleV0gLSBhW2tleV0gOiAwO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBvZmZzZXQ7XG59O1xuXG4vKlxuICBQb2ludCBmcm9tIGFuZ2xlIGFuZCBkaXN0YW5jZVxuICBcbiAgQHBhcmFtIFtvYmplY3RdOiAyRCBwb2ludCBvZiBvcmlnaW5cbiAgQHBhcmFtIFtudW1iZXJdOiBBbmdsZSBmcm9tIG9yaWdpblxuICBAcGFyYW0gW251bWJlcl06IERpc3RhbmNlIGZyb20gb3JpZ2luXG4gIEByZXR1cm4gW29iamVjdF06IENhbGN1bGF0ZWQgMkQgcG9pbnRcbiovXG5leHBvcnQgY29uc3QgcG9pbnRGcm9tQW5nbGVBbmREaXN0YW5jZSA9IChvcmlnaW4sIGFuZ2xlLCBkaXN0YW5jZSkgPT4ge1xuICBhbmdsZSA9IGRlZ3JlZXNUb1JhZGlhbnMoYW5nbGUpO1xuXG4gIHJldHVybiB7XG4gICAgeDogZGlzdGFuY2UgKiBNYXRoLmNvcyhhbmdsZSkgKyBvcmlnaW4ueCxcbiAgICB5OiBkaXN0YW5jZSAqIE1hdGguc2luKGFuZ2xlKSArIG9yaWdpbi55XG4gIH07XG59O1xuXG4vKlxuICBDb252ZXJ0IHJhZGlhbnMgdG8gZGVncmVlc1xuICBcbiAgQHBhcmFtIFtudW1iZXJdOiBWYWx1ZSBpbiByYWRpYW5zXG4gIEByZXR1cm4gW251bWJlcl06IFZhbHVlIGluIGRlZ3JlZXNcbiovXG5leHBvcnQgY29uc3QgcmFkaWFuc1RvRGVncmVlcyA9IChyYWRpYW5zKSA9PiByYWRpYW5zICogMTgwIC8gTWF0aC5QSTtcblxuLypcbiAgUmV0dXJuIHJhbmRvbSBudW1iZXIgYmV0d2VlbiByYW5nZVxuICBcbiAgQHBhcmFtIFtudW1iZXJdIChvcHRpb25hbCk6IE91dHB1dCBtaW5pbXVtXG4gIEBwYXJhbSBbbnVtYmVyXSAob3B0aW9uYWwpOiBPdXRwdXQgbWF4aW11bVxuICBAcmV0dXJuIFtudW1iZXJdOiBSYW5kb20gbnVtYmVyIHdpdGhpbiByYW5nZSwgb3IgMCBhbmQgMSBpZiBub25lIHByb3ZpZGVkXG4qL1xuZXhwb3J0IGNvbnN0IHJhbmRvbSA9IChtaW4gPSAwLCBtYXggPSAxKSA9PiBNYXRoLnJhbmRvbSgpICogKG1heCAtIG1pbikgKyBtaW47XG5cbi8qXG4gIENhbGN1bGF0ZSByZWxhdGl2ZSB2YWx1ZVxuICBcbiAgVGFrZXMgdGhlIG9wZXJhdG9yIGFuZCB2YWx1ZSBmcm9tIGEgc3RyaW5nLCBpZSBcIis9NVwiLCBhbmQgYXBwbGllc1xuICB0byB0aGUgY3VycmVudCB2YWx1ZSB0byByZXNvbHZlIGEgbmV3IHRhcmdldC5cbiAgXG4gIEBwYXJhbSBbbnVtYmVyXTogQ3VycmVudCB2YWx1ZVxuICBAcGFyYW0gW3N0cmluZ106IFJlbGF0aXZlIHZhbHVlXG4gIEByZXR1cm4gW251bWJlcl06IE5ldyB2YWx1ZVxuKi9cbmV4cG9ydCBjb25zdCByZWxhdGl2ZVZhbHVlID0gKGN1cnJlbnQsIHJlbGF0aXZlKSA9PiB7XG4gIGxldCBuZXdWYWx1ZSA9IGN1cnJlbnQ7XG4gIGNvbnN0IGVxdWF0aW9uID0gcmVsYXRpdmUuc3BsaXQoJz0nKTtcbiAgY29uc3Qgb3BlcmF0b3IgPSBlcXVhdGlvblswXTtcbiAgbGV0IHsgdW5pdCwgdmFsdWUgfSA9IGZpbmRWYWx1ZUFuZFVuaXQoZXF1YXRpb25bMV0pO1xuXG4gIHZhbHVlID0gcGFyc2VGbG9hdCh2YWx1ZSk7XG5cbiAgc3dpdGNoIChvcGVyYXRvcikge1xuICBjYXNlICcrJzpcbiAgICBuZXdWYWx1ZSArPSB2YWx1ZTtcbiAgICBicmVhaztcbiAgY2FzZSAnLSc6XG4gICAgbmV3VmFsdWUgLT0gdmFsdWU7XG4gICAgYnJlYWs7XG4gIGNhc2UgJyonOlxuICAgIG5ld1ZhbHVlICo9IHZhbHVlO1xuICAgIGJyZWFrO1xuICBjYXNlICcvJzpcbiAgICBuZXdWYWx1ZSAvPSB2YWx1ZTtcbiAgICBicmVhaztcbiAgfVxuICBcbiAgaWYgKHVuaXQpIHtcbiAgICBuZXdWYWx1ZSArPSB1bml0O1xuICB9XG5cbiAgcmV0dXJuIG5ld1ZhbHVlO1xufTtcblxuLypcbiAgUmVzdHJpY3QgdmFsdWUgdG8gcmFuZ2VcbiAgXG4gIFJldHVybiB2YWx1ZSB3aXRoaW4gdGhlIHJhbmdlIG9mIGxvd2VyTGltaXQgYW5kIHVwcGVyTGltaXRcbiAgXG4gIEBwYXJhbSBbbnVtYmVyXTogVmFsdWUgdG8ga2VlcCB3aXRoaW4gcmFuZ2VcbiAgQHBhcmFtIFtudW1iZXJdOiBMb3dlciBsaW1pdCBvZiByYW5nZVxuICBAcGFyYW0gW251bWJlcl06IFVwcGVyIGxpbWl0IG9mIHJhbmdlXG4gIEByZXR1cm4gW251bWJlcl06IFZhbHVlIGFzIGxpbWl0ZWQgd2l0aGluIGdpdmVuIHJhbmdlXG4qL1xuZXhwb3J0IGNvbnN0IHJlc3RyaWN0ID0gKHZhbHVlLCBtaW4sIG1heCkgPT4gTWF0aC5tYXgoTWF0aC5taW4odmFsdWUsIG1heCksIG1pbik7XG5cbi8qXG4gIEZyYW1lcmF0ZS1pbmRlcGVuZGVudCBzbW9vdGhpbmdcblxuICBAcGFyYW0gW251bWJlcl06IE5ldyB2YWx1ZVxuICBAcGFyYW0gW251bWJlcl06IE9sZCB2YWx1ZVxuICBAcGFyYW0gW251bWJlcl06IEZyYW1lIGR1cmF0aW9uXG4gIEBwYXJhbSBbbnVtYmVyXSAob3B0aW9uYWwpOiBTbW9vdGhpbmcgKDAgaXMgbm9uZSlcbiovXG5leHBvcnQgY29uc3Qgc21vb3RoID0gKG5ld1ZhbHVlLCBvbGRWYWx1ZSwgZHVyYXRpb24sIHNtb290aGluZyA9IDApID0+IHRvRGVjaW1hbChvbGRWYWx1ZSArIChkdXJhdGlvbiAqIChuZXdWYWx1ZSAtIG9sZFZhbHVlKSAvIE1hdGgubWF4KHNtb290aGluZywgZHVyYXRpb24pKSk7XG5cbi8qXG4gIENvbnZlcnQgeCBwZXIgc2Vjb25kIHRvIHBlciBmcmFtZSB2ZWxvY2l0eSBiYXNlZCBvbiBmcHNcbiAgXG4gIEBwYXJhbSBbbnVtYmVyXTogVW5pdCBwZXIgc2Vjb25kXG4gIEBwYXJhbSBbbnVtYmVyXTogRnJhbWUgZHVyYXRpb24gaW4gbXNcbiovXG5leHBvcnQgY29uc3Qgc3BlZWRQZXJGcmFtZSA9ICh4cHMsIGZyYW1lRHVyYXRpb24pID0+IChpc051bSh4cHMpKSA/IHhwcyAvICgxMDAwIC8gZnJhbWVEdXJhdGlvbikgOiAwO1xuXG4vKlxuICBDb252ZXJ0IHZlbG9jaXR5IGludG8gdmVsaWNpdHkgcGVyIHNlY29uZFxuICBcbiAgQHBhcmFtIFtudW1iZXJdOiBVbml0IHBlciBmcmFtZVxuICBAcGFyYW0gW251bWJlcl06IEZyYW1lIGR1cmF0aW9uIGluIG1zXG4qL1xuZXhwb3J0IGNvbnN0IHNwZWVkUGVyU2Vjb25kID0gKHZlbG9jaXR5LCBmcmFtZUR1cmF0aW9uKSA9PiB2ZWxvY2l0eSAqICgxMDAwIC8gZnJhbWVEdXJhdGlvbik7XG5cbi8qXG4gIENyZWF0ZSBzdGVwcGVkIHZlcnNpb24gb2YgMC0xIHByb2dyZXNzXG4gIFxuICBAcGFyYW0gW251bWJlcl06IEN1cnJlbnQgdmFsdWVcbiAgQHBhcmFtIFtpbnRdOiBOdW1iZXIgb2Ygc3RlcHNcbiAgQHJldHVybiBbbnVtYmVyXTogU3RlcHBlZCB2YWx1ZVxuKi9cbmV4cG9ydCBjb25zdCBzdGVwUHJvZ3Jlc3MgPSAocHJvZ3Jlc3MsIHN0ZXBzKSA9PiB7XG4gIGNvbnN0IHNlZ21lbnQgPSAxIC8gKHN0ZXBzIC0gMSk7XG4gIGNvbnN0IHRhcmdldCA9IDEgLSAoMSAvIHN0ZXBzKTtcbiAgY29uc3QgcHJvZ3Jlc3NPZlRhcmdldCA9IE1hdGgubWluKHByb2dyZXNzIC8gdGFyZ2V0LCAxKTtcblxuICByZXR1cm4gTWF0aC5mbG9vcihwcm9ncmVzc09mVGFyZ2V0IC8gc2VnbWVudCkgKiBzZWdtZW50O1xufTsiXX0=

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
	//# sourceMappingURL=data:application/json;base64,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QUFNLGdDQUFZLFVBQUMsUUFBRCxFQUFjO0FBQ3JDLE1BQU0sUUFBUyxPQUFPLFFBQVAsS0FBb0IsUUFBckIsR0FBaUMsU0FBUyxnQkFBVCxDQUEwQixRQUExQixDQUFqQyxHQUF1RSxRQUFyRjtBQUNBLFNBQVEsTUFBTSxNQUFQLEdBQWlCLEdBQUcsS0FBSCxDQUFTLElBQVQsQ0FBYyxLQUFkLENBQWpCLEdBQXdDLEdBQUcsSUFBSCxDQUFRLEtBQVIsQ0FBL0M7QUFDRCxDQUhNOzs7Ozs7Ozs7O0FBYUEsSUFBTSxvREFBc0IsVUFBQyxLQUFEO0FBQUEsU0FBVyxTQUFTLEtBQVQsSUFBa0IsTUFBTSxLQUFOLENBQVksTUFBWixDQUFsQixHQUF3QyxDQUFDLEtBQUQsQ0FBbkQ7QUFBQSxDQUE1Qjs7Ozs7Ozs7OztBQVVBLElBQU0sb0RBQXNCLFVBQUMsS0FBRDtBQUFBLFNBQVcsU0FBUyxLQUFULElBQWtCLE1BQU0sS0FBTixDQUFZLEdBQVosQ0FBbEIsR0FBcUMsQ0FBQyxLQUFELENBQWhEO0FBQUEsQ0FBNUI7Ozs7Ozs7OztBQVNBLElBQU0sZ0NBQVksVUFBQyxHQUFELEVBQXdCO0FBQUEsTUFBbEIsU0FBa0IseURBQU4sQ0FBTTs7QUFDL0MsdUJBQVksRUFBWixFQUFrQixTQUFsQjtBQUNBLFNBQU8sS0FBSyxLQUFMLENBQVcsTUFBTSxTQUFqQixJQUE4QixTQUFyQztBQUNELENBSE0iLCJmaWxlIjoidXRpbHMuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL21hdHRwZXJyeS9TaXRlcy9wb3Btb3Rpb24iLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBDQU1FTF9DQVNFX1BBVFRFUk4gPSAvKFthLXpdKShbQS1aXSkvZztcbmNvbnN0IFJFUExBQ0VfVEVNUExBVEUgPSAnJDEtJDInO1xuY29uc3QgSEFTX1BFUkZPUk1BTkNFX05PVyA9ICh0eXBlb2YgcGVyZm9ybWFuY2UgIT09ICd1bmRlZmluZWQnICYmIHBlcmZvcm1hbmNlLm5vdyk7XG5cbi8qXG4gIEdldCB2YXIgdHlwZSBhcyBzdHJpbmdcbiAgXG4gIEBwYXJhbTogVmFyaWFibGUgdG8gdGVzdFxuICBAcmV0dXJuIFtzdHJpbmddOiBSZXR1cm5zLCBmb3IgaW5zdGFuY2UgJ09iamVjdCcgaWYgW29iamVjdCBPYmplY3RdXG4qL1xuY29uc3QgdmFyVHlwZSA9IHZhcmlhYmxlID0+IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh2YXJpYWJsZSkuc2xpY2UoOCwgLTEpO1xuXG4vKlxuICBDb252ZXJ0IGNhbWVsQ2FzZSB0byBkYXNoLWNhc2VcblxuICBAcGFyYW0gW3N0cmluZ11cbiAgQHJldHVybiBbc3RyaW5nXVxuKi9cbmV4cG9ydCBjb25zdCBjYW1lbFRvRGFzaCA9IChzdHJpbmcpID0+IHN0cmluZy5yZXBsYWNlKENBTUVMX0NBU0VfUEFUVEVSTiwgUkVQTEFDRV9URU1QTEFURSkudG9Mb3dlckNhc2UoKTtcblxuZXhwb3J0IGNvbnN0IGNyZWF0ZURlbGltaXRlZCA9ICh2YWx1ZXMsIHRlcm1zLCBkZWxpbWl0ZXIsIGNob3ApID0+IHtcbiAgY29uc3QgbnVtVGVybXMgPSB0ZXJtcy5sZW5ndGg7XG4gIGxldCBjb21iaW5lZCA9ICcnO1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbnVtVGVybXM7IGkrKykge1xuICAgIGNvbnN0IHRlcm0gPSB0ZXJtc1tpXTtcbiAgICBpZiAodmFsdWVzLmhhc093blByb3BlcnR5KHRlcm0pKSB7XG4gICAgICBjb21iaW5lZCArPSB2YWx1ZXNbdGVybV0gKyBkZWxpbWl0ZXI7XG4gICAgfVxuICB9XG5cbiAgaWYgKGNob3ApIHtcbiAgICBjb21iaW5lZCA9IGNvbWJpbmVkLnNsaWNlKDAsIC1jaG9wKTtcbiAgfVxuXG4gIHJldHVybiBjb21iaW5lZDtcbn07XG5cbi8qXG4gIENyZWF0ZSBhIGZ1bmN0aW9uIHN0cmluZ1xuXG4gICcyMHB4JywgJ3RyYW5zbGF0ZScgLT4gJ3RyYW5zbGF0ZSgyMHB4KSdcblxuICBAcGFyYW0gW3N0cmluZ11cbiAgQHBhcmFtIFtzdHJpbmddXG4gIEByZXR1cm4gW3N0cmluZ11cbiovXG5leHBvcnQgY29uc3QgY3JlYXRlRnVuY3Rpb25TdHJpbmcgPSAodmFsdWUsIHByZWZpeCkgPT4gYCR7cHJlZml4fSgke3ZhbHVlfSlgO1xuXG4vKlxuICBHZW5lcmF0ZSBjdXJyZW50IHRpbWVzdGFtcFxuICBcbiAgQHJldHVybiBbdGltZXN0YW1wXTogQ3VycmVudCBVTklYIHRpbWVzdGFtcFxuKi9cbmV4cG9ydCBjb25zdCBjdXJyZW50VGltZSA9IEhBU19QRVJGT1JNQU5DRV9OT1cgPyAoKSA9PiBwZXJmb3JtYW5jZS5ub3coKSA6ICgpID0+IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuXG4vKlxuICBTcGxpdCBhIHZhbHVlIGludG8gYSB2YWx1ZS91bml0IG9iamVjdFxuICBcbiAgICBcIjIwMHB4XCIgLT4geyB2YWx1ZTogMjAwLCB1bml0OiBcInB4XCIgfVxuICAgIFxuICBAcGFyYW0gW3N0cmluZ106IFZhbHVlIHRvIHNwbGl0XG4gIEByZXR1cm4gW29iamVjdF06IE9iamVjdCB3aXRoIHZhbHVlIGFuZCB1bml0IHByb3BzXG4qL1xuZXhwb3J0IGNvbnN0IGZpbmRWYWx1ZUFuZFVuaXQgPSAodmFsdWUpID0+IHtcbiAgaWYgKHZhbHVlLm1hdGNoKSB7XG4gICAgY29uc3Qgc3BsaXRWYWx1ZSA9IHZhbHVlLm1hdGNoKC8oLT9cXGQqXFwuP1xcZCopKC4qKS8pO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIHZhbHVlOiBwYXJzZUZsb2F0KHNwbGl0VmFsdWVbMV0pLFxuICAgICAgdW5pdDogIHNwbGl0VmFsdWVbMl1cbiAgICB9O1xuICB9IGVsc2Uge1xuICAgIHJldHVybiB7IHZhbHVlIH07XG4gIH1cbn07XG5cbi8qXG4gIFNwbGl0IGNvbG9yIHN0cmluZyBpbnRvIG1hcCBvZiBjb2xvciBwcm9wZXJ0aWVzXG5cbiAgXCJyZ2JhKDI1NSwgMjU1LCAyNTUsIDApXCIsIFtcIlJlZFwiLCAnR3JlZW5cIiwgXCJCbHVlXCIsIFwiQWxwaGFcIl1cblxuICB7IFJlZDogMjU1Li4uIH1cbiovXG5leHBvcnQgY29uc3QgZ2V0Q29sb3JWYWx1ZXMgPSAodmFsdWUsIGNvbG9yVGVybXMpID0+IHtcbiAgY29uc3QgbnVtQ29sb3JUZXJtcyA9IGNvbG9yVGVybXMubGVuZ3RoO1xuICBjb25zdCBjb2xvclZhbHVlcyA9IHt9O1xuICBjb25zdCBjb2xvcnMgPSBzcGxpdENvbW1hRGVsaW1pdGVkKGdldFZhbHVlRnJvbUZ1bmN0aW9uU3RyaW5nKHZhbHVlKSk7XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBudW1Db2xvclRlcm1zOyBpKyspIHtcbiAgICBjb2xvclZhbHVlc1tjb2xvclRlcm1zW2ldXSA9IChjb2xvcnNbaV0gIT09IHVuZGVmaW5lZCkgPyBjb2xvcnNbaV0gOiAxO1xuICB9XG5cbiAgcmV0dXJuIGNvbG9yVmFsdWVzO1xufTtcblxuLypcbiAgR2V0IHZhbHVlIGZyb20gZnVuY3Rpb24gc3RyaW5nXG5cbiAgXCJ0cmFuc2xhdGVYKDIwcHgpXCIgLT4gXCIyMHB4XCJcbiovXG5leHBvcnQgY29uc3QgZ2V0VmFsdWVGcm9tRnVuY3Rpb25TdHJpbmcgPSAodmFsdWUpID0+IHZhbHVlLnN1YnN0cmluZyh2YWx1ZS5pbmRleE9mKCcoJykgKyAxLCB2YWx1ZS5sYXN0SW5kZXhPZignKScpKTtcblxuLypcbiAgQ2hlY2sgaWYgdHdvIG9iamVjdHMgaGF2ZSBjaGFuZ2VkIGZyb20gZWFjaCBvdGhlclxuICBcbiAgQHBhcmFtIFtvYmplY3RdOiBJbnB1dCBBXG4gIEBwYXJhbSBbb2JqZWN0XTogSW5wdXQgQlxuICBAcmV0dXJuIFtib29sZWFuXTogVHJ1ZSBpZiBkaWZmZXJlbnRcbiovXG5leHBvcnQgY29uc3QgaGFzQ2hhbmdlZCA9IChhLCBiKSA9PiB7XG4gIGxldCBjaGFuZ2VkID0gZmFsc2U7XG5cbiAgZm9yIChsZXQga2V5IGluIGEpIHtcbiAgICBpZiAoYS5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICBpZiAoaGFzUHJvcGVydHkoYiwga2V5KSkge1xuICAgICAgICBpZiAoYVtrZXldICE9PSBiW2tleV0pIHtcbiAgICAgICAgICBjaGFuZ2VkID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY2hhbmdlZCA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGNoYW5nZWQ7XG59O1xuXG4vKlxuICBDaGVjayBpZiBvYmplY3QgaGFzIHByb3BlcnR5IGFuZCBpdCBpc24ndCB1bmRlZmluZWRcblxuICBAcGFyYW0gW29iamVjdF1cbiAgQHBhcmFtIFtzdHJpbmddXG4gIEByZXR1cm4gW2Jvb2xlYW5dXG4qL1xuZXhwb3J0IGNvbnN0IGhhc1Byb3BlcnR5ID0gKG9iamVjdCwgcHJvcGVydHlOYW1lKSA9PiBvYmplY3QuaGFzT3duUHJvcGVydHkocHJvcGVydHlOYW1lKSAmJiBvYmplY3RbcHJvcGVydHlOYW1lXSAhPT0gdW5kZWZpbmVkO1xuXG4vKlxuICBJcyB1dGlscyB2YXIgYW4gYXJyYXkgPyBcbiAgXG4gIEBwYXJhbTogVmFyaWFibGUgdG8gdGVzdFxuICBAcmV0dXJuIFtib29sZWFuXTogUmV0dXJucyB0cnVlIGlmIHV0aWxzLnZhclR5cGUgPT09ICdBcnJheSdcbiovXG5leHBvcnQgY29uc3QgaXNBcnJheSA9IChhcnIpID0+IHZhclR5cGUoYXJyKSA9PT0gJ0FycmF5JztcblxuLypcbiAgSXMgdXRpbHMgdmFyIGEgZnVuY3Rpb24gPyBcbiAgXG4gIEBwYXJhbTogVmFyaWFibGUgdG8gdGVzdFxuICBAcmV0dXJuIFtib29sZWFuXTogUmV0dXJucyB0cnVlIGlmIHV0aWxzLnZhclR5cGUgPT09ICdGdW5jdGlvbidcbiovXG5leHBvcnQgY29uc3QgaXNGdW5jID0gKG9iaikgPT4gdmFyVHlwZShvYmopID09PSAnRnVuY3Rpb24nO1xuXG4vKlxuICBJcyB1dGlscyB2YXIgYSBudW1iZXI/XG4gIFxuICBAcGFyYW06IFZhcmlhYmxlIHRvIHRlc3RcbiAgQHJldHVybiBbYm9vbGVhbl06IFJldHVybnMgdHJ1ZSBpZiB0eXBlb2YgPT09ICdudW1iZXInXG4qL1xuZXhwb3J0IGNvbnN0IGlzTnVtID0gKG51bSkgPT4gdHlwZW9mIG51bSA9PT0gJ251bWJlcic7XG5cbi8qXG4gIElzIHV0aWxzIHZhciBhbiBvYmplY3Q/XG4gIFxuICBAcGFyYW06IFZhcmlhYmxlIHRvIHRlc3RcbiAgQHJldHVybiBbYm9vbGVhbl06IFJldHVybnMgdHJ1ZSBpZiB0eXBlb2YgPT09ICdvYmplY3QnXG4qL1xuZXhwb3J0IGNvbnN0IGlzT2JqID0gKG9iaikgPT4gdHlwZW9mIG9iaiA9PT0gJ29iamVjdCc7XG5cbi8qXG4gIElzIHV0aWxzIGEgcmVsYXRpdmUgdmFsdWUgYXNzaWdubWVudD9cbiAgXG4gIEBwYXJhbSBbc3RyaW5nXTogVmFyaWFibGUgdG8gdGVzdFxuICBAcmV0dXJuIFtib29sZWFuXTogSWYgdXRpbHMgbG9va3MgbGlrZSBhIHJlbGF0aXZlIHZhbHVlIGFzc2lnbm1lbnRcbiovXG5leHBvcnQgY29uc3QgaXNSZWxhdGl2ZVZhbHVlID0gKHZhbHVlKSA9PiAodmFsdWUgJiYgdmFsdWUuaW5kZXhPZiAmJiB2YWx1ZS5pbmRleE9mKCc9JykgPiAwKSA/IHRydWUgOiBmYWxzZTtcblxuLypcbiAgSXMgdXRpbHMgdmFyIGEgc3RyaW5nID8gXG4gIFxuICBAcGFyYW06IFZhcmlhYmxlIHRvIHRlc3RcbiAgQHJldHVybiBbYm9vbGVhbl06IFJldHVybnMgdHJ1ZSBpZiB0eXBlb2Ygc3RyID09PSAnc3RyaW5nJ1xuKi9cbmV4cG9ydCBjb25zdCBpc1N0cmluZyA9IChzdHIpID0+IHR5cGVvZiBzdHIgPT09ICdzdHJpbmcnO1xuXG4vKlxuICBAcGFyYW0gW3N0cmluZyB8fCBOb2RlTGlzdF06XG4gICAgSWYgc3RyaW5nLCB0cmVhdGVkIGFzIHNlbGVjdG9yLlxuICAgIElmIG5vdCwgdHJlYXRlZCBhcyBwcmVleGlzdGluZyBOb2RlTGlzdFxuXG4gIEByZXR1cm4gW0FycmF5XVxuKi9cbmV4cG9ydCBjb25zdCBzZWxlY3REb20gPSAoc2VsZWN0b3IpID0+IHtcbiAgY29uc3Qgbm9kZXMgPSAodHlwZW9mIHNlbGVjdG9yID09PSAnc3RyaW5nJykgPyBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9yKSA6IHNlbGVjdG9yO1xuICByZXR1cm4gKG5vZGVzLmxlbmd0aCkgPyBbXS5zbGljZS5jYWxsKG5vZGVzKSA6IFtdLnB1c2gobm9kZXMpO1xufTtcblxuLypcbiAgU3BsaXQgY29tbWEtZGVsaW1pdGVkIHN0cmluZ1xuXG4gIFwiZm9vLGJhclwiIC0+IFtcImZvb1wiLCBcImJhclwiXVxuXG4gIEBwYXJhbSBbc3RyaW5nXVxuICBAcmV0dXJuIFthcnJheV1cbiovXG5leHBvcnQgY29uc3Qgc3BsaXRDb21tYURlbGltaXRlZCA9ICh2YWx1ZSkgPT4gaXNTdHJpbmcodmFsdWUpID8gdmFsdWUuc3BsaXQoLyxcXHMqLykgOiBbdmFsdWVdO1xuXG4vKlxuICBTcGxpdCBzcGFjZS1kZWxpbWl0ZWQgc3RyaW5nXG5cbiAgXCJmb28gYmFyXCIgLT4gW1wiZm9vXCIsIFwiYmFyXCJdXG5cbiAgQHBhcmFtIFtzdHJpbmddXG4gIEByZXR1cm4gW2FycmF5XVxuKi9cbmV4cG9ydCBjb25zdCBzcGxpdFNwYWNlRGVsaW1pdGVkID0gKHZhbHVlKSA9PiBpc1N0cmluZyh2YWx1ZSkgPyB2YWx1ZS5zcGxpdCgnICcpIDogW3ZhbHVlXTtcblxuLypcbiAgQ29udmVydCBudW1iZXIgdG8geCBkZWNpbWFsIHBsYWNlc1xuXG4gIEBwYXJhbSBbbnVtYmVyXVxuICBAcGFyYW0gW251bWJlcl1cbiAgQHJldHVybiBbbnVtYmVyXVxuKi9cbmV4cG9ydCBjb25zdCB0b0RlY2ltYWwgPSAobnVtLCBwcmVjaXNpb24gPSAyKSA9PiB7XG4gIHByZWNpc2lvbiA9IDEwICoqIHByZWNpc2lvbjtcbiAgcmV0dXJuIE1hdGgucm91bmQobnVtICogcHJlY2lzaW9uKSAvIHByZWNpc2lvbjtcbn07XG4iXX0=

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _defaultProps = __webpack_require__(48);
	
	exports.default = {
	  defaultProps: _defaultProps.opacity
	};
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy92YWx1ZS10eXBlcy9hbHBoYS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUE7O2tCQUVlO0FBQ2I7QUFEYSxDIiwiZmlsZSI6ImFscGhhLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9tYXR0cGVycnkvU2l0ZXMvcG9wbW90aW9uIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgb3BhY2l0eSB9IGZyb20gJy4vc2V0dGluZ3MvZGVmYXVsdC1wcm9wcyc7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgZGVmYXVsdFByb3BzOiBvcGFjaXR5XG59OyJdfQ==

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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy92YWx1ZS10eXBlcy9hbmdsZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUE7Ozs7OztrQkFFZTtBQUNiLGdCQUFjO0FBQ1osVUFBTSxLQURNO0FBRVo7QUFGWTtBQURELEMiLCJmaWxlIjoiYW5nbGUuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL21hdHRwZXJyeS9TaXRlcy9wb3Btb3Rpb24iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdW5pdFR5cGUgZnJvbSAnLi91bml0JztcblxuZXhwb3J0IGRlZmF1bHQge1xuICBkZWZhdWx0UHJvcHM6IHtcbiAgICB1bml0OiAnZGVnJyxcbiAgICB0eXBlOiB1bml0VHlwZVxuICB9XG59OyJdfQ==

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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy92YWx1ZS10eXBlcy9jb2xvci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7Ozs7OztBQUVBLElBQU0sYUFBYSw2Q0FBbkI7QUFDQSxJQUFNLGdCQUFnQixXQUFXLE1BQWpDOztrQkFFZTtBQUNiLDZCQUFtQixjQUFJLFlBQXZCLEVBQXdDLGNBQUksWUFBNUMsQ0FEYTs7QUFHYixRQUFNLFVBQUMsS0FBRDtBQUFBLFdBQVcsY0FBSSxJQUFKLENBQVMsS0FBVCxLQUFtQixjQUFJLElBQUosQ0FBUyxLQUFULENBQW5CLElBQXNDLGNBQUksSUFBSixDQUFTLEtBQVQsQ0FBakQ7QUFBQSxHQUhPOztBQUtiLFNBQU8sVUFBQyxLQUFELEVBQVc7QUFDaEIsU0FBSyxJQUFJLElBQUksQ0FBYixFQUFnQixJQUFJLGFBQXBCLEVBQW1DLEdBQW5DLEVBQXdDO0FBQ3RDLFVBQUksV0FBVyxDQUFYLEVBQWMsSUFBZCxDQUFtQixLQUFuQixDQUFKLEVBQStCO0FBQzdCLGVBQU8sV0FBVyxDQUFYLEVBQWMsS0FBZCxDQUFvQixLQUFwQixDQUFQO0FBQ0Q7QUFDRjtBQUNGLEdBWFk7O0FBYWIsV0FBUyxVQUFDLE1BQUQ7QUFBQSxXQUFhLE9BQU8sR0FBUCxLQUFlLFNBQWhCLEdBQTZCLGNBQUksT0FBSixDQUFZLE1BQVosQ0FBN0IsR0FBbUQsY0FBSSxPQUFKLENBQVksTUFBWixDQUEvRDtBQUFBO0FBYkksQyIsImZpbGUiOiJjb2xvci5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvbWF0dHBlcnJ5L1NpdGVzL3BvcG1vdGlvbiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCByZ2IgZnJvbSAnLi9yZ2InO1xuaW1wb3J0IGhzbCBmcm9tICcuL2hzbCc7XG5pbXBvcnQgaGV4IGZyb20gJy4vaGV4JztcblxuY29uc3QgY29sb3JUeXBlcyA9IFtyZ2IsIGhzbCwgaGV4XTtcbmNvbnN0IG51bUNvbG9yVHlwZXMgPSBjb2xvclR5cGVzLmxlbmd0aDtcblxuZXhwb3J0IGRlZmF1bHQge1xuICBkZWZhdWx0UHJvcHM6IHsgLi4ucmdiLmRlZmF1bHRQcm9wcywgLi4uaHNsLmRlZmF1bHRQcm9wcyB9LFxuXG4gIHRlc3Q6ICh2YWx1ZSkgPT4gcmdiLnRlc3QodmFsdWUpIHx8IGhleC50ZXN0KHZhbHVlKSB8fCBoc2wudGVzdCh2YWx1ZSksXG5cbiAgc3BsaXQ6ICh2YWx1ZSkgPT4ge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbnVtQ29sb3JUeXBlczsgaSsrKSB7XG4gICAgICBpZiAoY29sb3JUeXBlc1tpXS50ZXN0KHZhbHVlKSkge1xuICAgICAgICByZXR1cm4gY29sb3JUeXBlc1tpXS5zcGxpdCh2YWx1ZSk7XG4gICAgICB9XG4gICAgfVxuICB9LFxuXG4gIGNvbWJpbmU6ICh2YWx1ZXMpID0+ICh2YWx1ZXMuUmVkICE9PSB1bmRlZmluZWQpID8gcmdiLmNvbWJpbmUodmFsdWVzKSA6IGhzbC5jb21iaW5lKHZhbHVlcylcbn07XG4iXX0=

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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy92YWx1ZS10eXBlcy9jb21wbGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQTs7QUFFQSxJQUFNLGNBQWMsa0JBQXBCO0FBQ0EsSUFBTSxnQkFBZ0IsVUFBQyxLQUFEO0FBQUEsU0FBVyxPQUFPLEtBQVAsR0FBZSxHQUExQjtBQUFBLENBQXRCOztrQkFFZTs7QUFFYixRQUFNLFVBQUMsS0FBRCxFQUFXO0FBQ2YsUUFBTSxVQUFVLE1BQU0sS0FBTixDQUFZLFdBQVosQ0FBaEI7QUFDQSxXQUFRLG9CQUFRLE9BQVIsS0FBb0IsUUFBUSxNQUFSLEdBQWlCLENBQTdDO0FBQ0QsR0FMWTs7QUFPYixZQUFVLFVBQUMsS0FBRCxFQUFXO0FBQ25CLFFBQUksVUFBVSxDQUFkO0FBQ0EsV0FBTyxNQUFNLE9BQU4sQ0FBYyxXQUFkLEVBQTJCO0FBQUEsYUFBTSxjQUFjLFNBQWQsQ0FBTjtBQUFBLEtBQTNCLENBQVA7QUFDRCxHQVZZOztBQVliLFNBQU8sVUFBQyxLQUFELEVBQVc7QUFDaEIsUUFBTSxhQUFhLEVBQW5COztBQUVBLFVBQU0sS0FBTixDQUFZLFdBQVosRUFBeUIsT0FBekIsQ0FBaUMsVUFBQyxLQUFELEVBQVEsQ0FBUjtBQUFBLGFBQWMsV0FBVyxDQUFYLElBQWdCLEtBQTlCO0FBQUEsS0FBakM7O0FBRUEsV0FBTyxVQUFQO0FBQ0QsR0FsQlk7O0FBb0JiLFdBQVMsVUFBQyxNQUFELEVBQVMsUUFBVCxFQUFzQjtBQUM3QixTQUFLLElBQUksR0FBVCxJQUFnQixNQUFoQixFQUF3QjtBQUN0QixVQUFJLE9BQU8sY0FBUCxDQUFzQixHQUF0QixDQUFKLEVBQWdDO0FBQzlCLG1CQUFXLFNBQVMsT0FBVCxDQUFpQixjQUFjLEdBQWQsQ0FBakIsRUFBcUMsT0FBTyxHQUFQLENBQXJDLENBQVg7QUFDRDtBQUNGOztBQUVELFdBQU8sUUFBUDtBQUNEOztBQTVCWSxDIiwiZmlsZSI6ImNvbXBsZXguanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL21hdHRwZXJyeS9TaXRlcy9wb3Btb3Rpb24iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBpc0FycmF5IH0gZnJvbSAnLi4vaW5jL3V0aWxzJztcblxuY29uc3QgRkxPQVRfUkVHRVggPSAvKC0pPyhcXGRbXFxkXFwuXSopL2c7XG5jb25zdCBnZW5lcmF0ZVRva2VuID0gKHRva2VuKSA9PiAnJHsnICsgdG9rZW4gKyAnfSc7XG5cbmV4cG9ydCBkZWZhdWx0IHtcblxuICB0ZXN0OiAodmFsdWUpID0+IHtcbiAgICBjb25zdCBtYXRjaGVzID0gdmFsdWUubWF0Y2goRkxPQVRfUkVHRVgpO1xuICAgIHJldHVybiAoaXNBcnJheShtYXRjaGVzKSAmJiBtYXRjaGVzLmxlbmd0aCA+IDEpO1xuICB9LFxuXG4gIHRlbXBsYXRlOiAodmFsdWUpID0+IHtcbiAgICBsZXQgY291bnRlciA9IDA7XG4gICAgcmV0dXJuIHZhbHVlLnJlcGxhY2UoRkxPQVRfUkVHRVgsICgpID0+IGdlbmVyYXRlVG9rZW4oY291bnRlcisrKSk7XG4gIH0sXG5cbiAgc3BsaXQ6ICh2YWx1ZSkgPT4ge1xuICAgIGNvbnN0IHNwbGl0VmFsdWUgPSB7fTtcblxuICAgIHZhbHVlLm1hdGNoKEZMT0FUX1JFR0VYKS5mb3JFYWNoKCh2YWx1ZSwgaSkgPT4gc3BsaXRWYWx1ZVtpXSA9IHZhbHVlKTtcblxuICAgIHJldHVybiBzcGxpdFZhbHVlO1xuICB9LFxuXG4gIGNvbWJpbmU6ICh2YWx1ZXMsIHRlbXBsYXRlKSA9PiB7XG4gICAgZm9yIChsZXQga2V5IGluIHZhbHVlcykge1xuICAgICAgaWYgKHZhbHVlcy5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgIHRlbXBsYXRlID0gdGVtcGxhdGUucmVwbGFjZShnZW5lcmF0ZVRva2VuKGtleSksIHZhbHVlc1trZXldKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdGVtcGxhdGU7XG4gIH1cblxufTsiXX0=

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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy92YWx1ZS10eXBlcy9oZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBOzs7Ozs7a0JBRWU7QUFDYixnQkFBYyxjQUFJLFlBREw7O0FBR2IsUUFBTSxVQUFDLEtBQUQ7QUFBQSxXQUFZLFNBQVMsTUFBTSxPQUFOLENBQWMsR0FBZCxJQUFxQixDQUFDLENBQTNDO0FBQUEsR0FITzs7QUFLYixTQUFPLFVBQUMsS0FBRCxFQUFXO0FBQ2hCLFFBQUksVUFBSjtBQUFBLFFBQU8sVUFBUDtBQUFBLFFBQVUsVUFBVjs7O0FBR0EsUUFBSSxNQUFNLE1BQU4sR0FBZSxDQUFuQixFQUFzQjtBQUNwQixVQUFJLE1BQU0sTUFBTixDQUFhLENBQWIsRUFBZ0IsQ0FBaEIsQ0FBSjtBQUNBLFVBQUksTUFBTSxNQUFOLENBQWEsQ0FBYixFQUFnQixDQUFoQixDQUFKO0FBQ0EsVUFBSSxNQUFNLE1BQU4sQ0FBYSxDQUFiLEVBQWdCLENBQWhCLENBQUo7OztBQUdELEtBTkQsTUFNTztBQUNMLFVBQUksTUFBTSxNQUFOLENBQWEsQ0FBYixFQUFnQixDQUFoQixDQUFKO0FBQ0EsVUFBSSxNQUFNLE1BQU4sQ0FBYSxDQUFiLEVBQWdCLENBQWhCLENBQUo7QUFDQSxVQUFJLE1BQU0sTUFBTixDQUFhLENBQWIsRUFBZ0IsQ0FBaEIsQ0FBSjtBQUNBLFdBQUssQ0FBTDtBQUNBLFdBQUssQ0FBTDtBQUNBLFdBQUssQ0FBTDtBQUNEOztBQUVELFdBQU87QUFDTCxXQUFLLFNBQVMsQ0FBVCxFQUFZLEVBQVosQ0FEQTtBQUVMLGFBQU8sU0FBUyxDQUFULEVBQVksRUFBWixDQUZGO0FBR0wsWUFBTSxTQUFTLENBQVQsRUFBWSxFQUFaLENBSEQ7QUFJTCxhQUFPO0FBSkYsS0FBUDtBQU1ELEdBOUJZOztBQWdDYixXQUFTLFVBQUMsTUFBRDtBQUFBLFdBQVksY0FBSSxPQUFKLENBQVksTUFBWixDQUFaO0FBQUE7QUFoQ0ksQyIsImZpbGUiOiJoZXguanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL21hdHRwZXJyeS9TaXRlcy9wb3Btb3Rpb24iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgcmdiIGZyb20gJy4vcmdiJztcblxuZXhwb3J0IGRlZmF1bHQge1xuICBkZWZhdWx0UHJvcHM6IHJnYi5kZWZhdWx0UHJvcHMsXG5cbiAgdGVzdDogKHZhbHVlKSA9PiAodmFsdWUgJiYgdmFsdWUuaW5kZXhPZignIycpID4gLTEpLFxuXG4gIHNwbGl0OiAodmFsdWUpID0+IHtcbiAgICBsZXQgciwgZywgYjtcblxuICAgIC8vIElmIHdlIGhhdmUgNiBjaGFyYWN0ZXJzLCBpZSAjRkYwMDAwXG4gICAgaWYgKHZhbHVlLmxlbmd0aCA+IDQpIHtcbiAgICAgIHIgPSB2YWx1ZS5zdWJzdHIoMSwgMik7XG4gICAgICBnID0gdmFsdWUuc3Vic3RyKDMsIDIpO1xuICAgICAgYiA9IHZhbHVlLnN1YnN0cig1LCAyKTtcblxuICAgIC8vIE9yIHdlIGhhdmUgMyBjaGFyYWN0ZXJzLCBpZSAjRjAwXG4gICAgfSBlbHNlIHtcbiAgICAgIHIgPSB2YWx1ZS5zdWJzdHIoMSwgMSk7XG4gICAgICBnID0gdmFsdWUuc3Vic3RyKDIsIDEpO1xuICAgICAgYiA9IHZhbHVlLnN1YnN0cigzLCAxKTtcbiAgICAgIHIgKz0gcjtcbiAgICAgIGcgKz0gZztcbiAgICAgIGIgKz0gYjtcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgUmVkOiBwYXJzZUludChyLCAxNiksXG4gICAgICBHcmVlbjogcGFyc2VJbnQoZywgMTYpLFxuICAgICAgQmx1ZTogcGFyc2VJbnQoYiwgMTYpLFxuICAgICAgQWxwaGE6IDFcbiAgICB9O1xuICB9LFxuXG4gIGNvbWJpbmU6ICh2YWx1ZXMpID0+IHJnYi5jb21iaW5lKHZhbHVlcylcbn07Il19

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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy92YWx1ZS10eXBlcy9oc2wuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBOztBQUNBOztBQUNBOztrQkFFZTtBQUNiLGdCQUFjO0FBQ1osU0FBSztBQUNILFdBQUssQ0FERjtBQUVILFdBQUs7QUFGRixLQURPO0FBS1oscUNBTFk7QUFNWixvQ0FOWTtBQU9aO0FBUFksR0FERDs7QUFXYixRQUFNLFVBQUMsS0FBRDtBQUFBLFdBQVksU0FBUyxNQUFNLE9BQU4sQ0FBYyxLQUFkLElBQXVCLENBQUMsQ0FBN0M7QUFBQSxHQVhPOztBQWFiLFNBQU8sVUFBQyxLQUFEO0FBQUEsV0FBVywyQkFBZSxLQUFmLGtCQUFYO0FBQUEsR0FiTTs7QUFlYixXQUFTLFVBQUMsTUFBRDtBQUFBLFdBQVksaUNBQXFCLDRCQUFnQixNQUFoQixtQkFBa0MsSUFBbEMsRUFBd0MsQ0FBeEMsQ0FBckIsRUFBaUUsTUFBakUsQ0FBWjtBQUFBO0FBZkksQyIsImZpbGUiOiJoc2wuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL21hdHRwZXJyeS9TaXRlcy9wb3Btb3Rpb24iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBwZXJjZW50LCBvcGFjaXR5IH0gZnJvbSAnLi9zZXR0aW5ncy9kZWZhdWx0LXByb3BzJztcbmltcG9ydCB7IGhzbCBhcyBoc2xUZXJtcyB9IGZyb20gJy4vc2V0dGluZ3MvZGljdGlvbmFyeSc7XG5pbXBvcnQgeyBjcmVhdGVEZWxpbWl0ZWQsIGNyZWF0ZUZ1bmN0aW9uU3RyaW5nLCBnZXRDb2xvclZhbHVlcyB9IGZyb20gJy4uL2luYy91dGlscyc7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgZGVmYXVsdFByb3BzOiB7XG4gICAgSHVlOiB7XG4gICAgICBtaW46IDAsXG4gICAgICBtYXg6IDM2MFxuICAgIH0sXG4gICAgU2F0dXJhdGlvbjogcGVyY2VudCxcbiAgICBMaWdodG5lc3M6IHBlcmNlbnQsXG4gICAgQWxwaGE6IG9wYWNpdHlcbiAgfSxcblxuICB0ZXN0OiAodmFsdWUpID0+ICh2YWx1ZSAmJiB2YWx1ZS5pbmRleE9mKCdoc2wnKSA+IC0xKSxcblxuICBzcGxpdDogKHZhbHVlKSA9PiBnZXRDb2xvclZhbHVlcyh2YWx1ZSwgaHNsVGVybXMpLFxuXG4gIGNvbWJpbmU6ICh2YWx1ZXMpID0+IGNyZWF0ZUZ1bmN0aW9uU3RyaW5nKGNyZWF0ZURlbGltaXRlZCh2YWx1ZXMsIGhzbFRlcm1zLCAnLCAnLCAyKSwgJ2hzbGEnKVxufTtcbiJdfQ==

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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy92YWx1ZS10eXBlcy9weC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUE7Ozs7OztrQkFFZTtBQUNiLGdCQUFjO0FBQ1osVUFBTSxJQURNO0FBRVo7QUFGWTtBQURELEMiLCJmaWxlIjoicHguanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL21hdHRwZXJyeS9TaXRlcy9wb3Btb3Rpb24iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdW5pdFR5cGUgZnJvbSAnLi91bml0JztcblxuZXhwb3J0IGRlZmF1bHQge1xuICBkZWZhdWx0UHJvcHM6IHtcbiAgICB1bml0OiAncHgnLFxuICAgIHR5cGU6IHVuaXRUeXBlXG4gIH1cbn07Il19

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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy92YWx1ZS10eXBlcy9yZ2IuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBOztBQUNBOztBQUNBOztrQkFFZTtBQUNiLGdCQUFjO0FBQ1osMEJBRFk7QUFFWiw0QkFGWTtBQUdaLDJCQUhZO0FBSVo7QUFKWSxHQUREOztBQVFiLFFBQU0sVUFBQyxLQUFEO0FBQUEsV0FBWSxTQUFTLE1BQU0sT0FBTixDQUFjLEtBQWQsSUFBdUIsQ0FBQyxDQUE3QztBQUFBLEdBUk87O0FBVWIsU0FBTyxVQUFDLEtBQUQ7QUFBQSxXQUFXLDJCQUFlLEtBQWYsa0JBQVg7QUFBQSxHQVZNOztBQVliLFdBQVMsVUFBQyxNQUFEO0FBQUEsV0FBWSxpQ0FBcUIsNEJBQWdCLE1BQWhCLG1CQUFrQyxJQUFsQyxFQUF3QyxDQUF4QyxDQUFyQixFQUFpRSxNQUFqRSxDQUFaO0FBQUE7QUFaSSxDIiwiZmlsZSI6InJnYi5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvbWF0dHBlcnJ5L1NpdGVzL3BvcG1vdGlvbiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZURlbGltaXRlZCwgY3JlYXRlRnVuY3Rpb25TdHJpbmcsIGdldENvbG9yVmFsdWVzIH0gZnJvbSAnLi4vaW5jL3V0aWxzJztcbmltcG9ydCB7IHJnYiBhcyByZ2JUZXJtcyB9IGZyb20gJy4vc2V0dGluZ3MvZGljdGlvbmFyeSc7XG5pbXBvcnQgeyByZ2IgYXMgZGVmYXVsdFJHQiwgb3BhY2l0eSBhcyBkZWZhdWx0T3BhY2l0eSB9IGZyb20gJy4vc2V0dGluZ3MvZGVmYXVsdC1wcm9wcyc7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgZGVmYXVsdFByb3BzOiB7XG4gICAgUmVkOiBkZWZhdWx0UkdCLFxuICAgIEdyZWVuOiBkZWZhdWx0UkdCLFxuICAgIEJsdWU6IGRlZmF1bHRSR0IsXG4gICAgQWxwaGE6IGRlZmF1bHRPcGFjaXR5XG4gIH0sXG5cbiAgdGVzdDogKHZhbHVlKSA9PiAodmFsdWUgJiYgdmFsdWUuaW5kZXhPZigncmdiJykgPiAtMSksXG5cbiAgc3BsaXQ6ICh2YWx1ZSkgPT4gZ2V0Q29sb3JWYWx1ZXModmFsdWUsIHJnYlRlcm1zKSxcblxuICBjb21iaW5lOiAodmFsdWVzKSA9PiBjcmVhdGVGdW5jdGlvblN0cmluZyhjcmVhdGVEZWxpbWl0ZWQodmFsdWVzLCByZ2JUZXJtcywgJywgJywgMiksICdyZ2JhJylcbn07Il19

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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy92YWx1ZS10eXBlcy9zY2FsZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7a0JBQWU7QUFDYixnQkFBYztBQUNaLGFBQVM7QUFERztBQURELEMiLCJmaWxlIjoic2NhbGUuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL21hdHRwZXJyeS9TaXRlcy9wb3Btb3Rpb24iLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCB7XG4gIGRlZmF1bHRQcm9wczoge1xuICAgIGN1cnJlbnQ6IDFcbiAgfVxufTsiXX0=

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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy92YWx1ZS10eXBlcy9zaGFkb3cuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7Ozs7QUFDQTs7QUFDQTs7QUFDQTs7OztBQUVBLElBQU0sMEJBQTBCLG1CQUFZLEtBQVosQ0FBa0IsQ0FBbEIsRUFBcUIsQ0FBckIsQ0FBaEM7O2tCQUVlO0FBQ2IsNkJBQ0ssZ0JBQU0sWUFEWDtBQUVFLHVCQUZGO0FBR0UsdUJBSEY7QUFJRSw0QkFKRjtBQUtFO0FBTEYsSUFEYTs7QUFTYixTQUFPLFVBQUMsS0FBRCxFQUFXO0FBQ2hCLFFBQU0sT0FBTyxnQ0FBb0IsS0FBcEIsQ0FBYjtBQUNBLFFBQUksa0JBQWtCLEtBQXRCO0FBQ0EsUUFBSSxZQUFZLEVBQWhCO0FBQ0EsUUFBSSxhQUFhLEVBQWpCOztBQUVBLFNBQUssT0FBTCxDQUFhLFVBQUMsR0FBRCxFQUFNLENBQU4sRUFBWTs7QUFFdkIsVUFBSSxtQkFBbUIsZ0JBQU0sSUFBTixDQUFXLEdBQVgsQ0FBdkIsRUFBd0M7QUFDdEMsMEJBQWtCLElBQWxCO0FBQ0EscUJBQWEsR0FBYjs7O0FBR0QsT0FMRCxNQUtPO0FBQ0wsbUJBQVcsbUJBQVksQ0FBWixDQUFYLElBQTZCLEdBQTdCO0FBQ0Q7QUFDRixLQVZEOztBQVlBLFFBQU0sa0JBQWtCLGdCQUFNLEtBQU4sQ0FBWSxTQUFaLENBQXhCOztBQUVBLHdCQUFZLFVBQVosSUFBd0IsZ0NBQXhCO0FBQ0QsR0E5Qlk7O0FBZ0NiLFdBQVMsVUFBQyxNQUFEO0FBQUEsV0FBWSw0QkFBZ0IsTUFBaEIsRUFBd0IsdUJBQXhCLEVBQWlELEdBQWpELElBQXdELGdCQUFNLE9BQU4sQ0FBYyxNQUFkLENBQXBFO0FBQUE7QUFoQ0ksQyIsImZpbGUiOiJzaGFkb3cuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL21hdHRwZXJyeS9TaXRlcy9wb3Btb3Rpb24iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY29sb3IgZnJvbSAnLi9jb2xvcic7XG5pbXBvcnQgeyBkZWZhdWx0UHJvcHMgYXMgcHhEZWZhdWx0UHJvcHMgfSBmcm9tICcuL3B4JztcbmltcG9ydCB7IHNoYWRvdyBhcyBzaGFkb3dUZXJtcyB9IGZyb20gJy4vc2V0dGluZ3MvZGljdGlvbmFyeSc7XG5pbXBvcnQgeyBzcGxpdFNwYWNlRGVsaW1pdGVkLCBjcmVhdGVEZWxpbWl0ZWQgfSBmcm9tICcuLi9pbmMvdXRpbHMnO1xuXG5jb25zdCBzaGFkb3dXaXRob3V0Q29sb3JUZXJtcyA9IHNoYWRvd1Rlcm1zLnNsaWNlKDAsIDQpO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGRlZmF1bHRQcm9wczoge1xuICAgIC4uLmNvbG9yLmRlZmF1bHRQcm9wcyxcbiAgICBYOiBweERlZmF1bHRQcm9wcyxcbiAgICBZOiBweERlZmF1bHRQcm9wcyxcbiAgICBSYWRpdXM6IHB4RGVmYXVsdFByb3BzLFxuICAgIFNwcmVhZDogcHhEZWZhdWx0UHJvcHNcbiAgfSxcblxuICBzcGxpdDogKHZhbHVlKSA9PiB7XG4gICAgY29uc3QgYml0cyA9IHNwbGl0U3BhY2VEZWxpbWl0ZWQodmFsdWUpO1xuICAgIGxldCBoYXNSZWFjaGVkQ29sb3IgPSBmYWxzZTtcbiAgICBsZXQgY29sb3JQcm9wID0gJyc7XG4gICAgbGV0IHNwbGl0VmFsdWUgPSB7fTtcblxuICAgIGJpdHMuZm9yRWFjaCgoYml0LCBpKSA9PiB7XG4gICAgICAvLyBJZiB3ZSd2ZSByZWFjaGVkIHRoZSBjb2xvciBwcm9wcywgYXBwZW5kIHRvIGNvbG9yIHN0cmluZ1xuICAgICAgaWYgKGhhc1JlYWNoZWRDb2xvciB8fCBjb2xvci50ZXN0KGJpdCkpIHtcbiAgICAgICAgaGFzUmVhY2hlZENvbG9yID0gdHJ1ZTtcbiAgICAgICAgY29sb3JQcm9wICs9IGJpdDtcblxuICAgICAgLy8gRWxzZSBwcm9jZXNzIHNoYWRvdyB2YWx1ZVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc3BsaXRWYWx1ZVtzaGFkb3dUZXJtc1tpXV0gPSBiaXQ7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBjb25zdCBzcGxpdENvbG9yUHJvcHMgPSBjb2xvci5zcGxpdChjb2xvclByb3ApO1xuXG4gICAgcmV0dXJuIHsgLi4uc3BsaXRWYWx1ZSwgc3BsaXRDb2xvclByb3BzIH07XG4gIH0sXG5cbiAgY29tYmluZTogKHZhbHVlcykgPT4gY3JlYXRlRGVsaW1pdGVkKHZhbHVlcywgc2hhZG93V2l0aG91dENvbG9yVGVybXMsICcgJykgKyBjb2xvci5jb21iaW5lKHZhbHVlcylcbn07XG4iXX0=

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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy92YWx1ZS10eXBlcy91bml0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQTs7a0JBRWU7QUFDYixRQUFNLFVBQVUsUUFBVixFQUFvQjtBQUFBLDRCQUNOLDZCQUFpQixRQUFqQixDQURNOztBQUFBLFFBQ2hCLEtBRGdCLHFCQUNoQixLQURnQjs7QUFFeEIsV0FBUSxrQkFBTSxLQUFOLEtBQWdCLENBQUMsTUFBTSxLQUFOLENBQWxCLEdBQWtDLElBQWxDLEdBQXlDLEtBQWhEO0FBQ0QsR0FKWTs7QUFNYixTQUFPLFVBQVUsUUFBVixFQUFvQixNQUFwQixFQUE0QjtBQUFBLDZCQUNULDZCQUFpQixRQUFqQixDQURTOztBQUFBLFFBQ3pCLEtBRHlCLHNCQUN6QixLQUR5QjtBQUFBLFFBQ2xCLElBRGtCLHNCQUNsQixJQURrQjs7O0FBR2pDLFFBQUksUUFBUSxTQUFTLElBQXJCLEVBQTJCO0FBQ3pCLGFBQU8sSUFBUCxHQUFjLElBQWQ7QUFDRDs7QUFFRCxXQUFPLEtBQVA7QUFDRCxHQWRZOztBQWdCYixhQUFXLFVBQUMsTUFBRCxFQUFTLE1BQVQ7QUFBQSxXQUFvQixVQUFVLE9BQU8sSUFBUCxJQUFlLEVBQXpCLENBQXBCO0FBQUE7QUFoQkUsQyIsImZpbGUiOiJ1bml0LmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9tYXR0cGVycnkvU2l0ZXMvcG9wbW90aW9uIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgaXNOdW0sIGZpbmRWYWx1ZUFuZFVuaXQgfSBmcm9tICcuLi9pbmMvdXRpbHMnO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIHRlc3Q6IGZ1bmN0aW9uICh1bnBhcnNlZCkge1xuICAgIGNvbnN0IHsgdmFsdWUgfSA9IGZpbmRWYWx1ZUFuZFVuaXQodW5wYXJzZWQpO1xuICAgIHJldHVybiAoaXNOdW0odmFsdWUpICYmICFpc05hTih2YWx1ZSkpID8gdHJ1ZSA6IGZhbHNlO1xuICB9LFxuXG4gIHBhcnNlOiBmdW5jdGlvbiAodW5wYXJzZWQsIHBhcmVudCkge1xuICAgIGNvbnN0IHsgdmFsdWUsIHVuaXQgfSA9IGZpbmRWYWx1ZUFuZFVuaXQodW5wYXJzZWQpO1xuXG4gICAgaWYgKHVuaXQgJiYgdW5pdCAhPT0gdW5pdCkge1xuICAgICAgcGFyZW50LnVuaXQgPSB1bml0O1xuICAgIH1cblxuICAgIHJldHVybiB2YWx1ZTtcbiAgfSxcblxuICBzZXJpYWxpemU6IChwYXJzZWQsIHBhcmVudCkgPT4gcGFyc2VkICsgKHBhcmVudC51bml0IHx8ICcnKVxufTtcbiJdfQ==

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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9pbmMvdHJhbnNmb3JtZXJzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7O0FBRU8sSUFBTSxzQ0FBZSxVQUFDLEtBQUQsRUFBUSxNQUFSLEVBQW1CO0FBQzdDLE1BQU0sWUFBWSxNQUFNLE1BQXhCO0FBQ0EsTUFBTSxhQUFhLFlBQVksQ0FBL0I7O0FBRUEsU0FBTyxVQUFDLEtBQUQsRUFBVzs7QUFFaEIsUUFBSSxTQUFTLE1BQU0sQ0FBTixDQUFiLEVBQXVCO0FBQ3JCLGFBQU8sT0FBTyxDQUFQLENBQVA7QUFDRDs7O0FBR0QsUUFBSSxTQUFTLE1BQU0sVUFBTixDQUFiLEVBQWdDO0FBQzlCLGFBQU8sT0FBTyxVQUFQLENBQVA7QUFDRDs7O0FBR0QsU0FBSyxJQUFJLElBQUksQ0FBYixFQUFnQixJQUFJLFNBQXBCLEVBQStCLEdBQS9CLEVBQW9DO0FBQ2xDLFVBQUksUUFBUSxNQUFNLENBQU4sQ0FBUixJQUFvQixNQUFNLFVBQTlCLEVBQTBDO0FBQ3hDLFlBQU0sa0JBQWtCLGdDQUFxQixLQUFyQixFQUE0QixNQUFNLElBQUksQ0FBVixDQUE1QixFQUEwQyxNQUFNLENBQU4sQ0FBMUMsQ0FBeEI7QUFDQSxlQUFPLGdDQUFxQixlQUFyQixFQUFzQyxPQUFPLElBQUksQ0FBWCxDQUF0QyxFQUFxRCxPQUFPLENBQVAsQ0FBckQsQ0FBUDtBQUNEO0FBQ0Y7QUFDRixHQWxCRDtBQW1CRCxDQXZCTTs7QUF5QkEsSUFBTSwwQ0FBaUIsVUFBQyxDQUFELEVBQUksR0FBSixRQUF3QjtBQUFBLE1BQWIsTUFBYSxRQUFiLE1BQWE7O0FBQ3BELE1BQU0sVUFBVyxPQUFPLE9BQVIsR0FBbUIsT0FBTyxPQUFQLENBQWUsT0FBbEMsR0FBNEMsQ0FBNUQ7QUFDQSxNQUFNLFVBQVcsT0FBTyxPQUFSLEdBQW1CLE9BQU8sT0FBUCxDQUFlLE9BQWxDLEdBQTRDLENBQTVEOztBQUVBLFNBQU8scUNBQTBCO0FBQy9CLE9BQUcsT0FENEI7QUFFL0IsT0FBRztBQUY0QixHQUExQixFQUdKLE9BQU8sS0FBUCxDQUFhLE9BSFQsRUFHa0IsT0FBTyxRQUFQLENBQWdCLE9BSGxDLEVBRzJDLEdBSDNDLENBQVA7QUFJRCxDQVJNOzs7Ozs7Ozs7QUFpQkEsSUFBTSx3QkFBUSxVQUFDLFlBQUQsRUFBa0I7QUFDckMsTUFBTSxrQkFBa0IsYUFBYSxNQUFyQztBQUNBLE1BQUksSUFBSSxDQUFSOzs7Ozs7OztBQVFBLFNBQU8sVUFBQyxDQUFELEVBQUksR0FBSixFQUFTLENBQVQsRUFBZTtBQUNwQixTQUFLLElBQUksQ0FBVCxFQUFZLElBQUksZUFBaEIsRUFBaUMsR0FBakMsRUFBc0M7QUFDcEMsVUFBSSxhQUFhLENBQWIsRUFBZ0IsQ0FBaEIsRUFBbUIsR0FBbkIsRUFBd0IsQ0FBeEIsQ0FBSjtBQUNEOztBQUVELFdBQU8sQ0FBUDtBQUNELEdBTkQ7QUFPRCxDQWpCTSIsImZpbGUiOiJ0cmFuc2Zvcm1lcnMuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL21hdHRwZXJyeS9TaXRlcy9wb3Btb3Rpb24iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBnZXRQcm9ncmVzc0Zyb21WYWx1ZSwgZ2V0VmFsdWVGcm9tUHJvZ3Jlc3MsIHBvaW50RnJvbUFuZ2xlQW5kRGlzdGFuY2UgfSBmcm9tICcuLi9pbmMvY2FsYyc7XG5cbmV4cG9ydCBjb25zdCBjcmVhdGVNYXBwZXIgPSAoaW5wdXQsIG91dHB1dCkgPT4ge1xuICBjb25zdCBtYXBMZW5ndGggPSBpbnB1dC5sZW5ndGg7XG4gIGNvbnN0IGZpbmFsSW5kZXggPSBtYXBMZW5ndGggLSAxO1xuXG4gIHJldHVybiAodmFsdWUpID0+IHtcbiAgICAvLyBJZiB2YWx1ZSBvdXRzaWRlIG1pbmltdW0gaW5wdXQgcmFuZ2UsIHF1aWNrbHkgcmV0dXJuXG4gICAgaWYgKHZhbHVlIDw9IGlucHV0WzBdKSB7XG4gICAgICByZXR1cm4gb3V0cHV0WzBdO1xuICAgIH1cblxuICAgIC8vIElmIHZhbHVlIG91dHNpZGUgbWF4aW11bSBpbnB1dCByYW5nZSwgcXVpY2tseSByZXR1cm5cbiAgICBpZiAodmFsdWUgPj0gaW5wdXRbZmluYWxJbmRleF0pIHtcbiAgICAgIHJldHVybiBvdXRwdXRbZmluYWxJbmRleF07XG4gICAgfVxuXG4gICAgLy8gSWYgd2l0aGluIG92ZXJhbGwgaW5wdXQgcmFuZ2UsIGZpbmQgc3BlY2lmaWMgcmFuZ2VcbiAgICBmb3IgKGxldCBpID0gMTsgaSA8IG1hcExlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAodmFsdWUgPCBpbnB1dFtpXSB8fCBpID09PSBmaW5hbEluZGV4KSB7XG4gICAgICAgIGNvbnN0IHByb2dyZXNzSW5SYW5nZSA9IGdldFByb2dyZXNzRnJvbVZhbHVlKHZhbHVlLCBpbnB1dFtpIC0gMV0sIGlucHV0W2ldKTtcbiAgICAgICAgcmV0dXJuIGdldFZhbHVlRnJvbVByb2dyZXNzKHByb2dyZXNzSW5SYW5nZSwgb3V0cHV0W2kgLSAxXSwgb3V0cHV0W2ldKTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG59O1xuXG5leHBvcnQgY29uc3QgY2lyY3VsYXJNb3Rpb24gPSAodiwga2V5LCB7IHZhbHVlcyB9KSA9PiB7XG4gIGNvbnN0IG9yaWdpblggPSAodmFsdWVzLm9yaWdpblgpID8gdmFsdWVzLm9yaWdpblguY3VycmVudCA6IDA7XG4gIGNvbnN0IG9yaWdpblkgPSAodmFsdWVzLm9yaWdpblkpID8gdmFsdWVzLm9yaWdpblkuY3VycmVudCA6IDA7XG5cbiAgcmV0dXJuIHBvaW50RnJvbUFuZ2xlQW5kRGlzdGFuY2Uoe1xuICAgIHg6IG9yaWdpblgsXG4gICAgeTogb3JpZ2luWSBcbiAgfSwgdmFsdWVzLmFuZ2xlLmN1cnJlbnQsIHZhbHVlcy5kaXN0YW5jZS5jdXJyZW50KVtrZXldO1xufTtcblxuLypcbiAgQ29tYmluZSB0cmFuc2Zvcm1lcnMgaW50byBvbmUgZnVuY3Rpb24gdGhhdCBjYWxscyBldmVyeVxuICB0cmFuc2Zvcm1lciBpbiB0aGUgYXJyYXkgYW5kIHJldHVybnMgdGhlIHJlc3VsdFxuXG4gIEBwYXJhbSBbYXJyYXldXG4gIEByZXR1cm4gW2Z1bmN0aW9uXVxuKi9cbmV4cG9ydCBjb25zdCBjaGFpbiA9ICh0cmFuc2Zvcm1lcnMpID0+IHtcbiAgY29uc3QgbnVtVHJhbnNmb3JtZXJzID0gdHJhbnNmb3JtZXJzLmxlbmd0aDtcbiAgbGV0IGkgPSAwO1xuXG4gIC8qXG4gICAgQHBhcmFtIFtudW1iZXJdXG4gICAgQHBhcmFtIFtzdHJpbmddXG4gICAgQHBhcmFtIFtBY3Rpb25dXG4gICAgQHJldHVybiBbbnVtYmVyXVxuICAqL1xuICByZXR1cm4gKHYsIGtleSwgYSkgPT4ge1xuICAgIGZvciAoaSA9IDA7IGkgPCBudW1UcmFuc2Zvcm1lcnM7IGkrKykge1xuICAgICAgdiA9IHRyYW5zZm9ybWVyc1tpXSh2LCBrZXksIGEpO1xuICAgIH1cblxuICAgIHJldHVybiB2O1xuICB9O1xufTsiXX0=

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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy92YWx1ZS10eXBlcy9kZXRlY3QuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOztBQUNBOzs7Ozs7QUFFQSxJQUFNLHVCQUF1QiwwQkFBaUIsTUFBOUM7O2tCQUVlLFVBQUMsS0FBRCxFQUFXO0FBQ3hCLE9BQUssSUFBSSxJQUFJLENBQWIsRUFBZ0IsSUFBSSxvQkFBcEIsRUFBMEMsR0FBMUMsRUFBK0M7QUFDN0MsUUFBTSxZQUFZLE1BQU0sMEJBQWlCLENBQWpCLENBQU4sQ0FBbEI7QUFDQSxRQUFJLHFCQUFTLFNBQVQsQ0FBSixFQUF5QjtBQUN2QixVQUFJLGdCQUFVLElBQVYsQ0FBZSxTQUFmLENBQUosRUFBK0I7QUFDN0I7QUFDRCxPQUZELE1BRU8sSUFBSSxrQkFBWSxJQUFaLENBQWlCLFNBQWpCLENBQUosRUFBaUM7QUFDdEM7QUFDRCxPQUZNLE1BRUEsSUFBSSxlQUFTLElBQVQsQ0FBYyxTQUFkLENBQUosRUFBOEI7QUFDbkM7QUFDRDtBQUNGO0FBQ0Y7QUFDRixDIiwiZmlsZSI6ImRldGVjdC5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvbWF0dHBlcnJ5L1NpdGVzL3BvcG1vdGlvbiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjb2xvclR5cGUgZnJvbSAnLi4vdmFsdWUtdHlwZXMvY29sb3InO1xuaW1wb3J0IGNvbXBsZXhUeXBlIGZyb20gJy4uL3ZhbHVlLXR5cGVzL2NvbXBsZXgnO1xuaW1wb3J0IHVuaXRUeXBlIGZyb20gJy4uL3ZhbHVlLXR5cGVzL3VuaXQnO1xuaW1wb3J0IHsgaXNTdHJpbmcgfSBmcm9tICcuLi9pbmMvdXRpbHMnO1xuaW1wb3J0IE5VTUVSSUNBTF9WQUxVRVMgZnJvbSAnLi4vaW5jL251bWVyaWNhbC12YWx1ZXMnO1xuXG5jb25zdCBOVU1fTlVNRVJJQ0FMX1ZBTFVFUyA9IE5VTUVSSUNBTF9WQUxVRVMubGVuZ3RoO1xuXG5leHBvcnQgZGVmYXVsdCAodmFsdWUpID0+IHtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBOVU1fTlVNRVJJQ0FMX1ZBTFVFUzsgaSsrKSB7XG4gICAgY29uc3QgdmFsdWVQcm9wID0gdmFsdWVbTlVNRVJJQ0FMX1ZBTFVFU1tpXV07XG4gICAgaWYgKGlzU3RyaW5nKHZhbHVlUHJvcCkpIHtcbiAgICAgIGlmIChjb2xvclR5cGUudGVzdCh2YWx1ZVByb3ApKSB7XG4gICAgICAgIHJldHVybiBjb2xvclR5cGU7XG4gICAgICB9IGVsc2UgaWYgKGNvbXBsZXhUeXBlLnRlc3QodmFsdWVQcm9wKSkge1xuICAgICAgICByZXR1cm4gY29tcGxleFR5cGU7XG4gICAgICB9IGVsc2UgaWYgKHVuaXRUeXBlLnRlc3QodmFsdWVQcm9wKSkge1xuICAgICAgICByZXR1cm4gdW5pdFR5cGU7XG4gICAgICB9XG4gICAgfVxuICB9XG59OyJdfQ==

/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports.default = ['current', 'from', 'to', 'velocity'];
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9pbmMvbnVtZXJpY2FsLXZhbHVlcy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7a0JBQWUsQ0FBQyxTQUFELEVBQVksTUFBWixFQUFvQixJQUFwQixFQUEwQixVQUExQixDIiwiZmlsZSI6Im51bWVyaWNhbC12YWx1ZXMuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL21hdHRwZXJyeS9TaXRlcy9wb3Btb3Rpb24iLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBbJ2N1cnJlbnQnLCAnZnJvbScsICd0bycsICd2ZWxvY2l0eSddOyJdfQ==

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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9pbmMvZGV0ZWN0LWFkYXB0ZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7a0JBRWUsVUFBQyxPQUFELEVBQWE7QUFDMUIsTUFBSSx5Q0FBSjs7O0FBR0EsTUFBSSxtQkFBbUIsV0FBbkIsSUFBa0MsUUFBUSxPQUFSLEtBQW9CLEtBQTFELEVBQWlFO0FBQy9EOzs7QUFHRCxHQUpELE1BSU8sSUFBSSxtQkFBbUIsVUFBdkIsRUFBbUM7QUFDeEMsUUFBSSxRQUFRLE9BQVIsS0FBb0IsTUFBeEIsRUFBZ0M7QUFDOUI7QUFDRCxLQUZELE1BRU87QUFDTDtBQUNEO0FBQ0Y7O0FBRUQsU0FBTyxlQUFQO0FBQ0QsQyIsImZpbGUiOiJkZXRlY3QtYWRhcHRlci5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvbWF0dHBlcnJ5L1NpdGVzL3BvcG1vdGlvbiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBvYmplY3RBZGFwdGVyIGZyb20gJy4uL2FkYXB0ZXIvb2JqZWN0LWFkYXB0ZXInO1xuaW1wb3J0IGNzc0FkYXB0ZXIgZnJvbSAnLi4vYWRhcHRlci9jc3MtYWRhcHRlcic7XG5pbXBvcnQgc3ZnQWRhcHRlciBmcm9tICcuLi9hZGFwdGVyL3N2Zy1hZGFwdGVyJztcbmltcG9ydCBzdmdQYXRoQWRhcHRlciBmcm9tICcuLi9hZGFwdGVyL3N2Zy1wYXRoLWFkYXB0ZXInO1xuXG5leHBvcnQgZGVmYXVsdCAoZWxlbWVudCkgPT4ge1xuICBsZXQgZGV0ZWN0ZWRBZGFwdGVyID0gb2JqZWN0QWRhcHRlcjtcblxuICAvLyBJZiBIVE1MRWxlbWVudCBsb2FkIENTU1xuICBpZiAoZWxlbWVudCBpbnN0YW5jZW9mIEhUTUxFbGVtZW50IHx8IGVsZW1lbnQudGFnTmFtZSA9PT0gJ3N2ZycpIHtcbiAgICBkZXRlY3RlZEFkYXB0ZXIgPSBjc3NBZGFwdGVyO1xuXG4gIC8vIE9yIFNWR1xuICB9IGVsc2UgaWYgKGVsZW1lbnQgaW5zdGFuY2VvZiBTVkdFbGVtZW50KSB7XG4gICAgaWYgKGVsZW1lbnQudGFnTmFtZSA9PT0gJ3BhdGgnKSB7XG4gICAgICBkZXRlY3RlZEFkYXB0ZXIgPSBzdmdQYXRoQWRhcHRlcjtcbiAgICB9IGVsc2Uge1xuICAgICAgZGV0ZWN0ZWRBZGFwdGVyID0gc3ZnQWRhcHRlcjtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZGV0ZWN0ZWRBZGFwdGVyO1xufTtcbiJdfQ==

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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hY3Rpb25zL2Zsb3cvZ2VuZXJhdGUtYmxlbmQtY3VydmUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBOztBQUVBLElBQU0saUJBQWlCLEVBQXZCOztrQkFFZSxVQUFDLFNBQUQsRUFBWSxRQUFaLEVBQXNCLFNBQXRCLEVBQWlDLEdBQWpDLEVBQXlDO0FBQ3RELE1BQU0sV0FBVyxVQUFVLE1BQVYsQ0FBaUIsR0FBakIsQ0FBakI7O0FBRUEsTUFBSSxVQUFVLE9BQVYsS0FBc0IsU0FBdEIsSUFBbUMsQ0FBQyxRQUF4QyxFQUFrRDtBQUNoRDtBQUNEOztBQUVELE1BQU0sVUFBVSxTQUFTLE1BQVQsQ0FBZ0IsR0FBaEIsQ0FBaEI7QUFDQSxNQUFNLG1CQUFtQixTQUFTLEtBQVQsR0FBaUIsU0FBUyxRQUFuRDtBQUNBLE1BQU0sa0JBQWtCLEtBQUssR0FBTCxDQUFTLG1CQUFtQixVQUFVLE9BQXRDLEVBQStDLFFBQVEsS0FBUixHQUFnQixRQUFRLFFBQXZFLENBQXhCO0FBQ0EsTUFBTSxxQkFBcUIsZ0JBQUssb0JBQVMsZ0NBQXFCLGVBQXJCLEVBQXNDLENBQXRDLEVBQXlDLFFBQVEsS0FBUixHQUFnQixRQUFRLFFBQWpFLENBQVQsRUFBcUYsQ0FBckYsRUFBd0YsQ0FBeEYsQ0FBTCxFQUFpRyxRQUFRLElBQXpHLEVBQStHLFFBQVEsRUFBdkgsRUFBMkgsUUFBUSxJQUFuSSxDQUEzQjtBQUNBLE1BQU0seUJBQXlCLFFBQVEsSUFBUixHQUFlLFNBQVMsT0FBdkQ7QUFDQSxNQUFNLHVCQUF1QixxQkFBcUIsU0FBUyxFQUEzRDtBQUNBLE1BQU0sa0JBQWtCLDJCQUEyQixvQkFBbkQ7O0FBRUEsTUFBTSxhQUFhLENBQUMsQ0FBQyxDQUFELEVBQUksU0FBUyxPQUFiLENBQUQsRUFBd0IsQ0FBQyxlQUFELEVBQWtCLGtCQUFsQixDQUF4QixDQUFuQjs7O0FBR0EsTUFBSSxlQUFKLEVBQXFCO0FBQ25CLFFBQU0saUJBQWlCLGtCQUFrQixjQUF6QztBQUNBLFFBQUksVUFBVSxLQUFkO0FBQ0EsUUFBSSxVQUFVLEtBQWQ7O0FBRUEsU0FBSyxJQUFJLElBQUksQ0FBYixFQUFnQixLQUFLLGNBQXJCLEVBQXFDLEdBQXJDLEVBQTBDO0FBQ3hDLFVBQU0sV0FBVyxJQUFJLGNBQXJCO0FBQ0EsVUFBTSxZQUFZLGdCQUFLLGdDQUFxQixVQUFVLE9BQVYsR0FBb0IsUUFBekMsRUFBbUQsU0FBUyxLQUE1RCxFQUFtRSxTQUFTLFFBQTVFLENBQUwsRUFBNEYsU0FBUyxJQUFyRyxFQUEyRyxTQUFTLEVBQXBILEVBQXdILFNBQVMsSUFBakksQ0FBbEI7QUFDQSxVQUFNLFdBQVcsZ0JBQUssZ0NBQXFCLFNBQVMsT0FBVCxHQUFtQixRQUF4QyxFQUFrRCxRQUFRLEtBQTFELEVBQWlFLFFBQVEsUUFBekUsQ0FBTCxFQUF5RixRQUFRLElBQWpHLEVBQXVHLFFBQVEsRUFBL0csRUFBbUgsUUFBUSxJQUEzSCxDQUFqQjs7QUFFQSxVQUFJLENBQUMsT0FBRCxLQUFjLDBCQUEwQixXQUFXLFNBQXRDLElBQXFELENBQUMsc0JBQUQsSUFBMkIsV0FBVyxTQUF4RyxDQUFKLEVBQXlIO0FBQ3ZILG1CQUFXLE1BQVgsQ0FBa0IsQ0FBbEIsRUFBcUIsQ0FBckIsRUFBd0IsQ0FBQyxRQUFELEVBQVcsUUFBWCxDQUF4QjtBQUNBLGtCQUFVLElBQVY7QUFDRDs7QUFFRCxVQUFJLFlBQWEsMEJBQTBCLFdBQVcsU0FBUyxPQUEvQyxJQUE0RCxDQUFDLHNCQUFELElBQTJCLFdBQVcsU0FBUyxPQUF2SCxDQUFKLEVBQXNJO0FBQ3BJLG1CQUFXLENBQVgsSUFBZ0IsQ0FBQyxRQUFELEVBQVcsUUFBWCxDQUFoQjtBQUNBLGtCQUFVLElBQVY7QUFDRDs7QUFFRCxVQUFJLE9BQUosRUFBYTtBQUNYO0FBQ0Q7QUFDRjtBQUNGOztBQUVELE1BQUksV0FBVyxNQUFYLEtBQXNCLENBQTFCLEVBQTZCOztBQUUzQixXQUFPLFlBQU07QUFDWCxVQUFNLGdCQUFnQixvQkFBUyxnQ0FBcUIsU0FBUyxPQUE5QixFQUF1QyxXQUFXLENBQVgsRUFBYyxDQUFkLENBQXZDLEVBQXlELFdBQVcsQ0FBWCxFQUFjLENBQWQsQ0FBekQsQ0FBVCxFQUFxRixDQUFyRixFQUF3RixDQUF4RixDQUF0Qjs7QUFFQSxVQUFJLGtCQUFrQixDQUF0QixFQUF5QjtBQUN2QixrQkFBVSxVQUFWLEdBQXVCLFNBQXZCO0FBQ0Q7O0FBRUQsYUFBTyxnQkFBSyxhQUFMLEVBQW9CLFNBQVMsT0FBN0IsRUFBc0MsUUFBUSxPQUE5QyxFQUF1RCxRQUFRLElBQS9ELENBQVA7QUFDRCxLQVJEO0FBU0QsR0FYRCxNQVdPOztBQUVMLFdBQU8sWUFBTTtBQUNYLFVBQU0sZ0JBQWdCLG9CQUFTLGdDQUFxQixTQUFTLE9BQTlCLEVBQXVDLFdBQVcsQ0FBWCxFQUFjLENBQWQsQ0FBdkMsRUFBeUQsV0FBVyxDQUFYLEVBQWMsQ0FBZCxDQUF6RCxDQUFULEVBQXFGLENBQXJGLEVBQXdGLENBQXhGLENBQXRCO0FBQ0EsVUFBTSxLQUFLLGdDQUFxQixhQUFyQixFQUFvQyxXQUFXLENBQVgsRUFBYyxDQUFkLENBQXBDLEVBQXNELFdBQVcsQ0FBWCxFQUFjLENBQWQsQ0FBdEQsQ0FBWDtBQUNBLFVBQU0sS0FBSyxnQ0FBcUIsYUFBckIsRUFBb0MsV0FBVyxDQUFYLEVBQWMsQ0FBZCxDQUFwQyxFQUFzRCxXQUFXLENBQVgsRUFBYyxDQUFkLENBQXRELENBQVg7O0FBRUEsVUFBSSxrQkFBa0IsQ0FBdEIsRUFBeUI7QUFDdkIsa0JBQVUsVUFBVixHQUF1QixTQUF2QjtBQUNBLGVBQU8sUUFBUSxPQUFmO0FBQ0Q7O0FBRUQsYUFBTyxnQ0FBcUIsYUFBckIsRUFBb0MsRUFBcEMsRUFBd0MsRUFBeEMsQ0FBUDtBQUNELEtBWEQ7QUFZRDtBQUNGLEMiLCJmaWxlIjoiZ2VuZXJhdGUtYmxlbmQtY3VydmUuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL21hdHRwZXJyeS9TaXRlcy9wb3Btb3Rpb24iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBnZXRQcm9ncmVzc0Zyb21WYWx1ZSwgZ2V0VmFsdWVGcm9tUHJvZ3Jlc3MsIGVhc2UsIHJlc3RyaWN0IH0gZnJvbSAnLi4vLi4vaW5jL2NhbGMnO1xuXG5jb25zdCBCTEVORF9BQ0NVUkFDWSA9IDYwO1xuXG5leHBvcnQgZGVmYXVsdCAob3V0QWN0aW9uLCBpbkFjdGlvbiwgZmxvd1ZhbHVlLCBrZXkpID0+IHtcbiAgY29uc3Qgb3V0VmFsdWUgPSBvdXRBY3Rpb24udmFsdWVzW2tleV07XG5cbiAgaWYgKG91dEFjdGlvbi5lbGFwc2VkID09PSB1bmRlZmluZWQgfHwgIW91dFZhbHVlKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgY29uc3QgaW5WYWx1ZSA9IGluQWN0aW9uLnZhbHVlc1trZXldO1xuICBjb25zdCBvdXRUb3RhbER1cmF0aW9uID0gb3V0VmFsdWUuZGVsYXkgKyBvdXRWYWx1ZS5kdXJhdGlvbjtcbiAgY29uc3QgdGltZVVudGlsT3V0RW5kID0gTWF0aC5taW4ob3V0VG90YWxEdXJhdGlvbiAtIG91dEFjdGlvbi5lbGFwc2VkLCBpblZhbHVlLmRlbGF5ICsgaW5WYWx1ZS5kdXJhdGlvbik7XG4gIGNvbnN0IGluUG9zaXRpb25BdE91dEVuZCA9IGVhc2UocmVzdHJpY3QoZ2V0UHJvZ3Jlc3NGcm9tVmFsdWUodGltZVVudGlsT3V0RW5kLCAwLCBpblZhbHVlLmRlbGF5ICsgaW5WYWx1ZS5kdXJhdGlvbiksIDAsIDEpLCBpblZhbHVlLmZyb20sIGluVmFsdWUudG8sIGluVmFsdWUuZWFzZSk7XG4gIGNvbnN0IGluQmlnZ2VyVGhhbk91dEF0U3RhcnQgPSBpblZhbHVlLmZyb20gPiBvdXRWYWx1ZS5jdXJyZW50O1xuICBjb25zdCBpbkJpZ2dlclRoYW5PdXRBdEVuZCA9IGluUG9zaXRpb25BdE91dEVuZCA+IG91dFZhbHVlLnRvO1xuICBjb25zdCB0d2VlbnNJbnRlcnNlY3QgPSBpbkJpZ2dlclRoYW5PdXRBdFN0YXJ0ICE9PSBpbkJpZ2dlclRoYW5PdXRBdEVuZDtcblxuICBjb25zdCBibGVuZEN1cnZlID0gW1swLCBvdXRWYWx1ZS5jdXJyZW50XSwgW3RpbWVVbnRpbE91dEVuZCwgaW5Qb3NpdGlvbkF0T3V0RW5kXV07XG5cbiAgLy8gSWYgdHdlZW5zIGludGVyc2VjdCwgcmVzb2x2ZSB0d2VlbnMgYXQgYSByZXNvbHV0aW9uIHRvIGZpbmQgZXhhY3RseSB3aGVyZVxuICBpZiAodHdlZW5zSW50ZXJzZWN0KSB7XG4gICAgY29uc3QgdGltZVN0ZXBUb1Rlc3QgPSB0aW1lVW50aWxPdXRFbmQgLyBCTEVORF9BQ0NVUkFDWTtcbiAgICBsZXQgZm91bmRQMSA9IGZhbHNlO1xuICAgIGxldCBmb3VuZFAyID0gZmFsc2U7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8PSBCTEVORF9BQ0NVUkFDWTsgaSsrKSB7XG4gICAgICBjb25zdCB0aW1lU3RlcCA9IGkgKiB0aW1lU3RlcFRvVGVzdDtcbiAgICAgIGNvbnN0IG91dEF0VGltZSA9IGVhc2UoZ2V0UHJvZ3Jlc3NGcm9tVmFsdWUob3V0QWN0aW9uLmVsYXBzZWQgKyB0aW1lU3RlcCwgb3V0VmFsdWUuZGVsYXksIG91dFZhbHVlLmR1cmF0aW9uKSwgb3V0VmFsdWUuZnJvbSwgb3V0VmFsdWUudG8sIG91dFZhbHVlLmVhc2UpO1xuICAgICAgY29uc3QgaW5BdFRpbWUgPSBlYXNlKGdldFByb2dyZXNzRnJvbVZhbHVlKGluQWN0aW9uLmVsYXBzZWQgKyB0aW1lU3RlcCwgaW5WYWx1ZS5kZWxheSwgaW5WYWx1ZS5kdXJhdGlvbiksIGluVmFsdWUuZnJvbSwgaW5WYWx1ZS50bywgaW5WYWx1ZS5lYXNlKTtcblxuICAgICAgaWYgKCFmb3VuZFAxICYmICgoaW5CaWdnZXJUaGFuT3V0QXRTdGFydCAmJiBpbkF0VGltZSA8IG91dEF0VGltZSkgfHwgKCFpbkJpZ2dlclRoYW5PdXRBdFN0YXJ0ICYmIGluQXRUaW1lID4gb3V0QXRUaW1lKSkpIHtcbiAgICAgICAgYmxlbmRDdXJ2ZS5zcGxpY2UoMSwgMCwgW3RpbWVTdGVwLCBpbkF0VGltZV0pO1xuICAgICAgICBmb3VuZFAxID0gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKGZvdW5kUDEgJiYgKChpbkJpZ2dlclRoYW5PdXRBdFN0YXJ0ICYmIGluQXRUaW1lIDwgb3V0VmFsdWUuY3VycmVudCkgfHwgKCFpbkJpZ2dlclRoYW5PdXRBdFN0YXJ0ICYmIGluQXRUaW1lID4gb3V0VmFsdWUuY3VycmVudCkpKSB7XG4gICAgICAgIGJsZW5kQ3VydmVbMl0gPSBbdGltZVN0ZXAsIGluQXRUaW1lXTtcbiAgICAgICAgZm91bmRQMiA9IHRydWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChmb3VuZFAyKSB7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGlmIChibGVuZEN1cnZlLmxlbmd0aCA9PT0gMikge1xuICAgIC8vIFBhc3MgYmV0d2VlbiB0d2VlbnMgdXNpbmcgaW5jb21pbmcgZWFzaW5nIGlmIGp1c3QgdHdvIHBvaW50c1xuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICBjb25zdCBibGVuZFByb2dyZXNzID0gcmVzdHJpY3QoZ2V0UHJvZ3Jlc3NGcm9tVmFsdWUoaW5BY3Rpb24uZWxhcHNlZCwgYmxlbmRDdXJ2ZVswXVswXSwgYmxlbmRDdXJ2ZVsxXVswXSksIDAsIDEpO1xuXG4gICAgICBpZiAoYmxlbmRQcm9ncmVzcyA9PT0gMSkge1xuICAgICAgICBmbG93VmFsdWUuYmxlbmRDdXJ2ZSA9IHVuZGVmaW5lZDtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGVhc2UoYmxlbmRQcm9ncmVzcywgb3V0VmFsdWUuY3VycmVudCwgaW5WYWx1ZS5jdXJyZW50LCBpblZhbHVlLmVhc2UpO1xuICAgIH07XG4gIH0gZWxzZSB7XG4gICAgLy8gUGFzcyBiZXR3ZWVuIHR3ZWVucyB1c2luZyBiZXppZXIgaW50ZXJwb2xhdGlvblxuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICBjb25zdCBibGVuZFByb2dyZXNzID0gcmVzdHJpY3QoZ2V0UHJvZ3Jlc3NGcm9tVmFsdWUoaW5BY3Rpb24uZWxhcHNlZCwgYmxlbmRDdXJ2ZVswXVswXSwgYmxlbmRDdXJ2ZVsyXVswXSksIDAsIDEpO1xuICAgICAgY29uc3QgYVAgPSBnZXRWYWx1ZUZyb21Qcm9ncmVzcyhibGVuZFByb2dyZXNzLCBibGVuZEN1cnZlWzBdWzFdLCBibGVuZEN1cnZlWzFdWzFdKTtcbiAgICAgIGNvbnN0IGJQID0gZ2V0VmFsdWVGcm9tUHJvZ3Jlc3MoYmxlbmRQcm9ncmVzcywgYmxlbmRDdXJ2ZVsxXVsxXSwgYmxlbmRDdXJ2ZVsyXVsxXSk7XG5cbiAgICAgIGlmIChibGVuZFByb2dyZXNzID09PSAxKSB7XG4gICAgICAgIGZsb3dWYWx1ZS5ibGVuZEN1cnZlID0gdW5kZWZpbmVkO1xuICAgICAgICByZXR1cm4gaW5WYWx1ZS5jdXJyZW50O1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gZ2V0VmFsdWVGcm9tUHJvZ3Jlc3MoYmxlbmRQcm9ncmVzcywgYVAsIGJQKTtcbiAgICB9O1xuICB9XG59O1xuIl19

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
	
	  function Pointer(initialState, moveEvent, eventToPoint) {
	    _classCallCheck(this, Pointer);
	
	    var _this = _possibleConstructorReturn(this, _Input.call(this, initialState));
	
	    _this.eventToPoint = eventToPoint;
	    _this.moveEvent = moveEvent;
	    _this.boundLatest = _this.latest.bind(_this);
	    return _this;
	  }
	
	  Pointer.prototype.latest = function latest(e) {
	    _Input.prototype.latest.call(this, this.eventToPoint(e));
	    e.preventDefault();
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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9pbnB1dC9Qb2ludGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQTs7Ozs7Ozs7Ozs7O0lBRXFCLE87OztBQUNuQixtQkFBWSxZQUFaLEVBQTBCLFNBQTFCLEVBQXFDLFlBQXJDLEVBQW1EO0FBQUE7O0FBQUEsaURBQ2pELGtCQUFNLFlBQU4sQ0FEaUQ7O0FBRWpELFVBQUssWUFBTCxHQUFvQixZQUFwQjtBQUNBLFVBQUssU0FBTCxHQUFpQixTQUFqQjtBQUNBLFVBQUssV0FBTCxHQUFtQixNQUFLLE1BQUwsQ0FBWSxJQUFaLE9BQW5CO0FBSmlEO0FBS2xEOztvQkFFRCxNLG1CQUFPLEMsRUFBRztBQUNSLHFCQUFNLE1BQU4sWUFBYSxLQUFLLFlBQUwsQ0FBa0IsQ0FBbEIsQ0FBYjtBQUNBLE1BQUUsY0FBRjtBQUNELEc7O29CQUVELEssb0JBQVE7QUFDTixxQkFBTSxLQUFOO0FBQ0EsYUFBUyxlQUFULENBQXlCLGdCQUF6QixDQUEwQyxLQUFLLFNBQS9DLEVBQTBELEtBQUssV0FBL0Q7QUFDRCxHOztvQkFFRCxJLG1CQUFPO0FBQ0wscUJBQU0sSUFBTjtBQUNBLGFBQVMsZUFBVCxDQUF5QixtQkFBekIsQ0FBNkMsS0FBSyxTQUFsRCxFQUE2RCxLQUFLLFdBQWxFO0FBQ0QsRzs7Ozs7a0JBckJrQixPIiwiZmlsZSI6IlBvaW50ZXIuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL21hdHRwZXJyeS9TaXRlcy9wb3Btb3Rpb24iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSW5wdXQgZnJvbSAnLi9JbnB1dCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBvaW50ZXIgZXh0ZW5kcyBJbnB1dCB7XG4gIGNvbnN0cnVjdG9yKGluaXRpYWxTdGF0ZSwgbW92ZUV2ZW50LCBldmVudFRvUG9pbnQpIHtcbiAgICBzdXBlcihpbml0aWFsU3RhdGUpO1xuICAgIHRoaXMuZXZlbnRUb1BvaW50ID0gZXZlbnRUb1BvaW50O1xuICAgIHRoaXMubW92ZUV2ZW50ID0gbW92ZUV2ZW50O1xuICAgIHRoaXMuYm91bmRMYXRlc3QgPSB0aGlzLmxhdGVzdC5iaW5kKHRoaXMpO1xuICB9XG5cbiAgbGF0ZXN0KGUpIHtcbiAgICBzdXBlci5sYXRlc3QodGhpcy5ldmVudFRvUG9pbnQoZSkpO1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgfVxuXG4gIHN0YXJ0KCkge1xuICAgIHN1cGVyLnN0YXJ0KCk7XG4gICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIodGhpcy5tb3ZlRXZlbnQsIHRoaXMuYm91bmRMYXRlc3QpO1xuICB9XG5cbiAgc3RvcCgpIHtcbiAgICBzdXBlci5zdG9wKCk7XG4gICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIodGhpcy5tb3ZlRXZlbnQsIHRoaXMuYm91bmRMYXRlc3QpO1xuICB9XG59XG4iXX0=

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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy90YXNrL2xvb3AuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztRQWlGZ0IsUSxHQUFBLFE7O0FBM0VoQjs7OztBQUNBOzs7O0FBQ0E7Ozs7OztBQUVBLElBQU0sZ0JBQWdCLENBQ3BCLEVBQUUsTUFBTSxjQUFSLEVBRG9CLEVBRXBCLEVBQUUsTUFBTSxVQUFSLEVBRm9CLEVBR3BCLEVBQUUsTUFBTSxZQUFSLEVBQXNCLGNBQWMsSUFBcEMsRUFIb0IsRUFJcEIsRUFBRSxNQUFNLGFBQVIsRUFBdUIsVUFBVSxJQUFqQyxFQUpvQixFQUtwQixFQUFFLE1BQU0sVUFBUixFQUFvQixVQUFVLElBQTlCLEVBTG9CLEVBTXBCLEVBQUUsTUFBTSxjQUFSLEVBQXdCLFVBQVUsSUFBbEMsRUFOb0IsRUFPcEIsRUFBRSxNQUFNLFlBQVIsRUFQb0IsRUFRcEIsRUFBRSxNQUFNLFdBQVIsRUFSb0IsQ0FBdEIsQzs7Ozs7OztBQVVBLElBQU0sZUFBZSxjQUFjLE1BQW5DOzs7QUFHQSxJQUFJLFlBQVksS0FBaEI7Ozs7OztBQU1BLFNBQVMsT0FBVCxDQUFpQixVQUFqQixFQUE2QixPQUE3QixFQUFzQztBQUNwQyxNQUFNLFlBQVksa0JBQVEsWUFBUixFQUFsQjtBQUNBLE1BQU0sa0JBQWtCLFVBQVUsTUFBbEM7O0FBRUEsT0FBSyxJQUFJLElBQUksQ0FBYixFQUFnQixJQUFJLFlBQXBCLEVBQWtDLEdBQWxDLEVBQXVDO0FBQ3JDLFFBQU0sT0FBTyxjQUFjLENBQWQsQ0FBYjs7QUFFQSxTQUFLLElBQUksS0FBSyxDQUFkLEVBQWlCLEtBQUssZUFBdEIsRUFBdUMsSUFBdkMsRUFBNkM7QUFDM0MsVUFBTSxPQUFPLGtCQUFRLFdBQVIsQ0FBb0IsVUFBVSxFQUFWLENBQXBCLENBQWI7QUFDQSxVQUFJLFNBQVMsS0FBYjs7O0FBR0EsVUFBSSxRQUFRLEtBQUssS0FBSyxJQUFWLENBQVIsS0FBNEIsQ0FBQyxLQUFLLFFBQU4sSUFBbUIsS0FBSyxRQUFMLElBQWlCLEtBQUssZ0JBQUwsS0FBMEIsSUFBMUYsQ0FBSixFQUFzRztBQUNwRyxpQkFBUyxLQUFLLEtBQUssSUFBVixFQUFnQixJQUFoQixDQUFxQixJQUFyQixFQUEyQixJQUEzQixFQUFpQyxVQUFqQyxFQUE2QyxPQUE3QyxDQUFUO0FBQ0Q7OztBQUdELFVBQUksS0FBSyxZQUFULEVBQXVCO0FBQ3JCLGFBQUssZ0JBQUwsR0FBeUIsS0FBSyxLQUFLLElBQVYsS0FBbUIsV0FBVyxJQUEvQixHQUF1QyxLQUF2QyxHQUErQyxJQUF2RTtBQUNEO0FBQ0Y7QUFDRjs7QUFFRCxTQUFPLGtCQUFRLDRCQUFSLEVBQVA7QUFDRDs7O0FBR0QsU0FBUyxLQUFULENBQWUsVUFBZixFQUEyQjtBQUN6QixrQkFBTSxNQUFOLENBQWEsVUFBYjtBQUNBLGNBQVksUUFBUSxVQUFSLEVBQW9CLGdCQUFNLFVBQU4sRUFBcEIsQ0FBWjs7QUFFQSxNQUFJLFNBQUosRUFBZTtBQUNiLHdCQUFLLEtBQUw7QUFDRDtBQUNGOzs7QUFHRCxTQUFTLEtBQVQsR0FBaUI7QUFDZixNQUFJLENBQUMsU0FBTCxFQUFnQjtBQUNkLG9CQUFNLEtBQU47QUFDQSxnQkFBWSxJQUFaO0FBQ0Esd0JBQUssS0FBTDtBQUNEO0FBQ0Y7OztBQUdNLElBQU0sZ0NBQVksa0JBQVEsU0FBMUI7Ozs7OztBQU1BLFNBQVMsUUFBVCxDQUFrQixFQUFsQixFQUFzQixJQUF0QixFQUE0QjtBQUNqQyxvQkFBUSxRQUFSLENBQWlCLEVBQWpCLEVBQXFCLElBQXJCOztBQUVBLE1BQUksQ0FBQyxTQUFMLEVBQWdCO0FBQ2Q7QUFDRDtBQUNGOzs7OztBQUtNLElBQU0sa0NBQWEsa0JBQVEsVUFBM0IiLCJmaWxlIjoibG9vcC5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvbWF0dHBlcnJ5L1NpdGVzL3BvcG1vdGlvbiIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gIENvcmUgcmVuZGVyIGxvb3BcblxuICBTb21lIGRlY2ljaXNvbnMgaGVyZSBoYXZlIGJlZW4gdGFrZW4gaW4gdGhlIG5hbWUgb2YgcGVyZm9ybWFuY2UuIEFsbCBoYWlsIHBlcmZvcm1hbmNlLlxuICAoSXQgdHVybnMgb3V0IG1pY3Jvb3B0aW1pc2F0aW9ucyBkbyBtYXR0ZXIgd2hlbiB5b3UgaGF2ZSAxNm1zKVxuKi9cbmltcG9ydCB0aW1lciBmcm9tICcuL3RpbWVyJztcbmltcG9ydCB0aWNrIGZyb20gJy4vdGljayc7XG5pbXBvcnQgbWFuYWdlciBmcm9tICcuL21hbmFnZXInO1xuXG5jb25zdCB0YXNrU3RlcE9yZGVyID0gW1xuICB7IG5hbWU6ICdvbkZyYW1lU3RhcnQnIH0sXG4gIHsgbmFtZTogJ29uVXBkYXRlJyB9LFxuICB7IG5hbWU6ICd3aWxsUmVuZGVyJywgZGVjaWRlUmVuZGVyOiB0cnVlIH0sXG4gIHsgbmFtZTogJ29uUHJlUmVuZGVyJywgaXNSZW5kZXI6IHRydWUgfSxcbiAgeyBuYW1lOiAnb25SZW5kZXInLCBpc1JlbmRlcjogdHJ1ZSB9LFxuICB7IG5hbWU6ICdvblBvc3RSZW5kZXInLCBpc1JlbmRlcjogdHJ1ZSB9LFxuICB7IG5hbWU6ICdvbkZyYW1lRW5kJyB9LFxuICB7IG5hbWU6ICdvbkNsZWFudXAnIH1cbl07XG5jb25zdCBudW1UYXNrU3RlcHMgPSB0YXNrU3RlcE9yZGVyLmxlbmd0aDtcblxuLy8gW2Jvb2xlYW5dOiBJcyBsb29wIHJ1bm5pbmc/XG5sZXQgaXNSdW5uaW5nID0gZmFsc2U7XG5cbi8qXG4gIFt0aW1lc3RhbXBdOiBGcmFtZSB0aW1lc3RhbXBcbiAgW2ludF06IFRpbWUgc2luY2UgbGFzdCBmcmFtZVxuKi9cbmZ1bmN0aW9uIGZpcmVBbGwoZnJhbWVTdGFtcCwgZWxhcHNlZCkge1xuICBjb25zdCBhY3RpdmVJZHMgPSBtYW5hZ2VyLmdldEFjdGl2ZUlkcygpO1xuICBjb25zdCBhY3RpdmVUYXNrQ291bnQgPSBhY3RpdmVJZHMubGVuZ3RoO1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbnVtVGFza1N0ZXBzOyBpKyspIHtcbiAgICBjb25zdCBzdGVwID0gdGFza1N0ZXBPcmRlcltpXTtcblxuICAgIGZvciAobGV0IGkyID0gMDsgaTIgPCBhY3RpdmVUYXNrQ291bnQ7IGkyKyspIHtcbiAgICAgIGNvbnN0IHRhc2sgPSBtYW5hZ2VyLmFjdGl2ZVRhc2tzW2FjdGl2ZUlkc1tpMl1dO1xuICAgICAgbGV0IHJlc3VsdCA9IGZhbHNlO1xuXG4gICAgICAvLyBDaGVjayBpZiB0aGlzIHRhc2sgaGFzIHRoaXMgc3RlcCwgb3IgaWYgaXQncyBhIHJlbmRlciBzdGVwIHRoYXQgd2UncmUgcmVuZGVyaW5nIHRoaXMgZnJhbWVcbiAgICAgIGlmICh0YXNrICYmIHRhc2tbc3RlcC5uYW1lXSAmJiAoIXN0ZXAuaXNSZW5kZXIgfHwgKHN0ZXAuaXNSZW5kZXIgJiYgdGFzay5fcmVuZGVyVGhpc0ZyYW1lID09PSB0cnVlKSkpIHtcbiAgICAgICAgcmVzdWx0ID0gdGFza1tzdGVwLm5hbWVdLmNhbGwodGFzaywgdGFzaywgZnJhbWVTdGFtcCwgZWxhcHNlZCk7XG4gICAgICB9XG5cbiAgICAgIC8vIElmIHRoaXMgaXMgYSBkZWNpZGUgcmVuZGVyIHN0ZXAgYW5kIGl0IHJldHVybnMgYGZhbHNlYCwgc2V0IHdpbGxSZW5kZXIgdG8gZmFsc2VcbiAgICAgIGlmIChzdGVwLmRlY2lkZVJlbmRlcikge1xuICAgICAgICB0YXNrLl9yZW5kZXJUaGlzRnJhbWUgPSAodGFza1tzdGVwLm5hbWVdICYmIHJlc3VsdCAhPT0gdHJ1ZSkgPyBmYWxzZSA6IHRydWU7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG1hbmFnZXIuZ2V0Tm9uQmFja2dyb3VuZFJ1bm5pbmdDb3VudCgpO1xufVxuXG4vLyBGdW5jdGlvbiB0byBmaXJlIGV2ZXJ5IGZyYW1lXG5mdW5jdGlvbiBmcmFtZShmcmFtZVN0YW1wKSB7XG4gIHRpbWVyLnVwZGF0ZShmcmFtZVN0YW1wKTtcbiAgaXNSdW5uaW5nID0gZmlyZUFsbChmcmFtZVN0YW1wLCB0aW1lci5nZXRFbGFwc2VkKCkpO1xuXG4gIGlmIChpc1J1bm5pbmcpIHtcbiAgICB0aWNrKGZyYW1lKTtcbiAgfVxufVxuXG4vLyBTdGFydCBsb29wXG5mdW5jdGlvbiBzdGFydCgpIHtcbiAgaWYgKCFpc1J1bm5pbmcpIHtcbiAgICB0aW1lci5zdGFydCgpO1xuICAgIGlzUnVubmluZyA9IHRydWU7XG4gICAgdGljayhmcmFtZSk7XG4gIH1cbn1cblxuLy8gRXhwb3J0c1xuZXhwb3J0IGNvbnN0IGdldFRhc2tJZCA9IG1hbmFnZXIuZ2V0VGFza0lkO1xuXG4vKlxuICBbaW50XTogdGFzayBJRCB0byBhY3RpdmF0ZVxuICBbdGFza106IHRhc2sgdG8gYWN0aXZhdGVcbiovXG5leHBvcnQgZnVuY3Rpb24gYWN0aXZhdGUoaWQsIHRhc2spIHtcbiAgbWFuYWdlci5hY3RpdmF0ZShpZCwgdGFzayk7XG5cbiAgaWYgKCFpc1J1bm5pbmcpIHtcbiAgICBzdGFydCgpO1xuICB9XG59XG5cbi8qXG4gIFtpbnRdOiB0YXNrIElEIHRvIGRlYWN0aXZhdGVcbiovXG5leHBvcnQgY29uc3QgZGVhY3RpdmF0ZSA9IG1hbmFnZXIuZGVhY3RpdmF0ZTsiXX0=

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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hZGFwdGVyL2Nzcy9zdGF0ZS1tYXAuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsSUFBTSxZQUFZLFdBQWxCOztrQkFFZTtBQUNiLEtBQUcsWUFBWSxHQURGO0FBRWIsS0FBRyxZQUFZLEdBRkY7QUFHYixLQUFHLFlBQVk7QUFIRixDIiwiZmlsZSI6InN0YXRlLW1hcC5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvbWF0dHBlcnJ5L1NpdGVzL3BvcG1vdGlvbiIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IFRSQU5TTEFURSA9ICd0cmFuc2xhdGUnO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIHg6IFRSQU5TTEFURSArICdYJyxcbiAgeTogVFJBTlNMQVRFICsgJ1knLFxuICB6OiBUUkFOU0xBVEUgKyAnWidcbn07Il19

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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hZGFwdGVyL2Nzcy92YWx1ZS10eXBlLW1hcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7a0JBRWU7O0FBRWIsd0JBRmE7QUFHYixrQ0FIYTtBQUliLCtCQUphO0FBS2IsdUJBTGE7QUFNYix5QkFOYTs7O0FBU2IsOEJBVGE7QUFVYixpQ0FWYTtBQVdiLG1DQVhhO0FBWWIsb0NBWmE7QUFhYixrQ0FiYTtBQWNiLDRCQWRhOzs7QUFpQmIscUJBakJhO0FBa0JiLHNCQWxCYTs7O0FBcUJiLDhCQXJCYTtBQXNCYiw2QkF0QmE7OztBQXlCYix5QkF6QmE7QUEwQmIsMEJBMUJhO0FBMkJiLDBCQTNCYTtBQTRCYiwwQkE1QmE7QUE2QmIsd0JBN0JhO0FBOEJiLHlCQTlCYTtBQStCYix5QkEvQmE7QUFnQ2IseUJBaENhO0FBaUNiLHdCQWpDYTtBQWtDYix3QkFsQ2E7QUFtQ2Isd0JBbkNhO0FBb0NiLDBCQXBDYTtBQXFDYiwwQkFyQ2E7QUFzQ2IsMEJBdENhO0FBdUNiLDJCQXZDYTtBQXdDYjtBQXhDYSxDIiwiZmlsZSI6InZhbHVlLXR5cGUtbWFwLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9tYXR0cGVycnkvU2l0ZXMvcG9wbW90aW9uIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGFuZ2xlIGZyb20gJy4uLy4uL3ZhbHVlLXR5cGVzL2FuZ2xlJztcbmltcG9ydCBhbHBoYSBmcm9tICcuLi8uLi92YWx1ZS10eXBlcy9hbHBoYSc7XG5pbXBvcnQgY29sb3IgZnJvbSAnLi4vLi4vdmFsdWUtdHlwZXMvY29sb3InO1xuaW1wb3J0IHNjYWxlIGZyb20gJy4uLy4uL3ZhbHVlLXR5cGVzL3NjYWxlJztcbmltcG9ydCBzaGFkb3cgZnJvbSAnLi4vLi4vdmFsdWUtdHlwZXMvc2hhZG93JztcbmltcG9ydCBweCBmcm9tICcuLi8uLi92YWx1ZS10eXBlcy9weCc7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgLy8gQ29sb3IgcHJvcHNcbiAgY29sb3I6IGNvbG9yLFxuICBiYWNrZ3JvdW5kQ29sb3I6IGNvbG9yLFxuICBvdXRsaW5lQ29sb3I6IGNvbG9yLFxuICBmaWxsOiBjb2xvcixcbiAgc3Ryb2tlOiBjb2xvcixcblxuICAvLyBCb3JkZXIgcHJvcHNcbiAgYm9yZGVyQ29sb3I6IGNvbG9yLFxuICBib3JkZXJUb3BDb2xvcjogY29sb3IsXG4gIGJvcmRlclJpZ2h0Q29sb3I6IGNvbG9yLFxuICBib3JkZXJCb3R0b21Db2xvcjogY29sb3IsXG4gIGJvcmRlckxlZnRDb2xvcjogY29sb3IsXG4gIGJvcmRlclJhZGl1czogcHgsXG5cbiAgLy8gUG9zaXRpb25pbmdcbiAgd2lkdGg6IHB4LFxuICBoZWlnaHQ6IHB4LFxuXG4gIC8vIFNoYWRvd3NcbiAgdGV4dFNoYWRvdzogc2hhZG93LFxuICBib3hTaGFkb3c6IHNoYWRvdywgICBcblxuICAvLyBUcmFuc2Zvcm0gcHJvcGVydGllc1xuICByb3RhdGU6IGFuZ2xlLFxuICByb3RhdGVYOiBhbmdsZSxcbiAgcm90YXRlWTogYW5nbGUsXG4gIHJvdGF0ZVo6IGFuZ2xlLFxuICBzY2FsZTogc2NhbGUsXG4gIHNjYWxlWDogc2NhbGUsXG4gIHNjYWxlWTogc2NhbGUsXG4gIHNjYWxlWjogc2NhbGUsXG4gIHNrZXdYOiBhbmdsZSxcbiAgc2tld1k6IGFuZ2xlLFxuICBkaXN0YW5jZTogcHgsXG4gIHRyYW5zbGF0ZVg6IHB4LFxuICB0cmFuc2xhdGVZOiBweCxcbiAgdHJhbnNsYXRlWjogcHgsXG4gIHBlcnNwZWN0aXZlOiBweCxcbiAgb3BhY2l0eTogYWxwaGFcbn07Il19

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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hZGFwdGVyL2Nzcy9idWlsZC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUE7Ozs7QUFDQTs7Ozs7O0FBRUEsSUFBTSxjQUFjLFlBQXBCOztrQkFFZSxVQUFDLEtBQUQsRUFBUSwyQkFBUixFQUF3QztBQUNyRCxNQUFJLGlCQUFpQixFQUFyQjtBQUNBLE1BQUksa0JBQWtCLEVBQXRCO0FBQ0EsTUFBSSxnQkFBZ0IsS0FBcEI7O0FBRUEsT0FBSyxJQUFJLEdBQVQsSUFBZ0IsS0FBaEIsRUFBdUI7QUFDckIsUUFBSSxNQUFNLGNBQU4sQ0FBcUIsR0FBckIsQ0FBSixFQUErQjtBQUM3QixVQUFNLFFBQVEsTUFBTSxHQUFOLENBQWQ7O0FBRUEsVUFBSSx5QkFBZSxHQUFmLENBQUosRUFBeUI7QUFDdkIsMkJBQW1CLE1BQU0sR0FBTixHQUFZLEtBQVosR0FBb0IsSUFBdkM7QUFDQSx3QkFBaUIsUUFBUSxXQUFULEdBQXdCLElBQXhCLEdBQStCLGFBQS9DO0FBRUQsT0FKRCxNQUlPO0FBQ0wsMEJBQWtCLE1BQU0sd0JBQVMsR0FBVCxFQUFjLElBQWQsQ0FBTixHQUE0QixHQUE1QixHQUFrQyxLQUFwRDtBQUNEO0FBQ0Y7QUFDRjs7QUFFRCxNQUFJLG9CQUFvQixFQUF4QixFQUE0QjtBQUMxQixRQUFJLENBQUMsYUFBRCxJQUFrQixDQUFDLDJCQUF2QixFQUFvRDtBQUNsRCx5QkFBbUIsY0FBYyxPQUFqQztBQUNEOztBQUVELHNCQUFrQixNQUFNLHdCQUFTLFdBQVQsRUFBc0IsSUFBdEIsQ0FBTixHQUFvQyxHQUFwQyxHQUEwQyxlQUE1RDtBQUNEOztBQUVELFNBQU8sY0FBUDtBQUNELEMiLCJmaWxlIjoiYnVpbGQuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL21hdHRwZXJyeS9TaXRlcy9wb3Btb3Rpb24iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdHJhbnNmb3JtUHJvcHMgZnJvbSAnLi90cmFuc2Zvcm0tcHJvcHMnO1xuaW1wb3J0IHByZWZpeGVyIGZyb20gJy4vcHJlZml4ZXInO1xuXG5jb25zdCBUUkFOU0xBVEVfWiA9ICd0cmFuc2xhdGVaJztcblxuZXhwb3J0IGRlZmF1bHQgKHN0YXRlLCBkaXNhYmxlSGFyZHdhcmVBY2NlbGVyYXRpb24pID0+IHtcbiAgbGV0IHByb3BlcnR5U3RyaW5nID0gJyc7XG4gIGxldCB0cmFuc2Zvcm1TdHJpbmcgPSAnJztcbiAgbGV0IHRyYW5zZm9ybUhhc1ogPSBmYWxzZTtcblxuICBmb3IgKGxldCBrZXkgaW4gc3RhdGUpIHtcbiAgICBpZiAoc3RhdGUuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgY29uc3QgdmFsdWUgPSBzdGF0ZVtrZXldO1xuXG4gICAgICBpZiAodHJhbnNmb3JtUHJvcHNba2V5XSkge1xuICAgICAgICB0cmFuc2Zvcm1TdHJpbmcgKz0ga2V5ICsgJygnICsgdmFsdWUgKyAnKSAnO1xuICAgICAgICB0cmFuc2Zvcm1IYXNaID0gKGtleSA9PT0gVFJBTlNMQVRFX1opID8gdHJ1ZSA6IHRyYW5zZm9ybUhhc1o7XG5cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHByb3BlcnR5U3RyaW5nICs9ICc7JyArIHByZWZpeGVyKGtleSwgdHJ1ZSkgKyAnOicgKyB2YWx1ZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBpZiAodHJhbnNmb3JtU3RyaW5nICE9PSAnJykge1xuICAgIGlmICghdHJhbnNmb3JtSGFzWiAmJiAhZGlzYWJsZUhhcmR3YXJlQWNjZWxlcmF0aW9uKSB7XG4gICAgICB0cmFuc2Zvcm1TdHJpbmcgKz0gVFJBTlNMQVRFX1ogKyAnKDBweCknO1xuICAgIH1cblxuICAgIHByb3BlcnR5U3RyaW5nICs9ICc7JyArIHByZWZpeGVyKCd0cmFuc2Zvcm0nLCB0cnVlKSArICc6JyArIHRyYW5zZm9ybVN0cmluZztcbiAgfVxuXG4gIHJldHVybiBwcm9wZXJ0eVN0cmluZztcbn07Il19

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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hZGFwdGVyL2Nzcy9wcmVmaXhlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUE7O0FBRUEsSUFBTSxhQUFhLEVBQW5CO0FBQ0EsSUFBTSxZQUFZLEVBQWxCO0FBQ0EsSUFBTSxXQUFXLENBQUMsUUFBRCxFQUFVLEtBQVYsRUFBZ0IsR0FBaEIsRUFBb0IsSUFBcEIsRUFBMEIsRUFBMUIsQ0FBakI7QUFDQSxJQUFNLGNBQWMsU0FBUyxNQUE3QjtBQUNBLElBQUksb0JBQUo7Ozs7Ozs7O0FBUUEsSUFBTSxhQUFhLFVBQUMsR0FBRCxFQUFTO0FBQzFCLGdCQUFjLGVBQWUsU0FBUyxhQUFULENBQXVCLEtBQXZCLENBQTdCOztBQUVBLE9BQUssSUFBSSxJQUFJLENBQWIsRUFBZ0IsSUFBSSxXQUFwQixFQUFpQyxHQUFqQyxFQUFzQztBQUNwQyxRQUFNLFNBQVMsU0FBUyxDQUFULENBQWY7QUFDQSxRQUFNLFdBQVksV0FBVyxFQUE3QjtBQUNBLFFBQU0sdUJBQXVCLFdBQVcsR0FBWCxHQUFpQixTQUFTLElBQUksTUFBSixDQUFXLENBQVgsRUFBYyxXQUFkLEVBQVQsR0FBdUMsSUFBSSxLQUFKLENBQVUsQ0FBVixDQUFyRjs7QUFFQSxRQUFJLHdCQUF3QixZQUFZLEtBQXhDLEVBQStDO0FBQzdDLGlCQUFXLEdBQVgsSUFBa0Isb0JBQWxCO0FBQ0EsZ0JBQVUsR0FBVixVQUFxQixXQUFXLEVBQVgsR0FBZ0IsR0FBckMsSUFBNEMsd0JBQVksb0JBQVosQ0FBNUM7QUFDRDtBQUNGO0FBQ0YsQ0FiRDs7a0JBZWUsVUFBQyxHQUFELEVBQU0sVUFBTixFQUFxQjtBQUNsQyxNQUFNLFFBQVEsYUFBYSxTQUFiLEdBQXlCLFVBQXZDOztBQUVBLE1BQUksQ0FBQyxNQUFNLEdBQU4sQ0FBTCxFQUFpQjtBQUNmLGVBQVcsR0FBWDtBQUNEOztBQUVELFNBQU8sTUFBTSxHQUFOLENBQVA7QUFDRCxDIiwiZmlsZSI6InByZWZpeGVyLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9tYXR0cGVycnkvU2l0ZXMvcG9wbW90aW9uIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY2FtZWxUb0Rhc2ggfSBmcm9tICcuLi8uLi9pbmMvdXRpbHMnO1xuXG5jb25zdCBjYW1lbENhY2hlID0ge307XG5jb25zdCBkYXNoQ2FjaGUgPSB7fTtcbmNvbnN0IHByZWZpeGVzID0gWydXZWJraXQnLCdNb3onLCdPJywnbXMnLCAnJ107XG5jb25zdCBudW1QcmVmaXhlcyA9IHByZWZpeGVzLmxlbmd0aDtcbmxldCB0ZXN0RWxlbWVudDtcblxuLypcbiAgVGVzdCBzdHlsZSBwcm9wZXJ0eSBmb3IgcHJlZml4ZWQgdmVyc2lvblxuICBcbiAgQHBhcmFtIFtzdHJpbmddOiBTdHlsZSBwcm9wZXJ0eVxuICBAcmV0dXJuIFtzdHJpbmddOiBDYWNoZWQgcHJvcGVydHkgbmFtZVxuKi9cbmNvbnN0IHRlc3RQcmVmaXggPSAoa2V5KSA9PiB7XG4gIHRlc3RFbGVtZW50ID0gdGVzdEVsZW1lbnQgfHwgZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBudW1QcmVmaXhlczsgaSsrKSB7XG4gICAgY29uc3QgcHJlZml4ID0gcHJlZml4ZXNbaV07XG4gICAgY29uc3Qgbm9QcmVmaXggPSAocHJlZml4ID09PSAnJyk7XG4gICAgY29uc3QgcHJlZml4ZWRQcm9wZXJ0eU5hbWUgPSBub1ByZWZpeCA/IGtleSA6IHByZWZpeCArIGtleS5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIGtleS5zbGljZSgxKTtcblxuICAgIGlmIChwcmVmaXhlZFByb3BlcnR5TmFtZSBpbiB0ZXN0RWxlbWVudC5zdHlsZSkge1xuICAgICAgY2FtZWxDYWNoZVtrZXldID0gcHJlZml4ZWRQcm9wZXJ0eU5hbWU7XG4gICAgICBkYXNoQ2FjaGVba2V5XSA9IGAkeyhub1ByZWZpeCA/ICcnIDogJy0nKX0ke2NhbWVsVG9EYXNoKHByZWZpeGVkUHJvcGVydHlOYW1lKX1gO1xuICAgIH1cbiAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgKGtleSwgYXNEYXNoQ2FzZSkgPT4ge1xuICBjb25zdCBjYWNoZSA9IGFzRGFzaENhc2UgPyBkYXNoQ2FjaGUgOiBjYW1lbENhY2hlO1xuXG4gIGlmICghY2FjaGVba2V5XSkge1xuICAgIHRlc3RQcmVmaXgoa2V5KTtcbiAgfVxuXG4gIHJldHVybiBjYWNoZVtrZXldO1xufTtcbiJdfQ==

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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hZGFwdGVyL2Nzcy90cmFuc2Zvcm0tcHJvcHMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBOztBQUVBLElBQUksaUJBQWlCLEVBQXJCOztBQUVBLElBQU0sUUFBUSxPQUFkO0FBQ0EsSUFBTSxTQUFTLFFBQWY7QUFDQSxJQUFNLHdCQUF3QixzQkFBOUI7QUFDQSxJQUFNLFFBQVEsQ0FBQyxXQUFELEVBQWMsS0FBZCxFQUFxQixNQUFyQixFQUE2QixNQUE3QixFQUFxQyxxQkFBckMsQ0FBZDs7QUFFQSxlQUFlLE1BQWYsSUFBeUIsZUFBZSxLQUFmLElBQXdCLGVBQWUscUJBQWYsSUFBd0MsSUFBekY7O0FBRUEsTUFBTSxPQUFOLENBQWMsVUFBQyxJQUFEO0FBQUEsU0FBVSxpQkFBSyxPQUFMLENBQWEsVUFBQyxJQUFEO0FBQUEsV0FBVSxlQUFlLE9BQU8sSUFBdEIsSUFBOEIsSUFBeEM7QUFBQSxHQUFiLENBQVY7QUFBQSxDQUFkOztrQkFFZSxjIiwiZmlsZSI6InRyYW5zZm9ybS1wcm9wcy5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvbWF0dHBlcnJ5L1NpdGVzL3BvcG1vdGlvbiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGF4ZXMgfSBmcm9tICcuLi8uLi92YWx1ZS10eXBlcy9zZXR0aW5ncy9kaWN0aW9uYXJ5JztcblxubGV0IHRyYW5zZm9ybVByb3BzID0ge307XG5cbmNvbnN0IFNDQUxFID0gJ3NjYWxlJztcbmNvbnN0IFJPVEFURSA9ICdyb3RhdGUnO1xuY29uc3QgVFJBTlNGT1JNX1BFUlNQRUNUSVZFID0gJ3RyYW5zZm9ybVBlcnNwZWN0aXZlJztcbmNvbnN0IFRFUk1TID0gWyd0cmFuc2xhdGUnLCBTQ0FMRSwgUk9UQVRFLCAnc2tldycsIFRSQU5TRk9STV9QRVJTUEVDVElWRV07XG5cbnRyYW5zZm9ybVByb3BzW1JPVEFURV0gPSB0cmFuc2Zvcm1Qcm9wc1tTQ0FMRV0gPSB0cmFuc2Zvcm1Qcm9wc1tUUkFOU0ZPUk1fUEVSU1BFQ1RJVkVdID0gdHJ1ZTtcblxuVEVSTVMuZm9yRWFjaCgodGVybSkgPT4gYXhlcy5mb3JFYWNoKChheGlzKSA9PiB0cmFuc2Zvcm1Qcm9wc1t0ZXJtICsgYXhpc10gPSB0cnVlKSk7XG5cbmV4cG9ydCBkZWZhdWx0IHRyYW5zZm9ybVByb3BzOyJdfQ==

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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hZGFwdGVyL3N2Zy92YWx1ZS10eXBlLW1hcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7OztrQkFFZTtBQUNiLHVCQURhO0FBRWIseUJBRmE7QUFHYix3QkFIYTtBQUliLHlCQUphO0FBS2IseUJBTGE7QUFNYixzQkFOYTtBQU9iLDJCQVBhO0FBUWIsMEJBUmE7QUFTYiw4QkFUYTtBQVViO0FBVmEsQyIsImZpbGUiOiJ2YWx1ZS10eXBlLW1hcC5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvbWF0dHBlcnJ5L1NpdGVzL3BvcG1vdGlvbiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBhbHBoYSBmcm9tICcuLi8uLi92YWx1ZS10eXBlcy9hbHBoYSc7XG5pbXBvcnQgY29sb3IgZnJvbSAnLi4vLi4vdmFsdWUtdHlwZXMvY29sb3InO1xuaW1wb3J0IGNvbXBsZXggZnJvbSAnLi4vLi4vdmFsdWUtdHlwZXMvY29tcGxleCc7XG5pbXBvcnQgc2NhbGUgZnJvbSAnLi4vLi4vdmFsdWUtdHlwZXMvc2NhbGUnO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGZpbGw6IGNvbG9yLFxuICBzdHJva2U6IGNvbG9yLFxuICBzY2FsZTogc2NhbGUsXG4gIHNjYWxlWDogc2NhbGUsXG4gIHNjYWxlWTogc2NhbGUsXG4gIGQ6IGNvbXBsZXgsXG4gIHBvaW50czogY29tcGxleCxcbiAgb3BhY2l0eTogYWxwaGEsXG4gIGZpbGxPcGFjaXR5OiBhbHBoYSxcbiAgc3Ryb2tlT3BhY2l0eTogYWxwaGFcbn07Il19

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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hZGFwdGVyL3N2Zy9idWlsZC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7a0JBS3dCLEs7O0FBTHhCOztBQUNBOzs7Ozs7QUFFQSxJQUFNLGdCQUFnQixNQUF0Qjs7QUFFZSxTQUFTLEtBQVQsQ0FBZSxLQUFmLEVBQXNCLElBQXRCLEVBQTRCO0FBQ3pDLE1BQUksZUFBZSxLQUFuQjtBQUNBLE1BQU0sUUFBUSxFQUFkO0FBQ0EsTUFBTSxRQUFRLE1BQU0sS0FBTixLQUFnQixTQUFoQixHQUE0QixNQUFNLEtBQU4sSUFBZSxhQUEzQyxHQUEyRCxNQUFNLE1BQU4sSUFBZ0IsQ0FBekY7QUFDQSxNQUFNLFNBQVMsTUFBTSxNQUFOLEtBQWlCLFNBQWpCLEdBQTZCLE1BQU0sTUFBTixJQUFnQixhQUE3QyxHQUE2RCxTQUFTLENBQXJGO0FBQ0EsTUFBTSxtQkFBbUIsS0FBSyxLQUFMLElBQWMsQ0FBQyxNQUFNLE9BQU4sSUFBaUIsRUFBbEIsSUFBd0IsR0FBdEMsSUFBNkMsS0FBSyxDQUEzRTtBQUNBLE1BQU0sbUJBQW1CLEtBQUssTUFBTCxJQUFlLENBQUMsTUFBTSxPQUFOLElBQWlCLEVBQWxCLElBQXdCLEdBQXZDLElBQThDLEtBQUssQ0FBNUU7QUFDQSxNQUFNLGtCQUFrQixDQUFFLGdCQUFGLElBQXNCLFFBQVEsQ0FBOUIsQ0FBeEI7QUFDQSxNQUFNLGtCQUFrQixDQUFFLGdCQUFGLElBQXNCLFNBQVMsQ0FBL0IsQ0FBeEI7QUFDQSxNQUFNLGdCQUFnQixtQkFBbUIsS0FBekM7QUFDQSxNQUFNLGdCQUFnQixtQkFBbUIsTUFBekM7QUFDQSxNQUFNLFlBQVk7QUFDaEIsOEJBQXdCLE1BQU0sVUFBOUIsVUFBNkMsTUFBTSxVQUFuRCxPQURnQjtBQUVoQiwwQkFBb0IsZUFBcEIsVUFBd0MsZUFBeEMsZ0JBQWtFLEtBQWxFLFVBQTRFLE1BQTVFLG9CQUFpRyxhQUFqRyxVQUFtSCxhQUFuSCxPQUZnQjtBQUdoQix3QkFBa0IsTUFBTSxNQUF4QixVQUFtQyxnQkFBbkMsVUFBd0QsZ0JBQXhELE9BSGdCO0FBSWhCLHNCQUFnQixNQUFNLEtBQXRCLE9BSmdCO0FBS2hCLHNCQUFnQixNQUFNLEtBQXRCO0FBTGdCLEdBQWxCOztBQVFBLE9BQUssSUFBSSxHQUFULElBQWdCLEtBQWhCLEVBQXVCO0FBQ3JCLFFBQUksTUFBTSxjQUFOLENBQXFCLEdBQXJCLENBQUosRUFBK0I7QUFDN0IsVUFBSSx5QkFBZSxHQUFmLENBQUosRUFBeUI7QUFDdkIsdUJBQWUsSUFBZjtBQUNELE9BRkQsTUFFTztBQUNMLGNBQU0sd0JBQVksR0FBWixDQUFOLElBQTBCLE1BQU0sR0FBTixDQUExQjtBQUNEO0FBQ0Y7QUFDRjs7QUFFRCxNQUFJLFlBQUosRUFBa0I7QUFDaEIsVUFBTSxTQUFOLEdBQWtCLEVBQWxCOztBQUVBLFNBQUssSUFBSSxJQUFULElBQWdCLFNBQWhCLEVBQTJCO0FBQ3pCLFVBQUksVUFBVSxjQUFWLENBQXlCLElBQXpCLENBQUosRUFBbUM7QUFDakMsWUFBTSxlQUFnQixTQUFRLE9BQVQsR0FBb0IsR0FBcEIsR0FBMEIsR0FBL0M7QUFDQSxjQUFNLFNBQU4sSUFBbUIsVUFBVSxJQUFWLEVBQWUsT0FBZixDQUF1QixZQUF2QixFQUFxQyxZQUFyQyxDQUFuQjtBQUNEO0FBQ0Y7QUFDRjs7QUFFRCxTQUFPLEtBQVA7QUFDRCIsImZpbGUiOiJidWlsZC5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvbWF0dHBlcnJ5L1NpdGVzL3BvcG1vdGlvbiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNhbWVsVG9EYXNoIH0gZnJvbSAnLi4vLi4vaW5jL3V0aWxzJztcbmltcG9ydCB0cmFuc2Zvcm1Qcm9wcyBmcm9tICcuLi9jc3MvdHJhbnNmb3JtLXByb3BzJztcblxuY29uc3QgWkVST19OT1RfWkVSTyA9IDAuMDAwMTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYnVpbGQoc3RhdGUsIGRhdGEpIHtcbiAgbGV0IGhhc1RyYW5zZm9ybSA9IGZhbHNlO1xuICBjb25zdCBwcm9wcyA9IHt9O1xuICBjb25zdCBzY2FsZSA9IHN0YXRlLnNjYWxlICE9PSB1bmRlZmluZWQgPyBzdGF0ZS5zY2FsZSB8fCBaRVJPX05PVF9aRVJPIDogc3RhdGUuc2NhbGVYIHx8IDE7XG4gIGNvbnN0IHNjYWxlWSA9IHN0YXRlLnNjYWxlWSAhPT0gdW5kZWZpbmVkID8gc3RhdGUuc2NhbGVZIHx8IFpFUk9fTk9UX1pFUk8gOiBzY2FsZSB8fCAxO1xuICBjb25zdCB0cmFuc2Zvcm1PcmlnaW5YID0gZGF0YS53aWR0aCAqICgoc3RhdGUub3JpZ2luWCB8fCA1MCkgLyAxMDApICsgZGF0YS54O1xuICBjb25zdCB0cmFuc2Zvcm1PcmlnaW5ZID0gZGF0YS5oZWlnaHQgKiAoKHN0YXRlLm9yaWdpblkgfHwgNTApIC8gMTAwKSArIGRhdGEueTtcbiAgY29uc3Qgc2NhbGVUcmFuc2Zvcm1YID0gLSB0cmFuc2Zvcm1PcmlnaW5YICogKHNjYWxlICogMSk7XG4gIGNvbnN0IHNjYWxlVHJhbnNmb3JtWSA9IC0gdHJhbnNmb3JtT3JpZ2luWSAqIChzY2FsZVkgKiAxKTtcbiAgY29uc3Qgc2NhbGVSZXBsYWNlWCA9IHRyYW5zZm9ybU9yaWdpblggLyBzY2FsZTtcbiAgY29uc3Qgc2NhbGVSZXBsYWNlWSA9IHRyYW5zZm9ybU9yaWdpblkgLyBzY2FsZVk7XG4gIGNvbnN0IHRyYW5zZm9ybSA9IHtcbiAgICB0cmFuc2xhdGU6IGB0cmFuc2xhdGUoJHtzdGF0ZS50cmFuc2xhdGVYfSwgJHtzdGF0ZS50cmFuc2xhdGVZfSkgYCxcbiAgICBzY2FsZTogYHRyYW5zbGF0ZSgke3NjYWxlVHJhbnNmb3JtWH0sICR7c2NhbGVUcmFuc2Zvcm1ZfSkgc2NhbGUoJHtzY2FsZX0sICR7c2NhbGVZfSkgdHJhbnNsYXRlKCR7c2NhbGVSZXBsYWNlWH0sICR7c2NhbGVSZXBsYWNlWX0pIGAsXG4gICAgcm90YXRlOiBgcm90YXRlKCR7c3RhdGUucm90YXRlfSwgJHt0cmFuc2Zvcm1PcmlnaW5YfSwgJHt0cmFuc2Zvcm1PcmlnaW5ZfSkgYCxcbiAgICBza2V3WDogYHNrZXdYKCR7c3RhdGUuc2tld1h9KSBgLFxuICAgIHNrZXdZOiBgc2tld1koJHtzdGF0ZS5za2V3WX0pIGBcbiAgfTtcblxuICBmb3IgKGxldCBrZXkgaW4gc3RhdGUpIHtcbiAgICBpZiAoc3RhdGUuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgaWYgKHRyYW5zZm9ybVByb3BzW2tleV0pIHtcbiAgICAgICAgaGFzVHJhbnNmb3JtID0gdHJ1ZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHByb3BzW2NhbWVsVG9EYXNoKGtleSldID0gc3RhdGVba2V5XTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBpZiAoaGFzVHJhbnNmb3JtKSB7XG4gICAgcHJvcHMudHJhbnNmb3JtID0gJyc7XG5cbiAgICBmb3IgKGxldCBrZXkgaW4gdHJhbnNmb3JtKSB7XG4gICAgICBpZiAodHJhbnNmb3JtLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgY29uc3QgZGVmYXVsdFZhbHVlID0gKGtleSA9PT0gJ3NjYWxlJykgPyAnMScgOiAnMCc7XG4gICAgICAgIHByb3BzLnRyYW5zZm9ybSArPSB0cmFuc2Zvcm1ba2V5XS5yZXBsYWNlKC91bmRlZmluZWQvZywgZGVmYXVsdFZhbHVlKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gcHJvcHM7XG59Il19

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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hZGFwdGVyL3N2Zy1wYXRoL2J1aWxkLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQU1BLElBQU0sa0JBQWtCLFVBQUMsT0FBRCxFQUFVLE1BQVY7QUFBQSxTQUFzQixXQUFXLE9BQVgsSUFBc0IsR0FBdkIsR0FBOEIsTUFBOUIsR0FBdUMsSUFBNUQ7QUFBQSxDQUF4Qjs7a0JBRWUsVUFBQyxLQUFELEVBQVEsTUFBUixFQUFtQjtBQUNoQyxNQUFNLFNBQVMsRUFBZjtBQUNBLE1BQU0sa0JBQWtCO0FBQ3RCLFlBQVEsQ0FEYztBQUV0QixhQUFTLFNBQVM7QUFGSSxHQUF4QjtBQUlBLE1BQUksZUFBZSxLQUFuQjs7QUFFQSxPQUFLLElBQUksR0FBVCxJQUFnQixLQUFoQixFQUF1QjtBQUNyQixRQUFJLE1BQU0sY0FBTixDQUFxQixHQUFyQixDQUFKLEVBQStCO0FBQzdCLFVBQU0sUUFBUSxNQUFNLEdBQU4sQ0FBZDs7QUFFQSxjQUFRLEdBQVI7QUFDQSxhQUFLLFFBQUw7QUFDQSxhQUFLLFNBQUw7QUFDRSx5QkFBZSxJQUFmO0FBQ0EsMEJBQWdCLEdBQWhCLElBQXVCLGdCQUFnQixLQUFoQixFQUF1QixNQUF2QixDQUF2QjtBQUNBO0FBQ0YsYUFBSyxRQUFMO0FBQ0UsaUJBQU8sbUJBQVAsSUFBOEIsZ0JBQWdCLENBQUMsS0FBakIsRUFBd0IsTUFBeEIsQ0FBOUI7QUFDQTtBQUNGO0FBQ0UsaUJBQU8sR0FBUCxJQUFjLEtBQWQ7QUFWRjtBQVlEO0FBQ0Y7O0FBRUQsTUFBSSxZQUFKLEVBQWtCO0FBQ2hCLFdBQU8sa0JBQVAsSUFBNkIsZ0JBQWdCLE1BQWhCLEdBQXlCLEdBQXpCLEdBQStCLGdCQUFnQixPQUE1RTtBQUNEOztBQUVELFNBQU8sTUFBUDtBQUNELEMiLCJmaWxlIjoiYnVpbGQuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL21hdHRwZXJyeS9TaXRlcy9wb3Btb3Rpb24iLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICBDb252ZXJ0IHBlcmNlbnRhZ2UgdG8gcGl4ZWxzXG4gIFxuICBAcGFyYW0gW251bWJlcl06IFBlcmNlbnRhZ2Ugb2YgdG90YWwgbGVuZ3RoXG4gIEBwYXJhbSBbbnVtYmVyXTogVG90YWwgbGVuZ3RoXG4qL1xuY29uc3QgcGVyY2VudFRvUGl4ZWxzID0gKHBlcmNlbnQsIGxlbmd0aCkgPT4gKHBhcnNlRmxvYXQocGVyY2VudCkgLyAxMDApICogbGVuZ3RoICsgJ3B4JztcblxuZXhwb3J0IGRlZmF1bHQgKHN0YXRlLCBsZW5ndGgpID0+IHtcbiAgY29uc3Qgc3R5bGVzID0ge307XG4gIGNvbnN0IGRhc2hBcnJheVN0eWxlcyA9IHtcbiAgICBsZW5ndGg6IDAsXG4gICAgc3BhY2luZzogbGVuZ3RoICsgJ3B4J1xuICB9O1xuICBsZXQgaGFzRGFzaEFycmF5ID0gZmFsc2U7XG5cbiAgZm9yIChsZXQga2V5IGluIHN0YXRlKSB7XG4gICAgaWYgKHN0YXRlLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgIGNvbnN0IHZhbHVlID0gc3RhdGVba2V5XTtcblxuICAgICAgc3dpdGNoIChrZXkpIHtcbiAgICAgIGNhc2UgJ2xlbmd0aCc6XG4gICAgICBjYXNlICdzcGFjaW5nJzpcbiAgICAgICAgaGFzRGFzaEFycmF5ID0gdHJ1ZTtcbiAgICAgICAgZGFzaEFycmF5U3R5bGVzW2tleV0gPSBwZXJjZW50VG9QaXhlbHModmFsdWUsIGxlbmd0aCk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnb2Zmc2V0JzpcbiAgICAgICAgc3R5bGVzWydzdHJva2UtZGFzaG9mZnNldCddID0gcGVyY2VudFRvUGl4ZWxzKC12YWx1ZSwgbGVuZ3RoKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICBzdHlsZXNba2V5XSA9IHZhbHVlO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGlmIChoYXNEYXNoQXJyYXkpIHtcbiAgICBzdHlsZXNbJ3N0cm9rZS1kYXNoYXJyYXknXSA9IGRhc2hBcnJheVN0eWxlcy5sZW5ndGggKyAnICcgKyBkYXNoQXJyYXlTdHlsZXMuc3BhY2luZztcbiAgfVxuXG4gIHJldHVybiBzdHlsZXM7XG59OyJdfQ==

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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy92YWx1ZS10eXBlcy9zZXR0aW5ncy9kZWZhdWx0LXByb3BzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFPLElBQU0sb0JBQU07QUFDakIsT0FBSyxDQURZO0FBRWpCLE9BQUssR0FGWTtBQUdqQixTQUFPO0FBSFUsQ0FBWjs7QUFNQSxJQUFNLDRCQUFVO0FBQ3JCLE9BQUssQ0FEZ0I7QUFFckIsT0FBSztBQUZnQixDQUFoQjs7QUFLQSxJQUFNLDRCQUFVO0FBQ3JCLE9BQUssQ0FEZ0I7QUFFckIsT0FBSyxHQUZnQjtBQUdyQixRQUFNO0FBSGUsQ0FBaEIiLCJmaWxlIjoiZGVmYXVsdC1wcm9wcy5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvbWF0dHBlcnJ5L1NpdGVzL3BvcG1vdGlvbiIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCByZ2IgPSB7XG4gIG1pbjogMCxcbiAgbWF4OiAyNTUsXG4gIHJvdW5kOiB0cnVlXG59O1xuXG5leHBvcnQgY29uc3Qgb3BhY2l0eSA9IHtcbiAgbWluOiAwLFxuICBtYXg6IDFcbn07XG5cbmV4cG9ydCBjb25zdCBwZXJjZW50ID0ge1xuICBtaW46IDAsXG4gIG1heDogMTAwLFxuICB1bml0OiAnJSdcbn07Il19

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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy92YWx1ZS10eXBlcy9zZXR0aW5ncy9kaWN0aW9uYXJ5LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLElBQU0sSUFBSSxHQUFWO0FBQ0EsSUFBTSxJQUFJLEdBQVY7QUFDQSxJQUFNLFFBQVEsT0FBZDs7QUFFTyxJQUFNLHNCQUFPLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxHQUFQLENBQWI7QUFDQSxJQUFNLG9CQUFNLENBQUMsS0FBRCxFQUFRLE9BQVIsRUFBaUIsTUFBakIsRUFBeUIsS0FBekIsQ0FBWjtBQUNBLElBQU0sb0JBQU0sQ0FBQyxLQUFELEVBQVEsWUFBUixFQUFzQixXQUF0QixFQUFtQyxLQUFuQyxDQUFaO0FBQ0EsSUFBTSxnQ0FBWSxDQUFDLEtBQUQsRUFBUSxPQUFSLEVBQWlCLFFBQWpCLEVBQTJCLE1BQTNCLENBQWxCO0FBQ0EsSUFBTSwwQkFBUyxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sUUFBUCxFQUFpQixRQUFqQixFQUEyQixPQUEzQixDQUFmIiwiZmlsZSI6ImRpY3Rpb25hcnkuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL21hdHRwZXJyeS9TaXRlcy9wb3Btb3Rpb24iLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBYID0gJ1gnO1xuY29uc3QgWSA9ICdZJztcbmNvbnN0IEFMUEhBID0gJ0FscGhhJztcblxuZXhwb3J0IGNvbnN0IGF4ZXMgPSBbWCwgWSwgJ1onXTtcbmV4cG9ydCBjb25zdCByZ2IgPSBbJ1JlZCcsICdHcmVlbicsICdCbHVlJywgQUxQSEFdO1xuZXhwb3J0IGNvbnN0IGhzbCA9IFsnSHVlJywgJ1NhdHVyYXRpb24nLCAnTGlnaHRuZXNzJywgQUxQSEFdO1xuZXhwb3J0IGNvbnN0IHBvc2l0aW9ucyA9IFsnVG9wJywgJ1JpZ2h0JywgJ0JvdHRvbScsICdMZWZ0J107XG5leHBvcnQgY29uc3Qgc2hhZG93ID0gW1gsIFksICdSYWRpdXMnLCAnU3ByZWFkJywgJ0NvbG9yJ107Il19

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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hY3Rpb25zL2Vhc2luZy9jcmVhdGUtZWFzaW5nLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztrQkFnQ3dCLG9COzs7Ozs7Ozs7OztBQXRCeEIsSUFBTSxlQUFlLFVBQUMsTUFBRDtBQUFBLFNBQVksVUFBQyxRQUFELEVBQVcsUUFBWDtBQUFBLFdBQXlCLFlBQVksR0FBYixHQUFvQixPQUFPLElBQUksUUFBWCxFQUFxQixRQUFyQixJQUFpQyxDQUFyRCxHQUF5RCxDQUFDLElBQUksT0FBTyxLQUFLLElBQUksUUFBVCxDQUFQLEVBQTJCLFFBQTNCLENBQUwsSUFBNkMsQ0FBOUg7QUFBQSxHQUFaO0FBQUEsQ0FBckI7Ozs7Ozs7Ozs7OztBQVlBLElBQU0sZ0JBQWdCLFVBQUMsTUFBRDtBQUFBLFNBQVksVUFBQyxRQUFELEVBQVcsUUFBWDtBQUFBLFdBQXdCLElBQUksT0FBTyxJQUFJLFFBQVgsRUFBcUIsUUFBckIsQ0FBNUI7QUFBQSxHQUFaO0FBQUEsQ0FBdEI7Ozs7Ozs7Ozs7QUFVZSxTQUFTLG9CQUFULENBQThCLE1BQTlCLEVBQXNDO0FBQ25ELE1BQUksaUJBQWlCLFVBQUMsUUFBRCxFQUFXLFFBQVg7QUFBQSxXQUF3QixPQUFPLFFBQVAsRUFBaUIsUUFBakIsQ0FBeEI7QUFBQSxHQUFyQjs7QUFFQSxpQkFBZSxFQUFmLEdBQW9CLFVBQUMsUUFBRCxFQUFXLFFBQVg7QUFBQSxXQUF3QixPQUFPLFFBQVAsRUFBaUIsUUFBakIsQ0FBeEI7QUFBQSxHQUFwQjtBQUNBLGlCQUFlLEdBQWYsR0FBcUIsY0FBYyxNQUFkLENBQXJCO0FBQ0EsaUJBQWUsS0FBZixHQUF1QixhQUFhLE1BQWIsQ0FBdkI7O0FBRUEsU0FBTyxjQUFQO0FBQ0QiLCJmaWxlIjoiY3JlYXRlLWVhc2luZy5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvbWF0dHBlcnJ5L1NpdGVzL3BvcG1vdGlvbiIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gIE1pcnJvciBlYXNpbmdcbiAgXG4gIE1pcnJvcnMgdGhlIHByb3ZpZGVkIGVhc2luZyBmdW5jdGlvbiwgdXNlZCBoZXJlIGZvciBtaXJyb3JpbmcgYW5cbiAgZWFzZUluIGludG8gYW4gZWFzZUluT3V0XG4gIFxuICBAcGFyYW0gW251bWJlcl06IFByb2dyZXNzLCBmcm9tIDAgLSAxLCBvZiBjdXJyZW50IHNoaWZ0XG4gIEBwYXJhbSBbZnVuY3Rpb25dOiBUaGUgZWFzaW5nIGZ1bmN0aW9uIHRvIG1pcnJvclxuICBAcmV0dXJucyBbbnVtYmVyXTogVGhlIGVhc2luZy1hZGp1c3RlZCBkZWx0YVxuKi9cbmNvbnN0IG1pcnJvckVhc2luZyA9IChtZXRob2QpID0+IChwcm9ncmVzcywgc3RyZW5ndGgpID0+IChwcm9ncmVzcyA8PSAwLjUpID8gbWV0aG9kKDIgKiBwcm9ncmVzcywgc3RyZW5ndGgpIC8gMiA6ICgyIC0gbWV0aG9kKDIgKiAoMSAtIHByb2dyZXNzKSwgc3RyZW5ndGgpKSAvIDI7XG4gICAgXG4vKlxuICBSZXZlcnNlIGVhc2luZ1xuICBcbiAgUmV2ZXJzZXMgdGhlIG91dHB1dCBvZiB0aGUgcHJvdmlkZWQgZWFzaW5nIGZ1bmN0aW9uLCB1c2VkIGZvciBmbGlwcGluZyBlYXNlSW5cbiAgY3VydmUgdG8gYW4gZWFzZU91dC5cbiAgXG4gIEBwYXJhbSBbbnVtYmVyXTogUHJvZ3Jlc3MsIGZyb20gMCAtIDEsIG9mIGN1cnJlbnQgc2hpZnRcbiAgQHBhcmFtIFtmdW5jdGlvbl06IFRoZSBlYXNpbmcgZnVuY3Rpb24gdG8gcmV2ZXJzZVxuICBAcmV0dXJucyBbbnVtYmVyXTogVGhlIGVhc2luZy1hZGp1c3RlZCBkZWx0YVxuKi9cbmNvbnN0IHJldmVyc2VFYXNpbmcgPSAobWV0aG9kKSA9PiAocHJvZ3Jlc3MsIHN0cmVuZ3RoKSA9PiAxIC0gbWV0aG9kKDEgLSBwcm9ncmVzcywgc3RyZW5ndGgpO1xuXG4vKlxuICBFYXNpbmcgY2xhc3NcblxuICBJZiBwcm92aWRlZCBlYXNpbmcgZnVuY3Rpb24sIHJldHVybnMgZWFzaW5nIGZ1bmN0aW9uIHdpdGggXG4gIGluL291dC9pbk91dCB2YXJpYXRpb25zXG5cbiAgSWYgcHJvdmlkZWQgZm91ciBhcmd1bWVudHMsIHJldHVybnMgbmV3IEJlemllciBjbGFzcyBpbnN0ZWFkLlxuKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZUVhc2luZ0Z1bmN0aW9uKG1ldGhvZCkge1xuICBsZXQgZWFzaW5nRnVuY3Rpb24gPSAocHJvZ3Jlc3MsIHN0cmVuZ3RoKSA9PiBtZXRob2QocHJvZ3Jlc3MsIHN0cmVuZ3RoKTtcblxuICBlYXNpbmdGdW5jdGlvbi5pbiA9IChwcm9ncmVzcywgc3RyZW5ndGgpID0+IG1ldGhvZChwcm9ncmVzcywgc3RyZW5ndGgpO1xuICBlYXNpbmdGdW5jdGlvbi5vdXQgPSByZXZlcnNlRWFzaW5nKG1ldGhvZCk7XG4gIGVhc2luZ0Z1bmN0aW9uLmluT3V0ID0gbWlycm9yRWFzaW5nKG1ldGhvZCk7XG5cbiAgcmV0dXJuIGVhc2luZ0Z1bmN0aW9uO1xufVxuIl19

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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hY3Rpb25zL2Vhc2luZy9jcmVhdGUtYmV6aWVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztrQkFtQ3dCLFc7Ozs7Ozs7Ozs7Ozs7Ozs7QUFwQnhCLElBQU0sb0JBQW9CLENBQTFCO0FBQ0EsSUFBTSxtQkFBbUIsS0FBekI7QUFDQSxJQUFNLHdCQUF3QixTQUE5QjtBQUNBLElBQU0sNkJBQTZCLEVBQW5DO0FBQ0EsSUFBTSxzQkFBc0IsRUFBNUI7QUFDQSxJQUFNLHFCQUFxQixPQUFPLHNCQUFzQixHQUE3QixDQUEzQjtBQUNBLElBQU0scUJBQXNCLE9BQU8sWUFBUCxLQUF3QixXQUFwRDs7O0FBR0EsSUFBTSxJQUFJLFVBQUMsRUFBRCxFQUFLLEVBQUw7QUFBQSxTQUFZLE1BQU0sTUFBTSxFQUFaLEdBQWlCLE1BQU0sRUFBbkM7QUFBQSxDQUFWO0FBQ0EsSUFBTSxJQUFJLFVBQUMsRUFBRCxFQUFLLEVBQUw7QUFBQSxTQUFZLE1BQU0sRUFBTixHQUFXLE1BQU0sRUFBN0I7QUFBQSxDQUFWO0FBQ0EsSUFBTSxJQUFJLFVBQUMsRUFBRDtBQUFBLFNBQVEsTUFBTSxFQUFkO0FBQUEsQ0FBVjs7QUFFQSxJQUFNLFdBQVcsVUFBQyxDQUFELEVBQUksRUFBSixFQUFRLEVBQVI7QUFBQSxTQUFlLE1BQU0sRUFBRSxFQUFGLEVBQU0sRUFBTixDQUFOLEdBQWtCLENBQWxCLEdBQXNCLENBQXRCLEdBQTBCLE1BQU0sRUFBRSxFQUFGLEVBQU0sRUFBTixDQUFOLEdBQWtCLENBQTVDLEdBQWdELEVBQUUsRUFBRixDQUEvRDtBQUFBLENBQWpCOztBQUVBLElBQU0sYUFBYSxVQUFDLENBQUQsRUFBSSxFQUFKLEVBQVEsRUFBUjtBQUFBLFNBQWUsQ0FBQyxDQUFDLEVBQUUsRUFBRixFQUFNLEVBQU4sSUFBWSxDQUFaLEdBQWdCLEVBQUUsRUFBRixFQUFNLEVBQU4sQ0FBakIsSUFBOEIsQ0FBOUIsR0FBa0MsRUFBRSxFQUFGLENBQW5DLElBQTRDLENBQTNE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K0JBLE1BQU0sYUFBYSxZQUFNO0FBQ3ZCLG1CQUFlLElBQWY7QUFDQSxRQUFJLE9BQU8sR0FBUCxJQUFjLE9BQU8sR0FBekIsRUFBOEI7QUFDNUI7QUFDRDtBQUNGLEdBTEQ7O0FBT0EsTUFBTSxXQUFXLFVBQUMsRUFBRCxFQUFRO0FBQ3ZCLFFBQUksb0JBQUo7O0FBRUEsUUFBSSxDQUFDLFlBQUwsRUFBbUI7QUFDakI7QUFDRDs7O0FBR0QsUUFBSSxRQUFRLEdBQVIsSUFBZSxRQUFRLEdBQTNCLEVBQWdDO0FBQzlCLG9CQUFjLEVBQWQ7OztBQUdELEtBSkQsTUFJTyxJQUFJLE9BQU8sQ0FBWCxFQUFjO0FBQ25CLG9CQUFjLENBQWQ7OztBQUdELEtBSk0sTUFJQSxJQUFJLE9BQU8sQ0FBWCxFQUFjO0FBQ25CLG9CQUFjLENBQWQ7QUFFRCxLQUhNLE1BR0E7QUFDTCxvQkFBYyxXQUFXLFNBQVMsRUFBVCxDQUFYLEVBQXlCLEdBQXpCLEVBQThCLEdBQTlCLENBQWQ7QUFDRDs7QUFFRCxXQUFPLFdBQVA7QUFDRCxHQXhCRDs7QUEwQkEsU0FBTyxRQUFQO0FBQ0QiLCJmaWxlIjoiY3JlYXRlLWJlemllci5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvbWF0dHBlcnJ5L1NpdGVzL3BvcG1vdGlvbiIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gIEJlemllciBmdW5jdGlvbiBnZW5lcmF0b3JcbiAgICBcbiAgR2HDq3RhbiBSZW5hdWRlYXUncyBCZXppZXJFYXNpbmdcbiAgaHR0cHM6Ly9naXRodWIuY29tL2dyZS9iZXppZXItZWFzaW5nL2Jsb2IvbWFzdGVyL2luZGV4LmpzICBcbiAgaHR0cHM6Ly9naXRodWIuY29tL2dyZS9iZXppZXItZWFzaW5nL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcbiAgWW91J3JlIGEgaGVyb1xuICBcbiAgVXNlXG4gIFxuICAgIHZhciBlYXNlT3V0ID0gbmV3IEJlemllciguMTcsLjY3LC44MywuNjcpLFxuICAgICAgeCA9IGVhc2VPdXQoMC41KTsgLy8gcmV0dXJucyAwLjYyNy4uLlxuKi9cblxuLy8gQ29uc3RhbnRzXG5jb25zdCBORVdUT05fSVRFUkFUSU9OUyA9IDg7XG5jb25zdCBORVdUT05fTUlOX1NMT1BFID0gMC4wMDE7XG5jb25zdCBTVUJESVZJU0lPTl9QUkVDSVNJT04gPSAwLjAwMDAwMDE7XG5jb25zdCBTVUJESVZJU0lPTl9NQVhfSVRFUkFUSU9OUyA9IDEwO1xuY29uc3QgS19TUExJTkVfVEFCTEVfU0laRSA9IDExO1xuY29uc3QgS19TQU1QTEVfU1RFUF9TSVpFID0gMS4wIC8gKEtfU1BMSU5FX1RBQkxFX1NJWkUgLSAxLjApO1xuY29uc3QgRkxPQVRfMzJfU1VQUE9SVEVEID0gKHR5cGVvZiBGbG9hdDMyQXJyYXkgIT09ICd1bmRlZmluZWQnKTtcblxuLy8gSGVscGVyIG1ldGhvZHNcbmNvbnN0IGEgPSAoYTEsIGEyKSA9PiAxLjAgLSAzLjAgKiBhMiArIDMuMCAqIGExO1xuY29uc3QgYiA9IChhMSwgYTIpID0+IDMuMCAqIGEyIC0gNi4wICogYTE7XG5jb25zdCBjID0gKGExKSA9PiAzLjAgKiBhMTtcblxuY29uc3QgZ2V0U2xvcGUgPSAodCwgYTEsIGEyKSA9PiAzLjAgKiBhKGExLCBhMikgKiB0ICogdCArIDIuMCAqIGIoYTEsIGEyKSAqIHQgKyBjKGExKTtcblxuY29uc3QgY2FsY0JlemllciA9ICh0LCBhMSwgYTIpID0+ICgoYShhMSwgYTIpICogdCArIGIoYTEsIGEyKSkgKiB0ICsgYyhhMSkpICogdDtcblxuLypcbiAgQ3JlYXRlIGEgY3ViaWMgYmV6aWVyIHJlc29sdmVyXG4qL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3ViaWNCZXppZXIobVgxLCBtWTEsIG1YMiwgbVkyKSB7XG4gIGNvbnN0IHNhbXBsZVZhbHVlcyA9IEZMT0FUXzMyX1NVUFBPUlRFRCA/IG5ldyBGbG9hdDMyQXJyYXkoS19TUExJTkVfVEFCTEVfU0laRSkgOiBuZXcgQXJyYXkoS19TUExJTkVfVEFCTEVfU0laRSk7XG4gIGxldCBfcHJlY29tcHV0ZWQgPSBmYWxzZTtcblxuICBjb25zdCBiaW5hcnlTdWJkaXZpZGUgPSAoYVgsIGFBLCBhQikgPT4ge1xuICAgIGxldCBpID0gMDtcbiAgICBsZXQgY3VycmVudFg7XG4gICAgbGV0IGN1cnJlbnRUO1xuXG4gICAgZG8ge1xuICAgICAgY3VycmVudFQgPSBhQSArIChhQiAtIGFBKSAvIDIuMDtcbiAgICAgIGN1cnJlbnRYID0gY2FsY0JlemllcihjdXJyZW50VCwgbVgxLCBtWDIpIC0gYVg7XG4gICAgICBpZiAoY3VycmVudFggPiAwLjApIHtcbiAgICAgICAgYUIgPSBjdXJyZW50VDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGFBID0gY3VycmVudFQ7XG4gICAgICB9XG4gICAgfSB3aGlsZSAoTWF0aC5hYnMoY3VycmVudFgpID4gU1VCRElWSVNJT05fUFJFQ0lTSU9OICYmICsraSA8IFNVQkRJVklTSU9OX01BWF9JVEVSQVRJT05TKTtcblxuICAgIHJldHVybiBjdXJyZW50VDtcbiAgfTtcblxuICBjb25zdCBuZXd0b25SYXBoc29uSXRlcmF0ZSA9IChhWCwgYUd1ZXNzVCkgPT4ge1xuICAgIGxldCBpID0gMDtcbiAgICBsZXQgY3VycmVudFNsb3BlID0gMDtcbiAgICBsZXQgY3VycmVudFg7XG5cbiAgICBmb3IgKDsgaSA8IE5FV1RPTl9JVEVSQVRJT05TOyArK2kpIHtcbiAgICAgIGN1cnJlbnRTbG9wZSA9IGdldFNsb3BlKGFHdWVzc1QsIG1YMSwgbVgyKTtcbiAgICAgIFxuICAgICAgaWYgKGN1cnJlbnRTbG9wZSA9PT0gMC4wKSB7XG4gICAgICAgIHJldHVybiBhR3Vlc3NUO1xuICAgICAgfVxuICAgICAgXG4gICAgICBjdXJyZW50WCA9IGNhbGNCZXppZXIoYUd1ZXNzVCwgbVgxLCBtWDIpIC0gYVg7XG4gICAgICBhR3Vlc3NUIC09IGN1cnJlbnRYIC8gY3VycmVudFNsb3BlO1xuICAgIH1cbiAgICBcbiAgICByZXR1cm4gYUd1ZXNzVDtcbiAgfTtcblxuICBjb25zdCBjYWxjU2FtcGxlVmFsdWVzID0gKCkgPT4ge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgS19TUExJTkVfVEFCTEVfU0laRTsgKytpKSB7XG4gICAgICBzYW1wbGVWYWx1ZXNbaV0gPSBjYWxjQmV6aWVyKGkgKiBLX1NBTVBMRV9TVEVQX1NJWkUsIG1YMSwgbVgyKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgZ2V0VEZvclggPSAoYVgpID0+IHtcbiAgICBsZXQgaW50ZXJ2YWxTdGFydCA9IDAuMDtcbiAgICBsZXQgY3VycmVudFNhbXBsZSA9IDE7XG4gICAgbGV0IGxhc3RTYW1wbGUgPSBLX1NQTElORV9UQUJMRV9TSVpFIC0gMTtcbiAgICBsZXQgZGlzdCA9IDAuMDtcbiAgICBsZXQgZ3Vlc3NGb3JUID0gMC4wO1xuICAgIGxldCBpbml0aWFsU2xvcGUgPSAwLjA7XG4gICAgICBcbiAgICBmb3IgKDsgY3VycmVudFNhbXBsZSAhPSBsYXN0U2FtcGxlICYmIHNhbXBsZVZhbHVlc1tjdXJyZW50U2FtcGxlXSA8PSBhWDsgKytjdXJyZW50U2FtcGxlKSB7XG4gICAgICBpbnRlcnZhbFN0YXJ0ICs9IEtfU0FNUExFX1NURVBfU0laRTtcbiAgICB9XG4gICAgXG4gICAgLS1jdXJyZW50U2FtcGxlO1xuICAgIFxuICAgIGRpc3QgPSAoYVggLSBzYW1wbGVWYWx1ZXNbY3VycmVudFNhbXBsZV0pIC8gKHNhbXBsZVZhbHVlc1tjdXJyZW50U2FtcGxlKzFdIC0gc2FtcGxlVmFsdWVzW2N1cnJlbnRTYW1wbGVdKTtcbiAgICBndWVzc0ZvclQgPSBpbnRlcnZhbFN0YXJ0ICsgZGlzdCAqIEtfU0FNUExFX1NURVBfU0laRTtcbiAgICBcbiAgICBpbml0aWFsU2xvcGUgPSBnZXRTbG9wZShndWVzc0ZvclQsIG1YMSwgbVgyKTtcbiAgICBcbiAgICAvLyBJZiBzbG9wZSBpcyBncmVhdGVyIHRoYW4gbWluXG4gICAgaWYgKGluaXRpYWxTbG9wZSA+PSBORVdUT05fTUlOX1NMT1BFKSB7XG4gICAgICByZXR1cm4gbmV3dG9uUmFwaHNvbkl0ZXJhdGUoYVgsIGd1ZXNzRm9yVCk7XG4gICAgLy8gU2xvcGUgaXMgZXF1YWwgdG8gbWluXG4gICAgfSBlbHNlIGlmIChpbml0aWFsU2xvcGUgPT09IDAuMCkge1xuICAgICAgcmV0dXJuIGd1ZXNzRm9yVDtcbiAgICAvLyBTbG9wZSBpcyBsZXNzIHRoYW4gbWluXG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBiaW5hcnlTdWJkaXZpZGUoYVgsIGludGVydmFsU3RhcnQsIGludGVydmFsU3RhcnQgKyBLX1NBTVBMRV9TVEVQX1NJWkUpO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBwcmVjb21wdXRlID0gKCkgPT4ge1xuICAgIF9wcmVjb21wdXRlZCA9IHRydWU7XG4gICAgaWYgKG1YMSAhPSBtWTEgfHwgbVgyICE9IG1ZMikge1xuICAgICAgY2FsY1NhbXBsZVZhbHVlcygpO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCByZXNvbHZlciA9IChhWCkgPT4ge1xuICAgIGxldCByZXR1cm5WYWx1ZTtcblxuICAgIGlmICghX3ByZWNvbXB1dGVkKSB7XG4gICAgICBwcmVjb21wdXRlKCk7XG4gICAgfVxuICAgIFxuICAgIC8vIElmIGxpbmVhciBncmFkaWVudCwgcmV0dXJuIFggYXMgVFxuICAgIGlmIChtWDEgPT09IG1ZMSAmJiBtWDIgPT09IG1ZMikge1xuICAgICAgcmV0dXJuVmFsdWUgPSBhWDtcbiAgICAgIFxuICAgIC8vIElmIGF0IHN0YXJ0LCByZXR1cm4gMFxuICAgIH0gZWxzZSBpZiAoYVggPT09IDApIHtcbiAgICAgIHJldHVyblZhbHVlID0gMDtcbiAgICAgIFxuICAgIC8vIElmIGF0IGVuZCwgcmV0dXJuIDFcbiAgICB9IGVsc2UgaWYgKGFYID09PSAxKSB7XG4gICAgICByZXR1cm5WYWx1ZSA9IDE7XG5cbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuVmFsdWUgPSBjYWxjQmV6aWVyKGdldFRGb3JYKGFYKSwgbVkxLCBtWTIpO1xuICAgIH1cbiAgICBcbiAgICByZXR1cm4gcmV0dXJuVmFsdWU7XG4gIH07XG5cbiAgcmV0dXJuIHJlc29sdmVyO1xufVxuIl19

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
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy90YXNrL3RpY2suanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUlBLElBQU0sU0FBVSxPQUFPLE1BQVAsS0FBa0IsV0FBbEIsSUFBaUMsT0FBTyxxQkFBekMsR0FBa0UsSUFBbEUsR0FBeUUsS0FBeEY7O0FBRUEsSUFBSSxhQUFKOztBQUVBLElBQUksTUFBSixFQUFZO0FBQ1YsU0FBTyxVQUFDLFFBQUQ7QUFBQSxXQUFjLE9BQU8scUJBQVAsQ0FBNkIsUUFBN0IsQ0FBZDtBQUFBLEdBQVA7QUFFRCxDQUhELE1BR087QUFBQTs7Ozs7Ozs7Ozs7Ozs7QUFlTCxRQUFJLFdBQVcsQ0FBZjs7QUFFQSxXQUFPLFVBQUMsUUFBRCxFQUFjO0FBQ25CLFVBQU0sY0FBYyxJQUFJLElBQUosR0FBVyxPQUFYLEVBQXBCO0FBQ0EsVUFBTSxhQUFhLEtBQUssR0FBTCxDQUFTLENBQVQsRUFBWSxNQUFNLGNBQWMsUUFBcEIsQ0FBWixDQUFuQjs7QUFFQSxpQkFBVyxjQUFjLFVBQXpCOztBQUVBLGlCQUFXO0FBQUEsZUFBTSxTQUFTLFFBQVQsQ0FBTjtBQUFBLE9BQVgsRUFBcUMsVUFBckM7QUFDRCxLQVBEO0FBakJLO0FBeUJOOztrQkFFYyxJIiwiZmlsZSI6InRpY2suanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL21hdHRwZXJyeS9TaXRlcy9wb3Btb3Rpb24iLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICBEZXRlY3QgYW5kIGxvYWQgYW4gYXBwcm9wcmlhdGUgY2xvY2sgc2V0dGluZyBmb3IgdGhlIGVudmlyb25tZW50XG4qL1xuXG5jb25zdCBoYXNSQUYgPSAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSkgPyB0cnVlIDogZmFsc2U7XG5cbmxldCB0aWNrO1xuXG5pZiAoaGFzUkFGKSB7XG4gIHRpY2sgPSAoY2FsbGJhY2spID0+IHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoY2FsbGJhY2spO1xuXG59IGVsc2Uge1xuICAvKlxuICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSBwb2x5ZmlsbFxuICAgIFxuICAgIEZvciBJRTgvOSBGbGluc3RvbmVzIGFuZCBub24tYnJvd3NlciBlbnZpcm9ubWVudHNcblxuICAgIFRha2VuIGZyb20gUGF1bCBJcmlzaC4gV2UndmUgc3RyaXBwZWQgb3V0IGNhbmNlbEFuaW1hdGlvbkZyYW1lIGNoZWNrcyBiZWNhdXNlIHdlIGRvbid0IGZveCB3aXRoIHRoYXRcbiAgICBcbiAgICBodHRwOi8vcGF1bGlyaXNoLmNvbS8yMDExL3JlcXVlc3RhbmltYXRpb25mcmFtZS1mb3Itc21hcnQtYW5pbWF0aW5nL1xuICAgIGh0dHA6Ly9teS5vcGVyYS5jb20vZW1vbGxlci9ibG9nLzIwMTEvMTIvMjAvcmVxdWVzdGFuaW1hdGlvbmZyYW1lLWZvci1zbWFydC1lci1hbmltYXRpbmdcbiAgICAgXG4gICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lIHBvbHlmaWxsIGJ5IEVyaWsgTcO2bGxlci4gZml4ZXMgZnJvbSBQYXVsIElyaXNoIGFuZCBUaW5vIFppamRlbFxuICAgICBcbiAgICBNSVQgbGljZW5zZVxuICAqL1xuICBsZXQgbGFzdFRpbWUgPSAwO1xuXG4gIHRpY2sgPSAoY2FsbGJhY2spID0+IHtcbiAgICBjb25zdCBjdXJyZW50VGltZSA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuICAgIGNvbnN0IHRpbWVUb0NhbGwgPSBNYXRoLm1heCgwLCAxNiAtIChjdXJyZW50VGltZSAtIGxhc3RUaW1lKSk7XG5cbiAgICBsYXN0VGltZSA9IGN1cnJlbnRUaW1lICsgdGltZVRvQ2FsbDtcblxuICAgIHNldFRpbWVvdXQoKCkgPT4gY2FsbGJhY2sobGFzdFRpbWUpLCB0aW1lVG9DYWxsKTtcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgdGljazsiXX0=

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
	
	      // If task isn't already running, activate
	      if (_activeIdIndex === -1 && _task) {
	        if (_task.isPriority) {
	          runningIds.unshift(_id);
	        } else {
	          runningIds.push(_id);
	        }
	
	        if (_task.onActivateLoop) {
	          _task.onActivateLoop();
	        }
	
	        updateRunningCount(true, _task.isLazy);
	      }
	    }
	
	    activateQueue.splice(0, activateQueueLength);
	
	    return runningIds;
	  }
	};
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy90YXNrL21hbmFnZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUNBLElBQUksZ0JBQWdCLENBQXBCOzs7QUFHQSxJQUFJLG9CQUFvQixDQUF4Qjs7O0FBR0EsSUFBSSw0QkFBNEIsQ0FBaEM7OztBQUdBLElBQU0sYUFBYSxFQUFuQjs7O0FBR0EsSUFBTSxjQUFjLEVBQXBCOzs7QUFHQSxJQUFNLGdCQUFnQixFQUF0Qjs7O0FBR0EsSUFBTSxrQkFBa0IsRUFBeEI7Ozs7Ozs7OztBQVNBLElBQU0sZUFBZSxVQUFDLEVBQUQsRUFBSyxNQUFMLEVBQWEsT0FBYixFQUF5QjtBQUM1QyxNQUFNLGFBQWEsT0FBTyxPQUFQLENBQWUsRUFBZixDQUFuQjtBQUNBLE1BQU0sY0FBYyxRQUFRLE9BQVIsQ0FBZ0IsRUFBaEIsQ0FBcEI7O0FBRUEsTUFBSSxlQUFlLENBQUMsQ0FBcEIsRUFBdUI7QUFDckIsV0FBTyxJQUFQLENBQVksRUFBWjtBQUNEOztBQUVELE1BQUksY0FBYyxDQUFDLENBQW5CLEVBQXNCO0FBQ3BCLFlBQVEsTUFBUixDQUFlLFdBQWYsRUFBNEIsQ0FBNUI7QUFDRDtBQUNGLENBWEQ7Ozs7Ozs7O0FBbUJBLElBQU0scUJBQXFCLFVBQUMsR0FBRCxFQUFNLE1BQU4sRUFBaUI7QUFDMUMsTUFBTSxTQUFTLE1BQU0sQ0FBTixHQUFVLENBQUMsQ0FBMUI7O0FBRUEsdUJBQXFCLE1BQXJCOztBQUVBLE1BQUksQ0FBQyxNQUFMLEVBQWE7QUFDWCxpQ0FBNkIsTUFBN0I7QUFDRDtBQUNGLENBUkQ7O2tCQVVlO0FBQ2IsMEJBRGE7OztBQUliLFlBQVUsVUFBQyxFQUFELEVBQUssSUFBTCxFQUFjO0FBQ3RCLGdCQUFZLEVBQVosSUFBa0IsSUFBbEI7QUFDQSxTQUFLLFFBQUwsR0FBZ0IsSUFBaEI7QUFDQSxpQkFBYSxFQUFiLEVBQWlCLGFBQWpCLEVBQWdDLGVBQWhDOztBQUVBLFFBQUksS0FBSyxVQUFULEVBQXFCO0FBQ25CLFdBQUssVUFBTCxDQUFnQixJQUFoQjtBQUNEOztBQUVELFFBQUksS0FBSyxjQUFULEVBQXlCO0FBQ3ZCLFdBQUssY0FBTCxDQUFvQixJQUFwQjtBQUNEO0FBQ0YsR0FoQlk7OztBQW1CYixjQUFZLFVBQUMsRUFBRCxFQUFRO0FBQ2xCLFFBQU0sT0FBTyxZQUFZLEVBQVosQ0FBYjs7QUFFQSxRQUFJLElBQUosRUFBVTtBQUNSLG1CQUFhLEVBQWIsRUFBaUIsZUFBakIsRUFBa0MsYUFBbEM7QUFDQSxXQUFLLFFBQUwsR0FBZ0IsS0FBaEI7O0FBRUEsVUFBSSxLQUFLLFlBQVQsRUFBdUI7QUFDckIsYUFBSyxZQUFMLENBQWtCLElBQWxCO0FBQ0Q7QUFDRjtBQUNGLEdBOUJZOzs7QUFpQ2IsZ0NBQThCO0FBQUEsV0FBTSx5QkFBTjtBQUFBLEdBakNqQjs7O0FBb0NiLGFBQVc7QUFBQSxXQUFNLGVBQU47QUFBQSxHQXBDRTs7O0FBdUNiLGdCQUFjLFlBQU07Ozs7QUFJbEIsUUFBTSx3QkFBd0IsZ0JBQWdCLE1BQTlDOztBQUVBLFNBQUssSUFBSSxJQUFJLENBQWIsRUFBZ0IsSUFBSSxxQkFBcEIsRUFBMkMsR0FBM0MsRUFBZ0Q7QUFDOUMsVUFBTSxLQUFLLGdCQUFnQixDQUFoQixDQUFYO0FBQ0EsVUFBTSxnQkFBZ0IsV0FBVyxPQUFYLENBQW1CLEVBQW5CLENBQXRCO0FBQ0EsVUFBTSxPQUFPLFlBQVksRUFBWixDQUFiOzs7QUFHQSxVQUFJLGdCQUFnQixDQUFDLENBQXJCLEVBQXdCO0FBQ3RCLG1CQUFXLE1BQVgsQ0FBa0IsYUFBbEIsRUFBaUMsQ0FBakM7QUFDQSwyQkFBbUIsS0FBbkIsRUFBMEIsS0FBSyxNQUEvQjtBQUNBLGVBQU8sWUFBWSxFQUFaLENBQVA7QUFDRDtBQUNGOzs7Ozs7QUFNRCxvQkFBZ0IsTUFBaEIsQ0FBdUIsQ0FBdkIsRUFBMEIscUJBQTFCOzs7OztBQUtBLFFBQU0sc0JBQXNCLGNBQWMsTUFBMUM7O0FBRUEsU0FBSyxJQUFJLEtBQUksQ0FBYixFQUFnQixLQUFJLG1CQUFwQixFQUF5QyxJQUF6QyxFQUE4QztBQUM1QyxVQUFNLE1BQUssY0FBYyxFQUFkLENBQVg7QUFDQSxVQUFNLGlCQUFnQixXQUFXLE9BQVgsQ0FBbUIsR0FBbkIsQ0FBdEI7QUFDQSxVQUFNLFFBQU8sWUFBWSxHQUFaLENBQWI7OztBQUdBLFVBQUksbUJBQWtCLENBQUMsQ0FBbkIsSUFBd0IsS0FBNUIsRUFBa0M7QUFDaEMsWUFBSSxNQUFLLFVBQVQsRUFBcUI7QUFDbkIscUJBQVcsT0FBWCxDQUFtQixHQUFuQjtBQUNELFNBRkQsTUFFTztBQUNMLHFCQUFXLElBQVgsQ0FBZ0IsR0FBaEI7QUFDRDs7QUFFRCxZQUFJLE1BQUssY0FBVCxFQUF5QjtBQUN2QixnQkFBSyxjQUFMO0FBQ0Q7O0FBRUQsMkJBQW1CLElBQW5CLEVBQXlCLE1BQUssTUFBOUI7QUFDRDtBQUNGOztBQUVELGtCQUFjLE1BQWQsQ0FBcUIsQ0FBckIsRUFBd0IsbUJBQXhCOztBQUVBLFdBQU8sVUFBUDtBQUNEO0FBN0ZZLEMiLCJmaWxlIjoibWFuYWdlci5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvbWF0dHBlcnJ5L1NpdGVzL3BvcG1vdGlvbiIsInNvdXJjZXNDb250ZW50IjpbIi8vIFtpbnRdOiBJbmNyZW1lbnRlZCBmb3IgZWFjaCBuZXcgcnVubmluZyB0YXNrXG5sZXQgY3VycmVudFRhc2tJZCA9IDA7XG5cbi8vIFtpbnRdOiBOdW1iZXIgb2YgYWxsIHJ1bm5pbmcgdGFza2VzXG5sZXQgdG90YWxSdW5uaW5nQ291bnQgPSAwO1xuXG4vLyBbaW50XTogTnVtYmVyIG9mIHJ1bm5pbmcgdGFza2VzIGV4Y2x1ZGluZyBiYWNrZ3JvdW5kIHRhc2tlc1xubGV0IG5vbkJhY2tncm91bmRSdW5uaW5nQ291bnQgPSAwO1xuXG4vLyBbYXJyYXldOiBBcnJheSBvZiBydW5uaW5nIHRhc2sgSURzXG5jb25zdCBydW5uaW5nSWRzID0gW107XG5cbi8vIFtvYmplY3RdOiBNYXAgb2YgcnVubmluZyB0YXNrZXNcbmNvbnN0IGFjdGl2ZVRhc2tzID0ge307XG5cbi8vIFthcnJheV06IEFycmF5IG9mIHRhc2sgSURzIHF1ZXVlZCBmb3IgYWN0aXZhdGlvblxuY29uc3QgYWN0aXZhdGVRdWV1ZSA9IFtdO1xuXG4vLyBbYXJyYXldOiBBcnJheSBvZiB0YXNrIElEcyBxdWV1ZWQgZm9yIGRlYWN0aXZhdGlvblxuY29uc3QgZGVhY3RpdmF0ZVF1ZXVlID0gW107XG5cbi8qXG4gIFVwZGF0ZSBhY3RpdmF0ZS9kZWFjdGl2YXRlIHF1ZXVlc1xuXG4gIEBwYXJhbSBbbnVtYmVyXVxuICBAcGFyYW0gW2FycmF5XVxuICBAcGFyYW0gW2FycmF5XVxuKi9cbmNvbnN0IHVwZGF0ZVF1ZXVlcyA9IChpZCwgaW5MaXN0LCBvdXRMaXN0KSA9PiB7XG4gIGNvbnN0IGluUG9zaXRpb24gPSBpbkxpc3QuaW5kZXhPZihpZCk7XG4gIGNvbnN0IG91dFBvc2l0aW9uID0gb3V0TGlzdC5pbmRleE9mKGlkKTtcblxuICBpZiAoaW5Qb3NpdGlvbiA9PT0gLTEpIHtcbiAgICBpbkxpc3QucHVzaChpZCk7XG4gIH1cblxuICBpZiAob3V0UG9zaXRpb24gPiAtMSkge1xuICAgIG91dExpc3Quc3BsaWNlKG91dFBvc2l0aW9uLCAxKTtcbiAgfVxufTtcblxuLypcbiAgVXBkYXRlIHJ1bm5pbmdcblxuICBbYm9vbGVhbl06IGB0cnVlYCB0byBhZGRcbiAgW2Jvb2xlYW5dOiBgdHJ1ZWAgaWYgbGF6eVxuKi9cbmNvbnN0IHVwZGF0ZVJ1bm5pbmdDb3VudCA9IChhZGQsIGlzTGF6eSkgPT4ge1xuICBjb25zdCBtb2RpZnkgPSBhZGQgPyAxIDogLTE7XG5cbiAgdG90YWxSdW5uaW5nQ291bnQgKz0gbW9kaWZ5O1xuXG4gIGlmICghaXNMYXp5KSB7XG4gICAgbm9uQmFja2dyb3VuZFJ1bm5pbmdDb3VudCArPSBtb2RpZnk7XG4gIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgYWN0aXZlVGFza3MsXG5cbiAgLy8gQWN0aXZhdGUgYSB0YXNrXG4gIGFjdGl2YXRlOiAoaWQsIHRhc2spID0+IHtcbiAgICBhY3RpdmVUYXNrc1tpZF0gPSB0YXNrO1xuICAgIHRhc2suaXNBY3RpdmUgPSB0cnVlO1xuICAgIHVwZGF0ZVF1ZXVlcyhpZCwgYWN0aXZhdGVRdWV1ZSwgZGVhY3RpdmF0ZVF1ZXVlKTtcblxuICAgIGlmICh0YXNrLm9uQWN0aXZhdGUpIHtcbiAgICAgIHRhc2sub25BY3RpdmF0ZSh0YXNrKTtcbiAgICB9XG5cbiAgICBpZiAodGFzay5vbkFjdGl2YXRlT25jZSkge1xuICAgICAgdGFzay5vbkFjdGl2YXRlT25jZSh0YXNrKTtcbiAgICB9XG4gIH0sXG5cbiAgLy8gRGVhY3RpdmF0ZSBhIHRhc2tcbiAgZGVhY3RpdmF0ZTogKGlkKSA9PiB7XG4gICAgY29uc3QgdGFzayA9IGFjdGl2ZVRhc2tzW2lkXTtcblxuICAgIGlmICh0YXNrKSB7XG4gICAgICB1cGRhdGVRdWV1ZXMoaWQsIGRlYWN0aXZhdGVRdWV1ZSwgYWN0aXZhdGVRdWV1ZSk7XG4gICAgICB0YXNrLmlzQWN0aXZlID0gZmFsc2U7XG5cbiAgICAgIGlmICh0YXNrLm9uRGVhY3RpdmF0ZSkge1xuICAgICAgICB0YXNrLm9uRGVhY3RpdmF0ZSh0YXNrKTtcbiAgICAgIH1cbiAgICB9XG4gIH0sXG5cbiAgLy8gTnVtYmVyIGJhY2tncm91bmQgdGFza2VzXG4gIGdldE5vbkJhY2tncm91bmRSdW5uaW5nQ291bnQ6ICgpID0+IG5vbkJhY2tncm91bmRSdW5uaW5nQ291bnQsXG5cbiAgLy8gSW5jcmVtZW50IGN1cnJlbnQgdGFzayBJRCBhbmQgcmV0dXJuXG4gIGdldFRhc2tJZDogKCkgPT4gY3VycmVudFRhc2tJZCsrLFxuXG4gIC8vIFJlc29sdmUgYWN0aXZhdGUvZGVhY3RpdmF0ZSB0YXNrZXMgYW5kIHJldHVybiBhY3RpdmUgaWRzXG4gIGdldEFjdGl2ZUlkczogKCkgPT4ge1xuICAgIC8qXG4gICAgICB0YXNrIGRlYWN0aXZhdGUgcXVldWVcbiAgICAqL1xuICAgIGNvbnN0IGRlYWN0aXZhdGVRdWV1ZUxlbmd0aCA9IGRlYWN0aXZhdGVRdWV1ZS5sZW5ndGg7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGRlYWN0aXZhdGVRdWV1ZUxlbmd0aDsgaSsrKSB7XG4gICAgICBjb25zdCBpZCA9IGRlYWN0aXZhdGVRdWV1ZVtpXTtcbiAgICAgIGNvbnN0IGFjdGl2ZUlkSW5kZXggPSBydW5uaW5nSWRzLmluZGV4T2YoaWQpO1xuICAgICAgY29uc3QgdGFzayA9IGFjdGl2ZVRhc2tzW2lkXTtcblxuICAgICAgLy8gSWYgdGhpcyBpcyBhIHJ1bm5pbmcgdGFzaywgZGVhY3RpdmF0ZVxuICAgICAgaWYgKGFjdGl2ZUlkSW5kZXggPiAtMSkge1xuICAgICAgICBydW5uaW5nSWRzLnNwbGljZShhY3RpdmVJZEluZGV4LCAxKTtcbiAgICAgICAgdXBkYXRlUnVubmluZ0NvdW50KGZhbHNlLCB0YXNrLmlzTGF6eSk7XG4gICAgICAgIGRlbGV0ZSBhY3RpdmVUYXNrc1tpZF07XG4gICAgICB9XG4gICAgfVxuXG4gICAgLypcbiAgICAgIEVtcHR5IGRlYWN0aXZhdGUgcXVldWUuIFdlIHVzZSBgQXJyYXkuc3BsaWNlYCBiZWNhdXNlIGl0IGRvZXNuJ3RcbiAgICAgIHdvcmtzIG9uIHRoZSBvcmlnaW5hbCBhcnJheSBzbyB3ZSBkb24ndCBoYXZlIHRvIGdhcmJhZ2UgY29sbGVjdCBhbnl0aGluZ1xuICAgICovXG4gICAgZGVhY3RpdmF0ZVF1ZXVlLnNwbGljZSgwLCBkZWFjdGl2YXRlUXVldWVMZW5ndGgpO1xuXG4gICAgLypcbiAgICAgIHRhc2sgYWN0aXZhdGUgcXVldWVcbiAgICAqL1xuICAgIGNvbnN0IGFjdGl2YXRlUXVldWVMZW5ndGggPSBhY3RpdmF0ZVF1ZXVlLmxlbmd0aDtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYWN0aXZhdGVRdWV1ZUxlbmd0aDsgaSsrKSB7XG4gICAgICBjb25zdCBpZCA9IGFjdGl2YXRlUXVldWVbaV07XG4gICAgICBjb25zdCBhY3RpdmVJZEluZGV4ID0gcnVubmluZ0lkcy5pbmRleE9mKGlkKTtcbiAgICAgIGNvbnN0IHRhc2sgPSBhY3RpdmVUYXNrc1tpZF07XG5cbiAgICAgIC8vIElmIHRhc2sgaXNuJ3QgYWxyZWFkeSBydW5uaW5nLCBhY3RpdmF0ZVxuICAgICAgaWYgKGFjdGl2ZUlkSW5kZXggPT09IC0xICYmIHRhc2spIHtcbiAgICAgICAgaWYgKHRhc2suaXNQcmlvcml0eSkge1xuICAgICAgICAgIHJ1bm5pbmdJZHMudW5zaGlmdChpZCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcnVubmluZ0lkcy5wdXNoKGlkKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0YXNrLm9uQWN0aXZhdGVMb29wKSB7XG4gICAgICAgICAgdGFzay5vbkFjdGl2YXRlTG9vcCgpO1xuICAgICAgICB9XG5cbiAgICAgICAgdXBkYXRlUnVubmluZ0NvdW50KHRydWUsIHRhc2suaXNMYXp5KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBhY3RpdmF0ZVF1ZXVlLnNwbGljZSgwLCBhY3RpdmF0ZVF1ZXVlTGVuZ3RoKTtcblxuICAgIHJldHVybiBydW5uaW5nSWRzO1xuICB9XG59O1xuIl19

/***/ }
/******/ ]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNjZiZTg0NWI4MDA5MjU5MWZjMjQiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xvYWQvZ2xvYmFsLmpzIiwid2VicGFjazovLy8uL3NyYy9wb3Btb3Rpb24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Rhc2svdGltZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FjdGlvbnMvQWN0aW9uLmpzIiwid2VicGFjazovLy8uL3NyYy9hY3Rpb25zL0Zsb3cuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FjdGlvbnMvVHdlZW4uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FjdGlvbnMvUGh5c2ljcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYWN0aW9ucy9UcmFjay5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdGFzay9UYXNrLmpzIiwid2VicGFjazovLy8uL3NyYy9pbnB1dC9JbnB1dC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5jL3N0YWdnZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luYy90aW1lbGluZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYWRhcHRlci9hZGFwdGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9hZGFwdGVyL2F0dHItYWRhcHRlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYWRhcHRlci9jc3MtYWRhcHRlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYWRhcHRlci9vYmplY3QtYWRhcHRlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYWRhcHRlci9zdmctYWRhcHRlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYWRhcHRlci9zdmctcGF0aC1hZGFwdGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9hY3Rpb25zL2Vhc2luZy9wcmVzZXQtZWFzaW5nLmpzIiwid2VicGFjazovLy8uL3NyYy9hY3Rpb25zL2Zsb3cvZ2V0LWZsb3cuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luYy9jYWxjLmpzIiwid2VicGFjazovLy8uL3NyYy9pbmMvdXRpbHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZhbHVlLXR5cGVzL2FscGhhLmpzIiwid2VicGFjazovLy8uL3NyYy92YWx1ZS10eXBlcy9hbmdsZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdmFsdWUtdHlwZXMvY29sb3IuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZhbHVlLXR5cGVzL2NvbXBsZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZhbHVlLXR5cGVzL2hleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdmFsdWUtdHlwZXMvaHNsLmpzIiwid2VicGFjazovLy8uL3NyYy92YWx1ZS10eXBlcy9weC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdmFsdWUtdHlwZXMvcmdiLmpzIiwid2VicGFjazovLy8uL3NyYy92YWx1ZS10eXBlcy9zY2FsZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdmFsdWUtdHlwZXMvc2hhZG93LmpzIiwid2VicGFjazovLy8uL3NyYy92YWx1ZS10eXBlcy91bml0LmpzIiwid2VicGFjazovLy8uL3NyYy9pbmMvdHJhbnNmb3JtZXJzLmpzIiwid2VicGFjazovLy8uL3NyYy92YWx1ZS10eXBlcy9kZXRlY3QuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luYy9udW1lcmljYWwtdmFsdWVzLmpzIiwid2VicGFjazovLy8uL3NyYy9pbmMvZGV0ZWN0LWFkYXB0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FjdGlvbnMvZmxvdy9nZW5lcmF0ZS1ibGVuZC1jdXJ2ZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5wdXQvUG9pbnRlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdGFzay9sb29wLmpzIiwid2VicGFjazovLy8uL3NyYy9hZGFwdGVyL2Nzcy9zdGF0ZS1tYXAuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FkYXB0ZXIvY3NzL3ZhbHVlLXR5cGUtbWFwLmpzIiwid2VicGFjazovLy8uL3NyYy9hZGFwdGVyL2Nzcy9idWlsZC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYWRhcHRlci9jc3MvcHJlZml4ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FkYXB0ZXIvY3NzL3RyYW5zZm9ybS1wcm9wcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYWRhcHRlci9zdmcvdmFsdWUtdHlwZS1tYXAuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FkYXB0ZXIvc3ZnL2J1aWxkLmpzIiwid2VicGFjazovLy8uL3NyYy9hZGFwdGVyL3N2Zy1wYXRoL2J1aWxkLmpzIiwid2VicGFjazovLy8uL3NyYy92YWx1ZS10eXBlcy9zZXR0aW5ncy9kZWZhdWx0LXByb3BzLmpzIiwid2VicGFjazovLy8uL3NyYy92YWx1ZS10eXBlcy9zZXR0aW5ncy9kaWN0aW9uYXJ5LmpzIiwid2VicGFjazovLy8uL3NyYy9hY3Rpb25zL2Vhc2luZy9jcmVhdGUtZWFzaW5nLmpzIiwid2VicGFjazovLy8uL3NyYy9hY3Rpb25zL2Vhc2luZy9jcmVhdGUtYmV6aWVyLmpzIiwid2VicGFjazovLy8uL3NyYy90YXNrL3RpY2suanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Rhc2svbWFuYWdlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdUJBQWU7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSx3Qzs7Ozs7OztBQ3RDQTs7QUFFQTs7QUFFQTs7QUFFQSx3Q0FBdUMsNkJBQTZCLFlBQVksRUFBRSxPQUFPLGlCQUFpQixtQkFBbUIsdUJBQXVCLDRFQUE0RSxFQUFFLEVBQUUsc0JBQXNCLGVBQWUsRUFBRTs7QUFFM1E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsNENBQTJDLDJxQjs7Ozs7O0FDZjNDOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUM7O0FBRUQ7O0FBRUE7O0FBRUE7O0FBRUE7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QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxxRkFBb0YsYUFBYTtBQUNqRztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsNENBQTJDLG1qTDs7Ozs7O0FDMUczQzs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQSx1Q0FBc0MsdUNBQXVDLGdCQUFnQjs7QUFFN0Y7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNILG9DQUFtQyxxQ0FBcUM7O0FBRXhFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBLDRDQUEyQyxtdEM7Ozs7OztBQzVCM0M7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7OztBQUdBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsNENBQTJDLG13ZDs7Ozs7O0FDOVQzQzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsa0JBQWlCLGNBQWM7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFDO0FBQ0Q7QUFDQTs7QUFFQTtBQUNBOztBQUVBLGlCQUFnQjs7QUFFaEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNILGFBQVk7QUFDWjtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUEsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsa0JBQWlCLG1CQUFtQjtBQUNwQztBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FB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RDtBQUNBLDRDQUEyQyxtNEM7Ozs7OztBQ3RCM0M7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUEsdUNBQXNDLHVDQUF1QyxnQkFBZ0I7O0FBRTdGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRDQUEyQywyOUI7Ozs7OztBQ2xDM0M7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQSx1Q0FBc0MsdUNBQXVDLGdCQUFnQjs7QUFFN0Y7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBTztBQUNQO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDRDQUEyQyx1MUk7Ozs7OztBQ3pEM0M7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDRDQUEyQyxtOUU7Ozs7OztBQzlDM0M7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0Q0FBMkMsdXdCOzs7Ozs7QUNuQjNDOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0Q0FBMkMsbXJDOzs7Ozs7QUNaM0M7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDRDQUEyQywrN0Y7Ozs7OztBQ3pEM0M7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSx3QkFBdUI7QUFDdkI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBTztBQUNQO0FBQ0E7QUFDQSxNQUFLOztBQUVMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsV0FBVSx1QkFBdUI7QUFDakM7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0Esb0JBQW1CLHlCQUF5QjtBQUM1QztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsV0FBVSxrRUFBa0U7QUFDNUU7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxNQUFLO0FBQ0w7O0FBRUE7QUFDQSxNQUFLO0FBQ0w7QUFDQSxNQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSw0Q0FBMkMsMjZTOzs7Ozs7QUNqSzNDOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBQztBQUNEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsUUFBTztBQUNQO0FBQ0EsSUFBRztBQUNIOztBQUVBO0FBQ0EsNENBQTJDLG14RTs7Ozs7O0FDOUMzQzs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsSUFBRzs7QUFFSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQSxJQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBLElBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLG9CQUFtQiwyQkFBMkI7QUFDOUM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEscUJBQW9CLDBCQUEwQjtBQUM5QztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLDRDQUEyQyxtclAiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0ZXhwb3J0czoge30sXG4gXHRcdFx0aWQ6IG1vZHVsZUlkLFxuIFx0XHRcdGxvYWRlZDogZmFsc2VcbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiB3ZWJwYWNrL2Jvb3RzdHJhcCA2NmJlODQ1YjgwMDkyNTkxZmMyNFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxudmFyIF9wb3Btb3Rpb24gPSByZXF1aXJlKCcuLi9wb3Btb3Rpb24nKTtcblxudmFyIHBvcG1vdGlvbiA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKF9wb3Btb3Rpb24pO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChvYmopIHsgaWYgKG9iaiAmJiBvYmouX19lc01vZHVsZSkgeyByZXR1cm4gb2JqOyB9IGVsc2UgeyB2YXIgbmV3T2JqID0ge307IGlmIChvYmogIT0gbnVsbCkgeyBmb3IgKHZhciBrZXkgaW4gb2JqKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBrZXkpKSBuZXdPYmpba2V5XSA9IG9ialtrZXldOyB9IH0gbmV3T2JqLmRlZmF1bHQgPSBvYmo7IHJldHVybiBuZXdPYmo7IH0gfVxuXG52YXIgVUlyZWYgPSB3aW5kb3cubW90aW9uO1xuXG5wb3Btb3Rpb24ubm9Db25mbGljdCA9IGZ1bmN0aW9uICgpIHtcbiAgd2luZG93Lm1vdGlvbiA9IFVJcmVmO1xufTtcblxud2luZG93Lm1vdGlvbiA9IHdpbmRvdy5wb3Btb3Rpb24gPSBwb3Btb3Rpb247XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5OeVl5OXNiMkZrTDJkc2IySmhiQzVxY3lKZExDSnVZVzFsY3lJNlcxMHNJbTFoY0hCcGJtZHpJam9pT3p0QlFVRkJPenRKUVVGWkxGTTdPenM3UVVGRldpeEpRVUZOTEZGQlFWRXNUMEZCVHl4TlFVRnlRanM3UVVGRlFTeFZRVUZWTEZWQlFWWXNSMEZCZFVJc1dVRkJXVHRCUVVOcVF5eFRRVUZQTEUxQlFWQXNSMEZCWjBJc1MwRkJhRUk3UVVGRFJDeERRVVpFT3p0QlFVbEJMRTlCUVU4c1RVRkJVQ3hIUVVGblFpeFBRVUZQTEZOQlFWQXNSMEZCYlVJc1UwRkJia01pTENKbWFXeGxJam9pWjJ4dlltRnNMbXB6SWl3aWMyOTFjbU5sVW05dmRDSTZJaTlWYzJWeWN5OXRZWFIwY0dWeWNua3ZVMmwwWlhNdmNHOXdiVzkwYVc5dUlpd2ljMjkxY21ObGMwTnZiblJsYm5RaU9sc2lhVzF3YjNKMElDb2dZWE1nY0c5d2JXOTBhVzl1SUdaeWIyMGdKeTR1TDNCdmNHMXZkR2x2YmljN1hHNWNibU52Ym5OMElGVkpjbVZtSUQwZ2QybHVaRzkzTG0xdmRHbHZianRjYmx4dWNHOXdiVzkwYVc5dUxtNXZRMjl1Wm14cFkzUWdQU0JtZFc1amRHbHZiaUFvS1NCN1hHNGdJSGRwYm1SdmR5NXRiM1JwYjI0Z1BTQlZTWEpsWmp0Y2JuMDdYRzVjYm5kcGJtUnZkeTV0YjNScGIyNGdQU0IzYVc1a2IzY3VjRzl3Ylc5MGFXOXVJRDBnY0c5d2JXOTBhVzl1T3lKZGZRPT1cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2xvYWQvZ2xvYmFsLmpzXG4gKiogbW9kdWxlIGlkID0gMFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0cy5BY3Rpb24gPSBleHBvcnRzLnRyYW5zZm9ybWVycyA9IGV4cG9ydHMudmFsdWVUeXBlID0gZXhwb3J0cy5zZXRHbG9iYWxEaWxhdGlvbiA9IGV4cG9ydHMudXRpbHMgPSBleHBvcnRzLmNhbGMgPSBleHBvcnRzLmRldGVjdEZsb3cgPSBleHBvcnRzLmVhc2luZyA9IGV4cG9ydHMuc3ZnUGF0aCA9IGV4cG9ydHMuc3ZnID0gZXhwb3J0cy5vYmplY3QgPSBleHBvcnRzLmNzcyA9IGV4cG9ydHMuYXR0ciA9IGV4cG9ydHMuY3JlYXRlQWRhcHRlciA9IGV4cG9ydHMudGltZWxpbmUgPSBleHBvcnRzLnN0YWdnZXIgPSBleHBvcnRzLnRhc2sgPSBleHBvcnRzLmlucHV0ID0gZXhwb3J0cy50cmFjayA9IGV4cG9ydHMucGh5c2ljcyA9IGV4cG9ydHMudHdlZW4gPSBleHBvcnRzLmZsb3cgPSB1bmRlZmluZWQ7XG5cbnZhciBfdGltZXIgPSByZXF1aXJlKCcuL3Rhc2svdGltZXInKTtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdzZXRHbG9iYWxEaWxhdGlvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIF90aW1lci5zZXRHbG9iYWxEaWxhdGlvbjtcbiAgfVxufSk7XG5cbnZhciBfQWN0aW9uID0gcmVxdWlyZSgnLi9hY3Rpb25zL0FjdGlvbicpO1xuXG52YXIgX0FjdGlvbjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9BY3Rpb24pO1xuXG52YXIgX0Zsb3cgPSByZXF1aXJlKCcuL2FjdGlvbnMvRmxvdycpO1xuXG52YXIgX0Zsb3cyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfRmxvdyk7XG5cbnZhciBfVHdlZW4gPSByZXF1aXJlKCcuL2FjdGlvbnMvVHdlZW4nKTtcblxudmFyIF9Ud2VlbjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9Ud2Vlbik7XG5cbnZhciBfUGh5c2ljcyA9IHJlcXVpcmUoJy4vYWN0aW9ucy9QaHlzaWNzJyk7XG5cbnZhciBfUGh5c2ljczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9QaHlzaWNzKTtcblxudmFyIF9UcmFjayA9IHJlcXVpcmUoJy4vYWN0aW9ucy9UcmFjaycpO1xuXG52YXIgX1RyYWNrMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX1RyYWNrKTtcblxudmFyIF9UYXNrID0gcmVxdWlyZSgnLi90YXNrL1Rhc2snKTtcblxudmFyIF9UYXNrMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX1Rhc2spO1xuXG52YXIgX0lucHV0ID0gcmVxdWlyZSgnLi9pbnB1dC9JbnB1dCcpO1xuXG52YXIgX0lucHV0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX0lucHV0KTtcblxudmFyIF9zdGFnZ2VyMiA9IHJlcXVpcmUoJy4vaW5jL3N0YWdnZXInKTtcblxudmFyIF9zdGFnZ2VyMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3N0YWdnZXIyKTtcblxudmFyIF90aW1lbGluZTIgPSByZXF1aXJlKCcuL2luYy90aW1lbGluZScpO1xuXG52YXIgX3RpbWVsaW5lMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3RpbWVsaW5lMik7XG5cbnZhciBfYWRhcHRlciA9IHJlcXVpcmUoJy4vYWRhcHRlci9hZGFwdGVyJyk7XG5cbnZhciBfYWRhcHRlcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9hZGFwdGVyKTtcblxudmFyIF9hdHRyQWRhcHRlciA9IHJlcXVpcmUoJy4vYWRhcHRlci9hdHRyLWFkYXB0ZXInKTtcblxudmFyIF9hdHRyQWRhcHRlcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9hdHRyQWRhcHRlcik7XG5cbnZhciBfY3NzQWRhcHRlciA9IHJlcXVpcmUoJy4vYWRhcHRlci9jc3MtYWRhcHRlcicpO1xuXG52YXIgX2Nzc0FkYXB0ZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY3NzQWRhcHRlcik7XG5cbnZhciBfb2JqZWN0QWRhcHRlciA9IHJlcXVpcmUoJy4vYWRhcHRlci9vYmplY3QtYWRhcHRlcicpO1xuXG52YXIgX29iamVjdEFkYXB0ZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfb2JqZWN0QWRhcHRlcik7XG5cbnZhciBfc3ZnQWRhcHRlciA9IHJlcXVpcmUoJy4vYWRhcHRlci9zdmctYWRhcHRlcicpO1xuXG52YXIgX3N2Z0FkYXB0ZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfc3ZnQWRhcHRlcik7XG5cbnZhciBfc3ZnUGF0aEFkYXB0ZXIgPSByZXF1aXJlKCcuL2FkYXB0ZXIvc3ZnLXBhdGgtYWRhcHRlcicpO1xuXG52YXIgX3N2Z1BhdGhBZGFwdGVyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3N2Z1BhdGhBZGFwdGVyKTtcblxudmFyIF9wcmVzZXRFYXNpbmcgPSByZXF1aXJlKCcuL2FjdGlvbnMvZWFzaW5nL3ByZXNldC1lYXNpbmcnKTtcblxudmFyIF9wcmVzZXRFYXNpbmcyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcHJlc2V0RWFzaW5nKTtcblxudmFyIF9nZXRGbG93ID0gcmVxdWlyZSgnLi9hY3Rpb25zL2Zsb3cvZ2V0LWZsb3cnKTtcblxudmFyIF9nZXRGbG93MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2dldEZsb3cpO1xuXG52YXIgX2NhbGMyID0gcmVxdWlyZSgnLi9pbmMvY2FsYycpO1xuXG52YXIgX2NhbGMgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChfY2FsYzIpO1xuXG52YXIgX3V0aWxzMiA9IHJlcXVpcmUoJy4vaW5jL3V0aWxzJyk7XG5cbnZhciBfdXRpbHMgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChfdXRpbHMyKTtcblxudmFyIF9hbHBoYSA9IHJlcXVpcmUoJy4vdmFsdWUtdHlwZXMvYWxwaGEnKTtcblxudmFyIF9hbHBoYTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9hbHBoYSk7XG5cbnZhciBfYW5nbGUgPSByZXF1aXJlKCcuL3ZhbHVlLXR5cGVzL2FuZ2xlJyk7XG5cbnZhciBfYW5nbGUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfYW5nbGUpO1xuXG52YXIgX2NvbG9yID0gcmVxdWlyZSgnLi92YWx1ZS10eXBlcy9jb2xvcicpO1xuXG52YXIgX2NvbG9yMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NvbG9yKTtcblxudmFyIF9jb21wbGV4ID0gcmVxdWlyZSgnLi92YWx1ZS10eXBlcy9jb21wbGV4Jyk7XG5cbnZhciBfY29tcGxleDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jb21wbGV4KTtcblxudmFyIF9oZXggPSByZXF1aXJlKCcuL3ZhbHVlLXR5cGVzL2hleCcpO1xuXG52YXIgX2hleDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9oZXgpO1xuXG52YXIgX2hzbCA9IHJlcXVpcmUoJy4vdmFsdWUtdHlwZXMvaHNsJyk7XG5cbnZhciBfaHNsMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2hzbCk7XG5cbnZhciBfcHggPSByZXF1aXJlKCcuL3ZhbHVlLXR5cGVzL3B4Jyk7XG5cbnZhciBfcHgyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcHgpO1xuXG52YXIgX3JnYiA9IHJlcXVpcmUoJy4vdmFsdWUtdHlwZXMvcmdiJyk7XG5cbnZhciBfcmdiMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JnYik7XG5cbnZhciBfc2NhbGUgPSByZXF1aXJlKCcuL3ZhbHVlLXR5cGVzL3NjYWxlJyk7XG5cbnZhciBfc2NhbGUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfc2NhbGUpO1xuXG52YXIgX3NoYWRvdyA9IHJlcXVpcmUoJy4vdmFsdWUtdHlwZXMvc2hhZG93Jyk7XG5cbnZhciBfc2hhZG93MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3NoYWRvdyk7XG5cbnZhciBfdW5pdCA9IHJlcXVpcmUoJy4vdmFsdWUtdHlwZXMvdW5pdCcpO1xuXG52YXIgX3VuaXQyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfdW5pdCk7XG5cbnZhciBfdHJhbnNmb3JtZXJzMiA9IHJlcXVpcmUoJy4vaW5jL3RyYW5zZm9ybWVycycpO1xuXG52YXIgX3RyYW5zZm9ybWVycyA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKF90cmFuc2Zvcm1lcnMyKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQob2JqKSB7IGlmIChvYmogJiYgb2JqLl9fZXNNb2R1bGUpIHsgcmV0dXJuIG9iajsgfSBlbHNlIHsgdmFyIG5ld09iaiA9IHt9OyBpZiAob2JqICE9IG51bGwpIHsgZm9yICh2YXIga2V5IGluIG9iaikgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwga2V5KSkgbmV3T2JqW2tleV0gPSBvYmpba2V5XTsgfSB9IG5ld09iai5kZWZhdWx0ID0gb2JqOyByZXR1cm4gbmV3T2JqOyB9IH1cblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuLy8gRXhwb3J0IGZhY3RvcnkgZnVuY3Rpb25zXG52YXIgZmxvdyA9IGV4cG9ydHMuZmxvdyA9IGZ1bmN0aW9uICgpIHtcbiAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICBhcmdzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICB9XG5cbiAgcmV0dXJuIG5ldyAoRnVuY3Rpb24ucHJvdG90eXBlLmJpbmQuYXBwbHkoX0Zsb3cyLmRlZmF1bHQsIFtudWxsXS5jb25jYXQoYXJncykpKSgpO1xufTsgLy8gSW1wb3J0IGNsYXNzZXMgLSBsb25nIHRlcm0gZ29hbCB0byBtb3ZlIHRvd2FyZHMgY29tcG9zaXRpb25cblxudmFyIHR3ZWVuID0gZXhwb3J0cy50d2VlbiA9IGZ1bmN0aW9uIChwcm9wcykge1xuICByZXR1cm4gbmV3IF9Ud2VlbjIuZGVmYXVsdChwcm9wcyk7XG59O1xudmFyIHBoeXNpY3MgPSBleHBvcnRzLnBoeXNpY3MgPSBmdW5jdGlvbiAocHJvcHMpIHtcbiAgcmV0dXJuIG5ldyBfUGh5c2ljczIuZGVmYXVsdChwcm9wcyk7XG59O1xudmFyIHRyYWNrID0gZXhwb3J0cy50cmFjayA9IGZ1bmN0aW9uICgpIHtcbiAgZm9yICh2YXIgX2xlbjIgPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gQXJyYXkoX2xlbjIpLCBfa2V5MiA9IDA7IF9rZXkyIDwgX2xlbjI7IF9rZXkyKyspIHtcbiAgICBhcmdzW19rZXkyXSA9IGFyZ3VtZW50c1tfa2V5Ml07XG4gIH1cblxuICByZXR1cm4gbmV3IChGdW5jdGlvbi5wcm90b3R5cGUuYmluZC5hcHBseShfVHJhY2syLmRlZmF1bHQsIFtudWxsXS5jb25jYXQoYXJncykpKSgpO1xufTtcbnZhciBpbnB1dCA9IGV4cG9ydHMuaW5wdXQgPSBmdW5jdGlvbiAoKSB7XG4gIGZvciAodmFyIF9sZW4zID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IEFycmF5KF9sZW4zKSwgX2tleTMgPSAwOyBfa2V5MyA8IF9sZW4zOyBfa2V5MysrKSB7XG4gICAgYXJnc1tfa2V5M10gPSBhcmd1bWVudHNbX2tleTNdO1xuICB9XG5cbiAgcmV0dXJuIG5ldyAoRnVuY3Rpb24ucHJvdG90eXBlLmJpbmQuYXBwbHkoX0lucHV0Mi5kZWZhdWx0LCBbbnVsbF0uY29uY2F0KGFyZ3MpKSkoKTtcbn07XG52YXIgdGFzayA9IGV4cG9ydHMudGFzayA9IGZ1bmN0aW9uICgpIHtcbiAgZm9yICh2YXIgX2xlbjQgPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gQXJyYXkoX2xlbjQpLCBfa2V5NCA9IDA7IF9rZXk0IDwgX2xlbjQ7IF9rZXk0KyspIHtcbiAgICBhcmdzW19rZXk0XSA9IGFyZ3VtZW50c1tfa2V5NF07XG4gIH1cblxuICByZXR1cm4gbmV3IChGdW5jdGlvbi5wcm90b3R5cGUuYmluZC5hcHBseShfVGFzazIuZGVmYXVsdCwgW251bGxdLmNvbmNhdChhcmdzKSkpKCk7XG59O1xuZXhwb3J0cy5zdGFnZ2VyID0gX3N0YWdnZXIzLmRlZmF1bHQ7XG5leHBvcnRzLnRpbWVsaW5lID0gX3RpbWVsaW5lMy5kZWZhdWx0O1xuXG4vLyBBZGFwdGVyc1xuXG5leHBvcnRzLmNyZWF0ZUFkYXB0ZXIgPSBfYWRhcHRlcjIuZGVmYXVsdDtcbmV4cG9ydHMuYXR0ciA9IF9hdHRyQWRhcHRlcjIuZGVmYXVsdDtcbmV4cG9ydHMuY3NzID0gX2Nzc0FkYXB0ZXIyLmRlZmF1bHQ7XG5leHBvcnRzLm9iamVjdCA9IF9vYmplY3RBZGFwdGVyMi5kZWZhdWx0O1xuZXhwb3J0cy5zdmcgPSBfc3ZnQWRhcHRlcjIuZGVmYXVsdDtcbmV4cG9ydHMuc3ZnUGF0aCA9IF9zdmdQYXRoQWRhcHRlcjIuZGVmYXVsdDtcblxuLy8gRWFzaW5nXG5cbmV4cG9ydHMuZWFzaW5nID0gX3ByZXNldEVhc2luZzIuZGVmYXVsdDtcbnZhciBkZXRlY3RGbG93ID0gZXhwb3J0cy5kZXRlY3RGbG93ID0gX2dldEZsb3cyLmRlZmF1bHQ7XG5cbi8vIFV0aWxzXG5leHBvcnRzLmNhbGMgPSBfY2FsYztcbmV4cG9ydHMudXRpbHMgPSBfdXRpbHM7XG5cbi8vIFZhbHVlIHR5cGVzXG5cbnZhciB2YWx1ZVR5cGUgPSBleHBvcnRzLnZhbHVlVHlwZSA9IHsgYWxwaGE6IF9hbHBoYTIuZGVmYXVsdCwgYW5nbGU6IF9hbmdsZTIuZGVmYXVsdCwgY29sb3I6IF9jb2xvcjIuZGVmYXVsdCwgY29tcGxleDogX2NvbXBsZXgyLmRlZmF1bHQsIGhleDogX2hleDIuZGVmYXVsdCwgaHNsOiBfaHNsMi5kZWZhdWx0LCBweDogX3B4Mi5kZWZhdWx0LCByZ2I6IF9yZ2IyLmRlZmF1bHQsIHNjYWxlOiBfc2NhbGUyLmRlZmF1bHQsIHNoYWRvdzogX3NoYWRvdzIuZGVmYXVsdCwgdW5pdDogX3VuaXQyLmRlZmF1bHQgfTtcblxuLy8gVHJhbnNmb3JtZXJzXG5leHBvcnRzLnRyYW5zZm9ybWVycyA9IF90cmFuc2Zvcm1lcnM7XG5cbi8qXG4gIFJldHVybnMgYSB2ZXJzaW9uIG9mIHRoZSBBY3Rpb24gYm91bmQgdG8gYSBGbG93XG5cbiAgV2UncmUgYWRkaW5nIGBvbmAgaGVyZSBiZWNhdXNlIEZsb3cgZXh0ZW5kcyBBY3Rpb24sXG4gIG90aGVyd2lzZSBjcmVhdGluZyBhIGNpcmN1bGFyIG1vZHVsYXIgZGVwZW5kZW5jeS4gRnV0dXJlXG4gIHJlZmFjdG9yaW5nLCBpZSBtb3ZpbmcgdG8gYSBjb21wb3NpdGlvbmFsIG1vZGVsIHdpbGxcbiAgcmVtb3ZlIHRoZSBuZWVkIGZvciB1cyB0byBkbyB0aGlzIGhlcmUuXG4qL1xuXG5fQWN0aW9uMi5kZWZhdWx0LnByb3RvdHlwZS5vbiA9IGZ1bmN0aW9uIChlbGVtZW50KSB7XG4gIGlmICghZWxlbWVudC5jb25uZWN0KSB7XG4gICAgZWxlbWVudCA9ICgwLCBfZ2V0RmxvdzIuZGVmYXVsdCkoZWxlbWVudCk7XG4gIH1cblxuICByZXR1cm4gZWxlbWVudC5jb25uZWN0KHRoaXMpO1xufTtcblxuZXhwb3J0cy5BY3Rpb24gPSBfQWN0aW9uMi5kZWZhdWx0O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluTnlZeTl3YjNCdGIzUnBiMjR1YW5NaVhTd2libUZ0WlhNaU9sdGRMQ0p0WVhCd2FXNW5jeUk2SWpzN096czdPenM3T3p0clFrRnRRMU1zYVVJN096czdRVUZzUTFRN096czdRVUZEUVRzN096dEJRVU5CT3pzN08wRkJRMEU3T3pzN1FVRkRRVHM3T3p0QlFVTkJPenM3TzBGQlEwRTdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3UVVGelFrRTdPenM3T3pzN096czdPenRCUVZOQk96czdPMEZCUTBFN096czdRVUZEUVRzN096dEJRVU5CT3pzN08wRkJRMEU3T3pzN1FVRkRRVHM3T3p0QlFVTkJPenM3TzBGQlEwRTdPenM3UVVGRFFUczdPenRCUVVOQk96czdPMEZCUTBFN096czdPenM3T3pzN096czdRVUYwUTA4c1NVRkJUU3h6UWtGQlR6dEJRVUZCTEc5RFFVRkpMRWxCUVVvN1FVRkJTU3hSUVVGS08wRkJRVUU3TzBGQlFVRXNNRVZCUVhsQ0xFbEJRWHBDTzBGQlFVRXNRMEZCWWl4RE96dEJRVU5CTEVsQlFVMHNkMEpCUVZFc1ZVRkJReXhMUVVGRU8wRkJRVUVzVTBGQlZ5eHZRa0ZCVlN4TFFVRldMRU5CUVZnN1FVRkJRU3hEUVVGa08wRkJRMEVzU1VGQlRTdzBRa0ZCVlN4VlFVRkRMRXRCUVVRN1FVRkJRU3hUUVVGWExITkNRVUZaTEV0QlFWb3NRMEZCV0R0QlFVRkJMRU5CUVdoQ08wRkJRMEVzU1VGQlRTeDNRa0ZCVVR0QlFVRkJMSEZEUVVGSkxFbEJRVW83UVVGQlNTeFJRVUZLTzBGQlFVRTdPMEZCUVVFc01rVkJRVEJDTEVsQlFURkNPMEZCUVVFc1EwRkJaRHRCUVVOQkxFbEJRVTBzZDBKQlFWRTdRVUZCUVN4eFEwRkJTU3hKUVVGS08wRkJRVWtzVVVGQlNqdEJRVUZCT3p0QlFVRkJMREpGUVVFd1FpeEpRVUV4UWp0QlFVRkJMRU5CUVdRN1FVRkRRU3hKUVVGTkxITkNRVUZQTzBGQlFVRXNjVU5CUVVrc1NVRkJTanRCUVVGSkxGRkJRVW83UVVGQlFUczdRVUZCUVN3d1JVRkJlVUlzU1VGQmVrSTdRVUZCUVN4RFFVRmlPMUZCUTBFc1R6dFJRVU5CTEZFN096czdVVUZIUVN4aE8xRkJRMEVzU1R0UlFVTkJMRWM3VVVGRFFTeE5PMUZCUTBFc1J6dFJRVU5CTEU4N096czdVVUZIUVN4Tk8wRkJSVUVzU1VGQlRTeHRSRUZCVGpzN08xRkJSMHNzU1R0UlFVTkJMRXM3T3pzN1FVRmxUQ3hKUVVGTkxHZERRVUZaTEVWQlFVVXNjMEpCUVVZc1JVRkJVeXh6UWtGQlZDeEZRVUZuUWl4elFrRkJhRUlzUlVGQmRVSXNNRUpCUVhaQ0xFVkJRV2RETEd0Q1FVRm9ReXhGUVVGeFF5eHJRa0ZCY2tNc1JVRkJNRU1zWjBKQlFURkRMRVZCUVRoRExHdENRVUU1UXl4RlFVRnRSQ3h6UWtGQmJrUXNSVUZCTUVRc2QwSkJRVEZFTEVWQlFXdEZMRzlDUVVGc1JTeEZRVUZzUWpzN08xRkJSMHNzV1RzN096czdPenM3T3pzN1FVRlZXaXhwUWtGQlR5eFRRVUZRTEVOQlFXbENMRVZCUVdwQ0xFZEJRWE5DTEZWQlFWVXNUMEZCVml4RlFVRnRRanRCUVVOMlF5eE5RVUZKTEVOQlFVTXNVVUZCVVN4UFFVRmlMRVZCUVhOQ08wRkJRM0JDTEdOQlFWVXNkVUpCUVZFc1QwRkJVaXhEUVVGV08wRkJRMFE3TzBGQlJVUXNVMEZCVHl4UlFVRlJMRTlCUVZJc1EwRkJaMElzU1VGQmFFSXNRMEZCVUR0QlFVTkVMRU5CVGtRN08xRkJVVk1zVFNJc0ltWnBiR1VpT2lKd2IzQnRiM1JwYjI0dWFuTWlMQ0p6YjNWeVkyVlNiMjkwSWpvaUwxVnpaWEp6TDIxaGRIUndaWEp5ZVM5VGFYUmxjeTl3YjNCdGIzUnBiMjRpTENKemIzVnlZMlZ6UTI5dWRHVnVkQ0k2V3lJdkx5QkpiWEJ2Y25RZ1kyeGhjM05sY3lBdElHeHZibWNnZEdWeWJTQm5iMkZzSUhSdklHMXZkbVVnZEc5M1lYSmtjeUJqYjIxd2IzTnBkR2x2Ymx4dWFXMXdiM0owSUVGamRHbHZiaUJtY205dElDY3VMMkZqZEdsdmJuTXZRV04wYVc5dUp6dGNibWx0Y0c5eWRDQkdiRzkzSUdaeWIyMGdKeTR2WVdOMGFXOXVjeTlHYkc5M0p6dGNibWx0Y0c5eWRDQlVkMlZsYmlCbWNtOXRJQ2N1TDJGamRHbHZibk12VkhkbFpXNG5PMXh1YVcxd2IzSjBJRkJvZVhOcFkzTWdabkp2YlNBbkxpOWhZM1JwYjI1ekwxQm9lWE5wWTNNbk8xeHVhVzF3YjNKMElGUnlZV05ySUdaeWIyMGdKeTR2WVdOMGFXOXVjeTlVY21GamF5YzdYRzVwYlhCdmNuUWdWR0Z6YXlCbWNtOXRJQ2N1TDNSaGMyc3ZWR0Z6YXljN1hHNXBiWEJ2Y25RZ1NXNXdkWFFnWm5KdmJTQW5MaTlwYm5CMWRDOUpibkIxZENjN1hHNWNiaTh2SUVWNGNHOXlkQ0JtWVdOMGIzSjVJR1oxYm1OMGFXOXVjMXh1Wlhod2IzSjBJR052Ym5OMElHWnNiM2NnUFNBb0xpNHVZWEpuY3lrZ1BUNGdibVYzSUVac2IzY29MaTR1WVhKbmN5azdYRzVsZUhCdmNuUWdZMjl1YzNRZ2RIZGxaVzRnUFNBb2NISnZjSE1wSUQwK0lHNWxkeUJVZDJWbGJpaHdjbTl3Y3lrN1hHNWxlSEJ2Y25RZ1kyOXVjM1FnY0doNWMybGpjeUE5SUNod2NtOXdjeWtnUFQ0Z2JtVjNJRkJvZVhOcFkzTW9jSEp2Y0hNcE8xeHVaWGh3YjNKMElHTnZibk4wSUhSeVlXTnJJRDBnS0M0dUxtRnlaM01wSUQwK0lHNWxkeUJVY21GamF5Z3VMaTVoY21kektUdGNibVY0Y0c5eWRDQmpiMjV6ZENCcGJuQjFkQ0E5SUNndUxpNWhjbWR6S1NBOVBpQnVaWGNnU1c1d2RYUW9MaTR1WVhKbmN5azdYRzVsZUhCdmNuUWdZMjl1YzNRZ2RHRnpheUE5SUNndUxpNWhjbWR6S1NBOVBpQnVaWGNnVkdGemF5Z3VMaTVoY21kektUdGNibVY0Y0c5eWRDQnpkR0ZuWjJWeUlHWnliMjBnSnk0dmFXNWpMM04wWVdkblpYSW5PMXh1Wlhod2IzSjBJSFJwYldWc2FXNWxJR1p5YjIwZ0p5NHZhVzVqTDNScGJXVnNhVzVsSnp0Y2JseHVMeThnUVdSaGNIUmxjbk5jYm1WNGNHOXlkQ0JqY21WaGRHVkJaR0Z3ZEdWeUlHWnliMjBnSnk0dllXUmhjSFJsY2k5aFpHRndkR1Z5Snp0Y2JtVjRjRzl5ZENCaGRIUnlJR1p5YjIwZ0p5NHZZV1JoY0hSbGNpOWhkSFJ5TFdGa1lYQjBaWEluTzF4dVpYaHdiM0owSUdOemN5Qm1jbTl0SUNjdUwyRmtZWEIwWlhJdlkzTnpMV0ZrWVhCMFpYSW5PMXh1Wlhod2IzSjBJRzlpYW1WamRDQm1jbTl0SUNjdUwyRmtZWEIwWlhJdmIySnFaV04wTFdGa1lYQjBaWEluTzF4dVpYaHdiM0owSUhOMlp5Qm1jbTl0SUNjdUwyRmtZWEIwWlhJdmMzWm5MV0ZrWVhCMFpYSW5PMXh1Wlhod2IzSjBJSE4yWjFCaGRHZ2dabkp2YlNBbkxpOWhaR0Z3ZEdWeUwzTjJaeTF3WVhSb0xXRmtZWEIwWlhJbk8xeHVYRzR2THlCRllYTnBibWRjYm1WNGNHOXlkQ0JsWVhOcGJtY2dabkp2YlNBbkxpOWhZM1JwYjI1ekwyVmhjMmx1Wnk5d2NtVnpaWFF0WldGemFXNW5KenRjYm1sdGNHOXlkQ0JuWlhSR2JHOTNJR1p5YjIwZ0p5NHZZV04wYVc5dWN5OW1iRzkzTDJkbGRDMW1iRzkzSnp0Y2JtVjRjRzl5ZENCamIyNXpkQ0JrWlhSbFkzUkdiRzkzSUQwZ1oyVjBSbXh2ZHp0Y2JseHVMeThnVlhScGJITmNibVY0Y0c5eWRDQXFJR0Z6SUdOaGJHTWdabkp2YlNBbkxpOXBibU12WTJGc1l5YzdYRzVsZUhCdmNuUWdLaUJoY3lCMWRHbHNjeUJtY205dElDY3VMMmx1WXk5MWRHbHNjeWM3WEc1bGVIQnZjblFnZXlCelpYUkhiRzlpWVd4RWFXeGhkR2x2YmlCOUlHWnliMjBnSnk0dmRHRnpheTkwYVcxbGNpYzdYRzVjYmk4dklGWmhiSFZsSUhSNWNHVnpYRzVwYlhCdmNuUWdZV3h3YUdFZ1puSnZiU0FuTGk5MllXeDFaUzEwZVhCbGN5OWhiSEJvWVNjN1hHNXBiWEJ2Y25RZ1lXNW5iR1VnWm5KdmJTQW5MaTkyWVd4MVpTMTBlWEJsY3k5aGJtZHNaU2M3WEc1cGJYQnZjblFnWTI5c2IzSWdabkp2YlNBbkxpOTJZV3gxWlMxMGVYQmxjeTlqYjJ4dmNpYzdYRzVwYlhCdmNuUWdZMjl0Y0d4bGVDQm1jbTl0SUNjdUwzWmhiSFZsTFhSNWNHVnpMMk52YlhCc1pYZ25PMXh1YVcxd2IzSjBJR2hsZUNCbWNtOXRJQ2N1TDNaaGJIVmxMWFI1Y0dWekwyaGxlQ2M3WEc1cGJYQnZjblFnYUhOc0lHWnliMjBnSnk0dmRtRnNkV1V0ZEhsd1pYTXZhSE5zSnp0Y2JtbHRjRzl5ZENCd2VDQm1jbTl0SUNjdUwzWmhiSFZsTFhSNWNHVnpMM0I0Snp0Y2JtbHRjRzl5ZENCeVoySWdabkp2YlNBbkxpOTJZV3gxWlMxMGVYQmxjeTl5WjJJbk8xeHVhVzF3YjNKMElITmpZV3hsSUdaeWIyMGdKeTR2ZG1Gc2RXVXRkSGx3WlhNdmMyTmhiR1VuTzF4dWFXMXdiM0owSUhOb1lXUnZkeUJtY205dElDY3VMM1poYkhWbExYUjVjR1Z6TDNOb1lXUnZkeWM3WEc1cGJYQnZjblFnZFc1cGRDQm1jbTl0SUNjdUwzWmhiSFZsTFhSNWNHVnpMM1Z1YVhRbk8xeHVaWGh3YjNKMElHTnZibk4wSUhaaGJIVmxWSGx3WlNBOUlIc2dZV3h3YUdFc0lHRnVaMnhsTENCamIyeHZjaXdnWTI5dGNHeGxlQ3dnYUdWNExDQm9jMndzSUhCNExDQnlaMklzSUhOallXeGxMQ0J6YUdGa2IzY3NJSFZ1YVhRZ2ZUdGNibHh1THk4Z1ZISmhibk5tYjNKdFpYSnpYRzVsZUhCdmNuUWdLaUJoY3lCMGNtRnVjMlp2Y20xbGNuTWdabkp2YlNBbkxpOXBibU12ZEhKaGJuTm1iM0p0WlhKekp6dGNibHh1THlwY2JpQWdVbVYwZFhKdWN5QmhJSFpsY25OcGIyNGdiMllnZEdobElFRmpkR2x2YmlCaWIzVnVaQ0IwYnlCaElFWnNiM2RjYmx4dUlDQlhaU2R5WlNCaFpHUnBibWNnWUc5dVlDQm9aWEpsSUdKbFkyRjFjMlVnUm14dmR5QmxlSFJsYm1SeklFRmpkR2x2Yml4Y2JpQWdiM1JvWlhKM2FYTmxJR055WldGMGFXNW5JR0VnWTJseVkzVnNZWElnYlc5a2RXeGhjaUJrWlhCbGJtUmxibU41TGlCR2RYUjFjbVZjYmlBZ2NtVm1ZV04wYjNKcGJtY3NJR2xsSUcxdmRtbHVaeUIwYnlCaElHTnZiWEJ2YzJsMGFXOXVZV3dnYlc5a1pXd2dkMmxzYkZ4dUlDQnlaVzF2ZG1VZ2RHaGxJRzVsWldRZ1ptOXlJSFZ6SUhSdklHUnZJSFJvYVhNZ2FHVnlaUzVjYmlvdlhHNUJZM1JwYjI0dWNISnZkRzkwZVhCbExtOXVJRDBnWm5WdVkzUnBiMjRnS0dWc1pXMWxiblFwSUh0Y2JpQWdhV1lnS0NGbGJHVnRaVzUwTG1OdmJtNWxZM1FwSUh0Y2JpQWdJQ0JsYkdWdFpXNTBJRDBnWjJWMFJteHZkeWhsYkdWdFpXNTBLVHRjYmlBZ2ZWeHVYRzRnSUhKbGRIVnliaUJsYkdWdFpXNTBMbU52Ym01bFkzUW9kR2hwY3lrN1hHNTlPMXh1WEc1bGVIQnZjblFnZXlCQlkzUnBiMjRnZlRzaVhYMD1cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL3BvcG1vdGlvbi5qc1xuICoqIG1vZHVsZSBpZCA9IDFcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHMuc2V0R2xvYmFsRGlsYXRpb24gPSB1bmRlZmluZWQ7XG5cbnZhciBfdXRpbHMgPSByZXF1aXJlKCcuLi9pbmMvdXRpbHMnKTtcblxudmFyIE1BWF9FTEFQU0VEID0gMzM7XG5cbnZhciBjdXJyZW50ID0gMDtcbnZhciBlbGFwc2VkID0gMTYuNztcbnZhciBkaWxhdGlvbiA9IDE7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IHtcbiAgdXBkYXRlOiBmdW5jdGlvbiAoZnJhbWVzdGFtcCkge1xuICAgIGVsYXBzZWQgPSBNYXRoLm1heChNYXRoLm1pbihmcmFtZXN0YW1wIC0gY3VycmVudCwgTUFYX0VMQVBTRUQpLCAxKSAqIGRpbGF0aW9uO1xuICAgIGN1cnJlbnQgPSBmcmFtZXN0YW1wO1xuICB9LFxuXG4gIHN0YXJ0OiBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIGN1cnJlbnQgPSAoMCwgX3V0aWxzLmN1cnJlbnRUaW1lKSgpO1xuICB9LFxuXG4gIGdldEVsYXBzZWQ6IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gZWxhcHNlZDtcbiAgfVxufTtcbnZhciBzZXRHbG9iYWxEaWxhdGlvbiA9IGV4cG9ydHMuc2V0R2xvYmFsRGlsYXRpb24gPSBmdW5jdGlvbiAobmV3RGlsYXRpb24pIHtcbiAgcmV0dXJuIGRpbGF0aW9uID0gbmV3RGlsYXRpb247XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluTnlZeTkwWVhOckwzUnBiV1Z5TG1weklsMHNJbTVoYldWeklqcGJYU3dpYldGd2NHbHVaM01pT2lJN096czdPMEZCUVVFN08wRkJSVUVzU1VGQlRTeGpRVUZqTEVWQlFYQkNPenRCUVVWQkxFbEJRVWtzVlVGQlZTeERRVUZrTzBGQlEwRXNTVUZCU1N4VlFVRlZMRWxCUVdRN1FVRkRRU3hKUVVGSkxGZEJRVmNzUTBGQlpqczdhMEpCUldVN1FVRkRZaXhWUVVGUkxGVkJRVU1zVlVGQlJDeEZRVUZuUWp0QlFVTjBRaXhqUVVGVkxFdEJRVXNzUjBGQlRDeERRVUZUTEV0QlFVc3NSMEZCVEN4RFFVRlRMR0ZCUVdFc1QwRkJkRUlzUlVGQkswSXNWMEZCTDBJc1EwRkJWQ3hGUVVGelJDeERRVUYwUkN4SlFVRXlSQ3hSUVVGeVJUdEJRVU5CTEdOQlFWVXNWVUZCVmp0QlFVTkVMRWRCU2xrN08wRkJUV0lzVTBGQlR6dEJRVUZCTEZkQlFVMHNWVUZCVlN4NVFrRkJhRUk3UVVGQlFTeEhRVTVOT3p0QlFWRmlMR05CUVZrN1FVRkJRU3hYUVVGTkxFOUJRVTQ3UVVGQlFUdEJRVkpETEVNN1FVRlhVaXhKUVVGTkxHZEVRVUZ2UWl4VlFVRkRMRmRCUVVRN1FVRkJRU3hUUVVGcFFpeFhRVUZYTEZkQlFUVkNPMEZCUVVFc1EwRkJNVUlpTENKbWFXeGxJam9pZEdsdFpYSXVhbk1pTENKemIzVnlZMlZTYjI5MElqb2lMMVZ6WlhKekwyMWhkSFJ3WlhKeWVTOVRhWFJsY3k5d2IzQnRiM1JwYjI0aUxDSnpiM1Z5WTJWelEyOXVkR1Z1ZENJNld5SnBiWEJ2Y25RZ2V5QmpkWEp5Wlc1MFZHbHRaU0I5SUdaeWIyMGdKeTR1TDJsdVl5OTFkR2xzY3ljN1hHNWNibU52Ym5OMElFMUJXRjlGVEVGUVUwVkVJRDBnTXpNN1hHNWNibXhsZENCamRYSnlaVzUwSUQwZ01EdGNibXhsZENCbGJHRndjMlZrSUQwZ01UWXVOenRjYm14bGRDQmthV3hoZEdsdmJpQTlJREU3WEc1Y2JtVjRjRzl5ZENCa1pXWmhkV3gwSUh0Y2JpQWdkWEJrWVhSbE9pQW9abkpoYldWemRHRnRjQ2tnUFQ0Z2UxeHVJQ0FnSUdWc1lYQnpaV1FnUFNCTllYUm9MbTFoZUNoTllYUm9MbTFwYmlobWNtRnRaWE4wWVcxd0lDMGdZM1Z5Y21WdWRDd2dUVUZZWDBWTVFWQlRSVVFwTENBeEtTQXFJR1JwYkdGMGFXOXVPMXh1SUNBZ0lHTjFjbkpsYm5RZ1BTQm1jbUZ0WlhOMFlXMXdPMXh1SUNCOUxGeHVYRzRnSUhOMFlYSjBPaUFvS1NBOVBpQmpkWEp5Wlc1MElEMGdZM1Z5Y21WdWRGUnBiV1VvS1N4Y2JseHVJQ0JuWlhSRmJHRndjMlZrT2lBb0tTQTlQaUJsYkdGd2MyVmtYRzU5TzF4dVhHNWxlSEJ2Y25RZ1kyOXVjM1FnYzJWMFIyeHZZbUZzUkdsc1lYUnBiMjRnUFNBb2JtVjNSR2xzWVhScGIyNHBJRDArSUdScGJHRjBhVzl1SUQwZ2JtVjNSR2xzWVhScGIyNDdJbDE5XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy90YXNrL3RpbWVyLmpzXG4gKiogbW9kdWxlIGlkID0gMlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9O1xuXG52YXIgX1Rhc2syID0gcmVxdWlyZSgnLi4vdGFzay9UYXNrJyk7XG5cbnZhciBfVGFzazMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9UYXNrMik7XG5cbnZhciBfY2FsYyA9IHJlcXVpcmUoJy4uL2luYy9jYWxjJyk7XG5cbnZhciBfdXRpbHMgPSByZXF1aXJlKCcuLi9pbmMvdXRpbHMnKTtcblxudmFyIF9kZXRlY3QgPSByZXF1aXJlKCcuLi92YWx1ZS10eXBlcy9kZXRlY3QnKTtcblxudmFyIF9kZXRlY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZGV0ZWN0KTtcblxudmFyIF9udW1lcmljYWxWYWx1ZXMgPSByZXF1aXJlKCcuLi9pbmMvbnVtZXJpY2FsLXZhbHVlcycpO1xuXG52YXIgX251bWVyaWNhbFZhbHVlczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9udW1lcmljYWxWYWx1ZXMpO1xuXG52YXIgX2RldGVjdEFkYXB0ZXIgPSByZXF1aXJlKCcuLi9pbmMvZGV0ZWN0LWFkYXB0ZXInKTtcblxudmFyIF9kZXRlY3RBZGFwdGVyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2RldGVjdEFkYXB0ZXIpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMob2JqLCBrZXlzKSB7IHZhciB0YXJnZXQgPSB7fTsgZm9yICh2YXIgaSBpbiBvYmopIHsgaWYgKGtleXMuaW5kZXhPZihpKSA+PSAwKSBjb250aW51ZTsgaWYgKCFPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBpKSkgY29udGludWU7IHRhcmdldFtpXSA9IG9ialtpXTsgfSByZXR1cm4gdGFyZ2V0OyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKCFzZWxmKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gY2FsbCAmJiAodHlwZW9mIGNhbGwgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikgPyBjYWxsIDogc2VsZjsgfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb24sIG5vdCBcIiArIHR5cGVvZiBzdXBlckNsYXNzKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCBlbnVtZXJhYmxlOiBmYWxzZSwgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LnNldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKSA6IHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7IH1cblxudmFyIE5VTV9OVU1FUklDQUxfVkFMVUVTID0gX251bWVyaWNhbFZhbHVlczIuZGVmYXVsdC5sZW5ndGg7XG5cbnZhciBkZWZhdWx0UmVuZGVyZXIgPSBmdW5jdGlvbiAoX3JlZikge1xuICB2YXIgc3RhdGUgPSBfcmVmLnN0YXRlO1xuICB2YXIgYWRhcHRlciA9IF9yZWYuYWRhcHRlcjtcbiAgdmFyIGFkYXB0ZXJEYXRhID0gX3JlZi5hZGFwdGVyRGF0YTtcbiAgdmFyIGVsZW1lbnQgPSBfcmVmLmVsZW1lbnQ7XG4gIHJldHVybiBhZGFwdGVyKGVsZW1lbnQsIHN0YXRlLCBhZGFwdGVyRGF0YSk7XG59O1xuXG52YXIgY29udmVydElmU2hvdWxkQmVOdW1iZXIgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgcmV0dXJuICFpc05hTih2YWx1ZSkgPyBwYXJzZUZsb2F0KHZhbHVlKSA6IHZhbHVlO1xufTtcblxudmFyIEFjdGlvbiA9IGZ1bmN0aW9uIChfVGFzaykge1xuICBfaW5oZXJpdHMoQWN0aW9uLCBfVGFzayk7XG5cbiAgZnVuY3Rpb24gQWN0aW9uKCkge1xuICAgIHZhciBwcm9wcyA9IGFyZ3VtZW50cy5sZW5ndGggPD0gMCB8fCBhcmd1bWVudHNbMF0gPT09IHVuZGVmaW5lZCA/IHt9IDogYXJndW1lbnRzWzBdO1xuXG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIEFjdGlvbik7XG5cbiAgICBwcm9wcy5zdGF0ZSA9IHt9O1xuICAgIHByb3BzLnZhbHVlS2V5cyA9IFtdO1xuICAgIHByb3BzLnBhcmVudEtleXMgPSBbXTtcbiAgICByZXR1cm4gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgX1Rhc2suY2FsbCh0aGlzLCBwcm9wcykpO1xuICB9XG5cbiAgLypcbiAgICAjIFNldCBBY3Rpb24gcHJvcGVydGllc1xuICAgICMjIFNldCB1c2VyLWRlZmluZWQgQWN0aW9uIHByb3BlcnRpZXNcbiAgICAgQHBhcmFtIFtvYmplY3RdXG4gICAgQHJldHVybiBbQWN0aW9uXVxuICAqL1xuXG5cbiAgQWN0aW9uLnByb3RvdHlwZS5zZXQgPSBmdW5jdGlvbiBzZXQoKSB7XG4gICAgdmFyIHByb3BzID0gYXJndW1lbnRzLmxlbmd0aCA8PSAwIHx8IGFyZ3VtZW50c1swXSA9PT0gdW5kZWZpbmVkID8ge30gOiBhcmd1bWVudHNbMF07XG5cbiAgICB0aGlzLnZhbHVlcyA9IHRoaXMudmFsdWVzIHx8IHt9O1xuXG4gICAgdmFyIHZhbHVlcyA9IHByb3BzLnZhbHVlcztcblxuICAgIHZhciBwcm9wc1RvU2V0ID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKHByb3BzLCBbJ3ZhbHVlcyddKTtcblxuICAgIHZhciBpbmhlcml0YWJsZSA9IHt9O1xuXG4gICAgLy8gU2V0IG5vbi1jb25zdW1lZCBwcm9wZXJ0aWVzXG4gICAgX1Rhc2sucHJvdG90eXBlLnNldC5jYWxsKHRoaXMsIHByb3BzVG9TZXQpO1xuXG4gICAgLy8gRGV0ZWN0IGNvcnJlY3QgYGFkYXB0ZXJgIGlmIG5vbmUgZXhpc3RzIGFuZCBgZWxlbWVudGAgaXMgYmVpbmcgc2V0XG4gICAgaWYgKHRoaXMuZWxlbWVudCkge1xuICAgICAgaWYgKCF0aGlzLmFkYXB0ZXIpIHtcbiAgICAgICAgLy8gRHVja3R5cGlzaCBjaGVjayBmb3IgQWRhcHRlclxuICAgICAgICB0aGlzLmFkYXB0ZXIgPSAoMCwgX2RldGVjdEFkYXB0ZXIyLmRlZmF1bHQpKHRoaXMuZWxlbWVudCk7XG5cbiAgICAgICAgaWYgKHRoaXMuYWRhcHRlci5nZXRFbGVtZW50RGF0YSkge1xuICAgICAgICAgIHRoaXMuYWRhcHRlckRhdGEgPSB0aGlzLmFkYXB0ZXIuZ2V0RWxlbWVudERhdGEodGhpcy5lbGVtZW50KTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoIXRoaXMub25SZW5kZXIpIHtcbiAgICAgICAgdGhpcy5vblJlbmRlciA9IGRlZmF1bHRSZW5kZXJlcjtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBQcmltZSBhbiBvYmplY3QgdG8gaW5oZXJpdCBmcm9tLCB3aXRoIG9ubHkgYHZhbHVlYCBwcm9wZXJ0aWVzXG4gICAgZm9yICh2YXIga2V5IGluIHRoaXMuZGVmYXVsdFZhbHVlKSB7XG4gICAgICBpZiAodGhpcy5kZWZhdWx0VmFsdWUuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICBpZiAocHJvcHNUb1NldC5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgaW5oZXJpdGFibGVba2V5XSA9IHByb3BzVG9TZXRba2V5XTtcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzW2tleV0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIGluaGVyaXRhYmxlW2tleV0gPSB0aGlzW2tleV07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBVcGRhdGUgZXhpc3RpbmcgdmFsdWVzIHdpdGggaW5oZXJpdGFibGUgcHJvcGVydGllc1xuICAgIGZvciAodmFyIF9rZXkgaW4gdGhpcy52YWx1ZXMpIHtcbiAgICAgIGlmICh0aGlzLnZhbHVlcy5oYXNPd25Qcm9wZXJ0eShfa2V5KSkge1xuICAgICAgICB0aGlzLnZhbHVlc1tfa2V5XSA9IF9leHRlbmRzKHt9LCB0aGlzLnZhbHVlc1tfa2V5XSwgaW5oZXJpdGFibGUpO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIFVwZGF0ZVxuICAgIGlmICh2YWx1ZXMpIHtcbiAgICAgIHRoaXMuc2V0VmFsdWVzKHZhbHVlcywgaW5oZXJpdGFibGUpO1xuXG4gICAgICAvLyBQcmVjb21wdXRlIG51bWJlciBvZiB2YWx1ZSBrZXkgYW5kIHBhcmVudCBrZXlzIHRvIGF2b2lkIHBlci1mcmFtZSBtZWFzdXJlbWVudFxuICAgICAgdGhpcy5udW1WYWx1ZUtleXMgPSB0aGlzLnZhbHVlS2V5cy5sZW5ndGg7XG4gICAgICB0aGlzLm51bVBhcmVudEtleXMgPSB0aGlzLnBhcmVudEtleXMubGVuZ3RoO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIEFjdGlvbi5wcm90b3R5cGUuc2V0VmFsdWVzID0gZnVuY3Rpb24gc2V0VmFsdWVzKHZhbHVlcywgaW5oZXJpdCkge1xuICAgIC8vIEl0ZXJhdGUgb3ZlciBhbGwgaW5jb21pbmcgdmFsdWVzIGFuZCBzZXRcbiAgICBmb3IgKHZhciBrZXkgaW4gdmFsdWVzKSB7XG4gICAgICBpZiAodmFsdWVzLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgdmFyIGhhc0NoaWxkcmVuID0gZmFsc2U7XG4gICAgICAgIHZhciBjaGlsZHJlbiA9IHt9O1xuXG4gICAgICAgIC8vIE1lcmdlIGludG8gZXhpc3RpbmcgdmFsdWUgb3IgY3JlYXRlIG5ld1xuICAgICAgICB2YXIgdmFsdWVBbHJlYWR5RXhpc3RzID0gdGhpcy52YWx1ZXNba2V5XSAhPT0gdW5kZWZpbmVkO1xuICAgICAgICB2YXIgbmV3VmFsdWUgPSB2YWx1ZUFscmVhZHlFeGlzdHMgPyBfZXh0ZW5kcyh7fSwgdGhpcy52YWx1ZXNba2V5XSkgOiBfZXh0ZW5kcyh7fSwgaW5oZXJpdCk7XG5cbiAgICAgICAgLy8gSWYgdmFsdWVzIGlzIG5vdCBhbiBvYmplY3QsIGFzc2lnbiB2YWx1ZSB0byBkZWZhdWx0IHByb3BcbiAgICAgICAgaWYgKCEoMCwgX3V0aWxzLmlzT2JqKSh2YWx1ZXNba2V5XSkpIHtcbiAgICAgICAgICBuZXdWYWx1ZVt0aGlzLmRlZmF1bHRWYWx1ZVByb3BdID0gdmFsdWVzW2tleV07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbmV3VmFsdWUgPSBfZXh0ZW5kcyh7fSwgbmV3VmFsdWUsIHZhbHVlc1trZXldKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIElmIHdlJ3ZlIGdvdCBhbiBhZGFwdGVyLCBnZXQgdGhlIGN1cnJlbnQgdmFsdWVcbiAgICAgICAgaWYgKG5ld1ZhbHVlLmN1cnJlbnQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIGlmICh0aGlzLmFkYXB0ZXIpIHtcbiAgICAgICAgICAgIG5ld1ZhbHVlLmN1cnJlbnQgPSBjb252ZXJ0SWZTaG91bGRCZU51bWJlcih0aGlzLmFkYXB0ZXIuZ2V0KHRoaXMuZWxlbWVudCwga2V5KSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKG5ld1ZhbHVlLmZyb20gPT09IHVuZGVmaW5lZCAmJiB0aGlzLmFkYXB0ZXIpIHtcbiAgICAgICAgICBuZXdWYWx1ZS5mcm9tID0gbmV3VmFsdWUuY3VycmVudDtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEFwcGx5IGRlZmF1bHQgdmFsdWUgcHJvcGVydGllc1xuICAgICAgICBpZiAoIXZhbHVlQWxyZWFkeUV4aXN0cykge1xuICAgICAgICAgIG5ld1ZhbHVlID0gX2V4dGVuZHMoe30sIHRoaXMuZGVmYXVsdFZhbHVlLCBuZXdWYWx1ZSk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBJZiB3ZSBkb24ndCBoYXZlIGEgdmFsdWUgdHlwZSBhbmQgd2UgZG8gaGF2ZSBhbiBBZGFwdGVyLCBjaGVjayBmb3IgdHlwZSB3aXRoIHZhbHVlIGtleVxuICAgICAgICBpZiAoIW5ld1ZhbHVlLnR5cGUgJiYgdGhpcy5hZGFwdGVyICYmIHRoaXMuYWRhcHRlci5jaGVja1ZhbHVlVHlwZSkge1xuICAgICAgICAgIG5ld1ZhbHVlLnR5cGUgPSB0aGlzLmFkYXB0ZXIuY2hlY2tWYWx1ZVR5cGUoa2V5KTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIElmIHdlIHN0aWxsIGRvbid0IGhhdmUgYSB2YWx1ZSB0eXBlIGFuZCB0aGlzIGlzIHRoZSBmaXJzdCB0aW1lIHdlJ3ZlIHNldCB0aGlzIHZhbHVlLCBjaGVjayBudW1lcmljYWwgdmFsdWVzIGZvciBzdHJpbmdzIGFuZCB0ZXN0XG4gICAgICAgIGlmICghbmV3VmFsdWUudHlwZSAmJiAhdGhpcy52YWx1ZXNba2V5XSkge1xuICAgICAgICAgIG5ld1ZhbHVlLnR5cGUgPSAoMCwgX2RldGVjdDIuZGVmYXVsdCkobmV3VmFsdWUpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gSWYgd2UgaGF2ZSBhIHZhbHVlIHR5cGUsIGhhbmRsZS4gVGhpcyBpcyBteSBsZWFzdCBmYXZvdXJpdGUgcGFydCBvZiBQb3Btb3Rpb24sIHNvLi4uIGVuam95LlxuICAgICAgICBpZiAobmV3VmFsdWUudHlwZSkge1xuICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgTlVNX05VTUVSSUNBTF9WQUxVRVM7IGkrKykge1xuICAgICAgICAgICAgdmFyIHByb3BOYW1lID0gX251bWVyaWNhbFZhbHVlczIuZGVmYXVsdFtpXTtcbiAgICAgICAgICAgIHZhciB2YWx1ZVByb3AgPSBuZXdWYWx1ZVtwcm9wTmFtZV07XG5cbiAgICAgICAgICAgIC8vIElmIHRoaXMgcHJvcCBpcyBhIHN0cmluZyBhbmQgd2UgaGF2ZSBhIHNwbGl0dGVyLCBzcGxpdFxuICAgICAgICAgICAgaWYgKG5ld1ZhbHVlLnR5cGUuaGFzT3duUHJvcGVydHkoJ3NwbGl0JykpIHtcbiAgICAgICAgICAgICAgdmFyIHNwbGl0UHJvcCA9ICgwLCBfdXRpbHMuaXNTdHJpbmcpKHZhbHVlUHJvcCkgPyBuZXdWYWx1ZS50eXBlLnNwbGl0KHZhbHVlUHJvcCkgOiB7fTtcblxuICAgICAgICAgICAgICBmb3IgKHZhciBzcGxpdEtleSBpbiBzcGxpdFByb3ApIHtcbiAgICAgICAgICAgICAgICBpZiAoc3BsaXRQcm9wLmhhc093blByb3BlcnR5KHNwbGl0S2V5KSkge1xuICAgICAgICAgICAgICAgICAgdmFyIGNvbWJpbmVkS2V5ID0ga2V5ICsgc3BsaXRLZXk7XG5cbiAgICAgICAgICAgICAgICAgIC8vIElmIHdlIGRvbid0IGhhdmUgYSBjaGlsZCB2YWx1ZSBmb3IgdGhpcyBrZXksIG1ha2Ugb25lXG4gICAgICAgICAgICAgICAgICBpZiAoIWNoaWxkcmVuW2NvbWJpbmVkS2V5XSkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgZGVmYXVsdFZhbHVlID0gbmV3VmFsdWUudHlwZS5kZWZhdWx0UHJvcHMgJiYgbmV3VmFsdWUudHlwZS5kZWZhdWx0UHJvcHNbc3BsaXRLZXldID8gbmV3VmFsdWUudHlwZS5kZWZhdWx0UHJvcHNbc3BsaXRLZXldIDogbmV3VmFsdWUudHlwZS5kZWZhdWx0UHJvcHMgfHwge307XG5cbiAgICAgICAgICAgICAgICAgICAgY2hpbGRyZW5bY29tYmluZWRLZXldID0gX2V4dGVuZHMoe30sIG5ld1ZhbHVlLCBkZWZhdWx0VmFsdWUsIHtcbiAgICAgICAgICAgICAgICAgICAgICBwYXJlbnQ6IGtleSxcbiAgICAgICAgICAgICAgICAgICAgICBjaGlsZEtleTogc3BsaXRLZXlcbiAgICAgICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICAgICAgZGVsZXRlIGNoaWxkcmVuW2NvbWJpbmVkS2V5XS50eXBlO1xuICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICBoYXNDaGlsZHJlbiA9IHRydWU7XG4gICAgICAgICAgICAgICAgICBjaGlsZHJlbltjb21iaW5lZEtleV1bcHJvcE5hbWVdID0gcGFyc2VGbG9hdChzcGxpdFByb3Bbc3BsaXRLZXldKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAvLyBJZiB3ZSBoYXZlIGEgdGVtcGxhdGUgZnVuY3Rpb24sIGdlbmVyYXRlXG4gICAgICAgICAgICAgIGlmICghbmV3VmFsdWUudGVtcGxhdGUgJiYgbmV3VmFsdWUudHlwZS50ZW1wbGF0ZSAmJiAoMCwgX3V0aWxzLmlzU3RyaW5nKSh2YWx1ZVByb3ApKSB7XG4gICAgICAgICAgICAgICAgbmV3VmFsdWUudGVtcGxhdGUgPSBuZXdWYWx1ZS50eXBlLnRlbXBsYXRlKHZhbHVlUHJvcCk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSBpZiAobmV3VmFsdWUudHlwZS5kZWZhdWx0UHJvcHMpIHtcbiAgICAgICAgICAgICAgbmV3VmFsdWUgPSBfZXh0ZW5kcyh7fSwgbmV3VmFsdWUudHlwZS5kZWZhdWx0UHJvcHMsIG5ld1ZhbHVlKTtcblxuICAgICAgICAgICAgICAvLyBUaGlzIGlzIGEgYml0IG9mIGEgaGFjayAtIHRoaXMgZW50aXJlIGZ1bmN0aW9uIGlzIGEgaGFjay4gU29ycnkgZnV0dXJlIHNlbGYuIEkgbG9vayBmb3J3YXJkIHRvIHNjcmFwcGluZyB0aGUgbG90IG9mIGl0LlxuICAgICAgICAgICAgICBpZiAobmV3VmFsdWUudHlwZS5kZWZhdWx0UHJvcHMudHlwZSkge1xuICAgICAgICAgICAgICAgIG5ld1ZhbHVlLnR5cGUgPSBuZXdWYWx1ZS50eXBlLmRlZmF1bHRQcm9wcy50eXBlO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICh2YWx1ZVByb3AgIT09IHVuZGVmaW5lZCAmJiBuZXdWYWx1ZS50eXBlLnBhcnNlKSB7XG4gICAgICAgICAgICAgIG5ld1ZhbHVlW3Byb3BOYW1lXSA9IG5ld1ZhbHVlLnR5cGUucGFyc2UodmFsdWVQcm9wLCBuZXdWYWx1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9IC8vIEVuZCB2YWx1ZSB0eXBlIG5vbnNlbnNlXG5cbiAgICAgICAgLy8gU2V0IGBwcmV2YCB0byBgY3VycmVudGAgZm9yIGZpcnN0IGZyYW1lIGFmdGVyIHNldFxuICAgICAgICBuZXdWYWx1ZS5wcmV2ID0gbmV3VmFsdWUuY3VycmVudDtcblxuICAgICAgICAvLyBJZiB0aGlzIHZhbHVlIGRvZXNuJ3QgaGF2ZSBjaGlsZHJlbiwgYWRkIHRvIHZhbHVlS2V5c1xuICAgICAgICBpZiAoIWhhc0NoaWxkcmVuKSB7XG4gICAgICAgICAgaWYgKHRoaXMudmFsdWVLZXlzLmluZGV4T2Yoa2V5KSA9PT0gLTEpIHtcbiAgICAgICAgICAgIHRoaXMudmFsdWVLZXlzLnB1c2goa2V5KTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAvLyBPciBhZGQgdG8gcGFyZW50S2V5c1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIG5ld1ZhbHVlLmNoaWxkcmVuID0gbmV3VmFsdWUuY2hpbGRyZW4gfHwge307XG5cbiAgICAgICAgICBpZiAodGhpcy5wYXJlbnRLZXlzLmluZGV4T2Yoa2V5KSA9PT0gLTEpIHtcbiAgICAgICAgICAgIHRoaXMucGFyZW50S2V5cy5wdXNoKGtleSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgdGhpcy5zZXRWYWx1ZXMoY2hpbGRyZW4pO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy52YWx1ZXNba2V5XSA9IG5ld1ZhbHVlO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICAvKlxuICAgIERlY2lkZSB3aGV0aGVyIHRoaXMgQWN0aW9uIHdpbGwgcmVuZGVyIG9uIG5leHQgZnJhbWVcbiAgICAgQHBhcmFtIFtBY3Rpb25dXG4gICAgQHBhcmFtIFtudW1iZXJdXG4gICAgQHBhcmFtIFtudW1iZXJdXG4gICAgQHJldHVybiBbYm9vbGVhbl06IFJldHVybiB0cnVlIHRvIHJlbmRlclxuICAqL1xuXG5cbiAgQWN0aW9uLnByb3RvdHlwZS53aWxsUmVuZGVyID0gZnVuY3Rpb24gd2lsbFJlbmRlcihhY3Rpb24sIGZyYW1lU3RhbXAsIGVsYXBzZWQpIHtcbiAgICB2YXIgaGFzQ2hhbmdlZCA9IGZhbHNlO1xuXG4gICAgLy8gQ2hlY2sgaWYgYmFzZSB2YWx1ZXMgaGF2ZSB1cGRhdGVkXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLm51bVZhbHVlS2V5czsgaSsrKSB7XG4gICAgICB2YXIga2V5ID0gdGhpcy52YWx1ZUtleXNbaV07XG4gICAgICB2YXIgdmFsdWUgPSB0aGlzLnZhbHVlc1trZXldO1xuXG4gICAgICAvLyBSdW4gdHJhbnNmb3JtIGZ1bmN0aW9uIChpZiBwcmVzZW50KVxuICAgICAgaWYgKHZhbHVlLnRyYW5zZm9ybSkge1xuICAgICAgICB2YWx1ZS5jdXJyZW50ID0gdmFsdWUudHJhbnNmb3JtKHZhbHVlLmN1cnJlbnQsIGtleSwgdGhpcyk7XG4gICAgICB9XG5cbiAgICAgIC8vIENhcCBtaW5pbXVtXG4gICAgICBpZiAoKDAsIF91dGlscy5pc051bSkodmFsdWUubWluKSkge1xuICAgICAgICB2YWx1ZS5jdXJyZW50ID0gTWF0aC5tYXgodmFsdWUuY3VycmVudCwgdmFsdWUubWluKTtcbiAgICAgIH1cblxuICAgICAgLy8gQ2FwIG1heGltdW1cbiAgICAgIGlmICgoMCwgX3V0aWxzLmlzTnVtKSh2YWx1ZS5tYXgpKSB7XG4gICAgICAgIHZhbHVlLmN1cnJlbnQgPSBNYXRoLm1pbih2YWx1ZS5jdXJyZW50LCB2YWx1ZS5tYXgpO1xuICAgICAgfVxuXG4gICAgICAvLyBSb3VuZCBudW1iZXJcbiAgICAgIGlmICh2YWx1ZS5yb3VuZCkge1xuICAgICAgICB2YWx1ZS5jdXJyZW50ID0gTWF0aC5yb3VuZCh2YWx1ZS5jdXJyZW50KTtcbiAgICAgIH1cblxuICAgICAgdmFsdWUuZnJhbWVDaGFuZ2UgPSB2YWx1ZS5jdXJyZW50IC0gdmFsdWUucHJldjtcblxuICAgICAgLy8gVXBkYXRlIHZlbG9jaXR5XG4gICAgICBpZiAoIXRoaXMuY2FsY3VsYXRlc1ZlbG9jaXR5KSB7XG4gICAgICAgIHZhbHVlLnZlbG9jaXR5ID0gKDAsIF9jYWxjLnNwZWVkUGVyU2Vjb25kKSh2YWx1ZS5mcmFtZUNoYW5nZSwgZWxhcHNlZCk7XG4gICAgICB9XG5cbiAgICAgIC8vIElmIHRoaXMgdmFsdWUgaGFzIGNoYW5nZWRcbiAgICAgIGlmICh2YWx1ZS5wcmV2ICE9PSB2YWx1ZS5jdXJyZW50KSB7XG4gICAgICAgIGhhc0NoYW5nZWQgPSB0cnVlO1xuICAgICAgICB2YWx1ZS5wcmV2ID0gdmFsdWUuY3VycmVudDtcbiAgICAgIH1cblxuICAgICAgLy8gQXBwZW5kIHVuaXRcbiAgICAgIHZhciB2YWx1ZUZvclN0YXRlID0gdmFsdWUudHlwZSAmJiB2YWx1ZS50eXBlLnNlcmlhbGl6ZSA/IHZhbHVlLnR5cGUuc2VyaWFsaXplKHZhbHVlLmN1cnJlbnQsIHZhbHVlKSA6IHZhbHVlLmN1cnJlbnQ7XG5cbiAgICAgIC8vIEFkZCB0byBzdGF0ZSBpZiB0aGlzIGlzIG5vdCBhIGNoaWxkIHZhdWVcbiAgICAgIGlmICghdmFsdWUucGFyZW50KSB7XG4gICAgICAgIHRoaXMuc3RhdGVba2V5XSA9IHZhbHVlRm9yU3RhdGU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnZhbHVlc1t2YWx1ZS5wYXJlbnRdLmNoaWxkcmVuW3ZhbHVlLmNoaWxkS2V5XSA9IHZhbHVlRm9yU3RhdGU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gVXBkYXRlIHBhcmVudCB2YWx1ZXNcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgdGhpcy5udW1QYXJlbnRLZXlzOyBfaSsrKSB7XG4gICAgICB2YXIgX2tleTIgPSB0aGlzLnBhcmVudEtleXNbX2ldO1xuICAgICAgdmFyIF92YWx1ZSA9IHRoaXMudmFsdWVzW19rZXkyXTtcblxuICAgICAgX3ZhbHVlLmN1cnJlbnQgPSBfdmFsdWUudHlwZS5jb21iaW5lKF92YWx1ZS5jaGlsZHJlbiwgX3ZhbHVlLnRlbXBsYXRlKTtcblxuICAgICAgdGhpcy5zdGF0ZVtfa2V5Ml0gPSBfdmFsdWUuY3VycmVudDtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5vbkZyYW1lKSB7XG4gICAgICB0aGlzLm9uRnJhbWUodGhpcy5zdGF0ZSwgdGhpcyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMub25DbGVhbnVwID8gdHJ1ZSA6IGhhc0NoYW5nZWQ7XG4gIH07XG5cbiAgQWN0aW9uLnByb3RvdHlwZS5pbmhlcml0ID0gZnVuY3Rpb24gaW5oZXJpdCgpIHtcbiAgICB2YXIgcHJvcHMgPSBhcmd1bWVudHMubGVuZ3RoIDw9IDAgfHwgYXJndW1lbnRzWzBdID09PSB1bmRlZmluZWQgPyB7fSA6IGFyZ3VtZW50c1swXTtcbiAgICB2YXIgdmFsdWVzID0gcHJvcHMudmFsdWVzO1xuXG4gICAgdmFyIHByb3BzVG9TZXQgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMocHJvcHMsIFsndmFsdWVzJ10pO1xuXG4gICAgdmFyIG5ld0FjdGlvbiA9IF9UYXNrLnByb3RvdHlwZS5pbmhlcml0LmNhbGwodGhpcywgcHJvcHNUb1NldCk7XG5cbiAgICBpZiAodmFsdWVzKSB7XG4gICAgICBuZXdBY3Rpb24uc2V0KHsgdmFsdWVzOiB2YWx1ZXMgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG5ld0FjdGlvbjtcbiAgfTtcblxuICBBY3Rpb24ucHJvdG90eXBlLnBhdXNlID0gZnVuY3Rpb24gcGF1c2UoKSB7XG4gICAgX1Rhc2sucHJvdG90eXBlLnN0b3AuY2FsbCh0aGlzKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICBBY3Rpb24ucHJvdG90eXBlLnJlc3VtZSA9IGZ1bmN0aW9uIHJlc3VtZSgpIHtcbiAgICBfVGFzay5wcm90b3R5cGUuc3RhcnQuY2FsbCh0aGlzKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICBBY3Rpb24ucHJvdG90eXBlLnRvZ2dsZSA9IGZ1bmN0aW9uIHRvZ2dsZSgpIHtcbiAgICByZXR1cm4gdGhpcy5pc0FjdGl2ZSA/IHRoaXMucGF1c2UoKSA6IHRoaXMucmVzdW1lKCk7XG4gIH07XG5cbiAgQWN0aW9uLnByb3RvdHlwZS5zdGFydCA9IGZ1bmN0aW9uIHN0YXJ0KCkge1xuICAgIHZhciB2YWx1ZXMgPSB0aGlzLnZhbHVlcztcbiAgICBfVGFzay5wcm90b3R5cGUuc3RhcnQuY2FsbCh0aGlzKTtcblxuICAgIGZvciAodmFyIGtleSBpbiB2YWx1ZXMpIHtcbiAgICAgIGlmICh2YWx1ZXMuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICB2YWx1ZXNba2V5XS5wcmV2ID0gdmFsdWVzW2tleV0ub3JpZ2luID0gdmFsdWVzW2tleV0uY3VycmVudDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICBBY3Rpb24uZXh0ZW5kRGVmYXVsdFZhbHVlID0gZnVuY3Rpb24gZXh0ZW5kRGVmYXVsdFZhbHVlKHByb3BzKSB7XG4gICAgcmV0dXJuIF9leHRlbmRzKHt9LCB0aGlzLnByb3RvdHlwZS5kZWZhdWx0VmFsdWUsIHByb3BzKTtcbiAgfTtcblxuICBBY3Rpb24uZXh0ZW5kRGVmYXVsdFByb3BzID0gZnVuY3Rpb24gZXh0ZW5kRGVmYXVsdFByb3BzKHByb3BzKSB7XG4gICAgcmV0dXJuIF9leHRlbmRzKHt9LCB0aGlzLnByb3RvdHlwZS5kZWZhdWx0UHJvcHMsIHByb3BzKTtcbiAgfTtcblxuICByZXR1cm4gQWN0aW9uO1xufShfVGFzazMuZGVmYXVsdCk7XG5cbkFjdGlvbi5wcm90b3R5cGUuZGVmYXVsdFZhbHVlUHJvcCA9ICdjdXJyZW50JztcbkFjdGlvbi5wcm90b3R5cGUuZGVmYXVsdFZhbHVlID0ge1xuICB2ZWxvY2l0eTogMCxcbiAgcm91bmQ6IGZhbHNlLFxuICBtaW46IHVuZGVmaW5lZCxcbiAgbWF4OiB1bmRlZmluZWQsXG4gIHRyYW5zZm9ybTogdW5kZWZpbmVkXG59O1xuXG5leHBvcnRzLmRlZmF1bHQgPSBBY3Rpb247XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5OeVl5OWhZM1JwYjI1ekwwRmpkR2x2Ymk1cWN5SmRMQ0p1WVcxbGN5STZXMTBzSW0xaGNIQnBibWR6SWpvaU96czdPenM3UVVGQlFUczdPenRCUVVOQk96dEJRVU5CT3p0QlFVTkJPenM3TzBGQlEwRTdPenM3UVVGRFFUczdPenM3T3pzN096czdPenM3UVVGRlFTeEpRVUZOTEhWQ1FVRjFRaXd3UWtGQmFVSXNUVUZCT1VNN08wRkJSVUVzU1VGQlRTeHJRa0ZCYTBJN1FVRkJRU3hOUVVGSExFdEJRVWdzVVVGQlJ5eExRVUZJTzBGQlFVRXNUVUZCVlN4UFFVRldMRkZCUVZVc1QwRkJWanRCUVVGQkxFMUJRVzFDTEZkQlFXNUNMRkZCUVcxQ0xGZEJRVzVDTzBGQlFVRXNUVUZCWjBNc1QwRkJhRU1zVVVGQlowTXNUMEZCYUVNN1FVRkJRU3hUUVVFNFF5eFJRVUZSTEU5QlFWSXNSVUZCYVVJc1MwRkJha0lzUlVGQmQwSXNWMEZCZUVJc1EwRkJPVU03UVVGQlFTeERRVUY0UWpzN1FVRkZRU3hKUVVGTkxEQkNRVUV3UWl4VlFVRkRMRXRCUVVRN1FVRkJRU3hUUVVGWExFTkJRVU1zVFVGQlRTeExRVUZPTEVOQlFVUXNSMEZCWjBJc1YwRkJWeXhMUVVGWUxFTkJRV2hDTEVkQlFXOURMRXRCUVM5RE8wRkJRVUVzUTBGQmFFTTdPMGxCUlUwc1RUczdPMEZCUTBvc2IwSkJRWGRDTzBGQlFVRXNVVUZCV2l4TFFVRlpMSGxFUVVGS0xFVkJRVWs3TzBGQlFVRTdPMEZCUTNSQ0xGVkJRVTBzUzBGQlRpeEhRVUZqTEVWQlFXUTdRVUZEUVN4VlFVRk5MRk5CUVU0c1IwRkJhMElzUlVGQmJFSTdRVUZEUVN4VlFVRk5MRlZCUVU0c1IwRkJiVUlzUlVGQmJrSTdRVUZJYzBJc05FTkJTWFJDTEdsQ1FVRk5MRXRCUVU0c1EwRktjMEk3UVVGTGRrSTdPenM3T3pzN096czdiVUpCVTBRc1J5eHJRa0ZCWjBJN1FVRkJRU3hSUVVGYUxFdEJRVmtzZVVSQlFVb3NSVUZCU1RzN1FVRkRaQ3hUUVVGTExFMUJRVXdzUjBGQll5eExRVUZMTEUxQlFVd3NTVUZCWlN4RlFVRTNRanM3UVVGRVl5eFJRVWRPTEUxQlNFMHNSMEZIYjBJc1MwRkljRUlzUTBGSFRpeE5RVWhOT3p0QlFVRkJMRkZCUjBzc1ZVRklUQ3cwUWtGSGIwSXNTMEZJY0VJN08wRkJTV1FzVVVGQlRTeGpRVUZqTEVWQlFYQkNPenM3UVVGSFFTeHZRa0ZCVFN4SFFVRk9MRmxCUVZVc1ZVRkJWanM3TzBGQlIwRXNVVUZCU1N4TFFVRkxMRTlCUVZRc1JVRkJhMEk3UVVGRGFFSXNWVUZCU1N4RFFVRkRMRXRCUVVzc1QwRkJWaXhGUVVGdFFqczdRVUZGYWtJc1lVRkJTeXhQUVVGTUxFZEJRV1VzTmtKQlFXTXNTMEZCU3l4UFFVRnVRaXhEUVVGbU96dEJRVVZCTEZsQlFVa3NTMEZCU3l4UFFVRk1MRU5CUVdFc1kwRkJha0lzUlVGQmFVTTdRVUZETDBJc1pVRkJTeXhYUVVGTUxFZEJRVzFDTEV0QlFVc3NUMEZCVEN4RFFVRmhMR05CUVdJc1EwRkJORUlzUzBGQlN5eFBRVUZxUXl4RFFVRnVRanRCUVVORU8wRkJRMFk3TzBGQlJVUXNWVUZCU1N4RFFVRkRMRXRCUVVzc1VVRkJWaXhGUVVGdlFqdEJRVU5zUWl4aFFVRkxMRkZCUVV3c1IwRkJaMElzWlVGQmFFSTdRVUZEUkR0QlFVTkdPenM3UVVGSFJDeFRRVUZMTEVsQlFVa3NSMEZCVkN4SlFVRm5RaXhMUVVGTExGbEJRWEpDTEVWQlFXMURPMEZCUTJwRExGVkJRVWtzUzBGQlN5eFpRVUZNTEVOQlFXdENMR05CUVd4Q0xFTkJRV2xETEVkQlFXcERMRU5CUVVvc1JVRkJNa003UVVGRGVrTXNXVUZCU1N4WFFVRlhMR05CUVZnc1EwRkJNRUlzUjBGQk1VSXNRMEZCU2l4RlFVRnZRenRCUVVOc1F5eHpRa0ZCV1N4SFFVRmFMRWxCUVcxQ0xGZEJRVmNzUjBGQldDeERRVUZ1UWp0QlFVTkVMRk5CUmtRc1RVRkZUeXhKUVVGSkxFdEJRVXNzUjBGQlRDeE5RVUZqTEZOQlFXeENMRVZCUVRaQ08wRkJRMnhETEhOQ1FVRlpMRWRCUVZvc1NVRkJiVUlzUzBGQlN5eEhRVUZNTEVOQlFXNUNPMEZCUTBRN1FVRkRSanRCUVVOR096czdRVUZIUkN4VFFVRkxMRWxCUVVrc1NVRkJWQ3hKUVVGblFpeExRVUZMTEUxQlFYSkNMRVZCUVRaQ08wRkJRek5DTEZWQlFVa3NTMEZCU3l4TlFVRk1MRU5CUVZrc1kwRkJXaXhEUVVFeVFpeEpRVUV6UWl4RFFVRktMRVZCUVhGRE8wRkJRMjVETEdGQlFVc3NUVUZCVEN4RFFVRlpMRWxCUVZvc2FVSkJRWGRDTEV0QlFVc3NUVUZCVEN4RFFVRlpMRWxCUVZvc1EwRkJlRUlzUlVGQk5rTXNWMEZCTjBNN1FVRkRSRHRCUVVOR096czdRVUZIUkN4UlFVRkpMRTFCUVVvc1JVRkJXVHRCUVVOV0xGZEJRVXNzVTBGQlRDeERRVUZsTEUxQlFXWXNSVUZCZFVJc1YwRkJka0k3T3p0QlFVZEJMRmRCUVVzc1dVRkJUQ3hIUVVGdlFpeExRVUZMTEZOQlFVd3NRMEZCWlN4TlFVRnVRenRCUVVOQkxGZEJRVXNzWVVGQlRDeEhRVUZ4UWl4TFFVRkxMRlZCUVV3c1EwRkJaMElzVFVGQmNrTTdRVUZEUkRzN1FVRkZSQ3hYUVVGUExFbEJRVkE3UVVGRFJDeEhPenR0UWtGRlJDeFRMSE5DUVVGVkxFMHNSVUZCVVN4UExFVkJRVk03TzBGQlJYcENMRk5CUVVzc1NVRkJTU3hIUVVGVUxFbEJRV2RDTEUxQlFXaENMRVZCUVhkQ08wRkJRM1JDTEZWQlFVa3NUMEZCVHl4alFVRlFMRU5CUVhOQ0xFZEJRWFJDTEVOQlFVb3NSVUZCWjBNN1FVRkRPVUlzV1VGQlNTeGpRVUZqTEV0QlFXeENPMEZCUTBFc1dVRkJUU3hYUVVGWExFVkJRV3BDT3pzN1FVRkhRU3haUVVGTkxIRkNRVUZ4UWl4TFFVRkxMRTFCUVV3c1EwRkJXU3hIUVVGYUxFMUJRWEZDTEZOQlFXaEVPMEZCUTBFc1dVRkJTU3hYUVVGWExHdERRVUV3UWl4TFFVRkxMRTFCUVV3c1EwRkJXU3hIUVVGYUxFTkJRVEZDTEdsQ1FVRnZSQ3hQUVVGd1JDeERRVUZtT3pzN1FVRkhRU3haUVVGSkxFTkJRVU1zYTBKQlFVMHNUMEZCVHl4SFFVRlFMRU5CUVU0c1EwRkJUQ3hGUVVGNVFqdEJRVU4yUWl4dFFrRkJVeXhMUVVGTExHZENRVUZrTEVsQlFXdERMRTlCUVU4c1IwRkJVQ3hEUVVGc1F6dEJRVU5FTEZOQlJrUXNUVUZGVHp0QlFVTk1MR3REUVVGblFpeFJRVUZvUWl4RlFVRTJRaXhQUVVGUExFZEJRVkFzUTBGQk4wSTdRVUZEUkRzN08wRkJSMFFzV1VGQlNTeFRRVUZUTEU5QlFWUXNTMEZCY1VJc1UwRkJla0lzUlVGQmIwTTdRVUZEYkVNc1kwRkJTU3hMUVVGTExFOUJRVlFzUlVGQmEwSTdRVUZEYUVJc2NVSkJRVk1zVDBGQlZDeEhRVUZ0UWl4M1FrRkJkMElzUzBGQlN5eFBRVUZNTEVOQlFXRXNSMEZCWWl4RFFVRnBRaXhMUVVGTExFOUJRWFJDTEVWQlFTdENMRWRCUVM5Q0xFTkJRWGhDTEVOQlFXNUNPMEZCUTBRN1FVRkRSanM3UVVGRlJDeFpRVUZKTEZOQlFWTXNTVUZCVkN4TFFVRnJRaXhUUVVGc1FpeEpRVUVyUWl4TFFVRkxMRTlCUVhoRExFVkJRV2xFTzBGQlF5OURMRzFDUVVGVExFbEJRVlFzUjBGQlowSXNVMEZCVXl4UFFVRjZRanRCUVVORU96czdRVUZIUkN4WlFVRkpMRU5CUVVNc2EwSkJRVXdzUlVGQmVVSTdRVUZEZGtJc2EwTkJRV2RDTEV0QlFVc3NXVUZCY2tJc1JVRkJjME1zVVVGQmRFTTdRVUZEUkRzN08wRkJSMFFzV1VGQlNTeERRVUZETEZOQlFWTXNTVUZCVml4SlFVRnJRaXhMUVVGTExFOUJRWFpDTEVsQlFXdERMRXRCUVVzc1QwRkJUQ3hEUVVGaExHTkJRVzVFTEVWQlFXMUZPMEZCUTJwRkxHMUNRVUZUTEVsQlFWUXNSMEZCWjBJc1MwRkJTeXhQUVVGTUxFTkJRV0VzWTBGQllpeERRVUUwUWl4SFFVRTFRaXhEUVVGb1FqdEJRVU5FT3pzN1FVRkhSQ3haUVVGSkxFTkJRVU1zVTBGQlV5eEpRVUZXTEVsQlFXdENMRU5CUVVNc1MwRkJTeXhOUVVGTUxFTkJRVmtzUjBGQldpeERRVUYyUWl4RlFVRjVRenRCUVVOMlF5eHRRa0ZCVXl4SlFVRlVMRWRCUVdkQ0xITkNRVUZuUWl4UlFVRm9RaXhEUVVGb1FqdEJRVU5FT3pzN1FVRkhSQ3haUVVGSkxGTkJRVk1zU1VGQllpeEZRVUZ0UWp0QlFVTnFRaXhsUVVGTExFbEJRVWtzU1VGQlNTeERRVUZpTEVWQlFXZENMRWxCUVVrc2IwSkJRWEJDTEVWQlFUQkRMRWRCUVRGRExFVkJRU3RETzBGQlF6ZERMR2RDUVVGTkxGZEJRVmNzTUVKQlFXbENMRU5CUVdwQ0xFTkJRV3BDTzBGQlEwRXNaMEpCUVUwc1dVRkJXU3hUUVVGVExGRkJRVlFzUTBGQmJFSTdPenRCUVVkQkxHZENRVUZKTEZOQlFWTXNTVUZCVkN4RFFVRmpMR05CUVdRc1EwRkJOa0lzVDBGQk4wSXNRMEZCU2l4RlFVRXlRenRCUVVONlF5eHJRa0ZCVFN4WlFVRlpMSEZDUVVGVExGTkJRVlFzU1VGQmMwSXNVMEZCVXl4SlFVRlVMRU5CUVdNc1MwRkJaQ3hEUVVGdlFpeFRRVUZ3UWl4RFFVRjBRaXhIUVVGMVJDeEZRVUY2UlRzN1FVRkZRU3h0UWtGQlN5eEpRVUZKTEZGQlFWUXNTVUZCY1VJc1UwRkJja0lzUlVGQlowTTdRVUZET1VJc2IwSkJRVWtzVlVGQlZTeGpRVUZXTEVOQlFYbENMRkZCUVhwQ0xFTkJRVW9zUlVGQmQwTTdRVUZEZEVNc2MwSkJRVTBzWTBGQll5eE5RVUZOTEZGQlFURkNPenM3UVVGSFFTeHpRa0ZCU1N4RFFVRkRMRk5CUVZNc1YwRkJWQ3hEUVVGTUxFVkJRVFJDTzBGQlF6RkNMSGRDUVVGTkxHVkJRV2RDTEZOQlFWTXNTVUZCVkN4RFFVRmpMRmxCUVdRc1NVRkJPRUlzVTBGQlV5eEpRVUZVTEVOQlFXTXNXVUZCWkN4RFFVRXlRaXhSUVVFelFpeERRVUV2UWl4SFFVRjFSU3hUUVVGVExFbEJRVlFzUTBGQll5eFpRVUZrTEVOQlFUSkNMRkZCUVROQ0xFTkJRWFpGTEVkQlFUaEhMRk5CUVZNc1NVRkJWQ3hEUVVGakxGbEJRV1FzU1VGQk9FSXNSVUZCYWtzN08wRkJSVUVzTmtKQlFWTXNWMEZCVkN4cFFrRkRTeXhSUVVSTUxFVkJSVXNzV1VGR1REdEJRVWRGTERoQ1FVRlJMRWRCU0ZZN1FVRkpSU3huUTBGQlZUdEJRVXBhT3p0QlFVOUJMREpDUVVGUExGTkJRVk1zVjBGQlZDeEZRVUZ6UWl4SlFVRTNRanRCUVVORU96dEJRVVZFTEdkRFFVRmpMRWxCUVdRN1FVRkRRU3d5UWtGQlV5eFhRVUZVTEVWQlFYTkNMRkZCUVhSQ0xFbEJRV3RETEZkQlFWY3NWVUZCVlN4UlFVRldMRU5CUVZnc1EwRkJiRU03UVVGRFJEdEJRVU5HT3pzN1FVRkhSQ3hyUWtGQlNTeERRVUZETEZOQlFWTXNVVUZCVml4SlFVRnpRaXhUUVVGVExFbEJRVlFzUTBGQll5eFJRVUZ3UXl4SlFVRm5SQ3h4UWtGQlV5eFRRVUZVTEVOQlFYQkVMRVZCUVhsRk8wRkJRM1pGTEhsQ1FVRlRMRkZCUVZRc1IwRkJiMElzVTBGQlV5eEpRVUZVTEVOQlFXTXNVVUZCWkN4RFFVRjFRaXhUUVVGMlFpeERRVUZ3UWp0QlFVTkVPMEZCUTBZc1lVRTVRa1FzVFVFNFFrOHNTVUZCU1N4VFFVRlRMRWxCUVZRc1EwRkJZeXhaUVVGc1FpeEZRVUZuUXp0QlFVTnlReXh6UTBGQlowSXNVMEZCVXl4SlFVRlVMRU5CUVdNc1dVRkJPVUlzUlVGQkswTXNVVUZCTDBNN096dEJRVWRCTEd0Q1FVRkpMRk5CUVZNc1NVRkJWQ3hEUVVGakxGbEJRV1FzUTBGQk1rSXNTVUZCTDBJc1JVRkJjVU03UVVGRGJrTXNlVUpCUVZNc1NVRkJWQ3hIUVVGblFpeFRRVUZUTEVsQlFWUXNRMEZCWXl4WlFVRmtMRU5CUVRKQ0xFbEJRVE5ETzBGQlEwUTdRVUZEUmpzN1FVRkZSQ3huUWtGQlNTeGpRVUZqTEZOQlFXUXNTVUZCTWtJc1UwRkJVeXhKUVVGVUxFTkJRV01zUzBGQk4wTXNSVUZCYjBRN1FVRkRiRVFzZFVKQlFWTXNVVUZCVkN4SlFVRnhRaXhUUVVGVExFbEJRVlFzUTBGQll5eExRVUZrTEVOQlFXOUNMRk5CUVhCQ0xFVkJRU3RDTEZGQlFTOUNMRU5CUVhKQ08wRkJRMFE3UVVGRFJqdEJRVU5HTEZNN096dEJRVWRFTEdsQ1FVRlRMRWxCUVZRc1IwRkJaMElzVTBGQlV5eFBRVUY2UWpzN08wRkJSMEVzV1VGQlNTeERRVUZETEZkQlFVd3NSVUZCYTBJN1FVRkRhRUlzWTBGQlNTeExRVUZMTEZOQlFVd3NRMEZCWlN4UFFVRm1MRU5CUVhWQ0xFZEJRWFpDTEUxQlFXZERMRU5CUVVNc1EwRkJja01zUlVGQmQwTTdRVUZEZEVNc2FVSkJRVXNzVTBGQlRDeERRVUZsTEVsQlFXWXNRMEZCYjBJc1IwRkJjRUk3UVVGRFJEczdPMEZCUjBZc1UwRk9SQ3hOUVUxUE8wRkJRMHdzYlVKQlFWTXNVVUZCVkN4SFFVRnZRaXhUUVVGVExGRkJRVlFzU1VGQmNVSXNSVUZCZWtNN08wRkJSVUVzWTBGQlNTeExRVUZMTEZWQlFVd3NRMEZCWjBJc1QwRkJhRUlzUTBGQmQwSXNSMEZCZUVJc1RVRkJhVU1zUTBGQlF5eERRVUYwUXl4RlFVRjVRenRCUVVOMlF5eHBRa0ZCU3l4VlFVRk1MRU5CUVdkQ0xFbEJRV2hDTEVOQlFYRkNMRWRCUVhKQ08wRkJRMFE3TzBGQlJVUXNaVUZCU3l4VFFVRk1MRU5CUVdVc1VVRkJaanRCUVVORU96dEJRVVZFTEdGQlFVc3NUVUZCVEN4RFFVRlpMRWRCUVZvc1NVRkJiVUlzVVVGQmJrSTdRVUZEUkR0QlFVTkdPMEZCUTBZc1J6czdPenM3T3pzN096czdiVUpCVlVRc1ZTeDFRa0ZCVnl4TkxFVkJRVkVzVlN4RlFVRlpMRThzUlVGQlV6dEJRVU4wUXl4UlFVRkpMR0ZCUVdFc1MwRkJha0k3T3p0QlFVZEJMRk5CUVVzc1NVRkJTU3hKUVVGSkxFTkJRV0lzUlVGQlowSXNTVUZCU1N4TFFVRkxMRmxCUVhwQ0xFVkJRWFZETEVkQlFYWkRMRVZCUVRSRE8wRkJRekZETEZWQlFVMHNUVUZCVFN4TFFVRkxMRk5CUVV3c1EwRkJaU3hEUVVGbUxFTkJRVm83UVVGRFFTeFZRVUZOTEZGQlFWRXNTMEZCU3l4TlFVRk1MRU5CUVZrc1IwRkJXaXhEUVVGa096czdRVUZIUVN4VlFVRkpMRTFCUVUwc1UwRkJWaXhGUVVGeFFqdEJRVU51UWl4alFVRk5MRTlCUVU0c1IwRkJaMElzVFVGQlRTeFRRVUZPTEVOQlFXZENMRTFCUVUwc1QwRkJkRUlzUlVGQkswSXNSMEZCTDBJc1JVRkJiME1zU1VGQmNFTXNRMEZCYUVJN1FVRkRSRHM3TzBGQlIwUXNWVUZCU1N4clFrRkJUU3hOUVVGTkxFZEJRVm9zUTBGQlNpeEZRVUZ6UWp0QlFVTndRaXhqUVVGTkxFOUJRVTRzUjBGQlowSXNTMEZCU3l4SFFVRk1MRU5CUVZNc1RVRkJUU3hQUVVGbUxFVkJRWGRDTEUxQlFVMHNSMEZCT1VJc1EwRkJhRUk3UVVGRFJEczdPMEZCUjBRc1ZVRkJTU3hyUWtGQlRTeE5RVUZOTEVkQlFWb3NRMEZCU2l4RlFVRnpRanRCUVVOd1FpeGpRVUZOTEU5QlFVNHNSMEZCWjBJc1MwRkJTeXhIUVVGTUxFTkJRVk1zVFVGQlRTeFBRVUZtTEVWQlFYZENMRTFCUVUwc1IwRkJPVUlzUTBGQmFFSTdRVUZEUkRzN08wRkJSMFFzVlVGQlNTeE5RVUZOTEV0QlFWWXNSVUZCYVVJN1FVRkRaaXhqUVVGTkxFOUJRVTRzUjBGQlowSXNTMEZCU3l4TFFVRk1MRU5CUVZjc1RVRkJUU3hQUVVGcVFpeERRVUZvUWp0QlFVTkVPenRCUVVWRUxGbEJRVTBzVjBGQlRpeEhRVUZ2UWl4TlFVRk5MRTlCUVU0c1IwRkJaMElzVFVGQlRTeEpRVUV4UXpzN08wRkJSMEVzVlVGQlNTeERRVUZETEV0QlFVc3NhMEpCUVZZc1JVRkJPRUk3UVVGRE5VSXNZMEZCVFN4UlFVRk9MRWRCUVdsQ0xEQkNRVUZsTEUxQlFVMHNWMEZCY2tJc1JVRkJhME1zVDBGQmJFTXNRMEZCYWtJN1FVRkRSRHM3TzBGQlIwUXNWVUZCU1N4TlFVRk5MRWxCUVU0c1MwRkJaU3hOUVVGTkxFOUJRWHBDTEVWQlFXdERPMEZCUTJoRExIRkNRVUZoTEVsQlFXSTdRVUZEUVN4alFVRk5MRWxCUVU0c1IwRkJZU3hOUVVGTkxFOUJRVzVDTzBGQlEwUTdPenRCUVVkRUxGVkJRVTBzWjBKQlFXbENMRTFCUVUwc1NVRkJUaXhKUVVGakxFMUJRVTBzU1VGQlRpeERRVUZYTEZOQlFURkNMRWRCUVhWRExFMUJRVTBzU1VGQlRpeERRVUZYTEZOQlFWZ3NRMEZCY1VJc1RVRkJUU3hQUVVFelFpeEZRVUZ2UXl4TFFVRndReXhEUVVGMlF5eEhRVUZ2Uml4TlFVRk5MRTlCUVdoSU96czdRVUZIUVN4VlFVRkpMRU5CUVVNc1RVRkJUU3hOUVVGWUxFVkJRVzFDTzBGQlEycENMR0ZCUVVzc1MwRkJUQ3hEUVVGWExFZEJRVmdzU1VGQmEwSXNZVUZCYkVJN1FVRkRSQ3hQUVVaRUxFMUJSVTg3UVVGRFRDeGhRVUZMTEUxQlFVd3NRMEZCV1N4TlFVRk5MRTFCUVd4Q0xFVkJRVEJDTEZGQlFURkNMRU5CUVcxRExFMUJRVTBzVVVGQmVrTXNTVUZCY1VRc1lVRkJja1E3UVVGRFJEdEJRVU5HT3pzN1FVRkhSQ3hUUVVGTExFbEJRVWtzUzBGQlNTeERRVUZpTEVWQlFXZENMRXRCUVVrc1MwRkJTeXhoUVVGNlFpeEZRVUYzUXl4SlFVRjRReXhGUVVFMlF6dEJRVU16UXl4VlFVRk5MRkZCUVUwc1MwRkJTeXhWUVVGTUxFTkJRV2RDTEVWQlFXaENMRU5CUVZvN1FVRkRRU3hWUVVGTkxGTkJRVkVzUzBGQlN5eE5RVUZNTEVOQlFWa3NTMEZCV2l4RFFVRmtPenRCUVVWQkxHRkJRVTBzVDBGQlRpeEhRVUZuUWl4UFFVRk5MRWxCUVU0c1EwRkJWeXhQUVVGWUxFTkJRVzFDTEU5QlFVMHNVVUZCZWtJc1JVRkJiVU1zVDBGQlRTeFJRVUY2UXl4RFFVRm9RanM3UVVGRlFTeFhRVUZMTEV0QlFVd3NRMEZCVnl4TFFVRllMRWxCUVd0Q0xFOUJRVTBzVDBGQmVFSTdRVUZEUkRzN1FVRkZSQ3hSUVVGSkxFdEJRVXNzVDBGQlZDeEZRVUZyUWp0QlFVTm9RaXhYUVVGTExFOUJRVXdzUTBGQllTeExRVUZMTEV0QlFXeENMRVZCUVhsQ0xFbEJRWHBDTzBGQlEwUTdPMEZCUlVRc1YwRkJVU3hMUVVGTExGTkJRVTRzUjBGQmJVSXNTVUZCYmtJc1IwRkJNRUlzVlVGQmFrTTdRVUZEUkN4SE96dHRRa0ZGUkN4UExITkNRVUZ2UWp0QlFVRkJMRkZCUVZvc1MwRkJXU3g1UkVGQlNpeEZRVUZKTzBGQlFVRXNVVUZEVml4TlFVUlZMRWRCUTJkQ0xFdEJSR2hDTEVOQlExWXNUVUZFVlRzN1FVRkJRU3hSUVVORExGVkJSRVFzTkVKQlEyZENMRXRCUkdoQ096dEJRVVZzUWl4UlFVRk5MRmxCUVZrc1owSkJRVTBzVDBGQlRpeFpRVUZqTEZWQlFXUXNRMEZCYkVJN08wRkJSVUVzVVVGQlNTeE5RVUZLTEVWQlFWazdRVUZEVml4blFrRkJWU3hIUVVGV0xFTkJRV01zUlVGQlJTeGpRVUZHTEVWQlFXUTdRVUZEUkRzN1FVRkZSQ3hYUVVGUExGTkJRVkE3UVVGRFJDeEhPenR0UWtGRlJDeExMRzlDUVVGUk8wRkJRMDRzYjBKQlFVMHNTVUZCVGp0QlFVTkJMRmRCUVU4c1NVRkJVRHRCUVVORUxFYzdPMjFDUVVWRUxFMHNjVUpCUVZNN1FVRkRVQ3h2UWtGQlRTeExRVUZPTzBGQlEwRXNWMEZCVHl4SlFVRlFPMEZCUTBRc1J6czdiVUpCUlVRc1RTeHhRa0ZCVXp0QlFVTlFMRmRCUVU4c1MwRkJTeXhSUVVGTUxFZEJRV2RDTEV0QlFVc3NTMEZCVEN4RlFVRm9RaXhIUVVFclFpeExRVUZMTEUxQlFVd3NSVUZCZEVNN1FVRkRSQ3hIT3p0dFFrRkZSQ3hMTEc5Q1FVRlJPMEZCUTA0c1VVRkJUU3hUUVVGVExFdEJRVXNzVFVGQmNFSTdRVUZEUVN4dlFrRkJUU3hMUVVGT096dEJRVVZCTEZOQlFVc3NTVUZCU1N4SFFVRlVMRWxCUVdkQ0xFMUJRV2hDTEVWQlFYZENPMEZCUTNSQ0xGVkJRVWtzVDBGQlR5eGpRVUZRTEVOQlFYTkNMRWRCUVhSQ0xFTkJRVW9zUlVGQlowTTdRVUZET1VJc1pVRkJUeXhIUVVGUUxFVkJRVmtzU1VGQldpeEhRVUZ0UWl4UFFVRlBMRWRCUVZBc1JVRkJXU3hOUVVGYUxFZEJRWEZDTEU5QlFVOHNSMEZCVUN4RlFVRlpMRTlCUVhCRU8wRkJRMFE3UVVGRFJqczdRVUZGUkN4WFFVRlBMRWxCUVZBN1FVRkRSQ3hIT3p0VFFVVk5MR3RDTEN0Q1FVRnRRaXhMTEVWQlFVODdRVUZETDBJc2QwSkJRVmtzUzBGQlN5eFRRVUZNTEVOQlFXVXNXVUZCTTBJc1JVRkJORU1zUzBGQk5VTTdRVUZEUkN4SE96dFRRVVZOTEd0Q0xDdENRVUZ0UWl4TExFVkJRVTg3UVVGREwwSXNkMEpCUVZrc1MwRkJTeXhUUVVGTUxFTkJRV1VzV1VGQk0wSXNSVUZCTkVNc1MwRkJOVU03UVVGRFJDeEhPenM3T3p0QlFVZElMRTlCUVU4c1UwRkJVQ3hEUVVGcFFpeG5Ra0ZCYWtJc1IwRkJiME1zVTBGQmNFTTdRVUZEUVN4UFFVRlBMRk5CUVZBc1EwRkJhVUlzV1VGQmFrSXNSMEZCWjBNN1FVRkRPVUlzV1VGQlZTeERRVVJ2UWp0QlFVVTVRaXhUUVVGUExFdEJSblZDTzBGQlJ6bENMRTlCUVVzc1UwRkllVUk3UVVGSk9VSXNUMEZCU3l4VFFVcDVRanRCUVVzNVFpeGhRVUZYTzBGQlRHMUNMRU5CUVdoRE96dHJRa0ZSWlN4Tklpd2labWxzWlNJNklrRmpkR2x2Ymk1cWN5SXNJbk52ZFhKalpWSnZiM1FpT2lJdlZYTmxjbk12YldGMGRIQmxjbko1TDFOcGRHVnpMM0J2Y0cxdmRHbHZiaUlzSW5OdmRYSmpaWE5EYjI1MFpXNTBJanBiSW1sdGNHOXlkQ0JVWVhOcklHWnliMjBnSnk0dUwzUmhjMnN2VkdGemF5YzdYRzVwYlhCdmNuUWdleUJ6Y0dWbFpGQmxjbE5sWTI5dVpDQjlJR1p5YjIwZ0p5NHVMMmx1WXk5allXeGpKenRjYm1sdGNHOXlkQ0I3SUdselRuVnRMQ0JwYzA5aWFpd2dhWE5UZEhKcGJtY2dmU0JtY205dElDY3VMaTlwYm1NdmRYUnBiSE1uTzF4dWFXMXdiM0owSUdSbGRHVmpkRlpoYkhWbFZIbHdaU0JtY205dElDY3VMaTkyWVd4MVpTMTBlWEJsY3k5a1pYUmxZM1FuTzF4dWFXMXdiM0owSUU1VlRVVlNTVU5CVEY5V1FVeFZSVk1nWm5KdmJTQW5MaTR2YVc1akwyNTFiV1Z5YVdOaGJDMTJZV3gxWlhNbk8xeHVhVzF3YjNKMElHUmxkR1ZqZEVGa1lYQjBaWElnWm5KdmJTQW5MaTR2YVc1akwyUmxkR1ZqZEMxaFpHRndkR1Z5Snp0Y2JseHVZMjl1YzNRZ1RsVk5YMDVWVFVWU1NVTkJURjlXUVV4VlJWTWdQU0JPVlUxRlVrbERRVXhmVmtGTVZVVlRMbXhsYm1kMGFEdGNibHh1WTI5dWMzUWdaR1ZtWVhWc2RGSmxibVJsY21WeUlEMGdLSHNnYzNSaGRHVXNJR0ZrWVhCMFpYSXNJR0ZrWVhCMFpYSkVZWFJoTENCbGJHVnRaVzUwSUgwcElEMCtJR0ZrWVhCMFpYSW9aV3hsYldWdWRDd2djM1JoZEdVc0lHRmtZWEIwWlhKRVlYUmhLVHRjYmx4dVkyOXVjM1FnWTI5dWRtVnlkRWxtVTJodmRXeGtRbVZPZFcxaVpYSWdQU0FvZG1Gc2RXVXBJRDArSUNGcGMwNWhUaWgyWVd4MVpTa2dQeUJ3WVhKelpVWnNiMkYwS0haaGJIVmxLU0E2SUhaaGJIVmxPMXh1WEc1amJHRnpjeUJCWTNScGIyNGdaWGgwWlc1a2N5QlVZWE5ySUh0Y2JpQWdZMjl1YzNSeWRXTjBiM0lvY0hKdmNITWdQU0I3ZlNrZ2UxeHVJQ0FnSUhCeWIzQnpMbk4wWVhSbElEMGdlMzA3WEc0Z0lDQWdjSEp2Y0hNdWRtRnNkV1ZMWlhseklEMGdXMTA3WEc0Z0lDQWdjSEp2Y0hNdWNHRnlaVzUwUzJWNWN5QTlJRnRkTzF4dUlDQWdJSE4xY0dWeUtIQnliM0J6S1R0Y2JpQWdmVnh1WEc0Z0lDOHFYRzRnSUNBZ0l5QlRaWFFnUVdOMGFXOXVJSEJ5YjNCbGNuUnBaWE5jYmlBZ0lDQWpJeUJUWlhRZ2RYTmxjaTFrWldacGJtVmtJRUZqZEdsdmJpQndjbTl3WlhKMGFXVnpYRzVjYmlBZ0lDQkFjR0Z5WVcwZ1cyOWlhbVZqZEYxY2JpQWdJQ0JBY21WMGRYSnVJRnRCWTNScGIyNWRYRzRnSUNvdlhHNGdJSE5sZENod2NtOXdjeUE5SUh0OUtTQjdYRzRnSUNBZ2RHaHBjeTUyWVd4MVpYTWdQU0IwYUdsekxuWmhiSFZsY3lCOGZDQjdmVHRjYmx4dUlDQWdJR052Ym5OMElIc2dkbUZzZFdWekxDQXVMaTV3Y205d2MxUnZVMlYwSUgwZ1BTQndjbTl3Y3p0Y2JpQWdJQ0JqYjI1emRDQnBibWhsY21sMFlXSnNaU0E5SUh0OU8xeHVYRzRnSUNBZ0x5OGdVMlYwSUc1dmJpMWpiMjV6ZFcxbFpDQndjbTl3WlhKMGFXVnpYRzRnSUNBZ2MzVndaWEl1YzJWMEtIQnliM0J6Vkc5VFpYUXBPMXh1WEc0Z0lDQWdMeThnUkdWMFpXTjBJR052Y25KbFkzUWdZR0ZrWVhCMFpYSmdJR2xtSUc1dmJtVWdaWGhwYzNSeklHRnVaQ0JnWld4bGJXVnVkR0FnYVhNZ1ltVnBibWNnYzJWMFhHNGdJQ0FnYVdZZ0tIUm9hWE11Wld4bGJXVnVkQ2tnZTF4dUlDQWdJQ0FnYVdZZ0tDRjBhR2x6TG1Ga1lYQjBaWElwSUh0Y2JpQWdJQ0FnSUNBZ0x5OGdSSFZqYTNSNWNHbHphQ0JqYUdWamF5Qm1iM0lnUVdSaGNIUmxjbHh1SUNBZ0lDQWdJQ0IwYUdsekxtRmtZWEIwWlhJZ1BTQmtaWFJsWTNSQlpHRndkR1Z5S0hSb2FYTXVaV3hsYldWdWRDazdYRzVjYmlBZ0lDQWdJQ0FnYVdZZ0tIUm9hWE11WVdSaGNIUmxjaTVuWlhSRmJHVnRaVzUwUkdGMFlTa2dlMXh1SUNBZ0lDQWdJQ0FnSUhSb2FYTXVZV1JoY0hSbGNrUmhkR0VnUFNCMGFHbHpMbUZrWVhCMFpYSXVaMlYwUld4bGJXVnVkRVJoZEdFb2RHaHBjeTVsYkdWdFpXNTBLVHRjYmlBZ0lDQWdJQ0FnZlZ4dUlDQWdJQ0FnZlZ4dVhHNGdJQ0FnSUNCcFppQW9JWFJvYVhNdWIyNVNaVzVrWlhJcElIdGNiaUFnSUNBZ0lDQWdkR2hwY3k1dmJsSmxibVJsY2lBOUlHUmxabUYxYkhSU1pXNWtaWEpsY2p0Y2JpQWdJQ0FnSUgxY2JpQWdJQ0I5WEc1Y2JpQWdJQ0F2THlCUWNtbHRaU0JoYmlCdlltcGxZM1FnZEc4Z2FXNW9aWEpwZENCbWNtOXRMQ0IzYVhSb0lHOXViSGtnWUhaaGJIVmxZQ0J3Y205d1pYSjBhV1Z6WEc0Z0lDQWdabTl5SUNoc1pYUWdhMlY1SUdsdUlIUm9hWE11WkdWbVlYVnNkRlpoYkhWbEtTQjdYRzRnSUNBZ0lDQnBaaUFvZEdocGN5NWtaV1poZFd4MFZtRnNkV1V1YUdGelQzZHVVSEp2Y0dWeWRIa29hMlY1S1NrZ2UxeHVJQ0FnSUNBZ0lDQnBaaUFvY0hKdmNITlViMU5sZEM1b1lYTlBkMjVRY205d1pYSjBlU2hyWlhrcEtTQjdYRzRnSUNBZ0lDQWdJQ0FnYVc1b1pYSnBkR0ZpYkdWYmEyVjVYU0E5SUhCeWIzQnpWRzlUWlhSYmEyVjVYVHRjYmlBZ0lDQWdJQ0FnZlNCbGJITmxJR2xtSUNoMGFHbHpXMnRsZVYwZ0lUMDlJSFZ1WkdWbWFXNWxaQ2tnZTF4dUlDQWdJQ0FnSUNBZ0lHbHVhR1Z5YVhSaFlteGxXMnRsZVYwZ1BTQjBhR2x6VzJ0bGVWMDdYRzRnSUNBZ0lDQWdJSDFjYmlBZ0lDQWdJSDFjYmlBZ0lDQjlYRzVjYmlBZ0lDQXZMeUJWY0dSaGRHVWdaWGhwYzNScGJtY2dkbUZzZFdWeklIZHBkR2dnYVc1b1pYSnBkR0ZpYkdVZ2NISnZjR1Z5ZEdsbGMxeHVJQ0FnSUdadmNpQW9iR1YwSUd0bGVTQnBiaUIwYUdsekxuWmhiSFZsY3lrZ2UxeHVJQ0FnSUNBZ2FXWWdLSFJvYVhNdWRtRnNkV1Z6TG1oaGMwOTNibEJ5YjNCbGNuUjVLR3RsZVNrcElIdGNiaUFnSUNBZ0lDQWdkR2hwY3k1MllXeDFaWE5iYTJWNVhTQTlJSHNnTGk0dWRHaHBjeTUyWVd4MVpYTmJhMlY1WFN3Z0xpNHVhVzVvWlhKcGRHRmliR1VnZlR0Y2JpQWdJQ0FnSUgxY2JpQWdJQ0I5WEc1Y2JpQWdJQ0F2THlCVmNHUmhkR1ZjYmlBZ0lDQnBaaUFvZG1Gc2RXVnpLU0I3WEc0Z0lDQWdJQ0IwYUdsekxuTmxkRlpoYkhWbGN5aDJZV3gxWlhNc0lHbHVhR1Z5YVhSaFlteGxLVHRjYmx4dUlDQWdJQ0FnTHk4Z1VISmxZMjl0Y0hWMFpTQnVkVzFpWlhJZ2IyWWdkbUZzZFdVZ2EyVjVJR0Z1WkNCd1lYSmxiblFnYTJWNWN5QjBieUJoZG05cFpDQndaWEl0Wm5KaGJXVWdiV1ZoYzNWeVpXMWxiblJjYmlBZ0lDQWdJSFJvYVhNdWJuVnRWbUZzZFdWTFpYbHpJRDBnZEdocGN5NTJZV3gxWlV0bGVYTXViR1Z1WjNSb08xeHVJQ0FnSUNBZ2RHaHBjeTV1ZFcxUVlYSmxiblJMWlhseklEMGdkR2hwY3k1d1lYSmxiblJMWlhsekxteGxibWQwYUR0Y2JpQWdJQ0I5WEc1Y2JpQWdJQ0J5WlhSMWNtNGdkR2hwY3p0Y2JpQWdmVnh1WEc0Z0lITmxkRlpoYkhWbGN5aDJZV3gxWlhNc0lHbHVhR1Z5YVhRcElIdGNiaUFnSUNBdkx5QkpkR1Z5WVhSbElHOTJaWElnWVd4c0lHbHVZMjl0YVc1bklIWmhiSFZsY3lCaGJtUWdjMlYwWEc0Z0lDQWdabTl5SUNoc1pYUWdhMlY1SUdsdUlIWmhiSFZsY3lrZ2UxeHVJQ0FnSUNBZ2FXWWdLSFpoYkhWbGN5NW9ZWE5QZDI1UWNtOXdaWEowZVNoclpYa3BLU0I3WEc0Z0lDQWdJQ0FnSUd4bGRDQm9ZWE5EYUdsc1pISmxiaUE5SUdaaGJITmxPMXh1SUNBZ0lDQWdJQ0JqYjI1emRDQmphR2xzWkhKbGJpQTlJSHQ5TzF4dVhHNGdJQ0FnSUNBZ0lDOHZJRTFsY21kbElHbHVkRzhnWlhocGMzUnBibWNnZG1Gc2RXVWdiM0lnWTNKbFlYUmxJRzVsZDF4dUlDQWdJQ0FnSUNCamIyNXpkQ0IyWVd4MVpVRnNjbVZoWkhsRmVHbHpkSE1nUFNCMGFHbHpMblpoYkhWbGMxdHJaWGxkSUNFOVBTQjFibVJsWm1sdVpXUTdYRzRnSUNBZ0lDQWdJR3hsZENCdVpYZFdZV3gxWlNBOUlIWmhiSFZsUVd4eVpXRmtlVVY0YVhOMGN5QS9JSHNnTGk0dWRHaHBjeTUyWVd4MVpYTmJhMlY1WFNCOUlEb2dleUF1TGk1cGJtaGxjbWwwSUgwN1hHNWNiaUFnSUNBZ0lDQWdMeThnU1dZZ2RtRnNkV1Z6SUdseklHNXZkQ0JoYmlCdlltcGxZM1FzSUdGemMybG5iaUIyWVd4MVpTQjBieUJrWldaaGRXeDBJSEJ5YjNCY2JpQWdJQ0FnSUNBZ2FXWWdLQ0ZwYzA5aWFpaDJZV3gxWlhOYmEyVjVYU2twSUh0Y2JpQWdJQ0FnSUNBZ0lDQnVaWGRXWVd4MVpWdDBhR2x6TG1SbFptRjFiSFJXWVd4MVpWQnliM0JkSUQwZ2RtRnNkV1Z6VzJ0bGVWMDdYRzRnSUNBZ0lDQWdJSDBnWld4elpTQjdYRzRnSUNBZ0lDQWdJQ0FnYm1WM1ZtRnNkV1VnUFNCN0lDNHVMbTVsZDFaaGJIVmxMQ0F1TGk1MllXeDFaWE5iYTJWNVhTQjlPMXh1SUNBZ0lDQWdJQ0I5WEc1Y2JpQWdJQ0FnSUNBZ0x5OGdTV1lnZDJVbmRtVWdaMjkwSUdGdUlHRmtZWEIwWlhJc0lHZGxkQ0IwYUdVZ1kzVnljbVZ1ZENCMllXeDFaVnh1SUNBZ0lDQWdJQ0JwWmlBb2JtVjNWbUZzZFdVdVkzVnljbVZ1ZENBOVBUMGdkVzVrWldacGJtVmtLU0I3WEc0Z0lDQWdJQ0FnSUNBZ2FXWWdLSFJvYVhNdVlXUmhjSFJsY2lrZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnYm1WM1ZtRnNkV1V1WTNWeWNtVnVkQ0E5SUdOdmJuWmxjblJKWmxOb2IzVnNaRUpsVG5WdFltVnlLSFJvYVhNdVlXUmhjSFJsY2k1blpYUW9kR2hwY3k1bGJHVnRaVzUwTENCclpYa3BLVHRjYmlBZ0lDQWdJQ0FnSUNCOVhHNGdJQ0FnSUNBZ0lIMWNibHh1SUNBZ0lDQWdJQ0JwWmlBb2JtVjNWbUZzZFdVdVpuSnZiU0E5UFQwZ2RXNWtaV1pwYm1Wa0lDWW1JSFJvYVhNdVlXUmhjSFJsY2lrZ2UxeHVJQ0FnSUNBZ0lDQWdJRzVsZDFaaGJIVmxMbVp5YjIwZ1BTQnVaWGRXWVd4MVpTNWpkWEp5Wlc1ME8xeHVJQ0FnSUNBZ0lDQjlYRzVjYmlBZ0lDQWdJQ0FnTHk4Z1FYQndiSGtnWkdWbVlYVnNkQ0IyWVd4MVpTQndjbTl3WlhKMGFXVnpYRzRnSUNBZ0lDQWdJR2xtSUNnaGRtRnNkV1ZCYkhKbFlXUjVSWGhwYzNSektTQjdYRzRnSUNBZ0lDQWdJQ0FnYm1WM1ZtRnNkV1VnUFNCN0lDNHVMblJvYVhNdVpHVm1ZWFZzZEZaaGJIVmxMQ0F1TGk1dVpYZFdZV3gxWlNCOU8xeHVJQ0FnSUNBZ0lDQjlYRzVjYmlBZ0lDQWdJQ0FnTHk4Z1NXWWdkMlVnWkc5dUozUWdhR0YyWlNCaElIWmhiSFZsSUhSNWNHVWdZVzVrSUhkbElHUnZJR2hoZG1VZ1lXNGdRV1JoY0hSbGNpd2dZMmhsWTJzZ1ptOXlJSFI1Y0dVZ2QybDBhQ0IyWVd4MVpTQnJaWGxjYmlBZ0lDQWdJQ0FnYVdZZ0tDRnVaWGRXWVd4MVpTNTBlWEJsSUNZbUlIUm9hWE11WVdSaGNIUmxjaUFtSmlCMGFHbHpMbUZrWVhCMFpYSXVZMmhsWTJ0V1lXeDFaVlI1Y0dVcElIdGNiaUFnSUNBZ0lDQWdJQ0J1WlhkV1lXeDFaUzUwZVhCbElEMGdkR2hwY3k1aFpHRndkR1Z5TG1Ob1pXTnJWbUZzZFdWVWVYQmxLR3RsZVNrN1hHNGdJQ0FnSUNBZ0lIMWNibHh1SUNBZ0lDQWdJQ0F2THlCSlppQjNaU0J6ZEdsc2JDQmtiMjRuZENCb1lYWmxJR0VnZG1Gc2RXVWdkSGx3WlNCaGJtUWdkR2hwY3lCcGN5QjBhR1VnWm1seWMzUWdkR2x0WlNCM1pTZDJaU0J6WlhRZ2RHaHBjeUIyWVd4MVpTd2dZMmhsWTJzZ2JuVnRaWEpwWTJGc0lIWmhiSFZsY3lCbWIzSWdjM1J5YVc1bmN5QmhibVFnZEdWemRGeHVJQ0FnSUNBZ0lDQnBaaUFvSVc1bGQxWmhiSFZsTG5SNWNHVWdKaVlnSVhSb2FYTXVkbUZzZFdWelcydGxlVjBwSUh0Y2JpQWdJQ0FnSUNBZ0lDQnVaWGRXWVd4MVpTNTBlWEJsSUQwZ1pHVjBaV04wVm1Gc2RXVlVlWEJsS0c1bGQxWmhiSFZsS1R0Y2JpQWdJQ0FnSUNBZ2ZWeHVYRzRnSUNBZ0lDQWdJQzh2SUVsbUlIZGxJR2hoZG1VZ1lTQjJZV3gxWlNCMGVYQmxMQ0JvWVc1a2JHVXVJRlJvYVhNZ2FYTWdiWGtnYkdWaGMzUWdabUYyYjNWeWFYUmxJSEJoY25RZ2IyWWdVRzl3Ylc5MGFXOXVMQ0J6Ynk0dUxpQmxibXB2ZVM1Y2JpQWdJQ0FnSUNBZ2FXWWdLRzVsZDFaaGJIVmxMblI1Y0dVcElIdGNiaUFnSUNBZ0lDQWdJQ0JtYjNJZ0tHeGxkQ0JwSUQwZ01Ec2dhU0E4SUU1VlRWOU9WVTFGVWtsRFFVeGZWa0ZNVlVWVE95QnBLeXNwSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJR052Ym5OMElIQnliM0JPWVcxbElEMGdUbFZOUlZKSlEwRk1YMVpCVEZWRlUxdHBYVHRjYmlBZ0lDQWdJQ0FnSUNBZ0lHTnZibk4wSUhaaGJIVmxVSEp2Y0NBOUlHNWxkMVpoYkhWbFczQnliM0JPWVcxbFhUdGNibHh1SUNBZ0lDQWdJQ0FnSUNBZ0x5OGdTV1lnZEdocGN5QndjbTl3SUdseklHRWdjM1J5YVc1bklHRnVaQ0IzWlNCb1lYWmxJR0VnYzNCc2FYUjBaWElzSUhOd2JHbDBYRzRnSUNBZ0lDQWdJQ0FnSUNCcFppQW9ibVYzVm1Gc2RXVXVkSGx3WlM1b1lYTlBkMjVRY205d1pYSjBlU2duYzNCc2FYUW5LU2tnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0JqYjI1emRDQnpjR3hwZEZCeWIzQWdQU0JwYzFOMGNtbHVaeWgyWVd4MVpWQnliM0FwSUQ4Z2JtVjNWbUZzZFdVdWRIbHdaUzV6Y0d4cGRDaDJZV3gxWlZCeWIzQXBJRG9nZTMwN1hHNWNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ1ptOXlJQ2hzWlhRZ2MzQnNhWFJMWlhrZ2FXNGdjM0JzYVhSUWNtOXdLU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnYVdZZ0tITndiR2wwVUhKdmNDNW9ZWE5QZDI1UWNtOXdaWEowZVNoemNHeHBkRXRsZVNrcElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJR052Ym5OMElHTnZiV0pwYm1Wa1MyVjVJRDBnYTJWNUlDc2djM0JzYVhSTFpYazdYRzVjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUM4dklFbG1JSGRsSUdSdmJpZDBJR2hoZG1VZ1lTQmphR2xzWkNCMllXeDFaU0JtYjNJZ2RHaHBjeUJyWlhrc0lHMWhhMlVnYjI1bFhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQnBaaUFvSVdOb2FXeGtjbVZ1VzJOdmJXSnBibVZrUzJWNVhTa2dlMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCamIyNXpkQ0JrWldaaGRXeDBWbUZzZFdVZ1BTQW9ibVYzVm1Gc2RXVXVkSGx3WlM1a1pXWmhkV3gwVUhKdmNITWdKaVlnYm1WM1ZtRnNkV1V1ZEhsd1pTNWtaV1poZFd4MFVISnZjSE5iYzNCc2FYUkxaWGxkS1NBL0lHNWxkMVpoYkhWbExuUjVjR1V1WkdWbVlYVnNkRkJ5YjNCelczTndiR2wwUzJWNVhTQTZJRzVsZDFaaGJIVmxMblI1Y0dVdVpHVm1ZWFZzZEZCeWIzQnpJSHg4SUh0OU8xeHVYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUdOb2FXeGtjbVZ1VzJOdmJXSnBibVZrUzJWNVhTQTlJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQXVMaTV1WlhkV1lXeDFaU3hjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQXVMaTVrWldaaGRXeDBWbUZzZFdVc1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnY0dGeVpXNTBPaUJyWlhrc1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnWTJocGJHUkxaWGs2SUhOd2JHbDBTMlY1WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lIMDdYRzVjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ1pHVnNaWFJsSUdOb2FXeGtjbVZ1VzJOdmJXSnBibVZrUzJWNVhTNTBlWEJsTzF4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2ZWeHVYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0JvWVhORGFHbHNaSEpsYmlBOUlIUnlkV1U3WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCamFHbHNaSEpsYmx0amIyMWlhVzVsWkV0bGVWMWJjSEp2Y0U1aGJXVmRJRDBnY0dGeWMyVkdiRzloZENoemNHeHBkRkJ5YjNCYmMzQnNhWFJMWlhsZEtUdGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQjlYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lIMWNibHh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQXZMeUJKWmlCM1pTQm9ZWFpsSUdFZ2RHVnRjR3hoZEdVZ1puVnVZM1JwYjI0c0lHZGxibVZ5WVhSbFhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUdsbUlDZ2hibVYzVm1Gc2RXVXVkR1Z0Y0d4aGRHVWdKaVlnYm1WM1ZtRnNkV1V1ZEhsd1pTNTBaVzF3YkdGMFpTQW1KaUJwYzFOMGNtbHVaeWgyWVd4MVpWQnliM0FwS1NCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2JtVjNWbUZzZFdVdWRHVnRjR3hoZEdVZ1BTQnVaWGRXWVd4MVpTNTBlWEJsTG5SbGJYQnNZWFJsS0haaGJIVmxVSEp2Y0NrN1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUgxY2JpQWdJQ0FnSUNBZ0lDQWdJSDBnWld4elpTQnBaaUFvYm1WM1ZtRnNkV1V1ZEhsd1pTNWtaV1poZFd4MFVISnZjSE1wSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnYm1WM1ZtRnNkV1VnUFNCN0lDNHVMbTVsZDFaaGJIVmxMblI1Y0dVdVpHVm1ZWFZzZEZCeWIzQnpMQ0F1TGk1dVpYZFdZV3gxWlNCOU8xeHVYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDOHZJRlJvYVhNZ2FYTWdZU0JpYVhRZ2IyWWdZU0JvWVdOcklDMGdkR2hwY3lCbGJuUnBjbVVnWm5WdVkzUnBiMjRnYVhNZ1lTQm9ZV05yTGlCVGIzSnllU0JtZFhSMWNtVWdjMlZzWmk0Z1NTQnNiMjlySUdadmNuZGhjbVFnZEc4Z2MyTnlZWEJ3YVc1bklIUm9aU0JzYjNRZ2IyWWdhWFF1WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJR2xtSUNodVpYZFdZV3gxWlM1MGVYQmxMbVJsWm1GMWJIUlFjbTl3Y3k1MGVYQmxLU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnYm1WM1ZtRnNkV1V1ZEhsd1pTQTlJRzVsZDFaaGJIVmxMblI1Y0dVdVpHVm1ZWFZzZEZCeWIzQnpMblI1Y0dVN1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUgxY2JpQWdJQ0FnSUNBZ0lDQWdJSDFjYmx4dUlDQWdJQ0FnSUNBZ0lDQWdhV1lnS0haaGJIVmxVSEp2Y0NBaFBUMGdkVzVrWldacGJtVmtJQ1ltSUc1bGQxWmhiSFZsTG5SNWNHVXVjR0Z5YzJVcElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ2JtVjNWbUZzZFdWYmNISnZjRTVoYldWZElEMGdibVYzVm1Gc2RXVXVkSGx3WlM1d1lYSnpaU2gyWVd4MVpWQnliM0FzSUc1bGQxWmhiSFZsS1R0Y2JpQWdJQ0FnSUNBZ0lDQWdJSDFjYmlBZ0lDQWdJQ0FnSUNCOVhHNGdJQ0FnSUNBZ0lIMGdMeThnUlc1a0lIWmhiSFZsSUhSNWNHVWdibTl1YzJWdWMyVmNibHh1SUNBZ0lDQWdJQ0F2THlCVFpYUWdZSEJ5WlhaZ0lIUnZJR0JqZFhKeVpXNTBZQ0JtYjNJZ1ptbHljM1FnWm5KaGJXVWdZV1owWlhJZ2MyVjBYRzRnSUNBZ0lDQWdJRzVsZDFaaGJIVmxMbkJ5WlhZZ1BTQnVaWGRXWVd4MVpTNWpkWEp5Wlc1ME8xeHVJQ0FnSUNBZ0lDQmNiaUFnSUNBZ0lDQWdMeThnU1dZZ2RHaHBjeUIyWVd4MVpTQmtiMlZ6YmlkMElHaGhkbVVnWTJocGJHUnlaVzRzSUdGa1pDQjBieUIyWVd4MVpVdGxlWE5jYmlBZ0lDQWdJQ0FnYVdZZ0tDRm9ZWE5EYUdsc1pISmxiaWtnZTF4dUlDQWdJQ0FnSUNBZ0lHbG1JQ2gwYUdsekxuWmhiSFZsUzJWNWN5NXBibVJsZUU5bUtHdGxlU2tnUFQwOUlDMHhLU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQjBhR2x6TG5aaGJIVmxTMlY1Y3k1d2RYTm9LR3RsZVNrN1hHNGdJQ0FnSUNBZ0lDQWdmVnh1WEc0Z0lDQWdJQ0FnSUM4dklFOXlJR0ZrWkNCMGJ5QndZWEpsYm5STFpYbHpYRzRnSUNBZ0lDQWdJSDBnWld4elpTQjdYRzRnSUNBZ0lDQWdJQ0FnYm1WM1ZtRnNkV1V1WTJocGJHUnlaVzRnUFNCdVpYZFdZV3gxWlM1amFHbHNaSEpsYmlCOGZDQjdmVHRjYmx4dUlDQWdJQ0FnSUNBZ0lHbG1JQ2gwYUdsekxuQmhjbVZ1ZEV0bGVYTXVhVzVrWlhoUFppaHJaWGtwSUQwOVBTQXRNU2tnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdkR2hwY3k1d1lYSmxiblJMWlhsekxuQjFjMmdvYTJWNUtUdGNiaUFnSUNBZ0lDQWdJQ0I5WEc1Y2JpQWdJQ0FnSUNBZ0lDQjBhR2x6TG5ObGRGWmhiSFZsY3loamFHbHNaSEpsYmlrN1hHNGdJQ0FnSUNBZ0lIMWNibHh1SUNBZ0lDQWdJQ0IwYUdsekxuWmhiSFZsYzF0clpYbGRJRDBnYm1WM1ZtRnNkV1U3WEc0Z0lDQWdJQ0I5WEc0Z0lDQWdmVnh1SUNCOVhHNWNiaUFnTHlwY2JpQWdJQ0JFWldOcFpHVWdkMmhsZEdobGNpQjBhR2x6SUVGamRHbHZiaUIzYVd4c0lISmxibVJsY2lCdmJpQnVaWGgwSUdaeVlXMWxYRzVjYmlBZ0lDQkFjR0Z5WVcwZ1cwRmpkR2x2YmwxY2JpQWdJQ0JBY0dGeVlXMGdXMjUxYldKbGNsMWNiaUFnSUNCQWNHRnlZVzBnVzI1MWJXSmxjbDFjYmlBZ0lDQkFjbVYwZFhKdUlGdGliMjlzWldGdVhUb2dVbVYwZFhKdUlIUnlkV1VnZEc4Z2NtVnVaR1Z5WEc0Z0lDb3ZYRzRnSUhkcGJHeFNaVzVrWlhJb1lXTjBhVzl1TENCbWNtRnRaVk4wWVcxd0xDQmxiR0Z3YzJWa0tTQjdYRzRnSUNBZ2JHVjBJR2hoYzBOb1lXNW5aV1FnUFNCbVlXeHpaVHRjYmx4dUlDQWdJQzh2SUVOb1pXTnJJR2xtSUdKaGMyVWdkbUZzZFdWeklHaGhkbVVnZFhCa1lYUmxaQ0JjYmlBZ0lDQm1iM0lnS0d4bGRDQnBJRDBnTURzZ2FTQThJSFJvYVhNdWJuVnRWbUZzZFdWTFpYbHpPeUJwS3lzcElIdGNiaUFnSUNBZ0lHTnZibk4wSUd0bGVTQTlJSFJvYVhNdWRtRnNkV1ZMWlhselcybGRPMXh1SUNBZ0lDQWdZMjl1YzNRZ2RtRnNkV1VnUFNCMGFHbHpMblpoYkhWbGMxdHJaWGxkTzF4dVhHNGdJQ0FnSUNBdkx5QlNkVzRnZEhKaGJuTm1iM0p0SUdaMWJtTjBhVzl1SUNocFppQndjbVZ6Wlc1MEtWeHVJQ0FnSUNBZ2FXWWdLSFpoYkhWbExuUnlZVzV6Wm05eWJTa2dlMXh1SUNBZ0lDQWdJQ0IyWVd4MVpTNWpkWEp5Wlc1MElEMGdkbUZzZFdVdWRISmhibk5tYjNKdEtIWmhiSFZsTG1OMWNuSmxiblFzSUd0bGVTd2dkR2hwY3lrN1hHNGdJQ0FnSUNCOVhHNWNiaUFnSUNBZ0lDOHZJRU5oY0NCdGFXNXBiWFZ0WEc0Z0lDQWdJQ0JwWmlBb2FYTk9kVzBvZG1Gc2RXVXViV2x1S1NrZ2UxeHVJQ0FnSUNBZ0lDQjJZV3gxWlM1amRYSnlaVzUwSUQwZ1RXRjBhQzV0WVhnb2RtRnNkV1V1WTNWeWNtVnVkQ3dnZG1Gc2RXVXViV2x1S1R0Y2JpQWdJQ0FnSUgxY2JseHVJQ0FnSUNBZ0x5OGdRMkZ3SUcxaGVHbHRkVzFjYmlBZ0lDQWdJR2xtSUNocGMwNTFiU2gyWVd4MVpTNXRZWGdwS1NCN1hHNGdJQ0FnSUNBZ0lIWmhiSFZsTG1OMWNuSmxiblFnUFNCTllYUm9MbTFwYmloMllXeDFaUzVqZFhKeVpXNTBMQ0IyWVd4MVpTNXRZWGdwTzF4dUlDQWdJQ0FnZlZ4dVhHNGdJQ0FnSUNBdkx5QlNiM1Z1WkNCdWRXMWlaWEpjYmlBZ0lDQWdJR2xtSUNoMllXeDFaUzV5YjNWdVpDa2dlMXh1SUNBZ0lDQWdJQ0IyWVd4MVpTNWpkWEp5Wlc1MElEMGdUV0YwYUM1eWIzVnVaQ2gyWVd4MVpTNWpkWEp5Wlc1MEtUdGNiaUFnSUNBZ0lIMWNibHh1SUNBZ0lDQWdkbUZzZFdVdVpuSmhiV1ZEYUdGdVoyVWdQU0IyWVd4MVpTNWpkWEp5Wlc1MElDMGdkbUZzZFdVdWNISmxkanRjYmx4dUlDQWdJQ0FnTHk4Z1ZYQmtZWFJsSUhabGJHOWphWFI1WEc0Z0lDQWdJQ0JwWmlBb0lYUm9hWE11WTJGc1kzVnNZWFJsYzFabGJHOWphWFI1S1NCN1hHNGdJQ0FnSUNBZ0lIWmhiSFZsTG5abGJHOWphWFI1SUQwZ2MzQmxaV1JRWlhKVFpXTnZibVFvZG1Gc2RXVXVabkpoYldWRGFHRnVaMlVzSUdWc1lYQnpaV1FwTzF4dUlDQWdJQ0FnZlZ4dVhHNGdJQ0FnSUNBdkx5QkpaaUIwYUdseklIWmhiSFZsSUdoaGN5QmphR0Z1WjJWa1hHNGdJQ0FnSUNCcFppQW9kbUZzZFdVdWNISmxkaUFoUFQwZ2RtRnNkV1V1WTNWeWNtVnVkQ2tnZTF4dUlDQWdJQ0FnSUNCb1lYTkRhR0Z1WjJWa0lEMGdkSEoxWlR0Y2JpQWdJQ0FnSUNBZ2RtRnNkV1V1Y0hKbGRpQTlJSFpoYkhWbExtTjFjbkpsYm5RN1hHNGdJQ0FnSUNCOVhHNWNiaUFnSUNBZ0lDOHZJRUZ3Y0dWdVpDQjFibWwwWEc0Z0lDQWdJQ0JqYjI1emRDQjJZV3gxWlVadmNsTjBZWFJsSUQwZ0tIWmhiSFZsTG5SNWNHVWdKaVlnZG1Gc2RXVXVkSGx3WlM1elpYSnBZV3hwZW1VcElEOGdkbUZzZFdVdWRIbHdaUzV6WlhKcFlXeHBlbVVvZG1Gc2RXVXVZM1Z5Y21WdWRDd2dkbUZzZFdVcElEb2dkbUZzZFdVdVkzVnljbVZ1ZER0Y2JseHVJQ0FnSUNBZ0x5OGdRV1JrSUhSdklITjBZWFJsSUdsbUlIUm9hWE1nYVhNZ2JtOTBJR0VnWTJocGJHUWdkbUYxWlZ4dUlDQWdJQ0FnYVdZZ0tDRjJZV3gxWlM1d1lYSmxiblFwSUh0Y2JpQWdJQ0FnSUNBZ2RHaHBjeTV6ZEdGMFpWdHJaWGxkSUQwZ2RtRnNkV1ZHYjNKVGRHRjBaVHRjYmlBZ0lDQWdJSDBnWld4elpTQjdYRzRnSUNBZ0lDQWdJSFJvYVhNdWRtRnNkV1Z6VzNaaGJIVmxMbkJoY21WdWRGMHVZMmhwYkdSeVpXNWJkbUZzZFdVdVkyaHBiR1JMWlhsZElEMGdkbUZzZFdWR2IzSlRkR0YwWlR0Y2JpQWdJQ0FnSUgxY2JpQWdJQ0I5WEc1Y2JpQWdJQ0F2THlCVmNHUmhkR1VnY0dGeVpXNTBJSFpoYkhWbGMxeHVJQ0FnSUdadmNpQW9iR1YwSUdrZ1BTQXdPeUJwSUR3Z2RHaHBjeTV1ZFcxUVlYSmxiblJMWlhsek95QnBLeXNwSUh0Y2JpQWdJQ0FnSUdOdmJuTjBJR3RsZVNBOUlIUm9hWE11Y0dGeVpXNTBTMlY1YzF0cFhUdGNiaUFnSUNBZ0lHTnZibk4wSUhaaGJIVmxJRDBnZEdocGN5NTJZV3gxWlhOYmEyVjVYVHRjYmx4dUlDQWdJQ0FnZG1Gc2RXVXVZM1Z5Y21WdWRDQTlJSFpoYkhWbExuUjVjR1V1WTI5dFltbHVaU2gyWVd4MVpTNWphR2xzWkhKbGJpd2dkbUZzZFdVdWRHVnRjR3hoZEdVcE8xeHVYRzRnSUNBZ0lDQjBhR2x6TG5OMFlYUmxXMnRsZVYwZ1BTQjJZV3gxWlM1amRYSnlaVzUwTzF4dUlDQWdJSDFjYmx4dUlDQWdJR2xtSUNoMGFHbHpMbTl1Um5KaGJXVXBJSHRjYmlBZ0lDQWdJSFJvYVhNdWIyNUdjbUZ0WlNoMGFHbHpMbk4wWVhSbExDQjBhR2x6S1R0Y2JpQWdJQ0I5WEc1Y2JpQWdJQ0J5WlhSMWNtNGdLSFJvYVhNdWIyNURiR1ZoYm5Wd0tTQS9JSFJ5ZFdVZ09pQm9ZWE5EYUdGdVoyVmtPMXh1SUNCOVhHNWNiaUFnYVc1b1pYSnBkQ2h3Y205d2N5QTlJSHQ5S1NCN1hHNGdJQ0FnWTI5dWMzUWdleUIyWVd4MVpYTXNJQzR1TG5CeWIzQnpWRzlUWlhRZ2ZTQTlJSEJ5YjNCek8xeHVJQ0FnSUdOdmJuTjBJRzVsZDBGamRHbHZiaUE5SUhOMWNHVnlMbWx1YUdWeWFYUW9jSEp2Y0hOVWIxTmxkQ2s3WEc1Y2JpQWdJQ0JwWmlBb2RtRnNkV1Z6S1NCN1hHNGdJQ0FnSUNCdVpYZEJZM1JwYjI0dWMyVjBLSHNnZG1Gc2RXVnpJSDBwTzF4dUlDQWdJSDFjYmx4dUlDQWdJSEpsZEhWeWJpQnVaWGRCWTNScGIyNDdYRzRnSUgxY2JseHVJQ0J3WVhWelpTZ3BJSHRjYmlBZ0lDQnpkWEJsY2k1emRHOXdLQ2s3WEc0Z0lDQWdjbVYwZFhKdUlIUm9hWE03WEc0Z0lIMWNibHh1SUNCeVpYTjFiV1VvS1NCN1hHNGdJQ0FnYzNWd1pYSXVjM1JoY25Rb0tUdGNiaUFnSUNCeVpYUjFjbTRnZEdocGN6dGNiaUFnZlZ4dVhHNGdJSFJ2WjJkc1pTZ3BJSHRjYmlBZ0lDQnlaWFIxY200Z2RHaHBjeTVwYzBGamRHbDJaU0EvSUhSb2FYTXVjR0YxYzJVb0tTQTZJSFJvYVhNdWNtVnpkVzFsS0NrN1hHNGdJSDFjYmx4dUlDQnpkR0Z5ZENncElIdGNiaUFnSUNCamIyNXpkQ0IyWVd4MVpYTWdQU0IwYUdsekxuWmhiSFZsY3p0Y2JpQWdJQ0J6ZFhCbGNpNXpkR0Z5ZENncE8xeHVYRzRnSUNBZ1ptOXlJQ2hzWlhRZ2EyVjVJR2x1SUhaaGJIVmxjeWtnZTF4dUlDQWdJQ0FnYVdZZ0tIWmhiSFZsY3k1b1lYTlBkMjVRY205d1pYSjBlU2hyWlhrcEtTQjdYRzRnSUNBZ0lDQWdJSFpoYkhWbGMxdHJaWGxkTG5CeVpYWWdQU0IyWVd4MVpYTmJhMlY1WFM1dmNtbG5hVzRnUFNCMllXeDFaWE5iYTJWNVhTNWpkWEp5Wlc1ME8xeHVJQ0FnSUNBZ2ZWeHVJQ0FnSUgxY2JseHVJQ0FnSUhKbGRIVnliaUIwYUdsek8xeHVJQ0I5WEc1Y2JpQWdjM1JoZEdsaklHVjRkR1Z1WkVSbFptRjFiSFJXWVd4MVpTaHdjbTl3Y3lrZ2UxeHVJQ0FnSUhKbGRIVnliaUI3SUM0dUxuUm9hWE11Y0hKdmRHOTBlWEJsTG1SbFptRjFiSFJXWVd4MVpTd2dMaTR1Y0hKdmNITWdmVHRjYmlBZ2ZWeHVYRzRnSUhOMFlYUnBZeUJsZUhSbGJtUkVaV1poZFd4MFVISnZjSE1vY0hKdmNITXBJSHRjYmlBZ0lDQnlaWFIxY200Z2V5QXVMaTUwYUdsekxuQnliM1J2ZEhsd1pTNWtaV1poZFd4MFVISnZjSE1zSUM0dUxuQnliM0J6SUgwN1hHNGdJSDFjYm4xY2JseHVRV04wYVc5dUxuQnliM1J2ZEhsd1pTNWtaV1poZFd4MFZtRnNkV1ZRY205d0lEMGdKMk4xY25KbGJuUW5PMXh1UVdOMGFXOXVMbkJ5YjNSdmRIbHdaUzVrWldaaGRXeDBWbUZzZFdVZ1BTQjdYRzRnSUhabGJHOWphWFI1T2lBd0xGeHVJQ0J5YjNWdVpEb2dabUZzYzJVc1hHNGdJRzFwYmpvZ2RXNWtaV1pwYm1Wa0xGeHVJQ0J0WVhnNklIVnVaR1ZtYVc1bFpDeGNiaUFnZEhKaGJuTm1iM0p0T2lCMWJtUmxabWx1WldSY2JuMDdYRzVjYm1WNGNHOXlkQ0JrWldaaGRXeDBJRUZqZEdsdmJqdGNiaUpkZlE9PVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvYWN0aW9ucy9BY3Rpb24uanNcbiAqKiBtb2R1bGUgaWQgPSAzXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfQWN0aW9uMiA9IHJlcXVpcmUoJy4uL2FjdGlvbnMvQWN0aW9uJyk7XG5cbnZhciBfQWN0aW9uMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX0FjdGlvbjIpO1xuXG52YXIgX2dlbmVyYXRlQmxlbmRDdXJ2ZSA9IHJlcXVpcmUoJy4vZmxvdy9nZW5lcmF0ZS1ibGVuZC1jdXJ2ZScpO1xuXG52YXIgX2dlbmVyYXRlQmxlbmRDdXJ2ZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9nZW5lcmF0ZUJsZW5kQ3VydmUpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmICghc2VsZikgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIGNhbGwgJiYgKHR5cGVvZiBjYWxsID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpID8gY2FsbCA6IHNlbGY7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgXCIgKyB0eXBlb2Ygc3VwZXJDbGFzcyk7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgZW51bWVyYWJsZTogZmFsc2UsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcykgOiBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzOyB9XG5cbi8qXG4gIE1ldGhvZHMgYW5kIHByb3BlcnRpZXMgdG8gYWRkIHRvIGJvdW5kIEFjdGlvbnNcbiovXG52YXIgYm91bmRPblN0YXJ0ID0gZnVuY3Rpb24gKGFjdGlvbikge1xuICByZXR1cm4gYWN0aW9uLmZsb3cuYWN0aXZhdGVBY3Rpb24oYWN0aW9uLmlkLCBhY3Rpb24pO1xufTtcbnZhciBib3VuZE9uU3RvcCA9IGZ1bmN0aW9uIChhY3Rpb24pIHtcbiAgcmV0dXJuIGFjdGlvbi5mbG93LmRlYWN0aXZhdGVBY3Rpb24oYWN0aW9uLmlkKTtcbn07XG52YXIgYm91bmRQcm9wcyA9IGZ1bmN0aW9uIChmbG93KSB7XG4gIHJldHVybiB7XG4gICAgZmxvdzogZmxvdyxcbiAgICBpc1ByaW9yaXR5OiB0cnVlLFxuICAgIG9uQWN0aXZhdGU6IGJvdW5kT25TdGFydCxcbiAgICBvbkRlYWN0aXZhdGU6IGJvdW5kT25TdG9wXG4gIH07XG59O1xuXG52YXIgRmxvdyA9IGZ1bmN0aW9uIChfQWN0aW9uKSB7XG4gIF9pbmhlcml0cyhGbG93LCBfQWN0aW9uKTtcblxuICBmdW5jdGlvbiBGbG93KHByb3BzKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIEZsb3cpO1xuXG4gICAgdmFyIF90aGlzID0gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgX0FjdGlvbi5jYWxsKHRoaXMsIHByb3BzKSk7XG5cbiAgICBfdGhpcy5hY3RpdmVBY3Rpb25zID0ge307XG4gICAgX3RoaXMubnVtQWN0aXZlQWN0aW9ucyA9IDA7XG4gICAgcmV0dXJuIF90aGlzO1xuICB9XG5cbiAgRmxvdy5wcm90b3R5cGUuc2V0ID0gZnVuY3Rpb24gc2V0KHByb3BzKSB7XG4gICAgX0FjdGlvbi5wcm90b3R5cGUuc2V0LmNhbGwodGhpcywgcHJvcHMpO1xuXG4gICAgdGhpcy5vbmNlKCk7XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICAvKlxuICAgIEJpbmQgQWN0aW9uIHRvIEFjdG9yXG4gICovXG5cblxuICBGbG93LnByb3RvdHlwZS5jb25uZWN0ID0gZnVuY3Rpb24gY29ubmVjdChhY3Rpb24pIHtcbiAgICB2YXIgaW5oZXJpdGVkQWN0aW9uID0gYWN0aW9uLmluaGVyaXQoKTtcbiAgICB2YXIgbmV3VmFsdWVzID0ge307XG4gICAgdmFyIGhhc05ld1ZhbHVlcyA9IGZhbHNlO1xuXG4gICAgLy8gQ3JlYXRlIHZhbHVlcyBvbiBhY3RvciB0aGF0IGRvbid0IGV4aXN0XG4gICAgZm9yICh2YXIga2V5IGluIGluaGVyaXRlZEFjdGlvbi52YWx1ZXMpIHtcbiAgICAgIGlmIChpbmhlcml0ZWRBY3Rpb24udmFsdWVzLmhhc093blByb3BlcnR5KGtleSkgJiYgIXRoaXMudmFsdWVzLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgbmV3VmFsdWVzW2tleV0gPSB7fTtcbiAgICAgICAgaGFzTmV3VmFsdWVzID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoaGFzTmV3VmFsdWVzKSB7XG4gICAgICB0aGlzLnNldCh7IHZhbHVlczogbmV3VmFsdWVzIH0pO1xuICAgIH1cblxuICAgIGluaGVyaXRlZEFjdGlvbi5wYXJlbnRJZCA9IGFjdGlvbi5pZDtcblxuICAgIHJldHVybiBpbmhlcml0ZWRBY3Rpb24uc2V0KGJvdW5kUHJvcHModGhpcywgaW5oZXJpdGVkQWN0aW9uKSk7XG4gIH07XG5cbiAgLypcbiAgICBTdGFydCBBY3RvclxuICAgICBJZiBBY3Rpb24gaXMgcHJvdmlkZWQsIGJpbmQgaXQgdG8gdGhpcyBBY3RvciBhbmQgc3RhcnRcbiAgICAgQHBhcmFtIChvcHRpb25hbCkgW0FjdGlvbl1cbiAgKi9cblxuXG4gIEZsb3cucHJvdG90eXBlLnN0YXJ0ID0gZnVuY3Rpb24gc3RhcnQoKSB7XG4gICAgX0FjdGlvbi5wcm90b3R5cGUuc3RhcnQuY2FsbCh0aGlzKTtcblxuICAgIGZvciAodmFyIGtleSBpbiB0aGlzLmFjdGl2ZUFjdGlvbnMpIHtcbiAgICAgIGlmICh0aGlzLmFjdGl2ZUFjdGlvbnMuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICB2YXIgYWN0aW9uID0gdGhpcy5hY3RpdmVBY3Rpb25zW2tleV07XG4gICAgICAgIGlmICghYWN0aW9uLmlzQWN0aXZlKSB7XG4gICAgICAgICAgYWN0aW9uLnN0YXJ0KCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICBGbG93LnByb3RvdHlwZS5zdG9wID0gZnVuY3Rpb24gc3RvcCgpIHtcbiAgICBfQWN0aW9uLnByb3RvdHlwZS5zdG9wLmNhbGwodGhpcyk7XG5cbiAgICBmb3IgKHZhciBrZXkgaW4gdGhpcy5hY3RpdmVBY3Rpb25zKSB7XG4gICAgICBpZiAodGhpcy5hY3RpdmVBY3Rpb25zLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgdGhpcy5hY3RpdmVBY3Rpb25zW2tleV0uc3RvcCgpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIEZsb3cucHJvdG90eXBlLndpbGxSZW5kZXIgPSBmdW5jdGlvbiB3aWxsUmVuZGVyKGFjdG9yLCBmcmFtZVN0YW1wLCBlbGFwc2VkKSB7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLm51bVZhbHVlS2V5czsgaSsrKSB7XG4gICAgICB2YXIga2V5ID0gdGhpcy52YWx1ZUtleXNbaV07XG4gICAgICB2YXIgdmFsdWUgPSB0aGlzLnZhbHVlc1trZXldO1xuICAgICAgdmFyIGRyaXZlciA9IHZhbHVlLm51bURyaXZlcnMgPyB0aGlzLmFjdGl2ZUFjdGlvbnNbdmFsdWUuZHJpdmVyc1swXV0gOiBmYWxzZTtcbiAgICAgIHZhciBuZXdDdXJyZW50ID0gdmFsdWUubnVtRHJpdmVycyA/IGRyaXZlci52YWx1ZXNba2V5XS5jdXJyZW50IDogdmFsdWUuY3VycmVudDtcblxuICAgICAgLyoqXG4gICAgICAgKiBUT0RPOiByZXBsYWNlIHdpdGggYmxlbmQgdHJlZSByZXNvbHZlclxuICAgICAgICogQWRkaXRpdmUgbW90aW9uXG4gICAgICAgKiBCZXppZXIgdHdlZW4gYmxlbmRcbiAgICAgICAqL1xuICAgICAgaWYgKHZhbHVlLmJsZW5kQ3VydmUpIHtcbiAgICAgICAgbmV3Q3VycmVudCA9IHZhbHVlLmJsZW5kQ3VydmUoKTtcbiAgICAgIH1cblxuICAgICAgdmFsdWUuY3VycmVudCA9IG5ld0N1cnJlbnQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIF9BY3Rpb24ucHJvdG90eXBlLndpbGxSZW5kZXIuY2FsbCh0aGlzLCBhY3RvciwgZnJhbWVTdGFtcCwgZWxhcHNlZCk7XG4gIH07XG5cbiAgLypcbiAgICBBZGQgYWN0aXZlIGFjdGlvbnNcbiAgICAgQHBhcmFtIFtudW1iZXJdXG4gICAgQHBhcmFtIFtBY3Rpb25dXG4gICovXG5cblxuICBGbG93LnByb3RvdHlwZS5hY3RpdmF0ZUFjdGlvbiA9IGZ1bmN0aW9uIGFjdGl2YXRlQWN0aW9uKGlkLCBhY3Rpb24pIHtcbiAgICB0aGlzLmFjdGl2ZUFjdGlvbnNbaWRdID0gYWN0aW9uO1xuICAgIHRoaXMubnVtQWN0aXZlQWN0aW9ucysrO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhY3Rpb24ubnVtVmFsdWVLZXlzOyBpKyspIHtcbiAgICAgIHZhciBrZXkgPSBhY3Rpb24udmFsdWVLZXlzW2ldO1xuICAgICAgdmFyIGFjdGlvblZhbHVlID0gYWN0aW9uLnZhbHVlc1trZXldO1xuICAgICAgdmFyIHZhbHVlID0gdGhpcy52YWx1ZXNba2V5XTtcblxuICAgICAgLy8gSWYgd2UncmUgYmxlbmRpbmcgdGhpcyBhY3Rpb24sIGFuZCB0aGVyZSdzIG9uIGFscmVhZHkgaW4gcHJvZ3Jlc3NcbiAgICAgIGlmIChhY3Rpb24uYmxlbmQgJiYgdmFsdWUubnVtRHJpdmVycyAmJiAhdmFsdWUuYmxlbmRDdXJ2ZSAmJiB2YWx1ZS5kcml2ZXJzWzBdLnByb3RvdHlwZSA9PT0gYWN0aW9uLnByb3RvdHlwZSkge1xuICAgICAgICB2YWx1ZS5ibGVuZEN1cnZlID0gKDAsIF9nZW5lcmF0ZUJsZW5kQ3VydmUyLmRlZmF1bHQpKHRoaXMuYWN0aXZlQWN0aW9uc1t2YWx1ZS5kcml2ZXJzWzBdXSwgYWN0aW9uLCB2YWx1ZSwga2V5KTtcbiAgICAgIH0gZWxzZSBpZiAoIWFjdGlvbi5pc1NjcnViYmluZykge1xuICAgICAgICB2YWx1ZS5ibGVuZEN1cnZlID0gdW5kZWZpbmVkO1xuXG4gICAgICAgIC8vIFBhc3MgQWN0b3IgdmFsdWUgcHJvcGVydGllcyB0byBBY3Rpb25cbiAgICAgICAgaWYgKGFjdGlvblZhbHVlLnZlbG9jaXR5ID09PSAwKSB7XG4gICAgICAgICAgYWN0aW9uVmFsdWUudmVsb2NpdHkgPSB2YWx1ZS52ZWxvY2l0eTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChhY3Rpb25WYWx1ZS5mcm9tID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICBhY3Rpb25WYWx1ZS5mcm9tID0gYWN0aW9uVmFsdWUuY3VycmVudCA9IHZhbHVlLmN1cnJlbnQ7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgdmFsdWUuZHJpdmVycyA9IFtpZF07XG4gICAgICB2YWx1ZS5udW1Ecml2ZXJzID0gdmFsdWUuZHJpdmVycy5sZW5ndGg7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMubnVtQWN0aXZlQWN0aW9ucykge1xuICAgICAgX0FjdGlvbi5wcm90b3R5cGUuc3RhcnQuY2FsbCh0aGlzKTtcbiAgICB9XG4gIH07XG5cbiAgLypcbiAgICBSZW1vdmUgYWN0aXZlIGFjdGlvbnNcbiAgICAgQHBhcmFtIFtudW1iZXJdXG4gICovXG5cblxuICBGbG93LnByb3RvdHlwZS5kZWFjdGl2YXRlQWN0aW9uID0gZnVuY3Rpb24gZGVhY3RpdmF0ZUFjdGlvbihpZCkge1xuICAgIHZhciBhY3Rpb24gPSB0aGlzLmFjdGl2ZUFjdGlvbnNbaWRdO1xuXG4gICAgaWYgKGFjdGlvbikge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhY3Rpb24ubnVtVmFsdWVLZXlzOyBpKyspIHtcbiAgICAgICAgdmFyIGtleSA9IGFjdGlvbi52YWx1ZUtleXNbaV07XG4gICAgICAgIHZhciB2YWx1ZSA9IHRoaXMudmFsdWVzW2tleV07XG4gICAgICAgIHZhciBkcml2ZXJJbmRleCA9IHZhbHVlLmRyaXZlcnMuaW5kZXhPZihpZCk7XG5cbiAgICAgICAgaWYgKGRyaXZlckluZGV4ICE9PSAtMSkge1xuICAgICAgICAgIHZhbHVlLmRyaXZlcnMuc3BsaWNlKGRyaXZlckluZGV4LCAxKTtcbiAgICAgICAgICB2YWx1ZS5udW1Ecml2ZXJzLS07XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgZGVsZXRlIHRoaXMuYWN0aXZlQWN0aW9uc1tpZF07XG4gICAgICB0aGlzLm51bUFjdGl2ZUFjdGlvbnMtLTtcbiAgICB9XG5cbiAgICBpZiAoIXRoaXMubnVtQWN0aXZlQWN0aW9ucyAmJiB0aGlzLmlzQWN0aXZlKSB7XG4gICAgICBfQWN0aW9uLnByb3RvdHlwZS5zdG9wLmNhbGwodGhpcyk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBGbG93O1xufShfQWN0aW9uMy5kZWZhdWx0KTtcblxuRmxvdy5wcm90b3R5cGUuZGVmYXVsdFZhbHVlID0gX0FjdGlvbjMuZGVmYXVsdC5leHRlbmREZWZhdWx0VmFsdWUoe1xuICBkcml2ZXJzOiBbXSxcbiAgbnVtRHJpdmVyczogMFxufSk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IEZsb3c7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5OeVl5OWhZM1JwYjI1ekwwWnNiM2N1YW5NaVhTd2libUZ0WlhNaU9sdGRMQ0p0WVhCd2FXNW5jeUk2SWpzN096dEJRVUZCT3pzN08wRkJRMEU3T3pzN096czdPenM3T3pzN096dEJRVXRCTEVsQlFVMHNaVUZCWlN4VlFVRkRMRTFCUVVRN1FVRkJRU3hUUVVGWkxFOUJRVThzU1VGQlVDeERRVUZaTEdOQlFWb3NRMEZCTWtJc1QwRkJUeXhGUVVGc1F5eEZRVUZ6UXl4TlFVRjBReXhEUVVGYU8wRkJRVUVzUTBGQmNrSTdRVUZEUVN4SlFVRk5MR05CUVdNc1ZVRkJReXhOUVVGRU8wRkJRVUVzVTBGQldTeFBRVUZQTEVsQlFWQXNRMEZCV1N4blFrRkJXaXhEUVVFMlFpeFBRVUZQTEVWQlFYQkRMRU5CUVZvN1FVRkJRU3hEUVVGd1FqdEJRVU5CTEVsQlFVMHNZVUZCWVN4VlFVRkRMRWxCUVVRN1FVRkJRU3hUUVVGWE8wRkJRelZDTEdOQlJEUkNPMEZCUlRWQ0xHZENRVUZaTEVsQlJtZENPMEZCUnpWQ0xHZENRVUZaTEZsQlNHZENPMEZCU1RWQ0xHdENRVUZqTzBGQlNtTXNSMEZCV0R0QlFVRkJMRU5CUVc1Q096dEpRVTlOTEVrN096dEJRVU5LTEdkQ1FVRlpMRXRCUVZvc1JVRkJiVUk3UVVGQlFUczdRVUZCUVN4cFJFRkRha0lzYlVKQlFVMHNTMEZCVGl4RFFVUnBRanM3UVVGRmFrSXNWVUZCU3l4aFFVRk1MRWRCUVhGQ0xFVkJRWEpDTzBGQlEwRXNWVUZCU3l4blFrRkJUQ3hIUVVGM1FpeERRVUY0UWp0QlFVaHBRanRCUVVsc1FqczdhVUpCUlVRc1J5eG5Ra0ZCU1N4TExFVkJRVTg3UVVGRFZDeHpRa0ZCVFN4SFFVRk9MRmxCUVZVc1MwRkJWanM3UVVGRlFTeFRRVUZMTEVsQlFVdzdPMEZCUlVFc1YwRkJUeXhKUVVGUU8wRkJRMFFzUnpzN096czdPenRwUWtGTFJDeFBMRzlDUVVGUkxFMHNSVUZCVVR0QlFVTmtMRkZCUVUwc2EwSkJRV3RDTEU5QlFVOHNUMEZCVUN4RlFVRjRRanRCUVVOQkxGRkJRVWtzV1VGQldTeEZRVUZvUWp0QlFVTkJMRkZCUVVrc1pVRkJaU3hMUVVGdVFqczdPMEZCUjBFc1UwRkJTeXhKUVVGSkxFZEJRVlFzU1VGQlowSXNaMEpCUVdkQ0xFMUJRV2hETEVWQlFYZERPMEZCUTNSRExGVkJRVWtzWjBKQlFXZENMRTFCUVdoQ0xFTkJRWFZDTEdOQlFYWkNMRU5CUVhORExFZEJRWFJETEV0QlFUaERMRU5CUVVNc1MwRkJTeXhOUVVGTUxFTkJRVmtzWTBGQldpeERRVUV5UWl4SFFVRXpRaXhEUVVGdVJDeEZRVUZ2Ump0QlFVTnNSaXhyUWtGQlZTeEhRVUZXTEVsQlFXbENMRVZCUVdwQ08wRkJRMEVzZFVKQlFXVXNTVUZCWmp0QlFVTkVPMEZCUTBZN08wRkJSVVFzVVVGQlNTeFpRVUZLTEVWQlFXdENPMEZCUTJoQ0xGZEJRVXNzUjBGQlRDeERRVUZUTEVWQlFVVXNVVUZCVVN4VFFVRldMRVZCUVZRN1FVRkRSRHM3UVVGRlJDeHZRa0ZCWjBJc1VVRkJhRUlzUjBGQk1rSXNUMEZCVHl4RlFVRnNRenM3UVVGRlFTeFhRVUZQTEdkQ1FVRm5RaXhIUVVGb1FpeERRVUZ2UWl4WFFVRlhMRWxCUVZnc1JVRkJhVUlzWlVGQmFrSXNRMEZCY0VJc1EwRkJVRHRCUVVORUxFYzdPenM3T3pzN096dHBRa0ZUUkN4TExHOUNRVUZSTzBGQlEwNHNjMEpCUVUwc1MwRkJUanM3UVVGRlFTeFRRVUZMTEVsQlFVa3NSMEZCVkN4SlFVRm5RaXhMUVVGTExHRkJRWEpDTEVWQlFXOURPMEZCUTJ4RExGVkJRVWtzUzBGQlN5eGhRVUZNTEVOQlFXMUNMR05CUVc1Q0xFTkJRV3RETEVkQlFXeERMRU5CUVVvc1JVRkJORU03UVVGRE1VTXNXVUZCVFN4VFFVRlRMRXRCUVVzc1lVRkJUQ3hEUVVGdFFpeEhRVUZ1UWl4RFFVRm1PMEZCUTBFc1dVRkJTU3hEUVVGRExFOUJRVThzVVVGQldpeEZRVUZ6UWp0QlFVTndRaXhwUWtGQlR5eExRVUZRTzBGQlEwUTdRVUZEUmp0QlFVTkdPenRCUVVWRUxGZEJRVThzU1VGQlVEdEJRVU5FTEVjN08ybENRVVZFTEVrc2JVSkJRVTg3UVVGRFRDeHpRa0ZCVFN4SlFVRk9PenRCUVVWQkxGTkJRVXNzU1VGQlNTeEhRVUZVTEVsQlFXZENMRXRCUVVzc1lVRkJja0lzUlVGQmIwTTdRVUZEYkVNc1ZVRkJTU3hMUVVGTExHRkJRVXdzUTBGQmJVSXNZMEZCYmtJc1EwRkJhME1zUjBGQmJFTXNRMEZCU2l4RlFVRTBRenRCUVVNeFF5eGhRVUZMTEdGQlFVd3NRMEZCYlVJc1IwRkJia0lzUlVGQmQwSXNTVUZCZUVJN1FVRkRSRHRCUVVOR096dEJRVVZFTEZkQlFVOHNTVUZCVUR0QlFVTkVMRWM3TzJsQ1FVVkVMRlVzZFVKQlFWY3NTeXhGUVVGUExGVXNSVUZCV1N4UExFVkJRVk03UVVGRGNrTXNVMEZCU3l4SlFVRkpMRWxCUVVrc1EwRkJZaXhGUVVGblFpeEpRVUZKTEV0QlFVc3NXVUZCZWtJc1JVRkJkVU1zUjBGQmRrTXNSVUZCTkVNN1FVRkRNVU1zVlVGQlRTeE5RVUZOTEV0QlFVc3NVMEZCVEN4RFFVRmxMRU5CUVdZc1EwRkJXanRCUVVOQkxGVkJRVTBzVVVGQlVTeExRVUZMTEUxQlFVd3NRMEZCV1N4SFFVRmFMRU5CUVdRN1FVRkRRU3hWUVVGTkxGTkJRVk1zVFVGQlRTeFZRVUZPTEVkQlFXMUNMRXRCUVVzc1lVRkJUQ3hEUVVGdFFpeE5RVUZOTEU5QlFVNHNRMEZCWXl4RFFVRmtMRU5CUVc1Q0xFTkJRVzVDTEVkQlFUQkVMRXRCUVhwRk8wRkJRMEVzVlVGQlNTeGhRVUZoTEUxQlFVMHNWVUZCVGl4SFFVRnRRaXhQUVVGUExFMUJRVkFzUTBGQll5eEhRVUZrTEVWQlFXMUNMRTlCUVhSRExFZEJRV2RFTEUxQlFVMHNUMEZCZGtVN096czdPenM3UVVGUFFTeFZRVUZKTEUxQlFVMHNWVUZCVml4RlFVRnpRanRCUVVOd1FpeHhRa0ZCWVN4TlFVRk5MRlZCUVU0c1JVRkJZanRCUVVORU96dEJRVVZFTEZsQlFVMHNUMEZCVGl4SFFVRm5RaXhWUVVGb1FqdEJRVU5FT3p0QlFVVkVMRmRCUVU4c2EwSkJRVTBzVlVGQlRpeFpRVUZwUWl4TFFVRnFRaXhGUVVGM1FpeFZRVUY0UWl4RlFVRnZReXhQUVVGd1F5eERRVUZRTzBGQlEwUXNSenM3T3pzN096czdPMmxDUVZGRUxHTXNNa0pCUVdVc1JTeEZRVUZKTEUwc1JVRkJVVHRCUVVONlFpeFRRVUZMTEdGQlFVd3NRMEZCYlVJc1JVRkJia0lzU1VGQmVVSXNUVUZCZWtJN1FVRkRRU3hUUVVGTExHZENRVUZNT3p0QlFVVkJMRk5CUVVzc1NVRkJTU3hKUVVGSkxFTkJRV0lzUlVGQlowSXNTVUZCU1N4UFFVRlBMRmxCUVROQ0xFVkJRWGxETEVkQlFYcERMRVZCUVRoRE8wRkJRelZETEZWQlFVMHNUVUZCVFN4UFFVRlBMRk5CUVZBc1EwRkJhVUlzUTBGQmFrSXNRMEZCV2p0QlFVTkJMRlZCUVUwc1kwRkJZeXhQUVVGUExFMUJRVkFzUTBGQll5eEhRVUZrTEVOQlFYQkNPMEZCUTBFc1ZVRkJUU3hSUVVGUkxFdEJRVXNzVFVGQlRDeERRVUZaTEVkQlFWb3NRMEZCWkRzN08wRkJSMEVzVlVGQlNTeFBRVUZQTEV0QlFWQXNTVUZCWjBJc1RVRkJUU3hWUVVGMFFpeEpRVUZ2UXl4RFFVRkRMRTFCUVUwc1ZVRkJNME1zU1VGQk1FUXNUVUZCVFN4UFFVRk9MRU5CUVdNc1EwRkJaQ3hGUVVGcFFpeFRRVUZxUWl4TFFVRXJRaXhQUVVGUExGTkJRWEJITEVWQlFXZElPMEZCUXpsSExHTkJRVTBzVlVGQlRpeEhRVUZ0UWl4clEwRkJiVUlzUzBGQlN5eGhRVUZNTEVOQlFXMUNMRTFCUVUwc1QwRkJUaXhEUVVGakxFTkJRV1FzUTBGQmJrSXNRMEZCYmtJc1JVRkJlVVFzVFVGQmVrUXNSVUZCYVVVc1MwRkJha1VzUlVGQmQwVXNSMEZCZUVVc1EwRkJia0k3UVVGRFJDeFBRVVpFTEUxQlJVOHNTVUZCU1N4RFFVRkRMRTlCUVU4c1YwRkJXaXhGUVVGNVFqdEJRVU01UWl4alFVRk5MRlZCUVU0c1IwRkJiVUlzVTBGQmJrSTdPenRCUVVkQkxGbEJRVWtzV1VGQldTeFJRVUZhTEV0QlFYbENMRU5CUVRkQ0xFVkJRV2RETzBGQlF6bENMSE5DUVVGWkxGRkJRVm9zUjBGQmRVSXNUVUZCVFN4UlFVRTNRanRCUVVORU96dEJRVVZFTEZsQlFVa3NXVUZCV1N4SlFVRmFMRXRCUVhGQ0xGTkJRWHBDTEVWQlFXOURPMEZCUTJ4RExITkNRVUZaTEVsQlFWb3NSMEZCYlVJc1dVRkJXU3hQUVVGYUxFZEJRWE5DTEUxQlFVMHNUMEZCTDBNN1FVRkRSRHRCUVVOR096dEJRVVZFTEZsQlFVMHNUMEZCVGl4SFFVRm5RaXhEUVVGRExFVkJRVVFzUTBGQmFFSTdRVUZEUVN4WlFVRk5MRlZCUVU0c1IwRkJiVUlzVFVGQlRTeFBRVUZPTEVOQlFXTXNUVUZCYWtNN1FVRkRSRHM3UVVGRlJDeFJRVUZKTEV0QlFVc3NaMEpCUVZRc1JVRkJNa0k3UVVGRGVrSXNkMEpCUVUwc1MwRkJUanRCUVVORU8wRkJRMFlzUnpzN096czdPenM3YVVKQlQwUXNaMElzTmtKQlFXbENMRVVzUlVGQlNUdEJRVU51UWl4UlFVRk5MRk5CUVZNc1MwRkJTeXhoUVVGTUxFTkJRVzFDTEVWQlFXNUNMRU5CUVdZN08wRkJSVUVzVVVGQlNTeE5RVUZLTEVWQlFWazdRVUZEVml4WFFVRkxMRWxCUVVrc1NVRkJTU3hEUVVGaUxFVkJRV2RDTEVsQlFVa3NUMEZCVHl4WlFVRXpRaXhGUVVGNVF5eEhRVUY2UXl4RlFVRTRRenRCUVVNMVF5eFpRVUZOTEUxQlFVMHNUMEZCVHl4VFFVRlFMRU5CUVdsQ0xFTkJRV3BDTEVOQlFWbzdRVUZEUVN4WlFVRk5MRkZCUVZFc1MwRkJTeXhOUVVGTUxFTkJRVmtzUjBGQldpeERRVUZrTzBGQlEwRXNXVUZCVFN4alFVRmpMRTFCUVUwc1QwRkJUaXhEUVVGakxFOUJRV1FzUTBGQmMwSXNSVUZCZEVJc1EwRkJjRUk3TzBGQlJVRXNXVUZCU1N4blFrRkJaMElzUTBGQlF5eERRVUZ5UWl4RlFVRjNRanRCUVVOMFFpeG5Ra0ZCVFN4UFFVRk9MRU5CUVdNc1RVRkJaQ3hEUVVGeFFpeFhRVUZ5UWl4RlFVRnJReXhEUVVGc1F6dEJRVU5CTEdkQ1FVRk5MRlZCUVU0N1FVRkRSRHRCUVVOR096dEJRVVZFTEdGQlFVOHNTMEZCU3l4aFFVRk1MRU5CUVcxQ0xFVkJRVzVDTEVOQlFWQTdRVUZEUVN4WFFVRkxMR2RDUVVGTU8wRkJRMFE3TzBGQlJVUXNVVUZCU1N4RFFVRkRMRXRCUVVzc1owSkJRVTRzU1VGQk1FSXNTMEZCU3l4UlFVRnVReXhGUVVFMlF6dEJRVU16UXl4M1FrRkJUU3hKUVVGT08wRkJRMFE3UVVGRFJpeEhPenM3T3p0QlFVZElMRXRCUVVzc1UwRkJUQ3hEUVVGbExGbEJRV1lzUjBGQk9FSXNhVUpCUVU4c2EwSkJRVkFzUTBGQk1FSTdRVUZEZEVRc1YwRkJVeXhGUVVRMlF6dEJRVVYwUkN4alFVRlpPMEZCUmpCRExFTkJRVEZDTEVOQlFUbENPenRyUWtGTFpTeEpJaXdpWm1sc1pTSTZJa1pzYjNjdWFuTWlMQ0p6YjNWeVkyVlNiMjkwSWpvaUwxVnpaWEp6TDIxaGRIUndaWEp5ZVM5VGFYUmxjeTl3YjNCdGIzUnBiMjRpTENKemIzVnlZMlZ6UTI5dWRHVnVkQ0k2V3lKcGJYQnZjblFnUVdOMGFXOXVJR1p5YjIwZ0p5NHVMMkZqZEdsdmJuTXZRV04wYVc5dUp6dGNibWx0Y0c5eWRDQm5aVzVsY21GMFpVSnNaVzVrUTNWeWRtVWdabkp2YlNBbkxpOW1iRzkzTDJkbGJtVnlZWFJsTFdKc1pXNWtMV04xY25abEp6dGNibHh1THlwY2JpQWdUV1YwYUc5a2N5QmhibVFnY0hKdmNHVnlkR2xsY3lCMGJ5QmhaR1FnZEc4Z1ltOTFibVFnUVdOMGFXOXVjMXh1S2k5Y2JtTnZibk4wSUdKdmRXNWtUMjVUZEdGeWRDQTlJQ2hoWTNScGIyNHBJRDArSUdGamRHbHZiaTVtYkc5M0xtRmpkR2wyWVhSbFFXTjBhVzl1S0dGamRHbHZiaTVwWkN3Z1lXTjBhVzl1S1R0Y2JtTnZibk4wSUdKdmRXNWtUMjVUZEc5d0lEMGdLR0ZqZEdsdmJpa2dQVDRnWVdOMGFXOXVMbVpzYjNjdVpHVmhZM1JwZG1GMFpVRmpkR2x2YmloaFkzUnBiMjR1YVdRcE8xeHVZMjl1YzNRZ1ltOTFibVJRY205d2N5QTlJQ2htYkc5M0tTQTlQaUFvZTF4dUlDQm1iRzkzTEZ4dUlDQnBjMUJ5YVc5eWFYUjVPaUIwY25WbExGeHVJQ0J2YmtGamRHbDJZWFJsT2lCaWIzVnVaRTl1VTNSaGNuUXNYRzRnSUc5dVJHVmhZM1JwZG1GMFpUb2dZbTkxYm1SUGJsTjBiM0JjYm4wcE8xeHVYRzVqYkdGemN5QkdiRzkzSUdWNGRHVnVaSE1nUVdOMGFXOXVJSHRjYmlBZ1kyOXVjM1J5ZFdOMGIzSW9jSEp2Y0hNcElIdGNiaUFnSUNCemRYQmxjaWh3Y205d2N5azdYRzRnSUNBZ2RHaHBjeTVoWTNScGRtVkJZM1JwYjI1eklEMGdlMzA3WEc0Z0lDQWdkR2hwY3k1dWRXMUJZM1JwZG1WQlkzUnBiMjV6SUQwZ01EdGNiaUFnZlZ4dVhHNGdJSE5sZENod2NtOXdjeWtnZTF4dUlDQWdJSE4xY0dWeUxuTmxkQ2h3Y205d2N5azdYRzVjYmlBZ0lDQjBhR2x6TG05dVkyVW9LVHRjYmx4dUlDQWdJSEpsZEhWeWJpQjBhR2x6TzF4dUlDQjlYRzVjYmlBZ0x5cGNiaUFnSUNCQ2FXNWtJRUZqZEdsdmJpQjBieUJCWTNSdmNseHVJQ0FxTDF4dUlDQmpiMjV1WldOMEtHRmpkR2x2YmlrZ2UxeHVJQ0FnSUdOdmJuTjBJR2x1YUdWeWFYUmxaRUZqZEdsdmJpQTlJR0ZqZEdsdmJpNXBibWhsY21sMEtDazdYRzRnSUNBZ2JHVjBJRzVsZDFaaGJIVmxjeUE5SUh0OU8xeHVJQ0FnSUd4bGRDQm9ZWE5PWlhkV1lXeDFaWE1nUFNCbVlXeHpaVHRjYmx4dUlDQWdJQzh2SUVOeVpXRjBaU0IyWVd4MVpYTWdiMjRnWVdOMGIzSWdkR2hoZENCa2IyNG5kQ0JsZUdsemRGeHVJQ0FnSUdadmNpQW9iR1YwSUd0bGVTQnBiaUJwYm1obGNtbDBaV1JCWTNScGIyNHVkbUZzZFdWektTQjdYRzRnSUNBZ0lDQnBaaUFvYVc1b1pYSnBkR1ZrUVdOMGFXOXVMblpoYkhWbGN5NW9ZWE5QZDI1UWNtOXdaWEowZVNoclpYa3BJQ1ltSUNGMGFHbHpMblpoYkhWbGN5NW9ZWE5QZDI1UWNtOXdaWEowZVNoclpYa3BLU0I3WEc0Z0lDQWdJQ0FnSUc1bGQxWmhiSFZsYzF0clpYbGRJRDBnZTMwN1hHNGdJQ0FnSUNBZ0lHaGhjMDVsZDFaaGJIVmxjeUE5SUhSeWRXVTdYRzRnSUNBZ0lDQjlYRzRnSUNBZ2ZWeHVYRzRnSUNBZ2FXWWdLR2hoYzA1bGQxWmhiSFZsY3lrZ2UxeHVJQ0FnSUNBZ2RHaHBjeTV6WlhRb2V5QjJZV3gxWlhNNklHNWxkMVpoYkhWbGN5QjlLVHRjYmlBZ0lDQjlYRzVjYmlBZ0lDQnBibWhsY21sMFpXUkJZM1JwYjI0dWNHRnlaVzUwU1dRZ1BTQmhZM1JwYjI0dWFXUTdYRzVjYmlBZ0lDQnlaWFIxY200Z2FXNW9aWEpwZEdWa1FXTjBhVzl1TG5ObGRDaGliM1Z1WkZCeWIzQnpLSFJvYVhNc0lHbHVhR1Z5YVhSbFpFRmpkR2x2YmlrcE8xeHVJQ0I5WEc1Y2JpQWdMeXBjYmlBZ0lDQlRkR0Z5ZENCQlkzUnZjbHh1WEc0Z0lDQWdTV1lnUVdOMGFXOXVJR2x6SUhCeWIzWnBaR1ZrTENCaWFXNWtJR2wwSUhSdklIUm9hWE1nUVdOMGIzSWdZVzVrSUhOMFlYSjBYRzVjYmlBZ0lDQkFjR0Z5WVcwZ0tHOXdkR2x2Ym1Gc0tTQmJRV04wYVc5dVhWeHVJQ0FxTDF4dUlDQnpkR0Z5ZENncElIdGNiaUFnSUNCemRYQmxjaTV6ZEdGeWRDZ3BPMXh1WEc0Z0lDQWdabTl5SUNoc1pYUWdhMlY1SUdsdUlIUm9hWE11WVdOMGFYWmxRV04wYVc5dWN5a2dlMXh1SUNBZ0lDQWdhV1lnS0hSb2FYTXVZV04wYVhabFFXTjBhVzl1Y3k1b1lYTlBkMjVRY205d1pYSjBlU2hyWlhrcEtTQjdYRzRnSUNBZ0lDQWdJR052Ym5OMElHRmpkR2x2YmlBOUlIUm9hWE11WVdOMGFYWmxRV04wYVc5dWMxdHJaWGxkTzF4dUlDQWdJQ0FnSUNCcFppQW9JV0ZqZEdsdmJpNXBjMEZqZEdsMlpTa2dlMXh1SUNBZ0lDQWdJQ0FnSUdGamRHbHZiaTV6ZEdGeWRDZ3BPMXh1SUNBZ0lDQWdJQ0I5WEc0Z0lDQWdJQ0I5WEc0Z0lDQWdmVnh1WEc0Z0lDQWdjbVYwZFhKdUlIUm9hWE03WEc0Z0lIMWNibHh1SUNCemRHOXdLQ2tnZTF4dUlDQWdJSE4xY0dWeUxuTjBiM0FvS1R0Y2JseHVJQ0FnSUdadmNpQW9iR1YwSUd0bGVTQnBiaUIwYUdsekxtRmpkR2wyWlVGamRHbHZibk1wSUh0Y2JpQWdJQ0FnSUdsbUlDaDBhR2x6TG1GamRHbDJaVUZqZEdsdmJuTXVhR0Z6VDNkdVVISnZjR1Z5ZEhrb2EyVjVLU2tnZTF4dUlDQWdJQ0FnSUNCMGFHbHpMbUZqZEdsMlpVRmpkR2x2Ym5OYmEyVjVYUzV6ZEc5d0tDazdYRzRnSUNBZ0lDQjlYRzRnSUNBZ2ZWeHVYRzRnSUNBZ2NtVjBkWEp1SUhSb2FYTTdYRzRnSUgxY2JseHVJQ0IzYVd4c1VtVnVaR1Z5S0dGamRHOXlMQ0JtY21GdFpWTjBZVzF3TENCbGJHRndjMlZrS1NCN1hHNGdJQ0FnWm05eUlDaHNaWFFnYVNBOUlEQTdJR2tnUENCMGFHbHpMbTUxYlZaaGJIVmxTMlY1Y3pzZ2FTc3JLU0I3WEc0Z0lDQWdJQ0JqYjI1emRDQnJaWGtnUFNCMGFHbHpMblpoYkhWbFMyVjVjMXRwWFR0Y2JpQWdJQ0FnSUdOdmJuTjBJSFpoYkhWbElEMGdkR2hwY3k1MllXeDFaWE5iYTJWNVhUdGNiaUFnSUNBZ0lHTnZibk4wSUdSeWFYWmxjaUE5SUhaaGJIVmxMbTUxYlVSeWFYWmxjbk1nUHlCMGFHbHpMbUZqZEdsMlpVRmpkR2x2Ym5OYmRtRnNkV1V1WkhKcGRtVnljMXN3WFYwZ09pQm1ZV3h6WlR0Y2JpQWdJQ0FnSUd4bGRDQnVaWGREZFhKeVpXNTBJRDBnZG1Gc2RXVXViblZ0UkhKcGRtVnljeUEvSUdSeWFYWmxjaTUyWVd4MVpYTmJhMlY1WFM1amRYSnlaVzUwSURvZ2RtRnNkV1V1WTNWeWNtVnVkRHRjYmx4dUlDQWdJQ0FnTHlvcVhHNGdJQ0FnSUNBZ0tpQlVUMFJQT2lCeVpYQnNZV05sSUhkcGRHZ2dZbXhsYm1RZ2RISmxaU0J5WlhOdmJIWmxjbHh1SUNBZ0lDQWdJQ29nUVdSa2FYUnBkbVVnYlc5MGFXOXVYRzRnSUNBZ0lDQWdLaUJDWlhwcFpYSWdkSGRsWlc0Z1lteGxibVJjYmlBZ0lDQWdJQ0FxTDF4dUlDQWdJQ0FnYVdZZ0tIWmhiSFZsTG1Kc1pXNWtRM1Z5ZG1VcElIdGNiaUFnSUNBZ0lDQWdibVYzUTNWeWNtVnVkQ0E5SUhaaGJIVmxMbUpzWlc1a1EzVnlkbVVvS1R0Y2JpQWdJQ0FnSUgxY2JseHVJQ0FnSUNBZ2RtRnNkV1V1WTNWeWNtVnVkQ0E5SUc1bGQwTjFjbkpsYm5RN1hHNGdJQ0FnZlZ4dVhHNGdJQ0FnY21WMGRYSnVJSE4xY0dWeUxuZHBiR3hTWlc1a1pYSW9ZV04wYjNJc0lHWnlZVzFsVTNSaGJYQXNJR1ZzWVhCelpXUXBPMXh1SUNCOVhHNWNiaUFnTHlwY2JpQWdJQ0JCWkdRZ1lXTjBhWFpsSUdGamRHbHZibk5jYmx4dUlDQWdJRUJ3WVhKaGJTQmJiblZ0WW1WeVhWeHVJQ0FnSUVCd1lYSmhiU0JiUVdOMGFXOXVYVnh1SUNBcUwxeHVJQ0JoWTNScGRtRjBaVUZqZEdsdmJpaHBaQ3dnWVdOMGFXOXVLU0I3WEc0Z0lDQWdkR2hwY3k1aFkzUnBkbVZCWTNScGIyNXpXMmxrWFNBOUlHRmpkR2x2Ymp0Y2JpQWdJQ0IwYUdsekxtNTFiVUZqZEdsMlpVRmpkR2x2Ym5Nckt6dGNibHh1SUNBZ0lHWnZjaUFvYkdWMElHa2dQU0F3T3lCcElEd2dZV04wYVc5dUxtNTFiVlpoYkhWbFMyVjVjenNnYVNzcktTQjdYRzRnSUNBZ0lDQmpiMjV6ZENCclpYa2dQU0JoWTNScGIyNHVkbUZzZFdWTFpYbHpXMmxkTzF4dUlDQWdJQ0FnWTI5dWMzUWdZV04wYVc5dVZtRnNkV1VnUFNCaFkzUnBiMjR1ZG1Gc2RXVnpXMnRsZVYwN1hHNGdJQ0FnSUNCamIyNXpkQ0IyWVd4MVpTQTlJSFJvYVhNdWRtRnNkV1Z6VzJ0bGVWMDdYRzVjYmlBZ0lDQWdJQzh2SUVsbUlIZGxKM0psSUdKc1pXNWthVzVuSUhSb2FYTWdZV04wYVc5dUxDQmhibVFnZEdobGNtVW5jeUJ2YmlCaGJISmxZV1I1SUdsdUlIQnliMmR5WlhOelhHNGdJQ0FnSUNCcFppQW9ZV04wYVc5dUxtSnNaVzVrSUNZbUlIWmhiSFZsTG01MWJVUnlhWFpsY25NZ0ppWWdJWFpoYkhWbExtSnNaVzVrUTNWeWRtVWdKaVlnS0haaGJIVmxMbVJ5YVhabGNuTmJNRjB1Y0hKdmRHOTBlWEJsSUQwOVBTQmhZM1JwYjI0dWNISnZkRzkwZVhCbEtTa2dlMXh1SUNBZ0lDQWdJQ0IyWVd4MVpTNWliR1Z1WkVOMWNuWmxJRDBnWjJWdVpYSmhkR1ZDYkdWdVpFTjFjblpsS0hSb2FYTXVZV04wYVhabFFXTjBhVzl1YzF0MllXeDFaUzVrY21sMlpYSnpXekJkWFN3Z1lXTjBhVzl1TENCMllXeDFaU3dnYTJWNUtUdGNiaUFnSUNBZ0lIMGdaV3h6WlNCcFppQW9JV0ZqZEdsdmJpNXBjMU5qY25WaVltbHVaeWtnZTF4dUlDQWdJQ0FnSUNCMllXeDFaUzVpYkdWdVpFTjFjblpsSUQwZ2RXNWtaV1pwYm1Wa08xeHVYRzRnSUNBZ0lDQWdJQzh2SUZCaGMzTWdRV04wYjNJZ2RtRnNkV1VnY0hKdmNHVnlkR2xsY3lCMGJ5QkJZM1JwYjI1Y2JpQWdJQ0FnSUNBZ2FXWWdLR0ZqZEdsdmJsWmhiSFZsTG5abGJHOWphWFI1SUQwOVBTQXdLU0I3WEc0Z0lDQWdJQ0FnSUNBZ1lXTjBhVzl1Vm1Gc2RXVXVkbVZzYjJOcGRIa2dQU0IyWVd4MVpTNTJaV3h2WTJsMGVUdGNiaUFnSUNBZ0lDQWdmVnh1WEc0Z0lDQWdJQ0FnSUdsbUlDaGhZM1JwYjI1V1lXeDFaUzVtY205dElEMDlQU0IxYm1SbFptbHVaV1FwSUh0Y2JpQWdJQ0FnSUNBZ0lDQmhZM1JwYjI1V1lXeDFaUzVtY205dElEMGdZV04wYVc5dVZtRnNkV1V1WTNWeWNtVnVkQ0E5SUhaaGJIVmxMbU4xY25KbGJuUTdYRzRnSUNBZ0lDQWdJSDFjYmlBZ0lDQWdJSDFjYmx4dUlDQWdJQ0FnZG1Gc2RXVXVaSEpwZG1WeWN5QTlJRnRwWkYwN1hHNGdJQ0FnSUNCMllXeDFaUzV1ZFcxRWNtbDJaWEp6SUQwZ2RtRnNkV1V1WkhKcGRtVnljeTVzWlc1bmRHZzdYRzRnSUNBZ2ZWeHVYRzRnSUNBZ2FXWWdLSFJvYVhNdWJuVnRRV04wYVhabFFXTjBhVzl1Y3lrZ2UxeHVJQ0FnSUNBZ2MzVndaWEl1YzNSaGNuUW9LVHRjYmlBZ0lDQjlYRzRnSUgxY2JseHVJQ0F2S2x4dUlDQWdJRkpsYlc5MlpTQmhZM1JwZG1VZ1lXTjBhVzl1YzF4dVhHNGdJQ0FnUUhCaGNtRnRJRnR1ZFcxaVpYSmRYRzRnSUNvdlhHNGdJR1JsWVdOMGFYWmhkR1ZCWTNScGIyNG9hV1FwSUh0Y2JpQWdJQ0JqYjI1emRDQmhZM1JwYjI0Z1BTQjBhR2x6TG1GamRHbDJaVUZqZEdsdmJuTmJhV1JkTzF4dVhHNGdJQ0FnYVdZZ0tHRmpkR2x2YmlrZ2UxeHVJQ0FnSUNBZ1ptOXlJQ2hzWlhRZ2FTQTlJREE3SUdrZ1BDQmhZM1JwYjI0dWJuVnRWbUZzZFdWTFpYbHpPeUJwS3lzcElIdGNiaUFnSUNBZ0lDQWdZMjl1YzNRZ2EyVjVJRDBnWVdOMGFXOXVMblpoYkhWbFMyVjVjMXRwWFR0Y2JpQWdJQ0FnSUNBZ1kyOXVjM1FnZG1Gc2RXVWdQU0IwYUdsekxuWmhiSFZsYzF0clpYbGRPMXh1SUNBZ0lDQWdJQ0JqYjI1emRDQmtjbWwyWlhKSmJtUmxlQ0E5SUhaaGJIVmxMbVJ5YVhabGNuTXVhVzVrWlhoUFppaHBaQ2s3WEc1Y2JpQWdJQ0FnSUNBZ2FXWWdLR1J5YVhabGNrbHVaR1Y0SUNFOVBTQXRNU2tnZTF4dUlDQWdJQ0FnSUNBZ0lIWmhiSFZsTG1SeWFYWmxjbk11YzNCc2FXTmxLR1J5YVhabGNrbHVaR1Y0TENBeEtUdGNiaUFnSUNBZ0lDQWdJQ0IyWVd4MVpTNXVkVzFFY21sMlpYSnpMUzA3WEc0Z0lDQWdJQ0FnSUgxY2JpQWdJQ0FnSUgxY2JseHVJQ0FnSUNBZ1pHVnNaWFJsSUhSb2FYTXVZV04wYVhabFFXTjBhVzl1YzF0cFpGMDdYRzRnSUNBZ0lDQjBhR2x6TG01MWJVRmpkR2wyWlVGamRHbHZibk10TFR0Y2JpQWdJQ0I5WEc1Y2JpQWdJQ0JwWmlBb0lYUm9hWE11Ym5WdFFXTjBhWFpsUVdOMGFXOXVjeUFtSmlCMGFHbHpMbWx6UVdOMGFYWmxLU0I3WEc0Z0lDQWdJQ0J6ZFhCbGNpNXpkRzl3S0NrN1hHNGdJQ0FnZlZ4dUlDQjlYRzU5WEc1Y2JrWnNiM2N1Y0hKdmRHOTBlWEJsTG1SbFptRjFiSFJXWVd4MVpTQTlJRUZqZEdsdmJpNWxlSFJsYm1SRVpXWmhkV3gwVm1Gc2RXVW9lMXh1SUNCa2NtbDJaWEp6T2lCYlhTeGNiaUFnYm5WdFJISnBkbVZ5Y3pvZ01GeHVmU2s3WEc1Y2JtVjRjRzl5ZENCa1pXWmhkV3gwSUVac2IzYzdYRzRpWFgwPVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvYWN0aW9ucy9GbG93LmpzXG4gKiogbW9kdWxlIGlkID0gNFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX0FjdGlvbjIgPSByZXF1aXJlKCcuL0FjdGlvbicpO1xuXG52YXIgX0FjdGlvbjMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9BY3Rpb24yKTtcblxudmFyIF9wcmVzZXRFYXNpbmcgPSByZXF1aXJlKCcuL2Vhc2luZy9wcmVzZXQtZWFzaW5nJyk7XG5cbnZhciBfcHJlc2V0RWFzaW5nMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3ByZXNldEVhc2luZyk7XG5cbnZhciBfdXRpbHMgPSByZXF1aXJlKCcuLi9pbmMvdXRpbHMnKTtcblxudmFyIF9jYWxjID0gcmVxdWlyZSgnLi4vaW5jL2NhbGMnKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoIXNlbGYpIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBjYWxsICYmICh0eXBlb2YgY2FsbCA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSA/IGNhbGwgOiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90IFwiICsgdHlwZW9mIHN1cGVyQ2xhc3MpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIGVudW1lcmFibGU6IGZhbHNlLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIDogc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzczsgfVxuXG52YXIgQ09VTlQgPSAnQ291bnQnO1xudmFyIE5FWFRfU1RFUFMgPSB7XG4gIGxvb3A6ICdyZXN0YXJ0JyxcbiAgeW95bzogJ3JldmVyc2UnLFxuICBmbGlwOiAnZmxpcFZhbHVlcydcbn07XG5cbnZhciBUd2VlbiA9IGZ1bmN0aW9uIChfQWN0aW9uKSB7XG4gIF9pbmhlcml0cyhUd2VlbiwgX0FjdGlvbik7XG5cbiAgZnVuY3Rpb24gVHdlZW4oKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFR3ZWVuKTtcblxuICAgIHJldHVybiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCBfQWN0aW9uLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykpO1xuICB9XG5cbiAgVHdlZW4ucHJvdG90eXBlLnN0YXJ0ID0gZnVuY3Rpb24gc3RhcnQoKSB7XG4gICAgdGhpcy5lbGFwc2VkID0gMDtcbiAgICB0aGlzLmZsaXBDb3VudCA9IHRoaXMueW95b0NvdW50ID0gdGhpcy5sb29wQ291bnQgPSAwO1xuICAgIHRoaXMuaXNTY3J1YmJpbmcgPSBmYWxzZTtcblxuICAgIC8vIFNldCBkZWZhdWx0IGBmcm9tYCBpZiBub25lIHNldFxuICAgIGlmICghdGhpcy5mbG93KSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubnVtVmFsdWVLZXlzOyBpKyspIHtcbiAgICAgICAgdmFyIGtleSA9IHRoaXMudmFsdWVLZXlzW2ldO1xuICAgICAgICB2YXIgdmFsdWUgPSB0aGlzLnZhbHVlc1trZXldO1xuICAgICAgICBpZiAodmFsdWUuZnJvbSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdmFsdWUuZnJvbSA9IDA7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gX0FjdGlvbi5wcm90b3R5cGUuc3RhcnQuY2FsbCh0aGlzKTtcbiAgfTtcblxuICBUd2Vlbi5wcm90b3R5cGUub25VcGRhdGUgPSBmdW5jdGlvbiBvblVwZGF0ZSh0d2VlbiwgZnJhbWVTdGFtcCwgZWxhcHNlZCkge1xuICAgIHZhciBwcm9ncmVzc1RhcmdldCA9IHRoaXMucGxheURpcmVjdGlvbiA9PT0gMSA/IDEgOiAwO1xuXG4gICAgdGhpcy5lbmRlZCA9IHRydWU7XG5cbiAgICBpZiAoIXRoaXMuaXNTY3J1YmJpbmcpIHtcbiAgICAgIHRoaXMuZWxhcHNlZCArPSBlbGFwc2VkICogdGhpcy5kaWxhdGUgKiB0aGlzLnBsYXlEaXJlY3Rpb247XG4gICAgfVxuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLm51bVZhbHVlS2V5czsgaSsrKSB7XG4gICAgICB2YXIga2V5ID0gdGhpcy52YWx1ZUtleXNbaV07XG4gICAgICB2YXIgdmFsdWUgPSB0aGlzLnZhbHVlc1trZXldO1xuXG4gICAgICB2YXIgcHJvZ3Jlc3MgPSAoMCwgX2NhbGMucmVzdHJpY3QpKCgwLCBfY2FsYy5nZXRQcm9ncmVzc0Zyb21WYWx1ZSkodGhpcy5lbGFwc2VkIC0gdmFsdWUuZGVsYXksIDAsIHZhbHVlLmR1cmF0aW9uKSwgMCwgMSk7XG5cbiAgICAgIC8vIE1hcmsgVHdlZW4gYXMgTk9UIGVuZGVkIGlmIHN0aWxsIGluIHByb2dyZXNzXG4gICAgICBpZiAocHJvZ3Jlc3MgIT09IHByb2dyZXNzVGFyZ2V0KSB7XG4gICAgICAgIHRoaXMuZW5kZWQgPSBmYWxzZTtcbiAgICAgIH1cblxuICAgICAgLy8gU3RlcCBwcm9ncmVzcyBpZiB3ZSdyZSBzdGVwcGluZ1xuICAgICAgaWYgKHZhbHVlLnN0ZXBzKSB7XG4gICAgICAgIHByb2dyZXNzID0gKDAsIF9jYWxjLnN0ZXBQcm9ncmVzcykocHJvZ3Jlc3MsIHZhbHVlLnN0ZXBzKTtcbiAgICAgIH1cblxuICAgICAgLy8gRWFzZSBwcm9ncmVzc1xuICAgICAgdmFsdWUuY3VycmVudCA9ICgwLCBfY2FsYy5lYXNlKShwcm9ncmVzcywgdmFsdWUuZnJvbSwgdmFsdWUudG8sIHZhbHVlLmVhc2UpO1xuICAgIH1cbiAgfTtcblxuICBUd2Vlbi5wcm90b3R5cGUub25GcmFtZUVuZCA9IGZ1bmN0aW9uIG9uRnJhbWVFbmQoKSB7XG4gICAgaWYgKHRoaXMuZW5kZWQpIHtcbiAgICAgIHZhciBzdGVwVGFrZW4gPSBmYWxzZTtcblxuICAgICAgZm9yICh2YXIga2V5IGluIE5FWFRfU1RFUFMpIHtcbiAgICAgICAgaWYgKE5FWFRfU1RFUFMuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgIGlmICgoMCwgX3V0aWxzLmlzTnVtKSh0aGlzW2tleV0pICYmIHRoaXNba2V5XSA+IHRoaXNba2V5ICsgQ09VTlRdKSB7XG4gICAgICAgICAgICB0aGlzW2tleSArIENPVU5UXSsrO1xuICAgICAgICAgICAgc3RlcFRha2VuID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXNbTkVYVF9TVEVQU1trZXldXSgpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoIXN0ZXBUYWtlbikge1xuICAgICAgICB0aGlzLmNvbXBsZXRlKCk7XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIFR3ZWVuLnByb3RvdHlwZS5mbGlwVmFsdWVzID0gZnVuY3Rpb24gZmxpcFZhbHVlcygpIHtcbiAgICB2YXIgdmFsdWVzID0gdGhpcy52YWx1ZXM7XG5cbiAgICB0aGlzLmVsYXBzZWQgPSB0aGlzLmR1cmF0aW9uIC0gdGhpcy5lbGFwc2VkO1xuXG4gICAgZm9yICh2YXIga2V5IGluIHZhbHVlcykge1xuICAgICAgaWYgKHZhbHVlcy5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgIHZhciB2YWx1ZSA9IHZhbHVlc1trZXldO1xuICAgICAgICB2YXIgX3JlZiA9IFt2YWx1ZS5mcm9tLCB2YWx1ZS50b107XG4gICAgICAgIHZhbHVlLnRvID0gX3JlZlswXTtcbiAgICAgICAgdmFsdWUuZnJvbSA9IF9yZWZbMV07XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgVHdlZW4ucHJvdG90eXBlLnJldmVyc2UgPSBmdW5jdGlvbiByZXZlcnNlKCkge1xuICAgIHRoaXMucGxheURpcmVjdGlvbiAqPSAtMTtcbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICBUd2Vlbi5wcm90b3R5cGUucmVzdGFydCA9IGZ1bmN0aW9uIHJlc3RhcnQoKSB7XG4gICAgdGhpcy5lbGFwc2VkID0gdGhpcy5wbGF5RGlyZWN0aW9uID09PSAxID8gMCA6IHRoaXMuZHVyYXRpb247XG4gICAgdGhpcy5zdGFydGVkID0gKDAsIF91dGlscy5jdXJyZW50VGltZSkoKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICBUd2Vlbi5wcm90b3R5cGUuc2VlayA9IGZ1bmN0aW9uIHNlZWsocHJvZ3Jlc3MpIHtcbiAgICB0aGlzLnNlZWtUaW1lKHRoaXMuZHVyYXRpb24gKiBwcm9ncmVzcyk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgVHdlZW4ucHJvdG90eXBlLnNlZWtUaW1lID0gZnVuY3Rpb24gc2Vla1RpbWUoZWxhcHNlZCkge1xuICAgIGlmICghdGhpcy5pc0FjdGl2ZSB8fCB0aGlzLmlzU2NydWJiaW5nKSB7XG4gICAgICB0aGlzLm9uY2UoKTtcbiAgICAgIHRoaXMuaXNTY3J1YmJpbmcgPSB0cnVlO1xuICAgIH1cblxuICAgIHRoaXMuZWxhcHNlZCA9IGVsYXBzZWQ7XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICByZXR1cm4gVHdlZW47XG59KF9BY3Rpb24zLmRlZmF1bHQpO1xuXG5Ud2Vlbi5wcm90b3R5cGUuZGVmYXVsdFZhbHVlUHJvcCA9ICd0byc7XG5Ud2Vlbi5wcm90b3R5cGUuZGVmYXVsdFZhbHVlID0gX0FjdGlvbjMuZGVmYXVsdC5leHRlbmREZWZhdWx0VmFsdWUoe1xuICBkZWxheTogMCxcbiAgZHVyYXRpb246IDMwMCxcbiAgZWFzZTogX3ByZXNldEVhc2luZzIuZGVmYXVsdC5lYXNlT3V0LFxuICBlbGFwc2VkOiAwLFxuICBzdGVwczogMCxcbiAgdG86IDAsXG4gIHJvdW5kOiBmYWxzZVxufSk7XG5Ud2Vlbi5wcm90b3R5cGUuZGVmYXVsdFByb3BzID0gX0FjdGlvbjMuZGVmYXVsdC5leHRlbmREZWZhdWx0UHJvcHMoe1xuICBibGVuZDogZmFsc2UsXG4gIGRpbGF0ZTogMSxcbiAgbG9vcDogMCxcbiAgeW95bzogMCxcbiAgZmxpcDogMCxcbiAgbG9vcENvdW50OiAwLFxuICB5b3lvQ291bnQ6IDAsXG4gIGZsaXBDb3VudDogMCxcbiAgcGxheURpcmVjdGlvbjogMSxcbiAgaXNTY3J1YmJpbmc6IGZhbHNlLFxuICBlbmRlZDogZmFsc2UsXG4gIGVsYXBzZWQ6IDBcbn0pO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBUd2Vlbjtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbk55WXk5aFkzUnBiMjV6TDFSM1pXVnVMbXB6SWwwc0ltNWhiV1Z6SWpwYlhTd2liV0Z3Y0dsdVozTWlPaUk3T3pzN1FVRkJRVHM3T3p0QlFVTkJPenM3TzBGQlEwRTdPMEZCUTBFN096czdPenM3T3pzN1FVRkZRU3hKUVVGTkxGRkJRVkVzVDBGQlpEdEJRVU5CTEVsQlFVMHNZVUZCWVR0QlFVTnFRaXhSUVVGTkxGTkJSRmM3UVVGRmFrSXNVVUZCVFN4VFFVWlhPMEZCUjJwQ0xGRkJRVTA3UVVGSVZ5eERRVUZ1UWpzN1NVRk5UU3hMT3pzN096czdPenM3YTBKQlEwb3NTeXh2UWtGQlVUdEJRVU5PTEZOQlFVc3NUMEZCVEN4SFFVRmxMRU5CUVdZN1FVRkRRU3hUUVVGTExGTkJRVXdzUjBGQmFVSXNTMEZCU3l4VFFVRk1MRWRCUVdsQ0xFdEJRVXNzVTBGQlRDeEhRVUZwUWl4RFFVRnVSRHRCUVVOQkxGTkJRVXNzVjBGQlRDeEhRVUZ0UWl4TFFVRnVRanM3TzBGQlIwRXNVVUZCU1N4RFFVRkRMRXRCUVVzc1NVRkJWaXhGUVVGblFqdEJRVU5rTEZkQlFVc3NTVUZCU1N4SlFVRkpMRU5CUVdJc1JVRkJaMElzU1VGQlNTeExRVUZMTEZsQlFYcENMRVZCUVhWRExFZEJRWFpETEVWQlFUUkRPMEZCUXpGRExGbEJRVTBzVFVGQlRTeExRVUZMTEZOQlFVd3NRMEZCWlN4RFFVRm1MRU5CUVZvN1FVRkRRU3haUVVGTkxGRkJRVkVzUzBGQlN5eE5RVUZNTEVOQlFWa3NSMEZCV2l4RFFVRmtPMEZCUTBFc1dVRkJTU3hOUVVGTkxFbEJRVTRzUzBGQlpTeFRRVUZ1UWl4RlFVRTRRanRCUVVNMVFpeG5Ra0ZCVFN4SlFVRk9MRWRCUVdFc1EwRkJZanRCUVVORU8wRkJRMFk3UVVGRFJqczdRVUZGUkN4WFFVRlBMR3RDUVVGTkxFdEJRVTRzVjBGQlVEdEJRVU5FTEVjN08ydENRVVZFTEZFc2NVSkJRVk1zU3l4RlFVRlBMRlVzUlVGQldTeFBMRVZCUVZNN1FVRkRia01zVVVGQlRTeHBRa0ZCYTBJc1MwRkJTeXhoUVVGTUxFdEJRWFZDTEVOQlFYaENMRWRCUVRaQ0xFTkJRVGRDTEVkQlFXbERMRU5CUVhoRU96dEJRVVZCTEZOQlFVc3NTMEZCVEN4SFFVRmhMRWxCUVdJN08wRkJSVUVzVVVGQlNTeERRVUZETEV0QlFVc3NWMEZCVml4RlFVRjFRanRCUVVOeVFpeFhRVUZMTEU5QlFVd3NTVUZCYVVJc1ZVRkJWU3hMUVVGTExFMUJRV2hDTEVkQlFUQkNMRXRCUVVzc1lVRkJMME03UVVGRFJEczdRVUZGUkN4VFFVRkxMRWxCUVVrc1NVRkJTU3hEUVVGaUxFVkJRV2RDTEVsQlFVa3NTMEZCU3l4WlFVRjZRaXhGUVVGMVF5eEhRVUYyUXl4RlFVRTBRenRCUVVNeFF5eFZRVUZOTEUxQlFVMHNTMEZCU3l4VFFVRk1MRU5CUVdVc1EwRkJaaXhEUVVGYU8wRkJRMEVzVlVGQlRTeFJRVUZSTEV0QlFVc3NUVUZCVEN4RFFVRlpMRWRCUVZvc1EwRkJaRHM3UVVGRlFTeFZRVUZKTEZkQlFWY3NiMEpCUVZNc1owTkJRWEZDTEV0QlFVc3NUMEZCVEN4SFFVRmxMRTFCUVUwc1MwRkJNVU1zUlVGQmFVUXNRMEZCYWtRc1JVRkJiMFFzVFVGQlRTeFJRVUV4UkN4RFFVRlVMRVZCUVRoRkxFTkJRVGxGTEVWQlFXbEdMRU5CUVdwR0xFTkJRV1k3T3p0QlFVZEJMRlZCUVVrc1lVRkJZU3hqUVVGcVFpeEZRVUZwUXp0QlFVTXZRaXhoUVVGTExFdEJRVXdzUjBGQllTeExRVUZpTzBGQlEwUTdPenRCUVVkRUxGVkJRVWtzVFVGQlRTeExRVUZXTEVWQlFXbENPMEZCUTJZc2JVSkJRVmNzZDBKQlFXRXNVVUZCWWl4RlFVRjFRaXhOUVVGTkxFdEJRVGRDTEVOQlFWZzdRVUZEUkRzN08wRkJSMFFzV1VGQlRTeFBRVUZPTEVkQlFXZENMR2RDUVVGTExGRkJRVXdzUlVGQlpTeE5RVUZOTEVsQlFYSkNMRVZCUVRKQ0xFMUJRVTBzUlVGQmFrTXNSVUZCY1VNc1RVRkJUU3hKUVVFelF5eERRVUZvUWp0QlFVTkVPMEZCUTBZc1J6czdhMEpCUlVRc1ZTeDVRa0ZCWVR0QlFVTllMRkZCUVVrc1MwRkJTeXhMUVVGVUxFVkJRV2RDTzBGQlEyUXNWVUZCU1N4WlFVRlpMRXRCUVdoQ096dEJRVVZCTEZkQlFVc3NTVUZCU1N4SFFVRlVMRWxCUVdkQ0xGVkJRV2hDTEVWQlFUUkNPMEZCUXpGQ0xGbEJRVWtzVjBGQlZ5eGpRVUZZTEVOQlFUQkNMRWRCUVRGQ0xFTkJRVW9zUlVGQmIwTTdRVUZEYkVNc1kwRkJTU3hyUWtGQlRTeExRVUZMTEVkQlFVd3NRMEZCVGl4TFFVRnZRaXhMUVVGTExFZEJRVXdzU1VGQldTeExRVUZMTEUxQlFVMHNTMEZCV0N4RFFVRndReXhGUVVGMVJEdEJRVU55UkN4cFFrRkJTeXhOUVVGTkxFdEJRVmc3UVVGRFFTeDNRa0ZCV1N4SlFVRmFPMEZCUTBFc2FVSkJRVXNzVjBGQlZ5eEhRVUZZTEVOQlFVdzdRVUZEUkR0QlFVTkdPMEZCUTBZN08wRkJSVVFzVlVGQlNTeERRVUZETEZOQlFVd3NSVUZCWjBJN1FVRkRaQ3hoUVVGTExGRkJRVXc3UVVGRFJEdEJRVU5HTzBGQlEwWXNSenM3YTBKQlJVUXNWU3g1UWtGQllUdEJRVU5ZTEZGQlFVMHNVMEZCVXl4TFFVRkxMRTFCUVhCQ096dEJRVVZCTEZOQlFVc3NUMEZCVEN4SFFVRmxMRXRCUVVzc1VVRkJUQ3hIUVVGblFpeExRVUZMTEU5QlFYQkRPenRCUVVWQkxGTkJRVXNzU1VGQlNTeEhRVUZVTEVsQlFXZENMRTFCUVdoQ0xFVkJRWGRDTzBGQlEzUkNMRlZCUVVrc1QwRkJUeXhqUVVGUUxFTkJRWE5DTEVkQlFYUkNMRU5CUVVvc1JVRkJaME03UVVGRE9VSXNXVUZCVFN4UlFVRlJMRTlCUVU4c1IwRkJVQ3hEUVVGa08wRkJSRGhDTEcxQ1FVVk1MRU5CUVVNc1RVRkJUU3hKUVVGUUxFVkJRV0VzVFVGQlRTeEZRVUZ1UWl4RFFVWkxPMEZCUlRkQ0xHTkJRVTBzUlVGR2RVSTdRVUZGYmtJc1kwRkJUU3hKUVVaaE8wRkJSeTlDTzBGQlEwWTdPMEZCUlVRc1YwRkJUeXhKUVVGUU8wRkJRMFFzUnpzN2EwSkJSVVFzVHl4elFrRkJWVHRCUVVOU0xGTkJRVXNzWVVGQlRDeEpRVUZ6UWl4RFFVRkRMRU5CUVhaQ08wRkJRMEVzVjBGQlR5eEpRVUZRTzBGQlEwUXNSenM3YTBKQlJVUXNUeXh6UWtGQlZUdEJRVU5TTEZOQlFVc3NUMEZCVEN4SFFVRm5RaXhMUVVGTExHRkJRVXdzUzBGQmRVSXNRMEZCZUVJc1IwRkJOa0lzUTBGQk4wSXNSMEZCYVVNc1MwRkJTeXhSUVVGeVJEdEJRVU5CTEZOQlFVc3NUMEZCVEN4SFFVRmxMSGxDUVVGbU8wRkJRMEVzVjBGQlR5eEpRVUZRTzBGQlEwUXNSenM3YTBKQlJVUXNTU3hwUWtGQlN5eFJMRVZCUVZVN1FVRkRZaXhUUVVGTExGRkJRVXdzUTBGQll5eExRVUZMTEZGQlFVd3NSMEZCWjBJc1VVRkJPVUk3UVVGRFFTeFhRVUZQTEVsQlFWQTdRVUZEUkN4SE96dHJRa0ZGUkN4UkxIRkNRVUZUTEU4c1JVRkJVenRCUVVOb1FpeFJRVUZKTEVOQlFVTXNTMEZCU3l4UlFVRk9MRWxCUVd0Q0xFdEJRVXNzVjBGQk0wSXNSVUZCZDBNN1FVRkRkRU1zVjBGQlN5eEpRVUZNTzBGQlEwRXNWMEZCU3l4WFFVRk1MRWRCUVcxQ0xFbEJRVzVDTzBGQlEwUTdPMEZCUlVRc1UwRkJTeXhQUVVGTUxFZEJRV1VzVDBGQlpqczdRVUZGUVN4WFFVRlBMRWxCUVZBN1FVRkRSQ3hIT3pzN096dEJRVWRJTEUxQlFVMHNVMEZCVGl4RFFVRm5RaXhuUWtGQmFFSXNSMEZCYlVNc1NVRkJia003UVVGRFFTeE5RVUZOTEZOQlFVNHNRMEZCWjBJc1dVRkJhRUlzUjBGQkswSXNhVUpCUVU4c2EwSkJRVkFzUTBGQk1FSTdRVUZEZGtRc1UwRkJUeXhEUVVSblJEdEJRVVYyUkN4WlFVRlZMRWRCUmpaRE8wRkJSM1pFTEZGQlFVMHNkVUpCUVU4c1QwRklNRU03UVVGSmRrUXNWMEZCVXl4RFFVbzRRenRCUVV0MlJDeFRRVUZQTEVOQlRHZEVPMEZCVFhaRUxFMUJRVWtzUTBGT2JVUTdRVUZQZGtRc1UwRkJUenRCUVZCblJDeERRVUV4UWl4RFFVRXZRanRCUVZOQkxFMUJRVTBzVTBGQlRpeERRVUZuUWl4WlFVRm9RaXhIUVVFclFpeHBRa0ZCVHl4clFrRkJVQ3hEUVVFd1FqdEJRVU4yUkN4VFFVRlBMRXRCUkdkRU8wRkJSWFpFTEZWQlFWRXNRMEZHSzBNN1FVRkhka1FzVVVGQlRTeERRVWhwUkR0QlFVbDJSQ3hSUVVGTkxFTkJTbWxFTzBGQlMzWkVMRkZCUVUwc1EwRk1hVVE3UVVGTmRrUXNZVUZCVnl4RFFVNDBRenRCUVU5MlJDeGhRVUZYTEVOQlVEUkRPMEZCVVhaRUxHRkJRVmNzUTBGU05FTTdRVUZUZGtRc2FVSkJRV1VzUTBGVWQwTTdRVUZWZGtRc1pVRkJZU3hMUVZZd1F6dEJRVmQyUkN4VFFVRlBMRXRCV0dkRU8wRkJXWFpFTEZkQlFWTTdRVUZhT0VNc1EwRkJNVUlzUTBGQkwwSTdPMnRDUVdWbExFc2lMQ0ptYVd4bElqb2lWSGRsWlc0dWFuTWlMQ0p6YjNWeVkyVlNiMjkwSWpvaUwxVnpaWEp6TDIxaGRIUndaWEp5ZVM5VGFYUmxjeTl3YjNCdGIzUnBiMjRpTENKemIzVnlZMlZ6UTI5dWRHVnVkQ0k2V3lKcGJYQnZjblFnUVdOMGFXOXVJR1p5YjIwZ0p5NHZRV04wYVc5dUp6dGNibWx0Y0c5eWRDQmxZWE5wYm1jZ1puSnZiU0FuTGk5bFlYTnBibWN2Y0hKbGMyVjBMV1ZoYzJsdVp5YzdYRzVwYlhCdmNuUWdleUJqZFhKeVpXNTBWR2x0WlN3Z2FYTk9kVzBnZlNCbWNtOXRJQ2N1TGk5cGJtTXZkWFJwYkhNbk8xeHVhVzF3YjNKMElIc2daV0Z6WlN3Z2NtVnpkSEpwWTNRc0lHZGxkRkJ5YjJkeVpYTnpSbkp2YlZaaGJIVmxMQ0J6ZEdWd1VISnZaM0psYzNNZ2ZTQm1jbTl0SUNjdUxpOXBibU12WTJGc1l5YzdYRzVjYm1OdmJuTjBJRU5QVlU1VUlEMGdKME52ZFc1MEp6dGNibU52Ym5OMElFNUZXRlJmVTFSRlVGTWdQU0I3WEc0Z0lHeHZiM0E2SUNkeVpYTjBZWEowSnl4Y2JpQWdlVzk1YnpvZ0ozSmxkbVZ5YzJVbkxGeHVJQ0JtYkdsd09pQW5abXhwY0ZaaGJIVmxjeWRjYm4wN1hHNWNibU5zWVhOeklGUjNaV1Z1SUdWNGRHVnVaSE1nUVdOMGFXOXVJSHRjYmlBZ2MzUmhjblFvS1NCN1hHNGdJQ0FnZEdocGN5NWxiR0Z3YzJWa0lEMGdNRHRjYmlBZ0lDQjBhR2x6TG1ac2FYQkRiM1Z1ZENBOUlIUm9hWE11ZVc5NWIwTnZkVzUwSUQwZ2RHaHBjeTVzYjI5d1EyOTFiblFnUFNBd08xeHVJQ0FnSUhSb2FYTXVhWE5UWTNKMVltSnBibWNnUFNCbVlXeHpaVHRjYmx4dUlDQWdJQzh2SUZObGRDQmtaV1poZFd4MElHQm1jbTl0WUNCcFppQnViMjVsSUhObGRGeHVJQ0FnSUdsbUlDZ2hkR2hwY3k1bWJHOTNLU0I3WEc0Z0lDQWdJQ0JtYjNJZ0tHeGxkQ0JwSUQwZ01Ec2dhU0E4SUhSb2FYTXViblZ0Vm1Gc2RXVkxaWGx6T3lCcEt5c3BJSHRjYmlBZ0lDQWdJQ0FnWTI5dWMzUWdhMlY1SUQwZ2RHaHBjeTUyWVd4MVpVdGxlWE5iYVYwN1hHNGdJQ0FnSUNBZ0lHTnZibk4wSUhaaGJIVmxJRDBnZEdocGN5NTJZV3gxWlhOYmEyVjVYVHRjYmlBZ0lDQWdJQ0FnYVdZZ0tIWmhiSFZsTG1aeWIyMGdQVDA5SUhWdVpHVm1hVzVsWkNrZ2UxeHVJQ0FnSUNBZ0lDQWdJSFpoYkhWbExtWnliMjBnUFNBd08xeHVJQ0FnSUNBZ0lDQjlYRzRnSUNBZ0lDQjlYRzRnSUNBZ2ZWeHVYRzRnSUNBZ2NtVjBkWEp1SUhOMWNHVnlMbk4wWVhKMEtDazdYRzRnSUgxY2JseHVJQ0J2YmxWd1pHRjBaU2gwZDJWbGJpd2dabkpoYldWVGRHRnRjQ3dnWld4aGNITmxaQ2tnZTF4dUlDQWdJR052Ym5OMElIQnliMmR5WlhOelZHRnlaMlYwSUQwZ0tIUm9hWE11Y0d4aGVVUnBjbVZqZEdsdmJpQTlQVDBnTVNrZ1B5QXhJRG9nTUR0Y2JseHVJQ0FnSUhSb2FYTXVaVzVrWldRZ1BTQjBjblZsTzF4dVhHNGdJQ0FnYVdZZ0tDRjBhR2x6TG1selUyTnlkV0ppYVc1bktTQjdYRzRnSUNBZ0lDQjBhR2x6TG1Wc1lYQnpaV1FnS3owZ0tHVnNZWEJ6WldRZ0tpQjBhR2x6TG1ScGJHRjBaU2tnS2lCMGFHbHpMbkJzWVhsRWFYSmxZM1JwYjI0N1hHNGdJQ0FnZlZ4dVhHNGdJQ0FnWm05eUlDaHNaWFFnYVNBOUlEQTdJR2tnUENCMGFHbHpMbTUxYlZaaGJIVmxTMlY1Y3pzZ2FTc3JLU0I3WEc0Z0lDQWdJQ0JqYjI1emRDQnJaWGtnUFNCMGFHbHpMblpoYkhWbFMyVjVjMXRwWFR0Y2JpQWdJQ0FnSUdOdmJuTjBJSFpoYkhWbElEMGdkR2hwY3k1MllXeDFaWE5iYTJWNVhUdGNibHh1SUNBZ0lDQWdiR1YwSUhCeWIyZHlaWE56SUQwZ2NtVnpkSEpwWTNRb1oyVjBVSEp2WjNKbGMzTkdjbTl0Vm1Gc2RXVW9kR2hwY3k1bGJHRndjMlZrSUMwZ2RtRnNkV1V1WkdWc1lYa3NJREFzSUhaaGJIVmxMbVIxY21GMGFXOXVLU3dnTUN3Z01TazdYRzVjYmlBZ0lDQWdJQzh2SUUxaGNtc2dWSGRsWlc0Z1lYTWdUazlVSUdWdVpHVmtJR2xtSUhOMGFXeHNJR2x1SUhCeWIyZHlaWE56WEc0Z0lDQWdJQ0JwWmlBb2NISnZaM0psYzNNZ0lUMDlJSEJ5YjJkeVpYTnpWR0Z5WjJWMEtTQjdYRzRnSUNBZ0lDQWdJSFJvYVhNdVpXNWtaV1FnUFNCbVlXeHpaVHRjYmlBZ0lDQWdJSDFjYmx4dUlDQWdJQ0FnTHk4Z1UzUmxjQ0J3Y205bmNtVnpjeUJwWmlCM1pTZHlaU0J6ZEdWd2NHbHVaMXh1SUNBZ0lDQWdhV1lnS0haaGJIVmxMbk4wWlhCektTQjdYRzRnSUNBZ0lDQWdJSEJ5YjJkeVpYTnpJRDBnYzNSbGNGQnliMmR5WlhOektIQnliMmR5WlhOekxDQjJZV3gxWlM1emRHVndjeWs3WEc0Z0lDQWdJQ0I5WEc1Y2JpQWdJQ0FnSUM4dklFVmhjMlVnY0hKdlozSmxjM05jYmlBZ0lDQWdJSFpoYkhWbExtTjFjbkpsYm5RZ1BTQmxZWE5sS0hCeWIyZHlaWE56TENCMllXeDFaUzVtY205dExDQjJZV3gxWlM1MGJ5d2dkbUZzZFdVdVpXRnpaU2s3WEc0Z0lDQWdmVnh1SUNCOVhHNWNiaUFnYjI1R2NtRnRaVVZ1WkNncElIdGNiaUFnSUNCcFppQW9kR2hwY3k1bGJtUmxaQ2tnZTF4dUlDQWdJQ0FnYkdWMElITjBaWEJVWVd0bGJpQTlJR1poYkhObE8xeHVYRzRnSUNBZ0lDQm1iM0lnS0d4bGRDQnJaWGtnYVc0Z1RrVllWRjlUVkVWUVV5a2dlMXh1SUNBZ0lDQWdJQ0JwWmlBb1RrVllWRjlUVkVWUVV5NW9ZWE5QZDI1UWNtOXdaWEowZVNoclpYa3BLU0I3WEc0Z0lDQWdJQ0FnSUNBZ2FXWWdLR2x6VG5WdEtIUm9hWE5iYTJWNVhTa2dKaVlnZEdocGMxdHJaWGxkSUQ0Z2RHaHBjMXRyWlhrZ0t5QkRUMVZPVkYwcElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUhSb2FYTmJhMlY1SUNzZ1EwOVZUbFJkS3lzN1hHNGdJQ0FnSUNBZ0lDQWdJQ0J6ZEdWd1ZHRnJaVzRnUFNCMGNuVmxPMXh1SUNBZ0lDQWdJQ0FnSUNBZ2RHaHBjMXRPUlZoVVgxTlVSVkJUVzJ0bGVWMWRLQ2s3WEc0Z0lDQWdJQ0FnSUNBZ2ZWeHVJQ0FnSUNBZ0lDQjlYRzRnSUNBZ0lDQjlYRzVjYmlBZ0lDQWdJR2xtSUNnaGMzUmxjRlJoYTJWdUtTQjdYRzRnSUNBZ0lDQWdJSFJvYVhNdVkyOXRjR3hsZEdVb0tUdGNiaUFnSUNBZ0lIMWNiaUFnSUNCOVhHNGdJSDFjYmx4dUlDQm1iR2x3Vm1Gc2RXVnpLQ2tnZTF4dUlDQWdJR052Ym5OMElIWmhiSFZsY3lBOUlIUm9hWE11ZG1Gc2RXVnpPMXh1WEc0Z0lDQWdkR2hwY3k1bGJHRndjMlZrSUQwZ2RHaHBjeTVrZFhKaGRHbHZiaUF0SUhSb2FYTXVaV3hoY0hObFpEdGNibHh1SUNBZ0lHWnZjaUFvYkdWMElHdGxlU0JwYmlCMllXeDFaWE1wSUh0Y2JpQWdJQ0FnSUdsbUlDaDJZV3gxWlhNdWFHRnpUM2R1VUhKdmNHVnlkSGtvYTJWNUtTa2dlMXh1SUNBZ0lDQWdJQ0JqYjI1emRDQjJZV3gxWlNBOUlIWmhiSFZsYzF0clpYbGRPMXh1SUNBZ0lDQWdJQ0JiZG1Gc2RXVXVkRzhzSUhaaGJIVmxMbVp5YjIxZElEMGdXM1poYkhWbExtWnliMjBzSUhaaGJIVmxMblJ2WFR0Y2JpQWdJQ0FnSUgxY2JpQWdJQ0I5WEc1Y2JpQWdJQ0J5WlhSMWNtNGdkR2hwY3p0Y2JpQWdmVnh1WEc0Z0lISmxkbVZ5YzJVb0tTQjdYRzRnSUNBZ2RHaHBjeTV3YkdGNVJHbHlaV04wYVc5dUlDbzlJQzB4TzF4dUlDQWdJSEpsZEhWeWJpQjBhR2x6TzF4dUlDQjlYRzVjYmlBZ2NtVnpkR0Z5ZENncElIdGNiaUFnSUNCMGFHbHpMbVZzWVhCelpXUWdQU0FvZEdocGN5NXdiR0Y1UkdseVpXTjBhVzl1SUQwOVBTQXhLU0EvSURBZ09pQjBhR2x6TG1SMWNtRjBhVzl1TzF4dUlDQWdJSFJvYVhNdWMzUmhjblJsWkNBOUlHTjFjbkpsYm5SVWFXMWxLQ2s3WEc0Z0lDQWdjbVYwZFhKdUlIUm9hWE03WEc0Z0lIMWNibHh1SUNCelpXVnJLSEJ5YjJkeVpYTnpLU0I3WEc0Z0lDQWdkR2hwY3k1elpXVnJWR2x0WlNoMGFHbHpMbVIxY21GMGFXOXVJQ29nY0hKdlozSmxjM01wTzF4dUlDQWdJSEpsZEhWeWJpQjBhR2x6TzF4dUlDQjlYRzVjYmlBZ2MyVmxhMVJwYldVb1pXeGhjSE5sWkNrZ2UxeHVJQ0FnSUdsbUlDZ2hkR2hwY3k1cGMwRmpkR2wyWlNCOGZDQjBhR2x6TG1selUyTnlkV0ppYVc1bktTQjdYRzRnSUNBZ0lDQjBhR2x6TG05dVkyVW9LVHRjYmlBZ0lDQWdJSFJvYVhNdWFYTlRZM0oxWW1KcGJtY2dQU0IwY25WbE8xeHVJQ0FnSUgxY2JseHVJQ0FnSUhSb2FYTXVaV3hoY0hObFpDQTlJR1ZzWVhCelpXUTdYRzVjYmlBZ0lDQnlaWFIxY200Z2RHaHBjenRjYmlBZ2ZWeHVmVnh1WEc1VWQyVmxiaTV3Y205MGIzUjVjR1V1WkdWbVlYVnNkRlpoYkhWbFVISnZjQ0E5SUNkMGJ5YzdYRzVVZDJWbGJpNXdjbTkwYjNSNWNHVXVaR1ZtWVhWc2RGWmhiSFZsSUQwZ1FXTjBhVzl1TG1WNGRHVnVaRVJsWm1GMWJIUldZV3gxWlNoN1hHNGdJR1JsYkdGNU9pQXdMRnh1SUNCa2RYSmhkR2x2YmpvZ016QXdMRnh1SUNCbFlYTmxPaUJsWVhOcGJtY3VaV0Z6WlU5MWRDeGNiaUFnWld4aGNITmxaRG9nTUN4Y2JpQWdjM1JsY0hNNklEQXNYRzRnSUhSdk9pQXdMRnh1SUNCeWIzVnVaRG9nWm1Gc2MyVmNibjBwTzF4dVZIZGxaVzR1Y0hKdmRHOTBlWEJsTG1SbFptRjFiSFJRY205d2N5QTlJRUZqZEdsdmJpNWxlSFJsYm1SRVpXWmhkV3gwVUhKdmNITW9lMXh1SUNCaWJHVnVaRG9nWm1Gc2MyVXNYRzRnSUdScGJHRjBaVG9nTVN4Y2JpQWdiRzl2Y0RvZ01DeGNiaUFnZVc5NWJ6b2dNQ3hjYmlBZ1pteHBjRG9nTUN4Y2JpQWdiRzl2Y0VOdmRXNTBPaUF3TEZ4dUlDQjViM2x2UTI5MWJuUTZJREFzWEc0Z0lHWnNhWEJEYjNWdWREb2dNQ3hjYmlBZ2NHeGhlVVJwY21WamRHbHZiam9nTVN4Y2JpQWdhWE5UWTNKMVltSnBibWM2SUdaaGJITmxMRnh1SUNCbGJtUmxaRG9nWm1Gc2MyVXNYRzRnSUdWc1lYQnpaV1E2SURCY2JuMHBPMXh1WEc1bGVIQnZjblFnWkdWbVlYVnNkQ0JVZDJWbGJqdGNiaUpkZlE9PVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvYWN0aW9ucy9Ud2Vlbi5qc1xuICoqIG1vZHVsZSBpZCA9IDVcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF9BY3Rpb24yID0gcmVxdWlyZSgnLi9BY3Rpb24nKTtcblxudmFyIF9BY3Rpb24zID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfQWN0aW9uMik7XG5cbnZhciBfY2FsYyA9IHJlcXVpcmUoJy4uL2luYy9jYWxjJyk7XG5cbnZhciBfdXRpbHMgPSByZXF1aXJlKCcuLi9pbmMvdXRpbHMnKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoIXNlbGYpIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBjYWxsICYmICh0eXBlb2YgY2FsbCA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSA/IGNhbGwgOiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90IFwiICsgdHlwZW9mIHN1cGVyQ2xhc3MpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIGVudW1lcmFibGU6IGZhbHNlLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIDogc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzczsgfVxuXG52YXIgUGh5c2ljcyA9IGZ1bmN0aW9uIChfQWN0aW9uKSB7XG4gIF9pbmhlcml0cyhQaHlzaWNzLCBfQWN0aW9uKTtcblxuICBmdW5jdGlvbiBQaHlzaWNzKCkge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBQaHlzaWNzKTtcblxuICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICBhcmdzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICAgIH1cblxuICAgIHZhciBfdGhpcyA9IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIF9BY3Rpb24uY2FsbC5hcHBseShfQWN0aW9uLCBbdGhpc10uY29uY2F0KGFyZ3MpKSk7XG5cbiAgICBfdGhpcy5pbmFjdGl2ZUZyYW1lcyA9IDA7XG4gICAgX3RoaXMuY2FsY3VsYXRlc1ZlbG9jaXR5ID0gdHJ1ZTtcbiAgICByZXR1cm4gX3RoaXM7XG4gIH1cblxuICBQaHlzaWNzLnByb3RvdHlwZS5vblVwZGF0ZSA9IGZ1bmN0aW9uIG9uVXBkYXRlKHBoeXNpY3MsIGZyYW1lU3RhbXAsIGVsYXBzZWQpIHtcbiAgICB0aGlzLmhhc0NoYW5nZWQgPSBmYWxzZTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5udW1WYWx1ZUtleXM7IGkrKykge1xuICAgICAgdmFyIGtleSA9IHRoaXMudmFsdWVLZXlzW2ldO1xuICAgICAgdmFyIHZhbHVlID0gdGhpcy52YWx1ZXNba2V5XTtcbiAgICAgIHZhciBwcmV2aW91c1ZhbHVlID0gdmFsdWUucHJldjtcblxuICAgICAgLy8gQXBwbHkgYWNjZWxlcmF0aW9uXG4gICAgICB2YWx1ZS52ZWxvY2l0eSArPSAoMCwgX2NhbGMuc3BlZWRQZXJGcmFtZSkodmFsdWUuYWNjZWxlcmF0aW9uLCBlbGFwc2VkKTtcblxuICAgICAgLy8gQXBwbHkgZnJpY3Rpb25cbiAgICAgIHZhbHVlLnZlbG9jaXR5ICo9IE1hdGgucG93KDEgLSB2YWx1ZS5mcmljdGlvbiwgZWxhcHNlZCAvIDEwMCk7XG5cbiAgICAgIC8vIEFwcGx5IHNwcmluZ1xuICAgICAgaWYgKHZhbHVlLnNwcmluZyAmJiAoMCwgX3V0aWxzLmlzTnVtKSh2YWx1ZS50bykpIHtcbiAgICAgICAgdmFyIGRpc3RhbmNlVG9UYXJnZXQgPSB2YWx1ZS50byAtIHZhbHVlLmN1cnJlbnQ7XG4gICAgICAgIHZhbHVlLnZlbG9jaXR5ICs9IGRpc3RhbmNlVG9UYXJnZXQgKiAoMCwgX2NhbGMuc3BlZWRQZXJGcmFtZSkodmFsdWUuc3ByaW5nLCBlbGFwc2VkKTtcbiAgICAgIH1cblxuICAgICAgLy8gQXBwbHkgbGF0ZXN0IHZlbG9jaXR5XG4gICAgICB2YWx1ZS5jdXJyZW50ICs9ICgwLCBfY2FsYy5zcGVlZFBlckZyYW1lKSh2YWx1ZS52ZWxvY2l0eSwgZWxhcHNlZCk7XG5cbiAgICAgIC8vIERldGVjdCBib3VuY2VcbiAgICAgIGlmICh2YWx1ZS5taW4gIT09IHVuZGVmaW5lZCAmJiB2YWx1ZS5jdXJyZW50IDwgdmFsdWUubWluIHx8IHZhbHVlLm1heCAhPT0gdW5kZWZpbmVkICYmIHZhbHVlLmN1cnJlbnQgPiB2YWx1ZS5tYXgpIHtcbiAgICAgICAgdmFsdWUudmVsb2NpdHkgKj0gLXZhbHVlLmJvdW5jZTtcbiAgICAgIH1cblxuICAgICAgLy8gQ2hlY2sgaWYgdmFsdWUgaGFzIGNoYW5nZWRcbiAgICAgIGlmICh2YWx1ZS5jdXJyZW50ICE9PSBwcmV2aW91c1ZhbHVlIHx8IE1hdGguYWJzKHZhbHVlLnZlbG9jaXR5KSA+PSB2YWx1ZS5zdG9wU3BlZWQgfHwgdmFsdWUuc3ByaW5nICYmIHZhbHVlLmN1cnJlbnQgIT09IHZhbHVlLnRvKSB7XG4gICAgICAgIHRoaXMuaGFzQ2hhbmdlZCA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIFBoeXNpY3MucHJvdG90eXBlLm9uRnJhbWVFbmQgPSBmdW5jdGlvbiBvbkZyYW1lRW5kKCkge1xuICAgIGlmICh0aGlzLm1heEluYWN0aXZlRnJhbWVzICE9PSBJbmZpbml0eSkge1xuICAgICAgdGhpcy5pbmFjdGl2ZUZyYW1lcyA9IHRoaXMuaGFzQ2hhbmdlZCA/IDEgOiB0aGlzLmluYWN0aXZlRnJhbWVzICsgMTtcblxuICAgICAgaWYgKHRoaXMuaW5hY3RpdmVGcmFtZXMgPj0gdGhpcy5tYXhJbmFjdGl2ZUZyYW1lcykge1xuICAgICAgICB0aGlzLmNvbXBsZXRlKCk7XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBQaHlzaWNzO1xufShfQWN0aW9uMy5kZWZhdWx0KTtcblxuUGh5c2ljcy5wcm90b3R5cGUuZGVmYXVsdFZhbHVlUHJvcCA9ICd2ZWxvY2l0eSc7XG5QaHlzaWNzLnByb3RvdHlwZS5kZWZhdWx0VmFsdWUgPSBfQWN0aW9uMy5kZWZhdWx0LmV4dGVuZERlZmF1bHRWYWx1ZSh7XG4gIGFjY2VsZXJhdGlvbjogMCwgLy8gW251bWJlcl06IEFjY2VsZXJhdGlvbiB0byBhcHBseSB0byB2YWx1ZSwgaW4gdW5pdHMgcGVyIHNlY29uZFxuICBib3VuY2U6IDAsIC8vIFtudW1iZXJdOiBGYWN0b3IgdG8gbXVsdGlwbHkgdmVsb2NpdHkgYnkgb24gYm91bmNlXG4gIHNwcmluZzogMCwgLy8gW251bWJlcl06IFNwcmluZyBzdHJlbmd0aCBkdXJpbmcgJ3N0cmluZydcbiAgc3RvcFNwZWVkOiAwLjAwMSwgLy8gW251bWJlcl06IFN0b3Agc2ltdWxhdGlvbiB1bmRlciB0aGlzIHNwZWVkXG4gIGZyaWN0aW9uOiAwIC8vIFtudW1iZXJdOiBGcmljdGlvbiB0byBhcHBseSBwZXIgZnJhbWUsIDAtMVxufSk7XG5QaHlzaWNzLnByb3RvdHlwZS5kZWZhdWx0UHJvcHMgPSBfQWN0aW9uMy5kZWZhdWx0LmV4dGVuZERlZmF1bHRQcm9wcyh7XG4gIG1heEluYWN0aXZlRnJhbWVzOiAzXG59KTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gUGh5c2ljcztcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbk55WXk5aFkzUnBiMjV6TDFCb2VYTnBZM011YW5NaVhTd2libUZ0WlhNaU9sdGRMQ0p0WVhCd2FXNW5jeUk2SWpzN096dEJRVUZCT3pzN08wRkJRMEU3TzBGQlEwRTdPenM3T3pzN096czdTVUZGVFN4UE96czdRVUZEU2l4eFFrRkJjVUk3UVVGQlFUczdRVUZCUVN4elEwRkJUaXhKUVVGTk8wRkJRVTRzVlVGQlRUdEJRVUZCT3p0QlFVRkJMR2xFUVVOdVFpd3dRMEZCVXl4SlFVRlVMRVZCUkcxQ096dEJRVVZ1UWl4VlFVRkxMR05CUVV3c1IwRkJjMElzUTBGQmRFSTdRVUZEUVN4VlFVRkxMR3RDUVVGTUxFZEJRVEJDTEVsQlFURkNPMEZCU0cxQ08wRkJTWEJDT3p0dlFrRkZSQ3hSTEhGQ1FVRlRMRThzUlVGQlV5eFZMRVZCUVZrc1R5eEZRVUZUTzBGQlEzSkRMRk5CUVVzc1ZVRkJUQ3hIUVVGclFpeExRVUZzUWpzN1FVRkZRU3hUUVVGTExFbEJRVWtzU1VGQlNTeERRVUZpTEVWQlFXZENMRWxCUVVrc1MwRkJTeXhaUVVGNlFpeEZRVUYxUXl4SFFVRjJReXhGUVVFMFF6dEJRVU14UXl4VlFVRk5MRTFCUVUwc1MwRkJTeXhUUVVGTUxFTkJRV1VzUTBGQlppeERRVUZhTzBGQlEwRXNWVUZCVFN4UlFVRlJMRXRCUVVzc1RVRkJUQ3hEUVVGWkxFZEJRVm9zUTBGQlpEdEJRVU5CTEZWQlFVMHNaMEpCUVdkQ0xFMUJRVTBzU1VGQk5VSTdPenRCUVVkQkxGbEJRVTBzVVVGQlRpeEpRVUZyUWl4NVFrRkJZeXhOUVVGTkxGbEJRWEJDTEVWQlFXdERMRTlCUVd4RExFTkJRV3hDT3pzN1FVRkhRU3haUVVGTkxGRkJRVTRzWVVGQmJVSXNTVUZCU1N4TlFVRk5MRkZCUVRkQ0xFVkJRVEpETEZWQlFWVXNSMEZCY2tRN096dEJRVWRCTEZWQlFVa3NUVUZCVFN4TlFVRk9MRWxCUVdkQ0xHdENRVUZOTEUxQlFVMHNSVUZCV2l4RFFVRndRaXhGUVVGeFF6dEJRVU51UXl4WlFVRk5MRzFDUVVGdFFpeE5RVUZOTEVWQlFVNHNSMEZCVnl4TlFVRk5MRTlCUVRGRE8wRkJRMEVzWTBGQlRTeFJRVUZPTEVsQlFXdENMRzFDUVVGdFFpeDVRa0ZCWXl4TlFVRk5MRTFCUVhCQ0xFVkJRVFJDTEU5QlFUVkNMRU5CUVhKRE8wRkJRMFE3T3p0QlFVZEVMRmxCUVUwc1QwRkJUaXhKUVVGcFFpeDVRa0ZCWXl4TlFVRk5MRkZCUVhCQ0xFVkJRVGhDTEU5QlFUbENMRU5CUVdwQ096czdRVUZIUVN4VlFVRkxMRTFCUVUwc1IwRkJUaXhMUVVGakxGTkJRV1FzU1VGQk1rSXNUVUZCVFN4UFFVRk9MRWRCUVdkQ0xFMUJRVTBzUjBGQmJFUXNTVUZCTWtRc1RVRkJUU3hIUVVGT0xFdEJRV01zVTBGQlpDeEpRVUV5UWl4TlFVRk5MRTlCUVU0c1IwRkJaMElzVFVGQlRTeEhRVUZvU0N4RlFVRnpTRHRCUVVOd1NDeGpRVUZOTEZGQlFVNHNTVUZCYTBJc1EwRkJSU3hOUVVGTkxFMUJRVEZDTzBGQlEwUTdPenRCUVVkRUxGVkJRVWtzVFVGQlRTeFBRVUZPTEV0QlFXdENMR0ZCUVd4Q0xFbEJRVzFETEV0QlFVc3NSMEZCVEN4RFFVRlRMRTFCUVUwc1VVRkJaaXhMUVVFMFFpeE5RVUZOTEZOQlFYSkZMRWxCUVcxR0xFMUJRVTBzVFVGQlRpeEpRVUZuUWl4TlFVRk5MRTlCUVU0c1MwRkJhMElzVFVGQlRTeEZRVUV2U0N4RlFVRnZTVHRCUVVOc1NTeGhRVUZMTEZWQlFVd3NSMEZCYTBJc1NVRkJiRUk3UVVGRFJEdEJRVU5HTzBGQlEwWXNSenM3YjBKQlJVUXNWU3g1UWtGQllUdEJRVU5ZTEZGQlFVa3NTMEZCU3l4cFFrRkJUQ3hMUVVFeVFpeFJRVUV2UWl4RlFVRjVRenRCUVVOMlF5eFhRVUZMTEdOQlFVd3NSMEZCYzBJc1MwRkJTeXhWUVVGTUxFZEJRV3RDTEVOQlFXeENMRWRCUVhOQ0xFdEJRVXNzWTBGQlRDeEhRVUZ6UWl4RFFVRnNSVHM3UVVGRlFTeFZRVUZKTEV0QlFVc3NZMEZCVEN4SlFVRjFRaXhMUVVGTExHbENRVUZvUXl4RlFVRnRSRHRCUVVOcVJDeGhRVUZMTEZGQlFVdzdRVUZEUkR0QlFVTkdPMEZCUTBZc1J6czdPenM3UVVGSFNDeFJRVUZSTEZOQlFWSXNRMEZCYTBJc1owSkJRV3hDTEVkQlFYRkRMRlZCUVhKRE8wRkJRMEVzVVVGQlVTeFRRVUZTTEVOQlFXdENMRmxCUVd4Q0xFZEJRV2xETEdsQ1FVRlBMR3RDUVVGUUxFTkJRVEJDTzBGQlEzcEVMR2RDUVVGakxFTkJSREpETEVVN1FVRkZla1FzVlVGQlVTeERRVVpwUkN4Rk8wRkJSM3BFTEZWQlFWRXNRMEZJYVVRc1JUdEJRVWw2UkN4aFFVRlhMRXRCU2poRExFVTdRVUZMZWtRc1dVRkJWU3hETzBGQlRDdERMRU5CUVRGQ0xFTkJRV3BETzBGQlQwRXNVVUZCVVN4VFFVRlNMRU5CUVd0Q0xGbEJRV3hDTEVkQlFXbERMR2xDUVVGUExHdENRVUZRTEVOQlFUQkNPMEZCUTNwRUxIRkNRVUZ0UWp0QlFVUnpReXhEUVVFeFFpeERRVUZxUXpzN2EwSkJTV1VzVHlJc0ltWnBiR1VpT2lKUWFIbHphV056TG1weklpd2ljMjkxY21ObFVtOXZkQ0k2SWk5VmMyVnljeTl0WVhSMGNHVnljbmt2VTJsMFpYTXZjRzl3Ylc5MGFXOXVJaXdpYzI5MWNtTmxjME52Ym5SbGJuUWlPbHNpYVcxd2IzSjBJRUZqZEdsdmJpQm1jbTl0SUNjdUwwRmpkR2x2YmljN1hHNXBiWEJ2Y25RZ2V5QnpjR1ZsWkZCbGNrWnlZVzFsSUgwZ1puSnZiU0FuTGk0dmFXNWpMMk5oYkdNbk8xeHVhVzF3YjNKMElIc2dhWE5PZFcwZ2ZTQm1jbTl0SUNjdUxpOXBibU12ZFhScGJITW5PMXh1WEc1amJHRnpjeUJRYUhsemFXTnpJR1Y0ZEdWdVpITWdRV04wYVc5dUlIdGNiaUFnWTI5dWMzUnlkV04wYjNJb0xpNHVZWEpuY3lrZ2UxeHVJQ0FnSUhOMWNHVnlLQzR1TG1GeVozTXBPMXh1SUNBZ0lIUm9hWE11YVc1aFkzUnBkbVZHY21GdFpYTWdQU0F3TzF4dUlDQWdJSFJvYVhNdVkyRnNZM1ZzWVhSbGMxWmxiRzlqYVhSNUlEMGdkSEoxWlR0Y2JpQWdmVnh1WEc0Z0lHOXVWWEJrWVhSbEtIQm9lWE5wWTNNc0lHWnlZVzFsVTNSaGJYQXNJR1ZzWVhCelpXUXBJSHRjYmlBZ0lDQjBhR2x6TG1oaGMwTm9ZVzVuWldRZ1BTQm1ZV3h6WlR0Y2JseHVJQ0FnSUdadmNpQW9iR1YwSUdrZ1BTQXdPeUJwSUR3Z2RHaHBjeTV1ZFcxV1lXeDFaVXRsZVhNN0lHa3JLeWtnZTF4dUlDQWdJQ0FnWTI5dWMzUWdhMlY1SUQwZ2RHaHBjeTUyWVd4MVpVdGxlWE5iYVYwN1hHNGdJQ0FnSUNCamIyNXpkQ0IyWVd4MVpTQTlJSFJvYVhNdWRtRnNkV1Z6VzJ0bGVWMDdYRzRnSUNBZ0lDQmpiMjV6ZENCd2NtVjJhVzkxYzFaaGJIVmxJRDBnZG1Gc2RXVXVjSEpsZGp0Y2JseHVJQ0FnSUNBZ0x5OGdRWEJ3YkhrZ1lXTmpaV3hsY21GMGFXOXVYRzRnSUNBZ0lDQjJZV3gxWlM1MlpXeHZZMmwwZVNBclBTQnpjR1ZsWkZCbGNrWnlZVzFsS0haaGJIVmxMbUZqWTJWc1pYSmhkR2x2Yml3Z1pXeGhjSE5sWkNrN1hHNWNiaUFnSUNBZ0lDOHZJRUZ3Y0d4NUlHWnlhV04wYVc5dVhHNGdJQ0FnSUNCMllXeDFaUzUyWld4dlkybDBlU0FxUFNBb01TQXRJSFpoYkhWbExtWnlhV04wYVc5dUtTQXFLaUFvWld4aGNITmxaQ0F2SURFd01DazdYRzVjYmlBZ0lDQWdJQzh2SUVGd2NHeDVJSE53Y21sdVoxeHVJQ0FnSUNBZ2FXWWdLSFpoYkhWbExuTndjbWx1WnlBbUppQnBjMDUxYlNoMllXeDFaUzUwYnlrcElIdGNiaUFnSUNBZ0lDQWdZMjl1YzNRZ1pHbHpkR0Z1WTJWVWIxUmhjbWRsZENBOUlIWmhiSFZsTG5SdklDMGdkbUZzZFdVdVkzVnljbVZ1ZER0Y2JpQWdJQ0FnSUNBZ2RtRnNkV1V1ZG1Wc2IyTnBkSGtnS3owZ1pHbHpkR0Z1WTJWVWIxUmhjbWRsZENBcUlITndaV1ZrVUdWeVJuSmhiV1VvZG1Gc2RXVXVjM0J5YVc1bkxDQmxiR0Z3YzJWa0tUdGNiaUFnSUNBZ0lIMWNibHh1SUNBZ0lDQWdMeThnUVhCd2JIa2diR0YwWlhOMElIWmxiRzlqYVhSNVhHNGdJQ0FnSUNCMllXeDFaUzVqZFhKeVpXNTBJQ3M5SUhOd1pXVmtVR1Z5Um5KaGJXVW9kbUZzZFdVdWRtVnNiMk5wZEhrc0lHVnNZWEJ6WldRcE8xeHVYRzRnSUNBZ0lDQXZMeUJFWlhSbFkzUWdZbTkxYm1ObFhHNGdJQ0FnSUNCcFppQW9LSFpoYkhWbExtMXBiaUFoUFQwZ2RXNWtaV1pwYm1Wa0lDWW1JSFpoYkhWbExtTjFjbkpsYm5RZ1BDQjJZV3gxWlM1dGFXNHBJSHg4SUNoMllXeDFaUzV0WVhnZ0lUMDlJSFZ1WkdWbWFXNWxaQ0FtSmlCMllXeDFaUzVqZFhKeVpXNTBJRDRnZG1Gc2RXVXViV0Y0S1NrZ2UxeHVJQ0FnSUNBZ0lDQjJZV3gxWlM1MlpXeHZZMmwwZVNBcVBTQXRJSFpoYkhWbExtSnZkVzVqWlR0Y2JpQWdJQ0FnSUgxY2JpQWdJQ0FnSUZ4dUlDQWdJQ0FnTHk4Z1EyaGxZMnNnYVdZZ2RtRnNkV1VnYUdGeklHTm9ZVzVuWldSY2JpQWdJQ0FnSUdsbUlDaDJZV3gxWlM1amRYSnlaVzUwSUNFOVBTQndjbVYyYVc5MWMxWmhiSFZsSUh4OElFMWhkR2d1WVdKektIWmhiSFZsTG5abGJHOWphWFI1S1NBK1BTQjJZV3gxWlM1emRHOXdVM0JsWldRZ2ZId2dLSFpoYkhWbExuTndjbWx1WnlBbUppQjJZV3gxWlM1amRYSnlaVzUwSUNFOVBTQjJZV3gxWlM1MGJ5a3BJSHRjYmlBZ0lDQWdJQ0FnZEdocGN5NW9ZWE5EYUdGdVoyVmtJRDBnZEhKMVpUdGNiaUFnSUNBZ0lIMWNiaUFnSUNCOVhHNGdJSDFjYmx4dUlDQnZia1p5WVcxbFJXNWtLQ2tnZTF4dUlDQWdJR2xtSUNoMGFHbHpMbTFoZUVsdVlXTjBhWFpsUm5KaGJXVnpJQ0U5UFNCSmJtWnBibWwwZVNrZ2UxeHVJQ0FnSUNBZ2RHaHBjeTVwYm1GamRHbDJaVVp5WVcxbGN5QTlJSFJvYVhNdWFHRnpRMmhoYm1kbFpDQS9JREVnT2lCMGFHbHpMbWx1WVdOMGFYWmxSbkpoYldWeklDc2dNVHRjYmx4dUlDQWdJQ0FnYVdZZ0tIUm9hWE11YVc1aFkzUnBkbVZHY21GdFpYTWdQajBnZEdocGN5NXRZWGhKYm1GamRHbDJaVVp5WVcxbGN5a2dlMXh1SUNBZ0lDQWdJQ0IwYUdsekxtTnZiWEJzWlhSbEtDazdYRzRnSUNBZ0lDQjlYRzRnSUNBZ2ZWeHVJQ0I5WEc1OVhHNWNibEJvZVhOcFkzTXVjSEp2ZEc5MGVYQmxMbVJsWm1GMWJIUldZV3gxWlZCeWIzQWdQU0FuZG1Wc2IyTnBkSGtuTzF4dVVHaDVjMmxqY3k1d2NtOTBiM1I1Y0dVdVpHVm1ZWFZzZEZaaGJIVmxJRDBnUVdOMGFXOXVMbVY0ZEdWdVpFUmxabUYxYkhSV1lXeDFaU2g3WEc0Z0lHRmpZMlZzWlhKaGRHbHZiam9nTUN3Z0x5OGdXMjUxYldKbGNsMDZJRUZqWTJWc1pYSmhkR2x2YmlCMGJ5QmhjSEJzZVNCMGJ5QjJZV3gxWlN3Z2FXNGdkVzVwZEhNZ2NHVnlJSE5sWTI5dVpGeHVJQ0JpYjNWdVkyVTZJREFzSUM4dklGdHVkVzFpWlhKZE9pQkdZV04wYjNJZ2RHOGdiWFZzZEdsd2JIa2dkbVZzYjJOcGRIa2dZbmtnYjI0Z1ltOTFibU5sWEc0Z0lITndjbWx1WnpvZ01Dd2dMeThnVzI1MWJXSmxjbDA2SUZOd2NtbHVaeUJ6ZEhKbGJtZDBhQ0JrZFhKcGJtY2dKM04wY21sdVp5ZGNiaUFnYzNSdmNGTndaV1ZrT2lBd0xqQXdNU3dnTHk4Z1cyNTFiV0psY2wwNklGTjBiM0FnYzJsdGRXeGhkR2x2YmlCMWJtUmxjaUIwYUdseklITndaV1ZrWEc0Z0lHWnlhV04wYVc5dU9pQXdJQzh2SUZ0dWRXMWlaWEpkT2lCR2NtbGpkR2x2YmlCMGJ5QmhjSEJzZVNCd1pYSWdabkpoYldVc0lEQXRNVnh1ZlNrN1hHNVFhSGx6YVdOekxuQnliM1J2ZEhsd1pTNWtaV1poZFd4MFVISnZjSE1nUFNCQlkzUnBiMjR1WlhoMFpXNWtSR1ZtWVhWc2RGQnliM0J6S0h0Y2JpQWdiV0Y0U1c1aFkzUnBkbVZHY21GdFpYTTZJRE5jYm4wcE8xeHVYRzVsZUhCdmNuUWdaR1ZtWVhWc2RDQlFhSGx6YVdOek8xeHVJbDE5XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9hY3Rpb25zL1BoeXNpY3MuanNcbiAqKiBtb2R1bGUgaWQgPSA2XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07XG5cbnZhciBfQWN0aW9uMiA9IHJlcXVpcmUoJy4vQWN0aW9uJyk7XG5cbnZhciBfQWN0aW9uMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX0FjdGlvbjIpO1xuXG52YXIgX1BvaW50ZXIgPSByZXF1aXJlKCcuLi9pbnB1dC9Qb2ludGVyJyk7XG5cbnZhciBfUG9pbnRlcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9Qb2ludGVyKTtcblxudmFyIF9jYWxjID0gcmVxdWlyZSgnLi4vaW5jL2NhbGMnKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoIXNlbGYpIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBjYWxsICYmICh0eXBlb2YgY2FsbCA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSA/IGNhbGwgOiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90IFwiICsgdHlwZW9mIHN1cGVyQ2xhc3MpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIGVudW1lcmFibGU6IGZhbHNlLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIDogc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzczsgfVxuXG4vKlxuICBTY3JhcGUgeC95IGNvb3JkaW5hdGVzIGZyb20gcHJvdmlkZWQgZXZlbnRcblxuICBAcGFyYW0gW2V2ZW50XVxuICBAcmV0dXJuIFtvYmplY3RdXG4qL1xudmFyIG1vdXNlRXZlbnRUb1BvaW50ID0gZnVuY3Rpb24gKGUpIHtcbiAgcmV0dXJuIHtcbiAgICB4OiBlLnBhZ2VYLFxuICAgIHk6IGUucGFnZVlcbiAgfTtcbn07XG5cbnZhciB0b3VjaEV2ZW50VG9Qb2ludCA9IGZ1bmN0aW9uIChfcmVmKSB7XG4gIHZhciBjaGFuZ2VkVG91Y2hlcyA9IF9yZWYuY2hhbmdlZFRvdWNoZXM7XG4gIHJldHVybiB7XG4gICAgeDogY2hhbmdlZFRvdWNoZXNbMF0uY2xpZW50WCxcbiAgICB5OiBjaGFuZ2VkVG91Y2hlc1swXS5jbGllbnRZXG4gIH07XG59O1xuXG52YXIgY3JlYXRlUG9pbnRlciA9IGZ1bmN0aW9uIChlKSB7XG4gIHJldHVybiBlLnRvdWNoZXMgPyBuZXcgX1BvaW50ZXIyLmRlZmF1bHQodG91Y2hFdmVudFRvUG9pbnQoZSksICd0b3VjaG1vdmUnLCB0b3VjaEV2ZW50VG9Qb2ludCkgOiBuZXcgX1BvaW50ZXIyLmRlZmF1bHQobW91c2VFdmVudFRvUG9pbnQoZSksICdtb3VzZW1vdmUnLCBtb3VzZUV2ZW50VG9Qb2ludCk7XG59O1xuXG52YXIgZ2V0QWN0dWFsRXZlbnQgPSBmdW5jdGlvbiAoZSkge1xuICByZXR1cm4gZS5vcmlnaW5hbEV2ZW50IHx8IGU7XG59O1xuXG52YXIgVHJhY2sgPSBmdW5jdGlvbiAoX0FjdGlvbikge1xuICBfaW5oZXJpdHMoVHJhY2ssIF9BY3Rpb24pO1xuXG4gIGZ1bmN0aW9uIFRyYWNrKCkge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBUcmFjayk7XG5cbiAgICByZXR1cm4gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgX0FjdGlvbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpKTtcbiAgfVxuXG4gIFRyYWNrLnByb3RvdHlwZS5zdGFydCA9IGZ1bmN0aW9uIHN0YXJ0KGlucHV0KSB7XG4gICAgX0FjdGlvbi5wcm90b3R5cGUuc3RhcnQuY2FsbCh0aGlzKTtcblxuICAgIGlmIChpbnB1dCkge1xuICAgICAgdGhpcy5pbnB1dCA9IGlucHV0LnN0YXRlID8gaW5wdXQgOiBjcmVhdGVQb2ludGVyKGdldEFjdHVhbEV2ZW50KGlucHV0KSk7XG4gICAgfVxuXG4gICAgdGhpcy5pbnB1dE9mZnNldCA9IHt9O1xuICAgIHRoaXMuaW5wdXRPcmlnaW4gPSBfZXh0ZW5kcyh7fSwgdGhpcy5pbnB1dC5zdGF0ZSk7XG4gICAgdGhpcy5pbnB1dC5zdGFydCgpO1xuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgVHJhY2sucHJvdG90eXBlLnN0b3AgPSBmdW5jdGlvbiBzdG9wKCkge1xuICAgIF9BY3Rpb24ucHJvdG90eXBlLnN0b3AuY2FsbCh0aGlzKTtcbiAgICB0aGlzLmlucHV0LnN0b3AoKTtcblxuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIFRyYWNrLnByb3RvdHlwZS5vblVwZGF0ZSA9IGZ1bmN0aW9uIG9uVXBkYXRlKHRyYWNrLCBmcmFtZVN0YW1wLCBlbGFwc2VkKSB7XG4gICAgdGhpcy5pbnB1dE9mZnNldCA9ICgwLCBfY2FsYy5vZmZzZXQpKHRoaXMuaW5wdXRPcmlnaW4sIHRoaXMuaW5wdXQuc3RhdGUpO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLm51bVZhbHVlS2V5czsgaSsrKSB7XG4gICAgICB2YXIga2V5ID0gdGhpcy52YWx1ZUtleXNbaV07XG5cbiAgICAgIGlmICh0aGlzLmlucHV0T2Zmc2V0Lmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgdmFyIHZhbHVlID0gdGhpcy52YWx1ZXNba2V5XTtcbiAgICAgICAgdmFyIGlucHV0UHJvcCA9IHZhbHVlLmhhc093blByb3BlcnR5KCd3YXRjaCcpID8gdmFsdWUud2F0Y2ggOiBrZXk7XG5cbiAgICAgICAgaWYgKHZhbHVlLmRpcmVjdCkge1xuICAgICAgICAgIHZhbHVlLmN1cnJlbnQgPSB0aGlzLmlucHV0LnN0YXRlW2lucHV0UHJvcF07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdmFsdWUuY3VycmVudCA9IHZhbHVlLmZyb20gKyB0aGlzLmlucHV0T2Zmc2V0W2lucHV0UHJvcF07XG4gICAgICAgIH1cblxuICAgICAgICAvLyBTbW9vdGggdmFsdWUgaWYgd2UgaGF2ZSBzbW9vdGhpbmdcbiAgICAgICAgaWYgKHZhbHVlLnNtb290aCkge1xuICAgICAgICAgIHZhbHVlLmN1cnJlbnQgPSAoMCwgX2NhbGMuc21vb3RoKSh2YWx1ZS5jdXJyZW50LCB2YWx1ZS5wcmV2LCBlbGFwc2VkLCB2YWx1ZS5zbW9vdGgpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBUcmFjaztcbn0oX0FjdGlvbjMuZGVmYXVsdCk7XG5cblRyYWNrLnByb3RvdHlwZS5kZWZhdWx0VmFsdWVQcm9wID0gJ3dhdGNoJztcblRyYWNrLnByb3RvdHlwZS5kZWZhdWx0VmFsdWUgPSBfQWN0aW9uMy5kZWZhdWx0LmV4dGVuZERlZmF1bHRWYWx1ZSh7XG4gIGRpcmVjdDogZmFsc2UsXG4gIGZyb206IDBcbn0pO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBUcmFjaztcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbk55WXk5aFkzUnBiMjV6TDFSeVlXTnJMbXB6SWwwc0ltNWhiV1Z6SWpwYlhTd2liV0Z3Y0dsdVozTWlPaUk3T3pzN096dEJRVUZCT3pzN08wRkJRMEU3T3pzN1FVRkRRVHM3T3pzN096czdPenM3T3pzN096dEJRVkZCTEVsQlFVMHNiMEpCUVc5Q0xGVkJRVU1zUTBGQlJEdEJRVUZCTEZOQlFWRTdRVUZEYUVNc1QwRkJSeXhGUVVGRkxFdEJSREpDTzBGQlJXaERMRTlCUVVjc1JVRkJSVHRCUVVZeVFpeEhRVUZTTzBGQlFVRXNRMEZCTVVJN08wRkJTMEVzU1VGQlRTeHZRa0ZCYjBJN1FVRkJRU3hOUVVGSExHTkJRVWdzVVVGQlJ5eGpRVUZJTzBGQlFVRXNVMEZCZVVJN1FVRkRha1FzVDBGQlJ5eGxRVUZsTEVOQlFXWXNSVUZCYTBJc1QwRkVORUk3UVVGRmFrUXNUMEZCUnl4bFFVRmxMRU5CUVdZc1JVRkJhMEk3UVVGR05FSXNSMEZCZWtJN1FVRkJRU3hEUVVFeFFqczdRVUZMUVN4SlFVRk5MR2RDUVVGblFpeFZRVUZETEVOQlFVUTdRVUZCUVN4VFFVRlBMRVZCUVVVc1QwRkJSaXhIUVVNelFpeHpRa0ZCV1N4clFrRkJhMElzUTBGQmJFSXNRMEZCV2l4RlFVRnJReXhYUVVGc1F5eEZRVUVyUXl4cFFrRkJMME1zUTBGRU1rSXNSMEZGTTBJc2MwSkJRVmtzYTBKQlFXdENMRU5CUVd4Q0xFTkJRVm9zUlVGQmEwTXNWMEZCYkVNc1JVRkJLME1zYVVKQlFTOURMRU5CUm05Q08wRkJRVUVzUTBGQmRFSTdPMEZCU1VFc1NVRkJUU3hwUWtGQmFVSXNWVUZCUXl4RFFVRkVPMEZCUVVFc1UwRkJUeXhGUVVGRkxHRkJRVVlzU1VGQmJVSXNRMEZCTVVJN1FVRkJRU3hEUVVGMlFqczdTVUZGVFN4TE96czdPenM3T3pzN2EwSkJRMG9zU3l4clFrRkJUU3hMTEVWQlFVODdRVUZEV0N4elFrRkJUU3hMUVVGT096dEJRVVZCTEZGQlFVa3NTMEZCU2l4RlFVRlhPMEZCUTFRc1YwRkJTeXhMUVVGTUxFZEJRV0VzVFVGQlRTeExRVUZPTEVkQlFXTXNTMEZCWkN4SFFVRnpRaXhqUVVGakxHVkJRV1VzUzBGQlppeERRVUZrTEVOQlFXNURPMEZCUTBRN08wRkJSVVFzVTBGQlN5eFhRVUZNTEVkQlFXMUNMRVZCUVc1Q08wRkJRMEVzVTBGQlN5eFhRVUZNTEdkQ1FVRjNRaXhMUVVGTExFdEJRVXdzUTBGQlZ5eExRVUZ1UXp0QlFVTkJMRk5CUVVzc1MwRkJUQ3hEUVVGWExFdEJRVmc3TzBGQlJVRXNWMEZCVHl4SlFVRlFPMEZCUTBRc1J6czdhMEpCUlVRc1NTeHRRa0ZCVHp0QlFVTk1MSE5DUVVGTkxFbEJRVTQ3UVVGRFFTeFRRVUZMTEV0QlFVd3NRMEZCVnl4SlFVRllPenRCUVVWQkxGZEJRVThzU1VGQlVEdEJRVU5FTEVjN08ydENRVVZFTEZFc2NVSkJRVk1zU3l4RlFVRlBMRlVzUlVGQldTeFBMRVZCUVZNN1FVRkRia01zVTBGQlN5eFhRVUZNTEVkQlFXMUNMR3RDUVVGUExFdEJRVXNzVjBGQldpeEZRVUY1UWl4TFFVRkxMRXRCUVV3c1EwRkJWeXhMUVVGd1F5eERRVUZ1UWpzN1FVRkZRU3hUUVVGTExFbEJRVWtzU1VGQlNTeERRVUZpTEVWQlFXZENMRWxCUVVrc1MwRkJTeXhaUVVGNlFpeEZRVUYxUXl4SFFVRjJReXhGUVVFMFF6dEJRVU14UXl4VlFVRk5MRTFCUVUwc1MwRkJTeXhUUVVGTUxFTkJRV1VzUTBGQlppeERRVUZhT3p0QlFVVkJMRlZCUVVrc1MwRkJTeXhYUVVGTUxFTkJRV2xDTEdOQlFXcENMRU5CUVdkRExFZEJRV2hETEVOQlFVb3NSVUZCTUVNN1FVRkRlRU1zV1VGQlRTeFJRVUZSTEV0QlFVc3NUVUZCVEN4RFFVRlpMRWRCUVZvc1EwRkJaRHRCUVVOQkxGbEJRVTBzV1VGQldTeE5RVUZOTEdOQlFVNHNRMEZCY1VJc1QwRkJja0lzU1VGQlowTXNUVUZCVFN4TFFVRjBReXhIUVVFNFF5eEhRVUZvUlRzN1FVRkZRU3haUVVGSkxFMUJRVTBzVFVGQlZpeEZRVUZyUWp0QlFVTm9RaXhuUWtGQlRTeFBRVUZPTEVkQlFXZENMRXRCUVVzc1MwRkJUQ3hEUVVGWExFdEJRVmdzUTBGQmFVSXNVMEZCYWtJc1EwRkJhRUk3UVVGRFJDeFRRVVpFTEUxQlJVODdRVUZEVEN4blFrRkJUU3hQUVVGT0xFZEJRV2RDTEUxQlFVMHNTVUZCVGl4SFFVRmhMRXRCUVVzc1YwRkJUQ3hEUVVGcFFpeFRRVUZxUWl4RFFVRTNRanRCUVVORU96czdRVUZIUkN4WlFVRkpMRTFCUVUwc1RVRkJWaXhGUVVGclFqdEJRVU5vUWl4blFrRkJUU3hQUVVGT0xFZEJRV2RDTEd0Q1FVRlBMRTFCUVUwc1QwRkJZaXhGUVVGelFpeE5RVUZOTEVsQlFUVkNMRVZCUVd0RExFOUJRV3hETEVWQlFUSkRMRTFCUVUwc1RVRkJha1FzUTBGQmFFSTdRVUZEUkR0QlFVTkdPMEZCUTBZN1FVRkRSaXhIT3pzN096dEJRVWRJTEUxQlFVMHNVMEZCVGl4RFFVRm5RaXhuUWtGQmFFSXNSMEZCYlVNc1QwRkJia003UVVGRFFTeE5RVUZOTEZOQlFVNHNRMEZCWjBJc1dVRkJhRUlzUjBGQkswSXNhVUpCUVU4c2EwSkJRVkFzUTBGQk1FSTdRVUZEZGtRc1ZVRkJVU3hMUVVRclF6dEJRVVYyUkN4UlFVRk5PMEZCUm1sRUxFTkJRVEZDTEVOQlFTOUNPenRyUWtGTFpTeExJaXdpWm1sc1pTSTZJbFJ5WVdOckxtcHpJaXdpYzI5MWNtTmxVbTl2ZENJNklpOVZjMlZ5Y3k5dFlYUjBjR1Z5Y25rdlUybDBaWE12Y0c5d2JXOTBhVzl1SWl3aWMyOTFjbU5sYzBOdmJuUmxiblFpT2xzaWFXMXdiM0owSUVGamRHbHZiaUJtY205dElDY3VMMEZqZEdsdmJpYzdYRzVwYlhCdmNuUWdVRzlwYm5SbGNpQm1jbTl0SUNjdUxpOXBibkIxZEM5UWIybHVkR1Z5Snp0Y2JtbHRjRzl5ZENCN0lITnRiMjkwYUN3Z2IyWm1jMlYwSUgwZ1puSnZiU0FuTGk0dmFXNWpMMk5oYkdNbk8xeHVYRzR2S2x4dUlDQlRZM0poY0dVZ2VDOTVJR052YjNKa2FXNWhkR1Z6SUdaeWIyMGdjSEp2ZG1sa1pXUWdaWFpsYm5SY2JseHVJQ0JBY0dGeVlXMGdXMlYyWlc1MFhWeHVJQ0JBY21WMGRYSnVJRnR2WW1wbFkzUmRYRzRxTDF4dVkyOXVjM1FnYlc5MWMyVkZkbVZ1ZEZSdlVHOXBiblFnUFNBb1pTa2dQVDRnS0h0Y2JpQWdlRG9nWlM1d1lXZGxXQ3hjYmlBZ2VUb2daUzV3WVdkbFdWeHVmU2s3WEc1Y2JtTnZibk4wSUhSdmRXTm9SWFpsYm5SVWIxQnZhVzUwSUQwZ0tIc2dZMmhoYm1kbFpGUnZkV05vWlhNZ2ZTa2dQVDRnS0h0Y2JpQWdlRG9nWTJoaGJtZGxaRlJ2ZFdOb1pYTmJNRjB1WTJ4cFpXNTBXQ3hjYmlBZ2VUb2dZMmhoYm1kbFpGUnZkV05vWlhOYk1GMHVZMnhwWlc1MFdWeHVmU2s3WEc1Y2JtTnZibk4wSUdOeVpXRjBaVkJ2YVc1MFpYSWdQU0FvWlNrZ1BUNGdaUzUwYjNWamFHVnpJRDljYmlBZ2JtVjNJRkJ2YVc1MFpYSW9kRzkxWTJoRmRtVnVkRlJ2VUc5cGJuUW9aU2tzSUNkMGIzVmphRzF2ZG1VbkxDQjBiM1ZqYUVWMlpXNTBWRzlRYjJsdWRDa2dPaUJjYmlBZ2JtVjNJRkJ2YVc1MFpYSW9iVzkxYzJWRmRtVnVkRlJ2VUc5cGJuUW9aU2tzSUNkdGIzVnpaVzF2ZG1VbkxDQnRiM1Z6WlVWMlpXNTBWRzlRYjJsdWRDazdYRzVjYm1OdmJuTjBJR2RsZEVGamRIVmhiRVYyWlc1MElEMGdLR1VwSUQwK0lHVXViM0pwWjJsdVlXeEZkbVZ1ZENCOGZDQmxPMXh1WEc1amJHRnpjeUJVY21GamF5QmxlSFJsYm1SeklFRmpkR2x2YmlCN1hHNGdJSE4wWVhKMEtHbHVjSFYwS1NCN1hHNGdJQ0FnYzNWd1pYSXVjM1JoY25Rb0tUdGNibHh1SUNBZ0lHbG1JQ2hwYm5CMWRDa2dlMXh1SUNBZ0lDQWdkR2hwY3k1cGJuQjFkQ0E5SUdsdWNIVjBMbk4wWVhSbElEOGdhVzV3ZFhRZ09pQmpjbVZoZEdWUWIybHVkR1Z5S0dkbGRFRmpkSFZoYkVWMlpXNTBLR2x1Y0hWMEtTazdYRzRnSUNBZ2ZWeHVYRzRnSUNBZ2RHaHBjeTVwYm5CMWRFOW1abk5sZENBOUlIdDlPMXh1SUNBZ0lIUm9hWE11YVc1d2RYUlBjbWxuYVc0Z1BTQjdJQzR1TG5Sb2FYTXVhVzV3ZFhRdWMzUmhkR1VnZlR0Y2JpQWdJQ0IwYUdsekxtbHVjSFYwTG5OMFlYSjBLQ2s3WEc1Y2JpQWdJQ0J5WlhSMWNtNGdkR2hwY3p0Y2JpQWdmVnh1WEc0Z0lITjBiM0FvS1NCN1hHNGdJQ0FnYzNWd1pYSXVjM1J2Y0NncE8xeHVJQ0FnSUhSb2FYTXVhVzV3ZFhRdWMzUnZjQ2dwTzF4dVhHNGdJQ0FnY21WMGRYSnVJSFJvYVhNN1hHNGdJSDFjYmx4dUlDQnZibFZ3WkdGMFpTaDBjbUZqYXl3Z1puSmhiV1ZUZEdGdGNDd2daV3hoY0hObFpDa2dlMXh1SUNBZ0lIUm9hWE11YVc1d2RYUlBabVp6WlhRZ1BTQnZabVp6WlhRb2RHaHBjeTVwYm5CMWRFOXlhV2RwYml3Z2RHaHBjeTVwYm5CMWRDNXpkR0YwWlNrN1hHNWNiaUFnSUNCbWIzSWdLR3hsZENCcElEMGdNRHNnYVNBOElIUm9hWE11Ym5WdFZtRnNkV1ZMWlhsek95QnBLeXNwSUh0Y2JpQWdJQ0FnSUdOdmJuTjBJR3RsZVNBOUlIUm9hWE11ZG1Gc2RXVkxaWGx6VzJsZE8xeHVYRzRnSUNBZ0lDQnBaaUFvZEdocGN5NXBibkIxZEU5bVpuTmxkQzVvWVhOUGQyNVFjbTl3WlhKMGVTaHJaWGtwS1NCN1hHNGdJQ0FnSUNBZ0lHTnZibk4wSUhaaGJIVmxJRDBnZEdocGN5NTJZV3gxWlhOYmEyVjVYVHRjYmlBZ0lDQWdJQ0FnWTI5dWMzUWdhVzV3ZFhSUWNtOXdJRDBnZG1Gc2RXVXVhR0Z6VDNkdVVISnZjR1Z5ZEhrb0ozZGhkR05vSnlrZ1B5QjJZV3gxWlM1M1lYUmphQ0E2SUd0bGVUdGNibHh1SUNBZ0lDQWdJQ0JwWmlBb2RtRnNkV1V1WkdseVpXTjBLU0I3WEc0Z0lDQWdJQ0FnSUNBZ2RtRnNkV1V1WTNWeWNtVnVkQ0E5SUhSb2FYTXVhVzV3ZFhRdWMzUmhkR1ZiYVc1d2RYUlFjbTl3WFR0Y2JpQWdJQ0FnSUNBZ2ZTQmxiSE5sSUh0Y2JpQWdJQ0FnSUNBZ0lDQjJZV3gxWlM1amRYSnlaVzUwSUQwZ2RtRnNkV1V1Wm5KdmJTQXJJSFJvYVhNdWFXNXdkWFJQWm1aelpYUmJhVzV3ZFhSUWNtOXdYVHRjYmlBZ0lDQWdJQ0FnZlZ4dVhHNGdJQ0FnSUNBZ0lDOHZJRk50YjI5MGFDQjJZV3gxWlNCcFppQjNaU0JvWVhabElITnRiMjkwYUdsdVoxeHVJQ0FnSUNBZ0lDQnBaaUFvZG1Gc2RXVXVjMjF2YjNSb0tTQjdYRzRnSUNBZ0lDQWdJQ0FnZG1Gc2RXVXVZM1Z5Y21WdWRDQTlJSE50YjI5MGFDaDJZV3gxWlM1amRYSnlaVzUwTENCMllXeDFaUzV3Y21WMkxDQmxiR0Z3YzJWa0xDQjJZV3gxWlM1emJXOXZkR2dwTzF4dUlDQWdJQ0FnSUNCOVhHNGdJQ0FnSUNCOVhHNGdJQ0FnZlZ4dUlDQjlYRzU5WEc1Y2JsUnlZV05yTG5CeWIzUnZkSGx3WlM1a1pXWmhkV3gwVm1Gc2RXVlFjbTl3SUQwZ0ozZGhkR05vSnp0Y2JsUnlZV05yTG5CeWIzUnZkSGx3WlM1a1pXWmhkV3gwVm1Gc2RXVWdQU0JCWTNScGIyNHVaWGgwWlc1a1JHVm1ZWFZzZEZaaGJIVmxLSHRjYmlBZ1pHbHlaV04wT2lCbVlXeHpaU3hjYmlBZ1puSnZiVG9nTUZ4dWZTazdYRzVjYm1WNGNHOXlkQ0JrWldaaGRXeDBJRlJ5WVdOck8xeHVJbDE5XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9hY3Rpb25zL1RyYWNrLmpzXG4gKiogbW9kdWxlIGlkID0gN1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9O1xuXG52YXIgX2xvb3AgPSByZXF1aXJlKCcuL2xvb3AnKTtcblxudmFyIGxvb3AgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChfbG9vcCk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKG9iaikgeyBpZiAob2JqICYmIG9iai5fX2VzTW9kdWxlKSB7IHJldHVybiBvYmo7IH0gZWxzZSB7IHZhciBuZXdPYmogPSB7fTsgaWYgKG9iaiAhPSBudWxsKSB7IGZvciAodmFyIGtleSBpbiBvYmopIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGtleSkpIG5ld09ialtrZXldID0gb2JqW2tleV07IH0gfSBuZXdPYmouZGVmYXVsdCA9IG9iajsgcmV0dXJuIG5ld09iajsgfSB9XG5cbmZ1bmN0aW9uIF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhvYmosIGtleXMpIHsgdmFyIHRhcmdldCA9IHt9OyBmb3IgKHZhciBpIGluIG9iaikgeyBpZiAoa2V5cy5pbmRleE9mKGkpID49IDApIGNvbnRpbnVlOyBpZiAoIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGkpKSBjb250aW51ZTsgdGFyZ2V0W2ldID0gb2JqW2ldOyB9IHJldHVybiB0YXJnZXQ7IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH0gLypcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEJhc2UgVGFzayBjbGFzcyBmb3IgY3JlYXRpbmcgYSB0YXNrIG9uIHRoZSBtYWluIHJlbmRlciBsb29wLlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICovXG5cblxuZnVuY3Rpb24gY2xlYW51cCgpIHtcbiAgdGhpcy5vbkNsZWFudXAgPSB1bmRlZmluZWQ7XG4gIGxvb3AuZGVhY3RpdmF0ZSh0aGlzLmlkKTtcbn1cblxuZnVuY3Rpb24gYWN0aXZhdGUoKSB7XG4gIHRoaXMub25DbGVhbnVwID0gY2xlYW51cDtcbn1cblxudmFyIFRhc2sgPSBmdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIFRhc2socHJvcHMpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgVGFzayk7XG5cbiAgICB0aGlzLmlkID0gbG9vcC5nZXRUYXNrSWQoKTtcbiAgICB0aGlzLmlzQWN0aXZlID0gZmFsc2U7XG5cbiAgICBpZiAodGhpcy5kZWZhdWx0UHJvcHMpIHtcbiAgICAgIGZvciAodmFyIGtleSBpbiB0aGlzLmRlZmF1bHRQcm9wcykge1xuICAgICAgICBpZiAodGhpcy5kZWZhdWx0UHJvcHMuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgIHRoaXNba2V5XSA9IHRoaXMuZGVmYXVsdFByb3BzW2tleV07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLnNldChwcm9wcyk7XG4gIH1cblxuICBUYXNrLnByb3RvdHlwZS5zZXQgPSBmdW5jdGlvbiBzZXQocHJvcHMpIHtcbiAgICBmb3IgKHZhciBrZXkgaW4gcHJvcHMpIHtcbiAgICAgIGlmIChwcm9wcy5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgIHRoaXNba2V5XSA9IHByb3BzW2tleV07XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgVGFzay5wcm90b3R5cGUuc3RhcnQgPSBmdW5jdGlvbiBzdGFydCgpIHtcbiAgICBsb29wLmFjdGl2YXRlKHRoaXMuaWQsIHRoaXMpO1xuXG4gICAgdGhpcy5vbkFjdGl2YXRlTG9vcCA9IHRoaXMub25DbGVhbnVwID0gdW5kZWZpbmVkO1xuICAgIHRoaXMuaXNDb21wbGV0ZSA9IGZhbHNlO1xuXG4gICAgaWYgKHRoaXMub25TdGFydCkge1xuICAgICAgdGhpcy5vblN0YXJ0KHRoaXMpO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIFRhc2sucHJvdG90eXBlLnN0b3AgPSBmdW5jdGlvbiBzdG9wKCkge1xuICAgIGxvb3AuZGVhY3RpdmF0ZSh0aGlzLmlkKTtcblxuICAgIGlmICh0aGlzLm9uU3RvcCkge1xuICAgICAgdGhpcy5vblN0b3AodGhpcyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgVGFzay5wcm90b3R5cGUub25jZSA9IGZ1bmN0aW9uIG9uY2UoKSB7XG4gICAgbG9vcC5hY3RpdmF0ZSh0aGlzLmlkLCB0aGlzKTtcbiAgICB0aGlzLm9uQ2xlYW51cCA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLm9uQWN0aXZhdGVMb29wID0gYWN0aXZhdGU7XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICBUYXNrLnByb3RvdHlwZS5jb21wbGV0ZSA9IGZ1bmN0aW9uIGNvbXBsZXRlKCkge1xuICAgIHRoaXMuc3RvcCgpO1xuXG4gICAgaWYgKHRoaXMub25Db21wbGV0ZSkge1xuICAgICAgdGhpcy5vbkNvbXBsZXRlKHRoaXMpO1xuICAgIH1cbiAgfTtcblxuICAvKlxuICAgICMgRXh0ZW5kIHRoaXMgUHJvY2VzcyB3aXRoIG5ldyBwcm9wZXJ0aWVzXG4gICAgIyMgUmV0dXJucyBuZXcgaW5zdGFuY2Ugb2YgdGhpcyBQcm9jZXNzJ3MgYHByb3RvdHlwZWAgd2l0aCBleGlzdGluZyBhbmQgbmV3IHByb3BlcnRpZXNcbiAgICAgQHBhcmFtIFtvYmplY3RdIChvcHRpb25hbClcbiAgICBAcmV0dXJuIFtQcm9jZXNzXVxuICAqL1xuXG5cbiAgVGFzay5wcm90b3R5cGUuaW5oZXJpdCA9IGZ1bmN0aW9uIGluaGVyaXQocHJvcHMpIHtcbiAgICB2YXIgaWQgPSB0aGlzLmlkO1xuXG4gICAgdmFyIGluaGVyaXRlZFByb3BzID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKHRoaXMsIFsnaWQnXSk7XG5cbiAgICByZXR1cm4gbmV3IHRoaXMuY29uc3RydWN0b3IoX2V4dGVuZHMoe30sIGluaGVyaXRlZFByb3BzLCBwcm9wcykpO1xuICB9O1xuXG4gIHJldHVybiBUYXNrO1xufSgpO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBUYXNrO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluTnlZeTkwWVhOckwxUmhjMnN1YW5NaVhTd2libUZ0WlhNaU9sdGRMQ0p0WVhCd2FXNW5jeUk2SWpzN096czdPMEZCUjBFN08wbEJRVmtzU1RzN096czdPenM3T3pzN1FVRkZXaXhUUVVGVExFOUJRVlFzUjBGQmJVSTdRVUZEYWtJc1QwRkJTeXhUUVVGTUxFZEJRV2xDTEZOQlFXcENPMEZCUTBFc1QwRkJTeXhWUVVGTUxFTkJRV2RDTEV0QlFVc3NSVUZCY2tJN1FVRkRSRHM3UVVGRlJDeFRRVUZUTEZGQlFWUXNSMEZCYjBJN1FVRkRiRUlzVDBGQlN5eFRRVUZNTEVkQlFXbENMRTlCUVdwQ08wRkJRMFE3TzBsQlJXOUNMRWs3UVVGRGJrSXNaMEpCUVZrc1MwRkJXaXhGUVVGdFFqdEJRVUZCT3p0QlFVTnFRaXhUUVVGTExFVkJRVXdzUjBGQlZTeExRVUZMTEZOQlFVd3NSVUZCVmp0QlFVTkJMRk5CUVVzc1VVRkJUQ3hIUVVGblFpeExRVUZvUWpzN1FVRkZRU3hSUVVGSkxFdEJRVXNzV1VGQlZDeEZRVUYxUWp0QlFVTnlRaXhYUVVGTExFbEJRVWtzUjBGQlZDeEpRVUZuUWl4TFFVRkxMRmxCUVhKQ0xFVkJRVzFETzBGQlEycERMRmxCUVVrc1MwRkJTeXhaUVVGTUxFTkJRV3RDTEdOQlFXeENMRU5CUVdsRExFZEJRV3BETEVOQlFVb3NSVUZCTWtNN1FVRkRla01zWlVGQlN5eEhRVUZNTEVsQlFWa3NTMEZCU3l4WlFVRk1MRU5CUVd0Q0xFZEJRV3hDTEVOQlFWbzdRVUZEUkR0QlFVTkdPMEZCUTBZN08wRkJSVVFzVTBGQlN5eEhRVUZNTEVOQlFWTXNTMEZCVkR0QlFVTkVPenRwUWtGRlJDeEhMR2RDUVVGSkxFc3NSVUZCVHp0QlFVTlVMRk5CUVVzc1NVRkJTU3hIUVVGVUxFbEJRV2RDTEV0QlFXaENMRVZCUVhWQ08wRkJRM0pDTEZWQlFVa3NUVUZCVFN4alFVRk9MRU5CUVhGQ0xFZEJRWEpDTEVOQlFVb3NSVUZCSzBJN1FVRkROMElzWVVGQlN5eEhRVUZNTEVsQlFWa3NUVUZCVFN4SFFVRk9MRU5CUVZvN1FVRkRSRHRCUVVOR096dEJRVVZFTEZkQlFVOHNTVUZCVUR0QlFVTkVMRWM3TzJsQ1FVVkVMRXNzYjBKQlFWRTdRVUZEVGl4VFFVRkxMRkZCUVV3c1EwRkJZeXhMUVVGTExFVkJRVzVDTEVWQlFYVkNMRWxCUVhaQ096dEJRVVZCTEZOQlFVc3NZMEZCVEN4SFFVRnpRaXhMUVVGTExGTkJRVXdzUjBGQmFVSXNVMEZCZGtNN1FVRkRRU3hUUVVGTExGVkJRVXdzUjBGQmEwSXNTMEZCYkVJN08wRkJSVUVzVVVGQlNTeExRVUZMTEU5QlFWUXNSVUZCYTBJN1FVRkRhRUlzVjBGQlN5eFBRVUZNTEVOQlFXRXNTVUZCWWp0QlFVTkVPenRCUVVWRUxGZEJRVThzU1VGQlVEdEJRVU5FTEVjN08ybENRVVZFTEVrc2JVSkJRVTg3UVVGRFRDeFRRVUZMTEZWQlFVd3NRMEZCWjBJc1MwRkJTeXhGUVVGeVFqczdRVUZGUVN4UlFVRkpMRXRCUVVzc1RVRkJWQ3hGUVVGcFFqdEJRVU5tTEZkQlFVc3NUVUZCVEN4RFFVRlpMRWxCUVZvN1FVRkRSRHM3UVVGRlJDeFhRVUZQTEVsQlFWQTdRVUZEUkN4SE96dHBRa0ZGUkN4SkxHMUNRVUZQTzBGQlEwd3NVMEZCU3l4UlFVRk1MRU5CUVdNc1MwRkJTeXhGUVVGdVFpeEZRVUYxUWl4SlFVRjJRanRCUVVOQkxGTkJRVXNzVTBGQlRDeEhRVUZwUWl4VFFVRnFRanRCUVVOQkxGTkJRVXNzWTBGQlRDeEhRVUZ6UWl4UlFVRjBRanM3UVVGRlFTeFhRVUZQTEVsQlFWQTdRVUZEUkN4SE96dHBRa0ZGUkN4UkxIVkNRVUZYTzBGQlExUXNVMEZCU3l4SlFVRk1PenRCUVVWQkxGRkJRVWtzUzBGQlN5eFZRVUZVTEVWQlFYRkNPMEZCUTI1Q0xGZEJRVXNzVlVGQlRDeERRVUZuUWl4SlFVRm9RanRCUVVORU8wRkJRMFlzUnpzN096czdPenM3T3p0cFFrRlRSQ3hQTEc5Q1FVRlJMRXNzUlVGQlR6dEJRVUZCTEZGQlEwd3NSVUZFU3l4SFFVTnhRaXhKUVVSeVFpeERRVU5NTEVWQlJFczdPMEZCUVVFc1VVRkRSU3hqUVVSR0xEUkNRVU54UWl4SlFVUnlRanM3UVVGRllpeFhRVUZQTEVsQlFVa3NTMEZCU3l4WFFVRlVMR05CUVRCQ0xHTkJRVEZDTEVWQlFUWkRMRXRCUVRkRExFVkJRVkE3UVVGRFJDeEhPenM3T3p0clFrRXpSV3RDTEVraUxDSm1hV3hsSWpvaVZHRnpheTVxY3lJc0luTnZkWEpqWlZKdmIzUWlPaUl2VlhObGNuTXZiV0YwZEhCbGNuSjVMMU5wZEdWekwzQnZjRzF2ZEdsdmJpSXNJbk52ZFhKalpYTkRiMjUwWlc1MElqcGJJaThxWEc0Z0lFSmhjMlVnVkdGemF5QmpiR0Z6Y3lCbWIzSWdZM0psWVhScGJtY2dZU0IwWVhOcklHOXVJSFJvWlNCdFlXbHVJSEpsYm1SbGNpQnNiMjl3TGx4dUtpOWNibWx0Y0c5eWRDQXFJR0Z6SUd4dmIzQWdabkp2YlNBbkxpOXNiMjl3Snp0Y2JseHVablZ1WTNScGIyNGdZMnhsWVc1MWNDZ3BJSHRjYmlBZ2RHaHBjeTV2YmtOc1pXRnVkWEFnUFNCMWJtUmxabWx1WldRN1hHNGdJR3h2YjNBdVpHVmhZM1JwZG1GMFpTaDBhR2x6TG1sa0tUdGNibjFjYmx4dVpuVnVZM1JwYjI0Z1lXTjBhWFpoZEdVb0tTQjdYRzRnSUhSb2FYTXViMjVEYkdWaGJuVndJRDBnWTJ4bFlXNTFjRHRjYm4xY2JseHVaWGh3YjNKMElHUmxabUYxYkhRZ1kyeGhjM01nVkdGemF5QjdYRzRnSUdOdmJuTjBjblZqZEc5eUtIQnliM0J6S1NCN1hHNGdJQ0FnZEdocGN5NXBaQ0E5SUd4dmIzQXVaMlYwVkdGemEwbGtLQ2s3WEc0Z0lDQWdkR2hwY3k1cGMwRmpkR2wyWlNBOUlHWmhiSE5sTzF4dVhHNGdJQ0FnYVdZZ0tIUm9hWE11WkdWbVlYVnNkRkJ5YjNCektTQjdYRzRnSUNBZ0lDQm1iM0lnS0d4bGRDQnJaWGtnYVc0Z2RHaHBjeTVrWldaaGRXeDBVSEp2Y0hNcElIdGNiaUFnSUNBZ0lDQWdhV1lnS0hSb2FYTXVaR1ZtWVhWc2RGQnliM0J6TG1oaGMwOTNibEJ5YjNCbGNuUjVLR3RsZVNrcElIdGNiaUFnSUNBZ0lDQWdJQ0IwYUdselcydGxlVjBnUFNCMGFHbHpMbVJsWm1GMWJIUlFjbTl3YzF0clpYbGRPMXh1SUNBZ0lDQWdJQ0I5WEc0Z0lDQWdJQ0I5WEc0Z0lDQWdmVnh1WEc0Z0lDQWdkR2hwY3k1elpYUW9jSEp2Y0hNcE8xeHVJQ0I5WEc1Y2JpQWdjMlYwS0hCeWIzQnpLU0I3WEc0Z0lDQWdabTl5SUNoc1pYUWdhMlY1SUdsdUlIQnliM0J6S1NCN1hHNGdJQ0FnSUNCcFppQW9jSEp2Y0hNdWFHRnpUM2R1VUhKdmNHVnlkSGtvYTJWNUtTa2dlMXh1SUNBZ0lDQWdJQ0IwYUdselcydGxlVjBnUFNCd2NtOXdjMXRyWlhsZE8xeHVJQ0FnSUNBZ2ZWeHVJQ0FnSUgxY2JseHVJQ0FnSUhKbGRIVnliaUIwYUdsek8xeHVJQ0I5WEc1Y2JpQWdjM1JoY25Rb0tTQjdYRzRnSUNBZ2JHOXZjQzVoWTNScGRtRjBaU2gwYUdsekxtbGtMQ0IwYUdsektUdGNibHh1SUNBZ0lIUm9hWE11YjI1QlkzUnBkbUYwWlV4dmIzQWdQU0IwYUdsekxtOXVRMnhsWVc1MWNDQTlJSFZ1WkdWbWFXNWxaRHRjYmlBZ0lDQjBhR2x6TG1selEyOXRjR3hsZEdVZ1BTQm1ZV3h6WlR0Y2JseHVJQ0FnSUdsbUlDaDBhR2x6TG05dVUzUmhjblFwSUh0Y2JpQWdJQ0FnSUhSb2FYTXViMjVUZEdGeWRDaDBhR2x6S1R0Y2JpQWdJQ0I5WEc1Y2JpQWdJQ0J5WlhSMWNtNGdkR2hwY3p0Y2JpQWdmVnh1WEc0Z0lITjBiM0FvS1NCN1hHNGdJQ0FnYkc5dmNDNWtaV0ZqZEdsMllYUmxLSFJvYVhNdWFXUXBPMXh1SUNBZ0lGeHVJQ0FnSUdsbUlDaDBhR2x6TG05dVUzUnZjQ2tnZTF4dUlDQWdJQ0FnZEdocGN5NXZibE4wYjNBb2RHaHBjeWs3WEc0Z0lDQWdmVnh1WEc0Z0lDQWdjbVYwZFhKdUlIUm9hWE03WEc0Z0lIMWNibHh1SUNCdmJtTmxLQ2tnZTF4dUlDQWdJR3h2YjNBdVlXTjBhWFpoZEdVb2RHaHBjeTVwWkN3Z2RHaHBjeWs3WEc0Z0lDQWdkR2hwY3k1dmJrTnNaV0Z1ZFhBZ1BTQjFibVJsWm1sdVpXUTdYRzRnSUNBZ2RHaHBjeTV2YmtGamRHbDJZWFJsVEc5dmNDQTlJR0ZqZEdsMllYUmxPMXh1WEc0Z0lDQWdjbVYwZFhKdUlIUm9hWE03WEc0Z0lIMWNibHh1SUNCamIyMXdiR1YwWlNncElIdGNiaUFnSUNCMGFHbHpMbk4wYjNBb0tUdGNibHh1SUNBZ0lHbG1JQ2gwYUdsekxtOXVRMjl0Y0d4bGRHVXBJSHRjYmlBZ0lDQWdJSFJvYVhNdWIyNURiMjF3YkdWMFpTaDBhR2x6S1R0Y2JpQWdJQ0I5WEc0Z0lIMWNibHh1SUNBdktseHVJQ0FnSUNNZ1JYaDBaVzVrSUhSb2FYTWdVSEp2WTJWemN5QjNhWFJvSUc1bGR5QndjbTl3WlhKMGFXVnpYRzRnSUNBZ0l5TWdVbVYwZFhKdWN5QnVaWGNnYVc1emRHRnVZMlVnYjJZZ2RHaHBjeUJRY205alpYTnpKM01nWUhCeWIzUnZkSGx3WldBZ2QybDBhQ0JsZUdsemRHbHVaeUJoYm1RZ2JtVjNJSEJ5YjNCbGNuUnBaWE5jYmx4dUlDQWdJRUJ3WVhKaGJTQmJiMkpxWldOMFhTQW9iM0IwYVc5dVlXd3BYRzRnSUNBZ1FISmxkSFZ5YmlCYlVISnZZMlZ6YzExY2JpQWdLaTljYmlBZ2FXNW9aWEpwZENod2NtOXdjeWtnZTF4dUlDQWdJR052Ym5OMElIc2dhV1FzSUM0dUxtbHVhR1Z5YVhSbFpGQnliM0J6SUgwZ1BTQjBhR2x6TzF4dUlDQWdJSEpsZEhWeWJpQnVaWGNnZEdocGN5NWpiMjV6ZEhKMVkzUnZjaWg3SUM0dUxtbHVhR1Z5YVhSbFpGQnliM0J6TENBdUxpNXdjbTl3Y3lCOUtUdGNiaUFnZlZ4dWZTSmRmUT09XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy90YXNrL1Rhc2suanNcbiAqKiBtb2R1bGUgaWQgPSA4XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07XG5cbnZhciBfVGFzazIgPSByZXF1aXJlKCcuLi90YXNrL1Rhc2snKTtcblxudmFyIF9UYXNrMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX1Rhc2syKTtcblxudmFyIF91dGlscyA9IHJlcXVpcmUoJy4uL2luYy91dGlscycpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmICghc2VsZikgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIGNhbGwgJiYgKHR5cGVvZiBjYWxsID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpID8gY2FsbCA6IHNlbGY7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgXCIgKyB0eXBlb2Ygc3VwZXJDbGFzcyk7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgZW51bWVyYWJsZTogZmFsc2UsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcykgOiBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzOyB9XG5cbnZhciBJbnB1dCA9IGZ1bmN0aW9uIChfVGFzaykge1xuICBfaW5oZXJpdHMoSW5wdXQsIF9UYXNrKTtcblxuICBmdW5jdGlvbiBJbnB1dChpbml0aWFsVmFsdWVzLCBwb2xsKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIElucHV0KTtcblxuICAgIHZhciBfdGhpcyA9IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIF9UYXNrLmNhbGwodGhpcykpO1xuXG4gICAgX3RoaXMuc3RhdGUgPSBpbml0aWFsVmFsdWVzO1xuXG4gICAgaWYgKCgwLCBfdXRpbHMuaXNGdW5jKShwb2xsKSkge1xuICAgICAgX3RoaXMub25GcmFtZVN0YXJ0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gX3RoaXMubGF0ZXN0KF90aGlzLnBvbGwoKSk7XG4gICAgICB9O1xuICAgIH1cbiAgICByZXR1cm4gX3RoaXM7XG4gIH1cblxuICAvKlxuICAgIE1hbnVhbGx5IGFkZCBsYXRlc3QgdmFsdWVzXG4gICAgIEBwYXJhbSBbb2JqZWN0XVxuICAqL1xuXG5cbiAgSW5wdXQucHJvdG90eXBlLmxhdGVzdCA9IGZ1bmN0aW9uIGxhdGVzdChwcm9wcykge1xuICAgIHRoaXMuc3RhdGUgPSBfZXh0ZW5kcyh7fSwgdGhpcy5zdGF0ZSwgcHJvcHMpO1xuICB9O1xuXG4gIHJldHVybiBJbnB1dDtcbn0oX1Rhc2szLmRlZmF1bHQpO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBJbnB1dDtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbk55WXk5cGJuQjFkQzlKYm5CMWRDNXFjeUpkTENKdVlXMWxjeUk2VzEwc0ltMWhjSEJwYm1keklqb2lPenM3T3pzN1FVRkJRVHM3T3p0QlFVTkJPenM3T3pzN096czdPMGxCUlhGQ0xFczdPenRCUVVOdVFpeHBRa0ZCV1N4aFFVRmFMRVZCUVRKQ0xFbEJRVE5DTEVWQlFXbERPMEZCUVVFN08wRkJRVUVzYVVSQlF5OUNMR2RDUVVRclFqczdRVUZGTDBJc1ZVRkJTeXhMUVVGTUxFZEJRV0VzWVVGQllqczdRVUZGUVN4UlFVRkpMRzFDUVVGUExFbEJRVkFzUTBGQlNpeEZRVUZyUWp0QlFVTm9RaXhaUVVGTExGbEJRVXdzUjBGQmIwSTdRVUZCUVN4bFFVRk5MRTFCUVVzc1RVRkJUQ3hEUVVGWkxFMUJRVXNzU1VGQlRDeEZRVUZhTEVOQlFVNDdRVUZCUVN4UFFVRndRanRCUVVORU8wRkJUamhDTzBGQlQyaERPenM3T3pzN096dHJRa0ZQUkN4TkxHMUNRVUZQTEVzc1JVRkJUenRCUVVOYUxGTkJRVXNzUzBGQlRDeG5Ra0ZCYTBJc1MwRkJTeXhMUVVGMlFpeEZRVUZwUXl4TFFVRnFRenRCUVVORUxFYzdPenM3TzJ0Q1FXcENhMElzU3lJc0ltWnBiR1VpT2lKSmJuQjFkQzVxY3lJc0luTnZkWEpqWlZKdmIzUWlPaUl2VlhObGNuTXZiV0YwZEhCbGNuSjVMMU5wZEdWekwzQnZjRzF2ZEdsdmJpSXNJbk52ZFhKalpYTkRiMjUwWlc1MElqcGJJbWx0Y0c5eWRDQlVZWE5ySUdaeWIyMGdKeTR1TDNSaGMyc3ZWR0Z6YXljN1hHNXBiWEJ2Y25RZ2V5QnBjMFoxYm1NZ2ZTQm1jbTl0SUNjdUxpOXBibU12ZFhScGJITW5PMXh1WEc1bGVIQnZjblFnWkdWbVlYVnNkQ0JqYkdGemN5QkpibkIxZENCbGVIUmxibVJ6SUZSaGMyc2dlMXh1SUNCamIyNXpkSEoxWTNSdmNpaHBibWwwYVdGc1ZtRnNkV1Z6TENCd2IyeHNLU0I3WEc0Z0lDQWdjM1Z3WlhJb0tUdGNiaUFnSUNCMGFHbHpMbk4wWVhSbElEMGdhVzVwZEdsaGJGWmhiSFZsY3p0Y2JseHVJQ0FnSUdsbUlDaHBjMFoxYm1Nb2NHOXNiQ2twSUh0Y2JpQWdJQ0FnSUhSb2FYTXViMjVHY21GdFpWTjBZWEowSUQwZ0tDa2dQVDRnZEdocGN5NXNZWFJsYzNRb2RHaHBjeTV3YjJ4c0tDa3BPMXh1SUNBZ0lIMWNiaUFnZlZ4dVhHNGdJQzhxWEc0Z0lDQWdUV0Z1ZFdGc2JIa2dZV1JrSUd4aGRHVnpkQ0IyWVd4MVpYTmNibHh1SUNBZ0lFQndZWEpoYlNCYmIySnFaV04wWFZ4dUlDQXFMMXh1SUNCc1lYUmxjM1FvY0hKdmNITXBJSHRjYmlBZ0lDQjBhR2x6TG5OMFlYUmxJRDBnZXlBdUxpNTBhR2x6TG5OMFlYUmxMQ0F1TGk1d2NtOXdjeUI5TzF4dUlDQjlYRzU5WEc0aVhYMD1cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2lucHV0L0lucHV0LmpzXG4gKiogbW9kdWxlIGlkID0gOVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX3RpbWVsaW5lID0gcmVxdWlyZSgnLi90aW1lbGluZScpO1xuXG52YXIgX3RpbWVsaW5lMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3RpbWVsaW5lKTtcblxudmFyIF91dGlscyA9IHJlcXVpcmUoJy4vdXRpbHMnKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxudmFyIERFRkFVTFRfSU5URVJWQUwgPSAxMDA7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uICh0d2VlbnMsIHByb3BzKSB7XG4gIHZhciBwcm9wc0lzRHVyYXRpb24gPSAoMCwgX3V0aWxzLmlzTnVtKShwcm9wcyk7XG4gIHZhciBpbnRlcnZhbCA9IHByb3BzSXNEdXJhdGlvbiA/IHByb3BzIDogcHJvcHMgPyBwcm9wcy5pbnRlcnZhbCB8fCBERUZBVUxUX0lOVEVSVkFMIDogREVGQVVMVF9JTlRFUlZBTDtcbiAgdmFyIGF0ID0gMDtcbiAgdmFyIHRpbWVsaW5lRGVmaW5pdGlvbiA9IHR3ZWVucy5tYXAoZnVuY3Rpb24gKHR3ZWVuKSB7XG4gICAgdmFyIGRlZiA9IHsgdHdlZW46IHR3ZWVuLCBhdDogYXQgfTtcbiAgICBhdCArPSBpbnRlcnZhbDtcbiAgICByZXR1cm4gZGVmO1xuICB9KTtcblxuICByZXR1cm4gKDAsIF90aW1lbGluZTIuZGVmYXVsdCkodGltZWxpbmVEZWZpbml0aW9uLCBwcm9wcyk7XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluTnlZeTlwYm1NdmMzUmhaMmRsY2k1cWN5SmRMQ0p1WVcxbGN5STZXMTBzSW0xaGNIQnBibWR6SWpvaU96czdPMEZCUVVFN096czdRVUZEUVRzN096dEJRVVZCTEVsQlFVMHNiVUpCUVcxQ0xFZEJRWHBDT3p0clFrRkZaU3hWUVVGRExFMUJRVVFzUlVGQlV5eExRVUZVTEVWQlFXMUNPMEZCUTJoRExFMUJRVTBzYTBKQlFXdENMR3RDUVVGTkxFdEJRVTRzUTBGQmVFSTdRVUZEUVN4TlFVRk5MRmRCUVZjc2EwSkJRV3RDTEV0QlFXeENMRWRCUVRCQ0xGRkJRVkVzVFVGQlRTeFJRVUZPTEVsQlFXdENMR2RDUVVFeFFpeEhRVUUyUXl4blFrRkJlRVk3UVVGRFFTeE5RVUZKTEV0QlFVc3NRMEZCVkR0QlFVTkJMRTFCUVUwc2NVSkJRWEZDTEU5QlFVOHNSMEZCVUN4RFFVRlhMRlZCUVVNc1MwRkJSQ3hGUVVGWE8wRkJReTlETEZGQlFVMHNUVUZCVFN4RlFVRkZMRmxCUVVZc1JVRkJVeXhOUVVGVUxFVkJRVm83UVVGRFFTeFZRVUZOTEZGQlFVNDdRVUZEUVN4WFFVRlBMRWRCUVZBN1FVRkRSQ3hIUVVvd1FpeERRVUV6UWpzN1FVRk5RU3hUUVVGUExIZENRVUZUTEd0Q1FVRlVMRVZCUVRaQ0xFdEJRVGRDTEVOQlFWQTdRVUZEUkN4RElpd2labWxzWlNJNkluTjBZV2RuWlhJdWFuTWlMQ0p6YjNWeVkyVlNiMjkwSWpvaUwxVnpaWEp6TDIxaGRIUndaWEp5ZVM5VGFYUmxjeTl3YjNCdGIzUnBiMjRpTENKemIzVnlZMlZ6UTI5dWRHVnVkQ0k2V3lKcGJYQnZjblFnZEdsdFpXeHBibVVnWm5KdmJTQW5MaTkwYVcxbGJHbHVaU2M3WEc1cGJYQnZjblFnZXlCcGMwNTFiU0I5SUdaeWIyMGdKeTR2ZFhScGJITW5PMXh1WEc1amIyNXpkQ0JFUlVaQlZVeFVYMGxPVkVWU1ZrRk1JRDBnTVRBd08xeHVYRzVsZUhCdmNuUWdaR1ZtWVhWc2RDQW9kSGRsWlc1ekxDQndjbTl3Y3lrZ1BUNGdlMXh1SUNCamIyNXpkQ0J3Y205d2MwbHpSSFZ5WVhScGIyNGdQU0JwYzA1MWJTaHdjbTl3Y3lrN1hHNGdJR052Ym5OMElHbHVkR1Z5ZG1Gc0lEMGdjSEp2Y0hOSmMwUjFjbUYwYVc5dUlEOGdjSEp2Y0hNZ09pQndjbTl3Y3lBL0lIQnliM0J6TG1sdWRHVnlkbUZzSUh4OElFUkZSa0ZWVEZSZlNVNVVSVkpXUVV3Z09pQkVSVVpCVlV4VVgwbE9WRVZTVmtGTU8xeHVJQ0JzWlhRZ1lYUWdQU0F3TzF4dUlDQmpiMjV6ZENCMGFXMWxiR2x1WlVSbFptbHVhWFJwYjI0Z1BTQjBkMlZsYm5NdWJXRndLQ2gwZDJWbGJpa2dQVDRnZTF4dUlDQWdJR052Ym5OMElHUmxaaUE5SUhzZ2RIZGxaVzRzSUdGMElIMDdYRzRnSUNBZ1lYUWdLejBnYVc1MFpYSjJZV3c3WEc0Z0lDQWdjbVYwZFhKdUlHUmxaanRjYmlBZ2ZTazdYRzVjYmlBZ2NtVjBkWEp1SUhScGJXVnNhVzVsS0hScGJXVnNhVzVsUkdWbWFXNXBkR2x2Yml3Z2NISnZjSE1wTzF4dWZUc2lYWDA9XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9pbmMvc3RhZ2dlci5qc1xuICoqIG1vZHVsZSBpZCA9IDEwXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07XG5cbmV4cG9ydHMuZGVmYXVsdCA9IHRpbWVsaW5lO1xuXG52YXIgX1R3ZWVuID0gcmVxdWlyZSgnLi4vYWN0aW9ucy9Ud2VlbicpO1xuXG52YXIgX1R3ZWVuMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX1R3ZWVuKTtcblxudmFyIF9wcmVzZXRFYXNpbmcgPSByZXF1aXJlKCcuLi9hY3Rpb25zL2Vhc2luZy9wcmVzZXQtZWFzaW5nJyk7XG5cbnZhciBfcHJlc2V0RWFzaW5nMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3ByZXNldEVhc2luZyk7XG5cbnZhciBfY2FsYyA9IHJlcXVpcmUoJy4vY2FsYycpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG4vKlxuICBAcGFyYW0gW2FycmF5XVxuICAgIFNlcXVlbnRpYWwgYXJyYXkgb2YgdHdlZW5zLCBlYWNoIGl0ZW0gY2FuIGJlIGEgdHdlZW4gb3IgZGVmaW5pdGlvbiBvYmo6XG5cbiAgICBbXG4gICAgICBuZXcgVHdlZW4oKSxcbiAgICAgIHN0YWdnZXIoKSxcbiAgICAgIHRpbWVsaW5lKCksXG4gICAgICB7XG4gICAgICAgIHR3ZWVuOiBuZXcgVHdlZW4oKSxcbiAgICAgICAgYXQ6IDEwMCxcbiAgICAgICAgb2Zmc2V0OiBcIis9MTAwXCJcbiAgICAgIH1cbiAgICBdXG4qL1xudmFyIGFuYWx5emUgPSBmdW5jdGlvbiAoZGVmcykge1xuICB2YXIgdGltZWxpbmUgPSBbXTtcbiAgdmFyIG51bURlZnMgPSBkZWZzLmxlbmd0aDtcbiAgdmFyIGN1cnJlbnRQbGF5aGVhZCA9IDA7XG5cbiAgdmFyIF9sb29wID0gZnVuY3Rpb24gKGkpIHtcbiAgICB2YXIgZGVmID0gZGVmc1tpXTtcbiAgICB2YXIgZGVmSXNPYmogPSBkZWYudHdlZW4gPyB0cnVlIDogZmFsc2U7XG4gICAgdmFyIHR3ZWVuID0gZGVmSXNPYmogPyBkZWYudHdlZW4gOiBkZWY7XG5cbiAgICBpZiAoZGVmSXNPYmopIHtcbiAgICAgIGlmIChkZWYub2Zmc2V0ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgY3VycmVudFBsYXloZWFkID0gKDAsIF9jYWxjLnJlbGF0aXZlVmFsdWUpKGN1cnJlbnRQbGF5aGVhZCwgZGVmLm9mZnNldCk7XG4gICAgICB9IGVsc2UgaWYgKGRlZi5hdCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGN1cnJlbnRQbGF5aGVhZCA9IGRlZi5hdDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB2YXIgZHVyYXRpb24gPSAwO1xuICAgIGZvciAodmFyIGtleSBpbiB0d2Vlbi52YWx1ZXMpIHtcbiAgICAgIGlmICh0d2Vlbi52YWx1ZXMuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICB2YXIgdmFsdWUgPSB0d2Vlbi52YWx1ZXNba2V5XTtcbiAgICAgICAgZHVyYXRpb24gPSBNYXRoLm1heChkdXJhdGlvbiwgdmFsdWUuZHVyYXRpb24pO1xuICAgICAgfVxuICAgIH1cblxuICAgIHRpbWVsaW5lLnB1c2goe1xuICAgICAgZnJvbTogY3VycmVudFBsYXloZWFkLFxuICAgICAgZHVyYXRpb246IGR1cmF0aW9uLFxuICAgICAgZmlyZTogZnVuY3Rpb24gKHRpbWUpIHtcbiAgICAgICAgcmV0dXJuIHR3ZWVuLnNlZWtUaW1lKHRpbWUpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgY3VycmVudFBsYXloZWFkICs9IGR1cmF0aW9uO1xuICB9O1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbnVtRGVmczsgaSsrKSB7XG4gICAgX2xvb3AoaSk7XG4gIH1cblxuICByZXR1cm4geyB0b3RhbFRpbWU6IGN1cnJlbnRQbGF5aGVhZCwgdGltZWxpbmU6IHRpbWVsaW5lIH07XG59O1xuXG52YXIgc2V0VHdlZW5zID0gZnVuY3Rpb24gKF9yZWYpIHtcbiAgdmFyIHRpbWVsaW5lID0gX3JlZi50aW1lbGluZTtcbiAgdmFyIHRpbWVsaW5lTGVuZ3RoID0gX3JlZi50aW1lbGluZUxlbmd0aDtcbiAgdmFyIHZhbHVlcyA9IF9yZWYudmFsdWVzO1xuICB2YXIgZHVyYXRpb24gPSBfcmVmLmR1cmF0aW9uO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgdGltZWxpbmVMZW5ndGg7IGkrKykge1xuICAgIHZhciBfdHdlZW4gPSB0aW1lbGluZVtpXTtcbiAgICB2YXIgdHdlZW5UaW1lID0gdmFsdWVzLnAuY3VycmVudCAqIGR1cmF0aW9uIC0gX3R3ZWVuLmZyb207XG5cbiAgICBpZiAodHdlZW5UaW1lID49IC01MCAmJiB0d2VlblRpbWUgPD0gX3R3ZWVuLmR1cmF0aW9uICsgNTApIHtcbiAgICAgIF90d2Vlbi5maXJlKHR3ZWVuVGltZSk7XG4gICAgfVxuICB9XG59O1xuXG5mdW5jdGlvbiB0aW1lbGluZShkZWYpIHtcbiAgdmFyIHByb3BzID0gYXJndW1lbnRzLmxlbmd0aCA8PSAxIHx8IGFyZ3VtZW50c1sxXSA9PT0gdW5kZWZpbmVkID8ge30gOiBhcmd1bWVudHNbMV07XG5cbiAgdmFyIF9hbmFseXplID0gYW5hbHl6ZShkZWYpO1xuXG4gIHZhciB0b3RhbFRpbWUgPSBfYW5hbHl6ZS50b3RhbFRpbWU7XG4gIHZhciB0aW1lbGluZSA9IF9hbmFseXplLnRpbWVsaW5lO1xuXG5cbiAgcmV0dXJuIG5ldyBfVHdlZW4yLmRlZmF1bHQoX2V4dGVuZHMoe1xuICAgIGVhc2U6IF9wcmVzZXRFYXNpbmcyLmRlZmF1bHQubGluZWFyXG4gIH0sIHByb3BzLCB7XG4gICAgZHVyYXRpb246IHRvdGFsVGltZSxcbiAgICB2YWx1ZXM6IHtcbiAgICAgIHA6IHsgZnJvbTogMCwgdG86IDEgfVxuICAgIH0sXG4gICAgdGltZWxpbmU6IHRpbWVsaW5lLFxuICAgIHRpbWVsaW5lTGVuZ3RoOiB0aW1lbGluZS5sZW5ndGgsXG4gICAgb25SZW5kZXI6IHNldFR3ZWVuc1xuICB9KSk7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5OeVl5OXBibU12ZEdsdFpXeHBibVV1YW5NaVhTd2libUZ0WlhNaU9sdGRMQ0p0WVhCd2FXNW5jeUk2SWpzN096czdPMnRDUVc5RmQwSXNVVHM3UVVGd1JYaENPenM3TzBGQlEwRTdPenM3UVVGRFFUczdPenM3T3pzN096czdPenM3T3pzN096dEJRV2xDUVN4SlFVRk5MRlZCUVZVc1ZVRkJReXhKUVVGRUxFVkJRVlU3UVVGRGVFSXNUVUZCVFN4WFFVRlhMRVZCUVdwQ08wRkJRMEVzVFVGQlRTeFZRVUZWTEV0QlFVc3NUVUZCY2tJN1FVRkRRU3hOUVVGSkxHdENRVUZyUWl4RFFVRjBRanM3UVVGSWQwSXNkMEpCUzJZc1EwRk1aVHRCUVUxMFFpeFJRVUZOTEUxQlFVMHNTMEZCU3l4RFFVRk1MRU5CUVZvN1FVRkRRU3hSUVVGTkxGZEJRVmNzU1VGQlNTeExRVUZLTEVkQlFWa3NTVUZCV2l4SFFVRnRRaXhMUVVGd1F6dEJRVU5CTEZGQlFVMHNVVUZCVXl4UlFVRkVMRWRCUVdFc1NVRkJTU3hMUVVGcVFpeEhRVUY1UWl4SFFVRjJRenM3UVVGRlFTeFJRVUZKTEZGQlFVb3NSVUZCWXp0QlFVTmFMRlZCUVVrc1NVRkJTU3hOUVVGS0xFdEJRV1VzVTBGQmJrSXNSVUZCT0VJN1FVRkROVUlzTUVKQlFXdENMSGxDUVVGakxHVkJRV1FzUlVGQkswSXNTVUZCU1N4TlFVRnVReXhEUVVGc1FqdEJRVU5FTEU5QlJrUXNUVUZGVHl4SlFVRkpMRWxCUVVrc1JVRkJTaXhMUVVGWExGTkJRV1lzUlVGQk1FSTdRVUZETDBJc01FSkJRV3RDTEVsQlFVa3NSVUZCZEVJN1FVRkRSRHRCUVVOR096dEJRVVZFTEZGQlFVa3NWMEZCVnl4RFFVRm1PMEZCUTBFc1UwRkJTeXhKUVVGSkxFZEJRVlFzU1VGQlowSXNUVUZCVFN4TlFVRjBRaXhGUVVFNFFqdEJRVU0xUWl4VlFVRkpMRTFCUVUwc1RVRkJUaXhEUVVGaExHTkJRV0lzUTBGQk5FSXNSMEZCTlVJc1EwRkJTaXhGUVVGelF6dEJRVU53UXl4WlFVRk5MRkZCUVZFc1RVRkJUU3hOUVVGT0xFTkJRV0VzUjBGQllpeERRVUZrTzBGQlEwRXNiVUpCUVZjc1MwRkJTeXhIUVVGTUxFTkJRVk1zVVVGQlZDeEZRVUZ0UWl4TlFVRk5MRkZCUVhwQ0xFTkJRVmc3UVVGRFJEdEJRVU5HT3p0QlFVVkVMR0ZCUVZNc1NVRkJWQ3hEUVVGak8wRkJRMW9zV1VGQlRTeGxRVVJOTzBGQlJWb3NaMEpCUVZVc1VVRkdSVHRCUVVkYUxGbEJRVTBzVlVGQlF5eEpRVUZFTzBGQlFVRXNaVUZCVlN4TlFVRk5MRkZCUVU0c1EwRkJaU3hKUVVGbUxFTkJRVlk3UVVGQlFUdEJRVWhOTEV0QlFXUTdPMEZCVFVFc2RVSkJRVzFDTEZGQlFXNUNPMEZCYUVOelFqczdRVUZMZUVJc1QwRkJTeXhKUVVGSkxFbEJRVWtzUTBGQllpeEZRVUZuUWl4SlFVRkpMRTlCUVhCQ0xFVkJRVFpDTEVkQlFUZENMRVZCUVd0RE8wRkJRVUVzVlVGQmVrSXNRMEZCZVVJN1FVRTBRbXBET3p0QlFVVkVMRk5CUVU4c1JVRkJSU3hYUVVGWExHVkJRV0lzUlVGQk9FSXNhMEpCUVRsQ0xFVkJRVkE3UVVGRFJDeERRWEJEUkRzN1FVRnpRMEVzU1VGQlRTeFpRVUZaTEdkQ1FVRnZSRHRCUVVGQkxFMUJRV3BFTEZGQlFXbEVMRkZCUVdwRUxGRkJRV2xFTzBGQlFVRXNUVUZCZGtNc1kwRkJkVU1zVVVGQmRrTXNZMEZCZFVNN1FVRkJRU3hOUVVGMlFpeE5RVUYxUWl4UlFVRjJRaXhOUVVGMVFqdEJRVUZCTEUxQlFXWXNVVUZCWlN4UlFVRm1MRkZCUVdVN08wRkJRM0JGTEU5QlFVc3NTVUZCU1N4SlFVRkpMRU5CUVdJc1JVRkJaMElzU1VGQlNTeGpRVUZ3UWl4RlFVRnZReXhIUVVGd1F5eEZRVUY1UXp0QlFVTjJReXhSUVVGTkxGTkJRVkVzVTBGQlV5eERRVUZVTEVOQlFXUTdRVUZEUVN4UlFVRk5MRmxCUVdFc1QwRkJUeXhEUVVGUUxFTkJRVk1zVDBGQlZDeEhRVUZ0UWl4UlFVRndRaXhIUVVGblF5eFBRVUZOTEVsQlFYaEVPenRCUVVWQkxGRkJRVWtzWVVGQllTeERRVUZETEVWQlFXUXNTVUZCYjBJc1lVRkJZU3hQUVVGTkxGRkJRVTRzUjBGQmFVSXNSVUZCZEVRc1JVRkJNRVE3UVVGRGVFUXNZVUZCVFN4SlFVRk9MRU5CUVZjc1UwRkJXRHRCUVVORU8wRkJRMFk3UVVGRFJpeERRVlJFT3p0QlFWZGxMRk5CUVZNc1VVRkJWQ3hEUVVGclFpeEhRVUZzUWl4RlFVRnRRenRCUVVGQkxFMUJRVm9zUzBGQldTeDVSRUZCU2l4RlFVRkpPenRCUVVGQkxHbENRVU5vUWl4UlFVRlJMRWRCUVZJc1EwRkVaMEk3TzBGQlFVRXNUVUZEZUVNc1UwRkVkME1zV1VGRGVFTXNVMEZFZDBNN1FVRkJRU3hOUVVNM1FpeFJRVVEyUWl4WlFVTTNRaXhSUVVRMlFqczdPMEZCUjJoRUxGTkJRVTg3UVVGRFRDeFZRVUZOTEhWQ1FVRlBPMEZCUkZJc1MwRkZSaXhMUVVaRk8wRkJSMHdzWTBGQlZTeFRRVWhNTzBGQlNVd3NXVUZCVVR0QlFVTk9MRk5CUVVjc1JVRkJSU3hOUVVGTkxFTkJRVklzUlVGQlZ5eEpRVUZKTEVOQlFXWTdRVUZFUnl4TFFVcElPMEZCVDB3c1kwRkJWU3hSUVZCTU8wRkJVVXdzYjBKQlFXZENMRk5CUVZNc1RVRlNjRUk3UVVGVFRDeGpRVUZWTzBGQlZFd3NTMEZCVUR0QlFWZEVJaXdpWm1sc1pTSTZJblJwYldWc2FXNWxMbXB6SWl3aWMyOTFjbU5sVW05dmRDSTZJaTlWYzJWeWN5OXRZWFIwY0dWeWNua3ZVMmwwWlhNdmNHOXdiVzkwYVc5dUlpd2ljMjkxY21ObGMwTnZiblJsYm5RaU9sc2lhVzF3YjNKMElGUjNaV1Z1SUdaeWIyMGdKeTR1TDJGamRHbHZibk12VkhkbFpXNG5PMXh1YVcxd2IzSjBJR1ZoYzJsdVp5Qm1jbTl0SUNjdUxpOWhZM1JwYjI1ekwyVmhjMmx1Wnk5d2NtVnpaWFF0WldGemFXNW5KenRjYm1sdGNHOXlkQ0I3SUhKbGJHRjBhWFpsVm1Gc2RXVWdmU0JtY205dElDY3VMMk5oYkdNbk8xeHVYRzR2S2x4dUlDQkFjR0Z5WVcwZ1cyRnljbUY1WFZ4dUlDQWdJRk5sY1hWbGJuUnBZV3dnWVhKeVlYa2diMllnZEhkbFpXNXpMQ0JsWVdOb0lHbDBaVzBnWTJGdUlHSmxJR0VnZEhkbFpXNGdiM0lnWkdWbWFXNXBkR2x2YmlCdlltbzZYRzVjYmlBZ0lDQmJYRzRnSUNBZ0lDQnVaWGNnVkhkbFpXNG9LU3hjYmlBZ0lDQWdJSE4wWVdkblpYSW9LU3hjYmlBZ0lDQWdJSFJwYldWc2FXNWxLQ2tzWEc0Z0lDQWdJQ0I3WEc0Z0lDQWdJQ0FnSUhSM1pXVnVPaUJ1WlhjZ1ZIZGxaVzRvS1N4Y2JpQWdJQ0FnSUNBZ1lYUTZJREV3TUN4Y2JpQWdJQ0FnSUNBZ2IyWm1jMlYwT2lCY0lpczlNVEF3WENKY2JpQWdJQ0FnSUgxY2JpQWdJQ0JkWEc0cUwxeHVZMjl1YzNRZ1lXNWhiSGw2WlNBOUlDaGtaV1p6S1NBOVBpQjdYRzRnSUdOdmJuTjBJSFJwYldWc2FXNWxJRDBnVzEwN1hHNGdJR052Ym5OMElHNTFiVVJsWm5NZ1BTQmtaV1p6TG14bGJtZDBhRHRjYmlBZ2JHVjBJR04xY25KbGJuUlFiR0Y1YUdWaFpDQTlJREE3WEc1Y2JpQWdabTl5SUNoc1pYUWdhU0E5SURBN0lHa2dQQ0J1ZFcxRVpXWnpPeUJwS3lzcElIdGNiaUFnSUNCamIyNXpkQ0JrWldZZ1BTQmtaV1p6VzJsZE8xeHVJQ0FnSUdOdmJuTjBJR1JsWmtselQySnFJRDBnWkdWbUxuUjNaV1Z1SUQ4Z2RISjFaU0E2SUdaaGJITmxPMXh1SUNBZ0lHTnZibk4wSUhSM1pXVnVJRDBnS0dSbFprbHpUMkpxS1NBL0lHUmxaaTUwZDJWbGJpQTZJR1JsWmp0Y2JseHVJQ0FnSUdsbUlDaGtaV1pKYzA5aWFpa2dlMXh1SUNBZ0lDQWdhV1lnS0dSbFppNXZabVp6WlhRZ0lUMDlJSFZ1WkdWbWFXNWxaQ2tnZTF4dUlDQWdJQ0FnSUNCamRYSnlaVzUwVUd4aGVXaGxZV1FnUFNCeVpXeGhkR2wyWlZaaGJIVmxLR04xY25KbGJuUlFiR0Y1YUdWaFpDd2daR1ZtTG05bVpuTmxkQ2s3WEc0Z0lDQWdJQ0I5SUdWc2MyVWdhV1lnS0dSbFppNWhkQ0FoUFQwZ2RXNWtaV1pwYm1Wa0tTQjdYRzRnSUNBZ0lDQWdJR04xY25KbGJuUlFiR0Y1YUdWaFpDQTlJR1JsWmk1aGREdGNiaUFnSUNBZ0lIMWNiaUFnSUNCOVhHNWNiaUFnSUNCc1pYUWdaSFZ5WVhScGIyNGdQU0F3TzF4dUlDQWdJR1p2Y2lBb2JHVjBJR3RsZVNCcGJpQjBkMlZsYmk1MllXeDFaWE1wSUh0Y2JpQWdJQ0FnSUdsbUlDaDBkMlZsYmk1MllXeDFaWE11YUdGelQzZHVVSEp2Y0dWeWRIa29hMlY1S1NrZ2UxeHVJQ0FnSUNBZ0lDQmpiMjV6ZENCMllXeDFaU0E5SUhSM1pXVnVMblpoYkhWbGMxdHJaWGxkTzF4dUlDQWdJQ0FnSUNCa2RYSmhkR2x2YmlBOUlFMWhkR2d1YldGNEtHUjFjbUYwYVc5dUxDQjJZV3gxWlM1a2RYSmhkR2x2YmlrN1hHNGdJQ0FnSUNCOVhHNGdJQ0FnZlZ4dVhHNGdJQ0FnZEdsdFpXeHBibVV1Y0hWemFDaDdYRzRnSUNBZ0lDQm1jbTl0T2lCamRYSnlaVzUwVUd4aGVXaGxZV1FzWEc0Z0lDQWdJQ0JrZFhKaGRHbHZiam9nWkhWeVlYUnBiMjRzWEc0Z0lDQWdJQ0JtYVhKbE9pQW9kR2x0WlNrZ1BUNGdkSGRsWlc0dWMyVmxhMVJwYldVb2RHbHRaU2xjYmlBZ0lDQjlLVHRjYmx4dUlDQWdJR04xY25KbGJuUlFiR0Y1YUdWaFpDQXJQU0JrZFhKaGRHbHZianRjYmlBZ2ZWeHVYRzRnSUhKbGRIVnliaUI3SUhSdmRHRnNWR2x0WlRvZ1kzVnljbVZ1ZEZCc1lYbG9aV0ZrTENCMGFXMWxiR2x1WlNCOU8xeHVmVHRjYmx4dVkyOXVjM1FnYzJWMFZIZGxaVzV6SUQwZ0tIc2dkR2x0Wld4cGJtVXNJSFJwYldWc2FXNWxUR1Z1WjNSb0xDQjJZV3gxWlhNc0lHUjFjbUYwYVc5dUlIMHBJRDArSUh0Y2JpQWdabTl5SUNoc1pYUWdhU0E5SURBN0lHa2dQQ0IwYVcxbGJHbHVaVXhsYm1kMGFEc2dhU3NyS1NCN1hHNGdJQ0FnWTI5dWMzUWdkSGRsWlc0Z1BTQjBhVzFsYkdsdVpWdHBYVHRjYmlBZ0lDQmpiMjV6ZENCMGQyVmxibFJwYldVZ1BTQW9kbUZzZFdWekxuQXVZM1Z5Y21WdWRDQXFJR1IxY21GMGFXOXVLU0F0SUhSM1pXVnVMbVp5YjIwN1hHNWNiaUFnSUNCcFppQW9kSGRsWlc1VWFXMWxJRDQ5SUMwMU1DQW1KaUIwZDJWbGJsUnBiV1VnUEQwZ2RIZGxaVzR1WkhWeVlYUnBiMjRnS3lBMU1Da2dlMXh1SUNBZ0lDQWdkSGRsWlc0dVptbHlaU2gwZDJWbGJsUnBiV1VwTzF4dUlDQWdJSDFjYmlBZ2ZWeHVmVHRjYmx4dVpYaHdiM0owSUdSbFptRjFiSFFnWm5WdVkzUnBiMjRnZEdsdFpXeHBibVVvWkdWbUxDQndjbTl3Y3lBOUlIdDlLU0I3WEc0Z0lHTnZibk4wSUhzZ2RHOTBZV3hVYVcxbExDQjBhVzFsYkdsdVpTQjlJRDBnWVc1aGJIbDZaU2hrWldZcE8xeHVYRzRnSUhKbGRIVnliaUJ1WlhjZ1ZIZGxaVzRvZTF4dUlDQWdJR1ZoYzJVNklHVmhjMmx1Wnk1c2FXNWxZWElzWEc0Z0lDQWdMaTR1Y0hKdmNITXNYRzRnSUNBZ1pIVnlZWFJwYjI0NklIUnZkR0ZzVkdsdFpTeGNiaUFnSUNCMllXeDFaWE02SUh0Y2JpQWdJQ0FnSUhBNklIc2dabkp2YlRvZ01Dd2dkRzg2SURFZ2ZWeHVJQ0FnSUgwc1hHNGdJQ0FnZEdsdFpXeHBibVU2SUhScGJXVnNhVzVsTEZ4dUlDQWdJSFJwYldWc2FXNWxUR1Z1WjNSb09pQjBhVzFsYkdsdVpTNXNaVzVuZEdnc1hHNGdJQ0FnYjI1U1pXNWtaWEk2SUhObGRGUjNaV1Z1YzF4dUlDQjlLVHRjYm4waVhYMD1cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2luYy90aW1lbGluZS5qc1xuICoqIG1vZHVsZSBpZCA9IDExXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbi8qXG4gIE92ZXJyaWRlIGBnZXR0ZXJgIGFuZCBgc2V0dGVyYCB0byByZWltcGxlbWVudCB0aGUgaW50ZXJmYWNlIGZvciBuZXcgZWxlbWVudCB0eXBlcy5cblxuICBTZXQgYC5zdGF0ZU1hcGAgYXMgYW4gb2JqZWN0IGtleS92YWx1ZSBtYXAgdG8gdHJhbnNsYXRlIGluY29taW5nIGtleXMgdG9cbiAgQVBJLXNwZWNpZmljIGtleXMuIEZvciBpbnN0YW5jZSwgeyB4OiAndHJhbnNsYXRlWCcgfS4gXG5cbiAgU2V0IGAudmFsdWVUeXBlTWFwYCBhcyBhbiBvYmplY3Qga2V5L3ZhbHVlIG1hcCB0byByZXR1cm4gYSB2YWx1ZSB0eXBlIHdpdGhcbiAgYGdldFZhbHVlVHlwZShrZXkpYCAoa2V5IHdpbGwgYmUgbWFwcGVkIGFjY29yZGluZyB0byBgc3RhdGVNYXBgKVxuKi9cblxudmFyIG1hcEtleSA9IGZ1bmN0aW9uIChrZXksIG1hcCkge1xuICByZXR1cm4gbWFwID8gbWFwW2tleV0gfHwga2V5IDoga2V5O1xufTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gKG9wdGlvbnMpIHtcbiAgLypcbiAgICBBZGFwdGVyIGlzIHNldHRlciBmdW5jdGlvblxuICAgICBAcGFyYW0gW29iamVjdF06IE9iamVjdCB0byBzZXQgcHJvcGVydGllcyBvblxuICAgIEBwYXJhbSBbb2JqZWN0XTogS2V5L3ZhbHVlIHByb3BlcnRpZXMgdG8gc2V0XG4gICovXG4gIHZhciBhZGFwdGVyID0gZnVuY3Rpb24gKGVsZW1lbnQsIHByb3BzLCBkYXRhKSB7XG4gICAgaWYgKG9wdGlvbnMuc3RhdGVNYXApIHtcbiAgICAgIC8vIFRyYW5zbGF0ZSBwcm9wc1xuICAgICAgZm9yICh2YXIga2V5IGluIHByb3BzKSB7XG4gICAgICAgIGlmIChwcm9wcy5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgdmFyIG1hcHBlZEtleSA9IG1hcEtleShrZXksIG9wdGlvbnMuc3RhdGVNYXApO1xuXG4gICAgICAgICAgaWYgKG1hcHBlZEtleSAhPT0ga2V5KSB7XG4gICAgICAgICAgICBwcm9wc1ttYXBwZWRLZXldID0gcHJvcHNba2V5XTtcbiAgICAgICAgICAgIGRlbGV0ZSBwcm9wc1trZXldO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBvcHRpb25zLnNldHRlcihlbGVtZW50LCBwcm9wcywgZGF0YSk7XG4gIH07XG5cbiAgYWRhcHRlci5nZXQgPSBmdW5jdGlvbiAoZWxlbWVudCwga2V5KSB7XG4gICAgcmV0dXJuIG9wdGlvbnMuZ2V0dGVyKGVsZW1lbnQsIG1hcEtleShrZXksIG9wdGlvbnMuc3RhdGVNYXApKTtcbiAgfTtcbiAgYWRhcHRlci5jaGVja1ZhbHVlVHlwZSA9IGZ1bmN0aW9uIChrZXkpIHtcbiAgICByZXR1cm4gb3B0aW9ucy52YWx1ZVR5cGVNYXAgPyBvcHRpb25zLnZhbHVlVHlwZU1hcFttYXBLZXkoa2V5LCBvcHRpb25zLnN0YXRlTWFwKV0gOiBmYWxzZTtcbiAgfTtcbiAgYWRhcHRlci5nZXRFbGVtZW50RGF0YSA9IG9wdGlvbnMuZ2V0RWxlbWVudERhdGE7XG5cbiAgcmV0dXJuIGFkYXB0ZXI7XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluTnlZeTloWkdGd2RHVnlMMkZrWVhCMFpYSXVhbk1pWFN3aWJtRnRaWE1pT2x0ZExDSnRZWEJ3YVc1bmN5STZJanM3T3pzN096czdPenM3T3p0QlFWVkJMRWxCUVUwc1UwRkJVeXhWUVVGRExFZEJRVVFzUlVGQlRTeEhRVUZPTzBGQlFVRXNVMEZCWXl4TlFVRk5MRWxCUVVrc1IwRkJTaXhMUVVGWkxFZEJRV3hDTEVkQlFYZENMRWRCUVhSRE8wRkJRVUVzUTBGQlpqczdhMEpCUldVc1ZVRkJReXhQUVVGRUxFVkJRV0U3T3pzN096dEJRVTh4UWl4TlFVRk5MRlZCUVZVc1ZVRkJReXhQUVVGRUxFVkJRVlVzUzBGQlZpeEZRVUZwUWl4SlFVRnFRaXhGUVVFd1FqdEJRVU40UXl4UlFVRkpMRkZCUVZFc1VVRkJXaXhGUVVGelFqczdRVUZGY0VJc1YwRkJTeXhKUVVGSkxFZEJRVlFzU1VGQlowSXNTMEZCYUVJc1JVRkJkVUk3UVVGRGNrSXNXVUZCU1N4TlFVRk5MR05CUVU0c1EwRkJjVUlzUjBGQmNrSXNRMEZCU2l4RlFVRXJRanRCUVVNM1FpeGpRVUZOTEZsQlFWa3NUMEZCVHl4SFFVRlFMRVZCUVZrc1VVRkJVU3hSUVVGd1FpeERRVUZzUWpzN1FVRkZRU3hqUVVGSkxHTkJRV01zUjBGQmJFSXNSVUZCZFVJN1FVRkRja0lzYTBKQlFVMHNVMEZCVGl4SlFVRnRRaXhOUVVGTkxFZEJRVTRzUTBGQmJrSTdRVUZEUVN4dFFrRkJUeXhOUVVGTkxFZEJRVTRzUTBGQlVEdEJRVU5FTzBGQlEwWTdRVUZEUmp0QlFVTkdPenRCUVVWRUxGZEJRVThzVVVGQlVTeE5RVUZTTEVOQlFXVXNUMEZCWml4RlFVRjNRaXhMUVVGNFFpeEZRVUVyUWl4SlFVRXZRaXhEUVVGUU8wRkJRMFFzUjBGb1FrUTdPMEZCYTBKQkxGVkJRVkVzUjBGQlVpeEhRVUZqTEZWQlFVTXNUMEZCUkN4RlFVRlZMRWRCUVZZN1FVRkJRU3hYUVVGclFpeFJRVUZSTEUxQlFWSXNRMEZCWlN4UFFVRm1MRVZCUVhkQ0xFOUJRVThzUjBGQlVDeEZRVUZaTEZGQlFWRXNVVUZCY0VJc1EwRkJlRUlzUTBGQmJFSTdRVUZCUVN4SFFVRmtPMEZCUTBFc1ZVRkJVU3hqUVVGU0xFZEJRWGxDTEZWQlFVTXNSMEZCUkR0QlFVRkJMRmRCUVZNc1VVRkJVU3haUVVGU0xFZEJRWFZDTEZGQlFWRXNXVUZCVWl4RFFVRnhRaXhQUVVGUExFZEJRVkFzUlVGQldTeFJRVUZSTEZGQlFYQkNMRU5CUVhKQ0xFTkJRWFpDTEVkQlFUWkZMRXRCUVhSR08wRkJRVUVzUjBGQmVrSTdRVUZEUVN4VlFVRlJMR05CUVZJc1IwRkJlVUlzVVVGQlVTeGpRVUZxUXpzN1FVRkZRU3hUUVVGUExFOUJRVkE3UVVGRFJDeERJaXdpWm1sc1pTSTZJbUZrWVhCMFpYSXVhbk1pTENKemIzVnlZMlZTYjI5MElqb2lMMVZ6WlhKekwyMWhkSFJ3WlhKeWVTOVRhWFJsY3k5d2IzQnRiM1JwYjI0aUxDSnpiM1Z5WTJWelEyOXVkR1Z1ZENJNld5SXZLbHh1SUNCUGRtVnljbWxrWlNCZ1oyVjBkR1Z5WUNCaGJtUWdZSE5sZEhSbGNtQWdkRzhnY21WcGJYQnNaVzFsYm5RZ2RHaGxJR2x1ZEdWeVptRmpaU0JtYjNJZ2JtVjNJR1ZzWlcxbGJuUWdkSGx3WlhNdVhHNWNiaUFnVTJWMElHQXVjM1JoZEdWTllYQmdJR0Z6SUdGdUlHOWlhbVZqZENCclpYa3ZkbUZzZFdVZ2JXRndJSFJ2SUhSeVlXNXpiR0YwWlNCcGJtTnZiV2x1WnlCclpYbHpJSFJ2WEc0Z0lFRlFTUzF6Y0dWamFXWnBZeUJyWlhsekxpQkdiM0lnYVc1emRHRnVZMlVzSUhzZ2VEb2dKM1J5WVc1emJHRjBaVmduSUgwdUlGeHVYRzRnSUZObGRDQmdMblpoYkhWbFZIbHdaVTFoY0dBZ1lYTWdZVzRnYjJKcVpXTjBJR3RsZVM5MllXeDFaU0J0WVhBZ2RHOGdjbVYwZFhKdUlHRWdkbUZzZFdVZ2RIbHdaU0IzYVhSb1hHNGdJR0JuWlhSV1lXeDFaVlI1Y0dVb2EyVjVLV0FnS0d0bGVTQjNhV3hzSUdKbElHMWhjSEJsWkNCaFkyTnZjbVJwYm1jZ2RHOGdZSE4wWVhSbFRXRndZQ2xjYmlvdlhHNWNibU52Ym5OMElHMWhjRXRsZVNBOUlDaHJaWGtzSUcxaGNDa2dQVDRnYldGd0lEOGdiV0Z3VzJ0bGVWMGdmSHdnYTJWNUlEb2dhMlY1TzF4dVhHNWxlSEJ2Y25RZ1pHVm1ZWFZzZENBb2IzQjBhVzl1Y3lrZ1BUNGdlMXh1SUNBdktseHVJQ0FnSUVGa1lYQjBaWElnYVhNZ2MyVjBkR1Z5SUdaMWJtTjBhVzl1WEc1Y2JpQWdJQ0JBY0dGeVlXMGdXMjlpYW1WamRGMDZJRTlpYW1WamRDQjBieUJ6WlhRZ2NISnZjR1Z5ZEdsbGN5QnZibHh1SUNBZ0lFQndZWEpoYlNCYmIySnFaV04wWFRvZ1MyVjVMM1poYkhWbElIQnliM0JsY25ScFpYTWdkRzhnYzJWMFhHNGdJQ292WEc0Z0lHTnZibk4wSUdGa1lYQjBaWElnUFNBb1pXeGxiV1Z1ZEN3Z2NISnZjSE1zSUdSaGRHRXBJRDArSUh0Y2JpQWdJQ0JwWmlBb2IzQjBhVzl1Y3k1emRHRjBaVTFoY0NrZ2UxeHVJQ0FnSUNBZ0x5OGdWSEpoYm5Oc1lYUmxJSEJ5YjNCelhHNGdJQ0FnSUNCbWIzSWdLR3hsZENCclpYa2dhVzRnY0hKdmNITXBJSHRjYmlBZ0lDQWdJQ0FnYVdZZ0tIQnliM0J6TG1oaGMwOTNibEJ5YjNCbGNuUjVLR3RsZVNrcElIdGNiaUFnSUNBZ0lDQWdJQ0JqYjI1emRDQnRZWEJ3WldSTFpYa2dQU0J0WVhCTFpYa29hMlY1TENCdmNIUnBiMjV6TG5OMFlYUmxUV0Z3S1R0Y2JpQWdJQ0FnSUNBZ0lDQmNiaUFnSUNBZ0lDQWdJQ0JwWmlBb2JXRndjR1ZrUzJWNUlDRTlQU0JyWlhrcElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUhCeWIzQnpXMjFoY0hCbFpFdGxlVjBnUFNCd2NtOXdjMXRyWlhsZE8xeHVJQ0FnSUNBZ0lDQWdJQ0FnWkdWc1pYUmxJSEJ5YjNCelcydGxlVjA3WEc0Z0lDQWdJQ0FnSUNBZ2ZWeHVJQ0FnSUNBZ0lDQjlYRzRnSUNBZ0lDQjlYRzRnSUNBZ2ZWeHVYRzRnSUNBZ2NtVjBkWEp1SUc5d2RHbHZibk11YzJWMGRHVnlLR1ZzWlcxbGJuUXNJSEJ5YjNCekxDQmtZWFJoS1R0Y2JpQWdmVHRjYmx4dUlDQmhaR0Z3ZEdWeUxtZGxkQ0E5SUNobGJHVnRaVzUwTENCclpYa3BJRDArSUc5d2RHbHZibk11WjJWMGRHVnlLR1ZzWlcxbGJuUXNJRzFoY0V0bGVTaHJaWGtzSUc5d2RHbHZibk11YzNSaGRHVk5ZWEFwS1R0Y2JpQWdZV1JoY0hSbGNpNWphR1ZqYTFaaGJIVmxWSGx3WlNBOUlDaHJaWGtwSUQwK0lHOXdkR2x2Ym5NdWRtRnNkV1ZVZVhCbFRXRndJRDhnYjNCMGFXOXVjeTUyWVd4MVpWUjVjR1ZOWVhCYmJXRndTMlY1S0d0bGVTd2diM0IwYVc5dWN5NXpkR0YwWlUxaGNDbGRJRG9nWm1Gc2MyVTdYRzRnSUdGa1lYQjBaWEl1WjJWMFJXeGxiV1Z1ZEVSaGRHRWdQU0J2Y0hScGIyNXpMbWRsZEVWc1pXMWxiblJFWVhSaE8xeHVYRzRnSUhKbGRIVnliaUJoWkdGd2RHVnlPMXh1ZlRzaVhYMD1cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2FkYXB0ZXIvYWRhcHRlci5qc1xuICoqIG1vZHVsZSBpZCA9IDEyXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzLnNldHRlciA9IGV4cG9ydHMuZ2V0dGVyID0gdW5kZWZpbmVkO1xuXG52YXIgX2FkYXB0ZXIgPSByZXF1aXJlKCcuL2FkYXB0ZXInKTtcblxudmFyIF9hZGFwdGVyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2FkYXB0ZXIpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG52YXIgZ2V0dGVyID0gZXhwb3J0cy5nZXR0ZXIgPSBmdW5jdGlvbiAoZWxlbWVudCwga2V5KSB7XG4gIHJldHVybiBlbGVtZW50LmdldEF0dHJpYnV0ZShrZXkpO1xufTtcbnZhciBzZXR0ZXIgPSBleHBvcnRzLnNldHRlciA9IGZ1bmN0aW9uIChlbGVtZW50LCBwcm9wcykge1xuICBmb3IgKHZhciBrZXkgaW4gcHJvcHMpIHtcbiAgICBpZiAocHJvcHMuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoa2V5LCBwcm9wc1trZXldKTtcbiAgICB9XG4gIH1cbn07XG5cbmV4cG9ydHMuZGVmYXVsdCA9ICgwLCBfYWRhcHRlcjIuZGVmYXVsdCkoeyBnZXR0ZXI6IGdldHRlciwgc2V0dGVyOiBzZXR0ZXIgfSk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5OeVl5OWhaR0Z3ZEdWeUwyRjBkSEl0WVdSaGNIUmxjaTVxY3lKZExDSnVZVzFsY3lJNlcxMHNJbTFoY0hCcGJtZHpJam9pT3pzN096dEJRVUZCT3pzN096czdRVUZGVHl4SlFVRk5MREJDUVVGVExGVkJRVU1zVDBGQlJDeEZRVUZWTEVkQlFWWTdRVUZCUVN4VFFVRnJRaXhSUVVGUkxGbEJRVklzUTBGQmNVSXNSMEZCY2tJc1EwRkJiRUk3UVVGQlFTeERRVUZtTzBGQlEwRXNTVUZCVFN3d1FrRkJVeXhWUVVGRExFOUJRVVFzUlVGQlZTeExRVUZXTEVWQlFXOUNPMEZCUTNoRExFOUJRVXNzU1VGQlNTeEhRVUZVTEVsQlFXZENMRXRCUVdoQ0xFVkJRWFZDTzBGQlEzSkNMRkZCUVVrc1RVRkJUU3hqUVVGT0xFTkJRWEZDTEVkQlFYSkNMRU5CUVVvc1JVRkJLMEk3UVVGRE4wSXNZMEZCVVN4WlFVRlNMRU5CUVhGQ0xFZEJRWEpDTEVWQlFUQkNMRTFCUVUwc1IwRkJUaXhEUVVFeFFqdEJRVU5FTzBGQlEwWTdRVUZEUml4RFFVNU5PenRyUWtGUlVTeDFRa0ZCWXl4RlFVRkZMR05CUVVZc1JVRkJWU3hqUVVGV0xFVkJRV1FzUXlJc0ltWnBiR1VpT2lKaGRIUnlMV0ZrWVhCMFpYSXVhbk1pTENKemIzVnlZMlZTYjI5MElqb2lMMVZ6WlhKekwyMWhkSFJ3WlhKeWVTOVRhWFJsY3k5d2IzQnRiM1JwYjI0aUxDSnpiM1Z5WTJWelEyOXVkR1Z1ZENJNld5SnBiWEJ2Y25RZ1kzSmxZWFJsUVdSaGNIUmxjaUJtY205dElDY3VMMkZrWVhCMFpYSW5PMXh1WEc1bGVIQnZjblFnWTI5dWMzUWdaMlYwZEdWeUlEMGdLR1ZzWlcxbGJuUXNJR3RsZVNrZ1BUNGdaV3hsYldWdWRDNW5aWFJCZEhSeWFXSjFkR1VvYTJWNUtUdGNibVY0Y0c5eWRDQmpiMjV6ZENCelpYUjBaWElnUFNBb1pXeGxiV1Z1ZEN3Z2NISnZjSE1wSUQwK0lIdGNiaUFnWm05eUlDaHNaWFFnYTJWNUlHbHVJSEJ5YjNCektTQjdYRzRnSUNBZ2FXWWdLSEJ5YjNCekxtaGhjMDkzYmxCeWIzQmxjblI1S0d0bGVTa3BJSHRjYmlBZ0lDQWdJR1ZzWlcxbGJuUXVjMlYwUVhSMGNtbGlkWFJsS0d0bGVTd2djSEp2Y0hOYmEyVjVYU2s3WEc0Z0lDQWdmVnh1SUNCOVhHNTlPMXh1WEc1bGVIQnZjblFnWkdWbVlYVnNkQ0JqY21WaGRHVkJaR0Z3ZEdWeUtIc2daMlYwZEdWeUxDQnpaWFIwWlhJZ2ZTazdYRzRpWFgwPVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvYWRhcHRlci9hdHRyLWFkYXB0ZXIuanNcbiAqKiBtb2R1bGUgaWQgPSAxM1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX3N0YXRlTWFwID0gcmVxdWlyZSgnLi9jc3Mvc3RhdGUtbWFwJyk7XG5cbnZhciBfc3RhdGVNYXAyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfc3RhdGVNYXApO1xuXG52YXIgX3ZhbHVlVHlwZU1hcCA9IHJlcXVpcmUoJy4vY3NzL3ZhbHVlLXR5cGUtbWFwJyk7XG5cbnZhciBfdmFsdWVUeXBlTWFwMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3ZhbHVlVHlwZU1hcCk7XG5cbnZhciBfYnVpbGQgPSByZXF1aXJlKCcuL2Nzcy9idWlsZCcpO1xuXG52YXIgX2J1aWxkMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2J1aWxkKTtcblxudmFyIF9wcmVmaXhlciA9IHJlcXVpcmUoJy4vY3NzL3ByZWZpeGVyJyk7XG5cbnZhciBfcHJlZml4ZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcHJlZml4ZXIpO1xuXG52YXIgX3RyYW5zZm9ybVByb3BzID0gcmVxdWlyZSgnLi9jc3MvdHJhbnNmb3JtLXByb3BzJyk7XG5cbnZhciBfdHJhbnNmb3JtUHJvcHMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfdHJhbnNmb3JtUHJvcHMpO1xuXG52YXIgX2FkYXB0ZXIgPSByZXF1aXJlKCcuL2FkYXB0ZXInKTtcblxudmFyIF9hZGFwdGVyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2FkYXB0ZXIpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5leHBvcnRzLmRlZmF1bHQgPSAoMCwgX2FkYXB0ZXIyLmRlZmF1bHQpKHtcbiAgZ2V0dGVyOiBmdW5jdGlvbiAoZWxlbWVudCwga2V5KSB7XG4gICAgcmV0dXJuICFfdHJhbnNmb3JtUHJvcHMyLmRlZmF1bHRba2V5XSA/IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGVsZW1lbnQsIG51bGwpWygwLCBfcHJlZml4ZXIyLmRlZmF1bHQpKGtleSldIDogX3ZhbHVlVHlwZU1hcDIuZGVmYXVsdFtrZXldLmRlZmF1bHRQcm9wcy5jdXJyZW50IHx8IDA7XG4gIH0sXG4gIHNldHRlcjogZnVuY3Rpb24gKGVsZW1lbnQsIHByb3BzKSB7XG4gICAgcmV0dXJuIGVsZW1lbnQuc3R5bGUuY3NzVGV4dCArPSAoMCwgX2J1aWxkMi5kZWZhdWx0KShwcm9wcyk7XG4gIH0sXG4gIHZhbHVlVHlwZU1hcDogX3ZhbHVlVHlwZU1hcDIuZGVmYXVsdCxcbiAgc3RhdGVNYXA6IF9zdGF0ZU1hcDIuZGVmYXVsdFxufSk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5OeVl5OWhaR0Z3ZEdWeUwyTnpjeTFoWkdGd2RHVnlMbXB6SWwwc0ltNWhiV1Z6SWpwYlhTd2liV0Z3Y0dsdVozTWlPaUk3T3pzN1FVRkJRVHM3T3p0QlFVTkJPenM3TzBGQlEwRTdPenM3UVVGRFFUczdPenRCUVVOQk96czdPMEZCUTBFN096czdPenRyUWtGRlpTeDFRa0ZCWXp0QlFVTXpRaXhWUVVGUkxGVkJRVU1zVDBGQlJDeEZRVUZWTEVkQlFWWXNSVUZCYTBJN1FVRkRlRUlzVjBGQlVTeERRVUZETEhsQ1FVRmxMRWRCUVdZc1EwRkJSaXhIUVVOTUxFOUJRVThzWjBKQlFWQXNRMEZCZDBJc1QwRkJlRUlzUlVGQmFVTXNTVUZCYWtNc1JVRkJkVU1zZDBKQlFWTXNSMEZCVkN4RFFVRjJReXhEUVVSTExFZEJSVXdzZFVKQlFXRXNSMEZCWWl4RlFVRnJRaXhaUVVGc1FpeERRVUVyUWl4UFFVRXZRaXhKUVVFd1F5eERRVVkxUXp0QlFVZEVMRWRCVERCQ08wRkJUVE5DTEZWQlFWRXNWVUZCUXl4UFFVRkVMRVZCUVZVc1MwRkJWanRCUVVGQkxGZEJRVzlDTEZGQlFWRXNTMEZCVWl4RFFVRmpMRTlCUVdRc1NVRkJlVUlzY1VKQlFXOUNMRXRCUVhCQ0xFTkJRVGRETzBGQlFVRXNSMEZPYlVJN1FVRlBNMElzYzBOQlVESkNPMEZCVVROQ08wRkJVakpDTEVOQlFXUXNReUlzSW1acGJHVWlPaUpqYzNNdFlXUmhjSFJsY2k1cWN5SXNJbk52ZFhKalpWSnZiM1FpT2lJdlZYTmxjbk12YldGMGRIQmxjbko1TDFOcGRHVnpMM0J2Y0cxdmRHbHZiaUlzSW5OdmRYSmpaWE5EYjI1MFpXNTBJanBiSW1sdGNHOXlkQ0J6ZEdGMFpVMWhjQ0JtY205dElDY3VMMk56Y3k5emRHRjBaUzF0WVhBbk8xeHVhVzF3YjNKMElIWmhiSFZsVkhsd1pVMWhjQ0JtY205dElDY3VMMk56Y3k5MllXeDFaUzEwZVhCbExXMWhjQ2M3WEc1cGJYQnZjblFnWW5WcGJHUlFjbTl3WlhKMGVWTjBjbWx1WnlCbWNtOXRJQ2N1TDJOemN5OWlkV2xzWkNjN1hHNXBiWEJ2Y25RZ2NISmxabWw0WlhJZ1puSnZiU0FuTGk5amMzTXZjSEpsWm1sNFpYSW5PMXh1YVcxd2IzSjBJSFJ5WVc1elptOXliVkJ5YjNCeklHWnliMjBnSnk0dlkzTnpMM1J5WVc1elptOXliUzF3Y205d2N5YzdYRzVwYlhCdmNuUWdZM0psWVhSbFFXUmhjSFJsY2lCbWNtOXRJQ2N1TDJGa1lYQjBaWEluTzF4dVhHNWxlSEJ2Y25RZ1pHVm1ZWFZzZENCamNtVmhkR1ZCWkdGd2RHVnlLSHRjYmlBZ1oyVjBkR1Z5T2lBb1pXeGxiV1Z1ZEN3Z2EyVjVLU0E5UGlCN1hHNGdJQ0FnY21WMGRYSnVJQ2doZEhKaGJuTm1iM0p0VUhKdmNITmJhMlY1WFNrZ1AxeHVJQ0FnSUNBZ2QybHVaRzkzTG1kbGRFTnZiWEIxZEdWa1UzUjViR1VvWld4bGJXVnVkQ3dnYm5Wc2JDbGJjSEpsWm1sNFpYSW9hMlY1S1YwZ09seHVJQ0FnSUNBZ2RtRnNkV1ZVZVhCbFRXRndXMnRsZVYwdVpHVm1ZWFZzZEZCeWIzQnpMbU4xY25KbGJuUWdmSHdnTUR0Y2JpQWdmU3hjYmlBZ2MyVjBkR1Z5T2lBb1pXeGxiV1Z1ZEN3Z2NISnZjSE1wSUQwK0lHVnNaVzFsYm5RdWMzUjViR1V1WTNOelZHVjRkQ0FyUFNCaWRXbHNaRkJ5YjNCbGNuUjVVM1J5YVc1bktIQnliM0J6S1N4Y2JpQWdkbUZzZFdWVWVYQmxUV0Z3TEZ4dUlDQnpkR0YwWlUxaGNGeHVmU2s3WEc1Y2JpSmRmUT09XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9hZGFwdGVyL2Nzcy1hZGFwdGVyLmpzXG4gKiogbW9kdWxlIGlkID0gMTRcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF9hZGFwdGVyID0gcmVxdWlyZSgnLi9hZGFwdGVyJyk7XG5cbnZhciBfYWRhcHRlcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9hZGFwdGVyKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZXhwb3J0cy5kZWZhdWx0ID0gKDAsIF9hZGFwdGVyMi5kZWZhdWx0KSh7XG4gIGdldHRlcjogZnVuY3Rpb24gKG9iamVjdCwga2V5KSB7XG4gICAgcmV0dXJuIG9iamVjdFtrZXldO1xuICB9LFxuICBzZXR0ZXI6IGZ1bmN0aW9uIChvYmplY3QsIHByb3BzKSB7XG4gICAgZm9yICh2YXIga2V5IGluIHByb3BzKSB7XG4gICAgICBpZiAocHJvcHMuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICBvYmplY3Rba2V5XSA9IHByb3BzW2tleV07XG4gICAgICB9XG4gICAgfVxuICB9XG59KTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbk55WXk5aFpHRndkR1Z5TDI5aWFtVmpkQzFoWkdGd2RHVnlMbXB6SWwwc0ltNWhiV1Z6SWpwYlhTd2liV0Z3Y0dsdVozTWlPaUk3T3pzN1FVRkJRVHM3T3pzN08ydENRVVZsTEhWQ1FVRmpPMEZCUXpOQ0xGVkJRVkVzVlVGQlF5eE5RVUZFTEVWQlFWTXNSMEZCVkR0QlFVRkJMRmRCUVdsQ0xFOUJRVThzUjBGQlVDeERRVUZxUWp0QlFVRkJMRWRCUkcxQ08wRkJSVE5DTEZWQlFWRXNWVUZCUXl4TlFVRkVMRVZCUVZNc1MwRkJWQ3hGUVVGdFFqdEJRVU42UWl4VFFVRkxMRWxCUVVrc1IwRkJWQ3hKUVVGblFpeExRVUZvUWl4RlFVRjFRanRCUVVOeVFpeFZRVUZKTEUxQlFVMHNZMEZCVGl4RFFVRnhRaXhIUVVGeVFpeERRVUZLTEVWQlFTdENPMEZCUXpkQ0xHVkJRVThzUjBGQlVDeEpRVUZqTEUxQlFVMHNSMEZCVGl4RFFVRmtPMEZCUTBRN1FVRkRSanRCUVVOR08wRkJVakJDTEVOQlFXUXNReUlzSW1acGJHVWlPaUp2WW1wbFkzUXRZV1JoY0hSbGNpNXFjeUlzSW5OdmRYSmpaVkp2YjNRaU9pSXZWWE5sY25NdmJXRjBkSEJsY25KNUwxTnBkR1Z6TDNCdmNHMXZkR2x2YmlJc0luTnZkWEpqWlhORGIyNTBaVzUwSWpwYkltbHRjRzl5ZENCamNtVmhkR1ZCWkdGd2RHVnlJR1p5YjIwZ0p5NHZZV1JoY0hSbGNpYzdYRzVjYm1WNGNHOXlkQ0JrWldaaGRXeDBJR055WldGMFpVRmtZWEIwWlhJb2UxeHVJQ0JuWlhSMFpYSTZJQ2h2WW1wbFkzUXNJR3RsZVNrZ1BUNGdiMkpxWldOMFcydGxlVjBzWEc0Z0lITmxkSFJsY2pvZ0tHOWlhbVZqZEN3Z2NISnZjSE1wSUQwK0lIdGNiaUFnSUNCbWIzSWdLR3hsZENCclpYa2dhVzRnY0hKdmNITXBJSHRjYmlBZ0lDQWdJR2xtSUNod2NtOXdjeTVvWVhOUGQyNVFjbTl3WlhKMGVTaHJaWGtwS1NCN1hHNGdJQ0FnSUNBZ0lHOWlhbVZqZEZ0clpYbGRJRDBnY0hKdmNITmJhMlY1WFR0Y2JpQWdJQ0FnSUgxY2JpQWdJQ0I5WEc0Z0lIMWNibjBwT3lKZGZRPT1cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2FkYXB0ZXIvb2JqZWN0LWFkYXB0ZXIuanNcbiAqKiBtb2R1bGUgaWQgPSAxNVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0cy5nZXRFbGVtZW50RGF0YSA9IGV4cG9ydHMuc2V0dGVyID0gZXhwb3J0cy5nZXR0ZXIgPSB1bmRlZmluZWQ7XG5cbnZhciBfc3RhdGVNYXAgPSByZXF1aXJlKCcuL2Nzcy9zdGF0ZS1tYXAnKTtcblxudmFyIF9zdGF0ZU1hcDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9zdGF0ZU1hcCk7XG5cbnZhciBfdmFsdWVUeXBlTWFwID0gcmVxdWlyZSgnLi9zdmcvdmFsdWUtdHlwZS1tYXAnKTtcblxudmFyIF92YWx1ZVR5cGVNYXAyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfdmFsdWVUeXBlTWFwKTtcblxudmFyIF90cmFuc2Zvcm1Qcm9wcyA9IHJlcXVpcmUoJy4vY3NzL3RyYW5zZm9ybS1wcm9wcycpO1xuXG52YXIgX3RyYW5zZm9ybVByb3BzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3RyYW5zZm9ybVByb3BzKTtcblxudmFyIF9idWlsZCA9IHJlcXVpcmUoJy4vc3ZnL2J1aWxkJyk7XG5cbnZhciBfYnVpbGQyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfYnVpbGQpO1xuXG52YXIgX2F0dHJBZGFwdGVyID0gcmVxdWlyZSgnLi9hdHRyLWFkYXB0ZXInKTtcblxudmFyIF9hZGFwdGVyID0gcmVxdWlyZSgnLi9hZGFwdGVyJyk7XG5cbnZhciBfYWRhcHRlcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9hZGFwdGVyKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxudmFyIGdldHRlciA9IGV4cG9ydHMuZ2V0dGVyID0gZnVuY3Rpb24gKGVsZW1lbnQsIGtleSkge1xuICByZXR1cm4gIV90cmFuc2Zvcm1Qcm9wczIuZGVmYXVsdFtrZXldID8gKDAsIF9hdHRyQWRhcHRlci5nZXR0ZXIpKGVsZW1lbnQsIGtleSkgOiBfdmFsdWVUeXBlTWFwMi5kZWZhdWx0W2tleV0gJiYgX3ZhbHVlVHlwZU1hcDIuZGVmYXVsdFtrZXldLmRlZmF1bHRQcm9wcyA/IF92YWx1ZVR5cGVNYXAyLmRlZmF1bHRba2V5XS5kZWZhdWx0UHJvcHMuY3VycmVudCA6IDA7XG59O1xudmFyIHNldHRlciA9IGV4cG9ydHMuc2V0dGVyID0gZnVuY3Rpb24gKGVsZW1lbnQsIHByb3BzLCBkYXRhKSB7XG4gIHJldHVybiAoMCwgX2F0dHJBZGFwdGVyLnNldHRlcikoZWxlbWVudCwgKDAsIF9idWlsZDIuZGVmYXVsdCkocHJvcHMsIGRhdGEpKTtcbn07XG52YXIgZ2V0RWxlbWVudERhdGEgPSBleHBvcnRzLmdldEVsZW1lbnREYXRhID0gZnVuY3Rpb24gKGVsZW1lbnQpIHtcbiAgdmFyIGJCb3ggPSBlbGVtZW50LmdldEJCb3goKTtcbiAgcmV0dXJuIHtcbiAgICB4OiBiQm94LngsXG4gICAgeTogYkJveC55LFxuICAgIHdpZHRoOiBiQm94LndpZHRoLFxuICAgIGhlaWdodDogYkJveC5oZWlnaHRcbiAgfTtcbn07XG5cbmV4cG9ydHMuZGVmYXVsdCA9ICgwLCBfYWRhcHRlcjIuZGVmYXVsdCkoeyBnZXR0ZXI6IGdldHRlciwgc2V0dGVyOiBzZXR0ZXIsIHN0YXRlTWFwOiBfc3RhdGVNYXAyLmRlZmF1bHQsIHZhbHVlVHlwZU1hcDogX3ZhbHVlVHlwZU1hcDIuZGVmYXVsdCwgZ2V0RWxlbWVudERhdGE6IGdldEVsZW1lbnREYXRhIH0pO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluTnlZeTloWkdGd2RHVnlMM04yWnkxaFpHRndkR1Z5TG1weklsMHNJbTVoYldWeklqcGJYU3dpYldGd2NHbHVaM01pT2lJN096czdPMEZCUVVFN096czdRVUZEUVRzN096dEJRVU5CT3pzN08wRkJRMEU3T3pzN1FVRkRRVHM3UVVGRFFUczdPenM3TzBGQlJVOHNTVUZCVFN3d1FrRkJVeXhWUVVGRExFOUJRVVFzUlVGQlZTeEhRVUZXTzBGQlFVRXNVMEZCYlVJc1EwRkJReXg1UWtGQlpTeEhRVUZtTEVOQlFVWXNSMEZCZVVJc2VVSkJRVmNzVDBGQldDeEZRVUZ2UWl4SFFVRndRaXhEUVVGNlFpeEhRVUZ4UkN4MVFrRkJZU3hIUVVGaUxFdEJRWEZDTEhWQ1FVRmhMRWRCUVdJc1JVRkJhMElzV1VGQmVFTXNSMEZCZDBRc2RVSkJRV0VzUjBGQllpeEZRVUZyUWl4WlFVRnNRaXhEUVVFclFpeFBRVUYyUml4SFFVRnBSeXhEUVVGMlN6dEJRVUZCTEVOQlFXWTdRVUZEUVN4SlFVRk5MREJDUVVGVExGVkJRVU1zVDBGQlJDeEZRVUZWTEV0QlFWWXNSVUZCYVVJc1NVRkJha0k3UVVGQlFTeFRRVUV3UWl4NVFrRkJWeXhQUVVGWUxFVkJRVzlDTEhGQ1FVRk5MRXRCUVU0c1JVRkJZU3hKUVVGaUxFTkJRWEJDTEVOQlFURkNPMEZCUVVFc1EwRkJaanRCUVVOQkxFbEJRVTBzTUVOQlFXbENMRlZCUVVNc1QwRkJSQ3hGUVVGaE8wRkJRM3BETEUxQlFVMHNUMEZCVHl4UlFVRlJMRTlCUVZJc1JVRkJZanRCUVVOQkxGTkJRVTg3UVVGRFRDeFBRVUZITEV0QlFVc3NRMEZFU0R0QlFVVk1MRTlCUVVjc1MwRkJTeXhEUVVaSU8wRkJSMHdzVjBGQlR5eExRVUZMTEV0QlNGQTdRVUZKVEN4WlFVRlJMRXRCUVVzN1FVRktVaXhIUVVGUU8wRkJUVVFzUTBGU1RUczdhMEpCVlZFc2RVSkJRV01zUlVGQlJTeGpRVUZHTEVWQlFWVXNZMEZCVml4RlFVRnJRaXcwUWtGQmJFSXNSVUZCTkVJc2IwTkJRVFZDTEVWQlFUQkRMRGhDUVVFeFF5eEZRVUZrTEVNaUxDSm1hV3hsSWpvaWMzWm5MV0ZrWVhCMFpYSXVhbk1pTENKemIzVnlZMlZTYjI5MElqb2lMMVZ6WlhKekwyMWhkSFJ3WlhKeWVTOVRhWFJsY3k5d2IzQnRiM1JwYjI0aUxDSnpiM1Z5WTJWelEyOXVkR1Z1ZENJNld5SnBiWEJ2Y25RZ2MzUmhkR1ZOWVhBZ1puSnZiU0FuTGk5amMzTXZjM1JoZEdVdGJXRndKenRjYm1sdGNHOXlkQ0IyWVd4MVpWUjVjR1ZOWVhBZ1puSnZiU0FuTGk5emRtY3ZkbUZzZFdVdGRIbHdaUzF0WVhBbk8xeHVhVzF3YjNKMElIUnlZVzV6Wm05eWJWQnliM0J6SUdaeWIyMGdKeTR2WTNOekwzUnlZVzV6Wm05eWJTMXdjbTl3Y3ljN1hHNXBiWEJ2Y25RZ1luVnBiR1FnWm5KdmJTQW5MaTl6ZG1jdlluVnBiR1FuTzF4dWFXMXdiM0owSUhzZ1oyVjBkR1Z5SUdGeklHRjBkSEpIWlhSMFpYSXNJSE5sZEhSbGNpQmhjeUJoZEhSeVUyVjBkR1Z5SUgwZ1puSnZiU0FuTGk5aGRIUnlMV0ZrWVhCMFpYSW5PMXh1YVcxd2IzSjBJR055WldGMFpVRmtZWEIwWlhJZ1puSnZiU0FuTGk5aFpHRndkR1Z5Snp0Y2JseHVaWGh3YjNKMElHTnZibk4wSUdkbGRIUmxjaUE5SUNobGJHVnRaVzUwTENCclpYa3BJRDArSUNnaGRISmhibk5tYjNKdFVISnZjSE5iYTJWNVhTa2dQeUJoZEhSeVIyVjBkR1Z5S0dWc1pXMWxiblFzSUd0bGVTa2dPaUFvZG1Gc2RXVlVlWEJsVFdGd1cydGxlVjBnSmlZZ2RtRnNkV1ZVZVhCbFRXRndXMnRsZVYwdVpHVm1ZWFZzZEZCeWIzQnpLU0EvSUhaaGJIVmxWSGx3WlUxaGNGdHJaWGxkTG1SbFptRjFiSFJRY205d2N5NWpkWEp5Wlc1MElEb2dNRHRjYm1WNGNHOXlkQ0JqYjI1emRDQnpaWFIwWlhJZ1BTQW9aV3hsYldWdWRDd2djSEp2Y0hNc0lHUmhkR0VwSUQwK0lHRjBkSEpUWlhSMFpYSW9aV3hsYldWdWRDd2dZblZwYkdRb2NISnZjSE1zSUdSaGRHRXBLVHRjYm1WNGNHOXlkQ0JqYjI1emRDQm5aWFJGYkdWdFpXNTBSR0YwWVNBOUlDaGxiR1Z0Wlc1MEtTQTlQaUI3WEc0Z0lHTnZibk4wSUdKQ2IzZ2dQU0JsYkdWdFpXNTBMbWRsZEVKQ2IzZ29LVHRjYmlBZ2NtVjBkWEp1SUh0Y2JpQWdJQ0I0T2lCaVFtOTRMbmdzWEc0Z0lDQWdlVG9nWWtKdmVDNTVMRnh1SUNBZ0lIZHBaSFJvT2lCaVFtOTRMbmRwWkhSb0xDQmNiaUFnSUNCb1pXbG5hSFE2SUdKQ2IzZ3VhR1ZwWjJoMFhHNGdJSDA3WEc1OU8xeHVYRzVsZUhCdmNuUWdaR1ZtWVhWc2RDQmpjbVZoZEdWQlpHRndkR1Z5S0hzZ1oyVjBkR1Z5TENCelpYUjBaWElzSUhOMFlYUmxUV0Z3TENCMllXeDFaVlI1Y0dWTllYQXNJR2RsZEVWc1pXMWxiblJFWVhSaElIMHBPMXh1SWwxOVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvYWRhcHRlci9zdmctYWRhcHRlci5qc1xuICoqIG1vZHVsZSBpZCA9IDE2XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07XG5cbnZhciBfYnVpbGQgPSByZXF1aXJlKCcuL3N2Zy1wYXRoL2J1aWxkJyk7XG5cbnZhciBfYnVpbGQyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfYnVpbGQpO1xuXG52YXIgX3N0YXRlTWFwID0gcmVxdWlyZSgnLi9jc3Mvc3RhdGUtbWFwJyk7XG5cbnZhciBfc3RhdGVNYXAyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfc3RhdGVNYXApO1xuXG52YXIgX3N2Z0FkYXB0ZXIgPSByZXF1aXJlKCcuL3N2Zy1hZGFwdGVyJyk7XG5cbnZhciBfYWRhcHRlciA9IHJlcXVpcmUoJy4vYWRhcHRlcicpO1xuXG52YXIgX2FkYXB0ZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfYWRhcHRlcik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmV4cG9ydHMuZGVmYXVsdCA9ICgwLCBfYWRhcHRlcjIuZGVmYXVsdCkoe1xuICBnZXR0ZXI6IF9zdmdBZGFwdGVyLmdldHRlcixcbiAgc2V0dGVyOiBmdW5jdGlvbiAoZWxlbWVudCwgcHJvcHMsIG9wdHMpIHtcbiAgICB2YXIgcGF0aExlbmd0aCA9IG9wdHMgPyBvcHRzLnBhdGhMZW5ndGggOiAwO1xuICAgIHJldHVybiAoMCwgX3N2Z0FkYXB0ZXIuc2V0dGVyKShlbGVtZW50LCAoMCwgX2J1aWxkMi5kZWZhdWx0KShwcm9wcywgcGF0aExlbmd0aCksIG9wdHMpO1xuICB9LFxuICBzdGF0ZU1hcDogX3N0YXRlTWFwMi5kZWZhdWx0LFxuICBnZXRFbGVtZW50RGF0YTogZnVuY3Rpb24gKGVsZW1lbnQpIHtcbiAgICByZXR1cm4gX2V4dGVuZHMoeyBwYXRoTGVuZ3RoOiBlbGVtZW50LmdldFRvdGFsTGVuZ3RoKCkgfSwgKDAsIF9zdmdBZGFwdGVyLmdldEVsZW1lbnREYXRhKShlbGVtZW50KSk7XG4gIH1cbn0pO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluTnlZeTloWkdGd2RHVnlMM04yWnkxd1lYUm9MV0ZrWVhCMFpYSXVhbk1pWFN3aWJtRnRaWE1pT2x0ZExDSnRZWEJ3YVc1bmN5STZJanM3T3pzN08wRkJRVUU3T3pzN1FVRkRRVHM3T3p0QlFVTkJPenRCUVVOQk96czdPenM3YTBKQlJXVXNkVUpCUVdNN1FVRkRNMElzTkVKQlJESkNPMEZCUlROQ0xGVkJRVkVzVlVGQlF5eFBRVUZFTEVWQlFWVXNTMEZCVml4RlFVRnBRaXhKUVVGcVFpeEZRVUV3UWp0QlFVTm9ReXhSUVVGTkxHRkJRV0VzVDBGQlR5eExRVUZMTEZWQlFWb3NSMEZCZVVJc1EwRkJOVU03UVVGRFFTeFhRVUZQTEhkQ1FVRlBMRTlCUVZBc1JVRkJaMElzY1VKQlFVMHNTMEZCVGl4RlFVRmhMRlZCUVdJc1EwRkJhRUlzUlVGQk1FTXNTVUZCTVVNc1EwRkJVRHRCUVVORUxFZEJUREJDTzBGQlRUTkNMRGhDUVU0eVFqdEJRVTh6UWl4clFrRkJaMElzVlVGQlF5eFBRVUZFTzBGQlFVRXNjMEpCUVdkQ0xGbEJRVmtzVVVGQlVTeGpRVUZTTEVWQlFUVkNMRWxCUVhsRUxHZERRVUZsTEU5QlFXWXNRMEZCZWtRN1FVRkJRVHRCUVZCWExFTkJRV1FzUXlJc0ltWnBiR1VpT2lKemRtY3RjR0YwYUMxaFpHRndkR1Z5TG1weklpd2ljMjkxY21ObFVtOXZkQ0k2SWk5VmMyVnljeTl0WVhSMGNHVnljbmt2VTJsMFpYTXZjRzl3Ylc5MGFXOXVJaXdpYzI5MWNtTmxjME52Ym5SbGJuUWlPbHNpYVcxd2IzSjBJR0oxYVd4a0lHWnliMjBnSnk0dmMzWm5MWEJoZEdndlluVnBiR1FuTzF4dWFXMXdiM0owSUhOMFlYUmxUV0Z3SUdaeWIyMGdKeTR2WTNOekwzTjBZWFJsTFcxaGNDYzdYRzVwYlhCdmNuUWdleUJuWlhSMFpYSXNJSE5sZEhSbGNpd2daMlYwUld4bGJXVnVkRVJoZEdFZ2ZTQm1jbTl0SUNjdUwzTjJaeTFoWkdGd2RHVnlKenRjYm1sdGNHOXlkQ0JqY21WaGRHVkJaR0Z3ZEdWeUlHWnliMjBnSnk0dllXUmhjSFJsY2ljN1hHNWNibVY0Y0c5eWRDQmtaV1poZFd4MElHTnlaV0YwWlVGa1lYQjBaWElvZTF4dUlDQm5aWFIwWlhJc1hHNGdJSE5sZEhSbGNqb2dLR1ZzWlcxbGJuUXNJSEJ5YjNCekxDQnZjSFJ6S1NBOVBpQjdYRzRnSUNBZ1kyOXVjM1FnY0dGMGFFeGxibWQwYUNBOUlHOXdkSE1nUHlCdmNIUnpMbkJoZEdoTVpXNW5kR2dnT2lBd08xeHVJQ0FnSUhKbGRIVnliaUJ6WlhSMFpYSW9aV3hsYldWdWRDd2dZblZwYkdRb2NISnZjSE1zSUhCaGRHaE1aVzVuZEdncExDQnZjSFJ6S1R0Y2JpQWdmU3hjYmlBZ2MzUmhkR1ZOWVhBc1hHNGdJR2RsZEVWc1pXMWxiblJFWVhSaE9pQW9aV3hsYldWdWRDa2dQVDRnS0hzZ2NHRjBhRXhsYm1kMGFEb2daV3hsYldWdWRDNW5aWFJVYjNSaGJFeGxibWQwYUNncExDQXVMaTVuWlhSRmJHVnRaVzUwUkdGMFlTaGxiR1Z0Wlc1MEtTQjlLVnh1ZlNrN1hHNGlYWDA9XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9hZGFwdGVyL3N2Zy1wYXRoLWFkYXB0ZXIuanNcbiAqKiBtb2R1bGUgaWQgPSAxN1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX2NyZWF0ZUVhc2luZyA9IHJlcXVpcmUoJy4vY3JlYXRlLWVhc2luZycpO1xuXG52YXIgX2NyZWF0ZUVhc2luZzIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jcmVhdGVFYXNpbmcpO1xuXG52YXIgX2NyZWF0ZUJlemllciA9IHJlcXVpcmUoJy4vY3JlYXRlLWJlemllcicpO1xuXG52YXIgX2NyZWF0ZUJlemllcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jcmVhdGVCZXppZXIpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG4vLyBWYWx1ZXNcbi8qXG4gIEVhc2luZyBmdW5jdGlvbnNcbiAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBcbiAgR2VuZXJhdGVzIGFuZCBwcm92aWRlcyBlYXNpbmcgZnVuY3Rpb25zIGJhc2VkIG9uIGJhc2VGdW5jdGlvbiBkZWZpbml0aW9uc1xuICBcbiAgQSBjYWxsIHRvIGVhc2luZ0Z1bmN0aW9uLmdldCgnZnVuY3Rpb25OYW1lJykgcmV0dXJucyBhIGZ1bmN0aW9uIHRoYXQgY2FuIGJlIHBhc3NlZDpcbiAgICBAcGFyYW0gW251bWJlcl06IFByb2dyZXNzIDAtMVxuICAgIEBwYXJhbSBbbnVtYmVyXSAob3B0aW9uYWwpOiBBbXAgbW9kaWZpZXIsIG9ubHkgYWNjZXB0ZWQgaW4gc29tZSBlYXNpbmcgZnVuY3Rpb25zXG4gICAgICAgICAgICAgICAgICBhbmQgaXMgdXNlZCB0byBhZGp1c3Qgb3ZlcmFsbCBzdHJlbmd0aFxuICAgIEByZXR1cm4gW251bWJlcl06IEVhc2VkIHByb2dyZXNzXG4gICAgXG4gIFdlIGNhbiBnZW5lcmF0ZSBuZXcgZnVuY3Rpb25zIGJ5IHNlbmRpbmcgYW4gZWFzaW5nIGZ1bmN0aW9uIHRocm91Z2ggZWFzaW5nRnVuY3Rpb24uZXh0ZW5kKG5hbWUsIG1ldGhvZCkuXG4gIFdoaWNoIHdpbGwgbWFrZSBuYW1lSW4sIG5hbWVPdXQgYW5kIG5hbWVJbk91dCBmdW5jdGlvbnMgYXZhaWxhYmxlIHRvIHVzZS5cbiAgICBcbiAgRWFzaW5nIGZ1bmN0aW9ucyBmcm9tIFJvYmVydCBQZW5uZXJcbiAgaHR0cDovL3d3dy5yb2JlcnRwZW5uZXIuY29tL2Vhc2luZy9cbiAgICBcbiAgQmV6aWVyIGN1cnZlIGludGVycHJldG9yIGNyZWF0ZWQgZnJvbSBHYcOrdGFuIFJlbmF1ZGVhdSdzIG9yaWdpbmFsIEJlemllckVhc2luZyAgXG4gIGh0dHBzOi8vZ2l0aHViLmNvbS9ncmUvYmV6aWVyLWVhc2luZy9ibG9iL21hc3Rlci9pbmRleC5qcyAgXG4gIGh0dHBzOi8vZ2l0aHViLmNvbS9ncmUvYmV6aWVyLWVhc2luZy9ibG9iL21hc3Rlci9MSUNFTlNFXG5cbiAgQW50aWNpcGF0ZSBlYXNpbmcgY3JlYXRlZCBieSBFbGxpb3QgR2lub1xuICBodHRwczovL3R3aXR0ZXIuY29tL0VsbGlvdEdlbm9cbiovXG4vLyBJbXBvcnRzXG52YXIgREVGQVVMVF9CQUNLX1NUUkVOR1RIID0gMS41MjU7XG52YXIgREVGQVVMVF9QT1dfU1RSRU5HVEggPSAyO1xuXG4vKlxuICBFYWNoIG9mIHRoZXNlIGJhc2UgZnVuY3Rpb25zIGlzIGFuIGVhc2VJblxuICBcbiAgT24gaW5pdCwgd2UgdXNlIC5taXJyb3IgYW5kIC5yZXZlcnNlIHRvIGdlbmVyYXRlIGVhc2VJbk91dCBhbmRcbiAgZWFzZU91dCBmdW5jdGlvbnMgcmVzcGVjdGl2ZWx5LlxuKi9cbnZhciBiYXNlRWFzaW5nID0ge1xuICBlYXNlOiBmdW5jdGlvbiAocHJvZ3Jlc3MpIHtcbiAgICB2YXIgc3RyZW5ndGggPSBhcmd1bWVudHMubGVuZ3RoIDw9IDEgfHwgYXJndW1lbnRzWzFdID09PSB1bmRlZmluZWQgPyBERUZBVUxUX1BPV19TVFJFTkdUSCA6IGFyZ3VtZW50c1sxXTtcbiAgICByZXR1cm4gTWF0aC5wb3cocHJvZ3Jlc3MsIHN0cmVuZ3RoKTtcbiAgfSxcbiAgY2lyYzogZnVuY3Rpb24gKHByb2dyZXNzKSB7XG4gICAgcmV0dXJuIDEgLSBNYXRoLnNpbihNYXRoLmFjb3MocHJvZ3Jlc3MpKTtcbiAgfSxcbiAgYmFjazogZnVuY3Rpb24gKHByb2dyZXNzKSB7XG4gICAgdmFyIHN0cmVuZ3RoID0gYXJndW1lbnRzLmxlbmd0aCA8PSAxIHx8IGFyZ3VtZW50c1sxXSA9PT0gdW5kZWZpbmVkID8gREVGQVVMVF9CQUNLX1NUUkVOR1RIIDogYXJndW1lbnRzWzFdO1xuICAgIHJldHVybiBwcm9ncmVzcyAqIHByb2dyZXNzICogKChzdHJlbmd0aCArIDEpICogcHJvZ3Jlc3MgLSBzdHJlbmd0aCk7XG4gIH1cbn07XG5cbi8vIFV0aWxpdHkgZnVuY3Rpb25zXG52YXIgZ2VuZXJhdGVQb3dlckVhc2luZyA9IGZ1bmN0aW9uIChzdHJlbmd0aCkge1xuICByZXR1cm4gZnVuY3Rpb24gKHByb2dyZXNzKSB7XG4gICAgcmV0dXJuIGJhc2VFYXNpbmcuZWFzZShwcm9ncmVzcywgc3RyZW5ndGgpO1xuICB9O1xufTtcblxuWydjdWJpYycsICdxdWFydCcsICdxdWludCddLmZvckVhY2goZnVuY3Rpb24gKGVhc2luZ05hbWUsIGkpIHtcbiAgcmV0dXJuIGJhc2VFYXNpbmdbZWFzaW5nTmFtZV0gPSBnZW5lcmF0ZVBvd2VyRWFzaW5nKGkgKyAzKTtcbn0pO1xuXG4vLyBHZW5lcmF0ZSBpbi9vdXQvaW5PdXQgdmFyaWF0aW9uc1xuZm9yICh2YXIga2V5IGluIGJhc2VFYXNpbmcpIHtcbiAgaWYgKGJhc2VFYXNpbmcuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgIHZhciBlYXNpbmdGdW5jdGlvbiA9ICgwLCBfY3JlYXRlRWFzaW5nMi5kZWZhdWx0KShiYXNlRWFzaW5nW2tleV0pO1xuICAgIGJhc2VFYXNpbmdba2V5ICsgJ0luJ10gPSBlYXNpbmdGdW5jdGlvbi5pbjtcbiAgICBiYXNlRWFzaW5nW2tleSArICdPdXQnXSA9IGVhc2luZ0Z1bmN0aW9uLm91dDtcbiAgICBiYXNlRWFzaW5nW2tleSArICdJbk91dCddID0gZWFzaW5nRnVuY3Rpb24uaW5PdXQ7XG4gIH1cbn1cblxuYmFzZUVhc2luZy5saW5lYXIgPSBmdW5jdGlvbiAocHJvZ3Jlc3MpIHtcbiAgcmV0dXJuIHByb2dyZXNzO1xufTtcbmJhc2VFYXNpbmcuYW50aWNpcGF0ZSA9IGZ1bmN0aW9uIChwcm9ncmVzcykge1xuICB2YXIgc3RyZW5ndGggPSBhcmd1bWVudHMubGVuZ3RoIDw9IDEgfHwgYXJndW1lbnRzWzFdID09PSB1bmRlZmluZWQgPyBERUZBVUxUX0JBQ0tfU1RSRU5HVEggOiBhcmd1bWVudHNbMV07XG4gIHJldHVybiAocHJvZ3Jlc3MgKj0gMikgPCAxID8gMC41ICogYmFzZUVhc2luZy5iYWNrSW4ocHJvZ3Jlc3MsIHN0cmVuZ3RoKSA6IDAuNSAqICgyIC0gTWF0aC5wb3coMiwgLTEwICogKHByb2dyZXNzIC0gMSkpKTtcbn07XG5cbmJhc2VFYXNpbmcuY3JlYXRlVmFyaWF0aW9ucyA9IF9jcmVhdGVFYXNpbmcyLmRlZmF1bHQ7XG5iYXNlRWFzaW5nLmN1YmljQmV6aWVyID0gX2NyZWF0ZUJlemllcjIuZGVmYXVsdDtcbmJhc2VFYXNpbmcubW9kaWZ5ID0gZnVuY3Rpb24gKGVhc2luZykge1xuICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IEFycmF5KF9sZW4gPiAxID8gX2xlbiAtIDEgOiAwKSwgX2tleSA9IDE7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICBhcmdzW19rZXkgLSAxXSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgfVxuXG4gIHJldHVybiBmdW5jdGlvbiAocHJvZ3Jlc3MpIHtcbiAgICByZXR1cm4gZWFzaW5nLmFwcGx5KHVuZGVmaW5lZCwgW3Byb2dyZXNzXS5jb25jYXQoYXJncykpO1xuICB9O1xufTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gYmFzZUVhc2luZztcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbk55WXk5aFkzUnBiMjV6TDJWaGMybHVaeTl3Y21WelpYUXRaV0Z6YVc1bkxtcHpJbDBzSW01aGJXVnpJanBiWFN3aWJXRndjR2x1WjNNaU9pSTdPenM3UVVFd1FrRTdPenM3UVVGRFFUczdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3TzBGQlIwRXNTVUZCVFN4M1FrRkJkMElzUzBGQk9VSTdRVUZEUVN4SlFVRk5MSFZDUVVGMVFpeERRVUUzUWpzN096czdPenM3UVVGUlFTeEpRVUZOTEdGQlFXRTdRVUZEYWtJc1VVRkJUU3hWUVVGRExGRkJRVVE3UVVGQlFTeFJRVUZYTEZGQlFWZ3NlVVJCUVhOQ0xHOUNRVUYwUWp0QlFVRkJMRzlDUVVFclF5eFJRVUV2UXl4RlFVRXlSQ3hSUVVFelJEdEJRVUZCTEVkQlJGYzdRVUZGYWtJc1VVRkJUVHRCUVVGQkxGZEJRVmtzU1VGQlNTeExRVUZMTEVkQlFVd3NRMEZCVXl4TFFVRkxMRWxCUVV3c1EwRkJWU3hSUVVGV0xFTkJRVlFzUTBGQmFFSTdRVUZCUVN4SFFVWlhPMEZCUjJwQ0xGRkJRVTBzVlVGQlF5eFJRVUZFTzBGQlFVRXNVVUZCVnl4UlFVRllMSGxFUVVGelFpeHhRa0ZCZEVJN1FVRkJRU3hYUVVGcFJDeFhRVUZYTEZGQlFWb3NTVUZCZVVJc1EwRkJReXhYUVVGWExFTkJRVm9zU1VGQmFVSXNVVUZCYWtJc1IwRkJORUlzVVVGQmNrUXNRMEZCYUVRN1FVRkJRVHRCUVVoWExFTkJRVzVDT3pzN1FVRlBRU3hKUVVGTkxITkNRVUZ6UWl4VlFVRkRMRkZCUVVRN1FVRkJRU3hUUVVGakxGVkJRVU1zVVVGQlJEdEJRVUZCTEZkQlFXTXNWMEZCVnl4SlFVRllMRU5CUVdkQ0xGRkJRV2hDTEVWQlFUQkNMRkZCUVRGQ0xFTkJRV1E3UVVGQlFTeEhRVUZrTzBGQlFVRXNRMEZCTlVJN08wRkJSVUVzUTBGQlF5eFBRVUZFTEVWQlFWVXNUMEZCVml4RlFVRnRRaXhQUVVGdVFpeEZRVUUwUWl4UFFVRTFRaXhEUVVGdlF5eFZRVUZETEZWQlFVUXNSVUZCWVN4RFFVRmlPMEZCUVVFc1UwRkJiVUlzVjBGQlZ5eFZRVUZZTEVsQlFYbENMRzlDUVVGdlFpeEpRVUZKTEVOQlFYaENMRU5CUVRWRE8wRkJRVUVzUTBGQmNFTTdPenRCUVVkQkxFdEJRVXNzU1VGQlNTeEhRVUZVTEVsQlFXZENMRlZCUVdoQ0xFVkJRVFJDTzBGQlF6RkNMRTFCUVVrc1YwRkJWeXhqUVVGWUxFTkJRVEJDTEVkQlFURkNMRU5CUVVvc1JVRkJiME03UVVGRGJFTXNVVUZCVFN4cFFrRkJhVUlzTkVKQlFYRkNMRmRCUVZjc1IwRkJXQ3hEUVVGeVFpeERRVUYyUWp0QlFVTkJMR1ZCUVdNc1IwRkJaQ3hYUVVGNVFpeGxRVUZsTEVWQlFYaERPMEZCUTBFc1pVRkJZeXhIUVVGa0xGbEJRVEJDTEdWQlFXVXNSMEZCZWtNN1FVRkRRU3hsUVVGakxFZEJRV1FzWTBGQk5FSXNaVUZCWlN4TFFVRXpRenRCUVVORU8wRkJRMFk3TzBGQlJVUXNWMEZCVnl4TlFVRllMRWRCUVc5Q08wRkJRVUVzVTBGQldTeFJRVUZhTzBGQlFVRXNRMEZCY0VJN1FVRkRRU3hYUVVGWExGVkJRVmdzUjBGQmQwSXNWVUZCUXl4UlFVRkVPMEZCUVVFc1RVRkJWeXhSUVVGWUxIbEVRVUZ6UWl4eFFrRkJkRUk3UVVGQlFTeFRRVU55UWl4RFFVRkRMRmxCUVZVc1EwRkJXQ3hKUVVGblFpeERRVUZxUWl4SFFVRnpRaXhOUVVGTkxGZEJRVmNzVFVGQldDeERRVUZyUWl4UlFVRnNRaXhGUVVFMFFpeFJRVUUxUWl4RFFVRTFRaXhIUVVGeFJTeFBRVUZQTEVsQlFVa3NTMEZCU3l4SFFVRk1MRU5CUVZNc1EwRkJWQ3hGUVVGWkxFTkJRVU1zUlVGQlJDeEpRVUZQTEZkQlFWY3NRMEZCYkVJc1EwRkJXaXhEUVVGWUxFTkJSQzlETzBGQlFVRXNRMEZCZUVJN08wRkJSMEVzVjBGQlZ5eG5Ra0ZCV0R0QlFVTkJMRmRCUVZjc1YwRkJXRHRCUVVOQkxGZEJRVmNzVFVGQldDeEhRVUZ2UWl4VlFVRkRMRTFCUVVRN1FVRkJRU3h2UTBGQldTeEpRVUZhTzBGQlFWa3NVVUZCV2p0QlFVRkJPenRCUVVGQkxGTkJRWEZDTEZWQlFVTXNVVUZCUkR0QlFVRkJMRmRCUVdNc2VVSkJRVThzVVVGQlVDeFRRVUZ2UWl4SlFVRndRaXhGUVVGa08wRkJRVUVzUjBGQmNrSTdRVUZCUVN4RFFVRndRanM3YTBKQlJXVXNWU0lzSW1acGJHVWlPaUp3Y21WelpYUXRaV0Z6YVc1bkxtcHpJaXdpYzI5MWNtTmxVbTl2ZENJNklpOVZjMlZ5Y3k5dFlYUjBjR1Z5Y25rdlUybDBaWE12Y0c5d2JXOTBhVzl1SWl3aWMyOTFjbU5sYzBOdmJuUmxiblFpT2xzaUx5cGNiaUFnUldGemFXNW5JR1oxYm1OMGFXOXVjMXh1SUNBdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRYRzRnSUZ4dUlDQkhaVzVsY21GMFpYTWdZVzVrSUhCeWIzWnBaR1Z6SUdWaGMybHVaeUJtZFc1amRHbHZibk1nWW1GelpXUWdiMjRnWW1GelpVWjFibU4wYVc5dUlHUmxabWx1YVhScGIyNXpYRzRnSUZ4dUlDQkJJR05oYkd3Z2RHOGdaV0Z6YVc1blJuVnVZM1JwYjI0dVoyVjBLQ2RtZFc1amRHbHZiazVoYldVbktTQnlaWFIxY201eklHRWdablZ1WTNScGIyNGdkR2hoZENCallXNGdZbVVnY0dGemMyVmtPbHh1SUNBZ0lFQndZWEpoYlNCYmJuVnRZbVZ5WFRvZ1VISnZaM0psYzNNZ01DMHhYRzRnSUNBZ1FIQmhjbUZ0SUZ0dWRXMWlaWEpkSUNodmNIUnBiMjVoYkNrNklFRnRjQ0J0YjJScFptbGxjaXdnYjI1c2VTQmhZMk5sY0hSbFpDQnBiaUJ6YjIxbElHVmhjMmx1WnlCbWRXNWpkR2x2Ym5OY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lHRnVaQ0JwY3lCMWMyVmtJSFJ2SUdGa2FuVnpkQ0J2ZG1WeVlXeHNJSE4wY21WdVozUm9YRzRnSUNBZ1FISmxkSFZ5YmlCYmJuVnRZbVZ5WFRvZ1JXRnpaV1FnY0hKdlozSmxjM05jYmlBZ0lDQmNiaUFnVjJVZ1kyRnVJR2RsYm1WeVlYUmxJRzVsZHlCbWRXNWpkR2x2Ym5NZ1lua2djMlZ1WkdsdVp5QmhiaUJsWVhOcGJtY2dablZ1WTNScGIyNGdkR2h5YjNWbmFDQmxZWE5wYm1kR2RXNWpkR2x2Ymk1bGVIUmxibVFvYm1GdFpTd2diV1YwYUc5a0tTNWNiaUFnVjJocFkyZ2dkMmxzYkNCdFlXdGxJRzVoYldWSmJpd2dibUZ0WlU5MWRDQmhibVFnYm1GdFpVbHVUM1YwSUdaMWJtTjBhVzl1Y3lCaGRtRnBiR0ZpYkdVZ2RHOGdkWE5sTGx4dUlDQWdJRnh1SUNCRllYTnBibWNnWm5WdVkzUnBiMjV6SUdaeWIyMGdVbTlpWlhKMElGQmxibTVsY2x4dUlDQm9kSFJ3T2k4dmQzZDNMbkp2WW1WeWRIQmxibTVsY2k1amIyMHZaV0Z6YVc1bkwxeHVJQ0FnSUZ4dUlDQkNaWHBwWlhJZ1kzVnlkbVVnYVc1MFpYSndjbVYwYjNJZ1kzSmxZWFJsWkNCbWNtOXRJRWRodzZ0MFlXNGdVbVZ1WVhWa1pXRjFKM01nYjNKcFoybHVZV3dnUW1WNmFXVnlSV0Z6YVc1bklDQmNiaUFnYUhSMGNITTZMeTluYVhSb2RXSXVZMjl0TDJkeVpTOWlaWHBwWlhJdFpXRnphVzVuTDJKc2IySXZiV0Z6ZEdWeUwybHVaR1Y0TG1weklDQmNiaUFnYUhSMGNITTZMeTluYVhSb2RXSXVZMjl0TDJkeVpTOWlaWHBwWlhJdFpXRnphVzVuTDJKc2IySXZiV0Z6ZEdWeUwweEpRMFZPVTBWY2JseHVJQ0JCYm5ScFkybHdZWFJsSUdWaGMybHVaeUJqY21WaGRHVmtJR0o1SUVWc2JHbHZkQ0JIYVc1dlhHNGdJR2gwZEhCek9pOHZkSGRwZEhSbGNpNWpiMjB2Uld4c2FXOTBSMlZ1YjF4dUtpOWNiaTh2SUVsdGNHOXlkSE5jYm1sdGNHOXlkQ0JqY21WaGRHVkZZWE5wYm1kR2RXNWpkR2x2YmlCbWNtOXRJQ2N1TDJOeVpXRjBaUzFsWVhOcGJtY25PMXh1YVcxd2IzSjBJR04xWW1salFtVjZhV1Z5SUdaeWIyMGdKeTR2WTNKbFlYUmxMV0psZW1sbGNpYzdYRzVjYmk4dklGWmhiSFZsYzF4dVkyOXVjM1FnUkVWR1FWVk1WRjlDUVVOTFgxTlVVa1ZPUjFSSUlEMGdNUzQxTWpVN1hHNWpiMjV6ZENCRVJVWkJWVXhVWDFCUFYxOVRWRkpGVGtkVVNDQTlJREk3WEc1Y2JpOHFYRzRnSUVWaFkyZ2diMllnZEdobGMyVWdZbUZ6WlNCbWRXNWpkR2x2Ym5NZ2FYTWdZVzRnWldGelpVbHVYRzRnSUZ4dUlDQlBiaUJwYm1sMExDQjNaU0IxYzJVZ0xtMXBjbkp2Y2lCaGJtUWdMbkpsZG1WeWMyVWdkRzhnWjJWdVpYSmhkR1VnWldGelpVbHVUM1YwSUdGdVpGeHVJQ0JsWVhObFQzVjBJR1oxYm1OMGFXOXVjeUJ5WlhOd1pXTjBhWFpsYkhrdVhHNHFMMXh1WTI5dWMzUWdZbUZ6WlVWaGMybHVaeUE5SUh0Y2JpQWdaV0Z6WlRvZ0tIQnliMmR5WlhOekxDQnpkSEpsYm1kMGFDQTlJRVJGUmtGVlRGUmZVRTlYWDFOVVVrVk9SMVJJS1NBOVBpQndjbTluY21WemN5QXFLaUJ6ZEhKbGJtZDBhQ3hjYmlBZ1kybHlZem9nY0hKdlozSmxjM01nUFQ0Z01TQXRJRTFoZEdndWMybHVLRTFoZEdndVlXTnZjeWh3Y205bmNtVnpjeWtwTEZ4dUlDQmlZV05yT2lBb2NISnZaM0psYzNNc0lITjBjbVZ1WjNSb0lEMGdSRVZHUVZWTVZGOUNRVU5MWDFOVVVrVk9SMVJJS1NBOVBpQW9jSEp2WjNKbGMzTWdLaUJ3Y205bmNtVnpjeWtnS2lBb0tITjBjbVZ1WjNSb0lDc2dNU2tnS2lCd2NtOW5jbVZ6Y3lBdElITjBjbVZ1WjNSb0tWeHVmVHRjYmx4dUx5OGdWWFJwYkdsMGVTQm1kVzVqZEdsdmJuTmNibU52Ym5OMElHZGxibVZ5WVhSbFVHOTNaWEpGWVhOcGJtY2dQU0FvYzNSeVpXNW5kR2dwSUQwK0lDaHdjbTluY21WemN5a2dQVDRnWW1GelpVVmhjMmx1Wnk1bFlYTmxLSEJ5YjJkeVpYTnpMQ0J6ZEhKbGJtZDBhQ2s3WEc1Y2Jsc25ZM1ZpYVdNbkxDQW5jWFZoY25RbkxDQW5jWFZwYm5RblhTNW1iM0pGWVdOb0tDaGxZWE5wYm1kT1lXMWxMQ0JwS1NBOVBpQmlZWE5sUldGemFXNW5XMlZoYzJsdVowNWhiV1ZkSUQwZ1oyVnVaWEpoZEdWUWIzZGxja1ZoYzJsdVp5aHBJQ3NnTXlrcE8xeHVYRzR2THlCSFpXNWxjbUYwWlNCcGJpOXZkWFF2YVc1UGRYUWdkbUZ5YVdGMGFXOXVjMXh1Wm05eUlDaHNaWFFnYTJWNUlHbHVJR0poYzJWRllYTnBibWNwSUh0Y2JpQWdhV1lnS0dKaGMyVkZZWE5wYm1jdWFHRnpUM2R1VUhKdmNHVnlkSGtvYTJWNUtTa2dlMXh1SUNBZ0lHTnZibk4wSUdWaGMybHVaMFoxYm1OMGFXOXVJRDBnWTNKbFlYUmxSV0Z6YVc1blJuVnVZM1JwYjI0b1ltRnpaVVZoYzJsdVoxdHJaWGxkS1R0Y2JpQWdJQ0JpWVhObFJXRnphVzVuVzJBa2UydGxlWDFKYm1CZElEMGdaV0Z6YVc1blJuVnVZM1JwYjI0dWFXNDdYRzRnSUNBZ1ltRnpaVVZoYzJsdVoxdGdKSHRyWlhsOVQzVjBZRjBnUFNCbFlYTnBibWRHZFc1amRHbHZiaTV2ZFhRN1hHNGdJQ0FnWW1GelpVVmhjMmx1WjF0Z0pIdHJaWGw5U1c1UGRYUmdYU0E5SUdWaGMybHVaMFoxYm1OMGFXOXVMbWx1VDNWME8xeHVJQ0I5WEc1OVhHNWNibUpoYzJWRllYTnBibWN1YkdsdVpXRnlJRDBnY0hKdlozSmxjM01nUFQ0Z2NISnZaM0psYzNNN1hHNWlZWE5sUldGemFXNW5MbUZ1ZEdsamFYQmhkR1VnUFNBb2NISnZaM0psYzNNc0lITjBjbVZ1WjNSb0lEMGdSRVZHUVZWTVZGOUNRVU5MWDFOVVVrVk9SMVJJS1NBOVBseHVJQ0FvS0hCeWIyZHlaWE56S2oweUtTQThJREVwSUQ4Z01DNDFJQ29nWW1GelpVVmhjMmx1Wnk1aVlXTnJTVzRvY0hKdlozSmxjM01zSUhOMGNtVnVaM1JvS1NBNklDQXdMalVnS2lBb01pQXRJRTFoZEdndWNHOTNLRElzSUMweE1DQXFJQ2h3Y205bmNtVnpjeUF0SURFcEtTazdYRzVjYm1KaGMyVkZZWE5wYm1jdVkzSmxZWFJsVm1GeWFXRjBhVzl1Y3lBOUlHTnlaV0YwWlVWaGMybHVaMFoxYm1OMGFXOXVPMXh1WW1GelpVVmhjMmx1Wnk1amRXSnBZMEpsZW1sbGNpQTlJR04xWW1salFtVjZhV1Z5TzF4dVltRnpaVVZoYzJsdVp5NXRiMlJwWm5rZ1BTQW9aV0Z6YVc1bkxDQXVMaTVoY21kektTQTlQaUFvY0hKdlozSmxjM01wSUQwK0lHVmhjMmx1Wnlod2NtOW5jbVZ6Y3l3Z0xpNHVZWEpuY3lrN1hHNWNibVY0Y0c5eWRDQmtaV1poZFd4MElHSmhjMlZGWVhOcGJtYzdJbDE5XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9hY3Rpb25zL2Vhc2luZy9wcmVzZXQtZWFzaW5nLmpzXG4gKiogbW9kdWxlIGlkID0gMThcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF9GbG93ID0gcmVxdWlyZSgnLi4vRmxvdycpO1xuXG52YXIgX0Zsb3cyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfRmxvdyk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbnZhciBTQVZFX1BST1AgPSAnX19wbV9mbG93JztcblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gKGVsZW1lbnQsIGFkYXB0ZXIpIHtcbiAgaWYgKGVsZW1lbnRbU0FWRV9QUk9QXSkge1xuICAgIHJldHVybiBlbGVtZW50W1NBVkVfUFJPUF07XG4gIH0gZWxzZSB7XG4gICAgdmFyIGZsb3cgPSBuZXcgX0Zsb3cyLmRlZmF1bHQoeyBlbGVtZW50OiBlbGVtZW50LCBhZGFwdGVyOiBhZGFwdGVyIH0pO1xuXG4gICAgLy8gQmluZCBhZGFwdGVyIHRvIGVsZW1lbnRcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZWxlbWVudCwgU0FWRV9QUk9QLCB7XG4gICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgIHdyaXRhYmxlOiBmYWxzZSxcbiAgICAgIHZhbHVlOiBmbG93XG4gICAgfSk7XG5cbiAgICByZXR1cm4gZmxvdztcbiAgfVxufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbk55WXk5aFkzUnBiMjV6TDJac2IzY3ZaMlYwTFdac2IzY3Vhbk1pWFN3aWJtRnRaWE1pT2x0ZExDSnRZWEJ3YVc1bmN5STZJanM3T3p0QlFVRkJPenM3T3pzN1FVRkZRU3hKUVVGTkxGbEJRVmtzVjBGQmJFSTdPMnRDUVVWbExGVkJRVU1zVDBGQlJDeEZRVUZWTEU5QlFWWXNSVUZCYzBJN1FVRkRia01zVFVGQlNTeFJRVUZSTEZOQlFWSXNRMEZCU2l4RlFVRjNRanRCUVVOMFFpeFhRVUZQTEZGQlFWRXNVMEZCVWl4RFFVRlFPMEZCUTBRc1IwRkdSQ3hOUVVWUE8wRkJRMHdzVVVGQlRTeFBRVUZQTEcxQ1FVRlRMRVZCUVVVc1owSkJRVVlzUlVGQlZ5eG5Ra0ZCV0N4RlFVRlVMRU5CUVdJN096dEJRVWRCTEZkQlFVOHNZMEZCVUN4RFFVRnpRaXhQUVVGMFFpeEZRVUVyUWl4VFFVRXZRaXhGUVVFd1F6dEJRVU40UXl4clFrRkJXU3hMUVVRMFFqdEJRVVY0UXl4blFrRkJWU3hMUVVZNFFqdEJRVWQ0UXl4aFFVRlBPMEZCU0dsRExFdEJRVEZET3p0QlFVMUJMRmRCUVU4c1NVRkJVRHRCUVVORU8wRkJRMFlzUXlJc0ltWnBiR1VpT2lKblpYUXRabXh2ZHk1cWN5SXNJbk52ZFhKalpWSnZiM1FpT2lJdlZYTmxjbk12YldGMGRIQmxjbko1TDFOcGRHVnpMM0J2Y0cxdmRHbHZiaUlzSW5OdmRYSmpaWE5EYjI1MFpXNTBJanBiSW1sdGNHOXlkQ0JHYkc5M0lHWnliMjBnSnk0dUwwWnNiM2NuTzF4dVhHNWpiMjV6ZENCVFFWWkZYMUJTVDFBZ1BTQW5YMTl3YlY5bWJHOTNKenRjYmx4dVpYaHdiM0owSUdSbFptRjFiSFFnS0dWc1pXMWxiblFzSUdGa1lYQjBaWElwSUQwK0lIdGNiaUFnYVdZZ0tHVnNaVzFsYm5SYlUwRldSVjlRVWs5UVhTa2dlMXh1SUNBZ0lISmxkSFZ5YmlCbGJHVnRaVzUwVzFOQlZrVmZVRkpQVUYwN1hHNGdJSDBnWld4elpTQjdYRzRnSUNBZ1kyOXVjM1FnWm14dmR5QTlJRzVsZHlCR2JHOTNLSHNnWld4bGJXVnVkQ3dnWVdSaGNIUmxjaUI5S1R0Y2JseHVJQ0FnSUM4dklFSnBibVFnWVdSaGNIUmxjaUIwYnlCbGJHVnRaVzUwWEc0Z0lDQWdUMkpxWldOMExtUmxabWx1WlZCeWIzQmxjblI1S0dWc1pXMWxiblFzSUZOQlZrVmZVRkpQVUN3Z2UxeHVJQ0FnSUNBZ1pXNTFiV1Z5WVdKc1pUb2dabUZzYzJVc1hHNGdJQ0FnSUNCM2NtbDBZV0pzWlRvZ1ptRnNjMlVzWEc0Z0lDQWdJQ0IyWVd4MVpUb2dabXh2ZDF4dUlDQWdJSDBwTzF4dVhHNGdJQ0FnY21WMGRYSnVJR1pzYjNjN1hHNGdJSDFjYm4wN1hHNWNibHh1SWwxOVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvYWN0aW9ucy9mbG93L2dldC1mbG93LmpzXG4gKiogbW9kdWxlIGlkID0gMTlcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHMuc3RlcFByb2dyZXNzID0gZXhwb3J0cy5zcGVlZFBlclNlY29uZCA9IGV4cG9ydHMuc3BlZWRQZXJGcmFtZSA9IGV4cG9ydHMuc21vb3RoID0gZXhwb3J0cy5yZXN0cmljdCA9IGV4cG9ydHMucmVsYXRpdmVWYWx1ZSA9IGV4cG9ydHMucmFuZG9tID0gZXhwb3J0cy5yYWRpYW5zVG9EZWdyZWVzID0gZXhwb3J0cy5wb2ludEZyb21BbmdsZUFuZERpc3RhbmNlID0gZXhwb3J0cy5vZmZzZXQgPSBleHBvcnRzLmdldFByb2dyZXNzRnJvbVZhbHVlID0gZXhwb3J0cy5nZXRWYWx1ZUZyb21Qcm9ncmVzcyA9IGV4cG9ydHMuaHlwb3RlbnVzZSA9IGV4cG9ydHMuZWFzZSA9IGV4cG9ydHMuZGlzdGFuY2UgPSBleHBvcnRzLmRpbGF0ZSA9IGV4cG9ydHMuZGVncmVlc1RvUmFkaWFucyA9IGV4cG9ydHMuYW5nbGUgPSB1bmRlZmluZWQ7XG5cbnZhciBfdXRpbHMgPSByZXF1aXJlKCcuL3V0aWxzJyk7XG5cbnZhciBaRVJPX1BPSU5UID0ge1xuICB4OiAwLFxuICB5OiAwLFxuICB6OiAwXG59O1xuXG52YXIgZGlzdGFuY2UxRCA9IGZ1bmN0aW9uIChhLCBiKSB7XG4gIHJldHVybiBNYXRoLmFicyhhIC0gYik7XG59O1xuXG4vKlxuICBBbmdsZSBiZXR3ZWVuIHBvaW50c1xuICBcbiAgVHJhbnNsYXRlcyB0aGUgaHlwb3RoZXRpY2FsIGxpbmUgc28gdGhhdCB0aGUgJ2Zyb20nIGNvb3JkaW5hdGVzXG4gIGFyZSBhdCAwLDBcbiAgXG4gIEBwYXJhbSBbb2JqZWN0XTogWCBhbmQgWSBjb29yZGluYXRlcyBvZiBmcm9tIHBvaW50XG4gIEBwYXJhbSBbb2JqZWN0XTogWCBhbmQgWSBjb3JkaW5hdGVzIG9mIHRvIHBvaW50XG4gIEByZXR1cm4gW3JhZGlhbl06IEFuZ2xlIGJldHdlZW4gdGhlIHR3byBwb2ludHMgaW4gcmFkaWFuc1xuKi9cbnZhciBhbmdsZSA9IGV4cG9ydHMuYW5nbGUgPSBmdW5jdGlvbiAoYSkge1xuICB2YXIgYiA9IGFyZ3VtZW50cy5sZW5ndGggPD0gMSB8fCBhcmd1bWVudHNbMV0gPT09IHVuZGVmaW5lZCA/IFpFUk9fUE9JTlQgOiBhcmd1bWVudHNbMV07XG4gIHJldHVybiByYWRpYW5zVG9EZWdyZWVzKE1hdGguYXRhbjIoYS54IC0gYi54LCBhLnkgLSBiLnkpKTtcbn07XG5cbi8qXG4gIENvbnZlcnQgZGVncmVlcyB0byByYWRpYW5zXG4gIFxuICBAcGFyYW0gW251bWJlcl06IFZhbHVlIGluIGRlZ3JlZXNcbiAgQHJldHVybiBbbnVtYmVyXTogVmFsdWUgaW4gcmFkaWFuc1xuKi9cbnZhciBkZWdyZWVzVG9SYWRpYW5zID0gZXhwb3J0cy5kZWdyZWVzVG9SYWRpYW5zID0gZnVuY3Rpb24gKGRlZ3JlZXMpIHtcbiAgcmV0dXJuIGRlZ3JlZXMgKiBNYXRoLlBJIC8gMTgwO1xufTtcblxuLypcbiAgRGlsYXRlXG4gIFxuICBDaGFuZ2UgdGhlIHByb2dyZXNzaW9uIGJldHdlZW4gYSBhbmQgYiBhY2NvcmRpbmcgdG8gZGlsYXRpb24uXG4gIFxuICBTbyBkaWxhdGlvbiA9IDAuNSB3b3VsZCBjaGFuZ2VcbiAgXG4gIGEgLS0tLS0tLS0tIGJcbiAgXG4gIHRvXG4gIFxuICBhIC0tLS0gYlxuICBcbiAgQHBhcmFtIFtudW1iZXJdOiBQcmV2aW91cyB2YWx1ZVxuICBAcGFyYW0gW251bWJlcl06IEN1cnJlbnQgdmFsdWVcbiAgQHBhcmFtIFtudW1iZXJdOiBEaWxhdGUgcHJvZ3Jlc3MgYnkgeFxuICBAcmV0dXJuIFtudW1iZXJdOiBQcmV2aW91cyB2YWx1ZSBwbHVzIHRoZSBkaWxhdGVkIGRpZmZlcmVuY2VcbiovXG52YXIgZGlsYXRlID0gZXhwb3J0cy5kaWxhdGUgPSBmdW5jdGlvbiAoYSwgYiwgZGlsYXRpb24pIHtcbiAgcmV0dXJuIGEgKyAoYiAtIGEpICogZGlsYXRpb247XG59O1xuXG4vKlxuICBEaXN0YW5jZVxuICBcbiAgUmV0dXJucyB0aGUgZGlzdGFuY2UgYmV0d2VlbiB0d28gbiBkaW1lbnNpb25hbCBwb2ludHMuXG4gIFxuICBAcGFyYW0gW29iamVjdC9udW1iZXJdOiB4IGFuZCB5IG9yIGp1c3QgeCBvZiBwb2ludCBBXG4gIEBwYXJhbSBbb2JqZWN0L251bWJlcl06IChvcHRpb25hbCk6IHggYW5kIHkgb3IganVzdCB4IG9mIHBvaW50IEJcbiAgQHJldHVybiBbbnVtYmVyXTogVGhlIGRpc3RhbmNlIGJldHdlZW4gdGhlIHR3byBwb2ludHNcbiovXG52YXIgZGlzdGFuY2UgPSBleHBvcnRzLmRpc3RhbmNlID0gZnVuY3Rpb24gKGEpIHtcbiAgdmFyIGIgPSBhcmd1bWVudHMubGVuZ3RoIDw9IDEgfHwgYXJndW1lbnRzWzFdID09PSB1bmRlZmluZWQgPyBaRVJPX1BPSU5UIDogYXJndW1lbnRzWzFdO1xuXG4gIC8vIDFEIGRpbWVuc2lvbnNcbiAgaWYgKCgwLCBfdXRpbHMuaXNOdW0pKGEpKSB7XG4gICAgcmV0dXJuIGRpc3RhbmNlMUQoYSwgYik7XG5cbiAgICAvLyBNdWx0aS1kaW1lbnNpb25hbFxuICB9IGVsc2Uge1xuICAgIHZhciB4RGVsdGEgPSBkaXN0YW5jZTFEKGEueCwgYi54KTtcbiAgICB2YXIgeURlbHRhID0gZGlzdGFuY2UxRChhLnksIGIueSk7XG4gICAgdmFyIHpEZWx0YSA9ICgwLCBfdXRpbHMuaXNOdW0pKGEueikgPyBkaXN0YW5jZTFEKGEueiwgYi56KSA6IDA7XG5cbiAgICByZXR1cm4gTWF0aC5zcXJ0KE1hdGgucG93KHhEZWx0YSwgMikgKyBNYXRoLnBvdyh5RGVsdGEsIDIpICsgTWF0aC5wb3coekRlbHRhLCAyKSk7XG4gIH1cbn07XG5cbi8qXG4gIEVhc2UgdmFsdWUgd2l0aGluIHJhbmdlZCBwYXJhbWV0ZXJzXG4gIFxuICBAcGFyYW0gW251bWJlcl06IFByb2dyZXNzIGJldHdlZW4gMCBhbmQgMVxuICBAcGFyYW0gW251bWJlcl06IFZhbHVlIG9mIDAgcHJvZ3Jlc3NcbiAgQHBhcmFtIFtudW1iZXJdOiBWYWx1ZSBvZiAxIHByb2dyZXNzXG4gIEBwYXJhbSBbc3RyaW5nIHx8IGZ1bmN0aW9uXTogTmFtZSBvZiBwcmVzZXQgZWFzaW5nXG4gICAgdG8gdXNlIG9yIGdlbmVyYXRlZCBlYXNpbmcgZnVuY3Rpb25cbiAgQHJldHVybiBbbnVtYmVyXTogVmFsdWUgb2YgZWFzZWQgcHJvZ3Jlc3MgaW4gcmFuZ2VcbiovXG52YXIgZWFzZSA9IGV4cG9ydHMuZWFzZSA9IGZ1bmN0aW9uIChwcm9ncmVzcywgZnJvbSwgdG8sIGVhc2UpIHtcbiAgdmFyIHByb2dyZXNzTGltaXRlZCA9IHJlc3RyaWN0KHByb2dyZXNzLCAwLCAxKTtcbiAgdmFyIGVhc2VkUHJvZ3Jlc3MgPSBlYXNlKHByb2dyZXNzTGltaXRlZCk7XG5cbiAgcmV0dXJuIGdldFZhbHVlRnJvbVByb2dyZXNzKGVhc2VkUHJvZ3Jlc3MsIGZyb20sIHRvKTtcbn07XG5cbi8qXG4gIEh5cG90ZW51c2VcbiAgXG4gIFJldHVybnMgdGhlIGh5cG90ZW51c2UsIHNpZGUgQywgZ2l2ZW4gdGhlIGxlbmd0aHMgb2Ygc2lkZXMgQSBhbmQgQi5cbiAgXG4gIEBwYXJhbSBbbnVtYmVyXTogTGVuZ3RoIG9mIEFcbiAgQHBhcmFtIFtudW1iZXJdOiBMZW5ndGggb2YgQlxuICBAcmV0dXJuIFtudW1iZXJdOiBMZW5ndGggb2YgQ1xuKi9cbnZhciBoeXBvdGVudXNlID0gZXhwb3J0cy5oeXBvdGVudXNlID0gZnVuY3Rpb24gKGEsIGIpIHtcbiAgcmV0dXJuIE1hdGguc3FydChhICogYSArIGIgKiBiKTtcbn07XG5cbi8qXG4gIFZhbHVlIGluIHJhbmdlIGZyb20gcHJvZ3Jlc3NcbiAgXG4gIEdpdmVuIGEgbG93ZXIgbGltaXQgYW5kIGFuIHVwcGVyIGxpbWl0LCB3ZSByZXR1cm4gdGhlIHZhbHVlIHdpdGhpblxuICB0aGF0IHJhbmdlIGFzIGV4cHJlc3NlZCBieSBwcm9ncmVzcyAoYSBudW1iZXIgZnJvbSAwLTEpXG4gIFxuICBAcGFyYW0gW251bWJlcl06IFRoZSBwcm9ncmVzcyBiZXR3ZWVuIGxvd2VyIGFuZCB1cHBlciBsaW1pdHMgZXhwcmVzc2VkIDAtMVxuICBAcGFyYW0gW251bWJlcl06IExvd2VyIGxpbWl0IG9mIHJhbmdlXG4gIEBwYXJhbSBbbnVtYmVyXTogVXBwZXIgbGltaXQgb2YgcmFuZ2VcbiAgQHJldHVybiBbbnVtYmVyXTogVmFsdWUgYXMgY2FsY3VsYXRlZCBmcm9tIHByb2dyZXNzIHdpdGhpbiByYW5nZSAobm90IGxpbWl0ZWQgd2l0aGluIHJhbmdlKVxuKi9cbnZhciBnZXRWYWx1ZUZyb21Qcm9ncmVzcyA9IGV4cG9ydHMuZ2V0VmFsdWVGcm9tUHJvZ3Jlc3MgPSBmdW5jdGlvbiAocHJvZ3Jlc3MsIGZyb20sIHRvKSB7XG4gIHJldHVybiAtcHJvZ3Jlc3MgKiBmcm9tICsgcHJvZ3Jlc3MgKiB0byArIGZyb207XG59O1xuXG4vKlxuICBQcm9ncmVzcyB3aXRoaW4gZ2l2ZW4gcmFuZ2VcbiAgXG4gIEdpdmVuIGEgbG93ZXIgbGltaXQgYW5kIGFuIHVwcGVyIGxpbWl0LCB3ZSByZXR1cm4gdGhlIHByb2dyZXNzXG4gIChleHByZXNzZWQgYXMgYSBudW1iZXIgMC0xKSByZXByZXNlbnRlZCBieSB0aGUgZ2l2ZW4gdmFsdWUsIGFuZFxuICBsaW1pdCB0aGF0IHByb2dyZXNzIHRvIHdpdGhpbiAwLTEuXG4gIFxuICBAcGFyYW0gW251bWJlcl06IFZhbHVlIHRvIGZpbmQgcHJvZ3Jlc3Mgd2l0aGluIGdpdmVuIHJhbmdlXG4gIEBwYXJhbSBbbnVtYmVyXTogTG93ZXIgbGltaXQgXG4gIEBwYXJhbSBbbnVtYmVyXTogVXBwZXIgbGltaXRcbiAgQHJldHVybiBbbnVtYmVyXTogUHJvZ3Jlc3Mgb2YgdmFsdWUgd2l0aGluIHJhbmdlIGFzIGV4cHJlc3NlZCAwLTFcbiovXG52YXIgZ2V0UHJvZ3Jlc3NGcm9tVmFsdWUgPSBleHBvcnRzLmdldFByb2dyZXNzRnJvbVZhbHVlID0gZnVuY3Rpb24gKHZhbHVlLCBmcm9tLCB0bykge1xuICByZXR1cm4gKHZhbHVlIC0gZnJvbSkgLyAodG8gLSBmcm9tKTtcbn07XG5cbi8qXG4gIE9mZnNldCBiZXR3ZWVuIHR3byBvYmplY3RzIG9mIG51bWJlcnNcblxuICBJZiBwcm9wZXJ0eSBpcyBmb3VuZCBpbiBiIG5vdCBwcmVzZW50IGluIGEsIGl0IHdpbGwgcmV0dXJuIGAwYCBmb3IgdGhhdCBwcm9wLlxuICBcbiAgQHBhcmFtIFtQb2ludF06IEZpcnN0IG9iamVjdFxuICBAcGFyYW0gW1BvaW50XTogU2Vjb25kIG9iamVjdFxuICBAcmV0dXJuIFtPZmZzZXRdOiBEaXN0YW5jZSBtZXRyaWNzIGJldHdlZW4gdHdvIHBvaW50c1xuKi9cbnZhciBvZmZzZXQgPSBleHBvcnRzLm9mZnNldCA9IGZ1bmN0aW9uIChhLCBiKSB7XG4gIHZhciBvZmZzZXQgPSB7fTtcblxuICBmb3IgKHZhciBrZXkgaW4gYikge1xuICAgIGlmIChiLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgIG9mZnNldFtrZXldID0gKDAsIF91dGlscy5oYXNQcm9wZXJ0eSkoYSwga2V5KSA/IGJba2V5XSAtIGFba2V5XSA6IDA7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG9mZnNldDtcbn07XG5cbi8qXG4gIFBvaW50IGZyb20gYW5nbGUgYW5kIGRpc3RhbmNlXG4gIFxuICBAcGFyYW0gW29iamVjdF06IDJEIHBvaW50IG9mIG9yaWdpblxuICBAcGFyYW0gW251bWJlcl06IEFuZ2xlIGZyb20gb3JpZ2luXG4gIEBwYXJhbSBbbnVtYmVyXTogRGlzdGFuY2UgZnJvbSBvcmlnaW5cbiAgQHJldHVybiBbb2JqZWN0XTogQ2FsY3VsYXRlZCAyRCBwb2ludFxuKi9cbnZhciBwb2ludEZyb21BbmdsZUFuZERpc3RhbmNlID0gZXhwb3J0cy5wb2ludEZyb21BbmdsZUFuZERpc3RhbmNlID0gZnVuY3Rpb24gKG9yaWdpbiwgYW5nbGUsIGRpc3RhbmNlKSB7XG4gIGFuZ2xlID0gZGVncmVlc1RvUmFkaWFucyhhbmdsZSk7XG5cbiAgcmV0dXJuIHtcbiAgICB4OiBkaXN0YW5jZSAqIE1hdGguY29zKGFuZ2xlKSArIG9yaWdpbi54LFxuICAgIHk6IGRpc3RhbmNlICogTWF0aC5zaW4oYW5nbGUpICsgb3JpZ2luLnlcbiAgfTtcbn07XG5cbi8qXG4gIENvbnZlcnQgcmFkaWFucyB0byBkZWdyZWVzXG4gIFxuICBAcGFyYW0gW251bWJlcl06IFZhbHVlIGluIHJhZGlhbnNcbiAgQHJldHVybiBbbnVtYmVyXTogVmFsdWUgaW4gZGVncmVlc1xuKi9cbnZhciByYWRpYW5zVG9EZWdyZWVzID0gZXhwb3J0cy5yYWRpYW5zVG9EZWdyZWVzID0gZnVuY3Rpb24gKHJhZGlhbnMpIHtcbiAgcmV0dXJuIHJhZGlhbnMgKiAxODAgLyBNYXRoLlBJO1xufTtcblxuLypcbiAgUmV0dXJuIHJhbmRvbSBudW1iZXIgYmV0d2VlbiByYW5nZVxuICBcbiAgQHBhcmFtIFtudW1iZXJdIChvcHRpb25hbCk6IE91dHB1dCBtaW5pbXVtXG4gIEBwYXJhbSBbbnVtYmVyXSAob3B0aW9uYWwpOiBPdXRwdXQgbWF4aW11bVxuICBAcmV0dXJuIFtudW1iZXJdOiBSYW5kb20gbnVtYmVyIHdpdGhpbiByYW5nZSwgb3IgMCBhbmQgMSBpZiBub25lIHByb3ZpZGVkXG4qL1xudmFyIHJhbmRvbSA9IGV4cG9ydHMucmFuZG9tID0gZnVuY3Rpb24gKCkge1xuICB2YXIgbWluID0gYXJndW1lbnRzLmxlbmd0aCA8PSAwIHx8IGFyZ3VtZW50c1swXSA9PT0gdW5kZWZpbmVkID8gMCA6IGFyZ3VtZW50c1swXTtcbiAgdmFyIG1heCA9IGFyZ3VtZW50cy5sZW5ndGggPD0gMSB8fCBhcmd1bWVudHNbMV0gPT09IHVuZGVmaW5lZCA/IDEgOiBhcmd1bWVudHNbMV07XG4gIHJldHVybiBNYXRoLnJhbmRvbSgpICogKG1heCAtIG1pbikgKyBtaW47XG59O1xuXG4vKlxuICBDYWxjdWxhdGUgcmVsYXRpdmUgdmFsdWVcbiAgXG4gIFRha2VzIHRoZSBvcGVyYXRvciBhbmQgdmFsdWUgZnJvbSBhIHN0cmluZywgaWUgXCIrPTVcIiwgYW5kIGFwcGxpZXNcbiAgdG8gdGhlIGN1cnJlbnQgdmFsdWUgdG8gcmVzb2x2ZSBhIG5ldyB0YXJnZXQuXG4gIFxuICBAcGFyYW0gW251bWJlcl06IEN1cnJlbnQgdmFsdWVcbiAgQHBhcmFtIFtzdHJpbmddOiBSZWxhdGl2ZSB2YWx1ZVxuICBAcmV0dXJuIFtudW1iZXJdOiBOZXcgdmFsdWVcbiovXG52YXIgcmVsYXRpdmVWYWx1ZSA9IGV4cG9ydHMucmVsYXRpdmVWYWx1ZSA9IGZ1bmN0aW9uIChjdXJyZW50LCByZWxhdGl2ZSkge1xuICB2YXIgbmV3VmFsdWUgPSBjdXJyZW50O1xuICB2YXIgZXF1YXRpb24gPSByZWxhdGl2ZS5zcGxpdCgnPScpO1xuICB2YXIgb3BlcmF0b3IgPSBlcXVhdGlvblswXTtcblxuICB2YXIgX2ZpbmRWYWx1ZUFuZFVuaXQgPSAoMCwgX3V0aWxzLmZpbmRWYWx1ZUFuZFVuaXQpKGVxdWF0aW9uWzFdKTtcblxuICB2YXIgdW5pdCA9IF9maW5kVmFsdWVBbmRVbml0LnVuaXQ7XG4gIHZhciB2YWx1ZSA9IF9maW5kVmFsdWVBbmRVbml0LnZhbHVlO1xuXG5cbiAgdmFsdWUgPSBwYXJzZUZsb2F0KHZhbHVlKTtcblxuICBzd2l0Y2ggKG9wZXJhdG9yKSB7XG4gICAgY2FzZSAnKyc6XG4gICAgICBuZXdWYWx1ZSArPSB2YWx1ZTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJy0nOlxuICAgICAgbmV3VmFsdWUgLT0gdmFsdWU7XG4gICAgICBicmVhaztcbiAgICBjYXNlICcqJzpcbiAgICAgIG5ld1ZhbHVlICo9IHZhbHVlO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAnLyc6XG4gICAgICBuZXdWYWx1ZSAvPSB2YWx1ZTtcbiAgICAgIGJyZWFrO1xuICB9XG5cbiAgaWYgKHVuaXQpIHtcbiAgICBuZXdWYWx1ZSArPSB1bml0O1xuICB9XG5cbiAgcmV0dXJuIG5ld1ZhbHVlO1xufTtcblxuLypcbiAgUmVzdHJpY3QgdmFsdWUgdG8gcmFuZ2VcbiAgXG4gIFJldHVybiB2YWx1ZSB3aXRoaW4gdGhlIHJhbmdlIG9mIGxvd2VyTGltaXQgYW5kIHVwcGVyTGltaXRcbiAgXG4gIEBwYXJhbSBbbnVtYmVyXTogVmFsdWUgdG8ga2VlcCB3aXRoaW4gcmFuZ2VcbiAgQHBhcmFtIFtudW1iZXJdOiBMb3dlciBsaW1pdCBvZiByYW5nZVxuICBAcGFyYW0gW251bWJlcl06IFVwcGVyIGxpbWl0IG9mIHJhbmdlXG4gIEByZXR1cm4gW251bWJlcl06IFZhbHVlIGFzIGxpbWl0ZWQgd2l0aGluIGdpdmVuIHJhbmdlXG4qL1xudmFyIHJlc3RyaWN0ID0gZXhwb3J0cy5yZXN0cmljdCA9IGZ1bmN0aW9uICh2YWx1ZSwgbWluLCBtYXgpIHtcbiAgcmV0dXJuIE1hdGgubWF4KE1hdGgubWluKHZhbHVlLCBtYXgpLCBtaW4pO1xufTtcblxuLypcbiAgRnJhbWVyYXRlLWluZGVwZW5kZW50IHNtb290aGluZ1xuXG4gIEBwYXJhbSBbbnVtYmVyXTogTmV3IHZhbHVlXG4gIEBwYXJhbSBbbnVtYmVyXTogT2xkIHZhbHVlXG4gIEBwYXJhbSBbbnVtYmVyXTogRnJhbWUgZHVyYXRpb25cbiAgQHBhcmFtIFtudW1iZXJdIChvcHRpb25hbCk6IFNtb290aGluZyAoMCBpcyBub25lKVxuKi9cbnZhciBzbW9vdGggPSBleHBvcnRzLnNtb290aCA9IGZ1bmN0aW9uIChuZXdWYWx1ZSwgb2xkVmFsdWUsIGR1cmF0aW9uKSB7XG4gIHZhciBzbW9vdGhpbmcgPSBhcmd1bWVudHMubGVuZ3RoIDw9IDMgfHwgYXJndW1lbnRzWzNdID09PSB1bmRlZmluZWQgPyAwIDogYXJndW1lbnRzWzNdO1xuICByZXR1cm4gKDAsIF91dGlscy50b0RlY2ltYWwpKG9sZFZhbHVlICsgZHVyYXRpb24gKiAobmV3VmFsdWUgLSBvbGRWYWx1ZSkgLyBNYXRoLm1heChzbW9vdGhpbmcsIGR1cmF0aW9uKSk7XG59O1xuXG4vKlxuICBDb252ZXJ0IHggcGVyIHNlY29uZCB0byBwZXIgZnJhbWUgdmVsb2NpdHkgYmFzZWQgb24gZnBzXG4gIFxuICBAcGFyYW0gW251bWJlcl06IFVuaXQgcGVyIHNlY29uZFxuICBAcGFyYW0gW251bWJlcl06IEZyYW1lIGR1cmF0aW9uIGluIG1zXG4qL1xudmFyIHNwZWVkUGVyRnJhbWUgPSBleHBvcnRzLnNwZWVkUGVyRnJhbWUgPSBmdW5jdGlvbiAoeHBzLCBmcmFtZUR1cmF0aW9uKSB7XG4gIHJldHVybiAoMCwgX3V0aWxzLmlzTnVtKSh4cHMpID8geHBzIC8gKDEwMDAgLyBmcmFtZUR1cmF0aW9uKSA6IDA7XG59O1xuXG4vKlxuICBDb252ZXJ0IHZlbG9jaXR5IGludG8gdmVsaWNpdHkgcGVyIHNlY29uZFxuICBcbiAgQHBhcmFtIFtudW1iZXJdOiBVbml0IHBlciBmcmFtZVxuICBAcGFyYW0gW251bWJlcl06IEZyYW1lIGR1cmF0aW9uIGluIG1zXG4qL1xudmFyIHNwZWVkUGVyU2Vjb25kID0gZXhwb3J0cy5zcGVlZFBlclNlY29uZCA9IGZ1bmN0aW9uICh2ZWxvY2l0eSwgZnJhbWVEdXJhdGlvbikge1xuICByZXR1cm4gdmVsb2NpdHkgKiAoMTAwMCAvIGZyYW1lRHVyYXRpb24pO1xufTtcblxuLypcbiAgQ3JlYXRlIHN0ZXBwZWQgdmVyc2lvbiBvZiAwLTEgcHJvZ3Jlc3NcbiAgXG4gIEBwYXJhbSBbbnVtYmVyXTogQ3VycmVudCB2YWx1ZVxuICBAcGFyYW0gW2ludF06IE51bWJlciBvZiBzdGVwc1xuICBAcmV0dXJuIFtudW1iZXJdOiBTdGVwcGVkIHZhbHVlXG4qL1xudmFyIHN0ZXBQcm9ncmVzcyA9IGV4cG9ydHMuc3RlcFByb2dyZXNzID0gZnVuY3Rpb24gKHByb2dyZXNzLCBzdGVwcykge1xuICB2YXIgc2VnbWVudCA9IDEgLyAoc3RlcHMgLSAxKTtcbiAgdmFyIHRhcmdldCA9IDEgLSAxIC8gc3RlcHM7XG4gIHZhciBwcm9ncmVzc09mVGFyZ2V0ID0gTWF0aC5taW4ocHJvZ3Jlc3MgLyB0YXJnZXQsIDEpO1xuXG4gIHJldHVybiBNYXRoLmZsb29yKHByb2dyZXNzT2ZUYXJnZXQgLyBzZWdtZW50KSAqIHNlZ21lbnQ7XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluTnlZeTlwYm1NdlkyRnNZeTVxY3lKZExDSnVZVzFsY3lJNlcxMHNJbTFoY0hCcGJtZHpJam9pT3pzN096dEJRVUZCT3p0QlFVOUJMRWxCUVUwc1lVRkJZVHRCUVVOcVFpeExRVUZITEVOQlJHTTdRVUZGYWtJc1MwRkJSeXhEUVVaak8wRkJSMnBDTEV0QlFVYzdRVUZJWXl4RFFVRnVRanM3UVVGTlFTeEpRVUZOTEdGQlFXRXNWVUZCUXl4RFFVRkVMRVZCUVVrc1EwRkJTanRCUVVGQkxGTkJRVlVzUzBGQlN5eEhRVUZNTEVOQlFWTXNTVUZCU1N4RFFVRmlMRU5CUVZZN1FVRkJRU3hEUVVGdVFqczdPenM3T3pzN096czdPMEZCV1U4c1NVRkJUU3gzUWtGQlVTeFZRVUZETEVOQlFVUTdRVUZCUVN4TlFVRkpMRU5CUVVvc2VVUkJRVkVzVlVGQlVqdEJRVUZCTEZOQlFYVkNMR2xDUVVGcFFpeExRVUZMTEV0QlFVd3NRMEZCVnl4RlFVRkZMRU5CUVVZc1IwRkJUU3hGUVVGRkxFTkJRVzVDTEVWQlFYTkNMRVZCUVVVc1EwRkJSaXhIUVVGTkxFVkJRVVVzUTBGQk9VSXNRMEZCYWtJc1EwRkJka0k3UVVGQlFTeERRVUZrT3pzN096czdPenRCUVZGQkxFbEJRVTBzT0VOQlFXMUNMRlZCUVVNc1QwRkJSRHRCUVVGQkxGTkJRV0VzVlVGQlZTeExRVUZMTEVWQlFXWXNSMEZCYjBJc1IwRkJha003UVVGQlFTeERRVUY2UWpzN096czdPenM3T3pzN096czdPenM3T3pzN1FVRnZRa0VzU1VGQlRTd3dRa0ZCVXl4VlFVRkRMRU5CUVVRc1JVRkJTU3hEUVVGS0xFVkJRVThzVVVGQlVEdEJRVUZCTEZOQlFXOUNMRWxCUVVzc1EwRkJReXhKUVVGSkxFTkJRVXdzU1VGQlZTeFJRVUZ1UXp0QlFVRkJMRU5CUVdZN096czdPenM3T3pzN08wRkJWMEVzU1VGQlRTdzRRa0ZCVnl4VlFVRkRMRU5CUVVRc1JVRkJkVUk3UVVGQlFTeE5RVUZ1UWl4RFFVRnRRaXg1UkVGQlppeFZRVUZsT3pzN1FVRkZOME1zVFVGQlNTeHJRa0ZCVFN4RFFVRk9MRU5CUVVvc1JVRkJZenRCUVVOYUxGZEJRVThzVjBGQlZ5eERRVUZZTEVWQlFXTXNRMEZCWkN4RFFVRlFPenM3UVVGSFJDeEhRVXBFTEUxQlNVODdRVUZEVEN4UlFVRk5MRk5CUVZNc1YwRkJWeXhGUVVGRkxFTkJRV0lzUlVGQlowSXNSVUZCUlN4RFFVRnNRaXhEUVVGbU8wRkJRMEVzVVVGQlRTeFRRVUZUTEZkQlFWY3NSVUZCUlN4RFFVRmlMRVZCUVdkQ0xFVkJRVVVzUTBGQmJFSXNRMEZCWmp0QlFVTkJMRkZCUVUwc1UwRkJWU3hyUWtGQlRTeEZRVUZGTEVOQlFWSXNRMEZCUkN4SFFVRmxMRmRCUVZjc1JVRkJSU3hEUVVGaUxFVkJRV2RDTEVWQlFVVXNRMEZCYkVJc1EwRkJaaXhIUVVGelF5eERRVUZ5UkRzN1FVRkZRU3hYUVVGUExFdEJRVXNzU1VGQlRDeERRVUZWTEZOQlFVTXNUVUZCUkN4RlFVRlhMRU5CUVZnc1lVRkJhVUlzVFVGQmFrSXNSVUZCTWtJc1EwRkJNMElzWVVGQmFVTXNUVUZCYWtNc1JVRkJNa01zUTBGQk0wTXNRMEZCVml4RFFVRlFPMEZCUTBRN1FVRkRSaXhEUVdKTk96czdPenM3T3pzN096czdRVUY1UWtFc1NVRkJUU3h6UWtGQlR5eFZRVUZETEZGQlFVUXNSVUZCVnl4SlFVRllMRVZCUVdsQ0xFVkJRV3BDTEVWQlFYRkNMRWxCUVhKQ0xFVkJRVGhDTzBGQlEyaEVMRTFCUVUwc2EwSkJRV3RDTEZOQlFWTXNVVUZCVkN4RlFVRnRRaXhEUVVGdVFpeEZRVUZ6UWl4RFFVRjBRaXhEUVVGNFFqdEJRVU5CTEUxQlFVMHNaMEpCUVdkQ0xFdEJRVXNzWlVGQlRDeERRVUYwUWpzN1FVRkZRU3hUUVVGUExIRkNRVUZ4UWl4aFFVRnlRaXhGUVVGdlF5eEpRVUZ3UXl4RlFVRXdReXhGUVVFeFF5eERRVUZRTzBGQlEwUXNRMEZNVFRzN096czdPenM3T3pzN1FVRm5Ra0VzU1VGQlRTeHJRMEZCWVN4VlFVRkRMRU5CUVVRc1JVRkJTU3hEUVVGS08wRkJRVUVzVTBGQlZTeExRVUZMTEVsQlFVd3NRMEZCVnl4SlFVRkpMRU5CUVV3c1IwRkJWeXhKUVVGSkxFTkJRWHBDTEVOQlFWWTdRVUZCUVN4RFFVRnVRanM3T3pzN096czdPenM3T3p0QlFXRkJMRWxCUVUwc2MwUkJRWFZDTEZWQlFVTXNVVUZCUkN4RlFVRlhMRWxCUVZnc1JVRkJhVUlzUlVGQmFrSTdRVUZCUVN4VFFVRjVRaXhEUVVGRkxGRkJRVVlzUjBGQllTeEpRVUZrTEVkQlFYVkNMRmRCUVZjc1JVRkJiRU1zUjBGQmQwTXNTVUZCYUVVN1FVRkJRU3hEUVVFM1FqczdPenM3T3pzN096czdPenM3UVVGalFTeEpRVUZOTEhORVFVRjFRaXhWUVVGRExFdEJRVVFzUlVGQlVTeEpRVUZTTEVWQlFXTXNSVUZCWkR0QlFVRkJMRk5CUVhGQ0xFTkJRVU1zVVVGQlVTeEpRVUZVTEV0QlFXdENMRXRCUVVzc1NVRkJka0lzUTBGQmNrSTdRVUZCUVN4RFFVRTNRanM3T3pzN096czdPenM3UVVGWFFTeEpRVUZOTERCQ1FVRlRMRlZCUVVNc1EwRkJSQ3hGUVVGSkxFTkJRVW9zUlVGQlZUdEJRVU01UWl4TlFVRk5MRk5CUVZNc1JVRkJaanM3UVVGRlFTeFBRVUZMTEVsQlFVa3NSMEZCVkN4SlFVRm5RaXhEUVVGb1FpeEZRVUZ0UWp0QlFVTnFRaXhSUVVGSkxFVkJRVVVzWTBGQlJpeERRVUZwUWl4SFFVRnFRaXhEUVVGS0xFVkJRVEpDTzBGQlEzcENMR0ZCUVU4c1IwRkJVQ3hKUVVGakxIZENRVUZaTEVOQlFWb3NSVUZCWlN4SFFVRm1MRWxCUVhOQ0xFVkJRVVVzUjBGQlJpeEpRVUZUTEVWQlFVVXNSMEZCUml4RFFVRXZRaXhIUVVGM1F5eERRVUYwUkR0QlFVTkVPMEZCUTBZN08wRkJSVVFzVTBGQlR5eE5RVUZRTzBGQlEwUXNRMEZXVFRzN096czdPenM3T3p0QlFXOUNRU3hKUVVGTkxHZEZRVUUwUWl4VlFVRkRMRTFCUVVRc1JVRkJVeXhMUVVGVUxFVkJRV2RDTEZGQlFXaENMRVZCUVRaQ08wRkJRM0JGTEZWQlFWRXNhVUpCUVdsQ0xFdEJRV3BDTEVOQlFWSTdPMEZCUlVFc1UwRkJUenRCUVVOTUxFOUJRVWNzVjBGQlZ5eExRVUZMTEVkQlFVd3NRMEZCVXl4TFFVRlVMRU5CUVZnc1IwRkJOa0lzVDBGQlR5eERRVVJzUXp0QlFVVk1MRTlCUVVjc1YwRkJWeXhMUVVGTExFZEJRVXdzUTBGQlV5eExRVUZVTEVOQlFWZ3NSMEZCTmtJc1QwRkJUenRCUVVac1F5eEhRVUZRTzBGQlNVUXNRMEZRVFRzN096czdPenM3UVVGbFFTeEpRVUZOTERoRFFVRnRRaXhWUVVGRExFOUJRVVE3UVVGQlFTeFRRVUZoTEZWQlFWVXNSMEZCVml4SFFVRm5RaXhMUVVGTExFVkJRV3hETzBGQlFVRXNRMEZCZWtJN096czdPenM3T3p0QlFWTkJMRWxCUVUwc01FSkJRVk03UVVGQlFTeE5RVUZETEVkQlFVUXNlVVJCUVU4c1EwRkJVRHRCUVVGQkxFMUJRVlVzUjBGQlZpeDVSRUZCWjBJc1EwRkJhRUk3UVVGQlFTeFRRVUZ6UWl4TFFVRkxMRTFCUVV3c1RVRkJhVUlzVFVGQlRTeEhRVUYyUWl4SlFVRTRRaXhIUVVGd1JEdEJRVUZCTEVOQlFXWTdPenM3T3pzN096czdPenRCUVZsQkxFbEJRVTBzZDBOQlFXZENMRlZCUVVNc1QwRkJSQ3hGUVVGVkxGRkJRVllzUlVGQmRVSTdRVUZEYkVRc1RVRkJTU3hYUVVGWExFOUJRV1k3UVVGRFFTeE5RVUZOTEZkQlFWY3NVMEZCVXl4TFFVRlVMRU5CUVdVc1IwRkJaaXhEUVVGcVFqdEJRVU5CTEUxQlFVMHNWMEZCVnl4VFFVRlRMRU5CUVZRc1EwRkJha0k3TzBGQlNHdEVMREJDUVVrMVFpdzJRa0ZCYVVJc1UwRkJVeXhEUVVGVUxFTkJRV3BDTEVOQlNqUkNPenRCUVVGQkxFMUJTVFZETEVsQlNqUkRMSEZDUVVrMVF5eEpRVW8wUXp0QlFVRkJMRTFCU1hSRExFdEJTbk5ETEhGQ1FVbDBReXhMUVVwelF6czdPMEZCVFd4RUxGVkJRVkVzVjBGQlZ5eExRVUZZTEVOQlFWSTdPMEZCUlVFc1ZVRkJVU3hSUVVGU08wRkJRMEVzVTBGQlN5eEhRVUZNTzBGQlEwVXNhMEpCUVZrc1MwRkJXanRCUVVOQk8wRkJRMFlzVTBGQlN5eEhRVUZNTzBGQlEwVXNhMEpCUVZrc1MwRkJXanRCUVVOQk8wRkJRMFlzVTBGQlN5eEhRVUZNTzBGQlEwVXNhMEpCUVZrc1MwRkJXanRCUVVOQk8wRkJRMFlzVTBGQlN5eEhRVUZNTzBGQlEwVXNhMEpCUVZrc1MwRkJXanRCUVVOQk8wRkJXa1k3TzBGQlpVRXNUVUZCU1N4SlFVRktMRVZCUVZVN1FVRkRVaXhuUWtGQldTeEpRVUZhTzBGQlEwUTdPMEZCUlVRc1UwRkJUeXhSUVVGUU8wRkJRMFFzUTBFMVFrMDdPenM3T3pzN096czdPenRCUVhkRFFTeEpRVUZOTERoQ1FVRlhMRlZCUVVNc1MwRkJSQ3hGUVVGUkxFZEJRVklzUlVGQllTeEhRVUZpTzBGQlFVRXNVMEZCY1VJc1MwRkJTeXhIUVVGTUxFTkJRVk1zUzBGQlN5eEhRVUZNTEVOQlFWTXNTMEZCVkN4RlFVRm5RaXhIUVVGb1FpeERRVUZVTEVWQlFTdENMRWRCUVM5Q0xFTkJRWEpDTzBGQlFVRXNRMEZCYWtJN096czdPenM3T3pzN1FVRlZRU3hKUVVGTkxEQkNRVUZUTEZWQlFVTXNVVUZCUkN4RlFVRlhMRkZCUVZnc1JVRkJjVUlzVVVGQmNrSTdRVUZCUVN4TlFVRXJRaXhUUVVFdlFpeDVSRUZCTWtNc1EwRkJNME03UVVGQlFTeFRRVUZwUkN4elFrRkJWU3hYUVVGWkxGbEJRVmtzVjBGQlZ5eFJRVUYyUWl4SlFVRnRReXhMUVVGTExFZEJRVXdzUTBGQlV5eFRRVUZVTEVWQlFXOUNMRkZCUVhCQ0xFTkJRWHBFTEVOQlFXcEVPMEZCUVVFc1EwRkJaanM3T3pzN096czdRVUZSUVN4SlFVRk5MSGREUVVGblFpeFZRVUZETEVkQlFVUXNSVUZCVFN4aFFVRk9PMEZCUVVFc1UwRkJlVUlzYTBKQlFVMHNSMEZCVGl4RFFVRkVMRWRCUVdVc1QwRkJUeXhQUVVGUExHRkJRV1FzUTBGQlppeEhRVUU0UXl4RFFVRjBSVHRCUVVGQkxFTkJRWFJDT3pzN096czdPenRCUVZGQkxFbEJRVTBzTUVOQlFXbENMRlZCUVVNc1VVRkJSQ3hGUVVGWExHRkJRVmc3UVVGQlFTeFRRVUUyUWl4WlFVRlpMRTlCUVU4c1lVRkJia0lzUTBGQk4wSTdRVUZCUVN4RFFVRjJRanM3T3pzN096czdPMEZCVTBFc1NVRkJUU3h6UTBGQlpTeFZRVUZETEZGQlFVUXNSVUZCVnl4TFFVRllMRVZCUVhGQ08wRkJReTlETEUxQlFVMHNWVUZCVlN4TFFVRkxMRkZCUVZFc1EwRkJZaXhEUVVGb1FqdEJRVU5CTEUxQlFVMHNVMEZCVXl4SlFVRkxMRWxCUVVrc1MwRkJlRUk3UVVGRFFTeE5RVUZOTEcxQ1FVRnRRaXhMUVVGTExFZEJRVXdzUTBGQlV5eFhRVUZYTEUxQlFYQkNMRVZCUVRSQ0xFTkJRVFZDTEVOQlFYcENPenRCUVVWQkxGTkJRVThzUzBGQlN5eExRVUZNTEVOQlFWY3NiVUpCUVcxQ0xFOUJRVGxDTEVsQlFYbERMRTlCUVdoRU8wRkJRMFFzUTBGT1RTSXNJbVpwYkdVaU9pSmpZV3hqTG1weklpd2ljMjkxY21ObFVtOXZkQ0k2SWk5VmMyVnljeTl0WVhSMGNHVnljbmt2VTJsMFpYTXZjRzl3Ylc5MGFXOXVJaXdpYzI5MWNtTmxjME52Ym5SbGJuUWlPbHNpYVcxd2IzSjBJSHRjYmlBZ2FHRnpVSEp2Y0dWeWRIa3NYRzRnSUdselRuVnRMRnh1SUNCbWFXNWtWbUZzZFdWQmJtUlZibWwwTEZ4dUlDQjBiMFJsWTJsdFlXeGNibjBnWm5KdmJTQW5MaTkxZEdsc2N5YzdYRzVjYm1OdmJuTjBJRnBGVWs5ZlVFOUpUbFFnUFNCN1hHNGdJSGc2SURBc1hHNGdJSGs2SURBc1hHNGdJSG82SURCY2JuMDdYRzVjYm1OdmJuTjBJR1JwYzNSaGJtTmxNVVFnUFNBb1lTd2dZaWtnUFQ0Z1RXRjBhQzVoWW5Nb1lTQXRJR0lwTzF4dVhHNHZLbHh1SUNCQmJtZHNaU0JpWlhSM1pXVnVJSEJ2YVc1MGMxeHVJQ0JjYmlBZ1ZISmhibk5zWVhSbGN5QjBhR1VnYUhsd2IzUm9aWFJwWTJGc0lHeHBibVVnYzI4Z2RHaGhkQ0IwYUdVZ0oyWnliMjBuSUdOdmIzSmthVzVoZEdWelhHNGdJR0Z5WlNCaGRDQXdMREJjYmlBZ1hHNGdJRUJ3WVhKaGJTQmJiMkpxWldOMFhUb2dXQ0JoYm1RZ1dTQmpiMjl5WkdsdVlYUmxjeUJ2WmlCbWNtOXRJSEJ2YVc1MFhHNGdJRUJ3WVhKaGJTQmJiMkpxWldOMFhUb2dXQ0JoYm1RZ1dTQmpiM0prYVc1aGRHVnpJRzltSUhSdklIQnZhVzUwWEc0Z0lFQnlaWFIxY200Z1czSmhaR2xoYmwwNklFRnVaMnhsSUdKbGRIZGxaVzRnZEdobElIUjNieUJ3YjJsdWRITWdhVzRnY21Ga2FXRnVjMXh1S2k5Y2JtVjRjRzl5ZENCamIyNXpkQ0JoYm1kc1pTQTlJQ2hoTENCaUlEMGdXa1ZTVDE5UVQwbE9WQ2tnUFQ0Z2NtRmthV0Z1YzFSdlJHVm5jbVZsY3loTllYUm9MbUYwWVc0eUtHRXVlQ0F0SUdJdWVDd2dZUzU1SUMwZ1lpNTVLU2s3WEc1Y2JpOHFYRzRnSUVOdmJuWmxjblFnWkdWbmNtVmxjeUIwYnlCeVlXUnBZVzV6WEc0Z0lGeHVJQ0JBY0dGeVlXMGdXMjUxYldKbGNsMDZJRlpoYkhWbElHbHVJR1JsWjNKbFpYTmNiaUFnUUhKbGRIVnliaUJiYm5WdFltVnlYVG9nVm1Gc2RXVWdhVzRnY21Ga2FXRnVjMXh1S2k5Y2JtVjRjRzl5ZENCamIyNXpkQ0JrWldkeVpXVnpWRzlTWVdScFlXNXpJRDBnS0dSbFozSmxaWE1wSUQwK0lHUmxaM0psWlhNZ0tpQk5ZWFJvTGxCSklDOGdNVGd3TzF4dVhHNHZLbHh1SUNCRWFXeGhkR1ZjYmlBZ1hHNGdJRU5vWVc1blpTQjBhR1VnY0hKdlozSmxjM05wYjI0Z1ltVjBkMlZsYmlCaElHRnVaQ0JpSUdGalkyOXlaR2x1WnlCMGJ5QmthV3hoZEdsdmJpNWNiaUFnWEc0Z0lGTnZJR1JwYkdGMGFXOXVJRDBnTUM0MUlIZHZkV3hrSUdOb1lXNW5aVnh1SUNCY2JpQWdZU0F0TFMwdExTMHRMUzBnWWx4dUlDQmNiaUFnZEc5Y2JpQWdYRzRnSUdFZ0xTMHRMU0JpWEc0Z0lGeHVJQ0JBY0dGeVlXMGdXMjUxYldKbGNsMDZJRkJ5WlhacGIzVnpJSFpoYkhWbFhHNGdJRUJ3WVhKaGJTQmJiblZ0WW1WeVhUb2dRM1Z5Y21WdWRDQjJZV3gxWlZ4dUlDQkFjR0Z5WVcwZ1cyNTFiV0psY2wwNklFUnBiR0YwWlNCd2NtOW5jbVZ6Y3lCaWVTQjRYRzRnSUVCeVpYUjFjbTRnVzI1MWJXSmxjbDA2SUZCeVpYWnBiM1Z6SUhaaGJIVmxJSEJzZFhNZ2RHaGxJR1JwYkdGMFpXUWdaR2xtWm1WeVpXNWpaVnh1S2k5Y2JtVjRjRzl5ZENCamIyNXpkQ0JrYVd4aGRHVWdQU0FvWVN3Z1lpd2daR2xzWVhScGIyNHBJRDArSUdFZ0t5QW9LR0lnTFNCaEtTQXFJR1JwYkdGMGFXOXVLVHRjYmx4dUx5cGNiaUFnUkdsemRHRnVZMlZjYmlBZ1hHNGdJRkpsZEhWeWJuTWdkR2hsSUdScGMzUmhibU5sSUdKbGRIZGxaVzRnZEhkdklHNGdaR2x0Wlc1emFXOXVZV3dnY0c5cGJuUnpMbHh1SUNCY2JpQWdRSEJoY21GdElGdHZZbXBsWTNRdmJuVnRZbVZ5WFRvZ2VDQmhibVFnZVNCdmNpQnFkWE4wSUhnZ2IyWWdjRzlwYm5RZ1FWeHVJQ0JBY0dGeVlXMGdXMjlpYW1WamRDOXVkVzFpWlhKZE9pQW9iM0IwYVc5dVlXd3BPaUI0SUdGdVpDQjVJRzl5SUdwMWMzUWdlQ0J2WmlCd2IybHVkQ0JDWEc0Z0lFQnlaWFIxY200Z1cyNTFiV0psY2wwNklGUm9aU0JrYVhOMFlXNWpaU0JpWlhSM1pXVnVJSFJvWlNCMGQyOGdjRzlwYm5SelhHNHFMMXh1Wlhod2IzSjBJR052Ym5OMElHUnBjM1JoYm1ObElEMGdLR0VzSUdJZ1BTQmFSVkpQWDFCUFNVNVVLU0E5UGlCN1hHNGdJQzh2SURGRUlHUnBiV1Z1YzJsdmJuTmNiaUFnYVdZZ0tHbHpUblZ0S0dFcEtTQjdYRzRnSUNBZ2NtVjBkWEp1SUdScGMzUmhibU5sTVVRb1lTd2dZaWs3WEc1Y2JpQWdMeThnVFhWc2RHa3RaR2x0Wlc1emFXOXVZV3hjYmlBZ2ZTQmxiSE5sSUh0Y2JpQWdJQ0JqYjI1emRDQjRSR1ZzZEdFZ1BTQmthWE4wWVc1alpURkVLR0V1ZUN3Z1lpNTRLVHRjYmlBZ0lDQmpiMjV6ZENCNVJHVnNkR0VnUFNCa2FYTjBZVzVqWlRGRUtHRXVlU3dnWWk1NUtUdGNiaUFnSUNCamIyNXpkQ0I2UkdWc2RHRWdQU0FvYVhOT2RXMG9ZUzU2S1NrZ1B5QmthWE4wWVc1alpURkVLR0V1ZWl3Z1lpNTZLU0E2SURBN1hHNWNiaUFnSUNCeVpYUjFjbTRnVFdGMGFDNXpjWEowS0NoNFJHVnNkR0VnS2lvZ01pa2dLeUFvZVVSbGJIUmhJQ29xSURJcElDc2dLSHBFWld4MFlTQXFLaUF5S1NrN1hHNGdJSDFjYm4wN1hHNWNiaThxWEc0Z0lFVmhjMlVnZG1Gc2RXVWdkMmwwYUdsdUlISmhibWRsWkNCd1lYSmhiV1YwWlhKelhHNGdJRnh1SUNCQWNHRnlZVzBnVzI1MWJXSmxjbDA2SUZCeWIyZHlaWE56SUdKbGRIZGxaVzRnTUNCaGJtUWdNVnh1SUNCQWNHRnlZVzBnVzI1MWJXSmxjbDA2SUZaaGJIVmxJRzltSURBZ2NISnZaM0psYzNOY2JpQWdRSEJoY21GdElGdHVkVzFpWlhKZE9pQldZV3gxWlNCdlppQXhJSEJ5YjJkeVpYTnpYRzRnSUVCd1lYSmhiU0JiYzNSeWFXNW5JSHg4SUdaMWJtTjBhVzl1WFRvZ1RtRnRaU0J2WmlCd2NtVnpaWFFnWldGemFXNW5YRzRnSUNBZ2RHOGdkWE5sSUc5eUlHZGxibVZ5WVhSbFpDQmxZWE5wYm1jZ1puVnVZM1JwYjI1Y2JpQWdRSEpsZEhWeWJpQmJiblZ0WW1WeVhUb2dWbUZzZFdVZ2IyWWdaV0Z6WldRZ2NISnZaM0psYzNNZ2FXNGdjbUZ1WjJWY2Jpb3ZJRnh1Wlhod2IzSjBJR052Ym5OMElHVmhjMlVnUFNBb2NISnZaM0psYzNNc0lHWnliMjBzSUhSdkxDQmxZWE5sS1NBOVBpQjdYRzRnSUdOdmJuTjBJSEJ5YjJkeVpYTnpUR2x0YVhSbFpDQTlJSEpsYzNSeWFXTjBLSEJ5YjJkeVpYTnpMQ0F3TENBeEtUdGNiaUFnWTI5dWMzUWdaV0Z6WldSUWNtOW5jbVZ6Y3lBOUlHVmhjMlVvY0hKdlozSmxjM05NYVcxcGRHVmtLVHRjYmx4dUlDQnlaWFIxY200Z1oyVjBWbUZzZFdWR2NtOXRVSEp2WjNKbGMzTW9aV0Z6WldSUWNtOW5jbVZ6Y3l3Z1puSnZiU3dnZEc4cE8xeHVmVHRjYmlCY2JpOHFYRzRnSUVoNWNHOTBaVzUxYzJWY2JpQWdYRzRnSUZKbGRIVnlibk1nZEdobElHaDVjRzkwWlc1MWMyVXNJSE5wWkdVZ1F5d2daMmwyWlc0Z2RHaGxJR3hsYm1kMGFITWdiMllnYzJsa1pYTWdRU0JoYm1RZ1FpNWNiaUFnWEc0Z0lFQndZWEpoYlNCYmJuVnRZbVZ5WFRvZ1RHVnVaM1JvSUc5bUlFRmNiaUFnUUhCaGNtRnRJRnR1ZFcxaVpYSmRPaUJNWlc1bmRHZ2diMllnUWx4dUlDQkFjbVYwZFhKdUlGdHVkVzFpWlhKZE9pQk1aVzVuZEdnZ2IyWWdRMXh1S2k5Y2JtVjRjRzl5ZENCamIyNXpkQ0JvZVhCdmRHVnVkWE5sSUQwZ0tHRXNJR0lwSUQwK0lFMWhkR2d1YzNGeWRDZ29ZU0FxSUdFcElDc2dLR0lnS2lCaUtTazdYRzVjYmk4cVhHNGdJRlpoYkhWbElHbHVJSEpoYm1kbElHWnliMjBnY0hKdlozSmxjM05jYmlBZ1hHNGdJRWRwZG1WdUlHRWdiRzkzWlhJZ2JHbHRhWFFnWVc1a0lHRnVJSFZ3Y0dWeUlHeHBiV2wwTENCM1pTQnlaWFIxY200Z2RHaGxJSFpoYkhWbElIZHBkR2hwYmx4dUlDQjBhR0YwSUhKaGJtZGxJR0Z6SUdWNGNISmxjM05sWkNCaWVTQndjbTluY21WemN5QW9ZU0J1ZFcxaVpYSWdabkp2YlNBd0xURXBYRzRnSUZ4dUlDQkFjR0Z5WVcwZ1cyNTFiV0psY2wwNklGUm9aU0J3Y205bmNtVnpjeUJpWlhSM1pXVnVJR3h2ZDJWeUlHRnVaQ0IxY0hCbGNpQnNhVzFwZEhNZ1pYaHdjbVZ6YzJWa0lEQXRNVnh1SUNCQWNHRnlZVzBnVzI1MWJXSmxjbDA2SUV4dmQyVnlJR3hwYldsMElHOW1JSEpoYm1kbFhHNGdJRUJ3WVhKaGJTQmJiblZ0WW1WeVhUb2dWWEJ3WlhJZ2JHbHRhWFFnYjJZZ2NtRnVaMlZjYmlBZ1FISmxkSFZ5YmlCYmJuVnRZbVZ5WFRvZ1ZtRnNkV1VnWVhNZ1kyRnNZM1ZzWVhSbFpDQm1jbTl0SUhCeWIyZHlaWE56SUhkcGRHaHBiaUJ5WVc1blpTQW9ibTkwSUd4cGJXbDBaV1FnZDJsMGFHbHVJSEpoYm1kbEtWeHVLaTljYm1WNGNHOXlkQ0JqYjI1emRDQm5aWFJXWVd4MVpVWnliMjFRY205bmNtVnpjeUE5SUNod2NtOW5jbVZ6Y3l3Z1puSnZiU3dnZEc4cElEMCtJQ2d0SUhCeWIyZHlaWE56SUNvZ1puSnZiU2tnS3lBb2NISnZaM0psYzNNZ0tpQjBieWtnS3lCbWNtOXRPMXh1WEc0dktseHVJQ0JRY205bmNtVnpjeUIzYVhSb2FXNGdaMmwyWlc0Z2NtRnVaMlZjYmlBZ1hHNGdJRWRwZG1WdUlHRWdiRzkzWlhJZ2JHbHRhWFFnWVc1a0lHRnVJSFZ3Y0dWeUlHeHBiV2wwTENCM1pTQnlaWFIxY200Z2RHaGxJSEJ5YjJkeVpYTnpYRzRnSUNobGVIQnlaWE56WldRZ1lYTWdZU0J1ZFcxaVpYSWdNQzB4S1NCeVpYQnlaWE5sYm5SbFpDQmllU0IwYUdVZ1oybDJaVzRnZG1Gc2RXVXNJR0Z1WkZ4dUlDQnNhVzFwZENCMGFHRjBJSEJ5YjJkeVpYTnpJSFJ2SUhkcGRHaHBiaUF3TFRFdVhHNGdJRnh1SUNCQWNHRnlZVzBnVzI1MWJXSmxjbDA2SUZaaGJIVmxJSFJ2SUdacGJtUWdjSEp2WjNKbGMzTWdkMmwwYUdsdUlHZHBkbVZ1SUhKaGJtZGxYRzRnSUVCd1lYSmhiU0JiYm5WdFltVnlYVG9nVEc5M1pYSWdiR2x0YVhRZ1hHNGdJRUJ3WVhKaGJTQmJiblZ0WW1WeVhUb2dWWEJ3WlhJZ2JHbHRhWFJjYmlBZ1FISmxkSFZ5YmlCYmJuVnRZbVZ5WFRvZ1VISnZaM0psYzNNZ2IyWWdkbUZzZFdVZ2QybDBhR2x1SUhKaGJtZGxJR0Z6SUdWNGNISmxjM05sWkNBd0xURmNiaW92WEc1bGVIQnZjblFnWTI5dWMzUWdaMlYwVUhKdlozSmxjM05HY205dFZtRnNkV1VnUFNBb2RtRnNkV1VzSUdaeWIyMHNJSFJ2S1NBOVBpQW9kbUZzZFdVZ0xTQm1jbTl0S1NBdklDaDBieUF0SUdaeWIyMHBPMXh1WEc0dktseHVJQ0JQWm1aelpYUWdZbVYwZDJWbGJpQjBkMjhnYjJKcVpXTjBjeUJ2WmlCdWRXMWlaWEp6WEc1Y2JpQWdTV1lnY0hKdmNHVnlkSGtnYVhNZ1ptOTFibVFnYVc0Z1lpQnViM1FnY0hKbGMyVnVkQ0JwYmlCaExDQnBkQ0IzYVd4c0lISmxkSFZ5YmlCZ01HQWdabTl5SUhSb1lYUWdjSEp2Y0M1Y2JpQWdYRzRnSUVCd1lYSmhiU0JiVUc5cGJuUmRPaUJHYVhKemRDQnZZbXBsWTNSY2JpQWdRSEJoY21GdElGdFFiMmx1ZEYwNklGTmxZMjl1WkNCdlltcGxZM1JjYmlBZ1FISmxkSFZ5YmlCYlQyWm1jMlYwWFRvZ1JHbHpkR0Z1WTJVZ2JXVjBjbWxqY3lCaVpYUjNaV1Z1SUhSM2J5QndiMmx1ZEhOY2Jpb3ZYRzVsZUhCdmNuUWdZMjl1YzNRZ2IyWm1jMlYwSUQwZ0tHRXNJR0lwSUQwK0lIdGNiaUFnWTI5dWMzUWdiMlptYzJWMElEMGdlMzA3WEc1Y2JpQWdabTl5SUNoc1pYUWdhMlY1SUdsdUlHSXBJSHRjYmlBZ0lDQnBaaUFvWWk1b1lYTlBkMjVRY205d1pYSjBlU2hyWlhrcEtTQjdYRzRnSUNBZ0lDQnZabVp6WlhSYmEyVjVYU0E5SUdoaGMxQnliM0JsY25SNUtHRXNJR3RsZVNrZ1B5QmlXMnRsZVYwZ0xTQmhXMnRsZVYwZ09pQXdPMXh1SUNBZ0lIMWNiaUFnZlZ4dVhHNGdJSEpsZEhWeWJpQnZabVp6WlhRN1hHNTlPMXh1WEc0dktseHVJQ0JRYjJsdWRDQm1jbTl0SUdGdVoyeGxJR0Z1WkNCa2FYTjBZVzVqWlZ4dUlDQmNiaUFnUUhCaGNtRnRJRnR2WW1wbFkzUmRPaUF5UkNCd2IybHVkQ0J2WmlCdmNtbG5hVzVjYmlBZ1FIQmhjbUZ0SUZ0dWRXMWlaWEpkT2lCQmJtZHNaU0JtY205dElHOXlhV2RwYmx4dUlDQkFjR0Z5WVcwZ1cyNTFiV0psY2wwNklFUnBjM1JoYm1ObElHWnliMjBnYjNKcFoybHVYRzRnSUVCeVpYUjFjbTRnVzI5aWFtVmpkRjA2SUVOaGJHTjFiR0YwWldRZ01rUWdjRzlwYm5SY2Jpb3ZYRzVsZUhCdmNuUWdZMjl1YzNRZ2NHOXBiblJHY205dFFXNW5iR1ZCYm1SRWFYTjBZVzVqWlNBOUlDaHZjbWxuYVc0c0lHRnVaMnhsTENCa2FYTjBZVzVqWlNrZ1BUNGdlMXh1SUNCaGJtZHNaU0E5SUdSbFozSmxaWE5VYjFKaFpHbGhibk1vWVc1bmJHVXBPMXh1WEc0Z0lISmxkSFZ5YmlCN1hHNGdJQ0FnZURvZ1pHbHpkR0Z1WTJVZ0tpQk5ZWFJvTG1OdmN5aGhibWRzWlNrZ0t5QnZjbWxuYVc0dWVDeGNiaUFnSUNCNU9pQmthWE4wWVc1alpTQXFJRTFoZEdndWMybHVLR0Z1WjJ4bEtTQXJJRzl5YVdkcGJpNTVYRzRnSUgwN1hHNTlPMXh1WEc0dktseHVJQ0JEYjI1MlpYSjBJSEpoWkdsaGJuTWdkRzhnWkdWbmNtVmxjMXh1SUNCY2JpQWdRSEJoY21GdElGdHVkVzFpWlhKZE9pQldZV3gxWlNCcGJpQnlZV1JwWVc1elhHNGdJRUJ5WlhSMWNtNGdXMjUxYldKbGNsMDZJRlpoYkhWbElHbHVJR1JsWjNKbFpYTmNiaW92WEc1bGVIQnZjblFnWTI5dWMzUWdjbUZrYVdGdWMxUnZSR1ZuY21WbGN5QTlJQ2h5WVdScFlXNXpLU0E5UGlCeVlXUnBZVzV6SUNvZ01UZ3dJQzhnVFdGMGFDNVFTVHRjYmx4dUx5cGNiaUFnVW1WMGRYSnVJSEpoYm1SdmJTQnVkVzFpWlhJZ1ltVjBkMlZsYmlCeVlXNW5aVnh1SUNCY2JpQWdRSEJoY21GdElGdHVkVzFpWlhKZElDaHZjSFJwYjI1aGJDazZJRTkxZEhCMWRDQnRhVzVwYlhWdFhHNGdJRUJ3WVhKaGJTQmJiblZ0WW1WeVhTQW9iM0IwYVc5dVlXd3BPaUJQZFhSd2RYUWdiV0Y0YVcxMWJWeHVJQ0JBY21WMGRYSnVJRnR1ZFcxaVpYSmRPaUJTWVc1a2IyMGdiblZ0WW1WeUlIZHBkR2hwYmlCeVlXNW5aU3dnYjNJZ01DQmhibVFnTVNCcFppQnViMjVsSUhCeWIzWnBaR1ZrWEc0cUwxeHVaWGh3YjNKMElHTnZibk4wSUhKaGJtUnZiU0E5SUNodGFXNGdQU0F3TENCdFlYZ2dQU0F4S1NBOVBpQk5ZWFJvTG5KaGJtUnZiU2dwSUNvZ0tHMWhlQ0F0SUcxcGJpa2dLeUJ0YVc0N1hHNWNiaThxWEc0Z0lFTmhiR04xYkdGMFpTQnlaV3hoZEdsMlpTQjJZV3gxWlZ4dUlDQmNiaUFnVkdGclpYTWdkR2hsSUc5d1pYSmhkRzl5SUdGdVpDQjJZV3gxWlNCbWNtOXRJR0VnYzNSeWFXNW5MQ0JwWlNCY0lpczlOVndpTENCaGJtUWdZWEJ3YkdsbGMxeHVJQ0IwYnlCMGFHVWdZM1Z5Y21WdWRDQjJZV3gxWlNCMGJ5QnlaWE52YkhabElHRWdibVYzSUhSaGNtZGxkQzVjYmlBZ1hHNGdJRUJ3WVhKaGJTQmJiblZ0WW1WeVhUb2dRM1Z5Y21WdWRDQjJZV3gxWlZ4dUlDQkFjR0Z5WVcwZ1czTjBjbWx1WjEwNklGSmxiR0YwYVhabElIWmhiSFZsWEc0Z0lFQnlaWFIxY200Z1cyNTFiV0psY2wwNklFNWxkeUIyWVd4MVpWeHVLaTljYm1WNGNHOXlkQ0JqYjI1emRDQnlaV3hoZEdsMlpWWmhiSFZsSUQwZ0tHTjFjbkpsYm5Rc0lISmxiR0YwYVhabEtTQTlQaUI3WEc0Z0lHeGxkQ0J1WlhkV1lXeDFaU0E5SUdOMWNuSmxiblE3WEc0Z0lHTnZibk4wSUdWeGRXRjBhVzl1SUQwZ2NtVnNZWFJwZG1VdWMzQnNhWFFvSnowbktUdGNiaUFnWTI5dWMzUWdiM0JsY21GMGIzSWdQU0JsY1hWaGRHbHZibHN3WFR0Y2JpQWdiR1YwSUhzZ2RXNXBkQ3dnZG1Gc2RXVWdmU0E5SUdacGJtUldZV3gxWlVGdVpGVnVhWFFvWlhGMVlYUnBiMjViTVYwcE8xeHVYRzRnSUhaaGJIVmxJRDBnY0dGeWMyVkdiRzloZENoMllXeDFaU2s3WEc1Y2JpQWdjM2RwZEdOb0lDaHZjR1Z5WVhSdmNpa2dlMXh1SUNCallYTmxJQ2NySnpwY2JpQWdJQ0J1WlhkV1lXeDFaU0FyUFNCMllXeDFaVHRjYmlBZ0lDQmljbVZoYXp0Y2JpQWdZMkZ6WlNBbkxTYzZYRzRnSUNBZ2JtVjNWbUZzZFdVZ0xUMGdkbUZzZFdVN1hHNGdJQ0FnWW5KbFlXczdYRzRnSUdOaGMyVWdKeW9uT2x4dUlDQWdJRzVsZDFaaGJIVmxJQ285SUhaaGJIVmxPMXh1SUNBZ0lHSnlaV0ZyTzF4dUlDQmpZWE5sSUNjdkp6cGNiaUFnSUNCdVpYZFdZV3gxWlNBdlBTQjJZV3gxWlR0Y2JpQWdJQ0JpY21WaGF6dGNiaUFnZlZ4dUlDQmNiaUFnYVdZZ0tIVnVhWFFwSUh0Y2JpQWdJQ0J1WlhkV1lXeDFaU0FyUFNCMWJtbDBPMXh1SUNCOVhHNWNiaUFnY21WMGRYSnVJRzVsZDFaaGJIVmxPMXh1ZlR0Y2JseHVMeXBjYmlBZ1VtVnpkSEpwWTNRZ2RtRnNkV1VnZEc4Z2NtRnVaMlZjYmlBZ1hHNGdJRkpsZEhWeWJpQjJZV3gxWlNCM2FYUm9hVzRnZEdobElISmhibWRsSUc5bUlHeHZkMlZ5VEdsdGFYUWdZVzVrSUhWd2NHVnlUR2x0YVhSY2JpQWdYRzRnSUVCd1lYSmhiU0JiYm5WdFltVnlYVG9nVm1Gc2RXVWdkRzhnYTJWbGNDQjNhWFJvYVc0Z2NtRnVaMlZjYmlBZ1FIQmhjbUZ0SUZ0dWRXMWlaWEpkT2lCTWIzZGxjaUJzYVcxcGRDQnZaaUJ5WVc1blpWeHVJQ0JBY0dGeVlXMGdXMjUxYldKbGNsMDZJRlZ3Y0dWeUlHeHBiV2wwSUc5bUlISmhibWRsWEc0Z0lFQnlaWFIxY200Z1cyNTFiV0psY2wwNklGWmhiSFZsSUdGeklHeHBiV2wwWldRZ2QybDBhR2x1SUdkcGRtVnVJSEpoYm1kbFhHNHFMMXh1Wlhod2IzSjBJR052Ym5OMElISmxjM1J5YVdOMElEMGdLSFpoYkhWbExDQnRhVzRzSUcxaGVDa2dQVDRnVFdGMGFDNXRZWGdvVFdGMGFDNXRhVzRvZG1Gc2RXVXNJRzFoZUNrc0lHMXBiaWs3WEc1Y2JpOHFYRzRnSUVaeVlXMWxjbUYwWlMxcGJtUmxjR1Z1WkdWdWRDQnpiVzl2ZEdocGJtZGNibHh1SUNCQWNHRnlZVzBnVzI1MWJXSmxjbDA2SUU1bGR5QjJZV3gxWlZ4dUlDQkFjR0Z5WVcwZ1cyNTFiV0psY2wwNklFOXNaQ0IyWVd4MVpWeHVJQ0JBY0dGeVlXMGdXMjUxYldKbGNsMDZJRVp5WVcxbElHUjFjbUYwYVc5dVhHNGdJRUJ3WVhKaGJTQmJiblZ0WW1WeVhTQW9iM0IwYVc5dVlXd3BPaUJUYlc5dmRHaHBibWNnS0RBZ2FYTWdibTl1WlNsY2Jpb3ZYRzVsZUhCdmNuUWdZMjl1YzNRZ2MyMXZiM1JvSUQwZ0tHNWxkMVpoYkhWbExDQnZiR1JXWVd4MVpTd2daSFZ5WVhScGIyNHNJSE50YjI5MGFHbHVaeUE5SURBcElEMCtJSFJ2UkdWamFXMWhiQ2h2YkdSV1lXeDFaU0FySUNoa2RYSmhkR2x2YmlBcUlDaHVaWGRXWVd4MVpTQXRJRzlzWkZaaGJIVmxLU0F2SUUxaGRHZ3ViV0Y0S0hOdGIyOTBhR2x1Wnl3Z1pIVnlZWFJwYjI0cEtTazdYRzVjYmk4cVhHNGdJRU52Ym5abGNuUWdlQ0J3WlhJZ2MyVmpiMjVrSUhSdklIQmxjaUJtY21GdFpTQjJaV3h2WTJsMGVTQmlZWE5sWkNCdmJpQm1jSE5jYmlBZ1hHNGdJRUJ3WVhKaGJTQmJiblZ0WW1WeVhUb2dWVzVwZENCd1pYSWdjMlZqYjI1a1hHNGdJRUJ3WVhKaGJTQmJiblZ0WW1WeVhUb2dSbkpoYldVZ1pIVnlZWFJwYjI0Z2FXNGdiWE5jYmlvdlhHNWxlSEJ2Y25RZ1kyOXVjM1FnYzNCbFpXUlFaWEpHY21GdFpTQTlJQ2g0Y0hNc0lHWnlZVzFsUkhWeVlYUnBiMjRwSUQwK0lDaHBjMDUxYlNoNGNITXBLU0EvSUhod2N5QXZJQ2d4TURBd0lDOGdabkpoYldWRWRYSmhkR2x2YmlrZ09pQXdPMXh1WEc0dktseHVJQ0JEYjI1MlpYSjBJSFpsYkc5amFYUjVJR2x1ZEc4Z2RtVnNhV05wZEhrZ2NHVnlJSE5sWTI5dVpGeHVJQ0JjYmlBZ1FIQmhjbUZ0SUZ0dWRXMWlaWEpkT2lCVmJtbDBJSEJsY2lCbWNtRnRaVnh1SUNCQWNHRnlZVzBnVzI1MWJXSmxjbDA2SUVaeVlXMWxJR1IxY21GMGFXOXVJR2x1SUcxelhHNHFMMXh1Wlhod2IzSjBJR052Ym5OMElITndaV1ZrVUdWeVUyVmpiMjVrSUQwZ0tIWmxiRzlqYVhSNUxDQm1jbUZ0WlVSMWNtRjBhVzl1S1NBOVBpQjJaV3h2WTJsMGVTQXFJQ2d4TURBd0lDOGdabkpoYldWRWRYSmhkR2x2YmlrN1hHNWNiaThxWEc0Z0lFTnlaV0YwWlNCemRHVndjR1ZrSUhabGNuTnBiMjRnYjJZZ01DMHhJSEJ5YjJkeVpYTnpYRzRnSUZ4dUlDQkFjR0Z5WVcwZ1cyNTFiV0psY2wwNklFTjFjbkpsYm5RZ2RtRnNkV1ZjYmlBZ1FIQmhjbUZ0SUZ0cGJuUmRPaUJPZFcxaVpYSWdiMllnYzNSbGNITmNiaUFnUUhKbGRIVnliaUJiYm5WdFltVnlYVG9nVTNSbGNIQmxaQ0IyWVd4MVpWeHVLaTljYm1WNGNHOXlkQ0JqYjI1emRDQnpkR1Z3VUhKdlozSmxjM01nUFNBb2NISnZaM0psYzNNc0lITjBaWEJ6S1NBOVBpQjdYRzRnSUdOdmJuTjBJSE5sWjIxbGJuUWdQU0F4SUM4Z0tITjBaWEJ6SUMwZ01TazdYRzRnSUdOdmJuTjBJSFJoY21kbGRDQTlJREVnTFNBb01TQXZJSE4wWlhCektUdGNiaUFnWTI5dWMzUWdjSEp2WjNKbGMzTlBabFJoY21kbGRDQTlJRTFoZEdndWJXbHVLSEJ5YjJkeVpYTnpJQzhnZEdGeVoyVjBMQ0F4S1R0Y2JseHVJQ0J5WlhSMWNtNGdUV0YwYUM1bWJHOXZjaWh3Y205bmNtVnpjMDltVkdGeVoyVjBJQzhnYzJWbmJXVnVkQ2tnS2lCelpXZHRaVzUwTzF4dWZUc2lYWDA9XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9pbmMvY2FsYy5qc1xuICoqIG1vZHVsZSBpZCA9IDIwXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG52YXIgQ0FNRUxfQ0FTRV9QQVRURVJOID0gLyhbYS16XSkoW0EtWl0pL2c7XG52YXIgUkVQTEFDRV9URU1QTEFURSA9ICckMS0kMic7XG52YXIgSEFTX1BFUkZPUk1BTkNFX05PVyA9IHR5cGVvZiBwZXJmb3JtYW5jZSAhPT0gJ3VuZGVmaW5lZCcgJiYgcGVyZm9ybWFuY2Uubm93O1xuXG4vKlxuICBHZXQgdmFyIHR5cGUgYXMgc3RyaW5nXG4gIFxuICBAcGFyYW06IFZhcmlhYmxlIHRvIHRlc3RcbiAgQHJldHVybiBbc3RyaW5nXTogUmV0dXJucywgZm9yIGluc3RhbmNlICdPYmplY3QnIGlmIFtvYmplY3QgT2JqZWN0XVxuKi9cbnZhciB2YXJUeXBlID0gZnVuY3Rpb24gKHZhcmlhYmxlKSB7XG4gIHJldHVybiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwodmFyaWFibGUpLnNsaWNlKDgsIC0xKTtcbn07XG5cbi8qXG4gIENvbnZlcnQgY2FtZWxDYXNlIHRvIGRhc2gtY2FzZVxuXG4gIEBwYXJhbSBbc3RyaW5nXVxuICBAcmV0dXJuIFtzdHJpbmddXG4qL1xudmFyIGNhbWVsVG9EYXNoID0gZXhwb3J0cy5jYW1lbFRvRGFzaCA9IGZ1bmN0aW9uIChzdHJpbmcpIHtcbiAgcmV0dXJuIHN0cmluZy5yZXBsYWNlKENBTUVMX0NBU0VfUEFUVEVSTiwgUkVQTEFDRV9URU1QTEFURSkudG9Mb3dlckNhc2UoKTtcbn07XG5cbnZhciBjcmVhdGVEZWxpbWl0ZWQgPSBleHBvcnRzLmNyZWF0ZURlbGltaXRlZCA9IGZ1bmN0aW9uICh2YWx1ZXMsIHRlcm1zLCBkZWxpbWl0ZXIsIGNob3ApIHtcbiAgdmFyIG51bVRlcm1zID0gdGVybXMubGVuZ3RoO1xuICB2YXIgY29tYmluZWQgPSAnJztcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IG51bVRlcm1zOyBpKyspIHtcbiAgICB2YXIgdGVybSA9IHRlcm1zW2ldO1xuICAgIGlmICh2YWx1ZXMuaGFzT3duUHJvcGVydHkodGVybSkpIHtcbiAgICAgIGNvbWJpbmVkICs9IHZhbHVlc1t0ZXJtXSArIGRlbGltaXRlcjtcbiAgICB9XG4gIH1cblxuICBpZiAoY2hvcCkge1xuICAgIGNvbWJpbmVkID0gY29tYmluZWQuc2xpY2UoMCwgLWNob3ApO1xuICB9XG5cbiAgcmV0dXJuIGNvbWJpbmVkO1xufTtcblxuLypcbiAgQ3JlYXRlIGEgZnVuY3Rpb24gc3RyaW5nXG5cbiAgJzIwcHgnLCAndHJhbnNsYXRlJyAtPiAndHJhbnNsYXRlKDIwcHgpJ1xuXG4gIEBwYXJhbSBbc3RyaW5nXVxuICBAcGFyYW0gW3N0cmluZ11cbiAgQHJldHVybiBbc3RyaW5nXVxuKi9cbnZhciBjcmVhdGVGdW5jdGlvblN0cmluZyA9IGV4cG9ydHMuY3JlYXRlRnVuY3Rpb25TdHJpbmcgPSBmdW5jdGlvbiAodmFsdWUsIHByZWZpeCkge1xuICByZXR1cm4gcHJlZml4ICsgJygnICsgdmFsdWUgKyAnKSc7XG59O1xuXG4vKlxuICBHZW5lcmF0ZSBjdXJyZW50IHRpbWVzdGFtcFxuICBcbiAgQHJldHVybiBbdGltZXN0YW1wXTogQ3VycmVudCBVTklYIHRpbWVzdGFtcFxuKi9cbnZhciBjdXJyZW50VGltZSA9IGV4cG9ydHMuY3VycmVudFRpbWUgPSBIQVNfUEVSRk9STUFOQ0VfTk9XID8gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gcGVyZm9ybWFuY2Uubm93KCk7XG59IDogZnVuY3Rpb24gKCkge1xuICByZXR1cm4gbmV3IERhdGUoKS5nZXRUaW1lKCk7XG59O1xuXG4vKlxuICBTcGxpdCBhIHZhbHVlIGludG8gYSB2YWx1ZS91bml0IG9iamVjdFxuICBcbiAgICBcIjIwMHB4XCIgLT4geyB2YWx1ZTogMjAwLCB1bml0OiBcInB4XCIgfVxuICAgIFxuICBAcGFyYW0gW3N0cmluZ106IFZhbHVlIHRvIHNwbGl0XG4gIEByZXR1cm4gW29iamVjdF06IE9iamVjdCB3aXRoIHZhbHVlIGFuZCB1bml0IHByb3BzXG4qL1xudmFyIGZpbmRWYWx1ZUFuZFVuaXQgPSBleHBvcnRzLmZpbmRWYWx1ZUFuZFVuaXQgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgaWYgKHZhbHVlLm1hdGNoKSB7XG4gICAgdmFyIHNwbGl0VmFsdWUgPSB2YWx1ZS5tYXRjaCgvKC0/XFxkKlxcLj9cXGQqKSguKikvKTtcblxuICAgIHJldHVybiB7XG4gICAgICB2YWx1ZTogcGFyc2VGbG9hdChzcGxpdFZhbHVlWzFdKSxcbiAgICAgIHVuaXQ6IHNwbGl0VmFsdWVbMl1cbiAgICB9O1xuICB9IGVsc2Uge1xuICAgIHJldHVybiB7IHZhbHVlOiB2YWx1ZSB9O1xuICB9XG59O1xuXG4vKlxuICBTcGxpdCBjb2xvciBzdHJpbmcgaW50byBtYXAgb2YgY29sb3IgcHJvcGVydGllc1xuXG4gIFwicmdiYSgyNTUsIDI1NSwgMjU1LCAwKVwiLCBbXCJSZWRcIiwgJ0dyZWVuXCIsIFwiQmx1ZVwiLCBcIkFscGhhXCJdXG5cbiAgeyBSZWQ6IDI1NS4uLiB9XG4qL1xudmFyIGdldENvbG9yVmFsdWVzID0gZXhwb3J0cy5nZXRDb2xvclZhbHVlcyA9IGZ1bmN0aW9uICh2YWx1ZSwgY29sb3JUZXJtcykge1xuICB2YXIgbnVtQ29sb3JUZXJtcyA9IGNvbG9yVGVybXMubGVuZ3RoO1xuICB2YXIgY29sb3JWYWx1ZXMgPSB7fTtcbiAgdmFyIGNvbG9ycyA9IHNwbGl0Q29tbWFEZWxpbWl0ZWQoZ2V0VmFsdWVGcm9tRnVuY3Rpb25TdHJpbmcodmFsdWUpKTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IG51bUNvbG9yVGVybXM7IGkrKykge1xuICAgIGNvbG9yVmFsdWVzW2NvbG9yVGVybXNbaV1dID0gY29sb3JzW2ldICE9PSB1bmRlZmluZWQgPyBjb2xvcnNbaV0gOiAxO1xuICB9XG5cbiAgcmV0dXJuIGNvbG9yVmFsdWVzO1xufTtcblxuLypcbiAgR2V0IHZhbHVlIGZyb20gZnVuY3Rpb24gc3RyaW5nXG5cbiAgXCJ0cmFuc2xhdGVYKDIwcHgpXCIgLT4gXCIyMHB4XCJcbiovXG52YXIgZ2V0VmFsdWVGcm9tRnVuY3Rpb25TdHJpbmcgPSBleHBvcnRzLmdldFZhbHVlRnJvbUZ1bmN0aW9uU3RyaW5nID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gIHJldHVybiB2YWx1ZS5zdWJzdHJpbmcodmFsdWUuaW5kZXhPZignKCcpICsgMSwgdmFsdWUubGFzdEluZGV4T2YoJyknKSk7XG59O1xuXG4vKlxuICBDaGVjayBpZiB0d28gb2JqZWN0cyBoYXZlIGNoYW5nZWQgZnJvbSBlYWNoIG90aGVyXG4gIFxuICBAcGFyYW0gW29iamVjdF06IElucHV0IEFcbiAgQHBhcmFtIFtvYmplY3RdOiBJbnB1dCBCXG4gIEByZXR1cm4gW2Jvb2xlYW5dOiBUcnVlIGlmIGRpZmZlcmVudFxuKi9cbnZhciBoYXNDaGFuZ2VkID0gZXhwb3J0cy5oYXNDaGFuZ2VkID0gZnVuY3Rpb24gKGEsIGIpIHtcbiAgdmFyIGNoYW5nZWQgPSBmYWxzZTtcblxuICBmb3IgKHZhciBrZXkgaW4gYSkge1xuICAgIGlmIChhLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgIGlmIChoYXNQcm9wZXJ0eShiLCBrZXkpKSB7XG4gICAgICAgIGlmIChhW2tleV0gIT09IGJba2V5XSkge1xuICAgICAgICAgIGNoYW5nZWQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjaGFuZ2VkID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gY2hhbmdlZDtcbn07XG5cbi8qXG4gIENoZWNrIGlmIG9iamVjdCBoYXMgcHJvcGVydHkgYW5kIGl0IGlzbid0IHVuZGVmaW5lZFxuXG4gIEBwYXJhbSBbb2JqZWN0XVxuICBAcGFyYW0gW3N0cmluZ11cbiAgQHJldHVybiBbYm9vbGVhbl1cbiovXG52YXIgaGFzUHJvcGVydHkgPSBleHBvcnRzLmhhc1Byb3BlcnR5ID0gZnVuY3Rpb24gKG9iamVjdCwgcHJvcGVydHlOYW1lKSB7XG4gIHJldHVybiBvYmplY3QuaGFzT3duUHJvcGVydHkocHJvcGVydHlOYW1lKSAmJiBvYmplY3RbcHJvcGVydHlOYW1lXSAhPT0gdW5kZWZpbmVkO1xufTtcblxuLypcbiAgSXMgdXRpbHMgdmFyIGFuIGFycmF5ID8gXG4gIFxuICBAcGFyYW06IFZhcmlhYmxlIHRvIHRlc3RcbiAgQHJldHVybiBbYm9vbGVhbl06IFJldHVybnMgdHJ1ZSBpZiB1dGlscy52YXJUeXBlID09PSAnQXJyYXknXG4qL1xudmFyIGlzQXJyYXkgPSBleHBvcnRzLmlzQXJyYXkgPSBmdW5jdGlvbiAoYXJyKSB7XG4gIHJldHVybiB2YXJUeXBlKGFycikgPT09ICdBcnJheSc7XG59O1xuXG4vKlxuICBJcyB1dGlscyB2YXIgYSBmdW5jdGlvbiA/IFxuICBcbiAgQHBhcmFtOiBWYXJpYWJsZSB0byB0ZXN0XG4gIEByZXR1cm4gW2Jvb2xlYW5dOiBSZXR1cm5zIHRydWUgaWYgdXRpbHMudmFyVHlwZSA9PT0gJ0Z1bmN0aW9uJ1xuKi9cbnZhciBpc0Z1bmMgPSBleHBvcnRzLmlzRnVuYyA9IGZ1bmN0aW9uIChvYmopIHtcbiAgcmV0dXJuIHZhclR5cGUob2JqKSA9PT0gJ0Z1bmN0aW9uJztcbn07XG5cbi8qXG4gIElzIHV0aWxzIHZhciBhIG51bWJlcj9cbiAgXG4gIEBwYXJhbTogVmFyaWFibGUgdG8gdGVzdFxuICBAcmV0dXJuIFtib29sZWFuXTogUmV0dXJucyB0cnVlIGlmIHR5cGVvZiA9PT0gJ251bWJlcidcbiovXG52YXIgaXNOdW0gPSBleHBvcnRzLmlzTnVtID0gZnVuY3Rpb24gKG51bSkge1xuICByZXR1cm4gdHlwZW9mIG51bSA9PT0gJ251bWJlcic7XG59O1xuXG4vKlxuICBJcyB1dGlscyB2YXIgYW4gb2JqZWN0P1xuICBcbiAgQHBhcmFtOiBWYXJpYWJsZSB0byB0ZXN0XG4gIEByZXR1cm4gW2Jvb2xlYW5dOiBSZXR1cm5zIHRydWUgaWYgdHlwZW9mID09PSAnb2JqZWN0J1xuKi9cbnZhciBpc09iaiA9IGV4cG9ydHMuaXNPYmogPSBmdW5jdGlvbiAob2JqKSB7XG4gIHJldHVybiB0eXBlb2Ygb2JqID09PSAnb2JqZWN0Jztcbn07XG5cbi8qXG4gIElzIHV0aWxzIGEgcmVsYXRpdmUgdmFsdWUgYXNzaWdubWVudD9cbiAgXG4gIEBwYXJhbSBbc3RyaW5nXTogVmFyaWFibGUgdG8gdGVzdFxuICBAcmV0dXJuIFtib29sZWFuXTogSWYgdXRpbHMgbG9va3MgbGlrZSBhIHJlbGF0aXZlIHZhbHVlIGFzc2lnbm1lbnRcbiovXG52YXIgaXNSZWxhdGl2ZVZhbHVlID0gZXhwb3J0cy5pc1JlbGF0aXZlVmFsdWUgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgcmV0dXJuIHZhbHVlICYmIHZhbHVlLmluZGV4T2YgJiYgdmFsdWUuaW5kZXhPZignPScpID4gMCA/IHRydWUgOiBmYWxzZTtcbn07XG5cbi8qXG4gIElzIHV0aWxzIHZhciBhIHN0cmluZyA/IFxuICBcbiAgQHBhcmFtOiBWYXJpYWJsZSB0byB0ZXN0XG4gIEByZXR1cm4gW2Jvb2xlYW5dOiBSZXR1cm5zIHRydWUgaWYgdHlwZW9mIHN0ciA9PT0gJ3N0cmluZydcbiovXG52YXIgaXNTdHJpbmcgPSBleHBvcnRzLmlzU3RyaW5nID0gZnVuY3Rpb24gKHN0cikge1xuICByZXR1cm4gdHlwZW9mIHN0ciA9PT0gJ3N0cmluZyc7XG59O1xuXG4vKlxuICBAcGFyYW0gW3N0cmluZyB8fCBOb2RlTGlzdF06XG4gICAgSWYgc3RyaW5nLCB0cmVhdGVkIGFzIHNlbGVjdG9yLlxuICAgIElmIG5vdCwgdHJlYXRlZCBhcyBwcmVleGlzdGluZyBOb2RlTGlzdFxuXG4gIEByZXR1cm4gW0FycmF5XVxuKi9cbnZhciBzZWxlY3REb20gPSBleHBvcnRzLnNlbGVjdERvbSA9IGZ1bmN0aW9uIChzZWxlY3Rvcikge1xuICB2YXIgbm9kZXMgPSB0eXBlb2Ygc2VsZWN0b3IgPT09ICdzdHJpbmcnID8gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChzZWxlY3RvcikgOiBzZWxlY3RvcjtcbiAgcmV0dXJuIG5vZGVzLmxlbmd0aCA/IFtdLnNsaWNlLmNhbGwobm9kZXMpIDogW10ucHVzaChub2Rlcyk7XG59O1xuXG4vKlxuICBTcGxpdCBjb21tYS1kZWxpbWl0ZWQgc3RyaW5nXG5cbiAgXCJmb28sYmFyXCIgLT4gW1wiZm9vXCIsIFwiYmFyXCJdXG5cbiAgQHBhcmFtIFtzdHJpbmddXG4gIEByZXR1cm4gW2FycmF5XVxuKi9cbnZhciBzcGxpdENvbW1hRGVsaW1pdGVkID0gZXhwb3J0cy5zcGxpdENvbW1hRGVsaW1pdGVkID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gIHJldHVybiBpc1N0cmluZyh2YWx1ZSkgPyB2YWx1ZS5zcGxpdCgvLFxccyovKSA6IFt2YWx1ZV07XG59O1xuXG4vKlxuICBTcGxpdCBzcGFjZS1kZWxpbWl0ZWQgc3RyaW5nXG5cbiAgXCJmb28gYmFyXCIgLT4gW1wiZm9vXCIsIFwiYmFyXCJdXG5cbiAgQHBhcmFtIFtzdHJpbmddXG4gIEByZXR1cm4gW2FycmF5XVxuKi9cbnZhciBzcGxpdFNwYWNlRGVsaW1pdGVkID0gZXhwb3J0cy5zcGxpdFNwYWNlRGVsaW1pdGVkID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gIHJldHVybiBpc1N0cmluZyh2YWx1ZSkgPyB2YWx1ZS5zcGxpdCgnICcpIDogW3ZhbHVlXTtcbn07XG5cbi8qXG4gIENvbnZlcnQgbnVtYmVyIHRvIHggZGVjaW1hbCBwbGFjZXNcblxuICBAcGFyYW0gW251bWJlcl1cbiAgQHBhcmFtIFtudW1iZXJdXG4gIEByZXR1cm4gW251bWJlcl1cbiovXG52YXIgdG9EZWNpbWFsID0gZXhwb3J0cy50b0RlY2ltYWwgPSBmdW5jdGlvbiAobnVtKSB7XG4gIHZhciBwcmVjaXNpb24gPSBhcmd1bWVudHMubGVuZ3RoIDw9IDEgfHwgYXJndW1lbnRzWzFdID09PSB1bmRlZmluZWQgPyAyIDogYXJndW1lbnRzWzFdO1xuXG4gIHByZWNpc2lvbiA9IE1hdGgucG93KDEwLCBwcmVjaXNpb24pO1xuICByZXR1cm4gTWF0aC5yb3VuZChudW0gKiBwcmVjaXNpb24pIC8gcHJlY2lzaW9uO1xufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbk55WXk5cGJtTXZkWFJwYkhNdWFuTWlYU3dpYm1GdFpYTWlPbHRkTENKdFlYQndhVzVuY3lJNklqczdPMEZCUVVFc1NVRkJUU3h4UWtGQmNVSXNhVUpCUVROQ08wRkJRMEVzU1VGQlRTeHRRa0ZCYlVJc1QwRkJla0k3UVVGRFFTeEpRVUZOTEhOQ1FVRjFRaXhQUVVGUExGZEJRVkFzUzBGQmRVSXNWMEZCZGtJc1NVRkJjME1zV1VGQldTeEhRVUV2UlRzN096czdPenM3UVVGUlFTeEpRVUZOTEZWQlFWVTdRVUZCUVN4VFFVRlpMRTlCUVU4c1UwRkJVQ3hEUVVGcFFpeFJRVUZxUWl4RFFVRXdRaXhKUVVFeFFpeERRVUVyUWl4UlFVRXZRaXhGUVVGNVF5eExRVUY2UXl4RFFVRXJReXhEUVVFdlF5eEZRVUZyUkN4RFFVRkRMRU5CUVc1RUxFTkJRVm83UVVGQlFTeERRVUZvUWpzN096czdPenM3UVVGUlR5eEpRVUZOTEc5RFFVRmpMRlZCUVVNc1RVRkJSRHRCUVVGQkxGTkJRVmtzVDBGQlR5eFBRVUZRTEVOQlFXVXNhMEpCUVdZc1JVRkJiVU1zWjBKQlFXNURMRVZCUVhGRUxGZEJRWEpFTEVWQlFWbzdRVUZCUVN4RFFVRndRanM3UVVGRlFTeEpRVUZOTERSRFFVRnJRaXhWUVVGRExFMUJRVVFzUlVGQlV5eExRVUZVTEVWQlFXZENMRk5CUVdoQ0xFVkJRVEpDTEVsQlFUTkNMRVZCUVc5RE8wRkJRMnBGTEUxQlFVMHNWMEZCVnl4TlFVRk5MRTFCUVhaQ08wRkJRMEVzVFVGQlNTeFhRVUZYTEVWQlFXWTdPMEZCUlVFc1QwRkJTeXhKUVVGSkxFbEJRVWtzUTBGQllpeEZRVUZuUWl4SlFVRkpMRkZCUVhCQ0xFVkJRVGhDTEVkQlFUbENMRVZCUVcxRE8wRkJRMnBETEZGQlFVMHNUMEZCVHl4TlFVRk5MRU5CUVU0c1EwRkJZanRCUVVOQkxGRkJRVWtzVDBGQlR5eGpRVUZRTEVOQlFYTkNMRWxCUVhSQ0xFTkJRVW9zUlVGQmFVTTdRVUZETDBJc2EwSkJRVmtzVDBGQlR5eEpRVUZRTEVsQlFXVXNVMEZCTTBJN1FVRkRSRHRCUVVOR096dEJRVVZFTEUxQlFVa3NTVUZCU2l4RlFVRlZPMEZCUTFJc1pVRkJWeXhUUVVGVExFdEJRVlFzUTBGQlpTeERRVUZtTEVWQlFXdENMRU5CUVVNc1NVRkJia0lzUTBGQldEdEJRVU5FT3p0QlFVVkVMRk5CUVU4c1VVRkJVRHRCUVVORUxFTkJhRUpOT3pzN096czdPenM3T3p0QlFUSkNRU3hKUVVGTkxITkVRVUYxUWl4VlFVRkRMRXRCUVVRc1JVRkJVU3hOUVVGU08wRkJRVUVzVTBGQmMwSXNUVUZCZEVJc1UwRkJaME1zUzBGQmFFTTdRVUZCUVN4RFFVRTNRanM3T3pzN096dEJRVTlCTEVsQlFVMHNiME5CUVdNc2MwSkJRWE5DTzBGQlFVRXNVMEZCVFN4WlFVRlpMRWRCUVZvc1JVRkJUanRCUVVGQkxFTkJRWFJDTEVkQlFXZEVPMEZCUVVFc1UwRkJUU3hKUVVGSkxFbEJRVW9zUjBGQlZ5eFBRVUZZTEVWQlFVNDdRVUZCUVN4RFFVRndSVHM3T3pzN096czdPenRCUVZWQkxFbEJRVTBzT0VOQlFXMUNMRlZCUVVNc1MwRkJSQ3hGUVVGWE8wRkJRM3BETEUxQlFVa3NUVUZCVFN4TFFVRldMRVZCUVdsQ08wRkJRMllzVVVGQlRTeGhRVUZoTEUxQlFVMHNTMEZCVGl4RFFVRlpMRzFDUVVGYUxFTkJRVzVDT3p0QlFVVkJMRmRCUVU4N1FVRkRUQ3hoUVVGUExGZEJRVmNzVjBGQlZ5eERRVUZZTEVOQlFWZ3NRMEZFUmp0QlFVVk1MRmxCUVU4c1YwRkJWeXhEUVVGWU8wRkJSa1lzUzBGQlVEdEJRVWxFTEVkQlVFUXNUVUZQVHp0QlFVTk1MRmRCUVU4c1JVRkJSU3haUVVGR0xFVkJRVkE3UVVGRFJEdEJRVU5HTEVOQldFMDdPenM3T3pzN096dEJRVzlDUVN4SlFVRk5MREJEUVVGcFFpeFZRVUZETEV0QlFVUXNSVUZCVVN4VlFVRlNMRVZCUVhWQ08wRkJRMjVFTEUxQlFVMHNaMEpCUVdkQ0xGZEJRVmNzVFVGQmFrTTdRVUZEUVN4TlFVRk5MR05CUVdNc1JVRkJjRUk3UVVGRFFTeE5RVUZOTEZOQlFWTXNiMEpCUVc5Q0xESkNRVUV5UWl4TFFVRXpRaXhEUVVGd1FpeERRVUZtT3p0QlFVVkJMRTlCUVVzc1NVRkJTU3hKUVVGSkxFTkJRV0lzUlVGQlowSXNTVUZCU1N4aFFVRndRaXhGUVVGdFF5eEhRVUZ1UXl4RlFVRjNRenRCUVVOMFF5eG5Ra0ZCV1N4WFFVRlhMRU5CUVZnc1EwRkJXaXhKUVVFNFFpeFBRVUZQTEVOQlFWQXNUVUZCWXl4VFFVRm1MRWRCUVRSQ0xFOUJRVThzUTBGQlVDeERRVUUxUWl4SFFVRjNReXhEUVVGeVJUdEJRVU5FT3p0QlFVVkVMRk5CUVU4c1YwRkJVRHRCUVVORUxFTkJWazA3T3pzN096czdRVUZwUWtFc1NVRkJUU3hyUlVGQk5rSXNWVUZCUXl4TFFVRkVPMEZCUVVFc1UwRkJWeXhOUVVGTkxGTkJRVTRzUTBGQlowSXNUVUZCVFN4UFFVRk9MRU5CUVdNc1IwRkJaQ3hKUVVGeFFpeERRVUZ5UXl4RlFVRjNReXhOUVVGTkxGZEJRVTRzUTBGQmEwSXNSMEZCYkVJc1EwRkJlRU1zUTBGQldEdEJRVUZCTEVOQlFXNURPenM3T3pzN096czdRVUZUUVN4SlFVRk5MR3REUVVGaExGVkJRVU1zUTBGQlJDeEZRVUZKTEVOQlFVb3NSVUZCVlR0QlFVTnNReXhOUVVGSkxGVkJRVlVzUzBGQlpEczdRVUZGUVN4UFFVRkxMRWxCUVVrc1IwRkJWQ3hKUVVGblFpeERRVUZvUWl4RlFVRnRRanRCUVVOcVFpeFJRVUZKTEVWQlFVVXNZMEZCUml4RFFVRnBRaXhIUVVGcVFpeERRVUZLTEVWQlFUSkNPMEZCUTNwQ0xGVkJRVWtzV1VGQldTeERRVUZhTEVWQlFXVXNSMEZCWml4RFFVRktMRVZCUVhsQ08wRkJRM1pDTEZsQlFVa3NSVUZCUlN4SFFVRkdMRTFCUVZjc1JVRkJSU3hIUVVGR0xFTkJRV1lzUlVGQmRVSTdRVUZEY2tJc2IwSkJRVlVzU1VGQlZqdEJRVU5FTzBGQlEwWXNUMEZLUkN4TlFVbFBPMEZCUTB3c2EwSkJRVlVzU1VGQlZqdEJRVU5FTzBGQlEwWTdRVUZEUmpzN1FVRkZSQ3hUUVVGUExFOUJRVkE3UVVGRFJDeERRV2hDVFRzN096czdPenM3TzBGQmVVSkJMRWxCUVUwc2IwTkJRV01zVlVGQlF5eE5RVUZFTEVWQlFWTXNXVUZCVkR0QlFVRkJMRk5CUVRCQ0xFOUJRVThzWTBGQlVDeERRVUZ6UWl4WlFVRjBRaXhMUVVGMVF5eFBRVUZQTEZsQlFWQXNUVUZCZVVJc1UwRkJNVVk3UVVGQlFTeERRVUZ3UWpzN096czdPenM3UVVGUlFTeEpRVUZOTERSQ1FVRlZMRlZCUVVNc1IwRkJSRHRCUVVGQkxGTkJRVk1zVVVGQlVTeEhRVUZTTEUxQlFXbENMRTlCUVRGQ08wRkJRVUVzUTBGQmFFSTdPenM3T3pzN08wRkJVVUVzU1VGQlRTd3dRa0ZCVXl4VlFVRkRMRWRCUVVRN1FVRkJRU3hUUVVGVExGRkJRVkVzUjBGQlVpeE5RVUZwUWl4VlFVRXhRanRCUVVGQkxFTkJRV1k3T3pzN096czdPMEZCVVVFc1NVRkJUU3gzUWtGQlVTeFZRVUZETEVkQlFVUTdRVUZCUVN4VFFVRlRMRTlCUVU4c1IwRkJVQ3hMUVVGbExGRkJRWGhDTzBGQlFVRXNRMEZCWkRzN096czdPenM3UVVGUlFTeEpRVUZOTEhkQ1FVRlJMRlZCUVVNc1IwRkJSRHRCUVVGQkxGTkJRVk1zVDBGQlR5eEhRVUZRTEV0QlFXVXNVVUZCZUVJN1FVRkJRU3hEUVVGa096czdPenM3T3p0QlFWRkJMRWxCUVUwc05FTkJRV3RDTEZWQlFVTXNTMEZCUkR0QlFVRkJMRk5CUVZrc1UwRkJVeXhOUVVGTkxFOUJRV1lzU1VGQk1FSXNUVUZCVFN4UFFVRk9MRU5CUVdNc1IwRkJaQ3hKUVVGeFFpeERRVUZvUkN4SFFVRnhSQ3hKUVVGeVJDeEhRVUUwUkN4TFFVRjJSVHRCUVVGQkxFTkJRWGhDT3pzN096czdPenRCUVZGQkxFbEJRVTBzT0VKQlFWY3NWVUZCUXl4SFFVRkVPMEZCUVVFc1UwRkJVeXhQUVVGUExFZEJRVkFzUzBGQlpTeFJRVUY0UWp0QlFVRkJMRU5CUVdwQ096czdPenM3T3pzN1FVRlRRU3hKUVVGTkxHZERRVUZaTEZWQlFVTXNVVUZCUkN4RlFVRmpPMEZCUTNKRExFMUJRVTBzVVVGQlV5eFBRVUZQTEZGQlFWQXNTMEZCYjBJc1VVRkJja0lzUjBGQmFVTXNVMEZCVXl4blFrRkJWQ3hEUVVFd1FpeFJRVUV4UWl4RFFVRnFReXhIUVVGMVJTeFJRVUZ5Ump0QlFVTkJMRk5CUVZFc1RVRkJUU3hOUVVGUUxFZEJRV2xDTEVkQlFVY3NTMEZCU0N4RFFVRlRMRWxCUVZRc1EwRkJZeXhMUVVGa0xFTkJRV3BDTEVkQlFYZERMRWRCUVVjc1NVRkJTQ3hEUVVGUkxFdEJRVklzUTBGQkwwTTdRVUZEUkN4RFFVaE5PenM3T3pzN096czdPMEZCWVVFc1NVRkJUU3h2UkVGQmMwSXNWVUZCUXl4TFFVRkVPMEZCUVVFc1UwRkJWeXhUUVVGVExFdEJRVlFzU1VGQmEwSXNUVUZCVFN4TFFVRk9MRU5CUVZrc1RVRkJXaXhEUVVGc1FpeEhRVUYzUXl4RFFVRkRMRXRCUVVRc1EwRkJia1E3UVVGQlFTeERRVUUxUWpzN096czdPenM3T3p0QlFWVkJMRWxCUVUwc2IwUkJRWE5DTEZWQlFVTXNTMEZCUkR0QlFVRkJMRk5CUVZjc1UwRkJVeXhMUVVGVUxFbEJRV3RDTEUxQlFVMHNTMEZCVGl4RFFVRlpMRWRCUVZvc1EwRkJiRUlzUjBGQmNVTXNRMEZCUXl4TFFVRkVMRU5CUVdoRU8wRkJRVUVzUTBGQk5VSTdPenM3T3pzN096dEJRVk5CTEVsQlFVMHNaME5CUVZrc1ZVRkJReXhIUVVGRUxFVkJRWGRDTzBGQlFVRXNUVUZCYkVJc1UwRkJhMElzZVVSQlFVNHNRMEZCVFRzN1FVRkRMME1zZFVKQlFWa3NSVUZCV2l4RlFVRnJRaXhUUVVGc1FqdEJRVU5CTEZOQlFVOHNTMEZCU3l4TFFVRk1MRU5CUVZjc1RVRkJUU3hUUVVGcVFpeEpRVUU0UWl4VFFVRnlRenRCUVVORUxFTkJTRTBpTENKbWFXeGxJam9pZFhScGJITXVhbk1pTENKemIzVnlZMlZTYjI5MElqb2lMMVZ6WlhKekwyMWhkSFJ3WlhKeWVTOVRhWFJsY3k5d2IzQnRiM1JwYjI0aUxDSnpiM1Z5WTJWelEyOXVkR1Z1ZENJNld5SmpiMjV6ZENCRFFVMUZURjlEUVZORlgxQkJWRlJGVWs0Z1BTQXZLRnRoTFhwZEtTaGJRUzFhWFNrdlp6dGNibU52Ym5OMElGSkZVRXhCUTBWZlZFVk5VRXhCVkVVZ1BTQW5KREV0SkRJbk8xeHVZMjl1YzNRZ1NFRlRYMUJGVWtaUFVrMUJUa05GWDA1UFZ5QTlJQ2gwZVhCbGIyWWdjR1Z5Wm05eWJXRnVZMlVnSVQwOUlDZDFibVJsWm1sdVpXUW5JQ1ltSUhCbGNtWnZjbTFoYm1ObExtNXZkeWs3WEc1Y2JpOHFYRzRnSUVkbGRDQjJZWElnZEhsd1pTQmhjeUJ6ZEhKcGJtZGNiaUFnWEc0Z0lFQndZWEpoYlRvZ1ZtRnlhV0ZpYkdVZ2RHOGdkR1Z6ZEZ4dUlDQkFjbVYwZFhKdUlGdHpkSEpwYm1kZE9pQlNaWFIxY201ekxDQm1iM0lnYVc1emRHRnVZMlVnSjA5aWFtVmpkQ2NnYVdZZ1cyOWlhbVZqZENCUFltcGxZM1JkWEc0cUwxeHVZMjl1YzNRZ2RtRnlWSGx3WlNBOUlIWmhjbWxoWW14bElEMCtJRTlpYW1WamRDNXdjbTkwYjNSNWNHVXVkRzlUZEhKcGJtY3VZMkZzYkNoMllYSnBZV0pzWlNrdWMyeHBZMlVvT0N3Z0xURXBPMXh1WEc0dktseHVJQ0JEYjI1MlpYSjBJR05oYldWc1EyRnpaU0IwYnlCa1lYTm9MV05oYzJWY2JseHVJQ0JBY0dGeVlXMGdXM04wY21sdVoxMWNiaUFnUUhKbGRIVnliaUJiYzNSeWFXNW5YVnh1S2k5Y2JtVjRjRzl5ZENCamIyNXpkQ0JqWVcxbGJGUnZSR0Z6YUNBOUlDaHpkSEpwYm1jcElEMCtJSE4wY21sdVp5NXlaWEJzWVdObEtFTkJUVVZNWDBOQlUwVmZVRUZVVkVWU1Rpd2dVa1ZRVEVGRFJWOVVSVTFRVEVGVVJTa3VkRzlNYjNkbGNrTmhjMlVvS1R0Y2JseHVaWGh3YjNKMElHTnZibk4wSUdOeVpXRjBaVVJsYkdsdGFYUmxaQ0E5SUNoMllXeDFaWE1zSUhSbGNtMXpMQ0JrWld4cGJXbDBaWElzSUdOb2IzQXBJRDArSUh0Y2JpQWdZMjl1YzNRZ2JuVnRWR1Z5YlhNZ1BTQjBaWEp0Y3k1c1pXNW5kR2c3WEc0Z0lHeGxkQ0JqYjIxaWFXNWxaQ0E5SUNjbk8xeHVYRzRnSUdadmNpQW9iR1YwSUdrZ1BTQXdPeUJwSUR3Z2JuVnRWR1Z5YlhNN0lHa3JLeWtnZTF4dUlDQWdJR052Ym5OMElIUmxjbTBnUFNCMFpYSnRjMXRwWFR0Y2JpQWdJQ0JwWmlBb2RtRnNkV1Z6TG1oaGMwOTNibEJ5YjNCbGNuUjVLSFJsY20wcEtTQjdYRzRnSUNBZ0lDQmpiMjFpYVc1bFpDQXJQU0IyWVd4MVpYTmJkR1Z5YlYwZ0t5QmtaV3hwYldsMFpYSTdYRzRnSUNBZ2ZWeHVJQ0I5WEc1Y2JpQWdhV1lnS0dOb2IzQXBJSHRjYmlBZ0lDQmpiMjFpYVc1bFpDQTlJR052YldKcGJtVmtMbk5zYVdObEtEQXNJQzFqYUc5d0tUdGNiaUFnZlZ4dVhHNGdJSEpsZEhWeWJpQmpiMjFpYVc1bFpEdGNibjA3WEc1Y2JpOHFYRzRnSUVOeVpXRjBaU0JoSUdaMWJtTjBhVzl1SUhOMGNtbHVaMXh1WEc0Z0lDY3lNSEI0Snl3Z0ozUnlZVzV6YkdGMFpTY2dMVDRnSjNSeVlXNXpiR0YwWlNneU1IQjRLU2RjYmx4dUlDQkFjR0Z5WVcwZ1czTjBjbWx1WjExY2JpQWdRSEJoY21GdElGdHpkSEpwYm1kZFhHNGdJRUJ5WlhSMWNtNGdXM04wY21sdVoxMWNiaW92WEc1bGVIQnZjblFnWTI5dWMzUWdZM0psWVhSbFJuVnVZM1JwYjI1VGRISnBibWNnUFNBb2RtRnNkV1VzSUhCeVpXWnBlQ2tnUFQ0Z1lDUjdjSEpsWm1sNGZTZ2tlM1poYkhWbGZTbGdPMXh1WEc0dktseHVJQ0JIWlc1bGNtRjBaU0JqZFhKeVpXNTBJSFJwYldWemRHRnRjRnh1SUNCY2JpQWdRSEpsZEhWeWJpQmJkR2x0WlhOMFlXMXdYVG9nUTNWeWNtVnVkQ0JWVGtsWUlIUnBiV1Z6ZEdGdGNGeHVLaTljYm1WNGNHOXlkQ0JqYjI1emRDQmpkWEp5Wlc1MFZHbHRaU0E5SUVoQlUxOVFSVkpHVDFKTlFVNURSVjlPVDFjZ1B5QW9LU0E5UGlCd1pYSm1iM0p0WVc1alpTNXViM2NvS1NBNklDZ3BJRDArSUc1bGR5QkVZWFJsS0NrdVoyVjBWR2x0WlNncE8xeHVYRzR2S2x4dUlDQlRjR3hwZENCaElIWmhiSFZsSUdsdWRHOGdZU0IyWVd4MVpTOTFibWwwSUc5aWFtVmpkRnh1SUNCY2JpQWdJQ0JjSWpJd01IQjRYQ0lnTFQ0Z2V5QjJZV3gxWlRvZ01qQXdMQ0IxYm1sME9pQmNJbkI0WENJZ2ZWeHVJQ0FnSUZ4dUlDQkFjR0Z5WVcwZ1czTjBjbWx1WjEwNklGWmhiSFZsSUhSdklITndiR2wwWEc0Z0lFQnlaWFIxY200Z1cyOWlhbVZqZEYwNklFOWlhbVZqZENCM2FYUm9JSFpoYkhWbElHRnVaQ0IxYm1sMElIQnliM0J6WEc0cUwxeHVaWGh3YjNKMElHTnZibk4wSUdacGJtUldZV3gxWlVGdVpGVnVhWFFnUFNBb2RtRnNkV1VwSUQwK0lIdGNiaUFnYVdZZ0tIWmhiSFZsTG0xaGRHTm9LU0I3WEc0Z0lDQWdZMjl1YzNRZ2MzQnNhWFJXWVd4MVpTQTlJSFpoYkhWbExtMWhkR05vS0M4b0xUOWNYR1FxWEZ3dVAxeGNaQ29wS0M0cUtTOHBPMXh1WEc0Z0lDQWdjbVYwZFhKdUlIdGNiaUFnSUNBZ0lIWmhiSFZsT2lCd1lYSnpaVVpzYjJGMEtITndiR2wwVm1Gc2RXVmJNVjBwTEZ4dUlDQWdJQ0FnZFc1cGREb2dJSE53YkdsMFZtRnNkV1ZiTWwxY2JpQWdJQ0I5TzF4dUlDQjlJR1ZzYzJVZ2UxeHVJQ0FnSUhKbGRIVnliaUI3SUhaaGJIVmxJSDA3WEc0Z0lIMWNibjA3WEc1Y2JpOHFYRzRnSUZOd2JHbDBJR052Ykc5eUlITjBjbWx1WnlCcGJuUnZJRzFoY0NCdlppQmpiMnh2Y2lCd2NtOXdaWEowYVdWelhHNWNiaUFnWENKeVoySmhLREkxTlN3Z01qVTFMQ0F5TlRVc0lEQXBYQ0lzSUZ0Y0lsSmxaRndpTENBblIzSmxaVzVjSWl3Z1hDSkNiSFZsWENJc0lGd2lRV3h3YUdGY0lsMWNibHh1SUNCN0lGSmxaRG9nTWpVMUxpNHVJSDFjYmlvdlhHNWxlSEJ2Y25RZ1kyOXVjM1FnWjJWMFEyOXNiM0pXWVd4MVpYTWdQU0FvZG1Gc2RXVXNJR052Ykc5eVZHVnliWE1wSUQwK0lIdGNiaUFnWTI5dWMzUWdiblZ0UTI5c2IzSlVaWEp0Y3lBOUlHTnZiRzl5VkdWeWJYTXViR1Z1WjNSb08xeHVJQ0JqYjI1emRDQmpiMnh2Y2xaaGJIVmxjeUE5SUh0OU8xeHVJQ0JqYjI1emRDQmpiMnh2Y25NZ1BTQnpjR3hwZEVOdmJXMWhSR1ZzYVcxcGRHVmtLR2RsZEZaaGJIVmxSbkp2YlVaMWJtTjBhVzl1VTNSeWFXNW5LSFpoYkhWbEtTazdYRzVjYmlBZ1ptOXlJQ2hzWlhRZ2FTQTlJREE3SUdrZ1BDQnVkVzFEYjJ4dmNsUmxjbTF6T3lCcEt5c3BJSHRjYmlBZ0lDQmpiMnh2Y2xaaGJIVmxjMXRqYjJ4dmNsUmxjbTF6VzJsZFhTQTlJQ2hqYjJ4dmNuTmJhVjBnSVQwOUlIVnVaR1ZtYVc1bFpDa2dQeUJqYjJ4dmNuTmJhVjBnT2lBeE8xeHVJQ0I5WEc1Y2JpQWdjbVYwZFhKdUlHTnZiRzl5Vm1Gc2RXVnpPMXh1ZlR0Y2JseHVMeXBjYmlBZ1IyVjBJSFpoYkhWbElHWnliMjBnWm5WdVkzUnBiMjRnYzNSeWFXNW5YRzVjYmlBZ1hDSjBjbUZ1YzJ4aGRHVllLREl3Y0hncFhDSWdMVDRnWENJeU1IQjRYQ0pjYmlvdlhHNWxlSEJ2Y25RZ1kyOXVjM1FnWjJWMFZtRnNkV1ZHY205dFJuVnVZM1JwYjI1VGRISnBibWNnUFNBb2RtRnNkV1VwSUQwK0lIWmhiSFZsTG5OMVluTjBjbWx1WnloMllXeDFaUzVwYm1SbGVFOW1LQ2NvSnlrZ0t5QXhMQ0IyWVd4MVpTNXNZWE4wU1c1a1pYaFBaaWduS1NjcEtUdGNibHh1THlwY2JpQWdRMmhsWTJzZ2FXWWdkSGR2SUc5aWFtVmpkSE1nYUdGMlpTQmphR0Z1WjJWa0lHWnliMjBnWldGamFDQnZkR2hsY2x4dUlDQmNiaUFnUUhCaGNtRnRJRnR2WW1wbFkzUmRPaUJKYm5CMWRDQkJYRzRnSUVCd1lYSmhiU0JiYjJKcVpXTjBYVG9nU1c1d2RYUWdRbHh1SUNCQWNtVjBkWEp1SUZ0aWIyOXNaV0Z1WFRvZ1ZISjFaU0JwWmlCa2FXWm1aWEpsYm5SY2Jpb3ZYRzVsZUhCdmNuUWdZMjl1YzNRZ2FHRnpRMmhoYm1kbFpDQTlJQ2hoTENCaUtTQTlQaUI3WEc0Z0lHeGxkQ0JqYUdGdVoyVmtJRDBnWm1Gc2MyVTdYRzVjYmlBZ1ptOXlJQ2hzWlhRZ2EyVjVJR2x1SUdFcElIdGNiaUFnSUNCcFppQW9ZUzVvWVhOUGQyNVFjbTl3WlhKMGVTaHJaWGtwS1NCN1hHNGdJQ0FnSUNCcFppQW9hR0Z6VUhKdmNHVnlkSGtvWWl3Z2EyVjVLU2tnZTF4dUlDQWdJQ0FnSUNCcFppQW9ZVnRyWlhsZElDRTlQU0JpVzJ0bGVWMHBJSHRjYmlBZ0lDQWdJQ0FnSUNCamFHRnVaMlZrSUQwZ2RISjFaVHRjYmlBZ0lDQWdJQ0FnZlZ4dUlDQWdJQ0FnZlNCbGJITmxJSHRjYmlBZ0lDQWdJQ0FnWTJoaGJtZGxaQ0E5SUhSeWRXVTdYRzRnSUNBZ0lDQjlYRzRnSUNBZ2ZWeHVJQ0I5WEc1Y2JpQWdjbVYwZFhKdUlHTm9ZVzVuWldRN1hHNTlPMXh1WEc0dktseHVJQ0JEYUdWamF5QnBaaUJ2WW1wbFkzUWdhR0Z6SUhCeWIzQmxjblI1SUdGdVpDQnBkQ0JwYzI0bmRDQjFibVJsWm1sdVpXUmNibHh1SUNCQWNHRnlZVzBnVzI5aWFtVmpkRjFjYmlBZ1FIQmhjbUZ0SUZ0emRISnBibWRkWEc0Z0lFQnlaWFIxY200Z1cySnZiMnhsWVc1ZFhHNHFMMXh1Wlhod2IzSjBJR052Ym5OMElHaGhjMUJ5YjNCbGNuUjVJRDBnS0c5aWFtVmpkQ3dnY0hKdmNHVnlkSGxPWVcxbEtTQTlQaUJ2WW1wbFkzUXVhR0Z6VDNkdVVISnZjR1Z5ZEhrb2NISnZjR1Z5ZEhsT1lXMWxLU0FtSmlCdlltcGxZM1JiY0hKdmNHVnlkSGxPWVcxbFhTQWhQVDBnZFc1a1pXWnBibVZrTzF4dVhHNHZLbHh1SUNCSmN5QjFkR2xzY3lCMllYSWdZVzRnWVhKeVlYa2dQeUJjYmlBZ1hHNGdJRUJ3WVhKaGJUb2dWbUZ5YVdGaWJHVWdkRzhnZEdWemRGeHVJQ0JBY21WMGRYSnVJRnRpYjI5c1pXRnVYVG9nVW1WMGRYSnVjeUIwY25WbElHbG1JSFYwYVd4ekxuWmhjbFI1Y0dVZ1BUMDlJQ2RCY25KaGVTZGNiaW92WEc1bGVIQnZjblFnWTI5dWMzUWdhWE5CY25KaGVTQTlJQ2hoY25JcElEMCtJSFpoY2xSNWNHVW9ZWEp5S1NBOVBUMGdKMEZ5Y21GNUp6dGNibHh1THlwY2JpQWdTWE1nZFhScGJITWdkbUZ5SUdFZ1puVnVZM1JwYjI0Z1B5QmNiaUFnWEc0Z0lFQndZWEpoYlRvZ1ZtRnlhV0ZpYkdVZ2RHOGdkR1Z6ZEZ4dUlDQkFjbVYwZFhKdUlGdGliMjlzWldGdVhUb2dVbVYwZFhKdWN5QjBjblZsSUdsbUlIVjBhV3h6TG5aaGNsUjVjR1VnUFQwOUlDZEdkVzVqZEdsdmJpZGNiaW92WEc1bGVIQnZjblFnWTI5dWMzUWdhWE5HZFc1aklEMGdLRzlpYWlrZ1BUNGdkbUZ5Vkhsd1pTaHZZbW9wSUQwOVBTQW5SblZ1WTNScGIyNG5PMXh1WEc0dktseHVJQ0JKY3lCMWRHbHNjeUIyWVhJZ1lTQnVkVzFpWlhJL1hHNGdJRnh1SUNCQWNHRnlZVzA2SUZaaGNtbGhZbXhsSUhSdklIUmxjM1JjYmlBZ1FISmxkSFZ5YmlCYlltOXZiR1ZoYmwwNklGSmxkSFZ5Ym5NZ2RISjFaU0JwWmlCMGVYQmxiMllnUFQwOUlDZHVkVzFpWlhJblhHNHFMMXh1Wlhod2IzSjBJR052Ym5OMElHbHpUblZ0SUQwZ0tHNTFiU2tnUFQ0Z2RIbHdaVzltSUc1MWJTQTlQVDBnSjI1MWJXSmxjaWM3WEc1Y2JpOHFYRzRnSUVseklIVjBhV3h6SUhaaGNpQmhiaUJ2WW1wbFkzUS9YRzRnSUZ4dUlDQkFjR0Z5WVcwNklGWmhjbWxoWW14bElIUnZJSFJsYzNSY2JpQWdRSEpsZEhWeWJpQmJZbTl2YkdWaGJsMDZJRkpsZEhWeWJuTWdkSEoxWlNCcFppQjBlWEJsYjJZZ1BUMDlJQ2R2WW1wbFkzUW5YRzRxTDF4dVpYaHdiM0owSUdOdmJuTjBJR2x6VDJKcUlEMGdLRzlpYWlrZ1BUNGdkSGx3Wlc5bUlHOWlhaUE5UFQwZ0oyOWlhbVZqZENjN1hHNWNiaThxWEc0Z0lFbHpJSFYwYVd4eklHRWdjbVZzWVhScGRtVWdkbUZzZFdVZ1lYTnphV2R1YldWdWREOWNiaUFnWEc0Z0lFQndZWEpoYlNCYmMzUnlhVzVuWFRvZ1ZtRnlhV0ZpYkdVZ2RHOGdkR1Z6ZEZ4dUlDQkFjbVYwZFhKdUlGdGliMjlzWldGdVhUb2dTV1lnZFhScGJITWdiRzl2YTNNZ2JHbHJaU0JoSUhKbGJHRjBhWFpsSUhaaGJIVmxJR0Z6YzJsbmJtMWxiblJjYmlvdlhHNWxlSEJ2Y25RZ1kyOXVjM1FnYVhOU1pXeGhkR2wyWlZaaGJIVmxJRDBnS0haaGJIVmxLU0E5UGlBb2RtRnNkV1VnSmlZZ2RtRnNkV1V1YVc1a1pYaFBaaUFtSmlCMllXeDFaUzVwYm1SbGVFOW1LQ2M5SnlrZ1BpQXdLU0EvSUhSeWRXVWdPaUJtWVd4elpUdGNibHh1THlwY2JpQWdTWE1nZFhScGJITWdkbUZ5SUdFZ2MzUnlhVzVuSUQ4Z1hHNGdJRnh1SUNCQWNHRnlZVzA2SUZaaGNtbGhZbXhsSUhSdklIUmxjM1JjYmlBZ1FISmxkSFZ5YmlCYlltOXZiR1ZoYmwwNklGSmxkSFZ5Ym5NZ2RISjFaU0JwWmlCMGVYQmxiMllnYzNSeUlEMDlQU0FuYzNSeWFXNW5KMXh1S2k5Y2JtVjRjRzl5ZENCamIyNXpkQ0JwYzFOMGNtbHVaeUE5SUNoemRISXBJRDArSUhSNWNHVnZaaUJ6ZEhJZ1BUMDlJQ2R6ZEhKcGJtY25PMXh1WEc0dktseHVJQ0JBY0dGeVlXMGdXM04wY21sdVp5QjhmQ0JPYjJSbFRHbHpkRjA2WEc0Z0lDQWdTV1lnYzNSeWFXNW5MQ0IwY21WaGRHVmtJR0Z6SUhObGJHVmpkRzl5TGx4dUlDQWdJRWxtSUc1dmRDd2dkSEpsWVhSbFpDQmhjeUJ3Y21WbGVHbHpkR2x1WnlCT2IyUmxUR2x6ZEZ4dVhHNGdJRUJ5WlhSMWNtNGdXMEZ5Y21GNVhWeHVLaTljYm1WNGNHOXlkQ0JqYjI1emRDQnpaV3hsWTNSRWIyMGdQU0FvYzJWc1pXTjBiM0lwSUQwK0lIdGNiaUFnWTI5dWMzUWdibTlrWlhNZ1BTQW9kSGx3Wlc5bUlITmxiR1ZqZEc5eUlEMDlQU0FuYzNSeWFXNW5KeWtnUHlCa2IyTjFiV1Z1ZEM1eGRXVnllVk5sYkdWamRHOXlRV3hzS0hObGJHVmpkRzl5S1NBNklITmxiR1ZqZEc5eU8xeHVJQ0J5WlhSMWNtNGdLRzV2WkdWekxteGxibWQwYUNrZ1B5QmJYUzV6YkdsalpTNWpZV3hzS0c1dlpHVnpLU0E2SUZ0ZExuQjFjMmdvYm05a1pYTXBPMXh1ZlR0Y2JseHVMeXBjYmlBZ1UzQnNhWFFnWTI5dGJXRXRaR1ZzYVcxcGRHVmtJSE4wY21sdVoxeHVYRzRnSUZ3aVptOXZMR0poY2x3aUlDMCtJRnRjSW1admIxd2lMQ0JjSW1KaGNsd2lYVnh1WEc0Z0lFQndZWEpoYlNCYmMzUnlhVzVuWFZ4dUlDQkFjbVYwZFhKdUlGdGhjbkpoZVYxY2Jpb3ZYRzVsZUhCdmNuUWdZMjl1YzNRZ2MzQnNhWFJEYjIxdFlVUmxiR2x0YVhSbFpDQTlJQ2gyWVd4MVpTa2dQVDRnYVhOVGRISnBibWNvZG1Gc2RXVXBJRDhnZG1Gc2RXVXVjM0JzYVhRb0x5eGNYSE1xTHlrZ09pQmJkbUZzZFdWZE8xeHVYRzR2S2x4dUlDQlRjR3hwZENCemNHRmpaUzFrWld4cGJXbDBaV1FnYzNSeWFXNW5YRzVjYmlBZ1hDSm1iMjhnWW1GeVhDSWdMVDRnVzF3aVptOXZYQ0lzSUZ3aVltRnlYQ0pkWEc1Y2JpQWdRSEJoY21GdElGdHpkSEpwYm1kZFhHNGdJRUJ5WlhSMWNtNGdXMkZ5Y21GNVhWeHVLaTljYm1WNGNHOXlkQ0JqYjI1emRDQnpjR3hwZEZOd1lXTmxSR1ZzYVcxcGRHVmtJRDBnS0haaGJIVmxLU0E5UGlCcGMxTjBjbWx1WnloMllXeDFaU2tnUHlCMllXeDFaUzV6Y0d4cGRDZ25JQ2NwSURvZ1czWmhiSFZsWFR0Y2JseHVMeXBjYmlBZ1EyOXVkbVZ5ZENCdWRXMWlaWElnZEc4Z2VDQmtaV05wYldGc0lIQnNZV05sYzF4dVhHNGdJRUJ3WVhKaGJTQmJiblZ0WW1WeVhWeHVJQ0JBY0dGeVlXMGdXMjUxYldKbGNsMWNiaUFnUUhKbGRIVnliaUJiYm5WdFltVnlYVnh1S2k5Y2JtVjRjRzl5ZENCamIyNXpkQ0IwYjBSbFkybHRZV3dnUFNBb2JuVnRMQ0J3Y21WamFYTnBiMjRnUFNBeUtTQTlQaUI3WEc0Z0lIQnlaV05wYzJsdmJpQTlJREV3SUNvcUlIQnlaV05wYzJsdmJqdGNiaUFnY21WMGRYSnVJRTFoZEdndWNtOTFibVFvYm5WdElDb2djSEpsWTJsemFXOXVLU0F2SUhCeVpXTnBjMmx2Ymp0Y2JuMDdYRzRpWFgwPVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvaW5jL3V0aWxzLmpzXG4gKiogbW9kdWxlIGlkID0gMjFcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF9kZWZhdWx0UHJvcHMgPSByZXF1aXJlKCcuL3NldHRpbmdzL2RlZmF1bHQtcHJvcHMnKTtcblxuZXhwb3J0cy5kZWZhdWx0ID0ge1xuICBkZWZhdWx0UHJvcHM6IF9kZWZhdWx0UHJvcHMub3BhY2l0eVxufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbk55WXk5MllXeDFaUzEwZVhCbGN5OWhiSEJvWVM1cWN5SmRMQ0p1WVcxbGN5STZXMTBzSW0xaGNIQnBibWR6SWpvaU96czdPMEZCUVVFN08ydENRVVZsTzBGQlEySTdRVUZFWVN4RElpd2labWxzWlNJNkltRnNjR2hoTG1weklpd2ljMjkxY21ObFVtOXZkQ0k2SWk5VmMyVnljeTl0WVhSMGNHVnljbmt2VTJsMFpYTXZjRzl3Ylc5MGFXOXVJaXdpYzI5MWNtTmxjME52Ym5SbGJuUWlPbHNpYVcxd2IzSjBJSHNnYjNCaFkybDBlU0I5SUdaeWIyMGdKeTR2YzJWMGRHbHVaM012WkdWbVlYVnNkQzF3Y205d2N5YzdYRzVjYm1WNGNHOXlkQ0JrWldaaGRXeDBJSHRjYmlBZ1pHVm1ZWFZzZEZCeWIzQnpPaUJ2Y0dGamFYUjVYRzU5T3lKZGZRPT1cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL3ZhbHVlLXR5cGVzL2FscGhhLmpzXG4gKiogbW9kdWxlIGlkID0gMjJcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF91bml0ID0gcmVxdWlyZSgnLi91bml0Jyk7XG5cbnZhciBfdW5pdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF91bml0KTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZXhwb3J0cy5kZWZhdWx0ID0ge1xuICBkZWZhdWx0UHJvcHM6IHtcbiAgICB1bml0OiAnZGVnJyxcbiAgICB0eXBlOiBfdW5pdDIuZGVmYXVsdFxuICB9XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluTnlZeTkyWVd4MVpTMTBlWEJsY3k5aGJtZHNaUzVxY3lKZExDSnVZVzFsY3lJNlcxMHNJbTFoY0hCcGJtZHpJam9pT3pzN08wRkJRVUU3T3pzN096dHJRa0ZGWlR0QlFVTmlMR2RDUVVGak8wRkJRMW9zVlVGQlRTeExRVVJOTzBGQlJWbzdRVUZHV1R0QlFVUkVMRU1pTENKbWFXeGxJam9pWVc1bmJHVXVhbk1pTENKemIzVnlZMlZTYjI5MElqb2lMMVZ6WlhKekwyMWhkSFJ3WlhKeWVTOVRhWFJsY3k5d2IzQnRiM1JwYjI0aUxDSnpiM1Z5WTJWelEyOXVkR1Z1ZENJNld5SnBiWEJ2Y25RZ2RXNXBkRlI1Y0dVZ1puSnZiU0FuTGk5MWJtbDBKenRjYmx4dVpYaHdiM0owSUdSbFptRjFiSFFnZTF4dUlDQmtaV1poZFd4MFVISnZjSE02SUh0Y2JpQWdJQ0IxYm1sME9pQW5aR1ZuSnl4Y2JpQWdJQ0IwZVhCbE9pQjFibWwwVkhsd1pWeHVJQ0I5WEc1OU95SmRmUT09XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy92YWx1ZS10eXBlcy9hbmdsZS5qc1xuICoqIG1vZHVsZSBpZCA9IDIzXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07XG5cbnZhciBfcmdiID0gcmVxdWlyZSgnLi9yZ2InKTtcblxudmFyIF9yZ2IyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmdiKTtcblxudmFyIF9oc2wgPSByZXF1aXJlKCcuL2hzbCcpO1xuXG52YXIgX2hzbDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9oc2wpO1xuXG52YXIgX2hleCA9IHJlcXVpcmUoJy4vaGV4Jyk7XG5cbnZhciBfaGV4MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2hleCk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbnZhciBjb2xvclR5cGVzID0gW19yZ2IyLmRlZmF1bHQsIF9oc2wyLmRlZmF1bHQsIF9oZXgyLmRlZmF1bHRdO1xudmFyIG51bUNvbG9yVHlwZXMgPSBjb2xvclR5cGVzLmxlbmd0aDtcblxuZXhwb3J0cy5kZWZhdWx0ID0ge1xuICBkZWZhdWx0UHJvcHM6IF9leHRlbmRzKHt9LCBfcmdiMi5kZWZhdWx0LmRlZmF1bHRQcm9wcywgX2hzbDIuZGVmYXVsdC5kZWZhdWx0UHJvcHMpLFxuXG4gIHRlc3Q6IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgIHJldHVybiBfcmdiMi5kZWZhdWx0LnRlc3QodmFsdWUpIHx8IF9oZXgyLmRlZmF1bHQudGVzdCh2YWx1ZSkgfHwgX2hzbDIuZGVmYXVsdC50ZXN0KHZhbHVlKTtcbiAgfSxcblxuICBzcGxpdDogZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBudW1Db2xvclR5cGVzOyBpKyspIHtcbiAgICAgIGlmIChjb2xvclR5cGVzW2ldLnRlc3QodmFsdWUpKSB7XG4gICAgICAgIHJldHVybiBjb2xvclR5cGVzW2ldLnNwbGl0KHZhbHVlKTtcbiAgICAgIH1cbiAgICB9XG4gIH0sXG5cbiAgY29tYmluZTogZnVuY3Rpb24gKHZhbHVlcykge1xuICAgIHJldHVybiB2YWx1ZXMuUmVkICE9PSB1bmRlZmluZWQgPyBfcmdiMi5kZWZhdWx0LmNvbWJpbmUodmFsdWVzKSA6IF9oc2wyLmRlZmF1bHQuY29tYmluZSh2YWx1ZXMpO1xuICB9XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluTnlZeTkyWVd4MVpTMTBlWEJsY3k5amIyeHZjaTVxY3lKZExDSnVZVzFsY3lJNlcxMHNJbTFoY0hCcGJtZHpJam9pT3pzN096czdRVUZCUVRzN096dEJRVU5CT3pzN08wRkJRMEU3T3pzN096dEJRVVZCTEVsQlFVMHNZVUZCWVN3MlEwRkJia0k3UVVGRFFTeEpRVUZOTEdkQ1FVRm5RaXhYUVVGWExFMUJRV3BET3p0clFrRkZaVHRCUVVOaUxEWkNRVUZ0UWl4alFVRkpMRmxCUVhaQ0xFVkJRWGRETEdOQlFVa3NXVUZCTlVNc1EwRkVZVHM3UVVGSFlpeFJRVUZOTEZWQlFVTXNTMEZCUkR0QlFVRkJMRmRCUVZjc1kwRkJTU3hKUVVGS0xFTkJRVk1zUzBGQlZDeExRVUZ0UWl4alFVRkpMRWxCUVVvc1EwRkJVeXhMUVVGVUxFTkJRVzVDTEVsQlFYTkRMR05CUVVrc1NVRkJTaXhEUVVGVExFdEJRVlFzUTBGQmFrUTdRVUZCUVN4SFFVaFBPenRCUVV0aUxGTkJRVThzVlVGQlF5eExRVUZFTEVWQlFWYzdRVUZEYUVJc1UwRkJTeXhKUVVGSkxFbEJRVWtzUTBGQllpeEZRVUZuUWl4SlFVRkpMR0ZCUVhCQ0xFVkJRVzFETEVkQlFXNURMRVZCUVhkRE8wRkJRM1JETEZWQlFVa3NWMEZCVnl4RFFVRllMRVZCUVdNc1NVRkJaQ3hEUVVGdFFpeExRVUZ1UWl4RFFVRktMRVZCUVN0Q08wRkJRemRDTEdWQlFVOHNWMEZCVnl4RFFVRllMRVZCUVdNc1MwRkJaQ3hEUVVGdlFpeExRVUZ3UWl4RFFVRlFPMEZCUTBRN1FVRkRSanRCUVVOR0xFZEJXRms3TzBGQllXSXNWMEZCVXl4VlFVRkRMRTFCUVVRN1FVRkJRU3hYUVVGaExFOUJRVThzUjBGQlVDeExRVUZsTEZOQlFXaENMRWRCUVRaQ0xHTkJRVWtzVDBGQlNpeERRVUZaTEUxQlFWb3NRMEZCTjBJc1IwRkJiVVFzWTBGQlNTeFBRVUZLTEVOQlFWa3NUVUZCV2l4RFFVRXZSRHRCUVVGQk8wRkJZa2tzUXlJc0ltWnBiR1VpT2lKamIyeHZjaTVxY3lJc0luTnZkWEpqWlZKdmIzUWlPaUl2VlhObGNuTXZiV0YwZEhCbGNuSjVMMU5wZEdWekwzQnZjRzF2ZEdsdmJpSXNJbk52ZFhKalpYTkRiMjUwWlc1MElqcGJJbWx0Y0c5eWRDQnlaMklnWm5KdmJTQW5MaTl5WjJJbk8xeHVhVzF3YjNKMElHaHpiQ0JtY205dElDY3VMMmh6YkNjN1hHNXBiWEJ2Y25RZ2FHVjRJR1p5YjIwZ0p5NHZhR1Y0Snp0Y2JseHVZMjl1YzNRZ1kyOXNiM0pVZVhCbGN5QTlJRnR5WjJJc0lHaHpiQ3dnYUdWNFhUdGNibU52Ym5OMElHNTFiVU52Ykc5eVZIbHdaWE1nUFNCamIyeHZjbFI1Y0dWekxteGxibWQwYUR0Y2JseHVaWGh3YjNKMElHUmxabUYxYkhRZ2UxeHVJQ0JrWldaaGRXeDBVSEp2Y0hNNklIc2dMaTR1Y21kaUxtUmxabUYxYkhSUWNtOXdjeXdnTGk0dWFITnNMbVJsWm1GMWJIUlFjbTl3Y3lCOUxGeHVYRzRnSUhSbGMzUTZJQ2gyWVd4MVpTa2dQVDRnY21kaUxuUmxjM1FvZG1Gc2RXVXBJSHg4SUdobGVDNTBaWE4wS0haaGJIVmxLU0I4ZkNCb2Myd3VkR1Z6ZENoMllXeDFaU2tzWEc1Y2JpQWdjM0JzYVhRNklDaDJZV3gxWlNrZ1BUNGdlMXh1SUNBZ0lHWnZjaUFvYkdWMElHa2dQU0F3T3lCcElEd2diblZ0UTI5c2IzSlVlWEJsY3pzZ2FTc3JLU0I3WEc0Z0lDQWdJQ0JwWmlBb1kyOXNiM0pVZVhCbGMxdHBYUzUwWlhOMEtIWmhiSFZsS1NrZ2UxeHVJQ0FnSUNBZ0lDQnlaWFIxY200Z1kyOXNiM0pVZVhCbGMxdHBYUzV6Y0d4cGRDaDJZV3gxWlNrN1hHNGdJQ0FnSUNCOVhHNGdJQ0FnZlZ4dUlDQjlMRnh1WEc0Z0lHTnZiV0pwYm1VNklDaDJZV3gxWlhNcElEMCtJQ2gyWVd4MVpYTXVVbVZrSUNFOVBTQjFibVJsWm1sdVpXUXBJRDhnY21kaUxtTnZiV0pwYm1Vb2RtRnNkV1Z6S1NBNklHaHpiQzVqYjIxaWFXNWxLSFpoYkhWbGN5bGNibjA3WEc0aVhYMD1cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL3ZhbHVlLXR5cGVzL2NvbG9yLmpzXG4gKiogbW9kdWxlIGlkID0gMjRcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF91dGlscyA9IHJlcXVpcmUoJy4uL2luYy91dGlscycpO1xuXG52YXIgRkxPQVRfUkVHRVggPSAvKC0pPyhcXGRbXFxkXFwuXSopL2c7XG52YXIgZ2VuZXJhdGVUb2tlbiA9IGZ1bmN0aW9uICh0b2tlbikge1xuICByZXR1cm4gJyR7JyArIHRva2VuICsgJ30nO1xufTtcblxuZXhwb3J0cy5kZWZhdWx0ID0ge1xuXG4gIHRlc3Q6IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgIHZhciBtYXRjaGVzID0gdmFsdWUubWF0Y2goRkxPQVRfUkVHRVgpO1xuICAgIHJldHVybiAoMCwgX3V0aWxzLmlzQXJyYXkpKG1hdGNoZXMpICYmIG1hdGNoZXMubGVuZ3RoID4gMTtcbiAgfSxcblxuICB0ZW1wbGF0ZTogZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgdmFyIGNvdW50ZXIgPSAwO1xuICAgIHJldHVybiB2YWx1ZS5yZXBsYWNlKEZMT0FUX1JFR0VYLCBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gZ2VuZXJhdGVUb2tlbihjb3VudGVyKyspO1xuICAgIH0pO1xuICB9LFxuXG4gIHNwbGl0OiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICB2YXIgc3BsaXRWYWx1ZSA9IHt9O1xuXG4gICAgdmFsdWUubWF0Y2goRkxPQVRfUkVHRVgpLmZvckVhY2goZnVuY3Rpb24gKHZhbHVlLCBpKSB7XG4gICAgICByZXR1cm4gc3BsaXRWYWx1ZVtpXSA9IHZhbHVlO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIHNwbGl0VmFsdWU7XG4gIH0sXG5cbiAgY29tYmluZTogZnVuY3Rpb24gKHZhbHVlcywgdGVtcGxhdGUpIHtcbiAgICBmb3IgKHZhciBrZXkgaW4gdmFsdWVzKSB7XG4gICAgICBpZiAodmFsdWVzLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgdGVtcGxhdGUgPSB0ZW1wbGF0ZS5yZXBsYWNlKGdlbmVyYXRlVG9rZW4oa2V5KSwgdmFsdWVzW2tleV0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0ZW1wbGF0ZTtcbiAgfVxuXG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluTnlZeTkyWVd4MVpTMTBlWEJsY3k5amIyMXdiR1Y0TG1weklsMHNJbTVoYldWeklqcGJYU3dpYldGd2NHbHVaM01pT2lJN096czdRVUZCUVRzN1FVRkZRU3hKUVVGTkxHTkJRV01zYTBKQlFYQkNPMEZCUTBFc1NVRkJUU3huUWtGQlowSXNWVUZCUXl4TFFVRkVPMEZCUVVFc1UwRkJWeXhQUVVGUExFdEJRVkFzUjBGQlpTeEhRVUV4UWp0QlFVRkJMRU5CUVhSQ096dHJRa0ZGWlRzN1FVRkZZaXhSUVVGTkxGVkJRVU1zUzBGQlJDeEZRVUZYTzBGQlEyWXNVVUZCVFN4VlFVRlZMRTFCUVUwc1MwRkJUaXhEUVVGWkxGZEJRVm9zUTBGQmFFSTdRVUZEUVN4WFFVRlJMRzlDUVVGUkxFOUJRVklzUzBGQmIwSXNVVUZCVVN4TlFVRlNMRWRCUVdsQ0xFTkJRVGRETzBGQlEwUXNSMEZNV1RzN1FVRlBZaXhaUVVGVkxGVkJRVU1zUzBGQlJDeEZRVUZYTzBGQlEyNUNMRkZCUVVrc1ZVRkJWU3hEUVVGa08wRkJRMEVzVjBGQlR5eE5RVUZOTEU5QlFVNHNRMEZCWXl4WFFVRmtMRVZCUVRKQ08wRkJRVUVzWVVGQlRTeGpRVUZqTEZOQlFXUXNRMEZCVGp0QlFVRkJMRXRCUVROQ0xFTkJRVkE3UVVGRFJDeEhRVlpaT3p0QlFWbGlMRk5CUVU4c1ZVRkJReXhMUVVGRUxFVkJRVmM3UVVGRGFFSXNVVUZCVFN4aFFVRmhMRVZCUVc1Q096dEJRVVZCTEZWQlFVMHNTMEZCVGl4RFFVRlpMRmRCUVZvc1JVRkJlVUlzVDBGQmVrSXNRMEZCYVVNc1ZVRkJReXhMUVVGRUxFVkJRVkVzUTBGQlVqdEJRVUZCTEdGQlFXTXNWMEZCVnl4RFFVRllMRWxCUVdkQ0xFdEJRVGxDTzBGQlFVRXNTMEZCYWtNN08wRkJSVUVzVjBGQlR5eFZRVUZRTzBGQlEwUXNSMEZzUWxrN08wRkJiMEppTEZkQlFWTXNWVUZCUXl4TlFVRkVMRVZCUVZNc1VVRkJWQ3hGUVVGelFqdEJRVU0zUWl4VFFVRkxMRWxCUVVrc1IwRkJWQ3hKUVVGblFpeE5RVUZvUWl4RlFVRjNRanRCUVVOMFFpeFZRVUZKTEU5QlFVOHNZMEZCVUN4RFFVRnpRaXhIUVVGMFFpeERRVUZLTEVWQlFXZERPMEZCUXpsQ0xHMUNRVUZYTEZOQlFWTXNUMEZCVkN4RFFVRnBRaXhqUVVGakxFZEJRV1FzUTBGQmFrSXNSVUZCY1VNc1QwRkJUeXhIUVVGUUxFTkJRWEpETEVOQlFWZzdRVUZEUkR0QlFVTkdPenRCUVVWRUxGZEJRVThzVVVGQlVEdEJRVU5FT3p0QlFUVkNXU3hESWl3aVptbHNaU0k2SW1OdmJYQnNaWGd1YW5NaUxDSnpiM1Z5WTJWU2IyOTBJam9pTDFWelpYSnpMMjFoZEhSd1pYSnllUzlUYVhSbGN5OXdiM0J0YjNScGIyNGlMQ0p6YjNWeVkyVnpRMjl1ZEdWdWRDSTZXeUpwYlhCdmNuUWdleUJwYzBGeWNtRjVJSDBnWm5KdmJTQW5MaTR2YVc1akwzVjBhV3h6Snp0Y2JseHVZMjl1YzNRZ1JreFBRVlJmVWtWSFJWZ2dQU0F2S0MwcFB5aGNYR1JiWEZ4a1hGd3VYU29wTDJjN1hHNWpiMjV6ZENCblpXNWxjbUYwWlZSdmEyVnVJRDBnS0hSdmEyVnVLU0E5UGlBbkpIc25JQ3NnZEc5clpXNGdLeUFuZlNjN1hHNWNibVY0Y0c5eWRDQmtaV1poZFd4MElIdGNibHh1SUNCMFpYTjBPaUFvZG1Gc2RXVXBJRDArSUh0Y2JpQWdJQ0JqYjI1emRDQnRZWFJqYUdWeklEMGdkbUZzZFdVdWJXRjBZMmdvUmt4UFFWUmZVa1ZIUlZncE8xeHVJQ0FnSUhKbGRIVnliaUFvYVhOQmNuSmhlU2h0WVhSamFHVnpLU0FtSmlCdFlYUmphR1Z6TG14bGJtZDBhQ0ErSURFcE8xeHVJQ0I5TEZ4dVhHNGdJSFJsYlhCc1lYUmxPaUFvZG1Gc2RXVXBJRDArSUh0Y2JpQWdJQ0JzWlhRZ1kyOTFiblJsY2lBOUlEQTdYRzRnSUNBZ2NtVjBkWEp1SUhaaGJIVmxMbkpsY0d4aFkyVW9Sa3hQUVZSZlVrVkhSVmdzSUNncElEMCtJR2RsYm1WeVlYUmxWRzlyWlc0b1kyOTFiblJsY2lzcktTazdYRzRnSUgwc1hHNWNiaUFnYzNCc2FYUTZJQ2gyWVd4MVpTa2dQVDRnZTF4dUlDQWdJR052Ym5OMElITndiR2wwVm1Gc2RXVWdQU0I3ZlR0Y2JseHVJQ0FnSUhaaGJIVmxMbTFoZEdOb0tFWk1UMEZVWDFKRlIwVllLUzVtYjNKRllXTm9LQ2gyWVd4MVpTd2dhU2tnUFQ0Z2MzQnNhWFJXWVd4MVpWdHBYU0E5SUhaaGJIVmxLVHRjYmx4dUlDQWdJSEpsZEhWeWJpQnpjR3hwZEZaaGJIVmxPMXh1SUNCOUxGeHVYRzRnSUdOdmJXSnBibVU2SUNoMllXeDFaWE1zSUhSbGJYQnNZWFJsS1NBOVBpQjdYRzRnSUNBZ1ptOXlJQ2hzWlhRZ2EyVjVJR2x1SUhaaGJIVmxjeWtnZTF4dUlDQWdJQ0FnYVdZZ0tIWmhiSFZsY3k1b1lYTlBkMjVRY205d1pYSjBlU2hyWlhrcEtTQjdYRzRnSUNBZ0lDQWdJSFJsYlhCc1lYUmxJRDBnZEdWdGNHeGhkR1V1Y21Wd2JHRmpaU2huWlc1bGNtRjBaVlJ2YTJWdUtHdGxlU2tzSUhaaGJIVmxjMXRyWlhsZEtUdGNiaUFnSUNBZ0lIMWNiaUFnSUNCOVhHNWNiaUFnSUNCeVpYUjFjbTRnZEdWdGNHeGhkR1U3WEc0Z0lIMWNibHh1ZlRzaVhYMD1cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL3ZhbHVlLXR5cGVzL2NvbXBsZXguanNcbiAqKiBtb2R1bGUgaWQgPSAyNVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX3JnYiA9IHJlcXVpcmUoJy4vcmdiJyk7XG5cbnZhciBfcmdiMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JnYik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmV4cG9ydHMuZGVmYXVsdCA9IHtcbiAgZGVmYXVsdFByb3BzOiBfcmdiMi5kZWZhdWx0LmRlZmF1bHRQcm9wcyxcblxuICB0ZXN0OiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICByZXR1cm4gdmFsdWUgJiYgdmFsdWUuaW5kZXhPZignIycpID4gLTE7XG4gIH0sXG5cbiAgc3BsaXQ6IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgIHZhciByID0gdm9pZCAwLFxuICAgICAgICBnID0gdm9pZCAwLFxuICAgICAgICBiID0gdm9pZCAwO1xuXG4gICAgLy8gSWYgd2UgaGF2ZSA2IGNoYXJhY3RlcnMsIGllICNGRjAwMDBcbiAgICBpZiAodmFsdWUubGVuZ3RoID4gNCkge1xuICAgICAgciA9IHZhbHVlLnN1YnN0cigxLCAyKTtcbiAgICAgIGcgPSB2YWx1ZS5zdWJzdHIoMywgMik7XG4gICAgICBiID0gdmFsdWUuc3Vic3RyKDUsIDIpO1xuXG4gICAgICAvLyBPciB3ZSBoYXZlIDMgY2hhcmFjdGVycywgaWUgI0YwMFxuICAgIH0gZWxzZSB7XG4gICAgICByID0gdmFsdWUuc3Vic3RyKDEsIDEpO1xuICAgICAgZyA9IHZhbHVlLnN1YnN0cigyLCAxKTtcbiAgICAgIGIgPSB2YWx1ZS5zdWJzdHIoMywgMSk7XG4gICAgICByICs9IHI7XG4gICAgICBnICs9IGc7XG4gICAgICBiICs9IGI7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIFJlZDogcGFyc2VJbnQociwgMTYpLFxuICAgICAgR3JlZW46IHBhcnNlSW50KGcsIDE2KSxcbiAgICAgIEJsdWU6IHBhcnNlSW50KGIsIDE2KSxcbiAgICAgIEFscGhhOiAxXG4gICAgfTtcbiAgfSxcblxuICBjb21iaW5lOiBmdW5jdGlvbiAodmFsdWVzKSB7XG4gICAgcmV0dXJuIF9yZ2IyLmRlZmF1bHQuY29tYmluZSh2YWx1ZXMpO1xuICB9XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluTnlZeTkyWVd4MVpTMTBlWEJsY3k5b1pYZ3Vhbk1pWFN3aWJtRnRaWE1pT2x0ZExDSnRZWEJ3YVc1bmN5STZJanM3T3p0QlFVRkJPenM3T3pzN2EwSkJSV1U3UVVGRFlpeG5Ra0ZCWXl4alFVRkpMRmxCUkV3N08wRkJSMklzVVVGQlRTeFZRVUZETEV0QlFVUTdRVUZCUVN4WFFVRlpMRk5CUVZNc1RVRkJUU3hQUVVGT0xFTkJRV01zUjBGQlpDeEpRVUZ4UWl4RFFVRkRMRU5CUVRORE8wRkJRVUVzUjBGSVR6czdRVUZMWWl4VFFVRlBMRlZCUVVNc1MwRkJSQ3hGUVVGWE8wRkJRMmhDTEZGQlFVa3NWVUZCU2p0QlFVRkJMRkZCUVU4c1ZVRkJVRHRCUVVGQkxGRkJRVlVzVlVGQlZqczdPMEZCUjBFc1VVRkJTU3hOUVVGTkxFMUJRVTRzUjBGQlpTeERRVUZ1UWl4RlFVRnpRanRCUVVOd1FpeFZRVUZKTEUxQlFVMHNUVUZCVGl4RFFVRmhMRU5CUVdJc1JVRkJaMElzUTBGQmFFSXNRMEZCU2p0QlFVTkJMRlZCUVVrc1RVRkJUU3hOUVVGT0xFTkJRV0VzUTBGQllpeEZRVUZuUWl4RFFVRm9RaXhEUVVGS08wRkJRMEVzVlVGQlNTeE5RVUZOTEUxQlFVNHNRMEZCWVN4RFFVRmlMRVZCUVdkQ0xFTkJRV2hDTEVOQlFVbzdPenRCUVVkRUxFdEJUa1FzVFVGTlR6dEJRVU5NTEZWQlFVa3NUVUZCVFN4TlFVRk9MRU5CUVdFc1EwRkJZaXhGUVVGblFpeERRVUZvUWl4RFFVRktPMEZCUTBFc1ZVRkJTU3hOUVVGTkxFMUJRVTRzUTBGQllTeERRVUZpTEVWQlFXZENMRU5CUVdoQ0xFTkJRVW83UVVGRFFTeFZRVUZKTEUxQlFVMHNUVUZCVGl4RFFVRmhMRU5CUVdJc1JVRkJaMElzUTBGQmFFSXNRMEZCU2p0QlFVTkJMRmRCUVVzc1EwRkJURHRCUVVOQkxGZEJRVXNzUTBGQlREdEJRVU5CTEZkQlFVc3NRMEZCVER0QlFVTkVPenRCUVVWRUxGZEJRVTg3UVVGRFRDeFhRVUZMTEZOQlFWTXNRMEZCVkN4RlFVRlpMRVZCUVZvc1EwRkVRVHRCUVVWTUxHRkJRVThzVTBGQlV5eERRVUZVTEVWQlFWa3NSVUZCV2l4RFFVWkdPMEZCUjB3c1dVRkJUU3hUUVVGVExFTkJRVlFzUlVGQldTeEZRVUZhTEVOQlNFUTdRVUZKVEN4aFFVRlBPMEZCU2tZc1MwRkJVRHRCUVUxRUxFZEJPVUpaT3p0QlFXZERZaXhYUVVGVExGVkJRVU1zVFVGQlJEdEJRVUZCTEZkQlFWa3NZMEZCU1N4UFFVRktMRU5CUVZrc1RVRkJXaXhEUVVGYU8wRkJRVUU3UVVGb1Ewa3NReUlzSW1acGJHVWlPaUpvWlhndWFuTWlMQ0p6YjNWeVkyVlNiMjkwSWpvaUwxVnpaWEp6TDIxaGRIUndaWEp5ZVM5VGFYUmxjeTl3YjNCdGIzUnBiMjRpTENKemIzVnlZMlZ6UTI5dWRHVnVkQ0k2V3lKcGJYQnZjblFnY21kaUlHWnliMjBnSnk0dmNtZGlKenRjYmx4dVpYaHdiM0owSUdSbFptRjFiSFFnZTF4dUlDQmtaV1poZFd4MFVISnZjSE02SUhKbllpNWtaV1poZFd4MFVISnZjSE1zWEc1Y2JpQWdkR1Z6ZERvZ0tIWmhiSFZsS1NBOVBpQW9kbUZzZFdVZ0ppWWdkbUZzZFdVdWFXNWtaWGhQWmlnbkl5Y3BJRDRnTFRFcExGeHVYRzRnSUhOd2JHbDBPaUFvZG1Gc2RXVXBJRDArSUh0Y2JpQWdJQ0JzWlhRZ2Npd2daeXdnWWp0Y2JseHVJQ0FnSUM4dklFbG1JSGRsSUdoaGRtVWdOaUJqYUdGeVlXTjBaWEp6TENCcFpTQWpSa1l3TURBd1hHNGdJQ0FnYVdZZ0tIWmhiSFZsTG14bGJtZDBhQ0ErSURRcElIdGNiaUFnSUNBZ0lISWdQU0IyWVd4MVpTNXpkV0p6ZEhJb01Td2dNaWs3WEc0Z0lDQWdJQ0JuSUQwZ2RtRnNkV1V1YzNWaWMzUnlLRE1zSURJcE8xeHVJQ0FnSUNBZ1lpQTlJSFpoYkhWbExuTjFZbk4wY2lnMUxDQXlLVHRjYmx4dUlDQWdJQzh2SUU5eUlIZGxJR2hoZG1VZ015QmphR0Z5WVdOMFpYSnpMQ0JwWlNBalJqQXdYRzRnSUNBZ2ZTQmxiSE5sSUh0Y2JpQWdJQ0FnSUhJZ1BTQjJZV3gxWlM1emRXSnpkSElvTVN3Z01TazdYRzRnSUNBZ0lDQm5JRDBnZG1Gc2RXVXVjM1ZpYzNSeUtESXNJREVwTzF4dUlDQWdJQ0FnWWlBOUlIWmhiSFZsTG5OMVluTjBjaWd6TENBeEtUdGNiaUFnSUNBZ0lISWdLejBnY2p0Y2JpQWdJQ0FnSUdjZ0t6MGdaenRjYmlBZ0lDQWdJR0lnS3owZ1lqdGNiaUFnSUNCOVhHNWNiaUFnSUNCeVpYUjFjbTRnZTF4dUlDQWdJQ0FnVW1Wa09pQndZWEp6WlVsdWRDaHlMQ0F4Tmlrc1hHNGdJQ0FnSUNCSGNtVmxiam9nY0dGeWMyVkpiblFvWnl3Z01UWXBMRnh1SUNBZ0lDQWdRbXgxWlRvZ2NHRnljMlZKYm5Rb1lpd2dNVFlwTEZ4dUlDQWdJQ0FnUVd4d2FHRTZJREZjYmlBZ0lDQjlPMXh1SUNCOUxGeHVYRzRnSUdOdmJXSnBibVU2SUNoMllXeDFaWE1wSUQwK0lISm5ZaTVqYjIxaWFXNWxLSFpoYkhWbGN5bGNibjA3SWwxOVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvdmFsdWUtdHlwZXMvaGV4LmpzXG4gKiogbW9kdWxlIGlkID0gMjZcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF9kZWZhdWx0UHJvcHMgPSByZXF1aXJlKCcuL3NldHRpbmdzL2RlZmF1bHQtcHJvcHMnKTtcblxudmFyIF9kaWN0aW9uYXJ5ID0gcmVxdWlyZSgnLi9zZXR0aW5ncy9kaWN0aW9uYXJ5Jyk7XG5cbnZhciBfdXRpbHMgPSByZXF1aXJlKCcuLi9pbmMvdXRpbHMnKTtcblxuZXhwb3J0cy5kZWZhdWx0ID0ge1xuICBkZWZhdWx0UHJvcHM6IHtcbiAgICBIdWU6IHtcbiAgICAgIG1pbjogMCxcbiAgICAgIG1heDogMzYwXG4gICAgfSxcbiAgICBTYXR1cmF0aW9uOiBfZGVmYXVsdFByb3BzLnBlcmNlbnQsXG4gICAgTGlnaHRuZXNzOiBfZGVmYXVsdFByb3BzLnBlcmNlbnQsXG4gICAgQWxwaGE6IF9kZWZhdWx0UHJvcHMub3BhY2l0eVxuICB9LFxuXG4gIHRlc3Q6IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgIHJldHVybiB2YWx1ZSAmJiB2YWx1ZS5pbmRleE9mKCdoc2wnKSA+IC0xO1xuICB9LFxuXG4gIHNwbGl0OiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICByZXR1cm4gKDAsIF91dGlscy5nZXRDb2xvclZhbHVlcykodmFsdWUsIF9kaWN0aW9uYXJ5LmhzbCk7XG4gIH0sXG5cbiAgY29tYmluZTogZnVuY3Rpb24gKHZhbHVlcykge1xuICAgIHJldHVybiAoMCwgX3V0aWxzLmNyZWF0ZUZ1bmN0aW9uU3RyaW5nKSgoMCwgX3V0aWxzLmNyZWF0ZURlbGltaXRlZCkodmFsdWVzLCBfZGljdGlvbmFyeS5oc2wsICcsICcsIDIpLCAnaHNsYScpO1xuICB9XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluTnlZeTkyWVd4MVpTMTBlWEJsY3k5b2Myd3Vhbk1pWFN3aWJtRnRaWE1pT2x0ZExDSnRZWEJ3YVc1bmN5STZJanM3T3p0QlFVRkJPenRCUVVOQk96dEJRVU5CT3p0clFrRkZaVHRCUVVOaUxHZENRVUZqTzBGQlExb3NVMEZCU3p0QlFVTklMRmRCUVVzc1EwRkVSanRCUVVWSUxGZEJRVXM3UVVGR1JpeExRVVJQTzBGQlMxb3NjVU5CVEZrN1FVRk5XaXh2UTBGT1dUdEJRVTlhTzBGQlVGa3NSMEZFUkRzN1FVRlhZaXhSUVVGTkxGVkJRVU1zUzBGQlJEdEJRVUZCTEZkQlFWa3NVMEZCVXl4TlFVRk5MRTlCUVU0c1EwRkJZeXhMUVVGa0xFbEJRWFZDTEVOQlFVTXNRMEZCTjBNN1FVRkJRU3hIUVZoUE96dEJRV0ZpTEZOQlFVOHNWVUZCUXl4TFFVRkVPMEZCUVVFc1YwRkJWeXd5UWtGQlpTeExRVUZtTEd0Q1FVRllPMEZCUVVFc1IwRmlUVHM3UVVGbFlpeFhRVUZUTEZWQlFVTXNUVUZCUkR0QlFVRkJMRmRCUVZrc2FVTkJRWEZDTERSQ1FVRm5RaXhOUVVGb1FpeHRRa0ZCYTBNc1NVRkJiRU1zUlVGQmQwTXNRMEZCZUVNc1EwRkJja0lzUlVGQmFVVXNUVUZCYWtVc1EwRkJXanRCUVVGQk8wRkJaa2tzUXlJc0ltWnBiR1VpT2lKb2Myd3Vhbk1pTENKemIzVnlZMlZTYjI5MElqb2lMMVZ6WlhKekwyMWhkSFJ3WlhKeWVTOVRhWFJsY3k5d2IzQnRiM1JwYjI0aUxDSnpiM1Z5WTJWelEyOXVkR1Z1ZENJNld5SnBiWEJ2Y25RZ2V5QndaWEpqWlc1MExDQnZjR0ZqYVhSNUlIMGdabkp2YlNBbkxpOXpaWFIwYVc1bmN5OWtaV1poZFd4MExYQnliM0J6Snp0Y2JtbHRjRzl5ZENCN0lHaHpiQ0JoY3lCb2MyeFVaWEp0Y3lCOUlHWnliMjBnSnk0dmMyVjBkR2x1WjNNdlpHbGpkR2x2Ym1GeWVTYzdYRzVwYlhCdmNuUWdleUJqY21WaGRHVkVaV3hwYldsMFpXUXNJR055WldGMFpVWjFibU4wYVc5dVUzUnlhVzVuTENCblpYUkRiMnh2Y2xaaGJIVmxjeUI5SUdaeWIyMGdKeTR1TDJsdVl5OTFkR2xzY3ljN1hHNWNibVY0Y0c5eWRDQmtaV1poZFd4MElIdGNiaUFnWkdWbVlYVnNkRkJ5YjNCek9pQjdYRzRnSUNBZ1NIVmxPaUI3WEc0Z0lDQWdJQ0J0YVc0NklEQXNYRzRnSUNBZ0lDQnRZWGc2SURNMk1GeHVJQ0FnSUgwc1hHNGdJQ0FnVTJGMGRYSmhkR2x2YmpvZ2NHVnlZMlZ1ZEN4Y2JpQWdJQ0JNYVdkb2RHNWxjM002SUhCbGNtTmxiblFzWEc0Z0lDQWdRV3h3YUdFNklHOXdZV05wZEhsY2JpQWdmU3hjYmx4dUlDQjBaWE4wT2lBb2RtRnNkV1VwSUQwK0lDaDJZV3gxWlNBbUppQjJZV3gxWlM1cGJtUmxlRTltS0Nkb2Myd25LU0ErSUMweEtTeGNibHh1SUNCemNHeHBkRG9nS0haaGJIVmxLU0E5UGlCblpYUkRiMnh2Y2xaaGJIVmxjeWgyWVd4MVpTd2dhSE5zVkdWeWJYTXBMRnh1WEc0Z0lHTnZiV0pwYm1VNklDaDJZV3gxWlhNcElEMCtJR055WldGMFpVWjFibU4wYVc5dVUzUnlhVzVuS0dOeVpXRjBaVVJsYkdsdGFYUmxaQ2gyWVd4MVpYTXNJR2h6YkZSbGNtMXpMQ0FuTENBbkxDQXlLU3dnSjJoemJHRW5LVnh1ZlR0Y2JpSmRmUT09XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy92YWx1ZS10eXBlcy9oc2wuanNcbiAqKiBtb2R1bGUgaWQgPSAyN1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX3VuaXQgPSByZXF1aXJlKCcuL3VuaXQnKTtcblxudmFyIF91bml0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3VuaXQpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5leHBvcnRzLmRlZmF1bHQgPSB7XG4gIGRlZmF1bHRQcm9wczoge1xuICAgIHVuaXQ6ICdweCcsXG4gICAgdHlwZTogX3VuaXQyLmRlZmF1bHRcbiAgfVxufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbk55WXk5MllXeDFaUzEwZVhCbGN5OXdlQzVxY3lKZExDSnVZVzFsY3lJNlcxMHNJbTFoY0hCcGJtZHpJam9pT3pzN08wRkJRVUU3T3pzN096dHJRa0ZGWlR0QlFVTmlMR2RDUVVGak8wRkJRMW9zVlVGQlRTeEpRVVJOTzBGQlJWbzdRVUZHV1R0QlFVUkVMRU1pTENKbWFXeGxJam9pY0hndWFuTWlMQ0p6YjNWeVkyVlNiMjkwSWpvaUwxVnpaWEp6TDIxaGRIUndaWEp5ZVM5VGFYUmxjeTl3YjNCdGIzUnBiMjRpTENKemIzVnlZMlZ6UTI5dWRHVnVkQ0k2V3lKcGJYQnZjblFnZFc1cGRGUjVjR1VnWm5KdmJTQW5MaTkxYm1sMEp6dGNibHh1Wlhod2IzSjBJR1JsWm1GMWJIUWdlMXh1SUNCa1pXWmhkV3gwVUhKdmNITTZJSHRjYmlBZ0lDQjFibWwwT2lBbmNIZ25MRnh1SUNBZ0lIUjVjR1U2SUhWdWFYUlVlWEJsWEc0Z0lIMWNibjA3SWwxOVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvdmFsdWUtdHlwZXMvcHguanNcbiAqKiBtb2R1bGUgaWQgPSAyOFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX3V0aWxzID0gcmVxdWlyZSgnLi4vaW5jL3V0aWxzJyk7XG5cbnZhciBfZGljdGlvbmFyeSA9IHJlcXVpcmUoJy4vc2V0dGluZ3MvZGljdGlvbmFyeScpO1xuXG52YXIgX2RlZmF1bHRQcm9wcyA9IHJlcXVpcmUoJy4vc2V0dGluZ3MvZGVmYXVsdC1wcm9wcycpO1xuXG5leHBvcnRzLmRlZmF1bHQgPSB7XG4gIGRlZmF1bHRQcm9wczoge1xuICAgIFJlZDogX2RlZmF1bHRQcm9wcy5yZ2IsXG4gICAgR3JlZW46IF9kZWZhdWx0UHJvcHMucmdiLFxuICAgIEJsdWU6IF9kZWZhdWx0UHJvcHMucmdiLFxuICAgIEFscGhhOiBfZGVmYXVsdFByb3BzLm9wYWNpdHlcbiAgfSxcblxuICB0ZXN0OiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICByZXR1cm4gdmFsdWUgJiYgdmFsdWUuaW5kZXhPZigncmdiJykgPiAtMTtcbiAgfSxcblxuICBzcGxpdDogZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgcmV0dXJuICgwLCBfdXRpbHMuZ2V0Q29sb3JWYWx1ZXMpKHZhbHVlLCBfZGljdGlvbmFyeS5yZ2IpO1xuICB9LFxuXG4gIGNvbWJpbmU6IGZ1bmN0aW9uICh2YWx1ZXMpIHtcbiAgICByZXR1cm4gKDAsIF91dGlscy5jcmVhdGVGdW5jdGlvblN0cmluZykoKDAsIF91dGlscy5jcmVhdGVEZWxpbWl0ZWQpKHZhbHVlcywgX2RpY3Rpb25hcnkucmdiLCAnLCAnLCAyKSwgJ3JnYmEnKTtcbiAgfVxufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbk55WXk5MllXeDFaUzEwZVhCbGN5OXlaMkl1YW5NaVhTd2libUZ0WlhNaU9sdGRMQ0p0WVhCd2FXNW5jeUk2SWpzN096dEJRVUZCT3p0QlFVTkJPenRCUVVOQk96dHJRa0ZGWlR0QlFVTmlMR2RDUVVGak8wRkJRMW9zTUVKQlJGazdRVUZGV2l3MFFrRkdXVHRCUVVkYUxESkNRVWhaTzBGQlNWbzdRVUZLV1N4SFFVUkVPenRCUVZGaUxGRkJRVTBzVlVGQlF5eExRVUZFTzBGQlFVRXNWMEZCV1N4VFFVRlRMRTFCUVUwc1QwRkJUaXhEUVVGakxFdEJRV1FzU1VGQmRVSXNRMEZCUXl4RFFVRTNRenRCUVVGQkxFZEJVazg3TzBGQlZXSXNVMEZCVHl4VlFVRkRMRXRCUVVRN1FVRkJRU3hYUVVGWExESkNRVUZsTEV0QlFXWXNhMEpCUVZnN1FVRkJRU3hIUVZaTk96dEJRVmxpTEZkQlFWTXNWVUZCUXl4TlFVRkVPMEZCUVVFc1YwRkJXU3hwUTBGQmNVSXNORUpCUVdkQ0xFMUJRV2hDTEcxQ1FVRnJReXhKUVVGc1F5eEZRVUYzUXl4RFFVRjRReXhEUVVGeVFpeEZRVUZwUlN4TlFVRnFSU3hEUVVGYU8wRkJRVUU3UVVGYVNTeERJaXdpWm1sc1pTSTZJbkpuWWk1cWN5SXNJbk52ZFhKalpWSnZiM1FpT2lJdlZYTmxjbk12YldGMGRIQmxjbko1TDFOcGRHVnpMM0J2Y0cxdmRHbHZiaUlzSW5OdmRYSmpaWE5EYjI1MFpXNTBJanBiSW1sdGNHOXlkQ0I3SUdOeVpXRjBaVVJsYkdsdGFYUmxaQ3dnWTNKbFlYUmxSblZ1WTNScGIyNVRkSEpwYm1jc0lHZGxkRU52Ykc5eVZtRnNkV1Z6SUgwZ1puSnZiU0FuTGk0dmFXNWpMM1YwYVd4ekp6dGNibWx0Y0c5eWRDQjdJSEpuWWlCaGN5QnlaMkpVWlhKdGN5QjlJR1p5YjIwZ0p5NHZjMlYwZEdsdVozTXZaR2xqZEdsdmJtRnllU2M3WEc1cGJYQnZjblFnZXlCeVoySWdZWE1nWkdWbVlYVnNkRkpIUWl3Z2IzQmhZMmwwZVNCaGN5QmtaV1poZFd4MFQzQmhZMmwwZVNCOUlHWnliMjBnSnk0dmMyVjBkR2x1WjNNdlpHVm1ZWFZzZEMxd2NtOXdjeWM3WEc1Y2JtVjRjRzl5ZENCa1pXWmhkV3gwSUh0Y2JpQWdaR1ZtWVhWc2RGQnliM0J6T2lCN1hHNGdJQ0FnVW1Wa09pQmtaV1poZFd4MFVrZENMRnh1SUNBZ0lFZHlaV1Z1T2lCa1pXWmhkV3gwVWtkQ0xGeHVJQ0FnSUVKc2RXVTZJR1JsWm1GMWJIUlNSMElzWEc0Z0lDQWdRV3h3YUdFNklHUmxabUYxYkhSUGNHRmphWFI1WEc0Z0lIMHNYRzVjYmlBZ2RHVnpkRG9nS0haaGJIVmxLU0E5UGlBb2RtRnNkV1VnSmlZZ2RtRnNkV1V1YVc1a1pYaFBaaWduY21kaUp5a2dQaUF0TVNrc1hHNWNiaUFnYzNCc2FYUTZJQ2gyWVd4MVpTa2dQVDRnWjJWMFEyOXNiM0pXWVd4MVpYTW9kbUZzZFdVc0lISm5ZbFJsY20xektTeGNibHh1SUNCamIyMWlhVzVsT2lBb2RtRnNkV1Z6S1NBOVBpQmpjbVZoZEdWR2RXNWpkR2x2YmxOMGNtbHVaeWhqY21WaGRHVkVaV3hwYldsMFpXUW9kbUZzZFdWekxDQnlaMkpVWlhKdGN5d2dKeXdnSnl3Z01pa3NJQ2R5WjJKaEp5bGNibjA3SWwxOVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvdmFsdWUtdHlwZXMvcmdiLmpzXG4gKiogbW9kdWxlIGlkID0gMjlcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0cy5kZWZhdWx0ID0ge1xuICBkZWZhdWx0UHJvcHM6IHtcbiAgICBjdXJyZW50OiAxXG4gIH1cbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5OeVl5OTJZV3gxWlMxMGVYQmxjeTl6WTJGc1pTNXFjeUpkTENKdVlXMWxjeUk2VzEwc0ltMWhjSEJwYm1keklqb2lPenM3YTBKQlFXVTdRVUZEWWl4blFrRkJZenRCUVVOYUxHRkJRVk03UVVGRVJ6dEJRVVJFTEVNaUxDSm1hV3hsSWpvaWMyTmhiR1V1YW5NaUxDSnpiM1Z5WTJWU2IyOTBJam9pTDFWelpYSnpMMjFoZEhSd1pYSnllUzlUYVhSbGN5OXdiM0J0YjNScGIyNGlMQ0p6YjNWeVkyVnpRMjl1ZEdWdWRDSTZXeUpsZUhCdmNuUWdaR1ZtWVhWc2RDQjdYRzRnSUdSbFptRjFiSFJRY205d2N6b2dlMXh1SUNBZ0lHTjFjbkpsYm5RNklERmNiaUFnZlZ4dWZUc2lYWDA9XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy92YWx1ZS10eXBlcy9zY2FsZS5qc1xuICoqIG1vZHVsZSBpZCA9IDMwXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07XG5cbnZhciBfY29sb3IgPSByZXF1aXJlKCcuL2NvbG9yJyk7XG5cbnZhciBfY29sb3IyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY29sb3IpO1xuXG52YXIgX3B4ID0gcmVxdWlyZSgnLi9weCcpO1xuXG52YXIgX2RpY3Rpb25hcnkgPSByZXF1aXJlKCcuL3NldHRpbmdzL2RpY3Rpb25hcnknKTtcblxudmFyIF91dGlscyA9IHJlcXVpcmUoJy4uL2luYy91dGlscycpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG52YXIgc2hhZG93V2l0aG91dENvbG9yVGVybXMgPSBfZGljdGlvbmFyeS5zaGFkb3cuc2xpY2UoMCwgNCk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IHtcbiAgZGVmYXVsdFByb3BzOiBfZXh0ZW5kcyh7fSwgX2NvbG9yMi5kZWZhdWx0LmRlZmF1bHRQcm9wcywge1xuICAgIFg6IF9weC5kZWZhdWx0UHJvcHMsXG4gICAgWTogX3B4LmRlZmF1bHRQcm9wcyxcbiAgICBSYWRpdXM6IF9weC5kZWZhdWx0UHJvcHMsXG4gICAgU3ByZWFkOiBfcHguZGVmYXVsdFByb3BzXG4gIH0pLFxuXG4gIHNwbGl0OiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICB2YXIgYml0cyA9ICgwLCBfdXRpbHMuc3BsaXRTcGFjZURlbGltaXRlZCkodmFsdWUpO1xuICAgIHZhciBoYXNSZWFjaGVkQ29sb3IgPSBmYWxzZTtcbiAgICB2YXIgY29sb3JQcm9wID0gJyc7XG4gICAgdmFyIHNwbGl0VmFsdWUgPSB7fTtcblxuICAgIGJpdHMuZm9yRWFjaChmdW5jdGlvbiAoYml0LCBpKSB7XG4gICAgICAvLyBJZiB3ZSd2ZSByZWFjaGVkIHRoZSBjb2xvciBwcm9wcywgYXBwZW5kIHRvIGNvbG9yIHN0cmluZ1xuICAgICAgaWYgKGhhc1JlYWNoZWRDb2xvciB8fCBfY29sb3IyLmRlZmF1bHQudGVzdChiaXQpKSB7XG4gICAgICAgIGhhc1JlYWNoZWRDb2xvciA9IHRydWU7XG4gICAgICAgIGNvbG9yUHJvcCArPSBiaXQ7XG5cbiAgICAgICAgLy8gRWxzZSBwcm9jZXNzIHNoYWRvdyB2YWx1ZVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc3BsaXRWYWx1ZVtfZGljdGlvbmFyeS5zaGFkb3dbaV1dID0gYml0O1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgdmFyIHNwbGl0Q29sb3JQcm9wcyA9IF9jb2xvcjIuZGVmYXVsdC5zcGxpdChjb2xvclByb3ApO1xuXG4gICAgcmV0dXJuIF9leHRlbmRzKHt9LCBzcGxpdFZhbHVlLCB7IHNwbGl0Q29sb3JQcm9wczogc3BsaXRDb2xvclByb3BzIH0pO1xuICB9LFxuXG4gIGNvbWJpbmU6IGZ1bmN0aW9uICh2YWx1ZXMpIHtcbiAgICByZXR1cm4gKDAsIF91dGlscy5jcmVhdGVEZWxpbWl0ZWQpKHZhbHVlcywgc2hhZG93V2l0aG91dENvbG9yVGVybXMsICcgJykgKyBfY29sb3IyLmRlZmF1bHQuY29tYmluZSh2YWx1ZXMpO1xuICB9XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluTnlZeTkyWVd4MVpTMTBlWEJsY3k5emFHRmtiM2N1YW5NaVhTd2libUZ0WlhNaU9sdGRMQ0p0WVhCd2FXNW5jeUk2SWpzN096czdPMEZCUVVFN096czdRVUZEUVRzN1FVRkRRVHM3UVVGRFFUczdPenRCUVVWQkxFbEJRVTBzTUVKQlFUQkNMRzFDUVVGWkxFdEJRVm9zUTBGQmEwSXNRMEZCYkVJc1JVRkJjVUlzUTBGQmNrSXNRMEZCYUVNN08ydENRVVZsTzBGQlEySXNOa0pCUTBzc1owSkJRVTBzV1VGRVdEdEJRVVZGTEhWQ1FVWkdPMEZCUjBVc2RVSkJTRVk3UVVGSlJTdzBRa0ZLUmp0QlFVdEZPMEZCVEVZc1NVRkVZVHM3UVVGVFlpeFRRVUZQTEZWQlFVTXNTMEZCUkN4RlFVRlhPMEZCUTJoQ0xGRkJRVTBzVDBGQlR5eG5RMEZCYjBJc1MwRkJjRUlzUTBGQllqdEJRVU5CTEZGQlFVa3NhMEpCUVd0Q0xFdEJRWFJDTzBGQlEwRXNVVUZCU1N4WlFVRlpMRVZCUVdoQ08wRkJRMEVzVVVGQlNTeGhRVUZoTEVWQlFXcENPenRCUVVWQkxGTkJRVXNzVDBGQlRDeERRVUZoTEZWQlFVTXNSMEZCUkN4RlFVRk5MRU5CUVU0c1JVRkJXVHM3UVVGRmRrSXNWVUZCU1N4dFFrRkJiVUlzWjBKQlFVMHNTVUZCVGl4RFFVRlhMRWRCUVZnc1EwRkJka0lzUlVGQmQwTTdRVUZEZEVNc01FSkJRV3RDTEVsQlFXeENPMEZCUTBFc2NVSkJRV0VzUjBGQllqczdPMEZCUjBRc1QwRk1SQ3hOUVV0UE8wRkJRMHdzYlVKQlFWY3NiVUpCUVZrc1EwRkJXaXhEUVVGWUxFbEJRVFpDTEVkQlFUZENPMEZCUTBRN1FVRkRSaXhMUVZaRU96dEJRVmxCTEZGQlFVMHNhMEpCUVd0Q0xHZENRVUZOTEV0QlFVNHNRMEZCV1N4VFFVRmFMRU5CUVhoQ096dEJRVVZCTEhkQ1FVRlpMRlZCUVZvc1NVRkJkMElzWjBOQlFYaENPMEZCUTBRc1IwRTVRbGs3TzBGQlowTmlMRmRCUVZNc1ZVRkJReXhOUVVGRU8wRkJRVUVzVjBGQldTdzBRa0ZCWjBJc1RVRkJhRUlzUlVGQmQwSXNkVUpCUVhoQ0xFVkJRV2xFTEVkQlFXcEVMRWxCUVhkRUxHZENRVUZOTEU5QlFVNHNRMEZCWXl4TlFVRmtMRU5CUVhCRk8wRkJRVUU3UVVGb1Ewa3NReUlzSW1acGJHVWlPaUp6YUdGa2IzY3Vhbk1pTENKemIzVnlZMlZTYjI5MElqb2lMMVZ6WlhKekwyMWhkSFJ3WlhKeWVTOVRhWFJsY3k5d2IzQnRiM1JwYjI0aUxDSnpiM1Z5WTJWelEyOXVkR1Z1ZENJNld5SnBiWEJ2Y25RZ1kyOXNiM0lnWm5KdmJTQW5MaTlqYjJ4dmNpYzdYRzVwYlhCdmNuUWdleUJrWldaaGRXeDBVSEp2Y0hNZ1lYTWdjSGhFWldaaGRXeDBVSEp2Y0hNZ2ZTQm1jbTl0SUNjdUwzQjRKenRjYm1sdGNHOXlkQ0I3SUhOb1lXUnZkeUJoY3lCemFHRmtiM2RVWlhKdGN5QjlJR1p5YjIwZ0p5NHZjMlYwZEdsdVozTXZaR2xqZEdsdmJtRnllU2M3WEc1cGJYQnZjblFnZXlCemNHeHBkRk53WVdObFJHVnNhVzFwZEdWa0xDQmpjbVZoZEdWRVpXeHBiV2wwWldRZ2ZTQm1jbTl0SUNjdUxpOXBibU12ZFhScGJITW5PMXh1WEc1amIyNXpkQ0J6YUdGa2IzZFhhWFJvYjNWMFEyOXNiM0pVWlhKdGN5QTlJSE5vWVdSdmQxUmxjbTF6TG5Oc2FXTmxLREFzSURRcE8xeHVYRzVsZUhCdmNuUWdaR1ZtWVhWc2RDQjdYRzRnSUdSbFptRjFiSFJRY205d2N6b2dlMXh1SUNBZ0lDNHVMbU52Ykc5eUxtUmxabUYxYkhSUWNtOXdjeXhjYmlBZ0lDQllPaUJ3ZUVSbFptRjFiSFJRY205d2N5eGNiaUFnSUNCWk9pQndlRVJsWm1GMWJIUlFjbTl3Y3l4Y2JpQWdJQ0JTWVdScGRYTTZJSEI0UkdWbVlYVnNkRkJ5YjNCekxGeHVJQ0FnSUZOd2NtVmhaRG9nY0hoRVpXWmhkV3gwVUhKdmNITmNiaUFnZlN4Y2JseHVJQ0J6Y0d4cGREb2dLSFpoYkhWbEtTQTlQaUI3WEc0Z0lDQWdZMjl1YzNRZ1ltbDBjeUE5SUhOd2JHbDBVM0JoWTJWRVpXeHBiV2wwWldRb2RtRnNkV1VwTzF4dUlDQWdJR3hsZENCb1lYTlNaV0ZqYUdWa1EyOXNiM0lnUFNCbVlXeHpaVHRjYmlBZ0lDQnNaWFFnWTI5c2IzSlFjbTl3SUQwZ0p5YzdYRzRnSUNBZ2JHVjBJSE53YkdsMFZtRnNkV1VnUFNCN2ZUdGNibHh1SUNBZ0lHSnBkSE11Wm05eVJXRmphQ2dvWW1sMExDQnBLU0E5UGlCN1hHNGdJQ0FnSUNBdkx5QkpaaUIzWlNkMlpTQnlaV0ZqYUdWa0lIUm9aU0JqYjJ4dmNpQndjbTl3Y3l3Z1lYQndaVzVrSUhSdklHTnZiRzl5SUhOMGNtbHVaMXh1SUNBZ0lDQWdhV1lnS0doaGMxSmxZV05vWldSRGIyeHZjaUI4ZkNCamIyeHZjaTUwWlhOMEtHSnBkQ2twSUh0Y2JpQWdJQ0FnSUNBZ2FHRnpVbVZoWTJobFpFTnZiRzl5SUQwZ2RISjFaVHRjYmlBZ0lDQWdJQ0FnWTI5c2IzSlFjbTl3SUNzOUlHSnBkRHRjYmx4dUlDQWdJQ0FnTHk4Z1JXeHpaU0J3Y205alpYTnpJSE5vWVdSdmR5QjJZV3gxWlZ4dUlDQWdJQ0FnZlNCbGJITmxJSHRjYmlBZ0lDQWdJQ0FnYzNCc2FYUldZV3gxWlZ0emFHRmtiM2RVWlhKdGMxdHBYVjBnUFNCaWFYUTdYRzRnSUNBZ0lDQjlYRzRnSUNBZ2ZTazdYRzVjYmlBZ0lDQmpiMjV6ZENCemNHeHBkRU52Ykc5eVVISnZjSE1nUFNCamIyeHZjaTV6Y0d4cGRDaGpiMnh2Y2xCeWIzQXBPMXh1WEc0Z0lDQWdjbVYwZFhKdUlIc2dMaTR1YzNCc2FYUldZV3gxWlN3Z2MzQnNhWFJEYjJ4dmNsQnliM0J6SUgwN1hHNGdJSDBzWEc1Y2JpQWdZMjl0WW1sdVpUb2dLSFpoYkhWbGN5a2dQVDRnWTNKbFlYUmxSR1ZzYVcxcGRHVmtLSFpoYkhWbGN5d2djMmhoWkc5M1YybDBhRzkxZEVOdmJHOXlWR1Z5YlhNc0lDY2dKeWtnS3lCamIyeHZjaTVqYjIxaWFXNWxLSFpoYkhWbGN5bGNibjA3WEc0aVhYMD1cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL3ZhbHVlLXR5cGVzL3NoYWRvdy5qc1xuICoqIG1vZHVsZSBpZCA9IDMxXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfdXRpbHMgPSByZXF1aXJlKCcuLi9pbmMvdXRpbHMnKTtcblxuZXhwb3J0cy5kZWZhdWx0ID0ge1xuICB0ZXN0OiBmdW5jdGlvbiAodW5wYXJzZWQpIHtcbiAgICB2YXIgX2ZpbmRWYWx1ZUFuZFVuaXQgPSAoMCwgX3V0aWxzLmZpbmRWYWx1ZUFuZFVuaXQpKHVucGFyc2VkKTtcblxuICAgIHZhciB2YWx1ZSA9IF9maW5kVmFsdWVBbmRVbml0LnZhbHVlO1xuXG4gICAgcmV0dXJuICgwLCBfdXRpbHMuaXNOdW0pKHZhbHVlKSAmJiAhaXNOYU4odmFsdWUpID8gdHJ1ZSA6IGZhbHNlO1xuICB9LFxuXG4gIHBhcnNlOiBmdW5jdGlvbiAodW5wYXJzZWQsIHBhcmVudCkge1xuICAgIHZhciBfZmluZFZhbHVlQW5kVW5pdDIgPSAoMCwgX3V0aWxzLmZpbmRWYWx1ZUFuZFVuaXQpKHVucGFyc2VkKTtcblxuICAgIHZhciB2YWx1ZSA9IF9maW5kVmFsdWVBbmRVbml0Mi52YWx1ZTtcbiAgICB2YXIgdW5pdCA9IF9maW5kVmFsdWVBbmRVbml0Mi51bml0O1xuXG5cbiAgICBpZiAodW5pdCAmJiB1bml0ICE9PSB1bml0KSB7XG4gICAgICBwYXJlbnQudW5pdCA9IHVuaXQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZhbHVlO1xuICB9LFxuXG4gIHNlcmlhbGl6ZTogZnVuY3Rpb24gKHBhcnNlZCwgcGFyZW50KSB7XG4gICAgcmV0dXJuIHBhcnNlZCArIChwYXJlbnQudW5pdCB8fCAnJyk7XG4gIH1cbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5OeVl5OTJZV3gxWlMxMGVYQmxjeTkxYm1sMExtcHpJbDBzSW01aGJXVnpJanBiWFN3aWJXRndjR2x1WjNNaU9pSTdPenM3UVVGQlFUczdhMEpCUldVN1FVRkRZaXhSUVVGTkxGVkJRVlVzVVVGQlZpeEZRVUZ2UWp0QlFVRkJMRFJDUVVOT0xEWkNRVUZwUWl4UlFVRnFRaXhEUVVSTk96dEJRVUZCTEZGQlEyaENMRXRCUkdkQ0xIRkNRVU5vUWl4TFFVUm5RanM3UVVGRmVFSXNWMEZCVVN4clFrRkJUU3hMUVVGT0xFdEJRV2RDTEVOQlFVTXNUVUZCVFN4TFFVRk9MRU5CUVd4Q0xFZEJRV3RETEVsQlFXeERMRWRCUVhsRExFdEJRV2hFTzBGQlEwUXNSMEZLV1RzN1FVRk5ZaXhUUVVGUExGVkJRVlVzVVVGQlZpeEZRVUZ2UWl4TlFVRndRaXhGUVVFMFFqdEJRVUZCTERaQ1FVTlVMRFpDUVVGcFFpeFJRVUZxUWl4RFFVUlRPenRCUVVGQkxGRkJRM3BDTEV0QlJIbENMSE5DUVVONlFpeExRVVI1UWp0QlFVRkJMRkZCUTJ4Q0xFbEJSR3RDTEhOQ1FVTnNRaXhKUVVSclFqczdPMEZCUjJwRExGRkJRVWtzVVVGQlVTeFRRVUZUTEVsQlFYSkNMRVZCUVRKQ08wRkJRM3BDTEdGQlFVOHNTVUZCVUN4SFFVRmpMRWxCUVdRN1FVRkRSRHM3UVVGRlJDeFhRVUZQTEV0QlFWQTdRVUZEUkN4SFFXUlpPenRCUVdkQ1lpeGhRVUZYTEZWQlFVTXNUVUZCUkN4RlFVRlRMRTFCUVZRN1FVRkJRU3hYUVVGdlFpeFZRVUZWTEU5QlFVOHNTVUZCVUN4SlFVRmxMRVZCUVhwQ0xFTkJRWEJDTzBGQlFVRTdRVUZvUWtVc1F5SXNJbVpwYkdVaU9pSjFibWwwTG1weklpd2ljMjkxY21ObFVtOXZkQ0k2SWk5VmMyVnljeTl0WVhSMGNHVnljbmt2VTJsMFpYTXZjRzl3Ylc5MGFXOXVJaXdpYzI5MWNtTmxjME52Ym5SbGJuUWlPbHNpYVcxd2IzSjBJSHNnYVhOT2RXMHNJR1pwYm1SV1lXeDFaVUZ1WkZWdWFYUWdmU0JtY205dElDY3VMaTlwYm1NdmRYUnBiSE1uTzF4dVhHNWxlSEJ2Y25RZ1pHVm1ZWFZzZENCN1hHNGdJSFJsYzNRNklHWjFibU4wYVc5dUlDaDFibkJoY25ObFpDa2dlMXh1SUNBZ0lHTnZibk4wSUhzZ2RtRnNkV1VnZlNBOUlHWnBibVJXWVd4MVpVRnVaRlZ1YVhRb2RXNXdZWEp6WldRcE8xeHVJQ0FnSUhKbGRIVnliaUFvYVhOT2RXMG9kbUZzZFdVcElDWW1JQ0ZwYzA1aFRpaDJZV3gxWlNrcElEOGdkSEoxWlNBNklHWmhiSE5sTzF4dUlDQjlMRnh1WEc0Z0lIQmhjbk5sT2lCbWRXNWpkR2x2YmlBb2RXNXdZWEp6WldRc0lIQmhjbVZ1ZENrZ2UxeHVJQ0FnSUdOdmJuTjBJSHNnZG1Gc2RXVXNJSFZ1YVhRZ2ZTQTlJR1pwYm1SV1lXeDFaVUZ1WkZWdWFYUW9kVzV3WVhKelpXUXBPMXh1WEc0Z0lDQWdhV1lnS0hWdWFYUWdKaVlnZFc1cGRDQWhQVDBnZFc1cGRDa2dlMXh1SUNBZ0lDQWdjR0Z5Wlc1MExuVnVhWFFnUFNCMWJtbDBPMXh1SUNBZ0lIMWNibHh1SUNBZ0lISmxkSFZ5YmlCMllXeDFaVHRjYmlBZ2ZTeGNibHh1SUNCelpYSnBZV3hwZW1VNklDaHdZWEp6WldRc0lIQmhjbVZ1ZENrZ1BUNGdjR0Z5YzJWa0lDc2dLSEJoY21WdWRDNTFibWwwSUh4OElDY25LVnh1ZlR0Y2JpSmRmUT09XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy92YWx1ZS10eXBlcy91bml0LmpzXG4gKiogbW9kdWxlIGlkID0gMzJcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHMuY2hhaW4gPSBleHBvcnRzLmNpcmN1bGFyTW90aW9uID0gZXhwb3J0cy5jcmVhdGVNYXBwZXIgPSB1bmRlZmluZWQ7XG5cbnZhciBfY2FsYyA9IHJlcXVpcmUoJy4uL2luYy9jYWxjJyk7XG5cbnZhciBjcmVhdGVNYXBwZXIgPSBleHBvcnRzLmNyZWF0ZU1hcHBlciA9IGZ1bmN0aW9uIChpbnB1dCwgb3V0cHV0KSB7XG4gIHZhciBtYXBMZW5ndGggPSBpbnB1dC5sZW5ndGg7XG4gIHZhciBmaW5hbEluZGV4ID0gbWFwTGVuZ3RoIC0gMTtcblxuICByZXR1cm4gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgLy8gSWYgdmFsdWUgb3V0c2lkZSBtaW5pbXVtIGlucHV0IHJhbmdlLCBxdWlja2x5IHJldHVyblxuICAgIGlmICh2YWx1ZSA8PSBpbnB1dFswXSkge1xuICAgICAgcmV0dXJuIG91dHB1dFswXTtcbiAgICB9XG5cbiAgICAvLyBJZiB2YWx1ZSBvdXRzaWRlIG1heGltdW0gaW5wdXQgcmFuZ2UsIHF1aWNrbHkgcmV0dXJuXG4gICAgaWYgKHZhbHVlID49IGlucHV0W2ZpbmFsSW5kZXhdKSB7XG4gICAgICByZXR1cm4gb3V0cHV0W2ZpbmFsSW5kZXhdO1xuICAgIH1cblxuICAgIC8vIElmIHdpdGhpbiBvdmVyYWxsIGlucHV0IHJhbmdlLCBmaW5kIHNwZWNpZmljIHJhbmdlXG4gICAgZm9yICh2YXIgaSA9IDE7IGkgPCBtYXBMZW5ndGg7IGkrKykge1xuICAgICAgaWYgKHZhbHVlIDwgaW5wdXRbaV0gfHwgaSA9PT0gZmluYWxJbmRleCkge1xuICAgICAgICB2YXIgcHJvZ3Jlc3NJblJhbmdlID0gKDAsIF9jYWxjLmdldFByb2dyZXNzRnJvbVZhbHVlKSh2YWx1ZSwgaW5wdXRbaSAtIDFdLCBpbnB1dFtpXSk7XG4gICAgICAgIHJldHVybiAoMCwgX2NhbGMuZ2V0VmFsdWVGcm9tUHJvZ3Jlc3MpKHByb2dyZXNzSW5SYW5nZSwgb3V0cHV0W2kgLSAxXSwgb3V0cHV0W2ldKTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG59O1xuXG52YXIgY2lyY3VsYXJNb3Rpb24gPSBleHBvcnRzLmNpcmN1bGFyTW90aW9uID0gZnVuY3Rpb24gKHYsIGtleSwgX3JlZikge1xuICB2YXIgdmFsdWVzID0gX3JlZi52YWx1ZXM7XG5cbiAgdmFyIG9yaWdpblggPSB2YWx1ZXMub3JpZ2luWCA/IHZhbHVlcy5vcmlnaW5YLmN1cnJlbnQgOiAwO1xuICB2YXIgb3JpZ2luWSA9IHZhbHVlcy5vcmlnaW5ZID8gdmFsdWVzLm9yaWdpblkuY3VycmVudCA6IDA7XG5cbiAgcmV0dXJuICgwLCBfY2FsYy5wb2ludEZyb21BbmdsZUFuZERpc3RhbmNlKSh7XG4gICAgeDogb3JpZ2luWCxcbiAgICB5OiBvcmlnaW5ZXG4gIH0sIHZhbHVlcy5hbmdsZS5jdXJyZW50LCB2YWx1ZXMuZGlzdGFuY2UuY3VycmVudClba2V5XTtcbn07XG5cbi8qXG4gIENvbWJpbmUgdHJhbnNmb3JtZXJzIGludG8gb25lIGZ1bmN0aW9uIHRoYXQgY2FsbHMgZXZlcnlcbiAgdHJhbnNmb3JtZXIgaW4gdGhlIGFycmF5IGFuZCByZXR1cm5zIHRoZSByZXN1bHRcblxuICBAcGFyYW0gW2FycmF5XVxuICBAcmV0dXJuIFtmdW5jdGlvbl1cbiovXG52YXIgY2hhaW4gPSBleHBvcnRzLmNoYWluID0gZnVuY3Rpb24gKHRyYW5zZm9ybWVycykge1xuICB2YXIgbnVtVHJhbnNmb3JtZXJzID0gdHJhbnNmb3JtZXJzLmxlbmd0aDtcbiAgdmFyIGkgPSAwO1xuXG4gIC8qXG4gICAgQHBhcmFtIFtudW1iZXJdXG4gICAgQHBhcmFtIFtzdHJpbmddXG4gICAgQHBhcmFtIFtBY3Rpb25dXG4gICAgQHJldHVybiBbbnVtYmVyXVxuICAqL1xuICByZXR1cm4gZnVuY3Rpb24gKHYsIGtleSwgYSkge1xuICAgIGZvciAoaSA9IDA7IGkgPCBudW1UcmFuc2Zvcm1lcnM7IGkrKykge1xuICAgICAgdiA9IHRyYW5zZm9ybWVyc1tpXSh2LCBrZXksIGEpO1xuICAgIH1cblxuICAgIHJldHVybiB2O1xuICB9O1xufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbk55WXk5cGJtTXZkSEpoYm5ObWIzSnRaWEp6TG1weklsMHNJbTVoYldWeklqcGJYU3dpYldGd2NHbHVaM01pT2lJN096czdPMEZCUVVFN08wRkJSVThzU1VGQlRTeHpRMEZCWlN4VlFVRkRMRXRCUVVRc1JVRkJVU3hOUVVGU0xFVkJRVzFDTzBGQlF6ZERMRTFCUVUwc1dVRkJXU3hOUVVGTkxFMUJRWGhDTzBGQlEwRXNUVUZCVFN4aFFVRmhMRmxCUVZrc1EwRkJMMEk3TzBGQlJVRXNVMEZCVHl4VlFVRkRMRXRCUVVRc1JVRkJWenM3UVVGRmFFSXNVVUZCU1N4VFFVRlRMRTFCUVUwc1EwRkJUaXhEUVVGaUxFVkJRWFZDTzBGQlEzSkNMR0ZCUVU4c1QwRkJUeXhEUVVGUUxFTkJRVkE3UVVGRFJEczdPMEZCUjBRc1VVRkJTU3hUUVVGVExFMUJRVTBzVlVGQlRpeERRVUZpTEVWQlFXZERPMEZCUXpsQ0xHRkJRVThzVDBGQlR5eFZRVUZRTEVOQlFWQTdRVUZEUkRzN08wRkJSMFFzVTBGQlN5eEpRVUZKTEVsQlFVa3NRMEZCWWl4RlFVRm5RaXhKUVVGSkxGTkJRWEJDTEVWQlFTdENMRWRCUVM5Q0xFVkJRVzlETzBGQlEyeERMRlZCUVVrc1VVRkJVU3hOUVVGTkxFTkJRVTRzUTBGQlVpeEpRVUZ2UWl4TlFVRk5MRlZCUVRsQ0xFVkJRVEJETzBGQlEzaERMRmxCUVUwc2EwSkJRV3RDTEdkRFFVRnhRaXhMUVVGeVFpeEZRVUUwUWl4TlFVRk5MRWxCUVVrc1EwRkJWaXhEUVVFMVFpeEZRVUV3UXl4TlFVRk5MRU5CUVU0c1EwRkJNVU1zUTBGQmVFSTdRVUZEUVN4bFFVRlBMR2REUVVGeFFpeGxRVUZ5UWl4RlFVRnpReXhQUVVGUExFbEJRVWtzUTBGQldDeERRVUYwUXl4RlFVRnhSQ3hQUVVGUExFTkJRVkFzUTBGQmNrUXNRMEZCVUR0QlFVTkVPMEZCUTBZN1FVRkRSaXhIUVd4Q1JEdEJRVzFDUkN4RFFYWkNUVHM3UVVGNVFrRXNTVUZCVFN3d1EwRkJhVUlzVlVGQlF5eERRVUZFTEVWQlFVa3NSMEZCU2l4UlFVRjNRanRCUVVGQkxFMUJRV0lzVFVGQllTeFJRVUZpTEUxQlFXRTdPMEZCUTNCRUxFMUJRVTBzVlVGQlZ5eFBRVUZQTEU5QlFWSXNSMEZCYlVJc1QwRkJUeXhQUVVGUUxFTkJRV1VzVDBGQmJFTXNSMEZCTkVNc1EwRkJOVVE3UVVGRFFTeE5RVUZOTEZWQlFWY3NUMEZCVHl4UFFVRlNMRWRCUVcxQ0xFOUJRVThzVDBGQlVDeERRVUZsTEU5QlFXeERMRWRCUVRSRExFTkJRVFZFT3p0QlFVVkJMRk5CUVU4c2NVTkJRVEJDTzBGQlF5OUNMRTlCUVVjc1QwRkVORUk3UVVGRkwwSXNUMEZCUnp0QlFVWTBRaXhIUVVFeFFpeEZRVWRLTEU5QlFVOHNTMEZCVUN4RFFVRmhMRTlCU0ZRc1JVRkhhMElzVDBGQlR5eFJRVUZRTEVOQlFXZENMRTlCU0d4RExFVkJSekpETEVkQlNETkRMRU5CUVZBN1FVRkpSQ3hEUVZKTk96czdPenM3T3pzN1FVRnBRa0VzU1VGQlRTeDNRa0ZCVVN4VlFVRkRMRmxCUVVRc1JVRkJhMEk3UVVGRGNrTXNUVUZCVFN4clFrRkJhMElzWVVGQllTeE5RVUZ5UXp0QlFVTkJMRTFCUVVrc1NVRkJTU3hEUVVGU096czdPenM3T3p0QlFWRkJMRk5CUVU4c1ZVRkJReXhEUVVGRUxFVkJRVWtzUjBGQlNpeEZRVUZUTEVOQlFWUXNSVUZCWlR0QlFVTndRaXhUUVVGTExFbEJRVWtzUTBGQlZDeEZRVUZaTEVsQlFVa3NaVUZCYUVJc1JVRkJhVU1zUjBGQmFrTXNSVUZCYzBNN1FVRkRjRU1zVlVGQlNTeGhRVUZoTEVOQlFXSXNSVUZCWjBJc1EwRkJhRUlzUlVGQmJVSXNSMEZCYmtJc1JVRkJkMElzUTBGQmVFSXNRMEZCU2p0QlFVTkVPenRCUVVWRUxGZEJRVThzUTBGQlVEdEJRVU5FTEVkQlRrUTdRVUZQUkN4RFFXcENUU0lzSW1acGJHVWlPaUowY21GdWMyWnZjbTFsY25NdWFuTWlMQ0p6YjNWeVkyVlNiMjkwSWpvaUwxVnpaWEp6TDIxaGRIUndaWEp5ZVM5VGFYUmxjeTl3YjNCdGIzUnBiMjRpTENKemIzVnlZMlZ6UTI5dWRHVnVkQ0k2V3lKcGJYQnZjblFnZXlCblpYUlFjbTluY21WemMwWnliMjFXWVd4MVpTd2daMlYwVm1Gc2RXVkdjbTl0VUhKdlozSmxjM01zSUhCdmFXNTBSbkp2YlVGdVoyeGxRVzVrUkdsemRHRnVZMlVnZlNCbWNtOXRJQ2N1TGk5cGJtTXZZMkZzWXljN1hHNWNibVY0Y0c5eWRDQmpiMjV6ZENCamNtVmhkR1ZOWVhCd1pYSWdQU0FvYVc1d2RYUXNJRzkxZEhCMWRDa2dQVDRnZTF4dUlDQmpiMjV6ZENCdFlYQk1aVzVuZEdnZ1BTQnBibkIxZEM1c1pXNW5kR2c3WEc0Z0lHTnZibk4wSUdacGJtRnNTVzVrWlhnZ1BTQnRZWEJNWlc1bmRHZ2dMU0F4TzF4dVhHNGdJSEpsZEhWeWJpQW9kbUZzZFdVcElEMCtJSHRjYmlBZ0lDQXZMeUJKWmlCMllXeDFaU0J2ZFhSemFXUmxJRzFwYm1sdGRXMGdhVzV3ZFhRZ2NtRnVaMlVzSUhGMWFXTnJiSGtnY21WMGRYSnVYRzRnSUNBZ2FXWWdLSFpoYkhWbElEdzlJR2x1Y0hWMFd6QmRLU0I3WEc0Z0lDQWdJQ0J5WlhSMWNtNGdiM1YwY0hWMFd6QmRPMXh1SUNBZ0lIMWNibHh1SUNBZ0lDOHZJRWxtSUhaaGJIVmxJRzkxZEhOcFpHVWdiV0Y0YVcxMWJTQnBibkIxZENCeVlXNW5aU3dnY1hWcFkydHNlU0J5WlhSMWNtNWNiaUFnSUNCcFppQW9kbUZzZFdVZ1BqMGdhVzV3ZFhSYlptbHVZV3hKYm1SbGVGMHBJSHRjYmlBZ0lDQWdJSEpsZEhWeWJpQnZkWFJ3ZFhSYlptbHVZV3hKYm1SbGVGMDdYRzRnSUNBZ2ZWeHVYRzRnSUNBZ0x5OGdTV1lnZDJsMGFHbHVJRzkyWlhKaGJHd2dhVzV3ZFhRZ2NtRnVaMlVzSUdacGJtUWdjM0JsWTJsbWFXTWdjbUZ1WjJWY2JpQWdJQ0JtYjNJZ0tHeGxkQ0JwSUQwZ01Uc2dhU0E4SUcxaGNFeGxibWQwYURzZ2FTc3JLU0I3WEc0Z0lDQWdJQ0JwWmlBb2RtRnNkV1VnUENCcGJuQjFkRnRwWFNCOGZDQnBJRDA5UFNCbWFXNWhiRWx1WkdWNEtTQjdYRzRnSUNBZ0lDQWdJR052Ym5OMElIQnliMmR5WlhOelNXNVNZVzVuWlNBOUlHZGxkRkJ5YjJkeVpYTnpSbkp2YlZaaGJIVmxLSFpoYkhWbExDQnBibkIxZEZ0cElDMGdNVjBzSUdsdWNIVjBXMmxkS1R0Y2JpQWdJQ0FnSUNBZ2NtVjBkWEp1SUdkbGRGWmhiSFZsUm5KdmJWQnliMmR5WlhOektIQnliMmR5WlhOelNXNVNZVzVuWlN3Z2IzVjBjSFYwVzJrZ0xTQXhYU3dnYjNWMGNIVjBXMmxkS1R0Y2JpQWdJQ0FnSUgxY2JpQWdJQ0I5WEc0Z0lIMDdYRzU5TzF4dVhHNWxlSEJ2Y25RZ1kyOXVjM1FnWTJseVkzVnNZWEpOYjNScGIyNGdQU0FvZGl3Z2EyVjVMQ0I3SUhaaGJIVmxjeUI5S1NBOVBpQjdYRzRnSUdOdmJuTjBJRzl5YVdkcGJsZ2dQU0FvZG1Gc2RXVnpMbTl5YVdkcGJsZ3BJRDhnZG1Gc2RXVnpMbTl5YVdkcGJsZ3VZM1Z5Y21WdWRDQTZJREE3WEc0Z0lHTnZibk4wSUc5eWFXZHBibGtnUFNBb2RtRnNkV1Z6TG05eWFXZHBibGtwSUQ4Z2RtRnNkV1Z6TG05eWFXZHBibGt1WTNWeWNtVnVkQ0E2SURBN1hHNWNiaUFnY21WMGRYSnVJSEJ2YVc1MFJuSnZiVUZ1WjJ4bFFXNWtSR2x6ZEdGdVkyVW9lMXh1SUNBZ0lIZzZJRzl5YVdkcGJsZ3NYRzRnSUNBZ2VUb2diM0pwWjJsdVdTQmNiaUFnZlN3Z2RtRnNkV1Z6TG1GdVoyeGxMbU4xY25KbGJuUXNJSFpoYkhWbGN5NWthWE4wWVc1alpTNWpkWEp5Wlc1MEtWdHJaWGxkTzF4dWZUdGNibHh1THlwY2JpQWdRMjl0WW1sdVpTQjBjbUZ1YzJadmNtMWxjbk1nYVc1MGJ5QnZibVVnWm5WdVkzUnBiMjRnZEdoaGRDQmpZV3hzY3lCbGRtVnllVnh1SUNCMGNtRnVjMlp2Y20xbGNpQnBiaUIwYUdVZ1lYSnlZWGtnWVc1a0lISmxkSFZ5Ym5NZ2RHaGxJSEpsYzNWc2RGeHVYRzRnSUVCd1lYSmhiU0JiWVhKeVlYbGRYRzRnSUVCeVpYUjFjbTRnVzJaMWJtTjBhVzl1WFZ4dUtpOWNibVY0Y0c5eWRDQmpiMjV6ZENCamFHRnBiaUE5SUNoMGNtRnVjMlp2Y20xbGNuTXBJRDArSUh0Y2JpQWdZMjl1YzNRZ2JuVnRWSEpoYm5ObWIzSnRaWEp6SUQwZ2RISmhibk5tYjNKdFpYSnpMbXhsYm1kMGFEdGNiaUFnYkdWMElHa2dQU0F3TzF4dVhHNGdJQzhxWEc0Z0lDQWdRSEJoY21GdElGdHVkVzFpWlhKZFhHNGdJQ0FnUUhCaGNtRnRJRnR6ZEhKcGJtZGRYRzRnSUNBZ1FIQmhjbUZ0SUZ0QlkzUnBiMjVkWEc0Z0lDQWdRSEpsZEhWeWJpQmJiblZ0WW1WeVhWeHVJQ0FxTDF4dUlDQnlaWFIxY200Z0tIWXNJR3RsZVN3Z1lTa2dQVDRnZTF4dUlDQWdJR1p2Y2lBb2FTQTlJREE3SUdrZ1BDQnVkVzFVY21GdWMyWnZjbTFsY25NN0lHa3JLeWtnZTF4dUlDQWdJQ0FnZGlBOUlIUnlZVzV6Wm05eWJXVnljMXRwWFNoMkxDQnJaWGtzSUdFcE8xeHVJQ0FnSUgxY2JseHVJQ0FnSUhKbGRIVnliaUIyTzF4dUlDQjlPMXh1ZlRzaVhYMD1cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2luYy90cmFuc2Zvcm1lcnMuanNcbiAqKiBtb2R1bGUgaWQgPSAzM1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX2NvbG9yID0gcmVxdWlyZSgnLi4vdmFsdWUtdHlwZXMvY29sb3InKTtcblxudmFyIF9jb2xvcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jb2xvcik7XG5cbnZhciBfY29tcGxleCA9IHJlcXVpcmUoJy4uL3ZhbHVlLXR5cGVzL2NvbXBsZXgnKTtcblxudmFyIF9jb21wbGV4MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NvbXBsZXgpO1xuXG52YXIgX3VuaXQgPSByZXF1aXJlKCcuLi92YWx1ZS10eXBlcy91bml0Jyk7XG5cbnZhciBfdW5pdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF91bml0KTtcblxudmFyIF91dGlscyA9IHJlcXVpcmUoJy4uL2luYy91dGlscycpO1xuXG52YXIgX251bWVyaWNhbFZhbHVlcyA9IHJlcXVpcmUoJy4uL2luYy9udW1lcmljYWwtdmFsdWVzJyk7XG5cbnZhciBfbnVtZXJpY2FsVmFsdWVzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX251bWVyaWNhbFZhbHVlcyk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbnZhciBOVU1fTlVNRVJJQ0FMX1ZBTFVFUyA9IF9udW1lcmljYWxWYWx1ZXMyLmRlZmF1bHQubGVuZ3RoO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBOVU1fTlVNRVJJQ0FMX1ZBTFVFUzsgaSsrKSB7XG4gICAgdmFyIHZhbHVlUHJvcCA9IHZhbHVlW19udW1lcmljYWxWYWx1ZXMyLmRlZmF1bHRbaV1dO1xuICAgIGlmICgoMCwgX3V0aWxzLmlzU3RyaW5nKSh2YWx1ZVByb3ApKSB7XG4gICAgICBpZiAoX2NvbG9yMi5kZWZhdWx0LnRlc3QodmFsdWVQcm9wKSkge1xuICAgICAgICByZXR1cm4gX2NvbG9yMi5kZWZhdWx0O1xuICAgICAgfSBlbHNlIGlmIChfY29tcGxleDIuZGVmYXVsdC50ZXN0KHZhbHVlUHJvcCkpIHtcbiAgICAgICAgcmV0dXJuIF9jb21wbGV4Mi5kZWZhdWx0O1xuICAgICAgfSBlbHNlIGlmIChfdW5pdDIuZGVmYXVsdC50ZXN0KHZhbHVlUHJvcCkpIHtcbiAgICAgICAgcmV0dXJuIF91bml0Mi5kZWZhdWx0O1xuICAgICAgfVxuICAgIH1cbiAgfVxufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbk55WXk5MllXeDFaUzEwZVhCbGN5OWtaWFJsWTNRdWFuTWlYU3dpYm1GdFpYTWlPbHRkTENKdFlYQndhVzVuY3lJNklqczdPenRCUVVGQk96czdPMEZCUTBFN096czdRVUZEUVRzN096dEJRVU5CT3p0QlFVTkJPenM3T3pzN1FVRkZRU3hKUVVGTkxIVkNRVUYxUWl3d1FrRkJhVUlzVFVGQk9VTTdPMnRDUVVWbExGVkJRVU1zUzBGQlJDeEZRVUZYTzBGQlEzaENMRTlCUVVzc1NVRkJTU3hKUVVGSkxFTkJRV0lzUlVGQlowSXNTVUZCU1N4dlFrRkJjRUlzUlVGQk1FTXNSMEZCTVVNc1JVRkJLME03UVVGRE4wTXNVVUZCVFN4WlFVRlpMRTFCUVUwc01FSkJRV2xDTEVOQlFXcENMRU5CUVU0c1EwRkJiRUk3UVVGRFFTeFJRVUZKTEhGQ1FVRlRMRk5CUVZRc1EwRkJTaXhGUVVGNVFqdEJRVU4yUWl4VlFVRkpMR2RDUVVGVkxFbEJRVllzUTBGQlpTeFRRVUZtTEVOQlFVb3NSVUZCSzBJN1FVRkROMEk3UVVGRFJDeFBRVVpFTEUxQlJVOHNTVUZCU1N4clFrRkJXU3hKUVVGYUxFTkJRV2xDTEZOQlFXcENMRU5CUVVvc1JVRkJhVU03UVVGRGRFTTdRVUZEUkN4UFFVWk5MRTFCUlVFc1NVRkJTU3hsUVVGVExFbEJRVlFzUTBGQll5eFRRVUZrTEVOQlFVb3NSVUZCT0VJN1FVRkRia003UVVGRFJEdEJRVU5HTzBGQlEwWTdRVUZEUml4RElpd2labWxzWlNJNkltUmxkR1ZqZEM1cWN5SXNJbk52ZFhKalpWSnZiM1FpT2lJdlZYTmxjbk12YldGMGRIQmxjbko1TDFOcGRHVnpMM0J2Y0cxdmRHbHZiaUlzSW5OdmRYSmpaWE5EYjI1MFpXNTBJanBiSW1sdGNHOXlkQ0JqYjJ4dmNsUjVjR1VnWm5KdmJTQW5MaTR2ZG1Gc2RXVXRkSGx3WlhNdlkyOXNiM0luTzF4dWFXMXdiM0owSUdOdmJYQnNaWGhVZVhCbElHWnliMjBnSnk0dUwzWmhiSFZsTFhSNWNHVnpMMk52YlhCc1pYZ25PMXh1YVcxd2IzSjBJSFZ1YVhSVWVYQmxJR1p5YjIwZ0p5NHVMM1poYkhWbExYUjVjR1Z6TDNWdWFYUW5PMXh1YVcxd2IzSjBJSHNnYVhOVGRISnBibWNnZlNCbWNtOXRJQ2N1TGk5cGJtTXZkWFJwYkhNbk8xeHVhVzF3YjNKMElFNVZUVVZTU1VOQlRGOVdRVXhWUlZNZ1puSnZiU0FuTGk0dmFXNWpMMjUxYldWeWFXTmhiQzEyWVd4MVpYTW5PMXh1WEc1amIyNXpkQ0JPVlUxZlRsVk5SVkpKUTBGTVgxWkJURlZGVXlBOUlFNVZUVVZTU1VOQlRGOVdRVXhWUlZNdWJHVnVaM1JvTzF4dVhHNWxlSEJ2Y25RZ1pHVm1ZWFZzZENBb2RtRnNkV1VwSUQwK0lIdGNiaUFnWm05eUlDaHNaWFFnYVNBOUlEQTdJR2tnUENCT1ZVMWZUbFZOUlZKSlEwRk1YMVpCVEZWRlV6c2dhU3NyS1NCN1hHNGdJQ0FnWTI5dWMzUWdkbUZzZFdWUWNtOXdJRDBnZG1Gc2RXVmJUbFZOUlZKSlEwRk1YMVpCVEZWRlUxdHBYVjA3WEc0Z0lDQWdhV1lnS0dselUzUnlhVzVuS0haaGJIVmxVSEp2Y0NrcElIdGNiaUFnSUNBZ0lHbG1JQ2hqYjJ4dmNsUjVjR1V1ZEdWemRDaDJZV3gxWlZCeWIzQXBLU0I3WEc0Z0lDQWdJQ0FnSUhKbGRIVnliaUJqYjJ4dmNsUjVjR1U3WEc0Z0lDQWdJQ0I5SUdWc2MyVWdhV1lnS0dOdmJYQnNaWGhVZVhCbExuUmxjM1FvZG1Gc2RXVlFjbTl3S1NrZ2UxeHVJQ0FnSUNBZ0lDQnlaWFIxY200Z1kyOXRjR3hsZUZSNWNHVTdYRzRnSUNBZ0lDQjlJR1ZzYzJVZ2FXWWdLSFZ1YVhSVWVYQmxMblJsYzNRb2RtRnNkV1ZRY205d0tTa2dlMXh1SUNBZ0lDQWdJQ0J5WlhSMWNtNGdkVzVwZEZSNWNHVTdYRzRnSUNBZ0lDQjlYRzRnSUNBZ2ZWeHVJQ0I5WEc1OU95SmRmUT09XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy92YWx1ZS10eXBlcy9kZXRlY3QuanNcbiAqKiBtb2R1bGUgaWQgPSAzNFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0cy5kZWZhdWx0ID0gWydjdXJyZW50JywgJ2Zyb20nLCAndG8nLCAndmVsb2NpdHknXTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbk55WXk5cGJtTXZiblZ0WlhKcFkyRnNMWFpoYkhWbGN5NXFjeUpkTENKdVlXMWxjeUk2VzEwc0ltMWhjSEJwYm1keklqb2lPenM3YTBKQlFXVXNRMEZCUXl4VFFVRkVMRVZCUVZrc1RVRkJXaXhGUVVGdlFpeEpRVUZ3UWl4RlFVRXdRaXhWUVVFeFFpeERJaXdpWm1sc1pTSTZJbTUxYldWeWFXTmhiQzEyWVd4MVpYTXVhbk1pTENKemIzVnlZMlZTYjI5MElqb2lMMVZ6WlhKekwyMWhkSFJ3WlhKeWVTOVRhWFJsY3k5d2IzQnRiM1JwYjI0aUxDSnpiM1Z5WTJWelEyOXVkR1Z1ZENJNld5SmxlSEJ2Y25RZ1pHVm1ZWFZzZENCYkoyTjFjbkpsYm5RbkxDQW5abkp2YlNjc0lDZDBieWNzSUNkMlpXeHZZMmwwZVNkZE95SmRmUT09XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9pbmMvbnVtZXJpY2FsLXZhbHVlcy5qc1xuICoqIG1vZHVsZSBpZCA9IDM1XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfb2JqZWN0QWRhcHRlciA9IHJlcXVpcmUoJy4uL2FkYXB0ZXIvb2JqZWN0LWFkYXB0ZXInKTtcblxudmFyIF9vYmplY3RBZGFwdGVyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX29iamVjdEFkYXB0ZXIpO1xuXG52YXIgX2Nzc0FkYXB0ZXIgPSByZXF1aXJlKCcuLi9hZGFwdGVyL2Nzcy1hZGFwdGVyJyk7XG5cbnZhciBfY3NzQWRhcHRlcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jc3NBZGFwdGVyKTtcblxudmFyIF9zdmdBZGFwdGVyID0gcmVxdWlyZSgnLi4vYWRhcHRlci9zdmctYWRhcHRlcicpO1xuXG52YXIgX3N2Z0FkYXB0ZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfc3ZnQWRhcHRlcik7XG5cbnZhciBfc3ZnUGF0aEFkYXB0ZXIgPSByZXF1aXJlKCcuLi9hZGFwdGVyL3N2Zy1wYXRoLWFkYXB0ZXInKTtcblxudmFyIF9zdmdQYXRoQWRhcHRlcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9zdmdQYXRoQWRhcHRlcik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uIChlbGVtZW50KSB7XG4gIHZhciBkZXRlY3RlZEFkYXB0ZXIgPSBfb2JqZWN0QWRhcHRlcjIuZGVmYXVsdDtcblxuICAvLyBJZiBIVE1MRWxlbWVudCBsb2FkIENTU1xuICBpZiAoZWxlbWVudCBpbnN0YW5jZW9mIEhUTUxFbGVtZW50IHx8IGVsZW1lbnQudGFnTmFtZSA9PT0gJ3N2ZycpIHtcbiAgICBkZXRlY3RlZEFkYXB0ZXIgPSBfY3NzQWRhcHRlcjIuZGVmYXVsdDtcblxuICAgIC8vIE9yIFNWR1xuICB9IGVsc2UgaWYgKGVsZW1lbnQgaW5zdGFuY2VvZiBTVkdFbGVtZW50KSB7XG4gICAgaWYgKGVsZW1lbnQudGFnTmFtZSA9PT0gJ3BhdGgnKSB7XG4gICAgICBkZXRlY3RlZEFkYXB0ZXIgPSBfc3ZnUGF0aEFkYXB0ZXIyLmRlZmF1bHQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRldGVjdGVkQWRhcHRlciA9IF9zdmdBZGFwdGVyMi5kZWZhdWx0O1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBkZXRlY3RlZEFkYXB0ZXI7XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluTnlZeTlwYm1NdlpHVjBaV04wTFdGa1lYQjBaWEl1YW5NaVhTd2libUZ0WlhNaU9sdGRMQ0p0WVhCd2FXNW5jeUk2SWpzN096dEJRVUZCT3pzN08wRkJRMEU3T3pzN1FVRkRRVHM3T3p0QlFVTkJPenM3T3pzN2EwSkJSV1VzVlVGQlF5eFBRVUZFTEVWQlFXRTdRVUZETVVJc1RVRkJTU3g1UTBGQlNqczdPMEZCUjBFc1RVRkJTU3h0UWtGQmJVSXNWMEZCYmtJc1NVRkJhME1zVVVGQlVTeFBRVUZTTEV0QlFXOUNMRXRCUVRGRUxFVkJRV2xGTzBGQlF5OUVPenM3UVVGSFJDeEhRVXBFTEUxQlNVOHNTVUZCU1N4dFFrRkJiVUlzVlVGQmRrSXNSVUZCYlVNN1FVRkRlRU1zVVVGQlNTeFJRVUZSTEU5QlFWSXNTMEZCYjBJc1RVRkJlRUlzUlVGQlowTTdRVUZET1VJN1FVRkRSQ3hMUVVaRUxFMUJSVTg3UVVGRFREdEJRVU5FTzBGQlEwWTdPMEZCUlVRc1UwRkJUeXhsUVVGUU8wRkJRMFFzUXlJc0ltWnBiR1VpT2lKa1pYUmxZM1F0WVdSaGNIUmxjaTVxY3lJc0luTnZkWEpqWlZKdmIzUWlPaUl2VlhObGNuTXZiV0YwZEhCbGNuSjVMMU5wZEdWekwzQnZjRzF2ZEdsdmJpSXNJbk52ZFhKalpYTkRiMjUwWlc1MElqcGJJbWx0Y0c5eWRDQnZZbXBsWTNSQlpHRndkR1Z5SUdaeWIyMGdKeTR1TDJGa1lYQjBaWEl2YjJKcVpXTjBMV0ZrWVhCMFpYSW5PMXh1YVcxd2IzSjBJR056YzBGa1lYQjBaWElnWm5KdmJTQW5MaTR2WVdSaGNIUmxjaTlqYzNNdFlXUmhjSFJsY2ljN1hHNXBiWEJ2Y25RZ2MzWm5RV1JoY0hSbGNpQm1jbTl0SUNjdUxpOWhaR0Z3ZEdWeUwzTjJaeTFoWkdGd2RHVnlKenRjYm1sdGNHOXlkQ0J6ZG1kUVlYUm9RV1JoY0hSbGNpQm1jbTl0SUNjdUxpOWhaR0Z3ZEdWeUwzTjJaeTF3WVhSb0xXRmtZWEIwWlhJbk8xeHVYRzVsZUhCdmNuUWdaR1ZtWVhWc2RDQW9aV3hsYldWdWRDa2dQVDRnZTF4dUlDQnNaWFFnWkdWMFpXTjBaV1JCWkdGd2RHVnlJRDBnYjJKcVpXTjBRV1JoY0hSbGNqdGNibHh1SUNBdkx5QkpaaUJJVkUxTVJXeGxiV1Z1ZENCc2IyRmtJRU5UVTF4dUlDQnBaaUFvWld4bGJXVnVkQ0JwYm5OMFlXNWpaVzltSUVoVVRVeEZiR1Z0Wlc1MElIeDhJR1ZzWlcxbGJuUXVkR0ZuVG1GdFpTQTlQVDBnSjNOMlp5Y3BJSHRjYmlBZ0lDQmtaWFJsWTNSbFpFRmtZWEIwWlhJZ1BTQmpjM05CWkdGd2RHVnlPMXh1WEc0Z0lDOHZJRTl5SUZOV1IxeHVJQ0I5SUdWc2MyVWdhV1lnS0dWc1pXMWxiblFnYVc1emRHRnVZMlZ2WmlCVFZrZEZiR1Z0Wlc1MEtTQjdYRzRnSUNBZ2FXWWdLR1ZzWlcxbGJuUXVkR0ZuVG1GdFpTQTlQVDBnSjNCaGRHZ25LU0I3WEc0Z0lDQWdJQ0JrWlhSbFkzUmxaRUZrWVhCMFpYSWdQU0J6ZG1kUVlYUm9RV1JoY0hSbGNqdGNiaUFnSUNCOUlHVnNjMlVnZTF4dUlDQWdJQ0FnWkdWMFpXTjBaV1JCWkdGd2RHVnlJRDBnYzNablFXUmhjSFJsY2p0Y2JpQWdJQ0I5WEc0Z0lIMWNibHh1SUNCeVpYUjFjbTRnWkdWMFpXTjBaV1JCWkdGd2RHVnlPMXh1ZlR0Y2JpSmRmUT09XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9pbmMvZGV0ZWN0LWFkYXB0ZXIuanNcbiAqKiBtb2R1bGUgaWQgPSAzNlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX2NhbGMgPSByZXF1aXJlKCcuLi8uLi9pbmMvY2FsYycpO1xuXG52YXIgQkxFTkRfQUNDVVJBQ1kgPSA2MDtcblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gKG91dEFjdGlvbiwgaW5BY3Rpb24sIGZsb3dWYWx1ZSwga2V5KSB7XG4gIHZhciBvdXRWYWx1ZSA9IG91dEFjdGlvbi52YWx1ZXNba2V5XTtcblxuICBpZiAob3V0QWN0aW9uLmVsYXBzZWQgPT09IHVuZGVmaW5lZCB8fCAhb3V0VmFsdWUpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICB2YXIgaW5WYWx1ZSA9IGluQWN0aW9uLnZhbHVlc1trZXldO1xuICB2YXIgb3V0VG90YWxEdXJhdGlvbiA9IG91dFZhbHVlLmRlbGF5ICsgb3V0VmFsdWUuZHVyYXRpb247XG4gIHZhciB0aW1lVW50aWxPdXRFbmQgPSBNYXRoLm1pbihvdXRUb3RhbER1cmF0aW9uIC0gb3V0QWN0aW9uLmVsYXBzZWQsIGluVmFsdWUuZGVsYXkgKyBpblZhbHVlLmR1cmF0aW9uKTtcbiAgdmFyIGluUG9zaXRpb25BdE91dEVuZCA9ICgwLCBfY2FsYy5lYXNlKSgoMCwgX2NhbGMucmVzdHJpY3QpKCgwLCBfY2FsYy5nZXRQcm9ncmVzc0Zyb21WYWx1ZSkodGltZVVudGlsT3V0RW5kLCAwLCBpblZhbHVlLmRlbGF5ICsgaW5WYWx1ZS5kdXJhdGlvbiksIDAsIDEpLCBpblZhbHVlLmZyb20sIGluVmFsdWUudG8sIGluVmFsdWUuZWFzZSk7XG4gIHZhciBpbkJpZ2dlclRoYW5PdXRBdFN0YXJ0ID0gaW5WYWx1ZS5mcm9tID4gb3V0VmFsdWUuY3VycmVudDtcbiAgdmFyIGluQmlnZ2VyVGhhbk91dEF0RW5kID0gaW5Qb3NpdGlvbkF0T3V0RW5kID4gb3V0VmFsdWUudG87XG4gIHZhciB0d2VlbnNJbnRlcnNlY3QgPSBpbkJpZ2dlclRoYW5PdXRBdFN0YXJ0ICE9PSBpbkJpZ2dlclRoYW5PdXRBdEVuZDtcblxuICB2YXIgYmxlbmRDdXJ2ZSA9IFtbMCwgb3V0VmFsdWUuY3VycmVudF0sIFt0aW1lVW50aWxPdXRFbmQsIGluUG9zaXRpb25BdE91dEVuZF1dO1xuXG4gIC8vIElmIHR3ZWVucyBpbnRlcnNlY3QsIHJlc29sdmUgdHdlZW5zIGF0IGEgcmVzb2x1dGlvbiB0byBmaW5kIGV4YWN0bHkgd2hlcmVcbiAgaWYgKHR3ZWVuc0ludGVyc2VjdCkge1xuICAgIHZhciB0aW1lU3RlcFRvVGVzdCA9IHRpbWVVbnRpbE91dEVuZCAvIEJMRU5EX0FDQ1VSQUNZO1xuICAgIHZhciBmb3VuZFAxID0gZmFsc2U7XG4gICAgdmFyIGZvdW5kUDIgPSBmYWxzZTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDw9IEJMRU5EX0FDQ1VSQUNZOyBpKyspIHtcbiAgICAgIHZhciB0aW1lU3RlcCA9IGkgKiB0aW1lU3RlcFRvVGVzdDtcbiAgICAgIHZhciBvdXRBdFRpbWUgPSAoMCwgX2NhbGMuZWFzZSkoKDAsIF9jYWxjLmdldFByb2dyZXNzRnJvbVZhbHVlKShvdXRBY3Rpb24uZWxhcHNlZCArIHRpbWVTdGVwLCBvdXRWYWx1ZS5kZWxheSwgb3V0VmFsdWUuZHVyYXRpb24pLCBvdXRWYWx1ZS5mcm9tLCBvdXRWYWx1ZS50bywgb3V0VmFsdWUuZWFzZSk7XG4gICAgICB2YXIgaW5BdFRpbWUgPSAoMCwgX2NhbGMuZWFzZSkoKDAsIF9jYWxjLmdldFByb2dyZXNzRnJvbVZhbHVlKShpbkFjdGlvbi5lbGFwc2VkICsgdGltZVN0ZXAsIGluVmFsdWUuZGVsYXksIGluVmFsdWUuZHVyYXRpb24pLCBpblZhbHVlLmZyb20sIGluVmFsdWUudG8sIGluVmFsdWUuZWFzZSk7XG5cbiAgICAgIGlmICghZm91bmRQMSAmJiAoaW5CaWdnZXJUaGFuT3V0QXRTdGFydCAmJiBpbkF0VGltZSA8IG91dEF0VGltZSB8fCAhaW5CaWdnZXJUaGFuT3V0QXRTdGFydCAmJiBpbkF0VGltZSA+IG91dEF0VGltZSkpIHtcbiAgICAgICAgYmxlbmRDdXJ2ZS5zcGxpY2UoMSwgMCwgW3RpbWVTdGVwLCBpbkF0VGltZV0pO1xuICAgICAgICBmb3VuZFAxID0gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKGZvdW5kUDEgJiYgKGluQmlnZ2VyVGhhbk91dEF0U3RhcnQgJiYgaW5BdFRpbWUgPCBvdXRWYWx1ZS5jdXJyZW50IHx8ICFpbkJpZ2dlclRoYW5PdXRBdFN0YXJ0ICYmIGluQXRUaW1lID4gb3V0VmFsdWUuY3VycmVudCkpIHtcbiAgICAgICAgYmxlbmRDdXJ2ZVsyXSA9IFt0aW1lU3RlcCwgaW5BdFRpbWVdO1xuICAgICAgICBmb3VuZFAyID0gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKGZvdW5kUDIpIHtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgaWYgKGJsZW5kQ3VydmUubGVuZ3RoID09PSAyKSB7XG4gICAgLy8gUGFzcyBiZXR3ZWVuIHR3ZWVucyB1c2luZyBpbmNvbWluZyBlYXNpbmcgaWYganVzdCB0d28gcG9pbnRzXG4gICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciBibGVuZFByb2dyZXNzID0gKDAsIF9jYWxjLnJlc3RyaWN0KSgoMCwgX2NhbGMuZ2V0UHJvZ3Jlc3NGcm9tVmFsdWUpKGluQWN0aW9uLmVsYXBzZWQsIGJsZW5kQ3VydmVbMF1bMF0sIGJsZW5kQ3VydmVbMV1bMF0pLCAwLCAxKTtcblxuICAgICAgaWYgKGJsZW5kUHJvZ3Jlc3MgPT09IDEpIHtcbiAgICAgICAgZmxvd1ZhbHVlLmJsZW5kQ3VydmUgPSB1bmRlZmluZWQ7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiAoMCwgX2NhbGMuZWFzZSkoYmxlbmRQcm9ncmVzcywgb3V0VmFsdWUuY3VycmVudCwgaW5WYWx1ZS5jdXJyZW50LCBpblZhbHVlLmVhc2UpO1xuICAgIH07XG4gIH0gZWxzZSB7XG4gICAgLy8gUGFzcyBiZXR3ZWVuIHR3ZWVucyB1c2luZyBiZXppZXIgaW50ZXJwb2xhdGlvblxuICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgYmxlbmRQcm9ncmVzcyA9ICgwLCBfY2FsYy5yZXN0cmljdCkoKDAsIF9jYWxjLmdldFByb2dyZXNzRnJvbVZhbHVlKShpbkFjdGlvbi5lbGFwc2VkLCBibGVuZEN1cnZlWzBdWzBdLCBibGVuZEN1cnZlWzJdWzBdKSwgMCwgMSk7XG4gICAgICB2YXIgYVAgPSAoMCwgX2NhbGMuZ2V0VmFsdWVGcm9tUHJvZ3Jlc3MpKGJsZW5kUHJvZ3Jlc3MsIGJsZW5kQ3VydmVbMF1bMV0sIGJsZW5kQ3VydmVbMV1bMV0pO1xuICAgICAgdmFyIGJQID0gKDAsIF9jYWxjLmdldFZhbHVlRnJvbVByb2dyZXNzKShibGVuZFByb2dyZXNzLCBibGVuZEN1cnZlWzFdWzFdLCBibGVuZEN1cnZlWzJdWzFdKTtcblxuICAgICAgaWYgKGJsZW5kUHJvZ3Jlc3MgPT09IDEpIHtcbiAgICAgICAgZmxvd1ZhbHVlLmJsZW5kQ3VydmUgPSB1bmRlZmluZWQ7XG4gICAgICAgIHJldHVybiBpblZhbHVlLmN1cnJlbnQ7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiAoMCwgX2NhbGMuZ2V0VmFsdWVGcm9tUHJvZ3Jlc3MpKGJsZW5kUHJvZ3Jlc3MsIGFQLCBiUCk7XG4gICAgfTtcbiAgfVxufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbk55WXk5aFkzUnBiMjV6TDJac2IzY3ZaMlZ1WlhKaGRHVXRZbXhsYm1RdFkzVnlkbVV1YW5NaVhTd2libUZ0WlhNaU9sdGRMQ0p0WVhCd2FXNW5jeUk2SWpzN096dEJRVUZCT3p0QlFVVkJMRWxCUVUwc2FVSkJRV2xDTEVWQlFYWkNPenRyUWtGRlpTeFZRVUZETEZOQlFVUXNSVUZCV1N4UlFVRmFMRVZCUVhOQ0xGTkJRWFJDTEVWQlFXbERMRWRCUVdwRExFVkJRWGxETzBGQlEzUkVMRTFCUVUwc1YwRkJWeXhWUVVGVkxFMUJRVllzUTBGQmFVSXNSMEZCYWtJc1EwRkJha0k3TzBGQlJVRXNUVUZCU1N4VlFVRlZMRTlCUVZZc1MwRkJjMElzVTBGQmRFSXNTVUZCYlVNc1EwRkJReXhSUVVGNFF5eEZRVUZyUkR0QlFVTm9SRHRCUVVORU96dEJRVVZFTEUxQlFVMHNWVUZCVlN4VFFVRlRMRTFCUVZRc1EwRkJaMElzUjBGQmFFSXNRMEZCYUVJN1FVRkRRU3hOUVVGTkxHMUNRVUZ0UWl4VFFVRlRMRXRCUVZRc1IwRkJhVUlzVTBGQlV5eFJRVUZ1UkR0QlFVTkJMRTFCUVUwc2EwSkJRV3RDTEV0QlFVc3NSMEZCVEN4RFFVRlRMRzFDUVVGdFFpeFZRVUZWTEU5QlFYUkRMRVZCUVN0RExGRkJRVkVzUzBGQlVpeEhRVUZuUWl4UlFVRlJMRkZCUVhaRkxFTkJRWGhDTzBGQlEwRXNUVUZCVFN4eFFrRkJjVUlzWjBKQlFVc3NiMEpCUVZNc1owTkJRWEZDTEdWQlFYSkNMRVZCUVhORExFTkJRWFJETEVWQlFYbERMRkZCUVZFc1MwRkJVaXhIUVVGblFpeFJRVUZSTEZGQlFXcEZMRU5CUVZRc1JVRkJjVVlzUTBGQmNrWXNSVUZCZDBZc1EwRkJlRVlzUTBGQlRDeEZRVUZwUnl4UlFVRlJMRWxCUVhwSExFVkJRU3RITEZGQlFWRXNSVUZCZGtnc1JVRkJNa2dzVVVGQlVTeEpRVUZ1U1N4RFFVRXpRanRCUVVOQkxFMUJRVTBzZVVKQlFYbENMRkZCUVZFc1NVRkJVaXhIUVVGbExGTkJRVk1zVDBGQmRrUTdRVUZEUVN4TlFVRk5MSFZDUVVGMVFpeHhRa0ZCY1VJc1UwRkJVeXhGUVVFelJEdEJRVU5CTEUxQlFVMHNhMEpCUVd0Q0xESkNRVUV5UWl4dlFrRkJia1E3TzBGQlJVRXNUVUZCVFN4aFFVRmhMRU5CUVVNc1EwRkJReXhEUVVGRUxFVkJRVWtzVTBGQlV5eFBRVUZpTEVOQlFVUXNSVUZCZDBJc1EwRkJReXhsUVVGRUxFVkJRV3RDTEd0Q1FVRnNRaXhEUVVGNFFpeERRVUZ1UWpzN08wRkJSMEVzVFVGQlNTeGxRVUZLTEVWQlFYRkNPMEZCUTI1Q0xGRkJRVTBzYVVKQlFXbENMR3RDUVVGclFpeGpRVUY2UXp0QlFVTkJMRkZCUVVrc1ZVRkJWU3hMUVVGa08wRkJRMEVzVVVGQlNTeFZRVUZWTEV0QlFXUTdPMEZCUlVFc1UwRkJTeXhKUVVGSkxFbEJRVWtzUTBGQllpeEZRVUZuUWl4TFFVRkxMR05CUVhKQ0xFVkJRWEZETEVkQlFYSkRMRVZCUVRCRE8wRkJRM2hETEZWQlFVMHNWMEZCVnl4SlFVRkpMR05CUVhKQ08wRkJRMEVzVlVGQlRTeFpRVUZaTEdkQ1FVRkxMR2REUVVGeFFpeFZRVUZWTEU5QlFWWXNSMEZCYjBJc1VVRkJla01zUlVGQmJVUXNVMEZCVXl4TFFVRTFSQ3hGUVVGdFJTeFRRVUZUTEZGQlFUVkZMRU5CUVV3c1JVRkJORVlzVTBGQlV5eEpRVUZ5Unl4RlFVRXlSeXhUUVVGVExFVkJRWEJJTEVWQlFYZElMRk5CUVZNc1NVRkJha2tzUTBGQmJFSTdRVUZEUVN4VlFVRk5MRmRCUVZjc1owSkJRVXNzWjBOQlFYRkNMRk5CUVZNc1QwRkJWQ3hIUVVGdFFpeFJRVUY0UXl4RlFVRnJSQ3hSUVVGUkxFdEJRVEZFTEVWQlFXbEZMRkZCUVZFc1VVRkJla1VzUTBGQlRDeEZRVUY1Uml4UlFVRlJMRWxCUVdwSExFVkJRWFZITEZGQlFWRXNSVUZCTDBjc1JVRkJiVWdzVVVGQlVTeEpRVUV6U0N4RFFVRnFRanM3UVVGRlFTeFZRVUZKTEVOQlFVTXNUMEZCUkN4TFFVRmpMREJDUVVFd1FpeFhRVUZYTEZOQlFYUkRMRWxCUVhGRUxFTkJRVU1zYzBKQlFVUXNTVUZCTWtJc1YwRkJWeXhUUVVGNFJ5eERRVUZLTEVWQlFYbElPMEZCUTNaSUxHMUNRVUZYTEUxQlFWZ3NRMEZCYTBJc1EwRkJiRUlzUlVGQmNVSXNRMEZCY2tJc1JVRkJkMElzUTBGQlF5eFJRVUZFTEVWQlFWY3NVVUZCV0N4RFFVRjRRanRCUVVOQkxHdENRVUZWTEVsQlFWWTdRVUZEUkRzN1FVRkZSQ3hWUVVGSkxGbEJRV0VzTUVKQlFUQkNMRmRCUVZjc1UwRkJVeXhQUVVFdlF5eEpRVUUwUkN4RFFVRkRMSE5DUVVGRUxFbEJRVEpDTEZkQlFWY3NVMEZCVXl4UFFVRjJTQ3hEUVVGS0xFVkJRWE5KTzBGQlEzQkpMRzFDUVVGWExFTkJRVmdzU1VGQlowSXNRMEZCUXl4UlFVRkVMRVZCUVZjc1VVRkJXQ3hEUVVGb1FqdEJRVU5CTEd0Q1FVRlZMRWxCUVZZN1FVRkRSRHM3UVVGRlJDeFZRVUZKTEU5QlFVb3NSVUZCWVR0QlFVTllPMEZCUTBRN1FVRkRSanRCUVVOR096dEJRVVZFTEUxQlFVa3NWMEZCVnl4TlFVRllMRXRCUVhOQ0xFTkJRVEZDTEVWQlFUWkNPenRCUVVVelFpeFhRVUZQTEZsQlFVMDdRVUZEV0N4VlFVRk5MR2RDUVVGblFpeHZRa0ZCVXl4blEwRkJjVUlzVTBGQlV5eFBRVUU1UWl4RlFVRjFReXhYUVVGWExFTkJRVmdzUlVGQll5eERRVUZrTEVOQlFYWkRMRVZCUVhsRUxGZEJRVmNzUTBGQldDeEZRVUZqTEVOQlFXUXNRMEZCZWtRc1EwRkJWQ3hGUVVGeFJpeERRVUZ5Uml4RlFVRjNSaXhEUVVGNFJpeERRVUYwUWpzN1FVRkZRU3hWUVVGSkxHdENRVUZyUWl4RFFVRjBRaXhGUVVGNVFqdEJRVU4yUWl4clFrRkJWU3hWUVVGV0xFZEJRWFZDTEZOQlFYWkNPMEZCUTBRN08wRkJSVVFzWVVGQlR5eG5Ra0ZCU3l4aFFVRk1MRVZCUVc5Q0xGTkJRVk1zVDBGQk4wSXNSVUZCYzBNc1VVRkJVU3hQUVVFNVF5eEZRVUYxUkN4UlFVRlJMRWxCUVM5RUxFTkJRVkE3UVVGRFJDeExRVkpFTzBGQlUwUXNSMEZZUkN4TlFWZFBPenRCUVVWTUxGZEJRVThzV1VGQlRUdEJRVU5ZTEZWQlFVMHNaMEpCUVdkQ0xHOUNRVUZUTEdkRFFVRnhRaXhUUVVGVExFOUJRVGxDTEVWQlFYVkRMRmRCUVZjc1EwRkJXQ3hGUVVGakxFTkJRV1FzUTBGQmRrTXNSVUZCZVVRc1YwRkJWeXhEUVVGWUxFVkJRV01zUTBGQlpDeERRVUY2UkN4RFFVRlVMRVZCUVhGR0xFTkJRWEpHTEVWQlFYZEdMRU5CUVhoR0xFTkJRWFJDTzBGQlEwRXNWVUZCVFN4TFFVRkxMR2REUVVGeFFpeGhRVUZ5UWl4RlFVRnZReXhYUVVGWExFTkJRVmdzUlVGQll5eERRVUZrTEVOQlFYQkRMRVZCUVhORUxGZEJRVmNzUTBGQldDeEZRVUZqTEVOQlFXUXNRMEZCZEVRc1EwRkJXRHRCUVVOQkxGVkJRVTBzUzBGQlN5eG5RMEZCY1VJc1lVRkJja0lzUlVGQmIwTXNWMEZCVnl4RFFVRllMRVZCUVdNc1EwRkJaQ3hEUVVGd1F5eEZRVUZ6UkN4WFFVRlhMRU5CUVZnc1JVRkJZeXhEUVVGa0xFTkJRWFJFTEVOQlFWZzdPMEZCUlVFc1ZVRkJTU3hyUWtGQmEwSXNRMEZCZEVJc1JVRkJlVUk3UVVGRGRrSXNhMEpCUVZVc1ZVRkJWaXhIUVVGMVFpeFRRVUYyUWp0QlFVTkJMR1ZCUVU4c1VVRkJVU3hQUVVGbU8wRkJRMFE3TzBGQlJVUXNZVUZCVHl4blEwRkJjVUlzWVVGQmNrSXNSVUZCYjBNc1JVRkJjRU1zUlVGQmQwTXNSVUZCZUVNc1EwRkJVRHRCUVVORUxFdEJXRVE3UVVGWlJEdEJRVU5HTEVNaUxDSm1hV3hsSWpvaVoyVnVaWEpoZEdVdFlteGxibVF0WTNWeWRtVXVhbk1pTENKemIzVnlZMlZTYjI5MElqb2lMMVZ6WlhKekwyMWhkSFJ3WlhKeWVTOVRhWFJsY3k5d2IzQnRiM1JwYjI0aUxDSnpiM1Z5WTJWelEyOXVkR1Z1ZENJNld5SnBiWEJ2Y25RZ2V5Qm5aWFJRY205bmNtVnpjMFp5YjIxV1lXeDFaU3dnWjJWMFZtRnNkV1ZHY205dFVISnZaM0psYzNNc0lHVmhjMlVzSUhKbGMzUnlhV04wSUgwZ1puSnZiU0FuTGk0dkxpNHZhVzVqTDJOaGJHTW5PMXh1WEc1amIyNXpkQ0JDVEVWT1JGOUJRME5WVWtGRFdTQTlJRFl3TzF4dVhHNWxlSEJ2Y25RZ1pHVm1ZWFZzZENBb2IzVjBRV04wYVc5dUxDQnBia0ZqZEdsdmJpd2dabXh2ZDFaaGJIVmxMQ0JyWlhrcElEMCtJSHRjYmlBZ1kyOXVjM1FnYjNWMFZtRnNkV1VnUFNCdmRYUkJZM1JwYjI0dWRtRnNkV1Z6VzJ0bGVWMDdYRzVjYmlBZ2FXWWdLRzkxZEVGamRHbHZiaTVsYkdGd2MyVmtJRDA5UFNCMWJtUmxabWx1WldRZ2ZId2dJVzkxZEZaaGJIVmxLU0I3WEc0Z0lDQWdjbVYwZFhKdU8xeHVJQ0I5WEc1Y2JpQWdZMjl1YzNRZ2FXNVdZV3gxWlNBOUlHbHVRV04wYVc5dUxuWmhiSFZsYzF0clpYbGRPMXh1SUNCamIyNXpkQ0J2ZFhSVWIzUmhiRVIxY21GMGFXOXVJRDBnYjNWMFZtRnNkV1V1WkdWc1lYa2dLeUJ2ZFhSV1lXeDFaUzVrZFhKaGRHbHZianRjYmlBZ1kyOXVjM1FnZEdsdFpWVnVkR2xzVDNWMFJXNWtJRDBnVFdGMGFDNXRhVzRvYjNWMFZHOTBZV3hFZFhKaGRHbHZiaUF0SUc5MWRFRmpkR2x2Ymk1bGJHRndjMlZrTENCcGJsWmhiSFZsTG1SbGJHRjVJQ3NnYVc1V1lXeDFaUzVrZFhKaGRHbHZiaWs3WEc0Z0lHTnZibk4wSUdsdVVHOXphWFJwYjI1QmRFOTFkRVZ1WkNBOUlHVmhjMlVvY21WemRISnBZM1FvWjJWMFVISnZaM0psYzNOR2NtOXRWbUZzZFdVb2RHbHRaVlZ1ZEdsc1QzVjBSVzVrTENBd0xDQnBibFpoYkhWbExtUmxiR0Y1SUNzZ2FXNVdZV3gxWlM1a2RYSmhkR2x2Ymlrc0lEQXNJREVwTENCcGJsWmhiSFZsTG1aeWIyMHNJR2x1Vm1Gc2RXVXVkRzhzSUdsdVZtRnNkV1V1WldGelpTazdYRzRnSUdOdmJuTjBJR2x1UW1sbloyVnlWR2hoYms5MWRFRjBVM1JoY25RZ1BTQnBibFpoYkhWbExtWnliMjBnUGlCdmRYUldZV3gxWlM1amRYSnlaVzUwTzF4dUlDQmpiMjV6ZENCcGJrSnBaMmRsY2xSb1lXNVBkWFJCZEVWdVpDQTlJR2x1VUc5emFYUnBiMjVCZEU5MWRFVnVaQ0ErSUc5MWRGWmhiSFZsTG5Sdk8xeHVJQ0JqYjI1emRDQjBkMlZsYm5OSmJuUmxjbk5sWTNRZ1BTQnBia0pwWjJkbGNsUm9ZVzVQZFhSQmRGTjBZWEowSUNFOVBTQnBia0pwWjJkbGNsUm9ZVzVQZFhSQmRFVnVaRHRjYmx4dUlDQmpiMjV6ZENCaWJHVnVaRU4xY25abElEMGdXMXN3TENCdmRYUldZV3gxWlM1amRYSnlaVzUwWFN3Z1czUnBiV1ZWYm5ScGJFOTFkRVZ1WkN3Z2FXNVFiM05wZEdsdmJrRjBUM1YwUlc1a1hWMDdYRzVjYmlBZ0x5OGdTV1lnZEhkbFpXNXpJR2x1ZEdWeWMyVmpkQ3dnY21WemIyeDJaU0IwZDJWbGJuTWdZWFFnWVNCeVpYTnZiSFYwYVc5dUlIUnZJR1pwYm1RZ1pYaGhZM1JzZVNCM2FHVnlaVnh1SUNCcFppQW9kSGRsWlc1elNXNTBaWEp6WldOMEtTQjdYRzRnSUNBZ1kyOXVjM1FnZEdsdFpWTjBaWEJVYjFSbGMzUWdQU0IwYVcxbFZXNTBhV3hQZFhSRmJtUWdMeUJDVEVWT1JGOUJRME5WVWtGRFdUdGNiaUFnSUNCc1pYUWdabTkxYm1SUU1TQTlJR1poYkhObE8xeHVJQ0FnSUd4bGRDQm1iM1Z1WkZBeUlEMGdabUZzYzJVN1hHNWNiaUFnSUNCbWIzSWdLR3hsZENCcElEMGdNRHNnYVNBOFBTQkNURVZPUkY5QlEwTlZVa0ZEV1RzZ2FTc3JLU0I3WEc0Z0lDQWdJQ0JqYjI1emRDQjBhVzFsVTNSbGNDQTlJR2tnS2lCMGFXMWxVM1JsY0ZSdlZHVnpkRHRjYmlBZ0lDQWdJR052Ym5OMElHOTFkRUYwVkdsdFpTQTlJR1ZoYzJVb1oyVjBVSEp2WjNKbGMzTkdjbTl0Vm1Gc2RXVW9iM1YwUVdOMGFXOXVMbVZzWVhCelpXUWdLeUIwYVcxbFUzUmxjQ3dnYjNWMFZtRnNkV1V1WkdWc1lYa3NJRzkxZEZaaGJIVmxMbVIxY21GMGFXOXVLU3dnYjNWMFZtRnNkV1V1Wm5KdmJTd2diM1YwVm1Gc2RXVXVkRzhzSUc5MWRGWmhiSFZsTG1WaGMyVXBPMXh1SUNBZ0lDQWdZMjl1YzNRZ2FXNUJkRlJwYldVZ1BTQmxZWE5sS0dkbGRGQnliMmR5WlhOelJuSnZiVlpoYkhWbEtHbHVRV04wYVc5dUxtVnNZWEJ6WldRZ0t5QjBhVzFsVTNSbGNDd2dhVzVXWVd4MVpTNWtaV3hoZVN3Z2FXNVdZV3gxWlM1a2RYSmhkR2x2Ymlrc0lHbHVWbUZzZFdVdVpuSnZiU3dnYVc1V1lXeDFaUzUwYnl3Z2FXNVdZV3gxWlM1bFlYTmxLVHRjYmx4dUlDQWdJQ0FnYVdZZ0tDRm1iM1Z1WkZBeElDWW1JQ2dvYVc1Q2FXZG5aWEpVYUdGdVQzVjBRWFJUZEdGeWRDQW1KaUJwYmtGMFZHbHRaU0E4SUc5MWRFRjBWR2x0WlNrZ2ZId2dLQ0ZwYmtKcFoyZGxjbFJvWVc1UGRYUkJkRk4wWVhKMElDWW1JR2x1UVhSVWFXMWxJRDRnYjNWMFFYUlVhVzFsS1NrcElIdGNiaUFnSUNBZ0lDQWdZbXhsYm1SRGRYSjJaUzV6Y0d4cFkyVW9NU3dnTUN3Z1czUnBiV1ZUZEdWd0xDQnBia0YwVkdsdFpWMHBPMXh1SUNBZ0lDQWdJQ0JtYjNWdVpGQXhJRDBnZEhKMVpUdGNiaUFnSUNBZ0lIMWNibHh1SUNBZ0lDQWdhV1lnS0dadmRXNWtVREVnSmlZZ0tDaHBia0pwWjJkbGNsUm9ZVzVQZFhSQmRGTjBZWEowSUNZbUlHbHVRWFJVYVcxbElEd2diM1YwVm1Gc2RXVXVZM1Z5Y21WdWRDa2dmSHdnS0NGcGJrSnBaMmRsY2xSb1lXNVBkWFJCZEZOMFlYSjBJQ1ltSUdsdVFYUlVhVzFsSUQ0Z2IzVjBWbUZzZFdVdVkzVnljbVZ1ZENrcEtTQjdYRzRnSUNBZ0lDQWdJR0pzWlc1a1EzVnlkbVZiTWwwZ1BTQmJkR2x0WlZOMFpYQXNJR2x1UVhSVWFXMWxYVHRjYmlBZ0lDQWdJQ0FnWm05MWJtUlFNaUE5SUhSeWRXVTdYRzRnSUNBZ0lDQjlYRzVjYmlBZ0lDQWdJR2xtSUNobWIzVnVaRkF5S1NCN1hHNGdJQ0FnSUNBZ0lHSnlaV0ZyTzF4dUlDQWdJQ0FnZlZ4dUlDQWdJSDFjYmlBZ2ZWeHVYRzRnSUdsbUlDaGliR1Z1WkVOMWNuWmxMbXhsYm1kMGFDQTlQVDBnTWlrZ2UxeHVJQ0FnSUM4dklGQmhjM01nWW1WMGQyVmxiaUIwZDJWbGJuTWdkWE5wYm1jZ2FXNWpiMjFwYm1jZ1pXRnphVzVuSUdsbUlHcDFjM1FnZEhkdklIQnZhVzUwYzF4dUlDQWdJSEpsZEhWeWJpQW9LU0E5UGlCN1hHNGdJQ0FnSUNCamIyNXpkQ0JpYkdWdVpGQnliMmR5WlhOeklEMGdjbVZ6ZEhKcFkzUW9aMlYwVUhKdlozSmxjM05HY205dFZtRnNkV1VvYVc1QlkzUnBiMjR1Wld4aGNITmxaQ3dnWW14bGJtUkRkWEoyWlZzd1hWc3dYU3dnWW14bGJtUkRkWEoyWlZzeFhWc3dYU2tzSURBc0lERXBPMXh1WEc0Z0lDQWdJQ0JwWmlBb1lteGxibVJRY205bmNtVnpjeUE5UFQwZ01Ta2dlMXh1SUNBZ0lDQWdJQ0JtYkc5M1ZtRnNkV1V1WW14bGJtUkRkWEoyWlNBOUlIVnVaR1ZtYVc1bFpEdGNiaUFnSUNBZ0lIMWNibHh1SUNBZ0lDQWdjbVYwZFhKdUlHVmhjMlVvWW14bGJtUlFjbTluY21WemN5d2diM1YwVm1Gc2RXVXVZM1Z5Y21WdWRDd2dhVzVXWVd4MVpTNWpkWEp5Wlc1MExDQnBibFpoYkhWbExtVmhjMlVwTzF4dUlDQWdJSDA3WEc0Z0lIMGdaV3h6WlNCN1hHNGdJQ0FnTHk4Z1VHRnpjeUJpWlhSM1pXVnVJSFIzWldWdWN5QjFjMmx1WnlCaVpYcHBaWElnYVc1MFpYSndiMnhoZEdsdmJseHVJQ0FnSUhKbGRIVnliaUFvS1NBOVBpQjdYRzRnSUNBZ0lDQmpiMjV6ZENCaWJHVnVaRkJ5YjJkeVpYTnpJRDBnY21WemRISnBZM1FvWjJWMFVISnZaM0psYzNOR2NtOXRWbUZzZFdVb2FXNUJZM1JwYjI0dVpXeGhjSE5sWkN3Z1lteGxibVJEZFhKMlpWc3dYVnN3WFN3Z1lteGxibVJEZFhKMlpWc3lYVnN3WFNrc0lEQXNJREVwTzF4dUlDQWdJQ0FnWTI5dWMzUWdZVkFnUFNCblpYUldZV3gxWlVaeWIyMVFjbTluY21WemN5aGliR1Z1WkZCeWIyZHlaWE56TENCaWJHVnVaRU4xY25abFd6QmRXekZkTENCaWJHVnVaRU4xY25abFd6RmRXekZkS1R0Y2JpQWdJQ0FnSUdOdmJuTjBJR0pRSUQwZ1oyVjBWbUZzZFdWR2NtOXRVSEp2WjNKbGMzTW9ZbXhsYm1SUWNtOW5jbVZ6Y3l3Z1lteGxibVJEZFhKMlpWc3hYVnN4WFN3Z1lteGxibVJEZFhKMlpWc3lYVnN4WFNrN1hHNWNiaUFnSUNBZ0lHbG1JQ2hpYkdWdVpGQnliMmR5WlhOeklEMDlQU0F4S1NCN1hHNGdJQ0FnSUNBZ0lHWnNiM2RXWVd4MVpTNWliR1Z1WkVOMWNuWmxJRDBnZFc1a1pXWnBibVZrTzF4dUlDQWdJQ0FnSUNCeVpYUjFjbTRnYVc1V1lXeDFaUzVqZFhKeVpXNTBPMXh1SUNBZ0lDQWdmVnh1WEc0Z0lDQWdJQ0J5WlhSMWNtNGdaMlYwVm1Gc2RXVkdjbTl0VUhKdlozSmxjM01vWW14bGJtUlFjbTluY21WemN5d2dZVkFzSUdKUUtUdGNiaUFnSUNCOU8xeHVJQ0I5WEc1OU8xeHVJbDE5XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9hY3Rpb25zL2Zsb3cvZ2VuZXJhdGUtYmxlbmQtY3VydmUuanNcbiAqKiBtb2R1bGUgaWQgPSAzN1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX0lucHV0MiA9IHJlcXVpcmUoJy4vSW5wdXQnKTtcblxudmFyIF9JbnB1dDMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9JbnB1dDIpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmICghc2VsZikgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIGNhbGwgJiYgKHR5cGVvZiBjYWxsID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpID8gY2FsbCA6IHNlbGY7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgXCIgKyB0eXBlb2Ygc3VwZXJDbGFzcyk7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgZW51bWVyYWJsZTogZmFsc2UsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcykgOiBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzOyB9XG5cbnZhciBQb2ludGVyID0gZnVuY3Rpb24gKF9JbnB1dCkge1xuICBfaW5oZXJpdHMoUG9pbnRlciwgX0lucHV0KTtcblxuICBmdW5jdGlvbiBQb2ludGVyKGluaXRpYWxTdGF0ZSwgbW92ZUV2ZW50LCBldmVudFRvUG9pbnQpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgUG9pbnRlcik7XG5cbiAgICB2YXIgX3RoaXMgPSBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCBfSW5wdXQuY2FsbCh0aGlzLCBpbml0aWFsU3RhdGUpKTtcblxuICAgIF90aGlzLmV2ZW50VG9Qb2ludCA9IGV2ZW50VG9Qb2ludDtcbiAgICBfdGhpcy5tb3ZlRXZlbnQgPSBtb3ZlRXZlbnQ7XG4gICAgX3RoaXMuYm91bmRMYXRlc3QgPSBfdGhpcy5sYXRlc3QuYmluZChfdGhpcyk7XG4gICAgcmV0dXJuIF90aGlzO1xuICB9XG5cbiAgUG9pbnRlci5wcm90b3R5cGUubGF0ZXN0ID0gZnVuY3Rpb24gbGF0ZXN0KGUpIHtcbiAgICBfSW5wdXQucHJvdG90eXBlLmxhdGVzdC5jYWxsKHRoaXMsIHRoaXMuZXZlbnRUb1BvaW50KGUpKTtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gIH07XG5cbiAgUG9pbnRlci5wcm90b3R5cGUuc3RhcnQgPSBmdW5jdGlvbiBzdGFydCgpIHtcbiAgICBfSW5wdXQucHJvdG90eXBlLnN0YXJ0LmNhbGwodGhpcyk7XG4gICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIodGhpcy5tb3ZlRXZlbnQsIHRoaXMuYm91bmRMYXRlc3QpO1xuICB9O1xuXG4gIFBvaW50ZXIucHJvdG90eXBlLnN0b3AgPSBmdW5jdGlvbiBzdG9wKCkge1xuICAgIF9JbnB1dC5wcm90b3R5cGUuc3RvcC5jYWxsKHRoaXMpO1xuICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKHRoaXMubW92ZUV2ZW50LCB0aGlzLmJvdW5kTGF0ZXN0KTtcbiAgfTtcblxuICByZXR1cm4gUG9pbnRlcjtcbn0oX0lucHV0My5kZWZhdWx0KTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gUG9pbnRlcjtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbk55WXk5cGJuQjFkQzlRYjJsdWRHVnlMbXB6SWwwc0ltNWhiV1Z6SWpwYlhTd2liV0Z3Y0dsdVozTWlPaUk3T3pzN1FVRkJRVHM3T3pzN096czdPenM3TzBsQlJYRkNMRTg3T3p0QlFVTnVRaXh0UWtGQldTeFpRVUZhTEVWQlFUQkNMRk5CUVRGQ0xFVkJRWEZETEZsQlFYSkRMRVZCUVcxRU8wRkJRVUU3TzBGQlFVRXNhVVJCUTJwRUxHdENRVUZOTEZsQlFVNHNRMEZFYVVRN08wRkJSV3BFTEZWQlFVc3NXVUZCVEN4SFFVRnZRaXhaUVVGd1FqdEJRVU5CTEZWQlFVc3NVMEZCVEN4SFFVRnBRaXhUUVVGcVFqdEJRVU5CTEZWQlFVc3NWMEZCVEN4SFFVRnRRaXhOUVVGTExFMUJRVXdzUTBGQldTeEpRVUZhTEU5QlFXNUNPMEZCU21sRU8wRkJTMnhFT3p0dlFrRkZSQ3hOTEcxQ1FVRlBMRU1zUlVGQlJ6dEJRVU5TTEhGQ1FVRk5MRTFCUVU0c1dVRkJZU3hMUVVGTExGbEJRVXdzUTBGQmEwSXNRMEZCYkVJc1EwRkJZanRCUVVOQkxFMUJRVVVzWTBGQlJqdEJRVU5FTEVjN08yOUNRVVZFTEVzc2IwSkJRVkU3UVVGRFRpeHhRa0ZCVFN4TFFVRk9PMEZCUTBFc1lVRkJVeXhsUVVGVUxFTkJRWGxDTEdkQ1FVRjZRaXhEUVVFd1F5eExRVUZMTEZOQlFTOURMRVZCUVRCRUxFdEJRVXNzVjBGQkwwUTdRVUZEUkN4SE96dHZRa0ZGUkN4SkxHMUNRVUZQTzBGQlEwd3NjVUpCUVUwc1NVRkJUanRCUVVOQkxHRkJRVk1zWlVGQlZDeERRVUY1UWl4dFFrRkJla0lzUTBGQk5rTXNTMEZCU3l4VFFVRnNSQ3hGUVVFMlJDeExRVUZMTEZkQlFXeEZPMEZCUTBRc1J6czdPenM3YTBKQmNrSnJRaXhQSWl3aVptbHNaU0k2SWxCdmFXNTBaWEl1YW5NaUxDSnpiM1Z5WTJWU2IyOTBJam9pTDFWelpYSnpMMjFoZEhSd1pYSnllUzlUYVhSbGN5OXdiM0J0YjNScGIyNGlMQ0p6YjNWeVkyVnpRMjl1ZEdWdWRDSTZXeUpwYlhCdmNuUWdTVzV3ZFhRZ1puSnZiU0FuTGk5SmJuQjFkQ2M3WEc1Y2JtVjRjRzl5ZENCa1pXWmhkV3gwSUdOc1lYTnpJRkJ2YVc1MFpYSWdaWGgwWlc1a2N5QkpibkIxZENCN1hHNGdJR052Ym5OMGNuVmpkRzl5S0dsdWFYUnBZV3hUZEdGMFpTd2diVzkyWlVWMlpXNTBMQ0JsZG1WdWRGUnZVRzlwYm5RcElIdGNiaUFnSUNCemRYQmxjaWhwYm1sMGFXRnNVM1JoZEdVcE8xeHVJQ0FnSUhSb2FYTXVaWFpsYm5SVWIxQnZhVzUwSUQwZ1pYWmxiblJVYjFCdmFXNTBPMXh1SUNBZ0lIUm9hWE11Ylc5MlpVVjJaVzUwSUQwZ2JXOTJaVVYyWlc1ME8xeHVJQ0FnSUhSb2FYTXVZbTkxYm1STVlYUmxjM1FnUFNCMGFHbHpMbXhoZEdWemRDNWlhVzVrS0hSb2FYTXBPMXh1SUNCOVhHNWNiaUFnYkdGMFpYTjBLR1VwSUh0Y2JpQWdJQ0J6ZFhCbGNpNXNZWFJsYzNRb2RHaHBjeTVsZG1WdWRGUnZVRzlwYm5Rb1pTa3BPMXh1SUNBZ0lHVXVjSEpsZG1WdWRFUmxabUYxYkhRb0tUdGNiaUFnZlZ4dVhHNGdJSE4wWVhKMEtDa2dlMXh1SUNBZ0lITjFjR1Z5TG5OMFlYSjBLQ2s3WEc0Z0lDQWdaRzlqZFcxbGJuUXVaRzlqZFcxbGJuUkZiR1Z0Wlc1MExtRmtaRVYyWlc1MFRHbHpkR1Z1WlhJb2RHaHBjeTV0YjNabFJYWmxiblFzSUhSb2FYTXVZbTkxYm1STVlYUmxjM1FwTzF4dUlDQjlYRzVjYmlBZ2MzUnZjQ2dwSUh0Y2JpQWdJQ0J6ZFhCbGNpNXpkRzl3S0NrN1hHNGdJQ0FnWkc5amRXMWxiblF1Wkc5amRXMWxiblJGYkdWdFpXNTBMbkpsYlc5MlpVVjJaVzUwVEdsemRHVnVaWElvZEdocGN5NXRiM1psUlhabGJuUXNJSFJvYVhNdVltOTFibVJNWVhSbGMzUXBPMXh1SUNCOVhHNTlYRzRpWFgwPVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvaW5wdXQvUG9pbnRlci5qc1xuICoqIG1vZHVsZSBpZCA9IDM4XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzLmRlYWN0aXZhdGUgPSBleHBvcnRzLmdldFRhc2tJZCA9IHVuZGVmaW5lZDtcbmV4cG9ydHMuYWN0aXZhdGUgPSBhY3RpdmF0ZTtcblxudmFyIF90aW1lciA9IHJlcXVpcmUoJy4vdGltZXInKTtcblxudmFyIF90aW1lcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF90aW1lcik7XG5cbnZhciBfdGljayA9IHJlcXVpcmUoJy4vdGljaycpO1xuXG52YXIgX3RpY2syID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfdGljayk7XG5cbnZhciBfbWFuYWdlciA9IHJlcXVpcmUoJy4vbWFuYWdlcicpO1xuXG52YXIgX21hbmFnZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfbWFuYWdlcik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbnZhciB0YXNrU3RlcE9yZGVyID0gW3sgbmFtZTogJ29uRnJhbWVTdGFydCcgfSwgeyBuYW1lOiAnb25VcGRhdGUnIH0sIHsgbmFtZTogJ3dpbGxSZW5kZXInLCBkZWNpZGVSZW5kZXI6IHRydWUgfSwgeyBuYW1lOiAnb25QcmVSZW5kZXInLCBpc1JlbmRlcjogdHJ1ZSB9LCB7IG5hbWU6ICdvblJlbmRlcicsIGlzUmVuZGVyOiB0cnVlIH0sIHsgbmFtZTogJ29uUG9zdFJlbmRlcicsIGlzUmVuZGVyOiB0cnVlIH0sIHsgbmFtZTogJ29uRnJhbWVFbmQnIH0sIHsgbmFtZTogJ29uQ2xlYW51cCcgfV07IC8qXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIENvcmUgcmVuZGVyIGxvb3BcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBTb21lIGRlY2ljaXNvbnMgaGVyZSBoYXZlIGJlZW4gdGFrZW4gaW4gdGhlIG5hbWUgb2YgcGVyZm9ybWFuY2UuIEFsbCBoYWlsIHBlcmZvcm1hbmNlLlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoSXQgdHVybnMgb3V0IG1pY3Jvb3B0aW1pc2F0aW9ucyBkbyBtYXR0ZXIgd2hlbiB5b3UgaGF2ZSAxNm1zKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKi9cblxudmFyIG51bVRhc2tTdGVwcyA9IHRhc2tTdGVwT3JkZXIubGVuZ3RoO1xuXG4vLyBbYm9vbGVhbl06IElzIGxvb3AgcnVubmluZz9cbnZhciBpc1J1bm5pbmcgPSBmYWxzZTtcblxuLypcbiAgW3RpbWVzdGFtcF06IEZyYW1lIHRpbWVzdGFtcFxuICBbaW50XTogVGltZSBzaW5jZSBsYXN0IGZyYW1lXG4qL1xuZnVuY3Rpb24gZmlyZUFsbChmcmFtZVN0YW1wLCBlbGFwc2VkKSB7XG4gIHZhciBhY3RpdmVJZHMgPSBfbWFuYWdlcjIuZGVmYXVsdC5nZXRBY3RpdmVJZHMoKTtcbiAgdmFyIGFjdGl2ZVRhc2tDb3VudCA9IGFjdGl2ZUlkcy5sZW5ndGg7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBudW1UYXNrU3RlcHM7IGkrKykge1xuICAgIHZhciBzdGVwID0gdGFza1N0ZXBPcmRlcltpXTtcblxuICAgIGZvciAodmFyIGkyID0gMDsgaTIgPCBhY3RpdmVUYXNrQ291bnQ7IGkyKyspIHtcbiAgICAgIHZhciB0YXNrID0gX21hbmFnZXIyLmRlZmF1bHQuYWN0aXZlVGFza3NbYWN0aXZlSWRzW2kyXV07XG4gICAgICB2YXIgcmVzdWx0ID0gZmFsc2U7XG5cbiAgICAgIC8vIENoZWNrIGlmIHRoaXMgdGFzayBoYXMgdGhpcyBzdGVwLCBvciBpZiBpdCdzIGEgcmVuZGVyIHN0ZXAgdGhhdCB3ZSdyZSByZW5kZXJpbmcgdGhpcyBmcmFtZVxuICAgICAgaWYgKHRhc2sgJiYgdGFza1tzdGVwLm5hbWVdICYmICghc3RlcC5pc1JlbmRlciB8fCBzdGVwLmlzUmVuZGVyICYmIHRhc2suX3JlbmRlclRoaXNGcmFtZSA9PT0gdHJ1ZSkpIHtcbiAgICAgICAgcmVzdWx0ID0gdGFza1tzdGVwLm5hbWVdLmNhbGwodGFzaywgdGFzaywgZnJhbWVTdGFtcCwgZWxhcHNlZCk7XG4gICAgICB9XG5cbiAgICAgIC8vIElmIHRoaXMgaXMgYSBkZWNpZGUgcmVuZGVyIHN0ZXAgYW5kIGl0IHJldHVybnMgYGZhbHNlYCwgc2V0IHdpbGxSZW5kZXIgdG8gZmFsc2VcbiAgICAgIGlmIChzdGVwLmRlY2lkZVJlbmRlcikge1xuICAgICAgICB0YXNrLl9yZW5kZXJUaGlzRnJhbWUgPSB0YXNrW3N0ZXAubmFtZV0gJiYgcmVzdWx0ICE9PSB0cnVlID8gZmFsc2UgOiB0cnVlO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBfbWFuYWdlcjIuZGVmYXVsdC5nZXROb25CYWNrZ3JvdW5kUnVubmluZ0NvdW50KCk7XG59XG5cbi8vIEZ1bmN0aW9uIHRvIGZpcmUgZXZlcnkgZnJhbWVcbmZ1bmN0aW9uIGZyYW1lKGZyYW1lU3RhbXApIHtcbiAgX3RpbWVyMi5kZWZhdWx0LnVwZGF0ZShmcmFtZVN0YW1wKTtcbiAgaXNSdW5uaW5nID0gZmlyZUFsbChmcmFtZVN0YW1wLCBfdGltZXIyLmRlZmF1bHQuZ2V0RWxhcHNlZCgpKTtcblxuICBpZiAoaXNSdW5uaW5nKSB7XG4gICAgKDAsIF90aWNrMi5kZWZhdWx0KShmcmFtZSk7XG4gIH1cbn1cblxuLy8gU3RhcnQgbG9vcFxuZnVuY3Rpb24gc3RhcnQoKSB7XG4gIGlmICghaXNSdW5uaW5nKSB7XG4gICAgX3RpbWVyMi5kZWZhdWx0LnN0YXJ0KCk7XG4gICAgaXNSdW5uaW5nID0gdHJ1ZTtcbiAgICAoMCwgX3RpY2syLmRlZmF1bHQpKGZyYW1lKTtcbiAgfVxufVxuXG4vLyBFeHBvcnRzXG52YXIgZ2V0VGFza0lkID0gZXhwb3J0cy5nZXRUYXNrSWQgPSBfbWFuYWdlcjIuZGVmYXVsdC5nZXRUYXNrSWQ7XG5cbi8qXG4gIFtpbnRdOiB0YXNrIElEIHRvIGFjdGl2YXRlXG4gIFt0YXNrXTogdGFzayB0byBhY3RpdmF0ZVxuKi9cbmZ1bmN0aW9uIGFjdGl2YXRlKGlkLCB0YXNrKSB7XG4gIF9tYW5hZ2VyMi5kZWZhdWx0LmFjdGl2YXRlKGlkLCB0YXNrKTtcblxuICBpZiAoIWlzUnVubmluZykge1xuICAgIHN0YXJ0KCk7XG4gIH1cbn1cblxuLypcbiAgW2ludF06IHRhc2sgSUQgdG8gZGVhY3RpdmF0ZVxuKi9cbnZhciBkZWFjdGl2YXRlID0gZXhwb3J0cy5kZWFjdGl2YXRlID0gX21hbmFnZXIyLmRlZmF1bHQuZGVhY3RpdmF0ZTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbk55WXk5MFlYTnJMMnh2YjNBdWFuTWlYU3dpYm1GdFpYTWlPbHRkTENKdFlYQndhVzVuY3lJNklqczdPenRSUVdsR1owSXNVU3hIUVVGQkxGRTdPMEZCTTBWb1FqczdPenRCUVVOQk96czdPMEZCUTBFN096czdPenRCUVVWQkxFbEJRVTBzWjBKQlFXZENMRU5CUTNCQ0xFVkJRVVVzVFVGQlRTeGpRVUZTTEVWQlJHOUNMRVZCUlhCQ0xFVkJRVVVzVFVGQlRTeFZRVUZTTEVWQlJtOUNMRVZCUjNCQ0xFVkJRVVVzVFVGQlRTeFpRVUZTTEVWQlFYTkNMR05CUVdNc1NVRkJjRU1zUlVGSWIwSXNSVUZKY0VJc1JVRkJSU3hOUVVGTkxHRkJRVklzUlVGQmRVSXNWVUZCVlN4SlFVRnFReXhGUVVwdlFpeEZRVXR3UWl4RlFVRkZMRTFCUVUwc1ZVRkJVaXhGUVVGdlFpeFZRVUZWTEVsQlFUbENMRVZCVEc5Q0xFVkJUWEJDTEVWQlFVVXNUVUZCVFN4alFVRlNMRVZCUVhkQ0xGVkJRVlVzU1VGQmJFTXNSVUZPYjBJc1JVRlBjRUlzUlVGQlJTeE5RVUZOTEZsQlFWSXNSVUZRYjBJc1JVRlJjRUlzUlVGQlJTeE5RVUZOTEZkQlFWSXNSVUZTYjBJc1EwRkJkRUlzUXpzN096czdPenRCUVZWQkxFbEJRVTBzWlVGQlpTeGpRVUZqTEUxQlFXNURPenM3UVVGSFFTeEpRVUZKTEZsQlFWa3NTMEZCYUVJN096czdPenRCUVUxQkxGTkJRVk1zVDBGQlZDeERRVUZwUWl4VlFVRnFRaXhGUVVFMlFpeFBRVUUzUWl4RlFVRnpRenRCUVVOd1F5eE5RVUZOTEZsQlFWa3NhMEpCUVZFc1dVRkJVaXhGUVVGc1FqdEJRVU5CTEUxQlFVMHNhMEpCUVd0Q0xGVkJRVlVzVFVGQmJFTTdPMEZCUlVFc1QwRkJTeXhKUVVGSkxFbEJRVWtzUTBGQllpeEZRVUZuUWl4SlFVRkpMRmxCUVhCQ0xFVkJRV3RETEVkQlFXeERMRVZCUVhWRE8wRkJRM0pETEZGQlFVMHNUMEZCVHl4alFVRmpMRU5CUVdRc1EwRkJZanM3UVVGRlFTeFRRVUZMTEVsQlFVa3NTMEZCU3l4RFFVRmtMRVZCUVdsQ0xFdEJRVXNzWlVGQmRFSXNSVUZCZFVNc1NVRkJka01zUlVGQk5rTTdRVUZETTBNc1ZVRkJUU3hQUVVGUExHdENRVUZSTEZkQlFWSXNRMEZCYjBJc1ZVRkJWU3hGUVVGV0xFTkJRWEJDTEVOQlFXSTdRVUZEUVN4VlFVRkpMRk5CUVZNc1MwRkJZanM3TzBGQlIwRXNWVUZCU1N4UlFVRlJMRXRCUVVzc1MwRkJTeXhKUVVGV0xFTkJRVklzUzBGQk5FSXNRMEZCUXl4TFFVRkxMRkZCUVU0c1NVRkJiVUlzUzBGQlN5eFJRVUZNTEVsQlFXbENMRXRCUVVzc1owSkJRVXdzUzBGQk1FSXNTVUZCTVVZc1EwRkJTaXhGUVVGelJ6dEJRVU53Unl4cFFrRkJVeXhMUVVGTExFdEJRVXNzU1VGQlZpeEZRVUZuUWl4SlFVRm9RaXhEUVVGeFFpeEpRVUZ5UWl4RlFVRXlRaXhKUVVFelFpeEZRVUZwUXl4VlFVRnFReXhGUVVFMlF5eFBRVUUzUXl4RFFVRlVPMEZCUTBRN096dEJRVWRFTEZWQlFVa3NTMEZCU3l4WlFVRlVMRVZCUVhWQ08wRkJRM0pDTEdGQlFVc3NaMEpCUVV3c1IwRkJlVUlzUzBGQlN5eExRVUZMTEVsQlFWWXNTMEZCYlVJc1YwRkJWeXhKUVVFdlFpeEhRVUYxUXl4TFFVRjJReXhIUVVFclF5eEpRVUYyUlR0QlFVTkVPMEZCUTBZN1FVRkRSanM3UVVGRlJDeFRRVUZQTEd0Q1FVRlJMRFJDUVVGU0xFVkJRVkE3UVVGRFJEczdPMEZCUjBRc1UwRkJVeXhMUVVGVUxFTkJRV1VzVlVGQlppeEZRVUV5UWp0QlFVTjZRaXhyUWtGQlRTeE5RVUZPTEVOQlFXRXNWVUZCWWp0QlFVTkJMR05CUVZrc1VVRkJVU3hWUVVGU0xFVkJRVzlDTEdkQ1FVRk5MRlZCUVU0c1JVRkJjRUlzUTBGQldqczdRVUZGUVN4TlFVRkpMRk5CUVVvc1JVRkJaVHRCUVVOaUxIZENRVUZMTEV0QlFVdzdRVUZEUkR0QlFVTkdPenM3UVVGSFJDeFRRVUZUTEV0QlFWUXNSMEZCYVVJN1FVRkRaaXhOUVVGSkxFTkJRVU1zVTBGQlRDeEZRVUZuUWp0QlFVTmtMRzlDUVVGTkxFdEJRVTQ3UVVGRFFTeG5Ra0ZCV1N4SlFVRmFPMEZCUTBFc2QwSkJRVXNzUzBGQlREdEJRVU5FTzBGQlEwWTdPenRCUVVkTkxFbEJRVTBzWjBOQlFWa3NhMEpCUVZFc1UwRkJNVUk3T3pzN096dEJRVTFCTEZOQlFWTXNVVUZCVkN4RFFVRnJRaXhGUVVGc1FpeEZRVUZ6UWl4SlFVRjBRaXhGUVVFMFFqdEJRVU5xUXl4dlFrRkJVU3hSUVVGU0xFTkJRV2xDTEVWQlFXcENMRVZCUVhGQ0xFbEJRWEpDT3p0QlFVVkJMRTFCUVVrc1EwRkJReXhUUVVGTUxFVkJRV2RDTzBGQlEyUTdRVUZEUkR0QlFVTkdPenM3T3p0QlFVdE5MRWxCUVUwc2EwTkJRV0VzYTBKQlFWRXNWVUZCTTBJaUxDSm1hV3hsSWpvaWJHOXZjQzVxY3lJc0luTnZkWEpqWlZKdmIzUWlPaUl2VlhObGNuTXZiV0YwZEhCbGNuSjVMMU5wZEdWekwzQnZjRzF2ZEdsdmJpSXNJbk52ZFhKalpYTkRiMjUwWlc1MElqcGJJaThxWEc0Z0lFTnZjbVVnY21WdVpHVnlJR3h2YjNCY2JseHVJQ0JUYjIxbElHUmxZMmxqYVhOdmJuTWdhR1Z5WlNCb1lYWmxJR0psWlc0Z2RHRnJaVzRnYVc0Z2RHaGxJRzVoYldVZ2IyWWdjR1Z5Wm05eWJXRnVZMlV1SUVGc2JDQm9ZV2xzSUhCbGNtWnZjbTFoYm1ObExseHVJQ0FvU1hRZ2RIVnlibk1nYjNWMElHMXBZM0p2YjNCMGFXMXBjMkYwYVc5dWN5QmtieUJ0WVhSMFpYSWdkMmhsYmlCNWIzVWdhR0YyWlNBeE5tMXpLVnh1S2k5Y2JtbHRjRzl5ZENCMGFXMWxjaUJtY205dElDY3VMM1JwYldWeUp6dGNibWx0Y0c5eWRDQjBhV05ySUdaeWIyMGdKeTR2ZEdsamF5YzdYRzVwYlhCdmNuUWdiV0Z1WVdkbGNpQm1jbTl0SUNjdUwyMWhibUZuWlhJbk8xeHVYRzVqYjI1emRDQjBZWE5yVTNSbGNFOXlaR1Z5SUQwZ1cxeHVJQ0I3SUc1aGJXVTZJQ2R2YmtaeVlXMWxVM1JoY25RbklIMHNYRzRnSUhzZ2JtRnRaVG9nSjI5dVZYQmtZWFJsSnlCOUxGeHVJQ0I3SUc1aGJXVTZJQ2QzYVd4c1VtVnVaR1Z5Snl3Z1pHVmphV1JsVW1WdVpHVnlPaUIwY25WbElIMHNYRzRnSUhzZ2JtRnRaVG9nSjI5dVVISmxVbVZ1WkdWeUp5d2dhWE5TWlc1a1pYSTZJSFJ5ZFdVZ2ZTeGNiaUFnZXlCdVlXMWxPaUFuYjI1U1pXNWtaWEluTENCcGMxSmxibVJsY2pvZ2RISjFaU0I5TEZ4dUlDQjdJRzVoYldVNklDZHZibEJ2YzNSU1pXNWtaWEluTENCcGMxSmxibVJsY2pvZ2RISjFaU0I5TEZ4dUlDQjdJRzVoYldVNklDZHZia1p5WVcxbFJXNWtKeUI5TEZ4dUlDQjdJRzVoYldVNklDZHZia05zWldGdWRYQW5JSDFjYmwwN1hHNWpiMjV6ZENCdWRXMVVZWE5yVTNSbGNITWdQU0IwWVhOclUzUmxjRTl5WkdWeUxteGxibWQwYUR0Y2JseHVMeThnVzJKdmIyeGxZVzVkT2lCSmN5QnNiMjl3SUhKMWJtNXBibWMvWEc1c1pYUWdhWE5TZFc1dWFXNW5JRDBnWm1Gc2MyVTdYRzVjYmk4cVhHNGdJRnQwYVcxbGMzUmhiWEJkT2lCR2NtRnRaU0IwYVcxbGMzUmhiWEJjYmlBZ1cybHVkRjA2SUZScGJXVWdjMmx1WTJVZ2JHRnpkQ0JtY21GdFpWeHVLaTljYm1aMWJtTjBhVzl1SUdacGNtVkJiR3dvWm5KaGJXVlRkR0Z0Y0N3Z1pXeGhjSE5sWkNrZ2UxeHVJQ0JqYjI1emRDQmhZM1JwZG1WSlpITWdQU0J0WVc1aFoyVnlMbWRsZEVGamRHbDJaVWxrY3lncE8xeHVJQ0JqYjI1emRDQmhZM1JwZG1WVVlYTnJRMjkxYm5RZ1BTQmhZM1JwZG1WSlpITXViR1Z1WjNSb08xeHVYRzRnSUdadmNpQW9iR1YwSUdrZ1BTQXdPeUJwSUR3Z2JuVnRWR0Z6YTFOMFpYQnpPeUJwS3lzcElIdGNiaUFnSUNCamIyNXpkQ0J6ZEdWd0lEMGdkR0Z6YTFOMFpYQlBjbVJsY2x0cFhUdGNibHh1SUNBZ0lHWnZjaUFvYkdWMElHa3lJRDBnTURzZ2FUSWdQQ0JoWTNScGRtVlVZWE5yUTI5MWJuUTdJR2t5S3lzcElIdGNiaUFnSUNBZ0lHTnZibk4wSUhSaGMyc2dQU0J0WVc1aFoyVnlMbUZqZEdsMlpWUmhjMnR6VzJGamRHbDJaVWxrYzF0cE1sMWRPMXh1SUNBZ0lDQWdiR1YwSUhKbGMzVnNkQ0E5SUdaaGJITmxPMXh1WEc0Z0lDQWdJQ0F2THlCRGFHVmpheUJwWmlCMGFHbHpJSFJoYzJzZ2FHRnpJSFJvYVhNZ2MzUmxjQ3dnYjNJZ2FXWWdhWFFuY3lCaElISmxibVJsY2lCemRHVndJSFJvWVhRZ2QyVW5jbVVnY21WdVpHVnlhVzVuSUhSb2FYTWdabkpoYldWY2JpQWdJQ0FnSUdsbUlDaDBZWE5ySUNZbUlIUmhjMnRiYzNSbGNDNXVZVzFsWFNBbUppQW9JWE4wWlhBdWFYTlNaVzVrWlhJZ2ZId2dLSE4wWlhBdWFYTlNaVzVrWlhJZ0ppWWdkR0Z6YXk1ZmNtVnVaR1Z5VkdocGMwWnlZVzFsSUQwOVBTQjBjblZsS1NrcElIdGNiaUFnSUNBZ0lDQWdjbVZ6ZFd4MElEMGdkR0Z6YTF0emRHVndMbTVoYldWZExtTmhiR3dvZEdGemF5d2dkR0Z6YXl3Z1puSmhiV1ZUZEdGdGNDd2daV3hoY0hObFpDazdYRzRnSUNBZ0lDQjlYRzVjYmlBZ0lDQWdJQzh2SUVsbUlIUm9hWE1nYVhNZ1lTQmtaV05wWkdVZ2NtVnVaR1Z5SUhOMFpYQWdZVzVrSUdsMElISmxkSFZ5Ym5NZ1lHWmhiSE5sWUN3Z2MyVjBJSGRwYkd4U1pXNWtaWElnZEc4Z1ptRnNjMlZjYmlBZ0lDQWdJR2xtSUNoemRHVndMbVJsWTJsa1pWSmxibVJsY2lrZ2UxeHVJQ0FnSUNBZ0lDQjBZWE5yTGw5eVpXNWtaWEpVYUdselJuSmhiV1VnUFNBb2RHRnphMXR6ZEdWd0xtNWhiV1ZkSUNZbUlISmxjM1ZzZENBaFBUMGdkSEoxWlNrZ1B5Qm1ZV3h6WlNBNklIUnlkV1U3WEc0Z0lDQWdJQ0I5WEc0Z0lDQWdmVnh1SUNCOVhHNWNiaUFnY21WMGRYSnVJRzFoYm1GblpYSXVaMlYwVG05dVFtRmphMmR5YjNWdVpGSjFibTVwYm1kRGIzVnVkQ2dwTzF4dWZWeHVYRzR2THlCR2RXNWpkR2x2YmlCMGJ5Qm1hWEpsSUdWMlpYSjVJR1p5WVcxbFhHNW1kVzVqZEdsdmJpQm1jbUZ0WlNobWNtRnRaVk4wWVcxd0tTQjdYRzRnSUhScGJXVnlMblZ3WkdGMFpTaG1jbUZ0WlZOMFlXMXdLVHRjYmlBZ2FYTlNkVzV1YVc1bklEMGdabWx5WlVGc2JDaG1jbUZ0WlZOMFlXMXdMQ0IwYVcxbGNpNW5aWFJGYkdGd2MyVmtLQ2twTzF4dVhHNGdJR2xtSUNocGMxSjFibTVwYm1jcElIdGNiaUFnSUNCMGFXTnJLR1p5WVcxbEtUdGNiaUFnZlZ4dWZWeHVYRzR2THlCVGRHRnlkQ0JzYjI5d1hHNW1kVzVqZEdsdmJpQnpkR0Z5ZENncElIdGNiaUFnYVdZZ0tDRnBjMUoxYm01cGJtY3BJSHRjYmlBZ0lDQjBhVzFsY2k1emRHRnlkQ2dwTzF4dUlDQWdJR2x6VW5WdWJtbHVaeUE5SUhSeWRXVTdYRzRnSUNBZ2RHbGpheWhtY21GdFpTazdYRzRnSUgxY2JuMWNibHh1THk4Z1JYaHdiM0owYzF4dVpYaHdiM0owSUdOdmJuTjBJR2RsZEZSaGMydEpaQ0E5SUcxaGJtRm5aWEl1WjJWMFZHRnphMGxrTzF4dVhHNHZLbHh1SUNCYmFXNTBYVG9nZEdGemF5QkpSQ0IwYnlCaFkzUnBkbUYwWlZ4dUlDQmJkR0Z6YTEwNklIUmhjMnNnZEc4Z1lXTjBhWFpoZEdWY2Jpb3ZYRzVsZUhCdmNuUWdablZ1WTNScGIyNGdZV04wYVhaaGRHVW9hV1FzSUhSaGMyc3BJSHRjYmlBZ2JXRnVZV2RsY2k1aFkzUnBkbUYwWlNocFpDd2dkR0Z6YXlrN1hHNWNiaUFnYVdZZ0tDRnBjMUoxYm01cGJtY3BJSHRjYmlBZ0lDQnpkR0Z5ZENncE8xeHVJQ0I5WEc1OVhHNWNiaThxWEc0Z0lGdHBiblJkT2lCMFlYTnJJRWxFSUhSdklHUmxZV04wYVhaaGRHVmNiaW92WEc1bGVIQnZjblFnWTI5dWMzUWdaR1ZoWTNScGRtRjBaU0E5SUcxaGJtRm5aWEl1WkdWaFkzUnBkbUYwWlRzaVhYMD1cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL3Rhc2svbG9vcC5qc1xuICoqIG1vZHVsZSBpZCA9IDM5XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG52YXIgVFJBTlNMQVRFID0gJ3RyYW5zbGF0ZSc7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IHtcbiAgeDogVFJBTlNMQVRFICsgJ1gnLFxuICB5OiBUUkFOU0xBVEUgKyAnWScsXG4gIHo6IFRSQU5TTEFURSArICdaJ1xufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbk55WXk5aFpHRndkR1Z5TDJOemN5OXpkR0YwWlMxdFlYQXVhbk1pWFN3aWJtRnRaWE1pT2x0ZExDSnRZWEJ3YVc1bmN5STZJanM3TzBGQlFVRXNTVUZCVFN4WlFVRlpMRmRCUVd4Q096dHJRa0ZGWlR0QlFVTmlMRXRCUVVjc1dVRkJXU3hIUVVSR08wRkJSV0lzUzBGQlJ5eFpRVUZaTEVkQlJrWTdRVUZIWWl4TFFVRkhMRmxCUVZrN1FVRklSaXhESWl3aVptbHNaU0k2SW5OMFlYUmxMVzFoY0M1cWN5SXNJbk52ZFhKalpWSnZiM1FpT2lJdlZYTmxjbk12YldGMGRIQmxjbko1TDFOcGRHVnpMM0J2Y0cxdmRHbHZiaUlzSW5OdmRYSmpaWE5EYjI1MFpXNTBJanBiSW1OdmJuTjBJRlJTUVU1VFRFRlVSU0E5SUNkMGNtRnVjMnhoZEdVbk8xeHVYRzVsZUhCdmNuUWdaR1ZtWVhWc2RDQjdYRzRnSUhnNklGUlNRVTVUVEVGVVJTQXJJQ2RZSnl4Y2JpQWdlVG9nVkZKQlRsTk1RVlJGSUNzZ0oxa25MRnh1SUNCNk9pQlVVa0ZPVTB4QlZFVWdLeUFuV2lkY2JuMDdJbDE5XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9hZGFwdGVyL2Nzcy9zdGF0ZS1tYXAuanNcbiAqKiBtb2R1bGUgaWQgPSA0MFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX2FuZ2xlID0gcmVxdWlyZSgnLi4vLi4vdmFsdWUtdHlwZXMvYW5nbGUnKTtcblxudmFyIF9hbmdsZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9hbmdsZSk7XG5cbnZhciBfYWxwaGEgPSByZXF1aXJlKCcuLi8uLi92YWx1ZS10eXBlcy9hbHBoYScpO1xuXG52YXIgX2FscGhhMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2FscGhhKTtcblxudmFyIF9jb2xvciA9IHJlcXVpcmUoJy4uLy4uL3ZhbHVlLXR5cGVzL2NvbG9yJyk7XG5cbnZhciBfY29sb3IyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY29sb3IpO1xuXG52YXIgX3NjYWxlID0gcmVxdWlyZSgnLi4vLi4vdmFsdWUtdHlwZXMvc2NhbGUnKTtcblxudmFyIF9zY2FsZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9zY2FsZSk7XG5cbnZhciBfc2hhZG93ID0gcmVxdWlyZSgnLi4vLi4vdmFsdWUtdHlwZXMvc2hhZG93Jyk7XG5cbnZhciBfc2hhZG93MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3NoYWRvdyk7XG5cbnZhciBfcHggPSByZXF1aXJlKCcuLi8uLi92YWx1ZS10eXBlcy9weCcpO1xuXG52YXIgX3B4MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3B4KTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZXhwb3J0cy5kZWZhdWx0ID0ge1xuICAvLyBDb2xvciBwcm9wc1xuICBjb2xvcjogX2NvbG9yMi5kZWZhdWx0LFxuICBiYWNrZ3JvdW5kQ29sb3I6IF9jb2xvcjIuZGVmYXVsdCxcbiAgb3V0bGluZUNvbG9yOiBfY29sb3IyLmRlZmF1bHQsXG4gIGZpbGw6IF9jb2xvcjIuZGVmYXVsdCxcbiAgc3Ryb2tlOiBfY29sb3IyLmRlZmF1bHQsXG5cbiAgLy8gQm9yZGVyIHByb3BzXG4gIGJvcmRlckNvbG9yOiBfY29sb3IyLmRlZmF1bHQsXG4gIGJvcmRlclRvcENvbG9yOiBfY29sb3IyLmRlZmF1bHQsXG4gIGJvcmRlclJpZ2h0Q29sb3I6IF9jb2xvcjIuZGVmYXVsdCxcbiAgYm9yZGVyQm90dG9tQ29sb3I6IF9jb2xvcjIuZGVmYXVsdCxcbiAgYm9yZGVyTGVmdENvbG9yOiBfY29sb3IyLmRlZmF1bHQsXG4gIGJvcmRlclJhZGl1czogX3B4Mi5kZWZhdWx0LFxuXG4gIC8vIFBvc2l0aW9uaW5nXG4gIHdpZHRoOiBfcHgyLmRlZmF1bHQsXG4gIGhlaWdodDogX3B4Mi5kZWZhdWx0LFxuXG4gIC8vIFNoYWRvd3NcbiAgdGV4dFNoYWRvdzogX3NoYWRvdzIuZGVmYXVsdCxcbiAgYm94U2hhZG93OiBfc2hhZG93Mi5kZWZhdWx0LFxuXG4gIC8vIFRyYW5zZm9ybSBwcm9wZXJ0aWVzXG4gIHJvdGF0ZTogX2FuZ2xlMi5kZWZhdWx0LFxuICByb3RhdGVYOiBfYW5nbGUyLmRlZmF1bHQsXG4gIHJvdGF0ZVk6IF9hbmdsZTIuZGVmYXVsdCxcbiAgcm90YXRlWjogX2FuZ2xlMi5kZWZhdWx0LFxuICBzY2FsZTogX3NjYWxlMi5kZWZhdWx0LFxuICBzY2FsZVg6IF9zY2FsZTIuZGVmYXVsdCxcbiAgc2NhbGVZOiBfc2NhbGUyLmRlZmF1bHQsXG4gIHNjYWxlWjogX3NjYWxlMi5kZWZhdWx0LFxuICBza2V3WDogX2FuZ2xlMi5kZWZhdWx0LFxuICBza2V3WTogX2FuZ2xlMi5kZWZhdWx0LFxuICBkaXN0YW5jZTogX3B4Mi5kZWZhdWx0LFxuICB0cmFuc2xhdGVYOiBfcHgyLmRlZmF1bHQsXG4gIHRyYW5zbGF0ZVk6IF9weDIuZGVmYXVsdCxcbiAgdHJhbnNsYXRlWjogX3B4Mi5kZWZhdWx0LFxuICBwZXJzcGVjdGl2ZTogX3B4Mi5kZWZhdWx0LFxuICBvcGFjaXR5OiBfYWxwaGEyLmRlZmF1bHRcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5OeVl5OWhaR0Z3ZEdWeUwyTnpjeTkyWVd4MVpTMTBlWEJsTFcxaGNDNXFjeUpkTENKdVlXMWxjeUk2VzEwc0ltMWhjSEJwYm1keklqb2lPenM3TzBGQlFVRTdPenM3UVVGRFFUczdPenRCUVVOQk96czdPMEZCUTBFN096czdRVUZEUVRzN096dEJRVU5CT3pzN096czdhMEpCUldVN08wRkJSV0lzZDBKQlJtRTdRVUZIWWl4clEwRklZVHRCUVVsaUxDdENRVXBoTzBGQlMySXNkVUpCVEdFN1FVRk5ZaXg1UWtGT1lUczdPMEZCVTJJc09FSkJWR0U3UVVGVllpeHBRMEZXWVR0QlFWZGlMRzFEUVZoaE8wRkJXV0lzYjBOQldtRTdRVUZoWWl4clEwRmlZVHRCUVdOaUxEUkNRV1JoT3pzN1FVRnBRbUlzY1VKQmFrSmhPMEZCYTBKaUxITkNRV3hDWVRzN08wRkJjVUppTERoQ1FYSkNZVHRCUVhOQ1lpdzJRa0YwUW1FN096dEJRWGxDWWl4NVFrRjZRbUU3UVVFd1FtSXNNRUpCTVVKaE8wRkJNa0ppTERCQ1FUTkNZVHRCUVRSQ1lpd3dRa0UxUW1FN1FVRTJRbUlzZDBKQk4wSmhPMEZCT0VKaUxIbENRVGxDWVR0QlFTdENZaXg1UWtFdlFtRTdRVUZuUTJJc2VVSkJhRU5oTzBGQmFVTmlMSGRDUVdwRFlUdEJRV3REWWl4M1FrRnNRMkU3UVVGdFEySXNkMEpCYmtOaE8wRkJiME5pTERCQ1FYQkRZVHRCUVhGRFlpd3dRa0Z5UTJFN1FVRnpRMklzTUVKQmRFTmhPMEZCZFVOaUxESkNRWFpEWVR0QlFYZERZanRCUVhoRFlTeERJaXdpWm1sc1pTSTZJblpoYkhWbExYUjVjR1V0YldGd0xtcHpJaXdpYzI5MWNtTmxVbTl2ZENJNklpOVZjMlZ5Y3k5dFlYUjBjR1Z5Y25rdlUybDBaWE12Y0c5d2JXOTBhVzl1SWl3aWMyOTFjbU5sYzBOdmJuUmxiblFpT2xzaWFXMXdiM0owSUdGdVoyeGxJR1p5YjIwZ0p5NHVMeTR1TDNaaGJIVmxMWFI1Y0dWekwyRnVaMnhsSnp0Y2JtbHRjRzl5ZENCaGJIQm9ZU0JtY205dElDY3VMaTh1TGk5MllXeDFaUzEwZVhCbGN5OWhiSEJvWVNjN1hHNXBiWEJ2Y25RZ1kyOXNiM0lnWm5KdmJTQW5MaTR2TGk0dmRtRnNkV1V0ZEhsd1pYTXZZMjlzYjNJbk8xeHVhVzF3YjNKMElITmpZV3hsSUdaeWIyMGdKeTR1THk0dUwzWmhiSFZsTFhSNWNHVnpMM05qWVd4bEp6dGNibWx0Y0c5eWRDQnphR0ZrYjNjZ1puSnZiU0FuTGk0dkxpNHZkbUZzZFdVdGRIbHdaWE12YzJoaFpHOTNKenRjYm1sdGNHOXlkQ0J3ZUNCbWNtOXRJQ2N1TGk4dUxpOTJZV3gxWlMxMGVYQmxjeTl3ZUNjN1hHNWNibVY0Y0c5eWRDQmtaV1poZFd4MElIdGNiaUFnTHk4Z1EyOXNiM0lnY0hKdmNITmNiaUFnWTI5c2IzSTZJR052Ykc5eUxGeHVJQ0JpWVdOclozSnZkVzVrUTI5c2IzSTZJR052Ykc5eUxGeHVJQ0J2ZFhSc2FXNWxRMjlzYjNJNklHTnZiRzl5TEZ4dUlDQm1hV3hzT2lCamIyeHZjaXhjYmlBZ2MzUnliMnRsT2lCamIyeHZjaXhjYmx4dUlDQXZMeUJDYjNKa1pYSWdjSEp2Y0hOY2JpQWdZbTl5WkdWeVEyOXNiM0k2SUdOdmJHOXlMRnh1SUNCaWIzSmtaWEpVYjNCRGIyeHZjam9nWTI5c2IzSXNYRzRnSUdKdmNtUmxjbEpwWjJoMFEyOXNiM0k2SUdOdmJHOXlMRnh1SUNCaWIzSmtaWEpDYjNSMGIyMURiMnh2Y2pvZ1kyOXNiM0lzWEc0Z0lHSnZjbVJsY2t4bFpuUkRiMnh2Y2pvZ1kyOXNiM0lzWEc0Z0lHSnZjbVJsY2xKaFpHbDFjem9nY0hnc1hHNWNiaUFnTHk4Z1VHOXphWFJwYjI1cGJtZGNiaUFnZDJsa2RHZzZJSEI0TEZ4dUlDQm9aV2xuYUhRNklIQjRMRnh1WEc0Z0lDOHZJRk5vWVdSdmQzTmNiaUFnZEdWNGRGTm9ZV1J2ZHpvZ2MyaGhaRzkzTEZ4dUlDQmliM2hUYUdGa2IzYzZJSE5vWVdSdmR5d2dJQ0JjYmx4dUlDQXZMeUJVY21GdWMyWnZjbTBnY0hKdmNHVnlkR2xsYzF4dUlDQnliM1JoZEdVNklHRnVaMnhsTEZ4dUlDQnliM1JoZEdWWU9pQmhibWRzWlN4Y2JpQWdjbTkwWVhSbFdUb2dZVzVuYkdVc1hHNGdJSEp2ZEdGMFpWbzZJR0Z1WjJ4bExGeHVJQ0J6WTJGc1pUb2djMk5oYkdVc1hHNGdJSE5qWVd4bFdEb2djMk5oYkdVc1hHNGdJSE5qWVd4bFdUb2djMk5oYkdVc1hHNGdJSE5qWVd4bFdqb2djMk5oYkdVc1hHNGdJSE5yWlhkWU9pQmhibWRzWlN4Y2JpQWdjMnRsZDFrNklHRnVaMnhsTEZ4dUlDQmthWE4wWVc1alpUb2djSGdzWEc0Z0lIUnlZVzV6YkdGMFpWZzZJSEI0TEZ4dUlDQjBjbUZ1YzJ4aGRHVlpPaUJ3ZUN4Y2JpQWdkSEpoYm5Oc1lYUmxXam9nY0hnc1hHNGdJSEJsY25Od1pXTjBhWFpsT2lCd2VDeGNiaUFnYjNCaFkybDBlVG9nWVd4d2FHRmNibjA3SWwxOVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvYWRhcHRlci9jc3MvdmFsdWUtdHlwZS1tYXAuanNcbiAqKiBtb2R1bGUgaWQgPSA0MVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX3RyYW5zZm9ybVByb3BzID0gcmVxdWlyZSgnLi90cmFuc2Zvcm0tcHJvcHMnKTtcblxudmFyIF90cmFuc2Zvcm1Qcm9wczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF90cmFuc2Zvcm1Qcm9wcyk7XG5cbnZhciBfcHJlZml4ZXIgPSByZXF1aXJlKCcuL3ByZWZpeGVyJyk7XG5cbnZhciBfcHJlZml4ZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcHJlZml4ZXIpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG52YXIgVFJBTlNMQVRFX1ogPSAndHJhbnNsYXRlWic7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uIChzdGF0ZSwgZGlzYWJsZUhhcmR3YXJlQWNjZWxlcmF0aW9uKSB7XG4gIHZhciBwcm9wZXJ0eVN0cmluZyA9ICcnO1xuICB2YXIgdHJhbnNmb3JtU3RyaW5nID0gJyc7XG4gIHZhciB0cmFuc2Zvcm1IYXNaID0gZmFsc2U7XG5cbiAgZm9yICh2YXIga2V5IGluIHN0YXRlKSB7XG4gICAgaWYgKHN0YXRlLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgIHZhciB2YWx1ZSA9IHN0YXRlW2tleV07XG5cbiAgICAgIGlmIChfdHJhbnNmb3JtUHJvcHMyLmRlZmF1bHRba2V5XSkge1xuICAgICAgICB0cmFuc2Zvcm1TdHJpbmcgKz0ga2V5ICsgJygnICsgdmFsdWUgKyAnKSAnO1xuICAgICAgICB0cmFuc2Zvcm1IYXNaID0ga2V5ID09PSBUUkFOU0xBVEVfWiA/IHRydWUgOiB0cmFuc2Zvcm1IYXNaO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcHJvcGVydHlTdHJpbmcgKz0gJzsnICsgKDAsIF9wcmVmaXhlcjIuZGVmYXVsdCkoa2V5LCB0cnVlKSArICc6JyArIHZhbHVlO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGlmICh0cmFuc2Zvcm1TdHJpbmcgIT09ICcnKSB7XG4gICAgaWYgKCF0cmFuc2Zvcm1IYXNaICYmICFkaXNhYmxlSGFyZHdhcmVBY2NlbGVyYXRpb24pIHtcbiAgICAgIHRyYW5zZm9ybVN0cmluZyArPSBUUkFOU0xBVEVfWiArICcoMHB4KSc7XG4gICAgfVxuXG4gICAgcHJvcGVydHlTdHJpbmcgKz0gJzsnICsgKDAsIF9wcmVmaXhlcjIuZGVmYXVsdCkoJ3RyYW5zZm9ybScsIHRydWUpICsgJzonICsgdHJhbnNmb3JtU3RyaW5nO1xuICB9XG5cbiAgcmV0dXJuIHByb3BlcnR5U3RyaW5nO1xufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbk55WXk5aFpHRndkR1Z5TDJOemN5OWlkV2xzWkM1cWN5SmRMQ0p1WVcxbGN5STZXMTBzSW0xaGNIQnBibWR6SWpvaU96czdPMEZCUVVFN096czdRVUZEUVRzN096czdPMEZCUlVFc1NVRkJUU3hqUVVGakxGbEJRWEJDT3p0clFrRkZaU3hWUVVGRExFdEJRVVFzUlVGQlVTd3lRa0ZCVWl4RlFVRjNRenRCUVVOeVJDeE5RVUZKTEdsQ1FVRnBRaXhGUVVGeVFqdEJRVU5CTEUxQlFVa3NhMEpCUVd0Q0xFVkJRWFJDTzBGQlEwRXNUVUZCU1N4blFrRkJaMElzUzBGQmNFSTdPMEZCUlVFc1QwRkJTeXhKUVVGSkxFZEJRVlFzU1VGQlowSXNTMEZCYUVJc1JVRkJkVUk3UVVGRGNrSXNVVUZCU1N4TlFVRk5MR05CUVU0c1EwRkJjVUlzUjBGQmNrSXNRMEZCU2l4RlFVRXJRanRCUVVNM1FpeFZRVUZOTEZGQlFWRXNUVUZCVFN4SFFVRk9MRU5CUVdRN08wRkJSVUVzVlVGQlNTeDVRa0ZCWlN4SFFVRm1MRU5CUVVvc1JVRkJlVUk3UVVGRGRrSXNNa0pCUVcxQ0xFMUJRVTBzUjBGQlRpeEhRVUZaTEV0QlFWb3NSMEZCYjBJc1NVRkJka003UVVGRFFTeDNRa0ZCYVVJc1VVRkJVU3hYUVVGVUxFZEJRWGRDTEVsQlFYaENMRWRCUVN0Q0xHRkJRUzlETzBGQlJVUXNUMEZLUkN4TlFVbFBPMEZCUTB3c01FSkJRV3RDTEUxQlFVMHNkMEpCUVZNc1IwRkJWQ3hGUVVGakxFbEJRV1FzUTBGQlRpeEhRVUUwUWl4SFFVRTFRaXhIUVVGclF5eExRVUZ3UkR0QlFVTkVPMEZCUTBZN1FVRkRSanM3UVVGRlJDeE5RVUZKTEc5Q1FVRnZRaXhGUVVGNFFpeEZRVUUwUWp0QlFVTXhRaXhSUVVGSkxFTkJRVU1zWVVGQlJDeEpRVUZyUWl4RFFVRkRMREpDUVVGMlFpeEZRVUZ2UkR0QlFVTnNSQ3g1UWtGQmJVSXNZMEZCWXl4UFFVRnFRenRCUVVORU96dEJRVVZFTEhOQ1FVRnJRaXhOUVVGTkxIZENRVUZUTEZkQlFWUXNSVUZCYzBJc1NVRkJkRUlzUTBGQlRpeEhRVUZ2UXl4SFFVRndReXhIUVVFd1F5eGxRVUUxUkR0QlFVTkVPenRCUVVWRUxGTkJRVThzWTBGQlVEdEJRVU5FTEVNaUxDSm1hV3hsSWpvaVluVnBiR1F1YW5NaUxDSnpiM1Z5WTJWU2IyOTBJam9pTDFWelpYSnpMMjFoZEhSd1pYSnllUzlUYVhSbGN5OXdiM0J0YjNScGIyNGlMQ0p6YjNWeVkyVnpRMjl1ZEdWdWRDSTZXeUpwYlhCdmNuUWdkSEpoYm5ObWIzSnRVSEp2Y0hNZ1puSnZiU0FuTGk5MGNtRnVjMlp2Y20wdGNISnZjSE1uTzF4dWFXMXdiM0owSUhCeVpXWnBlR1Z5SUdaeWIyMGdKeTR2Y0hKbFptbDRaWEluTzF4dVhHNWpiMjV6ZENCVVVrRk9VMHhCVkVWZldpQTlJQ2QwY21GdWMyeGhkR1ZhSnp0Y2JseHVaWGh3YjNKMElHUmxabUYxYkhRZ0tITjBZWFJsTENCa2FYTmhZbXhsU0dGeVpIZGhjbVZCWTJObGJHVnlZWFJwYjI0cElEMCtJSHRjYmlBZ2JHVjBJSEJ5YjNCbGNuUjVVM1J5YVc1bklEMGdKeWM3WEc0Z0lHeGxkQ0IwY21GdWMyWnZjbTFUZEhKcGJtY2dQU0FuSnp0Y2JpQWdiR1YwSUhSeVlXNXpabTl5YlVoaGMxb2dQU0JtWVd4elpUdGNibHh1SUNCbWIzSWdLR3hsZENCclpYa2dhVzRnYzNSaGRHVXBJSHRjYmlBZ0lDQnBaaUFvYzNSaGRHVXVhR0Z6VDNkdVVISnZjR1Z5ZEhrb2EyVjVLU2tnZTF4dUlDQWdJQ0FnWTI5dWMzUWdkbUZzZFdVZ1BTQnpkR0YwWlZ0clpYbGRPMXh1WEc0Z0lDQWdJQ0JwWmlBb2RISmhibk5tYjNKdFVISnZjSE5iYTJWNVhTa2dlMXh1SUNBZ0lDQWdJQ0IwY21GdWMyWnZjbTFUZEhKcGJtY2dLejBnYTJWNUlDc2dKeWduSUNzZ2RtRnNkV1VnS3lBbktTQW5PMXh1SUNBZ0lDQWdJQ0IwY21GdWMyWnZjbTFJWVhOYUlEMGdLR3RsZVNBOVBUMGdWRkpCVGxOTVFWUkZYMW9wSUQ4Z2RISjFaU0E2SUhSeVlXNXpabTl5YlVoaGMxbzdYRzVjYmlBZ0lDQWdJSDBnWld4elpTQjdYRzRnSUNBZ0lDQWdJSEJ5YjNCbGNuUjVVM1J5YVc1bklDczlJQ2M3SnlBcklIQnlaV1pwZUdWeUtHdGxlU3dnZEhKMVpTa2dLeUFuT2ljZ0t5QjJZV3gxWlR0Y2JpQWdJQ0FnSUgxY2JpQWdJQ0I5WEc0Z0lIMWNibHh1SUNCcFppQW9kSEpoYm5ObWIzSnRVM1J5YVc1bklDRTlQU0FuSnlrZ2UxeHVJQ0FnSUdsbUlDZ2hkSEpoYm5ObWIzSnRTR0Z6V2lBbUppQWhaR2x6WVdKc1pVaGhjbVIzWVhKbFFXTmpaV3hsY21GMGFXOXVLU0I3WEc0Z0lDQWdJQ0IwY21GdWMyWnZjbTFUZEhKcGJtY2dLejBnVkZKQlRsTk1RVlJGWDFvZ0t5QW5LREJ3ZUNrbk8xeHVJQ0FnSUgxY2JseHVJQ0FnSUhCeWIzQmxjblI1VTNSeWFXNW5JQ3M5SUNjN0p5QXJJSEJ5WldacGVHVnlLQ2QwY21GdWMyWnZjbTBuTENCMGNuVmxLU0FySUNjNkp5QXJJSFJ5WVc1elptOXliVk4wY21sdVp6dGNiaUFnZlZ4dVhHNGdJSEpsZEhWeWJpQndjbTl3WlhKMGVWTjBjbWx1Wnp0Y2JuMDdJbDE5XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9hZGFwdGVyL2Nzcy9idWlsZC5qc1xuICoqIG1vZHVsZSBpZCA9IDQyXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfdXRpbHMgPSByZXF1aXJlKCcuLi8uLi9pbmMvdXRpbHMnKTtcblxudmFyIGNhbWVsQ2FjaGUgPSB7fTtcbnZhciBkYXNoQ2FjaGUgPSB7fTtcbnZhciBwcmVmaXhlcyA9IFsnV2Via2l0JywgJ01veicsICdPJywgJ21zJywgJyddO1xudmFyIG51bVByZWZpeGVzID0gcHJlZml4ZXMubGVuZ3RoO1xudmFyIHRlc3RFbGVtZW50ID0gdm9pZCAwO1xuXG4vKlxuICBUZXN0IHN0eWxlIHByb3BlcnR5IGZvciBwcmVmaXhlZCB2ZXJzaW9uXG4gIFxuICBAcGFyYW0gW3N0cmluZ106IFN0eWxlIHByb3BlcnR5XG4gIEByZXR1cm4gW3N0cmluZ106IENhY2hlZCBwcm9wZXJ0eSBuYW1lXG4qL1xudmFyIHRlc3RQcmVmaXggPSBmdW5jdGlvbiAoa2V5KSB7XG4gIHRlc3RFbGVtZW50ID0gdGVzdEVsZW1lbnQgfHwgZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBudW1QcmVmaXhlczsgaSsrKSB7XG4gICAgdmFyIHByZWZpeCA9IHByZWZpeGVzW2ldO1xuICAgIHZhciBub1ByZWZpeCA9IHByZWZpeCA9PT0gJyc7XG4gICAgdmFyIHByZWZpeGVkUHJvcGVydHlOYW1lID0gbm9QcmVmaXggPyBrZXkgOiBwcmVmaXggKyBrZXkuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyBrZXkuc2xpY2UoMSk7XG5cbiAgICBpZiAocHJlZml4ZWRQcm9wZXJ0eU5hbWUgaW4gdGVzdEVsZW1lbnQuc3R5bGUpIHtcbiAgICAgIGNhbWVsQ2FjaGVba2V5XSA9IHByZWZpeGVkUHJvcGVydHlOYW1lO1xuICAgICAgZGFzaENhY2hlW2tleV0gPSAnJyArIChub1ByZWZpeCA/ICcnIDogJy0nKSArICgwLCBfdXRpbHMuY2FtZWxUb0Rhc2gpKHByZWZpeGVkUHJvcGVydHlOYW1lKTtcbiAgICB9XG4gIH1cbn07XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uIChrZXksIGFzRGFzaENhc2UpIHtcbiAgdmFyIGNhY2hlID0gYXNEYXNoQ2FzZSA/IGRhc2hDYWNoZSA6IGNhbWVsQ2FjaGU7XG5cbiAgaWYgKCFjYWNoZVtrZXldKSB7XG4gICAgdGVzdFByZWZpeChrZXkpO1xuICB9XG5cbiAgcmV0dXJuIGNhY2hlW2tleV07XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluTnlZeTloWkdGd2RHVnlMMk56Y3k5d2NtVm1hWGhsY2k1cWN5SmRMQ0p1WVcxbGN5STZXMTBzSW0xaGNIQnBibWR6SWpvaU96czdPMEZCUVVFN08wRkJSVUVzU1VGQlRTeGhRVUZoTEVWQlFXNUNPMEZCUTBFc1NVRkJUU3haUVVGWkxFVkJRV3hDTzBGQlEwRXNTVUZCVFN4WFFVRlhMRU5CUVVNc1VVRkJSQ3hGUVVGVkxFdEJRVllzUlVGQlowSXNSMEZCYUVJc1JVRkJiMElzU1VGQmNFSXNSVUZCTUVJc1JVRkJNVUlzUTBGQmFrSTdRVUZEUVN4SlFVRk5MR05CUVdNc1UwRkJVeXhOUVVFM1FqdEJRVU5CTEVsQlFVa3NiMEpCUVVvN096czdPenM3TzBGQlVVRXNTVUZCVFN4aFFVRmhMRlZCUVVNc1IwRkJSQ3hGUVVGVE8wRkJRekZDTEdkQ1FVRmpMR1ZCUVdVc1UwRkJVeXhoUVVGVUxFTkJRWFZDTEV0QlFYWkNMRU5CUVRkQ096dEJRVVZCTEU5QlFVc3NTVUZCU1N4SlFVRkpMRU5CUVdJc1JVRkJaMElzU1VGQlNTeFhRVUZ3UWl4RlFVRnBReXhIUVVGcVF5eEZRVUZ6UXp0QlFVTndReXhSUVVGTkxGTkJRVk1zVTBGQlV5eERRVUZVTEVOQlFXWTdRVUZEUVN4UlFVRk5MRmRCUVZrc1YwRkJWeXhGUVVFM1FqdEJRVU5CTEZGQlFVMHNkVUpCUVhWQ0xGZEJRVmNzUjBGQldDeEhRVUZwUWl4VFFVRlRMRWxCUVVrc1RVRkJTaXhEUVVGWExFTkJRVmdzUlVGQll5eFhRVUZrTEVWQlFWUXNSMEZCZFVNc1NVRkJTU3hMUVVGS0xFTkJRVlVzUTBGQlZpeERRVUZ5UmpzN1FVRkZRU3hSUVVGSkxIZENRVUYzUWl4WlFVRlpMRXRCUVhoRExFVkJRU3RETzBGQlF6ZERMR2xDUVVGWExFZEJRVmdzU1VGQmEwSXNiMEpCUVd4Q08wRkJRMEVzWjBKQlFWVXNSMEZCVml4VlFVRnhRaXhYUVVGWExFVkJRVmdzUjBGQlowSXNSMEZCY2tNc1NVRkJORU1zZDBKQlFWa3NiMEpCUVZvc1EwRkJOVU03UVVGRFJEdEJRVU5HTzBGQlEwWXNRMEZpUkRzN2EwSkJaV1VzVlVGQlF5eEhRVUZFTEVWQlFVMHNWVUZCVGl4RlFVRnhRanRCUVVOc1F5eE5RVUZOTEZGQlFWRXNZVUZCWVN4VFFVRmlMRWRCUVhsQ0xGVkJRWFpET3p0QlFVVkJMRTFCUVVrc1EwRkJReXhOUVVGTkxFZEJRVTRzUTBGQlRDeEZRVUZwUWp0QlFVTm1MR1ZCUVZjc1IwRkJXRHRCUVVORU96dEJRVVZFTEZOQlFVOHNUVUZCVFN4SFFVRk9MRU5CUVZBN1FVRkRSQ3hESWl3aVptbHNaU0k2SW5CeVpXWnBlR1Z5TG1weklpd2ljMjkxY21ObFVtOXZkQ0k2SWk5VmMyVnljeTl0WVhSMGNHVnljbmt2VTJsMFpYTXZjRzl3Ylc5MGFXOXVJaXdpYzI5MWNtTmxjME52Ym5SbGJuUWlPbHNpYVcxd2IzSjBJSHNnWTJGdFpXeFViMFJoYzJnZ2ZTQm1jbTl0SUNjdUxpOHVMaTlwYm1NdmRYUnBiSE1uTzF4dVhHNWpiMjV6ZENCallXMWxiRU5oWTJobElEMGdlMzA3WEc1amIyNXpkQ0JrWVhOb1EyRmphR1VnUFNCN2ZUdGNibU52Ym5OMElIQnlaV1pwZUdWeklEMGdXeWRYWldKcmFYUW5MQ2ROYjNvbkxDZFBKeXduYlhNbkxDQW5KMTA3WEc1amIyNXpkQ0J1ZFcxUWNtVm1hWGhsY3lBOUlIQnlaV1pwZUdWekxteGxibWQwYUR0Y2JteGxkQ0IwWlhOMFJXeGxiV1Z1ZER0Y2JseHVMeXBjYmlBZ1ZHVnpkQ0J6ZEhsc1pTQndjbTl3WlhKMGVTQm1iM0lnY0hKbFptbDRaV1FnZG1WeWMybHZibHh1SUNCY2JpQWdRSEJoY21GdElGdHpkSEpwYm1kZE9pQlRkSGxzWlNCd2NtOXdaWEowZVZ4dUlDQkFjbVYwZFhKdUlGdHpkSEpwYm1kZE9pQkRZV05vWldRZ2NISnZjR1Z5ZEhrZ2JtRnRaVnh1S2k5Y2JtTnZibk4wSUhSbGMzUlFjbVZtYVhnZ1BTQW9hMlY1S1NBOVBpQjdYRzRnSUhSbGMzUkZiR1Z0Wlc1MElEMGdkR1Z6ZEVWc1pXMWxiblFnZkh3Z1pHOWpkVzFsYm5RdVkzSmxZWFJsUld4bGJXVnVkQ2duWkdsMkp5azdYRzVjYmlBZ1ptOXlJQ2hzWlhRZ2FTQTlJREE3SUdrZ1BDQnVkVzFRY21WbWFYaGxjenNnYVNzcktTQjdYRzRnSUNBZ1kyOXVjM1FnY0hKbFptbDRJRDBnY0hKbFptbDRaWE5iYVYwN1hHNGdJQ0FnWTI5dWMzUWdibTlRY21WbWFYZ2dQU0FvY0hKbFptbDRJRDA5UFNBbkp5azdYRzRnSUNBZ1kyOXVjM1FnY0hKbFptbDRaV1JRY205d1pYSjBlVTVoYldVZ1BTQnViMUJ5WldacGVDQS9JR3RsZVNBNklIQnlaV1pwZUNBcklHdGxlUzVqYUdGeVFYUW9NQ2t1ZEc5VmNIQmxja05oYzJVb0tTQXJJR3RsZVM1emJHbGpaU2d4S1R0Y2JseHVJQ0FnSUdsbUlDaHdjbVZtYVhobFpGQnliM0JsY25SNVRtRnRaU0JwYmlCMFpYTjBSV3hsYldWdWRDNXpkSGxzWlNrZ2UxeHVJQ0FnSUNBZ1kyRnRaV3hEWVdOb1pWdHJaWGxkSUQwZ2NISmxabWw0WldSUWNtOXdaWEowZVU1aGJXVTdYRzRnSUNBZ0lDQmtZWE5vUTJGamFHVmJhMlY1WFNBOUlHQWtleWh1YjFCeVpXWnBlQ0EvSUNjbklEb2dKeTBuS1gwa2UyTmhiV1ZzVkc5RVlYTm9LSEJ5WldacGVHVmtVSEp2Y0dWeWRIbE9ZVzFsS1gxZ08xeHVJQ0FnSUgxY2JpQWdmVnh1ZlR0Y2JseHVaWGh3YjNKMElHUmxabUYxYkhRZ0tHdGxlU3dnWVhORVlYTm9RMkZ6WlNrZ1BUNGdlMXh1SUNCamIyNXpkQ0JqWVdOb1pTQTlJR0Z6UkdGemFFTmhjMlVnUHlCa1lYTm9RMkZqYUdVZ09pQmpZVzFsYkVOaFkyaGxPMXh1WEc0Z0lHbG1JQ2doWTJGamFHVmJhMlY1WFNrZ2UxeHVJQ0FnSUhSbGMzUlFjbVZtYVhnb2EyVjVLVHRjYmlBZ2ZWeHVYRzRnSUhKbGRIVnliaUJqWVdOb1pWdHJaWGxkTzF4dWZUdGNiaUpkZlE9PVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvYWRhcHRlci9jc3MvcHJlZml4ZXIuanNcbiAqKiBtb2R1bGUgaWQgPSA0M1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX2RpY3Rpb25hcnkgPSByZXF1aXJlKCcuLi8uLi92YWx1ZS10eXBlcy9zZXR0aW5ncy9kaWN0aW9uYXJ5Jyk7XG5cbnZhciB0cmFuc2Zvcm1Qcm9wcyA9IHt9O1xuXG52YXIgU0NBTEUgPSAnc2NhbGUnO1xudmFyIFJPVEFURSA9ICdyb3RhdGUnO1xudmFyIFRSQU5TRk9STV9QRVJTUEVDVElWRSA9ICd0cmFuc2Zvcm1QZXJzcGVjdGl2ZSc7XG52YXIgVEVSTVMgPSBbJ3RyYW5zbGF0ZScsIFNDQUxFLCBST1RBVEUsICdza2V3JywgVFJBTlNGT1JNX1BFUlNQRUNUSVZFXTtcblxudHJhbnNmb3JtUHJvcHNbUk9UQVRFXSA9IHRyYW5zZm9ybVByb3BzW1NDQUxFXSA9IHRyYW5zZm9ybVByb3BzW1RSQU5TRk9STV9QRVJTUEVDVElWRV0gPSB0cnVlO1xuXG5URVJNUy5mb3JFYWNoKGZ1bmN0aW9uICh0ZXJtKSB7XG4gIHJldHVybiBfZGljdGlvbmFyeS5heGVzLmZvckVhY2goZnVuY3Rpb24gKGF4aXMpIHtcbiAgICByZXR1cm4gdHJhbnNmb3JtUHJvcHNbdGVybSArIGF4aXNdID0gdHJ1ZTtcbiAgfSk7XG59KTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gdHJhbnNmb3JtUHJvcHM7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5OeVl5OWhaR0Z3ZEdWeUwyTnpjeTkwY21GdWMyWnZjbTB0Y0hKdmNITXVhbk1pWFN3aWJtRnRaWE1pT2x0ZExDSnRZWEJ3YVc1bmN5STZJanM3T3p0QlFVRkJPenRCUVVWQkxFbEJRVWtzYVVKQlFXbENMRVZCUVhKQ096dEJRVVZCTEVsQlFVMHNVVUZCVVN4UFFVRmtPMEZCUTBFc1NVRkJUU3hUUVVGVExGRkJRV1k3UVVGRFFTeEpRVUZOTEhkQ1FVRjNRaXh6UWtGQk9VSTdRVUZEUVN4SlFVRk5MRkZCUVZFc1EwRkJReXhYUVVGRUxFVkJRV01zUzBGQlpDeEZRVUZ4UWl4TlFVRnlRaXhGUVVFMlFpeE5RVUUzUWl4RlFVRnhReXh4UWtGQmNrTXNRMEZCWkRzN1FVRkZRU3hsUVVGbExFMUJRV1lzU1VGQmVVSXNaVUZCWlN4TFFVRm1MRWxCUVhkQ0xHVkJRV1VzY1VKQlFXWXNTVUZCZDBNc1NVRkJla1k3TzBGQlJVRXNUVUZCVFN4UFFVRk9MRU5CUVdNc1ZVRkJReXhKUVVGRU8wRkJRVUVzVTBGQlZTeHBRa0ZCU3l4UFFVRk1MRU5CUVdFc1ZVRkJReXhKUVVGRU8wRkJRVUVzVjBGQlZTeGxRVUZsTEU5QlFVOHNTVUZCZEVJc1NVRkJPRUlzU1VGQmVFTTdRVUZCUVN4SFFVRmlMRU5CUVZZN1FVRkJRU3hEUVVGa096dHJRa0ZGWlN4aklpd2labWxzWlNJNkluUnlZVzV6Wm05eWJTMXdjbTl3Y3k1cWN5SXNJbk52ZFhKalpWSnZiM1FpT2lJdlZYTmxjbk12YldGMGRIQmxjbko1TDFOcGRHVnpMM0J2Y0cxdmRHbHZiaUlzSW5OdmRYSmpaWE5EYjI1MFpXNTBJanBiSW1sdGNHOXlkQ0I3SUdGNFpYTWdmU0JtY205dElDY3VMaTh1TGk5MllXeDFaUzEwZVhCbGN5OXpaWFIwYVc1bmN5OWthV04wYVc5dVlYSjVKenRjYmx4dWJHVjBJSFJ5WVc1elptOXliVkJ5YjNCeklEMGdlMzA3WEc1Y2JtTnZibk4wSUZORFFVeEZJRDBnSjNOallXeGxKenRjYm1OdmJuTjBJRkpQVkVGVVJTQTlJQ2R5YjNSaGRHVW5PMXh1WTI5dWMzUWdWRkpCVGxOR1QxSk5YMUJGVWxOUVJVTlVTVlpGSUQwZ0ozUnlZVzV6Wm05eWJWQmxjbk53WldOMGFYWmxKenRjYm1OdmJuTjBJRlJGVWsxVElEMGdXeWQwY21GdWMyeGhkR1VuTENCVFEwRk1SU3dnVWs5VVFWUkZMQ0FuYzJ0bGR5Y3NJRlJTUVU1VFJrOVNUVjlRUlZKVFVFVkRWRWxXUlYwN1hHNWNiblJ5WVc1elptOXliVkJ5YjNCelcxSlBWRUZVUlYwZ1BTQjBjbUZ1YzJadmNtMVFjbTl3YzF0VFEwRk1SVjBnUFNCMGNtRnVjMlp2Y20xUWNtOXdjMXRVVWtGT1UwWlBVazFmVUVWU1UxQkZRMVJKVmtWZElEMGdkSEoxWlR0Y2JseHVWRVZTVFZNdVptOXlSV0ZqYUNnb2RHVnliU2tnUFQ0Z1lYaGxjeTVtYjNKRllXTm9LQ2hoZUdsektTQTlQaUIwY21GdWMyWnZjbTFRY205d2MxdDBaWEp0SUNzZ1lYaHBjMTBnUFNCMGNuVmxLU2s3WEc1Y2JtVjRjRzl5ZENCa1pXWmhkV3gwSUhSeVlXNXpabTl5YlZCeWIzQnpPeUpkZlE9PVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvYWRhcHRlci9jc3MvdHJhbnNmb3JtLXByb3BzLmpzXG4gKiogbW9kdWxlIGlkID0gNDRcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF9hbHBoYSA9IHJlcXVpcmUoJy4uLy4uL3ZhbHVlLXR5cGVzL2FscGhhJyk7XG5cbnZhciBfYWxwaGEyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfYWxwaGEpO1xuXG52YXIgX2NvbG9yID0gcmVxdWlyZSgnLi4vLi4vdmFsdWUtdHlwZXMvY29sb3InKTtcblxudmFyIF9jb2xvcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jb2xvcik7XG5cbnZhciBfY29tcGxleCA9IHJlcXVpcmUoJy4uLy4uL3ZhbHVlLXR5cGVzL2NvbXBsZXgnKTtcblxudmFyIF9jb21wbGV4MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NvbXBsZXgpO1xuXG52YXIgX3NjYWxlID0gcmVxdWlyZSgnLi4vLi4vdmFsdWUtdHlwZXMvc2NhbGUnKTtcblxudmFyIF9zY2FsZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9zY2FsZSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmV4cG9ydHMuZGVmYXVsdCA9IHtcbiAgZmlsbDogX2NvbG9yMi5kZWZhdWx0LFxuICBzdHJva2U6IF9jb2xvcjIuZGVmYXVsdCxcbiAgc2NhbGU6IF9zY2FsZTIuZGVmYXVsdCxcbiAgc2NhbGVYOiBfc2NhbGUyLmRlZmF1bHQsXG4gIHNjYWxlWTogX3NjYWxlMi5kZWZhdWx0LFxuICBkOiBfY29tcGxleDIuZGVmYXVsdCxcbiAgcG9pbnRzOiBfY29tcGxleDIuZGVmYXVsdCxcbiAgb3BhY2l0eTogX2FscGhhMi5kZWZhdWx0LFxuICBmaWxsT3BhY2l0eTogX2FscGhhMi5kZWZhdWx0LFxuICBzdHJva2VPcGFjaXR5OiBfYWxwaGEyLmRlZmF1bHRcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5OeVl5OWhaR0Z3ZEdWeUwzTjJaeTkyWVd4MVpTMTBlWEJsTFcxaGNDNXFjeUpkTENKdVlXMWxjeUk2VzEwc0ltMWhjSEJwYm1keklqb2lPenM3TzBGQlFVRTdPenM3UVVGRFFUczdPenRCUVVOQk96czdPMEZCUTBFN096czdPenRyUWtGRlpUdEJRVU5pTEhWQ1FVUmhPMEZCUldJc2VVSkJSbUU3UVVGSFlpeDNRa0ZJWVR0QlFVbGlMSGxDUVVwaE8wRkJTMklzZVVKQlRHRTdRVUZOWWl4elFrRk9ZVHRCUVU5aUxESkNRVkJoTzBGQlVXSXNNRUpCVW1FN1FVRlRZaXc0UWtGVVlUdEJRVlZpTzBGQlZtRXNReUlzSW1acGJHVWlPaUoyWVd4MVpTMTBlWEJsTFcxaGNDNXFjeUlzSW5OdmRYSmpaVkp2YjNRaU9pSXZWWE5sY25NdmJXRjBkSEJsY25KNUwxTnBkR1Z6TDNCdmNHMXZkR2x2YmlJc0luTnZkWEpqWlhORGIyNTBaVzUwSWpwYkltbHRjRzl5ZENCaGJIQm9ZU0JtY205dElDY3VMaTh1TGk5MllXeDFaUzEwZVhCbGN5OWhiSEJvWVNjN1hHNXBiWEJ2Y25RZ1kyOXNiM0lnWm5KdmJTQW5MaTR2TGk0dmRtRnNkV1V0ZEhsd1pYTXZZMjlzYjNJbk8xeHVhVzF3YjNKMElHTnZiWEJzWlhnZ1puSnZiU0FuTGk0dkxpNHZkbUZzZFdVdGRIbHdaWE12WTI5dGNHeGxlQ2M3WEc1cGJYQnZjblFnYzJOaGJHVWdabkp2YlNBbkxpNHZMaTR2ZG1Gc2RXVXRkSGx3WlhNdmMyTmhiR1VuTzF4dVhHNWxlSEJ2Y25RZ1pHVm1ZWFZzZENCN1hHNGdJR1pwYkd3NklHTnZiRzl5TEZ4dUlDQnpkSEp2YTJVNklHTnZiRzl5TEZ4dUlDQnpZMkZzWlRvZ2MyTmhiR1VzWEc0Z0lITmpZV3hsV0RvZ2MyTmhiR1VzWEc0Z0lITmpZV3hsV1RvZ2MyTmhiR1VzWEc0Z0lHUTZJR052YlhCc1pYZ3NYRzRnSUhCdmFXNTBjem9nWTI5dGNHeGxlQ3hjYmlBZ2IzQmhZMmwwZVRvZ1lXeHdhR0VzWEc0Z0lHWnBiR3hQY0dGamFYUjVPaUJoYkhCb1lTeGNiaUFnYzNSeWIydGxUM0JoWTJsMGVUb2dZV3h3YUdGY2JuMDdJbDE5XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9hZGFwdGVyL3N2Zy92YWx1ZS10eXBlLW1hcC5qc1xuICoqIG1vZHVsZSBpZCA9IDQ1XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzLmRlZmF1bHQgPSBidWlsZDtcblxudmFyIF91dGlscyA9IHJlcXVpcmUoJy4uLy4uL2luYy91dGlscycpO1xuXG52YXIgX3RyYW5zZm9ybVByb3BzID0gcmVxdWlyZSgnLi4vY3NzL3RyYW5zZm9ybS1wcm9wcycpO1xuXG52YXIgX3RyYW5zZm9ybVByb3BzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3RyYW5zZm9ybVByb3BzKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxudmFyIFpFUk9fTk9UX1pFUk8gPSAwLjAwMDE7XG5cbmZ1bmN0aW9uIGJ1aWxkKHN0YXRlLCBkYXRhKSB7XG4gIHZhciBoYXNUcmFuc2Zvcm0gPSBmYWxzZTtcbiAgdmFyIHByb3BzID0ge307XG4gIHZhciBzY2FsZSA9IHN0YXRlLnNjYWxlICE9PSB1bmRlZmluZWQgPyBzdGF0ZS5zY2FsZSB8fCBaRVJPX05PVF9aRVJPIDogc3RhdGUuc2NhbGVYIHx8IDE7XG4gIHZhciBzY2FsZVkgPSBzdGF0ZS5zY2FsZVkgIT09IHVuZGVmaW5lZCA/IHN0YXRlLnNjYWxlWSB8fCBaRVJPX05PVF9aRVJPIDogc2NhbGUgfHwgMTtcbiAgdmFyIHRyYW5zZm9ybU9yaWdpblggPSBkYXRhLndpZHRoICogKChzdGF0ZS5vcmlnaW5YIHx8IDUwKSAvIDEwMCkgKyBkYXRhLng7XG4gIHZhciB0cmFuc2Zvcm1PcmlnaW5ZID0gZGF0YS5oZWlnaHQgKiAoKHN0YXRlLm9yaWdpblkgfHwgNTApIC8gMTAwKSArIGRhdGEueTtcbiAgdmFyIHNjYWxlVHJhbnNmb3JtWCA9IC10cmFuc2Zvcm1PcmlnaW5YICogKHNjYWxlICogMSk7XG4gIHZhciBzY2FsZVRyYW5zZm9ybVkgPSAtdHJhbnNmb3JtT3JpZ2luWSAqIChzY2FsZVkgKiAxKTtcbiAgdmFyIHNjYWxlUmVwbGFjZVggPSB0cmFuc2Zvcm1PcmlnaW5YIC8gc2NhbGU7XG4gIHZhciBzY2FsZVJlcGxhY2VZID0gdHJhbnNmb3JtT3JpZ2luWSAvIHNjYWxlWTtcbiAgdmFyIHRyYW5zZm9ybSA9IHtcbiAgICB0cmFuc2xhdGU6ICd0cmFuc2xhdGUoJyArIHN0YXRlLnRyYW5zbGF0ZVggKyAnLCAnICsgc3RhdGUudHJhbnNsYXRlWSArICcpICcsXG4gICAgc2NhbGU6ICd0cmFuc2xhdGUoJyArIHNjYWxlVHJhbnNmb3JtWCArICcsICcgKyBzY2FsZVRyYW5zZm9ybVkgKyAnKSBzY2FsZSgnICsgc2NhbGUgKyAnLCAnICsgc2NhbGVZICsgJykgdHJhbnNsYXRlKCcgKyBzY2FsZVJlcGxhY2VYICsgJywgJyArIHNjYWxlUmVwbGFjZVkgKyAnKSAnLFxuICAgIHJvdGF0ZTogJ3JvdGF0ZSgnICsgc3RhdGUucm90YXRlICsgJywgJyArIHRyYW5zZm9ybU9yaWdpblggKyAnLCAnICsgdHJhbnNmb3JtT3JpZ2luWSArICcpICcsXG4gICAgc2tld1g6ICdza2V3WCgnICsgc3RhdGUuc2tld1ggKyAnKSAnLFxuICAgIHNrZXdZOiAnc2tld1koJyArIHN0YXRlLnNrZXdZICsgJykgJ1xuICB9O1xuXG4gIGZvciAodmFyIGtleSBpbiBzdGF0ZSkge1xuICAgIGlmIChzdGF0ZS5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICBpZiAoX3RyYW5zZm9ybVByb3BzMi5kZWZhdWx0W2tleV0pIHtcbiAgICAgICAgaGFzVHJhbnNmb3JtID0gdHJ1ZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHByb3BzWygwLCBfdXRpbHMuY2FtZWxUb0Rhc2gpKGtleSldID0gc3RhdGVba2V5XTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBpZiAoaGFzVHJhbnNmb3JtKSB7XG4gICAgcHJvcHMudHJhbnNmb3JtID0gJyc7XG5cbiAgICBmb3IgKHZhciBfa2V5IGluIHRyYW5zZm9ybSkge1xuICAgICAgaWYgKHRyYW5zZm9ybS5oYXNPd25Qcm9wZXJ0eShfa2V5KSkge1xuICAgICAgICB2YXIgZGVmYXVsdFZhbHVlID0gX2tleSA9PT0gJ3NjYWxlJyA/ICcxJyA6ICcwJztcbiAgICAgICAgcHJvcHMudHJhbnNmb3JtICs9IHRyYW5zZm9ybVtfa2V5XS5yZXBsYWNlKC91bmRlZmluZWQvZywgZGVmYXVsdFZhbHVlKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gcHJvcHM7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5OeVl5OWhaR0Z3ZEdWeUwzTjJaeTlpZFdsc1pDNXFjeUpkTENKdVlXMWxjeUk2VzEwc0ltMWhjSEJwYm1keklqb2lPenM3YTBKQlMzZENMRXM3TzBGQlRIaENPenRCUVVOQk96czdPenM3UVVGRlFTeEpRVUZOTEdkQ1FVRm5RaXhOUVVGMFFqczdRVUZGWlN4VFFVRlRMRXRCUVZRc1EwRkJaU3hMUVVGbUxFVkJRWE5DTEVsQlFYUkNMRVZCUVRSQ08wRkJRM3BETEUxQlFVa3NaVUZCWlN4TFFVRnVRanRCUVVOQkxFMUJRVTBzVVVGQlVTeEZRVUZrTzBGQlEwRXNUVUZCVFN4UlFVRlJMRTFCUVUwc1MwRkJUaXhMUVVGblFpeFRRVUZvUWl4SFFVRTBRaXhOUVVGTkxFdEJRVTRzU1VGQlpTeGhRVUV6UXl4SFFVRXlSQ3hOUVVGTkxFMUJRVTRzU1VGQlowSXNRMEZCZWtZN1FVRkRRU3hOUVVGTkxGTkJRVk1zVFVGQlRTeE5RVUZPTEV0QlFXbENMRk5CUVdwQ0xFZEJRVFpDTEUxQlFVMHNUVUZCVGl4SlFVRm5RaXhoUVVFM1F5eEhRVUUyUkN4VFFVRlRMRU5CUVhKR08wRkJRMEVzVFVGQlRTeHRRa0ZCYlVJc1MwRkJTeXhMUVVGTUxFbEJRV01zUTBGQlF5eE5RVUZOTEU5QlFVNHNTVUZCYVVJc1JVRkJiRUlzU1VGQmQwSXNSMEZCZEVNc1NVRkJOa01zUzBGQlN5eERRVUV6UlR0QlFVTkJMRTFCUVUwc2JVSkJRVzFDTEV0QlFVc3NUVUZCVEN4SlFVRmxMRU5CUVVNc1RVRkJUU3hQUVVGT0xFbEJRV2xDTEVWQlFXeENMRWxCUVhkQ0xFZEJRWFpETEVsQlFUaERMRXRCUVVzc1EwRkJOVVU3UVVGRFFTeE5RVUZOTEd0Q1FVRnJRaXhEUVVGRkxHZENRVUZHTEVsQlFYTkNMRkZCUVZFc1EwRkJPVUlzUTBGQmVFSTdRVUZEUVN4TlFVRk5MR3RDUVVGclFpeERRVUZGTEdkQ1FVRkdMRWxCUVhOQ0xGTkJRVk1zUTBGQkwwSXNRMEZCZUVJN1FVRkRRU3hOUVVGTkxHZENRVUZuUWl4dFFrRkJiVUlzUzBGQmVrTTdRVUZEUVN4TlFVRk5MR2RDUVVGblFpeHRRa0ZCYlVJc1RVRkJla003UVVGRFFTeE5RVUZOTEZsQlFWazdRVUZEYUVJc09FSkJRWGRDTEUxQlFVMHNWVUZCT1VJc1ZVRkJOa01zVFVGQlRTeFZRVUZ1UkN4UFFVUm5RanRCUVVWb1Fpd3dRa0ZCYjBJc1pVRkJjRUlzVlVGQmQwTXNaVUZCZUVNc1owSkJRV3RGTEV0QlFXeEZMRlZCUVRSRkxFMUJRVFZGTEc5Q1FVRnBSeXhoUVVGcVJ5eFZRVUZ0U0N4aFFVRnVTQ3hQUVVablFqdEJRVWRvUWl4M1FrRkJhMElzVFVGQlRTeE5RVUY0UWl4VlFVRnRReXhuUWtGQmJrTXNWVUZCZDBRc1owSkJRWGhFTEU5QlNHZENPMEZCU1doQ0xITkNRVUZuUWl4TlFVRk5MRXRCUVhSQ0xFOUJTbWRDTzBGQlMyaENMSE5DUVVGblFpeE5RVUZOTEV0QlFYUkNPMEZCVEdkQ0xFZEJRV3hDT3p0QlFWRkJMRTlCUVVzc1NVRkJTU3hIUVVGVUxFbEJRV2RDTEV0QlFXaENMRVZCUVhWQ08wRkJRM0pDTEZGQlFVa3NUVUZCVFN4alFVRk9MRU5CUVhGQ0xFZEJRWEpDTEVOQlFVb3NSVUZCSzBJN1FVRkROMElzVlVGQlNTeDVRa0ZCWlN4SFFVRm1MRU5CUVVvc1JVRkJlVUk3UVVGRGRrSXNkVUpCUVdVc1NVRkJaanRCUVVORUxFOUJSa1FzVFVGRlR6dEJRVU5NTEdOQlFVMHNkMEpCUVZrc1IwRkJXaXhEUVVGT0xFbEJRVEJDTEUxQlFVMHNSMEZCVGl4RFFVRXhRanRCUVVORU8wRkJRMFk3UVVGRFJqczdRVUZGUkN4TlFVRkpMRmxCUVVvc1JVRkJhMEk3UVVGRGFFSXNWVUZCVFN4VFFVRk9MRWRCUVd0Q0xFVkJRV3hDT3p0QlFVVkJMRk5CUVVzc1NVRkJTU3hKUVVGVUxFbEJRV2RDTEZOQlFXaENMRVZCUVRKQ08wRkJRM3BDTEZWQlFVa3NWVUZCVlN4alFVRldMRU5CUVhsQ0xFbEJRWHBDTEVOQlFVb3NSVUZCYlVNN1FVRkRha01zV1VGQlRTeGxRVUZuUWl4VFFVRlJMRTlCUVZRc1IwRkJiMElzUjBGQmNFSXNSMEZCTUVJc1IwRkJMME03UVVGRFFTeGpRVUZOTEZOQlFVNHNTVUZCYlVJc1ZVRkJWU3hKUVVGV0xFVkJRV1VzVDBGQlppeERRVUYxUWl4WlFVRjJRaXhGUVVGeFF5eFpRVUZ5UXl4RFFVRnVRanRCUVVORU8wRkJRMFk3UVVGRFJqczdRVUZGUkN4VFFVRlBMRXRCUVZBN1FVRkRSQ0lzSW1acGJHVWlPaUppZFdsc1pDNXFjeUlzSW5OdmRYSmpaVkp2YjNRaU9pSXZWWE5sY25NdmJXRjBkSEJsY25KNUwxTnBkR1Z6TDNCdmNHMXZkR2x2YmlJc0luTnZkWEpqWlhORGIyNTBaVzUwSWpwYkltbHRjRzl5ZENCN0lHTmhiV1ZzVkc5RVlYTm9JSDBnWm5KdmJTQW5MaTR2TGk0dmFXNWpMM1YwYVd4ekp6dGNibWx0Y0c5eWRDQjBjbUZ1YzJadmNtMVFjbTl3Y3lCbWNtOXRJQ2N1TGk5amMzTXZkSEpoYm5ObWIzSnRMWEJ5YjNCekp6dGNibHh1WTI5dWMzUWdXa1ZTVDE5T1QxUmZXa1ZTVHlBOUlEQXVNREF3TVR0Y2JseHVaWGh3YjNKMElHUmxabUYxYkhRZ1puVnVZM1JwYjI0Z1luVnBiR1FvYzNSaGRHVXNJR1JoZEdFcElIdGNiaUFnYkdWMElHaGhjMVJ5WVc1elptOXliU0E5SUdaaGJITmxPMXh1SUNCamIyNXpkQ0J3Y205d2N5QTlJSHQ5TzF4dUlDQmpiMjV6ZENCelkyRnNaU0E5SUhOMFlYUmxMbk5qWVd4bElDRTlQU0IxYm1SbFptbHVaV1FnUHlCemRHRjBaUzV6WTJGc1pTQjhmQ0JhUlZKUFgwNVBWRjlhUlZKUElEb2djM1JoZEdVdWMyTmhiR1ZZSUh4OElERTdYRzRnSUdOdmJuTjBJSE5qWVd4bFdTQTlJSE4wWVhSbExuTmpZV3hsV1NBaFBUMGdkVzVrWldacGJtVmtJRDhnYzNSaGRHVXVjMk5oYkdWWklIeDhJRnBGVWs5ZlRrOVVYMXBGVWs4Z09pQnpZMkZzWlNCOGZDQXhPMXh1SUNCamIyNXpkQ0IwY21GdWMyWnZjbTFQY21sbmFXNVlJRDBnWkdGMFlTNTNhV1IwYUNBcUlDZ29jM1JoZEdVdWIzSnBaMmx1V0NCOGZDQTFNQ2tnTHlBeE1EQXBJQ3NnWkdGMFlTNTRPMXh1SUNCamIyNXpkQ0IwY21GdWMyWnZjbTFQY21sbmFXNVpJRDBnWkdGMFlTNW9aV2xuYUhRZ0tpQW9LSE4wWVhSbExtOXlhV2RwYmxrZ2ZId2dOVEFwSUM4Z01UQXdLU0FySUdSaGRHRXVlVHRjYmlBZ1kyOXVjM1FnYzJOaGJHVlVjbUZ1YzJadmNtMVlJRDBnTFNCMGNtRnVjMlp2Y20xUGNtbG5hVzVZSUNvZ0tITmpZV3hsSUNvZ01TazdYRzRnSUdOdmJuTjBJSE5qWVd4bFZISmhibk5tYjNKdFdTQTlJQzBnZEhKaGJuTm1iM0p0VDNKcFoybHVXU0FxSUNoelkyRnNaVmtnS2lBeEtUdGNiaUFnWTI5dWMzUWdjMk5oYkdWU1pYQnNZV05sV0NBOUlIUnlZVzV6Wm05eWJVOXlhV2RwYmxnZ0x5QnpZMkZzWlR0Y2JpQWdZMjl1YzNRZ2MyTmhiR1ZTWlhCc1lXTmxXU0E5SUhSeVlXNXpabTl5YlU5eWFXZHBibGtnTHlCelkyRnNaVms3WEc0Z0lHTnZibk4wSUhSeVlXNXpabTl5YlNBOUlIdGNiaUFnSUNCMGNtRnVjMnhoZEdVNklHQjBjbUZ1YzJ4aGRHVW9KSHR6ZEdGMFpTNTBjbUZ1YzJ4aGRHVllmU3dnSkh0emRHRjBaUzUwY21GdWMyeGhkR1ZaZlNrZ1lDeGNiaUFnSUNCelkyRnNaVG9nWUhSeVlXNXpiR0YwWlNna2UzTmpZV3hsVkhKaGJuTm1iM0p0V0gwc0lDUjdjMk5oYkdWVWNtRnVjMlp2Y20xWmZTa2djMk5oYkdVb0pIdHpZMkZzWlgwc0lDUjdjMk5oYkdWWmZTa2dkSEpoYm5Oc1lYUmxLQ1I3YzJOaGJHVlNaWEJzWVdObFdIMHNJQ1I3YzJOaGJHVlNaWEJzWVdObFdYMHBJR0FzWEc0Z0lDQWdjbTkwWVhSbE9pQmdjbTkwWVhSbEtDUjdjM1JoZEdVdWNtOTBZWFJsZlN3Z0pIdDBjbUZ1YzJadmNtMVBjbWxuYVc1WWZTd2dKSHQwY21GdWMyWnZjbTFQY21sbmFXNVpmU2tnWUN4Y2JpQWdJQ0J6YTJWM1dEb2dZSE5yWlhkWUtDUjdjM1JoZEdVdWMydGxkMWg5S1NCZ0xGeHVJQ0FnSUhOclpYZFpPaUJnYzJ0bGQxa29KSHR6ZEdGMFpTNXphMlYzV1gwcElHQmNiaUFnZlR0Y2JseHVJQ0JtYjNJZ0tHeGxkQ0JyWlhrZ2FXNGdjM1JoZEdVcElIdGNiaUFnSUNCcFppQW9jM1JoZEdVdWFHRnpUM2R1VUhKdmNHVnlkSGtvYTJWNUtTa2dlMXh1SUNBZ0lDQWdhV1lnS0hSeVlXNXpabTl5YlZCeWIzQnpXMnRsZVYwcElIdGNiaUFnSUNBZ0lDQWdhR0Z6VkhKaGJuTm1iM0p0SUQwZ2RISjFaVHRjYmlBZ0lDQWdJSDBnWld4elpTQjdYRzRnSUNBZ0lDQWdJSEJ5YjNCelcyTmhiV1ZzVkc5RVlYTm9LR3RsZVNsZElEMGdjM1JoZEdWYmEyVjVYVHRjYmlBZ0lDQWdJSDFjYmlBZ0lDQjlYRzRnSUgxY2JseHVJQ0JwWmlBb2FHRnpWSEpoYm5ObWIzSnRLU0I3WEc0Z0lDQWdjSEp2Y0hNdWRISmhibk5tYjNKdElEMGdKeWM3WEc1Y2JpQWdJQ0JtYjNJZ0tHeGxkQ0JyWlhrZ2FXNGdkSEpoYm5ObWIzSnRLU0I3WEc0Z0lDQWdJQ0JwWmlBb2RISmhibk5tYjNKdExtaGhjMDkzYmxCeWIzQmxjblI1S0d0bGVTa3BJSHRjYmlBZ0lDQWdJQ0FnWTI5dWMzUWdaR1ZtWVhWc2RGWmhiSFZsSUQwZ0tHdGxlU0E5UFQwZ0ozTmpZV3hsSnlrZ1B5QW5NU2NnT2lBbk1DYzdYRzRnSUNBZ0lDQWdJSEJ5YjNCekxuUnlZVzV6Wm05eWJTQXJQU0IwY21GdWMyWnZjbTFiYTJWNVhTNXlaWEJzWVdObEtDOTFibVJsWm1sdVpXUXZaeXdnWkdWbVlYVnNkRlpoYkhWbEtUdGNiaUFnSUNBZ0lIMWNiaUFnSUNCOVhHNGdJSDFjYmx4dUlDQnlaWFIxY200Z2NISnZjSE03WEc1OUlsMTlcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2FkYXB0ZXIvc3ZnL2J1aWxkLmpzXG4gKiogbW9kdWxlIGlkID0gNDZcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbi8qXG4gIENvbnZlcnQgcGVyY2VudGFnZSB0byBwaXhlbHNcbiAgXG4gIEBwYXJhbSBbbnVtYmVyXTogUGVyY2VudGFnZSBvZiB0b3RhbCBsZW5ndGhcbiAgQHBhcmFtIFtudW1iZXJdOiBUb3RhbCBsZW5ndGhcbiovXG52YXIgcGVyY2VudFRvUGl4ZWxzID0gZnVuY3Rpb24gKHBlcmNlbnQsIGxlbmd0aCkge1xuICByZXR1cm4gcGFyc2VGbG9hdChwZXJjZW50KSAvIDEwMCAqIGxlbmd0aCArICdweCc7XG59O1xuXG5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbiAoc3RhdGUsIGxlbmd0aCkge1xuICB2YXIgc3R5bGVzID0ge307XG4gIHZhciBkYXNoQXJyYXlTdHlsZXMgPSB7XG4gICAgbGVuZ3RoOiAwLFxuICAgIHNwYWNpbmc6IGxlbmd0aCArICdweCdcbiAgfTtcbiAgdmFyIGhhc0Rhc2hBcnJheSA9IGZhbHNlO1xuXG4gIGZvciAodmFyIGtleSBpbiBzdGF0ZSkge1xuICAgIGlmIChzdGF0ZS5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICB2YXIgdmFsdWUgPSBzdGF0ZVtrZXldO1xuXG4gICAgICBzd2l0Y2ggKGtleSkge1xuICAgICAgICBjYXNlICdsZW5ndGgnOlxuICAgICAgICBjYXNlICdzcGFjaW5nJzpcbiAgICAgICAgICBoYXNEYXNoQXJyYXkgPSB0cnVlO1xuICAgICAgICAgIGRhc2hBcnJheVN0eWxlc1trZXldID0gcGVyY2VudFRvUGl4ZWxzKHZhbHVlLCBsZW5ndGgpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdvZmZzZXQnOlxuICAgICAgICAgIHN0eWxlc1snc3Ryb2tlLWRhc2hvZmZzZXQnXSA9IHBlcmNlbnRUb1BpeGVscygtdmFsdWUsIGxlbmd0aCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgc3R5bGVzW2tleV0gPSB2YWx1ZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBpZiAoaGFzRGFzaEFycmF5KSB7XG4gICAgc3R5bGVzWydzdHJva2UtZGFzaGFycmF5J10gPSBkYXNoQXJyYXlTdHlsZXMubGVuZ3RoICsgJyAnICsgZGFzaEFycmF5U3R5bGVzLnNwYWNpbmc7XG4gIH1cblxuICByZXR1cm4gc3R5bGVzO1xufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbk55WXk5aFpHRndkR1Z5TDNOMlp5MXdZWFJvTDJKMWFXeGtMbXB6SWwwc0ltNWhiV1Z6SWpwYlhTd2liV0Z3Y0dsdVozTWlPaUk3T3pzN096czdPenRCUVUxQkxFbEJRVTBzYTBKQlFXdENMRlZCUVVNc1QwRkJSQ3hGUVVGVkxFMUJRVlk3UVVGQlFTeFRRVUZ6UWl4WFFVRlhMRTlCUVZnc1NVRkJjMElzUjBGQmRrSXNSMEZCT0VJc1RVRkJPVUlzUjBGQmRVTXNTVUZCTlVRN1FVRkJRU3hEUVVGNFFqczdhMEpCUldVc1ZVRkJReXhMUVVGRUxFVkJRVkVzVFVGQlVpeEZRVUZ0UWp0QlFVTm9ReXhOUVVGTkxGTkJRVk1zUlVGQlpqdEJRVU5CTEUxQlFVMHNhMEpCUVd0Q08wRkJRM1JDTEZsQlFWRXNRMEZFWXp0QlFVVjBRaXhoUVVGVExGTkJRVk03UVVGR1NTeEhRVUY0UWp0QlFVbEJMRTFCUVVrc1pVRkJaU3hMUVVGdVFqczdRVUZGUVN4UFFVRkxMRWxCUVVrc1IwRkJWQ3hKUVVGblFpeExRVUZvUWl4RlFVRjFRanRCUVVOeVFpeFJRVUZKTEUxQlFVMHNZMEZCVGl4RFFVRnhRaXhIUVVGeVFpeERRVUZLTEVWQlFTdENPMEZCUXpkQ0xGVkJRVTBzVVVGQlVTeE5RVUZOTEVkQlFVNHNRMEZCWkRzN1FVRkZRU3hqUVVGUkxFZEJRVkk3UVVGRFFTeGhRVUZMTEZGQlFVdzdRVUZEUVN4aFFVRkxMRk5CUVV3N1FVRkRSU3g1UWtGQlpTeEpRVUZtTzBGQlEwRXNNRUpCUVdkQ0xFZEJRV2hDTEVsQlFYVkNMR2RDUVVGblFpeExRVUZvUWl4RlFVRjFRaXhOUVVGMlFpeERRVUYyUWp0QlFVTkJPMEZCUTBZc1lVRkJTeXhSUVVGTU8wRkJRMFVzYVVKQlFVOHNiVUpCUVZBc1NVRkJPRUlzWjBKQlFXZENMRU5CUVVNc1MwRkJha0lzUlVGQmQwSXNUVUZCZUVJc1EwRkJPVUk3UVVGRFFUdEJRVU5HTzBGQlEwVXNhVUpCUVU4c1IwRkJVQ3hKUVVGakxFdEJRV1E3UVVGV1JqdEJRVmxFTzBGQlEwWTdPMEZCUlVRc1RVRkJTU3haUVVGS0xFVkJRV3RDTzBGQlEyaENMRmRCUVU4c2EwSkJRVkFzU1VGQk5rSXNaMEpCUVdkQ0xFMUJRV2hDTEVkQlFYbENMRWRCUVhwQ0xFZEJRU3RDTEdkQ1FVRm5RaXhQUVVFMVJUdEJRVU5FT3p0QlFVVkVMRk5CUVU4c1RVRkJVRHRCUVVORUxFTWlMQ0ptYVd4bElqb2lZblZwYkdRdWFuTWlMQ0p6YjNWeVkyVlNiMjkwSWpvaUwxVnpaWEp6TDIxaGRIUndaWEp5ZVM5VGFYUmxjeTl3YjNCdGIzUnBiMjRpTENKemIzVnlZMlZ6UTI5dWRHVnVkQ0k2V3lJdktseHVJQ0JEYjI1MlpYSjBJSEJsY21ObGJuUmhaMlVnZEc4Z2NHbDRaV3h6WEc0Z0lGeHVJQ0JBY0dGeVlXMGdXMjUxYldKbGNsMDZJRkJsY21ObGJuUmhaMlVnYjJZZ2RHOTBZV3dnYkdWdVozUm9YRzRnSUVCd1lYSmhiU0JiYm5WdFltVnlYVG9nVkc5MFlXd2diR1Z1WjNSb1hHNHFMMXh1WTI5dWMzUWdjR1Z5WTJWdWRGUnZVR2w0Wld4eklEMGdLSEJsY21ObGJuUXNJR3hsYm1kMGFDa2dQVDRnS0hCaGNuTmxSbXh2WVhRb2NHVnlZMlZ1ZENrZ0x5QXhNREFwSUNvZ2JHVnVaM1JvSUNzZ0ozQjRKenRjYmx4dVpYaHdiM0owSUdSbFptRjFiSFFnS0hOMFlYUmxMQ0JzWlc1bmRHZ3BJRDArSUh0Y2JpQWdZMjl1YzNRZ2MzUjViR1Z6SUQwZ2UzMDdYRzRnSUdOdmJuTjBJR1JoYzJoQmNuSmhlVk4wZVd4bGN5QTlJSHRjYmlBZ0lDQnNaVzVuZEdnNklEQXNYRzRnSUNBZ2MzQmhZMmx1WnpvZ2JHVnVaM1JvSUNzZ0ozQjRKMXh1SUNCOU8xeHVJQ0JzWlhRZ2FHRnpSR0Z6YUVGeWNtRjVJRDBnWm1Gc2MyVTdYRzVjYmlBZ1ptOXlJQ2hzWlhRZ2EyVjVJR2x1SUhOMFlYUmxLU0I3WEc0Z0lDQWdhV1lnS0hOMFlYUmxMbWhoYzA5M2JsQnliM0JsY25SNUtHdGxlU2twSUh0Y2JpQWdJQ0FnSUdOdmJuTjBJSFpoYkhWbElEMGdjM1JoZEdWYmEyVjVYVHRjYmx4dUlDQWdJQ0FnYzNkcGRHTm9JQ2hyWlhrcElIdGNiaUFnSUNBZ0lHTmhjMlVnSjJ4bGJtZDBhQ2M2WEc0Z0lDQWdJQ0JqWVhObElDZHpjR0ZqYVc1bkp6cGNiaUFnSUNBZ0lDQWdhR0Z6UkdGemFFRnljbUY1SUQwZ2RISjFaVHRjYmlBZ0lDQWdJQ0FnWkdGemFFRnljbUY1VTNSNWJHVnpXMnRsZVYwZ1BTQndaWEpqWlc1MFZHOVFhWGhsYkhNb2RtRnNkV1VzSUd4bGJtZDBhQ2s3WEc0Z0lDQWdJQ0FnSUdKeVpXRnJPMXh1SUNBZ0lDQWdZMkZ6WlNBbmIyWm1jMlYwSnpwY2JpQWdJQ0FnSUNBZ2MzUjViR1Z6V3lkemRISnZhMlV0WkdGemFHOW1abk5sZENkZElEMGdjR1Z5WTJWdWRGUnZVR2w0Wld4ektDMTJZV3gxWlN3Z2JHVnVaM1JvS1R0Y2JpQWdJQ0FnSUNBZ1luSmxZV3M3WEc0Z0lDQWdJQ0JrWldaaGRXeDBPbHh1SUNBZ0lDQWdJQ0J6ZEhsc1pYTmJhMlY1WFNBOUlIWmhiSFZsTzF4dUlDQWdJQ0FnZlZ4dUlDQWdJSDFjYmlBZ2ZWeHVYRzRnSUdsbUlDaG9ZWE5FWVhOb1FYSnlZWGtwSUh0Y2JpQWdJQ0J6ZEhsc1pYTmJKM04wY205clpTMWtZWE5vWVhKeVlYa25YU0E5SUdSaGMyaEJjbkpoZVZOMGVXeGxjeTVzWlc1bmRHZ2dLeUFuSUNjZ0t5QmtZWE5vUVhKeVlYbFRkSGxzWlhNdWMzQmhZMmx1Wnp0Y2JpQWdmVnh1WEc0Z0lISmxkSFZ5YmlCemRIbHNaWE03WEc1OU95SmRmUT09XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9hZGFwdGVyL3N2Zy1wYXRoL2J1aWxkLmpzXG4gKiogbW9kdWxlIGlkID0gNDdcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbnZhciByZ2IgPSBleHBvcnRzLnJnYiA9IHtcbiAgbWluOiAwLFxuICBtYXg6IDI1NSxcbiAgcm91bmQ6IHRydWVcbn07XG5cbnZhciBvcGFjaXR5ID0gZXhwb3J0cy5vcGFjaXR5ID0ge1xuICBtaW46IDAsXG4gIG1heDogMVxufTtcblxudmFyIHBlcmNlbnQgPSBleHBvcnRzLnBlcmNlbnQgPSB7XG4gIG1pbjogMCxcbiAgbWF4OiAxMDAsXG4gIHVuaXQ6ICclJ1xufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbk55WXk5MllXeDFaUzEwZVhCbGN5OXpaWFIwYVc1bmN5OWtaV1poZFd4MExYQnliM0J6TG1weklsMHNJbTVoYldWeklqcGJYU3dpYldGd2NHbHVaM01pT2lJN096dEJRVUZQTEVsQlFVMHNiMEpCUVUwN1FVRkRha0lzVDBGQlN5eERRVVJaTzBGQlJXcENMRTlCUVVzc1IwRkdXVHRCUVVkcVFpeFRRVUZQTzBGQlNGVXNRMEZCV2pzN1FVRk5RU3hKUVVGTkxEUkNRVUZWTzBGQlEzSkNMRTlCUVVzc1EwRkVaMEk3UVVGRmNrSXNUMEZCU3p0QlFVWm5RaXhEUVVGb1FqczdRVUZMUVN4SlFVRk5MRFJDUVVGVk8wRkJRM0pDTEU5QlFVc3NRMEZFWjBJN1FVRkZja0lzVDBGQlN5eEhRVVpuUWp0QlFVZHlRaXhSUVVGTk8wRkJTR1VzUTBGQmFFSWlMQ0ptYVd4bElqb2laR1ZtWVhWc2RDMXdjbTl3Y3k1cWN5SXNJbk52ZFhKalpWSnZiM1FpT2lJdlZYTmxjbk12YldGMGRIQmxjbko1TDFOcGRHVnpMM0J2Y0cxdmRHbHZiaUlzSW5OdmRYSmpaWE5EYjI1MFpXNTBJanBiSW1WNGNHOXlkQ0JqYjI1emRDQnlaMklnUFNCN1hHNGdJRzFwYmpvZ01DeGNiaUFnYldGNE9pQXlOVFVzWEc0Z0lISnZkVzVrT2lCMGNuVmxYRzU5TzF4dVhHNWxlSEJ2Y25RZ1kyOXVjM1FnYjNCaFkybDBlU0E5SUh0Y2JpQWdiV2x1T2lBd0xGeHVJQ0J0WVhnNklERmNibjA3WEc1Y2JtVjRjRzl5ZENCamIyNXpkQ0J3WlhKalpXNTBJRDBnZTF4dUlDQnRhVzQ2SURBc1hHNGdJRzFoZURvZ01UQXdMRnh1SUNCMWJtbDBPaUFuSlNkY2JuMDdJbDE5XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy92YWx1ZS10eXBlcy9zZXR0aW5ncy9kZWZhdWx0LXByb3BzLmpzXG4gKiogbW9kdWxlIGlkID0gNDhcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbnZhciBYID0gJ1gnO1xudmFyIFkgPSAnWSc7XG52YXIgQUxQSEEgPSAnQWxwaGEnO1xuXG52YXIgYXhlcyA9IGV4cG9ydHMuYXhlcyA9IFtYLCBZLCAnWiddO1xudmFyIHJnYiA9IGV4cG9ydHMucmdiID0gWydSZWQnLCAnR3JlZW4nLCAnQmx1ZScsIEFMUEhBXTtcbnZhciBoc2wgPSBleHBvcnRzLmhzbCA9IFsnSHVlJywgJ1NhdHVyYXRpb24nLCAnTGlnaHRuZXNzJywgQUxQSEFdO1xudmFyIHBvc2l0aW9ucyA9IGV4cG9ydHMucG9zaXRpb25zID0gWydUb3AnLCAnUmlnaHQnLCAnQm90dG9tJywgJ0xlZnQnXTtcbnZhciBzaGFkb3cgPSBleHBvcnRzLnNoYWRvdyA9IFtYLCBZLCAnUmFkaXVzJywgJ1NwcmVhZCcsICdDb2xvciddO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluTnlZeTkyWVd4MVpTMTBlWEJsY3k5elpYUjBhVzVuY3k5a2FXTjBhVzl1WVhKNUxtcHpJbDBzSW01aGJXVnpJanBiWFN3aWJXRndjR2x1WjNNaU9pSTdPenRCUVVGQkxFbEJRVTBzU1VGQlNTeEhRVUZXTzBGQlEwRXNTVUZCVFN4SlFVRkpMRWRCUVZZN1FVRkRRU3hKUVVGTkxGRkJRVkVzVDBGQlpEczdRVUZGVHl4SlFVRk5MSE5DUVVGUExFTkJRVU1zUTBGQlJDeEZRVUZKTEVOQlFVb3NSVUZCVHl4SFFVRlFMRU5CUVdJN1FVRkRRU3hKUVVGTkxHOUNRVUZOTEVOQlFVTXNTMEZCUkN4RlFVRlJMRTlCUVZJc1JVRkJhVUlzVFVGQmFrSXNSVUZCZVVJc1MwRkJla0lzUTBGQldqdEJRVU5CTEVsQlFVMHNiMEpCUVUwc1EwRkJReXhMUVVGRUxFVkJRVkVzV1VGQlVpeEZRVUZ6UWl4WFFVRjBRaXhGUVVGdFF5eExRVUZ1UXl4RFFVRmFPMEZCUTBFc1NVRkJUU3huUTBGQldTeERRVUZETEV0QlFVUXNSVUZCVVN4UFFVRlNMRVZCUVdsQ0xGRkJRV3BDTEVWQlFUSkNMRTFCUVROQ0xFTkJRV3hDTzBGQlEwRXNTVUZCVFN3d1FrRkJVeXhEUVVGRExFTkJRVVFzUlVGQlNTeERRVUZLTEVWQlFVOHNVVUZCVUN4RlFVRnBRaXhSUVVGcVFpeEZRVUV5UWl4UFFVRXpRaXhEUVVGbUlpd2labWxzWlNJNkltUnBZM1JwYjI1aGNua3Vhbk1pTENKemIzVnlZMlZTYjI5MElqb2lMMVZ6WlhKekwyMWhkSFJ3WlhKeWVTOVRhWFJsY3k5d2IzQnRiM1JwYjI0aUxDSnpiM1Z5WTJWelEyOXVkR1Z1ZENJNld5SmpiMjV6ZENCWUlEMGdKMWduTzF4dVkyOXVjM1FnV1NBOUlDZFpKenRjYm1OdmJuTjBJRUZNVUVoQklEMGdKMEZzY0doaEp6dGNibHh1Wlhod2IzSjBJR052Ym5OMElHRjRaWE1nUFNCYldDd2dXU3dnSjFvblhUdGNibVY0Y0c5eWRDQmpiMjV6ZENCeVoySWdQU0JiSjFKbFpDY3NJQ2RIY21WbGJpY3NJQ2RDYkhWbEp5d2dRVXhRU0VGZE8xeHVaWGh3YjNKMElHTnZibk4wSUdoemJDQTlJRnNuU0hWbEp5d2dKMU5oZEhWeVlYUnBiMjRuTENBblRHbG5hSFJ1WlhOekp5d2dRVXhRU0VGZE8xeHVaWGh3YjNKMElHTnZibk4wSUhCdmMybDBhVzl1Y3lBOUlGc25WRzl3Snl3Z0oxSnBaMmgwSnl3Z0owSnZkSFJ2YlNjc0lDZE1aV1owSjEwN1hHNWxlSEJ2Y25RZ1kyOXVjM1FnYzJoaFpHOTNJRDBnVzFnc0lGa3NJQ2RTWVdScGRYTW5MQ0FuVTNCeVpXRmtKeXdnSjBOdmJHOXlKMTA3SWwxOVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvdmFsdWUtdHlwZXMvc2V0dGluZ3MvZGljdGlvbmFyeS5qc1xuICoqIG1vZHVsZSBpZCA9IDQ5XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHMuZGVmYXVsdCA9IGNyZWF0ZUVhc2luZ0Z1bmN0aW9uO1xuLypcbiAgTWlycm9yIGVhc2luZ1xuICBcbiAgTWlycm9ycyB0aGUgcHJvdmlkZWQgZWFzaW5nIGZ1bmN0aW9uLCB1c2VkIGhlcmUgZm9yIG1pcnJvcmluZyBhblxuICBlYXNlSW4gaW50byBhbiBlYXNlSW5PdXRcbiAgXG4gIEBwYXJhbSBbbnVtYmVyXTogUHJvZ3Jlc3MsIGZyb20gMCAtIDEsIG9mIGN1cnJlbnQgc2hpZnRcbiAgQHBhcmFtIFtmdW5jdGlvbl06IFRoZSBlYXNpbmcgZnVuY3Rpb24gdG8gbWlycm9yXG4gIEByZXR1cm5zIFtudW1iZXJdOiBUaGUgZWFzaW5nLWFkanVzdGVkIGRlbHRhXG4qL1xudmFyIG1pcnJvckVhc2luZyA9IGZ1bmN0aW9uIChtZXRob2QpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIChwcm9ncmVzcywgc3RyZW5ndGgpIHtcbiAgICByZXR1cm4gcHJvZ3Jlc3MgPD0gMC41ID8gbWV0aG9kKDIgKiBwcm9ncmVzcywgc3RyZW5ndGgpIC8gMiA6ICgyIC0gbWV0aG9kKDIgKiAoMSAtIHByb2dyZXNzKSwgc3RyZW5ndGgpKSAvIDI7XG4gIH07XG59O1xuXG4vKlxuICBSZXZlcnNlIGVhc2luZ1xuICBcbiAgUmV2ZXJzZXMgdGhlIG91dHB1dCBvZiB0aGUgcHJvdmlkZWQgZWFzaW5nIGZ1bmN0aW9uLCB1c2VkIGZvciBmbGlwcGluZyBlYXNlSW5cbiAgY3VydmUgdG8gYW4gZWFzZU91dC5cbiAgXG4gIEBwYXJhbSBbbnVtYmVyXTogUHJvZ3Jlc3MsIGZyb20gMCAtIDEsIG9mIGN1cnJlbnQgc2hpZnRcbiAgQHBhcmFtIFtmdW5jdGlvbl06IFRoZSBlYXNpbmcgZnVuY3Rpb24gdG8gcmV2ZXJzZVxuICBAcmV0dXJucyBbbnVtYmVyXTogVGhlIGVhc2luZy1hZGp1c3RlZCBkZWx0YVxuKi9cbnZhciByZXZlcnNlRWFzaW5nID0gZnVuY3Rpb24gKG1ldGhvZCkge1xuICByZXR1cm4gZnVuY3Rpb24gKHByb2dyZXNzLCBzdHJlbmd0aCkge1xuICAgIHJldHVybiAxIC0gbWV0aG9kKDEgLSBwcm9ncmVzcywgc3RyZW5ndGgpO1xuICB9O1xufTtcblxuLypcbiAgRWFzaW5nIGNsYXNzXG5cbiAgSWYgcHJvdmlkZWQgZWFzaW5nIGZ1bmN0aW9uLCByZXR1cm5zIGVhc2luZyBmdW5jdGlvbiB3aXRoIFxuICBpbi9vdXQvaW5PdXQgdmFyaWF0aW9uc1xuXG4gIElmIHByb3ZpZGVkIGZvdXIgYXJndW1lbnRzLCByZXR1cm5zIG5ldyBCZXppZXIgY2xhc3MgaW5zdGVhZC5cbiovXG5mdW5jdGlvbiBjcmVhdGVFYXNpbmdGdW5jdGlvbihtZXRob2QpIHtcbiAgdmFyIGVhc2luZ0Z1bmN0aW9uID0gZnVuY3Rpb24gKHByb2dyZXNzLCBzdHJlbmd0aCkge1xuICAgIHJldHVybiBtZXRob2QocHJvZ3Jlc3MsIHN0cmVuZ3RoKTtcbiAgfTtcblxuICBlYXNpbmdGdW5jdGlvbi5pbiA9IGZ1bmN0aW9uIChwcm9ncmVzcywgc3RyZW5ndGgpIHtcbiAgICByZXR1cm4gbWV0aG9kKHByb2dyZXNzLCBzdHJlbmd0aCk7XG4gIH07XG4gIGVhc2luZ0Z1bmN0aW9uLm91dCA9IHJldmVyc2VFYXNpbmcobWV0aG9kKTtcbiAgZWFzaW5nRnVuY3Rpb24uaW5PdXQgPSBtaXJyb3JFYXNpbmcobWV0aG9kKTtcblxuICByZXR1cm4gZWFzaW5nRnVuY3Rpb247XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5OeVl5OWhZM1JwYjI1ekwyVmhjMmx1Wnk5amNtVmhkR1V0WldGemFXNW5MbXB6SWwwc0ltNWhiV1Z6SWpwYlhTd2liV0Z3Y0dsdVozTWlPaUk3T3p0clFrRm5RM2RDTEc5Q096czdPenM3T3pzN096dEJRWFJDZUVJc1NVRkJUU3hsUVVGbExGVkJRVU1zVFVGQlJEdEJRVUZCTEZOQlFWa3NWVUZCUXl4UlFVRkVMRVZCUVZjc1VVRkJXRHRCUVVGQkxGZEJRWGxDTEZsQlFWa3NSMEZCWWl4SFFVRnZRaXhQUVVGUExFbEJRVWtzVVVGQldDeEZRVUZ4UWl4UlFVRnlRaXhKUVVGcFF5eERRVUZ5UkN4SFFVRjVSQ3hEUVVGRExFbEJRVWtzVDBGQlR5eExRVUZMTEVsQlFVa3NVVUZCVkN4RFFVRlFMRVZCUVRKQ0xGRkJRVE5DTEVOQlFVd3NTVUZCTmtNc1EwRkJPVWc3UVVGQlFTeEhRVUZhTzBGQlFVRXNRMEZCY2tJN096czdPenM3T3pzN096dEJRVmxCTEVsQlFVMHNaMEpCUVdkQ0xGVkJRVU1zVFVGQlJEdEJRVUZCTEZOQlFWa3NWVUZCUXl4UlFVRkVMRVZCUVZjc1VVRkJXRHRCUVVGQkxGZEJRWGRDTEVsQlFVa3NUMEZCVHl4SlFVRkpMRkZCUVZnc1JVRkJjVUlzVVVGQmNrSXNRMEZCTlVJN1FVRkJRU3hIUVVGYU8wRkJRVUVzUTBGQmRFSTdPenM3T3pzN096czdRVUZWWlN4VFFVRlRMRzlDUVVGVUxFTkJRVGhDTEUxQlFUbENMRVZCUVhORE8wRkJRMjVFTEUxQlFVa3NhVUpCUVdsQ0xGVkJRVU1zVVVGQlJDeEZRVUZYTEZGQlFWZzdRVUZCUVN4WFFVRjNRaXhQUVVGUExGRkJRVkFzUlVGQmFVSXNVVUZCYWtJc1EwRkJlRUk3UVVGQlFTeEhRVUZ5UWpzN1FVRkZRU3hwUWtGQlpTeEZRVUZtTEVkQlFXOUNMRlZCUVVNc1VVRkJSQ3hGUVVGWExGRkJRVmc3UVVGQlFTeFhRVUYzUWl4UFFVRlBMRkZCUVZBc1JVRkJhVUlzVVVGQmFrSXNRMEZCZUVJN1FVRkJRU3hIUVVGd1FqdEJRVU5CTEdsQ1FVRmxMRWRCUVdZc1IwRkJjVUlzWTBGQll5eE5RVUZrTEVOQlFYSkNPMEZCUTBFc2FVSkJRV1VzUzBGQlppeEhRVUYxUWl4aFFVRmhMRTFCUVdJc1EwRkJka0k3TzBGQlJVRXNVMEZCVHl4alFVRlFPMEZCUTBRaUxDSm1hV3hsSWpvaVkzSmxZWFJsTFdWaGMybHVaeTVxY3lJc0luTnZkWEpqWlZKdmIzUWlPaUl2VlhObGNuTXZiV0YwZEhCbGNuSjVMMU5wZEdWekwzQnZjRzF2ZEdsdmJpSXNJbk52ZFhKalpYTkRiMjUwWlc1MElqcGJJaThxWEc0Z0lFMXBjbkp2Y2lCbFlYTnBibWRjYmlBZ1hHNGdJRTFwY25KdmNuTWdkR2hsSUhCeWIzWnBaR1ZrSUdWaGMybHVaeUJtZFc1amRHbHZiaXdnZFhObFpDQm9aWEpsSUdadmNpQnRhWEp5YjNKcGJtY2dZVzVjYmlBZ1pXRnpaVWx1SUdsdWRHOGdZVzRnWldGelpVbHVUM1YwWEc0Z0lGeHVJQ0JBY0dGeVlXMGdXMjUxYldKbGNsMDZJRkJ5YjJkeVpYTnpMQ0JtY205dElEQWdMU0F4TENCdlppQmpkWEp5Wlc1MElITm9hV1owWEc0Z0lFQndZWEpoYlNCYlpuVnVZM1JwYjI1ZE9pQlVhR1VnWldGemFXNW5JR1oxYm1OMGFXOXVJSFJ2SUcxcGNuSnZjbHh1SUNCQWNtVjBkWEp1Y3lCYmJuVnRZbVZ5WFRvZ1ZHaGxJR1ZoYzJsdVp5MWhaR3AxYzNSbFpDQmtaV3gwWVZ4dUtpOWNibU52Ym5OMElHMXBjbkp2Y2tWaGMybHVaeUE5SUNodFpYUm9iMlFwSUQwK0lDaHdjbTluY21WemN5d2djM1J5Wlc1bmRHZ3BJRDArSUNod2NtOW5jbVZ6Y3lBOFBTQXdMalVwSUQ4Z2JXVjBhRzlrS0RJZ0tpQndjbTluY21WemN5d2djM1J5Wlc1bmRHZ3BJQzhnTWlBNklDZ3lJQzBnYldWMGFHOWtLRElnS2lBb01TQXRJSEJ5YjJkeVpYTnpLU3dnYzNSeVpXNW5kR2dwS1NBdklESTdYRzRnSUNBZ1hHNHZLbHh1SUNCU1pYWmxjbk5sSUdWaGMybHVaMXh1SUNCY2JpQWdVbVYyWlhKelpYTWdkR2hsSUc5MWRIQjFkQ0J2WmlCMGFHVWdjSEp2ZG1sa1pXUWdaV0Z6YVc1bklHWjFibU4wYVc5dUxDQjFjMlZrSUdadmNpQm1iR2x3Y0dsdVp5QmxZWE5sU1c1Y2JpQWdZM1Z5ZG1VZ2RHOGdZVzRnWldGelpVOTFkQzVjYmlBZ1hHNGdJRUJ3WVhKaGJTQmJiblZ0WW1WeVhUb2dVSEp2WjNKbGMzTXNJR1p5YjIwZ01DQXRJREVzSUc5bUlHTjFjbkpsYm5RZ2MyaHBablJjYmlBZ1FIQmhjbUZ0SUZ0bWRXNWpkR2x2YmwwNklGUm9aU0JsWVhOcGJtY2dablZ1WTNScGIyNGdkRzhnY21WMlpYSnpaVnh1SUNCQWNtVjBkWEp1Y3lCYmJuVnRZbVZ5WFRvZ1ZHaGxJR1ZoYzJsdVp5MWhaR3AxYzNSbFpDQmtaV3gwWVZ4dUtpOWNibU52Ym5OMElISmxkbVZ5YzJWRllYTnBibWNnUFNBb2JXVjBhRzlrS1NBOVBpQW9jSEp2WjNKbGMzTXNJSE4wY21WdVozUm9LU0E5UGlBeElDMGdiV1YwYUc5a0tERWdMU0J3Y205bmNtVnpjeXdnYzNSeVpXNW5kR2dwTzF4dVhHNHZLbHh1SUNCRllYTnBibWNnWTJ4aGMzTmNibHh1SUNCSlppQndjbTkyYVdSbFpDQmxZWE5wYm1jZ1puVnVZM1JwYjI0c0lISmxkSFZ5Ym5NZ1pXRnphVzVuSUdaMWJtTjBhVzl1SUhkcGRHZ2dYRzRnSUdsdUwyOTFkQzlwYms5MWRDQjJZWEpwWVhScGIyNXpYRzVjYmlBZ1NXWWdjSEp2ZG1sa1pXUWdabTkxY2lCaGNtZDFiV1Z1ZEhNc0lISmxkSFZ5Ym5NZ2JtVjNJRUpsZW1sbGNpQmpiR0Z6Y3lCcGJuTjBaV0ZrTGx4dUtpOWNibVY0Y0c5eWRDQmtaV1poZFd4MElHWjFibU4wYVc5dUlHTnlaV0YwWlVWaGMybHVaMFoxYm1OMGFXOXVLRzFsZEdodlpDa2dlMXh1SUNCc1pYUWdaV0Z6YVc1blJuVnVZM1JwYjI0Z1BTQW9jSEp2WjNKbGMzTXNJSE4wY21WdVozUm9LU0E5UGlCdFpYUm9iMlFvY0hKdlozSmxjM01zSUhOMGNtVnVaM1JvS1R0Y2JseHVJQ0JsWVhOcGJtZEdkVzVqZEdsdmJpNXBiaUE5SUNod2NtOW5jbVZ6Y3l3Z2MzUnlaVzVuZEdncElEMCtJRzFsZEdodlpDaHdjbTluY21WemN5d2djM1J5Wlc1bmRHZ3BPMXh1SUNCbFlYTnBibWRHZFc1amRHbHZiaTV2ZFhRZ1BTQnlaWFpsY25ObFJXRnphVzVuS0cxbGRHaHZaQ2s3WEc0Z0lHVmhjMmx1WjBaMWJtTjBhVzl1TG1sdVQzVjBJRDBnYldseWNtOXlSV0Z6YVc1bktHMWxkR2h2WkNrN1hHNWNiaUFnY21WMGRYSnVJR1ZoYzJsdVowWjFibU4wYVc5dU8xeHVmVnh1SWwxOVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvYWN0aW9ucy9lYXNpbmcvY3JlYXRlLWVhc2luZy5qc1xuICoqIG1vZHVsZSBpZCA9IDUwXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzLmRlZmF1bHQgPSBjdWJpY0Jlemllcjtcbi8qXG4gIEJlemllciBmdW5jdGlvbiBnZW5lcmF0b3JcbiAgICBcbiAgR2HDq3RhbiBSZW5hdWRlYXUncyBCZXppZXJFYXNpbmdcbiAgaHR0cHM6Ly9naXRodWIuY29tL2dyZS9iZXppZXItZWFzaW5nL2Jsb2IvbWFzdGVyL2luZGV4LmpzICBcbiAgaHR0cHM6Ly9naXRodWIuY29tL2dyZS9iZXppZXItZWFzaW5nL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcbiAgWW91J3JlIGEgaGVyb1xuICBcbiAgVXNlXG4gIFxuICAgIHZhciBlYXNlT3V0ID0gbmV3IEJlemllciguMTcsLjY3LC44MywuNjcpLFxuICAgICAgeCA9IGVhc2VPdXQoMC41KTsgLy8gcmV0dXJucyAwLjYyNy4uLlxuKi9cblxuLy8gQ29uc3RhbnRzXG52YXIgTkVXVE9OX0lURVJBVElPTlMgPSA4O1xudmFyIE5FV1RPTl9NSU5fU0xPUEUgPSAwLjAwMTtcbnZhciBTVUJESVZJU0lPTl9QUkVDSVNJT04gPSAwLjAwMDAwMDE7XG52YXIgU1VCRElWSVNJT05fTUFYX0lURVJBVElPTlMgPSAxMDtcbnZhciBLX1NQTElORV9UQUJMRV9TSVpFID0gMTE7XG52YXIgS19TQU1QTEVfU1RFUF9TSVpFID0gMS4wIC8gKEtfU1BMSU5FX1RBQkxFX1NJWkUgLSAxLjApO1xudmFyIEZMT0FUXzMyX1NVUFBPUlRFRCA9IHR5cGVvZiBGbG9hdDMyQXJyYXkgIT09ICd1bmRlZmluZWQnO1xuXG4vLyBIZWxwZXIgbWV0aG9kc1xudmFyIGEgPSBmdW5jdGlvbiAoYTEsIGEyKSB7XG4gIHJldHVybiAxLjAgLSAzLjAgKiBhMiArIDMuMCAqIGExO1xufTtcbnZhciBiID0gZnVuY3Rpb24gKGExLCBhMikge1xuICByZXR1cm4gMy4wICogYTIgLSA2LjAgKiBhMTtcbn07XG52YXIgYyA9IGZ1bmN0aW9uIChhMSkge1xuICByZXR1cm4gMy4wICogYTE7XG59O1xuXG52YXIgZ2V0U2xvcGUgPSBmdW5jdGlvbiAodCwgYTEsIGEyKSB7XG4gIHJldHVybiAzLjAgKiBhKGExLCBhMikgKiB0ICogdCArIDIuMCAqIGIoYTEsIGEyKSAqIHQgKyBjKGExKTtcbn07XG5cbnZhciBjYWxjQmV6aWVyID0gZnVuY3Rpb24gKHQsIGExLCBhMikge1xuICByZXR1cm4gKChhKGExLCBhMikgKiB0ICsgYihhMSwgYTIpKSAqIHQgKyBjKGExKSkgKiB0O1xufTtcblxuLypcbiAgQ3JlYXRlIGEgY3ViaWMgYmV6aWVyIHJlc29sdmVyXG4qL1xuZnVuY3Rpb24gY3ViaWNCZXppZXIobVgxLCBtWTEsIG1YMiwgbVkyKSB7XG4gIHZhciBzYW1wbGVWYWx1ZXMgPSBGTE9BVF8zMl9TVVBQT1JURUQgPyBuZXcgRmxvYXQzMkFycmF5KEtfU1BMSU5FX1RBQkxFX1NJWkUpIDogbmV3IEFycmF5KEtfU1BMSU5FX1RBQkxFX1NJWkUpO1xuICB2YXIgX3ByZWNvbXB1dGVkID0gZmFsc2U7XG5cbiAgdmFyIGJpbmFyeVN1YmRpdmlkZSA9IGZ1bmN0aW9uIChhWCwgYUEsIGFCKSB7XG4gICAgdmFyIGkgPSAwO1xuICAgIHZhciBjdXJyZW50WCA9IHZvaWQgMDtcbiAgICB2YXIgY3VycmVudFQgPSB2b2lkIDA7XG5cbiAgICBkbyB7XG4gICAgICBjdXJyZW50VCA9IGFBICsgKGFCIC0gYUEpIC8gMi4wO1xuICAgICAgY3VycmVudFggPSBjYWxjQmV6aWVyKGN1cnJlbnRULCBtWDEsIG1YMikgLSBhWDtcbiAgICAgIGlmIChjdXJyZW50WCA+IDAuMCkge1xuICAgICAgICBhQiA9IGN1cnJlbnRUO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgYUEgPSBjdXJyZW50VDtcbiAgICAgIH1cbiAgICB9IHdoaWxlIChNYXRoLmFicyhjdXJyZW50WCkgPiBTVUJESVZJU0lPTl9QUkVDSVNJT04gJiYgKytpIDwgU1VCRElWSVNJT05fTUFYX0lURVJBVElPTlMpO1xuXG4gICAgcmV0dXJuIGN1cnJlbnRUO1xuICB9O1xuXG4gIHZhciBuZXd0b25SYXBoc29uSXRlcmF0ZSA9IGZ1bmN0aW9uIChhWCwgYUd1ZXNzVCkge1xuICAgIHZhciBpID0gMDtcbiAgICB2YXIgY3VycmVudFNsb3BlID0gMDtcbiAgICB2YXIgY3VycmVudFggPSB2b2lkIDA7XG5cbiAgICBmb3IgKDsgaSA8IE5FV1RPTl9JVEVSQVRJT05TOyArK2kpIHtcbiAgICAgIGN1cnJlbnRTbG9wZSA9IGdldFNsb3BlKGFHdWVzc1QsIG1YMSwgbVgyKTtcblxuICAgICAgaWYgKGN1cnJlbnRTbG9wZSA9PT0gMC4wKSB7XG4gICAgICAgIHJldHVybiBhR3Vlc3NUO1xuICAgICAgfVxuXG4gICAgICBjdXJyZW50WCA9IGNhbGNCZXppZXIoYUd1ZXNzVCwgbVgxLCBtWDIpIC0gYVg7XG4gICAgICBhR3Vlc3NUIC09IGN1cnJlbnRYIC8gY3VycmVudFNsb3BlO1xuICAgIH1cblxuICAgIHJldHVybiBhR3Vlc3NUO1xuICB9O1xuXG4gIHZhciBjYWxjU2FtcGxlVmFsdWVzID0gZnVuY3Rpb24gKCkge1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgS19TUExJTkVfVEFCTEVfU0laRTsgKytpKSB7XG4gICAgICBzYW1wbGVWYWx1ZXNbaV0gPSBjYWxjQmV6aWVyKGkgKiBLX1NBTVBMRV9TVEVQX1NJWkUsIG1YMSwgbVgyKTtcbiAgICB9XG4gIH07XG5cbiAgdmFyIGdldFRGb3JYID0gZnVuY3Rpb24gKGFYKSB7XG4gICAgdmFyIGludGVydmFsU3RhcnQgPSAwLjA7XG4gICAgdmFyIGN1cnJlbnRTYW1wbGUgPSAxO1xuICAgIHZhciBsYXN0U2FtcGxlID0gS19TUExJTkVfVEFCTEVfU0laRSAtIDE7XG4gICAgdmFyIGRpc3QgPSAwLjA7XG4gICAgdmFyIGd1ZXNzRm9yVCA9IDAuMDtcbiAgICB2YXIgaW5pdGlhbFNsb3BlID0gMC4wO1xuXG4gICAgZm9yICg7IGN1cnJlbnRTYW1wbGUgIT0gbGFzdFNhbXBsZSAmJiBzYW1wbGVWYWx1ZXNbY3VycmVudFNhbXBsZV0gPD0gYVg7ICsrY3VycmVudFNhbXBsZSkge1xuICAgICAgaW50ZXJ2YWxTdGFydCArPSBLX1NBTVBMRV9TVEVQX1NJWkU7XG4gICAgfVxuXG4gICAgLS1jdXJyZW50U2FtcGxlO1xuXG4gICAgZGlzdCA9IChhWCAtIHNhbXBsZVZhbHVlc1tjdXJyZW50U2FtcGxlXSkgLyAoc2FtcGxlVmFsdWVzW2N1cnJlbnRTYW1wbGUgKyAxXSAtIHNhbXBsZVZhbHVlc1tjdXJyZW50U2FtcGxlXSk7XG4gICAgZ3Vlc3NGb3JUID0gaW50ZXJ2YWxTdGFydCArIGRpc3QgKiBLX1NBTVBMRV9TVEVQX1NJWkU7XG5cbiAgICBpbml0aWFsU2xvcGUgPSBnZXRTbG9wZShndWVzc0ZvclQsIG1YMSwgbVgyKTtcblxuICAgIC8vIElmIHNsb3BlIGlzIGdyZWF0ZXIgdGhhbiBtaW5cbiAgICBpZiAoaW5pdGlhbFNsb3BlID49IE5FV1RPTl9NSU5fU0xPUEUpIHtcbiAgICAgIHJldHVybiBuZXd0b25SYXBoc29uSXRlcmF0ZShhWCwgZ3Vlc3NGb3JUKTtcbiAgICAgIC8vIFNsb3BlIGlzIGVxdWFsIHRvIG1pblxuICAgIH0gZWxzZSBpZiAoaW5pdGlhbFNsb3BlID09PSAwLjApIHtcbiAgICAgIHJldHVybiBndWVzc0ZvclQ7XG4gICAgICAvLyBTbG9wZSBpcyBsZXNzIHRoYW4gbWluXG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBiaW5hcnlTdWJkaXZpZGUoYVgsIGludGVydmFsU3RhcnQsIGludGVydmFsU3RhcnQgKyBLX1NBTVBMRV9TVEVQX1NJWkUpO1xuICAgIH1cbiAgfTtcblxuICB2YXIgcHJlY29tcHV0ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICBfcHJlY29tcHV0ZWQgPSB0cnVlO1xuICAgIGlmIChtWDEgIT0gbVkxIHx8IG1YMiAhPSBtWTIpIHtcbiAgICAgIGNhbGNTYW1wbGVWYWx1ZXMoKTtcbiAgICB9XG4gIH07XG5cbiAgdmFyIHJlc29sdmVyID0gZnVuY3Rpb24gKGFYKSB7XG4gICAgdmFyIHJldHVyblZhbHVlID0gdm9pZCAwO1xuXG4gICAgaWYgKCFfcHJlY29tcHV0ZWQpIHtcbiAgICAgIHByZWNvbXB1dGUoKTtcbiAgICB9XG5cbiAgICAvLyBJZiBsaW5lYXIgZ3JhZGllbnQsIHJldHVybiBYIGFzIFRcbiAgICBpZiAobVgxID09PSBtWTEgJiYgbVgyID09PSBtWTIpIHtcbiAgICAgIHJldHVyblZhbHVlID0gYVg7XG5cbiAgICAgIC8vIElmIGF0IHN0YXJ0LCByZXR1cm4gMFxuICAgIH0gZWxzZSBpZiAoYVggPT09IDApIHtcbiAgICAgIHJldHVyblZhbHVlID0gMDtcblxuICAgICAgLy8gSWYgYXQgZW5kLCByZXR1cm4gMVxuICAgIH0gZWxzZSBpZiAoYVggPT09IDEpIHtcbiAgICAgIHJldHVyblZhbHVlID0gMTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuVmFsdWUgPSBjYWxjQmV6aWVyKGdldFRGb3JYKGFYKSwgbVkxLCBtWTIpO1xuICAgIH1cblxuICAgIHJldHVybiByZXR1cm5WYWx1ZTtcbiAgfTtcblxuICByZXR1cm4gcmVzb2x2ZXI7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5OeVl5OWhZM1JwYjI1ekwyVmhjMmx1Wnk5amNtVmhkR1V0WW1WNmFXVnlMbXB6SWwwc0ltNWhiV1Z6SWpwYlhTd2liV0Z3Y0dsdVozTWlPaUk3T3p0clFrRnRRM2RDTEZjN096czdPenM3T3pzN096czdPenM3UVVGd1FuaENMRWxCUVUwc2IwSkJRVzlDTEVOQlFURkNPMEZCUTBFc1NVRkJUU3h0UWtGQmJVSXNTMEZCZWtJN1FVRkRRU3hKUVVGTkxIZENRVUYzUWl4VFFVRTVRanRCUVVOQkxFbEJRVTBzTmtKQlFUWkNMRVZCUVc1RE8wRkJRMEVzU1VGQlRTeHpRa0ZCYzBJc1JVRkJOVUk3UVVGRFFTeEpRVUZOTEhGQ1FVRnhRaXhQUVVGUExITkNRVUZ6UWl4SFFVRTNRaXhEUVVFelFqdEJRVU5CTEVsQlFVMHNjVUpCUVhOQ0xFOUJRVThzV1VGQlVDeExRVUYzUWl4WFFVRndSRHM3TzBGQlIwRXNTVUZCVFN4SlFVRkpMRlZCUVVNc1JVRkJSQ3hGUVVGTExFVkJRVXc3UVVGQlFTeFRRVUZaTEUxQlFVMHNUVUZCVFN4RlFVRmFMRWRCUVdsQ0xFMUJRVTBzUlVGQmJrTTdRVUZCUVN4RFFVRldPMEZCUTBFc1NVRkJUU3hKUVVGSkxGVkJRVU1zUlVGQlJDeEZRVUZMTEVWQlFVdzdRVUZCUVN4VFFVRlpMRTFCUVUwc1JVRkJUaXhIUVVGWExFMUJRVTBzUlVGQk4wSTdRVUZCUVN4RFFVRldPMEZCUTBFc1NVRkJUU3hKUVVGSkxGVkJRVU1zUlVGQlJEdEJRVUZCTEZOQlFWRXNUVUZCVFN4RlFVRmtPMEZCUVVFc1EwRkJWanM3UVVGRlFTeEpRVUZOTEZkQlFWY3NWVUZCUXl4RFFVRkVMRVZCUVVrc1JVRkJTaXhGUVVGUkxFVkJRVkk3UVVGQlFTeFRRVUZsTEUxQlFVMHNSVUZCUlN4RlFVRkdMRVZCUVUwc1JVRkJUaXhEUVVGT0xFZEJRV3RDTEVOQlFXeENMRWRCUVhOQ0xFTkJRWFJDTEVkQlFUQkNMRTFCUVUwc1JVRkJSU3hGUVVGR0xFVkJRVTBzUlVGQlRpeERRVUZPTEVkQlFXdENMRU5CUVRWRExFZEJRV2RFTEVWQlFVVXNSVUZCUml4RFFVRXZSRHRCUVVGQkxFTkJRV3BDT3p0QlFVVkJMRWxCUVUwc1lVRkJZU3hWUVVGRExFTkJRVVFzUlVGQlNTeEZRVUZLTEVWQlFWRXNSVUZCVWp0QlFVRkJMRk5CUVdVc1EwRkJReXhEUVVGRExFVkJRVVVzUlVGQlJpeEZRVUZOTEVWQlFVNHNTVUZCV1N4RFFVRmFMRWRCUVdkQ0xFVkJRVVVzUlVGQlJpeEZRVUZOTEVWQlFVNHNRMEZCYWtJc1NVRkJPRUlzUTBGQk9VSXNSMEZCYTBNc1JVRkJSU3hGUVVGR0xFTkJRVzVETEVsQlFUUkRMRU5CUVRORU8wRkJRVUVzUTBGQmJrSTdPenM3TzBGQlMyVXNVMEZCVXl4WFFVRlVMRU5CUVhGQ0xFZEJRWEpDTEVWQlFUQkNMRWRCUVRGQ0xFVkJRU3RDTEVkQlFTOUNMRVZCUVc5RExFZEJRWEJETEVWQlFYbERPMEZCUTNSRUxFMUJRVTBzWlVGQlpTeHhRa0ZCY1VJc1NVRkJTU3haUVVGS0xFTkJRV2xDTEcxQ1FVRnFRaXhEUVVGeVFpeEhRVUUyUkN4SlFVRkpMRXRCUVVvc1EwRkJWU3h0UWtGQlZpeERRVUZzUmp0QlFVTkJMRTFCUVVrc1pVRkJaU3hMUVVGdVFqczdRVUZGUVN4TlFVRk5MR3RDUVVGclFpeFZRVUZETEVWQlFVUXNSVUZCU3l4RlFVRk1MRVZCUVZNc1JVRkJWQ3hGUVVGblFqdEJRVU4wUXl4UlFVRkpMRWxCUVVrc1EwRkJVanRCUVVOQkxGRkJRVWtzYVVKQlFVbzdRVUZEUVN4UlFVRkpMR2xDUVVGS096dEJRVVZCTEU5QlFVYzdRVUZEUkN4cFFrRkJWeXhMUVVGTExFTkJRVU1zUzBGQlN5eEZRVUZPTEVsQlFWa3NSMEZCTlVJN1FVRkRRU3hwUWtGQlZ5eFhRVUZYTEZGQlFWZ3NSVUZCY1VJc1IwRkJja0lzUlVGQk1FSXNSMEZCTVVJc1NVRkJhVU1zUlVGQk5VTTdRVUZEUVN4VlFVRkpMRmRCUVZjc1IwRkJaaXhGUVVGdlFqdEJRVU5zUWl4aFFVRkxMRkZCUVV3N1FVRkRSQ3hQUVVaRUxFMUJSVTg3UVVGRFRDeGhRVUZMTEZGQlFVdzdRVUZEUkR0QlFVTkdMRXRCVWtRc1VVRlJVeXhMUVVGTExFZEJRVXdzUTBGQlV5eFJRVUZVTEVsQlFYRkNMSEZDUVVGeVFpeEpRVUU0UXl4RlFVRkZMRU5CUVVZc1IwRkJUU3d3UWtGU04wUTdPMEZCVlVFc1YwRkJUeXhSUVVGUU8wRkJRMFFzUjBGb1FrUTdPMEZCYTBKQkxFMUJRVTBzZFVKQlFYVkNMRlZCUVVNc1JVRkJSQ3hGUVVGTExFOUJRVXdzUlVGQmFVSTdRVUZETlVNc1VVRkJTU3hKUVVGSkxFTkJRVkk3UVVGRFFTeFJRVUZKTEdWQlFXVXNRMEZCYmtJN1FVRkRRU3hSUVVGSkxHbENRVUZLT3p0QlFVVkJMRmRCUVU4c1NVRkJTU3hwUWtGQldDeEZRVUU0UWl4RlFVRkZMRU5CUVdoRExFVkJRVzFETzBGQlEycERMSEZDUVVGbExGTkJRVk1zVDBGQlZDeEZRVUZyUWl4SFFVRnNRaXhGUVVGMVFpeEhRVUYyUWl4RFFVRm1PenRCUVVWQkxGVkJRVWtzYVVKQlFXbENMRWRCUVhKQ0xFVkJRVEJDTzBGQlEzaENMR1ZCUVU4c1QwRkJVRHRCUVVORU96dEJRVVZFTEdsQ1FVRlhMRmRCUVZjc1QwRkJXQ3hGUVVGdlFpeEhRVUZ3UWl4RlFVRjVRaXhIUVVGNlFpeEpRVUZuUXl4RlFVRXpRenRCUVVOQkxHbENRVUZYTEZkQlFWY3NXVUZCZEVJN1FVRkRSRHM3UVVGRlJDeFhRVUZQTEU5QlFWQTdRVUZEUkN4SFFXcENSRHM3UVVGdFFrRXNUVUZCVFN4dFFrRkJiVUlzV1VGQlRUdEJRVU0zUWl4VFFVRkxMRWxCUVVrc1NVRkJTU3hEUVVGaUxFVkJRV2RDTEVsQlFVa3NiVUpCUVhCQ0xFVkJRWGxETEVWQlFVVXNRMEZCTTBNc1JVRkJPRU03UVVGRE5VTXNiVUpCUVdFc1EwRkJZaXhKUVVGclFpeFhRVUZYTEVsQlFVa3NhMEpCUVdZc1JVRkJiVU1zUjBGQmJrTXNSVUZCZDBNc1IwRkJlRU1zUTBGQmJFSTdRVUZEUkR0QlFVTkdMRWRCU2tRN08wRkJUVUVzVFVGQlRTeFhRVUZYTEZWQlFVTXNSVUZCUkN4RlFVRlJPMEZCUTNaQ0xGRkJRVWtzWjBKQlFXZENMRWRCUVhCQ08wRkJRMEVzVVVGQlNTeG5Ra0ZCWjBJc1EwRkJjRUk3UVVGRFFTeFJRVUZKTEdGQlFXRXNjMEpCUVhOQ0xFTkJRWFpETzBGQlEwRXNVVUZCU1N4UFFVRlBMRWRCUVZnN1FVRkRRU3hSUVVGSkxGbEJRVmtzUjBGQmFFSTdRVUZEUVN4UlFVRkpMR1ZCUVdVc1IwRkJia0k3TzBGQlJVRXNWMEZCVHl4cFFrRkJhVUlzVlVGQmFrSXNTVUZCSzBJc1lVRkJZU3hoUVVGaUxFdEJRU3RDTEVWQlFYSkZMRVZCUVhsRkxFVkJRVVVzWVVGQk0wVXNSVUZCTUVZN1FVRkRlRVlzZFVKQlFXbENMR3RDUVVGcVFqdEJRVU5FT3p0QlFVVkVMRTFCUVVVc1lVRkJSanM3UVVGRlFTeFhRVUZQTEVOQlFVTXNTMEZCU3l4aFFVRmhMR0ZCUVdJc1EwRkJUaXhMUVVGelF5eGhRVUZoTEdkQ1FVRmpMRU5CUVROQ0xFbEJRV2RETEdGQlFXRXNZVUZCWWl4RFFVRjBSU3hEUVVGUU8wRkJRMEVzWjBKQlFWa3NaMEpCUVdkQ0xFOUJRVThzYTBKQlFXNURPenRCUVVWQkxHMUNRVUZsTEZOQlFWTXNVMEZCVkN4RlFVRnZRaXhIUVVGd1FpeEZRVUY1UWl4SFFVRjZRaXhEUVVGbU96czdRVUZIUVN4UlFVRkpMR2RDUVVGblFpeG5Ra0ZCY0VJc1JVRkJjME03UVVGRGNFTXNZVUZCVHl4eFFrRkJjVUlzUlVGQmNrSXNSVUZCZVVJc1UwRkJla0lzUTBGQlVEczdRVUZGUkN4TFFVaEVMRTFCUjA4c1NVRkJTU3hwUWtGQmFVSXNSMEZCY2tJc1JVRkJNRUk3UVVGREwwSXNZVUZCVHl4VFFVRlFPenRCUVVWRUxFdEJTRTBzVFVGSFFUdEJRVU5NTEdGQlFVOHNaMEpCUVdkQ0xFVkJRV2hDTEVWQlFXOUNMR0ZCUVhCQ0xFVkJRVzFETEdkQ1FVRm5RaXhyUWtGQmJrUXNRMEZCVUR0QlFVTkVPMEZCUTBZc1IwRTNRa1E3TzBGQkswSkJMRTFCUVUwc1lVRkJZU3haUVVGTk8wRkJRM1pDTEcxQ1FVRmxMRWxCUVdZN1FVRkRRU3hSUVVGSkxFOUJRVThzUjBGQlVDeEpRVUZqTEU5QlFVOHNSMEZCZWtJc1JVRkJPRUk3UVVGRE5VSTdRVUZEUkR0QlFVTkdMRWRCVEVRN08wRkJUMEVzVFVGQlRTeFhRVUZYTEZWQlFVTXNSVUZCUkN4RlFVRlJPMEZCUTNaQ0xGRkJRVWtzYjBKQlFVbzdPMEZCUlVFc1VVRkJTU3hEUVVGRExGbEJRVXdzUlVGQmJVSTdRVUZEYWtJN1FVRkRSRHM3TzBGQlIwUXNVVUZCU1N4UlFVRlJMRWRCUVZJc1NVRkJaU3hSUVVGUkxFZEJRVE5DTEVWQlFXZERPMEZCUXpsQ0xHOUNRVUZqTEVWQlFXUTdPenRCUVVkRUxFdEJTa1FzVFVGSlR5eEpRVUZKTEU5QlFVOHNRMEZCV0N4RlFVRmpPMEZCUTI1Q0xHOUNRVUZqTEVOQlFXUTdPenRCUVVkRUxFdEJTazBzVFVGSlFTeEpRVUZKTEU5QlFVOHNRMEZCV0N4RlFVRmpPMEZCUTI1Q0xHOUNRVUZqTEVOQlFXUTdRVUZGUkN4TFFVaE5MRTFCUjBFN1FVRkRUQ3h2UWtGQll5eFhRVUZYTEZOQlFWTXNSVUZCVkN4RFFVRllMRVZCUVhsQ0xFZEJRWHBDTEVWQlFUaENMRWRCUVRsQ0xFTkJRV1E3UVVGRFJEczdRVUZGUkN4WFFVRlBMRmRCUVZBN1FVRkRSQ3hIUVhoQ1JEczdRVUV3UWtFc1UwRkJUeXhSUVVGUU8wRkJRMFFpTENKbWFXeGxJam9pWTNKbFlYUmxMV0psZW1sbGNpNXFjeUlzSW5OdmRYSmpaVkp2YjNRaU9pSXZWWE5sY25NdmJXRjBkSEJsY25KNUwxTnBkR1Z6TDNCdmNHMXZkR2x2YmlJc0luTnZkWEpqWlhORGIyNTBaVzUwSWpwYklpOHFYRzRnSUVKbGVtbGxjaUJtZFc1amRHbHZiaUJuWlc1bGNtRjBiM0pjYmlBZ0lDQmNiaUFnUjJIRHEzUmhiaUJTWlc1aGRXUmxZWFVuY3lCQ1pYcHBaWEpGWVhOcGJtZGNiaUFnYUhSMGNITTZMeTluYVhSb2RXSXVZMjl0TDJkeVpTOWlaWHBwWlhJdFpXRnphVzVuTDJKc2IySXZiV0Z6ZEdWeUwybHVaR1Y0TG1weklDQmNiaUFnYUhSMGNITTZMeTluYVhSb2RXSXVZMjl0TDJkeVpTOWlaWHBwWlhJdFpXRnphVzVuTDJKc2IySXZiV0Z6ZEdWeUwweEpRMFZPVTBWY2JpQWdXVzkxSjNKbElHRWdhR1Z5YjF4dUlDQmNiaUFnVlhObFhHNGdJRnh1SUNBZ0lIWmhjaUJsWVhObFQzVjBJRDBnYm1WM0lFSmxlbWxsY2lndU1UY3NMalkzTEM0NE15d3VOamNwTEZ4dUlDQWdJQ0FnZUNBOUlHVmhjMlZQZFhRb01DNDFLVHNnTHk4Z2NtVjBkWEp1Y3lBd0xqWXlOeTR1TGx4dUtpOWNibHh1THk4Z1EyOXVjM1JoYm5SelhHNWpiMjV6ZENCT1JWZFVUMDVmU1ZSRlVrRlVTVTlPVXlBOUlEZzdYRzVqYjI1emRDQk9SVmRVVDA1ZlRVbE9YMU5NVDFCRklEMGdNQzR3TURFN1hHNWpiMjV6ZENCVFZVSkVTVlpKVTBsUFRsOVFVa1ZEU1ZOSlQwNGdQU0F3TGpBd01EQXdNREU3WEc1amIyNXpkQ0JUVlVKRVNWWkpVMGxQVGw5TlFWaGZTVlJGVWtGVVNVOU9VeUE5SURFd08xeHVZMjl1YzNRZ1MxOVRVRXhKVGtWZlZFRkNURVZmVTBsYVJTQTlJREV4TzF4dVkyOXVjM1FnUzE5VFFVMVFURVZmVTFSRlVGOVRTVnBGSUQwZ01TNHdJQzhnS0V0ZlUxQk1TVTVGWDFSQlFreEZYMU5KV2tVZ0xTQXhMakFwTzF4dVkyOXVjM1FnUmt4UFFWUmZNekpmVTFWUVVFOVNWRVZFSUQwZ0tIUjVjR1Z2WmlCR2JHOWhkRE15UVhKeVlYa2dJVDA5SUNkMWJtUmxabWx1WldRbktUdGNibHh1THk4Z1NHVnNjR1Z5SUcxbGRHaHZaSE5jYm1OdmJuTjBJR0VnUFNBb1lURXNJR0V5S1NBOVBpQXhMakFnTFNBekxqQWdLaUJoTWlBcklETXVNQ0FxSUdFeE8xeHVZMjl1YzNRZ1lpQTlJQ2hoTVN3Z1lUSXBJRDArSURNdU1DQXFJR0V5SUMwZ05pNHdJQ29nWVRFN1hHNWpiMjV6ZENCaklEMGdLR0V4S1NBOVBpQXpMakFnS2lCaE1UdGNibHh1WTI5dWMzUWdaMlYwVTJ4dmNHVWdQU0FvZEN3Z1lURXNJR0V5S1NBOVBpQXpMakFnS2lCaEtHRXhMQ0JoTWlrZ0tpQjBJQ29nZENBcklESXVNQ0FxSUdJb1lURXNJR0V5S1NBcUlIUWdLeUJqS0dFeEtUdGNibHh1WTI5dWMzUWdZMkZzWTBKbGVtbGxjaUE5SUNoMExDQmhNU3dnWVRJcElEMCtJQ2dvWVNoaE1Td2dZVElwSUNvZ2RDQXJJR0lvWVRFc0lHRXlLU2tnS2lCMElDc2dZeWhoTVNrcElDb2dkRHRjYmx4dUx5cGNiaUFnUTNKbFlYUmxJR0VnWTNWaWFXTWdZbVY2YVdWeUlISmxjMjlzZG1WeVhHNHFMMXh1Wlhod2IzSjBJR1JsWm1GMWJIUWdablZ1WTNScGIyNGdZM1ZpYVdOQ1pYcHBaWElvYlZneExDQnRXVEVzSUcxWU1pd2diVmt5S1NCN1hHNGdJR052Ym5OMElITmhiWEJzWlZaaGJIVmxjeUE5SUVaTVQwRlVYek15WDFOVlVGQlBVbFJGUkNBL0lHNWxkeUJHYkc5aGRETXlRWEp5WVhrb1MxOVRVRXhKVGtWZlZFRkNURVZmVTBsYVJTa2dPaUJ1WlhjZ1FYSnlZWGtvUzE5VFVFeEpUa1ZmVkVGQ1RFVmZVMGxhUlNrN1hHNGdJR3hsZENCZmNISmxZMjl0Y0hWMFpXUWdQU0JtWVd4elpUdGNibHh1SUNCamIyNXpkQ0JpYVc1aGNubFRkV0prYVhacFpHVWdQU0FvWVZnc0lHRkJMQ0JoUWlrZ1BUNGdlMXh1SUNBZ0lHeGxkQ0JwSUQwZ01EdGNiaUFnSUNCc1pYUWdZM1Z5Y21WdWRGZzdYRzRnSUNBZ2JHVjBJR04xY25KbGJuUlVPMXh1WEc0Z0lDQWdaRzhnZTF4dUlDQWdJQ0FnWTNWeWNtVnVkRlFnUFNCaFFTQXJJQ2hoUWlBdElHRkJLU0F2SURJdU1EdGNiaUFnSUNBZ0lHTjFjbkpsYm5SWUlEMGdZMkZzWTBKbGVtbGxjaWhqZFhKeVpXNTBWQ3dnYlZneExDQnRXRElwSUMwZ1lWZzdYRzRnSUNBZ0lDQnBaaUFvWTNWeWNtVnVkRmdnUGlBd0xqQXBJSHRjYmlBZ0lDQWdJQ0FnWVVJZ1BTQmpkWEp5Wlc1MFZEdGNiaUFnSUNBZ0lIMGdaV3h6WlNCN1hHNGdJQ0FnSUNBZ0lHRkJJRDBnWTNWeWNtVnVkRlE3WEc0Z0lDQWdJQ0I5WEc0Z0lDQWdmU0IzYUdsc1pTQW9UV0YwYUM1aFluTW9ZM1Z5Y21WdWRGZ3BJRDRnVTFWQ1JFbFdTVk5KVDA1ZlVGSkZRMGxUU1U5T0lDWW1JQ3NyYVNBOElGTlZRa1JKVmtsVFNVOU9YMDFCV0Y5SlZFVlNRVlJKVDA1VEtUdGNibHh1SUNBZ0lISmxkSFZ5YmlCamRYSnlaVzUwVkR0Y2JpQWdmVHRjYmx4dUlDQmpiMjV6ZENCdVpYZDBiMjVTWVhCb2MyOXVTWFJsY21GMFpTQTlJQ2hoV0N3Z1lVZDFaWE56VkNrZ1BUNGdlMXh1SUNBZ0lHeGxkQ0JwSUQwZ01EdGNiaUFnSUNCc1pYUWdZM1Z5Y21WdWRGTnNiM0JsSUQwZ01EdGNiaUFnSUNCc1pYUWdZM1Z5Y21WdWRGZzdYRzVjYmlBZ0lDQm1iM0lnS0RzZ2FTQThJRTVGVjFSUFRsOUpWRVZTUVZSSlQwNVRPeUFySzJrcElIdGNiaUFnSUNBZ0lHTjFjbkpsYm5SVGJHOXdaU0E5SUdkbGRGTnNiM0JsS0dGSGRXVnpjMVFzSUcxWU1Td2diVmd5S1R0Y2JpQWdJQ0FnSUZ4dUlDQWdJQ0FnYVdZZ0tHTjFjbkpsYm5SVGJHOXdaU0E5UFQwZ01DNHdLU0I3WEc0Z0lDQWdJQ0FnSUhKbGRIVnliaUJoUjNWbGMzTlVPMXh1SUNBZ0lDQWdmVnh1SUNBZ0lDQWdYRzRnSUNBZ0lDQmpkWEp5Wlc1MFdDQTlJR05oYkdOQ1pYcHBaWElvWVVkMVpYTnpWQ3dnYlZneExDQnRXRElwSUMwZ1lWZzdYRzRnSUNBZ0lDQmhSM1ZsYzNOVUlDMDlJR04xY25KbGJuUllJQzhnWTNWeWNtVnVkRk5zYjNCbE8xeHVJQ0FnSUgxY2JpQWdJQ0JjYmlBZ0lDQnlaWFIxY200Z1lVZDFaWE56VkR0Y2JpQWdmVHRjYmx4dUlDQmpiMjV6ZENCallXeGpVMkZ0Y0d4bFZtRnNkV1Z6SUQwZ0tDa2dQVDRnZTF4dUlDQWdJR1p2Y2lBb2JHVjBJR2tnUFNBd095QnBJRHdnUzE5VFVFeEpUa1ZmVkVGQ1RFVmZVMGxhUlRzZ0t5dHBLU0I3WEc0Z0lDQWdJQ0J6WVcxd2JHVldZV3gxWlhOYmFWMGdQU0JqWVd4alFtVjZhV1Z5S0drZ0tpQkxYMU5CVFZCTVJWOVRWRVZRWDFOSldrVXNJRzFZTVN3Z2JWZ3lLVHRjYmlBZ0lDQjlYRzRnSUgwN1hHNWNiaUFnWTI5dWMzUWdaMlYwVkVadmNsZ2dQU0FvWVZncElEMCtJSHRjYmlBZ0lDQnNaWFFnYVc1MFpYSjJZV3hUZEdGeWRDQTlJREF1TUR0Y2JpQWdJQ0JzWlhRZ1kzVnljbVZ1ZEZOaGJYQnNaU0E5SURFN1hHNGdJQ0FnYkdWMElHeGhjM1JUWVcxd2JHVWdQU0JMWDFOUVRFbE9SVjlVUVVKTVJWOVRTVnBGSUMwZ01UdGNiaUFnSUNCc1pYUWdaR2x6ZENBOUlEQXVNRHRjYmlBZ0lDQnNaWFFnWjNWbGMzTkdiM0pVSUQwZ01DNHdPMXh1SUNBZ0lHeGxkQ0JwYm1sMGFXRnNVMnh2Y0dVZ1BTQXdMakE3WEc0Z0lDQWdJQ0JjYmlBZ0lDQm1iM0lnS0RzZ1kzVnljbVZ1ZEZOaGJYQnNaU0FoUFNCc1lYTjBVMkZ0Y0d4bElDWW1JSE5oYlhCc1pWWmhiSFZsYzF0amRYSnlaVzUwVTJGdGNHeGxYU0E4UFNCaFdEc2dLeXRqZFhKeVpXNTBVMkZ0Y0d4bEtTQjdYRzRnSUNBZ0lDQnBiblJsY25aaGJGTjBZWEowSUNzOUlFdGZVMEZOVUV4RlgxTlVSVkJmVTBsYVJUdGNiaUFnSUNCOVhHNGdJQ0FnWEc0Z0lDQWdMUzFqZFhKeVpXNTBVMkZ0Y0d4bE8xeHVJQ0FnSUZ4dUlDQWdJR1JwYzNRZ1BTQW9ZVmdnTFNCellXMXdiR1ZXWVd4MVpYTmJZM1Z5Y21WdWRGTmhiWEJzWlYwcElDOGdLSE5oYlhCc1pWWmhiSFZsYzF0amRYSnlaVzUwVTJGdGNHeGxLekZkSUMwZ2MyRnRjR3hsVm1Gc2RXVnpXMk4xY25KbGJuUlRZVzF3YkdWZEtUdGNiaUFnSUNCbmRXVnpjMFp2Y2xRZ1BTQnBiblJsY25aaGJGTjBZWEowSUNzZ1pHbHpkQ0FxSUV0ZlUwRk5VRXhGWDFOVVJWQmZVMGxhUlR0Y2JpQWdJQ0JjYmlBZ0lDQnBibWwwYVdGc1UyeHZjR1VnUFNCblpYUlRiRzl3WlNobmRXVnpjMFp2Y2xRc0lHMVlNU3dnYlZneUtUdGNiaUFnSUNCY2JpQWdJQ0F2THlCSlppQnpiRzl3WlNCcGN5Qm5jbVZoZEdWeUlIUm9ZVzRnYldsdVhHNGdJQ0FnYVdZZ0tHbHVhWFJwWVd4VGJHOXdaU0ErUFNCT1JWZFVUMDVmVFVsT1gxTk1UMUJGS1NCN1hHNGdJQ0FnSUNCeVpYUjFjbTRnYm1WM2RHOXVVbUZ3YUhOdmJrbDBaWEpoZEdVb1lWZ3NJR2QxWlhOelJtOXlWQ2s3WEc0Z0lDQWdMeThnVTJ4dmNHVWdhWE1nWlhGMVlXd2dkRzhnYldsdVhHNGdJQ0FnZlNCbGJITmxJR2xtSUNocGJtbDBhV0ZzVTJ4dmNHVWdQVDA5SURBdU1Da2dlMXh1SUNBZ0lDQWdjbVYwZFhKdUlHZDFaWE56Um05eVZEdGNiaUFnSUNBdkx5QlRiRzl3WlNCcGN5QnNaWE56SUhSb1lXNGdiV2x1WEc0Z0lDQWdmU0JsYkhObElIdGNiaUFnSUNBZ0lISmxkSFZ5YmlCaWFXNWhjbmxUZFdKa2FYWnBaR1VvWVZnc0lHbHVkR1Z5ZG1Gc1UzUmhjblFzSUdsdWRHVnlkbUZzVTNSaGNuUWdLeUJMWDFOQlRWQk1SVjlUVkVWUVgxTkpXa1VwTzF4dUlDQWdJSDFjYmlBZ2ZUdGNibHh1SUNCamIyNXpkQ0J3Y21WamIyMXdkWFJsSUQwZ0tDa2dQVDRnZTF4dUlDQWdJRjl3Y21WamIyMXdkWFJsWkNBOUlIUnlkV1U3WEc0Z0lDQWdhV1lnS0cxWU1TQWhQU0J0V1RFZ2ZId2diVmd5SUNFOUlHMVpNaWtnZTF4dUlDQWdJQ0FnWTJGc1kxTmhiWEJzWlZaaGJIVmxjeWdwTzF4dUlDQWdJSDFjYmlBZ2ZUdGNibHh1SUNCamIyNXpkQ0J5WlhOdmJIWmxjaUE5SUNoaFdDa2dQVDRnZTF4dUlDQWdJR3hsZENCeVpYUjFjbTVXWVd4MVpUdGNibHh1SUNBZ0lHbG1JQ2doWDNCeVpXTnZiWEIxZEdWa0tTQjdYRzRnSUNBZ0lDQndjbVZqYjIxd2RYUmxLQ2s3WEc0Z0lDQWdmVnh1SUNBZ0lGeHVJQ0FnSUM4dklFbG1JR3hwYm1WaGNpQm5jbUZrYVdWdWRDd2djbVYwZFhKdUlGZ2dZWE1nVkZ4dUlDQWdJR2xtSUNodFdERWdQVDA5SUcxWk1TQW1KaUJ0V0RJZ1BUMDlJRzFaTWlrZ2UxeHVJQ0FnSUNBZ2NtVjBkWEp1Vm1Gc2RXVWdQU0JoV0R0Y2JpQWdJQ0FnSUZ4dUlDQWdJQzh2SUVsbUlHRjBJSE4wWVhKMExDQnlaWFIxY200Z01GeHVJQ0FnSUgwZ1pXeHpaU0JwWmlBb1lWZ2dQVDA5SURBcElIdGNiaUFnSUNBZ0lISmxkSFZ5YmxaaGJIVmxJRDBnTUR0Y2JpQWdJQ0FnSUZ4dUlDQWdJQzh2SUVsbUlHRjBJR1Z1WkN3Z2NtVjBkWEp1SURGY2JpQWdJQ0I5SUdWc2MyVWdhV1lnS0dGWUlEMDlQU0F4S1NCN1hHNGdJQ0FnSUNCeVpYUjFjbTVXWVd4MVpTQTlJREU3WEc1Y2JpQWdJQ0I5SUdWc2MyVWdlMXh1SUNBZ0lDQWdjbVYwZFhKdVZtRnNkV1VnUFNCallXeGpRbVY2YVdWeUtHZGxkRlJHYjNKWUtHRllLU3dnYlZreExDQnRXVElwTzF4dUlDQWdJSDFjYmlBZ0lDQmNiaUFnSUNCeVpYUjFjbTRnY21WMGRYSnVWbUZzZFdVN1hHNGdJSDA3WEc1Y2JpQWdjbVYwZFhKdUlISmxjMjlzZG1WeU8xeHVmVnh1SWwxOVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvYWN0aW9ucy9lYXNpbmcvY3JlYXRlLWJlemllci5qc1xuICoqIG1vZHVsZSBpZCA9IDUxXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG4vKlxuICBEZXRlY3QgYW5kIGxvYWQgYW4gYXBwcm9wcmlhdGUgY2xvY2sgc2V0dGluZyBmb3IgdGhlIGVudmlyb25tZW50XG4qL1xuXG52YXIgaGFzUkFGID0gdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSA/IHRydWUgOiBmYWxzZTtcblxudmFyIHRpY2sgPSB2b2lkIDA7XG5cbmlmIChoYXNSQUYpIHtcbiAgdGljayA9IGZ1bmN0aW9uIChjYWxsYmFjaykge1xuICAgIHJldHVybiB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKGNhbGxiYWNrKTtcbiAgfTtcbn0gZWxzZSB7XG4gIChmdW5jdGlvbiAoKSB7XG4gICAgLypcbiAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSBwb2x5ZmlsbFxuICAgICAgXG4gICAgICBGb3IgSUU4LzkgRmxpbnN0b25lcyBhbmQgbm9uLWJyb3dzZXIgZW52aXJvbm1lbnRzXG4gICAgICAgVGFrZW4gZnJvbSBQYXVsIElyaXNoLiBXZSd2ZSBzdHJpcHBlZCBvdXQgY2FuY2VsQW5pbWF0aW9uRnJhbWUgY2hlY2tzIGJlY2F1c2Ugd2UgZG9uJ3QgZm94IHdpdGggdGhhdFxuICAgICAgXG4gICAgICBodHRwOi8vcGF1bGlyaXNoLmNvbS8yMDExL3JlcXVlc3RhbmltYXRpb25mcmFtZS1mb3Itc21hcnQtYW5pbWF0aW5nL1xuICAgICAgaHR0cDovL215Lm9wZXJhLmNvbS9lbW9sbGVyL2Jsb2cvMjAxMS8xMi8yMC9yZXF1ZXN0YW5pbWF0aW9uZnJhbWUtZm9yLXNtYXJ0LWVyLWFuaW1hdGluZ1xuICAgICAgIFxuICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lIHBvbHlmaWxsIGJ5IEVyaWsgTcO2bGxlci4gZml4ZXMgZnJvbSBQYXVsIElyaXNoIGFuZCBUaW5vIFppamRlbFxuICAgICAgIFxuICAgICAgTUlUIGxpY2Vuc2VcbiAgICAqL1xuICAgIHZhciBsYXN0VGltZSA9IDA7XG5cbiAgICB0aWNrID0gZnVuY3Rpb24gKGNhbGxiYWNrKSB7XG4gICAgICB2YXIgY3VycmVudFRpbWUgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcbiAgICAgIHZhciB0aW1lVG9DYWxsID0gTWF0aC5tYXgoMCwgMTYgLSAoY3VycmVudFRpbWUgLSBsYXN0VGltZSkpO1xuXG4gICAgICBsYXN0VGltZSA9IGN1cnJlbnRUaW1lICsgdGltZVRvQ2FsbDtcblxuICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBjYWxsYmFjayhsYXN0VGltZSk7XG4gICAgICB9LCB0aW1lVG9DYWxsKTtcbiAgICB9O1xuICB9KSgpO1xufVxuXG5leHBvcnRzLmRlZmF1bHQgPSB0aWNrO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluTnlZeTkwWVhOckwzUnBZMnN1YW5NaVhTd2libUZ0WlhNaU9sdGRMQ0p0WVhCd2FXNW5jeUk2SWpzN096czdPenRCUVVsQkxFbEJRVTBzVTBGQlZTeFBRVUZQTEUxQlFWQXNTMEZCYTBJc1YwRkJiRUlzU1VGQmFVTXNUMEZCVHl4eFFrRkJla01zUjBGQmEwVXNTVUZCYkVVc1IwRkJlVVVzUzBGQmVFWTdPMEZCUlVFc1NVRkJTU3hoUVVGS096dEJRVVZCTEVsQlFVa3NUVUZCU2l4RlFVRlpPMEZCUTFZc1UwRkJUeXhWUVVGRExGRkJRVVE3UVVGQlFTeFhRVUZqTEU5QlFVOHNjVUpCUVZBc1EwRkJOa0lzVVVGQk4wSXNRMEZCWkR0QlFVRkJMRWRCUVZBN1FVRkZSQ3hEUVVoRUxFMUJSMDg3UVVGQlFUczdPenM3T3pzN096czdPenM3UVVGbFRDeFJRVUZKTEZkQlFWY3NRMEZCWmpzN1FVRkZRU3hYUVVGUExGVkJRVU1zVVVGQlJDeEZRVUZqTzBGQlEyNUNMRlZCUVUwc1kwRkJZeXhKUVVGSkxFbEJRVW9zUjBGQlZ5eFBRVUZZTEVWQlFYQkNPMEZCUTBFc1ZVRkJUU3hoUVVGaExFdEJRVXNzUjBGQlRDeERRVUZUTEVOQlFWUXNSVUZCV1N4TlFVRk5MR05CUVdNc1VVRkJjRUlzUTBGQldpeERRVUZ1UWpzN1FVRkZRU3hwUWtGQlZ5eGpRVUZqTEZWQlFYcENPenRCUVVWQkxHbENRVUZYTzBGQlFVRXNaVUZCVFN4VFFVRlRMRkZCUVZRc1EwRkJUanRCUVVGQkxFOUJRVmdzUlVGQmNVTXNWVUZCY2tNN1FVRkRSQ3hMUVZCRU8wRkJha0pMTzBGQmVVSk9PenRyUWtGRll5eEpJaXdpWm1sc1pTSTZJblJwWTJzdWFuTWlMQ0p6YjNWeVkyVlNiMjkwSWpvaUwxVnpaWEp6TDIxaGRIUndaWEp5ZVM5VGFYUmxjeTl3YjNCdGIzUnBiMjRpTENKemIzVnlZMlZ6UTI5dWRHVnVkQ0k2V3lJdktseHVJQ0JFWlhSbFkzUWdZVzVrSUd4dllXUWdZVzRnWVhCd2NtOXdjbWxoZEdVZ1kyeHZZMnNnYzJWMGRHbHVaeUJtYjNJZ2RHaGxJR1Z1ZG1seWIyNXRaVzUwWEc0cUwxeHVYRzVqYjI1emRDQm9ZWE5TUVVZZ1BTQW9kSGx3Wlc5bUlIZHBibVJ2ZHlBaFBUMGdKM1Z1WkdWbWFXNWxaQ2NnSmlZZ2QybHVaRzkzTG5KbGNYVmxjM1JCYm1sdFlYUnBiMjVHY21GdFpTa2dQeUIwY25WbElEb2dabUZzYzJVN1hHNWNibXhsZENCMGFXTnJPMXh1WEc1cFppQW9hR0Z6VWtGR0tTQjdYRzRnSUhScFkyc2dQU0FvWTJGc2JHSmhZMnNwSUQwK0lIZHBibVJ2ZHk1eVpYRjFaWE4wUVc1cGJXRjBhVzl1Um5KaGJXVW9ZMkZzYkdKaFkyc3BPMXh1WEc1OUlHVnNjMlVnZTF4dUlDQXZLbHh1SUNBZ0lISmxjWFZsYzNSQmJtbHRZWFJwYjI1R2NtRnRaU0J3YjJ4NVptbHNiRnh1SUNBZ0lGeHVJQ0FnSUVadmNpQkpSVGd2T1NCR2JHbHVjM1J2Ym1WeklHRnVaQ0J1YjI0dFluSnZkM05sY2lCbGJuWnBjbTl1YldWdWRITmNibHh1SUNBZ0lGUmhhMlZ1SUdaeWIyMGdVR0YxYkNCSmNtbHphQzRnVjJVbmRtVWdjM1J5YVhCd1pXUWdiM1YwSUdOaGJtTmxiRUZ1YVcxaGRHbHZia1p5WVcxbElHTm9aV05yY3lCaVpXTmhkWE5sSUhkbElHUnZiaWQwSUdadmVDQjNhWFJvSUhSb1lYUmNiaUFnSUNCY2JpQWdJQ0JvZEhSd09pOHZjR0YxYkdseWFYTm9MbU52YlM4eU1ERXhMM0psY1hWbGMzUmhibWx0WVhScGIyNW1jbUZ0WlMxbWIzSXRjMjFoY25RdFlXNXBiV0YwYVc1bkwxeHVJQ0FnSUdoMGRIQTZMeTl0ZVM1dmNHVnlZUzVqYjIwdlpXMXZiR3hsY2k5aWJHOW5Mekl3TVRFdk1USXZNakF2Y21WeGRXVnpkR0Z1YVcxaGRHbHZibVp5WVcxbExXWnZjaTF6YldGeWRDMWxjaTFoYm1sdFlYUnBibWRjYmlBZ0lDQWdYRzRnSUNBZ2NtVnhkV1Z6ZEVGdWFXMWhkR2x2YmtaeVlXMWxJSEJ2YkhsbWFXeHNJR0o1SUVWeWFXc2dUY08yYkd4bGNpNGdabWw0WlhNZ1puSnZiU0JRWVhWc0lFbHlhWE5vSUdGdVpDQlVhVzV2SUZwcGFtUmxiRnh1SUNBZ0lDQmNiaUFnSUNCTlNWUWdiR2xqWlc1elpWeHVJQ0FxTDF4dUlDQnNaWFFnYkdGemRGUnBiV1VnUFNBd08xeHVYRzRnSUhScFkyc2dQU0FvWTJGc2JHSmhZMnNwSUQwK0lIdGNiaUFnSUNCamIyNXpkQ0JqZFhKeVpXNTBWR2x0WlNBOUlHNWxkeUJFWVhSbEtDa3VaMlYwVkdsdFpTZ3BPMXh1SUNBZ0lHTnZibk4wSUhScGJXVlViME5oYkd3Z1BTQk5ZWFJvTG0xaGVDZ3dMQ0F4TmlBdElDaGpkWEp5Wlc1MFZHbHRaU0F0SUd4aGMzUlVhVzFsS1NrN1hHNWNiaUFnSUNCc1lYTjBWR2x0WlNBOUlHTjFjbkpsYm5SVWFXMWxJQ3NnZEdsdFpWUnZRMkZzYkR0Y2JseHVJQ0FnSUhObGRGUnBiV1Z2ZFhRb0tDa2dQVDRnWTJGc2JHSmhZMnNvYkdGemRGUnBiV1VwTENCMGFXMWxWRzlEWVd4c0tUdGNiaUFnZlR0Y2JuMWNibHh1Wlhod2IzSjBJR1JsWm1GMWJIUWdkR2xqYXpzaVhYMD1cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL3Rhc2svdGljay5qc1xuICoqIG1vZHVsZSBpZCA9IDUyXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbi8vIFtpbnRdOiBJbmNyZW1lbnRlZCBmb3IgZWFjaCBuZXcgcnVubmluZyB0YXNrXG52YXIgY3VycmVudFRhc2tJZCA9IDA7XG5cbi8vIFtpbnRdOiBOdW1iZXIgb2YgYWxsIHJ1bm5pbmcgdGFza2VzXG52YXIgdG90YWxSdW5uaW5nQ291bnQgPSAwO1xuXG4vLyBbaW50XTogTnVtYmVyIG9mIHJ1bm5pbmcgdGFza2VzIGV4Y2x1ZGluZyBiYWNrZ3JvdW5kIHRhc2tlc1xudmFyIG5vbkJhY2tncm91bmRSdW5uaW5nQ291bnQgPSAwO1xuXG4vLyBbYXJyYXldOiBBcnJheSBvZiBydW5uaW5nIHRhc2sgSURzXG52YXIgcnVubmluZ0lkcyA9IFtdO1xuXG4vLyBbb2JqZWN0XTogTWFwIG9mIHJ1bm5pbmcgdGFza2VzXG52YXIgYWN0aXZlVGFza3MgPSB7fTtcblxuLy8gW2FycmF5XTogQXJyYXkgb2YgdGFzayBJRHMgcXVldWVkIGZvciBhY3RpdmF0aW9uXG52YXIgYWN0aXZhdGVRdWV1ZSA9IFtdO1xuXG4vLyBbYXJyYXldOiBBcnJheSBvZiB0YXNrIElEcyBxdWV1ZWQgZm9yIGRlYWN0aXZhdGlvblxudmFyIGRlYWN0aXZhdGVRdWV1ZSA9IFtdO1xuXG4vKlxuICBVcGRhdGUgYWN0aXZhdGUvZGVhY3RpdmF0ZSBxdWV1ZXNcblxuICBAcGFyYW0gW251bWJlcl1cbiAgQHBhcmFtIFthcnJheV1cbiAgQHBhcmFtIFthcnJheV1cbiovXG52YXIgdXBkYXRlUXVldWVzID0gZnVuY3Rpb24gKGlkLCBpbkxpc3QsIG91dExpc3QpIHtcbiAgdmFyIGluUG9zaXRpb24gPSBpbkxpc3QuaW5kZXhPZihpZCk7XG4gIHZhciBvdXRQb3NpdGlvbiA9IG91dExpc3QuaW5kZXhPZihpZCk7XG5cbiAgaWYgKGluUG9zaXRpb24gPT09IC0xKSB7XG4gICAgaW5MaXN0LnB1c2goaWQpO1xuICB9XG5cbiAgaWYgKG91dFBvc2l0aW9uID4gLTEpIHtcbiAgICBvdXRMaXN0LnNwbGljZShvdXRQb3NpdGlvbiwgMSk7XG4gIH1cbn07XG5cbi8qXG4gIFVwZGF0ZSBydW5uaW5nXG5cbiAgW2Jvb2xlYW5dOiBgdHJ1ZWAgdG8gYWRkXG4gIFtib29sZWFuXTogYHRydWVgIGlmIGxhenlcbiovXG52YXIgdXBkYXRlUnVubmluZ0NvdW50ID0gZnVuY3Rpb24gKGFkZCwgaXNMYXp5KSB7XG4gIHZhciBtb2RpZnkgPSBhZGQgPyAxIDogLTE7XG5cbiAgdG90YWxSdW5uaW5nQ291bnQgKz0gbW9kaWZ5O1xuXG4gIGlmICghaXNMYXp5KSB7XG4gICAgbm9uQmFja2dyb3VuZFJ1bm5pbmdDb3VudCArPSBtb2RpZnk7XG4gIH1cbn07XG5cbmV4cG9ydHMuZGVmYXVsdCA9IHtcbiAgYWN0aXZlVGFza3M6IGFjdGl2ZVRhc2tzLFxuXG4gIC8vIEFjdGl2YXRlIGEgdGFza1xuICBhY3RpdmF0ZTogZnVuY3Rpb24gKGlkLCB0YXNrKSB7XG4gICAgYWN0aXZlVGFza3NbaWRdID0gdGFzaztcbiAgICB0YXNrLmlzQWN0aXZlID0gdHJ1ZTtcbiAgICB1cGRhdGVRdWV1ZXMoaWQsIGFjdGl2YXRlUXVldWUsIGRlYWN0aXZhdGVRdWV1ZSk7XG5cbiAgICBpZiAodGFzay5vbkFjdGl2YXRlKSB7XG4gICAgICB0YXNrLm9uQWN0aXZhdGUodGFzayk7XG4gICAgfVxuXG4gICAgaWYgKHRhc2sub25BY3RpdmF0ZU9uY2UpIHtcbiAgICAgIHRhc2sub25BY3RpdmF0ZU9uY2UodGFzayk7XG4gICAgfVxuICB9LFxuXG4gIC8vIERlYWN0aXZhdGUgYSB0YXNrXG4gIGRlYWN0aXZhdGU6IGZ1bmN0aW9uIChpZCkge1xuICAgIHZhciB0YXNrID0gYWN0aXZlVGFza3NbaWRdO1xuXG4gICAgaWYgKHRhc2spIHtcbiAgICAgIHVwZGF0ZVF1ZXVlcyhpZCwgZGVhY3RpdmF0ZVF1ZXVlLCBhY3RpdmF0ZVF1ZXVlKTtcbiAgICAgIHRhc2suaXNBY3RpdmUgPSBmYWxzZTtcblxuICAgICAgaWYgKHRhc2sub25EZWFjdGl2YXRlKSB7XG4gICAgICAgIHRhc2sub25EZWFjdGl2YXRlKHRhc2spO1xuICAgICAgfVxuICAgIH1cbiAgfSxcblxuICAvLyBOdW1iZXIgYmFja2dyb3VuZCB0YXNrZXNcbiAgZ2V0Tm9uQmFja2dyb3VuZFJ1bm5pbmdDb3VudDogZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBub25CYWNrZ3JvdW5kUnVubmluZ0NvdW50O1xuICB9LFxuXG4gIC8vIEluY3JlbWVudCBjdXJyZW50IHRhc2sgSUQgYW5kIHJldHVyblxuICBnZXRUYXNrSWQ6IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gY3VycmVudFRhc2tJZCsrO1xuICB9LFxuXG4gIC8vIFJlc29sdmUgYWN0aXZhdGUvZGVhY3RpdmF0ZSB0YXNrZXMgYW5kIHJldHVybiBhY3RpdmUgaWRzXG4gIGdldEFjdGl2ZUlkczogZnVuY3Rpb24gKCkge1xuICAgIC8qXG4gICAgICB0YXNrIGRlYWN0aXZhdGUgcXVldWVcbiAgICAqL1xuICAgIHZhciBkZWFjdGl2YXRlUXVldWVMZW5ndGggPSBkZWFjdGl2YXRlUXVldWUubGVuZ3RoO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBkZWFjdGl2YXRlUXVldWVMZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkID0gZGVhY3RpdmF0ZVF1ZXVlW2ldO1xuICAgICAgdmFyIGFjdGl2ZUlkSW5kZXggPSBydW5uaW5nSWRzLmluZGV4T2YoaWQpO1xuICAgICAgdmFyIHRhc2sgPSBhY3RpdmVUYXNrc1tpZF07XG5cbiAgICAgIC8vIElmIHRoaXMgaXMgYSBydW5uaW5nIHRhc2ssIGRlYWN0aXZhdGVcbiAgICAgIGlmIChhY3RpdmVJZEluZGV4ID4gLTEpIHtcbiAgICAgICAgcnVubmluZ0lkcy5zcGxpY2UoYWN0aXZlSWRJbmRleCwgMSk7XG4gICAgICAgIHVwZGF0ZVJ1bm5pbmdDb3VudChmYWxzZSwgdGFzay5pc0xhenkpO1xuICAgICAgICBkZWxldGUgYWN0aXZlVGFza3NbaWRdO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8qXG4gICAgICBFbXB0eSBkZWFjdGl2YXRlIHF1ZXVlLiBXZSB1c2UgYEFycmF5LnNwbGljZWAgYmVjYXVzZSBpdCBkb2Vzbid0XG4gICAgICB3b3JrcyBvbiB0aGUgb3JpZ2luYWwgYXJyYXkgc28gd2UgZG9uJ3QgaGF2ZSB0byBnYXJiYWdlIGNvbGxlY3QgYW55dGhpbmdcbiAgICAqL1xuICAgIGRlYWN0aXZhdGVRdWV1ZS5zcGxpY2UoMCwgZGVhY3RpdmF0ZVF1ZXVlTGVuZ3RoKTtcblxuICAgIC8qXG4gICAgICB0YXNrIGFjdGl2YXRlIHF1ZXVlXG4gICAgKi9cbiAgICB2YXIgYWN0aXZhdGVRdWV1ZUxlbmd0aCA9IGFjdGl2YXRlUXVldWUubGVuZ3RoO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGFjdGl2YXRlUXVldWVMZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWQgPSBhY3RpdmF0ZVF1ZXVlW19pXTtcbiAgICAgIHZhciBfYWN0aXZlSWRJbmRleCA9IHJ1bm5pbmdJZHMuaW5kZXhPZihfaWQpO1xuICAgICAgdmFyIF90YXNrID0gYWN0aXZlVGFza3NbX2lkXTtcblxuICAgICAgLy8gSWYgdGFzayBpc24ndCBhbHJlYWR5IHJ1bm5pbmcsIGFjdGl2YXRlXG4gICAgICBpZiAoX2FjdGl2ZUlkSW5kZXggPT09IC0xICYmIF90YXNrKSB7XG4gICAgICAgIGlmIChfdGFzay5pc1ByaW9yaXR5KSB7XG4gICAgICAgICAgcnVubmluZ0lkcy51bnNoaWZ0KF9pZCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcnVubmluZ0lkcy5wdXNoKF9pZCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoX3Rhc2sub25BY3RpdmF0ZUxvb3ApIHtcbiAgICAgICAgICBfdGFzay5vbkFjdGl2YXRlTG9vcCgpO1xuICAgICAgICB9XG5cbiAgICAgICAgdXBkYXRlUnVubmluZ0NvdW50KHRydWUsIF90YXNrLmlzTGF6eSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgYWN0aXZhdGVRdWV1ZS5zcGxpY2UoMCwgYWN0aXZhdGVRdWV1ZUxlbmd0aCk7XG5cbiAgICByZXR1cm4gcnVubmluZ0lkcztcbiAgfVxufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbk55WXk5MFlYTnJMMjFoYm1GblpYSXVhbk1pWFN3aWJtRnRaWE1pT2x0ZExDSnRZWEJ3YVc1bmN5STZJanM3T3p0QlFVTkJMRWxCUVVrc1owSkJRV2RDTEVOQlFYQkNPenM3UVVGSFFTeEpRVUZKTEc5Q1FVRnZRaXhEUVVGNFFqczdPMEZCUjBFc1NVRkJTU3cwUWtGQk5FSXNRMEZCYUVNN096dEJRVWRCTEVsQlFVMHNZVUZCWVN4RlFVRnVRanM3TzBGQlIwRXNTVUZCVFN4alFVRmpMRVZCUVhCQ096czdRVUZIUVN4SlFVRk5MR2RDUVVGblFpeEZRVUYwUWpzN08wRkJSMEVzU1VGQlRTeHJRa0ZCYTBJc1JVRkJlRUk3T3pzN096czdPenRCUVZOQkxFbEJRVTBzWlVGQlpTeFZRVUZETEVWQlFVUXNSVUZCU3l4TlFVRk1MRVZCUVdFc1QwRkJZaXhGUVVGNVFqdEJRVU0xUXl4TlFVRk5MR0ZCUVdFc1QwRkJUeXhQUVVGUUxFTkJRV1VzUlVGQlppeERRVUZ1UWp0QlFVTkJMRTFCUVUwc1kwRkJZeXhSUVVGUkxFOUJRVklzUTBGQlowSXNSVUZCYUVJc1EwRkJjRUk3TzBGQlJVRXNUVUZCU1N4bFFVRmxMRU5CUVVNc1EwRkJjRUlzUlVGQmRVSTdRVUZEY2tJc1YwRkJUeXhKUVVGUUxFTkJRVmtzUlVGQldqdEJRVU5FT3p0QlFVVkVMRTFCUVVrc1kwRkJZeXhEUVVGRExFTkJRVzVDTEVWQlFYTkNPMEZCUTNCQ0xGbEJRVkVzVFVGQlVpeERRVUZsTEZkQlFXWXNSVUZCTkVJc1EwRkJOVUk3UVVGRFJEdEJRVU5HTEVOQldFUTdPenM3T3pzN08wRkJiVUpCTEVsQlFVMHNjVUpCUVhGQ0xGVkJRVU1zUjBGQlJDeEZRVUZOTEUxQlFVNHNSVUZCYVVJN1FVRkRNVU1zVFVGQlRTeFRRVUZUTEUxQlFVMHNRMEZCVGl4SFFVRlZMRU5CUVVNc1EwRkJNVUk3TzBGQlJVRXNkVUpCUVhGQ0xFMUJRWEpDT3p0QlFVVkJMRTFCUVVrc1EwRkJReXhOUVVGTUxFVkJRV0U3UVVGRFdDeHBRMEZCTmtJc1RVRkJOMEk3UVVGRFJEdEJRVU5HTEVOQlVrUTdPMnRDUVZWbE8wRkJRMklzTUVKQlJHRTdPenRCUVVsaUxGbEJRVlVzVlVGQlF5eEZRVUZFTEVWQlFVc3NTVUZCVEN4RlFVRmpPMEZCUTNSQ0xHZENRVUZaTEVWQlFWb3NTVUZCYTBJc1NVRkJiRUk3UVVGRFFTeFRRVUZMTEZGQlFVd3NSMEZCWjBJc1NVRkJhRUk3UVVGRFFTeHBRa0ZCWVN4RlFVRmlMRVZCUVdsQ0xHRkJRV3BDTEVWQlFXZERMR1ZCUVdoRE96dEJRVVZCTEZGQlFVa3NTMEZCU3l4VlFVRlVMRVZCUVhGQ08wRkJRMjVDTEZkQlFVc3NWVUZCVEN4RFFVRm5RaXhKUVVGb1FqdEJRVU5FT3p0QlFVVkVMRkZCUVVrc1MwRkJTeXhqUVVGVUxFVkJRWGxDTzBGQlEzWkNMRmRCUVVzc1kwRkJUQ3hEUVVGdlFpeEpRVUZ3UWp0QlFVTkVPMEZCUTBZc1IwRm9RbGs3T3p0QlFXMUNZaXhqUVVGWkxGVkJRVU1zUlVGQlJDeEZRVUZSTzBGQlEyeENMRkZCUVUwc1QwRkJUeXhaUVVGWkxFVkJRVm9zUTBGQllqczdRVUZGUVN4UlFVRkpMRWxCUVVvc1JVRkJWVHRCUVVOU0xHMUNRVUZoTEVWQlFXSXNSVUZCYVVJc1pVRkJha0lzUlVGQmEwTXNZVUZCYkVNN1FVRkRRU3hYUVVGTExGRkJRVXdzUjBGQlowSXNTMEZCYUVJN08wRkJSVUVzVlVGQlNTeExRVUZMTEZsQlFWUXNSVUZCZFVJN1FVRkRja0lzWVVGQlN5eFpRVUZNTEVOQlFXdENMRWxCUVd4Q08wRkJRMFE3UVVGRFJqdEJRVU5HTEVkQk9VSlpPenM3UVVGcFEySXNaME5CUVRoQ08wRkJRVUVzVjBGQlRTeDVRa0ZCVGp0QlFVRkJMRWRCYWtOcVFqczdPMEZCYjBOaUxHRkJRVmM3UVVGQlFTeFhRVUZOTEdWQlFVNDdRVUZCUVN4SFFYQkRSVHM3TzBGQmRVTmlMR2RDUVVGakxGbEJRVTA3T3pzN1FVRkpiRUlzVVVGQlRTeDNRa0ZCZDBJc1owSkJRV2RDTEUxQlFUbERPenRCUVVWQkxGTkJRVXNzU1VGQlNTeEpRVUZKTEVOQlFXSXNSVUZCWjBJc1NVRkJTU3h4UWtGQmNFSXNSVUZCTWtNc1IwRkJNME1zUlVGQlowUTdRVUZET1VNc1ZVRkJUU3hMUVVGTExHZENRVUZuUWl4RFFVRm9RaXhEUVVGWU8wRkJRMEVzVlVGQlRTeG5Ra0ZCWjBJc1YwRkJWeXhQUVVGWUxFTkJRVzFDTEVWQlFXNUNMRU5CUVhSQ08wRkJRMEVzVlVGQlRTeFBRVUZQTEZsQlFWa3NSVUZCV2l4RFFVRmlPenM3UVVGSFFTeFZRVUZKTEdkQ1FVRm5RaXhEUVVGRExFTkJRWEpDTEVWQlFYZENPMEZCUTNSQ0xHMUNRVUZYTEUxQlFWZ3NRMEZCYTBJc1lVRkJiRUlzUlVGQmFVTXNRMEZCYWtNN1FVRkRRU3d5UWtGQmJVSXNTMEZCYmtJc1JVRkJNRUlzUzBGQlN5eE5RVUV2UWp0QlFVTkJMR1ZCUVU4c1dVRkJXU3hGUVVGYUxFTkJRVkE3UVVGRFJEdEJRVU5HT3pzN096czdRVUZOUkN4dlFrRkJaMElzVFVGQmFFSXNRMEZCZFVJc1EwRkJka0lzUlVGQk1FSXNjVUpCUVRGQ096czdPenRCUVV0QkxGRkJRVTBzYzBKQlFYTkNMR05CUVdNc1RVRkJNVU03TzBGQlJVRXNVMEZCU3l4SlFVRkpMRXRCUVVrc1EwRkJZaXhGUVVGblFpeExRVUZKTEcxQ1FVRndRaXhGUVVGNVF5eEpRVUY2UXl4RlFVRTRRenRCUVVNMVF5eFZRVUZOTEUxQlFVc3NZMEZCWXl4RlFVRmtMRU5CUVZnN1FVRkRRU3hWUVVGTkxHbENRVUZuUWl4WFFVRlhMRTlCUVZnc1EwRkJiVUlzUjBGQmJrSXNRMEZCZEVJN1FVRkRRU3hWUVVGTkxGRkJRVThzV1VGQldTeEhRVUZhTEVOQlFXSTdPenRCUVVkQkxGVkJRVWtzYlVKQlFXdENMRU5CUVVNc1EwRkJia0lzU1VGQmQwSXNTMEZCTlVJc1JVRkJhME03UVVGRGFFTXNXVUZCU1N4TlFVRkxMRlZCUVZRc1JVRkJjVUk3UVVGRGJrSXNjVUpCUVZjc1QwRkJXQ3hEUVVGdFFpeEhRVUZ1UWp0QlFVTkVMRk5CUmtRc1RVRkZUenRCUVVOTUxIRkNRVUZYTEVsQlFWZ3NRMEZCWjBJc1IwRkJhRUk3UVVGRFJEczdRVUZGUkN4WlFVRkpMRTFCUVVzc1kwRkJWQ3hGUVVGNVFqdEJRVU4yUWl4blFrRkJTeXhqUVVGTU8wRkJRMFE3TzBGQlJVUXNNa0pCUVcxQ0xFbEJRVzVDTEVWQlFYbENMRTFCUVVzc1RVRkJPVUk3UVVGRFJEdEJRVU5HT3p0QlFVVkVMR3RDUVVGakxFMUJRV1FzUTBGQmNVSXNRMEZCY2tJc1JVRkJkMElzYlVKQlFYaENPenRCUVVWQkxGZEJRVThzVlVGQlVEdEJRVU5FTzBGQk4wWlpMRU1pTENKbWFXeGxJam9pYldGdVlXZGxjaTVxY3lJc0luTnZkWEpqWlZKdmIzUWlPaUl2VlhObGNuTXZiV0YwZEhCbGNuSjVMMU5wZEdWekwzQnZjRzF2ZEdsdmJpSXNJbk52ZFhKalpYTkRiMjUwWlc1MElqcGJJaTh2SUZ0cGJuUmRPaUJKYm1OeVpXMWxiblJsWkNCbWIzSWdaV0ZqYUNCdVpYY2djblZ1Ym1sdVp5QjBZWE5yWEc1c1pYUWdZM1Z5Y21WdWRGUmhjMnRKWkNBOUlEQTdYRzVjYmk4dklGdHBiblJkT2lCT2RXMWlaWElnYjJZZ1lXeHNJSEoxYm01cGJtY2dkR0Z6YTJWelhHNXNaWFFnZEc5MFlXeFNkVzV1YVc1blEyOTFiblFnUFNBd08xeHVYRzR2THlCYmFXNTBYVG9nVG5WdFltVnlJRzltSUhKMWJtNXBibWNnZEdGemEyVnpJR1Y0WTJ4MVpHbHVaeUJpWVdOclozSnZkVzVrSUhSaGMydGxjMXh1YkdWMElHNXZia0poWTJ0bmNtOTFibVJTZFc1dWFXNW5RMjkxYm5RZ1BTQXdPMXh1WEc0dkx5QmJZWEp5WVhsZE9pQkJjbkpoZVNCdlppQnlkVzV1YVc1bklIUmhjMnNnU1VSelhHNWpiMjV6ZENCeWRXNXVhVzVuU1dSeklEMGdXMTA3WEc1Y2JpOHZJRnR2WW1wbFkzUmRPaUJOWVhBZ2IyWWdjblZ1Ym1sdVp5QjBZWE5yWlhOY2JtTnZibk4wSUdGamRHbDJaVlJoYzJ0eklEMGdlMzA3WEc1Y2JpOHZJRnRoY25KaGVWMDZJRUZ5Y21GNUlHOW1JSFJoYzJzZ1NVUnpJSEYxWlhWbFpDQm1iM0lnWVdOMGFYWmhkR2x2Ymx4dVkyOXVjM1FnWVdOMGFYWmhkR1ZSZFdWMVpTQTlJRnRkTzF4dVhHNHZMeUJiWVhKeVlYbGRPaUJCY25KaGVTQnZaaUIwWVhOcklFbEVjeUJ4ZFdWMVpXUWdabTl5SUdSbFlXTjBhWFpoZEdsdmJseHVZMjl1YzNRZ1pHVmhZM1JwZG1GMFpWRjFaWFZsSUQwZ1cxMDdYRzVjYmk4cVhHNGdJRlZ3WkdGMFpTQmhZM1JwZG1GMFpTOWtaV0ZqZEdsMllYUmxJSEYxWlhWbGMxeHVYRzRnSUVCd1lYSmhiU0JiYm5WdFltVnlYVnh1SUNCQWNHRnlZVzBnVzJGeWNtRjVYVnh1SUNCQWNHRnlZVzBnVzJGeWNtRjVYVnh1S2k5Y2JtTnZibk4wSUhWd1pHRjBaVkYxWlhWbGN5QTlJQ2hwWkN3Z2FXNU1hWE4wTENCdmRYUk1hWE4wS1NBOVBpQjdYRzRnSUdOdmJuTjBJR2x1VUc5emFYUnBiMjRnUFNCcGJreHBjM1F1YVc1a1pYaFBaaWhwWkNrN1hHNGdJR052Ym5OMElHOTFkRkJ2YzJsMGFXOXVJRDBnYjNWMFRHbHpkQzVwYm1SbGVFOW1LR2xrS1R0Y2JseHVJQ0JwWmlBb2FXNVFiM05wZEdsdmJpQTlQVDBnTFRFcElIdGNiaUFnSUNCcGJreHBjM1F1Y0hWemFDaHBaQ2s3WEc0Z0lIMWNibHh1SUNCcFppQW9iM1YwVUc5emFYUnBiMjRnUGlBdE1Ta2dlMXh1SUNBZ0lHOTFkRXhwYzNRdWMzQnNhV05sS0c5MWRGQnZjMmwwYVc5dUxDQXhLVHRjYmlBZ2ZWeHVmVHRjYmx4dUx5cGNiaUFnVlhCa1lYUmxJSEoxYm01cGJtZGNibHh1SUNCYlltOXZiR1ZoYmwwNklHQjBjblZsWUNCMGJ5QmhaR1JjYmlBZ1cySnZiMnhsWVc1ZE9pQmdkSEoxWldBZ2FXWWdiR0Y2ZVZ4dUtpOWNibU52Ym5OMElIVndaR0YwWlZKMWJtNXBibWREYjNWdWRDQTlJQ2hoWkdRc0lHbHpUR0Y2ZVNrZ1BUNGdlMXh1SUNCamIyNXpkQ0J0YjJScFpua2dQU0JoWkdRZ1B5QXhJRG9nTFRFN1hHNWNiaUFnZEc5MFlXeFNkVzV1YVc1blEyOTFiblFnS3owZ2JXOWthV1o1TzF4dVhHNGdJR2xtSUNnaGFYTk1ZWHA1S1NCN1hHNGdJQ0FnYm05dVFtRmphMmR5YjNWdVpGSjFibTVwYm1kRGIzVnVkQ0FyUFNCdGIyUnBabms3WEc0Z0lIMWNibjA3WEc1Y2JtVjRjRzl5ZENCa1pXWmhkV3gwSUh0Y2JpQWdZV04wYVhabFZHRnphM01zWEc1Y2JpQWdMeThnUVdOMGFYWmhkR1VnWVNCMFlYTnJYRzRnSUdGamRHbDJZWFJsT2lBb2FXUXNJSFJoYzJzcElEMCtJSHRjYmlBZ0lDQmhZM1JwZG1WVVlYTnJjMXRwWkYwZ1BTQjBZWE5yTzF4dUlDQWdJSFJoYzJzdWFYTkJZM1JwZG1VZ1BTQjBjblZsTzF4dUlDQWdJSFZ3WkdGMFpWRjFaWFZsY3locFpDd2dZV04wYVhaaGRHVlJkV1YxWlN3Z1pHVmhZM1JwZG1GMFpWRjFaWFZsS1R0Y2JseHVJQ0FnSUdsbUlDaDBZWE5yTG05dVFXTjBhWFpoZEdVcElIdGNiaUFnSUNBZ0lIUmhjMnN1YjI1QlkzUnBkbUYwWlNoMFlYTnJLVHRjYmlBZ0lDQjlYRzVjYmlBZ0lDQnBaaUFvZEdGemF5NXZia0ZqZEdsMllYUmxUMjVqWlNrZ2UxeHVJQ0FnSUNBZ2RHRnpheTV2YmtGamRHbDJZWFJsVDI1alpTaDBZWE5yS1R0Y2JpQWdJQ0I5WEc0Z0lIMHNYRzVjYmlBZ0x5OGdSR1ZoWTNScGRtRjBaU0JoSUhSaGMydGNiaUFnWkdWaFkzUnBkbUYwWlRvZ0tHbGtLU0E5UGlCN1hHNGdJQ0FnWTI5dWMzUWdkR0Z6YXlBOUlHRmpkR2wyWlZSaGMydHpXMmxrWFR0Y2JseHVJQ0FnSUdsbUlDaDBZWE5yS1NCN1hHNGdJQ0FnSUNCMWNHUmhkR1ZSZFdWMVpYTW9hV1FzSUdSbFlXTjBhWFpoZEdWUmRXVjFaU3dnWVdOMGFYWmhkR1ZSZFdWMVpTazdYRzRnSUNBZ0lDQjBZWE5yTG1selFXTjBhWFpsSUQwZ1ptRnNjMlU3WEc1Y2JpQWdJQ0FnSUdsbUlDaDBZWE5yTG05dVJHVmhZM1JwZG1GMFpTa2dlMXh1SUNBZ0lDQWdJQ0IwWVhOckxtOXVSR1ZoWTNScGRtRjBaU2gwWVhOcktUdGNiaUFnSUNBZ0lIMWNiaUFnSUNCOVhHNGdJSDBzWEc1Y2JpQWdMeThnVG5WdFltVnlJR0poWTJ0bmNtOTFibVFnZEdGemEyVnpYRzRnSUdkbGRFNXZia0poWTJ0bmNtOTFibVJTZFc1dWFXNW5RMjkxYm5RNklDZ3BJRDArSUc1dmJrSmhZMnRuY205MWJtUlNkVzV1YVc1blEyOTFiblFzWEc1Y2JpQWdMeThnU1c1amNtVnRaVzUwSUdOMWNuSmxiblFnZEdGemF5QkpSQ0JoYm1RZ2NtVjBkWEp1WEc0Z0lHZGxkRlJoYzJ0SlpEb2dLQ2tnUFQ0Z1kzVnljbVZ1ZEZSaGMydEpaQ3NyTEZ4dVhHNGdJQzh2SUZKbGMyOXNkbVVnWVdOMGFYWmhkR1V2WkdWaFkzUnBkbUYwWlNCMFlYTnJaWE1nWVc1a0lISmxkSFZ5YmlCaFkzUnBkbVVnYVdSelhHNGdJR2RsZEVGamRHbDJaVWxrY3pvZ0tDa2dQVDRnZTF4dUlDQWdJQzhxWEc0Z0lDQWdJQ0IwWVhOcklHUmxZV04wYVhaaGRHVWdjWFZsZFdWY2JpQWdJQ0FxTDF4dUlDQWdJR052Ym5OMElHUmxZV04wYVhaaGRHVlJkV1YxWlV4bGJtZDBhQ0E5SUdSbFlXTjBhWFpoZEdWUmRXVjFaUzVzWlc1bmRHZzdYRzVjYmlBZ0lDQm1iM0lnS0d4bGRDQnBJRDBnTURzZ2FTQThJR1JsWVdOMGFYWmhkR1ZSZFdWMVpVeGxibWQwYURzZ2FTc3JLU0I3WEc0Z0lDQWdJQ0JqYjI1emRDQnBaQ0E5SUdSbFlXTjBhWFpoZEdWUmRXVjFaVnRwWFR0Y2JpQWdJQ0FnSUdOdmJuTjBJR0ZqZEdsMlpVbGtTVzVrWlhnZ1BTQnlkVzV1YVc1blNXUnpMbWx1WkdWNFQyWW9hV1FwTzF4dUlDQWdJQ0FnWTI5dWMzUWdkR0Z6YXlBOUlHRmpkR2wyWlZSaGMydHpXMmxrWFR0Y2JseHVJQ0FnSUNBZ0x5OGdTV1lnZEdocGN5QnBjeUJoSUhKMWJtNXBibWNnZEdGemF5d2daR1ZoWTNScGRtRjBaVnh1SUNBZ0lDQWdhV1lnS0dGamRHbDJaVWxrU1c1a1pYZ2dQaUF0TVNrZ2UxeHVJQ0FnSUNBZ0lDQnlkVzV1YVc1blNXUnpMbk53YkdsalpTaGhZM1JwZG1WSlpFbHVaR1Y0TENBeEtUdGNiaUFnSUNBZ0lDQWdkWEJrWVhSbFVuVnVibWx1WjBOdmRXNTBLR1poYkhObExDQjBZWE5yTG1selRHRjZlU2s3WEc0Z0lDQWdJQ0FnSUdSbGJHVjBaU0JoWTNScGRtVlVZWE5yYzF0cFpGMDdYRzRnSUNBZ0lDQjlYRzRnSUNBZ2ZWeHVYRzRnSUNBZ0x5cGNiaUFnSUNBZ0lFVnRjSFI1SUdSbFlXTjBhWFpoZEdVZ2NYVmxkV1V1SUZkbElIVnpaU0JnUVhKeVlYa3VjM0JzYVdObFlDQmlaV05oZFhObElHbDBJR1J2WlhOdUozUmNiaUFnSUNBZ0lIZHZjbXR6SUc5dUlIUm9aU0J2Y21sbmFXNWhiQ0JoY25KaGVTQnpieUIzWlNCa2IyNG5kQ0JvWVhabElIUnZJR2RoY21KaFoyVWdZMjlzYkdWamRDQmhibmwwYUdsdVoxeHVJQ0FnSUNvdlhHNGdJQ0FnWkdWaFkzUnBkbUYwWlZGMVpYVmxMbk53YkdsalpTZ3dMQ0JrWldGamRHbDJZWFJsVVhWbGRXVk1aVzVuZEdncE8xeHVYRzRnSUNBZ0x5cGNiaUFnSUNBZ0lIUmhjMnNnWVdOMGFYWmhkR1VnY1hWbGRXVmNiaUFnSUNBcUwxeHVJQ0FnSUdOdmJuTjBJR0ZqZEdsMllYUmxVWFZsZFdWTVpXNW5kR2dnUFNCaFkzUnBkbUYwWlZGMVpYVmxMbXhsYm1kMGFEdGNibHh1SUNBZ0lHWnZjaUFvYkdWMElHa2dQU0F3T3lCcElEd2dZV04wYVhaaGRHVlJkV1YxWlV4bGJtZDBhRHNnYVNzcktTQjdYRzRnSUNBZ0lDQmpiMjV6ZENCcFpDQTlJR0ZqZEdsMllYUmxVWFZsZFdWYmFWMDdYRzRnSUNBZ0lDQmpiMjV6ZENCaFkzUnBkbVZKWkVsdVpHVjRJRDBnY25WdWJtbHVaMGxrY3k1cGJtUmxlRTltS0dsa0tUdGNiaUFnSUNBZ0lHTnZibk4wSUhSaGMyc2dQU0JoWTNScGRtVlVZWE5yYzF0cFpGMDdYRzVjYmlBZ0lDQWdJQzh2SUVsbUlIUmhjMnNnYVhOdUozUWdZV3h5WldGa2VTQnlkVzV1YVc1bkxDQmhZM1JwZG1GMFpWeHVJQ0FnSUNBZ2FXWWdLR0ZqZEdsMlpVbGtTVzVrWlhnZ1BUMDlJQzB4SUNZbUlIUmhjMnNwSUh0Y2JpQWdJQ0FnSUNBZ2FXWWdLSFJoYzJzdWFYTlFjbWx2Y21sMGVTa2dlMXh1SUNBZ0lDQWdJQ0FnSUhKMWJtNXBibWRKWkhNdWRXNXphR2xtZENocFpDazdYRzRnSUNBZ0lDQWdJSDBnWld4elpTQjdYRzRnSUNBZ0lDQWdJQ0FnY25WdWJtbHVaMGxrY3k1d2RYTm9LR2xrS1R0Y2JpQWdJQ0FnSUNBZ2ZWeHVYRzRnSUNBZ0lDQWdJR2xtSUNoMFlYTnJMbTl1UVdOMGFYWmhkR1ZNYjI5d0tTQjdYRzRnSUNBZ0lDQWdJQ0FnZEdGemF5NXZia0ZqZEdsMllYUmxURzl2Y0NncE8xeHVJQ0FnSUNBZ0lDQjlYRzVjYmlBZ0lDQWdJQ0FnZFhCa1lYUmxVblZ1Ym1sdVowTnZkVzUwS0hSeWRXVXNJSFJoYzJzdWFYTk1ZWHA1S1R0Y2JpQWdJQ0FnSUgxY2JpQWdJQ0I5WEc1Y2JpQWdJQ0JoWTNScGRtRjBaVkYxWlhWbExuTndiR2xqWlNnd0xDQmhZM1JwZG1GMFpWRjFaWFZsVEdWdVozUm9LVHRjYmx4dUlDQWdJSEpsZEhWeWJpQnlkVzV1YVc1blNXUnpPMXh1SUNCOVhHNTlPMXh1SWwxOVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvdGFzay9tYW5hZ2VyLmpzXG4gKiogbW9kdWxlIGlkID0gNTNcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyJdLCJzb3VyY2VSb290IjoiIiwiZmlsZSI6InBvcG1vdGlvbi5nbG9iYWwuanMifQ==