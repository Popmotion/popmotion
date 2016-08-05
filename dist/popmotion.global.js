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
	      if (value.current !== previousValue || Math.abs(value.velocity) >= value.stopSpeed) {
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
	//# sourceMappingURL=data:application/json;base64,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LCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQWN0aW9uIGZyb20gJy4vQWN0aW9uJztcbmltcG9ydCB7IHNwZWVkUGVyRnJhbWUgfSBmcm9tICcuLi9pbmMvY2FsYyc7XG5pbXBvcnQgeyBpc051bSB9IGZyb20gJy4uL2luYy91dGlscyc7XG5cbmNsYXNzIFBoeXNpY3MgZXh0ZW5kcyBBY3Rpb24ge1xuICBjb25zdHJ1Y3RvciguLi5hcmdzKSB7XG4gICAgc3VwZXIoLi4uYXJncyk7XG4gICAgdGhpcy5pbmFjdGl2ZUZyYW1lcyA9IDA7XG4gICAgdGhpcy5jYWxjdWxhdGVzVmVsb2NpdHkgPSB0cnVlO1xuICB9XG5cbiAgb25VcGRhdGUocGh5c2ljcywgZnJhbWVTdGFtcCwgZWxhcHNlZCkge1xuICAgIHRoaXMuaGFzQ2hhbmdlZCA9IGZhbHNlO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLm51bVZhbHVlS2V5czsgaSsrKSB7XG4gICAgICBjb25zdCBrZXkgPSB0aGlzLnZhbHVlS2V5c1tpXTtcbiAgICAgIGNvbnN0IHZhbHVlID0gdGhpcy52YWx1ZXNba2V5XTtcbiAgICAgIGNvbnN0IHByZXZpb3VzVmFsdWUgPSB2YWx1ZS5wcmV2O1xuXG4gICAgICAvLyBBcHBseSBhY2NlbGVyYXRpb25cbiAgICAgIHZhbHVlLnZlbG9jaXR5ICs9IHNwZWVkUGVyRnJhbWUodmFsdWUuYWNjZWxlcmF0aW9uLCBlbGFwc2VkKTtcblxuICAgICAgLy8gQXBwbHkgZnJpY3Rpb25cbiAgICAgIHZhbHVlLnZlbG9jaXR5ICo9ICgxIC0gdmFsdWUuZnJpY3Rpb24pICoqIChlbGFwc2VkIC8gMTAwKTtcblxuICAgICAgLy8gQXBwbHkgc3ByaW5nXG4gICAgICBpZiAodmFsdWUuc3ByaW5nICYmIGlzTnVtKHZhbHVlLnRvKSkge1xuICAgICAgICBjb25zdCBkaXN0YW5jZVRvVGFyZ2V0ID0gdmFsdWUudG8gLSB2YWx1ZS5jdXJyZW50O1xuICAgICAgICB2YWx1ZS52ZWxvY2l0eSArPSBkaXN0YW5jZVRvVGFyZ2V0ICogc3BlZWRQZXJGcmFtZSh2YWx1ZS5zcHJpbmcsIGVsYXBzZWQpO1xuICAgICAgfVxuXG4gICAgICAvLyBBcHBseSBsYXRlc3QgdmVsb2NpdHlcbiAgICAgIHZhbHVlLmN1cnJlbnQgKz0gc3BlZWRQZXJGcmFtZSh2YWx1ZS52ZWxvY2l0eSwgZWxhcHNlZCk7XG5cbiAgICAgIC8vIERldGVjdCBib3VuY2VcbiAgICAgIGlmICgodmFsdWUubWluICE9PSB1bmRlZmluZWQgJiYgdmFsdWUuY3VycmVudCA8IHZhbHVlLm1pbikgfHwgKHZhbHVlLm1heCAhPT0gdW5kZWZpbmVkICYmIHZhbHVlLmN1cnJlbnQgPiB2YWx1ZS5tYXgpKSB7XG4gICAgICAgIHZhbHVlLnZlbG9jaXR5ICo9IC0gdmFsdWUuYm91bmNlO1xuICAgICAgfVxuICAgICAgXG4gICAgICAvLyBDaGVjayBpZiB2YWx1ZSBoYXMgY2hhbmdlZFxuICAgICAgaWYgKHZhbHVlLmN1cnJlbnQgIT09IHByZXZpb3VzVmFsdWUgfHwgTWF0aC5hYnModmFsdWUudmVsb2NpdHkpID49IHZhbHVlLnN0b3BTcGVlZCkge1xuICAgICAgICB0aGlzLmhhc0NoYW5nZWQgPSB0cnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodmFsdWUuc3ByaW5nICYmICF0aGlzLmhhc0NoYW5nZWQpIHtcbiAgICAgICAgdmFsdWUuY3VycmVudCA9IHZhbHVlLnRvO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIG9uRnJhbWVFbmQoKSB7XG4gICAgaWYgKHRoaXMubWF4SW5hY3RpdmVGcmFtZXMgIT09IEluZmluaXR5KSB7XG4gICAgICB0aGlzLmluYWN0aXZlRnJhbWVzID0gdGhpcy5oYXNDaGFuZ2VkID8gMSA6IHRoaXMuaW5hY3RpdmVGcmFtZXMgKyAxO1xuXG4gICAgICBpZiAodGhpcy5pbmFjdGl2ZUZyYW1lcyA+PSB0aGlzLm1heEluYWN0aXZlRnJhbWVzKSB7XG4gICAgICAgIHRoaXMuY29tcGxldGUoKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuUGh5c2ljcy5wcm90b3R5cGUuZGVmYXVsdFZhbHVlUHJvcCA9ICd2ZWxvY2l0eSc7XG5QaHlzaWNzLnByb3RvdHlwZS5kZWZhdWx0VmFsdWUgPSBBY3Rpb24uZXh0ZW5kRGVmYXVsdFZhbHVlKHtcbiAgYWNjZWxlcmF0aW9uOiAwLCAvLyBbbnVtYmVyXTogQWNjZWxlcmF0aW9uIHRvIGFwcGx5IHRvIHZhbHVlLCBpbiB1bml0cyBwZXIgc2Vjb25kXG4gIGJvdW5jZTogMCwgLy8gW251bWJlcl06IEZhY3RvciB0byBtdWx0aXBseSB2ZWxvY2l0eSBieSBvbiBib3VuY2VcbiAgc3ByaW5nOiAwLCAvLyBbbnVtYmVyXTogU3ByaW5nIHN0cmVuZ3RoIGR1cmluZyAnc3RyaW5nJ1xuICBzdG9wU3BlZWQ6IDAuMDAxLCAvLyBbbnVtYmVyXTogU3RvcCBzaW11bGF0aW9uIHVuZGVyIHRoaXMgc3BlZWRcbiAgZnJpY3Rpb246IDAgLy8gW251bWJlcl06IEZyaWN0aW9uIHRvIGFwcGx5IHBlciBmcmFtZSwgMC0xXG59KTtcblBoeXNpY3MucHJvdG90eXBlLmRlZmF1bHRQcm9wcyA9IEFjdGlvbi5leHRlbmREZWZhdWx0UHJvcHMoe1xuICBtYXhJbmFjdGl2ZUZyYW1lczogM1xufSk7XG5cbmV4cG9ydCBkZWZhdWx0IFBoeXNpY3M7XG4iXX0=

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
	//# sourceMappingURL=data:application/json;base64,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QyxFQUE4QztBQUM1QyxVQUFNLE1BQUssY0FBYyxFQUFkLENBQVg7QUFDQSxVQUFNLGlCQUFnQixXQUFXLE9BQVgsQ0FBbUIsR0FBbkIsQ0FBdEI7QUFDQSxVQUFNLFFBQU8sWUFBWSxHQUFaLENBQWI7OztBQUdBLFVBQUksbUJBQWtCLENBQUMsQ0FBbkIsSUFBd0IsS0FBNUIsRUFBa0M7QUFDaEMsWUFBSSxNQUFLLFVBQVQsRUFBcUI7QUFDbkIscUJBQVcsT0FBWCxDQUFtQixHQUFuQjtBQUNELFNBRkQsTUFFTztBQUNMLHFCQUFXLElBQVgsQ0FBZ0IsR0FBaEI7QUFDRDs7QUFFRCxZQUFJLE1BQUssY0FBVCxFQUF5QjtBQUN2QixnQkFBSyxjQUFMO0FBQ0Q7O0FBRUQsMkJBQW1CLElBQW5CLEVBQXlCLE1BQUssTUFBOUI7QUFDRDtBQUNGOztBQUVELGtCQUFjLE1BQWQsQ0FBcUIsQ0FBckIsRUFBd0IsbUJBQXhCOztBQUVBLFdBQU8sVUFBUDtBQUNEO0FBN0ZZLEMiLCJmaWxlIjoibWFuYWdlci5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvbWF0dHBlcnJ5L1NpdGVzL3BvcG1vdGlvbiIsInNvdXJjZXNDb250ZW50IjpbIi8vIFtpbnRdOiBJbmNyZW1lbnRlZCBmb3IgZWFjaCBuZXcgcnVubmluZyB0YXNrXG5sZXQgY3VycmVudFRhc2tJZCA9IDA7XG5cbi8vIFtpbnRdOiBOdW1iZXIgb2YgYWxsIHJ1bm5pbmcgdGFza2VzXG5sZXQgdG90YWxSdW5uaW5nQ291bnQgPSAwO1xuXG4vLyBbaW50XTogTnVtYmVyIG9mIHJ1bm5pbmcgdGFza2VzIGV4Y2x1ZGluZyBiYWNrZ3JvdW5kIHRhc2tlc1xubGV0IG5vbkJhY2tncm91bmRSdW5uaW5nQ291bnQgPSAwO1xuXG4vLyBbYXJyYXldOiBBcnJheSBvZiBydW5uaW5nIHRhc2sgSURzXG5jb25zdCBydW5uaW5nSWRzID0gW107XG5cbi8vIFtvYmplY3RdOiBNYXAgb2YgcnVubmluZyB0YXNrZXNcbmNvbnN0IGFjdGl2ZVRhc2tzID0ge307XG5cbi8vIFthcnJheV06IEFycmF5IG9mIHRhc2sgSURzIHF1ZXVlZCBmb3IgYWN0aXZhdGlvblxuY29uc3QgYWN0aXZhdGVRdWV1ZSA9IFtdO1xuXG4vLyBbYXJyYXldOiBBcnJheSBvZiB0YXNrIElEcyBxdWV1ZWQgZm9yIGRlYWN0aXZhdGlvblxuY29uc3QgZGVhY3RpdmF0ZVF1ZXVlID0gW107XG5cbi8qXG4gIFVwZGF0ZSBhY3RpdmF0ZS9kZWFjdGl2YXRlIHF1ZXVlc1xuXG4gIEBwYXJhbSBbbnVtYmVyXVxuICBAcGFyYW0gW2FycmF5XVxuICBAcGFyYW0gW2FycmF5XVxuKi9cbmNvbnN0IHVwZGF0ZVF1ZXVlcyA9IChpZCwgaW5MaXN0LCBvdXRMaXN0KSA9PiB7XG4gIGNvbnN0IGluUG9zaXRpb24gPSBpbkxpc3QuaW5kZXhPZihpZCk7XG4gIGNvbnN0IG91dFBvc2l0aW9uID0gb3V0TGlzdC5pbmRleE9mKGlkKTtcblxuICBpZiAoaW5Qb3NpdGlvbiA9PT0gLTEpIHtcbiAgICBpbkxpc3QucHVzaChpZCk7XG4gIH1cblxuICBpZiAob3V0UG9zaXRpb24gPiAtMSkge1xuICAgIG91dExpc3Quc3BsaWNlKG91dFBvc2l0aW9uLCAxKTtcbiAgfVxufTtcblxuLypcbiAgVXBkYXRlIHJ1bm5pbmdcblxuICBbYm9vbGVhbl06IGB0cnVlYCB0byBhZGRcbiAgW2Jvb2xlYW5dOiBgdHJ1ZWAgaWYgbGF6eVxuKi9cbmNvbnN0IHVwZGF0ZVJ1bm5pbmdDb3VudCA9IChhZGQsIGlzTGF6eSkgPT4ge1xuICBjb25zdCBtb2RpZnkgPSBhZGQgPyAxIDogLTE7XG5cbiAgdG90YWxSdW5uaW5nQ291bnQgKz0gbW9kaWZ5O1xuXG4gIGlmICghaXNMYXp5KSB7XG4gICAgbm9uQmFja2dyb3VuZFJ1bm5pbmdDb3VudCArPSBtb2RpZnk7XG4gIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgYWN0aXZlVGFza3MsXG5cbiAgLy8gQWN0aXZhdGUgYSB0YXNrXG4gIGFjdGl2YXRlOiAoaWQsIHRhc2spID0+IHtcbiAgICBhY3RpdmVUYXNrc1tpZF0gPSB0YXNrO1xuICAgIHRhc2suaXNBY3RpdmUgPSB0cnVlO1xuICAgIHVwZGF0ZVF1ZXVlcyhpZCwgYWN0aXZhdGVRdWV1ZSwgZGVhY3RpdmF0ZVF1ZXVlKTtcblxuICAgIGlmICh0YXNrLm9uQWN0aXZhdGUpIHtcbiAgICAgIHRhc2sub25BY3RpdmF0ZSh0YXNrKTtcbiAgICB9XG5cbiAgICBpZiAodGFzay5vbkFjdGl2YXRlT25jZSkge1xuICAgICAgdGFzay5vbkFjdGl2YXRlT25jZSh0YXNrKTtcbiAgICB9XG4gIH0sXG5cbiAgLy8gRGVhY3RpdmF0ZSBhIHRhc2tcbiAgZGVhY3RpdmF0ZTogKGlkKSA9PiB7XG4gICAgY29uc3QgdGFzayA9IGFjdGl2ZVRhc2tzW2lkXTtcblxuICAgIGlmICh0YXNrKSB7XG4gICAgICB1cGRhdGVRdWV1ZXMoaWQsIGRlYWN0aXZhdGVRdWV1ZSwgYWN0aXZhdGVRdWV1ZSk7XG4gICAgICB0YXNrLmlzQWN0aXZlID0gZmFsc2U7XG5cbiAgICAgIGlmICh0YXNrLm9uRGVhY3RpdmF0ZSkge1xuICAgICAgICB0YXNrLm9uRGVhY3RpdmF0ZSh0YXNrKTtcbiAgICAgIH1cbiAgICB9XG4gIH0sXG5cbiAgLy8gTnVtYmVyIGJhY2tncm91bmQgdGFza2VzXG4gIGdldE5vbkJhY2tncm91bmRSdW5uaW5nQ291bnQ6ICgpID0+IG5vbkJhY2tncm91bmRSdW5uaW5nQ291bnQsXG5cbiAgLy8gSW5jcmVtZW50IGN1cnJlbnQgdGFzayBJRCBhbmQgcmV0dXJuXG4gIGdldFRhc2tJZDogKCkgPT4gY3VycmVudFRhc2tJZCsrLFxuXG4gIC8vIFJlc29sdmUgYWN0aXZhdGUvZGVhY3RpdmF0ZSB0YXNrZXMgYW5kIHJldHVybiBhY3RpdmUgaWRzXG4gIGdldEFjdGl2ZUlkczogKCkgPT4ge1xuICAgIC8qXG4gICAgICB0YXNrIGRlYWN0aXZhdGUgcXVldWVcbiAgICAqL1xuICAgIGNvbnN0IGRlYWN0aXZhdGVRdWV1ZUxlbmd0aCA9IGRlYWN0aXZhdGVRdWV1ZS5sZW5ndGg7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGRlYWN0aXZhdGVRdWV1ZUxlbmd0aDsgaSsrKSB7XG4gICAgICBjb25zdCBpZCA9IGRlYWN0aXZhdGVRdWV1ZVtpXTtcbiAgICAgIGNvbnN0IGFjdGl2ZUlkSW5kZXggPSBydW5uaW5nSWRzLmluZGV4T2YoaWQpO1xuICAgICAgY29uc3QgdGFzayA9IGFjdGl2ZVRhc2tzW2lkXTtcblxuICAgICAgLy8gSWYgdGhpcyBpcyBhIHJ1bm5pbmcgdGFzaywgZGVhY3RpdmF0ZVxuICAgICAgaWYgKGFjdGl2ZUlkSW5kZXggPiAtMSkge1xuICAgICAgICBydW5uaW5nSWRzLnNwbGljZShhY3RpdmVJZEluZGV4LCAxKTtcbiAgICAgICAgdXBkYXRlUnVubmluZ0NvdW50KGZhbHNlLCB0YXNrLmlzTGF6eSk7XG4gICAgICAgIGRlbGV0ZSBhY3RpdmVUYXNrc1tpZF07XG4gICAgICB9XG4gICAgfVxuXG4gICAgLypcbiAgICAgIEVtcHR5IGRlYWN0aXZhdGUgcXVldWUuIFdlIHVzZSBgQXJyYXkuc3BsaWNlYCBiZWNhdXNlIGl0IGRvZXNuJ3RcbiAgICAgIHdvcmtzIG9uIHRoZSBvcmlnaW5hbCBhcnJheSBzbyB3ZSBkb24ndCBoYXZlIHRvIGdhcmJhZ2UgY29sbGVjdCBhbnl0aGluZ1xuICAgICovXG4gICAgZGVhY3RpdmF0ZVF1ZXVlLnNwbGljZSgwLCBkZWFjdGl2YXRlUXVldWVMZW5ndGgpO1xuXG4gICAgLypcbiAgICAgIHRhc2sgYWN0aXZhdGUgcXVldWVcbiAgICAqL1xuICAgIGNvbnN0IGFjdGl2YXRlUXVldWVMZW5ndGggPSBhY3RpdmF0ZVF1ZXVlLmxlbmd0aDtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYWN0aXZhdGVRdWV1ZUxlbmd0aDsgaSsrKSB7XG4gICAgICBjb25zdCBpZCA9IGFjdGl2YXRlUXVldWVbaV07XG4gICAgICBjb25zdCBhY3RpdmVJZEluZGV4ID0gcnVubmluZ0lkcy5pbmRleE9mKGlkKTtcbiAgICAgIGNvbnN0IHRhc2sgPSBhY3RpdmVUYXNrc1tpZF07XG5cbiAgICAgIC8vIElmIHRhc2sgaXNuJ3QgYWxyZWFkeSBydW5uaW5nLCBhY3RpdmF0ZVxuICAgICAgaWYgKGFjdGl2ZUlkSW5kZXggPT09IC0xICYmIHRhc2spIHtcbiAgICAgICAgaWYgKHRhc2suaXNQcmlvcml0eSkge1xuICAgICAgICAgIHJ1bm5pbmdJZHMudW5zaGlmdChpZCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcnVubmluZ0lkcy5wdXNoKGlkKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0YXNrLm9uQWN0aXZhdGVMb29wKSB7XG4gICAgICAgICAgdGFzay5vbkFjdGl2YXRlTG9vcCgpO1xuICAgICAgICB9XG5cbiAgICAgICAgdXBkYXRlUnVubmluZ0NvdW50KHRydWUsIHRhc2suaXNMYXp5KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBhY3RpdmF0ZVF1ZXVlLnNwbGljZSgwLCBhY3RpdmF0ZVF1ZXVlTGVuZ3RoKTtcblxuICAgIHJldHVybiBydW5uaW5nSWRzO1xuICB9XG59O1xuIl19

/***/ }
/******/ ]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgN2IzMDU5NjRlNzhiNDFlMTgzYjQiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xvYWQvZ2xvYmFsLmpzIiwid2VicGFjazovLy8uL3NyYy9wb3Btb3Rpb24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Rhc2svdGltZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FjdGlvbnMvQWN0aW9uLmpzIiwid2VicGFjazovLy8uL3NyYy9hY3Rpb25zL0Zsb3cuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FjdGlvbnMvVHdlZW4uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FjdGlvbnMvUGh5c2ljcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYWN0aW9ucy9UcmFjay5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdGFzay9UYXNrLmpzIiwid2VicGFjazovLy8uL3NyYy9pbnB1dC9JbnB1dC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5jL3N0YWdnZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luYy90aW1lbGluZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYWRhcHRlci9hZGFwdGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9hZGFwdGVyL2F0dHItYWRhcHRlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYWRhcHRlci9jc3MtYWRhcHRlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYWRhcHRlci9vYmplY3QtYWRhcHRlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYWRhcHRlci9zdmctYWRhcHRlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYWRhcHRlci9zdmctcGF0aC1hZGFwdGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9hY3Rpb25zL2Vhc2luZy9wcmVzZXQtZWFzaW5nLmpzIiwid2VicGFjazovLy8uL3NyYy9hY3Rpb25zL2Zsb3cvZ2V0LWZsb3cuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luYy9jYWxjLmpzIiwid2VicGFjazovLy8uL3NyYy9pbmMvdXRpbHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZhbHVlLXR5cGVzL2FscGhhLmpzIiwid2VicGFjazovLy8uL3NyYy92YWx1ZS10eXBlcy9hbmdsZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdmFsdWUtdHlwZXMvY29sb3IuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZhbHVlLXR5cGVzL2NvbXBsZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZhbHVlLXR5cGVzL2hleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdmFsdWUtdHlwZXMvaHNsLmpzIiwid2VicGFjazovLy8uL3NyYy92YWx1ZS10eXBlcy9weC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdmFsdWUtdHlwZXMvcmdiLmpzIiwid2VicGFjazovLy8uL3NyYy92YWx1ZS10eXBlcy9zY2FsZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdmFsdWUtdHlwZXMvc2hhZG93LmpzIiwid2VicGFjazovLy8uL3NyYy92YWx1ZS10eXBlcy91bml0LmpzIiwid2VicGFjazovLy8uL3NyYy9pbmMvdHJhbnNmb3JtZXJzLmpzIiwid2VicGFjazovLy8uL3NyYy92YWx1ZS10eXBlcy9kZXRlY3QuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luYy9udW1lcmljYWwtdmFsdWVzLmpzIiwid2VicGFjazovLy8uL3NyYy9pbmMvZGV0ZWN0LWFkYXB0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FjdGlvbnMvZmxvdy9nZW5lcmF0ZS1ibGVuZC1jdXJ2ZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5wdXQvUG9pbnRlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdGFzay9sb29wLmpzIiwid2VicGFjazovLy8uL3NyYy9hZGFwdGVyL2Nzcy9zdGF0ZS1tYXAuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FkYXB0ZXIvY3NzL3ZhbHVlLXR5cGUtbWFwLmpzIiwid2VicGFjazovLy8uL3NyYy9hZGFwdGVyL2Nzcy9idWlsZC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYWRhcHRlci9jc3MvcHJlZml4ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FkYXB0ZXIvY3NzL3RyYW5zZm9ybS1wcm9wcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYWRhcHRlci9zdmcvdmFsdWUtdHlwZS1tYXAuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FkYXB0ZXIvc3ZnL2J1aWxkLmpzIiwid2VicGFjazovLy8uL3NyYy9hZGFwdGVyL3N2Zy1wYXRoL2J1aWxkLmpzIiwid2VicGFjazovLy8uL3NyYy92YWx1ZS10eXBlcy9zZXR0aW5ncy9kZWZhdWx0LXByb3BzLmpzIiwid2VicGFjazovLy8uL3NyYy92YWx1ZS10eXBlcy9zZXR0aW5ncy9kaWN0aW9uYXJ5LmpzIiwid2VicGFjazovLy8uL3NyYy9hY3Rpb25zL2Vhc2luZy9jcmVhdGUtZWFzaW5nLmpzIiwid2VicGFjazovLy8uL3NyYy9hY3Rpb25zL2Vhc2luZy9jcmVhdGUtYmV6aWVyLmpzIiwid2VicGFjazovLy8uL3NyYy90YXNrL3RpY2suanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Rhc2svbWFuYWdlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdUJBQWU7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSx3Qzs7Ozs7OztBQ3RDQTs7QUFFQTs7QUFFQTs7QUFFQSx3Q0FBdUMsNkJBQTZCLFlBQVksRUFBRSxPQUFPLGlCQUFpQixtQkFBbUIsdUJBQXVCLDRFQUE0RSxFQUFFLEVBQUUsc0JBQXNCLGVBQWUsRUFBRTs7QUFFM1E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsNENBQTJDLDJxQjs7Ozs7O0FDZjNDOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUM7O0FBRUQ7O0FBRUE7O0FBRUE7O0FBRUE7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O0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOzs7QUFHQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7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O0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsTUFBSztBQUNMOztBQUVBO0FBQ0EsTUFBSztBQUNMO0FBQ0EsTUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsNENBQTJDLDI2Uzs7Ozs7O0FDakszQzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUM7QUFDRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLFFBQU87QUFDUDtBQUNBLElBQUc7QUFDSDs7QUFFQTtBQUNBLDRDQUEyQyxteEU7Ozs7OztBQzlDM0M7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLElBQUc7O0FBRUg7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0EsSUFBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQSxJQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxvQkFBbUIsMkJBQTJCO0FBQzlDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHFCQUFvQiwwQkFBMEI7QUFDOUM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSw0Q0FBMkMsbXJQIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGV4cG9ydHM6IHt9LFxuIFx0XHRcdGlkOiBtb2R1bGVJZCxcbiBcdFx0XHRsb2FkZWQ6IGZhbHNlXG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oMCk7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogd2VicGFjay9ib290c3RyYXAgN2IzMDU5NjRlNzhiNDFlMTgzYjRcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbnZhciBfcG9wbW90aW9uID0gcmVxdWlyZSgnLi4vcG9wbW90aW9uJyk7XG5cbnZhciBwb3Btb3Rpb24gPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChfcG9wbW90aW9uKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQob2JqKSB7IGlmIChvYmogJiYgb2JqLl9fZXNNb2R1bGUpIHsgcmV0dXJuIG9iajsgfSBlbHNlIHsgdmFyIG5ld09iaiA9IHt9OyBpZiAob2JqICE9IG51bGwpIHsgZm9yICh2YXIga2V5IGluIG9iaikgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwga2V5KSkgbmV3T2JqW2tleV0gPSBvYmpba2V5XTsgfSB9IG5ld09iai5kZWZhdWx0ID0gb2JqOyByZXR1cm4gbmV3T2JqOyB9IH1cblxudmFyIFVJcmVmID0gd2luZG93Lm1vdGlvbjtcblxucG9wbW90aW9uLm5vQ29uZmxpY3QgPSBmdW5jdGlvbiAoKSB7XG4gIHdpbmRvdy5tb3Rpb24gPSBVSXJlZjtcbn07XG5cbndpbmRvdy5tb3Rpb24gPSB3aW5kb3cucG9wbW90aW9uID0gcG9wbW90aW9uO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluTnlZeTlzYjJGa0wyZHNiMkpoYkM1cWN5SmRMQ0p1WVcxbGN5STZXMTBzSW0xaGNIQnBibWR6SWpvaU96dEJRVUZCT3p0SlFVRlpMRk03T3pzN1FVRkZXaXhKUVVGTkxGRkJRVkVzVDBGQlR5eE5RVUZ5UWpzN1FVRkZRU3hWUVVGVkxGVkJRVllzUjBGQmRVSXNXVUZCV1R0QlFVTnFReXhUUVVGUExFMUJRVkFzUjBGQlowSXNTMEZCYUVJN1FVRkRSQ3hEUVVaRU96dEJRVWxCTEU5QlFVOHNUVUZCVUN4SFFVRm5RaXhQUVVGUExGTkJRVkFzUjBGQmJVSXNVMEZCYmtNaUxDSm1hV3hsSWpvaVoyeHZZbUZzTG1weklpd2ljMjkxY21ObFVtOXZkQ0k2SWk5VmMyVnljeTl0WVhSMGNHVnljbmt2VTJsMFpYTXZjRzl3Ylc5MGFXOXVJaXdpYzI5MWNtTmxjME52Ym5SbGJuUWlPbHNpYVcxd2IzSjBJQ29nWVhNZ2NHOXdiVzkwYVc5dUlHWnliMjBnSnk0dUwzQnZjRzF2ZEdsdmJpYzdYRzVjYm1OdmJuTjBJRlZKY21WbUlEMGdkMmx1Wkc5M0xtMXZkR2x2Ymp0Y2JseHVjRzl3Ylc5MGFXOXVMbTV2UTI5dVpteHBZM1FnUFNCbWRXNWpkR2x2YmlBb0tTQjdYRzRnSUhkcGJtUnZkeTV0YjNScGIyNGdQU0JWU1hKbFpqdGNibjA3WEc1Y2JuZHBibVJ2ZHk1dGIzUnBiMjRnUFNCM2FXNWtiM2N1Y0c5d2JXOTBhVzl1SUQwZ2NHOXdiVzkwYVc5dU95SmRmUT09XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9sb2FkL2dsb2JhbC5qc1xuICoqIG1vZHVsZSBpZCA9IDBcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHMuQWN0aW9uID0gZXhwb3J0cy50cmFuc2Zvcm1lcnMgPSBleHBvcnRzLnZhbHVlVHlwZSA9IGV4cG9ydHMuc2V0R2xvYmFsRGlsYXRpb24gPSBleHBvcnRzLnV0aWxzID0gZXhwb3J0cy5jYWxjID0gZXhwb3J0cy5kZXRlY3RGbG93ID0gZXhwb3J0cy5lYXNpbmcgPSBleHBvcnRzLnN2Z1BhdGggPSBleHBvcnRzLnN2ZyA9IGV4cG9ydHMub2JqZWN0ID0gZXhwb3J0cy5jc3MgPSBleHBvcnRzLmF0dHIgPSBleHBvcnRzLmNyZWF0ZUFkYXB0ZXIgPSBleHBvcnRzLnRpbWVsaW5lID0gZXhwb3J0cy5zdGFnZ2VyID0gZXhwb3J0cy50YXNrID0gZXhwb3J0cy5pbnB1dCA9IGV4cG9ydHMudHJhY2sgPSBleHBvcnRzLnBoeXNpY3MgPSBleHBvcnRzLnR3ZWVuID0gZXhwb3J0cy5mbG93ID0gdW5kZWZpbmVkO1xuXG52YXIgX3RpbWVyID0gcmVxdWlyZSgnLi90YXNrL3RpbWVyJyk7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnc2V0R2xvYmFsRGlsYXRpb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBfdGltZXIuc2V0R2xvYmFsRGlsYXRpb247XG4gIH1cbn0pO1xuXG52YXIgX0FjdGlvbiA9IHJlcXVpcmUoJy4vYWN0aW9ucy9BY3Rpb24nKTtcblxudmFyIF9BY3Rpb24yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfQWN0aW9uKTtcblxudmFyIF9GbG93ID0gcmVxdWlyZSgnLi9hY3Rpb25zL0Zsb3cnKTtcblxudmFyIF9GbG93MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX0Zsb3cpO1xuXG52YXIgX1R3ZWVuID0gcmVxdWlyZSgnLi9hY3Rpb25zL1R3ZWVuJyk7XG5cbnZhciBfVHdlZW4yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfVHdlZW4pO1xuXG52YXIgX1BoeXNpY3MgPSByZXF1aXJlKCcuL2FjdGlvbnMvUGh5c2ljcycpO1xuXG52YXIgX1BoeXNpY3MyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfUGh5c2ljcyk7XG5cbnZhciBfVHJhY2sgPSByZXF1aXJlKCcuL2FjdGlvbnMvVHJhY2snKTtcblxudmFyIF9UcmFjazIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9UcmFjayk7XG5cbnZhciBfVGFzayA9IHJlcXVpcmUoJy4vdGFzay9UYXNrJyk7XG5cbnZhciBfVGFzazIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9UYXNrKTtcblxudmFyIF9JbnB1dCA9IHJlcXVpcmUoJy4vaW5wdXQvSW5wdXQnKTtcblxudmFyIF9JbnB1dDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9JbnB1dCk7XG5cbnZhciBfc3RhZ2dlcjIgPSByZXF1aXJlKCcuL2luYy9zdGFnZ2VyJyk7XG5cbnZhciBfc3RhZ2dlcjMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9zdGFnZ2VyMik7XG5cbnZhciBfdGltZWxpbmUyID0gcmVxdWlyZSgnLi9pbmMvdGltZWxpbmUnKTtcblxudmFyIF90aW1lbGluZTMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF90aW1lbGluZTIpO1xuXG52YXIgX2FkYXB0ZXIgPSByZXF1aXJlKCcuL2FkYXB0ZXIvYWRhcHRlcicpO1xuXG52YXIgX2FkYXB0ZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfYWRhcHRlcik7XG5cbnZhciBfYXR0ckFkYXB0ZXIgPSByZXF1aXJlKCcuL2FkYXB0ZXIvYXR0ci1hZGFwdGVyJyk7XG5cbnZhciBfYXR0ckFkYXB0ZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfYXR0ckFkYXB0ZXIpO1xuXG52YXIgX2Nzc0FkYXB0ZXIgPSByZXF1aXJlKCcuL2FkYXB0ZXIvY3NzLWFkYXB0ZXInKTtcblxudmFyIF9jc3NBZGFwdGVyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2Nzc0FkYXB0ZXIpO1xuXG52YXIgX29iamVjdEFkYXB0ZXIgPSByZXF1aXJlKCcuL2FkYXB0ZXIvb2JqZWN0LWFkYXB0ZXInKTtcblxudmFyIF9vYmplY3RBZGFwdGVyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX29iamVjdEFkYXB0ZXIpO1xuXG52YXIgX3N2Z0FkYXB0ZXIgPSByZXF1aXJlKCcuL2FkYXB0ZXIvc3ZnLWFkYXB0ZXInKTtcblxudmFyIF9zdmdBZGFwdGVyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3N2Z0FkYXB0ZXIpO1xuXG52YXIgX3N2Z1BhdGhBZGFwdGVyID0gcmVxdWlyZSgnLi9hZGFwdGVyL3N2Zy1wYXRoLWFkYXB0ZXInKTtcblxudmFyIF9zdmdQYXRoQWRhcHRlcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9zdmdQYXRoQWRhcHRlcik7XG5cbnZhciBfcHJlc2V0RWFzaW5nID0gcmVxdWlyZSgnLi9hY3Rpb25zL2Vhc2luZy9wcmVzZXQtZWFzaW5nJyk7XG5cbnZhciBfcHJlc2V0RWFzaW5nMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3ByZXNldEVhc2luZyk7XG5cbnZhciBfZ2V0RmxvdyA9IHJlcXVpcmUoJy4vYWN0aW9ucy9mbG93L2dldC1mbG93Jyk7XG5cbnZhciBfZ2V0RmxvdzIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9nZXRGbG93KTtcblxudmFyIF9jYWxjMiA9IHJlcXVpcmUoJy4vaW5jL2NhbGMnKTtcblxudmFyIF9jYWxjID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQoX2NhbGMyKTtcblxudmFyIF91dGlsczIgPSByZXF1aXJlKCcuL2luYy91dGlscycpO1xuXG52YXIgX3V0aWxzID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQoX3V0aWxzMik7XG5cbnZhciBfYWxwaGEgPSByZXF1aXJlKCcuL3ZhbHVlLXR5cGVzL2FscGhhJyk7XG5cbnZhciBfYWxwaGEyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfYWxwaGEpO1xuXG52YXIgX2FuZ2xlID0gcmVxdWlyZSgnLi92YWx1ZS10eXBlcy9hbmdsZScpO1xuXG52YXIgX2FuZ2xlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2FuZ2xlKTtcblxudmFyIF9jb2xvciA9IHJlcXVpcmUoJy4vdmFsdWUtdHlwZXMvY29sb3InKTtcblxudmFyIF9jb2xvcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jb2xvcik7XG5cbnZhciBfY29tcGxleCA9IHJlcXVpcmUoJy4vdmFsdWUtdHlwZXMvY29tcGxleCcpO1xuXG52YXIgX2NvbXBsZXgyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY29tcGxleCk7XG5cbnZhciBfaGV4ID0gcmVxdWlyZSgnLi92YWx1ZS10eXBlcy9oZXgnKTtcblxudmFyIF9oZXgyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfaGV4KTtcblxudmFyIF9oc2wgPSByZXF1aXJlKCcuL3ZhbHVlLXR5cGVzL2hzbCcpO1xuXG52YXIgX2hzbDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9oc2wpO1xuXG52YXIgX3B4ID0gcmVxdWlyZSgnLi92YWx1ZS10eXBlcy9weCcpO1xuXG52YXIgX3B4MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3B4KTtcblxudmFyIF9yZ2IgPSByZXF1aXJlKCcuL3ZhbHVlLXR5cGVzL3JnYicpO1xuXG52YXIgX3JnYjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZ2IpO1xuXG52YXIgX3NjYWxlID0gcmVxdWlyZSgnLi92YWx1ZS10eXBlcy9zY2FsZScpO1xuXG52YXIgX3NjYWxlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3NjYWxlKTtcblxudmFyIF9zaGFkb3cgPSByZXF1aXJlKCcuL3ZhbHVlLXR5cGVzL3NoYWRvdycpO1xuXG52YXIgX3NoYWRvdzIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9zaGFkb3cpO1xuXG52YXIgX3VuaXQgPSByZXF1aXJlKCcuL3ZhbHVlLXR5cGVzL3VuaXQnKTtcblxudmFyIF91bml0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3VuaXQpO1xuXG52YXIgX3RyYW5zZm9ybWVyczIgPSByZXF1aXJlKCcuL2luYy90cmFuc2Zvcm1lcnMnKTtcblxudmFyIF90cmFuc2Zvcm1lcnMgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChfdHJhbnNmb3JtZXJzMik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKG9iaikgeyBpZiAob2JqICYmIG9iai5fX2VzTW9kdWxlKSB7IHJldHVybiBvYmo7IH0gZWxzZSB7IHZhciBuZXdPYmogPSB7fTsgaWYgKG9iaiAhPSBudWxsKSB7IGZvciAodmFyIGtleSBpbiBvYmopIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGtleSkpIG5ld09ialtrZXldID0gb2JqW2tleV07IH0gfSBuZXdPYmouZGVmYXVsdCA9IG9iajsgcmV0dXJuIG5ld09iajsgfSB9XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbi8vIEV4cG9ydCBmYWN0b3J5IGZ1bmN0aW9uc1xudmFyIGZsb3cgPSBleHBvcnRzLmZsb3cgPSBmdW5jdGlvbiAoKSB7XG4gIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgYXJnc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgfVxuXG4gIHJldHVybiBuZXcgKEZ1bmN0aW9uLnByb3RvdHlwZS5iaW5kLmFwcGx5KF9GbG93Mi5kZWZhdWx0LCBbbnVsbF0uY29uY2F0KGFyZ3MpKSkoKTtcbn07IC8vIEltcG9ydCBjbGFzc2VzIC0gbG9uZyB0ZXJtIGdvYWwgdG8gbW92ZSB0b3dhcmRzIGNvbXBvc2l0aW9uXG5cbnZhciB0d2VlbiA9IGV4cG9ydHMudHdlZW4gPSBmdW5jdGlvbiAocHJvcHMpIHtcbiAgcmV0dXJuIG5ldyBfVHdlZW4yLmRlZmF1bHQocHJvcHMpO1xufTtcbnZhciBwaHlzaWNzID0gZXhwb3J0cy5waHlzaWNzID0gZnVuY3Rpb24gKHByb3BzKSB7XG4gIHJldHVybiBuZXcgX1BoeXNpY3MyLmRlZmF1bHQocHJvcHMpO1xufTtcbnZhciB0cmFjayA9IGV4cG9ydHMudHJhY2sgPSBmdW5jdGlvbiAoKSB7XG4gIGZvciAodmFyIF9sZW4yID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IEFycmF5KF9sZW4yKSwgX2tleTIgPSAwOyBfa2V5MiA8IF9sZW4yOyBfa2V5MisrKSB7XG4gICAgYXJnc1tfa2V5Ml0gPSBhcmd1bWVudHNbX2tleTJdO1xuICB9XG5cbiAgcmV0dXJuIG5ldyAoRnVuY3Rpb24ucHJvdG90eXBlLmJpbmQuYXBwbHkoX1RyYWNrMi5kZWZhdWx0LCBbbnVsbF0uY29uY2F0KGFyZ3MpKSkoKTtcbn07XG52YXIgaW5wdXQgPSBleHBvcnRzLmlucHV0ID0gZnVuY3Rpb24gKCkge1xuICBmb3IgKHZhciBfbGVuMyA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBBcnJheShfbGVuMyksIF9rZXkzID0gMDsgX2tleTMgPCBfbGVuMzsgX2tleTMrKykge1xuICAgIGFyZ3NbX2tleTNdID0gYXJndW1lbnRzW19rZXkzXTtcbiAgfVxuXG4gIHJldHVybiBuZXcgKEZ1bmN0aW9uLnByb3RvdHlwZS5iaW5kLmFwcGx5KF9JbnB1dDIuZGVmYXVsdCwgW251bGxdLmNvbmNhdChhcmdzKSkpKCk7XG59O1xudmFyIHRhc2sgPSBleHBvcnRzLnRhc2sgPSBmdW5jdGlvbiAoKSB7XG4gIGZvciAodmFyIF9sZW40ID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IEFycmF5KF9sZW40KSwgX2tleTQgPSAwOyBfa2V5NCA8IF9sZW40OyBfa2V5NCsrKSB7XG4gICAgYXJnc1tfa2V5NF0gPSBhcmd1bWVudHNbX2tleTRdO1xuICB9XG5cbiAgcmV0dXJuIG5ldyAoRnVuY3Rpb24ucHJvdG90eXBlLmJpbmQuYXBwbHkoX1Rhc2syLmRlZmF1bHQsIFtudWxsXS5jb25jYXQoYXJncykpKSgpO1xufTtcbmV4cG9ydHMuc3RhZ2dlciA9IF9zdGFnZ2VyMy5kZWZhdWx0O1xuZXhwb3J0cy50aW1lbGluZSA9IF90aW1lbGluZTMuZGVmYXVsdDtcblxuLy8gQWRhcHRlcnNcblxuZXhwb3J0cy5jcmVhdGVBZGFwdGVyID0gX2FkYXB0ZXIyLmRlZmF1bHQ7XG5leHBvcnRzLmF0dHIgPSBfYXR0ckFkYXB0ZXIyLmRlZmF1bHQ7XG5leHBvcnRzLmNzcyA9IF9jc3NBZGFwdGVyMi5kZWZhdWx0O1xuZXhwb3J0cy5vYmplY3QgPSBfb2JqZWN0QWRhcHRlcjIuZGVmYXVsdDtcbmV4cG9ydHMuc3ZnID0gX3N2Z0FkYXB0ZXIyLmRlZmF1bHQ7XG5leHBvcnRzLnN2Z1BhdGggPSBfc3ZnUGF0aEFkYXB0ZXIyLmRlZmF1bHQ7XG5cbi8vIEVhc2luZ1xuXG5leHBvcnRzLmVhc2luZyA9IF9wcmVzZXRFYXNpbmcyLmRlZmF1bHQ7XG52YXIgZGV0ZWN0RmxvdyA9IGV4cG9ydHMuZGV0ZWN0RmxvdyA9IF9nZXRGbG93Mi5kZWZhdWx0O1xuXG4vLyBVdGlsc1xuZXhwb3J0cy5jYWxjID0gX2NhbGM7XG5leHBvcnRzLnV0aWxzID0gX3V0aWxzO1xuXG4vLyBWYWx1ZSB0eXBlc1xuXG52YXIgdmFsdWVUeXBlID0gZXhwb3J0cy52YWx1ZVR5cGUgPSB7IGFscGhhOiBfYWxwaGEyLmRlZmF1bHQsIGFuZ2xlOiBfYW5nbGUyLmRlZmF1bHQsIGNvbG9yOiBfY29sb3IyLmRlZmF1bHQsIGNvbXBsZXg6IF9jb21wbGV4Mi5kZWZhdWx0LCBoZXg6IF9oZXgyLmRlZmF1bHQsIGhzbDogX2hzbDIuZGVmYXVsdCwgcHg6IF9weDIuZGVmYXVsdCwgcmdiOiBfcmdiMi5kZWZhdWx0LCBzY2FsZTogX3NjYWxlMi5kZWZhdWx0LCBzaGFkb3c6IF9zaGFkb3cyLmRlZmF1bHQsIHVuaXQ6IF91bml0Mi5kZWZhdWx0IH07XG5cbi8vIFRyYW5zZm9ybWVyc1xuZXhwb3J0cy50cmFuc2Zvcm1lcnMgPSBfdHJhbnNmb3JtZXJzO1xuXG4vKlxuICBSZXR1cm5zIGEgdmVyc2lvbiBvZiB0aGUgQWN0aW9uIGJvdW5kIHRvIGEgRmxvd1xuXG4gIFdlJ3JlIGFkZGluZyBgb25gIGhlcmUgYmVjYXVzZSBGbG93IGV4dGVuZHMgQWN0aW9uLFxuICBvdGhlcndpc2UgY3JlYXRpbmcgYSBjaXJjdWxhciBtb2R1bGFyIGRlcGVuZGVuY3kuIEZ1dHVyZVxuICByZWZhY3RvcmluZywgaWUgbW92aW5nIHRvIGEgY29tcG9zaXRpb25hbCBtb2RlbCB3aWxsXG4gIHJlbW92ZSB0aGUgbmVlZCBmb3IgdXMgdG8gZG8gdGhpcyBoZXJlLlxuKi9cblxuX0FjdGlvbjIuZGVmYXVsdC5wcm90b3R5cGUub24gPSBmdW5jdGlvbiAoZWxlbWVudCkge1xuICBpZiAoIWVsZW1lbnQuY29ubmVjdCkge1xuICAgIGVsZW1lbnQgPSAoMCwgX2dldEZsb3cyLmRlZmF1bHQpKGVsZW1lbnQpO1xuICB9XG5cbiAgcmV0dXJuIGVsZW1lbnQuY29ubmVjdCh0aGlzKTtcbn07XG5cbmV4cG9ydHMuQWN0aW9uID0gX0FjdGlvbjIuZGVmYXVsdDtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbk55WXk5d2IzQnRiM1JwYjI0dWFuTWlYU3dpYm1GdFpYTWlPbHRkTENKdFlYQndhVzVuY3lJNklqczdPenM3T3pzN096dHJRa0Z0UTFNc2FVSTdPenM3UVVGc1ExUTdPenM3UVVGRFFUczdPenRCUVVOQk96czdPMEZCUTBFN096czdRVUZEUVRzN096dEJRVU5CT3pzN08wRkJRMEU3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN1FVRnpRa0U3T3pzN096czdPenM3T3p0QlFWTkJPenM3TzBGQlEwRTdPenM3UVVGRFFUczdPenRCUVVOQk96czdPMEZCUTBFN096czdRVUZEUVRzN096dEJRVU5CT3pzN08wRkJRMEU3T3pzN1FVRkRRVHM3T3p0QlFVTkJPenM3TzBGQlEwRTdPenM3T3pzN096czdPenM3UVVGMFEwOHNTVUZCVFN4elFrRkJUenRCUVVGQkxHOURRVUZKTEVsQlFVbzdRVUZCU1N4UlFVRktPMEZCUVVFN08wRkJRVUVzTUVWQlFYbENMRWxCUVhwQ08wRkJRVUVzUTBGQllpeERPenRCUVVOQkxFbEJRVTBzZDBKQlFWRXNWVUZCUXl4TFFVRkVPMEZCUVVFc1UwRkJWeXh2UWtGQlZTeExRVUZXTEVOQlFWZzdRVUZCUVN4RFFVRmtPMEZCUTBFc1NVRkJUU3cwUWtGQlZTeFZRVUZETEV0QlFVUTdRVUZCUVN4VFFVRlhMSE5DUVVGWkxFdEJRVm9zUTBGQldEdEJRVUZCTEVOQlFXaENPMEZCUTBFc1NVRkJUU3gzUWtGQlVUdEJRVUZCTEhGRFFVRkpMRWxCUVVvN1FVRkJTU3hSUVVGS08wRkJRVUU3TzBGQlFVRXNNa1ZCUVRCQ0xFbEJRVEZDTzBGQlFVRXNRMEZCWkR0QlFVTkJMRWxCUVUwc2QwSkJRVkU3UVVGQlFTeHhRMEZCU1N4SlFVRktPMEZCUVVrc1VVRkJTanRCUVVGQk96dEJRVUZCTERKRlFVRXdRaXhKUVVFeFFqdEJRVUZCTEVOQlFXUTdRVUZEUVN4SlFVRk5MSE5DUVVGUE8wRkJRVUVzY1VOQlFVa3NTVUZCU2p0QlFVRkpMRkZCUVVvN1FVRkJRVHM3UVVGQlFTd3dSVUZCZVVJc1NVRkJla0k3UVVGQlFTeERRVUZpTzFGQlEwRXNUenRSUVVOQkxGRTdPenM3VVVGSFFTeGhPMUZCUTBFc1NUdFJRVU5CTEVjN1VVRkRRU3hOTzFGQlEwRXNSenRSUVVOQkxFODdPenM3VVVGSFFTeE5PMEZCUlVFc1NVRkJUU3h0UkVGQlRqczdPMUZCUjBzc1NUdFJRVU5CTEVzN096czdRVUZsVEN4SlFVRk5MR2REUVVGWkxFVkJRVVVzYzBKQlFVWXNSVUZCVXl4elFrRkJWQ3hGUVVGblFpeHpRa0ZCYUVJc1JVRkJkVUlzTUVKQlFYWkNMRVZCUVdkRExHdENRVUZvUXl4RlFVRnhReXhyUWtGQmNrTXNSVUZCTUVNc1owSkJRVEZETEVWQlFUaERMR3RDUVVFNVF5eEZRVUZ0UkN4elFrRkJia1FzUlVGQk1FUXNkMEpCUVRGRUxFVkJRV3RGTEc5Q1FVRnNSU3hGUVVGc1FqczdPMUZCUjBzc1dUczdPenM3T3pzN096czdRVUZWV2l4cFFrRkJUeXhUUVVGUUxFTkJRV2xDTEVWQlFXcENMRWRCUVhOQ0xGVkJRVlVzVDBGQlZpeEZRVUZ0UWp0QlFVTjJReXhOUVVGSkxFTkJRVU1zVVVGQlVTeFBRVUZpTEVWQlFYTkNPMEZCUTNCQ0xHTkJRVlVzZFVKQlFWRXNUMEZCVWl4RFFVRldPMEZCUTBRN08wRkJSVVFzVTBGQlR5eFJRVUZSTEU5QlFWSXNRMEZCWjBJc1NVRkJhRUlzUTBGQlVEdEJRVU5FTEVOQlRrUTdPMUZCVVZNc1RTSXNJbVpwYkdVaU9pSndiM0J0YjNScGIyNHVhbk1pTENKemIzVnlZMlZTYjI5MElqb2lMMVZ6WlhKekwyMWhkSFJ3WlhKeWVTOVRhWFJsY3k5d2IzQnRiM1JwYjI0aUxDSnpiM1Z5WTJWelEyOXVkR1Z1ZENJNld5SXZMeUJKYlhCdmNuUWdZMnhoYzNObGN5QXRJR3h2Ym1jZ2RHVnliU0JuYjJGc0lIUnZJRzF2ZG1VZ2RHOTNZWEprY3lCamIyMXdiM05wZEdsdmJseHVhVzF3YjNKMElFRmpkR2x2YmlCbWNtOXRJQ2N1TDJGamRHbHZibk12UVdOMGFXOXVKenRjYm1sdGNHOXlkQ0JHYkc5M0lHWnliMjBnSnk0dllXTjBhVzl1Y3k5R2JHOTNKenRjYm1sdGNHOXlkQ0JVZDJWbGJpQm1jbTl0SUNjdUwyRmpkR2x2Ym5NdlZIZGxaVzRuTzF4dWFXMXdiM0owSUZCb2VYTnBZM01nWm5KdmJTQW5MaTloWTNScGIyNXpMMUJvZVhOcFkzTW5PMXh1YVcxd2IzSjBJRlJ5WVdOcklHWnliMjBnSnk0dllXTjBhVzl1Y3k5VWNtRmpheWM3WEc1cGJYQnZjblFnVkdGemF5Qm1jbTl0SUNjdUwzUmhjMnN2VkdGemF5YzdYRzVwYlhCdmNuUWdTVzV3ZFhRZ1puSnZiU0FuTGk5cGJuQjFkQzlKYm5CMWRDYzdYRzVjYmk4dklFVjRjRzl5ZENCbVlXTjBiM0o1SUdaMWJtTjBhVzl1YzF4dVpYaHdiM0owSUdOdmJuTjBJR1pzYjNjZ1BTQW9MaTR1WVhKbmN5a2dQVDRnYm1WM0lFWnNiM2NvTGk0dVlYSm5jeWs3WEc1bGVIQnZjblFnWTI5dWMzUWdkSGRsWlc0Z1BTQW9jSEp2Y0hNcElEMCtJRzVsZHlCVWQyVmxiaWh3Y205d2N5azdYRzVsZUhCdmNuUWdZMjl1YzNRZ2NHaDVjMmxqY3lBOUlDaHdjbTl3Y3lrZ1BUNGdibVYzSUZCb2VYTnBZM01vY0hKdmNITXBPMXh1Wlhod2IzSjBJR052Ym5OMElIUnlZV05ySUQwZ0tDNHVMbUZ5WjNNcElEMCtJRzVsZHlCVWNtRmpheWd1TGk1aGNtZHpLVHRjYm1WNGNHOXlkQ0JqYjI1emRDQnBibkIxZENBOUlDZ3VMaTVoY21kektTQTlQaUJ1WlhjZ1NXNXdkWFFvTGk0dVlYSm5jeWs3WEc1bGVIQnZjblFnWTI5dWMzUWdkR0Z6YXlBOUlDZ3VMaTVoY21kektTQTlQaUJ1WlhjZ1ZHRnpheWd1TGk1aGNtZHpLVHRjYm1WNGNHOXlkQ0J6ZEdGbloyVnlJR1p5YjIwZ0p5NHZhVzVqTDNOMFlXZG5aWEluTzF4dVpYaHdiM0owSUhScGJXVnNhVzVsSUdaeWIyMGdKeTR2YVc1akwzUnBiV1ZzYVc1bEp6dGNibHh1THk4Z1FXUmhjSFJsY25OY2JtVjRjRzl5ZENCamNtVmhkR1ZCWkdGd2RHVnlJR1p5YjIwZ0p5NHZZV1JoY0hSbGNpOWhaR0Z3ZEdWeUp6dGNibVY0Y0c5eWRDQmhkSFJ5SUdaeWIyMGdKeTR2WVdSaGNIUmxjaTloZEhSeUxXRmtZWEIwWlhJbk8xeHVaWGh3YjNKMElHTnpjeUJtY205dElDY3VMMkZrWVhCMFpYSXZZM056TFdGa1lYQjBaWEluTzF4dVpYaHdiM0owSUc5aWFtVmpkQ0JtY205dElDY3VMMkZrWVhCMFpYSXZiMkpxWldOMExXRmtZWEIwWlhJbk8xeHVaWGh3YjNKMElITjJaeUJtY205dElDY3VMMkZrWVhCMFpYSXZjM1puTFdGa1lYQjBaWEluTzF4dVpYaHdiM0owSUhOMloxQmhkR2dnWm5KdmJTQW5MaTloWkdGd2RHVnlMM04yWnkxd1lYUm9MV0ZrWVhCMFpYSW5PMXh1WEc0dkx5QkZZWE5wYm1kY2JtVjRjRzl5ZENCbFlYTnBibWNnWm5KdmJTQW5MaTloWTNScGIyNXpMMlZoYzJsdVp5OXdjbVZ6WlhRdFpXRnphVzVuSnp0Y2JtbHRjRzl5ZENCblpYUkdiRzkzSUdaeWIyMGdKeTR2WVdOMGFXOXVjeTltYkc5M0wyZGxkQzFtYkc5M0p6dGNibVY0Y0c5eWRDQmpiMjV6ZENCa1pYUmxZM1JHYkc5M0lEMGdaMlYwUm14dmR6dGNibHh1THk4Z1ZYUnBiSE5jYm1WNGNHOXlkQ0FxSUdGeklHTmhiR01nWm5KdmJTQW5MaTlwYm1NdlkyRnNZeWM3WEc1bGVIQnZjblFnS2lCaGN5QjFkR2xzY3lCbWNtOXRJQ2N1TDJsdVl5OTFkR2xzY3ljN1hHNWxlSEJ2Y25RZ2V5QnpaWFJIYkc5aVlXeEVhV3hoZEdsdmJpQjlJR1p5YjIwZ0p5NHZkR0Z6YXk5MGFXMWxjaWM3WEc1Y2JpOHZJRlpoYkhWbElIUjVjR1Z6WEc1cGJYQnZjblFnWVd4d2FHRWdabkp2YlNBbkxpOTJZV3gxWlMxMGVYQmxjeTloYkhCb1lTYzdYRzVwYlhCdmNuUWdZVzVuYkdVZ1puSnZiU0FuTGk5MllXeDFaUzEwZVhCbGN5OWhibWRzWlNjN1hHNXBiWEJ2Y25RZ1kyOXNiM0lnWm5KdmJTQW5MaTkyWVd4MVpTMTBlWEJsY3k5amIyeHZjaWM3WEc1cGJYQnZjblFnWTI5dGNHeGxlQ0JtY205dElDY3VMM1poYkhWbExYUjVjR1Z6TDJOdmJYQnNaWGduTzF4dWFXMXdiM0owSUdobGVDQm1jbTl0SUNjdUwzWmhiSFZsTFhSNWNHVnpMMmhsZUNjN1hHNXBiWEJ2Y25RZ2FITnNJR1p5YjIwZ0p5NHZkbUZzZFdVdGRIbHdaWE12YUhOc0p6dGNibWx0Y0c5eWRDQndlQ0JtY205dElDY3VMM1poYkhWbExYUjVjR1Z6TDNCNEp6dGNibWx0Y0c5eWRDQnlaMklnWm5KdmJTQW5MaTkyWVd4MVpTMTBlWEJsY3k5eVoySW5PMXh1YVcxd2IzSjBJSE5qWVd4bElHWnliMjBnSnk0dmRtRnNkV1V0ZEhsd1pYTXZjMk5oYkdVbk8xeHVhVzF3YjNKMElITm9ZV1J2ZHlCbWNtOXRJQ2N1TDNaaGJIVmxMWFI1Y0dWekwzTm9ZV1J2ZHljN1hHNXBiWEJ2Y25RZ2RXNXBkQ0JtY205dElDY3VMM1poYkhWbExYUjVjR1Z6TDNWdWFYUW5PMXh1Wlhod2IzSjBJR052Ym5OMElIWmhiSFZsVkhsd1pTQTlJSHNnWVd4d2FHRXNJR0Z1WjJ4bExDQmpiMnh2Y2l3Z1kyOXRjR3hsZUN3Z2FHVjRMQ0JvYzJ3c0lIQjRMQ0J5WjJJc0lITmpZV3hsTENCemFHRmtiM2NzSUhWdWFYUWdmVHRjYmx4dUx5OGdWSEpoYm5ObWIzSnRaWEp6WEc1bGVIQnZjblFnS2lCaGN5QjBjbUZ1YzJadmNtMWxjbk1nWm5KdmJTQW5MaTlwYm1NdmRISmhibk5tYjNKdFpYSnpKenRjYmx4dUx5cGNiaUFnVW1WMGRYSnVjeUJoSUhabGNuTnBiMjRnYjJZZ2RHaGxJRUZqZEdsdmJpQmliM1Z1WkNCMGJ5QmhJRVpzYjNkY2JseHVJQ0JYWlNkeVpTQmhaR1JwYm1jZ1lHOXVZQ0JvWlhKbElHSmxZMkYxYzJVZ1JteHZkeUJsZUhSbGJtUnpJRUZqZEdsdmJpeGNiaUFnYjNSb1pYSjNhWE5sSUdOeVpXRjBhVzVuSUdFZ1kybHlZM1ZzWVhJZ2JXOWtkV3hoY2lCa1pYQmxibVJsYm1ONUxpQkdkWFIxY21WY2JpQWdjbVZtWVdOMGIzSnBibWNzSUdsbElHMXZkbWx1WnlCMGJ5QmhJR052YlhCdmMybDBhVzl1WVd3Z2JXOWtaV3dnZDJsc2JGeHVJQ0J5WlcxdmRtVWdkR2hsSUc1bFpXUWdabTl5SUhWeklIUnZJR1J2SUhSb2FYTWdhR1Z5WlM1Y2Jpb3ZYRzVCWTNScGIyNHVjSEp2ZEc5MGVYQmxMbTl1SUQwZ1puVnVZM1JwYjI0Z0tHVnNaVzFsYm5RcElIdGNiaUFnYVdZZ0tDRmxiR1Z0Wlc1MExtTnZibTVsWTNRcElIdGNiaUFnSUNCbGJHVnRaVzUwSUQwZ1oyVjBSbXh2ZHlobGJHVnRaVzUwS1R0Y2JpQWdmVnh1WEc0Z0lISmxkSFZ5YmlCbGJHVnRaVzUwTG1OdmJtNWxZM1FvZEdocGN5azdYRzU5TzF4dVhHNWxlSEJ2Y25RZ2V5QkJZM1JwYjI0Z2ZUc2lYWDA9XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9wb3Btb3Rpb24uanNcbiAqKiBtb2R1bGUgaWQgPSAxXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzLnNldEdsb2JhbERpbGF0aW9uID0gdW5kZWZpbmVkO1xuXG52YXIgX3V0aWxzID0gcmVxdWlyZSgnLi4vaW5jL3V0aWxzJyk7XG5cbnZhciBNQVhfRUxBUFNFRCA9IDMzO1xuXG52YXIgY3VycmVudCA9IDA7XG52YXIgZWxhcHNlZCA9IDE2Ljc7XG52YXIgZGlsYXRpb24gPSAxO1xuXG5leHBvcnRzLmRlZmF1bHQgPSB7XG4gIHVwZGF0ZTogZnVuY3Rpb24gKGZyYW1lc3RhbXApIHtcbiAgICBlbGFwc2VkID0gTWF0aC5tYXgoTWF0aC5taW4oZnJhbWVzdGFtcCAtIGN1cnJlbnQsIE1BWF9FTEFQU0VEKSwgMSkgKiBkaWxhdGlvbjtcbiAgICBjdXJyZW50ID0gZnJhbWVzdGFtcDtcbiAgfSxcblxuICBzdGFydDogZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBjdXJyZW50ID0gKDAsIF91dGlscy5jdXJyZW50VGltZSkoKTtcbiAgfSxcblxuICBnZXRFbGFwc2VkOiBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIGVsYXBzZWQ7XG4gIH1cbn07XG52YXIgc2V0R2xvYmFsRGlsYXRpb24gPSBleHBvcnRzLnNldEdsb2JhbERpbGF0aW9uID0gZnVuY3Rpb24gKG5ld0RpbGF0aW9uKSB7XG4gIHJldHVybiBkaWxhdGlvbiA9IG5ld0RpbGF0aW9uO1xufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbk55WXk5MFlYTnJMM1JwYldWeUxtcHpJbDBzSW01aGJXVnpJanBiWFN3aWJXRndjR2x1WjNNaU9pSTdPenM3TzBGQlFVRTdPMEZCUlVFc1NVRkJUU3hqUVVGakxFVkJRWEJDT3p0QlFVVkJMRWxCUVVrc1ZVRkJWU3hEUVVGa08wRkJRMEVzU1VGQlNTeFZRVUZWTEVsQlFXUTdRVUZEUVN4SlFVRkpMRmRCUVZjc1EwRkJaanM3YTBKQlJXVTdRVUZEWWl4VlFVRlJMRlZCUVVNc1ZVRkJSQ3hGUVVGblFqdEJRVU4wUWl4alFVRlZMRXRCUVVzc1IwRkJUQ3hEUVVGVExFdEJRVXNzUjBGQlRDeERRVUZUTEdGQlFXRXNUMEZCZEVJc1JVRkJLMElzVjBGQkwwSXNRMEZCVkN4RlFVRnpSQ3hEUVVGMFJDeEpRVUV5UkN4UlFVRnlSVHRCUVVOQkxHTkJRVlVzVlVGQlZqdEJRVU5FTEVkQlNsazdPMEZCVFdJc1UwRkJUenRCUVVGQkxGZEJRVTBzVlVGQlZTeDVRa0ZCYUVJN1FVRkJRU3hIUVU1Tk96dEJRVkZpTEdOQlFWazdRVUZCUVN4WFFVRk5MRTlCUVU0N1FVRkJRVHRCUVZKRExFTTdRVUZYVWl4SlFVRk5MR2RFUVVGdlFpeFZRVUZETEZkQlFVUTdRVUZCUVN4VFFVRnBRaXhYUVVGWExGZEJRVFZDTzBGQlFVRXNRMEZCTVVJaUxDSm1hV3hsSWpvaWRHbHRaWEl1YW5NaUxDSnpiM1Z5WTJWU2IyOTBJam9pTDFWelpYSnpMMjFoZEhSd1pYSnllUzlUYVhSbGN5OXdiM0J0YjNScGIyNGlMQ0p6YjNWeVkyVnpRMjl1ZEdWdWRDSTZXeUpwYlhCdmNuUWdleUJqZFhKeVpXNTBWR2x0WlNCOUlHWnliMjBnSnk0dUwybHVZeTkxZEdsc2N5YzdYRzVjYm1OdmJuTjBJRTFCV0Y5RlRFRlFVMFZFSUQwZ016TTdYRzVjYm14bGRDQmpkWEp5Wlc1MElEMGdNRHRjYm14bGRDQmxiR0Z3YzJWa0lEMGdNVFl1Tnp0Y2JteGxkQ0JrYVd4aGRHbHZiaUE5SURFN1hHNWNibVY0Y0c5eWRDQmtaV1poZFd4MElIdGNiaUFnZFhCa1lYUmxPaUFvWm5KaGJXVnpkR0Z0Y0NrZ1BUNGdlMXh1SUNBZ0lHVnNZWEJ6WldRZ1BTQk5ZWFJvTG0xaGVDaE5ZWFJvTG0xcGJpaG1jbUZ0WlhOMFlXMXdJQzBnWTNWeWNtVnVkQ3dnVFVGWVgwVk1RVkJUUlVRcExDQXhLU0FxSUdScGJHRjBhVzl1TzF4dUlDQWdJR04xY25KbGJuUWdQU0JtY21GdFpYTjBZVzF3TzF4dUlDQjlMRnh1WEc0Z0lITjBZWEowT2lBb0tTQTlQaUJqZFhKeVpXNTBJRDBnWTNWeWNtVnVkRlJwYldVb0tTeGNibHh1SUNCblpYUkZiR0Z3YzJWa09pQW9LU0E5UGlCbGJHRndjMlZrWEc1OU8xeHVYRzVsZUhCdmNuUWdZMjl1YzNRZ2MyVjBSMnh2WW1Gc1JHbHNZWFJwYjI0Z1BTQW9ibVYzUkdsc1lYUnBiMjRwSUQwK0lHUnBiR0YwYVc5dUlEMGdibVYzUkdsc1lYUnBiMjQ3SWwxOVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvdGFzay90aW1lci5qc1xuICoqIG1vZHVsZSBpZCA9IDJcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTtcblxudmFyIF9UYXNrMiA9IHJlcXVpcmUoJy4uL3Rhc2svVGFzaycpO1xuXG52YXIgX1Rhc2szID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfVGFzazIpO1xuXG52YXIgX2NhbGMgPSByZXF1aXJlKCcuLi9pbmMvY2FsYycpO1xuXG52YXIgX3V0aWxzID0gcmVxdWlyZSgnLi4vaW5jL3V0aWxzJyk7XG5cbnZhciBfZGV0ZWN0ID0gcmVxdWlyZSgnLi4vdmFsdWUtdHlwZXMvZGV0ZWN0Jyk7XG5cbnZhciBfZGV0ZWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2RldGVjdCk7XG5cbnZhciBfbnVtZXJpY2FsVmFsdWVzID0gcmVxdWlyZSgnLi4vaW5jL251bWVyaWNhbC12YWx1ZXMnKTtcblxudmFyIF9udW1lcmljYWxWYWx1ZXMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfbnVtZXJpY2FsVmFsdWVzKTtcblxudmFyIF9kZXRlY3RBZGFwdGVyID0gcmVxdWlyZSgnLi4vaW5jL2RldGVjdC1hZGFwdGVyJyk7XG5cbnZhciBfZGV0ZWN0QWRhcHRlcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9kZXRlY3RBZGFwdGVyKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKG9iaiwga2V5cykgeyB2YXIgdGFyZ2V0ID0ge307IGZvciAodmFyIGkgaW4gb2JqKSB7IGlmIChrZXlzLmluZGV4T2YoaSkgPj0gMCkgY29udGludWU7IGlmICghT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgaSkpIGNvbnRpbnVlOyB0YXJnZXRbaV0gPSBvYmpbaV07IH0gcmV0dXJuIHRhcmdldDsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmICghc2VsZikgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIGNhbGwgJiYgKHR5cGVvZiBjYWxsID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpID8gY2FsbCA6IHNlbGY7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgXCIgKyB0eXBlb2Ygc3VwZXJDbGFzcyk7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgZW51bWVyYWJsZTogZmFsc2UsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcykgOiBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzOyB9XG5cbnZhciBOVU1fTlVNRVJJQ0FMX1ZBTFVFUyA9IF9udW1lcmljYWxWYWx1ZXMyLmRlZmF1bHQubGVuZ3RoO1xuXG52YXIgZGVmYXVsdFJlbmRlcmVyID0gZnVuY3Rpb24gKF9yZWYpIHtcbiAgdmFyIHN0YXRlID0gX3JlZi5zdGF0ZTtcbiAgdmFyIGFkYXB0ZXIgPSBfcmVmLmFkYXB0ZXI7XG4gIHZhciBhZGFwdGVyRGF0YSA9IF9yZWYuYWRhcHRlckRhdGE7XG4gIHZhciBlbGVtZW50ID0gX3JlZi5lbGVtZW50O1xuICByZXR1cm4gYWRhcHRlcihlbGVtZW50LCBzdGF0ZSwgYWRhcHRlckRhdGEpO1xufTtcblxudmFyIGNvbnZlcnRJZlNob3VsZEJlTnVtYmVyID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gIHJldHVybiAhaXNOYU4odmFsdWUpID8gcGFyc2VGbG9hdCh2YWx1ZSkgOiB2YWx1ZTtcbn07XG5cbnZhciBBY3Rpb24gPSBmdW5jdGlvbiAoX1Rhc2spIHtcbiAgX2luaGVyaXRzKEFjdGlvbiwgX1Rhc2spO1xuXG4gIGZ1bmN0aW9uIEFjdGlvbigpIHtcbiAgICB2YXIgcHJvcHMgPSBhcmd1bWVudHMubGVuZ3RoIDw9IDAgfHwgYXJndW1lbnRzWzBdID09PSB1bmRlZmluZWQgPyB7fSA6IGFyZ3VtZW50c1swXTtcblxuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBBY3Rpb24pO1xuXG4gICAgcHJvcHMuc3RhdGUgPSB7fTtcbiAgICBwcm9wcy52YWx1ZUtleXMgPSBbXTtcbiAgICBwcm9wcy5wYXJlbnRLZXlzID0gW107XG4gICAgcmV0dXJuIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIF9UYXNrLmNhbGwodGhpcywgcHJvcHMpKTtcbiAgfVxuXG4gIC8qXG4gICAgIyBTZXQgQWN0aW9uIHByb3BlcnRpZXNcbiAgICAjIyBTZXQgdXNlci1kZWZpbmVkIEFjdGlvbiBwcm9wZXJ0aWVzXG4gICAgIEBwYXJhbSBbb2JqZWN0XVxuICAgIEByZXR1cm4gW0FjdGlvbl1cbiAgKi9cblxuXG4gIEFjdGlvbi5wcm90b3R5cGUuc2V0ID0gZnVuY3Rpb24gc2V0KCkge1xuICAgIHZhciBwcm9wcyA9IGFyZ3VtZW50cy5sZW5ndGggPD0gMCB8fCBhcmd1bWVudHNbMF0gPT09IHVuZGVmaW5lZCA/IHt9IDogYXJndW1lbnRzWzBdO1xuXG4gICAgdGhpcy52YWx1ZXMgPSB0aGlzLnZhbHVlcyB8fCB7fTtcblxuICAgIHZhciB2YWx1ZXMgPSBwcm9wcy52YWx1ZXM7XG5cbiAgICB2YXIgcHJvcHNUb1NldCA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhwcm9wcywgWyd2YWx1ZXMnXSk7XG5cbiAgICB2YXIgaW5oZXJpdGFibGUgPSB7fTtcblxuICAgIC8vIFNldCBub24tY29uc3VtZWQgcHJvcGVydGllc1xuICAgIF9UYXNrLnByb3RvdHlwZS5zZXQuY2FsbCh0aGlzLCBwcm9wc1RvU2V0KTtcblxuICAgIC8vIERldGVjdCBjb3JyZWN0IGBhZGFwdGVyYCBpZiBub25lIGV4aXN0cyBhbmQgYGVsZW1lbnRgIGlzIGJlaW5nIHNldFxuICAgIGlmICh0aGlzLmVsZW1lbnQpIHtcbiAgICAgIGlmICghdGhpcy5hZGFwdGVyKSB7XG4gICAgICAgIC8vIER1Y2t0eXBpc2ggY2hlY2sgZm9yIEFkYXB0ZXJcbiAgICAgICAgdGhpcy5hZGFwdGVyID0gKDAsIF9kZXRlY3RBZGFwdGVyMi5kZWZhdWx0KSh0aGlzLmVsZW1lbnQpO1xuXG4gICAgICAgIGlmICh0aGlzLmFkYXB0ZXIuZ2V0RWxlbWVudERhdGEpIHtcbiAgICAgICAgICB0aGlzLmFkYXB0ZXJEYXRhID0gdGhpcy5hZGFwdGVyLmdldEVsZW1lbnREYXRhKHRoaXMuZWxlbWVudCk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKCF0aGlzLm9uUmVuZGVyKSB7XG4gICAgICAgIHRoaXMub25SZW5kZXIgPSBkZWZhdWx0UmVuZGVyZXI7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gUHJpbWUgYW4gb2JqZWN0IHRvIGluaGVyaXQgZnJvbSwgd2l0aCBvbmx5IGB2YWx1ZWAgcHJvcGVydGllc1xuICAgIGZvciAodmFyIGtleSBpbiB0aGlzLmRlZmF1bHRWYWx1ZSkge1xuICAgICAgaWYgKHRoaXMuZGVmYXVsdFZhbHVlLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgaWYgKHByb3BzVG9TZXQuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgIGluaGVyaXRhYmxlW2tleV0gPSBwcm9wc1RvU2V0W2tleV07XG4gICAgICAgIH0gZWxzZSBpZiAodGhpc1trZXldICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICBpbmhlcml0YWJsZVtrZXldID0gdGhpc1trZXldO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gVXBkYXRlIGV4aXN0aW5nIHZhbHVlcyB3aXRoIGluaGVyaXRhYmxlIHByb3BlcnRpZXNcbiAgICBmb3IgKHZhciBfa2V5IGluIHRoaXMudmFsdWVzKSB7XG4gICAgICBpZiAodGhpcy52YWx1ZXMuaGFzT3duUHJvcGVydHkoX2tleSkpIHtcbiAgICAgICAgdGhpcy52YWx1ZXNbX2tleV0gPSBfZXh0ZW5kcyh7fSwgdGhpcy52YWx1ZXNbX2tleV0sIGluaGVyaXRhYmxlKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBVcGRhdGVcbiAgICBpZiAodmFsdWVzKSB7XG4gICAgICB0aGlzLnNldFZhbHVlcyh2YWx1ZXMsIGluaGVyaXRhYmxlKTtcblxuICAgICAgLy8gUHJlY29tcHV0ZSBudW1iZXIgb2YgdmFsdWUga2V5IGFuZCBwYXJlbnQga2V5cyB0byBhdm9pZCBwZXItZnJhbWUgbWVhc3VyZW1lbnRcbiAgICAgIHRoaXMubnVtVmFsdWVLZXlzID0gdGhpcy52YWx1ZUtleXMubGVuZ3RoO1xuICAgICAgdGhpcy5udW1QYXJlbnRLZXlzID0gdGhpcy5wYXJlbnRLZXlzLmxlbmd0aDtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICBBY3Rpb24ucHJvdG90eXBlLnNldFZhbHVlcyA9IGZ1bmN0aW9uIHNldFZhbHVlcyh2YWx1ZXMsIGluaGVyaXQpIHtcbiAgICAvLyBJdGVyYXRlIG92ZXIgYWxsIGluY29taW5nIHZhbHVlcyBhbmQgc2V0XG4gICAgZm9yICh2YXIga2V5IGluIHZhbHVlcykge1xuICAgICAgaWYgKHZhbHVlcy5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgIHZhciBoYXNDaGlsZHJlbiA9IGZhbHNlO1xuICAgICAgICB2YXIgY2hpbGRyZW4gPSB7fTtcblxuICAgICAgICAvLyBNZXJnZSBpbnRvIGV4aXN0aW5nIHZhbHVlIG9yIGNyZWF0ZSBuZXdcbiAgICAgICAgdmFyIHZhbHVlQWxyZWFkeUV4aXN0cyA9IHRoaXMudmFsdWVzW2tleV0gIT09IHVuZGVmaW5lZDtcbiAgICAgICAgdmFyIG5ld1ZhbHVlID0gdmFsdWVBbHJlYWR5RXhpc3RzID8gX2V4dGVuZHMoe30sIHRoaXMudmFsdWVzW2tleV0pIDogX2V4dGVuZHMoe30sIGluaGVyaXQpO1xuXG4gICAgICAgIC8vIElmIHZhbHVlcyBpcyBub3QgYW4gb2JqZWN0LCBhc3NpZ24gdmFsdWUgdG8gZGVmYXVsdCBwcm9wXG4gICAgICAgIGlmICghKDAsIF91dGlscy5pc09iaikodmFsdWVzW2tleV0pKSB7XG4gICAgICAgICAgbmV3VmFsdWVbdGhpcy5kZWZhdWx0VmFsdWVQcm9wXSA9IHZhbHVlc1trZXldO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIG5ld1ZhbHVlID0gX2V4dGVuZHMoe30sIG5ld1ZhbHVlLCB2YWx1ZXNba2V5XSk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBJZiB3ZSd2ZSBnb3QgYW4gYWRhcHRlciwgZ2V0IHRoZSBjdXJyZW50IHZhbHVlXG4gICAgICAgIGlmIChuZXdWYWx1ZS5jdXJyZW50ID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICBpZiAodGhpcy5hZGFwdGVyKSB7XG4gICAgICAgICAgICBuZXdWYWx1ZS5jdXJyZW50ID0gY29udmVydElmU2hvdWxkQmVOdW1iZXIodGhpcy5hZGFwdGVyLmdldCh0aGlzLmVsZW1lbnQsIGtleSkpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChuZXdWYWx1ZS5mcm9tID09PSB1bmRlZmluZWQgJiYgdGhpcy5hZGFwdGVyKSB7XG4gICAgICAgICAgbmV3VmFsdWUuZnJvbSA9IG5ld1ZhbHVlLmN1cnJlbnQ7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBBcHBseSBkZWZhdWx0IHZhbHVlIHByb3BlcnRpZXNcbiAgICAgICAgaWYgKCF2YWx1ZUFscmVhZHlFeGlzdHMpIHtcbiAgICAgICAgICBuZXdWYWx1ZSA9IF9leHRlbmRzKHt9LCB0aGlzLmRlZmF1bHRWYWx1ZSwgbmV3VmFsdWUpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gSWYgd2UgZG9uJ3QgaGF2ZSBhIHZhbHVlIHR5cGUgYW5kIHdlIGRvIGhhdmUgYW4gQWRhcHRlciwgY2hlY2sgZm9yIHR5cGUgd2l0aCB2YWx1ZSBrZXlcbiAgICAgICAgaWYgKCFuZXdWYWx1ZS50eXBlICYmIHRoaXMuYWRhcHRlciAmJiB0aGlzLmFkYXB0ZXIuY2hlY2tWYWx1ZVR5cGUpIHtcbiAgICAgICAgICBuZXdWYWx1ZS50eXBlID0gdGhpcy5hZGFwdGVyLmNoZWNrVmFsdWVUeXBlKGtleSk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBJZiB3ZSBzdGlsbCBkb24ndCBoYXZlIGEgdmFsdWUgdHlwZSBhbmQgdGhpcyBpcyB0aGUgZmlyc3QgdGltZSB3ZSd2ZSBzZXQgdGhpcyB2YWx1ZSwgY2hlY2sgbnVtZXJpY2FsIHZhbHVlcyBmb3Igc3RyaW5ncyBhbmQgdGVzdFxuICAgICAgICBpZiAoIW5ld1ZhbHVlLnR5cGUgJiYgIXRoaXMudmFsdWVzW2tleV0pIHtcbiAgICAgICAgICBuZXdWYWx1ZS50eXBlID0gKDAsIF9kZXRlY3QyLmRlZmF1bHQpKG5ld1ZhbHVlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIElmIHdlIGhhdmUgYSB2YWx1ZSB0eXBlLCBoYW5kbGUuIFRoaXMgaXMgbXkgbGVhc3QgZmF2b3VyaXRlIHBhcnQgb2YgUG9wbW90aW9uLCBzby4uLiBlbmpveS5cbiAgICAgICAgaWYgKG5ld1ZhbHVlLnR5cGUpIHtcbiAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IE5VTV9OVU1FUklDQUxfVkFMVUVTOyBpKyspIHtcbiAgICAgICAgICAgIHZhciBwcm9wTmFtZSA9IF9udW1lcmljYWxWYWx1ZXMyLmRlZmF1bHRbaV07XG4gICAgICAgICAgICB2YXIgdmFsdWVQcm9wID0gbmV3VmFsdWVbcHJvcE5hbWVdO1xuXG4gICAgICAgICAgICAvLyBJZiB0aGlzIHByb3AgaXMgYSBzdHJpbmcgYW5kIHdlIGhhdmUgYSBzcGxpdHRlciwgc3BsaXRcbiAgICAgICAgICAgIGlmIChuZXdWYWx1ZS50eXBlLmhhc093blByb3BlcnR5KCdzcGxpdCcpKSB7XG4gICAgICAgICAgICAgIHZhciBzcGxpdFByb3AgPSAoMCwgX3V0aWxzLmlzU3RyaW5nKSh2YWx1ZVByb3ApID8gbmV3VmFsdWUudHlwZS5zcGxpdCh2YWx1ZVByb3ApIDoge307XG5cbiAgICAgICAgICAgICAgZm9yICh2YXIgc3BsaXRLZXkgaW4gc3BsaXRQcm9wKSB7XG4gICAgICAgICAgICAgICAgaWYgKHNwbGl0UHJvcC5oYXNPd25Qcm9wZXJ0eShzcGxpdEtleSkpIHtcbiAgICAgICAgICAgICAgICAgIHZhciBjb21iaW5lZEtleSA9IGtleSArIHNwbGl0S2V5O1xuXG4gICAgICAgICAgICAgICAgICAvLyBJZiB3ZSBkb24ndCBoYXZlIGEgY2hpbGQgdmFsdWUgZm9yIHRoaXMga2V5LCBtYWtlIG9uZVxuICAgICAgICAgICAgICAgICAgaWYgKCFjaGlsZHJlbltjb21iaW5lZEtleV0pIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGRlZmF1bHRWYWx1ZSA9IG5ld1ZhbHVlLnR5cGUuZGVmYXVsdFByb3BzICYmIG5ld1ZhbHVlLnR5cGUuZGVmYXVsdFByb3BzW3NwbGl0S2V5XSA/IG5ld1ZhbHVlLnR5cGUuZGVmYXVsdFByb3BzW3NwbGl0S2V5XSA6IG5ld1ZhbHVlLnR5cGUuZGVmYXVsdFByb3BzIHx8IHt9O1xuXG4gICAgICAgICAgICAgICAgICAgIGNoaWxkcmVuW2NvbWJpbmVkS2V5XSA9IF9leHRlbmRzKHt9LCBuZXdWYWx1ZSwgZGVmYXVsdFZhbHVlLCB7XG4gICAgICAgICAgICAgICAgICAgICAgcGFyZW50OiBrZXksXG4gICAgICAgICAgICAgICAgICAgICAgY2hpbGRLZXk6IHNwbGl0S2V5XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgICAgIGRlbGV0ZSBjaGlsZHJlbltjb21iaW5lZEtleV0udHlwZTtcbiAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgaGFzQ2hpbGRyZW4gPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgY2hpbGRyZW5bY29tYmluZWRLZXldW3Byb3BOYW1lXSA9IHBhcnNlRmxvYXQoc3BsaXRQcm9wW3NwbGl0S2V5XSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgLy8gSWYgd2UgaGF2ZSBhIHRlbXBsYXRlIGZ1bmN0aW9uLCBnZW5lcmF0ZVxuICAgICAgICAgICAgICBpZiAoIW5ld1ZhbHVlLnRlbXBsYXRlICYmIG5ld1ZhbHVlLnR5cGUudGVtcGxhdGUgJiYgKDAsIF91dGlscy5pc1N0cmluZykodmFsdWVQcm9wKSkge1xuICAgICAgICAgICAgICAgIG5ld1ZhbHVlLnRlbXBsYXRlID0gbmV3VmFsdWUudHlwZS50ZW1wbGF0ZSh2YWx1ZVByb3ApO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2UgaWYgKG5ld1ZhbHVlLnR5cGUuZGVmYXVsdFByb3BzKSB7XG4gICAgICAgICAgICAgIG5ld1ZhbHVlID0gX2V4dGVuZHMoe30sIG5ld1ZhbHVlLnR5cGUuZGVmYXVsdFByb3BzLCBuZXdWYWx1ZSk7XG5cbiAgICAgICAgICAgICAgLy8gVGhpcyBpcyBhIGJpdCBvZiBhIGhhY2sgLSB0aGlzIGVudGlyZSBmdW5jdGlvbiBpcyBhIGhhY2suIFNvcnJ5IGZ1dHVyZSBzZWxmLiBJIGxvb2sgZm9yd2FyZCB0byBzY3JhcHBpbmcgdGhlIGxvdCBvZiBpdC5cbiAgICAgICAgICAgICAgaWYgKG5ld1ZhbHVlLnR5cGUuZGVmYXVsdFByb3BzLnR5cGUpIHtcbiAgICAgICAgICAgICAgICBuZXdWYWx1ZS50eXBlID0gbmV3VmFsdWUudHlwZS5kZWZhdWx0UHJvcHMudHlwZTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAodmFsdWVQcm9wICE9PSB1bmRlZmluZWQgJiYgbmV3VmFsdWUudHlwZS5wYXJzZSkge1xuICAgICAgICAgICAgICBuZXdWYWx1ZVtwcm9wTmFtZV0gPSBuZXdWYWx1ZS50eXBlLnBhcnNlKHZhbHVlUHJvcCwgbmV3VmFsdWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSAvLyBFbmQgdmFsdWUgdHlwZSBub25zZW5zZVxuXG4gICAgICAgIC8vIFNldCBgcHJldmAgdG8gYGN1cnJlbnRgIGZvciBmaXJzdCBmcmFtZSBhZnRlciBzZXRcbiAgICAgICAgbmV3VmFsdWUucHJldiA9IG5ld1ZhbHVlLmN1cnJlbnQ7XG5cbiAgICAgICAgLy8gSWYgdGhpcyB2YWx1ZSBkb2Vzbid0IGhhdmUgY2hpbGRyZW4sIGFkZCB0byB2YWx1ZUtleXNcbiAgICAgICAgaWYgKCFoYXNDaGlsZHJlbikge1xuICAgICAgICAgIGlmICh0aGlzLnZhbHVlS2V5cy5pbmRleE9mKGtleSkgPT09IC0xKSB7XG4gICAgICAgICAgICB0aGlzLnZhbHVlS2V5cy5wdXNoKGtleSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLy8gT3IgYWRkIHRvIHBhcmVudEtleXNcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBuZXdWYWx1ZS5jaGlsZHJlbiA9IG5ld1ZhbHVlLmNoaWxkcmVuIHx8IHt9O1xuXG4gICAgICAgICAgaWYgKHRoaXMucGFyZW50S2V5cy5pbmRleE9mKGtleSkgPT09IC0xKSB7XG4gICAgICAgICAgICB0aGlzLnBhcmVudEtleXMucHVzaChrZXkpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHRoaXMuc2V0VmFsdWVzKGNoaWxkcmVuKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMudmFsdWVzW2tleV0gPSBuZXdWYWx1ZTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgLypcbiAgICBEZWNpZGUgd2hldGhlciB0aGlzIEFjdGlvbiB3aWxsIHJlbmRlciBvbiBuZXh0IGZyYW1lXG4gICAgIEBwYXJhbSBbQWN0aW9uXVxuICAgIEBwYXJhbSBbbnVtYmVyXVxuICAgIEBwYXJhbSBbbnVtYmVyXVxuICAgIEByZXR1cm4gW2Jvb2xlYW5dOiBSZXR1cm4gdHJ1ZSB0byByZW5kZXJcbiAgKi9cblxuXG4gIEFjdGlvbi5wcm90b3R5cGUud2lsbFJlbmRlciA9IGZ1bmN0aW9uIHdpbGxSZW5kZXIoYWN0aW9uLCBmcmFtZVN0YW1wLCBlbGFwc2VkKSB7XG4gICAgdmFyIGhhc0NoYW5nZWQgPSBmYWxzZTtcblxuICAgIC8vIENoZWNrIGlmIGJhc2UgdmFsdWVzIGhhdmUgdXBkYXRlZFxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5udW1WYWx1ZUtleXM7IGkrKykge1xuICAgICAgdmFyIGtleSA9IHRoaXMudmFsdWVLZXlzW2ldO1xuICAgICAgdmFyIHZhbHVlID0gdGhpcy52YWx1ZXNba2V5XTtcblxuICAgICAgLy8gUnVuIHRyYW5zZm9ybSBmdW5jdGlvbiAoaWYgcHJlc2VudClcbiAgICAgIGlmICh2YWx1ZS50cmFuc2Zvcm0pIHtcbiAgICAgICAgdmFsdWUuY3VycmVudCA9IHZhbHVlLnRyYW5zZm9ybSh2YWx1ZS5jdXJyZW50LCBrZXksIHRoaXMpO1xuICAgICAgfVxuXG4gICAgICAvLyBDYXAgbWluaW11bVxuICAgICAgaWYgKCgwLCBfdXRpbHMuaXNOdW0pKHZhbHVlLm1pbikpIHtcbiAgICAgICAgdmFsdWUuY3VycmVudCA9IE1hdGgubWF4KHZhbHVlLmN1cnJlbnQsIHZhbHVlLm1pbik7XG4gICAgICB9XG5cbiAgICAgIC8vIENhcCBtYXhpbXVtXG4gICAgICBpZiAoKDAsIF91dGlscy5pc051bSkodmFsdWUubWF4KSkge1xuICAgICAgICB2YWx1ZS5jdXJyZW50ID0gTWF0aC5taW4odmFsdWUuY3VycmVudCwgdmFsdWUubWF4KTtcbiAgICAgIH1cblxuICAgICAgLy8gUm91bmQgbnVtYmVyXG4gICAgICBpZiAodmFsdWUucm91bmQpIHtcbiAgICAgICAgdmFsdWUuY3VycmVudCA9IE1hdGgucm91bmQodmFsdWUuY3VycmVudCk7XG4gICAgICB9XG5cbiAgICAgIHZhbHVlLmZyYW1lQ2hhbmdlID0gdmFsdWUuY3VycmVudCAtIHZhbHVlLnByZXY7XG5cbiAgICAgIC8vIFVwZGF0ZSB2ZWxvY2l0eVxuICAgICAgaWYgKCF0aGlzLmNhbGN1bGF0ZXNWZWxvY2l0eSkge1xuICAgICAgICB2YWx1ZS52ZWxvY2l0eSA9ICgwLCBfY2FsYy5zcGVlZFBlclNlY29uZCkodmFsdWUuZnJhbWVDaGFuZ2UsIGVsYXBzZWQpO1xuICAgICAgfVxuXG4gICAgICAvLyBJZiB0aGlzIHZhbHVlIGhhcyBjaGFuZ2VkXG4gICAgICBpZiAodmFsdWUucHJldiAhPT0gdmFsdWUuY3VycmVudCkge1xuICAgICAgICBoYXNDaGFuZ2VkID0gdHJ1ZTtcbiAgICAgICAgdmFsdWUucHJldiA9IHZhbHVlLmN1cnJlbnQ7XG4gICAgICB9XG5cbiAgICAgIC8vIEFwcGVuZCB1bml0XG4gICAgICB2YXIgdmFsdWVGb3JTdGF0ZSA9IHZhbHVlLnR5cGUgJiYgdmFsdWUudHlwZS5zZXJpYWxpemUgPyB2YWx1ZS50eXBlLnNlcmlhbGl6ZSh2YWx1ZS5jdXJyZW50LCB2YWx1ZSkgOiB2YWx1ZS5jdXJyZW50O1xuXG4gICAgICAvLyBBZGQgdG8gc3RhdGUgaWYgdGhpcyBpcyBub3QgYSBjaGlsZCB2YXVlXG4gICAgICBpZiAoIXZhbHVlLnBhcmVudCkge1xuICAgICAgICB0aGlzLnN0YXRlW2tleV0gPSB2YWx1ZUZvclN0YXRlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy52YWx1ZXNbdmFsdWUucGFyZW50XS5jaGlsZHJlblt2YWx1ZS5jaGlsZEtleV0gPSB2YWx1ZUZvclN0YXRlO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIFVwZGF0ZSBwYXJlbnQgdmFsdWVzXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IHRoaXMubnVtUGFyZW50S2V5czsgX2krKykge1xuICAgICAgdmFyIF9rZXkyID0gdGhpcy5wYXJlbnRLZXlzW19pXTtcbiAgICAgIHZhciBfdmFsdWUgPSB0aGlzLnZhbHVlc1tfa2V5Ml07XG5cbiAgICAgIF92YWx1ZS5jdXJyZW50ID0gX3ZhbHVlLnR5cGUuY29tYmluZShfdmFsdWUuY2hpbGRyZW4sIF92YWx1ZS50ZW1wbGF0ZSk7XG5cbiAgICAgIHRoaXMuc3RhdGVbX2tleTJdID0gX3ZhbHVlLmN1cnJlbnQ7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMub25GcmFtZSkge1xuICAgICAgdGhpcy5vbkZyYW1lKHRoaXMuc3RhdGUsIHRoaXMpO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzLm9uQ2xlYW51cCA/IHRydWUgOiBoYXNDaGFuZ2VkO1xuICB9O1xuXG4gIEFjdGlvbi5wcm90b3R5cGUuaW5oZXJpdCA9IGZ1bmN0aW9uIGluaGVyaXQoKSB7XG4gICAgdmFyIHByb3BzID0gYXJndW1lbnRzLmxlbmd0aCA8PSAwIHx8IGFyZ3VtZW50c1swXSA9PT0gdW5kZWZpbmVkID8ge30gOiBhcmd1bWVudHNbMF07XG4gICAgdmFyIHZhbHVlcyA9IHByb3BzLnZhbHVlcztcblxuICAgIHZhciBwcm9wc1RvU2V0ID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKHByb3BzLCBbJ3ZhbHVlcyddKTtcblxuICAgIHZhciBuZXdBY3Rpb24gPSBfVGFzay5wcm90b3R5cGUuaW5oZXJpdC5jYWxsKHRoaXMsIHByb3BzVG9TZXQpO1xuXG4gICAgaWYgKHZhbHVlcykge1xuICAgICAgbmV3QWN0aW9uLnNldCh7IHZhbHVlczogdmFsdWVzIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBuZXdBY3Rpb247XG4gIH07XG5cbiAgQWN0aW9uLnByb3RvdHlwZS5wYXVzZSA9IGZ1bmN0aW9uIHBhdXNlKCkge1xuICAgIF9UYXNrLnByb3RvdHlwZS5zdG9wLmNhbGwodGhpcyk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgQWN0aW9uLnByb3RvdHlwZS5yZXN1bWUgPSBmdW5jdGlvbiByZXN1bWUoKSB7XG4gICAgX1Rhc2sucHJvdG90eXBlLnN0YXJ0LmNhbGwodGhpcyk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgQWN0aW9uLnByb3RvdHlwZS50b2dnbGUgPSBmdW5jdGlvbiB0b2dnbGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuaXNBY3RpdmUgPyB0aGlzLnBhdXNlKCkgOiB0aGlzLnJlc3VtZSgpO1xuICB9O1xuXG4gIEFjdGlvbi5wcm90b3R5cGUuc3RhcnQgPSBmdW5jdGlvbiBzdGFydCgpIHtcbiAgICB2YXIgdmFsdWVzID0gdGhpcy52YWx1ZXM7XG4gICAgX1Rhc2sucHJvdG90eXBlLnN0YXJ0LmNhbGwodGhpcyk7XG5cbiAgICBmb3IgKHZhciBrZXkgaW4gdmFsdWVzKSB7XG4gICAgICBpZiAodmFsdWVzLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgdmFsdWVzW2tleV0ucHJldiA9IHZhbHVlc1trZXldLm9yaWdpbiA9IHZhbHVlc1trZXldLmN1cnJlbnQ7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgQWN0aW9uLmV4dGVuZERlZmF1bHRWYWx1ZSA9IGZ1bmN0aW9uIGV4dGVuZERlZmF1bHRWYWx1ZShwcm9wcykge1xuICAgIHJldHVybiBfZXh0ZW5kcyh7fSwgdGhpcy5wcm90b3R5cGUuZGVmYXVsdFZhbHVlLCBwcm9wcyk7XG4gIH07XG5cbiAgQWN0aW9uLmV4dGVuZERlZmF1bHRQcm9wcyA9IGZ1bmN0aW9uIGV4dGVuZERlZmF1bHRQcm9wcyhwcm9wcykge1xuICAgIHJldHVybiBfZXh0ZW5kcyh7fSwgdGhpcy5wcm90b3R5cGUuZGVmYXVsdFByb3BzLCBwcm9wcyk7XG4gIH07XG5cbiAgcmV0dXJuIEFjdGlvbjtcbn0oX1Rhc2szLmRlZmF1bHQpO1xuXG5BY3Rpb24ucHJvdG90eXBlLmRlZmF1bHRWYWx1ZVByb3AgPSAnY3VycmVudCc7XG5BY3Rpb24ucHJvdG90eXBlLmRlZmF1bHRWYWx1ZSA9IHtcbiAgdmVsb2NpdHk6IDAsXG4gIHJvdW5kOiBmYWxzZSxcbiAgbWluOiB1bmRlZmluZWQsXG4gIG1heDogdW5kZWZpbmVkLFxuICB0cmFuc2Zvcm06IHVuZGVmaW5lZFxufTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gQWN0aW9uO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluTnlZeTloWTNScGIyNXpMMEZqZEdsdmJpNXFjeUpkTENKdVlXMWxjeUk2VzEwc0ltMWhjSEJwYm1keklqb2lPenM3T3pzN1FVRkJRVHM3T3p0QlFVTkJPenRCUVVOQk96dEJRVU5CT3pzN08wRkJRMEU3T3pzN1FVRkRRVHM3T3pzN096czdPenM3T3pzN1FVRkZRU3hKUVVGTkxIVkNRVUYxUWl3d1FrRkJhVUlzVFVGQk9VTTdPMEZCUlVFc1NVRkJUU3hyUWtGQmEwSTdRVUZCUVN4TlFVRkhMRXRCUVVnc1VVRkJSeXhMUVVGSU8wRkJRVUVzVFVGQlZTeFBRVUZXTEZGQlFWVXNUMEZCVmp0QlFVRkJMRTFCUVcxQ0xGZEJRVzVDTEZGQlFXMUNMRmRCUVc1Q08wRkJRVUVzVFVGQlowTXNUMEZCYUVNc1VVRkJaME1zVDBGQmFFTTdRVUZCUVN4VFFVRTRReXhSUVVGUkxFOUJRVklzUlVGQmFVSXNTMEZCYWtJc1JVRkJkMElzVjBGQmVFSXNRMEZCT1VNN1FVRkJRU3hEUVVGNFFqczdRVUZGUVN4SlFVRk5MREJDUVVFd1FpeFZRVUZETEV0QlFVUTdRVUZCUVN4VFFVRlhMRU5CUVVNc1RVRkJUU3hMUVVGT0xFTkJRVVFzUjBGQlowSXNWMEZCVnl4TFFVRllMRU5CUVdoQ0xFZEJRVzlETEV0QlFTOURPMEZCUVVFc1EwRkJhRU03TzBsQlJVMHNUVHM3TzBGQlEwb3NiMEpCUVhkQ08wRkJRVUVzVVVGQldpeExRVUZaTEhsRVFVRktMRVZCUVVrN08wRkJRVUU3TzBGQlEzUkNMRlZCUVUwc1MwRkJUaXhIUVVGakxFVkJRV1E3UVVGRFFTeFZRVUZOTEZOQlFVNHNSMEZCYTBJc1JVRkJiRUk3UVVGRFFTeFZRVUZOTEZWQlFVNHNSMEZCYlVJc1JVRkJia0k3UVVGSWMwSXNORU5CU1hSQ0xHbENRVUZOTEV0QlFVNHNRMEZLYzBJN1FVRkxka0k3T3pzN096czdPenM3YlVKQlUwUXNSeXhyUWtGQlowSTdRVUZCUVN4UlFVRmFMRXRCUVZrc2VVUkJRVW9zUlVGQlNUczdRVUZEWkN4VFFVRkxMRTFCUVV3c1IwRkJZeXhMUVVGTExFMUJRVXdzU1VGQlpTeEZRVUUzUWpzN1FVRkVZeXhSUVVkT0xFMUJTRTBzUjBGSGIwSXNTMEZJY0VJc1EwRkhUaXhOUVVoTk96dEJRVUZCTEZGQlIwc3NWVUZJVEN3MFFrRkhiMElzUzBGSWNFSTdPMEZCU1dRc1VVRkJUU3hqUVVGakxFVkJRWEJDT3pzN1FVRkhRU3h2UWtGQlRTeEhRVUZPTEZsQlFWVXNWVUZCVmpzN08wRkJSMEVzVVVGQlNTeExRVUZMTEU5QlFWUXNSVUZCYTBJN1FVRkRhRUlzVlVGQlNTeERRVUZETEV0QlFVc3NUMEZCVml4RlFVRnRRanM3UVVGRmFrSXNZVUZCU3l4UFFVRk1MRWRCUVdVc05rSkJRV01zUzBGQlN5eFBRVUZ1UWl4RFFVRm1PenRCUVVWQkxGbEJRVWtzUzBGQlN5eFBRVUZNTEVOQlFXRXNZMEZCYWtJc1JVRkJhVU03UVVGREwwSXNaVUZCU3l4WFFVRk1MRWRCUVcxQ0xFdEJRVXNzVDBGQlRDeERRVUZoTEdOQlFXSXNRMEZCTkVJc1MwRkJTeXhQUVVGcVF5eERRVUZ1UWp0QlFVTkVPMEZCUTBZN08wRkJSVVFzVlVGQlNTeERRVUZETEV0QlFVc3NVVUZCVml4RlFVRnZRanRCUVVOc1FpeGhRVUZMTEZGQlFVd3NSMEZCWjBJc1pVRkJhRUk3UVVGRFJEdEJRVU5HT3pzN1FVRkhSQ3hUUVVGTExFbEJRVWtzUjBGQlZDeEpRVUZuUWl4TFFVRkxMRmxCUVhKQ0xFVkJRVzFETzBGQlEycERMRlZCUVVrc1MwRkJTeXhaUVVGTUxFTkJRV3RDTEdOQlFXeENMRU5CUVdsRExFZEJRV3BETEVOQlFVb3NSVUZCTWtNN1FVRkRla01zV1VGQlNTeFhRVUZYTEdOQlFWZ3NRMEZCTUVJc1IwRkJNVUlzUTBGQlNpeEZRVUZ2UXp0QlFVTnNReXh6UWtGQldTeEhRVUZhTEVsQlFXMUNMRmRCUVZjc1IwRkJXQ3hEUVVGdVFqdEJRVU5FTEZOQlJrUXNUVUZGVHl4SlFVRkpMRXRCUVVzc1IwRkJUQ3hOUVVGakxGTkJRV3hDTEVWQlFUWkNPMEZCUTJ4RExITkNRVUZaTEVkQlFWb3NTVUZCYlVJc1MwRkJTeXhIUVVGTUxFTkJRVzVDTzBGQlEwUTdRVUZEUmp0QlFVTkdPenM3UVVGSFJDeFRRVUZMTEVsQlFVa3NTVUZCVkN4SlFVRm5RaXhMUVVGTExFMUJRWEpDTEVWQlFUWkNPMEZCUXpOQ0xGVkJRVWtzUzBGQlN5eE5RVUZNTEVOQlFWa3NZMEZCV2l4RFFVRXlRaXhKUVVFelFpeERRVUZLTEVWQlFYRkRPMEZCUTI1RExHRkJRVXNzVFVGQlRDeERRVUZaTEVsQlFWb3NhVUpCUVhkQ0xFdEJRVXNzVFVGQlRDeERRVUZaTEVsQlFWb3NRMEZCZUVJc1JVRkJOa01zVjBGQk4wTTdRVUZEUkR0QlFVTkdPenM3UVVGSFJDeFJRVUZKTEUxQlFVb3NSVUZCV1R0QlFVTldMRmRCUVVzc1UwRkJUQ3hEUVVGbExFMUJRV1lzUlVGQmRVSXNWMEZCZGtJN096dEJRVWRCTEZkQlFVc3NXVUZCVEN4SFFVRnZRaXhMUVVGTExGTkJRVXdzUTBGQlpTeE5RVUZ1UXp0QlFVTkJMRmRCUVVzc1lVRkJUQ3hIUVVGeFFpeExRVUZMTEZWQlFVd3NRMEZCWjBJc1RVRkJja003UVVGRFJEczdRVUZGUkN4WFFVRlBMRWxCUVZBN1FVRkRSQ3hIT3p0dFFrRkZSQ3hUTEhOQ1FVRlZMRTBzUlVGQlVTeFBMRVZCUVZNN08wRkJSWHBDTEZOQlFVc3NTVUZCU1N4SFFVRlVMRWxCUVdkQ0xFMUJRV2hDTEVWQlFYZENPMEZCUTNSQ0xGVkJRVWtzVDBGQlR5eGpRVUZRTEVOQlFYTkNMRWRCUVhSQ0xFTkJRVW9zUlVGQlowTTdRVUZET1VJc1dVRkJTU3hqUVVGakxFdEJRV3hDTzBGQlEwRXNXVUZCVFN4WFFVRlhMRVZCUVdwQ096czdRVUZIUVN4WlFVRk5MSEZDUVVGeFFpeExRVUZMTEUxQlFVd3NRMEZCV1N4SFFVRmFMRTFCUVhGQ0xGTkJRV2hFTzBGQlEwRXNXVUZCU1N4WFFVRlhMR3REUVVFd1FpeExRVUZMTEUxQlFVd3NRMEZCV1N4SFFVRmFMRU5CUVRGQ0xHbENRVUZ2UkN4UFFVRndSQ3hEUVVGbU96czdRVUZIUVN4WlFVRkpMRU5CUVVNc2EwSkJRVTBzVDBGQlR5eEhRVUZRTEVOQlFVNHNRMEZCVEN4RlFVRjVRanRCUVVOMlFpeHRRa0ZCVXl4TFFVRkxMR2RDUVVGa0xFbEJRV3RETEU5QlFVOHNSMEZCVUN4RFFVRnNRenRCUVVORUxGTkJSa1FzVFVGRlR6dEJRVU5NTEd0RFFVRm5RaXhSUVVGb1FpeEZRVUUyUWl4UFFVRlBMRWRCUVZBc1EwRkJOMEk3UVVGRFJEczdPMEZCUjBRc1dVRkJTU3hUUVVGVExFOUJRVlFzUzBGQmNVSXNVMEZCZWtJc1JVRkJiME03UVVGRGJFTXNZMEZCU1N4TFFVRkxMRTlCUVZRc1JVRkJhMEk3UVVGRGFFSXNjVUpCUVZNc1QwRkJWQ3hIUVVGdFFpeDNRa0ZCZDBJc1MwRkJTeXhQUVVGTUxFTkJRV0VzUjBGQllpeERRVUZwUWl4TFFVRkxMRTlCUVhSQ0xFVkJRU3RDTEVkQlFTOUNMRU5CUVhoQ0xFTkJRVzVDTzBGQlEwUTdRVUZEUmpzN1FVRkZSQ3haUVVGSkxGTkJRVk1zU1VGQlZDeExRVUZyUWl4VFFVRnNRaXhKUVVFclFpeExRVUZMTEU5QlFYaERMRVZCUVdsRU8wRkJReTlETEcxQ1FVRlRMRWxCUVZRc1IwRkJaMElzVTBGQlV5eFBRVUY2UWp0QlFVTkVPenM3UVVGSFJDeFpRVUZKTEVOQlFVTXNhMEpCUVV3c1JVRkJlVUk3UVVGRGRrSXNhME5CUVdkQ0xFdEJRVXNzV1VGQmNrSXNSVUZCYzBNc1VVRkJkRU03UVVGRFJEczdPMEZCUjBRc1dVRkJTU3hEUVVGRExGTkJRVk1zU1VGQlZpeEpRVUZyUWl4TFFVRkxMRTlCUVhaQ0xFbEJRV3RETEV0QlFVc3NUMEZCVEN4RFFVRmhMR05CUVc1RUxFVkJRVzFGTzBGQlEycEZMRzFDUVVGVExFbEJRVlFzUjBGQlowSXNTMEZCU3l4UFFVRk1MRU5CUVdFc1kwRkJZaXhEUVVFMFFpeEhRVUUxUWl4RFFVRm9RanRCUVVORU96czdRVUZIUkN4WlFVRkpMRU5CUVVNc1UwRkJVeXhKUVVGV0xFbEJRV3RDTEVOQlFVTXNTMEZCU3l4TlFVRk1MRU5CUVZrc1IwRkJXaXhEUVVGMlFpeEZRVUY1UXp0QlFVTjJReXh0UWtGQlV5eEpRVUZVTEVkQlFXZENMSE5DUVVGblFpeFJRVUZvUWl4RFFVRm9RanRCUVVORU96czdRVUZIUkN4WlFVRkpMRk5CUVZNc1NVRkJZaXhGUVVGdFFqdEJRVU5xUWl4bFFVRkxMRWxCUVVrc1NVRkJTU3hEUVVGaUxFVkJRV2RDTEVsQlFVa3NiMEpCUVhCQ0xFVkJRVEJETEVkQlFURkRMRVZCUVN0RE8wRkJRemRETEdkQ1FVRk5MRmRCUVZjc01FSkJRV2xDTEVOQlFXcENMRU5CUVdwQ08wRkJRMEVzWjBKQlFVMHNXVUZCV1N4VFFVRlRMRkZCUVZRc1EwRkJiRUk3T3p0QlFVZEJMR2RDUVVGSkxGTkJRVk1zU1VGQlZDeERRVUZqTEdOQlFXUXNRMEZCTmtJc1QwRkJOMElzUTBGQlNpeEZRVUV5UXp0QlFVTjZReXhyUWtGQlRTeFpRVUZaTEhGQ1FVRlRMRk5CUVZRc1NVRkJjMElzVTBGQlV5eEpRVUZVTEVOQlFXTXNTMEZCWkN4RFFVRnZRaXhUUVVGd1FpeERRVUYwUWl4SFFVRjFSQ3hGUVVGNlJUczdRVUZGUVN4dFFrRkJTeXhKUVVGSkxGRkJRVlFzU1VGQmNVSXNVMEZCY2tJc1JVRkJaME03UVVGRE9VSXNiMEpCUVVrc1ZVRkJWU3hqUVVGV0xFTkJRWGxDTEZGQlFYcENMRU5CUVVvc1JVRkJkME03UVVGRGRFTXNjMEpCUVUwc1kwRkJZeXhOUVVGTkxGRkJRVEZDT3pzN1FVRkhRU3h6UWtGQlNTeERRVUZETEZOQlFWTXNWMEZCVkN4RFFVRk1MRVZCUVRSQ08wRkJRekZDTEhkQ1FVRk5MR1ZCUVdkQ0xGTkJRVk1zU1VGQlZDeERRVUZqTEZsQlFXUXNTVUZCT0VJc1UwRkJVeXhKUVVGVUxFTkJRV01zV1VGQlpDeERRVUV5UWl4UlFVRXpRaXhEUVVFdlFpeEhRVUYxUlN4VFFVRlRMRWxCUVZRc1EwRkJZeXhaUVVGa0xFTkJRVEpDTEZGQlFUTkNMRU5CUVhaRkxFZEJRVGhITEZOQlFWTXNTVUZCVkN4RFFVRmpMRmxCUVdRc1NVRkJPRUlzUlVGQmFrczdPMEZCUlVFc05rSkJRVk1zVjBGQlZDeHBRa0ZEU3l4UlFVUk1MRVZCUlVzc1dVRkdURHRCUVVkRkxEaENRVUZSTEVkQlNGWTdRVUZKUlN4blEwRkJWVHRCUVVwYU96dEJRVTlCTERKQ1FVRlBMRk5CUVZNc1YwRkJWQ3hGUVVGelFpeEpRVUUzUWp0QlFVTkVPenRCUVVWRUxHZERRVUZqTEVsQlFXUTdRVUZEUVN3eVFrRkJVeXhYUVVGVUxFVkJRWE5DTEZGQlFYUkNMRWxCUVd0RExGZEJRVmNzVlVGQlZTeFJRVUZXTEVOQlFWZ3NRMEZCYkVNN1FVRkRSRHRCUVVOR096czdRVUZIUkN4clFrRkJTU3hEUVVGRExGTkJRVk1zVVVGQlZpeEpRVUZ6UWl4VFFVRlRMRWxCUVZRc1EwRkJZeXhSUVVGd1F5eEpRVUZuUkN4eFFrRkJVeXhUUVVGVUxFTkJRWEJFTEVWQlFYbEZPMEZCUTNaRkxIbENRVUZUTEZGQlFWUXNSMEZCYjBJc1UwRkJVeXhKUVVGVUxFTkJRV01zVVVGQlpDeERRVUYxUWl4VFFVRjJRaXhEUVVGd1FqdEJRVU5FTzBGQlEwWXNZVUU1UWtRc1RVRTRRazhzU1VGQlNTeFRRVUZUTEVsQlFWUXNRMEZCWXl4WlFVRnNRaXhGUVVGblF6dEJRVU55UXl4elEwRkJaMElzVTBGQlV5eEpRVUZVTEVOQlFXTXNXVUZCT1VJc1JVRkJLME1zVVVGQkwwTTdPenRCUVVkQkxHdENRVUZKTEZOQlFWTXNTVUZCVkN4RFFVRmpMRmxCUVdRc1EwRkJNa0lzU1VGQkwwSXNSVUZCY1VNN1FVRkRia01zZVVKQlFWTXNTVUZCVkN4SFFVRm5RaXhUUVVGVExFbEJRVlFzUTBGQll5eFpRVUZrTEVOQlFUSkNMRWxCUVRORE8wRkJRMFE3UVVGRFJqczdRVUZGUkN4blFrRkJTU3hqUVVGakxGTkJRV1FzU1VGQk1rSXNVMEZCVXl4SlFVRlVMRU5CUVdNc1MwRkJOME1zUlVGQmIwUTdRVUZEYkVRc2RVSkJRVk1zVVVGQlZDeEpRVUZ4UWl4VFFVRlRMRWxCUVZRc1EwRkJZeXhMUVVGa0xFTkJRVzlDTEZOQlFYQkNMRVZCUVN0Q0xGRkJRUzlDTEVOQlFYSkNPMEZCUTBRN1FVRkRSanRCUVVOR0xGTTdPenRCUVVkRUxHbENRVUZUTEVsQlFWUXNSMEZCWjBJc1UwRkJVeXhQUVVGNlFqczdPMEZCUjBFc1dVRkJTU3hEUVVGRExGZEJRVXdzUlVGQmEwSTdRVUZEYUVJc1kwRkJTU3hMUVVGTExGTkJRVXdzUTBGQlpTeFBRVUZtTEVOQlFYVkNMRWRCUVhaQ0xFMUJRV2RETEVOQlFVTXNRMEZCY2tNc1JVRkJkME03UVVGRGRFTXNhVUpCUVVzc1UwRkJUQ3hEUVVGbExFbEJRV1lzUTBGQmIwSXNSMEZCY0VJN1FVRkRSRHM3TzBGQlIwWXNVMEZPUkN4TlFVMVBPMEZCUTB3c2JVSkJRVk1zVVVGQlZDeEhRVUZ2UWl4VFFVRlRMRkZCUVZRc1NVRkJjVUlzUlVGQmVrTTdPMEZCUlVFc1kwRkJTU3hMUVVGTExGVkJRVXdzUTBGQlowSXNUMEZCYUVJc1EwRkJkMElzUjBGQmVFSXNUVUZCYVVNc1EwRkJReXhEUVVGMFF5eEZRVUY1UXp0QlFVTjJReXhwUWtGQlN5eFZRVUZNTEVOQlFXZENMRWxCUVdoQ0xFTkJRWEZDTEVkQlFYSkNPMEZCUTBRN08wRkJSVVFzWlVGQlN5eFRRVUZNTEVOQlFXVXNVVUZCWmp0QlFVTkVPenRCUVVWRUxHRkJRVXNzVFVGQlRDeERRVUZaTEVkQlFWb3NTVUZCYlVJc1VVRkJia0k3UVVGRFJEdEJRVU5HTzBGQlEwWXNSenM3T3pzN096czdPenM3YlVKQlZVUXNWU3gxUWtGQlZ5eE5MRVZCUVZFc1ZTeEZRVUZaTEU4c1JVRkJVenRCUVVOMFF5eFJRVUZKTEdGQlFXRXNTMEZCYWtJN096dEJRVWRCTEZOQlFVc3NTVUZCU1N4SlFVRkpMRU5CUVdJc1JVRkJaMElzU1VGQlNTeExRVUZMTEZsQlFYcENMRVZCUVhWRExFZEJRWFpETEVWQlFUUkRPMEZCUXpGRExGVkJRVTBzVFVGQlRTeExRVUZMTEZOQlFVd3NRMEZCWlN4RFFVRm1MRU5CUVZvN1FVRkRRU3hWUVVGTkxGRkJRVkVzUzBGQlN5eE5RVUZNTEVOQlFWa3NSMEZCV2l4RFFVRmtPenM3UVVGSFFTeFZRVUZKTEUxQlFVMHNVMEZCVml4RlFVRnhRanRCUVVOdVFpeGpRVUZOTEU5QlFVNHNSMEZCWjBJc1RVRkJUU3hUUVVGT0xFTkJRV2RDTEUxQlFVMHNUMEZCZEVJc1JVRkJLMElzUjBGQkwwSXNSVUZCYjBNc1NVRkJjRU1zUTBGQmFFSTdRVUZEUkRzN08wRkJSMFFzVlVGQlNTeHJRa0ZCVFN4TlFVRk5MRWRCUVZvc1EwRkJTaXhGUVVGelFqdEJRVU53UWl4alFVRk5MRTlCUVU0c1IwRkJaMElzUzBGQlN5eEhRVUZNTEVOQlFWTXNUVUZCVFN4UFFVRm1MRVZCUVhkQ0xFMUJRVTBzUjBGQk9VSXNRMEZCYUVJN1FVRkRSRHM3TzBGQlIwUXNWVUZCU1N4clFrRkJUU3hOUVVGTkxFZEJRVm9zUTBGQlNpeEZRVUZ6UWp0QlFVTndRaXhqUVVGTkxFOUJRVTRzUjBGQlowSXNTMEZCU3l4SFFVRk1MRU5CUVZNc1RVRkJUU3hQUVVGbUxFVkJRWGRDTEUxQlFVMHNSMEZCT1VJc1EwRkJhRUk3UVVGRFJEczdPMEZCUjBRc1ZVRkJTU3hOUVVGTkxFdEJRVllzUlVGQmFVSTdRVUZEWml4alFVRk5MRTlCUVU0c1IwRkJaMElzUzBGQlN5eExRVUZNTEVOQlFWY3NUVUZCVFN4UFFVRnFRaXhEUVVGb1FqdEJRVU5FT3p0QlFVVkVMRmxCUVUwc1YwRkJUaXhIUVVGdlFpeE5RVUZOTEU5QlFVNHNSMEZCWjBJc1RVRkJUU3hKUVVFeFF6czdPMEZCUjBFc1ZVRkJTU3hEUVVGRExFdEJRVXNzYTBKQlFWWXNSVUZCT0VJN1FVRkROVUlzWTBGQlRTeFJRVUZPTEVkQlFXbENMREJDUVVGbExFMUJRVTBzVjBGQmNrSXNSVUZCYTBNc1QwRkJiRU1zUTBGQmFrSTdRVUZEUkRzN08wRkJSMFFzVlVGQlNTeE5RVUZOTEVsQlFVNHNTMEZCWlN4TlFVRk5MRTlCUVhwQ0xFVkJRV3RETzBGQlEyaERMSEZDUVVGaExFbEJRV0k3UVVGRFFTeGpRVUZOTEVsQlFVNHNSMEZCWVN4TlFVRk5MRTlCUVc1Q08wRkJRMFE3T3p0QlFVZEVMRlZCUVUwc1owSkJRV2xDTEUxQlFVMHNTVUZCVGl4SlFVRmpMRTFCUVUwc1NVRkJUaXhEUVVGWExGTkJRVEZDTEVkQlFYVkRMRTFCUVUwc1NVRkJUaXhEUVVGWExGTkJRVmdzUTBGQmNVSXNUVUZCVFN4UFFVRXpRaXhGUVVGdlF5eExRVUZ3UXl4RFFVRjJReXhIUVVGdlJpeE5RVUZOTEU5QlFXaElPenM3UVVGSFFTeFZRVUZKTEVOQlFVTXNUVUZCVFN4TlFVRllMRVZCUVcxQ08wRkJRMnBDTEdGQlFVc3NTMEZCVEN4RFFVRlhMRWRCUVZnc1NVRkJhMElzWVVGQmJFSTdRVUZEUkN4UFFVWkVMRTFCUlU4N1FVRkRUQ3hoUVVGTExFMUJRVXdzUTBGQldTeE5RVUZOTEUxQlFXeENMRVZCUVRCQ0xGRkJRVEZDTEVOQlFXMURMRTFCUVUwc1VVRkJla01zU1VGQmNVUXNZVUZCY2tRN1FVRkRSRHRCUVVOR096czdRVUZIUkN4VFFVRkxMRWxCUVVrc1MwRkJTU3hEUVVGaUxFVkJRV2RDTEV0QlFVa3NTMEZCU3l4aFFVRjZRaXhGUVVGM1F5eEpRVUY0UXl4RlFVRTJRenRCUVVNelF5eFZRVUZOTEZGQlFVMHNTMEZCU3l4VlFVRk1MRU5CUVdkQ0xFVkJRV2hDTEVOQlFWbzdRVUZEUVN4VlFVRk5MRk5CUVZFc1MwRkJTeXhOUVVGTUxFTkJRVmtzUzBGQldpeERRVUZrT3p0QlFVVkJMR0ZCUVUwc1QwRkJUaXhIUVVGblFpeFBRVUZOTEVsQlFVNHNRMEZCVnl4UFFVRllMRU5CUVcxQ0xFOUJRVTBzVVVGQmVrSXNSVUZCYlVNc1QwRkJUU3hSUVVGNlF5eERRVUZvUWpzN1FVRkZRU3hYUVVGTExFdEJRVXdzUTBGQlZ5eExRVUZZTEVsQlFXdENMRTlCUVUwc1QwRkJlRUk3UVVGRFJEczdRVUZGUkN4UlFVRkpMRXRCUVVzc1QwRkJWQ3hGUVVGclFqdEJRVU5vUWl4WFFVRkxMRTlCUVV3c1EwRkJZU3hMUVVGTExFdEJRV3hDTEVWQlFYbENMRWxCUVhwQ08wRkJRMFE3TzBGQlJVUXNWMEZCVVN4TFFVRkxMRk5CUVU0c1IwRkJiVUlzU1VGQmJrSXNSMEZCTUVJc1ZVRkJha003UVVGRFJDeEhPenR0UWtGRlJDeFBMSE5DUVVGdlFqdEJRVUZCTEZGQlFWb3NTMEZCV1N4NVJFRkJTaXhGUVVGSk8wRkJRVUVzVVVGRFZpeE5RVVJWTEVkQlEyZENMRXRCUkdoQ0xFTkJRMVlzVFVGRVZUczdRVUZCUVN4UlFVTkRMRlZCUkVRc05FSkJRMmRDTEV0QlJHaENPenRCUVVWc1FpeFJRVUZOTEZsQlFWa3NaMEpCUVUwc1QwRkJUaXhaUVVGakxGVkJRV1FzUTBGQmJFSTdPMEZCUlVFc1VVRkJTU3hOUVVGS0xFVkJRVms3UVVGRFZpeG5Ra0ZCVlN4SFFVRldMRU5CUVdNc1JVRkJSU3hqUVVGR0xFVkJRV1E3UVVGRFJEczdRVUZGUkN4WFFVRlBMRk5CUVZBN1FVRkRSQ3hIT3p0dFFrRkZSQ3hMTEc5Q1FVRlJPMEZCUTA0c2IwSkJRVTBzU1VGQlRqdEJRVU5CTEZkQlFVOHNTVUZCVUR0QlFVTkVMRWM3TzIxQ1FVVkVMRTBzY1VKQlFWTTdRVUZEVUN4dlFrRkJUU3hMUVVGT08wRkJRMEVzVjBGQlR5eEpRVUZRTzBGQlEwUXNSenM3YlVKQlJVUXNUU3h4UWtGQlV6dEJRVU5RTEZkQlFVOHNTMEZCU3l4UlFVRk1MRWRCUVdkQ0xFdEJRVXNzUzBGQlRDeEZRVUZvUWl4SFFVRXJRaXhMUVVGTExFMUJRVXdzUlVGQmRFTTdRVUZEUkN4SE96dHRRa0ZGUkN4TExHOUNRVUZSTzBGQlEwNHNVVUZCVFN4VFFVRlRMRXRCUVVzc1RVRkJjRUk3UVVGRFFTeHZRa0ZCVFN4TFFVRk9PenRCUVVWQkxGTkJRVXNzU1VGQlNTeEhRVUZVTEVsQlFXZENMRTFCUVdoQ0xFVkJRWGRDTzBGQlEzUkNMRlZCUVVrc1QwRkJUeXhqUVVGUUxFTkJRWE5DTEVkQlFYUkNMRU5CUVVvc1JVRkJaME03UVVGRE9VSXNaVUZCVHl4SFFVRlFMRVZCUVZrc1NVRkJXaXhIUVVGdFFpeFBRVUZQTEVkQlFWQXNSVUZCV1N4TlFVRmFMRWRCUVhGQ0xFOUJRVThzUjBGQlVDeEZRVUZaTEU5QlFYQkVPMEZCUTBRN1FVRkRSanM3UVVGRlJDeFhRVUZQTEVsQlFWQTdRVUZEUkN4SE96dFRRVVZOTEd0Q0xDdENRVUZ0UWl4TExFVkJRVTg3UVVGREwwSXNkMEpCUVZrc1MwRkJTeXhUUVVGTUxFTkJRV1VzV1VGQk0wSXNSVUZCTkVNc1MwRkJOVU03UVVGRFJDeEhPenRUUVVWTkxHdENMQ3RDUVVGdFFpeExMRVZCUVU4N1FVRkRMMElzZDBKQlFWa3NTMEZCU3l4VFFVRk1MRU5CUVdVc1dVRkJNMElzUlVGQk5FTXNTMEZCTlVNN1FVRkRSQ3hIT3pzN096dEJRVWRJTEU5QlFVOHNVMEZCVUN4RFFVRnBRaXhuUWtGQmFrSXNSMEZCYjBNc1UwRkJjRU03UVVGRFFTeFBRVUZQTEZOQlFWQXNRMEZCYVVJc1dVRkJha0lzUjBGQlowTTdRVUZET1VJc1dVRkJWU3hEUVVSdlFqdEJRVVU1UWl4VFFVRlBMRXRCUm5WQ08wRkJSemxDTEU5QlFVc3NVMEZJZVVJN1FVRkpPVUlzVDBGQlN5eFRRVXA1UWp0QlFVczVRaXhoUVVGWE8wRkJURzFDTEVOQlFXaERPenRyUWtGUlpTeE5JaXdpWm1sc1pTSTZJa0ZqZEdsdmJpNXFjeUlzSW5OdmRYSmpaVkp2YjNRaU9pSXZWWE5sY25NdmJXRjBkSEJsY25KNUwxTnBkR1Z6TDNCdmNHMXZkR2x2YmlJc0luTnZkWEpqWlhORGIyNTBaVzUwSWpwYkltbHRjRzl5ZENCVVlYTnJJR1p5YjIwZ0p5NHVMM1JoYzJzdlZHRnpheWM3WEc1cGJYQnZjblFnZXlCemNHVmxaRkJsY2xObFkyOXVaQ0I5SUdaeWIyMGdKeTR1TDJsdVl5OWpZV3hqSnp0Y2JtbHRjRzl5ZENCN0lHbHpUblZ0TENCcGMwOWlhaXdnYVhOVGRISnBibWNnZlNCbWNtOXRJQ2N1TGk5cGJtTXZkWFJwYkhNbk8xeHVhVzF3YjNKMElHUmxkR1ZqZEZaaGJIVmxWSGx3WlNCbWNtOXRJQ2N1TGk5MllXeDFaUzEwZVhCbGN5OWtaWFJsWTNRbk8xeHVhVzF3YjNKMElFNVZUVVZTU1VOQlRGOVdRVXhWUlZNZ1puSnZiU0FuTGk0dmFXNWpMMjUxYldWeWFXTmhiQzEyWVd4MVpYTW5PMXh1YVcxd2IzSjBJR1JsZEdWamRFRmtZWEIwWlhJZ1puSnZiU0FuTGk0dmFXNWpMMlJsZEdWamRDMWhaR0Z3ZEdWeUp6dGNibHh1WTI5dWMzUWdUbFZOWDA1VlRVVlNTVU5CVEY5V1FVeFZSVk1nUFNCT1ZVMUZVa2xEUVV4ZlZrRk1WVVZUTG14bGJtZDBhRHRjYmx4dVkyOXVjM1FnWkdWbVlYVnNkRkpsYm1SbGNtVnlJRDBnS0hzZ2MzUmhkR1VzSUdGa1lYQjBaWElzSUdGa1lYQjBaWEpFWVhSaExDQmxiR1Z0Wlc1MElIMHBJRDArSUdGa1lYQjBaWElvWld4bGJXVnVkQ3dnYzNSaGRHVXNJR0ZrWVhCMFpYSkVZWFJoS1R0Y2JseHVZMjl1YzNRZ1kyOXVkbVZ5ZEVsbVUyaHZkV3hrUW1WT2RXMWlaWElnUFNBb2RtRnNkV1VwSUQwK0lDRnBjMDVoVGloMllXeDFaU2tnUHlCd1lYSnpaVVpzYjJGMEtIWmhiSFZsS1NBNklIWmhiSFZsTzF4dVhHNWpiR0Z6Y3lCQlkzUnBiMjRnWlhoMFpXNWtjeUJVWVhOcklIdGNiaUFnWTI5dWMzUnlkV04wYjNJb2NISnZjSE1nUFNCN2ZTa2dlMXh1SUNBZ0lIQnliM0J6TG5OMFlYUmxJRDBnZTMwN1hHNGdJQ0FnY0hKdmNITXVkbUZzZFdWTFpYbHpJRDBnVzEwN1hHNGdJQ0FnY0hKdmNITXVjR0Z5Wlc1MFMyVjVjeUE5SUZ0ZE8xeHVJQ0FnSUhOMWNHVnlLSEJ5YjNCektUdGNiaUFnZlZ4dVhHNGdJQzhxWEc0Z0lDQWdJeUJUWlhRZ1FXTjBhVzl1SUhCeWIzQmxjblJwWlhOY2JpQWdJQ0FqSXlCVFpYUWdkWE5sY2kxa1pXWnBibVZrSUVGamRHbHZiaUJ3Y205d1pYSjBhV1Z6WEc1Y2JpQWdJQ0JBY0dGeVlXMGdXMjlpYW1WamRGMWNiaUFnSUNCQWNtVjBkWEp1SUZ0QlkzUnBiMjVkWEc0Z0lDb3ZYRzRnSUhObGRDaHdjbTl3Y3lBOUlIdDlLU0I3WEc0Z0lDQWdkR2hwY3k1MllXeDFaWE1nUFNCMGFHbHpMblpoYkhWbGN5QjhmQ0I3ZlR0Y2JseHVJQ0FnSUdOdmJuTjBJSHNnZG1Gc2RXVnpMQ0F1TGk1d2NtOXdjMVJ2VTJWMElIMGdQU0J3Y205d2N6dGNiaUFnSUNCamIyNXpkQ0JwYm1obGNtbDBZV0pzWlNBOUlIdDlPMXh1WEc0Z0lDQWdMeThnVTJWMElHNXZiaTFqYjI1emRXMWxaQ0J3Y205d1pYSjBhV1Z6WEc0Z0lDQWdjM1Z3WlhJdWMyVjBLSEJ5YjNCelZHOVRaWFFwTzF4dVhHNGdJQ0FnTHk4Z1JHVjBaV04wSUdOdmNuSmxZM1FnWUdGa1lYQjBaWEpnSUdsbUlHNXZibVVnWlhocGMzUnpJR0Z1WkNCZ1pXeGxiV1Z1ZEdBZ2FYTWdZbVZwYm1jZ2MyVjBYRzRnSUNBZ2FXWWdLSFJvYVhNdVpXeGxiV1Z1ZENrZ2UxeHVJQ0FnSUNBZ2FXWWdLQ0YwYUdsekxtRmtZWEIwWlhJcElIdGNiaUFnSUNBZ0lDQWdMeThnUkhWamEzUjVjR2x6YUNCamFHVmpheUJtYjNJZ1FXUmhjSFJsY2x4dUlDQWdJQ0FnSUNCMGFHbHpMbUZrWVhCMFpYSWdQU0JrWlhSbFkzUkJaR0Z3ZEdWeUtIUm9hWE11Wld4bGJXVnVkQ2s3WEc1Y2JpQWdJQ0FnSUNBZ2FXWWdLSFJvYVhNdVlXUmhjSFJsY2k1blpYUkZiR1Z0Wlc1MFJHRjBZU2tnZTF4dUlDQWdJQ0FnSUNBZ0lIUm9hWE11WVdSaGNIUmxja1JoZEdFZ1BTQjBhR2x6TG1Ga1lYQjBaWEl1WjJWMFJXeGxiV1Z1ZEVSaGRHRW9kR2hwY3k1bGJHVnRaVzUwS1R0Y2JpQWdJQ0FnSUNBZ2ZWeHVJQ0FnSUNBZ2ZWeHVYRzRnSUNBZ0lDQnBaaUFvSVhSb2FYTXViMjVTWlc1a1pYSXBJSHRjYmlBZ0lDQWdJQ0FnZEdocGN5NXZibEpsYm1SbGNpQTlJR1JsWm1GMWJIUlNaVzVrWlhKbGNqdGNiaUFnSUNBZ0lIMWNiaUFnSUNCOVhHNWNiaUFnSUNBdkx5QlFjbWx0WlNCaGJpQnZZbXBsWTNRZ2RHOGdhVzVvWlhKcGRDQm1jbTl0TENCM2FYUm9JRzl1YkhrZ1lIWmhiSFZsWUNCd2NtOXdaWEowYVdWelhHNGdJQ0FnWm05eUlDaHNaWFFnYTJWNUlHbHVJSFJvYVhNdVpHVm1ZWFZzZEZaaGJIVmxLU0I3WEc0Z0lDQWdJQ0JwWmlBb2RHaHBjeTVrWldaaGRXeDBWbUZzZFdVdWFHRnpUM2R1VUhKdmNHVnlkSGtvYTJWNUtTa2dlMXh1SUNBZ0lDQWdJQ0JwWmlBb2NISnZjSE5VYjFObGRDNW9ZWE5QZDI1UWNtOXdaWEowZVNoclpYa3BLU0I3WEc0Z0lDQWdJQ0FnSUNBZ2FXNW9aWEpwZEdGaWJHVmJhMlY1WFNBOUlIQnliM0J6Vkc5VFpYUmJhMlY1WFR0Y2JpQWdJQ0FnSUNBZ2ZTQmxiSE5sSUdsbUlDaDBhR2x6VzJ0bGVWMGdJVDA5SUhWdVpHVm1hVzVsWkNrZ2UxeHVJQ0FnSUNBZ0lDQWdJR2x1YUdWeWFYUmhZbXhsVzJ0bGVWMGdQU0IwYUdselcydGxlVjA3WEc0Z0lDQWdJQ0FnSUgxY2JpQWdJQ0FnSUgxY2JpQWdJQ0I5WEc1Y2JpQWdJQ0F2THlCVmNHUmhkR1VnWlhocGMzUnBibWNnZG1Gc2RXVnpJSGRwZEdnZ2FXNW9aWEpwZEdGaWJHVWdjSEp2Y0dWeWRHbGxjMXh1SUNBZ0lHWnZjaUFvYkdWMElHdGxlU0JwYmlCMGFHbHpMblpoYkhWbGN5a2dlMXh1SUNBZ0lDQWdhV1lnS0hSb2FYTXVkbUZzZFdWekxtaGhjMDkzYmxCeWIzQmxjblI1S0d0bGVTa3BJSHRjYmlBZ0lDQWdJQ0FnZEdocGN5NTJZV3gxWlhOYmEyVjVYU0E5SUhzZ0xpNHVkR2hwY3k1MllXeDFaWE5iYTJWNVhTd2dMaTR1YVc1b1pYSnBkR0ZpYkdVZ2ZUdGNiaUFnSUNBZ0lIMWNiaUFnSUNCOVhHNWNiaUFnSUNBdkx5QlZjR1JoZEdWY2JpQWdJQ0JwWmlBb2RtRnNkV1Z6S1NCN1hHNGdJQ0FnSUNCMGFHbHpMbk5sZEZaaGJIVmxjeWgyWVd4MVpYTXNJR2x1YUdWeWFYUmhZbXhsS1R0Y2JseHVJQ0FnSUNBZ0x5OGdVSEpsWTI5dGNIVjBaU0J1ZFcxaVpYSWdiMllnZG1Gc2RXVWdhMlY1SUdGdVpDQndZWEpsYm5RZ2EyVjVjeUIwYnlCaGRtOXBaQ0J3WlhJdFpuSmhiV1VnYldWaGMzVnlaVzFsYm5SY2JpQWdJQ0FnSUhSb2FYTXViblZ0Vm1Gc2RXVkxaWGx6SUQwZ2RHaHBjeTUyWVd4MVpVdGxlWE11YkdWdVozUm9PMXh1SUNBZ0lDQWdkR2hwY3k1dWRXMVFZWEpsYm5STFpYbHpJRDBnZEdocGN5NXdZWEpsYm5STFpYbHpMbXhsYm1kMGFEdGNiaUFnSUNCOVhHNWNiaUFnSUNCeVpYUjFjbTRnZEdocGN6dGNiaUFnZlZ4dVhHNGdJSE5sZEZaaGJIVmxjeWgyWVd4MVpYTXNJR2x1YUdWeWFYUXBJSHRjYmlBZ0lDQXZMeUJKZEdWeVlYUmxJRzkyWlhJZ1lXeHNJR2x1WTI5dGFXNW5JSFpoYkhWbGN5QmhibVFnYzJWMFhHNGdJQ0FnWm05eUlDaHNaWFFnYTJWNUlHbHVJSFpoYkhWbGN5a2dlMXh1SUNBZ0lDQWdhV1lnS0haaGJIVmxjeTVvWVhOUGQyNVFjbTl3WlhKMGVTaHJaWGtwS1NCN1hHNGdJQ0FnSUNBZ0lHeGxkQ0JvWVhORGFHbHNaSEpsYmlBOUlHWmhiSE5sTzF4dUlDQWdJQ0FnSUNCamIyNXpkQ0JqYUdsc1pISmxiaUE5SUh0OU8xeHVYRzRnSUNBZ0lDQWdJQzh2SUUxbGNtZGxJR2x1ZEc4Z1pYaHBjM1JwYm1jZ2RtRnNkV1VnYjNJZ1kzSmxZWFJsSUc1bGQxeHVJQ0FnSUNBZ0lDQmpiMjV6ZENCMllXeDFaVUZzY21WaFpIbEZlR2x6ZEhNZ1BTQjBhR2x6TG5aaGJIVmxjMXRyWlhsZElDRTlQU0IxYm1SbFptbHVaV1E3WEc0Z0lDQWdJQ0FnSUd4bGRDQnVaWGRXWVd4MVpTQTlJSFpoYkhWbFFXeHlaV0ZrZVVWNGFYTjBjeUEvSUhzZ0xpNHVkR2hwY3k1MllXeDFaWE5iYTJWNVhTQjlJRG9nZXlBdUxpNXBibWhsY21sMElIMDdYRzVjYmlBZ0lDQWdJQ0FnTHk4Z1NXWWdkbUZzZFdWeklHbHpJRzV2ZENCaGJpQnZZbXBsWTNRc0lHRnpjMmxuYmlCMllXeDFaU0IwYnlCa1pXWmhkV3gwSUhCeWIzQmNiaUFnSUNBZ0lDQWdhV1lnS0NGcGMwOWlhaWgyWVd4MVpYTmJhMlY1WFNrcElIdGNiaUFnSUNBZ0lDQWdJQ0J1WlhkV1lXeDFaVnQwYUdsekxtUmxabUYxYkhSV1lXeDFaVkJ5YjNCZElEMGdkbUZzZFdWelcydGxlVjA3WEc0Z0lDQWdJQ0FnSUgwZ1pXeHpaU0I3WEc0Z0lDQWdJQ0FnSUNBZ2JtVjNWbUZzZFdVZ1BTQjdJQzR1TG01bGQxWmhiSFZsTENBdUxpNTJZV3gxWlhOYmEyVjVYU0I5TzF4dUlDQWdJQ0FnSUNCOVhHNWNiaUFnSUNBZ0lDQWdMeThnU1dZZ2QyVW5kbVVnWjI5MElHRnVJR0ZrWVhCMFpYSXNJR2RsZENCMGFHVWdZM1Z5Y21WdWRDQjJZV3gxWlZ4dUlDQWdJQ0FnSUNCcFppQW9ibVYzVm1Gc2RXVXVZM1Z5Y21WdWRDQTlQVDBnZFc1a1pXWnBibVZrS1NCN1hHNGdJQ0FnSUNBZ0lDQWdhV1lnS0hSb2FYTXVZV1JoY0hSbGNpa2dlMXh1SUNBZ0lDQWdJQ0FnSUNBZ2JtVjNWbUZzZFdVdVkzVnljbVZ1ZENBOUlHTnZiblpsY25SSlpsTm9iM1ZzWkVKbFRuVnRZbVZ5S0hSb2FYTXVZV1JoY0hSbGNpNW5aWFFvZEdocGN5NWxiR1Z0Wlc1MExDQnJaWGtwS1R0Y2JpQWdJQ0FnSUNBZ0lDQjlYRzRnSUNBZ0lDQWdJSDFjYmx4dUlDQWdJQ0FnSUNCcFppQW9ibVYzVm1Gc2RXVXVabkp2YlNBOVBUMGdkVzVrWldacGJtVmtJQ1ltSUhSb2FYTXVZV1JoY0hSbGNpa2dlMXh1SUNBZ0lDQWdJQ0FnSUc1bGQxWmhiSFZsTG1aeWIyMGdQU0J1WlhkV1lXeDFaUzVqZFhKeVpXNTBPMXh1SUNBZ0lDQWdJQ0I5WEc1Y2JpQWdJQ0FnSUNBZ0x5OGdRWEJ3YkhrZ1pHVm1ZWFZzZENCMllXeDFaU0J3Y205d1pYSjBhV1Z6WEc0Z0lDQWdJQ0FnSUdsbUlDZ2hkbUZzZFdWQmJISmxZV1I1UlhocGMzUnpLU0I3WEc0Z0lDQWdJQ0FnSUNBZ2JtVjNWbUZzZFdVZ1BTQjdJQzR1TG5Sb2FYTXVaR1ZtWVhWc2RGWmhiSFZsTENBdUxpNXVaWGRXWVd4MVpTQjlPMXh1SUNBZ0lDQWdJQ0I5WEc1Y2JpQWdJQ0FnSUNBZ0x5OGdTV1lnZDJVZ1pHOXVKM1FnYUdGMlpTQmhJSFpoYkhWbElIUjVjR1VnWVc1a0lIZGxJR1J2SUdoaGRtVWdZVzRnUVdSaGNIUmxjaXdnWTJobFkyc2dabTl5SUhSNWNHVWdkMmwwYUNCMllXeDFaU0JyWlhsY2JpQWdJQ0FnSUNBZ2FXWWdLQ0Z1WlhkV1lXeDFaUzUwZVhCbElDWW1JSFJvYVhNdVlXUmhjSFJsY2lBbUppQjBhR2x6TG1Ga1lYQjBaWEl1WTJobFkydFdZV3gxWlZSNWNHVXBJSHRjYmlBZ0lDQWdJQ0FnSUNCdVpYZFdZV3gxWlM1MGVYQmxJRDBnZEdocGN5NWhaR0Z3ZEdWeUxtTm9aV05yVm1Gc2RXVlVlWEJsS0d0bGVTazdYRzRnSUNBZ0lDQWdJSDFjYmx4dUlDQWdJQ0FnSUNBdkx5QkpaaUIzWlNCemRHbHNiQ0JrYjI0bmRDQm9ZWFpsSUdFZ2RtRnNkV1VnZEhsd1pTQmhibVFnZEdocGN5QnBjeUIwYUdVZ1ptbHljM1FnZEdsdFpTQjNaU2QyWlNCelpYUWdkR2hwY3lCMllXeDFaU3dnWTJobFkyc2diblZ0WlhKcFkyRnNJSFpoYkhWbGN5Qm1iM0lnYzNSeWFXNW5jeUJoYm1RZ2RHVnpkRnh1SUNBZ0lDQWdJQ0JwWmlBb0lXNWxkMVpoYkhWbExuUjVjR1VnSmlZZ0lYUm9hWE11ZG1Gc2RXVnpXMnRsZVYwcElIdGNiaUFnSUNBZ0lDQWdJQ0J1WlhkV1lXeDFaUzUwZVhCbElEMGdaR1YwWldOMFZtRnNkV1ZVZVhCbEtHNWxkMVpoYkhWbEtUdGNiaUFnSUNBZ0lDQWdmVnh1WEc0Z0lDQWdJQ0FnSUM4dklFbG1JSGRsSUdoaGRtVWdZU0IyWVd4MVpTQjBlWEJsTENCb1lXNWtiR1V1SUZSb2FYTWdhWE1nYlhrZ2JHVmhjM1FnWm1GMmIzVnlhWFJsSUhCaGNuUWdiMllnVUc5d2JXOTBhVzl1TENCemJ5NHVMaUJsYm1wdmVTNWNiaUFnSUNBZ0lDQWdhV1lnS0c1bGQxWmhiSFZsTG5SNWNHVXBJSHRjYmlBZ0lDQWdJQ0FnSUNCbWIzSWdLR3hsZENCcElEMGdNRHNnYVNBOElFNVZUVjlPVlUxRlVrbERRVXhmVmtGTVZVVlRPeUJwS3lzcElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUdOdmJuTjBJSEJ5YjNCT1lXMWxJRDBnVGxWTlJWSkpRMEZNWDFaQlRGVkZVMXRwWFR0Y2JpQWdJQ0FnSUNBZ0lDQWdJR052Ym5OMElIWmhiSFZsVUhKdmNDQTlJRzVsZDFaaGJIVmxXM0J5YjNCT1lXMWxYVHRjYmx4dUlDQWdJQ0FnSUNBZ0lDQWdMeThnU1dZZ2RHaHBjeUJ3Y205d0lHbHpJR0VnYzNSeWFXNW5JR0Z1WkNCM1pTQm9ZWFpsSUdFZ2MzQnNhWFIwWlhJc0lITndiR2wwWEc0Z0lDQWdJQ0FnSUNBZ0lDQnBaaUFvYm1WM1ZtRnNkV1V1ZEhsd1pTNW9ZWE5QZDI1UWNtOXdaWEowZVNnbmMzQnNhWFFuS1NrZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNCamIyNXpkQ0J6Y0d4cGRGQnliM0FnUFNCcGMxTjBjbWx1WnloMllXeDFaVkJ5YjNBcElEOGdibVYzVm1Gc2RXVXVkSGx3WlM1emNHeHBkQ2gyWVd4MVpWQnliM0FwSURvZ2UzMDdYRzVjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdabTl5SUNoc1pYUWdjM0JzYVhSTFpYa2dhVzRnYzNCc2FYUlFjbTl3S1NCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2FXWWdLSE53YkdsMFVISnZjQzVvWVhOUGQyNVFjbTl3WlhKMGVTaHpjR3hwZEV0bGVTa3BJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUdOdmJuTjBJR052YldKcGJtVmtTMlY1SUQwZ2EyVjVJQ3NnYzNCc2FYUkxaWGs3WEc1Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDOHZJRWxtSUhkbElHUnZiaWQwSUdoaGRtVWdZU0JqYUdsc1pDQjJZV3gxWlNCbWIzSWdkR2hwY3lCclpYa3NJRzFoYTJVZ2IyNWxYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0JwWmlBb0lXTm9hV3hrY21WdVcyTnZiV0pwYm1Wa1MyVjVYU2tnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQmpiMjV6ZENCa1pXWmhkV3gwVm1Gc2RXVWdQU0FvYm1WM1ZtRnNkV1V1ZEhsd1pTNWtaV1poZFd4MFVISnZjSE1nSmlZZ2JtVjNWbUZzZFdVdWRIbHdaUzVrWldaaGRXeDBVSEp2Y0hOYmMzQnNhWFJMWlhsZEtTQS9JRzVsZDFaaGJIVmxMblI1Y0dVdVpHVm1ZWFZzZEZCeWIzQnpXM053YkdsMFMyVjVYU0E2SUc1bGQxWmhiSFZsTG5SNWNHVXVaR1ZtWVhWc2RGQnliM0J6SUh4OElIdDlPMXh1WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lHTm9hV3hrY21WdVcyTnZiV0pwYm1Wa1MyVjVYU0E5SUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0F1TGk1dVpYZFdZV3gxWlN4Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0F1TGk1a1pXWmhkV3gwVm1Gc2RXVXNYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2NHRnlaVzUwT2lCclpYa3NYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ1kyaHBiR1JMWlhrNklITndiR2wwUzJWNVhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJSDA3WEc1Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdaR1ZzWlhSbElHTm9hV3hrY21WdVcyTnZiV0pwYm1Wa1MyVjVYUzUwZVhCbE8xeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdmVnh1WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCb1lYTkRhR2xzWkhKbGJpQTlJSFJ5ZFdVN1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQmphR2xzWkhKbGJsdGpiMjFpYVc1bFpFdGxlVjFiY0hKdmNFNWhiV1ZkSUQwZ2NHRnljMlZHYkc5aGRDaHpjR3hwZEZCeWIzQmJjM0JzYVhSTFpYbGRLVHRjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0I5WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJSDFjYmx4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0F2THlCSlppQjNaU0JvWVhabElHRWdkR1Z0Y0d4aGRHVWdablZ1WTNScGIyNHNJR2RsYm1WeVlYUmxYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lHbG1JQ2doYm1WM1ZtRnNkV1V1ZEdWdGNHeGhkR1VnSmlZZ2JtVjNWbUZzZFdVdWRIbHdaUzUwWlcxd2JHRjBaU0FtSmlCcGMxTjBjbWx1WnloMllXeDFaVkJ5YjNBcEtTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdibVYzVm1Gc2RXVXVkR1Z0Y0d4aGRHVWdQU0J1WlhkV1lXeDFaUzUwZVhCbExuUmxiWEJzWVhSbEtIWmhiSFZsVUhKdmNDazdYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lIMWNiaUFnSUNBZ0lDQWdJQ0FnSUgwZ1pXeHpaU0JwWmlBb2JtVjNWbUZzZFdVdWRIbHdaUzVrWldaaGRXeDBVSEp2Y0hNcElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ2JtVjNWbUZzZFdVZ1BTQjdJQzR1TG01bGQxWmhiSFZsTG5SNWNHVXVaR1ZtWVhWc2RGQnliM0J6TENBdUxpNXVaWGRXWVd4MVpTQjlPMXh1WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQzh2SUZSb2FYTWdhWE1nWVNCaWFYUWdiMllnWVNCb1lXTnJJQzBnZEdocGN5QmxiblJwY21VZ1puVnVZM1JwYjI0Z2FYTWdZU0JvWVdOckxpQlRiM0p5ZVNCbWRYUjFjbVVnYzJWc1ppNGdTU0JzYjI5cklHWnZjbmRoY21RZ2RHOGdjMk55WVhCd2FXNW5JSFJvWlNCc2IzUWdiMllnYVhRdVhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUdsbUlDaHVaWGRXWVd4MVpTNTBlWEJsTG1SbFptRjFiSFJRY205d2N5NTBlWEJsS1NCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2JtVjNWbUZzZFdVdWRIbHdaU0E5SUc1bGQxWmhiSFZsTG5SNWNHVXVaR1ZtWVhWc2RGQnliM0J6TG5SNWNHVTdYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lIMWNiaUFnSUNBZ0lDQWdJQ0FnSUgxY2JseHVJQ0FnSUNBZ0lDQWdJQ0FnYVdZZ0tIWmhiSFZsVUhKdmNDQWhQVDBnZFc1a1pXWnBibVZrSUNZbUlHNWxkMVpoYkhWbExuUjVjR1V1Y0dGeWMyVXBJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdibVYzVm1Gc2RXVmJjSEp2Y0U1aGJXVmRJRDBnYm1WM1ZtRnNkV1V1ZEhsd1pTNXdZWEp6WlNoMllXeDFaVkJ5YjNBc0lHNWxkMVpoYkhWbEtUdGNiaUFnSUNBZ0lDQWdJQ0FnSUgxY2JpQWdJQ0FnSUNBZ0lDQjlYRzRnSUNBZ0lDQWdJSDBnTHk4Z1JXNWtJSFpoYkhWbElIUjVjR1VnYm05dWMyVnVjMlZjYmx4dUlDQWdJQ0FnSUNBdkx5QlRaWFFnWUhCeVpYWmdJSFJ2SUdCamRYSnlaVzUwWUNCbWIzSWdabWx5YzNRZ1puSmhiV1VnWVdaMFpYSWdjMlYwWEc0Z0lDQWdJQ0FnSUc1bGQxWmhiSFZsTG5CeVpYWWdQU0J1WlhkV1lXeDFaUzVqZFhKeVpXNTBPMXh1SUNBZ0lDQWdJQ0JjYmlBZ0lDQWdJQ0FnTHk4Z1NXWWdkR2hwY3lCMllXeDFaU0JrYjJWemJpZDBJR2hoZG1VZ1kyaHBiR1J5Wlc0c0lHRmtaQ0IwYnlCMllXeDFaVXRsZVhOY2JpQWdJQ0FnSUNBZ2FXWWdLQ0ZvWVhORGFHbHNaSEpsYmlrZ2UxeHVJQ0FnSUNBZ0lDQWdJR2xtSUNoMGFHbHpMblpoYkhWbFMyVjVjeTVwYm1SbGVFOW1LR3RsZVNrZ1BUMDlJQzB4S1NCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0IwYUdsekxuWmhiSFZsUzJWNWN5NXdkWE5vS0d0bGVTazdYRzRnSUNBZ0lDQWdJQ0FnZlZ4dVhHNGdJQ0FnSUNBZ0lDOHZJRTl5SUdGa1pDQjBieUJ3WVhKbGJuUkxaWGx6WEc0Z0lDQWdJQ0FnSUgwZ1pXeHpaU0I3WEc0Z0lDQWdJQ0FnSUNBZ2JtVjNWbUZzZFdVdVkyaHBiR1J5Wlc0Z1BTQnVaWGRXWVd4MVpTNWphR2xzWkhKbGJpQjhmQ0I3ZlR0Y2JseHVJQ0FnSUNBZ0lDQWdJR2xtSUNoMGFHbHpMbkJoY21WdWRFdGxlWE11YVc1a1pYaFBaaWhyWlhrcElEMDlQU0F0TVNrZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnZEdocGN5NXdZWEpsYm5STFpYbHpMbkIxYzJnb2EyVjVLVHRjYmlBZ0lDQWdJQ0FnSUNCOVhHNWNiaUFnSUNBZ0lDQWdJQ0IwYUdsekxuTmxkRlpoYkhWbGN5aGphR2xzWkhKbGJpazdYRzRnSUNBZ0lDQWdJSDFjYmx4dUlDQWdJQ0FnSUNCMGFHbHpMblpoYkhWbGMxdHJaWGxkSUQwZ2JtVjNWbUZzZFdVN1hHNGdJQ0FnSUNCOVhHNGdJQ0FnZlZ4dUlDQjlYRzVjYmlBZ0x5cGNiaUFnSUNCRVpXTnBaR1VnZDJobGRHaGxjaUIwYUdseklFRmpkR2x2YmlCM2FXeHNJSEpsYm1SbGNpQnZiaUJ1WlhoMElHWnlZVzFsWEc1Y2JpQWdJQ0JBY0dGeVlXMGdXMEZqZEdsdmJsMWNiaUFnSUNCQWNHRnlZVzBnVzI1MWJXSmxjbDFjYmlBZ0lDQkFjR0Z5WVcwZ1cyNTFiV0psY2wxY2JpQWdJQ0JBY21WMGRYSnVJRnRpYjI5c1pXRnVYVG9nVW1WMGRYSnVJSFJ5ZFdVZ2RHOGdjbVZ1WkdWeVhHNGdJQ292WEc0Z0lIZHBiR3hTWlc1a1pYSW9ZV04wYVc5dUxDQm1jbUZ0WlZOMFlXMXdMQ0JsYkdGd2MyVmtLU0I3WEc0Z0lDQWdiR1YwSUdoaGMwTm9ZVzVuWldRZ1BTQm1ZV3h6WlR0Y2JseHVJQ0FnSUM4dklFTm9aV05ySUdsbUlHSmhjMlVnZG1Gc2RXVnpJR2hoZG1VZ2RYQmtZWFJsWkNCY2JpQWdJQ0JtYjNJZ0tHeGxkQ0JwSUQwZ01Ec2dhU0E4SUhSb2FYTXViblZ0Vm1Gc2RXVkxaWGx6T3lCcEt5c3BJSHRjYmlBZ0lDQWdJR052Ym5OMElHdGxlU0E5SUhSb2FYTXVkbUZzZFdWTFpYbHpXMmxkTzF4dUlDQWdJQ0FnWTI5dWMzUWdkbUZzZFdVZ1BTQjBhR2x6TG5aaGJIVmxjMXRyWlhsZE8xeHVYRzRnSUNBZ0lDQXZMeUJTZFc0Z2RISmhibk5tYjNKdElHWjFibU4wYVc5dUlDaHBaaUJ3Y21WelpXNTBLVnh1SUNBZ0lDQWdhV1lnS0haaGJIVmxMblJ5WVc1elptOXliU2tnZTF4dUlDQWdJQ0FnSUNCMllXeDFaUzVqZFhKeVpXNTBJRDBnZG1Gc2RXVXVkSEpoYm5ObWIzSnRLSFpoYkhWbExtTjFjbkpsYm5Rc0lHdGxlU3dnZEdocGN5azdYRzRnSUNBZ0lDQjlYRzVjYmlBZ0lDQWdJQzh2SUVOaGNDQnRhVzVwYlhWdFhHNGdJQ0FnSUNCcFppQW9hWE5PZFcwb2RtRnNkV1V1YldsdUtTa2dlMXh1SUNBZ0lDQWdJQ0IyWVd4MVpTNWpkWEp5Wlc1MElEMGdUV0YwYUM1dFlYZ29kbUZzZFdVdVkzVnljbVZ1ZEN3Z2RtRnNkV1V1YldsdUtUdGNiaUFnSUNBZ0lIMWNibHh1SUNBZ0lDQWdMeThnUTJGd0lHMWhlR2x0ZFcxY2JpQWdJQ0FnSUdsbUlDaHBjMDUxYlNoMllXeDFaUzV0WVhncEtTQjdYRzRnSUNBZ0lDQWdJSFpoYkhWbExtTjFjbkpsYm5RZ1BTQk5ZWFJvTG0xcGJpaDJZV3gxWlM1amRYSnlaVzUwTENCMllXeDFaUzV0WVhncE8xeHVJQ0FnSUNBZ2ZWeHVYRzRnSUNBZ0lDQXZMeUJTYjNWdVpDQnVkVzFpWlhKY2JpQWdJQ0FnSUdsbUlDaDJZV3gxWlM1eWIzVnVaQ2tnZTF4dUlDQWdJQ0FnSUNCMllXeDFaUzVqZFhKeVpXNTBJRDBnVFdGMGFDNXliM1Z1WkNoMllXeDFaUzVqZFhKeVpXNTBLVHRjYmlBZ0lDQWdJSDFjYmx4dUlDQWdJQ0FnZG1Gc2RXVXVabkpoYldWRGFHRnVaMlVnUFNCMllXeDFaUzVqZFhKeVpXNTBJQzBnZG1Gc2RXVXVjSEpsZGp0Y2JseHVJQ0FnSUNBZ0x5OGdWWEJrWVhSbElIWmxiRzlqYVhSNVhHNGdJQ0FnSUNCcFppQW9JWFJvYVhNdVkyRnNZM1ZzWVhSbGMxWmxiRzlqYVhSNUtTQjdYRzRnSUNBZ0lDQWdJSFpoYkhWbExuWmxiRzlqYVhSNUlEMGdjM0JsWldSUVpYSlRaV052Ym1Rb2RtRnNkV1V1Wm5KaGJXVkRhR0Z1WjJVc0lHVnNZWEJ6WldRcE8xeHVJQ0FnSUNBZ2ZWeHVYRzRnSUNBZ0lDQXZMeUJKWmlCMGFHbHpJSFpoYkhWbElHaGhjeUJqYUdGdVoyVmtYRzRnSUNBZ0lDQnBaaUFvZG1Gc2RXVXVjSEpsZGlBaFBUMGdkbUZzZFdVdVkzVnljbVZ1ZENrZ2UxeHVJQ0FnSUNBZ0lDQm9ZWE5EYUdGdVoyVmtJRDBnZEhKMVpUdGNiaUFnSUNBZ0lDQWdkbUZzZFdVdWNISmxkaUE5SUhaaGJIVmxMbU4xY25KbGJuUTdYRzRnSUNBZ0lDQjlYRzVjYmlBZ0lDQWdJQzh2SUVGd2NHVnVaQ0IxYm1sMFhHNGdJQ0FnSUNCamIyNXpkQ0IyWVd4MVpVWnZjbE4wWVhSbElEMGdLSFpoYkhWbExuUjVjR1VnSmlZZ2RtRnNkV1V1ZEhsd1pTNXpaWEpwWVd4cGVtVXBJRDhnZG1Gc2RXVXVkSGx3WlM1elpYSnBZV3hwZW1Vb2RtRnNkV1V1WTNWeWNtVnVkQ3dnZG1Gc2RXVXBJRG9nZG1Gc2RXVXVZM1Z5Y21WdWREdGNibHh1SUNBZ0lDQWdMeThnUVdSa0lIUnZJSE4wWVhSbElHbG1JSFJvYVhNZ2FYTWdibTkwSUdFZ1kyaHBiR1FnZG1GMVpWeHVJQ0FnSUNBZ2FXWWdLQ0YyWVd4MVpTNXdZWEpsYm5RcElIdGNiaUFnSUNBZ0lDQWdkR2hwY3k1emRHRjBaVnRyWlhsZElEMGdkbUZzZFdWR2IzSlRkR0YwWlR0Y2JpQWdJQ0FnSUgwZ1pXeHpaU0I3WEc0Z0lDQWdJQ0FnSUhSb2FYTXVkbUZzZFdWelczWmhiSFZsTG5CaGNtVnVkRjB1WTJocGJHUnlaVzViZG1Gc2RXVXVZMmhwYkdSTFpYbGRJRDBnZG1Gc2RXVkdiM0pUZEdGMFpUdGNiaUFnSUNBZ0lIMWNiaUFnSUNCOVhHNWNiaUFnSUNBdkx5QlZjR1JoZEdVZ2NHRnlaVzUwSUhaaGJIVmxjMXh1SUNBZ0lHWnZjaUFvYkdWMElHa2dQU0F3T3lCcElEd2dkR2hwY3k1dWRXMVFZWEpsYm5STFpYbHpPeUJwS3lzcElIdGNiaUFnSUNBZ0lHTnZibk4wSUd0bGVTQTlJSFJvYVhNdWNHRnlaVzUwUzJWNWMxdHBYVHRjYmlBZ0lDQWdJR052Ym5OMElIWmhiSFZsSUQwZ2RHaHBjeTUyWVd4MVpYTmJhMlY1WFR0Y2JseHVJQ0FnSUNBZ2RtRnNkV1V1WTNWeWNtVnVkQ0E5SUhaaGJIVmxMblI1Y0dVdVkyOXRZbWx1WlNoMllXeDFaUzVqYUdsc1pISmxiaXdnZG1Gc2RXVXVkR1Z0Y0d4aGRHVXBPMXh1WEc0Z0lDQWdJQ0IwYUdsekxuTjBZWFJsVzJ0bGVWMGdQU0IyWVd4MVpTNWpkWEp5Wlc1ME8xeHVJQ0FnSUgxY2JseHVJQ0FnSUdsbUlDaDBhR2x6TG05dVJuSmhiV1VwSUh0Y2JpQWdJQ0FnSUhSb2FYTXViMjVHY21GdFpTaDBhR2x6TG5OMFlYUmxMQ0IwYUdsektUdGNiaUFnSUNCOVhHNWNiaUFnSUNCeVpYUjFjbTRnS0hSb2FYTXViMjVEYkdWaGJuVndLU0EvSUhSeWRXVWdPaUJvWVhORGFHRnVaMlZrTzF4dUlDQjlYRzVjYmlBZ2FXNW9aWEpwZENod2NtOXdjeUE5SUh0OUtTQjdYRzRnSUNBZ1kyOXVjM1FnZXlCMllXeDFaWE1zSUM0dUxuQnliM0J6Vkc5VFpYUWdmU0E5SUhCeWIzQnpPMXh1SUNBZ0lHTnZibk4wSUc1bGQwRmpkR2x2YmlBOUlITjFjR1Z5TG1sdWFHVnlhWFFvY0hKdmNITlViMU5sZENrN1hHNWNiaUFnSUNCcFppQW9kbUZzZFdWektTQjdYRzRnSUNBZ0lDQnVaWGRCWTNScGIyNHVjMlYwS0hzZ2RtRnNkV1Z6SUgwcE8xeHVJQ0FnSUgxY2JseHVJQ0FnSUhKbGRIVnliaUJ1WlhkQlkzUnBiMjQ3WEc0Z0lIMWNibHh1SUNCd1lYVnpaU2dwSUh0Y2JpQWdJQ0J6ZFhCbGNpNXpkRzl3S0NrN1hHNGdJQ0FnY21WMGRYSnVJSFJvYVhNN1hHNGdJSDFjYmx4dUlDQnlaWE4xYldVb0tTQjdYRzRnSUNBZ2MzVndaWEl1YzNSaGNuUW9LVHRjYmlBZ0lDQnlaWFIxY200Z2RHaHBjenRjYmlBZ2ZWeHVYRzRnSUhSdloyZHNaU2dwSUh0Y2JpQWdJQ0J5WlhSMWNtNGdkR2hwY3k1cGMwRmpkR2wyWlNBL0lIUm9hWE11Y0dGMWMyVW9LU0E2SUhSb2FYTXVjbVZ6ZFcxbEtDazdYRzRnSUgxY2JseHVJQ0J6ZEdGeWRDZ3BJSHRjYmlBZ0lDQmpiMjV6ZENCMllXeDFaWE1nUFNCMGFHbHpMblpoYkhWbGN6dGNiaUFnSUNCemRYQmxjaTV6ZEdGeWRDZ3BPMXh1WEc0Z0lDQWdabTl5SUNoc1pYUWdhMlY1SUdsdUlIWmhiSFZsY3lrZ2UxeHVJQ0FnSUNBZ2FXWWdLSFpoYkhWbGN5NW9ZWE5QZDI1UWNtOXdaWEowZVNoclpYa3BLU0I3WEc0Z0lDQWdJQ0FnSUhaaGJIVmxjMXRyWlhsZExuQnlaWFlnUFNCMllXeDFaWE5iYTJWNVhTNXZjbWxuYVc0Z1BTQjJZV3gxWlhOYmEyVjVYUzVqZFhKeVpXNTBPMXh1SUNBZ0lDQWdmVnh1SUNBZ0lIMWNibHh1SUNBZ0lISmxkSFZ5YmlCMGFHbHpPMXh1SUNCOVhHNWNiaUFnYzNSaGRHbGpJR1Y0ZEdWdVpFUmxabUYxYkhSV1lXeDFaU2h3Y205d2N5a2dlMXh1SUNBZ0lISmxkSFZ5YmlCN0lDNHVMblJvYVhNdWNISnZkRzkwZVhCbExtUmxabUYxYkhSV1lXeDFaU3dnTGk0dWNISnZjSE1nZlR0Y2JpQWdmVnh1WEc0Z0lITjBZWFJwWXlCbGVIUmxibVJFWldaaGRXeDBVSEp2Y0hNb2NISnZjSE1wSUh0Y2JpQWdJQ0J5WlhSMWNtNGdleUF1TGk1MGFHbHpMbkJ5YjNSdmRIbHdaUzVrWldaaGRXeDBVSEp2Y0hNc0lDNHVMbkJ5YjNCeklIMDdYRzRnSUgxY2JuMWNibHh1UVdOMGFXOXVMbkJ5YjNSdmRIbHdaUzVrWldaaGRXeDBWbUZzZFdWUWNtOXdJRDBnSjJOMWNuSmxiblFuTzF4dVFXTjBhVzl1TG5CeWIzUnZkSGx3WlM1a1pXWmhkV3gwVm1Gc2RXVWdQU0I3WEc0Z0lIWmxiRzlqYVhSNU9pQXdMRnh1SUNCeWIzVnVaRG9nWm1Gc2MyVXNYRzRnSUcxcGJqb2dkVzVrWldacGJtVmtMRnh1SUNCdFlYZzZJSFZ1WkdWbWFXNWxaQ3hjYmlBZ2RISmhibk5tYjNKdE9pQjFibVJsWm1sdVpXUmNibjA3WEc1Y2JtVjRjRzl5ZENCa1pXWmhkV3gwSUVGamRHbHZianRjYmlKZGZRPT1cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2FjdGlvbnMvQWN0aW9uLmpzXG4gKiogbW9kdWxlIGlkID0gM1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX0FjdGlvbjIgPSByZXF1aXJlKCcuLi9hY3Rpb25zL0FjdGlvbicpO1xuXG52YXIgX0FjdGlvbjMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9BY3Rpb24yKTtcblxudmFyIF9nZW5lcmF0ZUJsZW5kQ3VydmUgPSByZXF1aXJlKCcuL2Zsb3cvZ2VuZXJhdGUtYmxlbmQtY3VydmUnKTtcblxudmFyIF9nZW5lcmF0ZUJsZW5kQ3VydmUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZ2VuZXJhdGVCbGVuZEN1cnZlKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoIXNlbGYpIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBjYWxsICYmICh0eXBlb2YgY2FsbCA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSA/IGNhbGwgOiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90IFwiICsgdHlwZW9mIHN1cGVyQ2xhc3MpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIGVudW1lcmFibGU6IGZhbHNlLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIDogc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzczsgfVxuXG4vKlxuICBNZXRob2RzIGFuZCBwcm9wZXJ0aWVzIHRvIGFkZCB0byBib3VuZCBBY3Rpb25zXG4qL1xudmFyIGJvdW5kT25TdGFydCA9IGZ1bmN0aW9uIChhY3Rpb24pIHtcbiAgcmV0dXJuIGFjdGlvbi5mbG93LmFjdGl2YXRlQWN0aW9uKGFjdGlvbi5pZCwgYWN0aW9uKTtcbn07XG52YXIgYm91bmRPblN0b3AgPSBmdW5jdGlvbiAoYWN0aW9uKSB7XG4gIHJldHVybiBhY3Rpb24uZmxvdy5kZWFjdGl2YXRlQWN0aW9uKGFjdGlvbi5pZCk7XG59O1xudmFyIGJvdW5kUHJvcHMgPSBmdW5jdGlvbiAoZmxvdykge1xuICByZXR1cm4ge1xuICAgIGZsb3c6IGZsb3csXG4gICAgaXNQcmlvcml0eTogdHJ1ZSxcbiAgICBvbkFjdGl2YXRlOiBib3VuZE9uU3RhcnQsXG4gICAgb25EZWFjdGl2YXRlOiBib3VuZE9uU3RvcFxuICB9O1xufTtcblxudmFyIEZsb3cgPSBmdW5jdGlvbiAoX0FjdGlvbikge1xuICBfaW5oZXJpdHMoRmxvdywgX0FjdGlvbik7XG5cbiAgZnVuY3Rpb24gRmxvdyhwcm9wcykge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBGbG93KTtcblxuICAgIHZhciBfdGhpcyA9IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIF9BY3Rpb24uY2FsbCh0aGlzLCBwcm9wcykpO1xuXG4gICAgX3RoaXMuYWN0aXZlQWN0aW9ucyA9IHt9O1xuICAgIF90aGlzLm51bUFjdGl2ZUFjdGlvbnMgPSAwO1xuICAgIHJldHVybiBfdGhpcztcbiAgfVxuXG4gIEZsb3cucHJvdG90eXBlLnNldCA9IGZ1bmN0aW9uIHNldChwcm9wcykge1xuICAgIF9BY3Rpb24ucHJvdG90eXBlLnNldC5jYWxsKHRoaXMsIHByb3BzKTtcblxuICAgIHRoaXMub25jZSgpO1xuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgLypcbiAgICBCaW5kIEFjdGlvbiB0byBBY3RvclxuICAqL1xuXG5cbiAgRmxvdy5wcm90b3R5cGUuY29ubmVjdCA9IGZ1bmN0aW9uIGNvbm5lY3QoYWN0aW9uKSB7XG4gICAgdmFyIGluaGVyaXRlZEFjdGlvbiA9IGFjdGlvbi5pbmhlcml0KCk7XG4gICAgdmFyIG5ld1ZhbHVlcyA9IHt9O1xuICAgIHZhciBoYXNOZXdWYWx1ZXMgPSBmYWxzZTtcblxuICAgIC8vIENyZWF0ZSB2YWx1ZXMgb24gYWN0b3IgdGhhdCBkb24ndCBleGlzdFxuICAgIGZvciAodmFyIGtleSBpbiBpbmhlcml0ZWRBY3Rpb24udmFsdWVzKSB7XG4gICAgICBpZiAoaW5oZXJpdGVkQWN0aW9uLnZhbHVlcy5oYXNPd25Qcm9wZXJ0eShrZXkpICYmICF0aGlzLnZhbHVlcy5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgIG5ld1ZhbHVlc1trZXldID0ge307XG4gICAgICAgIGhhc05ld1ZhbHVlcyA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGhhc05ld1ZhbHVlcykge1xuICAgICAgdGhpcy5zZXQoeyB2YWx1ZXM6IG5ld1ZhbHVlcyB9KTtcbiAgICB9XG5cbiAgICBpbmhlcml0ZWRBY3Rpb24ucGFyZW50SWQgPSBhY3Rpb24uaWQ7XG5cbiAgICByZXR1cm4gaW5oZXJpdGVkQWN0aW9uLnNldChib3VuZFByb3BzKHRoaXMsIGluaGVyaXRlZEFjdGlvbikpO1xuICB9O1xuXG4gIC8qXG4gICAgU3RhcnQgQWN0b3JcbiAgICAgSWYgQWN0aW9uIGlzIHByb3ZpZGVkLCBiaW5kIGl0IHRvIHRoaXMgQWN0b3IgYW5kIHN0YXJ0XG4gICAgIEBwYXJhbSAob3B0aW9uYWwpIFtBY3Rpb25dXG4gICovXG5cblxuICBGbG93LnByb3RvdHlwZS5zdGFydCA9IGZ1bmN0aW9uIHN0YXJ0KCkge1xuICAgIF9BY3Rpb24ucHJvdG90eXBlLnN0YXJ0LmNhbGwodGhpcyk7XG5cbiAgICBmb3IgKHZhciBrZXkgaW4gdGhpcy5hY3RpdmVBY3Rpb25zKSB7XG4gICAgICBpZiAodGhpcy5hY3RpdmVBY3Rpb25zLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgdmFyIGFjdGlvbiA9IHRoaXMuYWN0aXZlQWN0aW9uc1trZXldO1xuICAgICAgICBpZiAoIWFjdGlvbi5pc0FjdGl2ZSkge1xuICAgICAgICAgIGFjdGlvbi5zdGFydCgpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgRmxvdy5wcm90b3R5cGUuc3RvcCA9IGZ1bmN0aW9uIHN0b3AoKSB7XG4gICAgX0FjdGlvbi5wcm90b3R5cGUuc3RvcC5jYWxsKHRoaXMpO1xuXG4gICAgZm9yICh2YXIga2V5IGluIHRoaXMuYWN0aXZlQWN0aW9ucykge1xuICAgICAgaWYgKHRoaXMuYWN0aXZlQWN0aW9ucy5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgIHRoaXMuYWN0aXZlQWN0aW9uc1trZXldLnN0b3AoKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICBGbG93LnByb3RvdHlwZS53aWxsUmVuZGVyID0gZnVuY3Rpb24gd2lsbFJlbmRlcihhY3RvciwgZnJhbWVTdGFtcCwgZWxhcHNlZCkge1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5udW1WYWx1ZUtleXM7IGkrKykge1xuICAgICAgdmFyIGtleSA9IHRoaXMudmFsdWVLZXlzW2ldO1xuICAgICAgdmFyIHZhbHVlID0gdGhpcy52YWx1ZXNba2V5XTtcbiAgICAgIHZhciBkcml2ZXIgPSB2YWx1ZS5udW1Ecml2ZXJzID8gdGhpcy5hY3RpdmVBY3Rpb25zW3ZhbHVlLmRyaXZlcnNbMF1dIDogZmFsc2U7XG4gICAgICB2YXIgbmV3Q3VycmVudCA9IHZhbHVlLm51bURyaXZlcnMgPyBkcml2ZXIudmFsdWVzW2tleV0uY3VycmVudCA6IHZhbHVlLmN1cnJlbnQ7XG5cbiAgICAgIC8qKlxuICAgICAgICogVE9ETzogcmVwbGFjZSB3aXRoIGJsZW5kIHRyZWUgcmVzb2x2ZXJcbiAgICAgICAqIEFkZGl0aXZlIG1vdGlvblxuICAgICAgICogQmV6aWVyIHR3ZWVuIGJsZW5kXG4gICAgICAgKi9cbiAgICAgIGlmICh2YWx1ZS5ibGVuZEN1cnZlKSB7XG4gICAgICAgIG5ld0N1cnJlbnQgPSB2YWx1ZS5ibGVuZEN1cnZlKCk7XG4gICAgICB9XG5cbiAgICAgIHZhbHVlLmN1cnJlbnQgPSBuZXdDdXJyZW50O1xuICAgIH1cblxuICAgIHJldHVybiBfQWN0aW9uLnByb3RvdHlwZS53aWxsUmVuZGVyLmNhbGwodGhpcywgYWN0b3IsIGZyYW1lU3RhbXAsIGVsYXBzZWQpO1xuICB9O1xuXG4gIC8qXG4gICAgQWRkIGFjdGl2ZSBhY3Rpb25zXG4gICAgIEBwYXJhbSBbbnVtYmVyXVxuICAgIEBwYXJhbSBbQWN0aW9uXVxuICAqL1xuXG5cbiAgRmxvdy5wcm90b3R5cGUuYWN0aXZhdGVBY3Rpb24gPSBmdW5jdGlvbiBhY3RpdmF0ZUFjdGlvbihpZCwgYWN0aW9uKSB7XG4gICAgdGhpcy5hY3RpdmVBY3Rpb25zW2lkXSA9IGFjdGlvbjtcbiAgICB0aGlzLm51bUFjdGl2ZUFjdGlvbnMrKztcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYWN0aW9uLm51bVZhbHVlS2V5czsgaSsrKSB7XG4gICAgICB2YXIga2V5ID0gYWN0aW9uLnZhbHVlS2V5c1tpXTtcbiAgICAgIHZhciBhY3Rpb25WYWx1ZSA9IGFjdGlvbi52YWx1ZXNba2V5XTtcbiAgICAgIHZhciB2YWx1ZSA9IHRoaXMudmFsdWVzW2tleV07XG5cbiAgICAgIC8vIElmIHdlJ3JlIGJsZW5kaW5nIHRoaXMgYWN0aW9uLCBhbmQgdGhlcmUncyBvbiBhbHJlYWR5IGluIHByb2dyZXNzXG4gICAgICBpZiAoYWN0aW9uLmJsZW5kICYmIHZhbHVlLm51bURyaXZlcnMgJiYgIXZhbHVlLmJsZW5kQ3VydmUgJiYgdmFsdWUuZHJpdmVyc1swXS5wcm90b3R5cGUgPT09IGFjdGlvbi5wcm90b3R5cGUpIHtcbiAgICAgICAgdmFsdWUuYmxlbmRDdXJ2ZSA9ICgwLCBfZ2VuZXJhdGVCbGVuZEN1cnZlMi5kZWZhdWx0KSh0aGlzLmFjdGl2ZUFjdGlvbnNbdmFsdWUuZHJpdmVyc1swXV0sIGFjdGlvbiwgdmFsdWUsIGtleSk7XG4gICAgICB9IGVsc2UgaWYgKCFhY3Rpb24uaXNTY3J1YmJpbmcpIHtcbiAgICAgICAgdmFsdWUuYmxlbmRDdXJ2ZSA9IHVuZGVmaW5lZDtcblxuICAgICAgICAvLyBQYXNzIEFjdG9yIHZhbHVlIHByb3BlcnRpZXMgdG8gQWN0aW9uXG4gICAgICAgIGlmIChhY3Rpb25WYWx1ZS52ZWxvY2l0eSA9PT0gMCkge1xuICAgICAgICAgIGFjdGlvblZhbHVlLnZlbG9jaXR5ID0gdmFsdWUudmVsb2NpdHk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoYWN0aW9uVmFsdWUuZnJvbSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgYWN0aW9uVmFsdWUuZnJvbSA9IGFjdGlvblZhbHVlLmN1cnJlbnQgPSB2YWx1ZS5jdXJyZW50O1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHZhbHVlLmRyaXZlcnMgPSBbaWRdO1xuICAgICAgdmFsdWUubnVtRHJpdmVycyA9IHZhbHVlLmRyaXZlcnMubGVuZ3RoO1xuICAgIH1cblxuICAgIGlmICh0aGlzLm51bUFjdGl2ZUFjdGlvbnMpIHtcbiAgICAgIF9BY3Rpb24ucHJvdG90eXBlLnN0YXJ0LmNhbGwodGhpcyk7XG4gICAgfVxuICB9O1xuXG4gIC8qXG4gICAgUmVtb3ZlIGFjdGl2ZSBhY3Rpb25zXG4gICAgIEBwYXJhbSBbbnVtYmVyXVxuICAqL1xuXG5cbiAgRmxvdy5wcm90b3R5cGUuZGVhY3RpdmF0ZUFjdGlvbiA9IGZ1bmN0aW9uIGRlYWN0aXZhdGVBY3Rpb24oaWQpIHtcbiAgICB2YXIgYWN0aW9uID0gdGhpcy5hY3RpdmVBY3Rpb25zW2lkXTtcblxuICAgIGlmIChhY3Rpb24pIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYWN0aW9uLm51bVZhbHVlS2V5czsgaSsrKSB7XG4gICAgICAgIHZhciBrZXkgPSBhY3Rpb24udmFsdWVLZXlzW2ldO1xuICAgICAgICB2YXIgdmFsdWUgPSB0aGlzLnZhbHVlc1trZXldO1xuICAgICAgICB2YXIgZHJpdmVySW5kZXggPSB2YWx1ZS5kcml2ZXJzLmluZGV4T2YoaWQpO1xuXG4gICAgICAgIGlmIChkcml2ZXJJbmRleCAhPT0gLTEpIHtcbiAgICAgICAgICB2YWx1ZS5kcml2ZXJzLnNwbGljZShkcml2ZXJJbmRleCwgMSk7XG4gICAgICAgICAgdmFsdWUubnVtRHJpdmVycy0tO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGRlbGV0ZSB0aGlzLmFjdGl2ZUFjdGlvbnNbaWRdO1xuICAgICAgdGhpcy5udW1BY3RpdmVBY3Rpb25zLS07XG4gICAgfVxuXG4gICAgaWYgKCF0aGlzLm51bUFjdGl2ZUFjdGlvbnMgJiYgdGhpcy5pc0FjdGl2ZSkge1xuICAgICAgX0FjdGlvbi5wcm90b3R5cGUuc3RvcC5jYWxsKHRoaXMpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gRmxvdztcbn0oX0FjdGlvbjMuZGVmYXVsdCk7XG5cbkZsb3cucHJvdG90eXBlLmRlZmF1bHRWYWx1ZSA9IF9BY3Rpb24zLmRlZmF1bHQuZXh0ZW5kRGVmYXVsdFZhbHVlKHtcbiAgZHJpdmVyczogW10sXG4gIG51bURyaXZlcnM6IDBcbn0pO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBGbG93O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluTnlZeTloWTNScGIyNXpMMFpzYjNjdWFuTWlYU3dpYm1GdFpYTWlPbHRkTENKdFlYQndhVzVuY3lJNklqczdPenRCUVVGQk96czdPMEZCUTBFN096czdPenM3T3pzN096czdPenRCUVV0QkxFbEJRVTBzWlVGQlpTeFZRVUZETEUxQlFVUTdRVUZCUVN4VFFVRlpMRTlCUVU4c1NVRkJVQ3hEUVVGWkxHTkJRVm9zUTBGQk1rSXNUMEZCVHl4RlFVRnNReXhGUVVGelF5eE5RVUYwUXl4RFFVRmFPMEZCUVVFc1EwRkJja0k3UVVGRFFTeEpRVUZOTEdOQlFXTXNWVUZCUXl4TlFVRkVPMEZCUVVFc1UwRkJXU3hQUVVGUExFbEJRVkFzUTBGQldTeG5Ra0ZCV2l4RFFVRTJRaXhQUVVGUExFVkJRWEJETEVOQlFWbzdRVUZCUVN4RFFVRndRanRCUVVOQkxFbEJRVTBzWVVGQllTeFZRVUZETEVsQlFVUTdRVUZCUVN4VFFVRlhPMEZCUXpWQ0xHTkJSRFJDTzBGQlJUVkNMR2RDUVVGWkxFbEJSbWRDTzBGQlJ6VkNMR2RDUVVGWkxGbEJTR2RDTzBGQlNUVkNMR3RDUVVGak8wRkJTbU1zUjBGQldEdEJRVUZCTEVOQlFXNUNPenRKUVU5TkxFazdPenRCUVVOS0xHZENRVUZaTEV0QlFWb3NSVUZCYlVJN1FVRkJRVHM3UVVGQlFTeHBSRUZEYWtJc2JVSkJRVTBzUzBGQlRpeERRVVJwUWpzN1FVRkZha0lzVlVGQlN5eGhRVUZNTEVkQlFYRkNMRVZCUVhKQ08wRkJRMEVzVlVGQlN5eG5Ra0ZCVEN4SFFVRjNRaXhEUVVGNFFqdEJRVWhwUWp0QlFVbHNRanM3YVVKQlJVUXNSeXhuUWtGQlNTeExMRVZCUVU4N1FVRkRWQ3h6UWtGQlRTeEhRVUZPTEZsQlFWVXNTMEZCVmpzN1FVRkZRU3hUUVVGTExFbEJRVXc3TzBGQlJVRXNWMEZCVHl4SlFVRlFPMEZCUTBRc1J6czdPenM3T3p0cFFrRkxSQ3hQTEc5Q1FVRlJMRTBzUlVGQlVUdEJRVU5rTEZGQlFVMHNhMEpCUVd0Q0xFOUJRVThzVDBGQlVDeEZRVUY0UWp0QlFVTkJMRkZCUVVrc1dVRkJXU3hGUVVGb1FqdEJRVU5CTEZGQlFVa3NaVUZCWlN4TFFVRnVRanM3TzBGQlIwRXNVMEZCU3l4SlFVRkpMRWRCUVZRc1NVRkJaMElzWjBKQlFXZENMRTFCUVdoRExFVkJRWGRETzBGQlEzUkRMRlZCUVVrc1owSkJRV2RDTEUxQlFXaENMRU5CUVhWQ0xHTkJRWFpDTEVOQlFYTkRMRWRCUVhSRExFdEJRVGhETEVOQlFVTXNTMEZCU3l4TlFVRk1MRU5CUVZrc1kwRkJXaXhEUVVFeVFpeEhRVUV6UWl4RFFVRnVSQ3hGUVVGdlJqdEJRVU5zUml4clFrRkJWU3hIUVVGV0xFbEJRV2xDTEVWQlFXcENPMEZCUTBFc2RVSkJRV1VzU1VGQlpqdEJRVU5FTzBGQlEwWTdPMEZCUlVRc1VVRkJTU3haUVVGS0xFVkJRV3RDTzBGQlEyaENMRmRCUVVzc1IwRkJUQ3hEUVVGVExFVkJRVVVzVVVGQlVTeFRRVUZXTEVWQlFWUTdRVUZEUkRzN1FVRkZSQ3h2UWtGQlowSXNVVUZCYUVJc1IwRkJNa0lzVDBGQlR5eEZRVUZzUXpzN1FVRkZRU3hYUVVGUExHZENRVUZuUWl4SFFVRm9RaXhEUVVGdlFpeFhRVUZYTEVsQlFWZ3NSVUZCYVVJc1pVRkJha0lzUTBGQmNFSXNRMEZCVUR0QlFVTkVMRWM3T3pzN096czdPenRwUWtGVFJDeExMRzlDUVVGUk8wRkJRMDRzYzBKQlFVMHNTMEZCVGpzN1FVRkZRU3hUUVVGTExFbEJRVWtzUjBGQlZDeEpRVUZuUWl4TFFVRkxMR0ZCUVhKQ0xFVkJRVzlETzBGQlEyeERMRlZCUVVrc1MwRkJTeXhoUVVGTUxFTkJRVzFDTEdOQlFXNUNMRU5CUVd0RExFZEJRV3hETEVOQlFVb3NSVUZCTkVNN1FVRkRNVU1zV1VGQlRTeFRRVUZUTEV0QlFVc3NZVUZCVEN4RFFVRnRRaXhIUVVGdVFpeERRVUZtTzBGQlEwRXNXVUZCU1N4RFFVRkRMRTlCUVU4c1VVRkJXaXhGUVVGelFqdEJRVU53UWl4cFFrRkJUeXhMUVVGUU8wRkJRMFE3UVVGRFJqdEJRVU5HT3p0QlFVVkVMRmRCUVU4c1NVRkJVRHRCUVVORUxFYzdPMmxDUVVWRUxFa3NiVUpCUVU4N1FVRkRUQ3h6UWtGQlRTeEpRVUZPT3p0QlFVVkJMRk5CUVVzc1NVRkJTU3hIUVVGVUxFbEJRV2RDTEV0QlFVc3NZVUZCY2tJc1JVRkJiME03UVVGRGJFTXNWVUZCU1N4TFFVRkxMR0ZCUVV3c1EwRkJiVUlzWTBGQmJrSXNRMEZCYTBNc1IwRkJiRU1zUTBGQlNpeEZRVUUwUXp0QlFVTXhReXhoUVVGTExHRkJRVXdzUTBGQmJVSXNSMEZCYmtJc1JVRkJkMElzU1VGQmVFSTdRVUZEUkR0QlFVTkdPenRCUVVWRUxGZEJRVThzU1VGQlVEdEJRVU5FTEVjN08ybENRVVZFTEZVc2RVSkJRVmNzU3l4RlFVRlBMRlVzUlVGQldTeFBMRVZCUVZNN1FVRkRja01zVTBGQlN5eEpRVUZKTEVsQlFVa3NRMEZCWWl4RlFVRm5RaXhKUVVGSkxFdEJRVXNzV1VGQmVrSXNSVUZCZFVNc1IwRkJka01zUlVGQk5FTTdRVUZETVVNc1ZVRkJUU3hOUVVGTkxFdEJRVXNzVTBGQlRDeERRVUZsTEVOQlFXWXNRMEZCV2p0QlFVTkJMRlZCUVUwc1VVRkJVU3hMUVVGTExFMUJRVXdzUTBGQldTeEhRVUZhTEVOQlFXUTdRVUZEUVN4VlFVRk5MRk5CUVZNc1RVRkJUU3hWUVVGT0xFZEJRVzFDTEV0QlFVc3NZVUZCVEN4RFFVRnRRaXhOUVVGTkxFOUJRVTRzUTBGQll5eERRVUZrTEVOQlFXNUNMRU5CUVc1Q0xFZEJRVEJFTEV0QlFYcEZPMEZCUTBFc1ZVRkJTU3hoUVVGaExFMUJRVTBzVlVGQlRpeEhRVUZ0UWl4UFFVRlBMRTFCUVZBc1EwRkJZeXhIUVVGa0xFVkJRVzFDTEU5QlFYUkRMRWRCUVdkRUxFMUJRVTBzVDBGQmRrVTdPenM3T3pzN1FVRlBRU3hWUVVGSkxFMUJRVTBzVlVGQlZpeEZRVUZ6UWp0QlFVTndRaXh4UWtGQllTeE5RVUZOTEZWQlFVNHNSVUZCWWp0QlFVTkVPenRCUVVWRUxGbEJRVTBzVDBGQlRpeEhRVUZuUWl4VlFVRm9RanRCUVVORU96dEJRVVZFTEZkQlFVOHNhMEpCUVUwc1ZVRkJUaXhaUVVGcFFpeExRVUZxUWl4RlFVRjNRaXhWUVVGNFFpeEZRVUZ2UXl4UFFVRndReXhEUVVGUU8wRkJRMFFzUnpzN096czdPenM3TzJsQ1FWRkVMR01zTWtKQlFXVXNSU3hGUVVGSkxFMHNSVUZCVVR0QlFVTjZRaXhUUVVGTExHRkJRVXdzUTBGQmJVSXNSVUZCYmtJc1NVRkJlVUlzVFVGQmVrSTdRVUZEUVN4VFFVRkxMR2RDUVVGTU96dEJRVVZCTEZOQlFVc3NTVUZCU1N4SlFVRkpMRU5CUVdJc1JVRkJaMElzU1VGQlNTeFBRVUZQTEZsQlFUTkNMRVZCUVhsRExFZEJRWHBETEVWQlFUaERPMEZCUXpWRExGVkJRVTBzVFVGQlRTeFBRVUZQTEZOQlFWQXNRMEZCYVVJc1EwRkJha0lzUTBGQldqdEJRVU5CTEZWQlFVMHNZMEZCWXl4UFFVRlBMRTFCUVZBc1EwRkJZeXhIUVVGa0xFTkJRWEJDTzBGQlEwRXNWVUZCVFN4UlFVRlJMRXRCUVVzc1RVRkJUQ3hEUVVGWkxFZEJRVm9zUTBGQlpEczdPMEZCUjBFc1ZVRkJTU3hQUVVGUExFdEJRVkFzU1VGQlowSXNUVUZCVFN4VlFVRjBRaXhKUVVGdlF5eERRVUZETEUxQlFVMHNWVUZCTTBNc1NVRkJNRVFzVFVGQlRTeFBRVUZPTEVOQlFXTXNRMEZCWkN4RlFVRnBRaXhUUVVGcVFpeExRVUVyUWl4UFFVRlBMRk5CUVhCSExFVkJRV2RJTzBGQlF6bEhMR05CUVUwc1ZVRkJUaXhIUVVGdFFpeHJRMEZCYlVJc1MwRkJTeXhoUVVGTUxFTkJRVzFDTEUxQlFVMHNUMEZCVGl4RFFVRmpMRU5CUVdRc1EwRkJia0lzUTBGQmJrSXNSVUZCZVVRc1RVRkJla1FzUlVGQmFVVXNTMEZCYWtVc1JVRkJkMFVzUjBGQmVFVXNRMEZCYmtJN1FVRkRSQ3hQUVVaRUxFMUJSVThzU1VGQlNTeERRVUZETEU5QlFVOHNWMEZCV2l4RlFVRjVRanRCUVVNNVFpeGpRVUZOTEZWQlFVNHNSMEZCYlVJc1UwRkJia0k3T3p0QlFVZEJMRmxCUVVrc1dVRkJXU3hSUVVGYUxFdEJRWGxDTEVOQlFUZENMRVZCUVdkRE8wRkJRemxDTEhOQ1FVRlpMRkZCUVZvc1IwRkJkVUlzVFVGQlRTeFJRVUUzUWp0QlFVTkVPenRCUVVWRUxGbEJRVWtzV1VGQldTeEpRVUZhTEV0QlFYRkNMRk5CUVhwQ0xFVkJRVzlETzBGQlEyeERMSE5DUVVGWkxFbEJRVm9zUjBGQmJVSXNXVUZCV1N4UFFVRmFMRWRCUVhOQ0xFMUJRVTBzVDBGQkwwTTdRVUZEUkR0QlFVTkdPenRCUVVWRUxGbEJRVTBzVDBGQlRpeEhRVUZuUWl4RFFVRkRMRVZCUVVRc1EwRkJhRUk3UVVGRFFTeFpRVUZOTEZWQlFVNHNSMEZCYlVJc1RVRkJUU3hQUVVGT0xFTkJRV01zVFVGQmFrTTdRVUZEUkRzN1FVRkZSQ3hSUVVGSkxFdEJRVXNzWjBKQlFWUXNSVUZCTWtJN1FVRkRla0lzZDBKQlFVMHNTMEZCVGp0QlFVTkVPMEZCUTBZc1J6czdPenM3T3pzN2FVSkJUMFFzWjBJc05rSkJRV2xDTEVVc1JVRkJTVHRCUVVOdVFpeFJRVUZOTEZOQlFWTXNTMEZCU3l4aFFVRk1MRU5CUVcxQ0xFVkJRVzVDTEVOQlFXWTdPMEZCUlVFc1VVRkJTU3hOUVVGS0xFVkJRVms3UVVGRFZpeFhRVUZMTEVsQlFVa3NTVUZCU1N4RFFVRmlMRVZCUVdkQ0xFbEJRVWtzVDBGQlR5eFpRVUV6UWl4RlFVRjVReXhIUVVGNlF5eEZRVUU0UXp0QlFVTTFReXhaUVVGTkxFMUJRVTBzVDBGQlR5eFRRVUZRTEVOQlFXbENMRU5CUVdwQ0xFTkJRVm83UVVGRFFTeFpRVUZOTEZGQlFWRXNTMEZCU3l4TlFVRk1MRU5CUVZrc1IwRkJXaXhEUVVGa08wRkJRMEVzV1VGQlRTeGpRVUZqTEUxQlFVMHNUMEZCVGl4RFFVRmpMRTlCUVdRc1EwRkJjMElzUlVGQmRFSXNRMEZCY0VJN08wRkJSVUVzV1VGQlNTeG5Ra0ZCWjBJc1EwRkJReXhEUVVGeVFpeEZRVUYzUWp0QlFVTjBRaXhuUWtGQlRTeFBRVUZPTEVOQlFXTXNUVUZCWkN4RFFVRnhRaXhYUVVGeVFpeEZRVUZyUXl4RFFVRnNRenRCUVVOQkxHZENRVUZOTEZWQlFVNDdRVUZEUkR0QlFVTkdPenRCUVVWRUxHRkJRVThzUzBGQlN5eGhRVUZNTEVOQlFXMUNMRVZCUVc1Q0xFTkJRVkE3UVVGRFFTeFhRVUZMTEdkQ1FVRk1PMEZCUTBRN08wRkJSVVFzVVVGQlNTeERRVUZETEV0QlFVc3NaMEpCUVU0c1NVRkJNRUlzUzBGQlN5eFJRVUZ1UXl4RlFVRTJRenRCUVVNelF5eDNRa0ZCVFN4SlFVRk9PMEZCUTBRN1FVRkRSaXhIT3pzN096dEJRVWRJTEV0QlFVc3NVMEZCVEN4RFFVRmxMRmxCUVdZc1IwRkJPRUlzYVVKQlFVOHNhMEpCUVZBc1EwRkJNRUk3UVVGRGRFUXNWMEZCVXl4RlFVUTJRenRCUVVWMFJDeGpRVUZaTzBGQlJqQkRMRU5CUVRGQ0xFTkJRVGxDT3p0clFrRkxaU3hKSWl3aVptbHNaU0k2SWtac2IzY3Vhbk1pTENKemIzVnlZMlZTYjI5MElqb2lMMVZ6WlhKekwyMWhkSFJ3WlhKeWVTOVRhWFJsY3k5d2IzQnRiM1JwYjI0aUxDSnpiM1Z5WTJWelEyOXVkR1Z1ZENJNld5SnBiWEJ2Y25RZ1FXTjBhVzl1SUdaeWIyMGdKeTR1TDJGamRHbHZibk12UVdOMGFXOXVKenRjYm1sdGNHOXlkQ0JuWlc1bGNtRjBaVUpzWlc1a1EzVnlkbVVnWm5KdmJTQW5MaTltYkc5M0wyZGxibVZ5WVhSbExXSnNaVzVrTFdOMWNuWmxKenRjYmx4dUx5cGNiaUFnVFdWMGFHOWtjeUJoYm1RZ2NISnZjR1Z5ZEdsbGN5QjBieUJoWkdRZ2RHOGdZbTkxYm1RZ1FXTjBhVzl1YzF4dUtpOWNibU52Ym5OMElHSnZkVzVrVDI1VGRHRnlkQ0E5SUNoaFkzUnBiMjRwSUQwK0lHRmpkR2x2Ymk1bWJHOTNMbUZqZEdsMllYUmxRV04wYVc5dUtHRmpkR2x2Ymk1cFpDd2dZV04wYVc5dUtUdGNibU52Ym5OMElHSnZkVzVrVDI1VGRHOXdJRDBnS0dGamRHbHZiaWtnUFQ0Z1lXTjBhVzl1TG1ac2IzY3VaR1ZoWTNScGRtRjBaVUZqZEdsdmJpaGhZM1JwYjI0dWFXUXBPMXh1WTI5dWMzUWdZbTkxYm1SUWNtOXdjeUE5SUNobWJHOTNLU0E5UGlBb2UxeHVJQ0JtYkc5M0xGeHVJQ0JwYzFCeWFXOXlhWFI1T2lCMGNuVmxMRnh1SUNCdmJrRmpkR2wyWVhSbE9pQmliM1Z1WkU5dVUzUmhjblFzWEc0Z0lHOXVSR1ZoWTNScGRtRjBaVG9nWW05MWJtUlBibE4wYjNCY2JuMHBPMXh1WEc1amJHRnpjeUJHYkc5M0lHVjRkR1Z1WkhNZ1FXTjBhVzl1SUh0Y2JpQWdZMjl1YzNSeWRXTjBiM0lvY0hKdmNITXBJSHRjYmlBZ0lDQnpkWEJsY2lod2NtOXdjeWs3WEc0Z0lDQWdkR2hwY3k1aFkzUnBkbVZCWTNScGIyNXpJRDBnZTMwN1hHNGdJQ0FnZEdocGN5NXVkVzFCWTNScGRtVkJZM1JwYjI1eklEMGdNRHRjYmlBZ2ZWeHVYRzRnSUhObGRDaHdjbTl3Y3lrZ2UxeHVJQ0FnSUhOMWNHVnlMbk5sZENod2NtOXdjeWs3WEc1Y2JpQWdJQ0IwYUdsekxtOXVZMlVvS1R0Y2JseHVJQ0FnSUhKbGRIVnliaUIwYUdsek8xeHVJQ0I5WEc1Y2JpQWdMeXBjYmlBZ0lDQkNhVzVrSUVGamRHbHZiaUIwYnlCQlkzUnZjbHh1SUNBcUwxeHVJQ0JqYjI1dVpXTjBLR0ZqZEdsdmJpa2dlMXh1SUNBZ0lHTnZibk4wSUdsdWFHVnlhWFJsWkVGamRHbHZiaUE5SUdGamRHbHZiaTVwYm1obGNtbDBLQ2s3WEc0Z0lDQWdiR1YwSUc1bGQxWmhiSFZsY3lBOUlIdDlPMXh1SUNBZ0lHeGxkQ0JvWVhOT1pYZFdZV3gxWlhNZ1BTQm1ZV3h6WlR0Y2JseHVJQ0FnSUM4dklFTnlaV0YwWlNCMllXeDFaWE1nYjI0Z1lXTjBiM0lnZEdoaGRDQmtiMjRuZENCbGVHbHpkRnh1SUNBZ0lHWnZjaUFvYkdWMElHdGxlU0JwYmlCcGJtaGxjbWwwWldSQlkzUnBiMjR1ZG1Gc2RXVnpLU0I3WEc0Z0lDQWdJQ0JwWmlBb2FXNW9aWEpwZEdWa1FXTjBhVzl1TG5aaGJIVmxjeTVvWVhOUGQyNVFjbTl3WlhKMGVTaHJaWGtwSUNZbUlDRjBhR2x6TG5aaGJIVmxjeTVvWVhOUGQyNVFjbTl3WlhKMGVTaHJaWGtwS1NCN1hHNGdJQ0FnSUNBZ0lHNWxkMVpoYkhWbGMxdHJaWGxkSUQwZ2UzMDdYRzRnSUNBZ0lDQWdJR2hoYzA1bGQxWmhiSFZsY3lBOUlIUnlkV1U3WEc0Z0lDQWdJQ0I5WEc0Z0lDQWdmVnh1WEc0Z0lDQWdhV1lnS0doaGMwNWxkMVpoYkhWbGN5a2dlMXh1SUNBZ0lDQWdkR2hwY3k1elpYUW9leUIyWVd4MVpYTTZJRzVsZDFaaGJIVmxjeUI5S1R0Y2JpQWdJQ0I5WEc1Y2JpQWdJQ0JwYm1obGNtbDBaV1JCWTNScGIyNHVjR0Z5Wlc1MFNXUWdQU0JoWTNScGIyNHVhV1E3WEc1Y2JpQWdJQ0J5WlhSMWNtNGdhVzVvWlhKcGRHVmtRV04wYVc5dUxuTmxkQ2hpYjNWdVpGQnliM0J6S0hSb2FYTXNJR2x1YUdWeWFYUmxaRUZqZEdsdmJpa3BPMXh1SUNCOVhHNWNiaUFnTHlwY2JpQWdJQ0JUZEdGeWRDQkJZM1J2Y2x4dVhHNGdJQ0FnU1dZZ1FXTjBhVzl1SUdseklIQnliM1pwWkdWa0xDQmlhVzVrSUdsMElIUnZJSFJvYVhNZ1FXTjBiM0lnWVc1a0lITjBZWEowWEc1Y2JpQWdJQ0JBY0dGeVlXMGdLRzl3ZEdsdmJtRnNLU0JiUVdOMGFXOXVYVnh1SUNBcUwxeHVJQ0J6ZEdGeWRDZ3BJSHRjYmlBZ0lDQnpkWEJsY2k1emRHRnlkQ2dwTzF4dVhHNGdJQ0FnWm05eUlDaHNaWFFnYTJWNUlHbHVJSFJvYVhNdVlXTjBhWFpsUVdOMGFXOXVjeWtnZTF4dUlDQWdJQ0FnYVdZZ0tIUm9hWE11WVdOMGFYWmxRV04wYVc5dWN5NW9ZWE5QZDI1UWNtOXdaWEowZVNoclpYa3BLU0I3WEc0Z0lDQWdJQ0FnSUdOdmJuTjBJR0ZqZEdsdmJpQTlJSFJvYVhNdVlXTjBhWFpsUVdOMGFXOXVjMXRyWlhsZE8xeHVJQ0FnSUNBZ0lDQnBaaUFvSVdGamRHbHZiaTVwYzBGamRHbDJaU2tnZTF4dUlDQWdJQ0FnSUNBZ0lHRmpkR2x2Ymk1emRHRnlkQ2dwTzF4dUlDQWdJQ0FnSUNCOVhHNGdJQ0FnSUNCOVhHNGdJQ0FnZlZ4dVhHNGdJQ0FnY21WMGRYSnVJSFJvYVhNN1hHNGdJSDFjYmx4dUlDQnpkRzl3S0NrZ2UxeHVJQ0FnSUhOMWNHVnlMbk4wYjNBb0tUdGNibHh1SUNBZ0lHWnZjaUFvYkdWMElHdGxlU0JwYmlCMGFHbHpMbUZqZEdsMlpVRmpkR2x2Ym5NcElIdGNiaUFnSUNBZ0lHbG1JQ2gwYUdsekxtRmpkR2wyWlVGamRHbHZibk11YUdGelQzZHVVSEp2Y0dWeWRIa29hMlY1S1NrZ2UxeHVJQ0FnSUNBZ0lDQjBhR2x6TG1GamRHbDJaVUZqZEdsdmJuTmJhMlY1WFM1emRHOXdLQ2s3WEc0Z0lDQWdJQ0I5WEc0Z0lDQWdmVnh1WEc0Z0lDQWdjbVYwZFhKdUlIUm9hWE03WEc0Z0lIMWNibHh1SUNCM2FXeHNVbVZ1WkdWeUtHRmpkRzl5TENCbWNtRnRaVk4wWVcxd0xDQmxiR0Z3YzJWa0tTQjdYRzRnSUNBZ1ptOXlJQ2hzWlhRZ2FTQTlJREE3SUdrZ1BDQjBhR2x6TG01MWJWWmhiSFZsUzJWNWN6c2dhU3NyS1NCN1hHNGdJQ0FnSUNCamIyNXpkQ0JyWlhrZ1BTQjBhR2x6TG5aaGJIVmxTMlY1YzF0cFhUdGNiaUFnSUNBZ0lHTnZibk4wSUhaaGJIVmxJRDBnZEdocGN5NTJZV3gxWlhOYmEyVjVYVHRjYmlBZ0lDQWdJR052Ym5OMElHUnlhWFpsY2lBOUlIWmhiSFZsTG01MWJVUnlhWFpsY25NZ1B5QjBhR2x6TG1GamRHbDJaVUZqZEdsdmJuTmJkbUZzZFdVdVpISnBkbVZ5YzFzd1hWMGdPaUJtWVd4elpUdGNiaUFnSUNBZ0lHeGxkQ0J1WlhkRGRYSnlaVzUwSUQwZ2RtRnNkV1V1Ym5WdFJISnBkbVZ5Y3lBL0lHUnlhWFpsY2k1MllXeDFaWE5iYTJWNVhTNWpkWEp5Wlc1MElEb2dkbUZzZFdVdVkzVnljbVZ1ZER0Y2JseHVJQ0FnSUNBZ0x5b3FYRzRnSUNBZ0lDQWdLaUJVVDBSUE9pQnlaWEJzWVdObElIZHBkR2dnWW14bGJtUWdkSEpsWlNCeVpYTnZiSFpsY2x4dUlDQWdJQ0FnSUNvZ1FXUmthWFJwZG1VZ2JXOTBhVzl1WEc0Z0lDQWdJQ0FnS2lCQ1pYcHBaWElnZEhkbFpXNGdZbXhsYm1SY2JpQWdJQ0FnSUNBcUwxeHVJQ0FnSUNBZ2FXWWdLSFpoYkhWbExtSnNaVzVrUTNWeWRtVXBJSHRjYmlBZ0lDQWdJQ0FnYm1WM1EzVnljbVZ1ZENBOUlIWmhiSFZsTG1Kc1pXNWtRM1Z5ZG1Vb0tUdGNiaUFnSUNBZ0lIMWNibHh1SUNBZ0lDQWdkbUZzZFdVdVkzVnljbVZ1ZENBOUlHNWxkME4xY25KbGJuUTdYRzRnSUNBZ2ZWeHVYRzRnSUNBZ2NtVjBkWEp1SUhOMWNHVnlMbmRwYkd4U1pXNWtaWElvWVdOMGIzSXNJR1p5WVcxbFUzUmhiWEFzSUdWc1lYQnpaV1FwTzF4dUlDQjlYRzVjYmlBZ0x5cGNiaUFnSUNCQlpHUWdZV04wYVhabElHRmpkR2x2Ym5OY2JseHVJQ0FnSUVCd1lYSmhiU0JiYm5WdFltVnlYVnh1SUNBZ0lFQndZWEpoYlNCYlFXTjBhVzl1WFZ4dUlDQXFMMXh1SUNCaFkzUnBkbUYwWlVGamRHbHZiaWhwWkN3Z1lXTjBhVzl1S1NCN1hHNGdJQ0FnZEdocGN5NWhZM1JwZG1WQlkzUnBiMjV6VzJsa1hTQTlJR0ZqZEdsdmJqdGNiaUFnSUNCMGFHbHpMbTUxYlVGamRHbDJaVUZqZEdsdmJuTXJLenRjYmx4dUlDQWdJR1p2Y2lBb2JHVjBJR2tnUFNBd095QnBJRHdnWVdOMGFXOXVMbTUxYlZaaGJIVmxTMlY1Y3pzZ2FTc3JLU0I3WEc0Z0lDQWdJQ0JqYjI1emRDQnJaWGtnUFNCaFkzUnBiMjR1ZG1Gc2RXVkxaWGx6VzJsZE8xeHVJQ0FnSUNBZ1kyOXVjM1FnWVdOMGFXOXVWbUZzZFdVZ1BTQmhZM1JwYjI0dWRtRnNkV1Z6VzJ0bGVWMDdYRzRnSUNBZ0lDQmpiMjV6ZENCMllXeDFaU0E5SUhSb2FYTXVkbUZzZFdWelcydGxlVjA3WEc1Y2JpQWdJQ0FnSUM4dklFbG1JSGRsSjNKbElHSnNaVzVrYVc1bklIUm9hWE1nWVdOMGFXOXVMQ0JoYm1RZ2RHaGxjbVVuY3lCdmJpQmhiSEpsWVdSNUlHbHVJSEJ5YjJkeVpYTnpYRzRnSUNBZ0lDQnBaaUFvWVdOMGFXOXVMbUpzWlc1a0lDWW1JSFpoYkhWbExtNTFiVVJ5YVhabGNuTWdKaVlnSVhaaGJIVmxMbUpzWlc1a1EzVnlkbVVnSmlZZ0tIWmhiSFZsTG1SeWFYWmxjbk5iTUYwdWNISnZkRzkwZVhCbElEMDlQU0JoWTNScGIyNHVjSEp2ZEc5MGVYQmxLU2tnZTF4dUlDQWdJQ0FnSUNCMllXeDFaUzVpYkdWdVpFTjFjblpsSUQwZ1oyVnVaWEpoZEdWQ2JHVnVaRU4xY25abEtIUm9hWE11WVdOMGFYWmxRV04wYVc5dWMxdDJZV3gxWlM1a2NtbDJaWEp6V3pCZFhTd2dZV04wYVc5dUxDQjJZV3gxWlN3Z2EyVjVLVHRjYmlBZ0lDQWdJSDBnWld4elpTQnBaaUFvSVdGamRHbHZiaTVwYzFOamNuVmlZbWx1WnlrZ2UxeHVJQ0FnSUNBZ0lDQjJZV3gxWlM1aWJHVnVaRU4xY25abElEMGdkVzVrWldacGJtVmtPMXh1WEc0Z0lDQWdJQ0FnSUM4dklGQmhjM01nUVdOMGIzSWdkbUZzZFdVZ2NISnZjR1Z5ZEdsbGN5QjBieUJCWTNScGIyNWNiaUFnSUNBZ0lDQWdhV1lnS0dGamRHbHZibFpoYkhWbExuWmxiRzlqYVhSNUlEMDlQU0F3S1NCN1hHNGdJQ0FnSUNBZ0lDQWdZV04wYVc5dVZtRnNkV1V1ZG1Wc2IyTnBkSGtnUFNCMllXeDFaUzUyWld4dlkybDBlVHRjYmlBZ0lDQWdJQ0FnZlZ4dVhHNGdJQ0FnSUNBZ0lHbG1JQ2hoWTNScGIyNVdZV3gxWlM1bWNtOXRJRDA5UFNCMWJtUmxabWx1WldRcElIdGNiaUFnSUNBZ0lDQWdJQ0JoWTNScGIyNVdZV3gxWlM1bWNtOXRJRDBnWVdOMGFXOXVWbUZzZFdVdVkzVnljbVZ1ZENBOUlIWmhiSFZsTG1OMWNuSmxiblE3WEc0Z0lDQWdJQ0FnSUgxY2JpQWdJQ0FnSUgxY2JseHVJQ0FnSUNBZ2RtRnNkV1V1WkhKcGRtVnljeUE5SUZ0cFpGMDdYRzRnSUNBZ0lDQjJZV3gxWlM1dWRXMUVjbWwyWlhKeklEMGdkbUZzZFdVdVpISnBkbVZ5Y3k1c1pXNW5kR2c3WEc0Z0lDQWdmVnh1WEc0Z0lDQWdhV1lnS0hSb2FYTXViblZ0UVdOMGFYWmxRV04wYVc5dWN5a2dlMXh1SUNBZ0lDQWdjM1Z3WlhJdWMzUmhjblFvS1R0Y2JpQWdJQ0I5WEc0Z0lIMWNibHh1SUNBdktseHVJQ0FnSUZKbGJXOTJaU0JoWTNScGRtVWdZV04wYVc5dWMxeHVYRzRnSUNBZ1FIQmhjbUZ0SUZ0dWRXMWlaWEpkWEc0Z0lDb3ZYRzRnSUdSbFlXTjBhWFpoZEdWQlkzUnBiMjRvYVdRcElIdGNiaUFnSUNCamIyNXpkQ0JoWTNScGIyNGdQU0IwYUdsekxtRmpkR2wyWlVGamRHbHZibk5iYVdSZE8xeHVYRzRnSUNBZ2FXWWdLR0ZqZEdsdmJpa2dlMXh1SUNBZ0lDQWdabTl5SUNoc1pYUWdhU0E5SURBN0lHa2dQQ0JoWTNScGIyNHViblZ0Vm1Gc2RXVkxaWGx6T3lCcEt5c3BJSHRjYmlBZ0lDQWdJQ0FnWTI5dWMzUWdhMlY1SUQwZ1lXTjBhVzl1TG5aaGJIVmxTMlY1YzF0cFhUdGNiaUFnSUNBZ0lDQWdZMjl1YzNRZ2RtRnNkV1VnUFNCMGFHbHpMblpoYkhWbGMxdHJaWGxkTzF4dUlDQWdJQ0FnSUNCamIyNXpkQ0JrY21sMlpYSkpibVJsZUNBOUlIWmhiSFZsTG1SeWFYWmxjbk11YVc1a1pYaFBaaWhwWkNrN1hHNWNiaUFnSUNBZ0lDQWdhV1lnS0dSeWFYWmxja2x1WkdWNElDRTlQU0F0TVNrZ2UxeHVJQ0FnSUNBZ0lDQWdJSFpoYkhWbExtUnlhWFpsY25NdWMzQnNhV05sS0dSeWFYWmxja2x1WkdWNExDQXhLVHRjYmlBZ0lDQWdJQ0FnSUNCMllXeDFaUzV1ZFcxRWNtbDJaWEp6TFMwN1hHNGdJQ0FnSUNBZ0lIMWNiaUFnSUNBZ0lIMWNibHh1SUNBZ0lDQWdaR1ZzWlhSbElIUm9hWE11WVdOMGFYWmxRV04wYVc5dWMxdHBaRjA3WEc0Z0lDQWdJQ0IwYUdsekxtNTFiVUZqZEdsMlpVRmpkR2x2Ym5NdExUdGNiaUFnSUNCOVhHNWNiaUFnSUNCcFppQW9JWFJvYVhNdWJuVnRRV04wYVhabFFXTjBhVzl1Y3lBbUppQjBhR2x6TG1selFXTjBhWFpsS1NCN1hHNGdJQ0FnSUNCemRYQmxjaTV6ZEc5d0tDazdYRzRnSUNBZ2ZWeHVJQ0I5WEc1OVhHNWNia1pzYjNjdWNISnZkRzkwZVhCbExtUmxabUYxYkhSV1lXeDFaU0E5SUVGamRHbHZiaTVsZUhSbGJtUkVaV1poZFd4MFZtRnNkV1VvZTF4dUlDQmtjbWwyWlhKek9pQmJYU3hjYmlBZ2JuVnRSSEpwZG1WeWN6b2dNRnh1ZlNrN1hHNWNibVY0Y0c5eWRDQmtaV1poZFd4MElFWnNiM2M3WEc0aVhYMD1cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2FjdGlvbnMvRmxvdy5qc1xuICoqIG1vZHVsZSBpZCA9IDRcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF9BY3Rpb24yID0gcmVxdWlyZSgnLi9BY3Rpb24nKTtcblxudmFyIF9BY3Rpb24zID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfQWN0aW9uMik7XG5cbnZhciBfcHJlc2V0RWFzaW5nID0gcmVxdWlyZSgnLi9lYXNpbmcvcHJlc2V0LWVhc2luZycpO1xuXG52YXIgX3ByZXNldEVhc2luZzIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9wcmVzZXRFYXNpbmcpO1xuXG52YXIgX3V0aWxzID0gcmVxdWlyZSgnLi4vaW5jL3V0aWxzJyk7XG5cbnZhciBfY2FsYyA9IHJlcXVpcmUoJy4uL2luYy9jYWxjJyk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKCFzZWxmKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gY2FsbCAmJiAodHlwZW9mIGNhbGwgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikgPyBjYWxsIDogc2VsZjsgfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb24sIG5vdCBcIiArIHR5cGVvZiBzdXBlckNsYXNzKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCBlbnVtZXJhYmxlOiBmYWxzZSwgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LnNldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKSA6IHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7IH1cblxudmFyIENPVU5UID0gJ0NvdW50JztcbnZhciBORVhUX1NURVBTID0ge1xuICBsb29wOiAncmVzdGFydCcsXG4gIHlveW86ICdyZXZlcnNlJyxcbiAgZmxpcDogJ2ZsaXBWYWx1ZXMnXG59O1xuXG52YXIgVHdlZW4gPSBmdW5jdGlvbiAoX0FjdGlvbikge1xuICBfaW5oZXJpdHMoVHdlZW4sIF9BY3Rpb24pO1xuXG4gIGZ1bmN0aW9uIFR3ZWVuKCkge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBUd2Vlbik7XG5cbiAgICByZXR1cm4gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgX0FjdGlvbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpKTtcbiAgfVxuXG4gIFR3ZWVuLnByb3RvdHlwZS5zdGFydCA9IGZ1bmN0aW9uIHN0YXJ0KCkge1xuICAgIHRoaXMuZWxhcHNlZCA9IDA7XG4gICAgdGhpcy5mbGlwQ291bnQgPSB0aGlzLnlveW9Db3VudCA9IHRoaXMubG9vcENvdW50ID0gMDtcbiAgICB0aGlzLmlzU2NydWJiaW5nID0gZmFsc2U7XG5cbiAgICAvLyBTZXQgZGVmYXVsdCBgZnJvbWAgaWYgbm9uZSBzZXRcbiAgICBpZiAoIXRoaXMuZmxvdykge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLm51bVZhbHVlS2V5czsgaSsrKSB7XG4gICAgICAgIHZhciBrZXkgPSB0aGlzLnZhbHVlS2V5c1tpXTtcbiAgICAgICAgdmFyIHZhbHVlID0gdGhpcy52YWx1ZXNba2V5XTtcbiAgICAgICAgaWYgKHZhbHVlLmZyb20gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHZhbHVlLmZyb20gPSAwO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIF9BY3Rpb24ucHJvdG90eXBlLnN0YXJ0LmNhbGwodGhpcyk7XG4gIH07XG5cbiAgVHdlZW4ucHJvdG90eXBlLm9uVXBkYXRlID0gZnVuY3Rpb24gb25VcGRhdGUodHdlZW4sIGZyYW1lU3RhbXAsIGVsYXBzZWQpIHtcbiAgICB2YXIgcHJvZ3Jlc3NUYXJnZXQgPSB0aGlzLnBsYXlEaXJlY3Rpb24gPT09IDEgPyAxIDogMDtcblxuICAgIHRoaXMuZW5kZWQgPSB0cnVlO1xuXG4gICAgaWYgKCF0aGlzLmlzU2NydWJiaW5nKSB7XG4gICAgICB0aGlzLmVsYXBzZWQgKz0gZWxhcHNlZCAqIHRoaXMuZGlsYXRlICogdGhpcy5wbGF5RGlyZWN0aW9uO1xuICAgIH1cblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5udW1WYWx1ZUtleXM7IGkrKykge1xuICAgICAgdmFyIGtleSA9IHRoaXMudmFsdWVLZXlzW2ldO1xuICAgICAgdmFyIHZhbHVlID0gdGhpcy52YWx1ZXNba2V5XTtcblxuICAgICAgdmFyIHByb2dyZXNzID0gKDAsIF9jYWxjLnJlc3RyaWN0KSgoMCwgX2NhbGMuZ2V0UHJvZ3Jlc3NGcm9tVmFsdWUpKHRoaXMuZWxhcHNlZCAtIHZhbHVlLmRlbGF5LCAwLCB2YWx1ZS5kdXJhdGlvbiksIDAsIDEpO1xuXG4gICAgICAvLyBNYXJrIFR3ZWVuIGFzIE5PVCBlbmRlZCBpZiBzdGlsbCBpbiBwcm9ncmVzc1xuICAgICAgaWYgKHByb2dyZXNzICE9PSBwcm9ncmVzc1RhcmdldCkge1xuICAgICAgICB0aGlzLmVuZGVkID0gZmFsc2U7XG4gICAgICB9XG5cbiAgICAgIC8vIFN0ZXAgcHJvZ3Jlc3MgaWYgd2UncmUgc3RlcHBpbmdcbiAgICAgIGlmICh2YWx1ZS5zdGVwcykge1xuICAgICAgICBwcm9ncmVzcyA9ICgwLCBfY2FsYy5zdGVwUHJvZ3Jlc3MpKHByb2dyZXNzLCB2YWx1ZS5zdGVwcyk7XG4gICAgICB9XG5cbiAgICAgIC8vIEVhc2UgcHJvZ3Jlc3NcbiAgICAgIHZhbHVlLmN1cnJlbnQgPSAoMCwgX2NhbGMuZWFzZSkocHJvZ3Jlc3MsIHZhbHVlLmZyb20sIHZhbHVlLnRvLCB2YWx1ZS5lYXNlKTtcbiAgICB9XG4gIH07XG5cbiAgVHdlZW4ucHJvdG90eXBlLm9uRnJhbWVFbmQgPSBmdW5jdGlvbiBvbkZyYW1lRW5kKCkge1xuICAgIGlmICh0aGlzLmVuZGVkKSB7XG4gICAgICB2YXIgc3RlcFRha2VuID0gZmFsc2U7XG5cbiAgICAgIGZvciAodmFyIGtleSBpbiBORVhUX1NURVBTKSB7XG4gICAgICAgIGlmIChORVhUX1NURVBTLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICBpZiAoKDAsIF91dGlscy5pc051bSkodGhpc1trZXldKSAmJiB0aGlzW2tleV0gPiB0aGlzW2tleSArIENPVU5UXSkge1xuICAgICAgICAgICAgdGhpc1trZXkgKyBDT1VOVF0rKztcbiAgICAgICAgICAgIHN0ZXBUYWtlbiA9IHRydWU7XG4gICAgICAgICAgICB0aGlzW05FWFRfU1RFUFNba2V5XV0oKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKCFzdGVwVGFrZW4pIHtcbiAgICAgICAgdGhpcy5jb21wbGV0ZSgpO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICBUd2Vlbi5wcm90b3R5cGUuZmxpcFZhbHVlcyA9IGZ1bmN0aW9uIGZsaXBWYWx1ZXMoKSB7XG4gICAgdmFyIHZhbHVlcyA9IHRoaXMudmFsdWVzO1xuXG4gICAgdGhpcy5lbGFwc2VkID0gdGhpcy5kdXJhdGlvbiAtIHRoaXMuZWxhcHNlZDtcblxuICAgIGZvciAodmFyIGtleSBpbiB2YWx1ZXMpIHtcbiAgICAgIGlmICh2YWx1ZXMuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICB2YXIgdmFsdWUgPSB2YWx1ZXNba2V5XTtcbiAgICAgICAgdmFyIF9yZWYgPSBbdmFsdWUuZnJvbSwgdmFsdWUudG9dO1xuICAgICAgICB2YWx1ZS50byA9IF9yZWZbMF07XG4gICAgICAgIHZhbHVlLmZyb20gPSBfcmVmWzFdO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIFR3ZWVuLnByb3RvdHlwZS5yZXZlcnNlID0gZnVuY3Rpb24gcmV2ZXJzZSgpIHtcbiAgICB0aGlzLnBsYXlEaXJlY3Rpb24gKj0gLTE7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgVHdlZW4ucHJvdG90eXBlLnJlc3RhcnQgPSBmdW5jdGlvbiByZXN0YXJ0KCkge1xuICAgIHRoaXMuZWxhcHNlZCA9IHRoaXMucGxheURpcmVjdGlvbiA9PT0gMSA/IDAgOiB0aGlzLmR1cmF0aW9uO1xuICAgIHRoaXMuc3RhcnRlZCA9ICgwLCBfdXRpbHMuY3VycmVudFRpbWUpKCk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgVHdlZW4ucHJvdG90eXBlLnNlZWsgPSBmdW5jdGlvbiBzZWVrKHByb2dyZXNzKSB7XG4gICAgdGhpcy5zZWVrVGltZSh0aGlzLmR1cmF0aW9uICogcHJvZ3Jlc3MpO1xuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIFR3ZWVuLnByb3RvdHlwZS5zZWVrVGltZSA9IGZ1bmN0aW9uIHNlZWtUaW1lKGVsYXBzZWQpIHtcbiAgICBpZiAoIXRoaXMuaXNBY3RpdmUgfHwgdGhpcy5pc1NjcnViYmluZykge1xuICAgICAgdGhpcy5vbmNlKCk7XG4gICAgICB0aGlzLmlzU2NydWJiaW5nID0gdHJ1ZTtcbiAgICB9XG5cbiAgICB0aGlzLmVsYXBzZWQgPSBlbGFwc2VkO1xuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgcmV0dXJuIFR3ZWVuO1xufShfQWN0aW9uMy5kZWZhdWx0KTtcblxuVHdlZW4ucHJvdG90eXBlLmRlZmF1bHRWYWx1ZVByb3AgPSAndG8nO1xuVHdlZW4ucHJvdG90eXBlLmRlZmF1bHRWYWx1ZSA9IF9BY3Rpb24zLmRlZmF1bHQuZXh0ZW5kRGVmYXVsdFZhbHVlKHtcbiAgZGVsYXk6IDAsXG4gIGR1cmF0aW9uOiAzMDAsXG4gIGVhc2U6IF9wcmVzZXRFYXNpbmcyLmRlZmF1bHQuZWFzZU91dCxcbiAgZWxhcHNlZDogMCxcbiAgc3RlcHM6IDAsXG4gIHRvOiAwLFxuICByb3VuZDogZmFsc2Vcbn0pO1xuVHdlZW4ucHJvdG90eXBlLmRlZmF1bHRQcm9wcyA9IF9BY3Rpb24zLmRlZmF1bHQuZXh0ZW5kRGVmYXVsdFByb3BzKHtcbiAgYmxlbmQ6IGZhbHNlLFxuICBkaWxhdGU6IDEsXG4gIGxvb3A6IDAsXG4gIHlveW86IDAsXG4gIGZsaXA6IDAsXG4gIGxvb3BDb3VudDogMCxcbiAgeW95b0NvdW50OiAwLFxuICBmbGlwQ291bnQ6IDAsXG4gIHBsYXlEaXJlY3Rpb246IDEsXG4gIGlzU2NydWJiaW5nOiBmYWxzZSxcbiAgZW5kZWQ6IGZhbHNlLFxuICBlbGFwc2VkOiAwXG59KTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gVHdlZW47XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5OeVl5OWhZM1JwYjI1ekwxUjNaV1Z1TG1weklsMHNJbTVoYldWeklqcGJYU3dpYldGd2NHbHVaM01pT2lJN096czdRVUZCUVRzN096dEJRVU5CT3pzN08wRkJRMEU3TzBGQlEwRTdPenM3T3pzN096czdRVUZGUVN4SlFVRk5MRkZCUVZFc1QwRkJaRHRCUVVOQkxFbEJRVTBzWVVGQllUdEJRVU5xUWl4UlFVRk5MRk5CUkZjN1FVRkZha0lzVVVGQlRTeFRRVVpYTzBGQlIycENMRkZCUVUwN1FVRklWeXhEUVVGdVFqczdTVUZOVFN4TE96czdPenM3T3pzN2EwSkJRMG9zU3l4dlFrRkJVVHRCUVVOT0xGTkJRVXNzVDBGQlRDeEhRVUZsTEVOQlFXWTdRVUZEUVN4VFFVRkxMRk5CUVV3c1IwRkJhVUlzUzBGQlN5eFRRVUZNTEVkQlFXbENMRXRCUVVzc1UwRkJUQ3hIUVVGcFFpeERRVUZ1UkR0QlFVTkJMRk5CUVVzc1YwRkJUQ3hIUVVGdFFpeExRVUZ1UWpzN08wRkJSMEVzVVVGQlNTeERRVUZETEV0QlFVc3NTVUZCVml4RlFVRm5RanRCUVVOa0xGZEJRVXNzU1VGQlNTeEpRVUZKTEVOQlFXSXNSVUZCWjBJc1NVRkJTU3hMUVVGTExGbEJRWHBDTEVWQlFYVkRMRWRCUVhaRExFVkJRVFJETzBGQlF6RkRMRmxCUVUwc1RVRkJUU3hMUVVGTExGTkJRVXdzUTBGQlpTeERRVUZtTEVOQlFWbzdRVUZEUVN4WlFVRk5MRkZCUVZFc1MwRkJTeXhOUVVGTUxFTkJRVmtzUjBGQldpeERRVUZrTzBGQlEwRXNXVUZCU1N4TlFVRk5MRWxCUVU0c1MwRkJaU3hUUVVGdVFpeEZRVUU0UWp0QlFVTTFRaXhuUWtGQlRTeEpRVUZPTEVkQlFXRXNRMEZCWWp0QlFVTkVPMEZCUTBZN1FVRkRSanM3UVVGRlJDeFhRVUZQTEd0Q1FVRk5MRXRCUVU0c1YwRkJVRHRCUVVORUxFYzdPMnRDUVVWRUxGRXNjVUpCUVZNc1N5eEZRVUZQTEZVc1JVRkJXU3hQTEVWQlFWTTdRVUZEYmtNc1VVRkJUU3hwUWtGQmEwSXNTMEZCU3l4aFFVRk1MRXRCUVhWQ0xFTkJRWGhDTEVkQlFUWkNMRU5CUVRkQ0xFZEJRV2xETEVOQlFYaEVPenRCUVVWQkxGTkJRVXNzUzBGQlRDeEhRVUZoTEVsQlFXSTdPMEZCUlVFc1VVRkJTU3hEUVVGRExFdEJRVXNzVjBGQlZpeEZRVUYxUWp0QlFVTnlRaXhYUVVGTExFOUJRVXdzU1VGQmFVSXNWVUZCVlN4TFFVRkxMRTFCUVdoQ0xFZEJRVEJDTEV0QlFVc3NZVUZCTDBNN1FVRkRSRHM3UVVGRlJDeFRRVUZMTEVsQlFVa3NTVUZCU1N4RFFVRmlMRVZCUVdkQ0xFbEJRVWtzUzBGQlN5eFpRVUY2UWl4RlFVRjFReXhIUVVGMlF5eEZRVUUwUXp0QlFVTXhReXhWUVVGTkxFMUJRVTBzUzBGQlN5eFRRVUZNTEVOQlFXVXNRMEZCWml4RFFVRmFPMEZCUTBFc1ZVRkJUU3hSUVVGUkxFdEJRVXNzVFVGQlRDeERRVUZaTEVkQlFWb3NRMEZCWkRzN1FVRkZRU3hWUVVGSkxGZEJRVmNzYjBKQlFWTXNaME5CUVhGQ0xFdEJRVXNzVDBGQlRDeEhRVUZsTEUxQlFVMHNTMEZCTVVNc1JVRkJhVVFzUTBGQmFrUXNSVUZCYjBRc1RVRkJUU3hSUVVFeFJDeERRVUZVTEVWQlFUaEZMRU5CUVRsRkxFVkJRV2xHTEVOQlFXcEdMRU5CUVdZN096dEJRVWRCTEZWQlFVa3NZVUZCWVN4alFVRnFRaXhGUVVGcFF6dEJRVU12UWl4aFFVRkxMRXRCUVV3c1IwRkJZU3hMUVVGaU8wRkJRMFE3T3p0QlFVZEVMRlZCUVVrc1RVRkJUU3hMUVVGV0xFVkJRV2xDTzBGQlEyWXNiVUpCUVZjc2QwSkJRV0VzVVVGQllpeEZRVUYxUWl4TlFVRk5MRXRCUVRkQ0xFTkJRVmc3UVVGRFJEczdPMEZCUjBRc1dVRkJUU3hQUVVGT0xFZEJRV2RDTEdkQ1FVRkxMRkZCUVV3c1JVRkJaU3hOUVVGTkxFbEJRWEpDTEVWQlFUSkNMRTFCUVUwc1JVRkJha01zUlVGQmNVTXNUVUZCVFN4SlFVRXpReXhEUVVGb1FqdEJRVU5FTzBGQlEwWXNSenM3YTBKQlJVUXNWU3g1UWtGQllUdEJRVU5ZTEZGQlFVa3NTMEZCU3l4TFFVRlVMRVZCUVdkQ08wRkJRMlFzVlVGQlNTeFpRVUZaTEV0QlFXaENPenRCUVVWQkxGZEJRVXNzU1VGQlNTeEhRVUZVTEVsQlFXZENMRlZCUVdoQ0xFVkJRVFJDTzBGQlF6RkNMRmxCUVVrc1YwRkJWeXhqUVVGWUxFTkJRVEJDTEVkQlFURkNMRU5CUVVvc1JVRkJiME03UVVGRGJFTXNZMEZCU1N4clFrRkJUU3hMUVVGTExFZEJRVXdzUTBGQlRpeExRVUZ2UWl4TFFVRkxMRWRCUVV3c1NVRkJXU3hMUVVGTExFMUJRVTBzUzBGQldDeERRVUZ3UXl4RlFVRjFSRHRCUVVOeVJDeHBRa0ZCU3l4TlFVRk5MRXRCUVZnN1FVRkRRU3gzUWtGQldTeEpRVUZhTzBGQlEwRXNhVUpCUVVzc1YwRkJWeXhIUVVGWUxFTkJRVXc3UVVGRFJEdEJRVU5HTzBGQlEwWTdPMEZCUlVRc1ZVRkJTU3hEUVVGRExGTkJRVXdzUlVGQlowSTdRVUZEWkN4aFFVRkxMRkZCUVV3N1FVRkRSRHRCUVVOR08wRkJRMFlzUnpzN2EwSkJSVVFzVlN4NVFrRkJZVHRCUVVOWUxGRkJRVTBzVTBGQlV5eExRVUZMTEUxQlFYQkNPenRCUVVWQkxGTkJRVXNzVDBGQlRDeEhRVUZsTEV0QlFVc3NVVUZCVEN4SFFVRm5RaXhMUVVGTExFOUJRWEJET3p0QlFVVkJMRk5CUVVzc1NVRkJTU3hIUVVGVUxFbEJRV2RDTEUxQlFXaENMRVZCUVhkQ08wRkJRM1JDTEZWQlFVa3NUMEZCVHl4alFVRlFMRU5CUVhOQ0xFZEJRWFJDTEVOQlFVb3NSVUZCWjBNN1FVRkRPVUlzV1VGQlRTeFJRVUZSTEU5QlFVOHNSMEZCVUN4RFFVRmtPMEZCUkRoQ0xHMUNRVVZNTEVOQlFVTXNUVUZCVFN4SlFVRlFMRVZCUVdFc1RVRkJUU3hGUVVGdVFpeERRVVpMTzBGQlJUZENMR05CUVUwc1JVRkdkVUk3UVVGRmJrSXNZMEZCVFN4SlFVWmhPMEZCUnk5Q08wRkJRMFk3TzBGQlJVUXNWMEZCVHl4SlFVRlFPMEZCUTBRc1J6czdhMEpCUlVRc1R5eHpRa0ZCVlR0QlFVTlNMRk5CUVVzc1lVRkJUQ3hKUVVGelFpeERRVUZETEVOQlFYWkNPMEZCUTBFc1YwRkJUeXhKUVVGUU8wRkJRMFFzUnpzN2EwSkJSVVFzVHl4elFrRkJWVHRCUVVOU0xGTkJRVXNzVDBGQlRDeEhRVUZuUWl4TFFVRkxMR0ZCUVV3c1MwRkJkVUlzUTBGQmVFSXNSMEZCTmtJc1EwRkJOMElzUjBGQmFVTXNTMEZCU3l4UlFVRnlSRHRCUVVOQkxGTkJRVXNzVDBGQlRDeEhRVUZsTEhsQ1FVRm1PMEZCUTBFc1YwRkJUeXhKUVVGUU8wRkJRMFFzUnpzN2EwSkJSVVFzU1N4cFFrRkJTeXhSTEVWQlFWVTdRVUZEWWl4VFFVRkxMRkZCUVV3c1EwRkJZeXhMUVVGTExGRkJRVXdzUjBGQlowSXNVVUZCT1VJN1FVRkRRU3hYUVVGUExFbEJRVkE3UVVGRFJDeEhPenRyUWtGRlJDeFJMSEZDUVVGVExFOHNSVUZCVXp0QlFVTm9RaXhSUVVGSkxFTkJRVU1zUzBGQlN5eFJRVUZPTEVsQlFXdENMRXRCUVVzc1YwRkJNMElzUlVGQmQwTTdRVUZEZEVNc1YwRkJTeXhKUVVGTU8wRkJRMEVzVjBGQlN5eFhRVUZNTEVkQlFXMUNMRWxCUVc1Q08wRkJRMFE3TzBGQlJVUXNVMEZCU3l4UFFVRk1MRWRCUVdVc1QwRkJaanM3UVVGRlFTeFhRVUZQTEVsQlFWQTdRVUZEUkN4SE96czdPenRCUVVkSUxFMUJRVTBzVTBGQlRpeERRVUZuUWl4blFrRkJhRUlzUjBGQmJVTXNTVUZCYmtNN1FVRkRRU3hOUVVGTkxGTkJRVTRzUTBGQlowSXNXVUZCYUVJc1IwRkJLMElzYVVKQlFVOHNhMEpCUVZBc1EwRkJNRUk3UVVGRGRrUXNVMEZCVHl4RFFVUm5SRHRCUVVWMlJDeFpRVUZWTEVkQlJqWkRPMEZCUjNaRUxGRkJRVTBzZFVKQlFVOHNUMEZJTUVNN1FVRkpka1FzVjBGQlV5eERRVW80UXp0QlFVdDJSQ3hUUVVGUExFTkJUR2RFTzBGQlRYWkVMRTFCUVVrc1EwRk9iVVE3UVVGUGRrUXNVMEZCVHp0QlFWQm5SQ3hEUVVFeFFpeERRVUV2UWp0QlFWTkJMRTFCUVUwc1UwRkJUaXhEUVVGblFpeFpRVUZvUWl4SFFVRXJRaXhwUWtGQlR5eHJRa0ZCVUN4RFFVRXdRanRCUVVOMlJDeFRRVUZQTEV0QlJHZEVPMEZCUlhaRUxGVkJRVkVzUTBGR0swTTdRVUZIZGtRc1VVRkJUU3hEUVVocFJEdEJRVWwyUkN4UlFVRk5MRU5CU21sRU8wRkJTM1pFTEZGQlFVMHNRMEZNYVVRN1FVRk5ka1FzWVVGQlZ5eERRVTQwUXp0QlFVOTJSQ3hoUVVGWExFTkJVRFJETzBGQlVYWkVMR0ZCUVZjc1EwRlNORU03UVVGVGRrUXNhVUpCUVdVc1EwRlVkME03UVVGVmRrUXNaVUZCWVN4TFFWWXdRenRCUVZkMlJDeFRRVUZQTEV0QldHZEVPMEZCV1haRUxGZEJRVk03UVVGYU9FTXNRMEZCTVVJc1EwRkJMMEk3TzJ0Q1FXVmxMRXNpTENKbWFXeGxJam9pVkhkbFpXNHVhbk1pTENKemIzVnlZMlZTYjI5MElqb2lMMVZ6WlhKekwyMWhkSFJ3WlhKeWVTOVRhWFJsY3k5d2IzQnRiM1JwYjI0aUxDSnpiM1Z5WTJWelEyOXVkR1Z1ZENJNld5SnBiWEJ2Y25RZ1FXTjBhVzl1SUdaeWIyMGdKeTR2UVdOMGFXOXVKenRjYm1sdGNHOXlkQ0JsWVhOcGJtY2dabkp2YlNBbkxpOWxZWE5wYm1jdmNISmxjMlYwTFdWaGMybHVaeWM3WEc1cGJYQnZjblFnZXlCamRYSnlaVzUwVkdsdFpTd2dhWE5PZFcwZ2ZTQm1jbTl0SUNjdUxpOXBibU12ZFhScGJITW5PMXh1YVcxd2IzSjBJSHNnWldGelpTd2djbVZ6ZEhKcFkzUXNJR2RsZEZCeWIyZHlaWE56Um5KdmJWWmhiSFZsTENCemRHVndVSEp2WjNKbGMzTWdmU0JtY205dElDY3VMaTlwYm1NdlkyRnNZeWM3WEc1Y2JtTnZibk4wSUVOUFZVNVVJRDBnSjBOdmRXNTBKenRjYm1OdmJuTjBJRTVGV0ZSZlUxUkZVRk1nUFNCN1hHNGdJR3h2YjNBNklDZHlaWE4wWVhKMEp5eGNiaUFnZVc5NWJ6b2dKM0psZG1WeWMyVW5MRnh1SUNCbWJHbHdPaUFuWm14cGNGWmhiSFZsY3lkY2JuMDdYRzVjYm1Oc1lYTnpJRlIzWldWdUlHVjRkR1Z1WkhNZ1FXTjBhVzl1SUh0Y2JpQWdjM1JoY25Rb0tTQjdYRzRnSUNBZ2RHaHBjeTVsYkdGd2MyVmtJRDBnTUR0Y2JpQWdJQ0IwYUdsekxtWnNhWEJEYjNWdWRDQTlJSFJvYVhNdWVXOTViME52ZFc1MElEMGdkR2hwY3k1c2IyOXdRMjkxYm5RZ1BTQXdPMXh1SUNBZ0lIUm9hWE11YVhOVFkzSjFZbUpwYm1jZ1BTQm1ZV3h6WlR0Y2JseHVJQ0FnSUM4dklGTmxkQ0JrWldaaGRXeDBJR0JtY205dFlDQnBaaUJ1YjI1bElITmxkRnh1SUNBZ0lHbG1JQ2doZEdocGN5NW1iRzkzS1NCN1hHNGdJQ0FnSUNCbWIzSWdLR3hsZENCcElEMGdNRHNnYVNBOElIUm9hWE11Ym5WdFZtRnNkV1ZMWlhsek95QnBLeXNwSUh0Y2JpQWdJQ0FnSUNBZ1kyOXVjM1FnYTJWNUlEMGdkR2hwY3k1MllXeDFaVXRsZVhOYmFWMDdYRzRnSUNBZ0lDQWdJR052Ym5OMElIWmhiSFZsSUQwZ2RHaHBjeTUyWVd4MVpYTmJhMlY1WFR0Y2JpQWdJQ0FnSUNBZ2FXWWdLSFpoYkhWbExtWnliMjBnUFQwOUlIVnVaR1ZtYVc1bFpDa2dlMXh1SUNBZ0lDQWdJQ0FnSUhaaGJIVmxMbVp5YjIwZ1BTQXdPMXh1SUNBZ0lDQWdJQ0I5WEc0Z0lDQWdJQ0I5WEc0Z0lDQWdmVnh1WEc0Z0lDQWdjbVYwZFhKdUlITjFjR1Z5TG5OMFlYSjBLQ2s3WEc0Z0lIMWNibHh1SUNCdmJsVndaR0YwWlNoMGQyVmxiaXdnWm5KaGJXVlRkR0Z0Y0N3Z1pXeGhjSE5sWkNrZ2UxeHVJQ0FnSUdOdmJuTjBJSEJ5YjJkeVpYTnpWR0Z5WjJWMElEMGdLSFJvYVhNdWNHeGhlVVJwY21WamRHbHZiaUE5UFQwZ01Ta2dQeUF4SURvZ01EdGNibHh1SUNBZ0lIUm9hWE11Wlc1a1pXUWdQU0IwY25WbE8xeHVYRzRnSUNBZ2FXWWdLQ0YwYUdsekxtbHpVMk55ZFdKaWFXNW5LU0I3WEc0Z0lDQWdJQ0IwYUdsekxtVnNZWEJ6WldRZ0t6MGdLR1ZzWVhCelpXUWdLaUIwYUdsekxtUnBiR0YwWlNrZ0tpQjBhR2x6TG5Cc1lYbEVhWEpsWTNScGIyNDdYRzRnSUNBZ2ZWeHVYRzRnSUNBZ1ptOXlJQ2hzWlhRZ2FTQTlJREE3SUdrZ1BDQjBhR2x6TG01MWJWWmhiSFZsUzJWNWN6c2dhU3NyS1NCN1hHNGdJQ0FnSUNCamIyNXpkQ0JyWlhrZ1BTQjBhR2x6TG5aaGJIVmxTMlY1YzF0cFhUdGNiaUFnSUNBZ0lHTnZibk4wSUhaaGJIVmxJRDBnZEdocGN5NTJZV3gxWlhOYmEyVjVYVHRjYmx4dUlDQWdJQ0FnYkdWMElIQnliMmR5WlhOeklEMGdjbVZ6ZEhKcFkzUW9aMlYwVUhKdlozSmxjM05HY205dFZtRnNkV1VvZEdocGN5NWxiR0Z3YzJWa0lDMGdkbUZzZFdVdVpHVnNZWGtzSURBc0lIWmhiSFZsTG1SMWNtRjBhVzl1S1N3Z01Dd2dNU2s3WEc1Y2JpQWdJQ0FnSUM4dklFMWhjbXNnVkhkbFpXNGdZWE1nVGs5VUlHVnVaR1ZrSUdsbUlITjBhV3hzSUdsdUlIQnliMmR5WlhOelhHNGdJQ0FnSUNCcFppQW9jSEp2WjNKbGMzTWdJVDA5SUhCeWIyZHlaWE56VkdGeVoyVjBLU0I3WEc0Z0lDQWdJQ0FnSUhSb2FYTXVaVzVrWldRZ1BTQm1ZV3h6WlR0Y2JpQWdJQ0FnSUgxY2JseHVJQ0FnSUNBZ0x5OGdVM1JsY0NCd2NtOW5jbVZ6Y3lCcFppQjNaU2R5WlNCemRHVndjR2x1WjF4dUlDQWdJQ0FnYVdZZ0tIWmhiSFZsTG5OMFpYQnpLU0I3WEc0Z0lDQWdJQ0FnSUhCeWIyZHlaWE56SUQwZ2MzUmxjRkJ5YjJkeVpYTnpLSEJ5YjJkeVpYTnpMQ0IyWVd4MVpTNXpkR1Z3Y3lrN1hHNGdJQ0FnSUNCOVhHNWNiaUFnSUNBZ0lDOHZJRVZoYzJVZ2NISnZaM0psYzNOY2JpQWdJQ0FnSUhaaGJIVmxMbU4xY25KbGJuUWdQU0JsWVhObEtIQnliMmR5WlhOekxDQjJZV3gxWlM1bWNtOXRMQ0IyWVd4MVpTNTBieXdnZG1Gc2RXVXVaV0Z6WlNrN1hHNGdJQ0FnZlZ4dUlDQjlYRzVjYmlBZ2IyNUdjbUZ0WlVWdVpDZ3BJSHRjYmlBZ0lDQnBaaUFvZEdocGN5NWxibVJsWkNrZ2UxeHVJQ0FnSUNBZ2JHVjBJSE4wWlhCVVlXdGxiaUE5SUdaaGJITmxPMXh1WEc0Z0lDQWdJQ0JtYjNJZ0tHeGxkQ0JyWlhrZ2FXNGdUa1ZZVkY5VFZFVlFVeWtnZTF4dUlDQWdJQ0FnSUNCcFppQW9Ua1ZZVkY5VFZFVlFVeTVvWVhOUGQyNVFjbTl3WlhKMGVTaHJaWGtwS1NCN1hHNGdJQ0FnSUNBZ0lDQWdhV1lnS0dselRuVnRLSFJvYVhOYmEyVjVYU2tnSmlZZ2RHaHBjMXRyWlhsZElENGdkR2hwYzF0clpYa2dLeUJEVDFWT1ZGMHBJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lIUm9hWE5iYTJWNUlDc2dRMDlWVGxSZEt5czdYRzRnSUNBZ0lDQWdJQ0FnSUNCemRHVndWR0ZyWlc0Z1BTQjBjblZsTzF4dUlDQWdJQ0FnSUNBZ0lDQWdkR2hwYzF0T1JWaFVYMU5VUlZCVFcydGxlVjFkS0NrN1hHNGdJQ0FnSUNBZ0lDQWdmVnh1SUNBZ0lDQWdJQ0I5WEc0Z0lDQWdJQ0I5WEc1Y2JpQWdJQ0FnSUdsbUlDZ2hjM1JsY0ZSaGEyVnVLU0I3WEc0Z0lDQWdJQ0FnSUhSb2FYTXVZMjl0Y0d4bGRHVW9LVHRjYmlBZ0lDQWdJSDFjYmlBZ0lDQjlYRzRnSUgxY2JseHVJQ0JtYkdsd1ZtRnNkV1Z6S0NrZ2UxeHVJQ0FnSUdOdmJuTjBJSFpoYkhWbGN5QTlJSFJvYVhNdWRtRnNkV1Z6TzF4dVhHNGdJQ0FnZEdocGN5NWxiR0Z3YzJWa0lEMGdkR2hwY3k1a2RYSmhkR2x2YmlBdElIUm9hWE11Wld4aGNITmxaRHRjYmx4dUlDQWdJR1p2Y2lBb2JHVjBJR3RsZVNCcGJpQjJZV3gxWlhNcElIdGNiaUFnSUNBZ0lHbG1JQ2gyWVd4MVpYTXVhR0Z6VDNkdVVISnZjR1Z5ZEhrb2EyVjVLU2tnZTF4dUlDQWdJQ0FnSUNCamIyNXpkQ0IyWVd4MVpTQTlJSFpoYkhWbGMxdHJaWGxkTzF4dUlDQWdJQ0FnSUNCYmRtRnNkV1V1ZEc4c0lIWmhiSFZsTG1aeWIyMWRJRDBnVzNaaGJIVmxMbVp5YjIwc0lIWmhiSFZsTG5SdlhUdGNiaUFnSUNBZ0lIMWNiaUFnSUNCOVhHNWNiaUFnSUNCeVpYUjFjbTRnZEdocGN6dGNiaUFnZlZ4dVhHNGdJSEpsZG1WeWMyVW9LU0I3WEc0Z0lDQWdkR2hwY3k1d2JHRjVSR2x5WldOMGFXOXVJQ285SUMweE8xeHVJQ0FnSUhKbGRIVnliaUIwYUdsek8xeHVJQ0I5WEc1Y2JpQWdjbVZ6ZEdGeWRDZ3BJSHRjYmlBZ0lDQjBhR2x6TG1Wc1lYQnpaV1FnUFNBb2RHaHBjeTV3YkdGNVJHbHlaV04wYVc5dUlEMDlQU0F4S1NBL0lEQWdPaUIwYUdsekxtUjFjbUYwYVc5dU8xeHVJQ0FnSUhSb2FYTXVjM1JoY25SbFpDQTlJR04xY25KbGJuUlVhVzFsS0NrN1hHNGdJQ0FnY21WMGRYSnVJSFJvYVhNN1hHNGdJSDFjYmx4dUlDQnpaV1ZyS0hCeWIyZHlaWE56S1NCN1hHNGdJQ0FnZEdocGN5NXpaV1ZyVkdsdFpTaDBhR2x6TG1SMWNtRjBhVzl1SUNvZ2NISnZaM0psYzNNcE8xeHVJQ0FnSUhKbGRIVnliaUIwYUdsek8xeHVJQ0I5WEc1Y2JpQWdjMlZsYTFScGJXVW9aV3hoY0hObFpDa2dlMXh1SUNBZ0lHbG1JQ2doZEdocGN5NXBjMEZqZEdsMlpTQjhmQ0IwYUdsekxtbHpVMk55ZFdKaWFXNW5LU0I3WEc0Z0lDQWdJQ0IwYUdsekxtOXVZMlVvS1R0Y2JpQWdJQ0FnSUhSb2FYTXVhWE5UWTNKMVltSnBibWNnUFNCMGNuVmxPMXh1SUNBZ0lIMWNibHh1SUNBZ0lIUm9hWE11Wld4aGNITmxaQ0E5SUdWc1lYQnpaV1E3WEc1Y2JpQWdJQ0J5WlhSMWNtNGdkR2hwY3p0Y2JpQWdmVnh1ZlZ4dVhHNVVkMlZsYmk1d2NtOTBiM1I1Y0dVdVpHVm1ZWFZzZEZaaGJIVmxVSEp2Y0NBOUlDZDBieWM3WEc1VWQyVmxiaTV3Y205MGIzUjVjR1V1WkdWbVlYVnNkRlpoYkhWbElEMGdRV04wYVc5dUxtVjRkR1Z1WkVSbFptRjFiSFJXWVd4MVpTaDdYRzRnSUdSbGJHRjVPaUF3TEZ4dUlDQmtkWEpoZEdsdmJqb2dNekF3TEZ4dUlDQmxZWE5sT2lCbFlYTnBibWN1WldGelpVOTFkQ3hjYmlBZ1pXeGhjSE5sWkRvZ01DeGNiaUFnYzNSbGNITTZJREFzWEc0Z0lIUnZPaUF3TEZ4dUlDQnliM1Z1WkRvZ1ptRnNjMlZjYm4wcE8xeHVWSGRsWlc0dWNISnZkRzkwZVhCbExtUmxabUYxYkhSUWNtOXdjeUE5SUVGamRHbHZiaTVsZUhSbGJtUkVaV1poZFd4MFVISnZjSE1vZTF4dUlDQmliR1Z1WkRvZ1ptRnNjMlVzWEc0Z0lHUnBiR0YwWlRvZ01TeGNiaUFnYkc5dmNEb2dNQ3hjYmlBZ2VXOTViem9nTUN4Y2JpQWdabXhwY0RvZ01DeGNiaUFnYkc5dmNFTnZkVzUwT2lBd0xGeHVJQ0I1YjNsdlEyOTFiblE2SURBc1hHNGdJR1pzYVhCRGIzVnVkRG9nTUN4Y2JpQWdjR3hoZVVScGNtVmpkR2x2YmpvZ01TeGNiaUFnYVhOVFkzSjFZbUpwYm1jNklHWmhiSE5sTEZ4dUlDQmxibVJsWkRvZ1ptRnNjMlVzWEc0Z0lHVnNZWEJ6WldRNklEQmNibjBwTzF4dVhHNWxlSEJ2Y25RZ1pHVm1ZWFZzZENCVWQyVmxianRjYmlKZGZRPT1cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2FjdGlvbnMvVHdlZW4uanNcbiAqKiBtb2R1bGUgaWQgPSA1XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfQWN0aW9uMiA9IHJlcXVpcmUoJy4vQWN0aW9uJyk7XG5cbnZhciBfQWN0aW9uMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX0FjdGlvbjIpO1xuXG52YXIgX2NhbGMgPSByZXF1aXJlKCcuLi9pbmMvY2FsYycpO1xuXG52YXIgX3V0aWxzID0gcmVxdWlyZSgnLi4vaW5jL3V0aWxzJyk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKCFzZWxmKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gY2FsbCAmJiAodHlwZW9mIGNhbGwgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikgPyBjYWxsIDogc2VsZjsgfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb24sIG5vdCBcIiArIHR5cGVvZiBzdXBlckNsYXNzKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCBlbnVtZXJhYmxlOiBmYWxzZSwgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LnNldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKSA6IHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7IH1cblxudmFyIFBoeXNpY3MgPSBmdW5jdGlvbiAoX0FjdGlvbikge1xuICBfaW5oZXJpdHMoUGh5c2ljcywgX0FjdGlvbik7XG5cbiAgZnVuY3Rpb24gUGh5c2ljcygpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgUGh5c2ljcyk7XG5cbiAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgYXJnc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICB9XG5cbiAgICB2YXIgX3RoaXMgPSBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCBfQWN0aW9uLmNhbGwuYXBwbHkoX0FjdGlvbiwgW3RoaXNdLmNvbmNhdChhcmdzKSkpO1xuXG4gICAgX3RoaXMuaW5hY3RpdmVGcmFtZXMgPSAwO1xuICAgIF90aGlzLmNhbGN1bGF0ZXNWZWxvY2l0eSA9IHRydWU7XG4gICAgcmV0dXJuIF90aGlzO1xuICB9XG5cbiAgUGh5c2ljcy5wcm90b3R5cGUub25VcGRhdGUgPSBmdW5jdGlvbiBvblVwZGF0ZShwaHlzaWNzLCBmcmFtZVN0YW1wLCBlbGFwc2VkKSB7XG4gICAgdGhpcy5oYXNDaGFuZ2VkID0gZmFsc2U7XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubnVtVmFsdWVLZXlzOyBpKyspIHtcbiAgICAgIHZhciBrZXkgPSB0aGlzLnZhbHVlS2V5c1tpXTtcbiAgICAgIHZhciB2YWx1ZSA9IHRoaXMudmFsdWVzW2tleV07XG4gICAgICB2YXIgcHJldmlvdXNWYWx1ZSA9IHZhbHVlLnByZXY7XG5cbiAgICAgIC8vIEFwcGx5IGFjY2VsZXJhdGlvblxuICAgICAgdmFsdWUudmVsb2NpdHkgKz0gKDAsIF9jYWxjLnNwZWVkUGVyRnJhbWUpKHZhbHVlLmFjY2VsZXJhdGlvbiwgZWxhcHNlZCk7XG5cbiAgICAgIC8vIEFwcGx5IGZyaWN0aW9uXG4gICAgICB2YWx1ZS52ZWxvY2l0eSAqPSBNYXRoLnBvdygxIC0gdmFsdWUuZnJpY3Rpb24sIGVsYXBzZWQgLyAxMDApO1xuXG4gICAgICAvLyBBcHBseSBzcHJpbmdcbiAgICAgIGlmICh2YWx1ZS5zcHJpbmcgJiYgKDAsIF91dGlscy5pc051bSkodmFsdWUudG8pKSB7XG4gICAgICAgIHZhciBkaXN0YW5jZVRvVGFyZ2V0ID0gdmFsdWUudG8gLSB2YWx1ZS5jdXJyZW50O1xuICAgICAgICB2YWx1ZS52ZWxvY2l0eSArPSBkaXN0YW5jZVRvVGFyZ2V0ICogKDAsIF9jYWxjLnNwZWVkUGVyRnJhbWUpKHZhbHVlLnNwcmluZywgZWxhcHNlZCk7XG4gICAgICB9XG5cbiAgICAgIC8vIEFwcGx5IGxhdGVzdCB2ZWxvY2l0eVxuICAgICAgdmFsdWUuY3VycmVudCArPSAoMCwgX2NhbGMuc3BlZWRQZXJGcmFtZSkodmFsdWUudmVsb2NpdHksIGVsYXBzZWQpO1xuXG4gICAgICAvLyBEZXRlY3QgYm91bmNlXG4gICAgICBpZiAodmFsdWUubWluICE9PSB1bmRlZmluZWQgJiYgdmFsdWUuY3VycmVudCA8IHZhbHVlLm1pbiB8fCB2YWx1ZS5tYXggIT09IHVuZGVmaW5lZCAmJiB2YWx1ZS5jdXJyZW50ID4gdmFsdWUubWF4KSB7XG4gICAgICAgIHZhbHVlLnZlbG9jaXR5ICo9IC12YWx1ZS5ib3VuY2U7XG4gICAgICB9XG5cbiAgICAgIC8vIENoZWNrIGlmIHZhbHVlIGhhcyBjaGFuZ2VkXG4gICAgICBpZiAodmFsdWUuY3VycmVudCAhPT0gcHJldmlvdXNWYWx1ZSB8fCBNYXRoLmFicyh2YWx1ZS52ZWxvY2l0eSkgPj0gdmFsdWUuc3RvcFNwZWVkKSB7XG4gICAgICAgIHRoaXMuaGFzQ2hhbmdlZCA9IHRydWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh2YWx1ZS5zcHJpbmcgJiYgIXRoaXMuaGFzQ2hhbmdlZCkge1xuICAgICAgICB2YWx1ZS5jdXJyZW50ID0gdmFsdWUudG87XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIFBoeXNpY3MucHJvdG90eXBlLm9uRnJhbWVFbmQgPSBmdW5jdGlvbiBvbkZyYW1lRW5kKCkge1xuICAgIGlmICh0aGlzLm1heEluYWN0aXZlRnJhbWVzICE9PSBJbmZpbml0eSkge1xuICAgICAgdGhpcy5pbmFjdGl2ZUZyYW1lcyA9IHRoaXMuaGFzQ2hhbmdlZCA/IDEgOiB0aGlzLmluYWN0aXZlRnJhbWVzICsgMTtcblxuICAgICAgaWYgKHRoaXMuaW5hY3RpdmVGcmFtZXMgPj0gdGhpcy5tYXhJbmFjdGl2ZUZyYW1lcykge1xuICAgICAgICB0aGlzLmNvbXBsZXRlKCk7XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBQaHlzaWNzO1xufShfQWN0aW9uMy5kZWZhdWx0KTtcblxuUGh5c2ljcy5wcm90b3R5cGUuZGVmYXVsdFZhbHVlUHJvcCA9ICd2ZWxvY2l0eSc7XG5QaHlzaWNzLnByb3RvdHlwZS5kZWZhdWx0VmFsdWUgPSBfQWN0aW9uMy5kZWZhdWx0LmV4dGVuZERlZmF1bHRWYWx1ZSh7XG4gIGFjY2VsZXJhdGlvbjogMCwgLy8gW251bWJlcl06IEFjY2VsZXJhdGlvbiB0byBhcHBseSB0byB2YWx1ZSwgaW4gdW5pdHMgcGVyIHNlY29uZFxuICBib3VuY2U6IDAsIC8vIFtudW1iZXJdOiBGYWN0b3IgdG8gbXVsdGlwbHkgdmVsb2NpdHkgYnkgb24gYm91bmNlXG4gIHNwcmluZzogMCwgLy8gW251bWJlcl06IFNwcmluZyBzdHJlbmd0aCBkdXJpbmcgJ3N0cmluZydcbiAgc3RvcFNwZWVkOiAwLjAwMSwgLy8gW251bWJlcl06IFN0b3Agc2ltdWxhdGlvbiB1bmRlciB0aGlzIHNwZWVkXG4gIGZyaWN0aW9uOiAwIC8vIFtudW1iZXJdOiBGcmljdGlvbiB0byBhcHBseSBwZXIgZnJhbWUsIDAtMVxufSk7XG5QaHlzaWNzLnByb3RvdHlwZS5kZWZhdWx0UHJvcHMgPSBfQWN0aW9uMy5kZWZhdWx0LmV4dGVuZERlZmF1bHRQcm9wcyh7XG4gIG1heEluYWN0aXZlRnJhbWVzOiAzXG59KTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gUGh5c2ljcztcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbk55WXk5aFkzUnBiMjV6TDFCb2VYTnBZM011YW5NaVhTd2libUZ0WlhNaU9sdGRMQ0p0WVhCd2FXNW5jeUk2SWpzN096dEJRVUZCT3pzN08wRkJRMEU3TzBGQlEwRTdPenM3T3pzN096czdTVUZGVFN4UE96czdRVUZEU2l4eFFrRkJjVUk3UVVGQlFUczdRVUZCUVN4elEwRkJUaXhKUVVGTk8wRkJRVTRzVlVGQlRUdEJRVUZCT3p0QlFVRkJMR2xFUVVOdVFpd3dRMEZCVXl4SlFVRlVMRVZCUkcxQ096dEJRVVZ1UWl4VlFVRkxMR05CUVV3c1IwRkJjMElzUTBGQmRFSTdRVUZEUVN4VlFVRkxMR3RDUVVGTUxFZEJRVEJDTEVsQlFURkNPMEZCU0cxQ08wRkJTWEJDT3p0dlFrRkZSQ3hSTEhGQ1FVRlRMRThzUlVGQlV5eFZMRVZCUVZrc1R5eEZRVUZUTzBGQlEzSkRMRk5CUVVzc1ZVRkJUQ3hIUVVGclFpeExRVUZzUWpzN1FVRkZRU3hUUVVGTExFbEJRVWtzU1VGQlNTeERRVUZpTEVWQlFXZENMRWxCUVVrc1MwRkJTeXhaUVVGNlFpeEZRVUYxUXl4SFFVRjJReXhGUVVFMFF6dEJRVU14UXl4VlFVRk5MRTFCUVUwc1MwRkJTeXhUUVVGTUxFTkJRV1VzUTBGQlppeERRVUZhTzBGQlEwRXNWVUZCVFN4UlFVRlJMRXRCUVVzc1RVRkJUQ3hEUVVGWkxFZEJRVm9zUTBGQlpEdEJRVU5CTEZWQlFVMHNaMEpCUVdkQ0xFMUJRVTBzU1VGQk5VSTdPenRCUVVkQkxGbEJRVTBzVVVGQlRpeEpRVUZyUWl4NVFrRkJZeXhOUVVGTkxGbEJRWEJDTEVWQlFXdERMRTlCUVd4RExFTkJRV3hDT3pzN1FVRkhRU3haUVVGTkxGRkJRVTRzWVVGQmJVSXNTVUZCU1N4TlFVRk5MRkZCUVRkQ0xFVkJRVEpETEZWQlFWVXNSMEZCY2tRN096dEJRVWRCTEZWQlFVa3NUVUZCVFN4TlFVRk9MRWxCUVdkQ0xHdENRVUZOTEUxQlFVMHNSVUZCV2l4RFFVRndRaXhGUVVGeFF6dEJRVU51UXl4WlFVRk5MRzFDUVVGdFFpeE5RVUZOTEVWQlFVNHNSMEZCVnl4TlFVRk5MRTlCUVRGRE8wRkJRMEVzWTBGQlRTeFJRVUZPTEVsQlFXdENMRzFDUVVGdFFpeDVRa0ZCWXl4TlFVRk5MRTFCUVhCQ0xFVkJRVFJDTEU5QlFUVkNMRU5CUVhKRE8wRkJRMFE3T3p0QlFVZEVMRmxCUVUwc1QwRkJUaXhKUVVGcFFpeDVRa0ZCWXl4TlFVRk5MRkZCUVhCQ0xFVkJRVGhDTEU5QlFUbENMRU5CUVdwQ096czdRVUZIUVN4VlFVRkxMRTFCUVUwc1IwRkJUaXhMUVVGakxGTkJRV1FzU1VGQk1rSXNUVUZCVFN4UFFVRk9MRWRCUVdkQ0xFMUJRVTBzUjBGQmJFUXNTVUZCTWtRc1RVRkJUU3hIUVVGT0xFdEJRV01zVTBGQlpDeEpRVUV5UWl4TlFVRk5MRTlCUVU0c1IwRkJaMElzVFVGQlRTeEhRVUZvU0N4RlFVRnpTRHRCUVVOd1NDeGpRVUZOTEZGQlFVNHNTVUZCYTBJc1EwRkJSU3hOUVVGTkxFMUJRVEZDTzBGQlEwUTdPenRCUVVkRUxGVkJRVWtzVFVGQlRTeFBRVUZPTEV0QlFXdENMR0ZCUVd4Q0xFbEJRVzFETEV0QlFVc3NSMEZCVEN4RFFVRlRMRTFCUVUwc1VVRkJaaXhMUVVFMFFpeE5RVUZOTEZOQlFYcEZMRVZCUVc5R08wRkJRMnhHTEdGQlFVc3NWVUZCVEN4SFFVRnJRaXhKUVVGc1FqdEJRVU5FT3p0QlFVVkVMRlZCUVVrc1RVRkJUU3hOUVVGT0xFbEJRV2RDTEVOQlFVTXNTMEZCU3l4VlFVRXhRaXhGUVVGelF6dEJRVU53UXl4alFVRk5MRTlCUVU0c1IwRkJaMElzVFVGQlRTeEZRVUYwUWp0QlFVTkVPMEZCUTBZN1FVRkRSaXhIT3p0dlFrRkZSQ3hWTEhsQ1FVRmhPMEZCUTFnc1VVRkJTU3hMUVVGTExHbENRVUZNTEV0QlFUSkNMRkZCUVM5Q0xFVkJRWGxETzBGQlEzWkRMRmRCUVVzc1kwRkJUQ3hIUVVGelFpeExRVUZMTEZWQlFVd3NSMEZCYTBJc1EwRkJiRUlzUjBGQmMwSXNTMEZCU3l4alFVRk1MRWRCUVhOQ0xFTkJRV3hGT3p0QlFVVkJMRlZCUVVrc1MwRkJTeXhqUVVGTUxFbEJRWFZDTEV0QlFVc3NhVUpCUVdoRExFVkJRVzFFTzBGQlEycEVMR0ZCUVVzc1VVRkJURHRCUVVORU8wRkJRMFk3UVVGRFJpeEhPenM3T3p0QlFVZElMRkZCUVZFc1UwRkJVaXhEUVVGclFpeG5Ra0ZCYkVJc1IwRkJjVU1zVlVGQmNrTTdRVUZEUVN4UlFVRlJMRk5CUVZJc1EwRkJhMElzV1VGQmJFSXNSMEZCYVVNc2FVSkJRVThzYTBKQlFWQXNRMEZCTUVJN1FVRkRla1FzWjBKQlFXTXNRMEZFTWtNc1JUdEJRVVY2UkN4VlFVRlJMRU5CUm1sRUxFVTdRVUZIZWtRc1ZVRkJVU3hEUVVocFJDeEZPMEZCU1hwRUxHRkJRVmNzUzBGS09FTXNSVHRCUVV0NlJDeFpRVUZWTEVNN1FVRk1LME1zUTBGQk1VSXNRMEZCYWtNN1FVRlBRU3hSUVVGUkxGTkJRVklzUTBGQmEwSXNXVUZCYkVJc1IwRkJhVU1zYVVKQlFVOHNhMEpCUVZBc1EwRkJNRUk3UVVGRGVrUXNjVUpCUVcxQ08wRkJSSE5ETEVOQlFURkNMRU5CUVdwRE96dHJRa0ZKWlN4UElpd2labWxzWlNJNklsQm9lWE5wWTNNdWFuTWlMQ0p6YjNWeVkyVlNiMjkwSWpvaUwxVnpaWEp6TDIxaGRIUndaWEp5ZVM5VGFYUmxjeTl3YjNCdGIzUnBiMjRpTENKemIzVnlZMlZ6UTI5dWRHVnVkQ0k2V3lKcGJYQnZjblFnUVdOMGFXOXVJR1p5YjIwZ0p5NHZRV04wYVc5dUp6dGNibWx0Y0c5eWRDQjdJSE53WldWa1VHVnlSbkpoYldVZ2ZTQm1jbTl0SUNjdUxpOXBibU12WTJGc1l5YzdYRzVwYlhCdmNuUWdleUJwYzA1MWJTQjlJR1p5YjIwZ0p5NHVMMmx1WXk5MWRHbHNjeWM3WEc1Y2JtTnNZWE56SUZCb2VYTnBZM01nWlhoMFpXNWtjeUJCWTNScGIyNGdlMXh1SUNCamIyNXpkSEoxWTNSdmNpZ3VMaTVoY21kektTQjdYRzRnSUNBZ2MzVndaWElvTGk0dVlYSm5jeWs3WEc0Z0lDQWdkR2hwY3k1cGJtRmpkR2wyWlVaeVlXMWxjeUE5SURBN1hHNGdJQ0FnZEdocGN5NWpZV3hqZFd4aGRHVnpWbVZzYjJOcGRIa2dQU0IwY25WbE8xeHVJQ0I5WEc1Y2JpQWdiMjVWY0dSaGRHVW9jR2g1YzJsamN5d2dabkpoYldWVGRHRnRjQ3dnWld4aGNITmxaQ2tnZTF4dUlDQWdJSFJvYVhNdWFHRnpRMmhoYm1kbFpDQTlJR1poYkhObE8xeHVYRzRnSUNBZ1ptOXlJQ2hzWlhRZ2FTQTlJREE3SUdrZ1BDQjBhR2x6TG01MWJWWmhiSFZsUzJWNWN6c2dhU3NyS1NCN1hHNGdJQ0FnSUNCamIyNXpkQ0JyWlhrZ1BTQjBhR2x6TG5aaGJIVmxTMlY1YzF0cFhUdGNiaUFnSUNBZ0lHTnZibk4wSUhaaGJIVmxJRDBnZEdocGN5NTJZV3gxWlhOYmEyVjVYVHRjYmlBZ0lDQWdJR052Ym5OMElIQnlaWFpwYjNWelZtRnNkV1VnUFNCMllXeDFaUzV3Y21WMk8xeHVYRzRnSUNBZ0lDQXZMeUJCY0hCc2VTQmhZMk5sYkdWeVlYUnBiMjVjYmlBZ0lDQWdJSFpoYkhWbExuWmxiRzlqYVhSNUlDczlJSE53WldWa1VHVnlSbkpoYldVb2RtRnNkV1V1WVdOalpXeGxjbUYwYVc5dUxDQmxiR0Z3YzJWa0tUdGNibHh1SUNBZ0lDQWdMeThnUVhCd2JIa2dabkpwWTNScGIyNWNiaUFnSUNBZ0lIWmhiSFZsTG5abGJHOWphWFI1SUNvOUlDZ3hJQzBnZG1Gc2RXVXVabkpwWTNScGIyNHBJQ29xSUNobGJHRndjMlZrSUM4Z01UQXdLVHRjYmx4dUlDQWdJQ0FnTHk4Z1FYQndiSGtnYzNCeWFXNW5YRzRnSUNBZ0lDQnBaaUFvZG1Gc2RXVXVjM0J5YVc1bklDWW1JR2x6VG5WdEtIWmhiSFZsTG5SdktTa2dlMXh1SUNBZ0lDQWdJQ0JqYjI1emRDQmthWE4wWVc1alpWUnZWR0Z5WjJWMElEMGdkbUZzZFdVdWRHOGdMU0IyWVd4MVpTNWpkWEp5Wlc1ME8xeHVJQ0FnSUNBZ0lDQjJZV3gxWlM1MlpXeHZZMmwwZVNBclBTQmthWE4wWVc1alpWUnZWR0Z5WjJWMElDb2djM0JsWldSUVpYSkdjbUZ0WlNoMllXeDFaUzV6Y0hKcGJtY3NJR1ZzWVhCelpXUXBPMXh1SUNBZ0lDQWdmVnh1WEc0Z0lDQWdJQ0F2THlCQmNIQnNlU0JzWVhSbGMzUWdkbVZzYjJOcGRIbGNiaUFnSUNBZ0lIWmhiSFZsTG1OMWNuSmxiblFnS3owZ2MzQmxaV1JRWlhKR2NtRnRaU2gyWVd4MVpTNTJaV3h2WTJsMGVTd2daV3hoY0hObFpDazdYRzVjYmlBZ0lDQWdJQzh2SUVSbGRHVmpkQ0JpYjNWdVkyVmNiaUFnSUNBZ0lHbG1JQ2dvZG1Gc2RXVXViV2x1SUNFOVBTQjFibVJsWm1sdVpXUWdKaVlnZG1Gc2RXVXVZM1Z5Y21WdWRDQThJSFpoYkhWbExtMXBiaWtnZkh3Z0tIWmhiSFZsTG0xaGVDQWhQVDBnZFc1a1pXWnBibVZrSUNZbUlIWmhiSFZsTG1OMWNuSmxiblFnUGlCMllXeDFaUzV0WVhncEtTQjdYRzRnSUNBZ0lDQWdJSFpoYkhWbExuWmxiRzlqYVhSNUlDbzlJQzBnZG1Gc2RXVXVZbTkxYm1ObE8xeHVJQ0FnSUNBZ2ZWeHVJQ0FnSUNBZ1hHNGdJQ0FnSUNBdkx5QkRhR1ZqYXlCcFppQjJZV3gxWlNCb1lYTWdZMmhoYm1kbFpGeHVJQ0FnSUNBZ2FXWWdLSFpoYkhWbExtTjFjbkpsYm5RZ0lUMDlJSEJ5WlhacGIzVnpWbUZzZFdVZ2ZId2dUV0YwYUM1aFluTW9kbUZzZFdVdWRtVnNiMk5wZEhrcElENDlJSFpoYkhWbExuTjBiM0JUY0dWbFpDa2dlMXh1SUNBZ0lDQWdJQ0IwYUdsekxtaGhjME5vWVc1blpXUWdQU0IwY25WbE8xeHVJQ0FnSUNBZ2ZWeHVYRzRnSUNBZ0lDQnBaaUFvZG1Gc2RXVXVjM0J5YVc1bklDWW1JQ0YwYUdsekxtaGhjME5vWVc1blpXUXBJSHRjYmlBZ0lDQWdJQ0FnZG1Gc2RXVXVZM1Z5Y21WdWRDQTlJSFpoYkhWbExuUnZPMXh1SUNBZ0lDQWdmVnh1SUNBZ0lIMWNiaUFnZlZ4dVhHNGdJRzl1Um5KaGJXVkZibVFvS1NCN1hHNGdJQ0FnYVdZZ0tIUm9hWE11YldGNFNXNWhZM1JwZG1WR2NtRnRaWE1nSVQwOUlFbHVabWx1YVhSNUtTQjdYRzRnSUNBZ0lDQjBhR2x6TG1sdVlXTjBhWFpsUm5KaGJXVnpJRDBnZEdocGN5NW9ZWE5EYUdGdVoyVmtJRDhnTVNBNklIUm9hWE11YVc1aFkzUnBkbVZHY21GdFpYTWdLeUF4TzF4dVhHNGdJQ0FnSUNCcFppQW9kR2hwY3k1cGJtRmpkR2wyWlVaeVlXMWxjeUErUFNCMGFHbHpMbTFoZUVsdVlXTjBhWFpsUm5KaGJXVnpLU0I3WEc0Z0lDQWdJQ0FnSUhSb2FYTXVZMjl0Y0d4bGRHVW9LVHRjYmlBZ0lDQWdJSDFjYmlBZ0lDQjlYRzRnSUgxY2JuMWNibHh1VUdoNWMybGpjeTV3Y205MGIzUjVjR1V1WkdWbVlYVnNkRlpoYkhWbFVISnZjQ0E5SUNkMlpXeHZZMmwwZVNjN1hHNVFhSGx6YVdOekxuQnliM1J2ZEhsd1pTNWtaV1poZFd4MFZtRnNkV1VnUFNCQlkzUnBiMjR1WlhoMFpXNWtSR1ZtWVhWc2RGWmhiSFZsS0h0Y2JpQWdZV05qWld4bGNtRjBhVzl1T2lBd0xDQXZMeUJiYm5WdFltVnlYVG9nUVdOalpXeGxjbUYwYVc5dUlIUnZJR0Z3Y0d4NUlIUnZJSFpoYkhWbExDQnBiaUIxYm1sMGN5QndaWElnYzJWamIyNWtYRzRnSUdKdmRXNWpaVG9nTUN3Z0x5OGdXMjUxYldKbGNsMDZJRVpoWTNSdmNpQjBieUJ0ZFd4MGFYQnNlU0IyWld4dlkybDBlU0JpZVNCdmJpQmliM1Z1WTJWY2JpQWdjM0J5YVc1bk9pQXdMQ0F2THlCYmJuVnRZbVZ5WFRvZ1UzQnlhVzVuSUhOMGNtVnVaM1JvSUdSMWNtbHVaeUFuYzNSeWFXNW5KMXh1SUNCemRHOXdVM0JsWldRNklEQXVNREF4TENBdkx5QmJiblZ0WW1WeVhUb2dVM1J2Y0NCemFXMTFiR0YwYVc5dUlIVnVaR1Z5SUhSb2FYTWdjM0JsWldSY2JpQWdabkpwWTNScGIyNDZJREFnTHk4Z1cyNTFiV0psY2wwNklFWnlhV04wYVc5dUlIUnZJR0Z3Y0d4NUlIQmxjaUJtY21GdFpTd2dNQzB4WEc1OUtUdGNibEJvZVhOcFkzTXVjSEp2ZEc5MGVYQmxMbVJsWm1GMWJIUlFjbTl3Y3lBOUlFRmpkR2x2Ymk1bGVIUmxibVJFWldaaGRXeDBVSEp2Y0hNb2UxeHVJQ0J0WVhoSmJtRmpkR2wyWlVaeVlXMWxjem9nTTF4dWZTazdYRzVjYm1WNGNHOXlkQ0JrWldaaGRXeDBJRkJvZVhOcFkzTTdYRzRpWFgwPVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvYWN0aW9ucy9QaHlzaWNzLmpzXG4gKiogbW9kdWxlIGlkID0gNlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9O1xuXG52YXIgX0FjdGlvbjIgPSByZXF1aXJlKCcuL0FjdGlvbicpO1xuXG52YXIgX0FjdGlvbjMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9BY3Rpb24yKTtcblxudmFyIF9Qb2ludGVyID0gcmVxdWlyZSgnLi4vaW5wdXQvUG9pbnRlcicpO1xuXG52YXIgX1BvaW50ZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfUG9pbnRlcik7XG5cbnZhciBfY2FsYyA9IHJlcXVpcmUoJy4uL2luYy9jYWxjJyk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKCFzZWxmKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gY2FsbCAmJiAodHlwZW9mIGNhbGwgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikgPyBjYWxsIDogc2VsZjsgfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb24sIG5vdCBcIiArIHR5cGVvZiBzdXBlckNsYXNzKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCBlbnVtZXJhYmxlOiBmYWxzZSwgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LnNldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKSA6IHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7IH1cblxuLypcbiAgU2NyYXBlIHgveSBjb29yZGluYXRlcyBmcm9tIHByb3ZpZGVkIGV2ZW50XG5cbiAgQHBhcmFtIFtldmVudF1cbiAgQHJldHVybiBbb2JqZWN0XVxuKi9cbnZhciBtb3VzZUV2ZW50VG9Qb2ludCA9IGZ1bmN0aW9uIChlKSB7XG4gIHJldHVybiB7XG4gICAgeDogZS5wYWdlWCxcbiAgICB5OiBlLnBhZ2VZXG4gIH07XG59O1xuXG52YXIgdG91Y2hFdmVudFRvUG9pbnQgPSBmdW5jdGlvbiAoX3JlZikge1xuICB2YXIgY2hhbmdlZFRvdWNoZXMgPSBfcmVmLmNoYW5nZWRUb3VjaGVzO1xuICByZXR1cm4ge1xuICAgIHg6IGNoYW5nZWRUb3VjaGVzWzBdLmNsaWVudFgsXG4gICAgeTogY2hhbmdlZFRvdWNoZXNbMF0uY2xpZW50WVxuICB9O1xufTtcblxudmFyIGNyZWF0ZVBvaW50ZXIgPSBmdW5jdGlvbiAoZSkge1xuICByZXR1cm4gZS50b3VjaGVzID8gbmV3IF9Qb2ludGVyMi5kZWZhdWx0KHRvdWNoRXZlbnRUb1BvaW50KGUpLCAndG91Y2htb3ZlJywgdG91Y2hFdmVudFRvUG9pbnQpIDogbmV3IF9Qb2ludGVyMi5kZWZhdWx0KG1vdXNlRXZlbnRUb1BvaW50KGUpLCAnbW91c2Vtb3ZlJywgbW91c2VFdmVudFRvUG9pbnQpO1xufTtcblxudmFyIGdldEFjdHVhbEV2ZW50ID0gZnVuY3Rpb24gKGUpIHtcbiAgcmV0dXJuIGUub3JpZ2luYWxFdmVudCB8fCBlO1xufTtcblxudmFyIFRyYWNrID0gZnVuY3Rpb24gKF9BY3Rpb24pIHtcbiAgX2luaGVyaXRzKFRyYWNrLCBfQWN0aW9uKTtcblxuICBmdW5jdGlvbiBUcmFjaygpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgVHJhY2spO1xuXG4gICAgcmV0dXJuIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIF9BY3Rpb24uYXBwbHkodGhpcywgYXJndW1lbnRzKSk7XG4gIH1cblxuICBUcmFjay5wcm90b3R5cGUuc3RhcnQgPSBmdW5jdGlvbiBzdGFydChpbnB1dCkge1xuICAgIF9BY3Rpb24ucHJvdG90eXBlLnN0YXJ0LmNhbGwodGhpcyk7XG5cbiAgICBpZiAoaW5wdXQpIHtcbiAgICAgIHRoaXMuaW5wdXQgPSBpbnB1dC5zdGF0ZSA/IGlucHV0IDogY3JlYXRlUG9pbnRlcihnZXRBY3R1YWxFdmVudChpbnB1dCkpO1xuICAgIH1cblxuICAgIHRoaXMuaW5wdXRPZmZzZXQgPSB7fTtcbiAgICB0aGlzLmlucHV0T3JpZ2luID0gX2V4dGVuZHMoe30sIHRoaXMuaW5wdXQuc3RhdGUpO1xuICAgIHRoaXMuaW5wdXQuc3RhcnQoKTtcblxuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIFRyYWNrLnByb3RvdHlwZS5zdG9wID0gZnVuY3Rpb24gc3RvcCgpIHtcbiAgICBfQWN0aW9uLnByb3RvdHlwZS5zdG9wLmNhbGwodGhpcyk7XG4gICAgdGhpcy5pbnB1dC5zdG9wKCk7XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICBUcmFjay5wcm90b3R5cGUub25VcGRhdGUgPSBmdW5jdGlvbiBvblVwZGF0ZSh0cmFjaywgZnJhbWVTdGFtcCwgZWxhcHNlZCkge1xuICAgIHRoaXMuaW5wdXRPZmZzZXQgPSAoMCwgX2NhbGMub2Zmc2V0KSh0aGlzLmlucHV0T3JpZ2luLCB0aGlzLmlucHV0LnN0YXRlKTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5udW1WYWx1ZUtleXM7IGkrKykge1xuICAgICAgdmFyIGtleSA9IHRoaXMudmFsdWVLZXlzW2ldO1xuXG4gICAgICBpZiAodGhpcy5pbnB1dE9mZnNldC5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgIHZhciB2YWx1ZSA9IHRoaXMudmFsdWVzW2tleV07XG4gICAgICAgIHZhciBpbnB1dFByb3AgPSB2YWx1ZS5oYXNPd25Qcm9wZXJ0eSgnd2F0Y2gnKSA/IHZhbHVlLndhdGNoIDoga2V5O1xuXG4gICAgICAgIGlmICh2YWx1ZS5kaXJlY3QpIHtcbiAgICAgICAgICB2YWx1ZS5jdXJyZW50ID0gdGhpcy5pbnB1dC5zdGF0ZVtpbnB1dFByb3BdO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHZhbHVlLmN1cnJlbnQgPSB2YWx1ZS5mcm9tICsgdGhpcy5pbnB1dE9mZnNldFtpbnB1dFByb3BdO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gU21vb3RoIHZhbHVlIGlmIHdlIGhhdmUgc21vb3RoaW5nXG4gICAgICAgIGlmICh2YWx1ZS5zbW9vdGgpIHtcbiAgICAgICAgICB2YWx1ZS5jdXJyZW50ID0gKDAsIF9jYWxjLnNtb290aCkodmFsdWUuY3VycmVudCwgdmFsdWUucHJldiwgZWxhcHNlZCwgdmFsdWUuc21vb3RoKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICByZXR1cm4gVHJhY2s7XG59KF9BY3Rpb24zLmRlZmF1bHQpO1xuXG5UcmFjay5wcm90b3R5cGUuZGVmYXVsdFZhbHVlUHJvcCA9ICd3YXRjaCc7XG5UcmFjay5wcm90b3R5cGUuZGVmYXVsdFZhbHVlID0gX0FjdGlvbjMuZGVmYXVsdC5leHRlbmREZWZhdWx0VmFsdWUoe1xuICBkaXJlY3Q6IGZhbHNlLFxuICBmcm9tOiAwXG59KTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gVHJhY2s7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5OeVl5OWhZM1JwYjI1ekwxUnlZV05yTG1weklsMHNJbTVoYldWeklqcGJYU3dpYldGd2NHbHVaM01pT2lJN096czdPenRCUVVGQk96czdPMEZCUTBFN096czdRVUZEUVRzN096czdPenM3T3pzN096czdPenRCUVZGQkxFbEJRVTBzYjBKQlFXOUNMRlZCUVVNc1EwRkJSRHRCUVVGQkxGTkJRVkU3UVVGRGFFTXNUMEZCUnl4RlFVRkZMRXRCUkRKQ08wRkJSV2hETEU5QlFVY3NSVUZCUlR0QlFVWXlRaXhIUVVGU08wRkJRVUVzUTBGQk1VSTdPMEZCUzBFc1NVRkJUU3h2UWtGQmIwSTdRVUZCUVN4TlFVRkhMR05CUVVnc1VVRkJSeXhqUVVGSU8wRkJRVUVzVTBGQmVVSTdRVUZEYWtRc1QwRkJSeXhsUVVGbExFTkJRV1lzUlVGQmEwSXNUMEZFTkVJN1FVRkZha1FzVDBGQlJ5eGxRVUZsTEVOQlFXWXNSVUZCYTBJN1FVRkdORUlzUjBGQmVrSTdRVUZCUVN4RFFVRXhRanM3UVVGTFFTeEpRVUZOTEdkQ1FVRm5RaXhWUVVGRExFTkJRVVE3UVVGQlFTeFRRVUZQTEVWQlFVVXNUMEZCUml4SFFVTXpRaXh6UWtGQldTeHJRa0ZCYTBJc1EwRkJiRUlzUTBGQldpeEZRVUZyUXl4WFFVRnNReXhGUVVFclF5eHBRa0ZCTDBNc1EwRkVNa0lzUjBGRk0wSXNjMEpCUVZrc2EwSkJRV3RDTEVOQlFXeENMRU5CUVZvc1JVRkJhME1zVjBGQmJFTXNSVUZCSzBNc2FVSkJRUzlETEVOQlJtOUNPMEZCUVVFc1EwRkJkRUk3TzBGQlNVRXNTVUZCVFN4cFFrRkJhVUlzVlVGQlF5eERRVUZFTzBGQlFVRXNVMEZCVHl4RlFVRkZMR0ZCUVVZc1NVRkJiVUlzUTBGQk1VSTdRVUZCUVN4RFFVRjJRanM3U1VGRlRTeExPenM3T3pzN096czdhMEpCUTBvc1N5eHJRa0ZCVFN4TExFVkJRVTg3UVVGRFdDeHpRa0ZCVFN4TFFVRk9PenRCUVVWQkxGRkJRVWtzUzBGQlNpeEZRVUZYTzBGQlExUXNWMEZCU3l4TFFVRk1MRWRCUVdFc1RVRkJUU3hMUVVGT0xFZEJRV01zUzBGQlpDeEhRVUZ6UWl4alFVRmpMR1ZCUVdVc1MwRkJaaXhEUVVGa0xFTkJRVzVETzBGQlEwUTdPMEZCUlVRc1UwRkJTeXhYUVVGTUxFZEJRVzFDTEVWQlFXNUNPMEZCUTBFc1UwRkJTeXhYUVVGTUxHZENRVUYzUWl4TFFVRkxMRXRCUVV3c1EwRkJWeXhMUVVGdVF6dEJRVU5CTEZOQlFVc3NTMEZCVEN4RFFVRlhMRXRCUVZnN08wRkJSVUVzVjBGQlR5eEpRVUZRTzBGQlEwUXNSenM3YTBKQlJVUXNTU3h0UWtGQlR6dEJRVU5NTEhOQ1FVRk5MRWxCUVU0N1FVRkRRU3hUUVVGTExFdEJRVXdzUTBGQlZ5eEpRVUZZT3p0QlFVVkJMRmRCUVU4c1NVRkJVRHRCUVVORUxFYzdPMnRDUVVWRUxGRXNjVUpCUVZNc1N5eEZRVUZQTEZVc1JVRkJXU3hQTEVWQlFWTTdRVUZEYmtNc1UwRkJTeXhYUVVGTUxFZEJRVzFDTEd0Q1FVRlBMRXRCUVVzc1YwRkJXaXhGUVVGNVFpeExRVUZMTEV0QlFVd3NRMEZCVnl4TFFVRndReXhEUVVGdVFqczdRVUZGUVN4VFFVRkxMRWxCUVVrc1NVRkJTU3hEUVVGaUxFVkJRV2RDTEVsQlFVa3NTMEZCU3l4WlFVRjZRaXhGUVVGMVF5eEhRVUYyUXl4RlFVRTBRenRCUVVNeFF5eFZRVUZOTEUxQlFVMHNTMEZCU3l4VFFVRk1MRU5CUVdVc1EwRkJaaXhEUVVGYU96dEJRVVZCTEZWQlFVa3NTMEZCU3l4WFFVRk1MRU5CUVdsQ0xHTkJRV3BDTEVOQlFXZERMRWRCUVdoRExFTkJRVW9zUlVGQk1FTTdRVUZEZUVNc1dVRkJUU3hSUVVGUkxFdEJRVXNzVFVGQlRDeERRVUZaTEVkQlFWb3NRMEZCWkR0QlFVTkJMRmxCUVUwc1dVRkJXU3hOUVVGTkxHTkJRVTRzUTBGQmNVSXNUMEZCY2tJc1NVRkJaME1zVFVGQlRTeExRVUYwUXl4SFFVRTRReXhIUVVGb1JUczdRVUZGUVN4WlFVRkpMRTFCUVUwc1RVRkJWaXhGUVVGclFqdEJRVU5vUWl4blFrRkJUU3hQUVVGT0xFZEJRV2RDTEV0QlFVc3NTMEZCVEN4RFFVRlhMRXRCUVZnc1EwRkJhVUlzVTBGQmFrSXNRMEZCYUVJN1FVRkRSQ3hUUVVaRUxFMUJSVTg3UVVGRFRDeG5Ra0ZCVFN4UFFVRk9MRWRCUVdkQ0xFMUJRVTBzU1VGQlRpeEhRVUZoTEV0QlFVc3NWMEZCVEN4RFFVRnBRaXhUUVVGcVFpeERRVUUzUWp0QlFVTkVPenM3UVVGSFJDeFpRVUZKTEUxQlFVMHNUVUZCVml4RlFVRnJRanRCUVVOb1FpeG5Ra0ZCVFN4UFFVRk9MRWRCUVdkQ0xHdENRVUZQTEUxQlFVMHNUMEZCWWl4RlFVRnpRaXhOUVVGTkxFbEJRVFZDTEVWQlFXdERMRTlCUVd4RExFVkJRVEpETEUxQlFVMHNUVUZCYWtRc1EwRkJhRUk3UVVGRFJEdEJRVU5HTzBGQlEwWTdRVUZEUml4SE96czdPenRCUVVkSUxFMUJRVTBzVTBGQlRpeERRVUZuUWl4blFrRkJhRUlzUjBGQmJVTXNUMEZCYmtNN1FVRkRRU3hOUVVGTkxGTkJRVTRzUTBGQlowSXNXVUZCYUVJc1IwRkJLMElzYVVKQlFVOHNhMEpCUVZBc1EwRkJNRUk3UVVGRGRrUXNWVUZCVVN4TFFVUXJRenRCUVVWMlJDeFJRVUZOTzBGQlJtbEVMRU5CUVRGQ0xFTkJRUzlDT3p0clFrRkxaU3hMSWl3aVptbHNaU0k2SWxSeVlXTnJMbXB6SWl3aWMyOTFjbU5sVW05dmRDSTZJaTlWYzJWeWN5OXRZWFIwY0dWeWNua3ZVMmwwWlhNdmNHOXdiVzkwYVc5dUlpd2ljMjkxY21ObGMwTnZiblJsYm5RaU9sc2lhVzF3YjNKMElFRmpkR2x2YmlCbWNtOXRJQ2N1TDBGamRHbHZiaWM3WEc1cGJYQnZjblFnVUc5cGJuUmxjaUJtY205dElDY3VMaTlwYm5CMWRDOVFiMmx1ZEdWeUp6dGNibWx0Y0c5eWRDQjdJSE50YjI5MGFDd2diMlptYzJWMElIMGdabkp2YlNBbkxpNHZhVzVqTDJOaGJHTW5PMXh1WEc0dktseHVJQ0JUWTNKaGNHVWdlQzk1SUdOdmIzSmthVzVoZEdWeklHWnliMjBnY0hKdmRtbGtaV1FnWlhabGJuUmNibHh1SUNCQWNHRnlZVzBnVzJWMlpXNTBYVnh1SUNCQWNtVjBkWEp1SUZ0dlltcGxZM1JkWEc0cUwxeHVZMjl1YzNRZ2JXOTFjMlZGZG1WdWRGUnZVRzlwYm5RZ1BTQW9aU2tnUFQ0Z0tIdGNiaUFnZURvZ1pTNXdZV2RsV0N4Y2JpQWdlVG9nWlM1d1lXZGxXVnh1ZlNrN1hHNWNibU52Ym5OMElIUnZkV05vUlhabGJuUlViMUJ2YVc1MElEMGdLSHNnWTJoaGJtZGxaRlJ2ZFdOb1pYTWdmU2tnUFQ0Z0tIdGNiaUFnZURvZ1kyaGhibWRsWkZSdmRXTm9aWE5iTUYwdVkyeHBaVzUwV0N4Y2JpQWdlVG9nWTJoaGJtZGxaRlJ2ZFdOb1pYTmJNRjB1WTJ4cFpXNTBXVnh1ZlNrN1hHNWNibU52Ym5OMElHTnlaV0YwWlZCdmFXNTBaWElnUFNBb1pTa2dQVDRnWlM1MGIzVmphR1Z6SUQ5Y2JpQWdibVYzSUZCdmFXNTBaWElvZEc5MVkyaEZkbVZ1ZEZSdlVHOXBiblFvWlNrc0lDZDBiM1ZqYUcxdmRtVW5MQ0IwYjNWamFFVjJaVzUwVkc5UWIybHVkQ2tnT2lCY2JpQWdibVYzSUZCdmFXNTBaWElvYlc5MWMyVkZkbVZ1ZEZSdlVHOXBiblFvWlNrc0lDZHRiM1Z6WlcxdmRtVW5MQ0J0YjNWelpVVjJaVzUwVkc5UWIybHVkQ2s3WEc1Y2JtTnZibk4wSUdkbGRFRmpkSFZoYkVWMlpXNTBJRDBnS0dVcElEMCtJR1V1YjNKcFoybHVZV3hGZG1WdWRDQjhmQ0JsTzF4dVhHNWpiR0Z6Y3lCVWNtRmpheUJsZUhSbGJtUnpJRUZqZEdsdmJpQjdYRzRnSUhOMFlYSjBLR2x1Y0hWMEtTQjdYRzRnSUNBZ2MzVndaWEl1YzNSaGNuUW9LVHRjYmx4dUlDQWdJR2xtSUNocGJuQjFkQ2tnZTF4dUlDQWdJQ0FnZEdocGN5NXBibkIxZENBOUlHbHVjSFYwTG5OMFlYUmxJRDhnYVc1d2RYUWdPaUJqY21WaGRHVlFiMmx1ZEdWeUtHZGxkRUZqZEhWaGJFVjJaVzUwS0dsdWNIVjBLU2s3WEc0Z0lDQWdmVnh1WEc0Z0lDQWdkR2hwY3k1cGJuQjFkRTltWm5ObGRDQTlJSHQ5TzF4dUlDQWdJSFJvYVhNdWFXNXdkWFJQY21sbmFXNGdQU0I3SUM0dUxuUm9hWE11YVc1d2RYUXVjM1JoZEdVZ2ZUdGNiaUFnSUNCMGFHbHpMbWx1Y0hWMExuTjBZWEowS0NrN1hHNWNiaUFnSUNCeVpYUjFjbTRnZEdocGN6dGNiaUFnZlZ4dVhHNGdJSE4wYjNBb0tTQjdYRzRnSUNBZ2MzVndaWEl1YzNSdmNDZ3BPMXh1SUNBZ0lIUm9hWE11YVc1d2RYUXVjM1J2Y0NncE8xeHVYRzRnSUNBZ2NtVjBkWEp1SUhSb2FYTTdYRzRnSUgxY2JseHVJQ0J2YmxWd1pHRjBaU2gwY21GamF5d2dabkpoYldWVGRHRnRjQ3dnWld4aGNITmxaQ2tnZTF4dUlDQWdJSFJvYVhNdWFXNXdkWFJQWm1aelpYUWdQU0J2Wm1aelpYUW9kR2hwY3k1cGJuQjFkRTl5YVdkcGJpd2dkR2hwY3k1cGJuQjFkQzV6ZEdGMFpTazdYRzVjYmlBZ0lDQm1iM0lnS0d4bGRDQnBJRDBnTURzZ2FTQThJSFJvYVhNdWJuVnRWbUZzZFdWTFpYbHpPeUJwS3lzcElIdGNiaUFnSUNBZ0lHTnZibk4wSUd0bGVTQTlJSFJvYVhNdWRtRnNkV1ZMWlhselcybGRPMXh1WEc0Z0lDQWdJQ0JwWmlBb2RHaHBjeTVwYm5CMWRFOW1abk5sZEM1b1lYTlBkMjVRY205d1pYSjBlU2hyWlhrcEtTQjdYRzRnSUNBZ0lDQWdJR052Ym5OMElIWmhiSFZsSUQwZ2RHaHBjeTUyWVd4MVpYTmJhMlY1WFR0Y2JpQWdJQ0FnSUNBZ1kyOXVjM1FnYVc1d2RYUlFjbTl3SUQwZ2RtRnNkV1V1YUdGelQzZHVVSEp2Y0dWeWRIa29KM2RoZEdOb0p5a2dQeUIyWVd4MVpTNTNZWFJqYUNBNklHdGxlVHRjYmx4dUlDQWdJQ0FnSUNCcFppQW9kbUZzZFdVdVpHbHlaV04wS1NCN1hHNGdJQ0FnSUNBZ0lDQWdkbUZzZFdVdVkzVnljbVZ1ZENBOUlIUm9hWE11YVc1d2RYUXVjM1JoZEdWYmFXNXdkWFJRY205d1hUdGNiaUFnSUNBZ0lDQWdmU0JsYkhObElIdGNiaUFnSUNBZ0lDQWdJQ0IyWVd4MVpTNWpkWEp5Wlc1MElEMGdkbUZzZFdVdVpuSnZiU0FySUhSb2FYTXVhVzV3ZFhSUFptWnpaWFJiYVc1d2RYUlFjbTl3WFR0Y2JpQWdJQ0FnSUNBZ2ZWeHVYRzRnSUNBZ0lDQWdJQzh2SUZOdGIyOTBhQ0IyWVd4MVpTQnBaaUIzWlNCb1lYWmxJSE50YjI5MGFHbHVaMXh1SUNBZ0lDQWdJQ0JwWmlBb2RtRnNkV1V1YzIxdmIzUm9LU0I3WEc0Z0lDQWdJQ0FnSUNBZ2RtRnNkV1V1WTNWeWNtVnVkQ0E5SUhOdGIyOTBhQ2gyWVd4MVpTNWpkWEp5Wlc1MExDQjJZV3gxWlM1d2NtVjJMQ0JsYkdGd2MyVmtMQ0IyWVd4MVpTNXpiVzl2ZEdncE8xeHVJQ0FnSUNBZ0lDQjlYRzRnSUNBZ0lDQjlYRzRnSUNBZ2ZWeHVJQ0I5WEc1OVhHNWNibFJ5WVdOckxuQnliM1J2ZEhsd1pTNWtaV1poZFd4MFZtRnNkV1ZRY205d0lEMGdKM2RoZEdOb0p6dGNibFJ5WVdOckxuQnliM1J2ZEhsd1pTNWtaV1poZFd4MFZtRnNkV1VnUFNCQlkzUnBiMjR1WlhoMFpXNWtSR1ZtWVhWc2RGWmhiSFZsS0h0Y2JpQWdaR2x5WldOME9pQm1ZV3h6WlN4Y2JpQWdabkp2YlRvZ01GeHVmU2s3WEc1Y2JtVjRjRzl5ZENCa1pXWmhkV3gwSUZSeVlXTnJPMXh1SWwxOVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvYWN0aW9ucy9UcmFjay5qc1xuICoqIG1vZHVsZSBpZCA9IDdcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTtcblxudmFyIF9sb29wID0gcmVxdWlyZSgnLi9sb29wJyk7XG5cbnZhciBsb29wID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQoX2xvb3ApO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChvYmopIHsgaWYgKG9iaiAmJiBvYmouX19lc01vZHVsZSkgeyByZXR1cm4gb2JqOyB9IGVsc2UgeyB2YXIgbmV3T2JqID0ge307IGlmIChvYmogIT0gbnVsbCkgeyBmb3IgKHZhciBrZXkgaW4gb2JqKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBrZXkpKSBuZXdPYmpba2V5XSA9IG9ialtrZXldOyB9IH0gbmV3T2JqLmRlZmF1bHQgPSBvYmo7IHJldHVybiBuZXdPYmo7IH0gfVxuXG5mdW5jdGlvbiBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMob2JqLCBrZXlzKSB7IHZhciB0YXJnZXQgPSB7fTsgZm9yICh2YXIgaSBpbiBvYmopIHsgaWYgKGtleXMuaW5kZXhPZihpKSA+PSAwKSBjb250aW51ZTsgaWYgKCFPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBpKSkgY29udGludWU7IHRhcmdldFtpXSA9IG9ialtpXTsgfSByZXR1cm4gdGFyZ2V0OyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9IC8qXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBCYXNlIFRhc2sgY2xhc3MgZm9yIGNyZWF0aW5nIGEgdGFzayBvbiB0aGUgbWFpbiByZW5kZXIgbG9vcC5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqL1xuXG5cbmZ1bmN0aW9uIGNsZWFudXAoKSB7XG4gIHRoaXMub25DbGVhbnVwID0gdW5kZWZpbmVkO1xuICBsb29wLmRlYWN0aXZhdGUodGhpcy5pZCk7XG59XG5cbmZ1bmN0aW9uIGFjdGl2YXRlKCkge1xuICB0aGlzLm9uQ2xlYW51cCA9IGNsZWFudXA7XG59XG5cbnZhciBUYXNrID0gZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBUYXNrKHByb3BzKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFRhc2spO1xuXG4gICAgdGhpcy5pZCA9IGxvb3AuZ2V0VGFza0lkKCk7XG4gICAgdGhpcy5pc0FjdGl2ZSA9IGZhbHNlO1xuXG4gICAgaWYgKHRoaXMuZGVmYXVsdFByb3BzKSB7XG4gICAgICBmb3IgKHZhciBrZXkgaW4gdGhpcy5kZWZhdWx0UHJvcHMpIHtcbiAgICAgICAgaWYgKHRoaXMuZGVmYXVsdFByb3BzLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICB0aGlzW2tleV0gPSB0aGlzLmRlZmF1bHRQcm9wc1trZXldO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5zZXQocHJvcHMpO1xuICB9XG5cbiAgVGFzay5wcm90b3R5cGUuc2V0ID0gZnVuY3Rpb24gc2V0KHByb3BzKSB7XG4gICAgZm9yICh2YXIga2V5IGluIHByb3BzKSB7XG4gICAgICBpZiAocHJvcHMuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICB0aGlzW2tleV0gPSBwcm9wc1trZXldO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIFRhc2sucHJvdG90eXBlLnN0YXJ0ID0gZnVuY3Rpb24gc3RhcnQoKSB7XG4gICAgbG9vcC5hY3RpdmF0ZSh0aGlzLmlkLCB0aGlzKTtcblxuICAgIHRoaXMub25BY3RpdmF0ZUxvb3AgPSB0aGlzLm9uQ2xlYW51cCA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLmlzQ29tcGxldGUgPSBmYWxzZTtcblxuICAgIGlmICh0aGlzLm9uU3RhcnQpIHtcbiAgICAgIHRoaXMub25TdGFydCh0aGlzKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICBUYXNrLnByb3RvdHlwZS5zdG9wID0gZnVuY3Rpb24gc3RvcCgpIHtcbiAgICBsb29wLmRlYWN0aXZhdGUodGhpcy5pZCk7XG5cbiAgICBpZiAodGhpcy5vblN0b3ApIHtcbiAgICAgIHRoaXMub25TdG9wKHRoaXMpO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIFRhc2sucHJvdG90eXBlLm9uY2UgPSBmdW5jdGlvbiBvbmNlKCkge1xuICAgIGxvb3AuYWN0aXZhdGUodGhpcy5pZCwgdGhpcyk7XG4gICAgdGhpcy5vbkNsZWFudXAgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5vbkFjdGl2YXRlTG9vcCA9IGFjdGl2YXRlO1xuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgVGFzay5wcm90b3R5cGUuY29tcGxldGUgPSBmdW5jdGlvbiBjb21wbGV0ZSgpIHtcbiAgICB0aGlzLnN0b3AoKTtcblxuICAgIGlmICh0aGlzLm9uQ29tcGxldGUpIHtcbiAgICAgIHRoaXMub25Db21wbGV0ZSh0aGlzKTtcbiAgICB9XG4gIH07XG5cbiAgLypcbiAgICAjIEV4dGVuZCB0aGlzIFByb2Nlc3Mgd2l0aCBuZXcgcHJvcGVydGllc1xuICAgICMjIFJldHVybnMgbmV3IGluc3RhbmNlIG9mIHRoaXMgUHJvY2VzcydzIGBwcm90b3R5cGVgIHdpdGggZXhpc3RpbmcgYW5kIG5ldyBwcm9wZXJ0aWVzXG4gICAgIEBwYXJhbSBbb2JqZWN0XSAob3B0aW9uYWwpXG4gICAgQHJldHVybiBbUHJvY2Vzc11cbiAgKi9cblxuXG4gIFRhc2sucHJvdG90eXBlLmluaGVyaXQgPSBmdW5jdGlvbiBpbmhlcml0KHByb3BzKSB7XG4gICAgdmFyIGlkID0gdGhpcy5pZDtcblxuICAgIHZhciBpbmhlcml0ZWRQcm9wcyA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyh0aGlzLCBbJ2lkJ10pO1xuXG4gICAgcmV0dXJuIG5ldyB0aGlzLmNvbnN0cnVjdG9yKF9leHRlbmRzKHt9LCBpbmhlcml0ZWRQcm9wcywgcHJvcHMpKTtcbiAgfTtcblxuICByZXR1cm4gVGFzaztcbn0oKTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gVGFzaztcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbk55WXk5MFlYTnJMMVJoYzJzdWFuTWlYU3dpYm1GdFpYTWlPbHRkTENKdFlYQndhVzVuY3lJNklqczdPenM3TzBGQlIwRTdPMGxCUVZrc1NUczdPenM3T3pzN096czdRVUZGV2l4VFFVRlRMRTlCUVZRc1IwRkJiVUk3UVVGRGFrSXNUMEZCU3l4VFFVRk1MRWRCUVdsQ0xGTkJRV3BDTzBGQlEwRXNUMEZCU3l4VlFVRk1MRU5CUVdkQ0xFdEJRVXNzUlVGQmNrSTdRVUZEUkRzN1FVRkZSQ3hUUVVGVExGRkJRVlFzUjBGQmIwSTdRVUZEYkVJc1QwRkJTeXhUUVVGTUxFZEJRV2xDTEU5QlFXcENPMEZCUTBRN08wbEJSVzlDTEVrN1FVRkRia0lzWjBKQlFWa3NTMEZCV2l4RlFVRnRRanRCUVVGQk96dEJRVU5xUWl4VFFVRkxMRVZCUVV3c1IwRkJWU3hMUVVGTExGTkJRVXdzUlVGQlZqdEJRVU5CTEZOQlFVc3NVVUZCVEN4SFFVRm5RaXhMUVVGb1FqczdRVUZGUVN4UlFVRkpMRXRCUVVzc1dVRkJWQ3hGUVVGMVFqdEJRVU55UWl4WFFVRkxMRWxCUVVrc1IwRkJWQ3hKUVVGblFpeExRVUZMTEZsQlFYSkNMRVZCUVcxRE8wRkJRMnBETEZsQlFVa3NTMEZCU3l4WlFVRk1MRU5CUVd0Q0xHTkJRV3hDTEVOQlFXbERMRWRCUVdwRExFTkJRVW9zUlVGQk1rTTdRVUZEZWtNc1pVRkJTeXhIUVVGTUxFbEJRVmtzUzBGQlN5eFpRVUZNTEVOQlFXdENMRWRCUVd4Q0xFTkJRVm83UVVGRFJEdEJRVU5HTzBGQlEwWTdPMEZCUlVRc1UwRkJTeXhIUVVGTUxFTkJRVk1zUzBGQlZEdEJRVU5FT3p0cFFrRkZSQ3hITEdkQ1FVRkpMRXNzUlVGQlR6dEJRVU5VTEZOQlFVc3NTVUZCU1N4SFFVRlVMRWxCUVdkQ0xFdEJRV2hDTEVWQlFYVkNPMEZCUTNKQ0xGVkJRVWtzVFVGQlRTeGpRVUZPTEVOQlFYRkNMRWRCUVhKQ0xFTkJRVW9zUlVGQkswSTdRVUZETjBJc1lVRkJTeXhIUVVGTUxFbEJRVmtzVFVGQlRTeEhRVUZPTEVOQlFWbzdRVUZEUkR0QlFVTkdPenRCUVVWRUxGZEJRVThzU1VGQlVEdEJRVU5FTEVjN08ybENRVVZFTEVzc2IwSkJRVkU3UVVGRFRpeFRRVUZMTEZGQlFVd3NRMEZCWXl4TFFVRkxMRVZCUVc1Q0xFVkJRWFZDTEVsQlFYWkNPenRCUVVWQkxGTkJRVXNzWTBGQlRDeEhRVUZ6UWl4TFFVRkxMRk5CUVV3c1IwRkJhVUlzVTBGQmRrTTdRVUZEUVN4VFFVRkxMRlZCUVV3c1IwRkJhMElzUzBGQmJFSTdPMEZCUlVFc1VVRkJTU3hMUVVGTExFOUJRVlFzUlVGQmEwSTdRVUZEYUVJc1YwRkJTeXhQUVVGTUxFTkJRV0VzU1VGQllqdEJRVU5FT3p0QlFVVkVMRmRCUVU4c1NVRkJVRHRCUVVORUxFYzdPMmxDUVVWRUxFa3NiVUpCUVU4N1FVRkRUQ3hUUVVGTExGVkJRVXdzUTBGQlowSXNTMEZCU3l4RlFVRnlRanM3UVVGRlFTeFJRVUZKTEV0QlFVc3NUVUZCVkN4RlFVRnBRanRCUVVObUxGZEJRVXNzVFVGQlRDeERRVUZaTEVsQlFWbzdRVUZEUkRzN1FVRkZSQ3hYUVVGUExFbEJRVkE3UVVGRFJDeEhPenRwUWtGRlJDeEpMRzFDUVVGUE8wRkJRMHdzVTBGQlN5eFJRVUZNTEVOQlFXTXNTMEZCU3l4RlFVRnVRaXhGUVVGMVFpeEpRVUYyUWp0QlFVTkJMRk5CUVVzc1UwRkJUQ3hIUVVGcFFpeFRRVUZxUWp0QlFVTkJMRk5CUVVzc1kwRkJUQ3hIUVVGelFpeFJRVUYwUWpzN1FVRkZRU3hYUVVGUExFbEJRVkE3UVVGRFJDeEhPenRwUWtGRlJDeFJMSFZDUVVGWE8wRkJRMVFzVTBGQlN5eEpRVUZNT3p0QlFVVkJMRkZCUVVrc1MwRkJTeXhWUVVGVUxFVkJRWEZDTzBGQlEyNUNMRmRCUVVzc1ZVRkJUQ3hEUVVGblFpeEpRVUZvUWp0QlFVTkVPMEZCUTBZc1J6czdPenM3T3pzN096dHBRa0ZUUkN4UExHOUNRVUZSTEVzc1JVRkJUenRCUVVGQkxGRkJRMHdzUlVGRVN5eEhRVU54UWl4SlFVUnlRaXhEUVVOTUxFVkJSRXM3TzBGQlFVRXNVVUZEUlN4alFVUkdMRFJDUVVOeFFpeEpRVVJ5UWpzN1FVRkZZaXhYUVVGUExFbEJRVWtzUzBGQlN5eFhRVUZVTEdOQlFUQkNMR05CUVRGQ0xFVkJRVFpETEV0QlFUZERMRVZCUVZBN1FVRkRSQ3hIT3pzN096dHJRa0V6Uld0Q0xFa2lMQ0ptYVd4bElqb2lWR0Z6YXk1cWN5SXNJbk52ZFhKalpWSnZiM1FpT2lJdlZYTmxjbk12YldGMGRIQmxjbko1TDFOcGRHVnpMM0J2Y0cxdmRHbHZiaUlzSW5OdmRYSmpaWE5EYjI1MFpXNTBJanBiSWk4cVhHNGdJRUpoYzJVZ1ZHRnpheUJqYkdGemN5Qm1iM0lnWTNKbFlYUnBibWNnWVNCMFlYTnJJRzl1SUhSb1pTQnRZV2x1SUhKbGJtUmxjaUJzYjI5d0xseHVLaTljYm1sdGNHOXlkQ0FxSUdGeklHeHZiM0FnWm5KdmJTQW5MaTlzYjI5d0p6dGNibHh1Wm5WdVkzUnBiMjRnWTJ4bFlXNTFjQ2dwSUh0Y2JpQWdkR2hwY3k1dmJrTnNaV0Z1ZFhBZ1BTQjFibVJsWm1sdVpXUTdYRzRnSUd4dmIzQXVaR1ZoWTNScGRtRjBaU2gwYUdsekxtbGtLVHRjYm4xY2JseHVablZ1WTNScGIyNGdZV04wYVhaaGRHVW9LU0I3WEc0Z0lIUm9hWE11YjI1RGJHVmhiblZ3SUQwZ1kyeGxZVzUxY0R0Y2JuMWNibHh1Wlhod2IzSjBJR1JsWm1GMWJIUWdZMnhoYzNNZ1ZHRnpheUI3WEc0Z0lHTnZibk4wY25WamRHOXlLSEJ5YjNCektTQjdYRzRnSUNBZ2RHaHBjeTVwWkNBOUlHeHZiM0F1WjJWMFZHRnphMGxrS0NrN1hHNGdJQ0FnZEdocGN5NXBjMEZqZEdsMlpTQTlJR1poYkhObE8xeHVYRzRnSUNBZ2FXWWdLSFJvYVhNdVpHVm1ZWFZzZEZCeWIzQnpLU0I3WEc0Z0lDQWdJQ0JtYjNJZ0tHeGxkQ0JyWlhrZ2FXNGdkR2hwY3k1a1pXWmhkV3gwVUhKdmNITXBJSHRjYmlBZ0lDQWdJQ0FnYVdZZ0tIUm9hWE11WkdWbVlYVnNkRkJ5YjNCekxtaGhjMDkzYmxCeWIzQmxjblI1S0d0bGVTa3BJSHRjYmlBZ0lDQWdJQ0FnSUNCMGFHbHpXMnRsZVYwZ1BTQjBhR2x6TG1SbFptRjFiSFJRY205d2MxdHJaWGxkTzF4dUlDQWdJQ0FnSUNCOVhHNGdJQ0FnSUNCOVhHNGdJQ0FnZlZ4dVhHNGdJQ0FnZEdocGN5NXpaWFFvY0hKdmNITXBPMXh1SUNCOVhHNWNiaUFnYzJWMEtIQnliM0J6S1NCN1hHNGdJQ0FnWm05eUlDaHNaWFFnYTJWNUlHbHVJSEJ5YjNCektTQjdYRzRnSUNBZ0lDQnBaaUFvY0hKdmNITXVhR0Z6VDNkdVVISnZjR1Z5ZEhrb2EyVjVLU2tnZTF4dUlDQWdJQ0FnSUNCMGFHbHpXMnRsZVYwZ1BTQndjbTl3YzF0clpYbGRPMXh1SUNBZ0lDQWdmVnh1SUNBZ0lIMWNibHh1SUNBZ0lISmxkSFZ5YmlCMGFHbHpPMXh1SUNCOVhHNWNiaUFnYzNSaGNuUW9LU0I3WEc0Z0lDQWdiRzl2Y0M1aFkzUnBkbUYwWlNoMGFHbHpMbWxrTENCMGFHbHpLVHRjYmx4dUlDQWdJSFJvYVhNdWIyNUJZM1JwZG1GMFpVeHZiM0FnUFNCMGFHbHpMbTl1UTJ4bFlXNTFjQ0E5SUhWdVpHVm1hVzVsWkR0Y2JpQWdJQ0IwYUdsekxtbHpRMjl0Y0d4bGRHVWdQU0JtWVd4elpUdGNibHh1SUNBZ0lHbG1JQ2gwYUdsekxtOXVVM1JoY25RcElIdGNiaUFnSUNBZ0lIUm9hWE11YjI1VGRHRnlkQ2gwYUdsektUdGNiaUFnSUNCOVhHNWNiaUFnSUNCeVpYUjFjbTRnZEdocGN6dGNiaUFnZlZ4dVhHNGdJSE4wYjNBb0tTQjdYRzRnSUNBZ2JHOXZjQzVrWldGamRHbDJZWFJsS0hSb2FYTXVhV1FwTzF4dUlDQWdJRnh1SUNBZ0lHbG1JQ2gwYUdsekxtOXVVM1J2Y0NrZ2UxeHVJQ0FnSUNBZ2RHaHBjeTV2YmxOMGIzQW9kR2hwY3lrN1hHNGdJQ0FnZlZ4dVhHNGdJQ0FnY21WMGRYSnVJSFJvYVhNN1hHNGdJSDFjYmx4dUlDQnZibU5sS0NrZ2UxeHVJQ0FnSUd4dmIzQXVZV04wYVhaaGRHVW9kR2hwY3k1cFpDd2dkR2hwY3lrN1hHNGdJQ0FnZEdocGN5NXZia05zWldGdWRYQWdQU0IxYm1SbFptbHVaV1E3WEc0Z0lDQWdkR2hwY3k1dmJrRmpkR2wyWVhSbFRHOXZjQ0E5SUdGamRHbDJZWFJsTzF4dVhHNGdJQ0FnY21WMGRYSnVJSFJvYVhNN1hHNGdJSDFjYmx4dUlDQmpiMjF3YkdWMFpTZ3BJSHRjYmlBZ0lDQjBhR2x6TG5OMGIzQW9LVHRjYmx4dUlDQWdJR2xtSUNoMGFHbHpMbTl1UTI5dGNHeGxkR1VwSUh0Y2JpQWdJQ0FnSUhSb2FYTXViMjVEYjIxd2JHVjBaU2gwYUdsektUdGNiaUFnSUNCOVhHNGdJSDFjYmx4dUlDQXZLbHh1SUNBZ0lDTWdSWGgwWlc1a0lIUm9hWE1nVUhKdlkyVnpjeUIzYVhSb0lHNWxkeUJ3Y205d1pYSjBhV1Z6WEc0Z0lDQWdJeU1nVW1WMGRYSnVjeUJ1WlhjZ2FXNXpkR0Z1WTJVZ2IyWWdkR2hwY3lCUWNtOWpaWE56SjNNZ1lIQnliM1J2ZEhsd1pXQWdkMmwwYUNCbGVHbHpkR2x1WnlCaGJtUWdibVYzSUhCeWIzQmxjblJwWlhOY2JseHVJQ0FnSUVCd1lYSmhiU0JiYjJKcVpXTjBYU0FvYjNCMGFXOXVZV3dwWEc0Z0lDQWdRSEpsZEhWeWJpQmJVSEp2WTJWemMxMWNiaUFnS2k5Y2JpQWdhVzVvWlhKcGRDaHdjbTl3Y3lrZ2UxeHVJQ0FnSUdOdmJuTjBJSHNnYVdRc0lDNHVMbWx1YUdWeWFYUmxaRkJ5YjNCeklIMGdQU0IwYUdsek8xeHVJQ0FnSUhKbGRIVnliaUJ1WlhjZ2RHaHBjeTVqYjI1emRISjFZM1J2Y2loN0lDNHVMbWx1YUdWeWFYUmxaRkJ5YjNCekxDQXVMaTV3Y205d2N5QjlLVHRjYmlBZ2ZWeHVmU0pkZlE9PVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvdGFzay9UYXNrLmpzXG4gKiogbW9kdWxlIGlkID0gOFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9O1xuXG52YXIgX1Rhc2syID0gcmVxdWlyZSgnLi4vdGFzay9UYXNrJyk7XG5cbnZhciBfVGFzazMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9UYXNrMik7XG5cbnZhciBfdXRpbHMgPSByZXF1aXJlKCcuLi9pbmMvdXRpbHMnKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoIXNlbGYpIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBjYWxsICYmICh0eXBlb2YgY2FsbCA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSA/IGNhbGwgOiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90IFwiICsgdHlwZW9mIHN1cGVyQ2xhc3MpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIGVudW1lcmFibGU6IGZhbHNlLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIDogc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzczsgfVxuXG52YXIgSW5wdXQgPSBmdW5jdGlvbiAoX1Rhc2spIHtcbiAgX2luaGVyaXRzKElucHV0LCBfVGFzayk7XG5cbiAgZnVuY3Rpb24gSW5wdXQoaW5pdGlhbFZhbHVlcywgcG9sbCkge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBJbnB1dCk7XG5cbiAgICB2YXIgX3RoaXMgPSBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCBfVGFzay5jYWxsKHRoaXMpKTtcblxuICAgIF90aGlzLnN0YXRlID0gaW5pdGlhbFZhbHVlcztcblxuICAgIGlmICgoMCwgX3V0aWxzLmlzRnVuYykocG9sbCkpIHtcbiAgICAgIF90aGlzLm9uRnJhbWVTdGFydCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIF90aGlzLmxhdGVzdChfdGhpcy5wb2xsKCkpO1xuICAgICAgfTtcbiAgICB9XG4gICAgcmV0dXJuIF90aGlzO1xuICB9XG5cbiAgLypcbiAgICBNYW51YWxseSBhZGQgbGF0ZXN0IHZhbHVlc1xuICAgICBAcGFyYW0gW29iamVjdF1cbiAgKi9cblxuXG4gIElucHV0LnByb3RvdHlwZS5sYXRlc3QgPSBmdW5jdGlvbiBsYXRlc3QocHJvcHMpIHtcbiAgICB0aGlzLnN0YXRlID0gX2V4dGVuZHMoe30sIHRoaXMuc3RhdGUsIHByb3BzKTtcbiAgfTtcblxuICByZXR1cm4gSW5wdXQ7XG59KF9UYXNrMy5kZWZhdWx0KTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gSW5wdXQ7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5OeVl5OXBibkIxZEM5SmJuQjFkQzVxY3lKZExDSnVZVzFsY3lJNlcxMHNJbTFoY0hCcGJtZHpJam9pT3pzN096czdRVUZCUVRzN096dEJRVU5CT3pzN096czdPenM3TzBsQlJYRkNMRXM3T3p0QlFVTnVRaXhwUWtGQldTeGhRVUZhTEVWQlFUSkNMRWxCUVROQ0xFVkJRV2xETzBGQlFVRTdPMEZCUVVFc2FVUkJReTlDTEdkQ1FVUXJRanM3UVVGRkwwSXNWVUZCU3l4TFFVRk1MRWRCUVdFc1lVRkJZanM3UVVGRlFTeFJRVUZKTEcxQ1FVRlBMRWxCUVZBc1EwRkJTaXhGUVVGclFqdEJRVU5vUWl4WlFVRkxMRmxCUVV3c1IwRkJiMEk3UVVGQlFTeGxRVUZOTEUxQlFVc3NUVUZCVEN4RFFVRlpMRTFCUVVzc1NVRkJUQ3hGUVVGYUxFTkJRVTQ3UVVGQlFTeFBRVUZ3UWp0QlFVTkVPMEZCVGpoQ08wRkJUMmhET3pzN096czdPenRyUWtGUFJDeE5MRzFDUVVGUExFc3NSVUZCVHp0QlFVTmFMRk5CUVVzc1MwRkJUQ3huUWtGQmEwSXNTMEZCU3l4TFFVRjJRaXhGUVVGcFF5eExRVUZxUXp0QlFVTkVMRWM3T3pzN08ydENRV3BDYTBJc1N5SXNJbVpwYkdVaU9pSkpibkIxZEM1cWN5SXNJbk52ZFhKalpWSnZiM1FpT2lJdlZYTmxjbk12YldGMGRIQmxjbko1TDFOcGRHVnpMM0J2Y0cxdmRHbHZiaUlzSW5OdmRYSmpaWE5EYjI1MFpXNTBJanBiSW1sdGNHOXlkQ0JVWVhOcklHWnliMjBnSnk0dUwzUmhjMnN2VkdGemF5YzdYRzVwYlhCdmNuUWdleUJwYzBaMWJtTWdmU0JtY205dElDY3VMaTlwYm1NdmRYUnBiSE1uTzF4dVhHNWxlSEJ2Y25RZ1pHVm1ZWFZzZENCamJHRnpjeUJKYm5CMWRDQmxlSFJsYm1SeklGUmhjMnNnZTF4dUlDQmpiMjV6ZEhKMVkzUnZjaWhwYm1sMGFXRnNWbUZzZFdWekxDQndiMnhzS1NCN1hHNGdJQ0FnYzNWd1pYSW9LVHRjYmlBZ0lDQjBhR2x6TG5OMFlYUmxJRDBnYVc1cGRHbGhiRlpoYkhWbGN6dGNibHh1SUNBZ0lHbG1JQ2hwYzBaMWJtTW9jRzlzYkNrcElIdGNiaUFnSUNBZ0lIUm9hWE11YjI1R2NtRnRaVk4wWVhKMElEMGdLQ2tnUFQ0Z2RHaHBjeTVzWVhSbGMzUW9kR2hwY3k1d2IyeHNLQ2twTzF4dUlDQWdJSDFjYmlBZ2ZWeHVYRzRnSUM4cVhHNGdJQ0FnVFdGdWRXRnNiSGtnWVdSa0lHeGhkR1Z6ZENCMllXeDFaWE5jYmx4dUlDQWdJRUJ3WVhKaGJTQmJiMkpxWldOMFhWeHVJQ0FxTDF4dUlDQnNZWFJsYzNRb2NISnZjSE1wSUh0Y2JpQWdJQ0IwYUdsekxuTjBZWFJsSUQwZ2V5QXVMaTUwYUdsekxuTjBZWFJsTENBdUxpNXdjbTl3Y3lCOU8xeHVJQ0I5WEc1OVhHNGlYWDA9XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9pbnB1dC9JbnB1dC5qc1xuICoqIG1vZHVsZSBpZCA9IDlcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF90aW1lbGluZSA9IHJlcXVpcmUoJy4vdGltZWxpbmUnKTtcblxudmFyIF90aW1lbGluZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF90aW1lbGluZSk7XG5cbnZhciBfdXRpbHMgPSByZXF1aXJlKCcuL3V0aWxzJyk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbnZhciBERUZBVUxUX0lOVEVSVkFMID0gMTAwO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbiAodHdlZW5zLCBwcm9wcykge1xuICB2YXIgcHJvcHNJc0R1cmF0aW9uID0gKDAsIF91dGlscy5pc051bSkocHJvcHMpO1xuICB2YXIgaW50ZXJ2YWwgPSBwcm9wc0lzRHVyYXRpb24gPyBwcm9wcyA6IHByb3BzID8gcHJvcHMuaW50ZXJ2YWwgfHwgREVGQVVMVF9JTlRFUlZBTCA6IERFRkFVTFRfSU5URVJWQUw7XG4gIHZhciBhdCA9IDA7XG4gIHZhciB0aW1lbGluZURlZmluaXRpb24gPSB0d2VlbnMubWFwKGZ1bmN0aW9uICh0d2Vlbikge1xuICAgIHZhciBkZWYgPSB7IHR3ZWVuOiB0d2VlbiwgYXQ6IGF0IH07XG4gICAgYXQgKz0gaW50ZXJ2YWw7XG4gICAgcmV0dXJuIGRlZjtcbiAgfSk7XG5cbiAgcmV0dXJuICgwLCBfdGltZWxpbmUyLmRlZmF1bHQpKHRpbWVsaW5lRGVmaW5pdGlvbiwgcHJvcHMpO1xufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbk55WXk5cGJtTXZjM1JoWjJkbGNpNXFjeUpkTENKdVlXMWxjeUk2VzEwc0ltMWhjSEJwYm1keklqb2lPenM3TzBGQlFVRTdPenM3UVVGRFFUczdPenRCUVVWQkxFbEJRVTBzYlVKQlFXMUNMRWRCUVhwQ096dHJRa0ZGWlN4VlFVRkRMRTFCUVVRc1JVRkJVeXhMUVVGVUxFVkJRVzFDTzBGQlEyaERMRTFCUVUwc2EwSkJRV3RDTEd0Q1FVRk5MRXRCUVU0c1EwRkJlRUk3UVVGRFFTeE5RVUZOTEZkQlFWY3NhMEpCUVd0Q0xFdEJRV3hDTEVkQlFUQkNMRkZCUVZFc1RVRkJUU3hSUVVGT0xFbEJRV3RDTEdkQ1FVRXhRaXhIUVVFMlF5eG5Ra0ZCZUVZN1FVRkRRU3hOUVVGSkxFdEJRVXNzUTBGQlZEdEJRVU5CTEUxQlFVMHNjVUpCUVhGQ0xFOUJRVThzUjBGQlVDeERRVUZYTEZWQlFVTXNTMEZCUkN4RlFVRlhPMEZCUXk5RExGRkJRVTBzVFVGQlRTeEZRVUZGTEZsQlFVWXNSVUZCVXl4TlFVRlVMRVZCUVZvN1FVRkRRU3hWUVVGTkxGRkJRVTQ3UVVGRFFTeFhRVUZQTEVkQlFWQTdRVUZEUkN4SFFVb3dRaXhEUVVFelFqczdRVUZOUVN4VFFVRlBMSGRDUVVGVExHdENRVUZVTEVWQlFUWkNMRXRCUVRkQ0xFTkJRVkE3UVVGRFJDeERJaXdpWm1sc1pTSTZJbk4wWVdkblpYSXVhbk1pTENKemIzVnlZMlZTYjI5MElqb2lMMVZ6WlhKekwyMWhkSFJ3WlhKeWVTOVRhWFJsY3k5d2IzQnRiM1JwYjI0aUxDSnpiM1Z5WTJWelEyOXVkR1Z1ZENJNld5SnBiWEJ2Y25RZ2RHbHRaV3hwYm1VZ1puSnZiU0FuTGk5MGFXMWxiR2x1WlNjN1hHNXBiWEJ2Y25RZ2V5QnBjMDUxYlNCOUlHWnliMjBnSnk0dmRYUnBiSE1uTzF4dVhHNWpiMjV6ZENCRVJVWkJWVXhVWDBsT1ZFVlNWa0ZNSUQwZ01UQXdPMXh1WEc1bGVIQnZjblFnWkdWbVlYVnNkQ0FvZEhkbFpXNXpMQ0J3Y205d2N5a2dQVDRnZTF4dUlDQmpiMjV6ZENCd2NtOXdjMGx6UkhWeVlYUnBiMjRnUFNCcGMwNTFiU2h3Y205d2N5azdYRzRnSUdOdmJuTjBJR2x1ZEdWeWRtRnNJRDBnY0hKdmNITkpjMFIxY21GMGFXOXVJRDhnY0hKdmNITWdPaUJ3Y205d2N5QS9JSEJ5YjNCekxtbHVkR1Z5ZG1Gc0lIeDhJRVJGUmtGVlRGUmZTVTVVUlZKV1FVd2dPaUJFUlVaQlZVeFVYMGxPVkVWU1ZrRk1PMXh1SUNCc1pYUWdZWFFnUFNBd08xeHVJQ0JqYjI1emRDQjBhVzFsYkdsdVpVUmxabWx1YVhScGIyNGdQU0IwZDJWbGJuTXViV0Z3S0NoMGQyVmxiaWtnUFQ0Z2UxeHVJQ0FnSUdOdmJuTjBJR1JsWmlBOUlIc2dkSGRsWlc0c0lHRjBJSDA3WEc0Z0lDQWdZWFFnS3owZ2FXNTBaWEoyWVd3N1hHNGdJQ0FnY21WMGRYSnVJR1JsWmp0Y2JpQWdmU2s3WEc1Y2JpQWdjbVYwZFhKdUlIUnBiV1ZzYVc1bEtIUnBiV1ZzYVc1bFJHVm1hVzVwZEdsdmJpd2djSEp2Y0hNcE8xeHVmVHNpWFgwPVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvaW5jL3N0YWdnZXIuanNcbiAqKiBtb2R1bGUgaWQgPSAxMFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9O1xuXG5leHBvcnRzLmRlZmF1bHQgPSB0aW1lbGluZTtcblxudmFyIF9Ud2VlbiA9IHJlcXVpcmUoJy4uL2FjdGlvbnMvVHdlZW4nKTtcblxudmFyIF9Ud2VlbjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9Ud2Vlbik7XG5cbnZhciBfcHJlc2V0RWFzaW5nID0gcmVxdWlyZSgnLi4vYWN0aW9ucy9lYXNpbmcvcHJlc2V0LWVhc2luZycpO1xuXG52YXIgX3ByZXNldEVhc2luZzIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9wcmVzZXRFYXNpbmcpO1xuXG52YXIgX2NhbGMgPSByZXF1aXJlKCcuL2NhbGMnKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuLypcbiAgQHBhcmFtIFthcnJheV1cbiAgICBTZXF1ZW50aWFsIGFycmF5IG9mIHR3ZWVucywgZWFjaCBpdGVtIGNhbiBiZSBhIHR3ZWVuIG9yIGRlZmluaXRpb24gb2JqOlxuXG4gICAgW1xuICAgICAgbmV3IFR3ZWVuKCksXG4gICAgICBzdGFnZ2VyKCksXG4gICAgICB0aW1lbGluZSgpLFxuICAgICAge1xuICAgICAgICB0d2VlbjogbmV3IFR3ZWVuKCksXG4gICAgICAgIGF0OiAxMDAsXG4gICAgICAgIG9mZnNldDogXCIrPTEwMFwiXG4gICAgICB9XG4gICAgXVxuKi9cbnZhciBhbmFseXplID0gZnVuY3Rpb24gKGRlZnMpIHtcbiAgdmFyIHRpbWVsaW5lID0gW107XG4gIHZhciBudW1EZWZzID0gZGVmcy5sZW5ndGg7XG4gIHZhciBjdXJyZW50UGxheWhlYWQgPSAwO1xuXG4gIHZhciBfbG9vcCA9IGZ1bmN0aW9uIChpKSB7XG4gICAgdmFyIGRlZiA9IGRlZnNbaV07XG4gICAgdmFyIGRlZklzT2JqID0gZGVmLnR3ZWVuID8gdHJ1ZSA6IGZhbHNlO1xuICAgIHZhciB0d2VlbiA9IGRlZklzT2JqID8gZGVmLnR3ZWVuIDogZGVmO1xuXG4gICAgaWYgKGRlZklzT2JqKSB7XG4gICAgICBpZiAoZGVmLm9mZnNldCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGN1cnJlbnRQbGF5aGVhZCA9ICgwLCBfY2FsYy5yZWxhdGl2ZVZhbHVlKShjdXJyZW50UGxheWhlYWQsIGRlZi5vZmZzZXQpO1xuICAgICAgfSBlbHNlIGlmIChkZWYuYXQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBjdXJyZW50UGxheWhlYWQgPSBkZWYuYXQ7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdmFyIGR1cmF0aW9uID0gMDtcbiAgICBmb3IgKHZhciBrZXkgaW4gdHdlZW4udmFsdWVzKSB7XG4gICAgICBpZiAodHdlZW4udmFsdWVzLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgdmFyIHZhbHVlID0gdHdlZW4udmFsdWVzW2tleV07XG4gICAgICAgIGR1cmF0aW9uID0gTWF0aC5tYXgoZHVyYXRpb24sIHZhbHVlLmR1cmF0aW9uKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aW1lbGluZS5wdXNoKHtcbiAgICAgIGZyb206IGN1cnJlbnRQbGF5aGVhZCxcbiAgICAgIGR1cmF0aW9uOiBkdXJhdGlvbixcbiAgICAgIGZpcmU6IGZ1bmN0aW9uICh0aW1lKSB7XG4gICAgICAgIHJldHVybiB0d2Vlbi5zZWVrVGltZSh0aW1lKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGN1cnJlbnRQbGF5aGVhZCArPSBkdXJhdGlvbjtcbiAgfTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IG51bURlZnM7IGkrKykge1xuICAgIF9sb29wKGkpO1xuICB9XG5cbiAgcmV0dXJuIHsgdG90YWxUaW1lOiBjdXJyZW50UGxheWhlYWQsIHRpbWVsaW5lOiB0aW1lbGluZSB9O1xufTtcblxudmFyIHNldFR3ZWVucyA9IGZ1bmN0aW9uIChfcmVmKSB7XG4gIHZhciB0aW1lbGluZSA9IF9yZWYudGltZWxpbmU7XG4gIHZhciB0aW1lbGluZUxlbmd0aCA9IF9yZWYudGltZWxpbmVMZW5ndGg7XG4gIHZhciB2YWx1ZXMgPSBfcmVmLnZhbHVlcztcbiAgdmFyIGR1cmF0aW9uID0gX3JlZi5kdXJhdGlvbjtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHRpbWVsaW5lTGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgX3R3ZWVuID0gdGltZWxpbmVbaV07XG4gICAgdmFyIHR3ZWVuVGltZSA9IHZhbHVlcy5wLmN1cnJlbnQgKiBkdXJhdGlvbiAtIF90d2Vlbi5mcm9tO1xuXG4gICAgaWYgKHR3ZWVuVGltZSA+PSAtNTAgJiYgdHdlZW5UaW1lIDw9IF90d2Vlbi5kdXJhdGlvbiArIDUwKSB7XG4gICAgICBfdHdlZW4uZmlyZSh0d2VlblRpbWUpO1xuICAgIH1cbiAgfVxufTtcblxuZnVuY3Rpb24gdGltZWxpbmUoZGVmKSB7XG4gIHZhciBwcm9wcyA9IGFyZ3VtZW50cy5sZW5ndGggPD0gMSB8fCBhcmd1bWVudHNbMV0gPT09IHVuZGVmaW5lZCA/IHt9IDogYXJndW1lbnRzWzFdO1xuXG4gIHZhciBfYW5hbHl6ZSA9IGFuYWx5emUoZGVmKTtcblxuICB2YXIgdG90YWxUaW1lID0gX2FuYWx5emUudG90YWxUaW1lO1xuICB2YXIgdGltZWxpbmUgPSBfYW5hbHl6ZS50aW1lbGluZTtcblxuXG4gIHJldHVybiBuZXcgX1R3ZWVuMi5kZWZhdWx0KF9leHRlbmRzKHtcbiAgICBlYXNlOiBfcHJlc2V0RWFzaW5nMi5kZWZhdWx0LmxpbmVhclxuICB9LCBwcm9wcywge1xuICAgIGR1cmF0aW9uOiB0b3RhbFRpbWUsXG4gICAgdmFsdWVzOiB7XG4gICAgICBwOiB7IGZyb206IDAsIHRvOiAxIH1cbiAgICB9LFxuICAgIHRpbWVsaW5lOiB0aW1lbGluZSxcbiAgICB0aW1lbGluZUxlbmd0aDogdGltZWxpbmUubGVuZ3RoLFxuICAgIG9uUmVuZGVyOiBzZXRUd2VlbnNcbiAgfSkpO1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluTnlZeTlwYm1NdmRHbHRaV3hwYm1VdWFuTWlYU3dpYm1GdFpYTWlPbHRkTENKdFlYQndhVzVuY3lJNklqczdPenM3TzJ0Q1FXOUZkMElzVVRzN1FVRndSWGhDT3pzN08wRkJRMEU3T3pzN1FVRkRRVHM3T3pzN096czdPenM3T3pzN096czdPenRCUVdsQ1FTeEpRVUZOTEZWQlFWVXNWVUZCUXl4SlFVRkVMRVZCUVZVN1FVRkRlRUlzVFVGQlRTeFhRVUZYTEVWQlFXcENPMEZCUTBFc1RVRkJUU3hWUVVGVkxFdEJRVXNzVFVGQmNrSTdRVUZEUVN4TlFVRkpMR3RDUVVGclFpeERRVUYwUWpzN1FVRklkMElzZDBKQlMyWXNRMEZNWlR0QlFVMTBRaXhSUVVGTkxFMUJRVTBzUzBGQlN5eERRVUZNTEVOQlFWbzdRVUZEUVN4UlFVRk5MRmRCUVZjc1NVRkJTU3hMUVVGS0xFZEJRVmtzU1VGQldpeEhRVUZ0UWl4TFFVRndRenRCUVVOQkxGRkJRVTBzVVVGQlV5eFJRVUZFTEVkQlFXRXNTVUZCU1N4TFFVRnFRaXhIUVVGNVFpeEhRVUYyUXpzN1FVRkZRU3hSUVVGSkxGRkJRVW9zUlVGQll6dEJRVU5hTEZWQlFVa3NTVUZCU1N4TlFVRktMRXRCUVdVc1UwRkJia0lzUlVGQk9FSTdRVUZETlVJc01FSkJRV3RDTEhsQ1FVRmpMR1ZCUVdRc1JVRkJLMElzU1VGQlNTeE5RVUZ1UXl4RFFVRnNRanRCUVVORUxFOUJSa1FzVFVGRlR5eEpRVUZKTEVsQlFVa3NSVUZCU2l4TFFVRlhMRk5CUVdZc1JVRkJNRUk3UVVGREwwSXNNRUpCUVd0Q0xFbEJRVWtzUlVGQmRFSTdRVUZEUkR0QlFVTkdPenRCUVVWRUxGRkJRVWtzVjBGQlZ5eERRVUZtTzBGQlEwRXNVMEZCU3l4SlFVRkpMRWRCUVZRc1NVRkJaMElzVFVGQlRTeE5RVUYwUWl4RlFVRTRRanRCUVVNMVFpeFZRVUZKTEUxQlFVMHNUVUZCVGl4RFFVRmhMR05CUVdJc1EwRkJORUlzUjBGQk5VSXNRMEZCU2l4RlFVRnpRenRCUVVOd1F5eFpRVUZOTEZGQlFWRXNUVUZCVFN4TlFVRk9MRU5CUVdFc1IwRkJZaXhEUVVGa08wRkJRMEVzYlVKQlFWY3NTMEZCU3l4SFFVRk1MRU5CUVZNc1VVRkJWQ3hGUVVGdFFpeE5RVUZOTEZGQlFYcENMRU5CUVZnN1FVRkRSRHRCUVVOR096dEJRVVZFTEdGQlFWTXNTVUZCVkN4RFFVRmpPMEZCUTFvc1dVRkJUU3hsUVVSTk8wRkJSVm9zWjBKQlFWVXNVVUZHUlR0QlFVZGFMRmxCUVUwc1ZVRkJReXhKUVVGRU8wRkJRVUVzWlVGQlZTeE5RVUZOTEZGQlFVNHNRMEZCWlN4SlFVRm1MRU5CUVZZN1FVRkJRVHRCUVVoTkxFdEJRV1E3TzBGQlRVRXNkVUpCUVcxQ0xGRkJRVzVDTzBGQmFFTnpRanM3UVVGTGVFSXNUMEZCU3l4SlFVRkpMRWxCUVVrc1EwRkJZaXhGUVVGblFpeEpRVUZKTEU5QlFYQkNMRVZCUVRaQ0xFZEJRVGRDTEVWQlFXdERPMEZCUVVFc1ZVRkJla0lzUTBGQmVVSTdRVUUwUW1wRE96dEJRVVZFTEZOQlFVOHNSVUZCUlN4WFFVRlhMR1ZCUVdJc1JVRkJPRUlzYTBKQlFUbENMRVZCUVZBN1FVRkRSQ3hEUVhCRFJEczdRVUZ6UTBFc1NVRkJUU3haUVVGWkxHZENRVUZ2UkR0QlFVRkJMRTFCUVdwRUxGRkJRV2xFTEZGQlFXcEVMRkZCUVdsRU8wRkJRVUVzVFVGQmRrTXNZMEZCZFVNc1VVRkJka01zWTBGQmRVTTdRVUZCUVN4TlFVRjJRaXhOUVVGMVFpeFJRVUYyUWl4TlFVRjFRanRCUVVGQkxFMUJRV1lzVVVGQlpTeFJRVUZtTEZGQlFXVTdPMEZCUTNCRkxFOUJRVXNzU1VGQlNTeEpRVUZKTEVOQlFXSXNSVUZCWjBJc1NVRkJTU3hqUVVGd1FpeEZRVUZ2UXl4SFFVRndReXhGUVVGNVF6dEJRVU4yUXl4UlFVRk5MRk5CUVZFc1UwRkJVeXhEUVVGVUxFTkJRV1E3UVVGRFFTeFJRVUZOTEZsQlFXRXNUMEZCVHl4RFFVRlFMRU5CUVZNc1QwRkJWQ3hIUVVGdFFpeFJRVUZ3UWl4SFFVRm5ReXhQUVVGTkxFbEJRWGhFT3p0QlFVVkJMRkZCUVVrc1lVRkJZU3hEUVVGRExFVkJRV1FzU1VGQmIwSXNZVUZCWVN4UFFVRk5MRkZCUVU0c1IwRkJhVUlzUlVGQmRFUXNSVUZCTUVRN1FVRkRlRVFzWVVGQlRTeEpRVUZPTEVOQlFWY3NVMEZCV0R0QlFVTkVPMEZCUTBZN1FVRkRSaXhEUVZSRU96dEJRVmRsTEZOQlFWTXNVVUZCVkN4RFFVRnJRaXhIUVVGc1FpeEZRVUZ0UXp0QlFVRkJMRTFCUVZvc1MwRkJXU3g1UkVGQlNpeEZRVUZKT3p0QlFVRkJMR2xDUVVOb1FpeFJRVUZSTEVkQlFWSXNRMEZFWjBJN08wRkJRVUVzVFVGRGVFTXNVMEZFZDBNc1dVRkRlRU1zVTBGRWQwTTdRVUZCUVN4TlFVTTNRaXhSUVVRMlFpeFpRVU0zUWl4UlFVUTJRanM3TzBGQlIyaEVMRk5CUVU4N1FVRkRUQ3hWUVVGTkxIVkNRVUZQTzBGQlJGSXNTMEZGUml4TFFVWkZPMEZCUjB3c1kwRkJWU3hUUVVoTU8wRkJTVXdzV1VGQlVUdEJRVU5PTEZOQlFVY3NSVUZCUlN4TlFVRk5MRU5CUVZJc1JVRkJWeXhKUVVGSkxFTkJRV1k3UVVGRVJ5eExRVXBJTzBGQlQwd3NZMEZCVlN4UlFWQk1PMEZCVVV3c2IwSkJRV2RDTEZOQlFWTXNUVUZTY0VJN1FVRlRUQ3hqUVVGVk8wRkJWRXdzUzBGQlVEdEJRVmRFSWl3aVptbHNaU0k2SW5ScGJXVnNhVzVsTG1weklpd2ljMjkxY21ObFVtOXZkQ0k2SWk5VmMyVnljeTl0WVhSMGNHVnljbmt2VTJsMFpYTXZjRzl3Ylc5MGFXOXVJaXdpYzI5MWNtTmxjME52Ym5SbGJuUWlPbHNpYVcxd2IzSjBJRlIzWldWdUlHWnliMjBnSnk0dUwyRmpkR2x2Ym5NdlZIZGxaVzRuTzF4dWFXMXdiM0owSUdWaGMybHVaeUJtY205dElDY3VMaTloWTNScGIyNXpMMlZoYzJsdVp5OXdjbVZ6WlhRdFpXRnphVzVuSnp0Y2JtbHRjRzl5ZENCN0lISmxiR0YwYVhabFZtRnNkV1VnZlNCbWNtOXRJQ2N1TDJOaGJHTW5PMXh1WEc0dktseHVJQ0JBY0dGeVlXMGdXMkZ5Y21GNVhWeHVJQ0FnSUZObGNYVmxiblJwWVd3Z1lYSnlZWGtnYjJZZ2RIZGxaVzV6TENCbFlXTm9JR2wwWlcwZ1kyRnVJR0psSUdFZ2RIZGxaVzRnYjNJZ1pHVm1hVzVwZEdsdmJpQnZZbW82WEc1Y2JpQWdJQ0JiWEc0Z0lDQWdJQ0J1WlhjZ1ZIZGxaVzRvS1N4Y2JpQWdJQ0FnSUhOMFlXZG5aWElvS1N4Y2JpQWdJQ0FnSUhScGJXVnNhVzVsS0Nrc1hHNGdJQ0FnSUNCN1hHNGdJQ0FnSUNBZ0lIUjNaV1Z1T2lCdVpYY2dWSGRsWlc0b0tTeGNiaUFnSUNBZ0lDQWdZWFE2SURFd01DeGNiaUFnSUNBZ0lDQWdiMlptYzJWME9pQmNJaXM5TVRBd1hDSmNiaUFnSUNBZ0lIMWNiaUFnSUNCZFhHNHFMMXh1WTI5dWMzUWdZVzVoYkhsNlpTQTlJQ2hrWldaektTQTlQaUI3WEc0Z0lHTnZibk4wSUhScGJXVnNhVzVsSUQwZ1cxMDdYRzRnSUdOdmJuTjBJRzUxYlVSbFpuTWdQU0JrWldaekxteGxibWQwYUR0Y2JpQWdiR1YwSUdOMWNuSmxiblJRYkdGNWFHVmhaQ0E5SURBN1hHNWNiaUFnWm05eUlDaHNaWFFnYVNBOUlEQTdJR2tnUENCdWRXMUVaV1p6T3lCcEt5c3BJSHRjYmlBZ0lDQmpiMjV6ZENCa1pXWWdQU0JrWldaelcybGRPMXh1SUNBZ0lHTnZibk4wSUdSbFprbHpUMkpxSUQwZ1pHVm1MblIzWldWdUlEOGdkSEoxWlNBNklHWmhiSE5sTzF4dUlDQWdJR052Ym5OMElIUjNaV1Z1SUQwZ0tHUmxaa2x6VDJKcUtTQS9JR1JsWmk1MGQyVmxiaUE2SUdSbFpqdGNibHh1SUNBZ0lHbG1JQ2hrWldaSmMwOWlhaWtnZTF4dUlDQWdJQ0FnYVdZZ0tHUmxaaTV2Wm1aelpYUWdJVDA5SUhWdVpHVm1hVzVsWkNrZ2UxeHVJQ0FnSUNBZ0lDQmpkWEp5Wlc1MFVHeGhlV2hsWVdRZ1BTQnlaV3hoZEdsMlpWWmhiSFZsS0dOMWNuSmxiblJRYkdGNWFHVmhaQ3dnWkdWbUxtOW1abk5sZENrN1hHNGdJQ0FnSUNCOUlHVnNjMlVnYVdZZ0tHUmxaaTVoZENBaFBUMGdkVzVrWldacGJtVmtLU0I3WEc0Z0lDQWdJQ0FnSUdOMWNuSmxiblJRYkdGNWFHVmhaQ0E5SUdSbFppNWhkRHRjYmlBZ0lDQWdJSDFjYmlBZ0lDQjlYRzVjYmlBZ0lDQnNaWFFnWkhWeVlYUnBiMjRnUFNBd08xeHVJQ0FnSUdadmNpQW9iR1YwSUd0bGVTQnBiaUIwZDJWbGJpNTJZV3gxWlhNcElIdGNiaUFnSUNBZ0lHbG1JQ2gwZDJWbGJpNTJZV3gxWlhNdWFHRnpUM2R1VUhKdmNHVnlkSGtvYTJWNUtTa2dlMXh1SUNBZ0lDQWdJQ0JqYjI1emRDQjJZV3gxWlNBOUlIUjNaV1Z1TG5aaGJIVmxjMXRyWlhsZE8xeHVJQ0FnSUNBZ0lDQmtkWEpoZEdsdmJpQTlJRTFoZEdndWJXRjRLR1IxY21GMGFXOXVMQ0IyWVd4MVpTNWtkWEpoZEdsdmJpazdYRzRnSUNBZ0lDQjlYRzRnSUNBZ2ZWeHVYRzRnSUNBZ2RHbHRaV3hwYm1VdWNIVnphQ2g3WEc0Z0lDQWdJQ0JtY205dE9pQmpkWEp5Wlc1MFVHeGhlV2hsWVdRc1hHNGdJQ0FnSUNCa2RYSmhkR2x2YmpvZ1pIVnlZWFJwYjI0c1hHNGdJQ0FnSUNCbWFYSmxPaUFvZEdsdFpTa2dQVDRnZEhkbFpXNHVjMlZsYTFScGJXVW9kR2x0WlNsY2JpQWdJQ0I5S1R0Y2JseHVJQ0FnSUdOMWNuSmxiblJRYkdGNWFHVmhaQ0FyUFNCa2RYSmhkR2x2Ymp0Y2JpQWdmVnh1WEc0Z0lISmxkSFZ5YmlCN0lIUnZkR0ZzVkdsdFpUb2dZM1Z5Y21WdWRGQnNZWGxvWldGa0xDQjBhVzFsYkdsdVpTQjlPMXh1ZlR0Y2JseHVZMjl1YzNRZ2MyVjBWSGRsWlc1eklEMGdLSHNnZEdsdFpXeHBibVVzSUhScGJXVnNhVzVsVEdWdVozUm9MQ0IyWVd4MVpYTXNJR1IxY21GMGFXOXVJSDBwSUQwK0lIdGNiaUFnWm05eUlDaHNaWFFnYVNBOUlEQTdJR2tnUENCMGFXMWxiR2x1WlV4bGJtZDBhRHNnYVNzcktTQjdYRzRnSUNBZ1kyOXVjM1FnZEhkbFpXNGdQU0IwYVcxbGJHbHVaVnRwWFR0Y2JpQWdJQ0JqYjI1emRDQjBkMlZsYmxScGJXVWdQU0FvZG1Gc2RXVnpMbkF1WTNWeWNtVnVkQ0FxSUdSMWNtRjBhVzl1S1NBdElIUjNaV1Z1TG1aeWIyMDdYRzVjYmlBZ0lDQnBaaUFvZEhkbFpXNVVhVzFsSUQ0OUlDMDFNQ0FtSmlCMGQyVmxibFJwYldVZ1BEMGdkSGRsWlc0dVpIVnlZWFJwYjI0Z0t5QTFNQ2tnZTF4dUlDQWdJQ0FnZEhkbFpXNHVabWx5WlNoMGQyVmxibFJwYldVcE8xeHVJQ0FnSUgxY2JpQWdmVnh1ZlR0Y2JseHVaWGh3YjNKMElHUmxabUYxYkhRZ1puVnVZM1JwYjI0Z2RHbHRaV3hwYm1Vb1pHVm1MQ0J3Y205d2N5QTlJSHQ5S1NCN1hHNGdJR052Ym5OMElIc2dkRzkwWVd4VWFXMWxMQ0IwYVcxbGJHbHVaU0I5SUQwZ1lXNWhiSGw2WlNoa1pXWXBPMXh1WEc0Z0lISmxkSFZ5YmlCdVpYY2dWSGRsWlc0b2UxeHVJQ0FnSUdWaGMyVTZJR1ZoYzJsdVp5NXNhVzVsWVhJc1hHNGdJQ0FnTGk0dWNISnZjSE1zWEc0Z0lDQWdaSFZ5WVhScGIyNDZJSFJ2ZEdGc1ZHbHRaU3hjYmlBZ0lDQjJZV3gxWlhNNklIdGNiaUFnSUNBZ0lIQTZJSHNnWm5KdmJUb2dNQ3dnZEc4NklERWdmVnh1SUNBZ0lIMHNYRzRnSUNBZ2RHbHRaV3hwYm1VNklIUnBiV1ZzYVc1bExGeHVJQ0FnSUhScGJXVnNhVzVsVEdWdVozUm9PaUIwYVcxbGJHbHVaUzVzWlc1bmRHZ3NYRzRnSUNBZ2IyNVNaVzVrWlhJNklITmxkRlIzWldWdWMxeHVJQ0I5S1R0Y2JuMGlYWDA9XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9pbmMvdGltZWxpbmUuanNcbiAqKiBtb2R1bGUgaWQgPSAxMVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG4vKlxuICBPdmVycmlkZSBgZ2V0dGVyYCBhbmQgYHNldHRlcmAgdG8gcmVpbXBsZW1lbnQgdGhlIGludGVyZmFjZSBmb3IgbmV3IGVsZW1lbnQgdHlwZXMuXG5cbiAgU2V0IGAuc3RhdGVNYXBgIGFzIGFuIG9iamVjdCBrZXkvdmFsdWUgbWFwIHRvIHRyYW5zbGF0ZSBpbmNvbWluZyBrZXlzIHRvXG4gIEFQSS1zcGVjaWZpYyBrZXlzLiBGb3IgaW5zdGFuY2UsIHsgeDogJ3RyYW5zbGF0ZVgnIH0uIFxuXG4gIFNldCBgLnZhbHVlVHlwZU1hcGAgYXMgYW4gb2JqZWN0IGtleS92YWx1ZSBtYXAgdG8gcmV0dXJuIGEgdmFsdWUgdHlwZSB3aXRoXG4gIGBnZXRWYWx1ZVR5cGUoa2V5KWAgKGtleSB3aWxsIGJlIG1hcHBlZCBhY2NvcmRpbmcgdG8gYHN0YXRlTWFwYClcbiovXG5cbnZhciBtYXBLZXkgPSBmdW5jdGlvbiAoa2V5LCBtYXApIHtcbiAgcmV0dXJuIG1hcCA/IG1hcFtrZXldIHx8IGtleSA6IGtleTtcbn07XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uIChvcHRpb25zKSB7XG4gIC8qXG4gICAgQWRhcHRlciBpcyBzZXR0ZXIgZnVuY3Rpb25cbiAgICAgQHBhcmFtIFtvYmplY3RdOiBPYmplY3QgdG8gc2V0IHByb3BlcnRpZXMgb25cbiAgICBAcGFyYW0gW29iamVjdF06IEtleS92YWx1ZSBwcm9wZXJ0aWVzIHRvIHNldFxuICAqL1xuICB2YXIgYWRhcHRlciA9IGZ1bmN0aW9uIChlbGVtZW50LCBwcm9wcywgZGF0YSkge1xuICAgIGlmIChvcHRpb25zLnN0YXRlTWFwKSB7XG4gICAgICAvLyBUcmFuc2xhdGUgcHJvcHNcbiAgICAgIGZvciAodmFyIGtleSBpbiBwcm9wcykge1xuICAgICAgICBpZiAocHJvcHMuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgIHZhciBtYXBwZWRLZXkgPSBtYXBLZXkoa2V5LCBvcHRpb25zLnN0YXRlTWFwKTtcblxuICAgICAgICAgIGlmIChtYXBwZWRLZXkgIT09IGtleSkge1xuICAgICAgICAgICAgcHJvcHNbbWFwcGVkS2V5XSA9IHByb3BzW2tleV07XG4gICAgICAgICAgICBkZWxldGUgcHJvcHNba2V5XTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gb3B0aW9ucy5zZXR0ZXIoZWxlbWVudCwgcHJvcHMsIGRhdGEpO1xuICB9O1xuXG4gIGFkYXB0ZXIuZ2V0ID0gZnVuY3Rpb24gKGVsZW1lbnQsIGtleSkge1xuICAgIHJldHVybiBvcHRpb25zLmdldHRlcihlbGVtZW50LCBtYXBLZXkoa2V5LCBvcHRpb25zLnN0YXRlTWFwKSk7XG4gIH07XG4gIGFkYXB0ZXIuY2hlY2tWYWx1ZVR5cGUgPSBmdW5jdGlvbiAoa2V5KSB7XG4gICAgcmV0dXJuIG9wdGlvbnMudmFsdWVUeXBlTWFwID8gb3B0aW9ucy52YWx1ZVR5cGVNYXBbbWFwS2V5KGtleSwgb3B0aW9ucy5zdGF0ZU1hcCldIDogZmFsc2U7XG4gIH07XG4gIGFkYXB0ZXIuZ2V0RWxlbWVudERhdGEgPSBvcHRpb25zLmdldEVsZW1lbnREYXRhO1xuXG4gIHJldHVybiBhZGFwdGVyO1xufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbk55WXk5aFpHRndkR1Z5TDJGa1lYQjBaWEl1YW5NaVhTd2libUZ0WlhNaU9sdGRMQ0p0WVhCd2FXNW5jeUk2SWpzN096czdPenM3T3pzN096dEJRVlZCTEVsQlFVMHNVMEZCVXl4VlFVRkRMRWRCUVVRc1JVRkJUU3hIUVVGT08wRkJRVUVzVTBGQll5eE5RVUZOTEVsQlFVa3NSMEZCU2l4TFFVRlpMRWRCUVd4Q0xFZEJRWGRDTEVkQlFYUkRPMEZCUVVFc1EwRkJaanM3YTBKQlJXVXNWVUZCUXl4UFFVRkVMRVZCUVdFN096czdPenRCUVU4eFFpeE5RVUZOTEZWQlFWVXNWVUZCUXl4UFFVRkVMRVZCUVZVc1MwRkJWaXhGUVVGcFFpeEpRVUZxUWl4RlFVRXdRanRCUVVONFF5eFJRVUZKTEZGQlFWRXNVVUZCV2l4RlFVRnpRanM3UVVGRmNFSXNWMEZCU3l4SlFVRkpMRWRCUVZRc1NVRkJaMElzUzBGQmFFSXNSVUZCZFVJN1FVRkRja0lzV1VGQlNTeE5RVUZOTEdOQlFVNHNRMEZCY1VJc1IwRkJja0lzUTBGQlNpeEZRVUVyUWp0QlFVTTNRaXhqUVVGTkxGbEJRVmtzVDBGQlR5eEhRVUZRTEVWQlFWa3NVVUZCVVN4UlFVRndRaXhEUVVGc1FqczdRVUZGUVN4alFVRkpMR05CUVdNc1IwRkJiRUlzUlVGQmRVSTdRVUZEY2tJc2EwSkJRVTBzVTBGQlRpeEpRVUZ0UWl4TlFVRk5MRWRCUVU0c1EwRkJia0k3UVVGRFFTeHRRa0ZCVHl4TlFVRk5MRWRCUVU0c1EwRkJVRHRCUVVORU8wRkJRMFk3UVVGRFJqdEJRVU5HT3p0QlFVVkVMRmRCUVU4c1VVRkJVU3hOUVVGU0xFTkJRV1VzVDBGQlppeEZRVUYzUWl4TFFVRjRRaXhGUVVFclFpeEpRVUV2UWl4RFFVRlFPMEZCUTBRc1IwRm9Ra1E3TzBGQmEwSkJMRlZCUVZFc1IwRkJVaXhIUVVGakxGVkJRVU1zVDBGQlJDeEZRVUZWTEVkQlFWWTdRVUZCUVN4WFFVRnJRaXhSUVVGUkxFMUJRVklzUTBGQlpTeFBRVUZtTEVWQlFYZENMRTlCUVU4c1IwRkJVQ3hGUVVGWkxGRkJRVkVzVVVGQmNFSXNRMEZCZUVJc1EwRkJiRUk3UVVGQlFTeEhRVUZrTzBGQlEwRXNWVUZCVVN4alFVRlNMRWRCUVhsQ0xGVkJRVU1zUjBGQlJEdEJRVUZCTEZkQlFWTXNVVUZCVVN4WlFVRlNMRWRCUVhWQ0xGRkJRVkVzV1VGQlVpeERRVUZ4UWl4UFFVRlBMRWRCUVZBc1JVRkJXU3hSUVVGUkxGRkJRWEJDTEVOQlFYSkNMRU5CUVhaQ0xFZEJRVFpGTEV0QlFYUkdPMEZCUVVFc1IwRkJla0k3UVVGRFFTeFZRVUZSTEdOQlFWSXNSMEZCZVVJc1VVRkJVU3hqUVVGcVF6czdRVUZGUVN4VFFVRlBMRTlCUVZBN1FVRkRSQ3hESWl3aVptbHNaU0k2SW1Ga1lYQjBaWEl1YW5NaUxDSnpiM1Z5WTJWU2IyOTBJam9pTDFWelpYSnpMMjFoZEhSd1pYSnllUzlUYVhSbGN5OXdiM0J0YjNScGIyNGlMQ0p6YjNWeVkyVnpRMjl1ZEdWdWRDSTZXeUl2S2x4dUlDQlBkbVZ5Y21sa1pTQmdaMlYwZEdWeVlDQmhibVFnWUhObGRIUmxjbUFnZEc4Z2NtVnBiWEJzWlcxbGJuUWdkR2hsSUdsdWRHVnlabUZqWlNCbWIzSWdibVYzSUdWc1pXMWxiblFnZEhsd1pYTXVYRzVjYmlBZ1UyVjBJR0F1YzNSaGRHVk5ZWEJnSUdGeklHRnVJRzlpYW1WamRDQnJaWGt2ZG1Gc2RXVWdiV0Z3SUhSdklIUnlZVzV6YkdGMFpTQnBibU52YldsdVp5QnJaWGx6SUhSdlhHNGdJRUZRU1MxemNHVmphV1pwWXlCclpYbHpMaUJHYjNJZ2FXNXpkR0Z1WTJVc0lIc2dlRG9nSjNSeVlXNXpiR0YwWlZnbklIMHVJRnh1WEc0Z0lGTmxkQ0JnTG5aaGJIVmxWSGx3WlUxaGNHQWdZWE1nWVc0Z2IySnFaV04wSUd0bGVTOTJZV3gxWlNCdFlYQWdkRzhnY21WMGRYSnVJR0VnZG1Gc2RXVWdkSGx3WlNCM2FYUm9YRzRnSUdCblpYUldZV3gxWlZSNWNHVW9hMlY1S1dBZ0tHdGxlU0IzYVd4c0lHSmxJRzFoY0hCbFpDQmhZMk52Y21ScGJtY2dkRzhnWUhOMFlYUmxUV0Z3WUNsY2Jpb3ZYRzVjYm1OdmJuTjBJRzFoY0V0bGVTQTlJQ2hyWlhrc0lHMWhjQ2tnUFQ0Z2JXRndJRDhnYldGd1cydGxlVjBnZkh3Z2EyVjVJRG9nYTJWNU8xeHVYRzVsZUhCdmNuUWdaR1ZtWVhWc2RDQW9iM0IwYVc5dWN5a2dQVDRnZTF4dUlDQXZLbHh1SUNBZ0lFRmtZWEIwWlhJZ2FYTWdjMlYwZEdWeUlHWjFibU4wYVc5dVhHNWNiaUFnSUNCQWNHRnlZVzBnVzI5aWFtVmpkRjA2SUU5aWFtVmpkQ0IwYnlCelpYUWdjSEp2Y0dWeWRHbGxjeUJ2Ymx4dUlDQWdJRUJ3WVhKaGJTQmJiMkpxWldOMFhUb2dTMlY1TDNaaGJIVmxJSEJ5YjNCbGNuUnBaWE1nZEc4Z2MyVjBYRzRnSUNvdlhHNGdJR052Ym5OMElHRmtZWEIwWlhJZ1BTQW9aV3hsYldWdWRDd2djSEp2Y0hNc0lHUmhkR0VwSUQwK0lIdGNiaUFnSUNCcFppQW9iM0IwYVc5dWN5NXpkR0YwWlUxaGNDa2dlMXh1SUNBZ0lDQWdMeThnVkhKaGJuTnNZWFJsSUhCeWIzQnpYRzRnSUNBZ0lDQm1iM0lnS0d4bGRDQnJaWGtnYVc0Z2NISnZjSE1wSUh0Y2JpQWdJQ0FnSUNBZ2FXWWdLSEJ5YjNCekxtaGhjMDkzYmxCeWIzQmxjblI1S0d0bGVTa3BJSHRjYmlBZ0lDQWdJQ0FnSUNCamIyNXpkQ0J0WVhCd1pXUkxaWGtnUFNCdFlYQkxaWGtvYTJWNUxDQnZjSFJwYjI1ekxuTjBZWFJsVFdGd0tUdGNiaUFnSUNBZ0lDQWdJQ0JjYmlBZ0lDQWdJQ0FnSUNCcFppQW9iV0Z3Y0dWa1MyVjVJQ0U5UFNCclpYa3BJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lIQnliM0J6VzIxaGNIQmxaRXRsZVYwZ1BTQndjbTl3YzF0clpYbGRPMXh1SUNBZ0lDQWdJQ0FnSUNBZ1pHVnNaWFJsSUhCeWIzQnpXMnRsZVYwN1hHNGdJQ0FnSUNBZ0lDQWdmVnh1SUNBZ0lDQWdJQ0I5WEc0Z0lDQWdJQ0I5WEc0Z0lDQWdmVnh1WEc0Z0lDQWdjbVYwZFhKdUlHOXdkR2x2Ym5NdWMyVjBkR1Z5S0dWc1pXMWxiblFzSUhCeWIzQnpMQ0JrWVhSaEtUdGNiaUFnZlR0Y2JseHVJQ0JoWkdGd2RHVnlMbWRsZENBOUlDaGxiR1Z0Wlc1MExDQnJaWGtwSUQwK0lHOXdkR2x2Ym5NdVoyVjBkR1Z5S0dWc1pXMWxiblFzSUcxaGNFdGxlU2hyWlhrc0lHOXdkR2x2Ym5NdWMzUmhkR1ZOWVhBcEtUdGNiaUFnWVdSaGNIUmxjaTVqYUdWamExWmhiSFZsVkhsd1pTQTlJQ2hyWlhrcElEMCtJRzl3ZEdsdmJuTXVkbUZzZFdWVWVYQmxUV0Z3SUQ4Z2IzQjBhVzl1Y3k1MllXeDFaVlI1Y0dWTllYQmJiV0Z3UzJWNUtHdGxlU3dnYjNCMGFXOXVjeTV6ZEdGMFpVMWhjQ2xkSURvZ1ptRnNjMlU3WEc0Z0lHRmtZWEIwWlhJdVoyVjBSV3hsYldWdWRFUmhkR0VnUFNCdmNIUnBiMjV6TG1kbGRFVnNaVzFsYm5SRVlYUmhPMXh1WEc0Z0lISmxkSFZ5YmlCaFpHRndkR1Z5TzF4dWZUc2lYWDA9XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9hZGFwdGVyL2FkYXB0ZXIuanNcbiAqKiBtb2R1bGUgaWQgPSAxMlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0cy5zZXR0ZXIgPSBleHBvcnRzLmdldHRlciA9IHVuZGVmaW5lZDtcblxudmFyIF9hZGFwdGVyID0gcmVxdWlyZSgnLi9hZGFwdGVyJyk7XG5cbnZhciBfYWRhcHRlcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9hZGFwdGVyKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxudmFyIGdldHRlciA9IGV4cG9ydHMuZ2V0dGVyID0gZnVuY3Rpb24gKGVsZW1lbnQsIGtleSkge1xuICByZXR1cm4gZWxlbWVudC5nZXRBdHRyaWJ1dGUoa2V5KTtcbn07XG52YXIgc2V0dGVyID0gZXhwb3J0cy5zZXR0ZXIgPSBmdW5jdGlvbiAoZWxlbWVudCwgcHJvcHMpIHtcbiAgZm9yICh2YXIga2V5IGluIHByb3BzKSB7XG4gICAgaWYgKHByb3BzLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKGtleSwgcHJvcHNba2V5XSk7XG4gICAgfVxuICB9XG59O1xuXG5leHBvcnRzLmRlZmF1bHQgPSAoMCwgX2FkYXB0ZXIyLmRlZmF1bHQpKHsgZ2V0dGVyOiBnZXR0ZXIsIHNldHRlcjogc2V0dGVyIH0pO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluTnlZeTloWkdGd2RHVnlMMkYwZEhJdFlXUmhjSFJsY2k1cWN5SmRMQ0p1WVcxbGN5STZXMTBzSW0xaGNIQnBibWR6SWpvaU96czdPenRCUVVGQk96czdPenM3UVVGRlR5eEpRVUZOTERCQ1FVRlRMRlZCUVVNc1QwRkJSQ3hGUVVGVkxFZEJRVlk3UVVGQlFTeFRRVUZyUWl4UlFVRlJMRmxCUVZJc1EwRkJjVUlzUjBGQmNrSXNRMEZCYkVJN1FVRkJRU3hEUVVGbU8wRkJRMEVzU1VGQlRTd3dRa0ZCVXl4VlFVRkRMRTlCUVVRc1JVRkJWU3hMUVVGV0xFVkJRVzlDTzBGQlEzaERMRTlCUVVzc1NVRkJTU3hIUVVGVUxFbEJRV2RDTEV0QlFXaENMRVZCUVhWQ08wRkJRM0pDTEZGQlFVa3NUVUZCVFN4alFVRk9MRU5CUVhGQ0xFZEJRWEpDTEVOQlFVb3NSVUZCSzBJN1FVRkROMElzWTBGQlVTeFpRVUZTTEVOQlFYRkNMRWRCUVhKQ0xFVkJRVEJDTEUxQlFVMHNSMEZCVGl4RFFVRXhRanRCUVVORU8wRkJRMFk3UVVGRFJpeERRVTVOT3p0clFrRlJVU3gxUWtGQll5eEZRVUZGTEdOQlFVWXNSVUZCVlN4alFVRldMRVZCUVdRc1F5SXNJbVpwYkdVaU9pSmhkSFJ5TFdGa1lYQjBaWEl1YW5NaUxDSnpiM1Z5WTJWU2IyOTBJam9pTDFWelpYSnpMMjFoZEhSd1pYSnllUzlUYVhSbGN5OXdiM0J0YjNScGIyNGlMQ0p6YjNWeVkyVnpRMjl1ZEdWdWRDSTZXeUpwYlhCdmNuUWdZM0psWVhSbFFXUmhjSFJsY2lCbWNtOXRJQ2N1TDJGa1lYQjBaWEluTzF4dVhHNWxlSEJ2Y25RZ1kyOXVjM1FnWjJWMGRHVnlJRDBnS0dWc1pXMWxiblFzSUd0bGVTa2dQVDRnWld4bGJXVnVkQzVuWlhSQmRIUnlhV0oxZEdVb2EyVjVLVHRjYm1WNGNHOXlkQ0JqYjI1emRDQnpaWFIwWlhJZ1BTQW9aV3hsYldWdWRDd2djSEp2Y0hNcElEMCtJSHRjYmlBZ1ptOXlJQ2hzWlhRZ2EyVjVJR2x1SUhCeWIzQnpLU0I3WEc0Z0lDQWdhV1lnS0hCeWIzQnpMbWhoYzA5M2JsQnliM0JsY25SNUtHdGxlU2twSUh0Y2JpQWdJQ0FnSUdWc1pXMWxiblF1YzJWMFFYUjBjbWxpZFhSbEtHdGxlU3dnY0hKdmNITmJhMlY1WFNrN1hHNGdJQ0FnZlZ4dUlDQjlYRzU5TzF4dVhHNWxlSEJ2Y25RZ1pHVm1ZWFZzZENCamNtVmhkR1ZCWkdGd2RHVnlLSHNnWjJWMGRHVnlMQ0J6WlhSMFpYSWdmU2s3WEc0aVhYMD1cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2FkYXB0ZXIvYXR0ci1hZGFwdGVyLmpzXG4gKiogbW9kdWxlIGlkID0gMTNcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF9zdGF0ZU1hcCA9IHJlcXVpcmUoJy4vY3NzL3N0YXRlLW1hcCcpO1xuXG52YXIgX3N0YXRlTWFwMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3N0YXRlTWFwKTtcblxudmFyIF92YWx1ZVR5cGVNYXAgPSByZXF1aXJlKCcuL2Nzcy92YWx1ZS10eXBlLW1hcCcpO1xuXG52YXIgX3ZhbHVlVHlwZU1hcDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF92YWx1ZVR5cGVNYXApO1xuXG52YXIgX2J1aWxkID0gcmVxdWlyZSgnLi9jc3MvYnVpbGQnKTtcblxudmFyIF9idWlsZDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9idWlsZCk7XG5cbnZhciBfcHJlZml4ZXIgPSByZXF1aXJlKCcuL2Nzcy9wcmVmaXhlcicpO1xuXG52YXIgX3ByZWZpeGVyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3ByZWZpeGVyKTtcblxudmFyIF90cmFuc2Zvcm1Qcm9wcyA9IHJlcXVpcmUoJy4vY3NzL3RyYW5zZm9ybS1wcm9wcycpO1xuXG52YXIgX3RyYW5zZm9ybVByb3BzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3RyYW5zZm9ybVByb3BzKTtcblxudmFyIF9hZGFwdGVyID0gcmVxdWlyZSgnLi9hZGFwdGVyJyk7XG5cbnZhciBfYWRhcHRlcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9hZGFwdGVyKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZXhwb3J0cy5kZWZhdWx0ID0gKDAsIF9hZGFwdGVyMi5kZWZhdWx0KSh7XG4gIGdldHRlcjogZnVuY3Rpb24gKGVsZW1lbnQsIGtleSkge1xuICAgIHJldHVybiAhX3RyYW5zZm9ybVByb3BzMi5kZWZhdWx0W2tleV0gPyB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShlbGVtZW50LCBudWxsKVsoMCwgX3ByZWZpeGVyMi5kZWZhdWx0KShrZXkpXSA6IF92YWx1ZVR5cGVNYXAyLmRlZmF1bHRba2V5XS5kZWZhdWx0UHJvcHMuY3VycmVudCB8fCAwO1xuICB9LFxuICBzZXR0ZXI6IGZ1bmN0aW9uIChlbGVtZW50LCBwcm9wcykge1xuICAgIHJldHVybiBlbGVtZW50LnN0eWxlLmNzc1RleHQgKz0gKDAsIF9idWlsZDIuZGVmYXVsdCkocHJvcHMpO1xuICB9LFxuICB2YWx1ZVR5cGVNYXA6IF92YWx1ZVR5cGVNYXAyLmRlZmF1bHQsXG4gIHN0YXRlTWFwOiBfc3RhdGVNYXAyLmRlZmF1bHRcbn0pO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluTnlZeTloWkdGd2RHVnlMMk56Y3kxaFpHRndkR1Z5TG1weklsMHNJbTVoYldWeklqcGJYU3dpYldGd2NHbHVaM01pT2lJN096czdRVUZCUVRzN096dEJRVU5CT3pzN08wRkJRMEU3T3pzN1FVRkRRVHM3T3p0QlFVTkJPenM3TzBGQlEwRTdPenM3T3p0clFrRkZaU3gxUWtGQll6dEJRVU16UWl4VlFVRlJMRlZCUVVNc1QwRkJSQ3hGUVVGVkxFZEJRVllzUlVGQmEwSTdRVUZEZUVJc1YwRkJVU3hEUVVGRExIbENRVUZsTEVkQlFXWXNRMEZCUml4SFFVTk1MRTlCUVU4c1owSkJRVkFzUTBGQmQwSXNUMEZCZUVJc1JVRkJhVU1zU1VGQmFrTXNSVUZCZFVNc2QwSkJRVk1zUjBGQlZDeERRVUYyUXl4RFFVUkxMRWRCUlV3c2RVSkJRV0VzUjBGQllpeEZRVUZyUWl4WlFVRnNRaXhEUVVFclFpeFBRVUV2UWl4SlFVRXdReXhEUVVZMVF6dEJRVWRFTEVkQlREQkNPMEZCVFROQ0xGVkJRVkVzVlVGQlF5eFBRVUZFTEVWQlFWVXNTMEZCVmp0QlFVRkJMRmRCUVc5Q0xGRkJRVkVzUzBGQlVpeERRVUZqTEU5QlFXUXNTVUZCZVVJc2NVSkJRVzlDTEV0QlFYQkNMRU5CUVRkRE8wRkJRVUVzUjBGT2JVSTdRVUZQTTBJc2MwTkJVREpDTzBGQlVUTkNPMEZCVWpKQ0xFTkJRV1FzUXlJc0ltWnBiR1VpT2lKamMzTXRZV1JoY0hSbGNpNXFjeUlzSW5OdmRYSmpaVkp2YjNRaU9pSXZWWE5sY25NdmJXRjBkSEJsY25KNUwxTnBkR1Z6TDNCdmNHMXZkR2x2YmlJc0luTnZkWEpqWlhORGIyNTBaVzUwSWpwYkltbHRjRzl5ZENCemRHRjBaVTFoY0NCbWNtOXRJQ2N1TDJOemN5OXpkR0YwWlMxdFlYQW5PMXh1YVcxd2IzSjBJSFpoYkhWbFZIbHdaVTFoY0NCbWNtOXRJQ2N1TDJOemN5OTJZV3gxWlMxMGVYQmxMVzFoY0NjN1hHNXBiWEJ2Y25RZ1luVnBiR1JRY205d1pYSjBlVk4wY21sdVp5Qm1jbTl0SUNjdUwyTnpjeTlpZFdsc1pDYzdYRzVwYlhCdmNuUWdjSEpsWm1sNFpYSWdabkp2YlNBbkxpOWpjM012Y0hKbFptbDRaWEluTzF4dWFXMXdiM0owSUhSeVlXNXpabTl5YlZCeWIzQnpJR1p5YjIwZ0p5NHZZM056TDNSeVlXNXpabTl5YlMxd2NtOXdjeWM3WEc1cGJYQnZjblFnWTNKbFlYUmxRV1JoY0hSbGNpQm1jbTl0SUNjdUwyRmtZWEIwWlhJbk8xeHVYRzVsZUhCdmNuUWdaR1ZtWVhWc2RDQmpjbVZoZEdWQlpHRndkR1Z5S0h0Y2JpQWdaMlYwZEdWeU9pQW9aV3hsYldWdWRDd2dhMlY1S1NBOVBpQjdYRzRnSUNBZ2NtVjBkWEp1SUNnaGRISmhibk5tYjNKdFVISnZjSE5iYTJWNVhTa2dQMXh1SUNBZ0lDQWdkMmx1Wkc5M0xtZGxkRU52YlhCMWRHVmtVM1I1YkdVb1pXeGxiV1Z1ZEN3Z2JuVnNiQ2xiY0hKbFptbDRaWElvYTJWNUtWMGdPbHh1SUNBZ0lDQWdkbUZzZFdWVWVYQmxUV0Z3VzJ0bGVWMHVaR1ZtWVhWc2RGQnliM0J6TG1OMWNuSmxiblFnZkh3Z01EdGNiaUFnZlN4Y2JpQWdjMlYwZEdWeU9pQW9aV3hsYldWdWRDd2djSEp2Y0hNcElEMCtJR1ZzWlcxbGJuUXVjM1I1YkdVdVkzTnpWR1Y0ZENBclBTQmlkV2xzWkZCeWIzQmxjblI1VTNSeWFXNW5LSEJ5YjNCektTeGNiaUFnZG1Gc2RXVlVlWEJsVFdGd0xGeHVJQ0J6ZEdGMFpVMWhjRnh1ZlNrN1hHNWNiaUpkZlE9PVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvYWRhcHRlci9jc3MtYWRhcHRlci5qc1xuICoqIG1vZHVsZSBpZCA9IDE0XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfYWRhcHRlciA9IHJlcXVpcmUoJy4vYWRhcHRlcicpO1xuXG52YXIgX2FkYXB0ZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfYWRhcHRlcik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmV4cG9ydHMuZGVmYXVsdCA9ICgwLCBfYWRhcHRlcjIuZGVmYXVsdCkoe1xuICBnZXR0ZXI6IGZ1bmN0aW9uIChvYmplY3QsIGtleSkge1xuICAgIHJldHVybiBvYmplY3Rba2V5XTtcbiAgfSxcbiAgc2V0dGVyOiBmdW5jdGlvbiAob2JqZWN0LCBwcm9wcykge1xuICAgIGZvciAodmFyIGtleSBpbiBwcm9wcykge1xuICAgICAgaWYgKHByb3BzLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgb2JqZWN0W2tleV0gPSBwcm9wc1trZXldO1xuICAgICAgfVxuICAgIH1cbiAgfVxufSk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5OeVl5OWhaR0Z3ZEdWeUwyOWlhbVZqZEMxaFpHRndkR1Z5TG1weklsMHNJbTVoYldWeklqcGJYU3dpYldGd2NHbHVaM01pT2lJN096czdRVUZCUVRzN096czdPMnRDUVVWbExIVkNRVUZqTzBGQlF6TkNMRlZCUVZFc1ZVRkJReXhOUVVGRUxFVkJRVk1zUjBGQlZEdEJRVUZCTEZkQlFXbENMRTlCUVU4c1IwRkJVQ3hEUVVGcVFqdEJRVUZCTEVkQlJHMUNPMEZCUlROQ0xGVkJRVkVzVlVGQlF5eE5RVUZFTEVWQlFWTXNTMEZCVkN4RlFVRnRRanRCUVVONlFpeFRRVUZMTEVsQlFVa3NSMEZCVkN4SlFVRm5RaXhMUVVGb1FpeEZRVUYxUWp0QlFVTnlRaXhWUVVGSkxFMUJRVTBzWTBGQlRpeERRVUZ4UWl4SFFVRnlRaXhEUVVGS0xFVkJRU3RDTzBGQlF6ZENMR1ZCUVU4c1IwRkJVQ3hKUVVGakxFMUJRVTBzUjBGQlRpeERRVUZrTzBGQlEwUTdRVUZEUmp0QlFVTkdPMEZCVWpCQ0xFTkJRV1FzUXlJc0ltWnBiR1VpT2lKdlltcGxZM1F0WVdSaGNIUmxjaTVxY3lJc0luTnZkWEpqWlZKdmIzUWlPaUl2VlhObGNuTXZiV0YwZEhCbGNuSjVMMU5wZEdWekwzQnZjRzF2ZEdsdmJpSXNJbk52ZFhKalpYTkRiMjUwWlc1MElqcGJJbWx0Y0c5eWRDQmpjbVZoZEdWQlpHRndkR1Z5SUdaeWIyMGdKeTR2WVdSaGNIUmxjaWM3WEc1Y2JtVjRjRzl5ZENCa1pXWmhkV3gwSUdOeVpXRjBaVUZrWVhCMFpYSW9lMXh1SUNCblpYUjBaWEk2SUNodlltcGxZM1FzSUd0bGVTa2dQVDRnYjJKcVpXTjBXMnRsZVYwc1hHNGdJSE5sZEhSbGNqb2dLRzlpYW1WamRDd2djSEp2Y0hNcElEMCtJSHRjYmlBZ0lDQm1iM0lnS0d4bGRDQnJaWGtnYVc0Z2NISnZjSE1wSUh0Y2JpQWdJQ0FnSUdsbUlDaHdjbTl3Y3k1b1lYTlBkMjVRY205d1pYSjBlU2hyWlhrcEtTQjdYRzRnSUNBZ0lDQWdJRzlpYW1WamRGdHJaWGxkSUQwZ2NISnZjSE5iYTJWNVhUdGNiaUFnSUNBZ0lIMWNiaUFnSUNCOVhHNGdJSDFjYm4wcE95SmRmUT09XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9hZGFwdGVyL29iamVjdC1hZGFwdGVyLmpzXG4gKiogbW9kdWxlIGlkID0gMTVcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHMuZ2V0RWxlbWVudERhdGEgPSBleHBvcnRzLnNldHRlciA9IGV4cG9ydHMuZ2V0dGVyID0gdW5kZWZpbmVkO1xuXG52YXIgX3N0YXRlTWFwID0gcmVxdWlyZSgnLi9jc3Mvc3RhdGUtbWFwJyk7XG5cbnZhciBfc3RhdGVNYXAyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfc3RhdGVNYXApO1xuXG52YXIgX3ZhbHVlVHlwZU1hcCA9IHJlcXVpcmUoJy4vc3ZnL3ZhbHVlLXR5cGUtbWFwJyk7XG5cbnZhciBfdmFsdWVUeXBlTWFwMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3ZhbHVlVHlwZU1hcCk7XG5cbnZhciBfdHJhbnNmb3JtUHJvcHMgPSByZXF1aXJlKCcuL2Nzcy90cmFuc2Zvcm0tcHJvcHMnKTtcblxudmFyIF90cmFuc2Zvcm1Qcm9wczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF90cmFuc2Zvcm1Qcm9wcyk7XG5cbnZhciBfYnVpbGQgPSByZXF1aXJlKCcuL3N2Zy9idWlsZCcpO1xuXG52YXIgX2J1aWxkMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2J1aWxkKTtcblxudmFyIF9hdHRyQWRhcHRlciA9IHJlcXVpcmUoJy4vYXR0ci1hZGFwdGVyJyk7XG5cbnZhciBfYWRhcHRlciA9IHJlcXVpcmUoJy4vYWRhcHRlcicpO1xuXG52YXIgX2FkYXB0ZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfYWRhcHRlcik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbnZhciBnZXR0ZXIgPSBleHBvcnRzLmdldHRlciA9IGZ1bmN0aW9uIChlbGVtZW50LCBrZXkpIHtcbiAgcmV0dXJuICFfdHJhbnNmb3JtUHJvcHMyLmRlZmF1bHRba2V5XSA/ICgwLCBfYXR0ckFkYXB0ZXIuZ2V0dGVyKShlbGVtZW50LCBrZXkpIDogX3ZhbHVlVHlwZU1hcDIuZGVmYXVsdFtrZXldICYmIF92YWx1ZVR5cGVNYXAyLmRlZmF1bHRba2V5XS5kZWZhdWx0UHJvcHMgPyBfdmFsdWVUeXBlTWFwMi5kZWZhdWx0W2tleV0uZGVmYXVsdFByb3BzLmN1cnJlbnQgOiAwO1xufTtcbnZhciBzZXR0ZXIgPSBleHBvcnRzLnNldHRlciA9IGZ1bmN0aW9uIChlbGVtZW50LCBwcm9wcywgZGF0YSkge1xuICByZXR1cm4gKDAsIF9hdHRyQWRhcHRlci5zZXR0ZXIpKGVsZW1lbnQsICgwLCBfYnVpbGQyLmRlZmF1bHQpKHByb3BzLCBkYXRhKSk7XG59O1xudmFyIGdldEVsZW1lbnREYXRhID0gZXhwb3J0cy5nZXRFbGVtZW50RGF0YSA9IGZ1bmN0aW9uIChlbGVtZW50KSB7XG4gIHZhciBiQm94ID0gZWxlbWVudC5nZXRCQm94KCk7XG4gIHJldHVybiB7XG4gICAgeDogYkJveC54LFxuICAgIHk6IGJCb3gueSxcbiAgICB3aWR0aDogYkJveC53aWR0aCxcbiAgICBoZWlnaHQ6IGJCb3guaGVpZ2h0XG4gIH07XG59O1xuXG5leHBvcnRzLmRlZmF1bHQgPSAoMCwgX2FkYXB0ZXIyLmRlZmF1bHQpKHsgZ2V0dGVyOiBnZXR0ZXIsIHNldHRlcjogc2V0dGVyLCBzdGF0ZU1hcDogX3N0YXRlTWFwMi5kZWZhdWx0LCB2YWx1ZVR5cGVNYXA6IF92YWx1ZVR5cGVNYXAyLmRlZmF1bHQsIGdldEVsZW1lbnREYXRhOiBnZXRFbGVtZW50RGF0YSB9KTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbk55WXk5aFpHRndkR1Z5TDNOMlp5MWhaR0Z3ZEdWeUxtcHpJbDBzSW01aGJXVnpJanBiWFN3aWJXRndjR2x1WjNNaU9pSTdPenM3TzBGQlFVRTdPenM3UVVGRFFUczdPenRCUVVOQk96czdPMEZCUTBFN096czdRVUZEUVRzN1FVRkRRVHM3T3pzN08wRkJSVThzU1VGQlRTd3dRa0ZCVXl4VlFVRkRMRTlCUVVRc1JVRkJWU3hIUVVGV08wRkJRVUVzVTBGQmJVSXNRMEZCUXl4NVFrRkJaU3hIUVVGbUxFTkJRVVlzUjBGQmVVSXNlVUpCUVZjc1QwRkJXQ3hGUVVGdlFpeEhRVUZ3UWl4RFFVRjZRaXhIUVVGeFJDeDFRa0ZCWVN4SFFVRmlMRXRCUVhGQ0xIVkNRVUZoTEVkQlFXSXNSVUZCYTBJc1dVRkJlRU1zUjBGQmQwUXNkVUpCUVdFc1IwRkJZaXhGUVVGclFpeFpRVUZzUWl4RFFVRXJRaXhQUVVGMlJpeEhRVUZwUnl4RFFVRjJTenRCUVVGQkxFTkJRV1k3UVVGRFFTeEpRVUZOTERCQ1FVRlRMRlZCUVVNc1QwRkJSQ3hGUVVGVkxFdEJRVllzUlVGQmFVSXNTVUZCYWtJN1FVRkJRU3hUUVVFd1FpeDVRa0ZCVnl4UFFVRllMRVZCUVc5Q0xIRkNRVUZOTEV0QlFVNHNSVUZCWVN4SlFVRmlMRU5CUVhCQ0xFTkJRVEZDTzBGQlFVRXNRMEZCWmp0QlFVTkJMRWxCUVUwc01FTkJRV2xDTEZWQlFVTXNUMEZCUkN4RlFVRmhPMEZCUTNwRExFMUJRVTBzVDBGQlR5eFJRVUZSTEU5QlFWSXNSVUZCWWp0QlFVTkJMRk5CUVU4N1FVRkRUQ3hQUVVGSExFdEJRVXNzUTBGRVNEdEJRVVZNTEU5QlFVY3NTMEZCU3l4RFFVWklPMEZCUjB3c1YwRkJUeXhMUVVGTExFdEJTRkE3UVVGSlRDeFpRVUZSTEV0QlFVczdRVUZLVWl4SFFVRlFPMEZCVFVRc1EwRlNUVHM3YTBKQlZWRXNkVUpCUVdNc1JVRkJSU3hqUVVGR0xFVkJRVlVzWTBGQlZpeEZRVUZyUWl3MFFrRkJiRUlzUlVGQk5FSXNiME5CUVRWQ0xFVkJRVEJETERoQ1FVRXhReXhGUVVGa0xFTWlMQ0ptYVd4bElqb2ljM1puTFdGa1lYQjBaWEl1YW5NaUxDSnpiM1Z5WTJWU2IyOTBJam9pTDFWelpYSnpMMjFoZEhSd1pYSnllUzlUYVhSbGN5OXdiM0J0YjNScGIyNGlMQ0p6YjNWeVkyVnpRMjl1ZEdWdWRDSTZXeUpwYlhCdmNuUWdjM1JoZEdWTllYQWdabkp2YlNBbkxpOWpjM012YzNSaGRHVXRiV0Z3Snp0Y2JtbHRjRzl5ZENCMllXeDFaVlI1Y0dWTllYQWdabkp2YlNBbkxpOXpkbWN2ZG1Gc2RXVXRkSGx3WlMxdFlYQW5PMXh1YVcxd2IzSjBJSFJ5WVc1elptOXliVkJ5YjNCeklHWnliMjBnSnk0dlkzTnpMM1J5WVc1elptOXliUzF3Y205d2N5YzdYRzVwYlhCdmNuUWdZblZwYkdRZ1puSnZiU0FuTGk5emRtY3ZZblZwYkdRbk8xeHVhVzF3YjNKMElIc2daMlYwZEdWeUlHRnpJR0YwZEhKSFpYUjBaWElzSUhObGRIUmxjaUJoY3lCaGRIUnlVMlYwZEdWeUlIMGdabkp2YlNBbkxpOWhkSFJ5TFdGa1lYQjBaWEluTzF4dWFXMXdiM0owSUdOeVpXRjBaVUZrWVhCMFpYSWdabkp2YlNBbkxpOWhaR0Z3ZEdWeUp6dGNibHh1Wlhod2IzSjBJR052Ym5OMElHZGxkSFJsY2lBOUlDaGxiR1Z0Wlc1MExDQnJaWGtwSUQwK0lDZ2hkSEpoYm5ObWIzSnRVSEp2Y0hOYmEyVjVYU2tnUHlCaGRIUnlSMlYwZEdWeUtHVnNaVzFsYm5Rc0lHdGxlU2tnT2lBb2RtRnNkV1ZVZVhCbFRXRndXMnRsZVYwZ0ppWWdkbUZzZFdWVWVYQmxUV0Z3VzJ0bGVWMHVaR1ZtWVhWc2RGQnliM0J6S1NBL0lIWmhiSFZsVkhsd1pVMWhjRnRyWlhsZExtUmxabUYxYkhSUWNtOXdjeTVqZFhKeVpXNTBJRG9nTUR0Y2JtVjRjRzl5ZENCamIyNXpkQ0J6WlhSMFpYSWdQU0FvWld4bGJXVnVkQ3dnY0hKdmNITXNJR1JoZEdFcElEMCtJR0YwZEhKVFpYUjBaWElvWld4bGJXVnVkQ3dnWW5WcGJHUW9jSEp2Y0hNc0lHUmhkR0VwS1R0Y2JtVjRjRzl5ZENCamIyNXpkQ0JuWlhSRmJHVnRaVzUwUkdGMFlTQTlJQ2hsYkdWdFpXNTBLU0E5UGlCN1hHNGdJR052Ym5OMElHSkNiM2dnUFNCbGJHVnRaVzUwTG1kbGRFSkNiM2dvS1R0Y2JpQWdjbVYwZFhKdUlIdGNiaUFnSUNCNE9pQmlRbTk0TG5nc1hHNGdJQ0FnZVRvZ1lrSnZlQzU1TEZ4dUlDQWdJSGRwWkhSb09pQmlRbTk0TG5kcFpIUm9MQ0JjYmlBZ0lDQm9aV2xuYUhRNklHSkNiM2d1YUdWcFoyaDBYRzRnSUgwN1hHNTlPMXh1WEc1bGVIQnZjblFnWkdWbVlYVnNkQ0JqY21WaGRHVkJaR0Z3ZEdWeUtIc2daMlYwZEdWeUxDQnpaWFIwWlhJc0lITjBZWFJsVFdGd0xDQjJZV3gxWlZSNWNHVk5ZWEFzSUdkbGRFVnNaVzFsYm5SRVlYUmhJSDBwTzF4dUlsMTlcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2FkYXB0ZXIvc3ZnLWFkYXB0ZXIuanNcbiAqKiBtb2R1bGUgaWQgPSAxNlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9O1xuXG52YXIgX2J1aWxkID0gcmVxdWlyZSgnLi9zdmctcGF0aC9idWlsZCcpO1xuXG52YXIgX2J1aWxkMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2J1aWxkKTtcblxudmFyIF9zdGF0ZU1hcCA9IHJlcXVpcmUoJy4vY3NzL3N0YXRlLW1hcCcpO1xuXG52YXIgX3N0YXRlTWFwMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3N0YXRlTWFwKTtcblxudmFyIF9zdmdBZGFwdGVyID0gcmVxdWlyZSgnLi9zdmctYWRhcHRlcicpO1xuXG52YXIgX2FkYXB0ZXIgPSByZXF1aXJlKCcuL2FkYXB0ZXInKTtcblxudmFyIF9hZGFwdGVyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2FkYXB0ZXIpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5leHBvcnRzLmRlZmF1bHQgPSAoMCwgX2FkYXB0ZXIyLmRlZmF1bHQpKHtcbiAgZ2V0dGVyOiBfc3ZnQWRhcHRlci5nZXR0ZXIsXG4gIHNldHRlcjogZnVuY3Rpb24gKGVsZW1lbnQsIHByb3BzLCBvcHRzKSB7XG4gICAgdmFyIHBhdGhMZW5ndGggPSBvcHRzID8gb3B0cy5wYXRoTGVuZ3RoIDogMDtcbiAgICByZXR1cm4gKDAsIF9zdmdBZGFwdGVyLnNldHRlcikoZWxlbWVudCwgKDAsIF9idWlsZDIuZGVmYXVsdCkocHJvcHMsIHBhdGhMZW5ndGgpLCBvcHRzKTtcbiAgfSxcbiAgc3RhdGVNYXA6IF9zdGF0ZU1hcDIuZGVmYXVsdCxcbiAgZ2V0RWxlbWVudERhdGE6IGZ1bmN0aW9uIChlbGVtZW50KSB7XG4gICAgcmV0dXJuIF9leHRlbmRzKHsgcGF0aExlbmd0aDogZWxlbWVudC5nZXRUb3RhbExlbmd0aCgpIH0sICgwLCBfc3ZnQWRhcHRlci5nZXRFbGVtZW50RGF0YSkoZWxlbWVudCkpO1xuICB9XG59KTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbk55WXk5aFpHRndkR1Z5TDNOMlp5MXdZWFJvTFdGa1lYQjBaWEl1YW5NaVhTd2libUZ0WlhNaU9sdGRMQ0p0WVhCd2FXNW5jeUk2SWpzN096czdPMEZCUVVFN096czdRVUZEUVRzN096dEJRVU5CT3p0QlFVTkJPenM3T3pzN2EwSkJSV1VzZFVKQlFXTTdRVUZETTBJc05FSkJSREpDTzBGQlJUTkNMRlZCUVZFc1ZVRkJReXhQUVVGRUxFVkJRVlVzUzBGQlZpeEZRVUZwUWl4SlFVRnFRaXhGUVVFd1FqdEJRVU5vUXl4UlFVRk5MR0ZCUVdFc1QwRkJUeXhMUVVGTExGVkJRVm9zUjBGQmVVSXNRMEZCTlVNN1FVRkRRU3hYUVVGUExIZENRVUZQTEU5QlFWQXNSVUZCWjBJc2NVSkJRVTBzUzBGQlRpeEZRVUZoTEZWQlFXSXNRMEZCYUVJc1JVRkJNRU1zU1VGQk1VTXNRMEZCVUR0QlFVTkVMRWRCVERCQ08wRkJUVE5DTERoQ1FVNHlRanRCUVU4elFpeHJRa0ZCWjBJc1ZVRkJReXhQUVVGRU8wRkJRVUVzYzBKQlFXZENMRmxCUVZrc1VVRkJVU3hqUVVGU0xFVkJRVFZDTEVsQlFYbEVMR2REUVVGbExFOUJRV1lzUTBGQmVrUTdRVUZCUVR0QlFWQlhMRU5CUVdRc1F5SXNJbVpwYkdVaU9pSnpkbWN0Y0dGMGFDMWhaR0Z3ZEdWeUxtcHpJaXdpYzI5MWNtTmxVbTl2ZENJNklpOVZjMlZ5Y3k5dFlYUjBjR1Z5Y25rdlUybDBaWE12Y0c5d2JXOTBhVzl1SWl3aWMyOTFjbU5sYzBOdmJuUmxiblFpT2xzaWFXMXdiM0owSUdKMWFXeGtJR1p5YjIwZ0p5NHZjM1puTFhCaGRHZ3ZZblZwYkdRbk8xeHVhVzF3YjNKMElITjBZWFJsVFdGd0lHWnliMjBnSnk0dlkzTnpMM04wWVhSbExXMWhjQ2M3WEc1cGJYQnZjblFnZXlCblpYUjBaWElzSUhObGRIUmxjaXdnWjJWMFJXeGxiV1Z1ZEVSaGRHRWdmU0JtY205dElDY3VMM04yWnkxaFpHRndkR1Z5Snp0Y2JtbHRjRzl5ZENCamNtVmhkR1ZCWkdGd2RHVnlJR1p5YjIwZ0p5NHZZV1JoY0hSbGNpYzdYRzVjYm1WNGNHOXlkQ0JrWldaaGRXeDBJR055WldGMFpVRmtZWEIwWlhJb2UxeHVJQ0JuWlhSMFpYSXNYRzRnSUhObGRIUmxjam9nS0dWc1pXMWxiblFzSUhCeWIzQnpMQ0J2Y0hSektTQTlQaUI3WEc0Z0lDQWdZMjl1YzNRZ2NHRjBhRXhsYm1kMGFDQTlJRzl3ZEhNZ1B5QnZjSFJ6TG5CaGRHaE1aVzVuZEdnZ09pQXdPMXh1SUNBZ0lISmxkSFZ5YmlCelpYUjBaWElvWld4bGJXVnVkQ3dnWW5WcGJHUW9jSEp2Y0hNc0lIQmhkR2hNWlc1bmRHZ3BMQ0J2Y0hSektUdGNiaUFnZlN4Y2JpQWdjM1JoZEdWTllYQXNYRzRnSUdkbGRFVnNaVzFsYm5SRVlYUmhPaUFvWld4bGJXVnVkQ2tnUFQ0Z0tIc2djR0YwYUV4bGJtZDBhRG9nWld4bGJXVnVkQzVuWlhSVWIzUmhiRXhsYm1kMGFDZ3BMQ0F1TGk1blpYUkZiR1Z0Wlc1MFJHRjBZU2hsYkdWdFpXNTBLU0I5S1Z4dWZTazdYRzRpWFgwPVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvYWRhcHRlci9zdmctcGF0aC1hZGFwdGVyLmpzXG4gKiogbW9kdWxlIGlkID0gMTdcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF9jcmVhdGVFYXNpbmcgPSByZXF1aXJlKCcuL2NyZWF0ZS1lYXNpbmcnKTtcblxudmFyIF9jcmVhdGVFYXNpbmcyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY3JlYXRlRWFzaW5nKTtcblxudmFyIF9jcmVhdGVCZXppZXIgPSByZXF1aXJlKCcuL2NyZWF0ZS1iZXppZXInKTtcblxudmFyIF9jcmVhdGVCZXppZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY3JlYXRlQmV6aWVyKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuLy8gVmFsdWVzXG4vKlxuICBFYXNpbmcgZnVuY3Rpb25zXG4gIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgXG4gIEdlbmVyYXRlcyBhbmQgcHJvdmlkZXMgZWFzaW5nIGZ1bmN0aW9ucyBiYXNlZCBvbiBiYXNlRnVuY3Rpb24gZGVmaW5pdGlvbnNcbiAgXG4gIEEgY2FsbCB0byBlYXNpbmdGdW5jdGlvbi5nZXQoJ2Z1bmN0aW9uTmFtZScpIHJldHVybnMgYSBmdW5jdGlvbiB0aGF0IGNhbiBiZSBwYXNzZWQ6XG4gICAgQHBhcmFtIFtudW1iZXJdOiBQcm9ncmVzcyAwLTFcbiAgICBAcGFyYW0gW251bWJlcl0gKG9wdGlvbmFsKTogQW1wIG1vZGlmaWVyLCBvbmx5IGFjY2VwdGVkIGluIHNvbWUgZWFzaW5nIGZ1bmN0aW9uc1xuICAgICAgICAgICAgICAgICAgYW5kIGlzIHVzZWQgdG8gYWRqdXN0IG92ZXJhbGwgc3RyZW5ndGhcbiAgICBAcmV0dXJuIFtudW1iZXJdOiBFYXNlZCBwcm9ncmVzc1xuICAgIFxuICBXZSBjYW4gZ2VuZXJhdGUgbmV3IGZ1bmN0aW9ucyBieSBzZW5kaW5nIGFuIGVhc2luZyBmdW5jdGlvbiB0aHJvdWdoIGVhc2luZ0Z1bmN0aW9uLmV4dGVuZChuYW1lLCBtZXRob2QpLlxuICBXaGljaCB3aWxsIG1ha2UgbmFtZUluLCBuYW1lT3V0IGFuZCBuYW1lSW5PdXQgZnVuY3Rpb25zIGF2YWlsYWJsZSB0byB1c2UuXG4gICAgXG4gIEVhc2luZyBmdW5jdGlvbnMgZnJvbSBSb2JlcnQgUGVubmVyXG4gIGh0dHA6Ly93d3cucm9iZXJ0cGVubmVyLmNvbS9lYXNpbmcvXG4gICAgXG4gIEJlemllciBjdXJ2ZSBpbnRlcnByZXRvciBjcmVhdGVkIGZyb20gR2HDq3RhbiBSZW5hdWRlYXUncyBvcmlnaW5hbCBCZXppZXJFYXNpbmcgIFxuICBodHRwczovL2dpdGh1Yi5jb20vZ3JlL2Jlemllci1lYXNpbmcvYmxvYi9tYXN0ZXIvaW5kZXguanMgIFxuICBodHRwczovL2dpdGh1Yi5jb20vZ3JlL2Jlemllci1lYXNpbmcvYmxvYi9tYXN0ZXIvTElDRU5TRVxuXG4gIEFudGljaXBhdGUgZWFzaW5nIGNyZWF0ZWQgYnkgRWxsaW90IEdpbm9cbiAgaHR0cHM6Ly90d2l0dGVyLmNvbS9FbGxpb3RHZW5vXG4qL1xuLy8gSW1wb3J0c1xudmFyIERFRkFVTFRfQkFDS19TVFJFTkdUSCA9IDEuNTI1O1xudmFyIERFRkFVTFRfUE9XX1NUUkVOR1RIID0gMjtcblxuLypcbiAgRWFjaCBvZiB0aGVzZSBiYXNlIGZ1bmN0aW9ucyBpcyBhbiBlYXNlSW5cbiAgXG4gIE9uIGluaXQsIHdlIHVzZSAubWlycm9yIGFuZCAucmV2ZXJzZSB0byBnZW5lcmF0ZSBlYXNlSW5PdXQgYW5kXG4gIGVhc2VPdXQgZnVuY3Rpb25zIHJlc3BlY3RpdmVseS5cbiovXG52YXIgYmFzZUVhc2luZyA9IHtcbiAgZWFzZTogZnVuY3Rpb24gKHByb2dyZXNzKSB7XG4gICAgdmFyIHN0cmVuZ3RoID0gYXJndW1lbnRzLmxlbmd0aCA8PSAxIHx8IGFyZ3VtZW50c1sxXSA9PT0gdW5kZWZpbmVkID8gREVGQVVMVF9QT1dfU1RSRU5HVEggOiBhcmd1bWVudHNbMV07XG4gICAgcmV0dXJuIE1hdGgucG93KHByb2dyZXNzLCBzdHJlbmd0aCk7XG4gIH0sXG4gIGNpcmM6IGZ1bmN0aW9uIChwcm9ncmVzcykge1xuICAgIHJldHVybiAxIC0gTWF0aC5zaW4oTWF0aC5hY29zKHByb2dyZXNzKSk7XG4gIH0sXG4gIGJhY2s6IGZ1bmN0aW9uIChwcm9ncmVzcykge1xuICAgIHZhciBzdHJlbmd0aCA9IGFyZ3VtZW50cy5sZW5ndGggPD0gMSB8fCBhcmd1bWVudHNbMV0gPT09IHVuZGVmaW5lZCA/IERFRkFVTFRfQkFDS19TVFJFTkdUSCA6IGFyZ3VtZW50c1sxXTtcbiAgICByZXR1cm4gcHJvZ3Jlc3MgKiBwcm9ncmVzcyAqICgoc3RyZW5ndGggKyAxKSAqIHByb2dyZXNzIC0gc3RyZW5ndGgpO1xuICB9XG59O1xuXG4vLyBVdGlsaXR5IGZ1bmN0aW9uc1xudmFyIGdlbmVyYXRlUG93ZXJFYXNpbmcgPSBmdW5jdGlvbiAoc3RyZW5ndGgpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIChwcm9ncmVzcykge1xuICAgIHJldHVybiBiYXNlRWFzaW5nLmVhc2UocHJvZ3Jlc3MsIHN0cmVuZ3RoKTtcbiAgfTtcbn07XG5cblsnY3ViaWMnLCAncXVhcnQnLCAncXVpbnQnXS5mb3JFYWNoKGZ1bmN0aW9uIChlYXNpbmdOYW1lLCBpKSB7XG4gIHJldHVybiBiYXNlRWFzaW5nW2Vhc2luZ05hbWVdID0gZ2VuZXJhdGVQb3dlckVhc2luZyhpICsgMyk7XG59KTtcblxuLy8gR2VuZXJhdGUgaW4vb3V0L2luT3V0IHZhcmlhdGlvbnNcbmZvciAodmFyIGtleSBpbiBiYXNlRWFzaW5nKSB7XG4gIGlmIChiYXNlRWFzaW5nLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICB2YXIgZWFzaW5nRnVuY3Rpb24gPSAoMCwgX2NyZWF0ZUVhc2luZzIuZGVmYXVsdCkoYmFzZUVhc2luZ1trZXldKTtcbiAgICBiYXNlRWFzaW5nW2tleSArICdJbiddID0gZWFzaW5nRnVuY3Rpb24uaW47XG4gICAgYmFzZUVhc2luZ1trZXkgKyAnT3V0J10gPSBlYXNpbmdGdW5jdGlvbi5vdXQ7XG4gICAgYmFzZUVhc2luZ1trZXkgKyAnSW5PdXQnXSA9IGVhc2luZ0Z1bmN0aW9uLmluT3V0O1xuICB9XG59XG5cbmJhc2VFYXNpbmcubGluZWFyID0gZnVuY3Rpb24gKHByb2dyZXNzKSB7XG4gIHJldHVybiBwcm9ncmVzcztcbn07XG5iYXNlRWFzaW5nLmFudGljaXBhdGUgPSBmdW5jdGlvbiAocHJvZ3Jlc3MpIHtcbiAgdmFyIHN0cmVuZ3RoID0gYXJndW1lbnRzLmxlbmd0aCA8PSAxIHx8IGFyZ3VtZW50c1sxXSA9PT0gdW5kZWZpbmVkID8gREVGQVVMVF9CQUNLX1NUUkVOR1RIIDogYXJndW1lbnRzWzFdO1xuICByZXR1cm4gKHByb2dyZXNzICo9IDIpIDwgMSA/IDAuNSAqIGJhc2VFYXNpbmcuYmFja0luKHByb2dyZXNzLCBzdHJlbmd0aCkgOiAwLjUgKiAoMiAtIE1hdGgucG93KDIsIC0xMCAqIChwcm9ncmVzcyAtIDEpKSk7XG59O1xuXG5iYXNlRWFzaW5nLmNyZWF0ZVZhcmlhdGlvbnMgPSBfY3JlYXRlRWFzaW5nMi5kZWZhdWx0O1xuYmFzZUVhc2luZy5jdWJpY0JlemllciA9IF9jcmVhdGVCZXppZXIyLmRlZmF1bHQ7XG5iYXNlRWFzaW5nLm1vZGlmeSA9IGZ1bmN0aW9uIChlYXNpbmcpIHtcbiAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBBcnJheShfbGVuID4gMSA/IF9sZW4gLSAxIDogMCksIF9rZXkgPSAxOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgYXJnc1tfa2V5IC0gMV0gPSBhcmd1bWVudHNbX2tleV07XG4gIH1cblxuICByZXR1cm4gZnVuY3Rpb24gKHByb2dyZXNzKSB7XG4gICAgcmV0dXJuIGVhc2luZy5hcHBseSh1bmRlZmluZWQsIFtwcm9ncmVzc10uY29uY2F0KGFyZ3MpKTtcbiAgfTtcbn07XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGJhc2VFYXNpbmc7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5OeVl5OWhZM1JwYjI1ekwyVmhjMmx1Wnk5d2NtVnpaWFF0WldGemFXNW5MbXB6SWwwc0ltNWhiV1Z6SWpwYlhTd2liV0Z3Y0dsdVozTWlPaUk3T3pzN1FVRXdRa0U3T3pzN1FVRkRRVHM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN08wRkJSMEVzU1VGQlRTeDNRa0ZCZDBJc1MwRkJPVUk3UVVGRFFTeEpRVUZOTEhWQ1FVRjFRaXhEUVVFM1FqczdPenM3T3pzN1FVRlJRU3hKUVVGTkxHRkJRV0U3UVVGRGFrSXNVVUZCVFN4VlFVRkRMRkZCUVVRN1FVRkJRU3hSUVVGWExGRkJRVmdzZVVSQlFYTkNMRzlDUVVGMFFqdEJRVUZCTEc5Q1FVRXJReXhSUVVFdlF5eEZRVUV5UkN4UlFVRXpSRHRCUVVGQkxFZEJSRmM3UVVGRmFrSXNVVUZCVFR0QlFVRkJMRmRCUVZrc1NVRkJTU3hMUVVGTExFZEJRVXdzUTBGQlV5eExRVUZMTEVsQlFVd3NRMEZCVlN4UlFVRldMRU5CUVZRc1EwRkJhRUk3UVVGQlFTeEhRVVpYTzBGQlIycENMRkZCUVUwc1ZVRkJReXhSUVVGRU8wRkJRVUVzVVVGQlZ5eFJRVUZZTEhsRVFVRnpRaXh4UWtGQmRFSTdRVUZCUVN4WFFVRnBSQ3hYUVVGWExGRkJRVm9zU1VGQmVVSXNRMEZCUXl4WFFVRlhMRU5CUVZvc1NVRkJhVUlzVVVGQmFrSXNSMEZCTkVJc1VVRkJja1FzUTBGQmFFUTdRVUZCUVR0QlFVaFhMRU5CUVc1Q096czdRVUZQUVN4SlFVRk5MSE5DUVVGelFpeFZRVUZETEZGQlFVUTdRVUZCUVN4VFFVRmpMRlZCUVVNc1VVRkJSRHRCUVVGQkxGZEJRV01zVjBGQlZ5eEpRVUZZTEVOQlFXZENMRkZCUVdoQ0xFVkJRVEJDTEZGQlFURkNMRU5CUVdRN1FVRkJRU3hIUVVGa08wRkJRVUVzUTBGQk5VSTdPMEZCUlVFc1EwRkJReXhQUVVGRUxFVkJRVlVzVDBGQlZpeEZRVUZ0UWl4UFFVRnVRaXhGUVVFMFFpeFBRVUUxUWl4RFFVRnZReXhWUVVGRExGVkJRVVFzUlVGQllTeERRVUZpTzBGQlFVRXNVMEZCYlVJc1YwRkJWeXhWUVVGWUxFbEJRWGxDTEc5Q1FVRnZRaXhKUVVGSkxFTkJRWGhDTEVOQlFUVkRPMEZCUVVFc1EwRkJjRU03T3p0QlFVZEJMRXRCUVVzc1NVRkJTU3hIUVVGVUxFbEJRV2RDTEZWQlFXaENMRVZCUVRSQ08wRkJRekZDTEUxQlFVa3NWMEZCVnl4alFVRllMRU5CUVRCQ0xFZEJRVEZDTEVOQlFVb3NSVUZCYjBNN1FVRkRiRU1zVVVGQlRTeHBRa0ZCYVVJc05FSkJRWEZDTEZkQlFWY3NSMEZCV0N4RFFVRnlRaXhEUVVGMlFqdEJRVU5CTEdWQlFXTXNSMEZCWkN4WFFVRjVRaXhsUVVGbExFVkJRWGhETzBGQlEwRXNaVUZCWXl4SFFVRmtMRmxCUVRCQ0xHVkJRV1VzUjBGQmVrTTdRVUZEUVN4bFFVRmpMRWRCUVdRc1kwRkJORUlzWlVGQlpTeExRVUV6UXp0QlFVTkVPMEZCUTBZN08wRkJSVVFzVjBGQlZ5eE5RVUZZTEVkQlFXOUNPMEZCUVVFc1UwRkJXU3hSUVVGYU8wRkJRVUVzUTBGQmNFSTdRVUZEUVN4WFFVRlhMRlZCUVZnc1IwRkJkMElzVlVGQlF5eFJRVUZFTzBGQlFVRXNUVUZCVnl4UlFVRllMSGxFUVVGelFpeHhRa0ZCZEVJN1FVRkJRU3hUUVVOeVFpeERRVUZETEZsQlFWVXNRMEZCV0N4SlFVRm5RaXhEUVVGcVFpeEhRVUZ6UWl4TlFVRk5MRmRCUVZjc1RVRkJXQ3hEUVVGclFpeFJRVUZzUWl4RlFVRTBRaXhSUVVFMVFpeERRVUUxUWl4SFFVRnhSU3hQUVVGUExFbEJRVWtzUzBGQlN5eEhRVUZNTEVOQlFWTXNRMEZCVkN4RlFVRlpMRU5CUVVNc1JVRkJSQ3hKUVVGUExGZEJRVmNzUTBGQmJFSXNRMEZCV2l4RFFVRllMRU5CUkM5RE8wRkJRVUVzUTBGQmVFSTdPMEZCUjBFc1YwRkJWeXhuUWtGQldEdEJRVU5CTEZkQlFWY3NWMEZCV0R0QlFVTkJMRmRCUVZjc1RVRkJXQ3hIUVVGdlFpeFZRVUZETEUxQlFVUTdRVUZCUVN4dlEwRkJXU3hKUVVGYU8wRkJRVmtzVVVGQldqdEJRVUZCT3p0QlFVRkJMRk5CUVhGQ0xGVkJRVU1zVVVGQlJEdEJRVUZCTEZkQlFXTXNlVUpCUVU4c1VVRkJVQ3hUUVVGdlFpeEpRVUZ3UWl4RlFVRmtPMEZCUVVFc1IwRkJja0k3UVVGQlFTeERRVUZ3UWpzN2EwSkJSV1VzVlNJc0ltWnBiR1VpT2lKd2NtVnpaWFF0WldGemFXNW5MbXB6SWl3aWMyOTFjbU5sVW05dmRDSTZJaTlWYzJWeWN5OXRZWFIwY0dWeWNua3ZVMmwwWlhNdmNHOXdiVzkwYVc5dUlpd2ljMjkxY21ObGMwTnZiblJsYm5RaU9sc2lMeXBjYmlBZ1JXRnphVzVuSUdaMWJtTjBhVzl1YzF4dUlDQXRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0WEc0Z0lGeHVJQ0JIWlc1bGNtRjBaWE1nWVc1a0lIQnliM1pwWkdWeklHVmhjMmx1WnlCbWRXNWpkR2x2Ym5NZ1ltRnpaV1FnYjI0Z1ltRnpaVVoxYm1OMGFXOXVJR1JsWm1sdWFYUnBiMjV6WEc0Z0lGeHVJQ0JCSUdOaGJHd2dkRzhnWldGemFXNW5SblZ1WTNScGIyNHVaMlYwS0NkbWRXNWpkR2x2Yms1aGJXVW5LU0J5WlhSMWNtNXpJR0VnWm5WdVkzUnBiMjRnZEdoaGRDQmpZVzRnWW1VZ2NHRnpjMlZrT2x4dUlDQWdJRUJ3WVhKaGJTQmJiblZ0WW1WeVhUb2dVSEp2WjNKbGMzTWdNQzB4WEc0Z0lDQWdRSEJoY21GdElGdHVkVzFpWlhKZElDaHZjSFJwYjI1aGJDazZJRUZ0Y0NCdGIyUnBabWxsY2l3Z2IyNXNlU0JoWTJObGNIUmxaQ0JwYmlCemIyMWxJR1ZoYzJsdVp5Qm1kVzVqZEdsdmJuTmNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJR0Z1WkNCcGN5QjFjMlZrSUhSdklHRmthblZ6ZENCdmRtVnlZV3hzSUhOMGNtVnVaM1JvWEc0Z0lDQWdRSEpsZEhWeWJpQmJiblZ0WW1WeVhUb2dSV0Z6WldRZ2NISnZaM0psYzNOY2JpQWdJQ0JjYmlBZ1YyVWdZMkZ1SUdkbGJtVnlZWFJsSUc1bGR5Qm1kVzVqZEdsdmJuTWdZbmtnYzJWdVpHbHVaeUJoYmlCbFlYTnBibWNnWm5WdVkzUnBiMjRnZEdoeWIzVm5hQ0JsWVhOcGJtZEdkVzVqZEdsdmJpNWxlSFJsYm1Rb2JtRnRaU3dnYldWMGFHOWtLUzVjYmlBZ1YyaHBZMmdnZDJsc2JDQnRZV3RsSUc1aGJXVkpiaXdnYm1GdFpVOTFkQ0JoYm1RZ2JtRnRaVWx1VDNWMElHWjFibU4wYVc5dWN5QmhkbUZwYkdGaWJHVWdkRzhnZFhObExseHVJQ0FnSUZ4dUlDQkZZWE5wYm1jZ1puVnVZM1JwYjI1eklHWnliMjBnVW05aVpYSjBJRkJsYm01bGNseHVJQ0JvZEhSd09pOHZkM2QzTG5KdlltVnlkSEJsYm01bGNpNWpiMjB2WldGemFXNW5MMXh1SUNBZ0lGeHVJQ0JDWlhwcFpYSWdZM1Z5ZG1VZ2FXNTBaWEp3Y21WMGIzSWdZM0psWVhSbFpDQm1jbTl0SUVkaHc2dDBZVzRnVW1WdVlYVmtaV0YxSjNNZ2IzSnBaMmx1WVd3Z1FtVjZhV1Z5UldGemFXNW5JQ0JjYmlBZ2FIUjBjSE02THk5bmFYUm9kV0l1WTI5dEwyZHlaUzlpWlhwcFpYSXRaV0Z6YVc1bkwySnNiMkl2YldGemRHVnlMMmx1WkdWNExtcHpJQ0JjYmlBZ2FIUjBjSE02THk5bmFYUm9kV0l1WTI5dEwyZHlaUzlpWlhwcFpYSXRaV0Z6YVc1bkwySnNiMkl2YldGemRHVnlMMHhKUTBWT1UwVmNibHh1SUNCQmJuUnBZMmx3WVhSbElHVmhjMmx1WnlCamNtVmhkR1ZrSUdKNUlFVnNiR2x2ZENCSGFXNXZYRzRnSUdoMGRIQnpPaTh2ZEhkcGRIUmxjaTVqYjIwdlJXeHNhVzkwUjJWdWIxeHVLaTljYmk4dklFbHRjRzl5ZEhOY2JtbHRjRzl5ZENCamNtVmhkR1ZGWVhOcGJtZEdkVzVqZEdsdmJpQm1jbTl0SUNjdUwyTnlaV0YwWlMxbFlYTnBibWNuTzF4dWFXMXdiM0owSUdOMVltbGpRbVY2YVdWeUlHWnliMjBnSnk0dlkzSmxZWFJsTFdKbGVtbGxjaWM3WEc1Y2JpOHZJRlpoYkhWbGMxeHVZMjl1YzNRZ1JFVkdRVlZNVkY5Q1FVTkxYMU5VVWtWT1IxUklJRDBnTVM0MU1qVTdYRzVqYjI1emRDQkVSVVpCVlV4VVgxQlBWMTlUVkZKRlRrZFVTQ0E5SURJN1hHNWNiaThxWEc0Z0lFVmhZMmdnYjJZZ2RHaGxjMlVnWW1GelpTQm1kVzVqZEdsdmJuTWdhWE1nWVc0Z1pXRnpaVWx1WEc0Z0lGeHVJQ0JQYmlCcGJtbDBMQ0IzWlNCMWMyVWdMbTFwY25KdmNpQmhibVFnTG5KbGRtVnljMlVnZEc4Z1oyVnVaWEpoZEdVZ1pXRnpaVWx1VDNWMElHRnVaRnh1SUNCbFlYTmxUM1YwSUdaMWJtTjBhVzl1Y3lCeVpYTndaV04wYVhabGJIa3VYRzRxTDF4dVkyOXVjM1FnWW1GelpVVmhjMmx1WnlBOUlIdGNiaUFnWldGelpUb2dLSEJ5YjJkeVpYTnpMQ0J6ZEhKbGJtZDBhQ0E5SUVSRlJrRlZURlJmVUU5WFgxTlVVa1ZPUjFSSUtTQTlQaUJ3Y205bmNtVnpjeUFxS2lCemRISmxibWQwYUN4Y2JpQWdZMmx5WXpvZ2NISnZaM0psYzNNZ1BUNGdNU0F0SUUxaGRHZ3VjMmx1S0UxaGRHZ3VZV052Y3lod2NtOW5jbVZ6Y3lrcExGeHVJQ0JpWVdOck9pQW9jSEp2WjNKbGMzTXNJSE4wY21WdVozUm9JRDBnUkVWR1FWVk1WRjlDUVVOTFgxTlVVa1ZPUjFSSUtTQTlQaUFvY0hKdlozSmxjM01nS2lCd2NtOW5jbVZ6Y3lrZ0tpQW9LSE4wY21WdVozUm9JQ3NnTVNrZ0tpQndjbTluY21WemN5QXRJSE4wY21WdVozUm9LVnh1ZlR0Y2JseHVMeThnVlhScGJHbDBlU0JtZFc1amRHbHZibk5jYm1OdmJuTjBJR2RsYm1WeVlYUmxVRzkzWlhKRllYTnBibWNnUFNBb2MzUnlaVzVuZEdncElEMCtJQ2h3Y205bmNtVnpjeWtnUFQ0Z1ltRnpaVVZoYzJsdVp5NWxZWE5sS0hCeWIyZHlaWE56TENCemRISmxibWQwYUNrN1hHNWNibHNuWTNWaWFXTW5MQ0FuY1hWaGNuUW5MQ0FuY1hWcGJuUW5YUzVtYjNKRllXTm9LQ2hsWVhOcGJtZE9ZVzFsTENCcEtTQTlQaUJpWVhObFJXRnphVzVuVzJWaGMybHVaMDVoYldWZElEMGdaMlZ1WlhKaGRHVlFiM2RsY2tWaGMybHVaeWhwSUNzZ015a3BPMXh1WEc0dkx5QkhaVzVsY21GMFpTQnBiaTl2ZFhRdmFXNVBkWFFnZG1GeWFXRjBhVzl1YzF4dVptOXlJQ2hzWlhRZ2EyVjVJR2x1SUdKaGMyVkZZWE5wYm1jcElIdGNiaUFnYVdZZ0tHSmhjMlZGWVhOcGJtY3VhR0Z6VDNkdVVISnZjR1Z5ZEhrb2EyVjVLU2tnZTF4dUlDQWdJR052Ym5OMElHVmhjMmx1WjBaMWJtTjBhVzl1SUQwZ1kzSmxZWFJsUldGemFXNW5SblZ1WTNScGIyNG9ZbUZ6WlVWaGMybHVaMXRyWlhsZEtUdGNiaUFnSUNCaVlYTmxSV0Z6YVc1blcyQWtlMnRsZVgxSmJtQmRJRDBnWldGemFXNW5SblZ1WTNScGIyNHVhVzQ3WEc0Z0lDQWdZbUZ6WlVWaGMybHVaMXRnSkh0clpYbDlUM1YwWUYwZ1BTQmxZWE5wYm1kR2RXNWpkR2x2Ymk1dmRYUTdYRzRnSUNBZ1ltRnpaVVZoYzJsdVoxdGdKSHRyWlhsOVNXNVBkWFJnWFNBOUlHVmhjMmx1WjBaMWJtTjBhVzl1TG1sdVQzVjBPMXh1SUNCOVhHNTlYRzVjYm1KaGMyVkZZWE5wYm1jdWJHbHVaV0Z5SUQwZ2NISnZaM0psYzNNZ1BUNGdjSEp2WjNKbGMzTTdYRzVpWVhObFJXRnphVzVuTG1GdWRHbGphWEJoZEdVZ1BTQW9jSEp2WjNKbGMzTXNJSE4wY21WdVozUm9JRDBnUkVWR1FWVk1WRjlDUVVOTFgxTlVVa1ZPUjFSSUtTQTlQbHh1SUNBb0tIQnliMmR5WlhOektqMHlLU0E4SURFcElEOGdNQzQxSUNvZ1ltRnpaVVZoYzJsdVp5NWlZV05yU1c0b2NISnZaM0psYzNNc0lITjBjbVZ1WjNSb0tTQTZJQ0F3TGpVZ0tpQW9NaUF0SUUxaGRHZ3VjRzkzS0RJc0lDMHhNQ0FxSUNod2NtOW5jbVZ6Y3lBdElERXBLU2s3WEc1Y2JtSmhjMlZGWVhOcGJtY3VZM0psWVhSbFZtRnlhV0YwYVc5dWN5QTlJR055WldGMFpVVmhjMmx1WjBaMWJtTjBhVzl1TzF4dVltRnpaVVZoYzJsdVp5NWpkV0pwWTBKbGVtbGxjaUE5SUdOMVltbGpRbVY2YVdWeU8xeHVZbUZ6WlVWaGMybHVaeTV0YjJScFpua2dQU0FvWldGemFXNW5MQ0F1TGk1aGNtZHpLU0E5UGlBb2NISnZaM0psYzNNcElEMCtJR1ZoYzJsdVp5aHdjbTluY21WemN5d2dMaTR1WVhKbmN5azdYRzVjYm1WNGNHOXlkQ0JrWldaaGRXeDBJR0poYzJWRllYTnBibWM3SWwxOVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvYWN0aW9ucy9lYXNpbmcvcHJlc2V0LWVhc2luZy5qc1xuICoqIG1vZHVsZSBpZCA9IDE4XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfRmxvdyA9IHJlcXVpcmUoJy4uL0Zsb3cnKTtcblxudmFyIF9GbG93MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX0Zsb3cpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG52YXIgU0FWRV9QUk9QID0gJ19fcG1fZmxvdyc7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uIChlbGVtZW50LCBhZGFwdGVyKSB7XG4gIGlmIChlbGVtZW50W1NBVkVfUFJPUF0pIHtcbiAgICByZXR1cm4gZWxlbWVudFtTQVZFX1BST1BdO1xuICB9IGVsc2Uge1xuICAgIHZhciBmbG93ID0gbmV3IF9GbG93Mi5kZWZhdWx0KHsgZWxlbWVudDogZWxlbWVudCwgYWRhcHRlcjogYWRhcHRlciB9KTtcblxuICAgIC8vIEJpbmQgYWRhcHRlciB0byBlbGVtZW50XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGVsZW1lbnQsIFNBVkVfUFJPUCwge1xuICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICB3cml0YWJsZTogZmFsc2UsXG4gICAgICB2YWx1ZTogZmxvd1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIGZsb3c7XG4gIH1cbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5OeVl5OWhZM1JwYjI1ekwyWnNiM2N2WjJWMExXWnNiM2N1YW5NaVhTd2libUZ0WlhNaU9sdGRMQ0p0WVhCd2FXNW5jeUk2SWpzN096dEJRVUZCT3pzN096czdRVUZGUVN4SlFVRk5MRmxCUVZrc1YwRkJiRUk3TzJ0Q1FVVmxMRlZCUVVNc1QwRkJSQ3hGUVVGVkxFOUJRVllzUlVGQmMwSTdRVUZEYmtNc1RVRkJTU3hSUVVGUkxGTkJRVklzUTBGQlNpeEZRVUYzUWp0QlFVTjBRaXhYUVVGUExGRkJRVkVzVTBGQlVpeERRVUZRTzBGQlEwUXNSMEZHUkN4TlFVVlBPMEZCUTB3c1VVRkJUU3hQUVVGUExHMUNRVUZUTEVWQlFVVXNaMEpCUVVZc1JVRkJWeXhuUWtGQldDeEZRVUZVTEVOQlFXSTdPenRCUVVkQkxGZEJRVThzWTBGQlVDeERRVUZ6UWl4UFFVRjBRaXhGUVVFclFpeFRRVUV2UWl4RlFVRXdRenRCUVVONFF5eHJRa0ZCV1N4TFFVUTBRanRCUVVWNFF5eG5Ra0ZCVlN4TFFVWTRRanRCUVVkNFF5eGhRVUZQTzBGQlNHbERMRXRCUVRGRE96dEJRVTFCTEZkQlFVOHNTVUZCVUR0QlFVTkVPMEZCUTBZc1F5SXNJbVpwYkdVaU9pSm5aWFF0Wm14dmR5NXFjeUlzSW5OdmRYSmpaVkp2YjNRaU9pSXZWWE5sY25NdmJXRjBkSEJsY25KNUwxTnBkR1Z6TDNCdmNHMXZkR2x2YmlJc0luTnZkWEpqWlhORGIyNTBaVzUwSWpwYkltbHRjRzl5ZENCR2JHOTNJR1p5YjIwZ0p5NHVMMFpzYjNjbk8xeHVYRzVqYjI1emRDQlRRVlpGWDFCU1QxQWdQU0FuWDE5d2JWOW1iRzkzSnp0Y2JseHVaWGh3YjNKMElHUmxabUYxYkhRZ0tHVnNaVzFsYm5Rc0lHRmtZWEIwWlhJcElEMCtJSHRjYmlBZ2FXWWdLR1ZzWlcxbGJuUmJVMEZXUlY5UVVrOVFYU2tnZTF4dUlDQWdJSEpsZEhWeWJpQmxiR1Z0Wlc1MFcxTkJWa1ZmVUZKUFVGMDdYRzRnSUgwZ1pXeHpaU0I3WEc0Z0lDQWdZMjl1YzNRZ1pteHZkeUE5SUc1bGR5QkdiRzkzS0hzZ1pXeGxiV1Z1ZEN3Z1lXUmhjSFJsY2lCOUtUdGNibHh1SUNBZ0lDOHZJRUpwYm1RZ1lXUmhjSFJsY2lCMGJ5QmxiR1Z0Wlc1MFhHNGdJQ0FnVDJKcVpXTjBMbVJsWm1sdVpWQnliM0JsY25SNUtHVnNaVzFsYm5Rc0lGTkJWa1ZmVUZKUFVDd2dlMXh1SUNBZ0lDQWdaVzUxYldWeVlXSnNaVG9nWm1Gc2MyVXNYRzRnSUNBZ0lDQjNjbWwwWVdKc1pUb2dabUZzYzJVc1hHNGdJQ0FnSUNCMllXeDFaVG9nWm14dmQxeHVJQ0FnSUgwcE8xeHVYRzRnSUNBZ2NtVjBkWEp1SUdac2IzYzdYRzRnSUgxY2JuMDdYRzVjYmx4dUlsMTlcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2FjdGlvbnMvZmxvdy9nZXQtZmxvdy5qc1xuICoqIG1vZHVsZSBpZCA9IDE5XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzLnN0ZXBQcm9ncmVzcyA9IGV4cG9ydHMuc3BlZWRQZXJTZWNvbmQgPSBleHBvcnRzLnNwZWVkUGVyRnJhbWUgPSBleHBvcnRzLnNtb290aCA9IGV4cG9ydHMucmVzdHJpY3QgPSBleHBvcnRzLnJlbGF0aXZlVmFsdWUgPSBleHBvcnRzLnJhbmRvbSA9IGV4cG9ydHMucmFkaWFuc1RvRGVncmVlcyA9IGV4cG9ydHMucG9pbnRGcm9tQW5nbGVBbmREaXN0YW5jZSA9IGV4cG9ydHMub2Zmc2V0ID0gZXhwb3J0cy5nZXRQcm9ncmVzc0Zyb21WYWx1ZSA9IGV4cG9ydHMuZ2V0VmFsdWVGcm9tUHJvZ3Jlc3MgPSBleHBvcnRzLmh5cG90ZW51c2UgPSBleHBvcnRzLmVhc2UgPSBleHBvcnRzLmRpc3RhbmNlID0gZXhwb3J0cy5kaWxhdGUgPSBleHBvcnRzLmRlZ3JlZXNUb1JhZGlhbnMgPSBleHBvcnRzLmFuZ2xlID0gdW5kZWZpbmVkO1xuXG52YXIgX3V0aWxzID0gcmVxdWlyZSgnLi91dGlscycpO1xuXG52YXIgWkVST19QT0lOVCA9IHtcbiAgeDogMCxcbiAgeTogMCxcbiAgejogMFxufTtcblxudmFyIGRpc3RhbmNlMUQgPSBmdW5jdGlvbiAoYSwgYikge1xuICByZXR1cm4gTWF0aC5hYnMoYSAtIGIpO1xufTtcblxuLypcbiAgQW5nbGUgYmV0d2VlbiBwb2ludHNcbiAgXG4gIFRyYW5zbGF0ZXMgdGhlIGh5cG90aGV0aWNhbCBsaW5lIHNvIHRoYXQgdGhlICdmcm9tJyBjb29yZGluYXRlc1xuICBhcmUgYXQgMCwwXG4gIFxuICBAcGFyYW0gW29iamVjdF06IFggYW5kIFkgY29vcmRpbmF0ZXMgb2YgZnJvbSBwb2ludFxuICBAcGFyYW0gW29iamVjdF06IFggYW5kIFkgY29yZGluYXRlcyBvZiB0byBwb2ludFxuICBAcmV0dXJuIFtyYWRpYW5dOiBBbmdsZSBiZXR3ZWVuIHRoZSB0d28gcG9pbnRzIGluIHJhZGlhbnNcbiovXG52YXIgYW5nbGUgPSBleHBvcnRzLmFuZ2xlID0gZnVuY3Rpb24gKGEpIHtcbiAgdmFyIGIgPSBhcmd1bWVudHMubGVuZ3RoIDw9IDEgfHwgYXJndW1lbnRzWzFdID09PSB1bmRlZmluZWQgPyBaRVJPX1BPSU5UIDogYXJndW1lbnRzWzFdO1xuICByZXR1cm4gcmFkaWFuc1RvRGVncmVlcyhNYXRoLmF0YW4yKGEueCAtIGIueCwgYS55IC0gYi55KSk7XG59O1xuXG4vKlxuICBDb252ZXJ0IGRlZ3JlZXMgdG8gcmFkaWFuc1xuICBcbiAgQHBhcmFtIFtudW1iZXJdOiBWYWx1ZSBpbiBkZWdyZWVzXG4gIEByZXR1cm4gW251bWJlcl06IFZhbHVlIGluIHJhZGlhbnNcbiovXG52YXIgZGVncmVlc1RvUmFkaWFucyA9IGV4cG9ydHMuZGVncmVlc1RvUmFkaWFucyA9IGZ1bmN0aW9uIChkZWdyZWVzKSB7XG4gIHJldHVybiBkZWdyZWVzICogTWF0aC5QSSAvIDE4MDtcbn07XG5cbi8qXG4gIERpbGF0ZVxuICBcbiAgQ2hhbmdlIHRoZSBwcm9ncmVzc2lvbiBiZXR3ZWVuIGEgYW5kIGIgYWNjb3JkaW5nIHRvIGRpbGF0aW9uLlxuICBcbiAgU28gZGlsYXRpb24gPSAwLjUgd291bGQgY2hhbmdlXG4gIFxuICBhIC0tLS0tLS0tLSBiXG4gIFxuICB0b1xuICBcbiAgYSAtLS0tIGJcbiAgXG4gIEBwYXJhbSBbbnVtYmVyXTogUHJldmlvdXMgdmFsdWVcbiAgQHBhcmFtIFtudW1iZXJdOiBDdXJyZW50IHZhbHVlXG4gIEBwYXJhbSBbbnVtYmVyXTogRGlsYXRlIHByb2dyZXNzIGJ5IHhcbiAgQHJldHVybiBbbnVtYmVyXTogUHJldmlvdXMgdmFsdWUgcGx1cyB0aGUgZGlsYXRlZCBkaWZmZXJlbmNlXG4qL1xudmFyIGRpbGF0ZSA9IGV4cG9ydHMuZGlsYXRlID0gZnVuY3Rpb24gKGEsIGIsIGRpbGF0aW9uKSB7XG4gIHJldHVybiBhICsgKGIgLSBhKSAqIGRpbGF0aW9uO1xufTtcblxuLypcbiAgRGlzdGFuY2VcbiAgXG4gIFJldHVybnMgdGhlIGRpc3RhbmNlIGJldHdlZW4gdHdvIG4gZGltZW5zaW9uYWwgcG9pbnRzLlxuICBcbiAgQHBhcmFtIFtvYmplY3QvbnVtYmVyXTogeCBhbmQgeSBvciBqdXN0IHggb2YgcG9pbnQgQVxuICBAcGFyYW0gW29iamVjdC9udW1iZXJdOiAob3B0aW9uYWwpOiB4IGFuZCB5IG9yIGp1c3QgeCBvZiBwb2ludCBCXG4gIEByZXR1cm4gW251bWJlcl06IFRoZSBkaXN0YW5jZSBiZXR3ZWVuIHRoZSB0d28gcG9pbnRzXG4qL1xudmFyIGRpc3RhbmNlID0gZXhwb3J0cy5kaXN0YW5jZSA9IGZ1bmN0aW9uIChhKSB7XG4gIHZhciBiID0gYXJndW1lbnRzLmxlbmd0aCA8PSAxIHx8IGFyZ3VtZW50c1sxXSA9PT0gdW5kZWZpbmVkID8gWkVST19QT0lOVCA6IGFyZ3VtZW50c1sxXTtcblxuICAvLyAxRCBkaW1lbnNpb25zXG4gIGlmICgoMCwgX3V0aWxzLmlzTnVtKShhKSkge1xuICAgIHJldHVybiBkaXN0YW5jZTFEKGEsIGIpO1xuXG4gICAgLy8gTXVsdGktZGltZW5zaW9uYWxcbiAgfSBlbHNlIHtcbiAgICB2YXIgeERlbHRhID0gZGlzdGFuY2UxRChhLngsIGIueCk7XG4gICAgdmFyIHlEZWx0YSA9IGRpc3RhbmNlMUQoYS55LCBiLnkpO1xuICAgIHZhciB6RGVsdGEgPSAoMCwgX3V0aWxzLmlzTnVtKShhLnopID8gZGlzdGFuY2UxRChhLnosIGIueikgOiAwO1xuXG4gICAgcmV0dXJuIE1hdGguc3FydChNYXRoLnBvdyh4RGVsdGEsIDIpICsgTWF0aC5wb3coeURlbHRhLCAyKSArIE1hdGgucG93KHpEZWx0YSwgMikpO1xuICB9XG59O1xuXG4vKlxuICBFYXNlIHZhbHVlIHdpdGhpbiByYW5nZWQgcGFyYW1ldGVyc1xuICBcbiAgQHBhcmFtIFtudW1iZXJdOiBQcm9ncmVzcyBiZXR3ZWVuIDAgYW5kIDFcbiAgQHBhcmFtIFtudW1iZXJdOiBWYWx1ZSBvZiAwIHByb2dyZXNzXG4gIEBwYXJhbSBbbnVtYmVyXTogVmFsdWUgb2YgMSBwcm9ncmVzc1xuICBAcGFyYW0gW3N0cmluZyB8fCBmdW5jdGlvbl06IE5hbWUgb2YgcHJlc2V0IGVhc2luZ1xuICAgIHRvIHVzZSBvciBnZW5lcmF0ZWQgZWFzaW5nIGZ1bmN0aW9uXG4gIEByZXR1cm4gW251bWJlcl06IFZhbHVlIG9mIGVhc2VkIHByb2dyZXNzIGluIHJhbmdlXG4qL1xudmFyIGVhc2UgPSBleHBvcnRzLmVhc2UgPSBmdW5jdGlvbiAocHJvZ3Jlc3MsIGZyb20sIHRvLCBlYXNlKSB7XG4gIHZhciBwcm9ncmVzc0xpbWl0ZWQgPSByZXN0cmljdChwcm9ncmVzcywgMCwgMSk7XG4gIHZhciBlYXNlZFByb2dyZXNzID0gZWFzZShwcm9ncmVzc0xpbWl0ZWQpO1xuXG4gIHJldHVybiBnZXRWYWx1ZUZyb21Qcm9ncmVzcyhlYXNlZFByb2dyZXNzLCBmcm9tLCB0byk7XG59O1xuXG4vKlxuICBIeXBvdGVudXNlXG4gIFxuICBSZXR1cm5zIHRoZSBoeXBvdGVudXNlLCBzaWRlIEMsIGdpdmVuIHRoZSBsZW5ndGhzIG9mIHNpZGVzIEEgYW5kIEIuXG4gIFxuICBAcGFyYW0gW251bWJlcl06IExlbmd0aCBvZiBBXG4gIEBwYXJhbSBbbnVtYmVyXTogTGVuZ3RoIG9mIEJcbiAgQHJldHVybiBbbnVtYmVyXTogTGVuZ3RoIG9mIENcbiovXG52YXIgaHlwb3RlbnVzZSA9IGV4cG9ydHMuaHlwb3RlbnVzZSA9IGZ1bmN0aW9uIChhLCBiKSB7XG4gIHJldHVybiBNYXRoLnNxcnQoYSAqIGEgKyBiICogYik7XG59O1xuXG4vKlxuICBWYWx1ZSBpbiByYW5nZSBmcm9tIHByb2dyZXNzXG4gIFxuICBHaXZlbiBhIGxvd2VyIGxpbWl0IGFuZCBhbiB1cHBlciBsaW1pdCwgd2UgcmV0dXJuIHRoZSB2YWx1ZSB3aXRoaW5cbiAgdGhhdCByYW5nZSBhcyBleHByZXNzZWQgYnkgcHJvZ3Jlc3MgKGEgbnVtYmVyIGZyb20gMC0xKVxuICBcbiAgQHBhcmFtIFtudW1iZXJdOiBUaGUgcHJvZ3Jlc3MgYmV0d2VlbiBsb3dlciBhbmQgdXBwZXIgbGltaXRzIGV4cHJlc3NlZCAwLTFcbiAgQHBhcmFtIFtudW1iZXJdOiBMb3dlciBsaW1pdCBvZiByYW5nZVxuICBAcGFyYW0gW251bWJlcl06IFVwcGVyIGxpbWl0IG9mIHJhbmdlXG4gIEByZXR1cm4gW251bWJlcl06IFZhbHVlIGFzIGNhbGN1bGF0ZWQgZnJvbSBwcm9ncmVzcyB3aXRoaW4gcmFuZ2UgKG5vdCBsaW1pdGVkIHdpdGhpbiByYW5nZSlcbiovXG52YXIgZ2V0VmFsdWVGcm9tUHJvZ3Jlc3MgPSBleHBvcnRzLmdldFZhbHVlRnJvbVByb2dyZXNzID0gZnVuY3Rpb24gKHByb2dyZXNzLCBmcm9tLCB0bykge1xuICByZXR1cm4gLXByb2dyZXNzICogZnJvbSArIHByb2dyZXNzICogdG8gKyBmcm9tO1xufTtcblxuLypcbiAgUHJvZ3Jlc3Mgd2l0aGluIGdpdmVuIHJhbmdlXG4gIFxuICBHaXZlbiBhIGxvd2VyIGxpbWl0IGFuZCBhbiB1cHBlciBsaW1pdCwgd2UgcmV0dXJuIHRoZSBwcm9ncmVzc1xuICAoZXhwcmVzc2VkIGFzIGEgbnVtYmVyIDAtMSkgcmVwcmVzZW50ZWQgYnkgdGhlIGdpdmVuIHZhbHVlLCBhbmRcbiAgbGltaXQgdGhhdCBwcm9ncmVzcyB0byB3aXRoaW4gMC0xLlxuICBcbiAgQHBhcmFtIFtudW1iZXJdOiBWYWx1ZSB0byBmaW5kIHByb2dyZXNzIHdpdGhpbiBnaXZlbiByYW5nZVxuICBAcGFyYW0gW251bWJlcl06IExvd2VyIGxpbWl0IFxuICBAcGFyYW0gW251bWJlcl06IFVwcGVyIGxpbWl0XG4gIEByZXR1cm4gW251bWJlcl06IFByb2dyZXNzIG9mIHZhbHVlIHdpdGhpbiByYW5nZSBhcyBleHByZXNzZWQgMC0xXG4qL1xudmFyIGdldFByb2dyZXNzRnJvbVZhbHVlID0gZXhwb3J0cy5nZXRQcm9ncmVzc0Zyb21WYWx1ZSA9IGZ1bmN0aW9uICh2YWx1ZSwgZnJvbSwgdG8pIHtcbiAgcmV0dXJuICh2YWx1ZSAtIGZyb20pIC8gKHRvIC0gZnJvbSk7XG59O1xuXG4vKlxuICBPZmZzZXQgYmV0d2VlbiB0d28gb2JqZWN0cyBvZiBudW1iZXJzXG5cbiAgSWYgcHJvcGVydHkgaXMgZm91bmQgaW4gYiBub3QgcHJlc2VudCBpbiBhLCBpdCB3aWxsIHJldHVybiBgMGAgZm9yIHRoYXQgcHJvcC5cbiAgXG4gIEBwYXJhbSBbUG9pbnRdOiBGaXJzdCBvYmplY3RcbiAgQHBhcmFtIFtQb2ludF06IFNlY29uZCBvYmplY3RcbiAgQHJldHVybiBbT2Zmc2V0XTogRGlzdGFuY2UgbWV0cmljcyBiZXR3ZWVuIHR3byBwb2ludHNcbiovXG52YXIgb2Zmc2V0ID0gZXhwb3J0cy5vZmZzZXQgPSBmdW5jdGlvbiAoYSwgYikge1xuICB2YXIgb2Zmc2V0ID0ge307XG5cbiAgZm9yICh2YXIga2V5IGluIGIpIHtcbiAgICBpZiAoYi5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICBvZmZzZXRba2V5XSA9ICgwLCBfdXRpbHMuaGFzUHJvcGVydHkpKGEsIGtleSkgPyBiW2tleV0gLSBhW2tleV0gOiAwO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBvZmZzZXQ7XG59O1xuXG4vKlxuICBQb2ludCBmcm9tIGFuZ2xlIGFuZCBkaXN0YW5jZVxuICBcbiAgQHBhcmFtIFtvYmplY3RdOiAyRCBwb2ludCBvZiBvcmlnaW5cbiAgQHBhcmFtIFtudW1iZXJdOiBBbmdsZSBmcm9tIG9yaWdpblxuICBAcGFyYW0gW251bWJlcl06IERpc3RhbmNlIGZyb20gb3JpZ2luXG4gIEByZXR1cm4gW29iamVjdF06IENhbGN1bGF0ZWQgMkQgcG9pbnRcbiovXG52YXIgcG9pbnRGcm9tQW5nbGVBbmREaXN0YW5jZSA9IGV4cG9ydHMucG9pbnRGcm9tQW5nbGVBbmREaXN0YW5jZSA9IGZ1bmN0aW9uIChvcmlnaW4sIGFuZ2xlLCBkaXN0YW5jZSkge1xuICBhbmdsZSA9IGRlZ3JlZXNUb1JhZGlhbnMoYW5nbGUpO1xuXG4gIHJldHVybiB7XG4gICAgeDogZGlzdGFuY2UgKiBNYXRoLmNvcyhhbmdsZSkgKyBvcmlnaW4ueCxcbiAgICB5OiBkaXN0YW5jZSAqIE1hdGguc2luKGFuZ2xlKSArIG9yaWdpbi55XG4gIH07XG59O1xuXG4vKlxuICBDb252ZXJ0IHJhZGlhbnMgdG8gZGVncmVlc1xuICBcbiAgQHBhcmFtIFtudW1iZXJdOiBWYWx1ZSBpbiByYWRpYW5zXG4gIEByZXR1cm4gW251bWJlcl06IFZhbHVlIGluIGRlZ3JlZXNcbiovXG52YXIgcmFkaWFuc1RvRGVncmVlcyA9IGV4cG9ydHMucmFkaWFuc1RvRGVncmVlcyA9IGZ1bmN0aW9uIChyYWRpYW5zKSB7XG4gIHJldHVybiByYWRpYW5zICogMTgwIC8gTWF0aC5QSTtcbn07XG5cbi8qXG4gIFJldHVybiByYW5kb20gbnVtYmVyIGJldHdlZW4gcmFuZ2VcbiAgXG4gIEBwYXJhbSBbbnVtYmVyXSAob3B0aW9uYWwpOiBPdXRwdXQgbWluaW11bVxuICBAcGFyYW0gW251bWJlcl0gKG9wdGlvbmFsKTogT3V0cHV0IG1heGltdW1cbiAgQHJldHVybiBbbnVtYmVyXTogUmFuZG9tIG51bWJlciB3aXRoaW4gcmFuZ2UsIG9yIDAgYW5kIDEgaWYgbm9uZSBwcm92aWRlZFxuKi9cbnZhciByYW5kb20gPSBleHBvcnRzLnJhbmRvbSA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIG1pbiA9IGFyZ3VtZW50cy5sZW5ndGggPD0gMCB8fCBhcmd1bWVudHNbMF0gPT09IHVuZGVmaW5lZCA/IDAgOiBhcmd1bWVudHNbMF07XG4gIHZhciBtYXggPSBhcmd1bWVudHMubGVuZ3RoIDw9IDEgfHwgYXJndW1lbnRzWzFdID09PSB1bmRlZmluZWQgPyAxIDogYXJndW1lbnRzWzFdO1xuICByZXR1cm4gTWF0aC5yYW5kb20oKSAqIChtYXggLSBtaW4pICsgbWluO1xufTtcblxuLypcbiAgQ2FsY3VsYXRlIHJlbGF0aXZlIHZhbHVlXG4gIFxuICBUYWtlcyB0aGUgb3BlcmF0b3IgYW5kIHZhbHVlIGZyb20gYSBzdHJpbmcsIGllIFwiKz01XCIsIGFuZCBhcHBsaWVzXG4gIHRvIHRoZSBjdXJyZW50IHZhbHVlIHRvIHJlc29sdmUgYSBuZXcgdGFyZ2V0LlxuICBcbiAgQHBhcmFtIFtudW1iZXJdOiBDdXJyZW50IHZhbHVlXG4gIEBwYXJhbSBbc3RyaW5nXTogUmVsYXRpdmUgdmFsdWVcbiAgQHJldHVybiBbbnVtYmVyXTogTmV3IHZhbHVlXG4qL1xudmFyIHJlbGF0aXZlVmFsdWUgPSBleHBvcnRzLnJlbGF0aXZlVmFsdWUgPSBmdW5jdGlvbiAoY3VycmVudCwgcmVsYXRpdmUpIHtcbiAgdmFyIG5ld1ZhbHVlID0gY3VycmVudDtcbiAgdmFyIGVxdWF0aW9uID0gcmVsYXRpdmUuc3BsaXQoJz0nKTtcbiAgdmFyIG9wZXJhdG9yID0gZXF1YXRpb25bMF07XG5cbiAgdmFyIF9maW5kVmFsdWVBbmRVbml0ID0gKDAsIF91dGlscy5maW5kVmFsdWVBbmRVbml0KShlcXVhdGlvblsxXSk7XG5cbiAgdmFyIHVuaXQgPSBfZmluZFZhbHVlQW5kVW5pdC51bml0O1xuICB2YXIgdmFsdWUgPSBfZmluZFZhbHVlQW5kVW5pdC52YWx1ZTtcblxuXG4gIHZhbHVlID0gcGFyc2VGbG9hdCh2YWx1ZSk7XG5cbiAgc3dpdGNoIChvcGVyYXRvcikge1xuICAgIGNhc2UgJysnOlxuICAgICAgbmV3VmFsdWUgKz0gdmFsdWU7XG4gICAgICBicmVhaztcbiAgICBjYXNlICctJzpcbiAgICAgIG5ld1ZhbHVlIC09IHZhbHVlO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAnKic6XG4gICAgICBuZXdWYWx1ZSAqPSB2YWx1ZTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJy8nOlxuICAgICAgbmV3VmFsdWUgLz0gdmFsdWU7XG4gICAgICBicmVhaztcbiAgfVxuXG4gIGlmICh1bml0KSB7XG4gICAgbmV3VmFsdWUgKz0gdW5pdDtcbiAgfVxuXG4gIHJldHVybiBuZXdWYWx1ZTtcbn07XG5cbi8qXG4gIFJlc3RyaWN0IHZhbHVlIHRvIHJhbmdlXG4gIFxuICBSZXR1cm4gdmFsdWUgd2l0aGluIHRoZSByYW5nZSBvZiBsb3dlckxpbWl0IGFuZCB1cHBlckxpbWl0XG4gIFxuICBAcGFyYW0gW251bWJlcl06IFZhbHVlIHRvIGtlZXAgd2l0aGluIHJhbmdlXG4gIEBwYXJhbSBbbnVtYmVyXTogTG93ZXIgbGltaXQgb2YgcmFuZ2VcbiAgQHBhcmFtIFtudW1iZXJdOiBVcHBlciBsaW1pdCBvZiByYW5nZVxuICBAcmV0dXJuIFtudW1iZXJdOiBWYWx1ZSBhcyBsaW1pdGVkIHdpdGhpbiBnaXZlbiByYW5nZVxuKi9cbnZhciByZXN0cmljdCA9IGV4cG9ydHMucmVzdHJpY3QgPSBmdW5jdGlvbiAodmFsdWUsIG1pbiwgbWF4KSB7XG4gIHJldHVybiBNYXRoLm1heChNYXRoLm1pbih2YWx1ZSwgbWF4KSwgbWluKTtcbn07XG5cbi8qXG4gIEZyYW1lcmF0ZS1pbmRlcGVuZGVudCBzbW9vdGhpbmdcblxuICBAcGFyYW0gW251bWJlcl06IE5ldyB2YWx1ZVxuICBAcGFyYW0gW251bWJlcl06IE9sZCB2YWx1ZVxuICBAcGFyYW0gW251bWJlcl06IEZyYW1lIGR1cmF0aW9uXG4gIEBwYXJhbSBbbnVtYmVyXSAob3B0aW9uYWwpOiBTbW9vdGhpbmcgKDAgaXMgbm9uZSlcbiovXG52YXIgc21vb3RoID0gZXhwb3J0cy5zbW9vdGggPSBmdW5jdGlvbiAobmV3VmFsdWUsIG9sZFZhbHVlLCBkdXJhdGlvbikge1xuICB2YXIgc21vb3RoaW5nID0gYXJndW1lbnRzLmxlbmd0aCA8PSAzIHx8IGFyZ3VtZW50c1szXSA9PT0gdW5kZWZpbmVkID8gMCA6IGFyZ3VtZW50c1szXTtcbiAgcmV0dXJuICgwLCBfdXRpbHMudG9EZWNpbWFsKShvbGRWYWx1ZSArIGR1cmF0aW9uICogKG5ld1ZhbHVlIC0gb2xkVmFsdWUpIC8gTWF0aC5tYXgoc21vb3RoaW5nLCBkdXJhdGlvbikpO1xufTtcblxuLypcbiAgQ29udmVydCB4IHBlciBzZWNvbmQgdG8gcGVyIGZyYW1lIHZlbG9jaXR5IGJhc2VkIG9uIGZwc1xuICBcbiAgQHBhcmFtIFtudW1iZXJdOiBVbml0IHBlciBzZWNvbmRcbiAgQHBhcmFtIFtudW1iZXJdOiBGcmFtZSBkdXJhdGlvbiBpbiBtc1xuKi9cbnZhciBzcGVlZFBlckZyYW1lID0gZXhwb3J0cy5zcGVlZFBlckZyYW1lID0gZnVuY3Rpb24gKHhwcywgZnJhbWVEdXJhdGlvbikge1xuICByZXR1cm4gKDAsIF91dGlscy5pc051bSkoeHBzKSA/IHhwcyAvICgxMDAwIC8gZnJhbWVEdXJhdGlvbikgOiAwO1xufTtcblxuLypcbiAgQ29udmVydCB2ZWxvY2l0eSBpbnRvIHZlbGljaXR5IHBlciBzZWNvbmRcbiAgXG4gIEBwYXJhbSBbbnVtYmVyXTogVW5pdCBwZXIgZnJhbWVcbiAgQHBhcmFtIFtudW1iZXJdOiBGcmFtZSBkdXJhdGlvbiBpbiBtc1xuKi9cbnZhciBzcGVlZFBlclNlY29uZCA9IGV4cG9ydHMuc3BlZWRQZXJTZWNvbmQgPSBmdW5jdGlvbiAodmVsb2NpdHksIGZyYW1lRHVyYXRpb24pIHtcbiAgcmV0dXJuIHZlbG9jaXR5ICogKDEwMDAgLyBmcmFtZUR1cmF0aW9uKTtcbn07XG5cbi8qXG4gIENyZWF0ZSBzdGVwcGVkIHZlcnNpb24gb2YgMC0xIHByb2dyZXNzXG4gIFxuICBAcGFyYW0gW251bWJlcl06IEN1cnJlbnQgdmFsdWVcbiAgQHBhcmFtIFtpbnRdOiBOdW1iZXIgb2Ygc3RlcHNcbiAgQHJldHVybiBbbnVtYmVyXTogU3RlcHBlZCB2YWx1ZVxuKi9cbnZhciBzdGVwUHJvZ3Jlc3MgPSBleHBvcnRzLnN0ZXBQcm9ncmVzcyA9IGZ1bmN0aW9uIChwcm9ncmVzcywgc3RlcHMpIHtcbiAgdmFyIHNlZ21lbnQgPSAxIC8gKHN0ZXBzIC0gMSk7XG4gIHZhciB0YXJnZXQgPSAxIC0gMSAvIHN0ZXBzO1xuICB2YXIgcHJvZ3Jlc3NPZlRhcmdldCA9IE1hdGgubWluKHByb2dyZXNzIC8gdGFyZ2V0LCAxKTtcblxuICByZXR1cm4gTWF0aC5mbG9vcihwcm9ncmVzc09mVGFyZ2V0IC8gc2VnbWVudCkgKiBzZWdtZW50O1xufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbk55WXk5cGJtTXZZMkZzWXk1cWN5SmRMQ0p1WVcxbGN5STZXMTBzSW0xaGNIQnBibWR6SWpvaU96czdPenRCUVVGQk96dEJRVTlCTEVsQlFVMHNZVUZCWVR0QlFVTnFRaXhMUVVGSExFTkJSR003UVVGRmFrSXNTMEZCUnl4RFFVWmpPMEZCUjJwQ0xFdEJRVWM3UVVGSVl5eERRVUZ1UWpzN1FVRk5RU3hKUVVGTkxHRkJRV0VzVlVGQlF5eERRVUZFTEVWQlFVa3NRMEZCU2p0QlFVRkJMRk5CUVZVc1MwRkJTeXhIUVVGTUxFTkJRVk1zU1VGQlNTeERRVUZpTEVOQlFWWTdRVUZCUVN4RFFVRnVRanM3T3pzN096czdPenM3TzBGQldVOHNTVUZCVFN4M1FrRkJVU3hWUVVGRExFTkJRVVE3UVVGQlFTeE5RVUZKTEVOQlFVb3NlVVJCUVZFc1ZVRkJVanRCUVVGQkxGTkJRWFZDTEdsQ1FVRnBRaXhMUVVGTExFdEJRVXdzUTBGQlZ5eEZRVUZGTEVOQlFVWXNSMEZCVFN4RlFVRkZMRU5CUVc1Q0xFVkJRWE5DTEVWQlFVVXNRMEZCUml4SFFVRk5MRVZCUVVVc1EwRkJPVUlzUTBGQmFrSXNRMEZCZGtJN1FVRkJRU3hEUVVGa096czdPenM3T3p0QlFWRkJMRWxCUVUwc09FTkJRVzFDTEZWQlFVTXNUMEZCUkR0QlFVRkJMRk5CUVdFc1ZVRkJWU3hMUVVGTExFVkJRV1lzUjBGQmIwSXNSMEZCYWtNN1FVRkJRU3hEUVVGNlFqczdPenM3T3pzN096czdPenM3T3pzN096czdRVUZ2UWtFc1NVRkJUU3d3UWtGQlV5eFZRVUZETEVOQlFVUXNSVUZCU1N4RFFVRktMRVZCUVU4c1VVRkJVRHRCUVVGQkxGTkJRVzlDTEVsQlFVc3NRMEZCUXl4SlFVRkpMRU5CUVV3c1NVRkJWU3hSUVVGdVF6dEJRVUZCTEVOQlFXWTdPenM3T3pzN096czdPMEZCVjBFc1NVRkJUU3c0UWtGQlZ5eFZRVUZETEVOQlFVUXNSVUZCZFVJN1FVRkJRU3hOUVVGdVFpeERRVUZ0UWl4NVJFRkJaaXhWUVVGbE96czdRVUZGTjBNc1RVRkJTU3hyUWtGQlRTeERRVUZPTEVOQlFVb3NSVUZCWXp0QlFVTmFMRmRCUVU4c1YwRkJWeXhEUVVGWUxFVkJRV01zUTBGQlpDeERRVUZRT3pzN1FVRkhSQ3hIUVVwRUxFMUJTVTg3UVVGRFRDeFJRVUZOTEZOQlFWTXNWMEZCVnl4RlFVRkZMRU5CUVdJc1JVRkJaMElzUlVGQlJTeERRVUZzUWl4RFFVRm1PMEZCUTBFc1VVRkJUU3hUUVVGVExGZEJRVmNzUlVGQlJTeERRVUZpTEVWQlFXZENMRVZCUVVVc1EwRkJiRUlzUTBGQlpqdEJRVU5CTEZGQlFVMHNVMEZCVlN4clFrRkJUU3hGUVVGRkxFTkJRVklzUTBGQlJDeEhRVUZsTEZkQlFWY3NSVUZCUlN4RFFVRmlMRVZCUVdkQ0xFVkJRVVVzUTBGQmJFSXNRMEZCWml4SFFVRnpReXhEUVVGeVJEczdRVUZGUVN4WFFVRlBMRXRCUVVzc1NVRkJUQ3hEUVVGVkxGTkJRVU1zVFVGQlJDeEZRVUZYTEVOQlFWZ3NZVUZCYVVJc1RVRkJha0lzUlVGQk1rSXNRMEZCTTBJc1lVRkJhVU1zVFVGQmFrTXNSVUZCTWtNc1EwRkJNME1zUTBGQlZpeERRVUZRTzBGQlEwUTdRVUZEUml4RFFXSk5PenM3T3pzN096czdPenM3UVVGNVFrRXNTVUZCVFN4elFrRkJUeXhWUVVGRExGRkJRVVFzUlVGQlZ5eEpRVUZZTEVWQlFXbENMRVZCUVdwQ0xFVkJRWEZDTEVsQlFYSkNMRVZCUVRoQ08wRkJRMmhFTEUxQlFVMHNhMEpCUVd0Q0xGTkJRVk1zVVVGQlZDeEZRVUZ0UWl4RFFVRnVRaXhGUVVGelFpeERRVUYwUWl4RFFVRjRRanRCUVVOQkxFMUJRVTBzWjBKQlFXZENMRXRCUVVzc1pVRkJUQ3hEUVVGMFFqczdRVUZGUVN4VFFVRlBMSEZDUVVGeFFpeGhRVUZ5UWl4RlFVRnZReXhKUVVGd1F5eEZRVUV3UXl4RlFVRXhReXhEUVVGUU8wRkJRMFFzUTBGTVRUczdPenM3T3pzN096czdRVUZuUWtFc1NVRkJUU3hyUTBGQllTeFZRVUZETEVOQlFVUXNSVUZCU1N4RFFVRktPMEZCUVVFc1UwRkJWU3hMUVVGTExFbEJRVXdzUTBGQlZ5eEpRVUZKTEVOQlFVd3NSMEZCVnl4SlFVRkpMRU5CUVhwQ0xFTkJRVlk3UVVGQlFTeERRVUZ1UWpzN096czdPenM3T3pzN096dEJRV0ZCTEVsQlFVMHNjMFJCUVhWQ0xGVkJRVU1zVVVGQlJDeEZRVUZYTEVsQlFWZ3NSVUZCYVVJc1JVRkJha0k3UVVGQlFTeFRRVUY1UWl4RFFVRkZMRkZCUVVZc1IwRkJZU3hKUVVGa0xFZEJRWFZDTEZkQlFWY3NSVUZCYkVNc1IwRkJkME1zU1VGQmFFVTdRVUZCUVN4RFFVRTNRanM3T3pzN096czdPenM3T3pzN1FVRmpRU3hKUVVGTkxITkVRVUYxUWl4VlFVRkRMRXRCUVVRc1JVRkJVU3hKUVVGU0xFVkJRV01zUlVGQlpEdEJRVUZCTEZOQlFYRkNMRU5CUVVNc1VVRkJVU3hKUVVGVUxFdEJRV3RDTEV0QlFVc3NTVUZCZGtJc1EwRkJja0k3UVVGQlFTeERRVUUzUWpzN096czdPenM3T3pzN1FVRlhRU3hKUVVGTkxEQkNRVUZUTEZWQlFVTXNRMEZCUkN4RlFVRkpMRU5CUVVvc1JVRkJWVHRCUVVNNVFpeE5RVUZOTEZOQlFWTXNSVUZCWmpzN1FVRkZRU3hQUVVGTExFbEJRVWtzUjBGQlZDeEpRVUZuUWl4RFFVRm9RaXhGUVVGdFFqdEJRVU5xUWl4UlFVRkpMRVZCUVVVc1kwRkJSaXhEUVVGcFFpeEhRVUZxUWl4RFFVRktMRVZCUVRKQ08wRkJRM3BDTEdGQlFVOHNSMEZCVUN4SlFVRmpMSGRDUVVGWkxFTkJRVm9zUlVGQlpTeEhRVUZtTEVsQlFYTkNMRVZCUVVVc1IwRkJSaXhKUVVGVExFVkJRVVVzUjBGQlJpeERRVUV2UWl4SFFVRjNReXhEUVVGMFJEdEJRVU5FTzBGQlEwWTdPMEZCUlVRc1UwRkJUeXhOUVVGUU8wRkJRMFFzUTBGV1RUczdPenM3T3pzN096dEJRVzlDUVN4SlFVRk5MR2RGUVVFMFFpeFZRVUZETEUxQlFVUXNSVUZCVXl4TFFVRlVMRVZCUVdkQ0xGRkJRV2hDTEVWQlFUWkNPMEZCUTNCRkxGVkJRVkVzYVVKQlFXbENMRXRCUVdwQ0xFTkJRVkk3TzBGQlJVRXNVMEZCVHp0QlFVTk1MRTlCUVVjc1YwRkJWeXhMUVVGTExFZEJRVXdzUTBGQlV5eExRVUZVTEVOQlFWZ3NSMEZCTmtJc1QwRkJUeXhEUVVSc1F6dEJRVVZNTEU5QlFVY3NWMEZCVnl4TFFVRkxMRWRCUVV3c1EwRkJVeXhMUVVGVUxFTkJRVmdzUjBGQk5rSXNUMEZCVHp0QlFVWnNReXhIUVVGUU8wRkJTVVFzUTBGUVRUczdPenM3T3pzN1FVRmxRU3hKUVVGTkxEaERRVUZ0UWl4VlFVRkRMRTlCUVVRN1FVRkJRU3hUUVVGaExGVkJRVlVzUjBGQlZpeEhRVUZuUWl4TFFVRkxMRVZCUVd4RE8wRkJRVUVzUTBGQmVrSTdPenM3T3pzN096dEJRVk5CTEVsQlFVMHNNRUpCUVZNN1FVRkJRU3hOUVVGRExFZEJRVVFzZVVSQlFVOHNRMEZCVUR0QlFVRkJMRTFCUVZVc1IwRkJWaXg1UkVGQlowSXNRMEZCYUVJN1FVRkJRU3hUUVVGelFpeExRVUZMTEUxQlFVd3NUVUZCYVVJc1RVRkJUU3hIUVVGMlFpeEpRVUU0UWl4SFFVRndSRHRCUVVGQkxFTkJRV1k3T3pzN096czdPenM3T3p0QlFWbEJMRWxCUVUwc2QwTkJRV2RDTEZWQlFVTXNUMEZCUkN4RlFVRlZMRkZCUVZZc1JVRkJkVUk3UVVGRGJFUXNUVUZCU1N4WFFVRlhMRTlCUVdZN1FVRkRRU3hOUVVGTkxGZEJRVmNzVTBGQlV5eExRVUZVTEVOQlFXVXNSMEZCWml4RFFVRnFRanRCUVVOQkxFMUJRVTBzVjBGQlZ5eFRRVUZUTEVOQlFWUXNRMEZCYWtJN08wRkJTR3RFTERCQ1FVazFRaXcyUWtGQmFVSXNVMEZCVXl4RFFVRlVMRU5CUVdwQ0xFTkJTalJDT3p0QlFVRkJMRTFCU1RWRExFbEJTalJETEhGQ1FVazFReXhKUVVvMFF6dEJRVUZCTEUxQlNYUkRMRXRCU25ORExIRkNRVWwwUXl4TFFVcHpRenM3TzBGQlRXeEVMRlZCUVZFc1YwRkJWeXhMUVVGWUxFTkJRVkk3TzBGQlJVRXNWVUZCVVN4UlFVRlNPMEZCUTBFc1UwRkJTeXhIUVVGTU8wRkJRMFVzYTBKQlFWa3NTMEZCV2p0QlFVTkJPMEZCUTBZc1UwRkJTeXhIUVVGTU8wRkJRMFVzYTBKQlFWa3NTMEZCV2p0QlFVTkJPMEZCUTBZc1UwRkJTeXhIUVVGTU8wRkJRMFVzYTBKQlFWa3NTMEZCV2p0QlFVTkJPMEZCUTBZc1UwRkJTeXhIUVVGTU8wRkJRMFVzYTBKQlFWa3NTMEZCV2p0QlFVTkJPMEZCV2tZN08wRkJaVUVzVFVGQlNTeEpRVUZLTEVWQlFWVTdRVUZEVWl4blFrRkJXU3hKUVVGYU8wRkJRMFE3TzBGQlJVUXNVMEZCVHl4UlFVRlFPMEZCUTBRc1EwRTFRazA3T3pzN096czdPenM3T3p0QlFYZERRU3hKUVVGTkxEaENRVUZYTEZWQlFVTXNTMEZCUkN4RlFVRlJMRWRCUVZJc1JVRkJZU3hIUVVGaU8wRkJRVUVzVTBGQmNVSXNTMEZCU3l4SFFVRk1MRU5CUVZNc1MwRkJTeXhIUVVGTUxFTkJRVk1zUzBGQlZDeEZRVUZuUWl4SFFVRm9RaXhEUVVGVUxFVkJRU3RDTEVkQlFTOUNMRU5CUVhKQ08wRkJRVUVzUTBGQmFrSTdPenM3T3pzN096czdRVUZWUVN4SlFVRk5MREJDUVVGVExGVkJRVU1zVVVGQlJDeEZRVUZYTEZGQlFWZ3NSVUZCY1VJc1VVRkJja0k3UVVGQlFTeE5RVUVyUWl4VFFVRXZRaXg1UkVGQk1rTXNRMEZCTTBNN1FVRkJRU3hUUVVGcFJDeHpRa0ZCVlN4WFFVRlpMRmxCUVZrc1YwRkJWeXhSUVVGMlFpeEpRVUZ0UXl4TFFVRkxMRWRCUVV3c1EwRkJVeXhUUVVGVUxFVkJRVzlDTEZGQlFYQkNMRU5CUVhwRUxFTkJRV3BFTzBGQlFVRXNRMEZCWmpzN096czdPenM3UVVGUlFTeEpRVUZOTEhkRFFVRm5RaXhWUVVGRExFZEJRVVFzUlVGQlRTeGhRVUZPTzBGQlFVRXNVMEZCZVVJc2EwSkJRVTBzUjBGQlRpeERRVUZFTEVkQlFXVXNUMEZCVHl4UFFVRlBMR0ZCUVdRc1EwRkJaaXhIUVVFNFF5eERRVUYwUlR0QlFVRkJMRU5CUVhSQ096czdPenM3T3p0QlFWRkJMRWxCUVUwc01FTkJRV2xDTEZWQlFVTXNVVUZCUkN4RlFVRlhMR0ZCUVZnN1FVRkJRU3hUUVVFMlFpeFpRVUZaTEU5QlFVOHNZVUZCYmtJc1EwRkJOMEk3UVVGQlFTeERRVUYyUWpzN096czdPenM3TzBGQlUwRXNTVUZCVFN4elEwRkJaU3hWUVVGRExGRkJRVVFzUlVGQlZ5eExRVUZZTEVWQlFYRkNPMEZCUXk5RExFMUJRVTBzVlVGQlZTeExRVUZMTEZGQlFWRXNRMEZCWWl4RFFVRm9RanRCUVVOQkxFMUJRVTBzVTBGQlV5eEpRVUZMTEVsQlFVa3NTMEZCZUVJN1FVRkRRU3hOUVVGTkxHMUNRVUZ0UWl4TFFVRkxMRWRCUVV3c1EwRkJVeXhYUVVGWExFMUJRWEJDTEVWQlFUUkNMRU5CUVRWQ0xFTkJRWHBDT3p0QlFVVkJMRk5CUVU4c1MwRkJTeXhMUVVGTUxFTkJRVmNzYlVKQlFXMUNMRTlCUVRsQ0xFbEJRWGxETEU5QlFXaEVPMEZCUTBRc1EwRk9UU0lzSW1acGJHVWlPaUpqWVd4akxtcHpJaXdpYzI5MWNtTmxVbTl2ZENJNklpOVZjMlZ5Y3k5dFlYUjBjR1Z5Y25rdlUybDBaWE12Y0c5d2JXOTBhVzl1SWl3aWMyOTFjbU5sYzBOdmJuUmxiblFpT2xzaWFXMXdiM0owSUh0Y2JpQWdhR0Z6VUhKdmNHVnlkSGtzWEc0Z0lHbHpUblZ0TEZ4dUlDQm1hVzVrVm1Gc2RXVkJibVJWYm1sMExGeHVJQ0IwYjBSbFkybHRZV3hjYm4wZ1puSnZiU0FuTGk5MWRHbHNjeWM3WEc1Y2JtTnZibk4wSUZwRlVrOWZVRTlKVGxRZ1BTQjdYRzRnSUhnNklEQXNYRzRnSUhrNklEQXNYRzRnSUhvNklEQmNibjA3WEc1Y2JtTnZibk4wSUdScGMzUmhibU5sTVVRZ1BTQW9ZU3dnWWlrZ1BUNGdUV0YwYUM1aFluTW9ZU0F0SUdJcE8xeHVYRzR2S2x4dUlDQkJibWRzWlNCaVpYUjNaV1Z1SUhCdmFXNTBjMXh1SUNCY2JpQWdWSEpoYm5Oc1lYUmxjeUIwYUdVZ2FIbHdiM1JvWlhScFkyRnNJR3hwYm1VZ2MyOGdkR2hoZENCMGFHVWdKMlp5YjIwbklHTnZiM0prYVc1aGRHVnpYRzRnSUdGeVpTQmhkQ0F3TERCY2JpQWdYRzRnSUVCd1lYSmhiU0JiYjJKcVpXTjBYVG9nV0NCaGJtUWdXU0JqYjI5eVpHbHVZWFJsY3lCdlppQm1jbTl0SUhCdmFXNTBYRzRnSUVCd1lYSmhiU0JiYjJKcVpXTjBYVG9nV0NCaGJtUWdXU0JqYjNKa2FXNWhkR1Z6SUc5bUlIUnZJSEJ2YVc1MFhHNGdJRUJ5WlhSMWNtNGdXM0poWkdsaGJsMDZJRUZ1WjJ4bElHSmxkSGRsWlc0Z2RHaGxJSFIzYnlCd2IybHVkSE1nYVc0Z2NtRmthV0Z1YzF4dUtpOWNibVY0Y0c5eWRDQmpiMjV6ZENCaGJtZHNaU0E5SUNoaExDQmlJRDBnV2tWU1QxOVFUMGxPVkNrZ1BUNGdjbUZrYVdGdWMxUnZSR1ZuY21WbGN5aE5ZWFJvTG1GMFlXNHlLR0V1ZUNBdElHSXVlQ3dnWVM1NUlDMGdZaTU1S1NrN1hHNWNiaThxWEc0Z0lFTnZiblpsY25RZ1pHVm5jbVZsY3lCMGJ5QnlZV1JwWVc1elhHNGdJRnh1SUNCQWNHRnlZVzBnVzI1MWJXSmxjbDA2SUZaaGJIVmxJR2x1SUdSbFozSmxaWE5jYmlBZ1FISmxkSFZ5YmlCYmJuVnRZbVZ5WFRvZ1ZtRnNkV1VnYVc0Z2NtRmthV0Z1YzF4dUtpOWNibVY0Y0c5eWRDQmpiMjV6ZENCa1pXZHlaV1Z6Vkc5U1lXUnBZVzV6SUQwZ0tHUmxaM0psWlhNcElEMCtJR1JsWjNKbFpYTWdLaUJOWVhSb0xsQkpJQzhnTVRnd08xeHVYRzR2S2x4dUlDQkVhV3hoZEdWY2JpQWdYRzRnSUVOb1lXNW5aU0IwYUdVZ2NISnZaM0psYzNOcGIyNGdZbVYwZDJWbGJpQmhJR0Z1WkNCaUlHRmpZMjl5WkdsdVp5QjBieUJrYVd4aGRHbHZiaTVjYmlBZ1hHNGdJRk52SUdScGJHRjBhVzl1SUQwZ01DNDFJSGR2ZFd4a0lHTm9ZVzVuWlZ4dUlDQmNiaUFnWVNBdExTMHRMUzB0TFMwZ1lseHVJQ0JjYmlBZ2RHOWNiaUFnWEc0Z0lHRWdMUzB0TFNCaVhHNGdJRnh1SUNCQWNHRnlZVzBnVzI1MWJXSmxjbDA2SUZCeVpYWnBiM1Z6SUhaaGJIVmxYRzRnSUVCd1lYSmhiU0JiYm5WdFltVnlYVG9nUTNWeWNtVnVkQ0IyWVd4MVpWeHVJQ0JBY0dGeVlXMGdXMjUxYldKbGNsMDZJRVJwYkdGMFpTQndjbTluY21WemN5QmllU0I0WEc0Z0lFQnlaWFIxY200Z1cyNTFiV0psY2wwNklGQnlaWFpwYjNWeklIWmhiSFZsSUhCc2RYTWdkR2hsSUdScGJHRjBaV1FnWkdsbVptVnlaVzVqWlZ4dUtpOWNibVY0Y0c5eWRDQmpiMjV6ZENCa2FXeGhkR1VnUFNBb1lTd2dZaXdnWkdsc1lYUnBiMjRwSUQwK0lHRWdLeUFvS0dJZ0xTQmhLU0FxSUdScGJHRjBhVzl1S1R0Y2JseHVMeXBjYmlBZ1JHbHpkR0Z1WTJWY2JpQWdYRzRnSUZKbGRIVnlibk1nZEdobElHUnBjM1JoYm1ObElHSmxkSGRsWlc0Z2RIZHZJRzRnWkdsdFpXNXphVzl1WVd3Z2NHOXBiblJ6TGx4dUlDQmNiaUFnUUhCaGNtRnRJRnR2WW1wbFkzUXZiblZ0WW1WeVhUb2dlQ0JoYm1RZ2VTQnZjaUJxZFhOMElIZ2diMllnY0c5cGJuUWdRVnh1SUNCQWNHRnlZVzBnVzI5aWFtVmpkQzl1ZFcxaVpYSmRPaUFvYjNCMGFXOXVZV3dwT2lCNElHRnVaQ0I1SUc5eUlHcDFjM1FnZUNCdlppQndiMmx1ZENCQ1hHNGdJRUJ5WlhSMWNtNGdXMjUxYldKbGNsMDZJRlJvWlNCa2FYTjBZVzVqWlNCaVpYUjNaV1Z1SUhSb1pTQjBkMjhnY0c5cGJuUnpYRzRxTDF4dVpYaHdiM0owSUdOdmJuTjBJR1JwYzNSaGJtTmxJRDBnS0dFc0lHSWdQU0JhUlZKUFgxQlBTVTVVS1NBOVBpQjdYRzRnSUM4dklERkVJR1JwYldWdWMybHZibk5jYmlBZ2FXWWdLR2x6VG5WdEtHRXBLU0I3WEc0Z0lDQWdjbVYwZFhKdUlHUnBjM1JoYm1ObE1VUW9ZU3dnWWlrN1hHNWNiaUFnTHk4Z1RYVnNkR2t0WkdsdFpXNXphVzl1WVd4Y2JpQWdmU0JsYkhObElIdGNiaUFnSUNCamIyNXpkQ0I0UkdWc2RHRWdQU0JrYVhOMFlXNWpaVEZFS0dFdWVDd2dZaTU0S1R0Y2JpQWdJQ0JqYjI1emRDQjVSR1ZzZEdFZ1BTQmthWE4wWVc1alpURkVLR0V1ZVN3Z1lpNTVLVHRjYmlBZ0lDQmpiMjV6ZENCNlJHVnNkR0VnUFNBb2FYTk9kVzBvWVM1NktTa2dQeUJrYVhOMFlXNWpaVEZFS0dFdWVpd2dZaTU2S1NBNklEQTdYRzVjYmlBZ0lDQnlaWFIxY200Z1RXRjBhQzV6Y1hKMEtDaDRSR1ZzZEdFZ0tpb2dNaWtnS3lBb2VVUmxiSFJoSUNvcUlESXBJQ3NnS0hwRVpXeDBZU0FxS2lBeUtTazdYRzRnSUgxY2JuMDdYRzVjYmk4cVhHNGdJRVZoYzJVZ2RtRnNkV1VnZDJsMGFHbHVJSEpoYm1kbFpDQndZWEpoYldWMFpYSnpYRzRnSUZ4dUlDQkFjR0Z5WVcwZ1cyNTFiV0psY2wwNklGQnliMmR5WlhOeklHSmxkSGRsWlc0Z01DQmhibVFnTVZ4dUlDQkFjR0Z5WVcwZ1cyNTFiV0psY2wwNklGWmhiSFZsSUc5bUlEQWdjSEp2WjNKbGMzTmNiaUFnUUhCaGNtRnRJRnR1ZFcxaVpYSmRPaUJXWVd4MVpTQnZaaUF4SUhCeWIyZHlaWE56WEc0Z0lFQndZWEpoYlNCYmMzUnlhVzVuSUh4OElHWjFibU4wYVc5dVhUb2dUbUZ0WlNCdlppQndjbVZ6WlhRZ1pXRnphVzVuWEc0Z0lDQWdkRzhnZFhObElHOXlJR2RsYm1WeVlYUmxaQ0JsWVhOcGJtY2dablZ1WTNScGIyNWNiaUFnUUhKbGRIVnliaUJiYm5WdFltVnlYVG9nVm1Gc2RXVWdiMllnWldGelpXUWdjSEp2WjNKbGMzTWdhVzRnY21GdVoyVmNiaW92SUZ4dVpYaHdiM0owSUdOdmJuTjBJR1ZoYzJVZ1BTQW9jSEp2WjNKbGMzTXNJR1p5YjIwc0lIUnZMQ0JsWVhObEtTQTlQaUI3WEc0Z0lHTnZibk4wSUhCeWIyZHlaWE56VEdsdGFYUmxaQ0E5SUhKbGMzUnlhV04wS0hCeWIyZHlaWE56TENBd0xDQXhLVHRjYmlBZ1kyOXVjM1FnWldGelpXUlFjbTluY21WemN5QTlJR1ZoYzJVb2NISnZaM0psYzNOTWFXMXBkR1ZrS1R0Y2JseHVJQ0J5WlhSMWNtNGdaMlYwVm1Gc2RXVkdjbTl0VUhKdlozSmxjM01vWldGelpXUlFjbTluY21WemN5d2dabkp2YlN3Z2RHOHBPMXh1ZlR0Y2JpQmNiaThxWEc0Z0lFaDVjRzkwWlc1MWMyVmNiaUFnWEc0Z0lGSmxkSFZ5Ym5NZ2RHaGxJR2g1Y0c5MFpXNTFjMlVzSUhOcFpHVWdReXdnWjJsMlpXNGdkR2hsSUd4bGJtZDBhSE1nYjJZZ2MybGtaWE1nUVNCaGJtUWdRaTVjYmlBZ1hHNGdJRUJ3WVhKaGJTQmJiblZ0WW1WeVhUb2dUR1Z1WjNSb0lHOW1JRUZjYmlBZ1FIQmhjbUZ0SUZ0dWRXMWlaWEpkT2lCTVpXNW5kR2dnYjJZZ1FseHVJQ0JBY21WMGRYSnVJRnR1ZFcxaVpYSmRPaUJNWlc1bmRHZ2diMllnUTF4dUtpOWNibVY0Y0c5eWRDQmpiMjV6ZENCb2VYQnZkR1Z1ZFhObElEMGdLR0VzSUdJcElEMCtJRTFoZEdndWMzRnlkQ2dvWVNBcUlHRXBJQ3NnS0dJZ0tpQmlLU2s3WEc1Y2JpOHFYRzRnSUZaaGJIVmxJR2x1SUhKaGJtZGxJR1p5YjIwZ2NISnZaM0psYzNOY2JpQWdYRzRnSUVkcGRtVnVJR0VnYkc5M1pYSWdiR2x0YVhRZ1lXNWtJR0Z1SUhWd2NHVnlJR3hwYldsMExDQjNaU0J5WlhSMWNtNGdkR2hsSUhaaGJIVmxJSGRwZEdocGJseHVJQ0IwYUdGMElISmhibWRsSUdGeklHVjRjSEpsYzNObFpDQmllU0J3Y205bmNtVnpjeUFvWVNCdWRXMWlaWElnWm5KdmJTQXdMVEVwWEc0Z0lGeHVJQ0JBY0dGeVlXMGdXMjUxYldKbGNsMDZJRlJvWlNCd2NtOW5jbVZ6Y3lCaVpYUjNaV1Z1SUd4dmQyVnlJR0Z1WkNCMWNIQmxjaUJzYVcxcGRITWdaWGh3Y21WemMyVmtJREF0TVZ4dUlDQkFjR0Z5WVcwZ1cyNTFiV0psY2wwNklFeHZkMlZ5SUd4cGJXbDBJRzltSUhKaGJtZGxYRzRnSUVCd1lYSmhiU0JiYm5WdFltVnlYVG9nVlhCd1pYSWdiR2x0YVhRZ2IyWWdjbUZ1WjJWY2JpQWdRSEpsZEhWeWJpQmJiblZ0WW1WeVhUb2dWbUZzZFdVZ1lYTWdZMkZzWTNWc1lYUmxaQ0JtY205dElIQnliMmR5WlhOeklIZHBkR2hwYmlCeVlXNW5aU0FvYm05MElHeHBiV2wwWldRZ2QybDBhR2x1SUhKaGJtZGxLVnh1S2k5Y2JtVjRjRzl5ZENCamIyNXpkQ0JuWlhSV1lXeDFaVVp5YjIxUWNtOW5jbVZ6Y3lBOUlDaHdjbTluY21WemN5d2dabkp2YlN3Z2RHOHBJRDArSUNndElIQnliMmR5WlhOeklDb2dabkp2YlNrZ0t5QW9jSEp2WjNKbGMzTWdLaUIwYnlrZ0t5Qm1jbTl0TzF4dVhHNHZLbHh1SUNCUWNtOW5jbVZ6Y3lCM2FYUm9hVzRnWjJsMlpXNGdjbUZ1WjJWY2JpQWdYRzRnSUVkcGRtVnVJR0VnYkc5M1pYSWdiR2x0YVhRZ1lXNWtJR0Z1SUhWd2NHVnlJR3hwYldsMExDQjNaU0J5WlhSMWNtNGdkR2hsSUhCeWIyZHlaWE56WEc0Z0lDaGxlSEJ5WlhOelpXUWdZWE1nWVNCdWRXMWlaWElnTUMweEtTQnlaWEJ5WlhObGJuUmxaQ0JpZVNCMGFHVWdaMmwyWlc0Z2RtRnNkV1VzSUdGdVpGeHVJQ0JzYVcxcGRDQjBhR0YwSUhCeWIyZHlaWE56SUhSdklIZHBkR2hwYmlBd0xURXVYRzRnSUZ4dUlDQkFjR0Z5WVcwZ1cyNTFiV0psY2wwNklGWmhiSFZsSUhSdklHWnBibVFnY0hKdlozSmxjM01nZDJsMGFHbHVJR2RwZG1WdUlISmhibWRsWEc0Z0lFQndZWEpoYlNCYmJuVnRZbVZ5WFRvZ1RHOTNaWElnYkdsdGFYUWdYRzRnSUVCd1lYSmhiU0JiYm5WdFltVnlYVG9nVlhCd1pYSWdiR2x0YVhSY2JpQWdRSEpsZEhWeWJpQmJiblZ0WW1WeVhUb2dVSEp2WjNKbGMzTWdiMllnZG1Gc2RXVWdkMmwwYUdsdUlISmhibWRsSUdGeklHVjRjSEpsYzNObFpDQXdMVEZjYmlvdlhHNWxlSEJ2Y25RZ1kyOXVjM1FnWjJWMFVISnZaM0psYzNOR2NtOXRWbUZzZFdVZ1BTQW9kbUZzZFdVc0lHWnliMjBzSUhSdktTQTlQaUFvZG1Gc2RXVWdMU0JtY205dEtTQXZJQ2gwYnlBdElHWnliMjBwTzF4dVhHNHZLbHh1SUNCUFptWnpaWFFnWW1WMGQyVmxiaUIwZDI4Z2IySnFaV04wY3lCdlppQnVkVzFpWlhKelhHNWNiaUFnU1dZZ2NISnZjR1Z5ZEhrZ2FYTWdabTkxYm1RZ2FXNGdZaUJ1YjNRZ2NISmxjMlZ1ZENCcGJpQmhMQ0JwZENCM2FXeHNJSEpsZEhWeWJpQmdNR0FnWm05eUlIUm9ZWFFnY0hKdmNDNWNiaUFnWEc0Z0lFQndZWEpoYlNCYlVHOXBiblJkT2lCR2FYSnpkQ0J2WW1wbFkzUmNiaUFnUUhCaGNtRnRJRnRRYjJsdWRGMDZJRk5sWTI5dVpDQnZZbXBsWTNSY2JpQWdRSEpsZEhWeWJpQmJUMlptYzJWMFhUb2dSR2x6ZEdGdVkyVWdiV1YwY21samN5QmlaWFIzWldWdUlIUjNieUJ3YjJsdWRITmNiaW92WEc1bGVIQnZjblFnWTI5dWMzUWdiMlptYzJWMElEMGdLR0VzSUdJcElEMCtJSHRjYmlBZ1kyOXVjM1FnYjJabWMyVjBJRDBnZTMwN1hHNWNiaUFnWm05eUlDaHNaWFFnYTJWNUlHbHVJR0lwSUh0Y2JpQWdJQ0JwWmlBb1lpNW9ZWE5QZDI1UWNtOXdaWEowZVNoclpYa3BLU0I3WEc0Z0lDQWdJQ0J2Wm1aelpYUmJhMlY1WFNBOUlHaGhjMUJ5YjNCbGNuUjVLR0VzSUd0bGVTa2dQeUJpVzJ0bGVWMGdMU0JoVzJ0bGVWMGdPaUF3TzF4dUlDQWdJSDFjYmlBZ2ZWeHVYRzRnSUhKbGRIVnliaUJ2Wm1aelpYUTdYRzU5TzF4dVhHNHZLbHh1SUNCUWIybHVkQ0JtY205dElHRnVaMnhsSUdGdVpDQmthWE4wWVc1alpWeHVJQ0JjYmlBZ1FIQmhjbUZ0SUZ0dlltcGxZM1JkT2lBeVJDQndiMmx1ZENCdlppQnZjbWxuYVc1Y2JpQWdRSEJoY21GdElGdHVkVzFpWlhKZE9pQkJibWRzWlNCbWNtOXRJRzl5YVdkcGJseHVJQ0JBY0dGeVlXMGdXMjUxYldKbGNsMDZJRVJwYzNSaGJtTmxJR1p5YjIwZ2IzSnBaMmx1WEc0Z0lFQnlaWFIxY200Z1cyOWlhbVZqZEYwNklFTmhiR04xYkdGMFpXUWdNa1FnY0c5cGJuUmNiaW92WEc1bGVIQnZjblFnWTI5dWMzUWdjRzlwYm5SR2NtOXRRVzVuYkdWQmJtUkVhWE4wWVc1alpTQTlJQ2h2Y21sbmFXNHNJR0Z1WjJ4bExDQmthWE4wWVc1alpTa2dQVDRnZTF4dUlDQmhibWRzWlNBOUlHUmxaM0psWlhOVWIxSmhaR2xoYm5Nb1lXNW5iR1VwTzF4dVhHNGdJSEpsZEhWeWJpQjdYRzRnSUNBZ2VEb2daR2x6ZEdGdVkyVWdLaUJOWVhSb0xtTnZjeWhoYm1kc1pTa2dLeUJ2Y21sbmFXNHVlQ3hjYmlBZ0lDQjVPaUJrYVhOMFlXNWpaU0FxSUUxaGRHZ3VjMmx1S0dGdVoyeGxLU0FySUc5eWFXZHBiaTU1WEc0Z0lIMDdYRzU5TzF4dVhHNHZLbHh1SUNCRGIyNTJaWEowSUhKaFpHbGhibk1nZEc4Z1pHVm5jbVZsYzF4dUlDQmNiaUFnUUhCaGNtRnRJRnR1ZFcxaVpYSmRPaUJXWVd4MVpTQnBiaUJ5WVdScFlXNXpYRzRnSUVCeVpYUjFjbTRnVzI1MWJXSmxjbDA2SUZaaGJIVmxJR2x1SUdSbFozSmxaWE5jYmlvdlhHNWxlSEJ2Y25RZ1kyOXVjM1FnY21Ga2FXRnVjMVJ2UkdWbmNtVmxjeUE5SUNoeVlXUnBZVzV6S1NBOVBpQnlZV1JwWVc1eklDb2dNVGd3SUM4Z1RXRjBhQzVRU1R0Y2JseHVMeXBjYmlBZ1VtVjBkWEp1SUhKaGJtUnZiU0J1ZFcxaVpYSWdZbVYwZDJWbGJpQnlZVzVuWlZ4dUlDQmNiaUFnUUhCaGNtRnRJRnR1ZFcxaVpYSmRJQ2h2Y0hScGIyNWhiQ2s2SUU5MWRIQjFkQ0J0YVc1cGJYVnRYRzRnSUVCd1lYSmhiU0JiYm5WdFltVnlYU0FvYjNCMGFXOXVZV3dwT2lCUGRYUndkWFFnYldGNGFXMTFiVnh1SUNCQWNtVjBkWEp1SUZ0dWRXMWlaWEpkT2lCU1lXNWtiMjBnYm5WdFltVnlJSGRwZEdocGJpQnlZVzVuWlN3Z2IzSWdNQ0JoYm1RZ01TQnBaaUJ1YjI1bElIQnliM1pwWkdWa1hHNHFMMXh1Wlhod2IzSjBJR052Ym5OMElISmhibVJ2YlNBOUlDaHRhVzRnUFNBd0xDQnRZWGdnUFNBeEtTQTlQaUJOWVhSb0xuSmhibVJ2YlNncElDb2dLRzFoZUNBdElHMXBiaWtnS3lCdGFXNDdYRzVjYmk4cVhHNGdJRU5oYkdOMWJHRjBaU0J5Wld4aGRHbDJaU0IyWVd4MVpWeHVJQ0JjYmlBZ1ZHRnJaWE1nZEdobElHOXdaWEpoZEc5eUlHRnVaQ0IyWVd4MVpTQm1jbTl0SUdFZ2MzUnlhVzVuTENCcFpTQmNJaXM5TlZ3aUxDQmhibVFnWVhCd2JHbGxjMXh1SUNCMGJ5QjBhR1VnWTNWeWNtVnVkQ0IyWVd4MVpTQjBieUJ5WlhOdmJIWmxJR0VnYm1WM0lIUmhjbWRsZEM1Y2JpQWdYRzRnSUVCd1lYSmhiU0JiYm5WdFltVnlYVG9nUTNWeWNtVnVkQ0IyWVd4MVpWeHVJQ0JBY0dGeVlXMGdXM04wY21sdVoxMDZJRkpsYkdGMGFYWmxJSFpoYkhWbFhHNGdJRUJ5WlhSMWNtNGdXMjUxYldKbGNsMDZJRTVsZHlCMllXeDFaVnh1S2k5Y2JtVjRjRzl5ZENCamIyNXpkQ0J5Wld4aGRHbDJaVlpoYkhWbElEMGdLR04xY25KbGJuUXNJSEpsYkdGMGFYWmxLU0E5UGlCN1hHNGdJR3hsZENCdVpYZFdZV3gxWlNBOUlHTjFjbkpsYm5RN1hHNGdJR052Ym5OMElHVnhkV0YwYVc5dUlEMGdjbVZzWVhScGRtVXVjM0JzYVhRb0p6MG5LVHRjYmlBZ1kyOXVjM1FnYjNCbGNtRjBiM0lnUFNCbGNYVmhkR2x2Ymxzd1hUdGNiaUFnYkdWMElIc2dkVzVwZEN3Z2RtRnNkV1VnZlNBOUlHWnBibVJXWVd4MVpVRnVaRlZ1YVhRb1pYRjFZWFJwYjI1Yk1WMHBPMXh1WEc0Z0lIWmhiSFZsSUQwZ2NHRnljMlZHYkc5aGRDaDJZV3gxWlNrN1hHNWNiaUFnYzNkcGRHTm9JQ2h2Y0dWeVlYUnZjaWtnZTF4dUlDQmpZWE5sSUNjckp6cGNiaUFnSUNCdVpYZFdZV3gxWlNBclBTQjJZV3gxWlR0Y2JpQWdJQ0JpY21WaGF6dGNiaUFnWTJGelpTQW5MU2M2WEc0Z0lDQWdibVYzVm1Gc2RXVWdMVDBnZG1Gc2RXVTdYRzRnSUNBZ1luSmxZV3M3WEc0Z0lHTmhjMlVnSnlvbk9seHVJQ0FnSUc1bGQxWmhiSFZsSUNvOUlIWmhiSFZsTzF4dUlDQWdJR0p5WldGck8xeHVJQ0JqWVhObElDY3ZKenBjYmlBZ0lDQnVaWGRXWVd4MVpTQXZQU0IyWVd4MVpUdGNiaUFnSUNCaWNtVmhhenRjYmlBZ2ZWeHVJQ0JjYmlBZ2FXWWdLSFZ1YVhRcElIdGNiaUFnSUNCdVpYZFdZV3gxWlNBclBTQjFibWwwTzF4dUlDQjlYRzVjYmlBZ2NtVjBkWEp1SUc1bGQxWmhiSFZsTzF4dWZUdGNibHh1THlwY2JpQWdVbVZ6ZEhKcFkzUWdkbUZzZFdVZ2RHOGdjbUZ1WjJWY2JpQWdYRzRnSUZKbGRIVnliaUIyWVd4MVpTQjNhWFJvYVc0Z2RHaGxJSEpoYm1kbElHOW1JR3h2ZDJWeVRHbHRhWFFnWVc1a0lIVndjR1Z5VEdsdGFYUmNiaUFnWEc0Z0lFQndZWEpoYlNCYmJuVnRZbVZ5WFRvZ1ZtRnNkV1VnZEc4Z2EyVmxjQ0IzYVhSb2FXNGdjbUZ1WjJWY2JpQWdRSEJoY21GdElGdHVkVzFpWlhKZE9pQk1iM2RsY2lCc2FXMXBkQ0J2WmlCeVlXNW5aVnh1SUNCQWNHRnlZVzBnVzI1MWJXSmxjbDA2SUZWd2NHVnlJR3hwYldsMElHOW1JSEpoYm1kbFhHNGdJRUJ5WlhSMWNtNGdXMjUxYldKbGNsMDZJRlpoYkhWbElHRnpJR3hwYldsMFpXUWdkMmwwYUdsdUlHZHBkbVZ1SUhKaGJtZGxYRzRxTDF4dVpYaHdiM0owSUdOdmJuTjBJSEpsYzNSeWFXTjBJRDBnS0haaGJIVmxMQ0J0YVc0c0lHMWhlQ2tnUFQ0Z1RXRjBhQzV0WVhnb1RXRjBhQzV0YVc0b2RtRnNkV1VzSUcxaGVDa3NJRzFwYmlrN1hHNWNiaThxWEc0Z0lFWnlZVzFsY21GMFpTMXBibVJsY0dWdVpHVnVkQ0J6Ylc5dmRHaHBibWRjYmx4dUlDQkFjR0Z5WVcwZ1cyNTFiV0psY2wwNklFNWxkeUIyWVd4MVpWeHVJQ0JBY0dGeVlXMGdXMjUxYldKbGNsMDZJRTlzWkNCMllXeDFaVnh1SUNCQWNHRnlZVzBnVzI1MWJXSmxjbDA2SUVaeVlXMWxJR1IxY21GMGFXOXVYRzRnSUVCd1lYSmhiU0JiYm5WdFltVnlYU0FvYjNCMGFXOXVZV3dwT2lCVGJXOXZkR2hwYm1jZ0tEQWdhWE1nYm05dVpTbGNiaW92WEc1bGVIQnZjblFnWTI5dWMzUWdjMjF2YjNSb0lEMGdLRzVsZDFaaGJIVmxMQ0J2YkdSV1lXeDFaU3dnWkhWeVlYUnBiMjRzSUhOdGIyOTBhR2x1WnlBOUlEQXBJRDArSUhSdlJHVmphVzFoYkNodmJHUldZV3gxWlNBcklDaGtkWEpoZEdsdmJpQXFJQ2h1WlhkV1lXeDFaU0F0SUc5c1pGWmhiSFZsS1NBdklFMWhkR2d1YldGNEtITnRiMjkwYUdsdVp5d2daSFZ5WVhScGIyNHBLU2s3WEc1Y2JpOHFYRzRnSUVOdmJuWmxjblFnZUNCd1pYSWdjMlZqYjI1a0lIUnZJSEJsY2lCbWNtRnRaU0IyWld4dlkybDBlU0JpWVhObFpDQnZiaUJtY0hOY2JpQWdYRzRnSUVCd1lYSmhiU0JiYm5WdFltVnlYVG9nVlc1cGRDQndaWElnYzJWamIyNWtYRzRnSUVCd1lYSmhiU0JiYm5WdFltVnlYVG9nUm5KaGJXVWdaSFZ5WVhScGIyNGdhVzRnYlhOY2Jpb3ZYRzVsZUhCdmNuUWdZMjl1YzNRZ2MzQmxaV1JRWlhKR2NtRnRaU0E5SUNoNGNITXNJR1p5WVcxbFJIVnlZWFJwYjI0cElEMCtJQ2hwYzA1MWJTaDRjSE1wS1NBL0lIaHdjeUF2SUNneE1EQXdJQzhnWm5KaGJXVkVkWEpoZEdsdmJpa2dPaUF3TzF4dVhHNHZLbHh1SUNCRGIyNTJaWEowSUhabGJHOWphWFI1SUdsdWRHOGdkbVZzYVdOcGRIa2djR1Z5SUhObFkyOXVaRnh1SUNCY2JpQWdRSEJoY21GdElGdHVkVzFpWlhKZE9pQlZibWwwSUhCbGNpQm1jbUZ0WlZ4dUlDQkFjR0Z5WVcwZ1cyNTFiV0psY2wwNklFWnlZVzFsSUdSMWNtRjBhVzl1SUdsdUlHMXpYRzRxTDF4dVpYaHdiM0owSUdOdmJuTjBJSE53WldWa1VHVnlVMlZqYjI1a0lEMGdLSFpsYkc5amFYUjVMQ0JtY21GdFpVUjFjbUYwYVc5dUtTQTlQaUIyWld4dlkybDBlU0FxSUNneE1EQXdJQzhnWm5KaGJXVkVkWEpoZEdsdmJpazdYRzVjYmk4cVhHNGdJRU55WldGMFpTQnpkR1Z3Y0dWa0lIWmxjbk5wYjI0Z2IyWWdNQzB4SUhCeWIyZHlaWE56WEc0Z0lGeHVJQ0JBY0dGeVlXMGdXMjUxYldKbGNsMDZJRU4xY25KbGJuUWdkbUZzZFdWY2JpQWdRSEJoY21GdElGdHBiblJkT2lCT2RXMWlaWElnYjJZZ2MzUmxjSE5jYmlBZ1FISmxkSFZ5YmlCYmJuVnRZbVZ5WFRvZ1UzUmxjSEJsWkNCMllXeDFaVnh1S2k5Y2JtVjRjRzl5ZENCamIyNXpkQ0J6ZEdWd1VISnZaM0psYzNNZ1BTQW9jSEp2WjNKbGMzTXNJSE4wWlhCektTQTlQaUI3WEc0Z0lHTnZibk4wSUhObFoyMWxiblFnUFNBeElDOGdLSE4wWlhCeklDMGdNU2s3WEc0Z0lHTnZibk4wSUhSaGNtZGxkQ0E5SURFZ0xTQW9NU0F2SUhOMFpYQnpLVHRjYmlBZ1kyOXVjM1FnY0hKdlozSmxjM05QWmxSaGNtZGxkQ0E5SUUxaGRHZ3ViV2x1S0hCeWIyZHlaWE56SUM4Z2RHRnlaMlYwTENBeEtUdGNibHh1SUNCeVpYUjFjbTRnVFdGMGFDNW1iRzl2Y2lod2NtOW5jbVZ6YzA5bVZHRnlaMlYwSUM4Z2MyVm5iV1Z1ZENrZ0tpQnpaV2R0Wlc1ME8xeHVmVHNpWFgwPVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvaW5jL2NhbGMuanNcbiAqKiBtb2R1bGUgaWQgPSAyMFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xudmFyIENBTUVMX0NBU0VfUEFUVEVSTiA9IC8oW2Etel0pKFtBLVpdKS9nO1xudmFyIFJFUExBQ0VfVEVNUExBVEUgPSAnJDEtJDInO1xudmFyIEhBU19QRVJGT1JNQU5DRV9OT1cgPSB0eXBlb2YgcGVyZm9ybWFuY2UgIT09ICd1bmRlZmluZWQnICYmIHBlcmZvcm1hbmNlLm5vdztcblxuLypcbiAgR2V0IHZhciB0eXBlIGFzIHN0cmluZ1xuICBcbiAgQHBhcmFtOiBWYXJpYWJsZSB0byB0ZXN0XG4gIEByZXR1cm4gW3N0cmluZ106IFJldHVybnMsIGZvciBpbnN0YW5jZSAnT2JqZWN0JyBpZiBbb2JqZWN0IE9iamVjdF1cbiovXG52YXIgdmFyVHlwZSA9IGZ1bmN0aW9uICh2YXJpYWJsZSkge1xuICByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHZhcmlhYmxlKS5zbGljZSg4LCAtMSk7XG59O1xuXG4vKlxuICBDb252ZXJ0IGNhbWVsQ2FzZSB0byBkYXNoLWNhc2VcblxuICBAcGFyYW0gW3N0cmluZ11cbiAgQHJldHVybiBbc3RyaW5nXVxuKi9cbnZhciBjYW1lbFRvRGFzaCA9IGV4cG9ydHMuY2FtZWxUb0Rhc2ggPSBmdW5jdGlvbiAoc3RyaW5nKSB7XG4gIHJldHVybiBzdHJpbmcucmVwbGFjZShDQU1FTF9DQVNFX1BBVFRFUk4sIFJFUExBQ0VfVEVNUExBVEUpLnRvTG93ZXJDYXNlKCk7XG59O1xuXG52YXIgY3JlYXRlRGVsaW1pdGVkID0gZXhwb3J0cy5jcmVhdGVEZWxpbWl0ZWQgPSBmdW5jdGlvbiAodmFsdWVzLCB0ZXJtcywgZGVsaW1pdGVyLCBjaG9wKSB7XG4gIHZhciBudW1UZXJtcyA9IHRlcm1zLmxlbmd0aDtcbiAgdmFyIGNvbWJpbmVkID0gJyc7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBudW1UZXJtczsgaSsrKSB7XG4gICAgdmFyIHRlcm0gPSB0ZXJtc1tpXTtcbiAgICBpZiAodmFsdWVzLmhhc093blByb3BlcnR5KHRlcm0pKSB7XG4gICAgICBjb21iaW5lZCArPSB2YWx1ZXNbdGVybV0gKyBkZWxpbWl0ZXI7XG4gICAgfVxuICB9XG5cbiAgaWYgKGNob3ApIHtcbiAgICBjb21iaW5lZCA9IGNvbWJpbmVkLnNsaWNlKDAsIC1jaG9wKTtcbiAgfVxuXG4gIHJldHVybiBjb21iaW5lZDtcbn07XG5cbi8qXG4gIENyZWF0ZSBhIGZ1bmN0aW9uIHN0cmluZ1xuXG4gICcyMHB4JywgJ3RyYW5zbGF0ZScgLT4gJ3RyYW5zbGF0ZSgyMHB4KSdcblxuICBAcGFyYW0gW3N0cmluZ11cbiAgQHBhcmFtIFtzdHJpbmddXG4gIEByZXR1cm4gW3N0cmluZ11cbiovXG52YXIgY3JlYXRlRnVuY3Rpb25TdHJpbmcgPSBleHBvcnRzLmNyZWF0ZUZ1bmN0aW9uU3RyaW5nID0gZnVuY3Rpb24gKHZhbHVlLCBwcmVmaXgpIHtcbiAgcmV0dXJuIHByZWZpeCArICcoJyArIHZhbHVlICsgJyknO1xufTtcblxuLypcbiAgR2VuZXJhdGUgY3VycmVudCB0aW1lc3RhbXBcbiAgXG4gIEByZXR1cm4gW3RpbWVzdGFtcF06IEN1cnJlbnQgVU5JWCB0aW1lc3RhbXBcbiovXG52YXIgY3VycmVudFRpbWUgPSBleHBvcnRzLmN1cnJlbnRUaW1lID0gSEFTX1BFUkZPUk1BTkNFX05PVyA/IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIHBlcmZvcm1hbmNlLm5vdygpO1xufSA6IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xufTtcblxuLypcbiAgU3BsaXQgYSB2YWx1ZSBpbnRvIGEgdmFsdWUvdW5pdCBvYmplY3RcbiAgXG4gICAgXCIyMDBweFwiIC0+IHsgdmFsdWU6IDIwMCwgdW5pdDogXCJweFwiIH1cbiAgICBcbiAgQHBhcmFtIFtzdHJpbmddOiBWYWx1ZSB0byBzcGxpdFxuICBAcmV0dXJuIFtvYmplY3RdOiBPYmplY3Qgd2l0aCB2YWx1ZSBhbmQgdW5pdCBwcm9wc1xuKi9cbnZhciBmaW5kVmFsdWVBbmRVbml0ID0gZXhwb3J0cy5maW5kVmFsdWVBbmRVbml0ID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gIGlmICh2YWx1ZS5tYXRjaCkge1xuICAgIHZhciBzcGxpdFZhbHVlID0gdmFsdWUubWF0Y2goLygtP1xcZCpcXC4/XFxkKikoLiopLyk7XG5cbiAgICByZXR1cm4ge1xuICAgICAgdmFsdWU6IHBhcnNlRmxvYXQoc3BsaXRWYWx1ZVsxXSksXG4gICAgICB1bml0OiBzcGxpdFZhbHVlWzJdXG4gICAgfTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4geyB2YWx1ZTogdmFsdWUgfTtcbiAgfVxufTtcblxuLypcbiAgU3BsaXQgY29sb3Igc3RyaW5nIGludG8gbWFwIG9mIGNvbG9yIHByb3BlcnRpZXNcblxuICBcInJnYmEoMjU1LCAyNTUsIDI1NSwgMClcIiwgW1wiUmVkXCIsICdHcmVlblwiLCBcIkJsdWVcIiwgXCJBbHBoYVwiXVxuXG4gIHsgUmVkOiAyNTUuLi4gfVxuKi9cbnZhciBnZXRDb2xvclZhbHVlcyA9IGV4cG9ydHMuZ2V0Q29sb3JWYWx1ZXMgPSBmdW5jdGlvbiAodmFsdWUsIGNvbG9yVGVybXMpIHtcbiAgdmFyIG51bUNvbG9yVGVybXMgPSBjb2xvclRlcm1zLmxlbmd0aDtcbiAgdmFyIGNvbG9yVmFsdWVzID0ge307XG4gIHZhciBjb2xvcnMgPSBzcGxpdENvbW1hRGVsaW1pdGVkKGdldFZhbHVlRnJvbUZ1bmN0aW9uU3RyaW5nKHZhbHVlKSk7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBudW1Db2xvclRlcm1zOyBpKyspIHtcbiAgICBjb2xvclZhbHVlc1tjb2xvclRlcm1zW2ldXSA9IGNvbG9yc1tpXSAhPT0gdW5kZWZpbmVkID8gY29sb3JzW2ldIDogMTtcbiAgfVxuXG4gIHJldHVybiBjb2xvclZhbHVlcztcbn07XG5cbi8qXG4gIEdldCB2YWx1ZSBmcm9tIGZ1bmN0aW9uIHN0cmluZ1xuXG4gIFwidHJhbnNsYXRlWCgyMHB4KVwiIC0+IFwiMjBweFwiXG4qL1xudmFyIGdldFZhbHVlRnJvbUZ1bmN0aW9uU3RyaW5nID0gZXhwb3J0cy5nZXRWYWx1ZUZyb21GdW5jdGlvblN0cmluZyA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICByZXR1cm4gdmFsdWUuc3Vic3RyaW5nKHZhbHVlLmluZGV4T2YoJygnKSArIDEsIHZhbHVlLmxhc3RJbmRleE9mKCcpJykpO1xufTtcblxuLypcbiAgQ2hlY2sgaWYgdHdvIG9iamVjdHMgaGF2ZSBjaGFuZ2VkIGZyb20gZWFjaCBvdGhlclxuICBcbiAgQHBhcmFtIFtvYmplY3RdOiBJbnB1dCBBXG4gIEBwYXJhbSBbb2JqZWN0XTogSW5wdXQgQlxuICBAcmV0dXJuIFtib29sZWFuXTogVHJ1ZSBpZiBkaWZmZXJlbnRcbiovXG52YXIgaGFzQ2hhbmdlZCA9IGV4cG9ydHMuaGFzQ2hhbmdlZCA9IGZ1bmN0aW9uIChhLCBiKSB7XG4gIHZhciBjaGFuZ2VkID0gZmFsc2U7XG5cbiAgZm9yICh2YXIga2V5IGluIGEpIHtcbiAgICBpZiAoYS5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICBpZiAoaGFzUHJvcGVydHkoYiwga2V5KSkge1xuICAgICAgICBpZiAoYVtrZXldICE9PSBiW2tleV0pIHtcbiAgICAgICAgICBjaGFuZ2VkID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY2hhbmdlZCA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGNoYW5nZWQ7XG59O1xuXG4vKlxuICBDaGVjayBpZiBvYmplY3QgaGFzIHByb3BlcnR5IGFuZCBpdCBpc24ndCB1bmRlZmluZWRcblxuICBAcGFyYW0gW29iamVjdF1cbiAgQHBhcmFtIFtzdHJpbmddXG4gIEByZXR1cm4gW2Jvb2xlYW5dXG4qL1xudmFyIGhhc1Byb3BlcnR5ID0gZXhwb3J0cy5oYXNQcm9wZXJ0eSA9IGZ1bmN0aW9uIChvYmplY3QsIHByb3BlcnR5TmFtZSkge1xuICByZXR1cm4gb2JqZWN0Lmhhc093blByb3BlcnR5KHByb3BlcnR5TmFtZSkgJiYgb2JqZWN0W3Byb3BlcnR5TmFtZV0gIT09IHVuZGVmaW5lZDtcbn07XG5cbi8qXG4gIElzIHV0aWxzIHZhciBhbiBhcnJheSA/IFxuICBcbiAgQHBhcmFtOiBWYXJpYWJsZSB0byB0ZXN0XG4gIEByZXR1cm4gW2Jvb2xlYW5dOiBSZXR1cm5zIHRydWUgaWYgdXRpbHMudmFyVHlwZSA9PT0gJ0FycmF5J1xuKi9cbnZhciBpc0FycmF5ID0gZXhwb3J0cy5pc0FycmF5ID0gZnVuY3Rpb24gKGFycikge1xuICByZXR1cm4gdmFyVHlwZShhcnIpID09PSAnQXJyYXknO1xufTtcblxuLypcbiAgSXMgdXRpbHMgdmFyIGEgZnVuY3Rpb24gPyBcbiAgXG4gIEBwYXJhbTogVmFyaWFibGUgdG8gdGVzdFxuICBAcmV0dXJuIFtib29sZWFuXTogUmV0dXJucyB0cnVlIGlmIHV0aWxzLnZhclR5cGUgPT09ICdGdW5jdGlvbidcbiovXG52YXIgaXNGdW5jID0gZXhwb3J0cy5pc0Z1bmMgPSBmdW5jdGlvbiAob2JqKSB7XG4gIHJldHVybiB2YXJUeXBlKG9iaikgPT09ICdGdW5jdGlvbic7XG59O1xuXG4vKlxuICBJcyB1dGlscyB2YXIgYSBudW1iZXI/XG4gIFxuICBAcGFyYW06IFZhcmlhYmxlIHRvIHRlc3RcbiAgQHJldHVybiBbYm9vbGVhbl06IFJldHVybnMgdHJ1ZSBpZiB0eXBlb2YgPT09ICdudW1iZXInXG4qL1xudmFyIGlzTnVtID0gZXhwb3J0cy5pc051bSA9IGZ1bmN0aW9uIChudW0pIHtcbiAgcmV0dXJuIHR5cGVvZiBudW0gPT09ICdudW1iZXInO1xufTtcblxuLypcbiAgSXMgdXRpbHMgdmFyIGFuIG9iamVjdD9cbiAgXG4gIEBwYXJhbTogVmFyaWFibGUgdG8gdGVzdFxuICBAcmV0dXJuIFtib29sZWFuXTogUmV0dXJucyB0cnVlIGlmIHR5cGVvZiA9PT0gJ29iamVjdCdcbiovXG52YXIgaXNPYmogPSBleHBvcnRzLmlzT2JqID0gZnVuY3Rpb24gKG9iaikge1xuICByZXR1cm4gdHlwZW9mIG9iaiA9PT0gJ29iamVjdCc7XG59O1xuXG4vKlxuICBJcyB1dGlscyBhIHJlbGF0aXZlIHZhbHVlIGFzc2lnbm1lbnQ/XG4gIFxuICBAcGFyYW0gW3N0cmluZ106IFZhcmlhYmxlIHRvIHRlc3RcbiAgQHJldHVybiBbYm9vbGVhbl06IElmIHV0aWxzIGxvb2tzIGxpa2UgYSByZWxhdGl2ZSB2YWx1ZSBhc3NpZ25tZW50XG4qL1xudmFyIGlzUmVsYXRpdmVWYWx1ZSA9IGV4cG9ydHMuaXNSZWxhdGl2ZVZhbHVlID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gIHJldHVybiB2YWx1ZSAmJiB2YWx1ZS5pbmRleE9mICYmIHZhbHVlLmluZGV4T2YoJz0nKSA+IDAgPyB0cnVlIDogZmFsc2U7XG59O1xuXG4vKlxuICBJcyB1dGlscyB2YXIgYSBzdHJpbmcgPyBcbiAgXG4gIEBwYXJhbTogVmFyaWFibGUgdG8gdGVzdFxuICBAcmV0dXJuIFtib29sZWFuXTogUmV0dXJucyB0cnVlIGlmIHR5cGVvZiBzdHIgPT09ICdzdHJpbmcnXG4qL1xudmFyIGlzU3RyaW5nID0gZXhwb3J0cy5pc1N0cmluZyA9IGZ1bmN0aW9uIChzdHIpIHtcbiAgcmV0dXJuIHR5cGVvZiBzdHIgPT09ICdzdHJpbmcnO1xufTtcblxuLypcbiAgQHBhcmFtIFtzdHJpbmcgfHwgTm9kZUxpc3RdOlxuICAgIElmIHN0cmluZywgdHJlYXRlZCBhcyBzZWxlY3Rvci5cbiAgICBJZiBub3QsIHRyZWF0ZWQgYXMgcHJlZXhpc3RpbmcgTm9kZUxpc3RcblxuICBAcmV0dXJuIFtBcnJheV1cbiovXG52YXIgc2VsZWN0RG9tID0gZXhwb3J0cy5zZWxlY3REb20gPSBmdW5jdGlvbiAoc2VsZWN0b3IpIHtcbiAgdmFyIG5vZGVzID0gdHlwZW9mIHNlbGVjdG9yID09PSAnc3RyaW5nJyA/IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoc2VsZWN0b3IpIDogc2VsZWN0b3I7XG4gIHJldHVybiBub2Rlcy5sZW5ndGggPyBbXS5zbGljZS5jYWxsKG5vZGVzKSA6IFtdLnB1c2gobm9kZXMpO1xufTtcblxuLypcbiAgU3BsaXQgY29tbWEtZGVsaW1pdGVkIHN0cmluZ1xuXG4gIFwiZm9vLGJhclwiIC0+IFtcImZvb1wiLCBcImJhclwiXVxuXG4gIEBwYXJhbSBbc3RyaW5nXVxuICBAcmV0dXJuIFthcnJheV1cbiovXG52YXIgc3BsaXRDb21tYURlbGltaXRlZCA9IGV4cG9ydHMuc3BsaXRDb21tYURlbGltaXRlZCA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICByZXR1cm4gaXNTdHJpbmcodmFsdWUpID8gdmFsdWUuc3BsaXQoLyxcXHMqLykgOiBbdmFsdWVdO1xufTtcblxuLypcbiAgU3BsaXQgc3BhY2UtZGVsaW1pdGVkIHN0cmluZ1xuXG4gIFwiZm9vIGJhclwiIC0+IFtcImZvb1wiLCBcImJhclwiXVxuXG4gIEBwYXJhbSBbc3RyaW5nXVxuICBAcmV0dXJuIFthcnJheV1cbiovXG52YXIgc3BsaXRTcGFjZURlbGltaXRlZCA9IGV4cG9ydHMuc3BsaXRTcGFjZURlbGltaXRlZCA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICByZXR1cm4gaXNTdHJpbmcodmFsdWUpID8gdmFsdWUuc3BsaXQoJyAnKSA6IFt2YWx1ZV07XG59O1xuXG4vKlxuICBDb252ZXJ0IG51bWJlciB0byB4IGRlY2ltYWwgcGxhY2VzXG5cbiAgQHBhcmFtIFtudW1iZXJdXG4gIEBwYXJhbSBbbnVtYmVyXVxuICBAcmV0dXJuIFtudW1iZXJdXG4qL1xudmFyIHRvRGVjaW1hbCA9IGV4cG9ydHMudG9EZWNpbWFsID0gZnVuY3Rpb24gKG51bSkge1xuICB2YXIgcHJlY2lzaW9uID0gYXJndW1lbnRzLmxlbmd0aCA8PSAxIHx8IGFyZ3VtZW50c1sxXSA9PT0gdW5kZWZpbmVkID8gMiA6IGFyZ3VtZW50c1sxXTtcblxuICBwcmVjaXNpb24gPSBNYXRoLnBvdygxMCwgcHJlY2lzaW9uKTtcbiAgcmV0dXJuIE1hdGgucm91bmQobnVtICogcHJlY2lzaW9uKSAvIHByZWNpc2lvbjtcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5OeVl5OXBibU12ZFhScGJITXVhbk1pWFN3aWJtRnRaWE1pT2x0ZExDSnRZWEJ3YVc1bmN5STZJanM3TzBGQlFVRXNTVUZCVFN4eFFrRkJjVUlzYVVKQlFUTkNPMEZCUTBFc1NVRkJUU3h0UWtGQmJVSXNUMEZCZWtJN1FVRkRRU3hKUVVGTkxITkNRVUYxUWl4UFFVRlBMRmRCUVZBc1MwRkJkVUlzVjBGQmRrSXNTVUZCYzBNc1dVRkJXU3hIUVVFdlJUczdPenM3T3pzN1FVRlJRU3hKUVVGTkxGVkJRVlU3UVVGQlFTeFRRVUZaTEU5QlFVOHNVMEZCVUN4RFFVRnBRaXhSUVVGcVFpeERRVUV3UWl4SlFVRXhRaXhEUVVFclFpeFJRVUV2UWl4RlFVRjVReXhMUVVGNlF5eERRVUVyUXl4RFFVRXZReXhGUVVGclJDeERRVUZETEVOQlFXNUVMRU5CUVZvN1FVRkJRU3hEUVVGb1FqczdPenM3T3pzN1FVRlJUeXhKUVVGTkxHOURRVUZqTEZWQlFVTXNUVUZCUkR0QlFVRkJMRk5CUVZrc1QwRkJUeXhQUVVGUUxFTkJRV1VzYTBKQlFXWXNSVUZCYlVNc1owSkJRVzVETEVWQlFYRkVMRmRCUVhKRUxFVkJRVm83UVVGQlFTeERRVUZ3UWpzN1FVRkZRU3hKUVVGTkxEUkRRVUZyUWl4VlFVRkRMRTFCUVVRc1JVRkJVeXhMUVVGVUxFVkJRV2RDTEZOQlFXaENMRVZCUVRKQ0xFbEJRVE5DTEVWQlFXOURPMEZCUTJwRkxFMUJRVTBzVjBGQlZ5eE5RVUZOTEUxQlFYWkNPMEZCUTBFc1RVRkJTU3hYUVVGWExFVkJRV1k3TzBGQlJVRXNUMEZCU3l4SlFVRkpMRWxCUVVrc1EwRkJZaXhGUVVGblFpeEpRVUZKTEZGQlFYQkNMRVZCUVRoQ0xFZEJRVGxDTEVWQlFXMURPMEZCUTJwRExGRkJRVTBzVDBGQlR5eE5RVUZOTEVOQlFVNHNRMEZCWWp0QlFVTkJMRkZCUVVrc1QwRkJUeXhqUVVGUUxFTkJRWE5DTEVsQlFYUkNMRU5CUVVvc1JVRkJhVU03UVVGREwwSXNhMEpCUVZrc1QwRkJUeXhKUVVGUUxFbEJRV1VzVTBGQk0wSTdRVUZEUkR0QlFVTkdPenRCUVVWRUxFMUJRVWtzU1VGQlNpeEZRVUZWTzBGQlExSXNaVUZCVnl4VFFVRlRMRXRCUVZRc1EwRkJaU3hEUVVGbUxFVkJRV3RDTEVOQlFVTXNTVUZCYmtJc1EwRkJXRHRCUVVORU96dEJRVVZFTEZOQlFVOHNVVUZCVUR0QlFVTkVMRU5CYUVKTk96czdPenM3T3pzN096dEJRVEpDUVN4SlFVRk5MSE5FUVVGMVFpeFZRVUZETEV0QlFVUXNSVUZCVVN4TlFVRlNPMEZCUVVFc1UwRkJjMElzVFVGQmRFSXNVMEZCWjBNc1MwRkJhRU03UVVGQlFTeERRVUUzUWpzN096czdPenRCUVU5QkxFbEJRVTBzYjBOQlFXTXNjMEpCUVhOQ08wRkJRVUVzVTBGQlRTeFpRVUZaTEVkQlFWb3NSVUZCVGp0QlFVRkJMRU5CUVhSQ0xFZEJRV2RFTzBGQlFVRXNVMEZCVFN4SlFVRkpMRWxCUVVvc1IwRkJWeXhQUVVGWUxFVkJRVTQ3UVVGQlFTeERRVUZ3UlRzN096czdPenM3T3p0QlFWVkJMRWxCUVUwc09FTkJRVzFDTEZWQlFVTXNTMEZCUkN4RlFVRlhPMEZCUTNwRExFMUJRVWtzVFVGQlRTeExRVUZXTEVWQlFXbENPMEZCUTJZc1VVRkJUU3hoUVVGaExFMUJRVTBzUzBGQlRpeERRVUZaTEcxQ1FVRmFMRU5CUVc1Q096dEJRVVZCTEZkQlFVODdRVUZEVEN4aFFVRlBMRmRCUVZjc1YwRkJWeXhEUVVGWUxFTkJRVmdzUTBGRVJqdEJRVVZNTEZsQlFVOHNWMEZCVnl4RFFVRllPMEZCUmtZc1MwRkJVRHRCUVVsRUxFZEJVRVFzVFVGUFR6dEJRVU5NTEZkQlFVOHNSVUZCUlN4WlFVRkdMRVZCUVZBN1FVRkRSRHRCUVVOR0xFTkJXRTA3T3pzN096czdPenRCUVc5Q1FTeEpRVUZOTERCRFFVRnBRaXhWUVVGRExFdEJRVVFzUlVGQlVTeFZRVUZTTEVWQlFYVkNPMEZCUTI1RUxFMUJRVTBzWjBKQlFXZENMRmRCUVZjc1RVRkJha003UVVGRFFTeE5RVUZOTEdOQlFXTXNSVUZCY0VJN1FVRkRRU3hOUVVGTkxGTkJRVk1zYjBKQlFXOUNMREpDUVVFeVFpeExRVUV6UWl4RFFVRndRaXhEUVVGbU96dEJRVVZCTEU5QlFVc3NTVUZCU1N4SlFVRkpMRU5CUVdJc1JVRkJaMElzU1VGQlNTeGhRVUZ3UWl4RlFVRnRReXhIUVVGdVF5eEZRVUYzUXp0QlFVTjBReXhuUWtGQldTeFhRVUZYTEVOQlFWZ3NRMEZCV2l4SlFVRTRRaXhQUVVGUExFTkJRVkFzVFVGQll5eFRRVUZtTEVkQlFUUkNMRTlCUVU4c1EwRkJVQ3hEUVVFMVFpeEhRVUYzUXl4RFFVRnlSVHRCUVVORU96dEJRVVZFTEZOQlFVOHNWMEZCVUR0QlFVTkVMRU5CVmswN096czdPenM3UVVGcFFrRXNTVUZCVFN4clJVRkJOa0lzVlVGQlF5eExRVUZFTzBGQlFVRXNVMEZCVnl4TlFVRk5MRk5CUVU0c1EwRkJaMElzVFVGQlRTeFBRVUZPTEVOQlFXTXNSMEZCWkN4SlFVRnhRaXhEUVVGeVF5eEZRVUYzUXl4TlFVRk5MRmRCUVU0c1EwRkJhMElzUjBGQmJFSXNRMEZCZUVNc1EwRkJXRHRCUVVGQkxFTkJRVzVET3pzN096czdPenM3UVVGVFFTeEpRVUZOTEd0RFFVRmhMRlZCUVVNc1EwRkJSQ3hGUVVGSkxFTkJRVW9zUlVGQlZUdEJRVU5zUXl4TlFVRkpMRlZCUVZVc1MwRkJaRHM3UVVGRlFTeFBRVUZMTEVsQlFVa3NSMEZCVkN4SlFVRm5RaXhEUVVGb1FpeEZRVUZ0UWp0QlFVTnFRaXhSUVVGSkxFVkJRVVVzWTBGQlJpeERRVUZwUWl4SFFVRnFRaXhEUVVGS0xFVkJRVEpDTzBGQlEzcENMRlZCUVVrc1dVRkJXU3hEUVVGYUxFVkJRV1VzUjBGQlppeERRVUZLTEVWQlFYbENPMEZCUTNaQ0xGbEJRVWtzUlVGQlJTeEhRVUZHTEUxQlFWY3NSVUZCUlN4SFFVRkdMRU5CUVdZc1JVRkJkVUk3UVVGRGNrSXNiMEpCUVZVc1NVRkJWanRCUVVORU8wRkJRMFlzVDBGS1JDeE5RVWxQTzBGQlEwd3NhMEpCUVZVc1NVRkJWanRCUVVORU8wRkJRMFk3UVVGRFJqczdRVUZGUkN4VFFVRlBMRTlCUVZBN1FVRkRSQ3hEUVdoQ1RUczdPenM3T3pzN08wRkJlVUpCTEVsQlFVMHNiME5CUVdNc1ZVRkJReXhOUVVGRUxFVkJRVk1zV1VGQlZEdEJRVUZCTEZOQlFUQkNMRTlCUVU4c1kwRkJVQ3hEUVVGelFpeFpRVUYwUWl4TFFVRjFReXhQUVVGUExGbEJRVkFzVFVGQmVVSXNVMEZCTVVZN1FVRkJRU3hEUVVGd1FqczdPenM3T3pzN1FVRlJRU3hKUVVGTkxEUkNRVUZWTEZWQlFVTXNSMEZCUkR0QlFVRkJMRk5CUVZNc1VVRkJVU3hIUVVGU0xFMUJRV2xDTEU5QlFURkNPMEZCUVVFc1EwRkJhRUk3T3pzN096czdPMEZCVVVFc1NVRkJUU3d3UWtGQlV5eFZRVUZETEVkQlFVUTdRVUZCUVN4VFFVRlRMRkZCUVZFc1IwRkJVaXhOUVVGcFFpeFZRVUV4UWp0QlFVRkJMRU5CUVdZN096czdPenM3TzBGQlVVRXNTVUZCVFN4M1FrRkJVU3hWUVVGRExFZEJRVVE3UVVGQlFTeFRRVUZUTEU5QlFVOHNSMEZCVUN4TFFVRmxMRkZCUVhoQ08wRkJRVUVzUTBGQlpEczdPenM3T3pzN1FVRlJRU3hKUVVGTkxIZENRVUZSTEZWQlFVTXNSMEZCUkR0QlFVRkJMRk5CUVZNc1QwRkJUeXhIUVVGUUxFdEJRV1VzVVVGQmVFSTdRVUZCUVN4RFFVRmtPenM3T3pzN096dEJRVkZCTEVsQlFVMHNORU5CUVd0Q0xGVkJRVU1zUzBGQlJEdEJRVUZCTEZOQlFWa3NVMEZCVXl4TlFVRk5MRTlCUVdZc1NVRkJNRUlzVFVGQlRTeFBRVUZPTEVOQlFXTXNSMEZCWkN4SlFVRnhRaXhEUVVGb1JDeEhRVUZ4UkN4SlFVRnlSQ3hIUVVFMFJDeExRVUYyUlR0QlFVRkJMRU5CUVhoQ096czdPenM3T3p0QlFWRkJMRWxCUVUwc09FSkJRVmNzVlVGQlF5eEhRVUZFTzBGQlFVRXNVMEZCVXl4UFFVRlBMRWRCUVZBc1MwRkJaU3hSUVVGNFFqdEJRVUZCTEVOQlFXcENPenM3T3pzN096czdRVUZUUVN4SlFVRk5MR2REUVVGWkxGVkJRVU1zVVVGQlJDeEZRVUZqTzBGQlEzSkRMRTFCUVUwc1VVRkJVeXhQUVVGUExGRkJRVkFzUzBGQmIwSXNVVUZCY2tJc1IwRkJhVU1zVTBGQlV5eG5Ra0ZCVkN4RFFVRXdRaXhSUVVFeFFpeERRVUZxUXl4SFFVRjFSU3hSUVVGeVJqdEJRVU5CTEZOQlFWRXNUVUZCVFN4TlFVRlFMRWRCUVdsQ0xFZEJRVWNzUzBGQlNDeERRVUZUTEVsQlFWUXNRMEZCWXl4TFFVRmtMRU5CUVdwQ0xFZEJRWGRETEVkQlFVY3NTVUZCU0N4RFFVRlJMRXRCUVZJc1EwRkJMME03UVVGRFJDeERRVWhOT3pzN096czdPenM3TzBGQllVRXNTVUZCVFN4dlJFRkJjMElzVlVGQlF5eExRVUZFTzBGQlFVRXNVMEZCVnl4VFFVRlRMRXRCUVZRc1NVRkJhMElzVFVGQlRTeExRVUZPTEVOQlFWa3NUVUZCV2l4RFFVRnNRaXhIUVVGM1F5eERRVUZETEV0QlFVUXNRMEZCYmtRN1FVRkJRU3hEUVVFMVFqczdPenM3T3pzN096dEJRVlZCTEVsQlFVMHNiMFJCUVhOQ0xGVkJRVU1zUzBGQlJEdEJRVUZCTEZOQlFWY3NVMEZCVXl4TFFVRlVMRWxCUVd0Q0xFMUJRVTBzUzBGQlRpeERRVUZaTEVkQlFWb3NRMEZCYkVJc1IwRkJjVU1zUTBGQlF5eExRVUZFTEVOQlFXaEVPMEZCUVVFc1EwRkJOVUk3T3pzN096czdPenRCUVZOQkxFbEJRVTBzWjBOQlFWa3NWVUZCUXl4SFFVRkVMRVZCUVhkQ08wRkJRVUVzVFVGQmJFSXNVMEZCYTBJc2VVUkJRVTRzUTBGQlRUczdRVUZETDBNc2RVSkJRVmtzUlVGQldpeEZRVUZyUWl4VFFVRnNRanRCUVVOQkxGTkJRVThzUzBGQlN5eExRVUZNTEVOQlFWY3NUVUZCVFN4VFFVRnFRaXhKUVVFNFFpeFRRVUZ5UXp0QlFVTkVMRU5CU0UwaUxDSm1hV3hsSWpvaWRYUnBiSE11YW5NaUxDSnpiM1Z5WTJWU2IyOTBJam9pTDFWelpYSnpMMjFoZEhSd1pYSnllUzlUYVhSbGN5OXdiM0J0YjNScGIyNGlMQ0p6YjNWeVkyVnpRMjl1ZEdWdWRDSTZXeUpqYjI1emRDQkRRVTFGVEY5RFFWTkZYMUJCVkZSRlVrNGdQU0F2S0Z0aExYcGRLU2hiUVMxYVhTa3ZaenRjYm1OdmJuTjBJRkpGVUV4QlEwVmZWRVZOVUV4QlZFVWdQU0FuSkRFdEpESW5PMXh1WTI5dWMzUWdTRUZUWDFCRlVrWlBVazFCVGtORlgwNVBWeUE5SUNoMGVYQmxiMllnY0dWeVptOXliV0Z1WTJVZ0lUMDlJQ2QxYm1SbFptbHVaV1FuSUNZbUlIQmxjbVp2Y20xaGJtTmxMbTV2ZHlrN1hHNWNiaThxWEc0Z0lFZGxkQ0IyWVhJZ2RIbHdaU0JoY3lCemRISnBibWRjYmlBZ1hHNGdJRUJ3WVhKaGJUb2dWbUZ5YVdGaWJHVWdkRzhnZEdWemRGeHVJQ0JBY21WMGRYSnVJRnR6ZEhKcGJtZGRPaUJTWlhSMWNtNXpMQ0JtYjNJZ2FXNXpkR0Z1WTJVZ0owOWlhbVZqZENjZ2FXWWdXMjlpYW1WamRDQlBZbXBsWTNSZFhHNHFMMXh1WTI5dWMzUWdkbUZ5Vkhsd1pTQTlJSFpoY21saFlteGxJRDArSUU5aWFtVmpkQzV3Y205MGIzUjVjR1V1ZEc5VGRISnBibWN1WTJGc2JDaDJZWEpwWVdKc1pTa3VjMnhwWTJVb09Dd2dMVEVwTzF4dVhHNHZLbHh1SUNCRGIyNTJaWEowSUdOaGJXVnNRMkZ6WlNCMGJ5QmtZWE5vTFdOaGMyVmNibHh1SUNCQWNHRnlZVzBnVzNOMGNtbHVaMTFjYmlBZ1FISmxkSFZ5YmlCYmMzUnlhVzVuWFZ4dUtpOWNibVY0Y0c5eWRDQmpiMjV6ZENCallXMWxiRlJ2UkdGemFDQTlJQ2h6ZEhKcGJtY3BJRDArSUhOMGNtbHVaeTV5WlhCc1lXTmxLRU5CVFVWTVgwTkJVMFZmVUVGVVZFVlNUaXdnVWtWUVRFRkRSVjlVUlUxUVRFRlVSU2t1ZEc5TWIzZGxja05oYzJVb0tUdGNibHh1Wlhod2IzSjBJR052Ym5OMElHTnlaV0YwWlVSbGJHbHRhWFJsWkNBOUlDaDJZV3gxWlhNc0lIUmxjbTF6TENCa1pXeHBiV2wwWlhJc0lHTm9iM0FwSUQwK0lIdGNiaUFnWTI5dWMzUWdiblZ0VkdWeWJYTWdQU0IwWlhKdGN5NXNaVzVuZEdnN1hHNGdJR3hsZENCamIyMWlhVzVsWkNBOUlDY25PMXh1WEc0Z0lHWnZjaUFvYkdWMElHa2dQU0F3T3lCcElEd2diblZ0VkdWeWJYTTdJR2tyS3lrZ2UxeHVJQ0FnSUdOdmJuTjBJSFJsY20wZ1BTQjBaWEp0YzF0cFhUdGNiaUFnSUNCcFppQW9kbUZzZFdWekxtaGhjMDkzYmxCeWIzQmxjblI1S0hSbGNtMHBLU0I3WEc0Z0lDQWdJQ0JqYjIxaWFXNWxaQ0FyUFNCMllXeDFaWE5iZEdWeWJWMGdLeUJrWld4cGJXbDBaWEk3WEc0Z0lDQWdmVnh1SUNCOVhHNWNiaUFnYVdZZ0tHTm9iM0FwSUh0Y2JpQWdJQ0JqYjIxaWFXNWxaQ0E5SUdOdmJXSnBibVZrTG5Oc2FXTmxLREFzSUMxamFHOXdLVHRjYmlBZ2ZWeHVYRzRnSUhKbGRIVnliaUJqYjIxaWFXNWxaRHRjYm4wN1hHNWNiaThxWEc0Z0lFTnlaV0YwWlNCaElHWjFibU4wYVc5dUlITjBjbWx1WjF4dVhHNGdJQ2N5TUhCNEp5d2dKM1J5WVc1emJHRjBaU2NnTFQ0Z0ozUnlZVzV6YkdGMFpTZ3lNSEI0S1NkY2JseHVJQ0JBY0dGeVlXMGdXM04wY21sdVoxMWNiaUFnUUhCaGNtRnRJRnR6ZEhKcGJtZGRYRzRnSUVCeVpYUjFjbTRnVzNOMGNtbHVaMTFjYmlvdlhHNWxlSEJ2Y25RZ1kyOXVjM1FnWTNKbFlYUmxSblZ1WTNScGIyNVRkSEpwYm1jZ1BTQW9kbUZzZFdVc0lIQnlaV1pwZUNrZ1BUNGdZQ1I3Y0hKbFptbDRmU2drZTNaaGJIVmxmU2xnTzF4dVhHNHZLbHh1SUNCSFpXNWxjbUYwWlNCamRYSnlaVzUwSUhScGJXVnpkR0Z0Y0Z4dUlDQmNiaUFnUUhKbGRIVnliaUJiZEdsdFpYTjBZVzF3WFRvZ1EzVnljbVZ1ZENCVlRrbFlJSFJwYldWemRHRnRjRnh1S2k5Y2JtVjRjRzl5ZENCamIyNXpkQ0JqZFhKeVpXNTBWR2x0WlNBOUlFaEJVMTlRUlZKR1QxSk5RVTVEUlY5T1QxY2dQeUFvS1NBOVBpQndaWEptYjNKdFlXNWpaUzV1YjNjb0tTQTZJQ2dwSUQwK0lHNWxkeUJFWVhSbEtDa3VaMlYwVkdsdFpTZ3BPMXh1WEc0dktseHVJQ0JUY0d4cGRDQmhJSFpoYkhWbElHbHVkRzhnWVNCMllXeDFaUzkxYm1sMElHOWlhbVZqZEZ4dUlDQmNiaUFnSUNCY0lqSXdNSEI0WENJZ0xUNGdleUIyWVd4MVpUb2dNakF3TENCMWJtbDBPaUJjSW5CNFhDSWdmVnh1SUNBZ0lGeHVJQ0JBY0dGeVlXMGdXM04wY21sdVoxMDZJRlpoYkhWbElIUnZJSE53YkdsMFhHNGdJRUJ5WlhSMWNtNGdXMjlpYW1WamRGMDZJRTlpYW1WamRDQjNhWFJvSUhaaGJIVmxJR0Z1WkNCMWJtbDBJSEJ5YjNCelhHNHFMMXh1Wlhod2IzSjBJR052Ym5OMElHWnBibVJXWVd4MVpVRnVaRlZ1YVhRZ1BTQW9kbUZzZFdVcElEMCtJSHRjYmlBZ2FXWWdLSFpoYkhWbExtMWhkR05vS1NCN1hHNGdJQ0FnWTI5dWMzUWdjM0JzYVhSV1lXeDFaU0E5SUhaaGJIVmxMbTFoZEdOb0tDOG9MVDljWEdRcVhGd3VQMXhjWkNvcEtDNHFLUzhwTzF4dVhHNGdJQ0FnY21WMGRYSnVJSHRjYmlBZ0lDQWdJSFpoYkhWbE9pQndZWEp6WlVac2IyRjBLSE53YkdsMFZtRnNkV1ZiTVYwcExGeHVJQ0FnSUNBZ2RXNXBkRG9nSUhOd2JHbDBWbUZzZFdWYk1sMWNiaUFnSUNCOU8xeHVJQ0I5SUdWc2MyVWdlMXh1SUNBZ0lISmxkSFZ5YmlCN0lIWmhiSFZsSUgwN1hHNGdJSDFjYm4wN1hHNWNiaThxWEc0Z0lGTndiR2wwSUdOdmJHOXlJSE4wY21sdVp5QnBiblJ2SUcxaGNDQnZaaUJqYjJ4dmNpQndjbTl3WlhKMGFXVnpYRzVjYmlBZ1hDSnlaMkpoS0RJMU5Td2dNalUxTENBeU5UVXNJREFwWENJc0lGdGNJbEpsWkZ3aUxDQW5SM0psWlc1Y0lpd2dYQ0pDYkhWbFhDSXNJRndpUVd4d2FHRmNJbDFjYmx4dUlDQjdJRkpsWkRvZ01qVTFMaTR1SUgxY2Jpb3ZYRzVsZUhCdmNuUWdZMjl1YzNRZ1oyVjBRMjlzYjNKV1lXeDFaWE1nUFNBb2RtRnNkV1VzSUdOdmJHOXlWR1Z5YlhNcElEMCtJSHRjYmlBZ1kyOXVjM1FnYm5WdFEyOXNiM0pVWlhKdGN5QTlJR052Ykc5eVZHVnliWE11YkdWdVozUm9PMXh1SUNCamIyNXpkQ0JqYjJ4dmNsWmhiSFZsY3lBOUlIdDlPMXh1SUNCamIyNXpkQ0JqYjJ4dmNuTWdQU0J6Y0d4cGRFTnZiVzFoUkdWc2FXMXBkR1ZrS0dkbGRGWmhiSFZsUm5KdmJVWjFibU4wYVc5dVUzUnlhVzVuS0haaGJIVmxLU2s3WEc1Y2JpQWdabTl5SUNoc1pYUWdhU0E5SURBN0lHa2dQQ0J1ZFcxRGIyeHZjbFJsY20xek95QnBLeXNwSUh0Y2JpQWdJQ0JqYjJ4dmNsWmhiSFZsYzF0amIyeHZjbFJsY20xelcybGRYU0E5SUNoamIyeHZjbk5iYVYwZ0lUMDlJSFZ1WkdWbWFXNWxaQ2tnUHlCamIyeHZjbk5iYVYwZ09pQXhPMXh1SUNCOVhHNWNiaUFnY21WMGRYSnVJR052Ykc5eVZtRnNkV1Z6TzF4dWZUdGNibHh1THlwY2JpQWdSMlYwSUhaaGJIVmxJR1p5YjIwZ1puVnVZM1JwYjI0Z2MzUnlhVzVuWEc1Y2JpQWdYQ0owY21GdWMyeGhkR1ZZS0RJd2NIZ3BYQ0lnTFQ0Z1hDSXlNSEI0WENKY2Jpb3ZYRzVsZUhCdmNuUWdZMjl1YzNRZ1oyVjBWbUZzZFdWR2NtOXRSblZ1WTNScGIyNVRkSEpwYm1jZ1BTQW9kbUZzZFdVcElEMCtJSFpoYkhWbExuTjFZbk4wY21sdVp5aDJZV3gxWlM1cGJtUmxlRTltS0Njb0p5a2dLeUF4TENCMllXeDFaUzVzWVhOMFNXNWtaWGhQWmlnbktTY3BLVHRjYmx4dUx5cGNiaUFnUTJobFkyc2dhV1lnZEhkdklHOWlhbVZqZEhNZ2FHRjJaU0JqYUdGdVoyVmtJR1p5YjIwZ1pXRmphQ0J2ZEdobGNseHVJQ0JjYmlBZ1FIQmhjbUZ0SUZ0dlltcGxZM1JkT2lCSmJuQjFkQ0JCWEc0Z0lFQndZWEpoYlNCYmIySnFaV04wWFRvZ1NXNXdkWFFnUWx4dUlDQkFjbVYwZFhKdUlGdGliMjlzWldGdVhUb2dWSEoxWlNCcFppQmthV1ptWlhKbGJuUmNiaW92WEc1bGVIQnZjblFnWTI5dWMzUWdhR0Z6UTJoaGJtZGxaQ0E5SUNoaExDQmlLU0E5UGlCN1hHNGdJR3hsZENCamFHRnVaMlZrSUQwZ1ptRnNjMlU3WEc1Y2JpQWdabTl5SUNoc1pYUWdhMlY1SUdsdUlHRXBJSHRjYmlBZ0lDQnBaaUFvWVM1b1lYTlBkMjVRY205d1pYSjBlU2hyWlhrcEtTQjdYRzRnSUNBZ0lDQnBaaUFvYUdGelVISnZjR1Z5ZEhrb1lpd2dhMlY1S1NrZ2UxeHVJQ0FnSUNBZ0lDQnBaaUFvWVZ0clpYbGRJQ0U5UFNCaVcydGxlVjBwSUh0Y2JpQWdJQ0FnSUNBZ0lDQmphR0Z1WjJWa0lEMGdkSEoxWlR0Y2JpQWdJQ0FnSUNBZ2ZWeHVJQ0FnSUNBZ2ZTQmxiSE5sSUh0Y2JpQWdJQ0FnSUNBZ1kyaGhibWRsWkNBOUlIUnlkV1U3WEc0Z0lDQWdJQ0I5WEc0Z0lDQWdmVnh1SUNCOVhHNWNiaUFnY21WMGRYSnVJR05vWVc1blpXUTdYRzU5TzF4dVhHNHZLbHh1SUNCRGFHVmpheUJwWmlCdlltcGxZM1FnYUdGeklIQnliM0JsY25SNUlHRnVaQ0JwZENCcGMyNG5kQ0IxYm1SbFptbHVaV1JjYmx4dUlDQkFjR0Z5WVcwZ1cyOWlhbVZqZEYxY2JpQWdRSEJoY21GdElGdHpkSEpwYm1kZFhHNGdJRUJ5WlhSMWNtNGdXMkp2YjJ4bFlXNWRYRzRxTDF4dVpYaHdiM0owSUdOdmJuTjBJR2hoYzFCeWIzQmxjblI1SUQwZ0tHOWlhbVZqZEN3Z2NISnZjR1Z5ZEhsT1lXMWxLU0E5UGlCdlltcGxZM1F1YUdGelQzZHVVSEp2Y0dWeWRIa29jSEp2Y0dWeWRIbE9ZVzFsS1NBbUppQnZZbXBsWTNSYmNISnZjR1Z5ZEhsT1lXMWxYU0FoUFQwZ2RXNWtaV1pwYm1Wa08xeHVYRzR2S2x4dUlDQkpjeUIxZEdsc2N5QjJZWElnWVc0Z1lYSnlZWGtnUHlCY2JpQWdYRzRnSUVCd1lYSmhiVG9nVm1GeWFXRmliR1VnZEc4Z2RHVnpkRnh1SUNCQWNtVjBkWEp1SUZ0aWIyOXNaV0Z1WFRvZ1VtVjBkWEp1Y3lCMGNuVmxJR2xtSUhWMGFXeHpMblpoY2xSNWNHVWdQVDA5SUNkQmNuSmhlU2RjYmlvdlhHNWxlSEJ2Y25RZ1kyOXVjM1FnYVhOQmNuSmhlU0E5SUNoaGNuSXBJRDArSUhaaGNsUjVjR1VvWVhKeUtTQTlQVDBnSjBGeWNtRjVKenRjYmx4dUx5cGNiaUFnU1hNZ2RYUnBiSE1nZG1GeUlHRWdablZ1WTNScGIyNGdQeUJjYmlBZ1hHNGdJRUJ3WVhKaGJUb2dWbUZ5YVdGaWJHVWdkRzhnZEdWemRGeHVJQ0JBY21WMGRYSnVJRnRpYjI5c1pXRnVYVG9nVW1WMGRYSnVjeUIwY25WbElHbG1JSFYwYVd4ekxuWmhjbFI1Y0dVZ1BUMDlJQ2RHZFc1amRHbHZiaWRjYmlvdlhHNWxlSEJ2Y25RZ1kyOXVjM1FnYVhOR2RXNWpJRDBnS0c5aWFpa2dQVDRnZG1GeVZIbHdaU2h2WW1vcElEMDlQU0FuUm5WdVkzUnBiMjRuTzF4dVhHNHZLbHh1SUNCSmN5QjFkR2xzY3lCMllYSWdZU0J1ZFcxaVpYSS9YRzRnSUZ4dUlDQkFjR0Z5WVcwNklGWmhjbWxoWW14bElIUnZJSFJsYzNSY2JpQWdRSEpsZEhWeWJpQmJZbTl2YkdWaGJsMDZJRkpsZEhWeWJuTWdkSEoxWlNCcFppQjBlWEJsYjJZZ1BUMDlJQ2R1ZFcxaVpYSW5YRzRxTDF4dVpYaHdiM0owSUdOdmJuTjBJR2x6VG5WdElEMGdLRzUxYlNrZ1BUNGdkSGx3Wlc5bUlHNTFiU0E5UFQwZ0oyNTFiV0psY2ljN1hHNWNiaThxWEc0Z0lFbHpJSFYwYVd4eklIWmhjaUJoYmlCdlltcGxZM1EvWEc0Z0lGeHVJQ0JBY0dGeVlXMDZJRlpoY21saFlteGxJSFJ2SUhSbGMzUmNiaUFnUUhKbGRIVnliaUJiWW05dmJHVmhibDA2SUZKbGRIVnlibk1nZEhKMVpTQnBaaUIwZVhCbGIyWWdQVDA5SUNkdlltcGxZM1FuWEc0cUwxeHVaWGh3YjNKMElHTnZibk4wSUdselQySnFJRDBnS0c5aWFpa2dQVDRnZEhsd1pXOW1JRzlpYWlBOVBUMGdKMjlpYW1WamRDYzdYRzVjYmk4cVhHNGdJRWx6SUhWMGFXeHpJR0VnY21Wc1lYUnBkbVVnZG1Gc2RXVWdZWE56YVdkdWJXVnVkRDljYmlBZ1hHNGdJRUJ3WVhKaGJTQmJjM1J5YVc1blhUb2dWbUZ5YVdGaWJHVWdkRzhnZEdWemRGeHVJQ0JBY21WMGRYSnVJRnRpYjI5c1pXRnVYVG9nU1dZZ2RYUnBiSE1nYkc5dmEzTWdiR2xyWlNCaElISmxiR0YwYVhabElIWmhiSFZsSUdGemMybG5ibTFsYm5SY2Jpb3ZYRzVsZUhCdmNuUWdZMjl1YzNRZ2FYTlNaV3hoZEdsMlpWWmhiSFZsSUQwZ0tIWmhiSFZsS1NBOVBpQW9kbUZzZFdVZ0ppWWdkbUZzZFdVdWFXNWtaWGhQWmlBbUppQjJZV3gxWlM1cGJtUmxlRTltS0NjOUp5a2dQaUF3S1NBL0lIUnlkV1VnT2lCbVlXeHpaVHRjYmx4dUx5cGNiaUFnU1hNZ2RYUnBiSE1nZG1GeUlHRWdjM1J5YVc1bklEOGdYRzRnSUZ4dUlDQkFjR0Z5WVcwNklGWmhjbWxoWW14bElIUnZJSFJsYzNSY2JpQWdRSEpsZEhWeWJpQmJZbTl2YkdWaGJsMDZJRkpsZEhWeWJuTWdkSEoxWlNCcFppQjBlWEJsYjJZZ2MzUnlJRDA5UFNBbmMzUnlhVzVuSjF4dUtpOWNibVY0Y0c5eWRDQmpiMjV6ZENCcGMxTjBjbWx1WnlBOUlDaHpkSElwSUQwK0lIUjVjR1Z2WmlCemRISWdQVDA5SUNkemRISnBibWNuTzF4dVhHNHZLbHh1SUNCQWNHRnlZVzBnVzNOMGNtbHVaeUI4ZkNCT2IyUmxUR2x6ZEYwNlhHNGdJQ0FnU1dZZ2MzUnlhVzVuTENCMGNtVmhkR1ZrSUdGeklITmxiR1ZqZEc5eUxseHVJQ0FnSUVsbUlHNXZkQ3dnZEhKbFlYUmxaQ0JoY3lCd2NtVmxlR2x6ZEdsdVp5Qk9iMlJsVEdsemRGeHVYRzRnSUVCeVpYUjFjbTRnVzBGeWNtRjVYVnh1S2k5Y2JtVjRjRzl5ZENCamIyNXpkQ0J6Wld4bFkzUkViMjBnUFNBb2MyVnNaV04wYjNJcElEMCtJSHRjYmlBZ1kyOXVjM1FnYm05a1pYTWdQU0FvZEhsd1pXOW1JSE5sYkdWamRHOXlJRDA5UFNBbmMzUnlhVzVuSnlrZ1B5QmtiMk4xYldWdWRDNXhkV1Z5ZVZObGJHVmpkRzl5UVd4c0tITmxiR1ZqZEc5eUtTQTZJSE5sYkdWamRHOXlPMXh1SUNCeVpYUjFjbTRnS0c1dlpHVnpMbXhsYm1kMGFDa2dQeUJiWFM1emJHbGpaUzVqWVd4c0tHNXZaR1Z6S1NBNklGdGRMbkIxYzJnb2JtOWtaWE1wTzF4dWZUdGNibHh1THlwY2JpQWdVM0JzYVhRZ1kyOXRiV0V0WkdWc2FXMXBkR1ZrSUhOMGNtbHVaMXh1WEc0Z0lGd2labTl2TEdKaGNsd2lJQzArSUZ0Y0ltWnZiMXdpTENCY0ltSmhjbHdpWFZ4dVhHNGdJRUJ3WVhKaGJTQmJjM1J5YVc1blhWeHVJQ0JBY21WMGRYSnVJRnRoY25KaGVWMWNiaW92WEc1bGVIQnZjblFnWTI5dWMzUWdjM0JzYVhSRGIyMXRZVVJsYkdsdGFYUmxaQ0E5SUNoMllXeDFaU2tnUFQ0Z2FYTlRkSEpwYm1jb2RtRnNkV1VwSUQ4Z2RtRnNkV1V1YzNCc2FYUW9MeXhjWEhNcUx5a2dPaUJiZG1Gc2RXVmRPMXh1WEc0dktseHVJQ0JUY0d4cGRDQnpjR0ZqWlMxa1pXeHBiV2wwWldRZ2MzUnlhVzVuWEc1Y2JpQWdYQ0ptYjI4Z1ltRnlYQ0lnTFQ0Z1cxd2labTl2WENJc0lGd2lZbUZ5WENKZFhHNWNiaUFnUUhCaGNtRnRJRnR6ZEhKcGJtZGRYRzRnSUVCeVpYUjFjbTRnVzJGeWNtRjVYVnh1S2k5Y2JtVjRjRzl5ZENCamIyNXpkQ0J6Y0d4cGRGTndZV05sUkdWc2FXMXBkR1ZrSUQwZ0tIWmhiSFZsS1NBOVBpQnBjMU4wY21sdVp5aDJZV3gxWlNrZ1B5QjJZV3gxWlM1emNHeHBkQ2duSUNjcElEb2dXM1poYkhWbFhUdGNibHh1THlwY2JpQWdRMjl1ZG1WeWRDQnVkVzFpWlhJZ2RHOGdlQ0JrWldOcGJXRnNJSEJzWVdObGMxeHVYRzRnSUVCd1lYSmhiU0JiYm5WdFltVnlYVnh1SUNCQWNHRnlZVzBnVzI1MWJXSmxjbDFjYmlBZ1FISmxkSFZ5YmlCYmJuVnRZbVZ5WFZ4dUtpOWNibVY0Y0c5eWRDQmpiMjV6ZENCMGIwUmxZMmx0WVd3Z1BTQW9iblZ0TENCd2NtVmphWE5wYjI0Z1BTQXlLU0E5UGlCN1hHNGdJSEJ5WldOcGMybHZiaUE5SURFd0lDb3FJSEJ5WldOcGMybHZianRjYmlBZ2NtVjBkWEp1SUUxaGRHZ3VjbTkxYm1Rb2JuVnRJQ29nY0hKbFkybHphVzl1S1NBdklIQnlaV05wYzJsdmJqdGNibjA3WEc0aVhYMD1cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2luYy91dGlscy5qc1xuICoqIG1vZHVsZSBpZCA9IDIxXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfZGVmYXVsdFByb3BzID0gcmVxdWlyZSgnLi9zZXR0aW5ncy9kZWZhdWx0LXByb3BzJyk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IHtcbiAgZGVmYXVsdFByb3BzOiBfZGVmYXVsdFByb3BzLm9wYWNpdHlcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5OeVl5OTJZV3gxWlMxMGVYQmxjeTloYkhCb1lTNXFjeUpkTENKdVlXMWxjeUk2VzEwc0ltMWhjSEJwYm1keklqb2lPenM3TzBGQlFVRTdPMnRDUVVWbE8wRkJRMkk3UVVGRVlTeERJaXdpWm1sc1pTSTZJbUZzY0doaExtcHpJaXdpYzI5MWNtTmxVbTl2ZENJNklpOVZjMlZ5Y3k5dFlYUjBjR1Z5Y25rdlUybDBaWE12Y0c5d2JXOTBhVzl1SWl3aWMyOTFjbU5sYzBOdmJuUmxiblFpT2xzaWFXMXdiM0owSUhzZ2IzQmhZMmwwZVNCOUlHWnliMjBnSnk0dmMyVjBkR2x1WjNNdlpHVm1ZWFZzZEMxd2NtOXdjeWM3WEc1Y2JtVjRjRzl5ZENCa1pXWmhkV3gwSUh0Y2JpQWdaR1ZtWVhWc2RGQnliM0J6T2lCdmNHRmphWFI1WEc1OU95SmRmUT09XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy92YWx1ZS10eXBlcy9hbHBoYS5qc1xuICoqIG1vZHVsZSBpZCA9IDIyXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfdW5pdCA9IHJlcXVpcmUoJy4vdW5pdCcpO1xuXG52YXIgX3VuaXQyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfdW5pdCk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmV4cG9ydHMuZGVmYXVsdCA9IHtcbiAgZGVmYXVsdFByb3BzOiB7XG4gICAgdW5pdDogJ2RlZycsXG4gICAgdHlwZTogX3VuaXQyLmRlZmF1bHRcbiAgfVxufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbk55WXk5MllXeDFaUzEwZVhCbGN5OWhibWRzWlM1cWN5SmRMQ0p1WVcxbGN5STZXMTBzSW0xaGNIQnBibWR6SWpvaU96czdPMEZCUVVFN096czdPenRyUWtGRlpUdEJRVU5pTEdkQ1FVRmpPMEZCUTFvc1ZVRkJUU3hMUVVSTk8wRkJSVm83UVVGR1dUdEJRVVJFTEVNaUxDSm1hV3hsSWpvaVlXNW5iR1V1YW5NaUxDSnpiM1Z5WTJWU2IyOTBJam9pTDFWelpYSnpMMjFoZEhSd1pYSnllUzlUYVhSbGN5OXdiM0J0YjNScGIyNGlMQ0p6YjNWeVkyVnpRMjl1ZEdWdWRDSTZXeUpwYlhCdmNuUWdkVzVwZEZSNWNHVWdabkp2YlNBbkxpOTFibWwwSnp0Y2JseHVaWGh3YjNKMElHUmxabUYxYkhRZ2UxeHVJQ0JrWldaaGRXeDBVSEp2Y0hNNklIdGNiaUFnSUNCMWJtbDBPaUFuWkdWbkp5eGNiaUFnSUNCMGVYQmxPaUIxYm1sMFZIbHdaVnh1SUNCOVhHNTlPeUpkZlE9PVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvdmFsdWUtdHlwZXMvYW5nbGUuanNcbiAqKiBtb2R1bGUgaWQgPSAyM1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9O1xuXG52YXIgX3JnYiA9IHJlcXVpcmUoJy4vcmdiJyk7XG5cbnZhciBfcmdiMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JnYik7XG5cbnZhciBfaHNsID0gcmVxdWlyZSgnLi9oc2wnKTtcblxudmFyIF9oc2wyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfaHNsKTtcblxudmFyIF9oZXggPSByZXF1aXJlKCcuL2hleCcpO1xuXG52YXIgX2hleDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9oZXgpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG52YXIgY29sb3JUeXBlcyA9IFtfcmdiMi5kZWZhdWx0LCBfaHNsMi5kZWZhdWx0LCBfaGV4Mi5kZWZhdWx0XTtcbnZhciBudW1Db2xvclR5cGVzID0gY29sb3JUeXBlcy5sZW5ndGg7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IHtcbiAgZGVmYXVsdFByb3BzOiBfZXh0ZW5kcyh7fSwgX3JnYjIuZGVmYXVsdC5kZWZhdWx0UHJvcHMsIF9oc2wyLmRlZmF1bHQuZGVmYXVsdFByb3BzKSxcblxuICB0ZXN0OiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICByZXR1cm4gX3JnYjIuZGVmYXVsdC50ZXN0KHZhbHVlKSB8fCBfaGV4Mi5kZWZhdWx0LnRlc3QodmFsdWUpIHx8IF9oc2wyLmRlZmF1bHQudGVzdCh2YWx1ZSk7XG4gIH0sXG5cbiAgc3BsaXQ6IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbnVtQ29sb3JUeXBlczsgaSsrKSB7XG4gICAgICBpZiAoY29sb3JUeXBlc1tpXS50ZXN0KHZhbHVlKSkge1xuICAgICAgICByZXR1cm4gY29sb3JUeXBlc1tpXS5zcGxpdCh2YWx1ZSk7XG4gICAgICB9XG4gICAgfVxuICB9LFxuXG4gIGNvbWJpbmU6IGZ1bmN0aW9uICh2YWx1ZXMpIHtcbiAgICByZXR1cm4gdmFsdWVzLlJlZCAhPT0gdW5kZWZpbmVkID8gX3JnYjIuZGVmYXVsdC5jb21iaW5lKHZhbHVlcykgOiBfaHNsMi5kZWZhdWx0LmNvbWJpbmUodmFsdWVzKTtcbiAgfVxufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbk55WXk5MllXeDFaUzEwZVhCbGN5OWpiMnh2Y2k1cWN5SmRMQ0p1WVcxbGN5STZXMTBzSW0xaGNIQnBibWR6SWpvaU96czdPenM3UVVGQlFUczdPenRCUVVOQk96czdPMEZCUTBFN096czdPenRCUVVWQkxFbEJRVTBzWVVGQllTdzJRMEZCYmtJN1FVRkRRU3hKUVVGTkxHZENRVUZuUWl4WFFVRlhMRTFCUVdwRE96dHJRa0ZGWlR0QlFVTmlMRFpDUVVGdFFpeGpRVUZKTEZsQlFYWkNMRVZCUVhkRExHTkJRVWtzV1VGQk5VTXNRMEZFWVRzN1FVRkhZaXhSUVVGTkxGVkJRVU1zUzBGQlJEdEJRVUZCTEZkQlFWY3NZMEZCU1N4SlFVRktMRU5CUVZNc1MwRkJWQ3hMUVVGdFFpeGpRVUZKTEVsQlFVb3NRMEZCVXl4TFFVRlVMRU5CUVc1Q0xFbEJRWE5ETEdOQlFVa3NTVUZCU2l4RFFVRlRMRXRCUVZRc1EwRkJha1E3UVVGQlFTeEhRVWhQT3p0QlFVdGlMRk5CUVU4c1ZVRkJReXhMUVVGRUxFVkJRVmM3UVVGRGFFSXNVMEZCU3l4SlFVRkpMRWxCUVVrc1EwRkJZaXhGUVVGblFpeEpRVUZKTEdGQlFYQkNMRVZCUVcxRExFZEJRVzVETEVWQlFYZERPMEZCUTNSRExGVkJRVWtzVjBGQlZ5eERRVUZZTEVWQlFXTXNTVUZCWkN4RFFVRnRRaXhMUVVGdVFpeERRVUZLTEVWQlFTdENPMEZCUXpkQ0xHVkJRVThzVjBGQlZ5eERRVUZZTEVWQlFXTXNTMEZCWkN4RFFVRnZRaXhMUVVGd1FpeERRVUZRTzBGQlEwUTdRVUZEUmp0QlFVTkdMRWRCV0ZrN08wRkJZV0lzVjBGQlV5eFZRVUZETEUxQlFVUTdRVUZCUVN4WFFVRmhMRTlCUVU4c1IwRkJVQ3hMUVVGbExGTkJRV2hDTEVkQlFUWkNMR05CUVVrc1QwRkJTaXhEUVVGWkxFMUJRVm9zUTBGQk4wSXNSMEZCYlVRc1kwRkJTU3hQUVVGS0xFTkJRVmtzVFVGQldpeERRVUV2UkR0QlFVRkJPMEZCWWtrc1F5SXNJbVpwYkdVaU9pSmpiMnh2Y2k1cWN5SXNJbk52ZFhKalpWSnZiM1FpT2lJdlZYTmxjbk12YldGMGRIQmxjbko1TDFOcGRHVnpMM0J2Y0cxdmRHbHZiaUlzSW5OdmRYSmpaWE5EYjI1MFpXNTBJanBiSW1sdGNHOXlkQ0J5WjJJZ1puSnZiU0FuTGk5eVoySW5PMXh1YVcxd2IzSjBJR2h6YkNCbWNtOXRJQ2N1TDJoemJDYzdYRzVwYlhCdmNuUWdhR1Y0SUdaeWIyMGdKeTR2YUdWNEp6dGNibHh1WTI5dWMzUWdZMjlzYjNKVWVYQmxjeUE5SUZ0eVoySXNJR2h6YkN3Z2FHVjRYVHRjYm1OdmJuTjBJRzUxYlVOdmJHOXlWSGx3WlhNZ1BTQmpiMnh2Y2xSNWNHVnpMbXhsYm1kMGFEdGNibHh1Wlhod2IzSjBJR1JsWm1GMWJIUWdlMXh1SUNCa1pXWmhkV3gwVUhKdmNITTZJSHNnTGk0dWNtZGlMbVJsWm1GMWJIUlFjbTl3Y3l3Z0xpNHVhSE5zTG1SbFptRjFiSFJRY205d2N5QjlMRnh1WEc0Z0lIUmxjM1E2SUNoMllXeDFaU2tnUFQ0Z2NtZGlMblJsYzNRb2RtRnNkV1VwSUh4OElHaGxlQzUwWlhOMEtIWmhiSFZsS1NCOGZDQm9jMnd1ZEdWemRDaDJZV3gxWlNrc1hHNWNiaUFnYzNCc2FYUTZJQ2gyWVd4MVpTa2dQVDRnZTF4dUlDQWdJR1p2Y2lBb2JHVjBJR2tnUFNBd095QnBJRHdnYm5WdFEyOXNiM0pVZVhCbGN6c2dhU3NyS1NCN1hHNGdJQ0FnSUNCcFppQW9ZMjlzYjNKVWVYQmxjMXRwWFM1MFpYTjBLSFpoYkhWbEtTa2dlMXh1SUNBZ0lDQWdJQ0J5WlhSMWNtNGdZMjlzYjNKVWVYQmxjMXRwWFM1emNHeHBkQ2gyWVd4MVpTazdYRzRnSUNBZ0lDQjlYRzRnSUNBZ2ZWeHVJQ0I5TEZ4dVhHNGdJR052YldKcGJtVTZJQ2gyWVd4MVpYTXBJRDArSUNoMllXeDFaWE11VW1Wa0lDRTlQU0IxYm1SbFptbHVaV1FwSUQ4Z2NtZGlMbU52YldKcGJtVW9kbUZzZFdWektTQTZJR2h6YkM1amIyMWlhVzVsS0haaGJIVmxjeWxjYm4wN1hHNGlYWDA9XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy92YWx1ZS10eXBlcy9jb2xvci5qc1xuICoqIG1vZHVsZSBpZCA9IDI0XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfdXRpbHMgPSByZXF1aXJlKCcuLi9pbmMvdXRpbHMnKTtcblxudmFyIEZMT0FUX1JFR0VYID0gLygtKT8oXFxkW1xcZFxcLl0qKS9nO1xudmFyIGdlbmVyYXRlVG9rZW4gPSBmdW5jdGlvbiAodG9rZW4pIHtcbiAgcmV0dXJuICckeycgKyB0b2tlbiArICd9Jztcbn07XG5cbmV4cG9ydHMuZGVmYXVsdCA9IHtcblxuICB0ZXN0OiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICB2YXIgbWF0Y2hlcyA9IHZhbHVlLm1hdGNoKEZMT0FUX1JFR0VYKTtcbiAgICByZXR1cm4gKDAsIF91dGlscy5pc0FycmF5KShtYXRjaGVzKSAmJiBtYXRjaGVzLmxlbmd0aCA+IDE7XG4gIH0sXG5cbiAgdGVtcGxhdGU6IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgIHZhciBjb3VudGVyID0gMDtcbiAgICByZXR1cm4gdmFsdWUucmVwbGFjZShGTE9BVF9SRUdFWCwgZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIGdlbmVyYXRlVG9rZW4oY291bnRlcisrKTtcbiAgICB9KTtcbiAgfSxcblxuICBzcGxpdDogZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgdmFyIHNwbGl0VmFsdWUgPSB7fTtcblxuICAgIHZhbHVlLm1hdGNoKEZMT0FUX1JFR0VYKS5mb3JFYWNoKGZ1bmN0aW9uICh2YWx1ZSwgaSkge1xuICAgICAgcmV0dXJuIHNwbGl0VmFsdWVbaV0gPSB2YWx1ZTtcbiAgICB9KTtcblxuICAgIHJldHVybiBzcGxpdFZhbHVlO1xuICB9LFxuXG4gIGNvbWJpbmU6IGZ1bmN0aW9uICh2YWx1ZXMsIHRlbXBsYXRlKSB7XG4gICAgZm9yICh2YXIga2V5IGluIHZhbHVlcykge1xuICAgICAgaWYgKHZhbHVlcy5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgIHRlbXBsYXRlID0gdGVtcGxhdGUucmVwbGFjZShnZW5lcmF0ZVRva2VuKGtleSksIHZhbHVlc1trZXldKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdGVtcGxhdGU7XG4gIH1cblxufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbk55WXk5MllXeDFaUzEwZVhCbGN5OWpiMjF3YkdWNExtcHpJbDBzSW01aGJXVnpJanBiWFN3aWJXRndjR2x1WjNNaU9pSTdPenM3UVVGQlFUczdRVUZGUVN4SlFVRk5MR05CUVdNc2EwSkJRWEJDTzBGQlEwRXNTVUZCVFN4blFrRkJaMElzVlVGQlF5eExRVUZFTzBGQlFVRXNVMEZCVnl4UFFVRlBMRXRCUVZBc1IwRkJaU3hIUVVFeFFqdEJRVUZCTEVOQlFYUkNPenRyUWtGRlpUczdRVUZGWWl4UlFVRk5MRlZCUVVNc1MwRkJSQ3hGUVVGWE8wRkJRMllzVVVGQlRTeFZRVUZWTEUxQlFVMHNTMEZCVGl4RFFVRlpMRmRCUVZvc1EwRkJhRUk3UVVGRFFTeFhRVUZSTEc5Q1FVRlJMRTlCUVZJc1MwRkJiMElzVVVGQlVTeE5RVUZTTEVkQlFXbENMRU5CUVRkRE8wRkJRMFFzUjBGTVdUczdRVUZQWWl4WlFVRlZMRlZCUVVNc1MwRkJSQ3hGUVVGWE8wRkJRMjVDTEZGQlFVa3NWVUZCVlN4RFFVRmtPMEZCUTBFc1YwRkJUeXhOUVVGTkxFOUJRVTRzUTBGQll5eFhRVUZrTEVWQlFUSkNPMEZCUVVFc1lVRkJUU3hqUVVGakxGTkJRV1FzUTBGQlRqdEJRVUZCTEV0QlFUTkNMRU5CUVZBN1FVRkRSQ3hIUVZaWk96dEJRVmxpTEZOQlFVOHNWVUZCUXl4TFFVRkVMRVZCUVZjN1FVRkRhRUlzVVVGQlRTeGhRVUZoTEVWQlFXNUNPenRCUVVWQkxGVkJRVTBzUzBGQlRpeERRVUZaTEZkQlFWb3NSVUZCZVVJc1QwRkJla0lzUTBGQmFVTXNWVUZCUXl4TFFVRkVMRVZCUVZFc1EwRkJVanRCUVVGQkxHRkJRV01zVjBGQlZ5eERRVUZZTEVsQlFXZENMRXRCUVRsQ08wRkJRVUVzUzBGQmFrTTdPMEZCUlVFc1YwRkJUeXhWUVVGUU8wRkJRMFFzUjBGc1FsazdPMEZCYjBKaUxGZEJRVk1zVlVGQlF5eE5RVUZFTEVWQlFWTXNVVUZCVkN4RlFVRnpRanRCUVVNM1FpeFRRVUZMTEVsQlFVa3NSMEZCVkN4SlFVRm5RaXhOUVVGb1FpeEZRVUYzUWp0QlFVTjBRaXhWUVVGSkxFOUJRVThzWTBGQlVDeERRVUZ6UWl4SFFVRjBRaXhEUVVGS0xFVkJRV2RETzBGQlF6bENMRzFDUVVGWExGTkJRVk1zVDBGQlZDeERRVUZwUWl4alFVRmpMRWRCUVdRc1EwRkJha0lzUlVGQmNVTXNUMEZCVHl4SFFVRlFMRU5CUVhKRExFTkJRVmc3UVVGRFJEdEJRVU5HT3p0QlFVVkVMRmRCUVU4c1VVRkJVRHRCUVVORU96dEJRVFZDV1N4RElpd2labWxzWlNJNkltTnZiWEJzWlhndWFuTWlMQ0p6YjNWeVkyVlNiMjkwSWpvaUwxVnpaWEp6TDIxaGRIUndaWEp5ZVM5VGFYUmxjeTl3YjNCdGIzUnBiMjRpTENKemIzVnlZMlZ6UTI5dWRHVnVkQ0k2V3lKcGJYQnZjblFnZXlCcGMwRnljbUY1SUgwZ1puSnZiU0FuTGk0dmFXNWpMM1YwYVd4ekp6dGNibHh1WTI5dWMzUWdSa3hQUVZSZlVrVkhSVmdnUFNBdktDMHBQeWhjWEdSYlhGeGtYRnd1WFNvcEwyYzdYRzVqYjI1emRDQm5aVzVsY21GMFpWUnZhMlZ1SUQwZ0tIUnZhMlZ1S1NBOVBpQW5KSHNuSUNzZ2RHOXJaVzRnS3lBbmZTYzdYRzVjYm1WNGNHOXlkQ0JrWldaaGRXeDBJSHRjYmx4dUlDQjBaWE4wT2lBb2RtRnNkV1VwSUQwK0lIdGNiaUFnSUNCamIyNXpkQ0J0WVhSamFHVnpJRDBnZG1Gc2RXVXViV0YwWTJnb1JreFBRVlJmVWtWSFJWZ3BPMXh1SUNBZ0lISmxkSFZ5YmlBb2FYTkJjbkpoZVNodFlYUmphR1Z6S1NBbUppQnRZWFJqYUdWekxteGxibWQwYUNBK0lERXBPMXh1SUNCOUxGeHVYRzRnSUhSbGJYQnNZWFJsT2lBb2RtRnNkV1VwSUQwK0lIdGNiaUFnSUNCc1pYUWdZMjkxYm5SbGNpQTlJREE3WEc0Z0lDQWdjbVYwZFhKdUlIWmhiSFZsTG5KbGNHeGhZMlVvUmt4UFFWUmZVa1ZIUlZnc0lDZ3BJRDArSUdkbGJtVnlZWFJsVkc5clpXNG9ZMjkxYm5SbGNpc3JLU2s3WEc0Z0lIMHNYRzVjYmlBZ2MzQnNhWFE2SUNoMllXeDFaU2tnUFQ0Z2UxeHVJQ0FnSUdOdmJuTjBJSE53YkdsMFZtRnNkV1VnUFNCN2ZUdGNibHh1SUNBZ0lIWmhiSFZsTG0xaGRHTm9LRVpNVDBGVVgxSkZSMFZZS1M1bWIzSkZZV05vS0NoMllXeDFaU3dnYVNrZ1BUNGdjM0JzYVhSV1lXeDFaVnRwWFNBOUlIWmhiSFZsS1R0Y2JseHVJQ0FnSUhKbGRIVnliaUJ6Y0d4cGRGWmhiSFZsTzF4dUlDQjlMRnh1WEc0Z0lHTnZiV0pwYm1VNklDaDJZV3gxWlhNc0lIUmxiWEJzWVhSbEtTQTlQaUI3WEc0Z0lDQWdabTl5SUNoc1pYUWdhMlY1SUdsdUlIWmhiSFZsY3lrZ2UxeHVJQ0FnSUNBZ2FXWWdLSFpoYkhWbGN5NW9ZWE5QZDI1UWNtOXdaWEowZVNoclpYa3BLU0I3WEc0Z0lDQWdJQ0FnSUhSbGJYQnNZWFJsSUQwZ2RHVnRjR3hoZEdVdWNtVndiR0ZqWlNoblpXNWxjbUYwWlZSdmEyVnVLR3RsZVNrc0lIWmhiSFZsYzF0clpYbGRLVHRjYmlBZ0lDQWdJSDFjYmlBZ0lDQjlYRzVjYmlBZ0lDQnlaWFIxY200Z2RHVnRjR3hoZEdVN1hHNGdJSDFjYmx4dWZUc2lYWDA9XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy92YWx1ZS10eXBlcy9jb21wbGV4LmpzXG4gKiogbW9kdWxlIGlkID0gMjVcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF9yZ2IgPSByZXF1aXJlKCcuL3JnYicpO1xuXG52YXIgX3JnYjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZ2IpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5leHBvcnRzLmRlZmF1bHQgPSB7XG4gIGRlZmF1bHRQcm9wczogX3JnYjIuZGVmYXVsdC5kZWZhdWx0UHJvcHMsXG5cbiAgdGVzdDogZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgcmV0dXJuIHZhbHVlICYmIHZhbHVlLmluZGV4T2YoJyMnKSA+IC0xO1xuICB9LFxuXG4gIHNwbGl0OiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICB2YXIgciA9IHZvaWQgMCxcbiAgICAgICAgZyA9IHZvaWQgMCxcbiAgICAgICAgYiA9IHZvaWQgMDtcblxuICAgIC8vIElmIHdlIGhhdmUgNiBjaGFyYWN0ZXJzLCBpZSAjRkYwMDAwXG4gICAgaWYgKHZhbHVlLmxlbmd0aCA+IDQpIHtcbiAgICAgIHIgPSB2YWx1ZS5zdWJzdHIoMSwgMik7XG4gICAgICBnID0gdmFsdWUuc3Vic3RyKDMsIDIpO1xuICAgICAgYiA9IHZhbHVlLnN1YnN0cig1LCAyKTtcblxuICAgICAgLy8gT3Igd2UgaGF2ZSAzIGNoYXJhY3RlcnMsIGllICNGMDBcbiAgICB9IGVsc2Uge1xuICAgICAgciA9IHZhbHVlLnN1YnN0cigxLCAxKTtcbiAgICAgIGcgPSB2YWx1ZS5zdWJzdHIoMiwgMSk7XG4gICAgICBiID0gdmFsdWUuc3Vic3RyKDMsIDEpO1xuICAgICAgciArPSByO1xuICAgICAgZyArPSBnO1xuICAgICAgYiArPSBiO1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICBSZWQ6IHBhcnNlSW50KHIsIDE2KSxcbiAgICAgIEdyZWVuOiBwYXJzZUludChnLCAxNiksXG4gICAgICBCbHVlOiBwYXJzZUludChiLCAxNiksXG4gICAgICBBbHBoYTogMVxuICAgIH07XG4gIH0sXG5cbiAgY29tYmluZTogZnVuY3Rpb24gKHZhbHVlcykge1xuICAgIHJldHVybiBfcmdiMi5kZWZhdWx0LmNvbWJpbmUodmFsdWVzKTtcbiAgfVxufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbk55WXk5MllXeDFaUzEwZVhCbGN5OW9aWGd1YW5NaVhTd2libUZ0WlhNaU9sdGRMQ0p0WVhCd2FXNW5jeUk2SWpzN096dEJRVUZCT3pzN096czdhMEpCUldVN1FVRkRZaXhuUWtGQll5eGpRVUZKTEZsQlJFdzdPMEZCUjJJc1VVRkJUU3hWUVVGRExFdEJRVVE3UVVGQlFTeFhRVUZaTEZOQlFWTXNUVUZCVFN4UFFVRk9MRU5CUVdNc1IwRkJaQ3hKUVVGeFFpeERRVUZETEVOQlFUTkRPMEZCUVVFc1IwRklUenM3UVVGTFlpeFRRVUZQTEZWQlFVTXNTMEZCUkN4RlFVRlhPMEZCUTJoQ0xGRkJRVWtzVlVGQlNqdEJRVUZCTEZGQlFVOHNWVUZCVUR0QlFVRkJMRkZCUVZVc1ZVRkJWanM3TzBGQlIwRXNVVUZCU1N4TlFVRk5MRTFCUVU0c1IwRkJaU3hEUVVGdVFpeEZRVUZ6UWp0QlFVTndRaXhWUVVGSkxFMUJRVTBzVFVGQlRpeERRVUZoTEVOQlFXSXNSVUZCWjBJc1EwRkJhRUlzUTBGQlNqdEJRVU5CTEZWQlFVa3NUVUZCVFN4TlFVRk9MRU5CUVdFc1EwRkJZaXhGUVVGblFpeERRVUZvUWl4RFFVRktPMEZCUTBFc1ZVRkJTU3hOUVVGTkxFMUJRVTRzUTBGQllTeERRVUZpTEVWQlFXZENMRU5CUVdoQ0xFTkJRVW83T3p0QlFVZEVMRXRCVGtRc1RVRk5UenRCUVVOTUxGVkJRVWtzVFVGQlRTeE5RVUZPTEVOQlFXRXNRMEZCWWl4RlFVRm5RaXhEUVVGb1FpeERRVUZLTzBGQlEwRXNWVUZCU1N4TlFVRk5MRTFCUVU0c1EwRkJZU3hEUVVGaUxFVkJRV2RDTEVOQlFXaENMRU5CUVVvN1FVRkRRU3hWUVVGSkxFMUJRVTBzVFVGQlRpeERRVUZoTEVOQlFXSXNSVUZCWjBJc1EwRkJhRUlzUTBGQlNqdEJRVU5CTEZkQlFVc3NRMEZCVER0QlFVTkJMRmRCUVVzc1EwRkJURHRCUVVOQkxGZEJRVXNzUTBGQlREdEJRVU5FT3p0QlFVVkVMRmRCUVU4N1FVRkRUQ3hYUVVGTExGTkJRVk1zUTBGQlZDeEZRVUZaTEVWQlFWb3NRMEZFUVR0QlFVVk1MR0ZCUVU4c1UwRkJVeXhEUVVGVUxFVkJRVmtzUlVGQldpeERRVVpHTzBGQlIwd3NXVUZCVFN4VFFVRlRMRU5CUVZRc1JVRkJXU3hGUVVGYUxFTkJTRVE3UVVGSlRDeGhRVUZQTzBGQlNrWXNTMEZCVUR0QlFVMUVMRWRCT1VKWk96dEJRV2REWWl4WFFVRlRMRlZCUVVNc1RVRkJSRHRCUVVGQkxGZEJRVmtzWTBGQlNTeFBRVUZLTEVOQlFWa3NUVUZCV2l4RFFVRmFPMEZCUVVFN1FVRm9RMGtzUXlJc0ltWnBiR1VpT2lKb1pYZ3Vhbk1pTENKemIzVnlZMlZTYjI5MElqb2lMMVZ6WlhKekwyMWhkSFJ3WlhKeWVTOVRhWFJsY3k5d2IzQnRiM1JwYjI0aUxDSnpiM1Z5WTJWelEyOXVkR1Z1ZENJNld5SnBiWEJ2Y25RZ2NtZGlJR1p5YjIwZ0p5NHZjbWRpSnp0Y2JseHVaWGh3YjNKMElHUmxabUYxYkhRZ2UxeHVJQ0JrWldaaGRXeDBVSEp2Y0hNNklISm5ZaTVrWldaaGRXeDBVSEp2Y0hNc1hHNWNiaUFnZEdWemREb2dLSFpoYkhWbEtTQTlQaUFvZG1Gc2RXVWdKaVlnZG1Gc2RXVXVhVzVrWlhoUFppZ25JeWNwSUQ0Z0xURXBMRnh1WEc0Z0lITndiR2wwT2lBb2RtRnNkV1VwSUQwK0lIdGNiaUFnSUNCc1pYUWdjaXdnWnl3Z1lqdGNibHh1SUNBZ0lDOHZJRWxtSUhkbElHaGhkbVVnTmlCamFHRnlZV04wWlhKekxDQnBaU0FqUmtZd01EQXdYRzRnSUNBZ2FXWWdLSFpoYkhWbExteGxibWQwYUNBK0lEUXBJSHRjYmlBZ0lDQWdJSElnUFNCMllXeDFaUzV6ZFdKemRISW9NU3dnTWlrN1hHNGdJQ0FnSUNCbklEMGdkbUZzZFdVdWMzVmljM1J5S0RNc0lESXBPMXh1SUNBZ0lDQWdZaUE5SUhaaGJIVmxMbk4xWW5OMGNpZzFMQ0F5S1R0Y2JseHVJQ0FnSUM4dklFOXlJSGRsSUdoaGRtVWdNeUJqYUdGeVlXTjBaWEp6TENCcFpTQWpSakF3WEc0Z0lDQWdmU0JsYkhObElIdGNiaUFnSUNBZ0lISWdQU0IyWVd4MVpTNXpkV0p6ZEhJb01Td2dNU2s3WEc0Z0lDQWdJQ0JuSUQwZ2RtRnNkV1V1YzNWaWMzUnlLRElzSURFcE8xeHVJQ0FnSUNBZ1lpQTlJSFpoYkhWbExuTjFZbk4wY2lnekxDQXhLVHRjYmlBZ0lDQWdJSElnS3owZ2NqdGNiaUFnSUNBZ0lHY2dLejBnWnp0Y2JpQWdJQ0FnSUdJZ0t6MGdZanRjYmlBZ0lDQjlYRzVjYmlBZ0lDQnlaWFIxY200Z2UxeHVJQ0FnSUNBZ1VtVmtPaUJ3WVhKelpVbHVkQ2h5TENBeE5pa3NYRzRnSUNBZ0lDQkhjbVZsYmpvZ2NHRnljMlZKYm5Rb1p5d2dNVFlwTEZ4dUlDQWdJQ0FnUW14MVpUb2djR0Z5YzJWSmJuUW9ZaXdnTVRZcExGeHVJQ0FnSUNBZ1FXeHdhR0U2SURGY2JpQWdJQ0I5TzF4dUlDQjlMRnh1WEc0Z0lHTnZiV0pwYm1VNklDaDJZV3gxWlhNcElEMCtJSEpuWWk1amIyMWlhVzVsS0haaGJIVmxjeWxjYm4wN0lsMTlcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL3ZhbHVlLXR5cGVzL2hleC5qc1xuICoqIG1vZHVsZSBpZCA9IDI2XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfZGVmYXVsdFByb3BzID0gcmVxdWlyZSgnLi9zZXR0aW5ncy9kZWZhdWx0LXByb3BzJyk7XG5cbnZhciBfZGljdGlvbmFyeSA9IHJlcXVpcmUoJy4vc2V0dGluZ3MvZGljdGlvbmFyeScpO1xuXG52YXIgX3V0aWxzID0gcmVxdWlyZSgnLi4vaW5jL3V0aWxzJyk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IHtcbiAgZGVmYXVsdFByb3BzOiB7XG4gICAgSHVlOiB7XG4gICAgICBtaW46IDAsXG4gICAgICBtYXg6IDM2MFxuICAgIH0sXG4gICAgU2F0dXJhdGlvbjogX2RlZmF1bHRQcm9wcy5wZXJjZW50LFxuICAgIExpZ2h0bmVzczogX2RlZmF1bHRQcm9wcy5wZXJjZW50LFxuICAgIEFscGhhOiBfZGVmYXVsdFByb3BzLm9wYWNpdHlcbiAgfSxcblxuICB0ZXN0OiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICByZXR1cm4gdmFsdWUgJiYgdmFsdWUuaW5kZXhPZignaHNsJykgPiAtMTtcbiAgfSxcblxuICBzcGxpdDogZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgcmV0dXJuICgwLCBfdXRpbHMuZ2V0Q29sb3JWYWx1ZXMpKHZhbHVlLCBfZGljdGlvbmFyeS5oc2wpO1xuICB9LFxuXG4gIGNvbWJpbmU6IGZ1bmN0aW9uICh2YWx1ZXMpIHtcbiAgICByZXR1cm4gKDAsIF91dGlscy5jcmVhdGVGdW5jdGlvblN0cmluZykoKDAsIF91dGlscy5jcmVhdGVEZWxpbWl0ZWQpKHZhbHVlcywgX2RpY3Rpb25hcnkuaHNsLCAnLCAnLCAyKSwgJ2hzbGEnKTtcbiAgfVxufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbk55WXk5MllXeDFaUzEwZVhCbGN5OW9jMnd1YW5NaVhTd2libUZ0WlhNaU9sdGRMQ0p0WVhCd2FXNW5jeUk2SWpzN096dEJRVUZCT3p0QlFVTkJPenRCUVVOQk96dHJRa0ZGWlR0QlFVTmlMR2RDUVVGak8wRkJRMW9zVTBGQlN6dEJRVU5JTEZkQlFVc3NRMEZFUmp0QlFVVklMRmRCUVVzN1FVRkdSaXhMUVVSUE8wRkJTMW9zY1VOQlRGazdRVUZOV2l4dlEwRk9XVHRCUVU5YU8wRkJVRmtzUjBGRVJEczdRVUZYWWl4UlFVRk5MRlZCUVVNc1MwRkJSRHRCUVVGQkxGZEJRVmtzVTBGQlV5eE5RVUZOTEU5QlFVNHNRMEZCWXl4TFFVRmtMRWxCUVhWQ0xFTkJRVU1zUTBGQk4wTTdRVUZCUVN4SFFWaFBPenRCUVdGaUxGTkJRVThzVlVGQlF5eExRVUZFTzBGQlFVRXNWMEZCVnl3eVFrRkJaU3hMUVVGbUxHdENRVUZZTzBGQlFVRXNSMEZpVFRzN1FVRmxZaXhYUVVGVExGVkJRVU1zVFVGQlJEdEJRVUZCTEZkQlFWa3NhVU5CUVhGQ0xEUkNRVUZuUWl4TlFVRm9RaXh0UWtGQmEwTXNTVUZCYkVNc1JVRkJkME1zUTBGQmVFTXNRMEZCY2tJc1JVRkJhVVVzVFVGQmFrVXNRMEZCV2p0QlFVRkJPMEZCWmtrc1F5SXNJbVpwYkdVaU9pSm9jMnd1YW5NaUxDSnpiM1Z5WTJWU2IyOTBJam9pTDFWelpYSnpMMjFoZEhSd1pYSnllUzlUYVhSbGN5OXdiM0J0YjNScGIyNGlMQ0p6YjNWeVkyVnpRMjl1ZEdWdWRDSTZXeUpwYlhCdmNuUWdleUJ3WlhKalpXNTBMQ0J2Y0dGamFYUjVJSDBnWm5KdmJTQW5MaTl6WlhSMGFXNW5jeTlrWldaaGRXeDBMWEJ5YjNCekp6dGNibWx0Y0c5eWRDQjdJR2h6YkNCaGN5Qm9jMnhVWlhKdGN5QjlJR1p5YjIwZ0p5NHZjMlYwZEdsdVozTXZaR2xqZEdsdmJtRnllU2M3WEc1cGJYQnZjblFnZXlCamNtVmhkR1ZFWld4cGJXbDBaV1FzSUdOeVpXRjBaVVoxYm1OMGFXOXVVM1J5YVc1bkxDQm5aWFJEYjJ4dmNsWmhiSFZsY3lCOUlHWnliMjBnSnk0dUwybHVZeTkxZEdsc2N5YzdYRzVjYm1WNGNHOXlkQ0JrWldaaGRXeDBJSHRjYmlBZ1pHVm1ZWFZzZEZCeWIzQnpPaUI3WEc0Z0lDQWdTSFZsT2lCN1hHNGdJQ0FnSUNCdGFXNDZJREFzWEc0Z0lDQWdJQ0J0WVhnNklETTJNRnh1SUNBZ0lIMHNYRzRnSUNBZ1UyRjBkWEpoZEdsdmJqb2djR1Z5WTJWdWRDeGNiaUFnSUNCTWFXZG9kRzVsYzNNNklIQmxjbU5sYm5Rc1hHNGdJQ0FnUVd4d2FHRTZJRzl3WVdOcGRIbGNiaUFnZlN4Y2JseHVJQ0IwWlhOME9pQW9kbUZzZFdVcElEMCtJQ2gyWVd4MVpTQW1KaUIyWVd4MVpTNXBibVJsZUU5bUtDZG9jMnduS1NBK0lDMHhLU3hjYmx4dUlDQnpjR3hwZERvZ0tIWmhiSFZsS1NBOVBpQm5aWFJEYjJ4dmNsWmhiSFZsY3loMllXeDFaU3dnYUhOc1ZHVnliWE1wTEZ4dVhHNGdJR052YldKcGJtVTZJQ2gyWVd4MVpYTXBJRDArSUdOeVpXRjBaVVoxYm1OMGFXOXVVM1J5YVc1bktHTnlaV0YwWlVSbGJHbHRhWFJsWkNoMllXeDFaWE1zSUdoemJGUmxjbTF6TENBbkxDQW5MQ0F5S1N3Z0oyaHpiR0VuS1Z4dWZUdGNiaUpkZlE9PVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvdmFsdWUtdHlwZXMvaHNsLmpzXG4gKiogbW9kdWxlIGlkID0gMjdcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF91bml0ID0gcmVxdWlyZSgnLi91bml0Jyk7XG5cbnZhciBfdW5pdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF91bml0KTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZXhwb3J0cy5kZWZhdWx0ID0ge1xuICBkZWZhdWx0UHJvcHM6IHtcbiAgICB1bml0OiAncHgnLFxuICAgIHR5cGU6IF91bml0Mi5kZWZhdWx0XG4gIH1cbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5OeVl5OTJZV3gxWlMxMGVYQmxjeTl3ZUM1cWN5SmRMQ0p1WVcxbGN5STZXMTBzSW0xaGNIQnBibWR6SWpvaU96czdPMEZCUVVFN096czdPenRyUWtGRlpUdEJRVU5pTEdkQ1FVRmpPMEZCUTFvc1ZVRkJUU3hKUVVSTk8wRkJSVm83UVVGR1dUdEJRVVJFTEVNaUxDSm1hV3hsSWpvaWNIZ3Vhbk1pTENKemIzVnlZMlZTYjI5MElqb2lMMVZ6WlhKekwyMWhkSFJ3WlhKeWVTOVRhWFJsY3k5d2IzQnRiM1JwYjI0aUxDSnpiM1Z5WTJWelEyOXVkR1Z1ZENJNld5SnBiWEJ2Y25RZ2RXNXBkRlI1Y0dVZ1puSnZiU0FuTGk5MWJtbDBKenRjYmx4dVpYaHdiM0owSUdSbFptRjFiSFFnZTF4dUlDQmtaV1poZFd4MFVISnZjSE02SUh0Y2JpQWdJQ0IxYm1sME9pQW5jSGduTEZ4dUlDQWdJSFI1Y0dVNklIVnVhWFJVZVhCbFhHNGdJSDFjYm4wN0lsMTlcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL3ZhbHVlLXR5cGVzL3B4LmpzXG4gKiogbW9kdWxlIGlkID0gMjhcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF91dGlscyA9IHJlcXVpcmUoJy4uL2luYy91dGlscycpO1xuXG52YXIgX2RpY3Rpb25hcnkgPSByZXF1aXJlKCcuL3NldHRpbmdzL2RpY3Rpb25hcnknKTtcblxudmFyIF9kZWZhdWx0UHJvcHMgPSByZXF1aXJlKCcuL3NldHRpbmdzL2RlZmF1bHQtcHJvcHMnKTtcblxuZXhwb3J0cy5kZWZhdWx0ID0ge1xuICBkZWZhdWx0UHJvcHM6IHtcbiAgICBSZWQ6IF9kZWZhdWx0UHJvcHMucmdiLFxuICAgIEdyZWVuOiBfZGVmYXVsdFByb3BzLnJnYixcbiAgICBCbHVlOiBfZGVmYXVsdFByb3BzLnJnYixcbiAgICBBbHBoYTogX2RlZmF1bHRQcm9wcy5vcGFjaXR5XG4gIH0sXG5cbiAgdGVzdDogZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgcmV0dXJuIHZhbHVlICYmIHZhbHVlLmluZGV4T2YoJ3JnYicpID4gLTE7XG4gIH0sXG5cbiAgc3BsaXQ6IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgIHJldHVybiAoMCwgX3V0aWxzLmdldENvbG9yVmFsdWVzKSh2YWx1ZSwgX2RpY3Rpb25hcnkucmdiKTtcbiAgfSxcblxuICBjb21iaW5lOiBmdW5jdGlvbiAodmFsdWVzKSB7XG4gICAgcmV0dXJuICgwLCBfdXRpbHMuY3JlYXRlRnVuY3Rpb25TdHJpbmcpKCgwLCBfdXRpbHMuY3JlYXRlRGVsaW1pdGVkKSh2YWx1ZXMsIF9kaWN0aW9uYXJ5LnJnYiwgJywgJywgMiksICdyZ2JhJyk7XG4gIH1cbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5OeVl5OTJZV3gxWlMxMGVYQmxjeTl5WjJJdWFuTWlYU3dpYm1GdFpYTWlPbHRkTENKdFlYQndhVzVuY3lJNklqczdPenRCUVVGQk96dEJRVU5CT3p0QlFVTkJPenRyUWtGRlpUdEJRVU5pTEdkQ1FVRmpPMEZCUTFvc01FSkJSRms3UVVGRldpdzBRa0ZHV1R0QlFVZGFMREpDUVVoWk8wRkJTVm83UVVGS1dTeEhRVVJFT3p0QlFWRmlMRkZCUVUwc1ZVRkJReXhMUVVGRU8wRkJRVUVzVjBGQldTeFRRVUZUTEUxQlFVMHNUMEZCVGl4RFFVRmpMRXRCUVdRc1NVRkJkVUlzUTBGQlF5eERRVUUzUXp0QlFVRkJMRWRCVWs4N08wRkJWV0lzVTBGQlR5eFZRVUZETEV0QlFVUTdRVUZCUVN4WFFVRlhMREpDUVVGbExFdEJRV1lzYTBKQlFWZzdRVUZCUVN4SFFWWk5PenRCUVZsaUxGZEJRVk1zVlVGQlF5eE5RVUZFTzBGQlFVRXNWMEZCV1N4cFEwRkJjVUlzTkVKQlFXZENMRTFCUVdoQ0xHMUNRVUZyUXl4SlFVRnNReXhGUVVGM1F5eERRVUY0UXl4RFFVRnlRaXhGUVVGcFJTeE5RVUZxUlN4RFFVRmFPMEZCUVVFN1FVRmFTU3hESWl3aVptbHNaU0k2SW5KbllpNXFjeUlzSW5OdmRYSmpaVkp2YjNRaU9pSXZWWE5sY25NdmJXRjBkSEJsY25KNUwxTnBkR1Z6TDNCdmNHMXZkR2x2YmlJc0luTnZkWEpqWlhORGIyNTBaVzUwSWpwYkltbHRjRzl5ZENCN0lHTnlaV0YwWlVSbGJHbHRhWFJsWkN3Z1kzSmxZWFJsUm5WdVkzUnBiMjVUZEhKcGJtY3NJR2RsZEVOdmJHOXlWbUZzZFdWeklIMGdabkp2YlNBbkxpNHZhVzVqTDNWMGFXeHpKenRjYm1sdGNHOXlkQ0I3SUhKbllpQmhjeUJ5WjJKVVpYSnRjeUI5SUdaeWIyMGdKeTR2YzJWMGRHbHVaM012WkdsamRHbHZibUZ5ZVNjN1hHNXBiWEJ2Y25RZ2V5QnlaMklnWVhNZ1pHVm1ZWFZzZEZKSFFpd2diM0JoWTJsMGVTQmhjeUJrWldaaGRXeDBUM0JoWTJsMGVTQjlJR1p5YjIwZ0p5NHZjMlYwZEdsdVozTXZaR1ZtWVhWc2RDMXdjbTl3Y3ljN1hHNWNibVY0Y0c5eWRDQmtaV1poZFd4MElIdGNiaUFnWkdWbVlYVnNkRkJ5YjNCek9pQjdYRzRnSUNBZ1VtVmtPaUJrWldaaGRXeDBVa2RDTEZ4dUlDQWdJRWR5WldWdU9pQmtaV1poZFd4MFVrZENMRnh1SUNBZ0lFSnNkV1U2SUdSbFptRjFiSFJTUjBJc1hHNGdJQ0FnUVd4d2FHRTZJR1JsWm1GMWJIUlBjR0ZqYVhSNVhHNGdJSDBzWEc1Y2JpQWdkR1Z6ZERvZ0tIWmhiSFZsS1NBOVBpQW9kbUZzZFdVZ0ppWWdkbUZzZFdVdWFXNWtaWGhQWmlnbmNtZGlKeWtnUGlBdE1Ta3NYRzVjYmlBZ2MzQnNhWFE2SUNoMllXeDFaU2tnUFQ0Z1oyVjBRMjlzYjNKV1lXeDFaWE1vZG1Gc2RXVXNJSEpuWWxSbGNtMXpLU3hjYmx4dUlDQmpiMjFpYVc1bE9pQW9kbUZzZFdWektTQTlQaUJqY21WaGRHVkdkVzVqZEdsdmJsTjBjbWx1WnloamNtVmhkR1ZFWld4cGJXbDBaV1FvZG1Gc2RXVnpMQ0J5WjJKVVpYSnRjeXdnSnl3Z0p5d2dNaWtzSUNkeVoySmhKeWxjYm4wN0lsMTlcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL3ZhbHVlLXR5cGVzL3JnYi5qc1xuICoqIG1vZHVsZSBpZCA9IDI5XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHMuZGVmYXVsdCA9IHtcbiAgZGVmYXVsdFByb3BzOiB7XG4gICAgY3VycmVudDogMVxuICB9XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluTnlZeTkyWVd4MVpTMTBlWEJsY3k5elkyRnNaUzVxY3lKZExDSnVZVzFsY3lJNlcxMHNJbTFoY0hCcGJtZHpJam9pT3pzN2EwSkJRV1U3UVVGRFlpeG5Ra0ZCWXp0QlFVTmFMR0ZCUVZNN1FVRkVSenRCUVVSRUxFTWlMQ0ptYVd4bElqb2ljMk5oYkdVdWFuTWlMQ0p6YjNWeVkyVlNiMjkwSWpvaUwxVnpaWEp6TDIxaGRIUndaWEp5ZVM5VGFYUmxjeTl3YjNCdGIzUnBiMjRpTENKemIzVnlZMlZ6UTI5dWRHVnVkQ0k2V3lKbGVIQnZjblFnWkdWbVlYVnNkQ0I3WEc0Z0lHUmxabUYxYkhSUWNtOXdjem9nZTF4dUlDQWdJR04xY25KbGJuUTZJREZjYmlBZ2ZWeHVmVHNpWFgwPVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvdmFsdWUtdHlwZXMvc2NhbGUuanNcbiAqKiBtb2R1bGUgaWQgPSAzMFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9O1xuXG52YXIgX2NvbG9yID0gcmVxdWlyZSgnLi9jb2xvcicpO1xuXG52YXIgX2NvbG9yMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NvbG9yKTtcblxudmFyIF9weCA9IHJlcXVpcmUoJy4vcHgnKTtcblxudmFyIF9kaWN0aW9uYXJ5ID0gcmVxdWlyZSgnLi9zZXR0aW5ncy9kaWN0aW9uYXJ5Jyk7XG5cbnZhciBfdXRpbHMgPSByZXF1aXJlKCcuLi9pbmMvdXRpbHMnKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxudmFyIHNoYWRvd1dpdGhvdXRDb2xvclRlcm1zID0gX2RpY3Rpb25hcnkuc2hhZG93LnNsaWNlKDAsIDQpO1xuXG5leHBvcnRzLmRlZmF1bHQgPSB7XG4gIGRlZmF1bHRQcm9wczogX2V4dGVuZHMoe30sIF9jb2xvcjIuZGVmYXVsdC5kZWZhdWx0UHJvcHMsIHtcbiAgICBYOiBfcHguZGVmYXVsdFByb3BzLFxuICAgIFk6IF9weC5kZWZhdWx0UHJvcHMsXG4gICAgUmFkaXVzOiBfcHguZGVmYXVsdFByb3BzLFxuICAgIFNwcmVhZDogX3B4LmRlZmF1bHRQcm9wc1xuICB9KSxcblxuICBzcGxpdDogZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgdmFyIGJpdHMgPSAoMCwgX3V0aWxzLnNwbGl0U3BhY2VEZWxpbWl0ZWQpKHZhbHVlKTtcbiAgICB2YXIgaGFzUmVhY2hlZENvbG9yID0gZmFsc2U7XG4gICAgdmFyIGNvbG9yUHJvcCA9ICcnO1xuICAgIHZhciBzcGxpdFZhbHVlID0ge307XG5cbiAgICBiaXRzLmZvckVhY2goZnVuY3Rpb24gKGJpdCwgaSkge1xuICAgICAgLy8gSWYgd2UndmUgcmVhY2hlZCB0aGUgY29sb3IgcHJvcHMsIGFwcGVuZCB0byBjb2xvciBzdHJpbmdcbiAgICAgIGlmIChoYXNSZWFjaGVkQ29sb3IgfHwgX2NvbG9yMi5kZWZhdWx0LnRlc3QoYml0KSkge1xuICAgICAgICBoYXNSZWFjaGVkQ29sb3IgPSB0cnVlO1xuICAgICAgICBjb2xvclByb3AgKz0gYml0O1xuXG4gICAgICAgIC8vIEVsc2UgcHJvY2VzcyBzaGFkb3cgdmFsdWVcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNwbGl0VmFsdWVbX2RpY3Rpb25hcnkuc2hhZG93W2ldXSA9IGJpdDtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHZhciBzcGxpdENvbG9yUHJvcHMgPSBfY29sb3IyLmRlZmF1bHQuc3BsaXQoY29sb3JQcm9wKTtcblxuICAgIHJldHVybiBfZXh0ZW5kcyh7fSwgc3BsaXRWYWx1ZSwgeyBzcGxpdENvbG9yUHJvcHM6IHNwbGl0Q29sb3JQcm9wcyB9KTtcbiAgfSxcblxuICBjb21iaW5lOiBmdW5jdGlvbiAodmFsdWVzKSB7XG4gICAgcmV0dXJuICgwLCBfdXRpbHMuY3JlYXRlRGVsaW1pdGVkKSh2YWx1ZXMsIHNoYWRvd1dpdGhvdXRDb2xvclRlcm1zLCAnICcpICsgX2NvbG9yMi5kZWZhdWx0LmNvbWJpbmUodmFsdWVzKTtcbiAgfVxufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbk55WXk5MllXeDFaUzEwZVhCbGN5OXphR0ZrYjNjdWFuTWlYU3dpYm1GdFpYTWlPbHRkTENKdFlYQndhVzVuY3lJNklqczdPenM3TzBGQlFVRTdPenM3UVVGRFFUczdRVUZEUVRzN1FVRkRRVHM3T3p0QlFVVkJMRWxCUVUwc01FSkJRVEJDTEcxQ1FVRlpMRXRCUVZvc1EwRkJhMElzUTBGQmJFSXNSVUZCY1VJc1EwRkJja0lzUTBGQmFFTTdPMnRDUVVWbE8wRkJRMklzTmtKQlEwc3NaMEpCUVUwc1dVRkVXRHRCUVVWRkxIVkNRVVpHTzBGQlIwVXNkVUpCU0VZN1FVRkpSU3cwUWtGS1JqdEJRVXRGTzBGQlRFWXNTVUZFWVRzN1FVRlRZaXhUUVVGUExGVkJRVU1zUzBGQlJDeEZRVUZYTzBGQlEyaENMRkZCUVUwc1QwRkJUeXhuUTBGQmIwSXNTMEZCY0VJc1EwRkJZanRCUVVOQkxGRkJRVWtzYTBKQlFXdENMRXRCUVhSQ08wRkJRMEVzVVVGQlNTeFpRVUZaTEVWQlFXaENPMEZCUTBFc1VVRkJTU3hoUVVGaExFVkJRV3BDT3p0QlFVVkJMRk5CUVVzc1QwRkJUQ3hEUVVGaExGVkJRVU1zUjBGQlJDeEZRVUZOTEVOQlFVNHNSVUZCV1RzN1FVRkZka0lzVlVGQlNTeHRRa0ZCYlVJc1owSkJRVTBzU1VGQlRpeERRVUZYTEVkQlFWZ3NRMEZCZGtJc1JVRkJkME03UVVGRGRFTXNNRUpCUVd0Q0xFbEJRV3hDTzBGQlEwRXNjVUpCUVdFc1IwRkJZanM3TzBGQlIwUXNUMEZNUkN4TlFVdFBPMEZCUTB3c2JVSkJRVmNzYlVKQlFWa3NRMEZCV2l4RFFVRllMRWxCUVRaQ0xFZEJRVGRDTzBGQlEwUTdRVUZEUml4TFFWWkVPenRCUVZsQkxGRkJRVTBzYTBKQlFXdENMR2RDUVVGTkxFdEJRVTRzUTBGQldTeFRRVUZhTEVOQlFYaENPenRCUVVWQkxIZENRVUZaTEZWQlFWb3NTVUZCZDBJc1owTkJRWGhDTzBGQlEwUXNSMEU1UWxrN08wRkJaME5pTEZkQlFWTXNWVUZCUXl4TlFVRkVPMEZCUVVFc1YwRkJXU3cwUWtGQlowSXNUVUZCYUVJc1JVRkJkMElzZFVKQlFYaENMRVZCUVdsRUxFZEJRV3BFTEVsQlFYZEVMR2RDUVVGTkxFOUJRVTRzUTBGQll5eE5RVUZrTEVOQlFYQkZPMEZCUVVFN1FVRm9RMGtzUXlJc0ltWnBiR1VpT2lKemFHRmtiM2N1YW5NaUxDSnpiM1Z5WTJWU2IyOTBJam9pTDFWelpYSnpMMjFoZEhSd1pYSnllUzlUYVhSbGN5OXdiM0J0YjNScGIyNGlMQ0p6YjNWeVkyVnpRMjl1ZEdWdWRDSTZXeUpwYlhCdmNuUWdZMjlzYjNJZ1puSnZiU0FuTGk5amIyeHZjaWM3WEc1cGJYQnZjblFnZXlCa1pXWmhkV3gwVUhKdmNITWdZWE1nY0hoRVpXWmhkV3gwVUhKdmNITWdmU0JtY205dElDY3VMM0I0Snp0Y2JtbHRjRzl5ZENCN0lITm9ZV1J2ZHlCaGN5QnphR0ZrYjNkVVpYSnRjeUI5SUdaeWIyMGdKeTR2YzJWMGRHbHVaM012WkdsamRHbHZibUZ5ZVNjN1hHNXBiWEJ2Y25RZ2V5QnpjR3hwZEZOd1lXTmxSR1ZzYVcxcGRHVmtMQ0JqY21WaGRHVkVaV3hwYldsMFpXUWdmU0JtY205dElDY3VMaTlwYm1NdmRYUnBiSE1uTzF4dVhHNWpiMjV6ZENCemFHRmtiM2RYYVhSb2IzVjBRMjlzYjNKVVpYSnRjeUE5SUhOb1lXUnZkMVJsY20xekxuTnNhV05sS0RBc0lEUXBPMXh1WEc1bGVIQnZjblFnWkdWbVlYVnNkQ0I3WEc0Z0lHUmxabUYxYkhSUWNtOXdjem9nZTF4dUlDQWdJQzR1TG1OdmJHOXlMbVJsWm1GMWJIUlFjbTl3Y3l4Y2JpQWdJQ0JZT2lCd2VFUmxabUYxYkhSUWNtOXdjeXhjYmlBZ0lDQlpPaUJ3ZUVSbFptRjFiSFJRY205d2N5eGNiaUFnSUNCU1lXUnBkWE02SUhCNFJHVm1ZWFZzZEZCeWIzQnpMRnh1SUNBZ0lGTndjbVZoWkRvZ2NIaEVaV1poZFd4MFVISnZjSE5jYmlBZ2ZTeGNibHh1SUNCemNHeHBkRG9nS0haaGJIVmxLU0E5UGlCN1hHNGdJQ0FnWTI5dWMzUWdZbWwwY3lBOUlITndiR2wwVTNCaFkyVkVaV3hwYldsMFpXUW9kbUZzZFdVcE8xeHVJQ0FnSUd4bGRDQm9ZWE5TWldGamFHVmtRMjlzYjNJZ1BTQm1ZV3h6WlR0Y2JpQWdJQ0JzWlhRZ1kyOXNiM0pRY205d0lEMGdKeWM3WEc0Z0lDQWdiR1YwSUhOd2JHbDBWbUZzZFdVZ1BTQjdmVHRjYmx4dUlDQWdJR0pwZEhNdVptOXlSV0ZqYUNnb1ltbDBMQ0JwS1NBOVBpQjdYRzRnSUNBZ0lDQXZMeUJKWmlCM1pTZDJaU0J5WldGamFHVmtJSFJvWlNCamIyeHZjaUJ3Y205d2N5d2dZWEJ3Wlc1a0lIUnZJR052Ykc5eUlITjBjbWx1WjF4dUlDQWdJQ0FnYVdZZ0tHaGhjMUpsWVdOb1pXUkRiMnh2Y2lCOGZDQmpiMnh2Y2k1MFpYTjBLR0pwZENrcElIdGNiaUFnSUNBZ0lDQWdhR0Z6VW1WaFkyaGxaRU52Ykc5eUlEMGdkSEoxWlR0Y2JpQWdJQ0FnSUNBZ1kyOXNiM0pRY205d0lDczlJR0pwZER0Y2JseHVJQ0FnSUNBZ0x5OGdSV3h6WlNCd2NtOWpaWE56SUhOb1lXUnZkeUIyWVd4MVpWeHVJQ0FnSUNBZ2ZTQmxiSE5sSUh0Y2JpQWdJQ0FnSUNBZ2MzQnNhWFJXWVd4MVpWdHphR0ZrYjNkVVpYSnRjMXRwWFYwZ1BTQmlhWFE3WEc0Z0lDQWdJQ0I5WEc0Z0lDQWdmU2s3WEc1Y2JpQWdJQ0JqYjI1emRDQnpjR3hwZEVOdmJHOXlVSEp2Y0hNZ1BTQmpiMnh2Y2k1emNHeHBkQ2hqYjJ4dmNsQnliM0FwTzF4dVhHNGdJQ0FnY21WMGRYSnVJSHNnTGk0dWMzQnNhWFJXWVd4MVpTd2djM0JzYVhSRGIyeHZjbEJ5YjNCeklIMDdYRzRnSUgwc1hHNWNiaUFnWTI5dFltbHVaVG9nS0haaGJIVmxjeWtnUFQ0Z1kzSmxZWFJsUkdWc2FXMXBkR1ZrS0haaGJIVmxjeXdnYzJoaFpHOTNWMmwwYUc5MWRFTnZiRzl5VkdWeWJYTXNJQ2NnSnlrZ0t5QmpiMnh2Y2k1amIyMWlhVzVsS0haaGJIVmxjeWxjYm4wN1hHNGlYWDA9XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy92YWx1ZS10eXBlcy9zaGFkb3cuanNcbiAqKiBtb2R1bGUgaWQgPSAzMVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX3V0aWxzID0gcmVxdWlyZSgnLi4vaW5jL3V0aWxzJyk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IHtcbiAgdGVzdDogZnVuY3Rpb24gKHVucGFyc2VkKSB7XG4gICAgdmFyIF9maW5kVmFsdWVBbmRVbml0ID0gKDAsIF91dGlscy5maW5kVmFsdWVBbmRVbml0KSh1bnBhcnNlZCk7XG5cbiAgICB2YXIgdmFsdWUgPSBfZmluZFZhbHVlQW5kVW5pdC52YWx1ZTtcblxuICAgIHJldHVybiAoMCwgX3V0aWxzLmlzTnVtKSh2YWx1ZSkgJiYgIWlzTmFOKHZhbHVlKSA/IHRydWUgOiBmYWxzZTtcbiAgfSxcblxuICBwYXJzZTogZnVuY3Rpb24gKHVucGFyc2VkLCBwYXJlbnQpIHtcbiAgICB2YXIgX2ZpbmRWYWx1ZUFuZFVuaXQyID0gKDAsIF91dGlscy5maW5kVmFsdWVBbmRVbml0KSh1bnBhcnNlZCk7XG5cbiAgICB2YXIgdmFsdWUgPSBfZmluZFZhbHVlQW5kVW5pdDIudmFsdWU7XG4gICAgdmFyIHVuaXQgPSBfZmluZFZhbHVlQW5kVW5pdDIudW5pdDtcblxuXG4gICAgaWYgKHVuaXQgJiYgdW5pdCAhPT0gdW5pdCkge1xuICAgICAgcGFyZW50LnVuaXQgPSB1bml0O1xuICAgIH1cblxuICAgIHJldHVybiB2YWx1ZTtcbiAgfSxcblxuICBzZXJpYWxpemU6IGZ1bmN0aW9uIChwYXJzZWQsIHBhcmVudCkge1xuICAgIHJldHVybiBwYXJzZWQgKyAocGFyZW50LnVuaXQgfHwgJycpO1xuICB9XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluTnlZeTkyWVd4MVpTMTBlWEJsY3k5MWJtbDBMbXB6SWwwc0ltNWhiV1Z6SWpwYlhTd2liV0Z3Y0dsdVozTWlPaUk3T3pzN1FVRkJRVHM3YTBKQlJXVTdRVUZEWWl4UlFVRk5MRlZCUVZVc1VVRkJWaXhGUVVGdlFqdEJRVUZCTERSQ1FVTk9MRFpDUVVGcFFpeFJRVUZxUWl4RFFVUk5PenRCUVVGQkxGRkJRMmhDTEV0QlJHZENMSEZDUVVOb1FpeExRVVJuUWpzN1FVRkZlRUlzVjBGQlVTeHJRa0ZCVFN4TFFVRk9MRXRCUVdkQ0xFTkJRVU1zVFVGQlRTeExRVUZPTEVOQlFXeENMRWRCUVd0RExFbEJRV3hETEVkQlFYbERMRXRCUVdoRU8wRkJRMFFzUjBGS1dUczdRVUZOWWl4VFFVRlBMRlZCUVZVc1VVRkJWaXhGUVVGdlFpeE5RVUZ3UWl4RlFVRTBRanRCUVVGQkxEWkNRVU5VTERaQ1FVRnBRaXhSUVVGcVFpeERRVVJUT3p0QlFVRkJMRkZCUTNwQ0xFdEJSSGxDTEhOQ1FVTjZRaXhMUVVSNVFqdEJRVUZCTEZGQlEyeENMRWxCUkd0Q0xITkNRVU5zUWl4SlFVUnJRanM3TzBGQlIycERMRkZCUVVrc1VVRkJVU3hUUVVGVExFbEJRWEpDTEVWQlFUSkNPMEZCUTNwQ0xHRkJRVThzU1VGQlVDeEhRVUZqTEVsQlFXUTdRVUZEUkRzN1FVRkZSQ3hYUVVGUExFdEJRVkE3UVVGRFJDeEhRV1JaT3p0QlFXZENZaXhoUVVGWExGVkJRVU1zVFVGQlJDeEZRVUZUTEUxQlFWUTdRVUZCUVN4WFFVRnZRaXhWUVVGVkxFOUJRVThzU1VGQlVDeEpRVUZsTEVWQlFYcENMRU5CUVhCQ08wRkJRVUU3UVVGb1FrVXNReUlzSW1acGJHVWlPaUoxYm1sMExtcHpJaXdpYzI5MWNtTmxVbTl2ZENJNklpOVZjMlZ5Y3k5dFlYUjBjR1Z5Y25rdlUybDBaWE12Y0c5d2JXOTBhVzl1SWl3aWMyOTFjbU5sYzBOdmJuUmxiblFpT2xzaWFXMXdiM0owSUhzZ2FYTk9kVzBzSUdacGJtUldZV3gxWlVGdVpGVnVhWFFnZlNCbWNtOXRJQ2N1TGk5cGJtTXZkWFJwYkhNbk8xeHVYRzVsZUhCdmNuUWdaR1ZtWVhWc2RDQjdYRzRnSUhSbGMzUTZJR1oxYm1OMGFXOXVJQ2gxYm5CaGNuTmxaQ2tnZTF4dUlDQWdJR052Ym5OMElIc2dkbUZzZFdVZ2ZTQTlJR1pwYm1SV1lXeDFaVUZ1WkZWdWFYUW9kVzV3WVhKelpXUXBPMXh1SUNBZ0lISmxkSFZ5YmlBb2FYTk9kVzBvZG1Gc2RXVXBJQ1ltSUNGcGMwNWhUaWgyWVd4MVpTa3BJRDhnZEhKMVpTQTZJR1poYkhObE8xeHVJQ0I5TEZ4dVhHNGdJSEJoY25ObE9pQm1kVzVqZEdsdmJpQW9kVzV3WVhKelpXUXNJSEJoY21WdWRDa2dlMXh1SUNBZ0lHTnZibk4wSUhzZ2RtRnNkV1VzSUhWdWFYUWdmU0E5SUdacGJtUldZV3gxWlVGdVpGVnVhWFFvZFc1d1lYSnpaV1FwTzF4dVhHNGdJQ0FnYVdZZ0tIVnVhWFFnSmlZZ2RXNXBkQ0FoUFQwZ2RXNXBkQ2tnZTF4dUlDQWdJQ0FnY0dGeVpXNTBMblZ1YVhRZ1BTQjFibWwwTzF4dUlDQWdJSDFjYmx4dUlDQWdJSEpsZEhWeWJpQjJZV3gxWlR0Y2JpQWdmU3hjYmx4dUlDQnpaWEpwWVd4cGVtVTZJQ2h3WVhKelpXUXNJSEJoY21WdWRDa2dQVDRnY0dGeWMyVmtJQ3NnS0hCaGNtVnVkQzUxYm1sMElIeDhJQ2NuS1Z4dWZUdGNiaUpkZlE9PVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvdmFsdWUtdHlwZXMvdW5pdC5qc1xuICoqIG1vZHVsZSBpZCA9IDMyXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzLmNoYWluID0gZXhwb3J0cy5jaXJjdWxhck1vdGlvbiA9IGV4cG9ydHMuY3JlYXRlTWFwcGVyID0gdW5kZWZpbmVkO1xuXG52YXIgX2NhbGMgPSByZXF1aXJlKCcuLi9pbmMvY2FsYycpO1xuXG52YXIgY3JlYXRlTWFwcGVyID0gZXhwb3J0cy5jcmVhdGVNYXBwZXIgPSBmdW5jdGlvbiAoaW5wdXQsIG91dHB1dCkge1xuICB2YXIgbWFwTGVuZ3RoID0gaW5wdXQubGVuZ3RoO1xuICB2YXIgZmluYWxJbmRleCA9IG1hcExlbmd0aCAtIDE7XG5cbiAgcmV0dXJuIGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgIC8vIElmIHZhbHVlIG91dHNpZGUgbWluaW11bSBpbnB1dCByYW5nZSwgcXVpY2tseSByZXR1cm5cbiAgICBpZiAodmFsdWUgPD0gaW5wdXRbMF0pIHtcbiAgICAgIHJldHVybiBvdXRwdXRbMF07XG4gICAgfVxuXG4gICAgLy8gSWYgdmFsdWUgb3V0c2lkZSBtYXhpbXVtIGlucHV0IHJhbmdlLCBxdWlja2x5IHJldHVyblxuICAgIGlmICh2YWx1ZSA+PSBpbnB1dFtmaW5hbEluZGV4XSkge1xuICAgICAgcmV0dXJuIG91dHB1dFtmaW5hbEluZGV4XTtcbiAgICB9XG5cbiAgICAvLyBJZiB3aXRoaW4gb3ZlcmFsbCBpbnB1dCByYW5nZSwgZmluZCBzcGVjaWZpYyByYW5nZVxuICAgIGZvciAodmFyIGkgPSAxOyBpIDwgbWFwTGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmICh2YWx1ZSA8IGlucHV0W2ldIHx8IGkgPT09IGZpbmFsSW5kZXgpIHtcbiAgICAgICAgdmFyIHByb2dyZXNzSW5SYW5nZSA9ICgwLCBfY2FsYy5nZXRQcm9ncmVzc0Zyb21WYWx1ZSkodmFsdWUsIGlucHV0W2kgLSAxXSwgaW5wdXRbaV0pO1xuICAgICAgICByZXR1cm4gKDAsIF9jYWxjLmdldFZhbHVlRnJvbVByb2dyZXNzKShwcm9ncmVzc0luUmFuZ2UsIG91dHB1dFtpIC0gMV0sIG91dHB1dFtpXSk7XG4gICAgICB9XG4gICAgfVxuICB9O1xufTtcblxudmFyIGNpcmN1bGFyTW90aW9uID0gZXhwb3J0cy5jaXJjdWxhck1vdGlvbiA9IGZ1bmN0aW9uICh2LCBrZXksIF9yZWYpIHtcbiAgdmFyIHZhbHVlcyA9IF9yZWYudmFsdWVzO1xuXG4gIHZhciBvcmlnaW5YID0gdmFsdWVzLm9yaWdpblggPyB2YWx1ZXMub3JpZ2luWC5jdXJyZW50IDogMDtcbiAgdmFyIG9yaWdpblkgPSB2YWx1ZXMub3JpZ2luWSA/IHZhbHVlcy5vcmlnaW5ZLmN1cnJlbnQgOiAwO1xuXG4gIHJldHVybiAoMCwgX2NhbGMucG9pbnRGcm9tQW5nbGVBbmREaXN0YW5jZSkoe1xuICAgIHg6IG9yaWdpblgsXG4gICAgeTogb3JpZ2luWVxuICB9LCB2YWx1ZXMuYW5nbGUuY3VycmVudCwgdmFsdWVzLmRpc3RhbmNlLmN1cnJlbnQpW2tleV07XG59O1xuXG4vKlxuICBDb21iaW5lIHRyYW5zZm9ybWVycyBpbnRvIG9uZSBmdW5jdGlvbiB0aGF0IGNhbGxzIGV2ZXJ5XG4gIHRyYW5zZm9ybWVyIGluIHRoZSBhcnJheSBhbmQgcmV0dXJucyB0aGUgcmVzdWx0XG5cbiAgQHBhcmFtIFthcnJheV1cbiAgQHJldHVybiBbZnVuY3Rpb25dXG4qL1xudmFyIGNoYWluID0gZXhwb3J0cy5jaGFpbiA9IGZ1bmN0aW9uICh0cmFuc2Zvcm1lcnMpIHtcbiAgdmFyIG51bVRyYW5zZm9ybWVycyA9IHRyYW5zZm9ybWVycy5sZW5ndGg7XG4gIHZhciBpID0gMDtcblxuICAvKlxuICAgIEBwYXJhbSBbbnVtYmVyXVxuICAgIEBwYXJhbSBbc3RyaW5nXVxuICAgIEBwYXJhbSBbQWN0aW9uXVxuICAgIEByZXR1cm4gW251bWJlcl1cbiAgKi9cbiAgcmV0dXJuIGZ1bmN0aW9uICh2LCBrZXksIGEpIHtcbiAgICBmb3IgKGkgPSAwOyBpIDwgbnVtVHJhbnNmb3JtZXJzOyBpKyspIHtcbiAgICAgIHYgPSB0cmFuc2Zvcm1lcnNbaV0odiwga2V5LCBhKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdjtcbiAgfTtcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5OeVl5OXBibU12ZEhKaGJuTm1iM0p0WlhKekxtcHpJbDBzSW01aGJXVnpJanBiWFN3aWJXRndjR2x1WjNNaU9pSTdPenM3TzBGQlFVRTdPMEZCUlU4c1NVRkJUU3h6UTBGQlpTeFZRVUZETEV0QlFVUXNSVUZCVVN4TlFVRlNMRVZCUVcxQ08wRkJRemRETEUxQlFVMHNXVUZCV1N4TlFVRk5MRTFCUVhoQ08wRkJRMEVzVFVGQlRTeGhRVUZoTEZsQlFWa3NRMEZCTDBJN08wRkJSVUVzVTBGQlR5eFZRVUZETEV0QlFVUXNSVUZCVnpzN1FVRkZhRUlzVVVGQlNTeFRRVUZUTEUxQlFVMHNRMEZCVGl4RFFVRmlMRVZCUVhWQ08wRkJRM0pDTEdGQlFVOHNUMEZCVHl4RFFVRlFMRU5CUVZBN1FVRkRSRHM3TzBGQlIwUXNVVUZCU1N4VFFVRlRMRTFCUVUwc1ZVRkJUaXhEUVVGaUxFVkJRV2RETzBGQlF6bENMR0ZCUVU4c1QwRkJUeXhWUVVGUUxFTkJRVkE3UVVGRFJEczdPMEZCUjBRc1UwRkJTeXhKUVVGSkxFbEJRVWtzUTBGQllpeEZRVUZuUWl4SlFVRkpMRk5CUVhCQ0xFVkJRU3RDTEVkQlFTOUNMRVZCUVc5RE8wRkJRMnhETEZWQlFVa3NVVUZCVVN4TlFVRk5MRU5CUVU0c1EwRkJVaXhKUVVGdlFpeE5RVUZOTEZWQlFUbENMRVZCUVRCRE8wRkJRM2hETEZsQlFVMHNhMEpCUVd0Q0xHZERRVUZ4UWl4TFFVRnlRaXhGUVVFMFFpeE5RVUZOTEVsQlFVa3NRMEZCVml4RFFVRTFRaXhGUVVFd1F5eE5RVUZOTEVOQlFVNHNRMEZCTVVNc1EwRkJlRUk3UVVGRFFTeGxRVUZQTEdkRFFVRnhRaXhsUVVGeVFpeEZRVUZ6UXl4UFFVRlBMRWxCUVVrc1EwRkJXQ3hEUVVGMFF5eEZRVUZ4UkN4UFFVRlBMRU5CUVZBc1EwRkJja1FzUTBGQlVEdEJRVU5FTzBGQlEwWTdRVUZEUml4SFFXeENSRHRCUVcxQ1JDeERRWFpDVFRzN1FVRjVRa0VzU1VGQlRTd3dRMEZCYVVJc1ZVRkJReXhEUVVGRUxFVkJRVWtzUjBGQlNpeFJRVUYzUWp0QlFVRkJMRTFCUVdJc1RVRkJZU3hSUVVGaUxFMUJRV0U3TzBGQlEzQkVMRTFCUVUwc1ZVRkJWeXhQUVVGUExFOUJRVklzUjBGQmJVSXNUMEZCVHl4UFFVRlFMRU5CUVdVc1QwRkJiRU1zUjBGQk5FTXNRMEZCTlVRN1FVRkRRU3hOUVVGTkxGVkJRVmNzVDBGQlR5eFBRVUZTTEVkQlFXMUNMRTlCUVU4c1QwRkJVQ3hEUVVGbExFOUJRV3hETEVkQlFUUkRMRU5CUVRWRU96dEJRVVZCTEZOQlFVOHNjVU5CUVRCQ08wRkJReTlDTEU5QlFVY3NUMEZFTkVJN1FVRkZMMElzVDBGQlJ6dEJRVVkwUWl4SFFVRXhRaXhGUVVkS0xFOUJRVThzUzBGQlVDeERRVUZoTEU5QlNGUXNSVUZIYTBJc1QwRkJUeXhSUVVGUUxFTkJRV2RDTEU5QlNHeERMRVZCUnpKRExFZEJTRE5ETEVOQlFWQTdRVUZKUkN4RFFWSk5PenM3T3pzN096czdRVUZwUWtFc1NVRkJUU3gzUWtGQlVTeFZRVUZETEZsQlFVUXNSVUZCYTBJN1FVRkRja01zVFVGQlRTeHJRa0ZCYTBJc1lVRkJZU3hOUVVGeVF6dEJRVU5CTEUxQlFVa3NTVUZCU1N4RFFVRlNPenM3T3pzN096dEJRVkZCTEZOQlFVOHNWVUZCUXl4RFFVRkVMRVZCUVVrc1IwRkJTaXhGUVVGVExFTkJRVlFzUlVGQlpUdEJRVU53UWl4VFFVRkxMRWxCUVVrc1EwRkJWQ3hGUVVGWkxFbEJRVWtzWlVGQmFFSXNSVUZCYVVNc1IwRkJha01zUlVGQmMwTTdRVUZEY0VNc1ZVRkJTU3hoUVVGaExFTkJRV0lzUlVGQlowSXNRMEZCYUVJc1JVRkJiVUlzUjBGQmJrSXNSVUZCZDBJc1EwRkJlRUlzUTBGQlNqdEJRVU5FT3p0QlFVVkVMRmRCUVU4c1EwRkJVRHRCUVVORUxFZEJUa1E3UVVGUFJDeERRV3BDVFNJc0ltWnBiR1VpT2lKMGNtRnVjMlp2Y20xbGNuTXVhbk1pTENKemIzVnlZMlZTYjI5MElqb2lMMVZ6WlhKekwyMWhkSFJ3WlhKeWVTOVRhWFJsY3k5d2IzQnRiM1JwYjI0aUxDSnpiM1Z5WTJWelEyOXVkR1Z1ZENJNld5SnBiWEJ2Y25RZ2V5Qm5aWFJRY205bmNtVnpjMFp5YjIxV1lXeDFaU3dnWjJWMFZtRnNkV1ZHY205dFVISnZaM0psYzNNc0lIQnZhVzUwUm5KdmJVRnVaMnhsUVc1a1JHbHpkR0Z1WTJVZ2ZTQm1jbTl0SUNjdUxpOXBibU12WTJGc1l5YzdYRzVjYm1WNGNHOXlkQ0JqYjI1emRDQmpjbVZoZEdWTllYQndaWElnUFNBb2FXNXdkWFFzSUc5MWRIQjFkQ2tnUFQ0Z2UxeHVJQ0JqYjI1emRDQnRZWEJNWlc1bmRHZ2dQU0JwYm5CMWRDNXNaVzVuZEdnN1hHNGdJR052Ym5OMElHWnBibUZzU1c1a1pYZ2dQU0J0WVhCTVpXNW5kR2dnTFNBeE8xeHVYRzRnSUhKbGRIVnliaUFvZG1Gc2RXVXBJRDArSUh0Y2JpQWdJQ0F2THlCSlppQjJZV3gxWlNCdmRYUnphV1JsSUcxcGJtbHRkVzBnYVc1d2RYUWdjbUZ1WjJVc0lIRjFhV05yYkhrZ2NtVjBkWEp1WEc0Z0lDQWdhV1lnS0haaGJIVmxJRHc5SUdsdWNIVjBXekJkS1NCN1hHNGdJQ0FnSUNCeVpYUjFjbTRnYjNWMGNIVjBXekJkTzF4dUlDQWdJSDFjYmx4dUlDQWdJQzh2SUVsbUlIWmhiSFZsSUc5MWRITnBaR1VnYldGNGFXMTFiU0JwYm5CMWRDQnlZVzVuWlN3Z2NYVnBZMnRzZVNCeVpYUjFjbTVjYmlBZ0lDQnBaaUFvZG1Gc2RXVWdQajBnYVc1d2RYUmJabWx1WVd4SmJtUmxlRjBwSUh0Y2JpQWdJQ0FnSUhKbGRIVnliaUJ2ZFhSd2RYUmJabWx1WVd4SmJtUmxlRjA3WEc0Z0lDQWdmVnh1WEc0Z0lDQWdMeThnU1dZZ2QybDBhR2x1SUc5MlpYSmhiR3dnYVc1d2RYUWdjbUZ1WjJVc0lHWnBibVFnYzNCbFkybG1hV01nY21GdVoyVmNiaUFnSUNCbWIzSWdLR3hsZENCcElEMGdNVHNnYVNBOElHMWhjRXhsYm1kMGFEc2dhU3NyS1NCN1hHNGdJQ0FnSUNCcFppQW9kbUZzZFdVZ1BDQnBibkIxZEZ0cFhTQjhmQ0JwSUQwOVBTQm1hVzVoYkVsdVpHVjRLU0I3WEc0Z0lDQWdJQ0FnSUdOdmJuTjBJSEJ5YjJkeVpYTnpTVzVTWVc1blpTQTlJR2RsZEZCeWIyZHlaWE56Um5KdmJWWmhiSFZsS0haaGJIVmxMQ0JwYm5CMWRGdHBJQzBnTVYwc0lHbHVjSFYwVzJsZEtUdGNiaUFnSUNBZ0lDQWdjbVYwZFhKdUlHZGxkRlpoYkhWbFJuSnZiVkJ5YjJkeVpYTnpLSEJ5YjJkeVpYTnpTVzVTWVc1blpTd2diM1YwY0hWMFcya2dMU0F4WFN3Z2IzVjBjSFYwVzJsZEtUdGNiaUFnSUNBZ0lIMWNiaUFnSUNCOVhHNGdJSDA3WEc1OU8xeHVYRzVsZUhCdmNuUWdZMjl1YzNRZ1kybHlZM1ZzWVhKTmIzUnBiMjRnUFNBb2Rpd2dhMlY1TENCN0lIWmhiSFZsY3lCOUtTQTlQaUI3WEc0Z0lHTnZibk4wSUc5eWFXZHBibGdnUFNBb2RtRnNkV1Z6TG05eWFXZHBibGdwSUQ4Z2RtRnNkV1Z6TG05eWFXZHBibGd1WTNWeWNtVnVkQ0E2SURBN1hHNGdJR052Ym5OMElHOXlhV2RwYmxrZ1BTQW9kbUZzZFdWekxtOXlhV2RwYmxrcElEOGdkbUZzZFdWekxtOXlhV2RwYmxrdVkzVnljbVZ1ZENBNklEQTdYRzVjYmlBZ2NtVjBkWEp1SUhCdmFXNTBSbkp2YlVGdVoyeGxRVzVrUkdsemRHRnVZMlVvZTF4dUlDQWdJSGc2SUc5eWFXZHBibGdzWEc0Z0lDQWdlVG9nYjNKcFoybHVXU0JjYmlBZ2ZTd2dkbUZzZFdWekxtRnVaMnhsTG1OMWNuSmxiblFzSUhaaGJIVmxjeTVrYVhOMFlXNWpaUzVqZFhKeVpXNTBLVnRyWlhsZE8xeHVmVHRjYmx4dUx5cGNiaUFnUTI5dFltbHVaU0IwY21GdWMyWnZjbTFsY25NZ2FXNTBieUJ2Ym1VZ1puVnVZM1JwYjI0Z2RHaGhkQ0JqWVd4c2N5QmxkbVZ5ZVZ4dUlDQjBjbUZ1YzJadmNtMWxjaUJwYmlCMGFHVWdZWEp5WVhrZ1lXNWtJSEpsZEhWeWJuTWdkR2hsSUhKbGMzVnNkRnh1WEc0Z0lFQndZWEpoYlNCYllYSnlZWGxkWEc0Z0lFQnlaWFIxY200Z1cyWjFibU4wYVc5dVhWeHVLaTljYm1WNGNHOXlkQ0JqYjI1emRDQmphR0ZwYmlBOUlDaDBjbUZ1YzJadmNtMWxjbk1wSUQwK0lIdGNiaUFnWTI5dWMzUWdiblZ0VkhKaGJuTm1iM0p0WlhKeklEMGdkSEpoYm5ObWIzSnRaWEp6TG14bGJtZDBhRHRjYmlBZ2JHVjBJR2tnUFNBd08xeHVYRzRnSUM4cVhHNGdJQ0FnUUhCaGNtRnRJRnR1ZFcxaVpYSmRYRzRnSUNBZ1FIQmhjbUZ0SUZ0emRISnBibWRkWEc0Z0lDQWdRSEJoY21GdElGdEJZM1JwYjI1ZFhHNGdJQ0FnUUhKbGRIVnliaUJiYm5WdFltVnlYVnh1SUNBcUwxeHVJQ0J5WlhSMWNtNGdLSFlzSUd0bGVTd2dZU2tnUFQ0Z2UxeHVJQ0FnSUdadmNpQW9hU0E5SURBN0lHa2dQQ0J1ZFcxVWNtRnVjMlp2Y20xbGNuTTdJR2tyS3lrZ2UxeHVJQ0FnSUNBZ2RpQTlJSFJ5WVc1elptOXliV1Z5YzF0cFhTaDJMQ0JyWlhrc0lHRXBPMXh1SUNBZ0lIMWNibHh1SUNBZ0lISmxkSFZ5YmlCMk8xeHVJQ0I5TzF4dWZUc2lYWDA9XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9pbmMvdHJhbnNmb3JtZXJzLmpzXG4gKiogbW9kdWxlIGlkID0gMzNcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF9jb2xvciA9IHJlcXVpcmUoJy4uL3ZhbHVlLXR5cGVzL2NvbG9yJyk7XG5cbnZhciBfY29sb3IyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY29sb3IpO1xuXG52YXIgX2NvbXBsZXggPSByZXF1aXJlKCcuLi92YWx1ZS10eXBlcy9jb21wbGV4Jyk7XG5cbnZhciBfY29tcGxleDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jb21wbGV4KTtcblxudmFyIF91bml0ID0gcmVxdWlyZSgnLi4vdmFsdWUtdHlwZXMvdW5pdCcpO1xuXG52YXIgX3VuaXQyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfdW5pdCk7XG5cbnZhciBfdXRpbHMgPSByZXF1aXJlKCcuLi9pbmMvdXRpbHMnKTtcblxudmFyIF9udW1lcmljYWxWYWx1ZXMgPSByZXF1aXJlKCcuLi9pbmMvbnVtZXJpY2FsLXZhbHVlcycpO1xuXG52YXIgX251bWVyaWNhbFZhbHVlczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9udW1lcmljYWxWYWx1ZXMpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG52YXIgTlVNX05VTUVSSUNBTF9WQUxVRVMgPSBfbnVtZXJpY2FsVmFsdWVzMi5kZWZhdWx0Lmxlbmd0aDtcblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgTlVNX05VTUVSSUNBTF9WQUxVRVM7IGkrKykge1xuICAgIHZhciB2YWx1ZVByb3AgPSB2YWx1ZVtfbnVtZXJpY2FsVmFsdWVzMi5kZWZhdWx0W2ldXTtcbiAgICBpZiAoKDAsIF91dGlscy5pc1N0cmluZykodmFsdWVQcm9wKSkge1xuICAgICAgaWYgKF9jb2xvcjIuZGVmYXVsdC50ZXN0KHZhbHVlUHJvcCkpIHtcbiAgICAgICAgcmV0dXJuIF9jb2xvcjIuZGVmYXVsdDtcbiAgICAgIH0gZWxzZSBpZiAoX2NvbXBsZXgyLmRlZmF1bHQudGVzdCh2YWx1ZVByb3ApKSB7XG4gICAgICAgIHJldHVybiBfY29tcGxleDIuZGVmYXVsdDtcbiAgICAgIH0gZWxzZSBpZiAoX3VuaXQyLmRlZmF1bHQudGVzdCh2YWx1ZVByb3ApKSB7XG4gICAgICAgIHJldHVybiBfdW5pdDIuZGVmYXVsdDtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5OeVl5OTJZV3gxWlMxMGVYQmxjeTlrWlhSbFkzUXVhbk1pWFN3aWJtRnRaWE1pT2x0ZExDSnRZWEJ3YVc1bmN5STZJanM3T3p0QlFVRkJPenM3TzBGQlEwRTdPenM3UVVGRFFUczdPenRCUVVOQk96dEJRVU5CT3pzN096czdRVUZGUVN4SlFVRk5MSFZDUVVGMVFpd3dRa0ZCYVVJc1RVRkJPVU03TzJ0Q1FVVmxMRlZCUVVNc1MwRkJSQ3hGUVVGWE8wRkJRM2hDTEU5QlFVc3NTVUZCU1N4SlFVRkpMRU5CUVdJc1JVRkJaMElzU1VGQlNTeHZRa0ZCY0VJc1JVRkJNRU1zUjBGQk1VTXNSVUZCSzBNN1FVRkROME1zVVVGQlRTeFpRVUZaTEUxQlFVMHNNRUpCUVdsQ0xFTkJRV3BDTEVOQlFVNHNRMEZCYkVJN1FVRkRRU3hSUVVGSkxIRkNRVUZUTEZOQlFWUXNRMEZCU2l4RlFVRjVRanRCUVVOMlFpeFZRVUZKTEdkQ1FVRlZMRWxCUVZZc1EwRkJaU3hUUVVGbUxFTkJRVW9zUlVGQkswSTdRVUZETjBJN1FVRkRSQ3hQUVVaRUxFMUJSVThzU1VGQlNTeHJRa0ZCV1N4SlFVRmFMRU5CUVdsQ0xGTkJRV3BDTEVOQlFVb3NSVUZCYVVNN1FVRkRkRU03UVVGRFJDeFBRVVpOTEUxQlJVRXNTVUZCU1N4bFFVRlRMRWxCUVZRc1EwRkJZeXhUUVVGa0xFTkJRVW9zUlVGQk9FSTdRVUZEYmtNN1FVRkRSRHRCUVVOR08wRkJRMFk3UVVGRFJpeERJaXdpWm1sc1pTSTZJbVJsZEdWamRDNXFjeUlzSW5OdmRYSmpaVkp2YjNRaU9pSXZWWE5sY25NdmJXRjBkSEJsY25KNUwxTnBkR1Z6TDNCdmNHMXZkR2x2YmlJc0luTnZkWEpqWlhORGIyNTBaVzUwSWpwYkltbHRjRzl5ZENCamIyeHZjbFI1Y0dVZ1puSnZiU0FuTGk0dmRtRnNkV1V0ZEhsd1pYTXZZMjlzYjNJbk8xeHVhVzF3YjNKMElHTnZiWEJzWlhoVWVYQmxJR1p5YjIwZ0p5NHVMM1poYkhWbExYUjVjR1Z6TDJOdmJYQnNaWGduTzF4dWFXMXdiM0owSUhWdWFYUlVlWEJsSUdaeWIyMGdKeTR1TDNaaGJIVmxMWFI1Y0dWekwzVnVhWFFuTzF4dWFXMXdiM0owSUhzZ2FYTlRkSEpwYm1jZ2ZTQm1jbTl0SUNjdUxpOXBibU12ZFhScGJITW5PMXh1YVcxd2IzSjBJRTVWVFVWU1NVTkJURjlXUVV4VlJWTWdabkp2YlNBbkxpNHZhVzVqTDI1MWJXVnlhV05oYkMxMllXeDFaWE1uTzF4dVhHNWpiMjV6ZENCT1ZVMWZUbFZOUlZKSlEwRk1YMVpCVEZWRlV5QTlJRTVWVFVWU1NVTkJURjlXUVV4VlJWTXViR1Z1WjNSb08xeHVYRzVsZUhCdmNuUWdaR1ZtWVhWc2RDQW9kbUZzZFdVcElEMCtJSHRjYmlBZ1ptOXlJQ2hzWlhRZ2FTQTlJREE3SUdrZ1BDQk9WVTFmVGxWTlJWSkpRMEZNWDFaQlRGVkZVenNnYVNzcktTQjdYRzRnSUNBZ1kyOXVjM1FnZG1Gc2RXVlFjbTl3SUQwZ2RtRnNkV1ZiVGxWTlJWSkpRMEZNWDFaQlRGVkZVMXRwWFYwN1hHNGdJQ0FnYVdZZ0tHbHpVM1J5YVc1bktIWmhiSFZsVUhKdmNDa3BJSHRjYmlBZ0lDQWdJR2xtSUNoamIyeHZjbFI1Y0dVdWRHVnpkQ2gyWVd4MVpWQnliM0FwS1NCN1hHNGdJQ0FnSUNBZ0lISmxkSFZ5YmlCamIyeHZjbFI1Y0dVN1hHNGdJQ0FnSUNCOUlHVnNjMlVnYVdZZ0tHTnZiWEJzWlhoVWVYQmxMblJsYzNRb2RtRnNkV1ZRY205d0tTa2dlMXh1SUNBZ0lDQWdJQ0J5WlhSMWNtNGdZMjl0Y0d4bGVGUjVjR1U3WEc0Z0lDQWdJQ0I5SUdWc2MyVWdhV1lnS0hWdWFYUlVlWEJsTG5SbGMzUW9kbUZzZFdWUWNtOXdLU2tnZTF4dUlDQWdJQ0FnSUNCeVpYUjFjbTRnZFc1cGRGUjVjR1U3WEc0Z0lDQWdJQ0I5WEc0Z0lDQWdmVnh1SUNCOVhHNTlPeUpkZlE9PVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvdmFsdWUtdHlwZXMvZGV0ZWN0LmpzXG4gKiogbW9kdWxlIGlkID0gMzRcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHMuZGVmYXVsdCA9IFsnY3VycmVudCcsICdmcm9tJywgJ3RvJywgJ3ZlbG9jaXR5J107XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5OeVl5OXBibU12Ym5WdFpYSnBZMkZzTFhaaGJIVmxjeTVxY3lKZExDSnVZVzFsY3lJNlcxMHNJbTFoY0hCcGJtZHpJam9pT3pzN2EwSkJRV1VzUTBGQlF5eFRRVUZFTEVWQlFWa3NUVUZCV2l4RlFVRnZRaXhKUVVGd1FpeEZRVUV3UWl4VlFVRXhRaXhESWl3aVptbHNaU0k2SW01MWJXVnlhV05oYkMxMllXeDFaWE11YW5NaUxDSnpiM1Z5WTJWU2IyOTBJam9pTDFWelpYSnpMMjFoZEhSd1pYSnllUzlUYVhSbGN5OXdiM0J0YjNScGIyNGlMQ0p6YjNWeVkyVnpRMjl1ZEdWdWRDSTZXeUpsZUhCdmNuUWdaR1ZtWVhWc2RDQmJKMk4xY25KbGJuUW5MQ0FuWm5KdmJTY3NJQ2QwYnljc0lDZDJaV3h2WTJsMGVTZGRPeUpkZlE9PVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvaW5jL251bWVyaWNhbC12YWx1ZXMuanNcbiAqKiBtb2R1bGUgaWQgPSAzNVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX29iamVjdEFkYXB0ZXIgPSByZXF1aXJlKCcuLi9hZGFwdGVyL29iamVjdC1hZGFwdGVyJyk7XG5cbnZhciBfb2JqZWN0QWRhcHRlcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9vYmplY3RBZGFwdGVyKTtcblxudmFyIF9jc3NBZGFwdGVyID0gcmVxdWlyZSgnLi4vYWRhcHRlci9jc3MtYWRhcHRlcicpO1xuXG52YXIgX2Nzc0FkYXB0ZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY3NzQWRhcHRlcik7XG5cbnZhciBfc3ZnQWRhcHRlciA9IHJlcXVpcmUoJy4uL2FkYXB0ZXIvc3ZnLWFkYXB0ZXInKTtcblxudmFyIF9zdmdBZGFwdGVyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3N2Z0FkYXB0ZXIpO1xuXG52YXIgX3N2Z1BhdGhBZGFwdGVyID0gcmVxdWlyZSgnLi4vYWRhcHRlci9zdmctcGF0aC1hZGFwdGVyJyk7XG5cbnZhciBfc3ZnUGF0aEFkYXB0ZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfc3ZnUGF0aEFkYXB0ZXIpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbiAoZWxlbWVudCkge1xuICB2YXIgZGV0ZWN0ZWRBZGFwdGVyID0gX29iamVjdEFkYXB0ZXIyLmRlZmF1bHQ7XG5cbiAgLy8gSWYgSFRNTEVsZW1lbnQgbG9hZCBDU1NcbiAgaWYgKGVsZW1lbnQgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCB8fCBlbGVtZW50LnRhZ05hbWUgPT09ICdzdmcnKSB7XG4gICAgZGV0ZWN0ZWRBZGFwdGVyID0gX2Nzc0FkYXB0ZXIyLmRlZmF1bHQ7XG5cbiAgICAvLyBPciBTVkdcbiAgfSBlbHNlIGlmIChlbGVtZW50IGluc3RhbmNlb2YgU1ZHRWxlbWVudCkge1xuICAgIGlmIChlbGVtZW50LnRhZ05hbWUgPT09ICdwYXRoJykge1xuICAgICAgZGV0ZWN0ZWRBZGFwdGVyID0gX3N2Z1BhdGhBZGFwdGVyMi5kZWZhdWx0O1xuICAgIH0gZWxzZSB7XG4gICAgICBkZXRlY3RlZEFkYXB0ZXIgPSBfc3ZnQWRhcHRlcjIuZGVmYXVsdDtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZGV0ZWN0ZWRBZGFwdGVyO1xufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbk55WXk5cGJtTXZaR1YwWldOMExXRmtZWEIwWlhJdWFuTWlYU3dpYm1GdFpYTWlPbHRkTENKdFlYQndhVzVuY3lJNklqczdPenRCUVVGQk96czdPMEZCUTBFN096czdRVUZEUVRzN096dEJRVU5CT3pzN096czdhMEpCUldVc1ZVRkJReXhQUVVGRUxFVkJRV0U3UVVGRE1VSXNUVUZCU1N4NVEwRkJTanM3TzBGQlIwRXNUVUZCU1N4dFFrRkJiVUlzVjBGQmJrSXNTVUZCYTBNc1VVRkJVU3hQUVVGU0xFdEJRVzlDTEV0QlFURkVMRVZCUVdsRk8wRkJReTlFT3pzN1FVRkhSQ3hIUVVwRUxFMUJTVThzU1VGQlNTeHRRa0ZCYlVJc1ZVRkJka0lzUlVGQmJVTTdRVUZEZUVNc1VVRkJTU3hSUVVGUkxFOUJRVklzUzBGQmIwSXNUVUZCZUVJc1JVRkJaME03UVVGRE9VSTdRVUZEUkN4TFFVWkVMRTFCUlU4N1FVRkRURHRCUVVORU8wRkJRMFk3TzBGQlJVUXNVMEZCVHl4bFFVRlFPMEZCUTBRc1F5SXNJbVpwYkdVaU9pSmtaWFJsWTNRdFlXUmhjSFJsY2k1cWN5SXNJbk52ZFhKalpWSnZiM1FpT2lJdlZYTmxjbk12YldGMGRIQmxjbko1TDFOcGRHVnpMM0J2Y0cxdmRHbHZiaUlzSW5OdmRYSmpaWE5EYjI1MFpXNTBJanBiSW1sdGNHOXlkQ0J2WW1wbFkzUkJaR0Z3ZEdWeUlHWnliMjBnSnk0dUwyRmtZWEIwWlhJdmIySnFaV04wTFdGa1lYQjBaWEluTzF4dWFXMXdiM0owSUdOemMwRmtZWEIwWlhJZ1puSnZiU0FuTGk0dllXUmhjSFJsY2k5amMzTXRZV1JoY0hSbGNpYzdYRzVwYlhCdmNuUWdjM1puUVdSaGNIUmxjaUJtY205dElDY3VMaTloWkdGd2RHVnlMM04yWnkxaFpHRndkR1Z5Snp0Y2JtbHRjRzl5ZENCemRtZFFZWFJvUVdSaGNIUmxjaUJtY205dElDY3VMaTloWkdGd2RHVnlMM04yWnkxd1lYUm9MV0ZrWVhCMFpYSW5PMXh1WEc1bGVIQnZjblFnWkdWbVlYVnNkQ0FvWld4bGJXVnVkQ2tnUFQ0Z2UxeHVJQ0JzWlhRZ1pHVjBaV04wWldSQlpHRndkR1Z5SUQwZ2IySnFaV04wUVdSaGNIUmxjanRjYmx4dUlDQXZMeUJKWmlCSVZFMU1SV3hsYldWdWRDQnNiMkZrSUVOVFUxeHVJQ0JwWmlBb1pXeGxiV1Z1ZENCcGJuTjBZVzVqWlc5bUlFaFVUVXhGYkdWdFpXNTBJSHg4SUdWc1pXMWxiblF1ZEdGblRtRnRaU0E5UFQwZ0ozTjJaeWNwSUh0Y2JpQWdJQ0JrWlhSbFkzUmxaRUZrWVhCMFpYSWdQU0JqYzNOQlpHRndkR1Z5TzF4dVhHNGdJQzh2SUU5eUlGTldSMXh1SUNCOUlHVnNjMlVnYVdZZ0tHVnNaVzFsYm5RZ2FXNXpkR0Z1WTJWdlppQlRWa2RGYkdWdFpXNTBLU0I3WEc0Z0lDQWdhV1lnS0dWc1pXMWxiblF1ZEdGblRtRnRaU0E5UFQwZ0ozQmhkR2duS1NCN1hHNGdJQ0FnSUNCa1pYUmxZM1JsWkVGa1lYQjBaWElnUFNCemRtZFFZWFJvUVdSaGNIUmxjanRjYmlBZ0lDQjlJR1ZzYzJVZ2UxeHVJQ0FnSUNBZ1pHVjBaV04wWldSQlpHRndkR1Z5SUQwZ2MzWm5RV1JoY0hSbGNqdGNiaUFnSUNCOVhHNGdJSDFjYmx4dUlDQnlaWFIxY200Z1pHVjBaV04wWldSQlpHRndkR1Z5TzF4dWZUdGNiaUpkZlE9PVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvaW5jL2RldGVjdC1hZGFwdGVyLmpzXG4gKiogbW9kdWxlIGlkID0gMzZcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF9jYWxjID0gcmVxdWlyZSgnLi4vLi4vaW5jL2NhbGMnKTtcblxudmFyIEJMRU5EX0FDQ1VSQUNZID0gNjA7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uIChvdXRBY3Rpb24sIGluQWN0aW9uLCBmbG93VmFsdWUsIGtleSkge1xuICB2YXIgb3V0VmFsdWUgPSBvdXRBY3Rpb24udmFsdWVzW2tleV07XG5cbiAgaWYgKG91dEFjdGlvbi5lbGFwc2VkID09PSB1bmRlZmluZWQgfHwgIW91dFZhbHVlKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgdmFyIGluVmFsdWUgPSBpbkFjdGlvbi52YWx1ZXNba2V5XTtcbiAgdmFyIG91dFRvdGFsRHVyYXRpb24gPSBvdXRWYWx1ZS5kZWxheSArIG91dFZhbHVlLmR1cmF0aW9uO1xuICB2YXIgdGltZVVudGlsT3V0RW5kID0gTWF0aC5taW4ob3V0VG90YWxEdXJhdGlvbiAtIG91dEFjdGlvbi5lbGFwc2VkLCBpblZhbHVlLmRlbGF5ICsgaW5WYWx1ZS5kdXJhdGlvbik7XG4gIHZhciBpblBvc2l0aW9uQXRPdXRFbmQgPSAoMCwgX2NhbGMuZWFzZSkoKDAsIF9jYWxjLnJlc3RyaWN0KSgoMCwgX2NhbGMuZ2V0UHJvZ3Jlc3NGcm9tVmFsdWUpKHRpbWVVbnRpbE91dEVuZCwgMCwgaW5WYWx1ZS5kZWxheSArIGluVmFsdWUuZHVyYXRpb24pLCAwLCAxKSwgaW5WYWx1ZS5mcm9tLCBpblZhbHVlLnRvLCBpblZhbHVlLmVhc2UpO1xuICB2YXIgaW5CaWdnZXJUaGFuT3V0QXRTdGFydCA9IGluVmFsdWUuZnJvbSA+IG91dFZhbHVlLmN1cnJlbnQ7XG4gIHZhciBpbkJpZ2dlclRoYW5PdXRBdEVuZCA9IGluUG9zaXRpb25BdE91dEVuZCA+IG91dFZhbHVlLnRvO1xuICB2YXIgdHdlZW5zSW50ZXJzZWN0ID0gaW5CaWdnZXJUaGFuT3V0QXRTdGFydCAhPT0gaW5CaWdnZXJUaGFuT3V0QXRFbmQ7XG5cbiAgdmFyIGJsZW5kQ3VydmUgPSBbWzAsIG91dFZhbHVlLmN1cnJlbnRdLCBbdGltZVVudGlsT3V0RW5kLCBpblBvc2l0aW9uQXRPdXRFbmRdXTtcblxuICAvLyBJZiB0d2VlbnMgaW50ZXJzZWN0LCByZXNvbHZlIHR3ZWVucyBhdCBhIHJlc29sdXRpb24gdG8gZmluZCBleGFjdGx5IHdoZXJlXG4gIGlmICh0d2VlbnNJbnRlcnNlY3QpIHtcbiAgICB2YXIgdGltZVN0ZXBUb1Rlc3QgPSB0aW1lVW50aWxPdXRFbmQgLyBCTEVORF9BQ0NVUkFDWTtcbiAgICB2YXIgZm91bmRQMSA9IGZhbHNlO1xuICAgIHZhciBmb3VuZFAyID0gZmFsc2U7XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8PSBCTEVORF9BQ0NVUkFDWTsgaSsrKSB7XG4gICAgICB2YXIgdGltZVN0ZXAgPSBpICogdGltZVN0ZXBUb1Rlc3Q7XG4gICAgICB2YXIgb3V0QXRUaW1lID0gKDAsIF9jYWxjLmVhc2UpKCgwLCBfY2FsYy5nZXRQcm9ncmVzc0Zyb21WYWx1ZSkob3V0QWN0aW9uLmVsYXBzZWQgKyB0aW1lU3RlcCwgb3V0VmFsdWUuZGVsYXksIG91dFZhbHVlLmR1cmF0aW9uKSwgb3V0VmFsdWUuZnJvbSwgb3V0VmFsdWUudG8sIG91dFZhbHVlLmVhc2UpO1xuICAgICAgdmFyIGluQXRUaW1lID0gKDAsIF9jYWxjLmVhc2UpKCgwLCBfY2FsYy5nZXRQcm9ncmVzc0Zyb21WYWx1ZSkoaW5BY3Rpb24uZWxhcHNlZCArIHRpbWVTdGVwLCBpblZhbHVlLmRlbGF5LCBpblZhbHVlLmR1cmF0aW9uKSwgaW5WYWx1ZS5mcm9tLCBpblZhbHVlLnRvLCBpblZhbHVlLmVhc2UpO1xuXG4gICAgICBpZiAoIWZvdW5kUDEgJiYgKGluQmlnZ2VyVGhhbk91dEF0U3RhcnQgJiYgaW5BdFRpbWUgPCBvdXRBdFRpbWUgfHwgIWluQmlnZ2VyVGhhbk91dEF0U3RhcnQgJiYgaW5BdFRpbWUgPiBvdXRBdFRpbWUpKSB7XG4gICAgICAgIGJsZW5kQ3VydmUuc3BsaWNlKDEsIDAsIFt0aW1lU3RlcCwgaW5BdFRpbWVdKTtcbiAgICAgICAgZm91bmRQMSA9IHRydWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChmb3VuZFAxICYmIChpbkJpZ2dlclRoYW5PdXRBdFN0YXJ0ICYmIGluQXRUaW1lIDwgb3V0VmFsdWUuY3VycmVudCB8fCAhaW5CaWdnZXJUaGFuT3V0QXRTdGFydCAmJiBpbkF0VGltZSA+IG91dFZhbHVlLmN1cnJlbnQpKSB7XG4gICAgICAgIGJsZW5kQ3VydmVbMl0gPSBbdGltZVN0ZXAsIGluQXRUaW1lXTtcbiAgICAgICAgZm91bmRQMiA9IHRydWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChmb3VuZFAyKSB7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGlmIChibGVuZEN1cnZlLmxlbmd0aCA9PT0gMikge1xuICAgIC8vIFBhc3MgYmV0d2VlbiB0d2VlbnMgdXNpbmcgaW5jb21pbmcgZWFzaW5nIGlmIGp1c3QgdHdvIHBvaW50c1xuICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgYmxlbmRQcm9ncmVzcyA9ICgwLCBfY2FsYy5yZXN0cmljdCkoKDAsIF9jYWxjLmdldFByb2dyZXNzRnJvbVZhbHVlKShpbkFjdGlvbi5lbGFwc2VkLCBibGVuZEN1cnZlWzBdWzBdLCBibGVuZEN1cnZlWzFdWzBdKSwgMCwgMSk7XG5cbiAgICAgIGlmIChibGVuZFByb2dyZXNzID09PSAxKSB7XG4gICAgICAgIGZsb3dWYWx1ZS5ibGVuZEN1cnZlID0gdW5kZWZpbmVkO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gKDAsIF9jYWxjLmVhc2UpKGJsZW5kUHJvZ3Jlc3MsIG91dFZhbHVlLmN1cnJlbnQsIGluVmFsdWUuY3VycmVudCwgaW5WYWx1ZS5lYXNlKTtcbiAgICB9O1xuICB9IGVsc2Uge1xuICAgIC8vIFBhc3MgYmV0d2VlbiB0d2VlbnMgdXNpbmcgYmV6aWVyIGludGVycG9sYXRpb25cbiAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIGJsZW5kUHJvZ3Jlc3MgPSAoMCwgX2NhbGMucmVzdHJpY3QpKCgwLCBfY2FsYy5nZXRQcm9ncmVzc0Zyb21WYWx1ZSkoaW5BY3Rpb24uZWxhcHNlZCwgYmxlbmRDdXJ2ZVswXVswXSwgYmxlbmRDdXJ2ZVsyXVswXSksIDAsIDEpO1xuICAgICAgdmFyIGFQID0gKDAsIF9jYWxjLmdldFZhbHVlRnJvbVByb2dyZXNzKShibGVuZFByb2dyZXNzLCBibGVuZEN1cnZlWzBdWzFdLCBibGVuZEN1cnZlWzFdWzFdKTtcbiAgICAgIHZhciBiUCA9ICgwLCBfY2FsYy5nZXRWYWx1ZUZyb21Qcm9ncmVzcykoYmxlbmRQcm9ncmVzcywgYmxlbmRDdXJ2ZVsxXVsxXSwgYmxlbmRDdXJ2ZVsyXVsxXSk7XG5cbiAgICAgIGlmIChibGVuZFByb2dyZXNzID09PSAxKSB7XG4gICAgICAgIGZsb3dWYWx1ZS5ibGVuZEN1cnZlID0gdW5kZWZpbmVkO1xuICAgICAgICByZXR1cm4gaW5WYWx1ZS5jdXJyZW50O1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gKDAsIF9jYWxjLmdldFZhbHVlRnJvbVByb2dyZXNzKShibGVuZFByb2dyZXNzLCBhUCwgYlApO1xuICAgIH07XG4gIH1cbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5OeVl5OWhZM1JwYjI1ekwyWnNiM2N2WjJWdVpYSmhkR1V0WW14bGJtUXRZM1Z5ZG1VdWFuTWlYU3dpYm1GdFpYTWlPbHRkTENKdFlYQndhVzVuY3lJNklqczdPenRCUVVGQk96dEJRVVZCTEVsQlFVMHNhVUpCUVdsQ0xFVkJRWFpDT3p0clFrRkZaU3hWUVVGRExGTkJRVVFzUlVGQldTeFJRVUZhTEVWQlFYTkNMRk5CUVhSQ0xFVkJRV2xETEVkQlFXcERMRVZCUVhsRE8wRkJRM1JFTEUxQlFVMHNWMEZCVnl4VlFVRlZMRTFCUVZZc1EwRkJhVUlzUjBGQmFrSXNRMEZCYWtJN08wRkJSVUVzVFVGQlNTeFZRVUZWTEU5QlFWWXNTMEZCYzBJc1UwRkJkRUlzU1VGQmJVTXNRMEZCUXl4UlFVRjRReXhGUVVGclJEdEJRVU5vUkR0QlFVTkVPenRCUVVWRUxFMUJRVTBzVlVGQlZTeFRRVUZUTEUxQlFWUXNRMEZCWjBJc1IwRkJhRUlzUTBGQmFFSTdRVUZEUVN4TlFVRk5MRzFDUVVGdFFpeFRRVUZUTEV0QlFWUXNSMEZCYVVJc1UwRkJVeXhSUVVGdVJEdEJRVU5CTEUxQlFVMHNhMEpCUVd0Q0xFdEJRVXNzUjBGQlRDeERRVUZUTEcxQ1FVRnRRaXhWUVVGVkxFOUJRWFJETEVWQlFTdERMRkZCUVZFc1MwRkJVaXhIUVVGblFpeFJRVUZSTEZGQlFYWkZMRU5CUVhoQ08wRkJRMEVzVFVGQlRTeHhRa0ZCY1VJc1owSkJRVXNzYjBKQlFWTXNaME5CUVhGQ0xHVkJRWEpDTEVWQlFYTkRMRU5CUVhSRExFVkJRWGxETEZGQlFWRXNTMEZCVWl4SFFVRm5RaXhSUVVGUkxGRkJRV3BGTEVOQlFWUXNSVUZCY1VZc1EwRkJja1lzUlVGQmQwWXNRMEZCZUVZc1EwRkJUQ3hGUVVGcFJ5eFJRVUZSTEVsQlFYcEhMRVZCUVN0SExGRkJRVkVzUlVGQmRrZ3NSVUZCTWtnc1VVRkJVU3hKUVVGdVNTeERRVUV6UWp0QlFVTkJMRTFCUVUwc2VVSkJRWGxDTEZGQlFWRXNTVUZCVWl4SFFVRmxMRk5CUVZNc1QwRkJka1E3UVVGRFFTeE5RVUZOTEhWQ1FVRjFRaXh4UWtGQmNVSXNVMEZCVXl4RlFVRXpSRHRCUVVOQkxFMUJRVTBzYTBKQlFXdENMREpDUVVFeVFpeHZRa0ZCYmtRN08wRkJSVUVzVFVGQlRTeGhRVUZoTEVOQlFVTXNRMEZCUXl4RFFVRkVMRVZCUVVrc1UwRkJVeXhQUVVGaUxFTkJRVVFzUlVGQmQwSXNRMEZCUXl4bFFVRkVMRVZCUVd0Q0xHdENRVUZzUWl4RFFVRjRRaXhEUVVGdVFqczdPMEZCUjBFc1RVRkJTU3hsUVVGS0xFVkJRWEZDTzBGQlEyNUNMRkZCUVUwc2FVSkJRV2xDTEd0Q1FVRnJRaXhqUVVGNlF6dEJRVU5CTEZGQlFVa3NWVUZCVlN4TFFVRmtPMEZCUTBFc1VVRkJTU3hWUVVGVkxFdEJRV1E3TzBGQlJVRXNVMEZCU3l4SlFVRkpMRWxCUVVrc1EwRkJZaXhGUVVGblFpeExRVUZMTEdOQlFYSkNMRVZCUVhGRExFZEJRWEpETEVWQlFUQkRPMEZCUTNoRExGVkJRVTBzVjBGQlZ5eEpRVUZKTEdOQlFYSkNPMEZCUTBFc1ZVRkJUU3haUVVGWkxHZENRVUZMTEdkRFFVRnhRaXhWUVVGVkxFOUJRVllzUjBGQmIwSXNVVUZCZWtNc1JVRkJiVVFzVTBGQlV5eExRVUUxUkN4RlFVRnRSU3hUUVVGVExGRkJRVFZGTEVOQlFVd3NSVUZCTkVZc1UwRkJVeXhKUVVGeVJ5eEZRVUV5Unl4VFFVRlRMRVZCUVhCSUxFVkJRWGRJTEZOQlFWTXNTVUZCYWtrc1EwRkJiRUk3UVVGRFFTeFZRVUZOTEZkQlFWY3NaMEpCUVVzc1owTkJRWEZDTEZOQlFWTXNUMEZCVkN4SFFVRnRRaXhSUVVGNFF5eEZRVUZyUkN4UlFVRlJMRXRCUVRGRUxFVkJRV2xGTEZGQlFWRXNVVUZCZWtVc1EwRkJUQ3hGUVVGNVJpeFJRVUZSTEVsQlFXcEhMRVZCUVhWSExGRkJRVkVzUlVGQkwwY3NSVUZCYlVnc1VVRkJVU3hKUVVFelNDeERRVUZxUWpzN1FVRkZRU3hWUVVGSkxFTkJRVU1zVDBGQlJDeExRVUZqTERCQ1FVRXdRaXhYUVVGWExGTkJRWFJETEVsQlFYRkVMRU5CUVVNc2MwSkJRVVFzU1VGQk1rSXNWMEZCVnl4VFFVRjRSeXhEUVVGS0xFVkJRWGxJTzBGQlEzWklMRzFDUVVGWExFMUJRVmdzUTBGQmEwSXNRMEZCYkVJc1JVRkJjVUlzUTBGQmNrSXNSVUZCZDBJc1EwRkJReXhSUVVGRUxFVkJRVmNzVVVGQldDeERRVUY0UWp0QlFVTkJMR3RDUVVGVkxFbEJRVlk3UVVGRFJEczdRVUZGUkN4VlFVRkpMRmxCUVdFc01FSkJRVEJDTEZkQlFWY3NVMEZCVXl4UFFVRXZReXhKUVVFMFJDeERRVUZETEhOQ1FVRkVMRWxCUVRKQ0xGZEJRVmNzVTBGQlV5eFBRVUYyU0N4RFFVRktMRVZCUVhOSk8wRkJRM0JKTEcxQ1FVRlhMRU5CUVZnc1NVRkJaMElzUTBGQlF5eFJRVUZFTEVWQlFWY3NVVUZCV0N4RFFVRm9RanRCUVVOQkxHdENRVUZWTEVsQlFWWTdRVUZEUkRzN1FVRkZSQ3hWUVVGSkxFOUJRVW9zUlVGQllUdEJRVU5ZTzBGQlEwUTdRVUZEUmp0QlFVTkdPenRCUVVWRUxFMUJRVWtzVjBGQlZ5eE5RVUZZTEV0QlFYTkNMRU5CUVRGQ0xFVkJRVFpDT3p0QlFVVXpRaXhYUVVGUExGbEJRVTA3UVVGRFdDeFZRVUZOTEdkQ1FVRm5RaXh2UWtGQlV5eG5RMEZCY1VJc1UwRkJVeXhQUVVFNVFpeEZRVUYxUXl4WFFVRlhMRU5CUVZnc1JVRkJZeXhEUVVGa0xFTkJRWFpETEVWQlFYbEVMRmRCUVZjc1EwRkJXQ3hGUVVGakxFTkJRV1FzUTBGQmVrUXNRMEZCVkN4RlFVRnhSaXhEUVVGeVJpeEZRVUYzUml4RFFVRjRSaXhEUVVGMFFqczdRVUZGUVN4VlFVRkpMR3RDUVVGclFpeERRVUYwUWl4RlFVRjVRanRCUVVOMlFpeHJRa0ZCVlN4VlFVRldMRWRCUVhWQ0xGTkJRWFpDTzBGQlEwUTdPMEZCUlVRc1lVRkJUeXhuUWtGQlN5eGhRVUZNTEVWQlFXOUNMRk5CUVZNc1QwRkJOMElzUlVGQmMwTXNVVUZCVVN4UFFVRTVReXhGUVVGMVJDeFJRVUZSTEVsQlFTOUVMRU5CUVZBN1FVRkRSQ3hMUVZKRU8wRkJVMFFzUjBGWVJDeE5RVmRQT3p0QlFVVk1MRmRCUVU4c1dVRkJUVHRCUVVOWUxGVkJRVTBzWjBKQlFXZENMRzlDUVVGVExHZERRVUZ4UWl4VFFVRlRMRTlCUVRsQ0xFVkJRWFZETEZkQlFWY3NRMEZCV0N4RlFVRmpMRU5CUVdRc1EwRkJka01zUlVGQmVVUXNWMEZCVnl4RFFVRllMRVZCUVdNc1EwRkJaQ3hEUVVGNlJDeERRVUZVTEVWQlFYRkdMRU5CUVhKR0xFVkJRWGRHTEVOQlFYaEdMRU5CUVhSQ08wRkJRMEVzVlVGQlRTeExRVUZMTEdkRFFVRnhRaXhoUVVGeVFpeEZRVUZ2UXl4WFFVRlhMRU5CUVZnc1JVRkJZeXhEUVVGa0xFTkJRWEJETEVWQlFYTkVMRmRCUVZjc1EwRkJXQ3hGUVVGakxFTkJRV1FzUTBGQmRFUXNRMEZCV0R0QlFVTkJMRlZCUVUwc1MwRkJTeXhuUTBGQmNVSXNZVUZCY2tJc1JVRkJiME1zVjBGQlZ5eERRVUZZTEVWQlFXTXNRMEZCWkN4RFFVRndReXhGUVVGelJDeFhRVUZYTEVOQlFWZ3NSVUZCWXl4RFFVRmtMRU5CUVhSRUxFTkJRVmc3TzBGQlJVRXNWVUZCU1N4clFrRkJhMElzUTBGQmRFSXNSVUZCZVVJN1FVRkRka0lzYTBKQlFWVXNWVUZCVml4SFFVRjFRaXhUUVVGMlFqdEJRVU5CTEdWQlFVOHNVVUZCVVN4UFFVRm1PMEZCUTBRN08wRkJSVVFzWVVGQlR5eG5RMEZCY1VJc1lVRkJja0lzUlVGQmIwTXNSVUZCY0VNc1JVRkJkME1zUlVGQmVFTXNRMEZCVUR0QlFVTkVMRXRCV0VRN1FVRlpSRHRCUVVOR0xFTWlMQ0ptYVd4bElqb2laMlZ1WlhKaGRHVXRZbXhsYm1RdFkzVnlkbVV1YW5NaUxDSnpiM1Z5WTJWU2IyOTBJam9pTDFWelpYSnpMMjFoZEhSd1pYSnllUzlUYVhSbGN5OXdiM0J0YjNScGIyNGlMQ0p6YjNWeVkyVnpRMjl1ZEdWdWRDSTZXeUpwYlhCdmNuUWdleUJuWlhSUWNtOW5jbVZ6YzBaeWIyMVdZV3gxWlN3Z1oyVjBWbUZzZFdWR2NtOXRVSEp2WjNKbGMzTXNJR1ZoYzJVc0lISmxjM1J5YVdOMElIMGdabkp2YlNBbkxpNHZMaTR2YVc1akwyTmhiR01uTzF4dVhHNWpiMjV6ZENCQ1RFVk9SRjlCUTBOVlVrRkRXU0E5SURZd08xeHVYRzVsZUhCdmNuUWdaR1ZtWVhWc2RDQW9iM1YwUVdOMGFXOXVMQ0JwYmtGamRHbHZiaXdnWm14dmQxWmhiSFZsTENCclpYa3BJRDArSUh0Y2JpQWdZMjl1YzNRZ2IzVjBWbUZzZFdVZ1BTQnZkWFJCWTNScGIyNHVkbUZzZFdWelcydGxlVjA3WEc1Y2JpQWdhV1lnS0c5MWRFRmpkR2x2Ymk1bGJHRndjMlZrSUQwOVBTQjFibVJsWm1sdVpXUWdmSHdnSVc5MWRGWmhiSFZsS1NCN1hHNGdJQ0FnY21WMGRYSnVPMXh1SUNCOVhHNWNiaUFnWTI5dWMzUWdhVzVXWVd4MVpTQTlJR2x1UVdOMGFXOXVMblpoYkhWbGMxdHJaWGxkTzF4dUlDQmpiMjV6ZENCdmRYUlViM1JoYkVSMWNtRjBhVzl1SUQwZ2IzVjBWbUZzZFdVdVpHVnNZWGtnS3lCdmRYUldZV3gxWlM1a2RYSmhkR2x2Ymp0Y2JpQWdZMjl1YzNRZ2RHbHRaVlZ1ZEdsc1QzVjBSVzVrSUQwZ1RXRjBhQzV0YVc0b2IzVjBWRzkwWVd4RWRYSmhkR2x2YmlBdElHOTFkRUZqZEdsdmJpNWxiR0Z3YzJWa0xDQnBibFpoYkhWbExtUmxiR0Y1SUNzZ2FXNVdZV3gxWlM1a2RYSmhkR2x2YmlrN1hHNGdJR052Ym5OMElHbHVVRzl6YVhScGIyNUJkRTkxZEVWdVpDQTlJR1ZoYzJVb2NtVnpkSEpwWTNRb1oyVjBVSEp2WjNKbGMzTkdjbTl0Vm1Gc2RXVW9kR2x0WlZWdWRHbHNUM1YwUlc1a0xDQXdMQ0JwYmxaaGJIVmxMbVJsYkdGNUlDc2dhVzVXWVd4MVpTNWtkWEpoZEdsdmJpa3NJREFzSURFcExDQnBibFpoYkhWbExtWnliMjBzSUdsdVZtRnNkV1V1ZEc4c0lHbHVWbUZzZFdVdVpXRnpaU2s3WEc0Z0lHTnZibk4wSUdsdVFtbG5aMlZ5VkdoaGJrOTFkRUYwVTNSaGNuUWdQU0JwYmxaaGJIVmxMbVp5YjIwZ1BpQnZkWFJXWVd4MVpTNWpkWEp5Wlc1ME8xeHVJQ0JqYjI1emRDQnBia0pwWjJkbGNsUm9ZVzVQZFhSQmRFVnVaQ0E5SUdsdVVHOXphWFJwYjI1QmRFOTFkRVZ1WkNBK0lHOTFkRlpoYkhWbExuUnZPMXh1SUNCamIyNXpkQ0IwZDJWbGJuTkpiblJsY25ObFkzUWdQU0JwYmtKcFoyZGxjbFJvWVc1UGRYUkJkRk4wWVhKMElDRTlQU0JwYmtKcFoyZGxjbFJvWVc1UGRYUkJkRVZ1WkR0Y2JseHVJQ0JqYjI1emRDQmliR1Z1WkVOMWNuWmxJRDBnVzFzd0xDQnZkWFJXWVd4MVpTNWpkWEp5Wlc1MFhTd2dXM1JwYldWVmJuUnBiRTkxZEVWdVpDd2dhVzVRYjNOcGRHbHZia0YwVDNWMFJXNWtYVjA3WEc1Y2JpQWdMeThnU1dZZ2RIZGxaVzV6SUdsdWRHVnljMlZqZEN3Z2NtVnpiMngyWlNCMGQyVmxibk1nWVhRZ1lTQnlaWE52YkhWMGFXOXVJSFJ2SUdacGJtUWdaWGhoWTNSc2VTQjNhR1Z5WlZ4dUlDQnBaaUFvZEhkbFpXNXpTVzUwWlhKelpXTjBLU0I3WEc0Z0lDQWdZMjl1YzNRZ2RHbHRaVk4wWlhCVWIxUmxjM1FnUFNCMGFXMWxWVzUwYVd4UGRYUkZibVFnTHlCQ1RFVk9SRjlCUTBOVlVrRkRXVHRjYmlBZ0lDQnNaWFFnWm05MWJtUlFNU0E5SUdaaGJITmxPMXh1SUNBZ0lHeGxkQ0JtYjNWdVpGQXlJRDBnWm1Gc2MyVTdYRzVjYmlBZ0lDQm1iM0lnS0d4bGRDQnBJRDBnTURzZ2FTQThQU0JDVEVWT1JGOUJRME5WVWtGRFdUc2dhU3NyS1NCN1hHNGdJQ0FnSUNCamIyNXpkQ0IwYVcxbFUzUmxjQ0E5SUdrZ0tpQjBhVzFsVTNSbGNGUnZWR1Z6ZER0Y2JpQWdJQ0FnSUdOdmJuTjBJRzkxZEVGMFZHbHRaU0E5SUdWaGMyVW9aMlYwVUhKdlozSmxjM05HY205dFZtRnNkV1VvYjNWMFFXTjBhVzl1TG1Wc1lYQnpaV1FnS3lCMGFXMWxVM1JsY0N3Z2IzVjBWbUZzZFdVdVpHVnNZWGtzSUc5MWRGWmhiSFZsTG1SMWNtRjBhVzl1S1N3Z2IzVjBWbUZzZFdVdVpuSnZiU3dnYjNWMFZtRnNkV1V1ZEc4c0lHOTFkRlpoYkhWbExtVmhjMlVwTzF4dUlDQWdJQ0FnWTI5dWMzUWdhVzVCZEZScGJXVWdQU0JsWVhObEtHZGxkRkJ5YjJkeVpYTnpSbkp2YlZaaGJIVmxLR2x1UVdOMGFXOXVMbVZzWVhCelpXUWdLeUIwYVcxbFUzUmxjQ3dnYVc1V1lXeDFaUzVrWld4aGVTd2dhVzVXWVd4MVpTNWtkWEpoZEdsdmJpa3NJR2x1Vm1Gc2RXVXVabkp2YlN3Z2FXNVdZV3gxWlM1MGJ5d2dhVzVXWVd4MVpTNWxZWE5sS1R0Y2JseHVJQ0FnSUNBZ2FXWWdLQ0ZtYjNWdVpGQXhJQ1ltSUNnb2FXNUNhV2RuWlhKVWFHRnVUM1YwUVhSVGRHRnlkQ0FtSmlCcGJrRjBWR2x0WlNBOElHOTFkRUYwVkdsdFpTa2dmSHdnS0NGcGJrSnBaMmRsY2xSb1lXNVBkWFJCZEZOMFlYSjBJQ1ltSUdsdVFYUlVhVzFsSUQ0Z2IzVjBRWFJVYVcxbEtTa3BJSHRjYmlBZ0lDQWdJQ0FnWW14bGJtUkRkWEoyWlM1emNHeHBZMlVvTVN3Z01Dd2dXM1JwYldWVGRHVndMQ0JwYmtGMFZHbHRaVjBwTzF4dUlDQWdJQ0FnSUNCbWIzVnVaRkF4SUQwZ2RISjFaVHRjYmlBZ0lDQWdJSDFjYmx4dUlDQWdJQ0FnYVdZZ0tHWnZkVzVrVURFZ0ppWWdLQ2hwYmtKcFoyZGxjbFJvWVc1UGRYUkJkRk4wWVhKMElDWW1JR2x1UVhSVWFXMWxJRHdnYjNWMFZtRnNkV1V1WTNWeWNtVnVkQ2tnZkh3Z0tDRnBia0pwWjJkbGNsUm9ZVzVQZFhSQmRGTjBZWEowSUNZbUlHbHVRWFJVYVcxbElENGdiM1YwVm1Gc2RXVXVZM1Z5Y21WdWRDa3BLU0I3WEc0Z0lDQWdJQ0FnSUdKc1pXNWtRM1Z5ZG1WYk1sMGdQU0JiZEdsdFpWTjBaWEFzSUdsdVFYUlVhVzFsWFR0Y2JpQWdJQ0FnSUNBZ1ptOTFibVJRTWlBOUlIUnlkV1U3WEc0Z0lDQWdJQ0I5WEc1Y2JpQWdJQ0FnSUdsbUlDaG1iM1Z1WkZBeUtTQjdYRzRnSUNBZ0lDQWdJR0p5WldGck8xeHVJQ0FnSUNBZ2ZWeHVJQ0FnSUgxY2JpQWdmVnh1WEc0Z0lHbG1JQ2hpYkdWdVpFTjFjblpsTG14bGJtZDBhQ0E5UFQwZ01pa2dlMXh1SUNBZ0lDOHZJRkJoYzNNZ1ltVjBkMlZsYmlCMGQyVmxibk1nZFhOcGJtY2dhVzVqYjIxcGJtY2daV0Z6YVc1bklHbG1JR3AxYzNRZ2RIZHZJSEJ2YVc1MGMxeHVJQ0FnSUhKbGRIVnliaUFvS1NBOVBpQjdYRzRnSUNBZ0lDQmpiMjV6ZENCaWJHVnVaRkJ5YjJkeVpYTnpJRDBnY21WemRISnBZM1FvWjJWMFVISnZaM0psYzNOR2NtOXRWbUZzZFdVb2FXNUJZM1JwYjI0dVpXeGhjSE5sWkN3Z1lteGxibVJEZFhKMlpWc3dYVnN3WFN3Z1lteGxibVJEZFhKMlpWc3hYVnN3WFNrc0lEQXNJREVwTzF4dVhHNGdJQ0FnSUNCcFppQW9ZbXhsYm1SUWNtOW5jbVZ6Y3lBOVBUMGdNU2tnZTF4dUlDQWdJQ0FnSUNCbWJHOTNWbUZzZFdVdVlteGxibVJEZFhKMlpTQTlJSFZ1WkdWbWFXNWxaRHRjYmlBZ0lDQWdJSDFjYmx4dUlDQWdJQ0FnY21WMGRYSnVJR1ZoYzJVb1lteGxibVJRY205bmNtVnpjeXdnYjNWMFZtRnNkV1V1WTNWeWNtVnVkQ3dnYVc1V1lXeDFaUzVqZFhKeVpXNTBMQ0JwYmxaaGJIVmxMbVZoYzJVcE8xeHVJQ0FnSUgwN1hHNGdJSDBnWld4elpTQjdYRzRnSUNBZ0x5OGdVR0Z6Y3lCaVpYUjNaV1Z1SUhSM1pXVnVjeUIxYzJsdVp5QmlaWHBwWlhJZ2FXNTBaWEp3YjJ4aGRHbHZibHh1SUNBZ0lISmxkSFZ5YmlBb0tTQTlQaUI3WEc0Z0lDQWdJQ0JqYjI1emRDQmliR1Z1WkZCeWIyZHlaWE56SUQwZ2NtVnpkSEpwWTNRb1oyVjBVSEp2WjNKbGMzTkdjbTl0Vm1Gc2RXVW9hVzVCWTNScGIyNHVaV3hoY0hObFpDd2dZbXhsYm1SRGRYSjJaVnN3WFZzd1hTd2dZbXhsYm1SRGRYSjJaVnN5WFZzd1hTa3NJREFzSURFcE8xeHVJQ0FnSUNBZ1kyOXVjM1FnWVZBZ1BTQm5aWFJXWVd4MVpVWnliMjFRY205bmNtVnpjeWhpYkdWdVpGQnliMmR5WlhOekxDQmliR1Z1WkVOMWNuWmxXekJkV3pGZExDQmliR1Z1WkVOMWNuWmxXekZkV3pGZEtUdGNiaUFnSUNBZ0lHTnZibk4wSUdKUUlEMGdaMlYwVm1Gc2RXVkdjbTl0VUhKdlozSmxjM01vWW14bGJtUlFjbTluY21WemN5d2dZbXhsYm1SRGRYSjJaVnN4WFZzeFhTd2dZbXhsYm1SRGRYSjJaVnN5WFZzeFhTazdYRzVjYmlBZ0lDQWdJR2xtSUNoaWJHVnVaRkJ5YjJkeVpYTnpJRDA5UFNBeEtTQjdYRzRnSUNBZ0lDQWdJR1pzYjNkV1lXeDFaUzVpYkdWdVpFTjFjblpsSUQwZ2RXNWtaV1pwYm1Wa08xeHVJQ0FnSUNBZ0lDQnlaWFIxY200Z2FXNVdZV3gxWlM1amRYSnlaVzUwTzF4dUlDQWdJQ0FnZlZ4dVhHNGdJQ0FnSUNCeVpYUjFjbTRnWjJWMFZtRnNkV1ZHY205dFVISnZaM0psYzNNb1lteGxibVJRY205bmNtVnpjeXdnWVZBc0lHSlFLVHRjYmlBZ0lDQjlPMXh1SUNCOVhHNTlPMXh1SWwxOVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvYWN0aW9ucy9mbG93L2dlbmVyYXRlLWJsZW5kLWN1cnZlLmpzXG4gKiogbW9kdWxlIGlkID0gMzdcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF9JbnB1dDIgPSByZXF1aXJlKCcuL0lucHV0Jyk7XG5cbnZhciBfSW5wdXQzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfSW5wdXQyKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoIXNlbGYpIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBjYWxsICYmICh0eXBlb2YgY2FsbCA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSA/IGNhbGwgOiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90IFwiICsgdHlwZW9mIHN1cGVyQ2xhc3MpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIGVudW1lcmFibGU6IGZhbHNlLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIDogc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzczsgfVxuXG52YXIgUG9pbnRlciA9IGZ1bmN0aW9uIChfSW5wdXQpIHtcbiAgX2luaGVyaXRzKFBvaW50ZXIsIF9JbnB1dCk7XG5cbiAgZnVuY3Rpb24gUG9pbnRlcihpbml0aWFsU3RhdGUsIG1vdmVFdmVudCwgZXZlbnRUb1BvaW50KSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFBvaW50ZXIpO1xuXG4gICAgdmFyIF90aGlzID0gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgX0lucHV0LmNhbGwodGhpcywgaW5pdGlhbFN0YXRlKSk7XG5cbiAgICBfdGhpcy5ldmVudFRvUG9pbnQgPSBldmVudFRvUG9pbnQ7XG4gICAgX3RoaXMubW92ZUV2ZW50ID0gbW92ZUV2ZW50O1xuICAgIF90aGlzLmJvdW5kTGF0ZXN0ID0gX3RoaXMubGF0ZXN0LmJpbmQoX3RoaXMpO1xuICAgIHJldHVybiBfdGhpcztcbiAgfVxuXG4gIFBvaW50ZXIucHJvdG90eXBlLmxhdGVzdCA9IGZ1bmN0aW9uIGxhdGVzdChlKSB7XG4gICAgX0lucHV0LnByb3RvdHlwZS5sYXRlc3QuY2FsbCh0aGlzLCB0aGlzLmV2ZW50VG9Qb2ludChlKSk7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICB9O1xuXG4gIFBvaW50ZXIucHJvdG90eXBlLnN0YXJ0ID0gZnVuY3Rpb24gc3RhcnQoKSB7XG4gICAgX0lucHV0LnByb3RvdHlwZS5zdGFydC5jYWxsKHRoaXMpO1xuICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5hZGRFdmVudExpc3RlbmVyKHRoaXMubW92ZUV2ZW50LCB0aGlzLmJvdW5kTGF0ZXN0KTtcbiAgfTtcblxuICBQb2ludGVyLnByb3RvdHlwZS5zdG9wID0gZnVuY3Rpb24gc3RvcCgpIHtcbiAgICBfSW5wdXQucHJvdG90eXBlLnN0b3AuY2FsbCh0aGlzKTtcbiAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcih0aGlzLm1vdmVFdmVudCwgdGhpcy5ib3VuZExhdGVzdCk7XG4gIH07XG5cbiAgcmV0dXJuIFBvaW50ZXI7XG59KF9JbnB1dDMuZGVmYXVsdCk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IFBvaW50ZXI7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5OeVl5OXBibkIxZEM5UWIybHVkR1Z5TG1weklsMHNJbTVoYldWeklqcGJYU3dpYldGd2NHbHVaM01pT2lJN096czdRVUZCUVRzN096czdPenM3T3pzN08wbEJSWEZDTEU4N096dEJRVU51UWl4dFFrRkJXU3haUVVGYUxFVkJRVEJDTEZOQlFURkNMRVZCUVhGRExGbEJRWEpETEVWQlFXMUVPMEZCUVVFN08wRkJRVUVzYVVSQlEycEVMR3RDUVVGTkxGbEJRVTRzUTBGRWFVUTdPMEZCUldwRUxGVkJRVXNzV1VGQlRDeEhRVUZ2UWl4WlFVRndRanRCUVVOQkxGVkJRVXNzVTBGQlRDeEhRVUZwUWl4VFFVRnFRanRCUVVOQkxGVkJRVXNzVjBGQlRDeEhRVUZ0UWl4TlFVRkxMRTFCUVV3c1EwRkJXU3hKUVVGYUxFOUJRVzVDTzBGQlNtbEVPMEZCUzJ4RU96dHZRa0ZGUkN4TkxHMUNRVUZQTEVNc1JVRkJSenRCUVVOU0xIRkNRVUZOTEUxQlFVNHNXVUZCWVN4TFFVRkxMRmxCUVV3c1EwRkJhMElzUTBGQmJFSXNRMEZCWWp0QlFVTkJMRTFCUVVVc1kwRkJSanRCUVVORUxFYzdPMjlDUVVWRUxFc3NiMEpCUVZFN1FVRkRUaXh4UWtGQlRTeExRVUZPTzBGQlEwRXNZVUZCVXl4bFFVRlVMRU5CUVhsQ0xHZENRVUY2UWl4RFFVRXdReXhMUVVGTExGTkJRUzlETEVWQlFUQkVMRXRCUVVzc1YwRkJMMFE3UVVGRFJDeEhPenR2UWtGRlJDeEpMRzFDUVVGUE8wRkJRMHdzY1VKQlFVMHNTVUZCVGp0QlFVTkJMR0ZCUVZNc1pVRkJWQ3hEUVVGNVFpeHRRa0ZCZWtJc1EwRkJOa01zUzBGQlN5eFRRVUZzUkN4RlFVRTJSQ3hMUVVGTExGZEJRV3hGTzBGQlEwUXNSenM3T3pzN2EwSkJja0pyUWl4UElpd2labWxzWlNJNklsQnZhVzUwWlhJdWFuTWlMQ0p6YjNWeVkyVlNiMjkwSWpvaUwxVnpaWEp6TDIxaGRIUndaWEp5ZVM5VGFYUmxjeTl3YjNCdGIzUnBiMjRpTENKemIzVnlZMlZ6UTI5dWRHVnVkQ0k2V3lKcGJYQnZjblFnU1c1d2RYUWdabkp2YlNBbkxpOUpibkIxZENjN1hHNWNibVY0Y0c5eWRDQmtaV1poZFd4MElHTnNZWE56SUZCdmFXNTBaWElnWlhoMFpXNWtjeUJKYm5CMWRDQjdYRzRnSUdOdmJuTjBjblZqZEc5eUtHbHVhWFJwWVd4VGRHRjBaU3dnYlc5MlpVVjJaVzUwTENCbGRtVnVkRlJ2VUc5cGJuUXBJSHRjYmlBZ0lDQnpkWEJsY2locGJtbDBhV0ZzVTNSaGRHVXBPMXh1SUNBZ0lIUm9hWE11WlhabGJuUlViMUJ2YVc1MElEMGdaWFpsYm5SVWIxQnZhVzUwTzF4dUlDQWdJSFJvYVhNdWJXOTJaVVYyWlc1MElEMGdiVzkyWlVWMlpXNTBPMXh1SUNBZ0lIUm9hWE11WW05MWJtUk1ZWFJsYzNRZ1BTQjBhR2x6TG14aGRHVnpkQzVpYVc1a0tIUm9hWE1wTzF4dUlDQjlYRzVjYmlBZ2JHRjBaWE4wS0dVcElIdGNiaUFnSUNCemRYQmxjaTVzWVhSbGMzUW9kR2hwY3k1bGRtVnVkRlJ2VUc5cGJuUW9aU2twTzF4dUlDQWdJR1V1Y0hKbGRtVnVkRVJsWm1GMWJIUW9LVHRjYmlBZ2ZWeHVYRzRnSUhOMFlYSjBLQ2tnZTF4dUlDQWdJSE4xY0dWeUxuTjBZWEowS0NrN1hHNGdJQ0FnWkc5amRXMWxiblF1Wkc5amRXMWxiblJGYkdWdFpXNTBMbUZrWkVWMlpXNTBUR2x6ZEdWdVpYSW9kR2hwY3k1dGIzWmxSWFpsYm5Rc0lIUm9hWE11WW05MWJtUk1ZWFJsYzNRcE8xeHVJQ0I5WEc1Y2JpQWdjM1J2Y0NncElIdGNiaUFnSUNCemRYQmxjaTV6ZEc5d0tDazdYRzRnSUNBZ1pHOWpkVzFsYm5RdVpHOWpkVzFsYm5SRmJHVnRaVzUwTG5KbGJXOTJaVVYyWlc1MFRHbHpkR1Z1WlhJb2RHaHBjeTV0YjNabFJYWmxiblFzSUhSb2FYTXVZbTkxYm1STVlYUmxjM1FwTzF4dUlDQjlYRzU5WEc0aVhYMD1cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2lucHV0L1BvaW50ZXIuanNcbiAqKiBtb2R1bGUgaWQgPSAzOFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0cy5kZWFjdGl2YXRlID0gZXhwb3J0cy5nZXRUYXNrSWQgPSB1bmRlZmluZWQ7XG5leHBvcnRzLmFjdGl2YXRlID0gYWN0aXZhdGU7XG5cbnZhciBfdGltZXIgPSByZXF1aXJlKCcuL3RpbWVyJyk7XG5cbnZhciBfdGltZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfdGltZXIpO1xuXG52YXIgX3RpY2sgPSByZXF1aXJlKCcuL3RpY2snKTtcblxudmFyIF90aWNrMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3RpY2spO1xuXG52YXIgX21hbmFnZXIgPSByZXF1aXJlKCcuL21hbmFnZXInKTtcblxudmFyIF9tYW5hZ2VyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX21hbmFnZXIpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG52YXIgdGFza1N0ZXBPcmRlciA9IFt7IG5hbWU6ICdvbkZyYW1lU3RhcnQnIH0sIHsgbmFtZTogJ29uVXBkYXRlJyB9LCB7IG5hbWU6ICd3aWxsUmVuZGVyJywgZGVjaWRlUmVuZGVyOiB0cnVlIH0sIHsgbmFtZTogJ29uUHJlUmVuZGVyJywgaXNSZW5kZXI6IHRydWUgfSwgeyBuYW1lOiAnb25SZW5kZXInLCBpc1JlbmRlcjogdHJ1ZSB9LCB7IG5hbWU6ICdvblBvc3RSZW5kZXInLCBpc1JlbmRlcjogdHJ1ZSB9LCB7IG5hbWU6ICdvbkZyYW1lRW5kJyB9LCB7IG5hbWU6ICdvbkNsZWFudXAnIH1dOyAvKlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBDb3JlIHJlbmRlciBsb29wXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgU29tZSBkZWNpY2lzb25zIGhlcmUgaGF2ZSBiZWVuIHRha2VuIGluIHRoZSBuYW1lIG9mIHBlcmZvcm1hbmNlLiBBbGwgaGFpbCBwZXJmb3JtYW5jZS5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKEl0IHR1cm5zIG91dCBtaWNyb29wdGltaXNhdGlvbnMgZG8gbWF0dGVyIHdoZW4geW91IGhhdmUgMTZtcylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICovXG5cbnZhciBudW1UYXNrU3RlcHMgPSB0YXNrU3RlcE9yZGVyLmxlbmd0aDtcblxuLy8gW2Jvb2xlYW5dOiBJcyBsb29wIHJ1bm5pbmc/XG52YXIgaXNSdW5uaW5nID0gZmFsc2U7XG5cbi8qXG4gIFt0aW1lc3RhbXBdOiBGcmFtZSB0aW1lc3RhbXBcbiAgW2ludF06IFRpbWUgc2luY2UgbGFzdCBmcmFtZVxuKi9cbmZ1bmN0aW9uIGZpcmVBbGwoZnJhbWVTdGFtcCwgZWxhcHNlZCkge1xuICB2YXIgYWN0aXZlSWRzID0gX21hbmFnZXIyLmRlZmF1bHQuZ2V0QWN0aXZlSWRzKCk7XG4gIHZhciBhY3RpdmVUYXNrQ291bnQgPSBhY3RpdmVJZHMubGVuZ3RoO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbnVtVGFza1N0ZXBzOyBpKyspIHtcbiAgICB2YXIgc3RlcCA9IHRhc2tTdGVwT3JkZXJbaV07XG5cbiAgICBmb3IgKHZhciBpMiA9IDA7IGkyIDwgYWN0aXZlVGFza0NvdW50OyBpMisrKSB7XG4gICAgICB2YXIgdGFzayA9IF9tYW5hZ2VyMi5kZWZhdWx0LmFjdGl2ZVRhc2tzW2FjdGl2ZUlkc1tpMl1dO1xuICAgICAgdmFyIHJlc3VsdCA9IGZhbHNlO1xuXG4gICAgICAvLyBDaGVjayBpZiB0aGlzIHRhc2sgaGFzIHRoaXMgc3RlcCwgb3IgaWYgaXQncyBhIHJlbmRlciBzdGVwIHRoYXQgd2UncmUgcmVuZGVyaW5nIHRoaXMgZnJhbWVcbiAgICAgIGlmICh0YXNrICYmIHRhc2tbc3RlcC5uYW1lXSAmJiAoIXN0ZXAuaXNSZW5kZXIgfHwgc3RlcC5pc1JlbmRlciAmJiB0YXNrLl9yZW5kZXJUaGlzRnJhbWUgPT09IHRydWUpKSB7XG4gICAgICAgIHJlc3VsdCA9IHRhc2tbc3RlcC5uYW1lXS5jYWxsKHRhc2ssIHRhc2ssIGZyYW1lU3RhbXAsIGVsYXBzZWQpO1xuICAgICAgfVxuXG4gICAgICAvLyBJZiB0aGlzIGlzIGEgZGVjaWRlIHJlbmRlciBzdGVwIGFuZCBpdCByZXR1cm5zIGBmYWxzZWAsIHNldCB3aWxsUmVuZGVyIHRvIGZhbHNlXG4gICAgICBpZiAoc3RlcC5kZWNpZGVSZW5kZXIpIHtcbiAgICAgICAgdGFzay5fcmVuZGVyVGhpc0ZyYW1lID0gdGFza1tzdGVwLm5hbWVdICYmIHJlc3VsdCAhPT0gdHJ1ZSA/IGZhbHNlIDogdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gX21hbmFnZXIyLmRlZmF1bHQuZ2V0Tm9uQmFja2dyb3VuZFJ1bm5pbmdDb3VudCgpO1xufVxuXG4vLyBGdW5jdGlvbiB0byBmaXJlIGV2ZXJ5IGZyYW1lXG5mdW5jdGlvbiBmcmFtZShmcmFtZVN0YW1wKSB7XG4gIF90aW1lcjIuZGVmYXVsdC51cGRhdGUoZnJhbWVTdGFtcCk7XG4gIGlzUnVubmluZyA9IGZpcmVBbGwoZnJhbWVTdGFtcCwgX3RpbWVyMi5kZWZhdWx0LmdldEVsYXBzZWQoKSk7XG5cbiAgaWYgKGlzUnVubmluZykge1xuICAgICgwLCBfdGljazIuZGVmYXVsdCkoZnJhbWUpO1xuICB9XG59XG5cbi8vIFN0YXJ0IGxvb3BcbmZ1bmN0aW9uIHN0YXJ0KCkge1xuICBpZiAoIWlzUnVubmluZykge1xuICAgIF90aW1lcjIuZGVmYXVsdC5zdGFydCgpO1xuICAgIGlzUnVubmluZyA9IHRydWU7XG4gICAgKDAsIF90aWNrMi5kZWZhdWx0KShmcmFtZSk7XG4gIH1cbn1cblxuLy8gRXhwb3J0c1xudmFyIGdldFRhc2tJZCA9IGV4cG9ydHMuZ2V0VGFza0lkID0gX21hbmFnZXIyLmRlZmF1bHQuZ2V0VGFza0lkO1xuXG4vKlxuICBbaW50XTogdGFzayBJRCB0byBhY3RpdmF0ZVxuICBbdGFza106IHRhc2sgdG8gYWN0aXZhdGVcbiovXG5mdW5jdGlvbiBhY3RpdmF0ZShpZCwgdGFzaykge1xuICBfbWFuYWdlcjIuZGVmYXVsdC5hY3RpdmF0ZShpZCwgdGFzayk7XG5cbiAgaWYgKCFpc1J1bm5pbmcpIHtcbiAgICBzdGFydCgpO1xuICB9XG59XG5cbi8qXG4gIFtpbnRdOiB0YXNrIElEIHRvIGRlYWN0aXZhdGVcbiovXG52YXIgZGVhY3RpdmF0ZSA9IGV4cG9ydHMuZGVhY3RpdmF0ZSA9IF9tYW5hZ2VyMi5kZWZhdWx0LmRlYWN0aXZhdGU7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5OeVl5OTBZWE5yTDJ4dmIzQXVhbk1pWFN3aWJtRnRaWE1pT2x0ZExDSnRZWEJ3YVc1bmN5STZJanM3T3p0UlFXbEdaMElzVVN4SFFVRkJMRkU3TzBGQk0wVm9RanM3T3p0QlFVTkJPenM3TzBGQlEwRTdPenM3T3p0QlFVVkJMRWxCUVUwc1owSkJRV2RDTEVOQlEzQkNMRVZCUVVVc1RVRkJUU3hqUVVGU0xFVkJSRzlDTEVWQlJYQkNMRVZCUVVVc1RVRkJUU3hWUVVGU0xFVkJSbTlDTEVWQlIzQkNMRVZCUVVVc1RVRkJUU3haUVVGU0xFVkJRWE5DTEdOQlFXTXNTVUZCY0VNc1JVRkliMElzUlVGSmNFSXNSVUZCUlN4TlFVRk5MR0ZCUVZJc1JVRkJkVUlzVlVGQlZTeEpRVUZxUXl4RlFVcHZRaXhGUVV0d1FpeEZRVUZGTEUxQlFVMHNWVUZCVWl4RlFVRnZRaXhWUVVGVkxFbEJRVGxDTEVWQlRHOUNMRVZCVFhCQ0xFVkJRVVVzVFVGQlRTeGpRVUZTTEVWQlFYZENMRlZCUVZVc1NVRkJiRU1zUlVGT2IwSXNSVUZQY0VJc1JVRkJSU3hOUVVGTkxGbEJRVklzUlVGUWIwSXNSVUZSY0VJc1JVRkJSU3hOUVVGTkxGZEJRVklzUlVGU2IwSXNRMEZCZEVJc1F6czdPenM3T3p0QlFWVkJMRWxCUVUwc1pVRkJaU3hqUVVGakxFMUJRVzVET3pzN1FVRkhRU3hKUVVGSkxGbEJRVmtzUzBGQmFFSTdPenM3T3p0QlFVMUJMRk5CUVZNc1QwRkJWQ3hEUVVGcFFpeFZRVUZxUWl4RlFVRTJRaXhQUVVFM1FpeEZRVUZ6UXp0QlFVTndReXhOUVVGTkxGbEJRVmtzYTBKQlFWRXNXVUZCVWl4RlFVRnNRanRCUVVOQkxFMUJRVTBzYTBKQlFXdENMRlZCUVZVc1RVRkJiRU03TzBGQlJVRXNUMEZCU3l4SlFVRkpMRWxCUVVrc1EwRkJZaXhGUVVGblFpeEpRVUZKTEZsQlFYQkNMRVZCUVd0RExFZEJRV3hETEVWQlFYVkRPMEZCUTNKRExGRkJRVTBzVDBGQlR5eGpRVUZqTEVOQlFXUXNRMEZCWWpzN1FVRkZRU3hUUVVGTExFbEJRVWtzUzBGQlN5eERRVUZrTEVWQlFXbENMRXRCUVVzc1pVRkJkRUlzUlVGQmRVTXNTVUZCZGtNc1JVRkJOa003UVVGRE0wTXNWVUZCVFN4UFFVRlBMR3RDUVVGUkxGZEJRVklzUTBGQmIwSXNWVUZCVlN4RlFVRldMRU5CUVhCQ0xFTkJRV0k3UVVGRFFTeFZRVUZKTEZOQlFWTXNTMEZCWWpzN08wRkJSMEVzVlVGQlNTeFJRVUZSTEV0QlFVc3NTMEZCU3l4SlFVRldMRU5CUVZJc1MwRkJORUlzUTBGQlF5eExRVUZMTEZGQlFVNHNTVUZCYlVJc1MwRkJTeXhSUVVGTUxFbEJRV2xDTEV0QlFVc3NaMEpCUVV3c1MwRkJNRUlzU1VGQk1VWXNRMEZCU2l4RlFVRnpSenRCUVVOd1J5eHBRa0ZCVXl4TFFVRkxMRXRCUVVzc1NVRkJWaXhGUVVGblFpeEpRVUZvUWl4RFFVRnhRaXhKUVVGeVFpeEZRVUV5UWl4SlFVRXpRaXhGUVVGcFF5eFZRVUZxUXl4RlFVRTJReXhQUVVFM1F5eERRVUZVTzBGQlEwUTdPenRCUVVkRUxGVkJRVWtzUzBGQlN5eFpRVUZVTEVWQlFYVkNPMEZCUTNKQ0xHRkJRVXNzWjBKQlFVd3NSMEZCZVVJc1MwRkJTeXhMUVVGTExFbEJRVllzUzBGQmJVSXNWMEZCVnl4SlFVRXZRaXhIUVVGMVF5eExRVUYyUXl4SFFVRXJReXhKUVVGMlJUdEJRVU5FTzBGQlEwWTdRVUZEUmpzN1FVRkZSQ3hUUVVGUExHdENRVUZSTERSQ1FVRlNMRVZCUVZBN1FVRkRSRHM3TzBGQlIwUXNVMEZCVXl4TFFVRlVMRU5CUVdVc1ZVRkJaaXhGUVVFeVFqdEJRVU42UWl4clFrRkJUU3hOUVVGT0xFTkJRV0VzVlVGQllqdEJRVU5CTEdOQlFWa3NVVUZCVVN4VlFVRlNMRVZCUVc5Q0xHZENRVUZOTEZWQlFVNHNSVUZCY0VJc1EwRkJXanM3UVVGRlFTeE5RVUZKTEZOQlFVb3NSVUZCWlR0QlFVTmlMSGRDUVVGTExFdEJRVXc3UVVGRFJEdEJRVU5HT3pzN1FVRkhSQ3hUUVVGVExFdEJRVlFzUjBGQmFVSTdRVUZEWml4TlFVRkpMRU5CUVVNc1UwRkJUQ3hGUVVGblFqdEJRVU5rTEc5Q1FVRk5MRXRCUVU0N1FVRkRRU3huUWtGQldTeEpRVUZhTzBGQlEwRXNkMEpCUVVzc1MwRkJURHRCUVVORU8wRkJRMFk3T3p0QlFVZE5MRWxCUVUwc1owTkJRVmtzYTBKQlFWRXNVMEZCTVVJN096czdPenRCUVUxQkxGTkJRVk1zVVVGQlZDeERRVUZyUWl4RlFVRnNRaXhGUVVGelFpeEpRVUYwUWl4RlFVRTBRanRCUVVOcVF5eHZRa0ZCVVN4UlFVRlNMRU5CUVdsQ0xFVkJRV3BDTEVWQlFYRkNMRWxCUVhKQ096dEJRVVZCTEUxQlFVa3NRMEZCUXl4VFFVRk1MRVZCUVdkQ08wRkJRMlE3UVVGRFJEdEJRVU5HT3pzN096dEJRVXROTEVsQlFVMHNhME5CUVdFc2EwSkJRVkVzVlVGQk0wSWlMQ0ptYVd4bElqb2liRzl2Y0M1cWN5SXNJbk52ZFhKalpWSnZiM1FpT2lJdlZYTmxjbk12YldGMGRIQmxjbko1TDFOcGRHVnpMM0J2Y0cxdmRHbHZiaUlzSW5OdmRYSmpaWE5EYjI1MFpXNTBJanBiSWk4cVhHNGdJRU52Y21VZ2NtVnVaR1Z5SUd4dmIzQmNibHh1SUNCVGIyMWxJR1JsWTJsamFYTnZibk1nYUdWeVpTQm9ZWFpsSUdKbFpXNGdkR0ZyWlc0Z2FXNGdkR2hsSUc1aGJXVWdiMllnY0dWeVptOXliV0Z1WTJVdUlFRnNiQ0JvWVdsc0lIQmxjbVp2Y20xaGJtTmxMbHh1SUNBb1NYUWdkSFZ5Ym5NZ2IzVjBJRzFwWTNKdmIzQjBhVzFwYzJGMGFXOXVjeUJrYnlCdFlYUjBaWElnZDJobGJpQjViM1VnYUdGMlpTQXhObTF6S1Z4dUtpOWNibWx0Y0c5eWRDQjBhVzFsY2lCbWNtOXRJQ2N1TDNScGJXVnlKenRjYm1sdGNHOXlkQ0IwYVdOcklHWnliMjBnSnk0dmRHbGpheWM3WEc1cGJYQnZjblFnYldGdVlXZGxjaUJtY205dElDY3VMMjFoYm1GblpYSW5PMXh1WEc1amIyNXpkQ0IwWVhOclUzUmxjRTl5WkdWeUlEMGdXMXh1SUNCN0lHNWhiV1U2SUNkdmJrWnlZVzFsVTNSaGNuUW5JSDBzWEc0Z0lIc2dibUZ0WlRvZ0oyOXVWWEJrWVhSbEp5QjlMRnh1SUNCN0lHNWhiV1U2SUNkM2FXeHNVbVZ1WkdWeUp5d2daR1ZqYVdSbFVtVnVaR1Z5T2lCMGNuVmxJSDBzWEc0Z0lIc2dibUZ0WlRvZ0oyOXVVSEpsVW1WdVpHVnlKeXdnYVhOU1pXNWtaWEk2SUhSeWRXVWdmU3hjYmlBZ2V5QnVZVzFsT2lBbmIyNVNaVzVrWlhJbkxDQnBjMUpsYm1SbGNqb2dkSEoxWlNCOUxGeHVJQ0I3SUc1aGJXVTZJQ2R2YmxCdmMzUlNaVzVrWlhJbkxDQnBjMUpsYm1SbGNqb2dkSEoxWlNCOUxGeHVJQ0I3SUc1aGJXVTZJQ2R2YmtaeVlXMWxSVzVrSnlCOUxGeHVJQ0I3SUc1aGJXVTZJQ2R2YmtOc1pXRnVkWEFuSUgxY2JsMDdYRzVqYjI1emRDQnVkVzFVWVhOclUzUmxjSE1nUFNCMFlYTnJVM1JsY0U5eVpHVnlMbXhsYm1kMGFEdGNibHh1THk4Z1cySnZiMnhsWVc1ZE9pQkpjeUJzYjI5d0lISjFibTVwYm1jL1hHNXNaWFFnYVhOU2RXNXVhVzVuSUQwZ1ptRnNjMlU3WEc1Y2JpOHFYRzRnSUZ0MGFXMWxjM1JoYlhCZE9pQkdjbUZ0WlNCMGFXMWxjM1JoYlhCY2JpQWdXMmx1ZEYwNklGUnBiV1VnYzJsdVkyVWdiR0Z6ZENCbWNtRnRaVnh1S2k5Y2JtWjFibU4wYVc5dUlHWnBjbVZCYkd3b1puSmhiV1ZUZEdGdGNDd2daV3hoY0hObFpDa2dlMXh1SUNCamIyNXpkQ0JoWTNScGRtVkpaSE1nUFNCdFlXNWhaMlZ5TG1kbGRFRmpkR2wyWlVsa2N5Z3BPMXh1SUNCamIyNXpkQ0JoWTNScGRtVlVZWE5yUTI5MWJuUWdQU0JoWTNScGRtVkpaSE11YkdWdVozUm9PMXh1WEc0Z0lHWnZjaUFvYkdWMElHa2dQU0F3T3lCcElEd2diblZ0VkdGemExTjBaWEJ6T3lCcEt5c3BJSHRjYmlBZ0lDQmpiMjV6ZENCemRHVndJRDBnZEdGemExTjBaWEJQY21SbGNsdHBYVHRjYmx4dUlDQWdJR1p2Y2lBb2JHVjBJR2t5SUQwZ01Ec2dhVElnUENCaFkzUnBkbVZVWVhOclEyOTFiblE3SUdreUt5c3BJSHRjYmlBZ0lDQWdJR052Ym5OMElIUmhjMnNnUFNCdFlXNWhaMlZ5TG1GamRHbDJaVlJoYzJ0elcyRmpkR2wyWlVsa2MxdHBNbDFkTzF4dUlDQWdJQ0FnYkdWMElISmxjM1ZzZENBOUlHWmhiSE5sTzF4dVhHNGdJQ0FnSUNBdkx5QkRhR1ZqYXlCcFppQjBhR2x6SUhSaGMyc2dhR0Z6SUhSb2FYTWdjM1JsY0N3Z2IzSWdhV1lnYVhRbmN5QmhJSEpsYm1SbGNpQnpkR1Z3SUhSb1lYUWdkMlVuY21VZ2NtVnVaR1Z5YVc1bklIUm9hWE1nWm5KaGJXVmNiaUFnSUNBZ0lHbG1JQ2gwWVhOcklDWW1JSFJoYzJ0YmMzUmxjQzV1WVcxbFhTQW1KaUFvSVhOMFpYQXVhWE5TWlc1a1pYSWdmSHdnS0hOMFpYQXVhWE5TWlc1a1pYSWdKaVlnZEdGemF5NWZjbVZ1WkdWeVZHaHBjMFp5WVcxbElEMDlQU0IwY25WbEtTa3BJSHRjYmlBZ0lDQWdJQ0FnY21WemRXeDBJRDBnZEdGemExdHpkR1Z3TG01aGJXVmRMbU5oYkd3b2RHRnpheXdnZEdGemF5d2dabkpoYldWVGRHRnRjQ3dnWld4aGNITmxaQ2s3WEc0Z0lDQWdJQ0I5WEc1Y2JpQWdJQ0FnSUM4dklFbG1JSFJvYVhNZ2FYTWdZU0JrWldOcFpHVWdjbVZ1WkdWeUlITjBaWEFnWVc1a0lHbDBJSEpsZEhWeWJuTWdZR1poYkhObFlDd2djMlYwSUhkcGJHeFNaVzVrWlhJZ2RHOGdabUZzYzJWY2JpQWdJQ0FnSUdsbUlDaHpkR1Z3TG1SbFkybGtaVkpsYm1SbGNpa2dlMXh1SUNBZ0lDQWdJQ0IwWVhOckxsOXlaVzVrWlhKVWFHbHpSbkpoYldVZ1BTQW9kR0Z6YTF0emRHVndMbTVoYldWZElDWW1JSEpsYzNWc2RDQWhQVDBnZEhKMVpTa2dQeUJtWVd4elpTQTZJSFJ5ZFdVN1hHNGdJQ0FnSUNCOVhHNGdJQ0FnZlZ4dUlDQjlYRzVjYmlBZ2NtVjBkWEp1SUcxaGJtRm5aWEl1WjJWMFRtOXVRbUZqYTJkeWIzVnVaRkoxYm01cGJtZERiM1Z1ZENncE8xeHVmVnh1WEc0dkx5QkdkVzVqZEdsdmJpQjBieUJtYVhKbElHVjJaWEo1SUdaeVlXMWxYRzVtZFc1amRHbHZiaUJtY21GdFpTaG1jbUZ0WlZOMFlXMXdLU0I3WEc0Z0lIUnBiV1Z5TG5Wd1pHRjBaU2htY21GdFpWTjBZVzF3S1R0Y2JpQWdhWE5TZFc1dWFXNW5JRDBnWm1seVpVRnNiQ2htY21GdFpWTjBZVzF3TENCMGFXMWxjaTVuWlhSRmJHRndjMlZrS0NrcE8xeHVYRzRnSUdsbUlDaHBjMUoxYm01cGJtY3BJSHRjYmlBZ0lDQjBhV05yS0daeVlXMWxLVHRjYmlBZ2ZWeHVmVnh1WEc0dkx5QlRkR0Z5ZENCc2IyOXdYRzVtZFc1amRHbHZiaUJ6ZEdGeWRDZ3BJSHRjYmlBZ2FXWWdLQ0ZwYzFKMWJtNXBibWNwSUh0Y2JpQWdJQ0IwYVcxbGNpNXpkR0Z5ZENncE8xeHVJQ0FnSUdselVuVnVibWx1WnlBOUlIUnlkV1U3WEc0Z0lDQWdkR2xqYXlobWNtRnRaU2s3WEc0Z0lIMWNibjFjYmx4dUx5OGdSWGh3YjNKMGMxeHVaWGh3YjNKMElHTnZibk4wSUdkbGRGUmhjMnRKWkNBOUlHMWhibUZuWlhJdVoyVjBWR0Z6YTBsa08xeHVYRzR2S2x4dUlDQmJhVzUwWFRvZ2RHRnpheUJKUkNCMGJ5QmhZM1JwZG1GMFpWeHVJQ0JiZEdGemExMDZJSFJoYzJzZ2RHOGdZV04wYVhaaGRHVmNiaW92WEc1bGVIQnZjblFnWm5WdVkzUnBiMjRnWVdOMGFYWmhkR1VvYVdRc0lIUmhjMnNwSUh0Y2JpQWdiV0Z1WVdkbGNpNWhZM1JwZG1GMFpTaHBaQ3dnZEdGemF5azdYRzVjYmlBZ2FXWWdLQ0ZwYzFKMWJtNXBibWNwSUh0Y2JpQWdJQ0J6ZEdGeWRDZ3BPMXh1SUNCOVhHNTlYRzVjYmk4cVhHNGdJRnRwYm5SZE9pQjBZWE5ySUVsRUlIUnZJR1JsWVdOMGFYWmhkR1ZjYmlvdlhHNWxlSEJ2Y25RZ1kyOXVjM1FnWkdWaFkzUnBkbUYwWlNBOUlHMWhibUZuWlhJdVpHVmhZM1JwZG1GMFpUc2lYWDA9XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy90YXNrL2xvb3AuanNcbiAqKiBtb2R1bGUgaWQgPSAzOVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xudmFyIFRSQU5TTEFURSA9ICd0cmFuc2xhdGUnO1xuXG5leHBvcnRzLmRlZmF1bHQgPSB7XG4gIHg6IFRSQU5TTEFURSArICdYJyxcbiAgeTogVFJBTlNMQVRFICsgJ1knLFxuICB6OiBUUkFOU0xBVEUgKyAnWidcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5OeVl5OWhaR0Z3ZEdWeUwyTnpjeTl6ZEdGMFpTMXRZWEF1YW5NaVhTd2libUZ0WlhNaU9sdGRMQ0p0WVhCd2FXNW5jeUk2SWpzN08wRkJRVUVzU1VGQlRTeFpRVUZaTEZkQlFXeENPenRyUWtGRlpUdEJRVU5pTEV0QlFVY3NXVUZCV1N4SFFVUkdPMEZCUldJc1MwRkJSeXhaUVVGWkxFZEJSa1k3UVVGSFlpeExRVUZITEZsQlFWazdRVUZJUml4RElpd2labWxzWlNJNkluTjBZWFJsTFcxaGNDNXFjeUlzSW5OdmRYSmpaVkp2YjNRaU9pSXZWWE5sY25NdmJXRjBkSEJsY25KNUwxTnBkR1Z6TDNCdmNHMXZkR2x2YmlJc0luTnZkWEpqWlhORGIyNTBaVzUwSWpwYkltTnZibk4wSUZSU1FVNVRURUZVUlNBOUlDZDBjbUZ1YzJ4aGRHVW5PMXh1WEc1bGVIQnZjblFnWkdWbVlYVnNkQ0I3WEc0Z0lIZzZJRlJTUVU1VFRFRlVSU0FySUNkWUp5eGNiaUFnZVRvZ1ZGSkJUbE5NUVZSRklDc2dKMWtuTEZ4dUlDQjZPaUJVVWtGT1UweEJWRVVnS3lBbldpZGNibjA3SWwxOVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvYWRhcHRlci9jc3Mvc3RhdGUtbWFwLmpzXG4gKiogbW9kdWxlIGlkID0gNDBcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF9hbmdsZSA9IHJlcXVpcmUoJy4uLy4uL3ZhbHVlLXR5cGVzL2FuZ2xlJyk7XG5cbnZhciBfYW5nbGUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfYW5nbGUpO1xuXG52YXIgX2FscGhhID0gcmVxdWlyZSgnLi4vLi4vdmFsdWUtdHlwZXMvYWxwaGEnKTtcblxudmFyIF9hbHBoYTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9hbHBoYSk7XG5cbnZhciBfY29sb3IgPSByZXF1aXJlKCcuLi8uLi92YWx1ZS10eXBlcy9jb2xvcicpO1xuXG52YXIgX2NvbG9yMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NvbG9yKTtcblxudmFyIF9zY2FsZSA9IHJlcXVpcmUoJy4uLy4uL3ZhbHVlLXR5cGVzL3NjYWxlJyk7XG5cbnZhciBfc2NhbGUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfc2NhbGUpO1xuXG52YXIgX3NoYWRvdyA9IHJlcXVpcmUoJy4uLy4uL3ZhbHVlLXR5cGVzL3NoYWRvdycpO1xuXG52YXIgX3NoYWRvdzIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9zaGFkb3cpO1xuXG52YXIgX3B4ID0gcmVxdWlyZSgnLi4vLi4vdmFsdWUtdHlwZXMvcHgnKTtcblxudmFyIF9weDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9weCk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmV4cG9ydHMuZGVmYXVsdCA9IHtcbiAgLy8gQ29sb3IgcHJvcHNcbiAgY29sb3I6IF9jb2xvcjIuZGVmYXVsdCxcbiAgYmFja2dyb3VuZENvbG9yOiBfY29sb3IyLmRlZmF1bHQsXG4gIG91dGxpbmVDb2xvcjogX2NvbG9yMi5kZWZhdWx0LFxuICBmaWxsOiBfY29sb3IyLmRlZmF1bHQsXG4gIHN0cm9rZTogX2NvbG9yMi5kZWZhdWx0LFxuXG4gIC8vIEJvcmRlciBwcm9wc1xuICBib3JkZXJDb2xvcjogX2NvbG9yMi5kZWZhdWx0LFxuICBib3JkZXJUb3BDb2xvcjogX2NvbG9yMi5kZWZhdWx0LFxuICBib3JkZXJSaWdodENvbG9yOiBfY29sb3IyLmRlZmF1bHQsXG4gIGJvcmRlckJvdHRvbUNvbG9yOiBfY29sb3IyLmRlZmF1bHQsXG4gIGJvcmRlckxlZnRDb2xvcjogX2NvbG9yMi5kZWZhdWx0LFxuICBib3JkZXJSYWRpdXM6IF9weDIuZGVmYXVsdCxcblxuICAvLyBQb3NpdGlvbmluZ1xuICB3aWR0aDogX3B4Mi5kZWZhdWx0LFxuICBoZWlnaHQ6IF9weDIuZGVmYXVsdCxcblxuICAvLyBTaGFkb3dzXG4gIHRleHRTaGFkb3c6IF9zaGFkb3cyLmRlZmF1bHQsXG4gIGJveFNoYWRvdzogX3NoYWRvdzIuZGVmYXVsdCxcblxuICAvLyBUcmFuc2Zvcm0gcHJvcGVydGllc1xuICByb3RhdGU6IF9hbmdsZTIuZGVmYXVsdCxcbiAgcm90YXRlWDogX2FuZ2xlMi5kZWZhdWx0LFxuICByb3RhdGVZOiBfYW5nbGUyLmRlZmF1bHQsXG4gIHJvdGF0ZVo6IF9hbmdsZTIuZGVmYXVsdCxcbiAgc2NhbGU6IF9zY2FsZTIuZGVmYXVsdCxcbiAgc2NhbGVYOiBfc2NhbGUyLmRlZmF1bHQsXG4gIHNjYWxlWTogX3NjYWxlMi5kZWZhdWx0LFxuICBzY2FsZVo6IF9zY2FsZTIuZGVmYXVsdCxcbiAgc2tld1g6IF9hbmdsZTIuZGVmYXVsdCxcbiAgc2tld1k6IF9hbmdsZTIuZGVmYXVsdCxcbiAgZGlzdGFuY2U6IF9weDIuZGVmYXVsdCxcbiAgdHJhbnNsYXRlWDogX3B4Mi5kZWZhdWx0LFxuICB0cmFuc2xhdGVZOiBfcHgyLmRlZmF1bHQsXG4gIHRyYW5zbGF0ZVo6IF9weDIuZGVmYXVsdCxcbiAgcGVyc3BlY3RpdmU6IF9weDIuZGVmYXVsdCxcbiAgb3BhY2l0eTogX2FscGhhMi5kZWZhdWx0XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluTnlZeTloWkdGd2RHVnlMMk56Y3k5MllXeDFaUzEwZVhCbExXMWhjQzVxY3lKZExDSnVZVzFsY3lJNlcxMHNJbTFoY0hCcGJtZHpJam9pT3pzN08wRkJRVUU3T3pzN1FVRkRRVHM3T3p0QlFVTkJPenM3TzBGQlEwRTdPenM3UVVGRFFUczdPenRCUVVOQk96czdPenM3YTBKQlJXVTdPMEZCUldJc2QwSkJSbUU3UVVGSFlpeHJRMEZJWVR0QlFVbGlMQ3RDUVVwaE8wRkJTMklzZFVKQlRHRTdRVUZOWWl4NVFrRk9ZVHM3TzBGQlUySXNPRUpCVkdFN1FVRlZZaXhwUTBGV1lUdEJRVmRpTEcxRFFWaGhPMEZCV1dJc2IwTkJXbUU3UVVGaFlpeHJRMEZpWVR0QlFXTmlMRFJDUVdSaE96czdRVUZwUW1Jc2NVSkJha0poTzBGQmEwSmlMSE5DUVd4Q1lUczdPMEZCY1VKaUxEaENRWEpDWVR0QlFYTkNZaXcyUWtGMFFtRTdPenRCUVhsQ1lpeDVRa0Y2UW1FN1FVRXdRbUlzTUVKQk1VSmhPMEZCTWtKaUxEQkNRVE5DWVR0QlFUUkNZaXd3UWtFMVFtRTdRVUUyUW1Jc2QwSkJOMEpoTzBGQk9FSmlMSGxDUVRsQ1lUdEJRU3RDWWl4NVFrRXZRbUU3UVVGblEySXNlVUpCYUVOaE8wRkJhVU5pTEhkQ1FXcERZVHRCUVd0RFlpeDNRa0ZzUTJFN1FVRnRRMklzZDBKQmJrTmhPMEZCYjBOaUxEQkNRWEJEWVR0QlFYRkRZaXd3UWtGeVEyRTdRVUZ6UTJJc01FSkJkRU5oTzBGQmRVTmlMREpDUVhaRFlUdEJRWGREWWp0QlFYaERZU3hESWl3aVptbHNaU0k2SW5aaGJIVmxMWFI1Y0dVdGJXRndMbXB6SWl3aWMyOTFjbU5sVW05dmRDSTZJaTlWYzJWeWN5OXRZWFIwY0dWeWNua3ZVMmwwWlhNdmNHOXdiVzkwYVc5dUlpd2ljMjkxY21ObGMwTnZiblJsYm5RaU9sc2lhVzF3YjNKMElHRnVaMnhsSUdaeWIyMGdKeTR1THk0dUwzWmhiSFZsTFhSNWNHVnpMMkZ1WjJ4bEp6dGNibWx0Y0c5eWRDQmhiSEJvWVNCbWNtOXRJQ2N1TGk4dUxpOTJZV3gxWlMxMGVYQmxjeTloYkhCb1lTYzdYRzVwYlhCdmNuUWdZMjlzYjNJZ1puSnZiU0FuTGk0dkxpNHZkbUZzZFdVdGRIbHdaWE12WTI5c2IzSW5PMXh1YVcxd2IzSjBJSE5qWVd4bElHWnliMjBnSnk0dUx5NHVMM1poYkhWbExYUjVjR1Z6TDNOallXeGxKenRjYm1sdGNHOXlkQ0J6YUdGa2IzY2dabkp2YlNBbkxpNHZMaTR2ZG1Gc2RXVXRkSGx3WlhNdmMyaGhaRzkzSnp0Y2JtbHRjRzl5ZENCd2VDQm1jbTl0SUNjdUxpOHVMaTkyWVd4MVpTMTBlWEJsY3k5d2VDYzdYRzVjYm1WNGNHOXlkQ0JrWldaaGRXeDBJSHRjYmlBZ0x5OGdRMjlzYjNJZ2NISnZjSE5jYmlBZ1kyOXNiM0k2SUdOdmJHOXlMRnh1SUNCaVlXTnJaM0p2ZFc1a1EyOXNiM0k2SUdOdmJHOXlMRnh1SUNCdmRYUnNhVzVsUTI5c2IzSTZJR052Ykc5eUxGeHVJQ0JtYVd4c09pQmpiMnh2Y2l4Y2JpQWdjM1J5YjJ0bE9pQmpiMnh2Y2l4Y2JseHVJQ0F2THlCQ2IzSmtaWElnY0hKdmNITmNiaUFnWW05eVpHVnlRMjlzYjNJNklHTnZiRzl5TEZ4dUlDQmliM0prWlhKVWIzQkRiMnh2Y2pvZ1kyOXNiM0lzWEc0Z0lHSnZjbVJsY2xKcFoyaDBRMjlzYjNJNklHTnZiRzl5TEZ4dUlDQmliM0prWlhKQ2IzUjBiMjFEYjJ4dmNqb2dZMjlzYjNJc1hHNGdJR0p2Y21SbGNreGxablJEYjJ4dmNqb2dZMjlzYjNJc1hHNGdJR0p2Y21SbGNsSmhaR2wxY3pvZ2NIZ3NYRzVjYmlBZ0x5OGdVRzl6YVhScGIyNXBibWRjYmlBZ2QybGtkR2c2SUhCNExGeHVJQ0JvWldsbmFIUTZJSEI0TEZ4dVhHNGdJQzh2SUZOb1lXUnZkM05jYmlBZ2RHVjRkRk5vWVdSdmR6b2djMmhoWkc5M0xGeHVJQ0JpYjNoVGFHRmtiM2M2SUhOb1lXUnZkeXdnSUNCY2JseHVJQ0F2THlCVWNtRnVjMlp2Y20wZ2NISnZjR1Z5ZEdsbGMxeHVJQ0J5YjNSaGRHVTZJR0Z1WjJ4bExGeHVJQ0J5YjNSaGRHVllPaUJoYm1kc1pTeGNiaUFnY205MFlYUmxXVG9nWVc1bmJHVXNYRzRnSUhKdmRHRjBaVm82SUdGdVoyeGxMRnh1SUNCelkyRnNaVG9nYzJOaGJHVXNYRzRnSUhOallXeGxXRG9nYzJOaGJHVXNYRzRnSUhOallXeGxXVG9nYzJOaGJHVXNYRzRnSUhOallXeGxXam9nYzJOaGJHVXNYRzRnSUhOclpYZFlPaUJoYm1kc1pTeGNiaUFnYzJ0bGQxazZJR0Z1WjJ4bExGeHVJQ0JrYVhOMFlXNWpaVG9nY0hnc1hHNGdJSFJ5WVc1emJHRjBaVmc2SUhCNExGeHVJQ0IwY21GdWMyeGhkR1ZaT2lCd2VDeGNiaUFnZEhKaGJuTnNZWFJsV2pvZ2NIZ3NYRzRnSUhCbGNuTndaV04wYVhabE9pQndlQ3hjYmlBZ2IzQmhZMmwwZVRvZ1lXeHdhR0ZjYm4wN0lsMTlcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2FkYXB0ZXIvY3NzL3ZhbHVlLXR5cGUtbWFwLmpzXG4gKiogbW9kdWxlIGlkID0gNDFcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF90cmFuc2Zvcm1Qcm9wcyA9IHJlcXVpcmUoJy4vdHJhbnNmb3JtLXByb3BzJyk7XG5cbnZhciBfdHJhbnNmb3JtUHJvcHMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfdHJhbnNmb3JtUHJvcHMpO1xuXG52YXIgX3ByZWZpeGVyID0gcmVxdWlyZSgnLi9wcmVmaXhlcicpO1xuXG52YXIgX3ByZWZpeGVyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3ByZWZpeGVyKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxudmFyIFRSQU5TTEFURV9aID0gJ3RyYW5zbGF0ZVonO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbiAoc3RhdGUsIGRpc2FibGVIYXJkd2FyZUFjY2VsZXJhdGlvbikge1xuICB2YXIgcHJvcGVydHlTdHJpbmcgPSAnJztcbiAgdmFyIHRyYW5zZm9ybVN0cmluZyA9ICcnO1xuICB2YXIgdHJhbnNmb3JtSGFzWiA9IGZhbHNlO1xuXG4gIGZvciAodmFyIGtleSBpbiBzdGF0ZSkge1xuICAgIGlmIChzdGF0ZS5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICB2YXIgdmFsdWUgPSBzdGF0ZVtrZXldO1xuXG4gICAgICBpZiAoX3RyYW5zZm9ybVByb3BzMi5kZWZhdWx0W2tleV0pIHtcbiAgICAgICAgdHJhbnNmb3JtU3RyaW5nICs9IGtleSArICcoJyArIHZhbHVlICsgJykgJztcbiAgICAgICAgdHJhbnNmb3JtSGFzWiA9IGtleSA9PT0gVFJBTlNMQVRFX1ogPyB0cnVlIDogdHJhbnNmb3JtSGFzWjtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHByb3BlcnR5U3RyaW5nICs9ICc7JyArICgwLCBfcHJlZml4ZXIyLmRlZmF1bHQpKGtleSwgdHJ1ZSkgKyAnOicgKyB2YWx1ZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBpZiAodHJhbnNmb3JtU3RyaW5nICE9PSAnJykge1xuICAgIGlmICghdHJhbnNmb3JtSGFzWiAmJiAhZGlzYWJsZUhhcmR3YXJlQWNjZWxlcmF0aW9uKSB7XG4gICAgICB0cmFuc2Zvcm1TdHJpbmcgKz0gVFJBTlNMQVRFX1ogKyAnKDBweCknO1xuICAgIH1cblxuICAgIHByb3BlcnR5U3RyaW5nICs9ICc7JyArICgwLCBfcHJlZml4ZXIyLmRlZmF1bHQpKCd0cmFuc2Zvcm0nLCB0cnVlKSArICc6JyArIHRyYW5zZm9ybVN0cmluZztcbiAgfVxuXG4gIHJldHVybiBwcm9wZXJ0eVN0cmluZztcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5OeVl5OWhaR0Z3ZEdWeUwyTnpjeTlpZFdsc1pDNXFjeUpkTENKdVlXMWxjeUk2VzEwc0ltMWhjSEJwYm1keklqb2lPenM3TzBGQlFVRTdPenM3UVVGRFFUczdPenM3TzBGQlJVRXNTVUZCVFN4alFVRmpMRmxCUVhCQ096dHJRa0ZGWlN4VlFVRkRMRXRCUVVRc1JVRkJVU3d5UWtGQlVpeEZRVUYzUXp0QlFVTnlSQ3hOUVVGSkxHbENRVUZwUWl4RlFVRnlRanRCUVVOQkxFMUJRVWtzYTBKQlFXdENMRVZCUVhSQ08wRkJRMEVzVFVGQlNTeG5Ra0ZCWjBJc1MwRkJjRUk3TzBGQlJVRXNUMEZCU3l4SlFVRkpMRWRCUVZRc1NVRkJaMElzUzBGQmFFSXNSVUZCZFVJN1FVRkRja0lzVVVGQlNTeE5RVUZOTEdOQlFVNHNRMEZCY1VJc1IwRkJja0lzUTBGQlNpeEZRVUVyUWp0QlFVTTNRaXhWUVVGTkxGRkJRVkVzVFVGQlRTeEhRVUZPTEVOQlFXUTdPMEZCUlVFc1ZVRkJTU3g1UWtGQlpTeEhRVUZtTEVOQlFVb3NSVUZCZVVJN1FVRkRka0lzTWtKQlFXMUNMRTFCUVUwc1IwRkJUaXhIUVVGWkxFdEJRVm9zUjBGQmIwSXNTVUZCZGtNN1FVRkRRU3gzUWtGQmFVSXNVVUZCVVN4WFFVRlVMRWRCUVhkQ0xFbEJRWGhDTEVkQlFTdENMR0ZCUVM5RE8wRkJSVVFzVDBGS1JDeE5RVWxQTzBGQlEwd3NNRUpCUVd0Q0xFMUJRVTBzZDBKQlFWTXNSMEZCVkN4RlFVRmpMRWxCUVdRc1EwRkJUaXhIUVVFMFFpeEhRVUUxUWl4SFFVRnJReXhMUVVGd1JEdEJRVU5FTzBGQlEwWTdRVUZEUmpzN1FVRkZSQ3hOUVVGSkxHOUNRVUZ2UWl4RlFVRjRRaXhGUVVFMFFqdEJRVU14UWl4UlFVRkpMRU5CUVVNc1lVRkJSQ3hKUVVGclFpeERRVUZETERKQ1FVRjJRaXhGUVVGdlJEdEJRVU5zUkN4NVFrRkJiVUlzWTBGQll5eFBRVUZxUXp0QlFVTkVPenRCUVVWRUxITkNRVUZyUWl4TlFVRk5MSGRDUVVGVExGZEJRVlFzUlVGQmMwSXNTVUZCZEVJc1EwRkJUaXhIUVVGdlF5eEhRVUZ3UXl4SFFVRXdReXhsUVVFMVJEdEJRVU5FT3p0QlFVVkVMRk5CUVU4c1kwRkJVRHRCUVVORUxFTWlMQ0ptYVd4bElqb2lZblZwYkdRdWFuTWlMQ0p6YjNWeVkyVlNiMjkwSWpvaUwxVnpaWEp6TDIxaGRIUndaWEp5ZVM5VGFYUmxjeTl3YjNCdGIzUnBiMjRpTENKemIzVnlZMlZ6UTI5dWRHVnVkQ0k2V3lKcGJYQnZjblFnZEhKaGJuTm1iM0p0VUhKdmNITWdabkp2YlNBbkxpOTBjbUZ1YzJadmNtMHRjSEp2Y0hNbk8xeHVhVzF3YjNKMElIQnlaV1pwZUdWeUlHWnliMjBnSnk0dmNISmxabWw0WlhJbk8xeHVYRzVqYjI1emRDQlVVa0ZPVTB4QlZFVmZXaUE5SUNkMGNtRnVjMnhoZEdWYUp6dGNibHh1Wlhod2IzSjBJR1JsWm1GMWJIUWdLSE4wWVhSbExDQmthWE5oWW14bFNHRnlaSGRoY21WQlkyTmxiR1Z5WVhScGIyNHBJRDArSUh0Y2JpQWdiR1YwSUhCeWIzQmxjblI1VTNSeWFXNW5JRDBnSnljN1hHNGdJR3hsZENCMGNtRnVjMlp2Y20xVGRISnBibWNnUFNBbkp6dGNiaUFnYkdWMElIUnlZVzV6Wm05eWJVaGhjMW9nUFNCbVlXeHpaVHRjYmx4dUlDQm1iM0lnS0d4bGRDQnJaWGtnYVc0Z2MzUmhkR1VwSUh0Y2JpQWdJQ0JwWmlBb2MzUmhkR1V1YUdGelQzZHVVSEp2Y0dWeWRIa29hMlY1S1NrZ2UxeHVJQ0FnSUNBZ1kyOXVjM1FnZG1Gc2RXVWdQU0J6ZEdGMFpWdHJaWGxkTzF4dVhHNGdJQ0FnSUNCcFppQW9kSEpoYm5ObWIzSnRVSEp2Y0hOYmEyVjVYU2tnZTF4dUlDQWdJQ0FnSUNCMGNtRnVjMlp2Y20xVGRISnBibWNnS3owZ2EyVjVJQ3NnSnlnbklDc2dkbUZzZFdVZ0t5QW5LU0FuTzF4dUlDQWdJQ0FnSUNCMGNtRnVjMlp2Y20xSVlYTmFJRDBnS0d0bGVTQTlQVDBnVkZKQlRsTk1RVlJGWDFvcElEOGdkSEoxWlNBNklIUnlZVzV6Wm05eWJVaGhjMW83WEc1Y2JpQWdJQ0FnSUgwZ1pXeHpaU0I3WEc0Z0lDQWdJQ0FnSUhCeWIzQmxjblI1VTNSeWFXNW5JQ3M5SUNjN0p5QXJJSEJ5WldacGVHVnlLR3RsZVN3Z2RISjFaU2tnS3lBbk9pY2dLeUIyWVd4MVpUdGNiaUFnSUNBZ0lIMWNiaUFnSUNCOVhHNGdJSDFjYmx4dUlDQnBaaUFvZEhKaGJuTm1iM0p0VTNSeWFXNW5JQ0U5UFNBbkp5a2dlMXh1SUNBZ0lHbG1JQ2doZEhKaGJuTm1iM0p0U0dGeldpQW1KaUFoWkdsellXSnNaVWhoY21SM1lYSmxRV05qWld4bGNtRjBhVzl1S1NCN1hHNGdJQ0FnSUNCMGNtRnVjMlp2Y20xVGRISnBibWNnS3owZ1ZGSkJUbE5NUVZSRlgxb2dLeUFuS0RCd2VDa25PMXh1SUNBZ0lIMWNibHh1SUNBZ0lIQnliM0JsY25SNVUzUnlhVzVuSUNzOUlDYzdKeUFySUhCeVpXWnBlR1Z5S0NkMGNtRnVjMlp2Y20wbkxDQjBjblZsS1NBcklDYzZKeUFySUhSeVlXNXpabTl5YlZOMGNtbHVaenRjYmlBZ2ZWeHVYRzRnSUhKbGRIVnliaUJ3Y205d1pYSjBlVk4wY21sdVp6dGNibjA3SWwxOVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvYWRhcHRlci9jc3MvYnVpbGQuanNcbiAqKiBtb2R1bGUgaWQgPSA0MlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX3V0aWxzID0gcmVxdWlyZSgnLi4vLi4vaW5jL3V0aWxzJyk7XG5cbnZhciBjYW1lbENhY2hlID0ge307XG52YXIgZGFzaENhY2hlID0ge307XG52YXIgcHJlZml4ZXMgPSBbJ1dlYmtpdCcsICdNb3onLCAnTycsICdtcycsICcnXTtcbnZhciBudW1QcmVmaXhlcyA9IHByZWZpeGVzLmxlbmd0aDtcbnZhciB0ZXN0RWxlbWVudCA9IHZvaWQgMDtcblxuLypcbiAgVGVzdCBzdHlsZSBwcm9wZXJ0eSBmb3IgcHJlZml4ZWQgdmVyc2lvblxuICBcbiAgQHBhcmFtIFtzdHJpbmddOiBTdHlsZSBwcm9wZXJ0eVxuICBAcmV0dXJuIFtzdHJpbmddOiBDYWNoZWQgcHJvcGVydHkgbmFtZVxuKi9cbnZhciB0ZXN0UHJlZml4ID0gZnVuY3Rpb24gKGtleSkge1xuICB0ZXN0RWxlbWVudCA9IHRlc3RFbGVtZW50IHx8IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbnVtUHJlZml4ZXM7IGkrKykge1xuICAgIHZhciBwcmVmaXggPSBwcmVmaXhlc1tpXTtcbiAgICB2YXIgbm9QcmVmaXggPSBwcmVmaXggPT09ICcnO1xuICAgIHZhciBwcmVmaXhlZFByb3BlcnR5TmFtZSA9IG5vUHJlZml4ID8ga2V5IDogcHJlZml4ICsga2V5LmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsga2V5LnNsaWNlKDEpO1xuXG4gICAgaWYgKHByZWZpeGVkUHJvcGVydHlOYW1lIGluIHRlc3RFbGVtZW50LnN0eWxlKSB7XG4gICAgICBjYW1lbENhY2hlW2tleV0gPSBwcmVmaXhlZFByb3BlcnR5TmFtZTtcbiAgICAgIGRhc2hDYWNoZVtrZXldID0gJycgKyAobm9QcmVmaXggPyAnJyA6ICctJykgKyAoMCwgX3V0aWxzLmNhbWVsVG9EYXNoKShwcmVmaXhlZFByb3BlcnR5TmFtZSk7XG4gICAgfVxuICB9XG59O1xuXG5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbiAoa2V5LCBhc0Rhc2hDYXNlKSB7XG4gIHZhciBjYWNoZSA9IGFzRGFzaENhc2UgPyBkYXNoQ2FjaGUgOiBjYW1lbENhY2hlO1xuXG4gIGlmICghY2FjaGVba2V5XSkge1xuICAgIHRlc3RQcmVmaXgoa2V5KTtcbiAgfVxuXG4gIHJldHVybiBjYWNoZVtrZXldO1xufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbk55WXk5aFpHRndkR1Z5TDJOemN5OXdjbVZtYVhobGNpNXFjeUpkTENKdVlXMWxjeUk2VzEwc0ltMWhjSEJwYm1keklqb2lPenM3TzBGQlFVRTdPMEZCUlVFc1NVRkJUU3hoUVVGaExFVkJRVzVDTzBGQlEwRXNTVUZCVFN4WlFVRlpMRVZCUVd4Q08wRkJRMEVzU1VGQlRTeFhRVUZYTEVOQlFVTXNVVUZCUkN4RlFVRlZMRXRCUVZZc1JVRkJaMElzUjBGQmFFSXNSVUZCYjBJc1NVRkJjRUlzUlVGQk1FSXNSVUZCTVVJc1EwRkJha0k3UVVGRFFTeEpRVUZOTEdOQlFXTXNVMEZCVXl4TlFVRTNRanRCUVVOQkxFbEJRVWtzYjBKQlFVbzdPenM3T3pzN08wRkJVVUVzU1VGQlRTeGhRVUZoTEZWQlFVTXNSMEZCUkN4RlFVRlRPMEZCUXpGQ0xHZENRVUZqTEdWQlFXVXNVMEZCVXl4aFFVRlVMRU5CUVhWQ0xFdEJRWFpDTEVOQlFUZENPenRCUVVWQkxFOUJRVXNzU1VGQlNTeEpRVUZKTEVOQlFXSXNSVUZCWjBJc1NVRkJTU3hYUVVGd1FpeEZRVUZwUXl4SFFVRnFReXhGUVVGelF6dEJRVU53UXl4UlFVRk5MRk5CUVZNc1UwRkJVeXhEUVVGVUxFTkJRV1k3UVVGRFFTeFJRVUZOTEZkQlFWa3NWMEZCVnl4RlFVRTNRanRCUVVOQkxGRkJRVTBzZFVKQlFYVkNMRmRCUVZjc1IwRkJXQ3hIUVVGcFFpeFRRVUZUTEVsQlFVa3NUVUZCU2l4RFFVRlhMRU5CUVZnc1JVRkJZeXhYUVVGa0xFVkJRVlFzUjBGQmRVTXNTVUZCU1N4TFFVRktMRU5CUVZVc1EwRkJWaXhEUVVGeVJqczdRVUZGUVN4UlFVRkpMSGRDUVVGM1FpeFpRVUZaTEV0QlFYaERMRVZCUVN0RE8wRkJRemRETEdsQ1FVRlhMRWRCUVZnc1NVRkJhMElzYjBKQlFXeENPMEZCUTBFc1owSkJRVlVzUjBGQlZpeFZRVUZ4UWl4WFFVRlhMRVZCUVZnc1IwRkJaMElzUjBGQmNrTXNTVUZCTkVNc2QwSkJRVmtzYjBKQlFWb3NRMEZCTlVNN1FVRkRSRHRCUVVOR08wRkJRMFlzUTBGaVJEczdhMEpCWldVc1ZVRkJReXhIUVVGRUxFVkJRVTBzVlVGQlRpeEZRVUZ4UWp0QlFVTnNReXhOUVVGTkxGRkJRVkVzWVVGQllTeFRRVUZpTEVkQlFYbENMRlZCUVhaRE96dEJRVVZCTEUxQlFVa3NRMEZCUXl4TlFVRk5MRWRCUVU0c1EwRkJUQ3hGUVVGcFFqdEJRVU5tTEdWQlFWY3NSMEZCV0R0QlFVTkVPenRCUVVWRUxGTkJRVThzVFVGQlRTeEhRVUZPTEVOQlFWQTdRVUZEUkN4RElpd2labWxzWlNJNkluQnlaV1pwZUdWeUxtcHpJaXdpYzI5MWNtTmxVbTl2ZENJNklpOVZjMlZ5Y3k5dFlYUjBjR1Z5Y25rdlUybDBaWE12Y0c5d2JXOTBhVzl1SWl3aWMyOTFjbU5sYzBOdmJuUmxiblFpT2xzaWFXMXdiM0owSUhzZ1kyRnRaV3hVYjBSaGMyZ2dmU0JtY205dElDY3VMaTh1TGk5cGJtTXZkWFJwYkhNbk8xeHVYRzVqYjI1emRDQmpZVzFsYkVOaFkyaGxJRDBnZTMwN1hHNWpiMjV6ZENCa1lYTm9RMkZqYUdVZ1BTQjdmVHRjYm1OdmJuTjBJSEJ5WldacGVHVnpJRDBnV3lkWFpXSnJhWFFuTENkTmIzb25MQ2RQSnl3bmJYTW5MQ0FuSjEwN1hHNWpiMjV6ZENCdWRXMVFjbVZtYVhobGN5QTlJSEJ5WldacGVHVnpMbXhsYm1kMGFEdGNibXhsZENCMFpYTjBSV3hsYldWdWREdGNibHh1THlwY2JpQWdWR1Z6ZENCemRIbHNaU0J3Y205d1pYSjBlU0JtYjNJZ2NISmxabWw0WldRZ2RtVnljMmx2Ymx4dUlDQmNiaUFnUUhCaGNtRnRJRnR6ZEhKcGJtZGRPaUJUZEhsc1pTQndjbTl3WlhKMGVWeHVJQ0JBY21WMGRYSnVJRnR6ZEhKcGJtZGRPaUJEWVdOb1pXUWdjSEp2Y0dWeWRIa2dibUZ0WlZ4dUtpOWNibU52Ym5OMElIUmxjM1JRY21WbWFYZ2dQU0FvYTJWNUtTQTlQaUI3WEc0Z0lIUmxjM1JGYkdWdFpXNTBJRDBnZEdWemRFVnNaVzFsYm5RZ2ZId2daRzlqZFcxbGJuUXVZM0psWVhSbFJXeGxiV1Z1ZENnblpHbDJKeWs3WEc1Y2JpQWdabTl5SUNoc1pYUWdhU0E5SURBN0lHa2dQQ0J1ZFcxUWNtVm1hWGhsY3pzZ2FTc3JLU0I3WEc0Z0lDQWdZMjl1YzNRZ2NISmxabWw0SUQwZ2NISmxabWw0WlhOYmFWMDdYRzRnSUNBZ1kyOXVjM1FnYm05UWNtVm1hWGdnUFNBb2NISmxabWw0SUQwOVBTQW5KeWs3WEc0Z0lDQWdZMjl1YzNRZ2NISmxabWw0WldSUWNtOXdaWEowZVU1aGJXVWdQU0J1YjFCeVpXWnBlQ0EvSUd0bGVTQTZJSEJ5WldacGVDQXJJR3RsZVM1amFHRnlRWFFvTUNrdWRHOVZjSEJsY2tOaGMyVW9LU0FySUd0bGVTNXpiR2xqWlNneEtUdGNibHh1SUNBZ0lHbG1JQ2h3Y21WbWFYaGxaRkJ5YjNCbGNuUjVUbUZ0WlNCcGJpQjBaWE4wUld4bGJXVnVkQzV6ZEhsc1pTa2dlMXh1SUNBZ0lDQWdZMkZ0Wld4RFlXTm9aVnRyWlhsZElEMGdjSEpsWm1sNFpXUlFjbTl3WlhKMGVVNWhiV1U3WEc0Z0lDQWdJQ0JrWVhOb1EyRmphR1ZiYTJWNVhTQTlJR0FrZXlodWIxQnlaV1pwZUNBL0lDY25JRG9nSnkwbktYMGtlMk5oYldWc1ZHOUVZWE5vS0hCeVpXWnBlR1ZrVUhKdmNHVnlkSGxPWVcxbEtYMWdPMXh1SUNBZ0lIMWNiaUFnZlZ4dWZUdGNibHh1Wlhod2IzSjBJR1JsWm1GMWJIUWdLR3RsZVN3Z1lYTkVZWE5vUTJGelpTa2dQVDRnZTF4dUlDQmpiMjV6ZENCallXTm9aU0E5SUdGelJHRnphRU5oYzJVZ1B5QmtZWE5vUTJGamFHVWdPaUJqWVcxbGJFTmhZMmhsTzF4dVhHNGdJR2xtSUNnaFkyRmphR1ZiYTJWNVhTa2dlMXh1SUNBZ0lIUmxjM1JRY21WbWFYZ29hMlY1S1R0Y2JpQWdmVnh1WEc0Z0lISmxkSFZ5YmlCallXTm9aVnRyWlhsZE8xeHVmVHRjYmlKZGZRPT1cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2FkYXB0ZXIvY3NzL3ByZWZpeGVyLmpzXG4gKiogbW9kdWxlIGlkID0gNDNcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF9kaWN0aW9uYXJ5ID0gcmVxdWlyZSgnLi4vLi4vdmFsdWUtdHlwZXMvc2V0dGluZ3MvZGljdGlvbmFyeScpO1xuXG52YXIgdHJhbnNmb3JtUHJvcHMgPSB7fTtcblxudmFyIFNDQUxFID0gJ3NjYWxlJztcbnZhciBST1RBVEUgPSAncm90YXRlJztcbnZhciBUUkFOU0ZPUk1fUEVSU1BFQ1RJVkUgPSAndHJhbnNmb3JtUGVyc3BlY3RpdmUnO1xudmFyIFRFUk1TID0gWyd0cmFuc2xhdGUnLCBTQ0FMRSwgUk9UQVRFLCAnc2tldycsIFRSQU5TRk9STV9QRVJTUEVDVElWRV07XG5cbnRyYW5zZm9ybVByb3BzW1JPVEFURV0gPSB0cmFuc2Zvcm1Qcm9wc1tTQ0FMRV0gPSB0cmFuc2Zvcm1Qcm9wc1tUUkFOU0ZPUk1fUEVSU1BFQ1RJVkVdID0gdHJ1ZTtcblxuVEVSTVMuZm9yRWFjaChmdW5jdGlvbiAodGVybSkge1xuICByZXR1cm4gX2RpY3Rpb25hcnkuYXhlcy5mb3JFYWNoKGZ1bmN0aW9uIChheGlzKSB7XG4gICAgcmV0dXJuIHRyYW5zZm9ybVByb3BzW3Rlcm0gKyBheGlzXSA9IHRydWU7XG4gIH0pO1xufSk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IHRyYW5zZm9ybVByb3BzO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluTnlZeTloWkdGd2RHVnlMMk56Y3k5MGNtRnVjMlp2Y20wdGNISnZjSE11YW5NaVhTd2libUZ0WlhNaU9sdGRMQ0p0WVhCd2FXNW5jeUk2SWpzN096dEJRVUZCT3p0QlFVVkJMRWxCUVVrc2FVSkJRV2xDTEVWQlFYSkNPenRCUVVWQkxFbEJRVTBzVVVGQlVTeFBRVUZrTzBGQlEwRXNTVUZCVFN4VFFVRlRMRkZCUVdZN1FVRkRRU3hKUVVGTkxIZENRVUYzUWl4elFrRkJPVUk3UVVGRFFTeEpRVUZOTEZGQlFWRXNRMEZCUXl4WFFVRkVMRVZCUVdNc1MwRkJaQ3hGUVVGeFFpeE5RVUZ5UWl4RlFVRTJRaXhOUVVFM1FpeEZRVUZ4UXl4eFFrRkJja01zUTBGQlpEczdRVUZGUVN4bFFVRmxMRTFCUVdZc1NVRkJlVUlzWlVGQlpTeExRVUZtTEVsQlFYZENMR1ZCUVdVc2NVSkJRV1lzU1VGQmQwTXNTVUZCZWtZN08wRkJSVUVzVFVGQlRTeFBRVUZPTEVOQlFXTXNWVUZCUXl4SlFVRkVPMEZCUVVFc1UwRkJWU3hwUWtGQlN5eFBRVUZNTEVOQlFXRXNWVUZCUXl4SlFVRkVPMEZCUVVFc1YwRkJWU3hsUVVGbExFOUJRVThzU1VGQmRFSXNTVUZCT0VJc1NVRkJlRU03UVVGQlFTeEhRVUZpTEVOQlFWWTdRVUZCUVN4RFFVRmtPenRyUWtGRlpTeGpJaXdpWm1sc1pTSTZJblJ5WVc1elptOXliUzF3Y205d2N5NXFjeUlzSW5OdmRYSmpaVkp2YjNRaU9pSXZWWE5sY25NdmJXRjBkSEJsY25KNUwxTnBkR1Z6TDNCdmNHMXZkR2x2YmlJc0luTnZkWEpqWlhORGIyNTBaVzUwSWpwYkltbHRjRzl5ZENCN0lHRjRaWE1nZlNCbWNtOXRJQ2N1TGk4dUxpOTJZV3gxWlMxMGVYQmxjeTl6WlhSMGFXNW5jeTlrYVdOMGFXOXVZWEo1Snp0Y2JseHViR1YwSUhSeVlXNXpabTl5YlZCeWIzQnpJRDBnZTMwN1hHNWNibU52Ym5OMElGTkRRVXhGSUQwZ0ozTmpZV3hsSnp0Y2JtTnZibk4wSUZKUFZFRlVSU0E5SUNkeWIzUmhkR1VuTzF4dVkyOXVjM1FnVkZKQlRsTkdUMUpOWDFCRlVsTlFSVU5VU1ZaRklEMGdKM1J5WVc1elptOXliVkJsY25Od1pXTjBhWFpsSnp0Y2JtTnZibk4wSUZSRlVrMVRJRDBnV3lkMGNtRnVjMnhoZEdVbkxDQlRRMEZNUlN3Z1VrOVVRVlJGTENBbmMydGxkeWNzSUZSU1FVNVRSazlTVFY5UVJWSlRVRVZEVkVsV1JWMDdYRzVjYm5SeVlXNXpabTl5YlZCeWIzQnpXMUpQVkVGVVJWMGdQU0IwY21GdWMyWnZjbTFRY205d2MxdFRRMEZNUlYwZ1BTQjBjbUZ1YzJadmNtMVFjbTl3YzF0VVVrRk9VMFpQVWsxZlVFVlNVMUJGUTFSSlZrVmRJRDBnZEhKMVpUdGNibHh1VkVWU1RWTXVabTl5UldGamFDZ29kR1Z5YlNrZ1BUNGdZWGhsY3k1bWIzSkZZV05vS0NoaGVHbHpLU0E5UGlCMGNtRnVjMlp2Y20xUWNtOXdjMXQwWlhKdElDc2dZWGhwYzEwZ1BTQjBjblZsS1NrN1hHNWNibVY0Y0c5eWRDQmtaV1poZFd4MElIUnlZVzV6Wm05eWJWQnliM0J6T3lKZGZRPT1cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2FkYXB0ZXIvY3NzL3RyYW5zZm9ybS1wcm9wcy5qc1xuICoqIG1vZHVsZSBpZCA9IDQ0XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfYWxwaGEgPSByZXF1aXJlKCcuLi8uLi92YWx1ZS10eXBlcy9hbHBoYScpO1xuXG52YXIgX2FscGhhMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2FscGhhKTtcblxudmFyIF9jb2xvciA9IHJlcXVpcmUoJy4uLy4uL3ZhbHVlLXR5cGVzL2NvbG9yJyk7XG5cbnZhciBfY29sb3IyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY29sb3IpO1xuXG52YXIgX2NvbXBsZXggPSByZXF1aXJlKCcuLi8uLi92YWx1ZS10eXBlcy9jb21wbGV4Jyk7XG5cbnZhciBfY29tcGxleDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jb21wbGV4KTtcblxudmFyIF9zY2FsZSA9IHJlcXVpcmUoJy4uLy4uL3ZhbHVlLXR5cGVzL3NjYWxlJyk7XG5cbnZhciBfc2NhbGUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfc2NhbGUpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5leHBvcnRzLmRlZmF1bHQgPSB7XG4gIGZpbGw6IF9jb2xvcjIuZGVmYXVsdCxcbiAgc3Ryb2tlOiBfY29sb3IyLmRlZmF1bHQsXG4gIHNjYWxlOiBfc2NhbGUyLmRlZmF1bHQsXG4gIHNjYWxlWDogX3NjYWxlMi5kZWZhdWx0LFxuICBzY2FsZVk6IF9zY2FsZTIuZGVmYXVsdCxcbiAgZDogX2NvbXBsZXgyLmRlZmF1bHQsXG4gIHBvaW50czogX2NvbXBsZXgyLmRlZmF1bHQsXG4gIG9wYWNpdHk6IF9hbHBoYTIuZGVmYXVsdCxcbiAgZmlsbE9wYWNpdHk6IF9hbHBoYTIuZGVmYXVsdCxcbiAgc3Ryb2tlT3BhY2l0eTogX2FscGhhMi5kZWZhdWx0XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluTnlZeTloWkdGd2RHVnlMM04yWnk5MllXeDFaUzEwZVhCbExXMWhjQzVxY3lKZExDSnVZVzFsY3lJNlcxMHNJbTFoY0hCcGJtZHpJam9pT3pzN08wRkJRVUU3T3pzN1FVRkRRVHM3T3p0QlFVTkJPenM3TzBGQlEwRTdPenM3T3p0clFrRkZaVHRCUVVOaUxIVkNRVVJoTzBGQlJXSXNlVUpCUm1FN1FVRkhZaXgzUWtGSVlUdEJRVWxpTEhsQ1FVcGhPMEZCUzJJc2VVSkJUR0U3UVVGTllpeHpRa0ZPWVR0QlFVOWlMREpDUVZCaE8wRkJVV0lzTUVKQlVtRTdRVUZUWWl3NFFrRlVZVHRCUVZWaU8wRkJWbUVzUXlJc0ltWnBiR1VpT2lKMllXeDFaUzEwZVhCbExXMWhjQzVxY3lJc0luTnZkWEpqWlZKdmIzUWlPaUl2VlhObGNuTXZiV0YwZEhCbGNuSjVMMU5wZEdWekwzQnZjRzF2ZEdsdmJpSXNJbk52ZFhKalpYTkRiMjUwWlc1MElqcGJJbWx0Y0c5eWRDQmhiSEJvWVNCbWNtOXRJQ2N1TGk4dUxpOTJZV3gxWlMxMGVYQmxjeTloYkhCb1lTYzdYRzVwYlhCdmNuUWdZMjlzYjNJZ1puSnZiU0FuTGk0dkxpNHZkbUZzZFdVdGRIbHdaWE12WTI5c2IzSW5PMXh1YVcxd2IzSjBJR052YlhCc1pYZ2dabkp2YlNBbkxpNHZMaTR2ZG1Gc2RXVXRkSGx3WlhNdlkyOXRjR3hsZUNjN1hHNXBiWEJ2Y25RZ2MyTmhiR1VnWm5KdmJTQW5MaTR2TGk0dmRtRnNkV1V0ZEhsd1pYTXZjMk5oYkdVbk8xeHVYRzVsZUhCdmNuUWdaR1ZtWVhWc2RDQjdYRzRnSUdacGJHdzZJR052Ykc5eUxGeHVJQ0J6ZEhKdmEyVTZJR052Ykc5eUxGeHVJQ0J6WTJGc1pUb2djMk5oYkdVc1hHNGdJSE5qWVd4bFdEb2djMk5oYkdVc1hHNGdJSE5qWVd4bFdUb2djMk5oYkdVc1hHNGdJR1E2SUdOdmJYQnNaWGdzWEc0Z0lIQnZhVzUwY3pvZ1kyOXRjR3hsZUN4Y2JpQWdiM0JoWTJsMGVUb2dZV3h3YUdFc1hHNGdJR1pwYkd4UGNHRmphWFI1T2lCaGJIQm9ZU3hjYmlBZ2MzUnliMnRsVDNCaFkybDBlVG9nWVd4d2FHRmNibjA3SWwxOVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvYWRhcHRlci9zdmcvdmFsdWUtdHlwZS1tYXAuanNcbiAqKiBtb2R1bGUgaWQgPSA0NVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0cy5kZWZhdWx0ID0gYnVpbGQ7XG5cbnZhciBfdXRpbHMgPSByZXF1aXJlKCcuLi8uLi9pbmMvdXRpbHMnKTtcblxudmFyIF90cmFuc2Zvcm1Qcm9wcyA9IHJlcXVpcmUoJy4uL2Nzcy90cmFuc2Zvcm0tcHJvcHMnKTtcblxudmFyIF90cmFuc2Zvcm1Qcm9wczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF90cmFuc2Zvcm1Qcm9wcyk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbnZhciBaRVJPX05PVF9aRVJPID0gMC4wMDAxO1xuXG5mdW5jdGlvbiBidWlsZChzdGF0ZSwgZGF0YSkge1xuICB2YXIgaGFzVHJhbnNmb3JtID0gZmFsc2U7XG4gIHZhciBwcm9wcyA9IHt9O1xuICB2YXIgc2NhbGUgPSBzdGF0ZS5zY2FsZSAhPT0gdW5kZWZpbmVkID8gc3RhdGUuc2NhbGUgfHwgWkVST19OT1RfWkVSTyA6IHN0YXRlLnNjYWxlWCB8fCAxO1xuICB2YXIgc2NhbGVZID0gc3RhdGUuc2NhbGVZICE9PSB1bmRlZmluZWQgPyBzdGF0ZS5zY2FsZVkgfHwgWkVST19OT1RfWkVSTyA6IHNjYWxlIHx8IDE7XG4gIHZhciB0cmFuc2Zvcm1PcmlnaW5YID0gZGF0YS53aWR0aCAqICgoc3RhdGUub3JpZ2luWCB8fCA1MCkgLyAxMDApICsgZGF0YS54O1xuICB2YXIgdHJhbnNmb3JtT3JpZ2luWSA9IGRhdGEuaGVpZ2h0ICogKChzdGF0ZS5vcmlnaW5ZIHx8IDUwKSAvIDEwMCkgKyBkYXRhLnk7XG4gIHZhciBzY2FsZVRyYW5zZm9ybVggPSAtdHJhbnNmb3JtT3JpZ2luWCAqIChzY2FsZSAqIDEpO1xuICB2YXIgc2NhbGVUcmFuc2Zvcm1ZID0gLXRyYW5zZm9ybU9yaWdpblkgKiAoc2NhbGVZICogMSk7XG4gIHZhciBzY2FsZVJlcGxhY2VYID0gdHJhbnNmb3JtT3JpZ2luWCAvIHNjYWxlO1xuICB2YXIgc2NhbGVSZXBsYWNlWSA9IHRyYW5zZm9ybU9yaWdpblkgLyBzY2FsZVk7XG4gIHZhciB0cmFuc2Zvcm0gPSB7XG4gICAgdHJhbnNsYXRlOiAndHJhbnNsYXRlKCcgKyBzdGF0ZS50cmFuc2xhdGVYICsgJywgJyArIHN0YXRlLnRyYW5zbGF0ZVkgKyAnKSAnLFxuICAgIHNjYWxlOiAndHJhbnNsYXRlKCcgKyBzY2FsZVRyYW5zZm9ybVggKyAnLCAnICsgc2NhbGVUcmFuc2Zvcm1ZICsgJykgc2NhbGUoJyArIHNjYWxlICsgJywgJyArIHNjYWxlWSArICcpIHRyYW5zbGF0ZSgnICsgc2NhbGVSZXBsYWNlWCArICcsICcgKyBzY2FsZVJlcGxhY2VZICsgJykgJyxcbiAgICByb3RhdGU6ICdyb3RhdGUoJyArIHN0YXRlLnJvdGF0ZSArICcsICcgKyB0cmFuc2Zvcm1PcmlnaW5YICsgJywgJyArIHRyYW5zZm9ybU9yaWdpblkgKyAnKSAnLFxuICAgIHNrZXdYOiAnc2tld1goJyArIHN0YXRlLnNrZXdYICsgJykgJyxcbiAgICBza2V3WTogJ3NrZXdZKCcgKyBzdGF0ZS5za2V3WSArICcpICdcbiAgfTtcblxuICBmb3IgKHZhciBrZXkgaW4gc3RhdGUpIHtcbiAgICBpZiAoc3RhdGUuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgaWYgKF90cmFuc2Zvcm1Qcm9wczIuZGVmYXVsdFtrZXldKSB7XG4gICAgICAgIGhhc1RyYW5zZm9ybSA9IHRydWU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBwcm9wc1soMCwgX3V0aWxzLmNhbWVsVG9EYXNoKShrZXkpXSA9IHN0YXRlW2tleV07XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgaWYgKGhhc1RyYW5zZm9ybSkge1xuICAgIHByb3BzLnRyYW5zZm9ybSA9ICcnO1xuXG4gICAgZm9yICh2YXIgX2tleSBpbiB0cmFuc2Zvcm0pIHtcbiAgICAgIGlmICh0cmFuc2Zvcm0uaGFzT3duUHJvcGVydHkoX2tleSkpIHtcbiAgICAgICAgdmFyIGRlZmF1bHRWYWx1ZSA9IF9rZXkgPT09ICdzY2FsZScgPyAnMScgOiAnMCc7XG4gICAgICAgIHByb3BzLnRyYW5zZm9ybSArPSB0cmFuc2Zvcm1bX2tleV0ucmVwbGFjZSgvdW5kZWZpbmVkL2csIGRlZmF1bHRWYWx1ZSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHByb3BzO1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluTnlZeTloWkdGd2RHVnlMM04yWnk5aWRXbHNaQzVxY3lKZExDSnVZVzFsY3lJNlcxMHNJbTFoY0hCcGJtZHpJam9pT3pzN2EwSkJTM2RDTEVzN08wRkJUSGhDT3p0QlFVTkJPenM3T3pzN1FVRkZRU3hKUVVGTkxHZENRVUZuUWl4TlFVRjBRanM3UVVGRlpTeFRRVUZUTEV0QlFWUXNRMEZCWlN4TFFVRm1MRVZCUVhOQ0xFbEJRWFJDTEVWQlFUUkNPMEZCUTNwRExFMUJRVWtzWlVGQlpTeExRVUZ1UWp0QlFVTkJMRTFCUVUwc1VVRkJVU3hGUVVGa08wRkJRMEVzVFVGQlRTeFJRVUZSTEUxQlFVMHNTMEZCVGl4TFFVRm5RaXhUUVVGb1FpeEhRVUUwUWl4TlFVRk5MRXRCUVU0c1NVRkJaU3hoUVVFelF5eEhRVUV5UkN4TlFVRk5MRTFCUVU0c1NVRkJaMElzUTBGQmVrWTdRVUZEUVN4TlFVRk5MRk5CUVZNc1RVRkJUU3hOUVVGT0xFdEJRV2xDTEZOQlFXcENMRWRCUVRaQ0xFMUJRVTBzVFVGQlRpeEpRVUZuUWl4aFFVRTNReXhIUVVFMlJDeFRRVUZUTEVOQlFYSkdPMEZCUTBFc1RVRkJUU3h0UWtGQmJVSXNTMEZCU3l4TFFVRk1MRWxCUVdNc1EwRkJReXhOUVVGTkxFOUJRVTRzU1VGQmFVSXNSVUZCYkVJc1NVRkJkMElzUjBGQmRFTXNTVUZCTmtNc1MwRkJTeXhEUVVFelJUdEJRVU5CTEUxQlFVMHNiVUpCUVcxQ0xFdEJRVXNzVFVGQlRDeEpRVUZsTEVOQlFVTXNUVUZCVFN4UFFVRk9MRWxCUVdsQ0xFVkJRV3hDTEVsQlFYZENMRWRCUVhaRExFbEJRVGhETEV0QlFVc3NRMEZCTlVVN1FVRkRRU3hOUVVGTkxHdENRVUZyUWl4RFFVRkZMR2RDUVVGR0xFbEJRWE5DTEZGQlFWRXNRMEZCT1VJc1EwRkJlRUk3UVVGRFFTeE5RVUZOTEd0Q1FVRnJRaXhEUVVGRkxHZENRVUZHTEVsQlFYTkNMRk5CUVZNc1EwRkJMMElzUTBGQmVFSTdRVUZEUVN4TlFVRk5MR2RDUVVGblFpeHRRa0ZCYlVJc1MwRkJla003UVVGRFFTeE5RVUZOTEdkQ1FVRm5RaXh0UWtGQmJVSXNUVUZCZWtNN1FVRkRRU3hOUVVGTkxGbEJRVms3UVVGRGFFSXNPRUpCUVhkQ0xFMUJRVTBzVlVGQk9VSXNWVUZCTmtNc1RVRkJUU3hWUVVGdVJDeFBRVVJuUWp0QlFVVm9RaXd3UWtGQmIwSXNaVUZCY0VJc1ZVRkJkME1zWlVGQmVFTXNaMEpCUVd0RkxFdEJRV3hGTEZWQlFUUkZMRTFCUVRWRkxHOUNRVUZwUnl4aFFVRnFSeXhWUVVGdFNDeGhRVUZ1U0N4UFFVWm5RanRCUVVkb1FpeDNRa0ZCYTBJc1RVRkJUU3hOUVVGNFFpeFZRVUZ0UXl4blFrRkJia01zVlVGQmQwUXNaMEpCUVhoRUxFOUJTR2RDTzBGQlNXaENMSE5DUVVGblFpeE5RVUZOTEV0QlFYUkNMRTlCU21kQ08wRkJTMmhDTEhOQ1FVRm5RaXhOUVVGTkxFdEJRWFJDTzBGQlRHZENMRWRCUVd4Q096dEJRVkZCTEU5QlFVc3NTVUZCU1N4SFFVRlVMRWxCUVdkQ0xFdEJRV2hDTEVWQlFYVkNPMEZCUTNKQ0xGRkJRVWtzVFVGQlRTeGpRVUZPTEVOQlFYRkNMRWRCUVhKQ0xFTkJRVW9zUlVGQkswSTdRVUZETjBJc1ZVRkJTU3g1UWtGQlpTeEhRVUZtTEVOQlFVb3NSVUZCZVVJN1FVRkRka0lzZFVKQlFXVXNTVUZCWmp0QlFVTkVMRTlCUmtRc1RVRkZUenRCUVVOTUxHTkJRVTBzZDBKQlFWa3NSMEZCV2l4RFFVRk9MRWxCUVRCQ0xFMUJRVTBzUjBGQlRpeERRVUV4UWp0QlFVTkVPMEZCUTBZN1FVRkRSanM3UVVGRlJDeE5RVUZKTEZsQlFVb3NSVUZCYTBJN1FVRkRhRUlzVlVGQlRTeFRRVUZPTEVkQlFXdENMRVZCUVd4Q096dEJRVVZCTEZOQlFVc3NTVUZCU1N4SlFVRlVMRWxCUVdkQ0xGTkJRV2hDTEVWQlFUSkNPMEZCUTNwQ0xGVkJRVWtzVlVGQlZTeGpRVUZXTEVOQlFYbENMRWxCUVhwQ0xFTkJRVW9zUlVGQmJVTTdRVUZEYWtNc1dVRkJUU3hsUVVGblFpeFRRVUZSTEU5QlFWUXNSMEZCYjBJc1IwRkJjRUlzUjBGQk1FSXNSMEZCTDBNN1FVRkRRU3hqUVVGTkxGTkJRVTRzU1VGQmJVSXNWVUZCVlN4SlFVRldMRVZCUVdVc1QwRkJaaXhEUVVGMVFpeFpRVUYyUWl4RlFVRnhReXhaUVVGeVF5eERRVUZ1UWp0QlFVTkVPMEZCUTBZN1FVRkRSanM3UVVGRlJDeFRRVUZQTEV0QlFWQTdRVUZEUkNJc0ltWnBiR1VpT2lKaWRXbHNaQzVxY3lJc0luTnZkWEpqWlZKdmIzUWlPaUl2VlhObGNuTXZiV0YwZEhCbGNuSjVMMU5wZEdWekwzQnZjRzF2ZEdsdmJpSXNJbk52ZFhKalpYTkRiMjUwWlc1MElqcGJJbWx0Y0c5eWRDQjdJR05oYldWc1ZHOUVZWE5vSUgwZ1puSnZiU0FuTGk0dkxpNHZhVzVqTDNWMGFXeHpKenRjYm1sdGNHOXlkQ0IwY21GdWMyWnZjbTFRY205d2N5Qm1jbTl0SUNjdUxpOWpjM012ZEhKaGJuTm1iM0p0TFhCeWIzQnpKenRjYmx4dVkyOXVjM1FnV2tWU1QxOU9UMVJmV2tWU1R5QTlJREF1TURBd01UdGNibHh1Wlhod2IzSjBJR1JsWm1GMWJIUWdablZ1WTNScGIyNGdZblZwYkdRb2MzUmhkR1VzSUdSaGRHRXBJSHRjYmlBZ2JHVjBJR2hoYzFSeVlXNXpabTl5YlNBOUlHWmhiSE5sTzF4dUlDQmpiMjV6ZENCd2NtOXdjeUE5SUh0OU8xeHVJQ0JqYjI1emRDQnpZMkZzWlNBOUlITjBZWFJsTG5OallXeGxJQ0U5UFNCMWJtUmxabWx1WldRZ1B5QnpkR0YwWlM1elkyRnNaU0I4ZkNCYVJWSlBYMDVQVkY5YVJWSlBJRG9nYzNSaGRHVXVjMk5oYkdWWUlIeDhJREU3WEc0Z0lHTnZibk4wSUhOallXeGxXU0E5SUhOMFlYUmxMbk5qWVd4bFdTQWhQVDBnZFc1a1pXWnBibVZrSUQ4Z2MzUmhkR1V1YzJOaGJHVlpJSHg4SUZwRlVrOWZUazlVWDFwRlVrOGdPaUJ6WTJGc1pTQjhmQ0F4TzF4dUlDQmpiMjV6ZENCMGNtRnVjMlp2Y20xUGNtbG5hVzVZSUQwZ1pHRjBZUzUzYVdSMGFDQXFJQ2dvYzNSaGRHVXViM0pwWjJsdVdDQjhmQ0ExTUNrZ0x5QXhNREFwSUNzZ1pHRjBZUzU0TzF4dUlDQmpiMjV6ZENCMGNtRnVjMlp2Y20xUGNtbG5hVzVaSUQwZ1pHRjBZUzVvWldsbmFIUWdLaUFvS0hOMFlYUmxMbTl5YVdkcGJsa2dmSHdnTlRBcElDOGdNVEF3S1NBcklHUmhkR0V1ZVR0Y2JpQWdZMjl1YzNRZ2MyTmhiR1ZVY21GdWMyWnZjbTFZSUQwZ0xTQjBjbUZ1YzJadmNtMVBjbWxuYVc1WUlDb2dLSE5qWVd4bElDb2dNU2s3WEc0Z0lHTnZibk4wSUhOallXeGxWSEpoYm5ObWIzSnRXU0E5SUMwZ2RISmhibk5tYjNKdFQzSnBaMmx1V1NBcUlDaHpZMkZzWlZrZ0tpQXhLVHRjYmlBZ1kyOXVjM1FnYzJOaGJHVlNaWEJzWVdObFdDQTlJSFJ5WVc1elptOXliVTl5YVdkcGJsZ2dMeUJ6WTJGc1pUdGNiaUFnWTI5dWMzUWdjMk5oYkdWU1pYQnNZV05sV1NBOUlIUnlZVzV6Wm05eWJVOXlhV2RwYmxrZ0x5QnpZMkZzWlZrN1hHNGdJR052Ym5OMElIUnlZVzV6Wm05eWJTQTlJSHRjYmlBZ0lDQjBjbUZ1YzJ4aGRHVTZJR0IwY21GdWMyeGhkR1VvSkh0emRHRjBaUzUwY21GdWMyeGhkR1ZZZlN3Z0pIdHpkR0YwWlM1MGNtRnVjMnhoZEdWWmZTa2dZQ3hjYmlBZ0lDQnpZMkZzWlRvZ1lIUnlZVzV6YkdGMFpTZ2tlM05qWVd4bFZISmhibk5tYjNKdFdIMHNJQ1I3YzJOaGJHVlVjbUZ1YzJadmNtMVpmU2tnYzJOaGJHVW9KSHR6WTJGc1pYMHNJQ1I3YzJOaGJHVlpmU2tnZEhKaGJuTnNZWFJsS0NSN2MyTmhiR1ZTWlhCc1lXTmxXSDBzSUNSN2MyTmhiR1ZTWlhCc1lXTmxXWDBwSUdBc1hHNGdJQ0FnY205MFlYUmxPaUJnY205MFlYUmxLQ1I3YzNSaGRHVXVjbTkwWVhSbGZTd2dKSHQwY21GdWMyWnZjbTFQY21sbmFXNVlmU3dnSkh0MGNtRnVjMlp2Y20xUGNtbG5hVzVaZlNrZ1lDeGNiaUFnSUNCemEyVjNXRG9nWUhOclpYZFlLQ1I3YzNSaGRHVXVjMnRsZDFoOUtTQmdMRnh1SUNBZ0lITnJaWGRaT2lCZ2MydGxkMWtvSkh0emRHRjBaUzV6YTJWM1dYMHBJR0JjYmlBZ2ZUdGNibHh1SUNCbWIzSWdLR3hsZENCclpYa2dhVzRnYzNSaGRHVXBJSHRjYmlBZ0lDQnBaaUFvYzNSaGRHVXVhR0Z6VDNkdVVISnZjR1Z5ZEhrb2EyVjVLU2tnZTF4dUlDQWdJQ0FnYVdZZ0tIUnlZVzV6Wm05eWJWQnliM0J6VzJ0bGVWMHBJSHRjYmlBZ0lDQWdJQ0FnYUdGelZISmhibk5tYjNKdElEMGdkSEoxWlR0Y2JpQWdJQ0FnSUgwZ1pXeHpaU0I3WEc0Z0lDQWdJQ0FnSUhCeWIzQnpXMk5oYldWc1ZHOUVZWE5vS0d0bGVTbGRJRDBnYzNSaGRHVmJhMlY1WFR0Y2JpQWdJQ0FnSUgxY2JpQWdJQ0I5WEc0Z0lIMWNibHh1SUNCcFppQW9hR0Z6VkhKaGJuTm1iM0p0S1NCN1hHNGdJQ0FnY0hKdmNITXVkSEpoYm5ObWIzSnRJRDBnSnljN1hHNWNiaUFnSUNCbWIzSWdLR3hsZENCclpYa2dhVzRnZEhKaGJuTm1iM0p0S1NCN1hHNGdJQ0FnSUNCcFppQW9kSEpoYm5ObWIzSnRMbWhoYzA5M2JsQnliM0JsY25SNUtHdGxlU2twSUh0Y2JpQWdJQ0FnSUNBZ1kyOXVjM1FnWkdWbVlYVnNkRlpoYkhWbElEMGdLR3RsZVNBOVBUMGdKM05qWVd4bEp5a2dQeUFuTVNjZ09pQW5NQ2M3WEc0Z0lDQWdJQ0FnSUhCeWIzQnpMblJ5WVc1elptOXliU0FyUFNCMGNtRnVjMlp2Y20xYmEyVjVYUzV5WlhCc1lXTmxLQzkxYm1SbFptbHVaV1F2Wnl3Z1pHVm1ZWFZzZEZaaGJIVmxLVHRjYmlBZ0lDQWdJSDFjYmlBZ0lDQjlYRzRnSUgxY2JseHVJQ0J5WlhSMWNtNGdjSEp2Y0hNN1hHNTlJbDE5XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9hZGFwdGVyL3N2Zy9idWlsZC5qc1xuICoqIG1vZHVsZSBpZCA9IDQ2XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG4vKlxuICBDb252ZXJ0IHBlcmNlbnRhZ2UgdG8gcGl4ZWxzXG4gIFxuICBAcGFyYW0gW251bWJlcl06IFBlcmNlbnRhZ2Ugb2YgdG90YWwgbGVuZ3RoXG4gIEBwYXJhbSBbbnVtYmVyXTogVG90YWwgbGVuZ3RoXG4qL1xudmFyIHBlcmNlbnRUb1BpeGVscyA9IGZ1bmN0aW9uIChwZXJjZW50LCBsZW5ndGgpIHtcbiAgcmV0dXJuIHBhcnNlRmxvYXQocGVyY2VudCkgLyAxMDAgKiBsZW5ndGggKyAncHgnO1xufTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gKHN0YXRlLCBsZW5ndGgpIHtcbiAgdmFyIHN0eWxlcyA9IHt9O1xuICB2YXIgZGFzaEFycmF5U3R5bGVzID0ge1xuICAgIGxlbmd0aDogMCxcbiAgICBzcGFjaW5nOiBsZW5ndGggKyAncHgnXG4gIH07XG4gIHZhciBoYXNEYXNoQXJyYXkgPSBmYWxzZTtcblxuICBmb3IgKHZhciBrZXkgaW4gc3RhdGUpIHtcbiAgICBpZiAoc3RhdGUuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgdmFyIHZhbHVlID0gc3RhdGVba2V5XTtcblxuICAgICAgc3dpdGNoIChrZXkpIHtcbiAgICAgICAgY2FzZSAnbGVuZ3RoJzpcbiAgICAgICAgY2FzZSAnc3BhY2luZyc6XG4gICAgICAgICAgaGFzRGFzaEFycmF5ID0gdHJ1ZTtcbiAgICAgICAgICBkYXNoQXJyYXlTdHlsZXNba2V5XSA9IHBlcmNlbnRUb1BpeGVscyh2YWx1ZSwgbGVuZ3RoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnb2Zmc2V0JzpcbiAgICAgICAgICBzdHlsZXNbJ3N0cm9rZS1kYXNob2Zmc2V0J10gPSBwZXJjZW50VG9QaXhlbHMoLXZhbHVlLCBsZW5ndGgpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIHN0eWxlc1trZXldID0gdmFsdWU7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgaWYgKGhhc0Rhc2hBcnJheSkge1xuICAgIHN0eWxlc1snc3Ryb2tlLWRhc2hhcnJheSddID0gZGFzaEFycmF5U3R5bGVzLmxlbmd0aCArICcgJyArIGRhc2hBcnJheVN0eWxlcy5zcGFjaW5nO1xuICB9XG5cbiAgcmV0dXJuIHN0eWxlcztcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5OeVl5OWhaR0Z3ZEdWeUwzTjJaeTF3WVhSb0wySjFhV3hrTG1weklsMHNJbTVoYldWeklqcGJYU3dpYldGd2NHbHVaM01pT2lJN096czdPenM3T3p0QlFVMUJMRWxCUVUwc2EwSkJRV3RDTEZWQlFVTXNUMEZCUkN4RlFVRlZMRTFCUVZZN1FVRkJRU3hUUVVGelFpeFhRVUZYTEU5QlFWZ3NTVUZCYzBJc1IwRkJka0lzUjBGQk9FSXNUVUZCT1VJc1IwRkJkVU1zU1VGQk5VUTdRVUZCUVN4RFFVRjRRanM3YTBKQlJXVXNWVUZCUXl4TFFVRkVMRVZCUVZFc1RVRkJVaXhGUVVGdFFqdEJRVU5vUXl4TlFVRk5MRk5CUVZNc1JVRkJaanRCUVVOQkxFMUJRVTBzYTBKQlFXdENPMEZCUTNSQ0xGbEJRVkVzUTBGRVl6dEJRVVYwUWl4aFFVRlRMRk5CUVZNN1FVRkdTU3hIUVVGNFFqdEJRVWxCTEUxQlFVa3NaVUZCWlN4TFFVRnVRanM3UVVGRlFTeFBRVUZMTEVsQlFVa3NSMEZCVkN4SlFVRm5RaXhMUVVGb1FpeEZRVUYxUWp0QlFVTnlRaXhSUVVGSkxFMUJRVTBzWTBGQlRpeERRVUZ4UWl4SFFVRnlRaXhEUVVGS0xFVkJRU3RDTzBGQlF6ZENMRlZCUVUwc1VVRkJVU3hOUVVGTkxFZEJRVTRzUTBGQlpEczdRVUZGUVN4alFVRlJMRWRCUVZJN1FVRkRRU3hoUVVGTExGRkJRVXc3UVVGRFFTeGhRVUZMTEZOQlFVdzdRVUZEUlN4NVFrRkJaU3hKUVVGbU8wRkJRMEVzTUVKQlFXZENMRWRCUVdoQ0xFbEJRWFZDTEdkQ1FVRm5RaXhMUVVGb1FpeEZRVUYxUWl4TlFVRjJRaXhEUVVGMlFqdEJRVU5CTzBGQlEwWXNZVUZCU3l4UlFVRk1PMEZCUTBVc2FVSkJRVThzYlVKQlFWQXNTVUZCT0VJc1owSkJRV2RDTEVOQlFVTXNTMEZCYWtJc1JVRkJkMElzVFVGQmVFSXNRMEZCT1VJN1FVRkRRVHRCUVVOR08wRkJRMFVzYVVKQlFVOHNSMEZCVUN4SlFVRmpMRXRCUVdRN1FVRldSanRCUVZsRU8wRkJRMFk3TzBGQlJVUXNUVUZCU1N4WlFVRktMRVZCUVd0Q08wRkJRMmhDTEZkQlFVOHNhMEpCUVZBc1NVRkJOa0lzWjBKQlFXZENMRTFCUVdoQ0xFZEJRWGxDTEVkQlFYcENMRWRCUVN0Q0xHZENRVUZuUWl4UFFVRTFSVHRCUVVORU96dEJRVVZFTEZOQlFVOHNUVUZCVUR0QlFVTkVMRU1pTENKbWFXeGxJam9pWW5WcGJHUXVhbk1pTENKemIzVnlZMlZTYjI5MElqb2lMMVZ6WlhKekwyMWhkSFJ3WlhKeWVTOVRhWFJsY3k5d2IzQnRiM1JwYjI0aUxDSnpiM1Z5WTJWelEyOXVkR1Z1ZENJNld5SXZLbHh1SUNCRGIyNTJaWEowSUhCbGNtTmxiblJoWjJVZ2RHOGdjR2w0Wld4elhHNGdJRnh1SUNCQWNHRnlZVzBnVzI1MWJXSmxjbDA2SUZCbGNtTmxiblJoWjJVZ2IyWWdkRzkwWVd3Z2JHVnVaM1JvWEc0Z0lFQndZWEpoYlNCYmJuVnRZbVZ5WFRvZ1ZHOTBZV3dnYkdWdVozUm9YRzRxTDF4dVkyOXVjM1FnY0dWeVkyVnVkRlJ2VUdsNFpXeHpJRDBnS0hCbGNtTmxiblFzSUd4bGJtZDBhQ2tnUFQ0Z0tIQmhjbk5sUm14dllYUW9jR1Z5WTJWdWRDa2dMeUF4TURBcElDb2diR1Z1WjNSb0lDc2dKM0I0Snp0Y2JseHVaWGh3YjNKMElHUmxabUYxYkhRZ0tITjBZWFJsTENCc1pXNW5kR2dwSUQwK0lIdGNiaUFnWTI5dWMzUWdjM1I1YkdWeklEMGdlMzA3WEc0Z0lHTnZibk4wSUdSaGMyaEJjbkpoZVZOMGVXeGxjeUE5SUh0Y2JpQWdJQ0JzWlc1bmRHZzZJREFzWEc0Z0lDQWdjM0JoWTJsdVp6b2diR1Z1WjNSb0lDc2dKM0I0SjF4dUlDQjlPMXh1SUNCc1pYUWdhR0Z6UkdGemFFRnljbUY1SUQwZ1ptRnNjMlU3WEc1Y2JpQWdabTl5SUNoc1pYUWdhMlY1SUdsdUlITjBZWFJsS1NCN1hHNGdJQ0FnYVdZZ0tITjBZWFJsTG1oaGMwOTNibEJ5YjNCbGNuUjVLR3RsZVNrcElIdGNiaUFnSUNBZ0lHTnZibk4wSUhaaGJIVmxJRDBnYzNSaGRHVmJhMlY1WFR0Y2JseHVJQ0FnSUNBZ2MzZHBkR05vSUNoclpYa3BJSHRjYmlBZ0lDQWdJR05oYzJVZ0oyeGxibWQwYUNjNlhHNGdJQ0FnSUNCallYTmxJQ2R6Y0dGamFXNW5KenBjYmlBZ0lDQWdJQ0FnYUdGelJHRnphRUZ5Y21GNUlEMGdkSEoxWlR0Y2JpQWdJQ0FnSUNBZ1pHRnphRUZ5Y21GNVUzUjViR1Z6VzJ0bGVWMGdQU0J3WlhKalpXNTBWRzlRYVhobGJITW9kbUZzZFdVc0lHeGxibWQwYUNrN1hHNGdJQ0FnSUNBZ0lHSnlaV0ZyTzF4dUlDQWdJQ0FnWTJGelpTQW5iMlptYzJWMEp6cGNiaUFnSUNBZ0lDQWdjM1I1YkdWeld5ZHpkSEp2YTJVdFpHRnphRzltWm5ObGRDZGRJRDBnY0dWeVkyVnVkRlJ2VUdsNFpXeHpLQzEyWVd4MVpTd2diR1Z1WjNSb0tUdGNiaUFnSUNBZ0lDQWdZbkpsWVdzN1hHNGdJQ0FnSUNCa1pXWmhkV3gwT2x4dUlDQWdJQ0FnSUNCemRIbHNaWE5iYTJWNVhTQTlJSFpoYkhWbE8xeHVJQ0FnSUNBZ2ZWeHVJQ0FnSUgxY2JpQWdmVnh1WEc0Z0lHbG1JQ2hvWVhORVlYTm9RWEp5WVhrcElIdGNiaUFnSUNCemRIbHNaWE5iSjNOMGNtOXJaUzFrWVhOb1lYSnlZWGtuWFNBOUlHUmhjMmhCY25KaGVWTjBlV3hsY3k1c1pXNW5kR2dnS3lBbklDY2dLeUJrWVhOb1FYSnlZWGxUZEhsc1pYTXVjM0JoWTJsdVp6dGNiaUFnZlZ4dVhHNGdJSEpsZEhWeWJpQnpkSGxzWlhNN1hHNTlPeUpkZlE9PVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvYWRhcHRlci9zdmctcGF0aC9idWlsZC5qc1xuICoqIG1vZHVsZSBpZCA9IDQ3XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG52YXIgcmdiID0gZXhwb3J0cy5yZ2IgPSB7XG4gIG1pbjogMCxcbiAgbWF4OiAyNTUsXG4gIHJvdW5kOiB0cnVlXG59O1xuXG52YXIgb3BhY2l0eSA9IGV4cG9ydHMub3BhY2l0eSA9IHtcbiAgbWluOiAwLFxuICBtYXg6IDFcbn07XG5cbnZhciBwZXJjZW50ID0gZXhwb3J0cy5wZXJjZW50ID0ge1xuICBtaW46IDAsXG4gIG1heDogMTAwLFxuICB1bml0OiAnJSdcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5OeVl5OTJZV3gxWlMxMGVYQmxjeTl6WlhSMGFXNW5jeTlrWldaaGRXeDBMWEJ5YjNCekxtcHpJbDBzSW01aGJXVnpJanBiWFN3aWJXRndjR2x1WjNNaU9pSTdPenRCUVVGUExFbEJRVTBzYjBKQlFVMDdRVUZEYWtJc1QwRkJTeXhEUVVSWk8wRkJSV3BDTEU5QlFVc3NSMEZHV1R0QlFVZHFRaXhUUVVGUE8wRkJTRlVzUTBGQldqczdRVUZOUVN4SlFVRk5MRFJDUVVGVk8wRkJRM0pDTEU5QlFVc3NRMEZFWjBJN1FVRkZja0lzVDBGQlN6dEJRVVpuUWl4RFFVRm9RanM3UVVGTFFTeEpRVUZOTERSQ1FVRlZPMEZCUTNKQ0xFOUJRVXNzUTBGRVowSTdRVUZGY2tJc1QwRkJTeXhIUVVablFqdEJRVWR5UWl4UlFVRk5PMEZCU0dVc1EwRkJhRUlpTENKbWFXeGxJam9pWkdWbVlYVnNkQzF3Y205d2N5NXFjeUlzSW5OdmRYSmpaVkp2YjNRaU9pSXZWWE5sY25NdmJXRjBkSEJsY25KNUwxTnBkR1Z6TDNCdmNHMXZkR2x2YmlJc0luTnZkWEpqWlhORGIyNTBaVzUwSWpwYkltVjRjRzl5ZENCamIyNXpkQ0J5WjJJZ1BTQjdYRzRnSUcxcGJqb2dNQ3hjYmlBZ2JXRjRPaUF5TlRVc1hHNGdJSEp2ZFc1a09pQjBjblZsWEc1OU8xeHVYRzVsZUhCdmNuUWdZMjl1YzNRZ2IzQmhZMmwwZVNBOUlIdGNiaUFnYldsdU9pQXdMRnh1SUNCdFlYZzZJREZjYm4wN1hHNWNibVY0Y0c5eWRDQmpiMjV6ZENCd1pYSmpaVzUwSUQwZ2UxeHVJQ0J0YVc0NklEQXNYRzRnSUcxaGVEb2dNVEF3TEZ4dUlDQjFibWwwT2lBbkpTZGNibjA3SWwxOVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvdmFsdWUtdHlwZXMvc2V0dGluZ3MvZGVmYXVsdC1wcm9wcy5qc1xuICoqIG1vZHVsZSBpZCA9IDQ4XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG52YXIgWCA9ICdYJztcbnZhciBZID0gJ1knO1xudmFyIEFMUEhBID0gJ0FscGhhJztcblxudmFyIGF4ZXMgPSBleHBvcnRzLmF4ZXMgPSBbWCwgWSwgJ1onXTtcbnZhciByZ2IgPSBleHBvcnRzLnJnYiA9IFsnUmVkJywgJ0dyZWVuJywgJ0JsdWUnLCBBTFBIQV07XG52YXIgaHNsID0gZXhwb3J0cy5oc2wgPSBbJ0h1ZScsICdTYXR1cmF0aW9uJywgJ0xpZ2h0bmVzcycsIEFMUEhBXTtcbnZhciBwb3NpdGlvbnMgPSBleHBvcnRzLnBvc2l0aW9ucyA9IFsnVG9wJywgJ1JpZ2h0JywgJ0JvdHRvbScsICdMZWZ0J107XG52YXIgc2hhZG93ID0gZXhwb3J0cy5zaGFkb3cgPSBbWCwgWSwgJ1JhZGl1cycsICdTcHJlYWQnLCAnQ29sb3InXTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbk55WXk5MllXeDFaUzEwZVhCbGN5OXpaWFIwYVc1bmN5OWthV04wYVc5dVlYSjVMbXB6SWwwc0ltNWhiV1Z6SWpwYlhTd2liV0Z3Y0dsdVozTWlPaUk3T3p0QlFVRkJMRWxCUVUwc1NVRkJTU3hIUVVGV08wRkJRMEVzU1VGQlRTeEpRVUZKTEVkQlFWWTdRVUZEUVN4SlFVRk5MRkZCUVZFc1QwRkJaRHM3UVVGRlR5eEpRVUZOTEhOQ1FVRlBMRU5CUVVNc1EwRkJSQ3hGUVVGSkxFTkJRVW9zUlVGQlR5eEhRVUZRTEVOQlFXSTdRVUZEUVN4SlFVRk5MRzlDUVVGTkxFTkJRVU1zUzBGQlJDeEZRVUZSTEU5QlFWSXNSVUZCYVVJc1RVRkJha0lzUlVGQmVVSXNTMEZCZWtJc1EwRkJXanRCUVVOQkxFbEJRVTBzYjBKQlFVMHNRMEZCUXl4TFFVRkVMRVZCUVZFc1dVRkJVaXhGUVVGelFpeFhRVUYwUWl4RlFVRnRReXhMUVVGdVF5eERRVUZhTzBGQlEwRXNTVUZCVFN4blEwRkJXU3hEUVVGRExFdEJRVVFzUlVGQlVTeFBRVUZTTEVWQlFXbENMRkZCUVdwQ0xFVkJRVEpDTEUxQlFUTkNMRU5CUVd4Q08wRkJRMEVzU1VGQlRTd3dRa0ZCVXl4RFFVRkRMRU5CUVVRc1JVRkJTU3hEUVVGS0xFVkJRVThzVVVGQlVDeEZRVUZwUWl4UlFVRnFRaXhGUVVFeVFpeFBRVUV6UWl4RFFVRm1JaXdpWm1sc1pTSTZJbVJwWTNScGIyNWhjbmt1YW5NaUxDSnpiM1Z5WTJWU2IyOTBJam9pTDFWelpYSnpMMjFoZEhSd1pYSnllUzlUYVhSbGN5OXdiM0J0YjNScGIyNGlMQ0p6YjNWeVkyVnpRMjl1ZEdWdWRDSTZXeUpqYjI1emRDQllJRDBnSjFnbk8xeHVZMjl1YzNRZ1dTQTlJQ2RaSnp0Y2JtTnZibk4wSUVGTVVFaEJJRDBnSjBGc2NHaGhKenRjYmx4dVpYaHdiM0owSUdOdmJuTjBJR0Y0WlhNZ1BTQmJXQ3dnV1N3Z0oxb25YVHRjYm1WNGNHOXlkQ0JqYjI1emRDQnlaMklnUFNCYkoxSmxaQ2NzSUNkSGNtVmxiaWNzSUNkQ2JIVmxKeXdnUVV4UVNFRmRPMXh1Wlhod2IzSjBJR052Ym5OMElHaHpiQ0E5SUZzblNIVmxKeXdnSjFOaGRIVnlZWFJwYjI0bkxDQW5UR2xuYUhSdVpYTnpKeXdnUVV4UVNFRmRPMXh1Wlhod2IzSjBJR052Ym5OMElIQnZjMmwwYVc5dWN5QTlJRnNuVkc5d0p5d2dKMUpwWjJoMEp5d2dKMEp2ZEhSdmJTY3NJQ2RNWldaMEoxMDdYRzVsZUhCdmNuUWdZMjl1YzNRZ2MyaGhaRzkzSUQwZ1cxZ3NJRmtzSUNkU1lXUnBkWE1uTENBblUzQnlaV0ZrSnl3Z0owTnZiRzl5SjEwN0lsMTlcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL3ZhbHVlLXR5cGVzL3NldHRpbmdzL2RpY3Rpb25hcnkuanNcbiAqKiBtb2R1bGUgaWQgPSA0OVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzLmRlZmF1bHQgPSBjcmVhdGVFYXNpbmdGdW5jdGlvbjtcbi8qXG4gIE1pcnJvciBlYXNpbmdcbiAgXG4gIE1pcnJvcnMgdGhlIHByb3ZpZGVkIGVhc2luZyBmdW5jdGlvbiwgdXNlZCBoZXJlIGZvciBtaXJyb3JpbmcgYW5cbiAgZWFzZUluIGludG8gYW4gZWFzZUluT3V0XG4gIFxuICBAcGFyYW0gW251bWJlcl06IFByb2dyZXNzLCBmcm9tIDAgLSAxLCBvZiBjdXJyZW50IHNoaWZ0XG4gIEBwYXJhbSBbZnVuY3Rpb25dOiBUaGUgZWFzaW5nIGZ1bmN0aW9uIHRvIG1pcnJvclxuICBAcmV0dXJucyBbbnVtYmVyXTogVGhlIGVhc2luZy1hZGp1c3RlZCBkZWx0YVxuKi9cbnZhciBtaXJyb3JFYXNpbmcgPSBmdW5jdGlvbiAobWV0aG9kKSB7XG4gIHJldHVybiBmdW5jdGlvbiAocHJvZ3Jlc3MsIHN0cmVuZ3RoKSB7XG4gICAgcmV0dXJuIHByb2dyZXNzIDw9IDAuNSA/IG1ldGhvZCgyICogcHJvZ3Jlc3MsIHN0cmVuZ3RoKSAvIDIgOiAoMiAtIG1ldGhvZCgyICogKDEgLSBwcm9ncmVzcyksIHN0cmVuZ3RoKSkgLyAyO1xuICB9O1xufTtcblxuLypcbiAgUmV2ZXJzZSBlYXNpbmdcbiAgXG4gIFJldmVyc2VzIHRoZSBvdXRwdXQgb2YgdGhlIHByb3ZpZGVkIGVhc2luZyBmdW5jdGlvbiwgdXNlZCBmb3IgZmxpcHBpbmcgZWFzZUluXG4gIGN1cnZlIHRvIGFuIGVhc2VPdXQuXG4gIFxuICBAcGFyYW0gW251bWJlcl06IFByb2dyZXNzLCBmcm9tIDAgLSAxLCBvZiBjdXJyZW50IHNoaWZ0XG4gIEBwYXJhbSBbZnVuY3Rpb25dOiBUaGUgZWFzaW5nIGZ1bmN0aW9uIHRvIHJldmVyc2VcbiAgQHJldHVybnMgW251bWJlcl06IFRoZSBlYXNpbmctYWRqdXN0ZWQgZGVsdGFcbiovXG52YXIgcmV2ZXJzZUVhc2luZyA9IGZ1bmN0aW9uIChtZXRob2QpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIChwcm9ncmVzcywgc3RyZW5ndGgpIHtcbiAgICByZXR1cm4gMSAtIG1ldGhvZCgxIC0gcHJvZ3Jlc3MsIHN0cmVuZ3RoKTtcbiAgfTtcbn07XG5cbi8qXG4gIEVhc2luZyBjbGFzc1xuXG4gIElmIHByb3ZpZGVkIGVhc2luZyBmdW5jdGlvbiwgcmV0dXJucyBlYXNpbmcgZnVuY3Rpb24gd2l0aCBcbiAgaW4vb3V0L2luT3V0IHZhcmlhdGlvbnNcblxuICBJZiBwcm92aWRlZCBmb3VyIGFyZ3VtZW50cywgcmV0dXJucyBuZXcgQmV6aWVyIGNsYXNzIGluc3RlYWQuXG4qL1xuZnVuY3Rpb24gY3JlYXRlRWFzaW5nRnVuY3Rpb24obWV0aG9kKSB7XG4gIHZhciBlYXNpbmdGdW5jdGlvbiA9IGZ1bmN0aW9uIChwcm9ncmVzcywgc3RyZW5ndGgpIHtcbiAgICByZXR1cm4gbWV0aG9kKHByb2dyZXNzLCBzdHJlbmd0aCk7XG4gIH07XG5cbiAgZWFzaW5nRnVuY3Rpb24uaW4gPSBmdW5jdGlvbiAocHJvZ3Jlc3MsIHN0cmVuZ3RoKSB7XG4gICAgcmV0dXJuIG1ldGhvZChwcm9ncmVzcywgc3RyZW5ndGgpO1xuICB9O1xuICBlYXNpbmdGdW5jdGlvbi5vdXQgPSByZXZlcnNlRWFzaW5nKG1ldGhvZCk7XG4gIGVhc2luZ0Z1bmN0aW9uLmluT3V0ID0gbWlycm9yRWFzaW5nKG1ldGhvZCk7XG5cbiAgcmV0dXJuIGVhc2luZ0Z1bmN0aW9uO1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluTnlZeTloWTNScGIyNXpMMlZoYzJsdVp5OWpjbVZoZEdVdFpXRnphVzVuTG1weklsMHNJbTVoYldWeklqcGJYU3dpYldGd2NHbHVaM01pT2lJN096dHJRa0ZuUTNkQ0xHOUNPenM3T3pzN096czdPenRCUVhSQ2VFSXNTVUZCVFN4bFFVRmxMRlZCUVVNc1RVRkJSRHRCUVVGQkxGTkJRVmtzVlVGQlF5eFJRVUZFTEVWQlFWY3NVVUZCV0R0QlFVRkJMRmRCUVhsQ0xGbEJRVmtzUjBGQllpeEhRVUZ2UWl4UFFVRlBMRWxCUVVrc1VVRkJXQ3hGUVVGeFFpeFJRVUZ5UWl4SlFVRnBReXhEUVVGeVJDeEhRVUY1UkN4RFFVRkRMRWxCUVVrc1QwRkJUeXhMUVVGTExFbEJRVWtzVVVGQlZDeERRVUZRTEVWQlFUSkNMRkZCUVROQ0xFTkJRVXdzU1VGQk5rTXNRMEZCT1VnN1FVRkJRU3hIUVVGYU8wRkJRVUVzUTBGQmNrSTdPenM3T3pzN096czdPenRCUVZsQkxFbEJRVTBzWjBKQlFXZENMRlZCUVVNc1RVRkJSRHRCUVVGQkxGTkJRVmtzVlVGQlF5eFJRVUZFTEVWQlFWY3NVVUZCV0R0QlFVRkJMRmRCUVhkQ0xFbEJRVWtzVDBGQlR5eEpRVUZKTEZGQlFWZ3NSVUZCY1VJc1VVRkJja0lzUTBGQk5VSTdRVUZCUVN4SFFVRmFPMEZCUVVFc1EwRkJkRUk3T3pzN096czdPenM3UVVGVlpTeFRRVUZUTEc5Q1FVRlVMRU5CUVRoQ0xFMUJRVGxDTEVWQlFYTkRPMEZCUTI1RUxFMUJRVWtzYVVKQlFXbENMRlZCUVVNc1VVRkJSQ3hGUVVGWExGRkJRVmc3UVVGQlFTeFhRVUYzUWl4UFFVRlBMRkZCUVZBc1JVRkJhVUlzVVVGQmFrSXNRMEZCZUVJN1FVRkJRU3hIUVVGeVFqczdRVUZGUVN4cFFrRkJaU3hGUVVGbUxFZEJRVzlDTEZWQlFVTXNVVUZCUkN4RlFVRlhMRkZCUVZnN1FVRkJRU3hYUVVGM1FpeFBRVUZQTEZGQlFWQXNSVUZCYVVJc1VVRkJha0lzUTBGQmVFSTdRVUZCUVN4SFFVRndRanRCUVVOQkxHbENRVUZsTEVkQlFXWXNSMEZCY1VJc1kwRkJZeXhOUVVGa0xFTkJRWEpDTzBGQlEwRXNhVUpCUVdVc1MwRkJaaXhIUVVGMVFpeGhRVUZoTEUxQlFXSXNRMEZCZGtJN08wRkJSVUVzVTBGQlR5eGpRVUZRTzBGQlEwUWlMQ0ptYVd4bElqb2lZM0psWVhSbExXVmhjMmx1Wnk1cWN5SXNJbk52ZFhKalpWSnZiM1FpT2lJdlZYTmxjbk12YldGMGRIQmxjbko1TDFOcGRHVnpMM0J2Y0cxdmRHbHZiaUlzSW5OdmRYSmpaWE5EYjI1MFpXNTBJanBiSWk4cVhHNGdJRTFwY25KdmNpQmxZWE5wYm1kY2JpQWdYRzRnSUUxcGNuSnZjbk1nZEdobElIQnliM1pwWkdWa0lHVmhjMmx1WnlCbWRXNWpkR2x2Yml3Z2RYTmxaQ0JvWlhKbElHWnZjaUJ0YVhKeWIzSnBibWNnWVc1Y2JpQWdaV0Z6WlVsdUlHbHVkRzhnWVc0Z1pXRnpaVWx1VDNWMFhHNGdJRnh1SUNCQWNHRnlZVzBnVzI1MWJXSmxjbDA2SUZCeWIyZHlaWE56TENCbWNtOXRJREFnTFNBeExDQnZaaUJqZFhKeVpXNTBJSE5vYVdaMFhHNGdJRUJ3WVhKaGJTQmJablZ1WTNScGIyNWRPaUJVYUdVZ1pXRnphVzVuSUdaMWJtTjBhVzl1SUhSdklHMXBjbkp2Y2x4dUlDQkFjbVYwZFhKdWN5QmJiblZ0WW1WeVhUb2dWR2hsSUdWaGMybHVaeTFoWkdwMWMzUmxaQ0JrWld4MFlWeHVLaTljYm1OdmJuTjBJRzFwY25KdmNrVmhjMmx1WnlBOUlDaHRaWFJvYjJRcElEMCtJQ2h3Y205bmNtVnpjeXdnYzNSeVpXNW5kR2dwSUQwK0lDaHdjbTluY21WemN5QThQU0F3TGpVcElEOGdiV1YwYUc5a0tESWdLaUJ3Y205bmNtVnpjeXdnYzNSeVpXNW5kR2dwSUM4Z01pQTZJQ2d5SUMwZ2JXVjBhRzlrS0RJZ0tpQW9NU0F0SUhCeWIyZHlaWE56S1N3Z2MzUnlaVzVuZEdncEtTQXZJREk3WEc0Z0lDQWdYRzR2S2x4dUlDQlNaWFpsY25ObElHVmhjMmx1WjF4dUlDQmNiaUFnVW1WMlpYSnpaWE1nZEdobElHOTFkSEIxZENCdlppQjBhR1VnY0hKdmRtbGtaV1FnWldGemFXNW5JR1oxYm1OMGFXOXVMQ0IxYzJWa0lHWnZjaUJtYkdsd2NHbHVaeUJsWVhObFNXNWNiaUFnWTNWeWRtVWdkRzhnWVc0Z1pXRnpaVTkxZEM1Y2JpQWdYRzRnSUVCd1lYSmhiU0JiYm5WdFltVnlYVG9nVUhKdlozSmxjM01zSUdaeWIyMGdNQ0F0SURFc0lHOW1JR04xY25KbGJuUWdjMmhwWm5SY2JpQWdRSEJoY21GdElGdG1kVzVqZEdsdmJsMDZJRlJvWlNCbFlYTnBibWNnWm5WdVkzUnBiMjRnZEc4Z2NtVjJaWEp6WlZ4dUlDQkFjbVYwZFhKdWN5QmJiblZ0WW1WeVhUb2dWR2hsSUdWaGMybHVaeTFoWkdwMWMzUmxaQ0JrWld4MFlWeHVLaTljYm1OdmJuTjBJSEpsZG1WeWMyVkZZWE5wYm1jZ1BTQW9iV1YwYUc5a0tTQTlQaUFvY0hKdlozSmxjM01zSUhOMGNtVnVaM1JvS1NBOVBpQXhJQzBnYldWMGFHOWtLREVnTFNCd2NtOW5jbVZ6Y3l3Z2MzUnlaVzVuZEdncE8xeHVYRzR2S2x4dUlDQkZZWE5wYm1jZ1kyeGhjM05jYmx4dUlDQkpaaUJ3Y205MmFXUmxaQ0JsWVhOcGJtY2dablZ1WTNScGIyNHNJSEpsZEhWeWJuTWdaV0Z6YVc1bklHWjFibU4wYVc5dUlIZHBkR2dnWEc0Z0lHbHVMMjkxZEM5cGJrOTFkQ0IyWVhKcFlYUnBiMjV6WEc1Y2JpQWdTV1lnY0hKdmRtbGtaV1FnWm05MWNpQmhjbWQxYldWdWRITXNJSEpsZEhWeWJuTWdibVYzSUVKbGVtbGxjaUJqYkdGemN5QnBibk4wWldGa0xseHVLaTljYm1WNGNHOXlkQ0JrWldaaGRXeDBJR1oxYm1OMGFXOXVJR055WldGMFpVVmhjMmx1WjBaMWJtTjBhVzl1S0cxbGRHaHZaQ2tnZTF4dUlDQnNaWFFnWldGemFXNW5SblZ1WTNScGIyNGdQU0FvY0hKdlozSmxjM01zSUhOMGNtVnVaM1JvS1NBOVBpQnRaWFJvYjJRb2NISnZaM0psYzNNc0lITjBjbVZ1WjNSb0tUdGNibHh1SUNCbFlYTnBibWRHZFc1amRHbHZiaTVwYmlBOUlDaHdjbTluY21WemN5d2djM1J5Wlc1bmRHZ3BJRDArSUcxbGRHaHZaQ2h3Y205bmNtVnpjeXdnYzNSeVpXNW5kR2dwTzF4dUlDQmxZWE5wYm1kR2RXNWpkR2x2Ymk1dmRYUWdQU0J5WlhabGNuTmxSV0Z6YVc1bktHMWxkR2h2WkNrN1hHNGdJR1ZoYzJsdVowWjFibU4wYVc5dUxtbHVUM1YwSUQwZ2JXbHljbTl5UldGemFXNW5LRzFsZEdodlpDazdYRzVjYmlBZ2NtVjBkWEp1SUdWaGMybHVaMFoxYm1OMGFXOXVPMXh1ZlZ4dUlsMTlcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2FjdGlvbnMvZWFzaW5nL2NyZWF0ZS1lYXNpbmcuanNcbiAqKiBtb2R1bGUgaWQgPSA1MFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0cy5kZWZhdWx0ID0gY3ViaWNCZXppZXI7XG4vKlxuICBCZXppZXIgZnVuY3Rpb24gZ2VuZXJhdG9yXG4gICAgXG4gIEdhw6t0YW4gUmVuYXVkZWF1J3MgQmV6aWVyRWFzaW5nXG4gIGh0dHBzOi8vZ2l0aHViLmNvbS9ncmUvYmV6aWVyLWVhc2luZy9ibG9iL21hc3Rlci9pbmRleC5qcyAgXG4gIGh0dHBzOi8vZ2l0aHViLmNvbS9ncmUvYmV6aWVyLWVhc2luZy9ibG9iL21hc3Rlci9MSUNFTlNFXG4gIFlvdSdyZSBhIGhlcm9cbiAgXG4gIFVzZVxuICBcbiAgICB2YXIgZWFzZU91dCA9IG5ldyBCZXppZXIoLjE3LC42NywuODMsLjY3KSxcbiAgICAgIHggPSBlYXNlT3V0KDAuNSk7IC8vIHJldHVybnMgMC42MjcuLi5cbiovXG5cbi8vIENvbnN0YW50c1xudmFyIE5FV1RPTl9JVEVSQVRJT05TID0gODtcbnZhciBORVdUT05fTUlOX1NMT1BFID0gMC4wMDE7XG52YXIgU1VCRElWSVNJT05fUFJFQ0lTSU9OID0gMC4wMDAwMDAxO1xudmFyIFNVQkRJVklTSU9OX01BWF9JVEVSQVRJT05TID0gMTA7XG52YXIgS19TUExJTkVfVEFCTEVfU0laRSA9IDExO1xudmFyIEtfU0FNUExFX1NURVBfU0laRSA9IDEuMCAvIChLX1NQTElORV9UQUJMRV9TSVpFIC0gMS4wKTtcbnZhciBGTE9BVF8zMl9TVVBQT1JURUQgPSB0eXBlb2YgRmxvYXQzMkFycmF5ICE9PSAndW5kZWZpbmVkJztcblxuLy8gSGVscGVyIG1ldGhvZHNcbnZhciBhID0gZnVuY3Rpb24gKGExLCBhMikge1xuICByZXR1cm4gMS4wIC0gMy4wICogYTIgKyAzLjAgKiBhMTtcbn07XG52YXIgYiA9IGZ1bmN0aW9uIChhMSwgYTIpIHtcbiAgcmV0dXJuIDMuMCAqIGEyIC0gNi4wICogYTE7XG59O1xudmFyIGMgPSBmdW5jdGlvbiAoYTEpIHtcbiAgcmV0dXJuIDMuMCAqIGExO1xufTtcblxudmFyIGdldFNsb3BlID0gZnVuY3Rpb24gKHQsIGExLCBhMikge1xuICByZXR1cm4gMy4wICogYShhMSwgYTIpICogdCAqIHQgKyAyLjAgKiBiKGExLCBhMikgKiB0ICsgYyhhMSk7XG59O1xuXG52YXIgY2FsY0JlemllciA9IGZ1bmN0aW9uICh0LCBhMSwgYTIpIHtcbiAgcmV0dXJuICgoYShhMSwgYTIpICogdCArIGIoYTEsIGEyKSkgKiB0ICsgYyhhMSkpICogdDtcbn07XG5cbi8qXG4gIENyZWF0ZSBhIGN1YmljIGJlemllciByZXNvbHZlclxuKi9cbmZ1bmN0aW9uIGN1YmljQmV6aWVyKG1YMSwgbVkxLCBtWDIsIG1ZMikge1xuICB2YXIgc2FtcGxlVmFsdWVzID0gRkxPQVRfMzJfU1VQUE9SVEVEID8gbmV3IEZsb2F0MzJBcnJheShLX1NQTElORV9UQUJMRV9TSVpFKSA6IG5ldyBBcnJheShLX1NQTElORV9UQUJMRV9TSVpFKTtcbiAgdmFyIF9wcmVjb21wdXRlZCA9IGZhbHNlO1xuXG4gIHZhciBiaW5hcnlTdWJkaXZpZGUgPSBmdW5jdGlvbiAoYVgsIGFBLCBhQikge1xuICAgIHZhciBpID0gMDtcbiAgICB2YXIgY3VycmVudFggPSB2b2lkIDA7XG4gICAgdmFyIGN1cnJlbnRUID0gdm9pZCAwO1xuXG4gICAgZG8ge1xuICAgICAgY3VycmVudFQgPSBhQSArIChhQiAtIGFBKSAvIDIuMDtcbiAgICAgIGN1cnJlbnRYID0gY2FsY0JlemllcihjdXJyZW50VCwgbVgxLCBtWDIpIC0gYVg7XG4gICAgICBpZiAoY3VycmVudFggPiAwLjApIHtcbiAgICAgICAgYUIgPSBjdXJyZW50VDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGFBID0gY3VycmVudFQ7XG4gICAgICB9XG4gICAgfSB3aGlsZSAoTWF0aC5hYnMoY3VycmVudFgpID4gU1VCRElWSVNJT05fUFJFQ0lTSU9OICYmICsraSA8IFNVQkRJVklTSU9OX01BWF9JVEVSQVRJT05TKTtcblxuICAgIHJldHVybiBjdXJyZW50VDtcbiAgfTtcblxuICB2YXIgbmV3dG9uUmFwaHNvbkl0ZXJhdGUgPSBmdW5jdGlvbiAoYVgsIGFHdWVzc1QpIHtcbiAgICB2YXIgaSA9IDA7XG4gICAgdmFyIGN1cnJlbnRTbG9wZSA9IDA7XG4gICAgdmFyIGN1cnJlbnRYID0gdm9pZCAwO1xuXG4gICAgZm9yICg7IGkgPCBORVdUT05fSVRFUkFUSU9OUzsgKytpKSB7XG4gICAgICBjdXJyZW50U2xvcGUgPSBnZXRTbG9wZShhR3Vlc3NULCBtWDEsIG1YMik7XG5cbiAgICAgIGlmIChjdXJyZW50U2xvcGUgPT09IDAuMCkge1xuICAgICAgICByZXR1cm4gYUd1ZXNzVDtcbiAgICAgIH1cblxuICAgICAgY3VycmVudFggPSBjYWxjQmV6aWVyKGFHdWVzc1QsIG1YMSwgbVgyKSAtIGFYO1xuICAgICAgYUd1ZXNzVCAtPSBjdXJyZW50WCAvIGN1cnJlbnRTbG9wZTtcbiAgICB9XG5cbiAgICByZXR1cm4gYUd1ZXNzVDtcbiAgfTtcblxuICB2YXIgY2FsY1NhbXBsZVZhbHVlcyA9IGZ1bmN0aW9uICgpIHtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IEtfU1BMSU5FX1RBQkxFX1NJWkU7ICsraSkge1xuICAgICAgc2FtcGxlVmFsdWVzW2ldID0gY2FsY0JlemllcihpICogS19TQU1QTEVfU1RFUF9TSVpFLCBtWDEsIG1YMik7XG4gICAgfVxuICB9O1xuXG4gIHZhciBnZXRURm9yWCA9IGZ1bmN0aW9uIChhWCkge1xuICAgIHZhciBpbnRlcnZhbFN0YXJ0ID0gMC4wO1xuICAgIHZhciBjdXJyZW50U2FtcGxlID0gMTtcbiAgICB2YXIgbGFzdFNhbXBsZSA9IEtfU1BMSU5FX1RBQkxFX1NJWkUgLSAxO1xuICAgIHZhciBkaXN0ID0gMC4wO1xuICAgIHZhciBndWVzc0ZvclQgPSAwLjA7XG4gICAgdmFyIGluaXRpYWxTbG9wZSA9IDAuMDtcblxuICAgIGZvciAoOyBjdXJyZW50U2FtcGxlICE9IGxhc3RTYW1wbGUgJiYgc2FtcGxlVmFsdWVzW2N1cnJlbnRTYW1wbGVdIDw9IGFYOyArK2N1cnJlbnRTYW1wbGUpIHtcbiAgICAgIGludGVydmFsU3RhcnQgKz0gS19TQU1QTEVfU1RFUF9TSVpFO1xuICAgIH1cblxuICAgIC0tY3VycmVudFNhbXBsZTtcblxuICAgIGRpc3QgPSAoYVggLSBzYW1wbGVWYWx1ZXNbY3VycmVudFNhbXBsZV0pIC8gKHNhbXBsZVZhbHVlc1tjdXJyZW50U2FtcGxlICsgMV0gLSBzYW1wbGVWYWx1ZXNbY3VycmVudFNhbXBsZV0pO1xuICAgIGd1ZXNzRm9yVCA9IGludGVydmFsU3RhcnQgKyBkaXN0ICogS19TQU1QTEVfU1RFUF9TSVpFO1xuXG4gICAgaW5pdGlhbFNsb3BlID0gZ2V0U2xvcGUoZ3Vlc3NGb3JULCBtWDEsIG1YMik7XG5cbiAgICAvLyBJZiBzbG9wZSBpcyBncmVhdGVyIHRoYW4gbWluXG4gICAgaWYgKGluaXRpYWxTbG9wZSA+PSBORVdUT05fTUlOX1NMT1BFKSB7XG4gICAgICByZXR1cm4gbmV3dG9uUmFwaHNvbkl0ZXJhdGUoYVgsIGd1ZXNzRm9yVCk7XG4gICAgICAvLyBTbG9wZSBpcyBlcXVhbCB0byBtaW5cbiAgICB9IGVsc2UgaWYgKGluaXRpYWxTbG9wZSA9PT0gMC4wKSB7XG4gICAgICByZXR1cm4gZ3Vlc3NGb3JUO1xuICAgICAgLy8gU2xvcGUgaXMgbGVzcyB0aGFuIG1pblxuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gYmluYXJ5U3ViZGl2aWRlKGFYLCBpbnRlcnZhbFN0YXJ0LCBpbnRlcnZhbFN0YXJ0ICsgS19TQU1QTEVfU1RFUF9TSVpFKTtcbiAgICB9XG4gIH07XG5cbiAgdmFyIHByZWNvbXB1dGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgX3ByZWNvbXB1dGVkID0gdHJ1ZTtcbiAgICBpZiAobVgxICE9IG1ZMSB8fCBtWDIgIT0gbVkyKSB7XG4gICAgICBjYWxjU2FtcGxlVmFsdWVzKCk7XG4gICAgfVxuICB9O1xuXG4gIHZhciByZXNvbHZlciA9IGZ1bmN0aW9uIChhWCkge1xuICAgIHZhciByZXR1cm5WYWx1ZSA9IHZvaWQgMDtcblxuICAgIGlmICghX3ByZWNvbXB1dGVkKSB7XG4gICAgICBwcmVjb21wdXRlKCk7XG4gICAgfVxuXG4gICAgLy8gSWYgbGluZWFyIGdyYWRpZW50LCByZXR1cm4gWCBhcyBUXG4gICAgaWYgKG1YMSA9PT0gbVkxICYmIG1YMiA9PT0gbVkyKSB7XG4gICAgICByZXR1cm5WYWx1ZSA9IGFYO1xuXG4gICAgICAvLyBJZiBhdCBzdGFydCwgcmV0dXJuIDBcbiAgICB9IGVsc2UgaWYgKGFYID09PSAwKSB7XG4gICAgICByZXR1cm5WYWx1ZSA9IDA7XG5cbiAgICAgIC8vIElmIGF0IGVuZCwgcmV0dXJuIDFcbiAgICB9IGVsc2UgaWYgKGFYID09PSAxKSB7XG4gICAgICByZXR1cm5WYWx1ZSA9IDE7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVyblZhbHVlID0gY2FsY0JlemllcihnZXRURm9yWChhWCksIG1ZMSwgbVkyKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcmV0dXJuVmFsdWU7XG4gIH07XG5cbiAgcmV0dXJuIHJlc29sdmVyO1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluTnlZeTloWTNScGIyNXpMMlZoYzJsdVp5OWpjbVZoZEdVdFltVjZhV1Z5TG1weklsMHNJbTVoYldWeklqcGJYU3dpYldGd2NHbHVaM01pT2lJN096dHJRa0Z0UTNkQ0xGYzdPenM3T3pzN096czdPenM3T3pzN1FVRndRbmhDTEVsQlFVMHNiMEpCUVc5Q0xFTkJRVEZDTzBGQlEwRXNTVUZCVFN4dFFrRkJiVUlzUzBGQmVrSTdRVUZEUVN4SlFVRk5MSGRDUVVGM1FpeFRRVUU1UWp0QlFVTkJMRWxCUVUwc05rSkJRVFpDTEVWQlFXNURPMEZCUTBFc1NVRkJUU3h6UWtGQmMwSXNSVUZCTlVJN1FVRkRRU3hKUVVGTkxIRkNRVUZ4UWl4UFFVRlBMSE5DUVVGelFpeEhRVUUzUWl4RFFVRXpRanRCUVVOQkxFbEJRVTBzY1VKQlFYTkNMRTlCUVU4c1dVRkJVQ3hMUVVGM1FpeFhRVUZ3UkRzN08wRkJSMEVzU1VGQlRTeEpRVUZKTEZWQlFVTXNSVUZCUkN4RlFVRkxMRVZCUVV3N1FVRkJRU3hUUVVGWkxFMUJRVTBzVFVGQlRTeEZRVUZhTEVkQlFXbENMRTFCUVUwc1JVRkJia003UVVGQlFTeERRVUZXTzBGQlEwRXNTVUZCVFN4SlFVRkpMRlZCUVVNc1JVRkJSQ3hGUVVGTExFVkJRVXc3UVVGQlFTeFRRVUZaTEUxQlFVMHNSVUZCVGl4SFFVRlhMRTFCUVUwc1JVRkJOMEk3UVVGQlFTeERRVUZXTzBGQlEwRXNTVUZCVFN4SlFVRkpMRlZCUVVNc1JVRkJSRHRCUVVGQkxGTkJRVkVzVFVGQlRTeEZRVUZrTzBGQlFVRXNRMEZCVmpzN1FVRkZRU3hKUVVGTkxGZEJRVmNzVlVGQlF5eERRVUZFTEVWQlFVa3NSVUZCU2l4RlFVRlJMRVZCUVZJN1FVRkJRU3hUUVVGbExFMUJRVTBzUlVGQlJTeEZRVUZHTEVWQlFVMHNSVUZCVGl4RFFVRk9MRWRCUVd0Q0xFTkJRV3hDTEVkQlFYTkNMRU5CUVhSQ0xFZEJRVEJDTEUxQlFVMHNSVUZCUlN4RlFVRkdMRVZCUVUwc1JVRkJUaXhEUVVGT0xFZEJRV3RDTEVOQlFUVkRMRWRCUVdkRUxFVkJRVVVzUlVGQlJpeERRVUV2UkR0QlFVRkJMRU5CUVdwQ096dEJRVVZCTEVsQlFVMHNZVUZCWVN4VlFVRkRMRU5CUVVRc1JVRkJTU3hGUVVGS0xFVkJRVkVzUlVGQlVqdEJRVUZCTEZOQlFXVXNRMEZCUXl4RFFVRkRMRVZCUVVVc1JVRkJSaXhGUVVGTkxFVkJRVTRzU1VGQldTeERRVUZhTEVkQlFXZENMRVZCUVVVc1JVRkJSaXhGUVVGTkxFVkJRVTRzUTBGQmFrSXNTVUZCT0VJc1EwRkJPVUlzUjBGQmEwTXNSVUZCUlN4RlFVRkdMRU5CUVc1RExFbEJRVFJETEVOQlFUTkVPMEZCUVVFc1EwRkJia0k3T3pzN08wRkJTMlVzVTBGQlV5eFhRVUZVTEVOQlFYRkNMRWRCUVhKQ0xFVkJRVEJDTEVkQlFURkNMRVZCUVN0Q0xFZEJRUzlDTEVWQlFXOURMRWRCUVhCRExFVkJRWGxETzBGQlEzUkVMRTFCUVUwc1pVRkJaU3h4UWtGQmNVSXNTVUZCU1N4WlFVRktMRU5CUVdsQ0xHMUNRVUZxUWl4RFFVRnlRaXhIUVVFMlJDeEpRVUZKTEV0QlFVb3NRMEZCVlN4dFFrRkJWaXhEUVVGc1JqdEJRVU5CTEUxQlFVa3NaVUZCWlN4TFFVRnVRanM3UVVGRlFTeE5RVUZOTEd0Q1FVRnJRaXhWUVVGRExFVkJRVVFzUlVGQlN5eEZRVUZNTEVWQlFWTXNSVUZCVkN4RlFVRm5RanRCUVVOMFF5eFJRVUZKTEVsQlFVa3NRMEZCVWp0QlFVTkJMRkZCUVVrc2FVSkJRVW83UVVGRFFTeFJRVUZKTEdsQ1FVRktPenRCUVVWQkxFOUJRVWM3UVVGRFJDeHBRa0ZCVnl4TFFVRkxMRU5CUVVNc1MwRkJTeXhGUVVGT0xFbEJRVmtzUjBGQk5VSTdRVUZEUVN4cFFrRkJWeXhYUVVGWExGRkJRVmdzUlVGQmNVSXNSMEZCY2tJc1JVRkJNRUlzUjBGQk1VSXNTVUZCYVVNc1JVRkJOVU03UVVGRFFTeFZRVUZKTEZkQlFWY3NSMEZCWml4RlFVRnZRanRCUVVOc1FpeGhRVUZMTEZGQlFVdzdRVUZEUkN4UFFVWkVMRTFCUlU4N1FVRkRUQ3hoUVVGTExGRkJRVXc3UVVGRFJEdEJRVU5HTEV0QlVrUXNVVUZSVXl4TFFVRkxMRWRCUVV3c1EwRkJVeXhSUVVGVUxFbEJRWEZDTEhGQ1FVRnlRaXhKUVVFNFF5eEZRVUZGTEVOQlFVWXNSMEZCVFN3d1FrRlNOMFE3TzBGQlZVRXNWMEZCVHl4UlFVRlFPMEZCUTBRc1IwRm9Ra1E3TzBGQmEwSkJMRTFCUVUwc2RVSkJRWFZDTEZWQlFVTXNSVUZCUkN4RlFVRkxMRTlCUVV3c1JVRkJhVUk3UVVGRE5VTXNVVUZCU1N4SlFVRkpMRU5CUVZJN1FVRkRRU3hSUVVGSkxHVkJRV1VzUTBGQmJrSTdRVUZEUVN4UlFVRkpMR2xDUVVGS096dEJRVVZCTEZkQlFVOHNTVUZCU1N4cFFrRkJXQ3hGUVVFNFFpeEZRVUZGTEVOQlFXaERMRVZCUVcxRE8wRkJRMnBETEhGQ1FVRmxMRk5CUVZNc1QwRkJWQ3hGUVVGclFpeEhRVUZzUWl4RlFVRjFRaXhIUVVGMlFpeERRVUZtT3p0QlFVVkJMRlZCUVVrc2FVSkJRV2xDTEVkQlFYSkNMRVZCUVRCQ08wRkJRM2hDTEdWQlFVOHNUMEZCVUR0QlFVTkVPenRCUVVWRUxHbENRVUZYTEZkQlFWY3NUMEZCV0N4RlFVRnZRaXhIUVVGd1FpeEZRVUY1UWl4SFFVRjZRaXhKUVVGblF5eEZRVUV6UXp0QlFVTkJMR2xDUVVGWExGZEJRVmNzV1VGQmRFSTdRVUZEUkRzN1FVRkZSQ3hYUVVGUExFOUJRVkE3UVVGRFJDeEhRV3BDUkRzN1FVRnRRa0VzVFVGQlRTeHRRa0ZCYlVJc1dVRkJUVHRCUVVNM1FpeFRRVUZMTEVsQlFVa3NTVUZCU1N4RFFVRmlMRVZCUVdkQ0xFbEJRVWtzYlVKQlFYQkNMRVZCUVhsRExFVkJRVVVzUTBGQk0wTXNSVUZCT0VNN1FVRkROVU1zYlVKQlFXRXNRMEZCWWl4SlFVRnJRaXhYUVVGWExFbEJRVWtzYTBKQlFXWXNSVUZCYlVNc1IwRkJia01zUlVGQmQwTXNSMEZCZUVNc1EwRkJiRUk3UVVGRFJEdEJRVU5HTEVkQlNrUTdPMEZCVFVFc1RVRkJUU3hYUVVGWExGVkJRVU1zUlVGQlJDeEZRVUZSTzBGQlEzWkNMRkZCUVVrc1owSkJRV2RDTEVkQlFYQkNPMEZCUTBFc1VVRkJTU3huUWtGQlowSXNRMEZCY0VJN1FVRkRRU3hSUVVGSkxHRkJRV0VzYzBKQlFYTkNMRU5CUVhaRE8wRkJRMEVzVVVGQlNTeFBRVUZQTEVkQlFWZzdRVUZEUVN4UlFVRkpMRmxCUVZrc1IwRkJhRUk3UVVGRFFTeFJRVUZKTEdWQlFXVXNSMEZCYmtJN08wRkJSVUVzVjBGQlR5eHBRa0ZCYVVJc1ZVRkJha0lzU1VGQkswSXNZVUZCWVN4aFFVRmlMRXRCUVN0Q0xFVkJRWEpGTEVWQlFYbEZMRVZCUVVVc1lVRkJNMFVzUlVGQk1FWTdRVUZEZUVZc2RVSkJRV2xDTEd0Q1FVRnFRanRCUVVORU96dEJRVVZFTEUxQlFVVXNZVUZCUmpzN1FVRkZRU3hYUVVGUExFTkJRVU1zUzBGQlN5eGhRVUZoTEdGQlFXSXNRMEZCVGl4TFFVRnpReXhoUVVGaExHZENRVUZqTEVOQlFUTkNMRWxCUVdkRExHRkJRV0VzWVVGQllpeERRVUYwUlN4RFFVRlFPMEZCUTBFc1owSkJRVmtzWjBKQlFXZENMRTlCUVU4c2EwSkJRVzVET3p0QlFVVkJMRzFDUVVGbExGTkJRVk1zVTBGQlZDeEZRVUZ2UWl4SFFVRndRaXhGUVVGNVFpeEhRVUY2UWl4RFFVRm1PenM3UVVGSFFTeFJRVUZKTEdkQ1FVRm5RaXhuUWtGQmNFSXNSVUZCYzBNN1FVRkRjRU1zWVVGQlR5eHhRa0ZCY1VJc1JVRkJja0lzUlVGQmVVSXNVMEZCZWtJc1EwRkJVRHM3UVVGRlJDeExRVWhFTEUxQlIwOHNTVUZCU1N4cFFrRkJhVUlzUjBGQmNrSXNSVUZCTUVJN1FVRkRMMElzWVVGQlR5eFRRVUZRT3p0QlFVVkVMRXRCU0Uwc1RVRkhRVHRCUVVOTUxHRkJRVThzWjBKQlFXZENMRVZCUVdoQ0xFVkJRVzlDTEdGQlFYQkNMRVZCUVcxRExHZENRVUZuUWl4clFrRkJia1FzUTBGQlVEdEJRVU5FTzBGQlEwWXNSMEUzUWtRN08wRkJLMEpCTEUxQlFVMHNZVUZCWVN4WlFVRk5PMEZCUTNaQ0xHMUNRVUZsTEVsQlFXWTdRVUZEUVN4UlFVRkpMRTlCUVU4c1IwRkJVQ3hKUVVGakxFOUJRVThzUjBGQmVrSXNSVUZCT0VJN1FVRkROVUk3UVVGRFJEdEJRVU5HTEVkQlRFUTdPMEZCVDBFc1RVRkJUU3hYUVVGWExGVkJRVU1zUlVGQlJDeEZRVUZSTzBGQlEzWkNMRkZCUVVrc2IwSkJRVW83TzBGQlJVRXNVVUZCU1N4RFFVRkRMRmxCUVV3c1JVRkJiVUk3UVVGRGFrSTdRVUZEUkRzN08wRkJSMFFzVVVGQlNTeFJRVUZSTEVkQlFWSXNTVUZCWlN4UlFVRlJMRWRCUVROQ0xFVkJRV2RETzBGQlF6bENMRzlDUVVGakxFVkJRV1E3T3p0QlFVZEVMRXRCU2tRc1RVRkpUeXhKUVVGSkxFOUJRVThzUTBGQldDeEZRVUZqTzBGQlEyNUNMRzlDUVVGakxFTkJRV1E3T3p0QlFVZEVMRXRCU2swc1RVRkpRU3hKUVVGSkxFOUJRVThzUTBGQldDeEZRVUZqTzBGQlEyNUNMRzlDUVVGakxFTkJRV1E3UVVGRlJDeExRVWhOTEUxQlIwRTdRVUZEVEN4dlFrRkJZeXhYUVVGWExGTkJRVk1zUlVGQlZDeERRVUZZTEVWQlFYbENMRWRCUVhwQ0xFVkJRVGhDTEVkQlFUbENMRU5CUVdRN1FVRkRSRHM3UVVGRlJDeFhRVUZQTEZkQlFWQTdRVUZEUkN4SFFYaENSRHM3UVVFd1FrRXNVMEZCVHl4UlFVRlFPMEZCUTBRaUxDSm1hV3hsSWpvaVkzSmxZWFJsTFdKbGVtbGxjaTVxY3lJc0luTnZkWEpqWlZKdmIzUWlPaUl2VlhObGNuTXZiV0YwZEhCbGNuSjVMMU5wZEdWekwzQnZjRzF2ZEdsdmJpSXNJbk52ZFhKalpYTkRiMjUwWlc1MElqcGJJaThxWEc0Z0lFSmxlbWxsY2lCbWRXNWpkR2x2YmlCblpXNWxjbUYwYjNKY2JpQWdJQ0JjYmlBZ1IySERxM1JoYmlCU1pXNWhkV1JsWVhVbmN5QkNaWHBwWlhKRllYTnBibWRjYmlBZ2FIUjBjSE02THk5bmFYUm9kV0l1WTI5dEwyZHlaUzlpWlhwcFpYSXRaV0Z6YVc1bkwySnNiMkl2YldGemRHVnlMMmx1WkdWNExtcHpJQ0JjYmlBZ2FIUjBjSE02THk5bmFYUm9kV0l1WTI5dEwyZHlaUzlpWlhwcFpYSXRaV0Z6YVc1bkwySnNiMkl2YldGemRHVnlMMHhKUTBWT1UwVmNiaUFnV1c5MUozSmxJR0VnYUdWeWIxeHVJQ0JjYmlBZ1ZYTmxYRzRnSUZ4dUlDQWdJSFpoY2lCbFlYTmxUM1YwSUQwZ2JtVjNJRUpsZW1sbGNpZ3VNVGNzTGpZM0xDNDRNeXd1TmpjcExGeHVJQ0FnSUNBZ2VDQTlJR1ZoYzJWUGRYUW9NQzQxS1RzZ0x5OGdjbVYwZFhKdWN5QXdMall5Tnk0dUxseHVLaTljYmx4dUx5OGdRMjl1YzNSaGJuUnpYRzVqYjI1emRDQk9SVmRVVDA1ZlNWUkZVa0ZVU1U5T1V5QTlJRGc3WEc1amIyNXpkQ0JPUlZkVVQwNWZUVWxPWDFOTVQxQkZJRDBnTUM0d01ERTdYRzVqYjI1emRDQlRWVUpFU1ZaSlUwbFBUbDlRVWtWRFNWTkpUMDRnUFNBd0xqQXdNREF3TURFN1hHNWpiMjV6ZENCVFZVSkVTVlpKVTBsUFRsOU5RVmhmU1ZSRlVrRlVTVTlPVXlBOUlERXdPMXh1WTI5dWMzUWdTMTlUVUV4SlRrVmZWRUZDVEVWZlUwbGFSU0E5SURFeE8xeHVZMjl1YzNRZ1MxOVRRVTFRVEVWZlUxUkZVRjlUU1ZwRklEMGdNUzR3SUM4Z0tFdGZVMUJNU1U1RlgxUkJRa3hGWDFOSldrVWdMU0F4TGpBcE8xeHVZMjl1YzNRZ1JreFBRVlJmTXpKZlUxVlFVRTlTVkVWRUlEMGdLSFI1Y0dWdlppQkdiRzloZERNeVFYSnlZWGtnSVQwOUlDZDFibVJsWm1sdVpXUW5LVHRjYmx4dUx5OGdTR1ZzY0dWeUlHMWxkR2h2WkhOY2JtTnZibk4wSUdFZ1BTQW9ZVEVzSUdFeUtTQTlQaUF4TGpBZ0xTQXpMakFnS2lCaE1pQXJJRE11TUNBcUlHRXhPMXh1WTI5dWMzUWdZaUE5SUNoaE1Td2dZVElwSUQwK0lETXVNQ0FxSUdFeUlDMGdOaTR3SUNvZ1lURTdYRzVqYjI1emRDQmpJRDBnS0dFeEtTQTlQaUF6TGpBZ0tpQmhNVHRjYmx4dVkyOXVjM1FnWjJWMFUyeHZjR1VnUFNBb2RDd2dZVEVzSUdFeUtTQTlQaUF6TGpBZ0tpQmhLR0V4TENCaE1pa2dLaUIwSUNvZ2RDQXJJREl1TUNBcUlHSW9ZVEVzSUdFeUtTQXFJSFFnS3lCaktHRXhLVHRjYmx4dVkyOXVjM1FnWTJGc1kwSmxlbWxsY2lBOUlDaDBMQ0JoTVN3Z1lUSXBJRDArSUNnb1lTaGhNU3dnWVRJcElDb2dkQ0FySUdJb1lURXNJR0V5S1NrZ0tpQjBJQ3NnWXloaE1Ta3BJQ29nZER0Y2JseHVMeXBjYmlBZ1EzSmxZWFJsSUdFZ1kzVmlhV01nWW1WNmFXVnlJSEpsYzI5c2RtVnlYRzRxTDF4dVpYaHdiM0owSUdSbFptRjFiSFFnWm5WdVkzUnBiMjRnWTNWaWFXTkNaWHBwWlhJb2JWZ3hMQ0J0V1RFc0lHMVlNaXdnYlZreUtTQjdYRzRnSUdOdmJuTjBJSE5oYlhCc1pWWmhiSFZsY3lBOUlFWk1UMEZVWHpNeVgxTlZVRkJQVWxSRlJDQS9JRzVsZHlCR2JHOWhkRE15UVhKeVlYa29TMTlUVUV4SlRrVmZWRUZDVEVWZlUwbGFSU2tnT2lCdVpYY2dRWEp5WVhrb1MxOVRVRXhKVGtWZlZFRkNURVZmVTBsYVJTazdYRzRnSUd4bGRDQmZjSEpsWTI5dGNIVjBaV1FnUFNCbVlXeHpaVHRjYmx4dUlDQmpiMjV6ZENCaWFXNWhjbmxUZFdKa2FYWnBaR1VnUFNBb1lWZ3NJR0ZCTENCaFFpa2dQVDRnZTF4dUlDQWdJR3hsZENCcElEMGdNRHRjYmlBZ0lDQnNaWFFnWTNWeWNtVnVkRmc3WEc0Z0lDQWdiR1YwSUdOMWNuSmxiblJVTzF4dVhHNGdJQ0FnWkc4Z2UxeHVJQ0FnSUNBZ1kzVnljbVZ1ZEZRZ1BTQmhRU0FySUNoaFFpQXRJR0ZCS1NBdklESXVNRHRjYmlBZ0lDQWdJR04xY25KbGJuUllJRDBnWTJGc1kwSmxlbWxsY2loamRYSnlaVzUwVkN3Z2JWZ3hMQ0J0V0RJcElDMGdZVmc3WEc0Z0lDQWdJQ0JwWmlBb1kzVnljbVZ1ZEZnZ1BpQXdMakFwSUh0Y2JpQWdJQ0FnSUNBZ1lVSWdQU0JqZFhKeVpXNTBWRHRjYmlBZ0lDQWdJSDBnWld4elpTQjdYRzRnSUNBZ0lDQWdJR0ZCSUQwZ1kzVnljbVZ1ZEZRN1hHNGdJQ0FnSUNCOVhHNGdJQ0FnZlNCM2FHbHNaU0FvVFdGMGFDNWhZbk1vWTNWeWNtVnVkRmdwSUQ0Z1UxVkNSRWxXU1ZOSlQwNWZVRkpGUTBsVFNVOU9JQ1ltSUNzcmFTQThJRk5WUWtSSlZrbFRTVTlPWDAxQldGOUpWRVZTUVZSSlQwNVRLVHRjYmx4dUlDQWdJSEpsZEhWeWJpQmpkWEp5Wlc1MFZEdGNiaUFnZlR0Y2JseHVJQ0JqYjI1emRDQnVaWGQwYjI1U1lYQm9jMjl1U1hSbGNtRjBaU0E5SUNoaFdDd2dZVWQxWlhOelZDa2dQVDRnZTF4dUlDQWdJR3hsZENCcElEMGdNRHRjYmlBZ0lDQnNaWFFnWTNWeWNtVnVkRk5zYjNCbElEMGdNRHRjYmlBZ0lDQnNaWFFnWTNWeWNtVnVkRmc3WEc1Y2JpQWdJQ0JtYjNJZ0tEc2dhU0E4SUU1RlYxUlBUbDlKVkVWU1FWUkpUMDVUT3lBcksya3BJSHRjYmlBZ0lDQWdJR04xY25KbGJuUlRiRzl3WlNBOUlHZGxkRk5zYjNCbEtHRkhkV1Z6YzFRc0lHMVlNU3dnYlZneUtUdGNiaUFnSUNBZ0lGeHVJQ0FnSUNBZ2FXWWdLR04xY25KbGJuUlRiRzl3WlNBOVBUMGdNQzR3S1NCN1hHNGdJQ0FnSUNBZ0lISmxkSFZ5YmlCaFIzVmxjM05VTzF4dUlDQWdJQ0FnZlZ4dUlDQWdJQ0FnWEc0Z0lDQWdJQ0JqZFhKeVpXNTBXQ0E5SUdOaGJHTkNaWHBwWlhJb1lVZDFaWE56VkN3Z2JWZ3hMQ0J0V0RJcElDMGdZVmc3WEc0Z0lDQWdJQ0JoUjNWbGMzTlVJQzA5SUdOMWNuSmxiblJZSUM4Z1kzVnljbVZ1ZEZOc2IzQmxPMXh1SUNBZ0lIMWNiaUFnSUNCY2JpQWdJQ0J5WlhSMWNtNGdZVWQxWlhOelZEdGNiaUFnZlR0Y2JseHVJQ0JqYjI1emRDQmpZV3hqVTJGdGNHeGxWbUZzZFdWeklEMGdLQ2tnUFQ0Z2UxeHVJQ0FnSUdadmNpQW9iR1YwSUdrZ1BTQXdPeUJwSUR3Z1MxOVRVRXhKVGtWZlZFRkNURVZmVTBsYVJUc2dLeXRwS1NCN1hHNGdJQ0FnSUNCellXMXdiR1ZXWVd4MVpYTmJhVjBnUFNCallXeGpRbVY2YVdWeUtHa2dLaUJMWDFOQlRWQk1SVjlUVkVWUVgxTkpXa1VzSUcxWU1Td2diVmd5S1R0Y2JpQWdJQ0I5WEc0Z0lIMDdYRzVjYmlBZ1kyOXVjM1FnWjJWMFZFWnZjbGdnUFNBb1lWZ3BJRDArSUh0Y2JpQWdJQ0JzWlhRZ2FXNTBaWEoyWVd4VGRHRnlkQ0E5SURBdU1EdGNiaUFnSUNCc1pYUWdZM1Z5Y21WdWRGTmhiWEJzWlNBOUlERTdYRzRnSUNBZ2JHVjBJR3hoYzNSVFlXMXdiR1VnUFNCTFgxTlFURWxPUlY5VVFVSk1SVjlUU1ZwRklDMGdNVHRjYmlBZ0lDQnNaWFFnWkdsemRDQTlJREF1TUR0Y2JpQWdJQ0JzWlhRZ1ozVmxjM05HYjNKVUlEMGdNQzR3TzF4dUlDQWdJR3hsZENCcGJtbDBhV0ZzVTJ4dmNHVWdQU0F3TGpBN1hHNGdJQ0FnSUNCY2JpQWdJQ0JtYjNJZ0tEc2dZM1Z5Y21WdWRGTmhiWEJzWlNBaFBTQnNZWE4wVTJGdGNHeGxJQ1ltSUhOaGJYQnNaVlpoYkhWbGMxdGpkWEp5Wlc1MFUyRnRjR3hsWFNBOFBTQmhXRHNnS3l0amRYSnlaVzUwVTJGdGNHeGxLU0I3WEc0Z0lDQWdJQ0JwYm5SbGNuWmhiRk4wWVhKMElDczlJRXRmVTBGTlVFeEZYMU5VUlZCZlUwbGFSVHRjYmlBZ0lDQjlYRzRnSUNBZ1hHNGdJQ0FnTFMxamRYSnlaVzUwVTJGdGNHeGxPMXh1SUNBZ0lGeHVJQ0FnSUdScGMzUWdQU0FvWVZnZ0xTQnpZVzF3YkdWV1lXeDFaWE5iWTNWeWNtVnVkRk5oYlhCc1pWMHBJQzhnS0hOaGJYQnNaVlpoYkhWbGMxdGpkWEp5Wlc1MFUyRnRjR3hsS3pGZElDMGdjMkZ0Y0d4bFZtRnNkV1Z6VzJOMWNuSmxiblJUWVcxd2JHVmRLVHRjYmlBZ0lDQm5kV1Z6YzBadmNsUWdQU0JwYm5SbGNuWmhiRk4wWVhKMElDc2daR2x6ZENBcUlFdGZVMEZOVUV4RlgxTlVSVkJmVTBsYVJUdGNiaUFnSUNCY2JpQWdJQ0JwYm1sMGFXRnNVMnh2Y0dVZ1BTQm5aWFJUYkc5d1pTaG5kV1Z6YzBadmNsUXNJRzFZTVN3Z2JWZ3lLVHRjYmlBZ0lDQmNiaUFnSUNBdkx5QkpaaUJ6Ykc5d1pTQnBjeUJuY21WaGRHVnlJSFJvWVc0Z2JXbHVYRzRnSUNBZ2FXWWdLR2x1YVhScFlXeFRiRzl3WlNBK1BTQk9SVmRVVDA1ZlRVbE9YMU5NVDFCRktTQjdYRzRnSUNBZ0lDQnlaWFIxY200Z2JtVjNkRzl1VW1Gd2FITnZia2wwWlhKaGRHVW9ZVmdzSUdkMVpYTnpSbTl5VkNrN1hHNGdJQ0FnTHk4Z1UyeHZjR1VnYVhNZ1pYRjFZV3dnZEc4Z2JXbHVYRzRnSUNBZ2ZTQmxiSE5sSUdsbUlDaHBibWwwYVdGc1UyeHZjR1VnUFQwOUlEQXVNQ2tnZTF4dUlDQWdJQ0FnY21WMGRYSnVJR2QxWlhOelJtOXlWRHRjYmlBZ0lDQXZMeUJUYkc5d1pTQnBjeUJzWlhOeklIUm9ZVzRnYldsdVhHNGdJQ0FnZlNCbGJITmxJSHRjYmlBZ0lDQWdJSEpsZEhWeWJpQmlhVzVoY25sVGRXSmthWFpwWkdVb1lWZ3NJR2x1ZEdWeWRtRnNVM1JoY25Rc0lHbHVkR1Z5ZG1Gc1UzUmhjblFnS3lCTFgxTkJUVkJNUlY5VFZFVlFYMU5KV2tVcE8xeHVJQ0FnSUgxY2JpQWdmVHRjYmx4dUlDQmpiMjV6ZENCd2NtVmpiMjF3ZFhSbElEMGdLQ2tnUFQ0Z2UxeHVJQ0FnSUY5d2NtVmpiMjF3ZFhSbFpDQTlJSFJ5ZFdVN1hHNGdJQ0FnYVdZZ0tHMVlNU0FoUFNCdFdURWdmSHdnYlZneUlDRTlJRzFaTWlrZ2UxeHVJQ0FnSUNBZ1kyRnNZMU5oYlhCc1pWWmhiSFZsY3lncE8xeHVJQ0FnSUgxY2JpQWdmVHRjYmx4dUlDQmpiMjV6ZENCeVpYTnZiSFpsY2lBOUlDaGhXQ2tnUFQ0Z2UxeHVJQ0FnSUd4bGRDQnlaWFIxY201V1lXeDFaVHRjYmx4dUlDQWdJR2xtSUNnaFgzQnlaV052YlhCMWRHVmtLU0I3WEc0Z0lDQWdJQ0J3Y21WamIyMXdkWFJsS0NrN1hHNGdJQ0FnZlZ4dUlDQWdJRnh1SUNBZ0lDOHZJRWxtSUd4cGJtVmhjaUJuY21Ga2FXVnVkQ3dnY21WMGRYSnVJRmdnWVhNZ1ZGeHVJQ0FnSUdsbUlDaHRXREVnUFQwOUlHMVpNU0FtSmlCdFdESWdQVDA5SUcxWk1pa2dlMXh1SUNBZ0lDQWdjbVYwZFhKdVZtRnNkV1VnUFNCaFdEdGNiaUFnSUNBZ0lGeHVJQ0FnSUM4dklFbG1JR0YwSUhOMFlYSjBMQ0J5WlhSMWNtNGdNRnh1SUNBZ0lIMGdaV3h6WlNCcFppQW9ZVmdnUFQwOUlEQXBJSHRjYmlBZ0lDQWdJSEpsZEhWeWJsWmhiSFZsSUQwZ01EdGNiaUFnSUNBZ0lGeHVJQ0FnSUM4dklFbG1JR0YwSUdWdVpDd2djbVYwZFhKdUlERmNiaUFnSUNCOUlHVnNjMlVnYVdZZ0tHRllJRDA5UFNBeEtTQjdYRzRnSUNBZ0lDQnlaWFIxY201V1lXeDFaU0E5SURFN1hHNWNiaUFnSUNCOUlHVnNjMlVnZTF4dUlDQWdJQ0FnY21WMGRYSnVWbUZzZFdVZ1BTQmpZV3hqUW1WNmFXVnlLR2RsZEZSR2IzSllLR0ZZS1N3Z2JWa3hMQ0J0V1RJcE8xeHVJQ0FnSUgxY2JpQWdJQ0JjYmlBZ0lDQnlaWFIxY200Z2NtVjBkWEp1Vm1Gc2RXVTdYRzRnSUgwN1hHNWNiaUFnY21WMGRYSnVJSEpsYzI5c2RtVnlPMXh1ZlZ4dUlsMTlcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2FjdGlvbnMvZWFzaW5nL2NyZWF0ZS1iZXppZXIuanNcbiAqKiBtb2R1bGUgaWQgPSA1MVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuLypcbiAgRGV0ZWN0IGFuZCBsb2FkIGFuIGFwcHJvcHJpYXRlIGNsb2NrIHNldHRpbmcgZm9yIHRoZSBlbnZpcm9ubWVudFxuKi9cblxudmFyIGhhc1JBRiA9IHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUgPyB0cnVlIDogZmFsc2U7XG5cbnZhciB0aWNrID0gdm9pZCAwO1xuXG5pZiAoaGFzUkFGKSB7XG4gIHRpY2sgPSBmdW5jdGlvbiAoY2FsbGJhY2spIHtcbiAgICByZXR1cm4gd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZShjYWxsYmFjayk7XG4gIH07XG59IGVsc2Uge1xuICAoZnVuY3Rpb24gKCkge1xuICAgIC8qXG4gICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUgcG9seWZpbGxcbiAgICAgIFxuICAgICAgRm9yIElFOC85IEZsaW5zdG9uZXMgYW5kIG5vbi1icm93c2VyIGVudmlyb25tZW50c1xuICAgICAgIFRha2VuIGZyb20gUGF1bCBJcmlzaC4gV2UndmUgc3RyaXBwZWQgb3V0IGNhbmNlbEFuaW1hdGlvbkZyYW1lIGNoZWNrcyBiZWNhdXNlIHdlIGRvbid0IGZveCB3aXRoIHRoYXRcbiAgICAgIFxuICAgICAgaHR0cDovL3BhdWxpcmlzaC5jb20vMjAxMS9yZXF1ZXN0YW5pbWF0aW9uZnJhbWUtZm9yLXNtYXJ0LWFuaW1hdGluZy9cbiAgICAgIGh0dHA6Ly9teS5vcGVyYS5jb20vZW1vbGxlci9ibG9nLzIwMTEvMTIvMjAvcmVxdWVzdGFuaW1hdGlvbmZyYW1lLWZvci1zbWFydC1lci1hbmltYXRpbmdcbiAgICAgICBcbiAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSBwb2x5ZmlsbCBieSBFcmlrIE3DtmxsZXIuIGZpeGVzIGZyb20gUGF1bCBJcmlzaCBhbmQgVGlubyBaaWpkZWxcbiAgICAgICBcbiAgICAgIE1JVCBsaWNlbnNlXG4gICAgKi9cbiAgICB2YXIgbGFzdFRpbWUgPSAwO1xuXG4gICAgdGljayA9IGZ1bmN0aW9uIChjYWxsYmFjaykge1xuICAgICAgdmFyIGN1cnJlbnRUaW1lID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XG4gICAgICB2YXIgdGltZVRvQ2FsbCA9IE1hdGgubWF4KDAsIDE2IC0gKGN1cnJlbnRUaW1lIC0gbGFzdFRpbWUpKTtcblxuICAgICAgbGFzdFRpbWUgPSBjdXJyZW50VGltZSArIHRpbWVUb0NhbGw7XG5cbiAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gY2FsbGJhY2sobGFzdFRpbWUpO1xuICAgICAgfSwgdGltZVRvQ2FsbCk7XG4gICAgfTtcbiAgfSkoKTtcbn1cblxuZXhwb3J0cy5kZWZhdWx0ID0gdGljaztcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbk55WXk5MFlYTnJMM1JwWTJzdWFuTWlYU3dpYm1GdFpYTWlPbHRkTENKdFlYQndhVzVuY3lJNklqczdPenM3T3p0QlFVbEJMRWxCUVUwc1UwRkJWU3hQUVVGUExFMUJRVkFzUzBGQmEwSXNWMEZCYkVJc1NVRkJhVU1zVDBGQlR5eHhRa0ZCZWtNc1IwRkJhMFVzU1VGQmJFVXNSMEZCZVVVc1MwRkJlRVk3TzBGQlJVRXNTVUZCU1N4aFFVRktPenRCUVVWQkxFbEJRVWtzVFVGQlNpeEZRVUZaTzBGQlExWXNVMEZCVHl4VlFVRkRMRkZCUVVRN1FVRkJRU3hYUVVGakxFOUJRVThzY1VKQlFWQXNRMEZCTmtJc1VVRkJOMElzUTBGQlpEdEJRVUZCTEVkQlFWQTdRVUZGUkN4RFFVaEVMRTFCUjA4N1FVRkJRVHM3T3pzN096czdPenM3T3pzN1FVRmxUQ3hSUVVGSkxGZEJRVmNzUTBGQlpqczdRVUZGUVN4WFFVRlBMRlZCUVVNc1VVRkJSQ3hGUVVGak8wRkJRMjVDTEZWQlFVMHNZMEZCWXl4SlFVRkpMRWxCUVVvc1IwRkJWeXhQUVVGWUxFVkJRWEJDTzBGQlEwRXNWVUZCVFN4aFFVRmhMRXRCUVVzc1IwRkJUQ3hEUVVGVExFTkJRVlFzUlVGQldTeE5RVUZOTEdOQlFXTXNVVUZCY0VJc1EwRkJXaXhEUVVGdVFqczdRVUZGUVN4cFFrRkJWeXhqUVVGakxGVkJRWHBDT3p0QlFVVkJMR2xDUVVGWE8wRkJRVUVzWlVGQlRTeFRRVUZUTEZGQlFWUXNRMEZCVGp0QlFVRkJMRTlCUVZnc1JVRkJjVU1zVlVGQmNrTTdRVUZEUkN4TFFWQkVPMEZCYWtKTE8wRkJlVUpPT3p0clFrRkZZeXhKSWl3aVptbHNaU0k2SW5ScFkyc3Vhbk1pTENKemIzVnlZMlZTYjI5MElqb2lMMVZ6WlhKekwyMWhkSFJ3WlhKeWVTOVRhWFJsY3k5d2IzQnRiM1JwYjI0aUxDSnpiM1Z5WTJWelEyOXVkR1Z1ZENJNld5SXZLbHh1SUNCRVpYUmxZM1FnWVc1a0lHeHZZV1FnWVc0Z1lYQndjbTl3Y21saGRHVWdZMnh2WTJzZ2MyVjBkR2x1WnlCbWIzSWdkR2hsSUdWdWRtbHliMjV0Wlc1MFhHNHFMMXh1WEc1amIyNXpkQ0JvWVhOU1FVWWdQU0FvZEhsd1pXOW1JSGRwYm1SdmR5QWhQVDBnSjNWdVpHVm1hVzVsWkNjZ0ppWWdkMmx1Wkc5M0xuSmxjWFZsYzNSQmJtbHRZWFJwYjI1R2NtRnRaU2tnUHlCMGNuVmxJRG9nWm1Gc2MyVTdYRzVjYm14bGRDQjBhV05yTzF4dVhHNXBaaUFvYUdGelVrRkdLU0I3WEc0Z0lIUnBZMnNnUFNBb1kyRnNiR0poWTJzcElEMCtJSGRwYm1SdmR5NXlaWEYxWlhOMFFXNXBiV0YwYVc5dVJuSmhiV1VvWTJGc2JHSmhZMnNwTzF4dVhHNTlJR1ZzYzJVZ2UxeHVJQ0F2S2x4dUlDQWdJSEpsY1hWbGMzUkJibWx0WVhScGIyNUdjbUZ0WlNCd2IyeDVabWxzYkZ4dUlDQWdJRnh1SUNBZ0lFWnZjaUJKUlRndk9TQkdiR2x1YzNSdmJtVnpJR0Z1WkNCdWIyNHRZbkp2ZDNObGNpQmxiblpwY205dWJXVnVkSE5jYmx4dUlDQWdJRlJoYTJWdUlHWnliMjBnVUdGMWJDQkpjbWx6YUM0Z1YyVW5kbVVnYzNSeWFYQndaV1FnYjNWMElHTmhibU5sYkVGdWFXMWhkR2x2YmtaeVlXMWxJR05vWldOcmN5QmlaV05oZFhObElIZGxJR1J2YmlkMElHWnZlQ0IzYVhSb0lIUm9ZWFJjYmlBZ0lDQmNiaUFnSUNCb2RIUndPaTh2Y0dGMWJHbHlhWE5vTG1OdmJTOHlNREV4TDNKbGNYVmxjM1JoYm1sdFlYUnBiMjVtY21GdFpTMW1iM0l0YzIxaGNuUXRZVzVwYldGMGFXNW5MMXh1SUNBZ0lHaDBkSEE2THk5dGVTNXZjR1Z5WVM1amIyMHZaVzF2Ykd4bGNpOWliRzluTHpJd01URXZNVEl2TWpBdmNtVnhkV1Z6ZEdGdWFXMWhkR2x2Ym1aeVlXMWxMV1p2Y2kxemJXRnlkQzFsY2kxaGJtbHRZWFJwYm1kY2JpQWdJQ0FnWEc0Z0lDQWdjbVZ4ZFdWemRFRnVhVzFoZEdsdmJrWnlZVzFsSUhCdmJIbG1hV3hzSUdKNUlFVnlhV3NnVGNPMmJHeGxjaTRnWm1sNFpYTWdabkp2YlNCUVlYVnNJRWx5YVhOb0lHRnVaQ0JVYVc1dklGcHBhbVJsYkZ4dUlDQWdJQ0JjYmlBZ0lDQk5TVlFnYkdsalpXNXpaVnh1SUNBcUwxeHVJQ0JzWlhRZ2JHRnpkRlJwYldVZ1BTQXdPMXh1WEc0Z0lIUnBZMnNnUFNBb1kyRnNiR0poWTJzcElEMCtJSHRjYmlBZ0lDQmpiMjV6ZENCamRYSnlaVzUwVkdsdFpTQTlJRzVsZHlCRVlYUmxLQ2t1WjJWMFZHbHRaU2dwTzF4dUlDQWdJR052Ym5OMElIUnBiV1ZVYjBOaGJHd2dQU0JOWVhSb0xtMWhlQ2d3TENBeE5pQXRJQ2hqZFhKeVpXNTBWR2x0WlNBdElHeGhjM1JVYVcxbEtTazdYRzVjYmlBZ0lDQnNZWE4wVkdsdFpTQTlJR04xY25KbGJuUlVhVzFsSUNzZ2RHbHRaVlJ2UTJGc2JEdGNibHh1SUNBZ0lITmxkRlJwYldWdmRYUW9LQ2tnUFQ0Z1kyRnNiR0poWTJzb2JHRnpkRlJwYldVcExDQjBhVzFsVkc5RFlXeHNLVHRjYmlBZ2ZUdGNibjFjYmx4dVpYaHdiM0owSUdSbFptRjFiSFFnZEdsamF6c2lYWDA9XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy90YXNrL3RpY2suanNcbiAqKiBtb2R1bGUgaWQgPSA1MlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG4vLyBbaW50XTogSW5jcmVtZW50ZWQgZm9yIGVhY2ggbmV3IHJ1bm5pbmcgdGFza1xudmFyIGN1cnJlbnRUYXNrSWQgPSAwO1xuXG4vLyBbaW50XTogTnVtYmVyIG9mIGFsbCBydW5uaW5nIHRhc2tlc1xudmFyIHRvdGFsUnVubmluZ0NvdW50ID0gMDtcblxuLy8gW2ludF06IE51bWJlciBvZiBydW5uaW5nIHRhc2tlcyBleGNsdWRpbmcgYmFja2dyb3VuZCB0YXNrZXNcbnZhciBub25CYWNrZ3JvdW5kUnVubmluZ0NvdW50ID0gMDtcblxuLy8gW2FycmF5XTogQXJyYXkgb2YgcnVubmluZyB0YXNrIElEc1xudmFyIHJ1bm5pbmdJZHMgPSBbXTtcblxuLy8gW29iamVjdF06IE1hcCBvZiBydW5uaW5nIHRhc2tlc1xudmFyIGFjdGl2ZVRhc2tzID0ge307XG5cbi8vIFthcnJheV06IEFycmF5IG9mIHRhc2sgSURzIHF1ZXVlZCBmb3IgYWN0aXZhdGlvblxudmFyIGFjdGl2YXRlUXVldWUgPSBbXTtcblxuLy8gW2FycmF5XTogQXJyYXkgb2YgdGFzayBJRHMgcXVldWVkIGZvciBkZWFjdGl2YXRpb25cbnZhciBkZWFjdGl2YXRlUXVldWUgPSBbXTtcblxuLypcbiAgVXBkYXRlIGFjdGl2YXRlL2RlYWN0aXZhdGUgcXVldWVzXG5cbiAgQHBhcmFtIFtudW1iZXJdXG4gIEBwYXJhbSBbYXJyYXldXG4gIEBwYXJhbSBbYXJyYXldXG4qL1xudmFyIHVwZGF0ZVF1ZXVlcyA9IGZ1bmN0aW9uIChpZCwgaW5MaXN0LCBvdXRMaXN0KSB7XG4gIHZhciBpblBvc2l0aW9uID0gaW5MaXN0LmluZGV4T2YoaWQpO1xuICB2YXIgb3V0UG9zaXRpb24gPSBvdXRMaXN0LmluZGV4T2YoaWQpO1xuXG4gIGlmIChpblBvc2l0aW9uID09PSAtMSkge1xuICAgIGluTGlzdC5wdXNoKGlkKTtcbiAgfVxuXG4gIGlmIChvdXRQb3NpdGlvbiA+IC0xKSB7XG4gICAgb3V0TGlzdC5zcGxpY2Uob3V0UG9zaXRpb24sIDEpO1xuICB9XG59O1xuXG4vKlxuICBVcGRhdGUgcnVubmluZ1xuXG4gIFtib29sZWFuXTogYHRydWVgIHRvIGFkZFxuICBbYm9vbGVhbl06IGB0cnVlYCBpZiBsYXp5XG4qL1xudmFyIHVwZGF0ZVJ1bm5pbmdDb3VudCA9IGZ1bmN0aW9uIChhZGQsIGlzTGF6eSkge1xuICB2YXIgbW9kaWZ5ID0gYWRkID8gMSA6IC0xO1xuXG4gIHRvdGFsUnVubmluZ0NvdW50ICs9IG1vZGlmeTtcblxuICBpZiAoIWlzTGF6eSkge1xuICAgIG5vbkJhY2tncm91bmRSdW5uaW5nQ291bnQgKz0gbW9kaWZ5O1xuICB9XG59O1xuXG5leHBvcnRzLmRlZmF1bHQgPSB7XG4gIGFjdGl2ZVRhc2tzOiBhY3RpdmVUYXNrcyxcblxuICAvLyBBY3RpdmF0ZSBhIHRhc2tcbiAgYWN0aXZhdGU6IGZ1bmN0aW9uIChpZCwgdGFzaykge1xuICAgIGFjdGl2ZVRhc2tzW2lkXSA9IHRhc2s7XG4gICAgdGFzay5pc0FjdGl2ZSA9IHRydWU7XG4gICAgdXBkYXRlUXVldWVzKGlkLCBhY3RpdmF0ZVF1ZXVlLCBkZWFjdGl2YXRlUXVldWUpO1xuXG4gICAgaWYgKHRhc2sub25BY3RpdmF0ZSkge1xuICAgICAgdGFzay5vbkFjdGl2YXRlKHRhc2spO1xuICAgIH1cblxuICAgIGlmICh0YXNrLm9uQWN0aXZhdGVPbmNlKSB7XG4gICAgICB0YXNrLm9uQWN0aXZhdGVPbmNlKHRhc2spO1xuICAgIH1cbiAgfSxcblxuICAvLyBEZWFjdGl2YXRlIGEgdGFza1xuICBkZWFjdGl2YXRlOiBmdW5jdGlvbiAoaWQpIHtcbiAgICB2YXIgdGFzayA9IGFjdGl2ZVRhc2tzW2lkXTtcblxuICAgIGlmICh0YXNrKSB7XG4gICAgICB1cGRhdGVRdWV1ZXMoaWQsIGRlYWN0aXZhdGVRdWV1ZSwgYWN0aXZhdGVRdWV1ZSk7XG4gICAgICB0YXNrLmlzQWN0aXZlID0gZmFsc2U7XG5cbiAgICAgIGlmICh0YXNrLm9uRGVhY3RpdmF0ZSkge1xuICAgICAgICB0YXNrLm9uRGVhY3RpdmF0ZSh0YXNrKTtcbiAgICAgIH1cbiAgICB9XG4gIH0sXG5cbiAgLy8gTnVtYmVyIGJhY2tncm91bmQgdGFza2VzXG4gIGdldE5vbkJhY2tncm91bmRSdW5uaW5nQ291bnQ6IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gbm9uQmFja2dyb3VuZFJ1bm5pbmdDb3VudDtcbiAgfSxcblxuICAvLyBJbmNyZW1lbnQgY3VycmVudCB0YXNrIElEIGFuZCByZXR1cm5cbiAgZ2V0VGFza0lkOiBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIGN1cnJlbnRUYXNrSWQrKztcbiAgfSxcblxuICAvLyBSZXNvbHZlIGFjdGl2YXRlL2RlYWN0aXZhdGUgdGFza2VzIGFuZCByZXR1cm4gYWN0aXZlIGlkc1xuICBnZXRBY3RpdmVJZHM6IGZ1bmN0aW9uICgpIHtcbiAgICAvKlxuICAgICAgdGFzayBkZWFjdGl2YXRlIHF1ZXVlXG4gICAgKi9cbiAgICB2YXIgZGVhY3RpdmF0ZVF1ZXVlTGVuZ3RoID0gZGVhY3RpdmF0ZVF1ZXVlLmxlbmd0aDtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZGVhY3RpdmF0ZVF1ZXVlTGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZCA9IGRlYWN0aXZhdGVRdWV1ZVtpXTtcbiAgICAgIHZhciBhY3RpdmVJZEluZGV4ID0gcnVubmluZ0lkcy5pbmRleE9mKGlkKTtcbiAgICAgIHZhciB0YXNrID0gYWN0aXZlVGFza3NbaWRdO1xuXG4gICAgICAvLyBJZiB0aGlzIGlzIGEgcnVubmluZyB0YXNrLCBkZWFjdGl2YXRlXG4gICAgICBpZiAoYWN0aXZlSWRJbmRleCA+IC0xKSB7XG4gICAgICAgIHJ1bm5pbmdJZHMuc3BsaWNlKGFjdGl2ZUlkSW5kZXgsIDEpO1xuICAgICAgICB1cGRhdGVSdW5uaW5nQ291bnQoZmFsc2UsIHRhc2suaXNMYXp5KTtcbiAgICAgICAgZGVsZXRlIGFjdGl2ZVRhc2tzW2lkXTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvKlxuICAgICAgRW1wdHkgZGVhY3RpdmF0ZSBxdWV1ZS4gV2UgdXNlIGBBcnJheS5zcGxpY2VgIGJlY2F1c2UgaXQgZG9lc24ndFxuICAgICAgd29ya3Mgb24gdGhlIG9yaWdpbmFsIGFycmF5IHNvIHdlIGRvbid0IGhhdmUgdG8gZ2FyYmFnZSBjb2xsZWN0IGFueXRoaW5nXG4gICAgKi9cbiAgICBkZWFjdGl2YXRlUXVldWUuc3BsaWNlKDAsIGRlYWN0aXZhdGVRdWV1ZUxlbmd0aCk7XG5cbiAgICAvKlxuICAgICAgdGFzayBhY3RpdmF0ZSBxdWV1ZVxuICAgICovXG4gICAgdmFyIGFjdGl2YXRlUXVldWVMZW5ndGggPSBhY3RpdmF0ZVF1ZXVlLmxlbmd0aDtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBhY3RpdmF0ZVF1ZXVlTGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkID0gYWN0aXZhdGVRdWV1ZVtfaV07XG4gICAgICB2YXIgX2FjdGl2ZUlkSW5kZXggPSBydW5uaW5nSWRzLmluZGV4T2YoX2lkKTtcbiAgICAgIHZhciBfdGFzayA9IGFjdGl2ZVRhc2tzW19pZF07XG5cbiAgICAgIC8vIElmIHRhc2sgaXNuJ3QgYWxyZWFkeSBydW5uaW5nLCBhY3RpdmF0ZVxuICAgICAgaWYgKF9hY3RpdmVJZEluZGV4ID09PSAtMSAmJiBfdGFzaykge1xuICAgICAgICBpZiAoX3Rhc2suaXNQcmlvcml0eSkge1xuICAgICAgICAgIHJ1bm5pbmdJZHMudW5zaGlmdChfaWQpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJ1bm5pbmdJZHMucHVzaChfaWQpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKF90YXNrLm9uQWN0aXZhdGVMb29wKSB7XG4gICAgICAgICAgX3Rhc2sub25BY3RpdmF0ZUxvb3AoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHVwZGF0ZVJ1bm5pbmdDb3VudCh0cnVlLCBfdGFzay5pc0xhenkpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGFjdGl2YXRlUXVldWUuc3BsaWNlKDAsIGFjdGl2YXRlUXVldWVMZW5ndGgpO1xuXG4gICAgcmV0dXJuIHJ1bm5pbmdJZHM7XG4gIH1cbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5OeVl5OTBZWE5yTDIxaGJtRm5aWEl1YW5NaVhTd2libUZ0WlhNaU9sdGRMQ0p0WVhCd2FXNW5jeUk2SWpzN096dEJRVU5CTEVsQlFVa3NaMEpCUVdkQ0xFTkJRWEJDT3pzN1FVRkhRU3hKUVVGSkxHOUNRVUZ2UWl4RFFVRjRRanM3TzBGQlIwRXNTVUZCU1N3MFFrRkJORUlzUTBGQmFFTTdPenRCUVVkQkxFbEJRVTBzWVVGQllTeEZRVUZ1UWpzN08wRkJSMEVzU1VGQlRTeGpRVUZqTEVWQlFYQkNPenM3UVVGSFFTeEpRVUZOTEdkQ1FVRm5RaXhGUVVGMFFqczdPMEZCUjBFc1NVRkJUU3hyUWtGQmEwSXNSVUZCZUVJN096czdPenM3T3p0QlFWTkJMRWxCUVUwc1pVRkJaU3hWUVVGRExFVkJRVVFzUlVGQlN5eE5RVUZNTEVWQlFXRXNUMEZCWWl4RlFVRjVRanRCUVVNMVF5eE5RVUZOTEdGQlFXRXNUMEZCVHl4UFFVRlFMRU5CUVdVc1JVRkJaaXhEUVVGdVFqdEJRVU5CTEUxQlFVMHNZMEZCWXl4UlFVRlJMRTlCUVZJc1EwRkJaMElzUlVGQmFFSXNRMEZCY0VJN08wRkJSVUVzVFVGQlNTeGxRVUZsTEVOQlFVTXNRMEZCY0VJc1JVRkJkVUk3UVVGRGNrSXNWMEZCVHl4SlFVRlFMRU5CUVZrc1JVRkJXanRCUVVORU96dEJRVVZFTEUxQlFVa3NZMEZCWXl4RFFVRkRMRU5CUVc1Q0xFVkJRWE5DTzBGQlEzQkNMRmxCUVZFc1RVRkJVaXhEUVVGbExGZEJRV1lzUlVGQk5FSXNRMEZCTlVJN1FVRkRSRHRCUVVOR0xFTkJXRVE3T3pzN096czdPMEZCYlVKQkxFbEJRVTBzY1VKQlFYRkNMRlZCUVVNc1IwRkJSQ3hGUVVGTkxFMUJRVTRzUlVGQmFVSTdRVUZETVVNc1RVRkJUU3hUUVVGVExFMUJRVTBzUTBGQlRpeEhRVUZWTEVOQlFVTXNRMEZCTVVJN08wRkJSVUVzZFVKQlFYRkNMRTFCUVhKQ096dEJRVVZCTEUxQlFVa3NRMEZCUXl4TlFVRk1MRVZCUVdFN1FVRkRXQ3hwUTBGQk5rSXNUVUZCTjBJN1FVRkRSRHRCUVVOR0xFTkJVa1E3TzJ0Q1FWVmxPMEZCUTJJc01FSkJSR0U3T3p0QlFVbGlMRmxCUVZVc1ZVRkJReXhGUVVGRUxFVkJRVXNzU1VGQlRDeEZRVUZqTzBGQlEzUkNMR2RDUVVGWkxFVkJRVm9zU1VGQmEwSXNTVUZCYkVJN1FVRkRRU3hUUVVGTExGRkJRVXdzUjBGQlowSXNTVUZCYUVJN1FVRkRRU3hwUWtGQllTeEZRVUZpTEVWQlFXbENMR0ZCUVdwQ0xFVkJRV2RETEdWQlFXaERPenRCUVVWQkxGRkJRVWtzUzBGQlN5eFZRVUZVTEVWQlFYRkNPMEZCUTI1Q0xGZEJRVXNzVlVGQlRDeERRVUZuUWl4SlFVRm9RanRCUVVORU96dEJRVVZFTEZGQlFVa3NTMEZCU3l4alFVRlVMRVZCUVhsQ08wRkJRM1pDTEZkQlFVc3NZMEZCVEN4RFFVRnZRaXhKUVVGd1FqdEJRVU5FTzBGQlEwWXNSMEZvUWxrN096dEJRVzFDWWl4alFVRlpMRlZCUVVNc1JVRkJSQ3hGUVVGUk8wRkJRMnhDTEZGQlFVMHNUMEZCVHl4WlFVRlpMRVZCUVZvc1EwRkJZanM3UVVGRlFTeFJRVUZKTEVsQlFVb3NSVUZCVlR0QlFVTlNMRzFDUVVGaExFVkJRV0lzUlVGQmFVSXNaVUZCYWtJc1JVRkJhME1zWVVGQmJFTTdRVUZEUVN4WFFVRkxMRkZCUVV3c1IwRkJaMElzUzBGQmFFSTdPMEZCUlVFc1ZVRkJTU3hMUVVGTExGbEJRVlFzUlVGQmRVSTdRVUZEY2tJc1lVRkJTeXhaUVVGTUxFTkJRV3RDTEVsQlFXeENPMEZCUTBRN1FVRkRSanRCUVVOR0xFZEJPVUpaT3pzN1FVRnBRMklzWjBOQlFUaENPMEZCUVVFc1YwRkJUU3g1UWtGQlRqdEJRVUZCTEVkQmFrTnFRanM3TzBGQmIwTmlMR0ZCUVZjN1FVRkJRU3hYUVVGTkxHVkJRVTQ3UVVGQlFTeEhRWEJEUlRzN08wRkJkVU5pTEdkQ1FVRmpMRmxCUVUwN096czdRVUZKYkVJc1VVRkJUU3gzUWtGQmQwSXNaMEpCUVdkQ0xFMUJRVGxET3p0QlFVVkJMRk5CUVVzc1NVRkJTU3hKUVVGSkxFTkJRV0lzUlVGQlowSXNTVUZCU1N4eFFrRkJjRUlzUlVGQk1rTXNSMEZCTTBNc1JVRkJaMFE3UVVGRE9VTXNWVUZCVFN4TFFVRkxMR2RDUVVGblFpeERRVUZvUWl4RFFVRllPMEZCUTBFc1ZVRkJUU3huUWtGQlowSXNWMEZCVnl4UFFVRllMRU5CUVcxQ0xFVkJRVzVDTEVOQlFYUkNPMEZCUTBFc1ZVRkJUU3hQUVVGUExGbEJRVmtzUlVGQldpeERRVUZpT3pzN1FVRkhRU3hWUVVGSkxHZENRVUZuUWl4RFFVRkRMRU5CUVhKQ0xFVkJRWGRDTzBGQlEzUkNMRzFDUVVGWExFMUJRVmdzUTBGQmEwSXNZVUZCYkVJc1JVRkJhVU1zUTBGQmFrTTdRVUZEUVN3eVFrRkJiVUlzUzBGQmJrSXNSVUZCTUVJc1MwRkJTeXhOUVVFdlFqdEJRVU5CTEdWQlFVOHNXVUZCV1N4RlFVRmFMRU5CUVZBN1FVRkRSRHRCUVVOR096czdPenM3UVVGTlJDeHZRa0ZCWjBJc1RVRkJhRUlzUTBGQmRVSXNRMEZCZGtJc1JVRkJNRUlzY1VKQlFURkNPenM3T3p0QlFVdEJMRkZCUVUwc2MwSkJRWE5DTEdOQlFXTXNUVUZCTVVNN08wRkJSVUVzVTBGQlN5eEpRVUZKTEV0QlFVa3NRMEZCWWl4RlFVRm5RaXhMUVVGSkxHMUNRVUZ3UWl4RlFVRjVReXhKUVVGNlF5eEZRVUU0UXp0QlFVTTFReXhWUVVGTkxFMUJRVXNzWTBGQll5eEZRVUZrTEVOQlFWZzdRVUZEUVN4VlFVRk5MR2xDUVVGblFpeFhRVUZYTEU5QlFWZ3NRMEZCYlVJc1IwRkJia0lzUTBGQmRFSTdRVUZEUVN4VlFVRk5MRkZCUVU4c1dVRkJXU3hIUVVGYUxFTkJRV0k3T3p0QlFVZEJMRlZCUVVrc2JVSkJRV3RDTEVOQlFVTXNRMEZCYmtJc1NVRkJkMElzUzBGQk5VSXNSVUZCYTBNN1FVRkRhRU1zV1VGQlNTeE5RVUZMTEZWQlFWUXNSVUZCY1VJN1FVRkRia0lzY1VKQlFWY3NUMEZCV0N4RFFVRnRRaXhIUVVGdVFqdEJRVU5FTEZOQlJrUXNUVUZGVHp0QlFVTk1MSEZDUVVGWExFbEJRVmdzUTBGQlowSXNSMEZCYUVJN1FVRkRSRHM3UVVGRlJDeFpRVUZKTEUxQlFVc3NZMEZCVkN4RlFVRjVRanRCUVVOMlFpeG5Ra0ZCU3l4alFVRk1PMEZCUTBRN08wRkJSVVFzTWtKQlFXMUNMRWxCUVc1Q0xFVkJRWGxDTEUxQlFVc3NUVUZCT1VJN1FVRkRSRHRCUVVOR096dEJRVVZFTEd0Q1FVRmpMRTFCUVdRc1EwRkJjVUlzUTBGQmNrSXNSVUZCZDBJc2JVSkJRWGhDT3p0QlFVVkJMRmRCUVU4c1ZVRkJVRHRCUVVORU8wRkJOMFpaTEVNaUxDSm1hV3hsSWpvaWJXRnVZV2RsY2k1cWN5SXNJbk52ZFhKalpWSnZiM1FpT2lJdlZYTmxjbk12YldGMGRIQmxjbko1TDFOcGRHVnpMM0J2Y0cxdmRHbHZiaUlzSW5OdmRYSmpaWE5EYjI1MFpXNTBJanBiSWk4dklGdHBiblJkT2lCSmJtTnlaVzFsYm5SbFpDQm1iM0lnWldGamFDQnVaWGNnY25WdWJtbHVaeUIwWVhOclhHNXNaWFFnWTNWeWNtVnVkRlJoYzJ0SlpDQTlJREE3WEc1Y2JpOHZJRnRwYm5SZE9pQk9kVzFpWlhJZ2IyWWdZV3hzSUhKMWJtNXBibWNnZEdGemEyVnpYRzVzWlhRZ2RHOTBZV3hTZFc1dWFXNW5RMjkxYm5RZ1BTQXdPMXh1WEc0dkx5QmJhVzUwWFRvZ1RuVnRZbVZ5SUc5bUlISjFibTVwYm1jZ2RHRnphMlZ6SUdWNFkyeDFaR2x1WnlCaVlXTnJaM0p2ZFc1a0lIUmhjMnRsYzF4dWJHVjBJRzV2YmtKaFkydG5jbTkxYm1SU2RXNXVhVzVuUTI5MWJuUWdQU0F3TzF4dVhHNHZMeUJiWVhKeVlYbGRPaUJCY25KaGVTQnZaaUJ5ZFc1dWFXNW5JSFJoYzJzZ1NVUnpYRzVqYjI1emRDQnlkVzV1YVc1blNXUnpJRDBnVzEwN1hHNWNiaTh2SUZ0dlltcGxZM1JkT2lCTllYQWdiMllnY25WdWJtbHVaeUIwWVhOclpYTmNibU52Ym5OMElHRmpkR2wyWlZSaGMydHpJRDBnZTMwN1hHNWNiaTh2SUZ0aGNuSmhlVjA2SUVGeWNtRjVJRzltSUhSaGMyc2dTVVJ6SUhGMVpYVmxaQ0JtYjNJZ1lXTjBhWFpoZEdsdmJseHVZMjl1YzNRZ1lXTjBhWFpoZEdWUmRXVjFaU0E5SUZ0ZE8xeHVYRzR2THlCYllYSnlZWGxkT2lCQmNuSmhlU0J2WmlCMFlYTnJJRWxFY3lCeGRXVjFaV1FnWm05eUlHUmxZV04wYVhaaGRHbHZibHh1WTI5dWMzUWdaR1ZoWTNScGRtRjBaVkYxWlhWbElEMGdXMTA3WEc1Y2JpOHFYRzRnSUZWd1pHRjBaU0JoWTNScGRtRjBaUzlrWldGamRHbDJZWFJsSUhGMVpYVmxjMXh1WEc0Z0lFQndZWEpoYlNCYmJuVnRZbVZ5WFZ4dUlDQkFjR0Z5WVcwZ1cyRnljbUY1WFZ4dUlDQkFjR0Z5WVcwZ1cyRnljbUY1WFZ4dUtpOWNibU52Ym5OMElIVndaR0YwWlZGMVpYVmxjeUE5SUNocFpDd2dhVzVNYVhOMExDQnZkWFJNYVhOMEtTQTlQaUI3WEc0Z0lHTnZibk4wSUdsdVVHOXphWFJwYjI0Z1BTQnBia3hwYzNRdWFXNWtaWGhQWmlocFpDazdYRzRnSUdOdmJuTjBJRzkxZEZCdmMybDBhVzl1SUQwZ2IzVjBUR2x6ZEM1cGJtUmxlRTltS0dsa0tUdGNibHh1SUNCcFppQW9hVzVRYjNOcGRHbHZiaUE5UFQwZ0xURXBJSHRjYmlBZ0lDQnBia3hwYzNRdWNIVnphQ2hwWkNrN1hHNGdJSDFjYmx4dUlDQnBaaUFvYjNWMFVHOXphWFJwYjI0Z1BpQXRNU2tnZTF4dUlDQWdJRzkxZEV4cGMzUXVjM0JzYVdObEtHOTFkRkJ2YzJsMGFXOXVMQ0F4S1R0Y2JpQWdmVnh1ZlR0Y2JseHVMeXBjYmlBZ1ZYQmtZWFJsSUhKMWJtNXBibWRjYmx4dUlDQmJZbTl2YkdWaGJsMDZJR0IwY25WbFlDQjBieUJoWkdSY2JpQWdXMkp2YjJ4bFlXNWRPaUJnZEhKMVpXQWdhV1lnYkdGNmVWeHVLaTljYm1OdmJuTjBJSFZ3WkdGMFpWSjFibTVwYm1kRGIzVnVkQ0E5SUNoaFpHUXNJR2x6VEdGNmVTa2dQVDRnZTF4dUlDQmpiMjV6ZENCdGIyUnBabmtnUFNCaFpHUWdQeUF4SURvZ0xURTdYRzVjYmlBZ2RHOTBZV3hTZFc1dWFXNW5RMjkxYm5RZ0t6MGdiVzlrYVdaNU8xeHVYRzRnSUdsbUlDZ2hhWE5NWVhwNUtTQjdYRzRnSUNBZ2JtOXVRbUZqYTJkeWIzVnVaRkoxYm01cGJtZERiM1Z1ZENBclBTQnRiMlJwWm5rN1hHNGdJSDFjYm4wN1hHNWNibVY0Y0c5eWRDQmtaV1poZFd4MElIdGNiaUFnWVdOMGFYWmxWR0Z6YTNNc1hHNWNiaUFnTHk4Z1FXTjBhWFpoZEdVZ1lTQjBZWE5yWEc0Z0lHRmpkR2wyWVhSbE9pQW9hV1FzSUhSaGMyc3BJRDArSUh0Y2JpQWdJQ0JoWTNScGRtVlVZWE5yYzF0cFpGMGdQU0IwWVhOck8xeHVJQ0FnSUhSaGMyc3VhWE5CWTNScGRtVWdQU0IwY25WbE8xeHVJQ0FnSUhWd1pHRjBaVkYxWlhWbGN5aHBaQ3dnWVdOMGFYWmhkR1ZSZFdWMVpTd2daR1ZoWTNScGRtRjBaVkYxWlhWbEtUdGNibHh1SUNBZ0lHbG1JQ2gwWVhOckxtOXVRV04wYVhaaGRHVXBJSHRjYmlBZ0lDQWdJSFJoYzJzdWIyNUJZM1JwZG1GMFpTaDBZWE5yS1R0Y2JpQWdJQ0I5WEc1Y2JpQWdJQ0JwWmlBb2RHRnpheTV2YmtGamRHbDJZWFJsVDI1alpTa2dlMXh1SUNBZ0lDQWdkR0Z6YXk1dmJrRmpkR2wyWVhSbFQyNWpaU2gwWVhOcktUdGNiaUFnSUNCOVhHNGdJSDBzWEc1Y2JpQWdMeThnUkdWaFkzUnBkbUYwWlNCaElIUmhjMnRjYmlBZ1pHVmhZM1JwZG1GMFpUb2dLR2xrS1NBOVBpQjdYRzRnSUNBZ1kyOXVjM1FnZEdGemF5QTlJR0ZqZEdsMlpWUmhjMnR6VzJsa1hUdGNibHh1SUNBZ0lHbG1JQ2gwWVhOcktTQjdYRzRnSUNBZ0lDQjFjR1JoZEdWUmRXVjFaWE1vYVdRc0lHUmxZV04wYVhaaGRHVlJkV1YxWlN3Z1lXTjBhWFpoZEdWUmRXVjFaU2s3WEc0Z0lDQWdJQ0IwWVhOckxtbHpRV04wYVhabElEMGdabUZzYzJVN1hHNWNiaUFnSUNBZ0lHbG1JQ2gwWVhOckxtOXVSR1ZoWTNScGRtRjBaU2tnZTF4dUlDQWdJQ0FnSUNCMFlYTnJMbTl1UkdWaFkzUnBkbUYwWlNoMFlYTnJLVHRjYmlBZ0lDQWdJSDFjYmlBZ0lDQjlYRzRnSUgwc1hHNWNiaUFnTHk4Z1RuVnRZbVZ5SUdKaFkydG5jbTkxYm1RZ2RHRnphMlZ6WEc0Z0lHZGxkRTV2YmtKaFkydG5jbTkxYm1SU2RXNXVhVzVuUTI5MWJuUTZJQ2dwSUQwK0lHNXZia0poWTJ0bmNtOTFibVJTZFc1dWFXNW5RMjkxYm5Rc1hHNWNiaUFnTHk4Z1NXNWpjbVZ0Wlc1MElHTjFjbkpsYm5RZ2RHRnpheUJKUkNCaGJtUWdjbVYwZFhKdVhHNGdJR2RsZEZSaGMydEpaRG9nS0NrZ1BUNGdZM1Z5Y21WdWRGUmhjMnRKWkNzckxGeHVYRzRnSUM4dklGSmxjMjlzZG1VZ1lXTjBhWFpoZEdVdlpHVmhZM1JwZG1GMFpTQjBZWE5yWlhNZ1lXNWtJSEpsZEhWeWJpQmhZM1JwZG1VZ2FXUnpYRzRnSUdkbGRFRmpkR2wyWlVsa2N6b2dLQ2tnUFQ0Z2UxeHVJQ0FnSUM4cVhHNGdJQ0FnSUNCMFlYTnJJR1JsWVdOMGFYWmhkR1VnY1hWbGRXVmNiaUFnSUNBcUwxeHVJQ0FnSUdOdmJuTjBJR1JsWVdOMGFYWmhkR1ZSZFdWMVpVeGxibWQwYUNBOUlHUmxZV04wYVhaaGRHVlJkV1YxWlM1c1pXNW5kR2c3WEc1Y2JpQWdJQ0JtYjNJZ0tHeGxkQ0JwSUQwZ01Ec2dhU0E4SUdSbFlXTjBhWFpoZEdWUmRXVjFaVXhsYm1kMGFEc2dhU3NyS1NCN1hHNGdJQ0FnSUNCamIyNXpkQ0JwWkNBOUlHUmxZV04wYVhaaGRHVlJkV1YxWlZ0cFhUdGNiaUFnSUNBZ0lHTnZibk4wSUdGamRHbDJaVWxrU1c1a1pYZ2dQU0J5ZFc1dWFXNW5TV1J6TG1sdVpHVjRUMllvYVdRcE8xeHVJQ0FnSUNBZ1kyOXVjM1FnZEdGemF5QTlJR0ZqZEdsMlpWUmhjMnR6VzJsa1hUdGNibHh1SUNBZ0lDQWdMeThnU1dZZ2RHaHBjeUJwY3lCaElISjFibTVwYm1jZ2RHRnpheXdnWkdWaFkzUnBkbUYwWlZ4dUlDQWdJQ0FnYVdZZ0tHRmpkR2wyWlVsa1NXNWtaWGdnUGlBdE1Ta2dlMXh1SUNBZ0lDQWdJQ0J5ZFc1dWFXNW5TV1J6TG5Od2JHbGpaU2hoWTNScGRtVkpaRWx1WkdWNExDQXhLVHRjYmlBZ0lDQWdJQ0FnZFhCa1lYUmxVblZ1Ym1sdVowTnZkVzUwS0daaGJITmxMQ0IwWVhOckxtbHpUR0Y2ZVNrN1hHNGdJQ0FnSUNBZ0lHUmxiR1YwWlNCaFkzUnBkbVZVWVhOcmMxdHBaRjA3WEc0Z0lDQWdJQ0I5WEc0Z0lDQWdmVnh1WEc0Z0lDQWdMeXBjYmlBZ0lDQWdJRVZ0Y0hSNUlHUmxZV04wYVhaaGRHVWdjWFZsZFdVdUlGZGxJSFZ6WlNCZ1FYSnlZWGt1YzNCc2FXTmxZQ0JpWldOaGRYTmxJR2wwSUdSdlpYTnVKM1JjYmlBZ0lDQWdJSGR2Y210eklHOXVJSFJvWlNCdmNtbG5hVzVoYkNCaGNuSmhlU0J6YnlCM1pTQmtiMjRuZENCb1lYWmxJSFJ2SUdkaGNtSmhaMlVnWTI5c2JHVmpkQ0JoYm5sMGFHbHVaMXh1SUNBZ0lDb3ZYRzRnSUNBZ1pHVmhZM1JwZG1GMFpWRjFaWFZsTG5Od2JHbGpaU2d3TENCa1pXRmpkR2wyWVhSbFVYVmxkV1ZNWlc1bmRHZ3BPMXh1WEc0Z0lDQWdMeXBjYmlBZ0lDQWdJSFJoYzJzZ1lXTjBhWFpoZEdVZ2NYVmxkV1ZjYmlBZ0lDQXFMMXh1SUNBZ0lHTnZibk4wSUdGamRHbDJZWFJsVVhWbGRXVk1aVzVuZEdnZ1BTQmhZM1JwZG1GMFpWRjFaWFZsTG14bGJtZDBhRHRjYmx4dUlDQWdJR1p2Y2lBb2JHVjBJR2tnUFNBd095QnBJRHdnWVdOMGFYWmhkR1ZSZFdWMVpVeGxibWQwYURzZ2FTc3JLU0I3WEc0Z0lDQWdJQ0JqYjI1emRDQnBaQ0E5SUdGamRHbDJZWFJsVVhWbGRXVmJhVjA3WEc0Z0lDQWdJQ0JqYjI1emRDQmhZM1JwZG1WSlpFbHVaR1Y0SUQwZ2NuVnVibWx1WjBsa2N5NXBibVJsZUU5bUtHbGtLVHRjYmlBZ0lDQWdJR052Ym5OMElIUmhjMnNnUFNCaFkzUnBkbVZVWVhOcmMxdHBaRjA3WEc1Y2JpQWdJQ0FnSUM4dklFbG1JSFJoYzJzZ2FYTnVKM1FnWVd4eVpXRmtlU0J5ZFc1dWFXNW5MQ0JoWTNScGRtRjBaVnh1SUNBZ0lDQWdhV1lnS0dGamRHbDJaVWxrU1c1a1pYZ2dQVDA5SUMweElDWW1JSFJoYzJzcElIdGNiaUFnSUNBZ0lDQWdhV1lnS0hSaGMyc3VhWE5RY21sdmNtbDBlU2tnZTF4dUlDQWdJQ0FnSUNBZ0lISjFibTVwYm1kSlpITXVkVzV6YUdsbWRDaHBaQ2s3WEc0Z0lDQWdJQ0FnSUgwZ1pXeHpaU0I3WEc0Z0lDQWdJQ0FnSUNBZ2NuVnVibWx1WjBsa2N5NXdkWE5vS0dsa0tUdGNiaUFnSUNBZ0lDQWdmVnh1WEc0Z0lDQWdJQ0FnSUdsbUlDaDBZWE5yTG05dVFXTjBhWFpoZEdWTWIyOXdLU0I3WEc0Z0lDQWdJQ0FnSUNBZ2RHRnpheTV2YmtGamRHbDJZWFJsVEc5dmNDZ3BPMXh1SUNBZ0lDQWdJQ0I5WEc1Y2JpQWdJQ0FnSUNBZ2RYQmtZWFJsVW5WdWJtbHVaME52ZFc1MEtIUnlkV1VzSUhSaGMyc3VhWE5NWVhwNUtUdGNiaUFnSUNBZ0lIMWNiaUFnSUNCOVhHNWNiaUFnSUNCaFkzUnBkbUYwWlZGMVpYVmxMbk53YkdsalpTZ3dMQ0JoWTNScGRtRjBaVkYxWlhWbFRHVnVaM1JvS1R0Y2JseHVJQ0FnSUhKbGRIVnliaUJ5ZFc1dWFXNW5TV1J6TzF4dUlDQjlYRzU5TzF4dUlsMTlcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL3Rhc2svbWFuYWdlci5qc1xuICoqIG1vZHVsZSBpZCA9IDUzXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iXSwic291cmNlUm9vdCI6IiIsImZpbGUiOiJwb3Btb3Rpb24uZ2xvYmFsLmpzIn0=